<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Menu</title>
</head>
<body>
		<div class="panel-body">
			<ul class="nav nav-tabs">
			<!-- --------------- OL ----------------------->
			<li  id="menu_OL_1" style="display: none;"><a data-toggle="tab" id= "menu_OL_1">ข้อมูลทั่วไป Basic Information</a></li>
			<li  id="menu_OL_7" style="display: none;" class="disabledAll"><a data-toggle="tab" id="menu_OL_7">Policy Wording</a></li>
			<li  id="menu_OL_8" style="display: none;" class="disabledAll"><a data-toggle="tab" id="menu_OL_8">ผู้ได้รับความคุ้มครอง</a></li>
			<!-- <li  id="menu_CL_2" style="display: none;"><a data-toggle="tab" id="menu_CL_2">การใช้สิทธิ์ตามกรมธรรม์</a></li> -->
			<li  id="menu_OL_3" style="display: none;" class="disabledAll"><a data-toggle="tab" id="menu_OL_3">การคำนวณเบี้ยประกัน</a></li>			
			<li  id="menu_OL_4" style="display: none;" class="disabledAll"><a data-toggle="tab" id="menu_OL_4">ตารางมูลค่ากรมธรรม์</a></li>
			<li  id="menu_OL_5" style="display: none;" class="disabledAll"><a data-toggle="tab" id="menu_OL_5">ผลประโยชน์/ความคุ้มครอง</a></li>
			<li  id="menu_OL_9" style="display: none;" class="disabledAll"><a data-toggle="tab" id="menu_OL_9">บันทึกสลักหลัง</a></li>
			<li  id="menu_OL_6" style="display: none;" class="disabledAll"><a data-toggle="tab" id="menu_OL_6">ขออนุมัติ</a></li>
			<!-- --------------- CL ----------------------->
			<li  id="menu_CL_1" style="display: none;"><a data-toggle="tab" id= "menu_CL_1">ข้อมูลทั่วไป Basic Information</a></li>
			<li  id="menu_CL_7" style="display: none;" class="disabledAll"><a data-toggle="tab" id="menu_CL_7">Policy Wording</a></li>
			<li  id="menu_CL_8" style="display: none;" class="disabledAll"><a data-toggle="tab" id="menu_CL_8">ผู้ได้รับความคุ้มครอง</a></li>
			<!-- <li  id="menu_CL_2" style="display: none;"><a data-toggle="tab" id="menu_CL_2">การใช้สิทธิ์ตามกรมธรรม์</a></li> -->
			<li  id="menu_CL_3" style="display: none;" class="disabledAll"><a data-toggle="tab" id="menu_CL_3">การคำนวณเบี้ยประกัน</a></li>			
			<li  id="menu_CL_4" style="display: none;" class="disabledAll"><a data-toggle="tab" id="menu_CL_4">ตารางมูลค่ากรมธรรม์</a></li>
			<li  id="menu_CL_5" style="display: none;" class="disabledAll"><a data-toggle="tab" id="menu_CL_5">ผลประโยชน์/ความคุ้มครอง</a></li>
			<li  id="menu_CL_9" style="display: none;" class="disabledAll"><a data-toggle="tab" id="menu_CL_9">บันทึกสลักหลัง</a></li>
			<li  id="menu_CL_6" style="display: none;" class="disabledAll"><a data-toggle="tab" id="menu_CL_6">ขออนุมัติ</a></li>
			<!-- ------------------------------------------->
			</ul>
		</div>
		<!-- --------------- OL ----------------------->
		<div  id= "ol_006_1_1-1" style="display: none;">
			<jsp:include page="rider_plan_menuOL_1.jsp" />
		</div>		
		<div  id= "ol_006_1_1-3" style="display: none;">
			<jsp:include page="rider_plan_menuOL_3.jsp" />
		</div>		
		<div  id= "ol_006_1_1-4" style="display: none;">
			<jsp:include page="rider_plan_menuOL_4.jsp" />
		</div>
		<div  id= "ol_006_1_1-5" style="display: none;">
			<jsp:include page="rider_plan_menuOL_5.jsp" />
		</div>
		<div  id= "ol_006_1_1-6" style="display: none;">
			<jsp:include page="rider_plan_menuOL_6.jsp" />
		</div>
		<div  id= "ol_006_1_1-7" style="display: none;">
			<jsp:include page="rider_plan_menuOL_7.jsp" />
		</div>
		<div  id= "ol_006_1_1-8" style="display: none;">
			<jsp:include page="rider_plan_menuOL_8.jsp" />
		</div>
		<div  id= "ol_006_1_1-9" style="display: none;">
			<jsp:include page="rider_plan_menuOL_9.jsp" />
		</div>
		<!-- --------------- CL ----------------------->
		<div  id= "cl_006_1_1-1" style="display: none;">
			<jsp:include page="rider_plan_menuCL_1.jsp" />
		</div>		
		<div  id= "cl_006_1_1-3" style="display: none;">
			<jsp:include page="rider_plan_menuCL_3.jsp" />
		</div>		
		<div  id= "cl_006_1_1-4" style="display: none;">
			<jsp:include page="rider_plan_menuCL_4.jsp" />
		</div>
		<div  id= "cl_006_1_1-5" style="display: none;">
			<jsp:include page="rider_plan_menuCL_5.jsp" />
		</div>
		<div  id= "cl_006_1_1-6" style="display: none;">
			<jsp:include page="rider_plan_menuCL_6.jsp" />
		</div>
		<div  id= "cl_006_1_1-7" style="display: none;">
			<jsp:include page="rider_plan_menuCL_7.jsp" />
		</div>
		<div  id= "cl_006_1_1-8" style="display: none;">
			<jsp:include page="rider_plan_menuCL_8.jsp" />
		</div>
		<div  id= "cl_006_1_1-9" style="display: none;">
			<jsp:include page="rider_plan_menuCL_9.jsp" />
		</div>
		<!-- ------------------------------------------->
		<%@include file="modal_warning.jsp"%>
		<%@include file="modal_success.jsp"%>
		<%@include file="modal_warning_delete.jsp"%>
		
		<div id="modal_Checkkeyup" class="modal fade bd-example-modal-sm"
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
							<label>คุณยังไม่ได้กดบันทึก!! <br>แน่ใจหรือไม่ว่าจะเปลี่ยนTab<br>หากต้องเปลี่ยนTab กรุณากด ยืนยัน 
							</label>
						</div>
						<div class="text-center" style="padding: 10px 0"></div>
						<div class="row">
							<div class="col-md-3"></div>
							<div class="col-md-2">
								<button type="button" class="btn btn-primary"
									onclick="bt_changeTab()">ยืนยัน</button>
							</div>
							<div class="col-md-1"></div>
							<div class="col-md-2">
								<button type="button" class="btn btn-primary"
									data-dismiss="modal" id="checkkeyup_Cancel">ยกเลิก</button>
							</div>
							<div class="col-md-4"></div>
						</div>
						<div class="text-center" style="padding: 10px 0"></div>
					</div>
				</div>
			</div>
	<input type="hidden" id="cov_status">
	<input type="hidden" id="cov_status_RP">
</body>
</html>