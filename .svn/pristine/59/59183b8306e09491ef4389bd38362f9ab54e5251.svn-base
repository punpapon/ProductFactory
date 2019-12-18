<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<div class="panel panel-default panel-bordertop">							
							 
							<div class="term_boxpanel">					 
							 <div class="row">
								<div class="col-sm-12 style_col_float_margin">
									<div class="col-sm-2 style_col_topic">
										<label>วันที่กำหนดการขาย<font id="validate_input6_ol" style="color:red">*</font></label>
									</div>
									<div class="col-xs-3 style_col_width22">
										<input type="text" class="form-control" id="menu_term1_datefrom_ol" value=""
											placeholder="dd/mm/yyyy"
											onchange="validate_input6_ol();"
											onkeyup="
												        var v = this.value;
												        if (v.match(/^\d{2}$/) !== null) {
												            this.value = v + '/';
												        } else if (v.match(/^\d{2}\/\d{2}$/) !== null) {
												            this.value = v + '/';
												        }"
											onblur="checkdateTo_fixSale_OL()"
											maxlength="10" readonly>
									</div>
									<div class="col-left paddingtop_6px">-</div>
									<div class="col-xs-3 style_col_width22">
										<input type="text" class="form-control" id="menu_term1_dateto_ol" value=""
											 placeholder="dd/mm/yyyy"
											 onchange="validate_input6_ol();"
											onkeyup="
												        var v = this.value;
												        if (v.match(/^\d{2}$/) !== null) {
												            this.value = v + '/';
												        } else if (v.match(/^\d{2}\/\d{2}$/) !== null) {
												            this.value = v + '/';
												        }"
									        onblur="checkdateTo_fixSale_OL()"
											maxlength="10" readonly>
									</div>
									<div class="col-xs-1">
										<button type="button" class="btn btn-primary fa fa-history" id=""
											data-toggle="modal" data-target="#modal_historySale_OL"></button>											
									</div>
								</div>						
							</div>
							<div class="row">
								<div class="col-sm-12 style_col_float_margin">
									<div class="col-sm-2 style_col_topic">
										<label>ระยะเวลาเอาประกันภัย</label>
									</div>
									<div id="div_ageInsurance_OL" hidden>
										<div class="col-xs-2 paddingtop_6px"><strong>คุ้มครองถึงอายุ</strong></div>
										<div class="col-xs-1">
											<input type="text" class="form-control width50px text-right font-term-purple" id="start_period_insure_ol" value="" maxlength="3" disabled>
										</div>
										<div class="col-xs-2 style_col_width13dot67 marginleft_style9">
											<select class="form-control width82px font-term-purple" id="start_period_insure_unit_ol" disabled>
											</select>
										</div>
									</div>
									<div id="div_rangeInsurance_OL" hidden>
										<div class="col-sm-5 style_col_width40">
											<table class="table table-bordered" id="tb_rangeInsurance_OL"  style="width:100%;">
												<thead>
													<tr>
														<th class="text-center bg-term-purple verticalCenter" colspan="2">From</th>
														<th class="text-center bg-term-purple verticalCenter" colspan="2">To</th>
													</tr>
												</thead>
												<tbody>
												</tbody>
											</table>
										</div>
										<!-- <div class="col-xs-1">
											<input type="text" class="form-control width50px text-right font-term-purple" id="start_period_insure_ol_2" value="" maxlength="3" disabled>
										</div>
										<div class="col-xs-2 style_col_width13dot67 marginleft_style9">
											<select class="form-control width82px font-term-purple" id="start_period_insure_unit_ol_2" disabled>
											</select>
										</div>
										<div class="col-left paddingtop_6px"><label>-</label></div>
										<div class="col-xs-1">
											<input type="text" class="form-control width50px text-right font-term-purple" id="end_period_insure_ol_2" value="" maxlength="3" disabled>
										</div>
										<div class="col-xs-2 style_col_width13dot67 marginleft_style9">
											<select class="form-control width82px font-term-purple" id="end_period_insure_unit_ol_2" disabled>
											</select>
										</div> -->
									</div>
									
								</div>						
							</div>
							
							<div class="row">
								<div class="col-sm-12 style_col_float_margin">
									<div class="col-sm-2 style_col_topic">
										<label>ระยะเวลาชำระเบี้ยประกันภัย</label>
									</div>
									<div class="col-xs-1">
										<input type="text" class="form-control width50px text-right font-term-purple" id="start_paid_insure_ol" value="" maxlength="3" disabled>
									</div>
									<div class="col-xs-2 style_col_width13dot67 marginleft_style9">
										<select class="form-control width82px font-term-purple" id="start_paid_insure_unit_ol" disabled>
										</select>
									</div>
								</div>						
							</div>
							
							<div class="row">
								<div class="col-sm-12 style_col_float_margin">
									<div class="col-sm-2 style_col_topic">
										<label>Mode การชำระเบี้ย<font id="validate_input7_ol" style="color:red">*</font></label>
									</div>
									<div class="col-sm-5 style_col_width40">
										<div class="panel panel-default">
											<div class="panel-heading">ซื้อตามจำนวนเงินเอาประกันภัย</div>
											<div class="panel-body">
												<table class="table table-bordered" id="tbl_modeTerms_OL" style="width:100%;">
													<thead>
														<tr>
															<th class="text-center bg-term-purple verticalCenter" width="70">เลือก</th>																				
															<th colspan="2" class="text-center verticalCenter bg-term-purple" width="350">Mode</th>							
														</tr>
													</thead>
													<tbody>
														
													</tbody>							
												</table>
											</div>	
										</div>	
									</div>
									<div class="col-sm-5 style_col_width40">
										<div class="panel panel-default">
											<div class="panel-heading">ซื้อตามเบี้ยประกันภัย</div>
											<div class="panel-body">
												<table class="table table-bordered" id="tbl_modeTerms_OL2" style="width:100%;">
													<thead>
														<tr>
															<th class="text-center bg-term-purple verticalCenter" width="70">เลือก</th>																				
															<th colspan="2" class="text-center verticalCenter bg-term-purple" width="350">Mode</th>							
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
							
							<div class="row">
								<div class="col-sm-12 style_col_float_margin">
									<div class="col-sm-2 style_col_topic">
										<label>พิกัดอายุ<font id="validate_input8_ol" style="color:red">*</font></label>
									</div>
									<div class="col-xs-1">
										<input type="text" class="form-control width50px text-right font-term-purple" id="start_age_insure_ol" value="" maxlength="3" onchange="validate_ageRange_OL() , validate_input8_ol();">
									</div>
									<div class="col-xs-2 style_col_width13dot67 marginleft_style9">
										<select class="form-control width82px font-term-purple" id="start_age_insure_unit_ol" onchange="validate_ageRange_OL() , validate_input8_ol();">
										</select>
									</div>
									<div class="col-left" style="padding-top: 6px;">-</div>
									<div class="col-xs-1">
										<input type="text" class="form-control width50px text-right font-term-purple" id="end_age_insure_ol"  value="" maxlength="3" onchange="validate_ageRange_OL() , validate_input8_ol();">
									</div>
									<div class="col-xs-2 style_col_width13dot67 marginleft_style9">
										<select class="form-control width82px font-term-purple" id="end_age_insure_unit_ol" onchange="validate_ageRange_OL() , validate_input8_ol();">
										</select>
									</div>
									<!-- <div class="col-xs-2 style_col_width15dot5 paddingtop_6px"><strong>คุ้มครองสูงสุดถึง</strong></div>
									<div class="col-xs-1 marginleft_diff16px">
										<input type="text" class="form-control width50px text-right font-term-purple" id="max_age_insure_ol"  value="" maxlength="3" disabled>
									</div>
									<div class="col-xs-1 paddingtop_6px"><strong>ปี</strong></div> -->
								</div>						
							</div>
							
							<div class="row">
								<div class="col-sm-12 style_col_float_margin">
									<div class="col-sm-2 style_col_topic">
										<label>สูตรการคำนวณอายุ<font id="validate_input9_ol" style="color:red" hidden>*</font></label>
									</div>
									<div class="col-sm-6">
									<table class="table table-bordered" id="tbl_formulaTerms_OL" style="width:100%;">
										<thead>
											<tr>
												<th class="text-center bg-term-purple verticalCenter" width="70">เลือก</th>																				
												<th class="text-center verticalCenter bg-term-purple" width="350">สูตรการคำนวณอายุ</th>							
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
										<label>ชั้นอาชีพที่เสนอขาย<font id="validate_input10_ol" style="color:red">*</font></label>
									</div>
									<div class="col-sm-6">
									<table class="table table-bordered" id="tbl_saleDegreeTerm_OL" style="width:100%;">
										<thead>
											<tr>
												<th class="text-center bg-term-blue verticalCenter" width="70">เลือก</th>																				
												<th colspan="2" class="text-center verticalCenter bg-term-blue" width="350">ชั้นอาชีพ</th>							
											</tr>
										</thead>
										<tbody>
											<tr id="tbody_career_term_OL0">
												<td id="imgOK_career_term_OL0" class="verticalCenter text-center"><input id="mode_career_term0_ol" type="checkbox" value="0" onclick="validate_levelJob_OL(),validate_input10_ol();"></td>						
												<td class="verticalCenter">ทุกชั้นอาชีพ</td>																									
											</tr>
											<tr id="tbody_career_term_OL1">
												<td id="imgOK_career_term_OL1" class="verticalCenter text-center"><input id="mode_career_term1_ol" type="checkbox" value="1" onclick="validate_input10_ol();"></td>						
												<td class="verticalCenter">ชั้นอาชีพ 1</td>																									
											</tr>
											<tr id="tbody_career_term_OL2">
												<td id="imgOK_career_term_OL2" class="verticalCenter text-center"><input id="mode_career_term2_ol" type="checkbox" value="2" onclick="validate_input10_ol();"></td>						
												<td class="verticalCenter">ชั้นอาชีพ 2</td>																									
											</tr>
											<tr id="tbody_career_term_OL3">
												<td id="imgOK_career_term_OL3" class="verticalCenter text-center"><input id="mode_career_term3_ol" type="checkbox" value="3" onclick="validate_input10_ol();"></td>						
												<td class="verticalCenter">ชั้นอาชีพ 3</td>																									
											</tr>
											<tr id="tbody_career_term_OL4">
												<td id="imgOK_career_term_OL4" class="verticalCenter text-center"><input id="mode_career_term4_ol" type="checkbox" value="4" onclick="validate_input10_ol();"></td>						
												<td class="verticalCenter">ชั้นอาชีพ 4</td>																									
											</tr>											
										</tbody>							
									</table>
									</div>
								</div>						
							</div>	
							 
						</div>
						<!-- end panel1 -->
						
						<div class="term_boxpanel margintop_20px">
						<div class="row" id="row_cal_amount_OL">
								<div class="col-sm-12 style_col_float_margin">
									<div class="col-sm-2 style_col_topic">
										<label>การคำนวณจำนวนเงินเอาประกันภัย</label>
									</div>
									<div class="col-sm-10 style_table1 content_scroll" id="style-1">
										<table class="table table-bordered " style="width:1500px;" id="tbl_cal_amount_OL">
											<thead>
												<tr>
													<th width="14%" class="text-center verticalCenter tablecolorhead3 borderBlack" rowspan="2">Coverage <br>หลัก / เพิ่มเติม</th>
													<th width="7%" class="text-center verticalCenter tablecolorhead3 borderBlack" rowspan="2">ประเภทความคุ้มครอง</th>
													<th width="14%" class="text-center verticalCenter tablecolorhead3 borderBlack" colspan="2">ทุนชีวิตอ้างอิง (SA Life)</th>
													<th width="28%" class="text-center verticalCenter tablecolorhead3 borderBlack" colspan="3">จำนวนเงินเอาประกันภัย</th>
													<th width="24%" class="text-center verticalCenter tablecolorhead3 borderBlack" colspan="2">จำนวนทุนขั้นต่ำ</th>
													<th width="24%" class="text-center verticalCenter tablecolorhead3 borderBlack" colspan="2">จำนวนเบี้ยขั้นต่ำ</th>
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
								</div>						
							</div>

							<div class="row">
								<div class="col-sm-12 style_col_float_margin">
									<div class="col-sm-2 style_col_topic">
										<label>จำนวนเงินเอาประกันภัยสูงสุด (ต่อแบบ)</label>
									</div>
									<div class="col-sm-9 panel panel-default panel_style1" id="panel_max_amount_insureOL">
										<div class="col-sm-12 padding_all1">
											<div class="col-sm-3">
											<input type="radio" name="rd_max_amount_insure_OL[]" id="rd_max_amount_insure_OL1" value="จำกัด" onclick="chk_max_amount_insure_OL(1)"><label for="rd_max_amount_insure_OL1" class="label_input2">จำกัด</label>
											</div>
											<div class="col-sm-3">
											<input type="radio" name="rd_max_amount_insure_OL[]" id="rd_max_amount_insure_OL2" value="ไม่จำกัด" onclick="chk_max_amount_insure_OL(2)" checked><label for="rd_max_amount_insure_OL2" class="label_input2">ไม่จำกัด</label>
											</div>
										</div>
										
										<div class="col-sm-12" id="div_max_amount_limit_OL" hidden>
											<table class="table table-bordered" id="tbl_max_amount_limit_OL1" style="width:70%;">
											<tbody>
												<tr id="tbody_max_amount_limit_OL1">
													<td id="imgOK_max_amount_limit_OL1" class="verticalCenter text-center"><input id="chk_max_amount_limit_OL1" type="checkbox" value="0" onclick="chk_max_amount_limit_OL(1);"></td>						
													<td class="verticalCenter bg-term-gray">จำนวนกรมธรรม์(ฉบับ)</td>
													<td class="verticalCenter" width="40%"><input type="text" id="txb_max_amount_limit_OL1" class="auto form-control text-right" value="" data-v-min="0" data-v-max="999" disabled></td>																									
												</tr>								
											</tbody>							
										</table>
										<table class="table table-bordered" id="tbl_max_amount_limit_OL2" style="width:70%;">
											<tbody>
												<tr id="tbody_max_amount_limit_OL2">
													<td id="imgOK_max_amount_limit_OL2" class="verticalCenter text-center"><input id="chk_max_amount_limit_OL2" type="checkbox" value="0" onclick="chk_max_amount_limit_OL(2);"></td>						
													<td class="verticalCenter bg-term-gray">จำนวนทุนประกันสูงสุด(บาท)</td>
													<td class="verticalCenter" width="40%"><input type="text" id="txb_max_amount_limit_OL2" class="autoComma form-control text-right" value="" data-v-min="0.00" data-v-max="9999999.00" disabled></td>																									
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
										<label>จำนวนเงินเอาประกันภัยสูงสุด (ต่อราย)</label>
									</div>
									<div class="col-sm-9 panel panel-default panel_style1" id="panel_single_max_amount_insureOL">
										<div class="col-sm-12 padding_all1">
											<div class="col-sm-3">
											<input type="radio" name="rd_single_max_amount_insure_OL[]" id="rd_single_max_amount_insure_OL1" value="จำกัด" onclick="chk_single_max_amount_insure_OL(1)"><label for="rd_single_max_amount_insure_OL1" class="label_input2">จำกัด</label>
											</div>
											<div class="col-sm-3">
											<input type="radio" name="rd_single_max_amount_insure_OL[]" id="rd_single_max_amount_insure_OL2" value="ไม่จำกัด" onclick="chk_single_max_amount_insure_OL(2)" checked><label for="rd_single_max_amount_insure_OL2" class="label_input2">ไม่จำกัด</label>
											</div>
										</div>
										
										<div class="col-sm-12" id="div_single_max_amount_limit_OL" hidden>
										<table class="table table-bordered" id="tbl_single_max_amount_limit_OL1" style="width:70%;">
											<tbody>
												<tr id="tbody_single_max_amount_limit_OL1">
													<td id="imgOK_single_max_amount_limit_OL1" class="verticalCenter text-center"><input id="chk_single_max_amount_limit_OL1" type="checkbox" value="0" onclick="chk_single_max_amount_limit_OL(1);"></td>						
													<td class="verticalCenter bg-term-gray">จำนวนกรมธรรม์(ฉบับ)</td>
													<td class="verticalCenter" width="40%"><input type="text" id="txb_single_max_amount_limit_OL1" class="auto form-control text-right" value="" data-v-min="0" data-v-max="999" disabled></td>																									
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
															<th class="text-center verticalCenter bg-term-blue" width="100">Reinsurance Group</th>
															<th class="text-center verticalCenter bg-term-blue" width="100">Senior</th>
															<!-- <th class="text-center verticalCenter bg-term-blue" width="100">Filling Channel</th> -->
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
																<select class="form-control" id="sl_contractType_insuranceIssue1" onchange="ddHeath1_select_OL(this.id);">
																<!-- <option value="">---กรุณาเลือก---</option>
																 <option value="1">Individual Life</option><option value="2">Group Life</option>  -->
																</select>
															</td>
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_policyType_insuranceIssue1" onchange="ddHeath2_select_OL(this.id);">
																	<option value="0" selected="">---กรุณาเลือก---</option>
																</select>
															</td>
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_productType_insuranceIssue1">
																	<option value="0" selected="">---กรุณาเลือก---</option>
																</select>
															</td>
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_Reinsurance_insuranceIssue1">
																	<option value="NONE" selected="">All</option>
																<!-- <option value="GIO-A">GIO A</option><option value="GIO-B">GIO B</option><option value="SIO">SIO</option><option value="NON-GIO">NON-GIO</option></select> -->
																</select>
															</td>
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_senior_insuranceIssue1">
																	<!-- <option value="NONE" selected="">All</option> -->
																<!-- <option value="SENIOR">Senior</option><option value="NONSENIOR">Non-Senior</option> -->
																</select>
															</td>
															<!-- <td class="verticalCenter text-center">
																<select class="form-control" id="sl_fillingChannel_insuranceIssue1">
																	<option value="NONE" selected="">All</option>
																<option value="1">Tied Agency</option><option value="2">Broker or Bancassurance</option><option value="3">Telemarketing</option><option value="4">Electronic</option><option value="5">ตามคำสั่งนายทะเบียน</option>
																</select>
															</td> -->
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_saleChannel_insuranceIssue1" onchange="filter_partner_OL(this)">
																	<option data-id="0" value="NONE" selected="">All</option>
																<!-- <option data-id="1" value="">Agent</option><option data-id="4" value="">Direct Marketing</option><option data-id="5" value="">Group E.B.</option><option data-id="8" value="">Electronic</option><option data-id="2" value="0">Commercial Bank</option><option data-id="3" value="1">Government Bank</option><option data-id="6" value="2">Leasing</option><option data-id="7" value="3">Consumer Finance</option> -->
																</select>
															</td>
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_partner_insuranceIssue1">
																	<option data-id="0" value="NONE" selected="">All</option>
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
														<input type="hidden" id="hd_accumRuleExclude_POLICY" />
														<button class="btn btn-primary" id="view_ListPD_OL1" onclick="viewListProduct_OL(4);"
															data-toggle="modal" href="#modal_viewListPD_OL">View List Product</button>
													</div>
											</div>																															
										</div>
										
										<table class="table table-bordered" id="tbl_single_max_amount_limit_OL2" style="width:70%;">
											<tbody>
												<tr id="tbody_single_max_amount_limit_OL2">
													<td id="imgOK_single_max_amount_limit_OL2" class="verticalCenter text-center"><input id="chk_single_max_amount_limit_OL2" type="checkbox" value="0" onclick="chk_single_max_amount_limit_OL(2);"></td>						
													<td class="verticalCenter bg-term-gray">จำนวนทุนประกันสูงสุด(บาท)</td>
													<td class="verticalCenter" width="40%"><input type="text" id="txb_single_max_amount_limit_OL2" class="auto form-control text-right" value="" data-v-min="0.00" data-v-max="999999999.99" disabled></td>																									
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
															<th class="text-center verticalCenter bg-term-blue" width="100">Reinsurance Group</th>
															<th class="text-center verticalCenter bg-term-blue" width="100">Senior</th>
															<!-- <th class="text-center verticalCenter bg-term-blue" width="100">Filling Channel</th> -->
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
																<select class="form-control" id="sl_contractType_insuranceMax1" onchange="ddHeath1_select_OL(this.id);">
																<!-- <option value="">---กรุณาเลือก---</option> -->
																<!-- <option value="1">Individual Life</option><option value="2">Group Life</option> -->
																</select>
															</td>
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_policyType_insuranceMax1" onchange="ddHeath2_select_OL(this.id);">
																	<option value="0" selected="">---กรุณาเลือก---</option>
																</select>
															</td>
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_productType_insuranceMax1">
																	<option value="0" selected="">---กรุณาเลือก---</option>
																</select>
															</td>
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_Reinsurance_insuranceMax1">
																	<option value="NONE" selected="">All</option>
																<!-- <option value="GIO-A">GIO A</option><option value="GIO-B">GIO B</option><option value="SIO">SIO</option><option value="NON-GIO">NON-GIO</option> -->
																</select>
															</td>
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_senior_insuranceMax1">
																	<!-- <option value="NONE" selected="">All</option> -->
																<!-- <option value="SENIOR">Senior</option><option value="NONSENIOR">Non-Senior</option> -->
																</select>
															</td>
															<!-- <td class="verticalCenter text-center">
																<select class="form-control" id="sl_fillingChannel_insuranceMax1">
																	<option value="NONE" selected="">All</option>
																<option value="1">Tied Agency</option><option value="2">Broker or Bancassurance</option><option value="3">Telemarketing</option><option value="4">Electronic</option><option value="5">ตามคำสั่งนายทะเบียน</option>
																</select>
															</td> -->
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_saleChannel_insuranceMax1" onchange="filter_partner_OL(this)">
																	<option data-id="0" value="NONE" selected="">All</option>
																<!-- <option data-id="1" value="">Agent</option><option data-id="4" value="">Direct Marketing</option><option data-id="5" value="">Group E.B.</option><option data-id="8" value="">Electronic</option><option data-id="2" value="0">Commercial Bank</option><option data-id="3" value="1">Government Bank</option><option data-id="6" value="2">Leasing</option><option data-id="7" value="3">Consumer Finance</option> -->
																</select>
															</td>
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_partner_insuranceMax1">
																	<option data-id="0" value="NONE" selected="">All</option>
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
														<input type="hidden" id="hd_accumRuleExclude_SA" />
														<button class="btn btn-primary" id="view_ListPD_InsuranceMax_OL" onclick="viewListProduct_OL(5);"
																data-toggle="modal" href="#modal_viewListPD_OL">View List Product</button>
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
										<label>ช่วงจำนวนเงินเอาประกันภัย<font id="validate_input12_ol" style="color:red" hidden>*</font></label>
									</div>
									<div class="col-sm-5 style_col_width40">
										<div id="sale_followCapital" class="panel panel-default">
											<div class="panel-heading">ซื้อตามจำนวนเงินเอาประกันภัย</div>
											<div class="panel-body">
												<div class="content_scroll">
												 <table class="table table-bordered" style="width:400px" id="tbl_insure_range_OL">
													<thead>
														<tr>
															<th rowspan="2" class="text-center bg-term-blue verticalCenter" width="20"></th>
															<th colspan="3" class="text-center bg-term-blue verticalCenter" width="240">จำนวนเงินเอาประกันภัย</th>
														</tr>
														<tr>
															<th class="text-center bg-term-blue verticalCenter" width="80">ตั้งแต่</th>																				
															<th class="text-center verticalCenter bg-term-blue" width="80">ถึง</th>
															<th class="text-center verticalCenter bg-term-blue" width="80">เพิ่มขึ้นทุก</th>								
														</tr>
													</thead>
													<tbody>
														<tr>
															<td id="imgOK_healthInsurance1" class="text-center vertical-middle" ><!-- <i class="glyphicon glyphicon-edit" ></i> --></td>
															<td class="verticalCenter text-right">
																<input type="text" id="amount_insure_range_from_OL1" class="autoComma form-control text-right" value="0.00" data-v-min="0" data-v-max="99999999">
															</td>						
															<td class="text-center">
																<input type="text" id="amount_insure_range_to_OL1" class="autoComma form-control text-right" value="0.00" onchange="validateMax_tbAmountTo_OL(this)" data-v-min="1" data-v-max="99999999">
															</td>	
															<td class="text-center">
																<input type="text" id="amount_insure_range_addup_OL1" class="autoComma form-control text-right" value="0.00" data-v-min="0" data-v-max="99999999">
															</td>																								
														</tr>																												
													</tbody>							
												  </table>
												</div>
												
												<div class="col-md-12 padding_all7" id="btn_insuranceRange_OL">
													<div class="col-md-4">
														<button class="btn btn-primary" onclick="addinsuranceRange_OL();">&nbsp;&nbsp;&nbsp;เพิ่ม&nbsp;&nbsp;&nbsp;</button>
													</div>
													<div class="col-md-4">
														<button class="btn btn-primary" onclick="confirmDeleteinsuranceRange_OL();">&nbsp;&nbsp;&nbsp;ลบ&nbsp;&nbsp;&nbsp; </button>
													</div>
													
												</div>
											
											</div>	
										</div>	
									</div>
									<div class="col-sm-5 style_col_width40">
										<div id="sale_followRate" class="panel panel-default">
											<div class="panel-heading">ซื้อตามเบี้ยประกันภัย</div>
											<div class="panel-body">
												<div class="col-sm-4 paddingtop_6px"><label>เพิ่มขึ้นทุก</label></div>
												<div class="col-sm-6 margin_diff_style1">
													<input type="text" id="buy_forwardRate_OL" class="autoComma form-control text-right" value="" data-v-min="1" data-v-max="999999999">
												</div>
												<div class="col-sm-2 paddingtop_6px"><label>บาท</label></div>
												<div class="col-sm-12 margintop_15px text-center">จากจำนวนเบี้ยประกันภัยที่คำนวณได้จากจำนวนเอาประกันภัยขั้นต่ำ</div>
											</div>	
										</div>	
									</div>
								</div>						
							</div>
							
						</div>
						<!-- end panel2 -->
						
						<div class="term_boxpanel margintop_20px">						
							<div class="row">
								<div class="col-sm-12 style_col_float_margin">
									<div class="col-sm-2 style_col_topic">
										<label>การตรวจสุขภาพ และการตรวจ Anti-HIV (ตามทุน)</label>
									</div>
									<div class="col-sm-9 panel panel-default panel_style1">
										<div class="col-sm-12 padding_all1">
											<div class="col-sm-3">
											<input type="radio" name="rd_health_check_OL_main[]" id="rd_health_check_OL1" value="ตรวจ" onclick="chk_health_check_OL(1)"><label for="rd_health_check_OL1" class="label_input2">ตรวจ</label>
											</div>
											<div class="col-sm-3">
											<input type="radio" name="rd_health_check_OL_main[]" id="rd_health_check_OL2" value="ไม่ตรวจ" onclick="chk_health_check_OL(2)" checked><label for="rd_health_check_OL2" class="label_input2">ไม่ตรวจ</label>
											</div>
										</div>
										
										<div id="div_tbl_health_check_OL" class="col-sm-12 style_table2">
											<table class="table table-bordered" style="width:100%;display:none" id="tbl_health_check_OL">
												<thead>													
													<tr>
														<th class="text-center bg-term-blue verticalCenter" width="15%">เลือก</th>																				
														<th class="text-center verticalCenter bg-term-blue" width="20%">ภาคผนวก</th>
														<th class="text-center verticalCenter bg-term-blue" width="65%">ตารางรายการ</th>								
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
								<div class="col-sm-12 style_col_float_margin">
									<div class="col-sm-2 style_col_topic">
										<label>การรวมเงินเอาประกันภัยเพื่อตรวจสุขภาพ</label>
									</div>
									<div class="col-sm-9 panel panel-default panel_style1">
										<div class="col-sm-12 padding_all1">
											<div class="col-sm-3">
											<input type="radio" name="rd_health_money_OL[]" id="rd_health_money_OL1" value="รวม" onclick="chk_health_insurance_OL(1);" ><label for="rd_health_money_OL1" class="label_input2">รวม</label>
											</div>
											<div class="col-sm-3">
											<input type="radio" name="rd_health_money_OL[]" id="rd_health_money_OL2" value="ไม่รวม" onclick="chk_health_insurance_OL(2);" checked><label for="rd_health_money_OL2" class="label_input2">ไม่รวม</label>
											</div>
										</div>
										
										<div class="col-sm-12 style_table2 ">
											<div id="div_health_insurance_OL" hidden>
												<div class="col-sm-12 margintop_15px">
													<div class="col-sm-4 paddingtop_6px"><label>จำนวนทุนตรวจสุขภาพ =</label></div>
													<div class="col-sm-2 margin_diff_style2"><input type="text" id="amount_health_insurance_OL" class="auto form-control text-right" value="" data-v-min="0.0" data-v-max="99.99"></div>
													<div class="col-sm-5 paddingtop_6px"><label>เท่า ของ จำนวนเงินเอาประกัน</label></div>
												</div>
												 <div class="col-sm-12 content_scroll">
													<table class="table table-bordered" style="width:1000px;" id="tbl_health_insurance_OL">
														<thead>													
															<tr>
																<th class="text-center bg-term-blue verticalCenter" width="30"></th>																				
																<th class="text-center verticalCenter bg-term-blue" width="100">ประเภทสัญญา</th>
																<th class="text-center verticalCenter bg-term-blue" width="100">ประเภทกรมธรรม์</th>
																<th class="text-center verticalCenter bg-term-blue" width="100">ประเภทผลิตภัณฑ์</th>
																<th class="text-center verticalCenter bg-term-blue" width="100">Reinsurance Group</th>
																<th class="text-center verticalCenter bg-term-blue" width="100">Senior</th>
																<!-- <th class="text-center verticalCenter bg-term-blue" width="100">Filling Channel</th> -->
																<th class="text-center verticalCenter bg-term-blue" width="100">Sale Channel</th>
																<th class="text-center verticalCenter bg-term-blue" width="100">Partner</th>								
															</tr>
														</thead>
														<tbody>
															<tr id="tr_healthInsurance_OL1">
																<td id="imgOK_healthInsurance_OL1" class="text-center vertical-middle" style="background-color:gray;"></td>															
																<td class="verticalCenter text-center">
																	<select class="form-control" id="sl_contractType_healthInsurance_OL1" onchange="ddHeath1_select_OL(this.id);">
																	<!-- <option selected="">---กรุณาเลือก---</option> -->
																<!-- 	<option value="1">Individual Life</option><option value="2">Group Life</option> -->
																	</select>
																</td>
																<td class="verticalCenter text-center">
																	<select class="form-control" id="sl_policyType_healthInsurance_OL1" onchange="ddHeath2_select_OL(this.id);">
																		<option selected="">---กรุณาเลือก---</option>
																	</select>
																</td>
																<td class="verticalCenter text-center">
																	<select class="form-control" id="sl_productType_healthInsurance_OL1">
																		<option selected="">---กรุณาเลือก---</option>
																	</select>
																</td>
																<td class="verticalCenter text-center">
																	<select class="form-control" id="sl_Reinsurance_healthInsurance_OL1">
																		<option value="NONE" selected="">All</option>
																	</select>
																</td>
																<td class="verticalCenter text-center">
																	<select class="form-control" id="sl_senior_healthInsurance_OL1">
																		<!-- <option value="NONE" selected="">All</option> -->
																	</select>
																</td>
																<!-- <td class="verticalCenter text-center">
																	<select class="form-control" id="sl_fillingChannel_healthInsurance_OL1">
																		<option value="NONE" selected="">All</option>
																	</select>
																</td> -->
																<td class="verticalCenter text-center">
																	<select class="form-control" id="sl_saleChannel_healthInsurance_OL1" onchange="filter_partner_OL(this)">
																		<option data-id="0" value="NONE" selected="">All</option>
																	</select>
																</td>
																<td class="verticalCenter text-center">
																	<select class="form-control" id="sl_partner_healthInsurance_OL1">
																		<option data-id="0" value="NONE" selected="">All</option>
																	</select>
																</td>																																
															</tr>																																									
														</tbody>							
													</table>	
												 </div>
											</div>
											
											<div class="col-md-12 padding_all7" id="btn_health_insurance_OL" hidden>
													<div class="col-md-2">
														<button class="btn btn-primary" onclick="addhealthInsurance_OL();">&nbsp;&nbsp;&nbsp;เพิ่ม&nbsp;&nbsp;&nbsp;</button>
													</div>
													<div class="col-md-4">
														<button class="btn btn-primary" onclick="confirmDeletehealthInsurance_OL();">&nbsp;&nbsp;&nbsp;ลบ&nbsp;&nbsp;&nbsp; </button>
													</div>
													<div class="col-md-6 text-right">
														<a class="open-ViewPDDialog_OL" data-toggle="modal" href="#modal_viewListPD_OL">
															<input type='hidden' id='hd_accumRuleExclude_MEDSUM' value='' />
															<button class="btn btn-primary" id="view_ListPD_healthInsurance_OL" onclick="viewListProduct_OL(1);">View List Product</button>
														</a>
													</div>
											</div>																															
										</div>																																								
									</div>
								</div>						
							</div>
							
							<div class="row">
								<div class="col-sm-12 style_col_float_margin">
									<div class="col-sm-2 style_col_topic">
										<label>การแสดงรายการ กธ. เดิม</label>
									</div>								
									<div class="col-sm-9 panel panel-default panel_style1">
										<div class="col-sm-12 padding_all1">
											<div class="col-sm-3">
											<input type="radio" name="rd_old_list_OL[]" id="rd_old_list_OL1" value="แสดง" onclick="chk_old_insurance_OL(1);"><label for="rd_old_list_OL1" class="label_input2">แสดง</label>
											</div>
											<div class="col-sm-3">
											<input type="radio" name="rd_old_list_OL[]" id="rd_old_list_OL2" value="ไม่แสดง" onclick="chk_old_insurance_OL(2);" checked><label for="rd_old_list_OL2" class="label_input2">ไม่แสดง</label>
											</div>
										</div>	
										
										<div class="col-sm-12 style_table2">
											<div id="div_old_insurance_OL" class="content_scroll">
												<table class="table table-bordered" style="width:1000px;display:none" id="tbl_old_insurance_OL">
													<thead>													
														<tr>
															<th class="text-center bg-term-blue verticalCenter" width="30"></th>																				
															<th class="text-center verticalCenter bg-term-blue" width="100">ประเภทสัญญา</th>
															<th class="text-center verticalCenter bg-term-blue" width="100">ประเภทกรมธรรม์</th>
															<th class="text-center verticalCenter bg-term-blue" width="100">ประเภทผลิตภัณฑ์</th>
															<th class="text-center verticalCenter bg-term-blue" width="100">Reinsurance Group</th>
															<th class="text-center verticalCenter bg-term-blue" width="100">Senior</th>
															<!-- <th class="text-center verticalCenter bg-term-blue" width="100">Filling Channel</th> -->
															<th class="text-center verticalCenter bg-term-blue" width="100">Sale Channel</th>
															<th class="text-center verticalCenter bg-term-blue" width="100">Partner</th>								
														</tr>
													</thead>
													<tbody>
														<tr id="tr_oldinsurance_OL1">
															<td id="imgOK_oldinsurance_OL1" class="text-center vertical-middle" style="background-color:gray;"></td>
															<!-- <td id="imgOK_oldinsurance1" class="text-center vertical-middle" onclick="imgCheckbox_oldinsurance_CL(1);">
																<i class="glyphicon glyphicon-edit"></i>
															</td> -->						
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_contractType_oldinsurance_OL1" onchange="ddHeath1_select_OL(this.id);">
																<!--  <option selected="">---กรุณาเลือก---</option>  -->
																</select>
															</td>
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_policyType_oldinsurance_OL1" onchange="ddHeath2_select_OL(this.id);">
																	 <option selected="">---กรุณาเลือก---</option> 
																	<!-- <option>Credit life</option> -->
																</select>
															</td>
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_productType_oldinsurance_OL1">
																	<option selected="">---กรุณาเลือก---</option>
																	<!-- <option>MLTA</option> -->
																</select>
															</td>
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_Reinsurance_oldinsurance_OL1">
																	<option value="NONE" selected="">All</option>
																</select>
															</td>
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_senior_oldinsurance_OL1">
																	<!-- <option value="NONE" selected="">All</option> -->
																</select>
															</td>
															<!-- <td class="verticalCenter text-center">
																<select class="form-control" id="sl_fillingChannel_oldinsurance_OL1">
																	<option value="NONE" selected="">All</option>
																</select>
															</td> -->
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_saleChannel_oldinsurance_OL1" onchange="filter_partner_OL(this)">
																	<option data-id="0" value="NONE" selected="">All</option>
																</select>
															</td>
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_partner_oldinsurance_OL1">
																	<option data-id="0" value="NONE" selected="">All</option>
																</select>
															</td>																																
														</tr>																																									
													</tbody>							
												</table>	
											</div>
											<div class="col-md-12 padding_all7" id="btn_old_insurance_OL" hidden>
													<div class="col-md-2">
														<button class="btn btn-primary" onclick="addOldInsurance_OL();">&nbsp;&nbsp;&nbsp;เพิ่ม&nbsp;&nbsp;&nbsp;</button>
													</div>
													<div class="col-md-4">
														<button class="btn btn-primary" onclick="confirmDeleteOldInsurance_OL();">&nbsp;&nbsp;&nbsp;ลบ&nbsp;&nbsp;&nbsp; </button>
													</div>
													<div class="col-md-6 text-right">
														<input type='hidden' id='hd_accumRuleExclude_EXISTPOLICY' value='' />
														<button class="btn btn-primary" id="view_ListPD_OldInsurance_OL" data-toggle="modal" href="#modal_viewListPD_OL" onclick="viewListProduct_OL(2);">View List Product</button>
													</div>
											</div>																															
										</div>																				
									</div>									
								</div>						
							</div>
							
							<div class="row">
								<div class="col-sm-12 style_col_float_margin">
									<div class="col-sm-2 style_col_topic">
										<label>การรวมทุนคุ้มครอง (อำนาจการพิจารณาของ UW)</label>
									</div>									
									<div class="col-sm-9 panel panel-default panel_style1">
										<div class="col-sm-12 padding_all1">
											<div class="col-sm-3">
											<input type="radio" name="rd_capital_OL[]" id="rd_capital_OL1" value="รวม" onclick="chk_uw_consider_OL(1);"><label for="rd_capital_OL1" class="label_input2">รวม</label>
											</div>
											<div class="col-sm-3">
											<input type="radio" name="rd_capital_OL[]" id="rd_capital_OL2" value="ไม่รวม" onclick="chk_uw_consider_OL(2);" checked ><label for="rd_capital_OL2" class="label_input2">ไม่รวม</label>
											</div>
										</div>	
										
										<div class="col-sm-12 style_table2">
										<div id="div_UW_consider_OL" hidden>
											<div class="col-sm-12 margintop_15px">
												<div class="col-sm-4 paddingtop_6px"><label>จำนวนเงินคุ้มครอง =</label></div>
												<div class="col-sm-2 margin_diff_style3"><input type="text" id="amount_uw_insurance_OL" class="auto form-control text-right" value="" data-v-min="0.0" data-v-max="99.99"></div>
												<div class="col-sm-5 paddingtop_6px"><label>เท่า ของ จำนวนเงินเอาประกัน</label></div>
											</div>
											<div class="col-sm-12 content_scroll">
											<table class="table table-bordered" style="width:1000px;" id="tbl_UW_consider_OL">
													<thead>													
														<tr>
															<th class="text-center bg-term-blue verticalCenter" width="30"></th>																				
															<th class="text-center verticalCenter bg-term-blue" width="100">ประเภทสัญญา</th>
															<th class="text-center verticalCenter bg-term-blue" width="100">ประเภทกรมธรรม์</th>
															<th class="text-center verticalCenter bg-term-blue" width="100">ประเภทผลิตภัณฑ์</th>
															<th class="text-center verticalCenter bg-term-blue" width="100">Reinsurance Group</th>
															<th class="text-center verticalCenter bg-term-blue" width="100">Senior</th>
															<!-- <th class="text-center verticalCenter bg-term-blue" width="100">Filling Channel</th> -->
															<th class="text-center verticalCenter bg-term-blue" width="100">Sale Channel</th>
															<th class="text-center verticalCenter bg-term-blue" width="100">Partner</th>								
														</tr>
													</thead>
													<tbody>
														<tr id="tr_UWConsider_OL1">
															<td id="imgOK_UWConsider_OL1" class="text-center vertical-middle" style="background-color: gray;"></td>
															<!-- <td id="imgOK_UWConsider1" class="text-center vertical-middle" onclick="imgCheckbox_UWConsider_CL(1);">
																<i class="glyphicon glyphicon-edit"></i>
															</td> -->						
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_contractType_UWConsider_OL1" onchange="ddHeath1_select_OL(this.id);">
																<!-- <option selected="">---กรุณาเลือก---</option> -->
																</select>
															</td>
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_policyType_UWConsider_OL1" onchange="ddHeath2_select_OL(this.id);">
																	<option selected="">---กรุณาเลือก---</option>
																</select>
															</td>
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_productType_UWConsider_OL1">
																	<option selected="">---กรุณาเลือก---</option>
																</select>
															</td>
																<td class="verticalCenter text-center">
																<select class="form-control" id="sl_Reinsurance_UWConsider_OL1">
																	<option value="NONE" selected="">All</option>
																</select>
															</td>
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_senior_UWConsider_OL1">
																	<!-- <option value="NONE" selected="">All</option> -->
																</select>
															</td>
															<!-- <td class="verticalCenter text-center">
																<select class="form-control" id="sl_fillingChannel_UWConsider_OL1">
																	<option value="NONE" selected="">All</option>
																</select>
															</td> -->
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_saleChannel_UWConsider_OL1" onchange="filter_partner_OL(this)">
																	<option data-id="0" value="NONE" selected="">All</option>
																</select>
															</td>
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_partner_UWConsider_OL1">
																	<option data-id="0" value="NONE" selected="">All</option>
																</select>
															</td>
																																				
														</tr>																																									
													</tbody>							
												</table>	
											</div>
										</div>
										
											<div class="col-md-12 padding_all7" id="btn_UW_Consider_OL" hidden>
													<div class="col-md-2">
														<button class="btn btn-primary" onclick="addUWConsider_OL();">&nbsp;&nbsp;&nbsp;เพิ่ม&nbsp;&nbsp;&nbsp;</button>
													</div>
													<div class="col-md-4">
														<button class="btn btn-primary" onclick="confirmDeleteUWConsider_OL();">&nbsp;&nbsp;&nbsp;ลบ&nbsp;&nbsp;&nbsp; </button>
													</div>
													<div class="col-md-6 text-right">
														<input type='hidden' id='hd_accumRuleExclude_INSURESUM' value='' />
														<button class="btn btn-primary" id="view_ListPD_UWConsider_OL" data-toggle="modal" href="#modal_viewListPD_OL" onclick="viewListProduct_OL(3);">View List Product</button>
													</div>
											</div>																															
										</div>																				
									</div>
								</div>						
							</div>
							
							<div class="row">
								<div class="col-sm-12 style_col_float_margin">
									<div class="col-sm-2 style_col_topic">
										<label>การรับแบบเพิ่มเบี้ยพิเศษ</label>
									</div>
									<div class="col-sm-9 panel panel-default panel_style1">
										<div class="col-sm-12 padding_all1">
											<div class="col-sm-3">
											<input type="radio" name="rd_increase_premium_OL[]" id="rd_increase_premium_OL1" value="รับ" onclick="chk_increase_premium_OL(1)" checked><label for="rd_increase_premium_OL1" class="label_input2">รับ</label>
											</div>
											<div class="col-sm-3">
											<input type="radio" name="rd_increase_premium_OL[]" id="rd_increase_premium_OL2" value="ไม่รับ" onclick="chk_increase_premium_OL(2)"><label for="rd_increase_premium_OL2" class="label_input2">ไม่รับ</label>
											</div>
										</div>
										
										<div class="col-sm-7"  id="div_increase_premium_OL">
											<table class="table table-bordered" style="width:100%; margin-top: 20px;" id="tbl_increase_premium_OL">
												<thead>		
													<tr>
														<th rowspan="2" class="text-center bg-term-blue verticalCenter" width="100">ประเภทความคุ้มครอง</th>
														<th colspan="2" class="text-center bg-term-blue verticalCenter" width="140">EM สูงสุด (%)</th>
													</tr>											
													<tr>
														<th class="text-center bg-term-blue verticalCenter" width="70">คปภ.</th>																				
														<th class="text-center verticalCenter bg-term-blue" width="40">UW</th>								
													</tr>
												</thead>
												<tbody>
													<!-- <tr>
														<td class="verticalCenter text-center font-term-purple font-bold">DTPD</td>						
														<td class="verticalCenter text-right font-term-purple font-bold">400</td>
														<td class="verticalCenter text-right"><input type="text" id="amount_premium_uw_CL1" class="auto form-control margin-padding0 text-right" value="0.00" data-v-min="0.00" data-v-max="999.99"></td>																									
													</tr>
													<tr>
														<td class="verticalCenter text-center font-term-green font-bold">ADD</td>						
														<td class="verticalCenter text-right font-term-green font-bold">xx</td>
														<td class="verticalCenter text-right"><input type="text" id="amount_premium_uw_CL2" class="auto form-control margin-padding0 text-right" value="0.00" data-v-min="0.00" data-v-max="999.99" disabled></td>																									
													</tr>
													<tr>
														<td class="verticalCenter text-center font-term-green font-bold">TD</td>					
														<td class="verticalCenter text-right font-term-green font-bold">xx</td>
														<td class="verticalCenter text-right"><input type="text" id="amount_premium_uw_CL3" class="auto form-control margin-padding0 text-right" value="0.00" data-v-min="0.00" data-v-max="999.99" disabled></td>																									
													</tr>
													<tr>
														<td class="verticalCenter text-center font-term-green font-bold">AME</td>						
														<td class="verticalCenter text-right font-term-green font-bold">xx</td>
														<td class="verticalCenter text-right"><input type="text" id="amount_premium_uw_CL4" class="auto form-control margin-padding0 text-right" value="0.00" data-v-min="0.00" data-v-max="999.99" disabled></td>																									
													</tr>	 -->																																							
												</tbody>							
											</table>
										</div>
																																									
									</div>
								</div>						
							</div>
							
							<div class="row">
								<div class="col-sm-12 style_col_float_margin">
									<div class="col-sm-2 style_col_topic">
										<label>การซื้อสัญญาแนบท้ายควบ</label>
									</div>
									<div class="col-sm-5 style_col_width40">
										<div id="div_buy_followCapital" class="panel panel-default">
											<div class="panel-heading">ซื้อตามจำนวนเงินเอาประกันภัย</div>
											<div class="panel-body">
												<div class="col-sm-12 padding_all1">
													<div class="col-sm-6">
													<input type="radio" name="rd_buy_contractAmount_OL[]" id="rd_buy_contractAmount_OL1" value="ได้" onclick="disabled_rider_buy_meth(1);"><label for="rd_buy_contractAmount_OL1" class="label_input2">ได้</label>
													</div>
													<div class="col-sm-6">
													<input type="radio" name="rd_buy_contractAmount_OL[]" id="rd_buy_contractAmount_OL2" value="ไม่ได้" checked onclick="disabled_rider_buy_meth(1);"><label for="rd_buy_contractAmount_OL2" class="label_input2">ไม่ได้</label>
													</div>
												</div>
												<div class="col-sm-12 disabledAll">
													<table class="table table-bordered" id="tbl_contractAmount_OL" style="width:100%;" >
													<thead>
														<tr>
															<th scope="col" class="text-center verticalCenter bg-term-blue" width="10%">เลือก</th>																				
															<th scope="col" class="text-center verticalCenter bg-term-blue" width="30%">Rider Code</th>
															<th scope="col" class="text-center verticalCenter bg-term-blue" width="60%">ชื่อ (ไทย)</th>								
														</tr>
													</thead>
													<tbody>
													</tbody>							
													</table>
												</div>
											</div>	
										</div>	
									</div>
									
									<div class="col-sm-5 style_col_width40">
										<div id="div_buy_followRate" class="panel panel-default">
											<div class="panel-heading">ซื้อตามเบี้ยประกันภัย</div>
											<div class="panel-body">
												<div class="col-sm-12 padding_all1">
													<div class="col-sm-6">
													<input type="radio" name="rd_buy_contractInsure_OL[]" id="rd_buy_contractInsure_OL1" value="ได้" onclick="disabled_rider_buy_meth(2);"><label for="rd_buy_contractInsure_OL1" class="label_input2">ได้</label>
													</div>
													<div class="col-sm-6">
													<input type="radio" name="rd_buy_contractInsure_OL[]" id="rd_buy_contractInsure_OL2" value="ไม่ได้" checked onclick="disabled_rider_buy_meth(2);"><label for="rd_buy_contractInsure_OL2" class="label_input2">ไม่ได้</label>
													</div>
												</div>
												<div class="col-sm-12 disabledAll">
													<table class="table table-bordered" id="tbl_contractInsure_OL" style="width:500px;">
													<thead>
														<tr>
															<th class="text-center verticalCenter bg-term-blue" width="10%">เลือก</th>																				
															<th class="text-center verticalCenter bg-term-blue" width="30%">Rider Code</th>
															<th class="text-center verticalCenter bg-term-blue" width="60%">ชื่อ (ไทย)</th>								
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
										<label>การนำทุนไปรวมเพื่อซื้อสัญญาแนบท้ายกับกรมธรรม์รายงวด</label>
									</div>
									<div class="col-sm-9 panel panel-default panel_style2">
										<div class="col-sm-12 padding_all1">
											<div class="col-sm-6">
											<input type="radio" name="rd_buy_contract_period_OL[]" id="rd_buy_contract_period_OL1" value="รวม" checked><label for="rd_buy_contract_period_OL1" class="label_input2">รวม</label>
											</div>
											<div class="col-sm-6">
											<input type="radio" name="rd_buy_contract_period_OL[]" id="rd_buy_contract_period_OL2" value="ไม่รวม"><label for="rd_buy_contract_period_OL2" class="label_input2">ไม่รวม</label>
											</div>
										</div>																																							
									</div>
								</div>						
							</div>
							
							<div class="row">
								<div class="col-sm-12 style_col_float_margin">
									<div class="col-sm-2 style_col_topic">
										<label>อำนาจการอนุมัติของสาขาจุดออก กธ. / NBI</label>
									</div>
									<div class="col-sm-9 panel panel-default panel_style2">
										<div class="col-sm-12 padding_all1">
											<div class="col-sm-6">
											<input type="checkbox" name="rd_approval_branch_OL[]" id="rd_approval_branch_OL1" value="NBI" checked><label for="rd_approval_branch_OL1" class="label_input2">NBI</label>
											</div>
											<div class="col-sm-6">
											<input type="checkbox" name="rd_approval_branch_OL[]" id="rd_approval_branch_OL2" value="สนญ."><label for="rd_approval_branch_OL2" class="label_input2">สนญ.</label>
											</div>
										</div>																																							
									</div>
								</div>						
							</div>
						</div>
						<!-- end panel 3 -->
						
						<div class="term_boxpanel margintop_20px">
						    <div class="row margin_panel1"><h4><strong>การตรวจสอบข้อมูล</strong></h4></div>
						    
						    <!-- ตรวจสอบข้อมูลเคลม กธ. เดิม -->					
							<div class="row">
								<div class="col-sm-10 style_col_float_margin"><input id="chk_check_data_OL1" type="checkbox" value=""><label for="chk_check_data_OL1" class="label_input2">ตรวจสอบข้อมูลเคลม กธ. เดิม</label></div>										
							</div>
							<div class="row displayNone" id="panel_oldCov_OL">
								<div class="col-sm-12 panel panel-default panel_style7">
											<div class="col-sm-12 padding_all1">
												<div class="col-sm-6">
												<input type="radio" name="chk_Condition_oldCov_OL[]" id="notCondition_oldCov_OL" value="ไม่มีเงื่อนไข (ตรวจทุกรายการ)" checked><label for="notCondition_oldCov_OL" class="label_input2">ไม่มีเงื่อนไข (ตรวจทุกรายการ)</label>
												</div>									
											</div>
	
											<div class="col-sm-12 padding_all7">
												<div class="col-sm-2">
												<input type="radio" name="chk_Condition_oldCov_OL[]" id="haveCondition_oldCov_OL" value="มีเงื่อนไข"><label for="haveCondition_oldCov_OL" class="label_input2">มีเงื่อนไข</label>
												</div>
												<div class="col-sm-2 paddingleft_style1 margintop_diff10px">
													<select class="form-control" id="sl_haveCondition_oldCov_OL" disabled>
														<option value="NONE" selected>None</option>
													</select>
												</div>
												<div class="col-sm-2 paddingleft_style1 margintop_diff10px">
													<select class="form-control" id="sl_haveCondition_oldCov2_OL" disabled>
														<option value="NONE" selected>None</option>
													</select>
												</div>	
												<div class="col-sm-2 paddingleft_style1 margintop_diff10px">
													<select class="form-control" id="sl_haveCondition_oldCov3_OL" disabled>
														<option value="NONE" selected>None</option>
													</select>
												</div>
												<div class="col-sm-2 paddingleft_style1 margintop_diff10px">
													<select class="form-control" id="sl_haveCondition_oldCov4_OL" disabled>
														<option value="NONE" selected>None</option>
													</select>
												</div>
												<div class="col-sm-2 paddingleft_style1 margintop_diff10px">
													<select class="form-control" id="sl_haveCondition_oldCov5_OL" disabled>
														<option value="NONE" selected>None</option>
													</select>
												</div>								
											</div>
											<div class="col-sm-9 panel_style6 displayNone" id="panel_Condition_oldCov_OL">
												<div id="standing_newSA_1_OL" class="col-sm-12 padding_all3 disabledAll">													
													<div class="col-sm-3 style_col_width20 paddingtop_6px">
														<label class="label_input2">New SA</label>														
													</div>
													<div class="col-sm-3 marginleft_style4">
														<select class="form-control" id="sl_NewSA_oldCov_OL">
															<option value="NONE" selected>None</option>
														</select>
													</div>	
													<div class="col-sm-3 marginleft_style5">
														<input type="text" id="amount_NewSA_oldCov_OL" class="autoComma form-control text-right" value="0.00" data-v-min="0.00" data-v-max="999999999.99">
													</div>
													<!-- <div class="col-sm-1 marginleft_style4 paddingtop_6px">บาท</div> -->											
												</div>
												<!-- ทุนตรวจสุขภาพ -->
												<!-- <div id="standing_capitalHealth_1_OL" class="disabledAll">
													<div class="col-sm-12 padding_all4" style="padding-bottom: 0px;">
														<div class="col-sm-3 style_col_width20 paddingtop_6px">
															<label class="label_input2">ทุนตรวจสุขภาพ</label>	
														</div>
														<div class="col-sm-9 style_col_width81 marginleft_style4">
															<table class="table table-bordered" style="width:100%; margin-top: 20px;" id="tbl_capitalHealth_1_OL">
																<thead>		
																	<tr>
																		<th width="5%" rowspan="2" class="text-center bg-term-blue verticalCenter"></th>
																		<th width="34%" colspan="2" class="text-center bg-term-blue verticalCenter">วันที่</th>
																		<th width="5%" rowspan="2" class="text-center bg-term-blue verticalCenter"></th>
																		<th width="34%" colspan="2" class="text-center bg-term-blue verticalCenter">อายุ</th>
																		<th width="22%" rowspan="2" class="text-center bg-term-blue verticalCenter">ทุนเริ่มต้นทุนตรวจสุขภาพ</th>
																	</tr>											
																	<tr>
																		<th width="19%" class="text-center bg-term-blue verticalCenter">เริ่มต้น</th>																				
																		<th width="19%" class="text-center verticalCenter bg-term-blue">สิ้นสุด</th>	
																		<th width="17%" class="text-center bg-term-blue verticalCenter">เริ่มต้น</th>																				
																		<th width="17%" class="text-center verticalCenter bg-term-blue">สิ้นสุด</th>							
																	</tr>
																</thead>
																<tbody>
																	<tr id="tr_capitalHealth1_row_OL1" data-id="1" data-parent="1" data-group="1">
																		<td class="text-center" id="imgOKcapitalHealth_OL1" onclick="imgCheckbox(this.id);"></td>
																		<td class="text-center"><input type="text" class="form-control format_date" id="appStart_date_capitalHealth_OL1" onblur="checkappStart_OL (this.id);" placeholder="dd/mm/yyyy" onkeyup=""
									      									onclick="appStart_date_OL(this.id);"  maxlength="10"></td>	
																		<td class="text-center"><input type="text" class="form-control format_date" id="appTo_date_capitalHealth_OL1" onblur="checkappTo_OL (this.id);" placeholder="dd/mm/yyyy" onkeyup=""
									 										 onclick="appTo_date_OL(this.id);" maxlength="10"></td>	
																		<td class="text-right"><i class="glyphicon glyphicon-plus icon-blue-circle" id="number_capitalHealth1_OL" onclick="addRowChild_capitalHealth_OL(this.id);"></i></td>	
																		<td class="text-right"><input type="number" id="capitalHealth_ageStart_OL1" class="form-control text-right"/></td>	
																		<td class="text-right"><input type="number" id="capitalHealth_ageEnd_OL1" class="form-control text-right"/></td>	
																		<td class="text-center"><input type="number" id="capitalHealth_capital_OL1" class="form-control text-right"/></td>	
																	</tr>
																</tbody>
															</table>
														</div>
													</div>
													<div class="col-sm-12 padding_all4">
														<div class="col-sm-3 style_col_width20 paddingtop_6px"></div>
														<div class="col-md-2">
															<input type="button" class="btn btn-primary width80px" value="เพิ่ม" onclick="addRow_capitalHealth_OL();"/>
														</div>
														<div class="col-md-2 marginleft_style5">
															<input type="button" class="btn btn-primary width80px" value="ลบ" onclick="deleteRow_capitalHealth_OL();"/>
														</div>
													</div>
												</div> -->
												<!-- ซื้อคู่กับแบบ -->
												<div id="standing_buyWith1_OL" class="disabledAll">
													<div class="col-sm-12 padding_all4" style="padding-bottom: 0px;">
														<div class="col-sm-3 style_col_width20 paddingtop_6px">
															<label class="label_input2">ซื้อคู่กับแบบ</label>	
														</div>
														<div class="col-sm-4 marginleft_style4">
															<table class="table table-bordered" style="width:100%; margin-top: 20px;" id="tbl_buyWith1_OL">
																<thead>		
																	<tr>
																		<th width="20%" class="text-center bg-term-blue verticalCenter"></th>
																		<th width="50%" class="text-center bg-term-blue verticalCenter">รหัสแบบประกัน</th>
																		<th width="30%" class="text-center bg-term-blue verticalCenter">รหัสแบบ</th>
																	</tr>											
																</thead>
																<tbody>
																</tbody>
															</table>
														</div>
													</div>
													<div class="col-sm-12 padding_all4">
														<div class="col-sm-3 style_col_width20 paddingtop_6px"></div>
														<div class="col-md-2">
															<input type="button" class="btn btn-primary width80px" value="เพิ่ม" onclick="open_modal_buyWith_key_OL(1);">
														</div>
														<div class="col-md-2 marginleft_style5">
															<input type="button" class="btn btn-primary width80px" value="ลบ" onclick="deleteRow_buyWith_key_OL();">
														</div>
													</div>
												</div>

												<!-- Total SA -->
											<%-- 	<div class="col-sm-12 padding_all4">													
													<div class="col-sm-3 style_col_width20 paddingtop_6px">
														<label class="label_input2">Total SA</label>														
													</div>
													<div class="col-sm-3 marginleft_style4">
														<select class="form-control" id="sl_TotalSA_oldCov" disabled>
															<option selected="">None</option>
															<option value=">=">>=</option>
															<option value="<="><=</option>
															<option value=">">></option>
															<option value="<"><</option>
														</select>
													</div>	
													<div class="col-sm-3 marginleft_style5">
														<input type="text" id="amount_TotalSA_oldCov" class="auto form-control margin-padding0 text-right" value="0.00" data-v-min="0.00" data-v-max="99999999.99">
													</div>
													<div class="col-sm-1 marginleft_style4 paddingtop_6px">บาท</div>											
												</div> --%>
																																																			
											</div>																		
								</div>
							</div>	
							
							<!-- ตรวจสอบข้อมูล IC -->
							<div class="row">
								<div class="col-sm-10 style_col_float_margin"><input id="chk_check_data_OL2" type="checkbox" value=""><label for="chk_check_data_OL2" class="label_input2">ตรวจสอบข้อมูล IC</label></div>										
							</div>
							<div class="row displayNone" id="panel_IC_OL">
								<div class="col-sm-9 panel panel-default panel_style7">
											<div class="col-sm-12 padding_all1">
												<div class="col-sm-6">
												<input type="radio" name="chk_Condition_IC_OL[]" id="notCondition_IC_OL" value="ไม่มีเงื่อนไข (ตรวจทุกรายการ)" checked><label for="notCondition_IC_OL" class="label_input2">ไม่มีเงื่อนไข (ตรวจทุกรายการ)</label>
												</div>									
											</div>
	
												<div class="col-sm-12 padding_all7">
												<div class="col-sm-2">
												<input type="radio" name="chk_Condition_IC_OL[]" id="haveCondition_IC_OL" value="มีเงื่อนไข"><label for="haveCondition_IC_OL" class="label_input2">มีเงื่อนไข</label>
												</div>
												<div class="col-sm-2 paddingleft_style1 margintop_diff10px">
													<select class="form-control" id="sl_haveCondition_IC_OL" disabled>
														<option value="NONE" selected>None</option>
													</select>
												</div>
												<div class="col-sm-2 paddingleft_style1 margintop_diff10px">
													<select class="form-control" id="sl_haveCondition_IC2_OL" disabled>
														<option value="NONE" selected>None</option>
													</select>
												</div>	
												<div class="col-sm-2 paddingleft_style1 margintop_diff10px">
													<select class="form-control" id="sl_haveCondition_IC3_OL" disabled>
														<option value="NONE" selected>None</option>
													</select>
												</div>
												<div class="col-sm-2 paddingleft_style1 margintop_diff10px">
													<select class="form-control" id="sl_haveCondition_IC4_OL" disabled>
														<option value="NONE" selected>None</option>
													</select>
												</div>
												<div class="col-sm-2 paddingleft_style1 margintop_diff10px">
													<select class="form-control" id="sl_haveCondition_IC5_OL" disabled>
														<option value="NONE" selected>None</option>
													</select>
												</div>								
											</div>
											
											<div class="col-sm-9 panel_style6 displayNone" id="panel_Condition_IC_OL">
												<div id="standing_newSA_2_OL" class="col-sm-12 padding_all3 disabledAll">													
													<div class="col-sm-3 style_col_width20 paddingtop_6px">
														<label class="label_input2">New SA</label>														
													</div>
													<div class="col-sm-3 marginleft_style4">
														<select class="form-control" id="sl_NewSA_IC_OL">
															<option value="NONE" selected >None</option>
														</select>
													</div>	
													<div class="col-sm-3 marginleft_style5">
														<input type="text" id="amount_NewSA_IC_OL" class="autoComma form-control text-right" value="0.00" data-v-min="0.00" data-v-max="999999999.99">
													</div>
												</div>
												<!-- ทุนตรวจสุขภาพ -->
												<!-- <div id="standing_capitalHealth_2_OL" class="disabledAll">
													<div class="col-sm-12 padding_all4" style="padding-bottom: 0px;">
														<div class="col-sm-3 style_col_width20 paddingtop_6px">
															<label class="label_input2">ทุนตรวจสุขภาพ</label>	
														</div>
														<div class="col-sm-9 style_col_width81 marginleft_style4">
															<table class="table table-bordered" style="width:100%; margin-top: 20px;" id="tbl_capitalHealth_2_OL">
																<thead>		
																	<tr>
																		<th width="5%" rowspan="2" class="text-center bg-term-blue verticalCenter"></th>
																		<th width="34%" colspan="2" class="text-center bg-term-blue verticalCenter">วันที่</th>
																		<th width="5%" rowspan="2" class="text-center bg-term-blue verticalCenter"></th>
																		<th width="34%" colspan="2" class="text-center bg-term-blue verticalCenter">อายุ</th>
																		<th width="22%" rowspan="2" class="text-center bg-term-blue verticalCenter">ทุนเริ่มต้นทุนตรวจสุขภาพ</th>
																	</tr>											
																	<tr>
																		<th width="19%" class="text-center bg-term-blue verticalCenter">เริ่มต้น</th>																				
																		<th width="19%" class="text-center verticalCenter bg-term-blue">สิ้นสุด</th>	
																		<th width="17%" class="text-center bg-term-blue verticalCenter">เริ่มต้น</th>																				
																		<th width="17%" class="text-center verticalCenter bg-term-blue">สิ้นสุด</th>							
																	</tr>
																</thead>
																<tbody>
																	<tr id="tr_capitalHealth2_row_OL1" data-id="1" data-parent="1" data-group="1">
																		<td class="text-center" id="imgOKcapitalHealthIC_OL_1" onclick="imgCheckbox(this.id);"></td>
																		<td class="text-center"><input type="text" class="form-control format_date" id="appStart_date_capitalHealthIC_OL1" onblur="checkappStart_OL (this.id);" placeholder="dd/mm/yyyy" onkeyup=""
									      									onclick="appStart_date_OL(this.id);"  maxlength="10"></td>	
																		<td class="text-center"><input type="text" class="form-control format_date" id="appTo_date_capitalHealthIC_OL1" onblur="checkappTo_OL (this.id);" placeholder="dd/mm/yyyy" onkeyup=""
									 										 onclick="appTo_date_OL(this.id);" maxlength="10"></td>	
																		<td class="text-right"><i class="glyphicon glyphicon-plus icon-blue-circle" id="number_capitalHealthIC_OL1" onclick="addRowChild_capitalHealth2_OL(this.id);"></i></td>	
																		<td class="text-right"><input type="number" id="capitalHealthIC_ageStart_OL1" class="form-control text-right"/></td>	
																		<td class="text-right"><input type="number" id="capitalHealthIC_ageEnd_OL1" class="form-control text-right"/></td>	
																		<td class="text-center"><input type="number" id="capitalHealthIC_capital_OL1" class="form-control text-right"/></td>	
																	</tr>
																</tbody>
															</table>
														</div>
													</div>
													
													<div class="col-sm-12 padding_all4">
														<div class="col-sm-3 style_col_width20 paddingtop_6px"></div>
														<div class="col-md-2">
															<input type="button" class="btn btn-primary width80px" value="เพิ่ม" onclick="addRow_capitalHealth2_OL();">
														</div>
														<div class="col-md-2 marginleft_style5">
															<input type="button" class="btn btn-primary width80px" value="ลบ" onclick="deleteRow_capitalHealth2_OL();">
														</div>
													</div>
												</div>
												 -->
												<!-- ซื้อคู่กับแบบ -->
												<div id="standing_buyWith2_OL" class="disabledAll">
													<div class="col-sm-12 padding_all4" style="padding-bottom: 0px;">
														<div class="col-sm-3 style_col_width20 paddingtop_6px">
															<label class="label_input2">ซื้อคู่กับแบบ</label>	
														</div>
														<div class="col-sm-4 marginleft_style4">
															<table class="table table-bordered" style="width:100%; margin-top: 20px;" id="tbl_buyWith2_OL">
																<thead>		
																	<tr>
																		<th width="20%" class="text-center bg-term-blue verticalCenter"></th>
																		<th width="50%" class="text-center bg-term-blue verticalCenter">รหัสแบบประกัน</th>
																		<th width="30%" class="text-center bg-term-blue verticalCenter">รหัสแบบ</th>
																	</tr>											
																</thead>
																<tbody>
																	
																</tbody>
															</table>
														</div>
													</div>
													
													<div class="col-sm-12 padding_all4">
														<div class="col-sm-3 style_col_width20 paddingtop_6px"></div>
														<div class="col-md-2">
															<input type="button" class="btn btn-primary width80px" value="เพิ่ม" onclick="open_modal_buyWith_key_OL(2);">
														</div>
														<div class="col-md-2 marginleft_style5">
															<input type="button" class="btn btn-primary width80px" value="ลบ" onclick="deleteRow_buyWith_key2_OL();">
														</div>
													</div>
												</div>
										</div>																	
								</div>
							</div>
							
							<!-- ตรวจสอบ กธ. เดิม รับแบบ Sub -->
							<div class="row">
								<div class="col-sm-10 style_col_float_margin"><input id="chk_check_data_OL3" type="checkbox" value=""><label for="chk_check_data_OL3" class="label_input2">ตรวจสอบ กธ. เดิม รับแบบ Sub</label></div>										
							</div>
							<div class="row displayNone" id="panel_SubCov_OL">
								<div class="col-sm-9 panel panel-default panel_style7">
											<div class="col-sm-12 padding_all1">
												<div class="col-sm-6">
												<input type="radio" name="chk_Condition_SubCov_OL[]" id="notCondition_SubCov_OL" value="ไม่มีเงื่อนไข (ตรวจทุกรายการ)" checked><label for="notCondition_SubCov_OL" class="label_input2">ไม่มีเงื่อนไข (ตรวจทุกรายการ)</label>
												</div>									
											</div>
											<div class="col-sm-12 padding_all7">
												<div class="col-sm-2">
												<input type="radio" name="chk_Condition_SubCov_OL[]" id="haveCondition_SubCov_OL" value="มีเงื่อนไข"><label for="haveCondition_SubCov_OL" class="label_input2">มีเงื่อนไข</label>
												</div>
												<div class="col-sm-2 paddingleft_style1 margintop_diff10px">
													<select class="form-control" id="sl_haveCondition_SubCov_OL" disabled>
														<option value="NONE" selected>None</option>
													</select>
												</div>
												<div class="col-sm-2 paddingleft_style1 margintop_diff10px">
													<select class="form-control" id="sl_haveCondition_SubCov2_OL" disabled>
														<option value="NONE" selected>None</option>
													</select>
												</div>	
												<div class="col-sm-2 paddingleft_style1 margintop_diff10px">
													<select class="form-control" id="sl_haveCondition_SubCov3_OL" disabled>
														<option value="NONE" selected>None</option>
													</select>
												</div>
												<div class="col-sm-2 paddingleft_style1 margintop_diff10px">
													<select class="form-control" id="sl_haveCondition_SubCov4_OL" disabled>
														<option value="NONE" selected>None</option>
													</select>
												</div>
												<div class="col-sm-2 paddingleft_style1 margintop_diff10px">
													<select class="form-control" id="sl_haveCondition_SubCov5_OL" disabled>
														<option value="NONE" selected>None</option>
													</select>
												</div>								
											</div>
											<div class="col-sm-9 panel_style6 displayNone" id="panel_Condition_SubCov_OL">
												<div id="standing_newSA_3_OL" class="col-sm-12 padding_all3 disabledAll">													
													<div class="col-sm-3 style_col_width20 paddingtop_6px">
														<label class="label_input2">New SA</label>														
													</div>
													<div class="col-sm-3 marginleft_style4">
														<select class="form-control" id="sl_NewSA_Sub_OL">
															<option value="NONE" selected>None</option>
														</select>
													</div>	
													<div class="col-sm-3 marginleft_style5">
														<input type="text" id="amount_NewSA_Sub_OL" class="autoComma form-control text-right" value="0.00" data-v-min="0.00" data-v-max="999999999.99">
													</div>
												</div>
												<!-- ทุนตรวจสุขภาพ -->
												<!-- <div id="standing_capitalHealth_3_OL" class="disabledAll">
													<div class="col-sm-12 padding_all4" style="padding-bottom: 0px;">
														<div class="col-sm-3 style_col_width20 paddingtop_6px">
															<label class="label_input2">ทุนตรวจสุขภาพ</label>	
														</div>
														<div class="col-sm-9 style_col_width81 marginleft_style4">
															<table class="table table-bordered" style="width:100%; margin-top: 20px;" id="tbl_capitalHealth_3_OL">
																<thead>		
																	<tr>
																		<th width="5%" rowspan="2" class="text-center bg-term-blue verticalCenter"></th>
																		<th width="34%" colspan="2" class="text-center bg-term-blue verticalCenter">วันที่</th>
																		<th width="5%" rowspan="2" class="text-center bg-term-blue verticalCenter"></th>
																		<th width="34%" colspan="2" class="text-center bg-term-blue verticalCenter">อายุ</th>
																		<th width="22%" rowspan="2" class="text-center bg-term-blue verticalCenter">ทุนเริ่มต้นทุนตรวจสุขภาพ</th>
																	</tr>											
																	<tr>
																		<th width="17%" class="text-center bg-term-blue verticalCenter">เริ่มต้น</th>																				
																		<th width="17%" class="text-center verticalCenter bg-term-blue">สิ้นสุด</th>	
																		<th width="17%" class="text-center bg-term-blue verticalCenter">เริ่มต้น</th>																				
																		<th width="17%" class="text-center verticalCenter bg-term-blue">สิ้นสุด</th>							
																	</tr>
																</thead>
																<tbody>
																	<tr id="tr_capitalHealth3_row_OL1" data-id="1" data-parent="1" data-group="1">
																		<td class="text-center" id="imgOKcapitalHealthSub_OL1" onclick="imgCheckbox(this.id);"></td>
																		<td class="text-center"><input type="text" class="form-control format_date" id="appStart_date_capitalHealthSub1_OL" onblur="checkappStart_OL(this.id);" placeholder="dd/mm/yyyy" onkeyup=""
									      									onclick="appStart_date_OL(this.id);"  maxlength="10"></td>	
																		<td class="text-center"><input type="text" class="form-control format_date" id="appTo_date_capitalHealthSub1_OL" onblur="checkappTo_OL(this.id);" placeholder="dd/mm/yyyy" onkeyup=""
									 										 onclick="appTo_date_OL(this.id);" maxlength="10"></td>	
																		<td class="text-right"><i class="glyphicon glyphicon-plus icon-blue-circle" id="number_capitalHealthSub1_OL" onclick="addRowChild_capitalHealth3_OL(this.id);"></i></td>	
																		<td class="text-right"><input type="number" id="capitalHealthSub_ageStart1_OL" class="form-control text-right"/></td>	
																		<td class="text-right"><input type="number" id="capitalHealthSub_ageEnd1_OL" class="form-control text-right"/></td>	
																		<td class="text-center"><input type="number" id="capitalHealthSub_capital1_OL" class="form-control text-right"/></td>	
																	</tr>
																</tbody>
															</table>
														</div>
													</div>
													<div class="col-sm-12 padding_all4">
														<div class="col-sm-3 style_col_width20 paddingtop_6px"></div>
														<div class="col-md-2">
															<input type="button" class="btn btn-primary width80px" value="เพิ่ม" onclick="addRow_capitalHealth3_OL();">
														</div>
														<div class="col-md-2 marginleft_style5">
															<input type="button" class="btn btn-primary width80px" value="ลบ" onclick="deleteRow_capitalHealth3_OL();">
														</div>
													</div>
												</div> -->
												<!-- ซื้อคู่กับแบบ -->
												<div id="standing_buyWith3_OL" class="disabledAll">
													<div class="col-sm-12 padding_all4" style="padding-bottom: 0px;">
														<div class="col-sm-3 style_col_width20 paddingtop_6px">
															<label class="label_input2">ซื้อคู่กับแบบ</label>	
														</div>
														<div class="col-sm-4 marginleft_style4">
															<table class="table table-bordered" style="width:100%; margin-top: 20px;" id="tbl_buyWith3_OL">
																<thead>		
																	<tr>
																		<th width="20%" class="text-center bg-term-blue verticalCenter"></th>
																		<th width="50%" class="text-center bg-term-blue verticalCenter">รหัสแบบประกัน</th>
																		<th width="30%" class="text-center bg-term-blue verticalCenter">รหัสแบบ</th>
																	</tr>											
																</thead>
																<tbody>
																	
																</tbody>
															</table>
														</div>
													</div>
													<div class="col-sm-12 padding_all4">
														<div class="col-sm-3 style_col_width20 paddingtop_6px"></div>
														<div class="col-md-2">
															<input type="button" class="btn btn-primary width80px" value="เพิ่ม" onclick="open_modal_buyWith_key_OL(3);">
														</div>
														<div class="col-md-2 marginleft_style5">
															<input type="button" class="btn btn-primary width80px" value="ลบ" onclick="deleteRow_buyWith_key3_OL();">
														</div>
													</div>
												</div>
										</div>	
																													
								</div>
							</div>
							
							<!-- <div class="row">
								<div class="col-sm-10 style_col_float_margin"><input id="chk_check_data_CL3" type="checkbox" value="ตรวจสอบสถานะ กธ. เดิม"><label for="chk_check_data_CL3" class="label_input2">ตรวจสอบสถานะ กธ. เดิม</label></div>										
								<div class="col-sm-6 style_table3" id="tbl_check_data_CL3">
									<table class="table table-bordered" style="width:100%;">
										<thead>
											<tr>
												<th class="text-center bg-term-blue verticalCenter" width="70">เลือก</th>																				
												<th colspan="2" class="text-center verticalCenter bg-term-blue" width="350">สถานะของ กธ. เดิม</th>							
											</tr>
										</thead>
										<tbody>
											<tr id="tbody_status_insurance1">
												<td id="imgOK_status_insurance1" class="verticalCenter text-center"><input id="status_insurance_CL1" type="checkbox" value="1"></td>						
												<td class="verticalCenter">xxx</td>																									
											</tr>
											<tr id="tbody_status_insurance2">
												<td id="imgOK_status_insurance2" class="verticalCenter text-center"><input id="status_insurance_CL2" type="checkbox" value="2"></td>						
												<td class="verticalCenter">xxx</td>																									
											</tr>
											<tr id="tbody_status_insurance3">
												<td id="imgOK_status_insurance3" class="verticalCenter text-center"><input id="status_insurance_CL13" type="checkbox" value="3"></td>						
												<td class="verticalCenter">xxx</td>																									
											</tr>
											<tr id="tbody_status_insurance4">
												<td id="imgOK_status_insurance4" class="verticalCenter text-center"><input id="status_insurance_CL4" type="checkbox" value="4"></td>						
												<td class="verticalCenter">xxx</td>																									
											</tr>
											<tr id="tbody_status_insurance5">
												<td id="imgOK_status_insurance5" class="verticalCenter text-center"><input id="status_insurance_CL5" type="checkbox" value="5"></td>						
												<td class="verticalCenter">xxx</td>																									
											</tr>											
										</tbody>							
									</table>
									</div>
							</div> -->
							<div class="row">
								<div class="col-sm-10 style_col_float_margin"><input id="chk_check_data_OL4" type="checkbox" id="chk_ic_ba_OL" value="ตรวจสอบข้อมูลบุคคลล้มละลาย IC.BA" disabled checked><label for="chk_check_data_OL4" class="label_input2 label_disabled">ตรวจสอบข้อมูลบุคคลล้มละลาย IC.BA</label></div>										
							</div>
							<div class="row">
								<div class="col-sm-10 style_col_float_margin"><input id="chk_check_data_OL5" type="checkbox" id="chk_ic_fi_cft_OL" value="ตรวจสอบข้อมูลฟอกเงิน IC.FI และการก่อการร้าย" disabled checked><label for="chk_check_data_OL5" class="label_input2 label_disabled">ตรวจสอบข้อมูลฟอกเงิน IC.FI และการก่อการร้าย</label></div>										
							</div>
							<div class="row">
								<div class="col-sm-10 style_col_float_margin"><input id="chk_check_data_OL6" type="checkbox" id="chk_saleBacklist_OL1" value="ตรวจสอบข้อมูล Blacklist ฝ่ายขาย"><label for="chk_check_data_OL6" class="label_input2">ตรวจสอบข้อมูล Blacklist ฝ่ายขาย</label></div>										
							</div>							
						</div>
						<!-- end panel 4 -->
						
						<div class="term_boxpanel margintop_20px">											
							<div class="row">
								<div class="col-sm-12 style_col_float_margin">
									<div class="col-sm-2 style_col_topic">
										<label id="first_premium_payment_OL">การชำระเบี้ยประกันภัยปีแรก</label>
									</div>						
									<div class="col-sm-8 panel panel-default panel_style8" id="panel_first_pay_premium_OL">
										<div class="col-sm-12 padding_all1" id="collect_meth_FYP_OL">
											<!-- <div class="col-sm-4">
												<input type="checkbox" name="chk_first_pay_premium_OL[]" id="chk_first_pay_premium_OL1" value="เงินสด"><label for="chk_first_pay_premium_OL1" class="label_input2">เงินสด</label>
											</div>
											<div class="col-sm-4">
												<input type="checkbox" name="chk_first_pay_premium_OL[]" id="chk_first_pay_premium_OL2" value="เช็ค"><label for="chk_first_pay_premium_OL2" class="label_input2">เช็ค</label>
											</div>
											<div class="col-sm-3">
												<input type="checkbox" name="chk_first_pay_premium_OL[]" id="chk_first_pay_premium_OL3" value="บัตรเครดิต"><label for="chk_first_pay_premium_OL3" class="label_input2">บัตรเครดิต</label>
											</div>
											<div class="col-sm-4">
												<input type="checkbox" name="chk_first_pay_premium_OL[]" id="chk_first_pay_premium_OL4" value="บัตรเดบิต"><label for="chk_first_pay_premium_OL4" class="label_input2">บัตรเดบิต</label>
											</div>
											<div class="col-sm-3">
												<input type="checkbox" name="chk_first_pay_premium_OL[]" id="chk_first_pay_premium_OL5" value="หักผ่านบัญชี"><label for="chk_first_pay_premium_OL5" class="label_input2">หักผ่านบัญชี</label>
											</div> -->
										</div>																																							
									</div>
								</div>						
							</div>
							
							<div class="row">
								<div class="col-sm-12 style_col_float_margin">
									<div class="col-sm-2 style_col_topic">
										<label id="first_premium_payment_OL">การชำระเบี้ยประกันภัยปีต่อไป/ปีต่ออายุ</label>
									</div>						
									<div class="col-sm-8 panel panel-default panel_style8" id="panel_next_pay_premium_OL">
										<div class="col-sm-12 padding_all1"  id="collect_meth_RYP_OL">
											<!-- <div class="col-sm-4">
												<input type="checkbox" name="chk_next_pay_premium_OL[]" id="chk_next_pay_premium_OL1" value="เงินสด"><label for="chk_next_pay_premium_OL1" class="label_input2">เงินสด</label>
											</div>
											<div class="col-sm-4">
												<input type="checkbox" name="chk_next_pay_premium_OL[]" id="chk_next_pay_premium_OL2" value="เช็ค"><label for="chk_next_pay_premium_OL2" class="label_input2">เช็ค</label>
											</div>
											<div class="col-sm-3">
												<input type="checkbox" name="chk_next_pay_premium_OL[]" id="chk_next_pay_premium_OL3" value="บัตรเครดิต"><label for="chk_next_pay_premium_OL3" class="label_input2">บัตรเครดิต</label>
											</div>
											<div class="col-sm-4">
												<input type="checkbox" name="chk_next_pay_premium_OL[]" id="chk_next_pay_premium_OL4" value="บัตรเดบิต"><label for="chk_next_pay_premium_OL4" class="label_input2">บัตรเดบิต</label>
											</div>
											<div class="col-sm-3">
												<input type="checkbox" name="chk_next_pay_premium_OL[]" id="chk_next_pay_premium_OL5" value="หักผ่านบัญชี"><label for="chk_next_pay_premium_OL5" class="label_input2">หักผ่านบัญชี</label>
											</div> -->
										</div>																																							
									</div>
								</div>						
							</div>
							
							<div class="row">
								<div class="col-sm-12 style_col_float_margin">
									<div class="col-sm-2 style_col_topic">
										<label>วันที่ขึ้นระบบงาน</label>
									</div>
									<div class="col-xs-3 style_col_width22">
										<input type="text" class="form-control" id="system_date_ol" placeholder="dd/mm/yyyy" value="" onkeyup="
												        var v = this.value;
												        if (v.match(/^\d{2}$/) !== null) {
												            this.value = v + '/';
										
												        } else if (v.match(/^\d{2}\/\d{2}$/) !== null) {
												            this.value = v + '/';
												        }" maxlength="10" readonly>																																							
									</div>
								</div>						
							</div>
							
							<div class="row">
								<div class="col-sm-12 style_col_float_margin">
									<div class="col-sm-2 style_col_topic">
										<label>การฟ้องทุนเพื่อส่ง Reinsurance</label>
									</div>
									<div class="col-sm-9 panel panel-default panel_style2">
										<div class="col-sm-12 padding_all1 disabledAll">
											<div class="col-sm-6">
											<input type="radio" name="rd_filing_rs_OL[]" id="rd_filing_rs_OL1" value="ฟ้อง" checked><label for="rd_filing_rs_OL1" class="label_input2">ฟ้อง</label>
											</div>
											<div class="col-sm-6">
											<input type="radio" name="rd_filing_rs_OL[]" id="rd_filing_rs_OL2" value="ไม่ฟ้อง" ><label for="rd_filing_rs_OL2" class="label_input2">ไม่ฟ้อง</label>
											</div>
										</div>																																							
									</div>
								</div>						
							</div>
							
							<!-- <div class="row">
								<div class="col-sm-12 style_col_float_margin">
									<div class="col-sm-2 style_col_topic">
										<label>เลขที่กรมธรรม์ (Master Policy)</label>
									</div>
									<div class="col-sm-9">
										<input type="text" class="form-control style_input1 text-center" id="master_policy_ol" maxlength="8" value="">																																						
									</div>
								</div>						
							</div>
							
							<div class="row">
								<div class="col-sm-12 style_col_float_margin">
									<div class="col-sm-2 style_col_topic">
										<label>สูตรวันสิ้นสุดสัญญา</label>
									</div>
									<div class="col-sm-9">
										<input type="text" class="form-control style_input1" id="dateend_contract_ol" value="รอ" disabled>																																						
									</div>
								</div>						
							</div>
							
							<div class="row">
								<div class="col-sm-12 style_col_float_margin">
									<div class="col-sm-2 style_col_topic">
										<label>ผู้รับผลประโยชน์ (ลำดับที่ 1)</label>
									</div>
									<div class="col-sm-9 panel panel-default panel_style2">
										<div class="col-sm-12 padding_all1">
											<div class="col-sm-12">
											<input type="radio" name="rd_benefit_person_OL[]" id="rd_benefit_person_OL1" value="Partner" checked><label for="rd_benefit_person_OL1" class="label_input2">Partner</label>
											</div>
											<div class="col-sm-12">
											<input type="radio" name="rd_benefit_person_OL[]" id="rd_benefit_person_OL2" value="ผู้มีส่วนได้เสีย"><label for="rd_benefit_person_OL2" class="label_input2">ผู้มีส่วนได้เสีย</label>
											</div>
										</div>																																							
									</div>
								</div>						
							</div> -->
							
							<div class="row">
								<div class="col-sm-12 style_col_float_margin">
									<div class="col-sm-2 style_col_topic">
										<label id="fax_app_label_OL">การส่ง Fax App หรือช่องทางอื่นๆ</label>
									</div>
									<div class="col-sm-9 panel panel-default panel_style2">
										<div class="col-sm-12 padding_all1">
											<div class="col-sm-6">
											<input type="radio" name="rd_fax_app_OL[]" id="rd_fax_app_OL1" value="ได้" checked><label for="rd_fax_app_OL1" class="label_input2">ได้</label>
											</div>
											<div class="col-sm-6">
											<input type="radio" name="rd_fax_app_OL[]" id="rd_fax_app_OL2" value="ไม่ได้"><label for="rd_fax_app_OL2" class="label_input2">ไม่ได้</label>
											</div>
										</div>																																							
									</div>
								</div>						
							</div>
							
							<div class="row">
								<div class="col-sm-10 style_col_float_margin marginleft_style1">
									<div class="col-sm-4 paddingtop_6px">
										<input type="checkbox" id="chk_free_look_OL"><label for="chk_free_look_OL" class="label_input2">การใช้สิทธิ Free Look Period</label>
									</div>	
									<div class="col-xs-1 paddingtop_8px"><strong>ภายใน</strong></div>
									<div class="col-xs-1 paddingleft_style1">
										<input type="text" class="auto form-control width50px" id="amount_free_look_OL" maxlength="3" data-v-min="0" data-v-max="999" disabled>
									</div>	
									<div class="col-sm-4 paddingtop_8px"><strong>วัน นับจากวันที่สร้าง Cert File</strong></div>							
								</div>						
							</div>
							
							<div class="row">
								<div class="col-sm-10 style_col_float_margin marginleft_style1">
									<div class="col-sm-12 paddingtop_6px">
										<input type="checkbox" id="deduct_cost_OL" disabled><label for="deduct_cost_OL" class="label_input2">หักค่าใช้จ่าย</label>
									</div>	
									<div class="col-sm-8">
									<table class="table table-bordered style_table4" id="tbl_deduct_cost_OL" style="width:100%;">
										<thead>
											<tr>
												<th class="text-center bg-term-blue verticalCenter" width="70">เลือก</th>																				
												<th colspan="2" class="text-center verticalCenter bg-term-blue" width="350">รายการหักค่าใช้จ่าย</th>							
											</tr>
										</thead>
										<tbody>
											<tr id="tbody_list_deduct_cost_OL1">
												<td id="imgOK_list_deduct_cost_OL1" class="verticalCenter text-center"><input id="list_deduct_cost_OL1" type="checkbox" value="POLICY_ISSUE"></td>						
												<td class="verticalCenter">ค่าดำเนินการออกกรมธรรม์ จำนวนเงิน 500 บาท</td>																									
											</tr>
											<tr id="tbody_list_deduct_cost_OL2">
												<td id="imgOK_list_deduct_cost_OL2" class="verticalCenter text-center"><input id="list_deduct_cost_OL2" type="checkbox" value="CREDIT_FEE"></td>						
												<td class="verticalCenter">ค่าธรรมเนียมบัตรเครดิต เป็น % (สูตรการคำนวณ)</td>																									
											</tr>
											<tr id="tbody_list_deduct_cost3">
												<td id="imgOK_list_deduct_cost_OL3" class="verticalCenter text-center"><input id="list_deduct_cost_OL3" type="checkbox" value="MED_EXAM"></td>						
												<td class="verticalCenter">ค่าตรวจสุขภาพ</td>																									
											</tr>
											<tr id="tbody_list_deduct_cost4">
												<td id="imgOK_list_deduct_cost_OL4" class="verticalCenter text-center"><input id="list_deduct_cost_OL4" type="checkbox" value="OTHER"></td>						
												<td class="verticalCenter">ค่าอื่นๆ</td>																									
											</tr>
																					
										</tbody>							
									</table>
									</div>						
								</div>						
							</div>
						</div>
						<!-- end panel 5 -->
						
						<br clear="all">
						<div class="col-md-8 col-md-offset-7 text-right">
							<div class="col-md-7">
								<div class="col-md-6">
									<button type="button" class="btn btn-primary width80px" id="bt_ui005_2_Confirm_ol" onclick="bt_Menu5_Confirm_OL();">บันทึก</button>
								</div>
								<div class="col-md-3">
									<button type="button" class="btn btn-primary width80px" data-dismiss="modal" data-toggle="modal" data-target="#cancelBoxOL_WarrantyTerm">ยกเลิก</button>
								</div>
							</div>
						</div>
						<br clear="all">
																			
						  </div>
						  
		<!-------------------------------------- modal -------------------------------------->	
		<!-- เพิ่ม : ซื้อคู่กับแบบ (ตรวจสอบข้อมูลเคลม กธ. เดิม)-->				
	<div class="modal fade" id="modal_buyWith1_OL" role="dialog">
		<div class="modal-dialog">

			<!-- Modal content-->			
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">เลือก : ซื้อคู่กับแบบ</h4>
				</div>
				<div class="modal-body">
					<!-- <div class="row">				
						<div class="col-sm-12">
							<div class="col-sm-3"><input type="radio" id="rdSpecifyKey1_OL" name="select_buyWidth1_OL" onclick="displayBuyWidthOL_popup();" checked/><label for="rdSpecifyKey1_OL">&nbsp;ระบุรหัสแบบ</label></div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-12">
							<div class="col-sm-1"></div>
							<div class="col-sm-4"><input type="text" id="txtSpecifyKey1_OL" class="form-control"/></div>
						</div>
					</div> -->
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row">
						<div class="col-sm-12">
							<div class="col-sm-3"><input type="radio" id="rdChooseKey1_OL" name="select_buyWidth1_OL" onclick="displayBuyWidthOL_popup();"/><label for="rdChooseKey1_OL">&nbsp;เลือกรหัสแบบ</label></div>
						</div>
					</div>
				<!-- ซื้อคู่กับแบบ -->
				<div class="table_width1">
					<div class="row">
						<div id="datatbl_buyWidth1_OL" class="datatbl_buyWidth1_OL">
						<!-- tbl -->
						<table class="table table-bordered" id="tbl_chooseBuyWith1_OL">
							<thead>
								<tr class="bg-primary">
									<th class="text-center" width="20%" style="border-right:none; vertical-align:middle;">เลือก</th>
									<th class="text-center" width="50%" style="border-right:none; vertical-align:middle;">รหัสแบบประกัน</th>
									<th class="text-center" width="30%" style="border-right:none;">รหัส</th>
								</tr>
							</thead>
							<tbody>
							
							</tbody>
						</table>
						<div class="text-center" style="padding: 10px 0"></div>	
						</div>		
						<!-- button -->
						<div class="row" align="center">						
								<button type="button" class="btn btn-primary" id="btn_saveSelectRecord_OL" onclick="saveBuyWidth1_OL();" data-dismiss="modal">ตกลง</button>						
								<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>												
						</div>		
					</div>							
				</div>				
				</div>
			</div>
		</div>
	</div>
	
	<!-- เพิ่ม : ซื้อคู่กับแบบ (ตรวจสอบข้อมูล IC)-->				
	<div class="modal fade" id="modal_buyWith2_OL" role="dialog">
		<div class="modal-dialog">

			<!-- Modal content-->			
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">เลือก : ซื้อคู่กับแบบ</h4>
				</div>
				<div class="modal-body">
					<!-- <div class="row">				
						<div class="col-sm-12">
							<div class="col-sm-3"><input type="radio" id="rdSpecifyKey2_OL" name="select_buyWidth2_OL" onclick="displayBuyWidthOL_popup2();" checked/><label for="rdSpecifyKey2_OL">&nbsp;ระบุรหัสแบบ</label></div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-12">
							<div class="col-sm-1"></div>
							<div class="col-sm-4"><input type="text" id="txtSpecifyKey2_OL" class="form-control"/></div>
						</div>
					</div> -->
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row">
						<div class="col-sm-12">
							<div class="col-sm-3"><input type="radio" id="rdChooseKey2_OL" name="select_buyWidth2_OL" onclick="displayBuyWidthOL_popup2();"/><label for="rdChooseKey2_OL">&nbsp;เลือกรหัสแบบ</label></div>
						</div>
					</div>
				<!-- ซื้อคู่กับแบบ -->
				<div class="table_width1">
					<div class="row">
						<div id="datatbl_buyWidth2_OL" class="datatbl_buyWidth2_OL">
						<!-- tbl -->
						<table class="table table-bordered" id="tbl_chooseBuyWith2_OL">
							<thead>
								<tr class="bg-primary">
									<th class="text-center" width="20%" style="border-right:none; vertical-align:middle;">เลือก</th>
									<th class="text-center" width="50%" style="border-right:none; vertical-align:middle;">รหัสแบบประกัน</th>
									<th class="text-center" width="30%" style="border-right:none;">รหัส</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td class="verticalCenter text-center" id="imgOK2_buyWith1_OL" onclick="imgCheckbox(this.id);"><i class="glyphicon glyphicon-edit"></i></td>
									<td class="verticalCenter text-left"><a>Test</a></td>
								</tr>
								<tr>
									<td class="verticalCenter text-center" id="imgOK2_buyWith2_OL" onclick="imgCheckbox(this.id);"><i class="glyphicon glyphicon-edit"></i></td>
									<td class="verticalCenter text-left"><a>Test2</a></td>
								</tr>
							</tbody>
						</table>
						<div class="text-center" style="padding: 10px 0"></div>	
						</div>		
						<!-- button -->
						<div class="row" align="center">						
								<button type="button" class="btn btn-primary" id="btn_saveSelectRecord_OL" onclick="saveBuyWidth2_OL();" data-dismiss="modal">ตกลง</button>						
								<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>												
						</div>		
					</div>							
				</div>				
				</div>
			</div>
		</div>
	</div>
	
	<!-- เพิ่ม : ซื้อคู่กับแบบ (ตรวจสอบ กธ. เดิม รับแบบ Sub)-->				
	<div class="modal fade" id="modal_buyWith3_OL" role="dialog">
		<div class="modal-dialog">

			<!-- Modal content-->			
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">เลือก : ซื้อคู่กับแบบ</h4>
				</div>
				<div class="modal-body">
					<!-- <div class="row">				
						<div class="col-sm-12">
							<div class="col-sm-3"><input type="radio" id="rdSpecifyKey3_OL" name="select_buyWidth3_OL" onclick="displayBuyWidthOL_popup3();" checked/><label for="rdSpecifyKey3_OL">&nbsp;ระบุรหัสแบบ</label></div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-12">
							<div class="col-sm-1"></div>
							<div class="col-sm-4"><input type="text" id="txtSpecifyKey3_OL" class="form-control"/></div>
						</div>
					</div> -->
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row">
						<div class="col-sm-12">
							<div class="col-sm-3"><input type="radio" id="rdChooseKey3_OL" name="select_buyWidth3_OL" onclick="displayBuyWidthOL_popup3();"/><label for="rdChooseKey3_OL">&nbsp;เลือกรหัสแบบ</label></div>
						</div>
					</div>
				<!-- ซื้อคู่กับแบบ -->
				<div class="table_width1">
					<div class="row">
						<div id="datatbl_buyWidth3_OL" class="datatbl_buyWidth3_OL">
						<!-- tbl -->
						<table class="table table-bordered" id="tbl_chooseBuyWith3_OL">
							<thead>
								<tr class="bg-primary">
									<th class="text-center" width="20%" style="border-right:none; vertical-align:middle;">เลือก</th>
									<th class="text-center" width="50%" style="border-right:none; vertical-align:middle;">รหัสแบบประกัน</th>
									<th class="text-center" width="30%" style="border-right:none;">รหัส</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td class="verticalCenter text-center" id="imgOK3_buyWith1_OL" onclick="imgCheckbox(this.id);"><i class="glyphicon glyphicon-edit"></i></td>
									<td class="verticalCenter text-left"><a>Test</a></td>
								</tr>
								<tr>
									<td class="verticalCenter text-center" id="imgOK3_buyWith2_OL" onclick="imgCheckbox(this.id);"><i class="glyphicon glyphicon-edit"></i></td>
									<td class="verticalCenter text-left"><a>Test2</a></td>
								</tr>
							</tbody>
						</table>
						<div class="text-center" style="padding: 10px 0"></div>	
						</div>		
						<!-- button -->
						<div class="row" align="center">						
								<button type="button" class="btn btn-primary" id="btn_saveSelectRecord_OL" onclick="saveBuyWidth3_OL();" data-dismiss="modal">ตกลง</button>						
								<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>												
						</div>		
					</div>							
				</div>				
				</div>
			</div>
		</div>
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
					<button type="button" class="btn btn-primary" id="bt_confirmProduct_OL"
						data-dismiss="modal">ตกลง</button>
					<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>

				</div>
			</div>
		</div>
	</div>
	
			
	<!-- Hidden value -->		  
	<input type="hidden" id="lookup_factor_OL" />
	<input type="hidden" id="lookup_unit_OL" />			
	
	<input type="hidden" id="lookup_gio_OL"/>
	<input type="hidden" id="lookup_slSenior_OL"/>
	<input type="hidden" id="lookup_reinsurance_Group_OL"/>
	<input type="hidden" id="lookup_filing_Channel_OL"/>
	<input type="hidden" id="lookup_sale_Channel_OL"/>
