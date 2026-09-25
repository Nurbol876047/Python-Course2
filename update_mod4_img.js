const fs = require('fs');
const file = 'src/data/python_omirde.js';
let data = fs.readFileSync(file, 'utf8');

let code = data.replace('export const MODULES =', 'const MODULES =');
code += '\nmodule.exports = MODULES;';
fs.writeFileSync('temp_mod4_img.js', code);
const MODULES = require('./temp_mod4_img.js');

const imgStyleCover = 'style="width:100%; height:100%; object-fit:cover; border-radius: 8px 8px 0 0;"';
const imgStyleTheory = 'style="width:100%; border-radius: 12px; margin-bottom: 15px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"';

let m4 = MODULES.find(m => m.id === 4);
if(m4) {
    m4.heroSvg = `<img src="/images/mod4.png" alt="Ауа райына қарай шешім" ${imgStyleCover} />`;
    
    // Remove the old Unsplash image from theory
    m4.theory = m4.theory.filter(p => !p.includes('unsplash.com'));
    
    // Unshift the new image
    m4.theory.unshift(`<img src="/images/mod4.png" alt="Ауа райына қарай шешім" ${imgStyleTheory} />`);
}

let finalOutput = "export const MODULES = " + JSON.stringify(MODULES, null, 4) + ";\n";
fs.writeFileSync(file, finalOutput);
fs.unlinkSync('temp_mod4_img.js');
console.log("Module 4 cover and theory updated with user-provided image.");
