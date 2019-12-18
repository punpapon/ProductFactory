<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<div class="panel panel-default panel-bordertop">
	<br clear="all">
	<div class="term_boxpanel">
	
		<div class="row">
			<div class="col-sm-12 style_col_float_margin">
				<div class="col-sm-2 style_col_topic">
					<label>วันที่กำหนดการขาย</label>
				</div>
				<div class="col-xs-3 style_col_width22">
										<input type="text" class="form-control" id="datefrom_ol_menu5" value=""
											placeholder="dd/mm/yyyy"
											onkeyup="   
														var v = this.value;
												        if (v.match(/^\d{2}$/) !== null) {
												            this.value = v + '/';
												        } else if (v.match(/^\d{2}\/\d{2}$/) !== null) {
												            this.value = v + '/';
												        }"
											maxlength="10"
											onblur="checkdateTo_fixSale_OL();" readonly>
									</div>
									<div class="col-left paddingtop_6px">-</div>
									<div class="col-xs-3 style_col_width22">
										<input type="text" class="form-control" id="dateto_ol_menu5" value=""
											 placeholder="dd/mm/yyyy"
											onkeyup="   
														var v = this.value;
												        if (v.match(/^\d{2}$/) !== null) {
												            this.value = v + '/';
												        } else if (v.match(/^\d{2}\/\d{2}$/) !== null) {
												            this.value = v + '/';
												        }" 
											maxlength="10"
											onblur="checkdateTo_fixSale_OL();" readonly>
									</div>
									<div class="col-xs-1">
										<button type="button" class="btn btn-primary fa fa-history" id=""
											data-toggle="tooltip" title="เร็วๆ นี้"></button>											
									</div>
			</div>
		</div>

		<div class="row">
			<div class="col-sm-12 style_col_float_margin">
				<div class="col-sm-2 style_col_topic">
					<label>พิกัดอายุ</label>
				</div>
				<div class="col-xs-1">
					<input type="text"
						class="form-control width50px text-right"
						id="start_age_insure_ol" 
						onkeyup="replaceSpecialSymbol(this) , check_age_validate_OL();"
						onkeypress="validate(event)"
						data-v-min="0"
						data-v-max="999"
						maxlength="3"
						value="0">
				</div>
				<div class="col-xs-2 style_col_width13dot67" style="margin-left: -15px;">
					<select class="form-control width82px font-term-green" id="start_age_insure_unit_ol" onchange="check_age_validate_OL();">
						<option value="NONE" >None</option>
					</select>
				</div>
				<div class="col-left" style="padding-top: 6px;">-</div>
				<div class="col-xs-1">
					<input type="text"
						class="form-control width50px text-right"
						id="end_age_insure_ol" 
						onkeyup="replaceSpecialSymbol(this) , check_age_validate_OL();" 
						data-v-min="0"
						data-v-max="999"
						maxlength="3"
						onblur="checkMaxProtectionAge_OL();"
						value="0">
				</div>
				<div class="col-left style_col_width13">
					<select class="form-control width82px font-term-green" id="end_age_insure_unit_ol" onchange="check_age_validate_OL();" onblur="checkMaxProtectionAge_OL();">
					<option value="NONE" >None</option>
					</select>
				</div>
				<div class="col-xs-2 style_col_width15dot5 paddingtop_6px">
					<strong>คุ้มครองสูงสุดถึง</strong>
				</div>
				<div class="col-left style_col_width13">
					<select class="form-control width82px font-term-green" id="end_age_maxInsure_unit_ol" onblur="checkMaxProtectionAge_OL();">
					</select>
				</div>
				<div class="col-left marginleft_diff5px" style="margin-left: 5px;">
					<input type="text" id="max_insure_ol"
						class="form-control width50px text-right"
						maxlength="3"
						onblur="checkMaxProtectionAge_OL();">
				</div>
				<div class="col-xs-1 paddingtop_6px">
					<strong>ปี</strong>
				</div>
			</div>
		</div>


		<div class="row">
			<div class="col-sm-12 style_col_float_margin">
				<div class="col-sm-2 style_col_topic">
					<label>ชั้นอาชีพที่เสนอขาย</label>
				</div>
				<div class="col-sm-6">
					<table class="table table-bordered" id="tbl_saleDegreeTerm" style="width: 100%;">
						<thead>
							<tr>
								<th class="text-center bg-term-blue verticalCenter" width="70">เลือก</th>
								<th colspan="2" class="text-center verticalCenter bg-term-blue"
									width="350">ชั้นอาชีพ</th>
							</tr>
						</thead>
						<tbody>
							<tr id="tbody_career_term0">
								<td id="imgOK_career_term0" class="verticalCenter text-center"><input id="mode_career_term0_ol" type="checkbox" value="0" onclick="validate_levelJob(this); validate_input10_ol();"></td>						
								<td class="verticalCenter">ทุกชั้นอาชีพ</td>																									
							</tr>
							<tr id="tbody_career_term1">
								<td id="imgOK_career_term1" class="verticalCenter text-center"><input id="mode_career_term1_ol" type="checkbox" onclick="validate_input10_ol();" value="1"></td>						
								<td class="verticalCenter">ชั้นอาชีพ 1</td>																									
							</tr>
							<tr id="tbody_career_term2">
								<td id="imgOK_career_term2" class="verticalCenter text-center"><input id="mode_career_term2_ol" type="checkbox" onclick="validate_input10_ol();" value="2"></td>						
								<td class="verticalCenter">ชั้นอาชีพ 2</td>																									
							</tr>
							<tr id="tbody_career_term3">
								<td id="imgOK_career_term3" class="verticalCenter text-center"><input id="mode_career_term3_ol" type="checkbox" onclick="validate_input10_ol();" value="3"></td>						
								<td class="verticalCenter">ชั้นอาชีพ 3</td>																									
							</tr>
							<tr id="tbody_career_term4">
								<td id="imgOK_career_term4" class="verticalCenter text-center"><input id="mode_career_term4_ol" type="checkbox" onclick="validate_input10_ol();" value="4"></td>						
								<td class="verticalCenter">ชั้นอาชีพ 4</td>																									
							</tr>	
						</tbody>
					</table>
				</div>
			</div>
		</div>

	</div>
	<div class="term_boxpanel margintop_20px">
		<div class="row">
			<div class="col-sm-12 style_col_float_margin">
				<div class="col-sm-2 style_col_topic">
					<label>การคำนวณจำนวนเงินเอาประกันภัย</label>
				</div>
				<div class="col-sm-10 style_table1 content_scroll">
					<table class="table table-bordered" style="width: 1000px;" id="tbl_cal_amount_OL">
						<thead>
							<tr id="tr_tbl_menu_5_term" data-id="1" data-level="1">
								<th rowspan="2" class="text-center bg-term-blue verticalCenter" width="120">Coverage<br>Rider</th>
								<th rowspan="2" class="text-center verticalCenter bg-term-blue" width="70">ประเภท<br>ความคุ้มครอง</th>
								<th colspan="2" class="text-center verticalCenter bg-term-blue" width="140">ทุนชีวิตอ้างอิง (SA Life)</th>
								<th colspan="3" class="text-center verticalCenter bg-term-blue" width="190">จำนวนเงินเอาประกันภัย</th>
								<th colspan="2" class="text-center verticalCenter bg-term-blue" width="80">จำนวนเงินขั้นต่ำ<br></th>
							</tr>
							<tr>
								<th class="text-center " width="70">ตั้งแต่</th>
								<th class="text-center " width="70">ถึง</th>
								<th class="text-center " width="70">จำนวน</th>
								<th class="text-center " width="70">หน่วย</th>
								<th class="text-center " width="50">ของ</th>
								<th class="text-center " width="10%">(บาท)</th>
								<th class="text-center " width="16%">ของ</th>
							</tr>
						</thead>
						<tbody>
						</tbody>
					</table>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12 style_col_float_margin">
				<div class="col-sm-2 style_col_topic">
					<label>จำนวนเอาเงินประกันภัยขั้นต่ำ</label>
				</div>
				<div class="col-sm-3">
					<input type="text" class="autoComma text-right form-control" id="minimum_insuranceCost" data-v-min="0.00" data-v-max="999999999.99" value="0.00">
				</div>
				<div class="col-sm-3">
					<label>บาท</label>
				</div>

			</div>
		</div>
		<div class="row">
			<div class="col-sm-12 style_col_float_margin">
				<div class="col-sm-2 style_col_topic">
					<label>ข้อกำหนดจำนวนเงินเอาประกันภัยสัญญาเพิ่มเติม</label>
				</div>
				<div class="col-sm-4 panel panel-default panel_style1">
					<input type="checkbox" class="custom-control-input" id="spec_rd" value="NONE" onclick="unProp_specRD(this)" checked>
					<div class="col-sm-12">
						<div class="col-sm-12">
							<input type="radio" name="rd" id="spec_rd1" value="BASE_PLAN_SA" checked><label for="spec_rd1" class="label_input2">เท่ากับสัญญาประกันชีวิต</label><br>
							<br>
						</div>
						<div class="col-sm-12">
							<input type="radio" name="rd" id="spec_rd2" value="UNDEFINED"><label for="spec_rd2" class="label_input2">ไม่กำหนด</label><br>
						</div>
					</div>


				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-sm-12 style_col_float_margin">
				<div class="col-sm-2 style_col_topic">
					<label>จำนวนเอาเงินประกันภัยสูงสุด(ต่อแบบ)</label>
				</div>
				<div class="col-sm-9 panel panel-default panel_style1" id="panel_max_amount_insureOL">
					<div class="col-sm-12 padding_all1">
						<div class="col-sm-3">
						<input type="radio" name="rd_max_amount_insure_OL[]" id="rd_max_amount_insure_OL1" value="จำกัด" onclick="chk_max_amount_insure_OL(1)"><label for="rd_max_amount_insure_OL1" class="label_input2">จำกัด</label>
						</div>
						<div class="col-sm-3">
						<input type="radio" name="rd_max_amount_insure_OL[]" id="rd_max_amount_insure_OL2" value="ไม่จำกัด" onclick="chk_max_amount_insure_OL(2)" checked=""><label for="rd_max_amount_insure_OL2" class="label_input2">ไม่จำกัด</label>
						</div>
					</div>
					
					<div class="col-sm-12" id="div_max_amount_limit_OL" hidden="">
						<table class="table table-bordered" id="tbl_max_amount_limit_OL1" style="width:70%;">
						<tbody>
							<tr id="tbody_max_amount_limit_OL1">
								<td id="imgOK_max_amount_limit_OL1" class="verticalCenter text-center"><input id="chk_max_amount_limit_OL1" type="checkbox" value="0" onclick="chk_max_amount_limit_OL(1,1);"></td>						
								<td class="verticalCenter bg-term-gray"><label for="chk_max_amount_limit_OL1" class="label_notbold">จำนวนกรมธรรม์(ฉบับ)</label></td>
								<td class="verticalCenter" width="40%"><input type="text" id="txb_max_amount_limit_OL1" class="auto form-control text-right" value="" data-v-min="0" data-v-max="999" disabled=""></td>																									
							</tr>								
						</tbody>							
					</table>
					<table class="table table-bordered" id="tbl_max_amount_limit_OL2" style="width:70%;">
						<tbody>
							<tr id="tbody_max_amount_limit_OL2">
								<td id="imgOK_max_amount_limit_OL2" class="verticalCenter text-center"><input id="chk_max_amount_limit_OL2" type="checkbox" value="0" onclick="chk_max_amount_limit_OL(1,2);"></td>						
								<td class="verticalCenter bg-term-gray"><label for="chk_max_amount_limit_OL2" class="label_notbold">จำนวนทุนประกันสูงสุด(บาท)</label></td>
								<td class="verticalCenter" width="40%"><input type="text" id="txb_max_amount_limit_OL2" class="auto form-control text-right" value="" data-v-min="0.00" data-v-max="999999999.99" disabled=""></td>																									
							</tr>											
						</tbody>							
					</table>
					</div>
																							
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12 style_col_float_margin">
				<div class="col-sm-2 style_col_topic">
					<label>จำนวนเอาเงินประกันภัยสูงสุด(ต่อราย) <font id="validate_input12_ol" style="color: red; display: none;">*</font></label>
				</div>
				<div class="col-sm-9 panel panel-default panel_style1" id="panel_single_max_amount_insureOL">
										<div class="col-sm-12 padding_all1">
											<div class="col-sm-3">
											<input type="radio" name="rd_single_max_amount_insure_OL[]" id="rd_single_max_amount_insure_OL1" value="จำกัด" onclick="chk_single_max_amount_insure_OL(1)"><label for="rd_single_max_amount_insure_OL1" class="label_input2">จำกัด</label>
											</div>
											<div class="col-sm-3">
											<input type="radio" name="rd_single_max_amount_insure_OL[]" id="rd_single_max_amount_insure_OL2" value="ไม่จำกัด" onclick="chk_single_max_amount_insure_OL(2)" checked=""><label for="rd_single_max_amount_insure_OL2" class="label_input2">ไม่จำกัด</label>
											</div>
										</div>
										
										<div class="col-sm-12" id="div_single_max_amount_limit_OL" hidden>
										<table class="table table-bordered" id="tbl_single_max_amount_limit_OL1" style="width:70%;">
											<tbody>
												<tr id="tbody_single_max_amount_limit_OL1">
													<td id="imgOK_single_max_amount_limit_OL1" class="verticalCenter text-center"><input id="chk_single_max_amount_limit_OL1" type="checkbox" value="0" onclick="chk_max_amount_limit_OL(2,1);"></td>						
													<td class="verticalCenter bg-term-gray"><label for="chk_single_max_amount_limit_OL1" class="label_notbold">จำนวนกรมธรรม์(ฉบับ)</label></td>
													<td class="verticalCenter" width="40%"><input type="text" id="txb_single_max_amount_limit_OL1" class="auto form-control text-right" value="" data-v-min="0" data-v-max="999" disabled=""></td>																									
												</tr>											
											</tbody>							
										</table>
										
										<!-- จำนวนกรมธรรม์(ฉบับ) -->
										<div id="divMain_insuranceIssue_OL" class="col-sm-12 style_table2 panel panel-default disabledAll">
											<div id="div_insuranceIssue_OL" class="content_scroll panelOL_style1">
												<table class="table table-bordered" style="width: 1000px; display: table;" id="tbl_insuranceIssue_OL">
													<thead>													
														<tr>
															<th class="text-center bg-term-blue verticalCenter" width="30"></th>																				
															<th class="text-center verticalCenter bg-term-blue" width="100">ประเภทสัญญา</th>
															<th class="text-center verticalCenter bg-term-blue" width="100">ประเภทกรมธรรม์</th>
															<th class="text-center verticalCenter bg-term-blue" width="100">ประเภทผลิตภัณฑ์</th>
															<th class="text-center verticalCenter bg-term-blue" width="100">Underwriting Type</th>
															<th class="text-center verticalCenter bg-term-blue" width="100">Senior</th>
															<th class="text-center verticalCenter bg-term-blue" width="100">Sale Channel</th>
															<th class="text-center verticalCenter bg-term-blue" width="100">Partner</th>								
														</tr>
													</thead>
													<tbody>
														<tr id="tr_insuranceIssue1">
															<td id="imgOK_insuranceIssue1" class="text-center vertical-middle" style="background-color:gray;"></td>
															<!-- <td id="imgOK_oldinsurance1" class="text-center vertical-middle" onclick="imgCheckbox_oldinsurance_CL(1);">
																<i class="glyphicon glyphicon-edit"></i>
															</td> -->						
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_contractType_insuranceIssue1" onchange="ddHeath1_select(this.id);">
																<option value="NONE">---กรุณาเลือก---</option>
																</select>
															</td>
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_policyType_insuranceIssue1" onchange="ddHeath2_select(this.id);">
																	<option value="">All</option>
																</select>
															</td>
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_productType_insuranceIssue1">
																	<option value="">All</option>
																</select>
															</td>
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_Reinsurance_insuranceIssue1">
																</select>
															</td>
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_senior_insuranceIssue1">
																	<option value="">All</option>
																</select>
															</td>
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_saleChannel_insuranceIssue1" onchange="filter_partner(this)">
																	<option data-id="0" value="NONE">All</option>
																</select>
															</td>
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_partner_insuranceIssue1">
																	<option data-id="0" value="NONE">All</option>
																</select>
															</td>																																
														</tr>																																									
													</tbody>							
												</table>	
											</div>
											<div class="col-md-12 padding_all7" id="btn_insuranceIssue_OL">
													<div class="col-md-2">
														<button class="btn btn-primary" onclick="addinsuranceIssue_OL();">&nbsp;&nbsp;&nbsp;เพิ่ม&nbsp;&nbsp;&nbsp;</button>
													</div>
													<div class="col-md-4">
														<button class="btn btn-primary" onclick="confirmDeleteinsuranceIssue_OL();">&nbsp;&nbsp;&nbsp;ลบ&nbsp;&nbsp;&nbsp; </button>
													</div>
													<div class="col-md-6 text-right">
														<input type='hidden' id='hd_accumRuleExclude_Policy' value='' />
														<button class="btn btn-primary" id="view_ListPD_OL1" onclick="viewListProduct(1);" data-toggle="modal" href="#modal_viewListPD_OL">View List Product</button>
													</div>
											</div>																															
										</div>
										
										<table class="table table-bordered" id="tbl_single_max_amount_limit_OL2" style="width:70%;">
											<tbody>
												<tr id="tbody_single_max_amount_limit_OL2">
													<td id="imgOK_single_max_amount_limit_OL2" class="verticalCenter text-center"><input id="chk_single_max_amount_limit_OL2" type="checkbox" value="0" onclick="chk_max_amount_limit_OL(2,2);"></td>						
													<td class="verticalCenter bg-term-gray"><label for="chk_single_max_amount_limit_OL2" class="label_notbold">จำนวนทุนประกันสูงสุด(บาท)</label></td>
													<td class="verticalCenter" width="40%"><input type="text" id="txb_single_max_amount_limit_OL2" class="autoComma form-control text-right" value="" data-v-min="0.00" data-v-max="999999999.00" disabled=""></td>																									
												</tr>											
											</tbody>							
										</table>
										
										<!-- จำนวนทุนประกันสูงสุด(บาท) -->
										<div id="divMain_insuranceMax_OL" class="col-sm-12 style_table2 panel panel-default disabledAll">
											<div id="div_insuranceMax_OL" class="content_scroll panelOL_style1">
												<table class="table table-bordered" style="width: 1000px; display: table;" id="tbl_insuranceMax_OL">
													<thead>													
														<tr>
															<th class="text-center bg-term-blue verticalCenter" width="30"></th>																				
															<th class="text-center verticalCenter bg-term-blue" width="100">ประเภทสัญญา</th>
															<th class="text-center verticalCenter bg-term-blue" width="100">ประเภทกรมธรรม์</th>
															<th class="text-center verticalCenter bg-term-blue" width="100">ประเภทผลิตภัณฑ์</th>
															<th class="text-center verticalCenter bg-term-blue" width="100">Underwriting Type</th>
															<th class="text-center verticalCenter bg-term-blue" width="100">Senior</th>
															<th class="text-center verticalCenter bg-term-blue" width="100">Sale Channel</th>
															<th class="text-center verticalCenter bg-term-blue" width="100">Partner</th>								
														</tr>
													</thead>
													<tbody>
														<tr id="tr_insuranceMax1">
															<td id="imgOK_insuranceMax1" class="text-center vertical-middle" style="background-color:gray;"></td>
															<!-- <td id="imgOK_oldinsurance1" class="text-center vertical-middle" onclick="imgCheckbox_oldinsurance_CL(1);">
																<i class="glyphicon glyphicon-edit"></i>
															</td> -->						
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_contractType_insuranceMax1" onchange="ddHeath1_select(this.id);">
																	<option value="NONE">---กรุณาเลือก---</option>
																</select>
															</td>
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_policyType_insuranceMax1" onchange="ddHeath2_select(this.id);">
																	<option value="">All</option>
																</select>
															</td>
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_productType_insuranceMax1">
																	<option value="">All</option>
																</select>
															</td>
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_Reinsurance_insuranceMax1">
																</select>
															</td>
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_senior_insuranceMax1">
																	<option value="">All</option>
																</select>
															</td>
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_saleChannel_insuranceMax1" onchange="filter_partner(this)">
																	<option data-id="0" value="">All</option>
																</select>
															</td>
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_partner_insuranceMax1">
																	<option data-id="0" value="">All</option>
																</select>
															</td>																																
														</tr>																																									
													</tbody>							
												</table>	
											</div>
											<div class="col-md-12 padding_all7" id="btn_insuranceMax_OL">
													<div class="col-md-2">
														<button class="btn btn-primary" onclick="addinsuranceMax_OL();">&nbsp;&nbsp;&nbsp;เพิ่ม&nbsp;&nbsp;&nbsp;</button>
													</div>
													<div class="col-md-4">
														<button class="btn btn-primary" onclick="confirmDeleteinsuranceMax_OL();">&nbsp;&nbsp;&nbsp;ลบ&nbsp;&nbsp;&nbsp; </button>
													</div>
													<div class="col-md-6 text-right">
														<input type='hidden' id='hd_accumRuleExclude_SA' value='' />
														<button class="btn btn-primary" id="view_ListPD_InsuranceMax_OL" onclick="viewListProduct(2);" data-toggle="modal" href="#modal_viewListPD_OL">View List Product</button>
													</div>
											</div>																															
										</div>
										
									</div>
								  </div>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12 style_col_float_margin">
				<div class="col-sm-2 style_col_topic">
					<label>ช่วงจำนวนเอาเงินประกันภัย</label>
				</div>
				<div class="col-sm-4 panel panel-default panel_style1">
					<div class="col-sm-12 padding_all1">
						<div class="col-sm-3">
							<input type="radio" name="insure_period[]" id="insure_period1"><label for="insure_period1" class="label_input2">ขั้นละ</label>
							<br>
						</div>
						<div class="col-sm-3">
							<input type="radio" name="insure_period[]" id="insure_period2" checked><label for="insure_period2" class="label_input2">ไม่มี</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>


	<div class="term_boxpanel margintop_20px">
		<div class="row">
			<div class="col-sm-12 style_col_float_margin">
				<div class="col-sm-2 style_col_topic">
					<label>การรวมเงินเอาประกันภัยกับสัญญาประกันภัยหลักเพื่อตรวจสุขภาพ</label>
				</div>
				<div class="col-sm-4 panel panel-default panel_style1">
					<div class="col-sm-12 padding_all1">
						<div class="col-sm-3">
							<input type="radio" name="insure_combine[]" id="insure_combine1" value="T"><label for="insure_combine1" class="label_input2">รวม</label>
							<br>
						</div>
						<div class="col-sm-3">
							<input type="radio" name="insure_combine[]" id="insure_combine2" value="F" checked><label for="insure_combine2" class="label_input2">ไม่รวม</label>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12 style_col_float_margin">
				<div class="col-sm-2 style_col_topic">
					<label>การรับแบบเพิ่มเบี้ยพิเศษ/รับแบบมีเงื่อนไข</label>
				</div>
				<div class="col-sm-4 panel panel-default panel_style1" >
				<div class="col-sm-12 padding_all1">
						<div class="col-sm-3">
							<input type="radio" name="rd5" id="special_plan" 
							value="T" onChange="checkSpecialPlan()"><label for="special_plan" class="label_input2">รับ</label>
							<br>
						</div>
						<div class="col-sm-3">
							<input type="radio" name="rd5" id="deny_special_plan"
								value="F" onChange="checkSpecialPlan()" checked><label for="deny_special_plan" class="label_input2">ไม่รับ</label>
						</div>
					
						<div class="row displayNone" id="check_special_plan" style="margin-left: 20px">
						<div class="col-sm-12 padding_all1">
						<div class="col-sm-3">
							<input type="checkbox" id="special_insur" value="EXTRA_PREM"><label for="special_insur" class="label_input2">เบี้ยเพิ่มพิเศษ</label>
							<br>
							</div>
							<div class="col-sm-6">
							<input type="checkbox" id="condition_insur" value="EXCLUSION"><label for="condition_insur" class="label_input2"> มีเงื่อนไขยกเว้นความคุ้มครอง</label><br>
							</div>
							</div>
						</div>
					
						<div class="row displayNone"  id="table_special_plan" style="margin-left: 20px">
						<div class="col-sm-10 style_table1 content_scroll">
							<table class="table table-bordered" id="tbl_UNW_EM">
								<thead>
									<tr>
										<th class="text-center bg-term-blue 70%verticalCenter"
											rowspan="2" width="50%">ประเภท<br>ความคุ้มครอง
										</th>
										<th class="text-center bg-term-blue verticalCenter"
											colspan="2" style="font-size: 13px;" width="70%">EM % / เท่า สูงสุด</th>
									</tr>
									<tr>
										<th class="text-center bg-term-blue 70%verticalCenter"
											rowspan="2" width="25%">คปภ</th>
										<th class="text-center bg-term-blue verticalCenter"
											colspan="2" style="font-size: 13px;" width="35%">UW</th>

									</tr>
								</thead>
									<tbody>
									
									</tbody>
							</table>
						</div>
					</div>
					</div>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-sm-12 style_col_float_margin">
				<div class="col-sm-2 style_col_topic">
					<label>อำนาจการอนุมัติของสาขาจุดออก กธ./NBI</label>
				</div>
				<div class="col-sm-4 panel panel-default panel_style1">
					<div class="col-sm-12 padding_all1">
						<div class="col-sm-3">
							<input type="checkbox" name="rd_approval_branch_OL[]" id="rd_approval_branch_OL1" value="NBI" checked><label for="NBI" class="label_input2">NBI/สาขา</label>
							<br>
						</div>
						<div class="col-sm-3">

							<input type="checkbox" name="rd_approval_branch_OL[]" id="rd_approval_branch_OL2" value="UNW" checked><label for="head_office" class="label_input2">สนญ</label><br>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12 style_col_float_margin">
				<div class="col-sm-2 style_col_topic">
					<label>การฟ้องทุนเพื่อส่ง Reinsurance</label>
				</div>
				<div class="col-sm-4 panel panel-default panel_style1">
					<div class="col-sm-12 padding_all1">
						<div class="col-sm-3">
							<input type="radio" name="rd_filing_rs_OL[]" id="rd_filing_rs_OL1" value="T" disabled><label for="rd_filing_rs_OL1" class="label_input2">ฟ้อง</label>
							<br>
						</div>
						<div class="col-sm-3">
							<input type="radio" name="rd_filing_rs_OL[]" id="rd_filing_rs_OL2" value="F" disabled><label for="rd_filing_rs_OL2" class="label_input2">ไม่ฟ้อง</label>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-sm-12 style_col_float_margin">
				<div class="col-sm-2 style_col_topic">
					<label>วันที่ขึ้นระบบงาน</label>
				</div>
				<div class="col-sm-3" style="margin-top: 10px;">
					<input type="text" class="form-control" id="system_date_ol" 
					onkeyup="   
							var v = this.value;
					        if (v.match(/^\d{2}$/) !== null) {
					            this.value = v + '/';
					        } else if (v.match(/^\d{2}\/\d{2}$/) !== null) {
					            this.value = v + '/';
					        }"
					style="text-align: center;" readonly>

				</div>

			</div>
		</div>

	</div>
	
	<br clear="all">
	<div class="row pd-bt">
		<div class="col-sm-9"></div>
		<div class="productpadding col-sm-1">
			<button class="btn btn-default btn-primary" onclick="bt_Menu5_Confirm_ol();" type="button">บันทึก</button>
		</div>
		<div class="productpadding col-sm-1">
			<button class="btn btn-default btn-primary" type="button" data-toggle="modal" data-target="#modal_Cancel">ยกเลิก</button>
		</div>
		<div class="col-sm-1"></div>
	</div>
	<br clear="all">
	
	</div>
	
	<!-- View List Product -->
	<div class="modal fade" id="modal_viewListPD_OL" role="dialog">
		<div class="modal-dialog modal-lg">
			<div class="panel panel-primary">
				<div class="panel-heading text-left">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">View List Product</h4>
				</div>
				<div class="modal-body">
					<div class="row" style="padding: 10px 0"></div>
					<div class="box-body">
						<!-- Left -->
						<div class="col-sm-6 col_div">
							<table class="table table-striped table-bordered" 
							style="width: 100%" id="tb_viewListPDLeft_OL">
							<thead>
								<tr class="bg-primary">
									<th class="text-center col-md-1" colspan="3" style="border-right-style: none; border-bottom: none;">รายการ Product</th>
								</tr>
								<tr class="bg-primary">
									<th class="text-center" style="border-right-style: none; vertical-align:middle">เลือก</th>
									<th class="text-center" style="border-right-style: none;">รหัสผลิตภัณฑ์</th>
									<th class="text-center" style="border-right-style: none; vertical-align:middle">ชื่อ (ไทย)</th>
								</tr>
							</thead>
							<tbody>
								<tr id="tr_viewListPDLeftNodata_OL" data-type="hidden" hidden><td colspan="3" class="text-center"><label>ไม่มีรายการ Product</label></td></tr>
								<!-- <tr id="tr_viewListPDLeft_OL1">
									<td class="text-center"><input id="chk_viewListPDLeft_OL1" type="checkbox" value=""></td>
									<td><label for="chk_viewListPDLeft_OL1">Ex_1</label></td>
									<td>ชื่อไทย 1</td>
								</tr>
								<tr id="tr_viewListPDLeft_OL2">
									<td class="text-center"><input id="chk_viewListPDLeft_OL2" type="checkbox" value=""></td>
									<td><label for="chk_viewListPDLeft_OL2">Ex_2</label></td>
									<td>ชื่อไทย 2</td>
								</tr>
								<tr id="tr_viewListPDLeft_OL3">
									<td class="text-center"><input id="chk_viewListPDLeft_OL3" type="checkbox" value=""></td>
									<td><label for="chk_viewListPDLeft_OL3">Ex_3</label></td>
									<td>ชื่อไทย 3</td>
								</tr>
								<tr id="tr_viewListPDLeft_OL4">
									<td class="text-center"><input id="chk_viewListPDLeft_OL4" type="checkbox" value=""></td>
									<td><label for="chk_viewListPDLeft_OL4">Ex_4</label></td>
									<td>ชื่อไทย 4</td>
								</tr>
								<tr id="tr_viewListPDLeft_OL5">
									<td class="text-center"><input id="chk_viewListPDLeft_OL5" type="checkbox" value=""></td>
									<td><label for="chk_viewListPDLeft_OL5">Ex_5</label></td>
									<td>ชื่อไทย 5</td>
								</tr> -->
							</tbody>
						</table>
						</div>
						
						<!-- arrow -->
						<div class="arrow_view">
							<div id="RightMove" class="glyphicon glyphicon-chevron-right arrow_view_icon"></div>
							<div id="LeftMove" class="glyphicon glyphicon-chevron-left arrow_view_icon"></div>
						</div>
						
						<!-- right -->
						<div class="col-sm-6 col_div">
							<table class="table table-striped table-bordered" 
							style="width: 100%" id="tb_viewListPDRight_OL">
							<thead>
								<tr class="bg-primary">
									<th class="text-center col-md-1" colspan="3" style="border-right-style: none; border-bottom: none;">รายการ Product ที่ต้องการยกเว้น</th>
								</tr>
								<tr class="bg-primary">
									<th class="text-center col-md-1" style="border-right-style: none; vertical-align:middle">เลือก</th>
									<th class="text-center col-md-2" style="border-right-style: none;">รหัสผลิตภัณฑ์</th>
									<th class="text-center col-md-6" style="border-right-style: none; vertical-align:middle">ชื่อ (ไทย)</th>
								</tr>
							</thead>
							<tbody>
								<tr id="tr_viewListPDRightNodata_OL" data-type="hidden" style="display:block;"><td colspan="3" class="text-center"><label>ไม่มีรายการ Product ที่ต้องการยกเว้น</label></td></tr>								
							</tbody>
						</table>
						</div>
						
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-primary"
						data-dismiss="modal" id="bt_confirmProduct_OL" >ตกลง</button>
					<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>

				</div>
			</div>
		</div>
	</div>
	
	<!-- hidden -->
	<input type="hidden" id="lookup_contractType"/>
	<input type="hidden" id="lookup_gio"/>
	<input type="hidden" id="lookup_slSenior"/>
	<input type="hidden" id="lookup_reinsurance_Group"/>
	<input type="hidden" id="lookup_sale_Channel"/>
	