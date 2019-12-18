<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>Total Capital</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="include/bower_components/font-awesome/css/font-awesome.min.css">
	<link rel="stylesheet" href="include/bower_components/Ionicons/css/ionicons.min.css">
	<link rel="stylesheet" href="include/dist/css/AdminLTE.min.css">
	<link rel="stylesheet" href="include/dist/css/skins/_all-skins.min.css">
	
	<link rel="stylesheet" href="include/plugins/datatables/extensions/FixedColumns/css/dataTables.fixedColumns.css">
	<link rel="stylesheet" href="include/plugins/datatables/extensions/FixedColumns/css/dataTables.fixedColumns.min.css">
	
	<script src="include/bower_components/jquery/dist/jquery.min.js"></script>
	
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/uiAll.css">
	<link rel="stylesheet" href="include/datetimepicker/build/jquery.datetimepicker.min.css">
	<script src="js/menubar.js"></script>
	
</head>
<body class="hold-transition skin-blue sidebar-mini" onload="activeMenu();">
	<div class="wrapper">
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
							<B>การรวมทุน</B>
						</p>
					</div>

					<div>
						<div class="panel-body" id="tab_CS">
							<ul class="nav nav-tabs" id="tab_setting_checkList">
								<li class="active" id="menu_TC_1">
									<a data-key="" id="menu_TC_1"  
									data-toggle="tab">เงื่อนไขการรวมทุน</a></li>
<!-- 								<li id="menu_TC_2"><a data-key=""  -->
<!-- 									id="menu_TC_1" href="#2" data-toggle="tab">อำนาจรับประกัน</a></li> -->
								<li id="menu_TC_3">
									<a data-key="" id="menu_TC_3"  
									data-toggle="tab">สถานะกรมธรรม์</a></li>
							</ul>
						</div>
					</div>

					<!-- ------------------------------------------->
					<div id="totalCapital_tab1" style="display: none;">
						<%@include file="total_capital_1.jsp"%>
					</div>
					<div id="totalCapital_tab2" style="display: none;">
						<%@include file="total_capital_2.jsp"%>
					</div>
					<div id="totalCapital_tab3" style="display: none;">
						<%@include file="total_capital_3.jsp"%>
					</div>
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
			        
				</div>
			</div>
		</div>
	</div>


	<script src="include/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
	<script src="include/bower_components/jquery-slimscroll/jquery.slimscroll.min.js"></script>
	<script src="include/bower_components/fastclick/lib/fastclick.js"></script>
	<script src="include/dist/js/adminlte.min.js"></script>
	<script src="include/dist/js/demo.js"></script>
	<script src="include/plugins/datatables/jquery.dataTables.min.js"></script>
	<script src="include/datetimepicker/build/jquery.datetimepicker.full.js"></script>

	<!--    Data Table  -->
	<link rel="stylesheet" href="include/bower_components/datatables.net-bs/css/dataTables.bootstrap.min.css">
	<script src="include/plugins/datatables/jquery.dataTables.min.js"></script>
	<script src="include/plugins/datatables/dataTables.bootstrap.js"></script>
	
	<!-- <link rel="stylesheet" type="text/css" href="include/DataTablesN/datatables.min.css"/>
	<script type="text/javascript" src="include/DataTablesN/datatables.min.js"></script> -->
	
	<!-- New JS -->
	<script src="js/autoNumeric.js"></script>
	<script src="js/userPermissionUW.js"></script>
	<script src="js/total_capital.js"  charset="utf-8"></script>
</body>
</html>