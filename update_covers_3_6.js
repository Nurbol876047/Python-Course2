const fs = require('fs');
const file = 'src/data/python_omirde.js';
let data = fs.readFileSync(file, 'utf8');

let code = data.replace('export const MODULES =', 'const MODULES =');
code += '\nmodule.exports = MODULES;';
fs.writeFileSync('temp_covers_3_6.js', code);
const MODULES = require('./temp_covers_3_6.js');

const imgStyleCover = 'style="width:100%; height:100%; object-fit:cover; border-radius: 8px 8px 0 0;"';
const imgStyleTheory = 'style="width:100%; border-radius: 12px; margin-bottom: 15px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"';

const placeholderMap = {
    3: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop', // Clock/Time
    4: 'https://images.unsplash.com/photo-1561484930-998b6a7b22e8?q=80&w=800&auto=format&fit=crop', // Weather
    5: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15f?q=80&w=800&auto=format&fit=crop', // Recycle
    6: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop'  // Budget/Wallet
};

MODULES.forEach(mod => {
    if (placeholderMap[mod.id]) {
        mod.heroSvg = `<img src="${placeholderMap[mod.id]}" alt="${mod.title}" ${imgStyleCover} crossorigin="anonymous" />`;
        
        if(!mod.theory[0].includes('<img')) {
            mod.theory.unshift(`<img src="${placeholderMap[mod.id]}" alt="${mod.title}" ${imgStyleTheory} crossorigin="anonymous" />`);
        }
    }
});

let finalOutput = "export const MODULES = " + JSON.stringify(MODULES, null, 4) + ";\n";
fs.writeFileSync(file, finalOutput);
fs.unlinkSync('temp_covers_3_6.js');
console.log("Placeholder Unsplash images applied to covers and theory for Modules 3-6.");
