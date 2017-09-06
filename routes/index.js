var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , className: 'CST438'}); // render function: use template index (located in views director: index.jade)
});

module.exports = router;
