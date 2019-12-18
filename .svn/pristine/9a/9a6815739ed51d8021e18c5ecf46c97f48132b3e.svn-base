<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>ตารางมูลค่ากรมธรรม์</title>
</head>
<body>
	<div id="mainRisk_OL" class="row box-body">
		<div class="panel panel-primary">
			<div class="panel-heading text-left">
				<p class="margin0 text-center">ตารางมูลค่ากรมธรรม์</p>
			</div>
			<div class="panel-body">
				<input type="hidden" name="baseplanCode_OL" id="baseplanCode_OL" value=""/>
				<input type="hidden" name="surrender_OL" id="surrender_OL" value=""/>
				<div class="panel panel-primary">				
					<div class="row">
						<div class="col-md-12 panel_head_blue">
							<div class="col-sm-12 input-group" id="risk_OL">
									<input type="checkbox" id="cbBox1_OL" onclick="displayPolicyValueOL(1);"> 
									<label for="cbBox1_OL">ความเสี่ยงภัยมาตรฐาน</label>
							</div>
						</div>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row">
						<div class="col-md-1"></div>
						<div class="col-md-3">
							<p class="text-left" style="padding-top: 5px;">ตารางมูลค่ากรมธรรม์ <font id="validate_dd_file1_OL" style="color: red;">*</font></p>
						</div>
						<div class="col-md-5">
							<input type="hidden" id="select_hidden_value_old1_OL">
							<input type="hidden" id="select_hidden_value_new1_OL">
							<select class="form-control" id="dbBox1_OL" disabled>
								<option value="">None</option>																						
							</select>
						</div>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row">
						<div class="col-sm-1"></div>
						<div class="col-sm-10"><label>นำเข้า CV</label>&nbsp;&nbsp;<span class="errorFont" id="CVFile_validate_CL">(กรุณานำเข้าไฟล์อย่างน้อย 1 ไฟล์)</span></div>
						
						
						<div id="div_cv_risk1_OL" class="scroll_div_tbl1">
									<table class="table table-striped table-bordered text-center"
											width="100%" id="tb_RateValue1_OL">
										<thead>
											<tr>
												<!-- <th width="5%" class="text-center bg-primary borderBlack"></th> -->
												<th width="15%" class="text-center bg-primary borderBlack vertical-middle">ประเภท</th>
												<th width="70%" class="text-center bg-primary borderBlack vertical-middle">CV</th>
												<th width="8%" class="text-center bg-primary borderBlack vertical-middle">ดูค่า</th>
												<th width="10%" class="text-center bg-primary borderBlack vertical-middle">ดาวน์<br>โหลด
												</th>
											</tr>
										</thead>
										<tbody>									
										</tbody>
							</table>
						</div>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
				</div>

				<!-- group2 -->
				<div class="panel panel-primary" id="panel_noriskOL">
					<div class="row">
						<div class="col-md-12 panel_head_blue">
							<div class="col-sm-12 input-group" id="norisk_OL">
									<input type="checkbox" id="cbBox2_OL" onclick="displayPolicyValueOL(2);"> 
									<label for="cbBox2_OL">ความเสี่ยงภัยต่ำกว่ามาตรฐาน</label>
							</div>
						</div>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row">
						<div class="col-md-1"></div>
						<div class="col-md-3">
							<p class="text-left" style="padding-top: 5px;">ตารางมูลค่ากรมธรรม์ <font id="validate_dd_file2_OL" style="color: red;">*</font></p>
						</div>
						<div class="col-md-5">
						   <input type="hidden" id="select_hidden_value_old2_OL">
						   <input type="hidden" id="select_hidden_value_new2_OL">
							<select class="form-control" id="dbBox2_OL" disabled>
								<option value="">None</option>					
							</select>
						</div>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row" id="row_cvLow_file_OL">
						<div class="col-md-1"></div>
						<div class="col-md-8">							
							<div class="input-group" id="div_file2_OL"></div>
						</div>
						<div class="col-md-2 text-right">
							<button class="btn btn-primary text-center" id="cv2_OL"
								data-toggle="modal" disabled>ดูค่า CV</button>
						</div>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
				</div>

				<!------ group3 ------>
				<div class="panel panel-primary" id="RPU_OL">
					<div class="row">
						<div class="col-md-12 panel_head_blue">
							<div class="col-sm-12 input-group">
									<input type="checkbox" id="cbBox3_OL" onclick="displayPolicyValueOL(3);"> 
									<label for="cbBox3_OL">ตารางมรณะสำหรับคำนวณปิดบัญชี(RPU/ETI)</label>
							</div>
						</div>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row">
						<div class="col-md-1"></div>
						<div class="col-md-3 text-left">
							<input type="radio" name="tablePolicyOL" id="tablePolicy1_OL"
								onclick="changeDisplayBenefit005_OL(1);" checked disabled>&nbsp;<label for="tablePolicy1_OL">ตารางที่มีอยู่แล้ว</label>
						</div>
						<div class="col-md-3 text-left">
							<input type="radio" name="tablePolicyCL" id="tablePolicy2_OL"
								onclick="changeDisplayBenefit005_OL(2);" disabled>&nbsp;<label for="tablePolicy2_OL">ตารางใหม่</label>
						</div>
					</div>

					<div class="text-center" style="padding: 10px 0">
					</div>
					<div id="oldTable_OL">
						<div>
							<div class="col-md-1"></div>
							<div class="col-md-10" style="border: 1px groove blue;">
								<div class="text-center" style="padding: 10px 0"></div>
								<div class="row">
									<div class="col-md-4">
										<h4>แบบ RPU</h4>
									</div>
								</div>
								<div class="row">
									<div class="col-md-1"></div>
									<div class="col-md-4">
										<select class="form-control" id="dbBox3_1_OL" disabled>
											<option value="0">ปี พศ (group by)</option>
										</select>
									</div>
									<div class="col-md-4">
										<select class="form-control" id="dbBox3_2_OL" onchange="getFile_ETI_RPU_OL(this.id);" disabled>
											<option value="0" data-ref="" data-file="">RPU_MALE</option>
										</select>
									</div>
									<div class="col-md-2">
										<button class="btn btn-primary" id="tmo1_OL" disabled>ดูค่า TMO</button>
									</div>
								</div>
								<div class="text-center" style="padding: 10px 0"></div>
								<div class="row" style="padding-bottom: 20px;">
									<div class="col-md-5"></div>
									<div class="col-md-4">
										<select class="form-control" id="dbBox3_3_OL" onchange="getFile_ETI_RPU_OL(this.id);" disabled>
											<option value="0" data-ref="" data-file="">RPU_FEMALE</option>
										</select>
									</div>
									<div class="col-md-2">
										<button class="btn btn-primary" id="tmo2_OL" disabled>ดูค่า TMO</button>
									</div>
								</div>
							</div>


						</div>
						<div class="row"></div>
						<div>
							<div class="col-md-1"></div>
							<div class="col-md-10"
								style="border: 1px groove blue; margin-top: 15px;">
								<div class="text-center" style="padding: 10px 0"></div>
								<div class="row">									
									<div class="col-md-4">
										<h4>แบบ ETI</h4>
									</div>
								</div>
								<div class="row">
									<div class="col-md-1"></div>
									<div class="col-md-4">
										<select class="form-control" id="dbBox3_4_OL" disabled>
											<option value="0">ปี พศ (group by)</option>
										</select>
									</div>
									<div class="col-md-4">
										<select class="form-control" id="dbBox3_5_OL" onchange="getFile_ETI_RPU_OL(this.id);" disabled>
											<option value="0" data-ref="" data-file="">ETI_MALE</option>
										</select>
									</div>
									<div class="col-md-2">
										<button class="btn btn-primary" id="tmo3_OL" disabled>ดูค่า TMO</button>
									</div>
								</div>
								<div class="text-center" style="padding: 10px 0"></div>
								<div class="row" style="padding-bottom: 20px">
									<div class="col-md-5"></div>
									<div class="col-md-4">
										<select class="form-control" id="dbBox3_6_OL" onchange="getFile_ETI_RPU_OL(this.id);" disabled>
											<option value="0" data-ref="" data-file="">ETI_FEMALE</option>
										</select>
									</div>
									<div class="col-md-2">
										<button class="btn btn-primary" id="tmo4_OL" disabled>ดูค่า TMO</button>
									</div>
								</div>
							</div>
							<div class="text-center" style="padding: 70px 0"></div>
						</div>
						<div class="row"></div>

					</div>
					<div id="newTable_OL_year" class="displayNone">
					<div class="text-left" style="margin-left: 80px; margin-bottom: 5px">
					<div class="row">
						<div class="col-md-3">
							<div class="col-md-1" style="padding-top: 5px"><label>ปี</label></div>
							<div class="col-md-4">
								<input type="text" class="text-right form-control" id="txb_newTable_OL" maxlength="4" onkeypress="return isNumberKey(event)" onblur="putValue_newTable_OL();" style="width: 80px; margin-bottom: 10px; margin-left: 10px">
							</div>
						</div>
						<div class="col-md-3">
							<div class="col-md-4" style="padding-top: 5px"><label>ดอกเบี้ย</label></div>
							<div class="col-md-4">
								<input type="text" class="auto text-right form-control" id="txb_newTable_rate_OL" maxlength="4" onblur="putValue_newTable_OL();" style="width: 80px; margin-bottom: 10px; margin-left: 10px" data-v-min="0.00" data-v-max="999.99">
							</div>
						</div>	
					</div>
					</div>
					</div>
					<div id="newTable_OL" class="displayNone">
						<div>
							<div class="col-md-1"></div>
							<div class="col-md-10" style="border: 1px groove blue;">
								<div class="text-center" style="padding: 10px 0"></div>
								<div class="row">
									<div class="col-md-4">
										<h4>แบบ RPU</h4>
									</div>
								</div>
								<!-- 1 -->
								<div class="row">
									<div class="col-md-1"></div>
									<div class="col-md-3" style="padding-top: 5px">
										<p class="text-left">RPU MALE</p>
									</div>
									<div class="col-md-5">										
										<div class="input-group">
											<input type="text" class="form-control" id="input_file_mort1_OL" placeholder="" readonly="" disabled> 
												<label class="input-group-btn"> 
													<span id="spanBoxMort1_OL" class="btn btn-primary" disabled>
													<font id="validate_inputMort1_OL" style="color: red; display:none;">*</font>เลือกไฟล์
													<input id="select_file_Mort1_OL" type="file" accept="text/plain" style="display: none;" disabled> 
													</span>
												</label>
										</div>
									</div>
									<div class="col-md-2">
										<button class="btn btn-primary" id="cv_tmo1_OL" disabled>ดูค่า
											TMO</button>
									</div>
								</div>
								<!-- 2 -->
								<div class="text-center" style="padding: 10px 0"></div>
								<div class="row" style="padding-bottom: 20px;">
									<div class="col-md-1"></div>
									<div class="col-md-3" style="padding-top: 5px">
										<p class="text-left">RPU FEMALE</p>
									</div>
									<div class="col-md-5">										
										<div class="input-group">
											<input type="text" class="form-control" id="input_file_mort2_OL" placeholder="" readonly="" disabled> 
												<label class="input-group-btn"> 
													<span id="spanBoxMort2_OL" class="btn btn-primary" disabled>
													<font id="validate_inputMort2_OL" style="color: red; display:none;">*</font>เลือกไฟล์
													<input id="select_file_Mort2_OL" type="file" accept="text/plain" style="display: none;" disabled> 
													</span>
												</label>
										</div>
										
									</div>
									<div class="col-md-2">
										<button class="btn btn-primary" id="cv_tmo2_OL" disabled>ดูค่า
											TMO</button>
									</div>
								</div>
							</div>
						</div>
						<div class="row"></div>
						<div>
							<div class="col-md-1"></div>
							<div class="col-md-10"
								style="border: 1px groove blue; margin-top: 15px;">
								<div class="text-center" style="padding: 10px 0"></div>
								<div class="row">									
									<div class="col-md-4">
										<h4>แบบ ETI</h4>
									</div>
								</div>								
								<div class="row">
									<div class="col-md-1"></div>
									<div class="col-md-3" style="padding-top: 5px">
										<p class="text-left">ETI MALE</p>
									</div>
									<div class="col-md-5">									
										<div class="input-group">
											<input type="text" class="form-control" id="input_file_mort3_OL" placeholder="" readonly="" disabled> 
												<label class="input-group-btn"> 
													<span id="spanBoxMort3_OL" class="btn btn-primary" disabled>
													<font id="validate_inputMort3_OL" style="color: red; display:none;">*</font>เลือกไฟล์
													<input id="select_file_Mort3_OL" type="file" accept="text/plain" style="display: none;" disabled> 
													</span>
												</label>
										</div>
									</div>
									<div class="col-md-2">
										<button class="btn btn-primary" id="cv_tmo3_OL" disabled>ดูค่า
											TMO</button>
									</div>
								</div>
								<!-- 4 -->
								<div class="text-center" style="padding: 10px 0"></div>
								<div class="row" style="padding-bottom: 20px;">
									<div class="col-md-1"></div>
									<div class="col-md-3" style="padding-top: 5px">
										<p class="text-left">ETI FEMALE</p>
									</div>
									<div class="col-md-5">										
										<div class="input-group">
											<input type="text" class="form-control" id="input_file_mort4_OL" placeholder="" readonly="" disabled> 
												<label class="input-group-btn"> 
													<span id="spanBoxMort4_OL" class="btn btn-primary" disabled>
													<font id="validate_inputMort4_OL" style="color: red; display:none;">*</font>เลือกไฟล์
													<input id="select_file_Mort4_OL" type="file" accept="text/plain" style="display: none;" disabled> 
													</span>
												</label>
										</div>
									</div>
									<div class="col-md-2">
										<button class="btn btn-primary" id="cv_tmo4_OL" disabled>ดูค่า
											TMO</button>
									</div>
								</div>
							</div>
						</div>
						<div class="row"></div>
						
						<input type="hidden" id="rpu_male_rateLayout_OL">
						<input type="hidden" id="rpu_male_fileID_OL">
						<input type="hidden" id="rpu_female_rateLayout_OL">
						<input type="hidden" id="rpu_female_fileID_OL">
						
						<input type="hidden" id="eti_male_rateLayout_OL">
						<input type="hidden" id="eti_male_fileID_OL">
						<input type="hidden" id="eti_female_rateLayout_OL">
						<input type="hidden" id="eti_female_fileID_OL">
						
						<input type="hidden" id="old_txb_newTable_OL">
						<input type="hidden" id="old_txb_newTable_rate_OL">
					</div>
					<div class="text-center" style="padding: 20px 0"></div>
				</div>


				<!-- Footer -->
				<div class="row">
					<div class="col-md-8"></div>
					<div class="col-md-4">
						<div class="col-md-6">
							<button class="btn btn-primary width100" onclick="bt_Menu4_OL_Confirm();">บันทึก</button>
						</div>
						<div class="col-md-6">
							<button class="btn btn-primary width100" data-dismiss="modal" data-toggle="modal"
											data-target="#cancelBoxOL_menu4">ยกเลิก</button>
						</div>
					</div>
				</div>

			</div>
		</div>	
	</div>

	<!-- MODAL -->
	<!-- popup ตอนโหลดไฟล์ -->
	<div class="modal fade" id="cvStandardRiskAuto_OL" role="dialog">
		<div class="modal-dialog modal-lg">

			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">ดูค่า CV : <span></span></h4>
				</div>
				<div class="modal-body">
					<div class="ex1">
						<table class="table table-bordered" id="tbl_StandardRiskAuto_OL">
							<thead>
								<tr style="background-color: #EEEEEE;">
									<th class="text-center">Plan</th>
									<th class="text-center">Sex</th>
									<th class="text-center">Age</th>
									<th class="text-center">t</th>
									<th class="text-center">Cash Value</th>
									<th class="text-center">C-Paid up</th>
									<th class="text-center">Paid up</th>
									<th class="text-center">C-Extended</th>
									<th class="text-center">Year</th>
									<th class="text-center">Day</th>
									<th class="text-center">Pure Endowment</th>
									<th class="text-center">Blank</th>
								</tr>
							</thead>
							<tbody>														
							</tbody>
						</table>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row">
						<div class="col-md-4">
							<button type="button" class="btn btn-primary" data-dismiss="modal" id="btn_submit_StandardRiskAuto_OL">&nbsp;&nbsp;บันทึก&nbsp;&nbsp;</button></div>
						<div class="col-md-8 text-right">
							<button type="button" class="btn btn-primary" data-dismiss="modal" id="btn_cancel_StandardRiskAuto_OL">&nbsp;&nbsp;ยกเลิก&nbsp;&nbsp;</button>
						</div>
						<div class="col-md-2"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<!-- popup ตอนกดดูค่า -->
	<div class="modal fade" id="cvStandardRisk_OL" role="dialog">
		<div class="modal-dialog modal-lg">

			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">ดูค่า CV : <span></span></h4>
				</div>
				<div class="modal-body">
					<div class="ex1">
						<table class="table table-bordered" id="tbl_StandardRisk_OL">
							<thead>
								<tr style="background-color: #EEEEEE;">
									<th class="text-center">Plan</th>
									<th class="text-center">Sex</th>
									<th class="text-center">Age</th>
									<th class="text-center">t</th>
									<th class="text-center">Cash Value</th>
									<th class="text-center">C-Paid up</th>
									<th class="text-center">Paid up</th>
									<th class="text-center">C-Extended</th>
									<th class="text-center">Year</th>
									<th class="text-center">Day</th>
									<th class="text-center">Pure Endowment</th>
									<th class="text-center">Blank</th>
								</tr>
							</thead>
							<tbody>														
							</tbody>
						</table>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row">
						<div class="col-md-4">
							<button type="button" class="btn btn-primary" id="download_tbl_StandardRisk_OL">ดาวน์โหลด</button></div>
						<div class="col-md-8 text-right">
							<button type="button" class="btn btn-primary" data-dismiss="modal">&nbsp;&nbsp;&nbsp;&nbsp;ปิด&nbsp;&nbsp;&nbsp;&nbsp;</button>
						</div>
						<div class="col-md-2"></div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- cvNotStandardRisk -->
	<!-- popup ตอนโหลดไฟล์ -->
	<div class="modal fade" id="cvNotStandardRiskAuto_OL" role="dialog">
		<div class="modal-dialog modal-lg">

			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">ดูค่า CVEM : <span></span></h4>
				</div>
				<div class="modal-body">
					<div class="ex1">
						<table class="table table-bordered" id="tbl_NotStandardRiskAuto_OL">
							<thead>
								<tr style="background-color: #EEEEEE;">
									<th class="text-center">Plan</th>
									<th class="text-center">EM</th>
									<th class="text-center">Sex</th>
									<th class="text-center">Age</th>
									<th class="text-center">t</th>
									<th class="text-center">Cash Value</th>
									<th class="text-center">C-Paid up</th>
									<th class="text-center">Paid up</th>
									<th class="text-center">C-Extended</th>
									<th class="text-center">Year</th>
									<th class="text-center">Day</th>
									<th class="text-center">Pure Endowment</th>
									<th class="text-center">Blank</th>
								</tr>
							</thead>
							<tbody>														
							</tbody>
						</table>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row">
						<div class="col-md-4">
							<button type="button" class="btn btn-primary" data-dismiss="modal" id="btn_submit_NotStandardRiskAuto_OL">&nbsp;&nbsp;บันทึก&nbsp;&nbsp;</button></div>
						<div class="col-md-8 text-right">
							<button type="button" class="btn btn-primary" data-dismiss="modal" id="btn_cancel_NotStandardRiskAuto_OL">&nbsp;&nbsp;ยกเลิก&nbsp;&nbsp;</button>
						</div>
						<div class="col-md-2"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<!-- popup ตอนกดดูค่า -->
	<div class="modal fade" id="cvNotStandardRisk_OL" role="dialog">
		<div class="modal-dialog modal-lg">

			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">ดูค่า CVEM : <span></span></h4>
				</div>
				<div class="modal-body">
					<div class="ex1">
						<table class="table table-bordered" id="tbl_NotStandardRisk_OL">
							<thead>
								<tr style="background-color: #EEEEEE;">
									<th class="text-center">Plan</th>
									<th class="text-center">EM</th>
									<th class="text-center">Sex</th>
									<th class="text-center">Age</th>
									<th class="text-center">t</th>
									<th class="text-center">Cash Value</th>
									<th class="text-center">C-Paid up</th>
									<th class="text-center">Paid up</th>
									<th class="text-center">C-Extended</th>
									<th class="text-center">Year</th>
									<th class="text-center">Day</th>
									<th class="text-center">Pure Endowment</th>
									<th class="text-center">Blank</th>
								</tr>
							</thead>
							<tbody>														
							</tbody>
						</table>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row">
						<div class="col-md-4">
							<button type="button" class="btn btn-primary" id="download_tbl_NotStandardRisk_OL">ดาวน์โหลด</button></div>
						<div class="col-md-8 text-right">
							<button type="button" class="btn btn-primary" data-dismiss="modal">&nbsp;&nbsp;&nbsp;&nbsp;ปิด&nbsp;&nbsp;&nbsp;&nbsp;</button>
						</div>
						<div class="col-md-2"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<!-- ***********************modal ETI/RPU ************************ -->
	<div class="modal fade" id="ETIRPUAuto_OL" role="dialog">
		<div class="modal-dialog modal-lg">

			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">ดูค่า CVEM : <span></span></h4>
				</div>
				<div class="modal-body">
					<div class="ex1">
						<table class="table table-bordered" id="tbl_ETIRPUAuto_OL">
							<thead>
								<tr style="background-color: #EEEEEE;">
									<th class="text-center">Age</th>
									<th class="text-center">Dx</th>
									<th class="text-center">Nx</th>
									<th class="text-center">Cx</th>
									<th class="text-center">Mx</th>	
								</tr>
							</thead>
							<tbody>														
							</tbody>
						</table>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row">
						<div class="col-md-4">
							<button type="button" class="btn btn-primary" data-dismiss="modal" id="btn_submit_ETIRPUAuto_OL">&nbsp;&nbsp;บันทึก&nbsp;&nbsp;</button></div>
						<div class="col-md-8 text-right">
							<button type="button" class="btn btn-primary" data-dismiss="modal" id="btn_cancel_ETIRPUAuto_OL">&nbsp;&nbsp;ยกเลิก&nbsp;&nbsp;</button>
						</div>
						<div class="col-md-2"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<div class="modal fade" id="ETIRPU_OL" role="dialog">
		<div class="modal-dialog modal-lg">

			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">ดูค่า CVEM : <span></span></h4>
				</div>
				<div class="modal-body">
					<div class="ex1">
						<table class="table table-bordered" id="tbl_ETIRPU_OL">
							<thead>
								<tr style="background-color: #EEEEEE;">
									<th class="text-center">Age</th>
									<th class="text-center">Dx</th>
									<th class="text-center">Nx</th>
									<th class="text-center">Cx</th>
									<th class="text-center">Mx</th>	
								</tr>
							</thead>
							<tbody>														
							</tbody>
						</table>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row">
						<div class="col-md-4">
							<button type="button" class="btn btn-primary" id="download_tbl_ETIRPU_OL">ดาวน์โหลด</button></div>
						<div class="col-md-8 text-right">
							<button type="button" class="btn btn-primary" data-dismiss="modal">&nbsp;&nbsp;&nbsp;&nbsp;ปิด&nbsp;&nbsp;&nbsp;&nbsp;</button>
						</div>
						<div class="col-md-2"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<!-- **************************modal ยกเลิก************************* -->
	<div id="cancelBoxOL_menu4" class="modal fade bd-example-modal-sm"
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
	<div class="modal fade" id="modal_value_warning4_OL" role="dialog">
		<div class="modal-dialog">

			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header" style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">เเจ้งเตือน</h4>
				</div>
				
				<div class="modal-body">
					<div class="row">
						<p class="text-center" id="txt_value_alert_error4_OL">ไม่พบข้อมูล</p>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row">
						<div class="col-md-4"></div>
						<div class="col-md-4">
							<div class="col-md-6">
								<button type="button" class="btn btn-primary"
									data-dismiss="modal" id="btn_value_warning_submit4_OL">ยืนยัน</button>
							</div>
							<div class="col-md-6">
								<button type="button" class="btn btn-primary"
									id="btn_value_warning_cancel4_OL">ยกเลิก</button>
							</div>
						</div>
						<div class="col-md-2"></div>
					</div>
				</div>
			</div>
		</div>
	</div>    	


	<!-- hidden value -->
	<input type="hidden" id="cv_rate_Agespecific_OL" value="">
	<input type="hidden" id="cv_rate_AgeBand_OL" value="">
	<input type="hidden" id="cv_rate_Agespecific_P_OL" value="">
	<input type="hidden" id="cv_rate_AgeBand_P_OL" value="">
	
	<!-- Khwan Fix ETI/RPU 29/11/2019 -->
	<input type="hidden" id="RPU_ratecat_OL" value="">
	<input type="hidden" id="RPU_subcatMale_OL" value="">
	<input type="hidden" id="RPU_subcatFeMale_OL" value="">
	<input type="hidden" id="RPU_female_pattern_OL" value="">
	<input type="hidden" id="RPU_male_pattern_OL" value="">
	
	<input type="hidden" id="ETI_ratecat_OL" value="">
	<input type="hidden" id="ETI_subcatMale_OL" value="">
	<input type="hidden" id="ETI_subcatFeMale_OL" value="">
	<input type="hidden" id="ETI_female_pattern_OL" value="">
	<input type="hidden" id="ETI_male_pattern_OL" value="">
	
	<input type="hidden" id="flag_RPU_male_OL" value="false">
	<input type="hidden" id="flag_RPU_female_OL" value="false">
	<input type="hidden" id="flag_ETI_male_OL" value="false">
	<input type="hidden" id="flag_ETI_female_OL" value="false">
</body>
</html>