function LoginModal(){
	this.addListener();
}
$.extend(LoginModal.prototype,{
	addListener(){
		$(".btn-login").on("click",this.LoginHandler);
	},
	LoginHandler(){
		const url = "/users/login",
				data = $(".login-form").serialize();
		$.post(url,data,(data)=>{
			console.log(data);
			//处理相应数据；
			if(data.res_code === 1){
				//将对象转化为字符串
				sessionStorage.registerUser =JSON.stringify(data.res_body.data);
				window.location.href="/index.html";
			}else{
				alert("用户名或密码错误")
			}
		})
	}
});
new LoginModal();