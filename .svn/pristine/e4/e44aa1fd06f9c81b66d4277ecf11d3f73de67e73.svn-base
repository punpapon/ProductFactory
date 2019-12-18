<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<!-- <link rel="stylesheet" href="css/AdminLTE.min.css"> -->
<link rel="stylesheet" href="css/uiAll.css">
<title>UI-005</title>
</head>
<body>
	<div id="mainBenefit_OL">
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
										<input type="checkbox" class="text-right" id="cbDie_OL"
											onclick="controlSubmitBenefit();" >
									</div>
									<div class="col-md-10 text-left ">
										<label for="cbDie_OL">เสียชีวิต</label>
									</div>
								</div>

								<div class="col-md-6">
									<div class="col-md-1">
										<input type="checkbox" class="text-right" id="cbDie_OL_person" disabled >
									</div>
									<div class="col-md-10 text-left ">
										<p>ผู้เอาประกันหลัก</p>
									</div>
								</div>
							</div>

							<div class="row">
								<div class="col-md-6">
									<div class="col-md-1">
										<input type="checkbox" class="text-right" id="cbContract_OL"
											onclick="controlSubmitBenefit();" >
									</div>
									<div class="col-md-10 text-left ">
										<label for="cbContract_OL">เงินครบกำหนดสัญญา</label>
									</div>
								</div>

								<div class="col-md-6">
									<div class="col-md-1">
										<input type="checkbox" class="text-right" id="cbContract_OL_person" disabled >
									</div>
									<div class="col-md-10 text-left ">
										<p>ผู้เอาประกันหลัก</p>
									</div>
								</div>
							</div>

							<div class="row">
								<div class="col-md-6">
									<div class="col-md-1">
										<input type="checkbox" class="text-right" id="cbRefund_OL"
											onclick="controlSubmitBenefit();" >
									</div>
									<div class="col-md-10 text-left ">
										<label for="cbRefund_OL">เงินคืนทุกระยะ/เงินจ่ายคืนตามเงื่อนไข</label>
									</div>
								</div>

								<div class="col-md-6">
									<div class="col-md-1">
										<input type="checkbox" class="text-right" id="cbRefund_OL_person" disabled >
									</div>
									<div class="col-md-10 text-left ">
										<p>ผู้เอาประกันหลัก</p>
									</div>
								</div>
							</div>

							<div class="row">
								<div class="col-md-6">
									<div class="col-md-1">
										<input type="checkbox" class="text-right" id="cbPension_OL"
											onclick="controlSubmitBenefit();" >
									</div>
									<div class="col-md-10 text-left ">
										<label for="cbPension_OL">เงินบำนาญ</label>
									</div>
								</div>

								<div class="col-md-6">
									<div class="col-md-1">
										<input type="checkbox" class="text-right" id="cbPension_OL_person" disabled >
									</div>
									<div class="col-md-10 text-left ">
										<p>ผู้เอาประกันหลัก</p>
									</div>
								</div>
							</div>

							<div class="row">
								<div class="col-md-6">
									<div class="col-md-1">
										<input type="checkbox" class="text-right" id="cbMedical_OL"
											onclick="controlSubmitBenefit();" >
									</div>
									<div class="col-md-10 text-left ">
										<label for="cbMedical_OL">กองทุนค่ารักษาพยาบาล</label>
									</div>
								</div>

								<div class="col-md-6">
									<div class="col-md-1">
										<input type="checkbox" class="text-right" id="cbMedical_OL_person" disabled >
									</div>
									<div class="col-md-10 text-left ">
										<p>ผู้เอาประกันหลัก</p>
									</div>
								</div>
							</div>
							
							<div class="row">
								<div class="col-md-6">
									<div class="col-md-1">
										<input type="checkbox" class="text-right" id="cbDividend_OL"
											onclick="controlSubmitBenefit();" >
									</div>
									<div class="col-md-10 text-left ">
										<label for="cbDividend_OL">เงินปันผล</label>
									</div>
								</div>

								<div class="col-md-6">
									<div class="col-md-1">
										<input type="checkbox" class="text-right" id="cbDividend_person" disabled >
									</div>
									<div class="col-md-10 text-left ">
										<p>ผู้เอาประกันหลัก</p>
									</div>
								</div>
							</div>

							<div class="text-center" style="padding: 20px 0"></div>
							<div class="row">
								<div class="col-md-8"></div>
								<div class="col-md-4">
									<div class="col-md-6">
									<button class="btn btn-primary width100 displayNone" id="benefitView_OL"
											onclick="changeDisplayBenefit005_OL(1);">ดูข้อมูล</button>
											
										<button class="btn btn-primary width100" id="benefitSubmit"
											onclick="changeDisplayBenefit005_OL(1);" disabled>บันทึก</button>
									</div>
									<div class="col-md-6">
										<button class="btn btn-primary width100">ยกเลิก</button>
									</div>
								</div>
							</div>

						</div>
					</div>
		</div>
	</div>

	<div id="benefitDetail_OL" class="displayNone">
			<div class="">
				<div class="text-center" style="padding: 20px 0"></div>
				<ul class="nav nav-tabs" id="tabBenefit005">
					<li id="tabDie"><a data-toggle="tab" href="#die_OL"
						style="display: none" id="aDie">เสียชีวิต</a></li>
					<li id="tabContract"><a data-toggle="tab" href="#contract_OL"
						style="display: none" id="aContract">เงินครบกำหนดสัญญา</a></li>
					<li id="tabRefund"><a data-toggle="tab" href="#refund_OL"
						style="display: none" id="aRefund">เงินคืนทุกระยะ/เงินจ่ายคืนตามเงื่อนไข</a></li>
					<li id="tabPension"><a data-toggle="tab" href="#pension_OL"
						style="display: none" id="aPension">เงินบำนาญ</a></li>
					<li id="tabMedical"><a data-toggle="tab" href="#medical_OL"
						style="display: none" id="aMedical">กองทุนค่ารักษาพยาบาล</a></li>
					<li id="tabDividend"><a data-toggle="tab" href="#dividend_OL"
						style="display: none" id="aDividend">เงินปันผล</a></li>

				</ul>
				<div class="tab-content">
					<!-- เสียชีวิต -->
					<div id="die_OL" class="tab-pane fade in active"><!-- START TAB DIE -->
						<div class="text-center" style="padding: 20px 0"></div>
						<table>
							<tr>
								<td><!--START TB LEFT -->
									<div style="padding-bottom: 64px">
										<input type="hidden" id="bnf_itemID_OL" value="">
										<table class="table table-bordered" width="250" id="tbody_dieL_OL" style="width: 470px;">
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
											<tr id="tbody_dieL_OL0"><!-- Start body Left -->
												<td class="text-center borderBlack" id="imgOK_OL_0" width="33px"
												onclick="imgCheckbox(this.id);"
												style="vertical-align: middle;"><i
												class="glyphicon glyphicon-edit"></i>
												<!-- <div style="display:none;" id="div_hidden_imgOK_1"><input type="hidden" name="hidden[]" id="hidden_imgOK_1"/></div> -->
												</td>
												<!-- <td class="text-center borderBlack"><input id="die_phase0_OL" type="text" class="form-control margin-padding0 text-center width50px" value="" min="1" maxlength="2" onkeyup="numberKey_OL(this);, replaceDot(this)" onkeypress="validate(event);" onchange="validate_range_tbdie_OL(this.id,this.value);"></td> -->
												<td width="56px" class="borderBlack"><input id="die_fromYear0_OL" type="text" class="form-control margin-padding0 text-center width50px" value="1" min="1" maxlength="2" onkeyup="replaceDot(this)" onblur="check_fromto_OL(this,0);"><!-- <input id="die_fromYear1_CL" type="number" class="form-control margin-padding0 text-center width50px" value="1" min="1" onkeyup="check_fromto(1);" onmouseup="check_fromto(1);"> --></td>
												<td width="100px" class="borderBlack">
													<select id='die_fromYearUnit0_OL' class='form-control width-initial die_calendar' onchange="check_fromtoUnit_OL(0);" style='margin: 0;width: 100%;'>
														
													</select></td>
												<td width="56px" class="borderBlack"><input id="die_toYear0_OL" type="text" class="form-control margin-padding0 text-center width50px" value="1" min="1" maxlength="2" onkeyup="replaceDot(this)" onblur="check_fromto_OL(this,0)"></td>
												<td width="100px" class="borderBlack">
													<select id='die_toYearUnit0_OL' class='form-control width-initial die_calendar' onchange="check_fromtoUnit_OL(0);" style='margin: 0;width: 100%;'>
														
													</select></td>
											</tr>
											<!-- end clone -->
																
											<tr id="tbody_dieL_OL1"><!-- Start body Left -->
												<td class="text-center borderBlack" id="imgOK_OL_1" width="33px"
												onclick="imgCheckbox(this.id);"
												style="vertical-align: middle;"><i
												class="glyphicon glyphicon-edit"></i>
												<!-- <div style="display:none;" id="div_hidden_imgOK_1"><input type="hidden" name="hidden[]" id="hidden_imgOK_1"/></div> -->
												</td>
												<!-- <td class="text-center borderBlack"><input id="die_phase1_OL" type="text" class="form-control margin-padding0 text-center width50px" value="" min="1" maxlength="2" onkeypress="validate(event);" onkeyup="numberKey_OL(this), replaceDot(this)" onchange="validate_range_tbdie_OL(this.id,this.value);"></td> -->
												<td width="56px" class="borderBlack"><input id="die_fromYear1_OL" type="text" class="form-control margin-padding0 text-center width50px" value="1" min="1" maxlength="2" onkeyup="replaceDot(this)" onblur="check_fromto_OL(1)"><!-- <input id="die_fromYear1_CL" type="number" class="form-control margin-padding0 text-center width50px" value="1" min="1" onkeyup="check_fromto(1);" onmouseup="check_fromto(1);"> --></td>
												<td width="100px" class="borderBlack">
													<select id='die_fromYearUnit1_OL' class='form-control width-initial die_calendar' onchange="check_fromtoUnit_OL(1);" style='margin: 0;width: 100%;'>
														
													</select></td>
												<td width="56px" class="borderBlack"><input id="die_toYear1_OL" type="text" class="form-control margin-padding0 text-center width50px" value="1" min="1" maxlength="2" onkeyup="replaceDot(this)" onblur="check_fromto_OL(1)"></td>
												<td width="100px" class="borderBlack">
													<select id='die_toYearUnit1_OL' class='form-control width-initial die_calendar' onchange="check_fromtoUnit_OL(1);" style='margin: 0;width: 100%;'>
														
													</select></td>
											</tr>
											</tbody>		
										</table>
									</div>
								</td><!--END TB LEFT -->
								<td><!--START TB RIGHT -->
									<div class="search-table-outter" style="padding-bottom: 50px; width:27%;">
										<table class="table table-bordered" id="tbody_dieR_OL" style="width: 1350px;">
											<thead>
											<tr>
												<td width="700px" colspan="9" class="text-center borderBlack bg-primary">เสียชีวิต</td>
												<td width="300px" colspan="3" rowspan="2" class="text-center borderBlack bg-primary" style="vertical-align: middle; height: 74px;">อุบัติเหตุ</td>
												<td width="300px" colspan="3" rowspan="2" class="text-center borderBlack bg-primary" style="vertical-align: middle;">อุบัติเหตุสาธารณะ</td>
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
											<tr id="tbody_dieR_OL0">
												<td width="50px" class="borderBlack">
													<select id="die_sa_max0_OL" class="form-control width-initial SA_Value">
																										
													</select></td>
												<td width="50px" class="borderBlack"><input type="text" id="die_sa0_OL" class="auto form-control margin-padding0 text-center width70px" value="0.00" data-v-min="0.00" data-v-max="999.99"></td>
												<td width="50px" class="borderBlack verticalCenter">
												<select id="die_sa_unit0_OL" class="form-control width-initial SA_Unit">
														
													</select>
												</td>
												<td width="50px" class="borderBlack"><input id="die_premium_OL0" type="text"
													class="auto form-control margin-padding0 text-center width70px" value="0.00" data-v-min="0.00" data-v-max="999.99"></td>
												<td width="50px" class="text-center borderBlack">
												<select id="die_prem0_OL" class="form-control width-initial premium" onchange="sl_premium(0)" >
																		
												</select></td>
												<td width="50px" class="text-center verticalCenter borderBlack"><input
													id="die_checkbox0" type="checkbox" disabled></td>
												<td width="50px" class="borderBlack"><input id="die_cvpv_OL0" type="text"
													class="auto form-control margin-padding0 text-center width70px" value="" data-v-min="0.00" data-v-max="999.99"></td>
												<td width="50px" class="text-center borderBlack"><select
													id="die_sl_cvpv0_OL" class="form-control width80px CVPV_UNIT">
																											
												</select></td>
												<td width="50px" class="text-center borderBlack"><select id="die_sl_oth0_OL"
													class="form-control width80px OTHER_TYPE">
																										
												</select></td>
												<td width="50px" class="text-center borderBlack"><select
													id="die_condition_adb0_OL" class="form-control width80px CONDITION" >
																								
												</select></td>
												<td width="50px" class="borderBlack"><input id="adb_OL0" type="text"
													class="auto form-control margin-padding0 text-center width70px" value="0.00" data-v-min="0.00" data-v-max="999.99" ></td>
												<td width="160px" class="text-center borderBlack"><select
													id="die_adb_type0_OL" class="form-control width80px ADB_TYPE" >
																								
												</select></td>
												
												<!-- ADB Public ที่เพิ่มเข้ามา 130961 -->
												<td width="70px" class="text-center borderBlack"><select
													id="die_condition_acc0_OL" class="form-control width80px CONDITION" >
																								
												</select></td>
												<td width="70px" class="borderBlack"><input id="adbP_OL0" type="text"
													class="auto form-control margin-padding0 text-center width70px" value="0.00" data-v-min="0.00" data-v-max="999.99" ></td>
												<td width="160px" class="text-center borderBlack"><select
													id="die_acc_type0_OL" class="form-control width80px ACC_PUBLIC_TYPE" >
																											
												</select></td>
											</tr>
											<!-- END Clone -->
											
											<tr id="tbody_dieR_OL1">
												<td width="50px" class="borderBlack">
													<select id="die_sa_max1_OL" class="form-control width-initial SA_Value" >
																											
													</select></td>
												<td width="50px" class="borderBlack"><input type="text" id="die_sa1_OL" onblur="replaceBlank(this)" class="auto form-control margin-padding0 text-center width70px" value="0.00" data-v-min="0.00" data-v-max="999.99"></td>
												<td width="50px" class="borderBlack verticalCenter">
												<select id="die_sa_unit1_OL" class="form-control width-initial SA_Unit">
														
													</select>
												</td>
												<td width="50px" class="borderBlack"><input id="die_premium_OL1" type="text" onblur="replaceBlank(this)"
													class="auto form-control margin-padding0 text-center width70px" value="0.00" data-v-min="0.00" data-v-max="999.99"></td>
												<td width="50px" class="text-center borderBlack">
												<select id="die_prem1_OL" class="form-control width-initial premium" onchange="sl_premium(1)">
																			
												</select></td>
												<td width="50px" class="text-center verticalCenter borderBlack"><input
													id="die_checkbox1" type="checkbox" disabled></td>
												<td width="50px" class="borderBlack"><input id="die_cvpv_OL1" type="text" onblur="replaceBlank(this)"
													class="auto form-control margin-padding0 text-center width70px" value="0.00" data-v-min="0.00" data-v-max="999.99"></td>
												<td width="50px" class="text-center borderBlack"><select
													id="die_sl_cvpv1_OL" class="form-control width80px CVPV_UNIT" >
																							
												</select></td>
												<td width="50px" class="text-center borderBlack"><select id="die_sl_oth1_OL"
													class="form-control width80px OTHER_TYPE">
																										
												</select></td>
												<td width="50px" class="text-center borderBlack"><select
													id="die_condition_adb1_OL" class="form-control width80px CONDITION">
																										
												</select></td>
												<td width="50px" class="borderBlack"><input id="adb_OL1" type="text" onblur="replaceBlank(this)"
													class="auto form-control margin-padding0 text-center width70px" value="0.00" data-v-min="0.00" data-v-max="999.99"></td>
												<td width="160px" class="text-center borderBlack"><select
													id="die_adb_type1_OL" class="form-control width80px ADB_TYPE">
																										
												</select></td>
												
												<!-- ADB Public ที่เพิ่มเข้ามา 130961 -->
												<td width="70px" class="text-center borderBlack"><select
													id="die_condition_acc1_OL" class="form-control width80px CONDITION">
																									
												</select></td>
												<td width="70px" class="borderBlack"><input id="adbP_OL1" type="text" onblur="replaceBlank(this)"
													class="auto form-control margin-padding0 text-center width70px" value="0.00" data-v-min="0.00" data-v-max="999.99"></td>
												<td width="160px" class="text-center borderBlack"><select
													id="die_acc_type1_OL" class="form-control width80px ACC_PUBLIC_TYPE">
																										
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
										onclick="newAddBenefitDie_OL();">เพิ่มรายการ</button>
								</div>
								<div class="col-md-4" style="padding-left: 0;">
									<button class="btn btn-primary width100"
										onclick="cloneBenefitDie_OL();">คัดลอกรายการ</button>
								</div>
								<div class="col-md-4 text-left" style="padding-left: 0;">
									<button class="btn btn-primary width100"  onclick="confirmDeleteBenefit_OL();">ลบรายการ</button>
								</div>
							</div>
							
						</div>
						
						<!-- ข้อยกเว้น -->
						<div id="DeathExceptionOL">
						<div class="text-center" style="padding: 20px 0"></div>
						<div id="div_DeathExceptionOL">		
						<table class="table table-bordered borderBlack" id="tbl_DeathExceptionOL" style="width:100%;">
							<thead>
								<tr>
									<th class="text-center bg-primary borderBlack" width="5" style="vertical-align: middle;"></th>	
									<th class="text-center bg-primary borderBlack" width="5" style="vertical-align: middle;">ลำดับ</th>							
									<th class="text-center verticalCenter bg-primary borderBlack" width="400">รายการข้อยกเว้นการจ่ายเงินทดแทนในกรณีอุบัติเหตุ</th>							
								</tr>
							</thead>
							<tbody>
							</tbody>							
						</table>
						</div>

						<div class="text-center" style="padding: 10px 0"></div>

						<div class="text-center" style="padding: 10px 0"></div>
						<div class="row">
							<div class="col-md-4">
								<div class="col-md-6" style="padding-left: 0;">
									<a class="open-endorseDialog" data-toggle="modal" href="#modal_DeathExceptionOL" onclick="showModal_DeathExceptionOL();">
										<button class="btn btn-primary width100">เพิ่มรายการ</button>
									</a>
									<!-- <button class="btn btn-primary width100" 
										    data-dismiss="modal" data-toggle="modal" data-target="#modal_endorsement_CL">เพิ่มรายการ</button> -->
								</div>
								<div class="col-md-6">
									<button class="btn btn-primary width100" onclick="confirmDeleteException_OL();">ลบรายการ</button>
								</div>
							</div>
							<div class="col-md-4"></div>
							<div class="col-md-4 text-right" style="float:right; padding-right:20px;">
								<div class="col-md-6">
									<button class="btn btn-primary width100" onclick="bt_Die_OL_Confirm();">บันทึก</button>
								</div>
								<div class="col-md-6">
									<button class="btn btn-primary width100" data-dismiss="modal" data-toggle="modal"
											data-target="#cancelBoxOL_Benefit">ยกเลิก</button>
								</div>
							</div>
						</div>
					</div>
						
					</div><!-- END TAB DIE -->
					
					<!-- เงินครบกำหนดสัญญา -->
					<div id="contract_OL" class="tab-pane">
						<div class="text-center" style="padding: 20px 0"></div>
						<div class="row col-sm-10">
							<div class="col-md-3 text-left" style="padding-top: 5px;">
								<p>ปีที่ใช้ในการคำนวณ</p>
							</div>
							<div class="col-md-3">
								<input type="text" class="form-control" value="" id="show_type_contract" readonly>
							</div>
							<div class="col-md-3">
								<input type="text" class="form-control" value="" id="show_value_contract" readonly>
							</div>
						</div>
						<div class="text-center" style="padding: 20px 0 40px 0;"></div>

						<div class="col-sm-12">
						<table class="table table-bordered" id="tbl_contract_OL" style="width: 100%;">
							<thead>
							<tr>
								<td colspan="9" class="text-center borderBlack bg-primary">เงินครบกำหนดสัญญา</td>
							</tr>
							<tr>
								<td class="text-center borderBlack bg-primary"></td>
								<td colspan="2" class="text-center borderBlack bg-primary">SA (%)</td>
								<td colspan="2" class="text-center borderBlack bg-primary">Premium (%)</td>
								<td style="white-space: nowrap;" class="text-center borderBlack bg-primary">Include<br>EM</td>
								<td colspan="2" style="white-space: nowrap;" class="text-center borderBlack bg-primary">CV/PV บำนาญ (%)</td>
								<td class="text-center borderBlack bg-primary">Other</td>
							</tr>
							</thead>
							<tbody>
							<tr id="tbody_contract_OL0">
								<td width="50" class="borderBlack">
									<select id="die_sa_max0_OL" class="form-control width-initial SA_Value">
																		
									</select>
								</td>
								<td width="50" class="borderBlack"><input type="text" id="contract_sa0_OL" onblur="replaceBlank(this)" class="auto form-control margin-padding0 text-center width70px" value="0.00" data-v-min="0.00" data-v-max="999.99"></td>
								<td width="120" class="borderBlack verticalCenter">
									<select id="contract_sa_unit0_OL" class="form-control width90px SA_Unit">
											
									</select>
								</td>
								<td width="50" class="borderBlack"><input id="contract_premium_OL0" type="text" onblur="replaceBlank(this)"
									class="auto form-control margin-padding0 text-center width70px" value="0.00" data-v-min="0.00" data-v-max="999.99"></td>
								<td width="50" class="text-center borderBlack">
								<select id="contract_sl_premium_OL0" class="form-control width80px premium" onchange="sl_premium_contract()">
														
								</select></td>
								<td width="50" class="text-center verticalCenter borderBlack"><input
									id="contract_checkbox_OL0" type="checkbox" disabled></td>
								<td width="50" class="borderBlack"><input id="contract_cvpv_OL0" type="text" onblur="replaceBlank(this)"
									class="auto form-control margin-padding0 text-center width70px" value="0.00" data-v-min="0.00" data-v-max="999.99"></td>
								<td width="120" class="text-center borderBlack"><select
									 id="contract_sl_cvpv_OL0" class="form-control width90px CVPV_UNIT">
																			
								</select></td>
								<td class="text-center borderBlack">
									<select id="contract_other_OL0" class="form-control width90px OTHER_TYPE">
																						
									</select>
								</td>
							</tr>
							</tbody>
						</table>
						</div>

						<div class="row">
							<div class="col-md-4"></div>
							<div class="col-md-4"></div>
							<div class="col-md-4" style="padding: 20px 20px 20px 0;">
								<div class="col-md-6">
									<button class="btn btn-primary width100" onclick="bt_Contract_OL_Confirm();">บันทึก</button>
								</div>
								<div class="col-md-6">
									<button class="btn btn-primary width100" data-dismiss="modal" data-toggle="modal"
											data-target="#cancelBoxOL_Benefit">ยกเลิก</button>
								</div>
							</div>
						</div>
					</div>
					
					<!-- เงินคืนทุกระยะ / เงินจ่ายคืนตามเงื่อนไข -->
					<div id="refund_OL" class="tab-pane">
						<div class="text-center" style="padding: 20px 0"></div>
						<table class="table table-bordered borderBlack" id="benefit_refund">
							<thead>
								<tr>
									<th class="text-center bg-primary borderBlack" rowspan="2" width="50" style="vertical-align: middle;">เลือก</th>
