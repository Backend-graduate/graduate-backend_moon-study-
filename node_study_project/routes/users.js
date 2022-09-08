const express = require('express');
const User = require('../schemas/user');
const Comment = require('../schemas/comment');

const router = express.Router();

router.route('/')
//사용자를 조회하는 요청
  .get(async (req, res, next) => {
    try {
      //사용자 데이터 전체 조회
      const users = await User.find({});
      //json형식으로 반환
      res.json(users);
      next();
    } catch (err) {
      console.error(err);
      next(err);
    }
  })
//사용자를 등록하는 요청
  .post(async (req, res, next) => {
    try {
      //사용자를 등록하는 과정
      //1. 모델로 user 객체를 만들고 
      const user = await User.create({
        //2. 객체 안에 다큐먼트 안에 들어갈 내용들을 넣어준다.
        name: req.body.name,
        age: req.body.age,
        married: req.body.married,
      });
      //3. save 메서드로 저장. 정의한 스키마에 부합하지 않는 데이터를 넣었을 때는 몽구스가 에러를 발생시킨다.
      console.log(user);
      res.status(201).json(user);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

router.get('/:id/comments', async (req, res, next) => {
  try {
    const comments = await Comment.find({ commenter: req.params.id })
      .populate('commenter');
    console.log(comments);
    res.json(comments);
    next();
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;