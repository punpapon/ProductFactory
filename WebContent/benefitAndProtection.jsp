<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//Dth HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dth">
<html>
<head>
<link rel="stylesheet" href="css/bootstrap.min.css">
<link rel="stylesheet" href="css/AdminLTE.min.css">

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<link rel="stylesheet" href="css/uiAll.css">

<title>UI-005</title>
</head>
<body>
	<div class="text-center" style="padding: 10px 0">
		<div id="mainBenefit">
			<div class="container">
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
										<input type="checkbox" class="text-right" id="cbDie"
											onclick="controlSubmitBenefit();" checked>
									</div>
									<div class="col-md-10 text-left ">
										<p>เสียชีวิต</p>
									</div>
								</div>

								<div class="col-md-6">
									<div class="col-md-1">
										<input type="checkbox" class="text-right" checked>
									</div>
									<div class="col-md-10 text-left ">
										<p>ผู้เอาประกันหลัก</p>
									</div>
								</div>
							</div>

							<div class="row">
								<div class="col-md-6">
									<div class="col-md-1">
										<input type="checkbox" class="text-right" id="cbContract"
											onclick="controlSubmitBenefit();" checked>
									</div>
									<div class="col-md-10 text-left ">
										<p>เงินครบกำหนดสัญญา</p>
									</div>
								</div>

								<div class="col-md-6">
									<div class="col-md-1">
										<input type="checkbox" class="text-right" id="" checked>
									</div>
									<div class="col-md-10 text-left ">
										<p>ผู้เอาประกันหลัก</p>
									</div>
								</div>
							</div>

							<div class="row">
								<div class="col-md-6">
									<div class="col-md-1">
										<input type="checkbox" class="text-right" id="cbRefund"
											onclick="controlSubmitBenefit();" checked>
									</div>
									<div class="col-md-10 text-left ">
										<p>เงินคืนทุกระยะ/เงินจ่ายคืนตามเงื่อนไข</p>
									</div>
								</div>

								<div class="col-md-6">
									<div class="col-md-1">
										<input type="checkbox" class="text-right" checked>
									</div>
									<div class="col-md-10 text-left ">
										<p>ผู้เอาประกันหลัก</p>
									</div>
								</div>
							</div>

							<div class="row">
								<div class="col-md-6">
									<div class="col-md-1">
										<input type="checkbox" class="text-right" id="cbPension"
											onclick="controlSubmitBenefit();" checked>
									</div>
									<div class="col-md-10 text-left ">
										<p>เงินบำนาญ</p>
									</div>
								</div>

								<div class="col-md-6">
									<div class="col-md-1">
										<input type="checkbox" class="text-right" checked>
									</div>
									<div class="col-md-10 text-left ">
										<p>ผู้เอาประกันหลัก</p>
									</div>
								</div>
							</div>

							<div class="row">
								<div class="col-md-6">
									<div class="col-md-1">
										<input type="checkbox" class="text-right" id="cbMedical"
											onclick="controlSubmitBenefit();" checked>
									</div>
									<div class="col-md-10 text-left ">
										<p>กองทุนค่ารักษาพยาบาล</p>
									</div>
								</div>

								<div class="col-md-6">
									<div class="col-md-1">
										<input type="checkbox" class="text-right" checked>
									</div>
									<div class="col-md-10 text-left ">
										<p>ผู้เอาประกันหลัก</p>
									</div>
								</div>
							</div>
							
							<div class="row">
								<div class="col-md-6">
									<div class="col-md-1">
										<input type="checkbox" class="text-right" id="cbDividend"
											onclick="controlSubmitBenefit();" checked>
									</div>
									<div class="col-md-10 text-left ">
										<p>เงินปันผล</p>
									</div>
								</div>

								<div class="col-md-6">
									<div class="col-md-1">
										<input type="checkbox" class="text-right" checked>
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
										<button class="btn btn-primary width100">ยกเลิก</button>
									</div>
									<div class="col-md-6">
										<button class="btn btn-primary width100" id="benefitSubmit"
											onclick="changeDisplayBenefit005(1);">บันทึก</button>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>

		</div>
		<div id="benefitDetail" class="displayNone">
			<div class="container">
				<div class="text-center" style="padding: 20px 0"></div>
				<ul class="nav nav-tabs" id="tabBenefit005">
					<li id="tabDie"><a data-toggle="tab" href="#die"
						style="display: none" id="aDie">เสียชีวิต</a></li>
					<li id="tabContract"><a data-toggle="tab" href="#contract"
						style="display: none" id="aContract">เงินครบกำหนดสัญญา</a></li>
					<li id="tabRefund"><a data-toggle="tab" href="#refund"
						style="display: none" id="aRefund">เงินคืนทุกระยะ/เงินจ่ายคืนตามเงื่อนไข</a></li>
					<li id="tabPension"><a data-toggle="tab" href="#pension"
						style="display: none" id="aPension">เงินบำนาญ</a></li>
					<li id="tabMedical"><a data-toggle="tab" href="#medical"
						style="display: none" id="aMedical">กองทุนค่ารักษาพยาบาล</a></li>
					<li id="tabDividend"><a data-toggle="tab" href="#dividend"
						style="display: none" id="aDividend">เงินปันผล</a></li>

				</ul>
				<div class="tab-content">
					<div id="die" class="tab-pane fade in active"><!-- START TAB DIE -->

						<div class="text-center" style="padding: 20px 0"></div>

					<table>
							<tr>
								<td><!--START TB LEFT -->
									<div style="padding-bottom: 64px">
										<table class="table table-bordered" width="250" id="tbody_dieL" style="width: 376px;">
											<tr>
												<td width="64px" rowspan="2" style="vertical-align: middle;height: 74px;" class="borderBlack bg-primary">เลือก</td>
												<td width="156px" colspan="2" rowspan="2" style="vertical-align: middle;" class="text-center borderBlack bg-primary">From</td>
												<td width="156px" colspan="2" rowspan="2" style="vertical-align: middle;" class="text-center borderBlack bg-primary">to</td>
											</tr>
											<tr>
