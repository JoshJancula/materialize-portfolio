
// Requiring our models
var db = require("../models");
var portfolio = require("../data/portfolio");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the contacts
  app.get("/api/messages", function(req, res) {
    var query = {};
   // find all of them
    db.Message.findAll({
      where: query, 
    }).then(function(dbMessage) {
      res.json(dbMessage);
    });
  });
  
  // POST route for submitting a message
  app.post("/api/messages", function(req, res) {
   // take all this info
    db.Message.create({ 
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      body: req.body.body
    }).then(function(dbMessage) {
       res.json(dbMessage.insertId);
    })// if an error happends catch it
    .catch(function(err) { // then throw some json
      res.json(err);
    });
  });
  
  
  
  // get my portfolio info
  app.get("/api/portfolio", function(req, res) {
    res.json(portfolio);
  });

  

};

