<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>การคำนวณเบี้ยประกัน</title>

</head>
<body>
<div class="row box-body" id="div_main_menuCL_3">
	<div class="panel panel-primary">
		<div class="panel-heading">
			<p class="margin0 text-center">
				<B>การคำนวณเบี้ยประกัน</B>
			</p>
		</div>
		<div id="div_product_menu3" class="col-sm-11 style_basic_table1 style_col_float_margin">
			<div class="text-center" style="padding: 10px 0"></div>
				<!-- //////////////////////////// -->
				<div class="row pd-bt">
					<div class="col-sm-2">
						<label for="lb_contact" class="control-label-left" style="margin-top: 8px;">Age Type</label>
					</div>
					<div class="col-sm-3">
						<select id="lb_age_specific_CL" class="form-control">
							<!-- <option value="">Age Specific</option>			 -->				
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
									<div class="style_cal_table1 content_scroll" id="div_tb_Calculate_insurance">
										<table class="table table-bordered " style="width:1200px;" id="tb_Calculate_insurance">
											<thead>
												<tr>
													<th width="14%" class="text-center verticalCenter tablecolorhead3 borderBlack" rowspan="2">Coverage <br>หลัก / เพิ่มเติม</th>
													<th width="7%" class="text-center verticalCenter tablecolorhead3 borderBlack" rowspan="2">ประเภทความคุ้มครอง</th>
													<th width="3%" class="text-center verticalCenter tablecolorhead3 borderBlack" rowspan="2"></th>
													<th width="14%" class="text-center verticalCenter tablecolorhead3 borderBlack" colspan="2">ทุนชีวิตอ้างอิง (SA Life)</th>
													<th width="28%" class="text-center verticalCenter tablecolorhead3 borderBlack" colspan="3">จำนวนเงินเอาประกันภัย</th>
													<th width="24%" class="text-center verticalCenter tablecolorhead3 borderBlack" colspan="2">จำนวนเงินเอาประกันภัยขั้นต่ำ</th>
												</tr>
												<tr>
													<th class="text-center borderBlack" width="9%">ตั้งแต่</th>
													<th class="text-center borderBlack" width="9%">ถึง</th>
													<th class="text-center borderBlack" width="10%">จำนวน</th>
													<th class="text-center borderBlack" width="10%">หน่วย</th>
													<th class="text-center borderBlack" width="10%">ของ</th>
													<th class="text-center borderBlack" width="10%">(บาท)</th>
													<th class="text-center borderBlack" width="16%">ของ</th>												
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
				
				<div class="row pd-bt">
					<div class="col-sm-6">
						<div class="col-sm-4">
							<label for="lb_SAP_CL" class="control-label-left"
								style="margin-top: 8px;">ทุนในการคำนวณเบี้ย (SA_P)</label>
							</div>
						<div class="col-sm-6">
							<select id="lb_SAP_CL" class="form-control">
								<option value="NONE">None</option>							
							</select>
						</div>
					</div>
					<!-- <div class="col-sm-6">
						<div class="col-sm-4">
						<label for="lb_CalRate_CL" class="control-label-left"
							style="margin-top: 8px;">สูตรการคำนวณเบี้ย</label>
						</div>
						<div class="col-sm-6">
							<select id="lb_CalRate_CL" class="form-control">
								<option value="NONE">None</option>							
							</select>
						</div>
					</div> -->
				</div>
				
				<div class="row pd-bt">
					<div class="col-sm-6">
						<div class="col-sm-4">
							<label for="lb_SMI_CL" class="control-label-left"
								style="margin-top: 8px;">วิธีการคำนวณ SMI</label>
							</div>
						<div class="col-sm-6">
							<select id="lb_SMI_CL" class="form-control">
								<option value="NONE">None</option>							
							</select>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="col-sm-4">
						<label for="lb_MI_CL" class="control-label-left"
							style="margin-top: 8px;">วิธีการคำนวณ MI</label>
						</div>
						<div class="col-sm-6">
							<select id="lb_MI_CL" class="form-control">
								<option value="NONE">None</option>							
							</select>
						</div>
					</div>
				</div>
				
				<!-- <div class="row pd-bt">
					<div class="col-sm-2">
						<label for="lb_contact" class="control-label-left"
							style="margin-top: 8px;">ทุนในการคำนวณเบี้ย (SA_P)</label>
					</div>
					<div class="col-sm-3">
						<select id="lb_SAP_CL" class="form-control">
							<option>None</option>							
						</select>
					</div>
				</div>	
				<div class="row pd-bt">
					<div class="col-sm-2">
						<label for="lb_contact" class="control-label-left"
							style="margin-top: 8px;">วิธีการคำนวณ SMI </label>
					</div>
					<div class="col-sm-3">
						<select id="lb_SMI_CL" class="form-control">
							<option>None</option>							
						</select>
					</div>
				</div>	
				<div class="row pd-bt">
					<div class="col-sm-2">
						<label for="lb_contact" class="control-label-left"
							style="margin-top: 8px;">วิธีการคำนวณ MI </label>
					</div>
					<div class="col-sm-3">
						<select id="lb_MI_CL" class="form-control">
							<option>None</option>
						</select>
					</div>
				</div>	 -->
				<div class="row pd-bt">
					<div class="col-sm-2">
					</div>
					<div class="col-sm-3 style_col_width20">
						<input type="checkbox" id="chk_balloon_prd">
						<label for="chk_balloon_prd" class="control-label-left"
							style="margin-top: 8px;">การคำนวณ balloon</label>
					</div>
					<div class="col-sm-5">
						<div class="col-sm-8">
							<input type="text" class="form-control" id="txb_balloon_prd_code" value="" readonly="">
						</div>
						<div class="col-sm-4">
							<input class="btn btn-primary width100" type="button" id="btn_select_balloon_prd_code" value="เลือก" data-toggle="modal" href="#modal_Choose_ballon_prd" disabled="disabled">
						</div>
						<!-- <select id="lb_cal_balloon_CL" class="form-control">
							<option>None</option>							
						</select> -->
					</div>
				</div>	
				<div class="row pd-bt">
					<div class="col-sm-2">
						<label for="lb_contact" class="control-label-left"
							style="margin-top: 8px;">การชำระเบี้ยประกันภัยปีแรก </label>
					</div>
					<div class="col-sm-9 panel panel-default panel_style5" id="panel_cal_pay_premium_CL">
						<div class="col-sm-12 padding_all1">
							<div class="col-sm-6">
								<input type="checkbox" name="chk_cal_pay_premium_CL[]" id="chk_cal_pay_premium_CL1" value="กู้เบี้ย" ><label for="chk_cal_pay_premium_CL1" class="label_input2">กู้เบี้ย</label>
							</div>
							<div class="col-sm-6">
								<input type="checkbox" name="chk_cal_pay_premium_CL[]" id="chk_cal_pay_premium_CL2" value="เงินสด" ><label for="chk_cal_pay_premium_CL2" class="label_input2">เงินสด</label>
							</div>
						</div>																																							
					</div>
					<!-- <div class="col-sm-1">
						<input type="checkbox">
						<label for="lb_contact" class="control-label-left"
							style="margin-top: 8px;">กู้เบี้ย</label>
					</div>
					<div class="col-sm-2">
						<input type="checkbox">
						<label for="lb_contact" class="control-label-left"
							style="margin-top: 8px;">เงินสด</label>
					</div> -->
				</div>	
				<div class="row pd-bt">
					<div class="col-sm-2">
						<label for="lb_contact" class="control-label-left"
							style="margin-top: 8px;">การคำนวณเบี้ยประกันภัย </label>
					</div>
					<div class="col-sm-8">
						<table class="table table-bordered " width="100%" id="tb_Calculate_insurance2">
								<thead>
									<tr>
										<th width="30%"
											class="text-center verticalCenter tablecolorhead3 borderBlack">
												Coverage<br>หลัก / เพิ่มเติม
											</th>
										<th width="20%"
											class="text-center verticalCenter tablecolorhead3 borderBlack">
												ประเภทความคุ้มครอง
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
							id="btn_comfirm_PRD_CalPremium" onclick="bt_Menu3_Confirm();">บันทึก</button>
						</div>
						<div class="productpadding col-sm-1">
							<button class="btn btn-default btn-primary" type="button"
							id="btn_cancel_PRD_CalPremium" data-toggle="modal" data-target="#modal_Cancel">ยกเลิก</button>
						</div>
						<div class="col-sm-1"></div>
				</div>
				<div class="text-center" style="padding: 10px 0"></div>
				<!-- //////////////////////////// -->
		
		</div>
	</div>
</div>

<!-- modal -->

<div class="modal fade" id="modal_Choose_ballon_prd" role="dialog">
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
						style="width: 100%" id="tb_Choose_ballon_prd_modal">
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
					data-dismiss="modal" onclick="bt_save_Choose_ballon_prd();">ตกลง</button>
				<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>

			</div>
		</div>
	</div>
</div>


<!-------------------------------- hidden value ---------------------------------------->
<!-- ตาราง - การคำนวณจำนวนเงินเอาประกันภัย -->
<input type="hidden" id="hide_fixCovUnit" />
<input type="hidden" id="hide_fixCovFactor" />
<input type="hidden" id="hide_minCovFactor" />
<input type="hidden" id="hide_slCalculus" />
</body>
</html>