<!-- 												<td width="33px" class="text-center borderBlack bg-primary"></td> -->
<!-- 												<td width="33px" class="text-center borderBlack bg-primary">Age</td> -->
<!-- 												<td width="33px" class="text-center borderBlack bg-primary">Year</td> -->
<!-- 												<td width="33px" class="text-center borderBlack bg-primary">Age</td> -->
											</tr>
											<tr id="tbody_dieL1"><!-- Start body Left -->
												<td class="text-center borderBlack" id="imgOK_1" width="33px"
												onclick="imgCheckbox('imgOK_1');"
												style="vertical-align: middle;"><i
												class="glyphicon glyphicon-edit"></i></td>
												<td width="56px" class="borderBlack"><input id="die_fromYear1" type="text" class="form-control margin-padding0 text-center" value="-"></td>
												<td width="100px" class="borderBlack">
													<select class='form-control width-initial' style='margin: 0;width: 100%;'>
														<option selected>None</option>
														<option>วัน</option>
														<option>เดือน</option>
														<option>ปี</option>
														<option>อายุ</option>
													</select></td>
												<td width="56px" class="borderBlack"><input id="die_toYear1" type="text" class="form-control margin-padding0 text-center" value="-"></td>
												<td width="100px" class="borderBlack">
													<select class='form-control width-initial' style='margin: 0;width: 100%;'>
														<option selected>None</option>
														<option>วัน</option>
														<option>เดือน</option>
														<option>ปี</option>
														<option>อายุ</option>
													</select></td>
											</tr>
										</table>
									</div>
								</td><!--END TB LEFT -->
								<td><!--START TB RIGHT -->
									<div class="search-table-outter" style="padding-bottom: 50px; width:32%;">
										<table class="table table-bordered" id="tbody_dieR" style="width: 1350px;">
											<tr>
												<td width="700px" colspan="9" class="text-center borderBlack bg-primary">DEATH</td>
												<td width="300px" colspan="3" rowspan="2" class="text-center borderBlack bg-primary" style="vertical-align: middle;height: 74px;">ADB</td>
												<td width="300px" colspan="3" rowspan="2" class="text-center borderBlack bg-primary" style="vertical-align: middle;">ADB Public</td>
											</tr>
											<tr>
												<td width="70px" class="text-center borderBlack bg-primary">Max</td>
												<td width="140px" colspan="2" class="text-center borderBlack bg-primary">SA</td>
												<td width="140px" colspan="2" class="text-center borderBlack bg-primary">Premium</td>
												<td width="70px" style="white-space: nowrap;" class="text-center borderBlack bg-primary">Include EM</td>
												<td width="140px" colspan="2" style="white-space: nowrap;" class="text-center borderBlack bg-primary">CV/PV บำนาญ</td>
												<td width="140px" class="text-center borderBlack bg-primary">Other</td>
											</tr>
											<tr id="tbody_dieR1">
												<td width="70px" class="borderBlack">
													<select class="form-control width-initial">
														<option>Max</option>
														<option>Sum</option>
														<option selected>None</option>
													</select></td>
												<td width="70px" class="borderBlack"><input id="die_sa1" type="text"
													class="form-control margin-padding0 text-center width70px"
													value="-"></td>
												<td width="70px" class="borderBlack"><select
													class="form-control width-initial">
														<option>SA</option>
														<option selected>None</option>
												</select></td>
												<td width="70px" class="borderBlack"><input id="die_premium1" type="text"
													class="form-control margin-padding0 text-center width70px"
													value="-"></td>
												<td width="70px" class="text-center borderBlack"><select
													class="form-control width-initial">
														<option>Accu</option>
														<option>YRT</option>
														<option selected>None</option>
												</select></td>
												<td width="70px" class="text-center verticalCenter borderBlack"><input
													id="die_checkbox1" type="checkbox"></td>
												<td width="70px" class="borderBlack"><input id="die_cvpv1" type="text"
													class="form-control margin-padding0 text-center width70px"
													value="-"></td>
												<td width="70px" class="text-center borderBlack"><select
													class="form-control width-initial">
														<option>CV</option>
														<option>PV บำนาญ</option>
														<option selected>None</option>
												</select></td>
												<td width="70px" class="text-center borderBlack"><select
													class="form-control width-initial">
														<option>เงินปันผลสะสม</option>
														<option>กองทุนรักษาพยาบาล</option>
														<option>ทุนลดตามตาราง</option>
														<option selected>None</option>
												</select></td>
												<td width="70px" class="text-center borderBlack"><select
													class="form-control width-initial">
														<option>And</option>
														<option>Or</option>
														<option selected>None</option>
												</select></td>
												<td width="70px" class="borderBlack"><input id="adb1" type="text"
													class="form-control margin-padding0 text-center width70px"
													value="-"></td>
												<td width="160px" class="text-center borderBlack"><select
													class="form-control width-initial">
														<option>Accu Premium</option>
														<option>SA</option>
														<option>Fix</option>
														<option selected>None</option>
												</select></td>
												
												<!-- ADB Public ที่เพิ่มเข้ามา 130961 -->
												<td width="70px" class="text-center borderBlack"><select
													class="form-control width-initial">
														<option>And</option>
														<option>Or</option>
														<option selected>None</option>
												</select></td>
												<td width="70px" class="borderBlack"><input id="adb1" type="text"
													class="form-control margin-padding0 text-center width70px"
													value="-"></td>
												<td width="160px" class="text-center borderBlack"><select
													class="form-control width-initial">
														<option>Accu Premium</option>
														<option>SA</option>
														<option>Fix</option>
														<option selected>None</option>
												</select></td>
											</tr>
									</table>
									</div>
								</td><!--END TB RIGHT -->
							</tr>
					</table>

						<div class="text-center" style="padding: 20px 0"></div>
						<div class="row">
							<!-- 							<div class="col-md-1"></div> -->
							<div class="col-md-4 text-left">
								<div class="col-md-6" style="padding-left: 0;">
									<button class="btn btn-primary width100"
										onclick="newAddBenefitDie();">เพิ่มรายการ</button>
								</div>
								<div class="col-md-6 text-left">
									<button class="btn btn-primary width100" data-toggle="modal"
										data-target="#confirmDeleteBenefit">ลบรายการ</button>
								</div>
							</div>
							<div class="col-md-4"></div>
							<div class="col-md-4">
								<div class="col-md-6">
									<button class="btn btn-primary width100" onclick="alertSuccess('บันทึกเรียบร้อย');">บันทึก</button>
								</div>
								<div class="col-md-6" style="padding-right: 0">
									<button class="btn btn-primary width100" onclick="cancleBenefit();">ยกเลิก</button>
								</div>
							</div>
							

						</div>
					</div><!-- END TAB DIE -->
					<div id="contract" class="tab-pane">
						<div class="text-center" style="padding: 20px 0"></div>
						<div class="row">
							<!-- 							<div class="col-md-1"></div> -->
							<div class="col-md-3 text-left" style="padding-top: 5px;">
								<p>ปีที่ใช้ในการคำนวณ</p>
							</div>
							<div class="col-md-3">
								<input type="text" class="form-control" value="ถึงอายุ" disabled>
							</div>
							<div class="col-md-3">
								<input id='yearCal' type="text" class="form-control" value="90" disabled>
							</div>
						</div>
						<div class="text-center" style="padding: 10px 0"></div>
						<div class="row">
							<!-- 							<div class="col-md-1"></div> -->
							<div class="col-md-3 text-left">
								<input id='cbContract' type="checkbox" class="" checked>&nbsp;ดอกเบี้ยครบกำหนดสัญญา
							</div>
							<div class="col-md-3 text-left">
								<div class="col-md-6" style="padding: 0">
									<input id='percentContract' type="text" class="form-control" value="6.00">
								</div>
								<div class="col-md-6">
									<p style="padding-left: 0; padding-top: 5px;">%</p>
								</div>

							</div>
						</div>

						<div class="text-center" style="padding: 10px 0"></div>
						<div class="container">
							<table class="table table-bordered" width="700">
								<thead>
									<tr>
										<th width="100" class="text-center bg-primary borderBlack">เลือก</th>
										<th width="200" class="text-center bg-primary borderBlack" colspan="2">SA</th>
										<th width="400" class="text-center bg-primary borderBlack" colspan="3">Premium(Accu/YRT)</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td width="100" class="borderBlack">
											<select class="form-control">
												<option>Max</option>
												<option>Sum</option>
												<option>None</option>
											</select>
										</td>

										<td width="100" class="borderBlack"><input id='saContract' class="form-control text-right" type="text" value="100.00%"></td>
										<td width="100" class="borderBlack">
											<select class="form-control">
												<option>SA</option>
												<option>None</option>
											</select></td>
										<td width="100" class="borderBlack"><input id='premiumContract' class="form-control text-center" type="text" value="-"></td>
										<td width="100" class="text-right borderBlack">
											<select class="form-control">
												<option>Accu</option>
												<option>YRT</option>
												<option>None</option>
											</select></td></td>
										<td width="200" class="text-center borderBlack" style="vertical-align: middle;">
											<input type="checkbox"> &nbsp;
											Include EM</td>
									</tr>
								</tbody>
							</table>
						</div>

						<div class="text-center" style="padding: 10px 0"></div>
						<div class="row text-right">
							<div class="col-md-8"></div>
							<div class="col-md-2" style="padding-right: 0">
								<button class="btn btn-primary width100" onclick="alertSuccess('บันทึกเรียบร้อย');">บันทึก</button>
							</div>
							<div class="col-md-2" style="padding-right: 0">
								<button class="btn btn-primary width100" onclick="cancleBenefit();">ยกเลิก</button>
							</div>

						</div>

					</div>
					<div id="refund" class="tab-pane">
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
<!-- 									<td width="200" class="borderBlack"><select class="form-control item-i" -->
<!-- 										style="margin: 0; padding: 0;" onchange="ddRefund();"> -->
<!-- 											<option value="0">เงินคืน</option> -->
<!-- 											<option value="2">None</option> -->
<!-- 									</select></td> -->
									<td width="75" class="borderBlack"><input id="refund_fromYear1"
										class="form-control margin-padding0 text-center" type="text"
										width="50" value="2"></td>
									<td width="75" class="borderBlack"><input id="refund_fromAge1"
										class="form-control margin-padding0 text-center" type="text"
										width="50" value="-"></td>
									<td width="75" class="borderBlack"><input id="refund_toYear1"
										class="form-control margin-padding0 text-center" type="text"
										width="50" value="20"></td>
									<td width="75" class="borderBlack"><input id="refund_toAge1"
										class="form-control margin-padding0 text-center" type="text"
										width="50" value="-"></td>
									<td width="100" class="borderBlack"><input id="refund_year1"
										class="form-control margin-padding0 text-center" type="text"
										width="50" value="2"></td>
									<td width="200" class="borderBlack"><input id="refund_amount1"
										class="form-control margin-padding0 text-right" type="text"
										width="50" value="100.00"></td>
									<td width="200" class="text-center borderBlack"><select
										class="form-control " style="margin: 0; padding: 0;">
											<option value="0">บาท</option>
											<option value="1">เปอร์เซ็นต์</option>
											<option value="2">None</option>
									</select></td>
									<td width="200" class="text-center borderBlack"><select
										class="form-control " style="margin: 0; padding: 0;">
											<option value="0">ทุนประกัน</option>
											<option value="1">เบี้ยประกัน</option>
											<option value="2">None</option>
									</select></td>
									<td width="200" class="text-center borderBlack"><select
										class="form-control " style="margin: 0; padding: 0;">
											<option value="0">ปีกรมธรรม์</option>
											<option value="1">ปีครบชำระเบี้ย</option>
											<option value="2">ปีที่ครบกำหนดสัญญา</option>
											<option value="3">อายุผู้เอาประกัน</option>
											<option value="4">None</option>
									</select></td>
								</tr>
								<tr id="tbody_refund2">
									<td width="50" id="imgOK_refund2" class="text-center borderBlack"
										onclick="imgCheckbox('imgOK_refund2');"
										style="vertical-align: middle;"><i
										class="glyphicon glyphicon-edit"></i></td>
