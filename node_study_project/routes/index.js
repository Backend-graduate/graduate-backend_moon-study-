const { application } = require('express');
var express = require('express');
var router = express.Router();

//분리한 라우터 주소
var usersRouter = require('./users');
var signinRouter = require('./signin');//로그인
var signupRouter = require('./signup');//회원가입

var app = express();

//분리한 라우터 연결
app.use('/users', usersRouter); //로그인
app.use('/signin', signinRouter); //로그인
app.use('/signup', signupRouter); //회원가입

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/', (req, res) => {
  res.send('Hello, Express');
});

module.exports = router;