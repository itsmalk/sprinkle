const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const submitDish = require('./routes/submitDish')

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello!')
})

app.post('/submit-dish', submitDish)

app.listen(5000, function () {
    console.log('Listening server on port 5000');
});
