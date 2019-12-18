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
    pointer-events: none;
    opacity: 0.2;
}
.activecolorgray{
	pointer-events: none;
}
</style>
<body>
<div class="row box-body" id="div_main_menuBasic_Info_OL">
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
					<label for="lb_contact" class="control-label-left"
						style="margin-top: 8px;"><font id="validate_input1_ol" style="color:red">*</font>รหัสผลิตภัณฑ์</label>
				</div>
				<div class="col-sm-3">
					<input type="text" class="form-control" id="pass_Insurance_product_ol" disabled>
				</div>
				<div class="col-sm-2">
					<input type="text" class="form-control text-right text-capital" id="key_Insurance_product_ol" maxlength="4" onkeyup="keyProduct_ol();">
				</div>
			</div>
			<div class="row pd-bt">
				<div class="col-sm-2">
					<label for="lb_contact" class="control-label-left"
						style="margin-top: 8px;"><font id="validate_input2_ol" style="color:red">*</font>ชื่อ(ไทย)</label>
				</div>
				<div class="col-sm-8">
					<input type="text" id="th_Name_ol" class="form-control" onkeyup="th_Name_ol();"
						value="">
				</div>
			</div>
			<div class="row pd-bt">
				<div class="col-sm-2">
					<label for="lb_contact" class="control-label-left"
						style="margin-top: 8px;">ชื่อ (อังกฤษ)</label>
				</div>
				<div class="col-sm-8">
					<input type="text" id="en_Name_ol" class="form-control"
						value="">
				</div>
			</div>
			<div class="row">
				<div class="col-sm-2">
					<label for="lb_contact" class="control-label-left"
						style="margin-top: 8px;"><font id="validate_input3_ol" style="color:red">*</font>ชื่อทางการตลาด (ไทย)</label>
				</div>
				<div class="col-sm-8">
					<input type="text" id="th_marketingName_ol" class="form-control" onkeyup="th_marketingName_ol();"
						value="" >
				</div>
			</div>
			<div class="row pd-bt">
				<div class="col-sm-2">
					<label for="lb_contact" class="control-label-left"
						style="margin-top: 8px;">ชื่อทางการตลาด (อังกฤษ)</label>
				</div>
				<div class="col-sm-8">
					<input type="text" id="en_marketingName_ol" class="form-control" value="">
				</div>
			</div>
			<!-- <div id="disabledForm"> -->
			<div class="row" >
				<div class="col-sm-2">
					<label for="lb_contact" class="control-label-left"
						style="margin-top: 8px; color: #330166"><font id="validate_input4_ol" style="color:red">*</font>ความคุ้มครองสัญญาหลัก</label>
				</div>
				<div class="col-sm-10 style_basic_table2">
					<table class="table borderless">
						<tr>
							<td colspan="10">
								<div id="divtb_PM_Rate_OL">
									<table class="table table-bordered" style="width:1200px;" id="tb_PM_Rate_OL">
										<thead>
											<tr>
												<th width="12%" class="text-center verticalCenter tablecolorhead1 borderBlack">รหัสแบบประกันหลัก</th>
												<th width="24%" class="text-center verticalCenter tablecolorhead1 borderBlack">ชื่อ (ไทย)</th>
												<th width="4%" class="text-center verticalCenter tablecolorhead1 borderBlack"></th>
												<th width="16%" class="text-center verticalCenter tablecolorhead1 borderBlack" colspan="2">PM_Rate</th>
												<th width="4%" class="text-center verticalCenter tablecolorhead1 borderBlack">ดูค่า</th>
												<th width="4%" class="text-center verticalCenter tablecolorhead1 borderBlack">โหลด</th>
												<th width="12%" class="text-center verticalCenter tablecolorhead1 borderBlack capitalHide">ทุน Fix</th>
												<th width="16%" class="text-center verticalCenter tablecolorhead1 borderBlack">NAR</th>	
												<th width="4%" class="text-center verticalCenter tablecolorhead1 borderBlack">ดูค่า</th>
												<th width="4%" class="text-center verticalCenter tablecolorhead1 borderBlack">โหลด</th>											
											</tr>
										</thead>
										<tbody></tbody>
									</table>
								</div>
							</td>
						</tr>
						<tr>
							<td colspan="10">
								<div class="col-sm-7 style_basic_div1">
									<div class="col-md-2" style="padding-right: 0">
										<input class="btn btn-primary width100" type="button"
											id="addrowPM_Rate_OL" value="เลือก"
											data-toggle="modal" href="#modal_Choose_primary_insurance_OL">
									</div>
									<div class="col-md-2" style="padding-right: 0">
										<input class="btn btn-primary width100" type="button"
											id="delrowPM_Rate_OL" value="ลบ" onclick="deleteRowPM_Rate1_OL ();">
									</div>
									<div class="col-md-8"></div>
									
								</div>
							</td>
						</tr>
					</table>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-2">
					<label for="lb_contact" class="control-label-left fontcolortable2"
						style="margin-top: 8px;">ประเภทสัญญาเพิ่มเติม</label>
				</div>
				<div class="col-sm-10">
					<!-- <select id="sel_Type_Additional_contract_OL" class="form-control">
						<option value="NONE">None</option>						
					</select> -->
					<div class="col-sm-10 panel panel-default " id="panel_Type_Additional_contract_OL">
						<div id="div_Type_Additional_contract_OL" class="col-sm-12 padding_all1">
						<!-- <div class="col-sm-3 style_col_width20">
							<input type="checkbox" name="chk_Type_Additional_contract_OL[]" id="chk_Type_Additional_contract_OL1" value="BUNDLE">
							<label for="chk_Type_Additional_contract_OL1" class="label_input2">Bundle</label>
						</div>
						<div class="col-sm-3 style_col_width20">
							<input type="checkbox" name="chk_Type_Additional_contract_OL[]" id="chk_Type_Additional_contract_OL2" value="PACKAGE">
							<label for="chk_Type_Additional_contract_OL2" class="label_input2">Package</label>
						</div>
						<div class="col-sm-3">
							<input type="checkbox" name="chk_Type_Additional_contract_OL[]" id="chk_Type_Additional_contract_OL3" value="RATE_MAKING">
							<label for="chk_Type_Additional_contract_OL3" class="label_input2">Rate making</label>
						</div>
						<div class="col-sm-3 style_col_width20">
							<input type="checkbox" name="chk_Type_Additional_contract_OL[]" id="chk_Type_Additional_contract_OL4" value="OPTIONAL"">
							<label for="chk_Type_Additional_contract_OL4" class="label_input2">Optional</label>
						</div> -->
					 </div>																																							
					</div>
				</div>
			</div>

			<!-- //////////////////////////// -->
			<div class="row">
				<div class="col-sm-2">
					<label for="lb_contact" class="control-label-left fontcolortable2"
						style="margin-top: 8px;">สัญญาเพิ่มเติม</label>
				</div>
				<div class="col-sm-10 style_basic_table2">
				<table class="table borderless">
					<tr>
						<td colspan="10">
						  <div id="div_tb_Additional_contract_OL">
							<table class="table table-bordered " style="width:1200px;"
									id="tb_Additional_contract_OL">
									<thead>
										<tr>
											<th width='3%' class='tablecolorhead2 borderBlack'></th>
											<th width="15%"  class="text-center verticalCenter tablecolorhead2 borderBlack">ประเภทสัญญาเพิ่มเติม</th>
											<th width="15%" class="text-center verticalCenter tablecolorhead2 borderBlack">รหัสสัญญาเพิ่มเติม</th>
											<th width="6%"  class="text-center verticalCenter tablecolorhead2 borderBlack">Rider Code</th>
											<th width="20%" class="text-center verticalCenter tablecolorhead2 borderBlack">ชื่อ(ไทย)</th>
											<th width="3%"  class="text-center verticalCenter tablecolorhead2 borderBlack"></th>
											<th width="15%" class="text-center verticalCenter tablecolorhead2 borderBlack">PM_Rate</th>
											<th width="4%"  class="text-center verticalCenter tablecolorhead2 borderBlack">ดูค่า</th>
											<th width="4%"  class="text-center verticalCenter tablecolorhead2 borderBlack">โหลด</th>
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
									<input class="btn btn-primary width100" type="button"
										id="addrowAdditional_contract_OL" value="เลือก"
										data-toggle="modal">									
								</div>
								<div class="col-md-2" style="padding-right: 0">
									<input class="btn btn-primary width100" type="button"
										id="delrowAdditional_contract_OL" value="ลบ" onclick="deleteRowAdditional_contract_OL();">
								</div>
								<div class="col-md-8"></div>
							</div>
						</td>
					</tr>
				</table>
				</div>				
			</div>
			
			<!-- package plan -->
			<div class="displayNone" id="div_plan_YRT_OL">
			<div class="row">
				<div class="col-sm-2">
					<label class="control-label-left" style="margin-top: 8px;"></label>
				</div>
				<div class="col-sm-10">
					<div class="col-sm-3 style_col_width22 col_middle marginleft_diff16px"><label>จำนวน SA Package</label></div>
					<div class="col-sm-2 col_middle marginleft_style5"><input type="text" class="form-control text-right" id="txb_sa_package_OL" onkeydown="numberKey(this);" onkeyup="numberKey(this);"></div>
					<div class="col-sm-1 col_middle marginleft_style5">Plan</div>
				</div>				
			</div>			
			<div class="row">
				<div class="col-sm-2"><label class="control-label-left displayNone" style="margin-top: 15px;" id="lb_saPackage_OL">SA Package</label></div>
				<div class="col-sm-10 style_basic_table2">
					<div id="div_tb_plan_YRT_OL" class="margintop_20px"></div>					
				</div>
			</div>
			<div class="row">
				<div class="col-sm-2">
					<label class="control-label-left" style="margin-top: 8px;"></label>
				</div>
				<div class="col-sm-10 style_basic_div1 margintop_20px margin_bottom_style1 displayNone" id="btn_plan_YRT_OL">
					<div class="col-md-2">
						<input class="btn btn-primary width100" type="button" id="addrowPlan_OL" value="&nbsp;&nbsp;เพิ่ม&nbsp;&nbsp;">
					</div>
					<div class="col-md-2 paddingleft0">
						<input class="btn btn-primary width100" type="button" id="delrowPlan_OL" value="ลบ">
					</div>
					<div class="col-md-8"></div>
				</div>
			</div>
			</div>
			
			<!-- การกำหนดบันทึกสลักหลังและพิกัดอายุ -->
			<div class="row displayNone" id="div_ageRange_OL">
				<div class="col-sm-2">
					<label class="control-label-left"
						style="margin-top: 8px;">การกำหนดบันทึกสลักหลังและพิกัดอายุ</label>
				</div>
				<div class="col-sm-10 style_basic_table2">
				<div id="div_tb_ageRange_OL">
							<table class="table table-bordered " style="width:100%" id="tb_ageRange_OL">
									<thead>
										<tr>											
											<th width="25%" class="text-center verticalCenter bg-primary borderBlack" rowspan="2">Coverage หลัก / เพิ่มเติม</th>
											<th width="7%" class="text-center verticalCenter bg-primary borderBlack" rowspan="2">ประเภทความคุ้มครอง</th>																						
											<th width="3%" class="text-center verticalCenter bg-primary borderBlack" rowspan="2"></th>
											<th width="15%" class="text-center verticalCenter bg-primary borderBlack" colspan="6">พิกัดอายุ</th>											
										</tr>
										<tr>
											<th width="8%" class="text-center verticalCenter bg-primary borderBlack">ตั้งแต่</th>	
											<th width="12%" class="text-center verticalCenter bg-primary borderBlack">หน่วย</th>									
											<th width="8%" class="text-center verticalCenter bg-primary borderBlack">ถึง</th>	
											<th width="12%" class="text-center verticalCenter bg-primary borderBlack">หน่วย</th>							
											<th width="8%" class="text-center verticalCenter bg-primary borderBlack">คุ้มครองสูงสุด</th>				
											<th width="12%" class="text-center verticalCenter bg-primary borderBlack">หน่วย</th>
										</tr>
									</thead>
									<tbody>
									</tbody>
								</table>
							</div>
				</div>				
			</div>
			<!-- //////////////////////////// -->
			<div class="row pd-bt">
				<div class="col-sm-6">
					<table>
						<tr>
							<td class="col-sm-8 pd-bt">
								<div class="fontcolortable1 text-right col-sm-4">
									<label>เพศ</label>
								</div>
								<div class="fontcolortable1 productpadding col-sm-2">
									<input type="checkbox" id="chk_sex_BP1_OL" disabled> <label for="chk_sex_BP1_OL">ชาย</label>
								</div>
								<div class="fontcolortable1 col-sm-3">
									<input type="checkbox" id="chk_sex_BP2_OL" disabled> <label for="chk_sex_BP2_OL">หญิง</label>
								</div>
							</td>
						</tr>
						<tr>
							<td class="col-sm-8 pd-bt">
								<div class="text-right fontcolortable1 col-sm-4">
									<label><font id="validate_input5_ol" style="color:red">*</font>วิธีการชำระเบี้ย</label>
								</div>
								<div class="col-sm-8 fontcolortable1 productpadding">
										<table class="table table-bordered" id="tbl_PD_Mode_OL">
											<thead>
												<tr>
													<th class="text-center verticalCenter tablecolorhead1 borderBlack" scope="col">เลือก</th>
													<th class="text-center verticalCenter tablecolorhead1 borderBlack" scope="col" colspan="2">Mode</th>
												</tr>
											</thead>
											<tbody>												
											</tbody>
										</table>
								</div>
							</td>
						</tr>
						<tr>
							<td class="col-sm-8 pd-bt">
								<div class="text-right fontcolortable1 col-sm-4">
									<label>การชำระเบี้ยด้วยบัตรเครดิต <a href="#modal_infomation_OL" data-toggle="modal"><span class="glyphicon glyphicon-info-sign font18"></span></a></label>
								</div>
								<div class="col-sm-8 panel panel-default">
									 <div class="row padding_all2">
										<div class="col-sm-4 paddingtop_style1">
											<label>ปีแรก</label>
										</div>
										<div class="col-sm-7">
											<select class="form-control group_credit" id="lb_credit_firstYear_OL">
																																			
											</select>
										</div>
									</div>
								  	<div class="row padding_all2">
										<div class="col-sm-4 paddingtop_style1">
											<label>ปีต่อไป</label>
										</div>
										<div class="col-sm-7">
											<select class="form-control group_credit" id="lb_credit_nextYear_OL" >
																																			
											</select>
										</div>
									</div>
									
								</div>
							</td>
						</tr>						
						<tr>
							<td class="productpadding col-sm-8 pd-bt">
								<div class="text-right col-sm-4">
									<label>Underwriting Type</label>
								</div>
								<div class="productpadding paddingleft_style1 col-sm-6">
									<select class="form-control" id="lb_reinsurance_OL">
										<option value="NONE">None</option>										
									</select>
								</div>
							</td>
						</tr>
						<tr>
							<td class="col-sm-8">
								<div class="text-right col-sm-4">
									<label>การส่ง Reinsurance</label>
								</div>
								<div class="col-sm-8 panel panel-default"> 
								  	<div class="col-sm-12 padding_all1">
										<div class="col-sm-5">
											<input type="radio" name="rd_reinsure_OL[]" id="rd_reinsure_OL1" value="ส่ง" onclick="chk_reinsure_OL(1)" checked><label for="rd_reinsure_OL1" class="label_input2">ส่ง</label>
										</div>
										<div class="col-sm-5">
											<input type="radio" name="rd_reinsure_OL[]" id="rd_reinsure_OL2" value="ไม่ส่ง" onclick="chk_reinsure_OL(2)" ><label for="rd_reinsure_OL2" class="label_input2">ไม่ส่ง</label>
										</div>
									</div>
									<div id="panel_reinsure_OL" class="col-sm-12 padding_all8 marginleft_style5">
										<div class="col-sm-5 paddingtop_style1"><label>ส่งแบบ</label></div>
										<div class="col-sm-6">
											<select class="form-control" id="lb_reinsure_OL">																					
											
											</select>
										</div>
									</div>
								</div>
							</td>
						</tr>		
						<tr>
							<td class="productpadding col-sm-7 pd-bt">
								<div class="text-right col-sm-4">
									<label>Distribution Channel</label>
								</div>
								<div class="productpadding paddingleft_style1 col-sm-6">
									<select class="form-control" id="lb_distribution_OL">
										<option value="NONE">None</option>									
									</select>
								</div>
							</td>
						</tr>
						<tr>
							<td class="productpadding col-sm-7 pd-bt">
								<div class="text-right col-sm-4">
									<label>Sale Channel</label>
								</div>
								<div class="productpadding paddingleft_style1 col-sm-6">
									<select class="form-control" id="lb_saleChannel_OL">
										<option data-id="NONE" value="NONE">None</option>										
									</select>
								</div>
							</td>
						</tr>
						<tr>
							<td class="productpadding col-sm-7 pd-bt">
								<div class="text-right col-sm-4">
									<label>Partner</label>
								</div>
								<div class="productpadding paddingleft_style1 col-sm-6">
									<select class="form-control" id="lb_partner_OL">
										<option data-id="NONE" value="NONE">None</option>	
									</select>
								</div>
							</td>
						</tr>
						<tr id="tr_coop_commision_OL">
							<td class="productpadding col-sm-7 pd-bt">
								<div class="text-right col-sm-4"></div>
								<div class="col-md-4 paddingtop_8px"><strong>ค่านายหน้าสูงสุด</strong></div>
								<div class="col-md-2 marginleft_style3">
									<input type="text" class="form-control width50px" id="amount_max_commission_OL" maxlength="3" disabled="">
								</div>
								<div class="col-md-1 paddingtop_8px marginleft_style4"><strong>%</strong></div>															
							</td>
						</tr>											
					</table>
				</div>
				
				<!-- ---------------------------------------- -->
				<div class="col-sm-6">
					<table>
						<tr>
							<td class="col-sm-7 pd-bt">								
								<div class="text-right fontcolortable1 col-sm-4">
									<label>ระยะเวลาเอาประกันภัย</label>
								</div>
								<div class="productpadding col-sm-8">
									<table class="table table-striped table-bordered text-center style_basic_table3" width="100%" id="tb_BasicInformation1_OL">
										<thead>
											<tr>
												<th width="10%" class="text-center verticalCenter tablecolorhead1 borderBlack"></th>
												<th width="45%" class="text-center verticalCenter tablecolorhead1 borderBlack" colspan="2">From</th>
												<th width="45%" class="text-center verticalCenter tablecolorhead1 borderBlack" colspan="2">To</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												
											</tr>
										</tbody>
									</table>
								</div>
							</td>
						</tr>
						<tr>
							<td class="productpadding col-sm-7 pd-bt">
								<div class="text-right col-sm-4"></div>
								<div class="col-sm-1">
									<input type="checkbox" id="chk_finance_PB_OL" class="">									
								</div>
								<div class="productpadding0 col-sm-5">
									<label for="chk_finance_PB_OL">เป็น Finance Account</label>
								</div>
							</td>
						</tr>
						<tr>
							<td class="productpadding col-sm-7 pd-bt">
								<div class="text-right col-sm-4"></div>
								<div class="col-sm-1">
									<input type="checkbox" id="chk_insurance_contract_OL" class="">									
								</div>
								<div class="productpadding0 col-sm-5">
									<label for="chk_insurance_contract_OL">สัญญาประกันภัย</label>
								</div>
							</td>
						</tr>
						<tr>
							<td class="productpadding col-sm-7 pd-bt">
								<div class="text-right col-sm-4">
									<label>AML/CFT Scoring</label>
								</div>
								<div class="productpadding col-sm-6">
									<select class="form-control" id="lb_AML_CFT_OL">
										<option value="NONE">None</option>										
									</select>
								</div>
							</td>
						</tr>
						<tr>
							<td class="col-sm-7 pd-bt">
								<div class="fontcolortable1 text-right col-sm-4">
									<label>ทุนคุ้มครองที่ลดลง SA_CL_Rate</label>
								</div>
								<div class="productpadding col-sm-6">
									<input type="text" id="inputSA_OL" readonly="readonly" class="fontcolortable1 form-control " value="">
		
								</div>
								<div class="col-sm-2">
									<button class="btn btn-primary" id="see_inputSA_OL">ดูค่า</button>
								</div>
							</td>
						</tr>
						<!-- OL -->
						<tr>
							<td class="col-sm-7 pd-bt">
								<div class="text-right col-sm-4">
									<label>Par Product</label>
								</div>
								<div class="productpadding col-sm-6">
									<select class="form-control" id="sel_Par_Product_OL">
									</select>
								</div>
							</td>
						</tr>
						<tr>
							<td class="col-sm-7 pd-bt">
								<div class="text-right col-sm-4">
									<label>Fighting Product</label>
								</div>
								<div class="productpadding col-sm-6">
									<select class="form-control" id="sel_Fighting_Product_OL">
									</select>
								</div>
							</td>
						</tr>
						<!-- end OL -->
						<tr class="disabledAll">
							<td class="col-sm-7 pd-bt">
								<div class="text-right col-sm-4">
									<label>Loan Type (CL)</label>
								</div>
								<div class="productpadding col-sm-6">
									<select class="form-control" id="sel_Loan_Type_OL" disabled>
																		
									</select>
								</div>
							</td>
						</tr>
						<tr class="disabledAll">
							<td class="productpadding col-sm-7 pd-bt">
								<div class="text-right col-sm-4"></div>
								<div class="col-sm-1">
									<input type="checkbox" id="chk_sperately_pay_OL" onclick="check_sperately_pay_OL();" disabled>									
								</div>
								<div class="productpadding0 col-sm-5">
									<label for="chk_sperately_pay_OL">แบ่งจ่ายได้</label>
								</div>
							</td>
						</tr>						
						<tr class="">
							<td class="productpadding col-sm-7 pd-bt">
								<div class="text-right col-sm-4"></div>
								<div class="col-sm-8" id="div_Sperately_Pay_ol">
									<table class="table table-striped table-bordered text-center disabledAll" width="100%" id="tb_Sperately_Pay_ol" disabled="disabled">
										<thead>
											<tr>
												<th width="5%" class="text-center bg-primary borderBlack" style="vertical-align: middle;" disabled="disabled">เลือก</th>
												<th width="25%" class="text-center bg-primary borderBlack" style="vertical-align: middle;" disabled="disabled">จำนวนงวด<br disabled="disabled">การแบ่ง<br disabled="disabled">ชำระ</th>
												<th width="70%" class="text-center bg-primary borderBlack" style="vertical-align: middle;" disabled="disabled">ตัวคูณเพื่อกำหนดอัตตราเบี้ย<br disabled="disabled">ประกันภัยรายงวด</th>
											</tr>
										</thead>
										<tbody>
										</tbody>
									</table>
								</div>								
							</td>
						</tr>
						<tr class="disabledAll">
							<td class="productpadding col-sm-7 pd-bt">
								<div class="text-right col-sm-4"></div>
								<div class="col-sm-1">
									<input type="checkbox" id="chk_change_main_person_OL" class="" disabled>									
								</div>
								<div class="productpadding0 col-sm-5">
									<label for="chk_change_main_person_OL">เปลี่ยนผู้รับประโยชน์หลัก</label>
								</div>
							</td>
						</tr>
						<!-- <tr>
							<td class="col-sm-5 pd-bt">
								<div class="productpadding col-sm-4">
								</div>
								<div class="productpadding col-sm-2">
									<button class="btn btn-default btn-primary" type="button"
									id="">บันทึก</button>
								</div>
								<div class="productpadding col-sm-1"></div>
								<div class="productpadding col-sm-2">
									<button class="btn btn-default btn-primary" type="button"
									id="">ยกเลิก</button>
								</div>
							</td>
						</tr> -->
					</table>
				</div>
				<!-- COOP -->
				<!-- ค่านายหน้า -->
				<div class="paddingleft_style2 col-sm-12 panel panel-default" id="div_COOP_OL">
					<div>
						<table class="table table-bordered" id="tb_COOP_OL" >
							<thead>
								<tr>
									<th width="5%" class="text-center verticalCenter bg-primary borderBlack" rowspan="2"></th>											
									<th width="45%" class="text-center verticalCenter bg-primary borderBlack" colspan="2">สหกรณ์</th>
									<th width="20%" class="text-center verticalCenter bg-primary borderBlack" colspan="2">วันที่</th>
									<th width="5%" class="text-center verticalCenter bg-primary borderBlack" rowspan="2"></th>
									<th width="25%" class="text-center verticalCenter bg-primary borderBlack" colspan="3">ค่านายหน้า</th>
								</tr>
								<tr>
									<th width="7%" class="text-center verticalCenter bg-primary borderBlack">รหัสสหกรณ์</th>										
									<th width="29%" class="text-center verticalCenter bg-primary borderBlack">ชื่อ </th>	
									<th width="12%" class="text-center verticalCenter bg-primary borderBlack">เริ่มต้น</th>	
									<th width="12%" class="text-center verticalCenter bg-primary borderBlack">สิ้นสุด</th>	
									<th width="10%" class="text-center verticalCenter bg-primary borderBlack">อายุเริ่มต้น</th>
									<th width="10%" class="text-center verticalCenter bg-primary borderBlack">อายุสิ้นสุด</th>	
									<th width="10%" class="text-center verticalCenter bg-primary borderBlack">(%)</th>																				
								</tr>
							</thead>
							<tbody>
								
							</tbody>
							</table>
						</div>
						<div class="col-sm-12 style_basic_div1">
							<div class="col-md-2">
								<input class="btn btn-primary width80px" type="button" id="addrowCOOP_OL" value="เลือก" data-toggle="modal" data-target="#modal_select_COOP_OL">
							</div>
							<div class="col-md-2 marginleft_style2">
								<input class="btn btn-primary width80px" type="button" id="delrowCOOP_OL" onclick="delete_rowTbCOOP_OL();" value="ลบ">
							</div>
						</div>	
					</div>
				
			   
				<!-- จำนวนเงินเอาประกันขั้นต่ำ -->
				<div class="paddingleft_style2 col-sm-12 panel panel-default" id="div_COOP_OL_2" style="display: none">
					<div>
						<table class="table table-bordered" id="tb_COOP_OL_2" >
							<thead>
								<tr>
									<th width="50%" class="text-center verticalCenter bg-primary borderBlack" colspan="2">สหกรณ์</th>
									<th width="5%" class="text-center verticalCenter bg-primary borderBlack" rowspan="2"></th>
									<th width="45%" class="text-center verticalCenter bg-primary borderBlack" colspan="3">จำนวนเงินเอาประกันภัย ขั้นต่ำ</th>
								</tr>
								<tr>
									<th width="10%" class="text-center verticalCenter bg-primary borderBlack">รหัสสหกรณ์</th>										
									<th width="40%" class="text-center verticalCenter bg-primary borderBlack">ชื่อ </th>	
									<th width="13%" class="text-center verticalCenter bg-primary borderBlack">อายุเริ่มต้น</th>	
									<th width="13%" class="text-center verticalCenter bg-primary borderBlack">อายุสิ้นสุด</th>	
									<th width="19%" class="text-center verticalCenter bg-primary borderBlack">(บาท)</th>
								</tr>
							</thead>
							<tbody>
								
							</tbody>
							</table>
						</div>
					</div>
				
				
				<!-- ส่วนลด -->
				<div class="paddingleft_style2 col-sm-12 panel panel-default" id="div_COOP_OL_3" style="display: none">
					<div>
						<table class="table table-bordered" id="tb_COOP_OL_3" >
							<thead>
								<tr>
									<th width="50%" class="text-center verticalCenter bg-primary borderBlack" colspan="2">สหกรณ์</th>
									<th width="5%" class="text-center verticalCenter bg-primary borderBlack" rowspan="2"></th>
									<th width="45%" class="text-center verticalCenter bg-primary borderBlack" colspan="3">ส่วนลด</th>
								</tr>
								<tr>
									<th width="10%" class="text-center verticalCenter bg-primary borderBlack">รหัสสหกรณ์</th>										
									<th width="40%" class="text-center verticalCenter bg-primary borderBlack">ชื่อ </th>	
									<th width="13%" class="text-center verticalCenter bg-primary borderBlack">อายุเริ่มต้น</th>	
									<th width="13%" class="text-center verticalCenter bg-primary borderBlack">อายุสิ้นสุด</th>	
									<th width="19%" class="text-center verticalCenter bg-primary borderBlack">(%)</th>
								</tr>
							</thead>
							<tbody>
								
							</tbody>
							</table>
						</div>
					</div>
					<!-- ปุ่ม -->
				<div class="col-md-3 col-md-offset-9 text-right" style="float: right;">
					 <div class="modal-footer" style="border: 0">
						<button class="btn btn-default btn-primary" type="button" id="" onclick="bt_Menu1_Confirm_ol();">บันทึก</button>
						<button class="btn btn-default btn-primary" type="button" id="" data-dismiss="modal" data-toggle="modal" data-target="#cancelBoxOL_Basic">ยกเลิก</button>
					</div>  
			   </div>
			   </div>
			   
				<!-- *** แบบประกันหลัก-->
				<div class="modal fade" id="modal_Choose_primary_insurance_OL" role="dialog">
					<div class="modal-dialog modal-lg">
						<div class="panel panel-primary">
							<div class="panel-heading text-left">
								<button type="button" class="close" data-dismiss="modal">&times;</button>
								<h4 class="modal-title">เลือก : แบบประกันหลัก</h4>
							</div>
							<div class="modal-body">
								<div class="row" style="padding: 10px 0"></div>
								<div class="box-body">
									<table class="table table-striped table-bordered" 
										style="width: 100%" id="tb_Choose_primary_insurance_modal_OL">
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
									data-dismiss="modal" onclick="bt_save_Choose_primary_insurance_OL();">ตกลง</button>
								<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
		
							</div>
						</div>
					</div>
				</div>
				<!-- **** สัญญาเพิ่มเติม-->
				<div class="modal fade" id="modal_Additional_contract_OL" role="dialog">
					<input type="hidden" id="hd_rider_number_OL">
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
										style="width: 100%" id="tb_Additional_contract_modal_OL">
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
									data-dismiss="modal" onclick="bt_save_Additional_contract_OL();">ตกลง</button>
								<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
		
							</div>
						</div>
					</div>
				</div>
				<!-- COOP -->
				<div class="modal fade" id="modal_select_COOP_OL" role="dialog">
					<div class="modal-dialog modal-lg">
						<div class="panel panel-primary">
							<div class="panel-heading text-left">
								<button type="button" class="close" data-dismiss="modal">&times;</button>
								<h4 class="modal-title">เลือก : สหกรณ์</h4>
							</div>
							<div class="modal-body">
								<div class="row" style="padding: 10px 0"></div>
								<div class="box-body">
									<table class="table table-striped table-bordered" 
										style="width: 100%" id="tb_COOP_modal_OL">
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
								<button type="button" class="btn btn-primary" data-dismiss="modal" onclick="choose_COOP_OL();">ตกลง</button>
								<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
		
							</div>
						</div>
					</div>
				</div>	
				<!-- นำเข้า PM Rate -->
				<div class="modal fade" id="modal_input_PMRate_OL" role="dialog">
					<div class="modal-dialog modal-lg">
						<div class="panel panel-primary">
							<div class="panel-heading text-left">
								<button type="button" class="close" data-dismiss="modal">&times;</button>
								<h4 class="modal-title">นำเข้า : PM_Rate</h4>
							</div>
							<div class="modal-body">
								<div class="row" style="padding: 10px 0"></div>
								<div class="col-sm-6"><input type="radio" id="select_input_pmRate_OL" name="select_input_pmRate_OL" >&nbsp;<label for="select_input_pmRate_OL">นำเข้า (Rate Making)</label></div>
								<div class="row" style="padding: 10px 0"></div>
								<div class="col-sm-1"></div>
								<div class="col-sm-5">
									<div id="form_input_file_OL" class="input-group">
										<input type="hidden" id="fileId_pm_OL" value="">
										<input type="hidden" id="rate_cat_pm_OL" value="">
										<input type="hidden" id="rate_layout_pm_OL" value="">
										<input type="hidden" id="sub_cat_pm_OL" value="">
										<input type="hidden" id="layout_pm_OL" value="">
										<input type="hidden" id="file_ref_OL" value="">
										<input type="hidden" id="layout_pmRate_1_OL" value="">
										<input type="hidden" id="layout_pmRate_2_OL" value="">
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
								<div class="col-sm-6"><input type="radio" id="select_input_pmRateOriginal_OL" name="select_input_pmRate_OL">&nbsp;<label for="select_input_pmRateOriginal_OL">ไฟล์เดิม (Rate มาตรฐาน)</label></div>
								<div class="row" style="padding: 10px 0"></div>
								<div class="box-body">
									<table class="table table-striped table-bordered" 
										style="width: 100%" id="tb_input_modal_pmRate_OL">
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
								<button type="button" id="bt_contirm_saveFilePMRate_OL" class="btn btn-primary" data-dismiss="modal" onclick="choose_file_pmRate_OL();">ตกลง</button>
								<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
		
							</div>
						</div>
					</div>
				</div>
				<!-- ดูค่า นำเข้า Rate Making - แบบทุน 10k และ 100k -->
				<div class="modal fade" id="modal_input_file_PMRate_OL" role="dialog">
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
										style="width: 100%" id="tb_input_file_modal_pmRate_OL">
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
								<button type="button" id="bt_submit_pmRate_OL" class="btn btn-primary" data-dismiss="modal">บันทึก</button>
								<button type="button" id="bt_cancel_pmRate_OL" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
							</div>
						</div>
						</div>
					</div>
				</div>
				<!-- dialog icon see ดูค่า นำเข้า Rate Making - แบบทุน 10k และ 100k -->
				<div class="modal fade" id="modal_input_fileSee_PMRate_OL" role="dialog">
					<div class="modal-dialog">
						<div class="panel panel-primary">
							<div class="panel-heading text-left modal-header">
								<button type="button" class="close" data-dismiss="modal">&times;</button>
								<h4 class="modal-title">ดูค่า : <span></span></h4>
							</div>
							<div class="modal-body">
							<div class="ex1">
								
									<table class="table table-striped table-bordered" 
										style="width: 100%" id="tb_input_fileSee_modal_pmRate_OL">
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
									<button type="button" class="btn btn-primary" id="download_tb_input_fileSee_modal_pmRate_OL">ดาวน์โหลด</button></div>
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
				<div class="modal fade" id="modal_input_file_NAR_OL" role="dialog">
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
										style="width: 100%" id="tb_input_file_modal_NAR_OL">
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
								<button type="button" id="bt_submit_BaseNAR_OL" class="btn btn-primary" data-dismiss="modal">บันทึก</button>
								<button type="button" id="bt_cancel_BaseNAR_OL" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
							</div>
						</div>
						</div>
					</div>
				</div>
				<!-- dialog icon see ดูค่า นำเข้า NAR - แบบทุน 10k และ 100k-->
				<div class="modal fade" id="modal_input_fileSee_NAR_OL" role="dialog">
					<div class="modal-dialog">
						<div class="panel panel-primary">
							<div class="panel-heading text-left modal-header">
								<button type="button" class="close" data-dismiss="modal">&times;</button>
								<h4 class="modal-title">ดูค่า : <span></span></h4>
							</div>
							<div class="modal-body">
							<div class="ex1">
								
									<table class="table table-striped table-bordered" 
										style="width: 100%" id="tb_input_fileSee_modal_NAR_OL">
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
									<button type="button" class="btn btn-primary" id="download_tb_input_fileSee_modal_NAR_OL">ดาวน์โหลด</button></div>
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
				<div class="modal fade" id="modal_input_file_PMRate_planProtect_OL" role="dialog">
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
										style="width: 100%" id="tb_input_file_modal_pmRate_planProtect_OL">
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
								<button type="button" id="bt_submit_pmRate_planProtect_OL" class="btn btn-primary" data-dismiss="modal">บันทึก</button>
								<button type="button" id="bt_cancel_pmRate_planProtect_OL" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
							</div>
						</div>
						</div>
					</div>
				</div>
				<!-- dialog icon see ดูค่า นำเข้า Rate Making - แบบทุนตามแผนการคุ้มครอง -->
				<div class="modal fade" id="modal_input_fileSee_PMRate_planProtect_OL" role="dialog">
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
										style="width: 100%" id="tb_input_fileSee_modal_pmRate_planProtect_OL">
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
								<button type="button" id="bt_cancel_SeePMRate_planProtect_OL" class="btn btn-primary" data-dismiss="modal">ปิด</button>
							</div>
						</div>
						</div>
					</div>
				</div>
				<!-- input file NAR - แบบตามแผนความคุ้มครอง -->
				<div class="modal fade" id="modal_input_file_NAR_planProtect_OL" role="dialog">
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
										style="width: 100%" id="tb_input_file_modal_NAR_planProtect_OL">
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
								<button type="button" id="bt_submit_BaseNAR_planProtect_OL" class="btn btn-primary" data-dismiss="modal">บันทึก</button>
								<button type="button" id="bt_cancel_BaseNAR_planProtect_OL" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
							</div>
						</div>
						</div>
					</div>
				</div>
				<!-- dialog icon see ดูค่า นำเข้า NAR - แบบตามแผนความคุ้มครอง-->
				<div class="modal fade" id="modal_input_fileSee_NAR_planProtect_OL" role="dialog">
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
										style="width: 100%" id="tb_input_fileSee_modal_NAR_planProtect_OL">
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
								<button type="button" id="bt_cancel_SeeNAR_planProtect_OL" class="btn btn-primary" data-dismiss="modal">ปิด</button>
							</div>
						</div>
						</div>
					</div>
				</div>
				<!-- ดูค่า SA -->
				<div class="modal fade" id="modal_inputSA_OL_Rate" role="dialog">
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
									<table class="table table-bordered" id="tb_inputSA_OL_Rate">
										<thead>
											<tr class="borderBlack">
												<th class="text-center bg-primary borderBlack">N-Term</th>
												<th class="text-center bg-primary borderBlack">Month</th>
												<th class="text-center bg-primary borderBlack">SA_Dec</th>
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
											id="download_tb_inputSA_OL_Rate">ดาวน์โหลด</button>
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
				<!-- เลือกบันทึกสลักหลัง -->
				<div class="modal fade" id="modal_select_endorse_OL" role="dialog">
					<div class="modal-dialog modal-lg">
			
						<!-- Modal content-->
						<div class="modal-content">
							<div class="modal-header"
								style="background-color: #337AB7; color: white;">
								<button type="button" class="close" data-dismiss="modal">&times;</button>
								<h4 class="modal-title">เลือก : บันทึกสลักหลัง</h4>
							</div>
							
							<div class="modal-body">		
							<input type="hidden" id="hd_endorseID_OL" value="">
							<input type="hidden" id="hd_endorse_code_OL" value="">
							<input type="hidden" id="hd_endorse_parent_OL" value="" >								
							<div class="table_width1">								
								<div class="text-center" style="padding: 10px 0"></div>
								<div class="row">
									<div class="datatbl_endorseAge_OL">
									<table class="table table-bordered" id="tbl_endorseAge_OL">
										<thead>
											<tr class="bg-primary">
												<th class="text-center" width="15%" style="border-right:none;">เลือก</th>
												<th class="text-center" width="25%" style="border-right:none;">รหัส</th>
												<th class="text-left" width="60%">ชื่อ</th>											
											</tr>
										</thead>
										<tbody>					
										</tbody>
									</table>
								</div>						
								</div>
								<div class="text-center" style="padding: 10px 0"></div>					
							</div>
							
							<!-- button -->
								<div class="row" align="center">						
										<button type="button" class="btn btn-primary" onclick="addEndorse_OL();">ตกลง</button>						
										<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>												
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<!-- ปุ่มยกเลิก -->
				<div id="cancelBoxOL_Basic" class="modal fade bd-example-modal-sm"
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
									<button type="button" class="btn btn-primary" onclick="cancelPage('product.jsp');">ยืนยัน</button>
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
				
				<!-- dialog warring drop baseplan -->
				<div class="modal fade" id="modal_dropBasePlan_OL" >
					<div class="modal-dialog">
						<div class="modal-body">
							<div class="box box-danger box-solid  " >
			                  <div class="box-header">
			                    เเจ้งเตือน
			                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
			                        <span aria-hidden="true">&times;</span></button>
			                  </div>
			                  <div class="box-body">
			                    	<label id="txt_dropBasePlan_OL">แน่ใจหรือไม่ว่าจะลบแบบประกันหลัก</label>
			                    	<div class="text-center" style="padding: 10px 0"></div>	
			                    	<div class="row" align="center">						
										<button type="button" class="btn btn-primary" id="bt_approved_dropBasePlanOL">ตกลง</button>						
										<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>												
									</div>
			            	   </div>
			                </div>
			                
						</div>
						</div>
					</div>
				<!-- </div> -->
			
			<!-- </div> -->
		 </div>
		<br clear="all">
	</div>
	
	<!-- modal การชำระเบี้ยด้วยบัตรเครดิต  -->
	<div class="modal fade" id="modal_infomation_OL" >
		  <div class="modal-dialog modal-lg">
			<div class="modal-body">
				<div class="box box-primary box-solid  " >
                  <div class="box-header">
                    คำแนะนำ
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span></button>
                  </div>
                  <div class="box-body">
                  
                  	<table class="table table-bordered" id="tb_information_OL">
                  		<thead>
                  			<tr>
                  				<th class="text-center bg-primary " colspan="3">การชำระเบี้ยประกันภัยด้วยบัตรเครดิต</th>
                  			</tr>
                  			<tr>
                  				<th width="20%" class="text-center bg-info">เบี้ยฯปีแรก</th>
                  				<th width="20%" class="text-center bg-info">เบี้ยฯปีต่อไป</th>
                  				<th width="60%" class="text-center bg-info">คำนิยาม</th>
                  			</tr>
                  		</thead>
                  		<tbody>
                  			<tr>
                  				<td>ไม่ได้</td>
                  				<td>ไม่ได้</td>
                  				<td>กลุ่มที่ 1 ไม่อนุญาตให้ชำระด้วยบัตรเครดิต (ระเบียบการเงินที่ 4-1/2561)</td>
                  			</tr>
                  			<tr>
                  				<td>ได้ ไม่มีค่าธรรมเนียม</td>
                  				<td>ได้ ไม่มีค่าธรรมเนียม</td>
                  				<td>กลุ่มที่ 2 อนุญาตให้ชำระด้วยบัตรเครดิตได้โดยตัวแทนรับผิดชอบค่าธรรมเนียมทั้งหมด (ระเบียบการเงินที่ 4-1/2561)</td>
                  			</tr>
                  			<tr>
                  				<td>ได้ มีค่าธรรมเนียมบางส่วน</td>
                  				<td>ได้ มีค่าธรรมเนียมบางส่วน</td>
                  				<td>กลุ่มที่ 3 อนุญาตให้ชำระด้วยบัตรเครดิตได้และตัวแทนรับผิดชอบค่าธรรมเนียมตามทีั่บริษัทกำหนด (ระเบียบการเงินที่ 4-1/2561)</td>
                  			</tr>
                  			<tr>
                  				<td>หักบัตรเครดิต</td>
                  				<td>หักบัตรเครดิต</td>
                  				<td>ตัดบัตรเครดิตอัตโนมัติ</td>
                  			</tr>
                  			<tr>
                  				<td>ได้ รับค่าธรรมเนียมทั้งหมด</td>
                  				<td>ได้ รับค่าธรรมเนียมทั้งหมด</td>
                  				<td>บริษัทรับผิดชอบค่าธรรมเนียมทั้งหมด</td>
                  			</tr>
                  			<tr>
                  				<td>ไม่ชำระ</td>
                  				<td>ไม่ชำระ</td>
                  				<td>ไม่สามารถชำระด้วยบัตรเครดิต ไม่อนุโลมให้จ่ายแม้จะรับผิดชอบค่าธรรมเนียมเอง</td>
                  			</tr>
                  			<tr>
                  				<td>ไม่มี</td>
                  				<td>ไม่มี</td>
                  				<td>ไม่มีเบี้ยประกันภัยปีต่อไป</td>
                  			</tr>
                  		</tbody>
                  	</table>
                 
                    	<div class="text-center" style="padding: 10px 0"></div>	
                    	<div class="row" align="center">						
							<button type="button" class="btn btn-primary" data-dismiss="modal">ปิด</button>												
						</div>
            	   </div>
                </div>
			</div>
		</div>
	</div>
	
	
</div>


<!-------------------- hidden value ------------------------->
<input id="type_tb_pmRate_OL" type="hidden">
<input id="base_male_OL" type="hidden" value="N">
<input id="base_female_OL" type="hidden" value="N">
<input id="rider_male_OL" type="hidden" value="N">
<input id="rider_female_OL" type="hidden" value="N">
<input id="sperately_Pay_month_base_OL" type="hidden" >
<input id="sperately_Pay_month_rider_OL" type="hidden" >
<input id="arr_prd_rider_code_delete_OL" type="hidden" >

<input id="sl_unit_age_coordinates_OL" type="hidden"/>
<input id="rate_cat_tbBase_OL" type="hidden"/>

<input type="hidden" id="layout_NAR1_OL" >
<input type="hidden" id="layout_NAR2_OL" >
<input type="hidden" id="rate_cat_NAR_OL" >
<input type="hidden" id="sub_cat_NAR_OL" >

<input type="hidden" id="base64_fileTXT_OL">

<input type="hidden" id="flag_email_send_OL" value="F">
<!----------------------------------------------------------->
</body>
</html>