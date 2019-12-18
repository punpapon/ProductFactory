<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<title>DataValue</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<link rel="stylesheet"
	href="include/bower_components/font-awesome/css/font-awesome.min.css">
<link rel="stylesheet"
	href="include/bower_components/Ionicons/css/ionicons.min.css">
<link rel="stylesheet" href="include/dist/css/AdminLTE.min.css">
<link rel="stylesheet" href="include/dist/css/skins/_all-skins.min.css">
<link rel="stylesheet" href="css/bootstrap.min.css">
</head>
<body class="hold-transition skin-blue sidebar-mini"
	onload="activeMenu();">
	<div class="wrapper">

		<!-- Main Header -->
		<header class="main-header">
			<%@include file="main_header.jsp"%>
		</header>

		<!-- Load Side Menu -->
		<aside class="main-sidebar">
			<section class="sidebar">
				<%@include file="sideBarMenu.jsp"%>
			</section>
		</aside>

		<div class="content-wrapper">
			<div class="content" id="ui-003">
				<div class="box-body">
					<table id="table_ValueData"
						class="table table-striped table-bordered text-center" style="width: 100%">
						<thead>
							<tr>
								<th scope="col">ID</th>
								<th scope="col">ประเภทค่าของข้อมูล</th>
							</tr>
						</thead>
						<tbody>
							
						</tbody>
					</table>
					
					<div class="text-left">
						<button type="button" class="btn btn-primary"
											style="margin-left: 0px;" data-toggle="modal" data-target="#addLookupValue" id="btValue_Data">เพิ่มรายการ</button>
					</div>
				</div>
			</div>
			<!-- ****************************************************** -->
			 <!-- <div class="content" id="ui-003_1_1" style="display: none;">
				<div class="box-body">
					<div id="divValue_detail">
						<table id="tb_valueDetail"
							class="table table-striped table-bordered">
							<tr>
								<td>ประเภทค่าของข้อมูล</td>
								<td><input type="text" id="datavalue_type"></td>
							</tr>
							<tr>
								<td>คำอธิบาย</td>
								<td><input type="text" id="explanation_value"></td>
							</tr>
						</table>
							<div id="divSearch_table">
								<table class="table table-hover">
									<thead class="thead-light">
										<tr>
											<th>รหัส</th>
											<th>คำอฺธิบาย</th>

										</tr>
									</thead>
									<tbody>
										<tr>
											<td>0</td>
											<td>ราย 1 เดือน</td>
										</tr>
										<tr>
											<td>1</td>
											<td>ราย 12 เดือน</td>
										</tr>
										<tr>
											<td>2</td>
											<td>ราย 6 เดือน</td>
										</tr>
										<tr>
											<td>4</td>
											<td>ราย 3 เดือน</td>
										</tr>
										<tr>
											<td>9</td>
											<td>ชำระครั้งเดียว</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div class="col-md-3 col-md-offset-9 text-right">
								<ul class="pagination">
									<li class="page-item"><a class="page-link" href="#"
										aria-label="Previous"> <span aria-hidden="true">&laquo;</span>
											<span class="sr-only">Previous</span>
									</a></li>
									<li class="page-item"><a class="page-link" href="#">1</a></li>
									<li class="page-item"><a class="page-link" href="#">2</a></li>
									<li class="page-item"><a class="page-link" href="#">3</a></li>
									<li class="page-item"><a class="page-link" href="#"
										aria-label="Next"> <span aria-hidden="true">&raquo;</span>
											<span class="sr-only">Next</span>
									</a></li>
								</ul>
							</div>
							<div class="text-left">
								<button type="button" class="btn btn-primary"
									id="btValue_Data_003_1_1">เพิ่มรายการ</button>
								<button type="button" class="btn btn-primary"
									id="btValue_Cancel">ยกเลิก</button>
							</div>
					</div>
					<div class="text-life" id="ui-003_1_BT" style="display: block;">
						<button type="button" class="btn btn-primary"
							id="btDetail_Value_Data">ค่าของข้อมูล</button>
						<button type="button" class="btn btn-primary" id="btDetail_Delete"
							data-toggle="modal" data-target="#delete_type"
							onclick="detail_Delete();">ลบ</button>
						<button type="button" class="btn btn-primary" id="btDetail_Save">บันทึก</button>
						<button type="button" class="btn btn-primary" id="btDetail_Cancel">ยกเลิก</button>
					</div>
					<div id="delete_type" class="modal fade" role="dialog">
						<div class="modal-dialog">
							<div class="panel panel-primary">
								<div class="panel-heading text-left">
									<p class="margin0">ยืนยันการลบรายการ</p>
								</div>
								<div class="modal-body" align="center">
									<p>ต้องการลบประเภทค่าของข้อมูล xxxx ใช่หรือไม่?</p>
									<button type="button" class="btn btn-primary">ยืนยัน</button>
									<button type="button" class="btn btn-primary">ยกเลิก</button>
								</div>
							</div>
						</div>
					</div>
					<div id="delete_value" class="modal fade" role="dialog">
						<div class="modal-dialog">
							Modal content
							<div class="panel panel-primary">
								<div class="panel-heading text-left">
									<p class="margin0">ยืนยันการลบรายการ</p>
								</div>
								<div class="modal-body" align="center">
									<p>ต้องการลบค่าของข้อมูล xxxx ใช่หรือไม่?</p>
									<button type="button" class="btn btn-primary">ยืนยัน</button>
									<button type="button" class="btn btn-primary">ยกเลิก</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>  -->
			<!--  ************* UI-003.1.1.1-->
			<!-- <div class="content" id="ui-003_1_1_1" style="display: none;">
				<div class="box-body">
					<div id="divValue_detail_ui-003_1_1_1">
						<table id="tb_valueDetail_ui-003_1_1_1"
							class="table table-striped table-bordered">
							<tr>
								<td>ประเภทค่าของข้อมูล</td>
								<td><input type="text" id="datavalue_type_003_1_1_1"></td>
							</tr>
							<tr>
								<td>รหัส</td>
								<td><input type="text" id="pass__003_1_1_1"></td>
							</tr>
							<tr>
								<td>คำอธิบาย</td>
								<td><input type="text" id="explanation_003_1_1_1"></td>
							</tr>
						</table>
					</div>
					*** 
					<div class="text-life" id="ui-003_1_1_1_BT" style="display: block;">
						<button type="button" class="btn btn-primary"
							id="btDelete_003_1_1_1" onclick="delete_003_1_1_1();">ลบ</button>
						<button type="button" class="btn btn-primary" id="btDetail_Save">บันทึก</button>
						<button type="button" class="btn btn-primary"
							id="btDetail_Cancel_003_1_1_1">ยกเลิก</button>
					</div>
				</div>
			</div> -->
					<!-- MODAL -->
			<div class="modal fade" id="addLookupValue" role="dialog">
				<div class="modal-dialog modal-lg">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal">&times;</button>
							<h4 class="modal-title">UI-003.1 : Lookup Value Detail</h4>
						</div>
						<div class="modal-body">
							<div class="row" style="padding: 10px 0"></div>
									<div class="row">
										<div class="col-md-2"></div>
										<div class="col-md-3 text-left">
											<label>ประเภทค่าของข้อมูล</label>
										</div>
										<div class="col-md-5 text-left">
											<input type="text" class="form-control" id="type_data" >
										</div>
									</div>
									<div class="row">
										<div class="col-md-2"></div>
										<div class="col-md-3 text-left padding1">
											<label>คำอธิบาย</label>
										</div>
										<div class="col-md-5 text-left padding1">
											<input type="text" class="form-control" id="explanation_lookup">
										</div>
									</div>
									
						</div>
							<div class="text-life modal-footer" id="ui-003_1_BT" >
							<button type="button" class="btn btn-primary"
								id="btDetail_Value_Data">ค่าของข้อมูล</button>
							<button type="button" class="btn btn-primary" id="btDetail_Delete"
								data-toggle="modal" data-target="#delete_type"
								onclick="detail_Delete();">ลบ</button>
							<button type="button" class="btn btn-primary" data-dismiss="modal" id="btDetail_Save">บันทึก</button>
							<button type="button" class="btn btn-primary" id="btDetail_Cancel">ยกเลิก</button>
					</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<script src="include/bower_components/jquery/dist/jquery.min.js"></script>
	<script
		src="include/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
	<script
		src="include/bower_components/jquery-slimscroll/jquery.slimscroll.min.js"></script>
	<script src="include/bower_components/fastclick/lib/fastclick.js"></script>
	<script src="include/dist/js/adminlte.min.js"></script>
	<script src="include/dist/js/demo.js"></script>
	<script src="include/plugins/datatables/jquery.dataTables.min.js"></script>
	<!--    Data Talbe  -->
	<link rel="stylesheet" href="include/bower_components/datatables.net-bs/css/dataTables.bootstrap.min.css">
	<script src="include/plugins/datatables/jquery.dataTables.min.js"></script>
	<script src="include/plugins/datatables/dataTables.bootstrap.js"></script>
	<!-- New JS -->
	<script src="js/value_data.js" charset="utf-8"></script>
</body>
</html>