<!-- 									<td width="200" class="borderBlack"><select class="form-control item-i" -->
<!-- 										style="margin: 0; padding: 0;" onchange="ddRefund();"> -->
<!-- 											<option value="0">เงินคืน</option> -->
<!-- 											<option value="2">None</option> -->
<!-- 									</select></td> -->
									<td width="75" class="borderBlack"><input id="refund_fromYear2"
										class="form-control margin-padding0 text-center" type="text"
										width="50" value="21"></td>
									<td width="75" class="borderBlack"><input id="refund_fromAge2"
										class="form-control margin-padding0 text-center" type="text"
										width="50" value="-"></td>
									<td width="75" class="borderBlack"><input id="refund_toYear2"
										class="form-control margin-padding0 text-center" type="text"
										width="50" value="21"></td>
									<td width="75" class="borderBlack"><input id="refund_toAge2"
										class="form-control margin-padding0 text-center" type="text"
										width="50" value="-"></td>
									<td width="100" class="borderBlack"><input id="refund_year2"
										class="form-control margin-padding0 text-center" type="text"
										width="50" value="2"></td>
									<td width="200" class="borderBlack"><input id="refund_amount2"
										class="form-control margin-padding0 text-right" type="text"
										width="50" value="100.00"></td>
									<td width="200" class="text-center borderBlack"><select
										class="form-control " style="margin: 0; padding: 0;">
											<option value="0">บาท</option>
											<option value="1">เปอร์เซ็นต์</option>
											<option value="2">None</option>
									</select></td>
									<td width="200" class="text-center borderBlack"><select
										class="form-control " style="margin: 0; padding: 0;">
											<option value="0">ทุนประกัน</option>
											<option value="1">เบี้ยประกัน</option>
											<option value="2">None</option>
									</select></td>
									<td width="200" class="text-center borderBlack"><select
										class="form-control " style="margin: 0; padding: 0;">
											<option value="0">ปีกรมธรรม์</option>
											<option value="1">ปีครบชำระเบี้ย</option>
											<option value="2">ปีที่ครบกำหนดสัญญา</option>
											<option value="3">อายุผู้เอาประกัน</option>
											<option value="4">None</option>
									</select></td>
								</tr>
								<tr id="tbody_refund3">
									<td width="50" id="imgOK_refund3" class="text-center borderBlack"
										onclick="imgCheckbox('imgOK_refund3');"
										style="vertical-align: middle;"><i
										class="glyphicon glyphicon-edit"></i></td>
