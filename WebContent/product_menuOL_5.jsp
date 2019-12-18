<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>ข้อกำหนดการรับประกัน</title>

</head>
<body>
	<!-- <form class="form-horizontal"> -->
		<div class="row box-body" id="warranty_term_OL">
			<div class="panel panel-primary">
				<div class="panel-heading text-left">
					<p class="margin0 text-center">
						<b>ข้อกำหนดการรับประกัน</b>
					</p>
				</div>
				<div style="width:95%; margin:30px auto;"  id="warranty_term_tab_level1_OL">
					<ul class="nav nav-tabs">
					    <li class="active"><a data-toggle="tab" href="#menu_term1_OL">ข้อกำหนด</a></li>
					    <li><a data-toggle="tab" href="#menu_term2_OL">Policy Wording</a></li>					    
					</ul>
					
					<div class="tab-content">
					    
					    <div id="menu_term1_OL" class="tab-pane fade in active">
					     <%@include file="product_menuOL_5_term.jsp" %>					      		      
					    </div>
					    
					    <div id="menu_term2_OL" class="tab-pane fade">
					      <%@include file="product_menuOL_5_policy.jsp" %>
					    </div>	
					    				    
					  </div>
					</div>
				</div>						
			</div>			
	<!-- </form> -->
	
	<!-- ดูประวัติ -->
	<div class="modal fade" id="modal_historySale_OL" role="dialog">
		<div class="modal-dialog modal-lg">

			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">ประวัติการเปลี่ยนแปลงวันที่กำหนดการขาย</h4>
				</div>
				
				<div class="modal-body">				
				<input type="hidden" name="History_Policy_OL" id="History_Policy_OL" value=""/>
												
				<!-- history -->
				<div class="table_width1">			
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row">
						<div class="datatbl_Historypolicy_OL">
						<table class="table table-bordered" id="tbl_HistoryPolicy_OL">
							<thead>
								<tr class="bg-primary">
									<th class="text-center border-right-none" width="8%">ครั้งที่</th>
									<th class="text-center border-right-none" width="14%">วันที่<br>เปลี่ยนแปลง</th>
									<th class="text-center border-right-none" width="13%">ผู้เปลี่ยนแปลง</th>
									<th class="text-center border-right-none" width="25%">วันที่กำหนดการขาย</th>																				
								</tr>
							</thead>
							<tbody>
								
																				
							</tbody>
						</table>
					</div>						
					</div>
					<div class="text-center" style="padding: 10px 0"></div>					
				</div>
				
				<!-- button -->
					<div class="row" align="center">																		
							<button type="button" class="btn btn-primary" data-dismiss="modal">&nbsp;&nbsp;&nbsp;&nbsp;ปิด&nbsp;&nbsp;&nbsp;&nbsp;</button>												
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<!-- ปุ่มยกเลิก -->
	<div id="cancelBoxOL_WarrantyTerm" class="modal fade bd-example-modal-sm"
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