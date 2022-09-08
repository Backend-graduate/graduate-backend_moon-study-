const { application } = require('express');
var express = require('express');
var router = express.Router();
//스키마 가져오기
var User = require('../schemas/user');

//분리한 라우터 주소
var usersRouter = require('./users');
var signinRouter = require('./signin');//로그인
var signupRouter = require('./signup');//회원가입

var app = express();

//분리한 라우터 연결
app.use('/users', usersRouter); //로그인
app.use('/signin', signinRouter); //로그인
app.use('/signup', signupRouter); //회원가입


//프로미스 형식 -> async/await 형식
router.get('/', async (req, res, next) => {
  try {
    const users = await User.find();
    //모든 사용자를 찾음. User 스키마를 require 한 뒤 find 사용 가능
    res.render('mongoose', { users });
    //렌더링할 때 users를 변수로 넣어줌
    next();
  }
  catch(err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;