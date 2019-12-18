<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
</head>
<style>
div.ex_scroll {
  overflow-x: scroll;
}
.min_width { min-width: 200px; }
</style>
<body>
	<form class="form-horizontal">
		<div class="row box-body" id="form_ageCapitalProtectionTab2">
		<div id="" class="panel panel-primary">
			<div class="panel-heading" align="center">
				<p class="margin0">
					<B>รายการตรวจสุขภาพตามช่วงอายุและช่วงทุนคุ้มครอง</B>
				</p>
			</div>
			<div class="panel-body">
				<div class="row">
					<div class="col-sm-12">
						<label><font style="color:red">&nbsp;หมายเหตุ หากไม่มีการระบุรายการตรวจสุขภาพ ระบบจะแสดงค่าเป็น Non-Med เสมอ</font></label>
					</div>
				</div>
				<div class="row" style="padding-top : 15px;">
					<div class="col-sm-12">
  						<div class="ex_scroll">
						<table id="tb_Capital_byAge" class="table table-striped table-bordered text-center fixed" width="100%">
							<thead>
								<tr>
									<th width="20%" id="th_col1" class="text-center bg-primary vertical-middle min_width" rowspan="2" colspan="1">ทุนคุ้มครอง จำนวนเงิน(บาท)</th>
									<th width="80%" class="text-center bg-primary vertical-middle" colspan="1">ช่วงอายุ(ปี)</th>
								</tr> 
								<tr>
									<th id="headCol_1" class="text-center bg-primary vertical-middle min_width" colspan="1" scope="col"></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td id="headRow_1"></td>
									<td id="td1" class='min_width'>
										<div class='input-group col-xs-12'>
											<input type='text' id='coverage_byAge1_1' class='form-control' style='width:100%' value=''/>
											<span class='input-group-btn'>
												<button class='btn btn-default btn-primary fa fa-external-link' type='button' id='bt_coverage_byAge1_1' onclick='chk_popup_checklist(this);'></button>
											</span>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="panel panel-primary">
			<div class="panel-heading" align="center">
				<p class="margin0">
					<B>คำอธิบายรหัสตรวจ/รายการตรวจเลือด</B>
				</p>
			</div>
			<div class="panel-body">
				<div class="row">
					<div class="col-sm-12">
						<table class="table table-striped table-bordered text-center" id="tb_diagnose_description" width="100%">
							<thead>
								<tr>
									<th width="7%" class="text-center bg-primary vertical-middle" style="border-right: none;border-left:none;">ลำดับ</th>
									<th width="20%" class="text-center bg-primary vertical-middle" style="border-right: none;border-left:none;"><label>ชื่อรหัสตรวจ/<br>ชื่อกลุ่มรายการตรวจ</label></th>
									<th width="73%" class="text-center bg-primary vertical-middle" style="border-right: none;border-left:none;">ความหมายรหัสตรวจ/รายการรหัสตรวจเลือด</th>
								</tr>
							</thead>
							<tbody>
								
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
		<div class="panel panel-primary">
			<div class="panel-heading" align="center">
				<p class="margin0">
					<B>หมายเหตุ</B>
				</p>
			</div>
			<div class="panel-body">
				<div class="row">
					<div class="col-sm-12">
						<table class="table table-striped table-bordered text-center" id="" width="100%">
							<thead>
								<tr>
									<th width="7%" class="text-center bg-primary vertical-middle" style="border-right: none;border-left:none;">ลำดับ</th>
									<th width="93%" class="text-center bg-primary vertical-middle" style="border-right: none;border-left:none;">รายละเอียด</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									
									<td>1</td>
									<td style="text-align:left">หมายเหตุ ทุนคุ้มครองตั้งแต่ <label id="coverage_capital_val">...</label> บาท ขึ้นไปให้รับการตรวจที่สำนักงานใหญ่</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
		
	<!------------------------------- dialog --------------------------------------------->
	
	<!-- dialog - เลือกรายการตรวจสุขภาพ-->
	<div class="modal fade" id="modal_selectListHealth" role="dialog">
		<div class="modal-dialog" style="width:70%">
			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title" align="left">เลือกรายการตรวจสุขภาพ<span></span></h4>
				</div>
			<div class="modal-body">
				<div class="panel panel-primary">
					<div class="panel-heading">
						<p class="margin0">
							<B>รายการตรวจ</B>
						</p>
					</div>
					<div class="panel-body">
						<div class="dataTables_wrapper form-inline dt-bootstrap no-footer">
							<div class="row">
								<div class="col-sm-6" align="left">
								  <button type="button" class="btn btn-primary width90"
										    id="bt_select_tb_selectListHealth"
											onclick="select_all_tb_selectListHealth();"
											>เลือกทั้งหมด</button>
								</div>
								<div class="col-sm-6" align="right">
								   <div class="dataTables_filter">
										<label>ค้นหา :<input type="search" id="search_tb_selectListHealth"
										class="form-control input-sm"></label>
									</div>
								</div>
							</div>
						</div>
						<div class="text-center" style="padding:0px;"></div>
						<div class="row">
							<div class="col-sm-12">
								<table id="tb_selectListHealth" width="100%" class="table table-striped table-bordered text-center" >
									<thead>
										<tr>
											<th width="7%" class="text-center bg-primary vertical-middle" style="border-right: none;border-left:none;">เลือก</th>
											<th width="10%" class="text-center bg-primary vertical-middle" style="border-right: none;border-left:none;">รหัส</th>
											<th width="35%" class="text-center bg-primary vertical-middle" style="border-right: none;border-left:none;">ชื่อรหัสตรวจ</th>
											<th width="35%" class="text-center bg-primary vertical-middle" style="border-right: none;border-left:none;">ความหมายรหัสตรวจ</th>
											<th width="13%" class="text-center bg-primary vertical-middle" style="border-right: none;border-left:none;">ประเภทตรวจ</th>
										
										</tr>
									</thead> 
									<tbody>
										
									</tbody>
								</table>
								
							</div>
						</div>
						
					</div>
					
					
					
				</div>
				
				<div class="panel panel-primary">
					<div class="panel-heading">
						<p class="margin0">
							<B>กลุ่มรายการตรวจเลือด</B>
						</p>
					</div>
					<div class="panel-body">
						<div class="dataTables_wrapper form-inline dt-bootstrap no-footer">
							<div class="row">
								<div class="col-sm-6" align="left">
								  <button type="button" class="btn btn-primary width90"
										    id="bt_select_tb_selectListHealthGroup"
											onclick="select_all_tb_selectListHealthGroup();"
											>เลือกทั้งหมด</button>
								</div>
								<div class="col-sm-6" align="right">
								   <div class="dataTables_filter">
										<label>ค้นหา :<input type="search" id="search_tb_selectListHealthGroup"
										class="form-control input-sm"></label>
									</div>
								</div>
							</div>
						</div>
						<div class="text-center" style="padding:0px;"></div>
						<div class="row">
							<div class="col-sm-12">
								<table id="tb_selectListHealthGroup" width="100%" class="table table-striped table-bordered text-center"  >
									<thead>
										<tr>
											<th width="8%"  class="text-center bg-primary vertical-middle" style="border-right: none;border-left:none;">เลือก</th>
											<th width="15%" class="text-center bg-primary vertical-middle" style="border-right: none;border-left:none;">รหัสกลุ่ม</th>
											<th width="23%" class="text-center bg-primary vertical-middle" style="border-right: none;border-left:none;">ชื่อกลุ่มรหัสตรวจ</th>
											<th width="54%" class="text-center bg-primary vertical-middle" style="border-right: none;border-left:none;">รายการ รหัสตรวจสุขภาพ</th>
										</tr>
									</thead> 
									<tbody>
										
									</tbody>
								</table>
								
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-sm-6"></div>
					<div class="col-sm-6">
						<div class="col-sm-6"></div>
						<div class="col-sm-3" style="padding-right: 0px;"><input type="button" class="btn btn-primary width100" id="approved_modal" data-dismiss="modal" value="ตกลง" onclick="bt_save_selectListHealth();"/></div>
						<div class="col-sm-3" style="padding-right: 0px;"><input type="button" class="btn btn-primary width100" data-dismiss="modal" value="ยกเลิก"/></div>
					</div>
				</div>
			</div>
			</div>
		</div>
	</div>
	

</div>	
</form>			
</body>
</html>