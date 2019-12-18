<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<style>
table {
	max-width: none;
	min-height: 0%;
}
</style>
<body>
	<div class="panel-body">
		<div class="panel panel-primary" align="center">
			<div class="panel-heading" align="center">
				<p class="margin0">
					<B>ข้อมูลกลุ่มรายการตรวจเลือด</B>
				</p>
			</div>

			<div class="panel-body">
				<div class="panel panel-primary" align="center">
					<div class="panel-heading" align="left">
						<p class="margin0">
							<B>ระบุเงื่อนไขแสดงข้อมูล</B>
						</p>
					</div>
					<div class="panel-body">
						<div class="dataTables_wrapper form-inline dt-bootstrap no-footer">
							<div class="row">
								<div class="col-sm-12">
									<div class="dataTables_filter">
										<label>ค้นหา :<input type="search" 
										    id="search_tb_tab2"
											class="form-control input-sm"></label>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="panel panel-primary">
					<div class="panel-heading" align="left">
						<p class="margin0">
							<B>แสดงกลุ่มรายการตรวจเลือด</B>
						</p>
					</div>
					<div class="panel-body">
						<table id="tb_mainTab2"
							class="table table-striped table-bordered text-center"
							width="100%">
							<thead>
								<tr>
									<th width="9%" class="text-center bg-primary vertical-middle"
										style="border-right: none">เลือก</th>
									<th width="10%" class="text-center bg-primary vertical-middle"
										style="border-right: none">รหัสกลุ่ม</th>
									<th width="15%" class="text-center bg-primary vertical-middle"
										style="border-right: none"><label>ชื่อกลุ่ม<br>รายการตรวจ</label></th>
									<th width="71%" class="text-center bg-primary vertical-middle">รายการรหัสตรวจเลือด</th>
								</tr>
							</thead>
							<tbody>
								
							</tbody>
						</table>
						
							<!-- <div class="row">
								<div class="text-center" style="padding: 10px 0"></div>
								<div class="col-sm-6" align="left">
									<div class="col-sm-4">
										<input id="bt_addGroup_checkList"
											class="btn btn-primary width120" type="button"
											
											data-target="" 
											data-toggle="modal"
											
											onclick="initGroupCode(this);"
											value="เพิ่มกลุ่มรายการตรวจ">
									</div>
								</div>
								<div class="col-sm-6" align="right">
									<div class="col-sm-5"></div>
									<div class="col-sm-3">
										<input class="btn btn-primary width100" type="button"
											value="คัดลอก" onclick="bt_copy_diagnose_group();"> 
									</div>
								</div>
							</div> -->
							<div class="row col-sm-12">
								<div class="text-center" style="padding: 10px 0"></div>
								<div class="col-sm-3" style="padding-right: 50px; padding-left: 0px;" >
									<input id="bt_addGroup_checkList"
											class="btn btn-primary width70" type="button"
											
											data-target="" 
											data-toggle="modal"
											style="padding-right: 5px; padding-left: 5px;"
											onclick="initGroupCode(this);"
											value="เพิ่มกลุ่มรายการตรวจ">
								</div>
								<div class="col-sm-6"></div>
								<div class="col-sm-3" style="padding-right: 0px; padding-left: 160px;">
										<input id="bt_copy_group" class="btn btn-primary width80" type="button"
											value="คัดลอก" onclick="bt_copy_diagnose_group();"> 
								</div>
							</div>
						
					</div>
				</div>
			</div>
		</div>
	</div>

