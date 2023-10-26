const chalk = require('chalk');
const yargs = require('yargs');
//const getNotes = require('./notes.js');
const notes = require('./notes.js');
const msg = getNotes();
console.log(msg);
const greenMsg = chalk.green.bold(msg);
console.log(greenMsg);
console.log(process.argv);

console.log(process.argv[2]);

const command = process.argv[2];

if (command === 'add') {
    console.log('Adding notes');

} else if (command === 'remove') {
    console.log('removing note');
}

console.log(process.argv);

yargs.command ({
    command: 'add',
    describe: 'Adding a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(){
        console.log('Adding a new note')
    }
})

yargs.command ({
    command: 'remove',
    describe: 'Removing a new note',
    handler: function(){
        console.log('Removing a new note')
    }
})

yargs.command ({
    command: 'list',
    describe: 'Listing all notes',
    handler: function(){
        console.log('Listing all notes')
    }
})

yargs.command ({
    command: 'read',
    describe: 'Reading your note',
    handler: function(){
        console.log('Reading your note')
    }
})

console.log(yargs.argv)
