//index.js
const express = require('express') //③번 단계에서 다운받았던 express 모듈을 가져온다.
var mongoose = require('mongoose');
var router = express.Router();
const port = 5000
var app = express();
const upload = require('./upload');

app.get('/', function(req, res, next) {
  res.send('hello');
});


//https://intrepidgeeks.com/tutorial/upload-image-to-node-js-aws-s3
//이미지 저장 오류 TypeError: this.client.send is not a function

//이미지 저장 코드
app.post('/single', upload.single('img'), (req, res, next) => {
  res.status(201).send(req.file);
});

app.post('/multipart', upload.array('img'), (req, res, next) => {
res.status(201).send(req.files);
});



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
  .connect('mongodb+srv://munseoyeon:mun1234@cluster0.2gktvkj.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e));

  //스키마 불러오기
require('./schemas/developer');
require('./schemas/project');

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) //포트 5000번에서 이 앱을 실행한다.
