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
  res.render('index', {messages: messages});
});

router.post('/new-message', function(req, res, next) {
  let text = req.body.messageText;
  let username = req.body.username;

  let newMessage = {
    text: text,
    username: username,
    timestamp: new Date(),
  }

  messages.push(newMessage);
  res.redirect('/');
})

module.exports = router;
