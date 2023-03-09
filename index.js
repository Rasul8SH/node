const yargs = require("yargs")
const { addNote, printNotes } = require("./notes.controller")

yargs.command({
    command: "add",
    describe: "Add new note to list",
    builder: {
        title: {
            type: "string",
            describe: "Note title",
            demandOption: true
        }
    },
    handler({ title }) {
        addNote(title)
    }
})

yargs.command({
    command: "list",
    describe: "Print all notes",
    async handler() {
        await printNotes()
    }
})

yargs.parse()