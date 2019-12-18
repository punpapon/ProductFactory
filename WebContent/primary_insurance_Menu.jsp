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
				<li  id="menu_ui-005_1" style="display: none;"><a data-toggle="tab" id= "menu_ui-005_1">ข้อมูลทั่วไป Basic Information</a></li>
				<li  id="menu_ui-005_2" style="display: none;"><a data-toggle="tab" id="menu_ui-005_2">การใช้สิทธิ์ตามกรมธรรม์</a></li>
				<li  id="menu_ui-005_3" style="display: none;"><a data-toggle="tab" id="menu_ui-005_3">การคำนวณเบี้ยประกัน</a></li>
				<li  id="menu_ui-005_4" style="display: none;"><a data-toggle="tab" id="menu_ui-005_4">ตารางมูลค่ากรมธรรม์</a></li>
				<li  id="menu_ui-005_5" style="display: none;"><a data-toggle="tab" id="menu_ui-005_5">ผลประโยชน์/ความคุ้มครอง</a></li>
				<li  ><a data-toggle="tab" id="menu_ui-005_6">ขออนุมัติ</a></li>
			</ul>
		</div>
		<div  id= "ui005_1_1-1" style="display: none;">
			<%@include file="primary_insurance_Menu_1.jsp" %>
		</div>
		<div id= "ui005_1_1-2" style="display: none;">
			<%@include file="primary_insurance_Menu_2.jsp" %>
		</div>
		<div id= "ui005_1_1-3" style="display: none;">
			<%@include file="primary_insurance_Menu_3.jsp" %>
		</div>
		<div  id= "ui005_1_1-4" style="display: none;">
			<%@include file="primary_insurance_Menu_4.jsp" %>
		</div>
		<div  id= "ui005_1_1-5" style="display: none;">
			<%@include file="primary_insurance_Menu_5.jsp" %>
		</div>
		<div  id= "ui005_1_1-6" style="display: none;">
			<%@include file="primary_insurance_Menu_6.jsp" %>
		</div>
		
		
		
		<%@include file="modal_warning.jsp"%>
		<%@include file="modal_success.jsp"%>
</body>
</html>