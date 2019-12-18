<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>ข้อมูลทั่วไป Basic Information</title>
</head>
<style>
.disabledbutton {
	opacity: 0.2;
}

.activecolorgray {
	pointer-events: none;
}
.style_basic_table2{
margin-left: 0px !important;
}
</style>
<body>
	<div class="row box-body" id="div_main_menuBasic_Info">
		<div class="panel panel-primary">
			<div class="panel-heading">
				<p class="margin0 text-center">
					<B>ข้อมูลทั่วไป Basic Information</B>
				</p>
			</div>

			<div class="col-sm-11 style_basic_table1 style_col_float_margin">
				<div class="text-center" style="padding: 10px 0"></div>
				<div class="row pd-bt">
					<div class="col-sm-2">
						<label class="control-label-left" style="margin-top: 8px;">
						<font id="validate_input1_ol" style="color: red;">*</font>
						รหัสสัญญาเพิ่มเติม</label>
					</div>
					<div class="col-sm-4">
						<input type="text" value="" class="form-control" id="pass_Insurance_product_ol" readonly>

					</div>
					<div class="col-sm-2">
						<input type="text" class="form-control text-right text-capital" id="key_Insurance_product_ol" maxlength="4" onkeyup="keyProduct_ol();">
					</div>
				</div>
				<div class="row pd-bt">
					<div class="col-sm-2">
						<label class="control-label-left" style="margin-top: 8px;">
						<font id="validate_input2_ol" style="color: red;">*</font>
						ชื่อ(ไทย)</label>
					</div>
					<div class="col-sm-8">
						<input type="text" id="th_Name_ol" class="form-control" onkeyup="th_Name_ol();" value="">
					</div>
				</div>
				<div class="row pd-bt">
					<div class="col-sm-2">
						<label class="control-label-left" style="margin-top: 8px;">ชื่อ
							(อังกฤษ)</label>
					</div>
					<div class="col-sm-8">
						<input type="text" id="en_Name_ol" class="form-control" value="">
					</div>
				</div>
				<div class="row">
					<div class="col-sm-2">
						<label class="control-label-left" style="margin-top: 8px;">
						<font id="validate_input3_ol" style="color: red;">*</font>
						ชื่อทางการตลาด (ไทย)</label>
					</div>
					<div class="col-sm-8">
						<input type="text" id="th_marketingName_ol" class="form-control" onkeyup="th_marketingName_ol();" value="">
					</div>
				</div>
				<div class="row pd-bt">
					<div class="col-sm-2">
						<label class="control-label-left" style="margin-top: 8px;">ชื่อทางการตลาด
							(อังกฤษ)</label>
					</div>
					<div class="col-sm-8">
						<input type="text" id="en_marketingName_ol" class="form-control" value="">
					</div>
				</div>

				<div class="row">
					<div class="col-sm-2">
						<label for="lb_contact" class="control-label-left fontcolortable2"
							style="margin-top: 8px;">ความคุ้มครองสัญญาเพิ่มเติม</label>
					</div>
					<div class="col-sm-10 style_basic_table2">
					<table class="table borderless">
						<tbody><tr>
							<td colspan="10">
							  <div id="div_tb_Additional_contract">
								<table class="table table-bordered " style="width:1200px;" id="tb_Additional_contract">
										<thead>
											<tr>
												<th width="15%" class="text-center verticalCenter tablecolorhead2 borderBlack">Coverage Rider</th>
												<th width="15%" class="text-center verticalCenter tablecolorhead2 borderBlack">ชื่อ(ไทย)</th>
												<th width="15%" class="text-center verticalCenter tablecolorhead2 borderBlack">PM_Rate</th>
												<th width="4%" class="text-center verticalCenter tablecolorhead2 borderBlack">ดูค่า</th>
												<th width="4%" class="text-center verticalCenter tablecolorhead2 borderBlack">โหลด</th>
												<th width="15%" class="text-center verticalCenter tablecolorhead2 borderBlack">EM_Rate</th>
												<th width="4%" class="text-center verticalCenter tablecolorhead2 borderBlack">ดูค่า</th>
												<th width="4%" class="text-center verticalCenter tablecolorhead2 borderBlack">โหลด</th>
												<th width="15%" class="text-center verticalCenter tablecolorhead2 borderBlack">NAR</th>
												<th width="4%" class="text-center verticalCenter tablecolorhead2 borderBlack">ดูค่า</th>
												<th width="4%" class="text-center verticalCenter tablecolorhead2 borderBlack">โหลด</th>
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
								<div class="col-sm-8 style_basic_div1 style_col_width60">
									<div class="col-md-2" style="padding-right: 0">
										<input class="btn btn-primary width100" type="button" id="addrowAdditional_contract" value="เลือก" data-toggle="modal">									
									</div>
									<div class="col-md-2" style="padding-right: 0">
										<input class="btn btn-primary width100" type="button" id="delrowAdditional_contract" value="ลบ" onclick="deleteRowAdditional_contract();">
									</div>
									<div class="col-md-8"></div>
								</div>
							</td>
						</tr>
					</tbody></table>
				  </div>
				</div>


				<div class="row">
					<div class="col-sm-2">
						<label for="lb_contact" class="control-label-left"
							style="margin-top: 8px;">พิกัดอายุ</label>
					</div>
					<div class="col-sm-10 style_basic_table2">
						<table>
							<tr>
								<td colspan="10">

									<table class="table table-bordered " style="width: 500px;" id="tb_ageRange_OL">
										<thead>
											<tr>
												<th width="20%"
													class="text-center verticalCenter tablecolorhead3 borderBlack"
													rowspan="2">Coverage Rider</th>
												<th width="80%"
													class="text-center verticalCenter tablecolorhead3 borderBlack"
													colspan="4">พิกัดอายุ</th>
											</tr>
											<tr>
												<th class="text-center tablecolorhead3 borderBlack"
													width="20%">ตั้งแต่</th>
												<th class="text-center tablecolorhead3 borderBlack"
													width="20%">ถึง</th>
												<th class="text-center tablecolorhead3 borderBlack"
													width="20%">คุ้มครองสูงสุด</th>
												<th class="text-center tablecolorhead3 borderBlack"
													width="20%">หน่วย</th>
											</tr>
										</thead>
										<tbody>
										</tbody>
									</table>

								</td>
							</tr>
						</table>
					</div>
				</div>
				<div class="row" style="margin-bottom: 20px;">
					<div class="col-sm-2">
						<label class="control-label-left fontcolortable2"
							style="margin-top: 8px;">เพศ</label>
					</div>

					<div class="col-sm-2">
						<input type="checkbox" name="gender[]" id="male_gender" disabled> <label class="label_input2" for="male_gender">ชาย</label>
					</div>
					<div class="col-sm-2">
						<input type="checkbox" name="gender[]" id="female_gender" disabled> <label class="label_input2" for="female_gender">หญิง</label>
					</div>

				</div>

				<div class="row">
					<div class="col-sm-2">
						<label class="control-label-left fontcolortable2"
							style="margin-top: 8px;">วิธีการชำระเบี้ย</label>
					</div>
					<div class="col-sm-5">
						<table class="table table-bordered" style="width: 100%;" id="tbl_mode_ol">
							<thead>
								<tr>
									<th
										class="text-center verticalCenter tablecolorhead2 borderBlack"
										width="70">เลือก</th>
									<th colspan="2"
										class="text-center verticalCenter tablecolorhead2 borderBlack"
										width="350">Mode</th>
								</tr>
							</thead>
							<tbody>
							</tbody>
						</table>
					</div>

				</div>

				<div class="row">
					<div class="col-sm-2">
						<label class="control-label-left fontcolortable2"
							style="margin-top: 8px;" id="lb_paymentTerm_OL">ระยะชำระเบี้ย</label>
					</div>
					<div class="col-sm-5" style="padding-bottom: 15px;">
						<!-- <div style="overflow: auto; height: 150px; width: 100%; z-index: 9;"> -->
							<table class="table table-bordered" id="tbl_paymentTerm_OL" style="width: 100%;">
								<thead>
									<tr>
										<th colspan="2"
											class="text-center verticalCenter tablecolorhead2 borderBlack"
											width="45">From</th>
										<th colspan="2"
											class="text-center verticalCenter tablecolorhead2 borderBlack"
											width="45">To</th>

									</tr>
								</thead>
								<tbody>
								</tbody>
							</table>
						<!-- </div> -->
					</div>
				</div>

				<div class="row">
					<div class="col-sm-2">
						<label>การส่ง Reinsurance</label>
					</div>
					<div class="col-sm-5 panel panel-default panel_style1"
						style="width: 30%; margin-bottom: 20px;">
						<div class="row">
							<div class="col-sm-12 paddingtop_8px">
								<div class="col-sm-6">
									<input type="radio" id="selectSendReinsurance1"
									onChange="selectReinsurance()" name="sendReinsurance"
									onclick="chk_reinsure_OL(1)">
									<label class="label_input2" for="selectSendReinsurance1">ส่ง</label>
								</div>
								<div class="col-sm-6">
									<input type="radio" id="selectSendReinsurance2"
									onChange="selectReinsurance()" name="sendReinsurance" 
									onclick="chk_reinsure_OL(2)" checked value="NONE">
									<label class="label_input2" for="selectSendReinsurance2">ไม่ส่ง</label>
								</div>
							</div>

						</div>
						<div id="sendReinsuranceTrue">
							<div class="col-sm-4 margintop_15px marginleft_style14">
								<label id="label_send_re" style="opacity: 0.5;">ส่งแบบ</label>
							</div>
							<div class="col-sm-7">
								<select style="margin: 10px auto" class="form-control" id="lb_reinsurance" disabled>
								</select>
							</div>
						</div>
					</div>
				</div>

				<div class="row pd-bt">
					<div class="col-sm-2">
						<label>Distribution Channel</label>
					</div>
					<div class="col-sm-4">
						<select class="form-control" id="lb_distribution_OL">
							<option value="NONE">None</option>
						</select>

					</div>
				</div>

				<div class="row pd-bt">
					<div class="col-sm-2">
						<label>Sale Channel</label>
					</div>
					<div class="col-sm-4">
						<select class="form-control" id="lb_saleChannel_OL">
							<option data-id="NONE" value="NONE">None</option>
						</select>

					</div>
				</div>

				<div class="row pd-bt">
					<div class="col-sm-2">
						<label>Partner</label>
					</div>
					<div class="col-sm-4">
						<select class="form-control" id="lb_partner_OL">
							<option data-id="NONE" value="NONE">None</option>
						</select>
					</div>
				</div>

			</div>
			<div class="row pd-bt">
				<div class="col-sm-9"></div>
				<div class="productpadding col-sm-1">
					<button class="btn btn-default btn-primary" type="button" id="" onclick="bt_Menu1_Confirm_ol();">บันทึก</button>
				</div>
				<div class="productpadding col-sm-1">
					<button class="btn btn-default btn-primary" type="button"  data-toggle="modal" data-target="#modal_Cancel">ยกเลิก</button>
				</div>
				<div class="col-sm-1"></div>
			</div>
		</div>
	</div>

	<!-- เลือกแบบสัญญาเพิ่มเติม -->
	
	<div class="modal fade" id="modal_Additional_contract" role="dialog">
		<input type="hidden" id="hd_rider_number">
		<div class="modal-dialog modal-lg">
			<div class="panel panel-primary">
				<div class="panel-heading text-left">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">เลือก : สัญญาเพิ่มเติม</h4>
				</div>
				<div class="modal-body">
					<div class="row" style="padding: 10px 0"></div>
					<div class="box-body">
						<table class="table table-striped table-bordered" 
							style="width: 100%" id="tb_Additional_contract_modal">
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
						data-dismiss="modal" onclick="bt_save_Additional_contract();">ตกลง</button>
					<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
				</div>
			</div>
		</div>
	</div>

	<!-- modal upload PM rate -->
	<div class="modal fade" id="modal_upload_pm_rate" role="dialog">
		<div class="modal-dialog">

			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">
						นำเข้า : PM_Rate <span></span>
					</h4>
				</div>
				<div class="modal-body">
					<input type="hidden" name="input_pm_rate" value="" />

					<!-- upload -->

					<!-- ไฟล์ใหม่ -->
					<div class="table_width1">
						<div class="row">
							<div class="col-md-12">
								<div class="input-group">
									<span> <input type="radio" id="upload1_pm_rate"
										name="pm_rate" onclick="inputPMRate_modal();" checked>
										<label for="upload1_pm_rate" class="label_input2" >นำเข้า(Rate Making)</label>
									</span>
								</div>
							</div>
						</div>
						<div class="text-center" style="padding: 10px 0"></div>
						<div class="row">
							<div id="form_input_file" class="input-group">
										<input type="hidden" id="fileId_pm" value="">
										<input type="hidden" id="rate_cat_pm" value="">
										<input type="hidden" id="rate_layout_pm" value="">
										<input type="hidden" id="sub_cat_pm" value="">
										<input type="text" class="form-control" id="fileuploads_PMRateText1_ol" readonly=""> 
										<label class="input-group-btn"> 
											<span id="spanRate1_ol" class="btn btn-primary" >
											<font id="validate_rate1_ol" style="color: red;">*</font><b> เลือกไฟล์ </b>
											<input id="fileuploads_PMRate1_ol" type="file" accept="text/plain" style="display: none;"> 
											</span>
										</label>
									</div>	
						</div>
						<div class="text-center" style="padding: 10px 0"></div>
					</div>

					<!-- ไฟล์เดิม -->
					<div class="table_width1">
						<div class="row">
							<div class="col-md-12">
								<div class="input-group">
									<span> <input type="radio" id="upload2_pm_rate"
										name="pm_rate" onclick="inputPMRate_modal();">
										<label for="upload2_pm_rate" class="label_input2" >ไฟล์เดิม(Rate พื้นฐาน)</label>
									</span>
								</div>
							</div>
						</div>
						<div class="text-center" style="padding: 10px 0"></div>
						<div class="row">
							<div class="datatbl_PolicyFile_CL">
								<table class="table table-bordered" id="tbl_pm_rate">
									<thead>
										<tr class="bg-primary">
											<th class="text-center col-md-1"
												style="border-right-style: none;">เลือก</th>
											<th class="text-center col-md-2"
												style="border-right-style: none;">ดูข้อมูล</th>
											<th class="text-center col-md-8"
												style="border-right-style: none;">Rate พื้นฐาน</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td class="verticalCenter text-center"><input
												type="radio" name="input_rate"></td>
											<td class="verticalCenter text-center"><span
												class="glyphicon glyphicon-eye-open activecolorgray">
											</span></td>
											<td class="verticalCenter">ชื่อไทย_R</td>
										</tr>
										<tr>
											<td class="verticalCenter text-center"><input
												type="radio" name="input_rate"></td>
											<td class="verticalCenter text-center"><span
												class="glyphicon glyphicon-eye-open activecolorgray">
											</span></td>
											<td class="verticalCenter">ชื่อไทย_R2</td>
										</tr>
										<tr>
											<td class="verticalCenter text-center"><input
												type="radio" name="input_rate"></td>
											<td class="verticalCenter text-center"><span
												class="glyphicon glyphicon-eye-open activecolorgray">
											</span></td>
											<td class="verticalCenter">ชื่อไทย_R3</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div class="text-center" style="padding: 10px 0"></div>
					</div>

					<!-- button -->
					<div class="row" align="center">
						<button type="button" class="btn btn-primary" data-dismiss="modal">ตกลง</button>
						<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	<br clear="all">
	
