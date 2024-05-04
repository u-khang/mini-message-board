var express = require('express');
var router = express.Router();

const messages = [
    {
      text: "Hi there!",
      username: "Amando",
      timestamp: new Date()
    },
    {
      text: "Hello World!",
      username: "Charles",
      timestamp: new Date()
    }
  ];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('test', {messages: messages});
});

module.exports = router;
