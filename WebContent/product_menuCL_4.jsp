<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>ผลประโยชน์การขาย</title>

</head>
<body>
	<form class="form-horizontal">
		<div class="row box-body" id="benefit_sale_CL">
			<div class="panel panel-primary">
				<div class="panel-heading text-left">
					<p class="margin0 text-center">
						<b>ผลประโยชน์การขาย</b>
					</p>
				</div>
				<div class="text-center" style="padding: 10px 0"></div>
				<div class="form-group" style="width:90%; margin:auto;">
					<div class="col-sm-3">ผลประโยชน์การขาย</div>
					<div id="panel_saleBenefits" class="col-sm-8 panel panel-default">
						
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="col-md-8 col-md-offset-7 text-right" style="padding:0 0 20px 0;">
						<div class="col-md-7">
							<div class="col-md-6">
								<button type="button" class="btn btn-primary width80px"
									id="bt_ui005_2_Confirm_cl" onclick="bt_Menu4_Confirm();">บันทึก</button>
							</div>
							<div class="col-md-3">
								<button type="button" class="btn btn-primary width80px"
									data-dismiss="modal" data-toggle="modal"
									data-target="#cancelBoxCL_Sale">ยกเลิก</button>
							</div>
						</div>
					</div>	
				</div>				
			</div>			
		</div>
	</form>
	
	<!-- ปุ่มยกเลิก -->
	<div id="cancelBoxCL_Sale" class="modal fade bd-example-modal-sm"
				tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel"
				aria-hidden="true">
				<div class="modal-dialog modal-sm">
					<div class="modal-content">
						<div class="modal-header"
							style="background-color: #337AB7; color: white;">
							<button type="button" class="close" data-dismiss="modal">&times;</button>
							<h4 class="modal-title">แจ้งเตือน</h4>
						</div>
						<div class="modal-body text-center">
							<label>ท่านต้องการยกเลิกการสร้างหรือไม่<br>หากต้องการยกเลิก
								ให้กด ยืนยัน <br> ระบบจะไม่ทำการบันทึกข้อมูลการสร้างนี้
							</label>
						</div>
						<div class="text-center" style="padding: 10px 0"></div>
						<div class="row">
							<div class="col-md-3"></div>
							<div class="col-md-2">
								<button type="button" class="btn btn-primary" onclick="cancelPage('product.jsp');">ยืนยัน</button>
							</div>
							<div class="col-md-1"></div>
							<div class="col-md-2">
								<button type="button" class="btn btn-primary"
									data-dismiss="modal">ยกเลิก</button>
							</div>
							<div class="col-md-4"></div>
						</div>
						<div class="text-center" style="padding: 10px 0"></div>
					</div>
				</div>
			</div>	
</body>
</html>