const https = require('https');

const apps = [
  { id: 'rapagra', title: 'Rapagra', url: 'https://play.google.com/store/apps/details?id=com.orelogic.rapagraApp&hl=en' },
  { id: 'immortal-seats', title: 'Immortal Seats', url: 'https://play.google.com/store/apps/details?id=com.immortalSeats.android&hl=en' },
  { id: 'high-desert', title: 'High Desert Design', url: 'https://play.google.com/store/apps/details?id=com.ogrelogic.highdesertdesigns&hl=en' },
  { id: 'power-thinking', title: 'Power Thinking Corp', url: 'https://play.google.com/store/apps/details?id=com.ogrelogic.powerthinkingcorp&hl=en' },
  { id: 'federal-benefits', title: 'Federal Benefits Service', url: 'https://play.google.com/store/apps/details?id=com.ogrelogic.FederalBenifit&hl=en' },
  { id: 'step-app', title: 'Step App', url: 'https://play.google.com/store/apps/details?id=com.ogrelogic.stepapp&hl=en' },
  { id: 'goodwin-academy', title: 'GoodWin Academy', url: 'https://play.google.com/store/apps/details?id=com.goodwin.academy&hl=en' },
  { id: 'meetgoals', title: 'MeetGoals', url: 'https://play.google.com/store/apps/details?id=com.meetgoals.App&hl=en_IN' },
  { id: 'starting-5', title: 'Starting 5', url: 'https://play.google.com/store/apps/details?id=com.ogrelogic.startingfive&hl=en_IN' },
  { id: 'launchora', title: 'Launchora', url: 'https://play.google.com/store/apps/details?id=com.launchora.app' },
  { id: 'match-on', title: 'Match On', url: 'https://play.google.com/store/apps/details?id=com.avaskm.dating' },
  { id: 'hallo-basket', title: 'Hallo Basket', url: 'https://play.google.com/store/apps/details?id=com.hallo.hallobasket' },
  { id: 'nitve', title: 'Nitve', url: 'https://play.google.com/store/apps/details?id=com.ntive.ntive' },
  { id: 'wisdom-pet', title: 'Wisdom Pet Clinic', url: 'https://play.google.com/store/apps/details?id=com.kmsvetss' },
];

function checkApp(app) {
  return new Promise((resolve) => {
    https.get(app.url, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        const isNotFound = res.statusCode === 404 || data.includes("We're sorry, the requested URL was not found on this server");
        let ogTitle = '';
        let ogImage = '';
        let icon = '';
        
        const titleMatch = data.match(/<meta property="og:title" content="([^"]+)"/i);
        if (titleMatch) ogTitle = titleMatch[1];
        
        const imageMatch = data.match(/<meta property="og:image" content="([^"]+)"/i);
        if (imageMatch) ogImage = imageMatch[1];

        // find screenshots in Google Play HTML
        // usually play-lh.googleusercontent.com
        const screenshotMatches = [...data.matchAll(/https:\/\/play-lh\.googleusercontent\.com\/[a-zA-Z0-9_\-=]+/g)].map(m => m[0]);
        const uniqueImgs = [...new Set(screenshotMatches)].slice(0, 5);

        resolve({
          id: app.id,
          title: app.title,
          url: app.url,
          statusCode: res.statusCode,
          isLive: !isNotFound && ogTitle && !ogTitle.includes("not found"),
          ogTitle,
          ogImage,
          screenshots: uniqueImgs
        });
      });
    }).on('error', (err) => {
      resolve({
        id: app.id,
        title: app.title,
        url: app.url,
        isLive: false,
        error: err.message
      });
    });
  });
}

async function run() {
  const results = [];
  for (const app of apps) {
    const res = await checkApp(app);
    console.log(`[${res.isLive ? 'LIVE' : 'NOT LIVE'}] ${res.title}: ${res.ogTitle || 'N/A'}`);
    results.push(res);
  }
  const fs = require('fs');
  fs.writeFileSync('playstore-results.json', JSON.stringify(results, null, 2));
}

run();