<!-- 									<td width="200" class="borderBlack"><select class="form-control item-i" -->
<!-- 										style="margin: 0; padding: 0;" onchange="ddRefund();"> -->
<!-- 											<option value="0">เงินคืน</option> -->
<!-- 											<option value="2">None</option> -->
<!-- 									</select></td> -->
									<td width="75" class="borderBlack"><input id="refund_fromYear3"
										class="form-control margin-padding0 text-center" type="text"
										width="50" value="22"></td>
									<td width="75" class="borderBlack"><input id="refund_fromAge3"
										class="form-control margin-padding0 text-center" type="text"
										width="50" value="-"></td>
									<td width="75" class="borderBlack"><input id="refund_toYear3"
										class="form-control margin-padding0 text-center" type="text"
										width="50" value="-"></td>
									<td width="75" class="borderBlack"><input id="refund_toAge3"
										class="form-control margin-padding0 text-center" type="text"
										width="50" value="81"></td>
									<td width="100" class="borderBlack"><input id="refund_year3"
										class="form-control margin-padding0 text-center" type="text"
										width="50" value="2"></td>
									<td width="200" class="borderBlack"><input id="refund_amount3"
										class="form-control margin-padding0 text-right" type="text"
										width="50" value="100.00"></td>
									<td width="200" class="text-center borderBlack"><select
										class="form-control " style="margin: 0; padding: 0;">
											<option value="0">บาท</option>
											<option value="1">เปอร์เซ็นต์</option>
											<option value="2">None</option>
									</select></td>
									<td width="200" class="text-center borderBlack"><select
										class="form-control " style="margin: 0; padding: 0;">
											<option value="0">ทุนประกัน</option>
											<option value="1">เบี้ยประกัน</option>
											<option value="2">None</option>
									</select></td>
									<td width="200" class="text-center borderBlack"><select
										class="form-control " style="margin: 0; padding: 0;">
											<option value="0">ปีกรมธรรม์</option>
											<option value="1">ปีครบชำระเบี้ย</option>
											<option value="2">ปีที่ครบกำหนดสัญญา</option>
											<option value="3">อายุผู้เอาประกัน</option>
											<option value="4">None</option>
									</select></td>
								</tr>
								<tr id="tbody_refund4">
									<td width="50" id="imgOK_refund4" class="text-center borderBlack"
										onclick="imgCheckbox('imgOK_refund4');"
										style="vertical-align: middle;"><i
										class="glyphicon glyphicon-edit"></i></td>
