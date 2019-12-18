<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>ผลประโยชน์/ความคุ้มครอง</title>

</head>
<body>
<div id="mainBenefit_CL">
		<div class="col-md-12">			
					<div class="text-center" style="padding: 10px 0"></div>
					<div id="div_BenefitCL" class="scroll_benefit_rider">
						<table class="table table-bordered borderBlack" id="tbl_benefit_CL">
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
									<button class="btn btn-primary width100 displayNone" id="benefitView_CL" onclick="confirmSelectBenefit_CL();">ดูข้อมูล</button>
									<button class="btn btn-primary width100" id="benefitSubmit_CL" onclick="confirmSelectBenefit_CL();">บันทึก</button>
								</div>
								<div class="col-md-6" style="padding-right: 0">
									<button class="btn btn-primary width100" data-dismiss="modal" data-toggle="modal"
											data-target="#cancelBoxCL_menu5">ยกเลิก</button>
								</div>
							</div>
						</div>																
		</div>	
</div>
<div id="pageBenefitDetail">
</div>
<!-- benefit detail -->
<div id='benefitDetail_CL' class='displayNone'>
	<div class='text-center' style='padding: 20px 0'></div>
	<ul class='nav nav-tabs' id='tabBenefitRider_CL'></ul>
</div>
		
    <!-- modal เลือกความคุ้มครอง -->
	<div class="modal fade" id="modal_selectCoverage_CL" role="dialog">
		<div class="modal-dialog modal-lg">

			<!-- Modal content-->			
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">กรุณาเลือกความคุ้มครอง</h4>
				</div>
				<div class="modal-body">
				<input type="hidden" id="ParentID_benefitCL">	
				<input type="hidden" id="BCID_benefitCL">
	
				<!-- กลุ่มของความคุ้มครอง -->
				<div class="table_width1">
					<div class="row">
						<div class="col-md-12">
							<div class="input-group">
								<span>
								 <input type="radio" id="select_benefit1_CL" name="select_benefit_CL" onclick="displayBenefitValueCL_popup();" checked> กลุ่มของความคุ้มครอง
								</span>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12">							
							<textarea class="form-control resizeNone" rows="4" id="benefit_desc"></textarea>							
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
								 <input type="radio" id="select_benefit2_CL" name="select_benefit_CL" onclick="displayBenefitValueCL_popup();"> ความคุ้มครอง
								</span>
							</div>
						</div>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row" id="div_bnfOpt_CL">
						<input type="hidden" id="OptSub_benefitCL">
						<!-- <div class="datatbl_BenefitOpt1_CL">
						tbl opt1
						<table class="table table-bordered" id="tbl_BenefitOpt1_CL">
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
								<button type="button" class="btn btn-primary" id="btn_OpenSaveBenefit_modal1" onclick="saveBenefitValueCL_popup(1);">ตกลง</button>						
								<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>												
						</div>
						</div> -->
						
						<!-- tbl opt2 -->
						<!-- <div class="datatbl_BenefitOpt2_CL displayNone">
						<table class="table table-bordered" id="tbl_BenefitOpt2_CL">
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
						
						<!-- <div class="datatbl_BenefitOpt2Sub_CL">
						<table class="table table-bordered" id="tbl_BenefitOpt2Sub_CL">
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
								<button type="button" class="btn btn-primary" id="btn_SaveEditBenefit1" onclick="saveBenefitValueCL_popup(2);">ตกลง</button>						
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
	<div class="modal fade" id="modal_editCoverage_CL" role="dialog">
		<div class="modal-dialog modal-lg">

			<!-- Modal content-->			
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">กรุณาเลือกความคุ้มครอง</h4>
				</div>
				<div class="modal-body">
				<input type="hidden" id="ParentID_benefitCL_edit">	
				<input type="hidden" id="BCID_benefitCL_edit">
				
				<!-- edit -->
				<input type="hidden" id="optSelect">
				<input type="hidden" id="dataID">
				<input type="hidden" id="dataName">	
				<input type="hidden" id="data_oldsave">						
				<!-- กลุ่มของความคุ้มครอง -->
				<div class="table_width1">
					<div class="row">
						<div class="col-md-12">
							<div class="input-group">
								<span>
								 <input type="radio" id="select_benefit1_CL_edit" name="select_benefit_CL_edit" onclick="displayBenefitValueEditCL_popup();"> กลุ่มของความคุ้มครอง
								</span>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12">							
							<textarea class="form-control resizeNone" rows="4" id="benefit_desc_edit"></textarea>							
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
								 <input type="radio" id="select_benefit2_CL_edit" name="select_benefit_CL_edit" onclick="displayBenefitValueEditCL_popup();"> ความคุ้มครอง
								</span>
							</div>
						</div>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row" id="div_bnfOptEdit_CL">
						<input type="hidden" id="OptSub_benefitedit_CL">
						<!-- <div class="datatbl_BenefitOpt1Edit_CL">
						tbl opt1
						<table class="table table-bordered" id="tbl_BenefitOpt1Edit_CL">
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
								<button type="button" class="btn btn-primary" id="btn_saveBenefit_modal1" onclick="saveBenefitValueEditCL_popup();">ตกลง</button>						
								<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>												
						</div>
						</div> -->
						
						<!-- tbl opt2 -->
						<!-- <div class="datatbl_BenefitOpt2Edit_CL displayNone">
						<table class="table table-bordered" id="tbl_BenefitOpt2Edit_CL">
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
						
						<!-- <div class="datatbl_BenefitOpt2SubEdit_CL displayNone">
						<table class="table table-bordered" id="tbl_BenefitOpt2SubEdit_CL">
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
								<button type="button" class="btn btn-primary" id="btn_SaveEditBenefit2" onclick="saveBenefitValueEditCL_popup();">ตกลง</button>						
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
	<div id="cancelBoxCL_menu5" class="modal fade bd-example-modal-sm"
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
	<div id="cancelBoxCL_Benefit" class="modal fade bd-example-modal-sm"
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
								<button type="button" class="btn btn-primary" data-dismiss="modal" onclick="cancelTab(1);">ยืนยัน</button>
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
	<div class="modal fade" id="modal_TableCoverage_CL" role="dialog">
		<div class="modal-dialog modal-lg">

			<!-- Modal content-->			
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">กรุณาเลือกของความคุ้มครอง</h4>
				</div>
				<div class="modal-body">				
				<input type="hidden" id="BCID_tblCL">
				<input type="hidden" id="dataID_tblCL">
												
				<!-- ความคุ้มครอง -->
				<div class="table_width1">
					<div class="row">
						<div class="datatbl_CoverageofBenefit_CL">
						<!-- tbl -->
						<table class="table table-bordered" id="tbl_CoverageofBenefit_CL">
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
								<button type="button" class="btn btn-primary" id="btn_saveSelectCoverage_CL" onclick="saveSelectCoverage_CL();">ตกลง</button>						
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
	<input type="hidden" id="resultTab" name="resultTab[]">
	
	<input type="hidden" id="lookup_unit" />
	<input type="hidden" id="lookup_factor_unit" />
	<input type="hidden" id="lookup_frequency" />
	<input type="hidden" id="lookup_factorUnit" />
	<input type="hidden" id="lookup_factorScope" />

</body>
</html>