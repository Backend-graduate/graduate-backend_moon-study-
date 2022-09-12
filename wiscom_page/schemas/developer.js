const mongoose = require('mongoose');
const developerSchema = new mongoose.Schema({
    korName:    { type: String, trim: true },                   //한글 이름
    engName:    { type: String, trim: true, lowercase: true},   //영어 이름
    major:      { type: String, trim: true, maxlength: 10 },    //전공
    studentID : { type: String, trim: true, unique: 1 },        //학번
    image: String,                                              //개인 이미지 (우선 String으로 함)

    review:     { type: String,  maxlength: 100 },              //소감

    projectName:{ type: String,  maxlength: 10 },               //프로젝트 이름
    teamName:   { type: String, trim: true },                   //팀 이름
    role:       { type: String, }                               //역할
});

module.exports = mongoose.model('Developer', developerSchema);