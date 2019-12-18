/**********กำหนดการ disable ปุ่ม เพื่อ กำหนก action user ***********/
$(document).ready(function() {
	$("#UW_RuleNav").removeClass('collapse');
	//$("#UW_RuleNav1").addClass('orange-menu')
	//$("#UW_RuleNav11").addClass('active orange-menu ');
	//$("#UW_RuleNav li").addClass('orange-menu');
	
	document.getElementById("sc_001_1_1-1").style.display = "block";
	$("#rd_show_list_all").prop("checked", true);
	$(".autoComma").autoNumeric('init',{vMin: '0', vMax: '999999999'});
	$("#bt1_delete_med").attr("disabled", true);
	//$("#bt1_req_med").attr("disabled", true).css("visibility","hidden");
	$("#bt1_req_med").attr("disabled", true);
	$("#bt1_req_edit").attr("disabled", true);
	$("#bt1_his_med").attr("disabled", true);
	$("#bt1_appr_med").attr("disabled", true);
	//$("#bt1_his_med").attr("disabled", true).css("visibility","hidden");
	//$("#bt1_appr_med").attr("disabled", true).css("visibility","hidden");
	$("#bt1_submit_med").attr("disabled", true);
	$("#bt1_cancel_med").attr("disabled", true);
	$("#bt1_cancel_med2").attr("disabled", true);
	$("#bt1_not_appr_med").attr("disabled", true);
	$("#bt_copy_group").attr("disabled", true);
	$("#row_user_button").hide();
	$("#row_super_button").hide(); 
	
	$("#bt_addGroup_checkList").hide(); 
	$("#bt_copy_group").hide(); 
	
});

/* Tab menu ตั้งค่ารายการตรวจ */
$('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
	var target = $(e.target).attr("href") // activated tab

	if (target == "#1") {
		document.getElementById("sc_001_1_1-1").style.display = "block";
		document.getElementById("sc_001_1_1-2").style.display = "none";
	} else if (target == "#2") {
		document.getElementById("sc_001_1_1-1").style.display = "none";
		document.getElementById("sc_001_1_1-2").style.display = "block";
	}
});

$(document).ready(function() {
	// set dataTable
	$('#tb_mainTab2').DataTable({
		"bDestroy" : true,
		"bPaginate" : false,
		"bFilter" : false,
		"ordering" : false,
		bInfo : false,
	});

	
	
	$('#tb_modal_checkList_blood').DataTable({
		"ordering" : false,
		"bDestroy" : true,
		"bPaginate" : false,
		"bFilter" : false,
		"paging" : false,
		"bInfo" : false,
		"searching" : false,
		"autoWidth" : false,
		scrollY : '200px',
		scrollCollapse : true,
		"oLanguage" : {
			"sSearch" : "ค้นหา: "
		}
	});
	$('.sorting_asc').removeClass('sorting_asc');
	$("#tb_modal_checkList_blood_wrapper .dataTables_scrollHeadInner").css({"width" : "100%"});
	$("#tb_modal_checkList_blood_wrapper .table").css({"width" : "100%"});
});