<!-- เพิ่มรายการตรวจ dialog - รายการตรวจเลือด -->
	<div class="modal fade" id="modal_group_checkList" role="dialog">
		<div class="modal-dialog" style="width:90%">
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title" align="center">
						รายการตรวจเลือด<span></span>
					</h4>
				</div>
				<div class="modal-body">
					
					<div class="panel panel-primary">
						<div class="panel-heading" align="left">
							<p class="margin0">
								<B>ระบุข้อมูลกลุ่มรายการตรวจ</B>
							</p>
						</div>
						<div class="panel-body">
							<div class="row">
								<div class="col-sm-2" align="left">
									<b>รหัสกลุ่ม&nbsp;<font id="validate_star"
										style="color: red; display: inline-block;">*</font></b>
								</div>
								<div class="col-sm-4" align="left">
									<input type="text" id="keyGroup" class="form-control" />
								</div>
								<div class="col-sm-6"></div>
							</div>
							<div class="text-center" style="padding: 10px 0"></div>
							<div class="row">
								<div class="col-sm-2" align="left">
									<b>ชื่อกลุ่มรายการตรวจ&nbsp;<font id="validate_star"
										style="color: red; display: inline-block;">*</font></b>
								</div>
								<div class="col-sm-4" align="left">
									<input type="text"  id="nameGroup" maxlength="20" class="form-control" />
								</div>
								<div class="col-sm-6"></div>
							</div>
						</div>
					</div>
					<div class="panel panel-primary">
						<div class="panel-heading">
							<p class="margin0">
								<B>เลือกรายการตรวจ</B>
							</p>
						</div>
						<div class="panel-body">
							<table id="tb_modal_checkListNot"
								class="table table-striped table-bordered text-center">
								<thead>
									<tr>
										<th width="10%" class="text-center bg-primary vertical-middle"
											style="border-right-style: none;">เลือก</th>
										<th width="15%" class="text-center bg-primary vertical-middle"
											style="border-right-style: none;">รหัส</th>
										<th width="25%" class="text-center bg-primary vertical-middle"
											style="border-right-style: none;">ชื่อรหัสตรวจ</th>
										<th width="50%" class="text-center bg-primary vertical-middle"
											style="border-right-style: none;">ความหมาย</th>
									</tr>
								</thead>
								<tbody>
									
									
								</tbody>
							</table>
							<div class="text-center" style="padding: 10px 0"></div>
						</div>
					</div>
					<div id="row_user_tab2" class="row">
								<div class="col-md-8">
									<div class="col-sm-2" style="padding-left: 10px;">
										<button type="button" class="btn btn-primary width90"
										    id="bt_select_member_exam"
											onclick="select_all_not();"
											>เลือกทั้งหมด</button>
											</div>
									<div class="col-sm-2" style="padding-right: 50px;">
										<button type="button" class="btn btn-primary width90"
											id="bt_add_member_exam"
											onclick="chk_popup_checklist();" data-toggle="modal">เพิ่มรายการ</button>
										
									</div>
									<div class="col-sm-2" style="padding-right: 50px;">
										<button type="button" class="btn btn-primary width90"
										    id="bt_delete_member_exam"
											data-target="#modal_confirm_delete" 
											data-toggle="modal">ลบรายการ</button>
									</div>
								</div>
								
					
					
				
								<div class="col-md-4 style="padding-left: 50px;"">
									<div class="col-sm-4" style="padding-left: 0px;">
									</div>
									<div class="col-sm-4" style="padding-left: 0px;">
										<button type="button" class="btn btn-primary width100"
											onclick="validate_save_new_diagnose_group();"
												id="bt_save_member_exam"
											data-toggle="modal"
											>บันทึก</button>
									</div>
									<div class="col-sm-4" style="padding-right: 0px;">
										<button type="button" class="btn btn-primary width100" 
										data-dismiss="modal">ยกเลิก</button>
									</div>
								</div>
					</div>
					<div id="row_super_tab2" class="row">
								<div class="col-md-8">
									<div class="col-sm-3" style="padding-left: 15px;">
										</div>
									<div class="col-sm-3" style="padding-left: 0px;">
										</div>
								</div>
								
					
					
				
						<div class="col-md-4 text-right"></div>
						<div class="col-sm-2" style="padding-left: 0px;">
							</div>
						<div class="col-sm-2" style="padding-left: 800px;">
							<button type="button" class="btn btn-primary width160" data-dismiss="modal">ยกเลิก</button>
						</div>
					</div>
				
			</div>
		</div>
	</div>
	</div>
	<!------------------------------- dialog --------------------------------------------->



	<!-- เพิ่มรายการตรวจ dialog - รายการตรวจเลือด -->
	<div class="modal fade" id="modal_group_checkList_blood" role="dialog">
		<div class="modal-dialog" style="width:80%">
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title" align="center">
						กลุ่มรายการตรวจ<span></span>
					</h4>
				</div>
				<div class="modal-body">
					<div class="panel panel-primary">
						<div class="panel-heading">
							<p class="margin0">
								<B>ระบุเงื่อนไขแสดงข้อมูล</B>
							</p>
						</div>
						<div class="panel-body">
							<div
								class="dataTables_wrapper form-inline dt-bootstrap no-footer">
								<div class="row">
									<div class="col-sm-12" style="padding-left:10px">
										<div class="dataTables_filter">
											<label>ค้นหา :<input type="search"
												id="search_modal_tab3" 
												class="form-control input-sm"></label>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="panel panel-primary">
						<div class="panel-heading">
							<p class="margin0">
								<B>เลือกรายการตรวจ</B>
							</p>
						</div>
						<div class="panel-body">
							<table id="tb_modal_checkList_blood"
								class="table table-striped table-bordered text-center">
								<thead>
									<tr>
										<th width="10%" class="text-center bg-primary vertical-middle"
											style="border-right-style: none;">เลือก</th>
										<th width="15%" class="text-center bg-primary vertical-middle"
											style="border-right-style: none;">รหัส</th>
										<th width="25%" class="text-center bg-primary vertical-middle"
											style="border-right-style: none;">ชื่อรหัสตรวจ</th>
										<th width="50%" class="text-center bg-primary vertical-middle"
											style="border-right-style: none;">ความหมาย</th>
									</tr>
								</thead>
								<tbody>
									
									
								</tbody>
							</table>
							<div class="text-center" style="padding: 10px 0"></div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-4" style="padding-left:15px"><input type="button" 
									class="btn btn-primary width70"
									onclick="select_all();" value="เลือกทั้งหมด"/></div>
						<div class="col-sm-4 text-right"></div>
						<div class="col-sm-2" style="padding-left: 0px;">
							<button type="button" id="bt_add_list" class="btn btn-primary width100"
							     data-toggle="modal" data-dismiss="modal"
								onclick="bt_addListGroup(); "  disabled >ตกลง</button>
						</div>
						<div class="col-sm-2"  style="padding-left: 0px;">
							<button type="button"  id="bt_cancel_list"
							class="btn btn-primary width100"  disabled
							data-dismiss="modal">ยกเลิก</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	
	
	
		<!-- dialog - ยืนยันการบันทึก 1-->
	<div class="modal fade" id="modal_submit" role="dialog">
		<div class="modal-dialog">
			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title" align="left">ยืนยันการบันทึก<span></span></h4>
				</div>
			<div class="modal-body">
				<div class="row" align="center">
					<p class="margin0">
						<B>ระบบทำการบันทึกเรียบร้อยแล้ว</B>
					</p>
				</div>
				<div class="text-center" style="padding: 10px 0"></div>
				<div class="row" align="center">
					<button type="button"  class="btn btn-primary" data-dismiss="modal">ยืนยัน</button>
					<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
				</div>
			</div>
			</div>
		</div>
	</div>
	<!-- dialog - ยืนยันการบันทึก3 -->
	<div class="modal fade" id="modal_submit3" role="dialog">
		<div class="modal-dialog">
			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title" align="left">
						ยืนยันการบันทึก<span></span>
					</h4>
				</div>
				<div class="modal-body">
					<div class="row" align="center">
						<p class="margin0">
							<B>ระบบทำการบันทึกเรียบร้อยแล้ว</B>
						</p>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<!-- <div class="row" align="center">
						<button type="button" id="bt_confirm" class="btn btn-primary"
							data-dismiss="modal">ปิด</button>
					</div> -->
				</div>
			</div>
		</div>
	</div>
	<!-- dialog - ยืนยันการบันทึก 2-->
	<div class="modal fade" id="modal_submit2" role="dialog">
		<div class="modal-dialog">
			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title" align="left">
						ยืนยันการบันทึก<span></span>
					</h4>
				</div>
				<div class="modal-body">
					<div class="row" align="center">
						<p class="margin0">
							<B>ระบบจะทำการบันทึก</B>
						</p>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row" align="center">
						<button type="button"  class="btn btn-primary" data-dismiss="modal" onclick="dataSave_MedexamGroup();">ยืนยัน</button>
					    <button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
				
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- dialog - ยืนยันการลบ -->
	<div class="modal fade" id="modal_confirm_delete" role="dialog">
		<div class="modal-dialog">
			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title" align="left">
						ยืนยันการลบ<span></span>
					</h4>
				</div>
				<div class="modal-body">
					<div class="row" align="center">
						<p class="margin0">
							<B>ต้องการลบรายการที่เลือกใช่หรือไม่ ?</B>
						</p>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row" align="center">
						<button type="button" class="btn btn-primary"
							onclick="delete_checklist();" data-dismiss="modal"
							data-toggle="modal">ต้องการ</button>
						<button type="button" class="btn btn-primary" data-dismiss="modal"
							data-toggle="modal">ไม่ต้องการ</button>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- dialog - ลบ -->
	<div class="modal fade" id="modal_delete" role="dialog">
		<div class="modal-dialog">
			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title" align="left">
						ยืนยันการลบ<span></span>
					</h4>
				</div>
				<div class="modal-body">
					<div class="row" align="center">
						<p class="margin0">
							<B>ระบบลบรายการที่เลือกเรียบร้อยแล้ว</B>
						</p>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row" align="center">
						<button type="button" class="btn btn-primary" data-dismiss="modal">ปิด</button>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- dialog - ยกเลิกลบ -->
	<div class="modal fade" id="modal_cancel_delete" role="dialog">
		<div class="modal-dialog">
			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title" align="left">
						ยืนยันการลบ<span></span>
					</h4>
				</div>
				<div class="modal-body">
					<div class="row" align="center">
						<p class="margin0">
							<B>รายการที่เลือกไม่ถูกลบ</B>
						</p>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row" align="center">
						<button type="button" class="btn btn-primary" data-dismiss="modal">ปิด</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<!-- <div id="modal_warning" class="modal fade " >
          <div class="modal-dialog">
              <div class="modal-body" >
                <div class="box box-danger box-solid  " >
                  <div class="box-header">
                    เเจ้งเตือน
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span></button>
                  </div>
                  <div id="txt_alert_error" class="box-body">
                    ไม่พบข้อมูล
            		</div>
                </div>
              </div>
          </div>
        </div> -->
	
	<input id="header_index" type="hidden" value="">
	
</body>
</html>