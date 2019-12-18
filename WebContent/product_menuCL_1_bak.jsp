<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>ข้อมูลทั่วไป Basic Information</title>
</head>
<body>
<div class="row box-body">
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
						style="margin-top: 8px;">รหัสผลิตภัณฑ์</label>
				</div>
				<div class="col-sm-5">
					<input type="text" class="form-control" id="pass_Insurance_product_cl" value="" readonly>
				</div>
			</div>
			<div class="row pd-bt">
				<div class="col-sm-2">
					<label for="lb_contact" class="control-label-left"
						style="margin-top: 8px;">ชื่อ(ไทย)</label>
				</div>
				<div class="col-sm-8">
					<input type="text" class="form-control"
						value="กรมธรรม์ประกันชีวิตและทุพพลภาพถาวรสิ้นเชิงกลุ่มคุ้มครองสินเชื่อรถยนต์ สถาบันการ...">
				</div>
			</div>
			<div class="row pd-bt">
				<div class="col-sm-2">
					<label for="lb_contact" class="control-label-left"
						style="margin-top: 8px;">ชื่อ (อังกฤษ)</label>
				</div>
				<div class="col-sm-8">
					<input type="text" class="form-control"
						value="LIFE / TPD / ADD / TD / AME">
				</div>
			</div>
			<div class="row">
				<div class="col-sm-2">
					<label for="lb_contact" class="control-label-left"
						style="margin-top: 8px;">ชื่อทางการตลาด (ไทย)</label>
				</div>
				<div class="col-sm-8">
					<input type="text" class="form-control"
						value="โครงการแผนความคุ้มครองสินเชื่อเช่าซื้อรถยนต์">
				</div>
			</div>
			<div class="row pd-bt">
				<div class="col-sm-2">
					<label for="lb_contact" class="control-label-left"
						style="margin-top: 8px;">ชื่อทางการตลาด (อังกฤษ)</label>
				</div>
				<div class="col-sm-8">
					<input type="text" class="form-control" value="Orico Smile Care 1">
				</div>
			</div>
			<div class="row">
				<div class="col-sm-2">
					<label for="lb_contact" class="control-label-left"
						style="margin-top: 8px; color: #330166">แบบประกันหลัก</label>
				</div>
				<div class="col-sm-10 style_basic_table2">
					<table class="table borderless">
						<tr>
							<td colspan="10">
								<div id="divtb_PM_Rate1">
									<table class="table table-bordered" width="100%" id="tb_PM_Rate">
										<thead>
											<tr>
												<th width="20%" class="text-center verticalCenter tablecolorhead1 borderBlack">รหัสแบบประกันหลัก</th>
												<th width="40%" class="text-center verticalCenter tablecolorhead1 borderBlack">ชื่อ
													(ไทย)</th>
												<th width="30%" class="text-center verticalCenter tablecolorhead1 borderBlack"
													colspan="2">PM_Rate</th>
												<th width="7%" class="text-center verticalCenter tablecolorhead1 borderBlack">ดูค่า</th>
												<th width="5%" class="text-center verticalCenter tablecolorhead1 borderBlack">โหลด
												</th>
											</tr>
										</thead>
										<tbody></tbody>
									</table>
								</div>
							</td>
						</tr>
						<tr>
							<td colspan="10">
								<div class="col-sm-12 style_basic_div1">
									<div class="col-md-2" style="padding-right: 0">
										<input class="btn btn-primary width100" type="button"
											id="addrowPM_Rate" value="เลือก"
											data-toggle="modal" data-target="#modal_Choose_primary_insurance">
									</div>
									<div class="col-md-2" style="padding-right: 0">
										<input class="btn btn-primary width100" type="button"
											id="delrowPM_Rate" value="ลบ" onclick="deleteRowPM_Rate1 ();">
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
				<div class="col-sm-3">
					<select id="sel_Type_Additional_contract" class="form-control">
						<option>None</option>						
					</select>
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
						  <div id="div_tb_Additional_contract">
							<table class="table table-bordered " style="width:1200px;"
									id="tb_Additional_contract">
									<thead>
										<tr>
											<th width='3%' class='tablecolorhead2 borderBlack'></th>
											<th width="15%"
												class="text-center verticalCenter tablecolorhead2 borderBlack">รหัสแบบประกันหลัก</th>
											<th width="7%"
												class="text-center verticalCenter tablecolorhead2 borderBlack">ประเภทความคุ้มครอง</th>
											<th width="15%"
												class="text-center verticalCenter tablecolorhead2 borderBlack">ชื่อ
												(ไทย)</th>
											<th width="3%"
												class="text-center verticalCenter tablecolorhead2 borderBlack"></th>
											<th width="15%"
												class="text-center verticalCenter tablecolorhead2 borderBlack">PM_Rate</th>
											<th width="5%"
												class="text-center verticalCenter tablecolorhead2 borderBlack">ดูค่า</th>
											<th width="5%"
												class="text-center verticalCenter tablecolorhead2 borderBlack">โหลด
											</th>
											<th width="15%"
												class="text-center verticalCenter tablecolorhead2 borderBlack">ทุน Fix</th>
											<th width="15%"
												class="text-center verticalCenter tablecolorhead2 borderBlack">NAR</th>
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
							<div class="col-sm-9 style_basic_div1">
								<div class="col-md-2">
									<input class="btn btn-primary width100" type="button"
										id="addrowAdditional_contract" value="เลือก"
										data-toggle="modal" data-target="#modal_Additional_contract">
								</div>
								<div class="col-md-2 paddingleft0">
									<input class="btn btn-primary width100" type="button"
										id="delrowAdditional_contract" value="ลบ" onclick="deleteRowAdditional_contract();">
								</div>
								<div class="col-md-8"></div>
							</div>
						</td>
					</tr>
				</table>
				</div>				
			</div>
			<!-- package plan -->
			<div class="row margin_bottom_style2">
				<div class="col-sm-2">
					<label class="control-label-left" style="margin-top: 8px;"></label>
				</div>
				<div class="col-sm-10 style_basic_table2 displayNone" id="div_plan_YRT">
					<div class="col-sm-3 style_col_width22 col_middle marginleft_diff16px"><label>จำนวน SA Package</label></div>
					<div class="col-sm-2 col_middle marginleft_style5"><input type="text" class="form-control text-right" id="txb_sa_package" onkeydown="numberKey(this);" onkeyup="numberKey(this);"></div>
					<div class="col-sm-1 col_middle marginleft_style5">Plan</div>
					<div class="col-sm-12 marginleft_diff16px">
						<div id="div_tb_plan_YRT" class="margintop_20px"></div>					
					</div>
					
							<div class="col-sm-12 style_basic_div1 margintop_20px displayNone" id="btn_plan_YRT">
								<div class="col-md-2">
									<input class="btn btn-primary width100" type="button" id="addrowPlan_CL" value="&nbsp;&nbsp;เพิ่ม&nbsp;&nbsp;">
								</div>
								<div class="col-md-2 paddingleft0">
									<input class="btn btn-primary width100" type="button" id="delrowPlan_CL" value="ลบ">
								</div>
								<div class="col-md-8"></div>
							</div>
				</div>				
			</div>
			
			<!-- บันทึกสลักหลัง -->
			<div class="row">
				<div class="col-sm-2">
					<label class="control-label-left"
						style="margin-top: 8px;">บันทึกสลักหลัง</label>
				</div>
				<div class="col-sm-10 style_basic_table2">
					<div id="div_tb_endorse_CL">
							<table class="table table-bordered " style="width:70%" id="tb_endorse_CL">
									<thead>
										<tr>											
											<th width="15%"
												class="text-center verticalCenter bg-primary borderBlack">Coverage หลัก / เพิ่มเติม</th>
											<th width="7%"
												class="text-center verticalCenter bg-primary borderBlack">ประเภทความคุ้มครอง</th>											
											<th width="3%"
												class="text-center verticalCenter bg-primary borderBlack"></th>
											<th width="25%"
												class="text-center verticalCenter bg-primary borderBlack">Endorse</th>											
										</tr>
									</thead>
									<tbody>
									<tr id="tr_endorse_CV1" data-id="1" data-parent="0" data-level="1">											
											<td class="text-center verticalCenter borderBlack">
												<label class="font-term-purple font-bold">G_NC_LD_B_L015</label>
											</td>
											<td class="text-center verticalCenter fontcolortable2 borderBlack"></td>											
											<td class="text-center verticalCenter borderBlack">
												<i class="glyphicon glyphicon-plus icon-blue-circle" data-id="1" id="addrow_endorse1"></i>
											</td>
											<td class="verticalCenter borderBlack">
												<div class="input-group col-xs-12">
													<input type="file" accept=".txt" id="file_endorse_CV1" style="display: none">
													<input type="text" class="form-control" id="text_endorse_CV1" readonly>
													<span class="input-group-btn">
														<button class="btn btn-default btn-primary" type="button"id="btn_endorse_CV1">...</button>
													</span>
												</div>
											</td>											
										</tr>
										<tr id="tr_endorse_CV2" data-id="2" data-parent="0" data-level="2">											
											<td class="text-center verticalCenter borderBlack">
												<label class="font-term-green font-bold">G_NC_ML_R_B38</label>
											</td>
											<td class="text-center verticalCenter borderBlack font-term-green font-bold">ADD</td>											
											<td class="text-center verticalCenter borderBlack">
												<i class="glyphicon glyphicon-plus icon-blue-circle" data-id="2" id="addrow_endorse2"></i>
											</td>
											<td class="verticalCenter borderBlack">
												<div class="input-group col-xs-12">
													<input type="file" accept=".txt" id="file_endorse_CV2" style="display: none">
													<input type="text" class="form-control" id="text_endorse_CV2" readonly>
													<span class="input-group-btn">
														<button class="btn btn-default btn-primary" type="button"id="btn_endorse_CV2">...</button>
													</span>
												</div>
											</td>											
										</tr>
										<tr id="tr_endorse_CV3" data-id="3" data-parent="0" data-level="2">											
											<td class="text-center verticalCenter borderBlack">
												<label class="font-term-green font-bold">G_NC_ML_R_E21</label>
											</td>
											<td class="text-center verticalCenter borderBlack font-term-green font-bold">TD</td>											
											<td class="text-center verticalCenter borderBlack">
												<i class="glyphicon glyphicon-plus icon-blue-circle" data-id="3" id="addrow_endorse3"></i>
											</td>
											<td class="verticalCenter borderBlack">
												<div class="input-group col-xs-12">
													<input type="file" accept=".txt" id="file_endorse_CV3" style="display: none">
													<input type="text" class="form-control" id="text_endorse_CV3" readonly>
													<span class="input-group-btn">
														<button class="btn btn-default btn-primary" type="button"id="btn_endorse_CV3">...</button>
													</span>
												</div>
											</td>											
										</tr>
										<tr id="tr_endorse_CV4" data-id="4" data-parent="0" data-level="2">											
											<td class="text-center verticalCenter borderBlack">
												<label class="font-term-green font-bold">G_NC_ML_R_M16</label>
											</td>
											<td class="text-center verticalCenter borderBlack font-term-green font-bold">AME</td>											
											<td class="text-center verticalCenter borderBlack">
												<i class="glyphicon glyphicon-plus icon-blue-circle" data-id="4" id="addrow_endorse4"></i>
											</td>
											<td class="verticalCenter borderBlack">
												<div class="input-group col-xs-12">
													<input type="file" accept=".txt" id="file_endorse_CV4" style="display: none">
													<input type="text" class="form-control" id="text_endorse_CV4" readonly>
													<span class="input-group-btn">
														<button class="btn btn-default btn-primary" type="button"id="btn_endorse_CV4">...</button>
													</span>
												</div>
											</td>											
										</tr>
									</tbody>
								</table>
							</div>
				</div>				
			</div>
			
			<!-- พิกัดอายุ -->
			<div class="row">
				<div class="col-sm-2">
					<label class="control-label-left"
						style="margin-top: 8px;">พิกัดอายุ</label>
				</div>
				<div class="col-sm-10 style_basic_table2">
				<div id="div_tb_ageRange_CL">
							<table class="table table-bordered " style="width:90%" id="tb_ageRange_CL">
									<thead>
										<tr>											
											<th width="15%"
												class="text-center verticalCenter bg-primary borderBlack" rowspan="2">Coverage หลัก / เพิ่มเติม</th>
											<th width="7%"
												class="text-center verticalCenter bg-primary borderBlack" rowspan="2">ประเภทความคุ้มครอง</th>																						
											<th width="25%"
												class="text-center verticalCenter bg-primary borderBlack" colspan="4">พิกัดอายุ</th>											
										</tr>
										<tr>
											<th width="15%" class="text-center verticalCenter bg-primary borderBlack">ตั้งแต่</th>										
											<th width="15%" class="text-center verticalCenter bg-primary borderBlack">ถึง</th>								
											<th width="15%" class="text-center verticalCenter bg-primary borderBlack">คุ้มครองสูงสุด</th>				
											<th width="15%" class="text-center verticalCenter bg-primary borderBlack">หน่วย</th>
										</tr>
									</thead>
									<tbody>
									<tr id="tr_ageRange_CV1" data-id="1" data-parent="0" data-level="1">											
											<td class="text-center verticalCenter borderBlack">
												<label class="font-term-purple font-bold">G_NC_LD_B_L015</label>
											</td>
											<td class="text-center verticalCenter fontcolortable2 borderBlack"></td>											
											<td class="text-center verticalCenter borderBlack">
												<input type="number" class="form-control margin-padding0 text-center width40px" value="1" min="1" onkeyup="numberKey(this);" onkeydown="numberKey(this);">
											</td>
											<td class="text-center verticalCenter borderBlack">
												<input type="number" class="form-control margin-padding0 text-center width40px" value="1" min="1" onkeyup="numberKey(this);" onkeydown="numberKey(this);">
											</td>
											<td class="text-center verticalCenter borderBlack">
												<input type="number" class="form-control margin-padding0 text-center width40px" value="1" min="1" onkeyup="numberKey(this);" onkeydown="numberKey(this);">
											</td>
											<td class="text-center verticalCenter borderBlack">												
												<select class="form-control width82px" id="ageRange_unit1_cl">
													<option value="">None</option>													
												</select>
											</td>																			
										</tr>
										<tr id="tr_endorse_CV2" data-id="2" data-parent="0" data-level="2">											
											<td class="text-center verticalCenter borderBlack">
												<label class="font-term-green font-bold">G_NC_ML_R_B38</label>
											</td>
											<td class="text-center verticalCenter borderBlack font-term-green font-bold">ADD</td>											
											<td class="text-center verticalCenter borderBlack">
												<input type="number" class="form-control margin-padding0 text-center width40px" value="1" min="1" onkeyup="numberKey(this);" onkeydown="numberKey(this);">
											</td>
											<td class="text-center verticalCenter borderBlack">
												<input type="number" class="form-control margin-padding0 text-center width40px" value="1" min="1" onkeyup="numberKey(this);" onkeydown="numberKey(this);">
											</td>
											<td class="text-center verticalCenter borderBlack">
												<input type="number" class="form-control margin-padding0 text-center width40px" value="1" min="1" onkeyup="numberKey(this);" onkeydown="numberKey(this);">
											</td>
											<td class="text-center verticalCenter borderBlack">												
												<select class="form-control width82px" id="ageRange_unit2_cl">
													<option value="">None</option>													
												</select>
											</td>										
										</tr>
										<tr id="tr_endorse_CV3" data-id="3" data-parent="0" data-level="2">											
											<td class="text-center verticalCenter borderBlack">
												<label class="font-term-green font-bold">G_NC_ML_R_E21</label>
											</td>
											<td class="text-center verticalCenter borderBlack font-term-green font-bold">TD</td>
											<td class="text-center verticalCenter borderBlack">
												<input type="number" class="form-control margin-padding0 text-center width40px" value="1" min="1" onkeyup="numberKey(this);" onkeydown="numberKey(this);">
											</td>
											<td class="text-center verticalCenter borderBlack">
												<input type="number" class="form-control margin-padding0 text-center width40px" value="1" min="1" onkeyup="numberKey(this);" onkeydown="numberKey(this);">
											</td>
											<td class="text-center verticalCenter borderBlack">
												<input type="number" class="form-control margin-padding0 text-center width40px" value="1" min="1" onkeyup="numberKey(this);" onkeydown="numberKey(this);">
											</td>
											<td class="text-center verticalCenter borderBlack">												
												<select class="form-control width82px" id="ageRange_unit3_cl">
													<option value="">None</option>												
												</select>
											</td>																																	
										</tr>
										<tr id="tr_endorse_CV4" data-id="4" data-parent="0" data-level="2">											
											<td class="text-center verticalCenter borderBlack">
												<label class="font-term-green font-bold">G_NC_ML_R_M16</label>
											</td>
											<td class="text-center verticalCenter borderBlack font-term-green font-bold">AME</td>											
											<td class="text-center verticalCenter borderBlack">
												<input type="number" class="form-control margin-padding0 text-center width40px" value="1" min="1" onkeyup="numberKey(this);" onkeydown="numberKey(this);">
											</td>
											<td class="text-center verticalCenter borderBlack">
												<input type="number" class="form-control margin-padding0 text-center width40px" value="1" min="1" onkeyup="numberKey(this);" onkeydown="numberKey(this);">
											</td>
											<td class="text-center verticalCenter borderBlack">
												<input type="number" class="form-control margin-padding0 text-center width40px" value="1" min="1" onkeyup="numberKey(this);" onkeydown="numberKey(this);">
											</td>
											<td class="text-center verticalCenter borderBlack">												
												<select class="form-control width82px" id="ageRange_unit5_cl">
													<option value="">None</option>													
												</select>
											</td>										
										</tr>
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
									<input type="checkbox" id="chk_sex_BP1"> <label for="chk_sex_BP1">ชาย</label>
								</div>
								<div class="fontcolortable1 col-sm-3">
									<input type="checkbox" id="chk_sex_BP2"> <label for="chk_sex_BP2">หญิง</label>
								</div>
							</td>
						</tr>
						<tr>
							<td class="col-sm-8 pd-bt">
								<div class="text-right fontcolortable1 col-sm-4">
									<label>ระยะเวลาชำระเบี้ยประกันภัย</label>
								</div>
								<div class="col-sm-8 fontcolortable1 productpadding">
										<table class="table table-bordered" id="tbl_PD_Mode_CL">
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
									<label>การชำระเบี้ยด้วยบัตรเครดิต</label>
								</div>
								<div class="col-sm-8 panel panel-default">
									 <div class="row padding_all2">
										<div class="col-sm-4 paddingtop_style1">
											<label>ปีแรก</label>
										</div>
										<div class="col-sm-7">
											<select class="form-control group_credit" id="lb_credit_firstYear_CL">
												<option value="">None</option>																								
											</select>
										</div>
									</div>
								  	<div class="row padding_all2">
										<div class="col-sm-4 paddingtop_style1">
											<label>ปีต่อไป</label>
										</div>
										<div class="col-sm-7">
											<select class="form-control group_credit" id="lb_credit_nextYear_CL">
												<option value="">None</option>																								
											</select>
										</div>
									</div>
									
								</div>
							</td>
						</tr>						
						<tr>
							<td class="productpadding col-sm-8 pd-bt">
								<div class="text-right col-sm-4">
									<label>Reinsurance Group</label>
								</div>
								<div class="productpadding paddingleft_style1 col-sm-6">
									<select class="form-control" id="lb_reinsurance_CL">
										<option value="">None</option>										
									</select>
								</div>
							</td>
						</tr>
						<tr>
							<td class="productpadding col-sm-7 pd-bt">
								<div class="text-right col-sm-4">
									<label>Distribution Channel</label>
								</div>
								<div class="productpadding paddingleft_style1 col-sm-6">
									<select class="form-control" id="lb_distribution_CL">
										<option value="">None</option>									
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
									<select class="form-control" id="lb_saleChannel_CL">
										<option value="">None</option>										
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
									<select class="form-control" id="lb_partner_CL">
										<option value="">None</option>															
									</select>
								</div>
							</td>
						</tr>
						<tr id="tr_coop_commision_CL">
							<td class="productpadding col-sm-7 pd-bt">
								<div class="text-right col-sm-4"></div>
								<div class="col-md-4 paddingtop_8px"><strong>ค่านายหน้าสูงสุด</strong></div>
								<div class="col-md-2 marginleft_style3">
									<input type="text" class="form-control width50px" id="amount_max_commission" maxlength="3" disabled="">
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
									<table class="table table-striped table-bordered text-center style_basic_table3" width="100%" id="tb_BasicInformation1">
										<thead>
											<tr>
												<th width="10%" class="text-center verticalCenter tablecolorhead1 borderBlack"></th>
												<th width="45%" class="text-center verticalCenter tablecolorhead1 borderBlack" colspan="2">From</th>
												<th width="45%" class="text-center verticalCenter tablecolorhead1 borderBlack" colspan="2">To</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td width="3%" class="text-center verticalCenter borderBlack"></td>
												<td width="22.5%" class="text-center verticalCenter fontcolortable1 borderBlack">
													<label>1</label>
												</td>
												<td width="22.5%" class="text-center verticalCenter fontcolortable1 borderBlack">
													<label>ปี</label>
												</td>
												<td width="22.5%" class="text-center verticalCenter fontcolortable1 borderBlack">
													<label>6</label>
												</td>
												<td width="22.5%" class="text-center verticalCenter fontcolortable1 borderBlack">
													<label>ปี</label>
												</td>
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
									<input type="checkbox" id="chk_finance_PB">									
								</div>
								<div class="productpadding0 col-sm-5">
									<label for="chk_finance_PB">เป็น Finance Account</label>
								</div>
							</td>
						</tr>
						<tr>
							<td class="productpadding col-sm-7 pd-bt">
								<div class="text-right col-sm-4"></div>
								<div class="col-sm-1">
									<input type="checkbox" id="chk_insurance_contract">									
								</div>
								<div class="productpadding0 col-sm-5">
									<label for="chk_insurance_contract">สัญญาประกันภัย</label>
								</div>
							</td>
						</tr>
						<tr>
							<td class="productpadding col-sm-7 pd-bt">
								<div class="text-right col-sm-4">
									<label>AML/CFT Scoring</label>
								</div>
								<div class="productpadding col-sm-6">
									<select class="form-control" id="lb_AML_CFT_CL">
										<option value="">None</option>										
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
									<input type="text" readonly="readonly" class="fontcolortable1 form-control" value="SA_CL 12 1M_B-L015.txt">
		
								</div>
								<div class="col-sm-2">
									<button class="btn btn-primary">ดูค่า</button>
								</div>
							</td>
						</tr>
						<tr>
							<td class="col-sm-7 pd-bt">
								<div class="text-right col-sm-4">
									<label>Loan Type</label>
								</div>
								<div class="productpadding col-sm-6">
									<select class="form-control" id="sel_Loan_Type">
										<option>None</option>									
									</select>
								</div>
							</td>
						</tr>
						<tr>
							<td class="productpadding col-sm-7 pd-bt">
								<div class="text-right col-sm-4"></div>
								<div class="col-sm-1">
									<input type="checkbox" id="chk_sperately_pay">									
								</div>
								<div class="productpadding0 col-sm-5">
									<label for="chk_sperately_pay">แบ่งจ่ายได้</label>
								</div>
							</td>
						</tr>						
						<tr>
							<td class="productpadding col-sm-7 pd-bt">
								<div class="text-right col-sm-4"></div>
								<div class="col-sm-8" id="div_Sperately_Pay">
									<table class="table table-striped table-bordered text-center" width="100%" id="tb_Sperately_Pay" disabled="disabled">
										<thead>
											<tr>
												<th width="5%" class="text-center bg-primary borderBlack" style="vertical-align: middle;" disabled="disabled">เลือก</th>
												<th width="25%" class="text-center bg-primary borderBlack" style="vertical-align: middle;" disabled="disabled">จำนวนงวด<br disabled="disabled">การแบ่ง<br disabled="disabled">ชำระ</th>
												<th width="70%" class="text-center bg-primary borderBlack" style="vertical-align: middle;" disabled="disabled">ตัวคูณเพื่อกำหนดอัตตราเบี้ย<br disabled="disabled">ประกันภัยรายงวด</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td class="borderBlack">
													<input id="ch_payment_0" type="checkbox" onclick="ch_payment_fun(0);" value="2" disabled="">
												</td>
												<td class="borderBlack">
													<label for="ch_payment_0">2</label>
												</td>
												<td class="borderBlack">
													<input id="set_Premium_Rate_0" type="text" class="auto text-right form-control" value="0.00" data-v-min="0.00" data-v-max="999.99" disabled="disabled">
												</td>
											</tr>
											<tr>
												<td class="borderBlack">
													<input id="ch_payment_1" type="checkbox" onclick="ch_payment_fun(1);" value="3" disabled="">
												</td>
												<td class="borderBlack">
													<label for="ch_payment_1">3</label>
												</td>
												<td class="borderBlack">
													<input id="set_Premium_Rate_1" type="text" class="auto text-right form-control" value="0.00" data-v-min="0.00" data-v-max="999.99" disabled="disabled">
												</td>
											</tr>
											<tr>
												<td class="borderBlack">
													<input id="ch_payment_2" type="checkbox" onclick="ch_payment_fun(4);" value="4" disabled="">
												</td>
												<td class="borderBlack">
													<label for="ch_payment_2">4</label>
												</td>
												<td class="borderBlack">
													<input id="set_Premium_Rate_2" type="text" class="auto text-right form-control" value="0.00" data-v-min="0.00" data-v-max="999.99" disabled="disabled">
												</td>
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
									<input type="checkbox" id="chk_change_main_person">									
								</div>
								<div class="productpadding0 col-sm-5">
									<label for="chk_change_main_person">เปลี่ยนผู้รับประโยชน์หลัก</label>
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
				<div class="paddingleft_style2 col-sm-12 panel panel-default" id="div_COOP_CL">
					<div>
						<table class="table table-bordered" id="tb_ageRange_CL">
							<thead>
								<tr>
									<th width="5%" class="text-center verticalCenter bg-primary borderBlack" rowspan="2"></th>											
									<th width="45%" class="text-center verticalCenter bg-primary borderBlack" colspan="2">สหกรณ์</th>
									<th width="15%" class="text-center verticalCenter bg-primary borderBlack" rowspan="2">จำนวนเงินเอาประกันภัยขั้้นต่ำ (บาท)</th>																						
									<th width="15%" class="text-center verticalCenter bg-primary borderBlack" rowspan="2">ส่วนลด (%)</th>
									<th width="15%" class="text-center verticalCenter bg-primary borderBlack" rowspan="2">ค่านายหน้า (%)</th>											
								</tr>
								<tr>
									<th width="15%" class="text-center verticalCenter bg-primary borderBlack">รหัสสหกรณ์</th>										
									<th width="30%" class="text-center verticalCenter bg-primary borderBlack">ชื่อ </th>																			
								</tr>
							</thead>
							<tbody>
								<tr id="tr_COOP1_CL">
									<td class="text-center verticalCenter borderBlack" id="imgOK_COOP1" onclick="imgCheckbox(this.id);"><i class="glyphicon glyphicon-edit"></i></td>
									<td class="text-center verticalCenter borderBlack">00001</td>
									<td class="verticalCenter borderBlack">สหกรณ์ออมทรัพย์กรมธหารราบที่ 31</td>
									<td class="text-center verticalCenter borderBlack"><input type="text" class="auto form-control margin-padding0 text-right" value="0.00" data-v-min="0.00" data-v-max="999999999.99"></td>
									<td class="text-center verticalCenter borderBlack"><input type="text" class="auto form-control margin-padding0 text-right" value="0.00" data-v-min="0.00" data-v-max="999.99"></td>
									<td class="text-center verticalCenter borderBlack"><input type="text" class="auto form-control margin-padding0 text-right" value="0.00" data-v-min="0.00" data-v-max="999.99"></td>
								</tr>
								<tr id="tr_COOP2_CL">
									<td class="text-center verticalCenter borderBlack" id="imgOK_COOP2" onclick="imgCheckbox(this.id);"><i class="glyphicon glyphicon-edit"></i></td>
									<td class="text-center verticalCenter borderBlack">00002</td>
									<td class="verticalCenter borderBlack">สหกรณ์ออมทรัพย์สำนักงานบังคับทหารอากาศ....</td>
									<td class="text-center verticalCenter borderBlack"><input type="text" class="auto form-control margin-padding0 text-right" value="0.00" data-v-min="0.00" data-v-max="999999999.99"></td>
									<td class="text-center verticalCenter borderBlack"><input type="text" class="auto form-control margin-padding0 text-right" value="0.00" data-v-min="0.00" data-v-max="999.99"></td>
									<td class="text-center verticalCenter borderBlack"><input type="text" class="auto form-control margin-padding0 text-right" value="0.00" data-v-min="0.00" data-v-max="999.99"></td>
								</tr>
							</tbody>
							</table>
						</div>
						<div class="col-sm-12 style_basic_div1">
							<div class="col-md-2">
								<input class="btn btn-primary width80px" type="button" id="addrowCOOP_CL" value="เลือก" data-toggle="modal" data-target="#modal_select_COOP_CL">
							</div>
							<div class="col-md-2 marginleft_style2">
								<input class="btn btn-primary width80px" type="button" id="delrowCOOP_CL" value="ลบ">
							</div>
						</div>	
					</div>
				<!-- ปุ่ม -->
				<div class="col-md-3 col-md-offset-9 text-right" style="float: right;">
					 <div class="modal-footer" style="border: 0">
						<button class="btn btn-default btn-primary" type="button" id="">บันทึก</button>
						<button class="btn btn-default btn-primary" type="button" id="">ยกเลิก</button>
					</div>  
			   </div>
			
				
				<!-- *** แบบประกันหลัก-->
				<div class="modal fade" id="modal_Choose_primary_insurance" role="dialog">
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
										style="width: 100%" id="tb_Choose_primary_insurance_modal">
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
									data-dismiss="modal" onclick="bt_save_Choose_primary_insurance();">ตกลง</button>
								<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
		
							</div>
						</div>
					</div>
				</div>
				<!-- **** สัญญาเพิ่มเติม-->
				<div class="modal fade" id="modal_Additional_contract" role="dialog">
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
				<!-- COOP -->
				<div class="modal fade" id="modal_select_COOP_CL" role="dialog">
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
										style="width: 100%" id="tb_COOP_modal">
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
								<button type="button" class="btn btn-primary" data-dismiss="modal">ตกลง</button>
								<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
		
							</div>
						</div>
					</div>
				</div>
				
			</div>
		 </div>
		<br clear="all">
	</div>
</div>
</body>
</html>