var express = require('express');
const Developer = require('../schemas/developer');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/developers', function(req, res, next) {
  res.render('./developers', { title: 'Developers' });
});

router.get('/projects', function(req, res, next) {
  res.render('./projects', { title: 'Projects' });
});

router.get('/write', (req, res) => {
  res.render('write.html');
});

router.post('/create', async(req, res) => {
  try {
    console.log(req.body);

    const developer = await Developer.create({
      korName: req.body.todo,
      engName: req.body.dueDate,
    });
    
    await developer.save();
    //res.send('저장 완료');
    res.redirect('http://localhost:3000/list');
  }
  catch(err) {
    console.error(err);
    next(err);
  }
});

router.get('/list', async (req, res) => {
  try {
    console.log("들어왔다..");
    const postList = await Developer.find();
    res.render('list.html', { postList });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// router.get('/:id/comments', async (req, res, next) => {
//   try {
//     const comments = await Comment.find({ commenter: req.params.id })
//       .populate('commenter');
//     console.log(comments);
//     res.json(comments);
//   } catch (err) {
//     console.error(err);
//     next(err);
//   }
// });

module.exports = router;
