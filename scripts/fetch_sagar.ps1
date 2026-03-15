# Fetch Sagar Biotech products: extract product links from category pages,
# then for each product get title + image, download image, output JSON.
$ErrorActionPreference = "Stop"
$base = "https://sagarbiotech.in"
$outDir = "w:\Farmer Group\Farmer Version 3"
$imgDir = "$outDir\images"
$categories = @(
    @{ url = "$base/product-category/watermelon/"; page = "watermelon" },
    @{ url = "$base/product-category/watermelon/page/2/"; page = "watermelon" },
    @{ url = "$base/product-category/muskmelon/"; page = "melon" },
    @{ url = "$base/product-category/chilli/"; page = "pepper" },
    @{ url = "$base/product-category/capsicum/"; page = "pepper" },
    @{ url = "$base/product-category/cucumber/"; page = "cucumber" },
    @{ url = "$base/product-category/tinda/"; page = "other-vegetables" },
    @{ url = "$base/product-category/okra/"; page = "other-vegetables" },
    @{ url = "$base/product-category/tomato/"; page = "tomato" },
    @{ url = "$base/product-category/pumpkin/"; page = "pumpkin" },
    @{ url = "$base/product-category/bitter-gourd/"; page = "bitter-gourd" },
    @{ url = "$base/product-category/bottle-gourd/"; page = "bottle-gourd" },
    @{ url = "$base/product-category/sponge-gourd/"; page = "sponge-gourd" },
    @{ url = "$base/product-category/ridge-gourd/"; page = "ridge-gourd" },
    @{ url = "$base/product-category/onion/"; page = "other-vegetables" },
    @{ url = "$base/product-category/marigold/"; page = "flower" },
    @{ url = "$base/product-category/wal-papdi/"; page = "field-crop" },
    @{ url = "$base/product-category/plant-protection/"; page = "pesticides" }
)

$allProducts = @{}
foreach ($c in $categories) {
    $allProducts[$c.page] = @()
}

$seen = @{}
foreach ($cat in $categories) {
    Write-Host "Fetching category: $($cat.page) - $($cat.url)"
    try {
        $r = Invoke-WebRequest -Uri $cat.url -UseBasicParsing -TimeoutSec 25
        $links = [regex]::Matches($r.Content, 'href="(https://sagarbiotech\.in/product/[^/]+/?)"') | ForEach-Object { $_.Groups[1].Value }
        foreach ($link in $links) {
            if ($seen[$link]) { continue }
            $seen[$link] = $true
            Start-Sleep -Milliseconds 400
            try {
                $pr = Invoke-WebRequest -Uri $link -UseBasicParsing -TimeoutSec 20
                $h = $pr.Content
                $title = ""
                if ($h -match '<meta[^>]+property="og:title"[^>]+content="([^"]+)"') { $title = $matches[1].Trim() }
                if (-not $title -and $h -match '<h1[^>]*class="[^"]*product_title[^"]*"[^>]*>([^<]+)</h1>') { $title = $matches[1].Trim() }
                if (-not $title -and $h -match '<title>([^|<]+)') { $title = $matches[1].Trim() }
                if (-not $title) { $title = "Product" }
                $imgUrl = ""
                if ($h -match 'data-large_image="(https?://[^"]+)"') { $imgUrl = $matches[1] }
                if (-not $imgUrl -and $h -match 'wp-post-image[^>]+src="(https?://[^"]+\.(?:jpg|jpeg|png|webp)[^"]*)"') { $imgUrl = $matches[1] }
                $slug = ($link.TrimEnd('/') -split '/')[-1]
                $safe = $slug -replace '[^\w\s-]','' -replace '[\s_]+','-' -replace '^-|-$',''
                $ext = ".png"
                if ($imgUrl -match '\.(jpg|jpeg|webp)') { $ext = ".$($matches[1])" }
                $imgPath = "sagar-$($cat.page)-$safe$ext"
                $fullImgPath = Join-Path $imgDir $imgPath
                if ($imgUrl -and -not (Test-Path $fullImgPath)) {
                    try {
                        Invoke-WebRequest -Uri $imgUrl -OutFile $fullImgPath -UseBasicParsing -TimeoutSec 15
                        Write-Host "  Downloaded: $imgPath"
                    } catch { Write-Host "  Skip img: $imgUrl" }
                }
                $imgRef = if ($imgUrl) { "images/$imgPath" } else { "" }
                $allProducts[$cat.page] += @{ title = $title; image = $imgRef; slug = $slug }
                Write-Host "  $title"
            } catch { Write-Host "  Error $link : $_" }
        }
    } catch { Write-Host "Category error: $_" }
}

$json = $allProducts | ConvertTo-Json -Depth 4
$json | Out-File -FilePath (Join-Path $outDir "scripts\products_sagar.json") -Encoding UTF8
Write-Host "Saved scripts/products_sagar.json"
