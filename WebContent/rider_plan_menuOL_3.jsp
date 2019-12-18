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
		<div class="row box-body" id="div_main_menuOL_3">
		<input type="hidden" name="baseplanCode_OL" id="baseplanCode_OL" value=""/>
		<input type="hidden" name="riderCode_OL" id="riderCode_OL" value=""/>
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
								<div class="col-sm-12 input-group">
									<input type="checkbox" id="ch_insurance_premium_ageBand_ol">
									<label for="ch_insurance_premium_ageBand_ol">Age Band</label>
								</div>
							</div>
						</div>
						<div class="text-center" style="padding: 10px 0"></div>
						<div class="row">
							<div id="div_Age_Band_OL">
								<table class="table table-striped table-bordered text-center" width="100%" id="tb_Age_Band_OL">
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
								<div class="col-sm-12 input-group">
									<input type="checkbox" id="ch_standard_premium_ol">
									<label for="ch_standard_premium_ol">เบี้ยมาตรฐาน</label>
								</div>
							</div>
						</div>
						<div class="text-center" style="padding: 10px 0"></div>
						<div class="row">
							<div class="col-sm-1"></div>
							<div class="col-sm-10">
								<table style="margin:0 0 10px 0;">
									<tr>
										<td valign="middle"><input type="radio" id="ch_Base_rate_OL" disabled="disabled"></td>
										<td valign="middle" style="padding-left:10px; "><label for="ch_Base_rate_OL">อัตราเบี้ยพื้นฐาน</label></td>
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
									id="sl_menu3_insurance_premium_ol">
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
								<input type="hidden" id="old_PMrate_OL">
								<input type="hidden" id="new_PMrate_OL">
								<div class="col-sm-12 paddingleft0 scroll_div_tbl1" id="divtb_PM_Rate1_OL">
												<table class="table table-striped table-bordered text-center"
													width="100%" id="tb_PM_Rate1_OL">
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
													</tbody>
												</table>
											</div>
								</td>
							</tr>
							<tr>
								<td colspan="10">
									<div class="text-right col-sm-12">
										<div class="col-md-2" style="padding-right: 0">
											<input class="btn btn-primary width100" type="button" id = "addrowPM_Rate_OL"
												value="เพิ่ม" onclick="addRowPM_Rate_OL();">
										</div>
										<div class="col-md-2" style="padding-right: 0">
											<input class="btn btn-primary width100" type="button" id = "delrowPM_Rate_OL"
												value="ลบ" onclick="deleteRowPM_Rate_OL();">
										</div>
										<div class="col-md-8"></div>
									</div>
								</td>
							</tr>
							<tr>
								<td colspan="2">
								<div class="text-center" style="padding: 10px 0"></div>
								<label><b>อัตราเบี้ยฯเพิ่มตามชั้นอาชีพ</b></label>
								</td>
							</tr>
							<tr>
								<td colspan="10">
									<table class="table table-bordered margin_bottom_0px" style="width:80%" id="tb_premiumLevel_OL">
									<thead>
										<tr>											
											<th width="15%" class="text-center verticalCenter bg-primary borderBlack" rowspan="2">ชั้นอาชีพ</th>
											<th width="30%" class="text-center verticalCenter bg-primary borderBlack" colspan="2">เบี้ยเพิ่ม (%)</th>																						
											<th width="25%" class="text-center verticalCenter bg-primary borderBlack" rowspan="2">Max per SA (บาท)<br>(SA=1000)</th>																					
										</tr>
										<tr>
											<th width="15%" class="text-center verticalCenter bg-primary borderBlack">ตั้งแต่</th>										
											<th width="15%" class="text-center verticalCenter bg-primary borderBlack">ถึง</th>																			
										</tr>
									</thead>
									<tbody>
									<!-- <tr>
										<td class="text-center verticalCenter borderBlack">
											<label class="font-bold">2</label>
										</td>
										<td class="text-center verticalCenter borderBlack">
											<input type="text" class="auto text-right form-control" data-v-min="0.00" data-v-max="999.99" maxlength="5" value="">
										</td>
										<td class="text-center verticalCenter borderBlack">
											<input type="text" class="auto text-right form-control" data-v-min="0.00" data-v-max="999.99" maxlength="5" value="">
										</td>
										<td class="text-center verticalCenter borderBlack">
											<input type="text" class="auto text-right form-control" data-v-min="0.00" data-v-max="999999999.99" value="">
										</td>
									</tr>
									<tr>
										<td class="text-center verticalCenter borderBlack">
											<label class="font-bold">3</label>
										</td>
										<td class="text-center verticalCenter borderBlack">
											<input type="text" class="auto text-right form-control" data-v-min="0.00" data-v-max="999.99" maxlength="5" value="">
										</td>
										<td class="text-center verticalCenter borderBlack">
											<input type="text" class="auto text-right form-control" data-v-min="0.00" data-v-max="999.99" maxlength="5" value="">
										</td>
										<td class="text-center verticalCenter borderBlack">
											<input type="text" class="auto text-right form-control" data-v-min="0.00" data-v-max="999999999.99" value="">
										</td>
									</tr>
									<tr>
										<td class="text-center verticalCenter borderBlack">
											<label class="font-bold">4</label>
										</td>
										<td class="text-center verticalCenter borderBlack">
											<input type="text" class="auto text-right form-control" data-v-min="0.00" data-v-max="999.99" maxlength="5" value="">
										</td>
										<td class="text-center verticalCenter borderBlack">
											<input type="text" class="auto text-right form-control" data-v-min="0.00" data-v-max="999.99" maxlength="5" value="">
										</td>
										<td class="text-center verticalCenter borderBlack">
											<input type="text" class="auto text-right form-control" data-v-min="0.00" data-v-max="999999999.99" value="">
										</td>
									</tr> -->
									<tr>
										<td class="text-center verticalCenter borderBlack">
											<label class="font-bold">2</label>
										</td>
										<td class="text-center verticalCenter borderBlack">
											<input type="text" id="datefromLevel_OL1" class="auto text-right form-control" onblur="checkFromToLevel_OL(1);" data-v-min="0.00" data-v-max="999.99" maxlength="5" value="">
										</td>
										<td class="text-center verticalCenter borderBlack">
											<input type="text" id="datetoLevel_OL1" class="auto text-right form-control" onblur="checkFromToLevel_OL(1);" onkeypress="validate_zero_ToLevel_OL(1);" onkeyup="validate_zero_ToLevel_OL(1);" data-v-min="0.00" data-v-max="999.99" maxlength="5" value="">
										</td>
										<td class="text-center verticalCenter borderBlack">
											<input type="text" class="auto text-right form-control" data-v-min="0.00" data-v-max="999999999.99" value="">
										</td>
									</tr>
									<tr>
										<td class="text-center verticalCenter borderBlack">
											<label class="font-bold">3</label>
										</td>
										<td class="text-center verticalCenter borderBlack">
											<input type="text" id="datefromLevel_OL2" class="auto text-right form-control" onblur="checkFromToLevel_OL(2);" data-v-min="0.00" data-v-max="999.99" maxlength="5" value="">
										</td>
										<td class="text-center verticalCenter borderBlack">
											<input type="text" id="datetoLevel_OL2" class="auto text-right form-control" onblur="checkFromToLevel_OL(2);" onkeypress="validate_zero_ToLevel_OL(2);" onkeyup="validate_zero_ToLevel_OL(2);" data-v-min="0.00" data-v-max="999.99" maxlength="5" value="">
										</td>
 										<td class="text-center verticalCenter borderBlack">
											<input type="text" class="auto text-right form-control" data-v-min="0.00" data-v-max="999999999.99" value="">
										</td>
									</tr>
									<tr>
										<td class="text-center verticalCenter borderBlack">
											<label class="font-bold">4</label>
										</td>
										<td class="text-center verticalCenter borderBlack">
											<input type="text" id="datefromLevel_OL3" class="auto text-right form-control" onblur="checkFromToLevel_OL(3);" data-v-min="0.00" data-v-max="999.99" maxlength="5" value="">
										</td>
										<td class="text-center verticalCenter borderBlack">
											<input type="text" id="datetoLevel_OL3" class="auto text-right form-control" onblur="checkFromToLevel_OL(3);" onkeypress="validate_zero_ToLevel_OL(3);" onkeyup="validate_zero_ToLevel_OL(3);" data-v-min="0.00" data-v-max="999.99" maxlength="5" value="">
										</td>
										<td class="text-center verticalCenter borderBlack">
											<input type="text" class="auto text-right form-control" data-v-min="0.00" data-v-max="999999999.99" value="">
										</td>
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
											<input type="checkbox" id="ch_importInsurance_ol" onclick="importInsurance_ol ();"> <label for="ch_importInsurance_ol">มีส่วนลดเบี้ยประกัน</label>
										</div>
										<div class="col-sm-8">
											<div class="col-sm-3">
												<input type="text" class="auto text-right form-control"
													id="discountInsurancePremiumsSta_ol" value="0.00" onblur="checkvaluePremiumsSta_PM_Rate_OL();"
													data-v-min="0.00" data-v-max="999.99">
											</div>
											<div class="col-sm-1">
												<label>-</label>
											</div>
											<div class="col-sm-3">
												<input type="text" class="auto text-right form-control"
													id="discountInsurancePremiumsTo_ol" value="0.00" onblur="checkvaluePremiumsTo_PM_Rate_OL();"
													data-v-min="0.00" data-v-max="999.99">
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
									<div class="col-sm-10 marginleft_style9" id="div_fileCal3_OL"></div>
									<div class="col-md-2">
										<button type="button" class="btn btn-primary text-center" id="dsc_Input_ol" disabled>&nbsp;&nbsp;&nbsp;ดูค่า&nbsp;&nbsp;&nbsp;</button>
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
								<div class="col-sm-12 input-group">
									<input type="checkbox" id="ch_insurance_premium_Extra_ol">
									<label for="ch_insurance_premium_Extra_ol">เบี้ยเพิ่มพิเศษ</label>
								</div>
							</div>
						</div>
						<div class="text-center" style="padding: 10px 0"></div>						
						<div class="row">
							<div class="col-sm-1"></div>
							<div class="col-sm-10">
								<table class="table borderless">
									<tr class="col-sm-9 paddingleft0">
										<td><label>ตารางเบี้ยประกัน</label></td>
										<td><select class="form-control"
											id="sl_insurance_premium_Extra_ol" disabled="disabled">
												<option value="">None</option>
												<!-- <option value="1">ต่อทุน 10,000บาท</option>
												<option value="2">ต่อทุน 100,000บาท</option> -->
										</select></td>
									</tr>
									<tr>
										<td colspan="2"><label>นำเข้า Extra_Rate</label></td>
									</tr>
									<tr>
										<td colspan="10">
											<div class="col-sm-12 paddingleft0" id ="div_TB_Extra_Rate_OL">
												<table class="table table-striped table-bordered text-center"
													width="100%" id="tb_Extra_Rate_OL">
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
											id="min_EM_ol" onblur="checkvalueMin_EM_OL();" disabled="disabled"></td>
										<td><label>%</label></td>
										<td><label>MAX_EM</label></td>
										<td><input type="text" class="auto text-right form-control"
											data-v-min="0.00" data-v-max="999.99" maxlength="5" value="0.00"
											id="max_EM_ol" disabled="disabled" onblur="checkvalueMax_EM_OL();"></td>
										<td><label>%</label></td>
									</tr>
									<tr class="col-sm-9">
										<td><label>นำเข้า ตารางช่วงอายุที่รับเบี้ยเพิ่ม</label></td>
									</tr>
									<tr class="col-sm-12 paddingleft0">
										<td>
											<div class="col-sm-10" id="div_fileCal1_OL"></div>
											<div class="col-md-2">
												<button type="button" class="btn btn-primary text-center"
													id="cv_InputExtra_Rate_ol">ดูค่า</button>
											</div>
										</td>
									</tr>
								</table>
							</div>
						</div>
					</div>
					
					<!-- NAR -->
					<div class="panel panel-primary">
					 <div class="row">
							<div class="col-md-12 panel_head_blue">
								<div class="col-sm-12 input-group">
									<input type="checkbox" id="ch_NAR_ol"> 
									<label for="ch_NAR_ol">NAR</label>
								</div>
							</div>
						</div>
						<div class="text-center" style="padding: 10px 0"></div>	
						<div class="row">
							<div class="col-sm-1"></div>
							<div class="col-sm-10">
								<table class="table borderless">
									<tr class="col-sm-9 paddingleft0">
										<td><label>ตาราง NAR</label></td>
										<td><select class="form-control"
											id="sl_NAR_OL" style="width:200px;" disabled="disabled">
												<option value="NONE">None</option>
										</select></td>
									</tr>
									<tr class="col-sm-9 paddingleft0">
										<td><label>นำเข้า NAR_Rate</label></td>
									</tr>
									<tr class="col-sm-12 paddingleft0">
										<td>
											<div class="col-sm-10" id="div_fileCal4_OL"></div>
											<div class="col-md-2">
												<button type="button" class="btn btn-primary text-center" id="cv_NAR_Rate_ol" disabled>ดูค่า</button>
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
									onclick="bt_Menu3_Confirm_OL();">บันทึก</button>
							</div>
							<div class="col-md-5">
								<button type="button" class="btn btn-primary width100"
									data-toggle="modal" data-target="#modal_Cancel_Menu3_OL" >ยกเลิก</button>
							</div>
						</div>
					</div>
				</div>		
				
		</div>
		</div>
		
		<!-- end panel body -->
		

		<!-- MODAL -->
	<div class="modal fade" id="modal_PMRateAuto_OL" role="dialog">
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
						<table class="table table-bordered" id="tbl_PMRatePlanAuto_OL">
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
							<button type="button" class="btn btn-primary" data-dismiss="modal" id="btn_submit_PMRatePlanAuto_OL">&nbsp;&nbsp;บันทึก&nbsp;&nbsp;</button></div>
						<div class="col-md-8 text-right">
							<button type="button" class="btn btn-primary" data-dismiss="modal" id="btn_cancel_PMRatePlanAuto_OL">&nbsp;&nbsp;ยกเลิก&nbsp;&nbsp;</button>
						</div>
						<div class="col-md-2"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<!-- 4 cols -->		
	<div class="modal fade" id="modal_PMRate4ColAuto_OL" role="dialog">
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
						<table class="table table-bordered" id="tbl_PMRatePlan4ColAuto_OL">
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
							<button type="button" class="btn btn-primary" data-dismiss="modal" id="btn_submit_PMRatePlan4ColAuto_OL">&nbsp;&nbsp;บันทึก&nbsp;&nbsp;</button></div>
						<div class="col-md-8 text-right">
							<button type="button" class="btn btn-primary" data-dismiss="modal" id="btn_cancel_PMRatePlan4ColAuto_OL">&nbsp;&nbsp;ยกเลิก&nbsp;&nbsp;</button>
						</div>
						<div class="col-md-2"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
		
	<!-- popup ตอนกดดูค่า -->
	<div class="modal fade" id="modal_PMRate_OL" role="dialog">
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
						<table class="table table-bordered" id="tbl_PMRatePlan_OL">
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
							<button type="button" class="btn btn-primary" id="download_tbl_PMRate_OL">ดาวน์โหลด</button></div>
						<div class="col-md-8 text-right">
							<button type="button" class="btn btn-primary" data-dismiss="modal">&nbsp;&nbsp;&nbsp;&nbsp;ปิด&nbsp;&nbsp;&nbsp;&nbsp;</button>
						</div>
						<div class="col-md-2"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<!-- 4 cols -->
	<div class="modal fade" id="modal_PMRate4Col_OL" role="dialog">
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
						<table class="table table-bordered" id="tbl_PMRatePlan4Col_OL">
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
							<button type="button" class="btn btn-primary" id="download_tbl_PMRatePlan4Col_OL">ดาวน์โหลด</button></div>
						<div class="col-md-8 text-right">
							<button type="button" class="btn btn-primary" data-dismiss="modal">&nbsp;&nbsp;&nbsp;&nbsp;ปิด&nbsp;&nbsp;&nbsp;&nbsp;</button>
						</div>
						<div class="col-md-2"></div>
					</div>
				</div>
			</div>
		</div>
	</div>	
	
	<!-- เบี้ยเพิ่มพิเศษ -->
	<div class="modal fade" id="modal_ExtraRateAuto_OL" role="dialog">
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
						<table class="table table-bordered" id="tbl_ExtraRatePlanAuto_OL">
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
							<button type="button" class="btn btn-primary" data-dismiss="modal" id="btn_submit_ExtraRatePlanAuto_OL">&nbsp;&nbsp;บันทึก&nbsp;&nbsp;</button></div>
						<div class="col-md-8 text-right">
							<button type="button" class="btn btn-primary" data-dismiss="modal" id="btn_cancel_ExtraRatePlanAuto_OL">&nbsp;&nbsp;ยกเลิก&nbsp;&nbsp;</button>
						</div>
						<div class="col-md-2"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<!-- กดดูค่า -->
	<div class="modal fade" id="modal_ExtraRate_OL" role="dialog">
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
						<table class="table table-bordered" id="tbl_ExtraRatePlan_OL">
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
							<button type="button" class="btn btn-primary" id="download_tbl_ExtraRatePlan_OL">ดาวน์โหลด</button></div>
						<div class="col-md-8 text-right">
							<button type="button" class="btn btn-primary" data-dismiss="modal">&nbsp;&nbsp;&nbsp;&nbsp;ปิด&nbsp;&nbsp;&nbsp;&nbsp;</button>
						</div>
						<div class="col-md-2"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<!-- MODAL นำเข้า ตารางอายุที่รับเบี้ยเพิ่ม-->
				<div class="modal fade" id="modal_inputExtra_RateAuto_OL" role="dialog">
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
									<table class="table table-bordered" id="tb_inputExtra_RateAuto_OL">
										<thead>
											<tr class="borderBlack">
												<th class="text-center bg-primary borderBlack">EM</th>
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
										<button type="button" class="btn btn-primary" data-dismiss="modal" id="save_inputExtra_Rate_OL">&nbsp;&nbsp;บันทึก&nbsp;&nbsp;</button></div>
									<div class="col-md-8 text-right">
										<button type="button" class="btn btn-primary" data-dismiss="modal" id="btn_cancel_PMRatePlan4ColAuto_OL">&nbsp;&nbsp;ยกเลิก&nbsp;&nbsp;</button>
									</div>
									<div class="col-md-2"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<!-- MODAL ดูค่า -->
				<div class="modal fade" id="modal_inputExtra_RateView_OL" role="dialog">
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
									<table class="table table-bordered" id="tb_inputExtra_RateView_OL">
										<thead>
											<tr class="borderBlack">
												<th class="text-center bg-primary borderBlack">EM</th>
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
											 id="download_tb_inputExtra_RateView_OL">ดาวน์โหลด</button>										
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
				
				<!-- MODAL นำเข้า NAR_Rate-->
				<div class="modal fade" id="modal_inputNAR_OL_RateAuto" role="dialog">
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
									<table class="table table-bordered" id="tb_inputNAR_OL_RateAuto">
										<thead>
											<tr class="borderBlack">
												<th class="text-center bg-primary borderBlack">Plan</th>
												<th class="text-center bg-primary borderBlack">Sex</th>
												<th class="text-center bg-primary borderBlack">Age</th>
												<th class="text-center bg-primary borderBlack">t</th>
												<th class="text-center bg-primary borderBlack">AmtRe</th>
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
										<button type="button" class="btn btn-primary" data-dismiss="modal" id="save_inputNAR_OL_Rate">&nbsp;&nbsp;บันทึก&nbsp;&nbsp;</button></div>
									<div class="col-md-8 text-right">
										<button type="button" class="btn btn-primary" data-dismiss="modal" id="btn_cancel_PMRatePlan4ColAuto_OL">&nbsp;&nbsp;ยกเลิก&nbsp;&nbsp;</button>
									</div>
									<div class="col-md-2"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<!-- ดูค่า NAR -->
				<div class="modal fade" id="modal_inputNAR_OL_Rate" role="dialog">
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
									<table class="table table-bordered" id="tb_inputNAR_OL_Rate">
										<thead>
											<tr class="borderBlack">
												<th class="text-center bg-primary borderBlack">Plan</th>
												<th class="text-center bg-primary borderBlack">Sex</th>
												<th class="text-center bg-primary borderBlack">Age</th>
												<th class="text-center bg-primary borderBlack">t</th>
												<th class="text-center bg-primary borderBlack">AmtRe</th>
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
										<button type="button" class="btn btn-primary"
											id="download_tb_inputNAR_OL_Rate">ดาวน์โหลด</button>
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

			<!-- MODAL นำเข้า DIS SA-->
				<div class="modal fade" id="modal_inputDisSA_OL_RateAuto" role="dialog">
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
									<table class="table table-bordered" id="tb_inputDisSA_OL_RateAuto">
										<thead>
											<tr class="borderBlack">
												<th class="text-center bg-primary borderBlack">Plan</th>
												<th class="text-center bg-primary borderBlack">SA</th>
												<th class="text-center bg-primary borderBlack">Age</th>
												<th class="text-center bg-primary borderBlack">Mode</th>
												<th class="text-center bg-primary borderBlack">Discount</th>
											</tr>
										</thead>
										<tbody>
										</tbody>
									</table>
								</div>
								<div class="text-center" style="padding: 10px 0"></div>
								<div class="row">
									<div class="col-md-4">
										<button type="button" class="btn btn-primary" data-dismiss="modal" id="save_inputDisSA_OL_Rate">&nbsp;&nbsp;บันทึก&nbsp;&nbsp;</button></div>
									<div class="col-md-8 text-right">
										<button type="button" class="btn btn-primary" data-dismiss="modal" id="btn_cancel_DisSAAuto_OL">&nbsp;&nbsp;ยกเลิก&nbsp;&nbsp;</button>
									</div>
									<div class="col-md-2"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<!-- ดูค่า DIS SA -->
				<div class="modal fade" id="modal_inputDisSA_OL_Rate" role="dialog">
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
									<table class="table table-bordered" id="tb_inputDisSA_OL_Rate">
										<thead>
											<tr class="borderBlack">
												<th class="text-center bg-primary borderBlack">Plan</th>
												<th class="text-center bg-primary borderBlack">SA</th>
												<th class="text-center bg-primary borderBlack">Age</th>
												<th class="text-center bg-primary borderBlack">Mode</th>
												<th class="text-center bg-primary borderBlack">Discount</th>
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
											 id="download_tb_inputDisSA_OL_Rate">ดาวน์โหลด</button>
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
				
				<!-- check None -->
				<div id="modal_CheckNone_Menu3_OL" class="modal fade bd-example-modal-sm"
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
							<label>เคยนำเข้าไฟล์&nbsp;</label><label id="textTop5_OL"></label><label>&nbsp;ไว้แล้ว&nbsp;ต้องการเปลี่ยน</label><label id="textTop6_OL"></label><label>&nbsp;ใช่ หรือ ไม่</label>
							
						</div>
						<div class="text-center" style="padding: 10px 0"></div>
						<div class="row">
							<div class="col-md-4"></div>
							<div class="col-md-2">
								<button type="button" class="btn btn-primary" id = "menu3_Confirm_ol"
									onclick="bt_Menu3_Confirm_ol()">ยืนยัน</button>
							</div>
							<div class="col-md-2">
								<button type="button" class="btn btn-primary"
									 id="cancel_CheckNone_Menu3_OL">ยกเลิก</button>
							</div>
							<div class="col-md-4"></div>
						</div>
						<div class="text-center" style="padding: 10px 0"></div>
					</div>
				</div>
			</div>
				<!-- check None -->
				<div id="modal_CheckNone_Menu4_OL" class="modal fade bd-example-modal-sm"
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
							<label>เคยนำเข้าไฟล์&nbsp;</label><label id="textTop7_OL"></label><label>&nbsp;ไว้แล้ว&nbsp;ต้องการเปลี่ยน</label><label id="textTop8_OL"></label><label>&nbsp;ใช่ หรือ ไม่</label>
							
						</div>
						<div class="text-center" style="padding: 10px 0"></div>
						<div class="row">
							<div class="col-md-4"></div>
							<div class="col-md-2">
								<button type="button" class="btn btn-primary" id = "menu3_Confirm_ol2"
									onclick="bt_Menu3_Confirm_ol2()">ยืนยัน</button>
							</div>
							<div class="col-md-2">
								<button type="button" class="btn btn-primary"
									 id="cancel_CheckNone_Menu4_OL">ยกเลิก</button>
							</div>
							<div class="col-md-4"></div>
						</div>
						<div class="text-center" style="padding: 10px 0"></div>
					</div>
				</div>
			</div>
			
