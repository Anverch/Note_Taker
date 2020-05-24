const noteDB = require("../db");
const { v4: uuidv4 } = require('uuid');

module.exports = function (app) {
    //GET
    app.get("/api/notes", function (req, res) {
       return res.json(noteDB.getData());
    });

    //POST
    app.post("/api/notes", function (req, res) {
        let notes = JSON.parse(noteDB.getData());
        req.id = uuidv4();
        notes.push(req);

        noteDB.writeData(JSON.stringify(notes));

        res.json({ ok: true });
    });

    //DELETE
    app.delete('/api/notes/:id', function (req, res) {
        let notes = JSON.parse(noteDB.getData());
        let id = parseInt(req.params.id);

        notes = notes.filter(note => note.id !== id);

        noteDB.writeData(notes);

        res.json({ ok: true });
    });

};