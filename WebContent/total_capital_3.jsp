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
		<div class="row box-body" id="div_main_menu_TC_3">

	<div class="panel-body">
		
		<div class="panel panel-primary">
			<div class="panel-heading" align="left">
				<p class="margin0">
					<B>ข้อมูลเงื่อนไขรวมทุนกรมธรรม์เดิมตามสถานะกรมธรรม์</B>
				</p>
			</div>
			<div class="panel-body">

				<div class="panel panel-primary">
					<div class="panel-heading" align="left">
						<p class="margin0">
							<B>แสดงรายการสถานะกรมธรรม์ ประเภทสัญญา Group Life</B>
						</p>
					</div>


					<div class="panel-body">


						<table id="tb_tab1_listStatusInsurance"
							class="table table-striped table-bordered text-center"
							width="100%">
<!-- 							<div class="panel-body"> -->
<!-- 								<div -->
<!-- 									class="dataTables_wrapper form-inline dt-bootstrap no-footer"> -->
<!-- 									<div class="row"> -->
<!-- 										<div class="col-sm-12" align="right"> -->
<!-- 											<label>ค้นหา :&nbsp;</label><input type="text" -->
<!-- 												id="search_tb_tab1_2" class="form-control input-sm" /> -->
<!-- 										</div> -->
<!-- 									</div> -->
<!-- 								</div> -->
<!-- 							</div> -->
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
													id="search_tb_tab1_2" class="form-control input-sm" />
											</div>
										</div>
									</div>
								</div>
							</div>
							<thead>
								<tr>
									<th width="100%" class="text-center bg-primary vertical-middle"
										style="border-bottom-style: none; background-color: #0099CC;"
										colspan="8">รายการสถานะกรมธรรม์ ประเภทสัญญา Group Life</th>
								</tr>
								<tr>
									<th width="5%" class="text-center bg-primary vertical-middle"
										style="border-right-style: none; border-top-style: none;">เลือก</th>
									<!-- <th width="10%" class="text-center bg-primary vertical-middle" style="border-right-style: none;border-top-style: none;">ประเภทสัญญา</th>
									 -->
									<th width="5%" class="text-center bg-primary vertical-middle"
										style="border-right-style: none; border-top-style: none;">รหัสสถานะ</th>
									<th width="38%" class="text-center bg-primary vertical-middle"
										style="border-right-style: none; border-top-style: none;">ความหมาย</th>
									<th width="10%" class="text-center bg-primary vertical-middle"
										style="border-right-style: none; border-top-style: none;">รวมทุนคุ้มครอง<br>(อำนาจรับประกัน)
									</th>
									<th width="10%" class="text-center bg-primary vertical-middle"
										style="border-right-style: none; border-top-style: none;">รวมทุนตรวจสุขภาพ</th>
									<th width="10%" class="text-center bg-primary vertical-middle"
										style="border-right-style: none; border-top-style: none;">รวมทุนซื้อแนบท้าย</th>
									<th width="10%" class="text-center bg-primary vertical-middle"
										style="border-right-style: none; border-top-style: none;">รวมทุนแนบท้ายเดิม<br>(เซ็ค
										Max)
									</th>
									<th width="12%" class="text-center bg-primary vertical-middle"
										style="border-right-style: none; border-top-style: none;">สถานะ
									</th>
								</tr>
							</thead>
							<tbody>
								
							</tbody>
						</table>

						