$(document).ready(function() {
	// set dataTable
	$('#tb_tab1_checklist').DataTable({"bScrollCollapse" : true,"ordering" : true,"bDestroy" : true,
		"bPaginate" : false,"bFilter" : false,"bLengthChange" : false,bInfo : false,
		scrollCollapse : true,
		
	});
	
	
	$('#tb_tab1_checklist').DataTable({"bScrollCollapse" : true,"ordering" : true,"bDestroy" : true,
		"bPaginate" : false,"bFilter" : false,"bLengthChange" : false,bInfo : false,
		scrollCollapse : true,
		
	});
	$('#tb_tab1_checklist').DataTable({"paging": false,"bDestroy": true,"bPaginate": false,"bFilter" : false,"bInfo" : false,"ordering": false,"sScrollY": "500px","searching" :false,scrollCollapse: true ,"oLanguage": {"sSearch": "ค้นหา: "}});
	$('.sorting_asc').removeClass('sorting_asc');
	$("#tb_tab1_checklist_wrapper .dataTables_scrollHeadInner").css({"width" : "100%"});
	$("#tb_tab1_checklist_wrapper .table").css({"width" : "100%"});
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
        	//alert("SUCCESS")
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
	
	//alert("show_basicInfo_data")
	var row_examType  = "";	
	var arr_type = [];
	for (i in response.Tab_Basic_Information[0].exam_type_lookup) {
		
		var obj_examType = response.Tab_Basic_Information[0].exam_type_lookup[i];
		if(obj_examType.pass!="G"){
			row_examType += "<option value='"+obj_examType.pass+"'>"+obj_examType.text+"</option>";
		
			arr_type.push(obj_examType.text);
		}
	}
	$("#exam_type_LookUp").val(arr_type);
	$("#exam_type_LookUp2").val(row_examType);
	
	
	$.ajax({
        type: "POST",
        url : "UW_GetData_Servlet",
        data: {
        	method 	: "getMedExam"
        },       
        success : function(response) {	
        	//alert("SUCCESS")
        	ShowDataMedExam(response);
        },
        error : function(response) {	
        	console.log("get ShowDataMedExam case error.")
        }
	});
		
}
$("#menu_CS_1").click(function(){
	$("#rd_show_list_all").prop("checked", true);
	$("#rd_show_list_UW").prop("checked", false);
	//alert("55")
	$.ajax({
        type: "POST",
        url : "UW_GetData_Servlet",
        data: {
        	method 	: "getMedExam"
        },       
        success : function(response) {	
        	//alert("SUCCESS")
        	ShowDataMedExam(response);

        	
        },
        error : function(response) {	
        	console.log("get ShowDataMedExam case error.")
        }
	});
})
/** *************************** Tab 1 รายการตรวจ ******************************* */



/* search dataTable */
var tab1_table1 = $('#tb_tab1_checklist').DataTable();
$('#search_tb_tab1').on('keyup', function() {
	var countrow=0;
	var counthide=0;
	$("#tb_tab1_checklist>tbody>tr").removeClass("hide");
	$("#tb_tab1_checklist tbody>tr").each(function(i) {
		countrow++;
		
		const inputMatch = $(this).find('selecte,input')
	    .toArray()
	    .some(input => 
	    $(input).val().toLowerCase().includes( $('#search_tb_tab1').val().toLowerCase()));
	
		const textMatch = $(this)
	    .children()
	    .not('td:has("input,select")')
	    .toArray()
	    .some(td => $(td).text().toLowerCase().includes($('#search_tb_tab1').val().toLowerCase()))
	  
		
		if(inputMatch||textMatch){
			
		}else{
			//
			counthide++;
			 $("#tb_tab1_checklist>tbody>tr").eq(i).addClass("hide");
		}

	})
	
	if ($("#rd_show_list_UW").is(':checked')) {
		var tb_length = $("#tb_tab1_checklist>tbody>tr").length;
		var list_UWflag = new Array();

		$("#tb_tab1_checklist tbody>tr").each(function(i) {
			
			if (!$(this).find('td:nth-child(9) input').is(':checked')) {
				$("#tb_tab1_checklist>tbody>tr").eq(i ).addClass("hide");
			}
		})	
	} 
	
	if(countrow==counthide){
		var row = "<tr>"
			+ "<td id='row_no_data_found' colspan='9'><p align='center'>" + "ไม่พบข้อมูล" + "</p></td>";
		$("#tb_tab1_checklist tbody").append(row);
		return;
	}else{
		$("#tb_tab1_checklist tbody>tr").each(function(i) {
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
	$("#tb_model_txnhistory>tbody>tr").removeClass("hide");
	$("#tb_model_txnhistory tbody>tr").each(function(i) {
		countrow++;
		
		const inputMatch = $(this).find('selecte,input')
	    .toArray()
	    .some(input => 
	    $(input).val().toLowerCase().includes( $('#search_history').val().toLowerCase()));
	
		const textMatch = $(this)
	    .children()
	    .not('td:has("input,select")')
	    .toArray()
	    .some(td => $(td).text().toLowerCase().includes($('#search_history').val().toLowerCase()))
	  
		
		if(inputMatch||textMatch){
			
		}else{
			//
			counthide++;
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
	
});

$('#search_history').on('keyup', function() {
	var countrow=0;
	var counthide=0;
	$("#tb_model_txnhistory>tbody>tr").removeClass("hide");
	$("#tb_model_txnhistory tbody>tr").each(function(i) {
		countrow++;
		
		const inputMatch = $(this).find('selecte,input')
	    .toArray()
	    .some(input => 
	    $(input).val().toLowerCase().includes( $('#search_history').val().toLowerCase()));
	
		const textMatch = $(this)
	    .children()
	    .not('td:has("input,select")')
	    .toArray()
	    .some(td => $(td).text().toLowerCase().includes($('#search_history').val().toLowerCase()))
	  
		
		if(inputMatch||textMatch){
			
		}else{
			//
			counthide++;
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
	
});
$.fn.rowCount = function() {
    return $('tr', $(this).find('tbody')).length;
};

$.fn.columnCount = function() {
    return $('th', $(this).find('tbody')).length;
};
/* search dataTable */
var tab2_table2 = $('#tb_mainTab2').DataTable();

$('#search_tb_tab2').on('keyup', function() {
	var countrow=0;
	var counthide=0;
	$("#tb_mainTab2>tbody>tr").removeClass("hide");
	$("#tb_mainTab2 tbody>tr").each(function(i) {
		countrow++;
		const inputMatch = $(this).find('select,input')
	    .toArray()
	    .some(input => $(input).val().toLowerCase().includes( $('#search_tb_tab2').val().toLowerCase()));
		
		const textMatch = $(this)
	    .children()
	    .not('td:has("input,select")')
	    .toArray()
	    .some(td => $(td).text().toLowerCase().includes($('#search_tb_tab2').val().toLowerCase()))
	  
	    const textMatch3 = $(this)
	    .children()
	    
	    .toArray()
	    .some(td => $(td).text().toLowerCase().includes($('#search_tb_tab2').val().toLowerCase()))
	  
		if(inputMatch||textMatch3){
			
		}else{
			 $("#tb_mainTab2>tbody>tr").eq(i).addClass("hide");
			 counthide++
		}
//		if(textMatch){
//			
//		}else{
//			 $("#tb_mainTab2>tbody>tr").eq(i).addClass("hide");
//		}
	})
	
	if(countrow==counthide){
		var row = "<tr>"
			+ "<td id='row_no_data_found' colspan='4'><p align='center'>" + "ไม่พบข้อมูล" + "</p></td>";
		$("#tb_mainTab2 tbody").append(row);
		return;
	}else{
		$("#tb_mainTab2 tbody>tr").each(function(i) {
			;
			var tempp = $(this).find('td:nth-child(1) ').attr("id")
			if($(this).find('td:nth-child(1) ').attr("id")=="row_no_data_found"){
				$(this).remove();	
			}
		});
	}
	//tab2_table2.search(this.value).draw();
});
var tab2_modal3 = $('#tb_modal_checkList_blood').DataTable();

$('#search_modal_tab3').on('keyup', function() {
	//
	var countrow=0;
	var counthide=0;
//	/tb_modal_checkList_blood
	$("#tb_modal_checkList_blood>tbody>tr").removeClass("hide");
	$("#tb_modal_checkList_blood tbody>tr").each(function(i) {
		countrow++;
		const inputMatch = $(this).find('select,input')
	    .toArray()
	    .some(input => $(input).val().toLowerCase().includes( $('#search_modal_tab3').val().toLowerCase()));
		
		
		
		const textMatch3 = $(this)
	    .children()
	    .toArray()
	    .some(td => $(td).text().toLowerCase().includes($('#search_modal_tab3').val().toLowerCase()))
	  
		if(inputMatch||textMatch3){
			
		}else{
			 $("#tb_modal_checkList_blood>tbody>tr").eq(i).addClass("hide");
			 counthide++;
		}
		
	})
	//tab2_modal3.search(this.value).draw();
	
	if(countrow==counthide){
		var row = "<tr>"
			+ "<td id='row_no_data_found' colspan='4'><p align='center'>" + "ไม่พบข้อมูล" + "</p></td>";
		$("#tb_modal_checkList_blood tbody").append(row);
		return;
	}else{
		$("#tb_modal_checkList_blood tbody>tr").each(function(i) {
			;
			var tempp = $(this).find('td:nth-child(1) ').attr("id")
			if($(this).find('td:nth-child(1) ').attr("id")=="row_no_data_found"){
				$(this).remove();		
			}
		});
	}
});


/* radio ระบุเงื่อนไขแสดงข้อมูล */
$("#rd_show_list_UW").click(function() {
	$("#rd_show_list_UW").prop("checked", true);
	$("#rd_show_list_all").prop("checked", false);
});
$("#rd_show_list_all").click(function() {
	$("#rd_show_list_all").prop("checked", true);
	$("#rd_show_list_UW").prop("checked", false);
});

// เปลี่ยนรูปแบบตารางใหม่ตาม radio แสดงเฉพาะ UW_Flag หรือ ALL
function change_rd() {
	
	if ($("#rd_show_list_UW").is(':checked')) {
		var tb_length = $("#tb_tab1_checklist>tbody>tr").length;
		var list_UWflag = new Array();

		$("#tb_tab1_checklist tbody>tr").each(function(i) {
			
			if (!$(this).find('td:nth-child(9) input').is(':checked')) {
				$("#tb_tab1_checklist>tbody>tr").eq(i ).addClass("hide");
			}
		})	
	} else {
		$("#tb_tab1_checklist>tbody>tr").removeClass("hide");
	}
}

/* ปุ่มเพิ่มรายการตรวจ */
function bt_add_rowCheckList() {
	//alert($("#empNameHide").val())
	var last_id = $(
			"#tb_tab1_checklist >tbody>tr:last>td:last input[type='checkbox']")
			.attr('id');
	last_id = last_id.replace("UW_flag", "");
	last_id++;
	var exam_type_LookUp2 = $("#exam_type_LookUp2").val();
	var row = "<tr>"
			+ "<td><input type='checkbox' value='0'  onchange='enable_bt_submit_CB(this);'  class='checker panel_head_big' checked/></td>"
			+ "<td><input  type='text' id='tb1_td' class='form-control ' maxlength='2' style='width:100%' " +
					" onchange='validate_row(this);' onkeyup='validate_row_special(this);'/></td>"
			
			+ "<td style='width:10%'><div class='text-left'>" +
			"<input type='text' value='"+"' " +
			"class='form-control'  " +
			"style='width:100%'" +
			"data-toggle='tooltip' title='"+"'  onkeyup='validate_row_special(this);'/></div></td>"
		
			//<button type="button" class="btn btn-primary fa fa-history" id="" data-toggle="tooltip" title="" data-original-title="เร็วๆ นี้"></button>
			+ "<td style='width:33%'><div class='text-left'>" +
				"<input type='text' value='"+"' " +
					"class='form-control'  " +
					"style='width:100%'" +
					"data-toggle='tooltip' title='"
					+"'/></div></td>"
		
		
		
			
			+ "<td>"
			+ "<select class='form-control' style='width:100%'>"+exam_type_LookUp2+""
			
			//+ "<option value='O'>O</option>"
			//+ "<option value='B'>B</option>"
			+ "</select>"
			+ "</td>"
			+ "<td><input type='text' class='autoComma form-control' style='width:100%'/></td>"
			+ "<td><input type='text' value='N' disabled='disabled' class='form-control' style='width:100%'/></td>"
			+ "<td><input type='text' value='' disabled='disabled' class='form-control' style='width:100%'/></td>"
			+ "<td><input type='checkbox' class='checker panel_head_big' value='RD' onchange='enable_bt_submit_UW(this);' id='UW_flag" + last_id + "'/></td>" 
			+ "</tr>";
	
	$("#tb_tab1_checklist tbody>tr:first").before(row);
	$('.dataTables_scrollBody').scrollTop(0);
	$(".autoComma").autoNumeric('init',{vMin: '0', vMax: '999999999'});
	$("#bt1_add_med").attr("disabled", true);
	$("#bt1_delete_med").attr("disabled", false);
	$("#bt1_submit_med").attr("disabled", false);
}

//setInterval( function () {
//    scrollPos = $(".dataTables_scrollBody").scrollTop();
//    myTable.ajax.reload(function() {
//        $(".dataTables_scrollBody").scrollTop(scrollPos);
//    },false);
//}, 10000 );
/**********สคริป เช็ค โค้ดซ้ำ***************/
var count_same=0;
function validate_row(e){
	
	var id = $(e).attr("id");
	var code = $(e).val();
	
	$("#tb_tab1_checklist tbody>tr").each(function() {
		if ($(this).find('td:nth-child(1) input').is(':checked')) {
			//continue
		}
		else if($(this).find('td:nth-child(2) input').val()==code){
			//alert("รหัสซ้ำ กรุณาระบุรหัสใหม่อีกครั้ง ")
			alertError("รหัสซ้ำ กรุณาระบุรหัสใหม่อีกครั้ง")
			$(e).val("");
			//return;
		}
	})
	
//	$.ajax({
//        type: "POST",
//        url : "UW_GetData_Servlet",
//        data: {
//        	method 	: "getMedExamKey",
//            exam_key 	: code
//        },       
//        success : function(response) {	
//        	isAllreadyHave(response);
//        	if(count_same>0){
//        		count_same=0;
//        		$(e).val("");
//        	}
//			
//			return;
//			
//        	//SetUserPermissionUW();
//        },
//        error : function(response) {	
//        	console.log("get getMedExamKey case error.")
//        }
//	});
	
}
function isAllreadyHave(value) {
	
	if(value.MedExam_Data.length>0){
		count_same++;
		alertError("รหัสซ้ำ กรุณาระบุรหัสใหม่อีกครั้ง")
	}
}

var SpacialCharacter = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi;
function validate_row_special(e){
	
	var id = $(e).attr("id");
	var code = $(e).val();
	if (code.match(SpacialCharacter))
	{
		alert("มีเครื่องหมายพิเศษ");
		$(e).val($(e).val().replace(SpacialCharacter, ''));
	}
	
}
function set_default_version2(value) {
	//$('#keyGroup').val(
	var appendixVersion = 0;
	
	for(var i = 0; i < value.MaxExam_code_Data.length; i++){
	    $("#keyGroup").val((value.MaxExam_code_Data[i].MaxExam_code)).attr("disabled", true);
	}
	
	
	
	
}
/**********สคริป default group code***************/
function initGroupCode(e){
	
	$.ajax({
        type: "POST",
        url : "UW_GetData_Servlet",
        data: {
        	method 	: "getMaxExamGroupCode"
        	
        },       
        success : function(response) {	
        	
        	set_default_version2(response);
        	//$("#appendixValue").val("");
        	
        	var countdata=0;
        	$("#modal_group_checkList").modal('show');
        	$('#nameGroup').val("").attr("disabled", false);;
        	//var tb_length = $("#tb_mainTab2>tbody>tr").length+1;
        	tb_length=Number($('#keyGroup').val())+1;
        	if(tb_length<10){
        		$('#keyGroup').val("00"+(tb_length)).attr("disabled", true);
        	}else if(tb_length<100){
        		$('#keyGroup').val("0"+(tb_length)).attr("disabled", true);
        	}else {
        		$('#keyGroup').val((tb_length)).attr("disabled", true);
        	}
        	$("#tb_modal_checkListNot").DataTable().destroy();
        	$("#tb_modal_checkListNot tbody").find("tr").remove();
        	$("#bt_delete_member_exam").attr("disabled", true);
        	$('#tb_modal_checkListNot').DataTable({"bScrollCollapse" : true,"ordering" : true,"bDestroy" : true,
        		"bPaginate" : false,"bFilter" : false,"bLengthChange" : false,bInfo : false,
        		scrollCollapse : true,
        		
        	});
        	$('#tb_modal_checkListNot').DataTable({"paging": false,"bDestroy": true,"bPaginate": false,"bFilter" : false,"bInfo" : false,"ordering": false,"sScrollY": "400px","searching" :false,scrollCollapse: true ,"oLanguage": {"sSearch": "ค้นหา: "}});
        	
        	$('.sorting_asc').removeClass('sorting_asc');
        	$("#tb_modal_checkListNot_wrapper .dataTables_scrollHeadInner").css({"width" : "100%"});
        	$("#tb_modal_checkListNot_wrapper .table").css({"width" : "100%"});
        	
        	$("#tb_modal_checkListNot tbody>tr").each(function() {
    			if ($(this).find('td:nth-child(1) input').is(':checked')) {
    				countdata++;
    			}
        	});
        	
        	if(countdata==0){
        		$("#bt_select_member_exam").attr("disabled", true);
        		$("#tb_modal_checkListNot tbody").find("tr").remove();
        		var row = "<tr>"
    				+ "<td id='row_no_data_found' colspan='4'><p align='center'>" + "ไม่พบข้อมูล" + "</p></td>";
    			$("#tb_modal_checkListNot tbody").append(row);
        	}
        },
        error : function(response) {	
        	console.log("get getMaxExamGroupCode case error.")
        }
	});
	
	
	
	
}
var isUwchecker;
var cur_row_code;
/**********สคริป check ถ้ามี action ที่ การติ๊ก UW***************/
function enable_bt_submit_UW(e){
	;
	if(cur_row_code==$(e).parents('tr').find('td:nth-child(2) input').val() 
			&& $(e).parents('tr').find('td:nth-child(2) input').val() != ""){
		if($(e).parents('tr').find('td:nth-child(1) input').prop("checked")){
			$(e).parents('tr').find('td:nth-child(1) input').prop("checked",false);
			$("#bt1_add_med").attr("disabled", false);
			$("#bt1_delete_med").attr("disabled", true);
			$("#bt1_cancel_med").attr("disabled", true);
			$("#bt1_cancel_med2").attr("disabled", true);
			$("#bt1_submit_med").attr("disabled", true);
			$("#bt1_req_edit").attr("disabled", true);
			$("#bt1_his_med").attr("disabled", true);
			cur_row_code="";
		}else{
			alert("กรุณาบันทึกหรือยกเลิกการเปลี่ยนแปลงปัจจุบันก่อน")
		}
	}else {
		var status 			= $(e).parents('tr').find('td:nth-child(8) input').val();
		var new_row_code 	= $(e).parents('tr').find('td:nth-child(2) input').val();
		var isEditting 		= $(e).parents('tr').find('td:nth-child(2) input').attr("disabled");
		var isReadonly 		= $(e).parents('tr').find('td:nth-child(2) input').attr("readonly");
		var Txn_id 			= $(e).parents('tr').find('td:nth-child(1) input').val();
		
		if((status==""|| (isEditting==null && isReadonly==null))){
			if(Txn_id!=0){
				$("#bt1_cancel_med").attr("disabled", true);
				$("#bt1_cancel_med2").attr("disabled", true);
			}
			if($(e).parents('tr').find('td:nth-child(1) input').prop("checked")){
				$("#bt1_cancel_med").attr("disabled", false);
				$("#bt1_cancel_med2").attr("disabled", false);
			}
			
		}else if($("#bt1_add_med").attr("disabled")=="disabled" 
			&& $("#bt1_cancel_med").attr("disabled")!="disabled"
			&& cur_row_code	==new_row_code
		){
//			$("#bt1_submit_med").attr("disabled", false);
//			var row_now = $(this).parent().parent().find('td:nth-child(2)').text();
//			$(e).parents('tr').find('td:nth-child(1) input').prop("checked",true);
			$("#bt1_cancel_med").attr("disabled", true);
			$("#bt1_cancel_med2").attr("disabled", true);
		}else{
			
			var row_now = $(e).parent().parent().parent().find('td:nth-child(2)').text();
		    
			var id = $(e).attr("id");
			var UWflag = $(e).is(':checked')
			var check =$("#bt1_submit_med").attr("disabled");
			
			if($("#bt1_submit_med").attr("disabled")=="disabled"){
				$("#bt1_submit_med").attr("disabled", false);
				var row_now = $(this).parent().parent().find('td:nth-child(2)').text();
				$(e).parents('tr').find('td:nth-child(1) input').prop("checked",true);
				cur_row_code =$(e).parents('tr').find('td:nth-child(2) input').val();
				isUwchecker =  !$(e).parents('tr').find('td:nth-child(9) input').prop("checked");
				
			}else{
				if($(e).parents('tr').find('td:nth-child(1) input').prop("checked")){
					$("#bt1_add_med").attr("disabled", true);
					$("#bt1_delete_med").attr("disabled", true);
					$("#bt1_cancel_med").attr("disabled", false);
					$("#bt1_cancel_med2").attr("disabled", false);
					$("#bt1_submit_med").attr("disabled", false);
					$("#bt1_req_edit").attr("disabled", true);
					//$(e).parents('tr').find('td:nth-child(1) input').prop("checked",true)
					cur_row_code =$(e).parents('tr').find('td:nth-child(2) input').val();
					isUwchecker =  !$(e).parents('tr').find('td:nth-child(9) input').prop("checked");
					
					return;
				}else{
					alert("กรุณาบันทึกการเปลี่ยนแปลงล่าสุดก่อน")
					$("#bt1_submit_med").attr("disabled", false);
					if(UWflag){
						$(e).prop("checked",false)
					}else{
						$(e).prop("checked",true)
					}
				}
			}
			$("#bt1_add_med").attr("disabled", true);
			$("#bt1_delete_med").attr("disabled", false);
			$("#bt1_cancel_med").attr("disabled", true);
			$("#bt1_cancel_med2").attr("disabled", true);
		}
		
		if(status=="สร้างใหม่"||status==""){
			$("#bt1_cancel_med").attr("disabled", false);
			$("#bt1_cancel_med2").attr("disabled", false);
		}else{
			$("#bt1_add_med").attr("disabled", true);
			
			$("#bt1_cancel_med").attr("disabled", false);
			$("#bt1_cancel_med2").attr("disabled", false);
			$("#bt1_delete_med").attr("disabled", true);
		}
		if(new_row_code!=cur_row_code){
			$("#bt1_delete_med").attr("disabled", true);
		}
		
		
	}
	
	
	
	
}

/**********สคริป check ถ้ามี action ที่ การติ๊ก Checkbox***************/
var tempTR_Selected="";
var tempTR_Selected2="";
function enable_bt_submit_CB(e){
	
	var CBflag = $(e).is(':checked')
	var check =$("#bt1_submit_med").attr("disabled");
	var row_status="";
	if($("#bt1_submit_med").attr("disabled")=="disabled"){
		$("#bt1_submit_med").attr("disabled", false);
		$("#tb_tab1_checklist tbody>tr").each(function() {
			
			if ($(this).find('td:nth-child(1) input').is(':checked')) {
				
				$(this).find('td:nth-child(2) input').attr("disabled", false).attr("readonly", false);
				$(this).find('td:nth-child(3) input').attr("disabled", false).attr("readonly", false);
				$(this).find('td:nth-child(4) input').attr("disabled", false).attr("readonly", false);
				$(this).find('td:nth-child(5) select').attr("disabled",false).attr("readonly", false);
				$(this).find('td:nth-child(6) input').attr("disabled",false).attr("readonly", false);		
				
				row_status=$(this).find('td:nth-child(8) input').val();
				if(row_status!="สร้างใหม่"){
					$(this).find('td:nth-child(2) input').attr("disabled", true).attr("readonly", false);
					$(this).find('td:nth-child(3) input').attr("disabled", true).attr("readonly", false);
					$(this).find('td:nth-child(4) input').attr("disabled", true).attr("readonly", false);
					$(this).find('td:nth-child(5) select').attr("disabled",true).attr("readonly", false);
					$(this).find('td:nth-child(6) input').attr("disabled",true).attr("readonly", false);		
					
				}	
				
				if(row_status=="รออนุมัติ"||row_status=="ขอแก้ไข"){
					$(this).find('td:nth-child(2) input').attr("disabled", true).attr("readonly", false);
					$(this).find('td:nth-child(3) input').attr("disabled", true).attr("readonly", false);
					$(this).find('td:nth-child(4) input').attr("disabled", true).attr("readonly", false);
					$(this).find('td:nth-child(5) select').attr("disabled",true).attr("readonly", false);
					$(this).find('td:nth-child(6) input').attr("disabled",true).attr("readonly", false);
					
					$("#bt1_req_med").attr("disabled", true);
					$("#bt1_submit_med").attr("disabled", true);
					
				}else if(row_status=="อนุมัติแล้ว"){
					$(this).find('td:nth-child(2) input').attr("disabled", true).attr("readonly", false);
					$(this).find('td:nth-child(3) input').attr("disabled", true).attr("readonly", false);
					$(this).find('td:nth-child(4) input').attr("disabled", true).attr("readonly", false);
					$(this).find('td:nth-child(5) select').attr("disabled",true).attr("readonly", false);
					$(this).find('td:nth-child(6) input').attr("disabled",true).attr("readonly", false);
					
					$("#bt1_req_med").attr("disabled", true);
					$("#bt1_submit_med").attr("disabled", true);
				}else{
					$(this).find('td:nth-child(2) input').attr("disabled", false).attr("readonly", false);
					$(this).find('td:nth-child(3) input').attr("disabled", false).attr("readonly", false);
					$(this).find('td:nth-child(4) input').attr("disabled", false).attr("readonly", false);
					$(this).find('td:nth-child(5) select').attr("disabled",false).attr("readonly", false);
					$(this).find('td:nth-child(6) input').attr("disabled",false).attr("readonly", false);
					$("#bt1_submit_med")		.attr("disabled", false);
					$("#bt1_req_med")			.attr("disabled", false);
				}
			}
	    })
		//var row_now = $(this).parent().parent().find('td:nth-child(2)').text();
	}else{
		alert("กรุณาบันทึกการเปลี่ยนแปลงล่าสุดก่อน")
		$("#bt1_submit_med").attr("disabled", false);
		if(CBflag){
			$(e).prop("checked",false)
		}else{
			$(e).prop("checked",true)
		}
	}
	
	$("#bt1_add_med")		.attr("disabled", true);
	$("#bt1_delete_med")	.attr("disabled", false);
	$("#bt1_cancel_med")	.attr("disabled", false);
	$("#bt1_cancel_med2")	.attr("disabled", false);
	$("#bt1_submit_med")	.attr("disabled", false);
	$("#bt1_req_med")		.attr("disabled", false);
	$("#bt1_req_edit")		.attr("disabled", false);
	$("#bt1_his_med")		.attr("disabled", false);
	$("#bt1_appr_med")		.attr("disabled", false);
	$("#bt1_not_appr_med")	.attr("disabled", false);
	if(row_status=="สร้างใหม่" || row_status=="ไม่อนุมัติ"){
		$("#bt1_req_edit").attr("disabled", true);
	}else if(row_status=="อนุมัติแล้ว"){
		$("#bt1_req_edit").attr("disabled", false);
		
	}else if(row_status=="รออนุมัติ"){
		$("#bt1_submit_med").attr("disabled", true);
		$("#bt1_req_edit").attr("disabled", true);
		
	}
	if(row_status!="สร้างใหม่"){
		$("#bt1_delete_med").attr("disabled", true);
		$("#bt1_req_med").attr("disabled", true);
		
	}
	if(row_status=="สร้างใหม่" || row_status=="ไม่อนุมัติ"){
		$("#bt1_req_med").attr("disabled", false);
	}
	if(row_status=="ขอแก้ไข"){
		$("#bt1_req_edit").attr("disabled", true);
	}
	if(row_status=="แก้ไข"){
		$("#bt1_req_edit").attr("disabled", true);
		$("#bt1_req_med").attr("disabled", false);
	}
	
}
/**********สคริป ปรับ enable ปุ่มบันทึก เมื่อมีการแก้ไขแต่ละช่อง***************/
function enable_bt_submit_input(e){
	
	//var CBflag = $(e).is(':checked')
	var check =$("#bt1_submit_med").attr("disabled");
	
	var row_now = $(e).parent().parent().parent().find('td:nth-child(2)').text();
	var code = $(e).parents('tr').find('td:nth-child(2) input').text();
	var now2 = $(e).parents('tr');
	tempTR_Selected=row_now;
	tempTR_Selected2=now2;
	

	$("#bt1_add_med").attr("disabled", true);
	$("#bt1_delete_med").attr("disabled", false);
	$("#bt1_cancel_med").attr("disabled", false);
	$("#bt1_cancel_med2").attr("disabled", false);
	$("#bt1_submit_med").attr("disabled", false);
}
/**********สคริป ปรับ enable ปุ่มต่างๆ เมื่อกด แคนเซิล***************/
function enable_bt_Cancel_CB(e){
	
	var tt=tempTR_Selected2;
	var row_now = $(e).parent().parent().parent().find('td:nth-child(2)').text();
	var id = $(e).attr("id");
	var UWflag = $(e).is(':checked')
	var check =$("#bt1_submit_med").attr("disabled");
	
	
		$("#tb_tab1_checklist tbody>tr").each(function() {
			
			if ($(this).find('td:nth-child(1) input').is(':checked')) {
				
				if($(this).find('td:nth-child(8) input').val().length==0){
					$(this).remove();
					return;
				}
				
			}
		})
	
	
	$("#tb_tab1_checklist tbody>tr").each(function() {
		
		if ($(this).find('td:nth-child(1) input').is(':checked')) {
			$(this).find('td:nth-child(1) input').prop("checked", false)
			$(this).find('td:nth-child(2) input').attr("disabled", true);
			$(this).find('td:nth-child(3) input').attr("disabled", true);
			$(this).find('td:nth-child(4) input').attr("disabled", true);
			$(this).find('td:nth-child(5) select').attr("disabled", true);
			$(this).find('td:nth-child(6) input').attr("disabled", true);	
			if(isUwchecker==null?false:true){
				$(this).find('td:nth-child(9) input').prop("checked",isUwchecker);	
			}
			
		}
    })
	$("#bt1_add_med")		.attr("disabled", false);
	$("#bt1_delete_med")	.attr("disabled", true);
	$("#bt1_cancel_med")	.attr("disabled", true);
	$("#bt1_cancel_med2")	.attr("disabled", true);
	$("#bt1_submit_med")	.attr("disabled", true);
	$("#bt1_cancel_med")	.attr("disabled", true);
	$("#bt1_cancel_med2")	.attr("disabled", true);
	$("#bt1_req_med")		.attr("disabled", true);
	$("#bt1_req_edit")		.attr("disabled", true);
	$("#bt1_his_med")		.attr("disabled", true);
	$("#bt1_appr_med")		.attr("disabled", true);
	$("#bt1_not_appr_med")	.attr("disabled", true);
	isUwchecker=null;
	cur_row_code="";
}
/**********สคริป ปรับ enable ปุ่มบันทึก เลือกสมาชิกรายการตรวจ***************/
function enable_bt_delete_exam(e){
	
	//var CBflag = $(e).is(':checked')
	
	$("#bt_delete_member_exam").attr("disabled", false);
	
}
/* ปุ่มลบรายการตรวจ */
function bt_delete_rowCheckList() {
	dataDelete_Medexam();
	
	
	
	$("#bt1_add_med").attr("disabled", false);
	$("#bt1_delete_med").attr("disabled", true);
	$("#bt1_submit_med").attr("disabled", true);
}




/************************Get Date Master MedExam Tab 1*********************/

function ShowDataMedExam(value) {
	var Exam_code        = "";
	var Name_abb	 	 = "";
	var Name_th		     = "";
	var Exam_type		 = "";
	var Is_Active		 = "";
	var Is_Approved		 = "";
	var Is_UW		     = "";
	var Status		     = "";
	var TStatus		     = "";
	var Txn_id		     = 0;
	var row = "";
	
	$('#tb_tab1_checklist').DataTable().destroy();
	$("#tb_tab1_checklist tbody").find("tr").remove();
	var last_id=0;
	for(var i = 0; i < value.MedExam_Data.length; i++){
		Exam_code 		 = value.MedExam_Data[i].Exam_code;
		Name_abb		 = value.MedExam_Data[i].Name_abb;
		Name_th		 	 = value.MedExam_Data[i].Name_th;
		Exam_type		 = value.MedExam_Data[i].Exam_type;
		Rate_amt		 = value.MedExam_Data[i].Rate_amt;
		Is_Active		 = value.MedExam_Data[i].Is_Active;
		Is_Approved		 = value.MedExam_Data[i].Is_Approved;
		Is_UW		 	 = value.MedExam_Data[i].Is_UW;
		Txn_id		 	 = value.MedExam_Data[i].Txn_id;
		Status			 = value.MedExam_Data[i].Status;
		TStatus			 = value.MedExam_Data[i].Txn_status;
		last_id++;
		
		var exam_type2 = $("#exam_type_LookUp2").val();
		if(Is_Approved){
			var row = "<tr>"
				+ "<td style='width:3%'><input type='checkbox' onchange='enable_bt_submit_CB(this);' value='"+Txn_id+"' class='checker panel_head_big'  style='width:100%'/></td>"
				+ "<td style='width:10%'><input id='tb1_td' type='text' value='"+Exam_code+"' class='form-control' maxlength='2' onchange='validate_row(this);' onkeyup='validate_row_special(this);'  disabled='disabled' style='width:100%'/></td>"
				//+ "<td style='width:9%'><input id='tb1_td' type='hidden' value='"+Exam_code+"' class='form-control'   disabled='disabled' style='width:100%'/>"+Exam_code+"</td>"
				+ "<td style='width:10%'><div class='text-left'>" +
					"<input type='text' disabled='disabled' value='"+Name_abb+"' " +
					"class='form-control'  " +
					"style='width:100%'" +
					"data-toggle='tooltip' title='"+Name_abb+"'  onkeyup='validate_row_special(this);'/></div></td>"
				
				//<button type="button" class="btn btn-primary fa fa-history" id="" data-toggle="tooltip" title="" data-original-title="เร็วๆ นี้"></button>
				+ "<td style='width:33%'><div class='text-left'>" +
						"<input type='text' disabled='disabled' value='"+Name_th+"' " +
							"class='form-control'  " +
							"style='width:100%'" +
							"data-toggle='tooltip' title='"+Name_th
							+"'/></div></td>"
				
				
				+ "<td style='width:10%'>"
				+ "<select disabled='disabled' id='sl_type"+last_id+"' class='form-control' style='width:100%'>"+exam_type2
				+ "</select>"
				+ "</td>"
				+ "<td style='width:11%'><input type='text' value='"+Rate_amt+"' disabled='disabled' class='autoComma form-control' style='width:100%'/></td>"
				+ "<td style='width:9%'><input type='text' type='text' value='"+(Is_Active?"Y":"N")+"' class='form-control' disabled='disabled' style='width:100%'</td>" 
				if(false){
					row =row+ "<td style='width:9%'><input type='text' value='"+"อนุมัติแล้ว"+"'  class='form-control' disabled='disabled' style='width:100%'/></td>"
				}else{
					row =row+ "<td style='width:9%'><input type='text' value='"+TStatus+"' class='form-control' disabled='disabled' style='width:100%'/></td>"
				}
				
				if(Is_UW){
					row =row+ "<td style='width:5%'><input type='checkbox' class='checker panel_head_big' value='"+Exam_code+"' checked='true' id='UW_flag" + last_id + "' onchange='enable_bt_submit_UW(this);' style='width:100%'/></td>"
				}else{
					row =row+ "<td  style='width:5%'><input type='checkbox' class='checker panel_head_big' value='"+Exam_code+"' id='UW_flag" + last_id + "' onchange='enable_bt_submit_UW(this);' style='width:100%'/></td>"
				}
				row =row+ "</tr>";
		        $("#tb_tab1_checklist tbody").append(row);
		        //SET exam_type from DB TO column
		        $("#sl_type"+last_id+" option[value="+Exam_type+"]").attr('selected', true);
		}
		else{
			var row = "<tr>"
				+ "<td style='width:3%'><input type='checkbox' value='"+Txn_id+"' onchange='enable_bt_submit_CB(this);' class='checker panel_head_big'  style='width:100%'/></td>"
				+ "<td style='width:10%'><input id='tb1_td' type='text' value='"+Exam_code+"' class='form-control' maxlength='2'  onchange='validate_row(this);' onkeyup='validate_row_special(this);' disabled='disabled' style='width:100%'/></td>"
				//+ "<td style='width:9%'><input id='tb1_td' type='hidden' value='"+Exam_code+"' class='form-control'   disabled='disabled' style='width:100%'/>"+Exam_code+"</td>"
				//+ "<td style='width:10%'><div class='text-left'><input type='text' value='"+Name_abb+"' class='form-control'  onkeyup='validate_row_special(this);' disabled='disabled' style='width:100%'/></div></td>"
				//+ "<td style='width:33%'><div class='text-left'><input type='text' value='"+Name_th+"' class='form-control'   disabled='disabled' style='width:100%'/></div></td>"
				//+ "<td style='width:9%'><input id='tb1_td' type='hidden' value='"+Exam_code+"' class='form-control'   disabled='disabled' style='width:100%'/>"+Exam_code+"</td>"
				+ "<td style='width:10%'><div class='text-left'>" +
					"<input type='text' disabled='disabled' value='"+Name_abb+"' " +
					"class='form-control'  " +
					"style='width:100%'" +
					"data-toggle='tooltip' title='"+Name_abb+"'  onkeyup='validate_row_special(this);'/></div></td>"
				
				//<button type="button" class="btn btn-primary fa fa-history" id="" data-toggle="tooltip" title="" data-original-title="เร็วๆ นี้"></button>
				+ "<td style='width:33%'><div class='text-left'>" +
						"<input type='text' disabled='disabled' value='"+Name_th+"' " +
							"class='form-control'  " +
							"style='width:100%'" +
							"data-toggle='tooltip' title='"+Name_th
							+"'/></div></td>"
				
				
				+ "<td style='width:10%'>"
				+ "<select  id='sl_type"+last_id+"' onchange='enable_bt_submit_input(this);' disabled='disabled' class='form-control' style='width:100%'>"+exam_type2
				+ "</select>"
				+ "</td>"
				+ "<td style='width:11%'><input type='text' value='"+Rate_amt+"' disabled='disabled' onchange='enable_bt_submit_input(this);' class='autoComma form-control' style='width:100%'/></td>"
				+ "<td style='width:9%'><input disabled='disabled' type='text' type='text' value='"+(Is_Active?"Y":"N")+"'  class='form-control'  style='width:100%'</td>" 
				if(Is_Approved){
					row =row+ "<td style='width:13%'><input type='text' value='"+"อนุมัติแล้ว"+"' class='form-control' disabled='disabled' style='width:100%'/></td>"
				}else{
					row =row+ "<td style='width:13%'><input type='text' value='"+TStatus+"' class='form-control' disabled='disabled' style='width:100%'/></td>"
				}
				if(Is_UW){
					row =row+ "<td style='width:5%'><input type='checkbox' class='checker panel_head_big' value='"+Exam_code+"' checked='true' id='UW_flag" + last_id + "' onchange='enable_bt_submit_UW(this);' style='width:100%'/></td>"
				}else{
					row =row+ "<td style='width:5%'><input type='checkbox' class='checker panel_head_big' value='"+Exam_code+"'  id='UW_flag" + last_id + "' onchange='enable_bt_submit_UW(this);' style='width:100%'/></td>"
					
				}
				row =row+ "</tr>";
		        $("#tb_tab1_checklist tbody").append(row);
		        //SET exam_type from DB TO column
		        $("#sl_type"+last_id+" option[value="+Exam_type+"]").attr('selected', true);
		}
	    
		
	}
	
	$(".autoComma").autoNumeric('init',{vMin: '0', vMax: '999999999'});

	$('#tb_tab1_checklist').DataTable({"bScrollCollapse" : true,"ordering" : true,"bDestroy" : true,
		"bPaginate" : false,"bFilter" : false,"bLengthChange" : false,bInfo : false,
		scrollCollapse : true,
		
	});
	
	
	$('#tb_tab1_checklist').DataTable({"bScrollCollapse" : true,"ordering" : true,"bDestroy" : true,
		"bPaginate" : false,"bFilter" : false,"bLengthChange" : false,bInfo : false,
		scrollCollapse : true,
		
	});
	$('#tb_tab1_checklist').DataTable({"paging": false,"bDestroy": true,"bPaginate": false,"bFilter" : false,"bInfo" : false,"ordering": false,"sScrollY": "500px","searching" :false,scrollCollapse: true ,"oLanguage": {"sSearch": "ค้นหา: "}});
	$('.sorting_asc').removeClass('sorting_asc');
	$("#tb_tab1_checklist_wrapper .dataTables_scrollHeadInner").css({"width" : "100%"});
	$("#tb_tab1_checklist_wrapper .table").css({"width" : "100%"});
	
	SetUserPermissionUW();
	
}

/*1.1 dataSave_Medexam */
function validate_dataSave_Medexam(){
	
	/*ตารางทุพพลภาพ*/
	var exam_code;
	var exam_type;
	var medexam_data = [];
	var medexamRate_data = [];
	var error = 0;
	$("#tb_tab1_checklist tbody>tr").each(function(){
		if($(this).find("input:checkbox").prop("checked") == true){
			obj = {};
			
			obj["Exam_code"] = $(this).find("td:nth-child(2) input").val();
			exam_code=$(this).find("td:nth-child(2) input").val();
			var Name_abb = $(this).find("td:nth-child(3) input").val();
			var Name_th = $(this).find("td:nth-child(4) input").val();
			var Exam_type = $(this).find("td:nth-child(5) option:selected").val();
			exam_type= $(this).find("td:nth-child(5) option:selected").val();
			obj["Rate_amt"] = $(this).find("td:nth-child(6) input").val();
			obj["Is_active"] = $(this).find("td:nth-child(7) input").val()=="Y"?true:false;
			obj["Is_approved"] = $(this).find("td:nth-child(8) input").val()=="อนุมัติแล้ว"?true:false;
			obj["Is_UW"] = $(this).find("td:nth-child(9) input").prop("checked");
			medexam_data.push(obj);
			
			if(exam_code=="" || Name_abb=="" || Name_th=="" || Exam_type==""){
				error++;
			}
			
		}		
	});
	if(error>0){
		alertError("กรุณากรอกข้อมูลให้ครบ");
	}else{
		$("#modal_submit").modal("show");
		
	}
	

/*end create json*/
}

function dataSave_Medexam(){
	;
	/*ตารางทุพพลภาพ*/
	var exam_code;
	var exam_type;
	var Name_abb;
	var Name_th;
	var medexam_data = [];
	var medexamRate_data = [];
	var isapproved="";
	var CTxn_id=0;
	var row_status;
	$("#tb_tab1_checklist tbody>tr").each(function(){
		if($(this).find("input:checkbox").prop("checked") == true){
			obj = {};
			
			obj["Txn_id"] 		= $(this).find("td:nth-child(1) input").val()==""?0:$(this).find("td:nth-child(1) input").val();
			CTxn_id				= $(this).find("td:nth-child(1) input").val();
			obj["Exam_code"] 	= $(this).find("td:nth-child(2) input").val();
			exam_code			= $(this).find("td:nth-child(2) input").val();
			obj["Name_abb"] 	= $(this).find("td:nth-child(3) input").val();
			Name_abb			= $(this).find("td:nth-child(3) input").val();
			obj["Name_th"] 		= $(this).find("td:nth-child(4) input").val();
			Name_th				= $(this).find("td:nth-child(4) input").val();
			obj["Exam_type"] 	= $(this).find("td:nth-child(5) option:selected").val();
			exam_type			= $(this).find("td:nth-child(5) option:selected").val();
			obj["Rate_amt"] 	= $(this).find("td:nth-child(6) input").val();
			obj["Is_active"] 	= $(this).find("td:nth-child(7) input").val()=="Y"?true:false;
			obj["Is_approved"] 	= $(this).find("td:nth-child(8) input").val()=="อนุมัติแล้ว"?true:false;
			obj["Is_UW"] 		= $(this).find("td:nth-child(9) input[type='checkbox']").is(':checked');
			isapproved			=$(this).find("td:nth-child(8) input").val()=="อนุมัติแล้ว"?true:false;
			row_status			=$(this).find("td:nth-child(8) input").val();
			medexam_data.push(obj);
			
			
		}		
	});
	
	
	if(isapproved && CTxn_id==0){
		var Txn_id=0;
		var json_data = {
	        	"method"		: "Tab_MedExam",
	        	 Txn_id 		: Txn_id,
	            "medexam_data"	: JSON.stringify(medexam_data),
	            //"medexamRate_data": JSON.stringify(medexamRate_data)
	            
		}
		$.ajax({
			url: 'UW_SaveData_Servlet',
			type: "POST",
			data: json_data,
			success: function (response) {
				
				set_txn_id_to_row(response);
				$("#tb_tab1_checklist tbody>tr").each(function() {
					if ($(this).find('td:nth-child(1) input').is(':checked')) {
						$(this).find('td:nth-child(1) input').attr("disabled", false).prop("checked",false);
						$(this).find('td:nth-child(2) input').attr("disabled", true);
						$(this).find('td:nth-child(3) input').attr("disabled", true).attr("title",Name_abb);
						$(this).find('td:nth-child(4) input').attr("disabled", true).attr("title",Name_th);
						$(this).find('td:nth-child(5) select').attr("disabled",true).val(exam_type);
						$(this).find('td:nth-child(6) input').attr("disabled",true);	
						$(this).find("td:nth-child(8) input").val("อนุมัติแล้ว");
						$(this).find('td:nth-child(9) input').attr("disabled",false).val(exam_code);
					}
			    });
			    
			}
		});
	console.log("data:",json_data);
	}else if(row_status=="อนุมัติแล้ว"){
		var Txn_id=CTxn_id;
		var json_data = {
	        	"method"		: "Tab_MedExamApprove",
	        	 Txn_id 		: Txn_id,
	            "medexam_data"	: JSON.stringify(medexam_data),
	            //"medexamRate_data": JSON.stringify(medexamRate_data)
	            
		}
		$.ajax({
			url: 'UW_SaveData_Servlet',
			type: "POST",
			data: json_data,
			success: function (response) {
				
				set_txn_id_to_row(response);
				$("#tb_tab1_checklist tbody>tr").each(function() {
					if ($(this).find('td:nth-child(1) input').is(':checked')) {
						$(this).find('td:nth-child(1) input').attr("disabled", false).prop("checked",false);
						$(this).find('td:nth-child(2) input').attr("disabled", true);
						$(this).find('td:nth-child(3) input').attr("disabled", true).attr("title",Name_abb);
						$(this).find('td:nth-child(4) input').attr("disabled", true).attr("title",Name_th);
						$(this).find('td:nth-child(5) select').attr("disabled",true).val(exam_type);
						$(this).find('td:nth-child(6) input').attr("disabled",true);	
						$(this).find("td:nth-child(8) input").val("อนุมัติแล้ว");
						$(this).find('td:nth-child(9) input').attr("disabled",false).val(exam_code);
					}
			    });
			    
			}
		});
	console.log("data:",json_data);
	}else{
		var Txn_id=CTxn_id;
		var json_data = {
	        	"method"		: "Tab_DraftMedExam",
	        	Txn_id 			: Txn_id,
	            "medexam_data"	: JSON.stringify(medexam_data),
	            //"medexamRate_data": JSON.stringify(medexamRate_data)
	            
		}
		$.ajax({
			url: 'UW_SaveData_Servlet',
			type: "POST",
			data: json_data,
			success: function (response) {
				
				set_txn_id_to_row(response);
				$("#tb_tab1_checklist tbody>tr").each(function() {
					if ($(this).find('td:nth-child(1) input').is(':checked')) {
						;
						$(this).find('td:nth-child(1) input').attr("disabled", false).prop("checked",false);
						$(this).find('td:nth-child(2) input').attr("disabled", true);
						$(this).find('td:nth-child(3) input').attr("disabled", true).attr("title",Name_abb);
						$(this).find('td:nth-child(4) input').attr("disabled", true).attr("title",Name_th);
						$(this).find('td:nth-child(5) select').attr("disabled",true).val(exam_type);
						$(this).find('td:nth-child(6) input').attr("disabled",true);	
						$(this).find("td:nth-child(8) input").val("สร้างใหม่");
						if(row_status.length>0){
							$(this).find("td:nth-child(8) input").val(row_status);
						}
						$(this).find('td:nth-child(9) input').attr("disabled",false).val(exam_code);
					}
			    });
			    
			}
		});
	console.log("data:",json_data);
	}
		
	
	cur_row_code="";

$("#bt1_add_med").attr("disabled", false);
$("#bt1_delete_med").attr("disabled", true);
$("#bt1_submit_med").attr("disabled", true);
$("#bt1_cancel_med").attr("disabled", true);
$("#bt1_cancel_med2").attr("disabled", true);
$("#bt1_req_med").attr("disabled", true);
$("#bt1_req_edit").attr("disabled", true);
$("#bt1_his_med").attr("disabled", true);
$("#bt1_appr_med").attr("disabled", true);
$("#bt1_not_appr_med").attr("disabled", true);

isUwchecker=null;
/*end create json*/
}

/* ปุ่มขออนุมัติรายการตรวจ */
function bt_req_approve_rowCheckList() {
	
	/*ตารางทุพพลภาพ*/
	var exam_code;
	var exam_type;
	var Name_abb;
	var Name_th;
	var medexam_data = [];
	var medexamEmail_data = [];
	var medexamRate_data = [];
	$("#tb_tab1_checklist tbody>tr").each(function(){
		if($(this).find("input:checkbox").prop("checked") == true){
			obj = {};
			
			obj["Txn_id"] 		= $(this).find("td:nth-child(1) input").val();
			obj["Exam_code"] 	= $(this).find("td:nth-child(2) input").val();
			exam_code			= $(this).find("td:nth-child(2) input").val();
			obj["Name_abb"] 	= $(this).find("td:nth-child(3) input").val();
			Name_abb			= $(this).find("td:nth-child(3) input").val();
			obj["Name_th"] 		= $(this).find("td:nth-child(4) input").val();
			Name_th				= $(this).find("td:nth-child(4) input").val();
			obj["Exam_type"] 	= $(this).find("td:nth-child(5) option:selected").val();
			exam_type			= $(this).find("td:nth-child(5) option:selected").val();
			obj["Rate_amt"] 	= $(this).find("td:nth-child(6) input").val();
			obj["Is_active"] 	= $(this).find("td:nth-child(7) input").val()=="Y"?true:false;
			obj["Is_approved"] 	= $(this).find("td:nth-child(8) input").val()=="อนุมัติแล้ว"?true:false;
			obj["Is_UW"] 		= $(this).find("td:nth-child(9) input").prop("checked");
			
			obj["empNameHide"] 		=$("#empNameHide").val();
			obj["empID"] 			=$("#empID").val();
			obj["departmentID"] 	=$("#departmentID").val();
			obj["departmentHide"] 	=$("#departmentHide").val();
			obj["requestApprove"] 	="ขออนุมัติ";
			obj["manuName"] 		="รายการตรวจ";
			
			medexam_data.push(obj);
			medexamEmail_data.push(obj);
				
		}		
	});
	var Txn_id=0;
	var json_data = {
        	"method": "Tab_MedExamReqApprove",
        	Txn_id 			: Txn_id,
            "medexam_data": JSON.stringify(medexam_data),
            
	}

	$.ajax({
		url: 'UW_SaveData_Servlet',
		type: "POST",
		data: json_data,
		success: function (response) {
			//
			//set_txn_id_to_row(response);
			$("#tb_tab1_checklist tbody>tr").each(function() {
				if ($(this).find('td:nth-child(1) input').is(':checked')) {
					$(this).find('td:nth-child(1) input').attr("disabled", false).prop("checked",false);
					$(this).find('td:nth-child(2) input').attr("disabled", true);
					$(this).find('td:nth-child(3) input').attr("disabled", true).attr("title",Name_abb);
					$(this).find('td:nth-child(4) input').attr("disabled", true).attr("title",Name_th);
					$(this).find('td:nth-child(5) select').attr("disabled",true).val(exam_type);
					$(this).find('td:nth-child(6) input').attr("disabled",true);	
					$(this).find("td:nth-child(8) input").val("รออนุมัติ");
					$(this).find('td:nth-child(9) input').attr("disabled",false).val(exam_code);
				}
		    });
		    
			/** EMAIL SETTING CHECKLIST  **/
			var json_data2 = {
		        	"method": "send_Email",
		        	"OptionEmail": "2",
		        	"prepareEmail_data": JSON.stringify(medexamEmail_data),
			}
			$.ajax({
				url: 'UW_Email_Servlet',
				type: "POST",
				data: json_data2,
				success: function (response) {
					
				}
			});
			/** EMAIL SETTING CHECKLIST  **/
			
		}
	});
console.log("data:",json_data);
$("#bt1_add_med").attr("disabled", false);
$("#bt1_delete_med").attr("disabled", true);
$("#bt1_submit_med").attr("disabled", true);
$("#bt1_cancel_med").attr("disabled", true);
$("#bt1_cancel_med2").attr("disabled", true);
$("#bt1_req_med").attr("disabled", true);
$("#bt1_req_edit").attr("disabled", true);
$("#bt1_his_med").attr("disabled", true);
$("#bt1_appr_med").attr("disabled", true);
$("#bt1_not_appr_med").attr("disabled", true);
}
/* ปุ่มขออนุมัติรายการตรวจ */
function bt_req_edit_rowCheckList() {
	/*ตารางทุพพลภาพ*/
	var exam_code;
	var exam_type;
	var Name_abb;
	var Name_th;
	var medexam_data = [];
	var medexamRate_data = [];
	var medexamEmail_data = [];
	
	$("#tb_tab1_checklist tbody>tr").each(function(){
		if($(this).find("input:checkbox").prop("checked") == true){
			obj = {};
			
			obj["Txn_id"] = $(this).find("td:nth-child(1) input").val();
			obj["Exam_code"] = $(this).find("td:nth-child(2) input").val();
			exam_code=$(this).find("td:nth-child(2) input").val();
			obj["Name_abb"] = $(this).find("td:nth-child(3) input").val();
			Name_abb= $(this).find("td:nth-child(3) input").val();
			obj["Name_th"] = $(this).find("td:nth-child(4) input").val();
			Name_th= $(this).find("td:nth-child(4) input").val();
			obj["Exam_type"] = $(this).find("td:nth-child(5) option:selected").val();
			exam_type= $(this).find("td:nth-child(5) option:selected").val();
			obj["Rate_amt"] = $(this).find("td:nth-child(6) input").val();
			obj["Is_active"] = $(this).find("td:nth-child(7) input").val()=="Y"?true:false;
			obj["Is_approved"] = $(this).find("td:nth-child(8) input").val()=="อนุมัติแล้ว"?true:false;
			obj["Is_UW"] = $(this).find("td:nth-child(9) input").prop("checked");
			
			
			obj["empNameHide"] 		=$("#empNameHide").val();
			obj["empID"] 				=$("#empID").val();
			obj["departmentID"] 	=$("#departmentID").val();
			obj["departmentHide"] 	=$("#departmentHide").val();
			obj["requestApprove"] 	="ขออนุมัติแก้ไข";
			obj["manuName"] 		="รายการตรวจ";
			medexam_data.push(obj);	
			medexamEmail_data.push(obj);
			
		}		
	});
	var Txn_id=0;
	var json_data = {
        	"method": "Tab_MedExamReqEdit",
        	Txn_id 			: Txn_id,
            "medexam_data": JSON.stringify(medexam_data),
            //"medexamRate_data": JSON.stringify(medexamRate_data)
            
	}

	$.ajax({
		url: 'UW_SaveData_Servlet',
		type: "POST",
		data: json_data,
		success: function (response) {
			//
			set_txn_id_to_row(response);
			$("#tb_tab1_checklist tbody>tr").each(function() {
				if ($(this).find('td:nth-child(1) input').is(':checked')) {
					$(this).find('td:nth-child(1) input').attr("disabled", false).prop("checked",false);
					$(this).find('td:nth-child(2) input').attr("disabled", true);
					$(this).find('td:nth-child(3) input').attr("disabled", true).attr("title",Name_abb);
					$(this).find('td:nth-child(4) input').attr("disabled", true).attr("title",Name_th);
					$(this).find('td:nth-child(5) select').attr("disabled",true).val(exam_type);
					$(this).find('td:nth-child(6) input').attr("disabled",true);	
					$(this).find("td:nth-child(8) input").val("ขอแก้ไข");
					$(this).find('td:nth-child(9) input').attr("disabled",false).val(exam_code);
				}
		    });
			
			
			
			/** EMAIL SETTING CHECKLIST  **/
			var json_data2 = {
		        	"method": "send_Email",
		        	"OptionEmail": "2",
		        	"prepareEmail_data": JSON.stringify(medexamEmail_data),
			}
			$.ajax({
				url: 'UW_Email_Servlet',
				type: "POST",
				data: json_data2,
				success: function (response) {
					
				}
			});
			/** EMAIL SETTING CHECKLIST  **/
		    
		}
	});
console.log("data:",json_data);
$("#bt1_add_med").attr("disabled", false);
$("#bt1_delete_med").attr("disabled", true);
$("#bt1_submit_med").attr("disabled", true);
$("#bt1_cancel_med").attr("disabled", true);
$("#bt1_cancel_med2").attr("disabled", true);
$("#bt1_req_med").attr("disabled", true);
$("#bt1_req_edit").attr("disabled", true);
$("#bt1_his_med").attr("disabled", true);
$("#bt1_appr_med").attr("disabled", true);
$("#bt1_not_appr_med").attr("disabled", true);
}
/* ปุ่มไม่อนุมัติรายการตรวจ */
function bt_not_approve_rowCheckList() {
	/*ตารางทุพพลภาพ*/
	var exam_code;
	var exam_type;
	var Name_abb;
	var Name_th;
	var medexam_data = [];
	var medexamRate_data = [];
	var approve_note="";
	var medexamEmail_data = [];
	var row_status;
	$("#tb_tab1_checklist tbody>tr").each(function(){
		if($(this).find("input:checkbox").prop("checked") == true){
			obj = {};
			//
			obj["Txn_id"] 		= $(this).find("td:nth-child(1) input").val();
			obj["Exam_code"] 	= $(this).find("td:nth-child(2) input").val();
			exam_code			=$(this).find("td:nth-child(2) input").val();
			obj["Name_abb"] 	= $(this).find("td:nth-child(3) input").val();
			Name_abb			= $(this).find("td:nth-child(3) input").val();
			obj["Name_th"] 		= $(this).find("td:nth-child(4) input").val();
			Name_th				= $(this).find("td:nth-child(4) input").val();
			obj["Exam_type"] 	= $(this).find("td:nth-child(5) option:selected").val();
			exam_type			= $(this).find("td:nth-child(5) option:selected").val();
			obj["Rate_amt"] 	= $(this).find("td:nth-child(6) input").val();
			obj["Is_active"] 	= $(this).find("td:nth-child(7) input").val()=="Y"?true:false;
			obj["Is_approved"]	= $(this).find("td:nth-child(8) input").val()=="อนุมัติแล้ว"?true:false;
			obj["Is_UW"] 		= $(this).find("td:nth-child(9) input").prop("checked");
			approve_note		= $("#textarea_reason_back").val();
			
			
			row_status=$(this).find("td:nth-child(8) input").val();
			
			obj["empNameHide"] 		=$("#empNameHide").val();
			obj["empID"] 				=$("#empID").val();
			obj["departmentID"] 	=$("#departmentID").val();
			obj["departmentHide"] 	=$("#departmentHide").val();
			obj["manuName"] 		="รายการตรวจ";
			if(row_status=="รออนุมัติ"){
				obj["requestApprove"] 	="ไม่อนุมัติ";
			}else{
				obj["requestApprove"] 	="ไม่อนุมัติแก้ไข";
			}
			medexam_data.push(obj);
			medexamEmail_data.push(obj);
		}		
	});
	
	
	if(row_status=="รออนุมัติ"){
		var Txn_id=0;
		var json_data = {
	        	"method": "Tab_MedExamNotApprove",
	        	Txn_id 			: Txn_id,
	        	approve_note	: approve_note,
	            "medexam_data": JSON.stringify(medexam_data),
	            
		}

		$.ajax({
			url: 'UW_SaveData_Servlet',
			type: "POST",
			data: json_data,
			success: function (response) {
				//
				$("#tb_tab1_checklist tbody>tr").each(function() {
					if ($(this).find('td:nth-child(1) input').is(':checked')) {
						$(this).find('td:nth-child(1) input').attr("disabled", true).prop("checked",false);
						$(this).find('td:nth-child(2) input').attr("disabled", true);
						$(this).find('td:nth-child(3) input').attr("disabled", true).attr("title",Name_abb);
						$(this).find('td:nth-child(4) input').attr("disabled", true).attr("title",Name_th);
						$(this).find('td:nth-child(5) select').attr("disabled",true).val(exam_type);
						$(this).find('td:nth-child(6) input').attr("disabled",true);	
						$(this).find('td:nth-child(7) input').val("N");
						$(this).find("td:nth-child(8) input").val("ไม่อนุมัติ");
						$(this).find('td:nth-child(9) input').attr("disabled",false).val(exam_code);
					}
			    });
				/** EMAIL SETTING CHECKLIST  **/
				var json_data2 = {
			        	"method": "send_Email",
			        	"OptionEmail": "2",
			        	"prepareEmail_data": JSON.stringify(medexamEmail_data),
				}
				$.ajax({
					url: 'UW_Email_Servlet',
					type: "POST",
					data: json_data2,
					success: function (response) {
						
					}
				});
				/** EMAIL SETTING CHECKLIST  **/
			}
		});
		console.log("data:",json_data);
		$("#bt1_add_med").attr("disabled", false);
		$("#bt1_delete_med").attr("disabled", true);
		$("#bt1_submit_med").attr("disabled", true);
		$("#bt1_cancel_med").attr("disabled", true);
		$("#bt1_cancel_med2").attr("disabled", true);
		$("#bt1_req_med").attr("disabled", true);
		$("#bt1_req_edit").attr("disabled", true);
		$("#bt1_his_med").attr("disabled", true);
		$("#bt1_appr_med").attr("disabled", true);
		$("#bt1_not_appr_med").attr("disabled", true);
	}else{
		var Txn_id=0;
		var json_data = {
	        	"method": "Tab_MedExamNotApproveEdit",
	        	Txn_id 			: Txn_id,
	        	approve_note	: approve_note,
	            "medexam_data": JSON.stringify(medexam_data),
	            //"medexamRate_data": JSON.stringify(medexamRate_data)
	            
		}

		$.ajax({
			url: 'UW_SaveData_Servlet',
			type: "POST",
			data: json_data,
			success: function (response) {
				//
				//set_txn_id_to_row(response);
				$("#tb_tab1_checklist tbody>tr").each(function() {
					if ($(this).find('td:nth-child(1) input').is(':checked')) {
						$(this).find('td:nth-child(1) input').attr("disabled", true).prop("checked",false);
						$(this).find('td:nth-child(2) input').attr("disabled", true);
						$(this).find('td:nth-child(3) input').attr("disabled", true).attr("title",Name_abb);
						$(this).find('td:nth-child(4) input').attr("disabled", true).attr("title",Name_th);
						$(this).find('td:nth-child(5) select').attr("disabled",true).val(exam_type);
						$(this).find('td:nth-child(6) input').attr("disabled",true);	
						$(this).find('td:nth-child(6) input').attr("disabled",true);	
						$(this).find("td:nth-child(8) input").val("อนุม้ติแล้ว");
						$(this).find('td:nth-child(9) input').attr("disabled",false).val(exam_code);
					}
			    });
				/** EMAIL SETTING CHECKLIST  **/
				var json_data2 = {
			        	"method": "send_Email",
			        	"OptionEmail": "2",
			        	"prepareEmail_data": JSON.stringify(medexamEmail_data),
				}
				$.ajax({
					url: 'UW_Email_Servlet',
					type: "POST",
					data: json_data2,
					success: function (response) {
						
					}
				});
				/** EMAIL SETTING CHECKLIST  **/
			}
		});
		console.log("data:",json_data);
		$("#bt1_add_med").attr("disabled", false);
		$("#bt1_delete_med").attr("disabled", true);
		$("#bt1_submit_med").attr("disabled", true);
		$("#bt1_cancel_med").attr("disabled", true);
		$("#bt1_cancel_med2").attr("disabled", true);
		$("#bt1_req_med").attr("disabled", true);
		$("#bt1_req_edit").attr("disabled", true);
		$("#bt1_his_med").attr("disabled", true);
		$("#bt1_appr_med").attr("disabled", true);
		$("#bt1_not_appr_med").attr("disabled", true);
	}
	
}

/* ปุ่มขออนุมัติรายการตรวจ */
function bt_approve_rowCheckList() {
	/*ตารางทุพพลภาพ*/
	var exam_code;
	var exam_type;
	var Name_abb;
	var Name_th;
	var medexam_data = [];
	var medexamRate_data = [];
	var row_status="";
	var medexamEmail_data = [];
	$("#tb_tab1_checklist tbody>tr").each(function(){
		if($(this).find("input:checkbox").prop("checked") == true){
			obj = {};
			//
			obj["Txn_id"] = $(this).find("td:nth-child(1) input").val();
			obj["Exam_code"] = $(this).find("td:nth-child(2) input").val();
			exam_code=$(this).find("td:nth-child(2) input").val();
			obj["Name_abb"] = $(this).find("td:nth-child(3) input").val();
			Name_abb= $(this).find("td:nth-child(3) input").val();
			obj["Name_th"] = $(this).find("td:nth-child(4) input").val();
			Name_th= $(this).find("td:nth-child(4) input").val();
			obj["Exam_type"] = $(this).find("td:nth-child(5) option:selected").val();
			exam_type= $(this).find("td:nth-child(5) option:selected").val();
			obj["Rate_amt"] = $(this).find("td:nth-child(6) input").val();
			obj["Is_active"] = $(this).find("td:nth-child(7) input").val()=="Y"?true:false;
			obj["Is_approved"] = $(this).find("td:nth-child(8) input").val()=="อนุมัติแล้ว"?true:false;
			obj["Is_UW"] = $(this).find("td:nth-child(9) input").prop("checked");
			
			row_status=$(this).find("td:nth-child(8) input").val();
			
			obj["empNameHide"] 		=$("#empNameHide").val();
			obj["empID"] 				=$("#empID").val();
			obj["departmentID"] 	=$("#departmentID").val();
			obj["departmentHide"] 	=$("#departmentHide").val();
			obj["manuName"] 		="รายการตรวจ";
			if(row_status=="รออนุมัติ"){
				obj["requestApprove"] 	="อนุมัติ";
			}else{
				obj["requestApprove"] 	="อนุมัติแก้ไข";
			}
			medexam_data.push(obj);
			medexamEmail_data.push(obj);
		}		
	});
	if(row_status=="ขอแก้ไข"){
		var Txn_id=0;
		var json_data = {
	        	"method": "Tab_MedExamApproveEdit",
	        	Txn_id 			: Txn_id,
	            "medexam_data": JSON.stringify(medexam_data),
	            //"medexamRate_data": JSON.stringify(medexamRate_data)
	            
		}

		$.ajax({
			url: 'UW_SaveData_Servlet',
			type: "POST",
			data: json_data,
			success: function (response) {
				//
				//set_txn_id_to_row(response);
				$("#tb_tab1_checklist tbody>tr").each(function() {
					if ($(this).find('td:nth-child(1) input').is(':checked')) {
						$(this).find('td:nth-child(1) input').attr("disabled", true).prop("checked",false);
						$(this).find('td:nth-child(2) input').attr("disabled", true);
						$(this).find('td:nth-child(3) input').attr("disabled", true).attr("title",Name_abb);
						$(this).find('td:nth-child(4) input').attr("disabled", true).attr("title",Name_th);
						$(this).find('td:nth-child(5) select').attr("disabled",true).val(exam_type);
						$(this).find('td:nth-child(6) input').attr("disabled",true);	
						$(this).find("td:nth-child(8) input").val("แก้ไข");
						$(this).find("td:nth-child(7) input").val("N");
						$(this).find('td:nth-child(9) input').attr("disabled",false).val(exam_code);
					}
			    });
				/** EMAIL SETTING CHECKLIST  **/
				var json_data2 = {
			        	"method": "send_Email",
			        	"OptionEmail": "2",
			        	"prepareEmail_data": JSON.stringify(medexamEmail_data),
				}
				$.ajax({
					url: 'UW_Email_Servlet',
					type: "POST",
					data: json_data2,
					success: function (response) {
						
					}
				});
				/** EMAIL SETTING CHECKLIST  **/
			}
		});
	}else{
		var Txn_id=0;
		var json_data = {
	        	"method": "Tab_MedExamApprove",
	        	Txn_id 			: Txn_id,
	            "medexam_data": JSON.stringify(medexam_data),
	            //"medexamRate_data": JSON.stringify(medexamRate_data)
	            
		}

		$.ajax({
			url: 'UW_SaveData_Servlet',
			type: "POST",
			data: json_data,
			success: function (response) {
				//
				//set_txn_id_to_row(response);
				$("#tb_tab1_checklist tbody>tr").each(function() {
					if ($(this).find('td:nth-child(1) input').is(':checked')) {
						$(this).find('td:nth-child(1) input').attr("disabled", true).prop("checked",false);
						$(this).find('td:nth-child(2) input').attr("disabled", true);
						$(this).find('td:nth-child(3) input').attr("disabled", true).attr("title",Name_abb);
						$(this).find('td:nth-child(4) input').attr("disabled", true).attr("title",Name_th);
						$(this).find('td:nth-child(5) select').attr("disabled",true).val(exam_type);
						$(this).find('td:nth-child(6) input').attr("disabled",true);	
						$(this).find("td:nth-child(8) input").val("อนุมัติแล้ว");
						$(this).find("td:nth-child(7) input").val("Y");
						$(this).find('td:nth-child(9) input').attr("disabled",false).val(exam_code);
					}
			    });
				
				/** GEN JSON SETTING CHECKLIST  **/
				var json_data3 = {
			        	"method": "Gen_JSON_MedExam",	
				}
				$.ajax({
					url: 'UW_JSON_Servlet',
					type: "POST",
					data: json_data3,
					success: function (response) {
						/** EMAIL SETTING CHECKLIST  **/
						var json_data2 = {
					        	"method": "send_Email",
					        	"OptionEmail": "2",
					        	"prepareEmail_data": JSON.stringify(medexamEmail_data),
						}
						$.ajax({
							url: 'UW_Email_Servlet',
							type: "POST",
							data: json_data2,
							success: function (response) {
								
							}
						});
						/** EMAIL SETTING CHECKLIST  **/
						
					}
				});
				/** GEN JSON SETTING CHECKLIST  **/
				
//				/** EMAIL SETTING CHECKLIST  **/
//				var json_data2 = {
//			        	"method": "send_Email",
//			        	"OptionEmail": "2",
//			        	"prepareEmail_data": JSON.stringify(medexamEmail_data),
//				}
//				$.ajax({
//					url: 'UW_Email_Servlet',
//					type: "POST",
//					data: json_data2,
//					success: function (response) {
//						
//					}
//				});
//				/** EMAIL SETTING CHECKLIST  **/
				
				
			}
		});
	}
	
console.log("data:",json_data);
$("#bt1_add_med").attr("disabled", false);
$("#bt1_delete_med").attr("disabled", true);
$("#bt1_submit_med").attr("disabled", true);
$("#bt1_cancel_med").attr("disabled", true);
$("#bt1_cancel_med2").attr("disabled", true);
$("#bt1_req_med").attr("disabled", true);
$("#bt1_req_edit").attr("disabled", true);
$("#bt1_his_med").attr("disabled", true);
$("#bt1_appr_med").attr("disabled", true);
$("#bt1_not_appr_med").attr("disabled", true);
}
function set_txn_id_to_row(value) {
	
	$("#tb_tab1_checklist tbody>tr").each(function() {
		if ($(this).find('td:nth-child(1) input').is(':checked')) {
			$(this).find('td:nth-child(1) input').attr("disabled", false).val(value);
			
		}
    });
}
/*1.2 datadelete_Medexam */

function dataDelete_Medexam(){
	/*ตารางทุพพลภาพ*/
	var medexam_data = [];
	var medexamRate_data = [];
	var Txn_id=0;
	var Status="";
	
	$("#tb_tab1_checklist tbody>tr").each(function(){
		if($(this).find("input:checkbox").prop("checked") == true){
			obj = {};
			
			obj["Exam_code"] 	= $(this).find("td:nth-child(2) input").val();
			Txn_id 				= $(this).find("td:nth-child(1) input").val();
			Status				= $(this).find("td:nth-child(8) input").val();
			medexam_data.push(obj);
			
			//$(this).find("input:checkbox").prop("checked",false)
		}		
	});
	
	if(status!=""){
		$("#modal_delete").modal("show")
		return;
	}
	else if(Number(Txn_id)!=0){
		var json_data = {
				
		    	"method"	: "Tab_Delete_All_Txn",
		    	"Txn_id" : Txn_id,		        
			}

			$.ajax({
				url: 'UW_SaveData_Servlet',
				type: "POST",
				data: json_data,
				success: function (response) {
					$("#tb_tab1_checklist tbody>tr").each(function() {
						
						if ($(this).find('td:nth-child(1) input').is(':checked')) {
							
							
								$(this).remove();
								//return;
							
						}
					})
					//alert("save Success")
					
					//$("#bt_add_row_listAppendix").attr("disabled", false);
					//$('#tb_manage_appendix input[type=radio]:checked').parent().parent().remove();
				}
			});
	}else{
		var json_data = {
	        	"method": "Tab_MedExam",
	            "medexam_data": JSON.stringify(medexam_data),
	            //"medexamRate_data": JSON.stringify(medexamRate_data)
	            
		}

		$.ajax({
			url: 'UW_DeleteData_Servlet',
			type: "POST",
			data: json_data,
			success: function (response) {
			}
		});
		
		$("#tb_tab1_checklist tbody>tr").each(function() {
			
			if ($(this).find('td:nth-child(1) input').is(':checked')) {
				
				
					$(this).remove();
					//return;
				
			}
		})
	}
	
	
console.log("data:",json_data);

$("#bt1_add_med").attr("disabled", false);
$("#bt1_delete_med").attr("disabled", true);
$("#bt1_submit_med").attr("disabled", true);
$("#bt1_cancel_med").attr("disabled", true);
$("#bt1_cancel_med2").attr("disabled", true);
$("#bt1_cancel_med").attr("disabled", true);
$("#bt1_req_med").attr("disabled", true);
$("#bt1_req_edit").attr("disabled", true);
$("#bt1_his_med").attr("disabled", true);
$("#bt1_appr_med").attr("disabled", true);
$("#bt1_not_appr_med").attr("disabled", true);
/*end create json*/
}


/* ลบ row ในตาราง รายการภาคผนวก */
function bt_delete_row_listAppendixTab1(){
	
	
	var chk_length = $("#tb_manage_appendix tbody>tr").length;
	var Txn_id=0;
	var status ="";
	$("#tb_manage_appendix tbody>tr").each(function(){
		if ($(this).find('td:nth-child(1) input ').is(':checked')) {
			
			Txn_id=$(this).find('td:nth-child(1) input' ).val();
			status=$(this).find('td:nth-child(11) ' ).text();
			if(status!=""){
				$("#modal_delete").modal("show")
				return;
			}
			else if(Number(Txn_id)!=0){
				var json_data = {
						
				    	"method"	: "Tab_Delete_All_Txn",
				    	"Txn_id" : Txn_id,		        
					}
	
					$.ajax({
						url: 'UW_SaveData_Servlet',
						type: "POST",
						data: json_data,
						success: function (response) {
							//alert("save Success")
							//set_txn_id_to_row(response);
							//$("#bt_add_row_listAppendix").attr("disabled", false);
							$('#tb_manage_appendix input[type=radio]:checked').parent().parent().remove();
						}
					});
			}
		}
	})
	
	
	$('#bt_add_row_listAppendix').attr("disabled",false);
}
/**
 * ************************** Tab 2 กลุ่มรายการตรวจ *****************************
 */



$("#menu_CS_2").click(function(){
	$.ajax({
        type: "POST",
        url : "UW_GetData_Servlet",
        data: {
        	method 	: "getMedExamGroup"
        },       
        success : function(response) {	
        	
        	ShowDataMedExamGroup(response);
        	SetUserPermissionUW();
        },
        error : function(response) {	
        	console.log("get product case error.")
        }
	});
})

function ShowDataMedExamGroup(value) {
	
	var Exam_code        = "";
	var Name_abb	 	 = "";
	var Name_th		     = "";
	var Exam_type		 = "";
	var Is_Active		 = "";
	var Is_Approved		 = "";
	var Is_UW		     = "";
	var row = "";
	$('#tb_mainTab2').DataTable().destroy();
	$("#tb_mainTab2 tbody").find("tr").remove();
	var last_id=0;
	
	for(var i = 0; i < value.MedExamGroup_Data.length; i++){
		Exam_code 		 = value.MedExamGroup_Data[i].Exam_code;
		Name_abb		 = value.MedExamGroup_Data[i].Name_abb;
		Name_th		 	 = value.MedExamGroup_Data[i].Name_th;
		
		var name_hide       = Exam_code+","+Name_abb+","+Name_th;
        last_id++;
		var row = "<tr>"
		+ "<td style='width:5%'><input type='radio' class='checker panel_head_big' value='"+Exam_code+"' " +
				"name='rd_checker' onchange='enable_copy_blood();'  style='width:100%'/></td>"
		+ "<td style='width:9%'><input type='text' value='"+Exam_code+"' class='form-control'   disabled='disabled' style='width:100%'/></td>"
		+ "<td style='width:15%'><a class='groupBlood' id='tb_body" + last_id
		+ "' onclick='groupBlood2(this);'" +
				"  >" +
				"" +
				"<u><p align='left'>" + Name_abb + "</p></u><input type='hidden' id='exam_hide_code"+last_id+"' value='"+Exam_code+"'</a></td>"
		+ "<td style='width:71%" +
				"'><div class='text-left'>" +
				"<input type='text' value='"+Name_th+"' class='form-control'  " +
				
				"data-toggle='tooltip' title='"+Name_th+"'"+
				"disabled='disabled' style='width:100%'/></div></td>"
				+"<input type='hidden' value='"+Exam_code+"' class='form-control'  " +
				"disabled='disabled' style='width:100%'/></div>" 
		+ "</tr>";

        $("#tb_mainTab2 tbody").append(row);
		//$("#table_PrimaryProduct tbody").append(row);
	}

	$('#tb_mainTab2').DataTable({"bScrollCollapse" : true,"ordering" : false,"bDestroy" : true,
		"bPaginate" : false,"bFilter" : false,"bLengthChange" : false,bInfo : false,
		scrollCollapse : true,
		
	});
	$('.sorting_asc').removeClass('sorting_asc');
	$('#tb_mainTab2').DataTable({"paging": false,"bDestroy": true,"bPaginate": false,"bFilter" : false,"bInfo" : false
		,"ordering": false,"sScrollY": "500px","searching" :false,scrollCollapse: true });
	$('.sorting_asc').removeClass('sorting_asc');
	$("#tb_mainTab2_wrapper .dataTables_scrollHeadInner").css({"width" : "100%"});
	$("#tb_mainTab2_wrapper .table").css({"width" : "100%"});
}
function alertError(message)
{
	
    $('#txt_alert_error').text(message);
    $('#modal_warning').modal();
}
/*2.1 dataSave_MedexamGroup */
function validate_save_new_diagnose_group() {
	//VALIDATE
	var message = "";
	var error = 0;
	var error2 = 0;
	var diagnosegroup_concat = "";
	var ii=0;
	
	var num_row = $("#tb_modal_checkListNot tbody>tr").length;
	var nameGroup = $("#nameGroup").val();
	
	if(num_row > 0){
		$("#tb_modal_checkListNot tbody>tr").each(function(i) {
			
					ii++;
					if(ii==1){
						diagnosegroup_concat = $(this).find('td:nth-child(3) input').val();
						var str = $(this).find('td:nth-child(3) input').val();
						
						var nn = str==null?0:str.lenght;
						if(nn==0){
							ii=0;
						}
					}else{
						diagnosegroup_concat = diagnosegroup_concat
						+","+ $(this).find('td:nth-child(3) input').val();
					}
					
		});
	}
	
    if(nameGroup==null?true:nameGroup.length==0){
		error++;
	}else if(diagnosegroup_concat==null?true:diagnosegroup_concat.length==0){
		error2++;
	}
	if(error > 0){
		message = "กรุณากรอกชื่อกลุ่มรายการตรวจ";
		alertError(message);
		
	}
	else if(error2 > 0){
		message = "กรุณาเพิ่มรายการตรวจ";
		alertError(message);
		
	}else{
		//nameTab 	= "";
		//Statuesave = "Y"; modal_group_checkList
		//dataSave_MedexamGroup();
		$("#modal_submit2").modal('show');
		//dataDelete_BasicInformation();
		//var message = "บันทึกข้อมูลเรียบร้อย";
		//alertSuccess(message);
	}
	

}
function alertSuccess(message)
{
    $('#txt_alert_success').text(message);
    $('#modal_success').modal();
}
function dataSave_MedexamGroup(){
	
	//GET NAME,KEY FROM MODAL
	var keyGroup = $('#keyGroup').val();
	var nameGroup = $('#nameGroup').val();
	
	var medexam_data = [];
	var medexamgroup_data = [];
	
	//LOOP CONCAT STRING FOR CREATE NAME GROUP 
	var diagnosegroup_concat = "";
	var ii=0;
	$("#tb_modal_checkListNot tbody>tr").each(function(i) {
		
				ii++;
				if(ii==1){
					diagnosegroup_concat = $(this).find('td:nth-child(3) input').val();
					var str = $(this).find('td:nth-child(3) input').val();
					
					var nn = str==null?0:str.lenght;
					if(nn==0){
						ii=0;
					}
				}else{
					diagnosegroup_concat = diagnosegroup_concat
					+","+ $(this).find('td:nth-child(3) input').val();
				}
				
	});
	
	
	//THIS WILL INSERT IN Med_exam
	obj = {};
	obj["Exam_code"] = keyGroup;
	obj["Name_abb"] = nameGroup;
	obj["Name_th"] = diagnosegroup_concat==null?"":diagnosegroup_concat;
	obj["Exam_type"] = "G";
	obj["Rate_amt"] = 0;
	obj["Is_active"] = true;
	obj["Is_approved"] = true;
	obj["Is_UW"] = false;
	medexam_data.push(obj);	
	
	//LOOP FOR GET DATA TO MED EXAM GROUP
	$("#tb_modal_checkListNot tbody>tr").each(function(){
			if($(this).find("td:nth-child(2) input").val()!=null){
				obj2 = {};
				obj2["Group_exam_code"] = keyGroup;
			
				obj2["Member_exam_code"] = $(this).find("td:nth-child(2) input").val();
				medexamgroup_data.push(obj2);	
			}
	});
	
	var json_data = {
        	"method": "Tab_MedExamGroup",
            "medexam_data": JSON.stringify(medexam_data),
            "medexamgroup_data": JSON.stringify(medexamgroup_data)
            //"medexamRate_data": JSON.stringify(medexamRate_data)
	}
	
	
	
//	$.ajax({
//		url: 'UW_SaveData_Servlet',
//		type: "POST",
//		data: json_data,
//		success: function (response) {
//			//alert("save Success")
//			var message = "บันทึกข้อมูลเรียบร้อย";
//			alertSuccess(message);
//			display_newrow_diagnose_group()
//			
//		}
//	});
	
	$.ajax({
	url: 'UW_SaveData_Servlet',
	type: "POST",
	data: json_data,
	success: function (response) {
		//alert("save Success")
		var message = "บันทึกข้อมูลเรียบร้อย";
		alertSuccess(message);
		display_newrow_diagnose_group()
		
		/** GEN JSON SETTING CHECKLIST  **/
		var json_data3 = {
        	"method": "Gen_JSON_MedExamG",	
		}
		$.ajax({
			url: 'UW_JSON_Servlet',
			type: "POST",
			data: json_data3,
			success: function (response) {
				
			}
		});
		/** GEN JSON SETTING CHECKLIST  **/
	}
	});
	console.log("data:",json_data);
	
}


function display_newrow_diagnose_group() {
	//$("#modal_submit2").modal('hide');
	
	var header_id;
	var header_full_id;
	var keyGroup = $('#keyGroup').val();
	var nameGroup = $('#nameGroup').val();
	//var header_id = $('#nameGroup').val();
	var diagnosegroup_concat = "";
	var ii=0;
	
	$("#tb_modal_checkListNot tbody>tr").each(function(i) {
				
				ii++;
				if(ii==1){
					diagnosegroup_concat = $(this).find('td:nth-child(3) input').val();
					if($(this).find('td:nth-child(3) input').val()==null?true:$(this).find('td:nth-child(3) input').val().length==0){
						ii=0;
					}
				}else{
					diagnosegroup_concat = diagnosegroup_concat
					+","+ $(this).find('td:nth-child(3) input').val();
				}
				
				header_id = $(this).find('td:nth-child(1) input').attr("id");
				header_full_id= $(this).find('td:nth-child(1) input').attr("id");
				header_id = header_id==null?null:header_id.replace("header_","");
	});
	
	if(header_id==null){
		header_id=$("#header_index").val();
		header_id=(header_id==null?null:header_id.replace("tb_body",""));
		header_id=header_id-1;
	}
	if(header_id==null?true:$("#header_index").val()==0){
		var last_id = $("#tb_mainTab2 tbody>tr:last").find('td:nth-child(3) a')
		.attr('id');
		last_id = last_id.replace("tb_body", "");
		last_id = Number(last_id) + Number(1);
		var row = "<tr><td ><input type='radio' name='rd_checker' class='checker panel_head_big' style='width 3em'/></td>"
			+ "<td><input type='text' value='"+keyGroup+"' class='form-control'   disabled='disabled' style='width:100%'/></td>"
			+ "<td>" +
					
					"<a class='groupBlood' id='tb_body" + last_id
			+ "' onclick='groupBlood2(this);'><u><p align='left'>" + nameGroup + "</p></u>" +
			"<input type='hidden' id='exam_hide_code"+last_id+"' value='"+keyGroup+"' " +"</a></td>"
			+ "<td><input type='text' value='"+(diagnosegroup_concat==null?"":diagnosegroup_concat)+"' class='form-control'   disabled='disabled' style='width:100%'/></td>"
	+ "</tr>"
		$("#tb_mainTab2 tbody>tr:first").before(row);
	}else{
		
		$("#tb_body"+header_id).parents('tr').find("td:nth-child(4) input").val(diagnosegroup_concat);		
	}
	$("#header_index").val("");
	$("#modal_group_checkList").modal('hide');
}







/* link ชื่อกลุ่มรายการตรวจแสดง modal พร้อมข้อมูลนั้น */
function groupBlood2(e) {
	
	
	var id = $(e).attr("id");
	
	id = Number(id.replace("tb_body", ""));
	//id = id - 1;
	// เก็บค่าในแถวที่กด
	//var GroupCode = $("#tb_mainTab2>tbody>tr").eq(id).find("td:nth-child(2) input").val();			
	var GroupCode2 = $("#exam_hide_code"+(id)).val();		
	$("#bt_delete_member_exam").attr("disabled",true);
	
	$.ajax({
        type: "POST",
        url : "UW_GetData_Servlet",
        data: {
        	method 	: "getMedExamGroupDetail",
            groupcode : GroupCode2
        },       
        success : function(response) {	
        	
        	ShowDataMedExamGroupDetail(response,e);
        	SetUserPermissionUW()
        },
        error : function(response) {	
        	console.log("get product case error.")
        }
	});
}
function ShowDataMedExamGroupDetail(value,e) {
	
	var id = $(e).attr("id");
	$("#header_index").val(id);
	id = Number(id.replace("tb_body", ""));
	//id = id - 1;
	
	var keyGroup2 = $(e).parent().parent().find('td:nth-child(2) input').val();
	var nameGroup2 = $(e).parent().parent().find('td:nth-child(3) ').text();
	var dataGroup2 = $(e).parent().parent().find('td:nth-child(4) ').text();
	// เก็บค่าในแถวที่กด
//	var keyGroup = $("#tb_mainTab2>tbody>tr").eq(id).find("td:nth-child(2) input")
//			.val();
//	var nameGroup = $("#tb_mainTab2>tbody>tr").eq(id).find("td:nth-child(3)")
//			.text();
//	var dataGroup = $("#tb_mainTab2>tbody>tr").eq(id).find("td:nth-child(4)")
//			.text();
	var list_dataGroup = new Array();
	list_dataGroup = dataGroup2.split(",");
	$("#modal_group_checkList").modal('show');
	
	$("#keyGroup").val(keyGroup2).attr("disabled", true);//.attr("id","keyGroup"id);
	$("#nameGroup").val(nameGroup2).attr("disabled", true);
	
	var Exam_code        = "";
	var Name_abb	 	 = "";
	var Name_th		     = "";
	var Exam_type		 = "";
	var Is_Active		 = "";
	var Is_Approved		 = "";
	var Is_UW		     = "";
	var row = "";
	$("#tb_modal_checkListNot").DataTable().destroy();
	$("#tb_modal_checkListNot tbody").find("tr").remove();
	var last_id=0;
	for(var i = 0; i < value.MedExamGroupDetail_Data.length; i++){
		
		Exam_code 		 = value.MedExamGroupDetail_Data[i].Exam_code;
		Name_abb		 = value.MedExamGroupDetail_Data[i].Name_abb;
		Name_th		 	 = value.MedExamGroupDetail_Data[i].Name_th;
		var name_hide       = Exam_code+","+Name_abb+","+Name_th;
		last_id++;
		var row = "<tr>"
		+ "<td style='width:10%'><input type='checkbox' class='checker panel_head_big' onchange='enable_bt_delete_exam(this);' class='checker' id='header_"+id+"' style='width:100%'/></td>"
		+ "<td style='width:15%'><input type='text' value='"+Exam_code+"' class='form-control'   disabled='disabled' style='width:100%'/></td>"
		+ "<td style='width:25%'><input type='text' value='"+Name_abb+"' class='form-control'   disabled='disabled' style='width:100%'/></td>"
		+ "<td style='width:50%'><div class='text-left'>" +
				"<input type='text' value='"+Name_th+"' class='form-control'  " +
						"disabled='disabled' style='width:100%'/></div>" +
				"<input type='hidden' value='"+name_hide+"' class='form-control'  " +
						" style='width:100%'/></div>" +		
		"</td>"
		+ "</tr>";

        $("#tb_modal_checkListNot tbody").append(row);
	}

	$("#tb_modal_checkListNot").DataTable({"paging": false,"bDestroy": true,"bPaginate": false,"bFilter" : false,"bInfo" : false
		,"ordering": false,"sScrollY": "400px","searching" :false,scrollCollapse: true });
	$('.sorting_asc').removeClass('sorting_asc');
	$("#tb_modal_checkListNot_wrapper .dataTables_scrollHeadInner").css({"width" : "100%"});
	$("#tb_modal_checkListNot_wrapper .table").css({"width" : "100%"});
//	
}

function bt_copy_diagnose_group() {
	var keyGroup = "";
	var GroupCode = "";
	var nameGroup = "";
	var ch = "";
	var diagnosegroup_concat = "";
	var name_hide="";
	var i = 0;
	
	
	
	//$("#modal_group_checkList").modal('show');
	
	$('#nameGroup').val("").attr("disabled", false);;
	var tb_length = $("#tb_mainTab2>tbody>tr").length+1;
	if(tb_length<10){
		keyGroup="00"+(tb_length);
	}else if(tb_length<100){
		keyGroup="0"+(tb_length);
	}else {
		keyGroup=(tb_length);
	}
	
	$("#tb_mainTab2 tbody>tr ").each(function() {
		if($(this).find('td:nth-child(1) input ').is(':checked')){
		   i++;
	       GroupCode = $(this).find('td:nth-child(2) input').val();
		}
	});
	if(i==0){
		alert("กรุณาเลือกกลุ่มที่ต้องการคัดลอก")
	}else{
		$.ajax({
	        type: "POST",
	        url : "UW_GetData_Servlet",
	        data: {
	        	method 	: "getMedExamGroupDetail",
	            groupcode : GroupCode
	        },       
	        success : function(response) {	
	        	
	        	ShowDataMedExamGroupDetailCopy(response);
	        },
	        error : function(response) {	
	        	console.log("get product case error.")
	        }
		});
	
	
	
	
	$("#modal_group_checkList").modal('show');	
	}
	
}
function set_default_versionGroup(value) {
	;
	var Max_code;
	var keyGroup;
	for(var i = 0; i < value.MedExamGroup_Data.length; i++){
			
			Max_code 		 = value.MedExamGroup_Data[i].Exam_code;
			Max_code		 = Number(Max_code)+1;
		}
	if(Max_code<10){
		keyGroup="00"+(Max_code);
	}else if(Max_code<100){
		keyGroup="0"+(Max_code);
	}else {
		keyGroup=(Max_code);
	}
	$("#keyGroup").val(keyGroup).attr("disabled", true);//.attr("id","keyGroup"id);
	
}
function ShowDataMedExamGroupDetailCopy(value) {
	
	var keyGroup = "";
	var GroupCode = "";
	var nameGroup = "";
	var ch = "";
	var diagnosegroup_concat = "";
	var name_hide="";
	var i = 0;
	
	//$("#modal_group_checkList").modal('show');
	
	$('#nameGroup').val("").attr("disabled", false);;
	var tb_length = $("#tb_mainTab2>tbody>tr").length+1;
	if(tb_length<10){
		keyGroup="00"+(tb_length);
	}else if(tb_length<100){
		keyGroup="0"+(tb_length);
	}else {
		keyGroup=(tb_length);
	}
	
	var header_id = null;
	$("#keyGroup").val(keyGroup).attr("disabled", true);//.attr("id","keyGroup"id);
	$("#nameGroup").val(nameGroup).attr("disabled", false);
	
	$.ajax({
        type: "POST",
        url : "UW_GetData_Servlet",
        data: {
        	method 	: "getMaxMedExamGroup",
        	Appendix_Code : "",
        	Version_ID : 0
        },       
        success : function(response) {	
        	
        	set_default_versionGroup(response);
        	
        },
        error : function(response) {	
        	console.log("get set_default_versionGroup case error.")
        }
	});
	
	var Exam_code        = "";
	var Name_abb	 	 = "";
	var Name_th		     = "";
	var Exam_type		 = "";
	var Is_Active		 = "";
	var Is_Approved		 = "";
	var Is_UW		     = "";
	var row = "";
	$("#tb_modal_checkListNot").DataTable().destroy();
	$("#tb_modal_checkListNot tbody").find("tr").remove();
	var last_id=0;
	for(var i = 0; i < value.MedExamGroupDetail_Data.length; i++){
		
		Exam_code 		 = value.MedExamGroupDetail_Data[i].Exam_code;
		Name_abb		 = value.MedExamGroupDetail_Data[i].Name_abb;
		Name_th		 	 = value.MedExamGroupDetail_Data[i].Name_th;
		var name_hide    = Exam_code+","+Name_abb+","+Name_th;
		last_id++;
		var row = "<tr>"
		+ "<td style='width:10%'><input type='checkbox' class='checker panel_head_big'  style='width:100%'/></td>"
		+ "<td style='width:15%'><input type='text' value='"+Exam_code+"' class='form-control'   disabled='disabled' style='width:100%'/></td>"
		+ "<td style='width:25%'><input type='text' value='"+Name_abb+"' class='form-control'   disabled='disabled' style='width:100%'/></td>"
		+ "<td style='width:50%'><div class='text-left'>" +
				"<input type='text' value='"+Name_th+"' class='form-control'  " +
						"disabled='disabled' style='width:100%'/></div>" +
				"<input type='hidden' value='"+name_hide+"' class='form-control'  " +
						" style='width:100%'/></div>" +		
		"</td>"
		+ "</tr>";

        $("#tb_modal_checkListNot tbody").append(row);
	}


	$("#tb_modal_checkListNot").DataTable({"paging": false,"bDestroy": true,"bPaginate": false,"bFilter" : false,"bInfo" : false
		,"ordering": false,"sScrollY": "400px","searching" :false,scrollCollapse: true });
	$('.sorting_asc').removeClass('sorting_asc');
	$("#tb_modal_checkListNot_wrapper .dataTables_scrollHeadInner").css({"width" : "100%"});
	$("#tb_modal_checkListNot_wrapper .table").css({"width" : "100%"});
//	
}



/* ปุ่มเพิ่มรายการตรวจ */
$("#bt_addGroup_checkList").click(function() {
	$("#tb_modal_checkListNot>tbody>tr *").remove();
});

/* เพิ่มรายการตรวจไปในกลุ่ม */
function bt_addListGroup() {
	var header_id = $("#tb_modal_checkListNot>tbody>tr").eq(0).find("td:nth-child(1) input").attr("id");
	
	$("#tb_modal_checkListNot tbody>tr").each(function() {
				
				var id2 = $(this).parent().parent().find('td:nth-child(2) input')
				.val();
				if(id2==null){
					$("#tb_modal_checkListNot tbody").find("tr").remove();
				}
			});
	var countdata=0;
	$('#tb_modal_checkList_blood input[type=checkbox]:checked').each(
			function() {
				var id = $(this).parent().parent().find('td:nth-child(2) input')
						.val();
				var id_name = $(this).parent().parent().find('td:nth-child(3) input')
						.val();
				var id_mean = $(this).parent().parent().find('td:nth-child(4) input')
						.val();

				var row = "<tr>"; 
						if(header_id==null){
							row=row+ "<td><input onchange='enable_bt_delete_exam(this);' class='checker panel_head_big' type='checkbox'/></td>" ;
						}else{
							//header_id = header_id==null?null:header_id.replace("header_","");
							row=row+ "<td><input onchange='enable_bt_delete_exam(this);' class='checker panel_head_big' type='checkbox' id='"+header_id+"'/></td>" ;
								
						}
						row=row+ "<td><input type='text' value='"+id+"' class='form-control'   disabled='disabled' style='width:100%'/></td>"
					    + "<td><input type='text' value='"+id_name+"' class='form-control'   disabled='disabled' style='width:100%'/></td>"
					    + "<td><input type='text' value='"+id_mean+"' class='form-control'   disabled='disabled' style='width:100%'/></td>"
						
					    + "</tr>"
				$("#tb_modal_checkListNot tbody").append(row);
						countdata++;
	});
//	;
//	var countdata=0;
//	$("#tb_modal_checkList_blood tbody>tr").each(function() {
//		if ($(this).find('td:nth-child(1) input').is(':checked')) {
//			
//		}
//	});
	
	if(countdata==0){
		$("#bt_select_member_exam").attr("disabled", true);
	}else{
		$("#bt_select_member_exam").attr("disabled", false);
	}
	
}






/* ปุ่มยืนยันการเพิ่มรายการตรวจ */
$("#bt_confirm").click(function() {
	$("#modal_group_checkList_blood").modal('hide');
});

function delete_checklist() {
	$("#tb_modal_checkListNot tbody>tr").each(function() {
		if ($(this).find('td:nth-child(1) input').is(':checked')) {
			$(this).remove();
		}
	})
	
	$("#bt_delete_member_exam").attr("disabled",true);
	var count_row=0;
	$("#tb_modal_checkListNot tbody>tr").each(function() {
		//if ($(this).find('td:nth-child(1) input').is(':checked')) {
			count_row++
		//}
	})
	//;
	if(count_row==0){
		$("#bt_delete_member_exam").attr("disabled",true);
		$("#tb_modal_checkListNot tbody").find("tr").remove();
		var row = "<tr>"
			+ "<td id='row_no_data_found' colspan='4'><p align='center'>" + "ไม่พบข้อมูล" + "</p></td>";
		$("#tb_modal_checkListNot tbody").append(row);
	}
}

function chk_popup_checklist() {
	
	
		
	
	$.ajax({
        type: "POST",
        url : "UW_GetData_Servlet",
        data: {
        	method 	: "getMedExamBlood"
        },       
        success : function(response) {	
        	ShowDataMedExamBlood(response);
        },
        error : function(response) {	
        	console.log("get product case error.")
        }
	});
	
}
function ShowDataMedExamBlood(value) {
	
	var Exam_code        = "";
	var Name_abb	 	 = "";
	var Name_th		     = "";
	
	
	$("#modal_group_checkList_blood").modal('show');
	
	
	var row = "";
	//$('#tb_modal_checkList_blood').DataTable().destroy();
	$("#tb_modal_checkList_blood tbody").find("tr").remove();
	var last_id=0;
	for(var i = 0; i < value.MedExamBlood_Data.length; i++){
		Exam_code 		 = value.MedExamBlood_Data[i].Exam_code;
		Name_abb		 = value.MedExamBlood_Data[i].Name_abb;
		Name_th		 	 = value.MedExamBlood_Data[i].Name_th;
		
		
        last_id++;
		var row = "<tr>"
		+ "<td style='width:10%'><input type='checkbox' class='checker panel_head_big' onchange='enable_cb_modal_blood();' style='width:100%'/></td>"
		+ "<td style='width:15%'><input type='text' value='"+Exam_code+"' class='form-control'   disabled='disabled' style='width:100%'/></td>"
		+ "<td style='width:25%'><input type='text' value='"+Name_abb+"' class='form-control'   disabled='disabled' style='width:100%'/></td>"
		+ "<td style='width:50%'><div class='text-left'><input type='text' value='"+Name_th+"' class='form-control'  disabled='disabled' style='width:100%'/></div></td>"
		
//		+ "<td style='width:10%'><input type='checkbox' class='checker'  style='width:100%'/></td>"
//		+ "<td style='width:15%'>"+Exam_code+"</td>"
//		+ "<td style='width:25%'>"+Exam_code+"</td>"
//		+ "<td style='width:50%'></td>"
		+ "</tr>";

        $("#tb_modal_checkList_blood tbody").append(row);
	}
	
	
	var diagnose_value_list = [];
	$("#tb_modal_checkListNot tbody>tr").each(function(m) {
		
		diagnose_value_list.push($(this).find('td:nth-child(2) input').val());

	})
	
	$("#tb_modal_checkList_blood tbody>tr").each(function(n) {
			for (j in diagnose_value_list) {
				if ($(this).find('td:nth-child(2) input' ).val() == diagnose_value_list[j]) {
					$(this).remove();
				}
			}
	})
	


}


function enable_cb_modal_blood(){
	var count=0;
	$("#tb_modal_checkList_blood tbody>tr").each(function() {
		if ($(this).find('td:nth-child(1) input ').is(':checked')) {
			count++;
			
		}
	});
	if(count>0){
		$("#bt_add_list")		.attr("disabled",false);
		$("#bt_cancel_list")	.attr("disabled",false);
	}else{
		$("#bt_add_list")		.attr("disabled",true);
		$("#bt_cancel_list")	.attr("disabled",true);
	}
	
}

function enable_copy_blood(){
	var count=0;
	$("#tb_mainTab2 tbody>tr").each(function() {
		if ($(this).find('td:nth-child(1) input ').is(':checked')) {
			count++;
			
		}
	});
	if(count>0){
		$("#bt_copy_group")		.attr("disabled",false);
		//$("#bt_cancel_list")	.attr("disabled",false);
	}else{
		//$("#bt_add_list")		.attr("disabled",true);
		$("#bt_copy_group")		.attr("disabled",true);
	}
	
}enable_copy_blood
/************** ฟังก์ชัน 2.1 กดเลือกภาคผนวกต้นทาง**************/
function bt_show_historyTab1() {
	var Txn_id = 0;
	$("#tb_tab1_checklist tbody>tr").each(function() {
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

function show_historyTab2(value) {
	
	var Rqst_user_code        = "";
	var Rqst_user_name        = "";
	var Apprv_user_name        = "";
	var Rqst_time	 	 	= "";
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
	$('#tb_model_txnhistory').DataTable().destroy();
	$("#tb_model_txnhistory tbody").find("tr").remove();
	
	
	var last_id=0;
	
	for(var i = 0; i < value.Txn_approve_Data.length; i++){
		Rqst_user_code 		 = value.Txn_approve_Data[i].Rqst_user_code;
		Rqst_user_name		 = value.Txn_approve_Data[i].Rqst_user_name;
		Apprv_user_name		 = value.Txn_approve_Data[i].Apprv_user_name;
		Rqst_time 		 	 = value.Txn_approve_Data[i].Rqst_time;
		Apprv_user_code		 = value.Txn_approve_Data[i].Apprv_user_code;
		Apprv_time			 = value.Txn_approve_Data[i].Apprv_time;
		not_app_date		 = value.Txn_approve_Data[i].Apprv_time;
		Txn_status		 	 = value.Txn_approve_Data[i].Txn_status;
		Txn_status_en		 = value.Txn_approve_Data[i].Txn_status_en;
		Apprv_note			 = value.Txn_approve_Data[i].Apprv_note=="null"?"":value.Txn_approve_Data[i].Apprv_note;
		Apprv_note1=Apprv_note.substring(0, 49); 
		Apprv_note2=Apprv_note.substring(50, 100); 
		Apprv_note3="<label style='word-break: break-all;'>"+Apprv_note1+"<br>"+Apprv_note2+"</label>"
		
		last_id++;
		if(Txn_status_en=="NEW"||Txn_status_en.includes("REQUEST")){
			var row = "<tr >"
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
			var row = "<tr >"
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

function select_all() {
	var product_count=0;
	var product_countall=0;
	$("#tb_modal_checkList_blood tbody>tr").each(function() {
		product_countall++;
		if ($(this).find('td:nth-child(1) input[type=checkbox]').is(':checked')) {
			product_count++;
			
		}	
	})
	if(product_count==product_countall){
		$("#tb_modal_checkList_blood tbody>tr").each(function() {
			$(this).find('td:nth-child(1) input[type=checkbox]').prop('checked',false)
		})
	}else{
		$("#tb_modal_checkList_blood tbody>tr").each(function() {
			$(this).find('td:nth-child(1) input[type=checkbox]').prop('checked',true)
				
		})
	}
	enable_cb_modal_blood();
}
function select_all_not() {
	
	var product_count=0;
	var product_countall=0;
	$("#tb_modal_checkListNot tbody>tr").each(function() {
		product_countall++;
		if ($(this).find('td:nth-child(1) input[type=checkbox]').is(':checked')) {
			product_count++;
			
		}	
	})
	;
	if(product_count==product_countall){
		$("#tb_modal_checkListNot tbody>tr").each(function() {
			$(this).find('td:nth-child(1) input[type=checkbox]').prop('checked',false)
		})
		$("#bt_delete_member_exam").attr("disabled",true);
	}else{
		$("#tb_modal_checkListNot tbody>tr").each(function() {
			$(this).find('td:nth-child(1) input[type=checkbox]').prop('checked',true)
			product_count++;
		})
		//;
		if(product_count==0){
			$("#bt_delete_member_exam").attr("disabled",true);
		}else{
			$("#bt_delete_member_exam").attr("disabled",false);
		}
		
	}
}
