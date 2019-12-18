<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title></title>
</head>
<style>
.dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody {
	overflow-y: scroll !important;
}

.DTFC_LeftHeadWrapper th {
	width: 0px;
}

div.DTFC_RightHeadWrapper table, div.DTFC_LeftHeadWrapper table {
	margin-bottom: 0 !important;
	border-top-right-radius: 0 !important;
	border-bottom-left-radius: 0 !important;
	border-bottom-right-radius: 0 !important;
}

div.DTFC_LeftHeadWrapper table thead tr:last-child th:first-child, div.DTFC_LeftHeadWrapper table thead tr:last-child td:first-child
	{
	border-bottom-left-radius: 0 !important;
	border-bottom-right-radius: 0 !important;
}

div.DTFC_LeftBodyWrapper table {
	border-top: none;
	margin-bottom: 0 !important;
}

div.DTFC_LeftBodyWrapper tbody tr:first-child th, div.DTFC_LeftBodyWrapper tbody tr:first-child td
	{
	border-top: none;
}

div.DTFC_LeftFootWrapper table {
	border-top: none;
}
</style>
<body>
	<form class="form-horizontal">
		<div class="row box-body" id="div_main_menu_TC_1">
	<div class="panel-body">
		<div class="panel panel-primary" align="center">
			<div class="panel-heading" align="center">
				<p class="margin0">
					<B>เงื่อนไขการรวมทุนตรวจสุขภาพ</B>
				</p>
			</div>
			<div class="panel-body">
				<div class="panel panel-primary">
					<div class="panel-heading" align="left">
						<p class="margin0">
							<B>ระบุเงื่อนไขแสดงข้อมูล</B>
						</p>
					</div>
					<div class="panel-body">
						<div class="dataTables_wrapper form-inline dt-bootstrap no-footer">
							<div class="row">
								<div class="col-sm-12" align="right">
									<label>ค้นหา :&nbsp;</label><input type="text"
										id="search_tb_tab1_1" class="form-control input-sm" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="panel panel-primary">
					<div class="panel-heading" align="left">
						<p class="margin0">
							<B>แสดงรายการ เงื่อนไขการรวมทุนตรวจสุขภาพ</B>
						</p>
					</div>
					<div class="panel-body">
						<table id="tb_tab1_listAppendix_accum"
							class="table table-striped table-bordered text-center"
							width="100%">
							<thead>
								<tr>
									<th width="50%" class="text-center bg-primary vertical-middle"
										style="border-right-style: none; border-bottom-style: none; background-color: #0099cc"
										colspan="6">รายการตารางภาคผนวก</th>
									<th width="20%" class="text-center bg-primary vertical-middle"
										style="border-right-style: none; border-bottom-style: none; background-color: #0099cc"
										colspan="2">ผลการตรวจสอบ IC</th>
									<th width="20%" class="text-center bg-primary vertical-middle"
										style="border-right-style: none; border-bottom-style: none; background-color: #0099cc"
										colspan="2">รวมกรมธรรม์ตามการ ตรวจสอบประวัติ
 										ของผู้ขอกรมธรรม์และกรมธรรม์ล่าสุดมี Sub Standard</th>
									<th width="10%" class="text-center bg-primary vertical-middle"
										style="border-right-style: none; border-bottom-style: none; background-color: #0099cc"
										colspan="1"></th>
								</tr>
								<tr>
									<th width="1%" class="text-center bg-primary  vertical-middle"
										style="border-right-style: none; border-top-style: none; width: 0px;"
										colspan="1"></th>
									<th width="4%" class="text-center bg-primary  vertical-middle"
										style="border-right-style: none; border-top-style: none;"
										colspan="1">ภาคผนวก</th>
									<th width="26%" class="text-center bg-primary  vertical-middle"
										style="border-right-style: none; border-top-style: none;"
										colspan="1">ชื่อตารางภาคผนวกสำหรับสินค้าประเภท</th>
									<th width="5%" class="text-center bg-primary  vertical-middle"
										style="border-right-style: none; border-top-style: none;"
										colspan="1">เวอร์ชั่น</th>
									<th width="7%" class="text-center bg-primary  vertical-middle"
										style="border-right-style: none; border-top-style: none;"
										colspan="1">วันที่เริ่มใช้ตาราง</th>
									<th width="7%" class="text-center bg-primary  vertical-middle"
										style="border-right-style: none; border-top-style: none;"
										colspan="1">วันที่สิ้นสุดตาราง</th>
									<th width="10%" class="text-center bg-primary  vertical-middle"
										style="border-right-style: none; border-top-style: none;"
										colspan="1">มีประวัติ IC</th>
									<th width="10%" class="text-center bg-primary  vertical-middle"
										style="border-right-style: none; border-top-style: none;"
										colspan="1">ไม่มีประวัติ IC</th>
									<th width="10%" class="text-center bg-primary  vertical-middle"
										style="border-right-style: none; border-top-style: none;"
										colspan="1">มี Substandard</th>
									<th width="10%" class="text-center bg-primary  vertical-middle"
										style="border-right-style: none; border-top-style: none;"
										colspan="1">ไม่มี Substandard</th>
									<th width="8%" class="text-center bg-primary  vertical-middle"
										style="border-right-style: none; border-top-style: none; background-color: #0099cc;"
										colspan="1">สถานะ</th>
								</tr>
							</thead>
							<tbody>
								
							</tbody>
						</table>

