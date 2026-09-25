const fs = require('fs');
const file = 'src/data/python_omirde.js';
let data = fs.readFileSync(file, 'utf8');

let code = data.replace('export const MODULES =', 'const MODULES =');
code += '\nmodule.exports = MODULES;';
fs.writeFileSync('temp_img_7_10.js', code);
const MODULES = require('./temp_img_7_10.js');

const imgStyle = 'style="width:100%; border-radius: 12px; margin-bottom: 15px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"';

let m7 = MODULES.find(m => m.id === 7);
if(m7 && !m7.theory[0].includes('<img')) {
    m7.theory.unshift(`<img src="/images/mod7.jpg" alt="Қонақтар" ${imgStyle} />`);
}

let m8 = MODULES.find(m => m.id === 8);
if(m8 && !m8.theory[0].includes('<img')) {
    m8.theory.unshift(`<img src="/images/mod8.jpg" alt="Дастархан" ${imgStyle} />`);
}

let m9 = MODULES.find(m => m.id === 9);
if(m9 && !m9.theory[0].includes('<img')) {
    m9.theory.unshift(`<img src="/images/mod9.jpg" alt="Төр" ${imgStyle} />`);
}

let m10 = MODULES.find(m => m.id === 10);
if(m10 && !m10.theory[0].includes('<img')) {
    m10.theory.unshift(`<img src="/images/mod10.jpg" alt="Киіз үй" ${imgStyle} />`);
}

let finalOutput = "export const MODULES = " + JSON.stringify(MODULES, null, 4) + ";\n";
fs.writeFileSync(file, finalOutput);
fs.unlinkSync('temp_img_7_10.js');
console.log("Images injected into modules 7, 8, 9, 10.");
