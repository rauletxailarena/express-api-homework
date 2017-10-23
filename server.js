var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('client/build'));

var apiRouter = require('./controllers/films.js');

app.use("/api/films", apiRouter);


app.listen(3000, function () {
  console.log('App running on port ' + this.address().port);
});
