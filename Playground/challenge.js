const fs = require('fs');

const dataBuffer = fs.readFileSync('playground/data.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data.name, data.city);

data.name = "Sofia";
data.city = "Chicago";
const updateDataJSON = JSON.stringify(data);
fs.writeFileSync('playground/data.json', updateDataJSON);
console.log(data.name, data.city);
