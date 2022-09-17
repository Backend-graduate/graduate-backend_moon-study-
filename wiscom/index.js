//index.js
const express = require('express') //③번 단계에서 다운받았던 express 모듈을 가져온다.
var mongoose = require('mongoose');
var router = express.Router();
const port = 5000
require('dotenv').config();
var app = express();

const upload = require('./upload');

app.get('/', function(req, res, next) {
  res.send('hello');
});


//https://intrepidgeeks.com/tutorial/upload-image-to-node-js-aws-s3
//이미지 저장 오류 TypeError: this.client.send is not a function

//이미지 저장 코드
// app.post('/single', upload.single('img'), (req, res, next) => {
//   res.status(201).send(req.file);
// });

// app.post('/multipart', upload.array('img'), (req, res, next) => {
// res.status(201).send(req.files);
// });

//https://blog.pumpkin-raccoon.com/116
//error 해결: 버전 오류
//TypeError: this.client.send is not a function<br> &nbsp; &nbsp;at Upload.        __uploadUsingPut
//https://velog.io/@wngud4950/AWS-multer-s3-upload-%EC%98%A4%EB%A5%98
app.post('/test/image', upload.single('image'), (req, res) => {
  res.send('good!')
})

//스키마에서 관리하기 실패..
//https://ssong915.tistory.com/51
//https://velog.io/@server30sopt/Node.js-Express-Typescript%EB%A1%9C-S3%EC%97%90-image-upload-%ED%95%98%EA%B8%B0-Feat.-multer-aws-sdk
//https://iot624.tistory.com/184#Service
//app.post('/upload', upload.single('image'), FileController.uploadFilesToS3);


app.get('/developers', function(req, res, next) {
  res.send('developers');
});

app.get('/projects', function(req, res, next) {
  res.send('projects');
});

app.get('/write', (req, res) => {
  res.render('write.html');
});

app.post('/create', async(req, res) => {
  try {
    console.log(req.body);

    const developer = await Developer.create({
      korName: req.body.todo,
      engName: req.body.dueDate,
    });
    
    await developer.save();
    //res.send('저장 완료');
    res.redirect('http://localhost:${port}/list');
  }
  catch(err) {
    console.error(err);
  }
});

app.get('/list', async (req, res) => {
  try {
    console.log("들어왔다..");
    const postList = await Developer.find();
    res.render('list.html', { postList });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// CONNECT TO MONGODB SERVER
mongoose
  .connect(process.env.MONGOBB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e));

  //스키마 불러오기
require('./models/developer');
require('./models/project');

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) //포트 5000번에서 이 앱을 실행한다.
