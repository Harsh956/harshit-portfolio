const fs = require('fs');
const path = require('path');

console.log('=== STARTING QUALITY CONTROL (QC) AUDIT ===\n');

let errors = 0;
let warnings = 0;

// 1. Audit Section IDs vs Navigation Links
console.log('1. Checking Section IDs & Navigation Links...');
const navbarContent = fs.readFileSync(path.join(__dirname, 'src', 'components', 'Navbar.tsx'), 'utf8');
const heroContent = fs.readFileSync(path.join(__dirname, 'src', 'components', 'Hero2D.tsx'), 'utf8');
const footerContent = fs.readFileSync(path.join(__dirname, 'src', 'components', 'Footer.tsx'), 'utf8');
const pageContent = fs.readFileSync(path.join(__dirname, 'src', 'app', 'page.tsx'), 'utf8');

const navHrefs = [...new Set((navbarContent + footerContent + heroContent).match(/href="#([a-zA-Z0-9_-]+)"/g) || [])]
  .map(m => m.replace(/href="#|"/g, ''));

console.log('Found anchor links:', navHrefs);

// Find all section ids in all components
const componentsDir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));
const sectionIds = [];
for (const file of files) {
  const content = fs.readFileSync(path.join(componentsDir, file), 'utf8');
  const matches = content.match(/id="([a-zA-Z0-9_-]+)"/g) || [];
  matches.forEach(m => sectionIds.push(m.replace(/id="|"/g, '')));
}
console.log('Found section IDs:', sectionIds);

for (const href of navHrefs) {
  if (!sectionIds.includes(href)) {
    console.error(`  [ERROR] Nav link #${href} does not have a matching section id in any component!`);
    errors++;
  } else {
    console.log(`  [OK] #${href} -> Found matching section`);
  }
}

// 2. Audit Portfolio Data: Live vs Non-Live projects & screenshots
console.log('\n2. Checking Portfolio Data & Screenshots...');
const portfolioDataContent = fs.readFileSync(path.join(__dirname, 'src', 'data', 'portfolioData.ts'), 'utf8');

// Check public/screenshots files
const screenshotsDir = path.join(__dirname, 'public', 'screenshots');
const localScreenshots = fs.existsSync(screenshotsDir) ? fs.readdirSync(screenshotsDir) : [];
console.log('Local screenshots available:', localScreenshots);

const liveProjectsExpected = [
  'rapagra', 'immortal-seats', 'high-desert', 'power-thinking',
  'federal-benefits', 'goodwin-academy', 'meetgoals', 'starting-5'
];

for (const p of liveProjectsExpected) {
  const expectedFile = `${p}.webp`;
  if (!localScreenshots.includes(expectedFile)) {
    console.error(`  [ERROR] Missing local screenshot: ${expectedFile}`);
    errors++;
  } else {
    const stat = fs.statSync(path.join(screenshotsDir, expectedFile));
    if (stat.size < 1000) {
      console.error(`  [ERROR] Screenshot ${expectedFile} is suspiciously small: ${stat.size} bytes`);
      errors++;
    } else {
      console.log(`  [OK] Screenshot ${expectedFile} valid (${stat.size} bytes)`);
    }
  }
}

// 3. Check for any broken / non-live Play Store links in portfolioData
console.log('\n3. Checking Project Links in portfolioData.ts...');
const nonLiveProjects = ['step-app', 'launchora', 'match-on', 'hallo-basket', 'nitve', 'wisdom-pet-clinic'];
for (const nlp of nonLiveProjects) {
  // Regex to check if this project has playStoreUrl
  const regex = new RegExp(`id:\\s*["']${nlp}["'][\\s\\S]*?playStoreUrl:\\s*["']([^"']+)["']`, 'i');
  const match = portfolioDataContent.match(regex);
  if (match) {
    console.error(`  [ERROR] Non-live project ${nlp} has an active playStoreUrl: ${match[1]}`);
    errors++;
  } else {
    console.log(`  [OK] Non-live project ${nlp} has no playStoreUrl (clean)`);
  }
}

// 4. Check for any unresolved placeholder or lorem ipsum text
console.log('\n4. Checking for placeholders or lorem ipsum...');
const allTsxFiles = [];
function getTsxFiles(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) {
      if (item !== 'node_modules' && item !== '.next') getTsxFiles(full);
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      allTsxFiles.push(full);
    }
  }
}
getTsxFiles(path.join(__dirname, 'src'));

for (const f of allTsxFiles) {
  const c = fs.readFileSync(f, 'utf8');
  if (c.toLowerCase().includes('lorem ipsum')) {
    console.warn(`  [WARNING] Found 'lorem ipsum' in ${f}`);
    warnings++;
  }
  if (c.includes('TODO') || c.includes('FIXME')) {
    console.warn(`  [WARNING] Found TODO/FIXME in ${f}`);
    warnings++;
  }
}

console.log(`\n=== AUDIT SUMMARY: ${errors} Errors, ${warnings} Warnings ===\n`);
process.exit(errors > 0 ? 1 : 0);
