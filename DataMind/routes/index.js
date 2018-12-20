var express = require('express');
var router  = express.Router();

/* GET home page.*/
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
      res.render('motivated');
});

module.exports = router;
