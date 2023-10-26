const getNotes = function() {
    return 'Your notes ..'
}

const addNote = function(title, body) {
    const notes = loadNotes();
    //console.log(notes);
    notes.push({
        title: title,
        body: body
        })  
}

const loadNotes = function() {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
 }
 
 const saveNotes = function(notes){
    const dataJSON = JSON.stringify(saveNotes)
    fs.writeFileSync('notes.json',dataJSON)
}


module.exports = {
    getNotes: getNotes,
    addNote: addNote
}

const duplicateNotes = notes.filter(function(note){
    return note.title ===title// quality operator - zero items if no duplicates
})

if (duplicateNotes.length === 0) {
    notes.push({
        title: title,
        body: body
    })
    saveNotes(notes)
console.log('New note added');
} else {
    console.log('Title is taken')
}

const add = require('./utils.js');

const chalk = require('chalk');
const success = chalk.green('success');
const failure = chalk.red.bold('failure');
console.log(success, ' and ', failure);


module.exports = getNotes;

yargs.parse();