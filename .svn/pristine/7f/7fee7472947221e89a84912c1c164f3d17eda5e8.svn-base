<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Policy Wording</title>

</head>
<body>
<div id="policy_OL">
						<div class="text-center" style="padding: 20px 0"></div>
						<font style="color:red">* ห้ามนำเข้าไฟล์ขนาดเกิน 30 MB </font>
						<div id="div_policyOL">
						<table class="table table-bordered borderBlack" id="Policy_Table_OL" style="width:100%;">
							<thead>
								<tr>
									<th class="text-center bg-primary borderBlack" width="30" style="vertical-align: middle;"></th>	
									<th class="text-center bg-primary borderBlack" width="50" style="vertical-align: middle;">ลำดับ</th>							
									<th class="text-center verticalCenter bg-primary borderBlack" width="210">Policy Name</th>
									<th class="text-center verticalCenter bg-primary borderBlack" width="70">นำเข้าไฟล์<br>(PDF)</th>
									<th class="text-center verticalCenter bg-primary borderBlack" width="30">ล้าง</th>
									<th class="text-center verticalCenter bg-primary borderBlack" width="70">นำเข้าไฟล์<br>(MS Word)</th>
									<th class="text-center verticalCenter bg-primary borderBlack" width="30">ล้าง</th>
									<!-- <th class="text-center verticalCenter bg-primary borderBlack" width="30">ดาวน์<br>โหลด</th> -->
									<th class="text-center verticalCenter bg-primary borderBlack" width="20">ประวัติ
									</th>
								</tr>
							</thead>
							<tbody>
							</tbody>
						</table>
						</div>

						<div class="text-center" style="padding: 10px 0"></div>

						<div class="text-center" style="padding: 10px 0"></div>
						<div class="row">
							<div class="col-md-4">
								<div class="col-md-6" style="padding-left: 0;">
									<!-- <button class="btn btn-primary width100"
										onclick="addPolicyNew_OL();">เพิ่มรายการ</button> -->
								</div>
								<div class="col-md-6">
									<!-- <button class="btn btn-primary width100" onclick="confirmDeletePolicy_OL();">ลบรายการ</button> -->
								</div>
							</div>
							<div class="col-md-4"></div>
							<div class="col-md-4">
								<div class="col-md-6">
									<button class="btn btn-primary width100" onclick="bt_policy_OL_Confirm();">บันทึก</button>
								</div>
								<div class="col-md-6" style="padding-right: 0">
									<button class="btn btn-primary width100" data-dismiss="modal" data-toggle="modal"
											data-target="#cancelBoxCL_Policy_OL">ยกเลิก</button>
								</div>
							</div>
						</div>
					</div>

	<!-- modal upload -->
	<div class="modal fade" id="modal_upload_pdf_OL" role="dialog">
		<div class="modal-dialog">

			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">นำเข้าไฟล์ (PDF): <span></span></h4>
				</div>
				<div class="modal-body">
				<input type="hidden" name="pdfID_Policy_OL" id="pdfID_Policy_OL" value=""/>
				<!-- upload -->
				
				<!-- ไฟล์ใหม่ -->
				<div class="table_width1">
					<div class="row">
						<div class="col-md-12">
							<div class="input-group">
								<span>
								 <input type="radio" id="upload1_OL" name="uploadPopup_OL" onclick="displayPolicyValueOL_popup();" checked> นำเข้า
								</span>
							</div>
						</div>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row">
						<div class="input-group col-xs-12">
							<input type="hidden" id="base64_filePDF_OL" /> 
							<input type="file" accept=".pdf,application/pdf" id="select_pdffile_policy1_OL_modal" name="select_pdffile_policy1_OL" style="display: none">
							<input type="text" class="form-control" id="input_pdffile_policy1_OL_modal" placeholder="" readonly>
							<span class="input-group-btn">
							<button class="btn btn-default btn-primary" type="button" id="btn_pdf_policy1_OL_modal"  onclick="uploadfile_policy_pdf_OL(2);">เลือกไฟล์</button>
							</span>
						</div>						
					</div>
					<div class="text-center" style="padding: 10px 0"></div>					
				</div>
				
				<!-- ไฟล์เดิม -->
				<div class="table_width1">
					<div class="row">
						<div class="col-md-12">
							<div class="input-group">
								<span>
								 <input type="radio" id="upload2_OL" name="uploadPopup_OL" onclick="displayPolicyValueOL_popup();"> ไฟล์เดิม
								</span>
							</div>
						</div>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row">
						<div class="datatbl_PolicyFile_OL">
						<table class="table table-bordered" id="tbl_PolicyFile_OL">
							<thead>
								<tr class="bg-primary">
									<th class="text-center" width="20%" style="border-right:none;">เลือก</th>
									<th class="text-center" width="20%" style="border-right:none;">ดูข้อมูล</th>
									<th class="text-left" width="60%">ไฟล์ (PDF)</th>									
								</tr>
							</thead>
							<tbody>
							</tbody>
						</table>
					</div>						
					</div>
					<div class="text-center" style="padding: 10px 0"></div>					
				</div>
				
				<!-- button -->
					<div class="row" align="center">						
							<button type="button" class="btn btn-primary" id="btn_submit_fileuploadPolicy_OL"  data-toggle="modal">ตกลง</button>
							<input type="hidden" id="show_modal_selectPolicy_pdf_OL" />							
							<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>												
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<!-- upload word file -->
		<div class="modal fade" id="modal_upload_word_OL" role="dialog">
		<div class="modal-dialog">

			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">นำเข้าไฟล์ (MS Word): <span></span></h4>
				</div>
				
				<div class="modal-body">				
				<input type="hidden" name="wordID_Policy_OL" id="wordID_Policy_OL" value=""/>
				<!-- upload -->
				
				<!-- ไฟล์ใหม่ -->				
				<div class="table_width1">
					<div class="row">
						<div class="col-md-12">
							<div class="input-group">
								<span>
								 <input type="radio" id="uploadWord1_OL" name="uploadPopupWord_OL" onclick="displayPolicyValueWordOL_popup();" checked> นำเข้า
								</span>
							</div>
						</div>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row">
						<div class="input-group col-xs-12">
							<input type="hidden" id="base64_fileDOC_OL" /> 
							<input type="file" accept=".odt,.doc,.docx,application/msword" id="select_wordfile_policy1_OL_modal" name="select_wordfile_policy1_OL" style="display: none">
							<input type="text" class="form-control" id="input_wordfile_policy1_OL_modal" placeholder="" readonly>
							<span class="input-group-btn">
							<button class="btn btn-default btn-primary" type="button" id="btn_word_policy1_OL_modal"  onclick="uploadfile_policy_word_OL(1);">เลือกไฟล์</button>
							</span>
						</div>						
					</div>
					<div class="text-center" style="padding: 10px 0"></div>					
				</div>
				
				<!-- ไฟล์เดิม -->
				<div class="table_width1">
					<div class="row">
						<div class="col-md-12">
							<div class="input-group">
								<span>
								 <input type="radio" id="uploadWord2_OL" name="uploadPopupWord_OL" onclick="displayPolicyValueWordOL_popup();"> ไฟล์เดิม
								</span>
							</div>
						</div>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row">
						<div class="datatbl_PolicyFileWord_OL">
						<table class="table table-bordered" id="tbl_PolicyFileWord_OL">
							<thead>
								<tr class="bg-primary">
									<th class="text-center" width="20%" style="border-right:none;">เลือก</th>
									<th class="text-center" width="20%" style="border-right:none;">ดูข้อมูล</th>
									<th class="text-left" width="60%">ไฟล์ (MS Word)</th>											
								</tr>
							</thead>
							<tbody>
							</tbody>
						</table>
					</div>						
					</div>
					<div class="text-center" style="padding: 10px 0"></div>					
				</div>
				
				<!-- button -->
					<div class="row" align="center">						
							<button type="button" class="btn btn-primary" id="btn_submit_fileuploadPolicyWord_OL"  data-toggle="modal">ตกลง</button>
							<input type="hidden" id="show_modal_selectPolicy_doc_OL" />								
							<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>												
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<!-- ดูประวัติ -->
	<div class="modal fade" id="modal_historyPolicy_OL" role="dialog">
		<div class="modal-dialog modal-lg">

			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">ประวัติการเปลี่ยนแปลง นำเข้าไฟล์: <span></span></h4>
				</div>
				
				<div class="modal-body">				
				<input type="hidden" name="History_Policy_OL" id="History_Policy_OL" value=""/>
												
				<!-- history -->
				<div class="table_width1">			
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row">
						<div class="datatbl_Historypolicy_OL">
						<table class="table table-bordered" id="tbl_HistoryPolicy_OL">
							<thead>
								<tr class="bg-primary">
									<th class="text-center border-right-none" width="8%">ครั้งที่</th>
									<th class="text-center border-right-none" width="14%">วันที่<br>เปลี่ยนแปลง</th>
									<th class="text-center border-right-none" width="13%">ผู้เปลี่ยนแปลง</th>
									<th class="text-center border-right-none" width="25%">นำเข้าไฟล์ (PDF)</th>
									<th class="text-center border-right-none" width="25%">นำเข้าไฟล์ (MS Word)</th>
									<!-- <th class="text-center border-right-none" width="8%">PDF</th>
									<th class="text-center vertical-middle">MS word</th> -->												
								</tr>
							</thead>
							<tbody>
							</tbody>
						</table>
					</div>						
					</div>
					<div class="text-center" style="padding: 10px 0"></div>					
				</div>
				
				<!-- button -->
					<div class="row" align="center">																		
							<button type="button" class="btn btn-primary" data-dismiss="modal">&nbsp;&nbsp;&nbsp;&nbsp;ปิด&nbsp;&nbsp;&nbsp;&nbsp;</button>												
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<!-- ปุ่มยกเลิก -->
	<div id="cancelBoxCL_Policy_OL" class="modal fade bd-example-modal-sm"
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