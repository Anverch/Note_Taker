const noteDB = require("../db");
const { v4: uuidv4 } = require('uuid');

module.exports = function (app) {
    //GET
    app.get("/api/notes", function (req, res) {
        const db = new noteDB();
        res.json(db.getData());
    });

    //POST
    app.post("/api/notes", function (req, res) {
        const db = new noteDB();
        let notes = db.getData();
        const newNote = {
            id: uuidv4(),
            title: req.body.title,
            text: req.body.text          
        };
        notes.push(newNote);
        db.writeData(notes);

        res.status(201).send();
    });

    //DELETE
    app.delete('/api/notes/:id', function (req, res) {
        const db = new noteDB();
        let notes = db.getData();

        notes = notes.filter(note => note.id !== req.params.id);

        db.writeData(notes);

        res.status(200).send();
    });

};