const{User} = require("./model.js")
const UserDao = {
	save(userinfo){//保存用户信息
		userinfo.level = "VIP0";
		userinfo.reg_time = new Date();
		return new  User(userinfo).save();
	},
	update(condition,userinfo){
		
	},
	remove(condition){
		
	},
	find(condition){
		return User.find(condition);
	}
}
module.exports = UserDao;