<!-- modal -->
<!-- นำเข้า PM Rate -->
				<div class="modal fade" id="modal_input_PMRate" role="dialog">
					<div class="modal-dialog modal-lg">
						<div class="panel panel-primary">
							<div class="panel-heading text-left">
								<button type="button" class="close" data-dismiss="modal">&times;</button>
								<h4 class="modal-title">นำเข้า : PM_Rate</h4>
							</div>
							<div class="modal-body">
								<div class="row" style="padding: 10px 0"></div>
								<div class="col-sm-6"><input type="radio" id="select_input_pmRate" name="select_input_pmRate" >&nbsp;<label for="select_input_pmRate">นำเข้า (Rate Making)</label></div>
								<div class="row" style="padding: 10px 0"></div>
								<div class="col-sm-1"></div>
								<div class="col-sm-5">
									<div id="form_input_file" class="input-group">
										<input type="hidden" id="fileId_pm" value="">
										<input type="hidden" id="rate_cat_pm" value="">
										<input type="hidden" id="rate_layout_pm" value="">
										<input type="hidden" id="sub_cat_pm" value="">
										<input type="text" class="form-control" id="fileuploads_PMRateText1_OL" readonly=""> 
										<label class="input-group-btn"> 
											<span id="spanRate1_OL" class="btn btn-primary" >
											<font id="validate_rate1_OL" style="color: red;">*</font><b> เลือกไฟล์ </b>
											<input id="fileuploads_PMRate1_OL" type="file" accept="text/plain" style="display: none;"> 
											</span>
										</label>
									</div>	
								</div>
								<div class="row" style="padding: 10px 0"></div>
								<div class="col-sm-6"><input type="radio" id="select_input_pmRateOriginal" name="select_input_pmRate">&nbsp;<label for="select_input_pmRateOriginal">ไฟล์เดิม (Rate มาตรฐาน)</label></div>
								<div class="row" style="padding: 10px 0"></div>
								<div class="box-body">
									<table class="table table-striped table-bordered" 
										style="width: 100%" id="tb_input_modal_pmRate">
										<thead>
											<tr class="bg-primary">
												<th class="text-center col-md-1" style="border-right-style: none;">เลือก</th>
												<th class="text-center col-md-2" style="border-right-style: none;">ดูข้อมูล</th>
												<th class="text-center col-md-8" style="border-right-style: none;">Rate พื้นฐาน</th>
											</tr>
										</thead>
										<tbody>
										
										</tbody>
									</table>
								</div>
							</div>
							<div class="modal-footer">
								<button type="button" id="bt_contirm_saveFilePMRate" class="btn btn-primary" onclick="choose_file_pmRate();">ตกลง</button>
								<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
		
							</div>
						</div>
					</div>
				</div>
				<!-- ดูค่า นำเข้า Rate Making - แบบทุน 10k และ 100k -->
				<div class="modal fade" id="modal_input_file_PMRate" role="dialog">
					<div class="modal-dialog">
						<div class="panel panel-primary">
							<div class="panel-heading text-left">
								<button type="button" class="close" data-dismiss="modal">&times;</button>
								<h4 class="modal-title">ดูค่า : นำเข้า (Rate Making)</h4>
							</div>
							<div class="modal-body">
							<div class="ex1">
								<div class="row" style="padding: 10px 0"></div>
								<div class="box-body">
									<table class="table table-striped table-bordered" 
										style="width: 100%" id="tb_input_file_modal_pmRate">
										<thead>
											<tr class="bg-primary">
												<th class="text-center col-md-1" style="border-right-style: none;">Entry age</th>
												<th class="text-center col-md-2" style="border-right-style: none;">Sex</th>
												<th class="text-center col-md-8" style="border-right-style: none;">N-Term</th>
												<th class="text-center col-md-8" style="border-right-style: none;">Tax Premium rate</th>
											</tr>
										</thead>
										<tbody>
										
										</tbody>
									</table>
								</div>
							</div>
							<div class="modal-footer">
								<button type="button" id="bt_submit_pmRate" class="btn btn-primary" data-dismiss="modal">บันทึก</button>
								<button type="button" id="bt_cancel_pmRate" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
							</div>
						</div>
						</div>
					</div>
				</div>
				<!-- dialog icon see ดูค่า นำเข้า Rate Making - แบบทุน 10k และ 100k -->
				<div class="modal fade" id="modal_input_fileSee_PMRate" role="dialog">
					<div class="modal-dialog">
						<div class="panel panel-primary">
							<div class="panel-heading text-left modal-header">
								<button type="button" class="close" data-dismiss="modal">&times;</button>
								<h4 class="modal-title">ดูค่า : <span></span></h4>
							</div>
							<div class="modal-body">
							<div class="ex1">
								
									<table class="table table-striped table-bordered" 
										style="width: 100%" id="tb_input_fileSee_modal_pmRate">
										<thead>
											<tr class="bg-primary">
												<th class="text-center col-md-1" style="border-right-style: none;">Entry age</th>
												<th class="text-center col-md-2" style="border-right-style: none;">Sex</th>
												<th class="text-center col-md-8" style="border-right-style: none;">N-Term</th>
												<th class="text-center col-md-8" style="border-right-style: none;">Tax Premium rate</th>
											</tr>
										</thead>
										<tbody>
										
										</tbody>
									</table>
								
							</div>
							<div class="text-center" style="padding: 10px 0"></div>
							<div class="row">
								<div class="col-md-4">
									<button type="button" class="btn btn-primary" id="download_tb_input_fileSee_modal_pmRate">ดาวน์โหลด</button></div>
								<div class="col-md-8 text-right">
									<button type="button" class="btn btn-primary" data-dismiss="modal">&nbsp;&nbsp;&nbsp;&nbsp;ปิด&nbsp;&nbsp;&nbsp;&nbsp;</button>
								</div>
								<div class="col-md-2"></div>
							</div>
						</div>
						</div>
					</div>
				</div>
				<!-- input file NAR - แบบทุน 10k และ 100k -->
				<div class="modal fade" id="modal_input_file_NAR" role="dialog">
					<div class="modal-dialog">
						<div class="panel panel-primary">
							<div class="panel-heading text-left">
								<button type="button" class="close" data-dismiss="modal">&times;</button>
								<h4 class="modal-title">ดูค่า : นำเข้า (NAR)</h4>
							</div>
							<div class="modal-body">
							<div class="ex1">
								<div class="row" style="padding: 10px 0"></div>
								<div class="box-body">
									<table class="table table-striped table-bordered" 
										style="width: 100%" id="tb_input_file_modal_NAR">
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
							</div>
							<div class="modal-footer">
								<button type="button" id="bt_submit_BaseNAR" class="btn btn-primary" data-dismiss="modal">บันทึก</button>
								<button type="button" id="bt_cancel_BaseNAR" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
							</div>
						</div>
						</div>
					</div>
				</div>
				<!-- dialog icon see ดูค่า นำเข้า NAR - แบบทุน 10k และ 100k-->
				<div class="modal fade" id="modal_input_fileSee_NAR" role="dialog">
					<div class="modal-dialog">
						<div class="panel panel-primary">
							<div class="panel-heading text-left modal-header">
								<button type="button" class="close" data-dismiss="modal">&times;</button>
								<h4 class="modal-title">ดูค่า : <span></span></h4>
							</div>
							<div class="modal-body">
							<div class="ex1">
								
									<table class="table table-striped table-bordered" 
										style="width: 100%" id="tb_input_fileSee_modal_NAR">
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
									<button type="button" class="btn btn-primary" id="download_tb_input_fileSee_modal_NAR">ดาวน์โหลด</button></div>
								<div class="col-md-8 text-right">
									<button type="button" class="btn btn-primary" data-dismiss="modal">&nbsp;&nbsp;&nbsp;&nbsp;ปิด&nbsp;&nbsp;&nbsp;&nbsp;</button>
								</div>
								<div class="col-md-2"></div>
							</div>
						</div>
						</div>
					</div>
				</div>
				<!-- ดูค่า นำเข้า Rate Making - แบบทุนตามแผนการคุ้มครอง -->
				<div class="modal fade" id="modal_input_file_PMRate_planProtect" role="dialog">
					<div class="modal-dialog">
						<div class="panel panel-primary">
							<div class="panel-heading text-left">
								<button type="button" class="close" data-dismiss="modal">&times;</button>
								<h4 class="modal-title">ดูค่า : นำเข้า (Rate Making)</h4>
							</div>
							<div class="modal-body">
							<div class="ex1">
								<div class="row" style="padding: 10px 0"></div>
								<div class="box-body">
									<table class="table table-striped table-bordered" 
										style="width: 100%" id="tb_input_file_modal_pmRate_planProtect">
										<thead>
											<tr class="bg-primary">
												<th class="text-center col-md-5" style="border-right-style: none;">Plan</th>
												<th class="text-center col-md-2" style="border-right-style: none;">Sex</th>
												<th class="text-center col-md-2" style="border-right-style: none;">Mode</th>
												<th class="text-center col-md-3" style="border-right-style: none;">Age</th>
												<th class="text-center col-md-3" style="border-right-style: none;">Package</th>
												<th class="text-center col-md-3" style="border-right-style: none;">Premium</th>
											</tr>
										</thead>
										<tbody>
										
										</tbody>
									</table>
								</div>
							</div>
							<div class="modal-footer">
								<button type="button" id="bt_submit_pmRate_planProtect" class="btn btn-primary" data-dismiss="modal">บันทึก</button>
								<button type="button" id="bt_cancel_pmRate_planProtect" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
							</div>
						</div>
						</div>
					</div>
				</div>
				<!-- dialog icon see ดูค่า นำเข้า Rate Making - แบบทุนตามแผนการคุ้มครอง -->
				<div class="modal fade" id="modal_input_fileSee_PMRate_planProtect" role="dialog">
					<div class="modal-dialog">
						<div class="panel panel-primary">
							<div class="panel-heading text-left">
								<button type="button" class="close" data-dismiss="modal">&times;</button>
								<h4 class="modal-title">ดูค่า : นำเข้า (Rate Making)</h4>
							</div>
							<div class="modal-body">
							<div class="ex1">
								<div class="row" style="padding: 10px 0"></div>
								<div class="box-body">
									<table class="table table-striped table-bordered" 
										style="width: 100%" id="tb_input_fileSee_modal_pmRate_planProtect">
										<thead>
											<tr class="bg-primary">
												<th class="text-center col-md-5" style="border-right-style: none;">Plan</th>
												<th class="text-center col-md-2" style="border-right-style: none;">Sex</th>
												<th class="text-center col-md-2" style="border-right-style: none;">Mode</th>
												<th class="text-center col-md-3" style="border-right-style: none;">Age</th>
												<th class="text-center col-md-3" style="border-right-style: none;">Package</th>
												<th class="text-center col-md-3" style="border-right-style: none;">Premium</th>
											</tr>
										</thead>
										<tbody>
										
										</tbody>
									</table>
								</div>
							</div>
							<div class="modal-footer">
								<button type="button" id="bt_cancel_SeePMRate_planProtect" class="btn btn-primary" data-dismiss="modal">ปิด</button>
							</div>
						</div>
						</div>
					</div>
				</div>
				<!-- input file NAR - แบบตามแผนความคุ้มครอง -->
				<div class="modal fade" id="modal_input_file_NAR_planProtect" role="dialog">
					<div class="modal-dialog">
						<div class="panel panel-primary">
							<div class="panel-heading text-left">
								<button type="button" class="close" data-dismiss="modal">&times;</button>
								<h4 class="modal-title">ดูค่า : นำเข้า (NAR)</h4>
							</div>
							<div class="modal-body">
							<div class="ex1">
								<div class="row" style="padding: 10px 0"></div>
								<div class="box-body">
									<table class="table table-striped table-bordered" 
										style="width: 100%" id="tb_input_file_modal_NAR_planProtect">
										<thead>
											<tr class="bg-primary">
												<th class="text-center col-md-5" style="border-right-style: none;">Plan</th>
												<th class="text-center col-md-2" style="border-right-style: none;">Sex</th>
												<th class="text-center col-md-2" style="border-right-style: none;">Mode</th>
												<th class="text-center col-md-3" style="border-right-style: none;">Age</th>
												<th class="text-center col-md-3" style="border-right-style: none;">Package</th>
												<th class="text-center col-md-3" style="border-right-style: none;">Premium</th>
											</tr>
										</thead>
										<tbody>
										
										</tbody>
									</table>
								</div>
							</div>
							<div class="modal-footer">
								<button type="button" id="bt_submit_BaseNAR_planProtect" class="btn btn-primary" data-dismiss="modal">บันทึก</button>
								<button type="button" id="bt_cancel_BaseNAR_planProtect" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
							</div>
						</div>
						</div>
					</div>
				</div>
				<!-- dialog icon see ดูค่า นำเข้า NAR - แบบตามแผนความคุ้มครอง-->
				<div class="modal fade" id="modal_input_fileSee_NAR_planProtect" role="dialog">
					<div class="modal-dialog">
						<div class="panel panel-primary">
							<div class="panel-heading text-left">
								<button type="button" class="close" data-dismiss="modal">&times;</button>
								<h4 class="modal-title">ดูค่า : นำเข้า (Rate Making)</h4>
							</div>
							<div class="modal-body">
							<div class="ex1">
								<div class="row" style="padding: 10px 0"></div>
								<div class="box-body">
									<table class="table table-striped table-bordered" 
										style="width: 100%" id="tb_input_fileSee_modal_NAR_planProtect">
										<thead>
											<tr class="bg-primary">
												<th class="text-center col-md-5" style="border-right-style: none;">Plan</th>
												<th class="text-center col-md-2" style="border-right-style: none;">Sex</th>
												<th class="text-center col-md-2" style="border-right-style: none;">Mode</th>
												<th class="text-center col-md-3" style="border-right-style: none;">Age</th>
												<th class="text-center col-md-3" style="border-right-style: none;">Package</th>
												<th class="text-center col-md-3" style="border-right-style: none;">Premium</th>
											</tr>
										</thead>
										<tbody>
										
										</tbody>
									</table>
								</div>
							</div>
							<div class="modal-footer">
								<button type="button" id="bt_cancel_SeeNAR_planProtect" class="btn btn-primary" data-dismiss="modal">ปิด</button>
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

<!-------------------- hidden value ------------------------->
<input type="hidden" id="layout_NAR1" >
<input type="hidden" id="layout_NAR2" >
<input type="hidden" id="rate_cat_NAR" >
<input type="hidden" id="sub_cat_NAR" >
<input type="hidden" id="base64_fileTXT_OL" >

<input type="hidden" id="flag_email_send_OL" value="F">

</body>
</html>