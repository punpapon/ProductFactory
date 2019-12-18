<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>ผลประโยชน์/ความคุ้มครอง</title>

</head>
<body>
<div id="mainBenefit_OL">
		<div class="col-md-12">			
					<div class="text-center" style="padding: 10px 0"></div>
					<div id="div_BenefitOL" class="scroll_benefit_rider">
						<table class="table table-bordered borderBlack" id="tbl_benefit_OL">
					  <thead>
					  	<tr class="borderBlack bg-primary"> 
					  		<th class="text-center borderBlack">เลือก</th>
					  		<th class="text-center borderBlack">ผลประโยชน์/ความคุ้มครอง</th>
					  	</tr>
					  </thead>
					  <tbody>
					  
					  </tbody>				  	
					  </table>
					</div>
					  
					  <div class="text-center" style="padding: 10px 0"></div>
						<div class="row">							
							<div class="col-md-4" style="float:right;">
								<div class="col-md-6">
									<button class="btn btn-primary width100 displayNone" id="benefitView_OL" onclick="confirmSelectBenefit_OL();">ดูข้อมูล</button>
									<button class="btn btn-primary width100" id="benefitSubmit_OL" onclick="confirmSelectBenefit_OL();">บันทึก</button>
								</div>
								<div class="col-md-6" style="padding-right: 0">
									<button class="btn btn-primary width100" data-dismiss="modal" data-toggle="modal"
											data-target="#cancelBoxOL_menu5">ยกเลิก</button>
								</div>
							</div>
						</div>																
		</div>	
</div>
<div id="pageBenefitDetail_OL">
</div>
<!-- benefit detail -->
<div id='benefitDetail_OL' class='displayNone'>
	<div class='text-center' style='padding: 20px 0'></div>
	<ul class='nav nav-tabs' id='tabBenefitRider_OL'></ul>
