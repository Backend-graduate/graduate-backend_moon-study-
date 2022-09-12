const mongoose = require('mongoose');
const projectSchema = new mongoose.Schema({
    name:       { type: String, trim: true },                       //프로젝트 이름
    image: String,                                                  //프로젝트 이미지 (우선 String으로 함)
    teamName:   { type: String, trim: true},                        //팀 이름
    introduction:{ type: String,  maxlength: 100 },                 //팀 소개

    presentationVideo: String, //발표 영상(우선 String으로 함)
    presentationImage: String, //발표 자료 이미지 (우선 String으로 함)

    developer1: String, //팀원1(우선 String으로 함)
    developer2: String, //팀원2(우선 String으로 함)
    developer3: String, //팀원3(우선 String으로 함)
    developer4: String, //팀원4(우선 String으로 함)
    
    //좋아요
    //댓글
});

module.exports = mongoose.model('Project', projectSchema);