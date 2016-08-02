var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/admin', function(req, res, next) {
  res.render('admin', { title: 'Express' });
});
router.post('/admin', function(req, res, next) {
 
});
router.get('/add_admin', function(req, res, next) {
  res.render('add_admin', { title: 'Express' });
});
router.post('/add_admin', function(req, res, next) {

});
module.exports = router;
