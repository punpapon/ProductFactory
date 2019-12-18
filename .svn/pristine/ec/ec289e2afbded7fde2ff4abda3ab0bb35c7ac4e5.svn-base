<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title></title>
</head>
<body>
	<form class="form-horizontal">
		<div class="row box-body" id="div_main_menuCL_3">
		<input type="hidden" name="baseplanCode_CL" id="baseplanCode_CL" value=""/>
		<input type="hidden" name="riderCode_CL" id="riderCode_CL" value=""/>
			<div class="panel panel-primary">
				<div class="panel-heading text-left">
					<p class="margin0 text-center">
						<B>การคำนวณเบี้ยประกัน</B>
					</p>
				</div>
			<div class="panel-body">
				<!-- Age Band -->
					<div class="panel panel-primary">				
						<div class="row">
							<div class="col-md-12 panel_head_blue">
								<!-- <div class="input-group">
									<span class="input-group-addon"
										style="background-color: #337AB7;"> <input
										type="checkbox" id="ch_insurance_premium_ageBand_cl">
									</span> <input type="text"
										class="form-control text-center fontColorWhite padding20px"
										style="background-color: #337AB7; border-left: 0;"
										value="Age Band">
								</div> -->
								<div class="col-sm-12 input-group">
									<input type="checkbox" id="ch_insurance_premium_ageBand_cl">
									<label for="ch_insurance_premium_ageBand_cl">Age Band</label>
								</div>
							</div>
						</div>
						<div class="text-center" style="padding: 10px 0"></div>
						<div class="row">
							<div id="div_Age_Band">
								<table class="table table-striped table-bordered text-center" width="100%" id="tb_Age_Band">
									<thead>
										<tr>
											<th class="text-center bg-primary borderBlack" width="10%">เลือก</th>
											<th class="text-center bg-primary borderBlack" width="10%">Band</th>
											<th class="text-center bg-primary borderBlack" width="50%">ช่วงอายุ</th>
										</tr>
									</thead>
									<tbody>
									</tbody>
								</table>
							</div>
						</div>						
					</div>
					
					<!-- เบี้ยมาตรฐาน -->
					<div class="panel panel-primary">				
						<div class="row">
							<div class="col-md-12 panel_head_blue">
								<!-- <div class="input-group" style="width:100%;">
									 <span class="input-group-addon"
										style="background-color: #337AB7;"> <input
										type="checkbox" id="ch_standard_premium_cl">
									</span>  <input type="text"
										class="form-control text-center fontColorWhite padding20px"
										style="background-color: #337AB7; border-left: 0;"
										value="เบี้ยมาตรฐาน">
								</div> -->
								<div class="col-sm-12 input-group">
									<input type="checkbox" id="ch_standard_premium_cl">
									<label for="ch_standard_premium_cl">เบี้ยมาตรฐาน</label>
								</div>
							</div>
						</div>
						<div class="text-center" style="padding: 10px 0"></div>
						<div class="row">
							<div class="col-sm-1"></div>
							<div class="col-sm-10">
								<table style="margin:0 0 10px 0;">
									<tr>
										<td valign="middle"><input type="radio" id="ch_Base_rate" disabled="disabled"></td>
										<td valign="middle" style="padding-left:10px; "><label for="ch_Base_rate">อัตราเบี้ยพื้นฐาน</label></td>
									</tr>
								</table>
							</div>
						</div>
						<div class="row">
							<div class="col-sm-1"></div>
							<div class="col-sm-10">
								<table class="table borderless">
							<tr>
								<td class="col-sm-2"><label>ตารางเบี้ยประกัน</label></td>
								<td class="col-sm-4"><select class="form-control"
									id="sl_menu3_insurance_premium_cl">
										 <option value="">None</option>
									<!--	<option value="0">ตามแผนความคุ้มครอง</option>
										<option value="1">เบี้ยประกันต่อทุน 10,000บาท</option>
										<option value="2">เบี้ยประกันต่อทุน 100,000บาท</option> -->
								</select></td>
								<td class="col-sm-6"></td>
							</tr>
							<tr>
								<td colspan="2"><label>นำเข้า PM_Rate</label></td>
							</tr>
							<tr>
								<td colspan="10">
								<input type="hidden" id="old_PMrate_CL">
								<input type="hidden" id="new_PMrate_CL">
								<div class="col-sm-12 paddingleft0 scroll_div_tbl1" id="divtb_PM_Rate1">
												<table class="table table-striped table-bordered text-center"
													width="100%" id="tb_PM_Rate1">
													<thead>
														<tr>
															<th width="5%" class="text-center bg-primary borderBlack"></th>
															<th width="15%" class="text-center bg-primary borderBlack vertical-middle">ประเภท</th>
															<th width="70%" class="text-center bg-primary borderBlack vertical-middle">PM_Rate</th>
															<th width="8%" class="text-center bg-primary borderBlack vertical-middle">ดูค่า</th>
															<th width="10%" class="text-center bg-primary borderBlack vertical-middle">ดาวน์<br>โหลด
															</th>
														</tr>
													</thead>
													<tbody>
													<!-- <tr id="tbody_PM_Rate1" data-id="1" data-level="1">
															<td class="text-center borderBlack" id="imgOK_1" width="33px" style="vertical-align: middle; background-color: gray;"></td>
															<td class="borderBlack">
																<select class="form-control pm_Rate" id="sl_PM_Type_CL1" onchange="check_file_layout(this.id,'');">
																	<option value="">None</option>
																</select>
															</td>
															<td class="borderBlack">
																<div class="input-group">
																	<input type="text" class="form-control" id="fileuploads_PMRateText1_CL" readonly=""> 
																		<label class="input-group-btn"> 
																			<span id="spanRate1_CL" class="btn btn-primary" disabled>
																			<font id="validate_rate1_CL" style="color: red;">*</font>...
																			<input id="fileuploads_PMRate1_CL" type="file" accept="text/plain" style="display: none;"> 
																			</span>
																		</label>
																</div>																
															</td>
															<td class="borderBlack">															
																<a id="span_PM_Rateopen_1" class="active_grey">
																	<span class="glyphicon glyphicon-eye-open activecolorgray"></span>
																</a>
															</td>
															<td class="borderBlack">
																<a id="span_PM_Ratedownload_1" class="active_grey">
																	<span class="glyphicon glyphicon-download-alt activecolorgray"></span>
																</a>															
															</td>
														</tr>	 -->
													</tbody>
												</table>
											</div>
								</td>
							</tr>
							<tr>
								<td colspan="10">
									<div class="text-right col-sm-12">
										<div class="col-md-2" style="padding-right: 0">
											<input class="btn btn-primary width100" type="button" id = "addrowPM_Rate"
												value="เพิ่ม" onclick="addRowPM_Rate ();">
										</div>
										<div class="col-md-2" style="padding-right: 0">
											<input class="btn btn-primary width100" type="button" id = "delrowPM_Rate"
												value="ลบ" onclick="deleteRowPM_Rate ();">
										</div>
										<div class="col-md-8"></div>
									</div>
								</td>
							</tr>
							<tr>
								<td colspan="2">
								<div class="text-center" style="padding: 10px 0"></div>
								<label><b>อัตราเบี้ยฯ เพิ่มตามชั้นอาชีพ</b></label>
								</td>
							</tr>
							<tr>
								<td colspan="10">
									<table class="table table-bordered margin_bottom_0px" style="width:80%" id="tb_premiumLevel_CL">
									<thead>
										<tr>											
											<th width="15%" class="text-center verticalCenter bg-primary borderBlack" rowspan="2">ชั้นอาชีพ</th>
											<th width="30%" class="text-center verticalCenter bg-primary borderBlack" colspan="2">เบี้ยเพิ่ม (%)</th>																						
											<!-- <th width="25%" class="text-center verticalCenter bg-primary borderBlack" rowspan="2">Max per SA (บาท)<br>(SA=1000)</th> -->																					
										</tr>
										<tr>
											<th width="15%" class="text-center verticalCenter bg-primary borderBlack">ตั้งแต่</th>										
											<th width="15%" class="text-center verticalCenter bg-primary borderBlack">ถึง</th>																			
										</tr>
									</thead>
									<tbody>
									<tr>
										<td class="text-center verticalCenter borderBlack">
											<label class="font-bold">2</label>
										</td>
										<td class="text-center verticalCenter borderBlack">
											<input type="text" id="datefromLevel_1" class="auto text-right form-control" onblur="checkFromToLevel_CL(1);" data-v-min="0.00" data-v-max="999.99" maxlength="5" value="">
										</td>
										<td class="text-center verticalCenter borderBlack">
											<input type="text" id="datetoLevel_1" class="auto text-right form-control" onblur="checkFromToLevel_CL(1);" onkeypress="validate_zero_ToLevel(1);" onkeyup="validate_zero_ToLevel(1);" data-v-min="0.00" data-v-max="999.99" maxlength="5" value="">
										</td>
										<!-- <td class="text-center verticalCenter borderBlack">
											<input type="text" class="auto text-right form-control" data-v-min="0.00" data-v-max="999.99" maxlength="5" value="">
										</td> -->
									</tr>
									<tr>
										<td class="text-center verticalCenter borderBlack">
											<label class="font-bold">3</label>
										</td>
										<td class="text-center verticalCenter borderBlack">
											<input type="text" id="datefromLevel_2" class="auto text-right form-control" onblur="checkFromToLevel_CL(2);" data-v-min="0.00" data-v-max="999.99" maxlength="5" value="">
										</td>
										<td class="text-center verticalCenter borderBlack">
											<input type="text" id="datetoLevel_2" class="auto text-right form-control" onblur="checkFromToLevel_CL(2);" onkeypress="validate_zero_ToLevel(2);" onkeyup="validate_zero_ToLevel(2);" data-v-min="0.00" data-v-max="999.99" maxlength="5" value="">
										</td>
