const fs = require('fs');

// Extract from python_omirde.html
const pyHtml = fs.readFileSync('python_omirde.html', 'utf8');
const modulesMatch = pyHtml.match(/const MODULES = (\[[\s\S]*?\n\];)/);
if (modulesMatch) {
    fs.mkdirSync('src/data', { recursive: true });
    fs.writeFileSync('src/data/python_omirde.js', 'export const MODULES = ' + modulesMatch[1]);
}

// Extract from qazaq_quest.html
const qgHtml = fs.readFileSync('qazaq_quest.html', 'utf8');
let qgData = '';

const extractConst = (name, regex) => {
    const match = qgHtml.match(regex);
    if (match) {
        qgData += 'export ' + match[0] + '\n\n';
    }
}

extractConst('ICONS', /const ICONS = {[\s\S]*?};/);
extractConst('LEVEL_XP', /const LEVEL_XP = {[\s\S]*?};/);
extractConst('REGIONS', /const REGIONS = \[[\s\S]*?\];/);
extractConst('LEVEL_TASKS', /const LEVEL_TASKS = {[\s\S]*?};\n/);
extractConst('REAL_LIFE_TIPS', /const REAL_LIFE_TIPS = {[\s\S]*?};\n/);

if (qgData) {
    fs.mkdirSync('src/data', { recursive: true });
    fs.writeFileSync('src/data/qazaq_quest.js', qgData);
}

console.log('Extraction complete');
