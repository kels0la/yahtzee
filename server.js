require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();

const PORT = process.env.PORT || 3001;

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/bittokaDB', { useNewUrlParser: true });
// mongoose.set('useCreateIndex', true)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(routes);

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});