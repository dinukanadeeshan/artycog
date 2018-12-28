var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var path    = require("path");

app.use(cors())
app.use(bodyParser.json());  
app.use(express.static(path.join(__dirname+'/public')));

var firebase = require("firebase");
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyArK7B5UPGNCcxIv4HLkNcR0K8np5DyLfo",
    authDomain: "artycogdesigns.firebaseapp.com",
    databaseURL: "https://artycogdesigns.firebaseio.com/",
    projectId: "artycogdesigns",
    storageBucket: "artycogdesigns.appspot.com",
    messagingSenderId: "177149346646"
};
firebase.initializeApp(config);

// var storage = firebase.storage();
// var storageRef = storage.ref();
// var imagesRef = storageRef.child('images');

// var database = firebase.database();

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.post("/api/auth/signup", (req, res, next) => {
    var id = req.body.id;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function(data){
        console.log(data);
    })
    .catch(function(error) {
        res.sendStatus(400).send(error);
    });
});


app.post("/api/auth/login", (req, res, next) => {
    console.log(req);
    var body = Buffer.from(req.body.id, 'base64').toString().split(':');
    var email = body[0];
    var password = body[1];
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(data){
        console.log(data);
		res.send(200, data);
    })
    .catch(function(error) {
        res.send(400, error);
    });
});