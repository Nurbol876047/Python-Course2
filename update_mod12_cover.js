const fs = require('fs');
const file = 'src/data/python_omirde.js';
let data = fs.readFileSync(file, 'utf8');

let code = data.replace('export const MODULES =', 'const MODULES =');
code += '\nmodule.exports = MODULES;';
fs.writeFileSync('temp_mod12_cover.js', code);
const MODULES = require('./temp_mod12_cover.js');

const imgStyleTheory = 'style="width:100%; border-radius: 12px; margin-bottom: 15px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"';
const imgStyleCover = 'style="width:100%; height:100%; object-fit:cover; border-radius: 8px 8px 0 0;"';

let m1 = MODULES.find(m => m.id === 1);
if(m1) {
    m1.heroSvg = `<img src="/images/mod1.jpg" alt="Модуль 1" ${imgStyleCover} />`;
    if(!m1.theory[0].includes('<img')) {
        m1.theory.unshift(`<img src="/images/mod1.jpg" alt="Модуль 1" ${imgStyleTheory} />`);
    }
}

let m2 = MODULES.find(m => m.id === 2);
if(m2) {
    m2.heroSvg = `<img src="/images/mod2.jpg" alt="Модуль 2" ${imgStyleCover} />`;
    if(!m2.theory[0].includes('<img')) {
        m2.theory.unshift(`<img src="/images/mod2.jpg" alt="Модуль 2" ${imgStyleTheory} />`);
    }
}

let finalOutput = "export const MODULES = " + JSON.stringify(MODULES, null, 4) + ";\n";
fs.writeFileSync(file, finalOutput);
fs.unlinkSync('temp_mod12_cover.js');
console.log("Images applied to covers and theory for Modules 1 & 2.");
