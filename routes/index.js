var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      title: 'Welcome home Page',
        message: 'Hi there'});
});


/* GET Business page */
router.get('/business', function(req, res, next) {
   
  
  res.render('index', {
      title: 'Business Page',
        message: 'This is the business page'});
});


/* GET registration page */
router.get('/registration', function(req, res, next) {
   
  
  res.render('index', {
      title: 'Registration Page',
        message: 'This is the registration page'});
});



// make this public so the rest of app can see it
module.exports = router;
