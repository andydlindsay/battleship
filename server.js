// load environment variables
require('dotenv').config();

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bluebird = require('bluebird');
const path = require('path');
const cors = require('cors');

// database setup
const mongooseOptions = {
  promiseLibrary: bluebird,
  useNewUrlParser: true
};
const mongoDB = "mongodb://" + process.env.DB_USER + ":" + process.env.DB_PASSWORD + "@ds029051.mlab.com:29051/battleship";
mongoose.connect(mongoDB, mongooseOptions);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// app setup
const app = express();

// cors middleware
app.use(cors());

// app middleware
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));

// routes


// catchall redirect
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/index.html'));
});


// server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
