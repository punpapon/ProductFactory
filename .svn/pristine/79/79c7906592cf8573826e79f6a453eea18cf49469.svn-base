$(document).ready(function() {
	$("#UW_RuleNav").removeClass('collapse');
});


/**************   Validate  key input data    *********************/ 
 var Statuesave = "Y";
 var nameTab	= "";
 $("#div_main_menu_TC_1 *").change(function(event){
	// ;
	
	 nameTab 	= "menu_TC_1";
	 Statuesave = "N";
 });
 $("#div_main_menu_TC_2 *").change(function(event){
	 nameTab 	= "menu_TC_2";
	 Statuesave = "N";
 });
 $("#div_main_menu_TC_3 *").change(function(event){
	 ;
	 nameTab 	= "menu_TC_3";
	 Statuesave = "N";
	 if($('#search_tb_tab1_2').val().length>0 || $('#search_tb_tab1_3').val().length>0){
		 Statuesave = "Y";
	 }
 });
 $("#menu_TC_3").click(function(){
	 ;
	 $("#search_tb_tab1_1").val("");
	 
	 if($("#bt_submit2").attr("disabled")=="disabled"){
		 document.getElementById("totalCapital_tab3").style.display = "block";
			document.getElementById("totalCapital_tab1").style.display = "none";
			document.getElementById("totalCapital_tab2").style.display = "none";
			
			
			$.ajax({
		        type: "POST",
		        url : "UW_GetData_Servlet",
		        data: {
		        	method 	: "getStatusPolicy"
		        },       
		        success : function(response) {	
		        	
		        	ShowStatusPolicyGROUP(response);
		        	ShowStatusPolicyIND(response);
		        	$("#bt_submit3").attr("disabled",true);
					$("#bt_submit2").attr("disabled",true);
					SetUserPermissionUW();
		        },
		        error : function(response) {	
		        	console.log("get product case error.")
		        }
			});
	 } else if (Statuesave == "N" && nameTab != "menu_TC_3") {
		 	$("#modal_Checkkeyup").modal("show");
		 	data = "menu_TC_3";
		 	//document.getElementById("menu_TC_3").style.display = "none";
		}else{
			document.getElementById("totalCapital_tab3").style.display = "block";
			document.getElementById("totalCapital_tab1").style.display = "none";
			document.getElementById("totalCapital_tab2").style.display = "none";
			
			
			$.ajax({
		        type: "POST",
		        url : "UW_GetData_Servlet",
		        data: {
		        	method 	: "getStatusPolicy"
		        },       
		        success : function(response) {	
		        	
		        	ShowStatusPolicyGROUP(response);
		        	ShowStatusPolicyIND(response);
		        	$("#bt_submit3").attr("disabled",true);
					$("#bt_submit2").attr("disabled",true);
					SetUserPermissionUW();
		        },
		        error : function(response) {	
		        	console.log("get product case error.")
		        }
			});
		}
 })
 $("#menu_TC_1").click(function(){
	 
	    $("#search_tb_tab1_2").val("");
	    $("#search_tb_tab1_3").val("");
	    $("#bt1_cancel_med")	.attr("disabled", true);
		$("#bt1_cancel_med2")	.attr("disabled", true);
		
		$("#bt1_req_med")		.attr("disabled", true);
		$("#bt1_req_edit2")		.attr("disabled", true);
		$("#bt1_req_edit3")		.attr("disabled", true);
		$("#bt1_req_edit4")		.attr("disabled", true);
		$("#bt_submit1")		.attr("disabled", true);
		$("#bt1_appr_med")		.attr("disabled", true);
		$("#bt1_his_med")		.attr("disabled", true);
		if (Statuesave == "N" && nameTab != "menu_TC_1") {
		 	$("#modal_Checkkeyup").modal("show");
		 	data = "menu_TC_1";
		}else{
			document.getElementById("totalCapital_tab1").style.display = "block";
			document.getElementById("totalCapital_tab3").style.display = "none";
			document.getElementById("totalCapital_tab2").style.display = "none";
			
			prepareShowDataAppendixSumAccum();
		}
 })
$( document ).ready(function() {
	
	$("#bt1_add_med")		.attr("disabled", true).css("visibility","hidden");
	$("#bt1_delete_med")	.attr("disabled", true).css("visibility","hidden");
	$("#bt2_add_med")		.attr("disabled", true).css("visibility","hidden");
	$("#bt2_delete_med")		.attr("disabled", true).css("visibility","hidden");
	$("#bt3_add_med")		.attr("disabled", true).css("visibility","hidden");
	$("#bt3_delete_med")	.attr("disabled", true).css("visibility","hidden");
	$("#bt1_cancel_med")	.attr("disabled", true);
	$("#bt1_cancel_med2")	.attr("disabled", true);
	
	$("#bt1_req_med")		.attr("disabled", true);
	$("#bt1_req_edit2")		.attr("disabled", true);
	$("#bt1_req_edit3")		.attr("disabled", true);
	$("#bt1_req_edit4")		.attr("disabled", true);
	$("#bt_submit1")		.attr("disabled", true);
	$("#bt1_his_med")		.attr("disabled", true);
	
	$("#bt1_appr_med")		.attr("disabled", true);
	$("#bt1_not_appr_med")	.attr("disabled", true);
	$("#bt1_cancel_med2")	.attr("disabled", true);
	
	$("#bt3_req_med")		.attr("disabled", true);
	$("#bt3_his_med")		.attr("disabled", true);
	
	$("#bt3_appr_med")		.attr("disabled", true);
	$("#bt3_not_appr_med")	.attr("disabled", true);
	$("#bt3_cancel_med")	.attr("disabled", true);
	$("#bt3_cancel_med2")	.attr("disabled", true);
	
	$("#bt2_req_med")		.attr("disabled", true);
	$("#bt2_his_med")		.attr("disabled", true);
	
	$("#bt2_appr_med")		.attr("disabled", true);
	$("#bt2_not_appr_med")	.attr("disabled", true);
	$("#bt2_cancel_med")	.attr("disabled", true);
	$("#bt2_cancel_med2")	.attr("disabled", true);
	document.getElementById("totalCapital_tab1").style.display = "block";
	nameTab 	= "menu_TC_1";
	Statuesave = "Y";
	//SetUserPermissionUW();
});
 $("#checkkeyup_Cancel").click(function(){
		var element = document.getElementById(data);
			element.classList.remove("active");
		var element = document.getElementById(nameTab);
			element.classList.add("active");
});
 function bt_changeTab() {
	
		if (data == "menu_TC_1") {
			$("#bt_submit3").attr("disabled",true);
			$("#bt_submit2").attr("disabled",true);
			document.getElementById("totalCapital_tab1").style.display = "block";
			document.getElementById("totalCapital_tab2").style.display = "none";
			document.getElementById("totalCapital_tab3").style.display = "none";
			
			$("#modal_Checkkeyup").modal("hide");
			Statuesave = "Y";
			$('#tb_tab1_listAppendix_accum').DataTable({"paging": false,"bDestroy": true,"bPaginate": false,"bFilter" : false,"bInfo" : false,"ordering": false,"scrollY": "350px","sScrollX": true,"sScrollXInner": "170%","searching" :false,"bScrollCollapse": true
				,fixedColumns:   {
			            leftColumns: 3,
			            rightColumns: 0
			        }
			 });
			$("#tb_tab1_listAppendix_accum_wrapper .DTFC_LeftBodyWrapper").css("top","-6px");
		}else if (data == "menu_TC_3") {
			$("#bt_submit1").attr("disabled",true);
			document.getElementById("totalCapital_tab3").style.display = "block";
			document.getElementById("totalCapital_tab1").style.display = "none";
			document.getElementById("totalCapital_tab2").style.display = "none";
			
			$("#modal_Checkkeyup").modal("hide");
			Statuesave = "Y";
			
			$.ajax({
		        type: "POST",
		        url : "UW_GetData_Servlet",
		        data: {
		        	method 	: "getStatusPolicy"
		        },       
		        success : function(response) {	
		        	
		        	ShowStatusPolicyGROUP(response);
		        	ShowStatusPolicyIND(response);
		        },
		        error : function(response) {	
		        	console.log("get product case error.")
		        }
			});
		}
		$("#modal_Checkkeyup").modal("hide");
		Statuesave = "Y";
}
/* Tab menu ตั้งค่ารายการตรวจ*/
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
	//;
	  var target = $(e.target).attr("href") // activated tab
	  
	  if(target == "#1"){
		  document.getElementById("totalCapital_tab1").style.display = "block";
		  document.getElementById("totalCapital_tab2").style.display = "none";
		  document.getElementById("totalCapital_tab3").style.display = "none";
	  }else if(target == "#3"){
		  document.getElementById("totalCapital_tab1").style.display = "none";
		  document.getElementById("totalCapital_tab2").style.display = "none";
		  document.getElementById("totalCapital_tab3").style.display = "block";
	  }
});
$( document ).ready(function() {
	
	// set dataTable
	$('#tb_tab1_listAppendix_accum').DataTable({"paging": false,"bDestroy": true,"bPaginate": false,"bFilter" : false,"bInfo" : false,"ordering": false,"scrollY": "350px","sScrollX": true,"sScrollXInner": "170%","searching" :false,"bScrollCollapse": true
		,fixedColumns:   {
	            leftColumns: 3,
	            rightColumns: 0
	        }
	 });
	$("#tb_tab1_listAppendix_accum_wrapper .DTFC_LeftBodyWrapper").css("top","-6px");
	
	 $('.sorting_asc').removeClass('sorting_asc');
	 $('#tb_tab1_listStatusInsurance').DataTable({"paging": false,"bDestroy": true,"bPaginate": false,"bFilter" : false,"bInfo" : false,"ordering": false,"sScrollY": "200px","searching" :false,scrollCollapse: true });
	 $('#tb_tab1_listStatusInsurance2').DataTable({"paging": false,"bDestroy": true,"bPaginate": false,"bFilter" : false,"bInfo" : false,"ordering": false,"sScrollY": "200px","searching" :false,scrollCollapse: true });
	 
	 
	 $("#bt_submit3").attr("disabled", true);
	 $("#bt_submit2").attr("disabled", true);
	 $("#bt_submit1").attr("disabled", true);
});
/***************************************GET ALL LOOKUP***********************************/
$(document).ready( function() {
	$.ajax({
        type: "POST",
        url : "UW_Data_Default_Servlet",
        data: {
        	method 	: "getAllLookUp"
        },       
        success : function(response) {	
        	
        	show_basicInfo_data(response);  //GET LOOKUP FRIST AND SHOW DATA

        },
        error : function(response) {	
        	console.log("get lookup case error.")
        }
	});
});

/*initialize*/
/*Get data from servlet*/
function show_basicInfo_data(response){	
	//;
	//slert("show_basicInfo_data")
	var row_sumpolicyType  = "";	
	
	//;
	for (i in response.Tab_Basic_Information[0].sumpolicy_lookup) {
		//;
		var obj = response.Tab_Basic_Information[0].sumpolicy_lookup[i];
		row_sumpolicyType += "<option value='"+obj.pass+"'>"+obj.text+"</option>";
		
	}
	
	$("#sumpolicy_LookUp_IC_YES").val(row_sumpolicyType);
	$("#sumpolicy_LookUp_IC_NO").val(row_sumpolicyType);
	$("#sumpolicy_LookUp_SUB_YES").val(row_sumpolicyType);
	$("#sumpolicy_LookUp_SUB_NO").val(row_sumpolicyType);
	
	
	$.ajax({
        type: "POST",
        url : "UW_GetData_Servlet",
        data: {
        	method 	: "getAppendixSumAccum"
        },       
        success : function(response) {	
        	
        	ShowDataAppendixSumAccum(response);
        	SetUserPermissionUW()
        },
        error : function(response) {	
        	console.log(" getAppendixSumAccum case error.")
        }
	});
		
}

function prepareShowDataAppendixSumAccum(){
	
	$.ajax({
        type: "POST",
        url : "UW_GetData_Servlet",
        data: {
        	method 	: "getAppendixSumAccum"
        },       
        success : function(response) {	
        	
        	ShowDataAppendixSumAccum(response);
        },
        error : function(response) {	
        	console.log(" getAppendixSumAccum case error.")
        }
	});
}
/***************************** Tab 1 เงื่อนไขการรวมทุน ********************************/
function ShowDataAppendixSumAccum(value) {
	var Appendix_code        = "";
	var Appendix_name        = "";
	var Version_name	 	 = "";
	var Version_ID		     = "";
	var Abb_name		     = "";
	var Eff_date			  = "";
	var Exp_date		 	 = "";
	var IC_Yes			 = "";
	var IC_No		     = "";
	var Sub_Yes		     = "";
	var Sub_No		     = "";
	var Txn_id		     = "";
	var Txn_status		     = "";
	var row = "";
	
	$('#tb_tab1_listAppendix_accum').DataTable().destroy();
	$("#tb_tab1_listAppendix_accum tbody").find("tr").remove();
	var last_id=0;
	for(var i = 0; i < value.AppendixSumAccum_Data.length; i++){
		//;
		Appendix_code 		 = value.AppendixSumAccum_Data[i].Appendix_code;
		Appendix_name 		 = value.AppendixSumAccum_Data[i].Appendix_name;
		Version_name		 = value.AppendixSumAccum_Data[i].Version_name;
		Version_ID		 	 = value.AppendixSumAccum_Data[i].Version_ID;
		Abb_name			 = value.AppendixSumAccum_Data[i].Abb_name;
		Eff_date		 = value.AppendixSumAccum_Data[i].Eff_date;
		Exp_date		 = value.AppendixSumAccum_Data[i].Exp_date;
		IC_Yes		 = value.AppendixSumAccum_Data[i].IC_Yes;
		IC_No		 = value.AppendixSumAccum_Data[i].IC_No;
		Sub_Yes		 = value.AppendixSumAccum_Data[i].Sub_Yes;
		Sub_No		 = value.AppendixSumAccum_Data[i].Sub_No;
		Txn_id		 = value.AppendixSumAccum_Data[i].Txn_id;
		Txn_status		 = value.AppendixSumAccum_Data[i].Txn_status;
		//;
		var sumpolicy_LookUp = $("#sumpolicy_LookUp_IC_YES").val();
		//var xx=$("#exam_type_LookUp option[value="+Exam_type+"]").attr('selected', true);
        last_id++;
		var row = "<tr>"

		+"<td style='width:1%'><input type='checkbox' class='checker panel_head_big' onchange='enable_bt_row_app(this);' " +
				"class='checker' value='"+Txn_id+"'/></td>"
		//+ "<td style='width:1%'><input type='checkbox' class='checker' " +
		//		"onchange='enable_bt_row_appthis);' /></td>"
		+ "<td style='width:4%'><input type='hidden' value='"+Appendix_code+"'>" +Abb_name+"</td>"
		+ "<td style='width:26%'><p align='left'>"+Appendix_name+"</p></td>"
		+ "<td style='width:5%'><input type='hidden' value='"+Version_ID+"'>" +Version_name+"</td>"
		+ "<td style='width:7%'>"+Eff_date+"</td>"
		+ "<td style='width:7%'>"+(Exp_date==null?"31-12-9999":Exp_date)+"</td>"
		+ "<td style='width:10%'>"
		+ "<select id='ICY_type"+last_id+"' class='form-control' readonly style='width:100%'>"+sumpolicy_LookUp
		+ "</select>"+ "</td>"
		+ "<td style='width:10%'><select id='ICN_type"+last_id+"' readonly class='form-control' style='width:100%'>"+sumpolicy_LookUp
		+ "</select>"+ "</td>"
		+ "<td style='width:10%'><select id='SBY_type"+last_id+"' readonly class='form-control' style='width:100%'>"+sumpolicy_LookUp
		+ "</select>"+ "</td>"
		+ "<td style='width:10%'><select id='SBN_type"+last_id+"' readonly class='form-control' style='width:100%'>"+sumpolicy_LookUp
		+ "</select>"+ "</td>"
//		if(true){
//			row =row+ "<td style='width:8%'><input type='text' value='"+Txn_status+"' class='form-control' disabled='disabled' style='width:100%'/></td>"
//		}else{
//			row =row+ "<td style='width:8%'><input type='text' value='"+"รออนุมัติ"+"' class='form-control' disabled='disabled' style='width:100%'/></td>"
//		}
		if(Txn_id>0){
			row =row+ "<td style='width:8%'>"+Txn_status+"</td>"
		}else{
			row =row+ "<td style='width:8%'>"+"สร้างใหม่"+"</td>"
		}
		row =row+ "</tr>";

        $("#tb_tab1_listAppendix_accum tbody").append(row);
        
        //SET exam_type from DB TO column
        $("#ICY_type"+last_id+" option[value="+IC_Yes+"]").attr('selected', true);
        $("#ICN_type"+last_id+" option[value="+IC_No+"]").attr('selected', true);
        $("#SBY_type"+last_id+" option[value="+Sub_Yes+"]").attr('selected', true);
        $("#SBN_type"+last_id+" option[value="+Sub_No+"]").attr('selected', true);

	}
	
	
	
	$('#tb_tab1_listAppendix_accum').DataTable({"paging": false,"bDestroy": true,"bPaginate": false,"bFilter" : false,"bInfo" : false,"ordering": false,"scrollY": "350px","sScrollX": true,"sScrollXInner": "170%","searching" :false,"bScrollCollapse": true
		,fixedColumns:   {
	            leftColumns: 3,
	            rightColumns: 0
	        }
	 });
	$("#tb_tab1_listAppendix_accum_wrapper .DTFC_LeftBodyWrapper").css("top","-6px");
	
}
/*1.1 dataSave */
function dataSaveTab1(){
	
	/*ตารางทุพพลภาพ*/
	var appendix_SA_data = [];
	var count=0;
	$("#tb_tab1_listAppendix_accum tbody>tr").each(function(){
		if($(this).find("input:checkbox").prop("checked") == true){
			obj = {};
			//;
			obj["Appendix_code"] = $(this).find("td:nth-child(2) input").val();
			obj["Version_ID"] = $(this).find("td:nth-child(4) input").val();
			obj["IC_Yes"] = $(this).find("td:nth-child(7) select").val();
			obj["IC_No"] = $(this).find("td:nth-child(8) select").val();
			obj["Sub_Yes"] = $(this).find("td:nth-child(9) select").val();
			obj["Sub_No"] = $(this).find("td:nth-child(10) select").val();
			appendix_SA_data.push(obj);
			
			count++;
		}		
	});
	if(count==0){
		alert("กรุณาเลือกรายการที่ต้องการบันทึก")
	}else{
	var json_data = {
        	"method": "Tab_Appendix_SA",
            "appendix_sa_data": JSON.stringify(appendix_SA_data)
	}

	$.ajax({
		url: 'UW_SaveData_Servlet',
		type: "POST",
		data: json_data,
		success: function (response) {
			//;
			$("#tb_tab1_listAppendix_accum tbody>tr").each(function() {
				if ($(this).find('td:nth-child(1) input').is(':checked')) {
					$(this).find('td:nth-child(1) input').attr("disabled", false).prop("checked",false);
					$(this).find('td:nth-child(7) select').attr("readonly", true);
					$(this).find('td:nth-child(8) select').attr("readonly", true);
					$(this).find('td:nth-child(9) select').attr("readonly", true);
					$(this).find('td:nth-child(10) select').attr("readonly",true);
						
				}
		    });
			$("#bt_submit1").attr("disabled", true);
			Statuesave="Y";
			
			
		}
	});
console.log("data:",json_data);

$("#bt1_add_med").attr("disabled", false);
$("#bt1_delete_med").attr("disabled", true);
$("#bt1_submit_med").attr("disabled", true);
	}
/*end create json*/
}
function set_Txn_id_to_row_Tab1(value){
	
	$("#tb_tab1_listAppendix_accum tbody>tr").each(function(){
		if($(this).find("input:checkbox").prop("checked") == true){
			
			$(this).find('td:nth-child(1) input').prop("checked", false).val(value);
			
		}
	});	
}

