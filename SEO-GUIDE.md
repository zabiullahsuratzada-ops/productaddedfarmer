# Farmer Group Afghanistan – Complete SEO & Technical Optimization Guide

**Website:** https://farmergroupaf.com  
**Purpose:** Step-by-step, beginner-friendly guide with ready-to-use elements.

---

## 1. Sitemap Structure (What Pages to Include)

Your sitemap should include all **public, indexable** pages. Exclude temporary or duplicate content.

### Recommended structure

| Priority | Page type        | URL / file              | Include? |
|----------|------------------|--------------------------|----------|
| 1.0      | Homepage         | `/` or `index.html`      | Yes      |
| 0.9      | Main info        | `about.html`, `contact.html` | Yes  |
| 0.8      | Category         | `fertilizer.html`, `pesticides.html`, `plant-protection.html`, `field-crop.html`, `vegetable.html`, `fruit.html`, `flower.html`, `pulses.html` | Yes |
| 0.7      | Product / crop   | All seed & product pages (wheat, paddy, sunflower, tomato, etc.) | Yes |
| —        | Temp / draft     | `_temp_product.html`     | No       |

**Total:** 36 URLs (home + 35 HTML pages). Your existing `sitemap.xml` already follows this structure.

- **WordPress:** Use a plugin like **Yoast SEO** or **Rank Math** → enable XML sitemap. It will auto-include posts/pages. Submit the sitemap URL in **Google Search Console**.

---

## 2. robots.txt

File created: **`robots.txt`** in your site root.

```
User-agent: *
Allow: /
Sitemap: https://farmergroupaf.com/sitemap.xml
Disallow: /_temp_product.html
Disallow: /*.bak$
```

- **Static site:** Upload `robots.txt` to the same folder as `index.html`.
- **WordPress:** Create the file in the root (same level as `wp-config.php`) or use Yoast/Rank Math to generate it. Ensure the Sitemap line points to your sitemap URL.

---

## 3. SEO-Optimized Title & Meta Description (Every Page)

Use these in `<head>`: one `<title>` and one `<meta name="description" content="...">` per page. Keep titles under ~60 characters and descriptions under ~155 characters.

### Homepage
- **Title:** `Farmer Group Afghanistan | Quality Fertilizers & Agricultural Inputs`
- **Meta description:** `Leading supplier of quality fertilizers, seeds & plant protection in Afghanistan. Trusted by 5000+ farmers. Organic & chemical solutions for better yields.`

### Main pages
- **About** (`about.html`)  
  - **Title:** `About Us | Farmer Group Afghanistan – Agricultural Solutions`  
  - **Meta description:** `Since 2011 Farmer Group has supported Afghan farmers with quality fertilizers, seeds & expertise. Learn our mission, values and 15+ years of experience.`

- **Contact** (`contact.html`)  
  - **Title:** `Contact Farmer Group Afghanistan | Get in Touch`  
  - **Meta description:** `Contact Farmer Group for fertilizers, seeds & farm advice in Afghanistan. Phone, email & location. We respond within 24 hours.`

### Category pages
- **Fertilizer** (`fertilizer.html`)  
  - **Title:** `Fertilizers | Quality NPK & Organic Fertilizers – Farmer Group Afghanistan`  
  - **Meta description:** `Quality fertilizers for Afghan farms. Organic and chemical options for soil health and higher yields. Trusted by thousands of farmers.`

- **Pesticides** (`pesticides.html`)  
  - **Title:** `Pesticides & Plant Protection | Farmer Group Afghanistan`  
  - **Meta description:** `Effective plant protection and pesticides for crops in Afghanistan. Safe, quality products for healthy harvests.`

- **Plant Protection** (`plant-protection.html`)  
  - **Title:** `Plant Protection Products | Crop Care – Farmer Group Afghanistan`  
  - **Meta description:** `Complete plant protection solutions for Afghan farmers. Quality products for pest and disease control.`

- **Field crops** (`field-crop.html`)  
  - **Title:** `Field Crop Seeds | Wheat, Paddy, Maize & More – Farmer Group Afghanistan`  
  - **Meta description:** `Premium field crop seeds in Afghanistan: wheat, paddy, maize, bajra, sorghum, cotton, mustard, sunflower. High yield varieties.`

