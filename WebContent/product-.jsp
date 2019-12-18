
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Product</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet"
	href="include/bower_components/font-awesome/css/font-awesome.min.css">
<link rel="stylesheet"
	href="include/bower_components/Ionicons/css/ionicons.min.css">
<link rel="stylesheet" href="include/dist/css/AdminLTE.min.css">
<link rel="stylesheet" href="include/dist/css/skins/_all-skins.min.css">
<script src="include/bower_components/jquery/dist/jquery.min.js"></script>
	<link rel="stylesheet" href="css/bootstrap.min.css">
	
<link rel="stylesheet"
	href="include/datetimepicker/build/jquery.datetimepicker.min.css">
<link rel="stylesheet" href="css/uiAll.css">
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
			<div class="content" id="product_main">
				<div class="panel panel-primary">
					<div align="center">
						<p class="p-3 mb-2 bg-primary text-white">
							<B>สร้างผลิตภัณฑ์</B>
						</p>
					</div>
					<div class="box-body">
						<table class="table borderless">
							<tbody>
								<tr>
									<td><input type="radio" id="rd_CreateProduct"
										name="basePlan"> สร้างผลิตภัณฑ์ใหม่(Create New
										Product)</td>
								</tr>
								<tr>
									<td><input type="radio" id="rd_CloneProduct"
										name="basePlan"> สร้างผลิตภัณฑ์ใหม่ จากผลิตภัณฑ์เดิม
										(Clone Existing Product)</td>
								</tr>
							</tbody>
						</table>
						<!-- รายละเอียด ผลิตภัณฑ์ -->
				<div class="content" id="createProduct_checkbox"
					style="display: none;">
					<div class="">
						<div>
							<!-- <hr> -->
							<p class="p-3 mb-2 bg-primary text-white">
								<B>รายละเอียด ผลิตภัณฑ์</B>
							</p>
							<!-- <hr> -->
						</div>
						<div class="box-body">
							<table class="table borderless">
								<tbody>
									<tr>
										<td><input type="checkbox" id="ch_Menu_1" checked="checked">
											ข้อมูลทั่วไป Basic Information<br> <input
											type="checkbox" id="ch_Menu_2" checked="checked"> Package<br>
											<input type="checkbox" id="ch_Menu_3" checked="checked">
											ขออนุมัติ<br></td>
									</tr>
								</tbody>
							</table>
							<!-- pagination -->
							<div class="col-md-3 col-md-offset-9 text-right"
								style="float: right;">
								<div class="modal-footer" style="border: 0">
									<button type="button" class="btn btn-primary"
										data-dismiss="modal" id="bt_createProduct"
										onclick="createProduct();">สร้างผลิตภัณฑ์</button>
								</div>
							</div>
						</div>
					</div>
				</div>
					</div>
				</div>
			</div>
			<!--***Menu***-->
			<div class="content" id="createProduct_Menu" style="display: none;">
				<%@include file="createProduct_Menu.jsp"%>
			</div>
			<!--**********************-->
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

	<!-- New JS -->
	<script src="js/product.js" charset="utf-8"></script>
</body>
</html>