/*1.1 dataSave */
function dataSaveNewTab1(){
	
	/*ตารางทุพพลภาพ*/
	var appendix_SA_data = [];
	var count=0;
	$("#tb_tab1_listAppendix_accum tbody>tr").each(function(){
		if($(this).find("input:checkbox").prop("checked") == true){
			obj = {};
			//;
			obj["Appendix_code"] = $(this).find("td:nth-child(2) input").val();
			obj["Version_ID"] = $(this).find("td:nth-child(4) input").val();
			obj["IC_Yes"] = $(this).find("td:nth-child(7) select").val();
			obj["IC_No"] = $(this).find("td:nth-child(8) select").val();
			obj["Sub_Yes"] = $(this).find("td:nth-child(9) select").val();
			obj["Sub_No"] = $(this).find("td:nth-child(10) select").val();
			obj["Txn_id"] = $(this).find("td:nth-child(1) input").val();
			appendix_SA_data.push(obj);
			
			count++;
		}		
	});
	if(count==0){
		alert("กรุณาเลือกรายการที่ต้องการบันทึก")
	}else{
	var json_data = {
        	"method": "Tab_DraftAppendix_SA",
            "appendix_sa_data": JSON.stringify(appendix_SA_data)
	}

	$.ajax({
		url: 'UW_SaveData_Servlet',
		type: "POST",
		data: json_data,
		success: function (response) {
			//;
			$("#tb_tab1_listAppendix_accum tbody>tr").each(function() {
				if ($(this).find('td:nth-child(1) input').is(':checked')) {
					$(this).find('td:nth-child(7) select').attr("readonly", true);
					$(this).find('td:nth-child(8) select').attr("readonly", true);
					$(this).find('td:nth-child(9) select').attr("readonly", true);
					$(this).find('td:nth-child(10) select').attr("readonly",true);
					var row_status=$(this).find('td:nth-child(11) ').text();
					$(this).find('td:nth-child(11) ').text(row_status);	
				}
		    });
			;
			$("#bt_submit1").attr("disabled", true);
			Statuesave="Y";
			
			set_Txn_id_to_row_Tab1(response);
		}
	});
console.log("data:",json_data);

$("#bt1_add_med")		.attr("disabled", false);
$("#bt1_delete_med")	.attr("disabled", true);
$("#bt1_submit_med")	.attr("disabled", true);

$("#bt_submit1")		.attr("disabled", true);
$("#bt1_cancel_med")	.attr("disabled", true);
$("#bt1_cancel_med2")	.attr("disabled", true);
$("#bt1_appr_med")		.attr("disabled", true);
$("#bt1_not_appr_med")	.attr("disabled", true);
$("#bt1_req_med")		.attr("disabled", true);
$("#bt_submit1")		.attr("disabled", true);
$("#bt1_his_med")		.attr("disabled", true);
	}
/*end create json*/
}
function dataSaveReqTab1(){
	var Appendix_code="";
	var Appendix_name="";
	var Version_name="";
	var IC_Yes="";
	var IC_No="";
	var Sub_Yes="";
	var Sub_No="";
	var Start_date="";
	var End_date="";
	/*ตารางทุพพลภาพ*/
	var appendix_SA_data = [];
	var count=0;
	$("#tb_tab1_listAppendix_accum tbody>tr").each(function(){
		if($(this).find("input:checkbox").prop("checked") == true){
			obj = {};
			//;
			obj["Appendix_code"] = $(this).find("td:nth-child(2) input").val();
			obj["Version_ID"] = $(this).find("td:nth-child(4) input").val();
			obj["IC_Yes"] 	= $(this).find("td:nth-child(7) select").val();
			obj["IC_No"] 	= $(this).find("td:nth-child(8) select").val();
			obj["Sub_Yes"] 	= $(this).find("td:nth-child(9) select").val();
			obj["Sub_No"] 	= $(this).find("td:nth-child(10) select").val();
			obj["Txn_id"] 	= $(this).find("td:nth-child(1) input").val();
			;
			IC_Yes 	= $(this).find("td:nth-child(7) option:selected").text();
			IC_No 	= $(this).find("td:nth-child(8) option:selected").text();
			Sub_Yes = $(this).find("td:nth-child(9) option:selected").text();
			Sub_No 	= $(this).find("td:nth-child(10) option:selected").text();
			Appendix_code = $(this).find("td:nth-child(2) ").text();
			Appendix_name =	$(this).find("td:nth-child(3) ").text();
			Version_name  =	$(this).find("td:nth-child(4) ").text();
			Start_date 	= $(this).find("td:nth-child(5) ").text();
			End_date 	=	$(this).find("td:nth-child(6) ").text();
			appendix_SA_data.push(obj);
			
			count++;
		}		
	});
	if(count==0){
		alert("กรุณาเลือกรายการที่ต้องการบันทึก")
	}else{
	var json_data = {
        	"method": "Tab_ReqAppendix_SA",
            "appendix_sa_data": JSON.stringify(appendix_SA_data)
	}

	$.ajax({
		url: 'UW_SaveData_Servlet',
		type: "POST",
		data: json_data,
		success: function (response) {
			//;
			$("#tb_tab1_listAppendix_accum tbody>tr").each(function() {
				if ($(this).find('td:nth-child(1) input').is(':checked')) {
					//$(this).find('td:nth-child(1) input').attr("disabled", false).prop("checked",false);
					$(this).find('td:nth-child(7) select').attr("readonly", true);
					$(this).find('td:nth-child(8) select').attr("readonly", true);
					$(this).find('td:nth-child(9) select').attr("readonly", true);
					$(this).find('td:nth-child(10) select').attr("readonly",true);
					$(this).find('td:nth-child(11) ').text("รออนุมัติ");	
						
				}
		    });
			$("#bt_submit1").attr("disabled", true);
			Statuesave="Y";
			
			set_Txn_id_to_row_Tab1(response);
		}
	});
	console.log("data:",json_data);
	
	
	/***  CODE FOR PREPARE AND SEND MAIL  ****/
	var prepareEmail_data = [];
	objEmail = {};
	objEmail["requestApprove"] 		="ขออนุมัติ";
	objEmail["manuName"] 			="เงื่อนไขการรวมทุน";
	objEmail["empNameHide"] 		=$("#empNameHide").val();
	objEmail["empID"] 				=$("#empID").val();
	objEmail["departmentID"] 		=$("#departmentID").val();
	objEmail["departmentHide"] 		=$("#departmentHide").val();
	
	objEmail["appendixValueName"] 	=Appendix_code;
	objEmail["appendixName"] 		=Appendix_name;
	objEmail["Version_name"] 		=Version_name;
	objEmail["Start_date"] 			=Start_date;
	objEmail["End_date"] 			=End_date;
	
	objEmail["IC_Yes"] 			=IC_Yes;
	objEmail["IC_No"] 			=IC_No;
	objEmail["Sub_Yes"] 		=Sub_Yes;
	objEmail["Sub_No"] 			=Sub_No;
	
	objEmail["IC_YesStr"] 			="มีประวัติ IC ตรวจสอบ";
	objEmail["IC_NoStr"] 			="ไม่มีประวัติ IC ตรวจสอบ";
	objEmail["Sub_YesStr"] 			="มี Substandard ตรวจสอบ";
	objEmail["Sub_NoStr"] 			="ไม่มี Substandard ตรวจสอบ";
	
	prepareEmail_data.push(objEmail);
	
	var json_data2 = {
        	"method"		: "send_Email",
        	"OptionEmail"	: "5",
        	"prepareEmail_data"			: JSON.stringify(prepareEmail_data),
	}
	$.ajax({
		url: 'UW_Email_Servlet',
		type: "POST",
		data: json_data2,
		success: function (response) {
			
		}
	});
	
	/***  END CODE FOR PREPARE AND SEND MAIL  ****/
	
	$("#bt1_add_med")		.attr("disabled", false);
	$("#bt1_delete_med")	.attr("disabled", true);
	$("#bt1_submit_med")	.attr("disabled", true);
	$("#bt_submit1")		.attr("disabled", true);
	$("#bt_submit")			.attr("disabled", true);
	$("#bt1_cancel_med")	.attr("disabled", true);
	$("#bt1_cancel_med2")	.attr("disabled", true);
	$("#bt1_appr_med")		.attr("disabled", true);
	$("#bt1_not_appr_med")	.attr("disabled", true);
	$("#bt1_req_med")		.attr("disabled", true);
	$("#bt_submit1")		.attr("disabled", true);
	$("#bt1_his_med")		.attr("disabled", true);
	$("#bt1_req_edit2")		.attr("disabled", true);
	}
/*end create json*/
}

