<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html >
<html lang="en">
<head>
<title>Setting CheckList</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet"
	href="include/bower_components/font-awesome/css/font-awesome.min.css">
<link rel="stylesheet"
	href="include/bower_components/Ionicons/css/ionicons.min.css">
<link rel="stylesheet" href="include/dist/css/AdminLTE.min.css">
<link rel="stylesheet" href="include/dist/css/skins/_all-skins.min.css">

<script src="include/bower_components/jquery/dist/jquery.min.js"></script>

<link rel="stylesheet" href="css/bootstrap.min.css">
<link rel="stylesheet" href="css/uiAll.css">
<link rel="stylesheet" href="include/datetimepicker/build/jquery.datetimepicker.min.css">
<script src="js/menubar.js"></script>

</head>
<body class="hold-transition skin-blue sidebar-mini" onload="activeMenu();">
	<div class="">
		<!-- Main Header -->
		<header class="main-header">
			<%@include file="main_header.jsp"%>
		</header>

		<!-- Load Side Menu -->
		<aside class="main-sidebar">
			<section class="sidebar">
				<%@include file="sideBarMenu.jsp"%></section>
		</aside>

		<div class="content-wrapper">
			<div class="content">
				<div class="panel panel-primary">
					<div class="panel-heading " align="center">
						<p class="margin0">
							<B>การตั้งค่ารายการตรวจ</B>
						</p>
					</div>

					<div>
						<div class="panel-body" id="tab_CS">
							<ul class="nav nav-tabs" id="tab_setting_checkList">
								<li class="active" id="menu_CS_1"><a data-key=""
									id="menu_CS_1" href="#1" data-toggle="tab">รายการตรวจ</a></li>
								<li id="menu_CS_2"><a data-key="" id="menu_CS_1" href="#2"
									data-toggle="tab">กลุ่มรายการตรวจเลือด</a></li>
							</ul>
						</div>
					</div>

					<!-- ------------------------------------------->
					<div id="sc_001_1_1-1" style="display: none;">
						<%@include file="setting_checkList_1.jsp"%>
					</div>
					<div id="sc_001_1_1-2" style="display: none;">
						<%@include file="setting_checkList_2.jsp"%>
					</div>
					<%@include file="modal_success.jsp"%>
					<!-- warning -->
					<div id="modal_warning" class="modal fade " >
			          <div class="modal-dialog">
			              <div class="modal-body" >
			                <div class="box box-danger box-solid  " >
			                  <div class="box-header">
			                    เเจ้งเตือน
			                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
			                        <span aria-hidden="true">&times;</span></button>
			                  </div>
			                  <div id="txt_alert_error" class="box-body">
			                    ไม่พบข้อมูล
			            		</div>
			                </div>
			              </div>
			          </div>
			        </div>
					
				</div>
			</div>
		</div>


	</div>
	<script
		src="include/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
	<script
		src="include/bower_components/jquery-slimscroll/jquery.slimscroll.min.js"></script>
	<script src="include/bower_components/fastclick/lib/fastclick.js"></script>
	<script src="include/dist/js/adminlte.min.js"></script>
	<script src="include/dist/js/demo.js"></script>
	<script src="include/plugins/datatables/jquery.dataTables.min.js"></script>
	<script
		src="include/datetimepicker/build/jquery.datetimepicker.full.js"></script>

	<!--    Data Table  -->
	<link rel="stylesheet"
		href="include/bower_components/datatables.net-bs/css/dataTables.bootstrap.min.css">
	<script src="include/plugins/datatables/jquery.dataTables.min.js"></script>
	<script src="include/plugins/datatables/dataTables.bootstrap.js"></script>
	<!-- New JS -->
	<script src="js/autoNumeric.js"></script>
	<script src="js/userPermissionUW.js"></script>
	<script src="js/setting_checkList.js"  charset="utf-8"></script>


</body>
</html>