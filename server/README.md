# Farmer Group – Social Followers API (Node.js)

Yeh Node server Facebook aur Instagram ke **live follower counts** website par dikhane ke liye use hota hai.

**Agar counts "—" hi dikh rahe hain:**  
1) Server chalayein: `cd server && npm install && npm start`, phir site **http://localhost:3000** se open karein (taake `/api/social-stats` same origin ho).  
2) `.env` mein `FACEBOOK_PAGE_ID` aur `FACEBOOK_ACCESS_TOKEN` zaroor set karein (see below).  
3) Facebook share link se numeric Page ID nahi milta – Page → Settings → About se Page ID copy karein.

## Kaise kaam karta hai

- Server **Meta Graph API** se Facebook Page ka `fan_count` (likes) aur linked **Instagram Business** account ka `followers_count` fetch karta hai.
- Result **1 hour** cache hota hai taake rate limit na lage.
- Homepage (`index.html`) ke footer mein "Follow us" strip hai jahan yeh numbers **live** update hote hain (page load par API call se).

## Setup

### 1. Node install karein

- Node 18+ chahiye: https://nodejs.org/

### 2. Dependencies install karein

```bash
cd server
npm install
```

### 3. Facebook / Instagram tokens

- **Facebook Page ID** aur **Page Access Token** chahiye (long-lived).
- Instagram count ke liye apna **Instagram account** usi Facebook Page se **Business/Creator** account ki tarah connect karein.

**Token kaise banayein:**

1. https://developers.facebook.com/ par jaa kar app banaein (ya use karein).
2. **Graph API Explorer** se token generate karein.
3. Permissions add karein: `pages_read_engagement`, `instagram_basic`, `pages_show_list`.
4. Token ko **long-lived** Page Access Token mein convert karein (Meta ki docs follow karein).
5. Page ID: Facebook Page → Settings → About → Page ID.

### 4. Environment variables

```bash
cp .env.example .env
```

`.env` mein daalein:

- `FACEBOOK_PAGE_ID` – apna Facebook Page ID (numbers only).
- `FACEBOOK_ACCESS_TOKEN` – long-lived Page Access Token.

### 5. Server chalaayein

```bash
npm start
```

Browser mein: **http://localhost:3000**

- Site yahin se serve hogi.
- Footer mein "Follow us" strip par Facebook / Instagram ke counts dikhenge (API se aaye hue).

## Agar site doosri jagah host ho (e.g. Netlify)

- Isi server ko kisi host (e.g. Render, Railway) par deploy karein.
- Us ka URL maan lo: `https://your-api.onrender.com`
- Jis page par counts dikhane hain (e.g. `index.html`), us page ke `<head>` ya `<body>` ke start par ek script add karein:

```html
<script>window.FARMER_GROUP_API_BASE = 'https://your-api.onrender.com';</script>
```

Isse frontend us base URL par `/api/social-stats` call karega aur numbers wahi se aayenge.

## API endpoint

- **GET** `/api/social-stats`  
- Response: `{ "facebook": 1234, "instagram": 5678 }`  
- Cache: server 1 hour, browser 5 minutes.

## Social links

Abhi footer mein Facebook / Instagram links hardcoded hain (`facebook.com/farmergroup`, `instagram.com/farmergroup`). Apna page/username `.env` ya HTML mein change karein.
