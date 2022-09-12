var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('developers');
});
router.get('/:name', (req, res) => {
    User.find({ name: req.params.name }, (err, user) => {
      res.render('main', { user: user } );
    });
  });
module.exports = router;
