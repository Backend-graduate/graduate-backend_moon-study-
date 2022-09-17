const mongoose = require('mongoose');

// 6. Schema 생성. 
const projectSchema = new mongoose.Schema({
    name:       { type: String, trim: true },                       //프로젝트 이름
    image: String,                                                  //프로젝트 이미지 (우선 String으로 함)
    teamName:   { type: String, trim: true},                        //팀 이름
    introduction:{ type: String,  maxlength: 100 },                 //팀 소개

    presentationVideo: String, //발표 영상(우선 String으로 함. 유튜브 영상 링크?)
    presentationImage: String, //발표 자료 이미지 (우선 String으로 함. s3에 이미지 저장)

    developer1: String, //팀원1(우선 String으로 함. developer 객체로 할 수 있는지 찾아보기)
    developer2: String, //팀원2(우선 String으로 함)
    developer3: String, //팀원3(우선 String으로 함)
    developer4: String, //팀원4(우선 String으로 함)
    
    //좋아요
    likeCount: { type: Number, default: 0 },
    likeUser: { type: Array, default: [] }, //developer 객체로 할 수 있는지 찾아보기
    
    //댓글
    comment: { type: Array, default: [] },
    user: {
        // user 정보를 기반으로 가져옴. 
        _id: mongoose.Types.ObjectId, username: String }
});

// 7. 정의된 스키마를 객체처럼 사용할 수 있도록 model() 함수로 컴파일
module.exports = mongoose.model('Project', projectSchema);