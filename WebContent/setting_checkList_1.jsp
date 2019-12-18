<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title></title>
</head>
<style>
.dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody {
	overflow-y: scroll !important;
}
</style>
<%
	String strUser_CL = session.getAttribute("auth").toString();
	System.out.println("auth:" + strUser_CL);
%>
<body>
	<div class="panel-body">
		<div class="panel panel-primary" align="center">
			<div class="panel-heading" align="center">
				<p class="margin0">
					<B>ข้อมูลรายการตรวจ</B>
				</p>
			</div>
			<div class="panel-body">
				<div class="panel panel-primary" align="center">
					<div class="panel-heading" align="left">
						<p class="margin0">
							<B>ระบุเงื่อนไขแสดงข้อมูล</B>
						</p>
					</div>
					<div class="panel-body">
						<div class="dataTables_wrapper form-inline dt-bootstrap no-footer">
							<div class="row">
								<div class="col-sm-6">
									<div class="dataTables_length pull-left">
										&nbsp;&nbsp; <input type="checkbox" id="rd_show_list_UW"
											class='checker panel_head_big'
											onchange="change_rd();" data-toggle="toggle" /> <label
											for="rd_show_list_UW">&nbsp;แสดงรายการตรวจเฉพาะ UW
											Flag</label>
									</div>
								</div>

								<div class="col-sm-6">
									<div class="dataTables_filter">
										<label>ค้นหา :<input type="search" id="search_tb_tab1"
											class="form-control input-sm"></label>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-sm-6">
									<div class="dataTables_length pull-left">
										&nbsp;&nbsp; <input type="checkbox" id="rd_show_list_all"
											class='checker panel_head_big'
											onchange="change_rd();" data-toggle="toggle" /> <label
											for="rd_show_list_all">&nbsp;แสดงรายการตรวจทั้งหมด</label>
									</div>
								</div>
								<div class="col-sm-6">
									<div class="dataTables_length pull-right">
										<font color="orange">ประเภทตรวจ O = Other , B = Blood</font>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="panel panel-primary" align="center">
					<div class="panel-heading" align="left">
						<p class="margin0">
							<B>แสดงรายการตรวจ</B>
						</p>
					</div>
					<div class="panel-body">


						<table id="tb_tab1_checklist"
							class="table table-striped table-bordered text-center"
							width="100%">
							<thead>
								<tr>
									<th width="1%" class="text-center bg-primary vertical-middle"
										style="border-right-style: none;"><label>เลือก</label></th>
									<th width="7%" class="text-center bg-primary vertical-middle"
										style="border-right-style: none;"><label>รหัส</label></th>
									<th width="10%" class="text-center bg-primary vertical-middle"
										style="border-right-style: none;"><label>ชื่อรหัสตรวจ</label></th>
									<th width="37%" class="text-center bg-primary vertical-middle"
										style="border-right-style: none;"><label>ความหมายรหัสตรวจ</label></th>
									<th width="5%" class="text-center bg-primary vertical-middle"
										style="border-right-style: none;"><label>ประเภทตรวจ</label></th>
									<th width="12%" class="text-center bg-primary vertical-middle"
										style="border-right-style: none;"><label>ราคา<br>ค่าตรวจ
									</label></th>
									<th width="9%" class="text-center bg-primary vertical-middle"
										style="border-right-style: none;"><font size="1"><label>สถานะ<br>การใช้งาน<br>(Y/N)
										</label> </font> </label></th>
									<th width="14%" class="text-center bg-primary vertical-middle"
										style="border-right-style: none;"><label>สถานะ</label></th>
									<th width="5%" class="text-center bg-primary vertical-middle"
										style="border-right-style: none;"><label>UW Flag</label></th>
								</tr>
							</thead>
							<tbody>

							</tbody>
						</table>
						
						
						<div id="row_user_button" class="row" style="padding-top: 5px;">
							<div class="col-sm-4" align="center">
								<div class="col-sm-2"
									style="padding-right: 110px; padding-left: 0px;">
									<input class="btn btn-primary width90" id="bt1_add_med"
										onclick="bt_add_rowCheckList();" type="button"
										value="เพิ่มรายการ">
								</div>
								<div class="col-sm-2"
									style="padding-right: 103px; padding-left: 0px;">
									<input class="btn btn-primary width90" id="bt1_delete_med"
										type="button" data-target="#modal_delete_medexam"
										data-toggle="modal" value="ลบรายการ">
								</div>
								
							</div>
							<div class="col-sm-8" align="center">
								<div class="col-sm-1" style="padding-left:0px;padding-right:0px;"></div>
								<div class="col-sm-2" style="padding-left:0px;padding-right:0px;">
									<input class="btn btn-primary width90" id="bt1_req_med"
										type="button" data-target="#modal_req_approved"
										data-toggle="modal" value="ขออนุมัติ">
								</div>
								<!-- style="display: none;" -->

								<div class="col-sm-2" style="padding-left:0px;padding-right:0px;">
									<input class="btn btn-primary width90" id="bt1_req_edit"
										type="button" data-target="#modal_req_edit"
										data-toggle="modal" value="ขอแก้ไข">
								</div>
								<div class="col-sm-3" style="padding-left:2px;padding-right:0px;">
									<input class="btn btn-primary width90" id="bt1_his_med"
										type="button" data-target="" data-toggle="modal"
										onclick="bt_show_historyTab1();" value="ประวัติการขออนุมัติ">
								</div>
								<div class="col-sm-2" style="padding-left:20px;padding-right:0px;">
									<input class="btn btn-primary width90" id="bt1_submit_med"
										type="button" onclick="validate_dataSave_Medexam();"
										data-toggle="modal" value="บันทึก">
								</div>
								<div class="col-sm-2" style="padding-left:0px;padding-right:0px;">
									<input class="btn btn-primary width90" id="bt1_cancel_med"
										onclick="enable_bt_Cancel_CB();" type="button" value="ยกเลิก">
								</div>
							</div>
						</div>
						
						<div id="row_super_button" class="row" style="padding-top: 40px;">
							<div class="col-sm-7" align="center">
								<div class="col-sm-2"
									style="padding-right: 110px; padding-left: 0px;"></div>
								<div class="col-sm-2"
									style="padding-right: 103px; padding-left: 0px;"></div>
								<div class="col-sm-1"
									style="padding-right: 88px; padding-left: 0px;"></div>
								<div class="col-sm-2"
									style="padding-right: 0px; padding-left: 0px;"></div>
							</div>
							<div class="col-sm-5" align="center">
								<div class="col-sm-1"
									style="padding-right: 70px; padding-left: 0px;"></div>
								<div class="col-sm-2"
									style="padding-right: 86px; padding-left: 0px;">
									<input class="btn btn-primary width90" id="bt1_appr_med"
										type="button" data-target="#modal_approved"
										data-toggle="modal" value="อนุมัติ">
								
								</div>
								

								<div class="col-sm-2"
									style="padding-right: 100px; padding-left: 0px;">
									<input class="btn btn-primary width90" id="bt1_not_appr_med"
										type="button" data-target="#modal_not_approve"
										data-toggle="modal" value="ไม่อนุมัติ">
								</div>
								<div class="col-sm-1"
									style="padding-right: 0px; padding-left: 0px;">
									<input class="btn btn-primary width90" id="bt1_cancel_med2"
										onclick="enable_bt_Cancel_CB();" type="button" value="ยกเลิก">
								</div>
							</div>
						</div>
						


					</div>
				</div>
			</div>
		</div>
	</div>

	<!------------------------------- dialog --------------------------------------------->

	<!-- dialog - ยืนยันการบันทึก -->
	<div class="modal fade" id="modal_submit" role="dialog">
		<div class="modal-dialog">
			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title" align="left">
						ยืนยันการบันทึก<span></span>
					</h4>
				</div>
				<div class="modal-body">
					<div class="row" align="center">
						<p class="margin0">
							<B>ยืนยันการบันทึก ใช่หรือไม่?</B>
						</p>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row" align="center">
						<button type="button" onclick="dataSave_Medexam();"
							class="btn btn-primary" data-dismiss="modal">ยืนยัน</button>
						<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- dialog - ยืนยันการขออนุมัติ -->
	<div class="modal fade" id="modal_req_approved" role="dialog">
		<div class="modal-dialog">
			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title" align="left">
						ยืนยันการขออนุมัติ<span></span>
					</h4>
				</div>
				<div class="modal-body">
					<div class="row" align="center">
						<p class="margin0">
							<B>ต้องการขออนุมัติ เพิ่มรายการตรวจ ใช่หรือไม่?</B>
						</p>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row" align="center">
						<button type="button" onclick="bt_req_approve_rowCheckList();"
							class="btn btn-primary" data-dismiss="modal">ยืนยัน</button>
						<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<!-- dialog - ยืนยันการขออนุมัติ -->
	<div class="modal fade" id="modal_req_edit" role="dialog">
		<div class="modal-dialog">
			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title" align="left">
						ยืนยันการขอแก้ไข<span></span>
					</h4>
				</div>
				<div class="modal-body">
					<div class="row" align="center">
						<p class="margin0">
							<B>ต้องการขอแก้ไข ใช่หรือไม่?</B>
						</p>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row" align="center">
						<button type="button" onclick="bt_req_edit_rowCheckList();"
							class="btn btn-primary" data-dismiss="modal">ยืนยัน</button>
						<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<!-- dialog - ยืนยันการขอแก้อนุมัติ -->
	<div class="modal fade" id="modal_req_edit" role="dialog">
		<div class="modal-dialog">
			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title" align="left">
						ยืนยันการขอแก้ไข<span></span>
					</h4>
				</div>
				<div class="modal-body">
					<div class="row" align="center">
						<p class="margin0">
							<B>ต้องการขอแก้ไข รายการตรวจ ใช่หรือไม่?</B>
						</p>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row" align="center">
						<button type="button" onclick="bt_req_edit_rowCheckList();"
							class="btn btn-primary" data-dismiss="modal">ยืนยัน</button>
						<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- dialog - ยืนยันการอนุมัติ -->
	<div class="modal fade" id="modal_approved" role="dialog">
		<div class="modal-dialog">
			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title" align="left">
						ยืนยันการอนุมัติ<span></span>
					</h4>
				</div>
				<div class="modal-body">
					<div class="row" align="center">
						<p class="margin0">
							<B>ต้องการอนุมัติรายการตรวจใช่หรือไม่?</B>
						</p>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row" align="center">
						<button type="button" onclick="bt_approve_rowCheckList();"
							class="btn btn-primary" data-dismiss="modal">ยืนยัน</button>
						<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- dialog - ยืนยันการลบ-->
	<div class="modal fade" id="modal_delete_medexam" role="dialog">
		<div class="modal-dialog">
			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title" align="left">
						ยืนยันการลบ<span></span>
					</h4>
				</div>
				<div class="modal-body">
					<div class="row" align="center">
						<p class="margin0">
							<B>ต้องการลบ รายการตรวจ ใช่หรือไม่?</B>
						</p>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row" align="center">
						<button type="button" onclick="bt_delete_rowCheckList();"
							class="btn btn-primary" data-dismiss="modal">ยืนยัน</button>
						<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- dialog - เหตุผลไม่อนุมัติ -->
	<div class="modal fade" id="modal_reason_noApproved" role="dialog">
		<div class="modal-dialog">
			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title" align="left">
						กรุณาระบุเหตุผลการไม่อนุมัติ<span></span>
					</h4>
				</div>
				<div class="modal-body">
					<div class="content">
						<div class="row" align="left">
							<p class="margin0">
								<B>เหตุผลที่ไม่อนุมัติ</B>
							</p>
						</div>
						<div class="row">
							<textarea style="width: 100%" rows="7" cols="2"></textarea>
						</div>
						<div class="text-center" style="padding: 10px 0"></div>
						<div class="row" align="center">
							<button type="button" class="btn btn-primary"
								data-target="#modal_noApproved" data-toggle="modal">ยืนยัน</button>
							<button type="button" class="btn btn-primary"
								data-dismiss="modal">ยกเลิก</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- dialog - ยืนยันการไม่อนุมัติ -->
	<div class="modal fade" id="modal_noApproved" role="dialog">
		<div class="modal-dialog">
			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title" align="left">
						ยืนยันการไม่อนุมัติ<span></span>
					</h4>
				</div>
				<div class="modal-body">
					<div class="row" align="center">
						<p class="margin0">
							<B>ไม่อนุมัติ เพิ่มรายการตรวจ ใช่หรือไม่?</B>
						</p>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row" align="center">
						<button type="button" class="btn btn-primary">ยืนยัน</button>
						<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
					</div>
				</div>
			</div>
		</div>
	</div>



	<!-- dialog - เหตุผลไม่อนุมัติ -->
	<div class="modal fade" id="modal_not_approve" role="dialog">
		<div class="modal-dialog">
			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title" align="left">
						กรุณาระบุเหตุผลการไม่อนุมัติ<span></span>
					</h4>
				</div>
				<div class="modal-body">
					<div class="content">
						<div class="row" align="left">
							<p class="margin0">
								<B>ระบุเหตุผลไม่อนุมัติ</B>
							</p>
						</div>
						<div class="row">
							<textarea id="textarea_reason_back" maxlength="100" style="width: 100%" rows="7"
								cols="2"></textarea>
						</div>
						<div class="text-center" style="padding: 10px 0"></div>
						<div class="row" align="center">
							<button type="button" class="btn btn-primary"
								onclick="bt_not_approve_rowCheckList();" data-dismiss="modal">ยืนยัน</button>
							<button type="button" class="btn btn-primary"
								data-dismiss="modal">ยกเลิก</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- เพิ่มรายการตรวจ dialog - history -->
	<div class="modal fade" id="model_tb_txnhistory" role="dialog">
		<div class="modal-dialog" style="width: 80%">
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title" align="center">
						เลือกค้นหาข้อมูลประวัติ<span></span>
					</h4>
				</div>
				<div class="modal-body">
					<div class="panel panel-primary">
						<div class="panel-heading">
							<p class="margin0">
								<B></B>
							</p>
						</div>
						<div class="panel-body">
							<div
								class="dataTables_wrapper form-inline dt-bootstrap no-footer">
								<div class="row">
									<div class="col-sm-12">
										<div class="dataTables_filter">
											<label>ค้นหา :<input type="search"
												id="search_history" class="form-control input-sm"></label>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="panel panel-primary">
						<div class="panel-heading">
							<p class="margin0">
								<B>แสดงประวัติสถานะ</B>
							</p>
						</div>
						<div class="panel-body">
							<table class="table table-striped table-bordered text-center"
								id="tb_model_txnhistory" width="100%">
								<thead>
									<tr>
										<th width="10%" class="text-center bg-primary vertical-middle">ผู้ขอ</th>
										<th width="10%" class="text-center bg-primary vertical-middle">วันที่ขอ</th>
										<th width="10%" class="text-center bg-primary vertical-middle">ผู้อนุมัติ</th>
										<th width="10%" class="text-center bg-primary vertical-middle">วันที่อนุมัติ</th>
										<th width="10%" class="text-center bg-primary vertical-middle">วันที่ไม่อนุมัติ</th>
										<th width="10%" class="text-center bg-primary vertical-middle">สถานะ</th>
										<th width="40%" class="text-center bg-primary vertical-middle">เหตุผลการไม่อนุมัติ</th>
									</tr>
								</thead>
								<tbody>


								</tbody>
							</table>
							<div class="text-center" style="padding: 10px 0"></div>
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>
	<!-------------------- hidden value ------------------------->

	<input id="rider_female" type="hidden" value="N">
	<input id="exam_type_LookUp" type="hidden">
	<input id="exam_type_LookUp2" type="hidden">
	<input id="sale_channal_lookup" type="hidden">
	<input id="partner_lookup" type="hidden">
	<input id="cov_cat_lookup" type="hidden">


	<!----------------------------------------------------------->

</body>
</html>