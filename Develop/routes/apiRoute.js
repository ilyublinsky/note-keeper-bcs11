// LOAD DATA

const noteDB = require('../db/db');

// ROUTING

module.exports = (app) => {
  // API GET Requests

  app.get('/api/htmlRoute', (req, res) => res.json(noteDB));

  // API POST Requests

  app.post('/api/', (req, res) => {

    if (tableData.length < 5) {
      tableData.push(req.body);
      res.json(true);
    } else {
      waitListData.push(req.body);
      res.json(false);
    }
  });

  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post('/api/clear', (req, res) => {
    // Empty out the arrays of data
    tableData.length = 0;
    waitListData.length = 0;

    res.json({ ok: true });
  });
};