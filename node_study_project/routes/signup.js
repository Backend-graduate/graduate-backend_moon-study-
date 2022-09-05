//라우터 분리 (2) ./routes/signup
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('signup');
});


router.post()
module.exports = router;
