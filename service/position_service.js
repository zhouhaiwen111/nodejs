const PositionDao = require("../dao/position_dao.js");

const PositionService = {
	// 发布职位信息
	publish(req, res, next) {
		// 获取请求中传递的职位数据
		const {number, title, people, tel,address,fox,ctime} = req.body;
		
		
		// 保存到数据库中
		PositionDao.save({number, title, people, tel,address,fox,ctime})
							.then((data)=>{
								res.json({res_code: 1, res_error: "", res_body: {data}});
							})
							.catch((err)=>{
								res.json({res_code: 0, res_error: err, res_body: {}});
							});
	},
	// 查询职位信息
	find(req, res, next) {
		// 获取查询的页码
		const {page} = req.query;
		// 查询
		PositionDao.findByPage(page)
							.then((data)=>{
								res.json({res_code:1, res_error:"", res_body:{data}});
							})
							.catch((err)=>{
								res.json({res_code:1, res_error:err, res_body:{}});
							});
	},
	//删除数据
	remove(req, res, next) {
		const {number} = req.query;
		PositionDao.removeorder({number})
							.then((data)=>{
								res.json({res_code:1, res_error:"", res_body:{data}});
							})
							.catch((err)=>{
								res.json({res_code:0, res_error:err, res_body:{}});
							});
	},
	//修改数据
	update(req,res,next){
		const {udCode,title,people,tel,address,fox} = req.body;
		console.log(req.body);
			PositionDao.updateorder({number:udCode},{$set:{title,people,tel,address,fox}})
						.then((data)=>{
							res.json({res_code:1,res_error:"",res_body:{data}});
						})
						.catch((err)=>{
							res.json({res_code:0,res_error:err,res_body:{}});
						})
		}
}

module.exports = PositionService;