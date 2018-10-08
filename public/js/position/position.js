function Position(){
	this.addListener();
	this.deleteOrder();
	this.updateSup();
	
}
$.extend(Position.prototype,{
	addListener(){
		$(".btn-add-pos").on("click",this.addPosHandler);
		$(".position-page").addClass("active").siblings().removeClass("active");
		this.loadByPage(1);
		$(".pagination").on("click", "a", $.proxy(this.loadByPageHandler, this));
		// 添加职位
	},
	// 按页加载职位信息
	loadByPage(page) {
		// page 是待加载的页面，默认加载第1页
		page = page || 1;
		// ajax 访问查询接口
		$.get("/api/position/find", {page}, (data)=>{
			let html = "";
			data.res_body.data.forEach((curr, index)=>{
				html += `<tr>
	  						<td  id="num">${curr.number}</td>
	  						<td>${curr.title}</td>
	  						<td>${curr.people}</td>
	  						<td>${curr.tel}</td>
	  						<td>${curr.address}</td>
	  						<td>${curr.fox}</td>
	  						<td>${curr.ctime}</td>
	  						<td>
	  							<a href="javascript:void(0);"><img src="/imgs/read.png" class="pread"></a>
	  							<a href="javascript:void(0);" name="upd" data-toggle="modal" data-target="#updateModal"><img src="/imgs/updata.png" class="pupdata"></a>
	  							<a href="javascript:void(0);" name="del"><img src="/imgs/delete.png" class="pdelete"/></a>
	  						</td>
	  					</tr>`;
			});
			// 显示
			$(".position-table tbody").html(html);
		});
	},
	loadByPageHandler(event) {
		const src = event.target;
		// 页面
		const page = Number($(src).text()) || 1;
		// 加载
		this.loadByPage(page);
		// 激活
		$(src).parent().addClass("active").siblings().removeClass("active");

		return false;
	},
	addPosHandler(){
		const url = "/api/position/publish",
				data=$(".add-pos-form").serialize();
		$.post(url,data,(data)=>{
			console.log(data);
			if(data.res_code === 1){
				//成功；
				const  curr = data.res_body.data;
				const html =`<tr>
	  						<td id="num">${curr.number}</td>
	  						<td>${curr.title}</td>
	  						<td>${curr.people}</td>
	  						<td>${curr.tel}</td>
	  						<td>${curr.address}</td>
	  						<td>${curr.fox}</td>
	  						<td>${curr.ctime}</td>
	  						<td>
	  							<a href="javascript:void(0);"><img src="/imgs/read.png" class="pread"></a>
	  							<a href="javascript:void(0);" name="upd" data-toggle="modal" data-target="#updateModal"><img src="/imgs/updata.png" class="pupdata"></a>
	  							<a href="javascript:void(0);" name="del"><img src="/imgs/delete.png" class="pdelete"/></a>
	  						</td>
	  					</tr>`;
	  					$(".position-table tbody").append(html);
	  					$("#addPosModal").modal("hide");
			}
		})
	},
	deleteOrder() {
		$(".position-table").on("click","a[name='del']",function(){
			let number = $(this).parent().parent().children("#num").text();
			console.log(number);
			$.get("/api/position/remove", {number}, (data)=>{
			if(data){
				$(this).parent().parent().remove();
				console.log(data);
			}else{
				alert("删除失败");
			}
			window.location.reload();
			})
		})
	},
	updateSup(){
		var udCode;
		$(".position-table").on("click","a[name='upd']",function(){
			 console.log($(this).parent().parent().children("#num").text());
			udCode = $(this).parent().parent().children("#num").text();
		});
		$(".btn-update-sup").on("click",function(){
			// data.udCode = udCode;
			var data = $(".update-sup-form").serialize();
			 console.log(data);
			data += "&"+"udCode"+"="+udCode;
			let url = "/api/position/update";
			$.ajax({
				type:"post",
				url,
				data,
				dataType:"json",
				success:function(data){
					console.log(data);
					
					
	  					$("#updateModal").modal("hide");
				}
			})
		})
	}
	
})
new Position();
