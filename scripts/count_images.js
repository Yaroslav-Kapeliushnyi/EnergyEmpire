const fs = require('fs');
const p = 'src/dataset/stations.json';
const s = fs.readFileSync(p,'utf8');
const images = (s.match(/\/images\//g) || []).length;
const energy = (s.match(/\/EnergyEmpire\/images\//g) || []).length;
console.log('images count', images);
console.log('energy count', energy);
