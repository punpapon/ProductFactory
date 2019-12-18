<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
</head>
<body>
	<div class="panel-body">
		<div class="panel panel-primary">
			<div class="panel-heading">
			
			</div>
			<div class="panel-body">
				<div class="panel panel-primary">
					<div class="panel-heading" align="left">
						<p class="margin0">
							<B>ระบุเงื่อนไข</B>
						</p>
					</div>
					<div class="panel-body">
						<div class="row">
							<div class="col-sm-2" style="padding-right: 0px;">
								<label class="text-right">ตารางภาคผนวก<br>ที่ต้องย้ายผลิตภัณฑ์</label>
							</div>
							<div class="col-sm-10">
								<table class="table table-striped table-bordered text-center" id="tb_changing_appendix" width="100%">
									<tr>
										<td width="10%" style="padding-left:5px; height:50px; overflow:hidden; "></td>
										<td width="54%" style="padding-left:5px; height:50px; overflow:hidden; "></td>
										<td width="12%" style="padding-left:5px; height:50px; overflow:hidden; "></td>
										<td width="12%" style="padding-left:5px; height:50px; overflow:hidden; "></td>
										<td width="12%" style="padding-left:5px; height:50px; overflow:hidden; "></td>
									</tr>
								</table>
							</div>
						</div>
						<div class="row">
							<div class="col-sm-2">
								<input type="button" class="btn btn-primary width100" onclick="choose_Appendix_From();"  data-toggle="modal" value="เลือก"/>
							</div>
						</div>
					</div>
				</div>
				<div class="panel panel-primary">
					<div class="panel-heading">
						<p class="amrgin0">
							<B>แสดงรายการ ผลิตภัณฑ์ที่มีการใช้ ตารางภาคผนวก แบ่งกลุ่มข้อมูลตามช่องทาง และ partner</B>
						</p>
					</div>
					<div class="panel-body">
						<div class="row">
							<div class="col-sm-18">
								<table class="table table-striped table-bordered text-center"
								id="tb_manage_appendix" >
									<thead>
										<tr>
											<th width="40%" class="text-center bg-primary vertical-middle" colspan="5">รายการที่ต้องย้ายตาราง</th>
											<th width="60%" class="text-center bg-primary vertical-middle" colspan="7">ข้อมูลย้ายตารางใหม่</th>
										</tr>
										<tr>
											<th width="3%" class="text-center bg-primary vertical-middle"></th>
											<th width="12%" class="text-center bg-primary vertical-middle">ช่องทาง</th>
											<th width="12%" class="text-center bg-primary vertical-middle">Partner</th>
											<th width="12%" class="text-center bg-primary vertical-middle">ประเภทผลิตภัณฑ์</th>
											<th width="2%" class="text-center bg-primary vertical-middle">รายการ Product</th>
											<th width="8%" class="text-center bg-primary vertical-middle">ภาคผนวก</th>
											<th width="8%" class="text-center bg-primary vertical-middle">เวอร์ชั่น</th>
											<th width="18%" class="text-center bg-primary vertical-middle">วันที่เริ่ม</th>
											<th width="18%" class="text-center bg-primary vertical-middle">วันที่สิ้นสุด</th>
											<th width="5%" class="text-center bg-primary vertical-middle">จำนวน</th>
											<th width="5%" class="text-center bg-primary vertical-middle">สถานะ</th>
										</tr>	
									</thead>
									<tbody>
										<tr id="row_tb_manage_appendix_1"> 
											<td><input type="radio" class='checker panel_head_big' name="rd_manage_appendix" onchange="enable_bt_save_tab2(this);"/></td>
											<td><select id="channal_lookup1" class="form-control"><option value="ALL">All</option></select></td>
											<td><select id="partner_lookup1" class="form-control"><option value="ALL">All</option></select></td>
											<td><select id="cov_cat_lookup1" class="form-control"><option value="ALL">All</option></select></td>
											<td><input type='hidden' val=''><a class="active_grey"><span class="glyphicon glyphicon-circle-arrow-right" style="font-size: 25px"  
												data-toggle="modal" onclick="bt_pass_para_appendix(this);"></span></a></td>
											<td></td>
											<td><span></span><input type='hidden' value=''></td>
											<td><input type='text' id='start_date2' class="form-control " placeholder='dd/mm/yyyy'/></td>
											<td><input type='text' id='end_date2' class="form-control " placeholder='dd/mm/yyyy'/></td>
											<td></td>
											<td></td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div id="row_user_move" class="row">
							<div class="col-sm-5">
								<div class="col-sm-4" style="padding-left: 0px;">
								<input type="button" class="btn btn-primary width100" 
								id="bt_add_row_listAppendix"
								value="เพิ่ม" onclick="bt_add_row_listAppendixTab1();"/>
								</div>
								<div class="col-sm-4" style="padding-left: 0px;">
								<input type="button" class="btn btn-primary width100" 
								id="bt_delete_row_listAppendix"
								value="ลบ" onclick="bt_delete_row_listAppendixTab1();"/>
								</div>
								<div class="col-sm-4" style="padding-left: 0px;">
								</div>
								
							</div>
							<div class="col-sm-7">
								
								
 								<div class="col-sm-4" style="padding-right: 10px;padding-left: 60px;">
 								<input id="bt_req_row_listAppendix" 
 								class="btn btn-primary width100"
								value="ขออนุมัติ" data-target="#modal_req_approve2" 
								data-toggle="modal" />
								</div> 
 								<div class="col-sm-4" style="padding-right: 10px;padding-left: 0px;">
 								<input type="button" class="btn btn-primary width100" 
								id="bt_his_row_listAppendix"
								value="ประวัติการขออนุมัติ" onclick="bt_show_historyTab2();"/>
								</div> 
								
								<div class="col-sm-2" style="padding-right: 5px;padding-left: 0px;">
								<input type="button" class="btn btn-primary width100" 
								value="บันทึก"  
								onclick="validate_save_appendixTab2();" 
								
								id="bt_save_tab2"/>
								</div>
								<div class="col-sm-2" style="padding-right: 0px;padding-left: 5px;">
								<input type="button" class="btn btn-primary width100" 
								id="bt_cancel_row_listAppendixU"
								value="ยกเลิก"  onclick="enable_bt_Cancel();" />
								</div>
							</div>
						</div>
						
						<div id="row_super_move" class="row">
							<div class="col-sm-6">
								<div class="col-sm-3" style="padding-left: 0px;">
								</div>
								<div class="col-sm-3" style="padding-left: 0px;">
								</div>
								<div class="col-sm-5" style="padding-left: 0px;">
								</div>
								
							</div>
							<div class="col-sm-6">
								
								<div class="col-sm-3" style="padding-right: 0px;">
								</div>
								<div class="col-sm-3" style="padding-right: 0px;">
 								<input type="button" class="btn btn-primary width100" 
 								id="bt_approve_row_listAppendix"
 								value="อนุมัติ" data-target="#modal_approve2" data-toggle="modal"  
 								/>
 								</div> 
 								<div class="col-sm-3" style="padding-right: 0px;">
 								<input type="button" class="btn btn-primary width100" 
 								id="bt_not_approve_row_listAppendix"
 								value="ไม่อนุมัติ" data-target="#modal_not_approve2" 
 								data-toggle="modal" />
 								</div> 
								
								<div class="col-sm-3" style="padding-right: 0px;">
								<input type="button" class="btn btn-primary width100" 
								id="bt_cancel_row_listAppendix"
								value="ยกเลิก"  onclick="enable_bt_Cancel();" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<!-------------------------------------- dialog ------------------------------------>
	
	
	
		<!-- เพิ่มรายการตรวจ dialog - รายการตรวจเลือด -->
	<div class="modal fade" id="model_tb_checkListHeathFrom2" role="dialog">
		<div class="modal-dialog" style="width:80%">
			<div class="modal-content"  >
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title" align="center">
						เลือกค้นหา ต้นแบบ ตารางรายการตรวจสุขภาพตามทุนคุ้มครองตรวจสุขภาพ<span></span>
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
									<div class="col-sm-12" >
										<div class="dataTables_filter" style="padding-right:20px">
											<label>ค้นหา :<input type="search"
												id="search_tb_model_appendix" class="form-control input-sm"></label>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="panel panel-primary">
						<div class="panel-heading">
							<p class="margin0">
								<B>แสดงรายการ ตารางรายการตรวจสุขภาพตามทุนคุ้มครอง</B>
							</p>
						</div>
						<div class="panel-body" >
							<div class="row" style="width:100%">
							<table id="tb_model_appendix"
								class="table table-striped table-bordered text-center" >
								<thead >
									<tr >
												<th  class="text-center bg-primary vertical-middle" style="border-right-style: none;">เลือก</th>
												<th  class="text-center bg-primary vertical-middle" style="border-right-style: none;">ภาคผนวก</th>
												<th  class="text-center bg-primary vertical-middle" style="border-right-style: none;">ชื่อตารางภาคผนวกสำหรับสินค้าประเภท</th>
												<th  class="text-center bg-primary vertical-middle" style="border-right-style: none;">เวอร์ชั่น</th>
												<th  class="text-center bg-primary vertical-middle" style="border-right-style: none;">วันที่เริ่มใช้ตาราง</th>
												<th  class="text-center bg-primary vertical-middle" style="border-right-style: none;">วันที่สิ้นสุดใช้ตาราง</th>
												
												
