<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>การคำนวณเบี้ยประกัน</title>

</head>
<body>
<div class="row box-body" id="div_main_menuOL_3">
	<div class="panel panel-primary">
		<div class="panel-heading">
			<p class="margin0 text-center">
				<B>การคำนวณเบี้ยประกัน</B>
			</p>
		</div>
		<div id="div_product_menu3_OL" class="col-sm-11 style_basic_table1 style_col_float_margin">
			<div class="text-center" style="padding: 10px 0"></div>
				<!-- //////////////////////////// -->
				<div class="row pd-bt">
					<div class="col-sm-2">
						<label for="lb_contact" class="control-label-left" style="margin-top: 8px;">Age Specific</label>
					</div>
					<div class="col-sm-3">
						<select id="lb_age_specific_OL" class="form-control">
							<!-- <option value="NONE">None</option> -->							
						</select>
					</div>
				</div>
				<div class="row">
					<div class="col-sm-2">
						<label for="lb_contact" class="control-label-left"
							style="margin-top: 8px;">การคำนวณจำนวนเงินเอาประกันภัย</label>
					</div>
					<div class="col-sm-10 style_basic_table2">
						<table class="table borderless">
							<tr>
								<td colspan="10">
									<div class="style_cal_table2 content_scroll" id="div_tb_Calculate_insurance_OL">
										<table class="table table-bordered " style="width:1500px;" id="tb_Calculate_insurance_OL">
											<thead>
												<tr>
													<th width="14%" class="text-center verticalCenter tablecolorhead3 borderBlack" rowspan="2">Coverage <br>หลัก / เพิ่มเติม</th>
													<th width="7%" class="text-center verticalCenter tablecolorhead3 borderBlack" rowspan="2">ประเภทความคุ้มครอง</th>
													<th width="3%" class="text-center verticalCenter tablecolorhead3 borderBlack" rowspan="2"></th>
													<th width="14%" class="text-center verticalCenter tablecolorhead3 borderBlack" colspan="2">ทุนชีวิตอ้างอิง (SA Life)</th>
													<th width="28%" class="text-center verticalCenter tablecolorhead3 borderBlack" colspan="3">จำนวนเงินเอาประกันภัย</th>
													<th width="24%" class="text-center verticalCenter tablecolorhead3 borderBlack" colspan="2">จำนวนเงินเอาประกันภัยขั้นต่ำ</th>
													<th width="24%" class="text-center verticalCenter tablecolorhead3 borderBlack" colspan="2">จำนวนเงินเบี้ยประกันภัยขั้นต่ำ</th>
												</tr>
												<tr>
													<th class="text-center borderBlack" width="8%">ตั้งแต่</th>
													<th class="text-center borderBlack" width="8%">ถึง</th>
													<th class="text-center borderBlack" width="8%">จำนวน</th>
													<th class="text-center borderBlack" width="8%">หน่วย</th>
													<th class="text-center borderBlack" width="8%">ของ</th>
													<th class="text-center borderBlack" width="8%">(บาท)</th>
													<th class="text-center borderBlack" width="8%">ของ</th>	
													<th class="text-center borderBlack" width="8%">(บาท)</th>
													<th class="text-center borderBlack" width="8%">ของ</th>											
												</tr>
											</thead>
											<tbody>
											</tbody>
										</table>
									</div>
								</td>
							</tr>
						</table>
					</div>
				</div>
				
			<div class="row pd-bt disabledAll">
			
					<div class="col-sm-6">
						<div class="col-sm-4">
							<label for="lb_SAP_OL" class="control-label-left"
								style="margin-top: 8px;">ทุนในการคำนวณเบี้ย (SA_P)</label>
							</div>
						<div class="col-sm-6">
							<select id="lb_SAP_OL" class="form-control">
								<option value="NONE">None</option>							
							</select>
						</div>
					</div>
				</div>
				
				<div class="row pd-bt disabledAll">
				
					<div class="col-sm-6">
						<div class="col-sm-4">
							<label for="lb_SMI_OL" class="control-label-left"
								style="margin-top: 8px;">วิธีการคำนวณ SMI</label>
							</div>
						<div class="col-sm-6">
							<select id="lb_SMI_OL" class="form-control">
								<option value="NONE">None</option>							
							</select>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="col-sm-4">
						<label for="lb_MI_OL" class="control-label-left"
							style="margin-top: 8px;">วิธีการคำนวณ MI</label>
						</div>
						<div class="col-sm-6">
							<select id="lb_MI_OL" class="form-control">
								<option value="NONE">None</option>							
							</select>
						</div>
					</div>
				</div>
				<div class="row pd-bt disabledAll">
				
					<div class="col-sm-2">
					</div>
					<div class="col-sm-3 style_col_width20">
						<input type="checkbox" id="chk_balloon_prd_OL">
						<label for="chk_balloon_prd_OL" class="control-label-left"
							style="margin-top: 8px;">การคำนวณ balloon</label>
					</div>
					<div class="col-sm-5">
						<div class="col-sm-8">
							<input type="text" class="form-control" id="txb_balloon_prd_code_OL" value="" readonly="">
						</div>
						<div class="col-sm-4">
							<input class="btn btn-primary width100" type="button" id="btn_select_balloon_prd_code_OL" value="เลือก" data-toggle="modal" href="#modal_Choose_ballon_prd_OL" disabled="disabled">
						</div>
					</div>
				</div>	
				<div class="row pd-bt">
					<div class="col-sm-2">
						<label for="lb_contact" class="control-label-left"
							style="margin-top: 8px;">การชำระเบี้ยประกันภัยปีแรก </label>
					</div>
					<div class="col-sm-8 panel panel-default panel_style8 disabledAll" id="panel_cal_pay_premium_OL"> 
					
						<div class="col-sm-12 padding_all1" id="prem_flag_FYP">
							<!-- <div class="col-sm-4">
								<input type="checkbox" name="chk_cal_pay_premium_OL[]" id="chk_cal_pay_premium_OL1" value="เงินสด"><label for="chk_cal_pay_premium_OL1" class="label_input2">เงินสด</label> 
							</div> -->
							<!-- <div class="col-sm-4">
								<input type="checkbox" name="chk_cal_pay_premium_OL[]" id="chk_cal_pay_premium_OL2" value="เช็ค"><label for="chk_cal_pay_premium_OL2" class="label_input2">เช็ค</label>
							</div>
							<div class="col-sm-3">
								<input type="checkbox" name="chk_cal_pay_premium_OL[]" id="chk_cal_pay_premium_OL3" value="บัตรเครดิต"><label for="chk_cal_pay_premium_OL2" class="label_input2">บัตรเครดิต</label>
							</div>
							<div class="col-sm-4">
								<input type="checkbox" name="chk_cal_pay_premium_OL[]" id="chk_cal_pay_premium_OL4" value="บัตรเดบิต"><label for="chk_cal_pay_premium_OL2" class="label_input2">บัตรเดบิต</label>
							</div>
							<div class="col-sm-3">
								<input type="checkbox" name="chk_cal_pay_premium_OL[]" id="chk_cal_pay_premium_OL5" value="หักผ่านบัญชี"><label for="chk_cal_pay_premium_OL2" class="label_input2">หักผ่านบัญชี</label>
							</div>  -->
						</div>																																							
					</div>
				</div>
				<div class="row pd-bt">
					<div class="col-sm-2">
						<label for="lb_contact" class="control-label-left"
							style="margin-top: 8px;">การชำระเบี้ยประกันภัยปีต่อไป/ปีต่ออายุ</label>
					</div>
					<div class="col-sm-8 panel panel-default panel_style8 disabledAll" id="panel_cal_pay_premium_OL">
						<div class="col-sm-12 padding_all1" id="prem_flag_RYP">
							<!-- <div class="col-sm-4">
								<input type="checkbox" name="chk_cal_payRenew_premium_OL[]" id="chk_cal_payRenew_premium_OL1" value="เงินสด"><label for="chk_cal_payRenew_premium_OL1" class="label_input2">เงินสด</label>
							</div>
							<div class="col-sm-4">
								<input type="checkbox" name="chk_cal_payRenew_premium_OL[]" id="chk_cal_payRenew_premium_OL2" value="เช็ค"><label for="chk_cal_payRenew_premium_OL2" class="label_input2">เช็ค</label>
							</div>
							<div class="col-sm-3">
								<input type="checkbox" name="chk_cal_payRenew_premium_OL[]" id="chk_cal_payRenew_premium_OL3" value="บัตรเครดิต"><label for="chk_cal_payRenew_premium_OL3" class="label_input2">บัตรเครดิต</label>
							</div>
							<div class="col-sm-4">
								<input type="checkbox" name="chk_cal_payRenew_premium_OL[]" id="chk_cal_payRenew_premium_OL4" value="บัตรเดบิต"><label for="chk_cal_payRenew_premium_OL4" class="label_input2">บัตรเดบิต</label>
							</div>
							<div class="col-sm-3">
								<input type="checkbox" name="chk_cal_payRenew_premium_OL[]" id="chk_cal_payRenew_premium_OL5" value="หักผ่านบัญชี"><label for="chk_cal_payRenew_premium_OL5" class="label_input2">หักผ่านบัญชี</label>
							</div> -->
						</div>																																							
					</div>
				</div>		
				<div class="row pd-bt">
					<div class="col-sm-2">
						<label for="lb_contact" class="control-label-left"
							style="margin-top: 8px;">การคำนวณเบี้ยประกันภัย</label>
					</div>
					<div class="col-sm-8">
						<table class="table table-bordered " width="100%" id="tb_Calculate_insurance2_OL">
								<thead>
									<tr>
										<th width="30%"
											class="text-center verticalCenter tablecolorhead3 borderBlack">
												Coverage<br>หลัก / เพิ่มเติม
											</th>
										<th width="20%"
											class="text-center verticalCenter tablecolorhead3 borderBlack">
												เบี้ย
											</th>
										<th width="50%"
											class="text-center verticalCenter tablecolorhead3 borderBlack">
											สูตร
										</th>
									</tr>
								</thead>
								<tbody>
								</tbody>
						</table>		
					</div>
					
				</div>	
				<div class="row pd-bt">
					<div class="col-sm-9"></div>
						<div class="productpadding col-sm-1">
							<button class="btn btn-default btn-primary" type="button"
							id="btn_comfirm_PRD_CalPremium_OL" onclick="bt_Menu3_Confirm_OL();">บันทึก</button>
						</div>
						<div class="productpadding col-sm-1">
							<button class="btn btn-default btn-primary" type="button"
							id="btn_cancel_PRD_CalPremium_OL" data-dismiss="modal" data-toggle="modal" data-target="#cancelBoxOL_CalPremium">ยกเลิก</button>
						</div>
						<div class="col-sm-1"></div>
				</div>
				<div class="text-center" style="padding: 10px 0"></div>
				<!-- //////////////////////////// -->
		
		</div>
	</div>
