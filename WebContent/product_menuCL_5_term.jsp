<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<div class="panel panel-default panel-bordertop">							
							 
							<div class="term_boxpanel">					 
							 <div class="row">
								<div class="col-sm-12 style_col_float_margin">
									<div class="col-sm-2 style_col_topic">
										<label>วันที่กำหนดการขาย<font id="validate_input6_cl" style="color:red">*</font></label>
									</div>
									<div class="col-xs-3 style_col_width22">
										<input type="text" class="form-control" id="menu_term1_datefrom_cl" value=""
											placeholder="dd/mm/yyyy"
											onchange="validate_input6_cl();"
											onblur="checkdateTo_fixSale();"
											onkeyup="
												        var v = this.value;
												        if (v.match(/^\d{2}$/) !== null) {
												            this.value = v + '/';
												        } else if (v.match(/^\d{2}\/\d{2}$/) !== null) {
												            this.value = v + '/';
												        }"
											maxlength="10" readonly>
									</div>
									<div class="col-left paddingtop_6px">-</div>
									<div class="col-xs-3 style_col_width22">
										<input type="text" class="form-control" id="menu_term1_dateto_cl" value=""
											 placeholder="dd/mm/yyyy"
											 onchange="validate_input6_cl();"
											 onblur="checkdateTo_fixSale();"
											onkeyup="
												        var v = this.value;
												        if (v.match(/^\d{2}$/) !== null) {
												            this.value = v + '/';
												        } else if (v.match(/^\d{2}\/\d{2}$/) !== null) {
												            this.value = v + '/';
												        } "
											maxlength="10" readonly>
									</div>
									<div class="col-xs-1">
										<button type="button" class="btn btn-primary fa fa-history" id=""
											data-toggle="modal" data-target="#modal_historySale_CL"></button>											
									</div>
								</div>						
							</div>
							<div class="row">
								<div class="col-sm-12 style_col_float_margin">
									<div class="col-sm-2 style_col_topic">
										<label>ระยะเวลาเอาประกันภัย</label>
									</div>
									<div class="col-xs-1">
										<input type="number" class="form-control width50px text-right font-term-purple" id="start_period_insure_cl" onblur="validate_age(this.id) , checkFromToPeriod_CL(this) , replaceSpecialSymbol(this);" onkeyup="check_age_validate();" value="" maxlength="3">
									</div>
									<div class="col-xs-2 style_col_width13dot67">
										<select class="form-control width82px font-term-purple" id="start_period_insure_unit_cl" onchange="checkFromToPeriod_CL(this), check_age_validate();" onclick="durationFrom(this);">
										</select>
									</div>
									<div class="col-left" style="padding-top: 6px;">-</div>
									<div class="col-xs-1">
										<input type="number" class="form-control width50px text-right font-term-purple" id="end_period_insure_cl" onblur="validate_age(this.id) , checkFromToPeriod_CL(this) , replaceSpecialSymbol(this);" onkeyup="check_age_validate();" value="" maxlength="3">
									</div>
									<div class="col-xs-2 style_col_width13dot67">
										<select class="form-control width82px font-term-purple" id="end_period_insure_unit_cl" onchange="checkFromToPeriod_CL(this) , check_age_validate();" onclick="durationTo(this);">
										</select>
									</div>
									<div class="col-xs-2 style_col_width15 paddingtop_6px"><strong>ระยะเวลาเอาประกันภัยสูงสุด</strong></div>
									<div class="col-xs-1">
										<input type="number" class="form-control width50px text-right" id="max_period_insure_cl" onblur="validate_age(this.id) , checkMaxProtectionAge_CL();" onkeyup="replaceSpecialSymbol(this);" value="0" maxlength="3">
									</div>
									<div class="col-xs-1 paddingtop_6px"><strong>ปี</strong></div>
								</div>						
							</div>
							
							<div class="row">
								<div class="col-sm-12 style_col_float_margin">
									<div class="col-sm-2 style_col_topic">
										<label>ระยะเวลาชำระเบี้ยประกันภัย<font id="validate_input7_cl" style="color:red">*</font></label>
									</div>
									<div class="col-sm-6">
									<table class="table table-bordered" id="tbl_modeTerms" style="width:100%;">
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
							
							<div class="row">
								<div class="col-sm-12 style_col_float_margin">
									<div class="col-sm-2 style_col_topic">
										<label>พิกัดอายุ<font id="validate_input8_cl" style="color:red">*</font></label>
										
									</div>
									<div class="col-xs-1">
										<!-- <input type="hidden" id="hd_minAge_term"/> -->
										<input type="number" class="form-control width50px text-right font-term-purple" id="start_age_insure_cl" onchange="numberKey_min_term(this) , validate_input8_cl() , startIssue_term(this);" onkeyup="replaceSpecialSymbol(this);" value="0" >
									</div>
									<div class="col-xs-2 style_col_width13dot67">
										<select class="form-control width82px font-term-purple" id="start_age_insure_unit_cl" onchange="change_typeTerm1_term(this) , validate_input8_cl();">
										</select>
									</div>
									<div class="col-left" style="padding-top: 6px;">-</div>
									<div class="col-xs-1">
										<!-- <input type="hidden" id="hd_maxAge_term"/> -->
										<input type="number" class="form-control width50px text-right font-term-purple" id="end_age_insure_cl" onchange="numberKey_max_term(this) , validate_input8_cl() , endIssue_term(this);" onkeyup="replaceSpecialSymbol(this);" value="0" >
									</div>
									<div class="col-xs-2 style_col_width13dot67">
										<select class="form-control width82px font-term-purple" id="end_age_insure_unit_cl" onchange="change_typeTerm2_term(this) , validate_input8_cl();">
										</select>
									</div>
									<div class="col-xs-2 style_col_width15dot5 paddingtop_6px"><strong>คุ้มครองสูงสุดถึงอายุ</strong></div>
									<div class="col-xs-1 marginleft_diff16px">
										<!-- <input type="hidden" id="hd_maximumAge_term"/> -->
										<input type="number" class="form-control width50px text-right font-term-purple" id="max_age_insure_cl" onchange="numberKey_maximum_term(this);" onkeyup="replaceSpecialSymbol(this) , maxInsure_term(this);" value="0" >
									</div>
									<div class="col-xs-1 paddingtop_6px"><strong>ปี</strong></div>
								</div>						
							</div>
							
							<div class="row">
								<div class="col-sm-12 style_col_float_margin">
									<div class="col-sm-2 style_col_topic">
										<label>สูตรการคำนวณอายุ<font id="validate_input9_cl" style="color:red" hidden>*</font></label>
									</div>
									<div class="col-sm-6">
									<table class="table table-bordered" id="tbl_formulaTerms" style="width:100%;">
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
										<label>ชั้นอาชีพที่เสนอขาย<font id="validate_input10_cl" style="color:red">*</font></label>
									</div>
									<div class="col-sm-6">
									<table class="table table-bordered" id="tbl_saleDegreeTerm" style="width:100%;">
										<thead>
											<tr>
												<th class="text-center bg-term-blue verticalCenter" width="70">เลือก</th>																				
												<th colspan="2" class="text-center verticalCenter bg-term-blue" width="350">ชั้นอาชีพ</th>							
											</tr>
										</thead>
										<tbody>
											<tr id="tbody_career_term0">
												<td id="imgOK_career_term0" class="verticalCenter text-center"><input id="mode_career_term0_cl" type="checkbox" value="0" onclick="validate_levelJob(this); validate_input10_cl();"></td>						
												<td class="verticalCenter">ทุกชั้นอาชีพ</td>																									
											</tr>
											<tr id="tbody_career_term1">
												<td id="imgOK_career_term1" class="verticalCenter text-center"><input id="mode_career_term1_cl" type="checkbox" onclick="validate_input10_cl();" value="1"></td>						
												<td class="verticalCenter">ชั้นอาชีพ 1</td>																									
											</tr>
											<tr id="tbody_career_term2">
												<td id="imgOK_career_term2" class="verticalCenter text-center"><input id="mode_career_term2_cl" type="checkbox" onclick="validate_input10_cl();" value="2"></td>						
												<td class="verticalCenter">ชั้นอาชีพ 2</td>																									
											</tr>
											<tr id="tbody_career_term3">
												<td id="imgOK_career_term3" class="verticalCenter text-center"><input id="mode_career_term3_cl" type="checkbox" onclick="validate_input10_cl();" value="3"></td>						
												<td class="verticalCenter">ชั้นอาชีพ 3</td>																									
											</tr>
											<tr id="tbody_career_term4">
												<td id="imgOK_career_term4" class="verticalCenter text-center"><input id="mode_career_term4_cl" type="checkbox" onclick="validate_input10_cl();" value="4"></td>						
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
						<div class="row" id="row_cal_amount_CL">
								<div class="col-sm-12 style_col_float_margin">
									<div class="col-sm-2 style_col_topic">
										<label>การคำนวณจำนวนเงินเอาประกันภัย</label>
									</div>
									<div class="col-sm-10 style_table1 content_scroll" id="style-1">
									<table class="table table-bordered" style="width:1000px;" id="tbl_cal_amount_CL">
										<thead>
											<tr>
												<th rowspan="2" class="text-center bg-term-blue verticalCenter borderBlack" width="120">Coverage<br>หลัก / เพิ่มเติม</th>																				
												<th rowspan="2" class="text-center verticalCenter bg-term-blue borderBlack" width="70">ประเภท<br>ความคุ้มครอง</th>							
												<th rowspan="2" class="text-center verticalCenter bg-term-blue borderBlack" width="30"></th>
												<th colspan="2" class="text-center verticalCenter bg-term-blue borderBlack" width="140">ทุนชีวิตอ้างอิง (SA Life)</th>
												<th colspan="3" class="text-center verticalCenter bg-term-blue borderBlack" width="190">จำนวนเงินเอาประกันภัย</th>
												<th colspan="2" class="text-center verticalCenter bg-term-blue borderBlack" width="80">จำนวนเงินเอาประกันภัยขั้นต่ำ</th>
											</tr>
											<tr>
												<th class="text-center borderBlack" width="70">ตั้งแต่</th>
												<th class="text-center borderBlack" width="70">ถึง</th>
												<th class="text-center borderBlack" width="70">จำนวน</th>
												<th class="text-center borderBlack" width="70">หน่วย</th>
												<th class="text-center borderBlack" width="50">ของ</th>
												<th class="text-center borderBlack" width="10%">(บาท)</th>
												<th class="text-center borderBlack" width="16%">ของ</th>
											</tr>
										 </thead>
										 	<tbody>
										 	</tbody>				
									  </table>
									</div>									
								</div>						
							</div>
							
							<!-- YRT -->
							<div class="row displayNone" id="row_YRTPlan">
								<div class="col-sm-12 style_col_float_margin">
									<div class="col-sm-2 style_col_topic">
										<label>SA Package</label>
									</div>
									<div class="col-sm-10 style_table1 content_scroll" id="div_tbl_YRTPLan">		
									</div>									
								</div>						
							</div>					
							
							<div class="row">
								<div class="col-sm-12 style_col_float_margin">
									<div class="col-sm-2 style_col_topic">
										<label>จำนวนเงินเอาประกันภัยสูงสุด (ต่อแบบ)</label>
									</div>
									<div class="col-sm-9 panel panel-default panel_style1" id="panel_max_amount_insureCL">
										<div class="col-sm-12 padding_all1">
											<div class="col-sm-3">
											<input type="radio" name="rd_max_amount_insure_CL[]" id="rd_max_amount_insure_CL1" value="คนเดียว" onclick="chk_max_amount_insure(1)" checked><label for="rd_max_amount_insure_CL1" class="label_input2">คนเดียว</label>
											</div>
											<div class="col-sm-3">
											<input type="radio" name="rd_max_amount_insure_CL[]" id="rd_max_amount_insure_CL2" value="กู้ร่วม" onclick="chk_max_amount_insure(2)"><label for="rd_max_amount_insure_CL2" class="label_input2">กู้ร่วม</label>
											</div>
										</div>
										
										<div class="col-sm-12 style_table2">
											<table class="table table-bordered" style="width:50%;" id="tbl_insure_alone">
												<thead>
													<tr>
														<th colspan="3" class="text-center bg-term-blue verticalCenter" width="250">จำนวนเงินเอาประกันภัย</th>
													</tr>
													<tr>
														<th class="text-center bg-term-blue verticalCenter" width="80">จำนวน</th>																				
														<th class="text-center verticalCenter bg-term-blue" width="100">หน่วย</th>
														<th class="text-center verticalCenter bg-term-blue" width="80">ของ</th>								
													</tr>
												</thead>
												<tbody>
													<tr>
														<td class="verticalCenter text-right"><input type="text" id="amount_insure_alone_CL" class="autoComma form-control text-right width70px" value="0.00" data-v-min="0.00" data-v-max="100.00"></td>						
														<td class="text-center"><select class="form-control sl-unit" id="amount_insure_alone_unit_CL"><option value="NONE">None</option></select></td>	
														<td class="text-center"><select class="form-control sl-factor" id="amount_insure_alone_factor_CL"><option value="NONE">None</option></select></td>																								
													</tr>																												
												</tbody>							
											</table>
											
											<div class="overflow_auto"  id="tbl_insure_many">
												<table class="table table-bordered" id="tbl_insure_together" style="width:1000px">
													<thead>
														<tr>
															<th rowspan="2" class="bg-term-blue" width="40"></th>
															<th colspan="2" class="text-center bg-term-blue verticalCenter" width="150">จำนวนเงินกู้ (บาท)</th>
															<th colspan="3" class="text-center bg-term-blue verticalCenter" width="210">สูงสุด (ต่อคน)</th>
															<th colspan="3" class="text-center bg-term-blue verticalCenter" width="210">สูงสุด (รวมทุกคน)</th>
														</tr>
														<tr>
															<th class="text-center bg-term-blue verticalCenter" width="75">ตั้งแต่</th>	
															<th class="text-center bg-term-blue verticalCenter" width="75">ถึง</th>	
															<th class="text-center bg-term-blue verticalCenter" width="80">จำนวน</th>																				
															<th class="text-center verticalCenter bg-term-blue" width="80">หน่วย</th>
															<th class="text-center verticalCenter bg-term-blue" width="50">ของ</th>	
															<th class="text-center bg-term-blue verticalCenter" width="80">จำนวน</th>																				
															<th class="text-center verticalCenter bg-term-blue" width="80">หน่วย</th>
															<th class="text-center verticalCenter bg-term-blue" width="50">ของ</th>							
														</tr>
													</thead>
													<tbody>
																																								
													</tbody>							
												</table>
											</div>
																					
												<div class="col-md-4" style="padding:15px 0 15px 0;" id="btn_insure_many">
													<div class="col-md-6">
														<button class="btn btn-primary" onclick="addInsure_manyNew_CL();">&nbsp;&nbsp;&nbsp;เพิ่ม&nbsp;&nbsp;&nbsp;</button>
													</div>
													<div class="col-md-6">
														<button class="btn btn-primary" onclick="confirmDeleteInsure_many_CL();">&nbsp;&nbsp;&nbsp;ลบ&nbsp;&nbsp;&nbsp; </button>
													</div>
												</div>
												
										</div>																				
									</div>
									
									<!-- panel YRT -->
									<div class="col-sm-9 panel panel-default panel_style1" id="panel_max_amount_insureYRT">
										<div class="col-sm-12 padding_all1">
											<div class="col-sm-4">
											<input type="checkbox" name="ch_max_amount_insure_YRT[]" id="ch_max_amount_insure_YRT1" value="ตามความคุ้มครอง"><label for="ch_max_amount_insure_YRT1" class="label_input2">ตามความคุ้มครอง</label>
											</div>									
										</div>
										
										<div class="col-sm-12 style_table2 displayNone" id="div_max_amount_insure_YRT">
											<table class="table table-bordered" style="width:50%;" id="tbl_max_amount_insure_YRT">
												<thead>
													<tr>
														<th class="text-center bg-term-blue verticalCenter" width="50">เลือก</th>
														<th class="text-center bg-term-blue verticalCenter" width="80">ประเภทความคุ้มครอง</th>																				
														<th colspan="2" class="text-center verticalCenter bg-term-blue" width="100">จำนวนเงินสูงสุด<br>(บาท)</th>							
													</tr>
												</thead>
												<tbody>
													<tr id="tbody_max_coverageYRT1">
														<td id="td_amount_covYRT1" class="verticalCenter text-center"><input id="imgOK_amount_covYRT1" type="checkbox" value="DTPD" onclick="amount_coverageYRT(1);"></td>
														<td class="verticalCenter text-center font-term-purple font-bold">DTPD</td>						
														<td class="verticalCenter"><input type="text" id="max_amount_cov1_YRT" class="auto form-control margin-padding0 text-right" data-v-min="0" data-v-max="9999999999" value="" disabled></td>																									
													</tr>
													<tr id="tbody_max_coverageYRT2">
														<td id="td_amount_covYRT2" class="verticalCenter text-center"><input id="imgOK_amount_covYRT2" type="checkbox" value="ADD" onclick="amount_coverageYRT(2);"></td>
														<td class="verticalCenter text-center font-term-green font-bold">ADD</td>						
														<td class="verticalCenter"><input type="text" id="max_amount_cov2_YRT" class="auto form-control margin-padding0 text-right" data-v-min="0" data-v-max="9999999999" value="" disabled></td>																									
													</tr>
													<tr id="tbody_max_coverageYRT3">
														<td id="td_amount_covYRT3" class="verticalCenter text-center"><input id="imgOK_amount_covYRT3" type="checkbox" value="TD" onclick="amount_coverageYRT(3);"></td>
														<td class="verticalCenter text-center font-term-green font-bold">TD</td>						
														<td class="verticalCenter"><input type="text" id="max_amount_cov3_YRT" class="auto form-control margin-padding0 text-right" data-v-min="0" data-v-max="9999999999" value="" disabled></td>																									
													</tr>
													<tr id="tbody_max_coverageYRT4">
														<td id="td_amount_covYRT4" class="verticalCenter text-center"><input id="imgOK_amount_covYRT4" type="checkbox" value="AME" onclick="amount_coverageYRT(4);"></td>
														<td class="verticalCenter text-center font-term-green font-bold">AME</td>						
														<td class="verticalCenter"><input type="text" id="max_amount_cov4_YRT" class="auto form-control margin-padding0 text-right" data-v-min="0" data-v-max="9999999999" value="" disabled></td>																																				
													</tr>										
												</tbody>							
											</table>
										</div>	
										
										<div class="col-sm-12 padding_all1">
											<div class="col-sm-4 style_col_width29">
											<input type="checkbox" name="ch_max_amount_insure_YRT[]" id="ch_max_amount_insure_YRT2" value="ตามจำนวนกรมธรรม์"><label for="ch_max_amount_insure_YRT2" class="label_input2">ตามจำนวนกรมธรรม์</label>
											</div>
											<div class="col-xs-2 paddingleft_style1 margintop_diff10px">
												<input type="text" class="auto form-control text-right" id="amount_numofpolicy" maxlength="5" disabled="" data-v-min="0" data-v-max="99">
											</div>	
											<div class="col-sm-2 paddingtop_8px paddingleft0 margintop_diff10px"><strong>(คำขอ)</strong></div>								
										</div>																		
									</div>
								</div>						
							</div>
							
							<div class="row">
								<div class="col-sm-12 style_col_float_margin">
									<div class="col-sm-2 style_col_topic">
										<label>จำนวนเงินเอาประกันภัยสูงสุด (ต่อราย)</label>
									</div>
									<div class="col-sm-5">
									<table class="table table-bordered" id="tbl_insure_single" style="width:100%;">
										<thead>
											<tr>
												<th class="text-center bg-term-blue verticalCenter" width="50">เลือก</th>
												<th class="text-center bg-term-blue verticalCenter" width="80">ประเภทความคุ้มครอง</th>																				
												<th colspan="2" class="text-center verticalCenter bg-term-blue" width="100">จำนวนเงินสูงสุด<br>(บาท)</th>							
											</tr>
										</thead>
										<tbody>
											<!-- <tr id="tbody_max_amount_insure1">
												<td id="imgOK_max_amount_insure1_CL" class="verticalCenter text-center"><input id="mode_max_amount_insure1_CL" type="checkbox" value="DTPD"></td>
												<td class="verticalCenter text-center font-term-purple font-bold">DTPD</td>						
												<td class="verticalCenter"><input type="text" id="max_amount_insure1_CL" class="form-control margin-padding0 text-right" value="150,000,000"></td>																									
											</tr>
											<tr id="tbody_max_amount_insure2">
												<td id="imgOK_max_amount_insure2_CL" class="verticalCenter text-center"><input id="mode_max_amount_insure2_CL" type="checkbox" value="ADD"></td>
												<td class="verticalCenter text-center font-term-green font-bold">ADD</td>						
												<td class="verticalCenter"><input type="text" id="max_amount_insure2_CL" class="form-control margin-padding0 text-right" value="150,000,000"></td>																									
											</tr>
											<tr id="tbody_max_amount_insure3">
												<td id="imgOK_max_amount_insure3_CL" class="verticalCenter text-center"><input id="mode_max_amount_insure3_CL" type="checkbox" value="TD"></td>
												<td class="verticalCenter text-center font-term-green font-bold">TD</td>						
												<td class="verticalCenter"><input type="text" id="max_amount_insure3_CL" class="form-control margin-padding0 text-right" value="20,000,000"></td>																									
											</tr>
											<tr id="tbody_max_amount_insure4">
												<td id="imgOK_max_amount_insure4_CL" class="verticalCenter text-center"><input id="mode_max_amount_insure4_CL" type="checkbox" value="AME"></td>
												<td class="verticalCenter text-center font-term-green font-bold">AME</td>						
												<td class="verticalCenter"><input type="text" id="max_amount_insure4_CL" class="form-control margin-padding0 text-right" value="100,000"></td>																									
											</tr>			 -->							
										</tbody>							
									</table>
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
											<input type="radio" name="rd_health_check_CL[]" id="rd_health_check_CL1" value="ตรวจ" onclick="chk_health_check(1)"><label for="rd_health_check_CL1" class="label_input2">ตรวจ</label>
											</div>
											<div class="col-sm-3">
											<input type="radio" name="rd_health_check_CL[]" id="rd_health_check_CL2" value="ไม่ตรวจ" onclick="chk_health_check(2)" checked><label for="rd_health_check_CL2" class="label_input2">ไม่ตรวจ</label>
											</div>
										</div>
										
										<div id="div_tbl_health_check_CL" class="col-sm-12 style_table2">
											<table class="table table-bordered" style="width:100%;display:none" id="tbl_health_check_CL" >
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
										<label>การรวมเงินเอาประกันภัยเพื่อตรวจสุขภาพ<font id="validate_input12_cl" style="color:red; display:none">*</font></label>
									</div>
									<div class="col-sm-9 panel panel-default panel_style1">
										<div class="col-sm-12 padding_all1">
											<div class="col-sm-3">
											<input type="radio" name="rd_health_money_CL[]" id="rd_health_money_CL1" value="รวม" onclick="chk_health_insurance(1);" ><label for="rd_health_money_CL1" class="label_input2">รวม</label>
											</div>
											<div class="col-sm-3">
											<input type="radio" name="rd_health_money_CL[]" id="rd_health_money_CL2" value="ไม่รวม" onclick="chk_health_insurance(2);" checked><label for="rd_health_money_CL2" class="label_input2">ไม่รวม</label>
											</div>
										</div>
										
										<div class="col-sm-12 style_table2 ">
											<div id="div_health_insurance_CL" class="content_scroll">
												<table class="table table-bordered" style="width:1000px;" id="tbl_health_insurance_CL" hidden>
													<thead>													
														<tr>
															<th class="text-center bg-term-blue verticalCenter" width="30"></th>																				
															<th class="text-center verticalCenter bg-term-blue" width="100">ประเภทสัญญา</th>
															<th class="text-center verticalCenter bg-term-blue" width="100">ประเภทกรมธรรม์</th>
															<th class="text-center verticalCenter bg-term-blue" width="100">ประเภทผลิตภัณฑ์</th>
															<th class="text-center verticalCenter bg-term-blue" width="100">Underwriting Type</th>
															<th class="text-center verticalCenter bg-term-blue" width="100">Senior</th>
															<!-- <th class="text-center verticalCenter bg-term-blue" width="100">Distribution Channel</th> -->
															<th class="text-center verticalCenter bg-term-blue" width="100">Sale Channel</th>
															<th class="text-center verticalCenter bg-term-blue" width="100">Partner</th>								
														</tr>
													</thead>
													<tbody>
														<tr id="tr_healthInsurance1">
															<td id="imgOK_healthInsurance1" class="text-center vertical-middle" style="background-color:gray;"></td>
															<!-- <td id="imgOK_oldinsurance1" class="text-center vertical-middle" onclick="imgCheckbox_oldinsurance_CL(1);">
																<i class="glyphicon glyphicon-edit"></i>
															</td> -->						
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_contractType_healthInsurance1" onchange="ddHeath1_select(this.id);">
																</select>
															</td>
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_policyType_healthInsurance1" onchange="ddHeath2_select(this.id);">
																	<option selected="">---กรุณาเลือก---</option>
																</select>
															</td>
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_productType_healthInsurance1">
																	<option selected="">---กรุณาเลือก---</option>
																</select>
															</td>
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_Reinsurance_healthInsurance1">
																	<!-- <option value="NONE" selected="">None</option> -->
																</select>
															</td>
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_senior_healthInsurance1">
																	<!-- <option value="NONE" selected="">None</option> -->
																</select>
															</td>
															<!-- <td class="verticalCenter text-center">
																<select class="form-control" id="sl_fillingChannel_healthInsurance1">
																	<option value="NONE" selected="">All</option>
																</select>
															</td> -->
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_saleChannel_healthInsurance1" onchange="filter_partner(this)">
																	<option data-id="0" value="NONE" selected="">All</option>
																</select>
															</td>
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_partner_healthInsurance1">
																	<option data-id="0" value="NONE" selected="">All</option>
																</select>
															</td>																																
														</tr>																																									
													</tbody>							
												</table>	
											</div>
											<div class="col-md-4" style="padding: 5px 0 15px 0;" id="btn_health_insurance" hidden>
													<div class="col-md-6">
														<button class="btn btn-primary" onclick="addhealthInsurance_CL();">&nbsp;&nbsp;&nbsp;เพิ่ม&nbsp;&nbsp;&nbsp;</button>
													</div>
													<div class="col-md-6">
														<button class="btn btn-primary" onclick="confirmDeletehealthInsurance_CL();">&nbsp;&nbsp;&nbsp;ลบ&nbsp;&nbsp;&nbsp; </button>
													</div>
											</div>																															
										</div>																																								
									</div>
								</div>						
							</div>
							
							<div class="row">
								<div class="col-sm-12 style_col_float_margin">
									<div class="col-sm-2 style_col_topic">
										<label>การแสดงรายการ กธ. เดิม<font id="validate_input13_cl" style="color:red; display:none">*</font></label>
									</div>								
									<div class="col-sm-9 panel panel-default panel_style1">
										<div class="col-sm-12 padding_all1">
											<div class="col-sm-3">
											<input type="radio" name="rd_old_list_CL[]" id="rd_old_list_CL1" value="แสดง" onclick="chk_old_insurance(1);"><label for="rd_old_list_CL1" class="label_input2">แสดง</label>
											</div>
											<div class="col-sm-3">
											<input type="radio" name="rd_old_list_CL[]" id="rd_old_list_CL2" value="ไม่แสดง" onclick="chk_old_insurance(2);" checked><label for="rd_old_list_CL2" class="label_input2">ไม่แสดง</label>
											</div>
										</div>	
										
										<div class="col-sm-12 style_table2">
											<div id="div_old_insurance_CL" class="content_scroll">
												<table class="table table-bordered" style="width:1000px;display:none" id="tbl_old_insurance_CL">
													<thead>													
														<tr>
															<th class="text-center bg-term-blue verticalCenter" width="30"></th>																				
															<th class="text-center verticalCenter bg-term-blue" width="100">ประเภทสัญญา</th>
															<th class="text-center verticalCenter bg-term-blue" width="100">ประเภทกรมธรรม์</th>
															<th class="text-center verticalCenter bg-term-blue" width="100">ประเภทผลิตภัณฑ์</th>
															<th class="text-center verticalCenter bg-term-blue" width="100">Underwriting Type</th>
															<th class="text-center verticalCenter bg-term-blue" width="100">Senior</th>
															<!-- <th class="text-center verticalCenter bg-term-blue" width="100">Distribution Channel</th> -->
															<th class="text-center verticalCenter bg-term-blue" width="100">Sale Channel</th>
															<th class="text-center verticalCenter bg-term-blue" width="100">Partner</th>								
														</tr>
													</thead>
													<tbody>
														<tr id="tr_oldinsurance1">
															<td id="imgOK_oldinsurance1" class="text-center vertical-middle" style="background-color:gray;"></td>
															<!-- <td id="imgOK_oldinsurance1" class="text-center vertical-middle" onclick="imgCheckbox_oldinsurance_CL(1);">
																<i class="glyphicon glyphicon-edit"></i>
															</td> -->						
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_contractType_oldinsurance1" onchange="ddHeath1_select(this.id);">
																	<!-- <option selected="">---กรุณาเลือก---</option> -->
																</select>
															</td>
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_policyType_oldinsurance1" onchange="ddHeath2_select(this.id);">
																	<option selected="">---กรุณาเลือก---</option>
																	<!-- <option>Credit life</option> -->
																</select>
															</td>
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_productType_oldinsurance1">
																	<option selected="">---กรุณาเลือก---</option>
																	<!-- <option>MLTA</option> -->
																</select>
															</td>
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_Reinsurance_oldinsurance1">
																	<!-- <option value="NONE" selected="">None</option> -->
																</select>
															</td>
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_senior_oldinsurance1">
																	<!-- <option value="NONE" selected="">None</option> -->
																</select>
															</td>
															<!-- <td class="verticalCenter text-center">
																<select class="form-control" id="sl_fillingChannel_oldinsurance1">
																	<option value="NONE" selected="">All</option>
																</select>
															</td> -->
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_saleChannel_oldinsurance1" onchange="filter_partner(this)">
																	<option data-id="0" value="NONE" selected="">All</option>
																</select>
															</td>
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_partner_oldinsurance1">
																	<option data-id="0" value="NONE" selected="">All</option>
																</select>
															</td>																																
														</tr>																																									
													</tbody>							
												</table>	
											</div>
											<div class="col-md-4" style="padding: 5px 0 15px 0;" id="btn_old_insurance" hidden>
													<div class="col-md-6">
														<button class="btn btn-primary" onclick="addOldInsurance_CL();">&nbsp;&nbsp;&nbsp;เพิ่ม&nbsp;&nbsp;&nbsp;</button>
													</div>
													<div class="col-md-6">
														<button class="btn btn-primary" onclick="confirmDeleteOldInsurance_CL();">&nbsp;&nbsp;&nbsp;ลบ&nbsp;&nbsp;&nbsp; </button>
													</div>
											</div>																															
										</div>																				
									</div>									
								</div>						
							</div>
							
							<div class="row">
								<div class="col-sm-12 style_col_float_margin">
									<div class="col-sm-2 style_col_topic">
										<label>การรวมทุนคุ้มครอง (อำนาจการพิจารณาของ UW)<font id="validate_input14_cl" style="color:red; display:none">*</font></label>
									</div>									
									<div class="col-sm-9 panel panel-default panel_style1">
										<div class="col-sm-12 padding_all1">
											<div class="col-sm-3">
											<input type="radio" name="rd_capital_CL[]" id="rd_capital_CL1" value="รวม" onclick="chk_uw_consider(1);"><label for="rd_capital_CL1" class="label_input2">รวม</label>
											</div>
											<div class="col-sm-3">
											<input type="radio" name="rd_capital_CL[]" id="rd_capital_CL2" value="ไม่รวม" onclick="chk_uw_consider(2);" checked ><label for="rd_capital_CL2" class="label_input2">ไม่รวม</label>
											</div>
										</div>	
										
										<div class="col-sm-12 style_table2">
										<div id="div_UW_consider_CL" class="content_scroll">
											<table class="table table-bordered" style="width:1000px;display:none" id="tbl_UW_consider_CL">
													<thead>													
														<tr>
															<th class="text-center bg-term-blue verticalCenter" width="30"></th>																				
															<th class="text-center verticalCenter bg-term-blue" width="100">ประเภทสัญญา</th>
															<th class="text-center verticalCenter bg-term-blue" width="100">ประเภทกรมธรรม์</th>
															<th class="text-center verticalCenter bg-term-blue" width="100">ประเภทผลิตภัณฑ์</th>
															<th class="text-center verticalCenter bg-term-blue" width="100">Underwriting Type</th>
															<th class="text-center verticalCenter bg-term-blue" width="100">Senior</th>
														<!-- 	<th class="text-center verticalCenter bg-term-blue" width="100">Distribution Channel</th> -->
															<th class="text-center verticalCenter bg-term-blue" width="100">Sale Channel</th>
															<th class="text-center verticalCenter bg-term-blue" width="100">Partner</th>								
														</tr>
													</thead>
													<tbody>
														<tr id="tr_UWConsider1">
															<td id="imgOK_UWConsider1" class="text-center vertical-middle" style="background-color: gray;"></td>
															<!-- <td id="imgOK_UWConsider1" class="text-center vertical-middle" onclick="imgCheckbox_UWConsider_CL(1);">
																<i class="glyphicon glyphicon-edit"></i>
															</td> -->						
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_contractType_UWConsider1" onchange="ddHeath1_select(this.id);">
																</select>
															</td>
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_policyType_UWConsider1" onchange="ddHeath2_select(this.id);">
																	<option selected="">---กรุณาเลือก---</option>
																</select>
															</td>
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_productType_UWConsider1">
																	<option selected="">---กรุณาเลือก---</option>
																</select>
															</td>
																<td class="verticalCenter text-center">
																<select class="form-control" id="sl_Reinsurance_UWConsider1">
																	<!-- <option value="NONE" selected="">None</option> -->
																</select>
															</td>
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_senior_UWConsider1">
																	<!-- <option value="NONE" selected="">None</option> -->
																</select>
															</td>
															<!-- <td class="verticalCenter text-center">
																<select class="form-control" id="sl_fillingChannel_UWConsider1">
																	<option value="NONE" selected="">All</option>
																</select>
															</td> -->
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_saleChannel_UWConsider1" onchange="filter_partner(this)">
																	<option data-id="0" value="NONE" selected="">All</option>
																</select>
															</td>
															<td class="verticalCenter text-center">
																<select class="form-control" id="sl_partner_UWConsider1">
																	<option data-id="0" value="NONE" selected="">All</option>
																</select>
															</td>
																																				
														</tr>																																									
													</tbody>							
												</table>	
											</div>
											<div class="col-md-4" style="padding: 5px 0 15px 0;" id="btn_UW_Consider" hidden>
													<div class="col-md-6">
														<button class="btn btn-primary" onclick="addUWConsider_CL();">&nbsp;&nbsp;&nbsp;เพิ่ม&nbsp;&nbsp;&nbsp;</button>
													</div>
													<div class="col-md-6">
														<button class="btn btn-primary" onclick="confirmDeleteUWConsider_CL();">&nbsp;&nbsp;&nbsp;ลบ&nbsp;&nbsp;&nbsp; </button>
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
											<input type="radio" name="rd_increase_premium_CL[]" id="rd_increase_premium_CL1" value="รับ" onclick="chk_increase_premium(1)" checked><label for="rd_increase_premium_CL1" class="label_input2">รับ</label>
											</div>
											<div class="col-sm-3">
											<input type="radio" name="rd_increase_premium_CL[]" id="rd_increase_premium_CL2" value="ไม่รับ" onclick="chk_increase_premium(2)"><label for="rd_increase_premium_CL2" class="label_input2">ไม่รับ</label>
											</div>
										</div>
										
										<div class="col-sm-9 panel panel-default panel_style3" id="panel_increase_premium_yes_CL">
											<div id="div_chk_increase_premium" class="col-sm-12 padding_all1">
												<!-- <div class="col-sm-3 style_col_width20">
												<input type="checkbox" name="chk_increase_premium_yes_CL[]" id="chk_increase_premium_yes_CL1" value="เพิ่มเบี้ย" checked><label for="chk_increase_premium_yes_CL1" class="label_input2">เพิ่มเบี้ย</label>
												</div>
												<div class="col-sm-3 style_col_width20">
												<input type="checkbox" name="chk_increase_premium_yes_CL[]" id="chk_increase_premium_yes_CL2" value="ลดทุน" checked><label for="chk_increase_premium_yes_CL2" class="label_input2">ลดทุน</label>
												</div>
												<div class="col-sm-3 style_col_width20">
												<input type="checkbox" name="chk_increase_premium_yes_CL[]" id="chk_increase_premium_yes_CL3" value="ลดระยะ" checked><label for="chk_increase_premium_yes_CL3" class="label_input2">ลดระยะ</label>
												</div>
												<div class="col-sm-4">
												<input type="checkbox" name="chk_increase_premium_yes_CL[]" id="chk_increase_premium_yes_CL4" value="เปลี่ยนเป็น ADD Plan" checked><label for="chk_increase_premium_yes_CL4" class="label_input2">เปลี่ยนเป็น ADD Plan</label>
												</div> -->
											</div>																																							
										</div>
										
										<div class="col-sm-7"  id="div_increase_premium_CL">
											<table class="table table-bordered" style="width:100%; margin-top: 20px;" id="tbl_increase_premium_CL">
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
											
										<div class="col-sm-12" id="div_increaseCOOP_premium_CL" style="display:none;">
											<table class="table table-bordered" style="width:100%; margin-top: 20px;" id="tbl_increaseCOOP_premium_CL">
												<thead>
													<tr>
														<th width="70%" colspan="2" class="text-center bg-term-blue verticalCenter">สหกรณ์</th>
														<th width="30%" rowspan="2" class="text-center bg-term-blue verticalCenter">EM สูงสุด (%)</th>
													</tr>
													<tr>
														<th width="20%" class="text-center bg-term-blue verticalCenter">รหัสสหกรณ์</th>
														<th width="60%" class="text-center bg-term-blue verticalCenter">ชื่อ</th>
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
										<label>การซื้อสัญญาแนบท้ายควบ</label>
									</div>
									<div class="col-sm-9 panel panel-default panel_style2">
										<div class="col-sm-12 padding_all1">
											<div class="col-sm-6">
											<input type="radio" name="rd_buy_contract_CL[]" id="rd_buy_contract_CL1" value="ได้" checked><label for="rd_buy_contract_CL1" class="label_input2">ได้</label>
											</div>
											<div class="col-sm-6">
											<input type="radio" name="rd_buy_contract_CL[]" id="rd_buy_contract_CL2" value="ไม่ได้"><label for="rd_buy_contract_CL2" class="label_input2">ไม่ได้</label>
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
											<input type="radio" name="rd_buy_contract_period_CL[]" id="rd_buy_contract_period_CL1" value="รวม" checked><label for="rd_buy_contract_period_CL1" class="label_input2">รวม</label>
											</div>
											<div class="col-sm-6">
											<input type="radio" name="rd_buy_contract_period_CL[]" id="rd_buy_contract_period_CL2" value="ไม่รวม"><label for="rd_buy_contract_period_CL2" class="label_input2">ไม่รวม</label>
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
											<input type="checkbox" name="rd_approval_branch_CL[]" id="rd_approval_branch_CL1" value="NBI" checked><label for="rd_approval_branch_CL1" class="label_input2">NBI</label>
											</div>
											<div class="col-sm-6">
											<input type="checkbox" name="rd_approval_branch_CL[]" id="rd_approval_branch_CL2" value="UNW"><label for="rd_approval_branch_CL2" class="label_input2">สนญ.</label>
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
								<div class="col-sm-10 style_col_float_margin"><input id="chk_check_data_CL1" type="checkbox" value=""><label for="chk_check_data_CL1" class="label_input2">ตรวจสอบข้อมูลเคลม กธ. เดิม</label></div>										
							</div>
							<div class="row displayNone" id="panel_oldCov_CL">
								<div class="col-sm-12 panel panel-default panel_style7">
											<div class="col-sm-12 padding_all1">
												<div class="col-sm-6">
												<input type="radio" name="chk_Condition_oldCov[]" id="notCondition_oldCov" value="ไม่มีเงื่อนไข (ตรวจทุกรายการ)" checked><label for="notCondition_oldCov" class="label_input2">ไม่มีเงื่อนไข (ตรวจทุกรายการ)</label>
												</div>									
											</div>
	
											<div class="col-sm-12 padding_all7">
												<div class="col-sm-2">
												<input type="radio" name="chk_Condition_oldCov[]" id="haveCondition_oldCov" value="มีเงื่อนไข"><label for="haveCondition_oldCov" class="label_input2">มีเงื่อนไข</label>
												</div>
												<div class="col-sm-2 paddingleft_style1 margintop_diff10px">
													<select class="form-control" id="sl_haveCondition_oldCov" disabled>
														<option value="NONE">None</option>
													</select>
												</div>
												<div class="col-sm-2 paddingleft_style1 margintop_diff10px">
													<select class="form-control" id="sl_haveCondition_oldCov2" disabled>
														<option value="NONE">None</option>
													</select>
												</div>	
												<div class="col-sm-2 paddingleft_style1 margintop_diff10px">
													<select class="form-control" id="sl_haveCondition_oldCov3" disabled>
														<option value="NONE">None</option>
													</select>
												</div>
												<div class="col-sm-2 paddingleft_style1 margintop_diff10px">
													<select class="form-control" id="sl_haveCondition_oldCov4" disabled>
														<option value="NONE">None</option>
													</select>
												</div>
												<div class="col-sm-2 paddingleft_style1 margintop_diff10px">
													<select class="form-control" id="sl_haveCondition_oldCov5" disabled>
														<option value="NONE">None</option>
													</select>
												</div>								
											</div>
											<div class="col-sm-9 panel_style6 displayNone" id="panel_Condition_oldCov">
												<div id="standing_newSA_1_CL" class="col-sm-12 padding_all3 disabledAll">													
													<div class="col-sm-3 style_col_width20 paddingtop_6px">
														<label class="label_input2">New SA</label>														
													</div>
													<div class="col-sm-3 marginleft_style4">
														<select class="form-control" id="sl_NewSA_oldCov">
															<option value="NONE">None</option>
														</select>
													</div>	
													<div class="col-sm-3 marginleft_style5">
														<input type="text" id="amount_NewSA_oldCov" class="autoComma form-control text-right" value="0.00" data-v-min="0.00" data-v-max="999999999.99">
													</div>
													<!-- <div class="col-sm-1 marginleft_style4 paddingtop_6px">บาท</div> -->											
												</div>
												<!-- ทุนตรวจสุขภาพ -->
												<div id="standing_capitalHealth_1_CL" class="disabledAll">
													<!-- <div class="col-sm-12 padding_all4" style="padding-bottom: 0px;">
														<div class="col-sm-3 style_col_width20 paddingtop_6px">
															<label class="label_input2">ทุนตรวจสุขภาพ</label>	
														</div>
														<div class="col-sm-9 style_col_width81 marginleft_style4">
															<table class="table table-bordered" style="width:100%; margin-top: 20px;" id="tbl_capitalHealth_1_CL">
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
																	<tr id="tr_capitalHealth1_row1" data-id="1" data-parent="1" data-group="1">
																		<td class="text-center" id="imgOKcapitalHealth_1" onclick="imgCheckbox(this.id);"></td>
																		<td class="text-center"><input type="text" class="form-control format_date" id="appStart_date_capitalHealth1" onblur="checkappStartBlock1_CL (this.id);" placeholder="dd/mm/yyyy" onkeyup="keyup_validateDate(event,this.id);"
									      									onclick="appStart_date(this.id);"  maxlength="10"></td>	
																		<td class="text-center"><input type="text" class="form-control format_date" id="appTo_date_capitalHealth1" onblur="checkappStartBlock1_CL (this.id);" placeholder="dd/mm/yyyy" onkeyup="keyup_validateDate(event,this.id);""
									 										 onclick="appTo_date(this.id);" maxlength="10"></td>	
																		<td class="text-right"><i class="glyphicon glyphicon-plus icon-blue-circle" id="number_capitalHealth1" onclick="addRowChild_capitalHealth(this.id);"></i></td>	
																		<td class="text-right"><input type="number" id="capitalHealth_ageStart1" class="form-control text-right" onblur="clear_rowCoop(this.id);"/></td>	
																		<td class="text-right"><input type="number" id="capitalHealth_ageEnd1" class="form-control text-right" onblur="clear_rowCoop(this.id);" onchange="validate_ageTotalCapital(this.id,1);"/></td>	
																		<td class="text-center"><input type="text" id="capitalHealth_capital1" class="autoComma form-control text-right"/></td>	
																	</tr>
																</tbody>
															</table>
														</div>
													</div>
													<div class="col-sm-12 padding_all4">
														<div class="col-sm-3 style_col_width20 paddingtop_6px"></div>
														<div class="col-md-2">
															<input type="button" class="btn btn-primary width80px" value="เพิ่ม" onclick="addRow_capitalHealth();"/>
														</div>
														<div class="col-md-2 marginleft_style5">
															<input type="button" class="btn btn-primary width80px" value="ลบ" onclick="deleteRow_capitalHealth();"/>
														</div>
													</div> -->
												</div>
												<!-- ซื้อคู่กับแบบ -->
												<div id="standing_buyWith1_CL" class="disabledAll">
													<div class="col-sm-12 padding_all4" style="padding-bottom: 0px;">
														<div class="col-sm-3 style_col_width20 paddingtop_6px">
															<label class="label_input2">ซื้อคู่กับแบบ</label>	
														</div>
														<div class="col-sm-4 marginleft_style4">
															<table class="table table-bordered" style="width:100%; margin-top: 20px;" id="tbl_buyWith1_CL">
																<thead>		
																	<tr>
																		<th width="20%" class="text-center bg-term-blue verticalCenter"></th>
																		<th width="80%" class="text-center bg-term-blue verticalCenter">รหัสแบบ</th>
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
															<input type="button" class="btn btn-primary width80px" value="เพิ่ม" onclick="open_modal_buyWith_key(1);">
														</div>
														<div class="col-md-2 marginleft_style5">
															<input type="button" class="btn btn-primary width80px" value="ลบ" onclick="deleteRow_buyWith_key();">
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
								<div class="col-sm-10 style_col_float_margin"><input id="chk_check_data_CL2" type="checkbox" value=""><label for="chk_check_data_CL2" class="label_input2">ตรวจสอบข้อมูล IC</label></div>										
							</div>
							<div class="row displayNone" id="panel_IC_CL">
								<div class="col-sm-9 panel panel-default panel_style7">
											<div class="col-sm-12 padding_all1">
												<div class="col-sm-6">
												<input type="radio" name="chk_Condition_IC[]" id="notCondition_IC" value="ไม่มีเงื่อนไข (ตรวจทุกรายการ)" checked><label for="notCondition_IC" class="label_input2">ไม่มีเงื่อนไข (ตรวจทุกรายการ)</label>
												</div>									
											</div>
	
												<div class="col-sm-12 padding_all7">
												<div class="col-sm-2">
												<input type="radio" name="chk_Condition_IC[]" id="haveCondition_IC" value="มีเงื่อนไข"><label for="haveCondition_IC" class="label_input2">มีเงื่อนไข</label>
												</div>
												<div class="col-sm-2 paddingleft_style1 margintop_diff10px">
													<select class="form-control" id="sl_haveCondition_IC" disabled>
														<option value="NONE">None</option>
													</select>
												</div>
												<div class="col-sm-2 paddingleft_style1 margintop_diff10px">
													<select class="form-control" id="sl_haveCondition_IC2" disabled>
														<option value="NONE">None</option>
													</select>
												</div>	
												<div class="col-sm-2 paddingleft_style1 margintop_diff10px">
													<select class="form-control" id="sl_haveCondition_IC3" disabled>
														<option value="NONE">None</option>
													</select>
												</div>
												<div class="col-sm-2 paddingleft_style1 margintop_diff10px">
													<select class="form-control" id="sl_haveCondition_IC4" disabled>
														<option value="NONE">None</option>
													</select>
												</div>
												<div class="col-sm-2 paddingleft_style1 margintop_diff10px">
													<select class="form-control" id="sl_haveCondition_IC5" disabled>
														<option value="NONE">None</option>
													</select>
												</div>								
											</div>
											
											<div class="col-sm-9 panel_style6 displayNone" id="panel_Condition_IC">
												<div id="standing_newSA_2_CL" class="col-sm-12 padding_all3 disabledAll">													
													<div class="col-sm-3 style_col_width20 paddingtop_6px">
														<label class="label_input2">New SA</label>														
													</div>
													<div class="col-sm-3 marginleft_style4">
														<select class="form-control" id="sl_NewSA_IC">
															<option value="NONE">None</option>
														</select>
													</div>	
													<div class="col-sm-3 marginleft_style5">
														<input type="text" id="amount_NewSA_IC" class="autoComma form-control text-right" value="0.00" data-v-min="0.00" data-v-max="999999999.99">
													</div>
												</div>
												<!-- ทุนตรวจสุขภาพ -->
												<div id="standing_capitalHealth_2_CL" class="disabledAll">
													<!-- <div class="col-sm-12 padding_all4" style="padding-bottom: 0px;">
														<div class="col-sm-3 style_col_width20 paddingtop_6px">
															<label class="label_input2">ทุนตรวจสุขภาพ</label>	
														</div>
														<div class="col-sm-9 style_col_width81 marginleft_style4">
															<table class="table table-bordered" style="width:100%; margin-top: 20px;" id="tbl_capitalHealth_2_CL">
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
																	<tr id="tr_capitalHealth2_row1" data-id="1" data-parent="1" data-group="1">
																		<td class="text-center" id="imgOKcapitalHealthIC_1" onclick="imgCheckbox(this.id);"></td>
																		<td class="text-center"><input type="text" class="form-control format_date" id="appStart_date_capitalHealthIC1" onblur="checkappStartBlock2_CL (this.id);" placeholder="dd/mm/yyyy" onkeyup="keyup_validateDate(event,this.id);"
									      									onclick="appStart_date(this.id);"  maxlength="10"></td>	
																		<td class="text-center"><input type="text" class="form-control format_date" id="appTo_date_capitalHealthIC1" onblur="checkappStartBlock2_CL (this.id);" placeholder="dd/mm/yyyy" onkeyup="keyup_validateDate(event,this.id);"
									 										 onclick="appTo_date(this.id);" maxlength="10"></td>	
																		<td class="text-right"><i class="glyphicon glyphicon-plus icon-blue-circle" id="number_capitalHealthIC1" onclick="addRowChild_capitalHealth2(this.id);"></i></td>	
																		<td class="text-right"><input type="number" id="capitalHealthIC_ageStart1" class="form-control text-right" onblur="clear_rowCoop(this.id);"/></td>	
																		<td class="text-right"><input type="number" id="capitalHealthIC_ageEnd1" class="form-control text-right" onblur="clear_rowCoop(this.id);" onchange="validate_ageTotalCapital(this.id,2);"/></td>	
																		<td class="text-center"><input type="text" id="capitalHealthIC_capital1" class="autoComma form-control text-right"/></td>	
																	</tr>
																</tbody>
															</table>
														</div>
													</div>
													
													<div class="col-sm-12 padding_all4">
														<div class="col-sm-3 style_col_width20 paddingtop_6px"></div>
														<div class="col-md-2">
															<input type="button" class="btn btn-primary width80px" value="เพิ่ม" onclick="addRow_capitalHealth2();">
														</div>
														<div class="col-md-2 marginleft_style5">
															<input type="button" class="btn btn-primary width80px" value="ลบ" onclick="deleteRow_capitalHealth2();">
														</div>
													</div> -->
												</div>
												
												<!-- ซื้อคู่กับแบบ -->
												<div id="standing_buyWith2_CL" class="disabledAll">
													<div class="col-sm-12 padding_all4" style="padding-bottom: 0px;">
														<div class="col-sm-3 style_col_width20 paddingtop_6px">
															<label class="label_input2">ซื้อคู่กับแบบ</label>	
														</div>
														<div class="col-sm-4 marginleft_style4">
															<table class="table table-bordered" style="width:100%; margin-top: 20px;" id="tbl_buyWith2_CL">
																<thead>		
																	<tr>
																		<th width="20%" class="text-center bg-term-blue verticalCenter"></th>
																		<th width="80%" class="text-center bg-term-blue verticalCenter">รหัสแบบ</th>
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
															<input type="button" class="btn btn-primary width80px" value="เพิ่ม" onclick="open_modal_buyWith_key(2);">
														</div>
														<div class="col-md-2 marginleft_style5">
															<input type="button" class="btn btn-primary width80px" value="ลบ" onclick="deleteRow_buyWith_key2();">
														</div>
													</div>
												</div>
										</div>																	
								</div>
							</div>
							
							<!-- ตรวจสอบ กธ. เดิม รับแบบ Sub -->
							<div class="row">
								<div class="col-sm-10 style_col_float_margin"><input id="chk_check_data_CL3" type="checkbox" value=""><label for="chk_check_data_CL3" class="label_input2">ตรวจสอบ กธ. เดิม รับแบบ Sub</label></div>										
							</div>
							<div class="row displayNone" id="panel_SubCov_CL">
								<div class="col-sm-9 panel panel-default panel_style7">
											<div class="col-sm-12 padding_all1">
												<div class="col-sm-6">
												<input type="radio" name="chk_Condition_SubCov[]" id="notCondition_SubCov" value="ไม่มีเงื่อนไข (ตรวจทุกรายการ)" checked><label for="notCondition_SubCov" class="label_input2">ไม่มีเงื่อนไข (ตรวจทุกรายการ)</label>
												</div>									
											</div>
											<div class="col-sm-12 padding_all7">
												<div class="col-sm-2">
												<input type="radio" name="chk_Condition_SubCov[]" id="haveCondition_SubCov" value="มีเงื่อนไข"><label for="haveCondition_SubCov" class="label_input2">มีเงื่อนไข</label>
												</div>
												<div class="col-sm-2 paddingleft_style1 margintop_diff10px">
													<select class="form-control" id="sl_haveCondition_SubCov" disabled>
														<option value="NONE">None</option>
													</select>
												</div>
												<div class="col-sm-2 paddingleft_style1 margintop_diff10px">
													<select class="form-control" id="sl_haveCondition_SubCov2" disabled>
														<option value="NONE">None</option>
													</select>
												</div>	
												<div class="col-sm-2 paddingleft_style1 margintop_diff10px">
													<select class="form-control" id="sl_haveCondition_SubCov3" disabled>
														<option value="NONE">None</option>
													</select>
												</div>
												<div class="col-sm-2 paddingleft_style1 margintop_diff10px">
													<select class="form-control" id="sl_haveCondition_SubCov4" disabled>
														<option value="NONE">None</option>
													</select>
												</div>
												<div class="col-sm-2 paddingleft_style1 margintop_diff10px">
													<select class="form-control" id="sl_haveCondition_SubCov5" disabled>
														<option value="NONE">None</option>
													</select>
												</div>								
											</div>
											<div class="col-sm-9 panel_style6 displayNone" id="panel_Condition_SubCov">
												<div id="standing_newSA_3_CL" class="col-sm-12 padding_all3 disabledAll">													
													<div class="col-sm-3 style_col_width20 paddingtop_6px">
														<label class="label_input2">New SA</label>														
													</div>
													<div class="col-sm-3 marginleft_style4">
														<select class="form-control" id="sl_NewSA_Sub">
															<option value="NONE">None</option>
														</select>
													</div>	
													<div class="col-sm-3 marginleft_style5">
														<input type="text" id="amount_NewSA_Sub" class="autoComma form-control text-right" value="0.00" data-v-min="0.00" data-v-max="999999999.99">
													</div>
												</div>
												<!-- ทุนตรวจสุขภาพ -->
												<div id="standing_capitalHealth_3_CL" class="disabledAll">
													<!-- <div class="col-sm-12 padding_all4" style="padding-bottom: 0px;">
														<div class="col-sm-3 style_col_width20 paddingtop_6px">
															<label class="label_input2">ทุนตรวจสุขภาพ</label>	
														</div>
														<div class="col-sm-9 style_col_width81 marginleft_style4">
															<table class="table table-bordered" style="width:100%; margin-top: 20px;" id="tbl_capitalHealth_3_CL">
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
																	<tr id="tr_capitalHealth3_row1" data-id="1" data-parent="1" data-group="1">
																		<td class="text-center" id="imgOKcapitalHealthSub_1" onclick="imgCheckbox(this.id);"></td>
																		<td class="text-center"><input type="text" class="form-control format_date" id="appStart_date_capitalHealthSub1" onblur="checkappStartBlock3_CL (this.id);" placeholder="dd/mm/yyyy" onkeyup="keyup_validateDate(event,this.id);"
									      									onclick="appStart_date(this.id);"  maxlength="10"></td>	
																		<td class="text-center"><input type="text" class="form-control format_date" id="appTo_date_capitalHealthSub1" onblur="checkappStartBlock3_CL (this.id);" placeholder="dd/mm/yyyy" onkeyup="keyup_validateDate(event,this.id);"
									 										 onclick="appTo_date(this.id);" maxlength="10"></td>	
																		<td class="text-right"><i class="glyphicon glyphicon-plus icon-blue-circle" id="number_capitalHealthSub1" onclick="addRowChild_capitalHealth3(this.id);"></i></td>	
																		<td class="text-right"><input type="number" id="capitalHealthSub_ageStart1" class="form-control text-right" onblur="clear_rowCoop(this.id);"/></td>	
																		<td class="text-right"><input type="number" id="capitalHealthSub_ageEnd1" class="form-control text-right" onblur="clear_rowCoop(this.id);" onchange="validate_ageTotalCapital(this.id,3);"/></td>	
																		<td class="text-center"><input type="text" id="capitalHealthSub_capital1" class="autoComma form-control text-right"/></td>	
																	</tr>
																</tbody>
															</table>
														</div>
													</div>
													<div class="col-sm-12 padding_all4">
														<div class="col-sm-3 style_col_width20 paddingtop_6px"></div>
														<div class="col-md-2">
															<input type="button" class="btn btn-primary width80px" value="เพิ่ม" onclick="addRow_capitalHealth3();">
														</div>
														<div class="col-md-2 marginleft_style5">
															<input type="button" class="btn btn-primary width80px" value="ลบ" onclick="deleteRow_capitalHealth3();">
														</div>
													</div> -->
												</div>
												<!-- ซื้อคู่กับแบบ -->
												<div id="standing_buyWith3_CL" class="disabledAll">
													<div class="col-sm-12 padding_all4" style="padding-bottom: 0px;">
														<div class="col-sm-3 style_col_width20 paddingtop_6px">
															<label class="label_input2">ซื้อคู่กับแบบ</label>	
														</div>
														<div class="col-sm-4 marginleft_style4">
															<table class="table table-bordered" style="width:100%; margin-top: 20px;" id="tbl_buyWith3_CL">
																<thead>		
																	<tr>
																		<th width="20%" class="text-center bg-term-blue verticalCenter"></th>
																		<th width="80%" class="text-center bg-term-blue verticalCenter">รหัสแบบ</th>
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
															<input type="button" class="btn btn-primary width80px" value="เพิ่ม" onclick="open_modal_buyWith_key(3);">
														</div>
														<div class="col-md-2 marginleft_style5">
															<input type="button" class="btn btn-primary width80px" value="ลบ" onclick="deleteRow_buyWith_key3();">
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
								<div class="col-sm-10 style_col_float_margin"><input id="chk_check_data_CL4" type="checkbox" id="chk_ic_ba" value="ตรวจสอบข้อมูลบุคคลล้มละลาย IC.BA" disabled checked><label for="chk_check_data_CL4" class="label_input2 label_disabled">ตรวจสอบข้อมูลบุคคลล้มละลาย IC.BA</label></div>										
							</div>
							<div class="row">
								<div class="col-sm-10 style_col_float_margin"><input id="chk_check_data_CL5" type="checkbox" id="chk_ic_fi_cft" value="ตรวจสอบข้อมูลฟอกเงิน IC.FI และการก่อการร้าย" disabled checked><label for="chk_check_data_CL5" class="label_input2 label_disabled">ตรวจสอบข้อมูลฟอกเงิน IC.FI และการก่อการร้าย</label></div>										
							</div>
							<div class="row">
								<div class="col-sm-10 style_col_float_margin"><input id="chk_check_data_CL6" type="checkbox" id="chk_saleBacklist_CL1" value="ตรวจสอบข้อมูล Blacklist ฝ่ายขาย"><label for="chk_check_data_CL6" class="label_input2">ตรวจสอบข้อมูล Blacklist ฝ่ายขาย</label></div>										
							</div>							
						</div>
						<!-- end panel 4 -->
						
						<div class="term_boxpanel margintop_20px">											
							<div class="row">
								<div class="col-sm-12 style_col_float_margin">
									<div class="col-sm-2 style_col_topic">
										<label id="first_premium_payment">การชำระเบี้ยประกันภัยปีแรก</label>
									</div>
									<div class="col-sm-9 panel panel-default panel_style2" id="panel_first_pay_premium_CL">
										<div class="col-sm-12 padding_all1">
											<div class="col-sm-6">
											<input type="checkbox" name="chk_first_pay_premium_CL[]" id="chk_first_pay_premium_CL1" value="กู้เบี้ย" disabled><label for="chk_first_pay_premium_CL1" class="label_input2">กู้เบี้ย</label>
											</div>
											<div class="col-sm-6">
											<input type="checkbox" name="chk_first_pay_premium_CL[]" id="chk_first_pay_premium_CL2" value="เงินสด" disabled><label for="chk_first_pay_premium_CL2" class="label_input2">เงินสด</label>
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
									<div class="col-xs-3 style_col_width22">
										<input type="text" class="form-control" id="system_date_cl" placeholder="dd/mm/yyyy" value="" onkeyup="
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
										<label>เลขที่กรมธรรม์ (Master Policy)</label>
									</div>
									<div class="col-sm-9" style="width:80%">
										<input type="text" class="form-control style_input1 text-center" id="master_policy_cl" maxlength="20" value="" onkeyup="replaceSpecialSymbol(this);">	
										
										<div class="col-sm-12" id="div_COOP_masterPolicy_CL" style="display:none;">
											<table class="table table-bordered" style="width:100%; margin-top: 20px; margin-left:-13px;" id="tbl_COOP_masterPolicy_CL">
												<thead>
													<tr>
														<th width="65%" colspan="2" class="text-center bg-term-blue verticalCenter">สหกรณ์</th>
														<th width="35%" rowspan="2" class="text-center bg-term-blue verticalCenter">Master Policy</th>
													</tr>
													<tr>
														<th width="15%" class="text-center bg-term-blue verticalCenter">รหัสสหกรณ์</th>
														<th width="60%" class="text-center bg-term-blue verticalCenter">ชื่อ</th>
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
										<label>สูตรวันสิ้นสุดสัญญา</label>
									</div>
									<div class="col-sm-9">
										<input type="text" class="form-control style_input1" id="dateend_contract_cl" value="วันที่เริ่มสัญญา + ระยะเวลาเอาประกัน" disabled>																																						
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
											<input type="radio" name="rd_benefit_person_CL[]" id="rd_benefit_person_CL1" value="PARTNER" checked><label for="rd_benefit_person_CL1" class="label_input2">Partner</label>
											</div>
											<div class="col-sm-12">
											<input type="radio" name="rd_benefit_person_CL[]" id="rd_benefit_person_CL2" value="INTERESTED"><label for="rd_benefit_person_CL2" class="label_input2">ผู้มีส่วนได้เสีย</label>
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
									<div class="col-sm-9 panel panel-default panel_style2">
										<div class="col-sm-12 padding_all1">
											<div class="col-sm-6">
											<input type="radio" name="rd_filing_rs_CL[]" id="rd_filing_rs_CL1" value="ฟ้อง" checked><label for="rd_filing_rs_CL1" class="label_input2">ฟ้อง</label>
											</div>
											<div class="col-sm-6">
											<input type="radio" name="rd_filing_rs_CL[]" id="rd_filing_rs_CL2" value="ไม่ฟ้อง"><label for="rd_filing_rs_CL2" class="label_input2">ไม่ฟ้อง</label>
											</div>
										</div>																																							
									</div>
								</div>						
							</div>
							
							<div class="row">
								<div class="col-sm-12 style_col_float_margin">
									<div class="col-sm-2 style_col_topic">
										<label id="fax_app_label">การส่ง Fax App หรือช่องทางอื่นๆ</label>
									</div>
									<div class="col-sm-9 panel panel-default panel_style2">
										<div class="col-sm-12 padding_all1">
											<div class="col-sm-6">
											<input type="radio" name="rd_fax_app_CL[]" id="rd_fax_app_CL1" value="ได้" checked><label for="rd_fax_app_CL1" class="label_input2">ได้</label>
											</div>
											<div class="col-sm-6">
											<input type="radio" name="rd_fax_app_CL[]" id="rd_fax_app_CL2" value="ไม่ได้"><label for="rd_fax_app_CL2" class="label_input2">ไม่ได้</label>
											</div>
										</div>																																							
									</div>
								</div>						
							</div>
							
							<div class="row">
								<div class="col-sm-10 style_col_float_margin marginleft_style1">
									<div class="col-sm-4 paddingtop_6px">
										<input type="checkbox" id="chk_free_look_CL"><label for="chk_free_look_CL" class="label_input2">การใช้สิทธิ Free Look Period</label>
									</div>	
									<div class="col-xs-1 paddingtop_8px"><strong>ภายใน</strong></div>
									<div class="col-xs-1 paddingleft_style1">
										<input type="number" class="form-control width50px" id="amount_free_look_CL" onkeyup="replaceSpecialSymbol(this) , validateMax99(this) " value="0" disabled>
									</div>	
									<div class="col-sm-4 paddingtop_8px"><strong>วัน นับจากวันที่สร้าง Cert File</strong></div>							
								</div>						
							</div>
							
							<div class="row">
								<div class="col-sm-10 style_col_float_margin marginleft_style1">
									<div class="col-sm-12 paddingtop_6px">
										<input type="checkbox" id="deduct_cost_CL" disabled><label for="deduct_cost_CL" class="label_input2">หักค่าใช้จ่าย</label>
									</div>	
									<div class="col-sm-8">
									<table class="table table-bordered style_table4" id="tbl_deduct_cost" style="width:100%;">
										<thead>
											<tr>
												<th class="text-center bg-term-blue verticalCenter" width="70">เลือก</th>																				
												<th colspan="2" class="text-center verticalCenter bg-term-blue" width="350">รายการหักค่าใช้จ่าย</th>							
											</tr>
										</thead>
										<tbody>
											<tr id="tbody_list_deduct_cost1">
												<td id="imgOK_list_deduct_cost_CL1" class="verticalCenter text-center"><input id="list_deduct_cost_CL1" type="checkbox" value="POLICY_ISSUE"></td>						
												<td class="verticalCenter">ค่าดำเนินการออกกรมธรรม์ จำนวนเงิน 500 บาท</td>																									
											</tr>
											<tr id="tbody_list_deduct_cost2">
												<td id="imgOK_list_deduct_cost_CL2" class="verticalCenter text-center"><input id="list_deduct_cost_CL2" type="checkbox" value="CREDIT_FEE"></td>						
												<td class="verticalCenter">ค่าธรรมเนียมบัตรเครดิต เป็น % (สูตรการคำนวณ)</td>																									
											</tr>
											<tr id="tbody_list_deduct_cost3">
												<td id="imgOK_list_deduct_cost_CL3" class="verticalCenter text-center"><input id="list_deduct_cost_CL3" type="checkbox" value="MED_EXAM"></td>						
												<td class="verticalCenter">ค่าตรวจสุขภาพ</td>																									
											</tr>
											<tr id="tbody_list_deduct_cost4">
												<td id="imgOK_list_deduct_cost_CL4" class="verticalCenter text-center"><input id="list_deduct_cost_CL4" type="checkbox" value="OTHER"></td>						
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
									<button type="button" class="btn btn-primary width80px" id="bt_ui005_2_Confirm_cl" onclick="bt_Menu5_Confirm();">บันทึก</button>
								</div>
								<div class="col-md-3">
									<button type="button" class="btn btn-primary width80px" data-dismiss="modal" data-toggle="modal" data-target="#cancelBoxCL_WarrantyTerm">ยกเลิก</button>
								</div>
							</div>
						</div>
						<br clear="all">
																			
						  </div>
						  
		<!-------------------------------------- modal -------------------------------------->	
		<!-- เพิ่ม : ซื้อคู่กับแบบ (ตรวจสอบข้อมูลเคลม กธ. เดิม)-->				
	<div class="modal fade" id="modal_buyWith1_CL" role="dialog">
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
							<div class="col-sm-3"><input type="radio" id="rdSpecifyKey1" name="select_buyWidth1" onclick="displayBuyWidthCL_popup();" checked/><label for="rdSpecifyKey1">&nbsp;ระบุรหัสแบบ</label></div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-12">
							<div class="col-sm-1"></div>
							<div class="col-sm-4"><input type="text" id="txtSpecifyKey1" class="form-control"/></div>
						</div>
					</div> -->
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row">
						<div class="col-sm-12">
							<div class="col-sm-3"><input type="radio" id="rdChooseKey1" name="select_buyWidth1" onclick="displayBuyWidthCL_popup();"/><label for="rdChooseKey1">&nbsp;เลือกรหัสแบบ</label></div>
						</div>
					</div>
				<!-- ซื้อคู่กับแบบ -->
				<div class="table_width1">
					<div class="row">
						<div id="datatbl_buyWidth1_CL" class="datatbl_buyWidth1_CL">
						<!-- tbl -->
						<table class="table table-bordered" id="tbl_chooseBuyWith1_CL">
							<thead>
								<tr class="bg-primary">
									<th class="text-center" width="30%" style="border-right:none; vertical-align:middle;">เลือก</th>
									<th class="text-center" width="70%" style="border-right:none;">รหัส</th>
								</tr>
							</thead>
							<tbody>
								
							</tbody>
						</table>
						<div class="text-center" style="padding: 10px 0"></div>	
						</div>		
						<!-- button -->
						<div class="row" align="center">						
								<button type="button" class="btn btn-primary" id="btn_saveSelectRecord_CL" onclick="saveBuyWidth1_CL();" data-dismiss="modal">ตกลง</button>						
								<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>												
						</div>		
					</div>							
				</div>				
				</div>
			</div>
		</div>
	</div>
	
	<!-- เพิ่ม : ซื้อคู่กับแบบ (ตรวจสอบข้อมูล IC)-->				
	<div class="modal fade" id="modal_buyWith2_CL" role="dialog">
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
							<div class="col-sm-3"><input type="radio" id="rdSpecifyKey2" name="select_buyWidth2" onclick="displayBuyWidthCL_popup2();" checked/><label for="rdSpecifyKey2">&nbsp;ระบุรหัสแบบ</label></div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-12">
							<div class="col-sm-1"></div>
							<div class="col-sm-4"><input type="text" id="txtSpecifyKey2" class="form-control"/></div>
						</div>
					</div> -->
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row">
						<div class="col-sm-12">
							<div class="col-sm-3"><input type="radio" id="rdChooseKey2" name="select_buyWidth2" onclick="displayBuyWidthCL_popup2();"/><label for="rdChooseKey2">&nbsp;เลือกรหัสแบบ</label></div>
						</div>
					</div>
				<!-- ซื้อคู่กับแบบ -->
				<div class="table_width1">
					<div class="row">
						<div id="datatbl_buyWidth2_CL" class="datatbl_buyWidth2_CL">
						<!-- tbl -->
						<table class="table table-bordered" id="tbl_chooseBuyWith2_CL">
							<thead>
								<tr class="bg-primary">
									<th class="text-center" width="30%" style="border-right:none; vertical-align:middle;">เลือก</th>
									<th class="text-center" width="70%" style="border-right:none;">รหัส</th>
								</tr>
							</thead>
							<tbody>
							
							</tbody>
						</table>
						<div class="text-center" style="padding: 10px 0"></div>	
						</div>		
						<!-- button -->
						<div class="row" align="center">						
								<button type="button" class="btn btn-primary" id="btn_saveSelectRecord_CL" onclick="saveBuyWidth2_CL();" data-dismiss="modal">ตกลง</button>						
								<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>												
						</div>		
					</div>							
				</div>				
				</div>
			</div>
		</div>
	</div>
	
	<!-- เพิ่ม : ซื้อคู่กับแบบ (ตรวจสอบ กธ. เดิม รับแบบ Sub)-->				
	<div class="modal fade" id="modal_buyWith3_CL" role="dialog">
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
							<div class="col-sm-3"><input type="radio" id="rdSpecifyKey3" name="select_buyWidth3" onclick="displayBuyWidthCL_popup3();" checked/><label for="rdSpecifyKey3">&nbsp;ระบุรหัสแบบ</label></div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-12">
							<div class="col-sm-1"></div>
							<div class="col-sm-4"><input type="text" id="txtSpecifyKey3" class="form-control"/></div>
						</div>
					</div> -->
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row">
						<div class="col-sm-12">
							<div class="col-sm-3"><input type="radio" id="rdChooseKey3" name="select_buyWidth3" onclick="displayBuyWidthCL_popup3();"/><label for="rdChooseKey3">&nbsp;เลือกรหัสแบบ</label></div>
						</div>
					</div>
				<!-- ซื้อคู่กับแบบ -->
				<div class="table_width1">
					<div class="row">
						<div id="datatbl_buyWidth3_CL" class="datatbl_buyWidth3_CL">
						<!-- tbl -->
						<table class="table table-bordered" id="tbl_chooseBuyWith3_CL">
							<thead>
								<tr class="bg-primary">
									<th class="text-center" width="30%" style="border-right:none; vertical-align:middle;">เลือก</th>
									<th class="text-center" width="70%" style="border-right:none;">รหัส</th>
								</tr>
							</thead>
							<tbody>
							
							</tbody>
						</table>
						<div class="text-center" style="padding: 10px 0"></div>	
						</div>		
						<!-- button -->
						<div class="row" align="center">						
								<button type="button" class="btn btn-primary" id="btn_saveSelectRecord_CL" onclick="saveBuyWidth3_CL();" data-dismiss="modal">ตกลง</button>						
								<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>												
						</div>		
					</div>							
				</div>				
				</div>
			</div>
		</div>
	</div>
			
			<!-- Hidden value -->		  
	<input type="hidden" id="lookup_factor" />
	<input type="hidden" id="lookup_unit" />			
	
	<input type="hidden" id="lookup_gio"/>
	<input type="hidden" id="lookup_slSenior"/>
	<input type="hidden" id="lookup_reinsurance_Group"/>
	<input type="hidden" id="lookup_filing_Channel"/>
	<input type="hidden" id="lookup_sale_Channel"/>
