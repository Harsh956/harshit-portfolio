const https = require('https');
const fs = require('fs');
const path = require('path');

const APPS = [
  { id: 'rapagra', pkg: 'com.orelogic.rapagraApp' },
  { id: 'immortal-seats', pkg: 'com.immortalSeats.android' },
  { id: 'starting-5', pkg: 'com.ogrelogic.startingfive' },
  { id: 'meetgoals', pkg: 'com.meetgoals.App' },
  { id: 'high-desert', pkg: 'com.ogrelogic.highdesertdesigns' },
  { id: 'federal-benefits', pkg: 'com.ogrelogic.federalBenefits' },
  { id: 'goodwin-academy', pkg: 'com.goodwinacademy' },
  { id: 'power-thinking', pkg: 'com.powerthinking' },
];

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function downloadBinary(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadBinary(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed with status ${res.statusCode}`));
      }
      const stream = fs.createWriteStream(dest);
      res.pipe(stream);
      stream.on('finish', () => {
        stream.close();
        resolve();
      });
    }).on('error', reject);
  });
}

async function run() {
  const screenshotsDir = path.join(__dirname, '..', 'public', 'screenshots');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  const results = {};

  for (const app of APPS) {
    console.log(`Fetching Play Store page for ${app.id} (${app.pkg})...`);
    try {
      const pageUrl = `https://play.google.com/store/apps/details?id=${app.pkg}&hl=en`;
      const html = await fetchUrl(pageUrl);

      // Extract unique play-lh URLs
      // Usually screenshots are formatted like: https://play-lh.googleusercontent.com/<hash>=w...
      const rawMatches = html.match(/https:\/\/play-lh\.googleusercontent\.com\/[a-zA-Z0-9_\-]+/g) || [];
      const uniqueBaseUrls = [...new Set(rawMatches)];

      console.log(`Found ${uniqueBaseUrls.length} image URLs for ${app.id}`);

      // The first 1-2 might be app icon or developer logo, but screenshots have aspect ratios or appear sequentially in screenshot carousel
      // Let's filter: exclude app icon (which often has =s48 or =s96 or appears first)
      // Usually on google play store, screenshots start after the app icon
      const appScreenshots = [];
      let idx = 1;

      // Try downloading the top candidate screenshots (usually 3 to 6 screenshots)
      // We take unique images from index 1 onward (index 0 is often the app icon)
      const candidates = uniqueBaseUrls.slice(0, 10);
      
      for (const base of candidates) {
        if (appScreenshots.length >= 6) break;
        // high resolution vertical phone screenshot parameter
        const targetUrl = `${base}=w720-h1280-rw`;
        const filename = `${app.id}-${idx}.webp`;
        const dest = path.join(screenshotsDir, filename);

        try {
          await downloadBinary(targetUrl, dest);
          const stat = fs.statSync(dest);
          if (stat.size > 8000) { // Valid screenshot is usually > 15KB
            console.log(`Saved ${filename} (${stat.size} bytes)`);
            appScreenshots.push(`/screenshots/${filename}`);
            idx++;
          } else {
            // Might be an icon or small thumbnail, remove
            fs.unlinkSync(dest);
          }
        } catch (e) {
          console.error(`Failed to download ${targetUrl}:`, e.message);
        }
      }

      results[app.id] = appScreenshots;
      console.log(`Done ${app.id}: got ${appScreenshots.length} valid screenshots`);
    } catch (err) {
      console.error(`Error processing ${app.id}:`, err.message);
    }
  }

  // Save the manifest of screenshots to a JSON file so the frontend can import them
  const manifestPath = path.join(__dirname, '..', 'src', 'data', 'appScreenshots.json');
  fs.writeFileSync(manifestPath, JSON.stringify(results, null, 2));
  console.log(`Manifest written to ${manifestPath}`);
}

run();