- **Vegetables** (`vegetable.html`)  
  - **Title:** `Vegetable Seeds | Tomato, Onion, Cucumber & More – Farmer Group Afghanistan`  
  - **Meta description:** `Quality vegetable seeds for Afghanistan. Tomato, onion, cucumber, okra, gourds and more. Better germination, better harvests.`

- **Fruit** (`fruit.html`)  
  - **Title:** `Fruit Seeds | Melon, Watermelon, Pumpkin – Farmer Group Afghanistan`  
  - **Meta description:** `Premium fruit seeds for Afghan farmers. Melon, watermelon, pumpkin and other fruit varieties. Quality you can trust.`

- **Flower** (`flower.html`)  
  - **Title:** `Flower Seeds | Marigold & Ornamental Seeds – Farmer Group Afghanistan`  
  - **Meta description:** `Flower and ornamental seeds in Afghanistan. Marigold and more. Add color and value to your farm.`

- **Pulses** (`pulses.html`)  
  - **Title:** `Pulses & Legume Seeds | Farmer Group Afghanistan`  
  - **Meta description:** `Quality pulses and legume seeds for Afghanistan. Support soil health and nutrition with trusted varieties.`

### Product / crop pages (pattern: [Product] | Farmer Group Afghanistan)

| Page file            | Title | Meta description |
|----------------------|--------|-------------------|
| `wheat.html`         | `Wheat Seeds | High Yield Varieties – Farmer Group Afghanistan` | `Quality wheat seeds for Afghanistan. High yield, disease-resistant varieties for better grain production.` |
| `paddy.html`         | `Paddy Rice Seeds | Quality Varieties – Farmer Group Afghanistan` | `Premium paddy and rice seeds for Afghanistan. Reliable varieties for optimal rice harvests.` |
| `maize.html`         | `Maize Seeds | Corn Varieties – Farmer Group Afghanistan` | `Quality maize (corn) seeds for Afghan farmers. High yield hybrids for grain and fodder.` |
| `bajra.html`         | `Bajra (Pearl Millet) Seeds | Farmer Group Afghanistan` | `Bajra and pearl millet seeds for Afghanistan. Drought-tolerant, high-nutrition varieties.` |
| `sorghum.html`       | `Jowar (Sorghum) Seeds | Farmer Group Afghanistan` | `Sorghum (jowar) seeds for Afghanistan. Reliable varieties for grain and fodder.` |
| `cotton.html`        | `Cotton Seeds | Quality Varieties – Farmer Group Afghanistan` | `Quality cotton seeds for Afghanistan. Better fiber and yield with trusted varieties.` |
| `mustard.html`       | `Mustard Seeds | Oilseed Varieties – Farmer Group Afghanistan` | `Mustard seeds for oil and spice. Quality varieties for Afghan farms.` |
| `sunflower.html`     | `Sunflower Seeds | Oil & Grain – Farmer Group Afghanistan` | `Hybrid sunflower seeds for oil and grain. Research-backed varieties for Afghanistan.` |
| `cucumber.html`      | `Cucumber Seeds | Quality Varieties – Farmer Group Afghanistan` | `Quality cucumber seeds for Afghanistan. High yield, disease-resistant varieties.` |
| `tomato.html`        | `Tomato Seeds | Hybrid Varieties – Farmer Group Afghanistan` | `Premium tomato seeds for Afghan farmers. Hybrid varieties for better yield and quality.` |
| `pepper.html`        | `Pepper Seeds | Chili & Bell Pepper – Farmer Group Afghanistan` | `Pepper seeds for chili and bell pepper. Quality varieties for Afghan farms.` |
| `eggplant.html`      | `Eggplant (Brinjal) Seeds | Farmer Group Afghanistan` | `Quality eggplant (brinjal) seeds for Afghanistan. Reliable varieties for kitchen and market.` |
| `onion.html`         | `Onion Seeds | Quality Varieties – Farmer Group Afghanistan` | `Onion seeds for Afghanistan. Quality varieties for better bulb size and storage.` |
| `okra.html`          | `Okra Seeds | Bhindi – Farmer Group Afghanistan` | `Okra (bhindi) seeds for Afghanistan. High yield varieties for fresh and market.` |
| `pumpkin.html`       | `Pumpkin Seeds | Quality Varieties – Farmer Group Afghanistan` | `Pumpkin seeds for Afghan farms. Quality varieties for food and fodder.` |
| `watermelon.html`    | `Watermelon Seeds | Sweet Varieties – Farmer Group Afghanistan` | `Premium watermelon seeds for Afghanistan. Sweet, high yield varieties.` |
| `melon.html`         | `Melon Seeds | Muskmelon & Cantaloupe – Farmer Group Afghanistan` | `Quality melon seeds for Afghanistan. Muskmelon and cantaloupe varieties.` |
| `tinda.html`         | `Tinda Seeds | Round Gourd – Farmer Group Afghanistan` | `Tinda (round gourd) seeds for Afghanistan. Reliable varieties for kitchen and market.` |
| `bitter-gourd.html`  | `Bitter Gourd Seeds | Karela – Farmer Group Afghanistan` | `Bitter gourd (karela) seeds for Afghanistan. Quality medicinal and vegetable varieties.` |
| `bottle-gourd.html`  | `Bottle Gourd Seeds | Lauki – Farmer Group Afghanistan` | `Bottle gourd (lauki) seeds for Afghanistan. High yield varieties.` |
| `ridge-gourd.html`   | `Ridge Gourd Seeds | Farmer Group Afghanistan` | `Ridge gourd seeds for Afghanistan. Quality varieties for kitchen and market.` |
| `sponge-gourd.html`  | `Sponge Gourd Seeds | Farmer Group Afghanistan` | `Sponge gourd seeds for Afghanistan. Reliable varieties for vegetables.` |
| `marigold.html`      | `Marigold Seeds | Flower Varieties – Farmer Group Afghanistan` | `Marigold seeds for Afghanistan. Ornamental and beneficial flower varieties.` |
| `wal-papdi.html`     | `Wal Papdi Seeds | Farmer Group Afghanistan` | `Wal papdi seeds for Afghanistan. Quality varieties from Farmer Group.` |
| `kaveri-vegetables.html` | `Kaveri Vegetables | Seeds – Farmer Group Afghanistan` | `Kaveri vegetable seeds for Afghanistan. Quality varieties for your farm.` |

