"""
Fetch product list from sagarbiotech.in and download images.
Output: products.json with title, slug, image_local, category, short_desc
"""
import urllib.request
import urllib.error
import re
import os
import json
import time
import ssl

BASE = "https://sagarbiotech.in"
SSL_CTX = ssl.create_default_context()

CATEGORIES = [
    ("watermelon", "watermelon", "https://sagarbiotech.in/product-category/watermelon/"),
    ("watermelon", "watermelon", "https://sagarbiotech.in/product-category/watermelon/page/2/"),
    ("muskmelon", "melon", "https://sagarbiotech.in/product-category/muskmelon/"),
    ("chilli", "pepper", "https://sagarbiotech.in/product-category/chilli/"),
    ("capsicum", "pepper", "https://sagarbiotech.in/product-category/capsicum/"),
    ("cucumber", "cucumber", "https://sagarbiotech.in/product-category/cucumber/"),
    ("tinda", "other-vegetables", "https://sagarbiotech.in/product-category/tinda/"),
    ("okra", "other-vegetables", "https://sagarbiotech.in/product-category/okra/"),
    ("tomato", "tomato", "https://sagarbiotech.in/product-category/tomato/"),
    ("pumpkin", "pumpkin", "https://sagarbiotech.in/product-category/pumpkin/"),
    ("bitter-gourd", "bitter-gourd", "https://sagarbiotech.in/product-category/bitter-gourd/"),
    ("bottle-gourd", "bottle-gourd", "https://sagarbiotech.in/product-category/bottle-gourd/"),
    ("sponge-gourd", "sponge-gourd", "https://sagarbiotech.in/product-category/sponge-gourd/"),
    ("ridge-gourd", "ridge-gourd", "https://sagarbiotech.in/product-category/ridge-gourd/"),
    ("onion", "other-vegetables", "https://sagarbiotech.in/product-category/onion/"),
    ("marigold", "flower", "https://sagarbiotech.in/product-category/marigold/"),
    ("wal-papdi", "field-crop", "https://sagarbiotech.in/product-category/wal-papdi/"),
    ("plant-protection", "pesticides", "https://sagarbiotech.in/product-category/plant-protection/"),
]

def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"})
    with urllib.request.urlopen(req, timeout=20, context=SSL_CTX) as r:
        return r.read().decode("utf-8", errors="replace")

def extract_product_links(html, base=BASE):
    # Links to /product/something/
    pattern = r'href="(' + re.escape(base) + r'/product/[^"/]+/?)"'
    links = list(dict.fromkeys(re.findall(pattern, html)))
    return links

def extract_product_data(html, product_url):
    # Title: often in og:title or <h1> or .product_title
    title = None
    m = re.search(r'<meta[^>]+property="og:title"[^>]+content="([^"]+)"', html)
    if m:
        title = m.group(1).strip()
    if not title:
        m = re.search(r'<h1[^>]*class="[^"]*product_title[^"]*"[^>]*>([^<]+)</h1>', html)
        if m:
            title = m.group(1).strip()
    if not title:
        m = re.search(r'<title>([^<]+)</title>', html)
        if m:
            title = m.group(1).split("|")[0].strip() if "|" in m.group(1) else m.group(1).strip()
    if not title:
        title = "Unknown"

    # Main product image: woocommerce single product or first large image
    img_url = None
    for pat in [
        r'data-large_image="(https?://[^"]+\.(?:jpg|jpeg|png|webp)[^"]*)"',
        r'data-src="(https?://[^"]+\.(?:jpg|jpeg|png|webp)[^"]*)"',
        r'<img[^>]+class="[^"]*wp-post-image[^"]*"[^>]+src="(https?://[^"]+)"',
        r'src="(https?://[^"]+sagarbiotech[^"]+\.(?:jpg|jpeg|png|webp)[^"]*)"',
        r'src="(https?://[^"]+wp-content[^"]+\.(?:jpg|jpeg|png|webp)[^"]*)"',
    ]:
        m = re.search(pat, html, re.I)
        if m:
            img_url = m.group(1).split(" ")[0]
            if "sagarbiotech" in img_url or "wp-content" in img_url:
                break
    if not img_url:
        imgs = re.findall(r'src="(https?://[^"]+\.(?:jpg|jpeg|png|webp)[^"]*)"', html)
        for u in imgs:
            if "logo" not in u.lower() and "avatar" not in u.lower():
                img_url = u
                break

    return {"title": title, "image_url": img_url, "url": product_url}

def safe_filename(s, max_len=60):
    s = re.sub(r'[^\w\s\-]', '', s)
    s = re.sub(r'[\s_]+', '-', s).strip("-").lower()
    return s[:max_len] if s else "product"

def download_image(url, out_path):
    if not url or not url.startswith("http"):
        return False
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=15, context=SSL_CTX) as r:
            data = r.read()
        with open(out_path, "wb") as f:
            f.write(data)
        return True
    except Exception as e:
        print("  Download fail:", e)
        return False

def main():
    os.makedirs("images", exist_ok=True)
    seen_urls = set()
    products_by_category = {}

    for cat_slug, our_page, category_url in CATEGORIES:
        if our_page not in products_by_category:
            products_by_category[our_page] = []
        try:
            print("Category:", cat_slug, category_url)
            html = fetch(category_url)
            links = extract_product_links(html)
            for link in links:
                if link in seen_urls:
                    continue
                seen_urls.add(link)
                time.sleep(0.5)
                try:
                    page_html = fetch(link)
                    data = extract_product_data(page_html, link)
                    slug = link.rstrip("/").split("/")[-1]
                    safe_name = safe_filename(data["title"]) or slug
                    img_ext = ".jpg"
                    if data["image_url"]:
                        for e in [".png", ".webp", ".jpeg"]:
                            if e in data["image_url"].lower():
                                img_ext = e
                                break
                    img_local = "images/sagar-{}-{}{}".format(our_page, safe_name[:40], img_ext)
                    if data["image_url"] and not os.path.exists(img_local):
                        if download_image(data["image_url"], img_local):
                            print("  Downloaded:", img_local)
                        else:
                            img_local = ""
                    elif data["image_url"] and os.path.exists(img_local):
                        img_local = img_local.replace("\\", "/")
                    else:
                        img_local = ""

                    products_by_category[our_page].append({
                        "title": data["title"],
                        "image": img_local,
                        "slug": slug,
                        "short_desc": "Hybrid | Sagar Biotech | Quality Seeds",
                    })
                    print("  ", data["title"])
                except Exception as e:
                    print("  Error", link, e)
        except Exception as e:
            print("Category error:", e)

    with open("scripts/products_sagar.json", "w", encoding="utf-8") as f:
        json.dump(products_by_category, f, indent=2, ensure_ascii=False)
    print("Saved scripts/products_sagar.json")

if __name__ == "__main__":
    main()
