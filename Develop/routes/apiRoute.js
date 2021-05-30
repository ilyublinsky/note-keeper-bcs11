const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');


// LOAD DATA

const noteDB = require('../db/db.json');

// ROUTING

module.exports = (app) => {
  // API GET Requests

  app.get('/api/notes', (req, res) => res.json(noteDB));

  // API POST Requests

  app.post('/api/notes', (req, res) => {
    let newNote = req.body;
    newNote.id = uuidv4();
    data.push(newNote)
    fs.writeFileSync('./db/db.json', JSON.stringify(noteDB))
    res.json(noteDB)
    console.log("Note added successfully!")
    });

  // API DELETE Requests

  app.delete('/api/notes/:id', function (req, res) {
    let id = req.params.id
    const select = noteDB.find(note => note.id === id)

    if (id === select.id){
      data.splice(data.indexOf(select),1)
      fs.writeFileSync('./db/db.json', JSON.stringify(noteDB))
    }
    res.json(noteDB)
    console.log("Note successfully deleted!")
  })
}

  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post('/api/clear', (req, res) => {
    // Empty out the arrays of data
    tableData.length = 0;
    waitLisnpmtData.length = 0;

    res.json({ ok: true });
  });
};