<!-- 						<div id="row_user_tab3_top" class="row" > -->
<!-- 						  <div class="text-center" style="padding: 10px 0"></div> -->
<!-- 							<div class="col-sm-7" align="center"> -->
<!-- 								<div class="col-sm-2" style="padding-right: 95px; padding-left: 0px;"> -->
<!-- 								<div class="col-sm-1" style="padding-right: 88px; padding-left: 0px;"> -->
<!-- 									<input class="btn btn-primary width90" id="bt3_req_med" type="button"  -->
<!-- 									data-target="#modal_req_approved3" data-toggle="modal" value="ขออนุมัติ"> -->
<!-- 								</div> -->
<!-- 								</div> -->
<!-- 								<div class="col-sm-2" style="padding-right: 0px; padding-left: 0px;"> -->
<!-- 									<input class="btn btn-primary width90" id="bt1_req_edit3" type="button"  -->
<!-- 									data-target="#modal_req_edit3" data-toggle="modal" value="ขอแก้ไข"> -->
<!-- 								</div> -->
<!-- 								<div class="col-sm-2" style="padding-right: 103px; padding-left: 20px;"> -->
<!-- 									<input class="btn btn-primary width90"  id="bt3_his_med" type="button"  -->
<!-- 									data-target="" data-toggle="modal"  -->
<!-- 									onclick="bt_show_historyTab2_3();" -->
<!-- 									value="ประวัติการขออนุมัติ"> -->
<!-- 								</div> -->
								
<!-- 							</div> -->
<!-- 							<div class="col-sm-5" align="center"> -->
<!-- 								<div class="col-sm-1" style="padding-right: 86px; padding-left: 0px;"> -->
<!-- 								</div> -->
<!-- 							style="display: none;" -->
								
							
<!-- 								<div class="col-sm-2" style="padding-right: 70px; padding-left: 95px;"> -->
<!-- 									<input class="btn btn-primary width90" id ="bt_submit3" data-target="#modal_submit3" -->
<!-- 									    type="button"  -->
<!-- 										data-toggle="modal" value="บันทึก" > -->
<!-- 								</div> -->
<!-- 								<div class="col-sm-2" style="padding-right: 0px; padding-left: 15px;"> -->
<!-- 									<input class="btn btn-primary width90" id="bt3_cancel_med" onclick="enable_bt_Cancel_CB2();" type="button" value="ยกเลิก"> -->
<!-- 								</div> -->
<!-- 							</div> -->
<!-- 						</div> -->
						
						<div id="row_user_tab3_top" class="row" style="padding-top: 5px;">
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
									<input class="btn btn-primary width90" id="bt3_req_med"
										type="button" data-target="#modal_req_approved3"
										data-toggle="modal" value="ขออนุมัติ">
								</div>
								<!-- style="display: none;" -->

								<div class="col-sm-2" style="padding-left:0px;padding-right:0px;">
									<input class="btn btn-primary width90" id="bt1_req_edit3"
										type="button" data-target="#modal_req_edit3"
										data-toggle="modal" value="ขอแก้ไข">
								</div>
								<div class="col-sm-3" style="padding-left:2px;padding-right:0px;">
									<input class="btn btn-primary width90" id="bt3_his_med"
										type="button" data-target="" data-toggle="modal"
										onclick="bt_show_historyTab2_3();" value="ประวัติการขออนุมัติ">
								</div>
								<div class="col-sm-2" style="padding-left:20px;padding-right:0px;">
									<input class="btn btn-primary width90" id="bt_submit3"
										type="button" 
										data-toggle="modal" 
										data-target="#modal_submit3"
										value="บันทึก">
								</div>
								<div class="col-sm-2" style="padding-left:0px;padding-right:0px;">
									<input class="btn btn-primary width90" id="bt3_cancel_med"
										onclick="enable_bt_Cancel_CB2();" type="button" value="ยกเลิก">
								</div>
							</div>
						</div>
						
						<div id="row_super_tab3_top" class="row" >
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
								<div class="col-sm-2" style="padding-right: 86px; padding-left: 0px;">
									<input class="btn btn-primary width90" id="bt3_appr_med" type="button" 
									data-target="#modal_approved3" data-toggle="modal" value="อนุมัติ">
								</div>
							<!-- style="display: none;" -->
								
							
								<div class="col-sm-1" style="padding-right: 100px; padding-left: 0px;">
									<input class="btn btn-primary width90" id="bt3_not_appr_med" type="button" 
									data-target="#modal_not_approve3" data-toggle="modal" 
										 value="ไม่อนุมัติ">
								</div>
								<div class="col-sm-1" style="padding-right: 0px; padding-left: 0px;">
									<input class="btn btn-primary width90" id="bt3_cancel_med2" onclick="enable_bt_Cancel_CB2();" type="button" value="ยกเลิก">
								</div>
							</div>
						</div>

					</div>


				</div>
			</div>
			<div class="panel-body">

				<div class="panel panel-primary">
					<div class="panel-heading" align="left">
						<p class="margin0">
							<B>แสดงรายการสถานะกรมธรรม์ ประเภทสัญญา Individual</B>
						</p>
					</div>


					<div class="panel-body">

							<table id="tb_tab1_listStatusInsurance2"
								class="table table-striped table-bordered text-center"
								width="100%">

