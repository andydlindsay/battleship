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
const mongoDB = "mongodb://" + process.env.DB_USER + ":" + process.env.DB_PASSWORD + "@ds029051.mlab.com:29051/" + process.env.DB_NAME;
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
app.use(express.static('client'));

// routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/index.html'));
});

// server setup
const server = http.createServer(app);

// set up socket.io
const io = require('socket.io')(server);

// listen for connections
io.on('connection', (socket) => {
  console.log('A new WebSocket connection has been established.');
});

// fire up server
const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
