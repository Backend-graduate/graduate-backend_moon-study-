const mongoose = require('mongoose');
const developerSchema = new mongoose.Schema({
  korName: String, //한글 이름
  engName: String, //영어 이름
  review: String, //소감

  picture: String, //개인 이미지 (우선 String으로 함)
  projectName: String, //프로젝트 이름
  teamName: String,
});

module.exports = mongoose.model('Developer', developerSchema);