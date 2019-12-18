<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>การใช้สิทธิ์ตามกรมธรรม์</title>

</head>
<body>
<div class="row box-body" id="div_main_menuOL_2">
	<div class="panel panel-primary">
		<div class="panel-heading">
				<p class="margin0 text-center">
					<B>การใช้สิทธิ์ตามกรมธรรม์</B>
				</p>
		</div>
		<div class="col-sm-11 style_basic_table1 style_col_float_margin">
			<div class="text-center" style="padding: 10px 0"></div>
				<!-- //////////////////////////// -->
				<div class="row pd-bt">
					  <div class="col-sm-2">
					  	<label for="lb_contact" class="control-label-left"
							style="margin-top: 8px;">การเปลี่ยนแปลงเงื่อนไขหลังออก กธ.</label>
					</div>
					<div id="div_change_condition_OL" class="col-sm-8 panel panel-default panel_style1"></div>
				</div>
				<div class="row pd-bt disabledAll">
					<div class="col-sm-2"></div>
					<div id="div_cvPrd_OL" class="col-sm-8 panel panel-default panel_style1 padding_all2">
						 <div class="col-sm-12">
							<div class="col-sm-4">
							 	<input type="checkbox" id="ch_policyLoan_OL" value="true">
							 	<label for="ch_policyLoan_OL" class="control-label-left label_input3 ">Policy Loan Interest</label>
							 </div>
							 <div class="col-sm-2 padding0 width12">
								<input type="text" class="auto text-right form-control" id="val_policyLoan_OL" value="0.00" data-v-min="0.00" data-v-max="999.99" maxlength="5">
							 </div>
							 <div class="col-sm-1 paddingtop_8px">	
								<label>%</label>
							</div>
							
							<div class="col-sm-3">
							 	<input type="checkbox" id="ch_APL_OL" value="true">
							 	<label for="ch_APL_OL" class="control-label-left label_input3 ">APL Interest</label>
							 </div>
							 <div class="col-sm-2 padding0 width12">
								<input type="text" class="auto text-right form-control" id="val_APL_OL" value="0.00" data-v-min="0.00" data-v-max="999.99" maxlength="5">
							 </div>
							 <div class="col-sm-1 paddingtop_8px">	
								<label>%</label>
							</div>						 	
						 </div>
						 
						 <div class="col-sm-12 padding_all9">
							<div class="col-sm-5">
							 	<input type="checkbox" id="ch_surrenderPRD_OL" value="true">
							 	<label for="ch_surrenderPRD_OL" class="control-label-left label_input3 ">เวนคืนกรมธรรม์ (Surrender)</label>
							 </div>
							 <div class="col-sm-5 padding0">
								<input type="text" id="txt_surrenderPRD_OL" class="text-right form-control" value="">
							 </div>
						 </div>
						 
						 <div class="col-sm-12">
							<div class="col-sm-5">
							 	<input type="checkbox" id="ch_cvclaim_OL" value="true">
							 	<label for="ch_cvclaim_OL" class="control-label-left label_input3 ">CV หัก Claim</label>
							 </div>
						 </div>						 
					</div>
				</div>
				<div class="row pd-bt disabledAll">
					<div class="col-sm-2"></div>
					<div id="div_ETIPrd_OL" class="col-sm-8 panel panel-default panel_style1 padding_all2">
						 <div class="col-sm-12">
							<div class="col-sm-5">
							 	<input type="checkbox" id="ch_ETIprd_OL" value="true">
							 	<label for="ch_ETIprd_OL" class="control-label-left label_input3 ">ปิดบัญชีขยายเวลา (ETI)</label>
							 </div>
							 <div class="col-sm-5 padding0">
								<input type="text" id="txt_ch_ETIprd_OL" class="text-right form-control" value="">
							 </div>					 	
						 </div>
						 
						 <div class="col-sm-12 padding_all9">
							<div class="col-sm-5 margintop_diff10px">
							 	<input type="checkbox" id="ch_AutoETIprd_OL" value="true">
							 	<label for="ch_AutoETIprd_OL" class="control-label-left label_input3 lb_style1">ปิดบัญชีขยายเวลาอัตโนมัติ (Auto ETI)</label>
							 </div>
							 <div class="col-sm-5 padding0">
								<input type="text" id="txt_AutoETIprd_OL" class="text-right form-control" value="">
							 </div>	
						 </div>
						 
						 <div class="col-sm-12 padding_all9 margintop_diff20px">
							<div class="col-sm-5">
							 	<input type="checkbox" id="ch_ETItoprd_OL" value="true">
							 	<label for="ch_ETItoprd_OL" class="control-label-left label_input3 ">ETI คุ้มครองถึง</label>
							 </div>
							 <div class="col-sm-2 paddingtop_4px">
							 <input type="text" id="ip_ETItoprd_OL" class="form-control" value=""><!-- <label id="lb_ETItoprd_OL"></label> --></div>
							 <div class="col-sm-3 padding0">
								<input type="text" id="txt_ETItoprd_OL" class="text-right form-control" value="">
							 </div>	
							 <div class="col-sm-2 paddingtop_6px"><label id="lb_ETItoprdUnit_OL">ปี</label></div>
						 </div>						 
					</div>
				</div>
				<div class="row pd-bt disabledAll">
					<div class="col-sm-2"></div>
					<div id="div_RPUPrd_OL" class="col-sm-8 panel panel-default panel_style1 padding_all2">
						 <div class="col-sm-12">
							 <div class="col-sm-5">
							 	<input type="checkbox" id="ch_PRUprd_OL" value="true">
							 	<label for="ch_PRUprd_OL" class="control-label-left label_input3 ">ปิดบัญชีมูลค่าเงินสำเร็จ (RPU)</label>
							 </div>
							 <div class="col-sm-4 padding0">
								<input type="text" id="txt_ch_PRUprd_OL" class="text-right form-control" value="">					
							 </div>	
							 <div class="col-sm-3">
								<input type="checkbox" id="ch_PRUCloseprd_OL" value="true">
							 	<label for="ch_PRUCloseprd_OL" class="control-label-left label_input3 ">หักหนี้สินก่อนปิด</label>				
							 </div>				 	
						 </div>

						 <div class="col-sm-12 padding_all9">
							<div class="col-sm-5 margintop_diff10px">
							 	<input type="checkbox" id="ch_AutoPRUprd_OL" value="true">
							 	<label for="ch_AutoPRUprd_OL" class="control-label-left label_input3 lb_style1">ปิดบัญชีมูลค่าเงินสำเร็จอัตโนมัติ (Auto RPU)</label>
							 </div>
							 <div class="col-sm-4 padding0">
								<input type="text" id="txt_AutoPRUprd_OL" class="text-right form-control" value="">
							 </div>	
							 <div class="col-sm-3">
								<input type="checkbox" id="ch_AutoPRUCloseprd_OL" value="true">
							 	<label for="ch_AutoPRUCloseprd_OL" class="control-label-left label_input3 ">หักหนี้สินก่อนปิด</label>				
							 </div>		
						 </div>
						  
						 <div class="col-sm-12">
							 <div class="col-sm-11 panel panel-default marginleft_style14 margin_bottom_style1">
								<div class="col-sm-12 padding_all1">
									<div class="col-sm-6">
										<input type="radio" name="rd_AutoRPU_OL[]" id="rd_AutoRPU_OL1" value=""><label for="rd_AutoRPU_OL1" class="label_input2">คุ้มครองด้วยทุนเริ่ม </label>
									</div>
									<div class="col-sm-6">
										<input type="radio" name="rd_AutoRPU_OL[]" id="rd_AutoRPU_OL2" value=""><label for="rd_AutoRPU_OL2" class="label_input2">คุ้มครองด้วยทุนมรณกรรม</label>
									</div>
								</div>
							</div>				 	
						 </div>
						 
						 <div class="col-sm-12 padding_all9 margintop_diff20px">
							<div class="col-sm-5">
							 	<input type="checkbox" id="ch_RPUtoprd_OL" value="true">
							 	<label for="ch_PRUtoprd_OL" class="control-label-left label_input3 ">RPU คุ้มครองถึง</label>
							 </div>
							 <div class="col-sm-2 paddingtop_4px"><input type="text" id="ip_PRUtoprd_OL" class="form-control" value=""><!-- <label id="lb_PRUtoprd_OL">อายุ</label> --></div>
							 <div class="col-sm-2 padding0 ">
								<input type="text" id="txt_PRUtoprd_OL" class="text-right form-control" value="">
							 </div>	
							 <div class="col-sm-2 paddingtop_6px"><label id="lb_PRUtoprdUnit_OL">ปี</label></div>
						 </div>						 
					</div>
				</div>	
				
			<div class="row pd-bt">
				<div class="col-sm-2">
					<label for="lb_contact" class="control-label-left"
						style="margin-top: 8px;">การเวนคืน กธ.</label>
				</div>
				<div class="col-sm-10">
					<table class="table table-bordered " width="100%"
						id="tb_policyholder_OL">
						<thead>
							<tr>
								<th width="20%"
									class="text-center verticalCenter tablecolorhead3 borderBlack">
									Coverage<br>หลัก / เพิ่มเติม
								</th>
								<!-- <th width="10%"
									class="text-center verticalCenter tablecolorhead3 borderBlack">
									ประเภทความคุ้มครอง</th> -->
								<th width="25%"
									class="text-center verticalCenter tablecolorhead3 borderBlack">
									ตารางมูลค่ากรมธรรม์</th>
								<th width="25%"
									class="text-center verticalCenter tablecolorhead3 borderBlack">
									ตาราง CV</th>
								<th width="20%"
									class="text-center verticalCenter tablecolorhead3 borderBlack">
									สูตร</th>
							</tr>
						</thead>
						<tbody>
						</tbody>
					</table>
				</div>
		
			</div>
			<div class="row pd-bt">
				<div class="col-sm-9"></div>
				<div class="productpadding col-sm-1">
					<button class="btn btn-default btn-primary" type="button" id="" onclick="bt_Menu2_Confirm_OL();">บันทึก</button>
				</div>
				<div class="productpadding col-sm-1">
					<button class="btn btn-default btn-primary" type="button" id="" data-dismiss="modal" data-toggle="modal" data-target="#cancelBoxOL_InsureRight">ยกเลิก</button>
				</div>
				<div class="col-sm-1"></div>
			</div>
			<div class="text-center" style="padding: 10px 0"></div>
			<!-- //////////////////////////// -->
		</div>	
		<br clear="all">	
	</div>
	
	<!-- ปุ่มยกเลิก -->
	<div id="cancelBoxOL_InsureRight" class="modal fade bd-example-modal-sm"
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
	
</div>


<!----------------------------- hidden value ------------------------------------------->
<input type="hidden" id="hide_sl_cal_OL" />


</body>
</html>