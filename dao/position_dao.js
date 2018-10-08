const {Position} = require("./model.js");

const PositionDao = {
	save(positionInfo) {
		positionInfo.publish_time = new Date();
		return new Position(positionInfo).save();
	},
	findByPage(page) {
		const pageSize = 3; // 每页显示记录数
		return Position.find().limit(pageSize).skip((page - 1) * pageSize);
	},
	removeorder(num) {
		return Position.remove(num);
	},
	updateorder(scode,qwe){
		return Position.update(scode,qwe);
	}

	// Position.find().count()
};

module.exports = PositionDao;

