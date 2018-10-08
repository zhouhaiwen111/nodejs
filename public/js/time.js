function shijian(){
	this.time();
}
$.extend(shijian.prototype,{
	time(){
		
		setInterval(function(){
		var date = new Date();
		var year = date.getFullYear();
		var month = date.getMonth() + 1;
		var day = date.getDate();
		
		var hour = date.getHours();
		if(hour<10){hour="0"+hour};
		var min = date.getMinutes();
		if(min<10){min="0"+min};
		var sec = date.getSeconds();
		if(sec<10){sec="0"+sec};
		var week = date.getDay();
		var x;
		switch(week){
			case 0:x="天";break;
			case 1:x="一";break;
			case 2:x="二";break;
			case 3:x="三";break;
			case 4:x="四";break;
			case 5:x="五";break;
			case 6:x="六";break;
			
		}
		$(".timer").html(year+"年"+month+"月"+day+"日"+"&nbsp;"+"星期"+x+"&nbsp;"+hour+"时"+min+"分"+sec+"秒");
	},1000)
	}
});
new shijian();