**Implementation (static HTML):** In each `.html` file, replace the existing `<title>` and `<meta name="description" content="...">` in `<head>` with the values above.

**WordPress:** Edit each page/post → use the SEO section (Yoast or Rank Math) to set **SEO Title** and **Meta Description**. No need to edit theme files.

---

## 4. Heading Structure (H1, H2, H3)

**Rule:** One **H1** per page (main topic). **H2** for main sections, **H3** for subsections. Don’t skip levels (e.g. don’t go H1 → H3).

### Homepage (`index.html`)
- **H1:** `Farmer Group` (logo/site name) – keep as single main H1.
- **Change:** Remove duplicate H1s in slider (e.g. "Quality First!", "Natural Crop!") → use **H2** instead so only "Farmer Group" is H1.
- **H2:** What are we doing?
- **H3:** Contact Now, Quality Products, Corporate Service, Expert Staff, Nature Friendly, Fast Access, Supports Growth.

### About (`about.html`)
- **H1:** About Us (once, at top of content).
- **H2:** Our Story | Our Mission & Vision | Our Core Values | Partner With Us.
- **H3:** Our Mission | Our Vision | Quality Excellence | Integrity & Trust | Innovation | Sustainability.

### Contact (`contact.html`)
- **H1:** Contact Us (or Contact Farmer Group) – once at top.
- **H2:** Get in Touch | Our Location | Contact Details | Send a Message (or equivalent).
- **H3:** Phone | Email | Address | Opening Hours (if you add them).

### Category pages (e.g. `fertilizer.html`, `field-crop.html`, `vegetable.html`)
- **H1:** Fertilizers / Field Crop Seeds / Vegetable Seeds (match main keyword).
- **H2:** Product list or section titles (e.g. by type or use).
- **H3:** Individual product names or sub-categories.

