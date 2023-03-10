const fs = require("fs/promises")
const path = require("path")
const chalk = require("chalk")

const notesPath = path.join(__dirname, "db.json")

async function addNote(title) {
    const notes = await getNotes()
    const note = {
        id: Date.now().toString(),
        title
    }
    notes.push(note)
    saveNotes(notes)
    console.log(chalk.bgGreen("The note was added successfully"))
}

async function saveNotes(notes) {
    await fs.writeFile(notesPath, JSON.stringify(notes))
}

async function getNotes() {
    const notes = await fs.readFile(notesPath, { encoding: "utf-8" })
    return Array.isArray(JSON.parse(notes)) ? JSON.parse(notes) : []
}

async function printNotes() {
    const notes = await getNotes()
    console.log(chalk.bgWhiteBright("Here is the list of notes:"))
    notes.forEach(note => console.log(chalk.bgCyan(note.id, note.title)))
}

async function removeById(id) {
    const notes = await getNotes()
    const filteredNotes = notes.filter(note => note.id !== id)
    saveNotes(filteredNotes)
    console.log(chalk.bgRed(`The note with id=${id} was removed`))
}

module.exports = {
    addNote,
    printNotes,
    removeById
}