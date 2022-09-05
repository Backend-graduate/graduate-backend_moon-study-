//라우터 분리 (1) ./routes/signin
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
//데이터 모델 가져오기
const { User } = require("../models/user");  //인스턴스 생성

//bodyParser 이용하기
//var app = express();
//app.use(bodyParser.json());

//bodyParser 이용하지 않기
const app = express();
app.use(express.json());

router.get('/',(req,res)=>{
  res.send('open /');
});

router.get('/user',(req,res)=>{
  res.send('open /user');
});

router.post('/user',(req,res)=>{
     var user = new User({
        email: req.body.text
     });
    
     user.save().then((doc)=>{
         res.send(doc)
     }, (e)=>{
         res.status(400).send(e);
     });
 });

module.exports = router;