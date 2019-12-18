<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<style>

</style>
<body>
	<form class="form-horizontal">
		<div class="row box-body" >
		<div class="panel-body">
		<div class="panel panel-primary">
			<div class="panel-heading" align="center">
				<p class="margin0">
						<B>รายละเอียดข้อมูลตารางภาคผนวก</B>		
				</p>
			</div>
			<div class="panel-body">
				<div class="row box-body" id="form_ageCapitalProtectionTab1">
				<div class="row">
					<div class="col-sm-3" align="right"><label>ตารางภาคผนวก&nbsp;<font style="color:red">*</font></label></div>
					<div class="col-sm-2"><input type="text" maxlength="5"  class="form-control" id="appendixValueName" " /></div>
					<div class="col-sm-2"><input type="text" maxlength="3"  class="form-control" id="appendixValue" " /></div>
					
				</div>
				<div class="row" style="padding-top : 15px;">
					<div class="col-sm-3" align="right"><label>ชื่อตารางภาคผนวก&nbsp;<font style="color:red">*</font></label></div>
					<div class="col-sm-7"> <textarea maxlength="200" class="form-control" rows="2" id="appendixName"></textarea></div> 
				</div>
				
				<div class="row" style="padding-top : 15px;">
					<div class="col-sm-3" align="right"><label>ชื่อเอกสารเวอร์ชั่น&nbsp;<font style="color:red">*</font></label></div>
					<div class="col-sm-2"><input type="text" class="form-control" id="appendixVersionname"></div>
					<div class="col-sm-6"><font style="color:red"><label></label></font></div>
				</div>
				<div class="row" style="padding-top : 15px;">
					
					<div class="col-sm-3" align="right"><label>Sale Channal&nbsp;<font style="color:red"></font></label></div>
					<div class="col-sm-2">
					
							<select class="form-control" id="lb_saleChannel_CL" onchange="disable_agent_checkbox();" >
								<option data-id="NONE" value="NONE">None</option>										
							</select>
							
					</div>
					
					<div class="col-sm-2"><input type="radio" name="agent_radio"  id="sale_n"><label id="">Normal</label></div>
					<div class="col-sm-2"><input type="radio" name="agent_radio"  id="sale_q"><label id="">Q Up</label></div>
					<div class="col-sm-2"><input type="radio" name="agent_radio"  id="sale_t"><label id="">Topup</label></div>
					<div class="col-sm-2"><input type="checkbox"  id="sale_p"><label id="">Topup Plus</label></div>
					<div class="col-sm-2"><input type="checkbox"  id="sale_r"><label id="">Red Level</label></div>
	
				</div>
				<div class="row" style="padding-top : 15px;">
					<div class="col-sm-3" align="right"><label>วันที่ใช้ตาราง&nbsp;<font style="color:red">*</font></label></div>
					<div class="col-sm-6" style="padding-left: 0px;">
						<div class="col-sm-4" style="padding-right: 10px;">
							<!-- <div class='input-group date'  > -->
			                    <input   type='text' id='start_date' onclick="start_dateF();" onchange="set_to_dateF();" class="form-control" placeholder='dd/mm/yyyy'/>
			                    <!-- <span class="input-group-addon">
			                        <span class="glyphicon glyphicon-calendar"></span>
			                    </span> -->
		                	<!-- </div> -->
						</div>
						<div class="col-sm-1" style="padding-left: 18px;"><label> -</label></div>
						<div class="col-sm-4" >
							<!-- <div class='input-group date' > -->
			                    <input type='text' id='end_date' onclick="to_dateF();" class="form-control" placeholder='dd/mm/yyyy'/>
			                    <!-- <span class="input-group-addon">
			                        <span class="glyphicon glyphicon-calendar"></span>
			                    </span>
		                	</div> -->
						</div>
