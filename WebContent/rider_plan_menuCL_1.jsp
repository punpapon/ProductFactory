<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>ข้อมูลทั่วไป Basic Information</title>

</head>
<body>
	<div class="row box-body" id="div_main_menuBasic_Info">
		<div class="panel panel-primary">
			<div class="panel-heading">
				<p class="margin0 text-center">
					<B>ข้อมูลทั่วไป Basic Information</B>
				</p>
			</div>
			<div class="text-center" style="padding: 10px 0"></div>
			<input type="hidden" id="cov_cat_id" value="">
			<div class="row">
				<div class="col-sm-12">
					<div class="col-sm-3 style_col_width19dot5">
						<label for="lb_contact" class="control-label-left"
							style="margin-top: 8px;"><!-- <font id="validate_input1_cl"
							style="color: red;">*</font> --> รหัสสัญญาเพิ่มเติม</label>
					</div>
					<div class="col-xs-3">
						<input class="form-control" type="text"
							id="pass_Insurance_coverage_cl"  disabled="disabled" ></input>
					</div>
					<div class="col-sm-2 marginright_style1">
						<label for="lb_contact" class="control-label-left"
							style="margin-top: 8px;"><!-- <font id="validate_input1_1_cl"
							style="color: red;">*</font> -->Rider Code</label>
					</div>
					<div class="col-sm-2">
						<input type="text" class="form-control text-right text-capital" id="key_rider_code_cl" maxlength="4" onkeyup="keyRiderCode_cl();">
					</div>
				</div>
			</div>

			<div class="text-center" style="padding: 5px 0"></div>
			<div class="row">
				<div class="col-sm-12">
					<div class="col-sm-3 style_col_width19dot5">
						<label for="lb_contact" class="control-label-left"
							style="margin-top: 8px;"><font id="validate_input2_cl"
							style="color: red;">*</font>ชื่อ(ไทย)</label>
					</div>
					<div class="col-xs-9">
						<input type="text" class="form-control" id="thai_Name_cl"
							onkeyup="thai_Name_cl();">
					</div>					
				</div>
			</div>
			
			<div class="text-center" style="padding: 5px 0"></div>
			<div class="row">
				<div class="col-sm-12">
					<div class="col-sm-3 style_col_width19dot5">
						<label for="lb_contact" class="control-label-left"
							style="margin-top: 8px;"><!-- <font id="validate_input3_cl"
							style="color: red;">*</font> --> ชื่อ(อังกฤษ)</label>
					</div>
					<div class="col-xs-9">
						<input type="text" class="form-control" id="eng_Name_cl">
					</div>					
				</div>
			</div>

			<div class="text-center" style="padding: 5px 0"></div>
			<div class="row">
				<div class="col-sm-8">
					<div class="col-sm-4 style_col_width30">
						<label for="lb_contact" class="control-label-left" style="margin-top: 8px;"> <!-- <font id="validate_input4_cl"
							style="color: red;">*</font> -->วันที่ คปภ.อนุมัติ
						</label>
					</div>
					<div class="col-xs-4 style_col_width29">
						<input type="text" class="form-control" id="appStart_date_cl" onblur="checkappTo_CL();" placeholder="dd/mm/yyyy"
								      onclick="appStart_date_CL();"  maxlength="10" readonly>
					</div>
					<div class="col-sm-1 style_col_width3 marginleft_style6">
						<label for="lb_contact" class="control-label-left" style="margin-top: 8px;"> <!-- <font id="validate_input5_cl"
							style="color: red;">*</font> -->ถึง
						</label>
					</div>
					<div class="col-xs-4 style_col_width29">
						<input type="text" class="form-control" id="appTo_date_cl" onblur="checkappTo_CL();" placeholder="dd/mm/yyyy" onkeyup=""
								  onclick="appTo_date_CL();" maxlength="10" readonly>
					</div>
					<!-- <div class="col-sm-4 style_col_width30">
						<label for="lb_contact" class="control-label-left" style="margin-top: 8px;"> <font id="validate_input4_cl"
							style="color: red;">*</font>วันที่ คปภ.อนุมัติ
						</label>
					</div>
					<div class="col-xs-4 style_col_width29">
						<input type="text" class="form-control" id="appStart_date_cl" onblur="checkappStart_CL ();" placeholder="dd/mm/yyyy" onkeyup=""
								      onclick="appStart_date();"  maxlength="10">
					</div>
					<div class="col-sm-1 style_col_width3 marginleft_style6">
						<label for="lb_contact" class="control-label-left" style="margin-top: 8px;"> <font id="validate_input5_cl"
							style="color: red;">*</font>ถึง
						</label>
					</div>
					<div class="col-xs-4 style_col_width29">
						<input type="text" class="form-control" id="appTo_date_cl" onblur="checkappTo_CL ();" placeholder="dd/mm/yyyy" onkeyup=""
								  onclick="appTo_date();" maxlength="10">
					</div> -->
					<div class="marginleft_style4">
						<button type="button" class="btn btn-primary fa fa-history" id="" data-toggle="tooltip" title="เร็วๆ นี้"></button>
						<!-- <button type="button" class="btn btn-primary fa fa-history" id="" data-toggle="modal" data-target="#show_history_CL"></button> -->
					</div>
				</div>
				<!-- <div class="col-sm-12">
					<div class="col-sm-2">
						<label for="lb_contact" class="control-label-left"
							style="margin-top: 8px;"><font id="validate_input4_cl"
							style="color: red;">*</font>วันที่ คปภ.อนุมัติ</label>
					</div>
					<div class="col-xs-3">
						<input type="text" class="form-control" id="appStart_date_cl"
							onblur="checkappStart_CL ();" placeholder="dd/mm/yyyy"
							onkeyup="
								        var v = this.value;
								        if (v.match(/^\d{2}$/) !== null) {
								            this.value = v + '/';
								        } else if (v.match(/^\d{2}\/\d{2}$/) !== null) {
								            this.value = v + '/';
								        }"
							maxlength="10">
					</div>
					<div class="col-sm-1">
						<label for="lb_contact" class="control-label-left"
							style="margin-top: 8px;"><font id="validate_input5_cl"
							style="color: red;">*</font>ถึง</label>
					</div>
					<div class="col-xs-3">
						<input type="text" class="form-control" id="appTo_date_cl"
							onblur="checkappTo_CL ();" placeholder="dd/mm/yyyy"
							onkeyup="
								        var v = this.value;
								        if (v.match(/^\d{2}$/) !== null) {
								            this.value = v + '/';
								        } else if (v.match(/^\d{2}\/\d{2}$/) !== null) {
								            this.value = v + '/';
								        }"
							maxlength="10">
					</div>
					<div class="col-xs-1">
						<button type="button" class="btn btn-primary fa fa-history" id=""
							data-toggle="modal" data-target="#show_history_CL"></button>
					</div>
				</div> -->
			</div>
			
			<div class="text-center" style="padding: 5px 0"></div>
			<div class="row">
				<!--  -->
				<div class="col-sm-12">
					<div class="col-sm-3 style_col_width20">
						<label for="lb_contact" class="control-label-left"
							style="margin-top: 8px;"><font id="validate_input6_1cl"
							style="color: red;">*</font>อายุที่ได้รับความเห็นชอบ</label>
					</div>
					<div class="col-sm-9">
						<div class="col-xs-1 marginleft_diff16px">
							<input type="text" class="auto form-control width50px" id="age_Start_cl"
								onkeypress='validate(event)' data-v-min="0" data-v-max="999" maxlength="3" onkeyup="check_age_validate();">
						</div>
						<div class="col-xs-2">
							<select class="form-control width82px unit_calendar" id="dmy_5_cl" onchange="check_age_validate();">
								<option value="NONE">None</option>
							</select>
						</div>
						<div class="col-sm-1 style_col_width3 marginleft_style6">
							<label for="lb_contact" class="control-label-left width82px"
								style="margin-top: 8px;">-</label>
						</div>
						<div class="col-xs-1">
							<input type="text" class="auto form-control width50px" id="age_To_cl"
								onkeypress='validate(event)' data-v-min="0" data-v-max="999" maxlength="3" onkeyup="check_age_validate();" onblur="checkMaxProtectionAge_CL();">
						</div>
						<div class="col-xs-2">
							<select class="form-control width82px unit_calendar" id="dmy_6_cl" onchange="check_age_validate();" onblur="checkMaxProtectionAge_CL();">
								<option value="NONE">None</option>
							</select>
						</div>
						<div class="col-xs-3 style_col_width22">
							<label for="lb_contact" class="control-label-left"
							style="margin-top: 8px;"><font id="validate_input6_2cl"
							style="color: red;">*</font>คุ้มครองสูงสุดถึง</label>
						</div>
						<div class="col-xs-1">
							<input type="text" class="auto form-control width50px" id="maximum_Protection_To_cl"
							onkeypress='validate(event)' onkeyup="max_coverage_cl();" onblur="checkMaxProtectionAge_CL();" data-v-min="0" data-v-max="999" maxlength="3">
						</div>
						<div class="col-xs-1">
							<label for="lb_contact" class="control-label-left"
							style="margin-top: 8px;">ปี</label>
						</div>
					</div>
					</div> 
				</div>
			<div class="text-center" style="padding: 10px 0"></div>
			<div class="row">
				<div class="col-sm-1"></div>
				<div class="col-sm-3">
					<table class="table panel panel-primary table borderless"
						align="right" id="tbl_BI_Mode_CL">
						<thead>
							<tr class="bg-primary">
								<th scope="col" width="10%"><font id="validate_input8_cl"
									style="color: red;" width="10%">*</font>เลือก</th>
								<th scope="col" colspan="2" width="80%">Mode</th>
							</tr>
						</thead>
						<tbody>
						</tbody>
					</table>
					<table class="table panel panel-primary table borderless"
						align="right" id="tbl_BI_FilingCN_CL">
						<thead>
							<tr class="bg-primary">
								<th scope="col" colspan="2"><!-- <font id="validate_input9"
									style="color: red;">*</font> -->Filing Channel</th>
							</tr>
						</thead>
						<tbody>
						</tbody>
					</table>
					
				</div>
				<div class="col-sm-7 panel panel-primary border-custom">
					<table class="table borderless">
						<tr>
							<td><label class="col-sm-1"><font id="validate_input11_cl" style="color: red;">*</font>เพศ</label> 
									<label for="ch_male_cl" class="col-sm-1">ชาย</label>
								<div class="col-sm-1">
									<div class="input-group">
										<input type="checkbox" id="ch_male_cl" name="ch_gender_cl[]" value="MALE">
									</div>
								</div> 
									<label for="ch_female_cl" class="col-sm-1">หญิง</label>
								<div class="col-sm-1">
									<div class="input-group">
										<input type="checkbox" id="ch_female_cl" name="ch_gender_cl[]" value="FEMALE">
									</div>
								</div></td>
						</tr>
						<tr>
							<td><label class="col-sm-5"><!-- <font
									id="validate_input14_cl" style="color: red;">*</font> -->ประเภทสัญญา</label>
								<div class="col-sm-7">
									<div class="input-group col-sm-7">
										<select class="form-control" id="sl_promise_type_cl">
											<option value="NONE">None</option>
										</select>
									</div>
								</div></td>
						</tr>
						<!-- <tr>
							<td><label class="col-sm-5"><font
									id="validate_input12_cl" style="color: red;">*</font>ต่อหน่วย</label>
								<div class="col-sm-7">
									<div class="input-group col-sm-7">
										<select class="form-control list_unit" id="sl_insurance_premium_cl">
										 	<option value="NONE">None</option>
											<option value="1">ต่อวัน</option>
											<option value="2">ต่อสัปดาห์</option>
											<option value="3">ต่อเดือน</option>
											<option value="4">ต่อปี</option>
											<option value="5">ต่อครั้ง</option>
										</select>
									</div>
								</div></td>
						</tr> -->
						<tr>
							<td><label class="col-sm-5"><!-- <font
									id="validate_input13_cl" style="color: red;">*</font> -->ประเภทความคุ้มครอง</label>
								<div class="col-sm-7">
									<div class="input-group col-sm-7">
										<select class="form-control protection_type" id="sl_Protection_type_cl">
											 <option value="NONE">None</option>
										</select>
									</div>
								</div></td>
						</tr>
						<tr>
							<td>
								<div class="text-center" style="padding: 10px 0"></div>
								<div class="col-sm-6">
									<label><font id="validate_input15_cl" style="color: red;">*</font>ระยะประกันของสัญญาเพิ่มเติม</label>
								</div>

							</td>
						</tr>
						<tr>
							<td>
								<div class="col-sm-1">
									<div class="input-group">
										<input type="radio" id="rd_anniversary_cl" name="rd_Term_of_insurance_cl" value="TO_AGE">
									</div>
								</div>
								<div>
									<label class="col-sm-3" for="rd_anniversary_cl">คุ้มครองถึงอายุ</label>
								</div>
								<div class="col-sm-2">
									<div class="input-group">
										<input type="text" class="auto form-control" id="text_anniversary_cl"
											onkeyup="text_anniversary_cl();" onblur="checkMax_text_anniversary_cl();" disabled="disabled"
											onkeypress="validate(event)" data-v-min="0" data-v-max="99" maxlength="2">
									</div>
								</div>
								<div class="col-sm-2">
									<select class="form-control width82px unit_calendar" id="dmy_1_cl" onchange="text_anniversary_cl();"
										disabled="disabled">
										<option value="">None</option>
									</select>
								</div>
							</td>
						</tr>
						<tr>
							<td>
								<div class="col-sm-1">
									<div class="input-group">
										<input type="radio" id="rd_Time_length_cl" name="rd_Term_of_insurance_cl" value="TO_YEAR">
									</div>
								</div>
								<div>
									<label class="col-sm-7" for="rd_Time_length_cl">ระยะเวลาคุ้มครอง</label>
								</div> 
							</td>
						</tr>
						<tr id="tr_BasicInformation1">
							<td>
								<div class="col-sm-10">
									<table class="table table-striped table-bordered text-center" width="100%" id="tb_BasicInformation1">
										<thead>
											<tr>
												<th width="10%" class="text-center bg-primary borderBlack"></th>
												<th width="45%" class="text-center bg-primary borderBlack"
													colspan="2">From</th>
												<th width="45%" class="text-center bg-primary borderBlack"
													colspan="2">To</th>
											</tr>
										</thead>
										<tbody>
										</tbody>
									</table>
								</div>
								<div class="col-sm-3"></div>
								<div class="text-right col-sm-10">
									<div class="col-md-4"></div>
									<div class="col-md-4" style="padding-right: 0">
										<button class="btn btn-primary width100" id="addRowBasicInfo_CL"
											onclick="addRowBasicInformation1();">เพิ่ม</button>
									</div>
									<div class="col-md-4" style="padding-right: 0">
										<button class="btn btn-primary width100" id="deleteRowBasicInfo_CL"
											onclick="deleteRowBasicInformation1();">ลบ</button>
									</div>

								</div>

							</td>
						</tr>
						<tr>
							<td>
								<br>
								<div class="col-sm-1">
									<div class="input-group">
										<input type="checkbox" id="ch_PremRider_cl">
									</div>
								</div>
								<div class="col-sm-11">
									<label for="ch_PremRider_cl"><!-- <font id="validate_input16_cl"
										style="color: red;">*</font> -->ระยะชำระเบี้ยของสัญญาเพิ่มเติม</label>
								</div>
							</td>
						</tr>
						<tr>
							<td>
								<div class="col-sm-1">
									<div class="input-group">
										<input type="radio" id="rd_insurance_premium_cl"
											name="rd_Time_insurance_premium_cl" value="TO_AGE" disabled>
									</div>
								</div>
								<div>
									<label class="col-sm-3" for="rd_insurance_premium_cl">ชำระถึงอายุ</label>
								</div>
								<div class="col-sm-2">
									<div class="input-group">
										<input type="text" class="auto form-control"
											id="text_insurance_premium_cl" disabled="disabled"
											onkeyup="text_insurance_premium_cl();" disabled="disabled"
											onkeypress="validate(event)" data-v-min="0" data-v-max="99" maxlength="2"
											onblur="checkdate0 (this.id);">
									</div>
								</div>
								<div class="col-sm-2">
									<select class="form-control width82px unit_calendar" id="dmy_3_cl" onchange="text_insurance_premium_cl();"
										disabled="disabled">
											<option value="">None</option>										
									</select>
								</div>
							</td>
						</tr>
						<tr>
							<td>
								<div class="col-sm-1">
									<div class="input-group">
										<input type="radio" id="rd_Time_insurance_premium_cl"
											name="rd_Time_insurance_premium_cl" value="TO_YEAR" disabled>
									</div>
								</div>
								<div>
									<label class="col-sm-3" for="rd_Time_insurance_premium_cl">ระยะชำระเบี้ย</label>
								</div>
								<div class="col-sm-2">
									<div class="input-group">
										<input type="text" class="auto form-control"
											id="text_Time_insurance_premium_cl" disabled="disabled"
											onkeyup="text_Time_insurance_premium_cl();"
											disabled="disabled" onkeypress="validate(event)"
											data-v-min="0" data-v-max="99" maxlength="2" onblur="checkdate0 (this.id);">
									</div>
								</div>
								<div class="col-sm-2">
									<select class="form-control width82px unit_calendar" id="dmy_4_cl" onchange="text_Time_insurance_premium_cl();"
										disabled="disabled">
										<option value="">None</option>
									</select>
								</div>
								
								<div class="col-sm-1 chk-speratelyPay">
									<input type="checkbox" id="ch_sperately_pay_ch" disabled="disabled">
								</div>
								<div class="col-sm-3" style="margin: 5px 0 0 0;">
									<label for="ch_sperately_pay_ch">แบ่งจ่ายได้</label>
								</div>
							</td>
						</tr>
						<tr >
							<td >
							<div class="col-sm-1"></div>
								<div class="col-sm-9" id="div_Sperately_Pay">
									<table class="table table-striped table-bordered text-center"
										width="100%" id="tb_Sperately_Pay">
										<thead>
											<tr>
												<th width="5%" class="text-center bg-primary borderBlack"
													style="vertical-align: middle;">เลือก</th>
												<th width="25%" class="text-center bg-primary borderBlack"
													style="vertical-align: middle;">จำนวนงวด<br>การแบ่ง<br>ชำระ</th>
												<th width="70%" class="text-center bg-primary borderBlack"
													style="vertical-align: middle;">ตัวคูณเพื่อกำหนดอัตราเบี้ย<br>ประกันภัยรายงวด (%)</th>
											</tr>
										</thead>
										<tbody>
										
										</tbody>
									</table>
								</div>
								<div class="col-sm-2"></div>
							</td>
						</tr>
						<tr>
							<td>
								<div class="col-sm-12">
									<table class="table table-striped table-bordered"
										width="100%" id="tb_BasicInformation_Death">
										<thead>
											<tr>
												<th width="10%" class="text-center bg-primary borderBlack"
													style="vertical-align: middle;" rowspan="2">เลือก</th>
												<th width="90%" class="text-center bg-primary borderBlack"
													style="vertical-align: middle;" colspan="4">ตารางมรณะ<br>ที่ใช้ในการคำนวณอัตราเบี้ย</th>
											</tr>
											<tr>
												<th class="text-center bg-primary borderBlack" width="10%">
													เพศ
												</th>
												<!-- <th class="text-center bg-primary borderBlack" width="15%">
													%
												</th> -->
												<th class="text-center bg-primary borderBlack" width="60%" colspan="2">
													ตารางที่ใช้
												</th>
												
											</tr>
										</thead>
										<tbody>
										</tbody>
									</table>
								</div>
							</td>
						</tr>
						<tr>
							<td>
								<div class="col-sm-12">
									<table class="table table-striped table-bordered"
										width="100%" id="tb_BasicInformation_TPD">
										<thead>
											<tr>
												<th width="10%" class="text-center bg-primary borderBlack"
													style="vertical-align: middle;"  rowspan="2">เลือก</th>
												<th width="15%" class="text-center bg-primary borderBlack"
													style="vertical-align: middle;" colspan="4">ตารางทุพพลภาพ<br>ที่ใช้ในการคำนวณอัตราเบี้ย</th>
											</tr>
											<tr>
												<th class="text-center bg-primary borderBlack" width="10%">
													เพศ
												</th>
												<!-- <th class="text-center bg-primary borderBlack" width="15%">
													%
												</th> -->
												<th class="text-center bg-primary borderBlack" width="60%" colspan="2">
													ตารางที่ใช้
												</th>
												
											</tr>
										</thead>
										<tbody>									
										</tbody>
									</table>
								</div>
							</td>
						</tr>
						<tr>
							<td>
								<div class="col-sm-8">
										<!-- <input type="checkbox" id="interest_rate_calPremium"> --> <label for="interest_rate_calPremium">อัตราดอกเบี้ยที่ใช้ในการคำนวณเบี้ยประกัน</label>
								</div>
								
								<div class="col-sm-3 marginleft_style3">
									<div class="input-group">
										<input type="text" class="auto text-right form-control"
											id="text_Calculate_premiums_1cl" value="" data-v-min="0.00"
											data-v-max="999.99">
									</div>
								</div> <label class="col-sm-1 margintop_3px marginleft_style7">%</label></td>
						</tr>
						<tr>
							<td>
								<div class="col-sm-12" id="div_TaxReduce">
									<table class="table table-striped table-bordered text-center"
										width="100%" id="tb_TaxReduce">
										<thead>
											<tr>
												<th width="5%" class="text-center bg-primary borderBlack"></th>
												<th width="72%" class="text-center bg-primary borderBlack"
													colspan="2" style="vertical-align: middle;">ลดหย่อนภาษี</th>
													<th width="8%" class="text-center bg-primary borderBlack">ล้าง</th>
												<th width="8%" class="text-center bg-primary borderBlack">ดูค่า</th>
												<th width="7%" class="text-center bg-primary borderBlack">ดาวน์<br>โหลด
												</th>
											</tr>
										</thead>
										<tbody>
										</tbody>

									</table>
								</div>
								<div class="col-sm-5"></div>
								<!-- <div class="text-right col-sm-7">
									<div class="col-md-4"></div>
									<div class="col-md-4" style="padding-right: 0">
										<button class="btn btn-primary width100" id="btn_add_rowTaxBasic_CL" onclick="addRowBasicInformation2 ();">เพิ่ม</button>
									</div>
									<div class="col-md-4" style="padding-right: 0">
										<button class="btn btn-primary width100"
											onclick="deleteRowBasicInformation2();">ลบ</button>
									</div>
								</div> -->

							</td>
						</tr>
						<tr>
							<td>
								<div class="col-sm-6">
									<!-- <input type="checkbox" id="interest_rate_calCapital"> --><label for="interest_rate_calCapital">อัตราดอกเบี้ยที่ใช้ในการคำนวณทุน</label>
								</div>								
									<div class="col-sm-3 marginleft_style3">
										<div class="input-group">
											<input type="text" class="auto text-right form-control"
													id="text_Calculate_premiums_2cl" value="" data-v-min="0.00"
												data-v-max="999.99">
										</div>
									</div> <label class="col-sm-1 margintop_3px marginleft_style7">%</label>
							</td>
						</tr>
						<!-- <tr>
							<td><label class="col-sm-2">หมายเหตุ</label>
								<div class="col-sm-9">
									<div class="input-group">
										<textarea class="height100px" id="remark" cols="50"></textarea>
									</div>
								</div></td>
						</tr> -->
						<tr>
							<td>
								<div class="col-sm-6">
									<!-- <input type="checkbox" id="healthTax_deduction"> --><label for="healthTax_deduction">ลดหย่อนภาษีสุขภาพ 15,000 บาท </label>
								</div>							
									<div class="col-sm-3 marginleft_style3">
										<div class="input-group">
											<input type="text" class="auto text-right form-control" id="text_tax_healthCL" value="" data-v-min="0.00" data-v-max="999.99">
										</div>
									</div> <label class="col-sm-4 margintop_3px marginleft_style7">% ของเบี้ยประกัน</label>
							</td>
						</tr>
						<tr>
							<td>
								<div class="col-md-6 col-md-offset-9 text-right"
									style="float: right;">
									<button type="button" class="btn btn-primary"
										data-dismiss="modal" id="bt_ui005_1_Confirm"
										onclick="bt_Menu1_Confirm_cl();">บันทึก</button>
									<button type="button" class="btn btn-primary"
										data-toggle="modal" data-target="#modal_Cancel">ยกเลิก</button>
								</div>
							</td>
						</tr>
					</table>
				</div>
				<div class="col-sm-1"></div>
			</div>
			<!-- MODAL show_history_CL-->
			<div id="show_history_CL" class="modal fade" role="dialog">
				<div class="modal-dialog modal-lg">
					<div class="panel panel-primary">
						<div class="panel-heading text-left">
							<button type="button" class="close" data-dismiss="modal">&times;</button>
							<p class="margin0">ประวัติการเปลี่ยนแปลง : วันที่ คปภ.อนุมัติ</p>
						</div>
						<div class="modal-body">
							<div style="overflow-y: auto;">
								<table class="table" id="">
									<thead>
										<tr>
											<th class="col-sm-1">ครั้งที่</th>
											<th class="col-sm-1">วันที่เปลี่ยนแปลง</th>
											<th class="col-sm-2">ผู้เปลี่ยนแปลง</th>
											<th class="col-sm-2">วันที่ คปภ.อนุมัติ</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>1</td>
											<td>05/03/2541</td>
											<td>User_01</td>
											<td>05/03/2541 - 05/03/2542</td>
										</tr>
										<tr>
											<td>2</td>
											<td>05/03/2542</td>
											<td>User_02</td>
											<td>05/03/2542 - 05/03/2543</td>
										</tr>
										<tr>
											<td>3</td>
											<td>05/03/2543</td>
											<td>User_01</td>
											<td>05/03/2543 - 05/03/2544</td>
										</tr>
										<tr>
											<td>4</td>
											<td>05/03/2544</td>
											<td>User_01</td>
											<td>05/03/2544 - 05/03/2545</td>
										</tr>
										<tr>
											<td>5</td>
											<td>05/03/2545</td>
											<td>User_03</td>
											<td>05/03/2545 - 05/03/2550</td>
										</tr>
									</tbody>
								</table>
							</div>

						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-primary"
								data-dismiss="modal">ปิด</button>
						</div>
					</div>
				</div>
			</div>
			
			<!-- Modal ตารางมรณะ -->
			<div class="modal fade" id="show_Table_D_CL" role="dialog">
				<div class="modal-dialog">
					<!-- Modal content-->
					<div class="modal-content">
						<div class="modal-header"
							style="background-color: #337AB7; color: white;">
							<button type="button" class="close" data-dismiss="modal">&times;</button>
							<h4 class="modal-title">
								<label>เลือก : ตารางมรณะที่ใช้ในการคำนวณอัตราเบี้ย</label>
							</h4>
						</div>
						<div class="modal-body">
							<div class="ex1">
								<table class="table table-bordered" id="mo_Table_D_CL">
									<thead>
										<tr class="borderBlack">
											<th class="text-center bg-primary borderBlack">เลือก</th>
											<th class="text-center bg-primary borderBlack"><span></span></th>
										</tr>
									</thead>
									<tbody>

									</tbody>
								</table>
							</div>
							<div class="text-center" style="padding: 10px 0"></div>
							<div class="row">
								<div class="col-md-4">
									<button type="button" class="btn btn-primary" 
										data-dismiss="modal" id="tax_save_D" onclick="tax_save_D ();">&nbsp;&nbsp;&nbsp;&nbsp;ตกลง&nbsp;&nbsp;&nbsp;&nbsp;</button>
								</div>
								<div class="col-md-8 text-right">
									<button type="button" class="btn btn-primary"
										data-dismiss="modal">&nbsp;&nbsp;&nbsp;&nbsp;ยกเลิก&nbsp;&nbsp;&nbsp;&nbsp;</button>
								</div>
								<div class="col-md-2"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- Modal ตารางทุพพลภาพ -->
			<div class="modal fade" id="show_Table_TPD_CL" role="dialog">
				<div class="modal-dialog">
					<!-- Modal content-->
					<div class="modal-content">
						<div class="modal-header"
							style="background-color: #337AB7; color: white;">
							<button type="button" class="close" data-dismiss="modal">&times;</button>
							<h4 class="modal-title">
								<label>เลือก : ตารางทุพพลภาพที่ใช้ในการคำนวณอัตราเบี้ย</label>
							</h4>
						</div>
						<div class="modal-body">
							<div class="ex1">
								<table class="table table-bordered" id="mo_Table_TPD_CL">
									<thead>
										<tr class="borderBlack">
											<th class="text-center bg-primary borderBlack">เลือก</th>
											<th class="text-center bg-primary borderBlack"><span></span></th>
										</tr>
									</thead>
									<tbody>

									</tbody>
								</table>
							</div>
							<div class="text-center" style="padding: 10px 0"></div>
							<div class="row">
								<div class="col-md-4">
									<button type="button" class="btn btn-primary" 
										data-dismiss="modal" id="tax_save_TPD" onclick="tax_save_TPD ();">&nbsp;&nbsp;&nbsp;&nbsp;ตกลง&nbsp;&nbsp;&nbsp;&nbsp;</button>
								</div>
								<div class="col-md-8 text-right">
									<button type="button" class="btn btn-primary"
										data-dismiss="modal">&nbsp;&nbsp;&nbsp;&nbsp;ยกเลิก&nbsp;&nbsp;&nbsp;&nbsp;</button>
								</div>
								<div class="col-md-2"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<!-- MODAL Auto ตารางลดหย่อนภาษี -->
			<div class="modal fade" id="modal_TableTaxReduceAuto" role="dialog">
				<div class="modal-dialog">

					<!-- Modal content-->
					<div class="modal-content">
						<div class="modal-header"
							style="background-color: #337AB7; color: white;">
							<button type="button" class="close" data-dismiss="modal">&times;</button>
							<h4 class="modal-title">ดูค่า : <span></span></h4>
						</div>
						<div class="modal-body">
							<div class="ex1">
								<table class="table table-bordered" id="tb_TaxReduce_viewAuto">
									<thead>
										<tr class="borderBlack">
											<th class="text-center bg-primary borderBlack">Entry age</th>
											<th class="text-center bg-primary borderBlack">Sex</th>
											<th class="text-center bg-primary borderBlack">N-Term</th>
											<th class="text-center bg-primary borderBlack">Tax
												Premium rate</th>
										</tr>
									</thead>
									<tbody>
									</tbody>
								</table>
							</div>
							<div class="text-center" style="padding: 10px 0"></div>
							<div class="row">
								<div class="col-md-4">
									<button type="button" class="btn btn-primary" data-dismiss="modal" id="btn_submit_TaxAuto">&nbsp;&nbsp;บันทึก&nbsp;&nbsp;</button></div>
								<div class="col-md-8 text-right">
									<button type="button" class="btn btn-primary" data-dismiss="modal" id="btn_cancel_TaxAuto">&nbsp;&nbsp;ยกเลิก&nbsp;&nbsp;</button>
								</div>
								<div class="col-md-2"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<!-- MODAL ดูค่า ตารางลดหย่อนภาษี-->
			<div class="modal fade" id="modal_TableTaxReduce" role="dialog">
				<div class="modal-dialog">

					<!-- Modal content-->
					<div class="modal-content">
						<div class="modal-header"
							style="background-color: #337AB7; color: white;">
							<button type="button" class="close" data-dismiss="modal">&times;</button>
							<h4 class="modal-title">ดูค่า : <span></span>
							</h4>
						</div>
						<div class="modal-body">
							<div class="ex1">
								<table class="table table-bordered" id="tb_TaxReduce_view">
									<thead>
										<tr class="borderBlack">
											<th class="text-center bg-primary borderBlack">Entry age</th>
											<th class="text-center bg-primary borderBlack">Sex</th>
											<th class="text-center bg-primary borderBlack">N-Term</th>
											<th class="text-center bg-primary borderBlack">Tax
												Premium rate</th>
										</tr>
									</thead>
									<tbody>
									</tbody>
								</table>
							</div>
							<div class="text-center" style="padding: 10px 0"></div>
							<div class="row">
								<div class="col-md-4">
									<button type="button" class="btn btn-primary" id="download_tb_TaxReduce_view">ดาวน์โหลด</button></div>
								<div class="col-md-8 text-right">
									<button type="button" class="btn btn-primary" data-dismiss="modal">&nbsp;&nbsp;&nbsp;&nbsp;ปิด&nbsp;&nbsp;&nbsp;&nbsp;</button>
								</div>
								<div class="col-md-2"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div id="modal_Cancel" class="modal fade bd-example-modal-sm"
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
								<button type="button" class="btn btn-primary"
									onclick="cancelPage('rider_plan.jsp');">ยืนยัน</button>
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
			</div>
		</div>
<!-- hidden value -->
<input type="hidden" id="rateCat_tbTaxReduce" value=""/>
<input type="hidden" id="flag_email_send_CL" value="F">
</body>
</html>