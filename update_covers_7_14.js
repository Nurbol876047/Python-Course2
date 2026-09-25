const fs = require('fs');
const file = 'src/data/python_omirde.js';
let data = fs.readFileSync(file, 'utf8');

let code = data.replace('export const MODULES =', 'const MODULES =');
code += '\nmodule.exports = MODULES;';
fs.writeFileSync('temp_covers_7_14.js', code);
const MODULES = require('./temp_covers_7_14.js');

const imgStyleCover = 'style="width:100%; height:100%; object-fit:cover; border-radius: 8px 8px 0 0;"';

const imageMap = {
    7: '/images/mod7.jpg',
    8: '/images/mod8.jpg',
    9: '/images/mod9.jpg',
    10: '/images/mod10.jpg',
    11: '/images/shanyrak.jpg',
    12: '/images/qymyz.jpg',
    13: '/images/uyq.jpg',
    14: '/images/qazan.jpg'
};

MODULES.forEach(mod => {
    if (imageMap[mod.id]) {
        mod.heroSvg = `<img src="${imageMap[mod.id]}" alt="${mod.title}" ${imgStyleCover} />`;
    }
});

let finalOutput = "export const MODULES = " + JSON.stringify(MODULES, null, 4) + ";\n";
fs.writeFileSync(file, finalOutput);
fs.unlinkSync('temp_covers_7_14.js');
console.log("Covers updated for Modules 7 to 14.");
