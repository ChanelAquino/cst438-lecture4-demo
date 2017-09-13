var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('random', {number: Math.random()}); // render function: use template index (located in views director)
});

module.exports = router;