<!-- 						<div class="col-sm-2"><input type="button" class="btn btn-primary" value="ประวัติ" /></div>" -->
					</div>
				</div>
				<div class="row" style="padding-top: 15px;">
					<div class="col-sm-3" align="right"><label>หมายเหตุ ทุนคุ้มครองตั้งแต่&nbsp;<font style="color:red">*</font></label></div>
					<div class="col-sm-2"><input type="text" class="autoComma form-control" id="CoverageWarningAmt" onchange="change_capitalCoverage(this);"/></div>
					<div class="col-sm-7" style="padding-left: 0px;"><label>บาท ขึ้นไป ให้รับการตรวจที่สำนักงานใหญ่</label></div>
				</div>
				<div class="text-center" style="padding: 5px 0"></div> 
				<div id="form_ageCapitalProtection" 
				    class="panel panel-primary">
					<div class="panel-heading" align="center">
						<p class="margin0">
							<B>กำหนดช่วงอายุและทุนคุ้มครอง</B>
						</p>
					</div>
					<div class="panel-body">
						<div class="text-center" style="padding: 0px 0"></div>
						<div class="col-sm-6">
							<div class="panel panel-primary">
								<div class="panel-heading" align="center">
									<p class="margin0">
										<B>ช่วงอายุ(ปี)</B>
									</p>
								</div>
								<div class="panel-body">
									<table  id="tb_rangeAge" class="table table-bordered table-striped text-center" width="100%">
										<thead>
											<tr>
												<th width="7%" class="text-center bg-primary vertical-middle dis-border" style="border-left: none;border-right: none">เลือก</th>
												<th width="15%" class="text-center bg-primary vertical-middle dis-border" style="border-left: none;border-right: none">ช่วงที่</th>
												<th width="39%" class="text-center bg-primary vertical-middle dis-border" style="border-left: none;border-right: none">ตั้งแต่</th>
												<th width="39%" class="text-center bg-primary vertical-middle dis-border" style="border-left: none;border-right: none">ถึง</th>
											</tr>
										</thead>
										<tbody>
