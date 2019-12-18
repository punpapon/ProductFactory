<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>ข้อมูลทั่วไป Basic Information</title>

</head>
<body>
<div id="mainBenefit_CL">
		<div class="col-md-12">
			<div class="panel panel-primary">
				<div class="panel-heading text-left">
				  <p class="margin0 text-center">ผลประโยชน์/ความคุ้มครอง</p>
				</div>

				<div class="panel-body">
							<div class="text-center" style="padding: 10px 0"></div>

							<div class="row">
								<div class="col-md-6">
									<input class="width100 padding10px text-center" type="text"
										value="ผลประโยชน์/ความคุ้มครอง">
								</div>

								<div class="col-md-6">
									<input class="width100 padding10px text-center" type="text"
										value="ผู้ได้รับความคุ้มครอง">
								</div>

							</div>
							<div class="text-center" style="padding: 10px 0"></div>
							<div class="row">
								<div class="col-md-6">
									<div class="col-md-1">
										<input type="checkbox" class="text-right" id="cbDie_CL"
											onclick="controlSubmitBenefit_CL();" checked>
									</div>
									<div class="col-md-10 text-left ">
										<p>เสียชีวิต</p>
									</div>
								</div>

								<div class="col-md-6">
									<div class="col-md-1">
										<input type="checkbox" class="text-right" id="cbDie_CL_person" checked readonly>
									</div>
									<div class="col-md-10 text-left ">
										<p>สมาชิกผู้เอาประกัน</p>
									</div>
								</div>
							</div>
							
							<div class="row">
								<div class="col-md-6">
									<div class="col-md-1">
										<input type="checkbox" class="text-right" id="cbDisabled_CL"
											onclick="controlSubmitBenefit_CL();" checked>
									</div>
									<div class="col-md-10 text-left ">
										<p>ทุพพลภาพถาวรสิ้นเชิง</p>
									</div>
								</div>

								<div class="col-md-6">
									<div class="col-md-1">
										<input type="checkbox" class="text-right" id="cbDisabled_CL_person" checked readonly>
									</div>
									<div class="col-md-10 text-left ">
										<p>สมาชิกผู้เอาประกัน</p>
									</div>
								</div>
							</div>

							<div class="text-center" style="padding: 20px 0"></div>
							<div class="row">
								<div class="col-md-8"></div>
								<div class="col-md-4">									
									<div class="col-md-6">
										<button class="btn btn-primary width100 displayNone" id="benefitView_CL"
											onclick="changeDisplayBenefit005_CL(1);">ดูข้อมูล</button>
											
										<button class="btn btn-primary width100" id="benefitSubmit_CL"
											onclick="changeDisplayBenefit005_CL(1);">บันทึก</button>
									</div>
									<div class="col-md-6">
										<button class="btn btn-primary width100"  data-dismiss="modal" data-toggle="modal"
											data-target="#cancelBoxCL_menu5">ยกเลิก</button>
									</div>
								</div>
							</div>
						</div>
			</div>
		</div>	
</div>

