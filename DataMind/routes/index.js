var express = require('express');
var router  = express.Router();

/* GET home page.*/
router.get('/home', function (req, res, next) {
      console.log("on est dans home");
      res.render('home', { title: 'Home Page' });
});

router.get('/breathe', function (req, res, next) {
      console.log("on est dans breathe");
      res.render('breathe', { title: 'Breathe' });
});

router.get('/study', function (req, res, next) {
      res.render('study', { title: 'Study' });
});

router.get('/gain', function (req, res, next) {
      res.render('gain', { title: 'Gain' });
});

router.get('/test', function (req, res, next) {
      res.render('test');
});
module.exports = router;