<!-- 										<td class="text-center verticalCenter borderBlack">
											<input type="text" class="auto text-right form-control" data-v-min="0.00" data-v-max="999.99" maxlength="5" value="">
										</td> -->
									</tr>
									<tr>
										<td class="text-center verticalCenter borderBlack">
											<label class="font-bold">4</label>
										</td>
										<td class="text-center verticalCenter borderBlack">
											<input type="text" id="datefromLevel_3" class="auto text-right form-control" onblur="checkFromToLevel_CL(3);" data-v-min="0.00" data-v-max="999.99" maxlength="5" value="">
										</td>
										<td class="text-center verticalCenter borderBlack">
											<input type="text" id="datetoLevel_3" class="auto text-right form-control" onblur="checkFromToLevel_CL(3);" onkeypress="validate_zero_ToLevel(3);" onkeyup="validate_zero_ToLevel(3);" data-v-min="0.00" data-v-max="999.99" maxlength="5" value="">
										</td>
										<!-- <td class="text-center verticalCenter borderBlack">
											<input type="text" class="auto text-right form-control" data-v-min="0.00" data-v-max="999.99" maxlength="5" value="">
										</td> -->
									</tr>
									</tbody>
								</table>
								</td>
							</tr>
							<tr>
								<td colspan="10">
									<div class="text-center" style="padding: 10px 0"></div>
									<div class="row">
										<div class="col-sm-3">
											<input type="checkbox" id="ch_importInsurance_cl" onclick="importInsurance_cl ();"> <label for="ch_importInsurance_cl">มีส่วนลดเบี้ยประกัน</label>
										</div>
										<div class="col-sm-8">
											<div class="col-sm-3">
												<input type="text" class="auto text-right form-control"
													id="discountInsurancePremiumsSta" value="0.00" onblur="checkvaluePremiumsSta_PM_Rate();"
													data-v-min="0.00" data-v-max="100.00">
											</div>
											<div class="col-sm-1">
												<label>-</label>
											</div>
											<div class="col-sm-3">
												<input type="text" class="auto text-right form-control"
													id="discountInsurancePremiumsTo" value="0.00" onblur="checkvaluePremiumsTo_PM_Rate();"
													data-v-min="0.00" data-v-max="100.00">
											</div>
											<div class="col-sm-1">
												<label>%</label>

											</div>
											<div class="col-sm-2"></div>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<td colspan="2" style="padding: 10px 0">
								<div class="text-center" style="padding: 10px 0"></div>
								<label>&nbsp;&nbsp;นำเข้า ตารางส่วนลดตามทุนประกัน</label></td>
							</tr>
							<tr>
								<td colspan="3">
									<div class="input-group col-xs-10 style_col_width79">
											<input type="text" class="form-control"
												id="text_menu3_inputfile_2"
												placeholder="" readonly> <label
												class="input-group-btn"> <span disabled="disabled"
												class="btn btn-primary"> เลือกไฟล์<input type="file"
												style="display: none;" id="menu3_inputfile_2_cl"
												disabled="disabled">
											</span>
										</label>
									</div>
								</td>
							</tr>
						</table>
							</div>
						</div>												
					</div>
					
					<!-- เบี้ยเพิ่มพิเศษ -->
					<div class="panel panel-primary">
						<div class="row">
							<div class="col-md-12 panel_head_blue">
								<!-- <div class="input-group">
									<span class="input-group-addon"
										style="background-color: #337AB7;"> <input
										type="checkbox" id="ch_insurance_premium_Extra_cl">
									</span> <input type="text"
										class="form-control text-center fontColorWhite padding20px"
										style="background-color: #337AB7; border-left: 0;"
										value="เบี้ยเพิ่มพิเศษ">
								</div> -->
								<div class="col-sm-12 input-group">
									<input type="checkbox" id="ch_insurance_premium_Extra_cl">
									<label for="ch_insurance_premium_Extra_cl">เบี้ยเพิ่มพิเศษ</label>
								</div>
							</div>
						</div>
						<div class="text-center" style="padding: 10px 0"></div>						
						<div class="row">
							<div class="col-sm-1"></div>
							<div class="col-sm-10">
								<table class="table borderless">
									<tr class="col-sm-9 paddingleft0">
										<td class="col-sm-3"><label>ตารางเบี้ยประกัน</label></td>
										<td class="col-sm-6"><select class="form-control"
											id="sl_insurance_premium_Extra_cl" disabled="disabled">
												<option value="NONE">None</option>
												<!-- <option value="1">ต่อทุน 10,000บาท</option>
												<option value="2">ต่อทุน 100,000บาท</option> -->
										</select></td>
										<td class="col-sm-3"></td>
										
									</tr>
									<tr>
										<td colspan="2"><label>นำเข้า Extra_Rate</label></td>
									</tr>
									<tr>
										<td colspan="10">
											<div class="col-sm-12 paddingleft0" id ="div_TB_Extra_Rate">
												<table class="table table-striped table-bordered text-center"
													width="100%" id="tb_Extra_Rate">
													<thead>
														<tr>
															<th width="15%" class="text-center bg-primary borderBlack vertical-middle">ประเภท</th>
															<th width="70%" class="text-center bg-primary borderBlack vertical-middle">Extra_Rate</th>
															<th width="8%" class="text-center bg-primary borderBlack vertical-middle">ดูค่า</th>
															<th width="10%" class="text-center bg-primary borderBlack vertical-middle">ดาวน์<br>โหลด</th>
														</tr>
													</thead>
													<tbody>													
													</tbody>
												</table>
											</div>
										</td>
									</tr>
									<tr class="col-sm-9">
										<td><label>MIN_EM</label></td>
										<td><input type="text" class="auto text-right form-control"
											data-v-min="0.00" data-v-max="999.99" maxlength="5" value="0.00"
											id="min_EM_cl" onblur="checkvalueMin_EM();" disabled="disabled"></td>
										<td><label>%</label></td>
										<td><label>MAX_EM</label></td>
										<td><input type="text" class="auto text-right form-control"
											data-v-min="0.00" data-v-max="999.99" maxlength="5" value="0.00"
											id="max_EM_cl" disabled="disabled" onblur="checkvalueMax_EM();"></td>
										<td><label>%</label></td>
									</tr>
									<tr class="col-sm-9">
										<td><label>นำเข้า ตารางช่วงอายุที่รับเบี้ยเพิ่ม</label></td>
									</tr>
									<tr class="col-sm-12 paddingleft0">
										<td>
											<div class="col-sm-10" id="div_fileCal1_CL"></div>
											<div class="col-md-2">
												<button type="button" class="btn btn-primary text-center"
													id="cv_InputExtra_Rate_cl">ดูค่า</button>
											</div>
										</td>
									</tr>
								</table>
							</div>
						</div>
					</div>
				
				<div class="text-center" style="padding: 10px 0"></div>
				<div class="row">
					<div class="col-md-8 col-md-offset-7 text-right">
						<div class="col-md-7">
							<div class="col-md-5">
								<button type="button" class="btn btn-primary width100"
									onclick="bt_Menu3_Confirm();">บันทึก</button>
							</div>
							<div class="col-md-5">
								<button type="button" class="btn btn-primary width100"
									data-toggle="modal" data-target="#modal_Cancel_Menu3" >ยกเลิก</button>
							</div>
						</div>
					</div>
				</div>		
				
		</div>
		</div>
		
		<!-- end panel body -->
		

		<!-- MODAL ดูค่า ตาราง PM_Rate-->
		<!-- dialog ตามแผนความคุ้มครอง -->
	 <div class="modal fade" id="modal_PMRate_CL" role="dialog">
		<div class="modal-dialog">

			<!-- Modal content -->
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">ดูค่า : <span></span></h4>
				</div>
				<div class="modal-body">
					<div class="ex1">
						<table class="table table-bordered" id="tb_PM_Rate_view_T1">
							<thead>
								<tr style="background-color: #EEEEEE;">
									<th class="text-center">Plan</th>
									<th class="text-center">Sex</th>
									<th class="text-center">Mode</th>
									<th class="text-center">Age</th>
									<th class="text-center">Package</th>
									<th class="text-center">Premium</th>
								</tr>
							</thead>
							<tbody>														
							</tbody>
						</table>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row">
						<div class="col-md-4">
							<button type="button" class="btn btn-primary" data-dismiss="modal" id="btn_submit_PMRatePlanAuto">&nbsp;&nbsp;บันทึก&nbsp;&nbsp;</button></div>
						<div class="col-md-8 text-right">
							<button type="button" class="btn btn-primary" data-dismiss="modal" id="btn_cancel_PMRatePlanAuto">&nbsp;&nbsp;ยกเลิก&nbsp;&nbsp;</button>
						</div>
						<div class="col-md-2"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- dialog icon eye ตามแผนความคุ้มครอง -->
	<div class="modal fade" id="modal_PMRate_CL_view" role="dialog">
		<div class="modal-dialog">

			<!-- Modal content -->
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">ดูค่า : <span></span></h4>
				</div>
				<div class="modal-body">
					<div class="ex1">
						<table class="table table-bordered" id="tb_PM_Rate_view_T1_view">
							<thead>
								<tr style="background-color: #EEEEEE;">
									<th class="text-center">Plan</th>
									<th class="text-center">Sex</th>
									<th class="text-center">Mode</th>
									<th class="text-center">Age</th>
									<th class="text-center">Package</th>
									<th class="text-center">Premium</th>
								</tr>
							</thead>
							<tbody>														
							</tbody>
						</table>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row">
						<div class="col-md-4">
							<button type="button" class="btn btn-primary">ดาวน์โหลด</button></div>
						<div class="col-md-8 text-right">
							<button type="button" class="btn btn-primary" data-dismiss="modal">&nbsp;&nbsp;&nbsp;&nbsp;ปิด&nbsp;&nbsp;&nbsp;&nbsp;</button>
						</div>
						<div class="col-md-2"></div>
					</div>
				</div>
			</div>
		</div>
	</div> 
		<!-- dialog ต่อทุน 10 k และ ต่อทุน 100k -->
				<div class="modal fade" id="modal_PM_Rate" role="dialog">
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header"
								style="background-color: #337AB7; color: white;">
								<button type="button" class="close" data-dismiss="modal">&times;</button>
								<h4 class="modal-title">ดูค่า : <span></span></h4>
							</div>
							<div class="modal-body">
								<div class="ex1">
									<table class="table table-bordered" id="tb_PM_Rate_Capital">
										<thead>
											<tr class="borderBlack">
												<th class="text-center bg-primary borderBlack">Entry
													age</th>
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
							<button type="button" class="btn btn-primary" data-dismiss="modal" id="btn_submit_PMRatePlan4ColAuto">&nbsp;&nbsp;บันทึก&nbsp;&nbsp;</button></div>
						<div class="col-md-8 text-right">
							<button type="button" class="btn btn-primary" data-dismiss="modal" id="btn_cancel_PMRatePlan4ColAuto">&nbsp;&nbsp;ยกเลิก&nbsp;&nbsp;</button>
						</div>
										
									<div class="col-md-2"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
	<!-- dialog icon eye 10k and 100k-->
	<div class="modal fade" id="modal_PMRate4Col_CL" role="dialog">
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
						<table class="table table-bordered" id="tbl_PMRatePlan4Col_CL">
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
							<button type="button" class="btn btn-primary" id="download_tbl_PMRatePlan4Col_CL">ดาวน์โหลด</button></div>
						<div class="col-md-8 text-right">
							<button type="button" class="btn btn-primary" data-dismiss="modal">&nbsp;&nbsp;&nbsp;&nbsp;ปิด&nbsp;&nbsp;&nbsp;&nbsp;</button>
						</div>
						<div class="col-md-2"></div>
					</div>
				</div>
			</div>
		</div>
	</div>	

				<!-- check None -->
				<div id="modal_CheckNone_Menu3" class="modal fade bd-example-modal-sm"
				tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel"
				aria-hidden="true">
				<div class="modal-dialog ">
					<div class="modal-content">
						<div class="modal-header"
							style="background-color: #337AB7; color: white;">
							<button type="button" class="close" data-dismiss="modal">&times;</button>
							<h4 class="modal-title">แจ้งเตือน</h4>
						</div>
						<div class="modal-body text-center">
							<label>เคยนำเข้าไฟล์&nbsp;</label><label id="textTop5"></label><label>&nbsp;ไว้แล้ว&nbsp;ต้องการเปลี่ยน</label><label id="textTop6"></label><label>&nbsp;ใช่ หรือ ไม่</label>
							
						</div>
						<div class="text-center" style="padding: 10px 0"></div>
						<div class="row">
							<div class="col-md-4"></div>
							<div class="col-md-2">
								<button type="button" class="btn btn-primary" id = "menu3_Confirm_cl">ยืนยัน</button>
							</div>
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
				<!-- check None -->
				<div id="modal_CheckNone_Menu4" class="modal fade bd-example-modal-sm"
				tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel"
				aria-hidden="true">
				<div class="modal-dialog ">
					<div class="modal-content">
						<div class="modal-header"
							style="background-color: #337AB7; color: white;">
							<button type="button" class="close" data-dismiss="modal">&times;</button>
							<h4 class="modal-title">แจ้งเตือน</h4>
						</div>
						<div class="modal-body text-center">
							<label>เคยนำเข้าไฟล์&nbsp;</label><label id="textTop7"></label><label>&nbsp;ไว้แล้ว&nbsp;ต้องการเปลี่ยน</label><label id="textTop8"></label><label>&nbsp;ใช่ หรือ ไม่</label>
							
						</div>
						<div class="text-center" style="padding: 10px 0"></div>
						<div class="row">
							<div class="col-md-4"></div>
							<div class="col-md-2">
								<button type="button" class="btn btn-primary" id = "menu3_Confirm_cl2"
									onclick="bt_Menu3_Confirm_cl2()">ยืนยัน</button>
							</div>
							<div class="col-md-2">
								<button type="button" class="btn btn-primary"
									 id="cancel_CheckNone_Menu4">ยกเลิก</button>
							</div>
							<div class="col-md-4"></div>
						</div>
						<div class="text-center" style="padding: 10px 0"></div>
					</div>
				</div>
			</div>
				
				<!-- modal แจ้งเตือน -->		
	<div class="modal fade" id="modal_value_warning" role="dialog">
		<div class="modal-dialog">

			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header" style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">เเจ้งเตือน</h4>
				</div>
				
				<div class="modal-body">
					<div class="row">
						<p class="text-center" id="txt_value_alert_error">ไม่พบข้อมูล</p>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row">
						<div class="col-md-4"></div>
						<div class="col-md-4">
							<div class="col-md-6">
								<button type="button" class="btn btn-primary"
									data-dismiss="modal" id="btn_value_warning_submit">ยืนยัน</button>
							</div>
							<div class="col-md-6">
								<button type="button" class="btn btn-primary"
									id="btn_value_warning_cancel">ยกเลิก</button>
							</div>
						</div>
						<div class="col-md-2"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<!-- modal แจ้งเตือน2 -->
	<div class="modal fade" id="modal_value_warning2" role="dialog">
		<div class="modal-dialog">

			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header" style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">เเจ้งเตือน</h4>
				</div>
				
				<div class="modal-body">
					<div class="row">
						<p class="text-center" id="txt_value_alert_error2">ไม่พบข้อมูล</p>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row">
						<div class="col-md-4"></div>
						<div class="col-md-4">
							<div class="col-md-6">
								<button type="button" class="btn btn-primary"
									data-dismiss="modal" id="btn_value_warning_submit2">ยืนยัน</button>
							</div>
							<div class="col-md-6">
								<button type="button" class="btn btn-primary"
									id="btn_value_warning_cancel2">ยกเลิก</button>
							</div>
						</div>
						<div class="col-md-2"></div>
					</div>
				</div>
			</div>
		</div>
	</div>	

