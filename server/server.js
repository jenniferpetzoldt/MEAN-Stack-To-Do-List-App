// requires
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const listRouter = require('./routes/list.router.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//uses
app.use(express.static('server/public'));
app.use('/list', listRouter);

//globals
const port = process.env.MONGODB_URI || 5000;
const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/lists';

mongoose.connect(mongoURI, { useNewUrlParser: true });

mongoose.connection.on('open', () => {
    console.log('Connected to Mongo');
});

mongoose.connection.on('error', (error) => {
    console.log('ERROR CONNECTING TO MONGO', error);
});

//spin up server
app.listen(port, () => {
    console.log('Server up on: ', port);
})// end spin up server
