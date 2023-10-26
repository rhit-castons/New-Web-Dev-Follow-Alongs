const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book);
console.log(bookJSON)

//console.log(bookJSON.title) - undef

const bookParsed = JSON.parse(bookJSON);
console.log(bookParsed.title);

const fs = require('fs');
fs.writeFileSync('1-json.json', bookJSON);

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
console.log(dataJSON); // JSON
const data = JSON.parse(dataBuffer);
console.log(data); //JS object
console.log(dataBuffer);

