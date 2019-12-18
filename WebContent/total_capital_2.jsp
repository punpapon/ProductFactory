<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title></title>
</head>
<style>

</style>
<body>
	<div class="panel-body">
		<div class="panel panel-primary">
			<div class="panel-heading">
				<p class="margin0" align="center">
					<B>เงื่อนไขการรวมทุนตรวจสุขภาพ</B>
				</p>
			</div>
			<div class="panel-body">
				<div class="panel panel-primary">
					<div class="panel-heading">
						<p class="margin0">
							<B>นำเข้าไฟล์อ้างอิงเอกสารระเบียบการรับประกัน</B>
						</p>					
					</div>
					<div class="panel-body">
						<table id="tb_tab2_fileSheetOrder" class="table table-striped table-bordered text-center" width="100%">
							<thead>
								<tr>
									<th width="3%" class="text-center bg-primary vertical-middle" style="border-right: none;border-left:none;" ></th>
									<th width="5%" class="text-center bg-primary vertical-middle" style="border-right: none;border-left:none;">ลำดับ</th>
									<th width="26%" class="text-center bg-primary vertical-middle" style="border-right: none;border-left:none;">เอกสารระเบียบ</th>
									<th width="22%" class="text-center bg-primary vertical-middle" style="border-right: none;border-left:none;">อำนาจรับประกันของ</th>
									<th width="30%" class="text-center bg-primary vertical-middle" style="border-right: none;border-left:none;">นำเข้าไฟล์ (PDF)</th>
									<th width="7%" class="text-center bg-primary vertical-middle" style="border-right: none;border-left:none;">ล้าง</th>
									<th width="7%" class="text-center bg-primary vertical-middle" style="border-right: none;border-left:none;">ประวัติ</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td class=""></td>
									<td class="">1</td>
									<td class=""><input type="text" class="form-control" style="width: 100%"/></td>
									<td class=""><input type="text" class="form-control"/></td>
									<td class="">
										<div class="input-group">
											<input type="text" class="form-control" readonly=""> 
											<label class="input-group-btn"> 
												<span  class="btn btn-primary" disabled>
												<font  style="color: red;">*</font>...
												<input type="file" accept="text/plain" style="display: none;"> 
												</span>
											</label>
										</div>
									</td>
									<td class="">
										<a id="" class="active_grey">
											<span class="glyphicon glyphicon-repeat activecolorblue"></span>
										</a>
									</td>
									<td class="">
										<a id="" class="active_grey open-HistoryDialog_CL" href="#modal_history_changeFile" data-toggle="modal">
											<span class="glyphicon glyphicon-time"></span>
										</a>
									</td>
								</tr>
							</tbody>
						</table>
						<div class="text-center" style="padding: 10px 0"></div>
						<div class="row" style="padding: 10px 0">
							<div class="col-sm-6" align="left">
								<div class="col-sm-3" style="padding-right: 0">
									<input type="button" class="btn btn-primary width100" onclick="bt_add_row_fileSheetOrder();" value="เพิ่ม"/>
								</div>
								<div class="col-sm-3" style="padding-right: 0">
									<input type="button" class="btn btn-primary width100" onclick="bt_delete_row_fileSheetOrder();" value="ลบ"/>
								</div>
							</div>
							<div class="col-sm-6">
							<div class="col-sm-6"></div>
							<!-- 	<div class="col-sm-3" style="padding-left: 0">
									<input type="button" class="btn btn-primary width100" value="บันทึก"/>
								</div>
								<div class="col-sm-3" style="padding-left: 0"> 
									<input type="button" class="btn btn-primary width100" value="ยกเลิก"/>
							</div> -->
						</div>
					</div>
				</div>
			</div>	
			<div class="panel panel-primary">
				<div class="panel-heading">
					<p class="margin0">
						<B>แสดงรายการ ทุนประกันคุ้มครองชีวิต (ทุนคุ้มครองชีวิตต่อผู้เอาประกัน 1 ราย) สำหรับสาขา</B>
					</p>
				</div>
				<div class="panel-body">
					<div class="row">
						<div class="col-sm-8">
							<table id="tb_tab2_listInsurance" class="table table-striped table-bordered text-center" width="100%">
								<thead>
									<tr>
										<th width="4%" class="text-center bg-primary vertical-middle" style="border-right: none;border-left:none;"></th>
										<th width="10%" class="text-center bg-primary vertical-middle" style="border-right: none;border-left:none;">ลำดับ</th>
										<th width="38%" class="text-center bg-primary vertical-middle" style="border-right: none;border-left:none;">ประเภทสัญญา</th>
										<th width="38%" class="text-center bg-primary vertical-middle" style="border-right: none;border-left:none;">จำนวนเงินทุน (บาท)</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td class=""><input type="checkbox" id="row_listInsurance1" hidden/></td>
										<td class="">1</td>
										<td class=""><a class="href_modalCommon" id="common1" ><input type="text" class="form-control" id="text_common1"></a></td>
										<td class=""><input type="text" class="form-control"/></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
						<div class="text-center" style="padding: 10px 0"></div>
						<div class="row" style="padding: 15px 0">
								<div class="col-sm-6">
									<div class="col-sm-3" style="padding-right: 0">
										<input type="button" class="btn btn-primary width100" onclick="bt_add_row_listInsurance(); " value="เพิ่ม"/>
									</div>
									<div class="col-sm-3" style="padding-right: 0">
										<input type="button" class="btn btn-primary width100" onclick="bt_delete_row_listInsurance(); " value="ลบ"/>
									</div>
									<div class="col-sm-6"></div>
								</div>
								<div class="col-sm-6">
									<!-- <div class="col-sm-6"></div>
									<div class="col-sm-3" style="padding-left: 0">
										<input type="button" class="btn btn-primary width100" value="บันทึก"/>
									</div>
									<div class="col-sm-3" style="padding-left: 0">
										<input type="button" class="btn btn-primary width100" value="ยกเลิก"/>
									</div>
									<div class="col-sm-6"></div> -->
								</div>
							</div>
					
				</div>
			</div>
			<div class="panel panel-primary">
				<div class="panel-heading">
					<p class="margin0">
						<B>แสดงรายการสัญญาเพิ่มเติม</B>
						<span class="glyphicon glyphicon-plus pull-right black" >เพิ่ม</span>
					</p>
				</div>
				<div class="panel-body">
					<div class="row" style="margin-right:-50px;margin-left:-50px;">
						<div class="col-sm-1"></div>
						<div class="col-sm-10" style="border: 1px groove blue;">
							<div class="text-center" style="padding: 15px 0"></div>
							<div class="col-sm-2" align="right" style="padding-right: 0"><label>แบบประกัน</label></div>
							<div class="col-sm-3"><input type="text" class="form-control"></div>
							<div class="col-sm-2" align="right" style="padding-right: 0"><label>ประเภทสัญญา</label></div>
							<div class="col-sm-3">
								<select class="form-control">
									<option value="">Rider</option>
								</select>
							</div>
							
							<div class="row" style="padding: 30px 0"></div>
							<div class="col-sm-12" style="border: 1px groove blue;">
								<div class="row" style="padding: 10px 0"></div>
									<table id="tb_tab2_listPromise" class="table table-striped table-bordered text-center" style="margin-bottom: 0px;" width="100%">
										<thead>
											<tr>
												<th width="3%" rowspan="2" class="text-center bg-primary vertical-middle borderless" style="border-right: none;"></th>
												<th width="48%" colspan="4" class="text-center bg-primary vertical-middle borderless" style="border-right: none;border-bottom: none;border-left: none;">อายุ</th>
												<th width="3%" rowspan="2" class="text-center bg-primary vertical-middle" style="border-right: none;border-left: none;"></th>
												<th width="1%" rowspan="2" class="text-center bg-primary vertical-middle" style="border-right: none;border-left: none;">ลำดับ</th>
												<th width="25%" colspan="2" class="text-center bg-primary vertical-middle" style="border-right: none;border-bottom: none;border-left: none;">ทุนประกันชีวิต(บาท)</th>
												<th width="20%" rowspan="2" class="text-center bg-primary vertical-middle borderless" style="border-right: none;border-left: none;">ทุนรวมสัญญาแนบท้าย<br>รวมทุกกรมธรรม์ไม่เกิน<br>(บาท)</th>
											</tr>
											<tr>
												<th width="7.5%" colspan="1" class="text-center bg-primary vertical-middle" style="border-right: none;border-top: none;border-left: none;">ตั้งแต่</th>
												<th width="11%" colspan="1" class="text-center bg-primary vertical-middle" style="border-right: none;border-top: none;border-left: none;">หน่วย</th>
												<th width="7.5%" colspan="1" class="text-center bg-primary vertical-middle" style="border-right: none;border-top: none;border-left: none;">ถึง</th>
												<th width="11%" colspan="1" class="text-center bg-primary vertical-middle" style="border-right: none;border-top: none;border-left: none;">หน่วย</th>
												<th width="12.5%" colspan="1" class="text-center bg-primary vertical-middle" style="border-right: none;border-top: none;border-left: none;">ตั้งแต่</th>
												<th width="12.5%" colspan="1" class="text-center bg-primary vertical-middle" style="border-right: none;border-top: none;border-left: none;">ถึง</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td class=""></td>
												<td class=""><input type="text" class="form-control" style="width: 100%"/></td>
												<td class="">
													<select class="form-control">
														<option value="">เดือน</option>
													</select>
												</td>
												<td class=""><input type="text" class="form-control" style="width: 100%"/></td>
												<td class="">
													<select class="form-control">
														<option value="">ปี</option>
													</select>
												</td>
												<td class="">
													<a id="" class="active_grey">
														<span class="glyphicon glyphicon-plus-sign activecolorblue fa-2x"></span>
													</a>
												</td>
												<td class="">1</td>
												<td class=""><input type="text" class="form-control" style="width: 100%"/></td>
												<td class=""><input type="text" class="form-control" style="width: 100%"/></td>
												<td class=""><input type="text" class="form-control" style="width: 100%"/></td>
											</tr>
										</tbody>
									</table>
									<div>
										<a id="" class="active_grey">
											<span class="glyphicon glyphicon-plus-sign activecolorblue fa-2x"></span>
										</a>
										<a id="" class="active_grey">
											<span class="glyphicon glyphicon-minus-sign activecolorblue fa-2x"></span>
										</a>
									</div>
									<div class="row" style="padding: 10px 0"></div>
							</div>
							<div class="col-sm-1" style="padding: 10px 0">
								<input type="button" class="btn btn-primary width100" value="ลบ"/>
							</div>
						</div>
		 			</div>
				</div>
			</div>
			<div class="dataTables_wrapper form-inline dt-bootstrap no-footer">
				<div class="row">
					<div class="col-sm-5" style="padding-right: 0";>
						<div class="col-sm-7" style="padding-left: 0;padding-right: 0"><label>สถานะขออนุมัติ&nbsp;<input type="text" class="form-control" style="width:40%;" value="" disabled></label></div>
						<div class="col-sm-5" style="padding-left: 0;padding-right: 0"><label>สถานะ&nbsp;
							<select class="form-control">
								<option value=""></option>
								<option value="Y">Active</option>
								<option value="N">Inactive</option>
							</select></label>
						</div>
					</div>
					<div class="col-sm-7">
						<div class="col-sm-2"></div>
						<div class="col-sm-2" style="padding-left: 0;padding-right: 5px"><input type="button" class="btn btn-primary width100" value="อนุมัติ"/></div>
						<div class="col-sm-2" style="padding-left: 0;padding-right: 5px"><input type="button" class="btn btn-primary width100" value="ไม่อนุมัติ"/></div>
						<div class="col-sm-2" style="padding-left: 0;padding-right: 5px"><input type="button" class="btn btn-primary width100" value="แก้ไข"/></div>
						<div class="col-sm-2" style="padding-left: 0;padding-right: 5px"><input type="button" class="btn btn-primary width100" value="ขออนุมัติ"/></div>
						<div class="col-sm-2" style="padding-left: 0;padding-right: 5px"><input type="button" class="btn btn-primary width100" value="บันทึก"/></div>
					</div>
				</div>
			</div>
			</div>
		</div>
	</div>