<!-- 									<td width="200" class="borderBlack"><select class="form-control item-i" -->
<!-- 										style="margin: 0; padding: 0;" onchange="ddRefund();"> -->
<!-- 											<option value="0">เงินคืน</option> -->
<!-- 											<option value="2">None</option> -->
<!-- 									</select></td> -->
									<td width="75" class="borderBlack"><input id="refund_fromYear4"
										class="form-control margin-padding0 text-center" type="text"
										width="50" value="-"></td>
									<td width="75" class="borderBlack"><input id="refund_fromAge4"
										class="form-control margin-padding0 text-center" type="text"
										width="50" value="90"></td>
									<td width="75" class="borderBlack"><input id="refund_toYear4"
										class="form-control margin-padding0 text-center" type="text"
										width="50" value="-"></td>
									<td width="75" class="borderBlack"><input id="refund_toAge4"
										class="form-control margin-padding0 text-center" type="text"
										width="50" value="99"></td>
									<td width="100" class="borderBlack"><input id="refund_year4"
										class="form-control margin-padding0 text-center" type="text"
										width="50" value="2"></td>
									<td width="200" class="borderBlack"><input id="refund_amount4"
										class="form-control margin-padding0 text-right" type="text"
										width="50" value="100.00"></td>
									<td width="200" class="text-center borderBlack"><select
										class="form-control " style="margin: 0; padding: 0;">
											<option value="0">บาท</option>
											<option value="1">เปอร์เซ็นต์</option>
											<option value="2">None</option>
									</select></td>
									<td width="200" class="text-center borderBlack"><select
										class="form-control " style="margin: 0; padding: 0;">
											<option value="0">ทุนประกัน</option>
											<option value="1">เบี้ยประกัน</option>
											<option value="2">None</option>
									</select></td>
									<td width="200" class="text-center borderBlack"><select
										class="form-control " style="margin: 0; padding: 0;">
											<option value="0">ปีกรมธรรม์</option>
											<option value="1">ปีครบชำระเบี้ย</option>
											<option value="2">ปีที่ครบกำหนดสัญญา</option>
											<option value="3">อายุผู้เอาประกัน</option>
											<option value="4">None</option>
									</select></td>
								</tr>
							</tbody>
						</table>

						<div class="text-center" style="padding: 10px 0"></div>

						<div class="text-center" style="padding: 10px 0"></div>
						<div class="row">
							<div class="col-md-4">
								<div class="col-md-6" style="padding-left: 0;">
									<button class="btn btn-primary width100"
										onclick="addBenefitRefund();">เพิ่มรายการ</button>
								</div>
								<div class="col-md-6">
									<button class="btn btn-primary width100" data-toggle="modal"
										data-target="#confirmDeleteBenefit">ลบรายการ</button>
								</div>
							</div>
							<div class="col-md-4"></div>
							<div class="col-md-4">
								<div class="col-md-6">
									<button class="btn btn-primary width100" onclick="alertSuccess('บันทึกเรียบร้อย');">บันทึก</button>
								</div>
								<div class="col-md-6" style="padding-right: 0">
									<button class="btn btn-primary width100" onclick="cancleBenefit();">ยกเลิก</button>
								</div>
							</div>
						</div>
					</div>
					<div id="pension" class="tab-pane">
						<div class="text-center" style="padding: 20px 0"></div>
						<div class="row">
							<!-- 							<div class="col-md-1"></div> -->
							<div class="col-md-2" style="padding-top: 5px;">
								<p class="text-left">อายุที่เริ่มบำนาญ</p>
							</div>
							<div class="col-md-2">
								<input id='pension_startAge' type="text" class="form-control text-right" value="50">
							</div>
							<div class="col-md-1">
								<p style="padding-top: 5px;" class="text-left">&nbsp;ปี</p>
							</div>
						</div>
						<div class="text-center" style="padding: 10px 0"></div>
						<div class="row">
							<!-- 							<div class="col-md-1"></div> -->
							<div class="col-md-2" style="padding-top: 5px;">
								<p class="text-left">รับรองการจ่าย</p>
							</div>
							<div class="col-md-2">
								<input id='pension_confirmPay' type="text" class="form-control text-right" value="10">
							</div>
							<div class="col-md-1">
								<p style="padding-top: 5px;" class="text-left">&nbsp;ปี</p>
							</div>
						</div>
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
									<td width="50" id="imgOK_pension1"
										onclick="imgCheckbox('imgOK_pension1');" class="verticalCenter text-center borderBlack"><i
										class="glyphicon glyphicon-edit "></i></td>
									<td width="50" class="borderBlack"><input id='pension_fromYear1' class="form-control text-center margin-padding0" type="text" value="-"></td>
									<td width="50" class="borderBlack"><input id='pension_fromAge1' class="form-control text-center margin-padding0" type="text" value="60"></td>
									<td width="50" class="borderBlack"><input id='pension_toYear1' class="form-control text-center margin-padding0" type="text" value="-"></td>
									<td width="50" class="borderBlack"><input id='pension_toAge1' class="form-control text-center margin-padding0" type="text" value="64"></td>
									<td width="100" class="borderBlack"><input id='pension_year1' class="form-control text-right margin-padding0" type="text" value="1"></td>
									<td width="200" class="borderBlack"><input id='pension_amount1' class="form-control text-right margin-padding0" type="text" value="10.00"></td>
									<td width="200" class="text-center borderBlack">
										<select class="form-control " style="margin: 0; padding: 0;">
												<option value="0">บาท</option>
												<option value="1">เปอร์เซ็นต์</option>
												<option value="2">None</option>
										</select></td>
									<td width="300" class="text-center borderBlack">
										<select class="form-control " style="margin: 0; padding: 0;">
												<option value="0">ทุนประกัน</option>
												<option value="1">เบี้ยประกัน</option>
												<option value="2">None</option>
										</select></td>
								</tr>
								<tr id="tbody_pension2">
									<td width="50" id="imgOK_pension2"
										onclick="imgCheckbox('imgOK_pension2');" class="verticalCenter text-center borderBlack"><i
										class="glyphicon glyphicon-edit"></i></td>
									<td width="50" class="borderBlack"><input id='pension_fromYear2' class="form-control text-center margin-padding0" type="text" value="-"></td>
									<td width="50" class="borderBlack"><input id='pension_fromAge2' class="form-control text-center margin-padding0" type="text" value="65"></td>
									<td width="50" class="borderBlack"><input id='pension_toYear2' class="form-control text-center margin-padding0" type="text" value="-"></td>
									<td width="50" class="borderBlack"><input id='pension_toAge2' class="form-control text-center margin-padding0" type="text" value="99"></td>
									<td width="100" class="borderBlack"><input id='pension_year2' class="form-control text-right margin-padding0" type="text" value="1"></td>
									<td width="200" class="borderBlack"><input id='pension_amount2' class="form-control text-right margin-padding0" type="text" value="15.00"></td>
									<td width="200" class="text-center borderBlack"><select
										class="form-control " style="margin: 0; padding: 0;">
											<option value="0">บาท</option>
											<option value="1">เปอร์เซ็นต์</option>
											<option value="2">None</option>
									</select></td>
									<td width="300" class="text-center borderBlack"><select
										class="form-control " style="margin: 0; padding: 0;">
											<option value="0">ทุนประกัน</option>
											<option value="1">เบี้ยประกัน</option>
											<option value="2">None</option>
									</select></td>
								</tr>
							</tbody>
						</table>

						<div class="text-center" style="padding: 10px 0"></div>
						<div class="row">
							<div class="col-md-4">
								<div class="col-md-6" style="padding-left: 0;">
									<button class="btn btn-primary width100"
										onclick="addBenefitPenSion();">เพิ่มรายการ</button>
								</div>
								<div class="col-md-6">
									<button class="btn btn-primary width100" data-toggle="modal"
										data-target="#confirmDeleteBenefit">ลบรายการ</button>
								</div>
							</div>
							<div class="col-md-4"></div>
							<div class="col-md-4">
								<div class="col-md-6">
									<button class="btn btn-primary width100" onclick="alertSuccess('บันทึกเรียบร้อย');">บันทึก</button>
								</div>
								<div class="col-md-6" style="padding-right: 0">
									<button class="btn btn-primary width100" onclick="cancleBenefit();">ยกเลิก</button>
								</div>
							</div>
						</div>
					</div>
					<div id="medical" class="tab-pane">
						<div class="text-center" style="padding: 20px 0"></div>
						<table class="table table-bordered" id="benefit_medical">
							<thead>
								<tr>
									<th class="text-center borderBlack bg-primary" rowspan="2" width="50" style="vertical-align: middle;">เลือก</th>
									<th class="text-center borderBlack bg-primary" colspan="2" width="100">From</th>
									<th class="text-center borderBlack bg-primary" colspan="2" width="100">To</th>
									<th class="text-center verticalCenter borderBlack bg-primary" rowspan="2" width="100">ทุก(ปี)</th>
									<th class="text-center verticalCenter borderBlack bg-primary" rowspan="2" width="200">จำนวน</th>
									<th class="text-center verticalCenter borderBlack bg-primary" rowspan="2" width="200">หน่วย</th>
									<th class="text-center verticalCenter borderBlack bg-primary" rowspan="2" width="300">Factor</th>
									<th class="text-center verticalCenter borderBlack bg-primary" rowspan="2" width="300">ประเภทคำนวณ</th>
								</tr>
								<tr>
									<td class="text-center borderBlack bg-primary" width="50">Year</td>
									<td class="text-center borderBlack bg-primary" width="50">Age</td>
									<td class="text-center borderBlack bg-primary" width="50">Year</td>
									<td class="text-center borderBlack bg-primary" width="50">Age</td>
								</tr>
							</thead>
							<tbody>
								<tr id="tbody_medical1">
									<td width="50" id="imgOK_medical1" class="verticalCenter text-center borderBlack"
										onclick="imgCheckbox('imgOK_medical1');"><i
										class="glyphicon glyphicon-edit"></i></td>
									<td width="50" class="borderBlack"><input id='medical_fromYear1' class="form-control text-center margin-padding0" type="text" value="1"></td>
									<td width="50" class="borderBlack"><input id='medical_fromAge1' class="form-control text-center margin-padding0" type="text" value="-"></td>
									<td width="50" class="borderBlack"><input id='medical_toYear1' class="form-control text-center margin-padding0" type="text" value="-"></td>
									<td width="50" class="borderBlack"><input id='medical_toAge1' class="form-control text-center margin-padding0" type="text" value="20"></td>
									<td width="100" class="borderBlack"><input id='medical_year1' class="form-control text-right margin-padding0" type="text" value="2"></td>
									<td width="200" class="borderBlack"><input id='medical_amount1' class="form-control text-right margin-padding0" type="text" value="10.00"></td>
									<td width="200" class="text-center borderBlack"><select
										class="form-control " style="margin: 0; padding: 0;">
											<option value="0">บาท</option>
											<option value="1">เปอร์เซ็นต์</option>
											<option value="2">None</option>
									</select></td>
									<td width="200" class="text-center borderBlack"><select
										class="form-control " style="margin: 0; padding: 0;">
											<option value="0">ทุนประกัน</option>
											<option value="1">เบี้ยประกัน</option>
											<option value="2">None</option>
									</select></td>
									<td width="200" class="text-center borderBlack"><select
										class="form-control " style="margin: 0; padding: 0;">
											<option value="0">ปีกรมธรรม์</option>
											<option value="1">ปีครบชำระเบี้ย</option>
											<option value="2">ปีที่ครบกำหนดสัญญา</option>
											<option value="3">อายุผู้เอาประกัน</option>
											<option value="4">None</option>
									</select></td>
								</tr>
							</tbody>
						</table>

						<div class="text-center" style="padding: 10px 0"></div>
						<div class="row">
							<div class="col-md-4">
								<div class="col-md-6" style="padding-left: 0;">
									<button class="btn btn-primary width100"
										onclick="addBenefitMedical();">เพิ่มรายการ</button>
								</div>
								<div class="col-md-6">
									<button class="btn btn-primary width100" data-toggle="modal"
										data-target="#confirmDeleteBenefit">ลบรายการ</button>
								</div>
							</div>
							<div class="col-md-4"></div>
							<div class="col-md-4">
								<div class="col-md-6">
									<button class="btn btn-primary width100" onclick="alertSuccess('บันทึกเรียบร้อย');">บันทึก</button>
								</div>
								<div class="col-md-6" style="padding-right: 0">
									<button class="btn btn-primary width100" onclick="cancleBenefit();">ยกเลิก</button>
								</div>
							</div>
						</div>
					</div>
					
					<div id="dividend" class="tab-pane">
						<div class="text-center" style="padding: 20px 0"></div>
						<div class="panel panel-primary">
								<div class="row">
									<div class="col-md-12">
										<div class="input-group">
											<span class="input-group-addon"
												style="background-color: #337AB7;">
											</span> <input type="text"
												class="form-control text-center fontColorWhite padding20px"
												style="background-color: #337AB7; border-left: 0;"
												value="เงินปันผลจำนวนหนึ่ง (Non Guarantee)">
										</div>
									</div>
								</div>
								<div class="text-center" style="padding: 10px 0"></div>
									<div class="row">
										<div class="col-md-1"></div>
										<div class="col-md-2">
											<p class="text-right" style="padding-top: 5px;">ประเภทเงินปันผล</p>
										</div>
										<div class="col-md-4">
											<select class="form-control" id="">
												<option></option>
											</select>
										</div>
									</div>
								<div class="text-center" style="padding: 10px 0"></div>
									<div class="row">
										<div class="col-md-1"></div>
										<div class="col-md-2">
											<p class="text-right" style="padding-top: 5px;">ปีกรมธรรม์ / อายุ</p>
										</div>
										<div class="col-md-4">
											<select class="form-control" id="">
												<option></option>
											</select>
										</div>
										<div class="col-md-1">
											<input class="form-control" type="text">
										</div>
										<div class="col-md-1 margin-padding0 text-left">
											<p class="text-left" style="padding-top: 5px;">ปี</p>
										</div>
									</div>
								<div class="text-center" style="padding: 10px 0"></div>
									<div class="row">
										<div class="col-md-1"></div>
										<div class="col-md-2">
											<p class="text-right" style="padding-top: 5px;">สูตรการคำนวณ</p>
										</div>
										<div class="col-md-4">
											<select class="form-control" id="">
												<option></option>
											</select>
										</div>
									</div>
								<div class="text-center" style="padding: 10px 0"></div>
							</div>
							
							<div class="text-center" style="padding: 10px 0"></div>
							<div class="panel panel-primary">
								<div class="row">
									<div class="col-md-12">
										<div class="input-group">
											<span class="input-group-addon"
												style="background-color: #337AB7;">
											</span> <input type="text"
												class="form-control text-center fontColorWhite padding20px"
												style="background-color: #337AB7; border-left: 0;"
												value="เงินปันผลที่รับรองการจ่าย (Guarantee)">
										</div>
									</div>
								</div>
								<div class="text-center" style="padding: 10px 0"></div>
								<div class="row">
									<div class="col-md-1"></div>
									<div class="col-md-3 text-left">
										<input type="radio" name="aGuarantee">&nbsp;โหลดตาราง
									</div>
									
								</div>
								<div class="row">
									<div class="col-md-1"></div>
									<div class="col-md-2">
										<p class="text-right" style="padding-top: 5px;">ตารางเงินปันผล</p>
									</div>
									<div class="col-md-5">
										<div class="input-group">
											<input type="text" class="form-control"
												placeholder="(LAYOUT)_{BASECODE}.txt" readonly> <label
												class="input-group-btn"> <span id="spanBox1"
												class="btn btn-primary" > เลือกไฟล์<input
													type="file" style="display: none;" id="">
											</span>
											</label>
										</div>
									</div>
									
								</div>
								<div class="text-center" style="padding: 10px 0"></div>
								<div class="row">
									<div class="col-md-1"></div>
									<div class="col-md-3 text-left">
										<input type="radio" name="aGuarantee">&nbsp;ระบุค่า
									</div>
									
								</div>
								<div class="text-center" style="padding: 10px 0"></div>
								<div style="padding-left: 120px;padding-right: 120px;">
									<table class="table table-bordered" id="benefit_dividend">
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
											<td width="50" id="imgOK_dividend1"
												class="verticalCenter text-center borderBlack"
												onclick="imgCheckbox('imgOK_dividend1');"><i
												class="glyphicon glyphicon-edit"></i></td>
											<td class="borderBlack"><select class="form-control "
												style="margin: 0; padding: 0;">
													<option value="0">ครบชำระเบี้ยประกัน</option>
													<option value="1">ครบกำหนดสัญญา</option>
													<option value="2">ระหว่างสัญญา</option>
											</select></td>
											<td class="verticalCenter borderBlack" style="margin:0;padding: 0;"><input class="from-control text-center" type="text" value="-" style="width: 60px;height: 80%;"></td>
											<td class="verticalCenter borderBlack" style="margin:0;padding: 0;"><input class="from-control text-center" type="text" value="-" style="width: 60px;height: 80%;"></td>
											<td class="borderBlack"><select class="form-control "
												style="margin: 0; padding: 0;">
													<option value="0">บาท</option>
													<option value="1">เปอร์เซ็นต์</option>
													<option value="2">None</option>
											</select></td>
											<td class="borderBlack"><select class="form-control "
												style="margin: 0; padding: 0;">
													<option value="0">ทุนประกัน</option>
													<option value="1">เบี้ยประกัน</option>
													<option value="2">None</option>
											</select></td>
											<td class="borderBlack"><select class="form-control "
												style="margin: 0; padding: 0;">
													<option value="0">ปีกรมธรรม์</option>
													<option value="1">อายุผู้เอาประกันภัย</option>
													<option value="2">None</option>
											</select></td>
										</tr>
									</tbody>
								</table>
								</div>
								<div class="text-center" style="padding: 20px 0"></div>
								
								<div class="row">
									<div class="col-md-1"></div>
									<div class="col-md-3">
										<div class="col-md-6">
											<button class="btn btn-primary" style="width:100%;" onclick="addBenefitDividend();">เพิ่มรายการ</button>
										</div>
										<div class="col-md-6">
											<button class="btn btn-primary" style="width:100%;" onclick="deleteAll();">ลบรายการ</button>
										</div>
									</div>
								</div>
								
								<div class="text-center" style="padding: 10px 0"></div>
							</div>
							<div class="text-center" style="padding: 10px 0"></div>
							<div class="row">
								<div class="col-md-10"></div>
								<div class="col-md-2">
									<button class="btn btn-primary text-right" style="width:100%;" onclick="alertSuccess('บันทึกเรียบร้อย');">บันทึก</button>
								</div>
								
							</div>
							
					</div>
					
				</div>

			</div>
		</div>
	</div>

	<!-- MODAL -->
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

	<%@include file="modal_warning.jsp"%>
	<%@include file="modal_success.jsp"%>
	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<!-- 	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script> -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

	
	<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
    <script src="js/ui005.js"></script>
	
</body>
</html>