<!-- 												<th width="5%" class="text-center bg-primary vertical-middle"></th> -->
<!-- 												<th width="10%" class="text-center bg-primary vertical-middle">ภาคผนวก</th> -->
<!-- 												<th width="45%" class="text-center bg-primary vertical-middle">ชื่อตารางภาคผนวกสำหรับสินค้าประเภท</th> -->
<!-- 												<th width="10%" class="text-center bg-primary vertical-middle">เวอร์ชั่น</th> -->
<!-- 												<th width="15%" class="text-center bg-primary vertical-middle">วันที่เริ่มใช้ตาราง</th> -->
<!-- 												<th width="15%" class="text-center bg-primary vertical-middle">วันที่สิ้นสุดใช้ตาราง</th> -->
									
									</tr>
								</thead>
								<tbody>
									
									
								</tbody>
							</table>
							<div class="text-center" style="padding: 10px 0"></div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-8 text-right"></div>
						<div class="col-sm-2" style="padding-left: 0px;">
							<button type="button" class="btn btn-primary width100"
							     data-toggle="modal" data-dismiss="modal"
								onclick="bt_save_original_appendix_V02();" >ตกลง</button>
						</div>
						<div class="col-sm-2" style="padding-left: 0px;">
							<button type="button" class="btn btn-primary width100" data-dismiss="modal">ยกเลิก</button>
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
									<div class="col-sm-12" >
										<div class="dataTables_filter" >
											<label>ค้นหา :<input type="search"
												id="search_modal_tab22" class="form-control input-sm"></label>
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
<!-- 					<div class="row"> -->
<!-- 						<div class="col-sm-8 text-right"></div> -->
<!-- 						<div class="col-sm-2" style="padding-left: 0px;"> -->
<!-- 							<button type="button" class="btn btn-primary width100" -->
<!-- 							     data-toggle="modal" data-dismiss="modal" -->
<!-- 								onclick="bt_save_original_appendix();" >ตกลง</button> -->
<!-- 						</div> -->
<!-- 						<div class="col-sm-2" style="padding-left: 0px;"> -->
<!-- 							<button type="button" class="btn width100" data-dismiss="modal">ยกเลิก</button> -->
<!-- 						</div> -->
<!-- 					</div> -->
				</div>
			</div>
		</div>
	</div>
