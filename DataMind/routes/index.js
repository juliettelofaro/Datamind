var express = require('express');
var router = express.Router();

/* GET home page.*/
router.get('/', function(req, res, next) {
  res.render('home');
});

router.get('/breathe', function(req, res, next) {
      res.render('breathe');
});

router.get('/study', function(req, res, next) {
      res.render('study');
});

router.get('/gain', function(req, res, next) {
      res.render('gain');
});



module.exports = router;
