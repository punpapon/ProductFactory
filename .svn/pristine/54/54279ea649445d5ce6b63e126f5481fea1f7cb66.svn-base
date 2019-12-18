<%@page import="myldap.TLdap"%>
<%-- <%@page import="utility.service.*"%> --%>
<%@page import="utility.rteutility.PublicRte"%>
<%@page import="utility.personnel.tlhrms.EmployeeInfo" %>

<%@ page language="java" contentType="text/html; charset=UTF-8" session="true" pageEncoding="UTF-8"%>

<%
	session.setAttribute("userID", "");
	session.setAttribute("empName", "");
	session.setAttribute("department", "");
	session.setAttribute("departmentID", "");
	session.setAttribute("position", "");
	session.setAttribute("positionID", "");
    session.setAttribute("loginok", "not");
    
    //out.print("name"+session.getAttribute("empName"));
   
%>

<!DOCTYPE html>
<html lang="en">
<head>
  <title>Login</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="include/bower_components/jquery/dist/jquery.min.js"></script>
  	<script src="include/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
  	<script src="js/login.js"></script>
    
   
    <link rel="stylesheet" href="include/bower_components/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="include/bower_components/Ionicons/css/ionicons.min.css">
    <link rel="stylesheet" href="include/dist/css/AdminLTE.min.css">
    <link rel="stylesheet" href="include/dist/css/skins/_all-skins.min.css">
  	
  	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/uiAll.css">
  	<link rel="stylesheet" href="css/Login.min.css">

</head>
<body>     
<div class="text-center" style="padding:200px 0">	
	<div class="">
		<div class="col-md-6 col-md-offset-3">
			<div class="panel panel-primary login_box">
		      <div class="panel-heading text-left">
		      		<p class="margin0 font-bold">UI_001: LOGIN</p>
		      </div>
		      <div class="panel-body">
		      		<div class="login-form-1">
							<div class="login-form-main-message"></div>
							<div class="main-login-form">
								<form name="form_login" id="form_login" method="post">
									<div class="login-group">
										<div class="form-group col-sm-12">
											<div class="col-sm-4 text-left">
												<label for="lg_username" class="">ชื่อบัญชีผู้ใช้</label>
											</div>
											<div class="col-sm-8 text-rigth">
												<input type="text" class="form-control" id="lg_username" name="lg_username" placeholder="username">
											</div>
											
										</div>
										<div class="form-group col-sm-12">
											<div class="col-sm-4 text-left">
												<label for="lg_password" class="">รหัสผ่าน</label>
											</div>
											<div class="col-sm-8 text-right">
												<input type="password" class="form-control" id="lg_password" name="lg_password" placeholder="password">									
											</div>
											
										</div>
										<div class="text-center">
											<button type="submit" id="btn_submit_login" class="btn btn-primary" onclick="login();">ตกลง</button>
											<button type="" class="btn btn-primary text-right">ยกเลิก</button>
								
										</div>
									</div>
								</form>
							</div>							
					</div>
		      </div>
		    </div>
		</div>
	</div>
	
	<%@include file="modal_warning.jsp"%>
	
	<!-- end:Main Form -->
</div>
</body>
</html>
