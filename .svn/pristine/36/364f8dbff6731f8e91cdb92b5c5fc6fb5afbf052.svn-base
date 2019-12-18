<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>ข้อมูลทั่วไป Basic Information</title>

</head>
<body>
	
	<div class="panel-body">
		<div class="panel panel-primary" align="center">
			<div class="panel-heading">
				<p class="margin0">
					<B>ข้อมูลรายการตรวจสุขภาพ</B>
				</p>
			</div>
			<div class="panel-body">

				<div class="panel panel-primary">
					<div class="panel-heading" align="left">
						<p class="margin0">
							<B>แสดงรายการ ตารางรายการตรวจสุขภาพตามทุนคุ้มครอง</B>
						</p>
					</div>
					<div class="panel-body">
						<div class="row">
							<div class="col-sm-12">
								<table class="table table-striped table-bordered text-center" id= "tb_appendixmaster" width="100%" >
									<div class="panel-body">
									<div
										class="dataTables_wrapper form-inline dt-bootstrap no-footer">
										<div class="row" >
											<div class="col-sm-12" align="right">
												<label>ค้นหา :&nbsp;</label><input type="text"
													id="search_tb_appendixmaster" class="form-control input-sm" />
											</div>
										</div>
									</div>
									</div>
									<thead>
										<tr>
											<th width="3%" class="text-center bg-primary vertical-middle" style="border-right: none;border-left:none;"></th>
											<th width="7%" class="text-center bg-primary vertical-middle" style="border-right: none;border-left:none;">ภาคผนวก</th>
											<th width="40%" class="text-center bg-primary vertical-middle" style="border-right: none;border-left:none;">ชื่อตารางภาคผนวก/สำหรับสินค้าประเภท</th>
											<th width="12%" class="text-center bg-primary vertical-middle" style="border-right: none;border-left:none;">วันที่เริ่ม<br>ใช้ตาราง</th>
											<th width="12%" class="text-center bg-primary vertical-middle" style="border-right: none;border-left:none;">วันที่สิ้นสุด<br>ใช้ตาราง</th>
											<th width="6%"  class="text-center bg-primary vertical-middle" style="border-right: none;border-left:none;">
														<font size="1"><label>สถานะ<br>การใช้งาน (Y/N)</label>
														</font>
													</label></th><th width="10%" class="text-center bg-primary vertical-middle" style="border-right: none;border-left:none;">สถานะขออนุมัติ</th>
											<th width="10%" class="text-center bg-primary vertical-middle" style="border-right: none;border-left:none; "  >คัดลอก</th>
										</tr>
									</thead>
									<tbody>
										
									</tbody>
								</table>
							</div>
							<div class="col-sm-2" align="left">
								<input type="button" id="btn_add_appendix" class="btn btn-primary width100" onclick="bt_add_appendix();" value="เพิ่มภาคผนวก"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	
</body>
<!-- dialog - เลือกการคัดลอก -->
	<div class="modal fade" id="modal_copy" role="dialog">
		<div class="modal-dialog">
			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title" align="left">เลือกการคัดลอก<span></span></h4>
				</div>
			<div class="modal-body">
					<div class="row" align="center">
						<p class="margin0">
							<B>เลือกการคัดลอกตารางภาคผนวก</B>
						</p>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row" align="center">
						<div class="col-sm-6" align="right">
						<button type="button" class="btn btn-primary" 
						data-dismiss="modal" id="copynew">คัดลอก<br>เพื่อสร้างใหม่</button>
						
					    </div>
					    <div class="col-sm-6" align="left">
					    <button type="button" class="btn btn-primary" 
					    data-dismiss="modal" id="copyedit" >คัดลอก<br>เพื่อแก้ไข</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
<!-------------------- hidden value ------------------------->

<input  id="appendix_approved_status" type="hidden" >


<!----------------------------------------------------------->	
</html>