import express from 'express';
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    code: 200,
    message: '请求成功',
    data: { title: 'Express 纯接口服务' }
  });
});

export default router;
