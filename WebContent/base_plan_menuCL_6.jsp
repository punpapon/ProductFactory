<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>ขออนุมัติ</title>
</head>
<body>
	<div class="row box-body" id="approve_CL">
		<div class="panel panel-primary">
			<div class="panel-heading text-left">
				<p class="margin0 text-center">
					<B>ขออนุมัติ</B>
				</p>
			</div>
			<div class="panel-body">
				<div class="text-center" style="padding: 10px 0"></div>
				<div class="row">
					<div class="col-md-1"></div>
					<div class="col-md-2">
						<label>รหัสความคุ้มครองแบบประกัน</label>
					</div>
					<div class="col-md-3">
						<input type="text" id="code_Coverage_CL" class="form-control" value="" disabled>
					</div>
				</div>
				<div class="row">
					<div class="col-md-1"></div>
					<div class="col-md-2 padding1">
						<label>ชื่อ(ไทย)</label>
					</div>
					<div class="col-md-3">
						<input type="text" id="approve_nameTH_CL" class="form-control" value="" disabled>
					</div>

					<div class="col-md-1 padding1">
						<label>ชื่อ(อังกฤษ)</label>
					</div>
					<div class="col-md-4">
						<input type="text" id="approve_nameEN_CL" class="form-control" value="" disabled>
					</div>
				</div>
				
				<div class="row" id="div_policyStatus_CL">
					<div class="col-md-1"></div>
					<div class="col-md-2">
						<label>Policy Wording Status</label>
					</div>
					<div class="col-md-2">
						<input type="text" id="status_policy" class="form-control" style="color: green;" value="" disabled>
					</div>
				</div>
				
				<div class="row">
					<div class="col-md-1"></div>
					<div class="col-md-2 padding1">
						<label style="color:red;">หมายเหตุ</label>
					</div>
					<div class="col-md-8">
						<textarea class="form-control resizeNone" rows="6" id="comment" style="color: red;" disabled></textarea>
					</div>
				</div>
				<div class="row">
					<div class="text-center" style="padding: 20px 0"></div>
					<div class="col-md-4"></div>
					<div class="col-md-4" id="div_request_editCL">
						<div class="col-md-6"></div>
						<div class="col-md-6">
							<button class="btn btn-primary width100" id="btn_request_approveCL" data-toggle="modal" 
								data-target="#confirmEdit0051_user_CL">ขอแก้ไข</button>
						</div>
					</div>
					<div class="col-md-4" id="div_request_approveCL">
						<div class="col-md-6"></div>
						<div class="col-md-6">
							<button class="btn btn-primary width100" id="btn_request_approveCL" data-toggle="modal" 
								data-target="#confirmApprove0051_user_CL">ขออนุมัติ</button>
						</div>
					</div>
					<div class="col-md-4 displayNone" id="div_approveCL">
						<div class="col-md-6"> 
							<button class="btn btn-primary width100" data-toggle="modal" data-target="#confirmApprove0051_CL">อนุมัติ</button>
						</div> 
						<div class="col-md-6">
							<button class="btn btn-primary width100" data-toggle="modal" data-target="#notApprove0051_CL">ไม่อนุมัติ</button>
						</div>
					</div>
					<div class="col-md-4 displayNone" id="div_approveEditCL">
						<div class="col-md-6"> 
							<button class="btn btn-primary width100" data-toggle="modal" data-target="#confirmApproveEdit0051_CL">อนุมัติ</button>
						</div> 
						<div class="col-md-6">
							<button class="btn btn-primary width100" data-toggle="modal" data-target="#notApproveEdit0051_CL">ไม่อนุมัติ</button>
						</div>
					</div>
				</div>
			</div>
			<!-- MODAL -->

			<!-- ขออนุมัติ -->
			<div class="modal fade" id="confirmApprove0051_user_CL" role="dialog">
				<div class="modal-dialog">

					<!-- Modal content-->
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal">&times;</button>
							<h4 class="modal-title">ยืนยันการขออนุมัติ</h4>
						</div>
						<div class="modal-body">
							<div class="row">
								<p class="text-center">ต้องการขออนุมัติแบบประกันหลัก <span></span>
									ใช่หรือไม่?</p>
							</div>
							<div class="row"></div>
							<div class="row">
								<div class="col-md-4"></div>
								<div class="col-md-4">
									<div class="col-md-6">
										<button type="button" class="btn btn-primary" onclick="bt_approved('request');"
											data-dismiss="modal">ยืนยัน</button>
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
			<!-- end user popup -->
			
			<div class="modal fade" id="confirmApprove0051_CL" role="dialog">
				<div class="modal-dialog">

					<!-- Modal content-->
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal">&times;</button>
							<h4 class="modal-title">ยืนยันการอนุมัติ</h4>
						</div>
						<div class="modal-body">
							<div class="row">
								<p class="text-center">ต้องการอนุมัติแบบประกันหลัก <span></span>
									ใช่หรือไม่?</p>
							</div>
							<div class="row"></div>
							<div class="row">
								<div class="col-md-4"></div>
								<div class="col-md-4">
									<div class="col-md-6">
										<button type="button" class="btn btn-primary" 
											data-dismiss="modal" onclick="bt_approved('approved');">ยืนยัน</button>
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

			<!-- *************************************************** -->
			<div class="modal fade" id="notApprove0051_CL" role="dialog">
				<div class="modal-dialog">

					<!-- Modal content-->
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal">&times;</button>
							<h4 class="modal-title">กรุณาระบุเหตุผลการไม่อนุมัติ</h4>
						</div>
						<div class="modal-body">
							<div class="form-group">
								<label for="comment_notApprovedCL">เหตุผลที่ไม่อนุมัติ:</label>
								<textarea id="comment_notApprovedCL" class="form-control" rows="4"></textarea>
							</div>

							<div class="row">
								<div class="col-md-4"></div>
								<div class="col-md-4">
									<div class="col-md-6">
										<button type="button" class="btn btn-primary"
											data-dismiss="modal" data-toggle="modal"
											data-target="#confirmNotApprove0051_CL">ไม่อนุมัติ</button>
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
			<!-- *************************************************** -->
			<div class="modal fade" id="confirmNotApprove0051_CL" role="dialog">
				<div class="modal-dialog">

					<!-- Modal content-->
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal">&times;</button>
							<h4 class="modal-title">ยืนยันการไม่อนุมัติ</h4>
						</div>
						<div class="modal-body">
							<div class="row">
								<p class="text-center">ต้องการไม่อนุมัติแบบประกันหลัก <span></span>
									ใช่หรือไม่?</p>
							</div>
							<div class="row"></div>
							<div class="row">
								<div class="text-center" style="padding: 20px 0"></div>
								<div class="col-md-4"></div>
								<div class="col-md-4">
									<div class="col-md-6">
										<button type="button" class="btn btn-primary"
											data-dismiss="modal" onclick="bt_approved('not_approved');">ยืนยัน</button>
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
			
			<!-- ขอแก้ไข -->
			<!-- user request edit -->
			<div class="modal fade" id="confirmEdit0051_user_CL" role="dialog">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal">&times;</button>
							<h4 class="modal-title">ยืนยันการขอแก้ไข</h4>
						</div>
						<div class="modal-body">
							<div class="row">
								<p class="text-center">ต้องการขอแก้ไขแบบประกันหลัก <span></span>
									ใช่หรือไม่?</p>
							</div>
							<div class="row"></div>
							<div class="row">
								<div class="col-md-4"></div>
								<div class="col-md-4">
									<div class="col-md-6">
										<!-- <button type="button" class="btn btn-primary" onclick="bt_approved('request_update');"
											data-dismiss="modal">ยืนยัน</button> -->
										<button type="button" class="btn btn-primary"
											data-dismiss="modal" data-toggle="modal"
											data-target="#confirmRequestEdit0051_user_CL">ยืนยัน</button>
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
			<!-- *************************************************** -->
			<div class="modal fade" id="confirmRequestEdit0051_user_CL" role="dialog">
				<div class="modal-dialog">

					<!-- Modal content-->
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal">&times;</button>
							<h4 class="modal-title">กรุณาระบุเหตุผลการขอแก้ไข</h4>
						</div>
						<div class="modal-body">
							<div class="form-group">
								<label for="comment_RequestEditCL">เหตุผล:</label>
								<textarea id="comment_RequestEditCL" class="form-control" rows="4"></textarea>
							</div>

							<div class="row">
								<div class="col-md-4"></div>
								<div class="col-md-4">
									<div class="col-md-6">
										<button type="button" class="btn btn-primary"
											data-dismiss="modal" onclick="bt_approved('request_update');">ยืนยัน</button>
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
			<!-- *************************************************** -->
			<div class="modal fade" id="confirmApproveEdit0051_CL" role="dialog">
				<div class="modal-dialog">

					<!-- Modal content-->
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal">&times;</button>
							<h4 class="modal-title">ยืนยันการอนุมัติขอแก้ไข</h4>
						</div>
						<div class="modal-body">
							<div class="row">
								<p class="text-center">ต้องการอนุมัติการขอแก้ไขแบบประกันหลัก <span></span>
									ใช่หรือไม่?</p>
							</div>
							<div class="row"></div>
							<div class="row">
								<div class="col-md-4"></div>
								<div class="col-md-4">
									<div class="col-md-6">
										<button type="button" class="btn btn-primary" 
											data-dismiss="modal" onclick="bt_approved('approved_update');">ยืนยัน</button>
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

			<!-- *************************************************** -->
			<div class="modal fade" id="notApproveEdit0051_CL" role="dialog">
				<div class="modal-dialog">

					<!-- Modal content-->
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal">&times;</button>
							<h4 class="modal-title">กรุณาระบุเหตุผลการไม่อนุมัติการขอแก้ไข</h4>
						</div>
						<div class="modal-body">
							<div class="form-group">
								<label for="comment_notApprovedEditCL">เหตุผลที่ไม่อนุมัติ:</label>
								<textarea id="comment_notApprovedEditCL" class="form-control" rows="4"></textarea>
							</div>

							<div class="row">
								<div class="col-md-4"></div>
								<div class="col-md-4">
									<div class="col-md-6">
										<button type="button" class="btn btn-primary"
											data-dismiss="modal" data-toggle="modal"
											data-target="#confirmNotApproveEdit0051_CL">ไม่อนุมัติ</button>
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
			<!-- *************************************************** -->
			<div class="modal fade" id="confirmNotApproveEdit0051_CL" role="dialog">
				<div class="modal-dialog">

					<!-- Modal content-->
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal">&times;</button>
							<h4 class="modal-title">ยืนยันการไม่อนุมัติ</h4>
						</div>
						<div class="modal-body">
							<div class="row">
								<p class="text-center">ต้องการไม่อนุมัติการขอแก้ไขแบบประกันหลัก <span></span>
									ใช่หรือไม่?</p>
							</div>
							<div class="row"></div>
							<div class="row">
								<div class="text-center" style="padding: 20px 0"></div>
								<div class="col-md-4"></div>
								<div class="col-md-4">
									<div class="col-md-6">
										<button type="button" class="btn btn-primary"
											data-dismiss="modal" onclick="bt_approved('not_approved_update');">ยืนยัน</button>
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
		
			<!-- End -->
			
		</div>
	</div>
</body>
</html>