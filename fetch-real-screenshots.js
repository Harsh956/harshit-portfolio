const https = require('https');
const fs = require('fs');

const liveApps = [
  { id: 'rapagra', title: 'Rapagra', pkg: 'com.orelogic.rapagraApp' },
  { id: 'immortal-seats', title: 'Immortal Seats', pkg: 'com.immortalSeats.android' },
  { id: 'high-desert', title: 'High Desert Design', pkg: 'com.ogrelogic.highdesertdesigns' },
  { id: 'power-thinking', title: 'Power Thinking Corp', pkg: 'com.ogrelogic.powerthinkingcorp' },
  { id: 'federal-benefits', title: 'Federal Benefits Service', pkg: 'com.ogrelogic.FederalBenifit' },
  { id: 'goodwin-academy', title: 'GoodWin Academy', pkg: 'com.goodwin.academy' },
  { id: 'meetgoals', title: 'MeetGoals', pkg: 'com.meetgoals.App' },
  { id: 'starting-5', title: 'Starting 5', pkg: 'com.ogrelogic.startingfive' }
];

function fetchAppScreenshots(app) {
  return new Promise((resolve) => {
    const url = `https://play.google.com/store/apps/details?id=${app.pkg}&hl=en`;
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9'
      }
    }, (res) => {
      let html = '';
      res.on('data', chunk => html += chunk);
      res.on('end', () => {
        // Find all screenshot images: Google Play uses img with alt="Screenshot image" or itemprop="screenshot"
        // Also look for data-src or src with play-lh.googleusercontent.com
        const results = [];
        const regex = /<img[^>]+alt=["']Screenshot image["'][^>]*>/gi;
        let m;
        while ((m = regex.exec(html)) !== null) {
          const tag = m[0];
          const srcMatch = tag.match(/(?:src|data-src)=["']([^"']+)["']/i);
          const srcsetMatch = tag.match(/srcset=["']([^"']+)["']/i);
          if (srcsetMatch) {
            // grab the largest url from srcset
            const parts = srcsetMatch[1].split(',').map(s => s.trim().split(' ')[0]);
            results.push(parts[parts.length - 1]);
          } else if (srcMatch) {
            results.push(srcMatch[1]);
          }
        }

        // If no alt="Screenshot image", look for imgs inside screenshot containers
        if (results.length === 0) {
          const generalRegex = /https:\/\/play-lh\.googleusercontent\.com\/[a-zA-Z0-9_\-=]+/g;
          const allUrls = [...new Set(html.match(generalRegex) || [])];
          // Screenshots usually have dimensions like =w526-h296 or =w...-h... or =s...
          // Filter out the app icon if possible
          results.push(...allUrls.slice(0, 5));
        }

        resolve({
          ...app,
          screenshots: results
        });
      });
    }).on('error', (err) => {
      resolve({ ...app, error: err.message, screenshots: [] });
    });
  });
}

async function run() {
  const allResults = [];
  for (const app of liveApps) {
    console.log(`Fetching ${app.title}...`);
    const r = await fetchAppScreenshots(app);
    console.log(`Found ${r.screenshots.length} screenshots for ${app.title}`);
    allResults.push(r);
  }
  fs.writeFileSync('real-screenshots.json', JSON.stringify(allResults, null, 2));
  console.log('Saved to real-screenshots.json');
}

run();