<!-- benefit detail -->
	<div id="benefitDetail_CL" class="displayNone">
			<div class="">
				<div class="text-center" style="padding: 20px 0"></div>
				<ul class="nav nav-tabs" id="tabBenefit005">
					<li id="tabDie_CL"><a data-toggle="tab" href="#die_CL"
						style="display: none" id="aDie_CL">เสียชีวิต</a></li>
					<li id="tabDisabled_CL"><a data-toggle="tab" href="#disabled_CL"
						style="display: none" id="aDisabled_CL">ทุพพลภาพถาวรสิ้นเชิง</a></li>	

				</ul>
				<div class="tab-content">
					<div id="die_CL" class="tab-pane fade in active"><!-- START TAB DIE -->
						<div class="text-center" style="padding: 20px 0"></div>
					<table>
							<tr>
								<td><!--START TB LEFT -->
									<div style="padding-bottom: 64px">
										<input type="hidden" id="bnf_itemID" value="">
										<table class="table table-bordered" width="250" id="tbody_dieL_CL" style="width: 470px;">
											<thead>
											<tr>
												<td width="64px" rowspan="2" style="vertical-align: middle;height: 74px;" class="text-center borderBlack bg-primary">เลือก</td>
												<!-- <td width="64px" rowspan="2" style="vertical-align: middle;height: 74px;" class="text-center borderBlack bg-primary">ระยะ</td> -->
												<td width="165px" colspan="2" rowspan="2" style="vertical-align: middle;" class="text-center borderBlack bg-primary">From</td>
												<td width="165px" colspan="2" rowspan="2" style="vertical-align: middle;" class="text-center borderBlack bg-primary">To</td>
											</tr>
											<tr>
											</tr>	
											<thead>	
											<tbody>	
											<!-- for clone -->	
											<tr id="tbody_dieL_CL0"><!-- Start body Left -->
												<td class="text-center borderBlack" id="imgOK_0" width="33px"
												onclick="imgCheckbox(this.id);"
												style="vertical-align: middle;"><i
												class="glyphicon glyphicon-edit"></i>
												<!-- <div style="display:none;" id="div_hidden_imgOK_1"><input type="hidden" name="hidden[]" id="hidden_imgOK_1"/></div> -->
												</td>
												<!-- <td class="text-center borderBlack"><input id="die_phase0_CL" type="number" class="form-control margin-padding0 text-center width50px" value="1" min="1" onkeyup="numberKey(this);" onkeydown="numberKey(this);"></td> -->
												<td width="56px" class="borderBlack"><input id="die_fromYear0_CL" type="number" class="form-control margin-padding0 text-center width50px" value="1" min="1" onkeyup="check_fromto(this,1);"><!-- <input id="die_fromYear1_CL" type="number" class="form-control margin-padding0 text-center width50px" value="1" min="1" onkeyup="check_fromto(1);" onmouseup="check_fromto(1);"> --></td>
												<td width="100px" class="borderBlack">
													<select id='die_fromYearUnit0_CL' class='form-control width-initial die_unit' onchange="check_fromtoUnit(0);" style='margin: 0;width: 100%;'>
														<option value="NONE" selected>None</option>
													</select></td>
												<td width="56px" class="borderBlack"><input id="die_toYear0_CL" type="number" class="form-control margin-padding0 text-center width50px" value="1" min="1" onkeyup="check_fromto(this,0);"></td>
												<td width="100px" class="borderBlack">
													<select id='die_toYearUnit0_CL' class='form-control width-initial die_unit' onchange="check_fromtoUnit(0);" style='margin: 0;width: 100%;'>
														<option value="NONE" selected>None</option>
													</select></td>
											</tr>
											<!-- end clone -->
																
											<tr id="tbody_dieL_CL1"><!-- Start body Left -->
												<td class="text-center borderBlack" id="imgOK_1" width="33px"
												onclick="imgCheckbox(this.id);"
												style="vertical-align: middle;"><i
												class="glyphicon glyphicon-edit"></i>
												<!-- <div style="display:none;" id="div_hidden_imgOK_1"><input type="hidden" name="hidden[]" id="hidden_imgOK_1"/></div> -->
												</td>
												<!-- <td class="text-center borderBlack"><input id="die_phase1_CL" type="number" class="form-control margin-padding0 text-center width50px" value="1" min="1" onkeyup="numberKey(this);" onkeydown="numberKey(this);"></td> -->
												<td width="56px" class="borderBlack"><input id="die_fromYear1_CL" type="number" class="form-control margin-padding0 text-center width50px" value="1" min="1" onkeyup="check_fromto(1);"><!-- <input id="die_fromYear1_CL" type="number" class="form-control margin-padding0 text-center width50px" value="1" min="1" onkeyup="check_fromto(1);" onmouseup="check_fromto(1);"> --></td>
												<td width="100px" class="borderBlack">
													<select id='die_fromYearUnit1_CL' class='form-control width-initial die_unit' onchange="check_fromtoUnit(1);" style='margin: 0;width: 100%;'>
														<option value="NONE" selected>None</option>
													</select></td>
												<td width="56px" class="borderBlack"><input id="die_toYear1_CL" type="number" class="form-control margin-padding0 text-center width50px" value="1" min="1" onkeyup="check_fromto(1);"></td>
												<td width="100px" class="borderBlack">
													<select id='die_toYearUnit1_CL' class='form-control width-initial die_unit' onchange="check_fromtoUnit(1);" style='margin: 0;width: 100%;'>
														<option value="NONE" selected>None</option>
													</select></td>
											</tr>
											</tbody>		
										</table>
									</div>
								</td><!--END TB LEFT -->
								<td><!--START TB RIGHT -->
									<div class="search-table-outter" style="padding-bottom: 50px; width:27%;">
										<table class="table table-bordered" id="tbody_dieR_CL" style="width: 1350px;">
											<thead>
											<tr>
												<td width="700px" colspan="9" class="text-center borderBlack bg-primary">DEATH</td>
												<td width="300px" colspan="3" rowspan="2" class="text-center borderBlack bg-primary" style="vertical-align: middle; height: 74px;">ADB</td>
												<td width="300px" colspan="3" rowspan="2" class="text-center borderBlack bg-primary" style="vertical-align: middle;">ADB Public</td>
											</tr>
											<tr>
												<td width="70px" class="text-center borderBlack bg-primary"></td>
												<td width="140px" colspan="2" class="text-center borderBlack bg-primary">SA (%)</td>
												<td width="140px" colspan="2" class="text-center borderBlack bg-primary">Premium (%)</td>
												<td width="70px" style="white-space: nowrap;" class="text-center borderBlack bg-primary">Include EM</td>
												<td width="140px" colspan="2" style="white-space: nowrap;" class="text-center borderBlack bg-primary">CV/PV บำนาญ (%)</td>
												<td width="140px" class="text-center borderBlack bg-primary">Other</td>
											</tr>
											</thead>
											<tbody>
											<!-- for clone -->
											<tr id="tbody_dieR_CL0">
												<td width="50px" class="borderBlack">
													<select id="die_sa_max0_CL" class="form-control width-initial SA_Value">
														<option value="NONE" selected>None</option>
														<!-- <option>Min</option>														
														<option>Max</option>
														<option>Sum</option> -->													
													</select></td>
												<td width="50px" class="borderBlack"><input type="text" id="die_sa0_CL" class="auto form-control margin-padding0 text-center width70px" value="0.00" data-v-min="0.00" data-v-max="999.99"></td>
												<td width="50px" class="borderBlack verticalCenter">
												<select id="die_sa_unit0_CL" class="form-control width-initial SA_Unit">
														<option value="NONE" selected>None</option>
														<!-- <option>SA</option>
														<option>ทุน * SA</option>
														<option>SA_Dec</option> -->
													</select>
												</td>
												<td width="50px" class="borderBlack"><input id="die_premium_CL0" type="text"
													class="form-control margin-padding0 text-center width70px"
													value="-" disabled></td>
												<td width="50px" class="text-center borderBlack">
												<select class="form-control width-initial" disabled>
														<option value="NONE" selected>None</option>
														<option>Accu</option>
														<option>YRT</option>						
												</select></td>
												<td width="50px" class="text-center verticalCenter borderBlack"><input
													id="die_checkbox0" type="checkbox" disabled></td>
												<td width="50px" class="borderBlack"><input id="die_cvpv_CL0" type="text"
													class="form-control margin-padding0 text-center width50px"
													value="-" disabled></td>
												<td width="50px" class="text-center borderBlack"><select
													class="form-control width-initial" disabled>
														<option value="NONE" selected>None</option>
														<option>CV</option>
														<option>PV บำนาญ</option>														
												</select></td>
												<td width="50px" class="text-center borderBlack"><select
													class="form-control width-initial" disabled>
														<option value="NONE" selected>None</option>
														<option>เงินปันผลสะสม</option>
														<option>กองทุนรักษาพยาบาล</option>
														<!-- <option>ทุนลดตามตาราง</option> -->														
												</select></td>
												<td width="50px" class="text-center borderBlack"><select
													class="form-control width-initial" disabled>
														<option value="NONE" selected>None</option>
														<option>And</option>
														<option>Or</option>														
												</select></td>
												<td width="50px" class="borderBlack"><input id="adb_CL0" type="text"
													class="form-control margin-padding0 text-center width50px"
													value="-" disabled></td>
												<td width="160px" class="text-center borderBlack"><select
													class="form-control width-initial" disabled>
														<option value="NONE" selected>None</option>
														<!-- <option>Accu Premium</option> -->
														<option>SA</option>
														<option>Fix</option>														
												</select></td>
												
												<!-- ADB Public ที่เพิ่มเข้ามา 130961 -->
												<td width="70px" class="text-center borderBlack"><select
													class="form-control width-initial" disabled>
														<option value="NONE" selected>None</option>
														<option>And</option>
														<option>Or</option>														
												</select></td>
												<td width="70px" class="borderBlack"><input id="adbP_CL0" type="text"
													class="form-control margin-padding0 text-center width50px"
													value="-" disabled></td>
												<td width="160px" class="text-center borderBlack"><select
													class="form-control width-initial" disabled>
														<option value="NONE" selected>None</option>
														<!-- <option>Accu Premium</option> -->
														<option>SA</option>
														<option>Fix</option>														
												</select></td>
											</tr>
											<!-- END Clone -->
											
											<tr id="tbody_dieR_CL1">
												<td width="50px" class="borderBlack">
													<select id="die_sa_max1_CL" class="form-control width-initial SA_Value">
														<option value="NONE" selected>None</option>
														<!-- <option>Min</option>														
														<option>Max</option>
														<option>Sum</option> -->													
													</select></td>
												<td width="50px" class="borderBlack"><input type="text" id="die_sa1_CL" class="auto form-control margin-padding0 text-center width70px" value="0.00" data-v-min="0.00" data-v-max="999.99"></td>
												<td width="50px" class="borderBlack verticalCenter">
												<select id="die_sa_unit1_CL" class="form-control width-initial SA_Unit">
														<option value="NONE" selected>None</option>
														<!-- <option>SA</option>
														<option>ทุน * SA</option>
														<option>SA_Dec</option> -->
													</select>
												</td>
												<td width="50px" class="borderBlack"><input id="die_premium_CL1" type="text"
													class="form-control margin-padding0 text-center width70px"
													value="-" disabled></td>
												<td width="50px" class="text-center borderBlack">
												<select class="form-control width-initial" disabled>
														<option value="NONE" selected>None</option>
														<option>Accu</option>
														<option>YRT</option>						
												</select></td>
												<td width="50px" class="text-center verticalCenter borderBlack"><input
													id="die_checkbox1" type="checkbox" disabled></td>
												<td width="50px" class="borderBlack"><input id="die_cvpv_CL1" type="text"
													class="form-control margin-padding0 text-center width50px"
													value="-" disabled></td>
												<td width="50px" class="text-center borderBlack"><select
													class="form-control width-initial" disabled>
														<option value="NONE" selected>None</option>
														<option>CV</option>
														<option>PV บำนาญ</option>														
												</select></td>
												<td width="50px" class="text-center borderBlack"><select
													class="form-control width-initial" disabled>
														<option value="NONE" selected>None</option>
														<option>เงินปันผลสะสม</option>
														<option>กองทุนรักษาพยาบาล</option>
														<!-- <option>ทุนลดตามตาราง</option> -->														
												</select></td>
												<td width="50px" class="text-center borderBlack"><select
													class="form-control width-initial" disabled>
														<option value="NONE" selected>None</option>
														<option>And</option>
														<option>Or</option>														
												</select></td>
												<td width="50px" class="borderBlack"><input id="adb_CL1" type="text"
													class="form-control margin-padding0 text-center width50px"
													value="-" disabled></td>
												<td width="160px" class="text-center borderBlack"><select
													class="form-control width-initial" disabled>
														<option value="NONE" selected>None</option>
														<!-- <option>Accu Premium</option> -->
														<option>SA</option>
														<option>Fix</option>														
												</select></td>
												
												<!-- ADB Public ที่เพิ่มเข้ามา 130961 -->
												<td width="70px" class="text-center borderBlack"><select
													class="form-control width-initial" disabled>
														<option value="NONE" selected>None</option>
														<option>And</option>
														<option>Or</option>														
												</select></td>
												<td width="70px" class="borderBlack"><input id="adbP_CL1" type="text"
													class="form-control margin-padding0 text-center width50px"
													value="-" disabled></td>
												<td width="160px" class="text-center borderBlack"><select
													class="form-control width-initial" disabled>
														<option value="NONE" selected>None</option>
														<!-- <option>Accu Premium</option> -->
														<option>SA</option>
														<option>Fix</option>														
												</select></td>
											</tr>
											</tbody>
									</table>
									</div>
								</td><!--END TB RIGHT -->
							</tr>
					</table>

						<div class="text-center" style="padding: 20px 0"></div>
						<div class="row">					
							<div class="col-md-6 text-left">
								<div class="col-md-4" style="padding-left: 0;">
									<button class="btn btn-primary width100"
										onclick="newAddBenefitDie_CL();">เพิ่มรายการ</button>
								</div>
								<div class="col-md-4" style="padding-left: 0;">
									<button class="btn btn-primary width100"
										onclick="cloneBenefitDie_CL();">คัดลอกรายการ</button>
								</div>
								<div class="col-md-4 text-left" style="padding-left: 0;">
									<button class="btn btn-primary width100" onclick="confirmDeleteBenefit_CL();">ลบรายการ</button>
								</div>
							</div>
							<!-- <div class="col-md-4"></div> -->
							<div class="col-md-4 text-right" style="float:right; padding-right:20px;">
								<div class="col-md-6">
									<button class="btn btn-primary width100" onclick="bt_Die_CL_Confirm();">บันทึก</button>
								</div>
								<div class="col-md-6">
									<button class="btn btn-primary width100" data-dismiss="modal" data-toggle="modal"
											data-target="#cancelBoxCL_Benefit">ยกเลิก</button>
								</div>
							</div>
						</div>
					</div><!-- END TAB DIE -->
					
					<!-- Disabled -->
					<div id="disabled_CL" class="tab-pane">
						<div class="text-center" style="padding: 20px 0"></div>
						<table class="table table-bordered borderBlack" id="Disabled_Table">
							<thead>
								<tr>
									<th class="text-center bg-primary borderBlack" width="25"></th>
									<th class="text-center bg-primary borderBlack" width="50" style="vertical-align: middle;">เลือก</th>							
									<th class="text-center verticalCenter bg-primary borderBlack" width="250">ทุพพลภาพถาวรสิ้นเชิง</th>
									<th class="text-center verticalCenter bg-primary borderBlack" width="50">จำนวน %</th>
								</tr>
							</thead>
							<tbody>
							</tbody>
						</table>

						<div class="text-center" style="padding: 10px 0"></div>

						<div class="text-center" style="padding: 10px 0"></div>
						<div class="row">
							<div class="col-md-4">
								<div class="col-md-6" style="padding-left: 0;">
									<button class="btn btn-primary width100"
										onclick="addDisabledNew();">เพิ่มรายการ</button>
								</div>
								<div class="col-md-6">
									<button class="btn btn-primary width100" onclick="confirmDeleteDisabled_CL();">ลบรายการ</button>
								</div>
							</div>
							<div class="col-md-4"></div>
							<div class="col-md-4">
								<div class="col-md-6">
									<button class="btn btn-primary width100" onclick="bt_Disabled_CL_Confirm();">บันทึก</button>
								</div>
								<div class="col-md-6" style="padding-right: 0">
									<button class="btn btn-primary width100" data-dismiss="modal" data-toggle="modal"
											data-target="#cancelBoxCL_Benefit">ยกเลิก</button>
								</div>
							</div>
						</div>
					</div>
					<!-- End Disabled -->					
				</div>

			</div>
		</div>

	<!-- MODAL -->
	<!-- ลบข้อมูล -->
	<div class="modal fade" id="confirmDeleteBenefit" role="dialog">
		<div class="modal-dialog">

			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">ยืนยันการลบรายการ</h4>
				</div>
				<div class="modal-body">
					<div class="row">
						<p class="text-center">ต้องการลบข้อมูล ใช่หรือไม่?</p>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row">
						<div class="col-md-4"></div>
						<div class="col-md-4">
							<div class="col-md-6">
								<button type="button" class="btn btn-primary"
									data-dismiss="modal" onclick="deleteAll();">ยืนยัน</button>
							</div>
							<div class="col-md-6">
								<button type="button" class="btn btn-primary"
									data-dismiss="modal">ยกเลิก</button>
							</div>
						</div>
						<div class="col-md-2"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<!-- ปุ่มยกเลิก-เสียชีวิต/ทุพพลภาพ  -->
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
	
	<!-- ปุ่มยกเลิก -->
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
								<button type="button" class="btn btn-primary" onclick="cancelPage('base_plan.jsp?user=<%= request.getParameter("user") %>');">ยืนยัน</button>
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
	
	<!-- Hidden Value -->
	<input id="tbDie_id" type="hidden" />
</body>
</html>