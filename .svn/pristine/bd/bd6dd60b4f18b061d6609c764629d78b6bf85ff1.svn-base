<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>ตารางมูลค่ากรมธรรม์</title>
</head>
<body>
	<div id="mainRisk" class="row box-body">
		<div class="panel panel-primary">
			<div class="panel-heading text-left">
				<p class="margin0 text-center">ตารางมูลค่ากรมธรรม์</p>
			</div>
			<div class="panel-body">
				<input type="hidden" name="baseplanCode_CL" id="baseplanCode_CL" value=""/>
				<input type="hidden" name="surrender_CL" id="surrender_CL" value=""/>
				<div class="panel panel-primary">				
					<div class="row">
						<div class="col-md-12 panel_head_blue">
							<div class="col-sm-12 input-group" id="risk_CL">
									<input type="checkbox" id="cbBox1_CL" onclick="displayPolicyValueCL(1);"> 
									<label for="cbBox1_CL">ความเสี่ยงมาตรฐาน</label>
							</div>
						</div>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row">
						<div class="col-md-1"></div>
						<div class="col-md-3">
							<p class="text-left" style="padding-top: 5px;">ตารางมูลค่ากรมธรรม์ <font id="validate_dd_file1" style="color: red;">*</font></p>
						</div>
						<div class="col-md-5">
							<input type="hidden" id="select_hidden_value_old1">
							<input type="hidden" id="select_hidden_value_new1">
							<select class="form-control" id="dbBox1_CL" disabled>
								<option value="">None</option>																						
							</select>
						</div>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row">
						<div class="col-sm-1"></div>
						<div class="col-sm-10"><label>นำเข้า CV</label>&nbsp;&nbsp;<span class="errorFont" id="CVFile_validate_CL">(กรุณานำเข้าไฟล์อย่างน้อย 1 ไฟล์)</span></div>
						<input type="hidden" id="cv_rate_Agespecific" value="">
						<input type="hidden" id="cv_rate_AgeBand" value="">
						
						<div id="div_cv_risk1_CL" class="scroll_div_tbl1">
									<table class="table table-striped table-bordered text-center"
											width="100%" id="tb_RateValue1">
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
				<div class="panel panel-primary" id="panel_noriskCL">
					<div class="row">
						<div class="col-md-12 panel_head_blue">
							<div class="col-sm-12 input-group" id="norisk_CL">
									<input type="checkbox" id="cbBox2_CL" onclick="displayPolicyValueCL(2);"> 
									<label for="cbBox2_CL">ความเสี่ยงต่ำกว่ามาตรฐาน</label>
							</div>
						</div>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row">
						<div class="col-md-1"></div>
						<div class="col-md-3">
							<p class="text-left" style="padding-top: 5px;">ตารางมูลค่ากรมธรรม์ <font id="validate_dd_file2" style="color: red;">*</font></p>
						</div>
						<div class="col-md-5">
						   <input type="hidden" id="select_hidden_value_old2">
						   <input type="hidden" id="select_hidden_value_new2">
							<select class="form-control" id="dbBox2_CL" disabled>
								<option value="">None</option>					
							</select>
						</div>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row" id="row_cvLow_file">
						<div class="col-md-1"></div>
						<div class="col-md-8">							
							<div class="input-group" id="div_file2_CL"></div>
						</div>
						<div class="col-md-2 text-right">
							<button class="btn btn-primary text-center" id="cv2_CL"
								data-toggle="modal"  disabled>ดูค่า CV</button>
						</div>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
				</div>

				<!------ group3 ------>
				<div class="panel panel-primary" id="RPU_CL">
					<div class="row">
						<div class="col-md-12 panel_head_blue">
							<div class="col-sm-12 input-group">
									<input type="checkbox" id="cbBox3_CL" onclick="displayPolicyValueCL(3);"> 
									<label for="cbBox3_CL">ตารางมรณะสำหรับคำนวณปิดบัญชี(RPU/ETI)</label>
							</div>
						</div>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row">
						<div class="col-md-1"></div>
						<div class="col-md-3 text-left">
							<input type="radio" name="tablePolicyCL" id="tablePolicy1_CL"
								onclick="changeDisplayBenefit005_CL(3);" checked disabled>&nbsp;ตารางที่มีอยู่แล้ว
						</div>
						<div class="col-md-3 text-left">
							<input type="radio" name="tablePolicyCL" id="tablePolicy2_CL"
								onclick="changeDisplayBenefit005_CL(2);" disabled>&nbsp;ตารางใหม่
						</div>
					</div>

					<div class="text-center" style="padding: 10px 0"></div>
					<div id="oldTable_CL">
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
										<select class="form-control" id="dbBox3_1_CL" disabled>
											<option value="0">ปี คศ (group by)</option>
										</select>
									</div>
									<div class="col-md-4">
										<select class="form-control" id="dbBox3_2_CL" disabled>
											<option value="0">RPU_MALE</option>
										</select>
									</div>
									<div class="col-md-2">
										<button class="btn btn-primary" id="tmo1_CL" disabled>ดูค่า
											TMO</button>
									</div>
								</div>
								<div class="text-center" style="padding: 10px 0"></div>
								<div class="row" style="padding-bottom: 20px;">
									<div class="col-md-5"></div>
									<div class="col-md-4">
										<select class="form-control" id="dbBox3_3_CL" disabled>
											<option value="0">RPU_FEMALE</option>
										</select>
									</div>
									<div class="col-md-2">
										<button class="btn btn-primary" id="tmo2_CL" disabled>ดูค่า
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
									<div class="col-md-4">
										<select class="form-control" id="dbBox3_4_CL" disabled>
											<option value="0">ปี คศ (group by)</option>
										</select>
									</div>
									<div class="col-md-4">
										<select class="form-control" id="dbBox3_5_CL" disabled>
											<option value="0">ETI_MALE</option>
										</select>
									</div>
									<div class="col-md-2">
										<button class="btn btn-primary" id="tmo3_CL" disabled>ดูค่า
											TMO</button>
									</div>
								</div>
								<div class="text-center" style="padding: 10px 0"></div>
								<div class="row" style="padding-bottom: 20px">
									<div class="col-md-5"></div>
									<div class="col-md-4">
										<select class="form-control" id="dbBox3_6_CL" disabled>
											<option value="0">ETI_FEMALE</option>
										</select>
									</div>
									<div class="col-md-2">
										<button class="btn btn-primary" id="tmo4_CL" disabled>ดูค่า
											TMO</button>
									</div>
								</div>
							</div>
							<div class="text-center" style="padding: 70px 0"></div>
						</div>
						<div class="row"></div>




					</div>
					<div id="newTable_CL" class="displayNone">
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
											<input type="text" class="form-control" id="input_file_3_CL"
											placeholder="RPU{พ.ศ.}{industrial}_{sex}_{ดอกเบี้ย}.txt" readonly> 
											<label class="input-group-btn"> <span disabled id="spanBox3_CL"
											class="btn btn-primary"><font id="validate_input3_CL"
											style="color: red;">*</font>เลือกไฟล์<input
											id="select_file_3_CL" type="file" style="display: none;" disabled>
											</span>
											</label>
										</div>

									</div>
									<div class="col-md-2">
										<button class="btn btn-primary" id="tmo5_CL" disabled>ดูค่า
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
											<input type="text" class="form-control" id="input_file_4_CL"
												placeholder="RPU{พ.ศ.}{industrial}_{sex}_{ดอกเบี้ย}.txt" readonly> <label
												class="input-group-btn"> <span disabled id="spanBox4_CL"
												class="btn btn-primary"><font id="validate_input4_CL"
												style="color: red;">*</font>เลือกไฟล์<input
												id="select_file_4_CL" type="file" style="display: none;" disabled>
											</span>
											</label>
										</div>

									</div>
									<div class="col-md-2">
										<button class="btn btn-primary" id="tmo6_CL" disabled>ดูค่า
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
											<input type="text" class="form-control" id="input_file_5_CL"
												placeholder="ETI{พ.ศ.}{industrial}_{sex}_{ดอกเบี้ย}.txt" readonly> <label
												class="input-group-btn"> <span disabled id="spanBox5_CL"
												class="btn btn-primary"><font id="validate_input5_CL"
												style="color: red;">*</font>เลือกไฟล์<input
												id="select_file_5_CL" type="file" style="display: none;" disabled>
											</span>
											</label>
										</div>

									</div>
									<div class="col-md-2">
										<button class="btn btn-primary" id="tmo7_CL" disabled>ดูค่า
											TMO</button>
									</div>
								</div>
								<!-- 4 -->
								<div class="text-center" style="padding: 10px 0"></div>
								<div class="row" style="padding-bottom: 20px;">
									<div class="col-md-1"></div>
									<div class="col-md-3" style="padding-top: 5px">
										<p class="text-left">ETI MALE</p>
									</div>
									<div class="col-md-5">										
										<div class="input-group">											
											<input type="text" class="form-control" id="input_file_6_CL"
												placeholder="ETI{พ.ศ.}{industrial}_{sex}_{ดอกเบี้ย}.txt" readonly> <label
												class="input-group-btn"> <span disabled id="spanBox6_CL"
												class="btn btn-primary"><font id="validate_input6_CL"
												style="color: red;">*</font>เลือกไฟล์<input
												id="select_file_6_CL" type="file" style="display: none;" disabled>
											</span>
											</label>
										
										</div>

									</div>
									<div class="col-md-2">
										<button class="btn btn-primary" id="tmo8_CL" disabled>ดูค่า
											TMO</button>
									</div>
								</div>
							</div>
						</div>
						<div class="row"></div>

					</div>
					<div class="text-center" style="padding: 20px 0"></div>
				</div>


				<!-- Footer -->
				<div class="row">
					<div class="col-md-8"></div>
					<div class="col-md-4">
						<div class="col-md-6">
							<button class="btn btn-primary width100" onclick="bt_Menu4_CL_Confirm();">บันทึก</button>
						</div>
						<div class="col-md-6">
							<button class="btn btn-primary width100" data-dismiss="modal" data-toggle="modal"
											data-target="#cancelBoxCL_menu4">ยกเลิก</button>
						</div>
					</div>
				</div>

			</div>
		</div>	
	</div>

	<!-- MODAL -->
	<!-- popup ตอนโหลดไฟล์ -->
	<div class="modal fade" id="cvStandardRiskAuto_CL" role="dialog">
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
						<table class="table table-bordered" id="tbl_StandardRiskAuto_CL">
							<thead>
								<tr style="background-color: #EEEEEE;">
									<th class="text-center">Enter age</th>
									<th class="text-center">Sex</th>
									<th class="text-right">N-Term</th>
									<th class="text-right">Policy year</th>
									<th class="text-right">CV rate</th>
								</tr>
							</thead>
							<tbody>														
							</tbody>
						</table>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row">
						<div class="col-md-4">
							<button type="button" class="btn btn-primary" data-dismiss="modal" id="btn_submit_StandardRiskAuto">&nbsp;&nbsp;บันทึก&nbsp;&nbsp;</button></div>
						<div class="col-md-8 text-right">
							<button type="button" class="btn btn-primary" data-dismiss="modal" id="btn_cancel_StandardRiskAuto">&nbsp;&nbsp;ยกเลิก&nbsp;&nbsp;</button>
						</div>
						<div class="col-md-2"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<!-- popup ตอนกดดูค่า -->
	<div class="modal fade" id="cvStandardRisk_CL" role="dialog">
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
						<table class="table table-bordered" id="tbl_StandardRisk_CL">
							<thead>
								<tr style="background-color: #EEEEEE;">
									<th class="text-center">Enter age</th>
									<th class="text-center">Sex</th>
									<th class="text-right">N-Term</th>
									<th class="text-right">Policy year</th>
									<th class="text-right">CV rate</th>
								</tr>
							</thead>
							<tbody>														
							</tbody>
						</table>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row">
						<div class="col-md-4">
							<button type="button" class="btn btn-primary" id="download_tbl_StandardRisk_CL">ดาวน์โหลด</button></div>
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
	<div class="modal fade" id="cvNotStandardRiskAuto_CL" role="dialog">
		<div class="modal-dialog">

			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">ดูค่า CVEM : <span></span></h4>
				</div>
				<div class="modal-body">
					<div class="ex1">
						<table class="table table-bordered" id="tbl_NotStandardRiskAuto_CL">
							<thead>
								<tr style="background-color: #EEEEEE;">
									<th class="text-center">EM</th>
									<th class="text-center">Entry age</th>
									<th class="text-center">Sex</th>
									<th class="text-center">N-term</th>
									<th class="text-center">Policy year</th>
									<th class="text-center">CV rate</th>
								</tr>
							</thead>
							<tbody>														
							</tbody>
						</table>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row">
						<div class="col-md-4">
							<button type="button" class="btn btn-primary" data-dismiss="modal" id="btn_submit_NotStandardRiskAuto">&nbsp;&nbsp;บันทึก&nbsp;&nbsp;</button></div>
						<div class="col-md-8 text-right">
							<button type="button" class="btn btn-primary" data-dismiss="modal" id="btn_cancel_NotStandardRiskAuto">&nbsp;&nbsp;ยกเลิก&nbsp;&nbsp;</button>
						</div>
						<div class="col-md-2"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<!-- popup ตอนกดดูค่า -->
	<div class="modal fade" id="cvNotStandardRisk_CL" role="dialog">
		<div class="modal-dialog">

			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">ดูค่า CVEM : <span></span></h4>
				</div>
				<div class="modal-body">
					<div class="ex1">
						<table class="table table-bordered" id="tbl_NotStandardRisk_CL">
							<thead>
								<tr style="background-color: #EEEEEE;">
									<th class="text-center">EM</th>
									<th class="text-center">Entry age</th>
									<th class="text-center">Sex</th>
									<th class="text-center">N-term</th>
									<th class="text-center">Policy year</th>
									<th class="text-center">CV rate</th>
								</tr>
							</thead>
							<tbody>														
							</tbody>
						</table>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row">
						<div class="col-md-4">
							<button type="button" class="btn btn-primary" id="download_tbl_NotStandardRisk_CL">ดาวน์โหลด</button></div>
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
	<div id="cancelBoxCL_menu4" class="modal fade bd-example-modal-sm"
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
	<div class="modal fade" id="modal_value_warning4" role="dialog">
		<div class="modal-dialog">

			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header" style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">เเจ้งเตือน</h4>
				</div>
				
				<div class="modal-body">
					<div class="row">
						<p class="text-center" id="txt_value_alert_error4">ไม่พบข้อมูล</p>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row">
						<div class="col-md-4"></div>
						<div class="col-md-4">
							<div class="col-md-6">
								<button type="button" class="btn btn-primary"
									data-dismiss="modal" id="btn_value_warning_submit4">ยืนยัน</button>
							</div>
							<div class="col-md-6">
								<button type="button" class="btn btn-primary"
									id="btn_value_warning_cancel4">ยกเลิก</button>
							</div>
						</div>
						<div class="col-md-2"></div>
					</div>
				</div>
			</div>
		</div>
	</div>    	
        	
	<!-- modal แจ้งเตือน -->
	<div class="modal fade" id="modal_value_warning3" role="dialog">
		<div class="modal-dialog">

			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header" style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">เเจ้งเตือน</h4>
				</div>
				
				<div class="modal-body">
					<div class="row">
						<p class="text-center" id="txt_value_alert_error3">ไม่พบข้อมูล</p>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row">
						<div class="col-md-4"></div>
						<div class="col-md-4">
							<div class="col-md-6">
								<button type="button" class="btn btn-primary"
									data-dismiss="modal" id="btn_value_warning_submit3">ยืนยัน</button>
							</div>
							<div class="col-md-6">
								<button type="button" class="btn btn-primary"
									id="btn_value_warning_cancel3">ยกเลิก</button>
							</div>
						</div>
						<div class="col-md-2"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
</body>
</html>