function dataSaveReqEditTab1(){
	var Appendix_code="";
	var Appendix_name="";
	var Version_name="";
	var IC_Yes="";
	var IC_No="";
	var Sub_Yes="";
	var Sub_No="";
	var Start_date="";
	var End_date="";
	/*ตารางทุพพลภาพ*/
	var appendix_SA_data = [];
	var count=0;
	$("#tb_tab1_listAppendix_accum tbody>tr").each(function(){
		if($(this).find("input:checkbox").prop("checked") == true){
			obj = {};
			//;
			obj["Appendix_code"] = $(this).find("td:nth-child(2) input").val();
			obj["Version_ID"] = $(this).find("td:nth-child(4) input").val();
			obj["IC_Yes"] = $(this).find("td:nth-child(7) select").val();
			obj["IC_No"] = $(this).find("td:nth-child(8) select").val();
			obj["Sub_Yes"] = $(this).find("td:nth-child(9) select").val();
			obj["Sub_No"] = $(this).find("td:nth-child(10) select").val();
			obj["Txn_id"] = $(this).find("td:nth-child(1) input").val();
			
			IC_Yes 	= $(this).find("td:nth-child(7) option:selected").text();
			IC_No 	= $(this).find("td:nth-child(8) option:selected").text();
			Sub_Yes = $(this).find("td:nth-child(9) option:selected").text();
			Sub_No 	= $(this).find("td:nth-child(10) option:selected").text();
			Appendix_code = $(this).find("td:nth-child(2) ").text();
			Appendix_name =	$(this).find("td:nth-child(3) ").text();
			Version_name  =	$(this).find("td:nth-child(4) ").text();
			Start_date 	= $(this).find("td:nth-child(5) ").text();
			End_date 	=	$(this).find("td:nth-child(6) ").text();
			
			appendix_SA_data.push(obj);
			
			count++;
		}		
	});
	if(count==0){
		alert("กรุณาเลือกรายการที่ต้องการบันทึก")
	}else{
	var json_data = {
        	"method": "Tab_ReqEditAppendix_SA",
            "appendix_sa_data": JSON.stringify(appendix_SA_data)
	}

	$.ajax({
		url: 'UW_SaveData_Servlet',
		type: "POST",
		data: json_data,
		success: function (response) {
			//;
			$("#tb_tab1_listAppendix_accum tbody>tr").each(function() {
				if ($(this).find('td:nth-child(1) input').is(':checked')) {
					//$(this).find('td:nth-child(1) input').attr("disabled", false).prop("checked",false);
					$(this).find('td:nth-child(7) select').attr("readonly", true);
					$(this).find('td:nth-child(8) select').attr("readonly", true);
					$(this).find('td:nth-child(9) select').attr("readonly", true);
					$(this).find('td:nth-child(10) select').attr("readonly",true);
					$(this).find('td:nth-child(11) ').text("ขอแก้ไข");	
						
				}
		    });
			$("#bt_submit1").attr("disabled", true);
			Statuesave="Y";
			
			set_Txn_id_to_row_Tab1(response);
			
			
			/***  CODE FOR PREPARE AND SEND MAIL  ****/
			var prepareEmail_data = [];
			objEmail = {};
			objEmail["requestApprove"] 		="ขออนุมัติแก้ไข";
			objEmail["manuName"] 			="เงื่อนไขการรวมทุน";
			objEmail["empNameHide"] 		=$("#empNameHide").val();
			objEmail["empID"] 				=$("#empID").val();
			objEmail["departmentID"] 		=$("#departmentID").val();
			objEmail["departmentHide"] 		=$("#departmentHide").val();
			
			objEmail["appendixValueName"] 	=Appendix_code;
			objEmail["appendixName"] 		=Appendix_name;
			objEmail["Version_name"] 		=Version_name;
			objEmail["Start_date"] 			=Start_date;
			objEmail["End_date"] 			=End_date;
			
			objEmail["IC_Yes"] 			=IC_Yes;
			objEmail["IC_No"] 			=IC_No;
			objEmail["Sub_Yes"] 		=Sub_Yes;
			objEmail["Sub_No"] 			=Sub_No;
			
			objEmail["IC_YesStr"] 			="มีประวัติ IC ตรวจสอบ";
			objEmail["IC_NoStr"] 			="ไม่มีประวัติ IC ตรวจสอบ";
			objEmail["Sub_YesStr"] 			="มี Substandard ตรวจสอบ";
			objEmail["Sub_NoStr"] 			="ไม่มี Substandard ตรวจสอบ";
			
			prepareEmail_data.push(objEmail);
			
			var json_data2 = {
		        	"method"		: "send_Email",
		        	"OptionEmail"	: "5",
		        	"prepareEmail_data"			: JSON.stringify(prepareEmail_data),
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
	console.log("data:",json_data);
	
	$("#bt1_add_med").attr("disabled", false);
	$("#bt1_delete_med").attr("disabled", true);
	$("#bt1_submit_med").attr("disabled", true);
	$("#bt_submit1")		.attr("disabled", true);
	$("#bt_submit")		.attr("disabled", true);
	$("#bt1_cancel_med")	.attr("disabled", true);
	$("#bt1_cancel_med2")	.attr("disabled", true);
	$("#bt1_appr_med")		.attr("disabled", true);
	$("#bt1_not_appr_med")	.attr("disabled", true);
	$("#bt1_req_med")		.attr("disabled", true);
	$("#bt1_req_edit2")		.attr("disabled", true);
	$("#bt_submit1")		.attr("disabled", true);
	$("#bt1_his_med")		.attr("disabled", true);
	}
/*end create json*/
}
/*1.1 dataSave */
function dataSaveApproveTab1(){
	var Appendix_code="";
	var Appendix_name="";
	var Version_name="";
	var IC_Yes="";
	var IC_No="";
	var Sub_Yes="";
	var Sub_No="";
	var Start_date="";
	var End_date="";
	/*ตารางทุพพลภาพ*/
	var appendix_SA_data = [];
	var count=0;
	var row_status;
	$("#tb_tab1_listAppendix_accum tbody>tr").each(function(){
		if($(this).find("input:checkbox").prop("checked") == true){
			obj = {};
			//;
			obj["Appendix_code"] = $(this).find("td:nth-child(2) input").val();
			obj["Version_ID"] = $(this).find("td:nth-child(4) input").val();
			obj["IC_Yes"] = $(this).find("td:nth-child(7) select").val();
			obj["IC_No"] = $(this).find("td:nth-child(8) select").val();
			obj["Sub_Yes"] = $(this).find("td:nth-child(9) select").val();
			obj["Sub_No"] = $(this).find("td:nth-child(10) select").val();
			obj["Txn_id"] = $(this).find("td:nth-child(1) input").val();
			
			IC_Yes 	= $(this).find("td:nth-child(7) option:selected").text();
			IC_No 	= $(this).find("td:nth-child(8) option:selected").text();
			Sub_Yes = $(this).find("td:nth-child(9) option:selected").text();
			Sub_No 	= $(this).find("td:nth-child(10) option:selected").text();
			Appendix_code = $(this).find("td:nth-child(2) ").text();
			Appendix_name =	$(this).find("td:nth-child(3) ").text();
			Version_name  =	$(this).find("td:nth-child(4) ").text();
			Start_date 	= $(this).find("td:nth-child(5) ").text();
			End_date 	=	$(this).find("td:nth-child(6) ").text();
			
			row_status = $(this).find("td:nth-child(11) ").text();
			appendix_SA_data.push(obj);
			
			count++;
		}		
	});
	

	if(row_status=="ขอแก้ไข"){
		if(count==0){
			alert("กรุณาเลือกรายการที่ต้องการบันทึก")
		}else{
		var json_data = {
	        	"method": "Tab_ApproveEditAppendix_SA",
	            "appendix_sa_data": JSON.stringify(appendix_SA_data)
		}
		
		$.ajax({
			url: 'UW_SaveData_Servlet',
			type: "POST",
			data: json_data,
			success: function (response) {
				//;
				$("#tb_tab1_listAppendix_accum tbody>tr").each(function() {
					if ($(this).find('td:nth-child(1) input').is(':checked')) {
						$(this).find('td:nth-child(1) input').attr("disabled", true).prop("checked",false);
						$(this).find('td:nth-child(7) select').attr("readonly", true);
						$(this).find('td:nth-child(8) select').attr("readonly", true);
						$(this).find('td:nth-child(9) select').attr("readonly", true);
						$(this).find('td:nth-child(10) select').attr("readonly",true);
						$(this).find('td:nth-child(1) input').attr("disabled",true);
						$(this).find('td:nth-child(11) ').text("แก้ไข");		
					}
			    });
				$("#bt_submit1").attr("disabled", true);
				Statuesave="Y";
				
				set_Txn_id_to_row_Tab1(response);
				
				
				/***  CODE FOR PREPARE AND SEND MAIL  ****/
				var prepareEmail_data = [];
				objEmail = {};
				objEmail["requestApprove"] 		="อนุมัติแก้ไข";
				objEmail["manuName"] 			="เงื่อนไขการรวมทุน";
				objEmail["empNameHide"] 		=$("#empNameHide").val();
				objEmail["empID"] 				=$("#empID").val();
				objEmail["departmentID"] 		=$("#departmentID").val();
				objEmail["departmentHide"] 		=$("#departmentHide").val();
				
				objEmail["appendixValueName"] 	=Appendix_code;
				objEmail["appendixName"] 		=Appendix_name;
				objEmail["Version_name"] 		=Version_name;
				objEmail["Start_date"] 			=Start_date;
				objEmail["End_date"] 			=End_date;
				
				objEmail["IC_Yes"] 			=IC_Yes;
				objEmail["IC_No"] 			=IC_No;
				objEmail["Sub_Yes"] 		=Sub_Yes;
				objEmail["Sub_No"] 			=Sub_No;
				
				objEmail["IC_YesStr"] 			="มีประวัติ IC ตรวจสอบ";
				objEmail["IC_NoStr"] 			="ไม่มีประวัติ IC ตรวจสอบ";
				objEmail["Sub_YesStr"] 			="มี Substandard ตรวจสอบ";
				objEmail["Sub_NoStr"] 			="ไม่มี Substandard ตรวจสอบ";
				
				prepareEmail_data.push(objEmail);
				
				var json_data2 = {
			        	"method"		: "send_Email",
			        	"OptionEmail"	: "5",
			        	"prepareEmail_data"			: JSON.stringify(prepareEmail_data),
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
			console.log("data:",json_data);
			
			$("#bt1_add_med").attr("disabled", false);
			$("#bt1_delete_med").attr("disabled", true);
			$("#bt1_submit_med").attr("disabled", true);
			$("#bt_submit1")		.attr("disabled", true);
			$("#bt1_cancel_med")	.attr("disabled", true);
			$("#bt1_cancel_med2")	.attr("disabled", true);
			$("#bt1_appr_med")		.attr("disabled", true);
			$("#bt1_not_appr_med")	.attr("disabled", true);
			$("#bt1_req_med")		.attr("disabled", true);
			$("#bt_submit1")		.attr("disabled", true);
			$("#bt1_his_med")		.attr("disabled", true);
		}
	}else{
		if(count==0){
			alert("กรุณาเลือกรายการที่ต้องการบันทึก")
		}else{
		var json_data = {
	        	"method": "Tab_ApproveAppendix_SA",
	            "appendix_sa_data": JSON.stringify(appendix_SA_data)
		}
		
		
		$.ajax({
			url: 'UW_SaveData_Servlet',
			type: "POST",
			data: json_data,
			success: function (response) {
				//;
				$("#tb_tab1_listAppendix_accum tbody>tr").each(function() {
					if ($(this).find('td:nth-child(1) input').is(':checked')) {
						$(this).find('td:nth-child(1) input').attr("disabled", true).prop("checked",false);
						$(this).find('td:nth-child(7) select').attr("readonly", true);
						$(this).find('td:nth-child(8) select').attr("readonly", true);
						$(this).find('td:nth-child(9) select').attr("readonly", true);
						$(this).find('td:nth-child(10) select').attr("readonly",true);
						$(this).find('td:nth-child(1) input').attr("disabled",true);
						$(this).find('td:nth-child(11) ').text("อนุมัติแล้ว");		
					}
			    });
				$("#bt_submit1").attr("disabled", true);
				Statuesave="Y";
				
				set_Txn_id_to_row_Tab1(response);
				
				/** GEN JSON SETTING CHECKLIST  **/
				var json_data3 = {
			        	"method": "Gen_JSON_Appendix_Sum_Accum",	
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
						objEmail["manuName"] 			="เงื่อนไขการรวมทุน";
						objEmail["empNameHide"] 		=$("#empNameHide").val();
						objEmail["empID"] 				=$("#empID").val();
						objEmail["departmentID"] 		=$("#departmentID").val();
						objEmail["departmentHide"] 		=$("#departmentHide").val();
						
						objEmail["appendixValueName"] 	=Appendix_code;
						objEmail["appendixName"] 		=Appendix_name;
						objEmail["Version_name"] 		=Version_name;
						objEmail["Start_date"] 			=Start_date;
						objEmail["End_date"] 			=End_date;
						
						objEmail["IC_Yes"] 			=IC_Yes;
						objEmail["IC_No"] 			=IC_No;
						objEmail["Sub_Yes"] 		=Sub_Yes;
						objEmail["Sub_No"] 			=Sub_No;
						
						objEmail["IC_YesStr"] 			="มีประวัติ IC ตรวจสอบ";
						objEmail["IC_NoStr"] 			="ไม่มีประวัติ IC ตรวจสอบ";
						objEmail["Sub_YesStr"] 			="มี Substandard ตรวจสอบ";
						objEmail["Sub_NoStr"] 			="ไม่มี Substandard ตรวจสอบ";
						
						prepareEmail_data.push(objEmail);
						
						var json_data2 = {
					        	"method"		: "send_Email",
					        	"OptionEmail"	: "5",
					        	"prepareEmail_data"			: JSON.stringify(prepareEmail_data),
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
				
				
				
//				/***  CODE FOR PREPARE AND SEND MAIL  ****/
//				var prepareEmail_data = [];
//				objEmail = {};
//				objEmail["requestApprove"] 		="อนุมัติ";
//				objEmail["manuName"] 			="เงื่อนไขการรวมทุน";
//				objEmail["empNameHide"] 		=$("#empNameHide").val();
//				objEmail["empID"] 				=$("#empID").val();
//				objEmail["departmentID"] 		=$("#departmentID").val();
//				objEmail["departmentHide"] 		=$("#departmentHide").val();
//				
//				objEmail["appendixValueName"] 	=Appendix_code;
//				objEmail["appendixName"] 		=Appendix_name;
//				objEmail["Version_name"] 		=Version_name;
//				objEmail["Start_date"] 			=Start_date;
//				objEmail["End_date"] 			=End_date;
//				
//				objEmail["IC_Yes"] 			=IC_Yes;
//				objEmail["IC_No"] 			=IC_No;
//				objEmail["Sub_Yes"] 		=Sub_Yes;
//				objEmail["Sub_No"] 			=Sub_No;
//				
//				objEmail["IC_YesStr"] 			="มีประวัติ IC ตรวจสอบ";
//				objEmail["IC_NoStr"] 			="ไม่มีประวัติ IC ตรวจสอบ";
//				objEmail["Sub_YesStr"] 			="มี Substandard ตรวจสอบ";
//				objEmail["Sub_NoStr"] 			="ไม่มี Substandard ตรวจสอบ";
//				
//				prepareEmail_data.push(objEmail);
//				
//				var json_data2 = {
//			        	"method"		: "send_Email",
//			        	"OptionEmail"	: "5",
//			        	"prepareEmail_data"			: JSON.stringify(prepareEmail_data),
//				}
//				$.ajax({
//					url: 'UW_Email_Servlet',
//					type: "POST",
//					data: json_data2,
//					success: function (response) {
//						
//					}
//				});
//				
//				/***  END CODE FOR PREPARE AND SEND MAIL  ****/
			}
		});
		
			console.log("data:",json_data);
			
			$("#bt1_add_med").attr("disabled", false);
			$("#bt1_delete_med").attr("disabled", true);
			$("#bt1_submit_med").attr("disabled", true);
			$("#bt_submit1")		.attr("disabled", true);
			$("#bt1_cancel_med")	.attr("disabled", true);
			$("#bt1_cancel_med2")	.attr("disabled", true);
			$("#bt1_appr_med")		.attr("disabled", true);
			$("#bt1_not_appr_med")	.attr("disabled", true);
			$("#bt1_req_med")		.attr("disabled", true);
			$("#bt_submit1")		.attr("disabled", true);
			$("#bt1_his_med")		.attr("disabled", true);
		}
	}
	
/*end create json*/
}

function dataSaveNotApproveTab1(){
	;
	var Appendix_code="";
	var Appendix_name="";
	var Version_name="";
	var IC_Yes="";
	var IC_No="";
	var Sub_Yes="";
	var Sub_No="";
	var Start_date="";
	var End_date="";
	var approve_not="";
	
	var row_status;
	/*ตารางทุพพลภาพ*/
	var appendix_SA_data = [];
	var count=0;
	$("#tb_tab1_listAppendix_accum tbody>tr").each(function(){
		if($(this).find("input:checkbox").prop("checked") == true){
			obj = {};
			//;
			obj["Appendix_code"] = $(this).find("td:nth-child(2) input").val();
			obj["Version_ID"] = $(this).find("td:nth-child(4) input").val();
			obj["IC_Yes"] = $(this).find("td:nth-child(7) select").val();
			obj["IC_No"] = $(this).find("td:nth-child(8) select").val();
			obj["Sub_Yes"] = $(this).find("td:nth-child(9) select").val();
			obj["Sub_No"] = $(this).find("td:nth-child(10) select").val();
			obj["Txn_id"] = $(this).find("td:nth-child(1) input").val();
			
			IC_Yes 	= $(this).find("td:nth-child(7) option:selected") .text();
			IC_No 	= $(this).find("td:nth-child(8) option:selected") .text();
			Sub_Yes = $(this).find("td:nth-child(9) option:selected") .text();
			Sub_No 	= $(this).find("td:nth-child(10) option:selected").text();
			Appendix_code = $(this).find("td:nth-child(2) ").text();
			Appendix_name =	$(this).find("td:nth-child(3) ").text();
			Version_name  =	$(this).find("td:nth-child(4) ").text();
			Start_date 	= $(this).find("td:nth-child(5) ")  .text();
			End_date 	=	$(this).find("td:nth-child(6) ").text();
			//;
			row_status = $(this).find("td:nth-child(11) ").text();
			approve_note		    = $("#textarea_reason_back").val();
			appendix_SA_data.push(obj);
			
			count++;
		}		
	});
	
	
	if(row_status=="ขอแก้ไข"){
		if(count==0){
			alert("กรุณาเลือกรายการที่ต้องการบันทึก")
		}else{
			var json_data = {
		        	"method"			: "Tab_NotApproveEditAppendix_SA",
		            "appendix_sa_data"	: JSON.stringify(appendix_SA_data),
		            "approve_note"		: approve_note
			}

			$.ajax({
				url: 'UW_SaveData_Servlet',
				type: "POST",
				data: json_data,
				success: function (response) {
					//;
					$("#tb_tab1_listAppendix_accum tbody>tr").each(function() {
						if ($(this).find('td:nth-child(1) input').is(':checked')) {
							$(this).find('td:nth-child(1) input').attr("disabled", false).prop("checked",false);
							$(this).find('td:nth-child(7) select').attr("readonly", true);
							$(this).find('td:nth-child(8) select').attr("readonly", true);
							$(this).find('td:nth-child(9) select').attr("readonly", true);
							$(this).find('td:nth-child(10) select').attr("readonly",true);
							$(this).find('td:nth-child(1) input').attr("disabled",true);
							$(this).find('td:nth-child(11) ').text("อนุมัติแล้ว");	
								
						}
				    });
					$("#bt_submit1").attr("disabled", true);
					Statuesave="Y";
					
					set_Txn_id_to_row_Tab1(response);
					
					/***  CODE FOR PREPARE AND SEND MAIL  ****/
					var prepareEmail_data = [];
					objEmail = {};
					objEmail["requestApprove"] 		="ไม่อนุมัติแก้ไข";
					objEmail["manuName"] 			="เงื่อนไขการรวมทุน";
					objEmail["empNameHide"] 		=$("#empNameHide").val();
					objEmail["empID"] 				=$("#empID").val();
					objEmail["departmentID"] 		=$("#departmentID").val();
					objEmail["departmentHide"] 		=$("#departmentHide").val();
					
					objEmail["appendixValueName"] 	=Appendix_code;
					objEmail["appendixName"] 		=Appendix_name;
					objEmail["Version_name"] 		=Version_name;
					objEmail["Start_date"] 			=Start_date;
					objEmail["End_date"] 			=End_date;
					
					objEmail["IC_Yes"] 			=IC_Yes;
					objEmail["IC_No"] 			=IC_No;
					objEmail["Sub_Yes"] 		=Sub_Yes;
					objEmail["Sub_No"] 			=Sub_No;
					
					objEmail["IC_YesStr"] 			="มีประวัติ IC ตรวจสอบ";
					objEmail["IC_NoStr"] 			="ไม่มีประวัติ IC ตรวจสอบ";
					objEmail["Sub_YesStr"] 			="มี Substandard ตรวจสอบ";
					objEmail["Sub_NoStr"] 			="ไม่มี Substandard ตรวจสอบ";
					
					prepareEmail_data.push(objEmail);
					
					var json_data2 = {
				        	"method"		: "send_Email",
				        	"OptionEmail"	: "5",
				        	"prepareEmail_data"			: JSON.stringify(prepareEmail_data),
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
			console.log("data:",json_data);
			
			$("#bt1_add_med").attr("disabled", false);
			$("#bt1_delete_med").attr("disabled", true);
			$("#bt1_submit_med").attr("disabled", true);
			$("#bt_submit1")		.attr("disabled", true);
			$("#bt1_cancel_med")	.attr("disabled", true);
			$("#bt1_cancel_med2")	.attr("disabled", true);
			$("#bt1_appr_med")		.attr("disabled", true);
			$("#bt1_not_appr_med")	.attr("disabled", true);
			$("#bt1_req_med")		.attr("disabled", true);
			$("#bt_submit1")		.attr("disabled", true);
			$("#bt1_his_med")		.attr("disabled", true);
		}
	}else{
		if(count==0){
			alert("กรุณาเลือกรายการที่ต้องการบันทึก")
		}else{
			var json_data = {
		        	"method"			: "Tab_NotApproveAppendix_SA",
		            "appendix_sa_data"	: JSON.stringify(appendix_SA_data),
		            "approve_note"		: approve_note
			}

			$.ajax({
				url: 'UW_SaveData_Servlet',
				type: "POST",
				data: json_data,
				success: function (response) {
					//;
					$("#tb_tab1_listAppendix_accum tbody>tr").each(function() {
						if ($(this).find('td:nth-child(1) input').is(':checked')) {
							$(this).find('td:nth-child(1) input').attr("disabled", false).prop("checked",false);
							$(this).find('td:nth-child(7) select').attr("readonly", true);
							$(this).find('td:nth-child(8) select').attr("readonly", true);
							$(this).find('td:nth-child(9) select').attr("readonly", true);
							$(this).find('td:nth-child(10) select').attr("readonly",true);
							$(this).find('td:nth-child(1) input').attr("disabled",true);
							$(this).find('td:nth-child(11) ').text("ไม่อนุมัติ");	
								
						}
				    });
					$("#bt_submit1").attr("disabled", true);
					Statuesave="Y";
					
					set_Txn_id_to_row_Tab1(response);
					
					/***  CODE FOR PREPARE AND SEND MAIL  ****/
					var prepareEmail_data = [];
					objEmail = {};
					objEmail["requestApprove"] 		="ไม่อนุมัติ";
					objEmail["manuName"] 			="เงื่อนไขการรวมทุน";
					objEmail["empNameHide"] 		=$("#empNameHide").val();
					objEmail["empID"] 				=$("#empID").val();
					objEmail["departmentID"] 		=$("#departmentID").val();
					objEmail["departmentHide"] 		=$("#departmentHide").val();
					
					objEmail["appendixValueName"] 	=Appendix_code;
					objEmail["appendixName"] 		=Appendix_name;
					objEmail["Version_name"] 		=Version_name;
					objEmail["Start_date"] 			=Start_date;
					objEmail["End_date"] 			=End_date;
					
					objEmail["IC_Yes"] 			=IC_Yes;
					objEmail["IC_No"] 			=IC_No;
					objEmail["Sub_Yes"] 		=Sub_Yes;
					objEmail["Sub_No"] 			=Sub_No;
					
					objEmail["IC_YesStr"] 			="มีประวัติ IC ตรวจสอบ";
					objEmail["IC_NoStr"] 			="ไม่มีประวัติ IC ตรวจสอบ";
					objEmail["Sub_YesStr"] 			="มี Substandard ตรวจสอบ";
					objEmail["Sub_NoStr"] 			="ไม่มี Substandard ตรวจสอบ";
					
					prepareEmail_data.push(objEmail);
					
					var json_data2 = {
				        	"method"		: "send_Email",
				        	"OptionEmail"	: "5",
				        	"prepareEmail_data"			: JSON.stringify(prepareEmail_data),
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
			console.log("data:",json_data);
			
			$("#bt1_add_med").attr("disabled", false);
			$("#bt1_delete_med").attr("disabled", true);
			$("#bt1_submit_med").attr("disabled", true);
			$("#bt_submit1")		.attr("disabled", true);
			$("#bt1_cancel_med")	.attr("disabled", true);
			$("#bt1_cancel_med2")	.attr("disabled", true);
			$("#bt1_appr_med")		.attr("disabled", true);
			$("#bt1_not_appr_med")	.attr("disabled", true);
			$("#bt1_req_med")		.attr("disabled", true);
			$("#bt_submit1")		.attr("disabled", true);
			$("#bt1_his_med")		.attr("disabled", true);
		}
	}
	
/*end create json*/
}
/***************************** Tab 3 สถานะกรรมธรรม์ ********************************/
//
//$("#menu_TC_3").click(function(){
//	
//})

function ShowStatusPolicyGROUP(value) {
	
	var Policy_code        = "";
	var Is_insure_sum	 	 = "";
	var Is_med_sum		     = "";
	var Is_rider_sum		 = "";
	var Is_sum_for_rider		 = "";
	var Txn_id=0;
	var Txn_status="";
	var statusname		 = "";
	var row = "";
	$('#tb_tab1_listStatusInsurance').DataTable().destroy();
	$("#tb_tab1_listStatusInsurance tbody").find("tr").remove();
	var last_id=0;
	//;
	for(var i = 0; i < value.PolicyAccumStatusGroupLifes_Data.length; i++){
		Policy_code 		 = value.PolicyAccumStatusGroupLifes_Data[i].Policy_code;
		statusname		 	 = value.PolicyAccumStatusGroupLifes_Data[i].statusname;
		Is_insure_sum		 = value.PolicyAccumStatusGroupLifes_Data[i].Is_insure_sum;
		Is_med_sum		 	 = value.PolicyAccumStatusGroupLifes_Data[i].Is_med_sum;
		Is_rider_sum		 = value.PolicyAccumStatusGroupLifes_Data[i].Is_rider_sum;
		Is_sum_for_rider	 = value.PolicyAccumStatusGroupLifes_Data[i].Is_sum_for_rider;
		Txn_id	 			 = value.PolicyAccumStatusGroupLifes_Data[i].Txn_id;
		Txn_status	 	     = value.PolicyAccumStatusGroupLifes_Data[i].Txn_status;
		
        last_id++; 
		var row = "<tr>"
		+ "<td style='width:5%'><input type='checkbox' class='rd_checker panel_head_big' value='"+Txn_id+"' onchange='enable_bt_row_indiv(this);' style='width:100%'/></td>"
		+ "<td style='width:5%'>"+Policy_code+"</td>"
		+ "<td style='width:38%'><p align='left'>"+statusname+"</p></td>"
		if(Is_insure_sum){
			row = row+ "<td style='width:10%'><input type='checkbox' class='rd_checker panel_head_big' disabled checked style='width:100%'/></td>"
		}else{
			row = row+ "<td style='width:10%'><input type='checkbox' class='rd_checker panel_head_big' disabled style='width:100%'/></td>"
		}
		if(Is_med_sum){
			row = row+ "<td style='width:10%'><input type='checkbox' class='rd_checker panel_head_big' disabled checked style='width:100%'/></td>"
		}else{
			row = row+ "<td style='width:10%'><input type='checkbox' class='rd_checker panel_head_big' disabled style='width:100%'/></td>"
		}
		if(Is_rider_sum){
			row = row+ "<td style='width:10%'><input type='checkbox' class='rd_checker panel_head_big' disabled checked style='width:100%'/></td>"
		}else{
			row = row+ "<td style='width:10%'><input type='checkbox' class='rd_checker panel_head_big' disabled  style='width:100%'/></td>"
		}
		if(Is_sum_for_rider){
			row = row+ "<td style='width:10%'><input type='checkbox' class='rd_checker panel_head_big' disabled checked style='width:100%'/></td>"
		}else{
			row = row+ "<td style='width:10%'><input type='checkbox' class='rd_checker panel_head_big'  disabled style='width:100%'/></td>"
		}
		row = row+ "<td style='width:12%'>"+Txn_status+"</td>"
		
		row=row+ "</tr>";

        $("#tb_tab1_listStatusInsurance tbody").append(row);

	}

	$('#tb_tab1_listStatusInsurance').DataTable({"bScrollCollapse" : true,"ordering" : true,"bDestroy" : true,
		"bPaginate" : false,"bFilter" : false,"bLengthChange" : false,bInfo : false,
		scrollCollapse : true,
		
	});
	//$('.sorting_asc').removeClass('sorting_asc');
	$('#tb_tab1_listStatusInsurance').DataTable({"paging": false,"bDestroy": true,"bPaginate": false,"bFilter" : false,"bInfo" : false,"ordering": false,"sScrollY": "180px","searching" :false,scrollCollapse: true });
	$("#tb_tab1_listStatusInsurance_wrapper .dataTables_scrollHeadInner").css({"width":"100%"});
	$("#tb_tab1_listStatusInsurance_wrapper .table").css({"width":"100%"});
	 
	 
}

function ShowStatusPolicyIND(value) {
	
	var Policy_code        = "";
	var Is_insure_sum	 	 = "";
	var Is_med_sum		     = "";
	var Is_rider_sum		 = "";
	var Is_sum_for_rider		 = "";
	var statusname;
	var Txn_id=0;
	var row = "";
	$('#tb_tab1_listStatusInsurance2').DataTable().destroy();
	$("#tb_tab1_listStatusInsurance2 tbody").find("tr").remove();
	var last_id=0;
	var Txn_status;
	//;
	for(var i = 0; i < value.PolicyAccumStatusIndividualLifes_Data.length; i++){
		Policy_code 		 = value.PolicyAccumStatusIndividualLifes_Data[i].Policy_code;
		statusname		 	 = value.PolicyAccumStatusIndividualLifes_Data[i].statusname;
		Is_insure_sum		 = value.PolicyAccumStatusIndividualLifes_Data[i].Is_insure_sum;
		Is_med_sum		 	 = value.PolicyAccumStatusIndividualLifes_Data[i].Is_med_sum;
		Is_rider_sum		 = value.PolicyAccumStatusIndividualLifes_Data[i].Is_rider_sum;
		Is_sum_for_rider	 = value.PolicyAccumStatusIndividualLifes_Data[i].Is_sum_for_rider;
		//;
		Txn_id	 			 = value.PolicyAccumStatusIndividualLifes_Data[i].Txn_id;
		Txn_status	 	     = value.PolicyAccumStatusIndividualLifes_Data[i].Txn_status;
        last_id++;
		var row = "<tr>"
		+ "<td style='width:5%'><input type='checkbox' class='rd_checker panel_head_big' value='"+Txn_id+"' onchange='enable_bt_row_group(this);'  style='width:100%'/></td>"
		+ "<td style='width:5%'>"+Policy_code+"</td>"
		+ "<td style='width:38%'><p align='left'>"+statusname+"</p></td>"
		if(Is_insure_sum){
			row = row+ "<td style='width:10%'><input type='checkbox' class='rd_checker panel_head_big' disabled style='width:100%' checked/></td>"
		}else{
			row = row+ "<td style='width:10%'><input type='checkbox' class='rd_checker panel_head_big' disabled style='width:100%'/></td>"
		}
		if(Is_med_sum){
			row = row+ "<td style='width:10%'><input type='checkbox' class='rd_checker panel_head_big' disabled style='width:100%' checked/></td>"
		}else{
			row = row+ "<td style='width:10%'><input type='checkbox' class='rd_checker panel_head_big' disabled style='width:100%'/></td>"
		}
		if(Is_rider_sum){
			row = row+ "<td style='width:10%'><input type='checkbox' class='rd_checker panel_head_big' disabled style='width:100%' checked/></td>"
		}else{
			row = row+ "<td style='width:10%'><input type='checkbox' class='rd_checker panel_head_big' disabled style='width:100%'/></td>"
		}
		if(Is_sum_for_rider){
			row = row+ "<td style='width:10%'><input type='checkbox' class='rd_checker panel_head_big' disabled style='width:100%' checked/></td>"
		}else{
			row = row+ "<td style='width:10%'><input type='checkbox' class='rd_checker panel_head_big' disabled style='width:100%'/></td>"
		}
		row = row+ "<td style='width:12%'>"+Txn_status+"</td>"
		row=row+ "</tr>";

        $("#tb_tab1_listStatusInsurance2 tbody").append(row);

	}

	$('#tb_tab1_listStatusInsurance2').DataTable({"bScrollCollapse" : true,"ordering" : true,"bDestroy" : true,
		"bPaginate" : false,"bFilter" : false,"bLengthChange" : false,bInfo : false,
		scrollCollapse : true,
		
	});
	//$('.sorting_asc').removeClass('sorting_asc');
	$('#tb_tab1_listStatusInsurance2').DataTable({"paging": false,"bDestroy": true,"bPaginate": false,"bFilter" : false,"bInfo" : false,"ordering": false,"sScrollY": "180px","searching" :false,scrollCollapse: true });

	$("#tb_tab1_listStatusInsurance2_wrapper .dataTables_scrollHeadInner").css({"width":"100%"});
	$("#tb_tab1_listStatusInsurance2_wrapper .table").css({"width":"100%"});
	$('.sorting_asc').removeClass('sorting_asc');
		
}

function set_txn_id_Tab3_1(value){
	$("#tb_tab1_listStatusInsurance tbody>tr").each(function() {
		if ($(this).find('td:nth-child(1) input').is(':checked')) {
			$(this).find('td:nth-child(1) input').prop("checked",false).val(value);
			
		}
    });
}
function set_txn_id_Tab3_2(value){
	$("#tb_tab1_listStatusInsurance2 tbody>tr").each(function() {
		if ($(this).find('td:nth-child(1) input').is(':checked')) {
			$(this).find('td:nth-child(1) input').prop("checked",false).val(value);
			
		}
    });
}

/*3.1 dataSave */

function dataSaveTab3_1(){
	
	/*ตารางทุพพลภาพ*/
	var policyG_data = [];
	var count = 0;
	$("#tb_tab1_listStatusInsurance tbody>tr").each(function(){
		if($(this).find("input:checkbox").prop("checked") == true){
			obj = {};
			//;
			obj["Policy_code"] = $(this).find("td:nth-child(2) ").text();
			obj["Cov_cat_id"] = 2; //cov_cat_id =2 is Group,1 is individual
			obj["Is_insure_sum"] 	= $(this).find("td:nth-child(4) input").prop("checked");
			obj["Is_med_sum"] 		= $(this).find("td:nth-child(5) input").prop("checked");
			obj["Is_rider_sum"] 	= $(this).find("td:nth-child(6) input").prop("checked");
			obj["Is_sum_for_rider"] = $(this).find("td:nth-child(7) input").prop("checked");
			policyG_data.push(obj);
			
			count++;
		}		
	});
	
	var json_data = {
        	"method": "Tab_PolicyStatus",
            "policyG_data": JSON.stringify(policyG_data)
	}
	if(count==0){
		alert("กรุณาเลือกรายการที่ต้องการบันทึก")
	}else{
		$.ajax({
			url: 'UW_SaveData_Servlet',
			type: "POST",
			data: json_data,
			success: function (response) {
				//;
				$("#tb_tab1_listStatusInsurance tbody>tr").each(function() {
					if ($(this).find('td:nth-child(1) input').is(':checked')) {
						$(this).find('td:nth-child(1) input').attr("disabled", false).prop("checked",false);
						$(this).find('td:nth-child(4) input').attr("disabled", true);
						$(this).find('td:nth-child(5) input').attr("disabled", true);
						$(this).find('td:nth-child(6) input').attr("disabled", true);
						$(this).find('td:nth-child(7) input').attr("disabled", true);
							
					}
			    });
			    
			}
		});
	console.log("data:",json_data);
	Statuesave="Y";
	$("#bt_submit3").attr("disabled", true);
	}
/*end create json*/
}
function dataSaveNewTab3_1(){
	;
	/*ตารางทุพพลภาพ*/
	var policyG_data = [];
	var Txn_id=0;
	var count = 0;
	$("#tb_tab1_listStatusInsurance tbody>tr").each(function(){
		if($(this).find("input:checkbox").prop("checked") == true){
			obj = {};
			//;
			obj["Policy_code"] = $(this).find("td:nth-child(2) ").text();
			obj["Cov_cat_id"] = 2; //cov_cat_id =2 is Group,1 is individual
			obj["Is_insure_sum"] 	= $(this).find("td:nth-child(4) input").prop("checked");
			obj["Is_med_sum"] 		= $(this).find("td:nth-child(5) input").prop("checked");
			obj["Is_rider_sum"] 	= $(this).find("td:nth-child(6) input").prop("checked");
			obj["Is_sum_for_rider"] = $(this).find("td:nth-child(7) input").prop("checked");
			obj["Txn_id"] = $(this).find("td:nth-child(1) input").val()==null?0:$(this).find("td:nth-child(1) input").val();
			policyG_data.push(obj);
			
			count++;
		}		
	});
	
	var json_data = {
        	"method": "Tab_PolicyStatusNew",
            "policyG_data": JSON.stringify(policyG_data)
	}
	if(count==0){
		alert("กรุณาเลือกรายการที่ต้องการบันทึก")
	}else{
		$.ajax({
			url: 'UW_SaveData_Servlet',
			type: "POST",
			data: json_data,
			success: function (response) {
				//;
				$("#tb_tab1_listStatusInsurance tbody>tr").each(function() {
					if ($(this).find('td:nth-child(1) input').is(':checked')) {
						//$(this).find('td:nth-child(1) input').attr("disabled", false).prop("checked",false);
						$(this).find('td:nth-child(4) input').attr("disabled", true);
						$(this).find('td:nth-child(5) input').attr("disabled", true);
						$(this).find('td:nth-child(6) input').attr("disabled", true);
						$(this).find('td:nth-child(7) input').attr("disabled", true);
						//$(this).find('td:nth-child(8) ').text("สร้างใหม่");	
						;
						var row_status=$(this).find('td:nth-child(8) ').text();
						$(this).find('td:nth-child(8) ').text(row_status);	
					}
			    });
				set_txn_id_Tab3_1(response);
			    
			}
		});
	console.log("data:",json_data);
	Statuesave="Y";
	$("#bt_submit3").attr("disabled", true);
	
	$("#bt3_req_med")		.attr("disabled", true);
	$("#bt3_his_med")		.attr("disabled", true);
	
	$("#bt3_appr_med")		.attr("disabled", true);
	$("#bt3_not_appr_med")	.attr("disabled", true);
	$("#bt3_cancel_med")	.attr("disabled", true);
	$("#bt3_cancel_med2")	.attr("disabled", true);
	$("#bt1_req_edit3")	.attr("disabled", true);
	}
/*end create json*/
}

function dataSaveReqTab3_1(){
	var Is_insure_sum ;
	var Is_med_sum;
	var Is_rider_sum;
	var Is_sum_for_rider;
	var Policy_code;
	var Policy_name;
	/*ตารางทุพพลภาพ*/
	var policyG_data = [];
	var count = 0;
	$("#tb_tab1_listStatusInsurance tbody>tr").each(function(){
		if($(this).find("input:checkbox").prop("checked") == true){
			obj = {};
			//;
			obj["Policy_code"] = $(this).find("td:nth-child(2) ").text();
			obj["Cov_cat_id"] = 2; //cov_cat_id =2 is Group,1 is individual
			obj["Is_insure_sum"] 	= $(this).find("td:nth-child(4) input").prop("checked");
			obj["Is_med_sum"] 		= $(this).find("td:nth-child(5) input").prop("checked");
			obj["Is_rider_sum"] 	= $(this).find("td:nth-child(6) input").prop("checked");
			obj["Is_sum_for_rider"] = $(this).find("td:nth-child(7) input").prop("checked");
			Is_insure_sum 	= $(this).find("td:nth-child(4) input").prop("checked");
			Is_med_sum 		= $(this).find("td:nth-child(5) input").prop("checked");
			Is_rider_sum 	= $(this).find("td:nth-child(6) input").prop("checked");
			Is_sum_for_rider = $(this).find("td:nth-child(7) input").prop("checked");
			Policy_code= $(this).find("td:nth-child(2) ").text();
			Policy_name= $(this).find("td:nth-child(3) ").text();
			
			obj["Txn_id"] = $(this).find("td:nth-child(1) input").val()==null?0:$(this).find("td:nth-child(1) input").val();
			policyG_data.push(obj);
			
			count++;
		}		
	});
	
	var json_data = {
        	"method": "Tab_PolicyStatusReq",
            "policyG_data": JSON.stringify(policyG_data)
	}
	if(count==0){
		alert("กรุณาเลือกรายการที่ต้องการบันทึก")
	}else{
		$.ajax({
			url: 'UW_SaveData_Servlet',
			type: "POST",
			data: json_data,
			success: function (response) {
				//;
				$("#tb_tab1_listStatusInsurance tbody>tr").each(function() {
					if ($(this).find('td:nth-child(1) input').is(':checked')) {
						//$(this).find('td:nth-child(1) input').attr("disabled", false).prop("checked",false);
						$(this).find('td:nth-child(4) input').attr("disabled", true);
						$(this).find('td:nth-child(5) input').attr("disabled", true);
						$(this).find('td:nth-child(6) input').attr("disabled", true);
						$(this).find('td:nth-child(7) input').attr("disabled", true);
						$(this).find('td:nth-child(8) ').text("รออนุมัติ");		
					}
			    });
				set_txn_id_Tab3_1(response);
			    
			}
		});
	console.log("data:",json_data);
	var prepareEmail_data = [];
	/***  END CODE FOR PREPARE AND SEND MAIL  ****/
	
	objEmail = {};
	objEmail["requestApprove"] 		="ขออนุมัติ";
	objEmail["manuName"] 			="สถานะกรมธรรม์";
	objEmail["empNameHide"] 		=$("#empNameHide").val();
	objEmail["empID"] 				=$("#empID").val();
	objEmail["departmentID"] 		=$("#departmentID").val();
	objEmail["departmentHide"] 		=$("#departmentHide").val();
	
	objEmail["Cov_cat_name"] 		="Group Life";
	objEmail["Policy_code"] 		=Policy_code;
	objEmail["Policy_name"] 		=Policy_name;
	
	objEmail["Is_insure_sum"] 			=Is_insure_sum	==true?"รวมทุนคุ้มครอง(อำนาจรับประกัน)":"";
	objEmail["Is_med_sum"] 				=Is_med_sum		==true?"รวมทุนตรวจสุขภาพ":"";
	objEmail["Is_rider_sum"] 			=Is_rider_sum	==true?"รวมทุนซื้อแนบท้าย":"";
	objEmail["Is_sum_for_rider"] 		=Is_sum_for_rider==true?"รวมทุนแนบท้ายเดิม(Check Max)":"";
	
	prepareEmail_data.push(objEmail);
	
	var json_data2 = {
        	"method"		: "send_Email",
        	"OptionEmail"	: "6",
        	"prepareEmail_data"			: JSON.stringify(prepareEmail_data),
	}
	$.ajax({
		url: 'UW_Email_Servlet',
		type: "POST",
		data: json_data2,
		success: function (response) {
			
		}
	});
	/***  END CODE FOR PREPARE AND SEND MAIL  ****/
	
	
	
	Statuesave="Y";
	$("#bt_submit3").attr("disabled", true);
	$("#bt3_req_med")		.attr("disabled", true);
	$("#bt3_his_med")		.attr("disabled", true);
	
	$("#bt3_appr_med")		.attr("disabled", true);
	$("#bt3_not_appr_med")	.attr("disabled", true);
	$("#bt3_cancel_med")	.attr("disabled", true);
	$("#bt3_cancel_med2")	.attr("disabled", true);
	}
/*end create json*/
}
function dataSaveReqEditTab3_1(){
	;
	var prepareEmail_data = [];
	
	var Is_insure_sum ;
	var Is_med_sum;
	var Is_rider_sum;
	var Is_sum_for_rider;
	var Policy_code;
	var Policy_name;
	/*ตารางทุพพลภาพ*/
	var policyG_data = [];
	var Txn_id=0;
	var count = 0;
	
	var row_status;
	$("#tb_tab1_listStatusInsurance tbody>tr").each(function(){
		if($(this).find("input:checkbox").prop("checked") == true){
			obj = {};
			//;
			obj["Policy_code"] = $(this).find("td:nth-child(2) ").text();
			obj["Cov_cat_id"] = 2; //cov_cat_id =2 is Group,1 is individual
			obj["Is_insure_sum"] 	= $(this).find("td:nth-child(4) input").prop("checked");
			obj["Is_med_sum"] 		= $(this).find("td:nth-child(5) input").prop("checked");
			obj["Is_rider_sum"] 	= $(this).find("td:nth-child(6) input").prop("checked");
			obj["Is_sum_for_rider"] = $(this).find("td:nth-child(7) input").prop("checked");
			obj["Txn_id"] = $(this).find("td:nth-child(1) input").val()==null?0:$(this).find("td:nth-child(1) input").val();
			
			Is_insure_sum 	= $(this).find("td:nth-child(4) input").prop("checked");
			Is_med_sum 		= $(this).find("td:nth-child(5) input").prop("checked");
			Is_rider_sum 	= $(this).find("td:nth-child(6) input").prop("checked");
			Is_sum_for_rider = $(this).find("td:nth-child(7) input").prop("checked");
			Policy_code= $(this).find("td:nth-child(2) ").text();
			Policy_name= $(this).find("td:nth-child(3) ").text();
			
			policyG_data.push(obj);
			
			count++;
		}		
	});
	
	
	
	var json_data = {
        	"method": "Tab_PolicyStatusReqEdit",
            "policyG_data": JSON.stringify(policyG_data)
	}
	if(count==0){
		alert("กรุณาเลือกรายการที่ต้องการบันทึก")
	}else{
		$.ajax({
			url: 'UW_SaveData_Servlet',
			type: "POST",
			data: json_data,
			success: function (response) {
				//;
				$("#tb_tab1_listStatusInsurance tbody>tr").each(function() {
					if ($(this).find('td:nth-child(1) input').is(':checked')) {
						//$(this).find('td:nth-child(1) input').attr("disabled", false).prop("checked",false);
						$(this).find('td:nth-child(4) input').attr("disabled", true);
						$(this).find('td:nth-child(5) input').attr("disabled", true);
						$(this).find('td:nth-child(6) input').attr("disabled", true);
						$(this).find('td:nth-child(7) input').attr("disabled", true);
						$(this).find('td:nth-child(8) ').text("ขอแก้ไข");	
					}
			    });
				set_txn_id_Tab3_1(response);
			    
				
				/***  END CODE FOR PREPARE AND SEND MAIL  ****/
				
				objEmail = {};
				objEmail["requestApprove"] 		="ขออนุมัติแก้ไข";
				objEmail["manuName"] 			="สถานะกรมธรรม์";
				objEmail["empNameHide"] 		=$("#empNameHide").val();
				objEmail["empID"] 				=$("#empID").val();
				objEmail["departmentID"] 		=$("#departmentID").val();
				objEmail["departmentHide"] 		=$("#departmentHide").val();
				
				objEmail["Cov_cat_name"] 		="Group Life";
				objEmail["Policy_code"] 		=Policy_code;
				objEmail["Policy_name"] 		=Policy_name;
				
				objEmail["Is_insure_sum"] 			=Is_insure_sum	==true?"รวมทุนคุ้มครอง(อำนาจรับประกัน)":"";
				objEmail["Is_med_sum"] 				=Is_med_sum		==true?"รวมทุนตรวจสุขภาพ":"";
				objEmail["Is_rider_sum"] 			=Is_rider_sum	==true?"รวมทุนซื้อแนบท้าย":"";
				objEmail["Is_sum_for_rider"] 		=Is_sum_for_rider==true?"รวมทุนแนบท้ายเดิม(Check Max)":"";
				
				prepareEmail_data.push(objEmail);
				
				var json_data2 = {
			        	"method"		: "send_Email",
			        	"OptionEmail"	: "6",
			        	"prepareEmail_data"			: JSON.stringify(prepareEmail_data),
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
	console.log("data:",json_data);
	Statuesave="Y";
	$("#bt_submit3").attr("disabled", true);
	
	$("#bt3_req_med")		.attr("disabled", true);
	$("#bt1_req_edit3")		.attr("disabled", true);
	$("#bt3_req_med")		.attr("disabled", true);
	$("#bt3_his_med")		.attr("disabled", true);
	
	$("#bt3_appr_med")		.attr("disabled", true);
	$("#bt3_not_appr_med")	.attr("disabled", true);
	$("#bt3_cancel_med")	.attr("disabled", true);
	$("#bt3_cancel_med2")	.attr("disabled", true);
	}
/*end create json*/
}

function dataSaveApproveTab3_1(){
	var prepareEmail_data = [];
	var Is_insure_sum ;
	var Is_med_sum;
	var Is_rider_sum;
	var Is_sum_for_rider;
	var Policy_code;
	var Policy_name;
	/*ตารางทุพพลภาพ*/
	var policyG_data = [];
	var count = 0;
	var row_status;
	$("#tb_tab1_listStatusInsurance tbody>tr").each(function(){
		if($(this).find("input:checkbox").prop("checked") == true){
			obj = {};
			//;
			obj["Policy_code"] = $(this).find("td:nth-child(2) ").text();
			obj["Cov_cat_id"] = 2; //cov_cat_id =2 is Group,1 is individual
			obj["Is_insure_sum"] 	= $(this).find("td:nth-child(4) input").prop("checked");
			obj["Is_med_sum"] 		= $(this).find("td:nth-child(5) input").prop("checked");
			obj["Is_rider_sum"] 	= $(this).find("td:nth-child(6) input").prop("checked");
			obj["Is_sum_for_rider"] = $(this).find("td:nth-child(7) input").prop("checked");
			obj["Txn_id"] = $(this).find("td:nth-child(1) input").val()==null?0:$(this).find("td:nth-child(1) input").val();
			row_status=$(this).find("td:nth-child(8) ").text();
			policyG_data.push(obj);
			
			Is_insure_sum 	= $(this).find("td:nth-child(4) input").prop("checked");
			Is_med_sum 		= $(this).find("td:nth-child(5) input").prop("checked");
			Is_rider_sum 	= $(this).find("td:nth-child(6) input").prop("checked");
			Is_sum_for_rider = $(this).find("td:nth-child(7) input").prop("checked");
			Policy_code= $(this).find("td:nth-child(2) ").text();
			Policy_name= $(this).find("td:nth-child(3) ").text();
			
			count++;
		}		
	});
	
	;
	if(row_status=="รออนุมัติ"){
		var json_data = {
	        	"method": "Tab_PolicyStatusApprove",
	            "policyG_data": JSON.stringify(policyG_data)
		}
		if(count==0){
			alert("กรุณาเลือกรายการที่ต้องการบันทึก")
		}else{
			$.ajax({
				url: 'UW_SaveData_Servlet',
				type: "POST",
				data: json_data,
				success: function (response) {
					//;
					$("#tb_tab1_listStatusInsurance tbody>tr").each(function() {
						if ($(this).find('td:nth-child(1) input').is(':checked')) {
							$(this).find('td:nth-child(1) input').attr("disabled", true);
							$(this).find('td:nth-child(4) input').attr("disabled", true);
							$(this).find('td:nth-child(5) input').attr("disabled", true);
							$(this).find('td:nth-child(6) input').attr("disabled", true);
							$(this).find('td:nth-child(7) input').attr("disabled", true);
							$(this).find('td:nth-child(8) ').text("อนุมัติแล้ว");		
						}
				    });
					set_txn_id_Tab3_1(response);
					
					/** GEN JSON SETTING CHECKLIST  **/
					var json_data3 = {
				        	"method": "Gen_JSON_Policy_Status",	
					}
					$.ajax({
						url: 'UW_JSON_Servlet',
						type: "POST",
						data: json_data3,
						success: function (response) {
							/***  START CODE FOR PREPARE AND SEND MAIL  ****/
							
							objEmail = {};
							objEmail["requestApprove"] 		="อนุมัติ";
							objEmail["manuName"] 			="สถานะกรมธรรม์";
							objEmail["empNameHide"] 		=$("#empNameHide").val();
							objEmail["empID"] 				=$("#empID").val();
							objEmail["departmentID"] 		=$("#departmentID").val();
							objEmail["departmentHide"] 		=$("#departmentHide").val();
							
							objEmail["Cov_cat_name"] 		="Group Life";
							objEmail["Policy_code"] 		=Policy_code;
							objEmail["Policy_name"] 		=Policy_name;
							
							objEmail["Is_insure_sum"] 			=Is_insure_sum	==true?"รวมทุนคุ้มครอง(อำนาจรับประกัน)":"";
							objEmail["Is_med_sum"] 				=Is_med_sum		==true?"รวมทุนตรวจสุขภาพ":"";
							objEmail["Is_rider_sum"] 			=Is_rider_sum	==true?"รวมทุนซื้อแนบท้าย":"";
							objEmail["Is_sum_for_rider"] 		=Is_sum_for_rider==true?"รวมทุนแนบท้ายเดิม(Check Max)":"";
							
							prepareEmail_data.push(objEmail);
							
							var json_data2 = {
						        	"method"		: "send_Email",
						        	"OptionEmail"	: "6",
						        	"prepareEmail_data"			: JSON.stringify(prepareEmail_data),
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
					
					
					
				    
					/***  START CODE FOR PREPARE AND SEND MAIL  ****/
					
//					objEmail = {};
//					objEmail["requestApprove"] 		="อนุมัติ";
//					objEmail["manuName"] 			="สถานะกรมธรรม์";
//					objEmail["empNameHide"] 		=$("#empNameHide").val();
//					objEmail["empID"] 				=$("#empID").val();
//					objEmail["departmentID"] 		=$("#departmentID").val();
//					objEmail["departmentHide"] 		=$("#departmentHide").val();
//					
//					objEmail["Cov_cat_name"] 		="Group Life";
//					objEmail["Policy_code"] 		=Policy_code;
//					objEmail["Policy_name"] 		=Policy_name;
//					
//					objEmail["Is_insure_sum"] 			=Is_insure_sum	==true?"รวมทุนคุ้มครอง(อำนาจรับประกัน)":"";
//					objEmail["Is_med_sum"] 				=Is_med_sum		==true?"รวมทุนตรวจสุขภาพ":"";
//					objEmail["Is_rider_sum"] 			=Is_rider_sum	==true?"รวมทุนซื้อแนบท้าย":"";
//					objEmail["Is_sum_for_rider"] 		=Is_sum_for_rider==true?"รวมทุนแนบท้ายเดิม(Check Max)":"";
//					
//					prepareEmail_data.push(objEmail);
//					
//					var json_data2 = {
//				        	"method"		: "send_Email",
//				        	"OptionEmail"	: "6",
//				        	"prepareEmail_data"			: JSON.stringify(prepareEmail_data),
//					}
//					$.ajax({
//						url: 'UW_Email_Servlet',
//						type: "POST",
//						data: json_data2,
//						success: function (response) {
//							
//						}
//					});
					/***  END CODE FOR PREPARE AND SEND MAIL  ****/
				}
			});
		console.log("data:",json_data);
		Statuesave="Y";
		$("#bt_submit3").attr("disabled", true);
		$("#bt3_req_med")		.attr("disabled", true);
		$("#bt3_his_med")		.attr("disabled", true);
		
		$("#bt3_appr_med")		.attr("disabled", true);
		$("#bt3_not_appr_med")	.attr("disabled", true);
		$("#bt3_cancel_med")	.attr("disabled", true);
		$("#bt3_cancel_med2")	.attr("disabled", true);
		}
	}else{
		var json_data = {
	        	"method": "Tab_PolicyStatusApproveEdit",
	            "policyG_data": JSON.stringify(policyG_data)
		}
		if(count==0){
			alert("กรุณาเลือกรายการที่ต้องการบันทึก")
		}else{
			$.ajax({
				url: 'UW_SaveData_Servlet',
				type: "POST",
				data: json_data,
				success: function (response) {
					//;
					$("#tb_tab1_listStatusInsurance tbody>tr").each(function() {
						if ($(this).find('td:nth-child(1) input').is(':checked')) {
							$(this).find('td:nth-child(1) input').attr("disabled", true);
							$(this).find('td:nth-child(4) input').attr("disabled", true);
							$(this).find('td:nth-child(5) input').attr("disabled", true);
							$(this).find('td:nth-child(6) input').attr("disabled", true);
							$(this).find('td:nth-child(7) input').attr("disabled", true);
							$(this).find('td:nth-child(8) ').text("แก้ไข");		
						}
				    });
					set_txn_id_Tab3_1(response);
				    
					/***  END CODE FOR PREPARE AND SEND MAIL  ****/
					
					objEmail = {};
					objEmail["requestApprove"] 		="อนุมัติแก้ไข";
					objEmail["manuName"] 			="สถานะกรมธรรม์";
					objEmail["empNameHide"] 		=$("#empNameHide").val();
					objEmail["empID"] 				=$("#empID").val();
					objEmail["departmentID"] 		=$("#departmentID").val();
					objEmail["departmentHide"] 		=$("#departmentHide").val();
					
					objEmail["Cov_cat_name"] 		="Group Life";
					objEmail["Policy_code"] 		=Policy_code;
					objEmail["Policy_name"] 		=Policy_name;
					
					objEmail["Is_insure_sum"] 			=Is_insure_sum	==true?"รวมทุนคุ้มครอง(อำนาจรับประกัน)":"";
					objEmail["Is_med_sum"] 				=Is_med_sum		==true?"รวมทุนตรวจสุขภาพ":"";
					objEmail["Is_rider_sum"] 			=Is_rider_sum	==true?"รวมทุนซื้อแนบท้าย":"";
					objEmail["Is_sum_for_rider"] 		=Is_sum_for_rider==true?"รวมทุนแนบท้ายเดิม(Check Max)":"";
					
					prepareEmail_data.push(objEmail);
					
					var json_data2 = {
				        	"method"		: "send_Email",
				        	"OptionEmail"	: "6",
				        	"prepareEmail_data"			: JSON.stringify(prepareEmail_data),
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
		console.log("data:",json_data);
		Statuesave="Y";
		$("#bt_submit3").attr("disabled", true);
		$("#bt3_req_med")		.attr("disabled", true);
		$("#bt3_his_med")		.attr("disabled", true);
		
		$("#bt3_appr_med")		.attr("disabled", true);
		$("#bt3_not_appr_med")	.attr("disabled", true);
		$("#bt3_cancel_med")	.attr("disabled", true);
		$("#bt3_cancel_med2")	.attr("disabled", true);
		}
	}
	
/*end create json*/
}

function dataSaveNotApproveTab3_1(){
	var prepareEmail_data = [];
	
	var Is_insure_sum ;
	var Is_med_sum;
	var Is_rider_sum;
	var Is_sum_for_rider;
	var Policy_code;
	var Policy_name;
	
	var approve_note="";
	
	/*ตารางทุพพลภาพ*/
	var policyG_data = [];
	var count = 0;
	var row_status;
	$("#tb_tab1_listStatusInsurance tbody>tr").each(function(){
		if($(this).find("input:checkbox").prop("checked") == true){
			obj = {};
			//;
			;
			obj["Policy_code"] 		= $(this).find("td:nth-child(2) ").text();
			obj["Cov_cat_id"] 		= 2; //cov_cat_id =2 is Group,1 is individual
			obj["Is_insure_sum"] 	= $(this).find("td:nth-child(4) input").prop("checked");
			obj["Is_med_sum"] 		= $(this).find("td:nth-child(5) input").prop("checked");
			obj["Is_rider_sum"] 	= $(this).find("td:nth-child(6) input").prop("checked");
			obj["Is_sum_for_rider"] = $(this).find("td:nth-child(7) input").prop("checked");
			obj["Txn_id"] 			= $(this).find("td:nth-child(1) input").val()==null?0:$(this).find("td:nth-child(1) input").val();
			approve_note		    = $("#textarea_reason_backV").val();
			row_status				= $(this).find("td:nth-child(8) ").text();
			policyG_data.push(obj);
			
			Is_insure_sum 	= $(this).find("td:nth-child(4) input").prop("checked");
			Is_med_sum 		= $(this).find("td:nth-child(5) input").prop("checked");
			Is_rider_sum 	= $(this).find("td:nth-child(6) input").prop("checked");
			Is_sum_for_rider = $(this).find("td:nth-child(7) input").prop("checked");
			Policy_code= $(this).find("td:nth-child(2) ").text();
			Policy_name= $(this).find("td:nth-child(3) ").text();
			
			count++;
		}		
	});
	
	if(row_status=="รออนุมัติ"){
		var json_data = {
	        	"method": "Tab_PolicyStatusNotApprove",
	            "policyG_data": JSON.stringify(policyG_data),
	            approve_note : approve_note
		}
		if(count==0){
			alert("กรุณาเลือกรายการที่ต้องการบันทึก")
		}else{
			$.ajax({
				url: 'UW_SaveData_Servlet',
				type: "POST",
				data: json_data,
				success: function (response) {
					//;
					$("#tb_tab1_listStatusInsurance tbody>tr").each(function() {
						if ($(this).find('td:nth-child(1) input').is(':checked')) {
							$(this).find('td:nth-child(1) input').attr("disabled", true);
							$(this).find('td:nth-child(4) input').attr("disabled", true);
							$(this).find('td:nth-child(5) input').attr("disabled", true);
							$(this).find('td:nth-child(6) input').attr("disabled", true);
							$(this).find('td:nth-child(7) input').attr("disabled", true);
							$(this).find('td:nth-child(8) ').text("ไม่อนุมัติ");		
						}
				    });
					set_txn_id_Tab3_1(response);
				    
					/***  END CODE FOR PREPARE AND SEND MAIL  ****/
					
					objEmail = {};
					objEmail["requestApprove"] 		="ไม่อนุมัติ";
					objEmail["manuName"] 			="สถานะกรมธรรม์";
					objEmail["empNameHide"] 		=$("#empNameHide").val();
					objEmail["empID"] 				=$("#empID").val();
					objEmail["departmentID"] 		=$("#departmentID").val();
					objEmail["departmentHide"] 		=$("#departmentHide").val();
					
					objEmail["Cov_cat_name"] 		="Group Life";
					objEmail["Policy_code"] 		=Policy_code;
					objEmail["Policy_name"] 		=Policy_name;
					
					objEmail["Is_insure_sum"] 			=Is_insure_sum	==true?"รวมทุนคุ้มครอง(อำนาจรับประกัน)":"";
					objEmail["Is_med_sum"] 				=Is_med_sum		==true?"รวมทุนตรวจสุขภาพ":"";
					objEmail["Is_rider_sum"] 			=Is_rider_sum	==true?"รวมทุนซื้อแนบท้าย":"";
					objEmail["Is_sum_for_rider"] 		=Is_sum_for_rider==true?"รวมทุนแนบท้ายเดิม(Check Max)":"";
					
					prepareEmail_data.push(objEmail);
					
					var json_data2 = {
				        	"method"		: "send_Email",
				        	"OptionEmail"	: "6",
				        	"prepareEmail_data"			: JSON.stringify(prepareEmail_data),
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
		console.log("data:",json_data);
		Statuesave="Y";
		$("#bt_submit3").attr("disabled", true);
		$("#bt3_req_med")		.attr("disabled", true);
		$("#bt3_his_med")		.attr("disabled", true);
		
		$("#bt3_appr_med")		.attr("disabled", true);
		$("#bt3_not_appr_med")	.attr("disabled", true);
		$("#bt3_cancel_med")	.attr("disabled", true);
		$("#bt3_cancel_med2")	.attr("disabled", true);
		}
	}else{
		var json_data = {
	        	"method": "Tab_PolicyStatusNotApproveEdit",
	            "policyG_data": JSON.stringify(policyG_data),
	            approve_note : approve_note
		}
		if(count==0){
			alert("กรุณาเลือกรายการที่ต้องการบันทึก")
		}else{
			$.ajax({
				url: 'UW_SaveData_Servlet',
				type: "POST",
				data: json_data,
				success: function (response) {
					//;
					$("#tb_tab1_listStatusInsurance tbody>tr").each(function() {
						if ($(this).find('td:nth-child(1) input').is(':checked')) {
							$(this).find('td:nth-child(1) input').attr("disabled", true);
							$(this).find('td:nth-child(4) input').attr("disabled", true);
							$(this).find('td:nth-child(5) input').attr("disabled", true);
							$(this).find('td:nth-child(6) input').attr("disabled", true);
							$(this).find('td:nth-child(7) input').attr("disabled", true);
							$(this).find('td:nth-child(8) ').text("อนุมัติแล้ว");		
						}
				    });
					set_txn_id_Tab3_1(response);
				    
					/***  END CODE FOR PREPARE AND SEND MAIL  ****/
					
					objEmail = {};
					objEmail["requestApprove"] 		="ไม่อนุมัติแก้ไข";
					objEmail["manuName"] 			="สถานะกรมธรรม์";
					objEmail["empNameHide"] 		=$("#empNameHide").val();
					objEmail["empID"] 				=$("#empID").val();
					objEmail["departmentID"] 		=$("#departmentID").val();
					objEmail["departmentHide"] 		=$("#departmentHide").val();
					
					objEmail["Cov_cat_name"] 		="Group Life";
					objEmail["Policy_code"] 		=Policy_code;
					objEmail["Policy_name"] 		=Policy_name;
					
					objEmail["Is_insure_sum"] 			=Is_insure_sum	==true?"รวมทุนคุ้มครอง(อำนาจรับประกัน)":"";
					objEmail["Is_med_sum"] 				=Is_med_sum		==true?"รวมทุนตรวจสุขภาพ":"";
					objEmail["Is_rider_sum"] 			=Is_rider_sum	==true?"รวมทุนซื้อแนบท้าย":"";
					objEmail["Is_sum_for_rider"] 		=Is_sum_for_rider==true?"รวมทุนแนบท้ายเดิม(Check Max)":"";
					
					prepareEmail_data.push(objEmail);
					
					var json_data2 = {
				        	"method"		: "send_Email",
				        	"OptionEmail"	: "6",
				        	"prepareEmail_data"			: JSON.stringify(prepareEmail_data),
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
		console.log("data:",json_data);
		Statuesave="Y";
		$("#bt_submit3").attr("disabled", true);
		$("#bt3_req_med")		.attr("disabled", true);
		$("#bt3_his_med")		.attr("disabled", true);
		
		$("#bt3_appr_med")		.attr("disabled", true);
		$("#bt3_not_appr_med")	.attr("disabled", true);
		$("#bt3_cancel_med")	.attr("disabled", true);
		$("#bt3_cancel_med2")	.attr("disabled", true);
		}
	}
	
	$("#textarea_reason_backV").val("");
/*end create json*/
}
/*3.2 dataSave */
function dataSaveTab3_2(){
	
	/*ตารางทุพพลภาพ*/
	var policyG_data = [];
	
	$("#tb_tab1_listStatusInsurance2 tbody>tr").each(function(){
		if($(this).find("input:checkbox").prop("checked") == true){
			obj = {};
			//;
			obj["Policy_code"] = $(this).find("td:nth-child(2) ").text();
			obj["Cov_cat_id"] = 1; //cov_cat_id =2 is Group,1 is individual
			obj["Is_insure_sum"] = $(this).find("td:nth-child(4) input").prop("checked");
			obj["Is_med_sum"] = $(this).find("td:nth-child(5) input").prop("checked");
			obj["Is_rider_sum"] = $(this).find("td:nth-child(6) input").prop("checked");
			obj["Is_sum_for_rider"] = $(this).find("td:nth-child(7) input").prop("checked");
			policyG_data.push(obj);
			
			
		}		
	});
	
	var json_data = {
        	"method": "Tab_PolicyStatus",
            "policyG_data": JSON.stringify(policyG_data)
	}

	$.ajax({
		url: 'UW_SaveData_Servlet',
		type: "POST",
		data: json_data,
		success: function (response) {
			//;
			$("#tb_tab1_listStatusInsurance2 tbody>tr").each(function() {
				if ($(this).find('td:nth-child(1) input').is(':checked')) {
					$(this).find('td:nth-child(1) input').attr("disabled", false).prop("checked",false);
					$(this).find('td:nth-child(4) input').attr("disabled", true);
					$(this).find('td:nth-child(5) input').attr("disabled", true);
					$(this).find('td:nth-child(6) input').attr("disabled", true);
					$(this).find('td:nth-child(7) input').attr("disabled",true);
						
				}
		    });
			
			$("#bt_submit2")		.attr("disabled", true);	
			$("#bt2_req_med")		.attr("disabled", true);
			$("#bt2_his_med")		.attr("disabled", true);
			
			$("#bt2_appr_med")		.attr("disabled", true);
			$("#bt2_not_appr_med")	.attr("disabled", true);
			$("#bt2_cancel_med")	.attr("disabled", true);
			$("#bt2_cancel_med2")	.attr("disabled", true);
		}
	});
console.log("data:",json_data);

//$("#bt1_add_med").attr("disabled", false);
//$("#bt1_delete_med").attr("disabled", true);
$("#bt_submit2").attr("disabled", true);

/*end create json*/
}

function dataSaveNewTab3_2(){
	
	/*ตารางทุพพลภาพ*/
	var policyG_data = [];
	
	$("#tb_tab1_listStatusInsurance2 tbody>tr").each(function(){
		if($(this).find("input:checkbox").prop("checked") == true){
			obj = {};
			//;
			obj["Policy_code"] = $(this).find("td:nth-child(2) ").text();
			obj["Cov_cat_id"] = 1; //cov_cat_id =2 is Group,1 is individual
			obj["Is_insure_sum"] = $(this).find("td:nth-child(4) input").prop("checked");
			obj["Is_med_sum"] = $(this).find("td:nth-child(5) input").prop("checked");
			obj["Is_rider_sum"] = $(this).find("td:nth-child(6) input").prop("checked");
			obj["Is_sum_for_rider"] = $(this).find("td:nth-child(7) input").prop("checked");
			obj["Txn_id"] = $(this).find("td:nth-child(1) input").val();
			policyG_data.push(obj);
			
			
		}		
	});
	
	var json_data = {
        	"method": "Tab_PolicyStatusNew",
            "policyG_data": JSON.stringify(policyG_data)
	}

	$.ajax({
		url: 'UW_SaveData_Servlet',
		type: "POST",
		data: json_data,
		success: function (response) {
			//;
			$("#tb_tab1_listStatusInsurance2 tbody>tr").each(function() {
				if ($(this).find('td:nth-child(1) input').is(':checked')) {
					//$(this).find('td:nth-child(1) input').attr("disabled", false).prop("checked",false);
					$(this).find('td:nth-child(4) input').attr("disabled", true);
					$(this).find('td:nth-child(5) input').attr("disabled", true);
					$(this).find('td:nth-child(6) input').attr("disabled", true);
					$(this).find('td:nth-child(7) input').attr("disabled",true);
					//$(this).find('td:nth-child(8) ').text("สร้างใหม่");		
					var row_status=$(this).find('td:nth-child(8) ').text();
					$(this).find('td:nth-child(8) ').text(row_status);	
				}
		    });
			set_txn_id_Tab3_2(response);
			$("#bt_submit2")		.attr("disabled", true);	
			$("#bt2_req_med")		.attr("disabled", true);
			$("#bt2_his_med")		.attr("disabled", true);
			
			$("#bt2_appr_med")		.attr("disabled", true);
			$("#bt2_not_appr_med")	.attr("disabled", true);
			$("#bt2_cancel_med")	.attr("disabled", true);
			$("#bt2_cancel_med2")	.attr("disabled", true);
		}
	});
console.log("data:",json_data);

//$("#bt1_add_med").attr("disabled", false);
//$("#bt1_delete_med").attr("disabled", true);
$("#bt_submit2").attr("disabled", true);
/*end create json*/
}
function dataSaveReqTab3_2(){
	
	var prepareEmail_data = [];
	
	var Is_insure_sum ;
	var Is_med_sum;
	var Is_rider_sum;
	var Is_sum_for_rider;
	var Policy_code;
	var Policy_name;
	/*ตารางทุพพลภาพ*/
	var policyG_data = [];
	
	$("#tb_tab1_listStatusInsurance2 tbody>tr").each(function(){
		if($(this).find("input:checkbox").prop("checked") == true){
			obj = {};
			//;
			obj["Policy_code"] = $(this).find("td:nth-child(2) ").text();
			obj["Cov_cat_id"] = 1; //cov_cat_id =2 is Group,1 is individual
			obj["Is_insure_sum"] = $(this).find("td:nth-child(4) input").prop("checked");
			obj["Is_med_sum"] = $(this).find("td:nth-child(5) input").prop("checked");
			obj["Is_rider_sum"] = $(this).find("td:nth-child(6) input").prop("checked");
			obj["Is_sum_for_rider"] = $(this).find("td:nth-child(7) input").prop("checked");
			
			Is_insure_sum 	= $(this).find("td:nth-child(4) input").prop("checked");
			Is_med_sum 		= $(this).find("td:nth-child(5) input").prop("checked");
			Is_rider_sum 	= $(this).find("td:nth-child(6) input").prop("checked");
			Is_sum_for_rider = $(this).find("td:nth-child(7) input").prop("checked");
			Policy_code= $(this).find("td:nth-child(2) ").text();
			Policy_name= $(this).find("td:nth-child(3) ").text();
			
			obj["Txn_id"] = $(this).find("td:nth-child(1) input").val();
			policyG_data.push(obj);
			
			
		}		
	});
	
	var json_data = {
        	"method": "Tab_PolicyStatusReq",
            "policyG_data": JSON.stringify(policyG_data)
	}

	$.ajax({
		url: 'UW_SaveData_Servlet',
		type: "POST",
		data: json_data,
		success: function (response) {
			//;
			$("#tb_tab1_listStatusInsurance2 tbody>tr").each(function() {
				if ($(this).find('td:nth-child(1) input').is(':checked')) {
					//$(this).find('td:nth-child(1) input').attr("disabled", false).prop("checked",false);
					$(this).find('td:nth-child(4) input').attr("disabled", true);
					$(this).find('td:nth-child(5) input').attr("disabled", true);
					$(this).find('td:nth-child(6) input').attr("disabled", true);
					$(this).find('td:nth-child(7) input').attr("disabled",true);
					$(this).find('td:nth-child(8) ').text("รออนุมัติ");		
				}
		    });
			set_txn_id_Tab3_2(response);
			$("#bt_submit2").attr("disabled", true);	
			$("#bt2_req_med")		.attr("disabled", true);
			$("#bt2_his_med")		.attr("disabled", true);
			
			$("#bt2_appr_med")		.attr("disabled", true);
			$("#bt2_not_appr_med")	.attr("disabled", true);
			$("#bt2_cancel_med")	.attr("disabled", true);
			$("#bt2_cancel_med2")	.attr("disabled", true);
		}
	});
	console.log("data:",json_data);

	objEmail = {};
	objEmail["requestApprove"] 		="ขออนุมัติ";
	objEmail["manuName"] 			="สถานะกรมธรรม์";
	objEmail["empNameHide"] 		=$("#empNameHide").val();
	objEmail["empID"] 				=$("#empID").val();
	objEmail["departmentID"] 		=$("#departmentID").val();
	objEmail["departmentHide"] 		=$("#departmentHide").val();
	
	objEmail["Cov_cat_name"] 		="Individual Life";
	objEmail["Policy_code"] 		=Policy_code;
	objEmail["Policy_name"] 		=Policy_name;
	
	objEmail["Is_insure_sum"] 			=Is_insure_sum	==true?"รวมทุนคุ้มครอง(อำนาจรับประกัน)":"";
	objEmail["Is_med_sum"] 				=Is_med_sum		==true?"รวมทุนตรวจสุขภาพ":"";
	objEmail["Is_rider_sum"] 			=Is_rider_sum	==true?"รวมทุนซื้อแนบท้าย":"";
	objEmail["Is_sum_for_rider"] 		=Is_sum_for_rider==true?"รวมทุนแนบท้ายเดิม(Check Max)":"";
	
	prepareEmail_data.push(objEmail);
	
	var json_data2 = {
        	"method"		: "send_Email",
        	"OptionEmail"	: "6",
        	"prepareEmail_data"			: JSON.stringify(prepareEmail_data),
	}
	$.ajax({
		url: 'UW_Email_Servlet',
		type: "POST",
		data: json_data2,
		success: function (response) {
			
		}
	});

//$("#bt1_add_med").attr("disabled", false);
//$("#bt1_delete_med").attr("disabled", true);
$("#bt_submit2").attr("disabled", true);
/*end create json*/
}
function dataSaveReqEditTab3_2(){
	var prepareEmail_data = [];
	
	var Is_insure_sum ;
	var Is_med_sum;
	var Is_rider_sum;
	var Is_sum_for_rider;
	var Policy_code;
	var Policy_name;
	/*ตารางทุพพลภาพ*/
	var policyG_data = [];
	
	$("#tb_tab1_listStatusInsurance2 tbody>tr").each(function(){
		if($(this).find("input:checkbox").prop("checked") == true){
			obj = {};
			//;
			obj["Policy_code"] = $(this).find("td:nth-child(2) ").text();
			obj["Cov_cat_id"] = 1; //cov_cat_id =2 is Group,1 is individual
			obj["Is_insure_sum"] = $(this).find("td:nth-child(4) input").prop("checked");
			obj["Is_med_sum"] = $(this).find("td:nth-child(5) input").prop("checked");
			obj["Is_rider_sum"] = $(this).find("td:nth-child(6) input").prop("checked");
			obj["Is_sum_for_rider"] = $(this).find("td:nth-child(7) input").prop("checked");
			obj["Txn_id"] = $(this).find("td:nth-child(1) input").val();
			policyG_data.push(obj);
			
			Is_insure_sum 	= $(this).find("td:nth-child(4) input").prop("checked");
			Is_med_sum 		= $(this).find("td:nth-child(5) input").prop("checked");
			Is_rider_sum 	= $(this).find("td:nth-child(6) input").prop("checked");
			Is_sum_for_rider = $(this).find("td:nth-child(7) input").prop("checked");
			Policy_code= $(this).find("td:nth-child(2) ").text();
			Policy_name= $(this).find("td:nth-child(3) ").text();
			
		}		
	});
	
	var json_data = {
        	"method": "Tab_PolicyStatusReqEdit",
            "policyG_data": JSON.stringify(policyG_data)
	}

	$.ajax({
		url: 'UW_SaveData_Servlet',
		type: "POST",
		data: json_data,
		success: function (response) {
			//;
			$("#tb_tab1_listStatusInsurance2 tbody>tr").each(function() {
				if ($(this).find('td:nth-child(1) input').is(':checked')) {
					$(this).find('td:nth-child(1) input').attr("disabled", false);
					$(this).find('td:nth-child(4) input').attr("disabled", true);
					$(this).find('td:nth-child(5) input').attr("disabled", true);
					$(this).find('td:nth-child(6) input').attr("disabled", true);
					$(this).find('td:nth-child(7) input').attr("disabled",true);
					$(this).find('td:nth-child(8) ').text("ขอแก้ไข");		
				}
		    });
			set_txn_id_Tab3_2(response);
			$("#bt_submit2").attr("disabled", true);	
			$("#bt2_req_med")		.attr("disabled", true);
			$("#bt1_req_edit4")		.attr("disabled", true);
			$("#bt2_his_med")		.attr("disabled", true);
			
			$("#bt2_appr_med")		.attr("disabled", true);
			$("#bt2_not_appr_med")	.attr("disabled", true);
			$("#bt2_cancel_med")	.attr("disabled", true);
			$("#bt2_cancel_med2")	.attr("disabled", true);
			
			/***  END CODE FOR PREPARE AND SEND MAIL  ****/
			
			objEmail = {};
			objEmail["requestApprove"] 		="ขออนุมัติแก้ไข";
			objEmail["manuName"] 			="สถานะกรมธรรม์";
			objEmail["empNameHide"] 		=$("#empNameHide").val();
			objEmail["empID"] 				=$("#empID").val();
			objEmail["departmentID"] 		=$("#departmentID").val();
			objEmail["departmentHide"] 		=$("#departmentHide").val();
			
			objEmail["Cov_cat_name"] 		="Group Life";
			objEmail["Policy_code"] 		=Policy_code;
			objEmail["Policy_name"] 		=Policy_name;
			
			objEmail["Is_insure_sum"] 			=Is_insure_sum	==true?"รวมทุนคุ้มครอง(อำนาจรับประกัน)":"";
			objEmail["Is_med_sum"] 				=Is_med_sum		==true?"รวมทุนตรวจสุขภาพ":"";
			objEmail["Is_rider_sum"] 			=Is_rider_sum	==true?"รวมทุนซื้อแนบท้าย":"";
			objEmail["Is_sum_for_rider"] 		=Is_sum_for_rider==true?"รวมทุนแนบท้ายเดิม(Check Max)":"";
			
			prepareEmail_data.push(objEmail);
			
			var json_data2 = {
		        	"method"		: "send_Email",
		        	"OptionEmail"	: "6",
		        	"prepareEmail_data"			: JSON.stringify(prepareEmail_data),
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
console.log("data:",json_data);

//$("#bt1_add_med").attr("disabled", false);
//$("#bt1_delete_med").attr("disabled", true);
$("#bt_submit2").attr("disabled", true);
/*end create json*/
}
function dataSaveApproveTab3_2(){
	var prepareEmail_data = [];
	
	var Is_insure_sum ;
	var Is_med_sum;
	var Is_rider_sum;
	var Is_sum_for_rider;
	var Policy_code;
	var Policy_name;
	/*ตารางทุพพลภาพ*/
	var policyG_data = [];
	var row_status;
	$("#tb_tab1_listStatusInsurance2 tbody>tr").each(function(){
		if($(this).find("input:checkbox").prop("checked") == true){
			obj = {};
			//;
			obj["Policy_code"] = $(this).find("td:nth-child(2) ").text();
			obj["Cov_cat_id"] = 1; //cov_cat_id =2 is Group,1 is individual
			obj["Is_insure_sum"] = $(this).find("td:nth-child(4) input").prop("checked");
			obj["Is_med_sum"] = $(this).find("td:nth-child(5) input").prop("checked");
			obj["Is_rider_sum"] = $(this).find("td:nth-child(6) input").prop("checked");
			obj["Is_sum_for_rider"] = $(this).find("td:nth-child(7) input").prop("checked");
			obj["Txn_id"] = $(this).find("td:nth-child(1) input").val();
			policyG_data.push(obj);
			row_status=$(this).find("td:nth-child(8) ").text();
			
			Is_insure_sum 	= $(this).find("td:nth-child(4) input").prop("checked");
			Is_med_sum 		= $(this).find("td:nth-child(5) input").prop("checked");
			Is_rider_sum 	= $(this).find("td:nth-child(6) input").prop("checked");
			Is_sum_for_rider = $(this).find("td:nth-child(7) input").prop("checked");
			Policy_code= $(this).find("td:nth-child(2) ").text();
			Policy_name= $(this).find("td:nth-child(3) ").text();
			
		}		
	});
	
	if(row_status=="รออนุมัติ"){
		var json_data = {
	        	"method": "Tab_PolicyStatusApprove",
	            "policyG_data": JSON.stringify(policyG_data)
		}

		$.ajax({
			url: 'UW_SaveData_Servlet',
			type: "POST",
			data: json_data,
			success: function (response) {
				//;
				$("#tb_tab1_listStatusInsurance2 tbody>tr").each(function() {
					if ($(this).find('td:nth-child(1) input').is(':checked')) {
						$(this).find('td:nth-child(1) input').attr("disabled", true);
						$(this).find('td:nth-child(4) input').attr("disabled", true);
						$(this).find('td:nth-child(5) input').attr("disabled", true);
						$(this).find('td:nth-child(6) input').attr("disabled", true);
						$(this).find('td:nth-child(7) input').attr("disabled",true);
						$(this).find('td:nth-child(8) ').text("อนุมัติแล้ว");		
					}
			    });
				set_txn_id_Tab3_2(response);
				$("#bt_submit2").attr("disabled", true);	
				$("#bt2_req_med")		.attr("disabled", true);
				$("#bt2_his_med")		.attr("disabled", true);
				
				$("#bt2_appr_med")		.attr("disabled", true);
				$("#bt2_not_appr_med")	.attr("disabled", true);
				$("#bt2_cancel_med")	.attr("disabled", true);
				$("#bt2_cancel_med2")	.attr("disabled", true);
				
				
				/** GEN JSON SETTING CHECKLIST  **/
				var json_data3 = {
			        	"method": "Gen_JSON_Policy_Status",	
				}
				$.ajax({
					url: 'UW_JSON_Servlet',
					type: "POST",
					data: json_data3,
					success: function (response) {
						/***  START CODE FOR PREPARE AND SEND MAIL  ****/
						
						objEmail = {};
						objEmail["requestApprove"] 		="อนุมัติ";
						objEmail["manuName"] 			="สถานะกรมธรรม์";
						objEmail["empNameHide"] 		=$("#empNameHide").val();
						objEmail["empID"] 				=$("#empID").val();
						objEmail["departmentID"] 		=$("#departmentID").val();
						objEmail["departmentHide"] 		=$("#departmentHide").val();
						
						objEmail["Cov_cat_name"] 		="Group Life";
						objEmail["Policy_code"] 		=Policy_code;
						objEmail["Policy_name"] 		=Policy_name;
						
						objEmail["Is_insure_sum"] 			=Is_insure_sum	==true?"รวมทุนคุ้มครอง(อำนาจรับประกัน)":"";
						objEmail["Is_med_sum"] 				=Is_med_sum		==true?"รวมทุนตรวจสุขภาพ":"";
						objEmail["Is_rider_sum"] 			=Is_rider_sum	==true?"รวมทุนซื้อแนบท้าย":"";
						objEmail["Is_sum_for_rider"] 		=Is_sum_for_rider==true?"รวมทุนแนบท้ายเดิม(Check Max)":"";
						
						prepareEmail_data.push(objEmail);
						
						var json_data2 = {
					        	"method"		: "send_Email",
					        	"OptionEmail"	: "6",
					        	"prepareEmail_data"			: JSON.stringify(prepareEmail_data),
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
				
				
				/***  START CODE FOR PREPARE AND SEND MAIL  ****/
//				objEmail = {};
//				objEmail["requestApprove"] 		="อนุมัติ";
//				objEmail["manuName"] 			="สถานะกรมธรรม์";
//				objEmail["empNameHide"] 		=$("#empNameHide").val();
//				objEmail["empID"] 				=$("#empID").val();
//				objEmail["departmentID"] 		=$("#departmentID").val();
//				objEmail["departmentHide"] 		=$("#departmentHide").val();
//				
//				objEmail["Cov_cat_name"] 		="Group Life";
//				objEmail["Policy_code"] 		=Policy_code;
//				objEmail["Policy_name"] 		=Policy_name;
//				
//				objEmail["Is_insure_sum"] 			=Is_insure_sum	==true?"รวมทุนคุ้มครอง(อำนาจรับประกัน)":"";
//				objEmail["Is_med_sum"] 				=Is_med_sum		==true?"รวมทุนตรวจสุขภาพ":"";
//				objEmail["Is_rider_sum"] 			=Is_rider_sum	==true?"รวมทุนซื้อแนบท้าย":"";
//				objEmail["Is_sum_for_rider"] 		=Is_sum_for_rider==true?"รวมทุนแนบท้ายเดิม(Check Max)":"";
//				
//				prepareEmail_data.push(objEmail);
//				
//				var json_data2 = {
//			        	"method"		: "send_Email",
//			        	"OptionEmail"	: "6",
//			        	"prepareEmail_data"			: JSON.stringify(prepareEmail_data),
//				}
//				$.ajax({
//					url: 'UW_Email_Servlet',
//					type: "POST",
//					data: json_data2,
//					success: function (response) {
//						
//					}
//				});
				/***  END CODE FOR PREPARE AND SEND MAIL  ****/
			}
		});
		console.log("data:",json_data);
	
		//$("#bt1_add_med").attr("disabled", false);
		//$("#bt1_delete_med").attr("disabled", true);
		$("#bt_submit2").attr("disabled", true);
	}else{
		var json_data = {
	        	"method": "Tab_PolicyStatusApproveEdit",
	            "policyG_data": JSON.stringify(policyG_data)
		}

		$.ajax({
			url: 'UW_SaveData_Servlet',
			type: "POST",
			data: json_data,
			success: function (response) {
				//;
				$("#tb_tab1_listStatusInsurance2 tbody>tr").each(function() {
					if ($(this).find('td:nth-child(1) input').is(':checked')) {
						$(this).find('td:nth-child(1) input').attr("disabled", true);
						$(this).find('td:nth-child(4) input').attr("disabled", true);
						$(this).find('td:nth-child(5) input').attr("disabled", true);
						$(this).find('td:nth-child(6) input').attr("disabled", true);
						$(this).find('td:nth-child(7) input').attr("disabled",true);
						$(this).find('td:nth-child(8) ').text("แก้ไข");		
					}
			    });
				set_txn_id_Tab3_2(response);
				$("#bt_submit2").attr("disabled", true);	
				$("#bt2_req_med")		.attr("disabled", true);
				$("#bt2_his_med")		.attr("disabled", true);
				
				$("#bt2_appr_med")		.attr("disabled", true);
				$("#bt2_not_appr_med")	.attr("disabled", true);
				$("#bt2_cancel_med")	.attr("disabled", true);
				$("#bt2_cancel_med2")	.attr("disabled", true);
				
				/***  END CODE FOR PREPARE AND SEND MAIL  ****/
				
				objEmail = {};
				objEmail["requestApprove"] 		="อนุมัติแก้ไข";
				objEmail["manuName"] 			="สถานะกรมธรรม์";
				objEmail["empNameHide"] 		=$("#empNameHide").val();
				objEmail["empID"] 				=$("#empID").val();
				objEmail["departmentID"] 		=$("#departmentID").val();
				objEmail["departmentHide"] 		=$("#departmentHide").val();
				
				objEmail["Cov_cat_name"] 		="Group Life";
				objEmail["Policy_code"] 		=Policy_code;
				objEmail["Policy_name"] 		=Policy_name;
				
				objEmail["Is_insure_sum"] 			=Is_insure_sum	==true?"รวมทุนคุ้มครอง(อำนาจรับประกัน)":"";
				objEmail["Is_med_sum"] 				=Is_med_sum		==true?"รวมทุนตรวจสุขภาพ":"";
				objEmail["Is_rider_sum"] 			=Is_rider_sum	==true?"รวมทุนซื้อแนบท้าย":"";
				objEmail["Is_sum_for_rider"] 		=Is_sum_for_rider==true?"รวมทุนแนบท้ายเดิม(Check Max)":"";
				
				prepareEmail_data.push(objEmail);
				
				var json_data2 = {
			        	"method"		: "send_Email",
			        	"OptionEmail"	: "6",
			        	"prepareEmail_data"			: JSON.stringify(prepareEmail_data),
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
	console.log("data:",json_data);

	//$("#bt1_add_med").attr("disabled", false);
	//$("#bt1_delete_med").attr("disabled", true);
	$("#bt_submit2").attr("disabled", true);
	}
	
	
/*end create json*/
}

function dataSaveNotApproveTab3_2(){
	var prepareEmail_data = [];
	
	var Is_insure_sum ;
	var Is_med_sum;
	var Is_rider_sum;
	var Is_sum_for_rider;
	var Policy_code;
	var Policy_name;
	
	var approve_note="";
	/*ตารางทุพพลภาพ*/
	var policyG_data = [];
	var row_status;
	$("#tb_tab1_listStatusInsurance2 tbody>tr").each(function(){
		if($(this).find("input:checkbox").prop("checked") == true){
			obj = {};
			//;
			//;
			obj["Policy_code"] 		= $(this).find("td:nth-child(2) ").text();
			obj["Cov_cat_id"] 		= 1; //cov_cat_id =2 is Group,1 is individual
			obj["Is_insure_sum"] 	= $(this).find("td:nth-child(4) input").prop("checked");
			obj["Is_med_sum"] 		= $(this).find("td:nth-child(5) input").prop("checked");
			obj["Is_rider_sum"] 	= $(this).find("td:nth-child(6) input").prop("checked");
			obj["Is_sum_for_rider"] = $(this).find("td:nth-child(7) input").prop("checked");
			obj["Txn_id"] 			= $(this).find("td:nth-child(1) input").val();
			approve_note		    = $("#textarea_reason_backG").val();
			
			row_status=$(this).find("td:nth-child(8) ").text();
			policyG_data.push(obj);
			
			Is_insure_sum 	= $(this).find("td:nth-child(4) input").prop("checked");
			Is_med_sum 		= $(this).find("td:nth-child(5) input").prop("checked");
			Is_rider_sum 	= $(this).find("td:nth-child(6) input").prop("checked");
			Is_sum_for_rider = $(this).find("td:nth-child(7) input").prop("checked");
			Policy_code= $(this).find("td:nth-child(2) ").text();
			Policy_name= $(this).find("td:nth-child(3) ").text();
			
			
		}		
	});
	
	if(row_status=="รออนุมัติ"){
		var json_data = {
	        	"method": "Tab_PolicyStatusNotApprove",
	            "policyG_data": JSON.stringify(policyG_data)
		}

		$.ajax({
			url: 'UW_SaveData_Servlet',
			type: "POST",
			data: json_data,
			success: function (response) {
				//;
				$("#tb_tab1_listStatusInsurance2 tbody>tr").each(function() {
					if ($(this).find('td:nth-child(1) input').is(':checked')) {
						$(this).find('td:nth-child(1) input').attr("disabled", true);
						$(this).find('td:nth-child(4) input').attr("disabled", true);
						$(this).find('td:nth-child(5) input').attr("disabled", true);
						$(this).find('td:nth-child(6) input').attr("disabled", true);
						$(this).find('td:nth-child(7) input').attr("disabled",true);
						$(this).find('td:nth-child(8) ').text("ไม่อนุมัติ");		
					}
			    });
				set_txn_id_Tab3_2(response);
				$("#bt_submit2").attr("disabled", true);	
				$("#bt2_req_med")		.attr("disabled", true);
				$("#bt2_his_med")		.attr("disabled", true);
				
				$("#bt2_appr_med")		.attr("disabled", true);
				$("#bt2_not_appr_med")	.attr("disabled", true);
				$("#bt2_cancel_med")	.attr("disabled", true);
				$("#bt2_cancel_med2")	.attr("disabled", true);
				
				/***  END CODE FOR PREPARE AND SEND MAIL  ****/
				
				objEmail = {};
				objEmail["requestApprove"] 		="ไม่อนุมัติ";
				objEmail["manuName"] 			="สถานะกรมธรรม์";
				objEmail["empNameHide"] 		=$("#empNameHide").val();
				objEmail["empID"] 				=$("#empID").val();
				objEmail["departmentID"] 		=$("#departmentID").val();
				objEmail["departmentHide"] 		=$("#departmentHide").val();
				
				objEmail["Cov_cat_name"] 		="Group Life";
				objEmail["Policy_code"] 		=Policy_code;
				objEmail["Policy_name"] 		=Policy_name;
				
				objEmail["Is_insure_sum"] 			=Is_insure_sum	==true?"รวมทุนคุ้มครอง(อำนาจรับประกัน)":"";
				objEmail["Is_med_sum"] 				=Is_med_sum		==true?"รวมทุนตรวจสุขภาพ":"";
				objEmail["Is_rider_sum"] 			=Is_rider_sum	==true?"รวมทุนซื้อแนบท้าย":"";
				objEmail["Is_sum_for_rider"] 		=Is_sum_for_rider==true?"รวมทุนแนบท้ายเดิม(Check Max)":"";
				
				prepareEmail_data.push(objEmail);
				
				var json_data2 = {
			        	"method"		: "send_Email",
			        	"OptionEmail"	: "6",
			        	"prepareEmail_data"			: JSON.stringify(prepareEmail_data),
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
	console.log("data:",json_data);
	}else{
		var json_data = {
	        	"method": "Tab_PolicyStatusNotApproveEdit",
	            "policyG_data": JSON.stringify(policyG_data),
	            "approve_note" : approve_note
		}

		$.ajax({
			url: 'UW_SaveData_Servlet',
			type: "POST",
			data: json_data,
			success: function (response) {
				//;
				$("#tb_tab1_listStatusInsurance2 tbody>tr").each(function() {
					if ($(this).find('td:nth-child(1) input').is(':checked')) {
						$(this).find('td:nth-child(1) input').attr("disabled", true);
						$(this).find('td:nth-child(4) input').attr("disabled", true);
						$(this).find('td:nth-child(5) input').attr("disabled", true);
						$(this).find('td:nth-child(6) input').attr("disabled", true);
						$(this).find('td:nth-child(7) input').attr("disabled",true);
						$(this).find('td:nth-child(8) ').text("อนุมัติแล้ว");		
					}
			    });
				set_txn_id_Tab3_2(response);
				$("#bt_submit2").attr("disabled", true);	
				$("#bt2_req_med")		.attr("disabled", true);
				$("#bt2_his_med")		.attr("disabled", true);
				
				$("#bt2_appr_med")		.attr("disabled", true);
				$("#bt2_not_appr_med")	.attr("disabled", true);
				$("#bt2_cancel_med")	.attr("disabled", true);
				$("#bt2_cancel_med2")	.attr("disabled", true);
				
				/***  END CODE FOR PREPARE AND SEND MAIL  ****/
				
				objEmail = {};
				objEmail["requestApprove"] 		="ไม่อนุมัติแก้ไข";
				objEmail["manuName"] 			="สถานะกรมธรรม์";
				objEmail["empNameHide"] 		=$("#empNameHide").val();
				objEmail["empID"] 				=$("#empID").val();
				objEmail["departmentID"] 		=$("#departmentID").val();
				objEmail["departmentHide"] 		=$("#departmentHide").val();
				
				objEmail["Cov_cat_name"] 		="Group Life";
				objEmail["Policy_code"] 		=Policy_code;
				objEmail["Policy_name"] 		=Policy_name;
				
				objEmail["Is_insure_sum"] 			=Is_insure_sum	==true?"รวมทุนคุ้มครอง(อำนาจรับประกัน)":"";
				objEmail["Is_med_sum"] 				=Is_med_sum		==true?"รวมทุนตรวจสุขภาพ":"";
				objEmail["Is_rider_sum"] 			=Is_rider_sum	==true?"รวมทุนซื้อแนบท้าย":"";
				objEmail["Is_sum_for_rider"] 		=Is_sum_for_rider==true?"รวมทุนแนบท้ายเดิม(Check Max)":"";
				
				prepareEmail_data.push(objEmail);
				
				var json_data2 = {
			        	"method"		: "send_Email",
			        	"OptionEmail"	: "6",
			        	"prepareEmail_data"			: JSON.stringify(prepareEmail_data),
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
	console.log("data:",json_data);
	}
	

//$("#bt1_add_med").attr("disabled", false);
//$("#bt1_delete_med").attr("disabled", true);
$("#bt_submit2").attr("disabled", true);
$("#textarea_reason_backG").val("");
/*end create json*/
}
/* เพิ่ม row ในตาราง รายการสถานะกรมธรรม์ */
function bt_add_row_listInsuranceTab1(){
	var chk_length = $("#tb_tab1_listStatusInsurance tbody>tr").length;
	var row = "<tr role='row'>"+
				"<td><input type='checkbox' class='rd_checker panel_head_big'/></td>"+
				/*"<td>"+
					"<select class='form-control'>"+
						"<option>Group Life</option>"+
						"<option>Individual Life</option>"+
					"</select>"+
				"</td>"+*/
				"<td>New</td>"+
				"<td><div class='pull-left'>มีผลบังคับใช้</div></td>"+
				"<td><input type='checkbox'/></td>"+
				"<td><input type='checkbox'/></td>"+
				"<td><input type='checkbox'/></td>"+
				"<td><input type='checkbox'/></td>"+
			"</tr>"
	$("#tb_tab1_listStatusInsurance tbody").append(row);
	
	if(chk_length >= 3){
		 $("#tb_tab1_listStatusInsurance_wrapper .dataTables_scrollBody").css("height","160px");
	} else if(chk_length < 4 ){
		var height = $("#tb_tab1_listStatusInsurance_wrapper .dataTables_scrollBody").css("height");
			height = Number(height.replace("px",""));
			height = height+40;
			 
		 $("#tb_tab1_listStatusInsurance_wrapper .dataTables_scrollBody").css("height",height+"px");
	}
}
/* เพิ่ม row ในตาราง รายการสถานะกรมธรรม์ 2 */
function bt_add_row_listInsuranceTab2(){
	var chk_length = $("#tb_tab1_listStatusInsurance2 tbody>tr").length;
	var row = "<tr role='row'>"+
				"<td><input type='checkbox'/></td>"+
				/*"<td>"+
					"<select class='form-control'>"+
						"<option>Group Life</option>"+
						"<option>Individual Life</option>"+
					"</select>"+
				"</td>"+*/
				"<td>New</td>"+
				"<td><div class='pull-left'>มีผลบังคับใช้</div></td>"+
				"<td><input type='checkbox'/></td>"+
				"<td><input type='checkbox'/></td>"+
				"<td><input type='checkbox'/></td>"+
				"<td><input type='checkbox'/></td>"+
			"</tr>"
	$("#tb_tab1_listStatusInsurance2 tbody").append(row);
	
	if(chk_length >= 3){
		 $("#tb_tab1_listStatusInsurance2_wrapper .dataTables_scrollBody").css("height","180px");
	} else if(chk_length < 4 ){
		var height = $("#tb_tab1_listStatusInsurance2_wrapper .dataTables_scrollBody").css("height");
			height = Number(height.replace("px",""));
			height = height+40;
			 
		 $("#tb_tab1_listStatusInsurance2_wrapper .dataTables_scrollBody").css("height",height+"px");
	}
}
/* ลบ row ในตาราง รายการสถานะกรมธรรม์ */
function bt_delete_row_listInsuranceTab1(){
	var chk_length = $("#tb_tab1_listStatusInsurance tbody>tr").length;
	
	$("#tb_tab1_listStatusInsurance tbody").find('input[type="checkbox"]:checked').each(function(){
		 if(chk_length >= 4){
			 $("#tb_tab1_listStatusInsurance_wrapper .dataTables_scrollBody").css("height","160px");
		}else if(chk_length < 4){
			var height = $("#tb_tab1_listStatusInsurance_wrapper .dataTables_scrollBody").css("height");
			height = Number(height.replace("px",""));
			height = height-40;
			 
		 $("#tb_tab1_listStatusInsurance_wrapper .dataTables_scrollBody").css("height",height+"px");
		}
	})
	
	$('#tb_tab1_listStatusInsurance input[type=checkbox]:checked').parent().parent().remove();

}
/* ลบ row ในตาราง รายการสถานะกรมธรรม์ */
function bt_delete_row_listInsuranceTab2(){
	var chk_length = $("#tb_tab1_listStatusInsurance2 tbody>tr").length;
	
	$("#tb_tab1_listStatusInsurance2 tbody").find('input[type="checkbox"]:checked').each(function(){
		if(chk_length >= 4){
			 $("#tb_tab1_listStatusInsurance2_wrapper .dataTables_scrollBody").css("height","160px");
		}else if(chk_length < 4){
			var height = $("#tb_tab1_listStatusInsurance2_wrapper .dataTables_scrollBody").css("height");
			height = Number(height.replace("px",""));
			height = height-40;
			 
		 $("#tb_tab1_listStatusInsurance2_wrapper .dataTables_scrollBody").css("height",height+"px");
		}
	})
	
	$('#tb_tab1_listStatusInsurance2 input[type=checkbox]:checked').parent().parent().remove();
/*	if(chk_length <= 4){
		var height = $("#tb_tab1_listStatusInsurance_wrapper .dataTables_scrollBody").css("height");
		height = Number(height.replace("px",""));
		height = height-50;
		 
	 $("#tb_tab1_listStatusInsurance_wrapper .dataTables_scrollBody").css("height",height+"px");
	}*/
}

/*search dataTable*/
var tab1_table1 = $('#tb_tab1_listAppendix_accum').DataTable();
$('#search_tb_tab1_1').on( 'keyup', function () {
	//;
	var countrow=0;
	var counthide=0;
	
		$("#tb_tab1_listAppendix_accum>tbody>tr").removeClass("hide");
		$("#tb_tab1_listAppendix_accum tbody>tr").each(function(i) {
			
			countrow++
			const textMatch = $(this)
		    .children()
		   
		    .toArray()
		    .some(td => $(td).text().toLowerCase().includes($('#search_tb_tab1_1').val().toLowerCase()))
		  
			
			if(textMatch){
				
			}else{
				counthide++
				 $("#tb_tab1_listAppendix_accum>tbody>tr").eq(i).addClass("hide");
			}
		})
		
		if(countrow==counthide){
			var row = "<tr>"
				+ "<td id='row_no_data_found' colspan='7'><p align='center'>" + "ไม่พบข้อมูล" + "</p></td>";
			$("#tb_tab1_listAppendix_accum tbody").append(row);
			return;
		}else{
			$("#tb_tab1_listAppendix_accum tbody>tr").each(function(i) {
				;
				var tempp = $(this).find('td:nth-child(1) ').attr("id")
				if($(this).find('td:nth-child(1) ').attr("id")=="row_no_data_found"){
					$(this).remove();		
				}
			});
		}
	
	//tab1_table1.search( this.value ).draw();
	 nameTab 	= "menu_TC_1";
	 Statuesave = "Y";
} );
var tab1_table2 = $('#tb_tab1_listStatusInsurance').DataTable();
$('#search_tb_tab1_2').on( 'keyup', function () {
	var countrow=0;
	var counthide=0;
	var tab1_table1 = $('#tb_tab1_listStatusInsurance').DataTable();
	
		;
		$("#tb_tab1_listStatusInsurance>tbody>tr").removeClass("hide");
		$("#tb_tab1_listStatusInsurance tbody>tr").each(function(i) {
			//;
			countrow++
			const textMatch = $(this)
		    .children()
		    .not('td:has("input,select")')
		    .toArray()
		    .some(td => $(td).text().toLowerCase().includes($('#search_tb_tab1_2').val().toLowerCase()))
		  
			
			if(textMatch){
				
			}else{
				counthide++
				 $("#tb_tab1_listStatusInsurance>tbody>tr").eq(i).addClass("hide");
			}
		})
	
		if(countrow==counthide){
			var row = "<tr>"
				+ "<td id='row_no_data_found' colspan='8'><p align='center'>" + "ไม่พบข้อมูล" + "</p></td>";
			$("#tb_tab1_listStatusInsurance tbody").append(row);
			return;
		}else{
			$("#tb_tab1_listStatusInsurance tbody>tr").each(function(i) {
				;
				var tempp = $(this).find('td:nth-child(1) ').attr("id")
				if($(this).find('td:nth-child(1) ').attr("id")=="row_no_data_found"){
					$(this).remove();	
				}
			});
		}
	
	//tab1_table1.search( this.value ).draw();
	 nameTab 	= "menu_TC_3";
	 Statuesave = "Y";
} );
var tab1_table3 = $('#tb_tab1_listStatusInsurance2').DataTable();
$('#search_tb_tab1_3').on( 'keyup', function () {
	;
	var countrow=0;
	var counthide=0;
	var tab1_table1 = $('#tb_tab1_listStatusInsurance2').DataTable();
	
		;
		$("#tb_tab1_listStatusInsurance2>tbody>tr").removeClass("hide");
		$("#tb_tab1_listStatusInsurance2 tbody>tr").each(function(i) {
			//;
			countrow++
			const textMatch = $(this)
		    .children()
		    .not('td:has("input,select")')
		    .toArray()
		    .some(td => $(td).text().toLowerCase().includes($('#search_tb_tab1_3').val().toLowerCase()))
		  
			
			if(textMatch){
				
			}else{
				counthide++
				 $("#tb_tab1_listStatusInsurance2>tbody>tr").eq(i).addClass("hide");
			}
		})
	
		if(countrow==counthide){
			var row = "<tr>"
				+ "<td id='row_no_data_found' colspan='8'><p align='center'>" + "ไม่พบข้อมูล" + "</p></td>";
			$("#tb_tab1_listStatusInsurance2 tbody").append(row);
			return;
		}else{
			$("#tb_tab1_listStatusInsurance2 tbody>tr").each(function(i) {
				;
				var tempp = $(this).find('td:nth-child(1) ').attr("id")
				if($(this).find('td:nth-child(1) ').attr("id")=="row_no_data_found"){
					$(this).remove();	
				}
			});
		}
	
	//tab1_table1.search( this.value ).draw();
	 nameTab 	= "menu_TC_3";
	
	 Statuesave = "Y";
     
} );


$('#search_modal_tab2').on( 'keyup', function () {
	;
	var countrow=0;
	var counthide=0;
	var tab1_table1 = $('#tb_model_txnhistory').DataTable();
	
		;
		$("#tb_model_txnhistory>tbody>tr").removeClass("hide");
		$("#tb_model_txnhistory tbody>tr").each(function(i) {
			//;
			countrow++
			const textMatch = $(this)
		    .children()
		    .not('td:has("input,select")')
		    .toArray()
		    .some(td => $(td).text().toLowerCase().includes($('#search_modal_tab2').val().toLowerCase()))
		  
			
			if(textMatch){
				
			}else{
				counthide++
				 $("#tb_model_txnhistory>tbody>tr").eq(i).addClass("hide");
			}
		})
	
		if(countrow==counthide){
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
		
		$('#tb_model_txnhistory').DataTable({"paging": false,"bDestroy": true,"bPaginate": false,"bFilter" : false,"bInfo" : false,"ordering": false,"sScrollY": "300px","searching" :false,scrollCollapse: true });
		//$("#tb_tab1_listStatusInsurance_wrapper .dataTables_scrollHeadInner").css({"width":"100%"});
		// $("#tb_tab1_listStatusInsurance_wrapper .table").css({"width":"100%"});
	
	//tab1_table1.search( this.value ).draw();
	 //nameTab 	= "menu_TC_3";
	
	// Statuesave = "Y";
     
} );

$('#search_modal_tab2_A').on( 'keyup', function () {
	;
	var countrow=0;
	var counthide=0;
	var tab1_table1 = $('#tb_model_txnhistory').DataTable();
	
		;
		$("#tb_model_txnhistory>tbody>tr").removeClass("hide");
		$("#tb_model_txnhistory tbody>tr").each(function(i) {
			//;
			countrow++
			const textMatch = $(this)
		    .children()
		    .not('td:has("input,select")')
		    .toArray()
		    .some(td => $(td).text().toLowerCase().includes($('#search_modal_tab2_A').val().toLowerCase()))
		  
			
			if(textMatch){
				
			}else{
				counthide++
				 $("#tb_model_txnhistory>tbody>tr").eq(i).addClass("hide");
			}
		})
	
		if(countrow==counthide){
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
		
		$('#tb_model_txnhistory').DataTable({"paging": false,"bDestroy": true,"bPaginate": false,"bFilter" : false,"bInfo" : false,"ordering": false,"sScrollY": "300px","searching" :false,scrollCollapse: true });
		//$("#tb_tab1_listStatusInsurance_wrapper .dataTables_scrollHeadInner").css({"width":"100%"});
		// $("#tb_tab1_listStatusInsurance_wrapper .table").css({"width":"100%"});
	
	//tab1_table1.search( this.value ).draw();
	 //nameTab 	= "menu_TC_3";
	
	// Statuesave = "Y";
     
} );

$('#search_modal_tab2_B').on( 'keyup', function () {
	;
	var countrow=0;
	var counthide=0;
	var tab1_table1 = $('#tb_model_txnhistory').DataTable();
	
		;
		$("#tb_model_txnhistory>tbody>tr").removeClass("hide");
		$("#tb_model_txnhistory tbody>tr").each(function(i) {
			//;
			countrow++
			const textMatch = $(this)
		    .children()
		    .not('td:has("input,select")')
		    .toArray()
		    .some(td => $(td).text().toLowerCase().includes($('#search_modal_tab2_B').val().toLowerCase()))
		  
			
			if(textMatch){
				
			}else{
				counthide++
				 $("#tb_model_txnhistory>tbody>tr").eq(i).addClass("hide");
			}
		})
	
		if(countrow==counthide){
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
		
		$('#tb_model_txnhistory').DataTable({"paging": false,"bDestroy": true,"bPaginate": false,"bFilter" : false,"bInfo" : false,"ordering": false,"sScrollY": "300px","searching" :false,scrollCollapse: true });
		//$("#tb_tab1_listStatusInsurance_wrapper .dataTables_scrollHeadInner").css({"width":"100%"});
		// $("#tb_tab1_listStatusInsurance_wrapper .table").css({"width":"100%"});
	
	//tab1_table1.search( this.value ).draw();
	 //nameTab 	= "menu_TC_3";
	
	// Statuesave = "Y";
     
} );
/****************************** Tab 2 อำนาจรับประกัน *********************************/

$( document ).ready(function() {
	 
	//set dataTable modal
	 $('#tb_modal_tab2_historyChangeFile').DataTable({ "ordering": false,"paging": false,"bInfo" : false, "searching" :false, "autoWidth": false,scrollY: '200px',scrollCollapse: true, "oLanguage": {"sSearch": "ค้นหา: "} });
	 $("#tb_modal_tab2_historyChangeFile_wrapper .dataTables_scrollHeadInner").css({"width":"100%"});
	 $("#tb_modal_tab2_historyChangeFile_wrapper .table").css({"width":"100%"});
	 
	 $('#tb_modal_common').DataTable({ "ordering": false,"paging": false,"bInfo" : false, "searching" :false, "autoWidth": false,scrollY: '200px',scrollCollapse: true, "oLanguage": {"sSearch": "ค้นหา: "} });
	 $("#tb_modal_common_wrapper .dataTables_scrollHeadInner").css({"width":"100%"});
	 $("#tb_modal_common_wrapper .table").css({"width":"100%"});
	 
	 //$('#tb_tab1_listStatusInsurance').DataTable({ "ordering": false,"paging": false,"bInfo" : false, "searching" :false, "autoWidth": false,scrollY: '200px',scrollCollapse: true, "oLanguage": {"sSearch": "ค้นหา: "} });
	 $("#tb_tab1_listStatusInsurance_wrapper .dataTables_scrollHeadInner").css({"width":"100%"});
	 $("#tb_tab1_listStatusInsurance_wrapper .table").css({"width":"100%"});
	 $('.sorting_asc').removeClass('sorting_asc');
		
	 $("#tb_tab1_listStatusInsurance2_wrapper .dataTables_scrollHeadInner").css({"width":"100%"});
	 $("#tb_tab1_listStatusInsurance2_wrapper .table").css({"width":"100%"});
	 $('.sorting_asc').removeClass('sorting_asc');
		
});
/* เพิ่ม row ใน table fileSheetOrder */
function bt_add_row_fileSheetOrder(){
	
	/*var last_row = $("#tb_tab2_fileSheetOrder >tbody>tr:last>td:nth-child(3) input[type='text']").attr('id');
		last_row = last_row.replace("text_common","");
		last_row++;*/
	var row_lenght = $("#tb_tab2_fileSheetOrder tbody>tr").length;
	var row = "<tr>"+
				"<td><input type='checkbox'/></td>"+
				"<td>1</td>"+
				"<td><input type='text' class='form-control' style='width: 100%'/></td>"+
				"<td><input type='text' class='form-control'/></td>"+
				"<td>"+
					"<div class='input-group'>"+
						"<input type='text' class='form-control' readonly=''> "+
						"<label class='input-group-btn'> "+
						"	<span  class='btn btn-primary' disabled>"+
						"	<font  style='color: red;'>*</font>..."+
						"	<input type='file' accept='text/plain' style='display: none;'> "+
						"	</span>"+
						"</label>"+
					"</div>"+
				"</td>"+
				"<td>"+
					"<a id='' class='active_grey'>"+
						"<span class='glyphicon glyphicon-repeat activecolorblue'></span>"+
					"</a>"+
				"</td>"+
				"<td>"+
					"<a id='' class='active_grey open-HistoryDialog_CL' href='#modal_history_changeFile' data-toggle='modal'>"+
						"<span class='glyphicon glyphicon-time'></span>"+
					"</a>"+
				"</td>"+
			"</tr>"
	$("#tb_tab2_fileSheetOrder tbody").append(row);	
	
	if(row_lenght == 4){
		$('#tb_tab2_fileSheetOrder').DataTable({paging:false,"bScrollCollapse": true,"ordering": false, "bDestroy": true,"bPaginate": false,"bFilter" : false,"bLengthChange": false, bInfo: false, scrollY: '300px',scrollCollapse: true, "autoWidth": false,});
		$("#tb_tab2_fileSheetOrder_wrapper .dataTables_scrollHeadInner").css({"width":"100%"});
		$("#tb_tab2_fileSheetOrder_wrapper .table").css({"width":"100%"});
	}
}
/* ลบ row ใน table fileSheetOrder */
function bt_delete_row_fileSheetOrder(){
	$('#tb_tab2_fileSheetOrder input:checkbox:checked').parent().parent().remove();
	var row_lenght = $("#tb_tab2_fileSheetOrder tbody>tr").length;
	if(row_lenght == 4){
		$('#tb_tab2_fileSheetOrder_wrapper .dataTables_scrollBody').closest('.dataTables_scrollBody').css('height', 'auto');
	}
}

/* เพิ่ม row ใน table listInsurance */
function bt_add_row_listInsurance(){
	var row_lenght = $("#tb_tab2_listInsurance tbody>tr").length;	
	var last_row = $("#tb_tab2_listInsurance >tbody>tr:last>td:nth-child(1) input[type='checkbox']").attr('id');
		last_row = last_row.replace("row_listInsurance","");
		last_row++;
	var row = "<tr role='row'>" +
				"<td><input type='checkbox' id='row_listInsurance"+last_row+"'></td>" +
				"<td>"+last_row+"</td>" +
				"<td><a class='href_modalCommon' id='common"+last_row+"' ><input type='text' class='form-control' id='text_common"+last_row+"'></a></td>" +
				"<td><input type='text' class='form-control'/></td>" +
			"</tr>"	
	$("#tb_tab2_listInsurance tbody").append(row);	
	
	if(row_lenght == 4){
		$('#tb_tab2_listInsurance').DataTable({paging:false,"bScrollCollapse": true,"ordering": false, "bDestroy": true,"bPaginate": false,"bFilter" : false,"bLengthChange": false, bInfo: false, scrollY: '300px',scrollCollapse: true, "autoWidth": false,});
		$("#tb_tab2_listInsurance_wrapper .dataTables_scrollHeadInner").css({"width":"100%"});
		$("#tb_tab2_listInsurance_wrapper .table").css({"width":"100%"});
	}
}

/* ลบ row ใน table listInsurance */
function bt_delete_row_listInsurance(){
	$('#tb_tab2_listInsurance input:checkbox:checked').parent().parent().remove();
	var row_lenght = $("#tb_tab2_listInsurance tbody>tr").length;
	if(row_lenght == 4){
		$('#tb_tab2_listInsurance_wrapper .dataTables_scrollBody').closest('.dataTables_scrollBody').css('height', 'auto');
	}
}

/* hyperLink ประเภทของสัญญา */
$(document).on('click', '.href_modalCommon', function () {
	var id = $(this).attr('id');
	id = id.replace("common","");
	var text = $("#text_common"+id).val();
	if(text != ""){
		$("#modal_common").modal('show');
	}
});


/**********สคริป check ถ้ามี action ที่ การติ๊ก Checkbox***************/
var tempTR_Selected="";
var tempTR_Selected2="";
function enable_bt_row_group(e){
	//;
	var CBflag = $(e).is(':checked')
	var check =$("#bt_submit2").attr("disabled");
	var row_status;
	if($("#bt_submit2").attr("disabled")=="disabled" 
		&& $("#bt1_req_edit4").attr("disabled")=="disabled"
			&& $("#bt2_appr_med").attr("disabled")=="disabled"
				&& $("#bt2_not_appr_med").attr("disabled")=="disabled"
	){
		$("#bt_submit2").attr("disabled", false);
		$("#tb_tab1_listStatusInsurance2 tbody>tr").each(function() {
			if ($(this).find('td:nth-child(1) input').is(':checked')) {
				$(this).find('td:nth-child(4) input').attr("disabled", false);
				$(this).find('td:nth-child(5) input').attr("disabled",false);
				$(this).find('td:nth-child(6) input').attr("disabled",false);		
				$(this).find('td:nth-child(7) input').attr("disabled", false);
				
				is1 		= $(this).find("td:nth-child(4) input").prop("checked");
				is2 		= $(this).find("td:nth-child(5) input").prop("checked");
				is3 		= $(this).find("td:nth-child(6) input").prop("checked");
				is4 		= $(this).find("td:nth-child(7) input").prop("checked");
				
				row_status= $(this).find("td:nth-child(8) ").text();
				
				//var row_status = $(this).find("td:nth-child(8) ").text();
				if(row_status=="รออนุมัติ"||row_status=="ขอแก้ไข"||row_status=="อนุมัติแล้ว"){
					$(this).find('td:nth-child(4) input').attr("disabled", true);
					$(this).find('td:nth-child(5) input').attr("disabled", true);
					$(this).find('td:nth-child(6) input').attr("disabled", true);		
					$(this).find('td:nth-child(7) input').attr("disabled", true);
					
				}
			}
	    })
		//var row_now = $(this).parent().parent().find('td:nth-child(2)').text();
	}else{
		alertError("กรุณาบันทึการเปลี่ยนแปลงล่าสุดก่อน")
		$("#bt1_submit_med").attr("disabled", false);
		if(CBflag){
			$(e).prop("checked",false)
		}else{
			$(e).prop("checked",true)
		}
	}
	
	$("#bt_submit2").attr("disabled", false);
	//$("#bt1_delete_med").attr("disabled", false);
	$("#bt1_cancel_med").attr("disabled", false);
	$("#bt1_cancel_med2").attr("disabled", false);
	//$("#bt1_submit_med").attr("disabled", false);
	
	$("#bt2_req_med")		.attr("disabled", false);
	$("#bt2_his_med")		.attr("disabled", false);
	
	$("#bt2_appr_med")		.attr("disabled", false);
	$("#bt2_not_appr_med")	.attr("disabled", false);
	$("#bt2_cancel_med")	.attr("disabled", false);
	$("#bt2_cancel_med2")	.attr("disabled", false);
	
	
	if(row_status=="สร้างใหม่" || row_status=="ไม่อนุมัติ"){
		$("#bt1_req_edit4").attr("disabled", true);
	}else if(row_status=="อนุมัติแล้ว"){
		$("#bt1_req_edit4").attr("disabled", false);
		$("#bt_submit2").attr("disabled", true);
		$("#bt2_appr_med").attr("disabled", true);
		$("#bt2_not_appr_med").attr("disabled", true);
		
	}else if(row_status=="รออนุมัติ"){
		$("#bt2_submit_med").attr("disabled", true);
		$("#bt1_req_edit4").attr("disabled", true);
		$("#bt_submit2").attr("disabled", true);
		
	}
	if(row_status!="สร้างใหม่"){
		$("#bt2_delete_med").attr("disabled", true);
		$("#bt2_req_med").attr("disabled", true);
		
	}
	if(row_status=="สร้างใหม่" || row_status=="ไม่อนุมัติ"){
		$("#bt2_req_med").attr("disabled", false);
	}
	if(row_status=="ขอแก้ไข"){
		$("#bt1_req_edit4").attr("disabled", true);
		$("#bt2_submit_med").attr("disabled", true);
		$("#bt_submit2").attr("disabled", true);
	}
	if(row_status=="แก้ไข"){
		$("#bt1_req_edit4").attr("disabled", true);
		$("#bt2_req_med").attr("disabled", false);
	}
}

var is1;
var is2;
var is3;
var is4;
function enable_bt_row_indiv(e){
	//;
	var CBflag = $(e).is(':checked')
	var check =$("#bt_submit3").attr("disabled");
	var row_status="";
	;
	if($("#bt_submit3").attr("disabled")=="disabled"
		&& $("#bt1_req_edit3").attr("disabled")=="disabled"
			&& $("#bt3_appr_med").attr("disabled")=="disabled"
				&& $("#bt3_not_appr_med").attr("disabled")=="disabled"
	){
		$("#bt_submit3").attr("disabled", false);
		
		$("#tb_tab1_listStatusInsurance tbody>tr").each(function() {
			;
			
			if ($(this).find('td:nth-child(1) input').is(':checked')) {
				$(this).find('td:nth-child(4) input').attr("disabled", false);
				$(this).find('td:nth-child(5) input').attr("disabled", false);
				$(this).find('td:nth-child(6) input').attr("disabled", false);		
				$(this).find('td:nth-child(7) input').attr("disabled", false);
				
				is1 		= $(this).find("td:nth-child(4) input").prop("checked");
				is2 		= $(this).find("td:nth-child(5) input").prop("checked");
				is3 		= $(this).find("td:nth-child(6) input").prop("checked");
				is4 		= $(this).find("td:nth-child(7) input").prop("checked");
				
				row_status= $(this).find("td:nth-child(8) ").text();
				
				//var row_status = $(this).find("td:nth-child(8) ").text();
				if(row_status=="รออนุมัติ"||row_status=="ขอแก้ไข"||row_status=="อนุมัติแล้ว"){
					$(this).find('td:nth-child(4) input').attr("disabled", true);
					$(this).find('td:nth-child(5) input').attr("disabled", true);
					$(this).find('td:nth-child(6) input').attr("disabled", true);		
					$(this).find('td:nth-child(7) input').attr("disabled", true);
				}else if(row_status=="อนุมัติแล้ว"){
					
				}
				
				
			}
	    })
	    
	}else{
		alertError("กรุณาบันทึการเปลี่ยนแปลงล่าสุดก่อน")
		$("#bt_submit3").attr("disabled", false);
		if(CBflag){
			$(e).prop("checked",false)
		}else{
			$(e).prop("checked",true)
		}
	}
	
	$("#bt_submit3")		.attr("disabled", false);
	$("#bt1_cancel_med")	.attr("disabled", false);
	$("#bt1_cancel_med2")	.attr("disabled", false);
	
	$("#bt3_req_med")		.attr("disabled", false);
	$("#bt3_his_med")		.attr("disabled", false);
	
	$("#bt3_appr_med")		.attr("disabled", false);
	$("#bt3_not_appr_med")	.attr("disabled", false);
	$("#bt3_cancel_med")	.attr("disabled", false);
	$("#bt3_cancel_med2")	.attr("disabled", false);
	
	if(row_status=="สร้างใหม่" || row_status=="ไม่อนุมัติ"){
		$("#bt1_req_edit3")	.attr("disabled", true);
	}else if(row_status=="อนุมัติแล้ว"){
		$("#bt1_req_edit3")	.attr("disabled", false);
		$("#bt_submit3")	.attr("disabled", true);
		$("#bt3_req_med")	.attr("disabled", true);
		
		$("#bt3_appr_med")		.attr("disabled", true);
		$("#bt3_not_appr_med")	.attr("disabled", true);
		
	}else if(row_status=="รออนุมัติ"){
		$("#bt3_submit_med")	.attr("disabled", true);
		$("#bt1_req_edit3")		.attr("disabled", true);
		$("#bt_submit3")		.attr("disabled", true);
		
	}
	if(row_status!="สร้างใหม่"){
		$("#bt1_delete_med").attr("disabled", true);
		$("#bt3_req_med").attr("disabled", true);
		
	}
	if(row_status=="สร้างใหม่" || row_status=="ไม่อนุมัติ"){
		$("#bt3_req_med").attr("disabled", false);
	}
	if(row_status=="ขอแก้ไข"){
		$("#bt1_req_edit3").attr("disabled", true);
		$("#bt_submit3").attr("disabled", true);
	}
	if(row_status=="แก้ไข"){
		$("#bt_submit3")	.attr("disabled", false);
		$("#bt1_req_edit3")	.attr("disabled", true);
		$("#bt3_req_med")	.attr("disabled", false).attr("readonly", false);
	}
}
var IC_Yes;
var IC_No;
var Sub_Yes;
var Sub_No;


function enable_bt_row_app(e){
	;
	var row_status="";
	var CBflag = $(e).is(':checked')
	var check =$("#bt_submit1").attr("disabled");
	if($("#bt1_appr_med").attr("disabled")!="disabled"){
		alertError("กรุณาบันทึการเปลี่ยนแปลงล่าสุดก่อน")
		//$("#bt_submit1").attr("disabled", false);
		if(CBflag){
			$(e).prop("checked",false)
		}else{
			$(e).prop("checked",true)
		}
	}else if($("#bt_submit1").attr("disabled")=="disabled"){
		$("#bt_submit1").attr("disabled", false);
		$("#tb_tab1_listAppendix_accum tbody>tr").each(function() {
			if ($(this).find('td:nth-child(1) input').is(':checked')) {
				$(this).find('td:nth-child(7) select').attr("readonly", false);
				$(this).find('td:nth-child(8) select').attr("readonly", false);
				$(this).find('td:nth-child(9) select').attr("readonly", false);
				$(this).find('td:nth-child(10) select').attr("readonly",false);
				SetUserPermissionUW()
				IC_Yes = $(this).find("td:nth-child(7) select").val();
				IC_No = $(this).find("td:nth-child(8) select").val();
				Sub_Yes = $(this).find("td:nth-child(9) select").val();
				Sub_No = $(this).find("td:nth-child(10) select").val();
				
				row_status = $(this).find('td:nth-child(11) ').text();
				if(row_status=="รออนุมัติ"||row_status=="ขอแก้ไข"){
					$(this).find('td:nth-child(7) select').attr("readonly", true);
					$(this).find('td:nth-child(8) select').attr("readonly", true);
					$(this).find('td:nth-child(9) select').attr("readonly", true);
					$(this).find('td:nth-child(10) select').attr("readonly",true);
					
					  
					$("#bt1_req_med").attr("disabled", true);
					$("#bt_submit1").attr("disabled", true);
				}else if(row_status=="รออนุมัติ"||row_status=="อนุมัติแล้ว"){
					$(this).find('td:nth-child(7) select').attr("readonly", true);
					$(this).find('td:nth-child(8) select').attr("readonly", true);
					$(this).find('td:nth-child(9) select').attr("readonly", true);
					$(this).find('td:nth-child(10) select').attr("readonly",true);
					$("#bt1_req_med").attr("disabled", true);
					$("#bt_submit1").attr("disabled", true);
				}else{
					$(this).find('td:nth-child(7) select').attr("readonly", false);
					$(this).find('td:nth-child(8) select').attr("readonly", false);
					$(this).find('td:nth-child(9) select').attr("readonly", false);
					$(this).find('td:nth-child(10) select').attr("readonly",false);
					$("#bt_submit1")		.attr("disabled", false);
					$("#bt1_req_med")		.attr("disabled", false);
				}
			}
			
			
	    })
		//var row_now = $(this).parent().parent().find('td:nth-child(2)').text();
	}else{
		alertError("กรุณาบันทึการเปลี่ยนแปลงล่าสุดก่อน")
		$("#bt_submit1").attr("disabled", false);
		if(CBflag){
			$(e).prop("checked",false)
		}else{
			$(e).prop("checked",true)
		}
	}
	
	
	
	$("#bt1_cancel_med")	.attr("disabled", false);
	$("#bt1_cancel_med2")	.attr("disabled", false);
	$("#bt1_appr_med")		.attr("disabled", false);
	$("#bt1_not_appr_med")	.attr("disabled", false);
	$("#bt1_his_med")		.attr("disabled", false);
	
	;
	if(row_status=="สร้างใหม่" || row_status=="ไม่อนุมัติ"){
		$("#bt1_req_edit2").attr("disabled", true);
	}else if(row_status=="อนุมัติแล้ว"){
		$("#bt1_req_edit2").attr("disabled", false);
		
	}else if(row_status=="รออนุมัติ"){
		$("#bt1_submit_med").attr("disabled", true);
		$("#bt1_req_edit2").attr("disabled", true);
		
	}
	if(row_status!="สร้างใหม่"){
		$("#bt1_delete_med").attr("disabled", true);
		$("#bt1_req_med").attr("disabled", true);
		
	}
	if(row_status=="สร้างใหม่" || row_status=="ไม่อนุมัติ"){
		$("#bt1_req_med").attr("disabled", false);
	}
	if(row_status=="ขอแก้ไข"){
		$("#bt1_req_edit2").attr("disabled", true);
	}
	if(row_status=="แก้ไข"){
		$("#bt1_req_edit2").attr("disabled", true);
		$("#bt1_req_med").attr("disabled", false);
	}
	
}

/**********สคริป ปรับ enable ปุ่มต่างๆ เมื่อกด แคนเซิล***************/
function enable_bt_Cancel_CB(e){
	//;
	var CBflag = $(e).is(':checked')
	var check =$("#bt_submit1").attr("disabled");
	var row_status="";
	//if($("#bt_submit1").attr("disabled")=="disabled"){
		$("#bt_submit1").attr("disabled", true);
		$("#tb_tab1_listAppendix_accum tbody>tr").each(function() {
			if ($(this).find('td:nth-child(1) input').is(':checked')) {
				$(this).find('td:nth-child(1) input').prop("checked",false);
				$(this).find('td:nth-child(7) select').attr("readonly", true);
				$(this).find('td:nth-child(8) select').attr("readonly", true);
				$(this).find('td:nth-child(9) select').attr("readonly", true);
				$(this).find('td:nth-child(10) select').attr("readonly",true);
				
				$(this).find('td:nth-child(7) select').val(IC_Yes);
				$(this).find('td:nth-child(8) select').val(IC_No);
				$(this).find('td:nth-child(9) select').val(Sub_Yes);
				$(this).find('td:nth-child(10) select').val(Sub_No);
				
				row_status=$(this).find('td:nth-child(11) ').text();
				}
	    })
		//var row_now = $(this).parent().parent().find('td:nth-child(2)').text();
	//}
	    Statuesave="Y";
	$("#bt1_add_med")		.attr("disabled", false);
	$("#bt1_delete_med")	.attr("disabled", true);
	$("#bt1_cancel_med")	.attr("disabled", true);
	$("#bt1_cancel_med2")	.attr("disabled", true);
	$("#bt1_submit_med")	.attr("disabled", true);
	$("#bt1_appr_med")		.attr("disabled", true);
	$("#bt1_not_appr_med")	.attr("disabled", true);
	$("#bt1_req_med")		.attr("disabled", true);
	$("#bt_submit1")		.attr("disabled", true);
	$("#bt1_his_med")		.attr("disabled", true);
	$("#bt1_req_edit2")		.attr("disabled", true);
	
	
}
/**********สคริป ปรับ enable ปุ่มต่างๆ เมื่อกด แคนเซิล***************/
function enable_bt_Cancel_CB3(e){
	//;
	var CBflag = $(e).is(':checked')
	var check =$("#bt_submit1").attr("disabled");
	
	//if($("#bt_submit1").attr("disabled")=="disabled"){
		$("#bt_submit1").attr("disabled", true);
		$("#tb_tab1_listStatusInsurance2 tbody>tr").each(function() {
			if ($(this).find('td:nth-child(1) input').is(':checked')) {
				$(this).find('td:nth-child(1) input').prop("checked",false)
				$(this).find('td:nth-child(2) input').attr("disabled", true);
				$(this).find('td:nth-child(3) input').attr("disabled", true);
				$(this).find('td:nth-child(4) input').attr("disabled", true);
				$(this).find('td:nth-child(5) input').attr("disabled",true);
				$(this).find('td:nth-child(6) input').attr("disabled",true);	
				$(this).find('td:nth-child(7) input').attr("disabled",true);		
				
				$(this).find('td:nth-child(4) input').prop("checked", is1);
				$(this).find('td:nth-child(5) input').prop("checked", is2);
				$(this).find('td:nth-child(6) input').prop("checked", is3);		
				$(this).find('td:nth-child(7) input').prop("checked", is4);
				
			}
	    })
		//var row_now = $(this).parent().parent().find('td:nth-child(2)').text();
	//}
	    Statuesave="Y";
	$("#bt2_add_med").attr("disabled", false);
	$("#bt2_delete_med").attr("disabled", true);
	$("#bt2_cancel_med").attr("disabled", true);
	$("#bt_submit2").attr("disabled", true);
	
	$("#bt2_req_med")		.attr("disabled", true);
	$("#bt2_his_med")		.attr("disabled", true);
	
	$("#bt2_appr_med")		.attr("disabled", true);
	$("#bt2_not_appr_med")	.attr("disabled", true);
	$("#bt2_cancel_med")	.attr("disabled", true);
	$("#bt2_cancel_med2")	.attr("disabled", true);
	
	$("#bt1_req_edit4")	.attr("disabled", true);
	Statuesave="Y";
}
function enable_bt_Cancel_CB2(e){ 
	;
	var tt=tempTR_Selected2;
	var row_now = $(e).parent().parent().parent().find('td:nth-child(2)').text();
	var id = $(e).attr("id");
	var UWflag = $(e).is(':checked')
	var check =$("#bt1_submit_med").attr("disabled");
	
	$("#tb_tab1_listStatusInsurance tbody>tr").each(function() {
		if ($(this).find('td:nth-child(1) input').is(':checked')) {
			;
			$(this).find('td:nth-child(1) input').prop("checked",false)
			$(this).find('td:nth-child(2) input').attr("disabled", true);
			$(this).find('td:nth-child(3) input').attr("disabled", true);
			$(this).find('td:nth-child(4) input').attr("disabled", true);
			$(this).find('td:nth-child(5) input').attr("disabled",true);
			$(this).find('td:nth-child(6) input').attr("disabled",true);		
			$(this).find('td:nth-child(7) input').attr("disabled",true);	
			
			$(this).find('td:nth-child(4) input').prop("checked", is1);
			$(this).find('td:nth-child(5) input').prop("checked", is2);
			$(this).find('td:nth-child(6) input').prop("checked", is3);		
			$(this).find('td:nth-child(7) input').prop("checked", is4);
			
		}
    })
	$("#bt3_add_med")		.attr("disabled", false);
	$("#bt3_delete_med")	.attr("disabled", true);
	$("#bt3_cancel_med")	.attr("disabled", true);
	$("#bt_submit3")		.attr("disabled", true);
	
	$("#bt3_req_med")		.attr("disabled", true);
	$("#bt3_his_med")		.attr("disabled", true);
	
	$("#bt3_appr_med")		.attr("disabled", true);
	$("#bt3_not_appr_med")	.attr("disabled", true);
	$("#bt3_cancel_med")	.attr("disabled", true);
	$("#bt3_cancel_med2")	.attr("disabled", true);
	$("#bt1_req_edit3")	.attr("disabled", true);
	
	Statuesave="Y";
}
function alertError(message)
{
	//;
    $('#txt_alert_error').text(message);
    $('#modal_warning').modal();
}

/************** ฟังก์ชัน 2.1 กดเลือกภาคผนวกต้นทาง**************/
function bt_show_historyTab1() {
	var Txn_id = 0;
	$("#tb_tab1_listAppendix_accum tbody>tr").each(function() {
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
        	console.log("get tb_tab1_listAppendix_accum case error.")
        }
	});
}
/************** ฟังก์ชัน 2.1 กดเลือกภาคผนวกต้นทาง**************/
function bt_show_historyTab2_3() {
	var Txn_id = 0;
	$("#tb_tab1_listStatusInsurance tbody>tr").each(function() {
		if ($(this).find('td:nth-child(1) input ').is(':checked')) {
			Txn_id =$(this).find('td:nth-child(1) input').val();
			
		}
	});
	
	if(Txn_id==0){
		$("#model_tb_txnhistory2").modal('show');
		
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
        	show_historyTab3(response);
        },
        error : function(response) {	
        	console.log("get tb_tab1_listAppendix_accum case error.")
        }
	});
}
function bt_show_historyTab2_2() {
	var Txn_id = 0;
	$("#tb_tab1_listStatusInsurance2 tbody>tr").each(function() {
		if ($(this).find('td:nth-child(1) input ').is(':checked')) {
			Txn_id =$(this).find('td:nth-child(1) input').val();
			
		}
	});
	
	$.ajax({
        type: "POST",
        url : "UW_GetData_Servlet",
        data: {
        	method 	: "getTxnHistory" ,
        	Txn_id : Txn_id	
        },       
        success : function(response) {	
        	show_historyTab3(response);
        },
        error : function(response) {	
        	console.log("get tb_tab1_listAppendix_accum case error.")
        }
	});
}
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
	//$('#tb_model_txnhistory').DataTable().destroy();
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
	$("#tb_model_txnhistory").DataTable({"paging": false,"bDestroy": 
		true,"bPaginate": false,"bFilter" : false,"bInfo" :
			false,"ordering": false,"sScrollY": "300px","searching" :false,scrollCollapse: true });
	$('.sorting_asc').removeClass('sorting_asc');
	$("#tb_model_txnhistory_wrapper .table").css({"width":"100%"});
	$("#tb_model_txnhistory_wrapper .dataTables_scrollHeadInner").css({"width":"100%"});
		
}

function show_historyTab3(value) {
	
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
	
	$("#model_tb_txnhistory2").modal('show');
	
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
	$("#tb_model_txnhistory").DataTable({"paging": false,"bDestroy": 
		true,"bPaginate": false,"bFilter" : false,"bInfo" :
			false,"ordering": false,"sScrollY": "300px","searching" :false,scrollCollapse: true });
	$('.sorting_asc').removeClass('sorting_asc');
	$("#tb_model_txnhistory_wrapper .table").css({"width":"100%"});
	$("#tb_model_txnhistory_wrapper .dataTables_scrollHeadInner").css({"width":"100%"});
}
