function UpdateModel(){
	this.createDom();
}
UpdateModel.addModel = `
<div class="modal fade" id="updateModal" tabindex="-1" role="dialog">
	  <div class="modal-dialog" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
	        <h4 class="modal-title" id="myModalLabel">供应商信息修改</h4>
	      </div>
	      <div class="modal-body">
	      <div class="alert alert-danger hidden reg-error">添加供应商失败，请稍后重试~</div>
	        <form class="update-sup-form">
			  <div class="form-group">
			    <label for="supName">供应商名称</label>
			    <input type="text" class="form-control" name="sname" id="supName" placeholder="请输入供应商名称">
			  </div>
			  <div class="form-group">
			    <label for="supMan">联系人</label>
			    <input type="text" class="form-control" name="sman" id="supMan" placeholder="请输入联系人">
			  </div>
			  <div class="form-group">
			  <label for="supPhone">联系电话</label>
			  <input type="text" class="form-control" name="sphone" id="supPhone" placeholder="请输入联系电话">
			  </div>
			  <div class="form-group">
			  <label for="supAdress">联系地址</label>
			  <input type="text" class="form-control" name="sadress" id="supAdresss" placeholder="请输入联系地址">
			  </div>
			  <div class="form-group">
			  <label for="supFax">传真</label>
			  <input type="text" class="form-control" name="sfax" id="supFax" placeholder="请输入传真">
			  </div>
			</form>
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-default" data-dismiss="modal">返回</button>
	        <button type="button" class="btn btn-primary btn-update-sup">保存</button>
	      </div>
	    </div>
	  </div>
	</div>`
$.extend(UpdateModel.prototype,{
	createDom(){
		$(UpdateModel.addModel).appendTo("body");
	}
})
new UpdateModel();