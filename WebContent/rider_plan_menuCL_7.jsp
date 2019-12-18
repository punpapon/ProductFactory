<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Policy Wording</title>

</head>
<body>
<div id="policy_CL">
						<div class="text-center" style="padding: 20px 0"></div>
							<font style="color:red">* ห้ามนำเข้าไฟล์ขนาดเกิน 30 MB </font>
						<div id="div_policyCL">
						<table class="table table-bordered borderBlack" id="Policy_Table_CL" style="width:100%;">
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
								<!-- <tr id="tbody_policy1">
									<td id="imgOK_policy1" class="text-center borderBlack td_disabled"></td>
									<td class="text-center borderBlack"										
										style="vertical-align: middle;"><span class="spanPolicy_CL" id="OrderID1">1</span></td>									
									<td class="borderBlack verticalCenter"><input type="text" name="policy_name[]" id="policy_name1" class="form-control margin-padding0 text-center;" value="สรุปสาระสำคัญโดยย่อ" readonly></td>									
									<td class="borderBlack" align="center">
										<div class="input-group col-xs-12">
											<div id="div_pdf_policy1_CL" class="filename">None</div>			
											<a class="open-AddUploadDialog_pdf" data-toggle="modal" data-id="1" href="#modal_upload_pdf"><button class="btn btn-default btn-primary" type="button" id="btn_pdf_policy1_CL">...</button></a> 									
									    </div>
									</td>
									<td class="text-center borderBlack vertical-middle">
										<a id="span_reset_pdf1" class="active_grey" onclick="resetFilePolicy_CL(1,'pdf');"><span class='glyphicon glyphicon-refresh'></span></a>
									</td>
									<td class="borderBlack" align="center">
										<div class="input-group col-xs-12">
											<div id="div_word_policy1_CL" class="filename">None</div>
											<a class="open-AddUploadDialog_word" data-toggle="modal" data-id="1" href="#modal_upload_word"><button class="btn btn-default btn-primary" type="button" id="btn_word_policy1_CL">...</button></a>									
										</div>
									</td>
									<td class="text-center borderBlack vertical-middle">
										<a id="span_reset_word1" class="active_grey" onclick="resetFilePolicy_CL(1,'word');"><span class='glyphicon glyphicon-refresh'></span></a>
									</td>									
									<td class="text-center borderBlack">
										<a id="span_download1" class="active_grey"><span class='glyphicon glyphicon-download-alt'></span></a>
									</td>
									<td class="text-center borderBlack vertical-middle">
										<a id="span_history1" class="active_grey open-HistoryDialog_CL" data-toggle="modal" data-id="1" href="#modal_historyPolicy_CL"><span class='glyphicon glyphicon-time'></span></a>										
									</td>										
								</tr>
								<tr id="tbody_policy2">					    
									<td id="imgOK_policy2" class="text-center borderBlack td_disabled"></td>
									<td class="text-center borderBlack"										
										style="vertical-align: middle;"><span class="spanPolicy_CL" id="OrderID2">2</span></td>									
									<td class="borderBlack verticalCenter"><input type="text" name="policy_name[]" id="policy_name2" class="form-control margin-padding0 text-center;" value="ข้อกำหนดการจ่ายผลประโยชน์" readonly></td>									
									<td class="borderBlack" align="center">
										<div class="input-group col-xs-12">
											<div id="div_pdf_policy2_CL" class="filename">None</div>			
											<a class="open-AddUploadDialog_pdf" data-toggle="modal" data-id="2" href="#modal_upload_pdf"><button class="btn btn-default btn-primary" type="button" id="btn_pdf_policy2_CL">...</button></a> 									
									    </div>
									</td>
									<td class="text-center borderBlack vertical-middle">
										<a id="span_reset_pdf2" class="active_grey" onclick="resetFilePolicy_CL(2,'pdf');"><span class='glyphicon glyphicon-refresh'></span></a>
									</td>	
									<td class="borderBlack" align="center">
										<div class="input-group col-xs-12">
											<div id="div_word_policy2_CL" class="filename">None</div>
											<a class="open-AddUploadDialog_word" data-toggle="modal" data-id="2" href="#modal_upload_word"><button class="btn btn-default btn-primary" type="button" id="btn_word_policy2_CL">...</button></a>									
										</div>
									</td>
									<td class="text-center borderBlack vertical-middle">
										<a id="span_reset_word2" class="active_grey" onclick="resetFilePolicy_CL(2,'word');"><span class='glyphicon glyphicon-refresh'></span></a>
									</td>																		
									<td class="text-center borderBlack">
										<a id="span_download2" class="active_grey"><span class='glyphicon glyphicon-download-alt'></span></a>
									</td>
									<td class="text-center borderBlack vertical-middle">
										<a id="span_history2" class="active_grey open-HistoryDialog_CL" data-toggle="modal" data-id="2" href="#modal_historyPolicy_CL"><span class='glyphicon glyphicon-time'></span></a>										
									</td>										
								</tr>
								<tr id="tbody_policy3">					    
									<td id="imgOK_policy3" class="text-center borderBlack td_disabled"></td>
									<td class="text-center borderBlack"										
										style="vertical-align: middle;"><span class="spanPolicy_CL" id="OrderID3">3</span></td>									
									<td class="borderBlack verticalCenter"><input type="text" name="policy_name[]" id="policy_name3" class="form-control margin-padding0 text-center;" value="หน้าตารางกรมธรรม์" readonly></td>									
									<td class="borderBlack" align="center">
										<div class="input-group col-xs-12">
											<div id="div_pdf_policy3_CL" class="filename">None</div>			
											<a class="open-AddUploadDialog_pdf" data-toggle="modal" data-id="3" href="#modal_upload_pdf"><button class="btn btn-default btn-primary" type="button" id="btn_pdf_policy3_CL">...</button></a> 									
									    </div>
									</td>
									<td class="text-center borderBlack vertical-middle">
										<a id="span_reset_pdf3" class="active_grey" onclick="resetFilePolicy_CL(3,'pdf');"><span class='glyphicon glyphicon-refresh'></span></a>
									</td>
									<td class="borderBlack" align="center">
										<div class="input-group col-xs-12">
											<div id="div_word_policy3_CL" class="filename">None</div>
											<a class="open-AddUploadDialog_word" data-toggle="modal" data-id="3" href="#modal_upload_word"><button class="btn btn-default btn-primary" type="button" id="btn_word_policy3_CL">...</button></a>									
										</div>
									</td>
									<td class="text-center borderBlack vertical-middle">
										<a id="span_reset_word3" class="active_grey" onclick="resetFilePolicy_CL(3,'word');"><span class='glyphicon glyphicon-refresh'></span></a>
									</td>																		
									<td class="text-center borderBlack vertical-middle">
										<a id="span_history3" class="active_grey open-HistoryDialog_CL" data-toggle="modal" data-id="3" href="#modal_historyPolicy_CL"><span class='glyphicon glyphicon-time'></span></a>										
									</td>										
								</tr>
								<tr id="tbody_policy4">					    
									<td id="imgOK_policy4" class="text-center borderBlack td_disabled"></td>
									<td class="text-center borderBlack"										
										style="vertical-align: middle;"><span class="spanPolicy_CL" id="OrderID4">4</span></td>									
									<td class="borderBlack verticalCenter"><input type="text" name="policy_name[]" id="policy_name4" class="form-control margin-padding0 text-center;" value="เงื่อนไขทั่วไปแห่งกรมธรรม์" readonly></td>									
									<td class="borderBlack" align="center">
										<div class="input-group col-xs-12">
											<div id="div_pdf_policy4_CL" class="filename">None</div>			
											<a class="open-AddUploadDialog_pdf" data-toggle="modal" data-id="4" href="#modal_upload_pdf"><button class="btn btn-default btn-primary" type="button" id="btn_pdf_policy4_CL">...</button></a> 									
									    </div>
									</td>
									<td class="text-center borderBlack vertical-middle">
										<a id="span_reset_pdf4" class="active_grey" onclick="resetFilePolicy_CL(4,'pdf');"><span class='glyphicon glyphicon-refresh'></span></a>
									</td>
									<td class="borderBlack" align="center">
										<div class="input-group col-xs-12">
											<div id="div_word_policy4_CL" class="filename">None</div>
											<a class="open-AddUploadDialog_word" data-toggle="modal" data-id="4" href="#modal_upload_word"><button class="btn btn-default btn-primary" type="button" id="btn_word_policy4_CL">...</button></a>									
										</div>
									</td>
									<td class="text-center borderBlack vertical-middle">
										<a id="span_reset_word4" class="active_grey" onclick="resetFilePolicy_CL(4,'word');"><span class='glyphicon glyphicon-refresh'></span></a>
									</td>															
									<td class="text-center borderBlack vertical-middle">
										<a id="span_history4" class="active_grey open-HistoryDialog_CL" data-toggle="modal" data-id="4" href="#modal_historyPolicy_CL"><span class='glyphicon glyphicon-time'></span></a>									
									</td>										
								</tr>
								<tr id="tbody_policy5">					    
									<td id="imgOK_policy5" class="text-center borderBlack td_disabled"></td>
									<td class="text-center borderBlack"										
										style="vertical-align: middle;"><span class="spanPolicy_CL" id="OrderID5">5</span></td>									
									<td class="borderBlack verticalCenter"><input type="text" name="policy_name[]" id="policy_name5" class="form-control margin-padding0 text-center;" value="ตารางกรมธรรม์" readonly></td>									
									<td class="borderBlack" align="center">
										<div class="input-group col-xs-12">
											<div id="div_pdf_policy5_CL" class="filename">None</div>			
											<a class="open-AddUploadDialog_pdf" data-toggle="modal" data-id="5" href="#modal_upload_pdf"><button class="btn btn-default btn-primary" type="button" id="btn_pdf_policy5_CL">...</button></a> 									
									    </div>
									</td>
									<td class="text-center borderBlack vertical-middle">
										<a id="span_reset_pdf5" class="active_grey" onclick="resetFilePolicy_CL(5,'pdf');"><span class='glyphicon glyphicon-refresh'></span></a>
									</td>
									<td class="borderBlack" align="center">
										<div class="input-group col-xs-12">
											<div id="div_word_policy5_CL" class="filename">None</div>
											<a class="open-AddUploadDialog_word" data-toggle="modal" data-id="5" href="#modal_upload_word"><button class="btn btn-default btn-primary" type="button" id="btn_word_policy5_CL">...</button></a>									
										</div>
									</td>
									<td class="text-center borderBlack vertical-middle">
										<a id="span_reset_word5" class="active_grey" onclick="resetFilePolicy_CL(5,'word');"><span class='glyphicon glyphicon-refresh'></span></a>
									</td>																	
									<td class="text-center borderBlack vertical-middle">
										<a id="span_history5" class="active_grey open-HistoryDialog_CL" data-toggle="modal" data-id="5" href="#modal_historyPolicy_CL"><span class='glyphicon glyphicon-time'></span></a>										
									</td>										
								</tr>
								<tr id="tbody_policy6">					    
									<td id="imgOK_policy6" class="text-center borderBlack td_disabled"></td>
									<td class="text-center borderBlack"										
										style="vertical-align: middle;"><span class="spanPolicy_CL" id="OrderID6">6</span></td>									
									<td class="borderBlack verticalCenter"><input type="text" name="policy_name[]" id="policy_name6" class="form-control margin-padding0 text-center;" value="ตารางจำนวนเอาประกันภัยที่ลดลง" readonly></td>									
									<td class="borderBlack" align="center">
										<div class="input-group col-xs-12">
											<div id="div_pdf_policy6_CL" class="filename">None</div>			
											<a class="open-AddUploadDialog_pdf" data-toggle="modal" data-id="6" href="#modal_upload_pdf"><button class="btn btn-default btn-primary" type="button" id="btn_pdf_policy6_CL">...</button></a> 									
									    </div>
									</td>
									<td class="text-center borderBlack vertical-middle">
										<a id="span_reset_pdf6" class="active_grey" onclick="resetFilePolicy_CL(6,'pdf');"><span class='glyphicon glyphicon-refresh'></span></a>
									</td>
									<td class="borderBlack" align="center">
										<div class="input-group col-xs-12">
											<div id="div_word_policy6_CL" class="filename">None</div>
											<a class="open-AddUploadDialog_word" data-toggle="modal" data-id="6" href="#modal_upload_word"><button class="btn btn-default btn-primary" type="button" id="btn_word_policy6_CL">...</button></a>									
										</div>
									</td>
									<td class="text-center borderBlack vertical-middle">
										<a id="span_reset_word6" class="active_grey" onclick="resetFilePolicy_CL(6,'word');"><span class='glyphicon glyphicon-refresh'></span></a>
									</td>															
									<td class="text-center borderBlack vertical-middle">
										<a id="span_history6" class="active_grey open-HistoryDialog_CL" data-toggle="modal" data-id="6" href="#modal_historyPolicy_CL"><span class='glyphicon glyphicon-time'></span></a>										
									</td>										
								</tr>
								<tr id="tbody_policy7">					    
									<td id="imgOK_policy7" class="text-center borderBlack td_disabled"></td>
									<td class="text-center borderBlack"										
										style="vertical-align: middle;"><span class="spanPolicy_CL" id="OrderID7">7</span></td>									
									<td class="borderBlack verticalCenter"><input type="text" name="policy_name[]" id="policy_name7" class="form-control margin-padding0 text-center;" value="ตารางมูลค่ากรมธรรม์" readonly></td>									
									<td class="borderBlack" align="center">
										<div class="input-group col-xs-12">
											<div id="div_pdf_policy7_CL" class="filename">None</div>			
											<a class="open-AddUploadDialog_pdf" data-toggle="modal" data-id="7" href="#modal_upload_pdf"><button class="btn btn-default btn-primary" type="button" id="btn_pdf_policy7_CL">...</button></a> 									
									    </div>
									</td>
									<td class="text-center borderBlack vertical-middle">
										<a id="span_reset_pdf7" class="active_grey" onclick="resetFilePolicy_CL(7,'pdf');"><span class='glyphicon glyphicon-refresh'></span></a>
									</td>	
									<td class="borderBlack" align="center">
										<div class="input-group col-xs-12">
											<div id="div_word_policy7_CL" class="filename">None</div>
											<a class="open-AddUploadDialog_word" data-toggle="modal" data-id="7" href="#modal_upload_word"><button class="btn btn-default btn-primary" type="button" id="btn_word_policy7_CL">...</button></a>									
										</div>
									</td>
									<td class="text-center borderBlack vertical-middle">
										<a id="span_reset_word7" class="active_grey" onclick="resetFilePolicy_CL(7,'word');"><span class='glyphicon glyphicon-refresh'></span></a>
									</td>																
									<td class="text-center borderBlack vertical-middle">
										<a id="span_history7" class="active_grey open-HistoryDialog_CL" data-toggle="modal" data-id="7" href="#modal_historyPolicy_CL"><span class='glyphicon glyphicon-time'></span></a>										
									</td>										
								</tr>
								<tr id="tbody_policy8">					    
									<td id="imgOK_policy8" class="text-center borderBlack td_disabled"></td>
									<td class="text-center borderBlack"										
										style="vertical-align: middle;"><span class="spanPolicy_CL" id="OrderID8">8</span></td>									
									<td class="borderBlack verticalCenter"><input type="text" name="policy_name[]" id="policy_name8" class="form-control margin-padding0 text-center;" value="หนังสือรับรอง" readonly></td>									
									<td class="borderBlack" align="center">
										<div class="input-group col-xs-12">
											<div id="div_pdf_policy8_CL" class="filename">None</div>			
											<a class="open-AddUploadDialog_pdf" data-toggle="modal" data-id="8" href="#modal_upload_pdf"><button class="btn btn-default btn-primary" type="button" id="btn_pdf_policy8_CL">...</button></a> 									
									    </div>
									</td>
									<td class="text-center borderBlack vertical-middle">
										<a id="span_reset_pdf8" class="active_grey" onclick="resetFilePolicy_CL(8,'pdf');"><span class='glyphicon glyphicon-refresh'></span></a>
									</td>
									<td class="borderBlack" align="center">
										<div class="input-group col-xs-12">
											<div id="div_word_policy8_CL" class="filename">None</div>
											<a class="open-AddUploadDialog_word" data-toggle="modal" data-id="8" href="#modal_upload_word"><button class="btn btn-default btn-primary" type="button" id="btn_word_policy8_CL">...</button></a>									
										</div>
									</td>
									<td class="text-center borderBlack vertical-middle">
										<a id="span_reset_word8" class="active_grey" onclick="resetFilePolicy_CL(8,'word');"><span class='glyphicon glyphicon-refresh'></span></a>
									</td>														
									<td class="text-center borderBlack vertical-middle">
										<a id="span_history8" class="active_grey open-HistoryDialog_CL" data-toggle="modal" data-id="8" href="#modal_historyPolicy_CL"><span class='glyphicon glyphicon-time'></span></a>										
									</td>										
								</tr>							
								<tr id="tbody_policy9">					    
									<td id="imgOK_policy9" class="text-center borderBlack td_disabled"></td>
									<td class="text-center borderBlack"										
										style="vertical-align: middle;"><span class="spanPolicy_CL" id="OrderID9">9</span></td>									
									<td class="borderBlack verticalCenter"><input type="text" name="policy_name[]" id="policy_name9" class="form-control margin-padding0 text-center;" value=" บันทึกสลักหลัง" readonly></td>									
									<td class="borderBlack" align="center">
										<div class="input-group col-xs-12">
											<div id="div_pdf_policy9_CL" class="filename">None</div>			
											<a class="open-AddUploadDialog_pdf" data-toggle="modal" data-id="9" href="#modal_upload_pdf"><button class="btn btn-default btn-primary" type="button" id="btn_pdf_policy9_CL">...</button></a> 									
									    </div>
									</td>
									<td class="text-center borderBlack">
										<a id="span_reset_pdf9" class="active_grey" onclick="resetFilePolicy_CL(9,'pdf');"><span class='glyphicon glyphicon-refresh'></span></a>
									</td>
									<td class="borderBlack" align="center">
										<div class="input-group col-xs-12">
											<div id="div_word_policy9_CL" class="filename">None</div>
											<a class="open-AddUploadDialog_word" data-toggle="modal" data-id="9" href="#modal_upload_word"><button class="btn btn-default btn-primary" type="button" id="btn_word_policy9_CL">...</button></a>									
										</div>
									</td>
									<td class="text-center borderBlack">
										<a id="span_reset_word9" class="active_grey" onclick="resetFilePolicy_CL(9,'word');"><span class='glyphicon glyphicon-refresh'></span></a>
									</td>															
									<td class="text-center borderBlack">
										<a id="span_history9" class="active_grey open-HistoryDialog_CL" data-toggle="modal" data-id="9" href="#modal_historyPolicy_CL"><span class='glyphicon glyphicon-time'></span></a>										
									</td>										
								</tr>			 -->
							</tbody>							
						</table>
						</div>

						<div class="text-center" style="padding: 10px 0"></div>

						<div class="text-center" style="padding: 10px 0"></div>
						<div class="row">
							<div class="col-md-4">
								<div class="col-md-6" style="padding-left: 0;">
									<!-- <button class="btn btn-primary width100"
										onclick="addPolicyNew_CL();">เพิ่มรายการ</button> -->
								</div>
								<div class="col-md-6">
									<!-- <button class="btn btn-primary width100" onclick="confirmDeletePolicy_CL();">ลบรายการ</button> -->
								</div>
							</div>
							<div class="col-md-4"></div>
							<div class="col-md-4">
								<div class="col-md-6">
									<button class="btn btn-primary width100" onclick="bt_policy_CL_Confirm();">บันทึก</button>
								</div>
								<div class="col-md-6" style="padding-right: 0">
									<button class="btn btn-primary width100" data-dismiss="modal" data-toggle="modal"
											data-target="#cancelBoxCL_Policy">ยกเลิก</button>
								</div>
							</div>
						</div>
					</div>

	<!-- modal upload -->
	<div class="modal fade" id="modal_upload_pdf" role="dialog">
		<div class="modal-dialog">

			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">นำเข้าไฟล์ (PDF): <span></span></h4>
				</div>
				<div class="modal-body">
				<input type="hidden" name="pdfID_Policy_CL" id="pdfID_Policy_CL" value=""/>
				<!-- upload -->
				
				<!-- ไฟล์ใหม่ -->
				<div class="table_width1">
					<div class="row">
						<div class="col-md-12">
							<div class="input-group">
								<span>
								 <input type="radio" id="upload1_CL" name="uploadPopup_CL" onclick="displayPolicyValueCL_popup();" checked> นำเข้า
								</span>
							</div>
						</div>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row">
						<div class="input-group col-xs-12">
							<input type="hidden" id="base64_filePDF_CL" /> 
							<input type="file" accept=".pdf,application/pdf" id="select_pdffile_policy1_CL_modal" name="select_pdffile_policy1_CL" style="display: none">
							<input type="text" class="form-control" id="input_pdffile_policy1_CL_modal" placeholder="" readonly>
							<span class="input-group-btn">
							<button class="btn btn-default btn-primary" type="button" id="btn_pdf_policy1_CL_modal"  onclick="uploadfile_policy_pdf(2);">...</button>
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
								 <input type="radio" id="upload2_CL" name="uploadPopup_CL" onclick="displayPolicyValueCL_popup();"> ไฟล์เดิม
								</span>
							</div>
						</div>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row">
						<div class="datatbl_PolicyFile_CL">
						<table class="table table-bordered" id="tbl_PolicyFile_CL">
							<thead>
								<tr class="bg-primary">
									<th class="text-center" width="20%" style="border-right:none;">เลือก</th>
									<th class="text-center" width="20%" style="border-right:none;">ดูข้อมูล</th>
									<th class="text-left" width="60%">ไฟล์ (PDF)</th>									
								</tr>
							</thead>
							<tbody>
								<!-- <tr>
									<td class="text-center"><input type="radio" id="uploadOld1_CL" name="uploadOld_CL" value="FileNamePDF_01.pdf" onclick="selectfile_policy_pdf(this.value);"></td>
									<td class="text-center"><a href="download/FileNamePDF_01.pdf" download><span class='glyphicon glyphicon-eye-open'></span></a></td>
									<td class="text-left">FileNamePDF_01.pdf</td>									
								</tr> -->
															
							</tbody>
						</table>
					</div>						
					</div>
					<div class="text-center" style="padding: 10px 0"></div>					
				</div>
				
				<!-- button -->
					<div class="row" align="center">						
							<button type="button" class="btn btn-primary" id="btn_submit_fileuploadPolicyPdf_CL"  data-toggle="modal">ตกลง</button>
							<input type="hidden" id="show_modal_selectPolicy_pdf" />						
							<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>												
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<!-- upload word file -->
		<div class="modal fade" id="modal_upload_word" role="dialog">
		<div class="modal-dialog">

			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">นำเข้าไฟล์ (MS Word): <span></span></h4>
				</div>
				
				<div class="modal-body">				
				<input type="hidden" name="wordID_Policy_CL" id="wordID_Policy_CL" value=""/>
				<!-- upload -->
				
				<!-- ไฟล์ใหม่ -->				
				<div class="table_width1">
					<div class="row">
						<div class="col-md-12">
							<div class="input-group">
								<span>
								 <input type="radio" id="uploadWord1_CL" name="uploadPopupWord_CL" onclick="displayPolicyValueWordCL_popup();" checked> นำเข้า
								</span>
							</div>
						</div>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row">
						<div class="input-group col-xs-12">
							<input type="hidden" id="base64_fileDOC_CL" /> 
							<input type="file" accept=".odt,.doc,.docx,application/msword" id="select_wordfile_policy1_CL_modal" name="select_wordfile_policy1_CL" style="display: none">
							<input type="text" class="form-control" id="input_wordfile_policy1_CL_modal" placeholder="" readonly>
							<span class="input-group-btn">
							<button class="btn btn-default btn-primary" type="button" id="btn_word_policy1_CL_modal"  onclick="uploadfile_policy_word(1);">...</button>
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
								 <input type="radio" id="uploadWord2_CL" name="uploadPopupWord_CL" onclick="displayPolicyValueWordCL_popup();"> ไฟล์เดิม
								</span>
							</div>
						</div>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row">
						<div class="datatbl_PolicyFileWord_CL">
						<table class="table table-bordered" id="tbl_PolicyFileWord_CL">
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
							<button type="button" class="btn btn-primary" id="btn_submit_fileuploadPolicyWord_CL"  data-toggle="modal">ตกลง</button>
							<input type="hidden" id="show_modal_selectPolicy_doc" />							
							<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>												
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<!-- ดูประวัติ -->
	<div class="modal fade" id="modal_historyPolicy_CL" role="dialog">
		<div class="modal-dialog modal-lg">

			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">ประวัติการเปลี่ยนแปลง นำเข้าไฟล์: <span></span></h4>
				</div>
				
				<div class="modal-body">				
				<input type="hidden" name="History_Policy_CL" id="History_Policy_CL" value=""/>
												
				<!-- history -->
				<div class="table_width1">			
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row">
						<div class="datatbl_Historypolicy_CL">
						<table class="table table-bordered" id="tbl_HistoryPolicy_CL">
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
	<div id="cancelBoxCL_Policy" class="modal fade bd-example-modal-sm"
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
								<button type="button" class="btn btn-primary" onclick="cancelPage('rider_plan.jsp');">ยืนยัน</button>
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