</div>

<!-- modal -->
<div class="modal fade" id="modal_Choose_ballon_prd_OL" role="dialog">
	<div class="modal-dialog modal-lg">
		<div class="panel panel-primary">
			<div class="panel-heading text-left">
				<button type="button" class="close" data-dismiss="modal">&times;</button>
				<h4 class="modal-title">เลือก : ผลิตภัณฑ์</h4>
			</div>
			<div class="modal-body">
				<div class="row" style="padding: 10px 0"></div>
				<div class="box-body">
					<table class="table table-striped table-bordered" 
						style="width: 100%" id="tb_Choose_ballon_prd_modal_OL">
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
					data-dismiss="modal" onclick="bt_save_Choose_ballon_prd_OL();">ตกลง</button>
				<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>

			</div>
		</div>
	</div>
</div>

<!-- ปุ่มยกเลิก -->
<div id="cancelBoxOL_CalPremium" class="modal fade bd-example-modal-sm"
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
					<button type="button" class="btn btn-primary" onclick="cancelPage('product.jsp');">ยืนยัน</button>
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


<!-------------------------------- hidden value ---------------------------------------->
<!-- ตาราง - การคำนวณจำนวนเงินเอาประกันภัย -->
<input type="hidden" id="hide_fixCovUnit_OL" />
<input type="hidden" id="hide_fixCovFactor_OL" />
<input type="hidden" id="hide_minCovFactor_OL" />
<input type="hidden" id="hide_formular7" />
<input type="hidden" id="hide_formular8" />
<input type="hidden" id="hide_formular9" />

</body>
</html>