### Product pages (e.g. `sunflower.html`, `wheat.html`)
- **H1:** [Crop name] Seeds (e.g. Sunflower Seeds, Wheat Seeds).
- **H2:** Benefits | Varieties | How to Use | Related Products (or similar).
- **H3:** Specific varieties or sub-points.

**WordPress:** Use the block editor heading block and set level (H1, H2, H3). Or in Classic editor, use the paragraph dropdown to choose heading level. Ensure the theme uses H1 only once (often the page title).

---

## 5. Keyword Placement Strategy

**Primary keywords:** Farmer Group Afghanistan, fertilizers Afghanistan, seeds Afghanistan, agricultural inputs Afghanistan.  
**Secondary:** quality fertilizers, vegetable seeds, field crop seeds, plant protection, wheat seeds, sunflower seeds, etc.

### Where to use keywords

| Location | How to use |
|----------|------------|
| **Title tag** | Main keyword + brand (e.g. Fertilizers \| Farmer Group Afghanistan). |
| **Meta description** | Primary keyword in first 120 chars + benefit/CTA. |
| **H1** | Main topic keyword (e.g. Fertilizers, Contact Us, Sunflower Seeds). |
| **First paragraph** | Include primary keyword once naturally. |
| **H2/H3** | Use secondary keywords where they fit (e.g. "Quality Wheat Seeds", "Plant Protection Products"). |
| **Image alt text** | Describe image + product/crop name (e.g. "Sunflower seeds packet Farmer Group"). |
| **URL** | Keep short and readable (you already have `sunflower.html`, `fertilizer.html`). |

### Per-page focus

- **Homepage:** Farmer Group Afghanistan, quality fertilizers, agricultural inputs, seeds Afghanistan.
- **About:** Farmer Group Afghanistan, Afghan farmers, quality fertilizers, agricultural solutions.
- **Contact:** Contact Farmer Group, fertilizers Afghanistan, seeds Afghanistan.
- **Category pages:** [Category] + Afghanistan / Farmer Group (e.g. vegetable seeds Afghanistan).
- **Product pages:** [Crop] seeds + Afghanistan / high yield / quality (e.g. sunflower seeds Afghanistan).

Avoid stuffing; 1–2 uses per section is enough.

**WordPress:** Use Yoast/Rank Math “Focus keyphrase” and follow their suggestions for title, meta, and content.

---

## 6. Internal Linking Strategy

**Goals:** Help users and search engines find important pages; pass relevance and authority to key URLs.

### From homepage
- Link to: About, Contact, Fertilizer, Field crops, Vegetables, Fruit, Flower, Pulses, Plant protection (or main category pages).
- Add a “Our Products” or “Categories” section with links to all category pages.

### From category pages
- Link to: Home, About, Contact.
- Link to all product pages under that category (e.g. from `vegetable.html` → tomato, onion, cucumber, okra, etc.).
- Cross-link related categories (e.g. Field crops ↔ Fertilizers).

### From product pages
- Link to: Home, About, Contact.
- Link to parent category (e.g. Sunflower → Field crops; Tomato → Vegetables).
- Link to 2–4 related products (e.g. Sunflower → Wheat, Mustard, Cotton).

### From About & Contact
- Link to: Home, main category pages, and “Contact” from About.

### Suggested link text (avoid “Click here”)
- “Fertilizers”, “Vegetable seeds”, “Field crop seeds”, “Contact us”, “About Farmer Group”, “Sunflower seeds”, “Wheat seeds”, etc.

**WordPress:** Add links in page content and/or menus. Use a “Related products” or “Related seeds” block/section on product pages.

---

## 7. Schema Markup (JSON-LD) – Local Business

Use **Local Business** schema so Google can show your business in search and Knowledge Panel.

File created: **`schema-local-business.json`** (reference). Paste the script into your site as below.

