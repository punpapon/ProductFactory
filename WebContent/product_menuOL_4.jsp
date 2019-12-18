<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>ผลประโยชน์การขาย</title>

</head>
<body>
		<div class="row box-body" id="benefit_sale_OL">
			<div class="panel panel-primary">
				<div class="panel-heading text-left">
					<p class="margin0 text-center">
						<b>ผลประโยชน์การขาย</b>
					</p>
				</div>
				<div class="text-center" style="padding: 10px 0"></div>
				<div class="form-group" style="width:95%; margin:auto;">
					<!-- <div class="col-sm-3">ผลประโยชน์การขาย</div> -->
					<div id="panel_saleBenefits_OL" class="col-sm-12">
						<div class="col-sm-12 padding_all7">
							<div class="col-sm-3">
								<input type="radio" name="rd_SaleCondition_OL[]" id="rd_SaleCondition_OL1" value="NORMAL" onclick="chk_saleCondition_OL(1)" checked><label for="rd_SaleCondition_OL1" class="label_input2">แบบปกติ</label>
							</div>
							<div class="col-sm-3">
								<input type="radio" name="rd_SaleCondition_OL[]" id="rd_SaleCondition_OL2" value="CONDITION" onclick="chk_saleCondition_OL(2)"><label for="rd_SaleCondition_OL2" class="label_input2">แบบมีเงื่อนไข</label>
							</div>
						</div>
						
					<!--------------- แบบปกติ ---------------->
					<div id="div_SaleNoCondition_OL">
					<!-- ระบุผลประโยชน์การขาย -->
						<div class="col-sm-12 padding_all10 panel panel-default" id="panel_SaleBenefitNormal_OL">
							<div class="panel-heading">ระบุผลประโยชน์การขาย </div>
							<div class="panel-body">
								<div class="scroll_Salebenefit_OL">
									<table class="table table-bordered borderBlack" id="tbl_SaleBenefitNormal_OL" style="width:2000px;">
										<thead>
											<tr>
												<th rowspan="2" class="text-center bg-primary borderBlack" width="100" style="vertical-align: middle;">Coverage หลัก / เพิ่มเติม</th>
												<th rowspan="2" class="text-center bg-primary borderBlack" width="30" style="vertical-align: middle;"></th>
												<th rowspan="2" class="text-center verticalCenter bg-primary borderBlack" width="50">Series Name</th>
												<th rowspan="2" class="text-center verticalCenter bg-primary borderBlack" width="25"></th>
												<th colspan="2" class="text-center verticalCenter bg-primary borderBlack" width="160">วันที่</th>
												<th class="text-center verticalCenter bg-primary borderBlack" width="70">ค่าบำเหน็จ(%)</th>
												<th colspan="3" class="text-center verticalCenter bg-primary borderBlack" width="210">ค่าพาหนะ(%)</th>
												<th rowspan="2" class="text-center verticalCenter bg-primary borderBlack" width="70">เครดิตผลงาน(%)</th>
												<th rowspan="2" class="text-center verticalCenter bg-primary borderBlack" width="70">Overriding(%)</th>
												<th rowspan="2" class="text-center verticalCenter bg-primary borderBlack" width="70">Advance Comm(%)</th>
												<th rowspan="2" class="text-center verticalCenter bg-primary borderBlack" width="70">Marketing Incentive(%)</th>
												<th rowspan="2" class="text-center verticalCenter bg-primary borderBlack" width="70">Sale Volume Bonus(%)</th>
												<th rowspan="2" class="text-center verticalCenter bg-primary borderBlack" width="70">Marketing Expense(%)</th>
											</tr>
											<tr>
												<th class="text-center verticalCenter bg-primary borderBlack" width="80">วันที่เริ่ม</th>
												<th class="text-center verticalCenter bg-primary borderBlack" width="80">วันที่สิ้นสุด</th>
												<th class="text-center verticalCenter bg-primary borderBlack" width="70">ปีที่ 1</th>
												<th class="text-center verticalCenter bg-primary borderBlack" width="70">ปีที่ 2</th>
												<th class="text-center verticalCenter bg-primary borderBlack" width="70">ปีที่ 3</th>
												<th class="text-center verticalCenter bg-primary borderBlack" width="70">ปีที่ 4+</th>
											</tr>
										</thead>
										<tbody>
										</tbody>
									</table>
								</div>
							</div>
						</div>
						<div class="text-center" style="padding: 10px 0"></div>
						<div class="col-md-8 col-md-offset-7 text-right" style="padding:0 0 20px 0;">
							<div class="col-md-10">
								<div class="col-md-6">
									<button type="button" class="btn btn-primary width80px"
										id="bt_saveSaleNormal_OL" onclick="bt_Menu4_Confirm_OL();">บันทึก</button>
								</div>
								<div class="col-md-3">
									<button type="button" class="btn btn-primary width80px"
										data-dismiss="modal" data-toggle="modal"
										data-target="#cancelBoxOL_Sale">ยกเลิก</button>
								</div>
							</div>
						</div>
					</div>
						
					<!------------ แบบมีเงื่อนไข ------------------->
					<div id="div_SaleHaveCondition_OL">
						<!-- เลือกเงื่อนไข -->
						<div class="col-sm-8 padding_all10 panel panel-default" id="panel_SaleCondition_OL1">
							<div class="panel-heading">เลือกเงื่อนไข</div>
							<div class="panel-body">
								<div class="col-sm-12">
									<input type="checkbox" id="ch_select_condition0_OL" value="GENDER" onclick="chk_salebnf_OL();">
									<label for="ch_select_condition0_OL" class="control-label-left label_input3 ">แยกเพศ</label>
								</div>
								<div class="col-sm-12">
									<input type="checkbox" id="ch_select_condition1_OL" value="OV" onclick="chk_salebnf_OL();">
									<label for="ch_select_condition1_OL" class="control-label-left label_input3">OV ตามวิธีชำระเบี้ย</label>
								</div>
								<div class="col-sm-12">
									<input type="checkbox" id="ch_select_condition2_OL" value="AGE" onclick="chk_salebnf_OL(); chk_salebnf_age_OL(this);">
									<label for="ch_select_condition2_OL" class="control-label-left label_input3 ">อายุ(ปี)</label>
								</div>
								<div class="col-sm-12">
									<input type="checkbox" id="ch_select_condition3_OL" value="CAPITAL" onclick="chk_salebnf_OL(); chk_salebnf_sum_OL(this);">
									<label for="ch_select_condition3_OL" class="control-label-left label_input3 ">ทุน(บาท)</label>
								</div>
								<div class="col-sm-12">
									<input type="checkbox" id="ch_select_condition4_OL" value="TERM" onclick="chk_salebnf_OL(); chk_salebnf_period_OL(this);">
									<label for="ch_select_condition4_OL" class="control-label-left label_input3 ">ระยะชำระเบี้ย(ปี)</label>
								</div>
							</div>
						</div>
						
						<!-- กำหนดเงื่อนไข -->
						<div class="col-sm-12 padding_all10 panel panel-default" id="panel_SaleCondition_OL2">
							<div class="panel-heading">กำหนดเงื่อนไข</div>
							<div class="panel-body">
								<div class="col-sm-12">
									<table class="table table-bordered text-center" width="100%" id="tb_YearCondition_OL">
										<thead>
											<tr>
												<th width="10%" class="text-center bg-primary borderBlack" rowspan="2"></th>
												<th width="30%" class="text-center bg-primary borderBlack" colspan="2" id="th_conAge_OL">อายุ(ปี)</th>
												<th width="30%" class="text-center bg-primary borderBlack" colspan="2" id="th_conSum_OL">ทุน(บาท)</th>
												<th width="30%" class="text-center bg-primary borderBlack" colspan="2" id="th_conPeriod_OL">ระยะชำระเบี้ย(ปี)</th>
											</tr>
											<tr>
												<th width="15%" class="text-center bg-primary borderBlack" id="th_conAge_OL1">ตั้งแต่</th>
												<th width="15%" class="text-center bg-primary borderBlack" id="th_conAge_OL2">ถึง</th>
												<th width="15%" class="text-center bg-primary borderBlack" id="th_conSum_OL1">ตั้งแต่</th>
												<th width="15%" class="text-center bg-primary borderBlack" id="th_conSum_OL2">ถึง</th>
												<th width="15%" class="text-center bg-primary borderBlack" id="th_conPeriod_OL1">ตั้งแต่</th>
												<th width="40%" class="text-center bg-primary borderBlack" id="th_conPeriod_OL2">ถึง</th>
											</tr>
										</thead>
										<tbody>
										<tr id="tr_YearCondition_OL1">
											<td class="text-center borderBlack" id="td_YearCondition_OL1" onclick="imgCheckbox(this.id);" style="vertical-align: middle;">
												<i class="glyphicon glyphicon-edit"></i>
											</td>
											<td class="borderBlack">
												<input id="Agefrom_OL1" class="auto form-control text-center margin-padding0" type="text" onkeypress="validate(event);" onblur='validateMinAge_OL(this);' data-v-min="0" data-v-max="99" maxlength="2" disabled>
											</td>
											<td class="borderBlack">
												<input id="Ageto_OL1" class="auto form-control text-center margin-padding0" type="text" onkeypress="validate(event);" onblur="validateMaxAge_OL(this);" data-v-min="0" data-v-max="99" maxlength="2" disabled>
											</td>
											<td class="borderBlack">
												<input id="Sumfrom_OL1" class="auto text-right form-control margin-padding0" type="text" onkeypress="validate(event)" onblur='validateMinSum_OL(this);' data-v-min="0.00" data-v-max="999999999.99" disabled>
											</td>
											<td class="borderBlack">
												<input id="Sumto_OL1" class="auto text-right form-control margin-padding0" type="text" onkeypress="validate(event)" onblur="validateMaxSum_OL(this);" data-v-min="0.00" data-v-max="999999999.99" disabled>
											</td>
											<td class="borderBlack">
												<input id="Periodfrom_OL1" class="auto form-control text-center margin-padding0" type="text" onkeypress="validate(event);" onblur='validateMinPeriod_OL(this);' data-v-min="0" data-v-max="99" maxlength="2" disabled>
											</td>
											<td class="borderBlack">
												<input id="Periodto_OL1" class="auto form-control text-center margin-padding0" type="text" onkeypress="validate(event);" onblur="validateMaxPeriod_OL(this);" data-v-min="0" data-v-max="99" maxlength="2" disabled>
											</td>
										</tr>
									</tbody>
									</table>
								</div>
								<div class="col-sm-8 text-left">
									<div class="col-md-4 marginleft_style9 margin_bottom_style2" style="padding-right: 0">
										<button class="btn btn-primary width100" id="addRowSale_OL" onclick="addRowSaleCondition_OL();" disabled>เพิ่ม</button>
									</div>
									<div class="col-md-4" style="padding-right: 0">
										<button class="btn btn-primary width100" id="deleteRowSale_OL" onclick="deleteRowSaleCondition_OL();" disabled>ลบ</button>
									</div>
								</div>
								<div class="col-sm-6"><button type="button" id="btn_generate_series_OL" class="btn btn-info width100" onclick="generate_series_OL();" disabled>Generate Series</button></div>
								
								<!-- Series Table -->
								<div id="div_seriesCondition_OL" class="col-sm-12 margintop_20px"></div>

								<div class="col-sm-6 margintop_20px"><button type="button" id="btn_generate_template_OL" class="btn btn-info width100 displayNone" onclick="generate_template_OL();">Generate Template</button></div>
							
							</div>
						</div>
						
						<!-- ระบุผลประโยชน์การขาย -->
						<div class="col-sm-12 padding_all10 panel panel-default displayNone" id="panel_SaleBenefit_OL3">
							<div class="panel-heading">ระบุผลประโยชน์การขาย </div>
							<div class="panel-body">
								<div class="scroll_Salebenefit_cond_OL">
									<table class="table table-bordered borderBlack" id="tbl_SaleBenefit_OL" style="width:2000px;">
										<thead>
											<tr>
												<th rowspan="2" class="text-center bg-primary borderBlack" width="100" style="vertical-align: middle;">Coverage หลัก / เพิ่มเติม</th>
												<th rowspan="2" class="text-center bg-primary borderBlack" width="20" style="vertical-align: middle;">ตาม Base</th>
												<th rowspan="2" class="text-center verticalCenter bg-primary borderBlack" width="50">Series Name</th>
												<th rowspan="2" class="text-center verticalCenter bg-primary borderBlack" width="25"></th>
												<th colspan="2" class="text-center verticalCenter bg-primary borderBlack" width="160">วันที่</th>
												<th class="text-center verticalCenter bg-primary borderBlack" width="70">ค่าบำเหน็จ(%)</th>
												<th colspan="3" class="text-center verticalCenter bg-primary borderBlack" width="210">ค่าพาหนะ(%)</th>
												<th rowspan="2" class="text-center verticalCenter bg-primary borderBlack" width="70">เครดิตผลงาน(%)</th>
												<th rowspan="2" class="text-center verticalCenter bg-primary borderBlack" width="70">Overriding(%)</th>
												<th rowspan="2" class="text-center verticalCenter bg-primary borderBlack" width="70">Advance Comm(%)</th>
												<th rowspan="2" class="text-center verticalCenter bg-primary borderBlack" width="70">Marketing Incentive(%)</th>
												<th rowspan="2" class="text-center verticalCenter bg-primary borderBlack" width="70">Sale Volume Bonus(%)</th>
												<th rowspan="2" class="text-center verticalCenter bg-primary borderBlack" width="70">Marketing Expense(%)</th>
											</tr>
											<tr>
												<th class="text-center verticalCenter bg-primary borderBlack" width="80">วันที่เริ่ม</th>
												<th class="text-center verticalCenter bg-primary borderBlack" width="80">วันที่สิ้นสุด</th>
												<th class="text-center verticalCenter bg-primary borderBlack" width="70">ปีที่ 1</th>
												<th class="text-center verticalCenter bg-primary borderBlack" width="70">ปีที่ 2</th>
												<th class="text-center verticalCenter bg-primary borderBlack" width="70">ปีที่ 3</th>
												<th class="text-center verticalCenter bg-primary borderBlack" width="70">ปีที่ 4+</th>
											</tr>
										</thead>
										<tbody>
										</tbody>
									</table>
								</div>
							</div>
						</div>
						<div class="text-center" style="padding: 10px 0"></div>
						<div class="col-md-8 col-md-offset-7 text-right" style="padding:0 0 20px 0;">
							<div class="col-md-10">
								<div class="col-md-6">
									<button type="button" class="btn btn-primary width80px"
										id="bt_saveSale_OL" onclick="bt_Menu4_Confirm_OL();">บันทึก</button>
								</div>
								<div class="col-md-3">
									<button type="button" class="btn btn-primary width80px"
										data-dismiss="modal" data-toggle="modal"
										data-target="#cancelBoxOL_Sale">ยกเลิก</button>
								</div>
							</div>
						</div>
						
					  </div>
					</div>
						
				</div>	
				<br clear="all">			
			</div>		
		</div>
	
	<!-- ปุ่มยกเลิก -->
	<div id="cancelBoxOL_Sale" class="modal fade bd-example-modal-sm"
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

<input type="hidden" id="flag_SaleBnf_OL">
<input type="hidden" id="lookup_bnf_mode_OL">
</body>
</html>