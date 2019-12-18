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
		<div class="row box-body" id="div_main_menuOL_2">
			<div class="panel panel-primary">
				<div class="panel-heading text-left">
					<p class="margin0 text-center">
						<B>การใช้สิทธิ์ตามกรมธรรม์</B>
					</p>
				</div>
				<div class="text-center" style="padding: 10px 0"></div>
				<div class="form-group">
					<div class="col-sm-1"></div>
					<div class="col-sm-5">
						<div class="form-group">
							<div class="col-sm-1"></div>
							<div class="col-sm-5 paddingleft-15">
								<input type="checkbox" id="chk_Policy_Loan_ol"> <label
									for="chk_Policy_Loan_ol">&nbsp;Policy Loan Interest</label>
							</div>
							<div class="col-sm-2 padding0">
								<input type="text" class="auto text-right form-control"
									id="txb_Policy_Loan_ol" value="0.00" data-v-min="0.00"
									data-v-max="999.99" maxlength="5" disabled>
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
								<input type="checkbox" id="ch_APL_Auto_ol"> <label
									for="ch_APL_Auto_ol">&nbsp;APL Interest</label>
							</div>
							<div class="col-sm-2 padding0">
								<input id="apl_Auto_ol" type="text"
									class="auto text-right form-control" value="0.00"
									data-v-min="0.00" data-v-max="999.99" maxlength="5" disabled>
							</div>
							<div class="col-sm-1">
								<label>%</label>
							</div>
						</div>
					</div>
				</div>
				<div class="form-group">
					<div class="col-sm-1"></div>
					<div class="col-sm-5">
						<div class="form-group">
							<!-- <div class="text-center" style="padding: 5px 0"></div> -->
							<div class="col-sm-1"></div>
							<div class="col-sm-9">
								<input type="checkbox" id="ch_expropriate_insurance_OL"
									value="TRUE"><label for="ch_expropriate_insurance_OL">&nbsp;เวนคืนกรมธรรม์
									(Surrender)</label> <select class="form-control width60"
									id="sel_Surrender_ol" disabled>
								</select>
							</div>
						</div>
					</div>
					<div class="col-sm-5">
						<div class="form-group">
							<div class="col-sm-1"></div>
							<div class="col-sm-5 paddingleft-15">
								<input type="checkbox" id="ch_CVClaim_ol" disabled> <label
									for="ch_CVClaim_ol">&nbsp;CV หัก Claim</label>
							</div>
						</div>
					</div>
				</div>
				<div class="form-group">
					<div class="col-sm-1"></div>
					<div class="col-sm-5">
						<div class="panel panel-primary">
							<div class="form-group">
								<div class="text-center" style="padding: 5px 0"></div>
								<div class="col-sm-1"></div>
								<div class="col-sm-9">
									<input type="checkbox" id="ch_ETI_ol"><label
										for="ch_ETI_ol">&nbsp;ปิดบัญชีขยายเวลา (ETI)</label>
								</div>
							</div>
							<div class="form-group">
								<div class="col-sm-2"></div>
								<div class="col-xs-6">
									<select class="form-control" id="sel_ETI_ol" disabled>
									</select>

								</div>
							</div>
							<div class="form-group">
								<div class="col-sm-1"></div>
								<div class="col-sm-9">
									<input type="checkbox" id="ch_AutoETI_ol" disabled><label
										for="ch_AutoETI_ol">&nbsp;ปิดบัญชีขยายเวลาอัตโนมัติ
										(Auto ETI)</label>
								</div>
							</div>
							<div class="form-group">
								<div class="col-sm-2"></div>
								<div class="col-xs-6">
									<select class="form-control" id="sel_AutoETI_ol" disabled>
									</select>
								</div>
							</div>
							<div class="form-group">
								<div class="col-sm-1"></div>
								<div class="col-sm-9">
									<input type="checkbox" id="ch_PhaseETI_ol" disabled><label
										for="ch_PhaseETI_ol">&nbsp;ETI คุ้มครองถึง</label>
								</div>
							</div>
							<div class="form-group">
								<div class="col-sm-2"></div>
								<div class="col-xs-5">
									<select class="form-control" id="sel_PhaseETI_ol" disabled>
									</select>
								</div>
								<div class="col-xs-2 padding0">
									<input type="text" class="auto form-control text-center" id="eti_year_ol" 
									onkeypress="validate(event)" data-v-min="0" data-v-max="99" maxlength="2" disabled>
								</div>
								<div class="col-xs-1 padding0">
									<select class="form-control width82px" id="dmy_2_1_ol" disabled></select>
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
									<input type="checkbox" id="ch_RPU_ol"><label
										for="ch_RPU_ol">&nbsp;ปิดบัญชีมูลค่าเงินสำเร็จ (RPU)</label>
								</div>
							</div>
							<div class="form-group">
								<div class="col-sm-2"></div>
								<div class="col-xs-6">
									<select class="form-control" id="sel_RPU_ol" disabled>
									</select>
								</div>
							</div>
							<div class="form-group">
								<div class="col-sm-2"></div>
								<div class="col-sm-5 paddingleft-15">
									<input type="checkbox" id="ch_RPUClose_ol" disabled> <label
										for="ch_RPUClose_ol">&nbsp;หักหนี้สินก่อนปิด</label>
								</div>
							</div>
							<div class="form-group">
								<div class="col-sm-1"></div>
								<div class="col-sm-11">
									<input type="checkbox" id="ch_AutoRPU_ol" disabled><label
										for="ch_AutoRPU_ol">&nbsp;ปิดบัญชีมูลค่าเงินสำเร็จอัตโนมัติ
										(Auto RPU)</label>
								</div>
							</div>
							<div class="form-group">
								<div class="col-sm-2"></div>
								<div class="col-xs-6">
									<select class="form-control" id="sel_AutoRPU_ol" disabled>
									</select>
								</div>
							</div>
							<div class="form-group">
								<div class="col-sm-2"></div>
								<div class="col-sm-5 paddingleft-15">
									<input type="checkbox" id="ch_AutoRPUClose_ol" disabled>
									<label for="ch_AutoRPUClose_ol">&nbsp;หักหนี้สินก่อนปิด</label>
								</div>
							</div>
							<div class="form-group" id="div_rd_AutoRPU_OL">
								<div class="col-sm-1"></div>
								<div class="col-sm-8 panel panel-default marginleft_style14">
									<div class="col-sm-12 padding_all1">
										<div class="col-sm-12">
											<input type="radio" name="rd_AutoRPU_OL[]"
												id="rd_AutoRPU_OL1" value="APPLY_SA" checked><label
												for="rd_AutoRPU_OL1" class="label_input2">คุ้มครองด้วยทุนเริ่ม
											</label>
										</div>
										<div class="col-sm-12">
											<input type="radio" name="rd_AutoRPU_OL[]"
												id="rd_AutoRPU_OL2" value="DEATH_BENEFIT"><label
												for="rd_AutoRPU_OL2" class="label_input2">คุ้มครองด้วยทุนมรณกรรม</label>
										</div>
									</div>
								</div>
							</div>
							<div class="form-group">
								<div class="col-sm-1"></div>
								<div class="col-sm-9">
									<input type="checkbox" id="ch_PhaseRPU_ol" disabled><label
										for="ch_PhaseRPU_ol">&nbsp;RPU คุ้มครองถึง</label>
								</div>
							</div>
							<div class="form-group">
								<div class="col-sm-2"></div>
								<div class="col-xs-5">
									<select class="form-control" id="sel_PhaseRPU_ol" disabled>
									</select>
								</div>
								<div class="col-xs-2 padding0">
									<input type="text" class="auto form-control text-center" id="rpu_year_ol" 
									onkeypress="validate(event)" data-v-min="0" data-v-max="99" maxlength="2" disabled>
								</div>
								<div class="col-xs-1 padding0">
									<select class="form-control width82px" id="dmy_2_2_ol" disabled></select>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="col-md-8 col-md-offset-7 text-right ">
					<div class="col-md-7">
						<div class="col-md-6">
							<button type="button" class="btn btn-primary width100"
								id="bt_ui005_2_Confirm_ol" onclick="bt_Menu2_Confirm_ol();">บันทึก</button>
						</div>
						<div class="col-md-6">
							<button type="button" class="btn btn-primary width100"
								data-toggle="modal" data-target="#modal_Cancel_Menu_OL3">ยกเลิก</button>
						</div>
					</div>
				</div>
				-

			</div>
			<!-- MODAL modal_success-->
			<%--  <%@include file="modal_success.jsp" %>
					<%@include file="modal_warning.jsp"%> --%>
		</div>
	</form>

	<!-- ปุ่ม ยกเลิก -->
	<div id="modal_Cancel_Menu_OL3" class="modal fade bd-example-modal-sm"
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
						<button type="button" class="btn btn-primary"
							onclick="cancelPage('base_plan.jsp');">ยืนยัน</button>
					</div>
					<div class="col-md-1"></div>
					<div class="col-md-2">
						<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
					</div>
					<div class="col-md-4"></div>
				</div>
				<div class="text-center" style="padding: 10px 0"></div>
			</div>
		</div>
	</div>
<input type="hidden" id="age_ETI_RPU_OL" value="">
</body>
</html>