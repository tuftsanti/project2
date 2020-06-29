// REQUIREMENTS
require('dotenv').config();


// SETUP FILES
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const app = express();
const db = mongoose.connection;
const PORT = process.env.PORT || 3000;

const Item = require('./models/item.js')
const show = console.log;
const routeController = require('./controllers/controller.js');
const session = require('express-session')
const bcrypt = require('bcrypt')
const User = require('./models/users.js');
const userController = require('./controllers/users_controller.js')

// SETUP DATABASE
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/project2'

mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true, useFindAndModify: true, useUnifiedTopology: true });
db.on('error', (error) => show(err.message + ' is Mongo running?'));
db.on('connected', () => show('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => show('mongo disconnected'));
// open the connection to mongo
db.on('open' , () => {});


// MIDDLEWARE
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.static('public'));
app.use(session({
    secret: 'SECRET', //process.env.SECRET,
     resave: false,
      saveUninitialized: false
    }))
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// utorrent-api
///////////////////////
// const utorrent = require('utorrent-api')
// const Client = require('utorrent-api')
// // http://ldeveraux.ddns.net:9999/gui/

// const utorrentClient = require('utorrent-api');
// const request = require('request')
// const utorrent = new utorrentClient('ldeveraux.ddns.net', '9999');
// utorrent.setCredentials('guest');
// GET LIST
// utorrent.call('list', function (error, data) {
//     if (error) {
//         show(error)
//     } else {
//         show(data)
//         // show(data.torrentc)
//     }
// })
// GET INDIVIDUAL
// utorrent.call('getprops', {'name': 'Slayer Final Show 2019-11-30'}, function(err, data) {
//     if(err) { 
//         console.log('error : '); console.log(err); return; }
 
//     console.log(data);
// });
// utorrent.call('getprops', function(err, data) {
//     if(err) { 
//         console.log('error : '); console.log(err); return; }
 
//     console.log(data);
// });


// machinepack
//////////////////////////////////////////////////
// const UTorrent = require('machinepack-utorrent');
// // List all Torrents from the uTorrent client.

// UTorrent.listTorrents({
//     host: 'ldeveraux.ddns.net',
//     port: 9999,
//     username: 'guest',
//     password: '',
//     }).exec({
//         // An unexpected error occurred.
//         error: function (err) {
//         },
//         // OK.
//         success: function () {
//         },
//     });

// library-uTorrent
/////////////////////
var UTorrent = require('library-utorrent');
UTorrent.listTorrents({
    host: 'ldeveraux.ddns.net',
    port: 9999,
    username: 'guest',
    password: '',
  }).exec({
  // An unexpected error occurred.
    error: function (err){
  
    },
    // OK.
    success: function (torrents){
        for (item in torrents)
        console.log(torrents[item].parsed.name)
      /*
      torrents is an array of objects:
      [{
        parsed: {
          hash,
          name,
          size
          percentProgressMils,
          downloadedBytes,
          uploadedBytes,
          ratioMils,
          uploadspeedBytesSec,
          downloadspeedBytesSec,
          etaSec,
          peersConnected,
          peersSwarm,
          seedsConnected,
          seedsSwarm,
          availability,
          queueOrder,
          remainingBytes,
          torrentUrl,
          status,
          downloadDir
        },
        raw
      }, ...]
      */
    }
  });

// CONTROLLERS
app.use('/list', routeController);
app.use('/user', userController)

// HOME ROUTE
app.get('/', (req,res) => {
    res.redirect('/list/')
})

// CHECK AUTHENTICATION
const authenticated = (req, res, next) => {
    if (req.session.currentUser) {
        return next()
    } else {
        res.redirect('/session/new')
    }
}

// AUTHORIZATION
app.get('/session/new', (req,res) => {
    res.render('sessions/New.jsx', {
    currentUser: req.session.currentUser})
})

app.post('/session/', (req,res) => {

    User.findOne({username: req.body.username}, (error, found) => {
        if(error) {
            res.send(error)
        } else if (!found) {
            res.redirect('/user/new');
            // alert("That user doesn't exist, please create a new one.")
        } else {
            if (bcrypt.compareSync(req.body.password, found.password)) {
                req.session.currentUser = found.username
                res.redirect('/list/')
            } else {
                // res.send(`Sorry, that password is incorrect.<br/>
                // <a href="/list">Click here to return to the main list</a>`)
                res.render('sessions/WrongPass.jsx')
            }
        }
    
    })
})

// Destroys session 
app.delete('/session/', (req,res) => {
    req.session.destroy(() => {
        // res.redirect('/session/new')
        res.redirect('/')
    })
})

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true});
db.once('open', ()=> {
    show('Now connected to mongo');
});

// LISTEN ROUTE
app.listen(PORT, () => {
    show(`Listening on port: ${PORT}...`);
})