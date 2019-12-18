<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>บันทึกสลักหลัง</title>

</head>
<body>
<!-- <form class="form-horizontal"> -->
		<div class="row box-body" id="div_main_menuCL_9">
			<div class="panel panel-primary">
				<div class="panel-heading text-left">
					<p class="margin0 text-center">
						<b>บันทึกสลักหลัง</b>
					</p>
				</div>
			<div class="panel-body">
				<!-- Plan -->
				<div class="panel panel-default">
				  <div class="panel-heading">การใช้บันทึกสลักหลังคู่กับ</div>
				  <div class="panel-body">
				  	<div class="row">
						<div class="col-sm-9 padding_all5">
							<input type="radio" name="rd_endorseMatch_CL[]" id="rd_endorseMatch_CL1" value="ไม่ระบุ" checked onclick="check_rd_endorse(1);">
							<label for="rd_endorseMatch_CL1" class="label_input2">ไม่ระบุ</label>
						</div>
						<div class="col-sm-9 padding_all5">
							<input type="radio" name="rd_endorseMatch_CL[]" id="rd_endorseMatch_CL2" value="ระบุ" onclick="check_rd_endorse(2);">
							<label for="rd_endorseMatch_CL2" class="label_input2">ระบุ</label>
						</div><br clear="all">
						<div class="col-sm-10 margin_auto padding_all2 displayNone" id="endorse_Baseplan_CL">
							<h5 class="font-term-purple font-bold">แบบประกันหลัก</h5>
							<div id="div_BaseplanSelect">
								<table id="tbl_baseplanSelect" class="table table-bordered" style="width:100%;">
								<thead>
									<tr>
										<th class="text-center verticalCenter bg-term-purple" width="70">เลือก</th>																				
										<th class="text-center verticalCenter bg-term-purple" width="250">รหัสแบบประกันหลัก</th>
										<th class="text-center verticalCenter bg-term-purple" width="250">ชื่อ (ไทย)</th>							
									</tr>
								</thead>
								<tbody>
								</tbody>							
							</table>
							</div>
							<div class="col-sm-10 style_basic_div1">
									<div class="col-md-2" style="padding-right: 0">
										<input class="btn btn-primary width100" type="button" id="selectBasePlan" value="เลือก" data-toggle="modal">
									</div>
									<div class="col-md-2" style="padding-right: 0">
										<input class="btn btn-primary width100" type="button" id="delBasePlan" value="ลบ" onclick="deleteBaseplan();">
									</div>
									<div class="col-md-8"></div>
							</div><br clear="all">
						</div>
						<!-- rider -->
						<div class="col-sm-10 margin_auto padding_all2 displayNone" id="endorse_Rider_CL">
							<h5 class="font-term-green font-bold">สัญญาเพิ่มเติม</h5>
							<div id="div_RiderSelect">
								<table id="tbl_riderSelect" class="table table-bordered" style="width:100%;">
								<thead>
									<tr>
										<th class="text-center verticalCenter bg-term-green" width="70">เลือก</th>																				
										<th class="text-center verticalCenter bg-term-green" width="250">รหัสสัญญาเพิ่มเติม</th>
										<th class="text-center verticalCenter bg-term-green" width="250">ชื่อ (ไทย)</th>							
									</tr>
								</thead>
								<tbody>
								</tbody>							
							</table>
							</div>
							<div class="col-sm-10 style_basic_div1">
									<div class="col-md-2" style="padding-right: 0">
										<input class="btn btn-primary width100" type="button" id="selectRider" value="เลือก" data-toggle="modal">
									</div>
									<div class="col-md-2" style="padding-right: 0">
										<input class="btn btn-primary width100" type="button" id="delRider" value="ลบ" onclick="deleteRider();">
									</div>
									<div class="col-md-8"></div>
							</div><br clear="all">
						</div>
					</div>					  
				  </div>
				</div>

			    <!-- รายการบันทึกสลักหลัง -->
				<div id="record_CL">
						<div class="text-center" style="padding: 20px 0"></div>
						<div id="div_recordCL">
						<input type="hidden" id="endorse_bnf_id" value="">
						<table class="table table-bordered borderBlack" id="record_Table_CL" style="width:100%;">
							<thead>
								<tr>
									<th class="text-center bg-primary borderBlack" width="5" style="vertical-align: middle;"></th>	
									<th class="text-center bg-primary borderBlack" width="5" style="vertical-align: middle;">ลำดับ</th>							
									<th class="text-center verticalCenter bg-primary borderBlack" width="400">รายการขยายความคุ้มครอง</th>							
								</tr>
							</thead>
							<tbody>
							</tbody>							
						</table>
						</div>

						<div class="text-center" style="padding: 10px 0"></div>

						<div class="text-center" style="padding: 10px 0"></div>
						<div class="row">
							<div class="col-md-4">
								<div class="col-md-6" style="padding-left: 0;">
									<a class="open-endorseDialog" data-toggle="modal" href="#modal_endorsement_CL">
										<button class="btn btn-primary width100">เพิ่มรายการ</button>
									</a>
									<!-- <button class="btn btn-primary width100" 
										    data-dismiss="modal" data-toggle="modal" data-target="#modal_endorsement_CL">เพิ่มรายการ</button> -->
								</div>
								<div class="col-md-6">
									<button class="btn btn-primary width100" onclick="confirmDeleteRecord_CL();">ลบรายการ</button>
								</div>
							</div>
							<div class="col-md-4"></div>
							<div class="col-md-4">
								<div class="col-md-6">
									<button class="btn btn-primary width100" onclick="bt_record_CL_Confirm();">บันทึก</button>
								</div>
								<div class="col-md-6" style="padding-right: 0">
									<button class="btn btn-primary width100" data-dismiss="modal" data-toggle="modal"
											data-target="#cancelBoxCL_Record">ยกเลิก</button>
								</div>
							</div>
						</div>
					</div>
					
		</div>
		</div>		
		<!-- end panel body -->		
		</div>
	
	<!-- เลือกแบบประกันหลัก -->
	<div class="modal fade" id="modal_selectBaseplan" role="dialog">
		  <div class="modal-dialog modal-lg">
			<div class="panel panel-primary">
				<div class="panel-heading text-left">
				   <button type="button" class="close" data-dismiss="modal">&times;</button>
				   <h4 class="modal-title">เลือก : แบบประกันหลัก</h4>
				</div>
			<div class="modal-body">
				<div class="row" style="padding: 10px 0"></div>
				 	<div class="box-body">
						<table class="table table-striped table-bordered" 
						style="width: 100%" id="tb_SelectBaseplan_modal">
							<thead>
							 	<tr class="bg-primary">
									<th class="text-center col-md-1" style="border-right-style: none;">เลือก</th>
									<th class="text-center col-md-2" style="border-right-style: none;">รหัส</th>
									<th class="text-center col-md-6" style="border-right-style: none;">ชื่อ</th>
								</tr>
							</thead>
							<tbody>
							</tbody>
						</table>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-primary"
					data-dismiss="modal" onclick="bt_save_Baseplan();">ตกลง</button>
					<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
				</div>
			</div>
		</div>
	</div>
	
	<!-- เลือกสัญญาเพิ่มเติม -->
	<div class="modal fade" id="modal_selectRider" role="dialog">
		  <div class="modal-dialog modal-lg">
			<div class="panel panel-primary">
				<div class="panel-heading text-left">
				   <button type="button" class="close" data-dismiss="modal">&times;</button>
				   <h4 class="modal-title">เลือก : สัญญาเพิ่มเติม</h4>
				</div>
			<div class="modal-body">
				<div class="row" style="padding: 10px 0"></div>
				 	<div class="box-body">
						<table class="table table-striped table-bordered" 
						style="width: 100%" id="tb_SelectRider_modal">
							<thead>
							 	<tr class="bg-primary">
									<th class="text-center col-md-1" style="border-right-style: none;">เลือก</th>
									<th class="text-center col-md-2" style="border-right-style: none;">รหัส</th>
									<th class="text-center col-md-6" style="border-right-style: none;">ชื่อ</th>
								</tr>
							</thead>
							<tbody>
							</tbody>
						</table>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-primary"
					data-dismiss="modal" onclick="bt_save_Rider();">ตกลง</button>
					<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
				</div>
			</div>
		</div>
	</div>
			
	<!-- เลือกรายการบันทึกสลักหลัง -->				
	<div class="modal fade" id="modal_endorsement_CL" role="dialog">
		<div class="modal-dialog modal-lg">

			<!-- Modal content-->			
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">กรุณาเลือกรายการบันทึกสลักหลัง</h4>
				</div>
				<div class="modal-body">				
				
				<!-- รายการบันทึกสลักหลัง -->
				<div class="table_width1">
					<div class="row">
						<div class="datatbl_endorsement_CL">
						<!-- tbl -->
						<table class="table table-bordered" id="tbl_endorsement_CL">
							<thead>
								<tr class="bg-primary">
									<th class="text-center" width="10%" style="border-right:none; vertical-align:middle;">เลือก</th>
									<th class="text-center" width="20%" style="border-right:none;">รหัส</th>
									<th class="text-center" width="70%" style="vertical-align:middle;">บันทึกสลักหลัง</th>									
								</tr>
							</thead>
							<tbody>
								
							</tbody>
						</table>
						<div class="text-center" style="padding: 10px 0"></div>	
						<!-- button -->
						<div class="row" align="center">						
								<button type="button" class="btn btn-primary" id="btn_saveSelectRecord_CL" onclick="saveSelectRecord_CL();">ตกลง</button>						
								<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>												
						</div>
						</div>				
					</div>							
				</div>				
				</div>
			</div>
		</div>
	</div>
	
	<!-- ปุ่มยกเลิก -->
	<div id="cancelBoxCL_Record" class="modal fade bd-example-modal-sm"
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
							<label>ท่านต้องการยกเลิกการสร้างหรือไม่<br>หากต้องการยกเลิก
								ให้กด ยืนยัน <br> ระบบจะไม่ทำการบันทึกข้อมูลการสร้างนี้
							</label>
						</div>
						<div class="text-center" style="padding: 10px 0"></div>
						<div class="row">
							<div class="col-md-3"></div>
							<div class="col-md-2">
								<button type="button" class="btn btn-primary" onclick="cancelPage('rider_plan.jsp');">ยืนยัน</button>
							</div>
							<div class="col-md-1"></div>
							<div class="col-md-2">
								<button type="button" class="btn btn-primary"
									data-dismiss="modal">ยกเลิก</button>
							</div>
							<div class="col-md-4"></div>
						</div>
						<div class="text-center" style="padding: 10px 0"></div>
					</div>
				</div>
			</div>	
			
	<!-- </form> -->
</body>
</html>