<!-- 								<div class="panel-body"> -->
<!-- 									<div -->
<!-- 										class="dataTables_wrapper form-inline dt-bootstrap no-footer"> -->
<!-- 										<div class="row" > -->
<!-- 											<div class="col-sm-12" align="right"> -->
<!-- 												<label>ค้นหา :&nbsp;</label><input type="text" -->
<!-- 													id="search_tb_tab1_3" class="form-control input-sm" /> -->
<!-- 											</div> -->
<!-- 										</div> -->
<!-- 									</div> -->
<!-- 								</div> -->
								
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
														id="search_tb_tab1_3" class="form-control input-sm" />
												</div>
											</div>
										</div>
									</div>
								</div>
								
								<thead >
									<tr>
										<th width="100%"
											class="text-center bg-primary vertical-middle"
											style="border-bottom-style: none; background-color: #0099CC;"
											colspan="8">รายการสถานะกรมธรรม์ ประเภทสัญญา Individual
											Life</th>
									</tr>
									<tr>
										<th width="5%" class="text-center bg-primary vertical-middle"
											style="border-right-style: none; border-top-style: none;">เลือก</th>
										<th width="5%" class="text-center bg-primary vertical-middle"
											style="border-right-style: none; border-top-style: none;">รหัสสถานะ</th>
										<th width="38%" class="text-center bg-primary vertical-middle"
											style="border-right-style: none; border-top-style: none;">ความหมาย</th>
										<th width="10%" class="text-center bg-primary vertical-middle"
											style="border-right-style: none; border-top-style: none;">รวมทุนคุ้มครอง<br>(อำนาจรับประกัน)
										</th>
										<th width="10%" class="text-center bg-primary vertical-middle"
											style="border-right-style: none; border-top-style: none;">รวมทุนตรวจสุขภาพ</th>
										<th width="10%" class="text-center bg-primary vertical-middle"
											style="border-right-style: none; border-top-style: none;">รวมทุนซื้อแนบท้าย</th>
										<th width="10%" class="text-center bg-primary vertical-middle"
											style="border-right-style: none; border-top-style: none;">รวมทุนแนบท้ายเดิม<br>(เซ็ค
											Max)
										</th>
										<th width="12%" class="text-center bg-primary vertical-middle"
										style="border-right-style: none; border-top-style: none;">สถานะ
										</th>
									</tr>
								</thead>
								<tbody>
									
								</tbody>
							</table>
							
							
							
<!-- 						<div id="row_user_tab3_under" class="row" > -->
<!-- 						  <div class="text-center" style="padding: 10px 0"></div> -->
<!-- 							<div class="col-sm-7" align="center"> -->
<!-- 								<div class="col-sm-2" style="padding-right: 95px; padding-left: 0px;"> -->
<!-- 								<div class="col-sm-1" style="padding-right: 88px; padding-left: 0px;"> -->
<!-- 									<input class="btn btn-primary width90" id="bt2_req_med" type="button"  -->
<!-- 									data-target="#modal_req_approved2" data-toggle="modal" value="ขออนุมัติ"> -->
<!-- 								</div> -->
<!-- 								</div> -->
<!-- 								<div class="col-sm-2" style="padding-right: 0px; padding-left: 0px;"> -->
<!-- 									<input class="btn btn-primary width90" id="bt1_req_edit4" type="button"  -->
<!-- 									data-target="#modal_req_edit4" data-toggle="modal" value="ขอแก้ไข"> -->
<!-- 								</div> -->
<!-- 								<div class="col-sm-2" style="padding-right: 103px; padding-left: 20px;"> -->
<!-- 									<input class="btn btn-primary width90"  id="bt2_his_med" type="button"  -->
<!-- 									data-target="" data-toggle="modal"  -->
<!-- 									onclick="bt_show_historyTab2_2();" -->
<!-- 									value="ประวัติการขออนุมัติ"> -->
<!-- 								</div> -->
								
