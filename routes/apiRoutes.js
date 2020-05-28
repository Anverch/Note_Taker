const NoteDB = require("../db");
const { v4: uuidv4 } = require('uuid');

module.exports = function (app) {
    //GET
    app.get("/api/notes", function (req, res) {
        const db = new NoteDB();
        res.json(db.getNotes());
    });

    //POST
    app.post("/api/notes", function (req, res) {
        const db = new NoteDB();

        let notes = db.getNotes();

        const newNote = {
            id: uuidv4(),
            title: req.body.title,
            text: req.body.text          
        };
        notes.push(newNote);
        
        db.saveNotes(notes);

        res.status(201).send(newNote);
    });

    //DELETE
    app.delete('/api/notes/:id', function (req, res) {
        const db = new NoteDB();

        let notes = db.getNotes();

        notes = notes.filter(note => note.id !== req.params.id);

        db.saveNotes(notes);

        res.status(200).send();
    });
};