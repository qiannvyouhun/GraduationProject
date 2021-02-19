var express = require('express');//引用express
var router = express.Router();//创建router实例

/* GET home page. */

//获取测试答案
router.post('/postTextA', function(req, res, next) {
  const {}
  res.json({
    errno:"/postTextA",
    data:[1,2,3]
  })
});

//查询垃圾类别
router.post('/search', function(req, res, next) {
  const { garbageName, typeName } = req.body
  res.json({
    errno:"/search",
    data:{
      garbageName,
      typeName
    }
  })
});

module.exports = router;
