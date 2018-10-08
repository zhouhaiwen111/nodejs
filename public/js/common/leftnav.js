function Leftnav(){
	this.createDom();
}
Leftnav.navTemplate = `<div class="left">
		<div class="wrap">
		<ul class="nav nav-stacked">
		  <li>功能列表</li>
		  <li role="presentation"><a href="#"><img src="/imgs/zd.png" class="pic1">账单管理</a></li>
		  <li role="presentation"><a href="/html/position.html"><img src="/imgs/gys.png" class="pic2">供应商管理</a></li>
		  <li role="presentation" class="active"><a href="#"><img src="/imgs/yh.png" class="pic3">用户管理</a></li>
		  <li role="presentation"><a href="#"><img src="/imgs/mm.png" class="pic4">密码修改</a></li>
		  <li role="presentation"><a href="#"><img src="/imgs/tc.png" class="pic5">退出系统</a></li>
		</ul>
		</div>
     </div>`
$.extend(Leftnav.prototype,{
	createDom(){
		$(Leftnav.navTemplate).appendTo(".Find");
	}
})
new Leftnav();
