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
		<div class="row box-body" id="div_main_menuOL_9">
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
							<input type="radio" name="rd_endorseMatch_OL[]" id="rd_endorseMatch_OL1" value="ไม่ระบุ" checked onclick="check_rd_endorse_OL(1);">
							<label for="rd_endorseMatch_OL1" class="label_input2">ไม่ระบุ</label>
						</div>
						<div class="col-sm-9 padding_all5">
							<input type="radio" name="rd_endorseMatch_OL[]" id="rd_endorseMatch_OL2" value="ระบุ" onclick="check_rd_endorse_OL(2);">
							<label for="rd_endorseMatch_OL2" class="label_input2">ระบุ</label>
						</div><br clear="all">
						<div class="col-sm-10 margin_auto padding_all2 displayNone" id="endorse_Baseplan_OL">
							<h5 class="font-term-purple font-bold">ความคุ้มครองสัญญาหลัก</h5>
							<div id="div_BaseplanSelect_OL">
								<table id="tbl_baseplanSelect_OL" class="table table-bordered" style="width:100%;">
								<thead>
									<tr>
										<th class="text-center verticalCenter bg-term-purple" width="70">เลือก</th>																				
										<th class="text-center verticalCenter bg-term-purple" width="250">รหัสความคุ้มครองสัญญาหลัก</th>
										<th class="text-center verticalCenter bg-term-purple" width="250">ชื่อ (ไทย)</th>							
									</tr>
								</thead>
								<tbody>
								</tbody>							
							</table>
							</div>
							<div class="col-sm-10 style_basic_div1">
									<div class="col-md-2" style="padding-right: 0">
										<input class="btn btn-primary width100" type="button" id="selectBasePlan_OL" value="เลือก" data-toggle="modal">
									</div>
									<div class="col-md-2" style="padding-right: 0">
										<input class="btn btn-primary width100" type="button" id="delBasePlan_OL" value="ลบ" onclick="deleteBaseplan_OL();">
									</div>
									<div class="col-md-8"></div>
							</div><br clear="all">
						</div>
						<!-- rider -->
						<div class="col-sm-10 margin_auto padding_all2 displayNone" id="endorse_Rider_OL">
							<h5 class="font-term-green font-bold">ความคุ้มครองสัญญาเพิ่มเติม</h5>
							<div id="div_RiderSelect_OL">
								<table id="tbl_riderSelect_OL" class="table table-bordered" style="width:100%;">
								<thead>
									<tr>
										<th class="text-center verticalCenter bg-term-green" width="70">เลือก</th>																				
										<th class="text-center verticalCenter bg-term-green" width="250">รหัสความคุ้มครองสัญญาเพิ่มเติม</th>
										<th class="text-center verticalCenter bg-term-green" width="250">ชื่อ (ไทย)</th>							
									</tr>
								</thead>
								<tbody>
								</tbody>							
							</table>
							</div>
							<div class="col-sm-10 style_basic_div1">
									<div class="col-md-2" style="padding-right: 0">
										<input class="btn btn-primary width100" type="button" id="selectRider_OL" value="เลือก" data-toggle="modal">
									</div>
									<div class="col-md-2" style="padding-right: 0">
										<input class="btn btn-primary width100" type="button" id="delRider_OL" value="ลบ" onclick="deleteRider_OL();">
									</div>
									<div class="col-md-8"></div>
							</div><br clear="all">
						</div>
					</div>					  
				  </div>
				</div>

			    <!-- รายการบันทึกสลักหลัง -->
				<div id="record_OL">
						<div class="text-center" style="padding: 20px 0"></div>
						<div id="div_recordOL">
						<input type="hidden" id="endorse_bnf_id_OL" value="">
						<table class="table table-bordered borderBlack" id="record_Table_OL" style="width:100%;">
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
									<a class="open-endorseDialog_OL" data-toggle="modal" href="#modal_endorsement_OL">
										<button class="btn btn-primary width100">เพิ่มรายการ</button>
									</a>
									<!-- <button class="btn btn-primary width100" 
										    data-dismiss="modal" data-toggle="modal" data-target="#modal_endorsement_CL">เพิ่มรายการ</button> -->
								</div>
								<div class="col-md-6">
									<button class="btn btn-primary width100" onclick="confirmDeleteRecord_OL();">ลบรายการ</button>
								</div>
							</div>
							<div class="col-md-4"></div>
							<div class="col-md-4">
								<div class="col-md-6">
									<button class="btn btn-primary width100" onclick="bt_record_OL_Confirm();">บันทึก</button>
								</div>
								<div class="col-md-6" style="padding-right: 0">
									<button class="btn btn-primary width100" data-dismiss="modal" data-toggle="modal"
											data-target="#cancelBoxOL_Record">ยกเลิก</button>
								</div>
							</div>
						</div>
					</div>
					
		</div>
		</div>		
		<!-- end panel body -->		
		</div>
	
	<!-- เลือกแบบประกันหลัก -->
	<div class="modal fade" id="modal_selectBaseplan_OL" role="dialog">
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
						style="width: 100%" id="tb_SelectBaseplan_modal_OL">
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
					data-dismiss="modal" onclick="bt_save_Baseplan_OL();">ตกลง</button>
					<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
				</div>
			</div>
		</div>
	</div>
	
	<!-- เลือกสัญญาเพิ่มเติม -->
	<div class="modal fade" id="modal_selectRider_OL" role="dialog">
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
						style="width: 100%" id="tb_SelectRider_modal_OL">
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
					data-dismiss="modal" onclick="bt_save_Rider_OL();">ตกลง</button>
					<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
				</div>
			</div>
		</div>
	</div>
			
	<!-- เลือกรายการบันทึกสลักหลัง -->				
	<div class="modal fade" id="modal_endorsement_OL" role="dialog">
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
						<div class="datatbl_endorsement_OL">
						<!-- tbl -->
						<table class="table table-bordered" id="tbl_endorsement_OL">
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
								<button type="button" class="btn btn-primary" id="btn_saveSelectRecord_OL" onclick="saveSelectRecord_OL();">ตกลง</button>						
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
	<div id="cancelBoxOL_Record" class="modal fade bd-example-modal-sm"
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