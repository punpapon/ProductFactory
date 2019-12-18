<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>ข้อมูลทั่วไป Basic Information</title>

</head>
<body>
	<div class="row box-body" id="div_main_menuBasic_Info_OL">
		<div class="panel panel-primary">
			<div class="panel-heading">
				<p class="margin0 text-center">
					<B>ข้อมูลทั่วไป Basic Information</B>
				</p>
			</div>
			<div class="text-center" style="padding: 10px 0"></div>
			<div class="row">
				<div class="col-sm-12">
					<div class="col-sm-2">
						<label for="lb_contact" class="control-label-left"
							style="margin-top: 8px;">รหัสความคุ้มครองสัญญาหลัก</label>
					</div>
					<div class="col-xs-3">
						<input class="form-control col-sm-5" type="text"
							id="pass_Insurance_coverage_ol"  disabled="disabled" ></input>
					</div>
				</div>
			</div>
			<!-- Bundle -->	
			<div class="row">
				<div class="col-sm-12">
					<div class="col-sm-2"></div>
					<div class="col-xs-9">
							
						<div class="col-sm-8 marginleft_style9">
						<input type="checkbox" name="chk_bundleBaseplan_OL[]" id="chk_bundleBaseplan_OL1" value="Bundle With Code">
						<label for="chk_bundleBaseplan_OL1" class="label_input2">Bundle With Code</label>
					 	
					 	<div class="col-sm-10 marginleft_style10 displayNone" id="div_bundle_rider_OL">
							<table class="table table-striped table-bordered text-center" id="tbl_rider_bundle_OL" style="width:100%;">
								<thead>
									<tr>
										<!-- <th class="text-center verticalCenter bg-term-green" width="70"></th> -->																				
										<th class="text-left verticalCenter bg-term-green" width="350">รหัสความคุ้มครองสัญญาเพิ่มเติม</th>							
									</tr>
								</thead>
								<tbody>
									<tr id="tbody_rider_bundle_OL0" data-group="0">
										<td colspan="2">ไม่มีข้อมูล</td>
									</tr>
									<!-- <tr id="tbody_rider_bundle_OL0">
										<td id="imgOK_rider_bundle_OL0" class="verticalCenter text-center">
											<input id="chk_rider_bundle_OL0" type="checkbox" value="RO_CR_DDR_R_0001">
										</td>
										<td class="verticalCenter text-left font-term-green">RO_CR_DDR_R_0001</td>
									</tr> -->
								</tbody>							
							</table>
							
							<!-- <div class="col-sm-12 marginleft_style11">
							<div class="col-md-4" style="padding-right: 0">
								<input class="btn btn-primary width100" type="button" id="addBundle_OL" value="เลือก" data-toggle="modal" href="#modal_Choose_Bundle">
							</div>
							<div class="col-md-4" style="padding-right: 0">
								<input class="btn btn-primary width100" type="button" id="delBundle_OL" value="ลบ" onclick="deleteRowBundleOL();">
							</div>
							<div class="col-md-8"></div>		
						</div> -->
							
						</div>
					 	<!-- <div class="col-sm-12 marginleft_style4">
							<div class="col-md-3" style="padding-right: 0">
								<input class="btn btn-primary width100" type="button" id="addBundle_OL" value="เลือก" data-toggle="modal" href="#modal_Choose_bundle">
							</div>
							<div class="col-md-3" style="padding-right: 0">
								<input class="btn btn-primary width100" type="button" id="delBundle_OL" value="ลบ" onclick="deleteRowBundleOL();">
							</div>
							<div class="col-md-8"></div>		
						</div> -->
					 	
					 	</div>	
					 	
					 		
					</div>
				</div>
			</div>
			<div class="text-center" style="padding: 5px 0"></div>
			<div class="row">
				<div class="col-sm-12">
					<div class="col-sm-2 style_col_width14">
						<label for="thai_Name_ol" class="control-label-left"
							style="margin-top: 8px;"><font id="validate_input2_ol"
							style="color: red;">*</font>ชื่อ(ไทย)
						</label>
					</div>
					<div class="col-xs-10 style_col_width82">
						<input type="text" class="form-control" id="thai_Name_ol"
							onkeyup="thai_Name_ol();"></div>
				</div>
			</div>
			
			<div class="text-center" style="padding: 5px 0"></div>
			<div class="row">
				<div class="col-sm-12">
					<div class="col-sm-2 style_col_width14">
						<label for="eng_Name_ol" class="control-label-left"
							style="margin-top: 8px;"><!-- <font id="validate_input3_ol"
							style="color: red;">*</font> --> ชื่อ(อังกฤษ)
						</label>
					</div>
					<div class="col-xs-10 style_col_width82">
						<input type="text" class="form-control" id="eng_Name_ol"></div>
				</div>
			</div>		

			<div class="text-center" style="padding: 5px 0"></div>
			<div class="row">
				<div class="col-sm-6">
					<div class="col-sm-4 style_col_width29">
						<label for="lb_contact" class="control-label-left"
							style="margin-top: 8px;"> <!-- <font id="validate_input4_ol"
							style="color: red;">*</font> -->วันที่ คปภ.อนุมัติ
						</label>
					</div>
					<div class="col-xs-4 style_col_width29">
						<input type="text" class="form-control" id="appStart_date_ol" onblur="checkappTo_OL();" placeholder="dd/mm/yyyy"
								      onclick="appStart_date_OL();"  maxlength="10" readonly>
					</div>
					<div class="col-sm-1 style_col_width3 marginleft_style6">
						<label for="lb_contact" class="control-label-left" style="margin-top: 8px;"> <!-- <font id="validate_input5_cl"
							style="color: red;">*</font> -->ถึง
						</label>
					</div>
					<div class="col-xs-4 style_col_width29">
						<input type="text" class="form-control" id="appTo_date_ol" onblur="checkappTo_OL();" placeholder="dd/mm/yyyy" onkeyup=""
								  onclick="appTo_date_OL();" maxlength="10" readonly>
					</div>
					
					<!-- <div class="col-xs-4 style_col_width29">
						<input type="text" class="form-control" id="appStart_date_ol"
							onblur="checkappStart_OL ();" onclick="appStart_date_OL();" placeholder="dd/mm/yyyy"
							onkeyup=""
							maxlength="10">
					</div>
					<div class="col-sm-1 style_col_width3 marginleft_style6">
						<label for="lb_contact" class="control-label-left"
							style="margin-top: 8px;"> <font id="validate_input5_ol"
							style="color: red;">*</font>ถึง
						</label>
					</div>
					<div class="col-xs-4 style_col_width29">
						<input type="text" class="form-control" id="appTo_date_ol"
							onblur="checkappTo_OL ();" onclick="appTo_date_OL();" placeholder="dd/mm/yyyy"
							onkeyup=""
							maxlength="10">
					</div> -->
					<div class="marginleft_style4">
						<button type="button" class="btn btn-primary fa fa-history" id=""
							data-toggle="tooltip" title="เร็วๆ นี้"></button>
						<!-- <button type="button" class="btn btn-primary fa fa-history" id=""
							data-toggle="modal" data-target="#show_history_OL"></button> -->
					</div>
				</div>
				<!--  -->
				<div class="col-sm-6">
					<div class="col-sm-4">
						<label for="lb_contact" class="control-label-left"
							style="margin-top: 8px;"> <font id="validate_input6_1ol"
							style="color: red;">*</font>อายุที่ขออนุมัติ
						</label>
					</div>
					<div class="col-xs-3">
						<input type="text" class="auto form-control text-center" id="age_Start_ol" 
						onblur="checkdata_OL();" onkeypress="validate(event)" data-v-min="0" data-v-max="99" maxlength="2">
					</div>
					<div class="col-sm-1">
						<label for="lb_contact" class="control-label-left"
							style="margin-top: 8px;"> <!-- <font id="validate_input7_ol"
							style="color: red;">*</font> -->ถึง
						</label>
					</div>
					<div class="col-xs-3">
						<input type="text" class="auto form-control text-center" id="age_To_ol" 
						onblur="checkdata_OL();" onkeypress="validate(event)" data-v-min="0" data-v-max="99" maxlength="2">
					</div>
					<div class="col-sm-1">
						<label for="lb_contact" class="control-label-left"
							style="margin-top: 8px;">ปี</label>
					</div>
				</div>
			</div>
			<div class="text-center" style="padding: 5px 0"></div>
			<div class="row">
				<div class="col-sm-6">
					<div class="col-sm-4"></div>
					<div class="col-xs-3"></div>
					<div class="col-sm-1"></div>
					<div class="col-xs-3"></div>
					<div class="col-xs-1"></div>
				</div>
				<!--  -->
				<div class="col-sm-6">
					<div class="col-sm-4">
						<label for="lb_contact" class="control-label-left"
							style="margin-top: 8px;"> <font id="validate_input6_2ol"
							style="color: red;">*</font>คุ้มครองสูงสุดถึง
						</label>
					</div>
					<div class="col-xs-3">
						<input type="text" class="auto form-control text-center" 
						id="maximum_Protection_To_ol" onkeypress="validate(event)" 
						onkeyup="max_coverage_ol();" maxlength="2" data-v-min="0" data-v-max="99" 
						onblur="checkMaxProtectionAge_OL();">
					</div>
					<div class="col-sm-1">
						<label for="lb_contact" class="control-label-left" style="margin-top: 8px;">ปี</label>
					</div>
					<div class="col-xs-3"></div>
					<div class="col-sm-1"></div>
				</div>
			</div>
			<div class="text-center" style="padding: 10px 0"></div>
			<div class="row">
				<div class="col-sm-1"></div>
				<div class="col-sm-3">
					<table class="table panel panel-primary table borderless" align="right" id="tbl_BI_Mode_OL">
						<thead>
							<tr class="bg-primary">
								<th scope="col" width="10%"><font id="validate_input8_ol"
									style="color: red;" width="10%">*</font>เลือก</th>
								<th scope="col" colspan="2" width="80%">Mode</th>
							</tr>
						</thead>
						<tbody>							
						</tbody>
					</table>
					<table class="table panel panel-primary table borderless" align="right" id="tbl_BI_FilingCN_OL">
							<thead>
							<tr class="bg-primary">
								<th scope="col" colspan="2">
									<!-- <font id="validate_input9"
									style="color: red;">*</font> -->Filing Channel
								</th>
							</tr>
							</thead>
							<tbody>
						</tbody>
					</table>
					<!-- <table class="table panel panel-primary table borderless" align="right" id="tbl_BI_SaleCN_OL">
						  <thead>
							<tr class="bg-primary">
								<th scope="col" colspan="2">
									<font id="validate_input10"
									style="color: red;">*</font>Sale Channel
								</th>
							</tr>
							</thead>
							<tbody>							
						</tbody>
					</table> -->
				</div>
				<div class="col-sm-7 panel panel-primary border-custom">
					<table class="table borderless">
						<tr>
							<td>
							<label class="col-sm-1"><font id="validate_input11_ol" style="color: red;">*</font>เพศ</label> 
								<label class="col-sm-1" for="ch_male_ol">ชาย</label>
								<div class="col-sm-1">
									<div class="input-group">
										<input type="checkbox" id="ch_male_ol" name="ch_gender_ol[]" value="MALE">
									</div>
								</div> 
								<label class="col-sm-1" for="ch_female_ol">หญิง</label>
								<div class="col-sm-1">
									<div class="input-group">
										<input type="checkbox" id="ch_female_ol" name="ch_gender_ol[]" value="FEMALE">
									</div>
								</div>
							</td>
						</tr>
						<tr>
							<td>
								<div class="col-sm-7">
									<table class="table panel panel-primary table borderless" align="right" id="tbl_BI_AgeCal_OL">
											<thead>
											<tr class="bg-primary">
												<th scope="col" colspan="2">
													<!-- <font id="fon_Age_Cal_formula"
													style="color: red;">*</font> -->สูตรการคำนวณอายุ
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
							<td><label class="col-sm-5"> <!-- <font
									id="validate_input12_ol" style="color: red;">*</font> -->เบี้ยประกัน
							</label>
								<div class="col-sm-7">
									<div class="input-group col-sm-7">
										<select class="form-control " id="sl_insurance_premium_ol">	
											<option value="NONE">None</option>																			
										</select>
									</div>
								</div></td>
						</tr>
						<tr>
							<td><label class="col-sm-5"> <!-- <font
									id="validate_input13_ol" style="color: red;">*</font> -->ประเภทความคุ้มครอง
							</label>
								<div class="col-sm-7">
									<div class="input-group col-sm-7">
										<select class="form-control" id="sl_coverage_type_ol">
											<option value="NONE">None</option>																				
										</select>
									</div>
								</div></td>
						</tr>
						<tr>
							<td><label class="col-sm-5"> <!-- <font
									id="validate_input14_ol" style="color: red;">*</font> -->ประเภทสัญญา
							</label>
								<div class="col-sm-7">
									<div class="input-group col-sm-7">
										<select class="form-control" id="sl_contract_type_ol">
											<option value="NONE">None</option>								
										</select>
									</div>
								</div></td>
						</tr>
						<tr>
							<td>
								<div class="text-center" style="padding: 10px 0"></div>
								<div class="col-sm-6">
									<label><font id="validate_input15_ol"
										style="color: red;">*</font>ระยะประกันของสัญญาประกันชีวิต</label>
								</div>

							</td>
						</tr>
						<tr>
							<td>
								<div class="col-sm-1">
									<div class="input-group">
										<input type="radio" id="rd_anniversary_ol"
											name="rd_Term_of_insurance_ol" value="TO_AGE">
									</div>
								</div>
								<div>
									<label class="col-sm-3" for="rd_anniversary_ol">คุ้มครองถึงอายุ</label>
								</div>
								<div class="col-sm-2">
									<div class="input-group">
										<input type="text" class="auto form-control" 
										id="text_anniversary_ol" onkeyup="text_anniversary_ol();" 
										onblur="checkMax_text_anniversary_ol();" onkeypress="validate(event)" 
										data-v-min="0" data-v-max="99" maxlength="2" disabled>
									</div>
								</div>
								<div class="col-sm-2">
									<select class="form-control width82px list_unit1" id="dmy_1_ol" onchange="text_anniversary_ol();"
										disabled="disabled">
										<!-- <option value="NONE">None</option> -->
									</select>
								</div>
							</td>
						</tr>
						<tr>
							<td>
								<div class="col-sm-1">
									<div class="input-group">
										<input type="radio" id="rd_Time_length_ol"
											name="rd_Term_of_insurance_ol" value="TO_YEAR">
									</div>
								</div>
								<div>
									<label class="col-sm-7" for="rd_Time_length_ol">ระยะเวลาคุ้มครอง</label>
								</div>
							</td>
						</tr>
						<tr>
							<td>
							<div class="col-sm-1"></div>
								<div class="col-sm-10">
									<table class="table table-striped table-bordered text-center"
										width="100%" id="tb_BasicInformation1_OL">
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
										<button class="btn btn-primary width100"
											onclick="addRowBasicInformation1_OL ();">เพิ่ม</button>
									</div>
									<div class="col-md-4" style="padding-right: 0">
										<button class="btn btn-primary width100"
											onclick="deleteRowBasicInformation1_OL();">ลบ</button>
									</div>

								</div>

							</td>
						</tr>
						<tr>
							<td>
								<div class="col-sm-12">
									<label><br> <font id="validate_input16_ol"
										style="color: red;">*</font> ระยะชำระเบี้ยของสัญญาประกันชีวิต</label>
								</div>
							</td>
						</tr>
						<tr>
							<td>
								<div class="col-sm-1">
									<div class="input-group">
										<input type="radio" id="rd_insurance_premium_ol"
											name="rd_Time_insurance_premium_ol" value="TO_AGE">
									</div>
								</div>
								<div>
									<label class="col-sm-3" for="rd_insurance_premium_ol">ชำระถึงอายุ</label>
								</div>
								<div class="col-sm-2">
									<div class="input-group">
										<input type="text" class="auto form-control"
											id="text_insurance_premium_ol" disabled="disabled"
											onkeyup="text_insurance_premium_ol();" disabled="disabled"
											onkeypress="validate(event)" data-v-min="0" data-v-max="99" maxlength="2"
											onblur="checkdate0 (this.id);">
									</div>
								</div>
								<div class="col-sm-2">
									<select class="form-control width82px list_unit1" id="dmy_3_ol" onchange="text_insurance_premium_ol();"
										disabled="disabled">
										<option value="NONE">None</option>
									</select>
								</div>
							</td>
						</tr>
						<tr>
							<td>
								<div class="col-sm-1">
									<div class="input-group">
										<input type="radio" id="rd_Time_insurance_premium_ol"
											name="rd_Time_insurance_premium_ol" value="TO_YEAR">
									</div>
								</div>
								<div>
									<label class="col-sm-3" for="rd_Time_insurance_premium_ol">ระยะชำระเบี้ย</label>
								</div>
								<div class="col-sm-2">
									<div class="input-group">
										<input type="text" class="auto form-control"
											id="text_Time_insurance_premium_ol" disabled="disabled"
											onkeyup="text_Time_insurance_premium_ol();"
											disabled="disabled" onkeypress="validate(event)"
											data-v-min="0" data-v-max="99" maxlength="2" onblur="checkdate0 (this.id);">
									</div>
								</div>
								<div class="col-sm-2">
									<select class="form-control width82px list_unit1" id="dmy_4_ol" onchange="text_Time_insurance_premium_ol();"
										disabled="disabled">
										<option value="NONE">None</option>		
									</select>
								</div>
								<div class="col-sm-1 chk-speratelyPay">
									<input type="checkbox" id="ch_sperately_pay_ch_ol" disabled="disabled">
								</div>
								<div class="col-sm-3" style="margin: 5px 0 0 0;">
									<label for="ch_sperately_pay_ch_ol">แบ่งจ่ายได้</label>
								</div>
							</td>
						</tr>
						<tr>
							<td>
							<div class="col-sm-1"></div>
								<div class="col-sm-9" id="div_Sperately_Pay_ol">
									<table class="table table-striped table-bordered text-center"
										width="100%" id="tb_Sperately_Pay_ol">
										<thead>
											<tr>
												<th width="5%" class="text-center bg-primary borderBlack"
													style="vertical-align: middle;">เลือก</th>
												<th width="25%" class="text-center bg-primary borderBlack"
													style="vertical-align: middle;">จำนวนงวด<br>การแบ่ง<br>ชำระ</th>
												<th width="70%" class="text-center bg-primary borderBlack"
													style="vertical-align: middle;">ตัวคูณเพื่อกำหนดอัตราเบี้ย<br>ประกันภัยรายงวด</th>
											</tr>
										</thead>
										<tbody>
											
										</tbody>
									</table>
								</div>
								<div class="col-sm-2"></div>
							</td>
						</tr>
						<!-- เปลี่ยนใน OL  -->
						<tr>
							<td>
							<!-- <div class="col-sm-1"></div> -->
							<div class="col-sm-12" id="div_calPM_ol">
								<table class="table table-striped table-bordered text-center"
									width="100%" id="tb_CalPremiumUse_ol">
									<thead>
										<tr>
											<th width="5%" class="text-center bg-primary borderBlack"
												style="vertical-align: middle;">เลือก</th>
											<th width="80%" class="text-center bg-primary borderBlack"
												style="vertical-align: middle;">รายการตารางที่ใช้ในการคำนวณเบี้ย</th>
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
									<table class="table table-striped table-bordered displayNone"
										width="100%" id="tb_allCalPM_OL">
										<thead>
											<tr>
												<th width="15%" class="text-center bg-primary borderBlack"
													style="vertical-align: middle;"  rowspan="2">รายการตาราง</th>
												<th width="10%" class="text-center bg-primary borderBlack"
													style="vertical-align: middle;"  rowspan="2">เลือก</th>
												<th width="40%" class="text-center bg-primary borderBlack"
													style="vertical-align: middle;" colspan="4">ตารางที่ใช้ในการคำนวณเบี้ย</th>
											</tr>
											<tr>
												<th class="text-center bg-primary borderBlack" width="10%">
													เพศ
												</th>
												<th class="text-center bg-primary borderBlack" width="35%" colspan="2">
													ชื่อ
												</th>													
												<th class="text-center bg-primary borderBlack" width="40%">
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
							<td><label class="col-sm-7"> <!-- <font
									id="validate_input17_1cl" style="color: red;">*</font> -->อัตราดอกเบี้ยที่ใช้ในการคำนวณเบี้ยประกัน
							</label>
								<div class="col-sm-1"></div>
								<div class="col-sm-3">
									<div class="input-group">
										<input type="text" class="auto text-right form-control"
											id="text_Calculate_premiums_1ol" value=""
											data-v-min="0.00" data-v-max="999.99">
									</div>
								</div> <label class="col-sm-1">%</label></td>
						</tr>
						<tr>
							<td><label class="col-sm-7"> <!-- <font
									id="validate_input17_2cl" style="color: red;">*</font> -->อัตราดอกเบี้ยที่ใช้ในการคำนวณทุนลด
							</label>
								<div class="col-sm-1"></div>
								<div class="col-sm-3">
									<div class="input-group">
										<input type="text" class="auto text-right form-control"
											id="text_Calculate_premiums_2ol" value=""
											data-v-min="0.00" data-v-max="999.99">
									</div>
								</div> <label class="col-sm-1">%</label></td>
						</tr>
						<tr>
							<td>
								<div class="col-sm-12" id="div_TaxReduce_OL">
									<table class="table table-striped table-bordered text-center"
										width="100%" id="tb_TaxReduce_OL">
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
										<button class="btn btn-primary width100" id="btn_add_rowTaxBasic_OL"
											onclick="addRowBasicInformation2 ();">เพิ่ม</button>
									</div>
									<div class="col-md-4" style="padding-right: 0">
										<button class="btn btn-primary width100"
											onclick="deleteRowBasicInformation2();">ลบ</button>
									</div>
								</div> -->

							</td>
						</tr>
						<tr>
							<td><label class="col-sm-2">หมายเหตุ</label>
								<div class="col-sm-9">
									<div class="input-group">
										<textarea class="height100px" id="Basic_remark_OL" cols="50"></textarea>
									</div>
								</div></td>
						</tr>
						<tr>
							<td>
								<div class="col-md-6 col-md-offset-9 text-right"
									style="float: right;">
									<button type="button" class="btn btn-primary"
										data-dismiss="modal" id="bt_ui005_1_OL_Confirm"
										onclick="bt_Menu1_Confirm_ol();">บันทึก</button>
									<button type="button" class="btn btn-primary"
										data-toggle="modal" data-target="#modal_Cancel_OL">ยกเลิก</button>
								</div>
							</td>
						</tr>
					</table>
				</div>
				<div class="col-sm-1"></div>
			</div>
			<!-- Modal ตารางที่ใช้ในการคำนวณเบี้ย -->
			<div class="modal fade" id="show_Table_calPM_OL" role="dialog">
				<div class="modal-dialog">
					<!-- Modal content-->
					<div class="modal-content">
						<div class="modal-header"
							style="background-color: #337AB7; color: white;">
							<button type="button" class="close" data-dismiss="modal">&times;</button>
							<h4 class="modal-title">
								<label>เลือก : <span></span></label>
							</h4>
						</div>
						<div class="modal-body">
							<div class="ex1">
								<table class="table table-bordered" id="mo_Table_calPM_OL">
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
										id="tax_save_calPM_OL" onclick="tax_save_calPM_OL();">&nbsp;&nbsp;&nbsp;&nbsp;ตกลง&nbsp;&nbsp;&nbsp;&nbsp;</button>
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
			
			<!-- MODAL show_history_OL-->
			<div id="show_history_OL" class="modal fade" role="dialog">
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
			
			<!-- MODAL Auto ตารางลดหย่อนภาษี -->
			<div class="modal fade" id="modal_TableTaxReduceAuto_OL" role="dialog">
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
								
								<table class="table table-bordered" id="tb_TaxReduce_viewAuto_OL">
									<thead>
										<tr class="borderBlack">
											<th class="text-center bg-primary borderBlack">Plan</th>
											<th class="text-center bg-primary borderBlack">Sex</th>
											<th class="text-center bg-primary borderBlack">mode</th>
											<th class="text-center bg-primary borderBlack">Entry age</th>
											<th class="text-center bg-primary borderBlack">Premium</th>
											<th class="text-center bg-primary borderBlack">Blank</th>
										</tr>
									</thead>
									<tbody>
									</tbody>
								</table>
								
							</div>
							<div class="text-center" style="padding: 10px 0"></div>
							<div class="row">
								<div class="col-md-4">
									<button type="button" class="btn btn-primary" data-dismiss="modal" id="btn_submit_TaxAuto_OL">&nbsp;&nbsp;บันทึก&nbsp;&nbsp;</button></div>
								<div class="col-md-8 text-right">
									<button type="button" class="btn btn-primary" data-dismiss="modal" id="btn_cancel_TaxAuto_OL">&nbsp;&nbsp;ยกเลิก&nbsp;&nbsp;</button>
								</div>
								<div class="col-md-2"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<!-- คุ้มครองชีวิตตั้งแต่ 10 ปีขึ้นไป -->
			<div class="modal fade" id="modal_TableTaxReduceAuto2_OL" role="dialog">
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
								<!-- คุ้มครองชีวิตตั้งแต่ 10 ปีขึ้นไป -->
								<table class="table table-bordered" id="tb_TaxReduce_viewAuto2_OL">
									<thead>
										<tr class="borderBlack">
											<th class="text-center bg-primary borderBlack">Plan</th>
											<th class="text-center bg-primary borderBlack">Sex</th>
											<th class="text-center bg-primary borderBlack">mode</th>
											<th class="text-center bg-primary borderBlack">Entry age</th>
											<th class="text-center bg-primary borderBlack">Premium</th>
											<th class="text-center bg-primary borderBlack">Blank</th>
										</tr>
									</thead>
									<tbody>
									</tbody>
								</table>
								
							</div>
							<div class="text-center" style="padding: 10px 0"></div>
							<div class="row">
								<div class="col-md-4">
									<button type="button" class="btn btn-primary" data-dismiss="modal" id="btn_submit_TaxAuto2_OL">&nbsp;&nbsp;บันทึก&nbsp;&nbsp;</button></div>
								<div class="col-md-8 text-right">
									<button type="button" class="btn btn-primary" data-dismiss="modal" id="btn_cancel_TaxAuto2_OL">&nbsp;&nbsp;ยกเลิก&nbsp;&nbsp;</button>
								</div>
								<div class="col-md-2"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<!-- MODAL ดูค่า ตารางลดหย่อนภาษี-->
			<div class="modal fade" id="modal_TableTaxReduce_OL" role="dialog">
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
								
								<!-- สุขภาพ 15,000 บาท -->
								<table class="table table-bordered" id="tb_TaxReduce_view_OL">
									<thead>
										<tr class="borderBlack">
											<th class="text-center bg-primary borderBlack">Plan</th>
											<th class="text-center bg-primary borderBlack">Sex</th>
											<th class="text-center bg-primary borderBlack">mode</th>
											<th class="text-center bg-primary borderBlack">Entry age</th>
											<th class="text-center bg-primary borderBlack">Premium</th>
											<th class="text-center bg-primary borderBlack">Blank</th>
										</tr>
									</thead>
									<tbody>
									</tbody>
								</table>
								
							</div>
							<div class="text-center" style="padding: 10px 0"></div>
							<div class="row">
								<div class="col-md-4">
									<button type="button" class="btn btn-primary" id="download_tb_TaxReduce_view_OL">ดาวน์โหลด</button></div>
								<div class="col-md-8 text-right">
									<button type="button" class="btn btn-primary" data-dismiss="modal">&nbsp;&nbsp;&nbsp;&nbsp;ปิด&nbsp;&nbsp;&nbsp;&nbsp;</button>
								</div>
								<div class="col-md-2"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<!-- คุ้มครองชีวิตตั้งแต่ 10 ปีขึ้นไป -->
			<div class="modal fade" id="modal_TableTaxReduce2_OL" role="dialog">
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
								<table class="table table-bordered" id="tb_TaxReduce_view2_OL">
									<thead>
										<tr class="borderBlack">
											<th class="text-center bg-primary borderBlack">Plan</th>
											<th class="text-center bg-primary borderBlack">Sex</th>
											<th class="text-center bg-primary borderBlack">mode</th>
											<th class="text-center bg-primary borderBlack">Entry age</th>
											<th class="text-center bg-primary borderBlack">Premium</th>
											<th class="text-center bg-primary borderBlack">Blank</th>
										</tr>
									</thead>
									<tbody>
									</tbody>
								</table>
								
							</div>
							<div class="text-center" style="padding: 10px 0"></div>
							<div class="row">
								<div class="col-md-4">
									<button type="button" class="btn btn-primary" id="download_tb_TaxReduce_view2_OL">ดาวน์โหลด</button></div>
								<div class="col-md-8 text-right">
									<button type="button" class="btn btn-primary" data-dismiss="modal">&nbsp;&nbsp;&nbsp;&nbsp;ปิด&nbsp;&nbsp;&nbsp;&nbsp;</button>
								</div>
								<div class="col-md-2"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<!-- modal ตารางที่ใช้คำนวณเบี้ย -->
			<div class="modal fade" id="modal_TableCalPMAuto_OL" role="dialog">
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
								<table class="table table-bordered" id="tb_CalPM_viewAuto_OL">
									<thead>
										<tr class="borderBlack">
											<th class="text-center bg-primary borderBlack">Table Code</th>
											<th class="text-center bg-primary borderBlack">Sex</th>
											<th class="text-center bg-primary borderBlack">Age</th>
											<th class="text-center bg-primary borderBlack">ix</th>
										</tr>
									</thead>
									<tbody>
									</tbody>
								</table>
							</div>
							<div class="text-center" style="padding: 10px 0"></div>
							<div class="row">
								<div class="col-md-4">
									<button type="button" class="btn btn-primary" data-dismiss="modal" id="btn_submit_CalPMAuto_OL">&nbsp;&nbsp;บันทึก&nbsp;&nbsp;</button></div>
								<div class="col-md-8 text-right">
									<button type="button" class="btn btn-primary" data-dismiss="modal" id="btn_cancel_CalPMAuto_OL">&nbsp;&nbsp;ยกเลิก&nbsp;&nbsp;</button>
								</div>
								<div class="col-md-2"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<!-- Cancel -->
			<div id="modal_Cancel_OL" class="modal fade bd-example-modal-sm"
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
								<button type="button" class="btn btn-primary" onclick="cancelPage('base_plan.jsp');">ยืนยัน</button>
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
			
			<!-- Modal Bundle -->
			<div class="modal fade" id="modal_Choose_Bundle" role="dialog">
					<div class="modal-dialog modal-lg">
						<div class="panel panel-primary">
							<div class="panel-heading text-left">
								<button type="button" class="close" data-dismiss="modal">&times;</button>
								<h4 class="modal-title">เลือก : ความคุ้มครองสัญญาเพิ่มเติม</h4>
							</div>
							<div class="modal-body">
								<div class="row" style="padding: 10px 0"></div>
								<div class="box-body">
									<table class="table table-striped table-bordered" 
										style="width: 100%" id="tb_bundleRiderOL_modal">
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
									data-dismiss="modal" onclick="bt_save_bundleRiderOL();">ตกลง</button>
								<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
		
							</div>
						</div>
					</div>
				</div>
				
	<!-- 4 cols ตารางที่ใช้ในการคำนวณเบี้ย - ตารางที่ใช้-->		
	<div class="modal fade" id="modal_calInsuranceAuto_OL" role="dialog">
		<div class="modal-dialog">

			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">ดูค่า CV : <span></span></h4>
				</div>
				<div class="modal-body">
					<div class="ex1">
						<table class="table table-bordered" id="tbl_calInsuranceAuto_OL">
							<thead>
								<tr style="background-color: #EEEEEE;">
									<th class="text-center">Entry age</th>
									<th class="text-center">Sex</th>
									<th class="text-center">N-Term</th>
									<th class="text-center">Premium rate</th>
								</tr>
							</thead>
							<tbody>														
							</tbody>
						</table>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row">
						<div class="col-md-4">
							<button type="button" class="btn btn-primary" data-dismiss="modal" id="btn_submit_calInsuranceAuto_OL">&nbsp;&nbsp;บันทึก&nbsp;&nbsp;</button></div>
						<div class="col-md-8 text-right">
							<button type="button" class="btn btn-primary" data-dismiss="modal" id="btn_cancel_calInsuranceAuto_OL">&nbsp;&nbsp;ยกเลิก&nbsp;&nbsp;</button>
						</div>
						<div class="col-md-2"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
			
		</div>
	</div>
<input type="hidden" id="flag_email_send_OL" value="F">
</body>
</html>