<div class="modal fade" id="modal_inputExtra_RateAuto" role="dialog">
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
									<table class="table table-bordered" id="tb_inputExtra_RateAuto">
										<thead>
											<tr class="borderBlack">
												<th class="text-center bg-primary borderBlack">EM</th>
												<th class="text-center bg-primary borderBlack">Term</th>
												<th class="text-center bg-primary borderBlack">Sex</th>
												<th class="text-center bg-primary borderBlack">Min Age</th>
												<th class="text-center bg-primary borderBlack">Max Age</th>
											</tr>
										</thead>
										<tbody>

										</tbody>
									</table>
								</div>
								<div class="text-center" style="padding: 10px 0"></div>
								<div class="row">
									<div class="col-md-4">
										<button type="button" class="btn btn-primary" data-dismiss="modal" id="save_inputExtra_Rate">&nbsp;&nbsp;บันทึก&nbsp;&nbsp;</button></div>
									<div class="col-md-8 text-right">
										<button type="button" class="btn btn-primary" data-dismiss="modal" id="btn_cancel_PMRatePlan4ColAuto">&nbsp;&nbsp;ยกเลิก&nbsp;&nbsp;</button>
									</div>
									<div class="col-md-2"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<!-- MODAL ดูค่า -->
				<div class="modal fade" id="modal_inputExtra_RateView" role="dialog">
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
									<table class="table table-bordered" id="tb_inputExtra_RateView">
										<thead>
											<tr class="borderBlack">
												<th class="text-center bg-primary borderBlack">EM</th>
												<th class="text-center bg-primary borderBlack">Term</th>
												<th class="text-center bg-primary borderBlack">Sex</th>
												<th class="text-center bg-primary borderBlack">Min Age</th>
												<th class="text-center bg-primary borderBlack">Max Age</th>
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
											id="download_tb_inputExtra_RateView">ดาวน์โหลด</button>										
									</div>
									<div class="col-md-8 text-right">
										<button type="button" class="btn btn-primary" data-dismiss="modal">&nbsp;&nbsp;&nbsp;&nbsp;ปิด&nbsp;&nbsp;&nbsp;&nbsp;</button>
									</div>
									<div class="col-md-2"></div>
								</div>
							</div>
						</div>
					</div>
				</div>	
	
	<!-- dialog ตาราง เบี้ยเพิ่มพิเศษ ต่อทุน 10 k และ ต่อทุน 100k  -->
	<div class="modal fade" id="modal_ExtraRateAuto_CL" role="dialog">
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
						<table class="table table-bordered" id="tbl_ExtraRatePlanAuto_CL">
							<thead>
								<tr style="background-color: #EEEEEE;">
									<th class="text-center">EM</th>
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
							<button type="button" class="btn btn-primary" data-dismiss="modal" id="btn_submit_ExtraRatePlanAuto">&nbsp;&nbsp;บันทึก&nbsp;&nbsp;</button></div>
						<div class="col-md-8 text-right">
							<button type="button" class="btn btn-primary" data-dismiss="modal" id="btn_cancel_ExtraRatePlanAuto">&nbsp;&nbsp;ยกเลิก&nbsp;&nbsp;</button>
						</div>
						<div class="col-md-2"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- กดดูค่า ตารางเบี้ยเพิ่มพิเศษ dialog icon eye 10k and 100k -->
	<div class="modal fade" id="modal_ExtraRate_CL" role="dialog">
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
						<table class="table table-bordered" id="tbl_ExtraRatePlan_CL">
							<thead>
								<tr style="background-color: #EEEEEE;">
									<th class="text-center">EM</th>
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
							<button type="button" class="btn btn-primary" id="download_tbl_ExtraRatePlan_CL">ดาวน์โหลด</button></div>
						<div class="col-md-8 text-right">
							<button type="button" class="btn btn-primary" data-dismiss="modal">&nbsp;&nbsp;&nbsp;&nbsp;ปิด&nbsp;&nbsp;&nbsp;&nbsp;</button>
						</div>
						<div class="col-md-2"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
			<!-- ปุ่ม ยกเลิก -->
		<div id="modal_Cancel_Menu3" class="modal fade bd-example-modal-sm"
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
						<button type="button" class="btn btn-primary" onclick="cancelPage('rider_plan.jsp');">ยืนยัน</button>
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
</form>
	<!-- hidden value -->
	<input type="hidden" id="PMrate_type_CL" value="">
	<input type="hidden" id="rateCat_tbStardard" value=""/>
	<input type="hidden" id="rateCat_tbStardard_age" value=""/>
	
	<input type="hidden" id="rateCat_tbExtra" value=""/>
	<input type="hidden" id="rateCat_inputEM" value=""/>
	<input type="hidden" id="rateSubCat_inputEM" value=""/>
	<input type="hidden" id="pattern_inputEM" value=""/>
	
</body>
</html>