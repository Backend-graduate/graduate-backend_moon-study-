//index.js
const express = require('express') //③번 단계에서 다운받았던 express 모듈을 가져온다.
var mongoose = require('mongoose');
const app = express() //가져온 express 모듈의 function을 이용해서 새로운 express 앱을 만든다. 🔥
const port = 5000 //포트는 4000번 해도되고, 5000번 해도 된다. -> 이번엔 5000번 포트를 백 서버로 두겠다.

app.get('/', (req, res) => { //express 앱(app)을 넣고, root directory에 오면, 
  res.send('Hello World!') //"Hello World!" 를 출력되게 해준다.
})

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