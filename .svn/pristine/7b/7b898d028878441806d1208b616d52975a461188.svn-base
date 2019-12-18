<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title></title>
</head>
<body>
	<form class="form-horizontal">
	<div class="row box-body">
				<div class="panel panel-primary">
					<div class="panel-heading text-left">
						<p class="margin0 text-center"><B>การคำนวณเบี้ยประกัน</B></p>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
						<div class="row">
						<div class="col-sm-1"></div>
							<div class="col-sm-10 panel panel-primary" style="background: #337AB7" >
								<table class="table table-sm" >
									<tbody>
										<tr class="">
				     						 <th scope="col"><input type="checkbox" id="ch_standard_premium"></th>
				     						 <th scope="col"></th>
				     						 <th scope="col"></th>
				     						 <th scope="col"></th>
				     						 <th scope="col"><label style="color: white;">เบี้ยมาตรฐาน</label></th>
										</tr>
									</tbody>
								</table>	
							</div>
						</div>
							<div class="row">
								<div class="col-sm-1 col-md-1"></div>
									<div class="col-sm-5">
										<table class="">
											<tr>
												 <td ><input type="radio" id="rd_cal_insurance" name="rd_Calculate" disabled="disabled"></td>
					     						 <td ><label>คำนวณเบี้ยจากทุนประกัน</label></td>										
											</tr>
										</table>
									</div>
									<div class="col-sm-5">
										<table class="">
											<tr>
												 <td ><input type="radio" id="rd_cal_capital" name="rd_Calculate" disabled="disabled"></td>
					     						 <td ><label>คำนวณทุนจากเบี้ยประกัน</label></td>										
											</tr>
										</table>
									</div>
								</div>	
							<div class="row">
								<div class="col-sm-1"></div>
									<div class="col-sm-5 panel panel-primary">
										<table class="table borderless">
											<tr>
												<td ><label>ตารางเบี้ยประกัน</label></td>
						     					<td >
						     						 <select class="form-control" id="sl_menu3_insurance_premium" disabled="disabled">
						     						  	<option value="0">เลือก</option>
						     						 	<option value ="1">เบี้ยประกันต่อทุน 10,000บาท</option>
						     						 	<option value ="2">เบี้ยประกันต่อทุน 100,000บาท</option>
						     						 </select>
						     					</td>										
											</tr>
											<tr>
												<td colspan="2" ><label>นำเข้า PM_Rate</label></td>
											</tr>
											<tr>
												<td colspan="2">
													<div class="input-group col-xs-10">
															<input type="text" id="text_menu3_inputfile_1" class="form-control" placeholder="(LAYOUT)_{BASECODE}.txt" readonly>
											                <label class="input-group-btn">
											                    <span class="btn btn-primary">
											                        เลือกไฟล์<input type="file" style="display: none;" id ="menu3_inputfile_1" disabled="disabled">
											                    </span>
											                </label>
											            </div>
												</td>
											</tr>
											<tr>
												<td colspan="2">
													<input type="checkbox" id="ch_calInsurance" disabled="disabled" > 
													<label>สามารถคำนวณทุนจากเบี้ยประกัน</label>
												</td>
											</tr>
											<tr>
												<td colspan="2">
													<input type="checkbox" id="ch_importInsurance" disabled="disabled">
													<label>มีส่วนลดเบี้ยตามทุนประกัน</label>
												</td>
											</tr>
											<tr>
												<td colspan="2" style="padding: 10px 0"><label>&nbsp;&nbsp;นำเข้า ตารางส่วนลดตามทุนประกัน</label></td>
											</tr>
											<tr>
												<td colspan="2">
													<div class="input-group col-xs-10">
															<input type="text" class="form-control" id="text_menu3_inputfile_2" placeholder="(LAYOUT)_{BASECODE}.txt" readonly>
											                <label class="input-group-btn">
											                 <span class="btn btn-primary">
											                        เลือกไฟล์<input type="file" style="display: none;" id="menu3_inputfile_2" disabled="disabled">
											                    </span>
											                </label>
											            </div>
												</td>
											</tr>
											<tr>
												<td colspan="2"  style="padding: 15px 0">
												<div class="row">
													<div class="col-sm-7">
														<label>&nbsp;&nbsp;ค่าใช้จ่ายคงที่ของกลุ่มบำนาญ</label>
													</div>
													<div class="col-sm-3">
														<input class="form-control" type="text" size="8" id="expenses_pension" disabled="disabled"  onkeypress='validate(event)' >
													</div>
													<div class="col-sm-1">
														<label>บาท</label>
													</div>
												</div>
												</td>
											</tr>
										</table>
									</div>
								 
								
								<div class="col-sm-5 panel panel-primary">
										<table class="table borderless">
											<tr>
											<td ><label>ตารางทุนประกัน</label></td>
					     					<td >
					     						<select class="form-control" id="sl_Capital_Insurance" disabled="disabled">
					     						 		<option value="0">เลือก</option>
					     						 	<option value="1">กลุ่มรายเดือน Industrial</option>
					     						 	<option value="2">กลุ่มรายงวด Tax minus</option>
					     						 </select>
					     					</td>										
										</tr>
										<tr>
											<td colspan="2"><label>นำเข้า SA_Rate</label></td>
										</tr>
										<tr>
											<td colspan="2">
												<div class="input-group col-xs-10">
															<input type="text" class="form-control" id="text_menu3_inputfile_3" placeholder="(LAYOUT)_{BASECODE}.txt" readonly>
											                <label class="input-group-btn">
											                    <span class="btn btn-primary">
											                        เลือกไฟล์<input type="file" style="display: none;"id="menu3_inputfile_3" disabled="disabled">
											                    </span>
											                </label>
											            </div>
											</td>
										</tr>
											<tr>
												<td colspan="2" style="padding: 22px 0">
												</td>
											</tr>
											<tr>
												<td colspan="2" style="padding: 22px 0">
												</td>
											</tr>
											<tr>
												<td colspan="2" style="padding: 20px 0"></td>
											</tr>
											<tr>
												<td colspan="2" style="padding: 5px 0"></td>
											</tr>
											<tr>
												<td colspan="2" style="padding: 53px 0">
												<div class="row">
													<div class="col-sm-7"></div>
													<div class="col-sm-3"></div>
													<div class="col-sm-1"></div>
												</div>
												</td>
											</tr>
										</table>
									</div>
								
								
								
							</div>	
							<div class="row">
								<div class="col-sm-1"></div>
								<div class="col-sm-10  panel panel-primary" style="background: #337AB7">
								<table class="table table-sm" >
									<tbody>
										<tr>
				     						 <th scope="col"><input type="checkbox" id="ch_insurance_premium_Extra"></th>
				     						 <th scope="col"></th>
				     						 <th scope="col"></th>
				     						 <th scope="col"></th>
				     						 <th scope="col"><label style="color: white;">เบี้ยเพิ่มพิเศษ</label></th>
										</tr>
									</tbody>
								</table>	
								</div>
						</div>
							<div class="row">
									<div class="col-sm-1"></div>
									<div class="col-sm-10 panel panel-primary" >
											<table class="table borderless">
												<tr class="col-sm-9">
													<td ><label>ตารางเบี้ยประกัน</label></td>
							     					<td >
							     						 <select class="form-control" id="sl_insurance_premium_Extra" disabled="disabled">
							     						 	<option value="0">เลือก</option>
							     						 	<option value="1">เบี้ยเพิ่มพิเศษต่อทุน 10,000บาท</option>
							     						 	<option value="1">เบี้ยเพิ่มพิเศษต่อทุน 100,000บาท</option>
							     						 </select>
							     					</td>										
												</tr>
												<tr class="col-sm-9">
													<td ><label>MIN_EM</label></td>
							     					<td >
							     						 <input type="text" class="auto text-right form-control"   data-v-min="0.00" data-v-max="999.99" maxlength="5" id="min_EM" disabled="disabled">
							     					</td>
							     					<td><label>%</label>
							     					</td>
							     					<td ><label>MAX_EM</label></td>
							     					<td >
							     						 <input type="text" class="auto text-right form-control"   data-v-min="0.00" data-v-max="999.99" maxlength="5"id="max_EM" disabled="disabled">
							     					</td>
							     					<td><label>%</label>
							     					</td>										
												</tr>
												<tr class="col-sm-9">
													<td ><label>นำเข้า Extra_Rate</label></td>
												</tr>
												<tr class="">
													<td >
														<div class="input-group col-xs-5">
															<input type="text" class="form-control" id="text_menu3_inputfile_4" placeholder="(LAYOUT)_{BASECODE}.txt" readonly>
											                <label class="input-group-btn">
											                    <span class="btn btn-primary">
											                        เลือกไฟล์<input type="file" style="display: none;" id="menu3_inputfile_4" disabled="disabled">
											                    </span>
											                </label>
											            </div>
												   </td>
												</tr>
											</table>
								</div>
						</div>
					<!-- *** -->
							<div class="row">
								<div class="col-sm-1"></div>
								<div class="col-sm-10 panel panel-primary" style="background: #337AB7">
								<table class="table table-sm" >
									<tbody>
										<tr>
				     						 <th scope="col"><input type="checkbox" id="ch_Reduced_capital"></th>
				     						 <th scope="col"></th>
				     						 <th scope="col"></th>
				     						 <th scope="col"></th>
				     						 <th scope="col"><label style="color: white;">ทุนคุ้มครองที่ลดลง</label></th>
										</tr>
									</tbody>
								</table>	
								</div>
							</div>
							<div class="row">
									<div class="col-sm-1"></div>
									<div class="col-sm-10 panel panel-primary" >
											<table class="table borderless">
												<tr class="col-sm-9">
													<td ><label>ตารางทุนประกัน</label></td>
							     					<td >
							     						 <select class="form-control" id="sl_Reduced_capital" disabled="disabled">
							     						 	<option value="0">เลือก</option>
							     						 	<option value="1">ทุนคุ้มครองที่ลดลงต่อทุน 10,000บาท</option>
							     						 	<option value="1">ทุนคุ้มครองที่ลดลงต่อทุน 1,000,000บาท</option>
							     						 </select>
							     					</td>										
												</tr>
												<tr class="col-sm-9">
													<td ><label>นำเข้า SA_Ord_Rate</label></td>
												</tr>
												<tr >
													<td >
													<div class="input-group col-xs-5">
															<input type="text" class="form-control" id="text_menu3_inputfile_5" placeholder="(LAYOUT)_{BASECODE}.txt" readonly>
											                <label class="input-group-btn">
											                    <span class="btn btn-primary">
											                        เลือกไฟล์<input type="file" style="display: none;" id="menu3_inputfile_5" disabled="disabled">
											                    </span>
											                </label>
											            </div>
													</td>
												</tr>
											</table>
								</div>
						</div>
						<div class="row"> 
							<div class="col-md-8 col-md-offset-7 text-right">
								<div class="col-md-7">
									<div class="col-md-5">
										<button type="button" class="btn btn-primary width100" onclick="bt_Menu3_Confirm();">บันทึก</button>
									</div>
									<div class="col-md-5">
										<button class="btn btn-primary width100" onclick="bt_Menu3_Canceled();">ยกเลิก</button>
									</div>
								</div>
							</div>
						</div>
						<div class="text-center" style="padding: 10px 0"></div>
					</div>
				
					<!-- MODAL modal_success-->
					<%--  <%@include file="modal_success.jsp" %>
					<%@include file="modal_warning.jsp"%> --%>
				</div>
	</form>
</body>
</html>