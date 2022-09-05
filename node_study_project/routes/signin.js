//라우터 분리 (1) ./routes/signin
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('signin');
});

module.exports = router;