/**
 * Farmer Group - Social Followers API (Node.js)
 * Fetches Facebook Page fan_count and Instagram Business followers_count
 * via Meta Graph API. Caches result for 1 hour to respect rate limits.
 */

require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// CORS so frontend on any domain can get follower counts
app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*');
  next();
});

// Cache: { data: { facebook, instagram }, expiresAt: number }
let socialCache = null;
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

const FACEBOOK_PAGE_ID = process.env.FACEBOOK_PAGE_ID;
const FACEBOOK_ACCESS_TOKEN = process.env.FACEBOOK_ACCESS_TOKEN;
const GRAPH_API_VERSION = 'v21.0';

/**
 * Fetch Facebook Page fan_count and linked Instagram Business account id
 */
async function fetchFacebookStats() {
  if (!FACEBOOK_PAGE_ID || !FACEBOOK_ACCESS_TOKEN) {
    return { facebook: null, instagram: null, error: 'Missing Facebook config' };
  }
  const url = `https://graph.facebook.com/${GRAPH_API_VERSION}/${FACEBOOK_PAGE_ID}?fields=fan_count,instagram_business_account{id}&access_token=${encodeURIComponent(FACEBOOK_ACCESS_TOKEN)}`;
  const res = await fetch(url);
  const json = await res.json();
  if (json.error) {
    return { facebook: null, instagram: null, error: json.error.message || 'Facebook API error' };
  }
  return {
    fan_count: json.fan_count ?? null,
    ig_user_id: json.instagram_business_account?.id ?? null,
  };
}

/**
 * Fetch Instagram Business account followers_count
 */
async function fetchInstagramFollowers(igUserId) {
  if (!igUserId || !FACEBOOK_ACCESS_TOKEN) return null;
  const url = `https://graph.facebook.com/${GRAPH_API_VERSION}/${igUserId}?fields=followers_count,media_count&access_token=${encodeURIComponent(FACEBOOK_ACCESS_TOKEN)}`;
  const res = await fetch(url);
  const json = await res.json();
  if (json.error) return null;
  return json.followers_count ?? null;
}

/**
 * Get social stats (from cache or API)
 */
async function getSocialStats() {
  if (socialCache && Date.now() < socialCache.expiresAt) {
    return socialCache.data;
  }
  const fb = await fetchFacebookStats();
  let facebook = fb.fan_count ?? 0;
  let instagram = 0;
  if (fb.ig_user_id) {
    const ig = await fetchInstagramFollowers(fb.ig_user_id);
    instagram = ig ?? 0;
  }
  const data = { facebook: Number(facebook), instagram: Number(instagram) };
  socialCache = { data, expiresAt: Date.now() + CACHE_TTL_MS };
  return data;
}

// API route: GET /api/social-stats
app.get('/api/social-stats', async (req, res) => {
  try {
    const data = await getSocialStats();
    res.set('Cache-Control', 'public, max-age=300'); // 5 min browser cache
    res.json(data);
  } catch (err) {
    console.error('Social stats error:', err);
    res.status(500).json({ facebook: 0, instagram: 0, error: 'Failed to fetch' });
  }
});

// Serve static site from parent folder so one server serves both API and site
const staticDir = path.join(__dirname, '..');
app.use(express.static(staticDir, { index: 'index.html', extensions: ['html'] }));

app.listen(PORT, () => {
  console.log(`Farmer Group server running at http://localhost:${PORT}`);
  if (!FACEBOOK_PAGE_ID || !FACEBOOK_ACCESS_TOKEN) {
    console.warn('Warning: FACEBOOK_PAGE_ID or FACEBOOK_ACCESS_TOKEN not set. /api/social-stats will return zeros.');
  }
});