<!-- 								</div> -->
<!-- 								<div class="col-sm-5" align="center"> -->
<!-- 									<div class="col-sm-1" style="padding-right: 86px; padding-left: 0px;"> -->
<!-- 									</div> -->
									
<!-- 									<div class="col-sm-2" style="padding-right: 70px; padding-left: 95px;"> -->
<!-- 										<input class="btn btn-primary width90" id ="bt_submit2" data-target="#modal_submit2" -->
<!-- 										    type="button"  -->
<!-- 											data-toggle="modal" value="บันทึก" > -->
<!-- 									</div> -->
<!-- 									<div class="col-sm-2" style="padding-right: 0px; padding-left: 15px;"> -->
<!-- 										<input class="btn btn-primary width90" id="bt2_cancel_med" onclick="enable_bt_Cancel_CB3();" type="button" value="ยกเลิก"> -->
<!-- 									</div> -->
<!-- 								</div> -->
<!-- 						</div> -->
						<div id="row_user_tab3_under" class="row" style="padding-top: 5px;">
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
									<input class="btn btn-primary width90" id="bt2_req_med"
										type="button" data-target="#modal_req_approved2"
										data-toggle="modal" value="ขออนุมัติ">
								</div>
								<!-- style="display: none;" -->

								<div class="col-sm-2" style="padding-left:0px;padding-right:0px;">
									<input class="btn btn-primary width90" id="bt1_req_edit4"
										type="button" data-target="#modal_req_edit4"
										data-toggle="modal" value="ขอแก้ไข">
								</div>
								<div class="col-sm-3" style="padding-left:2px;padding-right:0px;">
									<input class="btn btn-primary width90" id="bt2_his_med"
										type="button" data-target="" data-toggle="modal"
										onclick="bt_show_historyTab2_2();" value="ประวัติการขออนุมัติ">
								</div>
								<div class="col-sm-2" style="padding-left:20px;padding-right:0px;">
									<input class="btn btn-primary width90" id="bt_submit2"
										type="button" 
										data-toggle="modal" 
										data-target="#modal_submit2"
										value="บันทึก">
								</div>
								<div class="col-sm-2" style="padding-left:0px;padding-right:0px;">
									<input class="btn btn-primary width90" id="bt2_cancel_med"
										onclick="enable_bt_Cancel_CB3();" type="button" value="ยกเลิก">
								</div>
							</div>
						</div>
						<div id="row_super_tab3_under" class="row" >
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
								<div class="col-sm-2" style="padding-right: 86px; padding-left: 0px;">
									<input class="btn btn-primary width90" id="bt2_appr_med" type="button" 
									data-target="#modal_approved2" data-toggle="modal" value="อนุมัติ">
								</div>
							<!-- style="display: none;" -->
								
							
								<div class="col-sm-1" style="padding-right: 100px; padding-left: 0px;">
									<input class="btn btn-primary width90" id="bt2_not_appr_med" type="button" 
									data-target="#modal_not_approve2" data-toggle="modal" 
										 value="ไม่อนุมัติ">
								</div>
								<div class="col-sm-1" style="padding-right: 0px; padding-left: 0px;">
									<input class="btn btn-primary width90" id="bt2_cancel_med2" onclick="enable_bt_Cancel_CB3();" type="button" value="ยกเลิก">
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
		<div class="modal fade" id="modal_submit3" role="dialog">
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
					<button type="button" onclick="dataSaveNewTab3_1();" class="btn btn-primary" data-dismiss="modal">ยืนยัน</button>
					<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
				</div>
			</div>
			</div>
		</div>
	</div>
	<!-- dialog - ยืนยันการบันทึก2-->
	<div class="modal fade" id="modal_submit2" role="dialog">
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
					<button type="button" onclick="dataSaveNewTab3_2();" class="btn btn-primary" data-dismiss="modal">ยืนยัน</button>
					<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
				</div>
			</div>
			</div>
		</div>
	</div>
	
	
	
	<!------------------------------- dialog --------------------------------------------->
	
	
	<!-- dialog - ยืนยันการขออนุมัติ -->
	<div class="modal fade" id="modal_req_approved2" role="dialog">
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
					<button type="button" onclick="dataSaveReqTab3_2();" class="btn btn-primary" data-dismiss="modal">ยืนยัน</button>
					<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
				</div>
			</div>
			</div>
		</div>
	</div>
	
	<!-- dialog - ยืนยันการอนุมัติ -->
	<div class="modal fade" id="modal_approved2" role="dialog">
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
					<button type="button" onclick="dataSaveApproveTab3_2();" class="btn btn-primary" data-dismiss="modal">ยืนยัน</button>
					<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
				</div>
			</div>
			</div>
		</div>
	</div>
	
	
	<!-- dialog - เหตุผลไม่อนุมัติ -->
	<div class="modal fade" id="modal_not_approve2" role="dialog">
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
						<textarea id="textarea_reason_backG"  maxlength="100" style="width:100%" rows="7" cols="2"></textarea>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row" align="center">
						<button type="button" class="btn btn-primary" 
						onclick="dataSaveNotApproveTab3_2();" data-dismiss="modal"	 >ยืนยัน</button>
						<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
					</div>
				</div>
			</div>
			</div>
		</div>
	</div>
	
	
	
	<!------------------------------- dialog --------------------------------------------->
	
	
	<!-- dialog - ยืนยันการขออนุมัติ -->
	<div class="modal fade" id="modal_req_approved3" role="dialog">
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
					<button type="button" onclick="dataSaveReqTab3_1();" class="btn btn-primary" data-dismiss="modal">ยืนยัน</button>
					<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
				</div>
			</div>
			</div>
		</div>
	</div>
	
	<!-- dialog - ยืนยันการขออนุมัติ -->
	<div class="modal fade" id="modal_req_edit3" role="dialog">
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
					<button type="button" onclick="dataSaveReqEditTab3_1();" class="btn btn-primary" data-dismiss="modal">ยืนยัน</button>
					<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
				</div>
			</div>
			</div>
		</div>
	</div>
	
	<!-- dialog - ยืนยันการขออนุมัติ -->
	<div class="modal fade" id="modal_req_edit4" role="dialog">
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
					<button type="button" onclick="dataSaveReqEditTab3_2();" class="btn btn-primary" data-dismiss="modal">ยืนยัน</button>
					<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
				</div>
			</div>
			</div>
		</div>
	</div>
	
	
	<!-- dialog - ยืนยันการอนุมัติ -->
	<div class="modal fade" id="modal_approved3" role="dialog">
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
					<button type="button" onclick="dataSaveApproveTab3_1();" class="btn btn-primary" data-dismiss="modal">ยืนยัน</button>
					<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
				</div>
			</div>
			</div>
		</div>
	</div>
	
	
	<!-- dialog - เหตุผลไม่อนุมัติ -->
	<div class="modal fade" id="modal_not_approve3" role="dialog">
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
						<textarea id="textarea_reason_backV" maxlength="100" style="width:100%" rows="7" cols="2"></textarea>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row" align="center">
						<button type="button" class="btn btn-primary" 
						onclick="dataSaveNotApproveTab3_1();" data-dismiss="modal"	 >ยืนยัน</button>
						<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
					</div>
				</div>
			</div>
			</div>
		</div>
	</div>
	
	
	<!-- เพิ่มรายการตรวจ dialog - history -->
	<div class="modal fade" id="model_tb_txnhistory3" role="dialog">
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
	
	<!-- เพิ่มรายการตรวจ dialog - history -->
	<div class="modal fade" id="model_tb_txnhistory2" role="dialog">
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
												id="search_modal_tab2_A" class="form-control input-sm"></label>
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



<!----------------------------------------------------------->	
</body>
</html>
