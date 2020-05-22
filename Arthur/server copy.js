const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;
const db = mongoose.connection;
const show = console.log;

const MONGOURI = process.env.MONGODBURI || 'mongodb://localhost:27017/project2';
mongoose.connect(MONGOURI, {useFindAndModify: true, useUnifiedTopology: true, useNewUrlParser: true});
db.on('open', () => {show('Mongo Connected')})






app.listen(PORT) //NO CALLBACK, LIVE DB