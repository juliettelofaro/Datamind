var express = require('express');
var router  = express.Router();

/* GET home page.*/
router.get('/', function (req, res, next) {
      res.render('home', {title: 'Breathe, Chill, Enjoy'});
});

router.get('/breathe', function (req, res, next) {
      console.log(" BREATH API");
      res.render('breathe', {title: 'Breathe'});
});

router.get('/study', function (req, res, next) {
      res.render('study', {title: 'Study'});
});

router.get('/gain', function (req, res, next) {
      res.render('gain');
});

module.exports = router;
