//引入mongoose
const mongoose = require("mongoose");
//连接mongodb数据库
mongoose.connect('mongodb://localhost/proj');
//创建用户Schema
const userSchema = new mongoose.Schema({
	username:String,
	password:String,
	level:String,
	reg_time:Date
});
const positionSchema = new mongoose.Schema({
	number : String,
	title : String,
	people : String,
	tel : Number,
	address : String,
	fox: String,
	ctime:String
});

//根据用户Schema
const User = mongoose.model("user",userSchema);
const Position = mongoose.model("position", positionSchema);
module.exports = {User, Position};