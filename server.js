'use strict'
require('dotenv').config({ path: __dirname+'/env/.env' });

//This part of code has to be removed from here
var DialogflowHandler = require('./dialogflowHandler/dialogflowHandler.js').DialogflowHandler;
var dialogflowHandler = new DialogflowHandler('d69c2a64140b46bd8b30ff5078a6cf80');

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.post('/api/message/:sessionId', (req, res) => {
  let sessionId = req.params.sessionId;
  let query = req.body.message;

  console.log('===== QUERY ===='+query)

  dialogflowHandler.getRes(sessionId, query, [])
  .then(data => {
    res.send(data)
  })
  .catch( err => {
    res.send(err)
  }) 


  //api to get request 
})

/* app.get('/api/message/:sessionId', (req, res) => {
  res.send('Kick up for the show'+req.params.sessionId)
}) */

app.listen(port);

console.log('RESTful API server started on: ' + port);