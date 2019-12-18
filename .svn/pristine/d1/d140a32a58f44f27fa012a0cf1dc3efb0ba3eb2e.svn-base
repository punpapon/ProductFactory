<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<title>Benefit</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<link rel="stylesheet"
	href="include/bower_components/font-awesome/css/font-awesome.min.css">
<link rel="stylesheet"
	href="include/bower_components/Ionicons/css/ionicons.min.css">
<link rel="stylesheet" href="include/dist/css/AdminLTE.min.css">
<link rel="stylesheet" href="include/dist/css/skins/_all-skins.min.css">
<link rel="stylesheet" href="css/bootstrap.min.css">
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
				<%@include file="sideBarMenu.jsp"%></section>
		</aside>

		<div class="content-wrapper">
			<div class="content" id="main004">
				<div class="panel panel-primary">
					<div class="box-header" align="center">
						<p class="margin0">
							<B>การค้นหาและดูรายละเอียดผลประโยชน์ / ความคุ้มครอง</B>
						</p>
					</div>
					<div class="box-body">
						<table class="table table-striped table-bordered text-center"
							id="tb_lookup_Benefit">
							<thead>
								<tr>
									<th class="text-left col-md-2">รหัส</th>
									<th class="text-left col-md-10">หมวดความคุ้มครอง</th>
								</tr>
							</thead>
							<tbody>

							</tbody>
						</table>

						<div class="text-right">
							<button type="button" class="btn btn-primary"
								style="margin-left: 0px;" id="add_LookupBenefitDetail">เพิ่มรายการ</button>
						</div>
					</div>
				</div>
			</div>

			<div id="subMain004Lv2" class="content displayNone">
				<div class="panel panel-primary">
					<div class="row padding2">
						<div class="col-md-2"></div>
						<div class="col-md-2 text-left">
							<label>หมวดความคุ้มครอง</label>
						</div>
						<div class="col-md-6 text-left">
							<input type="text" class="form-control" id="group_Protection">
							<input type="hidden" class="form-control" id="lookup_Pass_hidden">
							<input type="hidden" class="form-control"
								id="lookup_NameTH_hidden">
						</div>
					</div>
					<div class="row">
						<div class="col-md-2"></div>
						<div class="col-md-8">
							<table class="table table-striped table-bordered "
								id="tb_UI-004_1_1">
								<thead>
									<tr>
										<th class="text-center col-md-3 bgColorGray">รหัส</th>
										<th class="text-center col-md-7 bgColorGray">หมวดความคุ้มครอง</th>
									</tr>
								</thead>
								<tbody>

								</tbody>
							</table>
							<div class="text-right">
								<button type="button" class="btn btn-primary"
									id="bt_addBenefit" data-toggle="modal"
									data-target="#addBenefit">เพิ่มรายการ</button>
								<button type="button" class="btn btn-primary"
									id="bt_cancel">ยกเลิก</button>
							</div>
							<div class="row" style="padding: 10px 0"></div>
						</div>
					</div>
				</div>
			</div>
			<!-- </div> -->

		</div>



		<!-- MODAL addLookupBenefit #Edit-->
		<div class="modal fade" id="addLookupBenefit_Edit" role="dialog">
			<div class="modal-dialog modal-lg">
				<div class="panel panel-primary">
					<div class="panel-heading text-left">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h4 class="modal-title">UI-004.1 : Lookup Benefit Detail</h4>
					</div>
					<div class="modal-body">
						<div class="row" style="padding: 10px 0"></div>
						<div class="row">
							<div class="col-md-2"></div>
							<div class="col-md-3 text-left">
								<label>รหัสหมวดความคุ้มครอง</label>
							</div>
							<div class="col-md-2 text-left">
								<input type="text" class="form-control" id="lookup_Pass_Edit">
								<input type="hidden" class="form-control" id="rownumber_edit">
							</div>
						</div>
						<div class="row">
							<div class="col-md-2"></div>
							<div class="col-md-3 text-left padding1">
								<label>ชื่อ (ไทย)</label>
							</div>
							<div class="col-md-5 text-left padding1">
								<input type="text" class="form-control" id="lookup_NameTH_Edit">
							</div>
						</div>
						<div class="row">
							<div class="col-md-2"></div>
							<div class="col-md-3 text-left">
								<label>ชื่อ (อังกฤษ)</label>
							</div>
							<div class="col-md-5 text-left">
								<input type="text" class="form-control" id="lookup_NameEN_Edit">
							</div>
						</div>
						<div class="row" style="padding: 10px 0"></div>
						<div class="row">
							<div class="col-md-5"></div>
							<div class="col-md-5 text-left">
								<input type="checkbox" id="lookup_checkbox_Edit"
									style="vertical-align: top;">&nbsp;หมวดขยายความคุ้มครองยกเว้น
							</div>
						</div>

					</div>
					<div class="row" style="padding: 30px 0">
						<div class="col-md-1"></div>
						<div class="col-md-5 text-left">
							<div class="col-md-6 ">
								<button class="btn btn-primary" data-dismiss="modal"
									onclick="changeDisplayEdit();">รายการความคุ้มครอง</button>
							</div>
							<div class="col-md-6 ">
								<button class="btn btn-primary width100" data-dismiss="modal"
									id="bt_deleteLookupBenefit">ลบ</button>
							</div>

						</div>

						<div class="col-md-5 text-right">
							<div class="col-md-6 ">
								<button class="btn btn-primary width100" data-dismiss="modal"
									onclick="save_Edit1();">บันทึก</button>
							</div>
							<div class="col-md-6 ">
								<button class="btn btn-primary width100" data-dismiss="modal">ยกเลิก</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- *********************************************************** -->
		<!-- MODAL addLookupBenefit #Add-->
		<div class="modal fade" id="addLookupBenefit_Add" role="dialog">
			<div class="modal-dialog modal-lg">
				<div class="panel panel-primary">
					<div class="panel-heading text-left">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h4 class="modal-title">UI-004.1 : Lookup Benefit Detail</h4>
					</div>
					<div class="modal-body">
						<div class="row" style="padding: 10px 0"></div>
						<div class="row">
							<div class="col-md-2"></div>
							<div class="col-md-3 text-left">
								<label>รหัสหมวดความคุ้มครอง</label>
							</div>
							<div class="col-md-2 text-left">
								<input type="text" class="form-control" id="lookup_Pass_Add">
							</div>
						</div>
						<div class="row">
							<div class="col-md-2"></div>
							<div class="col-md-3 text-left padding1">
								<label>ชื่อ (ไทย)</label>
							</div>
							<div class="col-md-5 text-left padding1">
								<input type="text" class="form-control" id="lookup_NameTH_Add">
							</div>
						</div>
						<div class="row">
							<div class="col-md-2"></div>
							<div class="col-md-3 text-left">
								<label>ชื่อ (อังกฤษ)</label>
							</div>
							<div class="col-md-5 text-left">
								<input type="text" class="form-control" id="lookup_NameEN_Add">
							</div>
						</div>
						<div class="row" style="padding: 10px 0"></div>
						<div class="row">
							<div class="col-md-5"></div>
							<div class="col-md-5 text-left">
								<input type="checkbox" id="lookup_checkbox_Add"
									style="vertical-align: top;">&nbsp;หมวดขยายความคุ้มครองยกเว้น
							</div>
						</div>

					</div>
					<div class="row" style="padding: 30px 0">
						<div class="col-md-1"></div>
						<div class="col-md-5 text-left">
							<div class="col-md-6 ">
								<button class="btn btn-primary" data-dismiss="modal">รายการความคุ้มครอง</button>
							</div>

						</div>

						<div class="col-md-5 text-right">
							<div class="col-md-6 ">
								<button class="btn btn-primary width100"
									id="bt_Save_LookupBenefit1">บันทึก</button>
							</div>
							<div class="col-md-6 ">
								<button class="btn btn-primary width100" data-dismiss="modal">ยกเลิก</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- *********************************************************** -->
		<!-- *********************************************************** -->
		<div class="modal fade" id="addIBS004" role="dialog">
			<div class="modal-dialog modal-lg">
				<div class="panel panel-primary">
					<div class="panel-heading text-left">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h4 class="modal-title">เลือก IBS Code ที่เกี่ยวข้อง</h4>
					</div>
					<div class="modal-body">
						<div class="row" style="padding: 10px 0"></div>
						<div class="row">
							<div class="col-md-1"></div>
							<div class="col-md-2">
								<label>หมวด IBS Code</label>
							</div>
							<div class="col-md-6">

								<div class="input-group">

									<select class="form-control">
										<option>หมวดA00000:หมวดความคุ้มครองชีวิตและหรือทุพพลภาพ</option>
									</select>
								</div>
							</div>
						</div>
						<div class="box-body">
							<table class="table table-striped table-bordered text-center"
								style="width: 100%" id="tb_IBSCode">
								<thead>
									<tr>
										<th class="text-left col-md-1">เลือก</th>
										<th class="text-left col-md-3">รหัสความคุ้มครอง</th>
										<th class="text-left col-md-5">ความคุ้มครอง</th>
									</tr>
								</thead>
								<tbody>

								</tbody>
							</table>
						</div>
					</div>
					<div class="modal-footer" style="display: none;"
						id="div_saveAddIBS">
						<button id="bt_saveAddIBS" type="button" class="btn btn-primary"
							data-dismiss="modal" onclick="bt_saveAddIBS();">ตกลง</button>
						<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>

					</div>
					<div class="modal-footer" style="display: none;"
						id="div_saveEditIBS">
						<button id="bt_saveEditIBS" type="button" class="btn btn-primary"
							data-dismiss="modal" onclick="bt_saveEditIBS();">ตกลง</button>
						<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
					</div>
				</div>
			</div>
		</div>
		<!-- ***************************Modal***Edit Benefit Detail***************************** -->
		<div class="modal fade" id="editBenefit" role="dialog">
			<div class="modal-dialog modal-lg">
				<div class="panel panel-primary">
					<div class="panel-heading text-left">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h4 class="modal-title">
							หมวดความคุ้มครอง&nbsp;<label id="text_head_UI-004_1_1_1"></label>
						</h4>
					</div>
					<div class="modal-body">
						<div class="row"></div>
						<div class="row">
							<div class="col-md-1"></div>
							<div class="col-md-3 text-left padding1">
								<label>หมวดความคุ้มครอง</label>
							</div>
							<div class="col-md-7 text-left padding1">
								<input type="text" class="form-control"
									id="text_GroupProtection_edit" readonly="readonly"> <input
									type="hidden" class="form-control" id="text_rownumber2_edit">
							</div>
						</div>
						<div class="row">
							<div class="col-md-1"></div>
							<div class="col-md-3 text-left">
								<label>รหัสความคุ้มครอง</label>
							</div>
							<div class="col-md-7 text-left">
								<input type="text" class="form-control"
									id="text_PassProtection_edit">
							</div>
						</div>
						<div class="row">
							<div class="col-md-1"></div>
							<div class="col-md-3 text-left padding1">
								<label>ชื่อ (ไทย)</label>
							</div>
							<div class="col-md-7 text-left padding1">
								<input type="text" class="form-control" id="text_NameTH_edit"
								onkeydown="isThaichar(this.value,this)"	onchange="isThaichar(this.value,this)">
							</div>
						</div>
						<div class="row">
							<div class="col-md-1"></div>
							<div class="col-md-3 text-left">
								<label>ชื่อ (อังกฤษ)</label>
							</div>
							<div class="col-md-7 text-left">
								<input type="text" class="form-control" id="text_NameEN_edit"
									onkeydown="isEnglishchar(this.value,this)" onchange="isEnglishchar(this.value,this)">
							</div>
						</div>
						<div class="row">
							<div class="col-md-1"></div>
							<div class="col-md-3 text-left padding1">
								<label>IBS Code</label>
							</div>
							<div class="col-md-7 text-left padding1  input-group2">
								<table class="table table-striped table-bordered"
									id="tb_Editibs_Code">
									<thead>
										<tr>
											<th class="text-center col-md-4 bgColorGray">รหัสความคุ้มครอง</th>
											<th class="text-center col-md-10 bgColorGray">ความคุ้มครอง</th>
										</tr>
									</thead>
									<tbody>

									</tbody>
								</table>
							</div>
							<div class="col-md-11 text-right   input-group2">
								<button type="button" class="btn btn-primary"
									data-dismiss="modal" onclick="ibs_Code(2);">เลือก</button>
							</div>
						</div>
						<div class="row">
							<div class="col-md-1"></div>
							<div class="col-md-3 text-left">
								<label>หมวดการจ่าย</label>
							</div>
							<div class="col-md-2 text-left">
								<input type="text" class="form-control"
									id="text_GroupPayment_edit"
									onkeydown="isEnglishchar(this.value,this)" onchange="isEnglishchar(this.value,this)">
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<div class="row">
							<div class="col-md-8"></div>
							<div class="col-md-3">
								<button type="button" class="btn btn-primary"
									data-dismiss="modal" id="bt_Delete_Edit">ลบ</button>
								<button type="button" class="btn btn-primary"
									data-dismiss="modal" id="bt_edit_Benefit_Detail"
									onclick="save_Edit2();">บันทึก</button>
								<button type="button" class="btn btn-primary"
									data-dismiss="modal">ยกเลิก</button>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
		<!-- ***************************Modal***Add Benefit Detail***************************** -->
		<div class="modal fade" id="addBenefit" role="dialog">
			<div class="modal-dialog modal-lg">
				<div class="panel panel-primary">
					<div class="panel-heading text-left">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h4 class="modal-title">UI-004.1.1.1 : Benefit Detail</h4>
					</div>
					<div class="modal-body">
						<div class="row"></div>
						<div class="row">
							<div class="col-md-1"></div>
							<div class="col-md-3 text-left padding1">
								<label>หมวดความคุ้มครอง</label>
							</div>
							<div class="col-md-7 text-left padding1">
								<input type="text" class="form-control"
									id="text_GroupProtection_add" readonly="readonly">
							</div>
						</div>
						<div class="row">
							<div class="col-md-1"></div>
							<div class="col-md-3 text-left">
								<label>รหัสความคุ้มครอง</label>
							</div>
							<div class="col-md-7 text-left">
								<input type="text" class="form-control"
									id="text_PassProtection_add">
							</div>
						</div>
						<div class="row">
							<div class="col-md-1"></div>
							<div class="col-md-3 text-left padding1">
								<label>ชื่อ (ไทย)</label>
							</div>
							<div class="col-md-7 text-left padding1">
								<input type="text" class="form-control" id="text_NameTH_add"
									onkeydown="isThaichar(this.value,this)" onchange="isThaichar(this.value,this)">
							</div>
						</div>
						<div class="row">
							<div class="col-md-1"></div>
							<div class="col-md-3 text-left">
								<label>ชื่อ (อังกฤษ)</label>
							</div>
							<div class="col-md-7 text-left">
								<input type="text" class="form-control" id="text_NameEN_add"
								onkeydown="isEnglishchar(this.value,this)" onchange="isEnglishchar(this.value,this)">
							</div>
						</div>
						<div class="row">
							<div class="col-md-1"></div>
							<div class="col-md-3 text-left padding1">
								<label>IBS Code</label>
							</div>
							<div class="col-md-7 text-left padding1  input-group2">
								<table class="table table-striped table-bordered"
									id="tb_Addibs_Code">
									<thead>
										<tr>
											<th class="text-center col-md-4 bgColorGray">รหัสความคุ้มครอง</th>
											<th class="text-center col-md-10 bgColorGray">ความคุ้มครอง</th>
										</tr>
									</thead>
									<tbody>

									</tbody>
								</table>
							</div>
							<div class="col-md-11 text-right   input-group2">
									<button type="button" class="btn btn-primary text-right"
									data-dismiss="modal" onclick="ibs_Code(1);">เลือก</button>
							</div>
						</div>
						<div class="row">
							<div class="col-md-1"></div>
							<div class="col-md-3 text-left">
								<label>หมวดการจ่าย</label>
							</div>
							<div class="col-md-2 text-left">
								<input type="text" class="form-control"
									id="text_GroupPayment_add"
									onkeydown="isEnglishchar(this.value,this)" onchange="isEnglishchar(this.value,this)">
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<div class="row">
							<div class="col-md-8"></div>
							<div class="col-md-3">
								<button type="button" class="btn btn-primary"
									data-dismiss="modal" id="bt_Add_Benefit_Detail">บันทึก</button>
								<button type="button" class="btn btn-primary"
									data-dismiss="modal">ยกเลิก</button>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
		<!-- ******************************editBenefit***************************** -->
		<!-- 	<div class="modal fade" id="editBenefit" role="dialog">
			<div class="modal-dialog modal-lg">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h4 class="modal-title">UI-004.1.1.1 : Benefit Detail</h4>
					</div>
					<div class="modal-body">
						<div class="row"></div>
						<div class="row">
							<div class="col-md-2"></div>
							<div class="col-md-3 text-left padding1">
								<label>หมวดความคุ้มครอง</label>
							</div>
							<div class="col-md-5 text-left padding1">
								<input type="text" class="form-control"
									value="BC_01 : ชีวิตหรือทุพพลภาพสิ้นเชิงถาวร">
							</div>
						</div>
						<div class="row">
							<div class="col-md-2"></div>
							<div class="col-md-3 text-left">
								<label>รหัสความคุ้มครอง</label>
							</div>
							<div class="col-md-5 text-left">
								<input type="text" class="form-control" value="">
							</div>
						</div>
						<div class="row">
							<div class="col-md-2"></div>
							<div class="col-md-3 text-left padding1">
								<label>ชื่อ (ไทย)</label>
							</div>
							<div class="col-md-5 text-left padding1">
								<input type="text" class="form-control" value="">
							</div>
						</div>
						<div class="row">
							<div class="col-md-2"></div>
							<div class="col-md-3 text-left">
								<label>ชื่อ (อังกฤษ)</label>
							</div>
							<div class="col-md-5 text-left">
								<input type="text" class="form-control" value="">
							</div>
						</div>
						<div class="row">
							<div class="col-md-2"></div>
							<div class="col-md-3 text-left padding1">
								<label>IBS Code</label>
							</div>
							<div class="col-md-2 text-left padding1">
								<div class="dropdown">
									<button class="btn btn-default dropdown-toggle" type="button"
										data-toggle="dropdown">
										--Select-- <span class="caret"></span>
									</button>
									<ul class="dropdown-menu">
										<li><a href="#">HTML</a></li>
										<li><a href="#">CSS</a></li>
										<li><a href="#">JavaScript</a></li>
									</ul>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-md-2"></div>
							<div class="col-md-3 text-left">
								<label>หมวดการจ่าย</label>
							</div>
							<div class="col-md-2 text-left">
								<input type="text" class="form-control" value="">
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<div class="row">
							<div class="text-left col-md-1">
								<button type="button" class="btn btn-primary"
									data-dismiss="modal">ลบ</button>
							</div>
							<div class="col-md-8"></div>
							<div class="col-md-3">
								<button type="button" class="btn btn-primary"
									data-dismiss="modal">ตกลง</button>
								<button type="button" class="btn btn-primary"
									data-dismiss="modal">ยกเลิก</button>
							</div>
						</div>

					</div>
				</div>
			</div>
		 -->
	</div>
	<!-- *********************************************************** -->
	<div class="modal fade" id="confirmDelete1" role="dialog">
		<div class="modal-dialog">

			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">ยืนยันการลบรายการ</h4>
				</div>
				<div class="modal-body">
					<div class="row">
						<p class="text-center">
							ต้องการลบหมวดความคุ้มครอง<label id="text_confirmDelete1"
								style="color: red;"></label>ใช่หรือไม่?
						</p>
					</div>
					<div class="row"></div>
					<div class="row">
						<div class="col-md-4"></div>
						<div class="col-md-4">
							<div class="col-md-6">
								<button type="button" class="btn btn-primary"
									data-dismiss="modal" onclick="bt_confirmDelete1();">ยืนยัน</button>
							</div>
							<div class="col-md-6">
								<button type="button" class="btn btn-primary"
									data-dismiss="modal">ยกเลิก</button>
							</div>
						</div>
						<div class="col-md-2"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- *********************************************************** -->
	<div class="modal fade" id="confirmDelete2" role="dialog">
		<div class="modal-dialog">

			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">ยืนยันการลบรายการ</h4>
				</div>
				<div class="modal-body">
					<div class="row">
						<p class="text-center">
							ต้องการลบหมวดความคุ้มครอง&nbsp;<label id="text_confirmDelete2"
								style="color: red;"></label>&nbsp;ใช่หรือไม่?
						</p>
					</div>
					<div class="row"></div>
					<div class="row">
						<div class="col-md-4"></div>
						<div class="col-md-4">
							<div class="col-md-6">
								<button type="button" class="btn btn-primary"
									data-dismiss="modal" onclick="detail_Delete2_2();">ยืนยัน</button>
							</div>
							<div class="col-md-6">
								<button type="button" class="btn btn-primary"
									data-dismiss="modal">ยกเลิก</button>
							</div>
						</div>
						<div class="col-md-2"></div>
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
	<script src="js/menubar.js" charset="utf-8"></script>
	<script src="js/benefit.js" charset="utf-8"></script>
</body>
</html>