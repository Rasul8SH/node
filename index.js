const yargs = require("yargs")
const { addNote, printNotes, removeById } = require("./notes.controller")

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

yargs.command({
    command: "remove",
    describe: "Remove note by id",
    builder: {
        id: {
            type: "string",
            describe: "Note id to remove",
            demandOption: true
        }
    },
    handler({ id }) {
        removeById(id)
    }
})

yargs.parse()