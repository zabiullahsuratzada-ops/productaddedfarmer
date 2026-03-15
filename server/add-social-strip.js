/**
 * One-time script: Add social followers strip + CSS + script to all HTML pages that have footer-widgets but no strip yet.
 */
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');

const CSS_BLOCK = `
        .social-followers-strip { width: 100%; padding: 14px 0; margin-bottom: 30px; border-bottom: 1px solid rgba(255,255,255,0.15); display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 24px 32px; }
        .social-followers-strip .label { font-size: 14px; color: rgba(255,255,255,0.9); font-weight: 500; }
        .social-followers-strip a { display: inline-flex; align-items: center; gap: 8px; color: #fff; text-decoration: none; font-size: 15px; }
        .social-followers-strip a:hover { opacity: 0.9; }
        .social-followers-strip .count { font-weight: 700; color: #9cc212; }
        .social-followers-strip .icon { font-size: 18px; }
`;

const STRIP_HTML = `
                <div class="social-followers-strip" id="social-followers-strip">
                    <span class="label">Follow us</span>
                    <a href="https://www.facebook.com/share/1CXi4EfNkN/" target="_blank" rel="noopener" id="social-fb-link" title="Facebook"><span class="icon"><i class="fab fa-facebook-f"></i></span><span class="count" id="social-fb-count">—</span> <span>followers</span></a>
                    <a href="https://www.instagram.com/farmergroupaf?igsh=MXF4Y2swMDBkZ3A1dg==" target="_blank" rel="noopener" id="social-ig-link" title="Instagram"><span class="icon"><i class="fab fa-instagram"></i></span><span class="count" id="social-ig-count">—</span> <span>followers</span></a>
                </div>
`;

const SCRIPT_TAG = `
    <script>(function(){ var b=window.FARMER_GROUP_API_BASE||''; var fb=document.getElementById('social-fb-count'); var ig=document.getElementById('social-ig-count'); if(fb&&ig) fetch(b+'/api/social-stats').then(function(r){return r.json();}).then(function(d){ if(typeof d.facebook==='number') fb.textContent=d.facebook.toLocaleString(); if(typeof d.instagram==='number') ig.textContent=d.instagram.toLocaleString(); }).catch(function(){}); })();</script>
`;

const files = fs.readdirSync(root).filter(f => f.endsWith('.html'));
let done = 0;
for (const file of files) {
  const filePath = path.join(root, file);
  let html = fs.readFileSync(filePath, 'utf8');
  if (html.includes('social-followers-strip')) continue;
  if (!html.includes('footer-widgets')) continue;

  // 1) Add CSS before .footer-widgets {
  if (!html.includes('.social-followers-strip')) {
    html = html.replace(/(\s*\.footer-widgets\s*\{)/, CSS_BLOCK + '$1');
  }
  // 2) Add strip after <div class="container"> inside footer-widgets, before <div class="row">
  const containerRow = /(id="footer-widgets"[^>]*>)\s*<div class="container">\s*<div class="row">/m;
  if (containerRow.test(html) && !html.includes('id="social-followers-strip"')) {
    html = html.replace(containerRow, '$1\n            <div class="container">' + STRIP_HTML + '\n                <div class="row">');
  }
  // 3) Add script before </body>
  if (!html.includes("FARMER_GROUP_API_BASE")) {
    html = html.replace(/\s*<\/body>/, SCRIPT_TAG + '\n</body>');
  }
  fs.writeFileSync(filePath, html);
  done++;
  console.log('Updated:', file);
}
console.log('Total updated:', done);
