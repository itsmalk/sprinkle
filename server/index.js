var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello!')
})

app.listen(5000, function () {
    console.log('Listening server on port 5000');
});
