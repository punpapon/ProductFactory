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
				<div class="panel panel-primary">
					<div class="box-header" align="center">
						<p class="margin0">
							<B>การค้นหาและดูรายละเอียดค่าของข้อมูล</B>
						</p>
					</div>
					<div class="box-body">
						<div class="row">
						<div class="col-md-12">
						<table id="table_ValueData" class="table table-striped table-bordered">
							<thead>
								<tr>
									<th class="text-center col-md-2">ID</th>
									<th class="text-center col-md-8">ประเภทค่าของข้อมูล</th>
								</tr>
							</thead>
							<tbody>

							</tbody>
						</table>

						<div class="text-right">
							<button type="button" class="btn btn-primary"
								style="margin-left: 0px;" data-toggle="modal"
								data-target="#addLookupValue_add" id="btValue_Data">เพิ่มรายการ</button>
						</div>
						</div>
						</div>
					</div>
				</div>
			</div>
			<!-- ****************************************************** -->
			<div class="content" id="ui-003_1_1" style="display: none;">
				<div class="panel panel-primary">
					<div class="box-header" align="center">
						<p class="margin0">
							<B>รายละเอียดของประเภทค่าของข้อมูล</B>
						</p>
					</div>
					<div class="box-body">
						<div id="divValue_detail">
							<table id="tb_valueDetail"
								class="table table-striped table-bordered">
								<tr>
									<td>ประเภทค่าของข้อมูล</td>
									<td><input type="text" class="form-control"
										id="datavalue_type" readonly="readonly"></td>
								</tr>
								<tr>
									<td>คำอธิบาย</td>
									<td><input type="text" class="form-control"
										id="explanation_value" readonly="readonly"></td>
								</tr>
							</table>
							<table class="table table-striped table-bordered" id="tb_value_Detail">
								<thead>
									<tr>
										<th style="width: 100px;" class="text-center">รหัส</th>
										<th style="width: 500px;" class="text-center">คำอธิบาย</th>

									</tr>
								</thead>
								<tbody>

								</tbody>
							</table>
							<div class="text-right">
								<button type="button" class="btn btn-primary"
									id="btValue_Data_003_1_1_add" data-toggle="modal"
									data-target="#addvalue_detail_add">เพิ่มรายการ</button>
								<button type="button" class="btn btn-primary"
									id="btValue_Cancel">ยกเลิก</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- MODAL UI-003_1-->
			<div class="modal fade" id="addLookupValue_add" role="dialog">
				<div class="modal-dialog modal-lg">
					<div class="panel panel-primary">
						<div class="panel-heading text-left">
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
									<input type="text" class="form-control" id="type_data_add">
								</div>
							</div>
							<div class="row">
								<div class="col-md-2"></div>
								<div class="col-md-3 text-left padding1">
									<label>คำอธิบาย</label>
								</div>
								<div class="col-md-5 text-left padding1">
									<input type="text" class="form-control"
										id="explanation_lookup_add">
								</div>
							</div>

						</div>
						<div class="text-life modal-footer" id="ui-003_1_BT">
							<button type="button" class="btn btn-primary"
								id="btDetail_Value_Data_add" data-dismiss="modal"
								disabled="disabled">ค่าของข้อมูล</button>
							<button type="button" class="btn btn-primary"
								id="btDetail_Save_add">บันทึก</button>
							<button type="button" class="btn btn-primary"
								id="btDetail_Cancel" data-dismiss="modal">ยกเลิก</button>
						</div>
					</div>
				</div>
			</div>
			<!-- ********************************* -->
			<div class="modal fade" id="addLookupValue_edit" role="dialog">
				<div class="modal-dialog modal-lg">
					<div class="panel panel-primary">
						<div class="panel-heading text-left">
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
									<input type="text" class="form-control" id="type_data_edit">
								</div>
							</div>
							<div class="row">
								<div class="col-md-2"></div>
								<div class="col-md-3 text-left padding1">
									<label>คำอธิบาย</label>
								</div>
								<div class="col-md-5 text-left padding1">
									<input type="text" class="form-control"
										id="explanation_lookup_edit"> <input type="hidden"
										class="form-control" id="rownumber_edit">
								</div>
							</div>

						</div>
						<div class="text-life modal-footer" id="ui-003_1_BT">
							<button type="button" class="btn btn-primary"
								id="btDetail_Value_Data_edit" data-dismiss="modal">ค่าของข้อมูล</button>
							<button type="button" class="btn btn-primary"
								id="btDetail_Delete" data-dismiss="modal"
								onclick="detail_Delete1();">ลบ</button>
							<button type="button" class="btn btn-primary"
								data-dismiss="modal" id="btDetail_Save_edit" onclick="save_Edit1();">บันทึก</button>
							<button type="button" class="btn btn-primary"
								id="btDetail_Cancel" data-dismiss="modal">ยกเลิก</button>
						</div>
					</div>
				</div>
			</div>
			<!-- ----------------------------------------------- -->
			<!--  *************MODAL UI-003.1.1.1 edit-->
			<div class="modal fade" id="addvalue_detail_edit" role="dialog">
				<div class="modal-dialog modal-lg">
					<div class="panel panel-primary">
						<div class="panel-heading text-left">
							<button type="button" class="close" data-dismiss="modal">&times;</button>
							<h4 class="modal-title">UI-003.1.1.1 : Value Detail</h4>
						</div>
						<div class="modal-body">
							<div class="row" style="padding: 10px 0"></div>
							<div class="row">
								<div class="col-md-2"></div>
								<div class="col-md-3 text-left">
									<label>ประเภทค่าของข้อมูล</label>
								</div>
								<div class="col-md-5 text-left">
									<input type="text" class="form-control"
										id="datavalue_type_003_1_1_1_edit" readonly="readonly">
								</div>
							</div>
							<div class="row">
								<div class="col-md-2"></div>
								<div class="col-md-3 text-left padding1">
									<label>รหัส</label>
								</div>
								<div class="col-md-5 text-left padding1">
									<input type="text" class="form-control"
										id="pass__003_1_1_1_edit">
								</div>
							</div>
							<div class="row">
								<div class="col-md-2"></div>
								<div class="col-md-3 text-left padding1">
									<label>คำอธิบาย</label>
								</div>
								<div class="col-md-5 text-left padding1">
									<input type="text" class="form-control"
										id="explanation_003_1_1_1_edit"> <input type="hidden"
										class="form-control" id="rownumber2_edit">
								</div>
							</div>
						</div>
						<div class="text-life modal-footer" id="ui-003_1_1_1_BT"
							style="display: block;">
							<button type="button" class="btn btn-primary"
								id="btDelete_003_1_1_1_edit" data-dismiss="modal"
								onclick="detail_Delete2();">ลบ</button>
							<button type="button" class="btn btn-primary"
								data-dismiss="modal" id="btDetail_Save2" onclick="save_Edit2();">บันทึก</button>
							<button type="button" class="btn btn-primary"
								id="btDetail_Cancel_003_1_1_1_edit" data-dismiss="modal">ยกเลิก</button>
						</div>

					</div>
				</div>
			</div>
			<!--  *************MODAL UI-003.1.1.1 add-->
			<div class="modal fade" id="addvalue_detail_add" role="dialog">
				<div class="modal-dialog modal-lg">
					<div class="panel panel-primary">
						<div class="panel-heading text-left">
							<button type="button" class="close" data-dismiss="modal">&times;</button>
							<h4 class="modal-title">UI-003.1.1.1 : Value Detail</h4>
						</div>
						<div class="modal-body">
							<div class="row" style="padding: 10px 0"></div>
							<div class="row">
								<div class="col-md-2"></div>
								<div class="col-md-3 text-left">
									<label>ประเภทค่าของข้อมูล</label>
								</div>
								<div class="col-md-5 text-left">
									<input type="text" class="form-control"
										id="datavalue_type_003_1_1_1_add" readonly="readonly">
								</div>
							</div>
							<div class="row">
								<div class="col-md-2"></div>
								<div class="col-md-3 text-left padding1">
									<label>รหัส</label>
								</div>
								<div class="col-md-5 text-left padding1">
									<input type="text" class="form-control"
										id="pass__003_1_1_1_add">
								</div>
							</div>
							<div class="row">
								<div class="col-md-2"></div>
								<div class="col-md-3 text-left padding1">
									<label>คำอธิบาย</label>
								</div>
								<div class="col-md-5 text-left padding1">
									<input type="text" class="form-control"
										id="explanation_003_1_1_1_add">
								</div>
							</div>
						</div>
						<div class="text-life modal-footer" id="ui-003_1_1_1_BT"
							style="display: block;">
							<button type="button" class="btn btn-primary"
								data-dismiss="modal" id="btDetail_Save2_add">บันทึก</button>
							<button type="button" class="btn btn-primary"
								id="btDetail_Cancel_003_1_1_1_add" data-dismiss="modal">ยกเลิก</button>
						</div>

					</div>
				</div>
			</div>
			<!-- 	Modal----------delete -->
			<div id="delete_LookupValue" class="modal fade" role="dialog">
				<div class="modal-dialog">
					<div class="panel panel-primary">
						<div class="panel-heading text-left">
							<p class="margin0">ยืนยันการลบรายการ</p>
						</div>
						<div class="modal-body" align="center">
							<p>
								ต้องการลบประเภทค่าของข้อมูล <label id="datatype1"
									style="color: red;"></label> ใช่หรือไม่?
							</p>
							<button type="button" class="btn btn-primary"
								data-dismiss="modal" onclick="detail_Delete1_1();">ยืนยัน</button>
							<button type="button" class="btn btn-primary"
								data-dismiss="modal">ยกเลิก</button>
						</div>
					</div>
				</div>
			</div>
			<div id="delete_ValueDetail" class="modal fade" role="dialog">
				<div class="modal-dialog">
					<div class="panel panel-primary">
						<div class="panel-heading text-left">
							<p class="margin0">ยืนยันการลบรายการ</p>
						</div>
						<div class="modal-body" align="center">
							<p>
								ต้องการลบค่าของข้อมูล <label id="explanation_edit"
									style="color: red;"></label> ใช่หรือไม่?
							</p>
							<button type="button" class="btn btn-primary"
								data-dismiss="modal" onclick="detail_Delete2_2();">ยืนยัน</button>
							<button type="button" class="btn btn-primary"
								data-dismiss="modal">ยกเลิก</button>
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
	<link rel="stylesheet"
		href="include/bower_components/datatables.net-bs/css/dataTables.bootstrap.min.css">
	<script src="include/plugins/datatables/jquery.dataTables.min.js"></script>
	<script src="include/plugins/datatables/dataTables.bootstrap.js"></script>
	<!-- New JS -->
	<script src="js/value_data.js" charset="utf-8"></script>
</body>
</html>
