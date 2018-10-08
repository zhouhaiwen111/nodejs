function RegisterModal(){
	this.addlister();
}
$.extend(RegisterModal.prototype,{
	addlister(){
		$(".btn-register").on("click",this.registerHandler);
		
	},
	registerHandler(){
		const url = "/users/register",
				data = $(".register-form").serialize();//向服务器提交数据
				
				$.post(url, data, (data)=>{
					console.log(data);
					// 处理响应数据
					if (data.res_code === 1) { // 注册成功
						//将成功的信息保存到session storage中
						
						sessionStorage.registerUser = JSON.stringify(data.res_body.data);
						window.location.href="/index.html";
						
					} else { 
						alert("注册失败");
					}
				});
		
	}
});
new RegisterModal();