<!-- 											<tr> -->
<!-- 												<td><input id="rowAge1" type="checkbox" style="display:none;"/></td> -->
<!-- 												<td>1</td> -->
<!-- 												<td><input id="fromAge1" type="text" onkeyup="change_comma_age(this)"  class="autoComma form-control text-center change-text-tab2" style="width: 100%"/></td> -->
<!-- 												<td><input id="toAge1" type="text" onkeyup="change_comma_age(this)" class="autoComma form-control text-center change-text-tab2" style="width: 100%"/></td> -->
<!-- 											</tr> -->
										</tbody>
									</table>
									<div class="text-center" style="padding:4px;"></div>
									<div class="row">
										<div class="col-sm-12"><font style="color:red"><label></label></font></div>
									</div>
									<div class="row">
										<div class="col-sm-6">
											<div class="col-sm-6" style="padding-left: 0px;">
											<input id="bt_add_age" type="button" class="btn btn-primary width100" 
											onclick="bt_add_rowAge();" value="เพิ่ม"/></div>
											<div class="col-sm-6" style="padding-left: 0px;">
											<input id="bt_delete_age" type="button" class="btn btn-primary width100" 
											id="bt_delete_age"
											onclick="bt_delete_rowAge();" value="ลบ"/></div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-sm-6">
							<div class="panel panel-primary">
								<div class="panel-heading" align="center">
									<p class="margin0">
										<B>ทุนคุ้มครอง จำนวนเงิน(บาท)</B>
									</p>
								</div>
								<div class="panel-body">
									<table id="tb_capitalProtection" class="table table-striped table-bordered text-center" width="100%">
										<thead>
											<tr>
												<th width="10%" class="text-center bg-primary vertical-middle" style="border-left: none;border-right: none">เลือก</th>
												<th width="45%" class="text-center bg-primary vertical-middle" style="border-left: none;border-right: none">ตั้งแต่</th>
												<th width="45%" class="text-center bg-primary vertical-middle" style="border-left: none;border-right: none">ถึง</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
												<input id="rowCapital1" type="checkbox" style="display:none;" />
												<input type="hidden" value="1"/>
												</td>
												<td><input id="fromCapital1" type="text" class="autoComma form-control text-center change-row-tab2" style='width: 100%'  /></td>
												<td><input id="toCapital1" type="text" class="autoComma form-control text-center change-row-tab2" style='width: 100%'/></td>
											</tr>
										</tbody>
									</table>
									<div class="text-center" style="padding:0px;"></div>
									<div class="row">
										<div class="col-sm-12"><font style="color:red" size="2"><label>หมายเหตุ การระบุทุนคุ้มครอง ระบุได้ไม่เกิน 999,999,999 บาท</label></font></div>
									</div>
									<div class="row">
										<div class="col-sm-6">
											<div class="col-sm-6" style="padding-left: 0px;">
											<input id="bt_add_sum" type="button" class="btn btn-primary width100" 
											onclick="bt_add_rowCapital();" value="เพิ่ม"/></div>
											<div class="col-sm-6" style="padding-left: 0px;">
											<input id="bt_delete_sum" type="button" class="btn btn-primary width100" 
											id="bt_delete_cap"
											onclick="bt_delete_rowCapital();" value="ลบ"/></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				</div>
				<div id="page_002_2" style="display: none;">
					<%@include file="setting_tableAppendix_2.jsp"%>
				</div>

				
				<div id="row_user_appendix" class="row" style="padding-top : 0px;">
					<div class="col-sm-7" align="center">
						<div class="col-sm-1" style="padding-right: 88px; padding-left: 0px;">
							<input class="btn btn-primary width90" id="bt1_req_med" type="button" 
							data-target="#modal_req_approved" data-toggle="modal" value="ขออนุมัติ">
						</div>
						<div class="col-sm-2" style="padding-right: 0px; padding-left: 0px;">
							<input class="btn btn-primary width90"  id="bt1_his_med" type="button" 
							data-target="" data-toggle="modal" 
							onclick="bt_show_historyTab1();"
							value="ประวัติการขออนุมัติ">
						</div>
						<div class="col-sm-1" style="padding-right: 88px; padding-left: 0px;">
							<input class="btn btn-primary width90" id="bt1_req_edit_app" type="button" 
							data-target="#modal_req_edit_app" data-toggle="modal" value="ขอแก้ไข">
						</div>
						
					</div>
					<div class="col-sm-5" align="center">
						<div class="col-sm-1" style="padding-right: 70px; padding-left: 0px;">
							</div>
						<div class="col-sm-2" style="padding-right: 86px; padding-left: 0px;">
							</div>
					<!-- style="display: none;" -->
						
						<div class="col-sm-1" style="padding-right: 70px; padding-left: 55px;">
							<input class="btn btn-primary width90" id="bt1_submit_med" type="button" 
								
								onclick="validate_save_appendix();"
								data-toggle="modal" value="บันทึก" >
						</div>
						<div class="col-sm-1" style="padding-right: 0px; padding-left: 0px;">
							<input class="btn btn-primary width90" 
							id="bt1_cancel_med" 
							onclick="hide_PageSTA();" type="button" value="ยกเลิก">
						</div>
					</div>
				</div>
				
				<div id="row_super_appendix" class="row" style="padding-top : 0px;">
					<div class="col-sm-7" align="center">
						<div class="col-sm-1" style="padding-right: 88px; padding-left: 0px;">
						</div>
						<div class="col-sm-2" style="padding-right: 0px; padding-left: 0px;">
							</div>
						</div>
						<div class="col-sm-5" align="center">
						<div class="col-sm-1" style="padding-right: 70px; padding-left: 0px;">
							</div>
						<div class="col-sm-1" style="padding-right: 70px; padding-left: 55px;">
							<input class="btn btn-primary width90" id="bt1_appr_med" type="button" 
							data-target="#modal_approved" data-toggle="modal" value="อนุมัติ">
						</div>
						<div class="col-sm-2" style="padding-right: 86px; padding-left: 0px;">
							<input class="btn btn-primary width90" id="bt1_not_appr_med" type="button" 
							data-target="#modal_not_approve" data-toggle="modal" 
								 value="ไม่อนุมัติ">
						</div>
					<!-- style="display: none;" -->
						
						<div class="col-sm-1" style="padding-right: 0px; padding-left: 0px;">
							<input class="btn btn-primary width90" 
							id="bt1_cancel_med" 
							onclick="hide_PageSTA();" type="button" value="ยกเลิก">
						</div>
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
						<B>ต้องการอนุมัติ ใช่หรือไม่?</B>
					</p>
				</div>
				<div class="text-center" style="padding: 10px 0"></div>
				<div class="row" align="center">
					<button type="button" onclick="save_approve_appendix();" class="btn btn-primary" data-dismiss="modal" >ยืนยัน</button>
					<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
				</div>
			</div>
			</div>
		</div>
	</div>
	
	<!-- dialog - ยืนยันการบันทึก -->
	<div class="modal fade" id="modal_saved" role="dialog">
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
							<B>ยืนยันการบันทึก</B>
						</p>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row" align="center">
						<button type="button" class="btn btn-primary" data-dismiss="modal" onclick="save_appendix();">ยืนยัน</button>
					    <button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
				
					</div>
				</div>
			</div>
		</div>
	</div>
	
	
	<div id="modal_warning" class="modal fade " >
          <div class="modal-dialog">
              <div class="modal-body" >
                <div class="box box-danger box-solid  " >
                  <div class="box-header">
                    เเจ้งเตือน
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span></button>
                  </div>
                  <div id="txt_alert_error" class="box-body">
                    ไม่พบข้อมูล
            		</div>
                </div>
              </div>
          </div>
        </div>
        
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
						<B>ต้องการขออนุมัติใช่หรือไม่?</B>
					</p>
				</div>
				<div class="text-center" style="padding: 10px 0"></div>
				<div class="row" align="center">
					<button type="button" onclick="save_req_appendix();" class="btn btn-primary" data-dismiss="modal">ยืนยัน</button>
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
						<B>ต้องการขออนุมัติใช่หรือไม่?</B>
					</p>
				</div>
				<div class="text-center" style="padding: 10px 0"></div>
				<div class="row" align="center">
					<button type="button" onclick="save_req_appendix();" class="btn btn-primary" data-dismiss="modal">ยืนยัน</button>
					<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
				</div>
			</div>
			</div>
		</div>
	</div>
	
	
	 <!-- dialog - ยืนยันการขออนุมัติ -->
	<div class="modal fade" id="modal_req_edit_app" role="dialog">
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
						<B>ต้องการขอแก้ไขใช่หรือไม่?</B>
					</p>
				</div>
				<div class="text-center" style="padding: 10px 0"></div>
				<div class="row" align="center">
					<button type="button" onclick="save_req_edit_appendix();" class="btn btn-primary" data-dismiss="modal">ยืนยัน</button>
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
						onclick="save_not_approve_appendix();" data-dismiss="modal"	 >ยืนยัน</button>
						<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
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
<div class="row" style="padding-top : 0px;">
					<div class="col-sm-3" align="right"><label id="appendixVersion_label">เอกสารเวอร์ชั่น&nbsp;<font style="color:red">*</font></label></div>
					<div class="col-sm-3"><input type="number" onchange="set_default_version();" class="form-control" id="appendixVersion"></div>
					<div class="col-sm-6"><font style="color:red"><label></label></font></div>
</div>
<input id="Appendix_code_copy" 		type="hidden" value="">
<input id="Version_id_copy" 		type="hidden" value="">
<input id="IsNewRecord" 			type="hidden" value="false">
<input id="sale_channal_lookup_appendix" type="hidden">
</body>
</html>