<!-- 						<div id="row_user_accum" class="row" > -->
<!-- 						  <div class="text-center" style="padding: 10px 0"></div> -->
<!-- 							<div class="col-sm-7" align="center"> -->
<!-- 								<div class="col-sm-2" style="padding-right: 90px; padding-left: 0px;"> -->
<!-- 									<input class="btn btn-primary width90" id="bt1_req_med" type="button"  -->
<!-- 									data-target="#modal_req_approved" data-toggle="modal" value="ขออนุมัติ"> -->
<!-- 								</div> -->
<!-- 								<div class="col-sm-2" style="padding-right: 0px; padding-left: 0px;"> -->
<!-- 									<input class="btn btn-primary width90" id="bt1_req_edit2" type="button"  -->
<!-- 									data-target="#modal_req_edit2" data-toggle="modal" value="ขอแก้ไข"> -->
<!-- 								</div> -->
<!-- 								<div class="col-sm-2" style="padding-right: 103px; padding-left: 12px;"> -->
<!-- 									<input class="btn btn-primary width90"  id="bt1_his_med" type="button"  -->
<!-- 									data-target="" data-toggle="modal"  -->
<!-- 									onclick="bt_show_historyTab1();" -->
<!-- 									value="ประวัติการขออนุมัติ"> -->
<!-- 								</div> -->
<!-- 								<div class="col-sm-1" style="padding-right: 88px; padding-left: 0px;"> -->
<!-- 									</div> -->
								
<!-- 							</div> -->
<!-- 								<div class="col-sm-5" align="center"> -->
<!-- 								<div class="col-sm-1" style="padding-right: 70px; padding-left: 0px;"> -->
<!-- 									</div> -->
<!-- 								<div class="col-sm-2" style="padding-right: 86px; padding-left: 0px;"> -->
<!-- 									</div> -->
<!-- 							style="display: none;" -->
								