<!-- ปุ่ม ยกเลิก -->
		<div id="modal_Cancel_Menu3_3_OL" class="modal fade bd-example-modal-sm"
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
				
	<!-- modal แจ้งเตือน -->		
	<div class="modal fade" id="modal_value_warning_OL" role="dialog">
		<div class="modal-dialog">

			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header" style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">เเจ้งเตือน</h4>
				</div>
				
				<div class="modal-body">
					<div class="row">
						<p class="text-center" id="txt_value_alert_error_OL">ไม่พบข้อมูล</p>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row">
						<div class="col-md-4"></div>
						<div class="col-md-4">
							<div class="col-md-6">
								<button type="button" class="btn btn-primary"
									data-dismiss="modal" id="btn_value_warning_submit_OL">ยืนยัน</button>
							</div>
							<div class="col-md-6">
								<button type="button" class="btn btn-primary"
									id="btn_value_warning_cancel_OL">ยกเลิก</button>
							</div>
						</div>
						<div class="col-md-2"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<!-- modal แจ้งเตือน2 -->
	<div class="modal fade" id="modal_value_warning2_OL" role="dialog">
		<div class="modal-dialog">

			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header" style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">เเจ้งเตือน</h4>
				</div>
				
				<div class="modal-body">
					<div class="row">
						<p class="text-center" id="txt_value_alert_error2_OL">ไม่พบข้อมูล</p>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row">
						<div class="col-md-4"></div>
						<div class="col-md-4">
							<div class="col-md-6">
								<button type="button" class="btn btn-primary"
									data-dismiss="modal" id="btn_value_warning_submit2_OL">ยืนยัน</button>
							</div>
							<div class="col-md-6">
								<button type="button" class="btn btn-primary"
									id="btn_value_warning_cancel2_OL">ยกเลิก</button>
							</div>
						</div>
						<div class="col-md-2"></div>
					</div> 
				</div>
			</div>
		</div>
	</div>
	
	<!-- modal แจ้งเตือน3 -->
	<div class="modal fade" id="modal_value_warning3_OL" role="dialog">
		<div class="modal-dialog">

			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header" style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">เเจ้งเตือน</h4>
				</div>
				
				<div class="modal-body">
					<div class="row">
						<p class="text-center" id="txt_value_alert_error3_OL">ไม่พบข้อมูล</p>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row">
						<div class="col-md-4"></div>
						<div class="col-md-4">
							<div class="col-md-6">
								<button type="button" class="btn btn-primary"
									data-dismiss="modal" id="btn_value_warning_submit3_OL">ยืนยัน</button>
							</div>
							<div class="col-md-6">
								<button type="button" class="btn btn-primary"
									data-dismiss="modal" id="btn_value_warning_cancel3_OL">ยกเลิก</button>
							</div>
						</div>
						<div class="col-md-2"></div>
					</div> 
				</div>
			</div>
		</div>
	</div>	
	
	 <!-- ปุ่ม ยกเลิก -->
	<div id="modal_Cancel_Menu3_OL" class="modal fade bd-example-modal-sm"
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
	<input type="hidden" id="PMrate_type_OL" value="">
	<input type="hidden" id="rateCat_tbStardard_OL" value=""/>
	<input type="hidden" id="rateCat_tbStardard_age_OL" value=""/>
	
	<input type="hidden" id="rateCat_tbExtra_OL" value=""/>
	<input type="hidden" id="rateCat_inputEM_OL" value=""/>
	<input type="hidden" id="rateSubCat_inputEM_OL" value=""/>
	
	<input type="hidden" id="rateCat_inputDisSA_OL" value=""/>
	<input type="hidden" id="rateSubCat_inputDisSA_OL" value=""/>
	
	<input type="hidden" id="rateCat_inputNAR_OL" value=""/>
	<input type="hidden" id="rateSubCat_inputNAR_OL" value=""/>
	
</body>
</html>