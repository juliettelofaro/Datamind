var express     = require('express');
var router      = express.Router();
var MongoClient = require('mongodb').MongoClient
      , assert  = require('assert');

router.get('/', function (req, res, next) {
      res.render('home');
});

router.get('/breathe', function (req, res, next) {
      res.render('breathe', {title: 'Breathe'});
});

router.get('/study', function (req, res, next) {
      res.render('study', {title: 'Study'});
});

router.get('/gain', function (req, res, next) {
      res.render('gain');
});

router.get('/motivated', function (req, res, next) {
      const url    = 'mongodb://localhost:27017';
      const dbName = 'DataMind';
      MongoClient.connect(url, function (err, client) {
            assert.equal(null, err);
            const db         = client.db(dbName);
            const collection = db.collection('motivmess');
            collection.find({}).toArray(function (err, docs) {

                  var myMsg = docs;
                  var rand  = myMsg[Math.floor(Math.random() * myMsg.length)];
                  console.log("voici un random = " + rand.message);
                  res.render('motivated', {message: rand.message});

            });
      });
});

module.exports = router;
