const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const movieHandler = require('./server/routes/movies');

mongoose.connect('mongodb://127.0.0.1:27017/m101')
  .then(function fulfilled() {
    console.log('Connected to MongoDB on 27017 like normal');
  });

app.set('views', './views');
app.set('view engine', 'jade');
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.text({type: 'text/html'}))
app.get('/', function(req, res) {
  res.render('index', { pageTitle: 'Week1!', name: 'Sean' });
});

app.use('/api/v1', movieHandler);

app.listen(3000, function() {
  console.log('Listening on port 3000...');
});