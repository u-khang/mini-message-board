var express = require('express');
var router = express.Router();

const messages = [
    {
      text: "Hi there!",
      username: "Amanda",
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
    {
      text: 
      `Dark chocolate cake layers:
      Flour-based baking spray for the pans
      1 1/2 cups hot water almost boiling
      3 tablespoons espresso powder
      3 oz. semisweet chocolate finely chopped about 1/2 cup
      2 1/2 cups all-purpose flour
      2 1/2 cups granulated sugar
      1/2 cup light brown sugar lightly packed
      1 1/2 cups unsweet dark cocoa powder sifted
      2 teaspoons baking soda
      3/4 teaspoons baking powder
      1 1/4 teaspoons fine grain salt
      3 large eggs
      3/4 cup vegetable oil
      1 1/2 cups sour cream
      2 teaspoons vanilla extract
      2/3 cup Kahlua liqueur`,
      username: "Remy",
      timestamp: new Date(),
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