<!-- 								<div class="col-sm-1" style="padding-right: 70px; padding-left: 0px;"> -->
<!-- 									<input class="btn btn-primary width90" id ="bt_submit1"  -->
<!-- 										data-target="#modal_submit" -->
<!-- 									    type="button"  -->
<!-- 										data-toggle="modal" value="บันทึก" > -->
<!-- 								</div> -->
<!-- 								<div class="col-sm-1" style="padding-right: 0px; padding-left: 30px;"> -->
<!-- 									<input class="btn btn-primary width90"  -->
<!-- 									id="bt1_cancel_med" onclick="enable_bt_Cancel_CB();"  -->
<!-- 									type="button" value="ยกเลิก"> -->
<!-- 								</div> -->
<!-- 							</div> -->
<!-- 						</div> -->
						<div id="row_user_accum" class="row" style="padding-top: 5px;">
							<div class="col-sm-4" align="center">
								<div class="col-sm-2"
									style="padding-right: 110px; padding-left: 0px;">
									
								</div>
								<div class="col-sm-2"
									style="padding-right: 103px; padding-left: 0px;">
									
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
									<input class="btn btn-primary width90" id="bt1_req_edit2"
										type="button" data-target="#modal_req_edit2"
										data-toggle="modal" value="ขอแก้ไข">
								</div>
								<div class="col-sm-3" style="padding-left:2px;padding-right:0px;">
									<input class="btn btn-primary width90" id="bt1_his_med"
										type="button" data-target="" data-toggle="modal"
										onclick="bt_show_historyTab1();" value="ประวัติการขออนุมัติ">
								</div>
								<div class="col-sm-2" style="padding-left:20px;padding-right:0px;">
									<input class="btn btn-primary width90" id="bt_submit1"
										type="button" 
										data-toggle="modal" 
										data-target="#modal_submit"
										value="บันทึก">
								</div>
								<div class="col-sm-2" style="padding-left:0px;padding-right:0px;">
									<input class="btn btn-primary width90" id="bt1_cancel_med"
										onclick="enable_bt_Cancel_CB();" type="button" value="ยกเลิก">
								</div>
							</div>
						</div>
						<div id="row_super_accum" class="row" >
						  <div class="text-center" style="padding: 10px 0"></div>
							<div class="col-sm-7" align="center">
								<div class="col-sm-2" style="padding-right: 110px; padding-left: 0px;">
									</div>
								<div class="col-sm-2" style="padding-right: 103px; padding-left: 0px;">
									</div>
								<div class="col-sm-1" style="padding-right: 88px; padding-left: 0px;">
									</div>
								<div class="col-sm-2" style="padding-right: 0px; padding-left: 0px;">
									</div>
								</div>
								<div class="col-sm-5" align="center">
								<div class="col-sm-1" style="padding-right: 70px; padding-left: 0px;">
									</div>
								<div class="col-sm-2" style="padding-right: 86px; padding-left: px;">
									<input class="btn btn-primary width90" id="bt1_appr_med" type="button" 
									data-target="#modal_approved" data-toggle="modal" value="อนุมัติ">
								</div>
							<!-- style="display: none;" -->
								
								<div class="col-sm-1" style="padding-right: 70px; padding-left: 0px;">
									<input class="btn btn-primary width90" id="bt1_not_appr_med" type="button" 
									data-target="#modal_not_approve" data-toggle="modal" 
										 value="ไม่อนุมัติ">
								</div>
								<div class="col-sm-1" style="padding-right: 0px; padding-left: 30px;">
									<input class="btn btn-primary width90" id="bt1_cancel_med2" onclick="enable_bt_Cancel_CB();" type="button" value="ยกเลิก">
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
					<h4 class="modal-title" align="left">ยืนยันการบันทึก<span></span></h4>
				</div>
			<div class="modal-body">
				<div class="row" align="center">
					<p class="margin0">
						<B>ยืนยันการบันทึก ใช่หรือไม่?</B>
					</p>
				</div>
				<div class="text-center" style="padding: 10px 0"></div>
				<div class="row" align="center">
					<button type="button" onclick="dataSaveNewTab1();" class="btn btn-primary" data-dismiss="modal">ยืนยัน</button>
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
					<h4 class="modal-title" align="left">ยืนยันการขออนุมัติ<span></span></h4>
				</div>
			<div class="modal-body">
				<div class="row" align="center">
					<p class="margin0">
						<B>ต้องการขออนุมัติ ใช่หรือไม่?</B>
					</p>
				</div>
				<div class="text-center" style="padding: 10px 0"></div>
				<div class="row" align="center">
					<button type="button" onclick="dataSaveReqTab1();" class="btn btn-primary" data-dismiss="modal">ยืนยัน</button>
					<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
				</div>
			</div>
			</div>
		</div>
	</div>
	<!-- dialog - ยืนยันการขออนุมัติ -->
	<div class="modal fade" id="modal_req_edit2" role="dialog">
		<div class="modal-dialog">
			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title" align="left">ยืนยันการขอแก้ไข<span></span></h4>
				</div>
			<div class="modal-body">
				<div class="row" align="center">
					<p class="margin0">
						<B>ต้องการขอแก้ไข ใช่หรือไม่?</B>
					</p>
				</div>
				<div class="text-center" style="padding: 10px 0"></div>
				<div class="row" align="center">
					<button type="button" onclick="dataSaveReqEditTab1();" class="btn btn-primary" data-dismiss="modal">ยืนยัน</button>
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
					<h4 class="modal-title" align="left">ยืนยันการอนุมัติ<span></span></h4>
				</div>
			<div class="modal-body">
				<div class="row" align="center">
					<p class="margin0">
						<B>ต้องการอนุมัติรายการตรวจใช่หรือไม่?</B>
					</p>
				</div>
				<div class="text-center" style="padding: 10px 0"></div>
				<div class="row" align="center">
					<button type="button" onclick="dataSaveApproveTab1();" class="btn btn-primary" data-dismiss="modal">ยืนยัน</button>
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
					<h4 class="modal-title" align="left">กรุณาระบุเหตุผลการไม่อนุมัติ<span></span></h4>
				</div>
			<div class="modal-body">
				<div class="content">
					<div class="row" align="left">
						<p class="margin0">
							<B>ระบุเหตุผลไม่อนุมัติ</B>
						</p>
					</div>
					<div class="row">
						<textarea id="textarea_reason_back" maxlength="100" style="width:100%" rows="7" cols="2"></textarea>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row" align="center">
						<button type="button" class="btn btn-primary" 
						onclick="dataSaveNotApproveTab1();" data-dismiss="modal"	 >ยืนยัน</button>
						<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
					</div>
				</div>
			</div>
			</div>
		</div>
	</div>
	
	
	<!-- เพิ่มรายการตรวจ dialog - history -->
	<div class="modal fade" id="model_tb_txnhistory" role="dialog">
		<div class="modal-dialog" style="width:80%">
			<div class="modal-content"  >
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
												id="search_modal_tab2" class="form-control input-sm"></label>
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
							<table class="table table-striped table-bordered text-center" id="tb_model_txnhistory"
								 width="100%">
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
	
		</div>	
</form>
<!-------------------- hidden value ------------------------->

<input id="rider_female" type="hidden" value="N">
<input id="exam_type_LookUp" type="hidden" >
<input id="sumpolicy_LookUp_IC_YES" type="hidden" >
<input id="sumpolicy_LookUp_IC_NO" type="hidden" >
<input id="sumpolicy_LookUp_SUB_YES" type="hidden" >
<input id="sumpolicy_LookUp_SUB_NO" type="hidden" >


<!----------------------------------------------------------->	
</body>
</html>
