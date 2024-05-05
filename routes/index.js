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
    },  
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      username: "Twilight Sparkle",
      timestamp: new Date()
    },
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