<!-- 									<th class="text-center verticalCenter bg-primary borderBlack" rowspan="2" width="200">ประเภทการจ่าย</th> -->
									<th class="text-center bg-primary borderBlack" colspan="2" width="150">From</th>
									<th class="text-center bg-primary borderBlack" colspan="2" width="150">To</th>
									<th class="text-center verticalCenter bg-primary borderBlack" rowspan="2" width="100">ทุก(ปี)</th>
									<th class="text-center verticalCenter bg-primary borderBlack" rowspan="2" width="200">จำนวน</th>
									<th class="text-center verticalCenter bg-primary borderBlack" rowspan="2" width="200">หน่วย</th>
									<th class="text-center verticalCenter bg-primary borderBlack" rowspan="2" width="200">Factor</th>
									<th class="text-center verticalCenter bg-primary borderBlack" rowspan="2" width="200">ประเภทคำนวณ</th>
								</tr>
								<tr>
									<td class="text-center bg-primary borderBlack" width="75">Year</td>
									<td class="text-center bg-primary borderBlack" width="75">Age</td>
									<td class="text-center bg-primary borderBlack" width="75">Year</td>
									<td class="text-center bg-primary borderBlack" width="75">Age</td>
								</tr>
							</thead>
							<tbody>
								<tr id="tbody_refund1">
									<td width="50" id="imgOK_refund1" class="text-center borderBlack"
										onclick="imgCheckbox('imgOK_refund1');"
										style="vertical-align: middle;"><i
										class="glyphicon glyphicon-edit"></i></td>
									<td width="75" class="borderBlack"><input id="refund_fromYear1" maxlength="3" onkeypress="validate(event);"
										class="form-control margin-padding0 text-center" type="text"  onkeyup="replaceDot(this)" onblur="choose_from_year(1);"
										width="50" value=""></td>
									<td width="75" class="borderBlack"><input id="refund_fromAge1" maxlength="2"  onkeypress="validate(event);"
										class="form-control margin-padding0 text-center" type="text" onkeyup="replaceDot(this)" onblur="choose_from_year(1);"
										width="50" value=""></td>
									<td width="75" class="borderBlack"><input id="refund_toYear1" maxlength="3"  onkeypress="validate(event);"
										class="form-control margin-padding0 text-center" type="text" onkeyup="replaceDot(this)" onblur="choose_from_year(1);"
										width="50" value=""></td> 
									<td width="75" class="borderBlack"><input id="refund_toAge1" maxlength="2"  onkeypress="validate(event);"
										class="form-control margin-padding0 text-center" type="text" onkeyup="replaceDot(this)" onblur="choose_from_year(1);"
										width="50" value=""></td>
									<td width="100" class="borderBlack"><input id="refund_year1" maxlength="2" onkeypress="validate(event);" data-v-min="0" data-v-max="99" onkeyup="check_min_value_year(1), replaceDot(this)"
										class="auto form-control margin-padding0 text-center" type="text"
										width="50" value=""></td>
									<td width="200" class="borderBlack">
										<input name="refund_amount[]" id="refund_amount1" onblur="select_unit(1);" type="text" class="auto form-control margin-padding0 text-center" value="0.00" data-v-min="0.00" data-v-max="999999999.99">
									</td>
									<td width="200" class="text-center borderBlack">
									<select class="form-control UNIT_TYPE" id="refund_unit1" onchange="select_unit_option(1);" style="margin: 0;">

									</select>
									</td>
									<td width="200" class="text-center borderBlack">
									<select class="form-control BENEF_FACTOR" id="refund_factor1" style="margin: 0;">
										
									</select></td>
									<td width="200" class="text-center borderBlack">
									<select class="form-control SCOPE_TYPE" id="refund_scope1" style="margin: 0;">
										
									</select></td>
								</tr>
							</tbody>
						</table>

						<div class="text-center" style="padding: 10px 0"></div>
						<div class="row">
							<div class="col-md-4">
								<div class="col-md-6" style="padding-left: 0;">
									<button class="btn btn-primary width100"
										onclick="addBenefitRefund_OL();">เพิ่มรายการ</button>
								</div>
								<div class="col-md-6">
									<button class="btn btn-primary width100" data-toggle="modal"
										data-target="#confirmDeleteBenefitRefund">ลบรายการ</button>
								</div>
							</div>
							<div class="col-md-4"></div>
							<div class="col-md-4">
								<div class="col-md-6">
									<button class="btn btn-primary width100" onclick="bt_Refund_OL_Confirm();">บันทึก</button>
								</div>
								<div class="col-md-6" style="padding-right: 0">
									<button class="btn btn-primary width100" data-dismiss="modal" data-toggle="modal"
											data-target="#cancelBoxOL_Benefit">ยกเลิก</button>
								</div>
							</div>
						</div>
					</div>
					
					<!-- เงินบำนาญ -->
					<div id="pension_OL" class="tab-pane"> 
						<div class="text-center" style="padding: 10px 0"></div>
						<div class="col-sm-10">
							<div class="col-md-3" style="padding-top: 5px;">
								<p class="text-left">อายุที่เริ่มบำนาญ</p>
							</div>
							<div class="col-md-2">
								<input id='pension_startAge_OL' type="text" onkeyup="check_min_value(), replaceDot(this)" onkeypress="validate(event);" class="form-control text-right" maxlength="2" value="0">
							</div>
							<div class="col-md-1">
								<p style="padding-top: 5px;" class="text-left">&nbsp;ปี</p>
							</div>
						</div><br clear="all">
						<div class="text-center" style="padding: 10px 0"></div>
						<div class="col-sm-10">
							<div class="col-md-3" style="padding-top: 5px;">
								<p class="text-left">รับรองการจ่าย</p>
							</div>
							<div class="col-md-2">
								<input id='pension_confirmPay_OL' onkeyup="check_min_value(), replaceDot(this)" onkeypress="validate(event);" type="text" class="form-control text-right"  maxlength="2" value="0">
							</div>
							<div class="col-md-1">
								<p style="padding-top: 5px;" class="text-left">&nbsp;ปี</p>
							</div>
						</div><br clear="all">
						<div class="text-center" style="padding: 10px 0"></div>

						<table class="table table-bordered" id="benefit_pension">
							<thead>
								<tr>
									<th class="text-center borderBlack bg-primary" rowspan="2" width="50" style="vertical-align: middle;">เลือก</th>
									<th class="text-center borderBlack bg-primary" colspan="2" width="100">From</th>
									<th class="text-center borderBlack bg-primary" colspan="2" width="100">To</th>
									<th class="text-center verticalCenter borderBlack bg-primary" rowspan="2" width="100">ทุก(ปี)</th>
									<th class="text-center verticalCenter borderBlack bg-primary" rowspan="2" width="200">จำนวน</th>
									<th class="text-center verticalCenter borderBlack bg-primary" rowspan="2" width="200">หน่วย</th>
									<th class="text-center verticalCenter borderBlack bg-primary" rowspan="2" width="300">Factor</th>
								</tr>
								<tr>
									<td class="text-center borderBlack bg-primary" width="50">Year</td>
									<td class="text-center borderBlack bg-primary" width="50">Age</td>
									<td class="text-center borderBlack bg-primary" width="50">Year</td>
									<td class="text-center borderBlack bg-primary" width="50">Age</td>
								</tr>
							</thead>
							<tbody>
								<tr id="tbody_pension1">
									<td width="50" id="imgOK_pension1" class="text-center borderBlack"
										onclick="imgCheckbox('imgOK_pension1');"
										style="vertical-align: middle;"><i
										class="glyphicon glyphicon-edit"></i></td> 
									<td width="75" class="borderBlack"><input id="pension_fromYear1" maxlength="3" onkeypress="validate(event);"
										class="form-control margin-padding0 text-center" type="text" onkeyup="replaceDot(this)"  onblur="choose_from_year_pension(1);"
										width="50" value=""></td>
									<td width="75" class="borderBlack"><input id="pension_fromAge1" maxlength="2" onkeypress="validate(event);"
										class="form-control margin-padding0 text-center" type="text" onkeyup="replaceDot(this)" onblur="choose_from_year_pension(1);"
										width="50" value=""></td>
									<td width="75" class="borderBlack"><input id="pension_toYear1" maxlength="3" onkeypress="validate(event);"
										class="form-control margin-padding0 text-center" type="text" onkeyup="replaceDot(this)" onblur="choose_from_year_pension(1);"
										width="50" value=""></td>
									<td width="75" class="borderBlack"><input id="pension_toAge1" maxlength="2" onkeypress="validate(event);"
										class="form-control margin-padding0 text-center" type="text" onkeyup="replaceDot(this)" onblur="choose_from_year_pension(1);"
										width="50" value=""></td>
										
										<td width="100" class="borderBlack"><input id="pension_year1" maxlength="2"  onkeypress="validate(event);" data-v-min="0" data-v-max="99" onkeyup="check_min_value_year_med(1); , replaceDot(this)"
										class="auto form-control margin-padding0 text-center" type="text"
										width="50" value=""></td>
									
									<td width="200" class="borderBlack">
										<input name="pension_amount[]" id="pension_amount1" type="text" class="auto form-control margin-padding0 text-center" onblur="select_unit_pension(1);" value="0.00" data-v-min="0.00" data-v-max="999999999.99">
									</td>
									<td width="200" class="text-center borderBlack">
									<select class="form-control UNIT_TYPE" id="pension_unit1" onchange="select_unit_option_pension(1);" style="margin: 0;">
											
									</select>
									</td>
									<td width="200" class="text-center borderBlack">
									<select class="form-control BENEF_FACTOR" id="pension_factor1" style="margin: 0;">
										
									</select></td>
									
								</tr>
							</tbody>
						</table>

						<div class="text-center" style="padding: 10px 0"></div>
						<div class="row">
							<div class="col-md-4">
								<div class="col-md-6" style="padding-left: 0;">
									<button class="btn btn-primary width100"
										onclick="addBenefitPension_OL();">เพิ่มรายการ</button>
								</div>
								<div class="col-md-6">
									<button class="btn btn-primary width100" data-toggle="modal"
										data-target="#confirmDeletePension">ลบรายการ</button>
								</div>
							</div>
							<div class="col-md-4"></div>
							<div class="col-md-4">
								<div class="col-md-6">
									<button class="btn btn-primary width100" onclick="bt_Pension_OL_Confirm();">บันทึก</button>
								</div>
								<div class="col-md-6" style="padding-right: 0">
									<button class="btn btn-primary width100" data-dismiss="modal" data-toggle="modal"
											data-target="#cancelBoxOL_Benefit">ยกเลิก</button>
								</div>
							</div>
						</div>
					</div>
					
					<!-- กองทุนค่ารักษาพยาบาล -->
					<div id="medical_OL" class="tab-pane">
						<div class="text-center" style="padding: 20px 0"></div>
						<table class="table table-bordered borderBlack" id="benefit_medical">
							<thead>
								<tr>
									<th class="text-center bg-primary borderBlack" rowspan="2" width="50" style="vertical-align: middle;">เลือก</th>
