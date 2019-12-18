<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>การใช้สิทธิ์ตามกรมธรรม์</title>
</head>
<body>
	<form class="form-horizontal">
	<div class="row box-body" id="div_main_menuCL_2">
				<div class="panel panel-primary">
					<div class="panel-heading text-left">
						<p class="margin0 text-center"><B>การใช้สิทธิ์ตามกรมธรรม์</B></p>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
						<div class="form-group">
							<div class="col-sm-1"></div>
								<div class="col-sm-5">
										<div class="form-group">
											<div class="text-center" style="padding: 5px 0"></div>
											<div class="col-sm-1"></div>
											<div class="col-sm-9">
													<input type="checkbox" id="ch_expropriate_insurance" value="TRUE"><label for="ch_expropriate_insurance">&nbsp;เวนคืนกรมธรรม์ (Surrender)</label>
											</div>
										</div>
								</div>
						</div>
						<div class="form-group" >
							<div class="col-sm-1"></div>
								<div class="col-sm-5">
									<div class="panel panel-primary" >
										<div class="form-group">
											<div class="text-center" style="padding: 5px 0"></div>
											<div class="col-sm-1"></div>
											<div class="col-sm-9" >
												<input type="checkbox" id="ch_ETI_cl" disabled="disabled"><label>&nbsp;ปิดบัญชีขยายเวลา (ETI)</label>
											</div>
										</div>
										<div class="form-group">
											<div class="col-sm-1"></div>
											<div class="col-xs-6">
												<select disabled="disabled" class="form-control" id="sel_ETI_cl">
													<!-- <option>Endowment</option>
													<option>Whole life</option> -->
												</select> 
											</div>
										</div>
										<div class="form-group">
											<div class="col-sm-1"></div>
											<div class="col-sm-9">
												<input type="checkbox" id="ch_AutoETI_cl" disabled="disabled"><label>&nbsp;ปิดบัญชีขยายเวลาอัตโนมัติ (Auto ETI)</label>
											</div>
										</div>
										<div class="form-group">
											<div class="col-sm-1"></div>
												<div class="col-xs-6">
												<select disabled="disabled" class="form-control" id="sel_AutoETI_cl">
													<!-- <option>Endowment</option>
													<option>Whole life</option> -->
												</select> 
											</div>
										</div>
										<div class="form-group">
											<div class="col-sm-1"></div>
											<div class="col-sm-9">
												<input type="checkbox" id="ch_PhaseETI_cl" disabled="disabled"><label>&nbsp;ETI คุ้มครองถึง</label>
											</div>
										</div>
										<div class="form-group">
											<div class="col-sm-1"></div>
											<div class="col-xs-6">
												<select class="form-control" id="sel_PhaseETI_cl" disabled="disabled">
													<!-- <option value="1">สิ้นสุดระยะประกันที่</option>
													<option value="2">สิ้นสุดที่อายุ</option> -->
												</select> 
											</div>
											<div class="col-xs-2 padding0">
												<input type="text" class="form-control" id="eti_year_cl" disabled="disabled" onkeypress='validate(event)' maxlength="3">
											</div>
											<div class="col-xs-1 padding0">
												<select class="form-control width82px" id="dmy_2_1_cl" disabled="disabled">
												<!-- <option value="1">วัน</option>
												<option value="2">เดือน</option>
												<option value="3">ปี</option> -->
											</select>
											</div>
										</div>
									</div>
								</div>
								<div class="col-sm-5">
									<div class="panel panel-primary">
										<div class="form-group">
										<div class="text-center" style="padding: 5px 0"></div>
										<div class="col-sm-1"></div>
											<div class="col-sm-9">
												<input type="checkbox" id="ch_RPU_cl" disabled="disabled"><label>&nbsp;ปิดบัญชีมูลค่าเงินสำเร็จ (RPU)</label>
											</div>
										</div>
										<div class="form-group">
											<div class="col-sm-1"></div>
											<div class="col-xs-6">
												 <select disabled="disabled" class="form-control" id="sel_RPU_cl">
													<!-- <option>Endowment</option>
													<option>Whole life</option>
													<option>Interpolate</option>
													<option>ตามทุนคุ้มครอง</option> -->
												</select>
											</div>
										</div>
										<div class="form-group">
											<div class="col-sm-1"></div>
											<div class="col-sm-11">
												<input type="checkbox" id="ch_AutoRPU_cl" disabled="disabled"><label>&nbsp;ปิดบัญชีมูลค่าเงินสำเร็จอัตโนมัติ (Auto RPU)</label>
											</div>
										</div>
										<div class="form-group">
											<div class="col-sm-1"></div>
											<div class="col-xs-6">
												<select disabled="disabled" class="form-control" id="sel_AutoRPU_cl">
													<!-- <option>Endowment</option>
													<option>Whole life</option>
													<option>Interpolate</option>
													<option>ตามทุนคุ้มครอง</option> -->
												</select> 
											</div>
										</div>
										<div class="form-group">
											<div class="col-sm-1"></div>
											<div class="col-sm-9">
												<input type="checkbox" disabled="disabled" id="ch_PhaseRPU_cl"><label>&nbsp;RPU คุ้มครองถึง</label>
											</div>
										</div>
										<div class="form-group">
											<div class="col-sm-1"></div>
											<div class="col-xs-6">
												<select class="form-control" id="sel_PhaseRPU_cl" disabled="disabled">
													<!-- <option value="1">สิ้นสุดระยะประกันที่</option>
													<option value="2">สิ้นสุดที่อายุ</option> -->
												</select> 
											</div>
											<div class="col-xs-2 padding0">
												<input type="text" class="form-control" id="rpu_year_cl" disabled="disabled" onkeypress='validate(event)' maxlength="3">
											</div>
											<div class="col-xs-1 padding0">
												<select class="form-control width82px" id="dmy_2_2_cl" disabled="disabled">
												<!-- <option value="1">วัน</option>
												<option value="2">เดือน</option>
												<option value="3">ปี</option> -->
											</select>
											</div>
										</div>
									</div>
								</div>
						</div>
						<div class="form-group">
							<div class="col-sm-1"></div>
								<div class="col-sm-5">
										<div class="form-group">
											<div class="col-sm-1"></div>
											<div class="col-sm-5 paddingleft-15">
													<input type="checkbox" disabled="disabled">
													<label>&nbsp;Policy Loan Interest</label>
											</div>
											<div class="col-sm-2 padding0">
												<input disabled="disabled" type="text" class="auto text-right form-control" value="0.00"  data-v-min="0.00" data-v-max="999.99" maxlength="5">
											</div>
											<div class="col-sm-1">	
												<label>%</label>
											</div>
										</div>
								</div>
								<div class="col-sm-5">
										<div class="form-group">
											<div class="col-sm-1"></div>
											<div class="col-sm-5 paddingleft-15">
													<input type="checkbox" id="ch_APL_Auto_cl" disabled="disabled">
													<label>&nbsp;APL Interest</label>
											</div>
											<div class="col-sm-2 padding0">
												<input id ="apl_Auto_cl"  type="text" class="auto text-right form-control"  value="0.00"  data-v-min="0.00" data-v-max="999.99" maxlength="5" disabled="disabled">
											</div>
											<div class="col-sm-1">	
												<label>%</label>
											</div>
										</div>
								</div>
						</div>
						 <div class="col-md-8 col-md-offset-7 text-right ">
							<div class="col-md-7">
								<div class="col-md-6">
									<button type="button" class="btn btn-primary width100" id="bt_ui005_2_Confirm_cl" onclick="bt_Menu2_Confirm_cl();">บันทึก</button>
								</div>
								<div class="col-md-6">
									<button type="button" class="btn btn-primary width100" data-toggle="modal" data-target="#modal_Cancel_Menu3">ยกเลิก</button>
								</div>
							</div>
						</div> -
						
				</div>
					<!-- MODAL modal_success-->
					<%--  <%@include file="modal_success.jsp" %>
					<%@include file="modal_warning.jsp"%> --%>
		</div>
	</form>
	
	<!-- ปุ่ม ยกเลิก -->
	<div id="modal_Cancel_Menu3" class="modal fade bd-example-modal-sm"
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
					<button type="button" class="btn btn-primary" onclick="cancelPage('base_plan.jsp');">ยืนยัน</button>
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
	
</body>
</html>