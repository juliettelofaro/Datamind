var express = require('express');
var router  = express.Router();

/* GET home page.*/
router.get('/home', function (req, res, next) {
      console.log("on est dans home");
      res.render('home');
});

router.get('/breathe', function (req, res, next) {
      console.log("on est dans breathe");
      res.render('breathe');
});

router.get('/study', function (req, res, next) {
      res.render('study');
});

router.get('/gain', function (req, res, next) {
      res.render('gain');
});

module.exports = router;
