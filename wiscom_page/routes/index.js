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
    //return res.redirect("/");
    res.send('저장 완료');
  }
  catch(err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
