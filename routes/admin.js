// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
// const mainController = require('../controllers/mainController');


// router.get('/', function(req, res, next) {
//     res.render('../views/admin');
//   });

  router.get('/login', function(req, res, next) {
    res.render('admin');
  });

  router.post('/login', function(req, res, next) {
    req.session.email = req.body.email
    return res.redirect('/welcome')
  });

module.exports = router;