**What to add in `<head>` of `index.html` (and optionally About/Contact):**

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Farmer Group",
  "alternateName": "Farmer Group Afghanistan",
  "url": "https://farmergroupaf.com",
  "logo": "https://farmergroupaf.com/images/logo.png",
  "description": "Leading supplier of quality fertilizers, seeds and plant protection products in Afghanistan. Trusted by thousands of farmers since 2011.",
  "foundingDate": "2011",
  "email": "info@farmergroupaf.com",
  "telephone": "+93787727204",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "AF",
    "addressLocality": "Afghanistan"
  },
  "sameAs": [
    "https://www.facebook.com/farmergroupaf",
    "https://www.instagram.com/farmergroupaf"
  ],
  "areaServed": {
    "@type": "Country",
    "name": "Afghanistan"
  }
}
</script>
```

**Update** `addressLocality` and add `streetAddress` when you have a physical address.

- **Static site:** Paste the script in `<head>` of `index.html` (and About/Contact if you want).
- **WordPress:** Use a plugin like **Schema Pro**, **Rank Math** (Schema), or **WP SEO Structured Data**, or add the code via “Insert Headers and Footers” or a custom `header.php` snippet.

---

## 8. How to Apply Each Step in WordPress (Summary)

| Step | WordPress action |
|------|-------------------|
| **Sitemap** | Yoast/Rank Math → XML Sitemap on. Submit sitemap URL in Google Search Console. |
| **robots.txt** | Root `robots.txt` or generate via Yoast/Rank Math. Add Sitemap line. |
| **Titles & meta** | Edit each page/post → SEO box → set SEO Title and Meta Description. |
| **Headings** | Use Heading block (H1–H3) in content; ensure theme uses one H1 per page. |
| **Keywords** | Use Focus keyphrase in Yoast/Rank Math; place in title, meta, H1, first paragraph. |
| **Internal links** | Add links in content and menus; use “Related” sections on product/category pages. |
| **Schema** | Install Schema plugin or add JSON-LD in header. Choose “Local Business” and fill details. |

---

## 9. What’s Missing – Expert Recommendations

1. **Canonical URLs**  
   Add `<link rel="canonical" href="https://farmergroupaf.com/page.html">` in `<head>` of each page to avoid duplicate content. WordPress: often automatic with Yoast/Rank Math.

2. **Open Graph & Twitter cards**  
   Add `og:title`, `og:description`, `og:image`, `og:url` for better sharing on Facebook/WhatsApp. Twitter `card` and `summary` tags help on Twitter. WordPress: Yoast/Rank Math add these.

3. **Favicon**  
   Add `<link rel="icon" href="https://farmergroupaf.com/favicon.ico">` (or PNG). WordPress: Appearance → Customize → Site Identity → Site Icon.

4. **Mobile & speed**  
   Your site is responsive; test with Google Mobile-Friendly Test and PageSpeed Insights. Optimize images (WebP, compression), minify CSS/JS if possible.

5. **HTTPS**  
   Ensure the whole site is on https://farmergroupaf.com. Set canonical and internal links to `https`.

6. **Blog or resources**  
   Add a simple “Tips” or “Resources” section (e.g. planting tips, fertilizer use). Helps SEO and trust. WordPress: use Posts and link from main menu.

7. **Kaveri vegetables page**  
   `kaveri-vegetables.html` currently has title “Field Crop Seeds”. Use the Kaveri-specific title and meta from the table above so it’s unique.

8. **Structured breadcrumbs**  
   Add breadcrumbs (Home > Field Crops > Sunflower) and BreadcrumbList schema. Improves UX and SEO. WordPress: many themes and Yoast/Rank Math support breadcrumbs.

9. **Google Search Console & Analytics**  
   Verify the property for farmergroupaf.com, submit sitemap, monitor indexing and search performance. Add Google Analytics 4 for traffic and behavior.

10. **One H1 per page**  
   On the homepage, keep only “Farmer Group” as H1 and change slider titles to H2 so structure is clear for Google.

---

## Quick Checklist

- [ ] Upload `robots.txt` and `sitemap.xml` to site root.
- [ ] Update all title and meta description tags (use table in Section 3).
- [ ] Fix heading hierarchy (one H1 per page; slider titles → H2).
- [ ] Add canonical tag to each page.
- [ ] Add Local Business JSON-LD in `index.html` (and optionally About/Contact).
- [ ] Add internal links from homepage to categories and from categories to products.
- [ ] Add Open Graph tags for social sharing.
- [ ] Verify site in Google Search Console and submit sitemap.
- [ ] Test mobile-friendliness and core pages with PageSpeed Insights.

You now have a clear, step-by-step SEO and technical setup. Implement in the order above for best results.
