<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>ui005_1_1-6</title>
</head>
<body>
	<div class="row box-body">
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
					<div class="col-md-2">
						<input type="text" class="form-control" value="WG" disabled>
					</div>
				</div>
				<div class="row">
					<div class="col-md-1"></div>
					<div class="col-md-2 padding1">
						<label>ชื่อ(ไทย)</label>
					</div>
					<div class="col-md-3">
						<input type="text" class="form-control" value="คุ้มธนกิจ 90/20"
							disabled>
					</div>

					<div class="col-md-2 padding1">
						<label>ชื่อ(อังกฤษ)</label>
					</div>
					<div class="col-md-3">
						<input type="text" class="form-control"
							value="KHUM THANAKIT 90/20" disabled>
					</div>
				</div>
				<div class="row">
					<div class="col-md-1"></div>
					<div class="col-md-2 padding1">
						<label>หมายเหตุ</label>
					</div>
					<div class="col-md-8">
						<textarea class="form-control resizeNone" rows="4" id="comment"
							style="color: red;" disabled>กรุณาตรวจสอบรายละเอียดนี้ให้ครบถ้วน โดยการคลิกที่ Tab ข้อมูลต่างๆ เพื่อตรวจสอบข้อมูลก่อนการขออนุมัติ
								</textarea>
					</div>
				</div>
				<div class="row">
					<div class="text-center" style="padding: 20px 0"></div>
					<div class="col-md-4"></div>
					<div class="col-md-4">
						<!-- 								<div class="col-md-6"> -->
						<!-- 									<button class="btn btn-primary width100" data-toggle="modal" data-target="#confirmApprove0051">อนุมัติ</button> -->
						<!-- 								</div> -->
						<!-- 								<div class="col-md-6"> -->
						<!-- 									<button class="btn btn-primary width100" data-toggle="modal" data-target="#notApprove0051">ไม่อนุมัติ</button> -->
						<!-- 								</div> -->
					</div>
					<div class="col-md-4 text-right">
						<div class="col-md-6"></div>
						<div class="col-md-6">
							<button class="btn btn-primary width100" data-toggle="modal"
								data-target="#confirmApprove0051">อนุมัติ</button>
						</div>
					</div>
				</div>
			</div>
			<!-- MODAL -->

			<div class="modal fade" id="confirmApprove0051" role="dialog">
				<div class="modal-dialog">

					<!-- Modal content-->
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal">&times;</button>
							<h4 class="modal-title">ยืนยันการอนุมัติ</h4>
						</div>
						<div class="modal-body">
							<div class="row">
								<p class="text-center">ต้องการอนุมัติแบบประกันหลัก WG
									ใช่หรือไม่?</p>
							</div>
							<div class="row"></div>
							<div class="row">
								<div class="col-md-4"></div>
								<div class="col-md-4">
									<div class="col-md-6">
										<button type="button" class="btn btn-primary"
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

			<!-- *************************************************** -->
			<div class="modal fade" id="notApprove0051" role="dialog">
				<div class="modal-dialog">

					<!-- Modal content-->
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal">&times;</button>
							<h4 class="modal-title">กรุณาระบุเหตุผลการไม่อนุมัติ</h4>
						</div>
						<div class="modal-body">
							<div class="form-group">
								<label for="comment">Comment:</label>
								<textarea class="form-control" rows="4" id="comment"></textarea>
							</div>

							<div class="row">
								<div class="col-md-4"></div>
								<div class="col-md-4">
									<div class="col-md-6">
										<button type="button" class="btn btn-primary"
											data-dismiss="modal" data-toggle="modal"
											data-target="#confirmNotApprove0051">ไม่อนุมัติ</button>
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
			<div class="modal fade" id="confirmNotApprove0051" role="dialog">
				<div class="modal-dialog">

					<!-- Modal content-->
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal">&times;</button>
							<h4 class="modal-title">ยืนยันการไม่อนุมัติ</h4>
						</div>
						<div class="modal-body">
							<div class="row">
								<p class="text-center">ต้องการไม่อนุมัติแบบประกันหลัก WG
									ใช่หรือไม่?</p>
							</div>
							<div class="row"></div>
							<div class="row">
								<div class="text-center" style="padding: 20px 0"></div>
								<div class="col-md-4"></div>
								<div class="col-md-4">
									<div class="col-md-6">
										<button type="button" class="btn btn-primary"
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
		</div>
	</div>
</body>
</html>