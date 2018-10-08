const UserDao = require("../dao/user_dao.js");
const bcrypt = require("bcrypt");
const UserService = {
	register(req,res,next){
		//获取用户注册的信息
		const{username,password} = req.body;
		//const username = req.body.username,password = req.body.password
		//保存到数据库
		//密码加密
		const hash = bcrypt.hashSync(password,10);
		UserDao.save({username, password: hash})
					.then((data)=>{ // 保存成功
						res.json({res_code:1, res_error: "", res_body: {data: {username,level:data.level,reg_time:data.reg_time}}});
					})
					.catch((err)=>{
						res.json({res_code: 0, res_error: err, res_body: {}});
					});
		//{username,password}<==>{username:username,password:password}
	},
	login(req,res,next){
		const{username,password} = req.body;
		UserDao.find({username})
				.then((data)=>{
					console.log(data);
					//res.json({res_code:1});
					if(data.length === 1){
						const user = data[0];
						const b = bcrypt.compareSync(password, user.password);
						if(b){
							req.session.loginUser = user;
							res.json({res_code:1, res_error: "", res_body: {data: {username,level:data.level,reg_time:data.reg_time}}});
						}else{
							res.json({res_code:0,res_error:err,res_body:{}})
						}
					}else{
						res.json({res_code:0,res_error:err,res_body:{}})
					}
				})
				.catch((err)=>{
					  	res.json({res_code:-1, res_error:err, res_body:{}});
					  });
	},
	logout(){
		
	}
}
module.exports = UserService;