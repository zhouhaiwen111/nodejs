function Header(){
	this.createDom();
	this.loadUser();
	this.addListen();
}
Header.headTemplate = ` <nav class="navbar navbar-default ">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand logo" href="#"><img src="/imgs/buy.png"><span class="fla">超市账单管理系统</span></a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      
      
      <ul class="nav navbar-nav navbar-right reg-log-link">
       <button type="button" class="btn btn-default navbar-btn "><a href ="/html/login.html">登录</a></button>
        <button type="button" class="btn btn-default navbar-btn "><a href ="/html/register.html">注册</a></button> 
      </ul>
      <ul class="nav navbar-nav navbar-right hidden welcome-logout-link">
      	<li><a href="#">欢迎:</a></li>
        <li><a href="javascript:void(0) " class="logout">注销</a></li>
      </ul>
    </div>
  </div>
</nav>`

$.extend(Header.prototype,{
	createDom(){
		$(Header.headTemplate).appendTo("header");
	},
	loadUser(){
		let user = sessionStorage.registerUser;
		if(!user)
		return;
		user = JSON.parse(user);
		$(".reg-log-link").hide()
						  .next(".welcome-logout-link").removeClass("hidden")
						  .find("a:first").text("欢迎："+user.username);
	},
	addListen(){
		$(".logout").on("click",this.zhuxiao);
	},
	zhuxiao(){
		sessionStorage.removeItem("registerUser");
		window.location.reload();
	}
	
});
new Header();