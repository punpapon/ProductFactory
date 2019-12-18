$(document).ready(function() {
	$("#UW_RuleNav").removeClass('collapse');
});
/** ************ Validate key input data ******************** */ 
 var Statuesave = "Y";
 var nameTab	= "";
 // var tempdata = "";
 $("#div_main_menu_TC_1 *").change(function(event){
	 nameTab 	= "menu_TC_1";
	 Statuesave = "N";
 });
 $("#div_main_menu_TC_2 *").change(function(event){
	 nameTab 	= "menu_TC_2";
	 Statuesave = "N";
 });
 $("#div_main_menu_TC_3 *").change(function(event){
	 nameTab 	= "menu_TC_3";
	 Statuesave = "N";
 });
 $("#form_ageCapitalProtection *").change(function(event){
	 // //
	 nameTab 	= "page2_1";
	 Statuesave = "N";
	 // $("#Appendix_code_copy").val("");
	 // $("#Version_id_copy").val("");
 });
 $("#form_ageCapitalProtectionTab2 *").change(function(event){
	 nameTab 	= "page2_2";
	 Statuesave = "N";
 });
 $("#form_ageCapitalProtectionTab1 *").change(function(event){
	
	 nameTab 	= "page2_1";
		 Statuesave = "N";
		 
	 });
 $("#checkkeyup_Cancel").click(function(){
	// //
		var element = document.getElementById(data);
			element.classList.remove("active");
		var element = document.getElementById(nameTab);
			element.classList.add("active");
});
 $("#menu_listAppendix_1").click(function(){
	 $(".autoComma").autoNumeric('init',{vMin: '0', vMax: '999999999'});
		$.ajax({
	        type: "POST",
	        url : "UW_GetData_Servlet",
	        data: {
	        	method 	: "getAppendixVersion"
	        },       
	        success : function(response) {	
	        	
	        	ShowAppendixVersion(response);
	        },
	        error : function(response) {	
	        	console.log("get product case error.")
	        }
		});
});
 $("#page2_2").click(function(){
	 	
		if (Statuesave == "N" && nameTab != "page2_2") {
			$("#modal_Checkkeyup").modal("show");
		    data = "page2_2";
		}else{
			
			nameTab 	= "page2_2";
			document.getElementById("form_ageCapitalProtection").style.display = "none";
			document.getElementById("page_002_2").style.display = "block";
			
			
			change_disablefield_V02();
			
			
			$("#bt1_appr_med")   .show();
			$("#bt1_not_appr_med")   .show();
			
			$("#bt1_req_med")   .show();
			$("#bt1_req_edit_app").hide();
			$("#bt1_his_med")   .show();
			$("#bt1_req_edit_app").hide()	;
			$("#bt1_not_appr_med")   .show();
			Statuesave == "Y"
				
			
		}
		
		
 })
 $("#page2_1").click(function(){
	 
	 $("#checkkeyup_OK").attr("disabled", false);
		if (Statuesave == "N" && nameTab != "page2_1") {
			$("#modal_Checkkeyup").modal("show");
		    data = "page2_1";
		}else{
			
			document.getElementById("page_002_1").style.display = "block";
			document.getElementById("form_ageCapitalProtection").style.display = "block";
			document.getElementById("page_002_2").style.display = "none";
			nameTab 	= "page2_1";
			
			
			var Appendix_Code = $("#appendixValue").val();			
			var Version_ID=$("#appendixVersion").val();
			var IsApproved=$("#appendix_approved_status").val()	;
			
			$.ajax({
		        type: "POST",
		        url : "UW_GetData_Servlet",
		        data: {
		        	method 	: "getAppendixVersionDetail",
		        	Appendix_Code : Appendix_Code,
		        	Version_ID : Version_ID
		        },       
		        success : function(response) {	
		        	showAppendixDetail(response,"",Version_ID,IsApproved);
		        	
		        	if(row_status_app!="รออนุมัติ"&&IsApproved=="false"){
		        		
		    			$("#appendixValue")			.attr("disabled", false);
		    			$("#appendixValueName")		    .attr("disabled", false);
		    			$("#appendixName")			.attr("disabled", false);
		    			$("#appendixVersion")		.attr("disabled", false);
		    			$("#appendixVersionname")	    .attr("disabled", true);
		    			$("#CoverageWarningAmt")	.attr("disabled", false);
		    			$("#start_date")			.attr("disabled", false);
		    			$("#end_date")				.attr("disabled", false);
		    			
		    			$("#form_ageCapitalProtectionTab1 *").removeClass("disabledAll_NotFade");
		    			$("#form_ageCapitalProtectionTab2 *").removeClass("disabledAll_NotFade");
		    			
		    			
		    			$("#bt_add_age").attr("disabled", false);
		    			$("#bt_add_sum").attr("disabled", false);
		    		}
		        	if(status_copying=="edit"){
		    			$("#appendixValueName")     .attr("disabled", true);
		    			$("#appendixVersionname")   .attr("disabled", true);
		    		}
		        	Statuesave == "Y"
		        		
		        	SetUserPermissionUW()	;
		        },
		        error : function(response) {	
		        	console.log("get showAppendixDetail case error.")
		        }
			});
			
			
		}
		$("#bt1_appr_med")   .hide();
		$("#bt1_not_appr_med")   .hide();
		
 })
$( document ).ready(function() {
	// SetUserPermissionUW();
	nameTab 	= "menu_TC_1";
	Statuesave = "Y";
	$("#bt1_req_edit_app").hide();
	$("#bt_delete_row_listAppendix")    	.attr("disabled", true);
	$("#bt_req_row_listAppendix")     		.attr("disabled", true);
	$("#bt_his_row_listAppendix")     		.attr("disabled", true);
	$("#bt_approve_row_listAppendix")     	.attr("disabled", true);
	$("#bt_not_approve_row_listAppendix")   .attr("disabled", true);
	$("#bt_cancel_row_listAppendix")     	.attr("disabled", true);
	$("#bt_cancel_row_listAppendixU")     	.attr("disabled", true);
	$("#bt_delete_sum")     	.attr("disabled", true);
	
	$("#bt1_appr_med")   .hide();
	$("#bt1_not_appr_med")   .hide();
	
	
});
 
 function showAppendixDetailWhenDontSave(value,e,Version_ID,IsApproved) {
	 //
	 for(var i = 0; i < value.AppendixVersionALL_Data.length; i++){
	    $("#appendixValue")			.val(value.AppendixVersionALL_Data[i].Appendix_code).attr("disabled", true);
		$("#appendixValueName")		.val(value.AppendixVersionALL_Data[i].Abb_name).attr("disabled", true);
		$("#appendixName")			.val(value.AppendixVersionALL_Data[i].Appendix_name).attr("disabled", true);
		$("#appendixVersion")		.val((value.AppendixVersionALL_Data[i].Version_id)).attr("disabled", true);
		$("#appendixVersionname")	.val((value.AppendixVersionALL_Data[i].Version_name)).attr("disabled", true);
		$("#CoverageWarningAmt")	.val(value.AppendixVersionALL_Data[i].Hq_med_exam_amt).attr("disabled", true);
		$("#start_date")			.val(value.AppendixVersionALL_Data[i].Eff_date).attr("disabled", true).addClass("disabledAll_NotFade");
		$("#end_date")				.val(value.AppendixVersionALL_Data[i].Exp_date).attr("disabled", true).addClass("disabledAll_NotFade");
		$("#coverage_capital_val")	.text(value.AppendixVersionALL_Data[i].Hq_med_exam_amt)
	 }
}

 function bt_changeTab() {
	 //
	 ;
		if (data == "page2_2") {
			
			
			document.getElementById("form_ageCapitalProtection").style.display = "none";
			document.getElementById("page_002_2").style.display = "block";
		
			change_disablefield_V02();
			
			var Appendix_Code 	= $("#appendixValue").val();			
			var Version_ID		=$("#appendixVersion").val();
			var IsApproved		=$("#appendix_approved_status").val()	;
			
			$("#modal_Checkkeyup").modal("hide");
			Statuesave = "Y";
			
			$.ajax({
		        type: "POST",
		        url : "UW_GetData_Servlet",
		        data: {
		        	method 			: "getAppendixVersionDetail",
		        	Appendix_Code 	: Appendix_Code,
		        	Version_ID 		: Version_ID
		        },       
		        success : function(response) {	
		        	;
		        	showAppendixDetailWhenDontSave(response,"",Version_ID,IsApproved);
		        	$("#bt1_req_med")				.show();
		        	$("#bt1_his_med")				.show();
		        	$("#bt1_req_med")				.attr("disabled", false);
		        	$("#bt1_req_edit_app").hide();
		        },
		        error : function(response) {	
		        	console.log("get showAppendixDetail case error.")
		        }
			});
		}else if (data == "page2_1") {
			
			$("#modal_Checkkeyup").modal("hide");
			Statuesave = "Y";
			
			if (Statuesave == "N" && nameTab != "page2_1") {
				$("#modal_Checkkeyup").modal("show");
				// $("#checkkeyup_OK").attr("disabled",true);
			    data = "page2_1";
				// checkkeyup_Cancel2(data);
			}else{
				
				document.getElementById("page_002_1").style.display = "block";
				document.getElementById("form_ageCapitalProtection").style.display = "block";
				document.getElementById("page_002_2").style.display = "none";
				// document.getElementById("bt_approval").style.display =
				// "none";
				nameTab 	= "page2_1";
				
				
				var Appendix_Code = $("#appendixValue").val();			
				var Version_ID=$("#appendixVersion").val();
				var IsApproved=$("#appendix_approved_status").val()	;
				// Version_ID
				$.ajax({
			        type: "POST",
			        url : "UW_GetData_Servlet",
			        data: {
			        	method 	: "getAppendixVersionDetail",
			        	Appendix_Code : Appendix_Code,
			        	Version_ID : Version_ID
			        },       
			        success : function(response) {	
			        	;
			        	showAppendixDetail(response,"",Version_ID,IsApproved);
			        	if(IsApproved=="false"){
			        		
			    			$("#appendixValue")			.attr("disabled", false);
			    			$("#appendixValueName")			.attr("disabled", false);
			    			$("#appendixName")			.attr("disabled", false);
			    			$("#appendixVersion")		.attr("disabled", false);
			    			$("#appendixVersionname")		.attr("disabled", true);
			    			$("#CoverageWarningAmt")	.attr("disabled", false);
			    			$("#start_date")			.attr("disabled", false);
			    			$("#end_date")				.attr("disabled", false);
			    			
			    			$("#bt_add_age").attr("disabled", false);
			    			$("#bt_add_sum").attr("disabled", false);
			    			
			    		}
			        	if(status_copying=="edit"){
			    			$("#appendixValueName")     .attr("disabled", true);
			    			$("#appendixVersionname")   .attr("disabled", true);
			    		}
			        	$("#form_ageCapitalProtectionTab1 *").removeClass("disabledAll_NotFade");
			        	$("#form_ageCapitalProtectionTab2 *").removeClass("disabledAll_NotFade");
			        	
			        },
			        error : function(response) {	
			        	console.log("get showAppendixDetail case error.")
			        }
				});
			}
		}
		$("#modal_Checkkeyup").modal("hide");
		Statuesave = "Y";
		
		
}
$(document)
		.ready(
				function() {
					document.getElementById("page_001_1").style.display = "block";

					/* Tab menu ตั้งค่ารายการตรวจ */
					$('a[data-toggle="tab"]').on('shown.bs.tab',function(e) {
							
										var target = $(e.target).attr("href") // activated
																				// tab

										if (target == "#page1_1") {
											document.getElementById("page_001_1").style.display = "block";
											document.getElementById("page_001_2").style.display = "none";
										} else if (target == "#page1_2") {
											$("#bt_save_tab2").attr("disabled", true);
											document.getElementById("page_001_1").style.display = "none";
											document.getElementById("page_001_2").style.display = "block";
										} 
										else if (target == "#page2_1") {
											document.getElementById("page_002_1").style.display = "block";
											document.getElementById("form_ageCapitalProtection").style.display = "block";
											document.getElementById("page_002_2").style.display = "none";
											// document.getElementById("bt_approval").style.display
											// = "none";
										} else if (target == "#page2_2") {
											document.getElementById("form_ageCapitalProtection").style.display = "none";
											document.getElementById("page_002_2").style.display = "block";
											// document.getElementById("bt_approval").style.display
											// = "block";
										}
						});

});


$( document ).ready(function() {
	$("#appendixValue").hide().css("display", "none");;
	$("#appendixVersion").hide().css("display", "none");;
	$("#appendixVersion_label").hide().css("display", "none");;
	// set dataTable modal
	 $("#tb_appendixmaster").DataTable({"paging": false,"bDestroy": true,"bPaginate": false,"bFilter" : false,"bInfo" : false,"ordering": false,"sScrollY": "200px","searching" :false,scrollCollapse: false });
	 $(".autoComma").autoNumeric('init',{vMin: '0', vMax: '999999999'});
	 $("#fromAge1").autoNumeric('init',{vMin: '0', vMax: '100'});
	 $("#toAge1").autoNumeric('init',{vMin: '0', vMax: '100'});
});

$( document ).ready(function() {
	 $("#bt_delete_age").attr("disabled",true);
	 $("#bt_delete_sum").attr("disabled",true);
});

/* ปุ่มเพิ่มภาคผนวก */
function bt_add_appendix() {
	// //
	status_copying="";
	row_appendix_status_gb="สร้างใหม่";
	temp_copy_start_date="";
	$("#start_date")			.removeClass("disabledAll_NotFade");
	$("#end_date")				.removeClass("disabledAll_NotFade");
	//$("#start_date")			.addClass("form-control");
	//$("#end_date")				.addClass("form-control");
	nameTab 	= "page2_1";
	data		= "page2_1";
	
	Statuesave  = "N";
	
	document.getElementById("menu_listAppendix").style.display = "none";
	document.getElementById("page_002").style.display = "block";
	$("#checkkeyup_OK").attr("disabled",true);
	$("#IsNewRecord").val(true);
	$("#appendix_approved_status").val("false")	;
	// เปิดอีกหน้า
	document.getElementById("page_002_1").style.display = "block";
	
	document.getElementById("page_002_1").style.display = "block";
	document.getElementById("form_ageCapitalProtection").style.display = "block";
	document.getElementById("page_002_2").style.display = "none";
	// document.getElementById("bt_approval").style.display = "none";
	
	$("#appendixValue")		.attr("disabled", false);
	$("#appendixValueName")	.attr("disabled", false);
	$("#appendixName")		.attr("disabled", false);
	$("#appendixVersion")	.attr("disabled", false);
	$("#appendixVersionname").attr("disabled", true);
	$("#CoverageWarningAmt").attr("disabled", false);
	$("#start_date")		.attr("disabled", false);
	$("#end_date")			.attr("disabled", false);
	$("#coverage_capital_val").attr("disabled", false);
	$("#lb_saleChannel_CL")	.attr("disabled", false);
	
	$("#lb_saleChannel_CL option[value=NONE]").attr('selected', true);
	$("#sale_n").prop("checked", false).attr("disabled", true);
	$("#sale_q").prop("checked", false).attr("disabled", true);
	$("#sale_t").prop("checked", false).attr("disabled", true);
	$("#sale_p").prop("checked", false).attr("disabled", true);
	$("#sale_r").prop("checked", false).attr("disabled", true);
	
	
	$("#bt1_req_med")		.hide();
	$("#bt1_req_edit_app")	.hide();
	$("#bt1_his_med")		.hide();
	$("#bt1_appr_med")		.hide();
	$("#bt1_not_appr_med")	.hide();
	
	$("#tb_rangeAge tbody").find("tr").remove();
	var row = "<tr>"
		+ "<td style='width:7%'><input id='rowAge1"
		
		+ "' type='checkbox' class='checker panel_head_big' onchange='enable_bt_delete_age(this);' hidden/></td>"
		+ "<td style='width:15%'><input type='hidden' value='1'/>"
		+ 1
		+ "</td>"
		+ "<td style='width:39%'><input id='fromAge1"
		
		+ "' type='text'  class='autoComma form-control text-center change-text-tab2' style='width: 100%' value='"
		
		+ "' /></td>"
		+ "<td style='width:39%'><input id='toAge1"
		
		+ "' type='text'  class='autoComma form-control text-center change-text-tab2' style='width: 100%'/></td>"
		+ "</tr>"
	$("#tb_rangeAge tbody").append(row);
	
	$("#tb_capitalProtection >tbody>tr:last>td:nth-child(1) input[type='hidden']").val(1);
	
	$("#fromAge1").autoNumeric('init',{vMin: '0', vMax: '100'});
	$("#toAge1").autoNumeric('init',{vMin: '0', vMax: '100'});
	$('#appendixVersionname').val("ต้นฉบับ");
	$('#appendixVersion').val(0);
	$("#appendixValueName").val("");
	
	$("#tb_capitalProtection tbody").find("tr").remove();
	
	
	var start_rangeCapital = $(
		"#tb_capitalProtection tbody>tr:last>td:nth-child(3) input").val();
	start_rangeCapital=1;
	var row = "<tr>"
		+ "<td><input id='rowCapital"
		+ 1
		+ "' type='checkbox' class='checker panel_head_big' onchange='enable_bt_delete_cap(this);' hidden/>" +
				"<input type='hidden' value='"
		+ 1
		+ "'  /></td>"
		+ "<td><input id='fromCapital"
		+ 1
		+ "' type='text' class='autoComma form-control text-center change-row-tab2' onkeyup='change_comma(this);' style='width: 100%' value='"
		+ (start_rangeCapital==1?"":start_rangeCapital)
		+ "' /></td>"
		+ "<td><input id='toCapital"
		+ 1
		+ "' type='text' class='autoComma form-control text-center change-row-tab2' onkeyup='change_comma(this);' style='width: 100%'/></td>"
		+ "</tr>"
	$("#tb_capitalProtection tbody").append(row);
	$("#fromCapital"+1).autoNumeric('init',{vMin: '0', vMax: '999999999'});
	$("#toCapital"+1).autoNumeric('init',{vMin: '0', vMax: '999999999'});
	
	$("#form_ageCapitalProtectionTab1 *").removeClass("disabledAll_NotFade");
	$("#form_ageCapitalProtectionTab2 *").removeClass("disabledAll_NotFade");
	
	$("#bt_add_age").attr("disabled", false);
	$("#bt_add_sum").attr("disabled", false);
	$("#bt1_submit_med").attr("disabled", false);
	
	$("#bt1_req_edit_app").attr("disabled", true);
	$("#bt1_submit_med").attr("disabled", false);
	
}

/**
 * *************************************GET ALL
 * LOOKUP**********************************
 */


$(document).ready( function() {
	$.ajax({
        type: "POST",
        url : "UW_Data_Default_Servlet",
        data: {
        	method 	: "getAllLookUp"
        },       
        success : function(response) {	
        	show_basicInfo_data(response);

        },
        error : function(response) {	
        	console.log("get lookup case error.")
        }
	});
});

/* initialize */
/* Get data from servlet */
function show_basicInfo_data(response){	
	
	var row_examType  = "";	
	var arr_type = [];
	
	
	for (i in response.Tab_Basic_Information[0].exam_type_lookup) {
		var obj_examType = response.Tab_Basic_Information[0].exam_type_lookup[i];
		row_examType += "<option value='"+obj_examType.pass+"'>"+obj_examType.text+"</option>";
		
		arr_type.push(obj_examType.text);
	}
	$("#exam_type_LookUp").val(arr_type);
	$("#exam_type_LookUp2").val(row_examType);
	
	var row_Sale  = "";	
	// var arr_Sale = [];
	
	
	for (i in response.Tab_Basic_Information[0].salesChannel_lookup) {
		var obj_examType = response.Tab_Basic_Information[0].salesChannel_lookup[i];
		row_Sale += "<option value='"+obj_examType.value+"'>"+obj_examType.text+"</option>";
		
		// arr_Sale.push(obj_examType.text);
	}
	// $("#sale_channal_lookup_appendix").val(arr_Sale);
	// $("#sale_channal_lookup_appendix").val(row_Sale);
	
	
	$("#lb_saleChannel_CL").append(row_Sale);
}
/**
 * ********************* Page 1-> Tab 1 กำหนดตารางตรวจสุขภาพ
 * **************************
 */

/**
 * **********************Get Date Master Appendis Version Tab
 * 1********************
 */
$(document).ready( function() {
	$(".autoComma").autoNumeric('init',{vMin: '0', vMax: '999999999'});
	$.ajax({
        type: "POST",
        url : "UW_GetData_Servlet",
        data: {
        	method 	: "getAppendixVersion"
        },       
        success : function(response) {	
        	
        	ShowAppendixVersion(response);
        },
        error : function(response) {	
        	console.log("get getAppendixVersion case error.")
        }
	});
});

function ShowAppendixVersion(value) {
	var Appendix_code        = "";
	var Appendix_name        = "";
	var Version_name	 	 = "";
	var Eff_date		     = "";
	var Exp_date		 	= "";
	var Is_Active		 	= "";
	var Is_Approv		 	= "";
	var Txn_id		 		= 0;
	var Txn_status		 		= "";
	var row = "";
	var Abb_name="";
	$("#tb_appendixmaster").DataTable().destroy();
	$("#tb_appendixmaster tbody").find("tr").remove();
	var last_id=0;
	for(var i = 0; i < value.AppendixVersion_Data.length; i++){
		Appendix_code 		 = value.AppendixVersion_Data[i].Appendix_code;
		Appendix_name 		 = value.AppendixVersion_Data[i].Appendix_name;
		Version_name		 = value.AppendixVersion_Data[i].Version_name;
		Version_id			 = value.AppendixVersion_Data[i].Version_id;
		Eff_date		 	 = value.AppendixVersion_Data[i].Eff_date;
		Exp_date		 	 = value.AppendixVersion_Data[i].Exp_date;
		Is_Active		 	 = value.AppendixVersion_Data[i].Is_Active;
		Is_Approved		 	 = value.AppendixVersion_Data[i].Is_Approved;
		Txn_id				 = value.AppendixVersion_Data[i].Txn_id;
		Txn_status			 = value.AppendixVersion_Data[i].Txn_status;
		
		Abb_name			 = value.AppendixVersion_Data[i].Abb_name;
		Exp_date= Exp_date.length==0?"31/12/9999":Exp_date;
		last_id++;
		var row = "<tr>"
		// + "<td style='width:3%'><input type='hidden' id='"+Version_id+"'
		// value='"+Version_id+"'"+Txn_id+"</td>"
		+ "<td style='width:3%'><input type='hidden'  value='"+Txn_id+"'>" +(i+1)+""+"</td>"                // <input
																											// type='text'
																											// value='"+Appendix_code+"'
																											// class='form-control'
																											// disabled='disabled'
																											// style='width:100%'/></td>"
		+ "<td style='width:7%'><input type='hidden' id='"+Version_id+"' value='"+Version_id+"'>" +""+Abb_name+"</td>"                // <input
																																		// type='text'
																																		// value='"+Appendix_code+"'
																																		// class='form-control'
																																		// disabled='disabled'
																																		// style='width:100%'/></td>"
		+ "<td style='width:40%'><a class='groupBlood' id='tb_body" + last_id
		+ "' onclick='prepareshowAppendixDetail(this);'><p align='left'>" + Appendix_name + "</p></a></td>"
		
		
		+ "<td style='width:12%'>"+Eff_date+"</td>"
		+ "<td style='width:12%'>"+Exp_date+"</td>"
		+ "<td style='width:6%'>"+(Is_Active?"Y":"N")+"</td>" // <input
																// type='text'
																// type='text'
																// value='"+(Is_Active?"Y":"N")+"'
																// class='form-control'
																// disabled='disabled'
																// style='width:100%'</td>"
		
		// if(Txn_status==){
		// row =row+ "<td style='width:10%'>"+"อนุมัติแล้ว"+"</td>" //<input
		// value='"+"อนุมัติ"+"' class='form-control' disabled='disabled'
		// style='width:100%'/></td>"
		// }else{
			row =row+ "<td style='width:10%'>"+Txn_status+"</td>"    // <input
																		// value='"+"รออนุมัติ"+"'
																		// class='form-control'
																		// disabled='disabled'
																		// style='width:100%'/></td>"
		// }
		row =row+ "<td style='width:10%'><input type='button' " +
				"data-toggle='modal' onclick='bt_copy_appendix(this);'" +
				" class='btn btn-primary'    value='คัดลอก' " ;
				if(Is_Approved){
					row =row+ " " ;   // <input value='"+"อนุมัติ"+"'
										// class='form-control'
										// disabled='disabled'
										// style='width:100%'/></td>"
				}else{
					row =row+ " disabled " ;   // <input
												// value='"+"รออนุมัติ"+"'
												// class='form-control'
												// disabled='disabled'
												// style='width:100%'/></td>"
				}
				row =row+"/button>" +
				"<input type='hidden'  value='"+Appendix_code+"'>" +
				"</td>"
		
		row =row+ "</tr>";

        $("#tb_appendixmaster tbody").append(row);
        
	}
	
	$("#tb_appendixmaster_wrapper .dataTables_scrollHeadInner").css({"width":"100%"});

	
	$("#tb_appendixmaster").DataTable({"paging": false,"bDestroy": 
		true,"bPaginate": false,"bFilter" : false,"bInfo" :
			false,"ordering": false,"sScrollY": "350px","searching" :false,scrollCollapse: true });
	$("#tb_appendixmaster_wrapper .table").css({"width":"100%"});
	SetUserPermissionUW();
}
var row_status_app;
/*
 * ถ้ามีการกด ปุ่มลิ้งรายการ นั้น จะlink ชื่อรายละเอียดของ ภาคผนวกนั้น modal
 * พร้อมข้อมูลนั้น
 */
function prepareshowAppendixDetail(e) {
	
	
	$(".autoComma").autoNumeric('init',{vMin: '0', vMax: '999999999'});
	document.getElementById("menu_listAppendix").style.display = "none";
	document.getElementById("page_002").style.display = "block";
	// เปิดอีกหน้า
	document.getElementById("page_002_1").style.display = "block";
	document.getElementById("form_ageCapitalProtection").style.display = "block";
	
	$("#checkkeyup_OK").attr("disabled",false);
	$("#IsNewRecord").val(false);
	
	var id = $(e).attr("id");
	id = Number(id.replace("tb_body", ""));
	id = id - 1;
	// เก็บค่าในแถวที่กด
	
	var Appendix_Code = $("#tb_appendixmaster>tbody>tr").eq(id).find("td:nth-child(8) input[type='hidden']").val();			
	var Version_ID=$("#tb_appendixmaster>tbody>tr").eq(id).find("td:nth-child(2) input").attr("id");
	var IsApproved=$("#tb_appendixmaster>tbody>tr").eq(id).find("td:nth-child(7) ").text()=="อนุมัติแล้ว"?true:false;
	row_status_app=$("#tb_appendixmaster>tbody>tr").eq(id).find("td:nth-child(7) ").text();
	row_appendix_status_gb=$("#tb_appendixmaster>tbody>tr").eq(id).find("td:nth-child(7) ").text();
	current_txn_id=$("#tb_appendixmaster>tbody>tr").eq(id).find("td:nth-child(1) input").val();
	;
	$("#appendix_approved_status").val(IsApproved)	;
	
	status_copying="";
	// Version_ID
	$.ajax({
        type: "POST",
        url : "UW_GetData_Servlet",
        data: {
        	method 				: "getAppendixVersionDetail",
        	Appendix_Code 		: Appendix_Code,
        	Version_ID 			: Version_ID
        },       
        success : function(response) {	
        	
        	showAppendixDetail(response,e,Version_ID,IsApproved);
        	;
        	SetUserPermissionUW();
        },
        error : function(response) {	
        	console.log("get product case error.")
        }
	});
	Statuesave="Y";
	$(".autoComma").autoNumeric('init',{vMin: '0', vMax: '999999999'});
}
var status_copying;
var temp_start_date;
var temp_copy_start_date;
var temp_end_date;
function showAppendixDetail(value,e,Version_ID,IsApproved) {
	
	var Agent_NORMAL		="0";
	var Agent_QUP			="0";
	var Agent_TOP_UP		="0";
	var Agent_TOP_UP_PLUS	="0";
	var Agent_RED_LEVEL		="0";
	
	// //;
	$("#appendix_approved_status").val(IsApproved)	;
	$("#form_ageCapitalProtectionTab1 *").removeClass("disabledAll_NotFade");
	$("#form_ageCapitalProtectionTab2 *").removeClass("disabledAll_NotFade");
	
	$("#bt1_req_med")		.hide()	;
	
	$("#bt1_req_edit_app")	.hide()	;
	$("#bt1_his_med")		.hide()	;
	
	
	
	for(var i = 0; i < value.AppendixVersionALL_Data.length; i++){
		;
		var amt = value.AppendixVersionALL_Data[i].Hq_med_exam_amt;
		var NORMAL		=value.AppendixVersionALL_Data[i].NORMAL;
		var QUP			=value.AppendixVersionALL_Data[i].QUP;
		var TOP_UP		=value.AppendixVersionALL_Data[i].TOP_UP;
		var TOP_UP_PLUS	=value.AppendixVersionALL_Data[i].TOP_UP_PLUS;
		var RED_LEVEL	=value.AppendixVersionALL_Data[i].RED_LEVEL;
		var Sale_chan_id	=value.AppendixVersionALL_Data[i].Sale_chan_id;
		
		$("#lb_saleChannel_CL option[value="+Sale_chan_id+"]").attr('selected', true);
		 
		;
		if(NORMAL!=null){
			$("#sale_n").prop("checked", true);
		}
		if(QUP!=null){
			$("#sale_q").prop("checked", true);
		}
		if(TOP_UP!=null){
			$("#sale_t").prop("checked", true);
		}	
		if(TOP_UP_PLUS!=null){
			$("#sale_p").prop("checked", true);
		}
		if(RED_LEVEL!=null){
			$("#sale_r").prop("checked", true);
		}
		;
		
		if(Number(Version_ID)===Number(value.AppendixVersionALL_Data[i].Version_id)){
			$("#appendixValue")			.val(value.AppendixVersionALL_Data[i].Appendix_code).attr("disabled", true);
			$("#appendixValueName")		.val(value.AppendixVersionALL_Data[i].Abb_name).attr("disabled", true);
			$("#appendixName")			.val(value.AppendixVersionALL_Data[i].Appendix_name).attr("disabled", true);
			$("#appendixVersion")		.val((value.AppendixVersionALL_Data[i].Version_id)).attr("disabled", true);
			$("#appendixVersionname")	.val((value.AppendixVersionALL_Data[i].Version_name)).attr("disabled", true);
			$("#CoverageWarningAmt")	.val(amt).attr("disabled", true);
			$("#start_date")			.val(value.AppendixVersionALL_Data[i].Eff_date).attr("disabled", true).addClass("disabledAll_NotFade");
			$("#end_date")				.val(value.AppendixVersionALL_Data[i].Exp_date).attr("disabled", true).addClass("disabledAll_NotFade");
			$("#coverage_capital_val")	.text(value.AppendixVersionALL_Data[i].Hq_med_exam_amt)
		
			$("#bt_add_age")		.attr("disabled", true);
			$("#bt_add_sum")		.attr("disabled", true);
			$("#bt1_req_med")		.attr("disabled", true);
			$("#bt1_req_edit_app")	.attr("disabled", false);
			
			$("#lb_saleChannel_CL")	.attr("disabled", true);
			$("#sale_n")			.attr("disabled", true);
			$("#sale_q")			.attr("disabled", true);
			$("#sale_t")			.attr("disabled", true);
			$("#sale_p")			.attr("disabled", true);
			$("#sale_r")			.attr("disabled", true);
			
			$("#bt1_appr_med")		.attr("disabled", true);
			$("#bt1_not_appr_med")	.attr("disabled", true);
			
			$("#bt1_req_med")		.hide()	;
			
			
			$("#form_ageCapitalProtectionTab1 *")	.addClass("disabledAll_NotFade");
			$("#tb_diagnose_description tbody")		.find("tr")	.addClass("disabledAll_NotFade");
			$("#tb_Capital_byAge tbody")			.find("tr")	.addClass("disabledAll_NotFade");
			
		
			
		}else{
			$("#appendixValue")			.val(value.AppendixVersionALL_Data[i].Appendix_code).attr("disabled", false);
			$("#appendixValueName")		.val(value.AppendixVersionALL_Data[i].Abb_name).attr("disabled", false);
			$("#appendixName")			.val(value.AppendixVersionALL_Data[i].Appendix_name).attr("disabled", false);
			$("#appendixVersionname")	.val(value.AppendixVersionALL_Data[i].Version_name).attr("disabled", true);
			$("#appendixVersion")		.val(Number(Version_ID)).attr("disabled", false);
			$("#CoverageWarningAmt")	.val(amt).attr("disabled", false);
			$("#start_date")			.val(value.AppendixVersionALL_Data[i].Eff_date).attr("disabled", false);
			$("#end_date")				.val(value.AppendixVersionALL_Data[i].Exp_date).attr("disabled", false);
			
			$("#lb_saleChannel_CL")	.attr("disabled", false);
			$("#sale_n")			.attr("disabled", false);
			$("#sale_q")			.attr("disabled", false);
			$("#sale_t")			.attr("disabled", false);
			$("#sale_p")			.attr("disabled", false);
			$("#sale_r")			.attr("disabled", false);
			
			$("#coverage_capital_val")	.text(value.AppendixVersionALL_Data[i].Hq_med_exam_amt)
		}
		
		if(row_status_app!="รออนุมัติ" && row_status_app!="ขอแก้ไข" && (IsApproved==false||IsApproved=="false")){
			$("#appendixValue")			.attr("disabled", false);
			$("#appendixValueName")		.attr("disabled", false);
			$("#appendixName")			.attr("disabled", false);
			$("#appendixVersion")		.attr("disabled", false);
			$("#appendixVersionname")	.attr("disabled", true);
			$("#CoverageWarningAmt")	.attr("disabled", false);
			$("#start_date")			.attr("disabled", false);
			$("#end_date")				.attr("disabled", false);
			
			$("#lb_saleChannel_CL")	.attr("disabled", false);
			$("#sale_n")			.attr("disabled", false);
			$("#sale_q")			.attr("disabled", false);
			$("#sale_t")			.attr("disabled", false);
			$("#sale_p")			.attr("disabled", false);
			$("#sale_r")			.attr("disabled", false);
			
			$("#bt1_submit_med")		.show();
			$("#bt1_submit_med")				.attr("disabled", false);
			$("#bt1_req_edit_app")		.attr("disabled", true);
			
			$("#form_ageCapitalProtectionTab1 *").removeClass("disabledAll_NotFade");
			$("#form_ageCapitalProtectionTab2 *").removeClass("disabledAll_NotFade");
			
			$("#bt1_req_med").attr("disabled", false);
			$("#bt_add_age").attr("disabled", false);
			$("#bt_add_sum").attr("disabled", false);
			
		}else{
			$("#bt1_submit_med")				.attr("disabled", true);
			
			$("#bt1_submit_med").show();
			$("#bt1_submit_med")				.attr("disabled", true);
		}
		
		if(e=="new"){
			$("#appendixValue")			.val("").attr("disabled", false);
			$("#appendixValueName")		.val("").attr("disabled", false);
			$("#appendixName")			.val("").attr("disabled", false);
			$("#appendixVersion")		.val(1).attr("disabled", false);
			$("#appendixVersionname")	.val("ต้นฉบับ").attr("disabled", true);
			$("#CoverageWarningAmt")	.val("").attr("disabled", false);
			$("#start_date")			.val("").attr("disabled", false);
			$("#end_date")				.val("").attr("disabled", false);
			
			$("#lb_saleChannel_CL")	.attr("disabled", false);
			$("#sale_n")			.attr("disabled", false);
			$("#sale_q")			.attr("disabled", false);
			$("#sale_t")			.attr("disabled", false);
			$("#sale_p")			.attr("disabled", false);
			$("#sale_r")			.attr("disabled", false);
			$("#coverage_capital_val")	.text("");
			$("#bt1_req_med").attr("disabled", false);
			
			$("#bt_add_age").attr("disabled", false);
			$("#bt_add_sum").attr("disabled", false);
		
		}else if(e=="edit"){
			$("#appendixValue")			.val(value.AppendixVersionALL_Data[i].Appendix_code).attr("disabled", true);
			$("#appendixValueName")		.val(value.AppendixVersionALL_Data[i].Abb_name).attr("disabled", true);
			$("#appendixVersion")		.val(Version_ID).attr("disabled", true);
			$("#appendixVersionname")   .attr("disabled", true);
			$("#bt1_req_med").attr("disabled", false);
			
			$("#bt_add_age").attr("disabled", false);
			$("#bt_add_sum").attr("disabled", false);
		}
		if(status_copying=="edit"){
			$("#appendixValueName")     .attr("disabled", true);
			$("#appendixVersionname")   .attr("disabled", true);
			$("#bt1_req_med").attr("disabled", false);
			$("#bt_add_age").attr("disabled", false);
			$("#bt_add_sum").attr("disabled", false);
			;
			//$("#start_date").datetimepicker({timepicker : false, format : 'd/m/Y', yearOffset:543})
			//$("#end_date").datetimepicker({timepicker : false, format : 'd/m/Y', yearOffset:543})
			
		}
		
		temp_start_date =value.AppendixVersionALL_Data[i].Eff_date;
		temp_end_date   =value.AppendixVersionALL_Data[i].Exp_date;
		
	}
	if(row_status_app=="รออนุมัติ"||row_status_app=="ขอแก้ไข"){
		$("#bt1_req_med").attr("disabled", true);
		$("#bt1_req_edit_app").attr("disabled", true);
		$("#bt1_appr_med")		.attr("disabled", false);
		$("#bt1_not_appr_med")	.attr("disabled", false);
	}
	if(Sale_chan_id==1){
		
	}else{
		$("#sale_n")			.attr("disabled", true).prop("checked", false);
		$("#sale_q")			.attr("disabled", true).prop("checked", false);
		$("#sale_t")			.attr("disabled", true).prop("checked", false);
		$("#sale_p")			.attr("disabled", true).prop("checked", false);
		$("#sale_r")			.attr("disabled", true).prop("checked", false);
	}
	
	
	
	
	$("#appendixValue").hide().css("display", "none");;
	$("#appendixVersion").hide().css("display", "none");;
	$("#appendixVersion_label").hide().css("display", "none");;
	

	// SHOW DATA IN AGE TABLE
	
	$("#tb_rangeAge tbody").find("tr").remove();
	$("#tb_rangeAge").DataTable().destroy();
	var last_row=0;
	if(value.Age_Data.length>0){
		for(var i = 0; i < value.Age_Data.length; i++){
			var Age_index 		 = value.Age_Data[i].Age_index;
			var Min_age		     = value.Age_Data[i].Min_age;
			var Max_age		 	 = value.Age_Data[i].Max_age;
			
			
			last_row++;
			var row = "<tr >"
				+ "<td><input id='rowAge"
				+ last_row
				+ "' type='checkbox' class='checker panel_head_big' onchange='enable_bt_delete_age(this);' " ;
				if(last_row==1){
				row=row+  "hidden"
				}
				row=row+  "/></td>"
				+ "<td style='width:15%'><input type='hidden' value='"+Age_index+"'/>"
				+ (i+1)
				+ "</td>"
				+ "<td style='width:39%'><input id='fromAge"
				+ last_row
				+ "' type='text'  class='form-control text-center change-text-tab2' " +
						"  style='width: 100%' value='"
				+ Min_age
				+ "' /></td>"
				+ "<td style='width:39%'><input id='toAge"
				+ last_row
				+ "' type='text'  class='form-control text-center change-text-tab2' " +
						" style='width: 100%' value='"
				+ Max_age
				+"'/></td>"
				+ "</tr>"
		$("#tb_rangeAge tbody").append(row);
	    $("#fromAge"+last_row).autoNumeric('init',{vMin: '0', vMax: '100'});
	    $("#toAge"+last_row).autoNumeric('init',{vMin: '0', vMax: '100'});
		}
	}else{
		var last_row = 1;
		var row = "<tr>"
			+ "<td><input id='rowAge"
			+ last_row
			+ "' type='checkbox' class='checker panel_head_big' onchange='enable_bt_delete_age(this);' hidden/></td>"
		+ "<td style='width:15%'>"
		+ last_row
		+ "</td>"
		+ "<td style='width:39%'><input id='fromAge"
		+ last_row
		+ "' type='text'  class='form-control text-center change-text-tab2' style='width: 100%' value='"
		
		+ "' /></td>"
		+ "<td style='width:39%'><input id='toAge"
		+ last_row
		+ "' type='text'  class='form-control text-center change-text-tab2' style='width: 100%'/></td>"
		+ "</tr>"
		$("#tb_rangeAge tbody").append(row);
		$("#fromAge"+last_row).autoNumeric('init',{vMin: '0', vMax: '100'});
	    $("#toAge"+last_row).autoNumeric('init',{vMin: '0', vMax: '100'});
	    $("#tb_capitalProtection tbody").find("tr").remove();
		$("#tb_capitalProtection").DataTable().destroy();
		
		
	}
	
	
	// SHOW DATA IN SUM TABLE
	$("#tb_capitalProtection tbody").find("tr").remove();
	$("#tb_capitalProtection").DataTable().destroy();
	var last_row=0;
	if(value.Sum_Data.length>0){
		for(var i = 0; i < value.Sum_Data.length; i++){
			var Sum_index 		 = value.Sum_Data[i].Sum_index;
			var Max_sum		     = value.Sum_Data[i].Max_sum;
			var Min_sum		 	 = value.Sum_Data[i].Min_sum;
			
			
			
			last_row++;

			var row = "<tr>"
			+ "<td style='width:10%'><input id='rowCapital"
			+ last_row
			+ "' type='checkbox' class='checker panel_head_big' onchange='enable_bt_delete_cap(this);' " ;
			if(last_row==1){
				row=row+  "hidden";
			}
			row=row+  "/>" 
			
			+ "<input type='hidden' value='"+Sum_index+"'/></td>"
			+ "<td style='width:45%'><input id='fromCapital"
			+ last_row
			+ "' type='text' class='autoComma form-control text-center change-row-tab2' onkeyup='change_comma(this);' style='width: 100%' value='"
			+ Min_sum
			+ "' /></td>"
			+ "<td style='width:45%'><input id='toCapital"
			+ last_row
			+ "' type='text' class='autoComma form-control text-center change-row-tab2' onkeyup='change_comma(this);'  style='width: 100%' value='"
			+ Max_sum+ "' /></td>"
			+ "</tr>"
			$("#tb_capitalProtection tbody").append(row);
			
			

		}
	}else{
		var last_row = 1;
		var row = "<tr>"
		+ "<td style='width:10%'><input id='rowCapital"
		+ last_row
		+ "' type='checkbox' class='checker panel_head_big' onchange='enable_bt_delete_cap(this);' hidden/>" +
				"" + "<input type='hidden' value='"+Sum_index+"'/></td>"
				"</td>"
		+ "<td style='width:45%'><input id='fromCapital"
		+ last_row
		+ "' type='text' class='autoComma form-control text-center change-row-tab2' onkeyup='change_comma(this);' style='width: 100%' value='"
		
		+ "' /></td>"
		+ "<td style='width:45%'><input id='toCapital"
		+ last_row
		+ "' type='text' class='autoComma form-control text-center change-row-tab2' onkeyup='change_comma(this);' style='width: 100%'/></td>"
		+ "</tr>"
		$("#tb_capitalProtection tbody").append(row);
		
	}
	

	$("#tb_modal_checkList").DataTable({"paging": false,"bDestroy": true,"bPaginate": false,"bFilter" : false,"bInfo" : false,"ordering": false,"sScrollY": "400px","searching" :false,scrollCollapse: true });
	$("#tb_modal_checkList_wrapper .dataTables_scrollHeadInner").css({"width" : "100%"});
	$("#tb_modal_checkList_wrapper .table").css({"width" : "100%"});
	
		
}
function showAppendixDetail2(value) {

	// GEN TABLE FOR AGE x SUM = tb_Capital_byAge
	;
	// $("#tb_Capital_byAge").DataTable().destroy();
	$("#tb_Capital_byAge tbody").find("tr").remove();
	
	var count_newcol = $("#tb_Capital_byAge thead>tr").eq(1).find('th').length ;
	
	for(var i=count_newcol;i>1;i--){
		$("#tb_Capital_byAge thead>tr").eq(1).find('th').eq(i-1).remove();
	}
	/* กำหนดหัวและ Set Data หัว Column ไปยัง ตารางของ tab2 */
	var len=value.Age_Data.length;
	var len2=value.Age_Data.length-1;
	for(var i = 0; i < value.Age_Data.length; i++){
		
		var Age_index 		 = value.Age_Data[i].Age_index;
		var Min_age		     = value.Age_Data[i].Min_age;
		var Max_age		 	 = value.Age_Data[i].Max_age;
		
		    	
		if(i<(len2)){
			var count_col = $("#tb_Capital_byAge thead>tr").eq(1).find('th').length +1;
			var col_tb = "<th id='headCol_"
					+ count_col
					+ "' class='text-center bg-primary vertical-middle min_width change-text-tab2' colspan='1' scope='col'></th>"
			$("#tb_Capital_byAge thead>tr").eq(1).append(col_tb);
			$("#tb_Capital_byAge thead>tr").eq(0).find('th:nth-child(2)').attr(
					"colspan", count_col + 1);
		}
		var range_Age = Min_age + " - " + Max_age;
		$("#headCol_" + (i+1)).text(range_Age);
		
		
	}
	
	/* วนสร้าง Column ไปยัง ตารางของ tab2 */
	var lens=value.Sum_Data.length;
	if(lens>0){
			$("#tb_Capital_byAge thead>tr").eq(0).find('th:nth-child(2)').attr(
					"colspan", count_col + 1);
			var count_row = $("#tb_Capital_byAge tbody>tr").length;
			var d=0;
			for (var ii = 0; ii <=len; ii++) {
				var Sum_index 		 = value.Sum_Data[d].Sum_index;
				// var row_index=1;
				var td = "<td id='td"
						+ ii +1
						+ "' colspan='1'>"
						+ "<div class='input-group col-xs-12'>"
						
						+ "<input type='text' id='coverage_byAge"
						+ 1
						+ "_"
						+ (ii +1)
						+ "'  class='form-control' style='width:100%' value='' readonly data-toggle='tooltip' title=''/>"
						+ "<span class='input-group-btn'>"
						+ "<button class='btn btn-default btn-primary fa fa-external-link' type='button' id='bt_coverage_byAge"
						+ 1 + "_" + (ii+1)
						+ "' onclick='chk_popup_checklist(this);'></button>"
						+ "</span>" + "</div>" + "</td>";
				$("#tb_Capital_byAge tbody>tr").eq(0).append(td);
				
			}
		}
			/* วน สร้าง Row ไปยัง ตารางของ tab2 */
			
			
			for(var ii = 0; ii < lens; ii++){
				var Sum_index  = ii+1;
				var Max_sum		     = value.Sum_Data[ii].Max_sum;
				var Min_sum		 	 = value.Sum_Data[ii].Min_sum;
				var count_col = $("#tb_Capital_byAge thead>tr").eq(1).find('th').length;
				var row_data = "";
				for (i = 0; i < count_col; i++) {
					var id = 1 + i;
					row_data += "<td id='td"
							+ id
							+ "' class='min_width'>"
							+ "<div class='input-group col-xs-12'>"
							+ "<input type='text' id='coverage_byAge"
							+ (Sum_index)
							+ "_"
							+ id
							+ "' class='form-control' style='width:100%' value='' readonly  data-toggle='tooltip' title=''/>"
							+ "<span class='input-group-btn'>"
							+ "<button class='btn btn-default btn-primary fa fa-external-link' type='button' id='bt_coverage_byAge"
							+ (Sum_index) + "_" + id
							+ "' onclick='chk_popup_checklist(this);'></button>"
							+ "</span>" + "</div>" + "</td>";
				}
				var a  =Sum_index;
				if(ii<lens){
					$("#tb_Capital_byAge tbody").append(
							"<tr><td id='headRow_" + (a) + "'></td>" + row_data + "</tr>");
				}
				
				var fromCapital = Min_sum;
				var toCapital = Max_sum;
				var range_Capital = fromCapital + " - " + toCapital;
				$("#headRow_" + Sum_index).text(range_Capital);
			}
			
			/* วนเอาข้อมูลจาก DB ไปใส่ ไปยัง ตารางของ tab2 */
		
			
		for(var i = 0; i < value.Age_Data.length; i++){
			var Age_index		    = value.Age_Data[i].Age_index;
			for(var j = 0; j < value.Sum_Data.length; j++){
				var Sum_index		    = value.Sum_Data[j].Sum_index;
				var med_concat_for_cell="";
				var nmed_concat_for_cell="";
				var old=false;
				for(var k = 0; k < value.Med_Data.length; k++){
					
					if(Age_index==value.Med_Data[k].Age_index 
							&& Sum_index==value.Med_Data[k].Sum_index){
						
						var Exam_code=value.Med_Data[k].Exam_code;
						var Name_abb=value.Med_Data[k].Name_abb;
						if(old){
							med_concat_for_cell+=","+Exam_code;	
							nmed_concat_for_cell+=","+Name_abb;	
						}else{
							med_concat_for_cell=Exam_code;
							nmed_concat_for_cell=Name_abb;
							old=true;
						}
						
					}
				}
				if(med_concat_for_cell.length==0){
					
					med_concat_for_cell="NonMed";
					nmed_concat_for_cell="NonMed";
				}
				
				$("#coverage_byAge"+(Number(j)+1) +"_"+(Number(i)+1) )
				.val(nmed_concat_for_cell)
				.text(med_concat_for_cell)
				.attr("title",nmed_concat_for_cell)
				.attr("readonly",true);	
			}
		}
		
		$("#tb_diagnose_description tbody").find("tr").remove();
		$("#tb_diagnose_description").DataTable().destroy();
		for(var i = 0; i < value.Meddesc_Data.length; i++){

			var row = "<tr>" + "<td >" + "" + "</td>"
			+ "<td><p align='left'>" + value.Meddesc_Data[i].Name_abb+ "</p></td>" 
			+ "<td><p align='left'>"+ value.Meddesc_Data[i].Name_th + "</p></td>"
			+ "</tr>"
			$("#tb_diagnose_description tbody").append(row);
		}
		
		
		$("#tb_diagnose_description").DataTable({"paging": false,"bDestroy": 
			true,"bPaginate": false,"bFilter" : false,"bInfo" :
				false,"ordering": false,"sScrollY": "350px","searching" :false,scrollCollapse: true });
		$('.sorting_asc').removeClass('sorting_asc');
		$("#tb_diagnose_description_wrapper .table").css({"width":"100%"});
		$("#tb_diagnose_description_wrapper .dataTables_scrollHeadInner").css({"width":"100%"});
		
}
function showAppendixDetail2_onlyHeader(value) {
	;
	// GEN TABLE FOR AGE x SUM = tb_Capital_byAge
	;
	// $("#tb_Capital_byAge").DataTable().destroy();
	$("#tb_Capital_byAge tbody").find("tr").remove();
	
	var count_newcol = $("#tb_Capital_byAge thead>tr").eq(1).find('th').length ;
	
	for(var i=count_newcol;i>1;i--){
		$("#tb_Capital_byAge thead>tr").eq(1).find('th').eq(i-1).remove();
	}
	/* กำหนดหัวและ Set Data หัว Column ไปยัง ตารางของ tab2 */
	var len=value.Age_Data.length;
	var len2=value.Age_Data.length-1;
	for(var i = 0; i < value.Age_Data.length; i++){
		
		var Age_index 		 = value.Age_Data[i].Age_index;
		var Min_age		     = value.Age_Data[i].Min_age;
		var Max_age		 	 = value.Age_Data[i].Max_age;
		
		    	
		if(i<(len2)){
			var count_col = $("#tb_Capital_byAge thead>tr").eq(1).find('th').length +1;
			var col_tb = "<th id='headCol_"
					+ count_col
					+ "' class='text-center bg-primary vertical-middle min_width change-text-tab2' colspan='1' scope='col'></th>"
			$("#tb_Capital_byAge thead>tr").eq(1).append(col_tb);
			$("#tb_Capital_byAge thead>tr").eq(0).find('th:nth-child(2)').attr(
					"colspan", count_col + 1);
		}
		var range_Age = Min_age + " - " + Max_age;
		$("#headCol_" + (i+1)).text(range_Age);
		
		
	}
	
	var count_col = $("#tb_Capital_byAge thead>tr").eq(1).find('th').length +1;
	var len=value.Age_Data.length;
	/* วนสร้าง Column ไปยัง ตารางของ tab2 */
	var lens=value.Sum_Data.length;
	if(lens>0){
			$("#tb_Capital_byAge thead>tr").eq(0).find('th:nth-child(2)').attr(
					"colspan", count_col + 1);
			var count_row = $("#tb_Capital_byAge tbody>tr").length;
			var d=0;
			for (var ii = 0; ii <=len; ii++) {
				var Sum_index 		 = value.Sum_Data[d].Sum_index;
				// var row_index=1;
				var td = "<td id='td"
						+ ii +1
						+ "' colspan='1'>"
						+ "<div class='input-group col-xs-12'>"
						
						
						+ "<input type='text' id='coverage_byAge"
						+ 1
						+ "_"
						+ (ii +1)
						+ "'  class='form-control' style='width:100%' value='' readonly  data-toggle='tooltip' title=''/>"
						+ "<span class='input-group-btn'>"
						+ "<button class='btn btn-default btn-primary fa fa-external-link' type='button' id='bt_coverage_byAge"
						+ 1 + "_" + (ii+1)
						+ "' onclick='chk_popup_checklist(this);'></button>"
						+ "</span>" + "</div>" + "</td>";
				$("#tb_Capital_byAge tbody>tr").eq(0).append(td);
				
			}
		}
			/* วน สร้าง Row ไปยัง ตารางของ tab2 */
			
			
			for(var ii = 0; ii < lens; ii++){
				var Sum_index  = ii+1;
				var Max_sum		     = value.Sum_Data[ii].Max_sum;
				var Min_sum		 	 = value.Sum_Data[ii].Min_sum;
				var count_col = $("#tb_Capital_byAge thead>tr").eq(1).find('th').length;
				var row_data = "";
				for (i = 0; i < count_col; i++) {
					var id = 1 + i;
					row_data += "<td id='td"
							+ id
							+ "' class='min_width'>"
							+ "<div class='input-group col-xs-12'>"
							+ "<input type='text' id='coverage_byAge"
							+ (Sum_index)
							+ "_"
							+ id
							+ "' class='form-control' style='width:100%' value='' readonly data-toggle='tooltip' title=''/>"
							+ "<span class='input-group-btn'>"
							+ "<button class='btn btn-default btn-primary fa fa-external-link' type='button' id='bt_coverage_byAge"
							+ (Sum_index) + "_" + id
							+ "' onclick='chk_popup_checklist(this);'></button>"
							+ "</span>" + "</div>" + "</td>";
				}
				var a  =Sum_index;
				if(ii<lens){
					$("#tb_Capital_byAge tbody").append(
							"<tr><td id='headRow_" + (a) + "'></td>" + row_data + "</tr>");
				}
				
				var fromCapital = Min_sum;
				var toCapital = Max_sum;
				var range_Capital = fromCapital + " - " + toCapital;
				$("#headRow_" + Sum_index).text(range_Capital);
			}
	
	
}

function showAppendixDetail2_onlyDetail(value,row_status_app,IsApproved) {
	;
	// GEN TABLE FOR AGE x SUM = tb_Capital_byAge
	;
	// $("#tb_Capital_byAge").DataTable().destroy();
	
			
			/* วนเอาข้อมูลจาก DB ไปใส่ ไปยัง ตารางของ tab2 */
		
		var max_j=0;	
		var max_i=0;	
		for(var i = 0; i < value.Age_Data.length; i++){
			var Age_index		    = value.Age_Data[i].Age_index;
			for(var j = 0; j < value.Sum_Data.length; j++){
				var Sum_index		    = value.Sum_Data[j].Sum_index;
				var med_concat_for_cell="";
				var nmed_concat_for_cell="";
				var old=false;
				for(var k = 0; k < value.Med_Data.length; k++){
					
					if(Age_index==value.Med_Data[k].Age_index 
							&& Sum_index==value.Med_Data[k].Sum_index){
						
						var Exam_code=value.Med_Data[k].Exam_code;
						var Name_abb=value.Med_Data[k].Name_abb;
						if(old){
							med_concat_for_cell+=","+Exam_code;	
							nmed_concat_for_cell+=","+Name_abb;	
						}else{
							med_concat_for_cell=Exam_code;
							nmed_concat_for_cell=Name_abb;
							old=true;
						}
						
					}
				}
				if(med_concat_for_cell.length==0){
					
					med_concat_for_cell="NonMed";
					nmed_concat_for_cell="NonMed";
				}
				 
					
				
				var IsApproved=$("#appendix_approved_status").val()	;
	        	if(row_status_app=="รออนุมัติ"||IsApproved=="true"){
	        		$("#coverage_byAge"+(Number(j)+1) +"_"+(Number(i)+1) ).val(nmed_concat_for_cell)
					.text(med_concat_for_cell)
					.attr("title",nmed_concat_for_cell)
					.attr("readonly",true);	
					//;
					$("#bt_coverage_byAge"+(Number(j)+1) +"_"+(Number(i)+1) ).attr("disabled",true);
	        	}else{
	        		$("#coverage_byAge"+(Number(j)+1) +"_"+(Number(i)+1) ).val(nmed_concat_for_cell)
					.text(med_concat_for_cell)
					.attr("title",nmed_concat_for_cell)
					.attr("readonly",true);	
					//;
					$("#bt_coverage_byAge"+(Number(j)+1) +"_"+(Number(i)+1) ).attr("disabled",false);
	       		}
				
	        	max_j=j;
	        	max_i=i;
			}
		}
		
		max_i=max_i+1;
		max_j=max_j+1;
		if(Number(max_i)<Number(global_count_age)){
			for(var i = max_i; i < global_count_age; i++){
				for(var j = 0; j < global_count_sum; j++){
				med_concat_for_cell="NonMed";
				nmed_concat_for_cell="NonMed";
				
				var IsApproved=$("#appendix_approved_status").val()	;
	        	if(row_status_app=="รออนุมัติ"||IsApproved=="true"){
	        		$("#coverage_byAge"+(Number(j)+1) +"_"+(Number(i)+1) ).val(nmed_concat_for_cell)
					.text(med_concat_for_cell)
					.attr("title",nmed_concat_for_cell)
					.attr("readonly",true);	
					//;
					$("#bt_coverage_byAge"+(Number(j)+1) +"_"+(Number(i)+1) ).attr("disabled",true);
	        	}else{
	        		$("#coverage_byAge"+(Number(j)+1) +"_"+(Number(i)+1) ).val(nmed_concat_for_cell)
					.text(med_concat_for_cell)
					.attr("title",nmed_concat_for_cell)
					.attr("readonly",true);	
					//;
					$("#bt_coverage_byAge"+(Number(j)+1) +"_"+(Number(i)+1) ).attr("disabled",false);
	       		}
				}
			}
		}
		;
		if(Number(max_j)<Number(global_count_sum)){
			for(var j = max_j; j < global_count_sum; j++){
				for(var i = 0; i < global_count_age; i++){
				med_concat_for_cell="NonMed";
				nmed_concat_for_cell="NonMed";
				
				var IsApproved=$("#appendix_approved_status").val()	;
	        	if(row_status_app=="รออนุมัติ"||IsApproved=="true"){
	        		$("#coverage_byAge"+(Number(j)+1) +"_"+(Number(i)+1) ).val(nmed_concat_for_cell)
					.text(med_concat_for_cell)
					.attr("title",nmed_concat_for_cell)
					.attr("readonly",true);	
					//;
					$("#bt_coverage_byAge"+(Number(j)+1) +"_"+(Number(i)+1) ).attr("disabled",true);
	        	}else{
	        		$("#coverage_byAge"+(Number(j)+1) +"_"+(Number(i)+1) ).val(nmed_concat_for_cell)
					.text(med_concat_for_cell)
					.attr("title",nmed_concat_for_cell)
					.attr("readonly",true);	
					//;
					$("#bt_coverage_byAge"+(Number(j)+1) +"_"+(Number(i)+1) ).attr("disabled",false);
	       		}
				}
			}
		}
		
		$("#tb_diagnose_description").DataTable().destroy();
		$("#tb_diagnose_description tbody").find("tr").remove();
		for(var i = 0; i < value.Meddesc_Data.length; i++){

			var row = "<tr>" + "<td >" + "" + "</td>"
			+ "<td><p align='left'>" + value.Meddesc_Data[i].Name_abb+ "</p></td>" 
			+ "<td><p align='left'>"+ value.Meddesc_Data[i].Name_th + "</p></td>"
			+ "</tr>"
			$("#tb_diagnose_description tbody").append(row);
		}
		
		$("#tb_diagnose_description tbody>tr").each(function(i) {
			$(this).find('td:nth-child(1)  ').text(++i);
		});
		
		
		$("#tb_diagnose_description").DataTable({"paging": false,"bDestroy": 
			true,"bPaginate": false,"bFilter" : false,"bInfo" :
				false,"ordering": false,"sScrollY": "350px","searching" :false,scrollCollapse: true });
		$('.sorting_asc').removeClass('sorting_asc');
		$("#tb_diagnose_description_wrapper .table").css({"width":"100%"});
		$("#tb_diagnose_description_wrapper .dataTables_scrollHeadInner").css({"width":"100%"});
		
}


function set_default_version() {
	//
	var appendixVersion = $('#appendixVersion').val();
	
	if(appendixVersion==0||appendixVersion==""){
		$('#appendixVersionname').val("ต้นฉบับ");
	}else{
		$('#appendixVersionname').val("ฉบับแก้ไขที่ "+appendixVersion);
	}
	
}
function set_default_version2(value) {
	//
	
	var appendixVersion = 0;
	for(var i = 0; i < value.AppendixVersion_Data.length; i++){
		appendixVersion=Number(value.AppendixVersion_Data[i].Version_id)+1;
	    $("#appendixVersion").val(appendixVersion).attr("disabled", true);
	    //$("#Start_date").val(appendixVersion).attr("disabled", true);
	    temp_copy_start_date=value.AppendixVersion_Data[i].Eff_date;
	    //$("#E").val(appendixVersion).attr("disabled", true);
	}
	
	
	if(appendixVersion==0||appendixVersion==""){
		$('#appendixVersionname').val("ต้นฉบับ");
	}else{
		$('#appendixVersionname').val("ฉบับแก้ไขที่ "+Number(appendixVersion));
	}
	
}
var current_txn_id=0;
var global_count_age=0;
var global_count_sum=0;
/* ฟังก์ชัน กดบันทึกภาคผนวกใหม่ */
function save_appendix() {
	//
	global_count_age=0;
	global_count_sum=0;
	var appendixName = $('#appendixName').val();
	var appendixValue = $('#appendixValue').val();
	
	var appendixValueName = $('#appendixValueName').val();
	var appendixVersion = $('#appendixVersion').val();
	var appendixVersionname = $('#appendixVersionname').val();
	var CoverageWarningAmt = $('#CoverageWarningAmt').val();
	var Start_date = $('#start_date').val();
	var End_date = $('#end_date').val();
	
	if(status_copying=="edit"){
		temp_end_date=null;
		temp_start_date=null
	}
	
	if(temp_end_date==null){
		temp_end_date=End_date;
	}
	if(temp_start_date==null){
		temp_start_date=Start_date;
	}
	//temp_copy_start_date="";
	// var sale_chan = $('#end_date').val();
	
	var sale_channel = $("#lb_saleChannel_CL :selected").val();
	if(sale_channel=="NONE"){
		sale_channel=0;
	}
	if(appendixValue.length==0){
		appendixValue=temp_Appendix_Code;
	}
	if(is_copynew){
		appendixValue="";
		appendixVersion=0;
	}
	;
	var appd = [];
	var age_data = [];
	var age_index_data = [];
	var sum_index_data = [];
	var sum_data = [];
	var med_data = [];
	var agent_data = [];
	var agent_old_data = [];
	// THIS WILL INSERT IN Med_exam
	objj = {};
	objj["Appendix_code"] 	= appendixValue;
	objj["Appendix_name"] 	= appendixName;
	objj["Abb_name"] 		= appendixValueName;
	objj["Version_id"] 		= appendixVersion;
	objj["Version_name"] 	= appendixVersionname;  
	objj["Hq_med_exam_amt"] = CoverageWarningAmt;
	objj["Is_approved"]		 = false;
	objj["Exp_date"] 		= End_date;
	objj["Eff_date"]	 	= Start_date;
	
	objj["Txn_id"] 			= current_txn_id;
	objj["sale_channel"]	= sale_channel;
	appd.push(objj);	
	
	var count_age=0;
	var count_sum=0;
	// LOOP FOR GET DATA Range Age
	$("#tb_rangeAge tbody>tr").each(function(){
		
			obj2 = {};
			count_age++;
			global_count_age++;
			obj2["Age_index"] = $(this).find("td:nth-child(2) input").val();
			obj2["Min_age"] = $(this).find("td:nth-child(3) input ").val()==null?0:$(this).find("td:nth-child(3) input ").val();
			obj2["Max_age"] = $(this).find("td:nth-child(4) input ").val()==null?0:$(this).find("td:nth-child(4) input ").val();
			age_data.push(obj2);	
			age_index_data.push($(this).find("td:nth-child(2) input").val());	
	});
	// LOOP FOR GET DATA TO Range SUM
	var ii =1;
	$("#tb_capitalProtection tbody>tr").each(function(){
		// var ii =1;
			obj2 = {};
			count_sum++;
			global_count_sum++;
			// //
			obj2["Sum_index"] = $(this).find('td:nth-child(1) input[type="hidden"]').val();
			obj2["Min_sum"] = $(this).find("td:nth-child(2) input ").val()==null?0:$(this).find("td:nth-child(2) input ").val();
			obj2["Max_sum"] = $(this).find("td:nth-child(3) input ").val()==null?0:$(this).find("td:nth-child(3) input ").val();
			sum_data.push(obj2);	
			sum_index_data.push($(this).find('td:nth-child(1) input[type="hidden"]').val());
			ii++; // 'td:first input[type="checkbox"]'
	});
	
	if(nameTab== "page2_2"){
		for (i in age_index_data) {
			for (j in sum_index_data) {
			// for(var j = 1;j<=count_sum;j++){
				
				
				var cell_id = "coverage_byAge"+(Number(j)+1)+"_"+(Number(i)+1)
				var dataGroup = $("#"+cell_id).text()==null?"":$("#"+cell_id).text();
				if(dataGroup===""){
				}else{	
					var list_dataGroup = new Array();
					list_dataGroup = dataGroup.split(",");
					for (k in list_dataGroup) {
							if(list_dataGroup[k]!="NonMed"){
								
								obj3 = {};
								obj3["Age_index"] = age_index_data[i];
								obj3["Sum_index"] = sum_index_data[j];
								obj3["Appendix_code"] = appendixValue;
								obj3["Version_id"] = appendixVersion;
								obj3["Exam_code"] = list_dataGroup[k];
								med_data.push(obj3);		
							}
					}
				}
				
				
			}
			
		}
	}
	
	
	obj4 = {};
	if($("#sale_n").is(':checked')){
		obj4 = {};
		obj4["Agent_tier"] 		= "NORMAL";
		obj4["Appendix_code"] 	= appendixValue;
		obj4["Exp_date"] 		= temp_end_date;
		obj4["Eff_date"]	 	= temp_start_date;
		agent_old_data.push(obj4);	
	}
	if($("#sale_q").is(':checked')){
		obj4 = {};
		obj4["Agent_tier"] = "QUP";
		obj4["Appendix_code"] = appendixValue;
		obj4["Exp_date"] 		= temp_end_date;
		obj4["Eff_date"]	 	= temp_start_date;
		agent_old_data.push(obj4);	
	}	
	if($("#sale_t").is(':checked')){
		obj4 = {};
		obj4["Agent_tier"] = "TOP_UP";
		obj4["Appendix_code"] = appendixValue;
		obj4["Exp_date"] 		= temp_end_date;
		obj4["Eff_date"]	 	= temp_start_date;
		agent_old_data.push(obj4);	
	}
	if($("#sale_p").is(':checked')){
		obj4 = {};
		obj4["Agent_tier"] = "TOP_UP_PLUS";
		obj4["Appendix_code"] = appendixValue;
		obj4["Exp_date"] 		= temp_end_date;
		obj4["Eff_date"]	 	= temp_start_date;
		agent_old_data.push(obj4);	
	}
	if($("#sale_r").is(':checked')){
		obj4 = {};
		obj4["Agent_tier"] = "RED_LEVEL";
		obj4["Appendix_code"] = appendixValue;
		obj4["Exp_date"] 		= temp_end_date;
		obj4["Eff_date"]	 	= temp_start_date;
		agent_old_data.push(obj4);	
	}
	
	
	
	
	obj4 = {};
	if($("#sale_n").is(':checked')){
		obj4 = {};
		obj4["Agent_tier"] 		= "NORMAL";
		obj4["Appendix_code"] 	= appendixValue;
		obj4["Exp_date"] 	= End_date;
		obj4["Eff_date"]	= Start_date;
		agent_data.push(obj4);	
	}
	if($("#sale_q").is(':checked')){
		obj4 = {};
		obj4["Agent_tier"] = "QUP";
		obj4["Appendix_code"] = appendixValue;
		obj4["Exp_date"] 	= End_date;
		obj4["Eff_date"]	= Start_date;
		agent_data.push(obj4);	
	}	
	if($("#sale_t").is(':checked')){
		obj4 = {};
		obj4["Agent_tier"] = "TOP_UP";
		obj4["Appendix_code"] = appendixValue;
		obj4["Exp_date"] 	= End_date;
		obj4["Eff_date"]	= Start_date;
		agent_data.push(obj4);	
	}
	if($("#sale_p").is(':checked')){
		obj4 = {};
		obj4["Agent_tier"] = "TOP_UP_PLUS";
		obj4["Appendix_code"] = appendixValue;
		obj4["Exp_date"] 	= End_date;
		obj4["Eff_date"]	= Start_date;
		agent_data.push(obj4);	
	}
	if($("#sale_r").is(':checked')){
		obj4 = {};
		obj4["Agent_tier"] = "RED_LEVEL";
		obj4["Appendix_code"] = appendixValue;
		obj4["Exp_date"] 	= End_date;
		obj4["Eff_date"]	= Start_date;
		agent_data.push(obj4);	
	}
	
	
	var json_data = {
        	"method"			: "Tab_DraftSettingAppendix_Version1",
            "age_data"			: JSON.stringify(age_data),
            "sum_data"			: JSON.stringify(sum_data),
            "age_delete_data"	: JSON.stringify(age_delete_data),
            "sum_delete_data"	: JSON.stringify(sum_delete_data),
            "appendixversion_data": JSON.stringify(appd),
            "med_data" 			: JSON.stringify(med_data),
            "agent_data" 		: JSON.stringify(agent_data),
            "agent_old_data" 		: JSON.stringify(agent_old_data)
	}

	$.ajax({
		url: 'UW_SaveData_Servlet',
		type: "POST",
		data: json_data,
		success: function (response) {
			Statuesave="Y";
			setcurrent_txn_id(response);
			;
			if(nameTab== "page2_2"){
				$("#Appendix_code_copy").val("");
			}
			
			
			
		}
	});
	
	
	
	Statuesave="Y";
	row_status_app="สร้างใหม่";
	is_copynew=false;
	temp_start_date =Start_date;
	temp_end_date   =End_date;
	
}
function setcurrent_txn_id(value) {
	if(value.length>0){
		current_txn_id=value.substring(0, value.indexOf(",")); 
		$('#appendixValue').val(value.substring(value.indexOf(",")+1, value.length)); 
	}
	
// for(var i = 0; i < value.AppendixVersion_Data.length; i++){
// current_txn_id=value;
// }
	
}
var row_appendix_status_gb;
function save_req_appendix() {
	
	
	var appendixName 		= $('#appendixName').val();
	var appendixValue 		= $('#appendixValue').val();
	var appendixValueName 	= $('#appendixValueName').val();
	var appendixVersion 	= $('#appendixVersion').val();
	var appendixVersionname = $('#appendixVersionname').val();
	var CoverageWarningAmt 	= $('#CoverageWarningAmt').val();
	var Start_date 			= $('#start_date').val();
	var End_date 			= $('#end_date').val();

	var sale_channel = $("#lb_saleChannel_CL :selected").val();
	if(sale_channel=="NONE"){
		sale_channel=0;
	}
	
	
	
	var appd = [];
	var age_data = [];
	var age_index_data = [];
	var sum_index_data = [];
	var sum_data = [];
	var med_data = [];
	// THIS WILL INSERT IN Med_exam
	objj = {};
	objj["Appendix_code"] 	= appendixValue;
	objj["Appendix_name"] 	= appendixName;
	objj["Abb_name"] 		= appendixValueName;
	objj["Version_id"] 		= appendixVersion;
	objj["Version_name"] 	= appendixVersionname;  
	objj["Hq_med_exam_amt"] = CoverageWarningAmt;
	objj["Is_approved"]		 = false;
	objj["Exp_date"] 		= End_date;
	objj["Eff_date"]	 	= Start_date;  
	
	objj["Txn_id"] 			= current_txn_id;
	objj["sale_channel"] 	= sale_channel;
	
	appd.push(objj);	
	
	
	
	var count_age=0;
	var count_sum=0;
	// LOOP FOR GET DATA Range Age
	$("#tb_rangeAge tbody>tr").each(function(){
		
			obj2 = {};
			count_age++;
			obj2["Age_index"] = $(this).find("td:nth-child(2) input").val();
			obj2["Min_age"] = $(this).find("td:nth-child(3) input ").val()==null?0:$(this).find("td:nth-child(3) input ").val();
			obj2["Max_age"] = $(this).find("td:nth-child(4) input ").val()==null?0:$(this).find("td:nth-child(4) input ").val();
			age_data.push(obj2);	
			age_index_data.push($(this).find("td:nth-child(2) input").val());	
	});
	// LOOP FOR GET DATA TO Range SUM
	var ii =1;
	$("#tb_capitalProtection tbody>tr").each(function(){
		// var ii =1;
			obj2 = {};
			count_sum++;
			obj2["Sum_index"] = $(this).find('td:nth-child(1) input[type="hidden"]').val();
			obj2["Min_sum"] = $(this).find("td:nth-child(2) input ").val()==null?0:$(this).find("td:nth-child(2) input ").val();
			obj2["Max_sum"] = $(this).find("td:nth-child(3) input ").val()==null?0:$(this).find("td:nth-child(3) input ").val();
			sum_data.push(obj2);	
			sum_index_data.push($(this).find('td:nth-child(1) input[type="hidden"]').val());
			ii++; // 'td:first input[type="checkbox"]'
	});
	if(nameTab== "page2_2"){
		for (i in age_index_data) {
			for (j in sum_index_data) {
			// for(var j = 1;j<=count_sum;j++){
				
				
				var cell_id = "coverage_byAge"+(Number(j)+1)+"_"+(Number(i)+1)
				var dataGroup = $("#"+cell_id).text()==null?"":$("#"+cell_id).text();
				if(dataGroup===""){
				}else{	
					var list_dataGroup = new Array();
					list_dataGroup = dataGroup.split(",");
					for (k in list_dataGroup) {
							if(list_dataGroup[k]!="NonMed"){
								
								obj3 = {};
								obj3["Age_index"] = age_index_data[i];
								obj3["Sum_index"] = sum_index_data[j];
								obj3["Appendix_code"] = appendixValue;
								obj3["Version_id"] = appendixVersion;
								obj3["Exam_code"] = list_dataGroup[k];
								med_data.push(obj3);		
							}
					}
				}
				
				
			}
			
		}
	}
	
	
	var json_data = {
        	"method"	: "Tab_ReqSettingAppendix_Version1",
            "age_data"	: JSON.stringify(age_data),
            "sum_data"	: JSON.stringify(sum_data),
            "age_delete_data"	: JSON.stringify(age_delete_data),
            "sum_delete_data"	: JSON.stringify(sum_delete_data),
            "appendixversion_data": JSON.stringify(appd),
            "med_data" 	: JSON.stringify(med_data)
	}

	$.ajax({
		url: 'UW_SaveData_Servlet',
		type: "POST",
		data: json_data,
		success: function (response) {
			Statuesave="Y";
			// setcurrent_txn_id(response);
			
			row_status_app="รออนุมัติ";
			row_appendix_status_gb="รออนุมัติ";
			$("#bt1_req_med").attr("disabled",true)
			$("#bt1_submit_med").attr("disabled",true)
			
			Statuesave="Y";
			
			
			
			
			/***  CODE FOR PREPARE AND SEND MAIL  ****/
			var prepareEmail_data = [];
			objEmail = {};
			objEmail["requestApprove"] 		="ขออนุมัติ";
			objEmail["manuName"] 			="ตารางภาคผนวก";
			objEmail["empNameHide"] 		=$("#empNameHide").val();
			objEmail["empID"] 				=$("#empID").val();
			objEmail["departmentID"] 		=$("#departmentID").val();
			objEmail["departmentHide"] 		=$("#departmentHide").val();
			
			objEmail["appendixValueName"] 	=appendixValueName;
			objEmail["appendixName"] 		=appendixName;
			objEmail["Start_date"] 			=Start_date;
			objEmail["End_date"] 			=End_date;
			
			prepareEmail_data.push(objEmail);
			
			var json_data2 = {
		        	"method": "send_Email",
		        	"OptionEmail": "3",
		        	"prepareEmail_data": JSON.stringify(prepareEmail_data),
		            
			}
			$.ajax({
				url: 'UW_Email_Servlet',
				type: "POST",
				data: json_data2,
				success: function (response) {
					
				}
			});
			/*** END CODE FOR PREPARE AND SEND MAIL  ****/
			
			
			var cap_age_row_length =$("#tb_Capital_byAge tbody>tr").length;
			var cap_age_column_length ;//=$("#tb_Capital_byAge tbody").columnCount();
			
			var cap_age_column_length ;//=$("#tb_Capital_byAge tbody").columnCount();
			
			$("#tb_Capital_byAge tbody tr").each(function(){
			      cap_age_column_length = 0
			      $(this).children("td").each(function(){
			    	  cap_age_column_length++;
			      }); // next td
			}); // next tr
			for(var i = 1 ;i<=cap_age_row_length;i++){
				for(var j = 1 ;j<=cap_age_column_length;j++){
					$("#bt_coverage_byAge"+(Number(j)) +"_"+(Number(i)) ).attr("disabled",true);
				}
			}
		}
	});
	
	
}

function save_req_edit_appendix() {
	
	
	var appendixName 		= $('#appendixName').val();
	var appendixValue 		= $('#appendixValue').val();
	var appendixValueName 	= $('#appendixValueName').val();
	var appendixVersion 	= $('#appendixVersion').val();
	var appendixVersionname = $('#appendixVersionname').val();
	var CoverageWarningAmt 	= $('#CoverageWarningAmt').val();
	var Start_date 			= $('#start_date').val();
	var End_date 			= $('#end_date').val();

	var sale_channel = $("#lb_saleChannel_CL :selected").val();
	if(sale_channel=="NONE"){
		sale_channel=0;
	}
	
	var appd = [];
	var age_data = [];
	var age_index_data = [];
	var sum_index_data = [];
	var sum_data = [];
	var med_data = [];
	// THIS WILL INSERT IN Med_exam
	objj = {};
	objj["Appendix_code"] 	= appendixValue;
	objj["Appendix_name"] 	= appendixName;
	objj["Abb_name"] 		= appendixValueName;
	objj["Version_id"] 		= appendixVersion;
	objj["Version_name"] 	= appendixVersionname;  
	objj["Hq_med_exam_amt"] = CoverageWarningAmt;
	objj["Is_approved"]		 = false;
	objj["Exp_date"] 		= End_date;
	objj["Eff_date"]	 	= Start_date;
	
	objj["Txn_id"] 			= current_txn_id;
	objj["sale_channel"]	= sale_channel;
	appd.push(objj);	
	
	var count_age=0;
	var count_sum=0;
	// LOOP FOR GET DATA Range Age
	$("#tb_rangeAge tbody>tr").each(function(){
		
			obj2 = {};
			count_age++;
			obj2["Age_index"] = $(this).find("td:nth-child(2) input").val();
			obj2["Min_age"] = $(this).find("td:nth-child(3) input ").val()==null?0:$(this).find("td:nth-child(3) input ").val();
			obj2["Max_age"] = $(this).find("td:nth-child(4) input ").val()==null?0:$(this).find("td:nth-child(4) input ").val();
			age_data.push(obj2);	
			age_index_data.push($(this).find("td:nth-child(2) input").val());	
	});
	// LOOP FOR GET DATA TO Range SUM
	var ii =1;
	$("#tb_capitalProtection tbody>tr").each(function(){
		// var ii =1;
			obj2 = {};
			count_sum++;
			obj2["Sum_index"] = $(this).find('td:nth-child(1) input[type="hidden"]').val();
			obj2["Min_sum"] = $(this).find("td:nth-child(2) input ").val()==null?0:$(this).find("td:nth-child(2) input ").val();
			obj2["Max_sum"] = $(this).find("td:nth-child(3) input ").val()==null?0:$(this).find("td:nth-child(3) input ").val();
			sum_data.push(obj2);	
			sum_index_data.push($(this).find('td:nth-child(1) input[type="hidden"]').val());
			ii++; // 'td:first input[type="checkbox"]'
	});
	if(nameTab== "page2_2"){
		for (i in age_index_data) {
			for (j in sum_index_data) {
			// for(var j = 1;j<=count_sum;j++){
				
				
				var cell_id = "coverage_byAge"+(Number(j)+1)+"_"+(Number(i)+1)
				var dataGroup = $("#"+cell_id).text()==null?"":$("#"+cell_id).text();
				if(dataGroup===""){
				}else{	
					var list_dataGroup = new Array();
					list_dataGroup = dataGroup.split(",");
					for (k in list_dataGroup) {
							if(list_dataGroup[k]!="NonMed"){
								
								obj3 = {};
								obj3["Age_index"] = age_index_data[i];
								obj3["Sum_index"] = sum_index_data[j];
								obj3["Appendix_code"] = appendixValue;
								obj3["Version_id"] = appendixVersion;
								obj3["Exam_code"] = list_dataGroup[k];
								med_data.push(obj3);		
							}
					}
				}
				
				
			}
			
		}
	}
	
	
	var json_data = {
        	"method"	: "Tab_ReqEditSettingAppendix_Version1",
            "age_data"	: JSON.stringify(age_data),
            "sum_data"	: JSON.stringify(sum_data),
            "age_delete_data"	: JSON.stringify(age_delete_data),
            "sum_delete_data"	: JSON.stringify(sum_delete_data),
            "appendixversion_data": JSON.stringify(appd),
            "med_data" 	: JSON.stringify(med_data)
	}

	$.ajax({
		url: 'UW_SaveData_Servlet',
		type: "POST",
		data: json_data,
		success: function (response) {
			Statuesave="Y";
			setcurrent_txn_id(response);
			
			/***  CODE FOR PREPARE AND SEND MAIL  ****/
			var prepareEmail_data = [];
			objEmail = {};
			objEmail["requestApprove"] 		="ขออนุมัติแก้ไข";
			objEmail["manuName"] 			="ตารางภาคผนวก";
			objEmail["empNameHide"] 		=$("#empNameHide").val();
			objEmail["empID"] 				=$("#empID").val();
			objEmail["departmentID"] 		=$("#departmentID").val();
			objEmail["departmentHide"] 		=$("#departmentHide").val();
			
			objEmail["appendixValueName"] 	=appendixValueName;
			objEmail["appendixName"] 		=appendixName;
			objEmail["Start_date"] 			=Start_date;
			objEmail["End_date"] 			=End_date;
			
			prepareEmail_data.push(objEmail);
			
			var json_data2 = {
		        	"method": "send_Email",
		        	"OptionEmail": "3",
		        	"prepareEmail_data": JSON.stringify(prepareEmail_data),
		            
			}
			$.ajax({
				url: 'UW_Email_Servlet',
				type: "POST",
				data: json_data2,
				success: function (response) {
					
				}
			});
			/*** END CODE FOR PREPARE AND SEND MAIL  ****/
		}
	});
	
	
	
	
	$("#bt1_req_edit_app").attr("disabled",true)
	row_status_app="ขอแก้ไข";
	Statuesave="Y";
	
}
function save_approve_appendix() {
	
	;
	var appendixName = $('#appendixName').val();
	var appendixValue = $('#appendixValue').val();
	var appendixValueName = $('#appendixValueName').val();
	var appendixVersion = $('#appendixVersion').val();
	var appendixVersionname = $('#appendixVersionname').val();
	var CoverageWarningAmt = $('#CoverageWarningAmt').val();
	var Start_date = $('#start_date').val();
	var End_date = $('#end_date').val();

	var sale_channel = $("#lb_saleChannel_CL :selected").val();
	if(sale_channel=="NONE"){
		sale_channel=0;
	}
	
	var appd = [];
	var age_data = [];
	var age_index_data = [];
	var sum_index_data = [];
	var sum_data = [];
	var med_data = [];
	
	
	
	// THIS WILL INSERT IN Med_exam
	objj = {};
	objj["Appendix_code"] 	= appendixValue;
	objj["Abb_name"] 		= appendixValueName;
	objj["Appendix_name"] 	= appendixName;
	objj["Version_id"] 		= appendixVersion;
	objj["Version_name"] 	= appendixVersionname;  
	objj["Hq_med_exam_amt"] = CoverageWarningAmt;
	objj["Is_approved"]		 = false;
	objj["Exp_date"] 		= End_date;
	objj["Eff_date"]	 	= Start_date;
	//objj["sale_channel"]	= sale_channel;
	objj["Txn_id"] 			= current_txn_id;
	objj["sale_channel"]	= sale_channel;
	appd.push(objj);	
	
	var count_age=0;
	var count_sum=0;
	// LOOP FOR GET DATA Range Age
	$("#tb_rangeAge tbody>tr").each(function(){
		
			obj2 = {};
			count_age++;
			obj2["Age_index"] = $(this).find("td:nth-child(2) input").val();
			obj2["Min_age"] = $(this).find("td:nth-child(3) input ").val()==null?0:$(this).find("td:nth-child(3) input ").val();
			obj2["Max_age"] = $(this).find("td:nth-child(4) input ").val()==null?0:$(this).find("td:nth-child(4) input ").val();
			age_data.push(obj2);	
			age_index_data.push($(this).find("td:nth-child(2) input").val());	
	});
	// LOOP FOR GET DATA TO Range SUM
	var ii =1;
	$("#tb_capitalProtection tbody>tr").each(function(){
		// var ii =1;
			obj2 = {};
			count_sum++;
			obj2["Sum_index"] = $(this).find('td:nth-child(1) input[type="hidden"]').val();
			obj2["Min_sum"] = $(this).find("td:nth-child(2) input ").val()==null?0:$(this).find("td:nth-child(2) input ").val();
			obj2["Max_sum"] = $(this).find("td:nth-child(3) input ").val()==null?0:$(this).find("td:nth-child(3) input ").val();
			sum_data.push(obj2);	
			sum_index_data.push($(this).find('td:nth-child(1) input[type="hidden"]').val());
			ii++; // 'td:first input[type="checkbox"]'
	});
	if(nameTab== "page2_2"){
		for (i in age_index_data) {
			for (j in sum_index_data) {
			// for(var j = 1;j<=count_sum;j++){
				// coverage_byAge1_1
				
				var cell_id = "coverage_byAge"+(Number(j)+1)+"_"+(Number(i)+1)
				var dataGroup = $("#"+cell_id).text()==null?"":$("#"+cell_id).text();
				if(dataGroup===""){
				}else{	
					var list_dataGroup = new Array();
					list_dataGroup = dataGroup.split(",");
					for (k in list_dataGroup) {
							if(list_dataGroup[k]!="NonMed"){
								
								obj3 = {};
								obj3["Age_index"] = age_index_data[i];
								obj3["Sum_index"] = sum_index_data[j];
								obj3["Appendix_code"] = appendixValue;
								obj3["Version_id"] = appendixVersion;
								obj3["Exam_code"] = list_dataGroup[k];
								med_data.push(obj3);		
							}
					}
				}
				
				
			}
			
		}
	}
	
	
	
	;
	if(row_status_app=="ขอแก้ไข"){
		var json_data = {
	        	"method"	: "Tab_ApproveEditSettingAppendix_Version1",
	            "age_data"	: JSON.stringify(age_data),
	            "sum_data"	: JSON.stringify(sum_data),
	            "age_delete_data"	: JSON.stringify(age_delete_data),
	            "sum_delete_data"	: JSON.stringify(sum_delete_data),
	            "appendixversion_data": JSON.stringify(appd),
	            "med_data" 	: JSON.stringify(med_data)
		}
		$.ajax({
			url: 'UW_SaveData_Servlet',
			type: "POST",
			data: json_data,
			success: function (response) {
				Statuesave="Y";
				setcurrent_txn_id(response);
				row_status_app="แก้ไข";
				;
				/***  CODE FOR PREPARE AND SEND MAIL  ****/
				var prepareEmail_data = [];
				objEmail = {};
				objEmail["requestApprove"] 		="อนุมัติแก้ไข";
				objEmail["manuName"] 			="ตารางภาคผนวก";
				objEmail["empNameHide"] 		=$("#empNameHide").val();
				objEmail["empID"] 				=$("#empID").val();
				objEmail["departmentID"] 		=$("#departmentID").val();
				objEmail["departmentHide"] 		=$("#departmentHide").val();
				
				objEmail["appendixValueName"] 	=appendixValueName;
				objEmail["appendixName"] 		=appendixName;
				objEmail["Start_date"] 			=Start_date;
				objEmail["End_date"] 			=End_date;
				
				prepareEmail_data.push(objEmail);
				
				var json_data2 = {
			        	"method": "send_Email",
			        	"OptionEmail": "3",
			        	"prepareEmail_data": JSON.stringify(prepareEmail_data),
			            
				}
				$.ajax({
					url: 'UW_Email_Servlet',
					type: "POST",
					data: json_data2,
					success: function (response) {
						
					}
				});
				/*** END CODE FOR PREPARE AND SEND MAIL  ****/
				
			}
		});
	}else{;
		var json_data = {
	        	"method"	: "Tab_ApproveSettingAppendix_Version1",
	            "age_data"	: JSON.stringify(age_data),
	            "sum_data"	: JSON.stringify(sum_data),
	            "age_delete_data"	: JSON.stringify(age_delete_data),
	            "sum_delete_data"	: JSON.stringify(sum_delete_data),
	            "appendixversion_data": JSON.stringify(appd),
	            "med_data" 	: JSON.stringify(med_data)
		}
		$.ajax({
			url: 'UW_SaveData_Servlet',
			type: "POST",
			data: json_data,
			success: function (response) {
				Statuesave="Y";
				setcurrent_txn_id(response);
				row_status_app="อนุมัติแล้ว";
				
				
				/** GEN JSON SETTING CHECKLIST  **/
				var json_data3 = {
			        	"method": "Gen_JSON_Appendix_All",	
				}
				$.ajax({
					url: 'UW_JSON_Servlet',
					type: "POST",
					data: json_data3,
					success: function (response) {
						/***  CODE FOR PREPARE AND SEND MAIL  ****/
						var prepareEmail_data = [];
						objEmail = {};
						objEmail["requestApprove"] 		="อนุมัติ";
						objEmail["manuName"] 			="ตารางภาคผนวก";
						objEmail["empNameHide"] 		=$("#empNameHide").val();
						objEmail["empID"] 				=$("#empID").val();
						objEmail["departmentID"] 		=$("#departmentID").val();
						objEmail["departmentHide"] 		=$("#departmentHide").val();
						
						objEmail["appendixValueName"] 	=appendixValueName;
						objEmail["appendixName"] 		=appendixName;
						objEmail["Start_date"] 			=Start_date;
						objEmail["End_date"] 			=End_date;
						
						prepareEmail_data.push(objEmail);
						
						var json_data2 = {
					        	"method": "send_Email",
					        	"OptionEmail": "3",
					        	"prepareEmail_data": JSON.stringify(prepareEmail_data),
					            
						}
						$.ajax({
							url: 'UW_Email_Servlet',
							type: "POST",
							data: json_data2,
							success: function (response) {
								
							}
						});
						/*** END CODE FOR PREPARE AND SEND MAIL  ****/
						
					}
				});
				/** GEN JSON SETTING CHECKLIST  **/
				
				
				
//				/***  CODE FOR PREPARE AND SEND MAIL  ****/
//				var prepareEmail_data = [];
//				objEmail = {};
//				objEmail["requestApprove"] 		="อนุมัติ";
//				objEmail["manuName"] 			="ตารางภาคผนวก";
//				objEmail["empNameHide"] 		=$("#empNameHide").val();
//				objEmail["empID"] 				=$("#empID").val();
//				objEmail["departmentID"] 		=$("#departmentID").val();
//				objEmail["departmentHide"] 		=$("#departmentHide").val();
//				
//				objEmail["appendixValueName"] 	=appendixValueName;
//				objEmail["appendixName"] 		=appendixName;
//				objEmail["Start_date"] 			=Start_date;
//				objEmail["End_date"] 			=End_date;
//				
//				prepareEmail_data.push(objEmail);
//				
//				var json_data2 = {
//			        	"method": "send_Email",
//			        	"OptionEmail": "3",
//			        	"prepareEmail_data": JSON.stringify(prepareEmail_data),
//			            
//				}
//				$.ajax({
//					url: 'UW_Email_Servlet',
//					type: "POST",
//					data: json_data2,
//					success: function (response) {
//						
//					}
//				});
//				/*** END CODE FOR PREPARE AND SEND MAIL  ****/
			}
		});
	}
	
	
	$("#bt1_appr_med").attr("disabled",true)
	$("#bt1_not_appr_med").attr("disabled",true)
	Statuesave="Y";
	
}
function save_not_approve_appendix() {
	var appendixName = $('#appendixName').val();
	var appendixValue = $('#appendixValue').val();
	var appendixValueName = $('#appendixValueName').val();
	var appendixVersion = $('#appendixVersion').val();
	var appendixVersionname = $('#appendixVersionname').val();
	var CoverageWarningAmt = $('#CoverageWarningAmt').val();
	var Start_date = $('#start_date').val();
	var End_date = $('#end_date').val();

	var sale_channel = $("#lb_saleChannel_CL :selected").val();
	if(sale_channel=="NONE"){
		sale_channel=0;
	}
	
	var appd = [];
	var age_data = [];
	var age_index_data = [];
	var sum_index_data = [];
	var sum_data = [];
	var med_data = [];
	
	if(row_status_app=="ขอแก้ไข"){
		row_status_app="อนุมัติแล้ว";
		// THIS WILL INSERT IN Med_exam
		objj = {};
		objj["Appendix_code"] 	= appendixValue;
		objj["Abb_name"] 		= appendixValueName;
		objj["Appendix_name"] 	= appendixName;
		objj["Version_id"] 		= appendixVersion;
		objj["Version_name"] 	= appendixVersionname;  
		objj["Hq_med_exam_amt"] = CoverageWarningAmt;
		objj["Is_approved"]		 = false;
		objj["Exp_date"] 		= End_date;
		objj["Eff_date"]	 	= Start_date;
		
		objj["Txn_id"] 			= current_txn_id;
		objj["sale_channel"]	= sale_channel;
		appd.push(objj);	
		
		var count_age=0;
		var count_sum=0;
		// LOOP FOR GET DATA Range Age
		$("#tb_rangeAge tbody>tr").each(function(){
			
				obj2 = {};
				count_age++;
				obj2["Age_index"] = $(this).find("td:nth-child(2) input").val();
				obj2["Min_age"] = $(this).find("td:nth-child(3) input ").val()==null?0:$(this).find("td:nth-child(3) input ").val();
				obj2["Max_age"] = $(this).find("td:nth-child(4) input ").val()==null?0:$(this).find("td:nth-child(4) input ").val();
				age_data.push(obj2);	
				age_index_data.push($(this).find("td:nth-child(2) input").val());	
		});
		// LOOP FOR GET DATA TO Range SUM
		var ii =1;
		$("#tb_capitalProtection tbody>tr").each(function(){
			// var ii =1;
				obj2 = {};
				count_sum++;
				obj2["Sum_index"] = $(this).find('td:nth-child(1) input[type="hidden"]').val();
				obj2["Min_sum"] = $(this).find("td:nth-child(2) input ").val()==null?0:$(this).find("td:nth-child(2) input ").val();
				obj2["Max_sum"] = $(this).find("td:nth-child(3) input ").val()==null?0:$(this).find("td:nth-child(3) input ").val();
				sum_data.push(obj2);	
				sum_index_data.push($(this).find('td:nth-child(1) input[type="hidden"]').val());
				ii++; // 'td:first input[type="checkbox"]'
		});
		if(nameTab== "page2_2"){
			for (i in age_index_data) {
				for (j in sum_index_data) {
				// for(var j = 1;j<=count_sum;j++){
					
					
					var cell_id = "coverage_byAge"+(Number(j)+1)+"_"+(Number(i)+1)
					var dataGroup = $("#"+cell_id).text()==null?"":$("#"+cell_id).text();
					if(dataGroup===""){
					}else{	
						var list_dataGroup = new Array();
						list_dataGroup = dataGroup.split(",");
						for (k in list_dataGroup) {
								if(list_dataGroup[k]!="NonMed"){
									
									obj3 = {};
									obj3["Age_index"] = age_index_data[i];
									obj3["Sum_index"] = sum_index_data[j];
									obj3["Appendix_code"] = appendixValue;
									obj3["Version_id"] = appendixVersion;
									obj3["Exam_code"] = list_dataGroup[k];
									med_data.push(obj3);		
								}
						}
					}
					
					
				}
				
			}
		}
		
		
		var json_data = {
	        	"method"	: "Tab_NotApproveEditSettingAppendix_Version1",
	            "age_data"	: JSON.stringify(age_data),
	            "sum_data"	: JSON.stringify(sum_data),
	            "age_delete_data"	: JSON.stringify(age_delete_data),
	            "sum_delete_data"	: JSON.stringify(sum_delete_data),
	            "appendixversion_data": JSON.stringify(appd),
	            "med_data" 	: JSON.stringify(med_data),
	            approve_note : $("#textarea_reason_back").val()
		}
		
		$.ajax({
			url: 'UW_SaveData_Servlet',
			type: "POST",
			data: json_data,
			success: function (response) {
				Statuesave="Y";
				setcurrent_txn_id(response);
				
				/***  CODE FOR PREPARE AND SEND MAIL  ****/
				var prepareEmail_data = [];
				objEmail = {};
				objEmail["requestApprove"] 		="ไม่อนุมัติแก้ไข";
				objEmail["manuName"] 			="ตารางภาคผนวก";
				objEmail["empNameHide"] 		=$("#empNameHide").val();
				objEmail["empID"] 				=$("#empID").val();
				objEmail["departmentID"] 		=$("#departmentID").val();
				objEmail["departmentHide"] 		=$("#departmentHide").val();
				
				objEmail["appendixValueName"] 	=appendixValueName;
				objEmail["appendixName"] 		=appendixName;
				objEmail["Start_date"] 			=Start_date;
				objEmail["End_date"] 			=End_date;
				
				prepareEmail_data.push(objEmail);
				
				var json_data2 = {
			        	"method": "send_Email",
			        	"OptionEmail": "3",
			        	"prepareEmail_data": JSON.stringify(prepareEmail_data),
			            
				}
				$.ajax({
					url: 'UW_Email_Servlet',
					type: "POST",
					data: json_data2,
					success: function (response) {
						
					}
				});
				/*** END CODE FOR PREPARE AND SEND MAIL  ****/
			}
		});
	}else{
		// THIS WILL INSERT IN Med_exam
		row_status_app="ไม่อนุมัติ";
		objj = {};
		objj["Appendix_code"] 	= appendixValue;
		objj["Abb_name"] 		= appendixValueName;
		objj["Appendix_name"] 	= appendixName;
		objj["Version_id"] 		= appendixVersion;
		objj["Version_name"] 	= appendixVersionname;  
		objj["Hq_med_exam_amt"] = CoverageWarningAmt;
		objj["Is_approved"]		 = false;
		objj["Exp_date"] 		= End_date;
		objj["Eff_date"]	 	= Start_date;
		
		objj["Txn_id"] 			= current_txn_id;
		objj["sale_channel"]	= sale_channel;
		appd.push(objj);	
		
		var count_age=0;
		var count_sum=0;
		// LOOP FOR GET DATA Range Age
		$("#tb_rangeAge tbody>tr").each(function(){
			
				obj2 = {};
				count_age++;
				obj2["Age_index"] = $(this).find("td:nth-child(2) input").val();
				obj2["Min_age"] = $(this).find("td:nth-child(3) input ").val()==null?0:$(this).find("td:nth-child(3) input ").val();
				obj2["Max_age"] = $(this).find("td:nth-child(4) input ").val()==null?0:$(this).find("td:nth-child(4) input ").val();
				age_data.push(obj2);	
				age_index_data.push($(this).find("td:nth-child(2) input").val());	
		});
		// LOOP FOR GET DATA TO Range SUM
		var ii =1;
		$("#tb_capitalProtection tbody>tr").each(function(){
			// var ii =1;
				obj2 = {};
				count_sum++;
				obj2["Sum_index"] = $(this).find('td:nth-child(1) input[type="hidden"]').val();
				obj2["Min_sum"] = $(this).find("td:nth-child(2) input ").val()==null?0:$(this).find("td:nth-child(2) input ").val();
				obj2["Max_sum"] = $(this).find("td:nth-child(3) input ").val()==null?0:$(this).find("td:nth-child(3) input ").val();
				sum_data.push(obj2);	
				sum_index_data.push($(this).find('td:nth-child(1) input[type="hidden"]').val());
				ii++; // 'td:first input[type="checkbox"]'
		});
		if(nameTab== "page2_2"){
			for (i in age_index_data) {
				for (j in sum_index_data) {
				// for(var j = 1;j<=count_sum;j++){
					
					
					var cell_id = "coverage_byAge"+(Number(j)+1)+"_"+(Number(i)+1)
					var dataGroup = $("#"+cell_id).text()==null?"":$("#"+cell_id).text();
					if(dataGroup===""){
					}else{	
						var list_dataGroup = new Array();
						list_dataGroup = dataGroup.split(",");
						for (k in list_dataGroup) {
								if(list_dataGroup[k]!="NonMed"){
									
									obj3 = {};
									obj3["Age_index"] = age_index_data[i];
									obj3["Sum_index"] = sum_index_data[j];
									obj3["Appendix_code"] = appendixValue;
									obj3["Version_id"] = appendixVersion;
									obj3["Exam_code"] = list_dataGroup[k];
									med_data.push(obj3);		
								}
						}
					}
					
					
				}
				
			}
		}
		
		
		var json_data = {
	        	"method"	: "Tab_NotApproveSettingAppendix_Version1",
	            "age_data"	: JSON.stringify(age_data),
	            "sum_data"	: JSON.stringify(sum_data),
	            "age_delete_data"	: JSON.stringify(age_delete_data),
	            "sum_delete_data"	: JSON.stringify(sum_delete_data),
	            "appendixversion_data": JSON.stringify(appd),
	            "med_data" 	: JSON.stringify(med_data),
	            approve_note : $("#textarea_reason_back").val()
		}
		
		$.ajax({
			url: 'UW_SaveData_Servlet',
			type: "POST",
			data: json_data,
			success: function (response) {
				Statuesave="Y";
				setcurrent_txn_id(response);
				
				/***  CODE FOR PREPARE AND SEND MAIL  ****/
				var prepareEmail_data = [];
				objEmail = {};
				objEmail["requestApprove"] 		="ไม่อนุมัติ";
				objEmail["manuName"] 			="ตารางภาคผนวก";
				objEmail["empNameHide"] 		=$("#empNameHide").val();
				objEmail["empID"] 				=$("#empID").val();
				objEmail["departmentID"] 		=$("#departmentID").val();
				objEmail["departmentHide"] 		=$("#departmentHide").val();
				
				objEmail["appendixValueName"] 	=appendixValueName;
				objEmail["appendixName"] 		=appendixName;
				objEmail["Start_date"] 			=Start_date;
				objEmail["End_date"] 			=End_date;
				
				prepareEmail_data.push(objEmail);
				
				var json_data2 = {
			        	"method": "send_Email",
			        	"OptionEmail": "3",
			        	"prepareEmail_data": JSON.stringify(prepareEmail_data),
			            
				}
				$.ajax({
					url: 'UW_Email_Servlet',
					type: "POST",
					data: json_data2,
					success: function (response) {
						
					}
				});
				/*** END CODE FOR PREPARE AND SEND MAIL  ****/
			}
		});
	}
	
	
	
	$("#bt1_appr_med").attr("disabled",true)
	$("#bt1_not_appr_med").attr("disabled",true)
	
	$("#textarea_reason_back").val()
	
	Statuesave="Y";
	
}
function bt_save_selectListHealth(e) {
	
	
	$("#search_tb_selectListHealth").val("");
	$("#search_tb_selectListHealthGroup").val("");
	
	var id_target = $(e).parent().parent().find('input').attr('id');
	var diagnose_concat = [];
	var diagnose_code_concat = [];
	var i = 0;
	var diagnose_value_list = [];
	var diagnose_name_list = [];
	var diagnose_value_list = [];
	var diagnoseGroup_value_list = [];
	var diagnoseGroup_name_list = [];
	var count_Change=0;
	// / ลูปสำหรับ วนต่อสริงเพื่อใส่ข้อความ
	$("#tb_selectListHealth input:checkbox:checked ").each(function(j) {
		
		// if ($(this).find('td:nth-child(1) input ').is(':checked')) {
			var id = $(this).attr("id");
				id = id.replace("chk_exam","");
			
			var blood_code = $("#txt_examCode"+id).text();
			var blood_name = $("#txt_examNameAbb"+id).text();	
			var blood_nameth = $("#txt_examName"+id).text();
			diagnose_concat.push(blood_name);
			diagnose_code_concat.push(blood_code);
			
			diagnose_name_list.push(blood_nameth);
			diagnose_value_list.push(blood_name);
			count_Change++;
		// }
	});
	
	$("#tb_selectListHealthGroup input:checkbox:checked ").each(function(j) {
		
		// if ($(this).find('td:nth-child(1) input ').is(':checked')) {
			var id = $(this).attr("id");
				id = id.replace("chk_blood","");
			;
			var blood_code = $("#txt_bloodCode"+id).text();
			var blood_name = $("#txt_bloodNameAbb"+id).text();	
			var blood_nameth = $("#txt_bloodName"+id).text();
			diagnose_concat.push(blood_name);
			diagnose_code_concat.push(blood_code);
			
			diagnoseGroup_name_list.push(blood_nameth);
			diagnoseGroup_value_list.push(blood_name);
			count_Change++;
		// }
	});
	
	if(count_Change>0){
		Statuesave='N';
	}

	if(diagnose_code_concat.length>0){
		$("#" + id_target).val(diagnose_concat)
		.text(diagnose_code_concat)
		.attr("title",diagnose_concat);
	}else{
		$("#" + id_target).val("NonMed").text("NonMed").attr("title","NonMed");
	}
		

	
	 // //* ลูปสำหรับ วนเช็ค รายละอียดการตรวจโรค สำหรับ เพิ่มข้อมูลตาราง *
		// tb_diagnose_description//////
	 
	var l=0;
	var n=0;
	
	$("#tb_diagnose_description tbody>tr").each(function(i) {
		
	
		const textMatch = $(this)
	    .children()
	    
	    .toArray()
	    .some(td => $(td).text().toLowerCase().includes("No data".toLowerCase()))
	  
		
		if(textMatch){
			$("#tb_diagnose_description tbody").find("tr").remove();
			
		}
	});
	
	$("#tb_diagnose_description").DataTable().destroy();
	var count_desrow = $("#tb_diagnose_description tbody>tr").length;
	var checker = 0;
	var checker_delete = 0;
	var diagnoseGroup_name_list_delete = [];
	if (count_desrow == 0) {
		for (j in diagnose_value_list) {
			
			var row = "<tr>" + "<td>" + "" + "</td>" + "<td><p align='left'>"
					+ diagnose_value_list[j] + "</p></td>" + "<td><p align='left'>"
					+ diagnose_name_list[j] + "</p></td>" + "</tr>"
			$("#tb_diagnose_description tbody").append(row);
		}
		for (m in diagnoseGroup_value_list) {
			
			var row = "<tr>" + "<td>" + "" + "</td>" + "<td><p align='left'>"
					+ diagnoseGroup_value_list[m] + "</p></td>" + "<td><p align='left'>"
					+ diagnoseGroup_name_list[m] + "</p></td>" + "</tr>"
			$("#tb_diagnose_description tbody").append(row);
		}
	} else {
		for (j in diagnose_value_list) {
			;
			$("#tb_diagnose_description tbody>tr").each(function(n) {
				
				if(checker!=2){
					if ($(this).find('td:nth-child(2)').text() == diagnose_value_list[j]) {
					    checker=2;
					} else {
			    		checker=1;			    	
					}
				}
			})
			if(checker==1){
					var row = "<tr>" + "<td>" + "" + "</td>"
							+ "<td ><p align='left'>" 
							+ diagnose_value_list[j]+ "</p></td>" 
							+ "<td  ><p align='left'>"
							+ diagnose_name_list[j] + "</p></td>"
							+ "</tr>"
					$("#tb_diagnose_description tbody").append(row);
			}
			
			checker=0;	
		}

		for (m in diagnoseGroup_value_list) {
			
			$("#tb_diagnose_description tbody>tr").each(function(l) {
				
				if(checker!=2){
					if ($(this).find('td:nth-child(2)').text() == diagnoseGroup_value_list[m]) {
					    checker=2;
					} else {
			    		checker=1;			    	
					}
				}
			})
			if(checker==1){
					
					var row = "<tr>" + "<td>" + "" + "</td>"
							+ "<td><p align='left'>" + diagnoseGroup_value_list[m]+ "</p></td>" 
							+ "<td><p align='left'>"+ diagnoseGroup_name_list[m] + "</p></td>"
							+ "</tr>"
					$("#tb_diagnose_description tbody").append(row);
					
			}
			checker=0;	
		}

	}
	$("#tb_diagnose_description tbody>tr").each(function(i) {
		$(this).find('td:nth-child(1)  ').text(++i);
	});
	
	$("#tb_diagnose_description").DataTable({"paging": false,"bDestroy": 
		true,"bPaginate": false,"bFilter" : false,"bInfo" :
			false,"ordering": false,"sScrollY": "350px","searching" :false,scrollCollapse: true });
	$("#tb_diagnose_description_wrapper .table").css({"width":"100%"});
	$("#tb_diagnose_description_wrapper .dataTables_scrollHeadInner").css({"width":"100%"});
	
}



/* กำหนดหัว Column ไปยัง ตารางของ tab2 */
$(document).on(
		"change",
		".change-text-tab2",
		function() {
			
			var index = $(this).closest("tr").find(
					'td:first input[type="checkbox"]').attr('id');
			index = Number(index.replace("rowAge", ""));
			var fromAge = $("#fromAge" + index).val();
			var toAge = $("#toAge" + index).val();
			var range_Age = fromAge + " - " + toAge;
			$("#headCol_" + index).text(range_Age);
		});
/* กำหนดหัว Row ไปยัง ตารางของ tab2 */
$(document).on(
		"change",
		".change-row-tab2",
		function() {
			var index = $(this).closest("tr").find(
					'td:first input[type="checkbox"]').attr('id');
			index = Number(index.replace("rowCapital", ""));
			var fromCapital = $("#fromCapital" + index).val();
			var toCapital = $("#toCapital" + index).val();
			var range_Capital = fromCapital + " - " + toCapital;
			$("#headRow_" + index).text(range_Capital);
		});
/* เพิ่ม row ในตารางของช่วงอายุ */
function bt_add_rowAgenew() { 
	
	//
	var appendixName = $('#appendixName').val();
	var appendixValue = $('#appendixValue').val();
	var appendixVersion = $('#appendixVersion').val();// Version_ID
	var new_index;
	$.ajax({
        type: "POST",
        url : "UW_GetData_Servlet",
        data: {
        	method 	: "getMaxAgeIndex",
        	Appendix_Code : appendixValue,
        	Version_ID : appendixVersion
        },       
        success : function(response) {	
        	
        	bt_add_rowAgeNew(response);
        },
        error : function(response) {	
        	console.log("get product case error.")
        }
	});
	

}
function bt_add_rowAge() { 
	
	
    var new_index  = $("#tb_rangeAge >tbody>tr:last>td:nth-child(2) input[type='hidden']").val();
    var new_indexshow  = $("#tb_rangeAge >tbody>tr:last>td:nth-child(2) ").text();    	
	
	new_indexshow = Number(new_indexshow);
	var last_row = $(
			"#tb_rangeAge >tbody>tr:last>td:nth-child(1) input[type='checkbox']")
			.attr('id');
	var last_capital_row = $(
			"#tb_capitalProtection >tbody>tr:last>td:nth-child(1) input[type='checkbox']")
			.attr('id');
	var last_capital_rownum = Number(last_capital_row.replace("rowCapital", ""));
	
	last_row = last_row.replace("rowAge", "");
	last_row++;
	var start_age = $(
			"#tb_rangeAge tbody>tr:last>td:nth-child(4) input[type='text']")
			.val();
	start_age++;
	var row = "<tr>"
			+ "<td><input id='rowAge"
			+ last_row
			+ "' type='checkbox' class='checker panel_head_big' onchange='enable_bt_delete_age(this);'></td>"
			+ "<td><input type='hidden' value='"+(Number(new_index)+1)+"'/><span>"
			+ (Number(new_indexshow)+1)
			+ "</span></td>"
			+ "<td><input id='fromAge"
			+ last_row
			+ "' type='text'  class='form-control text-center change-text-tab2' style='width: 100%' value='"
			+ start_age
			+ "' /></td>"
			+ "<td><input id='toAge"
			+ last_row
			+ "' type='text'  class='form-control text-center change-text-tab2' style='width: 100%'/></td>"
			+ "</tr>"
	$("#tb_rangeAge tbody").append(row);
	$("#fromAge"+last_row).autoNumeric('init',{vMin: '0', vMax: '100'});
	$("#toAge"+last_row).autoNumeric('init',{vMin: '0', vMax: '100'});
	// ถ้ามากกว่า 6 แถว จะมี scrollY
	if (last_row == 6) {
		$("#tb_rangeAge").DataTable({
			paging : false,
			"bScrollCollapse" : true,
			"ordering" : false,
			"bDestroy" : true,
			"bPaginate" : false,
			"bFilter" : false,
			"bLengthChange" : false,
			bInfo : false,
			"autoWidth" : false,
			"sScrollY" : "400px",
			scrollCollapse : true,
			"autoWidth" : false,
		});
		$("#tb_rangeAge_wrapper .dataTables_scrollHeadInner").css({
			"width" : "100%"
		});
		$("#tb_rangeAge_wrapper .table").css({
			"width" : "100%"
		});
	}
	
	// สร้าง Column ในตารางของ Tab2
	
	
	var count_col = $("#tb_Capital_byAge thead>tr").eq(1).find('th').length + 1;
	var col_tb = "<th id='headCol_"
			+ last_row
			+ "' class='text-center bg-primary vertical-middle min_width change-text-tab2' colspan='1' scope='col'></th>"
	$("#tb_Capital_byAge thead>tr").eq(1).append(col_tb);
	$("#tb_Capital_byAge thead>tr").eq(0).find('th:nth-child(2)').attr(
			"colspan", count_col + 1);
	
	
	var count_row = $("#tb_Capital_byAge tbody>tr").length;
	

	for (var ii = 0; ii < last_capital_rownum; ii++) {

		var row = "<td id='td"
				+ last_row
				+ "' colspan='1'>"
				+ "<div class='input-group col-xs-12'>"
				+ "<input type='text' id='coverage_byAge"
				+ (ii + 1)
				+ "_"
				+ last_row
				+ "'  class='form-control' style='width:100%' value='' readonly data-toggle='tooltip' title=''/>"
				+ "<span class='input-group-btn'>"
				+ "<button class='btn btn-default btn-primary fa fa-external-link' type='button' id='bt_coverage_byAge"
				+ (ii + 1) + "_" + last_row
				+ "' onclick='show_modal_listHealth(this);'></button>"
				+ "</span>" + "</div>" + "</td>";
		
		$("#tb_Capital_byAge tbody>tr").eq(ii).append(row);
		
	}
	
	$("#fromAge1").autoNumeric('init',{vMin: '0', vMax: '100'});
	$("#toAge1").autoNumeric('init',{vMin: '0', vMax: '100'});
}
function change_comma(e){
	var id = $(e).attr("id");
	$("#"+id).autoNumeric('init',{vMin: '0', vMax: '999999999'});
	// $("#bt_delete_age").attr("disabled", false);
	// $("#bt1_cancel_med").attr("disabled", false);
	// $("#bt1_submit_med").attr("disabled", false);
}
function change_comma_age(e){
	var id = $(e).attr("id");
	$("#"+id).autoNumeric('init',{vMin: '0', vMax: '100'});
	// $("#bt_delete_age").attr("disabled", false);
	// $("#bt1_cancel_med").attr("disabled", false);
	// $("#bt1_submit_med").attr("disabled", false);
}
function enable_bt_delete_age(e){
	
	var count=0;
	$("#tb_rangeAge tbody>tr").each(function() {
		if ($(this).find('td:nth-child(1) input ').is(':checked')) {
			count++;
			
		}
	});
	if(count>0){
		$("#bt_delete_age")		.attr("disabled",false);
		//$("#bt_cancel_list")	.attr("disabled",false);
	}else{
		$("#bt_delete_age")		.attr("disabled",true);
	}
	
	$("#bt1_add_med").attr("disabled", true);
	//$("#bt_delete_age").attr("disabled", false);
	$("#bt1_cancel_med").attr("disabled", false);
	// $("#bt1_submit_med").attr("disabled", false);
	
	
	
	
}
function enable_bt_delete_cap(e){
	var count=0;
	$("#tb_capitalProtection tbody>tr").each(function() {
		if ($(this).find('td:nth-child(1) input ').is(':checked')) {
			count++;
			
		}
	});
	if(count>0){
		$("#bt_delete_sum")		.attr("disabled",false);
		//$("#bt_cancel_list")	.attr("disabled",false);
	}else{
		$("#bt_delete_sum")		.attr("disabled",true);
	}
	$("#bt1_add_med").attr("disabled", true);
	//$("#bt_delete_sum").attr("disabled", false);
	$("#bt1_cancel_med").attr("disabled", false);
	// $("#bt1_submit_med").attr("disabled", false);
}

function enable_bt_save_tab2(e){
	
	$("#bt_save_tab2").attr("disabled", false);
	
	$("#bt_delete_row_listAppendix")    	.attr("disabled", false);
	$("#bt_req_row_listAppendix")     		.attr("disabled", false);
	$("#bt_his_row_listAppendix")     		.attr("disabled", false);
	$("#bt_approve_row_listAppendix")     	.attr("disabled", false);
	$("#bt_not_approve_row_listAppendix")   .attr("disabled", false);
	$("#bt_cancel_row_listAppendix")     	.attr("disabled", false);
	$("#bt_cancel_row_listAppendixU")     	.attr("disabled", false);
	$("#bt_add_row_listAppendix")     	.attr("disabled", true);
	// $("#bt_delete_cap").attr("disabled", false);
	// $("#bt1_cancel_med").attr("disabled", false);
	// $("#bt1_submit_med").attr("disabled", false);
	
	$("#tb_manage_appendix tbody>tr").each(function() {
		if ($(this).find('td:nth-child(1) input').is(':checked')) {
		var row_Status = $(this).find('td:nth-child(11) ').text();
		if(row_Status=="อนุมัติแล้ว"||row_Status=="รออนุมัติ"||row_Status=="ขอแก้ไข"){
			// $(this).find('td:nth-child(1) input').attr("disabled",true)
			$("#bt_req_row_listAppendix")     		.attr("disabled", true);
			$("#bt_save_tab2")						.attr("disabled", true);
			
			$("#bt_delete_row_listAppendix")    	.attr("disabled", true);
		}else if(row_Status==""){
			// $(this).find('td:nth-child(1) input').attr("disabled",true)
			$("#bt_req_row_listAppendix")     		.attr("disabled", true);
			
		}else{
// $(this).find('td:nth-child(1) input').attr("disabled",false)
// $(this).find('td:nth-child(2) select').attr("disabled", false);
// $(this).find('td:nth-child(3) select').attr("disabled", false);
// $(this).find('td:nth-child(4) select').attr("disabled", false);
// $(this).find('td:nth-child(5) a').attr("disabled",false);
// $(this).find('td:nth-child(8) input').attr("disabled",false);
// $(this).find('td:nth-child(9) input').attr("disabled",false);
		}
			
			// $(this).find('td:nth-child(6) input').attr("disabled",true);
		}
    })
	
}
var age_delete_data=[];
/* ลบ row ในตารางของช่วงอายุ */
function bt_delete_rowAge() {
	// ลบ Column ในตารางของ tab2
	
	
	var last_capital_row = $(
			"#tb_capitalProtection >tbody>tr:last>td:nth-child(1) input[type='checkbox']")
			.attr('id');
	var last_capital_rownum = Number(last_capital_row.replace("rowCapital", ""));

	var count_row = $("#tb_Capital_byAge tbody>tr").length;
	$('input:checkbox[id^="rowAge"]:checked').each(
			function() {
				
				var id = $(this).attr("id");
				id = Number(id.replace("rowAge", ""));
				$("#headCol_" + id).remove();

				for (var i = 0; i < count_row; i++) {
					$("#tb_Capital_byAge tbody>tr").eq(i).find(
							"td:eq(" + id + ")").hide();
				}
			});
	// ปรับ หัว Column ตามจำนวนที่ลบไป
	var count_col = $("#tb_Capital_byAge thead>tr").eq(1).find('th').length;
	$("#tb_Capital_byAge thead>tr").eq(0).find('th:nth-child(2)').attr(
			"colspan", count_col);

	$("#tb_rangeAge tbody>tr").each(function(m){
		
		if ($(this).find('td:nth-child(1) input ').is(':checked')) {
		obj2 = {};
		obj2["Age_index"] = $(this).find("td:nth-child(2) input").val();
		obj2["Min_age"] = 0;
		obj2["Max_age"] = 0;
		age_delete_data.push(obj2);	
		}
	});
	$('#tb_rangeAge input:checkbox:checked').parent().parent().remove();
	$('#tb_rangeAge_wrapper .dataTables_scrollBody').closest(
			'.dataTables_scrollBody').css('height', 'auto');
	
	$("#tb_rangeAge tbody>tr").each(function(m){
		
		$(this).find("td:nth-child(2) span").text((m+1));
		$(this).find("td:nth-child(2) input[type='hidden']").val((m+1));
		
	});
	$("#bt1_add_med").attr("disabled", true);

	$("#bt_delete_age").attr("disabled", true);
}
/* เพิ่ม row ในตารางของทุนคุ้มครอง */
function bt_add_rowCapital() {
	
	var last_row = $(
			"#tb_capitalProtection >tbody>tr:last>td:nth-child(1) input[type='checkbox']")
			.attr('id');
	var new_index = $(
	"#tb_capitalProtection >tbody>tr:last>td:nth-child(1) input[type='hidden']").val();
	last_row = last_row.replace("rowCapital", "");
	last_row++;
	var start_rangeCapital = $(
			"#tb_capitalProtection tbody>tr:last>td:nth-child(3) input").val();
	start_rangeCapital=Number(Number(start_rangeCapital.replace(/\,/g,'')))+Number(1);
	var row = "<tr>"
			+ "<td><input id='rowCapital"
			+ last_row
			+ "' type='checkbox' class='checker panel_head_big' onchange='enable_bt_delete_cap(this);'/>" +
					"<input type='hidden' value='"
			+ (Number(new_index)+1)
			+ "'  /></td>"
			+ "<td><input id='fromCapital"
			+ last_row
			+ "' type='text' class='autoComma form-control text-center change-row-tab2' onkeyup='change_comma(this);' style='width: 100%' value='"
			+ (start_rangeCapital==1?"":start_rangeCapital)
			+ "' /></td>"
			+ "<td><input id='toCapital"
			+ last_row
			+ "' type='text' class='autoComma form-control text-center change-row-tab2' onkeyup='change_comma(this);' style='width: 100%'/></td>"
			+ "</tr>"
	$("#tb_capitalProtection tbody").append(row);
	$("#fromCapital"+last_row).autoNumeric('init',{vMin: '0', vMax: '999999999'});
	$("#toCapital"+last_row).autoNumeric('init',{vMin: '0', vMax: '999999999'});
	
	// ถ้ามากกว่า 6 แถว จะมี scrollY
	if (last_row == 6) {
		$('#tb_capitalProtection').DataTable({
			paging : false,
			"bScrollCollapse" : true,
			"ordering" : false,
			"bDestroy" : true,
			"bPaginate" : false,
			"bFilter" : false,
			"bLengthChange" : false,
			bInfo : false,
			scrollY : '400px',
			scrollCollapse : true,
			"autoWidth" : false,
		});
		$("#tb_capitalProtection_wrapper .dataTables_scrollHeadInner").css({
			"width" : "100%"
		});
		$("#tb_capitalProtection_wrapper .table").css({
			"width" : "100%"
		});
	}
	


	// สร้าง Row ในตารางของ Tab2
	var count_col = $("#tb_Capital_byAge thead>tr").eq(1).find('th').length;
	var row_data = "";
	for (i = 0; i < count_col; i++) {
		var id = 1 + i;
		row_data += "<td id='td"
				+ id
				+ "' class='min_width'>"
				+ "<div class='input-group col-xs-12'>"
				+ "<input type='text' id='coverage_byAge"
				+ last_row
				+ "_"
				+ id
				+ "'  class='form-control' style='width:100%' value='' readonly data-toggle='tooltip' title=''/>"
				+ "<span class='input-group-btn'>"
				+ "<button class='btn btn-default btn-primary fa fa-external-link' type='button' id='bt_coverage_byAge"
				+ last_row + "_" + id
				+ "' onclick='show_modal_listHealth(this);'></button>"
				+ "</span>" + "</div>" + "</td>";
	}
	$("#tb_Capital_byAge tbody").append(
			"<tr><td id='headRow_" + last_row + "'></td>" + row_data + "</tr>");
	
}
/* ลบ row ในตารางของช่วงทุนคุ้มครอง */
var sum_delete_data=[];
function bt_delete_rowCapital() {

	// ลบ row ใน table tab2
	$('input:checkbox[id^="rowCapital"]:checked').each(function() {
		var id = $(this).attr("id");
		id = Number(id.replace("rowCapital", ""));
		$("#headRow_" + id).closest('tr').remove();
	});
	
	$("#tb_capitalProtection tbody>tr").each(function(m){
		if ($(this).find('td:nth-child(1) input ').is(':checked')) {
		obj2 = {};
		obj2["Sum_index"] = $(this).find("td:nth-child(1) input[type='hidden']").val();
		obj2["Min_age"] = 0;
		obj2["Max_age"] = 0;
		sum_delete_data.push(obj2);	
		}
	});
	
	
	$('#tb_capitalProtection input:checkbox:checked').parent().parent()
			.remove();
	$('#tb_capitalProtection_wrapper .dataTables_scrollBody').closest(
			'.dataTables_scrollBody').css('height', 'auto');
	
	$("#bt_delete_sum").attr("disabled", true);

}

/**
 * ********************* Page 1 -> Tab 2 ย้ายตารางภาคผนวก
 * *********************************
 */
/* ปิด modal เมื่อกดตกลง */
$("#bt_confirm").click(function() {
	$("#modal_approved").modal('hide');
});

/* ซ่อน modal อันปัจจุบันไว้ */
$("#bt_select_modalMoveTable").click(function() {
	$("#modal_listProduct").modal('hide');
})

/* เลือกรายการค้นหาตารางเสร็จจะปิด modal ปัจจุบัน ละไปเปิด modal เก่า */
$("#bt_confirm_modalSearchTable").click(function() {
	// $("#model_tb_checkListHeath").modal('hide');
	// $("#modal_listProduct").modal('show');
})

/**
 * ********************* Page 2 -> Tab 1 ตั้งค่าตารางภาคผนวก
 * ********************************
 */

//$(document).ready(function() {
//	/* datepicker */
//	$('#start_date').datetimepicker({
//		timepicker : false,
//		format : 'd/m/Y',
//		yearOffset:543
//	});
//	$('#end_date').datetimepicker({
//		timepicker : false,
//		format : 'd/m/Y',
//		yearOffset:543
//	})
//	$('#start_date2').datetimepicker({
//		timepicker : false,
//		format : 'd/m/Y',
//		yearOffset:543
//	});
//	$('#end_date2').datetimepicker({
//		timepicker : false,
//		format : 'd/m/Y',
//		yearOffset:543
//	})
//
//})


/* ปุ่ม ยกเลิก ซ่อนหน้าเพจ */
function hide_PageSTA() {
	//
	current_txn_id=0;
	if(nameTab=="page2_2"){
		var element = document.getElementById(nameTab);
		element.classList.remove("active");
		var element = document.getElementById("page2_1");
		element.classList.add("active");
		
		hide_PageSTA2();
		
		
		$("#bt1_appr_med").hide();
		$("#bt1_not_appr_med").hide();
	}else{
		hide_PageSTA1();
	}
	
	// //
	$.ajax({
        type: "POST",
        url : "UW_GetData_Servlet",
        data: {
        	method 	: "getAppendixVersion"
        },       
        success : function(response) {	
        	//
        	ShowAppendixVersion(response);
        	// $("#tb_appendixmaster>tbody>tr").removeClass("hide");
        	
        	var tb_len =$("#tb_appendixmaster tbody>tr").length;
        	var count_show = 0 ;
        	$("#tb_appendixmaster>tbody>tr").removeClass("hide");
        	$("#tb_appendixmaster tbody>tr").each(function(i) {
        		const inputMatch = $(this).find('selecte,input')
        	    .toArray()
        	    .some(input => 
        	    $(input).val().toLowerCase().includes( $('#search_tb_appendixmaster').val().toLowerCase()));
        	
        		const textMatch = $(this)
        	    .children()
        	    .not('td:has("input,select")')
        	    .toArray()
        	    .some(td => $(td).text().toLowerCase().includes($('#search_tb_appendixmaster').val().toLowerCase()))
        	  
        		
        		if(inputMatch||textMatch){
        			count_show++;
        		}else{
        			 $("#tb_appendixmaster>tbody>tr").eq(i).addClass("hide");
        		}
        	});
        	
        	$('#tb_appendixmaster').DataTable({"paging": false,"bDestroy": true
        		,"bPaginate": false,"bFilter" : false,"bInfo" : false
        		,"ordering": false,"sScrollY": "350px","searching" :false,scrollCollapse: false });
       	 
        	$("#tb_appendixmaster_wrapper .dataTables_scrollHeadInner").css({"width":"100%"});
// $("#tb_appendixmaster_wrapper .table").css({"width":"100%"});
        	
        	$('#tb_appendixmaster').DataTable({"paging": false,"bDestroy": true
        		,"bPaginate": false,"bFilter" : false,"bInfo" : false
        		,"ordering": false,"sScrollY": "350px","searching" :false,scrollCollapse: true });
        	$("#tb_appendixmaster_wrapper .table").css({"width":"100%"});
        	
        },
        error : function(response) {	
        	console.log("get getAppendixVersion case error.")
        }
	});
	
	$("#sale_n").attr("checked",false);
	$("#sale_q").attr("checked",false);
	$("#sale_t").attr("checked",false);
	$("#sale_p").attr("checked",false);
	$("#sale_r").attr("checked",false);
	
// if(count_show==tb_len){
// $("#tb_appendixmaster tbody>tr").each(function(i) {
// if($(this).find("td:nth-child(6) ").text()!="Y"){
// $("#tb_appendixmaster>tbody>tr").eq(i).addClass("hide");
// }
// })
// }
	
	
	
}
function hide_PageSTA1() {
	//
	$("#appendixValue").val("");
	$("#appendixName").val("");
	$("#appendixVersion").val("");
	$("#CoverageWarningAmt").val("");
	$("#start_date").val("");
	$("#end_date").val("");
	
	$("#tb_rangeAge").DataTable().destroy();
	$("#tb_rangeAge tbody").find("tr").remove();
	
	$("#lb_saleChannel_CL option[value=NONE]").attr('selected', true);
	 
	
	$("#sale_n").prop("checked", false).attr("disabled", true);

	$("#sale_q").prop("checked", false).attr("disabled", true);

	$("#sale_t").prop("checked", false).attr("disabled", true);

	$("#sale_p").prop("checked", false).attr("disabled", true);

	$("#sale_r").prop("checked", false).attr("disabled", true);
// var last_row = 1;
//	
// var row = "<tr>"
// + "<td style='width:7%'><input id='rowAge"
// + last_row
// + "' type='checkbox' onchange='enable_bt_delete_age(this);' hidden/></td>"
// + "<td style='width:15%'>"
// + last_row
// + "</td>"
// + "<td style='width:39%'><input id='fromAge"
// + last_row
// + "' type='text' class='autoComma form-control text-center change-text-tab2'
// style='width: 100%' value='"
//	
// + "' /></td>"
// + "<td style='width:39%'><input id='toAge"
// + last_row
// + "' type='text' class='autoComma form-control text-center change-text-tab2'
// style='width: 100%'/></td>"
// + "</tr>"
// $("#tb_rangeAge tbody").append(row);
// $("#fromAge"+last_row).autoNumeric('init',{vMin: '0', vMax: '100'});
// $("#toAge"+last_row).autoNumeric('init',{vMin: '0', vMax: '100'});
//	
// $('#tb_capitalProtection').DataTable().destroy();
// $("#tb_capitalProtection tbody").find("tr").remove();
//	
// var last_row = 1;
// var row = "<tr>"
// + "<td style='width:10%'><input id='rowCapital"
// + last_row
// + "' type='checkbox' onchange='enable_bt_delete_cap(this);' hidden/></td>"
//	
// + "<td style='width:45%'><input id='fromCapital"
// + last_row
// + "' type='text' class='autoComma form-control text-center change-row-tab2' "
// +
// "onkeyup='change_comma(this);' style='width: 100%' value='"
//	
// + "' /></td>"
// + "<td style='width:45%'><input id='toCapital"
// + last_row
// + "' type='text' class='autoComma form-control text-center change-row-tab2'
// onkeyup='change_comma(this);' style='width: 100%'/></td>"
// + "</tr>"
// $("#tb_capitalProtection tbody").append(row);
	
	$('#tb_diagnose_description').DataTable().destroy();
	$("#tb_diagnose_description tbody").find("tr").remove();
	
	// $("#tb_Capital_byAge").DataTable().destroy();
	// $("#tb_Capital_byAge tbody").find("tr").remove();
	
	
	
	
	document.getElementById("menu_listAppendix").style.display = "block";
	// document.getElementById("page_001").style.display = "none";
	document.getElementById("page_002").style.display = "none";

	// เปิดอีกหน้า
	// document.getElementById("page_002_1").style.display = "block";
}
function hide_PageSTA2() {
	//
	$("#appendixValue").val("");
	$("#appendixName").val("");
	$("#appendixVersion").val("");
	$("#CoverageWarningAmt").val("");
	$("#start_date").val("");
	$("#end_date").val("");
	
	$("#lb_saleChannel_CL option[value=NONE]").attr('selected', true);
	 
	
	$("#sale_n").prop("checked", false).attr("disabled", true);

	$("#sale_q").prop("checked", false).attr("disabled", true);

	$("#sale_t").prop("checked", false).attr("disabled", true);

	$("#sale_p").prop("checked", false).attr("disabled", true);

	$("#sale_r").prop("checked", false).attr("disabled", true);
	
	$("#tb_rangeAge").DataTable().destroy();
	$("#tb_rangeAge tbody").find("tr").remove();
	var last_row = 1;
	
	var row = "<tr>"
	+ "<td style='width:7%'><input id='rowAge"
	+ last_row
	+ "' type='checkbox' class='checker panel_head_big' onchange='enable_bt_delete_age(this);' hidden/></td>"
	+ "<td style='width:15%'>"
	+ last_row
	+ "</td>"
	+ "<td style='width:39%'><input id='fromAge"
	+ last_row
	+ "' type='text'  class='autoComma form-control text-center change-text-tab2' style='width: 100%' value='"
	
	+ "' /></td>"
	+ "<td style='width:39%'><input id='toAge"
	+ last_row
	+ "' type='text'  class='autoComma form-control text-center change-text-tab2' style='width: 100%'/></td>"
	+ "</tr>"
	$("#tb_rangeAge tbody").append(row);
	$("#fromAge"+last_row).autoNumeric('init',{vMin: '0', vMax: '100'});
	$("#toAge"+last_row).autoNumeric('init',{vMin: '0', vMax: '100'});

	$('#tb_capitalProtection').DataTable().destroy();
	$("#tb_capitalProtection tbody").find("tr").remove();
	
	var last_row = 1;
	var row = "<tr>"
	+ "<td style='width:10%'><input id='rowCapital"
	+ last_row
	+ "' type='checkbox' class='checker panel_head_big' onchange='enable_bt_delete_cap(this);' hidden/></td>"
	+ "<td style='width:45%'><input id='fromCapital"
	+ last_row
	+ "' type='text' class='autoComma form-control text-center change-row-tab2' onkeyup='change_comma(this);' style='width: 100%' value='"
	
	+ "' /></td>"
	+ "<td style='width:45%'><input id='toCapital"
	+ last_row
	+ "' type='text' class='autoComma form-control text-center change-row-tab2' onkeyup='change_comma(this);' style='width: 100%'/></td>"
	+ "</tr>"
	$("#tb_capitalProtection tbody").append(row);
	
	$('#tb_diagnose_description').DataTable().destroy();
	$("#tb_diagnose_description tbody").find("tr").remove();
	
	$("#tb_Capital_byAge").DataTable().destroy();
	$("#tb_Capital_byAge tbody").find("tr").remove();
	
	
	document.getElementById("menu_listAppendix").style.display = "block";
	// document.getElementById("page_001").style.display = "none";
	document.getElementById("page_002").style.display = "none";
	
	// document.getElementById("page_002_1").style.display = "block";
	// document.getElementById("form_ageCapitalProtection").style.display =
	// "block";
	document.getElementById("page_002_2").style.display = "none";
	// document.getElementById("bt_approval").style.display = "none";
	// เปิดอีกหน้า
	// document.getElementById("page_002_1").style.display = "block";
}
/* ฟังก์ชัน นำค่า ตัวเลขไป แสดงต่อสตริง ในแท็บที่ 2 */
function change_capitalCoverage(e) {
	$("#coverage_capital_val").text($(e).val())
}

/* ฟังก์ชัน disable field เมื่อกดเปลี่ยนจากแท็บแรกไปแท็บสอง */
function change_disablefield() {
	$("#appendixValue").attr("disabled", true);
	$("#appendixValueName").attr("disabled", true);
	$("#appendixName").attr("disabled", true);
	$("#appendixVersion").attr("disabled", true);
	$("#appendixVersionname").attr("disabled", true);
	$("#CoverageWarningAmt").attr("disabled", true);
	$("#start_date").attr("disabled", true);
	$("#end_date").attr("disabled", true);
	
	var Appendix_Code = $("#appendixValue").val();
	var Version_ID= $("#appendixVersion").val();
	
	if( $("#Appendix_code_copy").val()==null?false:$("#Appendix_code_copy").val().length>0
		// ||$("#Version_id_copy").val()==null?false:$("#Version_id_copy").val().length>0
	){
		Appendix_Code = $("#Appendix_code_copy").val();
		Version_ID= $("#Version_id_copy").val();
	}
	// Version_ID
	$.ajax({
        type: "POST",
        url : "UW_GetData_Servlet",
        data: {
        	method 	: "getAppendixVersionDetail",
        	Appendix_Code : Appendix_Code,
        	Version_ID : Version_ID
        },       
        success : function(response) {	
        	showAppendixDetail2(response);
        	;
        	$("#bt1_req_med").attr("disabled", false);
        	
        	var IsApproved=$("#appendix_approved_status").val()	;
        	if(IsApproved=="true"){
       			$("#bt1_req_med").attr("disabled", true);
       			//$("#form_ageCapitalProtectionTab1 *").addClass("disabledAll_NotFade");
            	// $("#form_ageCapitalProtectionTab2
				// *").addClass("disabledAll_NotFade");
            	// $("#tb_diagnose_description
				// *").removeClass("disabledAll_NotFade");
       			$("#tb_diagnose_description tbody").find("tr").addClass("disabledAll_NotFade");
       			//$("#tb_Capital_byAge tbody").find("tr").addClass("disabledAll_NotFade");
       		}else{
       			$("#form_ageCapitalProtectionTab1 *").removeClass("disabledAll_NotFade");
            	$("#form_ageCapitalProtectionTab2 *").removeClass("disabledAll_NotFade");
       		}
        	
        	SetUserPermissionUW();
        },
        error : function(response) {	
        	console.log("get product case error.")
        }
	});
	
	
}

/* ฟังก์ชัน disable field เมื่อกดเปลี่ยนจากแท็บแรกไปแท็บสอง */
function change_disablefield_V02() {
	$("#appendixValue")		.attr("disabled", true);
	$("#appendixValueName")	.attr("disabled", true);
	$("#appendixName")		.attr("disabled", true);
	$("#appendixVersion")		.attr("disabled", true);
	$("#appendixVersionname")	.attr("disabled", true);
	$("#CoverageWarningAmt")	.attr("disabled", true);
	$("#start_date")		.attr("disabled", true);
	$("#end_date")			.attr("disabled", true);
	
	$("#lb_saleChannel_CL")	.attr("disabled", true);
	$("#sale_n")			.attr("disabled", true);
	$("#sale_q")			.attr("disabled", true);
	$("#sale_t")			.attr("disabled", true);
	$("#sale_p")			.attr("disabled", true);
	$("#sale_r")			.attr("disabled", true);
	
	var Appendix_Code 	= $("#appendixValue").val();
	var Version_ID		= $("#appendixVersion").val();
	
	$.ajax({
        type: "POST",
        url : "UW_GetData_Servlet",
        data: {
        	method 			: "getAppendixVersionDetail",
        	Appendix_Code 	: Appendix_Code,
        	Version_ID 		: Version_ID
        },       
        success : function(response) {	
        	showAppendixDetail2_onlyHeader(response);
        	if( $("#Appendix_code_copy").val()==null?
        			false:$("#Appendix_code_copy").val().length>0){
        			Appendix_Code = $("#Appendix_code_copy").val();
        			Version_ID= $("#Version_id_copy").val();
        		}
        		// Version_ID
        		$.ajax({
        	        type: "POST",
        	        url : "UW_GetData_Servlet",
        	        data: {
        	        	method 	: "getAppendixVersionDetail",
        	        	Appendix_Code : Appendix_Code,
        	        	Version_ID : Version_ID
        	        },       
        	        success : function(response) {	
        	        	showAppendixDetail2_onlyDetail(response,row_status_app,IsApproved);
        	        	if(row_status_app=="รออนุมัติ"||row_status_app=="ขอแก้ไข"){
        	        		$("#bt1_req_med").attr("disabled", true);
        	        		$("#bt1_req_med").attr("disabled", true);
        	        	}else{
        	        		$("#bt1_req_med").attr("disabled", false);
        	        	}
        	        	
        	        	var IsApproved=$("#appendix_approved_status").val()	;
        	        	if(row_status_app=="รออนุมัติ"||IsApproved=="true"){
        	       			$("#bt1_req_med").attr("disabled", true);
        	       			$("#form_ageCapitalProtectionTab1 *").addClass("disabledAll_NotFade");
        	            	$("#tb_diagnose_description tbody").find("tr").addClass("disabledAll_NotFade");
        	            	//$("#tb_Capital_byAge tbody").find("tr").addClass("disabledAll_NotFade");
        	        	}else{
        	       			$("#form_ageCapitalProtectionTab1 *").removeClass("disabledAll_NotFade");
        	            	$("#form_ageCapitalProtectionTab2 *").removeClass("disabledAll_NotFade");
        	       		}
        	        	
        	        	SetUserPermissionUW();
        	        },
        	        error : function(response) {	
        	        	console.log("get product case error.")
        	        }
        		});
        },
        error : function(response) {	
        	console.log("get product case error.")
        }
	});
	
	
	
	
}

function change_disablefield_newHeader() {
	$("#appendixValue").attr("disabled", true);
	$("#appendixValueName").attr("disabled", true);
	$("#appendixName").attr("disabled", true);
	$("#appendixVersion").attr("disabled", true);
	$("#appendixVersionname").attr("disabled", true);
	$("#CoverageWarningAmt").attr("disabled", true);
	$("#start_date").attr("disabled", true);
	$("#end_date").attr("disabled", true);
	
	var Appendix_Code = $("#appendixValue").val();
	var Version_ID= $("#appendixVersion").val();
	
	if( $("#Appendix_code_copy").val()==null?false:$("#Appendix_code_copy").val().length>0
		// ||$("#Version_id_copy").val()==null?false:$("#Version_id_copy").val().length>0
	){
		Appendix_Code = $("#Appendix_code_copy").val();
		Version_ID= $("#Version_id_copy").val();
	}
	
	
	$.ajax({
        type: "POST",
        url : "UW_GetData_Servlet",
        data: {
        	method 	: "getAppendixVersionDetail",
        	Appendix_Code : Appendix_Code,
        	Version_ID : Version_ID
        },       
        success : function(response) {	
        	showAppendixDetail2_onlyheader(response);
        	;
        	if(row_status=="รออนุมัติ"){
        		$("#bt1_req_med").attr("disabled", true);
        	}else{
        		$("#bt1_req_med").attr("disabled", false);
        	}
        	
        	
        	var IsApproved=$("#appendix_approved_status").val()	;
        	if(IsApproved=="true"){
       			$("#bt1_req_med").attr("disabled", true);
       			//$("#form_ageCapitalProtectionTab1 *").addClass("disabledAll_NotFade");
            	// $("#form_ageCapitalProtectionTab2
				// *").addClass("disabledAll_NotFade");
            	// $("#tb_diagnose_description
				// *").removeClass("disabledAll_NotFade");
            	$("#tb_diagnose_description tbody").find("tr").addClass("disabledAll_NotFade");
            	//$("#tb_Capital_byAge tbody").find("tr").addClass("disabledAll_NotFade");
       		}else{
       			$("#form_ageCapitalProtectionTab1 *").removeClass("disabledAll_NotFade");
            	$("#form_ageCapitalProtectionTab2 *").removeClass("disabledAll_NotFade");
       		}
        	
        	SetUserPermissionUW();
        },
        error : function(response) {	
        	console.log("get product case error.")
        }
	});
	
	$.ajax({
        type: "POST",
        url : "UW_GetData_Servlet",
        data: {
        	method 	: "getAppendixVersionDetail",
        	Appendix_Code : Appendix_Code,
        	Version_ID : Version_ID
        },       
        success : function(response) {	
        	showAppendixDetail2(response);
        	;
        	if(row_status=="รออนุมัติ"){
        		$("#bt1_req_med").attr("disabled", true);
        	}else{
        		$("#bt1_req_med").attr("disabled", false);
        	}
        	
        	var IsApproved=$("#appendix_approved_status").val()	;
        	if(IsApproved=="true"){
       			$("#bt1_req_med").attr("disabled", true);
       			$("#bt1_req_edit_app").attr("disabled", false);
       			$("#form_ageCapitalProtectionTab1 *").addClass("disabledAll_NotFade");
            	// $("#form_ageCapitalProtectionTab2
				// *").addClass("disabledAll_NotFade");
            	// $("#tb_diagnose_description
				// *").removeClass("disabledAll_NotFade");
            	$("#tb_diagnose_description tbody").find("tr").addClass("disabledAll_NotFade");
            	//$("#tb_Capital_byAge tbody").find("tr").addClass("disabledAll_NotFade");
       		}else{
       			$("#form_ageCapitalProtectionTab1 *").removeClass("disabledAll_NotFade");
            	$("#form_ageCapitalProtectionTab2 *").removeClass("disabledAll_NotFade");
       		}
        	
        	SetUserPermissionUW();
        },
        error : function(response) {	
        	console.log("get product case error.")
        }
	});
	
	
}
/* ฟังก์ชัน disable field เมื่อกดเปลี่ยนจากแท็บสองไปแท็บแรก */
function change_enablefield() {
	$("#appendixValue").attr("disabled", false);
	$("#appendixName").attr("disabled", false);
	$("#appendixVersion").attr("disabled", false);
	$("#CoverageWarningAmt").attr("disabled", false);
	$("#start_date").attr("disabled", false);
	$("#end_date").attr("disabled", false);
}
/**
 * ********************* Page 2 -> Tab 2 กำหนดรายการตรวจสุขภาพ
 * ****************************
 */

/* pass parameter */
function show_modal_listHealth(e) {
	var id = $(e).parent().parent().find('input').attr('id');
	$("#modal_selectListHealth").modal('show');
	$("#approved_modal").attr("onclick",
			"bt_save_selectListHealth(" + id + ");");
}


/* ฟังก์ชัน Copy ภาคผนวกใหม่ */
var temp_Appendix_Code="";
var temp_abb_name="";
function bt_copy_appendix(e) {
	var id = $(e).parents('tr').find("td:nth-child(2) ").text();
	temp_Appendix_Code="";
	;
	// temp_Appendix_Code = $(e).parents('tr').find("td:nth-child(2) ").text();
	temp_Appendix_Code = $(e).parents('tr').find("td:nth-child(8) input[type='hidden']").val();			
	
	var Version_ID=$(e).parents('tr').find("td:nth-child(2) input").attr("id");
	$("#Appendix_code_copy").val(temp_Appendix_Code);
	temp_abb_name= $(e).parents('tr').find("td:nth-child(2) ").text();	
	$("#Version_id_copy").val(Version_ID);
	
	$("#modal_copy").modal("show")
	$("#copyedit").attr("onclick",
			"bt_copy_appendixEdit(this,"+ Version_ID+ ");");
	$("#copynew").attr("onclick",
			"bt_copy_appendixNew(this,"+ Version_ID+ ");");
	$("#bt1_submit_med").attr("disabled", false);
}
function bt_copy_appendixEdit(e,Version_ID) {
	
	
	// var Appendix_Code = $(e).parents('tr').find("td:nth-child(2) ").text();
	// var Appendix_Code = $(e).parents('tr').find("td:nth-child(8)
	// input[type='hidden']").val();
	;
	;
	$("#IsNewRecord").val(true);
	$("#checkkeyup_OK").attr("disabled",true);
	
	$(".autoComma").autoNumeric('init',{vMin: '0', vMax: '999999999'});
	document.getElementById("menu_listAppendix").style.display = "none";
	document.getElementById("page_002").style.display = "block";
	// เปิดอีกหน้า
	document.getElementById("page_002_1").style.display = "block";
	document.getElementById("form_ageCapitalProtection").style.display = "block";
	status_copying="edit";
	
	
	// เก็บค่าในแถวที่กด
// //;
	
	// Version_ID
	var temp_Appendix_Code2=temp_Appendix_Code
	$.ajax({
        type: "POST",
        url : "UW_GetData_Servlet",
        data: {
        	method 	: "getAppendixVersionDetail",
        	Appendix_Code : temp_Appendix_Code,
        	Version_ID : Version_ID
        },       
        success : function(response) {	
        	
        	showAppendixDetail(response,"edit",(Number(Version_ID)+1),false);
        	$("#Appendix_code_copy").val(temp_Appendix_Code);
        	$("#Version_id_copy").val(Version_ID);
        	// set_default_version();
        	$("#appendixValue").val("");
        	
        	var appendixValueName=$("#appendixValueName").val();
        	
        	if(status_copying=="edit"){
        		;
        		temp_copy_start_date=$("#start_date").val();
        	}
        	
        	$.ajax({
                type: "POST",
                url : "UW_GetData_Servlet",
                data: {
                	method 	: "getMaxAppendixVersion",
                	Appendix_code : temp_Appendix_Code2,
                	Version_ID : Version_ID,
                	appendixValueName : temp_abb_name,
                	
                },       
                success : function(response2) {	
                	set_default_version2(response2);
                	$("#appendixValue").val("");
                	$("#bt1_submit_med").attr("disabled",false);

        			
                },
                error : function(response) {	
                	console.log("get product case error.")
                }
        	});
        	
        },
        error : function(response) {	
        	console.log("get product case error.")
        }
	});
	
	$("#appendixValue").val("");
	$("#Version_id_copy").val(Version_ID);
	$("#Version_id_copy").val(Version_ID);
	$("#bt1_submit_med").attr("disabled", false);
	Statuesave="N";
	// temp_Appendix_Code="";
}
var max_version=0;
var is_copynew=false;
function bt_copy_appendixNew(Appendix_Code,Version_ID) {
	// var id2 = $(e).parents('tr').find("td:nth-child(2) ").text();
	$("#IsNewRecord").val(true);
	$("#checkkeyup_OK").attr("disabled",true);

	$(".autoComma").autoNumeric('init',{vMin: '0', vMax: '999999999'});
	document.getElementById("menu_listAppendix").style.display = "none";
	document.getElementById("page_002").style.display = "block";
	// เปิดอีกหน้า
	document.getElementById("page_002_1").style.display = "block";
	document.getElementById("form_ageCapitalProtection").style.display = "block";
	
	status_copying="new";
	// เก็บค่าในแถวที่กด
	var temp_Appendix_Code2=temp_Appendix_Code
	// Version_ID
	$.ajax({
        type: "POST",
        url : "UW_GetData_Servlet",
        data: {
        	method 			: "getAppendixVersionDetail",
        	Appendix_Code 	: temp_Appendix_Code2,
        	Version_ID 		: Version_ID
        },       
        success : function(response) {	
        	;
        	showAppendixDetail(response,"new",(Number(Version_ID)+1),false);
        	$("#Appendix_code_copy")	.val(temp_Appendix_Code);
        	$("#Version_id_copy")		.val(Version_ID);
        	$("#appendixValue")			.val("");
        	$("#appendixVersion")		.val(0);
        	
        	$("#bt1_submit_med")		.attr("disabled",false);
        },
        error : function(response) {	
        	console.log("get product case error.")
        }
	});
	Statuesave="N";
	is_copynew=true;
	// temp_Appendix_Code="";
	$("#appendixValue").val("");
}

function bt_save_pretarget_appendix() {
	
	var appendixValue 	= "";
	var appendixCode 	= "";
	var appendixName 	= "";
	var appendixVersion = "";
	var vid 			= "";
	var Start_date 		= "";
	var End_date 		= "";
	
	var ii=0;
	$("#tb_model_appendix2 tbody>tr").each(function() {
		if ($(this).find('td:nth-child(1) input ').is(':checked')) {
			 appendixValue =$(this).find('td:nth-child(2)').text()
			 appendixCode =$(this).find('td:nth-child(2) input').val()
			 appendixName = $(this).find('td:nth-child(3)').text()
			 appendixVersion = $(this).find('td:nth-child(4)').text()
			 vid = $(this).find('td:nth-child(4) input').val()
			 Start_date = $(this).find('td:nth-child(5)').text()
			 End_date = $(this).find('td:nth-child(6)').text()
		}
	});
	
	var row = "<tr>"
			
			+ "<td style='width:9%'><input type='hidden' value='"+appendixCode+"'/>" + appendixValue + "</td>"
			+ "<td style='width:45%'><p align='left'>" + appendixName + "</p></td>"
			// + "<td style='width:10%'>" + appendixVersion + "</td>"
			+ "<td style='width:10%'><input type='hidden' value='"+vid+"'/>"+appendixVersion+"</td>"
			
			+ "<td style='width:18%'>" + Start_date + "</td>"
			+ "<td style='width:18%'>" + End_date + "</td>"
			
			+ "</tr>"
	
	$("#tb_prechanging_appendix tbody>tr:first").remove();	
	$("#tb_prechanging_appendix tbody").append(row);
	
	$("#modal_listProduct").modal('show');
	
	var count_product_row = 0
	var count_app_row = 0
	
	$("#tb_product_related tbody>tr").each(function() {
		if ($(this).find('td:nth-child(1) input ').is(':checked')) {
			count_product_row++
		}
	});
	$("#tb_prechanging_appendix tbody>tr").each(function() {
		
		if ($(this).find('td:nth-child(1) ').text().length>0) {
			count_app_row++
		}
	});
	
	if(count_product_row>0&&count_app_row>0){
		$("#bt_modal_listProduct_save")     				.attr("disabled", false);
	}else{
		$("#bt_modal_listProduct_save")     				.attr("disabled", true);
	}
	

}

function bt_back_pretarget_appendix(){
	$("#modal_listProduct").modal('show');
}

function bt_save_target_appendix(e) {
		
	;
	var id = $(e).attr('id');
	var int_id = id.replace("row_tb_manage_appendix_","");
	var appendixValue = "";
	var appendixCode = "";
	var appendixName = "";
	var appendixVersion = "";
	var vid = "";
	var Start_date = "";
	var End_date ="";
	var status ="";
	var ii=0;
	var product_count =0;
	$("#tb_prechanging_appendix tbody>tr").each(function() {
		
			 appendixValue =$(this).find('td:nth-child(1)').text()
			 appendixCode =$(this).find('td:nth-child(1) input[type=hidden]').val()
			 appendixName = $(this).find('td:nth-child(2)').text()
			 appendixVersion = $(this).find('td:nth-child(3)').text()
			  vid = $(this).find('td:nth-child(3) input').val()
			 Start_date = $(this).find('td:nth-child(4)').text()
			 End_date = $(this).find('td:nth-child(5)').text()
			 
	});

	var list_product_data = [];
	
	$("#tb_product_related tbody>tr").each(function() {
		if ($(this).find('td:nth-child(1) input[type=checkbox]').is(':checked')) {
			product_count++;
			
			list_product_data.push($(this).find("td:nth-child(2) ").text());
			list_product_data.push($(this).find("td:nth-child(2) input").val());
		}	
	})

	
	$("#"+id).find('td:nth-child(5) input').val(list_product_data);
	$("#arr_product").val(list_product_data)
	
	
	// $("#"+id).find('td:nth-child(6)
	// input').val(appendixCode).text(appendixValue)
	$("#"+id).find('td:nth-child(6) input[type="hidden"]').val(appendixCode)
	$("#"+id).find('td:nth-child(6) span').text(appendixValue)
	
	$("#"+id).find('td:nth-child(7) input[type="hidden"]').val(vid)
	$("#"+id).find('td:nth-child(7) span').text(appendixVersion)
	// $("#"+id).find('td:nth-child(7) ').text(appendixVersion)
	//$("#"+id).find('td:nth-child(10)').text(product_count)
	
	$("#"+id).find('td:nth-child(10) input[type="hidden"]').val(Start_date)
	$("#"+id).find('td:nth-child(10) span').text(product_count)
	
	$.datetimepicker.setLocale('th');
	var year_end = new Date().getFullYear();
	year_end = 9456 //- year_end 
	
	
	
	if(int_id>1){
		jQuery("#start_date"+int_id).datetimepicker({
			  timepicker:false,
			  format:'d/m/Y',
			  lang:'th',
			  todayButton: false,
			  yearEnd: year_end,
			  onSelectDate:function(dp,$input){
				  
				  var yearT = new Date(dp).getFullYear();
				  var yearTH = yearT+543;
				  
				  var fulldate = $input.val();
				  var fulldateTH = fulldate.replace(yearT,yearTH);
				  $input.val(fulldateTH);
			  }, 
			});
			
			jQuery("#start_date"+int_id).on("mouseenter mouseleave", function(e){
				var dateValue = $(this).val();
				if(dateValue != ""){					
					 
					var arr_date = dateValue.split("/");
					if(e.type=="mouseenter"){
						var yearT = arr_date[2]-543;
					}
					if(e.type=="mouseleave"){
						var yearT = parseInt(arr_date[2])+543;
					}
					
					dateValue = dateValue.replace(arr_date[2],yearT);
					$(this).val(dateValue);
				}
			});
			
			jQuery("#end_date"+int_id).datetimepicker({
				  timepicker:false,
				  format:'d/m/Y',
				  lang:'th',
				  todayButton: false,
				  onSelectDate:function(dp,$input){
					  
					  var yearT = new Date(dp).getFullYear();
					  var yearTH = yearT+543;
					  
					  var fulldate = $input.val();
					  var fulldateTH = fulldate.replace(yearT,yearTH);
					  $input.val(fulldateTH);
				  }, 
				});
				
				jQuery("#end_date"+int_id).on("mouseenter mouseleave", function(e){
					var dateValue = $(this).val();
					if(dateValue != ""){					
						 
						var arr_date = dateValue.split("/");
						if(e.type=="mouseenter"){
							var yearT = arr_date[2]-543;
						}
						if(e.type=="mouseleave"){
							var yearT = parseInt(arr_date[2])+543;
						}
						
						dateValue = dateValue.replace(arr_date[2],yearT);
						$(this).val(dateValue);
					}
				});
	}
	
	

	
}

/* เพิ่ม row ในตาราง รายการภาคผนวก */
function bt_add_row_listAppendixTab1(){
	var chk_length = $("#tb_manage_appendix tbody>tr").length;
	var row = "<tr id='row_tb_manage_appendix_"+(chk_length+1)+"'  onchange='enable_bt_save_tab2(this);' role='row'>"+
//	            "<td width='3%'><input type='radio'  class='checker panel_head_big' name='rd_manage_appendix' checked value='0' /></td>"+
//	            "<td width='12%'><select id='channal_lookup"+(chk_length+1)+"' class='form-control'><option>All</option></select></td>"+
//				"<td width='12%'><select id='partner_lookup"+(chk_length+1)+"' class='form-control'><option>All</option></select></td>"+
//				"<td width='12%'><select id='cov_cat_lookup"+(chk_length+1)+"' class='form-control'><option>All</option></select></td>"+
//				"<td width='2%'><input type='hidden' value=''/><a class='active_grey'><span class='glyphicon glyphicon-circle-arrow-right' style='font-size: 25px' " +
//				" data-toggle='modal' onclick='bt_pass_para_appendix(this);'></span></a></td>"+
//				"<td width='8%'><input type='hidden' value=''/><span></span></td>"+
//				"<td width='8%'><input type='hidden' value=''/><span></span></td>"+
//				"<td width='16%'><input type='text' id='start_date"+(chk_length+1)+"' onclick='start_dateF_para(this)' " +
//						"class='form-control' placeholder='dd/mm/yyyy'/></td>"+
//				"<td width='16%'><input type='text' id='end_date"+(chk_length+1)+"' onclick='to_dateF_para(this)'" +
//						"class='form-control' placeholder='dd/mm/yyyy'/></td>"+
//				"<td width='5%'><input type='hidden' value=''/><span></span></td>"+
//				"<td width='6%'></td>"+
				
				"<td><input type='radio'  class='checker panel_head_big' name='rd_manage_appendix' checked value='0' /></td>"+
	            "<td><select id='channal_lookup"+(chk_length+1)+"' class='form-control'><option>All</option></select></td>"+
				"<td><select id='partner_lookup"+(chk_length+1)+"' class='form-control'><option>All</option></select></td>"+
				"<td><select id='cov_cat_lookup"+(chk_length+1)+"' class='form-control'><option>All</option></select></td>"+
				"<td><input type='hidden' value=''/><a class='active_grey'><span class='glyphicon glyphicon-circle-arrow-right' style='font-size: 25px' " +
				" data-toggle='modal' onclick='bt_pass_para_appendix(this);'></span></a></td>"+
				"<td><input type='hidden' value=''/><span></span></td>"+
				"<td><input type='hidden' value=''/><span></span></td>"+
				"<td><input type='text' id='start_date"+(chk_length+1)+"' onclick='start_dateF_para(this)' " +
						"class='form-control' placeholder='dd/mm/yyyy'/></td>"+
				"<td><input type='text' id='end_date"+(chk_length+1)+"' onclick='to_dateF_para(this)'" +
						"class='form-control' placeholder='dd/mm/yyyy'/></td>"+
				"<td><input type='hidden' value=''/><span></span></td>"+
				"<td></td>"+
				
			"</tr>"
	$("#tb_manage_appendix tbody").append(row);
	//$("#start_date"+(chk_length+1)).datetimepicker({timepicker : false, format : 'd/m/Y', yearOffset:543})
	//$("#end_date"+(chk_length+1)).datetimepicker({timepicker : false, format : 'd/m/Y', yearOffset:543})
	
	var appendixValue = "";
	var appendixValue2 = "";
	var appendixName = "";
	var versionName = "";
	var appendixVersion = "";
	var appendixVersion2 = "";
	var Start_date = "";
	var End_date ="";
	
	var ii=0;
	
	$("#tb_changing_appendix tbody>tr").each(function() {
		
			 appendixValue =$(this).find('td:nth-child(1)').text()
			 appendixValue2 =$(this).find('td:nth-child(1) input[type="hidden"]').val()
			 appendixName = $(this).find('td:nth-child(3) input').val()
			 appendixVersion = $(this).find('td:nth-child(4) input[type="hidden"]').val()
			 appendixVersion2 = $(this).find('td:nth-child(4) input[type="hidden"]').val()
			 versionName = $(this).find('td:nth-child(4) ').text()
			 Start_date = $(this).find('td:nth-child(5)').text()
			 End_date = $(this).find('td:nth-child(6)').text()
		
	});

	
	$('#bt_delete_row_listAppendix')	.attr("disabled", false);
	$('#bt_req_row_listAppendix')		.attr("disabled", true);
	$('#bt_his_row_listAppendix')		.attr("disabled", false);
	$('#bt_save_tab2')					.attr("disabled", false);
	$("#bt_add_row_listAppendix")		.attr("disabled", true);
	$("#bt_select_all")     			.attr("disabled", false);

	var count_product_row = $("#tb_product_related tbody>tr").length;
	$("#product_count").val(count_product_row).attr("disabled", true);
	
	
	$.ajax({
	    type: "POST",
	    url : "UW_GetData_Servlet",
	    data: {
	    	method 			: "getLookUpFilter",
	    	Appendix_code	: appendixValue2,
	    	Version_id		: appendixName
	    },       
	    success : function(response) {	
	    	setLookUpFilterForAddRow(response);  // GET LOOKUP FRIST AND SHOW
													// DATA

	    },
	    error : function(response) {	
	    	console.log("get lookup case error.")
	    }
	});
}

/* ลบ row ในตาราง รายการภาคผนวก */
function bt_delete_row_listAppendixTab1(){
	
	
	var chk_length = $("#tb_manage_appendix tbody>tr").length;
	var Txn_id=0;
	var status ="";
	$("#tb_manage_appendix tbody>tr").each(function(){
		
		if ($(this).find('td:nth-child(1) input[type=radio] ').is(':checked')) {
			
			Txn_id=$(this).find('td:nth-child(1) [type=hidden]' ).val();
			status=$(this).find('td:nth-child(11) ' ).text();
			if(status!=""){
				$("#modal_delete").modal("show")
				
				return;
			}else if(Number(Txn_id)!=0){
				var json_data = {
						
				    	"method"	: "Tab_Delete_All_Txn",
				    	"Txn_id"    : Txn_id,		        
					}
	
					$.ajax({
						url: 'UW_SaveData_Servlet',
						type: "POST",
						data: json_data,
						success: function (response) {
							
							// $("#bt_add_row_listAppendix").attr("disabled",
							// false);
							$('#tb_manage_appendix input[type=radio]:checked').parent().parent().remove();
						}
					});
				$('#bt_add_row_listAppendix').attr("disabled",false);
				$('#bt_delete_row_listAppendix').attr("disabled",true);
				$('#bt_req_row_listAppendix').attr("disabled",true);
				$('#bt_his_row_listAppendix').attr("disabled",true);
				$('#bt_save_tab2').attr("disabled",true);
			}
		}
	})
	
	
	$('#bt_add_row_listAppendix').attr("disabled",false);
}
function bt_CF_delete_row_listAppendixTab1(){
	
	
	var chk_length = $("#tb_manage_appendix tbody>tr").length;
	var Txn_id=0;
	var status ="";
	$("#tb_manage_appendix tbody>tr").each(function(){
		if ($(this).find('td:nth-child(1) input ').is(':checked')) {
			
			Txn_id=$(this).find('td:nth-child(1) input' ).val();
			status=$(this).find('td:nth-child(11) ' ).text();
			
			if(Number(Txn_id)!=0){
				var json_data = {
						
				    	"method"	: "Tab_Delete_All_Txn",
				    	"Txn_id" : Txn_id,		        
					}
	
					$.ajax({
						url: 'UW_SaveData_Servlet',
						type: "POST",
						data: json_data,
						success: function (response) {
							
							
							// $("#bt_add_row_listAppendix").attr("disabled",
							// false);
						}
					});
				$('#bt_add_row_listAppendix').attr("disabled",false);
				$('#bt_delete_row_listAppendix').attr("disabled",true);
				$('#bt_req_row_listAppendix').attr("disabled",true);
				$('#bt_his_row_listAppendix').attr("disabled",true);
				$('#bt_save_tab2').attr("disabled",true);
			}
		}
	})
	
	$('#tb_manage_appendix input[type=radio]:checked').parent().parent().remove();
	$('#bt_add_row_listAppendix').attr("disabled",false);
}
function chk_popup_checklist(e) {
	
	Statuesave  = "N";
	 
	$.ajax({
        type: "POST",
        url : "UW_GetData_Servlet",
        data: {
        	method 	: "getMedExamBloodAndNotBlood"
        },       
        success : function(response) {	
        	ShowDataMedExamBloodAndNotBlood(response,e);
        },
        error : function(response) {	
        	console.log("get product case error.")
        }
	});
	
	
}
function ShowDataMedExamBloodAndNotBlood(value,e) {
	/** *** get id จากช่องที่ กด เพื่อ หาลิวรายการตรวจที่เลือกไปแล้ว **** */
	
	var bt_id = $(e).attr('id');
	$("#modal_selectListHealth").modal('show');
	$("#approved_modal").attr("onclick",
			"bt_save_selectListHealth(" + bt_id + ");");
	var cell_id = bt_id.replace("bt_","");
	var dataGroup = $("#"+cell_id).text();

	var list_dataGroup = new Array();
	list_dataGroup = dataGroup.split(",");
	
	
	/** *** ตัวแปร **** */
	var Exam_code        = "";
	var Name_abb	 	 = "";
	var Name_th		     = "";
	
	
	/** *** ใส่ข้อมูลตารางตรวจเลือด **** */
	
	$('#tb_selectListHealthGroup').DataTable().destroy();
	$("#tb_selectListHealthGroup tbody").find("tr").remove();
	$("#tb_modal_checkList_blood tbody").find("tr").remove();
	
	for(var i = 0; i < value.MedExamBlood_Data.length; i++){
		Exam_code 		 = value.MedExamBlood_Data[i].Exam_code;
		Name_abb		 = value.MedExamBlood_Data[i].Name_abb;
		Name_th		 	 = value.MedExamBlood_Data[i].Name_th;
		
		var row = "<tr>"
			
		+ "<td style='padding: 1px;' width='9%' ><input type='checkbox' class='checker panel_head_big' id='chk_blood"+i+"' /></td>"
		+ "<td style='padding: 1px;' width='14%' id='txt_bloodCode"+i+"'>"+Exam_code+"</td>"
		+ "<td style='padding: 1px;' width='23%' id='txt_bloodNameAbb"+i+"'><p align='left'>"+Name_abb+"</p></td>"
		+ "<td style='padding: 1px;' width='54%' id='txt_bloodName"+i+"'><p align='left'>"+Name_th+"</p></td>"
		
		+ "</tr>";

        $("#tb_selectListHealthGroup tbody").append(row);
	}
	
	
	/** *** ไล่ลบข้อมูลซ้ำ ตารางตรวจเลือด **** */
	$("#tb_selectListHealthGroup tbody>tr").each(function(n) {
			for (j in list_dataGroup) {
				if ($(this).find('td:nth-child(2) ' ).text() == list_dataGroup[j]) {
					$(this).find('td:nth-child(1) input' ).prop("checked", true);
				}
			}
	})

	$("#tb_selectListHealthGroup_wrapper .table").css({"width":"100%"});
	
	$('#tb_selectListHealthGroup').DataTable({"paging": false,"bDestroy": 
		true,"bPaginate": false,"bFilter" : false,"bInfo" :
			false,"ordering": false,"sScrollY": "200px","searching" :false,scrollCollapse: true });
	$("#tb_selectListHealthGroup_wrapper .table").css({"width":"100%"});
	

	$("#tb_selectListHealthGroup_wrapper .dataTables_scrollHeadInner").css({"width":"100%"});
	
	
	
/** *** ใส่ข้อมูลตารางตรวจธรรมดา **** */
	
	$('#tb_selectListHealth').DataTable().destroy();
	$("#tb_selectListHealth tbody").find("tr").remove();
	
	for(var i = 0; i < value.MedExamNotBlood_Data.length; i++){
		
		Exam_code 		 	= value.MedExamNotBlood_Data[i].Exam_code;
		Name_abb		 	= value.MedExamNotBlood_Data[i].Name_abb;
		Name_th		 	 	= value.MedExamNotBlood_Data[i].Name_th;
		Exam_type		 	= value.MedExamNotBlood_Data[i].Exam_type;
		
        var row = "<tr>"
        	
    		+ "<td style='padding: 1px;' ><input type='checkbox' class='checker panel_head_big' id='chk_exam"+i+"' /></td>"
    		+ "<td style='padding: 1px;' id='txt_examCode"+i+"'>"+Exam_code+"</td>"
    		+ "<td style='padding: 1px;' id='txt_examNameAbb"+i+"'><p align='left'>"+Name_abb+"</p></td>"
    		+ "<td style='padding: 1px;' id='txt_examName"+i+"'><p align='left'>"+Name_th+"</p></td>"
    		+ "<td style='padding: 1px;' id='txt_examType"+i+"'>"+Exam_type+"</td>"
    		+ "</tr>";

        $('#tb_selectListHealth tbody').append(row);

	}
	

	
	/** *** ไล่ลบข้อมูลซ้ำ ตารางตรวจธรรมดา **** */
	$("#tb_selectListHealth tbody>tr").each(function(n) {
			for (j in list_dataGroup) {
				
				if ($(this).find('td:nth-child(2) ' ).text() == list_dataGroup[j]) {
					$(this).find('td:nth-child(1) input' ).prop("checked", true);
				}
			}
	})


	$("#tb_selectListHealth_wrapper .table").css({"width":"100%"});
	
	$('#tb_selectListHealth').DataTable({"paging": false,"bDestroy": 
		true,"bPaginate": false,"bFilter" : false,"bInfo" :
			false,"ordering": false,"sScrollY": "160px","searching" :false,scrollCollapse: true });
	$("#tb_selectListHealth_wrapper .table").css({"width":"100%"});
	

	$("#tb_selectListHealth_wrapper .dataTables_scrollHeadInner").css({"width":"100%"});
	
}

function select_all_tb_selectListHealth() {
	var product_count=0;
	var product_countall=0;
	$("#tb_selectListHealth tbody>tr").each(function() {
		product_countall++;
		if ($(this).find('td:nth-child(1) input[type=checkbox]').is(':checked')) {
			product_count++;
			
		}	
	})
	if(product_count==product_countall){
		$("#tb_selectListHealth tbody>tr").each(function() {
			$(this).find('td:nth-child(1) input[type=checkbox]').prop('checked',false)
		})
	}else{
		$("#tb_selectListHealth tbody>tr").each(function() {
			$(this).find('td:nth-child(1) input[type=checkbox]').prop('checked',true)
				
		})
	}
	//enable_cb_modal_blood();
}

function select_all_tb_selectListHealthGroup() {
	var product_count=0;
	var product_countall=0;
	$("#tb_selectListHealthGroup tbody>tr").each(function() {
		product_countall++;
		if ($(this).find('td:nth-child(1) input[type=checkbox]').is(':checked')) {
			product_count++;
			
		}	
	})
	if(product_count==product_countall){
		$("#tb_selectListHealthGroup tbody>tr").each(function() {
			$(this).find('td:nth-child(1) input[type=checkbox]').prop('checked',false)
		})
	}else{
		$("#tb_selectListHealthGroup tbody>tr").each(function() {
			$(this).find('td:nth-child(1) input[type=checkbox]').prop('checked',true)
				
		})
	}
	//enable_cb_modal_blood();
}
/* ปุ่มบันทึก 2.4 */
function bt_save_listAppendixTab2() {
	
	
	var target_Appendix_code="";
	var target_Version_id;
	var target_Version_name="";
	var ori_Appendix_code="";
	var ori_Appendix_abbname="";
	var ori_Version_name="";
	var ori_Version_id;
	var Eff_date;
	var Exp_date;
	$("#tb_changing_appendix tbody>tr").each(function() {
		ori_Appendix_abbname=$(this).find('td:nth-child(1)').text();
		ori_Appendix_code=$(this).find('td:nth-child(1) input').val();
		ori_Version_id=$(this).find('td:nth-child(3) input').val();
	})
	
	
	// var Cov_cat_id = $('#cov_cat_lookup'+rid+'
	// :selected').val()==null?"ALL":$('#cov_cat_lookup'+rid+'
	// :selected').val();
	
	var appendix_productFrom_data = [];
	var appendix_productTo_data = [];
	var temp = [];
	var list_dataFGroup = new Array();
	$("#tb_manage_appendix tbody>tr").each(function(k){
		// if ($(this).find('td:nth-child(1) input[type=radio]').is(':checked'))
		// {
			
			list_product_in_row =$(this).find("td:nth-child(5) input").val();
			
			var list_dataFGroup = new Array();
			list_dataFGroup = list_product_in_row.split(",");
			var j =0;
			for(j; j<list_dataFGroup.length; j++){
				
				obj = {};
				obj["Appendix_code"] = ori_Appendix_code;
				obj["Version_id"] = ori_Version_id;
				obj["Prd_code"] = list_dataFGroup[j];
				obj["Eff_date"] = list_dataFGroup[j+1];
				obj["Exp_date"] = $(this).find('td:nth-child(9)').text();
				appendix_productFrom_data.push(obj);
				j++;
				
			}
		// }
			
	});
	$("#tb_manage_appendix tbody>tr").each(function() {
		if ($(this).find('td:nth-child(1) input[type=radio]').is(':checked')) {
			
			list_product_in_row =$(this).find("td:nth-child(5) input").val();
			
			var list_dataFGroup = new Array();
			list_dataFGroup = list_product_in_row.split(",");
			var j =0;
			for(j; j<list_dataFGroup.length; j++){
				//
				obj = {};
					obj["ori_Appendix_code"] = ori_Appendix_code;
					obj["ori_Version_id"]	 = ori_Version_id;
					obj["Appendix_code"]	 = $(this).find('td:nth-child(6) input').val();
					obj["Txn_id"] 			 = $(this).find('td:nth-child(1) input').val();
					obj["Version_id"]	 = $(this).find('td:nth-child(7) input').val();
					obj["Prd_code"]		 = list_dataFGroup[j];
					obj["Eff_date"]		 = $(this).find('td:nth-child(8) input').val();
					obj["Exp_date"]		 = $(this).find('td:nth-child(9) input').val();
					appendix_productTo_data.push(obj);
					j++
			}
			
		}		
	});
	
	var json_data = {
			
    	"method"	: "Tab_MoveAppendix_Version2",
        
        "Eff_date"		: Eff_date,
        "Exp_date"		: Exp_date,
        
        "appendix_productFrom_data": JSON.stringify(appendix_productFrom_data),
        "appendix_productTo_data": JSON.stringify(appendix_productTo_data)
        
	}

	$.ajax({
		url: 'UW_SaveData_Servlet',
		type: "POST",
		data: json_data,
		success: function (response) {
			
			set_txn_id_to_row(response);
			$("#bt_add_row_listAppendix").attr("disabled", false);
			
			$("#bt_delete_row_listAppendix")    	.attr("disabled", true);
			$("#bt_req_row_listAppendix")     		.attr("disabled", true);
			$("#bt_his_row_listAppendix")     		.attr("disabled", true);
			$("#bt_approve_row_listAppendix")     	.attr("disabled", true);
			$("#bt_not_approve_row_listAppendix")   .attr("disabled", true);
			$("#bt_cancel_row_listAppendix")     	.attr("disabled", true);
			$("#bt_cancel_row_listAppendixU")     	.attr("disabled", true);
			$("#bt_save_tab2")     					.attr("disabled", true);
		}
	});

}
function bt_req_approve_listAppendixTab2() {
	
	
	var target_Appendix_code="";
	var target_Version_id;
	var target_Version_name="";
	var ori_Appendix_code="";
	var ori_Appendix_abbname="";
	var ori_Version_id;
	var ori_Version_name="";
	var Eff_date;
	var Exp_date;
	//
	$("#tb_changing_appendix tbody>tr").each(function() {
		
		ori_Appendix_abbname	=$(this).find('td:nth-child(1) ').text();
		ori_Appendix_code		=$(this).find('td:nth-child(1) input').val();
		ori_Version_id			=$(this).find('td:nth-child(3) input').val();
		ori_Version_name		=$(this).find('td:nth-child(3) ').text();
	})
	
	
	
	var appendix_productFrom_data = [];
	var appendix_productTo_data = [];
	var temp = [];
	var list_dataFGroup = new Array();
	var list_dataFGroupName = new Array();
	$("#tb_manage_appendix tbody>tr").each(function(k){
		
			list_product_in_row =$(this).find("td:nth-child(5) input").val();
			
			var list_dataFGroup = new Array();
			list_dataFGroup = list_product_in_row.split(",");
			var j =0;
			for(j; j<list_dataFGroup.length; j++){
				
				obj = {};
				obj["Appendix_code"] = ori_Appendix_code;
				obj["Version_id"] 	= ori_Version_id;
				obj["Prd_code"] 	= list_dataFGroup[j];
				obj["Eff_date"] 	= list_dataFGroup[j+1];
				obj["Exp_date"] 	= $(this).find('td:nth-child(9)').text();
				appendix_productFrom_data.push(obj);
				j++;
				
			}
		// }
			
	});
	$("#tb_manage_appendix tbody>tr").each(function() {
		if ($(this).find('td:nth-child(1) input[type=radio]').is(':checked')) {
			
			list_product_in_row =$(this).find("td:nth-child(5) input").val();
			
			var list_dataFGroup = new Array();
			list_dataFGroup = list_product_in_row.split(",");
			var j =0;
			for(j; j<list_dataFGroup.length; j++){
				
				obj = {};
					obj["ori_Appendix_code"] = ori_Appendix_code;
					obj["ori_Version_id"]	 = ori_Version_id;
					obj["Appendix_code"]	 = $(this).find('td:nth-child(6) input').val();
					target_Appendix_code	= $(this).find('td:nth-child(6) span').text();
					target_Version_name		= $(this).find('td:nth-child(7) span').text();
					obj["Txn_id"] 			 = $(this).find('td:nth-child(1) input').val();
					obj["Version_id"]	 = $(this).find('td:nth-child(7) input').val();
					obj["Prd_code"]		 = list_dataFGroup[j];
					obj["Eff_date"]		 = $(this).find('td:nth-child(8) input').val();
					obj["Exp_date"]		 = $(this).find('td:nth-child(9) input').val();
					Eff_date		 = $(this).find('td:nth-child(8) input').val();
					Exp_date	 	= $(this).find('td:nth-child(9) input').val();
					
					appendix_productTo_data.push(obj);
					j++
			}
			
		}		
	});
	
	
	
	var json_data = {
			
    	"method"	: "Tab_RequestMoveAppendix_Version2",
        
        "Eff_date"		: Eff_date,
        "Exp_date"		: Exp_date,
        
        "appendix_productFrom_data"	: JSON.stringify(appendix_productFrom_data),
        "appendix_productTo_data"	: JSON.stringify(appendix_productTo_data)
        
	}

	$.ajax({
		url: 'UW_SaveData_Servlet',
		type: "POST",
		data: json_data,
		success: function (response) {
			
			$("#tb_manage_appendix tbody>tr").each(function() {
				if ($(this).find('td:nth-child(1) input[type=radio]').is(':checked')) {
					
					$(this).find('td:nth-child(1) input').attr("disabled", false).prop("checked", false);
					
					//$(this).find('td:nth-child(1) input').attr("disabled",true)
					$(this).find('td:nth-child(2) select').attr("disabled", true);
					$(this).find('td:nth-child(3) select').attr("disabled", true);
					$(this).find('td:nth-child(4) select').attr("disabled", true);
					$(this).find('td:nth-child(5) a').attr("disabled",true);
					$(this).find('td:nth-child(8) input').attr("disabled",true);
					$(this).find('td:nth-child(9) input').attr("disabled",true);
					
					$(this).find('td:nth-child(11)').text("รออนุมัติ");
					
					$(this).find('td:nth-child(8) input').attr("disabled",true).addClass("disabledAll_NotFade");
					$(this).find('td:nth-child(9) input').attr("disabled",true).addClass("disabledAll_NotFade");
					
				}	
			})
			$("#bt_add_row_listAppendix")    		.attr("disabled", false);
			$("#bt_delete_row_listAppendix")    	.attr("disabled", true);
			$("#bt_req_row_listAppendix")     		.attr("disabled", true);
			$("#bt_his_row_listAppendix")     		.attr("disabled", true);
			$("#bt_approve_row_listAppendix")     	.attr("disabled", true);
			$("#bt_not_approve_row_listAppendix")   .attr("disabled", true);
			$("#bt_cancel_row_listAppendix")     	.attr("disabled", true);
			$("#bt_cancel_row_listAppendixU")     	.attr("disabled", true);
			$("#bt_save_tab2")     					.attr("disabled", true);
			
			
			/***  CODE FOR PREPARE AND SEND MAIL  ****/
			var prepareEmail_data = [];
			objEmail = {};
			objEmail["requestApprove"] 		="ขออนุมัติ";
			objEmail["manuName"] 			="ย้ายตารางภาคผนวก";
			objEmail["empNameHide"] 		=$("#empNameHide").val();
			objEmail["empID"] 				=$("#empID").val();
			objEmail["departmentID"] 		=$("#departmentID").val();
			objEmail["departmentHide"] 		=$("#departmentHide").val();
			
			objEmail["ori_Appendix_code"] 	=ori_Appendix_abbname+" "+ori_Version_name;
			objEmail["target_Appendix_code"]=target_Appendix_code+" "+target_Version_name;
			objEmail["Start_date"] 			=Eff_date;
			objEmail["End_date"] 			=Exp_date;
			
			prepareEmail_data.push(objEmail);
			
			var json_data2 = {
		        	"method"			: "send_Email",
		        	"OptionEmail"		: "4",
		        	"prepareEmail_data"			: JSON.stringify(prepareEmail_data),
		        	"appendix_productTo_data"	: JSON.stringify(appendix_productTo_data),
			}
			$.ajax({
				url: 'UW_Email_Servlet',
				type: "POST",
				data: json_data2,
				success: function (response) {
					
				}
			});
			/***  END CODE FOR PREPARE AND SEND MAIL  ****/
			
		}
	});
	
	

}
function bt_approve_listAppendixTab2() {
	
	
	var target_Appendix_code="";
	var target_Version_id;
	var target_Version_name="";
	var ori_Appendix_code="";
	var ori_Appendix_abbname="";
	var ori_Version_id;
	var ori_Version_name="";
	var Eff_date;
	var Exp_date;
	
	$("#tb_changing_appendix tbody>tr").each(function() {
		ori_Appendix_abbname	=$(this).find('td:nth-child(1)').text();
		ori_Appendix_code		=$(this).find('td:nth-child(1) input').val();
		ori_Version_id			=$(this).find('td:nth-child(3) input').val();
		ori_Version_name		=$(this).find('td:nth-child(3) ').text();
	})
	
	
	// var Cov_cat_id = $('#cov_cat_lookup'+rid+'
	// :selected').val()==null?"ALL":$('#cov_cat_lookup'+rid+'
	// :selected').val();
	
	var appendix_productFrom_data = [];
	var appendix_productTo_data = [];
	var temp = [];
	var list_dataFGroup = new Array();
	$("#tb_manage_appendix tbody>tr").each(function(k){
		// if ($(this).find('td:nth-child(1) input[type=radio]').is(':checked'))
		// {
			
			list_product_in_row =$(this).find("td:nth-child(5) input").val();
			
			var list_dataFGroup = new Array();
			list_dataFGroup = list_product_in_row.split(",");
			var j =0;
			for(j; j<list_dataFGroup.length; j++){
				
				obj = {};
				obj["Appendix_code"] = ori_Appendix_code;
				obj["Version_id"] = ori_Version_id;
				obj["Prd_code"] = list_dataFGroup[j];
				obj["Eff_date"] = list_dataFGroup[j+1];
				obj["Exp_date"] = $(this).find('td:nth-child(9)').text();
				appendix_productFrom_data.push(obj);
				j++;
				
			}
		// }
			
	});
	//
	$("#tb_manage_appendix tbody>tr").each(function() {
		if ($(this).find('td:nth-child(1) input[type=radio]').is(':checked')) {
			
			list_product_in_row =$(this).find("td:nth-child(5) input").val();
			
			var list_dataFGroup = new Array();
			list_dataFGroup = list_product_in_row.split(",");
			var j =0;
			for(j; j<list_dataFGroup.length; j++){
				
				obj = {};
					obj["ori_Appendix_code"] = ori_Appendix_code;
					obj["ori_Version_id"]	 = ori_Version_id;
					obj["Appendix_code"]	 = $(this).find('td:nth-child(6) input').val();
					target_Appendix_code	= $(this).find('td:nth-child(6) span').text();
					target_Version_name		= $(this).find('td:nth-child(7) span').text();
					obj["Txn_id"] 			 = $(this).find('td:nth-child(1) input').val();
					obj["Version_id"]	 = $(this).find('td:nth-child(7) input').val();
					obj["Prd_code"]		 = list_dataFGroup[j];
					obj["Eff_date"]		 = $(this).find('td:nth-child(8) input').val();
					obj["Exp_date"]		 = $(this).find('td:nth-child(9) input').val();
					Eff_date		 	= $(this).find('td:nth-child(8) input').val();
					Exp_date	 		= $(this).find('td:nth-child(9) input').val();
					
					
					appendix_productTo_data.push(obj);
					j++
			}
			
		}		
	});
	
	var json_data = {
			
    	"method"	: "Tab_ApproveMoveAppendix_Version2",
        
        "Eff_date"		: Eff_date,
        "Exp_date"		: Exp_date,
        
        "appendix_productFrom_data": JSON.stringify(appendix_productFrom_data),
        "appendix_productTo_data": JSON.stringify(appendix_productTo_data)
        
	}

	$.ajax({
		url: 'UW_SaveData_Servlet',
		type: "POST",
		data: json_data,
		success: function (response) {
			
			$("#tb_manage_appendix tbody>tr").each(function() {
				if ($(this).find('td:nth-child(1) input[type=radio]').is(':checked')) {
					
					$(this).find('td:nth-child(1) input').attr("disabled", true).prop("checked", false);
					$(this).find('td:nth-child(11)').text("อนุมัติแล้ว");
				}	
			})
			
			$("#bt_delete_row_listAppendix")    	.attr("disabled", true);
			$("#bt_req_row_listAppendix")     		.attr("disabled", true);
			$("#bt_his_row_listAppendix")     		.attr("disabled", true);
			$("#bt_approve_row_listAppendix")     	.attr("disabled", true);
			$("#bt_not_approve_row_listAppendix")   .attr("disabled", true);
			$("#bt_cancel_row_listAppendix")     	.attr("disabled", true);
			$("#bt_cancel_row_listAppendixU")     	.attr("disabled", true);
			$("#bt_save_tab2")     					.attr("disabled", true);
			
			
			/** GEN JSON SETTING CHECKLIST  **/
			var json_data3 = {
		        	"method": "Gen_JSON_Appendix_Product",	
			}
			$.ajax({
				url: 'UW_JSON_Servlet',
				type: "POST",
				data: json_data3,
				success: function (response) {
					/***  CODE FOR PREPARE AND SEND MAIL  ****/
					var prepareEmail_data = [];
					objEmail = {};
					objEmail["requestApprove"] 		="อนุมัติ";
					objEmail["manuName"] 			="ย้ายตารางภาคผนวก";
					objEmail["empNameHide"] 		=$("#empNameHide").val();
					objEmail["empID"] 				=$("#empID").val();
					objEmail["departmentID"] 		=$("#departmentID").val();
					objEmail["departmentHide"] 		=$("#departmentHide").val();
					
					//objEmail["ori_Appendix_code"] 	=ori_Appendix_abbname;
					//objEmail["target_Appendix_code"]=target_Appendix_code;
					objEmail["ori_Appendix_code"] 	=ori_Appendix_abbname+" "+ori_Version_name;
					objEmail["target_Appendix_code"]=target_Appendix_code+" "+target_Version_name;
					objEmail["Start_date"] 			=Eff_date;
					objEmail["End_date"] 			=Exp_date;
					
					prepareEmail_data.push(objEmail);
					
					var json_data2 = {
				        	"method": "send_Email",
				        	"OptionEmail": "4",
				        	"prepareEmail_data": JSON.stringify(prepareEmail_data),
				        	"appendix_productTo_data"	: JSON.stringify(appendix_productTo_data),
					}
					$.ajax({
						url: 'UW_Email_Servlet',
						type: "POST",
						data: json_data2,
						success: function (response) {
							
						}
					});
					/***  END CODE FOR PREPARE AND SEND MAIL  ****/
					
				}
			});
			/** GEN JSON SETTING CHECKLIST  **/
			
			
//			/***  CODE FOR PREPARE AND SEND MAIL  ****/
//			var prepareEmail_data = [];
//			objEmail = {};
//			objEmail["requestApprove"] 		="อนุมัติ";
//			objEmail["manuName"] 			="ย้ายตารางภาคผนวก";
//			objEmail["empNameHide"] 		=$("#empNameHide").val();
//			objEmail["empID"] 				=$("#empID").val();
//			objEmail["departmentID"] 		=$("#departmentID").val();
//			objEmail["departmentHide"] 		=$("#departmentHide").val();
//			
//			//objEmail["ori_Appendix_code"] 	=ori_Appendix_abbname;
//			//objEmail["target_Appendix_code"]=target_Appendix_code;
//			objEmail["ori_Appendix_code"] 	=ori_Appendix_abbname+" "+ori_Version_name;
//			objEmail["target_Appendix_code"]=target_Appendix_code+" "+target_Version_name;
//			objEmail["Start_date"] 			=Eff_date;
//			objEmail["End_date"] 			=Exp_date;
//			
//			prepareEmail_data.push(objEmail);
//			
//			var json_data2 = {
//		        	"method": "send_Email",
//		        	"OptionEmail": "4",
//		        	"prepareEmail_data": JSON.stringify(prepareEmail_data),
//		        	"appendix_productTo_data"	: JSON.stringify(appendix_productTo_data),
//			}
//			$.ajax({
//				url: 'UW_Email_Servlet',
//				type: "POST",
//				data: json_data2,
//				success: function (response) {
//					
//				}
//			});
//			/***  END CODE FOR PREPARE AND SEND MAIL  ****/
			
		}
	});

}
function bt_not_approve_listAppendixTab2() {
	
	;
	var target_Appendix_code="";
	var target_Version_id;
	var target_Version_name="";
	var ori_Appendix_code="";
	var ori_Appendix_abbname="";
	var ori_Version_id;
	var ori_Version_name="";
	var Eff_date;
	var Exp_date;
	$("#tb_changing_appendix tbody>tr").each(function() {
		ori_Appendix_abbname	=$(this).find('td:nth-child(1) ').text();
		ori_Appendix_code		=$(this).find('td:nth-child(1) input').val();
		ori_Version_id			=$(this).find('td:nth-child(3) input').val();
		ori_Version_name		=$(this).find('td:nth-child(3) ').text();
	})
	
	
	// var Cov_cat_id = $('#cov_cat_lookup'+rid+'
	// :selected').val()==null?"ALL":$('#cov_cat_lookup'+rid+'
	// :selected').val();
	
	var appendix_productFrom_data = [];
	var appendix_productTo_data = [];
	var approve_note ;
	var temp = [];
	var list_dataFGroup = new Array();
	$("#tb_manage_appendix tbody>tr").each(function(k){
		// if ($(this).find('td:nth-child(1) input[type=radio]').is(':checked'))
		// {
		
			list_product_in_row =$(this).find("td:nth-child(5) input").val();
			
			var list_dataFGroup = new Array();
			list_dataFGroup = list_product_in_row.split(",");
			var j =0;
			for(j; j<list_dataFGroup.length; j++){
				
				obj = {};
				obj["Appendix_code"] = ori_Appendix_code;
				obj["Version_id"] = ori_Version_id;
				obj["Prd_code"] = list_dataFGroup[j];
				obj["Eff_date"] = list_dataFGroup[j+1];
				obj["Exp_date"] = $(this).find('td:nth-child(9)').text();
				appendix_productFrom_data.push(obj);
				j++;
				
			}
		// }
			
	});
	$("#tb_manage_appendix tbody>tr").each(function() {
		if ($(this).find('td:nth-child(1) input[type=radio]').is(':checked')) {
		
			list_product_in_row =$(this).find("td:nth-child(5) input").val();
			
			var list_dataFGroup = new Array();
			list_dataFGroup = list_product_in_row.split(",");
			var j =0;
			for(j; j<list_dataFGroup.length; j++){
				;
				obj = {};
					obj["ori_Appendix_code"] = ori_Appendix_code;
					obj["ori_Version_id"]	 = ori_Version_id;
					obj["Appendix_code"]	 = $(this).find('td:nth-child(6) input').val();
					target_Appendix_code	= $(this).find('td:nth-child(6) span').text();
					target_Version_name		= $(this).find('td:nth-child(7) span').text();
					obj["Txn_id"] 			 = $(this).find('td:nth-child(1) input').val();
					obj["Version_id"]	 	= $(this).find('td:nth-child(7) input').val();
					obj["Prd_code"]		 	= list_dataFGroup[j];
					obj["Eff_date"]		    = $(this).find('td:nth-child(8) input').val();
					obj["Exp_date"]		    = $(this).find('td:nth-child(9) input').val();
					Eff_date		 	= $(this).find('td:nth-child(8) input').val();
					Exp_date	 		= $(this).find('td:nth-child(9) input').val();
				    
					appendix_productTo_data.push(obj);
					j++
			}
			
		}		
	});
	approve_note		    = $("#textarea_reason_back2").val();
	
	var json_data = {
			
    	"method"	: "Tab_NotApproveMoveAppendix_Version2",
        "approve_note"	: approve_note,
        "Eff_date"		: Eff_date,
        "Exp_date"		: Exp_date,
        
        "appendix_productFrom_data": JSON.stringify(appendix_productFrom_data),
        "appendix_productTo_data": JSON.stringify(appendix_productTo_data)
        
	}
	;
	$.ajax({
		url: 'UW_SaveData_Servlet',
		type: "POST",
		data: json_data,
		success: function (response) {
			
			$("#tb_manage_appendix tbody>tr").each(function() {
				if ($(this).find('td:nth-child(1) input[type=radio]').is(':checked')) {
					
					$(this).find('td:nth-child(1) input').attr("disabled", true).prop("checked", false);
					$(this).find('td:nth-child(11)').text("ไม่อนุมัติ");
				}	
			})
			
			$("#bt_delete_row_listAppendix")    	.attr("disabled", true);
			$("#bt_req_row_listAppendix")     		.attr("disabled", true);
			$("#bt_his_row_listAppendix")     		.attr("disabled", true);
			$("#bt_approve_row_listAppendix")     	.attr("disabled", true);
			$("#bt_not_approve_row_listAppendix")   .attr("disabled", true);
			$("#bt_cancel_row_listAppendix")     	.attr("disabled", true);
			$("#bt_cancel_row_listAppendixU")     	.attr("disabled", true);
			$("#bt_save_tab2")     					.attr("disabled", true);
			
			/***  CODE FOR PREPARE AND SEND MAIL  ****/
			var prepareEmail_data = [];
			objEmail = {};
			objEmail["requestApprove"] 		="ไม่อนุมัติ";
			objEmail["manuName"] 			="ย้ายตารางภาคผนวก";
			objEmail["empNameHide"] 		=$("#empNameHide").val();
			objEmail["empID"] 				=$("#empID").val();
			objEmail["departmentID"] 		=$("#departmentID").val();
			objEmail["departmentHide"] 		=$("#departmentHide").val();
			
			//objEmail["ori_Appendix_code"] 	=ori_Appendix_abbname;
			//objEmail["target_Appendix_code"] =target_Appendix_code;
			objEmail["ori_Appendix_code"] 	=ori_Appendix_abbname+" "+ori_Version_name;
			objEmail["target_Appendix_code"]=target_Appendix_code+" "+target_Version_name;
			objEmail["Start_date"] 			=Eff_date;
			objEmail["End_date"] 			=Exp_date;
			
			prepareEmail_data.push(objEmail);
			
			var json_data2 = {
		        	"method": "send_Email",
		        	"OptionEmail": "4",
		        	"prepareEmail_data": JSON.stringify(prepareEmail_data),
		        	"appendix_productTo_data"	: JSON.stringify(appendix_productTo_data),
			}
			$.ajax({
				url: 'UW_Email_Servlet',
				type: "POST",
				data: json_data2,
				success: function (response) {
					
				}
			});
			/***  END CODE FOR PREPARE AND SEND MAIL  ****/
			
		}
	});
	$("#textarea_reason_back2").val("");

}
function set_txn_id_to_row(value) {
	
	$("#tb_manage_appendix tbody>tr").each(function() {
	if ($(this).find('td:nth-child(1) input[type=radio]').is(':checked')) {
		//
		$(this).find('td:nth-child(1) input').attr("disabled", false).prop("checked", false).val(value);
		var row_status=$(this).find('td:nth-child(11) ').text();
		//
		if(row_status==""){
			$(this).find('td:nth-child(11)').text("สร้างใหม่");
		}else{
			$(this).find('td:nth-child(11)').text(row_status);
		}
		
	}	
	})
}
/** ************ ฟังก์ชัน 2.4 กดเลือกภาคผนวกปลายทาง************* */
function choose_Appendix_To() {
	var ori_Appendix_code="";
	var ori_Version_id;
	var Eff_date;
	var Exp_date;
	$("#tb_changing_appendix tbody>tr").each(function() {
		ori_Appendix_code=$(this).find('td:nth-child(1) input').val();
		ori_Version_id=$(this).find('td:nth-child(3) input').val();
	})
	// model_tb_checkListHeathTo
	$.ajax({
        type: "POST",
        url : "UW_GetData_Servlet",
        data: {
        	method 	: "getAppendixVersionTo"
        		, Appendix_code : ori_Appendix_code
        		, Version_id : ori_Version_id
        },       
        success : function(response) {	
        	show_Appendix_To(response);
        },
        error : function(response) {	
        	console.log("get show_Appendix_From case error.")
        }
	});
}
/** ************ ฟังก์ชัน 2.4.1 กดเลือกภาคผนวกปลายทาง************* */
function show_Appendix_To(value) {
	
	var Appendix_code_origi        = "";
	var Version_name_origi	 	 = "";
	
	var Appendix_code        = "";
	var Appendix_name        = "";
	var Version_name	 	 = "";
	var Eff_date		     = "";
	var Exp_date		 	= "";
	var Is_Active		 	= "";
	var Is_Approved		 	= "";
	var Abb_name		 	= "";
	var row = "";
	
	$("#model_tb_checkListHeathTo").modal('show');
	
	$("#tb_changing_appendix tbody>tr").each(function() {
		Appendix_code_origi=$(this).find('td:nth-child(1) ').text();
		Version_name_origi=$(this).find('td:nth-child(3) ').text();	
	});
	
	// $('#tb_model_appendix2').DataTable().destroy();
	$("#tb_model_appendix2 tbody").find("tr").remove();
	var last_id=0;
	
	for(var i = 0; i < value.AppendixVersion_Data.length; i++){
		var Is_Active		 = value.AppendixVersion_Data[i].Is_Active;
		var Is_Approved		 = value.AppendixVersion_Data[i].Is_Approved;
		if(Is_Approved){
			Appendix_code 		 = value.AppendixVersion_Data[i].Appendix_code;
			Appendix_name 		 = value.AppendixVersion_Data[i].Appendix_name;
			Version_id			 = value.AppendixVersion_Data[i].Version_id;
			if(Appendix_code_origi===Appendix_code
					&& Version_name_origi===Version_id.toString()){
				// DONT ADD ROW SAME FROM ORIGINAL
			}else{
				Version_name		 = value.AppendixVersion_Data[i].Version_name;
				Abb_name		 	 = value.AppendixVersion_Data[i].Abb_name;
				Eff_date		 	 = value.AppendixVersion_Data[i].Eff_date;
				Exp_date		 	 = value.AppendixVersion_Data[i].Exp_date==null
								   ?"":value.AppendixVersion_Data[i].Exp_date;
				
				last_id++;
				var row = "<tr>"
				+ "<td ><input type='radio' class='checker panel_head_big' name='rd_appendix'/></td>"

				+ "<td style='width:15%'><input type='hidden' value='"+Appendix_code+"'/>" + Abb_name + "</td>"
				+ "<td style='width:45%'><p align='left'>" + Appendix_name + "</p></td>"
				// + "<td style='width:10%'>" + Version_id + "</td>"
				+ "<td style='width:10%'><input type='hidden' value='"+Version_id+"'/>"+Version_name+"</td>"
				+ "<td style='width:15%'>" + Eff_date + "</td>"
				+ "<td style='width:15%'>" + Exp_date + "</td>"
				
				row =row+ "</tr>";

		        $("#tb_model_appendix2 tbody").append(row);
			}
			
		}
		
        
	}
	
	
	
}

/** ************ ฟังก์ชัน 2.3 กด Browse หา ภาคผนวกปลายทาง************* */
function bt_pass_para_appendix(e,id) {
	//
	//;
	var id = $(e).parents('tr').attr('id');
	var idnum = id.replace("row_tb_manage_appendix_","")
	$("#modal_listProduct").modal('show');
	
	$("#bt_modal_listProduct_save").attr("onclick",
			"bt_save_target_appendix(" + id + ");");
	var status =$("#"+id).find('td:nth-child(11) ').text();
	var Appendic_code =$("#"+id).find('td:nth-child(6) ').text();
	
	$("#"+id).find('td:nth-child(1) input[type=radio]').prop("checked",true)
	
	;
	if(status=="อนุมัติแล้ว"){
		choose_approved_Appendix_To(e,idnum)
	}else if(status=="รออนุมัติ"){
		choose_approved_Appendix_To(e,idnum)
	}else if(status==""){
		if(Appendic_code==""){
			var row = "<tr>"
				+ "<td style='width:9%'>" + ""+ "</td>"
				+ "<td style='width:45%'><p align='left'>" + "" + "</p></td>"
				+ "<td style='width:10%'><input type='hidden' value='"+""+"'/>"+""+"</td>"
				+ "<td style='width:18%'>" + "" + "</td>"
				+ "<td style='width:18%'>" + "" + "</td>"
				+ "</tr>"

				$("#tb_prechanging_appendix tbody>tr:first").remove();	
				$("#tb_prechanging_appendix tbody").append(row);
				
				$("#bt_delete_row_listAppendix")    	.attr("disabled", false);
				$("#bt_req_row_listAppendix")     		.attr("disabled", true);
				$("#bt_his_row_listAppendix")     		.attr("disabled", false);
				$("#bt_approve_row_listAppendix")     	.attr("disabled", false);
				$("#bt_not_approve_row_listAppendix")   .attr("disabled", false);
				$("#bt_cancel_row_listAppendix")     	.attr("disabled", false);
				$("#bt_cancel_row_listAppendixU")     	.attr("disabled", false);
				$("#bt_save_tab2")     	.attr("disabled", false);
				
				$("#bt_add_row_listAppendix")    	.attr("disabled", true);
		}
		
		
		choose_prepare_Appendix_To(e,idnum)
		
		$("#bt_modal_listProduct_save").attr("disabled",false)
		$("#bt_choose_Appendix_To").attr("disabled",false)
	}else if(Appendic_code==null?false:Appendic_code.length>0){
		choose_prepare_Appendix_To_V02(e,idnum)
		$("#bt_modal_listProduct_save").attr("disabled",false)
		$("#bt_choose_Appendix_To").attr("disabled",false)
	}else{
		choose_prepare_Appendix_To(e,idnum)
		$("#bt_modal_listProduct_save").attr("disabled",false)
		$("#bt_choose_Appendix_To").attr("disabled",false)
	}
	// ;
	if(status=="อนุมัติแล้ว"){
		$("#bt_add_row_listAppendix")    		.attr("disabled", true);
		$("#bt_delete_row_listAppendix")    	.attr("disabled", true);
		$("#bt_req_row_listAppendix")     		.attr("disabled", true);
		$("#bt_his_row_listAppendix")     		.attr("disabled", false);
		$("#bt_approve_row_listAppendix")     	.attr("disabled", true);
		$("#bt_not_approve_row_listAppendix")   .attr("disabled", true);
		
		$("#bt_cancel_row_listAppendixU")		.attr("disabled", false)
		$("#bt_cancel_row_listAppendix")     	.attr("disabled", false);
		
		$("#bt_save_tab2")     					.attr("disabled", true);
		$("#bt_select_all")     				.attr("disabled", true);
		
	}else if(status=="รออนุมัติ"){
		$("#bt_add_row_listAppendix")    		.attr("disabled", true);
		$("#bt_delete_row_listAppendix")    	.attr("disabled", true);
		$("#bt_req_row_listAppendix")     		.attr("disabled", true);
		$("#bt_his_row_listAppendix")     		.attr("disabled", false);
		$("#bt_approve_row_listAppendix")     	.attr("disabled", false);
		$("#bt_not_approve_row_listAppendix")   .attr("disabled", false);
		
		$("#bt_cancel_row_listAppendixU")		.attr("disabled", false)
		$("#bt_cancel_row_listAppendix")     	.attr("disabled", false);
		
		$("#bt_save_tab2")     					.attr("disabled", true);
		$("#bt_select_all")     				.attr("disabled", true);
		
	}else if(status=="ไม่อนุมัติ"||status=="สร้างใหม่"||status==""){
		$("#bt_add_row_listAppendix")    		.attr("disabled", true);
		$("#bt_delete_row_listAppendix")    	.attr("disabled", false);
		$("#bt_req_row_listAppendix")     		.attr("disabled", false);
		$("#bt_his_row_listAppendix")     		.attr("disabled", false);
		$("#bt_approve_row_listAppendix")     	.attr("disabled", true);
		$("#bt_not_approve_row_listAppendix")   .attr("disabled", true);
		
		$("#bt_cancel_row_listAppendixU")		.attr("disabled", false)
		$("#bt_cancel_row_listAppendix")     	.attr("disabled", false);
		
		$("#bt_save_tab2")     					.attr("disabled", false);
		$("#bt_select_all")     				.attr("disabled", false);
	}
	
	
	var count_product_row = 0;
	var count_app_row = 0;
	
	$("#tb_product_related tbody>tr").each(function() {
		if ($(this).find('td:nth-child(1) input ').is(':checked')) {
			count_product_row++
		}
	});
	$("#tb_prechanging_appendix tbody>tr").each(function() {
		if ($(this).find('td:nth-child(1) ').text().lenght>0) {
			count_app_row++
		}
	});
	
	if(count_product_row==0){
		$("#bt_modal_listProduct_save")     				.attr("disabled", true);
	}else{
		$("#bt_modal_listProduct_save")     				.attr("disabled", false);
	}
	if(count_app_row==0){
		$("#bt_modal_listProduct_save")     				.attr("disabled", true);
	}else{
		$("#bt_modal_listProduct_save")     				.attr("disabled", false);
	}
	
}
/** ************ ฟังก์ชัน 2.3.1 กด Browse หา ภาคผนวกปลายทาง************* */
function choose_approved_Appendix_To(e,id) {
	
	//
	var id = $(e).parents('tr').attr('id');
	var Appendix_name =$("#"+id).find('td:nth-child(11) ').text();
	var status =$("#"+id).find('td:nth-child(11) ').text();
	var Appendix_code=$("#"+id).find('td:nth-child(6) input').val();
	var Version_id=$("#"+id).find('td:nth-child(7) input').val();
	var Version_name=$("#"+id).find('td:nth-child(7) ').text();
	var Prd_list=$("#"+id).find('td:nth-child(5) input').val();
	var Txn_id=$("#"+id).find('td:nth-child(1) input').val();
	$.ajax({
        type: "POST",
        url : "UW_GetData_Servlet",
        data: {
        	method 	: "getAppendixVersionDetail",
        	Appendix_Code : Appendix_code,
        	Version_ID : Version_id
        },       
        success : function(response) {	
        	showAppendixApproved(response);
        	
        	var rid=id
        	
        	var Channal_code = $('#channal_lookup'+rid+' :selected').val()==null?"ALL":$('#channal_lookup'+rid+' :selected').val();
        	var Partner_code = $('#partner_lookup'+rid+' :selected').val()==null?"ALL":$('#partner_lookup'+rid+' :selected').val();
        	var Cov_cat_id = $('#cov_cat_lookup'+rid+' :selected').val()==null?"ALL":$('#cov_cat_lookup'+rid+' :selected').val();
        	
        	$.ajax({
                type: "POST",
                url : "UW_GetData_Servlet",
                data: {
                	method 			: "getAppendixVersionPrepareProductBYTxn_ID",
                	Appendix_code 	: Appendix_code,
                	Version_id 		: Version_id,
                	Channal_code 	: Channal_code,
                	Partner_code 	: Partner_code,
                	Cov_cat_id 		: Cov_cat_id,
                	Txn_id 			: Txn_id
                },       
                success : function(response) {	
                	show_approved_Appendix_To(response);
                	
                },
                error : function(response) {	
                	console.log("get getAppendixVersionPrepareProduct case error.")
                }
        	});
        },
        error : function(response) {	
        	console.log("get showAppendixDetail case error.")
        }
	});
	
	
	
	
	

}

function choose_prepare_Appendix_To_V02(e,id) {
	
	//
	var id 				= $(e).parents('tr').attr('id');
	var Appendix_name 	=$("#"+id).find('td:nth-child(11) ').text();
	var status 			=$("#"+id).find('td:nth-child(11) ').text();
	var Appendix_code2	=$("#"+id).find('td:nth-child(6) input').val();
	var Name_abb		=$("#"+id).find('td:nth-child(6) span').text();
	var Version_id2		=$("#"+id).find('td:nth-child(7) input').val();
	var Version_name	=$("#"+id).find('td:nth-child(7) ').text();
	var Prd_list		=$("#"+id).find('td:nth-child(5) input').val();
	var Txn_id			=$("#"+id).find('td:nth-child(1) input').val();
	var Appendix_code	="";
	var Version_id		="";
	$("#tb_changing_appendix tbody>tr").each(function() {
		 Appendix_code=$(this).find('td:nth-child(1) input').val();
		 Version_id=$(this).find('td:nth-child(3) input').val();
	})
	$.ajax({
        type: "POST",
        url : "UW_GetData_Servlet",
        data: {
        	method 	: "getAppendixVersionDetail",
        	Appendix_Code : Appendix_code2,
        	Version_ID : Version_id2
        },       
        success : function(response) {	
        	showAppendixApproved(response);
        	
        	var rid=id
        	
        	var Channal_code = $('#channal_lookup'+rid+' :selected').val()==null?"ALL":$('#channal_lookup'+rid+' :selected').val();
        	var Partner_code = $('#partner_lookup'+rid+' :selected').val()==null?"ALL":$('#partner_lookup'+rid+' :selected').val();
        	var Cov_cat_id = $('#cov_cat_lookup'+rid+' :selected').val()==null?"ALL":$('#cov_cat_lookup'+rid+' :selected').val();
        	;
        	$.ajax({
                type: "POST",
                url : "UW_GetData_Servlet",
                data: {
                	method 			: "getAppendixVersionPrepareProduct",
                	Appendix_code 	: Appendix_code,
                	Version_id 		: Version_id,
                	Channal_code 	: Channal_code,
                	Partner_code 	: Partner_code,
                	Cov_cat_id 		: Cov_cat_id,
                	Txn_id 			: Txn_id
                },       
                success : function(response) {	
                	show_prepare_Appendix_To(response);
                	
                	$("#tb_product_related tbody>tr").each(function() {
                		var list_dataGroup = new Array();
    					list_dataGroup = Prd_list.split(",");
    					for (k in list_dataGroup) {
    						if ($(this).find('td:nth-child(2)').text()==list_dataGroup[k]) {
    							$(this).find('td:nth-child(1) input' ).attr("checked",true)
                    		}
    					}
                		
                		
                		
                	});
                	SetUserPermissionUW_Modal();
                	
                },
                error : function(response) {	
                	console.log("get getAppendixVersionPrepareProduct case error.")
                }
        	});
        },
        error : function(response) {	
        	console.log("get showAppendixDetail case error.")
        }
	});
	
	
	
	
	

}
function showAppendixApproved(value) {
	
	//
	var row = "<tr>"
		+ "<td style='width:9%'><input type='hidden' value='"+value.AppendixVersionALL_Data[0].Appendix_code+"'/>" + value.AppendixVersionALL_Data[0].Abb_name + "</td>"
		+ "<td style='width:45%'><p align='left'>" + value.AppendixVersionALL_Data[0].Appendix_name + "</p></td>"
		+ "<td style='width:10%'><input type='hidden' value='"+value.AppendixVersionALL_Data[0].Version_id+"'/>"+value.AppendixVersionALL_Data[0].Version_name+"</td>"
		+ "<td style='width:18%'>" + value.AppendixVersionALL_Data[0].Eff_date + "</td>"
		+ "<td style='width:18%'>" + value.AppendixVersionALL_Data[0].Exp_date + "</td>"
		+ "</tr>"

		$("#tb_prechanging_appendix tbody>tr:first").remove();	
		$("#tb_prechanging_appendix tbody").append(row);
	
}
/** ************ ฟังก์ชัน 2.3 กด Browse หา ภาคผนวกปลายทาง************* */
function choose_prepare_Appendix_To(e,id) {
	
	var Txn_id =$("#row_tb_manage_appendix_"+id).find('td:nth-child(1) ').val();
	
	
	var Appendix_code="";
	var Version_id="";
	$("#tb_changing_appendix tbody>tr").each(function() {
		 Appendix_code=$(this).find('td:nth-child(1) input').val();
		 Version_id=$(this).find('td:nth-child(3) input').val();
	})
	var rid=id
	
	var Channal_code = $('#channal_lookup'+rid+' :selected').val()==null?"ALL":$('#channal_lookup'+rid+' :selected').val();
	var Partner_code = $('#partner_lookup'+rid+' :selected').val()==null?"ALL":$('#partner_lookup'+rid+' :selected').val();
	var Cov_cat_id   = $('#cov_cat_lookup'+rid+' :selected').val()==null?"ALL":$('#cov_cat_lookup'+rid+' :selected').val();
	
	$.ajax({
        type: "POST",
        url : "UW_GetData_Servlet",
        data: {
        	method 	: "getAppendixVersionPrepareProduct",
        	Appendix_code : Appendix_code,
        	Version_id : Version_id,
        	Channal_code :Channal_code,
        	Partner_code : Partner_code,
        	Cov_cat_id :Cov_cat_id,
        	Txn_id,Txn_id
        },       
        success : function(response) {	
        	show_prepare_Appendix_To(response);
        	
        	
        	
        },
        error : function(response) {	
        	console.log("get getAppendixVersionPrepareProduct case error.")
        }
	});
	
	
}
/** ************ ฟังก์ชัน 2.3.1 กดเลือกภาคผนวกปลายทาง************* */
function show_prepare_Appendix_To(value) {
	$('#tb_product_related').DataTable({"paging": false,"bDestroy": 
		true,"bPaginate": false,"bFilter" : false,"bInfo" : 
			false,"ordering": false,"sScrollY": "350px"
				,"searching" :false,scrollCollapse: false });
	$("#tb_product_related_wrapper .dataTables_scrollHeadInner").css({"width":"100%"});
    $("#tb_product_related_wrapper .table").css({"width":"100%"});
	var Prd_code        			= "";
	var Prd_name	 	 			= "";
	var Prd_name_market		     	= "";
	var Eff_date		     		= "";
	var row = "";
	
	// $('#tb_product_related').DataTable().destroy();
	$("#tb_product_related tbody").find("tr").remove();
	var last_id=0;
	for(var i = 0; i < value.ViewAppendixProduct_Data.length; i++){
		Prd_code 		 = value.ViewAppendixProduct_Data[i].Prd_code;
		Prd_name		 = value.ViewAppendixProduct_Data[i].Prd_name;
		Prd_name_market	 = value.ViewAppendixProduct_Data[i].Prd_name_market;
		Eff_date		 = value.ViewAppendixProduct_Data[i].Eff_date;
		
		last_id++;
		var row = "<tr>"
		+ "<td style='width:5%'><input type='checkbox' onchange='enable_save_modal();' class='checker panel_head_big' />"+"</td>"
		+ "<td style='width:20%'><input type='hidden' value='"+Eff_date+"' />"+Prd_code+"</td>"
		+ "<td style='width:45%'>"+Prd_name+"</td>"
		+ "<td style='width:30%'>"+Prd_name_market+"</td>"
		row =row+ "</tr>";

        $("#tb_product_related tbody").append(row);
        
	}
	var count_product_row = $("#tb_product_related tbody>tr").length;
	$("#product_count").val(count_product_row).attr("disabled", true);

	var count_product_row = $("#tb_product_related tbody>tr").length;
	if(count_product_row==0){
		var row = "<tr>"
			+ "<td id='row_no_data_found' colspan='4'><p align='center'>" + "ไม่พบข้อมูล" + "</p></td>";
		$("#tb_product_related tbody").append(row);
		return;
	}else{
		$("#tb_product_related tbody>tr").each(function(i) {
			;
			var tempp = $(this).find('td:nth-child(1) ').attr("id")
			if($(this).find('td:nth-child(1) ').attr("id")=="row_no_data_found"){
				$(this).remove();	
			}
		});
	}
	
	
	

}
/** ************ ฟังก์ชัน 2.3.2 กดเลือกภาคผนวกปลายทาง************* */
function show_approved_Appendix_To(value) {
	
	var Prd_code        			= "";
	var Prd_name	 	 			= "";
	var Prd_name_market		     	= "";
	var Eff_date		     		= "";
	var row = "";
	
	// $('#tb_product_related').DataTable().destroy();
	$("#tb_product_related tbody").find("tr").remove();
	var last_id=0;
	;
	for(var i = 0; i < value.ViewAppendixProduct_Data.length; i++){
		Prd_code 		 = value.ViewAppendixProduct_Data[i].Prd_code;
		Prd_name		 = value.ViewAppendixProduct_Data[i].Prd_name;
		Prd_name_market	 = value.ViewAppendixProduct_Data[i].Prd_name_market;
		Eff_date		 = value.ViewAppendixProduct_Data[i].Eff_date;
		
		last_id++;
		var row = "<tr>"
		+ "<td style='width:5%'><input type='checkbox' class='checker panel_head_big' checked disabled />"+"</td>"
		+ "<td style='width:20%'><input type='hidden' value='"+Eff_date+"' />"+Prd_code+"</td>"
		+ "<td style='width:45%'>"+Prd_name+"</td>"
		+ "<td style='width:30%'>"+Prd_name_market+"</td>"
		row =row+ "</tr>";

        $("#tb_product_related tbody").append(row);
        
	}
	var count_product_row = $("#tb_product_related tbody>tr").length;
	$("#product_count").val(count_product_row).attr("disabled", true);
	$("#bt_modal_listProduct_save").attr("disabled",true)
	$("#bt_choose_Appendix_To").attr("disabled",true)
}

/** ************ ฟังก์ชัน 2.1 กดเลือกภาคผนวกต้นทาง************* */
function choose_Appendix_From() {
	$.ajax({
        type: "POST",
        url : "UW_GetData_Servlet",
        data: {
        	method 	: "getAppendixVersionFromProduct"
        },       
        success : function(response) {	
        	show_Appendix_From(response);
        },
        error : function(response) {	
        	console.log("get show_Appendix_From case error.")
        }
	});
}
/** ************ ฟังก์ชัน 2.1.1 กดเลือกภาคผนวกต้นทาง************* */
function show_Appendix_From(value) {
	
	var Appendix_code        = "";
	var Version_name	 	 = "";
	var Eff_date		     = "";
	var Exp_date		 	= "";
	var Is_Active		 	= "";
	var Is_Approv		 	= "";
	var Abb_name		 	= "";
	var row = "";
	
	$("#model_tb_checkListHeathFrom2").modal('show');
	
	$('#tb_model_appendix').DataTable().destroy();
	$("#tb_model_appendix tbody").find("tr").remove();
	var last_id=0;
	for(var i = 0; i < value.AppendixVersionProduct_Data.length; i++){
		Appendix_code 		 = value.AppendixVersionProduct_Data[i].Appendix_code;
		Appendix_name 		 = value.AppendixVersionProduct_Data[i].Appendix_name;
		Version_name		 = value.AppendixVersionProduct_Data[i].Version_name;
		Version_id			 = value.AppendixVersionProduct_Data[i].Version_id;
		Abb_name			 = value.AppendixVersionProduct_Data[i].Abb_name;
		Eff_date		 	 = value.AppendixVersionProduct_Data[i].Eff_date;
		Exp_date		 	 = value.AppendixVersionProduct_Data[i].Exp_date==null?"":value.AppendixVersionProduct_Data[i].Exp_date;
		
		
		last_id++;
		var row = "<tr>"

		+ "<td style='width:5%'><input type='radio' class='checker panel_head_big'  name='rd_appendix'/></td>"
		+ "<td style='width:10%'><input type='hidden' value='"+Appendix_code+"'/>"+Abb_name+"</td>"
		+ "<td style='width:45%'><p align='left'>" + Appendix_name + "</p></td>"
		+ "<td style='width:10%'><input type='hidden' value='"+Version_id+"'/>"+Version_name+"</td>"
		+ "<td style='width:15%'>"+Eff_date+"</td>"
		+ "<td style='width:15%'>"+Exp_date+"</td>"
		
		row =row+ "</tr>";

        $("#tb_model_appendix tbody").append(row);
        
	}
	
	$("#tb_model_appendix").DataTable({"paging": false,"bDestroy": 
		true,"bPaginate": false,"bFilter" : false,"bInfo" :
			false,"ordering": false,"sScrollY": "350px","searching" :false,scrollCollapse: true });
	$('.sorting_asc').removeClass('sorting_asc');
	$("#tb_model_appendix_wrapper .table").css({"width":"100%"});
	$("#tb_model_appendix_wrapper .dataTables_scrollHeadInner").css({"width":"98%"});
}






function bt_save_original_appendix() {
	
	var appendixValue = "";
	var appendixValue2 = "";
	var appendixName = "";
	var versionName = "";
	var appendixVersion = "";
	var appendixVersion2 = "";
	var Start_date = "";
	var End_date ="";
	
	var ii=0;
	
	$("#tb_model_appendix tbody>tr").each(function() {
		if ($(this).find('td:nth-child(1) input ').is(':checked')) {
			 appendixValue =$(this).find('td:nth-child(2)').text()
			 appendixValue2 =$(this).find('td:nth-child(2) input[type="hidden"]').val()
			 appendixName = $(this).find('td:nth-child(3)').text()
			 appendixVersion = $(this).find('td:nth-child(4) input[type="hidden"]').val()
			 appendixVersion2 = $(this).find('td:nth-child(4) input[type="hidden"]').val()
			 versionName = $(this).find('td:nth-child(4) ').text()
			 Start_date = $(this).find('td:nth-child(5)').text()
			 End_date = $(this).find('td:nth-child(6)').text()
		}
	});
	var row = "<tr>"
			+ "<td style='width:15%'><input type='hidden' value='"+appendixValue2+"'/>" + appendixValue+ "</td>"
			+ "<td style='width:45%'>" + appendixName + "</td>"
			+ "<td style='width:10%'><input type='hidden' value='"+appendixVersion+"'/>"+versionName+"</td>"
			
			+ "<td style='width:15%'>" + Start_date + "</td>"
			+ "<td style='width:15%'>" + End_date + "</td>"
			+ "</tr>"
	
	$("#tb_changing_appendix tbody>tr:first").remove();	
	$("#tb_changing_appendix tbody").append(row);
	
	


	var count_product_row = $("#tb_product_related tbody>tr").length;
	$("#product_count").val(count_product_row).attr("disabled", true);
	
	$("#tb_manage_appendix ").DataTable().destroy();
	$("#tb_manage_appendix tbody").find("tr").remove();
	bt_add_row_listAppendixTab1();
	
	
	
	$.ajax({
	    type: "POST",
	    url : "UW_GetData_Servlet",
	    data: {
	    	method 			: "getTxnAppendixProduct",
	    	Appendix_code	: appendixValue2,
	    	Version_id		: appendixVersion2
	    	
	    },       
	    success : function(response) {	
	    	
	    	loop_add_row_listAppendixTab1(response);  // GET LOOKUP FRIST AND
														// SHOW DATA
	    	
	    	$.ajax({
	    	    type: "POST",
	    	    url : "UW_GetData_Servlet",
	    	    data: {
	    	    	method 	: "getLookUpFilter",
	    	    	Appendix_code	: appendixValue2,
	    	    	Version_id	: appendixVersion
	    	    },       
	    	    success : function(response) {	
	    	    	
	    	    	setLookUpFilter(response);  // GET LOOKUP FRIST AND SHOW
												// DATA
	    	    	SetUserPermissionUW();
	    	    	
	    	    },
	    	    error : function(response) {	
	    	    	console.log("get lookup case error.")
	    	    }
	    	});
	    },
	    error : function(response) {	
	    	

	    	console.log(" getTxnAppendixProduct case error.")
	    	// console.log(JSON.stringify(data));
	    }
	    
	});
	
	
	$("#bt_add_row_listAppendix").attr("disabled", false);
	
	$("#bt_add_row_listAppendix")    		.attr("disabled", false);
	$("#bt_delete_row_listAppendix")    	.attr("disabled", true);
	$("#bt_req_row_listAppendix")     		.attr("disabled", true);
	$("#bt_his_row_listAppendix")     		.attr("disabled", true);
	$("#bt_approve_row_listAppendix")     	.attr("disabled", true);
	$("#bt_not_approve_row_listAppendix")   .attr("disabled", true);
	$("#bt_cancel_row_listAppendix")     	.attr("disabled", true);
	$("#bt_cancel_row_listAppendixU")     	.attr("disabled", true);
	$("#bt_save_tab2")     					.attr("disabled", true);
	
	
}
/* เพิ่ม row ในตาราง รายการภาคผนวก */
function loop_add_row_listAppendixTab1(value){
	
	// $("#tb_manage_appendix").DataTable().destroy();
	if(value.Txn_underwrite_Data.length>0){
		$("#tb_manage_appendix tbody").find("tr").remove();
	}else{
		$.datetimepicker.setLocale('th');
		var year_end = new Date().getFullYear();
		year_end = 9456 //- year_end 
		jQuery("#start_date"+int_id).datetimepicker({
		  timepicker:false,
		  format:'d/m/Y',
		  lang:'th',
		  todayButton: false,
		  yearEnd: year_end,
		  onSelectDate:function(dp,$input){
			  
			  var yearT = new Date(dp).getFullYear();
			  var yearTH = yearT+543;
			  
			  var fulldate = $input.val();
			  var fulldateTH = fulldate.replace(yearT,yearTH);
			  $input.val(fulldateTH);
		  }, 
		});
		
		jQuery("#start_date"+int_id).on("mouseenter mouseleave", function(e){
			var dateValue = $(this).val();
			if(dateValue != ""){					
				 
				var arr_date = dateValue.split("/");
				if(e.type=="mouseenter"){
					var yearT = arr_date[2]-543;
				}
				if(e.type=="mouseleave"){
					var yearT = parseInt(arr_date[2])+543;
				}
				
				dateValue = dateValue.replace(arr_date[2],yearT);
				$(this).val(dateValue);
			}
		});
		
		jQuery("#end_date"+int_id).datetimepicker({
			  timepicker:false,
			  format:'d/m/Y',
			  lang:'th',
			  todayButton: false,
			  onSelectDate:function(dp,$input){
				  
				  var yearT = new Date(dp).getFullYear();
				  var yearTH = yearT+543;
				  
				  var fulldate = $input.val();
				  var fulldateTH = fulldate.replace(yearT,yearTH);
				  $input.val(fulldateTH);
			  }, 
			});
			
			jQuery("#end_date"+int_id).on("mouseenter mouseleave", function(e){
				var dateValue = $(this).val();
				if(dateValue != ""){					
					 
					var arr_date = dateValue.split("/");
					if(e.type=="mouseenter"){
						var yearT = arr_date[2]-543;
					}
					if(e.type=="mouseleave"){
						var yearT = parseInt(arr_date[2])+543;
					}
					
					dateValue = dateValue.replace(arr_date[2],yearT);
					$(this).val(dateValue);
				}
			});
	
		
	}
	
	
	for(var i = 0; i < value.Txn_underwrite_Data.length; i++){
		;
		var chk_length = $("#tb_manage_appendix tbody>tr").length;
		var row = "<tr id='row_tb_manage_appendix_"+(chk_length+1)+"' role='row'>"+
		
		            "<td><input type='radio' class='checker panel_head_big' name='rd_manage_appendix' value='"+value.Txn_underwrite_Data[i].Txn_id+"'  onchange='enable_bt_save_tab2(this);'/></td>"+
					"<td><select id='channal_lookup"+(chk_length+1)+"' class='form-control'><option>All</option></select></td>"+
					"<td><select id='partner_lookup"+(chk_length+1)+"' class='form-control'><option>All</option></select></td>"+
					"<td><select id='cov_cat_lookup"+(chk_length+1)+"' class='form-control'><option>All</option></select></td>"+
					"<td><input type='hidden' value=''/>" +
					"<a class='active_grey'>" +
					"<span class='glyphicon glyphicon-circle-arrow-right' style='font-size: 25px' " +
					" data-toggle='modal' onclick='bt_pass_para_appendix(this);'>" +
					"</span></a></td>"+
					"<td><input type='hidden' value=''/><span></span></td>"+
					"<td><input type='hidden' value=''/><span></span></td>"+
					"<td><input type='text'  id='start_date"+(chk_length+1)+"' onclick='start_dateF_para(this)' " +
							"class='form-control' placeholder='dd/mm/yyyy'/></td>"+
					"<td><input type='text'  id='end_date"  +(chk_length+1)+"' onclick='to_dateF_para(this)'" +
							"class='form-control' placeholder='dd/mm/yyyy'/></td>"+
					//"<td></td>"+
					"<td><input type='hidden' value=''/><span></span></td>"+
					"<td></td>"+
				"</tr>"
		$("#tb_manage_appendix tbody").append(row);
		//$("#start_date"+(chk_length+1)).datetimepicker({timepicker : false, format : 'd/m/Y', yearOffset:543})
		//$("#end_date"+(chk_length+1)).datetimepicker({timepicker : false, format : 'd/m/Y', yearOffset:543})
		;
		$.datetimepicker.setLocale('th');
		var year_end = new Date().getFullYear();
		year_end = 9456// - year_end 

		jQuery("#start_date"+(chk_length+1)).datetimepicker({
		  timepicker:false,
		  format:'d/m/Y',
		  lang:'th',
		  todayButton: false,
		  yearEnd: year_end,
		  onSelectDate:function(dp,$input){
			  var yearT = new Date(dp).getFullYear();
			  var yearTH = yearT+543;
			  
			  var fulldate = $input.val();
			  var fulldateTH = fulldate.replace(yearT,yearTH);
			  $input.val(fulldateTH);
		  }, 
		});

		jQuery("#start_date"+(chk_length+1)).on("mouseenter mouseleave", function(e){
			var dateValue = $(this).val();
			if(dateValue != ""){						
				var arr_date = dateValue.split("/");
				if(e.type=="mouseenter"){
					var yearT = arr_date[2]-543;
				}
				if(e.type=="mouseleave"){
					var yearT = parseInt(arr_date[2])+543;
				}
				
				dateValue = dateValue.replace(arr_date[2],yearT);
				$(this).val(dateValue);
			}
		});
	
		jQuery("#end_date"+(chk_length+1)).datetimepicker({
			  timepicker:false,
			  format:'d/m/Y',
			  lang:'th',
			  todayButton: false,
			  yearEnd: year_end,
			  onSelectDate:function(dp,$input){
				  var yearT = new Date(dp).getFullYear();
				  var yearTH = yearT+543;
				  
				  var fulldate = $input.val();
				  var fulldateTH = fulldate.replace(yearT,yearTH);
				  $input.val(fulldateTH);
			  }, 
			});

			jQuery("#end_date"+(chk_length+1)).on("mouseenter mouseleave", function(e){
				var dateValue = $(this).val();
				if(dateValue != ""){						
					var arr_date = dateValue.split("/");
					if(e.type=="mouseenter"){
						var yearT = arr_date[2]-543;
					}
					if(e.type=="mouseleave"){
						var yearT = parseInt(arr_date[2])+543;
					}
					
					dateValue = dateValue.replace(arr_date[2],yearT);
					$(this).val(dateValue);
				}
			});
	}
	
	var chk_length = $("#tb_manage_appendix tbody>tr").length;
	var get_concat_product=false;
	for(var i = 0; i < value.Txn_underwrite_Data.length; i++){
		;
		var list_product_data = [];
		var product_count=0;
		var Appendix_code_new;
		var Abb_name_new;
		var Version_name;
		var vid=0;
		var id=i+1;
		var Eff_date;
		var Eff_date_new;
		var Exp_date;
		var status;
		
		if(!get_concat_product){
			for(var ii = 0; ii < value.Txn_appendix_product_Data.length; ii++){
				if(value.Txn_underwrite_Data[i].Txn_id==value.Txn_appendix_product_Data[ii].Txn_id){
					product_count++;
					list_product_data.push(value.Txn_appendix_product_Data[ii].Prd_code);
					list_product_data.push(value.Txn_appendix_product_Data[ii].Eff_date);
					Appendix_code_new	=value.Txn_appendix_product_Data[ii].Appendix_code_new;
					Version_name		=value.Txn_appendix_product_Data[ii].Version_name;
					vid					=value.Txn_appendix_product_Data[ii].Appendix_version_new;
					Eff_date			=value.Txn_appendix_product_Data[ii].Eff_date;
					Exp_date			=value.Txn_appendix_product_Data[ii].Exp_date;
					Abb_name_new		=value.Txn_appendix_product_Data[ii].Abb_name_new;
					Eff_date_new		=value.Txn_appendix_product_Data[ii].Eff_date_new;
					get_concat_product=true;
				}
				
			}
		}
		
		status				=value.Txn_underwrite_Data[i].Txn_status;
		if(status=="อนุมัติแล้ว"||status=="รออนุมัติ"||status=="ขอแก้ไข"){
			$("#row_tb_manage_appendix_"+id).find('td:nth-child(5) input').val(list_product_data);
			$("#row_tb_manage_appendix_"+id).find('td:nth-child(1) input').attr("disabled",false);
			$("#row_tb_manage_appendix_"+id).find('td:nth-child(2) select').attr("disabled",true);
			$("#row_tb_manage_appendix_"+id).find('td:nth-child(3) select').attr("disabled",true);
			$("#row_tb_manage_appendix_"+id).find('td:nth-child(4) select').attr("disabled",true);
			$("#row_tb_manage_appendix_"+id).find('td:nth-child(5) a').attr("disabled",true);
			$("#row_tb_manage_appendix_"+id).find('td:nth-child(8) input').attr("disabled",true).addClass("disabledAll_NotFade");
			$("#row_tb_manage_appendix_"+id).find('td:nth-child(9) input').attr("disabled",true).addClass("disabledAll_NotFade");
			$("#arr_product").val(list_product_data)
			
			
			// $("#row_tb_manage_appendix_"+id).find('td:nth-child(6)').text(Appendix_code_new)
			$("#row_tb_manage_appendix_"+id).find('td:nth-child(6) input[type="hidden"]').val(Appendix_code_new)
			$("#row_tb_manage_appendix_"+id).find('td:nth-child(6) span').text(Abb_name_new)
			
			
			$("#row_tb_manage_appendix_"+id).find('td:nth-child(7) input[type="hidden"]').val(vid)
			$("#row_tb_manage_appendix_"+id).find('td:nth-child(7) span').text(Version_name)
			$("#row_tb_manage_appendix_"+id).find('td:nth-child(8) input').val(Eff_date)
			$("#row_tb_manage_appendix_"+id).find('td:nth-child(9) input').val(Exp_date)
			// $("#"+id).find('td:nth-child(7) ').text(appendixVersion)
			$("#row_tb_manage_appendix_"+id).find('td:nth-child(10) input[type="hidden"]').val(Eff_date_new)
			$("#row_tb_manage_appendix_"+id).find('td:nth-child(10) span').text(product_count)
			$("#row_tb_manage_appendix_"+id).find('td:nth-child(11)').text(status)
		}else{
			$("#row_tb_manage_appendix_"+id).find('td:nth-child(5) input').val(list_product_data);
			$("#arr_product").val(list_product_data)
			
			
			// $("#row_tb_manage_appendix_"+id).find('td:nth-child(6)').text(Appendix_code_new)
			$("#row_tb_manage_appendix_"+id).find('td:nth-child(6) input[type="hidden"]').val(Appendix_code_new)
			$("#row_tb_manage_appendix_"+id).find('td:nth-child(6) span').text(Abb_name_new)
			
			
			$("#row_tb_manage_appendix_"+id).find('td:nth-child(7) input[type="hidden"]').val(vid)
			$("#row_tb_manage_appendix_"+id).find('td:nth-child(7) span').text(Version_name)
			$("#row_tb_manage_appendix_"+id).find('td:nth-child(8) input').val(Eff_date)
			$("#row_tb_manage_appendix_"+id).find('td:nth-child(9) input').val(Exp_date)
			// $("#"+id).find('td:nth-child(7) ').text(appendixVersion)
			$("#row_tb_manage_appendix_"+id).find('td:nth-child(10) input[type="hidden"]').val(Eff_date_new)
			$("#row_tb_manage_appendix_"+id).find('td:nth-child(10) span').text(product_count)
			$("#row_tb_manage_appendix_"+id).find('td:nth-child(11)').text(status)
		}
		
		get_concat_product=false;
	}
	
}





/**
 * ************ ฟังก์ชัน 2.2 หลังจากกดเลือกภาคผนวก แล้ว ต้องกรอง look
 * up*************
 */
function setLookUpFilter(value){	
	
	var last_id_length = $("#tb_manage_appendix tbody>tr").length;
	var row_lookup  = "";	
	
	var arr_same = [];
	var row_PDSale="";
	
	for(var last_id=1 ; last_id<=last_id_length;last_id++){
		
	
	// SET SALE CHANNAL
	$("#channal_lookup"+last_id).find('option').remove().end();
	row_PDSale = "<option data-id='"+"All"+"' value='"+"ALL"+"'>"+"All"+"</option>";	
	$("#channal_lookup"+last_id).append(row_PDSale); 
	for(var i = 0; i < value.Lookup_channal_Data.length; i++){
		var obj = value.Lookup_channal_Data[i];
		var checksame=false;
		for (m in arr_same) {
			if(arr_same[m]==null?false:arr_same[m]==obj.value){
				checksame=true;
			}
		}
		if(!checksame){
			 row_PDSale = "<option data-id='"+obj.value+"' value='"+obj.value+"'>"+obj.text+"</option>";	
			 $("#channal_lookup"+last_id).append(row_PDSale);
		}
		arr_same.push(obj.value);
	}
	
	$("#channal_lookup"+last_id).val(row_PDSale);
	
	
	// SET Partner
	$("#partner_lookup"+last_id).find('option').remove().end();
		row_PDSale = "<option data-id='"+"All"+"' value='"+"ALL"+"'>"+"All"+"</option>";	
	$("#partner_lookup"+last_id).append(row_PDSale); 
	var arr_same = [];
	row_PDSale="";
	for(var i = 0; i < value.Lookup_sale_Data.length; i++){
		var obj = value.Lookup_sale_Data[i];
		var checksame=false;
		for (m in arr_same) {
			if(arr_same[m]==null?false:arr_same[m]==obj.pass){
				checksame=true;
			}
		}
		if(!checksame){
			 row_PDSale = "<option data-id='"+obj.value+"' value='"+obj.pass+"'>"+obj.text+"</option>";	
			 $("#partner_lookup"+last_id).append(row_PDSale);
		}
		arr_same.push(obj.pass);
	}
	
	$("#partner_lookup"+last_id).val(row_PDSale);
	
	
	// SET Cov Cat
	var arr_same = [];
	$("#cov_cat_lookup"+last_id).find('option').remove().end();
		row_PDSale = "<option data-id='"+"All"+"' value='"+"ALL"+"'>"+"All"+"</option>";	
	$("#cov_cat_lookup"+last_id).append(row_PDSale); 
		row_PDSale="";
	for(var i = 0; i < value.Lookup_cov_cat_Data.length; i++){
		var obj = value.Lookup_cov_cat_Data[i];
		var checksame=false;
		for (m in arr_same) {
			if(arr_same[m]==null?false:arr_same[m]==obj.value){
				checksame=true;
			}
		}
		if(!checksame){
			 row_PDSale = "<option data-id='"+obj.value+"' value='"+obj.value+"'>"+obj.text+"</option>";	
			 $("#cov_cat_lookup"+last_id).append(row_PDSale);
		}
		arr_same.push(obj.value);
	}
	
	$("#cov_cat_lookup"+last_id).val(row_PDSale);
	
	;
	// SET DEFAULT ALL TO LOOKUP
	 $("#channal_lookup"+last_id+" option[value="+"ALL"+"]").attr('selected', true);
	 $("#partner_lookup"+last_id+" option[value="+"ALL"+"]").attr('selected', true);
	 $("#cov_cat_lookup"+last_id+" option[value="+"ALL"+"]").attr('selected', true);
	}

		
}
/**
 * ************ ฟังก์ชัน 2.2 หลังจากกดเลือกภาคผนวก แล้ว ต้องกรอง look
 * up*************
 */
function setLookUpFilterForAddRow(value){	
	
	var last_id = $("#tb_manage_appendix tbody>tr").length;
	var row_lookup  = "";	
	
	var arr_same = [];
	var row_PDSale="";
	
		
	
	// SET SALE CHANNAL
	$("#channal_lookup"+last_id).find('option').remove().end();
	row_PDSale = "<option data-id='"+"All"+"' value='"+"ALL"+"'>"+"All"+"</option>";	
	$("#channal_lookup"+last_id).append(row_PDSale); 
	for(var i = 0; i < value.Lookup_channal_Data.length; i++){
		var obj = value.Lookup_channal_Data[i];
		var checksame=false;
		for (m in arr_same) {
			if(arr_same[m]==null?false:arr_same[m]==obj.value){
				checksame=true;
			}
		}
		if(!checksame){
			 row_PDSale = "<option data-id='"+obj.value+"' value='"+obj.value+"'>"+obj.text+"</option>";	
			 $("#channal_lookup"+last_id).append(row_PDSale);
		}
		arr_same.push(obj.value);
	}
	
	$("#channal_lookup"+last_id).val(row_PDSale);
	
	
	// SET Partner
	$("#partner_lookup"+last_id).find('option').remove().end();
	row_PDSale = "<option data-id='"+"All"+"' value='"+"ALL"+"'>"+"All"+"</option>";	
	$("#partner_lookup"+last_id).append(row_PDSale); 
	var arr_same = [];
	row_PDSale="";
	for(var i = 0; i < value.Lookup_sale_Data.length; i++){
		var obj = value.Lookup_sale_Data[i];
		var checksame=false;
		for (m in arr_same) {
			if(arr_same[m]==null?false:arr_same[m]==obj.pass){
				checksame=true;
			}
		}
		if(!checksame){
			 row_PDSale = "<option data-id='"+obj.value+"' value='"+obj.pass+"'>"+obj.text+"</option>";	
			 $("#partner_lookup"+last_id).append(row_PDSale);
		}
		arr_same.push(obj.pass);
	}
	
	$("#partner_lookup"+last_id).val(row_PDSale);
	
	
	// SET Cov Cat
	var arr_same = [];
	$("#cov_cat_lookup"+last_id).find('option').remove().end();
	row_PDSale = "<option data-id='"+"All"+"' value='"+"ALL"+"'>"+"All"+"</option>";	
	$("#cov_cat_lookup"+last_id).append(row_PDSale); 
	row_PDSale="";
	for(var i = 0; i < value.Lookup_cov_cat_Data.length; i++){
		var obj = value.Lookup_cov_cat_Data[i];
		var checksame=false;
		for (m in arr_same) {
			if(arr_same[m]==null?false:arr_same[m]==obj.value){
				checksame=true;
			}
		}
		if(!checksame){
			 row_PDSale = "<option data-id='"+obj.value+"' value='"+obj.value+"'>"+obj.text+"</option>";	
			 $("#cov_cat_lookup"+last_id).append(row_PDSale);
		}
		arr_same.push(obj.value);
	}
	
	$("#cov_cat_lookup"+last_id).val(row_PDSale);
	
	
	// SET DEFAULT ALL TO LOOKUP
	 $("#channal_lookup"+last_id+" option[value="+"ALL"+"]").attr('selected', true);
	 $("#partner_lookup"+last_id+" option[value="+"ALL"+"]").attr('selected', true);
	 $("#cov_cat_lookup"+last_id+" option[value="+"ALL"+"]").attr('selected', true);
	
	 
	 $("#channal_lookup"+last_id)
	 .attr("onchange","setTooltipForSelect(this);");
	 $("#partner_lookup"+last_id)
	 .attr("onchange","setTooltipForSelect(this);");
	 $("#cov_cat_lookup"+last_id)
	 .attr("onchange","setTooltipForSelect(this);");
		
}
function setTooltipForSelect(e){
	
	;
	var id = $(e).parents('tr').attr('id');
	var t1 =	 $("#"+id).find('td:nth-child(2) :selected').text();
	var t2 =	 $("#"+id).find('td:nth-child(3) :selected').text();
	var t3 =	 $("#"+id).find('td:nth-child(4) :selected').text();
	 $("#"+id).find('td:nth-child(2) select').attr("title",t1);
	 $("#"+id).find('td:nth-child(3) select').attr("title",t2);
	 $("#"+id).find('td:nth-child(4) select').attr("title",t3);
	 

}
function setLookUpFilterForEachRow(value,row_id,last_id){	
	
	//var last_id = $("#tb_manage_appendix tbody>tr").length;
	var row_lookup  = "";	
	
	var arr_same 	= [];
	var row_PDSale	="";
	var chan_temp	="";
	var partner_temp="";
	var cov_temp	="";
	var chan_temptr	="";
	var partner_tempstr="";
	var cov_tempstr	="";	
	
	// SET SALE CHANNAL
	$("#channal_lookup"+last_id).find('option').remove().end();
		row_PDSale = "<option data-id='"+"All"+"' value='"+"ALL"+"'>"+"All"+"</option>";	
	$("#channal_lookup"+last_id).append(row_PDSale); 
	
	for(var i = 0; i < value.Lookup_channal_Data.length; i++){
		var obj = value.Lookup_channal_Data[i];
		var checksame=false;
		for (m in arr_same) {
			if(arr_same[m]==null?false:arr_same[m]==obj.value){
				checksame=true;
			}
		}
		if(value.Lookup_channal_Data.length==1){
			chan_temp=obj.value;
			chan_tempstr=obj.text
		}else{
			chan_temp="ALL"
			chan_tempstr="ALL"
		}
		if(!checksame){
			 row_PDSale = "<option data-id='"+obj.value+"' value='"+obj.value+"'>"+obj.text+"</option>";	
			 $("#channal_lookup"+last_id).append(row_PDSale);
		}
		arr_same.push(obj.value);
		
	}
	
	$("#channal_lookup"+last_id).val(row_PDSale);
	
	
	// SET Partner
	$("#partner_lookup"+last_id).find('option').remove().end();
		row_PDSale = "<option data-id='"+"All"+"' value='"+"ALL"+"'>"+"All"+"</option>";	
	$("#partner_lookup"+last_id).append(row_PDSale); 
	var arr_same = [];
	row_PDSale="";
	for(var i = 0; i < value.Lookup_sale_Data.length; i++){
		var obj = value.Lookup_sale_Data[i];
		var checksame=false;
		for (m in arr_same) {
			if(arr_same[m]==null?false:arr_same[m]==obj.pass){
				checksame=true;
			}
		}
		if(value.Lookup_sale_Data.length==1){
			partner_temp=obj.pass;
			partner_tempstr=obj.text
		}else{
			partner_temp="ALL"
			partner_tempstr="ALL"
		}
		if(!checksame){
			 row_PDSale = "<option data-id='"+obj.value+"' value='"+obj.pass+"'>"+obj.text+"</option>";	
			 $("#partner_lookup"+last_id).append(row_PDSale);
		}
		arr_same.push(obj.pass);
	}
	
	$("#partner_lookup"+last_id).val(row_PDSale);
	
	
	// SET Cov Cat
	var arr_same = [];
	$("#cov_cat_lookup"+last_id).find('option').remove().end();
		row_PDSale = "<option data-id='"+"All"+"' value='"+"ALL"+"'>"+"All"+"</option>";	
	$("#cov_cat_lookup"+last_id).append(row_PDSale); 
	row_PDSale="";
	for(var i = 0; i < value.Lookup_cov_cat_Data.length; i++){
		var obj = value.Lookup_cov_cat_Data[i];
		var checksame=false;
		for (m in arr_same) {
			if(arr_same[m]==null?false:arr_same[m]==obj.value){
				checksame=true;
			}
		}
		if(value.Lookup_cov_cat_Data.length==1){
			cov_temp=obj.value;
			cov_tempstr=obj.text
		}else{
			cov_temp="ALL"
			cov_tempstr="ALL"
		}
		if(!checksame){
			 row_PDSale = "<option data-id='"+obj.value+"' value='"+obj.value+"'>"+obj.text+"</option>";	
			 $("#cov_cat_lookup"+last_id).append(row_PDSale);
		}
		arr_same.push(obj.value);
	}
	
	$("#cov_cat_lookup"+last_id).val(row_PDSale);
	
	
	 // SET DEFAULT ALL TO LOOKUP
	 $("#channal_lookup"+last_id+" option[value="+chan_temp+"]")	.attr('selected', true);
	 $("#partner_lookup"+last_id+" option[value="+partner_temp+"]")	.attr('selected', true);
	 $("#cov_cat_lookup"+last_id+" option[value="+cov_temp+"]")		.attr('selected', true);
	 
	 $("#row_tb_manage_appendix_"+last_id).find('td:nth-child(2) select').attr("title",chan_tempstr);
	 $("#row_tb_manage_appendix_"+last_id).find('td:nth-child(3) select').attr("title",partner_tempstr);
	 $("#row_tb_manage_appendix_"+last_id).find('td:nth-child(4) select').attr("title",cov_tempstr);
		
	
		
}

function bt_save_original_appendix_V02() {
	
	var appendixValue = "";
	var appendixValue2 = "";
	var appendixName = "";
	var versionName = "";
	var appendixVersion = "";
	var appendixVersion2 = "";
	var Start_date = "";
	var End_date ="";
	
	var ii=0;
	
	$("#tb_model_appendix tbody>tr").each(function() {
		if ($(this).find('td:nth-child(1) input ').is(':checked')) {
			 appendixValue =$(this).find('td:nth-child(2)').text()
			 appendixValue2 =$(this).find('td:nth-child(2) input[type="hidden"]').val()
			 appendixName = $(this).find('td:nth-child(3)').text()
			 appendixVersion = $(this).find('td:nth-child(4) input[type="hidden"]').val()
			 appendixVersion2 = $(this).find('td:nth-child(4) input[type="hidden"]').val()
			 versionName = $(this).find('td:nth-child(4) ').text()
			 Start_date = $(this).find('td:nth-child(5)').text()
			 End_date = $(this).find('td:nth-child(6)').text()
		}
	});
	var row = "<tr>"
			+ "<td style='width:15%'><input type='hidden' value='"+appendixValue2+"'/>" + appendixValue+ "</td>"
			+ "<td style='width:45%'>" + appendixName + "</td>"
			+ "<td style='width:10%'><input type='hidden' value='"+appendixVersion+"'/>"+versionName+"</td>"
			
			+ "<td style='width:15%'>" + Start_date + "</td>"
			+ "<td style='width:15%'>" + End_date + "</td>"
			+ "</tr>"
	
	$("#tb_changing_appendix tbody>tr:first").remove();	
	$("#tb_changing_appendix tbody").append(row);
	
	


	var count_product_row = $("#tb_product_related tbody>tr").length;
	$("#product_count").val(count_product_row).attr("disabled", true);
	
	$("#tb_manage_appendix ").DataTable().destroy();
	$("#tb_manage_appendix tbody").find("tr").remove();
	//bt_add_row_listAppendixTab1();
	
	
	
	$.ajax({
	    type: "POST",
	    url : "UW_GetData_Servlet",
	    async : false,
	    data: {
	    	method 			: "getTxnAppendixProduct",
	    	Appendix_code	: appendixValue2,
	    	Version_id		: appendixVersion2,
	    	
	    	
	    },       
	    success : function(response) {	
	    	
	    	loop_add_row_listAppendixTab1_V02(response);  // GET LOOKUP FRIST AND
			
	    },
	    error : function(response) {	
	    	
	    	
	    	console.log(" getTxnAppendixProduct case error.")
	    	// console.log(JSON.stringify(data));
	    }
	    
	});
	
	SetUserPermissionUW();
	$("#bt_add_row_listAppendix").attr("disabled", false);
	
	$("#bt_add_row_listAppendix")    		.attr("disabled", false);
	$("#bt_delete_row_listAppendix")    	.attr("disabled", true);
	$("#bt_req_row_listAppendix")     		.attr("disabled", true);
	$("#bt_his_row_listAppendix")     		.attr("disabled", true);
	$("#bt_approve_row_listAppendix")     	.attr("disabled", true);
	$("#bt_not_approve_row_listAppendix")   .attr("disabled", true);
	$("#bt_cancel_row_listAppendix")     	.attr("disabled", true);
	$("#bt_cancel_row_listAppendixU")     	.attr("disabled", true);
	$("#bt_save_tab2")     					.attr("disabled", true);
	
	
}

/* เพิ่ม row ในตาราง รายการภาคผนวก */
function loop_add_row_listAppendixTab1_V02(value){
	
	
	var appendixValue = "";
	var appendixValue2 = "";
	var appendixName = "";
	var versionName = "";
	var appendixVersion = "";
	var appendixVersion2 = "";
	var Start_date = "";
	var End_date ="";
	
	var ii=0;
	
	$("#tb_changing_appendix tbody>tr").each(function() {
		
			 appendixValue =$(this).find('td:nth-child(1)').text()
			 appendixValue2 =$(this).find('td:nth-child(1) input[type="hidden"]').val()
			 appendixName = $(this).find('td:nth-child(3) input').val()
			 appendixVersion = $(this).find('td:nth-child(4) input[type="hidden"]').val()
			 appendixVersion2 = $(this).find('td:nth-child(4) input[type="hidden"]').val()
			 versionName = $(this).find('td:nth-child(4) ').text()
			 Start_date = $(this).find('td:nth-child(5)').text()
			 End_date = $(this).find('td:nth-child(6)').text()
		
	});
	
	
	
	// $("#tb_manage_appendix").DataTable().destroy();
	if(value.Txn_underwrite_Data.length>0){
		$("#tb_manage_appendix tbody").find("tr").remove();
	}else{
		bt_add_row_listAppendixTab1();
		$.datetimepicker.setLocale('th');
		var year_end = new Date().getFullYear();
		year_end = 9456 //- year_end 

		jQuery("#start_date1,#end_date1").datetimepicker({
		  timepicker:false,
		  format:'d/m/Y',
		  lang:'th',
		  todayButton: false,
		  yearEnd: year_end,
		  onSelectDate:function(dp,$input){
			  var yearT = new Date(dp).getFullYear();
			  var yearTH = yearT+543;
			  
			  var fulldate = $input.val();
			  var fulldateTH = fulldate.replace(yearT,yearTH);
			  $input.val(fulldateTH);
		  }, 
		});

		jQuery("#start_date1,#end_date1").on("mouseenter mouseleave", function(e){
			var dateValue = $(this).val();
			if(dateValue != ""){						
				var arr_date = dateValue.split("/");
				if(e.type=="mouseenter"){
					var yearT = arr_date[2]-543;
				}
				if(e.type=="mouseleave"){
					var yearT = parseInt(arr_date[2])+543;
				}
				
				dateValue = dateValue.replace(arr_date[2],yearT);
				$(this).val(dateValue);
			}
		});
	
		
	}
	
	
	for(var i = 0; i < value.Txn_underwrite_Data.length; i++){
		;
		var chk_length = $("#tb_manage_appendix tbody>tr").length;
		var row = "<tr id='row_tb_manage_appendix_"+(chk_length+1)+"' role='row'>"+
		
		            "<td><input type='radio' class='checker panel_head_big' name='rd_manage_appendix' value='"+value.Txn_underwrite_Data[i].Txn_id+"'  onchange='enable_bt_save_tab2(this);'/></td>"+
					"<td><select id='channal_lookup"+(chk_length+1)+"' class='form-control' data-toggle='tooltip' title='' ><option>All</option></select></td>"+
					"<td><select id='partner_lookup"+(chk_length+1)+"' class='form-control' data-toggle='tooltip' title='' ><option>All</option></select></td>"+
					"<td><select id='cov_cat_lookup"+(chk_length+1)+"' class='form-control' data-toggle='tooltip' title='' ><option>All</option></select></td>"+
					"<td><input type='hidden' value=''/>" +
					"<a class='active_grey'>" +
					"<span class='glyphicon glyphicon-circle-arrow-right' style='font-size: 25px' " +
					" data-toggle='modal' onclick='bt_pass_para_appendix(this);'>" +
					"</span></a></td>"+
					"<td><input type='hidden' value=''/><span></span></td>"+
					"<td><input type='hidden' value=''/><span></span></td>"+
					"<td><input type='text'  id='start_date"+(chk_length+1)+"' onclick='start_dateF_para(this)' " +
							"class='form-control' placeholder='dd/mm/yyyy'/></td>"+
					"<td><input type='text'  id='end_date"  +(chk_length+1)+"' onclick='to_dateF_para(this)'" +
							"class='form-control' placeholder='dd/mm/yyyy'/></td>"+
					//"<td></td>"+
					"<td><input type='hidden' value=''/><span></span></td>"+
					"<td></td>"+
				"</tr>"
		$("#tb_manage_appendix tbody").append(row);
		//$("#start_date"+(chk_length+1)).datetimepicker({timepicker : false, format : 'd/m/Y', yearOffset:543})
		//$("#end_date"+(chk_length+1)).datetimepicker({timepicker : false, format : 'd/m/Y', yearOffset:543})
		;
		$.datetimepicker.setLocale('th');
		var year_end = new Date().getFullYear();
		year_end = 9456// - year_end 

		jQuery("#start_date"+(chk_length+1)).datetimepicker({
		  timepicker:false,
		  format:'d/m/Y',
		  lang:'th',
		  todayButton: false,
		  yearEnd: year_end,
		  onSelectDate:function(dp,$input){
			  var yearT = new Date(dp).getFullYear();
			  var yearTH = yearT+543;
			  
			  var fulldate = $input.val();
			  var fulldateTH = fulldate.replace(yearT,yearTH);
			  $input.val(fulldateTH);
		  }, 
		});

		jQuery("#start_date"+(chk_length+1)).on("mouseenter mouseleave", function(e){
			var dateValue = $(this).val();
			if(dateValue != ""){						
				var arr_date = dateValue.split("/");
				if(e.type=="mouseenter"){
					var yearT = arr_date[2]-543;
				}
				if(e.type=="mouseleave"){
					var yearT = parseInt(arr_date[2])+543;
				}
				
				dateValue = dateValue.replace(arr_date[2],yearT);
				$(this).val(dateValue);
			}
		});
	
		jQuery("#end_date"+(chk_length+1)).datetimepicker({
			  timepicker:false,
			  format:'d/m/Y',
			  lang:'th',
			  todayButton: false,
			  yearEnd: year_end,
			  onSelectDate:function(dp,$input){
				  var yearT = new Date(dp).getFullYear();
				  var yearTH = yearT+543;
				  
				  var fulldate = $input.val();
				  var fulldateTH = fulldate.replace(yearT,yearTH);
				  $input.val(fulldateTH);
			  }, 
			});

			jQuery("#end_date"+(chk_length+1)).on("mouseenter mouseleave", function(e){
				var dateValue = $(this).val();
				if(dateValue != ""){						
					var arr_date = dateValue.split("/");
					if(e.type=="mouseenter"){
						var yearT = arr_date[2]-543;
					}
					if(e.type=="mouseleave"){
						var yearT = parseInt(arr_date[2])+543;
					}
					
					dateValue = dateValue.replace(arr_date[2],yearT);
					$(this).val(dateValue);
				}
			});
			//alert(value.Txn_underwrite_Data[i].Txn_id)
			var temp_id="row_tb_manage_appendix_"+(chk_length+1)
			var idd=(chk_length+1)
			var txn =value.Txn_underwrite_Data[i].Txn_id
			
			$.ajax({
	    	    type: "POST",
	    	    url : "UW_GetData_Servlet",
	    	    async : false,
	    	    data: {
	    	    	method 			: "getLookUpFilterTxn",
	    	    	Appendix_code	: appendixValue2,
	    	    	Version_id		: appendixName,
	    	    	Txn_id 			: txn
	    	    },       
	    	    success : function(response) {	
	    	    	
	    	    	setLookUpFilterForEachRow(response,temp_id,idd);  // GET LOOKUP FRIST AND SHOW
	
	    	    },
	    	    error : function(response) {	
	    	    	//
	    	    	console.log("get lookup case error.")
	    	    }
	    	});
			
			
			
	}
	
	var chk_length = $("#tb_manage_appendix tbody>tr").length;
	var get_concat_product=false;
	for(var i = 0; i < value.Txn_underwrite_Data.length; i++){
		;
		var list_product_data = [];
		var product_count=0;
		var Appendix_code_new;
		var Abb_name_new;
		var Version_name;
		var vid=0;
		var id=i+1;
		var Eff_date;
		var Eff_date_new;
		var Exp_date;
		var status;
		
		if(!get_concat_product){
			for(var ii = 0; ii < value.Txn_appendix_product_Data.length; ii++){
				if(value.Txn_underwrite_Data[i].Txn_id==value.Txn_appendix_product_Data[ii].Txn_id){
					product_count++;
					list_product_data.push(value.Txn_appendix_product_Data[ii].Prd_code);
					list_product_data.push(value.Txn_appendix_product_Data[ii].Eff_date);
					Appendix_code_new	=value.Txn_appendix_product_Data[ii].Appendix_code_new;
					Version_name		=value.Txn_appendix_product_Data[ii].Version_name;
					vid					=value.Txn_appendix_product_Data[ii].Appendix_version_new;
					Eff_date			=value.Txn_appendix_product_Data[ii].Eff_date;
					Exp_date			=value.Txn_appendix_product_Data[ii].Exp_date;
					Abb_name_new		=value.Txn_appendix_product_Data[ii].Abb_name_new;
					Eff_date_new		=value.Txn_appendix_product_Data[ii].Eff_date_new;
					get_concat_product=true;
				}
				
			}
		}
		
		status				=value.Txn_underwrite_Data[i].Txn_status;
		if(status=="อนุมัติแล้ว"||status=="รออนุมัติ"||status=="ขอแก้ไข"){
			$("#row_tb_manage_appendix_"+id).find('td:nth-child(5) input').val(list_product_data);
			$("#row_tb_manage_appendix_"+id).find('td:nth-child(1) input').attr("disabled",false);
			$("#row_tb_manage_appendix_"+id).find('td:nth-child(2) select').attr("disabled",true);
			$("#row_tb_manage_appendix_"+id).find('td:nth-child(3) select').attr("disabled",true);
			$("#row_tb_manage_appendix_"+id).find('td:nth-child(4) select').attr("disabled",true);
			$("#row_tb_manage_appendix_"+id).find('td:nth-child(5) a').attr("disabled",true);
			$("#row_tb_manage_appendix_"+id).find('td:nth-child(8) input').attr("disabled",true).addClass("disabledAll_NotFade");
			$("#row_tb_manage_appendix_"+id).find('td:nth-child(9) input').attr("disabled",true).addClass("disabledAll_NotFade");
			$("#arr_product").val(list_product_data)
			
			
			// $("#row_tb_manage_appendix_"+id).find('td:nth-child(6)').text(Appendix_code_new)
			$("#row_tb_manage_appendix_"+id).find('td:nth-child(6) input[type="hidden"]').val(Appendix_code_new)
			$("#row_tb_manage_appendix_"+id).find('td:nth-child(6) span').text(Abb_name_new)
			
			
			$("#row_tb_manage_appendix_"+id).find('td:nth-child(7) input[type="hidden"]').val(vid)
			$("#row_tb_manage_appendix_"+id).find('td:nth-child(7) span').text(Version_name)
			$("#row_tb_manage_appendix_"+id).find('td:nth-child(8) input').val(Eff_date)
			$("#row_tb_manage_appendix_"+id).find('td:nth-child(9) input').val(Exp_date)
			// $("#"+id).find('td:nth-child(7) ').text(appendixVersion)
			$("#row_tb_manage_appendix_"+id).find('td:nth-child(10) input[type="hidden"]').val(Eff_date_new)
			$("#row_tb_manage_appendix_"+id).find('td:nth-child(10) span').text(product_count)
			$("#row_tb_manage_appendix_"+id).find('td:nth-child(11)').text(status)
		}else{
			$("#row_tb_manage_appendix_"+id).find('td:nth-child(5) input').val(list_product_data);
			$("#arr_product").val(list_product_data)
			
			
			// $("#row_tb_manage_appendix_"+id).find('td:nth-child(6)').text(Appendix_code_new)
			$("#row_tb_manage_appendix_"+id).find('td:nth-child(6) input[type="hidden"]').val(Appendix_code_new)
			$("#row_tb_manage_appendix_"+id).find('td:nth-child(6) span').text(Abb_name_new)
			
			
			$("#row_tb_manage_appendix_"+id).find('td:nth-child(7) input[type="hidden"]').val(vid)
			$("#row_tb_manage_appendix_"+id).find('td:nth-child(7) span').text(Version_name)
			$("#row_tb_manage_appendix_"+id).find('td:nth-child(8) input').val(Eff_date)
			$("#row_tb_manage_appendix_"+id).find('td:nth-child(9) input').val(Exp_date)
			// $("#"+id).find('td:nth-child(7) ').text(appendixVersion)
			$("#row_tb_manage_appendix_"+id).find('td:nth-child(10) input[type="hidden"]').val(Eff_date_new)
			$("#row_tb_manage_appendix_"+id).find('td:nth-child(10) span').text(product_count)
			$("#row_tb_manage_appendix_"+id).find('td:nth-child(11)').text(status)
		}
		
		get_concat_product=false;
		
		
	}

	
	$("#tb_manage_appendix_wrapper .dataTables_scrollHeadInner").css({"width":"98%"});
//
//	$('.sorting_asc').removeClass('sorting_asc');
//	$("#tb_manage_appendix").DataTable({"paging": false,"bDestroy": 
//		true,"bPaginate": false,"bFilter" : false,"bInfo" :
//			false,"ordering": false,"sScrollY": "500px","searching" :false,scrollCollapse: false });
//	$("#tb_manage_appendix_wrapper .table").css({"width":"100%"});
}

/** ************ ฟังก์ชัน 2.1 กดเลือกภาคผนวกต้นทาง************* */
function bt_show_historyTab1() {
	
	var Txn_id = current_txn_id;
	//
	if(Txn_id==0){
		$("#model_tb_txnhistory2").modal('show');
		
		$('#tb_model_txnhistory').DataTable().destroy();
		$("#tb_model_txnhistory tbody").find("tr").remove();var row = "<tr>"
			+ "<td id='row_no_data_found' colspan='7'><p align='center'>" + "ไม่พบข้อมูล" + "</p></td>";
		$("#tb_model_txnhistory tbody").append(row);
		return;
	}
	$.ajax({
        type: "POST",
        url : "UW_GetData_Servlet",
        data: {
        	method 	: "getTxnHistory" ,
        	Txn_id : Txn_id	
        },       
        success : function(response) {	
        	show_historyTab1(response);
        },
        error : function(response) {	
        	console.log("get show_Appendix_From case error.")
        }
	});
}
/** ************ ฟังก์ชัน 2.1 กดเลือกภาคผนวกต้นทาง************* */
function bt_show_historyTab2() {
	var Txn_id = 0;
	$("#tb_manage_appendix tbody>tr").each(function() {
		if ($(this).find('td:nth-child(1) input ').is(':checked')) {
			Txn_id =$(this).find('td:nth-child(1) input').val();
			
		}
	});
	
	if(Txn_id==0){
		$("#model_tb_txnhistory").modal('show');
		
		$("#tb_model_txnhistory tbody").find("tr").remove();
		$('#tb_model_txnhistory').DataTable().destroy();
		var row = "<tr>"
			+ "<td id='row_no_data_found' colspan='7'><p align='center'>" + "ไม่พบข้อมูล" + "</p></td>";
		$("#tb_model_txnhistory tbody").append(row);
		return;
	}
	$.ajax({
        type: "POST",
        url : "UW_GetData_Servlet",
        data: {
        	method 	: "getTxnHistory" ,
        	Txn_id : Txn_id	
        },       
        success : function(response) {	
        	show_historyTab2(response);
        },
        error : function(response) {	
        	console.log("get show_Appendix_From case error.")
        }
	});
}
/** ************ ฟังก์ชัน 2.1.1 กดเลือกภาคผนวกต้นทาง************* */
function show_historyTab2(value) {
	
	var Rqst_user_code        = "";
	var Rqst_time	 	 	= "";
	var Rqst_user_name        = "";
	var Apprv_user_name        = "";
	var Apprv_user_code        = "";
	var Apprv_time	 	 	= "";
	var not_app_date	 	 = "";
	var Txn_status		 	= "";
	var Apprv_note		 	= "";
	var Apprv_note1		 	= "";
	var Apprv_note2		 	= "";
	var Apprv_note3		 	= "";
	var Txn_status_en		 	= ""; 
	var row = "";
	
	$("#model_tb_txnhistory").modal('show');
	
	$("#tb_model_txnhistory tbody").find("tr").remove();
	$('#tb_model_txnhistory').DataTable().destroy();
	var last_id=0;
		for(var i = 0; i < value.Txn_approve_Data.length; i++){
		Rqst_user_code 		 = value.Txn_approve_Data[i].Rqst_user_code;
		Rqst_time 		 	 = value.Txn_approve_Data[i].Rqst_time;
		Rqst_user_name		 = value.Txn_approve_Data[i].Rqst_user_name;
		Apprv_user_name		 = value.Txn_approve_Data[i].Apprv_user_name;
		Apprv_user_code		 = value.Txn_approve_Data[i].Apprv_user_code;
		Apprv_time			 = value.Txn_approve_Data[i].Apprv_time;
		not_app_date		 = value.Txn_approve_Data[i].Apprv_time;
		Txn_status		 	 = value.Txn_approve_Data[i].Txn_status;
		Txn_status_en		 = value.Txn_approve_Data[i].Txn_status_en;
		Apprv_note			 = value.Txn_approve_Data[i].Apprv_note=="null"?"":value.Txn_approve_Data[i].Apprv_note;
		Apprv_note1=Apprv_note.substring(0, 49); 
		Apprv_note2=Apprv_note.substring(50, 100); 
		Apprv_note3="<label>"+Apprv_note1+"<br>"+Apprv_note2+"</label>"
		last_id++;
		if(Txn_status_en=="NEW"||Txn_status_en.includes("REQUEST")){
			var row = "<tr>"
				+ "<td style='width:10%'><p align='left'>" + Rqst_user_name + "</p></td>"
				+ "<td style='width:10%'><p align='left'>" + Rqst_time + "</p></td>"
				+ "<td style='width:10%'><p align='left'>"  + "</p></td>";
				if(Txn_status_en=="APPROVED"){
					row =row+ "<td style='width:10%'><p align='left'>" + "</p></td>"
							+ "<td style='width:10%'><p align='left'>" + "</p></td>";
				}else{
					row =row+ "<td style='width:10%'><p align='left'>" +  "</p></td>"
							+ "<td style='width:10%'><p align='left'>" + "</p></td>";
				}
				
				row =row+ "<td style='width:10%'><p align='left'>" + Txn_status + "</p></td>"
				+ "<td style='width:40%'><p align='left'><label style='word-break: break-all;'>" + Apprv_note +"</label></p></td>";
				row =row+ "</tr>";
		}else{
			var row = "<tr>"
				+ "<td style='width:10%'><p align='left'>"  + "</p></td>"
				+ "<td style='width:10%'><p align='left'>"  + "</p></td>"
				+ "<td style='width:10%'><p align='left'>" + Apprv_user_name + "</p></td>";
				if(Txn_status_en!="REJECTED"){
					row =row+ "<td style='width:10%'><p align='left'>" + Apprv_time + "</p></td>"
							+ "<td style='width:10%'><p align='left'>" + "</p></td>";
				}else{
					row =row+ "<td style='width:10%'><p align='left'>" +  "</p></td>"
							+ "<td style='width:10%'><p align='left'>" + not_app_date + "</p></td>";
				}
				
				row =row+ "<td style='width:10%'><p align='left'>" + Txn_status + "</p></td>"
				+ "<td style='width:40%'><p align='left'><label style='word-break: break-all;'>" + Apprv_note +"</label></p></td>";
				row =row+ "</tr>";
		}
		

        $("#tb_model_txnhistory tbody").append(row);
        
	}
		
//		$("#tb_model_txnhistory").DataTable({"paging": false
//			,"bDestroy": 
//			true,"bPaginate": false
//			,"bFilter" : false,"bInfo" :
//				false
//				,"ordering": false
//				,"sScrollY": "350px"
//					,"searching" :false
//					,scrollCollapse: true });
//		$('.sorting_asc').removeClass('sorting_asc');
//		$("#tb_model_txnhistory_wrapper .table").css({"width":"100%"});
//		$("#tb_model_txnhistory_wrapper .dataTables_scrollHeadInner").css({"width":"98%"});
		
		$("#tb_model_txnhistory").DataTable({"paging": false,"bDestroy": 
			true,"bPaginate": false,"bFilter" : false,"bInfo" :
				false,"ordering": false,"sScrollY": "350px","searching" :false,scrollCollapse: true });
		$('.sorting_asc').removeClass('sorting_asc');
		$("#tb_model_txnhistory_wrapper .table").css({"width":"100%"});
		$("#tb_model_txnhistory_wrapper .dataTables_scrollHeadInner").css({"width":"100%"});
	

}
/** ************ ฟังก์ชัน 2.1.1 กดเลือกภาคผนวกต้นทาง************* */
function show_historyTab1(value) {
	
	var Rqst_user_code        	= "";
	var Rqst_time	 	 		= "";
	var Rqst_user_name        	= "";
	var Apprv_user_name        	= "";
	var Apprv_user_code        	= "";
	var Apprv_time	 	 		= "";
	var not_app_date	 	 	= "";
	var Txn_status		 		= "";
	var Apprv_note		 		= "";
	var Apprv_note1		 		= "";
	var Apprv_note2		 		= "";
	var Apprv_note3		 		= "";
	var Txn_status_en		 	= ""; 
	var row 					= "";
	var countrow 				= "";
	$("#model_tb_txnhistory2").modal('show');
	$('#tb_model_txnhistory').DataTable().destroy();
	$("#tb_model_txnhistory tbody").find("tr").remove();
	
	//
	var last_id=0;
		for(var i = 0; i < value.Txn_approve_Data.length; i++){
		Rqst_user_code 		 = value.Txn_approve_Data[i].Rqst_user_code;
		Rqst_time 		 	 = value.Txn_approve_Data[i].Rqst_time;
		Rqst_user_name		 = value.Txn_approve_Data[i].Rqst_user_name;
		Apprv_user_name		 = value.Txn_approve_Data[i].Apprv_user_name;
		Apprv_user_code		 = value.Txn_approve_Data[i].Apprv_user_code;
		Apprv_time			 = value.Txn_approve_Data[i].Apprv_time;
		not_app_date		 = value.Txn_approve_Data[i].Apprv_time;
		Txn_status		 	 = value.Txn_approve_Data[i].Txn_status;
		Txn_status_en		 = value.Txn_approve_Data[i].Txn_status_en;
		Apprv_note			 = value.Txn_approve_Data[i].Apprv_note=="null"?"":value.Txn_approve_Data[i].Apprv_note;
		countrow++
		Apprv_note1=Apprv_note.substring(0, 49); 
		Apprv_note2=Apprv_note.substring(50, 100); 
		Apprv_note3="<label>"+Apprv_note1+"<br>"+Apprv_note2+"</label>"
		last_id++;
		if(Txn_status_en=="NEW"||Txn_status_en.includes("REQUEST")){
			var row = "<tr>"
				+ "<td style='width:10%'><p align='left'>" + Rqst_user_name + "</p></td>"
				+ "<td style='width:10%'><p align='left'>" + Rqst_time + "</p></td>"
				+ "<td style='width:10%'><p align='left'>"  + "</p></td>";
				if(Txn_status_en=="APPROVED"){
					row =row+ "<td style='width:10%'><p align='left'>" + "</p></td>"
							+ "<td style='width:10%'><p align='left'>" + "</p></td>";
				}else{
					row =row+ "<td style='width:10%'><p align='left'>" +  "</p></td>"
							+ "<td style='width:10%'><p align='left'>" + "</p></td>";
				}
				
				row =row+ "<td style='width:10%'><p align='left'>" + Txn_status + "</p></td>"
				+ "<td style='width:40%'><p align='left'><label style='word-break: break-all;'>" + Apprv_note +"</label></p></td>";
				row =row+ "</tr>";
		}else{
			var row = "<tr>"
				+ "<td style='width:10%'><p align='left'>"  + "</p></td>"
				+ "<td style='width:10%'><p align='left'>"  + "</p></td>"
				+ "<td style='width:10%'><p align='left'>" + Apprv_user_name + "</p></td>";
				if(Txn_status_en!="REJECTED"){
					row =row+ "<td style='width:10%'><p align='left'>" + Apprv_time + "</p></td>"
							+ "<td style='width:10%'><p align='left'>" + "</p></td>";
				}else{
					row =row+ "<td style='width:10%'><p align='left'>" +  "</p></td>"
							+ "<td style='width:10%'><p align='left'>" + not_app_date + "</p></td>";
				}
				
				row =row+ "<td style='width:10%'><p align='left'>" + Txn_status + "</p></td>"
				+ "<td style='width:40%'><p align='left'><label style='word-break: break-all;'>" + Apprv_note +"</label></p></td>";
				row =row+ "</tr>";
		}
		

        $("#tb_model_txnhistory tbody").append(row);
        
	}
//		$("#tb_model_txnhistory").DataTable({"paging": false
//			,"bDestroy": 
//			true,"bPaginate": false
//			,"bFilter" : false,"bInfo" :
//				false
//				,"ordering": false
//				,"sScrollY": "200px"
//					,"searching" :false
//					,scrollCollapse: true });
//		$('.sorting_asc').removeClass('sorting_asc');
//		$("#tb_model_txnhistory_wrapper .table").css({"width":"100%"});
//		
		$("#tb_model_txnhistory").DataTable({"paging": false,"bDestroy": 
			true,"bPaginate": false,"bFilter" : false,"bInfo" :
				false,"ordering": false,"sScrollY": "300px","searching" :false,scrollCollapse: true });
		$('.sorting_asc').removeClass('sorting_asc');
		$("#tb_model_txnhistory_wrapper .table").css({"width":"100%"});
		$("#tb_model_txnhistory_wrapper .dataTables_scrollHeadInner").css({"width":"100%"});
		
		
//		if(countrow>5){
//			$("#tb_model_txnhistory_wrapper .dataTables_scrollHeadInner").css({"width":"98%"});
//		}else{
//			$("#tb_model_txnhistory_wrapper .dataTables_scrollHeadInner").css({"width":"100%"});
//		}
			
	

}

/* search dataTable */
var search_tb_selectListHealth = $('#tb_selectListHealth').DataTable();
$('#search_tb_selectListHealth').on('keyup', function() {
	var countrow=0;
	var counthide=0;
	
		$("#tb_selectListHealth>tbody>tr").removeClass("hide");
		$("#tb_selectListHealth tbody>tr").each(function(i) {
			countrow++
			const inputMatch = $(this).find('selecte,input')
		    .toArray()
		    .some(input => 
		    $(input).val().toLowerCase().includes( $('#search_tb_selectListHealth').val().toLowerCase()));
		
			const textMatch = $(this)
		    .children()
		    .not('td:has("input,select")')
		    .toArray()
		    .some(td => $(td).text().toLowerCase().includes($('#search_tb_selectListHealth').val().toLowerCase()))
		  
			
			if(inputMatch||textMatch){
				
			}else{
				counthide++
				 $("#tb_selectListHealth>tbody>tr").eq(i).addClass("hide");
			}
		})
	
		if(countrow==counthide){
			var row = "<tr>"
				+ "<td id='row_no_data_found' colspan='5'><p align='center'>" + "ไม่พบข้อมูล" + "</p></td>";
			$("#tb_selectListHealth tbody").append(row);
			return;
		}else{
			$("#tb_selectListHealth tbody>tr").each(function(i) {
				;
				var tempp = $(this).find('td:nth-child(1) ').attr("id")
				if($(this).find('td:nth-child(1) ').attr("id")=="row_no_data_found"){
					;
					$(this).remove();	
				}
			});
		}
	// search_tb_selectListHealth.search(this.value).draw();
});

var search_tb_selectListHealthGroup = $('#tb_selectListHealthGroup').DataTable();
$('#search_tb_selectListHealthGroup').on('keyup', function() {
	var countrow=0;
	var counthide=0;
	
		$("#tb_selectListHealthGroup>tbody>tr").removeClass("hide");
		$("#tb_selectListHealthGroup tbody>tr").each(function(i) {
			countrow++
			const inputMatch = $(this).find('selecte,input')
		    .toArray()
		    .some(input => 
		    $(input).val().toLowerCase().includes( $('#search_tb_selectListHealthGroup').val().toLowerCase()));
		
			const textMatch = $(this)
		    .children()
		    .not('td:has("input,select")')
		    .toArray()
		    .some(td => $(td).text().toLowerCase().includes($('#search_tb_selectListHealthGroup').val().toLowerCase()))
		  
			
			if(inputMatch||textMatch){
				
			}else{
				counthide++
				 $("#tb_selectListHealthGroup>tbody>tr").eq(i).addClass("hide");
			}
		})
		

		if(countrow==counthide){
			var row = "<tr>"
				+ "<td id='row_no_data_found' colspan='4'><p align='center'>" + "ไม่พบข้อมูล" + "</p></td>";
			$("#tb_selectListHealthGroup tbody").append(row);
			return;
		}else{
			$("#tb_selectListHealthGroup tbody>tr").each(function(i) {
				;
				var tempp = $(this).find('td:nth-child(1) ').attr("id")
				if($(this).find('td:nth-child(1) ').attr("id")=="row_no_data_found"){
					$(this).remove();	
				}
			});
		}
	

	
});



$('#search_tb_model_appendix2').on('keyup', function() {
	;
	var countrow=0;
	var counthide=0;
	var tb_len =$("#tb_model_appendix2 tbody>tr").length;
	var count_show = 0 ;
	$("#tb_model_appendix2>tbody>tr").removeClass("hide");
	$("#tb_model_appendix2 tbody>tr").each(function(i) {
		countrow++
		const textMatch2 = $(this)
	    .children()
	    .toArray()
	    .some(td => $(td).text().toLowerCase().includes($('#search_tb_model_appendix2').val().toLowerCase()))
	  
		if(textMatch2){
			count_show++;
		}else{
			 $("#tb_model_appendix2>tbody>tr").eq(i).addClass("hide");
			 counthide++
		}
	});
	
	if(countrow==counthide){
		var row = "<tr>"
			+ "<td id='row_no_data_found' colspan='6'><p align='center'>" + "ไม่พบข้อมูล" + "</p></td>";
		$("#tb_model_appendix2 tbody").append(row);
		return;
	}else{
		$("#tb_model_appendix2 tbody>tr").each(function(i) {
			;
			var tempp = $(this).find('td:nth-child(1) ').attr("id")
			if($(this).find('td:nth-child(1) ').attr("id")=="row_no_data_found"){
				$(this).remove();	
			}
		});
	}

});

var stb_appendixmaster = $('#tb_appendixmaster').DataTable();
$('#search_tb_appendixmaster').on('keyup', function() {
	
	var countrow=0;
	var counthide=0;
	var tb_len =$("#tb_appendixmaster tbody>tr").length;
	var count_show = 0 ;
	$("#tb_appendixmaster>tbody>tr").removeClass("hide");
	$("#tb_appendixmaster tbody>tr").each(function(i) {
		countrow++
		const textMatch2 = $(this)
	    .children()
	    .toArray()
	    .some(td => $(td).text().toLowerCase().includes($('#search_tb_appendixmaster').val().toLowerCase()))
	  
		if(textMatch2){
			count_show++;
		}else{
			 $("#tb_appendixmaster>tbody>tr").eq(i).addClass("hide");
			 counthide++
		}
	});
	
	if(countrow==counthide){
		var row = "<tr>"
			+ "<td id='row_no_data_found' colspan='7'><p align='center'>" + "ไม่พบข้อมูล" + "</p></td>";
		$("#tb_appendixmaster tbody").append(row);
		return;
	}else{
		$("#tb_appendixmaster tbody>tr").each(function(i) {
			;
			var tempp = $(this).find('td:nth-child(1) ').attr("id")
			if($(this).find('td:nth-child(1) ').attr("id")=="row_no_data_found"){
				$(this).remove();	
			}
		});
	}
	
	$('#tb_appendixmaster').DataTable({"paging": false,"bDestroy": 
		true,"bPaginate": false,"bFilter" : false,"bInfo" : 
			false,"ordering": false,"sScrollY": "350px","searching" :false,scrollCollapse: false });
	 
	// stb_appendixmaster.search(this.value).draw();
});


$('#search_tb_model_appendix').on('keyup', function() {
	
	var countrow=0;
	var counthide=0;
	var tb_len =$("#tb_model_appendix tbody>tr").length;
	var count_show = 0 ;
	$("#tb_model_appendix>tbody>tr").removeClass("hide");
	$("#tb_model_appendix tbody>tr").each(function(i) {
		countrow++
		const textMatch2 = $(this)
	    .children()
	    .toArray()
	    .some(td => $(td).text().toLowerCase().includes($('#search_tb_model_appendix').val().toLowerCase()))
	  
		if(textMatch2){
			count_show++;
		}else{
			 $("#tb_model_appendix>tbody>tr").eq(i).addClass("hide");
			 counthide++
		}
	});
	;
	if(countrow==counthide){
		var row = "<tr>"
			+ "<td id='row_no_data_found' colspan='6'><p align='center'>" + "ไม่พบข้อมูล" + "</p></td>";
		$("#tb_model_appendix tbody").append(row);
		return;
	}else{
		$("#tb_model_appendix tbody>tr").each(function(i) {
			;
			var tempp = $(this).find('td:nth-child(1) ').attr("id")
			if($(this).find('td:nth-child(1) ').attr("id")=="row_no_data_found"){
				$(this).remove();	
			}
		});
	}
	

});

$('#search_history').on('keyup', function() {
	
	var countrow=0;
	var counthide=0;
	var tb_len =$("#tb_model_txnhistory tbody>tr").length;
	var count_show = 0 ;
	$("#tb_model_txnhistory>tbody>tr").removeClass("hide");
	$("#tb_model_txnhistory tbody>tr").each(function(i) {
		countrow++
		const textMatch2 = $(this)
	    .children()
	    .toArray()
	    .some(td => $(td).text().toLowerCase().includes($('#search_history').val().toLowerCase()))
	  
		if(textMatch2){
			count_show++;
		}else{
			 $("#tb_model_txnhistory>tbody>tr").eq(i).addClass("hide");
			 counthide++
		}
	});
	//;;
	if(countrow==counthide && tb_len==counthide){
		var row = "<tr>"
			+ "<td id='row_no_data_found' colspan='7'><p align='center'>" + "ไม่พบข้อมูล" + "</p></td>";
		$("#tb_model_txnhistory tbody").append(row);
		return;
	}else{
		$("#tb_model_txnhistory tbody>tr").each(function(i) {
			;
			var tempp = $(this).find('td:nth-child(1) ').attr("id")
			if($(this).find('td:nth-child(1) ').attr("id")=="row_no_data_found"){
				
				//$("#tb_model_txnhistory tbody>tr:last").remove();	
				$(this).remove();
			}
		});
	}
	

});

$('#search_modal_tab22').on('keyup', function() {
	
	var countrow=0;
	var counthide=0;
	var tb_len =$("#tb_model_txnhistory tbody>tr").length;
	var count_show = 0 ;
	$("#tb_model_txnhistory>tbody>tr").removeClass("hide");
	$("#tb_model_txnhistory tbody>tr").each(function(i) {
		countrow++
		const textMatch2 = $(this)
	    .children()
	    .toArray()
	    .some(td => $(td).text().toLowerCase().includes($('#search_modal_tab22').val().toLowerCase()))
	  
		if(textMatch2){
			count_show++;
		}else{
			 $("#tb_model_txnhistory>tbody>tr").eq(i).addClass("hide");
			 counthide++
		}
	});
	//;
	if(countrow==counthide && tb_len==counthide){
		var row = "<tr>"
			+ "<td id='row_no_data_found' colspan='7'><p align='center'>" + "ไม่พบข้อมูล" + "</p></td>";
		$("#tb_model_txnhistory tbody").append(row);
		return;
	}else{
		$("#tb_model_txnhistory tbody>tr").each(function(i) {
			;
			var tempp = $(this).find('td:nth-child(1) ').attr("id")
			if($(this).find('td:nth-child(1) ').attr("id")=="row_no_data_found"){
				$(this).remove();
			}
		});
	}
	

});


var stb_search_modal_tab2 = $('#tb_model_appendix').DataTable();
$('#search_modal_tab2').on('keyup', function() {
	;
	var countrow=0;
	var counthide=0;
	/* search dataTable */
	var tab1_table1 = $('#tb_model_appendix').DataTable();
	$('#search_modal_tab2').on( 'keyup', function () {
		/* search dataTable */
		var tab1_table1 = $('#tb_model_appendix').DataTable();
		$('#search_modal_tab2').on('keyup', function() {
			$("#tb_model_appendix>tbody>tr").removeClass("hide");
			$("#tb_model_appendix tbody>tr").each(function(i) {
				countrow++;
				const inputMatch = $(this).find('selecte,input')
			    .toArray()
			    .some(input => 
			    $(input).val().toLowerCase().includes( $('#search_modal_tab2').val().toLowerCase()));
			
				const textMatch = $(this)
			    .children()
			    .not('td:has("input,select")')
			    .toArray()
			    .some(td => $(td).text().toLowerCase().includes($('#search_modal_tab2').val().toLowerCase()))
			  
				
				if(inputMatch||textMatch){
					
				}else{
					counthide++
					 $("#tb_model_appendix>tbody>tr").eq(i).addClass("hide");
				}
			})
			
			if(countrow==counthide){
				var row = "<tr>"
					+ "<td id='row_no_data_found' colspan='6'><p align='center'>" + "ไม่พบข้อมูล" + "</p></td>";
				$("#tb_model_appendix tbody").append(row);
				return;
			}else{
				$("#tb_model_appendix tbody>tr").each(function(i) {
					;
					var tempp = $(this).find('td:nth-child(1) ').attr("id")
					if($(this).find('td:nth-child(1) ').attr("id")=="row_no_data_found"){
						$(this).remove();	
					}
				});
			}
		});
		
		
		// tab1_table1.search( this.value ).draw();
	} );
});
$(document).ready(function() {
	
	
	

	$('#tb_model_appendix2').DataTable({
		"bScrollCollapse" : true,
		"ordering" : false,
		"bDestroy" : true,
		"bPaginate" : false,
		"bFilter" : false,
		"bLengthChange" : false,
		bInfo : false
	});
	$('.sorting_asc').removeClass('sorting_asc');
	
	
	$("#tb_model_appendix").DataTable({"paging": false,"bDestroy": 
		true,"bPaginate": false,"bFilter" : false,"bInfo" :
			false,"ordering": false,"sScrollY": "350px","searching" :false,scrollCollapse: true });
	$('.sorting_asc').removeClass('sorting_asc');
	$("#tb_model_appendix_wrapper .table").css({"width":"100%"});
	$("#tb_model_appendix_wrapper .dataTables_scrollHeadInner").css({"width":"98%"});

	


	

});
$( document ).ready(function() {
	 
	
	 $("#tb_appendixmaster_wrapper .dataTables_scrollHeadInner").css({"width":"100%"});
	 $("#tb_appendixmaster_wrapper .table").css({"width":"100%"});
	 
	 // $("#tb_product_related_wrapper
		// .dataTables_scrollHeadInner").css({"width":"100%"});
	 // $("#tb_product_related_wrapper .table").css({"width":"100%"});
	 
});

$.datetimepicker.setLocale('th');
var year_end = new Date().getFullYear();
year_end = 9456// - year_end 

jQuery('#start_date,#end_date').datetimepicker({
  timepicker:false,
  format:'d/m/Y',
  lang:'th',
  todayButton: false,
  yearEnd: year_end,
  onSelectDate:function(dp,$input){
	  
	  var yearT = new Date(dp).getFullYear();
	  var yearTH = yearT+543;
	  
	  var fulldate = $input.val();
	  var fulldateTH = fulldate.replace(yearT,yearTH);
	  $input.val(fulldateTH);
  }, 
});

jQuery('#start_date,#end_date').on("mouseenter mouseleave", function(e){
	var dateValue = $(this).val();
	
	if(dateValue != ""){						
		var arr_date = dateValue.split("/");
		if(e.type=="mouseenter"){
			var yearT = arr_date[2]-543;
		}
		if(e.type=="mouseleave"){
			var yearT = parseInt(arr_date[2])+543;
		}
		
		dateValue = dateValue.replace(arr_date[2],yearT);
		$(this).val(dateValue);
	}
});
function start_dateF(){		
	
//	;
	/* date from */
	var date_from 			= $("#start_date").val();
		date_from			= date_from.split("/");
	var appStart_day			= date_from[0];
	var appStart_month			= date_from[1];
	var appStart_year			= date_from[2];
	var date_start = new Date(appStart_year + "," + appStart_month + "," + appStart_day) ;
	

	var start_day2 = date_start.getDate();
	var start_month2 = date_start.getMonth();
	var start_year2 = date_start.getFullYear();

	var start_fulldate2  = new Date(start_day2 + "," + start_month2 + "," + start_year2) ;
	//start_year+"/"+start_month+"/"+start_day;

	jQuery('#start_date').datetimepicker({
		minDate 	: new Date(),
		//timepicker 	: false,
		//yearOffset	:543
		
	});
	
}

function set_to_dateF(){
	//;;
	var date_error=0;
	var date_from 			= $("#start_date").val();
	date_from				= date_from.split("/");
	var appStart_day			= date_from[0]==null?0:date_from[0];
	var appStart_month			= date_from[1]==null?0:date_from[1];
	var appStart_year			= date_from[2]==null?0:date_from[2];

	var date_to 			= $("#end_date").val();
	date_to					= date_to.split("/");
	var appStart_day2			= date_to[0]==null?0:date_to[0];
	var appStart_month2			= date_to[1]==null?0:date_to[1];
	var appStart_year2			= date_to[2]==null?0:date_to[2];
	
	if(Number(appStart_year2)<Number(appStart_year)){
		date_error++;
	}else if(Number(appStart_year2)<=Number(appStart_year) 
			&& Number(appStart_month2)<Number(appStart_month)){
		date_error++;
	}else if(Number(appStart_year2)<=Number(appStart_year) 
			&& Number(appStart_month2)<=Number(appStart_month)
			&& Number(appStart_day2)<Number(appStart_day)){
		date_error++;
	}
//	;
//	if(Number(appStart_year2)<=Number(appStart_year)
//			&&Number(appStart_month2)<=Number(appStart_month)
//			&&Number(appStart_day2)<Number(appStart_day)
//		){
//		date_error++;
//	}
	
	//$("#end_date").val($("#start_date").val());
	if(date_error>0){
		$("#end_date").val("");
	}
}

function to_dateF(){
	//;
	/* date from */
	var date_from 			= $("#start_date").val();
		date_from			= date_from.split("/");
	var appStart_day			= date_from[0];
	var appStart_month			= date_from[1];
	var appStart_year			= date_from[2];
	var date_start = new Date(appStart_year + "," + appStart_month + "," + appStart_day) ;
	
	var start_day = date_start.getDate();
	var start_month = date_start.getMonth()+1;
	var start_year = date_start.getFullYear()-543;	
	var start_fulldate = start_year+","+start_month+","+start_day;
	var start_fulldate2 = new Date(start_fulldate) ;
	/* date to */
	var date_to = $("#end_date").val();		
		date_to			= date_to.split("/");
	var dateto_day			= date_to[0];
	var dateto_month		= date_to[1];
	var dateto_year			= date_to[2];
	var date_end	= new Date(dateto_year + "," + dateto_month + "," + dateto_day) ;
	
	var to_day = date_end.getDate();
	var to_month = date_end.getMonth()+1;
	var to_year = date_end.getFullYear()-543;	
	var to_fulldate = to_year+","+to_month+","+to_day;

	
	jQuery('#end_date').datetimepicker({
		minDate : start_fulldate2,
		//timepicker : false,
		//yearOffset:543
		
	});
	jQuery('#end_date').datetimepicker({
		  onShow:function( ct ){
			 this.setOptions({
				   minDate:start_fulldate2
			 })
		  },
		  timepicker:false,
		 // format:'d/m/Y',
		  //yearOffset:543
	});
//	});
//	jQuery('#end_date').datetimepicker({
//		minDate : new Date(start_fulldate2),
//		timepicker : false,
//		yearOffset:543
//		
//	});
}

function start_dateF_para(e){		
	
	var id2 = $(e).parents('tr').find("td:nth-child(9) input").attr('id');
	var id = $(e).attr('id');
	
	var date_from 			= $(e).parents('tr').find("td:nth-child(10) input").val();
		date_from			= date_from.split("/");
		var appStart_day			= date_from[0];
		var appStart_month			= date_from[1];
		var appStart_year			= date_from[2];
		var date_start = new Date(appStart_year + "," + appStart_month + "," + appStart_day) ;
		
		var start_day 		= date_start.getDate();
		var start_month 	= date_start.getMonth()+1;
		var start_year 		= date_start.getFullYear()-543;	
		var start_fulldate 	= start_year+","+start_month+","+start_day;
		var start_fulldate2 = new Date(start_fulldate) ;
		/* date to */
		var date_to 		= $("#end_date").val();		
			date_to			= date_to.split("/");
		var dateto_day			= date_to[0];
		var dateto_month		= date_to[1];
		var dateto_year			= date_to[2];
		var date_end			= new Date(dateto_year + "," + dateto_month + "," + dateto_day) ;
		
		var to_day 		= date_end.getDate();
		var to_month 	= date_end.getMonth()+1;
		var to_year 	= date_end.getFullYear();	
		var to_fulldate = to_year+","+to_month+","+to_day;
	//start_year+"/"+start_month+"/"+start_day;

//	jQuery('#'+id).datetimepicker({
//		minDate : new Date(),
//		timepicker : false,
//		yearOffset:543
//		
//	});
//	
//	
//	jQuery('#'+id).datetimepicker({
//		  onShow:function( ct ){
//			 this.setOptions({
//				   minDate:start_fulldate?start_fulldate:false
//			 })
//		  },
//		  timepicker:false,
//		  format:'d/m/Y',
//		  yearOffset:543
//	});
	
	jQuery('#'+id).datetimepicker({
		minDate : start_fulldate2,
		timepicker : false,
		//yearOffset:543
		
	});
	jQuery('#'+id).datetimepicker({
		  onShow:function( ct ){
			 this.setOptions({
				   minDate:start_fulldate2
			 })
		  },
		  timepicker:false,
		  format:'d/m/Y',
		  //yearOffset:543
	});
	
}

function to_dateF_para(e){		
	
	var id2 = $(e).parents('tr').find("td:nth-child(1) input").attr('id');
	var id = $(e).attr('id');
	;
	;
	/* date from */
	var date_from 			= $(e).parents('tr').find("td:nth-child(8) input").val();
	date_from				= date_from.split("/");
	var appStart_day			= date_from[0];
	var appStart_month			= date_from[1];
	var appStart_year			= date_from[2];
	var date_start = new Date(appStart_year + "," + appStart_month + "," + appStart_day) ;
	
	var start_day = date_start.getDate();
	var start_month = date_start.getMonth()+1;
	var start_year = date_start.getFullYear()-543;	
	var start_fulldate = start_year+","+start_month+","+start_day;
	var start_fulldate2 = new Date(start_fulldate) ;
	/* date to */
	var date_to = $("#end_date").val();		
		date_to			= date_to.split("/");
	var dateto_day			= date_to[0];
	var dateto_month		= date_to[1];
	var dateto_year			= date_to[2];
	var date_end	= new Date(dateto_year + "," + dateto_month + "," + dateto_day) ;
	
	var to_day = date_end.getDate();
	var to_month = date_end.getMonth()+1;
	var to_year = date_end.getFullYear();	
	var to_fulldate = to_year+","+to_month+","+to_day;
	
	
	jQuery('#'+id).datetimepicker({
		minDate : start_fulldate2,
		timepicker : false,
		//yearOffset:543
		
	});
	jQuery('#'+id).datetimepicker({
		  onShow:function( ct ){
			 this.setOptions({
				   minDate:start_fulldate2
			 })
		  },
		  timepicker:false,
		  format:'d/m/Y',
		  //yearOffset:543
	});
	
}
function alertError(message)
{
    $('#txt_alert_error').text(message);
    $('#modal_warning').modal();
}
function alertErrorTab2(message)
{
    $('#txt_alert_errorTab2').text(message);
    $('#modal_warningTab2').modal();
}
/**
 * ************************ validate setting_appindix1
 * *******************************
 */
function validate_save_appendix(){
	// ตรวจ Validate ก่อนไป save ด้วย
	// //
	var message = "";
	var error = 0;
	var error2 = 0;
	var error3 = 0;
	var error4 = 0;
	var error5 = 0;
	var error6 = 0;
	var appendixValue 		= $("#appendixValue").val();
	var appendixValueName 	= $("#appendixValueName").val();
	var appendixName 		= $("#appendixName").val();
	var appendixVersion 	= $("#appendixVersion").val();
	var start_date 			= $("#start_date").val();
	var end_date 			= $("#end_date").val();
	var CoverageWarningAmt 	= $("#CoverageWarningAmt").val();
	/* base plan */
	;
	if(temp_copy_start_date==start_date){
		error6++;
	}
	if(appendixName == "" 
			|| appendixVersion == ""
				|| start_date == ""
						|| CoverageWarningAmt == ""
							|| appendixValueName == ""
	){
		error++;
	}
	
	if(error > 0){
		message = "กรุณาระบุข้อมูลให้ครบ";
		alertError(message);
		
	}
	
	
	var last_max_age=0;
	$("#tb_rangeAge tbody>tr").each(function(i){
		
		var Age_index = $(this).find("td:nth-child(2) ").text();
		var Min_age = $(this).find("td:nth-child(3) input ").val();
		var Max_age = $(this).find("td:nth-child(4) input ").val();
		if(i==0){
			if((Max_age.length)==0||(Min_age.length)==0){
				error4++;
			}
		}
		if(Number(Max_age)==Number(Min_age)){
			error2++;
		}
		
		
		if(Number(Max_age)<Number(Min_age)){
			error2++;
		}
		
		if(Number(last_max_age)>Number(Min_age)){
			error2++;
		}
		last_max_age=Max_age;
		
	});
	var last_max_age=0;
	$("#tb_capitalProtection tbody>tr").each(function(i){
		;
		var Age_index = $(this).find("td:nth-child(2) ").text();
		var Min_age = $(this).find("td:nth-child(2) input ").val();
		var Max_age = $(this).find("td:nth-child(3) input ").val();
		if(i==0){
			if(Max_age.length==0||Min_age.length==0){
				error5++;
			}
		}
		
		if(Min_age==null?true:Min_age.length==0){
			Min_age=0;
		}else{
			Min_age=replaceComma(Min_age);//.replace(",","");
			
		}
		if(Max_age==null?true:Max_age.length==0){
			Max_age=0;
		}else{
			Max_age=replaceComma(Max_age);//.replace(",","");
		}
		if(Number(Max_age)<Number(Min_age)){
			error3++;
		}
		if(Number(Max_age)==Number(Min_age)){
			error3++;
		}
		
		if(Number(last_max_age)>Number(Min_age)){
			error3++;
		}
		last_max_age=Max_age;
		
		
	});
	//;
	
	var date_error=0;
	if(temp_copy_start_date==null?false:temp_copy_start_date.length>0){
		var date_from 			= temp_copy_start_date;
		date_from				= date_from.split("/");
		var appStart_day			= date_from[0]==null?0:date_from[0];
		var appStart_month			= date_from[1]==null?0:date_from[1];
		var appStart_year			= date_from[2]==null?0:date_from[2];

		var date_to 			= $("#start_date").val();
		date_to					= date_to.split("/");
		var appStart_day2			= date_to[0]==null?0:date_to[0];
		var appStart_month2			= date_to[1]==null?0:date_to[1];
		var appStart_year2			= date_to[2]==null?0:date_to[2];
		
//		if(Number(appStart_year2)<=Number(appStart_year)
//				&&Number(appStart_month2)<=Number(appStart_month)
//				&&Number(appStart_day2)<Number(appStart_day)
//			){
//			error6++;
//		}
		if(Number(appStart_year2)<Number(appStart_year)){
			error6++;
		}else if(Number(appStart_year2)<=Number(appStart_year) 
				&& Number(appStart_month2)<Number(appStart_month)){
			error6++;
		}else if(Number(appStart_year2)<=Number(appStart_year) 
				&& Number(appStart_month2)<=Number(appStart_month)
				&& Number(appStart_day2)<Number(appStart_day)){
			error6++;
		}
	}
	
	
	
	
	
	if(error5 > 0){
		message = "กรุณาระบุช่วงทุนอย่างน้อย 1 รายการ";
		alertError(message);
		// nameTab = "";
		// Statuesave = "N";
	}else if(error4 > 0){
		message = "กรุณาระบุช่วงอายุอย่างน้อย 1 รายการ";
		alertError(message);
		// nameTab = "";
		// Statuesave = "N";
	}else if(error > 0){
		message = "กรุณาระบุข้อมูลให้ครบ";
		alertError(message);
		// nameTab = "";
		// Statuesave = "N";
	}else if(error2 > 0){
		message = "กรุณาตรวจสอบข้อมูลช่วง อายุ";
		alertError(message);
		// nameTab = "";
		// Statuesave = "N";
	}else if(error3 > 0){
		message = "กรุณาตรวจสอบข้อมูลช่วง เงินทุนคุ้มครอง";
		alertError(message);
		// nameTab = "";
		// Statuesave = "N";
	}else if(error6 > 0){
		message = "ไม่สามารถระบุวันที่เริ่มใช้ตาราง เก่ากว่าเวอร์ชั่นล่าสุดได้ "+temp_copy_start_date;
		alertError(message);
		// nameTab = "";
		// Statuesave = "N";
	}else{
		// nameTab = "";
		// Statuesave = "Y";
		$("#modal_saved").modal("show")
		var message = "บันทึกข้อมูลเรียบร้อย";
	}
	
}
function replaceComma(value){
	var result = value.replace(/,/g, "");
	return result;
	}
function validate_save_appendixTab2(){
	// ตรวจ Validate ก่อนไป save ด้วย
	// //
	var message = "";
	var error = 0;
	var error2 = 0;
	var error3 = 0;
	var error4 = 0;
	var error5 = 0;
	
	if(error > 0){
		message = "กรุณาระบุข้อมูลให้ครบ";
		alertErrorTab2(message);
		
	}
	
	$("#tb_manage_appendix tbody>tr").each(function(i){
		if ($(this).find('td:nth-child(1) input').is(':checked')) {
			var Appendix_code = $(this).find("td:nth-child(6) ").text();
			var ProductCount = $(this).find("td:nth-child(10) ").text();
			var DateFrom = $(this).find("td:nth-child(8) input").val();
			;
			if(Appendix_code.length==0){
				error++;
			}
			if(ProductCount==null?true:ProductCount.length==0?true:ProductCount==0){
				error2++;
			}
			if(DateFrom.length==0){
				error3++;
			}
		}
	});
	var last_max_age=0;
	
	if(error > 0){
		message = "กรุณาเลือกภาคผนวกปลายทาง";
		alertErrorTab2(message);
		
	}else if(error2 > 0){
		message = "กรุณาเลือกสินค้าที่ต้องการย้าย";
		alertErrorTab2(message);
		
	}else if(error3 > 0){
		message = "กรุณาระบุวันที่เริ่ม";
		alertErrorTab2(message);
		
	}else{
		$("#modal_submit2").modal("show");
		var message = "บันทึกข้อมูลเรียบร้อย";
	}
	
}

function select_all() {
	var product_count=0;
	var product_countall=0;
	$("#tb_product_related tbody>tr").each(function() {
		product_countall++;
		if ($(this).find('td:nth-child(1) input[type=checkbox]').is(':checked')) {
			product_count++;
			
		}	
	})
	if(product_count==product_countall){
		$("#tb_product_related tbody>tr").each(function() {
			$(this).find('td:nth-child(1) input[type=checkbox]').prop('checked',false)
		})
	}else{
		$("#tb_product_related tbody>tr").each(function() {
			$(this).find('td:nth-child(1) input[type=checkbox]').prop('checked',true)
				
		})
	}
	
	var count_product_row = 0
	var count_app_row = 0
	
	$("#tb_product_related tbody>tr").each(function() {
		if ($(this).find('td:nth-child(1) input ').is(':checked')) {
			count_product_row++
		}
	});
	$("#tb_prechanging_appendix tbody>tr").each(function() {
		
		if ($(this).find('td:nth-child(1) ').text().length>0) {
			count_app_row++
		}
	});
	
	if(count_product_row>0&&count_app_row>0){
		$("#bt_modal_listProduct_save")     				.attr("disabled", false);
	}else{
		$("#bt_modal_listProduct_save")     				.attr("disabled", true);
	}
	
}


/** ********สคริป ปรับ enable ปุ่มต่างๆ เมื่อกด แคนเซิล************** */
function enable_bt_Cancel(e){

	
// var row_now = $(e).parent().parent().parent().find('td:nth-child(2)').text();
// var id = $(e).attr("id");
// var UWflag = $(e).is(':checked')
// var check =$("#bt1_submit_med").attr("disabled");
	
	$("#tb_manage_appendix tbody>tr").each(function() {
		if ($(this).find('td:nth-child(1) input').is(':checked')) {
			$(this).find('td:nth-child(1) input').prop("checked",false)
			$(this).find('td:nth-child(2) input').attr("disabled", true);
			$(this).find('td:nth-child(3) input').attr("disabled", true);
			$(this).find('td:nth-child(4) input').attr("disabled", true);
			$(this).find('td:nth-child(5) select').attr("disabled",true);
			$(this).find('td:nth-child(6) input').attr("disabled",true);		
		}
    })
	$("#bt1_add_med")						.attr("disabled", false);
	$("#bt_add_row_listAppendix")			.attr("disabled", false);
	$("#bt_delete_row_listAppendix")		.attr("disabled", true);
	$("#bt_approve_row_listAppendix")		.attr("disabled", true);
	$("#bt_req_row_listAppendix")			.attr("disabled", true);
	$("#bt_his_row_listAppendix")			.attr("disabled", true);
	$("#bt_not_approve_row_listAppendix")	.attr("disabled", true);
	$("#bt_cancel_row_listAppendix")		.attr("disabled", true);
	$("#bt_cancel_row_listAppendixU")     	.attr("disabled", true);
	$("#bt_save_tab2")     					.attr("disabled", true);
}

function disable_agent_checkbox(){
	var sale_channel = $("#lb_saleChannel_CL :selected").val();
	//
	if(sale_channel=="1"){
		$("#sale_n").prop("checked",false).attr("disabled",false);
		$("#sale_q").prop("checked",false).attr("disabled",false);
		$("#sale_t").prop("checked",false).attr("disabled",false);
		$("#sale_p").prop("checked",false).attr("disabled",false);
		$("#sale_r").prop("checked",false).attr("disabled",false);
	}else{
		$("#sale_n").prop("checked",false).attr("disabled",true);
		$("#sale_q").prop("checked",false).attr("disabled",true);
		$("#sale_t").prop("checked",false).attr("disabled",true);
		$("#sale_p").prop("checked",false).attr("disabled",true);
		$("#sale_r").prop("checked",false).attr("disabled",true);
	}
	
}

function enable_save_modal(){
	var count_product_row = 0
	var count_app_row = 0
	
	$("#tb_product_related tbody>tr").each(function() {
		if ($(this).find('td:nth-child(1) input ').is(':checked')) {
			count_product_row++
		}
	});
	$("#tb_prechanging_appendix tbody>tr").each(function() {
		
		if ($(this).find('td:nth-child(1) ').text().length>0) {
			count_app_row++
		}
	});
	
	if(count_product_row>0&&count_app_row>0){
		$("#bt_modal_listProduct_save")     				.attr("disabled", false);
	}else{
		$("#bt_modal_listProduct_save")     				.attr("disabled", true);
	}
	
}