</body>
</html>

<!------------------------------- dialog --------------------------------------------->

<!-- dialog - ประวัติการเปลี่ยนแปลงไฟล์ -->
	<div class="modal fade" id="modal_history_changeFile" role="dialog">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title" align="center">ประวัติการเปลี่ยนแปลง นำไฟล์เข้า<span></span></h4>
				</div>
				<div class="modal-body">
				<div class="ex1">
				<div class="col-sm-12">
					<table id="tb_modal_tab2_historyChangeFile" class="table table-striped table-bordered text-center" width="100%">
						<thead>
							<tr>
								<th width="10%" class="text-center bg-primary vertical-middle" style="border-right: none;">ครั้งที่</th>
								<th width="15%" class="text-center bg-primary vertical-middle" style="border-right: none;">วันที่<br>เปลี่ยนแปลง</th>
								<th width="25%" class="text-center bg-primary vertical-middle" style="border-right: none;">ผู้เปลี่ยนแปลง</th>
								<th width="50%" class="text-center bg-primary vertical-middle" style="border-right: none;">นำเข้าไฟล์ (PDF)</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td class="">1</td>
								<td class="">26/09/2561</td>
								<td class="">User_01</td>
								<td class=""><a class="" >FileNamePDF.pdf</a></td>
							</tr>
							<tr>
								<td class="">2</td>
								<td class="">26/09/2561</td>
								<td class="">User_01</td>
								<td class=""><a class="" >FileNamePDF.pdf</a></td>
							</tr>
							<tr>
								<td class="">3</td>
								<td class="">26/09/2561</td>
								<td class="">User_01</td>
								<td class=""><a class="" >FileNamePDF.pdf</a></td>
							</tr>
							<tr>
								<td class="">4</td>
								<td class="">26/09/2561</td>
								<td class="">User_01</td>
								<td class=""><a class="" >FileNamePDF.pdf</a></td>
							</tr>
							<tr>
								<td class="">5</td>
								<td class="">26/09/2561</td>
								<td class="">User_01</td>
								<td class=""><a class="" >FileNamePDF.pdf</a></td>
							</tr>
							<tr>
								<td class="">6</td>
								<td class="">26/09/2561</td>
								<td class="">User_01</td>
								<td class=""><a class="" >FileNamePDF.pdf</a></td>
							</tr>
							<tr>
								<td class="">7</td>
								<td class="">26/09/2561</td>
								<td class="">User_01</td>
								<td class=""><a class="" >FileNamePDF.pdf</a></td>
							</tr>
							<tr>
								<td class="">8</td>
								<td class="">26/09/2561</td>
								<td class="">User_01</td>
								<td class=""><a class="" >FileNamePDF.pdf</a></td>
							</tr>
						</tbody>
					</table>
					
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row">
						<div class="col-md-10 text-right"></div>
						<div class="col-md-2">
							<button type="button" class="btn btn-primary width100" data-dismiss="modal">ปิด</button>
						</div>
					</div>
					</div>
				</div>
			</div>
			</div>
		</div>
	</div>

	<!-- dialog - ประเภทสัญญา แบบสามัญทั่วไป -->
	<div class="modal fade" id="modal_common" role="dialog">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title" align="center">ประวัติการเปลี่ยนแปลง นำไฟล์เข้า<span></span></h4>
				</div>
				<div class="modal-body">
				<div class="ex1">
				<div class="col-sm-12">
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="col-sm-2"><lable>ประเภทสัญญา</lable></div>
					<div class="col-sm-4" style="padding-left: 0px;">
						<select class="form-control">
							<option value="">Individual Life</option>
						</select>
					</div>
					<div class="col-sm-2"><label>จำนวนเงินทุน(บาท)</label></div>
					<div class="col-sm-4" style="padding-left: 0px;"><input type="text" class="form-control" value="7,500,000" disabled/></div>
					<div class="text-center" style="padding: 50px 0"></div>
					<div class="panel panel-primary">
						<div class="panel-heading">
							<p class="margin0">
								<B>รายการประเภทผลิตภัณฑ์ตามประเภทสัญญา</B>
							</p>
						</div>
						<div class="panel-body">
							<table id="tb_modal_common" class="table table-striped table-bordered text-center">
						<thead>
							<tr>
								<th width="3%" class="text-center bg-primary vertical-middle" style="border-right: none;"></th>
								<th width="47%" class="text-center bg-primary vertical-middle" style="border-right: none;">ประเภทกรมธรรม์</th>
								<th width="50%" class="text-center bg-primary vertical-middle" style="border-right: none;">ประเภทผลิตภัณฑ์</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td class=""></td>
								<td class=" left"><div class="text-left">Ordinary</div></td>
								<td class=" left"><div class="text-left">Simple Endowment</div></td>
							</tr>
							<tr>
								<td class=""></td>
								<td class=" left"><div class="text-left">Ordinary</div></td>
								<td class=" left"><div class="text-left">Simple Endowment</div></td>
							</tr>
							<tr>
								<td class=""></td>
								<td class=" left"><div class="text-left">Ordinary</div></td>
								<td class=" left"><div class="text-left">Simple Endowment</div></td>
							</tr>
							<tr>
								<td class=""></td>
								<td class=" left"><div class="text-left">Ordinary</div></td>
								<td class=" left"><div class="text-left">Simple Endowment</div></td>
							</tr>
							<tr>
								<td class=""></td>
								<td class=" left"><div class="text-left">Ordinary</div></td>
								<td class=" left"><div class="text-left">Simple Endowment</div></td>
							</tr>
							<tr>
								<td class=""></td>
								<td class=" left"><div class="text-left">Ordinary</div></td>
								<td class=" left"><div class="text-left">Simple Endowment</div></td>
							</tr>
						</tbody>
					</table>
						</div>
					</div>
					
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row">
						<div class="col-md-10 text-right"></div>
						<div class="col-md-2">
							<button type="button" class="btn btn-primary width100" data-dismiss="modal">ปิด</button>
						</div>
					</div>
					</div>
				</div>
			</div>
			</div>
		</div>
	</div>