</div>
		
    <!-- modal เลือกความคุ้มครอง -->
	<div class="modal fade" id="modal_selectCoverage_OL" role="dialog">
		<div class="modal-dialog modal-lg">

			<!-- Modal content-->			
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">กรุณาเลือกความคุ้มครอง</h4>
				</div>
				<div class="modal-body">
				<input type="hidden" id="ParentID_benefitOL">	
				<input type="hidden" id="BCID_benefitOL">
	
				<!-- กลุ่มของความคุ้มครอง -->
				<div class="table_width1">
					<div class="row">
						<div class="col-md-12">
							<div class="input-group">
								<span>
								 <input type="radio" id="select_benefit1_OL" name="select_benefit_OL" onclick="displayBenefitValueOL_popup();" checked> กลุ่มของความคุ้มครอง
								</span>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12">							
							<textarea class="form-control resizeNone" rows="4" id="benefit_desc_OL"></textarea>							
						</div>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>					
								
				</div>
				
				<!-- ความคุ้มครอง -->
				<div class="table_width1">
					<div class="row">
						<div class="col-md-12">
							<div class="input-group">
								<span>
								 <input type="radio" id="select_benefit2_OL" name="select_benefit_OL" onclick="displayBenefitValueOL_popup();"> ความคุ้มครอง
								</span>
							</div>
						</div>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row" id="div_bnfOpt_OL">
					<input type="hidden" id="OptSub_benefitOL">
						<!-- <div class="datatbl_BenefitOpt1_OL">
						tbl opt1
						<table class="table table-bordered" id="div_bnfOpt_OL">
							<thead>
								<tr class="bg-primary">
									<th class="text-center" width="10%" style="border-right:none; vertical-align:middle;">เลือก</th>
									<th class="text-center" width="20%" style="border-right:none;">รหัสความคุ้มครอง</th>
									<th class="text-center" width="70%" style="vertical-align:middle;">ความคุ้มครอง</th>									
								</tr>
							</thead>
							<tbody>
										
							</tbody>
						</table>
						<div class="text-center" style="padding: 10px 0"></div>	
						button
						<div class="row" align="center">						
								<button type="button" class="btn btn-primary" id="btn_OpenSaveBenefit_modal1_OL" onclick="saveBenefitValueOL_popup(1);">ตกลง</button>						
								<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>												
						</div>
						</div> -->
						
						<!-- tbl opt2 -->
						<!-- <div class="datatbl_BenefitOpt2_OL displayNone">
						<table class="table table-bordered" id="tbl_BenefitOpt2_OL">
							<thead>
								<tr class="bg-primary">
									<th class="text-center" width="10%" style="border-right:none; vertical-align:middle;">เลือก</th>
									<th class="text-center" width="20%" style="border-right:none;">รหัสความคุ้มครอง</th>
									<th class="text-center" width="70%" style="vertical-align:middle;">ความคุ้มครอง</th>									
								</tr>
							</thead>
							<tbody>
																			
							</tbody>
						</table>
						<div class="text-center" style="padding: 10px 0"></div>			
						<div class="row" align="center">						
								<button type="button" class="btn btn-primary" id="btn_submit_fileuploadPolicy_CL">ตกลง</button>						
								<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>												
						</div>
						</div> -->
						
						<!-- option2 select -->
						<!-- <input type="hidden" id="OptSub_benefitOL">
						<div class="datatbl_BenefitOpt2Sub_OL displayNone">
						<table class="table table-bordered" id="tbl_BenefitOpt2Sub_OL">
							<thead>
								<tr class="bg-primary">
									<th class="text-center" width="10%" style="border-right:none; vertical-align:middle;">เลือก</th>
									<th class="text-center" width="20%" style="border-right:none;">รหัสความคุ้มครอง</th>
									<th class="text-center" width="70%" style="vertical-align:middle;">ความคุ้มครอง</th>									
								</tr>
							</thead>
							<tbody>
														
							</tbody>
						</table>
						<div class="text-center" style="padding: 10px 0"></div>	
						button
						<div class="row" align="center">						
								<button type="button" class="btn btn-primary" id="btn_SaveEditBenefit1_OL" onclick="saveBenefitValueOL_popup(2);">ตกลง</button>						
								<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>												
						</div>
						</div> -->
																	
					</div>
							
				</div>				
				</div>
			</div>
		</div>
	</div>
	
	<!-- modal แก้ไขความคุ้มครอง -->
	<div class="modal fade" id="modal_editCoverage_OL" role="dialog">
		<div class="modal-dialog modal-lg">

			<!-- Modal content-->			
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">กรุณาเลือกความคุ้มครอง</h4>
				</div>
				<div class="modal-body">
				<input type="hidden" id="ParentID_benefitOL_edit">	
				<input type="hidden" id="BCID_benefitOL_edit">
				
				<!-- edit -->
				<input type="hidden" id="optSelect_OL">
				<input type="hidden" id="dataID_OL">
				<input type="hidden" id="dataName_OL">	
				<input type="hidden" id="data_oldsave_OL">						
				<!-- กลุ่มของความคุ้มครอง -->
				<div class="table_width1">
					<div class="row">
						<div class="col-md-12">
							<div class="input-group">
								<span>
								 <input type="radio" id="select_benefit1_OL_edit" name="select_benefit_OL_edit" onclick="displayBenefitValueEditOL_popup();"> กลุ่มของความคุ้มครอง
								</span>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12">							
							<textarea class="form-control resizeNone" rows="4" id="benefit_desc_edit_OL"></textarea>							
						</div>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>					
								
				</div>
				
				<!-- ความคุ้มครอง -->
				<div class="table_width1">
					<div class="row">
						<div class="col-md-12">
							<div class="input-group">
								<span>
								 <input type="radio" id="select_benefit2_OL_edit" name="select_benefit_OL_edit" onclick="displayBenefitValueEditOL_popup();"> ความคุ้มครอง
								</span>
							</div>
						</div>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row" id="div_bnfOptEdit_OL">
					<input type="hidden" id="OptSub_benefitedit_OL">
						<!-- <div class="datatbl_BenefitOpt1Edit_OL">
						tbl opt1
						<table class="table table-bordered" id="tbl_BenefitOpt1Edit_OL">
							<thead>
								<tr class="bg-primary">
									<th class="text-center" width="10%" style="border-right:none; vertical-align:middle;">เลือก</th>
									<th class="text-center" width="20%" style="border-right:none;">รหัสความคุ้มครอง</th>
									<th class="text-center" width="70%" style="vertical-align:middle;">ความคุ้มครอง</th>									
								</tr>
							</thead>
							<tbody>
													
							</tbody>
						</table>
						<div class="text-center" style="padding: 10px 0"></div>	
						button
						<div class="row" align="center">						
								<button type="button" class="btn btn-primary" id="btn_saveBenefit_modal1_OL" onclick="saveBenefitValueEditOL_popup();">ตกลง</button>						
								<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>												
						</div>
						</div> -->
						
						<!-- tbl opt2 -->
						<!-- <div class="datatbl_BenefitOpt2Edit_OL displayNone">
						<table class="table table-bordered" id="tbl_BenefitOpt2Edit_OL">
							<thead>
								<tr class="bg-primary">
									<th class="text-center" width="10%" style="border-right:none; vertical-align:middle;">เลือก</th>
									<th class="text-center" width="20%" style="border-right:none;">รหัสความคุ้มครอง</th>
									<th class="text-center" width="70%" style="vertical-align:middle;">ความคุ้มครอง</th>									
								</tr>
							</thead>
							<tbody>
																
							</tbody>
						</table>
						<div class="text-center" style="padding: 10px 0"></div>			
						<div class="row" align="center">						
								<button type="button" class="btn btn-primary" id="btn_submit_fileuploadPolicy_CL">ตกลง</button>						
								<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>												
						</div>
						</div> -->
						
						<!-- option2 select -->
						<!-- <input type="hidden" id="OptSub_benefitedit_OL">
						<div class="datatbl_BenefitOpt2SubEdit_OL displayNone">
						<table class="table table-bordered" id="tbl_BenefitOpt2SubEdit_OL">
							<thead>
								<tr class="bg-primary">
									<th class="text-center" width="10%" style="border-right:none; vertical-align:middle;">เลือก</th>
									<th class="text-center" width="20%" style="border-right:none;">รหัสความคุ้มครอง</th>
									<th class="text-center" width="70%" style="vertical-align:middle;">ความคุ้มครอง</th>									
								</tr>
							</thead>
							<tbody>
													
							</tbody>
						</table>
						<div class="text-center" style="padding: 10px 0"></div>	
						button
						<div class="row" align="center">						
								<button type="button" class="btn btn-primary" id="btn_SaveEditBenefit2_OL" onclick="saveBenefitValueEditOL_popup();">ตกลง</button>						
								<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>												
						</div>
						</div>	 -->																
					</div>							
				</div>				
				</div>
			</div>
		</div>
	</div>
	
	<!-- ปุ่มยกเลิกหลัก -->		
	<div id="cancelBoxOL_menu5" class="modal fade bd-example-modal-sm"
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
	
	<!-- ปุ่มยกเลิกย่อย -->
	<div id="cancelBoxOL_Benefit" class="modal fade bd-example-modal-sm"
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
								<button type="button" class="btn btn-primary" data-dismiss="modal" onclick="cancelTab_OL(1);">ยืนยัน</button>
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
		
	<!-- ของความคุ้มครอง -->
	<div class="modal fade" id="modal_TableCoverage_OL" role="dialog">
		<div class="modal-dialog modal-lg">

			<!-- Modal content-->			
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">กรุณาเลือกของความคุ้มครอง</h4>
				</div>
				<div class="modal-body">				
				<input type="hidden" id="BCID_tblOL">
				<input type="hidden" id="dataID_tblOL">
												
				<!-- ความคุ้มครอง -->
				<div class="table_width1">
					<div class="row">
						<div class="datatbl_CoverageofBenefit_OL">
						<!-- tbl -->
						<table class="table table-bordered" id="tbl_CoverageofBenefit_OL">
							<thead>
								<tr class="bg-primary">
									<th class="text-center" width="10%" style="border-right:none; vertical-align:middle;">เลือก</th>
									<th class="text-center" width="10%" style="border-right:none;">ลำดับ</th>
									<th class="text-center" width="20%" style="border-right:none;">รหัสความคุ้มครอง</th>
									<th class="text-center" width="70%" style="vertical-align:middle;">ความคุ้มครอง</th>									
								</tr>
							</thead>
							<tbody>
										
							</tbody>
						</table>
						<div class="text-center" style="padding: 10px 0"></div>	
						<!-- button -->
						<div class="row" align="center">						
								<button type="button" class="btn btn-primary" id="btn_saveSelectCoverage_OL" onclick="saveSelectCoverage_OL();">ตกลง</button>						
								<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>												
						</div>
						</div>
						
				
					</div>							
				</div>				
				</div>
			</div>
		</div>
	</div>
	
	<!-- เลือกรายการข้อยกเว้นการจ่ายเงินทดแทนในกรณีโรคร้ายแรง -->				
	<div class="modal fade" id="modal_exception_OL" role="dialog">
		<div class="modal-dialog modal-lg">

			<!-- Modal content-->			
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">กรุณาเลือกรายการข้อยกเว้น</h4>
				</div>
				<div class="modal-body">				
				
				<!-- รายการข้อยกเว้นการจ่ายเงินทดแทนในกรณีโรคร้ายแรง -->
				<div class="table_width1">
					<div class="row">
						<div class="datatbl_exception_OL">
						<!-- tbl -->
						<table class="table table-bordered" id="tbl_exception_OL">
							<thead>
								<tr class="bg-primary">
									<th class="text-center" width="10%" style="border-right:none; vertical-align:middle;">เลือก</th>
									<!-- <th class="text-center" width="20%" style="border-right:none;">รหัส</th> -->
									<th class="text-center" width="70%" style="vertical-align:middle;">รายการข้อยกเว้นการจ่ายเงินทดแทนในกรณีโรคร้ายแรง</th>									
								</tr>
							</thead>
							<tbody>
								
							</tbody>
						</table>
						<div class="text-center" style="padding: 10px 0"></div>	
						<!-- button -->
						<div class="row" align="center">						
								<button type="button" class="btn btn-primary" id="btn_exception_OL" onclick="saveSelectexception_OL();">ตกลง</button>						
								<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>												
						</div>
						</div>				
					</div>							
				</div>				
				</div>
			</div>
		</div>
	</div>
	
	
	<!-- Hidden Value -->
	<input type="hidden" id="resultTab_OL" name="resultTab_OL[]">
	
	<input type="hidden" id="lookup_unit_OL" />
	<input type="hidden" id="lookup_factor_unit_OL" />
	<input type="hidden" id="lookup_frequency_OL" />
	<input type="hidden" id="lookup_unit_factor_OL" />
	<input type="hidden" id="lookup_factorScope_OL" />
	<!-- โรคร้ายแรง -->
	<input type="hidden" id="lookup_bnf_unit_OL"/>
	<input type="hidden" id="lookup_bnf_SA_OL"/>
	<input type="hidden" id="lookup_bnf_SAunit_OL"/>
	<input type="hidden" id="lookup_cvpv_OL"/>
	<input type="hidden" id="lookup_premium_OL"/>
	<input type="hidden" id="lookup_other_OL"/>
	<input type="hidden" id="lookup_unit_OL"/>
	<input type="hidden" id="lookup_calendar_unit_OL"/>
	<input type="hidden" id="lookup_sa_unit_OL"/>
	<input type="hidden" id="lst_premium_sl" />
	<input type="hidden" id="lookup_disease_unit_OL" />
	 
</body>
</html>