<!-- 									<th class="text-center verticalCenter bg-primary borderBlack" rowspan="2" width="200">ประเภทการจ่าย</th> -->
									<th class="text-center bg-primary borderBlack" colspan="2" width="150">From</th>
									<th class="text-center bg-primary borderBlack" colspan="2" width="150">To</th>
									<th class="text-center verticalCenter bg-primary borderBlack" rowspan="2" width="100">ทุก(ปี)</th>
									<th class="text-center verticalCenter bg-primary borderBlack" rowspan="2" width="200">จำนวน</th>
									<th class="text-center verticalCenter bg-primary borderBlack" rowspan="2" width="200">หน่วย</th>
									<th class="text-center verticalCenter bg-primary borderBlack" rowspan="2" width="200">Factor</th>
									<th class="text-center verticalCenter bg-primary borderBlack" rowspan="2" width="200">ประเภทคำนวณ</th>
								</tr>
								<tr>
									<td class="text-center bg-primary borderBlack" width="75">Year</td>
									<td class="text-center bg-primary borderBlack" width="75">Age</td>
									<td class="text-center bg-primary borderBlack" width="75">Year</td>
									<td class="text-center bg-primary borderBlack" width="75">Age</td>
								</tr>
							</thead>
							<tbody>
								<tr id="tbody_medical1">
									<td width="50" id="imgOK_med1" class="text-center borderBlack"
										onclick="imgCheckbox('imgOK_med1');"
										style="vertical-align: middle;"><i
										class="glyphicon glyphicon-edit"></i></td>
									<td width="75" class="borderBlack"><input id="medical_fromYear1" maxlength="3" onkeypress="validate(event);"
										class="form-control margin-padding0 text-center" type="text" onkeyup="replaceDot(this)" onblur="choose_from_year_med(1);"
										width="50" value=""></td>
									<td width="75" class="borderBlack"><input id="medical_fromAge1" maxlength="2" onkeypress="validate(event);"
										class="form-control margin-padding0 text-center" type="text" onkeyup="replaceDot(this)" onblur="choose_from_year_med(1);"
										width="50" value=""></td>
									<td width="75" class="borderBlack"><input id="medical_toYear1" maxlength="3" onkeypress="validate(event);"
										class="form-control margin-padding0 text-center" type="text" onkeyup="replaceDot(this)" onblur="choose_from_year_med(1);"
										width="50" value=""></td>
									<td width="75" class="borderBlack"><input id="medical_toAge1" maxlength="2" onkeypress="validate(event);" 
										class="form-control margin-padding0 text-center" type="text" onkeyup="replaceDot(this)" onblur="choose_from_year_med(1);"
										width="50" value=""></td>
									
									<td width="100" class="borderBlack"><input id="medical_year1" maxlength="2"  onkeypress="validate(event);" data-v-min="0" data-v-max="99" onkeyup="check_min_value_year_med(1); , replaceDot(this)"
										class="auto form-control margin-padding0 text-center" type="text"
										width="50" value=""></td>
									<td width="200" class="borderBlack">
										<input name="medical_amount[]" id="medical_amount1" type="text" class="auto form-control margin-padding0 text-center" onblur="select_unit_med(1);" value="0.00" data-v-min="0.00" data-v-max="999999999.99">
									</td>
									<td width="200" class="text-center borderBlack">
									<select class="form-control UNIT_TYPE" onchange="select_unit_option_med(1);" id="medical_unit1" style="margin: 0;">
											
									</select>
									</td>
									<td width="200" class="text-center borderBlack">
									<select class="form-control BENEF_FACTOR" id="medical_factor1" style="margin: 0;">
										
									</select></td>
									<td width="200" class="text-center borderBlack">
									<select class="form-control SCOPE_TYPE" id="medical_scope1" style="margin: 0;">
										
									</select></td>
								</tr>
							</tbody>
						</table>

						<div class="text-center" style="padding: 10px 0"></div>
						<div class="row">
							<div class="col-md-4">
								<div class="col-md-6" style="padding-left: 0;">
									<button class="btn btn-primary width100"
										onclick="addBenefitMedical_OL();">เพิ่มรายการ</button>
								</div>
								<div class="col-md-6">
									<button class="btn btn-primary width100" data-toggle="modal"
										data-target="#confirmDeleteBenefitMedical">ลบรายการ</button>
								</div>
							</div>
							<div class="col-md-4"></div>
							<div class="col-md-4">
								<div class="col-md-6">
									<button class="btn btn-primary width100" onclick="bt_Medical_OL_Confirm();">บันทึก</button>
								</div>
								<div class="col-md-6" style="padding-right: 0">
									<button class="btn btn-primary width100" data-dismiss="modal" data-toggle="modal"
											data-target="#cancelBoxOL_Benefit">ยกเลิก</button>
								</div>
							</div>
						</div>
					</div>
					
					<!-- เงินปันผล -->
					<div id="dividend_OL" class="tab-pane">
						<div class="text-center" style="padding: 20px 0"></div>
						<div class="panel panel-primary">
								<div class="row">
									<div class="col-md-12 panel_head_blue">
										<div class="col-sm-12 input-group">
											<!-- <span class="input-group-addon"
													style="background-color: #337AB7;">  -->
													<input
													type="checkbox" id="cbBoxDV1" onclick="displayDividendValue();">
													<label for="cbBoxDV1">เงินปันผลจำนวนหนึ่ง (Non Guarantee)</label>
											<!-- </span>  -->
											<!-- <input type="text"
												class="form-control text-center fontColorWhite padding20px"
												style="background-color: #337AB7; border-left: 0;"
												value="เงินปันผลจำนวนหนึ่ง (Non Guarantee)"> -->
										</div>
									</div>
								</div>
								<div class="text-center" style="padding: 10px 0"></div>
									<div class="row">
										<div class="col-md-1"></div>
										<div class="col-md-2">
											<font id="validate_DVList1_OL" style="color: red;">*</font>
											<label class="text-right" style="padding-top: 5px;">ประเภทเงินปันผล</label>
										</div>
										<div class="col-md-4">
											<select class="form-control DIVIDEND_TYPE" id="DVList1" onchange="onchangeDividendType_OL()" disabled>
												
											</select>
										</div>
									</div>
								<div class="text-center" style="padding: 10px 0"></div>
									<div class="row">
										<div class="col-md-1"></div>
										<div class="col-md-2">
										<font id="validate_DvList1_Year_OL" style="color: red;">*</font>
											<label class="text-right" style="padding-top: 5px;">ปีกรมธรรม์ / อายุ</label>
										</div>
										<div class="col-md-4">
											<select class="form-control INSURANCE_YEAR" id="DvList1_Year" onchange="onchangeDividendType_OL()" disabled>
												
											</select>
										</div>
										<div class="col-md-1">
											<input class="form-control" onkeypress="validate(event);" type="text" maxlength="2" onkeyup="replaceDot(this)" id="DVBox1" disabled>
										</div>
										<div class="col-md-1 margin-padding0 text-left">
											<p class="text-left" style="padding-top: 5px;">ปี</p>
										</div>
									</div>
								<div class="text-center" style="padding: 10px 0"></div>
									<div class="row">
										<div class="col-md-1"></div>
										<div class="col-md-2">
											<font id="validate_DVList1_Cal_OL" style="color: red;">*</font>
											<label class="text-right" style="padding-top: 5px;">สูตรการคำนวณ</label>
										</div>
										<div class="col-md-4">
											<select class="form-control FORMULAR_COUNT" id="DVList1_Cal" onchange="onchangeDividendType_OL()" disabled>
												
											</select>
										</div>
									</div>
								<div class="text-center" style="padding: 10px 0"></div>
							</div>
							
							<div class="text-center" style="padding: 10px 0"></div>
							<div class="panel panel-primary">
								<div class="row">
									<div class="col-md-12 panel_head_blue">
										<div class="col-sm-12 input-group">
											<!-- <span class="input-group-addon"
													style="background-color: #337AB7;">  -->
													<input
													type="checkbox" id="cbBoxDV2" onclick="displayDividendValue();">
											<!--  </span> -->
											<!--  <input type="text"
												class="form-control text-center fontColorWhite padding20px"
												style="background-color: #337AB7; border-left: 0;"
												value="เงินปันผลที่รับรองการจ่าย (Guarantee)"> -->
												<label for="cbBoxDV2">เงินปันผลที่รับรองการจ่าย (Guarantee)</label>
										</div>
									</div>
								</div>
								<div class="text-center" style="padding: 10px 0"></div>
								<div class="row">
									<div class="col-md-1"></div>
									<div class="col-md-3 text-left">
										<input type="radio" name="GuaranteeOL_opt[]" id="GuaranteeOL_opt1" disabled>&nbsp;<label for="GuaranteeOL_opt1">โหลดตาราง</label>
									</div>
									
								</div>
								<div class="row">
									<div class="col-md-1"></div>
									<div class="col-md-2">
										<p class="text-right" style="padding-top: 5px;">ตารางเงินปันผล</p>
									</div>
									<div class="col-sm-6">
										
										<div class="input-group">
											<input type="text" class="form-control" id="input_fileGuaruntee_OL" readonly="" placeholder="(LAYOUT}_{BASE CODE}.txt">
												<label class="input-group-btn">
													<span id="spanBoxGuaruntee_OL" class="btn btn-primary" disabled>
														<font id="validate_fileGuaruntee_OL" style="color: red;">*</font>เลือกไฟล์
														<input id="select_fileGuaruntee_OL" type="file" accept=".txt" style="display: none;">
													</span>
												</label>
											<input type="hidden" id="fileID_OL" value="">
											<input type="hidden" id="layoutID_OL" value="">
										</div>
									</div>
									<div class="col-md-2">
												<button type="button" class="btn btn-primary text-center"
													id="see_file_input_fileGuaruntee_OL" disabled>ดูค่า</button>
											</div>
									
								</div>
								<div class="text-center" style="padding: 10px 0"></div>
								<div class="row">
									<div class="col-md-1"></div>
									<div class="col-md-3 text-left">
										<input type="radio" name="GuaranteeOL_opt[]" id="GuaranteeOL_opt2" disabled>&nbsp;<label for="GuaranteeOL_opt2">ระบุค่า</label>
									</div>
									
								</div>
								<div class="text-center" style="padding: 10px 0"></div>
								<div class="col-sm-12 paddingleft_style3">
									<table class="table table-bordered" id="benefit_Guaruntee_tbl"> 
									<thead>
										<tr>
											<th class="borderBlack bg-primary text-center"></th>
											<th class="borderBlack bg-primary text-center">ประเภทเงินปันผล</th>
											<th class="borderBlack bg-primary text-center">ปี</th>
											<th class="borderBlack bg-primary text-center">จำนวน</th>
											<th class="borderBlack bg-primary text-center">หน่วย</th>
											<th class="borderBlack bg-primary text-center">Factor</th>
											<th class="borderBlack bg-primary text-center">ประเภทคำนวณ</th>
										</tr>
									</thead>
									<tbody>
										<tr id="tbody_dividend1">
											<td width="50" id="imgOK_div1"
												class="verticalCenter text-center borderBlack"
												onclick="imgCheckbox('imgOK_div1');"><i
												class="glyphicon glyphicon-edit"></i></td>
											<td class="borderBlack">
											<select class="form-control DIVIDEND_TYPE" id="dividend_beg_type1" style="margin:0;">
													
											</select></td>
											<td width="75" class="borderBlack" style="margin:0;">
												<input id="dividend_year1" class="auto form-control margin-padding0 text-center"  onkeypress="validate(event);" onkeyup="check_min_value_year_div(1), replaceDot(this)" data-v-min="0" data-v-max="99" maxlength="2" type="text" width="50" value="">
											</td>
											<td width="75" class="borderBlack" style="margin:0;">
												<input id="dividend_amount1" class="auto form-control margin-padding0 text-center"  onblur="select_unit_dividend(1);" type="text" width="50" value="0.00" data-v-min="0.00" data-v-max="999999999.99" value="">
											</td>
											<td class="borderBlack">
												<select class="form-control UNIT_TYPE" onchange="select_unit_option_dividend(1);" id="dividend_unit1" style="margin:0;">
													
											</select></td>
											<td class="borderBlack">
												<select class="form-control BENEF_FACTOR" id="dividend_factor1" style="margin:0;">
													
											</select></td>
											<td class="borderBlack">
												<select class="form-control SCOPE_TYPE" id="dividend_scope1" style="margin: 0;">
													
											</select></td>
										</tr>
									</tbody>
								</table>
								</div>
								<div class="text-center" style="padding: 20px 0"></div>

								<div class="row">
									<div class="col-md-1"></div>
									<div class="col-md-4">
										<div class="col-md-6">
											<button class="btn btn-primary" style="width:100%;" onclick="addBenefitDividend_OL();" id="btn_DV_add" disabled>เพิ่มรายการ</button>
										</div>
										<div class="col-md-6">
											<!-- <button class="btn btn-primary" style="width:100%;" onclick="deleteAll();" id="btn_DV_del" disabled>ลบรายการ</button> -->
											<button class="btn btn-primary width100" id="btn_DV_del" data-toggle="modal" data-target="#confirmDeleteBenefitDividend" disabled>ลบรายการ</button>
										</div>
									</div>
								</div>
								
								<div class="text-center" style="padding: 10px 0"></div>
							</div>
							<div class="text-center" style="padding: 10px 0"></div>
							
							<div class="row">
									<div class="col-md-4"></div>
									<div class="col-md-4"></div>
									<div class="col-md-4" style="padding: 20px 20px 20px 0;">
										<div class="col-md-6">
											<button class="btn btn-primary width100" onclick="bt_Dividend_OL_Confirm();">บันทึก</button>
										</div>
										<div class="col-md-6">
											<button class="btn btn-primary width100" data-dismiss="modal" data-toggle="modal"
											data-target="#cancelBoxOL_Benefit">ยกเลิก</button>
										</div>
									</div>
								</div>
					</div>
					
				</div>

			</div>
		</div>
	<!-- MODAL confirm delete -->
	<div class="modal fade" id="confirmDeleteBenefitRefund" role="dialog">
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
									data-dismiss="modal" onclick="delete_tbBenefitRefund();">ยืนยัน</button>
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
	
	<!-- MODAL confirm delete -->
	<div class="modal fade" id="confirmDeletePension" role="dialog">
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
									data-dismiss="modal" onclick="delete_tbDeletePension();">ยืนยัน</button>
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
	
	<!-- MODAL confirm delete -->
	<div class="modal fade" id="confirmDeleteBenefitMedical" role="dialog">
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
									data-dismiss="modal" onclick="delete_tbDeleteMedical();">ยืนยัน</button>
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
	
	<!-- MODAL confirm delete -->
	<div class="modal fade" id="confirmDeleteBenefitDividend" role="dialog">
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
									data-dismiss="modal" onclick="delete_tbDeleteDividend();">ยืนยัน</button>
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
	
	
	
	<!-- เลือกข้อยกเว้น -->
	<div class="modal fade" id="modal_DeathExceptionOL" role="dialog">
		<div class="modal-dialog modal-lg">

			<!-- Modal content-->			
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">กรุณาเลือกรายการข้อยกเว้น</h4>
				</div>
				<div class="modal-body">				
				
				<!-- รายการข้อยกเว้น -->
				<div class="table_width1">
					<div class="row">
						<div class="datatbl_DeathExceptionOL_modal">
						<!-- tbl -->
						<table class="table table-bordered" id="tbl_DeathExceptionOL_modal">
							<thead>
								<tr class="bg-primary">
									<th class="text-center" width="10%" style="border-right:none; vertical-align:middle;">เลือก</th>
									<th class="text-center" width="70%" style="vertical-align:middle;">รายการข้อยกเว้นการจ่ายเงินทดแทนในกรณีอุบัติเหตุ</th>									
								</tr>
							</thead>
							<tbody>
								
							</tbody>
						</table>
						<div class="text-center" style="padding: 10px 0"></div>	
						<!-- button -->
						<div class="row" align="center">						
								<button type="button" class="btn btn-primary" id="btn_saveSelectDeathExceptionOL" onclick="saveSelectDeathException_OL();">ตกลง</button>						
								<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>												
						</div>
						</div>				
					</div>							
				</div>				
				</div>
			</div>
		</div>
	</div>
	
	
	<div class="modal fade" id="modal_DVAuto_OL" role="dialog">
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
								<table class="table table-bordered" id="tb_DVAuto_OL">
									<thead>
										<tr class="borderBlack">
											<th class="text-center bg-primary borderBlack">Plan</th>
											<th class="text-center bg-primary borderBlack">Age</th>
											<th class="text-center bg-primary borderBlack">t</th>
											<th class="text-center bg-primary borderBlack">Dividend</th>
										</tr>
									</thead>
									<tbody>
									</tbody>
								</table>
							</div>
							<div class="text-center" style="padding: 10px 0"></div>
							<div class="row">
								<div class="col-md-4">
									<button type="button" class="btn btn-primary" data-dismiss="modal" id="btn_submit_DVAuto_OL">&nbsp;&nbsp;บันทึก&nbsp;&nbsp;</button></div>
								<div class="col-md-8 text-right">
									<button type="button" class="btn btn-primary" data-dismiss="modal" id="btn_cancel_DVAuto_OL">&nbsp;&nbsp;ยกเลิก&nbsp;&nbsp;</button>
								</div>
								<div class="col-md-2"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
				
	<div class="modal fade" id="modal_DVSee_OL" role="dialog">
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
								<table class="table table-bordered" id="tb_DVSee_OL">
									<thead>
										<tr class="borderBlack">
											<th class="text-center bg-primary borderBlack">Plan</th>
											<th class="text-center bg-primary borderBlack">Age</th>
											<th class="text-center bg-primary borderBlack">t</th>
											<th class="text-center bg-primary borderBlack">Dividend</th>
										</tr>
									</thead>
									<tbody>
									</tbody>
								</table>
							</div>
							<div class="text-center" style="padding: 10px 0"></div>
							<div class="row">
								<div class="col-md-4">
									<button type="button" class="btn btn-primary" id="download_tb_DVSee_OL">ดาวน์โหลด</button></div>
								<div class="col-md-8 text-right">
									<button type="button" class="btn btn-primary" data-dismiss="modal" id="btn_cancel_DVAuto_OL">&nbsp;&nbsp;ยกเลิก&nbsp;&nbsp;</button>
								</div>
								<div class="col-md-2"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
	
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
			
			
		
			
		<input type="hidden" id="benef_unit_OL" value=""/> 
		<input type="hidden" id="benef_factor_OL" value=""/>
		<input type="hidden" id="benef_scope_OL" value=""/>
		<input type="hidden" id="benef_dividend_OL" value=""/> 
		<input type="hidden" id="die_calendar_OL" value=""/>
		<input type="hidden" id="die_sa_value_OL" value=""/>
		<input type="hidden" id="lst_premium_sl" value=""/>
		<input type="hidden" id="die_condition_OL" value=""/>
		<input type="hidden" id="rateCat_dividend_OL" value=""/>
		<input type="hidden" id="rateSubCat_dividend_OL" value=""/>
		<input type="hidden" id="cvpv_unit_OL" value=""/> 
		<input type="hidden" id="adb_type_OL" value=""/> 
		<input type="hidden" id="acc_public_type_OL" value=""/>
		<input type="hidden" id="die_oth_type_OL" value=""/>
		<input type="hidden" id="die_sa_type_OL" value=""/>
		
</body>
</html>


