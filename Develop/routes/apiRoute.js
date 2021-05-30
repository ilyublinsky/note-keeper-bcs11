const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// ROUTING

module.exports = (app) => {
  // API GET Requests

  app.get('/api/notes', (req, res) => (req, res) => {
    fs.readfile('./db/db.json', (err, data) => {
      if (err) throw err;
      res.json(JSON.parse(data));
    });
  });

  // API POST Requests

    app.post("/api/notes", (req, res) => {
        let newNote = req.body;
        newNote.id = uuidv4();
        fs.readFile('./db/db.json', (err, data) => {
            if (err) throw err;
            let notes = JSON.parse(data);
            notes.push(newNote);
            fs.writeFile('./db/db.json', JSON.stringify(notes), (err) => {
                if (err) throw err;
                res.json(notes);
            });
        });
    });

  // API DELETE Requests

app.delete("/api/notes/:id", (req, res) => {
        const id = req.params.id;
        fs.readFile('./db/db.json', (err, data) => {
            if (err) throw err;
            const notes = JSON.parse(data);
            let notesArr = notes.filter((note) => {
                return id !== note.id;
            })
            fs.writeFile('./db/db.json', JSON.stringify(notesArr), (err) => {
                if (err) throw err;
                res.json(notesArr);
            });
        });
    });
};