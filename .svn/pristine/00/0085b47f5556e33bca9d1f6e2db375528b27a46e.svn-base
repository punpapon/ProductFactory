<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>ข้อมูลทั่วไป Basic Information</title>

</head>
<body >
		<div class="row box-body">
			<div class="panel panel-primary">
				<div class="panel-heading">
					<p class="margin0 text-center">
						<B>ข้อมูลทั่วไป Basic Information</B>
					</p>
				</div>
				<div class="text-center" style="padding: 10px 0"></div>
				<div class="row">
					<div class="col-sm-12">
						<div class="col-sm-3">
							<label for="lb_contact" class="control-label-left"
								style="margin-top: 8px;"><font id="validate_input1" style="color: red;">*</font> รหัสความคุ้มครองแบบประกัน</label>
						</div>
						<div class="col-xs-2">
							<input class="form-control" type="text"
								id="pass_Insurance_coverage" onkeyup="pass_Insurance_coverage();"></input>
						</div>
					</div>
				</div>

				<div class="text-center" style="padding: 5px 0"></div>
				<div class="row">
					<div class="col-sm-12">
						<div class="col-sm-2">
							<label for="lb_contact" class="control-label-left"
								style="margin-top: 8px;"><font id="validate_input2" style="color: red;">*</font> ชื่อ(ไทย)</label>
						</div>
						<div class="col-xs-3">
							<input type="text" class="form-control" id="thai_Name" onkeyup="thai_Name();">
						</div>
						<div class="col-sm-1"></div>
						<div class="col-sm-2">
							<label for="lb_contact" class="control-label-left"
								style="margin-top: 8px;"><font id="validate_input3" style="color: red;">*</font> ชื่อ(อังกฤษ)</label>
						</div>
						<div class="col-xs-3">
							<input type="text" class="form-control" id="eng_Name" onkeyup="eng_Name();">
						</div>
					</div>
				</div>

				<div class="text-center" style="padding: 5px 0"></div>
				<div class="row">
					<div class="col-sm-7">
						<div class="col-sm-4">
							<label for="lb_contact" class="control-label-left"
								style="margin-top: 8px;"><font id="validate_input4" style="color: red;">*</font>วันที่ คปภ.อนุมัติ</label>
						</div>
						<div class="col-xs-3">
							<input type="text" class="form-control" id="appStart_date"
								onblur="checkappStart ();" placeholder="dd/mm/yyyy"
								onkeyup="
								        var v = this.value;
								        if (v.match(/^\d{2}$/) !== null) {
								            this.value = v + '/';
								        } else if (v.match(/^\d{2}\/\d{2}$/) !== null) {
								            this.value = v + '/';
								        }"
								maxlength="10"  >
						</div>
						<div class="col-sm-1">
							<label for="lb_contact" class="control-label-left"
								style="margin-top: 8px;"><font id="validate_input5" style="color: red;">*</font>ถึง</label>
						</div>
						<div class="col-xs-3">
							<input type="text" class="form-control" id="appTo_date"
								onblur="checkappTo ();" placeholder="dd/mm/yyyy"
								onkeyup="
								        var v = this.value;
								        if (v.match(/^\d{2}$/) !== null) {
								            this.value = v + '/';
								        } else if (v.match(/^\d{2}\/\d{2}$/) !== null) {
								            this.value = v + '/';
								        }"
								maxlength="10">
						</div>
						<div class="col-xs-1">
							<button type="button" class="btn btn-primary fa fa-history" id=""
								data-toggle="modal" data-target="#show_history"></button>
						</div>
					</div>
					<!--  -->
					<div class="col-sm-5">
						<div class="col-sm-4">
							<label for="lb_contact" class="control-label-left"
								style="margin-top: 8px;"><font id="validate_input6" style="color: red;">*</font>อายุที่ขออนุมัติ</label>
						</div>
						<div class="col-xs-3">
							<input type="text" class="form-control" id="age_Start"
								onkeypress='validate(event)' maxlength="3"onkeyup="age_Start();">
						</div>
						<div class="col-sm-1">
							<label for="lb_contact" class="control-label-left"
								style="margin-top: 8px;"><font id="validate_input7" style="color: red;">*</font>ถึง</label>
						</div>
						<div class="col-xs-3">
							<input type="text" class="form-control" id="age_To"
								onkeypress='validate(event)' maxlength="3" onkeyup="age_To();">
						</div>
						<div class="col-sm-1">
							<label for="lb_contact" class="control-label-left"
								style="margin-top: 8px;">ปี</label>
						</div>
					</div>
				</div>
				<div class="text-center" style="padding: 10px 0"></div>
				<div class="row">
					<div class="col-sm-1"></div>
					<div class="col-sm-3">
						<table class="table panel panel-primary table borderless"
							align="right">
							<tbody>
								<tr class="bg-primary">
									<th scope="col"><font id="validate_input8" style="color: red;">*</font>เลือก</th>
									<th scope="col">Mode</th>
								</tr>
								<tr>
									<td><input id="mode0" type="checkbox"></td>
									<td><label> 0 ราย 1 เดือน</label></td>
								</tr>
								<tr>
									<td><input id="mode1" type="checkbox"></td>
									<td><label> 1 ราย 12 เดือน</label></td>
								</tr>
								<tr>
									<td><input id="mode2" type="checkbox"></td>
									<td><label> 2 ราย 6 เดือน</label></td>
								</tr>
								<tr>
									<td><input id="mode4" type="checkbox"></td>
									<td><label> 4 ราย 3 เดือน</label></td>
								</tr>
								<tr>
									<td><input id="mode8" type="checkbox"></td>
									<td><label> 8 ราย 90 วัน</label></td>
								</tr>
								<tr>
									<td><input id="mode9" type="checkbox"></td>
									<td><label> 9 ชำระครั้งเดียว</label></td>
								</tr>
							</tbody>
						</table>
						<table class="table panel panel-primary table borderless"
							align="right">
							<tbody>
								<tr class="bg-primary">
									<th scope="col"><font id="validate_input9" style="color: red;">*</font>Filing Channel</th>
								</tr>
								<tr>
									<td><input type="checkbox" id="ch_Tied_Agency" onclick="filing_Channel();"> 
									<label>&nbsp;&nbsp;Tied Agency or Broker</label></td>
								</tr>
								<tr>
									<td><input type="checkbox" id="ch_Bancassurance" onclick="filing_Channel();">
										<label>&nbsp;&nbsp;Bancassurance</label></td>
								</tr>
								<tr>
									<td><input type="checkbox" id="ch_Telemarketing" onclick="filing_Channel();">
										<label>&nbsp;&nbsp;Telemarketing</label></td>
								</tr>
								<tr>
									<td><input type="checkbox" id="ch_Electronic" onclick="filing_Channel();"> <label>&nbsp;&nbsp;Electronic</label>
									</td>
								</tr>
								<tr>
									<td><input type="checkbox" id="ch_registrar" onclick="filing_Channel();"> <label>&nbsp;&nbsp;ตามคำสั่งนายทะเบียน</label>
									</td>
								</tr>
							</tbody>
						</table>
						<table class="table panel panel-primary table borderless"
							align="right">
							<tbody>
								<tr class="bg-primary">
									<th scope="col"><font id="validate_input10" style="color: red;">*</font>Sale Channel</th>
								</tr>
								<tr>
									<td><input type="checkbox" id="ch_Agent" onclick="sale_Channel();"> <label>&nbsp;&nbsp;Agent</label>
									</td>
								</tr>
								<tr>
									<td><input type="checkbox" id="ch_Commercial_Bank" onclick="sale_Channel();">
										<label>&nbsp;&nbsp;Commercial Bank</label></td>
								</tr>
								<tr>
									<td><input type="checkbox" id="ch_Public_Bank" onclick="sale_Channel();"> <label>&nbsp;&nbsp;Public
											Bank</label></td>
								</tr>
								<tr>
									<td><input type="checkbox" id="ch_Direct" onclick="sale_Channel();"> <label>&nbsp;&nbsp;Direct</label>
									</td>
								</tr>
								<tr>
									<td><input type="checkbox" id="ch_Group" onclick="sale_Channel;"> <label>&nbsp;&nbsp;Group
											E.B.</label></td>
								</tr>
								<tr>
									<td><input type="checkbox" id="ch_Leasing" onclick="sale_Channel();"> <label>&nbsp;&nbsp;Leasing</label>
									</td>
								</tr>
								<tr>
									<td><input type="checkbox" id="ch_Consumer" onclick="sale_Channel();"> <label>&nbsp;&nbsp;Consumer
											Finance</label></td>
								</tr>
								<tr>
									<td><input type="checkbox" id="ch_Electronic2" onclick="sale_Channel();"> <label>&nbsp;&nbsp;Electronic</label></td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="col-sm-7 panel panel-primary border-custom">
						<table class="table borderless">
							<tr>
								<td><label class="col-sm-1"><font id="validate_input11" style="color: red;">*</font>เพศ</label> <label
									class="col-sm-1">ชาย</label>
									<div class="col-sm-1">
										<div class="input-group">
											<input type="checkbox" id="ch_male">
										</div>
									</div> <label class="col-sm-1">หญิง</label>
									<div class="col-sm-1">
										<div class="input-group">
											<input type="checkbox" id="ch_female">
										</div>
									</div></td>
							</tr>
							<tr>
								<td><label class="col-sm-5"><font id="validate_input12" style="color: red;">*</font>เบี้ยประกัน</label>
									<div class="col-sm-7">
										<div class="input-group col-sm-7">
											<select class="form-control " id="sl_insurance_premium" onclick="sl_insurance_premium();">
												<option value="">เลือก</option>
												<option value="1">ต่อคน</option>
												<option value="2">ต่อครบครัว</option>
												<option value="3">ไม่เก็บเบี้ยประกัน</option>
												<option value="4">None</option>
											</select>
										</div>
									</div></td>
							</tr>
							<tr>
								<td><label class="col-sm-5"><font id="validate_input13" style="color: red;">*</font>ประเภทความคุ้มครอง</label>
									<div class="col-sm-7">
										<div class="input-group col-sm-7">
											<select class="form-control" id="sl_Protection_type" onclick="sl_Protection_type();">
												<option value="">เลือก</option>
												<option value="1">หน่วย</option>
												<option value="2">จำนวน</option>
												<option value="3">เปอร์เซนต์</option>
												<option value="4">None</option>
											</select>
										</div>
									</div></td>
							</tr>
							<tr>
								<td><label class="col-sm-5"><font id="validate_input14" style="color: red;">*</font>ประเภทสัญญา</label>
									<div class="col-sm-7">
										<div class="input-group col-sm-7">
											<select class="form-control" id="sl_promise_type" onclick="sl_promise_type();">
												<option value="">เลือก</option>
												<option value="1">สัญญาระยะสั้น</option>
												<option value="2">สัญญาระยะยาว</option>
												<option value="3">None</option>
											</select>
										</div>
									</div></td>
							</tr>
							<tr>
								<td>
									<div class="text-center" style="padding: 10px 0"></div>
									<div class="col-sm-6">
										<label><font id="validate_input15" style="color: red;">*</font>ระยะประกันของสัญญาประกันชีวิต</label>
									</div>

								</td>
							</tr>
							<tr>
								<td>
									<div class="col-sm-1">
										<div class="input-group">
											<input type="radio" id="rd_anniversary"
												name="rd_Term_of_insurance">
										</div>
									</div>
									<div>
										<label class="col-sm-7">คุ้มครองถึงอายุ</label>
									</div>
									<div class="col-sm-2">
										<div class="input-group">
											<input type="text" class="form-control" id="text_anniversary" 
											onkeyup="text_anniversary();" disabled="disabled" onkeypress="validate(event)"
											maxlength="3">
										</div>
									</div>
									<div class="col-sm-2">
										<select class="form-control width82px" id="dmy_1" disabled="disabled">
												<option value="1">วัน</option>
												<option value="2">เดือน</option>
												<option value="3">ปี</option>
											</select>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<div class="col-sm-1">
										<div class="input-group">
											<input type="radio" id="rd_Time_length"
												name="rd_Term_of_insurance">
										</div>
									</div>
									<div>
										<label class="col-sm-7">ระยะเวลาคุ้มครอง</label>
									</div>
									<div class="col-sm-2">
										<div class="input-group">
											<input type="text" class="form-control" id="text_Time_length"
											onkeyup="text_Time_length();"	disabled="disabled" onkeypress="validate(event)"
											maxlength="3">
										</div>
									</div>
									<div class="col-sm-2">
										<select class="form-control width82px" id="dmy_2" disabled="disabled">
												<option value="1">วัน</option>
												<option value="2">เดือน</option>
												<option value="3">ปี</option>
											</select>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<div class="col-sm-7">
										<label><br><font id="validate_input16" style="color: red;">*</font> ระยะชำระเบี้ยของสัญญาประกันชีวิต</label>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<div class="col-sm-1">
										<div class="input-group">
											<input type="radio" id="rd_insurance_premium"
												name="rd_Time_insurance_premium">
										</div>
									</div>
									<div>
										<label class="col-sm-7">ชำระถึงอายุ</label>
									</div>
									<div class="col-sm-2">
										<div class="input-group">
											<input type="text" class="form-control"
												id="text_insurance_premium" disabled="disabled" onkeyup="text_insurance_premium();"
												disabled="disabled" onkeypress="validate(event)"
											maxlength="3">
										</div>
									</div>
									<div class="col-sm-2">
										<select class="form-control width82px" id="dmy_3" disabled="disabled">
												<option value="1">วัน</option>
												<option value="2">เดือน</option>
												<option value="3">ปี</option>
										</select>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<div class="col-sm-1">
										<div class="input-group">
											<input type="radio" id="rd_Time_insurance_premium"
												name="rd_Time_insurance_premium">
										</div>
									</div>
									<div>
										<label class="col-sm-7">ระยะชำระเบี้ย</label>
									</div>
									<div class="col-sm-2">
										<div class="input-group">
											<input type="text" class="form-control"
												id="text_Time_insurance_premium" disabled="disabled" 
												onkeyup="text_Time_insurance_premium();" 
												disabled="disabled" onkeypress="validate(event)"
												maxlength="3">
										</div>
									</div>
									<div class="col-sm-2">
										<select class="form-control width82px" id="dmy_4" disabled="disabled">
												<option value="1">วัน</option>
												<option value="2">เดือน</option>
												<option value="3">ปี</option>
										</select>
									</div>
								</td>
							</tr>
							<tr>
								<td><label class="col-sm-7"><font id="validate_input17" style="color: red;">*</font>อัตราดอกเบี้ยที่ใช้ในการคำนวณเบี้ยประกัน</label>
									<div class="col-sm-1"></div>
									<div class="col-sm-3">
										<div class="input-group">
											<input type="text" class="auto text-right form-control"
												id="text_Calculate_premiums" value="0.00" data-v-min="0.00"
												data-v-max="999.99" onkeyup="text_Calculate_premiums();">
										</div>
									</div> <label class="col-sm-1">%</label></td>
							</tr>

							<tr>
								<td><label class="col-sm-3">ลดหย่อนภาษี</label>
									<div class="col-sm-3"></div>
									<div class="col-sm-6">
										<div class="input-group">
											<select class="form-control" id="sl_tax_Break">
												<option value="1">ลดหย่อนภาษีได้</option>
												<option value="2">ลดหย่อนภาษีได้บางอายุ</option>
												<option value="3">ลดหย่อนภาษีไม่ได้</option>
											</select>
										</div>
									</div></td>
							</tr>
							<tr>
								<td>
									<div class="input-group col-xs-11	">
										<input type="text" class="form-control" id="inputFile_1"
											placeholder="(LAYOUT)_{BASECODE}.txt" readonly> <label
											class="input-group-btn"> <span id ="span_uploadFile_1"
											class="btn btn-primary"><font id="validate_input18"
											style="color: red;">*</font>เลือกไฟล์<input
											id="select_file_1" type="file" style="display: none;">
										</span>
										</label>
									</div>
								</td>
							</tr>
							<tr>
								<td><label class="col-sm-2">หมายเหตุ</label>
									<div class="col-sm-9">
										<div class="input-group">
											<textarea class="height180px" id="remark" cols="50"></textarea>
										</div>
									</div></td>
							</tr>
							<tr>
								<td>
									<div class="col-md-6 col-md-offset-9 text-right"
										style="float: right;">
										<button type="button" class="btn btn-primary"
											data-dismiss="modal" id="bt_ui005_1_Confirm"
											onclick="bt_Menu1_Confirm();">บันทึก</button>
										<button type="button" class="btn btn-primary"
											onclick="bt_Menu1_Canceled ();">ยกเลิก</button>
									</div> 
								</td>
							</tr>
						</table>
					</div>
					<div class="col-sm-1"></div>
				</div>
				<!-- MODAL show_history-->
				<div id="show_history" class="modal fade" role="dialog">
					<div class="modal-dialog modal-lg">
						<div class="panel panel-primary">
							<div class="panel-heading text-left">
								<button type="button" class="close" data-dismiss="modal">&times;</button>
								<p class="margin0">ประวัติการเปลี่ยนแปลง : วันที่
									คปภ.อนุมัติ</p>
							</div>
							<div class="modal-body">
								<div style="overflow-y: auto;">
									<table class="table" id="">
										<thead>
											<tr>
												<th class="col-sm-1">ครั้งที่</th>
												<th class="col-sm-1">วันที่เปลี่ยนแปลง</th>
												<th class="col-sm-2">ผู้เปลี่ยนแปลง</th>
												<th class="col-sm-2">วันที่ คปภ.อนุมัติ</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>1</td>
												<td>05/03/2541</td>
												<td>User_01</td>
												<td>05/03/2541 - 05/03/2542</td>
											</tr>
											<tr>
												<td>2</td>
												<td>05/03/2542</td>
												<td>User_02</td>
												<td>05/03/2542 - 05/03/2543</td>
											</tr>
											<tr>
												<td>3</td>
												<td>05/03/2543</td>
												<td>User_01</td>
												<td>05/03/2543 - 05/03/2544</td>
											</tr>
											<tr>
												<td>4</td>
												<td>05/03/2544</td>
												<td>User_01</td>
												<td>05/03/2544 - 05/03/2545</td>
											</tr>
											<tr>
												<td>5</td>
												<td>05/03/2545</td>
												<td>User_03</td>
												<td>05/03/2545 - 05/03/2550</td>
											</tr>
										</tbody>
									</table>
								</div>

							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-primary"
									data-dismiss="modal">ปิด</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
</body>
</html>