<!-- dialog : ค้นหาตารางรายการตรวจสุขภาพตามทุนคุ้มครองปลายทาง -->
	<div class="modal fade" id="model_tb_checkListHeathTo" role="dialog">
		<div class="modal-dialog" style="width:80% ;height: 90%">
			<div class="modal-content" style="height: 90%" >
				<div class="modal-header" style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title" align="left">เลือกค้นหา เป้าหมาย ตารางรายการตรวจสุขภาพตามทุนคุ้มครองตรวจสุขภาพ<span></span></h4>
				</div>
				<div class="modal-body" style="height: 90%">
				<div class="ex1" style="height: 90%">	
					<div class="panel panel-primary">
						<div class="panel-heading">
							<p class="margin0">
								<B>ระบุเงื่อนไขแสดงข้อมูล</B>
							</p>
						</div>
						<div class="panel-body">
							<div class="dataTables_wrapper form-inline dt-bootstrap no-footer " >
								<div class="row">
									<div class="dataTables_filter" style="padding-right:23px">
												<label>ค้นหา :<input type="search" id="search_tb_model_appendix2"
												class="form-control input-sm"></label>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="panel panel-primary">
						<div class="panel-heading">
							<p class="margin0">
								<B>แสดงรายการ ตารางรายการตรวจสุขภาพตามทุนคุ้มครอง</B>
							</p>
						</div>
						<div class="panel-body">
							<div class="row">
								<div class="col-sm-12">
									<table class="table table-striped table-bordered text-center" id="tb_model_appendix2" width="100%">
										<thead>
											<tr>
												<th width="5%" class="text-center bg-primary vertical-middle">เลือก</th>
												<th width="10%" class="text-center bg-primary vertical-middle">ภาคผนวก</th>
												<th width="55%" class="text-center bg-primary vertical-middle">ชื่อตารางภาคผนวกสำหรับสินค้าประเภท</th>
												<th width="10%" class="text-center bg-primary vertical-middle">เวอร์ชั่น</th>
												<th width="10%" class="text-center bg-primary vertical-middle">วันที่เริ่มใช้ตาราง</th>
												<th width="10%" class="text-center bg-primary vertical-middle">วันที่สิ้นสุดใช้ตาราง</th>
											</tr>
										</thead>
										<tbody>
											
										</tbody>
									</table>
								</div>
							</div>
							
						</div>
					</div>
					</div>
					<br clear="all">
					<div class="row">
						<div class="col-sm-12">
							<div class="col-sm-6"></div>
							<div class="col-sm-6">
								<div class="col-sm-4"></div>
								<div class="col-sm-4" style="padding-right:0px"><input type="button" id="bt_confirm_modalSearchTable" data-dismiss="modal" class="btn btn-primary width100" value="ตกลง" onclick="bt_save_pretarget_appendix();" data-dismiss="modal"/></div>
								<div class="col-sm-4" style="padding-right:0px"><input type="button" class="btn btn-primary width100" data-dismiss="modal" value="ยกเลิก"/></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	
	<!-- dialog - ยืนยันบันทึก -->
	<div class="modal fade" id="modal_approved" role="dialog">
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
						<B>ต้องการบันทึก ใช่หรือไม่?</B>
					</p>
				</div>
				<div class="text-center" style="padding: 10px 0"></div>
				<div class="row" align="center">
					<button type="button" onclick="bt_save_listAppendixTab2();" class="btn btn-primary" data-dismiss="modal">ยืนยัน</button>
					<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
				</div>
			</div>
			</div>
		</div>
	</div>
	<!-- dialog - บันทึก -->
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
						<B>ท่านต้องการยืนยันการบันทึก</B>
					</p>
				</div>
				<div class="text-center" style="padding: 10px 0"></div>
				<div class="row" align="center">
					<button type="button" onclick="bt_save_listAppendixTab2();" class="btn btn-primary" data-dismiss="modal">ยืนยัน</button>
					<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
				</div>
			</div>
			</div>
		</div>
	</div>
	<!-- dialog - ขออุมัติ -->
	<div class="modal fade" id="modal_req_approve2" role="dialog">
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
						<B>ท่านต้องการยืนยันการขออนุมัติ</B>
					</p>
				</div>
				<div class="text-center" style="padding: 10px 0"></div>
				<div class="row" align="center">
					<button type="button" onclick="bt_req_approve_listAppendixTab2();" class="btn btn-primary" data-dismiss="modal">ยืนยัน</button>
					<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
				</div>
			</div>
			</div>
		</div>
	</div>
	<!-- dialog - ขออุมัติ -->
	<div class="modal fade" id="modal_approve2" role="dialog">
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
						<B>ท่านต้องการยืนยันการอนุมัติ</B>
					</p>
				</div>
				<div class="text-center" style="padding: 10px 0"></div>
				<div class="row" align="center">
					<button type="button" onclick="bt_approve_listAppendixTab2();" class="btn btn-primary" data-dismiss="modal">ยืนยัน</button>
					<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
				</div>
			</div>
			</div>
		</div>
	</div>
	<!-- dialog - บันทึก -->
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
						<B>ระบบทำการบันทึกเรียบร้อยแล้ว</B>
					</p>
				</div>
				<div class="text-center" style="padding: 10px 0"></div>
				<div class="row" align="center">
					<button type="button" id="bt_confirm" class="btn btn-primary" data-dismiss="modal">ปิด</button>
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
							<B>ระบุเหตุผลไม่อนุมัติย้ายภาคผนวก</B>
						</p>
					</div>
					<div class="row">
						<textarea id="textarea_reason_back2" maxlength="100"  style="width:100%" rows="7" cols="2"></textarea>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row" align="center">
						<button type="button" class="btn btn-primary" 
						onclick="bt_not_approve_listAppendixTab2();" data-dismiss="modal"	 >ยืนยัน</button>
						<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
					</div>
				</div>
			</div>
			</div>
		</div>
	</div>
	<!-- dialog : ค้นหาตารางรายการตรวจสุขภาพตามทุนคุ้มครอง -->
	<div class="modal fade" id="modal_listProduct"  role="modal" style="height:100%">
	
		<div class="modal-dialog" style="width:90%;height:60%" >
			<div class="modal-content">
				<div class="modal-header" style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title" align="left">ย้ายไปภาคผนวก<span></span></h4>
				</div>
				<div class="modal-body">
					<div style="overflow-y:scroll; height:550px;">
						<div class="panel panel-primary">
						<div class="panel-heading">
							<p class="margin0">
								<B>ระบุเงื่อนไข</B>
							</p>
						</div>
						<div class="panel-body">
							<div class="dataTables_wrapper form-inline dt-bootstrap no-footer">
								<div class="row">
									<div class="col-sm-2" style="padding-right: 0px;">
									<label class="text-right">ตารางภาคผนวกที่ต้องการเปลี่ยนใหม่</label>
									</div>
									<div class="col-sm-10">
										<table class="table table-striped table-bordered text-center" id="tb_prechanging_appendix" width="100%">
											<tr>
												<td width="10%" style="padding-left:5px; height:50px; overflow:hidden; "></td>
												<td width="54%" style="padding-left:5px; height:50px; overflow:hidden; "></td>
												<td width="12%" style="padding-left:5px; height:50px; overflow:hidden; "></td>
												<td width="12%" style="padding-left:5px; height:50px; overflow:hidden; "></td>
												<td width="12%" style="padding-left:5px; height:50px; overflow:hidden; "></td>
											</tr>
										</table>
									</div>
								</div>
								<div class="row">
									<div class="col-sm-2">
										<input type="button"  class="btn btn-primary width100" 
										id="bt_choose_Appendix_To"
										data-toggle="modal" data-dismiss="modal"  
										onclick="choose_Appendix_To();"
										value="เลือก"/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="panel panel-primary">
						<div class="panel-heading">
							<p class="margin0">
								<B>แสดงรายการ ผลิตภัณฑ์ ที่ต้องการกำหนดเปลี่ยนใช้ตารางใหม่</B>
							</p>
						</div>
						<div class="panel-body">
							<div class="dataTables_wrapper form-inline dt-bootstrap no-footer">
								<div class="panel-body">
								<div class="row">
									<div class="col-sm-12">
										<label>จำนวน Product ทั้งหมด&nbsp;</label><input  type="text" id="product_count" class="form-control" size="10">&nbsp;<label>รายการ</label>
									</div>
								</div>
								</div>
							</div>
							<div class="text-center" style="padding:10px;"></div>
							<div class="row" style="width:100%">
								<div class="col-sm-12" style="width:100%">
									<table class="table table-striped table-bordered text-center" 
									id="tb_product_related" style="width:100%" >
										<thead style="width:100%">
											<tr style="width:100%" >
												<th class="text-center bg-primary vertical-midddle" 
												style="border-right: none;border-left:none;">เลือก</th>
												<th  class="text-center bg-primary vertical-midddle" style="border-right: none;border-left:none;">รหัสผลิตภัณฑ์</th>
												<th  class="text-center bg-primary vertical-midddle" style="border-right: none;border-left:none;">ชื่อผลิตภัณฑ์(ไทย)</th>
												<th  class="text-center bg-primary vertical-midddle" style="border-right: none;border-left:none;">ชื่อทางการตลาด(ไทย)</th>
											</tr>
										</thead>
										<tbody>
											
										</tbody>
									</table>
								</div>
							</div>
							
						</div>
					</div> 
					</div>
					<br clear="all">
					<div class="row">
							<div class="col-sm-12">
								<div class="col-sm-6">
								<div class="col-sm-4" style="padding-left:0px">
								<input type="button" 
								id="bt_select_all"
								class="btn btn-primary width100"
								onclick="select_all();" value="เลือกทั้งหมด"/></div>
								<div class="col-sm-4"></div>
								<div class="col-sm-4"></div>
								</div>
								<div class="col-sm-6">
									<div class="col-sm-4"></div>
									<div class="col-sm-4" style="padding-right:0px"><input type="button" class="btn btn-primary width100" 
									data-dismiss="modal" value="ตกลง" id="bt_modal_listProduct_save" "/></div>
									<div class="col-sm-4" style="padding-right:0px"><input type="button" class="btn btn-primary width100"
									 data-dismiss="modal" value="ยกเลิก"/></div>
								</div>
							</div>
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
						<B>ต้องการขออนุมัติ ใช่หรือไม่?</B>
					</p>
				</div>
				<div class="text-center" style="padding: 10px 0"></div>
				<div class="row" align="center">
					<button type="button" class="btn btn-primary" >ยืนยัน</button>
					<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
				</div>
			</div>
			</div>
		</div>
	</div>
	
	<div id="modal_warningTab2" class="modal fade " >
          <div class="modal-dialog">
              <div class="modal-body" >
                <div class="box box-danger box-solid  " >
                  <div class="box-header">
                    เเจ้งเตือน
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span></button>
                  </div>
                  <div id="txt_alert_errorTab2" class="box-body">
                    ไม่พบข้อมูล
            		</div>
                </div>
              </div>
          </div>
        </div>
	
	
		<!-- dialog - ยืนยันการลบ -->
	<div class="modal fade" id="modal_delete" role="dialog">
		<div class="modal-dialog">
			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title" align="left">ยืนยันการลบข้อมูล<span></span></h4>
				</div>
			<div class="modal-body">
				<div class="row" align="center">
					<p class="margin0">
						<B>ต้องการลบ ใช่หรือไม่?</B>
					</p>
				</div>
				<div class="text-center" style="padding: 10px 0"></div>
				<div class="row" align="center">
					<button type="button" class="btn btn-primary" data-dismiss="modal" onclick="bt_CF_delete_row_listAppendixTab1();" >ยืนยัน</button>
					<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
				</div>
			</div>
			</div>
		</div>
	</div>
</body>
<input id="channal_lookup" type="hidden" >
<input id="partner_lookup" type="hidden" >
<input id="cov_cat_lookup" type="hidden" >

<input id="arr_product" type="hidden">
</html>
