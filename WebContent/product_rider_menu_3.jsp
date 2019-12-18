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
		<div id="div_product_menu3" class="col-sm-11 style_basic_table1 style_col_float_margin">
			<div class="text-center" style="padding: 10px 0"></div>
				<!-- //////////////////////////// -->
				<div class="row pd-bt">
					<div class="col-sm-2">
						<label for="lb_contact" class="control-label-left" style="margin-top: 8px;">Age Type</label>
					</div>
					<div class="col-sm-3">
						<select id="lb_age_specific_OL" class="form-control">
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
												Coverage Rider
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

<!-------------------------------- hidden value ---------------------------------------->
<!-- ตาราง - การคำนวณจำนวนเงินเอาประกันภัย -->
<!-- <input type="hidden" id="hide_fixCovUnit" />
<input type="hidden" id="hide_fixCovFactor" />
<input type="hidden" id="hide_minCovFactor" />
<input type="hidden" id="hide_slCalculus" /> -->

<input type="hidden" id="cal_fix_cov_unit_lookup"/>
<input type="hidden" id="cal_fix_cov_factor_lookup"/>
<input type="hidden" id="cal_fix_cov_factorMin_lookup"/>

<input type="hidden" name="hide_formular_premium_rate" id="hide_formular7"/>
<input type="hidden" name="hide_formular_extra_rate" id="hide_formular8"/>
<input type="hidden" name="hide_formular_nar" id="hide_formular9"/>

</body>
</html>