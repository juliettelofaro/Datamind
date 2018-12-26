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
      // Factoriser la BDD dans une autre fichier
      const URL    = 'mongodb://localhost:27017';
      const DBNAME = 'DataMind';
      MongoClient.connect(URL, function (err, client) {
            assert.equal(null, err);
            const db         = client.db(DBNAME);
            const collection = db.collection('motivmess');
            collection.find({}).toArray(function (err, docs) {
                  var myMsg = docs;
                  var rand  = myMsg[Math.floor(Math.random() * myMsg.length)];
                  res.render('motivated', {message: rand.message});
            });
      });
});

// Après avoir configuré le routeur on doit l'exporter grâce à module.exports car le routeur
// Express en a besoin
// Donc à chaque fois que je veux utiliser du code dans un autre fichier je fais d'abord un
// exports du code (fonction,class..) et je fais ensuite un require/un import dans un autre
// fichier
module.exports = router;
