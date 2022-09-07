const express = require('express');
const Comment = require('../schemas/comment');

const router = express.Router();


//다큐먼트를 등록하는 라우터
router.post('/', async (req, res, next) => {
  try {
     //1. Comment 스키마로 comment 객체를 만들어
    const comment = await Comment.create({
        //2. 안에 다큐먼트 내용을 넣은 뒤
      commenter: req.body.id,
      comment: req.body.comment,
    });
    console.log(comment);
    //4. 결과로 반환된 result객체를 populate 메서드를 commenter 스키마와 합침(path 옵션으로 어떤 필드를 합칠지 설정하는 방법)
    const result = await Comment.populate(comment, { path: 'commenter' });
    //3. save 메서드로 저장
    res.status(201).json(result);
  } catch (err) {
    console.error(err);
    next(err);
  }
});



router.route('/:id')
    //다큐먼트를 수정하는 라우터
  .patch(async (req, res, next) => {
    try {
        //1. update 메서드로 수정
      const result = await Comment.update({
        //2. 어떤 다큐먼트를 수정할지에 대한 쿼리 객체
        _id: req.params.id,
      }, {
        //3. 수정할 필드와 값이 들어 있는 객체를 제공
        comment: req.body.comment,
      });
      res.json(result);
    } catch (err) {
      console.error(err);
      next(err);
    }
  })

  //다큐먼트를 삭제하는 라우터
  .delete(async (req, res, next) => {
    try {
        //1. remove 메서드를 사용하여 삭제
      const result = await Comment.remove({ _id: req.params.id });
      res.json(result);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

module.exports = router;