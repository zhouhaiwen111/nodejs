var express = require('express');
var PositionService = require("../service/position_service.js");
var path = require("path");
var router = express.Router();


// 发布
router.post("/publish", PositionService.publish);

// 查找
router.get("/find", PositionService.find);

// 修改
router.post("/update",PositionService.update);
// 删除
router.get("/remove", PositionService.remove);

module.exports = router;
