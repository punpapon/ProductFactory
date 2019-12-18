var check_row_modal 	= 0; 
var check_row_modal2 	= 0; 

/**************   Validate  key input data    *********************/ 
 var Statuesave = "Y";
 var nameTab	= "";
 $("#div_product_menu3 *").change(function(event){
	 nameTab 	= "menu_CL_3";
	 Statuesave = "N";
 });
 

$(document).ready( function(event) {
	
/*	$("#tb_COOP_modal").DataTable({"ordering": false,"paging": false,"bInfo" : false, scrollY: '236px',scrollCollapse: true, "autoWidth": false, 
		fixedHeader: {header: true},"oLanguage": {"sSearch": "ค้นหา: "}
	});
	$("#tb_COOP_modal_wrapper .dataTables_scrollHeadInner").css({"width":"100%"});
	$("#tb_COOP_modal_wrapper .table").css({"width":"100%"});*/
	$(".autoComma").autoNumeric('init',{vMin: '0.00', vMax: '999999999.99'})
    $("#tbl_endorseAge_CL").DataTable({"ordering": false,"paging": false,"bInfo" : false, scrollY: '236px',scrollCollapse: true, "autoWidth": false, 
		fixedHeader: {header: true},"oLanguage": {"sSearch": "ค้นหา: "}
	});
	$("#tbl_endorseAge_CL_wrapper .dataTables_scrollHeadInner").css({"width":"100%"});
	$("#tbl_endorseAge_CL_wrapper .table").css({"width":"100%"});
	
	/*$("#tbl_chooseBuyWith1_CL,#tbl_chooseBuyWith2_CL").DataTable({"ordering": false,"paging": false,"bInfo" : false, scrollY: '236px',scrollCollapse: true, "autoWidth": false, 
		fixedHeader: {header: true},"oLanguage": {"sSearch": "ค้นหา: "}
	});*/
	//$("tbl_chooseBuyWith1_CL_wrapper .dataTables_scrollHeadInner").css({"width":"100%"});
	//$("tbl_chooseBuyWith1_CL_wrapper .table").css({"width":"100%"});
	
	/*$(".datatbl_buyWidth1_CL .dataTables_scrollHeadInner,.datatbl_buyWidth2_CL .dataTables_scrollHeadInner").css({"width":"100%"})
	$(".datatbl_buyWidth1_CL .table,.datatbl_buyWidth2_CL .table").css({"width":"100%"});*/
	/*jQuery(".format_date").datetimepicker({
		  onShow:function( ct ){
		  },
		  timepicker:false,
		  format:'d/m/Y',
		  yearOffset:543
	});*/ 
	
		/*lookup Tab ข้อกำหนด - modal ตารางซื้อคู่กับแบบ*/
		var json_data = {
	        	"method": "getProducyBuyWith"
		}
		$.ajax({
		    type: "POST",
		    url : "ProductCL_Data_default_Servlet",
		    data: json_data,       
		    success : function(response) {					    	
		    	var row = "";
		    	
		    	$("#tbl_chooseBuyWith1_CL tbody>tr").remove();
		    	$("#tbl_chooseBuyWith2_CL tbody>tr").remove();
		    	$("#tbl_chooseBuyWith3_CL tbody>tr").remove();
		    	for(i in response.Product){
		    		var obj = response.Product[i];
		    		
		    		row += "<tr>"+
							"<td class='verticalCenter text-center' id='imgOK1_buyWith"+i+"' onclick='imgCheckbox(this.id);'>"+
								"<input type='hidden' id='prd_code' value='"+obj.Prd_code+"'>"+
								"<i class='glyphicon glyphicon-edit'></i>"+
							"</td>"+
							"<td class='verticalCenter text-left'><a>"+obj.Core_biz_prd_code+"</a></td>"+
						"</tr>"
		    	}
		    	
		    	$("#tbl_chooseBuyWith1_CL tbody").append(row)
		    	$("#tbl_chooseBuyWith2_CL tbody").append(row)
		    	$("#tbl_chooseBuyWith3_CL tbody").append(row)
		    	
		    	
		    	 if ( $.fn.dataTable.isDataTable( "#tbl_chooseBuyWith1_CL" ) ) {
			    	  var table = $("#tbl_chooseBuyWith1_CL").DataTable();
			    	  table.destroy();  
			      }
		    	$("#tbl_chooseBuyWith1_CL").DataTable({"ordering": false,"paging": false,"bInfo" : false, scrollY: '236px',scrollCollapse: true, "autoWidth": false, fixedHeader: {header: true},"oLanguage": {"sSearch": "ค้นหา: "}});
				$("#tbl_chooseBuyWith1_CL_wrapper .dataTables_scrollHeadInner").css({"width":"100%"});
				$("#tbl_chooseBuyWith1_CL_wrapper .table").css({"width":"100%"});
				if ( $.fn.dataTable.isDataTable( "#tbl_chooseBuyWith2_CL" ) ) {
			    	  var table = $("#tbl_chooseBuyWith2_CL").DataTable();
			    	  table.destroy();  
			      }
		    	$("#tbl_chooseBuyWith2_CL").DataTable({"ordering": false,"paging": false,"bInfo" : false, scrollY: '236px',scrollCollapse: true, "autoWidth": false, fixedHeader: {header: true},"oLanguage": {"sSearch": "ค้นหา: "}});
				$("#tbl_chooseBuyWith2_CL_wrapper .dataTables_scrollHeadInner").css({"width":"100%"});
				$("#tbl_chooseBuyWith2_CL_wrapper .table").css({"width":"100%"});
				if ( $.fn.dataTable.isDataTable( "#tbl_chooseBuyWith3_CL" ) ) {
			    	  var table = $("#tbl_chooseBuyWith3_CL").DataTable();
			    	  table.destroy();  
			      }
		    	$("#tbl_chooseBuyWith3_CL").DataTable({"ordering": false,"paging": false,"bInfo" : false, scrollY: '236px',scrollCollapse: true, "autoWidth": false, fixedHeader: {header: true},"oLanguage": {"sSearch": "ค้นหา: "}});
				$("#tbl_chooseBuyWith3_CL_wrapper .dataTables_scrollHeadInner").css({"width":"100%"});
				$("#tbl_chooseBuyWith3_CL_wrapper .table").css({"width":"100%"});
				
				
				
		    },
		    error : function(response) {	
		    	console.log("get lookup buyWidth error");
		    }
		});		
		
 }); 

/**************   Validate  key input data    *********************/ 
var Statuesave = "Y";
var nameTab	= "";
$("#div_main_menuBasic_Info *").change(function(event){
	 nameTab 	= "menu_CL_1";
	 Statuesave = "N";
});
$("#div_main_menuCL_3 *").change(function(event){
	 nameTab 	= "menu_CL_3";
	 Statuesave = "N";
});
$("#div_main_menuCL_2 *").change(function(event){
	 nameTab 	= "menu_CL_2";
	 Statuesave = "N";
});
$("#benefit_sale_CL *").change(function(event){
	 nameTab 	= "menu_CL_4";
	 Statuesave = "N";
});
$("#warranty_term_CL *").change(function(event){
	 nameTab 	= "menu_CL_5";
	 Statuesave = "N";
});

function keyProduct_cl(){
	var key = $("#key_Insurance_product_cl").val();
	if(key.length >= 1){
		$("#validate_input1_cl").hide();
	}else{
		$("#validate_input1_cl").show();
	}
}
function th_Name_cl() {
	var thai_Name  = $('#th_Name_cl').val();
	if (thai_Name != "") {
		$("#validate_input2_cl").hide();
	}else{
		$("#validate_input2_cl").show();
	}
}
function th_marketingName_cl(){
	var thaiMarket_Name  = $('#th_marketingName_cl').val();
	if (thaiMarket_Name != "") {
		$("#validate_input3_cl").hide();
	}else{
		$("#validate_input3_cl").show();
	}
}
function validate_input6_cl(){
	var start_date = $("#menu_term1_datefrom_cl").val();
	var end_date = $("#menu_term1_dateto_cl").val();
	if (start_date != "" && end_date != "") {
		$("#validate_input6_cl").hide();
	}else{
		$("#validate_input6_cl").show();
	}
}
function validate_input7_cl(){
	var flag = false;
	$("#tbl_modeTerms tbody>tr").each(function(){
		if($(this).find('td:nth-child(1) input[type="checkbox"]').is(':checked')){
			flag = true;
		}
	});
	if(flag){
		$("#validate_input7_cl").hide();
	}else{
		$("#validate_input7_cl").show();
	}
}
function validate_input8_cl(){
	var ageFrom = $("#start_age_insure_cl").val();
	var ageFrom_unit = $("#start_age_insure_unit_cl option:selected").val();
	var ageTo = $("#end_age_insure_cl").val();
	var ageTo_unit = $("#end_age_insure_unit_cl option:selected").val();
	var flag_validate = validateDate(ageFrom,ageFrom_unit,ageTo,ageTo_unit)
	if( flag_validate ){
		var start_age = $("#start_age_insure_cl").val();
		var end_age = $("#end_age_insure_cl").val();
		if(start_age != "" && end_age != ""){
			$("#validate_input8_cl").hide();
		}else{
			$("#validate_input8_cl").show();
		}
	}else{
		message = "กรุณากรอกข้อมูลพิกัดอายุให้ถูกต้อง"
		alertError(message)
	}
	
}
function validate_input9_cl(){
	//ยังไม่ได้ใช้
	/*var flag = false;
	$("#tbl_formulaTerms tbody>tr").each(function(){
		if($(this).find('td:nth-child(1) input[type="radio"]').is(':checked')){
			flag = true;
		}
	})
	if(flag){
		$("#validate_input9_cl").hide();
	}else{
		$("#validate_input9_cl").show();
	}*/
}
function validate_input10_cl(){
	var flag = false;
	$("#tbl_saleDegreeTerm tbody>tr").each(function(){
		if($(this).find('td:nth-child(1) input[type="checkbox"]').is(':checked')){
			flag = true;
		}
	})
	if(flag){
		$("#validate_input10_cl").hide();
	}else{
		$("#validate_input10_cl").show();
	}
}
function validate_input12_cl(){
	$("#tbl_health_insurance_CL tbody>tr").each(function(){
		var td2 = $(this).find('td:nth-child(2) select').val();
		var td3 = $(this).find('td:nth-child(3) select').val();
		var td4 = $(this).find('td:nth-child(4) select').val();
		if( td2 != "" && td2 != "0" ){
			$("#validate_input12_cl").hide();
		}else{
			$("#validate_input12_cl").show();
		}
	})
}
function validate_input13_cl(){
	$("#tbl_old_insurance_CL tbody>tr").each(function(){
		var td2 = $(this).find('td:nth-child(2) select').val();
		var td3 = $(this).find('td:nth-child(3) select').val();
		var td4 = $(this).find('td:nth-child(4) select').val();
		if( td2 != "" && td2 != "0"){
			$("#validate_input13_cl").hide();
		}else{
			$("#validate_input13_cl").show();
		}
	})
}
function validate_input14_cl(){
	$("#tbl_UW_consider_CL tbody>tr").each(function(){
		var td2 = $(this).find('td:nth-child(2) select').val();
		var td3 = $(this).find('td:nth-child(3) select').val();
		var td4 = $(this).find('td:nth-child(4) select').val();
		if( td2 != "" && td2 != "0"){
			$("#validate_input14_cl").hide();
		}else{
			$("#validate_input14_cl").show();
		}
	})
}
function validate_levelJob(e){
	var flag = $("#mode_career_term0_cl").is(':checked');
	
	if(flag){
		$("#tbl_saleDegreeTerm tbody>tr").each(function(i){
			if(i!=0){
				$(this).find('td:nth-child(1) input').prop("checked",false).attr("disabled",true)
			}
		})
	}else{
		$("#tbl_saleDegreeTerm tbody>tr").each(function(i){
			if(i!=0){
				$(this).find('td:nth-child(1) input').attr("disabled",false)
			}
		})
	}
}
function validateMin_tbCal(e){
	var value = replaceComma($(e).val());
	var max_value = replaceComma($(e).parent().parent().find('td:nth-child(5) input').val());
	
	if(Number(value) >= Number(max_value)){
		if(Number(value) != 0 && Number(max_value) != 0){
			$(e).val("0.00");
			message = "กรุณากรอกข้อมุลให้ถูกต้อง"
			alertError(message);
		}else if(Number(value) == 0 && Number(max_value) > 0){
			$(e).val("0.00");
			message = "กรุณากรอกข้อมุลให้ถูกต้อง"
			alertError(message);
		}
	}
	
}
function validateMax_tbCal(e){
	var value = replaceComma($(e).val());
	var min_value = replaceComma($(e).parent().parent().find('td:nth-child(4) input').val());
	
	if(Number(value) <= Number(min_value)){
		if(Number(value) != 0 && Number(min_value) != 0){
			$(e).val("");
			message = "กรุณากรอกข้อมุลให้ถูกต้อง"
			alertError(message);
		}else if(Number(value) == 0 && Number(min_value) > 0){
			$(e).val("");
			message = "กรุณากรอกข้อมุลให้ถูกต้อง"
			alertError(message);
		}
	}
	var tr_group = $(e).parent().parent().attr('data-group')
	if( $(e).closest('tr').next('tr').attr('data-group') == tr_group){
		var data_result = Number(replaceComma($(e).closest('tr').next('tr').find('td:nth-child(4) input[type="text"]').val())) - 1
		if(value != data_result){
			$(e).val(numberWithCommas(parseFloat(data_result).toFixed(2)));
			message = "กรุณากรอกข้อมุลให้ถูกต้อง"
			alertError(message);
		}
	}
}

function validateMax_tbAmountTo(e){
	var value = replaceComma($(e).val());
	var min_value = replaceComma($(e).parent().parent().find('td:nth-child(2) input').val());
	
	if(Number(value) <= Number(min_value)){
		$(e).val("");
		message = "กรุณากรอกข้อมุลให้ถูกต้อง"
		alertError(message);
	}
}
function validate_maxEM(e){
	var max = $(e).parent().parent().find('td:nth-child(2)').text();
	var value_current = $(e).val();
	if( Number(value_current) > Number(max)){
		$(e).val(max)
	}
	
}
function validateMax99(e){
	 if($(e).val() > 99){
		 $(e).val(99)
	}else if($(e).val() < 0){
		$(e).val(0);
	}
}

function checkdateTo_fixSale() {
	var startDate = $("#menu_term1_datefrom_cl").val();
	var endDate = $("#menu_term1_dateto_cl").val();
	
	if (startDate != "" && endDate != "") {
		var startDate_parse = parseDate($("#menu_term1_datefrom_cl").val());
	    var endDate_parse = parseDate($("#menu_term1_dateto_cl").val());
	    if(startDate_parse > endDate_parse){
	    	
	    	nameTab 	= "menu_CL_5";
	    	Statuesave = "N";
	    	message = "วันที่เริ่มต้นต้องน้อยกว่าวันที่สิ้นสุดเสมอ";
			alertError(message);
	    }
	}
}
function checkdateTo_COOP(id) {
	if(id.includes("coop_ComDateStart")){
		id = id.replace("coop_ComDateStart","");
	}else if(id.includes("coop_ComDateEnd")){
		id = id.replace("coop_ComDateEnd","");
	}
	var startDate = "coop_ComDateStart"+id
	var endDate = "coop_ComDateEnd"+id
	
	if (startDate != "" && endDate != "") {
		var startDate_parse = parseDate($("#"+startDate).val());
	    var endDate_parse = parseDate($("#"+endDate).val());
	    if(startDate_parse >= endDate_parse){
	    	
	    	nameTab 	= "menu_CL_5";
	    	Statuesave = "N";
	    	message = "วันที่เริ่มต้นต้องน้อยกว่าวันที่สิ้นสุดเสมอ";
			alertError(message);
	    }
	}
}
function check_age_validate(){
	var age_Start_cl = $('#start_period_insure_cl').val();
	var age_unitStart_cl = $('#start_period_insure_unit_cl option:selected').text();
	var age_To_cl = $('#end_period_insure_cl').val();
	var age_unitTo_cl = $('#end_period_insure_unit_cl option:selected').text();
	
	$("#start_period_insure_cl").on("keyup", function(){
		if(age_Start_cl != "" && age_unitStart_cl != "None" && age_To_cl != "" && age_unitTo_cl != "None"){
			//$("#validate_input6_1cl").hide();
			check_fromto_age();
		}else{
			//$("#validate_input6_1cl").show();
		}
	});
	
	$("#start_period_insure_unit_cl").on("change", function(){
		if(age_Start_cl != "" && age_unitStart_cl != "None" && age_To_cl != "" && age_unitTo_cl != "None"){
			//$("#validate_input6_1cl").hide();
			check_fromtoUnit_age($(this).val());
		}else{
			//$("#validate_input6_1cl").show();
		}
	});
	
	$("#end_period_insure_cl").on("keyup", function(){
		if(age_Start_cl != "" && age_unitStart_cl != "None" && age_To_cl != "" && age_unitTo_cl != "None"){
			//$("#validate_input6_1cl").hide();
			check_fromto_age();
		}else{
			//$("#validate_input6_1cl").show();
		}
	});
	
	$("#end_period_insure_unit_cl").on("change", function(){
		if(age_Start_cl != "" && age_unitStart_cl != "None" && age_To_cl != "" && age_unitTo_cl != "None"){
			//$("#validate_input6_1cl").hide();
			check_fromtoUnit_age($(this).val());
		}else{
			//$("#validate_input6_1cl").show();
		}
	});
		
}
function validateMaxCommission(e){
	var maxComission = $("#amount_max_commission").val();
	if( Number($(e).val()) > Number(maxComission)){
		$(e).val(0).focus();
		message = "ห้ามกรอกมากกว่าค่านายหน้าสูงสุด"
		alertError(message)
	}
	
	$("#div_COOP_CL tbody>tr").each(function(){
		if( Number(maxComission) < Number($(this).find('td:nth-child(9) input').val())){
			$(e).val(0).focus();
			message = "ห้ามกรอกค่านายหน้าสูงสุดน้อยกว่าตารางสหกรณ์ ค่านายหน้า%"
			alertError(message)
		}
	})
	
	$("#tb_COOP_CL_3 tbody>tr").each(function(){
		if( Number(maxComission) < Number($(this).find('td:nth-child(6) input').val())){
			$(e).val(0).focus();
			message = "ห้ามกรอกค่านายหน้าสูงสุดน้อยกว่าตารางสหกรณ์ ส่วนลด%"
			alertError(message)
		}
	})

}
function keyup_validateDate(e,id){
	if (e.keyCode != 8){    
        if ($("#"+id).val().length == 2){
            $("#"+id).val($("#"+id).val() + "/");
        }else if ($("#"+id).val().length == 5){
            $("#"+id).val($("#"+id).val() + "/");
        }
    }
}
function parseDate(str) {
    var mdy = str.split('/')
    return new Date(mdy[2], mdy[1] - 1, mdy[0]);
}
function replaceComma(value){
	var result = value.replace(/,/g, "");
	return result;
}
function replaceDot(e){
	var value = $(e).val();
	var result = value.replace(/./g,'');
	$(e).val(result)
}
function replaceSpecialSymbol(e){
	var value = $(e).val();
	var result = value.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,'');
	$(e).val(result)
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
/**
 * @param ageFrom : วันที่เริ่มต้น
 * @param ageFrom_unit : ประเภทวันเริ่มค้น
 * @param ageTo : วันที่สิ้นสุด
 * @param ageTo_unit : ประเภทวันที่สิ้นสุด
 * @returns Boolean
 */
function validateDate(ageFrom,ageFrom_unit,ageTo,ageTo_unit){
	
	var age_start = 0;
	switch (ageFrom_unit) {
	case "DAY": age_start = ageFrom;
		break;
	case "WEEK": age_start = Number(ageFrom*7);
		break;
	case "MONTH": age_start = Number(ageFrom*30);
		break;
	case "YEAR": age_start = Number(ageFrom*365);
		break;
	case "AGE": age_start = Number(ageFrom*365);
		break;
	default:
		break;
	}
	
	var age_end = 0;
	switch (ageTo_unit) {
	case "DAY": age_end = ageTo;
		break;
	case "WEEK": age_end = Number(ageTo*7);
		break;
	case "MONTH": age_end = Number(ageTo*30);
		break;
	case "YEAR": age_end = Number(ageTo*365);
		break;
	case "AGE": age_end = Number(ageTo*365);
		break;
	default:
		break;
	}
	
	if(age_start > age_end || age_end < age_start){
		return false;
	}else{
		return true;
	}
	
}
/*check from-to อายุที่ได้รับความเห็นชอบ*/
function check_fromto_age(){
	
	$("#start_period_insure_cl").on('blur', function () {
		
		if($("#start_period_insure_unit_cl option:selected").text() != "None" && $("#end_period_insure_unit_cl option:selected").text() != "None" && $("#end_period_insure_cl").val() != ""){	
		  
		  var from_unit_text = $("#start_period_insure_unit_cl option:selected").val();
		  var to_unit_text = $("#end_period_insure_unit_cl option:selected").val();
			
		  var from_value = Number($('#start_period_insure_cl').val());
		  var to_value = Number($('#end_period_insure_cl').val());	
		  
		  var from_value_toMonth = Number(from_value/30);
		  var to_value_toMonth = Number(to_value/30);
		  var from_value_toYear = Number(from_value/365);
		  var to_value_toYear = Number(to_value/365);
		  var from_value_MonthtoYear = Number(from_value/12);
		  var to_value_MonthtoYear = Number(to_value/12);
		  
		  if(from_unit_text == to_unit_text){
				if(from_value > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#start_period_insure_cl').val("").focus();
				}
			}else if(from_unit_text == "DAY" && to_unit_text == "MONTH"){				 
					if(from_value_toMonth > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#start_period_insure_cl').val("").focus();
					}
			 }else if(from_unit_text == "MONTH" && to_unit_text == "DAY"){	
					if(to_value_toMonth < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#end_period_insure_cl').val("").focus();
				    }
		    }else if(from_unit_text == "DAY" && to_unit_text == "YEAR"){				 
					if(from_value_toYear > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#start_period_insure_cl').val("").focus();
					}
			 }else if(from_unit_text == "YEAR" && to_unit_text == "DAY"){				 
					if(to_value_toYear < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#end_period_insure_cl').val("").focus();
				    }
		    }else if(from_unit_text == "MONTH" && to_unit_text == "YEAR"){				 
					if(from_value_MonthtoYear > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#start_period_insure_cl').val("").focus();
					}
			 }else if(from_unit_text == "YEAR" && to_unit_text == "MONTH"){				
					if(to_value_MonthtoYear < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#start_period_insure_cl').val("").focus();
					}
			 }
		   }
		});
		
	  $("#end_period_insure_cl").on('blur', function () {	
		 
		if($("#start_period_insure_unit_cl option:selected").text() != "None" && $("#end_period_insure_unit_cl option:selected").text() != "None" && $("#end_period_insure_cl").val() != ""){   
		 
		 var from_unit_text = $("#start_period_insure_unit_cl option:selected").val();
		 var to_unit_text = $("#end_period_insure_unit_cl option:selected").val();
		 
		 var from_value = Number($('#start_period_insure_cl').val());
		 var to_value = Number($('#end_period_insure_cl').val());	
		 
		 var from_value_toMonth = Number(from_value/30);
		 var to_value_toMonth = Number(to_value/30);
		 var from_value_toYear = Number(from_value/365);
		 var to_value_toYear = Number(to_value/365);
		 var from_value_MonthtoYear = Number(from_value/12);
		 var to_value_MonthtoYear = Number(to_value/12);
		 
		 var from_value = Number($('#start_period_insure_cl').val());
		 var to_value = Number($('#end_period_insure_cl').val());
		 
		 if(from_unit_text == to_unit_text){
				if(from_value > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#start_period_insure_cl').val("").focus();
				}
				if(to_value > Number($("#max_period_insure_cl").val()) && from_unit_text == "YEAR" && to_unit_text == "YEAR"){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#max_period_insure_cl').val("").focus();
				}
		  }else if(from_unit_text == "DAY" && to_unit_text == "MONTH"){				 
					if(from_value_toMonth > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#end_period_insure_cl').val("").focus();
					}
		  }else if(from_unit_text == "MONTH" && to_unit_text == "DAY"){				 
					if(to_value_toMonth < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#end_period_insure_cl').val("").focus();
					}
		  }else if(from_unit_text == "DAY" && to_unit_text == "YEAR"){				 
					if(from_value_toYear > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#end_period_insure_cl').val("").focus();
					}
		  }else if(from_unit_text == "YEAR" && to_unit_text == "DAY"){				
					if(to_value_toYear < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#end_period_insure_cl').val("").focus();
					}
		  }else if(from_unit_text == "MONTH" && to_unit_text == "YEAR"){				 
					if(from_value_MonthtoYear > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#end_period_insure_cl').val("").focus();
					}
		  }else if(from_unit_text == "YEAR" && to_unit_text == "MONTH"){
					if(to_value_MonthtoYear < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#end_period_insure_cl').val("").focus();
					}
			 }
		 
		  }
		
	  });
}
function check_fromtoUnit_age(value){

	if($("#start_period_insure_unit_cl option:selected").text() != "None" && $("#end_period_insure_unit_cl option:selected").text() != "None"){
		//$("#dmy_5_cl").change(function(){
		if(value != "NONE"){

			var from_unit_text = $("#start_period_insure_unit_cl option:selected").val();
			var to_unit_text = $("#end_period_insure_unit_cl option:selected").val();	
			
			//alert(from_unit_text);

			var from_value = Number($('#start_period_insure_cl').val());
			var to_value = Number($('#end_period_insure_cl').val());
			
			var from_value_toMonth = Number(from_value/30);
			var to_value_toMonth = Number(to_value/30);
			var from_value_toYear = Number(from_value/365);
			var to_value_toYear = Number(to_value/365);
			var from_value_MonthtoYear = Number(from_value/12);
			var to_value_MonthtoYear = Number(to_value/12);
			
			
			if(from_unit_text == to_unit_text){
				if(from_value > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#start_period_insure_cl').val("").focus();
				}
			}else if(from_unit_text == "DAY" && to_unit_text == "MONTH"){				 
					if(from_value_toMonth > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#start_period_insure_cl').val("").focus();
					}
			 }else if(from_unit_text == "MONTH" && to_unit_text == "DAY"){	
					if(to_value_toMonth < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#end_period_insure_cl').val("").focus();
				    }
		    }else if(from_unit_text == "DAY" && to_unit_text == "YEAR"){				 
					if(from_value_toYear > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#start_period_insure_cl').val("").focus();
					}
			 }else if(from_unit_text == "YEAR" && to_unit_text == "DAY"){				 
					if(to_value_toYear < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#end_period_insure_cl').val("").focus();
				    }
		    }else if(from_unit_text == "MONTH" && to_unit_text == "YEAR"){				 
					if(from_value_MonthtoYear > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#start_period_insure_cl').val("").focus();
					}
			 }else if(from_unit_text == "YEAR" && to_unit_text == "MONTH"){				
					if(to_value_MonthtoYear < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#start_period_insure_cl').val("").focus();
					}
			 }
			
		//});	
		}	
		
	}
	
	if(value != "NONE"){
	//$("#dmy_6_cl").change(function(){	
		
		var from_unit_text = $("#start_period_insure_unit_cl option:selected").val();
		var to_unit_text = $("#end_period_insure_unit_cl option:selected").val();	
		
		var from_value = Number($('#start_period_insure_cl').val());
		var to_value = Number($('#end_period_insure_cl').val());
		
		var from_value_toMonth = Number(from_value/30);
		var to_value_toMonth = Number(to_value/30);	
		var from_value_toYear = Number(from_value/365);
		var from_value_MonthtoYear = Number(from_value/12);
		var to_value_MonthtoYear = Number(to_value/12);
		
		if(from_unit_text == to_unit_text){
			if(from_value > to_value){
				message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
				alertError(message);
				$('#end_period_insure_cl').val("").focus();
			}
		}else if(from_unit_text == "DAY" && to_unit_text == "MONTH"){				
				if(from_value_toMonth > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#end_period_insure_cl').val("").focus();
				}
		 }else if(from_unit_text == "MONTH" && to_unit_text == "DAY"){					
				if(to_value_toMonth < from_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#end_period_insure_cl').val("").focus();
				}
		}else if(from_unit_text == "DAY" && to_unit_text == "YEAR"){				 
				if(from_value_toYear > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#end_period_insure_cl').val("").focus();
				}
		 }else if(from_unit_text == "YEAR" && to_unit_text == "DAY"){
				var to_value_toYear = to_value/365;		
				if(to_value_toYear < from_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#end_period_insure_cl').val("").focus();
				}
		}else if(from_unit_text == "MONTH" && to_unit_text == "YEAR"){				 
				if(from_value_MonthtoYear > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					//$('#die_toYear'+id).val("").focus();
				}
		 }else if(from_unit_text == "YEAR" && to_unit_text == "MONTH"){				 
				if(to_value_MonthtoYear < from_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#end_period_insure_cl').val("").focus();
				}
		 }
		
	//});	
	}
}
function checkMaxProtectionAge_CL() {
	var from_unit = $("#end_period_insure_unit_cl option:selected").val();
	var from_value = $("#end_period_insure_cl").val();
	var from_value_convert = "";
	var to_unit = "YEAR";
	var to_value = $("#max_period_insure_cl").val();

	if(from_value != "" && from_unit != "NONE" && to_value != ""){
		if(from_unit == "DAY"){
			from_value_convert = Number(from_value/365);
		}else if(from_unit == "MONTH"){
			from_value_convert = Number(from_value/12);
		}else if(from_unit == "YEAR"){
			from_value_convert = Number(from_value);
		}
		else{
			from_value_convert = Number(1)
		}
		if(Number(to_value) < from_value_convert){
			  message = "ข้อมูลคุ้มครองสูงสุดถึงต้องมีค่ามากกว่าอายุที่ขออนุมัติสิ้นสุดเสมอ";
			  alertError(message);
			  $("#max_period_insure_cl").focus();
			  $("#max_period_insure_cl").val("");
		  }	
		
	}
				
}
/*#########khwan changed##########*/
////*modal เลือกแบบประกันหลัก/////
$(document).on("click", "#addrowPM_Rate", function () {
	
	var json_data = {
			"method": "getAllBasePlan_CL",
			"pCode": $("#pass_Insurance_product_cl").val()
		}
		
		$.ajax({
			url: 'ProductCL_Data_default_Servlet',
			type: "POST",
			data: json_data,
			success: function (response) {
				$('#tb_Choose_primary_insurance_modal').DataTable().destroy();
				$("#tb_Choose_primary_insurance_modal tbody").find("tr").remove();
				
				var row = "";
				var id = 1;
				for(i in response.BasePlanCL_Data){
					var obj = response.BasePlanCL_Data[i];
					row = "<tr  id=\"row1_"+id+""+"\">" +	
							"<td class=\"col-sm-1 text-center"+"\">"+
								"<input type='hidden' id='base_cov_cat_id"+id+"' value='"+obj.cov_cat_id+"' >"+
								"<input type=\"radio\"id=\"ra_Choose_primary_insurance_"+id+"\" name=\"pm_Rate_name\">"+
							"</td>"+
							"<td class=\"verticalCenter col-sm-2 text-left"+"\">"+"<label style=\"text-decoration: underline; color: blue;\" for='ra_Choose_primary_insurance_"+id+"' id=\"choose_primary_insurance_pass_"+id+""+"\">"+obj.insuranceNo+"</label>"+"" +
							"</td>"+
							"<td class=\"col-sm-5 text-left"+"\">"+"<label id=\"choose_primary_insurance_Name_"+id+""+"\" for='ra_Choose_primary_insurance_"+id+"'>"+obj.nameTH+"</label>"+"" +
							"</td>"+
						"</tr>";	
					$("#tb_Choose_primary_insurance_modal tbody").append(row);
					check_row_modal = id;
					id++;
				}
				$("#tb_Choose_primary_insurance_modal").DataTable({"ordering": false,"paging": false,"bInfo" : false, scrollY: '236px',scrollCollapse: true, "autoWidth": false, 
					fixedHeader: {header: true},"oLanguage": {"sSearch": "ค้นหา: "}
				});
				$("#tb_Choose_primary_insurance_modal_wrapper .dataTables_scrollHeadInner").css({"width":"100%"});
				$("#tb_Choose_primary_insurance_modal_wrapper .table").css({"width":"100%"});

				$('#modal_Choose_primary_insurance').modal('show');
			}
		});
		console.log("data",json_data);
});

////*modal เลือกสัญญาเพิ่มเติม/////	
$(document).on("click", "#addrowAdditional_contract", function () {
	var numrow_baseplan = $("#tb_PM_Rate>tbody>tr").length;
	if($("#sel_Type_Additional_contract option:selected").val() == "NONE"){
		numrow_baseplan--;
	}
	if(numrow_baseplan <= 0){
		message = "กรุณาเลือกแบบประกันหลัก";
		if($("#sel_Type_Additional_contract option:selected").val() == "NONE"){
			message = "กรุณาเลือกประเภทสัญญาเพิ่มเติม"
		}
		alertError(message);
	}else{		
		
		var json_data = {
				"method": "getAllRider_CL",
				"rCode": $("#pass_Insurance_product_cl").val()
			}
			
			$.ajax({
				url: 'ProductCL_Data_default_Servlet',
				type: "POST",
				data: json_data,
				success: function (response) {
					$('#tb_Additional_contract_modal').DataTable().destroy();
					$("#tb_Additional_contract_modal tbody").find("tr").remove();
					
					var row = "";
					var row2 = "";
					var id = 1;
					for(i in response.Rider_CL_Data){
						var obj = response.Rider_CL_Data[i];
						row2 += 	"<tr  id=\"row2_"+id+""+"\">" +	
								"<td class=\"col-sm-1 text-center"+"\">"+
									"<input type='hidden' id='rider_cov_cat_id"+id+"' value='"+obj.cov_cat_id+"' >"+
									"<input type='hidden' id='prd_code_rider_"+id+"' value='"+obj.prd_rider_code+"'>"+
									"<input type=\"checkbox\"id=\"ch_Additional_contract_"+id+"\" value='"+obj.insuranceNo+"'>"+
								"</td>"+
								"<td class=\"verticalCenter col-sm-2 text-left"+"\">"+"<label style=\"text-decoration: underline; color: blue;\" for='ch_Additional_contract_"+id+"' id=\"additional_contract_pass_"+id+""+"\">"+obj.insuranceNo+"</label>"+"" +
								"</td>"+
								"<td class=\"col-sm-5 text-left"+"\">"+"<label id=\"additional_contract_Name_"+id+""+"\" for='ch_Additional_contract_"+id+"'>"+obj.nameTH+"</label>"+"" +
								"</td>"+
							"</tr>";			  
						
						check_row_modal2 = id;
						id++;
					}
					$("#tb_Additional_contract_modal tbody").append(row2);
					$("#tb_Additional_contract_modal").DataTable({"ordering": false,"paging": false,"bInfo" : false, scrollY: '236px',scrollCollapse: true, "autoWidth": false, 
						fixedHeader: {header: true},"oLanguage": {"sSearch": "ค้นหา: "}
					});
					$("#tb_Additional_contract_modal_wrapper .dataTables_scrollHeadInner").css({"width":"100%"});
					$("#tb_Additional_contract_modal_wrapper .table").css({"width":"100%"});

					/*เลือกสัญญาเพิ่มเติมที่มีอยู่แล้ว*/
					var numrow_rider = $("#tb_Additional_contract>tbody>tr").length;
					var arr_rider = [];
					if(numrow_rider > 0){
						$("#tb_Additional_contract>tbody>tr").each(function(){
							var rider_number = $(this).find("td:nth-child(2)>label").text();
							arr_rider.push(rider_number);
						});
					}
					var save_arr_rider = arr_rider.join(",");
					var split_arr_rider = save_arr_rider.split(",");
					
					for(var a=0; a<split_arr_rider.length; a++){
						$("#tb_Additional_contract_modal tbody>tr").each(function(){
							if(split_arr_rider[a] == $(this).find("td:nth-child(2)").text()){
								$(this).find("input[type='checkbox']").prop("checked",true);
							}
						});
					}
					
					$('#modal_Additional_contract').modal('show');
				},
				error : function(){
					alert("Fail")
				}
			});
			console.log("data",json_data);
			
	}
});

$(document).on("click", "#tbl_PD_Mode_CL tbody>tr", function () {
	var chk_mode = false;
	$("#tbl_PD_Mode_CL tbody>tr").each(function(){
		if($(this).find('td:nth-child(1) input[type="checkbox"]').is(':checked')){
			$("#validate_input5_cl").hide();
			chk_mode = true;
		}
	});
	if(chk_mode == false){
		$("#validate_input5_cl").show();
	}
});
/*$("#tab_menu_term2").on('click',function(){
	var cov_code = $("#tb_PM_Rate tbody>tr").eq(0).find('td:nth-child(1) label').text();
	$("#policy_in_"+cov_code).addClass('active in')
})*/
/*######################*/

//ยืนยันการเลือกข้อมูลจาก*/ modal แบบประกันหลัก
function bt_save_Choose_primary_insurance() {
	
	 var checkrowTB_tb_PM_Rate = document.getElementById("tb_PM_Rate").rows.length;//check row
	 var contract_type = $("#sel_Type_Additional_contract option:selected").text();	
	
	 if (checkrowTB_tb_PM_Rate <= 1) {
		for(var ii= 1; ii <= check_row_modal; ii++){
			var ch_Choose_primary_insurance = false ;
				ch_Choose_primary_insurance = document.getElementById("ra_Choose_primary_insurance_"+ii);
					 if (ch_Choose_primary_insurance != null){
							if (ch_Choose_primary_insurance.checked == true) {
								var choose_primary_insurance_Pass  		=	document.getElementById('choose_primary_insurance_pass_'+ii).innerHTML;
								var choose_primary_insurance_Name 		=	document.getElementById('choose_primary_insurance_Name_'+ii).innerHTML;
								var choose_primary_insurance_cov_cat_id =	document.getElementById('base_cov_cat_id'+ii).value;
								
								var json_data = {
										"method": "getCaseBasePlan",
										"bCode": choose_primary_insurance_Pass
								}
								$.ajax({
									url: 'ProductCL_GetData_Servlet',
									type: "POST",
									data: json_data,
									success: function (response) {
										//Max fix benefit 21/11/2019
										showcase_benefit_CL(response,"B",choose_primary_insurance_Pass,$("#pass_Insurance_product_cl").val());
										getdata_benefit_CL(response,"B",choose_primary_insurance_Pass,$("#pass_Insurance_product_cl").val());
										
										// pun fix
										 var changeFileModal = 'modalGet_selectFile("'+choose_primary_insurance_Pass+'","fileuploads_PMRate1_CL","ip_fileuploads_CL_PM_Rate1_Show_1","span_PM_Rateopen_1","validate_rateP1_CL","span_PM_Ratedownload_1")';
										 var prd_code = $("#pass_Insurance_product_cl").val();
										 var rate_cat_NAR = $("#rate_cat_NAR").val();
										 
										 // เซ็คว่ามี pm rate รึเปล่า
										 var chk_pmRate  = response.Tab_cal_insurance_premiums[0].table_insurance_premium.length
										/*--Add Row--*/
										for(var j = 0; j < 1; j++){
											numrow = 1+j;
											row = "<tr  id=\"rowLookupValue_tbody_PM_Rate1_1"+"\">" +	
												"<td class=\"text-left verticalCenter borderBlack\">"+
													"<input type='hidden' id='cov_cat_id_base_PM' value='"+choose_primary_insurance_cov_cat_id+"' >"+
													"<input type='hidden' id='prd_code_base_PM' value='"+prd_code+"'>"+
													"<label style=\"text-decoration: underline; color: blue;\">"+choose_primary_insurance_Pass+"</label>"+
												"</td>"+	
												"<td class=\"text-left verticalCenter fontcolortable1 borderBlack\">"+"<label>"+choose_primary_insurance_Name+"</label>"+"</td>"+	
												"<td colspan=\"2\" class=\"verticalCenter borderBlack\">"+
													"<input type='hidden' id='fileId_base_PM' value=''>"+
													"<input type='hidden' id='rate_cat_id_base_PM' value=''>"+
													"<input type='hidden' id='rate_layout_id_base_PM' value=''>"+
													"<div class=\"input-group col-xs-12\">"+
													"<input type=\"file\" accept=\".txt\" id=\"ip_fileuploads_CL_PM_Rate1_1\" style=\"display: none\">"+
													"<input type=\"text\" class=\"form-control\" id=\"ip_fileuploads_CL_PM_Rate1_Show_1\" readonly> " +
													"<span class=\"input-group-btn\">" 
													if(chk_pmRate == 0){
														row += "<button class=\"btn btn-default btn-primary\" onclick='"+changeFileModal+"' type=\"button\" id=\"bt_uploadfilePM_Rate1_1\" data-toggle=\"modal\" data-target=\"#modal_input_PMRate\" disabled>" 
													}else{
														row += "<button class=\"btn btn-default btn-primary\" onclick='"+changeFileModal+"' type=\"button\" id=\"bt_uploadfilePM_Rate1_1\" data-toggle=\"modal\" data-target=\"#modal_input_PMRate\">" 
													}
													/*"<font id='validate_rateP1_CL' class='require_file' style='color: red;'>*</font>" +*/
													row += "...</button>"+
													"</span>"+
													"</div>"+
												"</td>"+
												"<td class=\"text-center verticalCenter borderBlack\">"+
													"<a id='span_PM_Rateopen_1' class='active_grey'>"+
														"<span class='glyphicon glyphicon-eye-open activecolorgray'></span>"+
													"</a>"+
												"</td>"+
												"<td class=\"text-center verticalCenter borderBlack\">"+
												"<a id='span_PM_Ratedownload_1' class='active_grey'>"+
													"<span data-id=\'span_PM_Ratedownload_1\' class=\'glyphicon glyphicon-download-alt activecolorgray\'></span>"+
													"</a>"+
													"</td>";
												row += "<td class='verticalCenter borderBlack'>" +
																"<input type='text' class='autoComma form-control text-right' value='0.00' data-v-min='0.00' data-v-max='9999999999.00'>"+
															"</td>";
												row += "<td class=\"verticalCenter borderBlack\">"+
												"<div id='form_input_file' class='input-group'>"+
													"<input type='hidden' id='fileId_base_NAR' value=''>"+
													"<input type='hidden' id='rate_cat_id_base_NAR' value='"+rate_cat_NAR+"'>"+
													"<input type='hidden' id='rate_layout_id_base_NAR' value=''>"+
													"<input type='text' class='form-control' id='fileuploads_NARText1_CL' readonly=''>"+ 
													"<label class='input-group-btn'> "+
														"<span id='spanNAR1_CL' class='btn btn-primary' >"+
														/*"<font id='validate_NAR1_CL' style='color: red;'>*</font>" +*/
														"<b>...</b>"+
														"<input id='fileuploads_NAR1_CL' type='file' accept='text/plain' style='display: none;'>"+
														"</span>"+
													"</label>"+
												"</div>"+
											"</td>"+
											
											"<td class=\"text-center verticalCenter borderBlack\">"+
											"<a id='span_PM_RateopenNAR_1' class='active_grey'>"+
												"<span class='glyphicon glyphicon-eye-open activecolorgray'></span>"+
											"</a>"+
											"</td>"+
											"<td class=\"text-center verticalCenter borderBlack\">"+
											"<a id='span_PM_RatedownloadNAR_1' class='active_grey'>"+
												"<span data-id=\'span_PM_RatedownloadNAR_1\' class=\'glyphicon glyphicon-download-alt activecolorgray\'></span>"+
												"</a>"+
												"</td>"+
											
											"</tr>";			  
											
											$("#tb_PM_Rate tbody").append(row);
											$(".autoComma").autoNumeric('init',{vMin: '0.00', vMax: '999999999.99'});
											
											// placeholder ของไฟล์ที่เลือกมา
											var layout_name = $("#layout_NAR1").val();
											var layout_name2 = $("#layout_NAR2").val();
											var base_code = $("#tb_Choose_primary_insurance_modal input[type='radio']:checked").parent().parent().find('td:nth-child(2) label').text();
											var product_code_main = $("#pass_Insurance_product_cl").val();
											//var product_code = $("#key_Insurance_product_cl").val();
											var layout = layout_name+""+base_code+"_"+product_code_main;
											var layout2 = layout_name2+""+base_code+"_"+product_code_main;
											var placeholder_text = layout+".txt" + " หรือ " + layout2+".txt";
											//$("#fileuploads_PMRateText1_CL").attr("placeholder",layout+".txt");
											
											// pm Rate
										/*	var uploadfile = "selectFileRate_CL(1,'fileuploads_PMRate1_CL','"+layout+"','','','span_PM_Rateopen_1')";
											$("#fileuploads_PMRate1_CL").attr("onchange",uploadfile);*/
											
											// NAR
											$("#fileuploads_NARText1_CL").attr("placeholder",placeholder_text);
											var uploadfile2 = "selectFileRate_CL(2,'fileuploads_NAR1_CL','"+layout+"','"+layout2+"','','span_PM_RateopenNAR_1','span_PM_RatedownloadNAR_1')";
											$("#fileuploads_NAR1_CL").attr("onchange",uploadfile2);
											
											
											/*เพิ่ม row ของ Tab-คำนวณเบี้ยประกัน || ตาราง-การคำนวณเบี้ยประกันภัย*/
											var sl_calculus = $("#hide_slCalculus").val();
											row4 = 	"<tr id=\"tb_Calculate_insurance2_"+numrow3+"\" data-key='"+prd_code+"'>"+
														"<td width=\"30%\" class=\"text-center verticalCenter fontcolortable1 borderBlack\">"+
															"<input type='hidden' id='prd_rider_code' value='"+prd_code+"'>"+
															"<label>"+choose_primary_insurance_Pass+"</label>"+
														"</td>"+
														"<td width=\"20%\" class=\"text-center verticalCenter fontcolortable1 borderBlack\">"+
															"<label></label>"+					
														"</td>"+	
														"<td width=\"50%\"class=\"text-center verticalCenter borderBlack\">"+
														"<select class=\"form-control\" onchange='duplicate_formula_cal(this);'><option value='0'>None</option>"+sl_calculus+"</select></td>"+
													"</tr>";		
											if($("#tb_Calculate_insurance2 tbody>tr").length == 0){
												$("#tb_Calculate_insurance2 tbody").append(row4)
											}else{
												$(row4).insertBefore("#tb_Calculate_insurance2 tbody>tr:first");
												
											}
										}
										 /*clear data ใน ตาราง-การคำนวณเบี้ยประกันภัย*/
										 $("#tb_Calculate_insurance2 tbody>tr").each(function(){
											$(this).find('td:nth-child(3) option[value="0"]').attr("selected","selected")
										})
										
										// get base plan 
										// sex
										var sex = response.Tab_Basic_Information[0].sex;	
										if(sex == "MALE"){
											$("#chk_sex_BP1").prop("checked",true);
										}else if(sex == "FEMALE"){
											$("#chk_sex_BP2").prop("checked",true);
										}else if(sex == "EITHER"){
											$("#chk_sex_BP1").prop("checked",true).prop("disabled",false);
											$("#chk_sex_BP2").prop("checked",true).prop("disabled",false);
										}
										
										//mode
										for(i in response.Tab_Basic_Information[0].mode){
											$("#validate_input5_cl").hide();
											var obj = response.Tab_Basic_Information[0].mode[i].value;
											$("#tbl_PD_Mode_CL tbody>tr").each(function(){
												if( obj == $(this).find('td:nth-child(1) input').val()){
													$(this).find('td:nth-child(1) input').prop("checked",true);
												}
											});
											$("#tbl_modeTerms tbody>tr").each(function(){
												if( obj == $(this).find('td:nth-child(1) input').val()){
													$(this).find('td:nth-child(1) input').prop("checked",true).attr("disabled",false);
												}
											});
										}
										
										//ระยะเวลาเอาประกันภัย
										var row_tbInsurance_period = "";
										if(response.Tab_Basic_Information[0].insurance_period[0]){
											if( response.Tab_Basic_Information[0].insurance_period[0].from_unit == "NONE"){
												var age_coverage = response.Tab_Basic_Information[0].insurance_period[0].to;
												var type_coverage = response.Tab_Basic_Information[0].insurance_period[0].to_unit;
												var from_age = Number(age_coverage) - Number(response.Tab_Basic_Information[0].age_To);
												var to_age = Number(age_coverage) - Number(response.Tab_Basic_Information[0].age_Start);
												
												row_tbInsurance_period	= "<tr>"+
															 "<td width='3%' class='text-center verticalCenter borderBlack'></td>"+
															 "<td width='22.5%' class='text-center verticalCenter fontcolortable1 borderBlack'>"+
																"<label>"+from_age+"</label>"+
															 "</td>"+
															 "<td width='22.5%' class='text-center verticalCenter fontcolortable1 borderBlack'>"+
																	"<label>"+change_type(type_coverage)+"</label>"+
															 "</td>"+
															 "<td width='22.5%' class='text-center verticalCenter fontcolortable1 borderBlack'>"+
																	"<label>"+to_age+"</label>"+
															 "</td>"+
															 "<td width='22.5%' class='text-center verticalCenter fontcolortable1 borderBlack'>"+
																	"<label>"+change_type(type_coverage)+"</label>"+
															 "</td>"+ 
														"</tr>"
												$("#tb_BasicInformation1 tbody").append(row_tbInsurance_period)
											}else{
												for(i in response.Tab_Basic_Information[0].insurance_period){
													var obj = response.Tab_Basic_Information[0].insurance_period[i];
														row_tbInsurance_period	= "<tr>"+
																 "<td width='3%' class='text-center verticalCenter borderBlack'></td>"+
																 "<td width='22.5%' class='text-center verticalCenter fontcolortable1 borderBlack'>"+
																	"<label>"+obj.from+"</label>"+
																 "</td>"+
																 "<td width='22.5%' class='text-center verticalCenter fontcolortable1 borderBlack'>"+
																		"<label>"+change_type(obj.from_unit)+"</label>"+
																 "</td>"+
																 "<td width='22.5%' class='text-center verticalCenter fontcolortable1 borderBlack'>"+
																		"<label>"+obj.to+"</label>"+
																 "</td>"+
																 "<td width='22.5%' class='text-center verticalCenter fontcolortable1 borderBlack'>"+
																		"<label>"+change_type(obj.to_unit)+"</label>"+
																 "</td>"+ 
															"</tr>"
													$("#tb_BasicInformation1 tbody").append(row_tbInsurance_period)
												}
											}
											
											
											/*tab ข้อกำหนด default ระยะเวลาเอาประกันภัย*/
											$("#start_period_insure_cl").val(obj.from)
											$("#start_period_insure_unit_cl option[value="+obj.from_unit+"]").attr("selected",true)
											$("#end_period_insure_cl").val(obj.to)
											$("#end_period_insure_unit_cl option[value="+obj.to_unit+"]").attr("selected",true)
											$("#max_period_insure_cl").val(obj.to)
											
										}
										
										//ทุนคุ้มครองที่ลดลง SA
										if(response.Tab_cal_insurance_premiums[0].table_capital_decrease[0]){
											$("#inputSA_CL").val(response.Tab_cal_insurance_premiums[0].table_capital_decrease[0].file);
											$("#see_inputSA_CL").attr("onclick", "openFileTextProduct_CL('"+response.Tab_cal_insurance_premiums[0].table_capital_decrease[0].file+"', '"+response.Tab_cal_insurance_premiums[0].table_capital_decrease[0].ref+"',31,'tb_inputSA_CL_Rate', 'modal_inputSA_CL_Rate')");
										}
										
										//pay_separately
										$("#chk_sperately_pay").prop("checked",false);
										$("#chk_sperately_pay").attr("disabled",true)
										var sperately_pay = response.Tab_Basic_Information[0].pay_separately_checkbox;
										if(sperately_pay){
											$("#chk_sperately_pay").prop("checked",true);
											$("#chk_sperately_pay").attr("disabled",false)
										}
										for(i in response.Tab_Basic_Information[0].pay_separately){
											var obj_period = response.Tab_Basic_Information[0].pay_separately[i].period;
											var obj_rate = response.Tab_Basic_Information[0].pay_separately[i].rate;
											$("#tb_Sperately_Pay tbody>tr").each(function(){
												if( obj_period == $(this).find('td:nth-child(1) input').val()){
													$(this).find('td:nth-child(1) input').prop("checked",true).prop("disabled",false);
													$(this).find('td:nth-child(1) input').addClass("base")
													$(this).find('td:nth-child(3) input').val((obj_rate*100).toFixed(2)).prop("disabled",false);
												}
											});
										}

										// tab ข้อกำหนดการรับประกัน 
										// สูตรการตำนวณอายุ
										for(i in response.Tab_Basic_Information[0].cal_Age){
											var key = response.Tab_Basic_Information[0].cal_Age[i].value;
											$("#tbl_formulaTerms tbody>tr").each(function(){
												if( key == $(this).find('td:nth-child(1) input[type="radio"]').val()){
													$(this).find('input[type="radio"]').prop("disabled",false);
												}
											});
										}
										
										//ดึงค่า rate cat ตาราง basePlanลงใน hidden value 
										if(response.Tab_cal_insurance_premiums[0].table_insurance_premium){
											var obj = response.Tab_cal_insurance_premiums[0].table_insurance_premium[i];
											if(obj){
												$("#rate_cat_tbBase").val(obj.pass);
											} 
										}
										
										// tab คำนวณเบีย lookup - Age Type
										$("#lb_age_specific_CL option").remove();
										if(response.Tab_cal_insurance_premiums[0].age_type){
											if(response.Tab_cal_insurance_premiums[0].age_type.length > 0){
												for(i in response.Tab_cal_insurance_premiums[0].age_type){
													var obj = response.Tab_cal_insurance_premiums[0].age_type[i];
													if( obj.pass == "" && obj.text == ""){
														sl_age = "<option value=''>Age Specific</option>";
													}else{
														sl_age = "<option value='"+obj.pass+"'>"+obj.text+"</option>";
													}
													$("#lb_age_specific_CL").append(sl_age);
												}
											}else{
												sl_age = "<option value=''>Age Specific</option>";
												$("#lb_age_specific_CL").append(sl_age);
											}
										}
										
										//ดึงข้อมูล base plan ที่ มาลง pm rate
										var row = "";
										$("#tb_input_modal_pmRate tbody>tr").remove();
										for(i in response.Tab_cal_insurance_premiums[0].table_insurance_premium){
											var obj = response.Tab_cal_insurance_premiums[0].table_insurance_premium[i];
											row = "<tr>"+
													"<td class='text-center'>" +
														"<input type='radio' name='select_fileOriginal' value='"+obj.fileID+"'>" +
														"<input type='hidden' id='hd_rateCatId"+i+"' value='"+obj.rate_cat_id+"'/>"+
														"<input type='hidden' id='hd_fileId"+i+"' value='"+obj.fileID+"'/>"+
														"<input type='hidden' id='hd_fileLayout"+i+"' value='"+obj.layout+"'/>"+
													"</td>"+
													"<td class='text-center'><span data-id='' class='glyphicon glyphicon-eye-open activecolorgray'></span></td>"+
													"<td><label>"+obj.file+"</label></td>"+
												"</tr>"
												$("#tb_input_modal_pmRate tbody").append(row);
										}
										
										/*create ตารางการกำหนดบันทึกสลักหลังและพิกัดอายุ*/
										$("#div_ageRange_CL").show();
										var start_age = response.Tab_Basic_Information[0].age_Start;
										var age_Start_Unit = response.Tab_Basic_Information[0].age_Start_Unit;
										var end_age = response.Tab_Basic_Information[0].age_To;
										var age_To_Unit = response.Tab_Basic_Information[0].age_To_Unit; 
										var max_age = response.Tab_Basic_Information[0].maximum_Protection_To;
										var sl_ageCoordinate = $("#sl_unit_age_coordinates").val();
										row_age = "<tr id='tr_ageRange_CV1' data-id='1' data-parent='0' data-level='1' data-type='1'>"+											
												  "<td class='text-left verticalCenter borderBlack'>"+
													"<label class='font-term-purple font-bold'>"+choose_primary_insurance_Pass+"</label>"+
													"<input type='hidden' id='prd_rider_code' value="+prd_code+">"+
												  "</td>"+
												  "<td class='text-center verticalCenter fontcolortable2 borderBlack'>" +
												  	"<input type='hidden' id='cov_cat_id' value='"+choose_primary_insurance_cov_cat_id+"' >"+
												  	"<label class='font-term-purple font-bold'></label>" +
												  "</td>"+
												  "<td class='text-center verticalCenter borderBlack'>"+
												  	"<i class='glyphicon glyphicon-plus icon-blue-circle' data-id='1' id='addrow_endorse1' onclick=\"addRowEndorse(1,'"+choose_primary_insurance_Pass+"','"+prd_code+"');\"></i>"+
												  "</td>"+											
												  "<td class='text-center verticalCenter borderBlack'>"+
												  	"<input type='hidden' id='hd_min_issue_age1' value='"+start_age+"'>"+
												  	"<input type='number' class='form-control margin-padding0 text-center width40px' value='"+start_age+"' min='1' onchange=\"numberKey_min(this,'hd_min_issue_age1') , startIssue_term(this)\">"+
												  "</td>"+
												  "<td class='text-center verticalCenter borderBlack'>"+	
												  	"<input type='hidden' id='start_insure_ageUnit1' value='"+age_Start_Unit+"' >"+
													"<select class='form-control width100px' id='ageRange_unit1_cl' onchange='change_typeTerm1(this)'>"+
														"<option value='NONE'>None</option>"+sl_ageCoordinate+
													"</select>"+
												  "</td>"+
												  "<td class='text-center verticalCenter borderBlack'>"+
												  	"<input type='hidden' id='hd_max_issue_age1' value='"+end_age+"'>"+
												  	"<input type='number' class='form-control margin-padding0 text-center width40px' value='"+end_age+"' min='1' onchange=\"numberKey_max(this,'hd_max_issue_age1') , endIssue_term(this)\">"+
												  "</td>"+
												  "<td class='text-center verticalCenter borderBlack'>"+	
												  	"<input type='hidden' id='end_insure_ageUnit1' value='"+age_To_Unit+"'>"+
													"<select class='form-control width100px' id='ageRange_unit1_cl' onchange='change_typeTerm2(this)'>"+
														"<option value='NONE'>None</option>"+sl_ageCoordinate+
													"</select>"+
												  "</td>"+
												  "<td class='text-center verticalCenter borderBlack'>"+
												  	"<input type='hidden' id='hd_max_insure_age1' value='"+max_age+"'>"+
													"<input type='number' class='form-control margin-padding0 text-center width40px' value='"+max_age+"' min='1' onchange=\"numberKey_maximum(this,'hd_max_insure_age1') , maxInsure_term(this)\">"+
												  "</td>"+
												  "<td class='text-center verticalCenter borderBlack'>"+	
												  	/*"<input type='hidden' id='max_insure_ageUnit1' >"+*/
													"<select class='form-control width100px' id='ageRange_unit1_cl' onchange='change_typeTerm3(this)'>"+
														"<option value='NONE'>None</option>"+sl_ageCoordinate+
													"</select>"+
												  "</td>"+																			
												  "</tr>";
										if($("#tb_ageRange_CL tbody>tr").length == 0){
											$("#tb_ageRange_CL tbody").append(row_age)
										}else{
											$(row_age).insertBefore("#tb_ageRange_CL tbody>tr:first");
										}
										$("#ageRange_unit1_cl option[value='YEAR']").attr("selected",true)
										$("#ageRange_unit1_cl option[value='YEAR']").attr("selected",true)
										$("#ageRange_unit1_cl option[value='YEAR']").attr("selected",true)
										
										/*Tab ข้อกำหนด - ตาราง พิกัดอายุ*/
										$("#start_age_insure_cl").val(start_age)
										$("#start_age_insure_unit_cl option[value='YEAR']").attr("selected",true)
										$("#end_age_insure_cl").val(end_age)
										$("#end_age_insure_unit_cl option[value='YEAR']").attr("selected",true)
										$("#max_age_insure_cl").val(max_age)
										var numrow3 = 1;
										/*เพิ่ม row ของ Tab-ข้อกำหนด || ตาราง-จำนวนเงินเอาประกันภัยสูงสุด (ต่อราย)*/
										var row6 = "<tr id='tbody_max_amount_insure"+numrow3+"' data-key='"+prd_code+"'>"+
												"<td id='imgOK_max_amount_insure"+numrow3+"_CL' class='verticalCenter text-center'>" +
													"<input type='hidden' id='cov_code' value='"+choose_primary_insurance_Pass+"'>" +
													"<input id='mode_max_amount_insure"+numrow3+"_CL' type='checkbox' onclick='disabled_fieldInsure(this)' value='"+prd_code+"'>" +
												"</td>"+
												"<td class='verticalCenter text-center font-term-purple font-bold'></td>"+
												"<td class='verticalCenter'><input type='text' id='max_amount_insure"+numrow3+"_CL' class='autoComma form-control text-right' value='0' disabled></td>"+																									
											"</tr>"
										if($("#tbl_insure_single tbody>tr").length == 0){
											$("#tbl_insure_single tbody").append(row6)
										}else{
											$(row6).insertBefore("#tbl_insure_single tbody>tr:first");
										}
										
										/*เพิ่ม row ของ Tab-ข้อกำหนดการรับประกัน || Lookup ตาราง-การรับแบบเพิ่มเบี้ยพิเศษ*/
										var KPW_maxEM = (response.Tab_cal_insurance_premiums[0].max_EM*100).toFixed(2)
										var row = ""
											row = "<tr data-key='"+prd_code+"'>" +
												"<td class='verticalCenter text-center font-term-purple font-bold'><label></label>" +
													"<input type='hidden' id='cov_code' value='"+choose_primary_insurance_Pass+"'>" +
												"</td>"+
												"<td class='verticalCenter text-right font-term-purple font-bold'>"+KPW_maxEM+"</td>"
												if(KPW_maxEM == 0){
													row += "<td class='verticalCenter text-right'><input type='text' id='amount_premium_uw_CL"+numrow3+"' class='autoPercent3 form-control text-right' value='0.00' data-v-min='0.00' data-v-max='999.99' onblur='validate_maxEM(this);' disabled></td>"
												}else{
													row += "<td class='verticalCenter text-right'><input type='text' id='amount_premium_uw_CL"+numrow3+"' class='autoPercent3 form-control text-right' value='0.00' data-v-min='0.00' data-v-max='999.99' onblur='validate_maxEM(this);'></td>"
												}
											row += "</tr>"	
										if($("#tbl_increase_premium_CL tbody>tr").length == 0){
											$("#tbl_increase_premium_CL tbody").append(row)
										}else{
											$(row).insertBefore("#tbl_increase_premium_CL tbody>tr:first");
										}
										$(".autoPercent").autoNumeric('init',{vMin: '0.00', vMax: '99.99'});
										$(".autoPercent3").autoNumeric('init',{vMin: '0.00', vMax: '999.99'});
										
										/*เพิ่ม row ของ Tab-การใช้สิทธิ์ตามกรมธรรม์ || ตาราง-การเวนคืน กธ.*/
										var sl_tab2_cal = $("#hide_sl_cal").val();
										var cov_code_policyValue = choose_primary_insurance_Pass;
										var row5 = "";
										if(response.Tab_table_policy_value[0].table_policy_value != ""){
											for(i in response.Tab_table_policy_value[0].table_policy_value){
												var obj_policyVal = response.Tab_table_policy_value[0].table_policy_value[i]
												if(obj_policyVal.pass == 6){
													if(i > 0){
														cov_code_policyValue = "";
													}
													row5 += 	"<tr id=\"tb_policyholder_"+numrow3+"\" data-key='"+prd_code+"'>"+
													"<td width=\"20%\" class=\"text-center verticalCenter fontcolortable1 borderBlack\">"+
														"<input type='hidden' id='prd_rider_code' value='"+prd_code+"'>"+
														"<input type='hidden' id='cov_code_policyValue' value='"+choose_primary_insurance_Pass+"'/>"+
														"<label>"+cov_code_policyValue+"</label>"+
													"</td>"+
													"<td width=\"10%\" class=\"text-center verticalCenter fontcolortable1 borderBlack\">"+
														"<label class='font-term-purple font-bold'></label>"+					
													"</td>"+	
													"<td width=\"25%\" class=\"text-center verticalCenter borderBlack\">"+
														"<label class='font-term-purple font-bold'></label>"+					
													"</td>"+
													"<td width=\"25%\" class=\"text-center verticalCenter borderBlack\">"+
														"<input type='hidden' id='rate_cat_id_tb_useRight'/>"+
														"<input type='hidden' id='rate_layout_id_tb_useRight'/>"+
														"<input type='hidden' id='file_id_tb_useRight'/>"+
														"<label class='font-term-purple font-bold'></label>"+					
													"</td>"+	
													"<td width=\"20%\"class=\"text-center verticalCenter borderBlack\">"+
													"<select class=\"form-control\" onchange='cover_fomula(this)' disabled><option value='NONE'>None</option>"+sl_tab2_cal+"</select></td>"+
												"</tr>";	
												}
											}
										}else{
											row5  = 	"<tr id=\"tb_policyholder_"+numrow3+"\" data-key='"+prd_code+"'>"+
											"<td width=\"20%\" class=\"text-center verticalCenter fontcolortable1 borderBlack\">"+
												"<input type='hidden' id='prd_rider_code' value='"+prd_code+"'>"+
												"<input type='hidden' id='cov_code_policyValue' value='"+choose_primary_insurance_Pass+"'/>"+
												"<label>"+cov_code_policyValue+"</label>"+
											"</td>"+
											"<td width=\"10%\" class=\"text-center verticalCenter fontcolortable1 borderBlack\">"+
												"<label class='font-term-purple font-bold'></label>"+					
											"</td>"+	
											"<td width=\"25%\" class=\"text-center verticalCenter borderBlack\">"+
												"<label class='font-term-purple font-bold'></label>"+					
											"</td>"+
											"<td width=\"25%\" class=\"text-center verticalCenter borderBlack\">"+
												"<input type='hidden' id='rate_cat_id_tb_useRight'/>"+
												"<input type='hidden' id='rate_layout_id_tb_useRight'/>"+
												"<input type='hidden' id='file_id_tb_useRight'/>"+
												"<label class='font-term-purple font-bold'></label>"+					
											"</td>"+	
											"<td width=\"20%\"class=\"text-center verticalCenter borderBlack\">"+
											"<select class=\"form-control\" onchange='cover_fomula(this)' disabled><option value='NONE'>None</option>"+sl_tab2_cal+"</select></td>"+
										"</tr>";		
							
										}
										if($("#tb_policyholder tbody>tr").length == 0 ){
											$("#tb_policyholder tbody").append(row5);
										}else{
											$(row5).insertBefore("#tb_policyholder tbody>tr:first");
										}
										//ดึง ข้อมูลจาก cov_code มาใส่ใน tab การใช้สิทธิ์
										var arrBasePlan = [];
										arrBasePlan.push(choose_primary_insurance_Pass);
									//	(arrBasePlan);
										get_row_useRight(arrBasePlan);	
										//ดึงข้อมุลของตารางพิกัดอายุ ได้ type มาด้วย
										get_tb_ageRange(1);
										/*เพิ่ม row ของ Tab-คำนวณเบี้ยประกัน || ตาราง-การคำนวณจำนวนเงินเอาประกันภัย*/
										var dropdownUnit = $("#hide_fixCovUnit").val();
										var dropdownOF1 = $("#hide_fixCovFactor").val();
										var dropdownOF2 = $("#hide_minCovFactor").val();
										var numrow3 = 1;
										row_cal = "<tr id=\"tr_Calculate_insurance_"+numrow3+"\" data-id=\""+numrow3+"\" data-group='"+numrow3+"' data-parent=\"0\" data-level=\"1\" data-key='"+prd_code+"' >"+
														"<td width=\"14%\" class=\"text-center verticalCenter fontcolortable1 borderBlack\">"+
															"<label>"+choose_primary_insurance_Pass+"</label>"+
															"<input type='hidden' id='prd_rider_code' value='"+prd_code+"'>"+
															"<input type='hidden' id='seq' value='1'>"+
															"<input type='hidden' id='serie_no' value='1'>"+
															"<input type='hidden' id='cov_type' value='B'>"+
														"</td>"+
														"<td width=\"7%\"class=\"text-center verticalCenter fontcolortable1 borderBlack\">" +
														"<label></label>" +
														"</td>"+
														"<td width=\"3%\" class=\"text-center verticalCenter borderBlack\">"+
															"<i class=\"glyphicon glyphicon-plus icon-blue-circle\"  data-id=\'"+numrow3+"\' data-topic=\'"+numrow3+"\' data-type=\'"+numrow3+"\' id=\"addrowMenu3_"+numrow3+"\" onclick=\"addrowMenu3("+numrow3+");\"></i>"+
														"</td>"+	
														"<td width=\"7%\"class=\"text-right verticalCenter borderBlack\">"+
														"<input type='text' class='autoComma form-control text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999999999.99' onblur='validateMin_tbCal(this)'>"+
														"</td>"+
														"<td width=\"7%\" class=\"text-right verticalCenter borderBlack\">"+
														"<input type='text' class='autoComma form-control margin-padding0 text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999999999.99' onblur='validateMax_tbCal(this);'>"+
														"</td>"+
														"<td width=\"10%\"class=\"text-right verticalCenter borderBlack\">"+
														"<input type='text' class='autoComma form-control margin-padding0 text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999999999.99'>"+
														"</td>"+
														"<td width=\"14%\" class=\"text-right verticalCenter borderBlack\">"+
															"<select class=\"form-control\" onchange='change_unit_CL(this,6)'><option value='NONE'>None</option>"+dropdownUnit+"</select></td>"+
														"<td width=\"14%\" class=\"text-right verticalCenter borderBlack\">"+
															"<select class=\"form-control\"><option value='NONE'>None</option>"+dropdownOF1+"</select></td>"+
														"<td width=\"10%\" class=\"text-right verticalCenter borderBlack\">"+
														"<input type='text' class='autoComma form-control margin-padding0 text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999999999.99'>"+
														"<td width=\"14%\" class=\"text-right verticalCenter borderBlack\">"+
															"<select class=\"form-control\"><option value='NONE'>None</option>"+dropdownOF2+"</select></td>"+
													"</tr>";
											if($("#tb_Calculate_insurance tbody>tr").length == 0){
												$("#tb_Calculate_insurance tbody").append(row_cal);
											}else{
												$(row_cal).insertBefore("#tb_Calculate_insurance tbody>tr:first");
											}
											$(".autoComma").autoNumeric('init',{vMin: '0.00', vMax: '999999999.99'});
										
										//การใช้สิทธิตามกรมธรรม์ - เวนคนกรมธรรม์
										$("#ch_change_condition8").prop("checked",false);
										if( response.Tab_exercise_rights_insurance[0].surrender_check ){
											$("#ch_change_condition8").prop("checked",true);
										}else{
											$("#ch_change_condition8").prop("checked",false);
										}
										
										// tab ข้อกำหนด - สร้าง tab policy
										var row = "";
											row = " <li data-id='"+prd_code+"'>" +
														"<a data-toggle='tab' href='#policy_in_"+choose_primary_insurance_Pass+"' class='purple'>"+choose_primary_insurance_Pass+"</a>" +
													"</li>"
										$("#tab_policy_panel").prepend(row)
										getLookup_policyWording_data(choose_primary_insurance_Pass,response,"",prd_code,"");
										
										/**************renew id************/
										renew_TabCalPrem_CL();
										renew_TabCalPrem2_CL();
										renew_TabUseRight_CL();
										renew_TabWarrantyMax_CL();
										renew_TabWarrantyEM_CL();	
											
									}
								});
								console.log("data",json_data)
							}
						}
					 $("#validate_input4_cl").hide();
		}
			$(".autoComma").autoNumeric('init',{vMin: '0.00', vMax: '999999999.99'});
	
	 }else {
		 alert ("มีข้อมูลอยู่แล้ว");
	 }
}
function change_type(type){
	switch(type){
		case "YEAR" : type = "ปี";
			break;
		case "MONTH" : type = "เดือน";
			break;
		case "DAY" : type = "วัน";
			break;
		default : type = "None"
	}
	return type;
}

function startIssue_term(e){
	$("#start_age_insure_cl").val($(e).val());
	$("#hd_min_issue_age1").parent().find('input[type="number"]').val($(e).val())
}
function change_typeTerm1(e){
	var type = $(e).parent().find('input[type="hidden"]').val();
	var type_selected = $(e).val();
	
	if( type_selected != type){
		$(e).val(type).attr("selected",true)
		var type_choose = $(e).find('option:selected').text();
		message = "หน่วยต้องเป็น "+type_choose + " เท่านั้น"
		alertError(message);
	}else{
		$("#start_age_insure_unit_cl option[value='"+$(e).val()+"']").attr("selected",true)
	}
}
function change_typeTerm1_term(e){
	var type = $("#tb_ageRange_CL .font-term-purple").parent().parent().find('td:nth-child(5) input[type="hidden"]').val();
	
	//var type = $(e).parent().find('input[type="hidden"]').val();
	var type_selected = $(e).val();
	
	if( type_selected != type){
		$(e).val(type).attr("selected",true)
		var type_choose = $(e).find('option:selected').text();
		message = "หน่วยต้องเป็น "+type_choose + " เท่านั้น"
		alertError(message);
	}else{
		$("#start_age_insure_unit_cl option[value='"+$(e).val()+"']").attr("selected",true)
	}
}
function endIssue_term(e){
	$("#end_age_insure_cl").val($(e).val());
	$("#hd_max_issue_age1").parent().find('input[type="number"]').val($(e).val())
}
function change_typeTerm2(e){
	
	var type = $(e).parent().find('input[type="hidden"]').val();
	var type_selected = $(e).val();
	
	if( type_selected != type){
		$(e).val(type).attr("selected",true)
		var type_choose = $(e).find('option:selected').text();
		message = "หน่วยต้องเป็น "+type_choose + " เท่านั้น"
		alertError(message);
	}else{
		$("#end_age_insure_unit_cl option[value='"+$(e).val()+"']").attr("selected",true)
	}
}
function change_typeTerm2_term(e){
	var type = $("#tb_ageRange_CL .font-term-purple").parent().parent().find('td:nth-child(7) input[type="hidden"]').val();
	
	//var type = $(e).parent().find('input[type="hidden"]').val();
	var type_selected = $(e).val();
	
	if( type_selected != type){
		$(e).val(type).attr("selected",true)
		var type_choose = $(e).find('option:selected').text();
		message = "หน่วยต้องเป็น "+type_choose + " เท่านั้น"
		alertError(message);
	}else{
		$("#end_age_insure_unit_cl option[value='"+$(e).val()+"']").attr("selected",true)
	}
}
function maxInsure_term(e){
	$("#max_age_insure_cl").val($(e).val());
	$("#hd_max_insure_age1").parent().find('input[type="number"]').val($(e).val())
}
function change_typeTerm3(e){
	var type_selected = $(e).val();
	if( type_selected != "YEAR"){
		$(e).val("YEAR").attr("selected",true)
		message = "หน่วยต้องเป็น ปี เท่านั้น"
		alertError(message);
	}
}

//ยืนยันการเลือกข้อมูลจาก modal สัญญาเพิ่มเติม
var numAdditional_contract = "";
function bt_save_Additional_contract() {
	
	var arrnumrow = [];
	var arrRider = [];
	var contract_type = $("#sel_Type_Additional_contract option:selected").text();	
	var lastImgOK = $('#tb_Additional_contract >tbody>tr:last>td:first').attr("id") || 0;	
	var count_row = $("#tb_Additional_contract>tbody>tr").length;
	
	if(count_row > 0){
		//alert($("#tbl_"+BCID+">tbody>tr[data-group="+dataID+"]:last").attr("id"));		
		var numberImgOK = Number($("#tb_Additional_contract>tbody>tr:last").attr("data-id"));	
	}else{
		var numberImgOK = 0;
	}
	var numberImgOK_age = Number($("#tb_ageRange_CL>tbody>tr[data-parent='0']:last").attr("data-id"));
	var numberImgOK_cal = $("#tb_Calculate_insurance>tbody>tr:last").attr("data-id");
	if(numberImgOK_cal != null){
		if(numberImgOK_cal.includes("_")){
			numberImgOK_cal = $("#tb_Calculate_insurance>tbody>tr:last").attr('data-parent');
		}
	}
    
	
	var arr_value = [];
	var value_check_diff = [];

	/*เก็บค่า rider ที่แอดไปแล้ว*/
	var num_rider = $("#tb_Additional_contract tbody>tr").length;
	if(num_rider > 0){
		$("#tb_Additional_contract tbody>tr>td:nth-child(2)>label").each(function(){
			arrRider.push($(this).text());
		});
		
		var value_chk_old = arrRider.join(",")
		var value = [];
 	 		value = value_chk_old.split(",");
 	
	    for(var i=0; i<value.length; i++){		 
	    	value_check_diff.push(value[i]);	 
	 	}
	}
	
	$("#tb_Additional_contract_modal tbody>tr input[type='checkbox']:checked").each(function(){
		var id = $(this).attr("id");
			id = id.replace("ch_Additional_contract_","");
				
		var ftOnclick = 'imgCheckbox(id);';	
		var rider_id = $(this).parent().parent().find("#additional_contract_pass_"+id).text();
		var rider_name = $(this).parent().parent().find("#additional_contract_Name_"+id).text();
		var rider_cov_cat_id = $(this).parent().parent().find("#rider_cov_cat_id"+id).val();
		var prd_code_rider = $(this).parent().parent().find("#prd_code_rider_"+id).val();
		var rider_type = "";
		var save_diff = [];
		
		arr_value.push(rider_id);
		
		/*เช็คค่า Rider ID ซ้ำ*/
		arr_value.map(function(item){
	  		  if(!arrRider.includes(item)){
	  			  save_diff.push(item);
	  		    }
	  	});
		
		var save_diff_data = save_diff.join(",");
	    var save_diff_split = save_diff_data.split(",");
		
	    if(save_diff != ""){
	    	
	    numberImgOK++;
	    numberImgOK_age++;
	    numberImgOK_cal++;
	    var newID = "imgOK_"+numberImgOK;
	    var rate_cat_NAR = $("#rate_cat_NAR").val();
	    var addrowChild = 'addrowChild("'+numberImgOK+'","'+rider_name+'","'+rider_type+'",this);';
	    var changeFileModal = 'modalGet_selectFile("'+rider_id+'","fileuploads_PMRate1_CL","ip_fileuploads_CL_Additional_contract_Show_'+numberImgOK+'","span_Additional_contractopen_'+numberImgOK+'","validate_Additional_CL_'+numberImgOK+'_CL" ,"span_Additional_contractdownload_'+numberImgOK+'")';
	    for(var m=0; m<save_diff_split.length; m++){
	    	//alert(save_diff_split[m]);
	    	   		       		    	
	    if(rider_id == save_diff_split[m]){		 
		    row2 = 	"<tr id=\"tr_Additional_contract_"+numberImgOK+"\" data-id=\""+numberImgOK+"\" data-level=\"1\">"+
			"<td class=\'text-center verticalCenter borderBlack\'  class=\'text-center verticalCenter borderBlack\' id=\""+newID+"\" onclick=\'"+ftOnclick+"\'>"+
				"<i class=\'glyphicon glyphicon-edit\'></i></td>"+
			"<td class=\"text-left verticalCenter borderBlack\">"+
				"<input type='hidden' id='prd_code_rider_"+numberImgOK+"' value='"+prd_code_rider+"'>"+
				"<label style=\"text-decoration: underline; color: blue;\">"+rider_id+"</label>"+
			"</td>"+
			"<td class='text-center verticalCenter fontcolortable2 borderBlack font-bold'>" +
				"<input type='hidden' id='cov_cat_id_rider"+numberImgOK+"' value='"+rider_cov_cat_id+"'>"+
				"<label></label>" +
			"</td>"+
			"<td class=\"text-left verticalCenter fontcolortable2 borderBlack\">"+
				"<label>"+rider_name+"</label>"+
			"</td>"+
			"<td class=\"text-center verticalCenter borderBlack\">"+
				"<i class=\"glyphicon glyphicon-plus icon-blue-circle\"  data-id=\'"+numberImgOK+"\' data-topic=\'"+rider_id+"\' data-type=\'1\' id=\"addrow1_"+numberImgOK+"\" onclick='"+addrowChild+"'></i>"+
			"</td>"+
			"<td class=\"verticalCenter borderBlack\">"+
				"<div class=\"input-group col-xs-12\">"+
					"<input type='hidden' id='fileId_rider_PM"+numberImgOK+"' value='' />"+
					"<input type='hidden' id='rate_cat_id_rider_PM"+numberImgOK+"' value='' />"+
					"<input type='hidden' id='rate_layout_id_rider_PM"+numberImgOK+"' value='' />"+
					"<input type=\"file\" accept=\".txt\" id=\"ip_fileuploads_Additional_contract"+numberImgOK+"\" style=\"display: none\">"+
					"<input type=\"text\" class=\"form-control clear_val\" id=\"ip_fileuploads_CL_Additional_contract_Show_"+numberImgOK+"\" readonly> " +
					"<span class=\"input-group-btn\"><button class=\"btn btn-default btn-primary\" type=\"button\" id=\"bt_uploadfileAdditional_contract"+numberImgOK+"\"  onclick='"+changeFileModal+"' data-toggle=\"modal\" data-target=\"#modal_input_PMRate\">" +
							/*"<font id='validate_Additional_CL_"+numberImgOK+"_CL' class='require_file' style='color: red;'>*</font>" +*/
							"...</button>"+
					"</span>"+
				"</div>"+
			"</td>"+
			"<td class='text-center verticalCenter borderBlack'>"+
				"<a id='span_Additional_contractopen_"+numberImgOK+"' class='active_grey'>"+
					"<span class='glyphicon glyphicon-eye-open activecolorgray'></span>"+
				"</a>"+
			"</td>"+
			"<td class='text-center verticalCenter borderBlack'>"+
			"<a id='span_Additional_contractdownload_"+numberImgOK+"' class='active_grey'>"+
				"<span data-id='span_Additional_contractdownload_"+numberImgOK+"' class='glyphicon glyphicon-download-alt activecolorgray'></span>"+
			"</a>"+
			"</td>"+
			"<td class=\"text-center verticalCenter borderBlack\">"+
				"<input type='text' id='amount_fix_Additional_contract1_"+numberImgOK+"' class='autoComma form-control text-right' value='0.00' data-v-min='0.00' data-v-max='9999999999.00'>"+
				"</td>"+
			"<td class=\"verticalCenter borderBlack\">"+
			"<div class=\"input-group col-xs-12\">"+
				"<input type='hidden' id='fileId_rider_NAR"+numberImgOK+"' value=''/>"+
				"<input type='hidden' id='rate_cat_id_rider_NAR"+numberImgOK+"' value='"+rate_cat_NAR+"'/>"+
				"<input type='hidden' id='rate_layout_id_rider_NAR"+numberImgOK+"' value='' />"+
				"<input type='text' class='form-control clear_val' id='ip_fileuploads_AdditionalNAR_contract_"+numberImgOK+"' readonly=''>"+ 
			"<label class='input-group-btn'> "+
				"<span id='spanAdditionalNAR_CL_"+numberImgOK+"' class='btn btn-primary' >"+
				/*"<font id='validate_AdditionalNAR_CL_"+numberImgOK+"' class='require_file' style='color: red;'>*</font>" +*/
						"<b>...</b>"+
					"<input id='ip_fileuploads_CL_AdditionalNAR_contract_Show_"+numberImgOK+"' type='file' accept='text/plain' style='display: none;'>"+
				"</span>"+
			"</label>"+
			"</div>"+
			"</td>"+
			"<td class=\"text-center verticalCenter borderBlack\">"+
				"<a id='span_Additional_contractopenNAR_"+numberImgOK+"' class='active_grey'>"+
					"<span class='glyphicon glyphicon-eye-open activecolorgray'></span>"+
				"</a>"+
			"</td>"+
			"<td class=\"text-center verticalCenter borderBlack\">" +
			"<a id='span_Additional_contractdownloadNAR_"+numberImgOK+"' class='active_grey'>"+
				"<span data-id=\'span_Additional_contractdownloadNAR_"+numberImgOK+"\' class=\'glyphicon glyphicon-download-alt activecolorgray\'></span>"+
			"</a>"
				"</td>"+
		    "</tr>";
			
			$("#tb_Additional_contract tbody").append(row2);
			$(".autoComma").autoNumeric('init',{vMin: '0.00', vMax: '999999999.99'});
		    
			// เพิ่ม onchange placeholder ของไฟล์ที่เลือกมา
			var layout_name1 = $("#layout_NAR1").val();
			var layout_name2 = $("#layout_NAR2").val();
			var product_code_main = $("#pass_Insurance_product_cl").val();
			var layout1 = layout_name1+rider_id+"_"+product_code_main;
			var layout2 = layout_name2+rider_id+"_"+product_code_main;
			var placehoder_text = layout1+".txt" + " หรือ " + layout2+".txt";
			//$("#ip_fileuploads_Additional_contract_"+numberImgOK).attr("placeholder",placehoder_text);
			$("#ip_fileuploads_AdditionalNAR_contract_"+numberImgOK).attr("placeholder",placehoder_text);
			
			
			/**************************/
			
			// pm Rate
			//var uploadfile = "selectFileRate_CL(3,'ip_fileuploads_CL_Additional_contract_Show_"+numberImgOK+"','"+layout+"','','','span_Additional_contractopen_"+numberImgOK+"')";
			//$("#ip_fileuploads_CL_Additional_contract_Show_"+numberImgOK).attr("onchange",uploadfile);
			
			// NAR
			var uploadfile2 = "selectFileRate_CL(22,'ip_fileuploads_CL_AdditionalNAR_contract_Show_"+numberImgOK+"','"+layout1+"','"+layout2+"','','span_Additional_contractopenNAR_"+numberImgOK+"','span_Additional_contractdownloadNAR_"+numberImgOK+"')";
			$("#ip_fileuploads_CL_AdditionalNAR_contract_Show_"+numberImgOK).attr("onchange",uploadfile2);
			
			/*การกำหนดบันทึกสลักหลังและพิกัดอายุ*/	
			var sl_ageCoordinate = $("#sl_unit_age_coordinates").val();
			row_age = "<tr id='tr_ageRange_CV"+numberImgOK_age+"' data-id='"+numberImgOK_age+"' data-parent='0' data-level='1' data-type='1'>"+											
			  "<td class='text-left verticalCenter borderBlack'>"+
			  	"<input type='hidden' id='prd_rider_code' value='"+prd_code_rider+"'>"+
				"<label class='font-term-green font-bold'>"+rider_id+"</label>"+
			  "</td>"+
			  "<td class='text-center verticalCenter borderBlack font-term-green font-bold'>" +
			  	"<input type='hidden' id='cov_cat_id' value='"+rider_cov_cat_id+"'>"+
			  	"<label class='font-term-green font-bold'></label>" +
			  "</td>"+
			  "<td class='text-center verticalCenter borderBlack'>"+
			  	"<i class='glyphicon glyphicon-plus icon-blue-circle' data-id='"+numberImgOK_age+"' id='addrow_endorse"+numberImgOK_age+"' onclick=\"addRowEndorse("+numberImgOK_age+", '"+rider_id+"', '"+prd_code_rider+"');\"></i>"+
			  "</td>"+											
			  "<td class='text-center verticalCenter borderBlack'>"+
			  	"<input type='hidden' id='hd_min_issue_age"+numberImgOK_age+"'>"+
			  	"<input type='number' class='form-control margin-padding0 text-center width40px' value='1' min='1' onchange=\"numberKey_min(this,'hd_min_issue_age"+numberImgOK_age+"');\">"+
			  "</td>"+
			  "<td class='text-center verticalCenter borderBlack'>"+
			  "<input type='hidden' id='start_insure_ageUnit"+numberImgOK_age+"' >"+
				"<select class='form-control width100px' id='ageRange_from_unit"+numberImgOK_age+"_cl' onchange='change_typeTerm1(this)'>"+
					"<option value='NONE'>None</option>"+sl_ageCoordinate+
				"</select>"+
			  "</td>"+
			  "<td class='text-center verticalCenter borderBlack'>"+
			  "<input type='hidden' id='hd_max_issue_age"+numberImgOK_age+"' >"+
			  	"<input type='number' class='form-control margin-padding0 text-center width40px' value='1' min='1' onchange=\"numberKey_max(this,'hd_max_issue_age"+numberImgOK_age+"');\">"+
			  "</td>"+
			  "<td class='text-center verticalCenter borderBlack'>"+
			  "<input type='hidden' id='end_insure_ageUnit"+numberImgOK_age+"' >"+
				"<select class='form-control width100px' id='ageRange_to_unit"+numberImgOK_age+"_cl' onchange='change_typeTerm2(this)'>"+
					"<option value='NONE'>None</option>"+sl_ageCoordinate+
				"</select>"+
			  "</td>"+
			  "<td class='text-center verticalCenter borderBlack'>"+
			  "<input type='hidden' id='hd_max_insure_age"+numberImgOK_age+"' >"+
				"<input type='number' class='form-control margin-padding0 text-center width40px' value='1' min='1' onchange=\"numberKey_maximum(this,'hd_max_insure_age"+numberImgOK_age+"');\">"+
			  "</td>"+
			  "<td class='text-center verticalCenter borderBlack'>"+												
				"<select class='form-control width100px' id='ageRange_max_unit"+numberImgOK_age+"_cl' onchange='change_typeTerm3(this)'>"+
					"<option value='NONE'>None</option>"+sl_ageCoordinate+
				"</select>"+
			  "</td>"+																			
			  "</tr>";
	
			$("#tb_ageRange_CL tbody").append(row_age);			
			
			
			/*เพิ่ม row ของ Tab-คำนวณเบี้ยประกัน || ตาราง-การคำนวณจำนวนเงินเอาประกันภัย*/
			var dropdownUnit = $("#hide_fixCovUnit").val();
			var dropdownOF1 = $("#hide_fixCovFactor").val();
			var dropdownOF2 = $("#hide_minCovFactor").val();
			row_cal = "<tr id=\"tr_Calculate_insurance_"+numberImgOK_cal+"\" data-id=\""+numberImgOK_cal+"\" data-parent=\"0\" data-group='"+numberImgOK_cal+"' data-level=\"1\" data-key='"+rider_id+"' >"+
							"<td width=\"14%\" class=\"text-center verticalCenter fontcolortable2 borderBlack\">"+
								"<input type='hidden' id='prd_rider_code' value='"+prd_code_rider+"'>"+
								"<input type='hidden' id='serie_no' value='1'>"+
								"<input type='hidden' id='seq' value='1'>"+
								"<input type='hidden' id='cov_type' value='R'>"+
								"<label>"+rider_id+"</label>"+
							"</td>"+
							"<td width=\"7%\"class=\"text-center verticalCenter fontcolortable2 borderBlack\">" +
								"<label></label>" +
							"</td>"+
							"<td width=\"3%\" class=\"text-center verticalCenter borderBlack\">"+
								"<i class=\"glyphicon glyphicon-plus icon-blue-circle\"  data-id=\'"+numberImgOK_cal+"\' data-topic=\'"+numberImgOK_cal+"\' data-type=\'"+numberImgOK_cal+"\' id=\"addrowMenu3_"+numberImgOK_cal+"\" onclick=\"addrowMenu3("+numberImgOK_cal+");\"></i>"+
							"</td>"+	
							"<td width=\"7%\"class=\"text-right verticalCenter borderBlack\">"+
							"<input type='text' class='autoComma form-control text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999999999.99' onblur='validateMin_tbCal(this)'>"+
							"</td>"+
							"<td width=\"7%\" class=\"text-right verticalCenter borderBlack\">"+ 
							"<input type='text' class='autoComma form-control margin-padding0 text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999999999.99' onblur='validateMax_tbCal(this);'>"+
							"</td>"+
							"<td width=\"10%\"class=\"text-right verticalCenter borderBlack\">"+
							"<input type='text' class='autoComma form-control margin-padding0 text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999999999.99'>"+
							"</td>"+
							"<td width=\"14%\" class=\"text-right verticalCenter borderBlack\">"+
								"<select class=\"form-control\" onchange='change_unit_CL(this,6)'><option value='NONE'>None</option>"+dropdownUnit+"</select></td>"+
							"<td width=\"14%\" class=\"text-right verticalCenter borderBlack\">"+
								"<select class=\"form-control\"><option value='NONE'>None</option>"+dropdownOF1+"</select></td>"+
							"<td width=\"10%\" class=\"text-right verticalCenter borderBlack\">"+
							"<input type='text' class='autoComma form-control margin-padding0 text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999999999.99'>"+
							"<td width=\"14%\" class=\"text-right verticalCenter borderBlack\">"+
								"<select class=\"form-control\"><option value='NONE'>None</option>"+dropdownOF2+"</select></td>"+
						"</tr>";		
				$("#tb_Calculate_insurance tbody").append(row_cal);
				$(".autoComma").autoNumeric('init',{vMin: '0.00', vMax: '999999999.99'});
			
				/*เพิ่ม row ของ Tab-คำนวณเบี้ยประกัน || ตาราง-การคำนวณเบี้ยประกันภัย*/
				var sl_calculus = $("#hide_slCalculus").val();
				row4 = 	"<tr id=\"tb_Calculate_insurance2_"+numberImgOK_cal+"\" data-key='"+prd_code_rider+"'>"+
							"<td width=\"30%\" class=\"text-center verticalCenter fontcolortable2 borderBlack\">"+
								"<input type='hidden' id='prd_rider_code' value='"+prd_code_rider+"'>"+
								"<label>"+rider_id+"</label>"+
							"</td>"+
							"<td width=\"20%\" class=\"text-center verticalCenter fontcolortable2 borderBlack\">"+
								"<label></label>"+					
							"</td>"+	
							"<td width=\"50%\"class=\"text-center verticalCenter borderBlack\">"+
							"<select class=\"form-control\" disabled><option value='0'>None</option>"+sl_calculus+"</select></td>"+
						"</tr>";			  
					$("#tb_Calculate_insurance2 tbody").append(row4);
				var formula_base = $("#tb_Calculate_insurance2 tbody>tr").eq(0).find('td:nth-child(3) option:selected').val()
				$("#tb_Calculate_insurance2 tbody>tr:last").find('td:nth-child(3) option[value="'+formula_base+'"]').attr("selected",true)
				
				/*เพิ่ม row ของ Tab-ข้อกำหนด || ตาราง-จำนวนเงินเอาประกันภัยสูงสุด (ต่อราย)*/
				var row6 = "<tr id='tbody_max_amount_insure"+numberImgOK_cal+"' data-key='"+prd_code_rider+"'>"+
						"<td id='imgOK_max_amount_insure"+numberImgOK_cal+"_CL' class='verticalCenter text-center'>" +
							"<input type='hidden' id='cov_code' value='"+rider_id+"'>" +
							"<input id='mode_max_amount_insure"+numberImgOK_cal+"_CL' type='checkbox' onclick='disabled_fieldInsure(this)' value='"+prd_code_rider+"'>" +
						"</td>"+
						"<td class='verticalCenter text-center font-term-green font-bold'></td>"+
						"<td class='verticalCenter'><input type='text' id='max_amount_insure"+numberImgOK_cal+"_CL' class='autoComma form-control text-right' value='0' disabled></td>"+																									
					"</tr>"
					$("#tbl_insure_single tbody").append(row6)
				
				
				/*เพิ่ม row ของ Tab-ข้อกำหนดการรับประกัน || Lookup ตาราง-การรับแบบเพิ่มเบี้ยพิเศษ*/
					var KPW_maxEm
					var json_data = {
								"method": "getCaseRider",
								"rCode": rider_id
						}
						$.ajax({
							url: 'ProductCL_GetData_Servlet',
							type: "POST",
							data: json_data,
							async: false,
							success: function (response) {
								KPW_maxEm = (response.Tab_cal_insurance_premiums[0].max_EM*100).toFixed(2);
								
								var row = ""
									row = "<tr data-key='"+prd_code_rider+"'>" +
										"<td class='verticalCenter text-center font-term-green font-bold'><label></label>" +
										"<input type='hidden' id='cov_code' value='"+rider_id+"'>" +
										"</td>"+
										"<td class='verticalCenter text-right font-term-green font-bold'>"+KPW_maxEm+"</td>"
										if(KPW_maxEm == 0){
											row += "<td class='verticalCenter text-right'><input type='text' id='amount_premium_uw_CL"+numberImgOK_cal+"' class='autoPercent3 form-control text-right' value='0.00' data-v-min='0.00' data-v-max='999.99' onblur='validate_maxEM(this);' disabled></td>"
										}else{
											row += "<td class='verticalCenter text-right'><input type='text' id='amount_premium_uw_CL"+numberImgOK_cal+"' class='autoPercent3 form-control text-right' value='0.00' data-v-min='0.00' data-v-max='999.99' onblur='validate_maxEM(this);'></td>"
										}
									row += "</tr>"	
								$("#tbl_increase_premium_CL tbody").append(row);
								get_tb_ageRange(2);
								
								/*เพิ่ม row ของ Tab-การใช้สิทธิ์ตามกรมธรรม์ || ตาราง-การเวนคืน กธ.*/
								var sl_tab2_cal = $("#hide_sl_cal").val();
								var row5 = "";
								var cov_code_policyValue = rider_id;
								if(response.Tab_table_policy_value[0].table_policy_value != ""){
									for(i in response.Tab_table_policy_value[0].table_policy_value){
										var obj_policyVal = response.Tab_table_policy_value[0].table_policy_value[i]
										if(obj_policyVal.pass == 6){
											if(i > 0){
												cov_code_policyValue = "";
											}
											row5 = 	"<tr id=\"tb_policyholder_"+numberImgOK_cal+"\" data-key='"+prd_code_rider+"'>"+
														"<td width=\"20%\" class=\"text-center verticalCenter fontcolortable2 borderBlack\">"+
														"<input type='hidden' id='prd_rider_code' value='"+prd_code_rider+"'>"+
														"<input type='hidden' id='cov_code_policyValue' value='"+rider_id+"'/>"+
															"<label>"+cov_code_policyValue+"</label>"+
														"</td>"+
														"<td width=\"10%\" class=\"text-center verticalCenter fontcolortable2 borderBlack\">"+
															"<label></label>"+					
														"</td>"+	
														"<td width=\"25%\" class=\"text-center verticalCenter fontcolortable2 borderBlack\">"+
															"<label></label>"+					
														"</td>"+
														"<td width=\"25%\" class=\"text-center verticalCenter fontcolortable2 borderBlack\">"+
															"<input type='hidden' id='rate_cat_id_tb_useRight'/>"+
															"<input type='hidden' id='rate_layout_id_tb_useRight'/>"+
															"<input type='hidden' id='file_id_tb_useRight'/>"+
															"<label></label>"+					
														"</td>"+
														"<td width=\"20%\"class=\"text-center verticalCenter borderBlack\">"+
														"<select class=\"form-control\" onchange='cover_fomula(this)' disabled><option value='NONE'>None</option>"+sl_tab2_cal+"</select></td>"+
													"</tr>";			  
											$("#tb_policyholder tbody").append(row5);
										}
									}
								}else{
									row5 = 	"<tr id=\"tb_policyholder_"+numberImgOK_cal+"\">"+
											"<td width=\"20%\" class=\"text-center verticalCenter fontcolortable2 borderBlack\">"+
											"<input type='hidden' id='prd_rider_code' value='"+prd_code_rider+"'>"+
											"<input type='hidden' id='cov_code_policyValue' value='"+rider_id+"'/>"+
												"<label>"+cov_code_policyValue+"</label>"+
											"</td>"+
											"<td width=\"10%\" class=\"text-center verticalCenter fontcolortable2 borderBlack\">"+
												"<label></label>"+					
											"</td>"+	
											"<td width=\"25%\" class=\"text-center verticalCenter fontcolortable2 borderBlack\">"+
												"<label></label>"+					
											"</td>"+
											"<td width=\"25%\" class=\"text-center verticalCenter fontcolortable2 borderBlack\">"+
												"<input type='hidden' id='rate_cat_id_tb_useRight'/>"+
												"<input type='hidden' id='rate_layout_id_tb_useRight'/>"+
												"<input type='hidden' id='file_id_tb_useRight'/>"+
												"<label></label>"+					
											"</td>"+
											"<td width=\"20%\"class=\"text-center verticalCenter borderBlack\">"+
											"<select class=\"form-control\" onchange='cover_fomula(this)' disabled><option value='NONE'>None</option>"+sl_tab2_cal+"</select></td>"+
										"</tr>";			  
								$("#tb_policyholder tbody").append(row5);
								}
								
								
								// tab ข้อกำหนด - สร้าง tab policy
								var row = "";
									row = " <li data-id='"+prd_code_rider+"'>" +
												"<a data-toggle='tab' href='#policy_in_"+rider_id+"' class='green'>"+rider_id+"</a>" +
											"</li>"
								$("#tab_policy_panel").append(row)
								getLookup_policyWording_data(rider_id,response,"",prd_code_rider,"")
							}
						});
				/*var row = ""
					row = "<tr>" +
						"<td class='verticalCenter text-center font-term-green font-bold'>" +
							"<input type='hidden' id='cov_code' value='"+rider_id+"'>" +
						"</td>"+
						"<td class='verticalCenter text-right font-term-green font-bold'></td>"+
						"<td class='verticalCenter text-right'><input type='text' id='amount_premium_uw_CL"+numberImgOK_cal+"' class='auto form-control text-right' value='0.00' data-v-min='0.00' data-v-max='999.99'></td>"+																									
					"</tr>"	
				$("#tbl_increase_premium_CL tbody").append(row);*/
				
				
				
				$(".autoComma").autoNumeric('init',{vMin: '0.00', vMax: '999999999.99'});
				$(".autoPercent").autoNumeric('init',{vMin: '0.00', vMax: '99.99'});
				$(".autoPercent3").autoNumeric('init',{vMin: '0.00', vMax: '999.99'});
	    	}
	    }
	  }
	    get_case_rider(rider_id);
	    $("#validate_input11_cl").hide();
	});
	
	
	var value_chk_new_array = arr_value.join(",");
	var count_sub_modal = $("#tb_Additional_contract_modal tbody>tr input[type='checkbox']:checked").length;
	
	var save_diff_del = [];    	
	value_check_diff.map(function(item){
    	if(!arr_value.includes(item)){
    		save_diff_del.push(item);
  		}
    });
    
//    var data_diff_del = save_diff_del.join(",");
//	if(count_sub_modal < count_row){
//		var save_diff_del_split = data_diff_del.split(",");
//		for(var a=0; a<save_diff_del_split.length; a++){
//			$("#tb_Additional_contract>tbody>tr").each(function(){
//				var code_old = $(this).find("td:nth-child(2)>label").text();
//				if(save_diff_del_split[a] == code_old){
//					/*ต้อง remove*/
//					$(this).closest('tr').remove();
//					
//					/*หา rider ของตารางอายุ*/
//					$("#tb_ageRange_CL>tbody>tr").each(function(){
//						var rider_age = $(this).find("td:nth-child(1)>label").text();
//						if(rider_age == code_old){
//							$(this).closest('tr').remove();
//						}
//						
//					});
//				}
//			});   			
//		}
//	}
	
		
	if($("#div_tb_Additional_contract").innerHeight() > 264){
		$("#div_tb_Additional_contract").addClass("settableproduct");
	}else{
		$("#div_tb_Additional_contract").removeClass("settableproduct");
	}
	
	//ดึงข้อมูลตารางพิกัดอายุ
	get_tb_ageRange(2);
	//ดึงค่าการใช้สิทธิ์ตามกรมธรรม์
	get_row_useRight(arr_value);	
	
	
}

function get_case_rider(cov_code){
	
	var json_data = {
			"method" : "getCaseRider",
			"rCode" : cov_code
	}
	$.ajax({
		url: 'ProductCL_GetData_Servlet',
		type: "POST",
		data: json_data,
		success: function (response) {
			
			var obj = response.Tab_Basic_Information[0];
			var dup_covCode = false;
			$("#tabBenefitProduct_CL li").each(function(){
				if( cov_code == $(this).find('a').text()){
					dup_covCode = true
				}
			})
			if(!dup_covCode){
				//Max Fix Benefit
				showcase_benefit_CL(response,"R",cov_code,"");
				getdata_benefit_CL(response,"R",cov_code,"");
				
			}

			
			$("#tb_ageRange_CL tbody>tr").each(function(){
				if( obj.passInsurance == $(this).find('td:nth-child(1) label').text()){
					$(this).find('td:nth-child(4) input[type="hidden"]').val(obj.age_Start);
					$(this).find('td:nth-child(4) input[type="number"]').val(obj.age_Start);
					$(this).find('td:nth-child(5) input[type="hidden"]').val(obj.age_Start_Unit);
					$(this).find("td:nth-child(5) select>option[value='"+obj.age_Start_Unit+"']").attr("selected",true);
					$(this).find('td:nth-child(6) input[type="hidden"]').val(obj.age_To);
					$(this).find('td:nth-child(6) input[type="number"]').val(obj.age_To);
					$(this).find('td:nth-child(7) input[type="hidden"]').val(obj.age_To_Unit);
					$(this).find("td:nth-child(7) select>option[value='"+obj.age_To_Unit+"']").attr("selected",true);	
					$(this).find('td:nth-child(8) input[type="hidden"]').val(obj.maximum_Protection_To);
					$(this).find('td:nth-child(8) input[type="number"]').val(obj.maximum_Protection_To);
					$(this).find("td:nth-child(9) select>option[value='YEAR']").attr("selected",true);	// PUN FIX HARD
					//$(this).find("td:nth-child(9) select>option[value='"+obj.maximum_Protection_Unit+"']").attr("selected",true);
				}
			})
			
			 // เซ็คว่ามี pm rate รึเปล่า
			 var chk_pmRate  = response.Tab_cal_insurance_premiums[0].table_insurance_premium.length
			 if(chk_pmRate == 0){
				 $("#tb_Additional_contract tbody>tr").each(function(){
					 if( obj.passInsurance == $(this).find('td:nth-child(2) label').text()){
						 $(this).find('td:nth-child(5) i').addClass('disabledAll')
						 $(this).find('td:nth-child(6) button').attr("disabled",true)
					 }
				 })
			 }
			
		}
	});
	console.log("data",json_data);
}

function get_case_rider_lookupUseRight(cov_code,prd_code,cat_code_rider){
	
	var json_data = { 
			"method" : "getCaseRider",
			"rCode" : cov_code
	}
	$.ajax({
		url: 'ProductCL_GetData_Servlet',
		type: "POST",
		data: json_data,
		async:false,
		success: function (response) {
			
			var numberImgOK_cal = $("#tb_policyholder>tbody>tr:last").attr("id");
			if(numberImgOK_cal != null){
				numberImgOK_cal = numberImgOK_cal.replace("tb_policyholder_","")
			}
			/*เพิ่ม row ของ Tab-การใช้สิทธิ์ตามกรมธรรม์ || ตาราง-การเวนคืน กธ.*/
			var sl_tab2_cal = $("#hide_sl_cal").val();
			var row5 = "";
			var cov_code_policyValue = cov_code;
			//var round = 0;
			for(i in response.Tab_table_policy_value[0].table_policy_value){
				numberImgOK_cal++;
				var obj_policyVal = response.Tab_table_policy_value[0].table_policy_value[i]
				if(obj_policyVal.pass == 6){
					if(i > 0){
						cov_code_policyValue = "";
					}
					var type_cov = cat_code_rider
					if(type_cov == null || cov_code_policyValue == ""){
						type_cov = "";
					}
					row5 = 	"<tr id=\"tb_policyholder_"+numberImgOK_cal+"\" data-key='"+prd_code+"'>"+
								"<td width=\"20%\" class=\"text-center verticalCenter fontcolortable2 borderBlack\">"+
								"<input type='hidden' id='prd_rider_code' value='"+prd_code+"'>"+
								"<input type='hidden' id='cov_code_policyValue' value='"+cov_code+"'/>"+
									"<label>"+cov_code_policyValue+"</label>"+
								"</td>"+
								"<td width=\"10%\" class=\"text-center verticalCenter fontcolortable2 borderBlack\">"+
									"<label>"+type_cov+"</label>"+					
								"</td>"+	
								"<td width=\"25%\" class=\"text-center verticalCenter fontcolortable2 borderBlack\">"+
									"<label></label>"+					
								"</td>"+
								"<td width=\"25%\" class=\"text-center verticalCenter fontcolortable2 borderBlack\">"+
									"<input type='hidden' id='rate_cat_id_tb_useRight'/>"+
									"<input type='hidden' id='rate_layout_id_tb_useRight'/>"+
									"<input type='hidden' id='file_id_tb_useRight'/>"+
									"<label></label>"+					
								"</td>"+
								"<td width=\"20%\"class=\"text-center verticalCenter borderBlack\">"+
								"<select class=\"form-control\" onchange='cover_fomula(this)' disabled><option value='NONE'>None</option>"+sl_tab2_cal+"</select></td>"+
							"</tr>";			  
					$("#tb_policyholder tbody").append(row5);
				}
			}
			
			/*lookup เมื่อ function ข้างบนไม่ได้ค่า*/
			var flag_tb = false;
			$("#tb_policyholder tbody>tr").each(function(){
				if( cov_code == $(this).find('td:nth-child(1) label').text()){
					flag_tb = true;
				}
			})
			if( !flag_tb ){
				row5 = 	"<tr id=\"tb_policyholder_"+numberImgOK_cal+"\" data-key='"+prd_code+"'>"+
							"<td width=\"20%\" class=\"text-center verticalCenter fontcolortable2 borderBlack\">"+
							"<input type='hidden' id='prd_rider_code' value='"+prd_code+"'>"+
							"<input type='hidden' id='cov_code_policyValue' value='"+cov_code+"'/>"+
								"<label>"+cov_code+"</label>"+
							"</td>"+
							"<td width=\"10%\" class=\"text-center verticalCenter fontcolortable2 borderBlack\">"+
								"<label>"+cat_code_rider+"</label>"+					
							"</td>"+	
							"<td width=\"25%\" class=\"text-center verticalCenter fontcolortable2 borderBlack\">"+
								"<label></label>"+					
							"</td>"+
							"<td width=\"25%\" class=\"text-center verticalCenter fontcolortable2 borderBlack\">"+
								"<input type='hidden' id='rate_cat_id_tb_useRight'/>"+
								"<input type='hidden' id='rate_layout_id_tb_useRight'/>"+
								"<input type='hidden' id='file_id_tb_useRight'/>"+
								"<label></label>"+					
							"</td>"+
							"<td width=\"20%\"class=\"text-center verticalCenter borderBlack\">"+
							"<select class=\"form-control\" onchange='cover_fomula(this)' disabled><option value='NONE'>None</option>"+sl_tab2_cal+"</select></td>"+
						"</tr>";			  
				$("#tb_policyholder tbody").append(row5);
			}

		}
	});
	console.log("data",json_data);
}

function get_tb_ageRange(plan){
	
	var pass = [];
	$("#tb_ageRange_CL tbody>tr").each(function(i){
		obj = {};
		obj["pass"] = $(this).find("td:nth-child(1) label").text();
		pass.push(obj)
	})	
	
	var json_data = {
			"method": "searchByCovCatIdLv3",
			"pass": JSON.stringify(pass)
	}
	
	$.ajax({
		url: 'ProductCL_GetData_Servlet',
		type: "POST",
		data: json_data,
		async: false,
		success: function (response) {
			
			for(i in response.Tab_Basic_Information[0].type_coverage){
				var obj = response.Tab_Basic_Information[0].type_coverage[i];
				
				// Tab BasicInfo - พิกัดอายุ
				$("#tb_ageRange_CL tbody>tr[data-level='1']").each(function(){
					if( obj.type[1].cov_code == $(this).find('td:nth-child(1) label').text()){
						$(this).find('td:nth-child(2) label').text(obj.type[2].text)
					}
				})
				
				// Tab คำนวณเบี้ยประกัน - การคำนวณจำนวนเงินเอาประกันภัย
				$("#tb_Calculate_insurance tbody>tr[data-level='1']").each(function(){
					if( obj.type[1].cov_code== $(this).find('td:nth-child(1) label').text()){
						$(this).find('td:nth-child(2) label').text(obj.type[2].text)
					}
				})
				
				// Tab คำนวณเบี้ยประกัน - การคำนวณเบี้ยประกันภัย
				$("#tb_Calculate_insurance2 tbody>tr").each(function(){
					if( obj.type[1].cov_code == $(this).find('td:nth-child(1) label').text()){
						$(this).find('td:nth-child(2) label').text(obj.type[2].text)
					}
				})
				
				// Tab การใช้สิทธิตามกรมธรรม์ - การเวนคืน กธ.
				$("#tb_policyholder tbody>tr").each(function(){
					if( obj.type[1].cov_code == $(this).find('td:nth-child(1) label').text()){
						$(this).find('td:nth-child(2) label').text(obj.type[2].text)
					}
				})
				
				// ตาราง rider
				$("#tb_Additional_contract tbody>tr").each(function(){
					if( obj.type[1].cov_code == $(this).find('td:nth-child(2) label').text()){
						$(this).find('td:nth-child(3) label').text(obj.type[2].text)
					}
				})
				
				// Tab ข้อกำหนด - จำนวนเงินเอาประกันภัยสูงสุด (ต่อราย)
				$("#tbl_insure_single tbody>tr").each(function(){
					if( obj.type[1].cov_code == $(this).find("td:nth-child(1) input[type='hidden']").val()){
						$(this).find('td:nth-child(2)').text(obj.type[2].text)
					}
				})
				
				// Tab ข้อกำหนด - การรับแบบเพิ่มเบี้ยพิเศษ
				$("#tbl_increase_premium_CL tbody>tr").each(function(){
					if( obj.type[1].cov_code == $(this).find("td:nth-child(1) input[type='hidden']").val()){
						$(this).find('td:nth-child(1) label').text(obj.type[2].text)
					}
				})
			}
			
		}
	});
	console.log("data",json_data);
}

//ดึงค่าการใช้สิทธิ์ตามกรมธรรม์ 
function get_row_useRight(arrRider){
//alert("2/"+arrRider)
	var json_data = {
			"method" : "Getrate_layout_ByCovCode",
			"cov_code" : JSON.stringify(arrRider)
	}
	$.ajax({
		url: 'ProductCL_GetData_Servlet',
		type: "POST",
		data: json_data,
		async: false,
		success: function (response) {
			
			for(i in response.rateLayout_Type){
				var obj = response.rateLayout_Type[i];
				$("#tb_policyholder tbody>tr").each(function(){
					if( obj.cov_code == $(this).find('td:nth-child(1) #cov_code_policyValue').val()
							&& $(this).find('td:nth-child(4) label').text() == ""){
						$(this).find('td:nth-child(4) #rate_cat_id_tb_useRight').val(obj.rate_cat_id);
						$(this).find('td:nth-child(4) #rate_layout_id_tb_useRight').val(obj.rate_layout_id);
						$(this).find('td:nth-child(4) #file_id_tb_useRight').val(obj.file_id);
						$(this).find('td:nth-child(4) label').text(obj.file_name);
						if($(this).find('td:nth-child(1) label').text() != ""){
							$(this).find('td:nth-child(3) label').text(obj.nameTH);
							$(this).find('td:nth-child(5) select').attr("disabled",false);
						}
						return false;
					}
				})
				
				/*$("#tb_ageRange_CL tbody>tr").each(function(){
					if( obj.cov_code == $(this).find('td:nth-child(1) label').text()){
						$(this).find('td:nth-child(4) input[type="hidden"]').val(obj.min_issue_age);
						$(this).find('td:nth-child(4) input[type="number"]').val(obj.min_issue_age);
						$(this).find("td:nth-child(5) select>option[value='"+obj.min_issue_age_unit+"']").attr("selected",true);
						$(this).find('td:nth-child(6) input[type="hidden"]').val(obj.max_issue_age);
						$(this).find('td:nth-child(6) input[type="number"]').val(obj.max_issue_age);
						$(this).find("td:nth-child(7) select>option[value='"+obj.max_issue_age_unit+"']").attr("selected",true);
						$(this).find('td:nth-child(8) input[type="hidden"]').val(obj.max_insure_age);
						$(this).find('td:nth-child(8) input[type="number"]').val(obj.max_insure_age);
						$(this).find("td:nth-child(9) select>option[value='"+obj.max_insure_age_unit+"']").attr("selected",true);
					}
				})*/
					
			}
			
		}
	});
	console.log("data",json_data)
	
}
function getLookup_policyWording_data(tbl,res,type,prd_rider_code,main_cov){
		//console.log("RESSSSSS:/",res)
		json_data = {
				"method" : "getLookup_Policy",
				"cov_code" : tbl
		}
		$.ajax({
			url: 'ProductCL_Data_default_Servlet',
			type: "POST",
			data: json_data,
			success: function (response) {
				var baseplan_covCode = $("#tb_PM_Rate tbody>tr").eq(0).find('td:nth-child(1) label').text();
				
				var row_main = "";
				if( baseplan_covCode == tbl){
					row_main += "<div id='policy_in_"+tbl+"' data-id='policy_in_"+tbl+"' class='tab-pane fade active in'>"
				}else{
					row_main += "<div id='policy_in_"+tbl+"' data-id='policy_in_"+tbl+"' class='tab-pane fade'>"
				}
					row_main += "<table class='table table-bordered borderBlack' style='width:100%; margin-top:30px;'>"+
						"<thead>"+
							"<tr>"+											
								"<th class='text-center bg-primary borderBlack' width='50' style='vertical-align: middle;'>ลำดับ</th>"+							
								"<th class='text-center verticalCenter bg-primary borderBlack' width='150'>Policy Name</th>"+
								"<th class='text-center verticalCenter bg-primary borderBlack' width='70'>นำเข้าไฟล์<br>(PDF)</th>"+												
								"<th class='text-center verticalCenter bg-primary borderBlack' width='70'>นำเข้าไฟล์<br>(MS Word)</th>"+												
							"</tr>"+
						"</thead>"+
						"<tbody>"+
						"</tbody>"+							
						"</table>"+							
				   "</div>"
			$("#policy_panel_tab_CL").append(row_main);
				
			
			for(w in response.Tab_Policy_Wording){
					var obj_policy = response.Tab_Policy_Wording[w];
					var row_child =	"<tr id='tbody_policy"+obj_policy.pass+"' data-id='"+obj_policy.pass+"'>"+											
							"<td class='text-center borderBlack' style='vertical-align: middle;'>"+obj_policy.pass+"</td>"+									
							"<td class='borderBlack verticalCenter'><label class='label_notbold'>"+obj_policy.text+"</label></td>"+									
							"<td class='borderBlack' align='center'>"+
							"<input type='hidden' id='fileId_pdf_CL"+obj_policy.pass+"'>"+
								"<div class='input-group col-xs-12'>"+
									"<div id='div_pdf_policy"+obj_policy.pass+"_CL' class='filename'>None"+
										/*"<a target='_blank'></a>"+*/
									"</div>"+																								
							    "</div>"+
							"</td>"+										
							"<td class='borderBlack' align='center'>"+
							"<input type='hidden' id='fileId_doc_CL"+obj_policy.pass+"'>"+
								"<div class='input-group col-xs-12'>"+
									"<div id='div_word_policy"+obj_policy.pass+"_CL' class='filename'>None</div>"+																						
								"</div>"+
							"</td>"+																				
						"</tr>"
					$("#policy_in_"+tbl).find('tbody').append(row_child)
					
				}
				
			//--Get case by cov_code
			for(i in res.Tab_Policy_Wording){
				var obj = res.Tab_Policy_Wording[i]
				$("#policy_in_"+tbl).find('table>tbody>tr').each(function(){
					if( Number($(this).data('id')) == Number(obj.doc_type_id)){
						
						for(j in obj.file){
							var obj_file = obj.file[j];
							if( obj_file.file_type == "2"){
								var rowPDF = "<a onclick=\"openFile_target(this,'"+obj.file[j].file_ref+"','pdf')\" target='_blank'>"+obj.file[j].file_name+"</a>"
								$(this).find('td:nth-child(3)').text("")
								$(this).find('td:nth-child(3)').append(rowPDF)
							}else if( obj_file.file_type == "1"){
								var rowDOC = "<a onclick=\"openFile_target(this,'"+obj.file[j].file_ref+"','doc')\" target='_blank'>"+obj.file[j].file_name+"</a>"
								$(this).find('td:nth-child(4)').text("")
								$(this).find('td:nth-child(4)').append(rowDOC)
							}
						}
					}
				})
			}
			//--end Get case by cov_code
			$("#tab_policy_panel").find('li').removeClass('active')
			$("#tab_policy_panel").find('li:first').addClass('active')
			$("#policy_panel_tab_CL").find('div').removeClass('active in')
			
			$("#policy_in_"+baseplan_covCode).addClass("active in")
			
			}
		})
		console.log("data",json_data);
		
}

/* modalGet_selectFile */
function modalGet_selectFile(id,id_row,textVal,spanfile,validate,spanDownload){
	
	//check base or rider
	var chk_type ;
	if( id == $("#tb_PM_Rate tbody>tr").eq(0).find('td:nth-child(1) label').text()){
		chk_type = true;
	}else{
		chk_type = false;
	}
	
	// clear old data
	$("#fileuploads_PMRateText1_CL").val("");
	$("#validate_rate1_CL").css("display","inline-block");
	
	var rate_cat = "1,2";
	rate_cat[0] = 1;
	rate_cat[1] = 2;
	
	var json_data = {
			"method" : "GetlookupRM_Rate",
			"cov_code" : id,
			"rate_cat" : rate_cat
	}
	$.ajax({
		url: 'ProductCL_GetData_Servlet',
		type: "POST",
		data: json_data,
		success: function (response) {
			// pm Rate
			if(response.Pm_Rate[0]){
				// placeholder ของไฟล์ที่เลือกมา
				var obj = response.Pm_Rate[0];
				var layout_name = obj.pattern;
				var product_code_main = $("#pass_Insurance_product_cl").val();
				
				var layout = layout_name+id+"_"+product_code_main;
				$("#fileuploads_PMRateText1_CL").attr("placeholder",layout+".txt");
				
				$("#form_input_file #rate_cat_pm").val(obj.rate_cat_id);
				$("#form_input_file #rate_layout_pm").val(obj.rate_layout_id);
				$("#form_input_file #sub_cat_pm").val(obj.sub_cat_id);
				
			
				if(chk_type){
					var uploadfile = "selectFileRate_CL(1,'"+id_row+"','"+layout+"','','','"+spanfile+"','"+spanDownload+"')";
				}else{
					var uploadfile = "selectFileRate_CL(11,'"+id_row+"','"+layout+"','','','"+spanfile+"','"+spanDownload+"')";
				}
			
				$("#fileuploads_PMRate1_CL").attr("onchange",uploadfile);
				
				//ดึงข้อมูล base plan ที่ มาลง pm rate
				var row = "";
				$("#tb_input_modal_pmRate tbody>tr*").remove();
				var flag_textVal = false;
				for(i in response.Pm_Rate){
					var obj = response.Pm_Rate[i];
					row = "<tr>"+
							"<td class='text-center'>" 
							if($("#"+textVal).val() == obj.file_name){
								flag_textVal = true;
								$("#select_input_pmRateOriginal").prop("checked",true)
								$("#select_input_pmRate").prop("checked",false)
								$("#tb_input_modal_pmRate").removeClass('disabledbutton')
								row += "<input type='radio' name='select_fileOriginal' value='"+obj.file_id+"' checked/>"
							}else if(flag_textVal == false){
								$("#select_input_pmRate").prop("checked",true)
								$("#select_input_pmRateOriginal").prop("checked",false)
								$("#tb_input_modal_pmRate").addClass('disabledbutton')
								row += "<input type='radio' name='select_fileOriginal' value='"+obj.file_id+"'/>"
							}else{
								row += "<input type='radio' name='select_fileOriginal' value='"+obj.file_id+"'/>"
							}
						row +=	"<input type='hidden' id='hd_rateCatId"+i+"' value='"+obj.rate_cat_id+"'/>"+
								"<input type='hidden' id='hd_fileId"+i+"' value='"+obj.file_id+"'/>"+
								"<input type='hidden' id='hd_fileLayout"+i+"' value='"+obj.rate_layout_id+"'/>"+
								"<input type='hidden' id='hd_fileRef"+i+"' value='"+obj.ref+"'/>"+
							"</td>"+
							"<td class='text-center'><a id='span_PM_Rateopen_oldFile_"+i+"' class='active_grey'><span data-id='' class='glyphicon glyphicon-eye-open activecolorblue'></span></a></td>"+
							"<td class='text-left'><label>"+obj.file_name+"</label></td>"+
						"</tr>"
						$("#tb_input_modal_pmRate tbody").append(row);
						
						$("#span_PM_Rateopen_oldFile_"+i).attr("onclick", "openFileTextProduct_CL('"+obj.file_name+"', '"+obj.ref+"',41,'tb_input_fileSee_modal_pmRate_inner', 'modal_input_fileSee_PMRate_inner')");
						
				}
			}else{
				$("#fileuploads_PMRateText1_CL").attr("placeholder","");
				$("#tb_input_modal_pmRate tbody>tr*").remove();
			}
			var saveFile = "choose_file_pmRate('"+textVal+"','"+validate+"','"+spanfile+"','"+spanDownload+"');"
			$("#bt_contirm_saveFilePMRate").attr("onclick",saveFile)
		}
	});
	console.log("data",json_data)
	
}

//****** Table สัญญาเพิ่มเติม ////*****\\
var rowChild = "0";
function addrowChild(row,name,type,e) {
	
	/*เซ็คไม่ไห้กดตัวลูกได้เกิน 2 row*/
	var flag_duplicate = false;
	$("#tb_Additional_contract tbody>tr").each(function(){
		if(row == $(this).data('group')){
			flag_duplicate = true;
		}
	})
	
	if(!flag_duplicate){
		$(e).addClass('disabledAll')
	}
	
	rowChild = 1;
	var contract_type = $("#sel_Type_Additional_contract>option:selected").text();
	var name_tr = "tr_Additional_contract_"+row+"_"+rowChild;
	var removerowChild = 'removerowChild("'+name_tr+'","'+row+'");';
	
	var placeholderParent = $("#tb_Additional_contract tbody>tr[data-id="+row+"]").find('td:nth-child(6) input[type="text"]').attr('placeholder');
	var tr_selId = "tr_Additional_contract_"+row;
	var rate_cat_PM = $("#rate_cat_tbBase").val();
	var rate_cat_NAR = $("#rate_cat_NAR").val();
	
	if(type == ""){
		type = $("#"+tr_selId).find('td:nth-child(3) label').text();
	}
	
	// เพิ่ม onchange placeholder ของไฟล์ที่เลือกมา
	var layout_name1 = $("#layout_NAR1").val();
	var layout_name2 = $("#layout_NAR2").val();
	var product_code_main = $("#pass_Insurance_product_cl").val();
	var cov_code = $("#"+tr_selId).find('td:nth-child(2) label').text();
	var cov_cat_id = $("#"+tr_selId).find('td:nth-child(3) input[type="hidden"]').val();
	var prd_rider_code = $("#"+tr_selId).find('td:nth-child(2) input[type="hidden"]').val();
	var layout1 = layout_name1+cov_code+"_"+product_code_main;
	var layout2 = layout_name2+cov_code+"_"+product_code_main;
	var placeholder = layout1+".txt" + " หรือ " + layout2+".txt"
	var changeFileModal = 'modalGet_selectFile("'+cov_code+'","fileuploads_PMRate1_CL","ip_fileuploads_CL_Additional_contract_Show_'+row+'_'+rowChild+'","span_Additional_contractopen_'+row+'_'+rowChild+'","validate_rate'+row+'_'+rowChild+'","span_Additional_contractdownload_'+row+'_'+rowChild+'")';
	var selectFileNAR = 'selectFileRate_CL(22,"ip_fileuploads_CL_AdditionalNAR_contract_Show_'+row+'_'+rowChild+'","'+layout1+'","'+layout2+'","","span_Additional_contractopenNAR_'+row+'_'+rowChild+'","span_Additional_contractdownloadNAR_'+row+'_'+rowChild+'");'
	
	new_row = 	"<tr id=\"tr_Additional_contract_"+row+"_"+rowChild+"\" data-id=\""+row+"\" data-parent=\""+row+"\" data-level='2' data-group='"+row+"'>"+
	"<td class=\'text-center verticalCenter borderBlack\'  class=\'text-center verticalCenter borderBlack\'></td>"+
	"<td class=\"text-center verticalCenter	borderBlack\">" +
		"<input type='hidden' id='prd_code_rider_"+row+"_"+rowChild+"' value='"+prd_rider_code+"'>" +
	"</td>"+
	"<td class=\"text-center verticalCenter fontcolortable2 borderBlack font-bold\">"+type +
		"<input type='hidden' id='cov_cat_id_rider"+row+"_"+rowChild+"' value='"+cov_cat_id+"'>"+
	"</td>"+
	"<td class=\"text-left verticalCenter fontcolortable2 borderBlack\">"+
		"<label>"+name+"</label>"+
	"</td>"+
	"<td class=\"text-center verticalCenter borderBlack\">"+
		"<i class=\"glyphicon glyphicon-minus icon-blue-circle icon_active \"  data-id=\'"+rowChild+"\' data-topic=\'"+rowChild+"\' data-type=\'2\' id=\"removerow_"+rowChild+"\" onclick='"+removerowChild+"'></i>"+
	"</td>"+
	"<td class=\"verticalCenter borderBlack\">"+
		"<div class=\"input-group col-xs-12\">"+
			"<input type='hidden' id='fileId_rider_PM"+row+"_"+rowChild+"' value=''>"+
			"<input type='hidden' id='rate_cat_id_rider_PM"+row+"_"+rowChild+"' value='"+rate_cat_PM+"'>"+
			"<input type='hidden' id='rate_layout_id_rider_PM"+row+"_"+rowChild+"' value=''>"+
			"<input type=\"file\" accept=\".txt\" id=\"ip_fileuploads_Additional_contract"+row+"_"+rowChild+"\" style=\"display: none\">"+
			"<input type=\"text\" class=\"form-control\" id=\"ip_fileuploads_CL_Additional_contract_Show_"+row+"_"+rowChild+"\" readonly> " +
			"<span class=\"input-group-btn\"><button class=\"btn btn-default btn-primary\" type=\"button\" " +
					"onclick ="+changeFileModal+" id=\"bt_uploadfileAdditional_contract"+row+"_"+rowChild+"\" data-toggle=\"modal\" data-target=\"#modal_input_PMRate\">" +
//					"<font id='validate_rate"+row+"_"+rowChild+"' style='color: red;'>*</font>" +
					"...</button>"+
			"</span>"+
		"</div>"+
	"</td>"+
	"<td class='text-center verticalCenter borderBlack'>"+
		"<a id='span_Additional_contractopen_"+row+"_"+rowChild+"' class='active_grey'>"+
			"<span class='glyphicon glyphicon-eye-open activecolorgray'></span>"+
		"</a>"+
	"</td>"+
		"<span data-id=\'span_Additional_contractopen_"+row+"_"+rowChild+"\' class=\'glyphicon glyphicon-eye-open activecolorgray\'></span></td>"+
	"<td class=\"text-center verticalCenter borderBlack\">" +
	"<a id='span_Additional_contractdownload_"+row+"_"+rowChild+"' class='active_grey'>"+
		"<span data-id=\'span_Additional_contractdownload_"+row+"_"+rowChild+"\' class=\'glyphicon glyphicon-download-alt activecolorgray\'></span>"+
		"</a>"+
		"</td>";
	new_row +=	"<td class=\"text-center verticalCenter borderBlack addrowChild\">"+
		/*"<input type='text' id='amount_fix_Additional_contract1_"+rowChild+"' class='auto form-control text-right' value='0.00' data-v-min='0.00' data-v-max='9999999999.00'>"+*/
		"</td>";
	new_row += "<td class=\"verticalCenter borderBlack\">"+
	
/*	"<div class=\"input-group col-xs-12\">"+
		"<input type='hidden' id='fileId_rider_NAR"+row+"_"+rowChild+"' value=''>"+
		"<input type='hidden' id='rate_cat_id_rider_NAR"+row+"_"+rowChild+"' value='"+rate_cat_NAR+"'>"+
		"<input type='hidden' id='rate_layout_id_rider_NAR"+row+"_"+rowChild+"' value=''>"+
		"<input type='text' class='form-control' id='ip_fileuploads_AdditionalNAR_contract_"+row+"_"+rowChild+"' placeholder='"+placeholder+"' readonly=''>"+ 
		"<label class='input-group-btn'> "+
			"<span id='spanAdditionalNAR_CL_"+row+"_"+rowChild+"' class='btn btn-primary' >"+
			"<font id='validate_AdditionalNAR_CL_"+row+"_"+rowChild+"' style='color: red;'>*</font><b>...</b>"+
			"<input id='ip_fileuploads_CL_AdditionalNAR_contract_Show_"+row+"_"+rowChild+"' type='file' accept='text/plain' style='display: none;' onchange='"+selectFileNAR+"'  >" +
			"</span>"+
		"</label>"+
	"</div>"+*/
	
	"</td>"+
	"<td class=\"text-center verticalCenter borderBlack\">"+
		"<a id='span_Additional_contractopenNAR_"+row+"_"+rowChild+"' class='active_grey'>"+
			"<span class='glyphicon glyphicon-eye-open activecolorgray'></span>"+
		"</a>"+
		"</td>"+
	"<td class=\"text-center verticalCenter borderBlack\">" +
	"<a id='span_Additional_contractdownloadNAR_"+row+"_"+rowChild+"' class='active_grey'>"+
		"<span data-id=\'span_Additional_contractdownload_"+row+"_"+rowChild+"\' class=\'glyphicon glyphicon-download-alt activecolorgray\'></span>"+
		"</a>"+
	"</td>";
    "</tr>";	

    if(!flag_duplicate){
    	$(new_row).insertAfter($("#tb_Additional_contract"+">tbody>tr[data-id="+row+"]").closest('tr'));
    }
	

}
//
function removerowChild(value,dataID) {
	$('#'+value).remove(); 
	
	$("#tr_Additional_contract_"+dataID).find('td:nth-child(5) i').removeClass('disabledAll')
}

/*การกำหนดบันทึกสลักหลังและพิกัดอายุ*/

function addRowEndorse(id, cov_code, prd_rider_code){
	var unit1 = $("#tb_ageRange_CL tbody>tr").eq(0).find('td:nth-child(5) select').html();
	var unit2 = $("#tb_ageRange_CL tbody>tr").eq(0).find('td:nth-child(7) select').html();
	var unit3 = $("#tb_ageRange_CL tbody>tr").eq(0).find('td:nth-child(9) select').html();
	
	//Khwan fix
	var rowAge = 0;
	var num_child = $("#tb_ageRange_CL tbody>tr[data-parent='"+id+"']").length;
	if(num_child > 0){
		rowAge = num_child + 1;
	}else{
		rowAge = 1;
	}
	
	//rowAge++;
	var numberImgOK_age = id+"_"+rowAge;
	row_age = "<tr id='tr_ageRange_CV"+numberImgOK_age+"' data-id='"+numberImgOK_age+"' data-parent='"+id+"' data-level='2' data-type='2'>"+											
	  "<td class='text-left verticalCenter borderBlack'><div class='input-group col-xs-12'>"+
	  	"<input type='hidden' id='main_rider_code' value='"+prd_rider_code+"'>"+
	  	"<input type='hidden' id='prd_rider_code'>"+
		"<div id='div_endorse_name"+numberImgOK_age+"' class='filename font-term-yellow font-bold'></div>"+			
			"<a class='open-AddEndorse' data-toggle='modal' data-parent='"+id+"' data-id='"+numberImgOK_age+"' data-code='"+cov_code+"'><button class='btn btn-default btn-primary' type='button' id='btn_endorse_CL"+numberImgOK_age+"'>...</button></a>"+ 									
	  "</div></td>"+
	  "<td class='text-center verticalCenter borderBlack font-term-green font-bold'>"+
	  	"<input type='hidden' id='cov_cat_id'>"+
	  "</td>"+
	  "<td class='text-center verticalCenter borderBlack'>"+
	  	"<i class='glyphicon glyphicon-minus icon_active icon-blue-circle' data-id='"+numberImgOK_age+"' id='addrow_endorse"+numberImgOK_age+"' onclick='delete_rowEndorse(this.id);'></i>"+
	  "</td>"+											
	  "<td class='text-center verticalCenter borderBlack'>"+
	  	"<input type='hidden' id='hd_min_issue_age"+numberImgOK_age+"'>"+
	  	"<input type='number' class='form-control margin-padding0 text-center width40px' value='0' min='1' onkeyup='numberKey(this);' onkeydown='numberKey(this);'>"+
	  "</td>"+
	  "<td class='text-center verticalCenter borderBlack'>"+
	  	"<input type='hidden' id='start_insure_ageUnit"+numberImgOK_age+"' >"+
		"<select class='form-control width100px' id='ageRange_from_unit"+numberImgOK_age+"_cl'>"+unit1+"</select>"+
	  "</td>"+
	  "<td class='text-center verticalCenter borderBlack'>"+
	  	"<input type='hidden' id='hd_max_issue_age"+numberImgOK_age+"' >"+
	  	"<input type='number' class='form-control margin-padding0 text-center width40px' value='0' min='1' onkeyup='numberKey(this);' onkeydown='numberKey(this);'>"+
	  "</td>"+
	  "<td class='text-center verticalCenter borderBlack'>"+	
	  	"<input type='hidden' id='end_insure_ageUnit"+numberImgOK_age+"' >"+
		"<select class='form-control width100px' id='ageRange_to_unit"+numberImgOK_age+"_cl'>"+unit2+"</select>"+
	  "</td>"+
	  "<td class='text-center verticalCenter borderBlack'>"+
	  	"<input type='hidden' id='hd_max_insure_age"+numberImgOK_age+"' >"+
		"<input type='number' class='form-control margin-padding0 text-center width40px' value='0' min='1' onkeyup='numberKey(this);' onkeydown='numberKey(this);'>"+
	  "</td>"+
	  "<td class='text-center verticalCenter borderBlack'>"+												
		"<select class='form-control width100px' id='ageRange_max_unit"+numberImgOK_age+"_cl'>"+unit3+"</select>"+
	  "</td>"+																			
	  "</tr>";
	
	var numEndorse = $("#tb_ageRange_CL>tbody>tr[data-parent='"+id+"']").length;

	if(numEndorse > 0){
		$(row_age).insertAfter("#tb_ageRange_CL>tbody>tr[data-parent='"+id+"']:last");
	}else{
		$(row_age).insertAfter("#tr_ageRange_CV"+id);
	}
		
}

function delete_rowEndorse(id){
	var data_parent = $("#"+id).parent().parent().attr("data-parent");
	var this_id = $("#"+id).attr("id");
	this_id = this_id.replace("addrow_endorse","");
	
	var endorse_code = $("#tb_ageRange_CL #div_endorse_name"+this_id).text();
	var prd_rider_code = $("#tb_ageRange_CL #tr_ageRange_CV"+this_id).find("td:nth-child(1) #prd_rider_code").val();

	$("#"+id).parent().parent().remove();
	
	/**********************Khwan delete other tabs 22/11/2019****************************/
	//การคำนวณเบี้ยประกัน
	$("#tb_Calculate_insurance tbody>tr").each(function(){
		var code = $(this).find("td:nth-child(1) label").text();
		if(endorse_code == code){
			$(this).remove();
		}
	});
	
	$("#tb_Calculate_insurance2 tbody>tr").each(function(){
		var code = $(this).find("td:nth-child(1) label").text();
		if(endorse_code == code){
			$(this).remove();
		}
	});

	//การใช้สิทธิ์ตามกรมธรรม์
	$("#tb_policyholder tbody>tr").each(function(){
		var code = $(this).find("td:nth-child(1) label").text();
		if(endorse_code == code){
			$(this).remove();
		}
	});
	
	//ข้อกำหนดการรับประกัน
	$("#tbl_insure_single tbody>tr").each(function(){
		var code = $(this).find("td:nth-child(1) input").val();
		if(prd_rider_code == code){
			$(this).remove();
		}
	});
	
	$("#tbl_increase_premium_CL tbody>tr").each(function(){
		var code = $(this).find("td:nth-child(1) input").val();
		if(endorse_code == code){
			$(this).remove();
		}
	});
	
	$("#tab_policy_panel li>a").each(function(){
		var code = $(this).text();
		if(endorse_code == code){
			$(this).parent().remove();
		}
	});
	
	$("#policy_panel_tab_CL>div").each(function(){
		var code = $(this).attr("data-id");
			code = code.replace("policy_in_","");
		if(endorse_code == code){
			$(this).remove();
		}
	});
	
	/**************renew id************/
	renew_TabCalPrem_CL();
	renew_TabCalPrem2_CL();
	renew_TabUseRight_CL();
	renew_TabWarrantyMax_CL();
	renew_TabWarrantyEM_CL();
	
	/**************************************************/ 
	
	var seq = 1;
	
	$("#tb_ageRange_CL tbody>tr[data-parent='"+data_parent+"']").each(function(){
		
		var id_new = data_parent+"_"+seq;
		
		$(this).attr("id","tr_ageRange_CV"+id_new);
		$(this).attr("data-id",id_new);
		$(this).find("td:nth-child(5) select").attr("id","ageRange_from_unit"+id_new+"_cl");
		$(this).find("td:nth-child(7) select").attr("id","ageRange_to_unit"+id_new+"_cl");
		$(this).find("td:nth-child(9) select").attr("id","ageRange_max_unit"+id_new+"_cl");
		
		$(this).find("td:nth-child(4) input[type='hidden']").attr("id","hd_min_issue_age"+id_new);
		$(this).find("td:nth-child(5) input[type='hidden']").attr("id","start_insure_ageUnit"+id_new);
		$(this).find("td:nth-child(6) input[type='hidden']").attr("id","hd_max_issue_age"+id_new);
		$(this).find("td:nth-child(7) input[type='hidden']").attr("id","end_insure_ageUnit"+id_new);
		$(this).find("td:nth-child(8) input[type='hidden']").attr("id","hd_max_insure_age"+id_new);
		$(this).find("td:nth-child(9) input[type='hidden']").attr("id","max_insure_ageUnit"+id_new);
		
		$(this).find("td:nth-child(1)>div>div").attr("id", "div_endorse_name"+id_new);
		$(this).find("td:nth-child(1)>div>a").attr("data-id", id_new);
		$(this).find("td:nth-child(1)>div>a>button").attr("id", "btn_endorse_CL"+id_new);
		$(this).find("td:nth-child(3) i").attr("id", "addrow_endorse"+id_new);
		$(this).find("td:nth-child(3) i").attr("data-id", id_new);
		
		seq++;
	});
}

$(document).on("click", ".open-AddEndorse", function () {

	$("#tbl_endorseAge_CL input:radio").prop("checked", false);
	
    var myId = $(this).attr('data-id');
    var cov_code = $(this).attr('data-code');
    var endorse_code = $("#div_endorse_name"+myId).text();
    var data_parent = $(this).attr("data-parent");
    
    $(".modal-body #hd_endorse_parent").val(data_parent);
    $(".modal-body #hd_endorseID").val( myId );
    $(".modal-body #hd_endorse_code").val(endorse_code);
    
    var json_data = {
			"method": "getEndorse_CL",
			"cov_code": cov_code
	}
	
    console.log(json_data)
	$.ajax({
		url: 'ProductCL_GetData_Servlet',
		type: "POST",
		data: json_data,
		success: function (response) {
			$('#tbl_endorseAge_CL').DataTable().destroy();
			$("#tbl_endorseAge_CL tbody").find("tr").remove();
			
			var row = "";
			var row2 = "";
			var id = 1;
			var check_row_endorse = 0;
			for(i in response.Endorse_CL){
				var obj = response.Endorse_CL[i];
				row2 += 	"<tr id='tr_endorseAge_CL"+id+"'>"+
								"<td class='text-center'>"+
								"<input type='radio' id='select_endorse_CL"+id+"' name='select_endorse_CL' data-cat='"+obj.cov_cat_id+"' value='"+obj.cat_code+"'>"+
								"<input type='hidden' id='cov_cat_id' value='"+obj.cov_cat_id+"'>"+
								"<input type='hidden' id='cat_code' value='"+obj.cat_code+"'>"+
								"<input type='hidden' id='prd_rider_code' value='"+obj.prd_rider_code+"'>"+
								"<input type='hidden' id='min_issue_age' value='"+obj.min_issue_age+"'>"+
								"<input type='hidden' id='min_issue_age_unit' value='"+obj.min_issue_age_unit+"'>"+
								"<input type='hidden' id='max_issue_age' value='"+obj.max_issue_age+"'>"+
								"<input type='hidden' id='max_issue_age_unit' value='"+obj.max_issue_age_unit+"'>"+
								"<input type='hidden' id='max_insure_age' value='"+obj.max_insure_age+"'>"+
								"<input type='hidden' id='max_insure_age_unit' value='"+obj.max_insure_age_unit+"'>"+
								"</td>"+
								"<td class='text-center'><label class='lb_underline' for='select_endorse_CL"+id+"'>"+obj.cov_code+"</label></td>"+
								"<td class='text-left'><label for='select_endorse_CL"+id+"'>"+obj.name_th+"</label></td>"+			
							"</tr>";			  
				
				check_row_endorse = id;
				id++;
			}
			$("#tbl_endorseAge_CL tbody").append(row2);
			$("#tbl_endorseAge_CL").DataTable({"ordering": false,"paging": false,"bInfo" : false, scrollY: '236px',scrollCollapse: true, "autoWidth": false, 
				fixedHeader: {header: true},"oLanguage": {"sSearch": "ค้นหา: "}
			});
			$("#tbl_endorseAge_CL_wrapper .dataTables_scrollHeadInner").css({"width":"100%"});
			$("#tbl_endorseAge_CL_wrapper .table").css({"width":"100%"});
			
			
			//radio checked
			if(endorse_code != ""){
				$("#tbl_endorseAge_CL tbody>tr").each(function(){
					var this_value = $(this).find("td:nth-child(2)").text();
					if(endorse_code == this_value){
						$(this).find("td:nth-child(1) input:radio").prop("checked", true);
					}
				});
			}
			
			$('#modal_select_endorse').modal('show');
		
		}
	});

});

function addEndorse(){
	var ID = $("#hd_endorseID").val();
	var parent_ID = $("#hd_endorse_parent").val();
	var endorse_code = $("#hd_endorse_code").val();
	
	var rowID = $("#tbl_endorseAge_CL>tbody>tr input[type='radio']:checked").attr("id");
		rowID = rowID.replace("select_endorse_CL","");
	var endorse_type = $("#tbl_endorseAge_CL>tbody>tr input[type='radio']:checked").val();
	var endorse_ID = $("#tr_endorseAge_CL"+rowID).find("td:nth-child(2)").text();
	var prd_rider_code = $("#tr_endorseAge_CL"+rowID).find("td:nth-child(1) #prd_rider_code").val();
	var min_issue_age = $("#tr_endorseAge_CL"+rowID).find("td:nth-child(1) #min_issue_age").val();
	var max_issue_age = $("#tr_endorseAge_CL"+rowID).find("td:nth-child(1) #max_issue_age").val();
	var min_issue_unit = $("#tr_endorseAge_CL"+rowID).find("td:nth-child(1) #min_issue_age_unit").val();
	var max_issue_unit = $("#tr_endorseAge_CL"+rowID).find("td:nth-child(1) #max_insue_age_unit").val();
	var max_insure_age = $("#tr_endorseAge_CL"+rowID).find("td:nth-child(1) #max_insure_age").val();
	var max_insure_unit = $("#tr_endorseAge_CL"+rowID).find("td:nth-child(1) #max_insure_age_unit").val();

	//check duplicate
	var arr_endorse = [];
	var arr_endorse_new = [];
	var arr_endorse_diff = [];
	$("#tb_ageRange_CL tbody>tr[data-level='2']").each(function(){
		var this_id = $(this).attr("data-id");
		var endorse_selected_code = $("#div_endorse_name"+this_id).text();
		if(endorse_selected_code != ""){
			arr_endorse.push(endorse_selected_code);
		}
	});
	
	arr_endorse_new.push(endorse_ID);	
	arr_endorse_new.map(function(item){
		  if(!arr_endorse.includes(item)){
			  arr_endorse_diff.push(item);
		    }
	});

	//console.log("diff>> "+arr_endorse_diff);
	if(endorse_code != endorse_ID){
		if(arr_endorse_diff == ""){
			message = "ไม่สามารถเลือกบันทึกสลักหลังซ้ำได้";
			alertError(message);
		}else{
			$("#tr_ageRange_CV"+ID).find("td:nth-child(1) div.filename").text(endorse_ID);
			$("#tr_ageRange_CV"+ID).find("td:nth-child(1) #prd_rider_code").val(prd_rider_code);
			$("#tr_ageRange_CV"+ID).find("td:nth-child(2)").text(endorse_type);
			$("#tr_ageRange_CV"+ID).find("td:nth-child(4) input").val(min_issue_age);
			$("#tr_ageRange_CV"+ID).find("td:nth-child(5) select>option[value='"+min_issue_unit+"']").attr("selected",true);
			$("#tr_ageRange_CV"+ID).find("td:nth-child(6) input").val(max_issue_age);
			$("#tr_ageRange_CV"+ID).find("td:nth-child(7) select>option[value='"+max_issue_unit+"']").attr("selected",true);
			$("#tr_ageRange_CV"+ID).find("td:nth-child(8) input").val(max_insure_age);
			$("#tr_ageRange_CV"+ID).find("td:nth-child(9) select>option[value='"+max_insure_unit+"']").attr("selected",true);
			//$("#addrow_endorse"+ID).attr("onclick","removeEndorse('"+ID+"')");
			
			//Khwan Fix get endorse for other tabs 20/11/2019
			var main_cov_parent = $("#tb_ageRange_CL #tr_ageRange_CV"+ID).attr("data-parent");
			var main_cov = $("#tb_ageRange_CL #tr_ageRange_CV"+main_cov_parent).find("td:nth-child(1) #prd_rider_code").val();
			
			var json_data = {
					"method" : "getCaseBasePlan",
					"bCode" : endorse_ID
			}
			$.ajax({
				url: 'ProductCL_GetData_Servlet',
				type: "POST",
				data: json_data,
				success: function (response) {
					getData_TabCalPrem_CL(endorse_ID, "E", endorse_type , prd_rider_code, response, main_cov);
					getData_TabUseRight_CL(endorse_ID, "E", endorse_type, prd_rider_code, response, main_cov);
					getData_TabWarranty_CL(endorse_ID, "E", endorse_type, prd_rider_code, response, main_cov);
					
					//UNW policy
					var row = "";
					row = " <li data-id='"+prd_rider_code+"' data-main='"+main_cov+"'>" +
								"<a data-toggle='tab' href='#policy_in_"+endorse_ID+"' class='yellow'>"+endorse_ID+"</a>" +
							"</li>"
					
					var row_main = $("#tab_policy_panel li[data-main='"+main_cov+"']").length;
					if(row_main > 0){
						$(row).insertAfter("#tab_policy_panel li[data-main='"+main_cov+"']:last");
					}else{
						$(row).insertAfter("#tab_policy_panel li[data-id='"+main_cov+"']");
					}
					
					getLookup_policyWording_data(endorse_ID,response, "E",prd_rider_code,main_cov);
					
				},
				error: function(){
					alert("fail")
				}
			});
			console.log("data",json_data);
					
			
			$('#modal_select_endorse').modal('hide');
		}
	}else{
		$('#modal_select_endorse').modal('hide');
	}
	
	$("#tbl_endorseAge_CL input:radio").prop("checked", false);

}

function removeEndorse(id){
	$("#tr_ageRange_CV"+id).remove();
}
///
function imgCheckbox(id)
{
	var classed = $('#'+id+' >i').attr("class") || 0;
	if(classed != 0)
		{
			if(classed == "glyphicon glyphicon-edit")
				{
					$('#'+id+' >i').attr("class", "glyphicon glyphicon-ok");
					$('#'+id+' >i').css("display","block");
				}
			else
				{
					$('#'+id+' >i').attr("class", "glyphicon glyphicon-edit");
					$('#'+id+' >i').css("display","block");
				}
		}
}

//*** Table PM_Rate
	function deleteRowPM_Rate1() {
		
		if( $("#tb_PM_Rate tbody>tr").length > 0){
			$("#txt_dropBasePlan").text("แน่ใจหรือไม่ว่าจะลบแบบประกันหลัก")
			$("#modal_dropBasePlan").modal("show")
			
			$("#bt_approved_dropBasePlanCL").click(function(){
				var key_basePlan = $("#tb_PM_Rate tbody>tr").eq(0).find('td:nth-child(1) label').text();
				var prd_rider_code = $("#pass_Insurance_product_cl").val();
				$("#chk_sex_BP1").prop("checked",false).prop("disabled",true);
				$("#chk_sex_BP2").prop("checked",false).prop("disabled",true);
				$("#tbl_PD_Mode_CL").find('input[type="checkbox"]:checked').prop("checked",false).attr("disabled","disabled");
				$("#tbl_modeTerms").find('input[type="checkbox"]:checked').prop("checked",false).attr("disabled","disabled");
				$("#tb_Sperately_Pay").find('input[type="checkbox"]:checked').prop("checked",false).attr("disabled","disabled");
				$("#chk_sperately_pay").prop("checked",false);
				$(".checkbox_prop").attr("disabled","disabled");
				$("#tb_BasicInformation1 tbody>tr").remove();
				$("#inputSA_CL").val("");
				$("#tbl_formulaTerms input[type='radio']").attr("disabled","disabled");
				$('#tb_PM_Rate tbody').empty();		//remove row
				$("#validate_input4_cl").show();
				$("#div_ageRange_CL").css("display","none");
				$("#ch_change_condition8").prop("checked",false);
				
				/*SA Package*/
				$("#tb_plan_YRT tbody>tr").each(function(){
					if(key_basePlan == $(this).attr('data-key')){
						$(this).remove();
					}
				});
				
				/*ลบตารางพิกัดอายุ*/
				$("#tb_ageRange_CL tbody>tr[data-level='1']").each(function(){
					if(key_basePlan == $(this).find('td:nth-child(1) label').text()){
						$(this).remove();
					}
				});
				
				/*Khwan Fix ลบ endorse 15/11/2019*/
				$("#tb_ageRange_CL>tbody tr[data-level='2']").each(function(){	
					var ED_code = $(this).find("td:nth-child(1) a").attr("data-code");
					if(ED_code == key_basePlan){
						$(this).remove();
					}
				});
				
				/* MAX Fix ลบ benefit_rider */
				$("#tabBenefitProduct_CL li").each(function(){
					if(key_basePlan == $(this).find('a').text()){
						$("#tabBenefitBasePlan_CL li").remove();
						$("#tab_die_bnf_base").remove();
						$("#table_permanent_disability_bnf_base").remove();
						//$("#tabBenefitProduct_CL div").remove();
						$(this).remove();
					}
				})
				
				/*ลบตารางแบ่งจ่าย*/
				$("#chk_sperately_pay").prop("checked",false);
				$("#chk_sperately_pay").attr("disabled",true)
				$("#tb_Sperately_Pay tbody>tr").each(function(){
					$(this).find('td:nth-child(1) input').removeClass("base")
					$(this).find('td:nth-child(3) input').val(0)
				})
				
				/*TAB : Lookup Age Type*/
				$("#lb_age_specific_CL option").remove();
				
				/*TAB : ตำนวณเบี้ยประกัน ลบตารางการคำนวณจำนวนเงินเอาประกันภัย*/
				var flag_serie = false;
				$("#tb_Calculate_insurance tbody>tr").each(function(){
					var type = $(this).find("td:nth-child(1) #cov_type").val();
					var main_cov = "";
					var del_cov = "";
					if(type == "E"){
						main_cov = $(this).attr('data-main');
						del_cov = prd_rider_code;
					}else{
						main_cov = $(this).find('td:nth-child(1) label').text();
						del_cov = key_basePlan;
					}
					
					if(del_cov == main_cov){
						$(this).remove();
						flag_serie = true;
					}else if($(this).find('td:nth-child(1) label').text() != ""){
						flag_serie = false;
					}else if(flag_serie){
						$(this).remove();
					}
					
				});
				
				/*TAB : ตำนวณเบี้ยประกัน ลบการคำนวณเบี้ยประกัน*/
				$("#tb_Calculate_insurance2 tbody>tr").each(function(){
					if(prd_rider_code == $(this).attr("data-key")){
						$(this).remove();
					}
				});
				
				/*TAB : การใช้สิทธิ์ตามกรมธรรม์ ลบการเวนคืน กธ.*/
				$("#tb_policyholder tbody>tr").each(function(){
					if(prd_rider_code == $(this).attr("data-key")){
						$(this).remove();
					}
				});
				
				/*TAB : ข้อกำหนดการรับประกัน ลบการคำนวณจำนวนเงินเอาประกันภัย*/
				$("#tbl_cal_amount_CL tbody>tr").each(function(){
					if(key_basePlan == $(this).find('td:nth-child(1) label').text()){
						$(this).remove();
					}
				});
				
				/*TAB : ข้อกำหนดการรับประกัน ลบ Tab policy*/
				$("#tab_policy_panel li").each(function(){
					var cov_code = $(this).find('a').text();
					var data_class = $(this).find('a').attr("class");
					
					if(data_class == "yellow"){
						if(prd_rider_code == $(this).attr("data-main")){
							$(this).remove();
							$("#policy_in_"+cov_code).remove();
						}
					}else{
						if(prd_rider_code == $(this).attr("data-id")){
							$(this).remove();
							$("#policy_in_"+cov_code).remove();
						}
					}
					
				})
				
				/*TAB : ข้อกำหนดการรับประกัน ลบการคำนวณจำนวนเงินเอาประกันภัย*/
				//$("#tbl_insure_single .font-term-purple").parent().remove();
				/*TAB : ข้อกำหนดการรับประกัน ลบการรับแบบเพิ่มเบี้ยพิเศษ*/
				//$("#tbl_increase_premium_CL .font-term-purple").parent().remove();
				
				/*Endorse > TAB : ข้อกำหนดการรับประกัน ลบตาราง จำนวนเงินเอาประกันภัยสูงสุด (ต่อราย)*/
				$("#tbl_insure_single tbody>tr").each(function(){
					var data_class = $(this).find("td:nth-child(2)").hasClass("font-term-yellow");
					if(data_class == true){
						if(prd_rider_code == $(this).attr("data-main")){
							$(this).remove();
						}
					}else{
						if(prd_rider_code == $(this).find('td:nth-child(1) input[type="checkbox"]').val()){
							$(this).remove();
						}
					}	
				})
				
				/* Endorse > TAB : ข้อกำหนดการรับประกัน ลบตาราง การรับแบบเพิ่มเบี้ยพิเศษ */
				$("#tbl_increase_premium_CL tbody>tr").each(function(){
					var data_class = $(this).find("td:nth-child(1)").hasClass("font-term-yellow");
					if(data_class == true){
						if(prd_rider_code == $(this).attr("data-main")){
							$(this).remove();
						}
					}else{
						if(key_basePlan == $(this).find('td:nth-child(1) input[type="hidden"]').val()){
							$(this).remove();
						}
					}
					
				})
				
				/*เก็บค่าที่ลบไป*/
				if($('#arr_prd_rider_code_delete').val() != ""){
					var arr_prd_rider_code = new Array($('#arr_prd_rider_code_delete').val());
				}else{
					var arr_prd_rider_code = new Array();
				}
					arr_prd_rider_code.push(key_basePlan);
				$('#arr_prd_rider_code_delete').val(arr_prd_rider_code);
				
				$("#modal_dropBasePlan").modal("hide")
				
				/**************renew id************/
				renew_TabCalPrem_CL();
				renew_TabCalPrem2_CL();
				renew_TabUseRight_CL();
				renew_TabWarrantyMax_CL();
				renew_TabWarrantyEM_CL();
				
			})
		}else{
			
		}
		
	}
	
//delete row table	*PM_Rate1
function deleteRowAdditional_contract()
{
	var imgOKcount = $("#tb_Additional_contract i.glyphicon-ok").length;
	if(imgOKcount <= 0)
	{	
		message = "กรุณาเลือกรายการที่ต้องการลบ";
		alertError(message);
	}else{
	message = "ต้องการลบรายการใช่หรือไม่";
	alertDeleteError(message);
	
	$("#btn_confirm_del").click(function(){
		var tblID 		= "#tb_Additional_contract";
		var lastImgOK = $(tblID+" >tbody>tr[data-level='1']:last>td:first").attr("id") || 0;	
		var numberImgOK = 0;
		if(lastImgOK == 0){
			numberImgOK = 1;
		}else{
			numberImgOK = Number(lastImgOK.replace("imgOK_",""))+1;
		}
		for(var i = 1;i<=numberImgOK;i++)
			{
				var checked = $(tblID+" #tr_Additional_contract_"+i+" >td:first>i").attr("class");
				var checked_type = $(tblID+" #tr_Additional_contract_"+i).find("td:nth-child(3)").text();
				var checked_id = $(tblID+" #tr_Additional_contract_"+i).find("td:nth-child(2) label").text();
				var prd_rider_code = $(tblID+" #tr_Additional_contract_"+i).find("td:nth-child(2) input[type='hidden']").val();
				if(checked == "glyphicon glyphicon-ok"){	
					
					/*SA Package*/
					$("#tb_plan_YRT>tbody tr").each(function(){
						var SA_type = $(this).attr('data-key'); //.find("td:nth-child(2)").text();
						if(SA_type == checked_id){
							deleteTableRow(this);
						}
					});
					
					/*บันทึกสลักหลังและพิกัดอายุ*/
					$("#tb_ageRange_CL>tbody tr").each(function(){
						var age_type = $(this).find("td:nth-child(1) label").text();
						if(age_type == checked_id){
							deleteTableRow(this);
						}
					});
					
					/*Khwan Fix ลบ endorse 15/11/2019*/
					$("#tb_ageRange_CL>tbody tr[data-level='2']").each(function(){	
						var ED_code = $(this).find("td:nth-child(1) a").attr("data-code");
						if(ED_code == checked_id){
							$(this).remove();
						}
					});
					
					/* MAX Fix ลบ benefit_rider */
					$("#tabBenefitProduct_CL li").each(function(){
						if(checked_id == $(this).find('a').text()){
							$("#bnf_rider_"+checked_id).remove();
							$(this).remove();
						}
					})
					
					/*******Khwan Fix ลบ Endorse ด้วย 28/11/2019*******/
					/*TAB : ตำนวณเบี้ยประกัน ลบตารางการคำนวณจำนวนเงินเอาประกันภัย*/
					var flag_serie = false;
					$("#tb_Calculate_insurance tbody>tr").each(function(){
						var type = $(this).find("td:nth-child(1) #cov_type").val();
						var main_cov = "";
						var del_cov = "";
						if(type == "E"){
							main_cov = $(this).attr('data-main');
							del_cov = prd_rider_code;
						}else{
							main_cov = $(this).find('td:nth-child(1) label').text();
							del_cov = checked_id;
						}
						
						if(del_cov == main_cov){
							$(this).remove();
							flag_serie = true;
						}else if($(this).find('td:nth-child(1) label').text() != ""){
							flag_serie = false;
						}else if(flag_serie){
							$(this).remove();
						}
						
					});
					
					/*TAB : ตำนวณเบี้ยประกัน ลบการคำนวณเบี้ยประกัน*/
					$("#tb_Calculate_insurance2 tbody>tr").each(function(){
						if(prd_rider_code == $(this).attr("data-key")){
							$(this).remove();
						}
					});
					
					/*TAB : การใช้สิทธิ์ตามกรมธรรม์ ลบการเวนคืน กธ.*/
					$("#tb_policyholder tbody>tr").each(function(){
						if(prd_rider_code == $(this).attr("data-key")){
							$(this).remove();
						}
					});
					
					/*TAB : ข้อกำหนดการรับประกัน ลบ Tab policy*/
					$("#tab_policy_panel li").each(function(){
						var cov_code = $(this).find('a').text();
						var data_class = $(this).find('a').attr("class");
						
						if(data_class == "yellow"){
							if(prd_rider_code == $(this).attr("data-main")){
								$(this).remove();
								$("#policy_in_"+cov_code).remove();
							}
						}else{
							if(prd_rider_code == $(this).attr("data-id")){
								$(this).remove();
								$("#policy_in_"+cov_code).remove();
							}
						}
						
					})
					
					/*TAB : ข้อกำหนดการรับประกัน ลบตาราง จำนวนเงินเอาประกันภัยสูงสุด (ต่อราย)*/
					$("#tbl_insure_single tbody>tr").each(function(){
						var data_class = $(this).find("td:nth-child(2)").hasClass("font-term-yellow");
						if(data_class == true){
							if(prd_rider_code == $(this).attr("data-main")){
								$(this).remove();
							}
						}else{
							if(prd_rider_code == $(this).find('td:nth-child(1) input[type="checkbox"]').val()){
								$(this).remove();
							}
						}	
					})
					
					/*TAB : ข้อกำหนดการรับประกัน ลบตาราง การรับแบบเพิ่มเบี้ยพิเศษ */
					$("#tbl_increase_premium_CL tbody>tr").each(function(){
						var data_class = $(this).find("td:nth-child(1)").hasClass("font-term-yellow");
						if(data_class == true){
							if(prd_rider_code == $(this).attr("data-main")){
								$(this).remove();
							}
						}else{
							if(checked_id == $(this).find('td:nth-child(1) input[type="hidden"]').val()){
								$(this).remove();
							}
						}
						
					})
					
					/*เก็บค่าที่ลบไป*/
					if($('#arr_prd_rider_code_delete').val() != ""){
						var arr_prd_rider_code = new Array($('#arr_prd_rider_code_delete').val());
					}else{
						var arr_prd_rider_code = new Array();
					}
						arr_prd_rider_code.push(prd_rider_code);
						
					$('#arr_prd_rider_code_delete').val(arr_prd_rider_code);
					deleteTableRow(tblID+">tbody>tr[data-group="+i+"]");
					deleteTableRow(tblID+" #tr_Additional_contract_"+i);										
				}
			
		}
			if($("#div_tb_Additional_contract").innerHeight() <= 264){
				$("#div_tb_Additional_contract").removeClass("settableproduct");
			}

			//validate *
			if( $("#tb_Additional_contract tbody>tr").length > 0){
				$("#validate_input11_cl").hide();
			}else{
				$("#validate_input11_cl").show();
			}
		
			/**************renew id************/
			renew_TabCalPrem_CL();
			renew_TabCalPrem2_CL();
			renew_TabUseRight_CL();
			renew_TabWarrantyMax_CL();
			renew_TabWarrantyEM_CL();
	
		});
	}
}

function check_value_payment(row){
	var value = $("#set_Premium_Rate_"+row).val()
	var value_add = $("#lb_payment_"+row).text();
	var value_sum = "";
	if(value != "" && value != 0){
		value_sum = Number(value) * Number(value_add);
		if(value_sum < 100){
			message = "อัตราเบี้ยประกันภัยรายงวดต้องไม่น้อยกว่าหรือเท่ากับ 100%";
			alertError(message);
			$("#set_Premium_Rate_"+row).focus();
			$("#set_Premium_Rate_"+row).val("0.00");
		}
	}
	$('.auto').autoNumeric('init');
}

function deleteTableRow(id)
{
	$(id).remove();
}

/*ยืนยันการลบ*/
function alertDeleteError(message)
{
    $('#txt_alert_delete_error').text(message);
    $('#modal_warning_delete').modal();
}
function alertError(message)
{
    $('#txt_alert_error').text(message);
    $('#modal_warning').modal();
}

function alertSuccess(message)
{
    $('#txt_alert_success').text(message);
    $('#modal_success').modal();
}

////////////////////Menu Cal ///////////
function addrowMenu3(row) {
	var rowChild3 = 0;
	var rowChild_count = $("#tb_Calculate_insurance tbody>tr[data-parent='"+row+"']").length || 0;
	var end_sa = $("#tb_Calculate_insurance tbody>tr[data-group='"+row+"']:last").find('td:nth-child(5) input').val();
		
	if(rowChild_count < 0){
		rowChild3 = 1;
	}else{
		rowChild3 = rowChild_count+1;
	}
	
	if( Number(replaceComma(end_sa)) >= 1 && Number(replaceComma(end_sa)) < 999999999.99){
		end_sa = Number(replaceComma(end_sa)) + 1
		///หน่วย
		var dropdownUnit = $("#tb_Calculate_insurance tbody>tr").eq(0).find('td:nth-child(7) select').html();
		///	ของ1
		var dropdownOF1 = $("#tb_Calculate_insurance tbody>tr").eq(0).find('td:nth-child(8) select').html();
		///	ของ2
		var dropdownOF2 = $("#tb_Calculate_insurance tbody>tr").eq(0).find('td:nth-child(10) select').html();
	
		var prd_rider_code = $("#tb_Calculate_insurance tbody>tr[data-id="+row+"]").find('td:nth-child(1) #prd_rider_code').val();
		var name_tr 		= "tr_Calculate_insurance"+row+"_"+rowChild3;
		var removerowChild = 'removerowChild3("'+name_tr+'");';
		var serie_no = Number(rowChild3) + Number(1);
		var new_row 		=  "<tr id=\"tr_Calculate_insurance"+row+"_"+rowChild3+"\" data-id=\""+row+"_"+rowChild3+"\" data-group='"+row+"' data-parent=\""+row+"\" data-level=\"2\">"+
						"<td width=\"14%\" class=\"text-center verticalCenter fontcolortable1 borderBlack\">"+
							"<input type='hidden' id='prd_rider_code' value='"+prd_rider_code+"' >"+
							"<input type='hidden' id='serie_no' value='"+serie_no+"'>"+
							"<input type='hidden' id='seq' value=''>"+
							"<label>"+"</label>"+
						"</td>"+
						"<td width=\"7%\"class=\"text-center verticalCenter fontcolortable2 borderBlack\">"+"</td>"+
						"<td width=\"3%\" class=\"text-center verticalCenter borderBlack\">"+
							//"<i class=\"glyphicon glyphicon-plus-sign\"  data-id=\'"+numrow3+"\' data-topic=\'"+numrow3+"\' data-type=\'"+numrow3+"\' id=\"addrowMenu3_"+numrow3+"\" onclick=\"addrowMenu3("+numrow3+");\"></i>"+
							"<i class=\"glyphicon icon-blue-circle glyphicon-minus icon_active\"  data-id=\'"+rowChild3+"\' data-topic=\'"+rowChild3+"\' data-type=\'"+rowChild3+"\' id=\"removerow_"+rowChild3+"\" onclick='"+removerowChild+"'></i>"+
							"</td>"+	
						"<td width=\"7%\"class=\"text-right verticalCenter borderBlack\">"+
						"<input type='text' class='autoComma form-control margin-padding0 text-center width40px' value='"+end_sa+"' data-v-min='0.00' data-v-max='999.99' disabled>"+
						"</td>"+
						"<td width=\"7%\" class=\"text-right verticalCenter borderBlack\">"+
						"<input type='text' class='autoComma form-control margin-padding0 text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999.99' onblur='validateMax_tbCal(this);'>"+
						"</td>"+
						"<td width=\"10%\"class=\"text-right verticalCenter borderBlack\">"+
						"<input type='text' class='autoComma form-control margin-padding0 text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999.99'>"+
						"</td>"+
						"<td width=\"14%\" class=\"text-right verticalCenter borderBlack\">"+
							"<select class=\"form-control\" onchange='change_unit_CL(this,6)'>"+dropdownUnit+"</select></td>"+
						"<td width=\"14%\" class=\"text-right verticalCenter borderBlack\">"+
							"<select class=\"form-control\">"+dropdownOF1+"</select></td>"+
						"<td width=\"10%\" class=\"text-right verticalCenter borderBlack\">"+
						"<input type='text' class='autoComma form-control margin-padding0 text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999.99'>"+
						"<td width=\"14%\" class=\"text-right verticalCenter borderBlack\">"+
							"<select class=\"form-control\">"+dropdownOF2+"</select></td>"+
					"</tr>";			  
		
		if(rowChild_count > 0){
			$(new_row).insertAfter($("#tb_Calculate_insurance"+">tbody>tr[data-parent="+row+"]:last").closest('tr'));
		}else{
			$(new_row).insertAfter($("#tb_Calculate_insurance"+">tbody>tr[data-id="+row+"]").closest('tr'));
		}
		$(".autoComma").autoNumeric('init',{vMin: '0.00', vMax: '999999999.99'});
		
	}
}
//////removerowChild
function removerowChild3(value) {
	$('#'+value).remove(); 
}

// duplicate การคำนวณเบี้ยประกันภัย - สูตร
function duplicate_formula_cal(e){
	var value = $(e).val();
	
	$("#tb_Calculate_insurance2 tbody>tr").each(function(){
		$(this).find("td:nth-child(3) option[value="+value+"]").attr("selected",true)
	})
}

	/*เมนู CL*/
	$("#menu_CL_1").click(function(){
		if (Statuesave == "N" && nameTab != "menu_CL_1") {
		 	$("#modal_Checkkeyup").modal("show");
		 	data = "menu_CL_1";
		}else{
			document.getElementById("cl_007_1_1-1").style.display = "block";
			document.getElementById("cl_007_1_1-2").style.display = "none";
			document.getElementById("cl_007_1_1-3").style.display = "none";
			document.getElementById("cl_007_1_1-4").style.display = "none";
			document.getElementById("cl_007_1_1-5").style.display = "none";	
			document.getElementById("cl_007_1_1-6").style.display = "none";
			document.getElementById("cl_007_1_1-7").style.display = "none";
		}
	})
	$("#menu_CL_2").click(function(){
		if (Statuesave == "N" && nameTab != "menu_CL_2") {
		 	$("#modal_Checkkeyup").modal("show");
		 	data = "menu_CL_2";
		}else{
			document.getElementById("cl_007_1_1-2").style.display = "block";
			document.getElementById("cl_007_1_1-1").style.display = "none";
			document.getElementById("cl_007_1_1-3").style.display = "none";
			document.getElementById("cl_007_1_1-4").style.display = "none";
			document.getElementById("cl_007_1_1-5").style.display = "none";
			document.getElementById("cl_007_1_1-6").style.display = "none";
			document.getElementById("cl_007_1_1-7").style.display = "none";
		}
	})
	$("#menu_CL_3").click(function(){
		if (Statuesave == "N" && nameTab != "menu_CL_3") {
		 	$("#modal_Checkkeyup").modal("show");
		 	data = "menu_CL_3";
		}else{
			document.getElementById("cl_007_1_1-3").style.display = "block";
			document.getElementById("cl_007_1_1-1").style.display = "none";
			document.getElementById("cl_007_1_1-2").style.display = "none";
			document.getElementById("cl_007_1_1-4").style.display = "none";
			document.getElementById("cl_007_1_1-5").style.display = "none";
			document.getElementById("cl_007_1_1-6").style.display = "none";
			document.getElementById("cl_007_1_1-7").style.display = "none";
		}
	})
	$("#menu_CL_4").click(function(){		
		if (Statuesave == "N" && nameTab != "menu_CL_4") {
		 	$("#modal_Checkkeyup").modal("show");
		 	data = "menu_CL_4";
		}else{
			document.getElementById("cl_007_1_1-4").style.display = "block";
			document.getElementById("cl_007_1_1-1").style.display = "none";
			document.getElementById("cl_007_1_1-2").style.display = "none";
			document.getElementById("cl_007_1_1-3").style.display = "none";
			document.getElementById("cl_007_1_1-5").style.display = "none";		
			document.getElementById("cl_007_1_1-6").style.display = "none";
			document.getElementById("cl_007_1_1-7").style.display = "none";
		}
	})
	$("#menu_CL_5").click(function(){
		if (Statuesave == "N" && nameTab != "menu_CL_5") {
		 	$("#modal_Checkkeyup").modal("show");
		 	data = "menu_CL_5";
		}else{
			document.getElementById("cl_007_1_1-5").style.display = "block";
			document.getElementById("cl_007_1_1-1").style.display = "none";
			document.getElementById("cl_007_1_1-2").style.display = "none";
			document.getElementById("cl_007_1_1-3").style.display = "none";
			document.getElementById("cl_007_1_1-4").style.display = "none";
			document.getElementById("cl_007_1_1-6").style.display = "none";
			document.getElementById("cl_007_1_1-7").style.display = "none";
		}
	})		
	$("#menu_CL_6").click(function(){
		if (Statuesave == "N" && nameTab != "menu_CL_6") {
		 	$("#modal_Checkkeyup").modal("show");
		 	data = "menu_CL_6";
		}else{
			document.getElementById("cl_007_1_1-6").style.display = "block";
			document.getElementById("cl_007_1_1-1").style.display = "none";
			document.getElementById("cl_007_1_1-2").style.display = "none";
			document.getElementById("cl_007_1_1-3").style.display = "none";
			document.getElementById("cl_007_1_1-4").style.display = "none";
			document.getElementById("cl_007_1_1-5").style.display = "none";
			document.getElementById("cl_007_1_1-7").style.display = "none";
		}
	});
	$("#menu_CL_7").click(function(){
		if (Statuesave == "N" && nameTab != "menu_CL_7") {
		 	$("#modal_Checkkeyup").modal("show");
		 	data = "menu_CL_7";
		}else{
			document.getElementById("cl_007_1_1-7").style.display = "block";
			document.getElementById("cl_007_1_1-1").style.display = "none";
			document.getElementById("cl_007_1_1-2").style.display = "none";
			document.getElementById("cl_007_1_1-3").style.display = "none";
			document.getElementById("cl_007_1_1-4").style.display = "none";
			document.getElementById("cl_007_1_1-5").style.display = "none";
			document.getElementById("cl_007_1_1-6").style.display = "none";
		}
	})
	
	//ยืนยัน
function bt_changeTab() {
	if (data == "menu_CL_1"){
		document.getElementById("cl_007_1_1-1").style.display = "block";
		document.getElementById("cl_007_1_1-2").style.display = "none";
		document.getElementById("cl_007_1_1-3").style.display = "none";
		document.getElementById("cl_007_1_1-4").style.display = "none";
		document.getElementById("cl_007_1_1-5").style.display = "none";	
		document.getElementById("cl_007_1_1-6").style.display = "none";
	}else if (data == "menu_CL_2") {
		document.getElementById("cl_007_1_1-2").style.display = "block";
		document.getElementById("cl_007_1_1-1").style.display = "none";
		document.getElementById("cl_007_1_1-3").style.display = "none";
		document.getElementById("cl_007_1_1-4").style.display = "none";
		document.getElementById("cl_007_1_1-5").style.display = "none";
		document.getElementById("cl_007_1_1-6").style.display = "none";
	}else if (data == "menu_CL_3") {
		document.getElementById("cl_007_1_1-3").style.display = "block";
		document.getElementById("cl_007_1_1-1").style.display = "none";
		document.getElementById("cl_007_1_1-2").style.display = "none";
		document.getElementById("cl_007_1_1-4").style.display = "none";
		document.getElementById("cl_007_1_1-5").style.display = "none";
		document.getElementById("cl_007_1_1-6").style.display = "none";
	}else if (data == "menu_CL_4") {
		document.getElementById("cl_007_1_1-4").style.display = "block";
		document.getElementById("cl_007_1_1-1").style.display = "none";
		document.getElementById("cl_007_1_1-2").style.display = "none";
		document.getElementById("cl_007_1_1-3").style.display = "none";
		document.getElementById("cl_007_1_1-5").style.display = "none";		
		document.getElementById("cl_007_1_1-6").style.display = "none";
	}else if (data == "menu_CL_5") {
		document.getElementById("cl_007_1_1-5").style.display = "block";
		document.getElementById("cl_007_1_1-1").style.display = "none";
		document.getElementById("cl_007_1_1-2").style.display = "none";
		document.getElementById("cl_007_1_1-3").style.display = "none";
		document.getElementById("cl_007_1_1-4").style.display = "none";
		document.getElementById("cl_007_1_1-6").style.display = "none";
	}else if (data == "menu_CL_6") {
		document.getElementById("cl_007_1_1-6").style.display = "block";
		document.getElementById("cl_007_1_1-1").style.display = "none";
		document.getElementById("cl_007_1_1-2").style.display = "none";
		document.getElementById("cl_007_1_1-3").style.display = "none";
		document.getElementById("cl_007_1_1-4").style.display = "none";
		document.getElementById("cl_007_1_1-5").style.display = "none";
	}
	$("#modal_Checkkeyup").modal("hide");
	Statuesave = "Y";
}
//ยกเลิก
$("#checkkeyup_Cancel").click(function(){
	var element = document.getElementById(data);
		element.classList.remove("active");
	var element = document.getElementById(nameTab);
		element.classList.add("active");
});
	
	/************KHWAN**************/
	$(document).ready( function() {
		//jQuery('#menu_term1_datefrom_cl,#menu_term1_dateto_cl,#system_date_cl').datetimepicker({timepicker:false, format:'d/m/Y',lang:'th', yearOffset:543});
		
		$("#tbl_insure_alone").show();	
		$("#tbl_insure_many").hide();
		$("#btn_insure_many").hide();
		
		$("#tbl_deduct_cost :input").prop("disabled", true);
		$("#tbl_deduct_cost,#panel_first_pay_premium_CL").css("opacity", "0.8");
		$("#tbl_check_data_CL3 :input").prop("disabled", true);
		
	});
	/*อื่นๆ*/
	function numberKey(value){
		var val = $(value).val();
		if (!val || (parseInt(val) >= 1))
		      ;
		else{ $(value).val($(value).data("old")); }

		if (val > 999 ) {$(value).val(999);}
	}
	function numberKey_min(obj,chk_val){
		//var value = $("#tb_ageRange_CL .font-term-purple").parent().parent().find('td:nth-child(4) input[type="hidden"]').val();
		
		var value = $(obj).parent().parent().find('td:nth-child(4) input[type="hidden"]').val()
		//var value = $("#"+chk_val).parent().find('input[type="hidden"]').val();
		var number = $(obj).val();
		if(value == null){
			alert("ไม่มีค่า max")
		}
		
		if(number.includes(".")){
			number = number.replace(/\./g,"")
		}
		
	    if(Number(number) < Number(value) || number > 999){
			$(obj).val(value).focus();
			var type_max = $(obj).parent().parent().find('td:nth-child(5) input[type="hidden"]').val();
			$(obj).parent().parent().find('td:nth-child(5) option[value="'+type_max+'"]').attr("selected",true).focus();
			var text_max = $(obj).parent().parent().find('td:nth-child(5) option:selected').text();
			message = "ห้ามกรอกข้อมูลน้อยกว่า "+value+ " " + text_max
			alertError(message)
		}
		
		
	}
	function numberKey_max(obj,chk_val){
		var value = $(obj).parent().parent().find('td:nth-child(6) input[type="hidden"]').val()
		//var value = $("#"+chk_val).parent().find('input[type="hidden"]').val();
		var number = $(obj).val();
		if(value == null){
			alert("ไม่มีค่า max")
		}
		
		if(number.includes(".")){
			number = number.replace(/\./g,"")
		}
		
		if(number > value || number > 999){
			$(obj).val(value).focus();
			var type_max = $(obj).parent().parent().find('td:nth-child(7) input[type="hidden"]').val();
			$(obj).parent().parent().find('td:nth-child(7) option[value="'+type_max+'"]').attr("selected",true).focus();
			var text_max = $(obj).parent().parent().find('td:nth-child(7) option:selected').text();
			message = "ห้ามกรอกข้อมูลเกิน "+value+ " " + text_max
			alertError(message)
		}
		
	}
	function numberKey_maximum(obj,chk_val){
		var value = $(obj).parent().parent().find('td:nth-child(8) input[type="hidden"]').val()
		//var value = $("#"+chk_val).parent().find('input[type="hidden"]').val();
		var number = $(obj).val();
		if(value == null){
			alert("ไม่มีค่า max")
		}
		
		if(number.includes(".")){
			number = number.replace(/\./g,"")
		}
		
		if(number > value || number > 999){
			$(obj).val(value).focus();
			var type_max = $(obj).parent().parent().find('td:nth-child(9) input[type="hidden"]').val();
			$(obj).parent().parent().find('td:nth-child(7) option[value="'+type_max+'"]').attr("selected",true).focus();
			var text_max = $(obj).parent().parent().find('td:nth-child(9) option:selected').text();
			message = "ห้ามกรอกข้อมูลเกิน "+value+ " " + text_max
			alertError(message)
		}
		
	}
	
	/*อายุ ข้อกำหนด*/
	function numberKey_min_term(obj){
		var value = $("#tb_ageRange_CL .font-term-purple").parent().parent().find('td:nth-child(4) input[type="hidden"]').val();
		var number = $(obj).val();
		if(value == null){
			alert("ไม่มีค่า max")
		}
		
		if(number.includes(".")){
			number = number.replace(/\./g,"")
		}
		
	    if(Number(number) < Number(value) || number > 999){
			$(obj).val(value).focus();
			var type_max = $("#tb_ageRange_CL .font-term-purple").parent().parent().find('td:nth-child(5) input[type="hidden"]').val();
			//$(obj).parent().parent().find('td:nth-child(5) option[value="'+type_max+'"]').attr("selected",true).focus();
			var text_max = $("#tb_ageRange_CL .font-term-purple").parent().parent().find('td:nth-child(5) option:selected').text();
			message = "ห้ามกรอกข้อมูลน้อยกว่า "+value+ " " + text_max
			alertError(message)
		}
	}
	function numberKey_max_term(obj){
		var value = $("#tb_ageRange_CL .font-term-purple").parent().parent().find('td:nth-child(6) input[type="hidden"]').val();
		var number = $(obj).val();
		if(value == null){
			alert("ไม่มีค่า max")
		}
		
		if(number.includes(".")){
			number = number.replace(/\./g,"")
		}
		
	    if(Number(number) > Number(value) || number > 999){
			$(obj).val(value).focus();
			var type_max = $("#tb_ageRange_CL .font-term-purple").parent().parent().find('td:nth-child(7) input[type="hidden"]').val();
			//$(obj).parent().parent().find('td:nth-child(7) option[value="'+type_max+'"]').attr("selected",true).focus();
			var text_max = $("#tb_ageRange_CL .font-term-purple").parent().parent().find('td:nth-child(7) option:selected').text();
			message = "ห้ามกรอกข้อมูลเกิน "+value+ " " + text_max
			alertError(message)
		}
	}
	function numberKey_maximum_term(obj,chk_val){
		var value = $("#tb_ageRange_CL .font-term-purple").parent().parent().find('td:nth-child(8) input[type="hidden"]').val()
		//var value = $("#"+chk_val).parent().find('input[type="hidden"]').val();
		var number = $(obj).val();
		if(value == null){
			alert("ไม่มีค่า max")
		}
		
		if(number.includes(".")){
			number = number.replace(/\./g,"")
		}
		
		if(number > value || number > 999){
			$(obj).val(value).focus();
			var type_max = $("#tb_ageRange_CL .font-term-purple").parent().parent().find('td:nth-child(9) input[type="hidden"]').val();
			//$(obj).parent().parent().find('td:nth-child(7) option[value="'+type_max+'"]').attr("selected",true).focus();
			var text_max = $("#tb_ageRange_CL .font-term-purple").parent().parent().find('td:nth-child(9) option:selected').text();
			message = "ห้ามกรอกข้อมูลเกิน "+value+ " " + text_max
			alertError(message)
		}
		
	}
	
	function cancelPage(url){
		location.href = url;	
	}
	/*ยืนยันการลบ*/
	function alertDeleteError(message)
	{
	    $('#txt_alert_delete_error').text(message);
	    $('#modal_warning_delete').modal();
	}
	
	/*ผลประโยชน์การขาย*/
	function saleCL_chkval(id){
		var imgOK = "chk_sale_CL"+id;
		
 		if($('#'+imgOK).is(':checked')) 
			{							
				$('#txt_sale_CL'+id).prop("disabled", false);		
				var value = $("#"+imgOK).val();
				if(value=="BROKER_FEE"){
					$("#panel_sale_CL").css("display","block");
				}
			}
		else
			{					
				$('#txt_sale_CL'+id).prop("disabled", true);
				$('#txt_sale_CL'+id).val("0.00");
				if(id==1){
					$("#panel_sale_CL").css("display","none");
				}
			}
	}
	
	function chk_max_amount_insure(value){
		if(value == 1) 
		{							
			$("#tbl_insure_alone").show();	
			$("#tbl_insure_many").hide();
			$("#btn_insure_many").hide();
		}
		else
		{					
			$("#tbl_insure_alone").hide();
			$("#tbl_insure_many").show();
			$("#btn_insure_many").show();
		}
	}
	
	function chk_health_check(value){
		if(value == 1) 
		{							
			$("#div_tbl_health_check_CL").show();				
		}
		else
		{					
			$("#div_tbl_health_check_CL").hide();			
		}
	}
	
	function chk_increase_premium(value){
		if(value == 1) 
		{
			//$("#panel_increase_premium_yes_CL").show();
		//	$("#div_increase_premium_CL").show();	
			$("#panel_increase_premium_yes_CL input[type='checkbox']").removeAttr("disabled");
			$("#panel_increase_premium_yes_CL").removeAttr("style");
			
			$("#panel_increase_premium_yes_CL").removeClass('disabledAll')
			var pathner = $("#lb_partner_CL option:selected").val()
			if(pathner == "Y"){
				$("#div_increaseCOOP_premium_CL").show();
			}else{
				$("#div_increase_premium_CL").show();
			}
			
		}else{
		//	$("#panel_increase_premium_yes_CL").show();
		//	$("#div_increase_premium_CL").show();
			$("#chk_increase_premium_yes_CL1").prop("checked", false);
			$("#chk_increase_premium_yes_CL2").prop("checked", false);
			$("#chk_increase_premium_yes_CL3").prop("checked", false);
			$("#chk_increase_premium_yes_CL4").prop("checked", false);
			$("#chk_increase_premium_yes_CL5").prop("checked", false);
			$("#panel_increase_premium_yes_CL").css("opacity", "0.8");
			$("#panel_increase_premium_yes_CL input[type='checkbox']").attr("disabled","disabled");
			
			$("#panel_increase_premium_yes_CL").hide()
			$("#div_increase_premium_CL").hide()
			$("#div_increaseCOOP_premium_CL").hide()
		}
	}
	
	/*การรวมเงินเอาประกันภัยเพื่อตรวจสุขภาพ*/
function chk_health_insurance(value){
	if(value == 1) 
	{							
		$("#tbl_health_insurance_CL").show();		
		$("#btn_health_insurance").show();
		$("#validate_input12_cl").show();
	}
	else
	{					
		$("#tbl_health_insurance_CL").hide();		
		$("#btn_health_insurance").hide();
		$("#validate_input12_cl").hide();
	}
	validate_input12_cl();
}	
	
	
	/*แสดง กธ.เดิม*/
function chk_old_insurance(value){
	if(value == 1) 
	{							
		$("#tbl_old_insurance_CL").show();		
		$("#btn_old_insurance").show();
		$("#validate_input13_cl").show();
	}
	else
	{					
		$("#tbl_old_insurance_CL").hide();		
		$("#btn_old_insurance").hide();
		$("#validate_input13_cl").hide();
	}
	validate_input13_cl();
}
	
function addhealthInsurance_CL(){
	if($("#div_health_insurance_CL").innerHeight() > 300){
		$("#div_health_insurance_CL").addClass("scroll_insure_many");
	}
	
	var lastImgOK = $('#tbl_health_insurance_CL>tbody>tr:last>td:first').attr("id") || 0;
	var numberImgOK = 0;
				
	if(lastImgOK == 0){
		numberImgOK = 1;
	}else{
		numberImgOK = Number(lastImgOK.replace("imgOK_healthInsurance",""))+1;
	}
			
	var row = "";
	row = "<tr id='tr_healthInsurance"+numberImgOK+"'>"+
	  "<td id='imgOK_healthInsurance"+numberImgOK+"' class='text-center vertical-middle' onclick='imgCheckbox_healthInsurance_CL("+numberImgOK+");'>"+
	  	"<i class='glyphicon glyphicon-edit'></i>"+
	  "</td>"+					
	  "<td class='verticalCenter text-center'></td>"+
	  "<td class='verticalCenter text-center'><select class='form-control' id='sl_policyType_healthInsurance"+numberImgOK+"' onchange='ddHeath2_select(this.id)'><option>All</option></select></td>"+
	  "<td class='verticalCenter text-center'><select class='form-control' id='sl_productType_healthInsurance"+numberImgOK+"'><option>All</option></select></td>"+
	  "<td class='verticalCenter text-center'></td>"+
	  "<td class='verticalCenter text-center'></td>"+
	  /*"<td class='verticalCenter text-center'></td>"+*/
	  "<td class='verticalCenter text-center'></td>"+
	  "<td class='verticalCenter text-center'><select class='form-control' id='sl_partner_healthInsurance"+numberImgOK+"'><option data-id='0' value='NONE'>All</option></select></td>"+
	 "</tr>";
		
	$("#tbl_health_insurance_CL>tbody").append(row);	
	
	/*clone ประเภทสัญญา*/
	$('#tbl_health_insurance_CL>tbody>tr:first-child>td:nth-child(2)>select').clone().attr("id","sl_contractType_healthInsurance"+numberImgOK).appendTo("#tr_healthInsurance"+numberImgOK+">td:nth-child(2)");
	$("#sl_contractType_healthInsurance"+numberImgOK+" option[value='']").attr("selected",true);
	var optionValues = [];
	$("#sl_contractType_healthInsurance"+numberImgOK+" option").each(function() {
	    optionValues.push($(this).text());
	});
	

	$('#tbl_health_insurance_CL>tbody>tr:first-child>td:nth-child(5)>select').clone().attr("id","sl_Reinsurance_healthInsurance"+numberImgOK).appendTo("#tr_healthInsurance"+numberImgOK+">td:nth-child(5)");
	$('#tbl_health_insurance_CL>tbody>tr:first-child>td:nth-child(6)>select').clone().attr("id","sl_senior_healthInsurance"+numberImgOK).appendTo("#tr_healthInsurance"+numberImgOK+">td:nth-child(6)");
	//$('#tbl_health_insurance_CL>tbody>tr:first-child>td:nth-child(7)>select').clone().attr("id","sl_fillingChannel_healthInsurance"+numberImgOK).appendTo("#tr_healthInsurance"+numberImgOK+">td:nth-child(7)");
	$('#tbl_health_insurance_CL>tbody>tr:first-child>td:nth-child(7)>select').clone().attr("id","sl_saleChannel_healthInsurance"+numberImgOK).appendTo("#tr_healthInsurance"+numberImgOK+">td:nth-child(7)");

	$("#sl_Reinsurance_healthInsurance"+numberImgOK).find("option").removeAttr( "selected" )
	$("#sl_Reinsurance_healthInsurance"+numberImgOK).find("option[value='NONE']").attr("selected",true)
	$("#sl_senior_healthInsurance"+numberImgOK).find("option").removeAttr( "selected" )
	$("#sl_senior_healthInsurance"+numberImgOK).find("option[value='NONE']").attr("selected",true)
	//$("#sl_fillingChannel_healthInsurance"+numberImgOK).find("option").removeAttr( "selected" )
	//$("#sl_fillingChannel_healthInsurance"+numberImgOK).find("option[value='NONE']").attr("selected",true)
	$("#sl_saleChannel_healthInsurance"+numberImgOK).find("option").removeAttr( "selected" )
	$("#sl_saleChannel_healthInsurance"+numberImgOK).find("option[value='NONE']").attr("selected",true)
	$("#validate_input12_cl").show();
}

function addOldInsurance_CL(){		
		if($("#div_old_insurance_CL").innerHeight() > 300){
			$("#div_old_insurance_CL").addClass("scroll_insure_many");
		}
				
		var lastImgOK = $('#tbl_old_insurance_CL>tbody>tr:last>td:first').attr("id") || 0;
		var numberImgOK = 0;
					
		if(lastImgOK == 0){
			numberImgOK = 1;
		}else{
			numberImgOK = Number(lastImgOK.replace("imgOK_oldinsurance",""))+1;
		}
				
		var row = "";

		row = "<tr id='tr_oldinsurance"+numberImgOK+"'>"+
			  "<td id='imgOK_oldinsurance"+numberImgOK+"' class='text-center vertical-middle' onclick='imgCheckbox_oldinsurance_CL("+numberImgOK+");'>"+
			  	"<i class='glyphicon glyphicon-edit'></i>"+
			  "</td>"+					
			  "<td class='verticalCenter text-center'></td>"+
			  "<td class='verticalCenter text-center'><select class='form-control' id='sl_policyType_oldinsurance"+numberImgOK+"' onchange='ddHeath2_select(this.id)'><option>All</option></select></td>"+
			  "<td class='verticalCenter text-center'><select class='form-control' id='sl_productType_oldinsurance"+numberImgOK+"'><option>All</option></select></td>"+
			  "<td class='verticalCenter text-center'></td>"+	
			  "<td class='verticalCenter text-center'></td>"+
			 /* "<td class='verticalCenter text-center'></td>"+*/
			  "<td class='verticalCenter text-center'></td>"+
			  "<td class='verticalCenter text-center'><select class='form-control' id='sl_partner_oldinsurance"+numberImgOK+"'><option data-id='0' value='NONE'>All</option></select></td>"+
			 "</tr>";
				
		$("#tbl_old_insurance_CL>tbody").append(row);		
		
		/*clone ประเภทสัญญา*/
		$('#tbl_old_insurance_CL>tbody>tr:first-child>td:nth-child(2)>select').clone().attr("id","sl_contractType_oldinsurance"+numberImgOK).appendTo("#tr_oldinsurance"+numberImgOK+">td:nth-child(2)");
		$("#sl_contractType_oldinsurance"+numberImgOK+" option[value='']").attr("selected",true);
		var optionValues = [];
		$("#sl_insuranceType_oldinsurance"+numberImgOK+" option").each(function() {
		    optionValues.push($(this).text());
		});
		
		$('#tbl_old_insurance_CL>tbody>tr:first-child>td:nth-child(5)>select').clone().attr("id","sl_Reinsurance_oldinsurance"+numberImgOK).appendTo("#tr_oldinsurance"+numberImgOK+">td:nth-child(5)");
		$('#tbl_old_insurance_CL>tbody>tr:first-child>td:nth-child(6)>select').clone().attr("id","sl_senior_oldinsurance"+numberImgOK).appendTo("#tr_oldinsurance"+numberImgOK+">td:nth-child(6)");
		//$('#tbl_old_insurance_CL>tbody>tr:first-child>td:nth-child(7)>select').clone().attr("id","sl_fillingChannel_oldinsurance"+numberImgOK).appendTo("#tr_oldinsurance"+numberImgOK+">td:nth-child(7)");
		$('#tbl_old_insurance_CL>tbody>tr:first-child>td:nth-child(7)>select').clone().attr("id","sl_saleChannel_oldinsurance"+numberImgOK).appendTo("#tr_oldinsurance"+numberImgOK+">td:nth-child(7)");
		
		$("#sl_Reinsurance_oldinsurance"+numberImgOK).find("option").removeAttr( "selected" )
		$("#sl_Reinsurance_oldinsurance"+numberImgOK).find("option[value='NONE']").attr("selected",true)
		$("#sl_senior_oldinsurance"+numberImgOK).find("option").removeAttr( "selected" )
		$("#sl_senior_oldinsurance"+numberImgOK).find("option[value='NONE']").attr("selected",true)
		//$("#sl_fillingChannel_oldinsurance"+numberImgOK).find("option").removeAttr( "selected" )
		//$("#sl_fillingChannel_oldinsurance"+numberImgOK).find("option[value='NONE']").attr("selected",true)
		$("#sl_saleChannel_oldinsurance"+numberImgOK).find("option").removeAttr( "selected" )
		$("#sl_saleChannel_oldinsurance"+numberImgOK).find("option[value='NONE']").attr("selected",true)
		$("#validate_input13_cl").show();
}	

function imgCheckbox_healthInsurance_CL(id){
	var imgOK = "imgOK_healthInsurance"+id;
	var classed = $('#'+imgOK+' >i').attr("class") || 0;
		
	if(classed != 0)
		{			
			if(classed == "glyphicon glyphicon-edit")
				{		
					$('#'+imgOK+' >i').attr("class", "glyphicon glyphicon-ok");
					$('#'+imgOK+' >i').css("display","block");					
				}
				else
				{
					$('#'+imgOK+' >i').attr("class", "glyphicon glyphicon-edit");
					$('#'+imgOK+' >i').css("display","block");
						
				}
		}
}

function imgCheckbox_oldinsurance_CL(id)
{
	var imgOK = "imgOK_oldinsurance"+id;
	var classed = $('#'+imgOK+' >i').attr("class") || 0;
		
	if(classed != 0)
		{			
			if(classed == "glyphicon glyphicon-edit")
				{		
					$('#'+imgOK+' >i').attr("class", "glyphicon glyphicon-ok");
					$('#'+imgOK+' >i').css("display","block");					
				}
				else
				{
					$('#'+imgOK+' >i').attr("class", "glyphicon glyphicon-edit");
					$('#'+imgOK+' >i').css("display","block");
						
				}
		}
}
	
function confirmDeletehealthInsurance_CL(){
	if($("#div_health_insurance_CL").innerHeight() > 300){
		$("#div_health_insurance_CL").addClass("scroll_insure_many");
	}else{
		$("#div_health_insurance_CL").removeClass("scroll_insure_many");
	}
	
	var imgOKcount = $("#tbl_health_insurance_CL i.glyphicon-ok").length;
	if(imgOKcount <= 0)
	{	
		message = "กรุณาเลือกรายการที่ต้องการลบ";
		alertError(message);
	}else{
	
	message = "ต้องการลบรายการใช่หรือไม่";
	alertDeleteError(message);
	
	$("#btn_confirm_del").unbind();
	$("#btn_confirm_del").click(function(){
		var lastImgOK = $('#tbl_health_insurance_CL>tbody>tr:last>td:first').attr("id") || 0;	
		var numberImgOK = 0;
		if(lastImgOK == 0){
			numberImgOK = 1;
		}else{
			numberImgOK = Number(lastImgOK.replace("imgOK_healthInsurance",""))+1;
		}
		
		$('#tbl_health_insurance_CL>tbody>tr').each(function(){
			var checked = $(this).find('td:nth-child(1) i').attr("class");
			if(checked == "glyphicon glyphicon-ok"){	
				deleteTableRow($(this));				
			}
		})
		/*for(var i = 1;i<=numberImgOK;i++)
			{
				var checked = $('#tr_healthInsurance'+i+' >td:first>i').attr("class");
				if(checked == "glyphicon glyphicon-ok"){	
					deleteTableRow('#tr_healthInsurance'+i);				
				}				
			}*/
		validate_tbl_health_insurance_CL();
		});			
	
	}
}

function confirmDeleteOldInsurance_CL(){
	
	if($("#div_old_insurance_CL").innerHeight() > 300){
		$("#div_old_insurance_CL").addClass("scroll_insure_many");
	}else{
		$("#div_old_insurance_CL").removeClass("scroll_insure_many");
	}
	
	var imgOKcount = $("#tbl_old_insurance_CL i.glyphicon-ok").length;
	if(imgOKcount <= 0)
	{	
		message = "กรุณาเลือกรายการที่ต้องการลบ";
		alertError(message);
	}else{
	
	message = "ต้องการลบรายการใช่หรือไม่";
	alertDeleteError(message);
	
	$("#btn_confirm_del").unbind();
	$("#btn_confirm_del").click(function(){
		var lastImgOK = $('#tbl_old_insurance_CL>tbody>tr:last>td:first').attr("id") || 0;	
		var numberImgOK = 0;
		if(lastImgOK == 0){
			numberImgOK = 1;
		}else{
			numberImgOK = Number(lastImgOK.replace("imgOK_oldinsurance",""))+1;
		}
		
		$('#tbl_old_insurance_CL>tbody>tr').each(function(){
			var checked = $(this).find('td:nth-child(1) i').attr("class");
			if(checked == "glyphicon glyphicon-ok"){	
				deleteTableRow($(this));				
			}
		})
		/*for(var i = 1;i<=numberImgOK;i++)
			{
				var checked = $('#tr_oldinsurance'+i+' >td:first>i').attr("class");
				if(checked == "glyphicon glyphicon-ok"){	
					deleteTableRow('#tr_oldinsurance'+i);				
				}				
			}	*/
		validate_tbl_old_insurance_CL();
		});			
	}
}

function durationFrom(row) {
	var durationFrom  = $('#start_period_insure_unit_cl').val();
	$('#end_period_insure_unit_cl').val(durationFrom);
}
function durationTo(row) {
	var durationTo  = $('#end_period_insure_unit_cl').val();
	$('#start_period_insure_unit_cl').val(durationTo);
}
/*ระยะเวลาเอาประกันภัย*/
function checkFromToPeriod_CL(id) {
	var from_value = $("#start_period_insure_cl").val();
	var from_unit = $("#start_period_insure_unit_cl option:selected").val();
	var to_value = $("#end_period_insure_cl").val();
	var to_unit = $("#end_period_insure_unit_cl option:selected").val();
	
	if(from_value != "" && from_unit != "NONE" && to_value != "" && to_unit != "NONE"){
		if(Number(from_value) >= Number(to_value)){
			 message = "ระยะเวลาคุ้มครองสิ้นสุดต้องมากกว่าเสมอ";
			  alertError(message);
			  $("#end_period_insure_cl").focus();
			  $("#end_period_insure_cl").val("");
		}
	}		 
}
/*รวมทุนคุ้มครองอำนาจ UW*/
function chk_uw_consider(value){
	if(value == 1) 
	{							
		$("#tbl_UW_consider_CL").show();		
		$("#btn_UW_Consider").show();
		$("#validate_input14_cl").show();
	}
	else
	{					
		$("#tbl_UW_consider_CL").hide();		
		$("#btn_UW_Consider").hide();
		$("#validate_input14_cl").hide();
	}
	validate_input14_cl();
}

function imgCheckbox_UWConsider_CL(id)
{
	var imgOK = "imgOK_UWConsider"+id;
	var classed = $('#'+imgOK+' >i').attr("class") || 0;
		
	if(classed != 0)
	{			
		if(classed == "glyphicon glyphicon-edit")
		{		
			$('#'+imgOK+' >i').attr("class", "glyphicon glyphicon-ok");
			$('#'+imgOK+' >i').css("display","block");					
		}
		else
		{
			$('#'+imgOK+' >i').attr("class", "glyphicon glyphicon-edit");
			$('#'+imgOK+' >i').css("display","block");						
		}
	}
}

function addUWConsider_CL(){		
	if($("#div_UW_consider_CL").innerHeight() > 300){
		$("#div_UW_consider_CL").addClass("scroll_insure_many");
	}
			
	var lastImgOK = $('#tbl_UW_consider_CL>tbody>tr:last>td:first').attr("id") || 0;
	var numberImgOK = 0;
				
	if(lastImgOK == 0){
		numberImgOK = 1;
	}else{
		numberImgOK = Number(lastImgOK.replace("imgOK_UWConsider",""))+1;
	}
			
	var row = "";

	row = "<tr id='tr_UWConsider"+numberImgOK+"'>"+
		  "<td id='imgOK_UWConsider"+numberImgOK+"' class='text-center vertical-middle' onclick='imgCheckbox_UWConsider_CL("+numberImgOK+");'>"+
		  	"<i class='glyphicon glyphicon-edit'></i>"+
		  "</td>"+					
		  "<td class='verticalCenter text-center'></td>"+
		  "<td class='verticalCenter text-center'><select class='form-control' id='sl_policyType_UWConsider"+numberImgOK+"' onchange='ddHeath2_select(this.id)'><option>All</option></select></td>"+
		  "<td class='verticalCenter text-center'><select class='form-control' id='sl_productType_UWConsider"+numberImgOK+"'><option>All</option></select></td>"+
		  "<td class='verticalCenter text-center'></td>"+
		  "<td class='verticalCenter text-center'></td>"+
		  /*"<td class='verticalCenter text-center'></td>"+*/
		  "<td class='verticalCenter text-center'></td>"+
		  "<td class='verticalCenter text-center'><select class='form-control' id='sl_partner_UWConsider"+numberImgOK+"'><option data-id='0' value='NONE'>All</option></select></td>"+	
		 "</tr>";
			
	$("#tbl_UW_consider_CL>tbody").append(row);		
	
	//$('#tbl_UW_consider_CL>tbody>tr:first-child>td:nth-child(2)>select').clone().attr("id","sl_contractType_UWConsider"+numberImgOK).appendTo("#tr_UWConsider"+numberImgOK+">td:nth-child(2)");
	
	/*clone ประเภทสัญญา*/
	$('#tbl_UW_consider_CL>tbody>tr:first-child>td:nth-child(2)>select').clone().attr("id","sl_contractType_UWConsider"+numberImgOK).appendTo("#tr_UWConsider"+numberImgOK+">td:nth-child(2)");
	$("#sl_contractType_UWConsider"+numberImgOK+" option[value='']").attr("selected",true);
	
	var optionValues = [];
	$("#sl_insuranceType_UWConsider"+numberImgOK+" option").each(function() {
	    optionValues.push($(this).text());
	});
	
	
	$('#tbl_UW_consider_CL>tbody>tr:first-child>td:nth-child(5)>select').clone().attr("id","sl_Reinsurance_UWConsider"+numberImgOK).appendTo("#tr_UWConsider"+numberImgOK+">td:nth-child(5)");
	$('#tbl_UW_consider_CL>tbody>tr:first-child>td:nth-child(6)>select').clone().attr("id","sl_senior_UWConsider"+numberImgOK).appendTo("#tr_UWConsider"+numberImgOK+">td:nth-child(6)");
	//$('#tbl_UW_consider_CL>tbody>tr:first-child>td:nth-child(7)>select').clone().attr("id","sl_fillingChannel_UWConsider"+numberImgOK).appendTo("#tr_UWConsider"+numberImgOK+">td:nth-child(7)");
	$('#tbl_UW_consider_CL>tbody>tr:first-child>td:nth-child(7)>select').clone().attr("id","sl_saleChannel_UWConsider"+numberImgOK).appendTo("#tr_UWConsider"+numberImgOK+">td:nth-child(7)");
	
	$("#sl_Reinsurance_UWConsider"+numberImgOK).find("option").removeAttr( "selected" )
	$("#sl_Reinsurance_UWConsider"+numberImgOK).find("option[value='NONE']").attr("selected",true)
	$("#sl_senior_UWConsider"+numberImgOK).find("option").removeAttr( "selected" )
	$("#sl_senior_UWConsider"+numberImgOK).find("option[value='NONE']").attr("selected",true)
	//$("#sl_fillingChannel_UWConsider"+numberImgOK).find("option").removeAttr( "selected" )
	//$("#sl_fillingChannel_UWConsider"+numberImgOK).find("option[value='NONE']").attr("selected",true)
	$("#sl_saleChannel_UWConsider"+numberImgOK).find("option").removeAttr( "selected" )
	$("#sl_saleChannel_UWConsider"+numberImgOK).find("option[value='NONE']").attr("selected",true)
	$("#validate_input14_cl").show();
}	


function confirmDeleteUWConsider_CL(){

	if($("#div_UW_consider_CL").innerHeight() > 300){
		$("#div_UW_consider_CL").addClass("scroll_insure_many");
	}else{
		$("#div_UW_consider_CL").removeClass("scroll_insure_many");
	}
	
	var imgOKcount = $("#tbl_UW_consider_CL i.glyphicon-ok").length;
	if(imgOKcount <= 0)
	{	
		message = "กรุณาเลือกรายการที่ต้องการลบ";
		alertError(message);
	}else{
	
	message = "ต้องการลบรายการใช่หรือไม่";
	alertDeleteError(message);
	
	$("#btn_confirm_del").unbind();
	$("#btn_confirm_del").click(function(){
		var lastImgOK = $('#tbl_UW_consider_CL>tbody>tr:last>td:first').attr("id") || 0;	
		var numberImgOK = 0;
		if(lastImgOK == 0){
			numberImgOK = 1;
		}else{
			numberImgOK = Number(lastImgOK.replace("imgOK_UWConsider",""))+1;
		}
		
		$('#tbl_UW_consider_CL>tbody>tr').each(function(){
			var checked = $(this).find('td:nth-child(1) i').attr("class");
			if(checked == "glyphicon glyphicon-ok"){	
				deleteTableRow($(this));				
			}
		})
		/*for(var i = 1;i<=numberImgOK;i++)
			{
				var checked = $('#tr_UWConsider'+i+' >td:first>i').attr("class");
				if(checked == "glyphicon glyphicon-ok"){	
					deleteTableRow('#tr_UWConsider'+i);				
				}				
			}*/		
		validate_tbl_UW_consider_CL();
		});			
	}
}


	$("#chk_check_data_CL3").on('click',function () {		
		if($(this).is(':checked')){
			$("#tbl_check_data_CL3 :input").prop("disabled", false);
		}else{
			$("#tbl_check_data_CL3 :input").prop("disabled", true);
			$("#tbl_check_data_CL3 :input").prop("checked", false);
		}
	});
	
	$("#chk_free_look_CL").on('click',function () {	
		if($(this).is(':checked')){
			$("#amount_free_look_CL").prop("disabled", false);
			$("#deduct_cost_CL").prop("disabled",false);
		}else{
			$("#amount_free_look_CL").prop("disabled", true);
			$("#amount_free_look_CL").val("");
			$("#deduct_cost_CL").prop("disabled",true);
			$("#deduct_cost_CL").prop("checked",false);
			$("#tbl_deduct_cost :input").prop("disabled", true);
			$("#tbl_deduct_cost").css("opacity", "0.8");
			$("#tbl_deduct_cost :input").prop("checked", false);
		}
	});
		
	$("#deduct_cost_CL").on('click',function () {
		if($(this).is(':checked')){
			$("#tbl_deduct_cost :input").prop("disabled", false);
			$("#tbl_deduct_cost").css("opacity", "1");
		}else{
			$("#tbl_deduct_cost :input").prop("disabled", true);
			$("#tbl_deduct_cost").css("opacity", "0.8");
			$("#tbl_deduct_cost :input").prop("checked", false);
		}
	});	
	
/* เซ็ค validate ตาราง 
	* การรวมเงินเอาประกันภัยเพื่อตรวจสุขภาพ
	* การแสดงรายการ กธ. เดิม
	* การรวมทุนคุ้มครอง (อำนาจการพิจารณาของ UW)
	*
	*/ 	
$("#tbl_health_insurance_CL").change(function(){
	$("#tbl_health_insurance_CL tbody>tr").each(function(){
		var td2 = $(this).find('td:nth-child(2) select').val();
		var td3 = $(this).find('td:nth-child(3) select').val();
		var td4 = $(this).find('td:nth-child(4) select').val();
		/*var td5 = $(this).find('td:nth-child(5) select').val();
		var td6 = $(this).find('td:nth-child(6) select').val();
		var td7 = $(this).find('td:nth-child(7) select').val();
		var td8 = $(this).find('td:nth-child(8) select').val();
		var td9 = $(this).find('td:nth-child(9) select').val();*/
		if( td2 != "" && td2 != "0" /*&& td3 != "" && td3 != "0" && td4 != "" && td4 != "0"*//*&& td5 != "NONE" && td6 != "NONE"
			&& td7 != "NONE" && td8 != "NONE" && td9 != "NONE"*/){
			$("#validate_input12_cl").hide();
		}else{
			$("#validate_input12_cl").show();
		}
	})
})
$("#tbl_old_insurance_CL").change(function(){
	$("#tbl_old_insurance_CL tbody>tr").each(function(){
		var td2 = $(this).find('td:nth-child(2) select').val();
		var td3 = $(this).find('td:nth-child(3) select').val();
		var td4 = $(this).find('td:nth-child(4) select').val();
		/*var td5 = $(this).find('td:nth-child(5) select').val();
		var td6 = $(this).find('td:nth-child(6) select').val();
		var td7 = $(this).find('td:nth-child(7) select').val();
		var td8 = $(this).find('td:nth-child(8) select').val();
		var td9 = $(this).find('td:nth-child(9) select').val();*/
		if( td2 != "" && td2 != "0" /*&& td3 != "" && td3 != "0" && td4 != "" && td4 != "0"*//*&& td5 != "NONE" && td6 != "NONE"
			&& td7 != "NONE" && td8 != "NONE" && td9 != "NONE"*/){
			$("#validate_input13_cl").hide();
		}else{
			$("#validate_input13_cl").show();
		}
	})
})
$("#tbl_UW_consider_CL").change(function(){
	$("#tbl_UW_consider_CL tbody>tr").each(function(){
		var td2 = $(this).find('td:nth-child(2) select').val();
		var td3 = $(this).find('td:nth-child(3) select').val();
		var td4 = $(this).find('td:nth-child(4) select').val();
		/*var td5 = $(this).find('td:nth-child(5) select').val();
		var td6 = $(this).find('td:nth-child(6) select').val();
		var td7 = $(this).find('td:nth-child(7) select').val();
		var td8 = $(this).find('td:nth-child(8) select').val();
		var td9 = $(this).find('td:nth-child(9) select').val();*/
		if( td2 != "" && td2 != "0" /*&& td3 != "" && td3 != "0" && td4 != "" && td4 != "0"*//*&& td5 != "NONE" && td6 != "NONE"
			&& td7 != "NONE" && td8 != "NONE" && td9 != "NONE"*/){
			$("#validate_input14_cl").hide();
		}else{
			$("#validate_input14_cl").show();
		}
	})
})
function validate_tbl_health_insurance_CL(){
	$("#tbl_health_insurance_CL tbody>tr").each(function(){
		var td2 = $(this).find('td:nth-child(2) select').val();
		var td3 = $(this).find('td:nth-child(3) select').val();
		var td4 = $(this).find('td:nth-child(4) select').val();
		if( td2 != "" && td2 != "0" && td3 != "" && td3 != "0" && td4 != "" && td4 != "0"){
			$("#validate_input12_cl").hide();
		}else{
			$("#validate_input12_cl").show();
		}
	})
}
function validate_tbl_old_insurance_CL(){
	$("#tbl_old_insurance_CL tbody>tr").each(function(){
		var td2 = $(this).find('td:nth-child(2) select').val();
		var td3 = $(this).find('td:nth-child(3) select').val();
		var td4 = $(this).find('td:nth-child(4) select').val();
		if( td2 != "" && td2 != "0" && td3 != "" && td3 != "0" && td4 != "" && td4 != "0"){
			$("#validate_input13_cl").hide();
		}else{
			$("#validate_input13_cl").show();
		}
	})
}
function validate_tbl_UW_consider_CL(){
	$("#tbl_UW_consider_CL tbody>tr").each(function(){
		var td2 = $(this).find('td:nth-child(2) select').val();
		var td3 = $(this).find('td:nth-child(3) select').val();
		var td4 = $(this).find('td:nth-child(4) select').val();
		if( td2 != "" && td2 != "0" && td3 != "" && td3 != "0" && td4 != "" && td4 != "0"){
			$("#validate_input14_cl").hide();
		}else{
			$("#validate_input14_cl").show();
		}
	})
}
	
/*เพิ่มรายการ*/
function addInsure_manyNew_CL(){		
		if($("#tbl_insure_many").innerHeight() > 300){
			$("#tbl_insure_many").addClass("scroll_insure_many");
		}
		var sl_unit = $("#lookup_unit").val();
		var sl_factor = $("#lookup_factor").val();		
		var lastImgOK = $('#tbl_insure_many>table>tbody>tr:last>td:first').attr("id") || 0;
		var numberImgOK = 0;
					
		if(lastImgOK == 0){
			numberImgOK = 1;
		}else{
			numberImgOK = Number(lastImgOK.replace("imgOK_loan_many",""))+1;
		}
				
		var row = "";

		row = "<tr id='tbody_loan_many"+numberImgOK+"'>"
			if(numberImgOK == 1){
				row += "<td id='imgOK_loan_many"+numberImgOK+"' class='verticalCenter text-center'>" 
			}else{
				row += "<td id='imgOK_loan_many"+numberImgOK+"' class='verticalCenter text-center' onclick='imgCheckbox_loan_many_CL("+numberImgOK+");'><i class='glyphicon glyphicon-edit'></i>" 
			}
				row += "<input type='hidden' id='seq' value='"+numberImgOK+"'>" +
			  	"</td>"+
			  "<td class='verticalCenter text-right'><input type='text' id='loan_many_from"+numberImgOK+"_CL' class='autoComma form-control text-right' value=''></td>"+	
			  "<td class='verticalCenter text-right'><input type='text' id='loan_many_to"+numberImgOK+"_CL' class='autoComma form-control text-right' value='' onchange='validateMax_tbAmountTo(this);'></td>"+	
			  "<td class='verticalCenter text-right'><input type='text' id='loan_many_max_per_person"+numberImgOK+"_CL' class='autoComma form-control text-right' value='0.00' data-v-min='0.00' data-v-max='100.00'></td>"+						
			  "<td class='verticalCenter text-center'><select class='form-control sl-unit' id='sl_unit"+numberImgOK+"'><option value='NONE'>None</option>"+sl_unit+"</select></td>"+	
			  "<td class='verticalCenter text-center'><select class='form-control sl-factor' id='sl_of"+numberImgOK+"'><option value='NONE'>None</option>"+sl_factor+"</select></td>"+																									
			  "<td class='verticalCenter text-right'><input type='text' id='loan_many_max_per_all"+numberImgOK+"_CL' class='autoComma form-control text-right' value='0.00' data-v-min='0.00' data-v-max='999.99'></td>"+						
			  "<td class='verticalCenter text-center'><select class='form-control sl-unit' id='sl_unit"+numberImgOK+"'><option value='NONE'>None</option>"+sl_unit+"</select></td>"+	
			  "<td class='verticalCenter text-center'><select class='form-control sl-factor' id='sl_of"+numberImgOK+"'><option value='NONE'>None</option>"+sl_factor+"</select></td>"+																									
			  "</tr>";
		
		
		$("#tbl_insure_many>table tbody").append(row);		
		$(".autoComma").autoNumeric('init',{vMin: '0.00', vMax: '999999999.99'});
}	

function imgCheckbox_loan_many_CL(id)
{
	var imgOK = "imgOK_loan_many"+id;
	var classed = $('#'+imgOK+' >i').attr("class") || 0;
	
	if(classed != 0)
		{			
			if(classed == "glyphicon glyphicon-edit")
				{		
					$('#'+imgOK+' >i').attr("class", "glyphicon glyphicon-ok");
					$('#'+imgOK+' >i').css("display","block");					
				}
			else
				{
					$('#'+imgOK+' >i').attr("class", "glyphicon glyphicon-edit");
					$('#'+imgOK+' >i').css("display","block");
					
				}
		}
}

function confirmDeleteInsure_many_CL(){
	
	if($("#tbl_insure_many").innerHeight() > 300){
		$("#tbl_insure_many").addClass("scroll_insure_many");
	}else{
		$("#tbl_insure_many").removeClass("scroll_insure_many");
	}
	
	var imgOKcount = $("#tbl_insure_many i.glyphicon-ok").length;
	if(imgOKcount <= 0)
	{	
		message = "กรุณาเลือกรายการที่ต้องการลบ";
		alertError(message);
	}else{
	
	message = "ต้องการลบรายการใช่หรือไม่";
	alertDeleteError(message);
	
	$("#btn_confirm_del").click(function(){
		var lastImgOK = $('#tbl_insure_many>table>tbody>tr:last>td:first').attr("id") || 0;	
		var numberImgOK = 0;
		if(lastImgOK == 0){
			numberImgOK = 1;
		}else{
			numberImgOK = Number(lastImgOK.replace("imgOK_loan_many",""))+1;
		}
		
		for(var i = 1;i<=numberImgOK;i++)
			{
				var checked = $('#tbody_loan_many'+i+' >td:first>i').attr("class");
				if(checked == "glyphicon glyphicon-ok"){	
					deleteTableRow('#tbody_loan_many'+i);				
				}				
		}					   
		});			
	}
}

function disabled_fieldInsure(e){
	var checker = $(e).is(':checked')
	if(checker){
		$(e).parent().parent().find('td:nth-child(3) input[type="text"]').attr("disabled",false)
	}else{
		$(e).parent().parent().find('td:nth-child(3) input[type="text"]').attr("disabled",true);
		$(e).parent().parent().find('td:nth-child(3) input[type="text"]').val("0.00");
	}
	
}

/*เปิด-ปิด tr*/
$('.flip').click(function() {
    $(this)
        .closest('tbody')
        .next('.section')
        .toggle('fast');
    
    var icon =  $(this).find("td>i");
    if(icon.hasClass("glyphicon-plus")){
    	$(icon).removeClass("glyphicon-plus").addClass("glyphicon-minus icon_active");
    }else{
    	$(icon).removeClass("glyphicon-minus icon_active").addClass("glyphicon-plus");
    }    
});
function flip(e){
	var sl_factor = $("#lookup_factor").val();
	var sl_unit = $("#lookup_unit").val();
	
	if($(e).hasClass("glyphicon-plus")){
		var type = $(e).parent().parent().find('td:nth-child(2)').text();
		var row = "";
		row = "<tr>"+
			"<td class='text-center font-term-green font-bold'></td>"+
			"<td class='text-center font-term-green font-bold'>"+type+"</td>"+
			"<td class='text-center'></td>"+	
			"<td class='text-right'>0</td>"+	
			"<td class='text-right'>0</td>"+	
			"<td class='text-right'>0.00</td>"+	
			"<td class='text-center'><select class='form-control' id='sl_unit1'><option value='NONE'>None</option>"+sl_factor+"</select></td>"+	
			"<td class='text-center'><select class='form-control' id='sl_of1'><option value='NONE'>None</option>"+sl_unit+"</select></td>"+	
			"<td class='text-right'>0</td>"+	
		"</tr>"			
		$(e).parent().parent().parent().append(row);
		$(e).removeClass("glyphicon-plus").addClass("glyphicon-minus icon_active");
	}else{
		$(e).parent().parent().next('tr').remove();
		$(e).removeClass("glyphicon-minus icon_active").addClass("glyphicon-plus");
	}
/*	 $(this)
     .closest('tbody')
     .next('.section')
     .toggle('fast');
 
 var icon =  $(this).find("td>i");
 if(icon.hasClass("glyphicon-plus")){
 	$(icon).removeClass("glyphicon-plus").addClass("glyphicon-minus icon_active");
 }else{
 	$(icon).removeClass("glyphicon-minus icon_active").addClass("glyphicon-plus");
 } */
}

/*tab policy*/
function chk_policy_choice(id){
	if(id == 1){
		$("#tab_policy_in").show().fadeIn("slow");
		$("#tab_policy_out").hide();
	}else{
		$("#tab_policy_in").hide();
		$("#tab_policy_out").show().fadeIn("slow");
	}
}

/*COOP*/
$("#lb_partner_CL").change(function() {		  
	var value = $(this).find("option:selected").val();
	if(value == "Y"){
		$("#div_panel_COOP").show();
		$("#div_COOP_CL_2").hide();
		$("#div_COOP_CL_3").hide();
		
		$("#tr_coop_commision_CL").show();
		$("#div_COOP_CL").show();
		$("#amount_max_commission").prop("disabled", false);
		
		$("#tb_COOP_CL tbody> tr*").remove();
		$("#tb_COOP_CL_2 tbody> tr*").remove();
		$("#tb_COOP_CL_3 tbody> tr*").remove();
		
		$("#div_increase_premium_CL").hide();
		$("#div_increaseCOOP_premium_CL").show();
		
		$("#master_policy_cl").hide();
		$("#div_COOP_masterPolicy_CL").show();
		
		get_COOP();
		
	}else{
		$("#tr_coop_commision_CL").hide();
		$("#div_COOP_CL").hide();
		$("#div_COOP_CL_2").hide();
		$("#div_COOP_CL_3").hide();
		$("#amount_max_commission").prop("disabled", true);
		
		$("#div_increaseCOOP_premium_CL").hide();
		$("#div_increase_premium_CL").show();
		
		$("#master_policy_cl").show();
		$("#div_COOP_masterPolicy_CL").hide();
	}
		
});

$("#addrowCOOP_CL").click(function(){
	get_COOP();
	$("#tb_COOP_modal input[type='checkbox']*").prop("checked",false)
	$("#tb_COOP_CL tbody>tr").each(function(){
		var key_coop = $(this).find('td:nth-child(2)').text();
		$("#tb_COOP_modal tbody>tr").each(function(){
			if( key_coop == $(this).find('td:nth-child(2) label').text() ){
				$(this).find('td:nth-child(1) input').prop("checked",true)
			}
		})
	})
})

function get_COOP(){
	var json_data = {
			"method": "GetCoop"
		}
	$.ajax({
		url: 'ProductCL_Data_default_Servlet',
		type: "POST",
		data: json_data,
		success: function (response) {
			$("#tb_COOP_modal tbody>tr*").remove();
			var row_COOP = "";
			for(i in response.coop){
				var obj = response.coop[i];
				row_COOP = 	"<tr id='tr_COOP"+i+"'>"+	
								"<td class='col-sm-1 text-center'>"+
								"<input type='checkbox' id='chk_COOP"+i+"' value='"+obj.pass+"'>"+
								"</td>"+
								"<td class='verticalCenter col-sm-2 text-left'>"+
								"<label id='lb_pass_COOP"+i+"' for='chk_COOP"+i+"'>"+obj.pass+"</label>"+
								"</td>"+
								"<td class='col-sm-5 text-left'>"+
								"<label id='lb_name_COOP="+i+"' for='chk_COOP"+i+"'>"+obj.text+"</label>"+
								"</td>"+
							"</tr>";
				
					$("#tb_COOP_modal tbody").append(row_COOP);
			}
			if ( $.fn.dataTable.isDataTable( "#tb_COOP_modal" ) ) {
				var table = $('#tb_COOP_modal').DataTable();
				table.destroy();
		      }
			$("#tb_COOP_modal").DataTable({"ordering": false,"paging": false,"bInfo" : false, scrollY: '236px',scrollCollapse: true, "autoWidth": false, 
				fixedHeader: {header: true},"oLanguage": {"sSearch": "ค้นหา: "}
			});
			$("#tb_COOP_modal_wrapper .dataTables_scrollHeadInner").css({"width":"100%"});
			$("#tb_COOP_modal_wrapper .table").css({"width":"100%"});
		}
	});

}

$("#lb_saleChannel_CL").on('change', function(){
	var systemCode = $('#lb_saleChannel_CL :selected').val();
	$("#div_panel_COOP").hide();
	$("#tr_coop_commision_CL").hide();
	$("#master_policy_cl").show();
	//$("#div_COOP_masterPolicy_CL").hide();
	if (systemCode != "" && systemCode != "NONE") {
		$("#lb_partner_CL option").remove();
		var opt_none = "<option value='NONE' selected>None</option>";
		$("#lb_partner_CL").append(opt_none);
		searchPartner();
	}
	else{
		$("#lb_partner_CL option").remove();
		var opt_none = "<option value='NONE' selected>None</option>";
		$("#lb_partner_CL").append(opt_none);
	}
	checkShow_coop()
});

function searchPartner(){
	var systemCode = $('#lb_saleChannel_CL :selected').val();
	var json_data = {
			"method": "GetPartner",
	        "systemCode": systemCode
		}
	$.ajax({
		url: 'ProductCL_Data_default_Servlet',
		type: "POST",
		data: json_data,
		success: function (response) {
			var row_PDPartner = "";	
			for (i in response.partner) {
				var obj_PDPartner = response.partner[i];
					row_PDPartner += "<option data-id='"+obj_PDPartner.pass+"' value='"+obj_PDPartner.key+"'>"+obj_PDPartner.text+"</option>";
			}
			$("#lb_partner_CL").append(row_PDPartner);
		}
	})
}
function checkShow_coop(){
	var flag_partner = $("#lb_partner_CL option:selected").val();
	
	if(flag_partner == "Y"){
		$("#div_COOP_masterPolicy_CL").show();
		$("#div_increaseCOOP_premium_CL").show();
	}else{
		$("#div_COOP_masterPolicy_CL").hide();
		$("#div_increaseCOOP_premium_CL").hide();
		$("#div_increase_premium_CL").show();
	}
}

function searchPartnerAccumRule(condition,result,selectPartner){
	//var systemCode = $('#'+condition+ ':selected').val();
	var systemCode = condition;
	
	if(systemCode != ""){
		var json_data = {
				"method": "GetPartner",
		        "systemCode": systemCode
			}
		$.ajax({
			url: 'ProductCL_Data_default_Servlet',
			type: "POST",
			data: json_data,
			asynd: false,
			success: function (response) {
				var row_PDPartner = "";	
				for (i in response.partner) {
					var obj_PDPartner = response.partner[i];
						row_PDPartner += "<option data-id='"+obj_PDPartner.pass+"' value='"+obj_PDPartner.key+"'>"+obj_PDPartner.text+"</option>";
				}
				$(result).append(row_PDPartner);
				$(result).find("option[data-id="+selectPartner+"]").attr("selected",true);
				
			}
		})
	}
	
}

/*initialize*/
/*Get data from servlet*/
function show_basicInfo_data(response){	
	var row_PDMode = "";	
	for (i in response.Tab_Basic_Information[0].mode) {
		var obj_PDMode = response.Tab_Basic_Information[0].mode[i];
			row_PDMode = "<tr>"+
					 "<td class='text-center verticalCenter fontcolortable1 borderBlack' width='10%'>"+
						"<input id='mode"+i+"_cl' class='' type='checkbox' value='"+obj_PDMode.value+"' disabled>"+
					 "</td>"+
					 "<td class='text-center verticalCenter fontcolortable1 borderBlack' width='10%'>"+
						"<label for='mode"+i+"_cl'>"+obj_PDMode.pass+"</label>"+
					 "</td>"+
					 "<td class='text-left verticalCenter fontcolortable1 borderBlack' width='80%'>"+
						"<label for='mode"+i+"_cl''>"+obj_PDMode.text+"</label>"+
					 "</td>"+
					 "</tr>";
					  
			$("#tbl_PD_Mode_CL tbody").append(row_PDMode);
	}
	
/*	var row_PDPartner = "";	
	for (i in response.Tab_Basic_Information[0].partner) {
		var obj_PDPartner = response.Tab_Basic_Information[0].partner[i];
			row_PDPartner = "<option value='"+obj_PDPartner.pass+"'>"+obj_PDPartner.text+"</option>";
					  
			$("#lb_partner_CL").append(row_PDPartner);
	}*/
	
	var row_PDCredit_FirstYear = "";	
	for (i in response.Tab_Basic_Information[0].creditCards_firstYear) {
		var obj_PDCredit_FirstYear = response.Tab_Basic_Information[0].creditCards_firstYear[i];
			row_PDCredit_FirstYear = "<option value='"+obj_PDCredit_FirstYear.pass+"'>"+obj_PDCredit_FirstYear.text+"</option>";
			$("#lb_credit_firstYear_CL").append(row_PDCredit_FirstYear);
	}
	$("#lb_credit_firstYear_CL option[value='AGENT_FEE']").attr("selected","selected");
	
	var row_PDCredit_NextYear = "";	
	for (i in response.Tab_Basic_Information[0].creditCards_toYear) {
		var obj_PDCredit_NextYear = response.Tab_Basic_Information[0].creditCards_toYear[i];
			row_PDCredit_NextYear = "<option value='"+obj_PDCredit_NextYear.pass+"'>"+obj_PDCredit_NextYear.text+"</option>";
			$("#lb_credit_nextYear_CL").append(row_PDCredit_NextYear);
	}
	$("#lb_credit_nextYear_CL option[value='AGENT_FEE']").attr("selected","selected");
	
	var row_PDReinsurance  = "";	
	for (i in response.Tab_Basic_Information[0].reinsurance_Group) {
		var obj_PDReinsurance = response.Tab_Basic_Information[0].reinsurance_Group[i];
			row_PDReinsurance = "<option value='"+obj_PDReinsurance.pass+"'>"+obj_PDReinsurance.text+"</option>";
					  
			$("#lb_reinsurance_CL").append(row_PDReinsurance);
	}
	
	var row_PDAML_CFT  = "";	
	for (i in response.Tab_Basic_Information[0].scoring_AML_CFT) {
		var obj_PDAML_CFT = response.Tab_Basic_Information[0].scoring_AML_CFT[i];
			row_PDAML_CFT = "<option value='"+obj_PDAML_CFT.pass+"'>"+obj_PDAML_CFT.text+"</option>";
					  
			$("#lb_AML_CFT_CL").append(row_PDAML_CFT);
	}
	
	var row_PDDistribution  = "";	
	for (i in response.Tab_Basic_Information[0].distribution_Channel) {
		var obj_PDDistribution = response.Tab_Basic_Information[0].distribution_Channel[i];
			row_PDDistribution = "<option value='"+obj_PDDistribution.pass+"'>"+obj_PDDistribution.text+"</option>";
					  
			$("#lb_distribution_CL").append(row_PDDistribution);
	}
	
	var row_PDSale  = "";	
	for (i in response.Tab_Basic_Information[0].sale_Channel) {
		var obj_PDSale = response.Tab_Basic_Information[0].sale_Channel[i];
			row_PDSale = "<option data-id='"+obj_PDSale.value+"' value='"+obj_PDSale.pass+"'>"+obj_PDSale.text+"</option>";
					  
			$("#lb_saleChannel_CL").append(row_PDSale);
	}
	
	var row_PDLoadnType  = "";	
	for (i in response.Tab_Basic_Information[0].loan_Type) {
		var obj_PDLoanType = response.Tab_Basic_Information[0].loan_Type[i];
			row_PDLoadnType = "<option value='"+obj_PDLoanType.pass+"'>"+obj_PDLoanType.text+"</option>";
					  
			$("#sel_Loan_Type").append(row_PDLoadnType);
	}
	
	var sl_ageCoordinates = "";
	var row_PDUnit_age  = "";	
	for (i in response.Tab_Basic_Information[0].unit_age_coordinates) {
		var obj_PDUnit_Age = response.Tab_Basic_Information[0].unit_age_coordinates[i];
			row_PDUnit_age = "<option value='"+obj_PDUnit_Age.pass+"'>"+obj_PDUnit_Age.text+"</option>";
			sl_ageCoordinates += "<option value='"+obj_PDUnit_Age.pass+"'>"+obj_PDUnit_Age.text+"</option>";		  
			$("#tb_ageRange_CL>tbody td:nth-child(6)>select").append(row_PDUnit_age);
	}
	$("#sl_unit_age_coordinates").val(sl_ageCoordinates);
	
	var row_PDContrat_type  = "";	
	for (i in response.Tab_Basic_Information[0].additional_Contract_Type) {
		var obj_PDContract_type = response.Tab_Basic_Information[0].additional_Contract_Type[i];
			row_PDContrat_type = "<option value='"+obj_PDContract_type.pass+"'>"+obj_PDContract_type.text+"</option>";
					  
			$("#sel_Type_Additional_contract").append(row_PDContrat_type);
	}
	
	var obj_nar = response.Tab_Basic_Information[0].NAR[0];
	$("#rate_cat_NAR").val(obj_nar.pass);
	$("#layout_NAR1").val(obj_nar.file[0].file_format);
	$("#layout_NAR2").val(obj_nar.file[1].file_format);
	$("#sub_cat_NAR").val(obj_nar.sub_rate_cat)
	
}

function show_cal_premium(response){
	var row_age_specific  = "";	
	for (i in response.Tab_cal_insurance[0].Age_Type) {
		var obj_age_specific = response.Tab_cal_insurance[0].Age_Type[i];
			row_age_specific = "<option value='"+obj_age_specific.pass+"'>"+obj_age_specific.text+"</option>";
					  
			$("#lb_age_specific_CL").append(row_age_specific);
	}
	
	var row_SA_P  = "";	
	for (i in response.Tab_cal_insurance[0].FormulaCatId1) {
		var obj_SA_P = response.Tab_cal_insurance[0].FormulaCatId1[i];
			row_SA_P = "<option value='"+obj_SA_P.pass+"'>"+obj_SA_P.text+"</option>";
					  
			$("#lb_SAP_CL").append(row_SA_P);
	}
	
//	var row_cal_premium  = "";	
	var sl_cal = "";
	for (i in response.Tab_cal_insurance[0].FormulaCatId4) {
		var obj_cal_premium = response.Tab_cal_insurance[0].FormulaCatId4[i];
		//	row_cal_premium = "<option value='"+obj_cal_premium.pass+"'>"+obj_cal_premium.text+"</option>";
			sl_cal += "<option value='"+obj_cal_premium.pass+"'>"+obj_cal_premium.text+"</option>";
		//	$("#lb_CalRate_CL").append(row_cal_premium);
	}
	$("#hide_slCalculus").val(sl_cal)
	
	var row_SMI  = "";	
	for (i in response.Tab_cal_insurance[0].FormulaCatId2) {
		var obj_SMI = response.Tab_cal_insurance[0].FormulaCatId2[i];
			row_SMI = "<option value='"+obj_SMI.pass+"'>"+obj_SMI.text+"</option>";
					  
			$("#lb_SMI_CL").append(row_SMI);
	}
	
	var row_MI  = "";	
	for (i in response.Tab_cal_insurance[0].FormulaCatId3) {
		var obj_MI = response.Tab_cal_insurance[0].FormulaCatId3[i];
			row_MI = "<option value='"+obj_MI.pass+"'>"+obj_MI.text+"</option>";
					  
			$("#lb_MI_CL").append(row_MI);
	}
	
	var col_unit = "";	
	for (i in response.Tab_cal_insurance[0].Fix_cov_unit) {
		var obj_col_unit = response.Tab_cal_insurance[0].Fix_cov_unit[i];
			col_unit += "<option value='"+obj_col_unit.pass+"'>"+obj_col_unit.text+"</option>";
	}
	$("#hide_fixCovUnit").val(col_unit);

	var col_factor = "";	
	for (i in response.Tab_cal_insurance[0].Fix_cov_factor) {
		var obj_col_factor = response.Tab_cal_insurance[0].Fix_cov_factor[i];
			col_factor += "<option value='"+obj_col_factor.pass+"'>"+obj_col_factor.text+"</option>";
	}
	$("#hide_fixCovFactor").val(col_factor);
	
	var col_factorMin = "";	
	for (i in response.Tab_cal_insurance[0].Fix_cov_factorMin) {
		var obj_col_factorMin = response.Tab_cal_insurance[0].Fix_cov_factorMin[i];
			col_factorMin += "<option value='"+obj_col_factorMin.pass+"'>"+obj_col_factorMin.text+"</option>";
	}
	$("#hide_minCovFactor").val(col_factorMin);
	
	
	/*var row_cal_Balloon  = "";	
	for (i in response.Tab_cal_insurance[0].cal_Formula_Insurance) {
		var obj_cal_Balloon = response.Tab_cal_insurance[0].cal_Formula_Insurance[i];
			row_cal_Balloon = "<option value='"+obj_cal_Balloon.pass+"'>"+obj_cal_Balloon.text+"</option>";
					  
			$("#lb_cal_balloon_CL").append(row_cal_Balloon);
	}*/
}

function show_use_Rights(response){

	var row = "";
	for(i in response.Tab_Use_Rights[0].change_conditions){
		var obj = response.Tab_Use_Rights[0].change_conditions[i];
		if(obj.pass == "PACKAGE_DECREASE"){
			row += "<div class='col-sm-6'>"+
			"<input type='checkbox' id='ch_change_condition"+i+"' value='"+obj.pass+"'>"+
			"<label for='ch_change_condition"+i+"' class='control-label-left label_input3'>"+obj.text+"</label>"+
		"</div>"	
		}else{
			row += "<div class='col-sm-6'>"+
			"<input type='checkbox' id='ch_change_condition"+i+"' value='"+obj.pass+"' disabled>"+
			"<label for='ch_change_condition"+i+"' class='control-label-left text-muted label_input3'>"+obj.text+"</label>"+
			"</div>"	
		}
	}
	$("#div_change_condition").append(row)
	
	var sl_cal = "";	
	for (i in response.Tab_Use_Rights[0].expropriation_formula) {
		var obj = response.Tab_Use_Rights[0].expropriation_formula[i];
			sl_cal += "<option value='"+obj.pass+"'>"+obj.text+"</option>";
	}
	$("#hide_sl_cal").val(sl_cal);
}

function show_sale_benefits(response){
	
	var row = ""
	var number = 1;
	for(i in response.Tab_Sales_Benefits){
		var obj = response.Tab_Sales_Benefits[i];
		row = "<div class='row'>"+
					"<div class='col-sm-6'>"+
					"<input type='checkbox' id='chk_sale_CL"+number+"' value='"+obj.pass+"' onclick='saleCL_chkval("+number+");'>" +
					"<label for='chk_sale_CL"+number+"'>"+obj.text+"</label>"+
				"</div>"+
				"<div class='col-sm-5'>"+
					"<div class='col-sm-6'>"+
						"<input type='text' class='autoPercent text-right form-control' id='txt_sale_CL"+number+"' value='0.00' data-v-min='0.00' data-v-max='100.00' disabled>"+ 
					"</div>"+
					"<div class='col-sm-1 sale_percent'>%</div>"+
				"</div>"+
			"</div>"
				
		if(obj.text == "อัตราค่านายหน้าต่อเบี้ยประกันภัย"){
			row += "<div class='col-sm-9 panel_style6 displayNone' id='panel_sale_CL'>"+
						"<div class='col-sm-12 padding_all1'>"+
						"<div class='col-sm-2'>Include : </div>"+
						"<div class='col-sm-3 style_col_width20'>"+
							"<input type='checkbox' name='chk_include[]' id='chk_fee' value='Fee'><label for='chk_fee' class='label_input'>Fee</label>"+
						"</div>"+
						"<div class='col-sm-3 style_col_width20'>"+
							"<input type='checkbox' name='chk_include[]' id='chk_vat' value='VAT'><label for='chk_vat' class='label_input'>VAT</label>"+
						"</div>"+
					"</div>"+																																							
				"</div>"
		}
		$("#panel_saleBenefits").append(row)
		number++;
		$(".autoPercent").autoNumeric('init',{vMin: '0.00', vMax: '99.99'});
	}	
}

function show_term_warranty(response){
	
	$('#main_contract').find('option').clone().appendTo('#sl_contractType_healthInsurance1');
	$('#main_contract').find('option').clone().appendTo('#sl_contractType_oldinsurance1');
	$('#main_contract').find('option').clone().appendTo('#sl_contractType_UWConsider1');
	
	var sl_calendar = "";
	for(i in response.Tab_Warranty_terms[0].calendar){
		var obj = response.Tab_Warranty_terms[0].calendar[i];
			sl_calendar = "<option value='"+obj.pass+"'>"+obj.text+"</option>"
			$("#start_period_insure_unit_cl").append(sl_calendar);
			$("#end_period_insure_unit_cl").append(sl_calendar);
			$("#start_age_insure_unit_cl").append(sl_calendar);
			$("#end_age_insure_unit_cl").append(sl_calendar);
	}
	
	var tb_mode = "";
	for(i in response.Tab_Warranty_terms[0].mode){
		var obj = response.Tab_Warranty_terms[0].mode[i];
			tb_mode = "<tr id='tbody_period_term"+i+"'>"+
						"<td id='imgOK_period_term"+i+"' class='verticalCenter text-center'><input id='mode_period_term"+i+"_cl' type='checkbox' value='"+obj.value+"' onclick='validate_input7_cl();' disabled></td>"+						
						"<td class='text-center'>"+obj.pass+"</td>"+
						"<td class='verticalCenter'>"+obj.text+"</td>"+																								
					"</tr>";
		$("#tbl_modeTerms tbody").append(tb_mode)
	}
	
	var tb_formula = "";
	for(i in response.Tab_Warranty_terms[0].cal_Age){
		var obj = response.Tab_Warranty_terms[0].cal_Age[i];
			tb_formula = "<tr id='tbody_cal_age"+i+"'>"+
							"<td id='imgOK_cal_age"+i+"' class='verticalCenter text-center'>" +
								"<input id='mode_cal_age"+i+"_cl' name='rd_formula[]' type='radio' value='"+obj.pass+"' onclick='validate_input9_cl();' disabled></td>"+													
							"<td class='verticalCenter'>"+obj.text+"</td>"+																									
						"</tr>"
		$("#tbl_formulaTerms tbody").append(tb_formula);
	}
	
	var sl_senior = ""
	var lookup_senior = "";
	for(i in response.Tab_Warranty_terms[0].senior){
		var obj = response.Tab_Warranty_terms[0].senior[i];
		if( obj.text == "None"){
			var text = "All";
		}else{
			var text = obj.text;
		}
		sl_senior = "<option value='"+obj.pass+"'>"+text+"</option>";
		$("#tbl_health_insurance_CL #sl_senior_healthInsurance1").append(sl_senior);
		$("#tbl_old_insurance_CL #sl_senior_oldinsurance1").append(sl_senior);
		$("#tbl_UW_consider_CL #sl_senior_UWConsider1").append(sl_senior);
		lookup_senior += "<option value='"+obj.pass+"'>"+text+"</option>"
	}
	$("#lookup_slSenior").val(lookup_senior);
	
	var sl_reInsuranceGroup = "";
	var lookup_reInsuranceGroup = "";
	for(i in response.Tab_Warranty_terms[0].reinsurance_Group){
		var obj = response.Tab_Warranty_terms[0].reinsurance_Group[i];
		if( i == 0){
			sl_reInsuranceGroup = "<option value='NONE' selected>All</option>";
			$("#tbl_health_insurance_CL #sl_Reinsurance_healthInsurance1").append(sl_reInsuranceGroup);
			$("#tbl_old_insurance_CL #sl_Reinsurance_oldinsurance1").append(sl_reInsuranceGroup);
			$("#tbl_UW_consider_CL #sl_Reinsurance_UWConsider1").append(sl_reInsuranceGroup);
			lookup_reInsuranceGroup += "<option value='NONE'>All</option>"
		}
		var text = obj.text;
		sl_reInsuranceGroup = "<option value='"+obj.pass+"'>"+text+"</option>";
		/*if( obj.text == "None"){
			var text = "All";
			sl_reInsuranceGroup = "<option value='"+obj.pass+"' selected>"+text+"</option>";
		}else{
			var text = obj.text;
			sl_reInsuranceGroup = "<option value='"+obj.pass+"'>"+text+"</option>";
		}*/
		$("#tbl_health_insurance_CL #sl_Reinsurance_healthInsurance1").append(sl_reInsuranceGroup);
		$("#tbl_old_insurance_CL #sl_Reinsurance_oldinsurance1").append(sl_reInsuranceGroup);
		$("#tbl_UW_consider_CL #sl_Reinsurance_UWConsider1").append(sl_reInsuranceGroup);
		lookup_reInsuranceGroup += "<option value='"+obj.pass+"'>"+text+"</option>"
	}
	$("#lookup_reinsurance_Group").val(lookup_reInsuranceGroup);
	
	var sl_fillingChannel = "";
	var lookup_fillingChannel = "";
	for(i in response.Tab_Warranty_terms[0].filing_Channel){
		var obj = response.Tab_Warranty_terms[0].filing_Channel[i];
		sl_fillingChannel = "<option value='"+obj.pass+"'>"+obj.text+"</option>";
		$("#tbl_health_insurance_CL #sl_fillingChannel_healthInsurance1").append(sl_fillingChannel);
		$("#tbl_old_insurance_CL #sl_fillingChannel_oldinsurance1").append(sl_fillingChannel);
		$("#tbl_UW_consider_CL #sl_fillingChannel_UWConsider1").append(sl_fillingChannel);
		lookup_fillingChannel += "<option value='"+obj.pass+"'>"+obj.text+"</option>"
	}
	$("#lookup_filing_Channel").val(lookup_fillingChannel)
	
	var sl_saleChannel = "";
	var lookup_saleChannel = "";
	for(i in response.Tab_Warranty_terms[0].sale_Channel){
		var obj = response.Tab_Warranty_terms[0].sale_Channel[i];
		sl_saleChannel = "<option data-id='"+obj.value+"' value='"+obj.pass+"'>"+obj.text+"</option>";
		$("#tbl_health_insurance_CL #sl_saleChannel_healthInsurance1").append(sl_saleChannel);
		$("#tbl_old_insurance_CL #sl_saleChannel_oldinsurance1").append(sl_saleChannel);
		$("#tbl_UW_consider_CL #sl_saleChannel_UWConsider1").append(sl_saleChannel);
		lookup_saleChannel += "<option data-id='"+obj.value+"' value='"+obj.pass+"'>"+obj.text+"</option>"
	}
	$("#lookup_sale_Channel").val(lookup_saleChannel);
	
	var sl_unw = "";  
	for(i in response.Tab_Warranty_terms[0].lu_unw_hist_con){
		var obj = response.Tab_Warranty_terms[0].lu_unw_hist_con[i];
		sl_unw = "<option value='"+obj.pass+"'>"+obj.text+"</option>"
		$("#sl_haveCondition_oldCov").append(sl_unw);
		$("#sl_haveCondition_oldCov3").append(sl_unw);
		$("#sl_haveCondition_oldCov5").append(sl_unw);
		$("#sl_haveCondition_IC").append(sl_unw);
		$("#sl_haveCondition_IC3").append(sl_unw);
		$("#sl_haveCondition_IC5").append(sl_unw);
		$("#sl_haveCondition_SubCov").append(sl_unw);
		$("#sl_haveCondition_SubCov3").append(sl_unw);
		$("#sl_haveCondition_SubCov5").append(sl_unw);
	}
	
	var sl_condition = "";
	for(i in response.Tab_Warranty_terms[0].lu_condition){
		var obj = response.Tab_Warranty_terms[0].lu_condition[i];
		sl_condition = "<option value='"+obj.pass+"'>"+obj.text+"</option>"
		$("#sl_haveCondition_oldCov2").append(sl_condition);
		$("#sl_haveCondition_oldCov4").append(sl_condition);
		$("#sl_haveCondition_IC2").append(sl_condition);
		$("#sl_haveCondition_IC4").append(sl_condition);
		$("#sl_haveCondition_SubCov2").append(sl_condition);
		$("#sl_haveCondition_SubCov4").append(sl_condition);
	}
	
	var sl_compare = "";
	for(i in response.Tab_Warranty_terms[0].lu_compare_2){
		var obj = response.Tab_Warranty_terms[0].lu_compare_2[i];
		sl_compare = "<option value='"+obj.pass+"'>"+obj.text+"</option>"
		$("#sl_NewSA_oldCov").append(sl_compare);
		$("#sl_NewSA_IC").append(sl_compare);
		$("#sl_NewSA_Sub").append(sl_compare);
	}
	
	var sl_factor = "";
	for(i in response.Tab_Warranty_terms[0].Fix_cov_factor){
		var obj = response.Tab_Warranty_terms[0].Fix_cov_factor[i];
		sl_factor += "<option value='"+obj.pass+"'>"+obj.text+"</option>"
	}
	$("#lookup_factor").val(sl_factor);
	
	var sl_unit = "";
	for(i in response.Tab_Warranty_terms[0].Fix_cov_unit){
		var obj = response.Tab_Warranty_terms[0].Fix_cov_unit[i];
		sl_unit += "<option value='"+obj.pass+"'>"+obj.text+"</option>"
	}
	$("#lookup_unit").val(sl_unit);
	$(".sl-factor").append($("#lookup_factor").val())
	$(".sl-unit").append($("#lookup_unit").val())
	
	//unw_hist_rule
	for(i in response.Tab_Warranty_terms[0].unw_hist_rule){
		var obj = response.Tab_Warranty_terms[0].unw_hist_rule[i];
		if( obj.pass == "CLAIM"){
			$("#chk_check_data_CL1").val(obj.pass)
		}else if( obj.pass == "IC"){
			$("#chk_check_data_CL2").val(obj.pass)
		}else if( obj.pass == "SUBSTD"){
			$("#chk_check_data_CL3").val(obj.pass)
		}
	}
	
	/*การตรวจสุขภาพ และการตรวจ Anti-HIV (ตามทุน)*/
	var row_id = 1;
	for(i in response.Tab_Warranty_terms[0].Appendix){
		var obj = response.Tab_Warranty_terms[0].Appendix[i];
		row = "<tr>"+
				"<td class='verticalCenter text-center'><input id='rd_health_check_tbl"+row_id+"' name='rd_health_check[]' type='radio' value='"+obj.Appendix_code+"'></td>"+						
				"<td class='verticalCenter text-center'>"+obj.Abb_name+"</td>"+
				"<td class='verticalCenter'>"+obj.Name_th+"</td>"+																								
			"</tr>"
		$("#tbl_health_check_CL tbody").append(row);
		row_id++;
	}
	$("#tbl_health_check_CL").DataTable({"ordering": false,"paging": false,"bInfo" : false, scrollY: '236px',scrollCollapse: true, "autoWidth": false, fixedHeader: {header: true}, "bSearchable":true,"bSort": true,"bFilter": true,"oLanguage": {"sSearch": "ค้นหา: "}});
	$("#tbl_health_check_CL_wrapper .dataTables_scrollHeadInner table").css({"display":""});
	$("#tbl_health_check_CL_wrapper .dataTables_scrollBody table").css({"display":""});
	$("#tbl_health_check_CL_wrapper .dataTables_scrollHeadInner").css({"width":"100%"});
	$("#tbl_health_check_CL_wrapper .table").css({"width":"100%"});

	/*substd_type*/
	var row_id = 1;
	for(i in response.Tab_Warranty_terms[0].unw_substd_type){
		var obj = response.Tab_Warranty_terms[0].unw_substd_type[i];
		if(i % 4 != 0 || i == 0){
			row = "<div class='col-sm-3 style_col_width20'>"
		}else{
			row = "<div class='text-center' style='padding: 10px 0'></div><div class='col-sm-6 style_input1'>"
		}
			row +=	"<input type='checkbox' name='chk_increase_premium_yes_CL[]' id='chk_increase_premium_yes_CL"+row_id+"' value='"+obj.pass+"'>" +
				"<label for='chk_increase_premium_yes_CL"+row_id+"' class='label_input2'>"+obj.text+"</label>"+
			"</div>"
		$("#div_chk_increase_premium").append(row);
		row_id++;
	}
}

/*การแสดงรายการ กธ. เดิม dropdown*/
function dd1_select(id) {
	var value = $("#"+id).val();
	var ddID = Number(id.replace("sl_contractType_oldinsurance",""));
	//if (value == "") {
		var main_contract2 = document.getElementById("sl_policyType_oldinsurance"+ddID);
	       $("#sl_policyType_oldinsurance"+ddID).find('option').remove();
	        	 var option 		= 	document.createElement("option");
	 			option.value 		= 	"";
	 			option.text 		= 	"--- กรุณาเลือก ---";
	 			main_contract2.add(option);
	 			
	 	var main_contract3 = document.getElementById("sl_productType_oldinsurance"+ddID);
	 	       $("#sl_productType_oldinsurance"+ddID).find('option').remove();
	 	        	 var option 		= 	document.createElement("option");
	 	 			option.value 		= 	"";
	 	 			option.text 		= 	"--- กรุณาเลือก ---";
	 	 			main_contract3.add(option);
	//}
	/*เรียก dropdown*/
	if (main_contract != "" && value != "") {
		$.ajax({
	        type: "POST",
	        url : "ProductCL_Data_default_Servlet",
	        data: {
	        	method 	: "main_contract_level1",
	        	type	: value
	        },       
	        success : function(response) {	
		         ///level2
			       var main_contract2 = document.getElementById("sl_policyType_oldinsurance"+ddID);
			       $("#sl_policyType_oldinsurance1"+ddID).find('option').remove();
			         for (var i = 0; i < response.main_contract2.length; i++) {
			        	 		var option 		= 	document.createElement("option");
			        	 		
			 					option.value 	= 	response.main_contract2[i].pass;
			 					option.text 	= 	response.main_contract2[i].text;
			 					main_contract2.add(option);
			         }			        	       
			        // $("#sl_policyType_oldinsurance"+ddID).prepend(new Option("--- กรุณาเลือก ---", ""));
			       //  $("#sl_policyType_oldinsurance"+ddID+ "option:contains('--- กรุณาเลือก ---')").attr('selected', 'selected');
	        },
	        error : function(response) {	
	        	console.log("get dropdown level2 product error.")
	        }
		});
	}
}

function dd2_select(id) {
	var value = $("#"+id).val();
	var ddID = Number(id.replace("sl_policyType_oldinsurance",""));
	//if (value == "") {
	 	var main_contract3 = document.getElementById("sl_productType_oldinsurance"+ddID);
	 	       $("#sl_productType_oldinsurance"+ddID).find('option').remove();
	 	        	 var option 		= 	document.createElement("option");
	 	 			option.value 		= 	"";
	 	 			option.text 		= 	"--- กรุณาเลือก ---";
	 	 			main_contract3.add(option);
	//}
	if (value != "") {
	var type_lv1  	= $("#sl_contractType_oldinsurance"+ddID).val();	
	var type_lv2 	= $("#sl_policyType_oldinsurance"+ddID).val();	
		$.ajax({
	        type: "POST",
	        url : "ProductCL_Data_default_Servlet",
	        data: {
	        	method 		: "main_contract_level3",
	        	type_lv1	: type_lv1,
	        	type_lv2	: type_lv2
	        },       
	        success : function(response) {	
		         ///level3
			       var main_contract3 = document.getElementById("sl_productType_oldinsurance"+ddID);
			       $("#sl_productType_oldinsurance"+ddID).find('option').remove();
			         for (var i = 0; i < response.main_contract3.length; i++) {
			        	 		var option 		= 	document.createElement("option");
			 					option.value 	= 	response.main_contract3[i].pass;
			 					option.text 	= 	response.main_contract3[i].text;
			 				
			 					main_contract3.add(option);
			         }
			         
			         //$("#sl_productType_oldinsurance"+ddID).prepend(new Option("--- กรุณาเลือก ---", ""));
			         //$("#sl_productType_oldinsurance"+ddID+ "option:contains('--- กรุณาเลือก ---')").attr('selected', 'selected');
	        },
	        error : function(response) {	
	        	console.log("get dropdown level3 product error.")
	        }
		});
	}
}

/*การรวมทุนคุ้มครอง (อำนาจการพิจารณาของ UW) dropdown*/
function ddUW1_select(id) {
	var value = $("#"+id).val();
	var ddID = Number(id.replace("sl_contractType_UWConsider",""));
	//if (value == "") {
		var main_contract2 = document.getElementById("sl_policyType_UWConsider"+ddID);
	       $("#sl_policyType_UWConsider"+ddID).find('option').remove();
	        	 var option 		= 	document.createElement("option");
	 			option.value 		= 	"";
	 			option.text 		= 	"--- กรุณาเลือก ---";
	 			main_contract2.add(option);
	 			
	 	var main_contract3 = document.getElementById("sl_productType_UWConsider"+ddID);
	 	       $("#sl_productType_UWConsider"+ddID).find('option').remove();
	 	        	 var option 		= 	document.createElement("option");
	 	 			option.value 		= 	"";
	 	 			option.text 		= 	"--- กรุณาเลือก ---";
	 	 			main_contract3.add(option);
	//}
	/*เรียก dropdown*/
	if (main_contract != "" && value != "") {
		$.ajax({
	        type: "POST",
	        url : "ProductCL_Data_default_Servlet",
	        data: {
	        	method 	: "main_contract_level1",
	        	type	: value
	        },       
	        success : function(response) {	
		         ///level2
			       var main_contract2 = document.getElementById("sl_policyType_UWConsider"+ddID);
			       $("#sl_policyType_UWConsider"+ddID).find('option').remove();
			         for (var i = 0; i < response.main_contract2.length; i++) {
			        	 		var option 		= 	document.createElement("option");
			        	 		
			 					option.value 	= 	response.main_contract2[i].pass;
			 					option.text 	= 	response.main_contract2[i].text;
			 					main_contract2.add(option);
			         }			        	       
			        // $("#sl_policyType_oldinsurance"+ddID).prepend(new Option("--- กรุณาเลือก ---", ""));
			       //  $("#sl_policyType_oldinsurance"+ddID+ "option:contains('--- กรุณาเลือก ---')").attr('selected', 'selected');
	        },
	        error : function(response) {	
	        	console.log("get dropdown level2 product error.")
	        }
		});
	}
}

function ddUW2_select(id) {
	var value = $("#"+id).val();
	var ddID = Number(id.replace("sl_policyType_UWConsider",""));
	//if (value == "") {
	 	var main_contract3 = document.getElementById("sl_productType_UWConsider"+ddID);
	 	       $("#sl_productType_UWConsider"+ddID).find('option').remove();
	 	        	 var option 		= 	document.createElement("option");
	 	 			option.value 		= 	"";
	 	 			option.text 		= 	"--- กรุณาเลือก ---";
	 	 			main_contract3.add(option);
	//}
	if (value != "") {
	var type_lv1  	= $("#sl_contractType_UWConsider"+ddID).val();	
	var type_lv2 	= $("#sl_policyType_UWConsider"+ddID).val();	
		$.ajax({
	        type: "POST",
	        url : "ProductCL_Data_default_Servlet",
	        data: {
	        	method 		: "main_contract_level3",
	        	type_lv1	: type_lv1,
	        	type_lv2	: type_lv2
	        },       
	        success : function(response) {	
		         ///level3
			       var main_contract3 = document.getElementById("sl_productType_UWConsider"+ddID);
			       $("#sl_productType_UWConsider"+ddID).find('option').remove();
			         for (var i = 0; i < response.main_contract3.length; i++) {
			        	 		var option 		= 	document.createElement("option");
			 					option.value 	= 	response.main_contract3[i].pass;
			 					option.text 	= 	response.main_contract3[i].text;
			 				
			 					main_contract3.add(option);
			         }
			         
			         //$("#sl_productType_oldinsurance"+ddID).prepend(new Option("--- กรุณาเลือก ---", ""));
			         //$("#sl_productType_oldinsurance"+ddID+ "option:contains('--- กรุณาเลือก ---')").attr('selected', 'selected');
	        },
	        error : function(response) {	
	        	console.log("get dropdown level3 product error.")
	        }
		});
	}
}

/*การรวมเงินเอาประกันภัยเพื่อตรวจสุขภาพ / การแสดงรายการ กธ. เดิม / การรวมทุนคุ้มครอง (อำนาจการพิจารณาของ UW)
 * 
 *   
 * เปลี่ยนมาใช้ function เดียวกัน dropdown*/
function ddHeath1_select(id) {
	
	if(id.includes("sl_contractType_healthInsurance")){
		var ddID = Number(id.replace("sl_contractType_healthInsurance",""));
		var main_contract22 = "sl_policyType_healthInsurance";
		var main_contract33 = "sl_productType_healthInsurance";
	}else if(id.includes("sl_contractType_oldinsurance")){
		var ddID = Number(id.replace("sl_contractType_oldinsurance",""));
		var main_contract22 = "sl_policyType_oldinsurance";
		var main_contract33 = "sl_productType_oldinsurance";
	}else if(id.includes("sl_contractType_UWConsider")){
		var ddID = Number(id.replace("sl_contractType_UWConsider",""));
		var main_contract22 = "sl_policyType_UWConsider";
		var main_contract33 = "sl_productType_UWConsider";
	}
	
	var value = $("#"+id).val();
	//if (value == "") {
		var main_contract2 = document.getElementById(""+main_contract22+ddID);
	       $("#"+main_contract22+ddID).find('option').remove();
	        	 var option 		= 	document.createElement("option");
	 			option.value 		= 	"";
	 			option.text 		= 	"All";
	 			main_contract2.add(option);
	 			
	 	var main_contract3 = document.getElementById(main_contract33+ddID);
	 	       $("#"+main_contract33+ddID).find('option').remove();
	 	        	 var option 		= 	document.createElement("option");
	 	 			option.value 		= 	"";
	 	 			option.text 		= 	"All";
	 	 			main_contract3.add(option);
	//}
	/*เรียก dropdown*/
	if (main_contract != "" && value != "") {
		$.ajax({
	        type: "POST",
	        url : "ProductCL_Data_default_Servlet",
	        data: {
	        	method 	: "main_contract_level1",
	        	type	: value
	        },       
	        success : function(response) {	
		         ///level2
			       var main_contract2 = document.getElementById(""+main_contract22+ddID);
	
			       $("#"+main_contract22+ddID +"option").remove();
			         for (var i = 0; i < response.main_contract2.length; i++) {
			        	 		var option 		= 	document.createElement("option");
			        	 		
			 					option.value 	= 	response.main_contract2[i].pass;
			 					option.text 	= 	response.main_contract2[i].text;
			 					main_contract2.add(option);
			         }	
	        },
	        error : function(response) {	
	        	console.log("get dropdown level2 product error.")
	        }
		});
	}
}

function ddHeath2_select(id) {
	
	if(id.includes("sl_policyType_healthInsurance")){
		var ddID = Number(id.replace("sl_policyType_healthInsurance",""));
		var main_contract11 = "sl_contractType_healthInsurance";
		var main_contract22 = "sl_policyType_healthInsurance";
		var main_contract33 = "sl_productType_healthInsurance";
	}else if(id.includes("sl_policyType_oldinsurance")){
		var ddID = Number(id.replace("sl_policyType_oldinsurance",""));
		var main_contract11 = "sl_contractType_oldinsurance";
		var main_contract22 = "sl_policyType_oldinsurance";
		var main_contract33 = "sl_productType_oldinsurance";
	}else if(id.includes("sl_policyType_UWConsider")){
		var ddID = Number(id.replace("sl_policyType_UWConsider",""));
		var main_contract11 = "sl_contractType_UWConsider";
		var main_contract22 = "sl_policyType_UWConsider";
		var main_contract33 = "sl_productType_UWConsider";
	}
	
	var value = $("#"+id).val();
	//if (value == "") {
	 	var main_contract3 = document.getElementById(""+main_contract33+ddID);
	 	       $("#"+main_contract33+ddID).find('option').remove();
	 	        	 var option 		= 	document.createElement("option");
	 	 			option.value 		= 	"";
	 	 			option.text 		= 	"All";
	 	 			main_contract3.add(option);
	//}
	if (value != "" && value != "0") {
		
	var type_lv1  	= $("#"+main_contract11+ddID).val();	
	var type_lv2 	= $("#"+main_contract22+ddID).val();	
		$.ajax({
	        type: "POST",
	        url : "ProductCL_Data_default_Servlet",
	        data: {
	        	method 		: "main_contract_level3",
	        	type_lv1	: type_lv1,
	        	type_lv2	: type_lv2
	        },       
	        success : function(response) {	
		         ///level3
			       var main_contract3 = document.getElementById(""+main_contract33+ddID);
			       $("#"+main_contract33+ddID).find('option').remove();
				       var option 		= 	document.createElement("option");
		 	 			option.value 		= 	"";
		 	 			option.text 		= 	"All";
		 	 			main_contract3.add(option);
			         for (var i = 0; i < response.main_contract3.length; i++) {
			        	 		var option 		= 	document.createElement("option");
			 					option.value 	= 	response.main_contract3[i].pass;
			 					option.text 	= 	response.main_contract3[i].text;
			 				
			 					main_contract3.add(option);
			         }
			         
			        // $("#"+main_contract33+ddID).prepend(new Option("--- กรุณาเลือก ---", ""));
			        // $("#"+main_contract33+ddID +"option:contains('--- กรุณาเลือก ---')").attr('selected', 'selected');
	        },
	        error : function(response) {	
	        	console.log("get dropdown level3 product error.")
	        }
		});
	}
}

/*Tab ข้อกำหนด หาประเภทกรมธรรม์*/
function search_covCat2(id,obj,tbl,sl_contract,sl_policy,sl_product){
	var value = $("#"+id).val();
	var ddID = Number(id.replace(sl_contract,""));
	var index = Number(ddID) - 1;
	if (value == "") {
		var main_contract2 = document.getElementById(sl_policy+ddID);
	       $("#"+sl_policy+ddID+ "option").remove();
	        	 var option 		= 	document.createElement("option");
	 			option.value 		= 	"";
	 			option.text 		= 	"--- กรุณาเลือก ---";
	 			main_contract2.add(option);
	 			
	 	var main_contract3 = document.getElementById(sl_product+ddID);
	 	       $("#"+sl_product+ddID+ "option").remove();
	 	        	 var option 		= 	document.createElement("option");
	 	 			option.value 		= 	"";
	 	 			option.text 		= 	"--- กรุณาเลือก ---";
	 	 			main_contract3.add(option);
	}
	
	/*เรียก dropdown*/
	if (value != "") {
		$.ajax({
	        type: "POST",
	        url : "ProductCL_Data_default_Servlet",
	        async: false,
	        data: {
	        	method 	: "main_contract_level1",
	        	type	: value
	        },       
	        success : function(response) {	
		         ///level2
			       var main_contract2 = document.getElementById(sl_policy+ddID);
			       $("#"+sl_policy+ddID +"option").remove();
			         for (var i = 0; i < response.main_contract2.length; i++) {
			        	 		var option 		= 	document.createElement("option");
			 					option.value 	= 	response.main_contract2[i].pass;
			 					option.text 	= 	response.main_contract2[i].text;
			 					main_contract2.add(option);
			         }	
			         
			         $("#"+tbl).find("tbody>tr").eq(index).find("td:nth-child(3) select>option[value="+obj.cov_cat_lv_2+"]").attr("selected",true);
			         		
			        		var type_lv1  	= $("#"+sl_contract+ddID).val();	
			        		var type_lv2 	= $("#"+sl_policy+ddID).val();	
			        		if (type_lv1 != "0" && type_lv2 != "0") {
			        			$.ajax({
			        		        type: "POST",
			        		        url : "ProductCL_Data_default_Servlet",
			        		        async:false,
			        		        data: {
			        		        	method 		: "main_contract_level3",
			        		        	type_lv1	: type_lv1,
			        		        	type_lv2	: type_lv2
			        		        },       
			        		        success : function(response) {	
			        			         ///level3
			        				       var main_contract3 = document.getElementById(sl_product+ddID);
			        				       $("#"+sl_product+ddID+ "option").remove();
			        				         for (var i = 0; i < response.main_contract3.length; i++) {
			        				        	 		var option 		= 	document.createElement("option");
			        				 					option.value 	= 	response.main_contract3[i].pass;
			        				 					option.text 	= 	response.main_contract3[i].text;
			        				 				
			        				 					main_contract3.add(option);
			        				         }
			        				         $("#"+tbl).find("tbody>tr").eq(index).find("td:nth-child(4) select>option[value="+obj.cov_cat_lv_3+"]").attr("selected",true);
			        		        },
			        		        error : function(response) {	
			        		        	console.log("get dropdown level3 product error.")
			        		        }
			        			});
			        		}
	        },
	        error : function(response) {	
	        	console.log("get dropdown level2 product error.")
	        }
		});
	}
}

$("#sel_Type_Additional_contract").change(function(){
	var selected_text = $(this).find("option:selected").val();
	if(selected_text == "NONE"){
		//$("#tb_Additional_contract tbody>tr").remove();
		/*/--/*/

		var tblID 		= "#tb_Additional_contract";
		var lastImgOK = $(tblID+" >tbody>tr[data-level='1']:last>td:first").attr("id") || 0;	
		var numberImgOK = 0;
		if(lastImgOK == 0){
			numberImgOK = 1;
		}else{
			numberImgOK = Number(lastImgOK.replace("imgOK_",""))+1;
		}
		for(var i = 1;i<=numberImgOK;i++)
			{
				var checked_type = $(tblID+" #tr_Additional_contract_"+i).find("td:nth-child(3)").text();
				var checked_id = $(tblID+" #tr_Additional_contract_"+i).find("td:nth-child(2) label").text();
				var prd_rider_code = $(tblID+" #tr_Additional_contract_"+i).find("td:nth-child(2) input[type='hidden']").val();
				
					
					/*SA Package*/
					$("#tb_plan_YRT>tbody tr").each(function(){
						var SA_type = $(this).attr('data-key'); 
						if(SA_type == checked_id){
							deleteTableRow(this);
						}
					});
					
					/*บันทึกสลักหลังและพิกัดอายุ*/
					$("#tb_ageRange_CL>tbody tr").each(function(){
						var age_type = $(this).find("td:nth-child(1) label").text();
						if(age_type == checked_id){
							deleteTableRow(this);
						}
					});
					
					/*TAB : ตำนวณเบี้ยประกัน ลบตารางการคำนวณจำนวนเงินเอาประกันภัย*/
					var flag_serie = false;
					$("#tb_Calculate_insurance tbody>tr").each(function(){
						if(checked_id == $(this).find('td:nth-child(1) label').text()){
							$(this).remove();
							flag_serie = true;
						}else if($(this).find('td:nth-child(1) label').text() != ""){
							flag_serie = false;
						}else if(flag_serie){
							$(this).remove();
						}
					});
					
					/*TAB : ตำนวณเบี้ยประกัน ลบการคำนวณเบี้ยประกัน*/
					$("#tb_Calculate_insurance2 tbody>tr").each(function(){
						if(checked_id == $(this).find('td:nth-child(1) label').text()){
							$(this).remove();
						}
					});
					
					/*TAB : การใช้สิทธิ์ตามกรมธรรม์ ลบการเวนคืน กธ.*/
					$("#tb_policyholder tbody>tr").each(function(){
						if(checked_id == $(this).find('td:nth-child(1) label').text()){
							$(this).remove();
						}
					});
					
					/*TAB : ข้อกำหนดการรับประกัน ลบ Tab policy*/
					$("#tab_policy_panel li").each(function(){
						if(checked_id == $(this).find('a').text()){
							$(this).remove();
						}
					})
					
					/*TAB : ข้อกำหนดการรับประกัน ลบตาราง จำนวนเงินเอาประกันภัยสูงสุด (ต่อราย)*/
					$("#tbl_insure_single tbody>tr").each(function(){
						if(prd_rider_code == $(this).find('td:nth-child(1) input[type="checkbox"]').val()){
							$(this).remove();
						}
					})
					
					/*TAB : ข้อกำหนดการรับประกัน ลบตาราง การรับแบบเพิ่มเบี้ยพิเศษ */
					$("#tbl_increase_premium_CL tbody>tr").each(function(){
						if(checked_id == $(this).find('td:nth-child(1) input[type="hidden"]').val()){
							$(this).remove();
						}
					})
					
					/*เก็บค่าที่ลบไป*/
					if($('#arr_prd_rider_code_delete').val() != ""){
						var arr_prd_rider_code = new Array($('#arr_prd_rider_code_delete').val());
					}else{
						var arr_prd_rider_code = new Array();
					}
						arr_prd_rider_code.push(prd_rider_code);
						
					$('#arr_prd_rider_code_delete').val(arr_prd_rider_code);
					deleteTableRow(tblID+">tbody>tr[data-group="+i+"]");
					deleteTableRow(tblID+" #tr_Additional_contract_"+i);										
				
			
		}
			if($("#div_tb_Additional_contract").innerHeight() <= 264){
				$("#div_tb_Additional_contract").removeClass("settableproduct");
			}

			//validate *
			if( $("#tb_Additional_contract tbody>tr").length > 0){
				$("#validate_input11_cl").hide();
			}else{
				$("#validate_input11_cl").show();
			}
		
		/*/--/*/		
			$("#validate_input11_cl").hide();
			
	}else{
		if($("#tb_Additional_contract tbody>tr").length == 0){
			$("#validate_input11_cl").show();
		}
	}
	
	if(selected_text == "PACKAGE_SA"){
		$("#div_plan_YRT").css("display","block");
	}else{
		$("#div_plan_YRT").css("display","none");
	}
	
})

$("#txb_sa_package").on("blur",function(){
	
	var num_tbl = $("#tb_plan_YRT>tbody>tr").length;
	//if(num_tbl > 0){
		$("#tb_plan_YRT").remove();
	//}
	
		var num_col = $(this).val();
		var table_row = "<table class='table table-bordered ' style='width:1200px;' id='tb_plan_YRT'>"+
						"<thead>"+
						"<tr>"+		
							"<th width='3%' class='bg-primary borderBlack' rowspan='2'></th>"+								
							"<th class='text-center verticalCenter bg-primary borderBlack' rowspan='2'>ประเภทความคุ้มครอง</th>"+
							"<th class='text-center verticalCenter bg-primary borderBlack' rowspan='2'>Option Payment</th>"+																				
							"<th class='text-center verticalCenter bg-primary borderBlack' colspan='"+num_col+"'>SA Package</th>"+										
						"</tr>";
		  if(num_col != ""){
		   table_row += "<tr>";
		  for(var i=1; i<=num_col; i++){
		   table_row += "<th class='text-center verticalCenter bg-primary borderBlack th_chkbox'><span id='plan_span"+i+"'>"+i+"</span></th>";														
		  }					
		   table_row += "</tr>";
		  }						
		   table_row += "</thead>"+
						"<tbody>";
		   
		   /*แบบประกันหลัก*/
		   var num_Baseplan = $("#tb_PM_Rate>tbody tr").length;	
		   var baseplan_key = $("#tb_PM_Rate>tbody tr").eq(0).find("td:nth-child(1) label").text();
		   if(num_Baseplan > 0){
			   table_row += "<tr id='tr_plan_YRT1' data-id='1' data-key='"+baseplan_key+"'>"+	
							"<td class='text-center verticalCenter borderBlack' id='imgOKPlan_1' onclick='imgCheckbox(this.id);'><i class='glyphicon glyphicon-edit'></i></td>"+										
							"<td class='text-center verticalCenter borderBlack'>"+
								"<label class='font-term-purple font-bold'>D</label>"+
							"</td>"+
							"<td class='text-center verticalCenter borderBlack font-bold'>Lump Sum</td>	";	
		   
			   for(var i=1; i<=num_col; i++){
			   table_row += "<td class='text-center verticalCenter borderBlack'>"+
								"<input type='text' class='auto form-control margin-padding0 text-right width40px' data-v-min='0' data-v-max='9999999999' value=''>"+
							"</td>";
			   }
			   table_row += "</tr>";
		   
		   }
		   
		   /*สัญญาเพิ่มเติม*/
		   var num_Rider = $("#tb_Additional_contract>tbody tr").length;
		   if(num_Rider > 0){	
			   for(var a=0; a<num_Rider; a++){
				   var rider_id = Number($("#tb_Additional_contract>tbody tr").eq(a).attr("data-id"))+1;
				   var rider_key = $("#tb_Additional_contract>tbody tr").eq(a).find("td:nth-child(2) label").text();
				   var rider_type = $("#tb_Additional_contract>tbody tr").eq(a).find("td:nth-child(3)").text();
				   
				   if(rider_type == "TTD"){
					   option_payment = "Monthly";
				   }else{
					   option_payment = "Lump Sum";
				   }
				   
				   table_row += "<tr id='tr_plan_YRT"+rider_id+"' data-id='"+rider_id+"' data-key='"+rider_key+"'>"+
					"<td class='text-center verticalCenter borderBlack' id='imgOKPlan_"+rider_id+"' onclick='imgCheckbox(this.id);'><i class='glyphicon glyphicon-edit'></i></td>"+										
					"<td class='text-center verticalCenter borderBlack'>"+
						"<label class='font-term-green font-bold'>"+rider_type+"</label>"+
					"</td>"+
					"<td class='text-center verticalCenter borderBlack font-bold'>"+option_payment+"</td>	";	

				  for(var i=1; i<=num_col; i++){
				  table_row += "<td class='text-center verticalCenter borderBlack'>"+
									"<input type='text' class='auto form-control margin-padding0 text-right width40px' data-v-min='0' data-v-max='9999999999' value=''>"+
								"</td>";
				  }
				  table_row += "</tr>";
			   }			  
		   }
		   
		    table_row += "</tbody>"+
				         "</table>";
		    
		    $("#div_tb_plan_YRT").append(table_row);
		    $('.auto').autoNumeric('init');
		    $("#lb_saPackage, #btn_plan_YRT").css("display","block");
	
});

$("#menu_CL_5").click(function(){	
	$("#chk_check_data_CL4").prop("checked",true)
	$("#chk_check_data_CL5").prop("checked",true)
	
	var contract_value = $("#sel_Type_Additional_contract option:selected").val();
	var num_tbl = $("#tbl_YRTPLan>tbody>tr").length;	
	if(contract_value == "PACKAGE_SA"){
		$("#row_cal_amount_CL").css("display","none");	
		$("#row_YRTPlan").css("display","block");
		$("#panel_max_amount_insureCL").css("display","none");
		$("#panel_max_amount_insureYRT").css("display","block");
		
		$("input[name='chk_first_pay_premium_CL[]'], input[name='rd_fax_app_CL[]']").prop("checked", false);
		$("#first_premium_payment, #fax_app_label").css("color","#ddd");
		$("label[for='chk_first_pay_premium_CL1'], label[for='chk_first_pay_premium_CL2']").css("color","#ddd");
		$("label[for='rd_fax_app_CL1'], label[for='rd_fax_app_CL2']").css("color","#ddd");
		
		$("#chk_increase_premium_yes_CL4").prop("disabled", true);
		$("#chk_increase_premium_yes_CL4").prop("checked", false);
		$("label[for='chk_increase_premium_yes_CL4']").css("color","#ddd");
		
		/*package tbl clone*/
		if(num_tbl > 0){
			$("#tbl_YRTPLan").remove();
		}
		$("#tb_plan_YRT").clone().prop("id","tbl_YRTPLan").appendTo("#div_tbl_YRTPLan");
		$("#tbl_YRTPLan>thead th:first, #tbl_YRTPLan>tbody td:first-child").css("display","none");
		$("#tbl_YRTPLan>tbody td>input[type='text']").attr("readonly","readonly");
		
		var num_plan = $("#tbl_YRTPLan>thead th.th_chkbox").length;
		
		$("#tbl_YRTPLan>thead th.th_chkbox").each(function(){
			var plan_text = Number($(this).find("span").text());
			$("<div class='chk_plan'><input type='checkbox' id='chk_planYRT"+plan_text+"'></div>").insertBefore($(this).find("span"));
		});
		
	}else{
		$("#row_cal_amount_CL").css("display","block");
		$("#row_YRTPlan").css("display","none");	
		$("#panel_max_amount_insureCL").css("display","block");
		$("#panel_max_amount_insureYRT").css("display","none");
	}
	
	/*validate tab ข้อกำหนด*/
	validate_input6_cl();
	validate_input7_cl();
	validate_input8_cl();
	validate_input9_cl();
	validate_input10_cl();
	
	/*checkbox การชำระเบี้ยประกันภัยปีแรก*/
	if($("#chk_cal_pay_premium_CL1").is(':checked')){
		$("#chk_first_pay_premium_CL1").prop("checked",true)
	}else{
		$("#chk_first_pay_premium_CL1").prop("checked",false)
	}
	if($("#chk_cal_pay_premium_CL2").is(':checked')){
		$("#chk_first_pay_premium_CL2").prop("checked",true)
	}else{
		$("#chk_first_pay_premium_CL2").prop("checked",false)
	}
	
	/*เพิ่ม row ของ Tab-ข้อกำหนดการรับประกัน || Lookup ตาราง-การคำนวณจำนวนเงินเอาประกันภัย*/
	var dropdownUnit = $("#hide_fixCovUnit").val();
	var dropdownOF1 = $("#hide_fixCovFactor").val();
	var dropdownOF2 = $("#hide_fixCovFactor").val();
	$("#tbl_cal_amount_CL tbody>tr").remove();
	var row_appned = 0;
	$("#tb_Calculate_insurance tbody>tr").each(function(i){
		var level = $(this).data('level');
		if(level == 1){
			var cov_code = $(this).find('td:nth-child(1) label').text();
			var type = $(this).find('td:nth-child(2) label').text();
			var cov_type = $(this).find('td:nth-child(1) #cov_type').val();
			var from_sa = $(this).find('td:nth-child(4) input').val();
			var to_sa = $(this).find('td:nth-child(5) input').val();
			var count_money = $(this).find('td:nth-child(6) input').val();
			var unit_money = $(this).find('td:nth-child(7) select').val();
			var factor_money = $(this).find('td:nth-child(8) select').val();
			var bath = $(this).find('td:nth-child(9) input').val();
			var factory_bath = $(this).find('td:nth-child(10) select').val();
			
			var font_color = "";
			if(cov_type == "B"){
				font_color = "font-term-purple";
			}else if(cov_type == "E"){
				font_color = "font-term-yellow";
			}else{
				font_color = "font-term-green";
			}
			
			var row_cal = "<tr id=\"tr_cal_amount_"+i+"\" data-id=\""+i+"\" data-parent=\"0\" data-level=\"1\" data-key='' >"+
			"<td width=\"14%\" class=\"text-center verticalCenter fontcolortable1 borderBlack\">"
			 if(i == 0){
				 row_cal += "<label class='"+font_color+" font-bold'>"+cov_code+"</label>"+
				 				"<input type='hidden' id='prd_rider_code' value=''>"+
				 				"<input type='hidden' id='serie_no' value=''>"+
				 				"<input type='hidden' id='seq' value=''>"
			 }else{
				 row_cal += "<label class='"+font_color+" font-bold'>"+cov_code+"</label>"+
				 				"<input type='hidden' id='prd_rider_code' value=''>"+
				 				"<input type='hidden' id='serie_no' value=''>"+
				 				"<input type='hidden' id='seq' value=''>"
			 }
			row_cal += "</td>"
			if(i == 0){
				row_cal +="<td width=\"7%\"class=\"text-center verticalCenter fontcolortable1 borderBlack\"><label class='"+font_color+" font-bold'>"+type+"</label></td>"
			}else{
				row_cal += "<td width=\"7%\"class=\"text-center verticalCenter fontcolortable1 borderBlack\"><label class='"+font_color+" font-bold'>"+type+"</label></td>"
			}
			row_cal +=
					"<td width=\"3%\" class=\"text-center verticalCenter borderBlack\">"+
					/*	"<i class=\"glyphicon glyphicon-plus icon-blue-circle\"  data-id=\'"+i+"\' data-topic=\'"+i+"\' data-type=\'"+i+"\' id=\"addrowMenu3_"+i+"\"></i>"+*/
					"</td>"+	
					"<td width=\"7%\"class=\"text-right verticalCenter borderBlack\">"+
					"<input type='text' class='auto form-control text-center width40px' value='"+from_sa+"' data-v-min='0.00' data-v-max='999.99' disabled>"+
					"</td>"+
					"<td width=\"7%\" class=\"text-right verticalCenter borderBlack\">"+
					"<input type='text' class='auto form-control margin-padding0 text-center width40px' value='"+to_sa+"' data-v-min='0.00' data-v-max='999.99' disabled>"+
					"</td>"+
					"<td width=\"10%\"class=\"text-right verticalCenter borderBlack\">"+
					"<input type='text' class='auto form-control margin-padding0 text-center width40px' value='"+count_money+"' data-v-min='0.00' data-v-max='999999999.99' disabled>"+
					"</td>"+
					"<td width=\"14%\" class=\"text-right verticalCenter borderBlack\">"+
						"<select class=\"form-control\" disabled><option value='NONE' >None</option>"+dropdownUnit+"</select></td>"+
					"<td width=\"14%\" class=\"text-right verticalCenter borderBlack\">"+
						"<select class=\"form-control\" disabled><option value='NONE' >None</option>"+dropdownOF1+"</select></td>"+
					"<td width=\"10%\" class=\"text-right verticalCenter borderBlack\">"+
					"<input type='text' class='auto form-control margin-padding0 text-center width40px' value='"+bath+"' data-v-min='0.00' data-v-max='999999999.99' disabled>"+
					"<td width=\"14%\" class=\"text-right verticalCenter borderBlack\">"+
					"<select class=\"form-control\" disabled><option value='NONE' >None</option>"+dropdownOF1+"</select></td>"+
				"</tr>";		
			$("#tbl_cal_amount_CL tbody").append(row_cal);
			$("#tbl_cal_amount_CL tbody>tr").eq(row_appned).find("td:nth-child(7) option[value="+unit_money+"]").attr("selected",true);
			$("#tbl_cal_amount_CL tbody>tr").eq(row_appned).find("td:nth-child(8) option[value="+factor_money+"]").attr("selected",true);
			$("#tbl_cal_amount_CL tbody>tr").eq(row_appned).find("td:nth-child(10) option[value="+factory_bath+"]").attr("selected",true);
			row_appned++;
		}else{
			//var cov_code = $(this).find('td:nth-child(1) label').text();
			//var type = $(this).find('td:nth-child(2) label').text();
			var from_sa = $(this).find('td:nth-child(4) input').val();
			var to_sa = $(this).find('td:nth-child(5) input').val();
			var count_money = $(this).find('td:nth-child(6) input').val();
			var unit_money = $(this).find('td:nth-child(7) select').val();
			var factor_money = $(this).find('td:nth-child(8) select').val();
			var bath = $(this).find('td:nth-child(9) input').val();
			var factory_bath = $(this).find('td:nth-child(10) select').val();
			
			var row_cal = "<tr id=\"tr_cal_amount_"+i+"\" data-id=\""+i+"\" data-parent=\"0\" data-level=\"1\" data-key='' >"+
			"<td width=\"14%\" class=\"text-center verticalCenter fontcolortable1 borderBlack\">"
			 "<label class='font-term-green font-bold'></label>"+
				 				"<input type='hidden' id='prd_rider_code' value=''>"+
				 				"<input type='hidden' id='serie_no' value=''>"+
				 				"<input type='hidden' id='seq' value=''>"
			row_cal += "</td>"
			row_cal += "<td width=\"7%\"class=\"text-center verticalCenter fontcolortable1 borderBlack\"><label class='font-term-green font-bold'></label></td>"
			row_cal +=
					"<td width=\"3%\" class=\"text-center verticalCenter borderBlack\">"+
					/*	"<i class=\"glyphicon glyphicon-plus icon-blue-circle\"  data-id=\'"+i+"\' data-topic=\'"+i+"\' data-type=\'"+i+"\' id=\"addrowMenu3_"+i+"\"></i>"+*/
					"</td>"+	
					"<td width=\"7%\"class=\"text-right verticalCenter borderBlack\">"+
					"<input type='text' class='auto form-control text-center width40px' value='"+from_sa+"' data-v-min='0.00' data-v-max='999.99' disabled>"+
					"</td>"+
					"<td width=\"7%\" class=\"text-right verticalCenter borderBlack\">"+
					"<input type='text' class='auto form-control margin-padding0 text-center width40px' value='"+to_sa+"' data-v-min='0.00' data-v-max='999.99' disabled>"+
					"</td>"+
					"<td width=\"10%\"class=\"text-right verticalCenter borderBlack\">"+
					"<input type='text' class='auto form-control margin-padding0 text-center width40px' value='"+count_money+"' data-v-min='0.00' data-v-max='999999999.99' disabled>"+
					"</td>"+
					"<td width=\"14%\" class=\"text-right verticalCenter borderBlack\">"+
						"<select class=\"form-control\" disabled><option value='NONE' >None</option>"+dropdownUnit+"</select></td>"+
					"<td width=\"14%\" class=\"text-right verticalCenter borderBlack\">"+
						"<select class=\"form-control\" disabled><option value='NONE' >None</option>"+dropdownOF1+"</select></td>"+
					"<td width=\"10%\" class=\"text-right verticalCenter borderBlack\">"+
					"<input type='text' class='auto form-control margin-padding0 text-center width40px' value='"+bath+"' data-v-min='0.00' data-v-max='999999999.99' disabled>"+
					"<td width=\"14%\" class=\"text-right verticalCenter borderBlack\">"+
					"<select class=\"form-control\" disabled><option value='NONE' >None</option>"+dropdownOF1+"</select></td>"+
				"</tr>";		
			$("#tbl_cal_amount_CL tbody").append(row_cal);
			$("#tbl_cal_amount_CL tbody>tr").eq(row_appned).find("td:nth-child(7) option[value="+unit_money+"]").attr("selected",true);
			$("#tbl_cal_amount_CL tbody>tr").eq(row_appned).find("td:nth-child(8) option[value="+factor_money+"]").attr("selected",true);
			$("#tbl_cal_amount_CL tbody>tr").eq(row_appned).find("td:nth-child(10) option[value="+factory_bath+"]").attr("selected",true);
			row_appned++;
		}
	});

});
$("#ch_max_amount_insure_YRT1").click(function(){	
	if($(this).prop('checked') == true){
		$("#div_max_amount_insure_YRT").show();
	}else{
		$("#div_max_amount_insure_YRT").hide();
		$("#tbl_max_amount_insure_YRT>tbody input[type='checkbox']").prop("checked", false);
		$("#tbl_max_amount_insure_YRT>tbody input[type='text']").prop("disabled", true);
		$("#tbl_max_amount_insure_YRT>tbody input[type='text']").val("");
	}
});

$("#ch_max_amount_insure_YRT2").click(function(){
	if($(this).prop('checked') == true){
		$("#amount_numofpolicy").prop("disabled", false);
	}else{
		$("#amount_numofpolicy").prop("disabled", true);
		$("#amount_numofpolicy").val("");
	}
});

function amount_coverageYRT(id){
	var imgOK = "imgOK_amount_covYRT"+id;
	
	if($('#'+imgOK).is(':checked')){							
		$('#max_amount_cov'+id+"_YRT").prop("disabled", false);	
	}
	else{					
		$('#max_amount_cov'+id+"_YRT").prop("disabled", true);	
		$('#max_amount_cov'+id+"_YRT").val("");	
	}
}

/*ตรวจสอบข้อมูลเคลม กธ. เดิม*/
$("#chk_check_data_CL1").click(function(){
	if($(this).prop('checked') == true){
		$("#panel_oldCov_CL").show();
		$("#notCondition_oldCov").prop("checked",true);
	}else{
		$("#panel_oldCov_CL").hide();
		$("#panel_Condition_oldCov").hide();
		$("#sl_haveCondition_oldCov option:contains('None')").attr('selected', 'selected');
		$("#sl_haveCondition_oldCov").prop("disabled", true);
		$("input[name='chk_SA_oldCov[]']").prop("checked", false);
		$("#sl_NewSA_oldCov option:contains('None')").attr('selected', 'selected');
		$("#sl_TotalSA_oldCov option:contains('None')").attr('selected', 'selected');	
		$("#amount_NewSA_oldCov, #amount_TotalSA_oldCov, #sl_NewSA_oldCov, #sl_TotalSA_oldCov").prop("disabled", true);
		$("#amount_NewSA_oldCov, #amount_TotalSA_oldCov").val("0.00");
	}
});

$("#notCondition_oldCov").click(function(){
	if($(this).prop('checked') == true){
		$("#panel_Condition_oldCov").hide();
		$("#sl_haveCondition_oldCov option:contains('None')").attr('selected', 'selected');
		$("#sl_haveCondition_oldCov2 option:contains('None')").attr('selected', 'selected');
		$("#sl_haveCondition_oldCov3 option:contains('None')").attr('selected', 'selected');
		$("#sl_haveCondition_oldCov4 option:contains('None')").attr('selected', 'selected');
		$("#sl_haveCondition_oldCov5 option:contains('None')").attr('selected', 'selected');
		$("#sl_haveCondition_oldCov").prop("disabled", true);
		$("#sl_haveCondition_oldCov2").prop("disabled",true);
		$("#sl_haveCondition_oldCov3").prop("disabled",true);
		$("#sl_haveCondition_oldCov4").prop("disabled",true);
		$("#sl_haveCondition_oldCov5").prop("disabled",true);
		$("input[name='chk_SA_oldCov[]']").prop("checked", false);
		$("#sl_NewSA_oldCov option:contains('None')").attr('selected', 'selected');
		$("#sl_TotalSA_oldCov option:contains('None')").attr('selected', 'selected');	
		$("#amount_NewSA_oldCov, #amount_TotalSA_oldCov, #sl_NewSA_oldCov, #sl_TotalSA_oldCov").prop("disabled", true);
		$("#amount_NewSA_oldCov, #amount_TotalSA_oldCov").val("0.00");
		
		$("#standing_newSA_1_CL").addClass("disabledAll");
		$("#standing_capitalHealth_1_CL").addClass("disabledAll");
		$("#standing_buyWith1_CL").addClass("disabledAll");
	}
});

$("#haveCondition_oldCov").click(function(){
	if($(this).prop('checked') == true){
		$("#panel_Condition_oldCov").show();
		$("#sl_haveCondition_oldCov").prop("disabled",false);
	}else{
		$("#panel_Condition_oldCov").hide();
		$("#sl_haveCondition_oldCov").prop("disabled",true);
	}
});

$("#sl_haveCondition_oldCov").on("change",function(){
	if($(this).find('option:selected').text() !== "None"){
		$("#sl_haveCondition_oldCov2").prop("disabled",false);
	}else{
		$("#sl_haveCondition_oldCov2").prop("disabled",true);
		$("#sl_haveCondition_oldCov2 option[value='NONE']").attr("selected",true);
		$("#sl_haveCondition_oldCov3").prop("disabled",true);
		$("#sl_haveCondition_oldCov3 option[value='NONE']").attr("selected",true);
		$("#sl_haveCondition_oldCov4").prop("disabled",true);
		$("#sl_haveCondition_oldCov4 option[value='NONE']").attr("selected",true);
		$("#sl_haveCondition_oldCov5").prop("disabled",true);
		$("#sl_haveCondition_oldCov5 option[value='NONE']").attr("selected",true);
	}
	disabled_haveCondition_oldCov();
});
$("#sl_haveCondition_oldCov2").on("change",function(){
	if($(this).find('option:selected').text() !== "None"){
		$("#sl_haveCondition_oldCov3").prop("disabled",false);
	}else{
		$("#sl_haveCondition_oldCov3").prop("disabled",true);
		$("#sl_haveCondition_oldCov3 option[value='NONE']").attr("selected",true);
		$("#sl_haveCondition_oldCov4").prop("disabled",true);
		$("#sl_haveCondition_oldCov4 option[value='NONE']").attr("selected",true);
		$("#sl_haveCondition_oldCov5").prop("disabled",true);
		$("#sl_haveCondition_oldCov5 option[value='NONE']").attr("selected",true);
	}
	disabled_haveCondition_oldCov();
});
$("#sl_haveCondition_oldCov3").on("change",function(){
	if($(this).find('option:selected').text() !== "None"){
		$("#sl_haveCondition_oldCov4").prop("disabled",false);
	}else{
		$("#sl_haveCondition_oldCov4").prop("disabled",true);
		$("#sl_haveCondition_oldCov4 option[value='NONE']").attr("selected",true);
		$("#sl_haveCondition_oldCov5").prop("disabled",true);
		$("#sl_haveCondition_oldCov5 option[value='NONE']").attr("selected",true);
	}
	disabled_haveCondition_oldCov();
});
$("#sl_haveCondition_oldCov4").on("change",function(){
	if($(this).find('option:selected').text() !== "None"){
		$("#sl_haveCondition_oldCov5").prop("disabled",false);
	}else{
		$("#sl_haveCondition_oldCov5").prop("disabled",true);
		$("#sl_haveCondition_oldCov5 option[value='NONE']").attr("selected",true);
	}
	disabled_haveCondition_oldCov();
});
$("#sl_haveCondition_oldCov5").on("change",function(){
	disabled_haveCondition_oldCov();
});

// เปิดให้กรอกข้อมูลเมื่อเลือกเงื่อนไข ถูกต้อง
function enable_haveCondition_oldCov(value,block){
	if(value == "New SA"){
		$("#standing_newSA_"+block+"_CL").removeClass("disabledAll");
		$("#sl_NewSA_oldCov").attr("disabled",false)
		$("#amount_NewSA_oldCov").attr("disabled",false)
	}else if(value == "ทุนตรวจสุขภาพ"){
		$("#standing_capitalHealth_"+block+"_CL").removeClass("disabledAll");
	}else if(value == "ซื้อคู่กับแบบ"){
		$("#standing_buyWith"+block+"_CL").removeClass("disabledAll");
	}
}

// ปิดให้กรอกเมื่อเลือกเงื่อนไข ไม่ถูกต้อง
function disabled_haveCondition_oldCov(sel1,sel2,sel3,block){
	
	if(block == null){
		var sel1 = $("#sl_haveCondition_oldCov option:selected").text();
		var sel2 = $("#sl_haveCondition_oldCov3 option:selected").text();
		var sel3 = $("#sl_haveCondition_oldCov5 option:selected").text();
		var block = 1;
	}
	
	$("#standing_newSA_"+block+"_CL").addClass("disabledAll");
	$("#standing_capitalHealth_"+block+"_CL").addClass("disabledAll");
	$("#standing_buyWith"+block+"_CL").addClass("disabledAll");
	enable_haveCondition_oldCov(sel1,block);
	enable_haveCondition_oldCov(sel2,block);
	enable_haveCondition_oldCov(sel3,block);
}

$("#chk_NewSA_oldCov").click(function(){
	if($(this).prop('checked') == true){
		$("#sl_NewSA_oldCov").prop("disabled",false);
		$("#amount_NewSA_oldCov").prop("disabled",false);		
	}else{
		$("#sl_NewSA_oldCov").prop("disabled",true);
		$("#amount_NewSA_oldCov").prop("disabled",true);
		$("#sl_NewSA_oldCov option:contains('None')").attr('selected', 'selected');
		$("#amount_NewSA_oldCov").val("0.00");
	}
});

/*$("#chk_TotalSA_oldCov").click(function(){
	if($(this).prop('checked') == true){
		$("#sl_TotalSA_oldCov").prop("disabled",false);
		$("#amount_TotalSA_oldCov").prop("disabled",false);
	}else{
		$("#sl_TotalSA_oldCov").prop("disabled",true);
		$("#amount_TotalSA_oldCov").prop("disabled",true);
		$("#sl_TotalSA_oldCov option:contains('None')").attr('selected', 'selected');
		$("#amount_TotalSA_oldCov").val("0.00");
	}
});*/
function checkappStartBlock1_CL(id) {
	id = id.replace("appStart_date_capitalHealth","");
	id = id.replace("appTo_date_capitalHealth","");
	var startDate = $("#appStart_date_capitalHealth"+id).val();
	var endDate = $("#appTo_date_capitalHealth"+id).val();
	
	if (startDate != "" && endDate != "") {
		var startDate_parse = parseDate($("#appStart_date_capitalHealth"+id).val());
	    var endDate_parse = parseDate($("#appTo_date_capitalHealth"+id).val());
	    if(startDate_parse > endDate_parse){
	    	
	    	nameTab 	= "menu_CL_5";
	    	Statuesave = "N";
	    	message = "วันที่เริ่มต้นต้องน้อยกว่าวันที่สิ้นสุดเสมอ";
			alertError(message);
	    }
	}
	/*var dateto  = $('#appTo_date_capitalHealth'+id).val();
	var dateto_split		= dateto.split("/");
	var dateto_day			= dateto_split[0];
	var dateto_month		= dateto_split[1];
	var dateto_year			= dateto_split[2];
	var date_to	= dateto_day + 	dateto_month + dateto_year ;
	var appStart_date  = $('#appStart_date_capitalHealth'+id).val();
	var appStart_split		= appStart_date.split("/");
	var appStart_day		= appStart_split[0];
	var appStart_month		= appStart_split[1];
	var appStart_year		= appStart_split[2];
	var date_start = appStart_day + appStart_month + appStart_year ;*/
}
function checkappStartBlock2_CL(id) {
	id = id.replace("appStart_date_capitalHealthIC","");
	id = id.replace("appTo_date_capitalHealthIC","");
	var startDate = $("#appStart_date_capitalHealthIC"+id).val();
	var endDate = $("#appTo_date_capitalHealthIC"+id).val();
	
	if (startDate != "" && endDate != "") {
		var startDate_parse = parseDate($("#appStart_date_capitalHealthIC"+id).val());
	    var endDate_parse = parseDate($("#appTo_date_capitalHealthIC"+id).val());
	    if(startDate_parse > endDate_parse){
	    	
	    	nameTab 	= "menu_CL_5";
	    	Statuesave = "N";
	    	message = "วันที่เริ่มต้นต้องน้อยกว่าวันที่สิ้นสุดเสมอ";
			alertError(message);
	    }
	}
	
}
function checkappStartBlock3_CL(id) {
	id = id.replace("appStart_date_capitalHealthSub","");
	id = id.replace("appTo_date_capitalHealthSub","");
	var startDate = $("#appStart_date_capitalHealthSub"+id).val();
	var endDate = $("#appTo_date_capitalHealthSub"+id).val();
	
	if (startDate != "" && endDate != "") {
		var startDate_parse = parseDate($("#appStart_date_capitalHealthSub"+id).val());
	    var endDate_parse = parseDate($("#appTo_date_capitalHealthSub"+id).val());
	    if(startDate_parse > endDate_parse){
	    	
	    	nameTab 	= "menu_CL_5";
	    	Statuesave = "N";
	    	message = "วันที่เริ่มต้นต้องน้อยกว่าวันที่สิ้นสุดเสมอ";
			alertError(message);
	    }
	}
	
}

function checkappTo_CL(id) {
	id = id.replace("appTo_date_capitalHealth","");
	var dateto  = $('#appTo_date_capitalHealth'+id).val();
	var dateto_split		= dateto.split("/");
	var dateto_day			= dateto_split[0];
	var dateto_month		= dateto_split[1];
	var dateto_year			= dateto_split[2];
	var date_to	= dateto_day + 	dateto_month + dateto_year ;
	var appStart_date  = $('#appStart_date_capitalHealth'+id).val();
	var appStart_split		= appStart_date.split("/");
	var appStart_day		= appStart_split[0];
	var appStart_month		= appStart_split[1];
	var appStart_year		= appStart_split[2];
	var date_start = appStart_day + appStart_month + appStart_year ;
}
function appStart_date(id){		
	/*date from*/
	var date_from 			= $("#"+id).val();
		date_from			= date_from.split("/");
	var appStart_day			= date_from[0];
	var appStart_month			= date_from[1];
	var appStart_year			= date_from[2];
	var date_start = new Date(appStart_year + "/" + appStart_month + "/" + appStart_day) ;
	
	var start_day = date_start.getDate();
	var start_month = date_start.getMonth()+1;
	var start_year = date_start.getFullYear();
	
	var start_fulldate = start_year+"/"+start_month+"/"+start_day;
	
/*	jQuery('#'+id).datetimepicker({
		  timepicker:false,
		  format:'d/m/Y' 
		 });
	jQuery('#'+id).datetimepicker({
		  onShow:function( ct ){
			 
			 this.setOptions({
				   minDate:start_fulldate?start_fulldate:false
			 })
		  },
		  timepicker:false,
		  format:'d/m/Y'
	});	*/
}

function appTo_date(id){
	/*date from*/
	var date_from 			= $("#"+id).val();
		date_from			= date_from.split("/");
	var appStart_day			= date_from[0];
	var appStart_month			= date_from[1];
	var appStart_year			= date_from[2];
	var date_start = new Date(appStart_year + "/" + appStart_month + "/" + appStart_day) ;
	
	var start_day = date_start.getDate();
	var start_month = date_start.getMonth()+1;
	var start_year = date_start.getFullYear();	
	var start_fulldate = start_year+"/"+start_month+"/"+start_day;
	
	/*date to*/
	var date_to = $("#"+id).val();		
		date_to			= date_to.split("/");
	var dateto_day			= date_to[0];
	var dateto_month		= date_to[1];
	var dateto_year			= date_to[2];
	var date_end	= new Date(dateto_year + "/" + dateto_month + "/" + dateto_day) ;
	
	var to_day = date_end.getDate();
	var to_month = date_end.getMonth()+1;
	var to_year = date_end.getFullYear();	
	var to_fulldate = to_year+"/"+to_month+"/"+to_day;

	//console.log("from"+start_fulldate+"to"+to_fulldate);

	/*jQuery('#'+id).datetimepicker({
		  onShow:function( ct ){
			 this.setOptions({
				   minDate:start_fulldate?start_fulldate:false
			 })
		  },
		  timepicker:false,
		  format:'d/m/Y'
	});*/
}
var length_childtr = 0;
function addRowChild_capitalHealth(id){
	
	var result_group = $("#"+id).parent().parent().data('group');
	var result_start = $("#tbl_capitalHealth_1_CL tbody>tr[data-group='"+result_group+"']:last").find('td:nth-child(5) input').val();
	var result = $("#tbl_capitalHealth_1_CL tbody>tr[data-group='"+result_group+"']:last").find('td:nth-child(6) input').val();
	//var result = $("#"+id).parent().parent().parent().find('tr:last td:nth-child(6) input').val();
	id = id.replace("number_capitalHealth","");
	length_childtr++;
	
	if(result != "" && result != 0 && result > result_start){
		result = Number(result) + Number(1)
		var num = id+"_"+length_childtr;
		row = "<tr id='tr_capitalHealth1_row"+num+"' data-id='"+num+"' data-parent='2' data-group='"+id+"'>"+
					"<td class='text-center'></td>"+
					"<td class='text-center'></td>"+	
					"<td class='text-center'></td>"+	
					"<td class='text-right'><i class='glyphicon glyphicon-minus icon_active icon-blue-circle' id='number_capitalHealth"+num+"' onclick='deleteRowChild_capitalHealth(this.id);'></i></td>"+
					"<td class='text-right'><input type='number' id='capitalHealth_ageStart"+num+"' class='form-control text-right' value='"+result+"' onblur='clear_rowCoop(this.id);' disabled/></td>"+
					"<td class='text-right'><input type='number' id='capitalHealth_ageEnd"+num+"' class='form-control text-right' onblur='clear_rowCoop(this.id);' onchange='validate_ageTotalCapital(this.id,1);'/></td>"+	
					"<td class='text-right'><input type='text' id='capitalHealth_capital"+num+"' class='autoComma form-control text-right' /></td>"+
				"</tr>"
		
		
		var numEndorse = $("#tbl_capitalHealth_1_CL >tbody>tr[data-group='"+id+"']").length;
		if(numEndorse > 0){
			$(row).insertAfter("#tbl_capitalHealth_1_CL>tbody>tr[data-group='"+id+"']:last");
		}else{
			$(row).insertAfter("#tr_capitalHealth1_row"+id);
		}
		$(".autoComma").autoNumeric('init',{vMin: '0.00', vMax: '999999999.99'});
	}else{
		$("#tbl_capitalHealth_1_CL tbody>tr[data-group='"+result_group+"']:last").find('td:nth-child(6) input').val("");
		message = "กรุณากรอก อายุสิ้นสุด";
		alertError(message);
	}
	
}

function deleteRowChild_capitalHealth(id){
	$("#"+id).parent().parent().remove();
}

function addRow_capitalHealth(){
	if($("#tbl_capitalHealth_1_CL>tbody>tr").length > 0){
		new_row = 0;
		$("#tbl_capitalHealth_1_CL tbody>tr").each(function(){
			if( new_row < Number($(this).data('group'))){
				new_row = Number($(this).data('group'))
			} 
		})
	}else{
		new_row = 0;
	}
	
	new_row++;
	
	row = "<tr id='tr_capitalHealth1_row"+new_row+"' data-id='"+new_row+"' data-parent='1' data-group='"+new_row+"'>"+
			"<td class='text-center' id='imgOKcapitalHealth_"+new_row+"' onclick='imgCheckbox(this.id);''><i class='glyphicon glyphicon-edit'></i></td>"+
			"<td class='text-center'><input type='text' class='form-control format_date' id='appStart_date_capitalHealth"+new_row+"' onblur='checkappStartBlock1_CL (this.id);' placeholder='dd/mm/yyyy' onkeyup='keyup_validateDate(event,this.id);'"+
					"onclick='appStart_date(this.id);'  maxlength='10'></td>"+	
			"<td class='text-center'><input type='text' class='form-control format_date' id='appTo_date_capitalHealth"+new_row+"' onblur='checkappStartBlock1_CL (this.id);' placeholder='dd/mm/yyyy' onkeyup='keyup_validateDate(event,this.id);'"+
					 "onclick='appTo_date(this.id);' maxlength='10'></td>"+	
			"<td class='text-right'><i class='glyphicon glyphicon-plus icon-blue-circle' id='number_capitalHealth"+new_row+"' onclick='addRowChild_capitalHealth(this.id);''></i></td>"+	
			"<td class='text-right'><input type='number' id='capitalHealth_ageStart"+new_row+"' class='form-control text-right' onblur='clear_rowCoop(this.id);'/></td>"+	
			"<td class='text-right'><input type='number' id='capitalHealth_ageEnd"+new_row+"' class='form-control text-right' onblur='clear_rowCoop(this.id);' onchange='validate_ageTotalCapital(this.id,1);'/></td>"+
			"<td class='text-center'><input type='text' id='capitalHealth_capital"+new_row+"' class='autoComma form-control text-right' /></td>"+	
		"</tr>"
			
	$("#tbl_capitalHealth_1_CL tbody").append(row);
	$(".autoComma").autoNumeric('init',{vMin: '0.00', vMax: '999999999.99'});
	/*jQuery(".format_date").datetimepicker({
		  onShow:function( ct ){},
		  timepicker:false,
		  format:'d/m/Y',
		  lang:'th', 
		  yearOffset:543
	}); */
	var year_end = new Date().getFullYear();
	year_end = 9999 - 543;
	
	console.log("end>> "+year_end);
	
	jQuery('.format_date').datetimepicker({
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
		
	jQuery('.format_date').on("mouseenter mouseleave", function(e){
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

function deleteRow_capitalHealth(){
	$("#tbl_capitalHealth_1_CL .glyphicon-ok").each(function(){
		var data_group = $(this).parent().parent().attr("data-group");
		$("#tbl_capitalHealth_1_CL tbody>tr[data-group='"+data_group+"']").remove();
	})
}

/*เลือก option modal */
function displayBuyWidthCL_popup(){	
	var select_buyWidth1_CL = $('#rdSpecifyKey1').prop('checked');
	var select_buyWidth2_CL = $('#rdChooseKey1').prop('checked');
	//var select_BCID = $(".modal-body #BCID_benefitCL").val(); 
	if(select_buyWidth1_CL)
		{	
			
			$('#txtSpecifyKey1').prop('disabled', false);
			$("#datatbl_buyWidth1_CL").addClass("disabledAll");
			
	}else if(select_buyWidth2_CL){
			
			$('#txtSpecifyKey1').prop('disabled', true);		
			$("#datatbl_buyWidth1_CL").removeClass("disabledAll");
	}
}
var roundBuywidth = 0;
function saveBuyWidth1_CL(){
	
	if($("#rdSpecifyKey1").is(':checked')){
		var key = $("#txtSpecifyKey1").val();
		
		if(key != null){
			var row = "<tr><td class='verticalCenter text-center' id='imgOKbuyWith_main"+roundBuywidth+"' onclick='imgCheckbox(this.id);'><i class='glyphicon glyphicon-edit'></i></td>"+
				"<td class='verticalCenter text-center'><label>"+key+"</label></td>"+
			"</tr>"
				
			$("#tbl_buyWith1_CL tbody").append(row);
			roundBuywidth++;
		}
		
	}else{
		$("#tbl_chooseBuyWith1_CL tbody>tr").each(function(){
			if($(this).find('td:nth-child(1) i').hasClass("glyphicon-ok")){
				var key = $(this).find('td:nth-child(2) a').text();
				var prd_code = $(this).find('td:nth-child(1) input[type="hidden"]').val();
			}
			
			var flag_dup = false;
			$("#tbl_buyWith1_CL tbody>tr").each(function(){
				if( key == $(this).find('td:nth-child(2) label').text()){
					flag_dup = true;
				}
			})
			
			if(key != null && !flag_dup){
				var row = "<tr><td class='verticalCenter text-center' id='imgOKbuyWith_main"+roundBuywidth+"' onclick='imgCheckbox(this.id);'><i class='glyphicon glyphicon-edit'></i></td>"+
					"<td class='verticalCenter text-center'>" +
						"<label>"+key+"</label>" +
						"<input type='hidden' id='prd_code' value='"+prd_code+"'>"+
					"</td>"+
					"</tr>"
					
				$("#tbl_buyWith1_CL tbody").append(row);
				roundBuywidth++;
			}
		});
	}
}

function deleteRow_buyWith_key(){
	$("#tbl_buyWith1_CL tbody>tr").each(function(){
		$(this).find('.glyphicon-ok').parent().parent().remove();
	});
}

/*ตรวจสอบข้อมูล IC*/
$("#chk_check_data_CL2").click(function(){
	if($(this).prop('checked') == true){
		$("#panel_IC_CL").show();
		$("#notCondition_IC").prop("checked",true);
	}else{
		$("#panel_IC_CL").hide();
		$("#panel_Condition_IC").hide();
		$("#sl_haveCondition_IC option:contains('None')").attr('selected', 'selected');
		$("#sl_haveCondition_IC").prop("disabled", true);
		$("input[name='chk_SA_IC[]']").prop("checked", false);
		$("#sl_NewSA_IC option:contains('None')").attr('selected', 'selected');
		$("#sl_TotalSA_IC option:contains('None')").attr('selected', 'selected');	
		$("#amount_NewSA_IC, #amount_TotalSA_IC, #sl_NewSA_IC, #sl_TotalSA_IC").prop("disabled", true);
		$("#amount_NewSA_IC, #amount_TotalSA_IC").val("0.00");
	}
});

$("#notCondition_IC").click(function(){
	if($(this).prop('checked') == true){
		$("#panel_Condition_IC").hide();
		$("#sl_haveCondition_IC option:contains('None')").attr('selected', 'selected');
		$("#sl_haveCondition_IC2 option:contains('None')").attr('selected', 'selected');
		$("#sl_haveCondition_IC3 option:contains('None')").attr('selected', 'selected');
		$("#sl_haveCondition_IC4 option:contains('None')").attr('selected', 'selected');
		$("#sl_haveCondition_IC5 option:contains('None')").attr('selected', 'selected');
		$("#sl_haveCondition_IC2").prop("disabled",true);
		$("#sl_haveCondition_IC3").prop("disabled",true);
		$("#sl_haveCondition_IC4").prop("disabled",true);
		$("#sl_haveCondition_IC5").prop("disabled",true);
		$("#sl_haveCondition_IC").prop("disabled", true);
		$("input[name='chk_SA_IC[]']").prop("checked", false);
		$("#sl_NewSA_IC option:contains('None')").attr('selected', 'selected');
		$("#sl_TotalSA_IC option:contains('None')").attr('selected', 'selected');	
		$("#amount_NewSA_IC, #amount_TotalSA_IC, #sl_NewSA_IC, #sl_TotalSA_IC").prop("disabled", true);
		$("#amount_NewSA_IC, #amount_TotalSA_IC").val("0.00");
		
		$("#standing_newSA_2_CL").addClass("disabledAll");
		$("#standing_capitalHealth_2_CL").addClass("disabledAll");
		$("#standing_buyWith2_CL").addClass("disabledAll");
	}
});

$("#haveCondition_IC").click(function(){
	if($(this).prop('checked') == true){
		$("#panel_Condition_IC").show();
		$("#sl_haveCondition_IC").prop("disabled",false);
	}else{
		$("#panel_Condition_IC").hide();
		$("#sl_haveCondition_IC").prop("disabled",true);
		//$("#sl_haveCondition_oldCov option:contains('None')").attr('selected', 'selected');
	}
});

$("#sl_haveCondition_IC").on("change",function(){
	if($(this).find('option:selected').text() !== "None"){
		$("#sl_haveCondition_IC2").prop("disabled",false);
	}else{
		$("#sl_haveCondition_IC2").prop("disabled",true);
		$("#sl_haveCondition_IC2 option[value='NONE']").attr("selected",true);
		$("#sl_haveCondition_IC3").prop("disabled",true);
		$("#sl_haveCondition_IC3 option[value='NONE']").attr("selected",true);
		$("#sl_haveCondition_IC4").prop("disabled",true);
		$("#sl_haveCondition_IC4 option[value='NONE']").attr("selected",true);
		$("#sl_haveCondition_IC5").prop("disabled",true);
		$("#sl_haveCondition_IC5 option[value='NONE']").attr("selected",true);
	}
	disabled_haveCondition_IC();
});
$("#sl_haveCondition_IC2").on("change",function(){
	if($(this).find('option:selected').text() !== "None"){
		$("#sl_haveCondition_IC3").prop("disabled",false);
	}else{
		$("#sl_haveCondition_IC3").prop("disabled",true);
		$("#sl_haveCondition_IC3 option[value='NONE']").attr("selected",true);
		$("#sl_haveCondition_IC4").prop("disabled",true);
		$("#sl_haveCondition_IC4 option[value='NONE']").attr("selected",true);
		$("#sl_haveCondition_IC5").prop("disabled",true);
		$("#sl_haveCondition_IC5 option[value='NONE']").attr("selected",true);
	}
	disabled_haveCondition_IC();
});
$("#sl_haveCondition_IC3").on("change",function(){
	if($(this).find('option:selected').text() !== "None"){
		$("#sl_haveCondition_IC4").prop("disabled",false);
	}else{
		$("#sl_haveCondition_IC4").prop("disabled",true);
		$("#sl_haveCondition_IC4 option[value='NONE']").attr("selected",true);
		$("#sl_haveCondition_IC5").prop("disabled",true);
		$("#sl_haveCondition_IC5 option[value='NONE']").attr("selected",true);
	}
	disabled_haveCondition_IC();
});
$("#sl_haveCondition_IC4").on("change",function(){
	if($(this).find('option:selected').text() !== "None"){
		$("#sl_haveCondition_IC5").prop("disabled",false);
	}else{
		$("#sl_haveCondition_IC5").prop("disabled",true);
		$("#sl_haveCondition_IC5 option[value='NONE']").attr("selected",true);
	}
	disabled_haveCondition_IC();
});
$("#sl_haveCondition_IC5").on("change",function(){
	disabled_haveCondition_IC();
});

//ปิดให้กรอกเมื่อเลือกเงื่อนไข ไม่ถูกต้อง
function disabled_haveCondition_IC(){
	var sel1 = $("#sl_haveCondition_IC option:selected").text();
	var sel2 = $("#sl_haveCondition_IC3 option:selected").text();
	var sel3 = $("#sl_haveCondition_IC5 option:selected").text();
	
	$("#standing_newSA_2_CL").addClass("disabledAll");
	$("#standing_capitalHealth_2_CL").addClass("disabledAll");
	$("#standing_buyWith2_CL").addClass("disabledAll");
	enable_haveCondition_oldCov(sel1,2);
	enable_haveCondition_oldCov(sel2,2);
	enable_haveCondition_oldCov(sel3,2);
}

$("#chk_NewSA_IC").click(function(){
	if($(this).prop('checked') == true){
		$("#sl_NewSA_IC").prop("disabled",false);
		$("#amount_NewSA_IC").prop("disabled",false);		
	}else{
		$("#sl_NewSA_IC").prop("disabled",true);
		$("#amount_NewSA_IC").prop("disabled",true);
		$("#sl_NewSA_IC option:contains('None')").attr('selected', 'selected');
		$("#amount_NewSA_IC").val("0.00");
	}
});

$("#chk_TotalSA_IC").click(function(){
	if($(this).prop('checked') == true){
		$("#sl_TotalSA_IC").prop("disabled",false);
		$("#amount_TotalSA_IC").prop("disabled",false);
	}else{
		$("#sl_TotalSA_IC").prop("disabled",true);
		$("#amount_TotalSA_IC").prop("disabled",true);
		$("#sl_TotalSA_IC option:contains('None')").attr('selected', 'selected');
		$("#amount_TotalSA_IC").val("0.00");
	}
});

var length_childtr = 0;
function addRowChild_capitalHealth2(id){
	
	var result_group = $("#"+id).parent().parent().data('group');
	var result_start = $("#tbl_capitalHealth_2_CL tbody>tr[data-group='"+result_group+"']:last").find('td:nth-child(5) input').val();
	var result = $("#tbl_capitalHealth_2_CL tbody>tr[data-group='"+result_group+"']:last").find('td:nth-child(6) input').val();
	//var result = $("#"+id).parent().parent().parent().find('tr:last td:nth-child(6) input').val();
	id = id.replace("number_capitalHealthIC","");
	length_childtr++;
	
	if(result != "" && result != 0 && result > result_start ){
		result = Number(result) + Number(1);
		var num = id+"_"+length_childtr;
		row = "<tr id='tr_capitalHealth2_row"+num+"' data-id='"+num+"' data-parent='2' data-group='"+id+"'>"+
					"<td class='text-center'></td>"+
					"<td class='text-center'></td>"+	
					"<td class='text-center'></td>"+	
					"<td class='text-right'><i class='glyphicon glyphicon-minus icon_active icon-blue-circle' id='number_capitalHealth"+num+"' onclick='deleteRowChild_capitalHealth(this.id);'></i></td>"+
					"<td class='text-right'><input type='number' id='capitalHealthIC_ageStart"+num+"' class='form-control text-right' value='"+result+"' onblur='clear_rowCoop(this.id);' disabled/></td>"+
					"<td class='text-right'><input type='number' id='capitalHealthIC_ageEnd"+num+"' class='form-control text-right' onblur='clear_rowCoop(this.id);' onchange='validate_ageTotalCapital(this.id,2);'/></td>"+	
					"<td class='text-right'><input type='text' id='capitalHealthIC_capital"+num+"' class='autoComma form-control text-right' /></td>"+
				"</tr>"
		
		
		var numEndorse = $("#tbl_capitalHealth_2_CL tbody>tr[data-group='"+id+"']").length;
	
		if(numEndorse > 0){
			$(row).insertAfter("#tbl_capitalHealth_2_CL>tbody>tr[data-group='"+id+"']:last");
		}else{
			$(row).insertAfter("#tr_capitalHealth2_row"+id);
		}
		$(".autoComma").autoNumeric('init',{vMin: '0.00', vMax: '999999999.99'});
	}else{
		$("#tbl_capitalHealth_2_CL tbody>tr[data-group='"+result_group+"']:last").find('td:nth-child(6) input').val("");
		message = "กรุณากรอก อายุสิ้นสุด";
		alertError(message);
	}
}

function addRow_capitalHealth2(){
	if($("#tbl_capitalHealth_2_CL>tbody>tr").length > 0){
		new_row = 0;
		$("#tbl_capitalHealth_2_CL tbody>tr").each(function(){
			if( new_row < Number($(this).data('group'))){
				new_row = Number($(this).data('group'))
			} 
		})
		//new_row = $("#tbl_capitalHealth_2_CL>tbody>tr:last").attr("data-group");
	}else{
		new_row = 0;
	}
	new_row++;
	
	row = "<tr id='tr_capitalHealth2_row"+new_row+"' data-id='"+new_row+"' data-parent='1' data-group='"+new_row+"'>"+
			"<td class='text-center' id='imgOKcapitalHealthIC_"+new_row+"' onclick='imgCheckbox(this.id);''><i class='glyphicon glyphicon-edit'></i></td>"+
			"<td class='text-center'><input type='text' class='form-control format_date' id='appStart_date_capitalHealthIC"+new_row+"' onblur='checkappStartBlock2_CL (this.id);' placeholder='dd/mm/yyyy' onkeyup='keyup_validateDate(event,this.id);'"+
					"onclick='appStart_date(this.id);'  maxlength='10'></td>"+	
			"<td class='text-center'><input type='text' class='form-control format_date' id='appTo_date_capitalHealthIC"+new_row+"' onblur='checkappStartBlock2_CL (this.id);' placeholder='dd/mm/yyyy' onkeyup='keyup_validateDate(event,this.id);'"+
					 "onclick='appTo_date(this.id);' maxlength='10'></td>"+	
			"<td class='text-right'><i class='glyphicon glyphicon-plus icon-blue-circle' id='number_capitalHealthIC"+new_row+"' onclick='addRowChild_capitalHealth2(this.id);''></i></td>"+	
			"<td class='text-right'><input type='number' id='capitalHealthIC_ageStart"+new_row+"' class='form-control text-right' onblur='clear_rowCoop(this.id);'/></td>"+	
			"<td class='text-right'><input type='number' id='capitalHealthIC_ageEnd"+new_row+"' class='form-control text-right' onblur='clear_rowCoop(this.id);' onchange='validate_ageTotalCapital(this.id,2);'/></td>"+
			"<td class='text-center'><input type='text' id='capitalHealthIC_capital"+new_row+"' class='autoComma form-control text-right' /></td>"+	
		"</tr>"
			
	$("#tbl_capitalHealth_2_CL tbody").append(row);
	/*jQuery(".format_date").datetimepicker({
		  onShow:function( ct ){},
		  timepicker:false,
		  format:'d/m/Y',
		  lang:'th', 
		  yearOffset:543
	}); */
	
	var year_end = new Date().getFullYear();
	year_end = 9999 - 543;
	
	console.log("end>> "+year_end);
	
	jQuery('.format_date').datetimepicker({
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
		
	jQuery('.format_date').on("mouseenter mouseleave", function(e){
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
	$(".autoComma").autoNumeric('init',{vMin: '0.00', vMax: '999999999.99'});
}

function deleteRow_capitalHealth2(){
	$("#tbl_capitalHealth_2_CL .glyphicon-ok").each(function(){
		var data_group = $(this).parent().parent().attr("data-group");
		$("#tbl_capitalHealth_2_CL tbody>tr[data-group='"+data_group+"']").remove();
	})
}

/*เลือก option modal */
function displayBuyWidthCL_popup2(){	
	var select_buyWidth1_CL = $('#rdSpecifyKey2').prop('checked');
	var select_buyWidth2_CL = $('#rdChooseKey2').prop('checked');
	if(select_buyWidth1_CL)
		{	
			
			$('#txtSpecifyKey2').prop('disabled', false);
			$("#datatbl_buyWidth2_CL").addClass("disabledAll");
			
	}else if(select_buyWidth2_CL){
			
			$('#txtSpecifyKey2').prop('disabled', true);		
			$("#datatbl_buyWidth2_CL").removeClass("disabledAll");
	}
}
var roundBuywidth_IC = 0;
function saveBuyWidth2_CL(){
	if($("#rdSpecifyKey2").is(':checked')){
		var key = $("#txtSpecifyKey2").val();
		if(key != null){
			var row = "<tr><td class='verticalCenter text-center' id='imgOKbuyWith_IC"+roundBuywidth_IC+"' onclick='imgCheckbox(this.id);'><i class='glyphicon glyphicon-edit'></i></td>"+
				"<td class='verticalCenter text-center'><label>"+key+"</label></td>"+
			"</tr>"
				
			$("#tbl_buyWith2_CL tbody").append(row);
			roundBuywidth_IC++;
		}
		
	}else{
		$("#tbl_chooseBuyWith2_CL tbody>tr").each(function(){
			if($(this).find('td:nth-child(1) i').hasClass("glyphicon-ok")){
				var key = $(this).find('td:nth-child(2) a').text();
				var prd_code = $(this).find('td:nth-child(1) input[type="hidden"]').val();
			}else{
				key = null;
			}
			
			var flag_dup = false;
			$("#tbl_buyWith2_CL tbody>tr").each(function(){
				if( key == $(this).find('td:nth-child(2) label').text()){
					flag_dup = true;
				}
			})
			
			if(key != null && !flag_dup){
				var row = "<tr><td class='verticalCenter text-center' id='imgOKbuyWith_IC"+roundBuywidth_IC+"' onclick='imgCheckbox(this.id);'><i class='glyphicon glyphicon-edit'></i></td>"+
					"<td class='verticalCenter text-center'>" +
						"<label>"+key+"</label>" +
						"<input type='hidden' id='prd_code' value='"+prd_code+"'>"+
					"</td>"+
				"</tr>"
					
				$("#tbl_buyWith2_CL tbody").append(row);
				roundBuywidth_IC++;
			}
		});
	}
}

function deleteRow_buyWith_key2(){
	$("#tbl_buyWith2_CL tbody>tr").each(function(){
		$(this).find('.glyphicon-ok').parent().parent().remove();
	});
}

/*ตรวจสอบ กธ. เดิม รับแบบ Sub*/
$("#chk_check_data_CL3").click(function(){
	if($(this).prop('checked') == true){
		$("#panel_SubCov_CL").show();
		$("#notCondition_SubCov").prop("checked",true);
	}else{
		$("#panel_SubCov_CL").hide();
		$("#panel_Condition_SubCov").hide();
		$("#sl_haveCondition_SubCov option:contains('None')").attr('selected', 'selected');
		$("#sl_haveCondition_SubCov").prop("disabled", true);
		$("input[name='chk_SA_SubCov[]']").prop("checked", false);
		$("#sl_NewSA_SubCov option:contains('None')").attr('selected', 'selected');
		$("#sl_TotalSA_SubCov option:contains('None')").attr('selected', 'selected');	
		$("#amount_NewSA_SubCov, #amount_TotalSA_SubCov, #sl_NewSA_SubCov, #sl_TotalSA_SubCov").prop("disabled", true);
		$("#amount_NewSA_SubCov, #amount_TotalSA_SubCov").val("0.00");
	}
});

$("#notCondition_SubCov").click(function(){
	if($(this).prop('checked') == true){
		$("#panel_Condition_SubCov").hide();
		$("#sl_haveCondition_SubCov option:contains('None')").attr('selected', 'selected');
		$("#sl_haveCondition_SubCov2 option:contains('None')").attr('selected', 'selected');
		$("#sl_haveCondition_SubCov3 option:contains('None')").attr('selected', 'selected');
		$("#sl_haveCondition_SubCov4 option:contains('None')").attr('selected', 'selected');
		$("#sl_haveCondition_SubCov5 option:contains('None')").attr('selected', 'selected');
		$("#sl_haveCondition_SubCov").prop("disabled", true);
		$("#sl_haveCondition_SubCov2").prop("disabled", true);
		$("#sl_haveCondition_SubCov3").prop("disabled", true);
		$("#sl_haveCondition_SubCov4").prop("disabled", true);
		$("#sl_haveCondition_SubCov5").prop("disabled", true);
		$("input[name='chk_SA_SubCov[]']").prop("checked", false);
		$("#sl_NewSA_SubCov option:contains('None')").attr('selected', 'selected');
		$("#sl_TotalSA_SubCov option:contains('None')").attr('selected', 'selected');	
		$("#amount_NewSA_SubCov, #amount_TotalSA_SubCov, #sl_NewSA_SubCov, #sl_TotalSA_SubCov").prop("disabled", true);
		$("#amount_NewSA_SubCov, #amount_TotalSA_SubCov").val("0.00");
		
		$("#standing_newSA_3_CL").addClass("disabledAll");
		$("#standing_capitalHealth_3_CL").addClass("disabledAll");
		$("#standing_buyWith3_CL").addClass("disabledAll");
	}
});

$("#haveCondition_SubCov").click(function(){
	if($(this).prop('checked') == true){
		$("#panel_Condition_SubCov").show();
		$("#sl_haveCondition_SubCov").prop("disabled",false);
	}else{
		$("#panel_Condition_SubCov").hide();
		$("#sl_haveCondition_SubCov").prop("disabled",true);
		//$("#sl_haveCondition_oldCov option:contains('None')").attr('selected', 'selected');
	}
});

$("#sl_haveCondition_SubCov").on("change",function(){
	if($(this).find('option:selected').text() !== "None"){
		$("#sl_haveCondition_SubCov2").prop("disabled",false);
	}else{
		$("#sl_haveCondition_SubCov2").prop("disabled",true);
		$("#sl_haveCondition_SubCov2 option[value='NONE']").attr("selected",true);
		$("#sl_haveCondition_SubCov3").prop("disabled",true);
		$("#sl_haveCondition_SubCov3 option[value='NONE']").attr("selected",true);
		$("#sl_haveCondition_SubCov4").prop("disabled",true);
		$("#sl_haveCondition_SubCov4 option[value='NONE']").attr("selected",true);
		$("#sl_haveCondition_SubCov5").prop("disabled",true);
		$("#sl_haveCondition_SubCov5 option[value='NONE']").attr("selected",true);
	}
	disabled_haveCondition_SubCov();
});
$("#sl_haveCondition_SubCov2").on("change",function(){
	if($(this).find('option:selected').text() !== "None"){
		$("#sl_haveCondition_SubCov3").prop("disabled",false);
	}else{
		$("#sl_haveCondition_SubCov3").prop("disabled",true);
		$("#sl_haveCondition_SubCov3 option[value='NONE']").attr("selected",true);
		$("#sl_haveCondition_SubCov4").prop("disabled",true);
		$("#sl_haveCondition_SubCov4 option[value='NONE']").attr("selected",true);
		$("#sl_haveCondition_SubCov5").prop("disabled",true);
		$("#sl_haveCondition_SubCov5 option[value='NONE']").attr("selected",true);
	}
	disabled_haveCondition_SubCov();
});
$("#sl_haveCondition_SubCov3").on("change",function(){
	if($(this).find('option:selected').text() !== "None"){
		$("#sl_haveCondition_SubCov4").prop("disabled",false);
	}else{
		$("#sl_haveCondition_SubCov4").prop("disabled",true);
		$("#sl_haveCondition_SubCov4 option[value='NONE']").attr("selected",true);
		$("#sl_haveCondition_SubCov5").prop("disabled",true);
		$("#sl_haveCondition_SubCov5 option[value='NONE']").attr("selected",true);
	}
	disabled_haveCondition_SubCov();
});
$("#sl_haveCondition_SubCov4").on("change",function(){
	if($(this).find('option:selected').text() !== "None"){
		$("#sl_haveCondition_SubCov5").prop("disabled",false);
	}else{
		$("#sl_haveCondition_SubCov5").prop("disabled",true);
		$("#sl_haveCondition_SubCov5 option[value='NONE']").attr("selected",true);
	}
	disabled_haveCondition_SubCov();
});
$("#sl_haveCondition_SubCov5").on("change",function(){
	disabled_haveCondition_SubCov();
});

//ปิดให้กรอกเมื่อเลือกเงื่อนไข ไม่ถูกต้อง
function disabled_haveCondition_SubCov(){
	var sel1 = $("#sl_haveCondition_SubCov option:selected").text();
	var sel2 = $("#sl_haveCondition_SubCov3 option:selected").text();
	var sel3 = $("#sl_haveCondition_SubCov5 option:selected").text();
	
	$("#standing_newSA_3_CL").addClass("disabledAll");
	$("#standing_capitalHealth_3_CL").addClass("disabledAll");
	$("#standing_buyWith3_CL").addClass("disabledAll");
	enable_haveCondition_oldCov(sel1,3);
	enable_haveCondition_oldCov(sel2,3);
	enable_haveCondition_oldCov(sel3,3);
}

$("#chk_NewSA_SubCov").click(function(){
	if($(this).prop('checked') == true){
		$("#sl_NewSA_SubCov").prop("disabled",false);
		$("#amount_NewSA_SubCov").prop("disabled",false);		
	}else{
		$("#sl_NewSA_SubCov").prop("disabled",true);
		$("#amount_NewSA_SubCov").prop("disabled",true);
		$("#sl_NewSA_SubCov option:contains('None')").attr('selected', 'selected');
		$("#amount_NewSA_SubCov").val("0.00");
	}
});

$("#chk_TotalSA_SubCov").click(function(){
	if($(this).prop('checked') == true){
		$("#sl_TotalSA_SubCov").prop("disabled",false);
		$("#amount_TotalSA_SubCov").prop("disabled",false);
	}else{
		$("#sl_TotalSA_SubCov").prop("disabled",true);
		$("#amount_TotalSA_SubCov").prop("disabled",true);
		$("#sl_TotalSA_SubCov option:contains('None')").attr('selected', 'selected');
		$("#amount_TotalSA_SubCov").val("0.00");
	}
})

var length_childSub = 0;
function addRowChild_capitalHealth3(id){
	
	var result_group = $("#"+id).parent().parent().data('group');
	var result_start = $("#tbl_capitalHealth_3_CL tbody>tr[data-group='"+result_group+"']:last").find('td:nth-child(5) input').val();
	var result = $("#tbl_capitalHealth_3_CL tbody>tr[data-group='"+result_group+"']:last").find('td:nth-child(6) input').val();
	//var result = $("#"+id).parent().parent().parent().find('tr:last td:nth-child(6) input').val();
	id = id.replace("number_capitalHealthSub","");
	length_childSub++;
	
	if(result != "" && result != 0 && result > result_start){
		result = Number(result) + Number(1)
		var num = id+"_"+length_childSub;
		row = "<tr id='tr_capitalHealth3_row"+num+"' data-id='"+num+"' data-parent='2' data-group='"+id+"'>"+
					"<td class='text-center'></td>"+
					"<td class='text-center'></td>"+	
					"<td class='text-center'></td>"+	
					"<td class='text-right'><i class='glyphicon glyphicon-minus icon_active icon-blue-circle' id='number_capitalHealth"+num+"' onclick='deleteRowChild_capitalHealth(this.id);'></i></td>"+
					"<td class='text-right'><input type='number' id='capitalHealthSub_ageStart"+num+"' class='form-control text-right' value='"+result+"' onblur='clear_rowCoop(this.id);' disabled/></td>"+
					"<td class='text-right'><input type='number' id='capitalHealthSub_ageEnd"+num+"' class='form-control text-right' onblur='clear_rowCoop(this.id);' onchange='validate_ageTotalCapital(this.id,3);'/></td>"+	
					"<td class='text-right'><input type='text' id='capitalHealthSub_capital"+num+"' class='autoComma form-control text-right' /></td>"+
				"</tr>"
		
		var numEndorse = $("#tbl_capitalHealth_3_CL tbody>tr[data-group='"+id+"']").length;
	
		if(numEndorse > 0){
			$(row).insertAfter("#tbl_capitalHealth_3_CL>tbody>tr[data-group='"+id+"']:last");
		}else{
			$(row).insertAfter("#tr_capitalHealth3_row"+id);
		}		
		
	}else{
		$("#tbl_capitalHealth_3_CL tbody>tr[data-group='"+result_group+"']:last").find('td:nth-child(6) input').val("");
		message = "กรุณากรอก อายุสิ้นสุด";
		alertError(message);
	}
	
	$(".autoComma").autoNumeric('init',{vMin: '0.00', vMax: '999999999.99'});
}

function addRow_capitalHealth3(){
	if($("#tbl_capitalHealth_3_CL>tbody>tr").length > 0){
		new_row = 0;
		$("#tbl_capitalHealth_3_CL tbody>tr").each(function(){
			if( new_row < Number($(this).data('group'))){
				new_row = Number($(this).data('group'))
			} 
		})
		//new_row = $("#tbl_capitalHealth_3_CL>tbody>tr:last").attr("data-group");
	}else{
		new_row = 0;
	}
	
	new_row++;
	
	row = "<tr id='tr_capitalHealth3_row"+new_row+"' data-id='"+new_row+"' data-parent='1' data-group='"+new_row+"'>"+
			"<td class='text-center' id='imgOKcapitalHealthSub_"+new_row+"' onclick='imgCheckbox(this.id);''><i class='glyphicon glyphicon-edit'></i></td>"+
			"<td class='text-center'><input type='text' class='form-control format_date' id='appStart_date_capitalHealthSub"+new_row+"' onblur='checkappStartBlock3_CL (this.id);' placeholder='dd/mm/yyyy' onkeyup='keyup_validateDate(event,this.id);'"+
					"onclick='appStart_date(this.id);'  maxlength='10'></td>"+	
			"<td class='text-center'><input type='text' class='form-control format_date' id='appTo_date_capitalHealthSub"+new_row+"' onblur='checkappStartBlock3_CL (this.id);' placeholder='dd/mm/yyyy' onkeyup='keyup_validateDate(event,this.id);'"+
					 "onclick='appTo_date(this.id);' maxlength='10'></td>"+	
			"<td class='text-right'><i class='glyphicon glyphicon-plus icon-blue-circle' id='number_capitalHealthSub"+new_row+"' onclick='addRowChild_capitalHealth3(this.id);'></i></td>"+	
			"<td class='text-right'><input type='number' id='capitalHealthSub_ageStart"+new_row+"' class='form-control text-right' onblur='clear_rowCoop(this.id);'/></td>"+	
			"<td class='text-right'><input type='number' id='capitalHealthSub_ageEnd"+new_row+"' class='form-control text-right' onblur='clear_rowCoop(this.id);' onchange='validate_ageTotalCapital(this.id,3);'/></td>"+
			"<td class='text-center'><input type='text' id='capitalHealthSub_capital"+new_row+"' class='autoComma form-control text-right' /></td>"+	
		"</tr>"
			
	$("#tbl_capitalHealth_3_CL tbody").append(row);
	$(".autoComma").autoNumeric('init',{vMin: '0.00', vMax: '999999999.99'});
	/*jQuery(".format_date").datetimepicker({
		  onShow:function( ct ){},
		  timepicker:false,
		  format:'d/m/Y',
		  lang:'th', 
		  yearOffset:543
	}); */
	
	var year_end = new Date().getFullYear();
	year_end = 9999 - 543;
	
	console.log("end>> "+year_end);
	
	jQuery('.format_date').datetimepicker({
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
		
	jQuery('.format_date').on("mouseenter mouseleave", function(e){
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

function deleteRow_capitalHealth3(){
	$("#tbl_capitalHealth_3_CL .glyphicon-ok").each(function(){
		var data_group = $(this).parent().parent().attr("data-group");
		$("#tbl_capitalHealth_3_CL tbody>tr[data-group='"+data_group+"']").remove();
	})
}

function filter_partner(e){
	var systemCode = $(e).parent().parent().find('td:nth-child(7) :selected').val();
	
	if (systemCode != "" && systemCode != "NONE") {
		$(e).parent().parent().find('td:nth-child(8) option').remove();
		var opt_none = "<option data-id='0' value='NONE' selected>All</option>";
		$(e).parent().parent().find('td:nth-child(8) select').append(opt_none);
		var json_data = {
				"method": "GetPartner",
		        "systemCode": systemCode
			}
		$.ajax({
			url: 'ProductCL_Data_default_Servlet',
			type: "POST",
			data: json_data,
			success: function (response) {
				
				var row_PDPartner = "";	
				for (i in response.partner) {
					var obj_PDPartner = response.partner[i];
						row_PDPartner = "<option data-id='"+obj_PDPartner.pass+"' value='"+obj_PDPartner.key+"'>"+obj_PDPartner.text+"</option>";
								  
						$(e).parent().parent().find('td:nth-child(8) select').append(row_PDPartner);
				}
				
			}
		})
	}
	else{
		$(e).parent().parent().find('td:nth-child(8) option').remove();
		var opt_none = "<option value='NONE' selected>All</option>";
		$(e).parent().parent().find('td:nth-child(8) select').append(opt_none);
	}
}

/*เลือก option modal */
function displayBuyWidthCL_popup3(){	
	var select_buyWidth1_CL = $('#rdSpecifyKey3').prop('checked');
	var select_buyWidth2_CL = $('#rdChooseKey3').prop('checked');
	if(select_buyWidth1_CL)
		{	
			
			$('#txtSpecifyKey3').prop('disabled', false);
			$("#datatbl_buyWidth3_CL").addClass("disabledAll");
			
	}else if(select_buyWidth2_CL){
			
			$('#txtSpecifyKey3').prop('disabled', true);		
			$("#datatbl_buyWidth3_CL").removeClass("disabledAll");
	}
}
var roundBuywidth_Sub = 0;
function saveBuyWidth3_CL(){
	if($("#rdSpecifyKey3").is(':checked')){
		var key = $("#txtSpecifyKey3").val();
		if(key != null){
			var row = "<tr><td class='verticalCenter text-center' id='imgOKbuyWith_Sub"+roundBuywidth_Sub+"' onclick='imgCheckbox(this.id);'><i class='glyphicon glyphicon-edit'></i></td>"+
				"<td class='verticalCenter text-center'><label>"+key+"</label></td>"+
			"</tr>"
				
			$("#tbl_buyWith3_CL tbody").append(row);
			roundBuywidth_Sub++;
		}
		
	}else{
		$("#tbl_chooseBuyWith3_CL tbody>tr").each(function(){
			if($(this).find('td:nth-child(1) i').hasClass("glyphicon-ok")){
				var key = $(this).find('td:nth-child(2) a').text();
				var prd_code = $(this).find('td:nth-child(1) input[type="hidden"]').val();
			}else{
				key = null;
			}
			
			var flag_dup = false;
			$("#tbl_buyWith3_CL tbody>tr").each(function(){
				if( key == $(this).find('td:nth-child(2) label').text()){
					flag_dup = true;
				}
			})
			
			if(key != null && !flag_dup){
				var row = "<tr><td class='verticalCenter text-center' id='imgOKbuyWith_Sub"+roundBuywidth_Sub+"' onclick='imgCheckbox(this.id);'><i class='glyphicon glyphicon-edit'></i></td>"+
					"<td class='verticalCenter text-center'>" +
						"<label>"+key+"</label>" +
						"<input type='hidden' id='prd_code' value='"+prd_code+"'>"+
					"</td>"+
				"</tr>"
					
				$("#tbl_buyWith3_CL tbody").append(row);
				roundBuywidth_Sub++;
			}
		});
	}
}

function deleteRow_buyWith_key3(){
	$("#tbl_buyWith3_CL tbody>tr").each(function(){
		$(this).find('.glyphicon-ok').parent().parent().remove();
	});
}


function open_modal_buyWith_key(key){
	
	var modal = "modal_buyWith"+key+"_CL"
	$("#"+modal).modal('show');
	$("#rdChooseKey"+key).prop("checked", true);
	$("#tbl_chooseBuyWith"+key+"_CL>tbody>tr i").removeClass("glyphicon-ok").addClass("glyphicon-edit");
	
	var arr_tbBuyWith = [];
	$("#tbl_buyWith"+key+"_CL tbody>tr").each(function(){
		var biz_code = $(this).find('td:nth-child(2) label').text();
		$("#tbl_chooseBuyWith"+key+"_CL tbody>tr").each(function(){
			if( biz_code == $(this).find('td:nth-child(2) a').text()){
				$(this).find('td:nth-child(1) i').removeClass('glyphicon-edit').addClass('glyphicon-ok')
			}
		})
	})
/*	var json_data = {
        	"method": "getProducyBuyWith"
	}
	$.ajax({
	    type: "POST",
	    url : "ProductCL_Data_default_Servlet",
	    data: json_data,       
	    success : function(response) {					    	
	    	var row = "";
	    	$("#tbl_chooseBuyWith"+key+"_CL tbody>tr").remove();
	    	for(i in response.Product){
	    		var obj = response.Product[i];
	    		row += "<tr>"+
						"<td class='verticalCenter text-center' id='imgOK1_buyWith"+i+"' onclick='imgCheckbox(this.id);'>"+
							"<input type='hidden' id='prd_code' value='"+obj.Prd_code+"'>"+
							"<i class='glyphicon glyphicon-edit'></i>"+
						"</td>"+
						"<td class='verticalCenter text-left'><a>"+obj.Core_biz_prd_code+"</a></td>"+
					"</tr>"
	    	}
	    	
	    	//$(row).insertAfter($("#tbl_chooseBuyWith"+key+"_CL tbody>tr:last").closest('tr'));
	    	$("#tbl_chooseBuyWith"+key+"_CL tbody").append(row)
	    	var modal = "modal_buyWith"+key+"_CL"
	    	
	    	 if ( $.fn.dataTable.isDataTable( "#tbl_chooseBuyWith"+key+"_CL" ) ) {
		    	  var table = $("#tbl_chooseBuyWith"+key+"_CL").DataTable();
		    	  table.destroy();  
		      }
	    	$("#tbl_chooseBuyWith"+key+"_CL").DataTable({"ordering": false,"paging": false,"bInfo" : false, scrollY: '236px',scrollCollapse: true, "autoWidth": false, 
				fixedHeader: {header: true},"oLanguage": {"sSearch": "ค้นหา: "}
			});
			$("#tbl_chooseBuyWith"+key+"_CL_wrapper .dataTables_scrollHeadInner").css({"width":"100%"});
			$("#tbl_chooseBuyWith"+key+"_CL_wrapper .table").css({"width":"100%"});
	    	
			
			$("#"+modal).modal('show');
			
	    },
	    error : function(response) {	
	    	console.log("get lookup buyWidth error");
	    }
	});		
	
	
	
	//$("#rdSpecifyKey"+key).prop("checked", true);
	$("#rdChooseKey"+key).prop("checked", true);
	//$("#txtSpecifyKey"+key).prop("disabled", false);
	//$("#txtSpecifyKey"+key).val("");
	
	$("#tbl_chooseBuyWith"+key+"_CL>tbody>tr i").removeClass("glyphicon-ok").addClass("glyphicon-edit");
	//$("#datatbl_buyWidth"+key+"_CL").addClass("disabledAll");
*/}

/************PUN**************/
$(document).ready( function() {
	$(".diss_form").attr("disabled","disabled");
	
	// modal input pmRate
	$("#tb_input_modal_pmRate").addClass("disabledbutton");
	$("#select_input_pmRate").prop("checked",true);
	$("#select_input_pmRate").click(function(){
		$("#tb_input_modal_pmRate").addClass("disabledbutton");
		$("#spanRate1_CL").attr("disabled", false);
		$("#spanRate1_CL").parent().css("pointer-events","");
	});
	$("#select_input_pmRateOriginal").click(function(){
		$("#tb_input_modal_pmRate").removeClass("disabledbutton");
		$("#spanRate1_CL").attr("disabled", true);
		$("#spanRate1_CL").parent().css("pointer-events","none");
	});
	
	// สร้าง ตารางแบ่งจ่าย
	var month = 1;
	for(var i=2 ; i<13 ; i++){
		month = month + 1;
		var row = "<tr>"+
					"<td class='borderBlack'>"+
					"<input id='ch_payment_"+i+"' class='checkbox_prop' type='checkbox' onclick='ch_payment_fun("+i+");' value='"+month+"' disabled=''>"+
				"</td>"+
				"<td class='borderBlack'>"+
					"<label id='lb_payment_"+i+"' for='ch_payment_"+i+"'>"+month+"</label>"+
				"</td>"+
				"<td class='borderBlack'>"+
					"<input id='set_Premium_Rate_"+i+"' type='text' class='auto text-right form-control checkbox_prop' value='0.00' data-v-min='0.00' data-v-max='999.99' onblur='check_value_payment("+i+");' disabled='disabled'>"+
				"</td>"+
				"</tr>"
		$("#tb_Sperately_Pay tbody").append(row);
	}
});

function check_sexMF(){
	// sex auto check by base plan and rider plan
	var base_male = $("#base_male").val();
	var base_female = $("#base_female").val();
	var rider_male = $("#rider_male").val();
	var rider_female = $("#rider_female").val();
	
	// variable
	var male = "N";
	var female = "N";
	if(base_male == "Y" && rider_male == "Y"){
		male = "Y";
	}
	if(base_female == "Y" && rider_female == "Y"){
		female = "Y";
	}
	// เมื่อยังไม่ได้เลือก rider
	if(rider_male == "N" && rider_female == "N"){
		if(base_male == "Y"){
			male = "Y";
		}
		if(base_female == "Y"){
			female= "Y";
		}
	}
		
	
	if(male == "Y"){
		$("#chk_sex_BP1").prop("checked",true);
		$("#chk_sex_BP1").attr("disabled","disabled");
		$("#chk_sex_BP2").attr("disabled","disabled");
	}else{
		$("#chk_sex_BP1").prop("checked",false);
	}
	
	if(female == "Y"){
		$("#chk_sex_BP2").prop("checked",true);
		$("#chk_sex_BP1").attr("disabled","disabled");
		$("#chk_sex_BP2").attr("disabled","disabled");
	}else{
		$("#chk_sex_BP2").prop("checked",false);
	}
	
	if(male == "Y" && female == "Y"){
		$("#chk_sex_BP1").attr("disabled",false);
		$("#chk_sex_BP2").attr("disabled",false);
	}
	//alert("MAN : "+male +"|" + "GIRL :" + female)
}

$('#key_Insurance_product_cl').on("blur",function(){

	// เมื่อเปลี่ยนแปลง Product Code จะต้องใส่ไฟล์ใหม่
//	$("#ip_fileuploads_CL_PM_Rate1_Show_1").val("");
//	$("#fileuploads_PMRateText1_CL").val("");
//	$("#fileuploads_NARText1_CL").val("");
//	
//	$(".clear_val").val("");
//	$(".require_file").css("display","inline-block");
//	$("#tb_Additional_contract tr[data-parent] *").remove();
//	$(".activecolorblue").removeClass("activecolorblue").addClass("activecolorgray");
//	
//	// placeholder ของไฟล์ที่เลือกมา
//	var layout_name = "Unknow";
//	var base_code = $("#tb_Choose_primary_insurance_modal input[type='radio']:checked").parent().parent().find('td:nth-child(2) label').text();
//	var product_code_main = $("#pass_Insurance_product_cl").val();
//	var product_code = $("#key_Insurance_product_cl").val();
//	var layout = layout_name+"_"+base_code+"_"+product_code_main+"_"+product_code;
//	
//	// pm Rate
//	$("#fileuploads_PMRateText1_CL").attr("placeholder",layout+".txt");
//	var uploadfile = "selectFileRate_CL(1,'fileuploads_PMRate1_CL','"+layout+"','','','span_PM_Rateopen_1')";
//	$("#fileuploads_PMRate1_CL").attr("onchange",uploadfile);
//	
//	// NAR
//	$("#fileuploads_NARText1_CL").attr("placeholder",layout+".txt");
//	var uploadfile2 = "selectFileRate_CL(2,'fileuploads_NAR1_CL','"+layout+"','','','span_PM_RateopenNAR_1')";
//	$("#fileuploads_NAR1_CL").attr("onchange",uploadfile2);
//	
//	// NAR Rider
//	var length_row = $("#tb_Additional_contract tbody>tr").length;
//	for(var i=1; i<=length_row ; i++){
//		
//		$("#ip_fileuploads_AdditionalNAR_contract_"+i).attr("placeholder",layout+".txt");
//		var uploadfile3 = "selectFileRate_CL(4,'ip_fileuploads_CL_AdditionalNAR_contract_Show_"+i+"','"+layout+"','','','span_Additional_contractopenNAR_"+i+"')";
//		$("#ip_fileuploads_CL_AdditionalNAR_contract_Show_"+i).attr("onchange",uploadfile3);
//	}
//	
//	
//	if($("#fileuploads_NARText1_CL").val() == ""){
//		$("#validate_NAR1_CL").css("display","inline-block");
//	}
//	if($("#ip_fileuploads_CL_PM_Rate1_Show_1").val() == ""){
//		$("#validate_rate1_CL").css("display","inline-block");
//	}
});

/* Tab ข้อมูลทั่วไป Basic Information */
function choose_COOP(){
	var round = 0;
	var length_tb_COOP = $("#tb_COOP_CL tbody>tr").length;
	var length_tb_increaseCOOP = $("#tbl_increaseCOOP_premium_CL tbody>tr").length;
	var length_tb_masterPolicy = $("#tbl_COOP_masterPolicy_CL tbody>tr").length;
	if($("#tb_COOP_CL tbody>tr").length !== 0){
		var chk_id = $("#tb_COOP_CL tbody>tr[data-parent='true']:last").data("topic");
		//chk_id = Number(chk_id.replace("tr_COOP_",""))
		if(chk_id > 0){
			round = round + chk_id;
		}
	}

	$("#tb_COOP_modal input[type='checkbox']:checked").each(function(){
		
		var key_COOP = $(this).parent().parent().find('td:nth-child(2) label').text();
		var name_COOP = $(this).parent().parent().find('td:nth-child(3) label').text();
		var chk_match = false;
		var chk_match_increaseCOOP = false;
		var chk_match_masterPolicy = false;
		
		// เซ็คค่าซ้ำในตาราง
		for(var i=0 ; i<length_tb_COOP ; i++){
			if(key_COOP == $("#tb_COOP_CL tbody>tr").eq(i).find('td:nth-child(2)').text()){
				chk_match = true;
			}
		}
		// เซ็คค่าซ้ำในตาราง
		for(var i=0 ; i<length_tb_increaseCOOP ; i++){
			if(key_COOP == $("#tbl_increaseCOOP_premium_CL tbody>tr").eq(i).find('td:nth-child(1)').text()){
				chk_match_increaseCOOP = true;
			}
		}
		// เซ็คค่าซ้ำในตาราง
		for(var i=0 ; i<length_tb_masterPolicy ; i++){
			if(key_COOP == $("#tbl_COOP_masterPolicy_CL tbody>tr").eq(i).find('td:nth-child(1)').text()){
				chk_match_masterPolicy = true;
			}
		}
		
		if(length_tb_COOP == 0 || chk_match == false){
			round++;
			var row = "<tr id='tr_COOP_"+round+"' data-topic='"+round+"' data-group='0' data-parent='true'>"+
							"<td class='text-center verticalCenter borderBlack' id='imgOK_COOP"+round+"' onclick='imgCheckbox(this.id);'>" +
								"<input type='hidden' id='seq' value='"+round+"'>"+
								"<i class='glyphicon glyphicon-edit'></i></td>"+
							"<td class='text-center verticalCenter borderBlack'>"+key_COOP+"</td>"+
							"<td class='verticalCenter borderBlack'>"+name_COOP+"</td>"+
							"<td class='text-center verticalCenter borderBlack'><input type='text' class='form-control format_date' id='coop_ComDateStart"+round+"' onblur='checkdateTo_COOP(this.id);' onkeyup='keyup_validateDate(event,this.id);' placeholder='dd/mm/yyyy' onkeyup='' onclick=''  maxlength='10' readonly></td>"+
							"<td class='text-center verticalCenter borderBlack'><input type='text' class='form-control format_date' id='coop_ComDateEnd"+round+"' onblur='checkdateTo_COOP(this.id);' onkeyup='keyup_validateDate(event,this.id);' placeholder='dd/mm/yyyy' onkeyup='' onclick=''  maxlength='10' readonly></td>"+
							"<td class='text-center verticalCenter borderBlack'>" +
								"<input type='hidden' id='seq_com' value='"+round+"'>" +
								"<i class='glyphicon glyphicon-plus icon-blue-circle' id='"+round+"' data-id='"+round+"' data-topic='"+round+"' data-type='"+round+"' onclick='addRow_tbCOOP(this.id); '></i></td>"+
							"<td class='text-center verticalCenter borderBlack'><input type='text' class='form-control text-right' id='coop_ComAgeStart"+round+"' onkeypress='validate(event)' onblur='clear_rowCoop(this.id);' value='' maxlength='2'></td>"+
							"<td class='text-center verticalCenter borderBlack'><input type='text' class='form-control text-right' id='coop_ComAgeEnd"+round+"' onkeypress='validate(event);' onblur='clear_rowCoop(this.id); autokey_ageCoop(this.id,1); validate_ageCoop(this.id,1)' value='' maxlength='2'></td>"+
							"<td class='text-center verticalCenter borderBlack'><input type='text' class='autoPercent form-control text-right' id='coop_ComValue"+round+"' onkeypress='validate(event)' onblur='validateMaxCommission(this);' value='0.00'></td>"+
						"</tr>"
							
			$("#tb_COOP_CL tbody").append(row);	
			
			var year_end = new Date().getFullYear();
			year_end = 9999 - 543;
			
			console.log("end>> "+year_end);
			
			jQuery("#tr_COOP_"+round+" .format_date").datetimepicker({
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
			
			jQuery("#tr_COOP_"+round+" .format_date").on("mouseenter mouseleave", function(e){
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
		// แสดงอีก 2 ตารางเมื่อ เลือกข้อมูลในตารางแรกแล้ว
		if(length_tb_COOP == 0 || chk_match == false){
			// table No.2
			document.getElementById('div_COOP_CL_2').style.display = "block";
			var row_tb2 = "<tr id='tr_COOP_"+round+"' data-topic='"+round+"' data-parent='true'>"+
								"<td class='text-center verticalCenter borderBlack'><label>"+key_COOP+"</label>"+
									"<input type='hidden' id='seq' value='"+round+"'>"+
								"</td>"+
								"<td class='verticalCenter borderBlack'>"+name_COOP+"</td>"+
								"<td class='text-center verticalCenter borderBlack'><i class='glyphicon glyphicon-plus icon-blue-circle' id='"+round+"' data-id='"+round+"' data-topic='"+round+"' data-type='"+round+"' onclick='addRow_tbCOOP_2(this.id); '></i></td>"+
								"<td class='text-center verticalCenter borderBlack'><input type='text' class='form-control text-right' id='coop_AmountAgeStart"+round+"' onkeypress='validate(event)' onblur='clear_rowCoop(this.id);' value='' maxlength='2'></td>"+
								"<td class='text-center verticalCenter borderBlack'><input type='text' class='form-control text-right' id='coop_AmountAgeEnd"+round+"' onkeypress='validate(event)' onblur='clear_rowCoop(this.id); autokey_ageCoop(this.id,2); validate_ageCoop(this.id,2)' value='' maxlength='2'></td>"+
								"<td class='text-center verticalCenter borderBlack'><input type='text' class='autoComma form-control text-right' id='coop_AmountValue"+round+"' onkeypress='validate(event)' value='0.00' data-v-min='0.00' data-v-max='9999999999.00'></td>"+
							"</tr>"
			$("#tb_COOP_CL_2 tbody").append(row_tb2);
			
			// table No.3
			document.getElementById('div_COOP_CL_3').style.display = "block";
			var row_tb3 = "<tr id='tr_COOP_"+round+"' data-topic='"+round+"' data-parent='true'>"+
							"<td class='text-center verticalCenter borderBlack'><label>"+key_COOP+"</label>"+
								"<input type='hidden' id='seq' value='"+round+"'>"+
							"</td>"+
							"<td class='verticalCenter borderBlack'>"+name_COOP+"</td>"+
							"<td class='text-center verticalCenter borderBlack'><i class='glyphicon glyphicon-plus icon-blue-circle' id='"+round+"' data-id='"+round+"' data-topic='"+round+"' data-type='"+round+"' onclick='addRow_tbCOOP_3(this.id); '></i></td>"+
							"<td class='text-center verticalCenter borderBlack'><input type='text' class='form-control text-right' id='coop_DiscountAgeStart"+round+"' onkeypress='validate(event)' onblur='clear_rowCoop(this.id);' value='' maxlength='2'></td>"+
							"<td class='text-center verticalCenter borderBlack'><input type='text' class='form-control text-right' id='coop_DiscountAgeEnd"+round+"' onkeypress='validate(event)' onblur='clear_rowCoop(this.id); autokey_ageCoop(this.id,3); validate_ageCoop(this.id,3)' value='' maxlength='2'></td>"+
							"<td class='text-center verticalCenter borderBlack'><input type='text' class='autoPercent form-control text-right' id='coop_DiscountAgeValue"+round+"' onkeypress='validate(event)' onblur='validateMaxCommission(this);' value='0.00'></td>"+
						"</tr>"
			$("#tb_COOP_CL_3 tbody").append(row_tb3);
			
		}
		
		/*เพิ่มข้อมูลในตารางของ Tab ข้อกำหนดการรับประกัน*/
		document.getElementById('div_increaseCOOP_premium_CL').style.display = "block";
		if(length_tb_increaseCOOP == 0 || chk_match_increaseCOOP == false){
			var row_tbCOOP = "<tr>"+
								"<td class='verticalCenter text-center'>"+key_COOP+"" +
									"<input type='hidden' id='seq' value='"+round+"'>"+
								"</td>"+
								"<td class='verticalCenter text-left'>"+name_COOP+"</td>"+
								"<td class='verticalCenter text-center'><input type='text' class='autoPercent3 form-control text-right' value='0.00' data-v-min='0.00' data-v-max='999.99'></td>"+
							"</tr>"
			$("#tbl_increaseCOOP_premium_CL").append(row_tbCOOP);
		}
		
		/*เลขที่กรมธรรม์ (Master Policy)*/
		document.getElementById('div_COOP_masterPolicy_CL').style.display = "block";
		if(length_tb_masterPolicy == 0 || chk_match_masterPolicy == false){
		var row_tbCOOPMaster = "<tr>"+
							"<td class='verticalCenter text-center'>"+key_COOP+""+
								"<input type='hidden' id='seq' value='"+round+"'>"+
							"</td>"+
							"<td class='verticalCenter text-left'>"+name_COOP+"</td>"+
							"<td class='verticalCenter text-center'><input type='text' class='form-control text-center' maxlength='20' onkeyup='replaceSpecialSymbol(this);'></td>"+
						"</tr>"
			$("#tbl_COOP_masterPolicy_CL").append(row_tbCOOPMaster);
		}
		
		$(".autoPercent3").autoNumeric('init',{vMin: '0.00', vMax: '999.99'});
		$(".autoPercent").autoNumeric('init',{vMin: '0.00', vMax: '99.99'});
		$(".autoComma").autoNumeric('init',{vMin: '0.00', vMax: '999999999.99'});
	})
	
	//ลบค่า
	$("#tb_COOP_modal input[type='checkbox']").each(function(){
		if(!$(this).is(':checked')){
			var unchecked = $(this).val();
			var topic = "";
			$("#tb_COOP_CL tbody>tr").each(function(){
				if( unchecked == $(this).find('td:nth-child(2)').text()){
					topic = $(this).data('topic')
					$(this).remove();
				}
				var topic_running = $(this).data('topic')
				if( topic == topic_running){
					$(this).remove();
				}
				
			})
			var topic = "";
			$("#tb_COOP_CL_2 tbody>tr").each(function(){
				if( unchecked == $(this).find('td:nth-child(1) label').text()){
					topic = $(this).data('topic')
					$(this).remove();
				}
				var topic_running = $(this).data('topic')
				if( topic == topic_running){
					$(this).remove();
				}
			})
			var topic = "";
			$("#tb_COOP_CL_3 tbody>tr").each(function(){
				if( unchecked == $(this).find('td:nth-child(1) label').text()){
					topic = $(this).data('topic')
					$(this).remove();
				}
				var topic_running = $(this).data('topic')
				if( topic == topic_running){
					$(this).remove();
				}
			})
			$("#tbl_increaseCOOP_premium_CL tbody>tr").each(function(){
				if( unchecked == $(this).find('td:nth-child(1)').text()){
					$(this).remove();
				}
			})
			$("#tbl_COOP_masterPolicy_CL tbody>tr").each(function(){
				if( unchecked == $(this).find('td:nth-child(1)').text()){
					$(this).remove();
				}
			})
		}
	})
	
	//$('.auto').autoNumeric('init');
	
	/*jQuery(".format_date").datetimepicker({
		  onShow:function( ct ){
		  },
		  timepicker:false,
		  format:'d/m/Y',
		  lang:'th', 
		  yearOffset:543
	}); */
	
}

function autokey_ageCoop(key,tb){

	if(tb == "1"){
		var id = key.replace("coop_ComAgeEnd","");
		var topic = $("#tb_COOP_CL #tr_COOP_"+id).data("topic");
		var numrow = $("#tb_COOP_CL>tbody>tr[data-group='"+topic+"']").length;
		
		var value = $("#"+key).val();
		var tr_next = $("#tb_COOP_CL #tr_COOP_"+id).next().data("id");
		var value_next = $("#coop_ComAgeStart"+tr_next).val();
	}else if(tb == "2"){
		var id = key.replace("coop_AmountAgeEnd","");
		var topic = $("#tb_COOP_CL_2 #tr_COOP_"+id).data("topic");
		var numrow = $("#tb_COOP_CL_2>tbody>tr[data-group='"+topic+"']").length;
		
		var value = $("#"+key).val();
		var tr_next = $("#tb_COOP_CL_2 #tr_COOP_"+id).next().data("id");
		var value_next = $("#coop_AmountAgeStart"+tr_next).val();
	}else if(tb == "3"){
		var id = key.replace("coop_DiscountAgeEnd","");
		var topic = $("#tb_COOP_CL_3 #tr_COOP_"+id).data("topic");
		var numrow = $("#tb_COOP_CL_3>tbody>tr[data-group='"+topic+"']").length;
		
		var value = $("#"+key).val();
		var tr_next = $("#tb_COOP_CL_3 #tr_COOP_"+id).next().data("id");
		var value_next = $("#coop_DiscountAgeStart"+tr_next).val();
	}
	
	var value = $("#"+key).val();
	
	if(numrow >= 1 && !isNaN(value_next)){
		//alert(Number(value)+"|"+Number(value_next-1))
		if(Number(value) != Number(value_next-1)){
			message = "กรุณากรอกข้อมูลให้ถูกต้อง"
			alertError(message)
			$("#"+key).val("")
		}
		
		
	/*	if(tb == "1" && Number(value) != Number(value_next-1)){
//			var tr_prev = $("#tb_COOP_CL #tr_COOP_"+id);
//			var tr_next = $("#tb_COOP_CL #tr_COOP_"+id).next().data("id");
//			$("#coop_ComAgeStart"+tr_next).val(Number(value)+1);
//			$("#coop_ComAgeEnd"+tr_next).val("");
			message = "กรุณากรอกข้อมูลให้ถูกต้อง"
			alertError(message)
			$("#"+key).val("")
		}else if(tb == "2"){
//			var tr_prev = $("#tb_COOP_CL_2 #tr_COOP_"+id);
//			var tr_next = $("#tb_COOP_CL_2 #tr_COOP_"+id).next().data("id");
//			$("#coop_AmountAgeStart"+tr_next).val(Number(value)+1);
//			$("#coop_AmountAgeEnd"+tr_next).val("");
			message = "กรุณากรอกข้อมูลให้ถูกต้อง"
			alertError(message)
			$("#"+key).val("")
		}else if(tb == "3"){
//			var tr_prev = $("#tb_COOP_CL_3 #tr_COOP_"+id);
//			var tr_next = $("#tb_COOP_CL_3 #tr_COOP_"+id).next().data("id");
//			$("#coop_DiscountAgeStart"+tr_next).val(Number(value)+1);
//			$("#coop_DiscountAgeEnd"+tr_next).val("");
			
			message = "กรุณากรอกข้อมูลให้ถูกต้อง"
			alertError(message)
			$("#"+key).val("");
		}*/
		
//		$("#tb_COOP_CL>tbody>tr[data-group='"+topic+"']").each(function(){
//			var child_id = $(this).data("id");
//			
//			//alert(child_id+" next: "+tr_next);
//			if(child_id != tr_next){
//				$(this).find("input:text").val("");
//			}
//		});
		
	}

}
function clear_rowCoop(key){
	var value = $("#"+key).val()
	if(value.includes(".")){
		$("#"+key).val(value.replace(/\./g,""))
		value = $("#"+key).val()
	}
	
	if(value > 999){
		$("#"+key).val(999)
	}
}
function validate_age(key){
	var value = $("#"+key).val()
	if(value.includes(".")){
		$("#"+key).val(value.replace(/\./g,""))
		value = $("#"+key).val()
	}
	
	if(value > 999){
		$("#"+key).val(999)
	}
}
function validate_ageCoop(key,tb){
	
	if(tb == "1"){
		var id = key.replace("coop_ComAgeEnd","");
		var ageStart = Number($("#coop_ComAgeStart"+id).val());
	}else if(tb == "2"){
		var id = key.replace("coop_AmountAgeEnd","");
		var ageStart = Number($("#coop_AmountAgeStart"+id).val());
	}else if(tb == "3"){
		var id = key.replace("coop_DiscountAgeEnd","");
		var ageStart = Number($("#coop_DiscountAgeStart"+id).val());
	}
	
	var ageEnd = Number($("#"+key).val());
	
	if(ageStart != ""){
		if(ageStart >= ageEnd){
			message = "อายุสิ้นสุด จะต้องมีค่ามากกว่าอายุเริ่มต้นเสมอ กรุณาระบุใหม่";
			alertError(message);
			$("#"+key).val("");
		}	
	}
	
	//alert($("#tr_COOP_"+id).closest('tr').next('tr').data('group'))
	
}
function validate_ageTotalCapital(key,tb){
	if(tb == "1"){
		var id = key.replace("capitalHealth_ageEnd","");
		var ageStart = Number($("#capitalHealth_ageStart"+id).val());
	}else if(tb == "2"){
		var id = key.replace("capitalHealthIC_ageEnd","");
		var ageStart = Number($("#capitalHealthIC_ageStart"+id).val());
	}else if(tb == "3"){
		var id = key.replace("capitalHealthSub_ageEnd","");
		var ageStart = Number($("#capitalHealthSub_ageStart"+id).val());
	}
	
	var ageEnd = Number($("#"+key).val());
	
	if(ageStart >= ageEnd){
		message = "อายุสิ้นสุด จะต้องมีค่ามากกว่าอายุเริ่มต้นเสมอ กรุณาระบุใหม่";
		alertError(message);
		$("#"+key).val("");
	}
}

function delete_rowTbCOOP(){
	
	$("#tb_COOP_CL .glyphicon-ok").each(function(){
		var data_topic = $(this).parent().parent().attr("data-topic");
		$("#tb_COOP_CL tbody>tr[data-topic='"+data_topic+"']").remove();
		$("#tb_COOP_CL_2 tbody>tr[data-topic='"+data_topic+"']").remove();
		$("#tb_COOP_CL_3 tbody>tr[data-topic='"+data_topic+"']").remove();
		
		// ลบตารางใน หน้าข้อมูลกรมธรรม์ - การรับแบบเพิ่มเบี้ยพิเศษ
		var key_cooperative = $(this).parent().parent().find('td:nth-child(2)').text();
		$("#tbl_increaseCOOP_premium_CL tbody>tr").each(function(){
			if($(this).find('td:nth-child(1)').text() == key_cooperative){
				$(this).remove();
			}
		})
		// ลบตารางใน หน้าข้อมูลกรมธรรม์ - เลขที่กรมธรรม์ (Master Policy)
		$("#tbl_COOP_masterPolicy_CL tbody>tr").each(function(){
			if($(this).find('td:nth-child(1)').text() == key_cooperative){
				$(this).remove();
			}
		})
	})
}

function addRow_tbCOOP(topic){
	var id_parent = topic;
	var id_child = 0;
	if($("#tb_COOP_CL tbody>tr[data-topic="+id_parent+"]").length > 1){
		var id_child_last = $("#tb_COOP_CL tbody>tr[data-topic="+id_parent+"]:last").attr("data-id");
		id_child_last = id_child_last.replace(id_parent+"_","");
		id_child_last++;
		id_child += id_child_last;
	}
	var last_ageStart = $("#tb_COOP_CL tbody>tr[data-topic="+id_parent+"]:last").find("td:nth-child(7) input").val();
	var last_ageEnd = $("#tb_COOP_CL tbody>tr[data-topic="+id_parent+"]:last").find("td:nth-child(8) input").val();
	
	if(last_ageStart != "" && last_ageEnd != ""){
		var new_ageStart = Number(last_ageEnd) + 1;
		
		var row = "<tr id='tr_COOP_"+id_parent+"_"+id_child+"' data-id='"+id_parent+"_"+id_child+"' data-topic='"+id_parent+"' data-group='"+id_parent+"' data-parent='false'>"+
		"<td class='text-center verticalCenter borderBlack'></td>"+
		"<td class='text-center verticalCenter borderBlack'></td>"+
		"<td class='verticalCenter borderBlack'></td>"+
		"<td class='text-center verticalCenter borderBlack'></td>"+
		"<td class='text-center verticalCenter borderBlack'></td>"+
		"<td class='text-center verticalCenter borderBlack'>" +
			"<input type='hidden' id='seq_com' value='"+id_parent+"'>"+
			"<i class='glyphicon icon-blue-circle glyphicon-minus icon_active' id='"+id_parent+"_"+id_child+"' data-id='"+id_parent+"_"+id_child+"' data-topic='"+id_parent+"' data-type='"+id_parent+"' onclick='removeRow_tbCOOP(this.id)'></i></td>"+
		"<td class='text-center verticalCenter borderBlack'><input type='text' class='form-control text-right' id='coop_ComAgeStart"+id_parent+"_"+id_child+"' onkeypress='validate(event)' value='"+new_ageStart+"' readonly></td>"+
		"<td class='text-center verticalCenter borderBlack'><input type='text' class='form-control text-right' id='coop_ComAgeEnd"+id_parent+"_"+id_child+"' onkeypress='validate(event)' onblur='autokey_ageCoop(this.id,1); validate_ageCoop(this.id,1)' value='' maxlength='2'></td>"+
		"<td class='text-center verticalCenter borderBlack'><input type='text' class='autoPercent form-control text-right' id='coop_ComValue"+id_parent+"_"+id_child+"' onkeypress='validate(event)' onblur='validateMaxCommission(this);' value=''></td>"+
	"</tr>"
		
		$(row).insertAfter($("#tb_COOP_CL tbody>tr[data-topic="+topic+"]:last").closest('tr'));
		//$(row).insertAfter($("#tb_COOP_CL tbody #tr_COOP_"+topic).closest('tr'));
		$(".autoPercent").autoNumeric('init',{vMin: '0.00', vMax: '99.99'});
	}else{
		message = "กรุณาใส่อายุเริ่มต้น และอายุสิ้นสุด";
		alertError(message);
	}
	
}
function removeRow_tbCOOP(child){
	$("#tb_COOP_CL tbody>tr[data-id="+child+"]").remove();
}

function addRow_tbCOOP_2(topic){
	var id_parent = topic;
	var id_child = 0;
	if($("#tb_COOP_CL_2 tbody>tr[data-topic="+id_parent+"]").length > 1){
		var id_child_last = $("#tb_COOP_CL_2 tbody>tr[data-topic="+id_parent+"]:last").attr("data-id");
		id_child_last = id_child_last.replace(id_parent+"_","");
		id_child_last++;
		id_child += id_child_last;
	}
	var last_ageStart = $("#tb_COOP_CL_2 tbody>tr[data-topic="+id_parent+"]:last").find("td:nth-child(4) input").val();
	var last_ageEnd = $("#tb_COOP_CL_2 tbody>tr[data-topic="+id_parent+"]:last").find("td:nth-child(5) input").val();

	if(last_ageStart != "" && last_ageEnd != ""){
		var new_ageStart = Number(last_ageEnd) + 1;
		var row = "<tr id='tr_COOP_"+id_parent+"_"+id_child+"' data-id='"+id_parent+"_"+id_child+"' data-topic='"+id_parent+"' data-group='"+id_parent+"' data-parent='false'>"+
					"<td class='text-center verticalCenter borderBlack'><input type='hidden' id='seq' value='"+id_parent+"'></td>"+
					"<td class='text-center verticalCenter borderBlack'></td>"+
					"<td class='text-center verticalCenter borderBlack'><i class='glyphicon icon-blue-circle glyphicon-minus icon_active' id='"+id_parent+"_"+id_child+"' data-id='"+id_parent+"_"+id_child+"' data-topic='"+id_parent+"' data-type='"+id_parent+"' onclick='removeRow_tbCOOP_2(this.id)'></i></td>"+
					"<td class='text-center verticalCenter borderBlack'><input type='text' class='form-control text-right' id='coop_AmountAgeStart"+id_parent+"_"+id_child+"' onkeypress='validate(event)' value='"+new_ageStart+"' readonly></td>"+
					"<td class='text-center verticalCenter borderBlack'><input type='text' class='form-control text-right' id='coop_AmountAgeEnd"+id_parent+"_"+id_child+"' onkeypress='validate(event)' onblur='autokey_ageCoop(this.id,2); validate_ageCoop(this.id,2)' value='' maxlength='2'></td>"+
					"<td class='text-center verticalCenter borderBlack'><input type='text' class='autoComma form-control text-right' id='coop_AmountValue"+id_parent+"_"+id_child+"' onkeypress='validate(event)' value=''></td>"+
				"</tr>"
					
		$(row).insertAfter($("#tb_COOP_CL_2 tbody>tr[data-topic="+topic+"]:last").closest('tr'));
		$(".autoComma").autoNumeric('init',{vMin: '0.00', vMax: '999999999.99'});
	}else{
		message = "กรุณาใส่อายุเริ่มต้น และอายุสิ้นสุด";
		alertError(message);
	}
	
}
function removeRow_tbCOOP_2(child){
	$("#tb_COOP_CL_2 tbody>tr[data-id="+child+"]").remove();
}

function addRow_tbCOOP_3(topic){
	var id_parent = topic;
	var id_child = 0;
	if($("#tb_COOP_CL_3 tbody>tr[data-topic="+id_parent+"]").length > 1){
		var id_child_last = $("#tb_COOP_CL_3 tbody>tr[data-topic="+id_parent+"]:last").attr("data-id");
		id_child_last = id_child_last.replace(id_parent+"_","");
		id_child_last++;
		id_child += id_child_last;
	}
	var last_ageStart = $("#tb_COOP_CL_3 tbody>tr[data-topic="+id_parent+"]:last").find("td:nth-child(4) input").val();
	var last_ageEnd = $("#tb_COOP_CL_3 tbody>tr[data-topic="+id_parent+"]:last").find("td:nth-child(5) input").val();

	if(last_ageStart != "" && last_ageEnd != ""){
		var new_ageStart = Number(last_ageEnd) + 1;
		var row = "<tr id='tr_COOP_"+id_parent+"_"+id_child+"' data-id='"+id_parent+"_"+id_child+"' data-topic='"+id_parent+"' data-group='"+id_parent+"' data-parent='false'>"+
					"<td class='text-center verticalCenter borderBlack'><input type='hidden' id='seq' value='"+id_parent+"'></td>"+
					"<td class='text-center verticalCenter borderBlack'></td>"+
					"<td class='text-center verticalCenter borderBlack'><i class='glyphicon icon-blue-circle glyphicon-minus icon_active' id='"+id_parent+"_"+id_child+"' data-id='"+id_parent+"_"+id_child+"' data-topic='"+id_parent+"' data-type='"+id_parent+"' onclick='removeRow_tbCOOP_3(this.id)'></i></td>"+
					"<td class='text-center verticalCenter borderBlack'><input type='text' class='form-control text-right' id='coop_DiscountAgeStart"+id_parent+"_"+id_child+"' onkeypress='validate(event)' value='"+new_ageStart+"' readonly></td>"+
					"<td class='text-center verticalCenter borderBlack'><input type='text' class='form-control text-right' id='coop_DiscountAgeEnd"+id_parent+"_"+id_child+"' onkeypress='validate(event)' onblur='autokey_ageCoop(this.id,3); validate_ageCoop(this.id,3)' value='' maxlength='2'></td>"+
					"<td class='text-center verticalCenter borderBlack'><input type='text' class='autoPercent form-control text-right' id='coop_DiscountAgeValue"+id_parent+"_"+id_child+"' onkeypress='validate(event)' onblur='validateMaxCommission(this);' value=''></td>"+
				"</tr>"
					
		$(row).insertAfter($("#tb_COOP_CL_3 tbody>tr[data-topic="+topic+"]:last").closest('tr'));
		$(".autoPercent").autoNumeric('init',{vMin: '0.00', vMax: '99.99'});
	}else{
		message = "กรุณาใส่อายุเริ่มต้น และอายุสิ้นสุด";
		alertError(message);
	}
	
}
function removeRow_tbCOOP_3(child){
	$("#tb_COOP_CL_3 tbody>tr[data-id="+child+"]").remove();
}

function choose_file_pmRate(textfile,validate,span_open,span_download){
	
	var file_ref = "";
	var file_name = "";
	if($("#select_input_pmRate").is(':checked')){
		file_name = $("#fileuploads_PMRateText1_CL").val();
	}
	if($("#select_input_pmRateOriginal").is(':checked')){
		$("#tb_input_modal_pmRate tbody>tr").each(function(i){
			if($(this).find("td:nth-child(1) input[type='radio']").is(":checked")){
				file_name = $(this).find("td:nth-child(3) label").text();
				file_ref = $(this).find("td:nth-child(1) #hd_fileRef"+i+"").val();
				
				$("#"+span_download+">span").removeClass("activecolorgray").addClass("activecolorblue");
				$("#"+span_download+">span").attr("onclick", "openFile_target('"+file_name+"','"+file_ref+"','txt_download')")
				
				$("#"+span_open+">span").removeClass("activecolorgray").addClass("activecolorblue");
				$("#"+span_open+">span").attr("onclick","openFileTextProduct_CL('"+file_name+"', '"+file_ref+"', 41, 'tb_input_fileSee_modal_pmRate', 'modal_input_fileSee_PMRate')");
			
			}
		});
		
	}else{
		//$("#"+span_download+">span").removeClass("activecolorblue").addClass("activecolorgray");
		//$("#"+span_open+">span").removeClass("activecolorblue").addClass("activecolorgray");
		
	}

	if(file_name == ""){
		$("#"+span_download+">span").removeClass("activecolorblue").addClass("activecolorgray");
		$("#"+span_open+">span").removeClass("activecolorblue").addClass("activecolorgray");
	}
	
	$("#"+textfile).val(file_name);
	$("#"+textfile).attr("value",file_name)
	// check * 
	var text = $("#"+textfile).val()
	if(text !== ""){
		$("#"+validate).css("display","none");
	}
	
	/*file Id , layout id , rate cat*/
	var fileId = "";
	var layoutId = "";
	var rateCatId = "";
	if($("#select_input_pmRateOriginal").is(':checked')){
		$("#tb_input_modal_pmRate tbody>tr").each(function(i){
			if($(this).find('td:nth-child(1) input[type="radio"]').is(':checked')){
				rateCatId = $(this).find("td:nth-child(1) #hd_rateCatId"+i+"").val();
				fileId = $(this).find("td:nth-child(1) #hd_fileId"+i+"").val();
				layoutId = $(this).find("td:nth-child(1) #hd_fileLayout"+i+"").val();
			}
		})
	}else if($("#select_input_pmRate").is(':checked')){
		rateCatId = $("#rate_cat_pm").val();
		fileId = $("#fileId_pm").val();
		layoutId = $("#rate_layout_pm").val();
	}
	
	if(textfile == "ip_fileuploads_CL_PM_Rate1_Show_1"){
		$("#"+textfile).parent().parent().parent().find("#fileId_base_PM").val(fileId)
		$("#"+textfile).parent().parent().parent().find("#rate_layout_id_base_PM").val(layoutId)
		$("#"+textfile).parent().parent().parent().find("#rate_cat_id_base_PM").val(rateCatId)
	}else{
		var id = textfile;
			id = id.replace("ip_fileuploads_CL_Additional_contract_Show_","");
		
		/*ถ้าเกิดมีลูก data_group จะไม่ใช่ null*/	
		var data_group = $("#"+textfile).parent().parent().parent().data('group');
		var rider_parent = $("#"+textfile).parent().parent().parent().data('id');
		var flag_parent = false;
		$("#tb_Additional_contract tbody>tr").each(function(){
			if( rider_parent == $(this).data('group')){
				flag_parent = true;
				$("#"+textfile).parent().find("#rate_cat_id_rider_PM"+id+"").val(15)
				$("#"+textfile).parent().find("#fileId_rider_PM"+id+"").val(fileId)
				$("#"+textfile).parent().find("#rate_layout_id_rider_PM"+id+"").val(layoutId)
			}
		})
		if(data_group != null){
			$("#tb_Additional_contract tbody").find('#tr_Additional_contract_'+data_group).find('td:nth-child(6)>div #rate_cat_id_rider_PM'+data_group).val(15)
			$("#"+textfile).parent().find("#rate_cat_id_rider_PM"+id+"").val(16)
			$("#"+textfile).parent().find("#fileId_rider_PM"+id+"").val(fileId)
			$("#"+textfile).parent().find("#rate_layout_id_rider_PM"+id+"").val(layoutId)
		}else if(!flag_parent){
			$("#"+textfile).parent().find("#fileId_rider_PM"+id+"").val(fileId)
			$("#"+textfile).parent().find("#rate_layout_id_rider_PM"+id+"").val(layoutId)
			$("#"+textfile).parent().find("#rate_cat_id_rider_PM"+id+"").val(rateCatId)
		}
		
	}
	
	$("#modal_input_PMRate").modal("hide");
}
function selectFileRate_CL(type,select_file,file_format,file_format2,dd_opt,cv_btn,btn_download){	
	
	var tbl_name = "";
	var tbl_col = "";
	var dd_opt = dd_opt;
	var cv_button = cv_btn;
	var select_file_name = "";
	var validateFile = "";
	var prd_code = $("#pass_Insurance_product_cl").val();
	var cov_code = "";
	var btn_view = "";
	/*file*/
	var file_id = 0;
	var file_type_id = 3;
	var file_path = "";
	var file_pattern = "";
	var user_code = "0000000";	
	
	/* แบบประกันหลัก - PMRate BasePlan*/
	if(type == 1){
		
		tbl_name = "tb_input_fileSee_modal_pmRate";
		tblAuto_name = "tb_input_file_modal_pmRate"; // ใส่ไฟล์
		modal_name = "modal_input_file_PMRate";  //ใส่ไฟล์
		modal_cv = "modal_input_fileSee_PMRate";
		tbl_col = 41;		
		file_button1 = "bt_submit_pmRate";
		file_button2 = "bt_cancel_pmRate";
		
		select_file_name = select_file.replace("fileuploads_PMRate","");
		select_file_name = select_file_name.replace("_CL","");
		selectFile = "fileuploads_PMRate"+select_file_name+"_CL";
		textFile = "fileuploads_PMRateText"+select_file_name+"_CL";
		cov_code = $("#tb_PM_Rate tbody>tr").eq(0).find('td:nth-child(1) label').text();
		validateFile = "validate_rate"+select_file_name+"_CL";
		
		rate_cat_id = $("#rate_cat_pm").val();
		sub_cat_id = $("#form_input_file #sub_cat_pm").val();
//		btn_download = "span_PM_Ratedownload_"+select_file_name;
		btn_view = "span_PM_Rateopen_"+select_file_name;
	}
	/* แบบประกันหลัก NAR BasePlan*/
	if(type == 2){

		
		file_button2 = "bt_cancel_BaseNAR";
		
		select_file_name = select_file.replace("fileuploads_NAR","");
		select_file_name = select_file_name.replace("_CL","");
		selectFile = "fileuploads_NAR"+select_file_name+"_CL";
		textFile = "fileuploads_NARText"+select_file_name+"_CL";
		
		validateFile = "validate_NAR"+select_file_name+"_CL";
		
		rate_cat_id = $("#rate_cat_id_base_NAR").val();
		sub_cat_id = $("#sub_cat_NAR").val();
//		btn_download = "span_PM_RatedownloadNAR_"+select_file_name;
		btn_view = "span_PM_RateopenNAR_"+select_file_name;
		
		cov_code = $("#tb_PM_Rate tbody>tr").eq(0).find('td:nth-child(1) label').text();
		var file_name = $("#"+selectFile).val().replace(/\\/g, '/').replace(/.*\//, '');

		file_pattern = file_name.replace(prd_code, "{P Code}");
		file_pattern = file_pattern.replace(cov_code+"_", "");

		if(file_pattern == "AmtRe_CL 18 1K_{P Code}.txt"){
		
			tbl_name = "tb_input_fileSee_modal_NAR";
			tblAuto_name = "tb_input_file_modal_NAR"; // ใส่ไฟล์
			modal_name = "modal_input_file_NAR";  //ใส่ไฟล์
			modal_cv = "modal_input_fileSee_NAR";
			tbl_col = 69;
			file_button1 = "bt_submit_BaseNAR";
		}else if(file_pattern == "AmtRe_ASA_CL 14 1K_{P Code}.txt"){
			tbl_name = "tb_input_fileSee_modal_NAR_ASA";
			tblAuto_name = "tb_input_file_modal_NAR_ASA"; // ใส่ไฟล์
			modal_name = "modal_input_file_NAR_ASA";  //ใส่ไฟล์
			modal_cv = "modal_input_fileSee_NAR_ASA";
			tbl_col = 70;
			file_button1 = "bt_submit_BaseNAR_ASA";
		}else{
			check_filenameNAR(selectFile, file_format, file_format2);
			$("#"+textFile).val("");
			$("#"+selectFile).val("");
			$('#'+cv_button).prop('disabled', true);		
			$('#'+cv_button+">span").removeClass("activecolorblue").addClass("activecolorgray");
			$("#"+btn_download).prop('disabled', true);	
			$("#"+btn_download+">span").removeClass("activecolorblue").addClass("activecolorgray");
		}
	
	}
	/* แบบประกันเสริม - PMRate Rider */
	if(type == 11){
		
		tbl_name = "tb_input_fileSee_modal_pmRate";
		tblAuto_name = "tb_input_file_modal_pmRate"; // ใส่ไฟล์
		modal_name = "modal_input_file_PMRate";  //ใส่ไฟล์
		modal_cv = "modal_input_fileSee_PMRate";
		tbl_col = 41;		
	
		file_button1 = "bt_submit_pmRate";
		file_button2 = "bt_cancel_pmRate";
		
		select_file_name = select_file.replace("fileuploads_PMRate","");
		select_file_name = select_file_name.replace("_CL","");
		selectFile = "fileuploads_PMRate"+select_file_name+"_CL";
		textFile = "fileuploads_PMRateText"+select_file_name+"_CL";
		
		validateFile = "validate_rate"+select_file_name+"_CL";
		
		rate_cat_id = $("#rate_cat_pm").val();
		sub_cat_id = $("#form_input_file #sub_cat_pm").val();
//		btn_download = "span_Additional_contractdownload_"+select_file_name;
		btn_view = "span_Additional_contractopenNAR_"+select_file_name;
	}
	/* แบบประกันเสริม - NAR Rider */
	if(type == 22){
	
		/*tbl_name = "";
		tblAuto_name = ""; // ใส่ไฟล์
		modal_name = "";  //ใส่ไฟล์
		modal_cv = "";
		tbl_col = "";			
		file_button1 = "";*/
		file_button2 = "bt_cancel_BaseNAR";
		
		select_file_name = select_file.replace("ip_fileuploads_CL_AdditionalNAR_contract_Show_","");
		select_file_name = select_file_name.replace("_CL","");
		selectFile = "ip_fileuploads_CL_AdditionalNAR_contract_Show_"+select_file_name;
		textFile = "ip_fileuploads_AdditionalNAR_contract_"+select_file_name;
		if(select_file_name.includes("_")){
			id_parent = $("#tb_Additional_contract tbody").find('#tr_Additional_contract_'+select_file_name).data('group');
			cov_code = $("#tb_Additional_contract tbody").find('#tr_Additional_contract_'+id_parent).find('td:nth-child(2) label').text();
		}else{
			var eq = Number(select_file_name) - 1
			cov_code = $("#tr_Additional_contract_"+select_file_name).find('td:nth-child(2) label').text();
		}
		validateFile = "validate_AdditionalNAR_CL_"+select_file_name;
		
		rate_cat_id = $("#rate_cat_id_rider_NAR"+select_file_name).val();
		sub_cat_id = $("#sub_cat_NAR").val();
//		btn_download = "span_Additional_contractdownloadNAR_"+select_file_name;
		btn_view = "span_Additional_contractopenNAR_"+select_file_name;
	

		var file_name = $("#"+selectFile).val().replace(/\\/g, '/').replace(/.*\//, '');
		file_pattern = file_name.replace(prd_code, "{P Code}");
		file_pattern = file_pattern.replace("_"+cov_code, "");
		console.log(file_pattern)
		if(file_pattern == "AmtRe_CL 18 1K_{P Code}.txt"){
		
			tbl_name = "tb_input_fileSee_modal_NAR";
			tblAuto_name = "tb_input_file_modal_NAR"; // ใส่ไฟล์
			modal_name = "modal_input_file_NAR";  //ใส่ไฟล์
			modal_cv = "modal_input_fileSee_NAR";
			tbl_col = 69;
			file_button1 = "bt_submit_BaseNAR";
		}else if(file_pattern == "AmtRe_ASA_CL 14 1K_{P Code}.txt"){
			tbl_name = "tb_input_fileSee_modal_NAR_ASA";
			tblAuto_name = "tb_input_file_modal_NAR_ASA"; // ใส่ไฟล์
			modal_name = "modal_input_file_NAR_ASA";  //ใส่ไฟล์
			modal_cv = "modal_input_fileSee_NAR_ASA";
			tbl_col = 70;
			file_button1 = "bt_submit_BaseNAR_ASA";
		}else{
			check_filenameNAR(selectFile, file_format, file_format2);
			$("#"+textFile).val("");
			$("#"+selectFile).val("");
			$('#'+cv_button).prop('disabled', true);		
			$('#'+cv_button+">span").removeClass("activecolorblue").addClass("activecolorgray");
			$("#"+btn_download).prop('disabled', true);	
			$("#"+btn_download+">span").removeClass("activecolorblue").addClass("activecolorgray");
			
		}
	}
/*	 แบบประกันเสริม - แบบทุน 10k และ 100k 
	if(type == 3){
		
		tbl_name = "tb_input_fileSee_modal_pmRate";
		tblAuto_name = "tb_input_file_modal_pmRate"; // ใส่ไฟล์
		modal_name = "modal_input_file_PMRate";  //ใส่ไฟล์
		modal_cv = "modal_input_fileSee_PMRate";
		tbl_col = 41;		
		file_button1 = "bt_submit_pmRate";
		file_button2 = "bt_cancel_pmRate";
		
		select_file_name = select_file.replace("fileuploads_PMRate","");
		select_file_name = select_file_name.replace("_CL","");
		//selectFile = "ip_fileuploads_CL_Additional_contract_Show_"+select_file_name+"";
		//textFile = "ip_fileuploads_Additional_contract_"+select_file_name+"";
		
		selectFile = "fileuploads_PMRate"+select_file_name+"_CL";
		textFile = "fileuploads_PMRateText"+select_file_name+"_CL";
		
		validateFile = "validate_Additional_CL_"+select_file_name+"_CL";
	
	}
	 แบบประกันเสริม NAR - แบบทุน 10k และ 100k 
	if(type == 4){
		
		tbl_name = "tb_input_fileSee_modal_NAR";
		tblAuto_name = "tb_input_file_modal_NAR"; // ใส่ไฟล์
		modal_name = "modal_input_file_NAR";  //ใส่ไฟล์
		modal_cv = "modal_input_fileSee_NAR";
		tbl_col = 41;		
		file_button1 = "bt_submit_BaseNAR";
		file_button2 = "bt_cancel_BaseNAR";
		
		select_file_name = select_file.replace("ip_fileuploads_CL_AdditionalNAR_contract_Show_","");
		//select_file_name = select_file_name.replace("_CL","");
		selectFile = "ip_fileuploads_CL_AdditionalNAR_contract_Show_"+select_file_name+"";
		textFile = "ip_fileuploads_AdditionalNAR_contract_"+select_file_name+"";
		
		validateFile = "validate_AdditionalNAR_CL_"+select_file_name+"";
	}*/
	
	if($("#"+selectFile).val() != ""){
		
		

		$("#"+selectFile).click(function () {
		    this.value = null;	   
		});
		
		
		$("#"+tblAuto_name+" tbody").empty();
		$("#"+tbl_name+" tbody").empty();
		var file_name = $("#"+selectFile).val().replace(/\\/g, '/').replace(/.*\//, '');	
			file_path = $("#"+selectFile).val();
			
		if($("#"+textFile).val() == ""){
			file_id = "";
		}
		
		$("#"+modal_name+" .modal-header>h4>span").html(file_name);
		$("#"+file_button1).unbind();
		//$("#"+modal_cv+" .modal-header>h4>span").html(" ("+dd_text+")");
		
		/*file pattern*/
		if(type == 1){
			
			file_pattern = file_name.replace(cov_code, "{ประเภท}");
			file_pattern = file_pattern.replace(prd_code, "{Code}");
		}else if(type == 11){
			var flag_chk = false;
			$("#tb_Additional_contract tbody>tr").each(function(){
				var cov_code = $(this).find('td:nth-child(2) label').text();
				if(cov_code != ""){
					if(file_name.includes(cov_code) && flag_chk == false){
						file_pattern = file_name.replace(cov_code, "{ประเภท}");
						flag_chk = true;
					}
				}
			})
			file_pattern = file_pattern.replace(prd_code, "{Code}");
		}
		else if(type == 2 || type == 22){	
			file_pattern = file_name.replace(prd_code, "{P Code}");
			file_pattern = file_pattern.replace("_"+cov_code, "");
			
		}

		if(file_format2 != ""){
			if(check_filenameNAR(selectFile, file_format, file_format2) == false){
				//$("#"+validateFile).css("display", "inline-block");
				$("#"+textFile).val("");
				$("#"+selectFile).val("");
				$('#'+cv_button).prop('disabled', true);		
				$('#'+cv_button+">span").removeClass("activecolorblue").addClass("activecolorgray");
				$("#"+btn_download).prop('disabled', true);	
				$("#"+btn_download+">span").removeClass("activecolorblue").addClass("activecolorgray");
			}else{
				//openFile(event,selectFile,tbl_name,tbl_col);
				openFile(event,selectFile,tblAuto_name,tbl_col);
				$("#base64_fileTXT_CL").val("");
				$("#"+modal_name).modal("show");	
				
				convertToBase64(selectFile, file_type_id)
			
				$("#"+file_button1).click(function() {
					$("#modal_waiting").modal('show');
					 var base64 = $("#base64_fileTXT_CL").val();
					 if(base64 != ""){
						 var dateTime = getCurrentDate();
			    		   var file_name_update = "3_"+dateTime+".txt"
				    	   datajson = {				        	
						    		"method" : "uploadFile_txt",
						    		"passInsurance" : $("#pass_Insurance_product_cl").val(),
						    		"byte_file" : base64,
						    		"file_name" : file_name,
						    		"file_name_update" : file_name_update
						    	}	
				              console.log(datajson);
			    		   
			    		   $.ajax({
						    	 type: "POST",
						 	    url : "Download_Upload_Servlet",
						 	    data: datajson,   
						 	    success : function(response) {	
						 	    	var obj_ref = response.upload_ref
						 	    	console.log(obj_ref)
						 	
						 	    	/*save file*/				
									set_Filevalue(type,select_file_name,file_id,file_type_id,file_name,obj_ref,file_pattern,rate_cat_id,sub_cat_id,user_code,cv_button);		
									/*end save file*/
						 	    	 $("#modal_waiting").modal('hide');
						 	    	 $("body").addClass("body_nopadding");
								 	 $("#"+btn_download+">span").attr("onclick", "openFile_target('"+file_name+"','"+obj_ref+"','txt_download')");
								 	 $('#'+cv_button+">span").attr("onclick", "openFileTextProduct_CL('"+file_name+"','"+obj_ref+"',"+tbl_col+",'"+tbl_name+"', '"+modal_cv+"')");
								 	 $("#"+btn_download+">span").removeClass("activecolorgray").addClass("activecolorblue");
						 	    }
						    })
			    		 
					 }
					
						
					$("#"+textFile).val(file_name);
					$("#"+validateFile).css("display", "none");				
					$('#'+cv_button+">span").removeClass("activecolorgray").addClass("activecolorblue");
					/*$('#'+cv_button).attr("onclick","open_modalCV("+type+",this.id)");*/
					
					/*$('#'+cv_button).click(function(){
						$("#"+modal_cv).modal('show');
					})		*/		
				});
				
				$("#"+file_button2).click(function() {
					$("#"+textFile).val("");				
					$('#'+cv_button).prop('disabled', true);
					$('#'+cv_button+">span").removeClass("activecolorblue").addClass("activecolorgray");
					$("#"+btn_download+">span").removeClass("activecolorblue").addClass("activecolorgray");
				});
			}	
		}else{	
			if(check_filename(selectFile, file_format, "") == false){
				$("#"+validateFile).css("display", "inline-block");
				$("#"+textFile).val("");
				$("#"+selectFile).val("");
				$('#'+cv_button).prop('disabled', true);		
				$('#'+cv_button+">span").removeClass("activecolorblue").addClass("activecolorgray");
				$("#"+btn_download).prop('disabled', true);	
				$("#"+btn_download+">span").removeClass("activecolorblue").addClass("activecolorgray");
			}else{
				//openFile(event,selectFile,tbl_name,tbl_col);
				openFile(event,selectFile,tblAuto_name,tbl_col);
				$("#base64_fileTXT_CL").val("");
				$("#"+modal_name).modal("show");	

				convertToBase64(selectFile, file_type_id)
				
				$("#"+file_button1).click(function() {
					$("#modal_waiting").modal('show');
					var base64 = $("#base64_fileTXT_CL").val();
					 if(base64 != ""){
						 var dateTime = getCurrentDate();
			    		   var file_name_update = "3_"+dateTime+".txt"
				    	   datajson = {				        	
						    		"method" : "uploadFile_txt",
						    		"passInsurance" : $("#pass_Insurance_product_cl").val(),
						    		"byte_file" : base64,
						    		"file_name" : file_name,
						    		"file_name_update" : file_name_update
						    	}	
				              console.log(datajson);
			    		   
			    		   $.ajax({
						    	 type: "POST",
						 	    url : "Download_Upload_Servlet",
						 	    data: datajson,   
						 	    success : function(response) {	
						 	    	var obj_ref = response.upload_ref
						 	    	console.log(obj_ref)
						 	
						 	    	/*save file*/				
									set_Filevalue(type,select_file_name,file_id,file_type_id,file_name,obj_ref,file_pattern,rate_cat_id,sub_cat_id,user_code,cv_button);		
									/*end save file*/
						 	    	 
						 	    	 $("#modal_waiting").modal('hide');
						 	    	 $("body").addClass("body_nopadding");
								 	 $("#"+btn_download+">span").attr("onclick", "openFile_target('"+file_name+"','"+obj_ref+"','txt_download')");
								 	 $('#'+cv_button+">span").attr("onclick", "openFileTextProduct_CL('"+file_name+"', '"+obj_ref+"',"+tbl_col+",'"+tbl_name+"', '"+modal_cv+"')");
								 	 $("#"+btn_download+">span").removeClass("activecolorgray").addClass("activecolorblue");
						 	    }
						    })
			    		 
					 }
					
					$("#"+textFile).val(file_name);
					$("#"+validateFile).css("display", "none");				
					$('#'+cv_button+">span").removeClass("activecolorgray").addClass("activecolorblue");
				/*	$('#'+cv_button).attr("onclick","open_modalCV("+type+",this.id)");*/
					
					/*$('#'+cv_button).click(function(){
						$("#"+modal_cv).modal('show');
					})*/
					
				});
				
				$("#"+file_button2).click(function() {
					$("#"+textFile).val("");
					$('#'+cv_button).prop('disabled', true);
					$('#'+cv_button+">span").removeClass("activecolorblue").addClass("activecolorgray");
					$("#"+btn_download+">span").removeClass("activecolorblue").addClass("activecolorgray");
					
				});
			}
		}
		
		
	}

}
var openFile = function(event,fileID,tableName,tableCol) {	
	
	
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function(){
   
      var text = reader.result;	      
      var textRow = text.split('\n');
      var textLength = textRow.length - 1;
     
      if(textLength > 50){
    	  textLength = 50;
      }else{
    	  textLength = textLength;
      }
      var col1 = "";
	  var col2 = "";
	  var col3 = "";
	  var col4 = "";
	  var col5 = "";
	  var col6 = "";
	  var col7 = "";
	  var tableRow = "";
      for(var i=0; i<textLength; i++ ) {
    	  var textRow_split = textRow[i].split(',');  	 
    	  if(tableCol == 41){
    		  	col1 = textRow[i].substr(0,2);
    		  	col2 = textRow[i].substr(2,1);
    		  	col3 = textRow[i].substr(3,2);
    		  	col4 = textRow[i].substr(5,6);
    		  tableRow += "<tr>"+
    		  	"<td class='text-center'>"+col1+"</td>"+
				"<td class='text-center'>"+col2+"</td>"+
				"<td class='text-right'>"+col3+"</td>"+
				"<td class='text-right'>"+col4+"</td>"+
				"</tr>";
    		/*  $("#"+tableName+">tbody").append(tableRow);	*/
    	  }else if(tableCol == 5){
    		  	col1 = textRow[i].substr(0,3);
    		  	col2 = textRow[i].substr(3,2);
    		  	col3 = textRow[i].substr(5,1);
    		  	col4 = textRow[i].substr(6,2);
    		  	col5 = textRow[i].substr(8,6);
    		  	tableRow += "<tr>"+
    		  	"<td class='text-center'>"+col1+"</td>"+
				"<td class='text-center'>"+col2+"</td>"+
				"<td class='text-right'>"+col3+"</td>"+
				"<td class='text-right'>"+col4+"</td>"+
				"<td class='text-right'>"+col5+"</td>"+
				"</tr>";
				/*$("#"+tableName+">tbody").append(tableRow);	*/
    	  }else if(tableCol == 6){
    		   	col1 = textRow[i].substr(0,4);
    		   	col2 = textRow[i].substr(4,1);
    		   	col3 = textRow[i].substr(5,1);
    		   	col4 = textRow[i].substr(6,2);
    		   	col5 = textRow[i].substr(7,1);
    		   	col6 = textRow[i].substr(8,5);
    		   	tableRow += "<tr>"+
    		  	"<td class='text-center'>"+col1+"</td>"+
				"<td class='text-center'>"+col2+"</td>"+
				"<td class='text-right'>"+col3+"</td>"+
				"<td class='text-right'>"+col4+"</td>"+
				"<td class='text-right'>"+col5+"</td>"+
				"<td class='text-right'>"+col6+"</td>"+
				"</tr>";   
    		 /* $("#"+tableName+">tbody").append(tableRow);	*/
    	  }else if(tableCol == 69){
  		   	col1 = textRow[i].substr(0,4);
		   	col2 = textRow[i].substr(4,2);
		   	col3 = textRow[i].substr(6,1);
		   	col4 = textRow[i].substr(7,2);
		   	col5 = textRow[i].substr(9,2);
		   	col6 = textRow[i].substr(11,6);
			col7 = textRow[i].substr(17,1);
			tableRow += "<tr>"+
		  	"<td class='text-center'>"+col1+"</td>"+
			"<td class='text-center'>"+col2+"</td>"+
			"<td class='text-right'>"+col3+"</td>"+
			"<td class='text-right'>"+col4+"</td>"+
			"<td class='text-right'>"+col5+"</td>"+
			"<td class='text-right'>"+col6+"</td>"+
			"<td class='text-right'>"+col7+"</td>"+
			"</tr>";   
		 /* $("#"+tableName+">tbody").append(tableRow);	*/
		  
	  }else if(tableCol == 70){
		   	col1 = textRow[i].substr(0,4);
		   	col2 = textRow[i].substr(4,2);
		   	col3 = textRow[i].substr(6,2);
		   	col4 = textRow[i].substr(8,2);
		   	col5 = textRow[i].substr(10,4);
		   
		   	tableRow += "<tr>"+
		  	"<td class='text-center'>"+col1+"</td>"+
			"<td class='text-center'>"+col2+"</td>"+
			"<td class='text-right'>"+col3+"</td>"+
			"<td class='text-right'>"+col4+"</td>"+
			"<td class='text-right'>"+col5+"</td>"+
			
			"</tr>";   
		 /* $("#"+tableName+">tbody").append(tableRow);	*/
	  }
    	 
      }
      $("#"+tableName+">tbody").append(tableRow);
      
      if ($.fn.dataTable.isDataTable( "#"+tableName ) ) {   	  
		 	
      }else{      
    	 
    	  $("#"+tableName).DataTable({"ordering": false,"paging": false,"bInfo" : false, 
			  "oLanguage": {
		      "sSearch": "ค้นหา: "
		    }
		  });
      }
    };   
   setTimeout(function(){
    	reader.readAsText(document.getElementById(fileID).files[0]);    
    }, 100);
  }
function check_filename(fileID, fileFormat){
	var filename = document.getElementById(fileID).files[0].name.split('.');			
		if(filename[0] != fileFormat){
	    	message = "กรุณานำเข้าไฟล์ที่ถูกต้อง";
	    	$("#fileId_pm").val("")
	    	$("#rate_layout_pm").val("")
			alertError(message);
			return false;
	 }	
}
function check_filenameNAR(fileID, fileFormat , fileFormat2){
	var filename = document.getElementById(fileID).files[0].name.split('.');			
		if(filename[0] != fileFormat && filename[0] != fileFormat2){
	    	message = "กรุณานำเข้าไฟล์ที่ถูกต้อง";
	    	$("#fileId_base_NAR").val("")
	    	$("#rate_layout_id_base_NAR").val("")
			alertError(message);
			return false;
	 }	
}

function set_Filevalue(type,id,file_id,file_type_id,file_name,file_path,file_pattern,rate_cat_id,sub_cat_id,user_code,cv_button){

	if(type == 1 || type == 11){
		var input_id = "fileuploads_PMRateText1_CL"
		var input_fileId = "fileId_pm"
		var input_layoutId = "rate_layout_pm"
	}else if(type == 2){
		var input_id = "fileuploads_NARText1_CL"
		var input_fileId = "fileId_base_NAR"
		var input_layoutId = "rate_layout_id_base_NAR"
	}else if(type == 22){
		var input_id = "ip_fileuploads_AdditionalNAR_contract_"+id
		var input_fileId = "fileId_rider_NAR"+id
		var input_layoutId = "rate_layout_id_rider_NAR"+id
	}
	
	datajson = {				        	
			file_id 		: file_id,
			file_type_id 	: file_type_id,
			file_name 		: file_name,
			file_url		: file_path,
			file_pattern	: file_pattern,
			rate_cat_id		: rate_cat_id,
			sub_cat_id      : sub_cat_id,
			user_code		: user_code	        
	}	
	console.log("datajson",datajson)
	$.ajax({
	    type: "POST",
	    url : "BasePlanCL_save_file_Servlet",
	    data: datajson,       
	    success : function(response) {					    	
	    	if(type == 1 || type == 11){
	    		/*PM_Rate*/
	    		$("#rate_layout_pm").val(response.rate_layout_id);
	    		$("#fileId_pm").val(response.file_id);
	    	}else if(type == 2){
	    		$("#fileId_base_NAR").val(response.file_id);
	    		$("#rate_layout_id_base_NAR").val(response.rate_layout_id);
	    	}else if(type == 22){
	    		$("#fileId_rider_NAR"+id).val(response.file_id);
	    		$("#rate_layout_id_rider_NAR"+id).val(response.rate_layout_id);
	    	}
	    	/*else if(type == 4){
	    		Extra_Rate
	    		$("#ext_rateLayout"+id).val(response.rate_layout_id);
	    		$("#ext_fileID"+id).val(response.file_id);
	    	}else if(type == 5){
	    		CV_Rate
	    		$("#cv_rateLayout"+id).val(response.rate_layout_id);
	    		$("#cv_fileID"+id).val(response.file_id);
	    	}else if(type == 21){
	    		EM
	    		$("#em_rateLayout"+id).val(response.rate_layout_id);
	    		$("#em_fileID"+id).val(response.file_id);
	    	}else if(type == 22){
	    		SA
	    		$("#decrease_rateLayout"+id).val(response.rate_layout_id);
	    		$("#decrease_fileID"+id).val(response.file_id);
	    	}else if(type == 32){
	    		CV Low
	    		$("#cvLow_rateLayout"+id).val(response.rate_layout_id);
	    		$("#cvLow_fileID"+id).val(response.file_id);
	    	}	*/				    	
	    },
	    error : function(response) {	
	    	console.log("save file error");
	    	message = "ไม่สามารถบันทึกไฟล์ได้";
			alertError(message);
	    	$("#"+input_id).val("");
	    	$("#"+input_fileId).val("");
	    	$("#"+input_layoutId).val("");
	    	$('#'+cv_button+">span").removeClass("activecolorblue").addClass("activecolorgray");
			$('#'+cv_button).attr("onclick","");
	    	
	    }
	});		
}

function convertToBase64(file_id,type_file){
	//Read File
    var selectedFile = document.getElementById(file_id).files;
    //Check File is not Empty
    if (selectedFile.length > 0) {
        // Select the very first file from list
        var fileToLoad = selectedFile[0];
        // FileReader function for read the file.
        var fileReader = new FileReader();
        var base64;
        // Onload of file read the file content
        fileReader.onload = function(fileLoadedEvent) {
            base64 = fileLoadedEvent.currentTarget.result;
         
            // Print data in console
           // console.log(base64);
            
           if(type_file == "3"){
            	$("#base64_fileTXT_CL").val(base64)
            }
           
        };
        // Convert data to base64
        fileReader.readAsDataURL(fileToLoad);
    }
}

function open_modalCV(type,id){
	var tbl_name = "";
	var rowID = "";
	var head_modal = "";
	var head_modal_text = "";

	if(type == 1 || type == 3){	
		tbl_name = "tb_input_fileSee_modal_pmRate";
		modal_cv = "modal_input_fileSee_PMRate";
		rowID = id.replace("span_PM_Rateopen_","");
		head_modal = $("#"+tbl_name).find("#tbody_PM_Rate"+rowID+" td:nth-child(3) input[type='text']").val();
	}else if(type == 2 || type == 4){
		tbl_name = "tb_input_fileSee_modal_NAR";
		modal_cv = "modal_input_fileSee_NAR";
		rowID = id.replace("span_PM_RateopenNAR_","");
		head_modal = $("#"+tbl_name).find("#tbody_PM_Rate"+rowID+" td:nth-child(3) input[type='text']").val();
	}
	
	$("#"+modal_cv+" .modal-header>h4>span").html(head_modal);
	$("#"+modal_cv).modal('show');
}

/* การชำระเบี้ยด้วยบัตรเครดิต */
$("#lb_credit_firstYear_CL").on("change",function(){
	var value = $("#lb_credit_firstYear_CL option:selected").val();
	if(value !== "NONE"){
		$("#lb_credit_nextYear_CL").attr("disabled",false);
	}else{
		$("#lb_credit_nextYear_CL option[value='NONE']").attr("selected","selected");
		$("#lb_credit_nextYear_CL").attr("disabled","disabled");
	}
})

/*จำนวนเงินเอาประกันภัยสูงสุด (ต่อแบบ) คนเดียว*/
$("#amount_insure_alone_unit_CL").on("change",function(){
	var data = replaceComma($("#amount_insure_alone_CL").val())
	$("#tbl_insure_alone .autoComma-alone").autoNumeric('destroy');
	$("#tbl_insure_alone .autoPercent3-alone").autoNumeric('destroy');
	var value = $(this).val();
	if(value == "CURRENCY"){
		$("#amount_insure_alone_CL").removeClass("autoPercent3-alone").addClass("autoComma-alone")
		$("#amount_insure_alone_CL").attr("data-v-max","999999999.99");
		$("#tbl_insure_alone .autoComma-alone").autoNumeric('init', { aSep: ',', vMin: '0.00', vMax: '999999999.99', wEmpty: 'zero' });
		
	}else if(value == "PERCENT"){
		if(Number(data) > 999.99){
			$("#amount_insure_alone_CL").val("0.00")
		}
		$("#amount_insure_alone_CL").removeClass("autoComma-alone").addClass("autoPercent3-alone")
		$("#amount_insure_alone_CL").attr("data-v-max","999.99");
		$("#tbl_insure_alone .autoPercent3-alone").autoNumeric('init',{vMin: '0.00', vMax: '999.99'});
	}
	
})

function change_unit_CL(e,col){
	
	$(e).parent().parent().find('td:nth-child('+col+') .autoComma').autoNumeric('destroy');
	$(e).parent().parent().find(".autoComma-alone").autoNumeric('destroy');
	$(e).parent().parent().find(".autoPercent3-alone").autoNumeric('destroy');
	$(e).parent().parent().find('td:nth-child('+col+') input[type="text"]').removeClass("autoComma")
	
	var unit = $(e).val();
	if(unit == "CURRENCY"){
		if(Number(replaceComma($(e).parent().parent().find('td:nth-child('+col+') input[type="text"]').val())) > 999999999.99){
			$(e).parent().parent().find('td:nth-child('+col+') input[type="text"]').val("0.00");
		}
		$(e).parent().parent().find('td:nth-child('+col+') input[type="text"]').removeClass("autoPercent3-alone").addClass("autoComma-alone")
		$(e).parent().parent().find('td:nth-child('+col+') input[type="text"]').attr("data-v-max","999999999.99");
		$(e).parent().parent().find(".autoComma-alone").autoNumeric('init', { aSep: ',', vMin: '0.00', vMax: '999999999.99', wEmpty: 'zero' });
		
	}else if(unit == "PERCENT"){
		if(Number(replaceComma($(e).parent().parent().find('td:nth-child('+col+') input[type="text"]').val())) > 99.99){
			$(e).parent().parent().find('td:nth-child('+col+') input[type="text"]').val("0.00");
		}
		$(e).parent().parent().find('td:nth-child('+col+') input[type="text"]').removeClass("autoComma-alone").addClass("autoPercent3-alone")
		$(e).parent().parent().find('td:nth-child('+col+') input[type="text"]').attr("data-v-max","999.99");
		$(e).parent().parent().find(".autoPercent3-alone").autoNumeric('init',{vMin: '0.00', vMax: '999.99'});
	}
}


/* ตารางแบ่งจ่าย */
function check_sperately_pay(){
	
	$("#tb_Sperately_Pay input[type='checkbox']:checked").prop("checked",false);
	var chk_sperately = $("#chk_sperately_pay").is(':checked');
	if(chk_sperately){
		$("#tb_Sperately_Pay tbody>tr").each(function(){
			if( $(this).find('td:nth-child(1) input').hasClass("base")){
				$(this).find('td:nth-child(1) input').prop("disabled",false);
			}else{
				$(this).find('td:nth-child(1) input').prop("disabled",true);
			}
		})
	}else{
		$(".checkbox_prop").attr("disabled","disabled");
	}
	
}

function ch_payment_fun(row){
	if($("#ch_payment_"+row).is(':checked')){
		$("#set_Premium_Rate_"+row).attr("disabled",false);
	}else{
		$("#set_Premium_Rate_"+row).attr("disabled","disabled");
	}
}

/************************** Validate ********************************/
function bt_Menu1_Confirm_cl(){
	//ตรวจ Validate ก่อนไป save ด้วย
	var message = "";
	var error = 0;
	
	var key_Insurance_product_cl = $("#key_Insurance_product_cl").val();
	var name_th = $("#th_Name_cl").val();
	var market_name_th = $("#th_marketingName_cl").val();
	
	/*base plan*/
	if($("#tb_PM_Rate tbody>tr").length == 0){
		error++;
	}
	
	/*type rider*/
	var type_rider = $("#sel_Type_Additional_contract").val();  
	if(type_rider != "NONE"){
		if($("#tb_Additional_contract tbody>tr").length == 0){
			message = "กรุณาเลือกตาราง Rider";
			alertError(message);
			error++;
		}
	}
	
	/*mode*/
	var chk_mode = false;
	$("#tbl_PD_Mode_CL tbody>tr").each(function(){
		if($(this).find('input[type="checkbox"]').is(':checked')){
			chk_mode = true;
		}
	});
	
	if(chk_mode == false){
		error++;
	}
	
	if(key_Insurance_product_cl == "" || name_th == "" || market_name_th == ""){
		error++;
	}
	
	/*COOP*/
	if($("#lb_partner_CL").val() == 'Y'){
		$("#tb_COOP_CL tbody>tr").each(function(){
			var inputTd_4 = $(this).find('td:nth-child(4) input').val();
			var inputTd_5 = $(this).find('td:nth-child(5) input').val();
			var inputTd_7 = $(this).find('td:nth-child(7) input').val();
			var inputTd_8 = $(this).find('td:nth-child(8) input').val();
			var inputTd_9 = $(this).find('td:nth-child(9) input').val();
			if(inputTd_4 == "" || inputTd_5 == "" || inputTd_7 == "" || inputTd_8 == "" || inputTd_9 == ""){
				error++;
			}
		})
		$("#tb_COOP_CL_2 tbody>tr").each(function(){
			var inputTd_4 = $(this).find('td:nth-child(4) input').val();
			var inputTd_5 = $(this).find('td:nth-child(5) input').val();
			var inputTd_6 = $(this).find('td:nth-child(6) input').val();
			if(inputTd_4 == "" || inputTd_5 == "" || inputTd_6 == ""){
				error++;
			}
		})
		$("#tb_COOP_CL_3 tbody>tr").each(function(){
			var inputTd_4 = $(this).find('td:nth-child(4) input').val();
			var inputTd_5 = $(this).find('td:nth-child(5) input').val();
			var inputTd_6 = $(this).find('td:nth-child(6) input').val();
			if(inputTd_4 == "" || inputTd_5 == "" || inputTd_6 == ""){
				error++;
			}
		})
	}
	
	//endorse
	$("#tb_ageRange_CL tbody>tr[data-level='2']").each(function(){
		var endorse_name = $(this).find("td:nth-child(1)>div>div").text();
		if(endorse_name == ""){
			error++;
		}
	});
	
	if(error > 0){
		message = "กรุณาระบุข้อมูลให้ครบ";
		alertError(message);
		nameTab 	= "";
		Statuesave = "N";
	}else{
		nameTab 	= "";
		Statuesave = "Y";
		datasave_BasicInformation();
		dataDelete_BasicInformation();
		var message = "บันทึกข้อมูลเรียบร้อย";
		 alertSuccess(message);
	}
}

function bt_Menu3_Confirm(){
	var message = "";
	var error = 0;
	
	if(error > 0){
		message = "กรุณาระบุข้อมูลให้ครบ";
		alertError(message);
		nameTab 	= "menu_CL_3";
		Statuesave = "N";
	}else{
		datasave_calInsurance();
		message = "บันทึกข้อมูลเรียบร้อย";
		alertSuccess(message);
		nameTab 	= "menu_CL_3";
		Statuesave = "Y";
	}	
}

function bt_Menu2_Confirm(){
	var message = "";
	var error = 0;
	
	if(error > 0){
		message = "กรุณาระบุข้อมูลให้ครบ";
		alertError(message);
		nameTab 	= "menu_CL_2";
		Statuesave = "N";
	}else{
		datasave_useRightInsurance();
		message = "บันทึกข้อมูลเรียบร้อย";
		alertSuccess(message);
		nameTab 	= "menu_CL_2";
		Statuesave = "Y";
	}	
}

function bt_Menu4_Confirm(){
	var message = "";
	var error = 0;
	
	if(error > 0){
		message = "กรุณาระบุข้อมูลให้ครบ";
		alertError(message);
		nameTab 	= "menu_CL_4";
		Statuesave = "N";
	}else{
		datasave_saleBenefit();
		message = "บันทึกข้อมูลเรียบร้อย";
		alertSuccess(message);
		nameTab 	= "menu_CL_4";
		Statuesave = "Y";
	}	
}

function bt_Menu5_Confirm(){
	var message = "";
	var messageCondition = "";
	var error = 0;
	var errorCondition = 0;
	
	/*วันที่กำหนดการขาย*/
	if($("#menu_term1_datefrom_cl").val() == "" || $("#menu_term1_dateto_cl").val() == ""){
		error++;
	}
	
	/*ระยะเวลาชำระเบี้ยประกันภัย*/
	var flag_modeTerms = false;
	$("#tbl_modeTerms tbody>tr").each(function(){
		if($(this).find('td:nth-child(1) input[type="checkbox"]').is(':checked')){
			flag_modeTerms = true;
		}
	});
	if(!flag_modeTerms){
		error++;
	}
	
	/*พิกัดอายุ*/
	if($("#start_age_insure_cl").val() == "" || $("#end_age_insure_cl").val() == ""){
		error++;
	}
	
	/*สูตรการคำนวณอายุ*/
/*	var flag_formulaTerms = false;
	$("#tbl_formulaTerms tbody>tr").each(function(){
		if($(this).find('td:nth-child(1) input[type="radio"]').is(':checked')){
			flag_formulaTerms = true;
		}
	});
	if(!flag_formulaTerms){
		error++;
	}*/
	
	/*ชั้นอาชีพที่เสนอขาย*/
	var flag_saleDegreeTerms = false;
	$("#tbl_saleDegreeTerm tbody>tr").each(function(){
		if($(this).find('td:nth-child(1) input[type="checkbox"]').is(':checked')){
			flag_saleDegreeTerms = true;
		}
	});
	if(!flag_saleDegreeTerms){
		error++;
	}
	
	
	
	/*ตรวจสอบข้อมูลเคลม กธ. เดิม - ตาราง ทุนตรวจสุขภาพ*/
	if(!$("#standing_capitalHealth_1_CL").hasClass("disabledAll")){
		$("#tbl_capitalHealth_1_CL tbody>tr").each(function(){
			var input_td2 = $(this).find('td:nth-child(2) input').val();
			var input_td3 = $(this).find('td:nth-child(3) input').val();
			var input_td5 = $(this).find('td:nth-child(5) input').val();
			var input_td6 = $(this).find('td:nth-child(6) input').val();
			var input_td7 = $(this).find('td:nth-child(7) input').val();
			if(input_td2 == "" || input_td3 == "" || input_td5 == "" || input_td6 == "" || input_td7 == ""){
				error++;
			}
		})
	}
	if($("#haveCondition_oldCov").is(':checked') && $("#chk_check_data_CL1").is(':checked')){
		if($("#sl_haveCondition_oldCov2").val() != "NONE" && $("#sl_haveCondition_oldCov3").val() == "NONE"){
			errorCondition++;	// ตรวจสอบข้อมูลเคลม กธ. เดิม - มีเงื่อนไข ที่ 2
			messageCondition = "กรุณาเลือกเงื่อนไขที่ 2 ของ การตรวจสอบข้อมูลเคลม กธ. เดิม"
		}
		if($("#sl_haveCondition_oldCov4").val() != "NONE" && $("#sl_haveCondition_oldCov5").val() == "NONE"){
			errorCondition++;	// ตรวจสอบข้อมูลเคลม กธ. เดิม - มีเงื่อนไข ที่ 4
			messageCondition = "กรุณาเลือกเงื่อนไขที่ 4 ของ การตรวจสอบข้อมูลเคลม กธ. เดิม"
		}
	}
	/*ตรวจสอบข้อมูล IC - ตาราง ทุนตรวจสุขภาพ*/
	if(!$("#standing_capitalHealth_2_CL").hasClass("disabledAll")){
		$("#tbl_capitalHealth_2_CL tbody>tr").each(function(){
			var input_td2 = $(this).find('td:nth-child(2) input').val();
			var input_td3 = $(this).find('td:nth-child(3) input').val();
			var input_td5 = $(this).find('td:nth-child(5) input').val();
			var input_td6 = $(this).find('td:nth-child(6) input').val();
			var input_td7 = $(this).find('td:nth-child(7) input').val();
			if(input_td2 == "" || input_td3 == "" || input_td5 == "" || input_td6 == "" || input_td7 == ""){
				error++;
			}
		})
	}
	if($("#haveCondition_IC").is(':checked') && $("#chk_check_data_CL2").is(':checked')){
		if($("#sl_haveCondition_IC2").val() != "NONE" && $("#sl_haveCondition_IC3").val() == "NONE"){
			errorCondition++;	// ตรวจสอบข้อมูล IC - มีเงื่อนไข ที่ 2
			messageCondition = "กรุณาเลือกเงื่อนไขที่ 2 ของ ตรวจสอบข้อมูล IC"
		}
		if($("#sl_haveCondition_IC4").val() != "NONE" && $("#sl_haveCondition_IC5").val() == "NONE"){
			errorCondition++;	// ตรวจสอบข้อมูล IC - มีเงื่อนไข ที่ 4
			messageCondition = "กรุณาเลือกเงื่อนไขที่ 4 ของ ตรวจสอบข้อมูล IC"
		}
	}
	/*ตรวจสอบ กธ. เดิม รับแบบ Sub - ตาราง ทุนตรวจสุขภาพ*/
	if(!$("#standing_capitalHealth_3_CL").hasClass("disabledAll")){
		$("#tbl_capitalHealth_3_CL tbody>tr").each(function(){
			var input_td2 = $(this).find('td:nth-child(2) input').val();
			var input_td3 = $(this).find('td:nth-child(3) input').val();
			var input_td5 = $(this).find('td:nth-child(5) input').val();
			var input_td6 = $(this).find('td:nth-child(6) input').val();
			var input_td7 = $(this).find('td:nth-child(7) input').val();
			if(input_td2 == "" || input_td3 == "" || input_td5 == "" || input_td6 == "" || input_td7 == ""){
				error++;
			}
		})
	}
	if($("#haveCondition_SubCov").is(':checked') && $("#chk_check_data_CL3").is(':checked')){
		if($("#sl_haveCondition_SubCov2").val() != "NONE" && $("#sl_haveCondition_SubCov3").val() == "NONE"){
			errorCondition++;	// ตรวจสอบ กธ. เดิม รับแบบ Sub - มีเงื่อนไข ที่ 2
			messageCondition = "กรุณาเลือกเงื่อนไขที่ 2 ของ ตรวจสอบ กธ. เดิม รับแบบ Sub"
		}
		if($("#sl_haveCondition_SubCov4").val() != "NONE" && $("#sl_haveCondition_SubCov5").val() == "NONE"){
			errorCondition++;	// ตรวจสอบ กธ. เดิม รับแบบ Sub - มีเงื่อนไข ที่ 4
			messageCondition = "กรุณาเลือกเงื่อนไขที่ 4 ของ ตรวจสอบ กธ. เดิม รับแบบ Sub"
		}
	}
	
	if($('#validate_input12_cl').css('display') != 'none') {
		error++
	}
	if($('#validate_input13_cl').css('display') != 'none') {
		error++
	}
	if($('#validate_input14_cl').css('display') != 'none') {
		error++
	}
	
	var flag_save =false;
	if(errorCondition > 0){
		alertError(messageCondition);
		nameTab 	= "menu_CL_5";
		Statuesave = "N";
		flag_save = true;
	}
	
	if(error > 0){
		message = "กรุณาระบุข้อมูลให้ครบ";
		alertError(message);
		nameTab 	= "menu_CL_5";
		Statuesave = "N";
		flag_save = true;
	}
	else if(!flag_save){
		datasave_warrantyTerms();
		gen_JSON_UW_AppendixProduct();
		message = "บันทึกข้อมูลเรียบร้อย";
		alertSuccess(message);
		nameTab 	= "menu_CL_5";
		Statuesave = "Y";
	}	
	
}

/************************ end Validate ******************************/

function dataDelete_BasicInformation(){
	
	var arr_prd_rider_code = $("#arr_prd_rider_code_delete").val()
		//arr_prd_rider_code.push($("#arr_prd_rider_code_delete").val())
	
	var arr_rider = [];
	var split_arr_rider = arr_prd_rider_code.split(",");
	for(i=0 ; i < split_arr_rider.length ; i++){
		var flag_dupRider = false;
		var rider_code = split_arr_rider[i];
		$("#tb_PM_Rate tbody>tr").each(function(){
			if( rider_code == $(this).find('td:nth-child(1) label').text()){
				flag_dupRider = true;
			}
		})
		$("#tb_Additional_contract tbody>tr").each(function(){
			if( rider_code == $(this).find('td:nth-child(2) input[type="hidden"]').val()){
				flag_dupRider = true;
			}
			
		})
		
		if(!flag_dupRider){
			obj = {};
			obj["prd_rider_code"] = split_arr_rider[i]
			arr_rider.push(obj)
		}
	}
		
	var json_data_BasicInfo = {
        	"method": "detract",
        	"prd_rider_code" : JSON.stringify(arr_rider)
	} 
	$.ajax({
		url: 'ProductCL_SaveData_Servlet',
		type: "POST",
		data: json_data_BasicInfo,
		success: function (response) {
		
		}
	});
	console.log(json_data_BasicInfo);
}

/* FIXME by PUN (json data)*/
(function() {
	  /**
	   * Decimal adjustment of a number.
	   *
	   * @param {String}  type  The type of adjustment.
	   * @param {Number}  value The number.
	   * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
	   * @returns {Number} The adjusted value.
	   */
	  function decimalAdjust(type, value, exp) {
	    // If the exp is undefined or zero...
	    if (typeof exp === 'undefined' || +exp === 0) {
	      return Math[type](value);
	    }
	    value = +value;
	    exp = +exp;
	    // If the value is not a number or the exp is not an integer...
	    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
	      return NaN;
	    }
	    // Shift
	    value = value.toString().split('e');
	    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
	    // Shift back
	    value = value.toString().split('e');
	    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
	  }

	  // Decimal round
	  if (!Math.round10) {
	    Math.round10 = function(value, exp) {
	      return decimalAdjust('round', value, exp);
	    };
	  }
	  // Decimal floor
	  if (!Math.floor10) {
	    Math.floor10 = function(value, exp) {
	      return decimalAdjust('floor', value, exp);
	    };
	  }
	  // Decimal ceil
	  if (!Math.ceil10) {
	    Math.ceil10 = function(value, exp) {
	      return decimalAdjust('ceil', value, exp);
	    };
	  }
})();
/**************************** Save **********************************/

/*1. Basic Information*/
function datasave_BasicInformation(){
	/*base plan*/
	var baseplan = [];
	$("#tb_PM_Rate tbody>tr").each(function(){
		obj = {};
		obj["cov_code"] = $(this).find('td:nth-child(1) label').text();
		obj["cov_cat_id"] = $(this).find('td:nth-child(1) #cov_cat_id_base_PM').val();
		obj["prd_rider_code"] = $(this).find('td:nth-child(1) #prd_code_base_PM').val();
		obj["name_th"] = $(this).find('td:nth-child(2) label').text();
		obj["pm_rate_fileId"] = $(this).find('td:nth-child(3) #fileId_base_PM').val();
		obj["pm_rate_cat_id"] = $(this).find('td:nth-child(3) #rate_cat_id_base_PM').val();
		obj["pm_rate_layout_id"] = $(this).find('td:nth-child(3) #rate_layout_id_base_PM').val();
		obj["pm_rate"] = $(this).find('td:nth-child(3) input[type="text"]').val();
		obj["fix_amt"] = replaceComma($(this).find('td:nth-child(6) input[type="text"]').val());
		obj["nar_fileId"] = $(this).find('td:nth-child(7) #fileId_base_NAR').val();
		obj["nar_cat_id"] = $(this).find('td:nth-child(7) #rate_cat_id_base_NAR').val();
		obj["nar_layout_id"] = $(this).find('td:nth-child(7) #rate_layout_id_base_NAR').val();
		obj["nar"] = $(this).find('td:nth-child(7) input[type="text"]').val();
		
		baseplan.push(obj);
	});
	
	/*rider*/
	var rider = [];
	$("#tb_Additional_contract tbody>tr").each(function(i){
		var chk_parent = $(this).data('level');
		if(chk_parent == 2){		//2 คือลูก
			var dataId = $(this).attr('id');
				dataId = dataId.replace("tr_Additional_contract_","");
			obj = {};
			obj["prd_rider_code"] = $(this).find('td:nth-child(2) input[type="hidden"]').val();
			obj["cov_code"] = $(this).find('td:nth-child(2) label').text();
			obj["cov_cat_id"] = $(this).find('td:nth-child(3) input[type="hidden"]').val();
			obj["cov_cat_type"] = $(this).find('td:nth-child(3)').text();
			obj["name_th"] = $(this).find('td:nth-child(4) label').text();
			obj["pm_fileId"] = $(this).find("td:nth-child(6) #fileId_rider_PM"+dataId+"").val();
			obj["pm_rate_cat_id"] = $(this).find("td:nth-child(6) #rate_cat_id_rider_PM"+dataId+"").val();
			obj["pm_rate_layout_id"] = $(this).find("td:nth-child(6) #rate_layout_id_rider_PM"+dataId+"").val();
			obj["pm_rate"] = $(this).find('td:nth-child(6) input[type="text"]').val();
		/*	obj["nar_fileId"] = $(this).find("td:nth-child(10) #fileId_rider_NAR"+dataId+"").val();
			obj["nar_cat_id"] = $(this).find("td:nth-child(10) #rate_cat_id_rider_NAR"+dataId+"").val();
			obj["nar_layout_id"] = $(this).find("td:nth-child(10) #rate_layout_id_rider_NAR"+dataId+"").val();
			obj["nar"] = $(this).find('td:nth-child(10) input[type="text"]').val();*/
			rider.push(obj);
		}else{
			var dataId = $(this).attr('id');
			dataId = dataId.replace("tr_Additional_contract_","");
			//i = Number(i) + Number(1);
			obj = {};
			obj["prd_rider_code"] = $(this).find('td:nth-child(2) input[type="hidden"]').val();
			obj["cov_code"] = $(this).find('td:nth-child(2) label').text();
			obj["cov_cat_id"] = $(this).find('td:nth-child(3) input[type="hidden"]').val();
			obj["cov_cat_type"] = $(this).find('td:nth-child(3)').text();
			obj["name_th"] = $(this).find('td:nth-child(4) label').text();
			obj["pm_fileId"] = $(this).find("td:nth-child(6) #fileId_rider_PM"+dataId+"").val();
			obj["pm_rate_cat_id"] = $(this).find("td:nth-child(6) #rate_cat_id_rider_PM"+dataId+"").val();
			obj["pm_rate_layout_id"] = $(this).find("td:nth-child(6) #rate_layout_id_rider_PM"+dataId+"").val();
			obj["pm_rate"] = $(this).find('td:nth-child(6) input[type="text"]').val();
			obj["fix_amt"] = replaceComma($(this).find('td:nth-child(9) input[type="text"]').val());;
			obj["nar_fileId"] = $(this).find("td:nth-child(10) #fileId_rider_NAR"+dataId+"").val();
			obj["nar_cat_id"] = $(this).find("td:nth-child(10) #rate_cat_id_rider_NAR"+dataId+"").val();
			obj["nar_layout_id"] = $(this).find("td:nth-child(10) #rate_layout_id_rider_NAR"+dataId+"").val();
			obj["nar"] = $(this).find('td:nth-child(10) input[type="text"]').val();
			rider.push(obj);
		}
	});
	
	/*การกำหนดบันทึกสลักหลังและพิกัดอายุ*/
	var define_endorse = [];
	$("#tb_ageRange_CL tbody>tr").each(function(){
		var data_parent = $(this).attr("data-parent");
		
		obj = {};
		/*var cov = $(this).find('td:nth-child(1) label').text();
		if(cov == null){
			obj["cov_code"] = $(this).find('td:nth-child(1) div').attr("id",div_endorse_name).text();
		}else{
			obj["cov_code"] = cov;
		}*/
		
		//Khwan Fix
		if(data_parent == 0){
			obj["cov_code"] = $(this).find('td:nth-child(1) label').text();
			obj["flag_endorse"] = false;
		}else{
			obj["cov_code"] = $(this).find('td:nth-child(1) #main_rider_code').val();
			obj["flag_endorse"] = true;
		}
		
		obj["prd_rider_code"] = $(this).find('td:nth-child(1) #prd_rider_code').val();
		obj["type_coverage"] = $(this).find('td:nth-child(2)').text();
		obj["min_issue_age"] = $(this).find('td:nth-child(4) input[type="number"]').val();
		obj["min_issue_age_unit"] = $(this).find('td:nth-child(5) select').val();
		obj["max_issue_age"] = $(this).find('td:nth-child(6) input[type="number"]').val();
		obj["max_issue_age_unit"] = $(this).find('td:nth-child(7) select').val();
		obj["max_insure_age"] = $(this).find('td:nth-child(8) input[type="number"]').val();
		obj["max_insure_age_unit"] = $(this).find('td:nth-child(9) select').val();
		define_endorse.push(obj);
	});
	
	/*gender*/
	var gender = "";
	if($("#chk_sex_BP1").is(':checked') && $("#chk_sex_BP2").is(':checked')){
		gender = "EITHER";
	}else if($("#chk_sex_BP2").is(':checked')){
		gender = "FEMALE";
	}else if($("#chk_sex_BP1").is(':checked')){
		gender = "MALE";
	}else{
		gender = "NONE";
	}
	
	/*เปลี่ยนผู้รับประโยชน์หลัก*/
	var first_beneficiary = $("#chk_change_main_person").is(':checked')
	if(first_beneficiary){
		first_beneficiary = "INTERESTED";
	}else{
		first_beneficiary = "PARTNER";
	}
	
	var payment_period = [];
	$("#tb_Sperately_Pay tbody>tr").each(function(){
		if($(this).find('td:nth-child(1) input').is(':checked')){
			obj = {};
			obj["seq_count"] = $(this).find('td:nth-child(1) input').val();
			obj["rate_multiply"] = ""+Math.round10($(this).find('td:nth-child(3) input').val()/100, -4)
			payment_period.push(obj);
		}
	});
	
	/*partner*/
	var parther = $("#lb_partner_CL").val();
	var coop = [];
	obj = {};
	if(parther == "Y"){
		obj["max_commission"] = $("#amount_max_commission").val();
		
		var tb1 = [];
		$("#tb_COOP_CL tbody>tr").each(function(){
			obj_tb1 = {}; 
			obj_tb1["seq"] = $(this).find('td:nth-child(1) #seq').val();
			obj_tb1["coop_code"] = $(this).find('td:nth-child(2)').text();
			obj_tb1["name"] = $(this).find('td:nth-child(3)').text();
			obj_tb1["eff_date"] = $(this).find('td:nth-child(4) input[type="text"]').val();
			obj_tb1["exp_date"] = $(this).find('td:nth-child(5) input[type="text"]').val();
			obj_tb1["seq_com"] = $(this).find('td:nth-child(6) #seq_com').val();
			obj_tb1["min_age"] = $(this).find('td:nth-child(7) input[type="text"]').val();
			obj_tb1["max_age"] = $(this).find('td:nth-child(8) input[type="text"]').val();
			obj_tb1["commission_rate"] = ""+Math.round10($(this).find('td:nth-child(9) input[type="text"]').val()/100, -4)
			tb1.push(obj_tb1);
		});
		obj["tb1"] = tb1;
		
		var tb2 = [];
		$("#tb_COOP_CL_2 tbody>tr").each(function(){
			obj_tb2 = {}; 
			obj_tb2["seq"] = $(this).find('td:nth-child(1) #seq').val();
			obj_tb2["coop_code"] = $(this).find('td:nth-child(1)').text();
			obj_tb2["name"] = $(this).find('td:nth-child(2)').text();
			obj_tb2["min_age"] = $(this).find('td:nth-child(4) input[type="text"]').val();
			obj_tb2["max_age"] = $(this).find('td:nth-child(5) input[type="text"]').val();
			var min_sa = $(this).find('td:nth-child(6) input[type="text"]').val();
			min_sa = min_sa.replace(/,/g,"");
			obj_tb2["min_sa"] = min_sa;
			tb2.push(obj_tb2);
		});
		obj["tb2"] = tb2;
		
		var tb3 = [];
		$("#tb_COOP_CL_3 tbody>tr").each(function(){
			obj_tb3 = {}; 
			obj_tb3["seq"] = $(this).find('td:nth-child(1) #seq').val();
			obj_tb3["coop_code"] = $(this).find('td:nth-child(1)').text();
			obj_tb3["name"] = $(this).find('td:nth-child(2)').text();
			obj_tb3["min_age"] = $(this).find('td:nth-child(4) input[type="text"]').val();
			obj_tb3["max_age"] = $(this).find('td:nth-child(5) input[type="text"]').val();
			obj_tb3["prem_disc_rate"] = ""+Math.round10($(this).find('td:nth-child(6) input[type="text"]').val()/100, -4)
			tb3.push(obj_tb3);
		});
		obj["tb3"] = tb3;
		coop.push(obj)
	}
	
	var json_data_BasicInfo = {
        	"method": "Tab_Basic_Information",
            "prd_code": $("#pass_Insurance_product_cl").val(),
            "core_biz_prd_code": $("#key_Insurance_product_cl").val(),
            "name_th": $("#th_Name_cl").val(),
            "name_en": $("#en_Name_cl").val(),
            "market_name_th": $("#th_marketingName_cl").val(),
            "market_name_en": $("#en_marketingName_cl").val(),
            "base_plan": JSON.stringify(baseplan),
            "prd_design": $("#sel_Type_Additional_contract").val(),
            "rider": JSON.stringify(rider),
            "define_endorse" : JSON.stringify(define_endorse),
            "gender": gender,
            "is_prem_install" : $("#chk_sperately_pay").is(':checked'),
            "payment_period": JSON.stringify(payment_period),
            "fyp_credit_card": $("#lb_credit_firstYear_CL").val(),
            "ryp_credit_card": $("#lb_credit_nextYear_CL").val(),
            "reinsure_group": $("#lb_reinsurance_CL").val(),
            "distribution_channel": $("#lb_distribution_CL").val(),
            "sale_channel": $("#lb_saleChannel_CL option:selected").data('id'),
            "sale_partner_code": $("#lb_partner_CL option:selected").data('id'),
            "is_fin_acc": $("#chk_finance_PB").is(':checked'),
            "is_insurance": $("#chk_insurance_contract").is(':checked'),
            "score_aml": $("#lb_AML_CFT_CL").val(),
            "loan_type": $("#sel_Loan_Type").val(),
            "first_beneficiary": first_beneficiary,
            "COOP": JSON.stringify(coop),
            "max_commission" : Math.round10($("#amount_max_commission").val()/100, -4),
            "groupName" : $("#groupName").val()
	} 
	
	$("#code_Coverage_CL").val($("#pass_Insurance_product_cl").val());
	$("#approve_nameTH_CL").val($("#th_Name_cl").val());
	$("#approve_nameEN_CL").val($("#th_marketingName_cl").val());
	
	$.ajax({
		url: 'ProductCL_SaveData_Servlet',
		type: "POST",
		data: json_data_BasicInfo,
		async: false,
		success: function (response) {
			var cov_status_PD = $("#cov_status_PD").val();
			var cov_status_UW = $("#cov_status").val();
			
			if (response == "success"){
				
				 //enable tab
	    		 $("#menu_CL_3").removeClass("disabledAll");
	    		 $("#menu_CL_2").removeClass("disabledAll");
	    		 $("#menu_CL_4").removeClass("disabledAll");
	    		 $("#menu_CL_5").removeClass("disabledAll");
	    		 $("#menu_CL_6").removeClass("disabledAll");
	    		 $("#menu_CL_7").removeClass("disabledAll");
				
				if((cov_status_PD == "NEW" && cov_status_UW == "NEW") || (cov_status_PD == "" && cov_status_UW == "")){
					console.log("save>> "+response);
					
					var flag = $("#flag_email_send_CL").val();
	    			console.log("flag>> "+flag)
	    			if(flag != "T"){
	    				/***  CODE FOR PREPARE AND SEND MAIL  ****/
						var prepareEmail_data = [];
						objEmail = {};
						objEmail["requestApprove"] 		="สร้างใหม่";
						objEmail["manuName"] 			="แบบประกันหลัก";
						objEmail["manuNameEng"] 		="baseplan";
						objEmail["empNameHide"] 		=$("#empNameHide").val();
						objEmail["empID"] 				=$("#empID").val();
						objEmail["departmentID"] 		=$("#departmentID").val();
						objEmail["departmentHide"] 		=$("#departmentHide").val();
						
						objEmail["cov_code"] 			=$("#pass_Insurance_product_cl").val();
						objEmail["name_TH"] 			=$("#th_Name_cl").val();
						objEmail["name_EN"] 			=$("#en_Name_cl").val();
						
						prepareEmail_data.push(objEmail);
						
						var data_json2 = {
					        	"method": "send_Email_Only_Product",
					        	"OptionEmail": "1",
					        	"prepareEmail_data": JSON.stringify(prepareEmail_data),
						}
						$.ajax({
							 type: "POST",
							 url: "UW_Email_Servlet", 
							 data: data_json2,
							 success: function(response){
								console.log(response); 
								$("#flag_email_send_CL").val("T");
							 }
						 });
						console.log("dataEmail",data_json2)
						/***  END CODE FOR PREPARE AND SEND MAIL  ****/
	    			}

				}
			}
			
		}
	});
	console.log(json_data_BasicInfo);
}

function datasave_calInsurance(){
	
	/*การคำนวณจำนวนเงินเอาประกันภัย*/
	var coverage_limit = [];
	$("#tb_Calculate_insurance tbody>tr").each(function(i){		
		obj = {};
		obj["seq"] = $(this).find("td:nth-child(1) #seq").val();
		obj["cov_code"] = $(this).find("td:nth-child(1) label").text();
		obj["prd_rider_code"] = $(this).find("td:nth-child(1) #prd_rider_code").val();
		obj["serie_no"] = $(this).find("td:nth-child(1) #serie_no").val();
		obj["type"] = $(this).find("td:nth-child(2) label").text();
		obj["capital_to"] = replaceComma($(this).find('td:nth-child(4) input').val());
		obj["capital_from"] = replaceComma($(this).find('td:nth-child(5) input').val());
		obj["cash_insurance_no"] = replaceComma($(this).find('td:nth-child(6) input').val());
		obj["cash_insurance_unit"] = $(this).find('td:nth-child(7) select').val();
		obj["cash_insurance_factor"] = $(this).find('td:nth-child(8) select').val();
		obj["cash_low_val"] = replaceComma($(this).find('td:nth-child(9) input').val());
		obj["cash_low_unit"] = $(this).find('td:nth-child(10) select').val();
		
	/*	obj["min_link_cov_amt"] = "";
		obj["max_link_cov_amt"] = "";
		obj["fix_cov_amt"] = ""
		obj["fix_cov_unit"] = "";
		obj["fix_cov_factor"] = "";
		obj["min_cov_amt"] = "";
		obj["min_cov_unit"] = "";
		obj["min_cov_factor"] = "";*/
		coverage_limit.push(obj);
	});
	
	/*การคำนวณเบี้ยประกันภัย*/
	var cal_insurance = [];
	$("#tb_Calculate_insurance2 tbody>tr").each(function(){
		obj = {};
		obj["cov_code"] = $(this).find("td:nth-child(1) label").text();
		obj["prd_code"] = $(this).find("td:nth-child(1) #prd_rider_code").val();
		obj["type"] = $(this).find("td:nth-child(2) label").text();
		obj["formula"] = $(this).find('td:nth-child(3) select').val();
		//Benz
		obj["prd_rider_code"] = $(this).find("td:nth-child(1) #prd_rider_code").val();
		//
		cal_insurance.push(obj);
	})
	
	var json_data = {
			"method": "Tab_CalInsurance_Premium",
			"prd_code": $("#pass_Insurance_product_cl").val(),
	        "age_band": $("#lb_age_specific_CL option:selected").val(),
			"coverage_limit" : JSON.stringify(coverage_limit),
			"cal_SAP" : $("#lb_SAP_CL option:selected").val(),
			"cal_SMI" : $("#lb_SMI_CL option:selected").val(),
			"cal_MI" : $("#lb_MI_CL option:selected").val(),
			"chk_balloon" : $("#chk_balloon_prd").is(':checked'),
			"txt_ballon" : $("#txb_balloon_prd_code").val(),
			"payPremiun_loan" : $("#chk_cal_pay_premium_CL1").is(':checked'),
			"payPremiun_cash" : $("#chk_cal_pay_premium_CL2").is(':checked'),
			"cal_insurance" : JSON.stringify(cal_insurance),
			"groupName" : $("#groupName").val()
			//"formula" : JSON.stringify(formula_list),
			//"balloon_prd_code" : $("#lb_cal_balloon_CL option:selected").val(),
			//"collect_meth" : JSON.stringify(collect_meth),
			//"coverage_formula" : JSON.stringify(coverage_formula)			
		}
		
		$.ajax({
			url: 'ProductCL_SaveData_Servlet',
			type: "POST",
			data: json_data,
			async: false,
			success: function (response) {
			
			}
		});
		console.log("data",json_data);
}

function datasave_useRightInsurance(){
	
	//Benz
	/*var change_type	 = "";
	if ($('#ch_change_condition5').is(":checked"))
	{
		change_type = $('#ch_change_condition5').val();
	}*/
	
	// แก้ไขจากจากบน ผิด
	var change_condition = [];
	$("#div_change_condition div").each(function(){
		if($(this).find('input[type="checkbox"]').is(':checked')){
			obj = {};
			obj["change_condition"] = $(this).find('input[type="checkbox"]').val();
			change_condition.push(obj)
		}
	})
	//
	var policy_surrender = [];
	$("#tb_policyholder tbody>tr").each(function(){
		if($(this).find('td:nth-child(1) label').text() != ""){
			obj = {};
			obj["cov_code"] = $(this).find('td:nth-child(1) #cov_code_policyValue').val();
			obj["prd_rider_code"] = $(this).find('td:nth-child(1) #prd_rider_code').val();
			obj["type_cov"] = $(this).find('td:nth-child(2) label').text();
			obj["tb_policyValue"] = $(this).find('td:nth-child(3) label').text();
			obj["tb_CV"] = $(this).find('td:nth-child(4) label').text();
			obj["rate_cat_id"] = $(this).find('td:nth-child(4) #rate_cat_id_tb_useRight').val();
			obj["rate_layout_id"] = $(this).find('td:nth-child(4) #rate_layout_id_tb_useRight').val();
			obj["file_id"] = $(this).find('td:nth-child(4) #file_id_tb_useRight').val();
			obj["formula"] = $(this).find('td:nth-child(5) select').val();
			policy_surrender.push(obj);
		}
	});
	
	var json_data = {
			"method" : "Tab_Grant_Rights",
			"change_type" : JSON.stringify(change_condition),
			"prd_code": $("#pass_Insurance_product_cl").val(),
			"Policy_surrender" : JSON.stringify(policy_surrender),
			"groupName" : $("#groupName").val()
	}
	
	$.ajax({
	url: 'ProductCL_SaveData_Servlet',
	type: "POST",
	data: json_data,
	async: false,
	success: function (response) {
	
	}
	});
	console.log("data",json_data);
}

function datasave_saleBenefit(){
	
	var salesBenefits = [];
	$("#panel_saleBenefits div[class='row']").each(function(){
			obj = {};
			obj["compen_type"] = $(this).find('div[class="col-sm-6"] input[type="checkbox"]').val();
			obj["compen_rate"] = ""+Math.round10($(this).find('div[class="col-sm-5"] input[type="text"]').val()/100, -4)
			if($(this).find('div[class="col-sm-6"] input[type="checkbox"]').val() == "BROKER_FEE"){
			  if($(this).find('div[class="col-sm-6"] input[type="checkbox"]').is(':checked')){
				obj["fee"] = $("#chk_fee").is(':checked');
				obj["vat"] = $("#chk_vat").is(':checked');
			  }else{
				obj["fee"] = false;
				obj["vat"] = false;
			  }
			}
			salesBenefits.push(obj)
	})
	
	var json_data = {
			"method" : "Tab_Sales_Benefits",
			"prd_code": $("#pass_Insurance_product_cl").val(),
			"salesBenefits" : JSON.stringify(salesBenefits),
			"groupName" : $("#groupName").val()
	}
	
	$.ajax({
	url: 'ProductCL_SaveData_Servlet',
	type: "POST",
	data: json_data,
	async: false,
	success: function (response) {
	
	}
	});
	console.log("data",json_data);
}

function datasave_warrantyTerms(){
	
	/*var coop = false; 
	if($("#lb_partner_CL").val() == "Y"){
		coop = true;
	}*/
	
	/*product*/
	var first_beneficiary = "";
	if($("#rd_benefit_person_CL1").is(":checked")){
		first_beneficiary = $("#rd_benefit_person_CL1").val();
	}else if($("#rd_benefit_person_CL2").is(":checked")){
		first_beneficiary = $("#rd_benefit_person_CL2").val();
	}
	
	var Coop = [];
	var length_coop = $("#tbl_increaseCOOP_premium_CL tbody>tr").length;
	for(i=0 ; i<length_coop ; i++){
		obj = {};
		obj["seq"] = $("#tbl_COOP_masterPolicy_CL tbody>tr").eq(i).find("td:nth-child(1) input[type='hidden']").val();
		obj["coop_code"] = $("#tbl_COOP_masterPolicy_CL tbody>tr").eq(i).find('td:nth-child(1)').text();
		obj["Master_policy"] = $("#tbl_COOP_masterPolicy_CL tbody>tr").eq(i).find('td:nth-child(3) input').val();
		obj["Max_em"] = ""+Math.round10($("#tbl_increaseCOOP_premium_CL tbody>tr").eq(i).find('td:nth-child(3) input').val()/100 , -4);
		Coop.push(obj)
	}
	/*if(!coop){
		var master_policy = $("#master_policy_cl").val();
	}else{
		var master_policy = [];
		$("#tbl_COOP_masterPolicy_CL tbody>tr").each(function(){
			obj = {};
			obj["key"] = $(this).find('td:nth-child(1)').text();
			obj["text"] = $(this).find('td:nth-child(2)').text();
			obj["master"] = $(this).find('td:nth-child(3) input').val();
			master_policy.push(obj);
		})
	}*/
	
	var product = [];
	obj = {};
	obj["first_beneficiary"] = first_beneficiary;
	obj["min_period"] = $("#start_period_insure_cl").val();
	obj["min_period_unit"] = $("#start_period_insure_unit_cl option:selected").val();
	obj["max_period"] = $("#end_period_insure_cl").val();
	obj["max_period_unit"] = $("#end_period_insure_unit_cl option:selected").val();
	obj["max_insure_age"] = $("#max_period_insure_cl").val();
	obj["max_insure_age_unit"] = "YEAR"; 	//FIXME HARD CODE
	obj["sale_eff_date"] = $("#menu_term1_datefrom_cl").val();
	obj["sale_exp_date"] = $("#menu_term1_dateto_cl").val();
	obj["sys_eff_date"] = $("#system_date_cl").val();
	obj["master_policy"] = $("#master_policy_cl").val()
	obj["is_flp_fee"] = $("#deduct_cost_CL").is(":checked");
	if($("#amount_free_look_CL").val() == ""){
		obj["flp_day"] = 0;
	}else{
		obj["flp_day"] = $("#amount_free_look_CL").val();
	}
	obj["is_flp"] = $("#chk_free_look_CL").is(":checked");
	product.push(obj)
	
	var mode = [];
	$("#tbl_modeTerms tbody>tr").each(function(){
		obj = {};
		if($(this).find('td:nth-child(1) input[type="checkbox"]').is(":checked") && !$(this).find('td:nth-child(1) input[type="checkbox"]').prop('disabled')){
			obj["key"] = $(this).find('td:nth-child(1) input[type="checkbox"]').val();
			obj["text"] = $(this).find('td:nth-child(3)').text();
			mode.push(obj);
		}
	});
	
	var age_calc_meth = "";
	$("#tbl_formulaTerms tbody>tr").each(function(){
		if($(this).find('td:nth-child(1) input[type="radio"]').is(":checked")){
			age_calc_meth = $(this).find('td:nth-child(1) input[type="radio"]').val();
		}
	})
	var participant = [];
	obj = {};
	obj["min_issue_age"] = $("#start_age_insure_cl").val();
	obj["min_issue_age_unit"] = $("#start_age_insure_unit_cl option:selected").val();
	obj["max_issue_age"] = $("#end_age_insure_cl").val();
	obj["max_issue_age_unit"] = $("#end_age_insure_unit_cl").val();
	obj["max_insure_age"] = $("#max_age_insure_cl").val();
	obj["max_insure_age_unit"] = "YEAR";		//FIXME HARD CODE
	obj["age_calc_meth"] = age_calc_meth
	participant.push(obj)
	
	var occ_degree = [];
	$("#tbl_saleDegreeTerm tbody>tr").each(function(){
		obj = {};
		obj["key"] = $(this).find('td:nth-child(1) input[type="checkbox"]').val();
		obj["text"] = $(this).find('td:nth-child(2)').text();
		obj["check"] = $(this).find('td:nth-child(1) input[type="checkbox"]').is(':checked')
		occ_degree.push(obj);
	});
	
	var underwrite = [];
	obj = {};
	if($("#rd_max_amount_insure_CL1").is(':checked')){
		obj["prd_max_sa"] = $("#amount_insure_alone_CL").val();
		obj["prd_max_sa_unit"] = $("#amount_insure_alone_unit_CL").val();
		obj["prd_max_sa_factor"] = $("#amount_insure_alone_factor_CL").val();
	}else{
		obj["prd_max_sa"] = "";
		obj["prd_max_sa_unit"] = "NONE";
		obj["prd_max_sa_factor"] = "NONE";
	}
	obj["is_med_req"] = $("#rd_health_check_CL1").is(':checked');
	obj["is_med_sum_accum"] = $("#rd_health_money_CL1").is(':checked');
	obj["is_exist_policy"] = $("#rd_old_list_CL1").is(':checked');
	obj["is_insure_sum_accum"] = $("#rd_capital_CL1").is(':checked');	
	obj["is_substandard"] = $("#rd_increase_premium_CL1").is(':checked');
	obj["is_rider_allow"] = $("#rd_buy_contract_CL1").is(':checked');
	obj["is_rider_sum_accum"] = $("#rd_buy_contract_period_CL1").is(':checked');
	obj["is_check_ic_ba"] = $("#chk_check_data_CL4").is(':checked');
	obj["is_check_ic_fi_cft"] = $("#chk_check_data_CL5").is(':checked');
	obj["is_check_sale_blacklist"] = $("#chk_check_data_CL6").is(':checked');
	obj["is_reins_alert"] = $("#rd_filing_rs_CL1").is(':checked');
	obj["is_fax_app"] = $("#rd_fax_app_CL1").is(':checked');
	underwrite.push(obj)
		
	/*จำนวนเงินเอาประกันภัยสูงสุด (ต่อแบบ)*/
	var unw_cocredit_limit = [];
	
	if($("#rd_max_amount_insure_CL2").is(':checked')){
		$("#tbl_insure_together tbody>tr").each(function(){
			obj = {};
			obj["seq"] = $(this).find("td:nth-child(1) input[type='hidden']").val();
			obj["amount_from"] = replaceComma($(this).find('td:nth-child(2) input').val());
			obj["amount_to"] = replaceComma($(this).find('td:nth-child(3) input').val());
			obj["TopAlone_count"] = replaceComma($(this).find('td:nth-child(4) input').val());
			obj["TopAlone_unit"] = $(this).find('td:nth-child(5) option:selected').val();
			obj["TopAlone_of"] = $(this).find('td:nth-child(6) option:selected').val();
			obj["TopTogether_count"] = replaceComma($(this).find('td:nth-child(7) input').val());
			obj["TopTogether_unit"] = $(this).find('td:nth-child(8) option:selected').val();
			obj["TopTogether_of"] = $(this).find('td:nth-child(9) option:selected').val();
			unw_cocredit_limit.push(obj)
		});
	}
	
	/*จำนวนเงินเอาประกันภัยสูงสุด (ต่อราย)*/
	var unw_rider_limit = [];
	$("#tbl_insure_single tbody>tr").each(function(i){
		obj = {};
		if($(this).find('td:nth-child(1) input[type="checkbox"]').is(":checked")){
			var type = $(this).find('td:nth-child(2)').text();
			obj["prd_rider_code"] = $(this).find('td:nth-child(1) input[type="checkbox"]').val();
			obj["type"] = $(this).find('td:nth-child(2)').text();
			var pax_max_sa = replaceComma($(this).find('td:nth-child(3) input[type="text"]').val());
			if(pax_max_sa == ""){
				pax_max_sa = "0";
			}
			obj["Pax_max_sa_amt"] = pax_max_sa
			if($("#lb_partner_CL").val() != "Y"){
				/*$("#tbl_increase_premium_CL tbody>tr").each(function(){
					if(type == $(this).find('td:nth-child(1) label').text()){
						obj["max_em"] = Math.round10($(this).find('td:nth-child(3) input').val()/100 , -4)
					}
					
				})*/
				obj["max_em"] = Math.round10($("#tbl_increase_premium_CL tbody>tr").eq(i).find('td:nth-child(3) input').val()/100 , -4);
			}else{
				obj["max_em"] = "0"
				/*$("#tbl_increaseCOOP_premium_CL tbody>tr").each(function(){
					//if(type == $(this).find('td:nth-child(1)').text()){
						obj["max_em"] = Math.round10($(this).find('td:nth-child(3) input').val()/100 , -4)
					//}
				})*/
			}
			unw_rider_limit.push(obj);
			
		}
		
	});
	
	/*appenDixProduct*/
	var anti_HIV = [];
	if($("#rd_health_check_CL1").is(":checked")){
		$("#tbl_health_check_CL tbody>tr").each(function(){
			if($(this).find('td:nth-child(1) input[type="radio"]').is(":checked")){
				obj = {};
				obj["key"] = $(this).find('td:nth-child(1) input[type="radio"]:checked').val();
				obj["prd_code"] = $("#pass_Insurance_product_cl").val();
				obj["eff_date"] = $("#menu_term1_datefrom_cl").val();
				obj["exp_date"] = $("#menu_term1_dateto_cl").val();
				anti_HIV.push(obj);
			}
		});
	}
	
	var unwSubstdType = [];
	$("#div_chk_increase_premium div").each(function(){
		if($(this).find('input[type="checkbox"]').is(':checked')){
			obj = {};
			obj["substd_type"] = $(this).find('input[type="checkbox"]').val();
			unwSubstdType.push(obj)
		}
	})
	
	var unwAccumRule = [];
	if($("#rd_health_money_CL1").is(":checked")){
		$("#tbl_health_insurance_CL tbody>tr").each(function(i){
			i++;
			obj = {};
			obj["seq"] = i;
			obj["cov_cat_lv_1"] = $(this).find('td:nth-child(2) option:selected').val();
			obj["cov_cat_lv_2"] = $(this).find('td:nth-child(3) option:selected').val();
			obj["cov_cat_lv_3"] = $(this).find('td:nth-child(4) option:selected').val();
			obj["is_gio"] = $(this).find('td:nth-child(5) option:selected').val();
			obj["is_senior"] = $(this).find('td:nth-child(6) option:selected').val();
			obj["filing_chan_id"] = "NONE";
			obj["sale_chan_id"] = $(this).find('td:nth-child(7) option:selected').data('id');
			obj["sale_partner_code"] = ""+$(this).find('td:nth-child(8) option:selected').data('id');
			obj["accum_type"] = "MED_SUM";
			unwAccumRule.push(obj);
		});
	}
	
	if($("#rd_old_list_CL1").is(":checked")){
		$("#tbl_old_insurance_CL tbody>tr").each(function(i){
			i++;
			obj = {};
			obj["seq"] = i;
			obj["cov_cat_lv_1"] = $(this).find('td:nth-child(2) option:selected').val();
			obj["cov_cat_lv_2"] = $(this).find('td:nth-child(3) option:selected').val();
			obj["cov_cat_lv_3"] = $(this).find('td:nth-child(4) option:selected').val();
			obj["is_gio"] = $(this).find('td:nth-child(5) option:selected').val();
			obj["is_senior"] = $(this).find('td:nth-child(6) option:selected').val();
			obj["filing_chan_id"] = "NONE";
			obj["sale_chan_id"] = $(this).find('td:nth-child(7) option:selected').data('id');
			obj["sale_partner_code"] = ""+$(this).find('td:nth-child(8) option:selected').data('id');
			obj["accum_type"] = "EXIST_POLICY";
			unwAccumRule.push(obj);
		});
	}
	
	if($("#rd_capital_CL1").is(":checked")){
		$("#tbl_UW_consider_CL tbody>tr").each(function(i){
			i++;
			obj = {};
			obj["seq"] = i;
			obj["cov_cat_lv_1"] = $(this).find('td:nth-child(2) option:selected').val();
			obj["cov_cat_lv_2"] = $(this).find('td:nth-child(3) option:selected').val();
			obj["cov_cat_lv_3"] = $(this).find('td:nth-child(4) option:selected').val();
			obj["is_gio"] = $(this).find('td:nth-child(5) option:selected').val();
			obj["is_senior"] = $(this).find('td:nth-child(6) option:selected').val();
			obj["filing_chan_id"] = "NONE";
			obj["sale_chan_id"] = $(this).find('td:nth-child(7) option:selected').data('id');
			obj["sale_partner_code"] = ""+$(this).find('td:nth-child(8) option:selected').data('id');
			obj["accum_type"] = "INSURED_SUM";
			unwAccumRule.push(obj);
		});
	}
	
/*	var receive_rateExtra = [];
	if($("#rd_increase_premium_CL1").is(":checked")){
		obj_chk = {};
		obj_chk["increase_premium"] = $("#chk_increase_premium_yes_CL1").is(":checked");
		obj_chk["decrease_capital"] = $("#chk_increase_premium_yes_CL2").is(":checked");
		obj_chk["decrease_range"] = $("#chk_increase_premium_yes_CL3").is(":checked");
		obj_chk["change_addPlan"] = $("#chk_increase_premium_yes_CL4").is(":checked");
		receive_rateExtra.push(obj_chk);
	}
	if(coop == false){
		$("#tbl_increase_premium_CL tbody>tr").each(function(){
			obj = {};
			obj["type_cov"] = $(this).find('td:nth-child(1)').text();
			obj["KPP"] = $(this).find('td:nth-child(2)').text();
			obj["UW"] = $(this).find('td:nth-child(3)').text();
			receive_rateExtra.push(obj);
		});
	}else{
		$("#tbl_increaseCOOP_premium_CL tbody>tr").each(function(){
			obj = {};
			obj["key_cooperative"] = $(this).find('td:nth-child(1)').text();
			obj["text"] = $(this).find('td:nth-child(2)').text();
			obj["max_EM"] = $(this).find('td:nth-child(3) input').val();
			receive_rateExtra.push(obj);
		})
	}*/
	
	var pol_issue_unit = [];
	obj = {};
	obj["NBI"] = $("#rd_approval_branch_CL1").is(":checked");
	obj["headquarters"] = $("#rd_approval_branch_CL2").is(":checked");
	pol_issue_unit.push(obj);
	
	
	// ตาราง unwHistrule
	var unwHistrule = [];
	obj = {};
	obj["Hist_type"] = $("#chk_check_data_CL1").val();
	obj["Is_check"] = $("#chk_check_data_CL1").is(":checked");
	obj["Is_restrict"] = $("#haveCondition_oldCov").is(":checked");
	if($("#haveCondition_oldCov").is(":checked")){
		obj["Restrict_type_1"] = $("#sl_haveCondition_oldCov").val();
		obj["Condition_1"] = $("#sl_haveCondition_oldCov2").val();
		obj["Restrict_type_2"] = $("#sl_haveCondition_oldCov3").val();
		obj["Condition_2"] = $("#sl_haveCondition_oldCov4").val();
		obj["Restrict_type_3"] = $("#sl_haveCondition_oldCov5").val();
		obj["New_sa_compare"] = $("#sl_NewSA_oldCov").val();
		var New_sa_amt = $("#amount_NewSA_oldCov").val();
			New_sa_amt = New_sa_amt.replace(/,/g, "");
		obj["New_sa_amt"] = New_sa_amt;
	}else{
		obj["Restrict_type_1"] = "NONE";
		obj["Condition_1"] = "NONE";
		obj["Restrict_type_2"] = "NONE";
		obj["Condition_2"] = "NONE";
		obj["Restrict_type_3"] = "NONE";
		obj["New_sa_compare"] = "NONE";
		obj["New_sa_amt"] = "";
	}
	unwHistrule.push(obj)
	obj = {};
	obj["Hist_type"] = $("#chk_check_data_CL2").val();
	obj["Is_check"] = $("#chk_check_data_CL2").is(":checked");
	obj["Is_restrict"] = $("#haveCondition_IC").is(":checked");
	if($("#haveCondition_IC").is(":checked")){
		obj["Restrict_type_1"] = $("#sl_haveCondition_IC").val();
		obj["Condition_1"] = $("#sl_haveCondition_IC2").val();
		obj["Restrict_type_2"] = $("#sl_haveCondition_IC3").val();
		obj["Condition_2"] = $("#sl_haveCondition_IC4").val();
		obj["Restrict_type_3"] = $("#sl_haveCondition_IC5").val();
		obj["New_sa_compare"] = $("#sl_NewSA_IC").val();
		var New_sa_amt = $("#amount_NewSA_IC").val();
			New_sa_amt = New_sa_amt.replace(/,/g, "");
		obj["New_sa_amt"] = New_sa_amt;
	}else{
		obj["Restrict_type_1"] = "NONE";
		obj["Condition_1"] = "NONE";
		obj["Restrict_type_2"] = "NONE";
		obj["Condition_2"] = "NONE";
		obj["Restrict_type_3"] = "NONE";
		obj["New_sa_compare"] = "NONE";
		obj["New_sa_amt"] = "";
	}
	unwHistrule.push(obj)
	obj = {};
	obj["Hist_type"] = $("#chk_check_data_CL3").val();
	obj["Is_check"] = $("#chk_check_data_CL3").is(":checked");
	obj["Is_restrict"] = $("#haveCondition_SubCov").is(":checked");
	if($("#haveCondition_SubCov").is(":checked")){
		obj["Restrict_type_1"] = $("#sl_haveCondition_SubCov").val();
		obj["Condition_1"] = $("#sl_haveCondition_SubCov2").val();
		obj["Restrict_type_2"] = $("#sl_haveCondition_SubCov3").val();
		obj["Condition_2"] = $("#sl_haveCondition_SubCov4").val();
		obj["Restrict_type_3"] = $("#sl_haveCondition_SubCov5").val();
		obj["New_sa_compare"] = $("#sl_NewSA_Sub").val();
		var New_sa_amt = $("#amount_NewSA_Sub").val();
			New_sa_amt = New_sa_amt.replace(/,/g, "");
		obj["New_sa_amt"] = New_sa_amt;
	}else{
		obj["Restrict_type_1"] = "NONE";
		obj["Condition_1"] = "NONE";
		obj["Restrict_type_2"] = "NONE";
		obj["Condition_2"] = "NONE";
		obj["Restrict_type_3"] = "NONE";
		obj["New_sa_compare"] ="NONE";
		obj["New_sa_amt"] = "";
	}
	unwHistrule.push(obj)
	
	var unwHistMedSum = [];
	var unwHistMedSumDet = [];
	var seq = "";
	if($("#chk_check_data_CL1").is(':checked') && !$("#standing_capitalHealth_1_CL").hasClass('disabledAll')){
		$("#tbl_capitalHealth_1_CL tbody>tr").each(function(i){
			i++;
			
			if($(this).data('parent') == 1){
				obj = {};
				obj["Hist_type"] = $("#chk_check_data_CL1").val();
				obj["Seq"] = $(this).data('id');
				seq = $(this).data('id');
				obj["sale_eff_date"] = $(this).find('td:nth-child(2) input').val();
				obj["sale_exp_date"] = $(this).find('td:nth-child(3) input').val();
				unwHistMedSum.push(obj)
				
			}
			
			obj_det = {};
			obj_det["Hist_type"] = $("#chk_check_data_CL1").val();
			obj_det["Seq"] = seq;
			obj_det["Min_age"] = $(this).find('td:nth-child(5) input').val();
			obj_det["Max_age"] = $(this).find('td:nth-child(6) input').val();
			obj_det["Min_sum_amt"] = replaceComma($(this).find('td:nth-child(7) input').val());
			unwHistMedSumDet.push(obj_det);
		})
	}
	var seq = "";
	if($("#chk_check_data_CL2").is(':checked') && !$("#standing_capitalHealth_2_CL").hasClass('disabledAll')){
		$("#tbl_capitalHealth_2_CL tbody>tr").each(function(i){
			i++;
			
			if($(this).data('parent') == 1){
				obj = {};
				obj["Hist_type"] = $("#chk_check_data_CL2").val();
				obj["Seq"] = $(this).data('id');
				seq = $(this).data('id');
				obj["sale_eff_date"] = $(this).find('td:nth-child(2) input').val();
				obj["sale_exp_date"] = $(this).find('td:nth-child(3) input').val();
				unwHistMedSum.push(obj)
			}
		    
			obj_det = {};
			obj_det["Hist_type"] = $("#chk_check_data_CL2").val();
			obj_det["Seq"] = seq;
			obj_det["Min_age"] = $(this).find('td:nth-child(5) input').val();
			obj_det["Max_age"] = $(this).find('td:nth-child(6) input').val();
			obj_det["Min_sum_amt"] = replaceComma($(this).find('td:nth-child(7) input').val());
			unwHistMedSumDet.push(obj_det);
		})
	}
	var seq = "";
	if($("#chk_check_data_CL3").is(':checked') && !$("#standing_capitalHealth_3_CL").hasClass('disabledAll')){
		$("#tbl_capitalHealth_3_CL tbody>tr").each(function(i){
			if($(this).data('parent') == 1){
				obj = {};
				obj["Hist_type"] = $("#chk_check_data_CL3").val();
				obj["Seq"] = $(this).data('id');
				seq = $(this).data('id');
				obj["sale_eff_date"] = $(this).find('td:nth-child(2) input').val();
				obj["sale_exp_date"] = $(this).find('td:nth-child(3) input').val();
				unwHistMedSum.push(obj)
			}
		    
			obj_det = {};
			obj_det["Hist_type"] = $("#chk_check_data_CL3").val();
			obj_det["Seq"] = seq;
			obj_det["Min_age"] = $(this).find('td:nth-child(5) input').val();
			obj_det["Max_age"] = $(this).find('td:nth-child(6) input').val();
			obj_det["Min_sum_amt"] = replaceComma($(this).find('td:nth-child(7) input').val());
			unwHistMedSumDet.push(obj_det);
		})
	}
	var unwHistExitProd = [];
	$("#tbl_buyWith1_CL tbody>tr").each(function(){
		obj = {};
		obj["Hist_type"] = $("#chk_check_data_CL1").val();
		obj["Exist_prd_code"] = $(this).find('td:nth-child(2) input[type="hidden"]').val();
		unwHistExitProd.push(obj);
	})
	$("#tbl_buyWith2_CL tbody>tr").each(function(){
		obj = {};
		obj["Hist_type"] = $("#chk_check_data_CL2").val();
		obj["Exist_prd_code"] = $(this).find('td:nth-child(2) input[type="hidden"]').val();
		unwHistExitProd.push(obj);
	})
	$("#tbl_buyWith3_CL tbody>tr").each(function(){
		obj = {};
		obj["Hist_type"] = $("#chk_check_data_CL3").val();
		obj["Exist_prd_code"] = $(this).find('td:nth-child(2) input[type="hidden"]').val();
		unwHistExitProd.push(obj);
	})
	
	var flpFee_arr = [];
	$("#tbl_deduct_cost tbody>tr").each(function(){
		if($(this).find("td:nth-child(1) input").is(":checked")){
			obj = {};
			obj["Fee_type"] = $(this).find("td:nth-child(1) input").val();
			flpFee_arr.push(obj);
		}
	});
	
	var json_data = {
			"method" : "Tab_Provision",
			"prd_code": $("#pass_Insurance_product_cl").val(),
			
			"product" : JSON.stringify(product),
			"participant" : JSON.stringify(participant),
			"mode" : JSON.stringify(mode),
			"underwrite" : JSON.stringify(underwrite),
			"unwAccumRule" : JSON.stringify(unwAccumRule),
			"occ" : JSON.stringify(occ_degree),
			"Coop" : JSON.stringify(Coop),
			"pol_issue_unit" : JSON.stringify(pol_issue_unit),
			"unwSubstdType" : JSON.stringify(unwSubstdType),
			"unwCocreditLimit" : JSON.stringify(unw_cocredit_limit),	
			"unwHistrule" : JSON.stringify(unwHistrule),
			"unwRiderLimit" : JSON.stringify(unw_rider_limit),
			"appenDixProduct" : JSON.stringify(anti_HIV),		
			"unwHistMedSum" : JSON.stringify(unwHistMedSum),
			"unwHistMedSumDet" : JSON.stringify(unwHistMedSumDet),
			"unwHistExitProd" : JSON.stringify(unwHistExitProd),
			"flpFee_arr" : JSON.stringify(flpFee_arr),
			"groupName" : $("#groupName").val()
	}
	
	$.ajax({
	url: 'ProductCL_SaveData_Servlet',
	type: "POST",
	data: json_data,
	async: false,
	success: function (response) {
	
	}
	});
	console.log("data",json_data);
}
/************************** end save ********************************/

/*KHWAN*/
$("#chk_balloon_prd").click(function(){
	if($(this).prop("checked") == true){
		$("#txb_balloon_prd_code").prop("disabled", false);
		$("#btn_select_balloon_prd_code").prop("disabled", false);
	}else{
		$("#txb_balloon_prd_code").val("");
		$("#txb_balloon_prd_code").prop("disabled", true);
		$("#btn_select_balloon_prd_code").prop("disabled", true);
	}
});

/*เลือก balloon PRD Code*/
$(document).on("click", "#btn_select_balloon_prd_code", function () {
	$('#tb_Choose_ballon_prd_modal').DataTable().destroy();
	
	var json_data = {
		"method" : "GetCaseProductToBalloon",
		"prd_code" : $("#pass_Insurance_product_cl").val()
	}
	$.ajax({
	            url:"ProductCL_GetData_Servlet",
	            type:"POST",
	            data: json_data,
	            async: false,
	            success:function(response){
	            	$("#tb_Choose_ballon_prd_modal tbody").find("tr").remove();
	            	var row_id = 1;
	            	var row = "";
	            	for(i in response.caseProduct){
	            		var obj = response.caseProduct[i];
	            			row_id++;
	            			row = "<tr  id=\"row1_"+row_id+""+"\">" +	
			            			"<td class=\"col-sm-1 text-center"+"\">"+"<input type=\"radio\"id=\"rd_Choose_ballon_prd_"+row_id+"\" name=\"rd_Choose_ballon_prd\" value='"+obj.prd_code+"'>"+"</td>"+
			            			"<td class=\"verticalCenter col-sm-2 text-left"+"\">"+"<label style=\"text-decoration: underline; color: blue;\" for='rd_Choose_ballon_prd_"+row_id+"' id=\"choose_ballon_prd_pass_"+row_id+""+"\">"+obj.prd_code+"</label>"+"" +
			            			"</td>"+
			            			"<td class=\"col-sm-5 text-left"+"\">"+"<label for='rd_Choose_ballon_prd_"+row_id+"' id=\"choose_ballon_prd_Name_"+row_id+""+"\">"+obj.text+"</label>"+"" +
			            			"</td>"+
			            		"</tr>";
	            			$("#tb_Choose_ballon_prd_modal tbody").append(row);
	            	}
	            	
	            }

	});
	console.log("data",json_data);
	
	$("#tb_Choose_ballon_prd_modal").DataTable({"ordering": false,"paging": false,"bInfo" : false, scrollY: '236px',scrollCollapse: true, "autoWidth": false, 
		fixedHeader: {header: true},"oLanguage": {"sSearch": "ค้นหา: "}
	});
	$("#tb_Choose_ballon_prd_modal_wrapper .dataTables_scrollHeadInner").css({"width":"100%"});
	$("#tb_Choose_ballon_prd_modal_wrapper .table").css({"width":"100%"});

	$('#modal_Choose_ballon_prd').modal('show');
});

/*save balloon PRD Code*/
function bt_save_Choose_ballon_prd() {
	var check_row_modal = $("#tb_Choose_ballon_prd_modal tbody>tr").length;
	var ch_Choose_ballon_prd = false ;
	for(var ii= 1; ii <= check_row_modal; ii++){
	ch_Choose_ballon_prd = document.getElementById("rd_Choose_ballon_prd_"+ii);
		 if (ch_Choose_ballon_prd != null){
				if (ch_Choose_ballon_prd.checked == true) {
					var choose_ballon_prd_Pass  	=	document.getElementById('choose_ballon_prd_pass_'+ii).innerHTML;
					var choose_ballon_prd_Name 		=	document.getElementById('choose_ballon_prd_Name_'+ii).innerHTML;
				
					$("#txb_balloon_prd_code").val(choose_ballon_prd_Pass);
				}
		 }
	}
}


/*Get Data from Khwan*/

//setting Approve Lookup
function setting_LookupApproveCL(response){
	var obj_BI = response.Tab_Basic_Information[0];
	var cov_code = $("#pass_Insurance_product_cl").val();
	
	$("#code_Coverage_CL").val(cov_code);
	$("#confirmApprove0051_user_CL .modal-body p>span").text(cov_code);
	$("#confirmApprove0051_CL .modal-body p>span").text(cov_code);
	$("#confirmNotApprove0051_CL .modal-body p>span").text(cov_code);
	$("#confirmEdit0051_user_CL .modal-body p>span").text(cov_code);
	$("#confirmApproveEdit0051_CL .modal-body p>span").text(cov_code);
	$("#confirmNotApproveEdit0051_CL .modal-body p>span").text(cov_code);
}

//Approve
function setting_ApproveCL(response,type,prd_code_temp,prd_code_Clone){
	var obj_BI = response.Tab_Basic_Information[0];
	/*NEW , UPDATE = แก้ไข, REQUEST_FOR_APPROVE = รออนุมัติ, APPROVED = อนุมัติ, REJECTED = ไม่อนุมัติ*/
	//var status = "REJECTED";
	
	//Benz Clone 29-10-2019
	var status 		= "";
	var status_PD 	= "";
	if (type == "Clone") {
		 status 	= "NEW";
		 status_PD 	= "NEW";
		 datasave_BasicInformation ();
		 datasave_calInsurance ();
		 datasave_useRightInsurance ();
		 datasave_saleBenefit ();
		 datasave_warrantyTerms ();
		 set_status_clone(prd_code_Clone,$("#groupName").val());
			
	}else {
		 status 	= obj_BI.status;
		 status_PD 	= obj_BI.status_PD;
	}
	
	var cov_code = $("#pass_Insurance_product_cl").val();
	var cov_nameTH = obj_BI.nameTH
	var marketing_nameTH = obj_BI.marketing_nameTH
	
	$("#code_Coverage_CL").val(cov_code);
	$("#approve_nameTH_CL").val(cov_nameTH);
	$("#approve_nameEN_CL").val(marketing_nameTH);
	$("#cov_status").val(status);
	$("#cov_status_PD").val(status_PD);
	$("#confirmApprove0051_user_CL .modal-body p>span").text(cov_code);
	$("#confirmApprove0051_CL .modal-body p>span").text(cov_code);
	$("#confirmNotApprove0051_CL .modal-body p>span").text(cov_code);
	$("#confirmEdit0051_user_CL .modal-body p>span").text(cov_code);
	$("#confirmApproveEdit0051_CL .modal-body p>span").text(cov_code);
	$("#confirmNotApproveEdit0051_CL .modal-body p>span").text(cov_code);
	
	//enable tab
	if(status == "NEW" && status_PD == "NEW"){
		//No Action
	}else{
		 $("#menu_CL_3").removeClass("disabledAll");
		 $("#menu_CL_2").removeClass("disabledAll");
		 $("#menu_CL_4").removeClass("disabledAll");
		 $("#menu_CL_5").removeClass("disabledAll");
		 $("#menu_CL_6").removeClass("disabledAll");
		 $("#menu_CL_7").removeClass("disabledAll");
	}
}

function showcase_basicInfo(response,type,prd_code_temp,prd_code_Clone){
	var obj = response.Tab_Basic_Information[0];
	$("#key_Insurance_product_cl").val(obj.coreBiz);
	///BEnz เพิ่มไปก่อน เดี๋ยวค่อยลบ ฺ14-11-2019
	if  (type == "Clone") {
		$("#th_Name_cl").val("Clone"+obj.nameTH);
	}else {
		$("#th_Name_cl").val(obj.nameTH);
	}
	$("#en_Name_cl").val(obj.nameEN);
	$("#th_marketingName_cl").val(obj.marketing_nameTH);
	$("#en_marketingName_cl").val(obj.marketing_nameEN);
	$("#lb_credit_firstYear_CL option[value="+obj.fyp_credit+"]").attr('selected', true);
	$("#lb_credit_nextYear_CL option[value="+obj.ryp_credit+"]").attr('selected', true);
	$("#lb_reinsurance_CL option[value="+obj.underwrite_opt+"]").attr('selected', true);
	$("#lb_distribution_CL option[value="+obj.distribution_Channel+"]").attr('selected', true);
	$("#lb_saleChannel_CL option[data-id="+obj.sale_channel+"]").attr('selected', true);
	$("#sel_Type_Additional_contract option[value="+obj.prd_design+"]").attr('selected', true);
	$("#amount_max_commission").val((obj.max_commission*100).toFixed(2))
	
	/*เป็น Finance Account + สัญญาประกันภัย*/
	$("#chk_finance_PB").prop("checked",false);
	$("#chk_insurance_contract").prop("checked",false);
	if(obj.fin_acc){
		$("#chk_finance_PB").prop("checked",true);
	}
	if(obj.insurance){
		$("#chk_insurance_contract").prop("checked",true);
	}
	
	/*เปลี่ยนผู้รับประโยชน์หลัก*/
	if(obj.first_beneficiary == "INTERESTED"){
		$("#chk_change_main_person").prop("checked",true);
	}
	if($("#lb_credit_nextYear_CL").val() != ""){
		$("#lb_credit_nextYear_CL").attr("disabled",false);
	}
		
	
	var partner = obj.partner;
	// fillter option partner
	if(obj.sale_channel != ""){
		var systemCode = $('#lb_saleChannel_CL :selected').val();
		var json_data = {
				"method": "GetPartner",
		        "systemCode": systemCode
			}
		$.ajax({
			url: 'ProductCL_Data_default_Servlet',
			type: "POST",
			data: json_data,
			success: function (response) {
				var row_PDPartner = "";	
				for (i in response.partner) {
					var obj_PDPartner = response.partner[i];
						row_PDPartner += "<option data-id='"+obj_PDPartner.pass+"' value='"+obj_PDPartner.key+"'>"+obj_PDPartner.text+"</option>";
				}
				$("#lb_partner_CL").append(row_PDPartner);
				if(partner != ""){
					$("#lb_partner_CL option[data-id="+partner+"]").attr('selected', true);		//FIXME by pun have problem
				}
				// COOP
				if($("#lb_partner_CL").val() == "Y"){
					$("#amount_max_commission").attr("disabled",false)
					$("#tr_coop_commision_CL").show();
					$("#div_COOP_CL").show();
					$("#div_increase_premium_CL").hide();
					$("#div_increaseCOOP_premium_CL").show();
					
					$("#master_policy_cl").hide();
					$("#div_COOP_masterPolicy_CL").show();
					get_COOP();
					var json = {
							"method": "GetCoop",
					}
					$.ajax({
						url: 'ProductCL_GetData_Servlet',
						type: "POST",
						data: json,
						success: function (response) {
							
							// ตาราง coop - ค่านายหน้า
							var id_parent = 1
							var id_child = 0
							for(i in response.coopAll[0].coop_Commission){
								var round = Number(i) + Number(1);
								var after_row = Number(i) - Number(1);
								var obj_com = response.coopAll[0].coop_Commission[i];
								//var seq_com = obj_com.seq;
								//var obj_coop = response.coopAll[0].coop[seq_com-1];
								/*if(obj_coop.coop_code == $("#tb_COOP_CL tbody>tr").eq(after_row).find('td:nth-child(2)').text()){
									id_parent--;
								}*/
								//เซ็คซ้ำ
								var chk_dup = false;
								if($("#tb_COOP_CL tbody>tr").length > 0){
									if(obj_com.seq == response.coopAll[0].coop_Commission[after_row].seq){
										chk_dup = true;
									}
								}
								
								var row_com = "";
								if(!chk_dup){
									var row_com = "<tr id='tr_COOP_"+id_parent+"' data-topic='"+obj_com.seq+"' data-group='"+obj_com.seq+"' data-parent='true'>"+
										"<td class='text-center verticalCenter borderBlack' id='imgOK_COOP"+id_parent+"' onclick='imgCheckbox(this.id);'>"+
											"<input type='hidden' id='seq' value=''>"+
											"<i class='glyphicon glyphicon-edit'></i>" +
										"</td>"+
										"<td class='text-center verticalCenter borderBlack'></td>"+
										"<td class='verticalCenter borderBlack'></td>"+
										"<td class='text-center verticalCenter borderBlack'><input type='text' class='form-control format_date' id='coop_ComDateStart"+round+"' onblur='checkdateTo_COOP(this.id);' onkeyup='keyup_validateDate(event,this.id);' placeholder='dd/mm/yyyy' value='' maxlength='10' readonly></td>"+
										"<td class='text-center verticalCenter borderBlack'><input type='text' class='form-control format_date' id='coop_ComDateEnd"+round+"' onblur='checkdateTo_COOP(this.id);' onkeyup='keyup_validateDate(event,this.id);' placeholder='dd/mm/yyyy' value='' maxlength='10' readonly></td>"+
										"<td class='text-center verticalCenter borderBlack'>" +
											"<input type='hidden' id='seq_com' value='"+obj_com.seq+"'>"+
										"<i class='glyphicon glyphicon-plus icon-blue-circle' id='"+obj_com.seq+"' data-id='"+obj_com.seq+"' data-topic='"+obj_com.seq+"' data-type='"+obj_com.seq+"' onclick='addRow_tbCOOP(this.id); '></i></td>";
									id_parent++;
									
								
								}else{
									row_com += "<tr id='tr_COOP_"+obj_com.seq+"_"+id_child+"' data-id='"+obj_com.seq+"_"+id_child+"' data-topic='"+obj_com.seq+"' data-group='"+obj_com.seq+"' data-parent='false'>"+ 
										"<td class='text-center verticalCenter borderBlack'></td>"+
										"<td class='text-center verticalCenter borderBlack'></td>"+
										"<td class='verticalCenter borderBlack'></td>"+
										"<td class='text-center verticalCenter borderBlack'></td>"+
										"<td class='text-center verticalCenter borderBlack'></td>"+
										"<td class='text-center verticalCenter borderBlack'>" +
											"<input type='hidden' id='seq_com' value='"+obj_com.seq+"'>"+
										"<i class='glyphicon icon-blue-circle glyphicon-minus icon_active' id='"+id_parent+"_"+id_child+"' data-id='"+id_parent+"_"+id_child+"' data-topic='"+id_parent+"' data-type='"+id_parent+"' onclick='removeRow_tbCOOP(this.id)'></i></td>";
									//id_parent++;
									id_child++;
								}
								row_com +=	
									"<td class='text-center verticalCenter borderBlack'><input type='text' class='form-control text-right' id='coop_ComAgeStart"+round+"' onkeypress='validate(event)' onblur='clear_rowCoop(this.id);' value='"+obj_com.min_age+"' maxlength='2'></td>"+
									"<td class='text-center verticalCenter borderBlack'><input type='text' class='form-control text-right' id='coop_ComAgeEnd"+round+"' onkeypress='validate(event);' onblur='clear_rowCoop(this.id); autokey_ageCoop(this.id,1); validate_ageCoop(this.id,1)'value='"+obj_com.max_age+"' maxlength='2'></td>"+
									"<td class='text-center verticalCenter borderBlack'><input type='text' class='autoPercent form-control text-right' id='coop_ComValue"+round+"' data-v-min='0.00' data-v-max='999.99' onkeypress='validate(event)' onblur='validateMaxCommission(this);' value='"+(obj_com.commission_rate*100).toFixed(2)+"'></td>"+
								"</tr>"
									
							$("#tb_COOP_CL tbody").append(row_com);	
							$(".autoPercent").autoNumeric('init',{vMin: '0.00', vMax: '99.99'});	
							
							}
							
							// ตาราง coop - จำนวนเงินเอาประกันภัย ขั้นต่ำ
							var id_parent = 1
							var id_child = 0
							for(i in response.coopAll[0].coop_Sum){
								$("#div_COOP_CL_2").show();
								var round = Number(i) + Number(1);
								var after_row = Number(i) - Number(1);
								var obj_sum = response.coopAll[0].coop_Sum[i];
								var seq_sum = obj_sum.seq;
								//var obj_coop = response.coopAll[0].coop[i];
								//if(obj_coop.coop_code == $("#tb_COOP_CL_2 tbody>tr").eq(after_row).find('td:nth-child(1)').text()){
								//	id_parent--;
								//}
								//เซ็คซ้ำ
								var chk_dup = false;
							//	$("#tb_COOP_CL_2 tbody>tr").each(function(){
								if($("#tb_COOP_CL_2 tbody>tr").length > 0){
									if(obj_sum.seq == response.coopAll[0].coop_Sum[after_row].seq){
										chk_dup = true;
									}
								}
									
							//	})
								var row_sum = "";
								if(!chk_dup){
									//var coop_code = obj_coop.coop_code;
									//var coop_name = obj_coop.name;
									
									var row_sum = "<tr id='tr_COOP_"+id_parent+"' data-topic='"+obj_sum.seq+"' data-group='"+obj_sum.seq+"' data-parent='true'>"+
										"<td class='text-center verticalCenter borderBlack'><label></label>"+
											"<input type='hidden' id='seq' value=''>"+
										"</td>"+
										"<td class='verticalCenter borderBlack'></td>"+
										"<td class='text-center verticalCenter borderBlack'><i class='glyphicon glyphicon-plus icon-blue-circle' id='"+id_parent+"' data-id='"+id_parent+"' data-topic='"+id_parent+"' data-type='"+id_parent+"' onclick='addRow_tbCOOP_2(this.id); '></i></td>";
									id_parent++;
								}else{
									row_sum += "<tr id='tr_COOP_"+id_parent+"_"+id_child+"' data-id='"+id_parent+"_"+id_child+"' data-topic='"+obj_sum.seq+"' data-group='"+obj_sum.seq+"' data-parent='false'>"+ 
										"<td class='text-center verticalCenter borderBlack'><label></label>" +
										"<input type='hidden' id='seq' value='"+obj_sum.seq+"'>" +
										"</td>"+
										"<td class='text-center verticalCenter borderBlack'></td>"+
										"<td class='text-center verticalCenter borderBlack'><i class='glyphicon icon-blue-circle glyphicon-minus icon_active' id='"+id_parent+"_"+id_child+"' data-id='"+id_parent+"_"+id_child+"' data-topic='"+id_parent+"' data-type='"+id_parent+"' onclick='removeRow_tbCOOP_2(this.id)'></i></td>";
									id_parent++;
									id_child++;
								}
								row_sum +=	"<td class='text-center verticalCenter borderBlack'><input type='text' class='form-control text-right' id='coop_AmountAgeStart"+round+"' onkeypress='validate(event)' onblur='clear_rowCoop(this.id);' value='"+obj_sum.min_age+"' maxlength='2'></td>"+
										"<td class='text-center verticalCenter borderBlack'><input type='text' class='form-control text-right' id='coop_AmountAgeEnd"+round+"' onkeypress='validate(event)' onblur='clear_rowCoop(this.id); autokey_ageCoop(this.id,2); validate_ageCoop(this.id,2)' value='"+obj_sum.max_age+"' maxlength='2'></td>"+
										"<td class='text-center verticalCenter borderBlack'><input type='text' class='autoComma form-control text-right' id='coop_AmountValue"+round+"' onkeypress='validate(event)' value='"+obj_sum.min_sa+"' data-v-min='0.00' data-v-max='9999999999.00'></td>"+
									"</tr>"
									
											
								$("#tb_COOP_CL_2 tbody").append(row_sum);	
							} 
							
							$(".autoComma").autoNumeric('init', { aSep: ',', vMin: '0.00', vMax: '999999999.99', wEmpty: 'zero' });
							
							// ตาราง coop - ส่วนลด
							var id_parent = 1
							var id_child = 0
							for(i in response.coopAll[0].coop_Prem_Discount){
								$("#div_COOP_CL_3").show();
								var round = Number(i) + Number(1);
								var after_row = Number(i) - Number(1);
								var obj_dis = response.coopAll[0].coop_Prem_Discount[i];
								//var seq_dis = obj_dis.seq;
								//var obj_coop = response.coopAll[0].coop[i];
								//if(obj_coop.coop_code == $("#tb_COOP_CL_3 tbody>tr").eq(after_row).find('td:nth-child(1)').text()){
								//	id_parent--;
								//}
								
								
								//เซ็คซ้ำ
								var chk_dup = false;
								//$("#tb_COOP_CL_3 tbody>tr").each(function(){
								if($("#tb_COOP_CL_3 tbody>tr").length > 0){
									if(obj_dis.seq == response.coopAll[0].coop_Prem_Discount[after_row].seq){
										chk_dup = true;
									}
								}
								//})
								var row_dis = "";
								if(!chk_dup){
								//	var coop_code = obj_coop.coop_code;
									//var coop_name = obj_coop.name;
									
									
									var row_dis = "<tr id='tr_COOP_"+id_parent+"' data-topic='"+obj_dis.seq+"' data-group='"+obj_dis.seq+"' data-parent='true'>"+
										"<td class='text-center verticalCenter borderBlack'><label></label>"+
											"<input type='hidden' id='seq' value=''>"+
										"</td>"+
										"<td class='verticalCenter borderBlack'></td>"+
										"<td class='text-center verticalCenter borderBlack'><i class='glyphicon glyphicon-plus icon-blue-circle' id='"+obj_dis.seq+"' data-id='"+obj_dis.seq+"' data-topic='"+obj_dis.seq+"' data-type='"+obj_dis.seq+"' onclick='addRow_tbCOOP_3(this.id); '></i></td>";
									id_parent++;
								}else{
									row_dis += "<tr id='tr_COOP_"+id_parent+"_"+id_child+"' data-id='"+id_parent+"_"+id_child+"' data-topic='"+obj_dis.seq+"' data-group='"+id_parent+"' data-parent='false'>"+ 
										"<td class='text-center verticalCenter borderBlack'><label></label>" +
										"<input type='hidden' id='seq' value='"+obj_dis.seq+"'>" +
										"</td>"+
										"<td class='text-center verticalCenter borderBlack'></td>"+
										"<td class='text-center verticalCenter borderBlack'><i class='glyphicon icon-blue-circle glyphicon-minus icon_active' id='"+id_parent+"_"+id_child+"' data-id='"+id_parent+"_"+id_child+"' data-topic='"+id_parent+"' data-type='"+id_parent+"' onclick='removeRow_tbCOOP_3(this.id)'></i></td>";
									id_parent++;
									id_child++;
								}
								row_dis +=	"<td class='text-center verticalCenter borderBlack'><input type='text' class='form-control text-right' id='coop_DiscountAgeStart"+round+"' onkeypress='validate(event)' onblur='clear_rowCoop(this.id);' value='"+obj_dis.min_age+"' maxlength='2'></td>"+
										"<td class='text-center verticalCenter borderBlack'><input type='text' class='form-control text-right' id='coop_DiscountAgeEnd"+round+"' onkeypress='validate(event)' onblur='clear_rowCoop(this.id); autokey_ageCoop(this.id,3); validate_ageCoop(this.id,3)' value='"+obj_dis.max_age+"' maxlength='2'></td>"+
										"<td class='text-center verticalCenter borderBlack'><input type='text' class='autoPercent form-control text-right' id='coop_DiscountAgeValue"+round+"' data-v-min='0.00' data-v-max='999.99' onkeypress='validate(event)' onblur='validateMaxCommission(this);' value='"+(obj_dis.prem_disc_rate*100).toFixed(2)+"'></td>"+
									"</tr>"
									
								$("#tb_COOP_CL_3 tbody").append(row_dis);	
							}
							
							// ตาราง COOP - ค่านายหน้า 
							for(i in response.coopAll[0].coop){
								var obj_coop = response.coopAll[0].coop[i];
								$("#tb_COOP_CL tbody>tr").each(function(){
									if(obj_coop.seq == $(this).data('topic') && $(this).data('parent') == true){
										$(this).find('td:nth-child(1) #seq').val(obj_coop.seq)
										$(this).find('td:nth-child(2)').text(obj_coop.coop_code)
										$(this).find('td:nth-child(3)').text(obj_coop.name)
										$(this).find('td:nth-child(4) input').val(obj_coop.eff_date)
										$(this).find('td:nth-child(5) input').val(obj_coop.exp_date)
									}
								})
								$("#tb_COOP_CL_2 tbody>tr").each(function(){
									if(obj_coop.seq == $(this).data('topic') && $(this).data('parent') == true){
										$(this).find('td:nth-child(1) #seq').val(obj_coop.seq)
										$(this).find('td:nth-child(1) label').text(obj_coop.coop_code)
										$(this).find('td:nth-child(2)').text(obj_coop.name)
									}
								})
								$("#tb_COOP_CL_3 tbody>tr").each(function(i){
									if(obj_coop.seq == $(this).data('topic') && $(this).data('parent') == true){
										$(this).find('td:nth-child(1) label').text(obj_coop.coop_code)
										$(this).find('td:nth-child(1) #seq').val(obj_coop.seq)
										$(this).find('td:nth-child(2)').text(obj_coop.name)
									}
								})
								
								// Taิb - ข้อกำหนด
								var row_tbCOOP = "<tr>"+
								"<td class='verticalCenter text-center'>"+obj_coop.coop_code+
									"<input type='hidden' id='seq' value='"+obj_coop.seq+"'>"+
								"</td>"+
								"<td class='verticalCenter text-left'>"+obj_coop.name+"</td>"
								if(!obj_coop.max_em){
									row_tbCOOP += "<td class='verticalCenter text-center'><input type='text' class='autoPercent3 form-control text-right' value='0.00' data-v-min='0.00' data-v-max='999.99'></td>"
								}else{
									row_tbCOOP += "<td class='verticalCenter text-center'><input type='text' class='autoPercent3 form-control text-right' value='"+(obj_coop.max_em*100).toFixed(2)+"' data-v-min='0.00' data-v-max='999.99'></td>"
								}
								row_tbCOOP += "</tr>"
								$("#tbl_increaseCOOP_premium_CL").append(row_tbCOOP);
								
								// Taิb - ข้อกำหนด
								var row_tbCOOPMaster = "<tr>"+
								"<td class='verticalCenter text-center'>"+obj_coop.coop_code+""+
									"<input type='hidden' id='seq' value='"+obj_coop.seq+"'>"+
								"</td>"+
								"<td class='verticalCenter text-left'>"+obj_coop.name+"</td>"
								if(!obj_coop.master_policy || obj_coop.master_policy < 0 || obj_coop.master_policy == "null"){
									row_tbCOOPMaster += "<td class='verticalCenter text-center'><input type='text' class='form-control text-center' value='0' maxlength='20' onkeyup='replaceSpecialSymbol(this);'></td>"
								}else{
									row_tbCOOPMaster += "<td class='verticalCenter text-center'><input type='text' class='form-control text-center' value='"+obj_coop.master_policy+"' maxlength='20' onkeyup='replaceSpecialSymbol(this);'></td>"
								}
								row_tbCOOPMaster += "</tr>"
								$("#tbl_COOP_masterPolicy_CL").append(row_tbCOOPMaster);
							}
							/*jQuery(".format_date").datetimepicker({
								  onShow:function( ct ){},timepicker:false,format:'d/m/Y' ,lang:'th', yearOffset:543
							}); */
							
							var year_end = new Date().getFullYear();
							year_end = 9999 - 543;
							
							console.log("end>> "+year_end);
							
							jQuery('.format_date').datetimepicker({
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
								
							jQuery('.format_date').on("mouseenter mouseleave", function(e){
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
							
							$(".autoPercent").autoNumeric('init',{vMin: '0.00', vMax: '99.99'});
							$(".autoPercent3").autoNumeric('init',{vMin: '0.00', vMax: '999.99'});
						

							//Benz set Save Clone 29-10-2019
						/*	if (type == "Clone") {
								datasave_BasicInformation(); //Tab 1
								//datasave_warrantyTerms(); //Tab 5 
								////////////////////////////////////////
								var groupName = $("#groupName").val();
								$.ajax({
							        type: "POST",
							        url : "CloneServlet",
							        data: {
							        	method 			: "setstatusProductTask",
							        	prd_code_Clone	: prd_code_Clone,
							        	groupName		: groupName
							        },       
							        success : function(response) {},
							        error : function(response) {}
								});
								/////////////////////////////////////////
							}*/
						}
					});
				}
			}
		});
	}
	
	$("#lb_AML_CFT_CL option[value="+obj.score_aml+"]").attr('selected', true);
	$("#sel_Loan_Type option[value="+obj.loan_type+"]").attr('selected', true);
	// ตาราง base plan หา type ของมันก่อน เพื่อนำไปหยอดลงในตาราง baseplan
	var prd_code_base = [];
	var cov_code_base = [];
	var cov_cat_id_base = [];
	var cat_code_base = [];
	for(i in response.Tab_Basic_Information[0].type_coverage){
		var obj = response.Tab_Basic_Information[0].type_coverage[i];
			for(ii in response.Tab_Basic_Information[0].type_coverage[i].type){
				var obj_type = response.Tab_Basic_Information[0].type_coverage[i].type[ii];
				//Benz Clone 29-10-2019
				if (i == 0) {
					if(ii == 0){
						if (type == "Clone") {
							 prd_code = prd_code_Clone;
						}else {
							prd_code_base.push(obj_type.prd_code);
						}
					}else if(ii == 1){
						cov_code_base.push(obj_type.cov_code);
					}else if(ii == 2){
						cov_cat_id_base.push(obj_type.cov_cat_id);
					}else if(ii == 3){
						cat_code_base.push(obj_type.cat_code);
					}
				}else{
					if(ii == 0){
						prd_code_base.push(obj_type.prd_code);
					}else if(ii == 1){
						cov_code_base.push(obj_type.cov_code);
					}else if(ii == 2){
						cov_cat_id_base.push(obj_type.cov_cat_id);
					}else if(ii == 3){
						cat_code_base.push(obj_type.cat_code);
					}
				}
			}
	}
	// ตาราง base plan
	var base_type = "";
	for(i in response.Tab_Basic_Information[0].basePlan){
		var obj_base = response.Tab_Basic_Information[0].basePlan[0];
		var obj_base_pm = response.Tab_Basic_Information[0].basePlan[i].pm_rate[0][0];
		var obj_base_nar = response.Tab_Basic_Information[0].basePlan[i].nar[0][0];
		var obj_age_type = response.Tab_Basic_Information[0].type_coverage[0].type;
		
		//Benz Clone 29-10-2019
		var prd_code = "";
		
		if (type == "Clone") {
			 prd_code = prd_code_Clone;
		}else {
			 prd_code = response.Tab_Basic_Information[0].basePlan[i].prd_code;
		}
		/*var cov_code = response.Tab_Basic_Information[0].basePlan[i].cov_code;*/
		
		var rate_cat_NAR = $("#rate_cat_NAR").val();
		var changeFileModal = 'modalGet_selectFile("'+obj_base.cov_code+'","fileuploads_PMRate1_CL","ip_fileuploads_CL_PM_Rate1_Show_1","span_PM_Rateopen_1","validate_rateP1_CL", "span_PM_Ratedownload_1")';
		if(obj_base_pm){
			var file_name_show = obj_base_pm.filename;
			if (file_name_show != "") {
				if (type == "Clone") {
					  file_name_show = obj_base_pm.filename.replace(prd_code_temp, prd_code_Clone);
				}else {
					file_name_show = obj_base_pm.filename;
				}
			}
			var get_show_fileModal_PMRate = 'openFileTextProduct_CL("'+file_name_show+'", "'+obj_base_pm.ref+'",41,"tb_input_fileSee_modal_pmRate", "modal_input_fileSee_PMRate")';
			var get_download_PM_file = 'openFile_target("'+file_name_show+'","'+obj_base_pm.ref+'","txt_download")';
		}
		if(obj_base_nar){
			var file_name = obj_base_nar.filename;
			if (file_name != "") {
				if (type == "Clone") {
					file_name = obj_base_nar.filename.replace(prd_code_temp, prd_code_Clone);
				}else {
					 file_name = obj_base_nar.filename;
				}
			}
			var file_pattern = file_name.replace(prd_code, "{P Code}");
			file_pattern = file_pattern.replace("_"+cov_code, "");
			
			if(file_pattern == "AmtRe_CL 18 1K_{P Code}.txt"){
				var get_show_fileModal_NAR = 'openFileTextProduct_CL("'+file_name+'", "'+obj_base_nar.ref+'",69,"tb_input_fileSee_modal_NAR", "modal_input_fileSee_NAR")';
				
			}else if(file_pattern == "AmtRe_ASA_CL 14 1K_{P Code}.txt"){
				var get_show_fileModal_NAR = 'openFileTextProduct_CL("'+file_name+'", "'+obj_base_nar.ref+'",70,"tb_input_fileSee_modal_NAR_ASA", "modal_input_fileSee_NAR_ASA")';
				
			}
			var get_download_NAR_file = 'openFile_target("'+file_name+'","'+obj_base_nar.ref+'","txt_download")';
		}
		
		for(ii=0 ; ii<cov_code_base.length ; ii++){
			if(obj_base.cov_code == cov_code_base[ii]){
				base_type = cov_cat_id_base[ii];
			}
		}
		//Benz Clone 29-10-2019
		var show_prdcode_basePlan = "";
		if (type == "Clone") {
			show_prdcode_basePlan = prd_code_Clone;
		}else {
			show_prdcode_basePlan = obj_base.prd_code;
		}
		row = "<tr  id=\"rowLookupValue_tbody_PM_Rate1_1"+"\">" +	
		"<td class=\"text-left verticalCenter borderBlack\">"+
			"<label style=\"text-decoration: underline; color: blue;\">"+obj_base.cov_code+"</label>"+
			"<input type='hidden' id='prd_code_base_PM' value='"+show_prdcode_basePlan+"' > "+
			"<input type='hidden' id='cov_cat_id_base_PM' value='"+base_type+"'>"+
		"</td>"+	
		"<td class=\"text-left verticalCenter fontcolortable1 borderBlack\">"+"<label>"+obj_base.nameTH+"</label>"+"</td>";
		if(obj_base_pm){
			var file_name_show = obj_base_pm.filename;
			if (file_name_show != "") {
				if (type == "Clone") {
					 file_name_show = obj_base_pm.filename.replace(prd_code_temp, prd_code_Clone);
				}else {
					file_name_show = obj_base_pm.filename;
				}
			}
			row += "<td colspan=\"2\" class=\"verticalCenter borderBlack\">"+
				"<input type='hidden' id='fileId_base_PM' value='"+obj_base_pm.fileID+"'/>"+
				"<input type='hidden' id='rate_cat_id_base_PM' value='"+obj_base_pm.rate_cat_id+"'/>"+
				"<input type='hidden' id='rate_layout_id_base_PM' value='"+obj_base_pm.rate_layout_id+"'/>"+
				"<div class=\"input-group col-xs-12\">"+
				"<input type=\"file\" accept=\".txt\" id=\"ip_fileuploads_CL_PM_Rate1_1\" style=\"display: none\">"+
				"<input type=\"text\" class=\"form-control\" id=\"ip_fileuploads_CL_PM_Rate1_Show_1\" value='"+file_name_show+"'readonly> " +
				"<span class=\"input-group-btn\"><button class=\"btn btn-default btn-primary\" onclick='"+changeFileModal+"' type=\"button\" id=\"bt_uploadfilePM_Rate1_1\" data-toggle=\"modal\" data-target=\"#modal_input_PMRate\"><font id='validate_rateP1_CL' class='require_file' style='color: red;' hidden>*</font>...</button>"+
				"</span>"+
				"</div>"+
			"</td>"+
			"<td class=\"text-center verticalCenter borderBlack\">"+
			"<a id='span_PM_Rateopen_1' class='active_grey'>"+
				"<span class='glyphicon glyphicon-eye-open activecolorblue' onclick='"+get_show_fileModal_PMRate+"'></span>"+
			"</a>"+
		"</td>"+
		"<td class=\"text-center verticalCenter borderBlack\">"+
		"<a id='span_PM_Ratedownload_1' class='active_grey'>"+
		"<span data-id=\'span_PM_Ratedownload_1\' class=\'glyphicon glyphicon-download-alt activecolorblue\' onclick='"+get_download_PM_file+"'></span>"+
		"</a>"+
		"</td>";
	
		}else{
			row += "<td colspan=\"2\" class=\"verticalCenter borderBlack\">"+
			"<input type='hidden' id='fileId_base_PM' value=''/>"+
			"<input type='hidden' id='rate_cat_id_base_PM' value=''/>"+
			"<input type='hidden' id='rate_layout_id_base_PM' value=''/>"+
			"<div class=\"input-group col-xs-12\">"+
			"<input type=\"file\" accept=\".txt\" id=\"ip_fileuploads_CL_PM_Rate1_1\" style=\"display: none\">"+
			"<input type=\"text\" class=\"form-control\" id=\"ip_fileuploads_CL_PM_Rate1_Show_1\" value=''readonly> " +
			"<span class=\"input-group-btn\"><button class=\"btn btn-default btn-primary\" onclick='"+changeFileModal+"' type=\"button\" id=\"bt_uploadfilePM_Rate1_1\" data-toggle=\"modal\" data-target=\"#modal_input_PMRate\">" +
			/*"<font id='validate_rateP1_CL' class='require_file' style='color: red;'>*</font>" +*/
			"...</button>"+
			"</span>"+
			"</div>"+
		"</td>"+
		"<td class=\"text-center verticalCenter borderBlack\">"+
		"<a id='span_PM_Rateopen_1' class='active_grey'>"+
			"<span class='glyphicon glyphicon-eye-open activecolorgray'></span>"+
		"</a>"+
		"</td>"+
		"<td class=\"text-center verticalCenter borderBlack\">"+
		"<a id='span_PM_Ratedownload_1' class='active_grey'>"+
		"<span data-id=\'span_PM_Ratedownload_1\' class=\'glyphicon glyphicon-download-alt activecolorgray\'></span>"+
		"</a>"+
	"</td>";
	
		}
		
		row += "<td class='verticalCenter borderBlack'>" +
			"<input type='text' class='autoComma form-control text-right' value='"+parseFloat(obj_base.fix_sa_amt).toFixed(2)+"' data-v-min='0.00' data-v-max='9999999999.00'>"+
		"</td>";
		if(obj_base_nar){
			var file_name = obj_base_nar.filename;
			if (file_name != "") {
				if (type == "Clone") {
					file_name = obj_base_nar.filename.replace(prd_code_temp, prd_code_Clone);
				}else {
					 file_name = obj_base_nar.filename;
				}
			}
			row += "<td class=\"verticalCenter borderBlack\">"+
			"<div id='form_input_file' class='input-group'>"+
				"<input type='hidden' id='fileId_base_NAR' value='"+obj_base_nar.fileID+"'/>"+
				"<input type='hidden' id='rate_cat_id_base_NAR' value='"+obj_base_nar.rate_cat_id+"'/>"+
				"<input type='hidden' id='rate_layout_id_base_NAR' value='"+obj_base_nar.rate_layout_id+"'/>"+
				"<input type='text' class='form-control' id='fileuploads_NARText1_CL' value='"+file_name+"' readonly=''>"+ 
				"<label class='input-group-btn'> "+
					
					"<span id='spanNAR1_CL' class='btn btn-primary' >"+
					"<font id='validate_NAR1_CL' style='color: red;' hidden>*</font><b>...</b>"+
					"<input id='fileuploads_NAR1_CL' type='file' accept='text/plain' style='display: none;' value='"+file_name+"'>"+
					"</span>"+
				"</label>"+
			"</div>"+
		"</td>"+
			"<td class=\"text-center verticalCenter borderBlack\">"+
			"<a id='span_PM_RateopenNAR_1' class='active_grey'>"+
				"<span class='glyphicon glyphicon-eye-open activecolorblue'  onclick='"+get_show_fileModal_NAR+"'></span>"+
			"</a>"+
			"</td>"+
			 "<td class=\"text-center verticalCenter borderBlack\">"+
			 "<a id='span_PM_RatedownloadNAR_1' class='active_grey'>"+
				"<span data-id=\'span_PM_RatedownloadNAR_1\' class=\'glyphicon glyphicon-download-alt activecolorblue\' onclick='"+get_download_NAR_file+"'></span>"+
				"</a>"+
				"</td>";
			
			
		}else{
			row += "<td class=\"verticalCenter borderBlack\">"+
			"<div id='form_input_file' class='input-group'>"+
				"<input type='text' class='form-control' id='fileuploads_NARText1_CL' readonly=''>"+ 
				"<label class='input-group-btn'> "+
					"<input type='hidden' id='fileId_base_NAR' value=''/>"+
					"<input type='hidden' id='rate_cat_id_base_NAR' value='"+rate_cat_NAR+"'/>"+
					"<input type='hidden' id='rate_layout_id_base_NAR' value=''/>"+
					"<span id='spanNAR1_CL' class='btn btn-primary' >"+
					/*"<font id='validate_NAR1_CL' style='color: red;'>*</font>" +*/
					"<b>...</b>"+
					"<input id='fileuploads_NAR1_CL' type='file' accept='text/plain' style='display: none;'>"+
					"</span>"+
				"</label>"+
			"</div>"+
		"</td>"+
		"<td class=\"text-center verticalCenter borderBlack\">"+
		"<a id='span_PM_RateopenNAR_1' class='active_grey'>"+
			"<span class='glyphicon glyphicon-eye-open activecolorgray'></span>"+
		"</a>"+
		"</td>"+
		 "<td class=\"text-center verticalCenter borderBlack\">"+
		 "<a id='span_PM_RatedownloadNAR_1' class='active_grey'>"+
			"<span data-id=\'span_PM_RatedownloadNAR_1\' class=\'glyphicon glyphicon-download-alt activecolorgray\'></span>"+
			"</a>"+
			"</td>";
		
		
		}
		row += "</tr>";			  
		
		$("#tb_PM_Rate tbody").append(row);
		$(".autoComma").autoNumeric('init',{vMin: '0.00', vMax: '999999999.99'});
		
	
		
		// placeholder ของไฟล์ที่เลือกมา
		var layout_name = $("#layout_NAR1").val();
		var layout_name2 = $("#layout_NAR2").val();
		//var base_code = $("#tb_Choose_primary_insurance_modal input[type='radio']:checked").parent().parent().find('td:nth-child(2) label').text();
		var base_code = obj_base.cov_code;
		var product_code_main = $("#pass_Insurance_product_cl").val();
		var layout = layout_name+""+base_code+"_"+product_code_main;
		var layout2 = layout_name2+""+base_code+"_"+product_code_main;
		var placeholder_text = layout+".txt" + " หรือ " + layout2+".txt";
		// NAR
		$("#fileuploads_NARText1_CL").attr("placeholder",placeholder_text);
		var uploadfile2 = "selectFileRate_CL(2,'fileuploads_NAR1_CL','"+layout+"','"+layout2+"','','span_PM_RateopenNAR_1','span_PM_RatedownloadNAR_1')";
		$("#fileuploads_NAR1_CL").attr("onchange",uploadfile2);
		
	}
	
	/*Age Type*/
	var obj_age = response.Tab_cal_insurance_premiums[0];
	var obj_age_text = obj_age.age_Band
	/*if(obj_age.age_Band){
		$("#lb_age_specific_CL option[value="+obj_age.age_Band+"]").attr("selected",true)
	}else{
		$("#lb_age_specific_CL option[value='']").attr("selected",true)
	}*/
	
	//ดึงข้อมูล base plan ที่ get case มาหาข้อมูลลง
	if(response.Tab_Basic_Information[0].basePlan[0]){
		var data_json = {
				"method": "getCaseBasePlan",
				"bCode": $("#tb_PM_Rate tbody>tr").find('td:nth-child(1) label').text()
		}
		$.ajax({
			url: 'ProductCL_GetData_Servlet',
			type: "POST",
			data: data_json,
			async: false,
			success: function (response) {
				
				//Max Fix Benefit
				showcase_benefit_CL(response,"B",$("#tb_PM_Rate tbody>tr").find('td:nth-child(1) label').text(),$("#pass_Insurance_product_cl").val());
				getdata_benefit_CL(response,"B",$("#tb_PM_Rate tbody>tr").find('td:nth-child(1) label').text(),$("#pass_Insurance_product_cl").val());
				
				
				//เปิดปุ่มเพศให้กด
				var sex = response.Tab_Basic_Information[0].sex;
				if(sex == "EITHER"){
					$("#chk_sex_BP1").prop("disabled",false);
					$("#chk_sex_BP2").prop("disabled",false);
				}else if(sex == "MALE"){
					//$("#chk_sex_BP1").prop("disabled",false);
				}else if(sex == "FEMALE"){
					//$("#chk_sex_BP2").prop("disabled",false);
				}
				
				//เช็คว่า basePlan ที่เลือกมา ได้เลือก PM Rate มารึเปล
				var chk_pmRate  = response.Tab_cal_insurance_premiums[0].table_insurance_premium.length
				if(chk_pmRate == 0){
					$("#bt_uploadfilePM_Rate1_1").attr("disabled",true)
				}else{
					$("#bt_uploadfilePM_Rate1_1").attr("disabled",false)
				}
				//ดึงข้อมูล base plan ที่ มาลง pm rate
				var row = "";
				for(i in response.Tab_cal_insurance_premiums[0].table_insurance_premium){
					var obj = response.Tab_cal_insurance_premiums[0].table_insurance_premium[i];
					row = "<tr>"+
							"<td class='text-center'>" +
								"<input type='radio' name='select_fileOriginal' value='"+obj.fileID+"'/>" +
								"<input type='hidden' id='hd_rateCatId"+i+"' value='"+obj.rate_cat_id+"'/>"+
								"<input type='hidden' id='hd_fileId"+i+"' value='"+obj.fileID+"'/>"+
								"<input type='hidden' id='hd_fileLayout"+i+"' value='"+obj.layout+"'/>"+
							"</td>"+
							"<td class='text-center'><span data-id='' class='glyphicon glyphicon-eye-open activecolorgray'></span></td>"+
							"<td class='text-left'><label>"+obj.file+"</label></td>"+
						"</tr>"
						$("#tb_input_modal_pmRate tbody").append(row);
				}
				
				//mode
				for(i in response.Tab_Basic_Information[0].mode){
					$("#validate_input5_cl").hide();
					var obj = response.Tab_Basic_Information[0].mode[i].value;
					$("#tbl_PD_Mode_CL tbody>tr").each(function(){
						if( obj == $(this).find('td:nth-child(1) input').val()){
							$(this).find('td:nth-child(1) input').prop("checked",true)
						}
					});
					$("#tbl_modeTerms tbody>tr").each(function(){
						if( obj == $(this).find('td:nth-child(1) input').val()){
							$(this).find('td:nth-child(1) input').prop("checked",true)
							$(this).find('td:nth-child(1) input').attr("disabled",false)
						}
					});
				}
				
				//ระยะเวลาเอาประกันภัย
				var row_tbInsurance_period = "";
				if(response.Tab_Basic_Information[0].insurance_period[0]){
					if( response.Tab_Basic_Information[0].insurance_period[0].from_unit == "NONE"){
						var age_coverage = response.Tab_Basic_Information[0].insurance_period[0].to;
						var type_coverage = response.Tab_Basic_Information[0].insurance_period[0].to_unit;
						var from_age = Number(age_coverage) - Number(response.Tab_Basic_Information[0].age_To);
						var to_age = Number(age_coverage) - Number(response.Tab_Basic_Information[0].age_Start);
						
						row_tbInsurance_period	= "<tr>"+
									 "<td width='3%' class='text-center verticalCenter borderBlack'></td>"+
									 "<td width='22.5%' class='text-center verticalCenter fontcolortable1 borderBlack'>"+
										"<label>"+from_age+"</label>"+
									 "</td>"+
									 "<td width='22.5%' class='text-center verticalCenter fontcolortable1 borderBlack'>"+
											"<label>"+change_type(type_coverage)+"</label>"+
									 "</td>"+
									 "<td width='22.5%' class='text-center verticalCenter fontcolortable1 borderBlack'>"+
											"<label>"+to_age+"</label>"+
									 "</td>"+
									 "<td width='22.5%' class='text-center verticalCenter fontcolortable1 borderBlack'>"+
											"<label>"+change_type(type_coverage)+"</label>"+
									 "</td>"+ 
								"</tr>"
						$("#tb_BasicInformation1 tbody").append(row_tbInsurance_period)
					}else{
						for(i in response.Tab_Basic_Information[0].insurance_period){
							var obj = response.Tab_Basic_Information[0].insurance_period[i];
								row_tbInsurance_period	= "<tr>"+
										 "<td width='3%' class='text-center verticalCenter borderBlack'></td>"+
										 "<td width='22.5%' class='text-center verticalCenter fontcolortable1 borderBlack'>"+
											"<label>"+obj.from+"</label>"+
										 "</td>"+
										 "<td width='22.5%' class='text-center verticalCenter fontcolortable1 borderBlack'>"+
												"<label>"+change_type(obj.from_unit)+"</label>"+
										 "</td>"+
										 "<td width='22.5%' class='text-center verticalCenter fontcolortable1 borderBlack'>"+
												"<label>"+obj.to+"</label>"+
										 "</td>"+
										 "<td width='22.5%' class='text-center verticalCenter fontcolortable1 borderBlack'>"+
												"<label>"+change_type(obj.to_unit)+"</label>"+
										 "</td>"+ 
									"</tr>"
							$("#tb_BasicInformation1 tbody").append(row_tbInsurance_period)
						}
					}
				}
				
				//ทุนคุ้มครองที่ลดลง SA
				if(response.Tab_cal_insurance_premiums[0].table_capital_decrease[0]){
					$("#inputSA_CL").val(response.Tab_cal_insurance_premiums[0].table_capital_decrease[0].file);
					$("#see_inputSA_CL").attr("onclick", "openFileTextProduct_CL('"+response.Tab_cal_insurance_premiums[0].table_capital_decrease[0].file+"', '"+response.Tab_cal_insurance_premiums[0].table_capital_decrease[0].ref+"',31,'tb_inputSA_CL_Rate', 'modal_inputSA_CL_Rate')");
					
					/*$("#tb_Sperately_Pay tbody>tr").each(function(){
						$(this).find('td:nth-child(1) input').attr("disabled",false);
					});*/
				}
				
				//ตารางแบ่งจ่ายได้
				//$("#chk_sperately_pay").attr("disabled",true)
				//$("#tb_Sperately_Pay input[type='checkbox']*").attr("disabled",true)
			//	if(response.Tab_Basic_Information[0].pay_separately_checkbox == true){
					//$("#chk_sperately_pay").attr("disabled",false)
					//$("#chk_sperately_pay").prop("checked",true);
					//$("#tb_Sperately_Pay input[type='checkbox']*").attr("disabled",false)
					//console.log("XX",)
			//	}
				
				for(i in response.Tab_Basic_Information[0].pay_separately){
					var period = response.Tab_Basic_Information[0].pay_separately[i];
					$("#tb_Sperately_Pay tbody>tr").each(function(){
						if( period.period == $(this).find('td:nth-child(1) input').val()){
							//$(this).find('td:nth-child(1) input').attr("disabled",false)
							$(this).find('td:nth-child(1) input').addClass("base")
						}
					})
				}
				
				//ดึงค่า rate cat ตาราง basePlanลงใน hidden value 
				if(response.Tab_cal_insurance_premiums[0].table_insurance_premium){
					var obj = response.Tab_cal_insurance_premiums[0].table_insurance_premium[i];
					if(obj){
						if(obj.type == ""){
							$("#rate_cat_tbBase").val(obj.pass);
						} 
					}
				}

				// tab คำนวณเบีย lookup - Age Type
				$("#lb_age_specific_CL option").remove();
				if(response.Tab_cal_insurance_premiums[0].age_type){
					for(i in response.Tab_cal_insurance_premiums[0].age_type){
						var obj = response.Tab_cal_insurance_premiums[0].age_type[i];
						if( obj.pass == "" && obj.text == ""){
							sl_age = "<option value=''>Age Specific</option>";
						}else{
							sl_age = "<option value='"+obj.pass+"'>"+obj.text+"</option>";
						}
						$("#lb_age_specific_CL").append(sl_age);
						
					}
				}
				if(obj_age_text != ""){
					$("#lb_age_specific_CL option[value="+obj_age_text+"]").attr("selected",true)
				}else{
					$("#lb_age_specific_CL option[value='']").attr("selected",true)
				}
				
				// tab ข้อกำนหด - คำนวณเบี้ย
				if(response.Tab_Basic_Information[0].cal_Age){
					for(i in response.Tab_Basic_Information[0].cal_Age){
						var obj = response.Tab_Basic_Information[0].cal_Age[i];
						$("#tbl_formulaTerms tbody>tr").each(function(){
							if( obj.value == $(this).find('td:nth-child(1) input[type="radio"]').val()){
								$(this).find('input[type="radio"]').prop("disabled",false);
							}
						});
					}
				}
				
				/*tab ข้อกำหนด default ระยะเวลาเอาประกันภัย*/
				var obj_age = response.Tab_Basic_Information[0].insurance_period[0];
				$("#start_period_insure_cl").val(obj_age.from)
				$("#start_period_insure_unit_cl option[value="+obj_age.from_unit+"]").attr("selected",true)
				$("#end_period_insure_cl").val(obj_age.to)
				$("#end_period_insure_unit_cl option[value="+obj_age.to_unit+"]").attr("selected",true)
				$("#max_period_insure_cl").val(obj_age.to)
				
				//การใช้สิทธิตามกรมธรรม์ - เวนคนกรมธรรม์
				$("#ch_change_condition8").prop("checked",false);
				if( response.Tab_exercise_rights_insurance[0].surrender_check ){
					$("#ch_change_condition8").prop("checked",true);
				}else{
					$("#ch_change_condition8").prop("checked",false);
				}
				
				// tab ข้อกำหนด - สร้าง tab policy
				var cov_code = response.Tab_Basic_Information[0].passInsurance;
				/*if (type == "Clone") {
					cov_code = prd_code_Clone;
				}else {
					 cov_code = response.Tab_Basic_Information[0].passInsurance;
				}*/
				var row_policy = "";
				row_policy = " <li data-id='"+$("#pass_Insurance_product_cl").val()+"'>" +
								"<a data-toggle='tab' href='#policy_in_"+cov_code+"' class='purple'>"+cov_code+"</a>" +
							"</li>"
				$("#tab_policy_panel").prepend(row_policy)
				//getLookup_policyWording_data(cov_code,response);
				
				/*เพิ่ม row ของ Tab-การใช้สิทธิ์ตามกรมธรรม์ || ตาราง-การเวนคืน กธ.*/
				var sl_tab2_cal = $("#hide_sl_cal").val();
				var cov_code_policyValue = cov_code;
				var	prd_code_policyValue = $("#pass_Insurance_product_cl").val();

				/*if (type == "Clone") {
					prd_code_policyValue = prd_code_Clone;

				}else {
					prd_code_policyValue = $("#pass_Insurance_product_cl").val();
				}*/
				
				var row5 = "";
				//for(i in response.Tab_table_policy_value[0].table_policy_value){
					//var obj_policyVal = response.Tab_table_policy_value[0].table_policy_value[i]
					//if(obj_policyVal.pass == 6){
						/*if(i > 0){
							cov_code_policyValue = "";
						}*/
						var type_cov = cat_code_base[i]
						if(type_cov == null || cov_code_policyValue == ""){
							type_cov = "";
						}
						row5 += 	"<tr id=\"tb_policyholder_"+i+"\" data-key='"+prd_code_policyValue+"'>"+
									"<td width=\"20%\" class=\"text-center verticalCenter fontcolortable1 borderBlack\">"+
										"<input type='hidden' id='prd_rider_code' value='"+prd_code_policyValue+"'>"+
										"<input type='hidden' id='cov_code_policyValue' value='"+cov_code+"'/>"+
										"<label>"+cov_code+"</label>"+
									"</td>"+
									"<td width=\"10%\" class=\"text-center verticalCenter fontcolortable1 borderBlack\">"+
										"<label class='font-term-purple font-bold'>"+type_cov+"</label>"+					
									"</td>"+	
									"<td width=\"25%\" class=\"text-center verticalCenter borderBlack\">"+
										"<label class='font-term-purple font-bold'></label>"+					
									"</td>"+
									"<td width=\"25%\" class=\"text-center verticalCenter borderBlack\">"+
										"<input type='hidden' id='rate_cat_id_tb_useRight'/>"+
										"<input type='hidden' id='rate_layout_id_tb_useRight'/>"+
										"<input type='hidden' id='file_id_tb_useRight'/>"+
										"<label class='font-term-purple font-bold'></label>"+					
									"</td>"+	
									"<td width=\"20%\"class=\"text-center verticalCenter borderBlack\">"+
									"<select class=\"form-control\" onchange='cover_fomula(this)' disabled><option value='NONE'>None</option>"+sl_tab2_cal+"</select></td>"+
								"</tr>";		
					//}
				//}
				if($("#tb_policyholder tbody>tr").length == 0 ){
					$("#tb_policyholder tbody").append(row5);
				}else{
					$(row5).insertBefore("#tb_policyholder tbody>tr:first");
				}
				
				//get_tb_ageRange(1)
			}
		
		});
		
	}
	
	// ตาราง rider หา type ของมันก่อน เพื่อนำไปหยอดลงในตาราง rider
	var prd_code_rider = [];
	var cov_code_rider = [];
	var cov_cat_id_rider = [];
	var cat_code_rider = [];
	for(i in response.Tab_Basic_Information[0].type_coverage){
		var obj = response.Tab_Basic_Information[0].type_coverage[i];
			for(ii in response.Tab_Basic_Information[0].type_coverage[i].type){
				var obj_type = response.Tab_Basic_Information[0].type_coverage[i].type[ii];
				if(ii == 0){
					prd_code_rider.push(obj_type.prd_code);
				}else if(ii == 1){
					cov_code_rider.push(obj_type.cov_code);
				}else if(ii == 2){
					cov_cat_id_rider.push(obj_type.cov_cat_id);
				}else if(ii == 3){
					cat_code_rider.push(obj_type.cat_code);
				}
			}
	}
	
	// ตาราง rider
	var rCode = [];
	var row = ""
	var num = 1;
	var rowChild = 1;
	var rate_cat_id_NAR = $("#rate_cat_NAR").val();
	var layout1 = $("#layout_NAR1").val();
	var layout2 = $("#layout_NAR2").val();
	var type_rider = "";
	for(i in response.Tab_Basic_Information[0].rider){
		var obj_rider = response.Tab_Basic_Information[0].rider[i];
		var obj_rider_pm = response.Tab_Basic_Information[0].rider[i].pm_rate[0];
		var obj_pmChild = response.Tab_Basic_Information[0].rider[i].pm_rate[1];
		var obj_rider_nar = response.Tab_Basic_Information[0].rider[i].nar[0];
		
		
		num = Number(num) + Number(i);
		//var obj_age_type = response.Tab_Basic_Information[0].type_coverage[num];
		obj = {};
		obj["code"] = obj_rider.cov_code;
		rCode.push(obj)

		var numberImgOK = Number(i) + Number(1);
		var newID = "imgOK_"+numberImgOK;
		var addrowChild = 'addrowChild("'+numberImgOK+'","'+obj_rider.nameTH+'","'+obj_rider.type_coverage+'",this);';
		var changeFileModal = 'modalGet_selectFile("'+obj_rider.cov_code+'","fileuploads_PMRate1_CL","ip_fileuploads_CL_Additional_contract_Show_'+numberImgOK+'","span_Additional_contractopen_'+numberImgOK+'","validate_Additional_CL_'+numberImgOK+'_CL", "span_Additional_contractdownload_'+numberImgOK+'")';
		if(obj_rider_pm){
			var getShowFileRiderRMRate = 'openFileTextProduct_CL("'+obj_rider_pm.filename+'", "'+obj_rider_pm.ref+'", 41,"tb_input_fileSee_modal_pmRate","modal_input_fileSee_PMRate")';
			var getDownloadFileRiderRMRate = 'openFile_target("'+obj_rider_pm.filename+'","'+obj_rider_pm.ref+'","txt_download")';
			
		}
		if(obj_pmChild){
			var getShowFileRiderRMRate_child = 'openFileTextProduct_CL("'+obj_pmChild.filename+'", "'+obj_pmChild.ref+'", 41,"tb_input_fileSee_modal_pmRate","modal_input_fileSee_PMRate")';
			var getDownloadFileRiderRMRate_child = 'openFile_target("'+obj_pmChild.filename+'","'+obj_pmChild.ref+'","txt_download")';
			
		}
		if(obj_rider_nar){
			var prd_code = $("#pass_Insurance_product_cl").val();
//			var prd_code = response.Tab_Basic_Information[0].rider[i].prd_code;
			var cov_code = response.Tab_Basic_Information[0].rider[i].cov_code;
			
			var file_name = obj_rider_nar.filename;
			var file_pattern = file_name.replace(cov_code, "{P Code}");
			file_pattern = file_pattern.replace("_"+prd_code, "");
		
			
			if(file_pattern == "AmtRe_CL 18 1K_{P Code}.txt"){
				
				var getShowFileRiderNAR = 'openFileTextProduct_CL("'+obj_rider_nar.filename+'", "'+obj_rider_nar.ref+'", 69,"tb_input_fileSee_modal_NAR","modal_input_fileSee_NAR")';
				
			}else if(file_pattern == "AmtRe_ASA_CL 14 1K_{P Code}.txt"){
				
				var getShowFileRiderNAR = 'openFileTextProduct_CL("'+obj_rider_nar.filename+'", "'+obj_rider_nar.ref+'", 70,"tb_input_fileSee_modal_NAR_ASA","modal_input_fileSee_NAR_ASA")';
				
			}
			
			var getDownloadFileRiderNARRate = 'openFile_target("'+obj_rider_nar.filename+'","'+obj_rider_nar.ref+'","txt_download")';
			
		}
		
		for(ii=0 ; ii<cov_code_rider.length ; ii++){
			if(obj_rider.cov_code == cov_code_rider[ii]){
				type_rider = cov_cat_id_rider[ii];
				type_rider_name = cat_code_rider[ii];
			}
		}
		 row = "<tr id=\"tr_Additional_contract_"+numberImgOK+"\" data-id=\""+numberImgOK+"\" data-level=\"1\">"+
			"<td class=\'text-center verticalCenter borderBlack\'  class=\'text-center verticalCenter borderBlack\' id=\""+newID+"\" onclick=\'imgCheckbox(id)\'>"+
				"<i class=\'glyphicon glyphicon-edit\'></i></td>"+
			"<td class=\"text-left verticalCenter	borderBlack\">"+
				"<label style=\"text-decoration: underline; color: blue;\">"+obj_rider.cov_code+"</label>"+
				"<input type='hidden' id='prd_code_rider_"+numberImgOK+"' value='"+obj_rider.prd_code+"'>"+
			"</td>"+
			"<td class=\"text-center verticalCenter fontcolortable2 borderBlack font-bold\">"+obj_rider.type_coverage+"" +
				"<input type='hidden' id='cov_cat_id_rider"+numberImgOK+"' value='"+type_rider+"'>" +
			"</td>"+
			"<td class=\"text-left verticalCenter fontcolortable2 borderBlack\">"+
				"<label>"+obj_rider.nameTH+"</label>"+
			"</td>"+
			"<td class=\"text-center verticalCenter borderBlack\">"
					if(obj_pmChild && obj_pmChild.rate_cat_id == 16){
							row += 	"<i class=\"glyphicon glyphicon-plus icon-blue-circle disabledAll\"  data-id=\'"+numberImgOK+"\' data-topic=\'"+obj_rider.cov_code+"\' data-type=\'1\' id=\"addrow1_"+numberImgOK+"\" onclick='"+addrowChild+"'></i>"	
					}else{
							row += 	"<i class=\"glyphicon glyphicon-plus icon-blue-circle\"  data-id=\'"+numberImgOK+"\' data-topic=\'"+obj_rider.cov_code+"\' data-type=\'1\' id=\"addrow1_"+numberImgOK+"\" onclick='"+addrowChild+"'></i>"
					}
					
		 row += "</td>";
		 
		 	if(obj_rider_pm){
		 		row += "<td class=\"verticalCenter borderBlack\">"+
							"<div class=\"input-group col-xs-12\">"+
							"<input type='hidden' id='fileId_rider_PM"+numberImgOK+"' value='"+obj_rider_pm.fileID+"'/>"+
							"<input type='hidden' id='rate_cat_id_rider_PM"+numberImgOK+"' value='"+obj_rider_pm.rate_cat_id+"'/>"+
							"<input type='hidden' id='rate_layout_id_rider_PM"+numberImgOK+"' value='"+obj_rider_pm.rate_layout_id+"'/>"+
							"<input type=\"file\" accept=\".txt\" id=\"ip_fileuploads_Additional_contract"+numberImgOK+"\" style=\"display: none\">"+
							"<input type=\"text\" class=\"form-control clear_val\" id=\"ip_fileuploads_CL_Additional_contract_Show_"+numberImgOK+"\" value='"+obj_rider_pm.filename+"' readonly> " +
							"<span class=\"input-group-btn\"><button class=\"btn btn-default btn-primary\" type=\"button\" id=\"bt_uploadfileAdditional_contract"+numberImgOK+"\"  onclick='"+changeFileModal+"' data-toggle=\"modal\" data-target=\"#modal_input_PMRate\">" +
									"<font id='validate_Additional_CL_"+numberImgOK+"_CL' class='require_file' style='color: red;' hidden>*</font>...</button>"+
							"</span>"+
						"</div>"+
					"</td>"+
					"<td class='text-center verticalCenter borderBlack'>"+
					"<a id='span_Additional_contractopen_"+numberImgOK+"' class='active_grey'>"+
						"<span class='glyphicon glyphicon-eye-open activecolorblue' onclick='"+getShowFileRiderRMRate+"'></span>"+
					"</a>"+
				"</td>"+
				 "<td class='text-center verticalCenter borderBlack'>"+
				 "<a id='span_Additional_contractdownload_"+numberImgOK+"' class='active_grey'>"+
					"<span data-id='span_Additional_contractdownload_"+numberImgOK+"' class='glyphicon glyphicon-download-alt activecolorblue' onclick='"+getDownloadFileRiderRMRate+"'></span>"+
					"</a>"+
					"</td>";
				
				
		 	}else{
		 		row += "<td class=\"verticalCenter borderBlack\">"+
							"<div class=\"input-group col-xs-12\">"+
							"<input type='hidden' id='fileId_rider_PM"+numberImgOK+"' value=''/>"+
							"<input type='hidden' id='rate_cat_id_rider_PM"+numberImgOK+"' value=''/>"+
							"<input type='hidden' id='rate_layout_id_rider_PM"+numberImgOK+"' value=''/>"+
							"<input type=\"file\" accept=\".txt\" id=\"ip_fileuploads_Additional_contract"+numberImgOK+"\" style=\"display: none\">"+
							"<input type=\"text\" class=\"form-control clear_val\" id=\"ip_fileuploads_CL_Additional_contract_Show_"+numberImgOK+"\" readonly> " +
							"<span class=\"input-group-btn\"><button class=\"btn btn-default btn-primary\" type=\"button\" id=\"bt_uploadfileAdditional_contract"+numberImgOK+"\"  onclick='"+changeFileModal+"' data-toggle=\"modal\" data-target=\"#modal_input_PMRate\">" +
									/*"<font id='validate_Additional_CL_"+numberImgOK+"_CL' class='require_file' style='color: red;'>*</font>" +*/
									"...</button>"+
							"</span>"+
						"</div>"+
					"</td>"+
					"<td class='text-center verticalCenter borderBlack'>"+
					"<a id='span_Additional_contractopen_"+numberImgOK+"' class='active_grey'>"+
						"<span class='glyphicon glyphicon-eye-open activecolorgray'></span>"+
					"</a>"+
				"</td>"+
				 "<td class='text-center verticalCenter borderBlack'>"+
				 "<a id='span_Additional_contractdownload_"+numberImgOK+"' class='active_grey'>"+
					"<span data-id='span_Additional_contractdownload_"+numberImgOK+"' class='glyphicon glyphicon-download-alt activecolorgray'></span>"+
					"</a>"+
					"</td>";
				
				
		 	}
			row +="<td class=\"text-center verticalCenter borderBlack\">"+
				"<input type='text' id='amount_fix_Additional_contract1_"+numberImgOK+"' class='autoComma form-control text-right' value='"+parseFloat(obj_rider.fix_sa_amt).toFixed(2)+"' data-v-min='0.00' data-v-max='9999999999.00'>"+
			"</td>"+
			"<td class=\"verticalCenter borderBlack\">"+
				"<div class=\"input-group col-xs-12\">"
			if(obj_rider_nar){
				//Benz Clone 29-10-2019
				var file_name = obj_rider_nar.filename;
				if (file_name != "") {
					if (type == "Clone") {
						file_name = obj_rider_nar.filename.replace(prd_code_temp, prd_code_Clone);
					}else {
						 file_name = obj_rider_nar.filename;
					}
				}
				row +=  "<input type='hidden' id='fileId_rider_NAR"+numberImgOK+"' value='"+obj_rider_nar.fileID+"'/>"+
						"<input type='hidden' id='rate_cat_id_rider_NAR"+numberImgOK+"' value='"+obj_rider_nar.rate_cat_id+"'/>"+
						"<input type='hidden' id='rate_layout_id_rider_NAR"+numberImgOK+"' value='"+obj_rider_nar.rate_layout_id+"'/>"+
						"<input type='text' class='form-control clear_val' id='ip_fileuploads_AdditionalNAR_contract_"+numberImgOK+"' value='"+file_name+"' readonly=''>"+ 
						"<label class='input-group-btn'>"+
						"<span id='spanAdditionalNAR_CL_"+numberImgOK+"' class='btn btn-primary' >"+
						"<font id='validate_AdditionalNAR_CL_"+numberImgOK+"' class='require_file' style='color: red;' hidden>*</font><b>...</b>"+
						"<input id='ip_fileuploads_CL_AdditionalNAR_contract_Show_"+numberImgOK+"' type='file' accept='text/plain' style='display: none;'>"+
					"</span>"+
					"</label>"+
					"</div>"+
				"</td>"+
				"<td class=\"text-center verticalCenter borderBlack\">"+
					"<a id='span_Additional_contractopenNAR_"+numberImgOK+"' class='active_grey'>"+
						"<span class='glyphicon glyphicon-eye-open activecolorblue' onclick='"+getShowFileRiderNAR+"'></span>"+
					"</a>"+
				"</td>"+
				"<td class=\"text-center verticalCenter borderBlack\">" +
				"<a id='span_Additional_contractdownloadNAR_"+numberImgOK+"' class='active_grey'>"+
				"<span data-id=\'span_Additional_contractdownload_"+numberImgOK+"\' class=\'glyphicon glyphicon-download-alt activecolorblue\' onclick='"+getDownloadFileRiderNARRate+"'></span>"+
				"</a>"+
				"</td>";
		    
				
			}else{
				row +=  "<input type='hidden' id='fileId_rider_NAR"+numberImgOK+"' value=''/>"+
						"<input type='hidden' id='rate_cat_id_rider_NAR"+numberImgOK+"' value='"+rate_cat_id_NAR+"'/>"+
						"<input type='hidden' id='rate_layout_id_rider_NAR"+numberImgOK+"' value=''/>"+
						"<input type='text' class='form-control clear_val' id='ip_fileuploads_AdditionalNAR_contract_"+numberImgOK+"' readonly=''>"+ 
						"<label class='input-group-btn'>"+
						"<span id='spanAdditionalNAR_CL_"+numberImgOK+"' class='btn btn-primary' >"+
						/*"<font id='validate_AdditionalNAR_CL_"+numberImgOK+"' class='require_file' style='color: red;'>*</font>" +*/
						"<b>...</b>"+
						"<input id='ip_fileuploads_CL_AdditionalNAR_contract_Show_"+numberImgOK+"' type='file' accept='text/plain' style='display: none;'>"+
					"</span>"+
					"</label>"+
					"</div>"+
				"</td>"+
				"<td class=\"text-center verticalCenter borderBlack\">"+
					"<a id='span_Additional_contractopenNAR_"+numberImgOK+"' class='active_grey'>"+
						"<span class='glyphicon glyphicon-eye-open activecolorgray'></span>"+
					"</a>"+
				"</td>"+
				"<td class=\"text-center verticalCenter borderBlack\">" +
				"<a id='span_Additional_contractdownloadNAR_"+numberImgOK+"' class='active_grey'>"+
				"<span data-id=\'span_Additional_contractdownload_"+numberImgOK+"\' class=\'glyphicon glyphicon-download-alt activecolorgray\' ></span>"+
				"</a>"+
				"</td>";
		    
				
			}	
			row += "</tr>";
			$("#tb_Additional_contract tbody").append(row);
			
			/*ลูก*/
			if(obj_pmChild){
				if( obj_pmChild.rate_cat_id == 16){
					//Benz Clone 29-10-2019
					var file_name = obj_pmChild.filename;
					if (file_name != "") {
						if (type == "Clone") {
							file_name = obj_pmChild.filename.replace(prd_code_temp, prd_code_Clone);
						}else {
							 file_name = obj_pmChild.filename;
						}
					}
					var removerowChild = 'removerowChild("tr_Additional_contract_'+numberImgOK+'_'+rowChild+'","'+numberImgOK+'");';
					var changeFileModal2 = 'modalGet_selectFile("'+obj_rider.cov_code+'","fileuploads_PMRate1_CL","ip_fileuploads_CL_Additional_contract_Show_'+numberImgOK+'_'+rowChild+'","span_Additional_contractopen_'+numberImgOK+'_'+rowChild+'","validate_rate'+numberImgOK+'_'+rowChild+'","span_Additional_contractdownload_'+numberImgOK+'_'+rowChild+'")';
					var row2 = "<tr id=\"tr_Additional_contract_"+numberImgOK+"_"+rowChild+"\" data-id=\""+numberImgOK+"\" data-parent=\""+numberImgOK+"\" data-level='2' data-group='"+numberImgOK+"'>"+
									"<td class=\'text-center verticalCenter borderBlack\'  class=\'text-center verticalCenter borderBlack\'></td>"+
									"<td class=\"text-center verticalCenter	borderBlack\">"+
										"<input type='hidden' id='prd_code_rider_"+numberImgOK+"_"+rowChild+"' value='"+obj_rider.prd_code+"'>" +
									"</td>"+
										"<td class=\"text-center verticalCenter fontcolortable2 borderBlack font-bold\">"+obj_rider.type_coverage +
										"<input type='hidden' id='cov_cat_id_rider"+numberImgOK+"_"+rowChild+"' value='"+type_rider+"'>"+
									"</td>"+
									"<td class=\"text-left verticalCenter fontcolortable2 borderBlack\">"+
										"<label>"+obj_rider.nameTH+"</label>"+
									"</td>"+
									"<td class=\"text-center verticalCenter	borderBlack\"><i class='glyphicon glyphicon-minus icon-blue-circle icon_active'  data-id='"+rowChild+"' data-topic='"+rowChild+"' data-type='2' id='removerow_"+rowChild+"' onclick='"+removerowChild+"'></i></td>"+
									"<td class=\"verticalCenter borderBlack\">"+
										"<div class=\"input-group col-xs-12\">"+
											"<input type='hidden' id='fileId_rider_PM"+numberImgOK+"_"+rowChild+"' value='"+obj_pmChild.fileID+"'>"+
											"<input type='hidden' id='rate_cat_id_rider_PM"+numberImgOK+"_"+rowChild+"' value='"+obj_pmChild.rate_cat_id+"'>"+
											"<input type='hidden' id='rate_layout_id_rider_PM"+numberImgOK+"_"+rowChild+"' value='"+obj_pmChild.rate_layout_id+"'>"+
											"<input type=\"file\" accept=\".txt\" id=\"ip_fileuploads_Additional_contract"+numberImgOK+"_"+rowChild+"\" style=\"display: none\">"+
											"<input type=\"text\" class=\"form-control\" id=\"ip_fileuploads_CL_Additional_contract_Show_"+numberImgOK+"_"+rowChild+"\" value='"+file_name+"' readonly> "+
											"<span class=\"input-group-btn\"><button class=\"btn btn-default btn-primary\" type=\"button\" " +
													"onclick ="+changeFileModal2+" id=\"bt_uploadfileAdditional_contract"+numberImgOK+"_"+rowChild+"\" data-toggle=\"modal\" data-target=\"#modal_input_PMRate\"><font id='validate_rate"+numberImgOK+"_"+rowChild+"' style='color: red;' hidden>*</font>...</button>"+
											"</span>"+
										"</div>"+
									"</td>"+
									"<td class='text-center verticalCenter borderBlack'>"+
										"<a id='span_Additional_contractopen_"+numberImgOK+"_"+rowChild+"' class='active_grey'>"+
											"<span class='glyphicon glyphicon-eye-open activecolorblue' onclick='"+getShowFileRiderRMRate_child+"'></span>"+
										"</a>"+
									"</td>"+
									"<td class=\"text-center verticalCenter borderBlack\">" +
									"<a id='span_Additional_contractdownload_"+numberImgOK+"_"+rowChild+"' class='active_grey'>"+
										"<span data-id=\'span_Additional_contractdownload_"+numberImgOK+"_"+rowChild+"\' class=\'glyphicon glyphicon-download-alt activecolorblue\' onclick='"+getDownloadFileRiderRMRate_child+"'></span>"+
										"</a>"+
										"</td>"+
									"<td class=\"text-center verticalCenter borderBlack\"></td>"+
									"<td class=\"verticalCenter borderBlack\"></td>"+
									"<td class='text-center verticalCenter borderBlack'></td>"+
									"<td class='text-center verticalCenter borderBlack'></td>"+
								"</tr>"
								
					$("#tb_Additional_contract tbody").append(row2)			
				}
			}
		// NAR
		var product_code_main = $("#pass_Insurance_product_cl").val();
		var cov_code = obj_rider.cov_code ;
		var layout_name1 = layout1+cov_code+"_"+product_code_main;
		var layout_name2 = layout2+cov_code+"_"+product_code_main;
		var placehoder_text = layout_name1+".txt" + " หรือ " + layout_name2+".txt";
		$("#ip_fileuploads_AdditionalNAR_contract_"+numberImgOK).attr("placeholder",placehoder_text);
		var uploadfile2 = "selectFileRate_CL(22,'ip_fileuploads_CL_AdditionalNAR_contract_Show_"+numberImgOK+"','"+layout_name1+"','"+layout_name2+"','','span_Additional_contractopenNAR_"+numberImgOK+"','span_Additional_contractdownloadNAR_"+numberImgOK+"')";
		$("#ip_fileuploads_CL_AdditionalNAR_contract_Show_"+numberImgOK).attr("onchange",uploadfile2);
	
		// tab ข้อกำหนด - สร้าง tab policy
		var row_policy = "";
		row_policy = " <li data-id='"+obj_rider.prd_code+"'>" +
						"<a data-toggle='tab' href='#policy_in_"+obj_rider.cov_code+"' class='green'>"+obj_rider.cov_code+"</a>" +
					"</li>"
		$("#tab_policy_panel").append(row_policy)
		//getLookup_policyWording_data(obj_rider.cov_code,response)
	
		get_case_rider_lookupUseRight(obj_rider.cov_code,obj_rider.prd_code,type_rider_name);
	}
	
	// ตาราง พิกัดอายุ หา type ของมันก่อน เพื่อนำไปหยอดลงในตาราง พิกัดอายุ
	var prd_code_age = [];
	var cov_code_age = [];
	var cov_cat_id_age = [];
	var cat_code_age = [];
	for(i in response.Tab_Basic_Information[0].type_coverage){
	var obj = response.Tab_Basic_Information[0].type_coverage[i];
		for(ii in response.Tab_Basic_Information[0].type_coverage[i].type){
			var obj_type = response.Tab_Basic_Information[0].type_coverage[i].type[ii];
			if(ii == 0){
				prd_code_age.push(obj_type.prd_code);
			}else if(ii == 1){
				cov_code_age.push(obj_type.cov_code);
			}else if(ii == 2){
				cov_cat_id_age.push(obj_type.cov_cat_id);
			}else if(ii == 3){
				cat_code_age.push(obj_type.cat_code);
			}
		}
	}
	
	//การกำหนดบันทึกสลักหลังและพิกัดอายุ
	if( (response.Tab_Basic_Information[0].age_coordinates + '').length > 0 ){
		$("#div_ageRange_CL").css("display","block");
		var sl_ageCoordinate = $("#sl_unit_age_coordinates").val();
		var cov_base = $("#tb_PM_Rate tbody>tr:first").find('td:nth-child(1) label').text();
		var row_age = "";
		var id = 1;
		var id_new = 0;
		var main_id = 0;
		var child_id = 1;
		var data_parent = "";
		var data_level = "";

		for(i in response.Tab_Basic_Information[0].age_coordinates){
			var obj_age = response.Tab_Basic_Information[0].age_coordinates[i];
			var type_age = "";
			for(ii=0 ; ii<cov_code_age.length ; ii++){
				if(obj_age.cov_code == cov_code_age[ii]){
					type_age = cat_code_age[ii];
				}
			}
		//	Benz Clone 29-10-2019
			var prd_rider_code = "";
				if (type == "Clone") {
					 if (obj_age.prd_rider_code == prd_code_temp) {
						 prd_rider_code = prd_code_Clone;
					 }else{
						 prd_rider_code = obj_age.prd_rider_code;
					 }
				}else {
					 prd_rider_code = obj_age.prd_rider_code;
				}
			
			//Khwan fix endorse
			var type = obj_age.type;
			var font_color = "";
			var cov_main = "";
			if(type == "B"){
				font_color = "font-term-purple";
				cov_main = "";
			}else if(type == "E"){
				font_color = "font-term-yellow";
				cov_main = obj_age.main_rider_code;
			}else{
				font_color = "font-term-green";
				cov_main = "";
			}
			
			if(type == "E"){
				
				$("#tb_ageRange_CL tbody>tr").each(function(){
					var this_id = $(this).attr("data-id");
					var prd_rider_code = $(this).find("td:nth-child(1) #prd_rider_code").val();
					
					if(obj_age.main_rider_code == prd_rider_code){
						main_id = this_id;
					}
				});
				
				var count_child = $("#tb_ageRange_CL tbody>tr[data-parent='"+main_id+"']").length;
				if(count_child > 0){
					child_id = child_id + 1;
				}else{
					child_id = 1;
				}
				
				numrow3 = main_id+"_"+child_id;
				main_id = main_id;
				data_parent = main_id;
				data_level = 2;
				id_new = 1;

			}else{
				numrow3 = id_new + 1;
				main_id = numrow3;
				child_id = 1;
				data_parent = 0;
				data_level = 1;
				id_new = numrow3;
			}
			
			//console.log("cov_code>> "+obj_age.cov_code+" cov_base>> "+cov_base);
			
			//main row
				row_age = "<tr id='tr_ageRange_CV"+numrow3+"' data-id='"+numrow3+"' data-parent='"+data_parent+"' data-level='"+data_level+"' data-type='"+data_level+"'>"+											
				  "<td class='text-left verticalCenter borderBlack'>"
				  if(obj_age.cov_code == cov_base){
					  row_age += "<label class='font-term-purple font-bold'>"+obj_age.cov_code+"</label>"+
					  			"<input type='hidden' id='prd_rider_code' value='"+prd_rider_code+"' >"
				  }else{
					  if(type == "E"){
						  row_age += "<div class='input-group col-xs-12'><input type='hidden' id='main_rider_code' value='"+obj_age.main_rider_code+"'>"+
						  	"<input type='hidden' id='prd_rider_code' value='"+obj_age.prd_rider_code+"'>"+
							"<div id='div_endorse_name"+numrow3+"' class='filename font-term-yellow font-bold'>"+obj_age.cov_code+"</div>"+			
								"<a class='open-AddEndorse' data-toggle='modal' data-parent='"+main_id+"' data-id='"+numrow3+"' data-code=''><button class='btn btn-default btn-primary' type='button' id='btn_endorse_CL"+numrow3+"'>...</button></a>"+ 									
							"</div>"
					  }else{
						  row_age += "<label class='font-term-green font-bold'>"+obj_age.cov_code+"</label>"+
				  			"<input type='hidden' id='prd_rider_code' value='"+prd_rider_code+"' >"  
					  }
				  }
				
				row_age +=  "</td>"+
				  "<td class='text-center verticalCenter fontcolortable2 borderBlack'>" 
				  if(obj_age.cov_code == cov_base){
					  row_age += "<label class='font-term-purple font-bold'>"+type_age+"</label>"
				  }else{
					  row_age += "<label class='font-term-green font-bold'>"+type_age+"</label>"
				  }
				row_age += "</td>"+
				  "<td class='text-center verticalCenter borderBlack'>";
					
					if(type == "E"){
						row_age += "<i class='glyphicon glyphicon-minus icon_active icon-blue-circle' data-id='"+numrow3+"' id='addrow_endorse"+numrow3+"' onclick='delete_rowEndorse(this.id);'></i>";
					}else{
						row_age += "<i class='glyphicon glyphicon-plus icon-blue-circle' data-id='"+numrow3+"' id='addrow_endorse"+numrow3+"' onclick=\"addRowEndorse("+numrow3+", '"+obj_age.cov_code+"', '"+obj_age.prd_rider_code+"');\"></i>";
					}
				  
					
				row_age += "</td>"+											
				  "<td class='text-center verticalCenter borderBlack'>"+
				  	"<input type='hidden' id='hd_min_issue_age"+numrow3+"' value='"+obj_age.min_issue_age+"'>"
				  	if(obj_age.cov_code == cov_base){
						  row_age += "<input type='number' class='form-control margin-padding0 text-center width40px' value='"+obj_age.min_issue_age+"' min='1' onchange=\"numberKey_min(this,'hd_min_issue_age"+numrow3+"') , startIssue_term(this)\">"
					  }else{
						  row_age += "<input type='number' class='form-control margin-padding0 text-center width40px' value='"+obj_age.min_issue_age+"' min='1' onchange=\"numberKey_min(this,'hd_min_issue_age"+numrow3+"');\" >"
					  }
				  	
					row_age += "</td>"+
				  "<td class='text-center verticalCenter borderBlack'>"+	
				  	"<input type='hidden' id='start_insure_ageUnit"+numrow3+"' >"+
					"<select class='form-control width100px' id='ageRange_from_unit"+numrow3+"_cl' onchange='change_typeTerm1(this)'>"+
						"<option value='NONE'>None</option>"+sl_ageCoordinate+
					"</select>"+
				  "</td>"+
				  "<td class='text-center verticalCenter borderBlack'>"+
				  	"<input type='hidden' id='hd_max_issue_age"+numrow3+"' value='"+obj_age.max_issue_age+"'>"
				  	if(obj_age.cov_code == cov_base){
						  row_age += "<input type='number' class='form-control margin-padding0 text-center width40px' value='"+obj_age.max_issue_age+"' min='1' onchange=\"numberKey_max(this,'hd_max_issue_age"+numrow3+"') , endIssue_term(this)\">"
					  }else{
						  row_age += "<input type='number' class='form-control margin-padding0 text-center width40px' value='"+obj_age.max_issue_age+"' min='1' onchange=\"numberKey_max(this,'hd_max_issue_age"+numrow3+"');\">"
					  }
				  	
					row_age += "</td>"+
				  "<td class='text-center verticalCenter borderBlack'>"+	
				  	"<input type='hidden' id='end_insure_ageUnit"+numrow3+"' >"+
					"<select class='form-control width100px' id='ageRange_to_unit"+numrow3+"_cl' onchange='change_typeTerm2(this)'>"+
						"<option value='NONE'>None</option>"+sl_ageCoordinate+
					"</select>"+
				  "</td>"+
				  "<td class='text-center verticalCenter borderBlack'>"+
				  	"<input type='hidden' id='hd_max_insure_age"+numrow3+"' value='"+obj_age.max_insure_age+"'>"
				  	 if(obj_age.cov_code == cov_base){
						  row_age += "<input type='number' class='form-control margin-padding0 text-center width40px' value='"+obj_age.max_insure_age+"' min='1' onchange=\"numberKey_maximum(this,'hd_max_insure_age"+numrow3+"') , maxInsure_term(this)\">"
					  }else{
						  row_age += "<input type='number' class='form-control margin-padding0 text-center width40px' value='"+obj_age.max_insure_age+"' min='1' onchange=\"numberKey_maximum(this,'hd_max_insure_age"+numrow3+"');\">"
					  }
					
					row_age += "</td>"+
				  "<td class='text-center verticalCenter borderBlack'>"+	
				  	"<input type='hidden' id='max_insure_ageUnit"+numrow3+"' >"+
					"<select class='form-control width100px' id='ageRange_max_unit"+numrow3+"_cl' onchange='change_typeTerm3(this)'>"+
						"<option value='NONE'>None</option>"+sl_ageCoordinate+
					"</select>"+
				  "</td>"+																			
				"</tr>";
			
		if(type == "E"){
			var main_code = obj_age.main_rider_code;

			$("#tb_ageRange_CL tbody>tr").each(function(){
				var this_id = $(this).attr("data-id");
				var prd_rider_code = $(this).find("td:nth-child(1) #prd_rider_code").val();
				var cov_code = $(this).find("td:nth-child(1) label").text();
				var numrow_child = $("#tb_ageRange_CL tbody>tr[data-parent='"+this_id+"']").length;
				
				if(main_code == prd_rider_code){
					if(numrow_child > 0){
						$(row_age).insertAfter($("#tb_ageRange_CL tbody>tr[data-parent='"+this_id+"']:last"));
					}else{
						$(row_age).insertAfter($("#tb_ageRange_CL #tr_ageRange_CV"+this_id).closest('tr'));
					}
					
					$("#tb_ageRange_CL #tr_ageRange_CV"+numrow3).find("td:nth-child(1) a").attr("data-code", cov_code);
				}
			});
			
		}else{
			$("#tb_ageRange_CL tbody").append(row_age);
		}
		
		$("#tb_ageRange_CL #tr_ageRange_CV"+numrow3).find('td:nth-child(5) input[type="hidden"]').val(obj_age.min_issue_age_unit)
		$("#tb_ageRange_CL #tr_ageRange_CV"+numrow3).find('td:nth-child(5) option[value='+obj_age.min_issue_age_unit+']').attr('selected', true);
		$("#tb_ageRange_CL #tr_ageRange_CV"+numrow3).find('td:nth-child(7) input[type="hidden"]').val(obj_age.max_issue_age_unit)
		$("#tb_ageRange_CL #tr_ageRange_CV"+numrow3).find('td:nth-child(7) option[value='+obj_age.max_issue_age_unit+']').attr('selected', true);
		$("#tb_ageRange_CL #tr_ageRange_CV"+numrow3).find('td:nth-child(9) option[value='+obj_age.max_insure_age_unit+']').attr('selected', true);
		
		/*เพิ่ม row ของ Tab-คำนวณเบี้ยประกัน || Lookup ตาราง-การคำนวณจำนวนเงินเอาประกันภัย*/
		var dropdownUnit = $("#hide_fixCovUnit").val();
		var dropdownOF1 = $("#hide_fixCovFactor").val();
		var dropdownOF2 = $("#hide_minCovFactor").val();

		var row_cal = "<tr id=\"tr_Calculate_insurance_"+numrow3+"\" data-id=\""+numrow3+"\" data-group='"+numrow3+"' data-parent=\"0\" data-level=\"1\" data-key='"+prd_rider_code+"' >"+
						"<td width=\"14%\" class=\"text-center verticalCenter fontcolortable1 borderBlack\">"
						 if(obj_age.cov_code == cov_base){
							 row_cal += "<label class='font-term-purple font-bold'>"+obj_age.cov_code+"</label>"+
							 				"<input type='hidden' id='prd_rider_code' value="+prd_rider_code+">"+
							 				"<input type='hidden' id='serie_no' value=''>"+
							 				"<input type='hidden' id='seq' value=''>"+
							 				"<input type='hidden' id='cov_type' value='B'>"
						 }else{
							 row_cal += "<label class='font-term-green font-bold'>"+obj_age.cov_code+"</label>"+
							 				"<input type='hidden' id='prd_rider_code' value="+prd_rider_code+">"+
							 				"<input type='hidden' id='serie_no' value=''>"+
							 				"<input type='hidden' id='seq' value=''>"+
							 				"<input type='hidden' id='cov_type' value='R'>"
						 }
						row_cal += "</td>"
						if(obj_age.cov_code == cov_base){
							row_cal +="<td width=\"7%\"class=\"text-center verticalCenter fontcolortable1 borderBlack\"><label class='font-term-purple font-bold'>"+type_age+"</label></td>"
						}else{
							row_cal += "<td width=\"7%\"class=\"text-center verticalCenter fontcolortable1 borderBlack\"><label class='font-term-green font-bold'>"+type_age+"</label></td>"
						}
						row_cal +=
						"<td width=\"3%\" class=\"text-center verticalCenter borderBlack\">"+
							"<i class=\"glyphicon glyphicon-plus icon-blue-circle\"  data-id=\'"+numrow3+"\' data-topic=\'"+numrow3+"\' data-type=\'"+numrow3+"\' id=\"addrowMenu3_"+numrow3+"\" onclick=\"addrowMenu3("+numrow3+");\"></i>"+
						"</td>"+	
						"<td width=\"7%\"class=\"text-right verticalCenter borderBlack\">"+
						"<input type='text' class='autoComma form-control text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999.99' onblur='validateMin_tbCal(this)'>"+
						"</td>"+
						"<td width=\"7%\" class=\"text-right verticalCenter borderBlack\">"+
						"<input type='text' class='autoComma form-control margin-padding0 text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999.99' onblur='validateMax_tbCal(this);'>"+
						"</td>"+
						"<td width=\"10%\"class=\"text-right verticalCenter borderBlack\">"+
						"<input type='text' class='autoComma form-control margin-padding0 text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999999999.99'>"+
						"</td>"+
						"<td width=\"14%\" class=\"text-right verticalCenter borderBlack\">"+
							"<select class=\"form-control\" onchange='change_unit_CL(this,6)'><option value='NONE'>None</option>"+dropdownUnit+"</select></td>"+
						"<td width=\"14%\" class=\"text-right verticalCenter borderBlack\">"+
							"<select class=\"form-control\"><option value='NONE'>None</option>"+dropdownOF1+"</select></td>"+
						"<td width=\"10%\" class=\"text-right verticalCenter borderBlack\">"+
						"<input type='text' class='autoComma form-control margin-padding0 text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999999999.99'>"+
						"<td width=\"14%\" class=\"text-right verticalCenter borderBlack\">"+
							"<select class=\"form-control\"><option value='NONE'>None</option>"+dropdownOF2+"</select></td>"+
					"</tr>";
			
			//Khwan Fix Endorse to other tabs 21/11/2019			
			if(type != "E"){
				$("#tb_Calculate_insurance tbody").append(row_cal);
			}else{
				var main_cov = "";
				$("#tb_ageRange_CL tbody>tr").each(function(){
					//var this_cov = $(this).find("td:nth-child(1) label").text();
					var prd_rider_code = $(this).find("td:nth-child(1) #prd_rider_code").val();
					
					if(obj_age.main_rider_code == prd_rider_code){
						main_cov = $(this).find("td:nth-child(1) #prd_rider_code").val();
					}
				});
				
				//การคำนวณเบี้ยประกัน
				getData_TabCalPrem_CL(obj_age.cov_code, type, type_age, prd_rider_code, response, main_cov)
				//การใช้สิทธิ์ตามกรมธรรม์
				getData_TabUseRight_CL(obj_age.cov_code, type, type_age, prd_rider_code, response, main_cov);
				
				//UNW policy wording
				var row = "";
				row = " <li data-id='"+prd_rider_code+"' data-main='"+main_cov+"'>" +
							"<a data-toggle='tab' href='#policy_in_"+obj_age.cov_code+"' class='yellow'>"+obj_age.cov_code+"</a>" +
						"</li>"
							
				var row_main = $("#tab_policy_panel li[data-main='"+main_cov+"']").length;
				if(row_main > 0){
					$(row).insertAfter("#tab_policy_panel li[data-main='"+main_cov+"']:last");
				}else{
					$(row).insertAfter("#tab_policy_panel li[data-id='"+main_cov+"']");
				}
				
			}
			
			$(".autoComma").autoNumeric('init',{vMin: '0.00', vMax: '999999999.99'});
			
			/*เพิ่ม row ของ Tab-คำนวณเบี้ยประกัน || Lookup ตาราง-การคำนวณเบี้ยประกันภัย*/
			var sl_calculus = $("#hide_slCalculus").val();
			row4 = 	"<tr id=\"tb_Calculate_insurance2_"+numrow3+"\" data-key='"+prd_rider_code+"'>"+
						"<td width=\"30%\" class=\"text-center verticalCenter fontcolortable1 borderBlack\">"
						 if(obj_age.cov_code == cov_base){
							 row4 += "<label class='font-term-purple font-bold'>"+obj_age.cov_code+"</label>"+
							 		"<input type='hidden' id='prd_rider_code' value="+prd_rider_code+">"
						 }else{
							 row4 += "<label class='font-term-green font-bold'>"+obj_age.cov_code+"</label>"+
							 		"<input type='hidden' id='prd_rider_code' value="+prd_rider_code+">"
						 }
						row4 += "</td>"+
						"<td width=\"20%\" class=\"text-center verticalCenter fontcolortable1 borderBlack\">"
						 if(obj_age.cov_code == cov_base){
							 row4 += "<label class='font-term-purple font-bold'>"+type_age+"</label>"+
							 		"</td>"+	
							 		"<td width=\"50%\"class=\"text-center verticalCenter borderBlack\">"+
							 		"<select class=\"form-control\" onchange='duplicate_formula_cal(this);'><option value='0'>None</option>"+sl_calculus+"</select></td>"
						 }else{
							 row4 += "<label class='font-term-green font-bold'>"+type_age+"</label>"+
							 		"</td>"+	
							 		"<td width=\"50%\"class=\"text-center verticalCenter borderBlack\">"+
							 		"<select class=\"form-control\" disabled><option value='0'>None</option>"+sl_calculus+"</select></td>"
						 }
						row4 += "</tr>";
			if(type != "E"){		
				$("#tb_Calculate_insurance2 tbody").append(row4);
			}
				
			/*เพิ่ม row ของ Tab-การใช้สิทธิ์ตามกรมธรรม์ || Lookup ตาราง-การเวนคืน กธ.*/
			var sl_tab2_cal = $("#hide_sl_cal").val();
			row5 = 	"<tr id=\"tb_policyholder_"+numrow3+"\">"+
						"<td width=\"20%\" class=\"text-center verticalCenter fontcolortable1 borderBlack\">"
						if(obj_age.cov_code == cov_base){
							row5 += "<label class='font-term-purple font-bold'>"+obj_age.cov_code+"</label>"+
									"<input type='hidden' id='prd_rider_code' value="+prd_rider_code+">"
						}else{
							row5 += "<label class='font-term-green font-bold'>"+obj_age.cov_code+"</label>"+
									"<input type='hidden' id='prd_rider_code' value="+prd_rider_code+">"
						}
						row5 += "</td>"+
						"<td width=\"10%\" class=\"text-center verticalCenter fontcolortable1 borderBlack\">"
						if(obj_age.cov_code == cov_base){
							row5 += "<label class='font-term-purple font-bold'>"+type_age+"</label>"+
								"</td>"+	
								"<td width=\"25%\" class=\"text-center verticalCenter borderBlack\">"+
									"<label class='font-term-purple font-bold'></label>"+					
								"</td>"+
								"<td width=\"25%\" class=\"text-center verticalCenter borderBlack\">"+
									"<input type='hidden' id='rate_cat_id_tb_useRight'/>"+
									"<input type='hidden' id='rate_layout_id_tb_useRight'/>"+
									"<input type='hidden' id='file_id_tb_useRight'/>"+
									"<label class='font-term-purple font-bold'></label>"+					
								"</td>"	
						}else{
							row5 += "<label class='font-term-green font-bold'>"+type_age+"</label>"+
							"</td>"+	
							"<td width=\"25%\" class=\"text-center verticalCenter borderBlack\">"+
								"<label class='font-term-green font-bold'></label>"+					
							"</td>"+
							"<td width=\"25%\" class=\"text-center verticalCenter borderBlack\">"+
								"<input type='hidden' id='rate_cat_id_tb_useRight'/>"+
								"<input type='hidden' id='rate_layout_id_tb_useRight'/>"+
								"<input type='hidden' id='file_id_tb_useRight'/>"+
								"<label class='font-term-green font-bold'></label>"+					
							"</td>"
						}
						row5 += 					
						"<td width=\"20%\"class=\"text-center verticalCenter borderBlack\">"+
						"<select class=\"form-control\" onchange='cover_fomula(this)' disabled><option value='NONE'>None</option>"+sl_tab2_cal+"</select></td>"+
					"</tr>";			  
			//$("#tb_policyholder tbody").append(row5);

			
//			/*เพิ่ม row ของ Tab-ข้อกำหนดการรับประกัน || Lookup ตาราง-การคำนวณจำนวนเงินเอาประกันภัย*/
//			var dropdownUnit = $("#hide_fixCovUnit").val();
//			var dropdownOF1 = $("#hide_fixCovFactor").val();
//			var dropdownOF2 = $("#hide_fixCovFactor").val();
//			numrow3 = Number(i) + Number(1);
//			var row_cal = "<tr id=\"tr_cal_amount_"+numrow3+"\" data-id=\""+numrow3+"\" data-parent=\"0\" data-level=\"1\" data-key='"+obj_age.prd_rider_code+"' >"+
//							"<td width=\"14%\" class=\"text-center verticalCenter fontcolortable1\">"
//							 if(obj_age.cov_code == cov_base){
//								 row_cal += "<label class='font-term-purple font-bold'>"+obj_age.cov_code+"</label>"+
//								 				"<input type='hidden' id='prd_rider_code' value="+obj_age.prd_rider_code+">"+
//								 				"<input type='hidden' id='serie_no' value=''>"+
//								 				"<input type='hidden' id='seq' value=''>"
//							 }else{
//								 row_cal += "<label class='font-term-green font-bold'>"+obj_age.cov_code+"</label>"+
//								 				"<input type='hidden' id='prd_rider_code' value="+obj_age.prd_rider_code+">"+
//								 				"<input type='hidden' id='serie_no' value=''>"+
//								 				"<input type='hidden' id='seq' value=''>"
//							 }
//							row_cal += "</td>"
//							if(obj_age.cov_code == cov_base){
//								row_cal +="<td width=\"7%\"class=\"text-center verticalCenter fontcolortable1\"><label class='font-term-purple font-bold'>"+type_age+"</label></td>"
//							}else{
//								row_cal += "<td width=\"7%\"class=\"text-center verticalCenter fontcolortable1\"><label class='font-term-green font-bold'>"+type_age+"</label></td>"
//							}
//							row_cal +=
//							"<td width=\"3%\" class=\"text-center verticalCenter\">"+
//								"<i class=\"glyphicon glyphicon-plus icon-blue-circle\"  data-id=\'"+numrow3+"\' data-topic=\'"+numrow3+"\' data-type=\'"+numrow3+"\' id=\"addrowMenu3_"+numrow3+"\" onclick=\"addrowMenu3("+numrow3+");\"></i>"+
//							"</td>"+	
//							"<td width=\"7%\"class=\"text-right verticalCenter\">"+
//							"<input type='text' class='auto form-control text-center width40px' value='0' data-v-min='0.00' data-v-max='999.99'>"+
//							"</td>"+
//							"<td width=\"7%\" class=\"text-right verticalCenter\">"+
//							"<input type='text' class='auto form-control margin-padding0 text-center width40px' value='0' data-v-min='0.00' data-v-max='999.99'>"+
//							"</td>"+
//							"<td width=\"10%\"class=\"text-right verticalCenter\">"+
//							"<input type='text' class='auto form-control margin-padding0 text-center width40px' value='0' data-v-min='0.00' data-v-max='999999999.99'>"+
//							"</td>"+
//							"<td width=\"14%\" class=\"text-right verticalCenter\">"+
//								"<select class=\"form-control\"><option value='NONE'>None</option>"+dropdownUnit+"</select></td>"+
//							"<td width=\"14%\" class=\"text-right verticalCenter\">"+
//								"<select class=\"form-control\"><option value='NONE'>None</option>"+dropdownOF1+"</select></td>"+
//							"<input type='text' class='auto form-control margin-padding0 text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999999999.99'>"+
//						"</tr>";		
//				$("#tbl_cal_amount_CL tbody").append(row_cal);
			
			/*เพิ่ม row ของ Tab-ข้อกำหนดการรับประกัน || Lookup ตาราง-จำนวนเงินเอาประกันภัยสูงสุด (ต่อราย)*/
						
			var row6 = "<tr id='tbody_max_amount_insure"+numrow3+"' data-key='"+prd_rider_code+"' data-main='"+cov_main+"'>"+
				"<td id='imgOK_max_amount_insure"+numrow3+"_CL' class='verticalCenter text-center'>" +
					"<input id='mode_max_amount_insure"+numrow3+"_CL' type='checkbox' onclick='disabled_fieldInsure(this)' value='"+prd_rider_code+"'>" +
				"</td>"
				if(obj_age.cov_code == cov_base){
					row6 += "<td class='verticalCenter text-center font-term-purple font-bold'>"+type_age+"</td>"
				}else{
					row6 += "<td class='verticalCenter text-center "+font_color+" font-bold'>"+type_age+"</td>"
				}
				row6 += "<td class='verticalCenter'><input type='text' id='max_amount_insure"+numrow3+"_CL' class='autoComma form-control text-right' value='0' disabled></td>"+																									
				"</tr>"
			$("#tbl_insure_single tbody").append(row6);
			$(".autoComma").autoNumeric('init',{vMin: '0.00', vMax: '999999999.99'});
			
			//Khwan Fix renew id table จำนวนเงินเอาประกันภัยสูงสุด (ต่อราย) - UNW
			renew_TabWarrantyMax_CL();
			
			/*เพิ่ม row ของ Tab-ข้อกำหนดการรับประกัน || Lookup ตาราง-การรับแบบเพิ่มเบี้ยพิเศษ*/
			/*ข้อกำหนด - ตาราง Policywording*/

			var KPW_maxEm
			var json_data = "";
			if(obj_age.cov_code != cov_base){
				json_data=  {
						"method": "getCaseRider",
						"rCode": obj_age.cov_code
				}	
			} else {
				json_data = {
						"method": "getCaseBasePlan",
						"bCode": obj_age.cov_code
				}	
			}
				$.ajax({
					url: 'ProductCL_GetData_Servlet',
					type: "POST",
					async: false,
					data: json_data,
					success: function (response) {
						
						var cov = "";
						if (type == "Clone") {
							cov = prd_code_Clone;
						}else {
							cov = response.Tab_Basic_Information[0].passInsurance;
						}
						
						KPW_maxEm = (response.Tab_cal_insurance_premiums[0].max_EM*100).toFixed(2);
						
						$("#tbl_increase_premium_CL tbody>tr").each(function(){
							if( cov == $(this).find('td:nth-child(1) input[type="hidden"]').val()){
								$(this).find('td:nth-child(2)').text(KPW_maxEm)
							}
						})
						
						 // เซ็คว่ามี pm rate รึเปล่า
						/* var chk_pmRate  = response.Tab_cal_insurance_premiums[0].table_insurance_premium.length
						 if(chk_pmRate == 0){
							 $("#tb_Additional_contract tbody>tr").each(function(){
								 if( cov == $(this).find('td:nth-child(2) label').text()){
									 $(this).find('td:nth-child(5) i').addClass('disabledAll')
									 $(this).find('td:nth-child(6) button').attr("disabled",true)
								 }
							 })
						 }*/
						
						//ดึงข้อมูลลง ตาราง Policy Wording
						getLookup_policyWording_data(cov,response,"",prd_rider_code,"");
						
						//Max Fix Benefit
						if(cov != cov_base){
							showcase_benefit_CL(response,"R",cov,prd_rider_code);
							getdata_benefit_CL(response,"R",cov,prd_rider_code);
						}
						
					}
				});
			console.log("data",json_data)
			//-
			var row = ""
			if(obj_age.cov_code == cov_base){
				row += "<tr data-key='"+prd_rider_code+"'><td class='verticalCenter text-center font-term-purple font-bold'><label>"+type_age+"</label>" +
							"<input type='hidden' id='cov_code' value='"+obj_age.cov_code+"'>"+
						"</td>"+
						"<td class='verticalCenter text-right font-term-purple font-bold'></td>"
			}else{
				row += "<tr data-key='"+prd_rider_code+"' data-main='"+cov_main+"'><td class='verticalCenter text-center "+font_color+" font-bold'><label>"+type_age+"</label>" +
							"<input type='hidden' id='cov_code' value='"+obj_age.cov_code+"'>"+
						"</td>"+
						"<td class='verticalCenter text-right "+font_color+" font-bold'></td>"
			}
			row += "<td class='verticalCenter text-right'><input type='text' id='amount_premium_uw_CL"+numrow3+"' class='autoPercent3 form-control text-right' value='0.00' data-v-min='0.00' data-v-max='999.99' onblur='validate_maxEM(this)'></td>"+																									
				"</tr>"	
			$("#tbl_increase_premium_CL tbody").append(row);
			$(".autoPercent").autoNumeric('init',{vMin: '0.00', vMax: '99.99'});
			$(".autoPercent3").autoNumeric('init',{vMin: '0.00', vMax: '999.99'});
			
			//Khwan Fix renew id table การรับแบบเพิ่มเบี้ยพิเศษ - UNW
			renew_TabWarrantyEM_CL();
		}
	}
	
	// ตารางแบ่งจ่ายได้
	for(i in response.Tab_Basic_Information[0].premInstall){
		var obj = response.Tab_Basic_Information[0].premInstall[i];
		$("#tb_Sperately_Pay tbody>tr").each(function(){
			if( obj.period == $(this).find('td:nth-child(1) input').val()){
				$(this).find('td:nth-child(1) input').prop("checked",true).attr("disabled",false);
				$(this).find('td:nth-child(3) input').val((obj.install_rate*100).toFixed(2)).attr("disabled",false);
			}
		})
	}
	
	var is_premInstall = response.Tab_Basic_Information[0].is_premInstall;
	$("#chk_sperately_pay").attr("disabled",false)
	if( is_premInstall ){
		$("#chk_sperately_pay").prop("checked",true)
		//$("#tb_Sperately_Pay input[type='checkbox']").attr("disabled",false);
	}else{
		//$("#tb_Sperately_Pay input[type='checkbox']").attr("disabled","disabled");
		$("#chk_sperately_pay").prop("checked",false)
		//check_sperately_pay()
	}
	
	// sex
	var sex = response.Tab_Basic_Information[0].gender;	
	if(sex == "MALE"){
		$("#chk_sex_BP1").prop("checked",true);
	}else if(sex == "FEMALE"){
		$("#chk_sex_BP2").prop("checked",true);
	}else if(sex == "EITHER"){
		$("#chk_sex_BP1").prop("checked",true).prop("disabled",false);
		$("#chk_sex_BP2").prop("checked",true).prop("disabled",false);
	}
	
	/* hide validate* */
	if($("#pass_Insurance_product_cl").val() != ""){
		$("#validate_input1_cl").hide();
	}
	if($("#th_Name_cl").val() != ""){
		$("#validate_input2_cl").hide();
	}
	if($("#th_marketingName_cl").val() != ""){
		$("#validate_input3_cl").hide();
	}
	if($("#tb_PM_Rate tbody>tr").length > 0){
		$("#validate_input4_cl").hide();
	}
	//Benz set Save Clone 29-10-2019
	/*if (type == "Clone") {
		bt_Menu1_Confirm_cl();
	}*/
}

function showcase_cal_premium(response,type,prd_code_temp,prd_code_Clone){
	var obj = response.Tab_cal_insurance_premiums[0];
	
	/*Age Type*/ //ย้ายไป showcase_basic
	/*if(obj.age_Band){
		$("#lb_age_specific_CL option[value="+obj.age_Band+"]").attr("selected",true)
	}else{
		$("#lb_age_specific_CL option[value='']").attr("selected",true)
	}*/
	
	$("#tb_Calculate_insurance tbody>tr").each(function(i){
		$(this).find('td:nth-child(1) #seq').val("1")
		$(this).find('td:nth-child(1) #serie_no').val("1")
	});
	
	/*การคำนวณจำนวนเงินเอาประกันภัย*/
	var round_parent = 0;
	var rowChild3 = 1;
	var id_parent = "";
	for(i in response.Tab_cal_insurance_premiums[0].limitCondSerie){
		var obj_limitCond = response.Tab_cal_insurance_premiums[0].limitCond[round_parent];
		var obj_limitCondSerie = response.Tab_cal_insurance_premiums[0].limitCondSerie[i];
		var obj_limit_seq1 = response.Tab_cal_insurance_premiums[0].limit_seq1[i];
		var obj_limit_seq2 = response.Tab_cal_insurance_premiums[0].limit_seq2[i];
		if(obj_limitCondSerie.Serie_no == 1){
			round_parent++;
		}
		var flag_tb = false;
		$("#tb_Calculate_insurance tbody>tr").each(function(i){
			var Prd_rider_code = "";
			if (type == "Clone") {
				if (prd_code_temp == obj_limitCondSerie.Prd_rider_code) {
					Prd_rider_code = prd_code_Clone;
				}else {
					Prd_rider_code = obj_limitCondSerie.Prd_rider_code;
				}
			}else {
				Prd_rider_code = obj_limitCondSerie.Prd_rider_code;
			}
			
			if(Prd_rider_code == $(this).find('td:nth-child(1) input').val() && obj_limitCondSerie.Serie_no == 1){
				id_parent = $(this).attr('data-id');
				if(obj_limitCond.Cond_seq == null){
					$(this).find('td:nth-child(1) #seq').val(1)
				}else{
					$(this).find('td:nth-child(1) #seq').val(obj_limitCond.Cond_seq)
				}
				if(obj_limitCondSerie.Serie_no == null){
					$(this).find('td:nth-child(1) #serie_no').val(1)
				}else{
					$(this).find('td:nth-child(1) #serie_no').val(obj_limitCondSerie.Serie_no)
				}
				$(this).find('td:nth-child(4) input').val(numberWithCommas(parseFloat(obj_limitCondSerie.Min_base_amt).toFixed(2)));
				$(this).find('td:nth-child(5) input').val(numberWithCommas(parseFloat(obj_limitCondSerie.Max_base_amt).toFixed(2)));
				$(this).find('td:nth-child(6) input').val(numberWithCommas(parseFloat(obj_limit_seq1.Limit_amt).toFixed(2)));
				$(this).find("td:nth-child(7) select>option[value="+obj_limit_seq1.Limit_unit+"]").attr("selected", true);
				$(this).find("td:nth-child(8) select>option[value="+obj_limit_seq1.Limit_factor+"]").attr("selected", true);
				$(this).find('td:nth-child(9) input').val(numberWithCommas(parseFloat(obj_limit_seq2.Limit_amt).toFixed(2)));
				$(this).find("td:nth-child(10) select>option[value="+obj_limit_seq2.Limit_factor+"]").attr("selected", true);
				$(".autoComma").autoNumeric('init',{vMin: '0.00', vMax: '999999999.99'});
				rowChild3 = 1;
				
			}
			else if(obj_limitCondSerie.Serie_no != 1 && flag_tb == false){//*flag_tb == false*/
				flag_tb = true;
				///หน่วย
				var dropdownUnit = $("#tb_Calculate_insurance tbody>tr").eq(0).find('td:nth-child(7) select').html();
				var dropdownOF1 = $("#tb_Calculate_insurance tbody>tr").eq(0).find('td:nth-child(8) select').html();
				var dropdownOF2 = $("#tb_Calculate_insurance tbody>tr").eq(0).find('td:nth-child(10) select').html();
				
				var name_tr 		= "tr_Calculate_insurance"+id_parent+"_"+rowChild3;
				var removerowChild = 'removerowChild3("'+name_tr+'");';
				var new_row 		=  "<tr id=\"tr_Calculate_insurance"+id_parent+"_"+rowChild3+"\" data-group='"+id_parent+"' data-id=\""+id_parent+"_"+rowChild3+"\" data-parent=\""+id_parent+"\" data-level=\"2\">"+
						"<td width=\"14%\" class=\"text-center verticalCenter fontcolortable1 borderBlack\">"+
							"<label></label>"+
							"<input type='hidden' id='prd_rider_code' value='"+Prd_rider_code+"' >"
							
							if(obj_limitCondSerie.Serie_no == null){
								new_row += "<input type='hidden' id='serie_no' value='2' >"
							}else{
								new_row += "<input type='hidden' id='serie_no' value='"+obj_limitCondSerie.Serie_no+"' >"
							}
							
						new_row += "<input type='hidden' id='seq' value=''>"+
						"</td>"+
						"<td width=\"7%\"class=\"text-center verticalCenter fontcolortable2 borderBlack\">"+"</td>"+
						"<td width=\"3%\" class=\"text-center verticalCenter borderBlack\">"+
							"<i class=\"glyphicon icon-blue-circle glyphicon-minus icon_active\"  data-id=\'"+rowChild3+"\' data-topic=\'"+rowChild3+"\' data-type=\'"+rowChild3+"\' id=\"removerow_"+rowChild3+"\" onclick='"+removerowChild+"'></i>"+
							"</td>"+	
						"<td width=\"7%\"class=\"text-right verticalCenter borderBlack\">"+
						"<input type='text' class='autoComma form-control margin-padding0 text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999.99' disabled> "+
						"</td>"+
						"<td width=\"7%\" class=\"text-right verticalCenter borderBlack\">"+
						"<input type='text' class='autoComma form-control margin-padding0 text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999.99' onblur='validateMax_tbCal(this);'>"+
						"</td>"+
						"<td width=\"10%\"class=\"text-right verticalCenter borderBlack\">"+
						"<input type='text' class='autoComma form-control margin-padding0 text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999.99'>"+
						"</td>"+
						"<td width=\"14%\" class=\"text-right verticalCenter borderBlack\">"+
							"<select class=\"form-control\" onchange='change_unit_CL(this,6)'>"+dropdownUnit+"</select></td>"+
						"<td width=\"14%\" class=\"text-right verticalCenter borderBlack\">"+
							"<select class=\"form-control\">"+dropdownOF1+"</select></td>"+
						"<td width=\"10%\" class=\"text-right verticalCenter borderBlack\">"+
						"<input type='text' class='autoComma form-control margin-padding0 text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999.99'>"+
						"<td width=\"14%\" class=\"text-right verticalCenter borderBlack\">"+
							"<select class=\"form-control\">"+dropdownOF2+"</select></td>"+
					"</tr>";	
				$(new_row).insertAfter($("#tb_Calculate_insurance"+">tbody>tr[data-group="+id_parent+"]:last").closest('tr'));
				$("#tr_Calculate_insurance"+id_parent+"_"+rowChild3).find('td:nth-child(4) input').val(numberWithCommas(obj_limitCondSerie.Min_base_amt));
				$("#tr_Calculate_insurance"+id_parent+"_"+rowChild3).find('td:nth-child(5) input').val(numberWithCommas(obj_limitCondSerie.Max_base_amt));
				$("#tr_Calculate_insurance"+id_parent+"_"+rowChild3).find('td:nth-child(6) input').val(numberWithCommas(obj_limit_seq1.Limit_amt));
				$("#tr_Calculate_insurance"+id_parent+"_"+rowChild3).find("td:nth-child(7) select>option[value="+obj_limit_seq1.Limit_unit+"]").attr("selected", true);
				$("#tr_Calculate_insurance"+id_parent+"_"+rowChild3).find("td:nth-child(8) select>option[value="+obj_limit_seq1.Limit_factor+"]").attr("selected", true);
				$("#tr_Calculate_insurance"+id_parent+"_"+rowChild3).find('td:nth-child(9) input').val(numberWithCommas(obj_limit_seq2.Limit_amt));
				$("#tr_Calculate_insurance"+id_parent+"_"+rowChild3).find("td:nth-child(10) select>option[value="+obj_limit_seq2.Limit_factor+"]").attr("selected", true);
				rowChild3++;
				$(".autoComma").autoNumeric('init',{vMin: '0.00', vMax: '999999999.99'});
			}
			
		})
	}
	
	if(obj.SA_P[0]){
		$("#lb_SAP_CL option[value="+obj.SA_P[0].Formula_id+"]").attr('selected', true);
	}
	if(obj.MI[0]){
		$("#lb_MI_CL option[value="+obj.MI[0].Formula_id+"]").attr('selected', true);
	}
	if(obj.SMI[0]){
		$("#lb_SMI_CL option[value="+obj.SMI[0].Formula_id+"]").attr('selected', true);
	}
	if(obj.balloon_prd_code){
		$("#chk_balloon_prd").prop("checked",true);
		$("#btn_select_balloon_prd_code").attr("disabled",false)
		$("#txb_balloon_prd_code").val(obj.balloon_prd_code);
	}
	
	/*การชำระเบี้ยประกันภัยปีแรก*/
	for(i in response.Tab_cal_insurance_premiums[0].prem_collect){
		var obj_collect_meth = response.Tab_cal_insurance_premiums[0].prem_collect[i];
		if( obj_collect_meth.Collect_meth == "LOAN"){
			$("#chk_cal_pay_premium_CL1").prop("checked",true);
		}else if( obj_collect_meth.Collect_meth == "CASH"){
			$("#chk_cal_pay_premium_CL2").prop("checked",true);
		}
	}
	
	/*formula*/
	if(response.Tab_cal_insurance_premiums[0].formula.length > 0){
		for(i in response.Tab_cal_insurance_premiums[0].formula){
			var formula = response.Tab_cal_insurance_premiums[0].formula[i];
			$("#tb_Calculate_insurance2 tbody>tr").each(function(){
				var Prd_rider_code = "";
				if (type == "Clone") {
					if (prd_code_temp == formula.Prd_rider_code) {
						Prd_rider_code = prd_code_Clone;
					}else {
						Prd_rider_code = formula.Prd_rider_code;
					}
				}else {
					Prd_rider_code = formula.Prd_rider_code;
				}
				
				if(Prd_rider_code == $(this).find('td:nth-child(1) #prd_rider_code').val() && formula.Formula_cat_id == 4){
					$(this).find("td:nth-child(3) select>option[value="+formula.Formula_id+"]").attr('selected', true);
				}

			});
			
			var formula_base = $("#tb_Calculate_insurance2 tbody>tr").eq(0).find('td:nth-child(3) option:selected').val()
			$("#tb_Calculate_insurance2 tbody>tr").not(':first').find('td:nth-child(3) option[value="'+formula_base+'"]').attr("selected",true)
		}
	}
	duplicate_formula_cal($("#tb_Calculate_insurance2 tbody>tr:first>td:nth-child(3)>select"));
	
	
	$(".autoComma").autoNumeric('init',{vMin: '0.00', vMax: '999999999.99'});
	//Benz set Save Clone 29-10-2019
/*	 if (type == "Clone") {
		datasave_calInsurance();
	}*/
}

function showcase_use_Rights(response,type,prd_code_temp,prd_code_Clone){
		var obj = response.Tab_GrantRightsInsure[0].change_Type;
		$("#div_change_condition input").each(function(){
			if( obj == $(this).val()){
				$(this).attr("disabled",false).prop("checked",true);
				$(this).parent().find('label').removeClass('text-muted');
			}
		});
		
		/*base_plan*/
		for(i in response.Tab_GrantRightsInsure[0].basePlan){
			var obj_base = response.Tab_GrantRightsInsure[0].basePlan[i];
			$("#tb_policyholder tbody>tr").each(function(){
			if( obj_base.cov_code == $(this).find('td:nth-child(1) #cov_code_policyValue').val() && obj_base.pm_rate[0][0]){
				var str = obj_base.pm_rate[0][0].filename;
				var str2 = str.substring(0,10) + " " + str.substring(20);
//				$(this).find('td:nth-child(3) label').text(obj_base.pm_rate[0][0].name_th[0].name);
//				$(this).find('td:nth-child(4) label').text(str2);
//				$(this).find('td:nth-child(4) #rate_cat_id_tb_useRight').val(obj_base.pm_rate[0][0].rate_cat_id)
//				$(this).find('td:nth-child(4) #rate_layout_id_tb_useRight').val(obj_base.pm_rate[0][0].rate_layout_id)
//				$(this).find('td:nth-child(4) #file_id_tb_useRight').val(obj_base.pm_rate[0][0].fileID)
				if($(this).find('td:nth-child(1) label').text() != ""){
					$(this).find('td:nth-child(5) select').attr("disabled",false);
				}
			}
			});
		}
		/*rider*/
		for(i in response.Tab_GrantRightsInsure[0].rider){
			//var obj_base = response.Tab_GrantRightsInsure[0].basePlan[0];
			var obj_rider = response.Tab_GrantRightsInsure[0].rider[i];
			$("#tb_policyholder tbody>tr").each(function(){
				if( obj_rider.cov_code == $(this).find('td:nth-child(1) #cov_code_policyValue').val() && obj_rider.pm_rate[0]){
					var str = obj_rider.pm_rate[0].filename;
					var str2 = str.substring(0,10) + " " + str.substring(20);
//					$(this).find('td:nth-child(3) label').text(obj_rider.pm_rate[0].name_th[0].name);
//					$(this).find('td:nth-child(4) label').text( str2);
//					$(this).find('td:nth-child(4) #rate_cat_id_tb_useRight').val(obj_rider.pm_rate[0].rate_cat_id)
//					$(this).find('td:nth-child(4) #rate_layout_id_tb_useRight').val(obj_rider.pm_rate[0].rate_layout_id)
//					$(this).find('td:nth-child(4) #file_id_tb_useRight').val(obj_rider.pm_rate[0].fileID)
					if($(this).find('td:nth-child(1) label').text() != ""){
						$(this).find('td:nth-child(5) select').attr("disabled",false);
					}
				}
				
			});
		}
		
		if (type == "Clone") {
			/*formula*/
			for(i in response.Tab_GrantRightsInsure[0].formula){
				var obj = response.Tab_GrantRightsInsure[0].formula[i];
				$("#tb_policyholder tbody>tr").each(function(){
					if (obj.Prd_rider_code == prd_code_temp) {
						obj.Prd_rider_code = prd_code_Clone;
					}
					if( obj.Prd_rider_code == $(this).find('td:nth-child(1) input[type="hidden"]').val()){
						//if($(this).find('td:nth-child(1) label').text() != ""){
							$(this).find("td:nth-child(5) select>option[value="+obj.Formula_id+"]").attr('selected',true)
						//}
					}
				})
			}
		}else {
			/*formula*/
			for(i in response.Tab_GrantRightsInsure[0].formula){
				var obj = response.Tab_GrantRightsInsure[0].formula[i];
				$("#tb_policyholder tbody>tr").each(function(){
					if( obj.Prd_rider_code == $(this).find('td:nth-child(1) input[type="hidden"]').val()){
						//if($(this).find('td:nth-child(1) label').text() != ""){
							$(this).find("td:nth-child(5) select>option[value="+obj.Formula_id+"]").attr('selected',true)
						//}
					}
				})
			}
			
		}
		
		
		//ดึง ข้อมูลจาก cov_code มาใส่ใน tab การใช้สิทธิ์
		var arrCov_code = [];
		$("#tb_policyholder tbody>tr").each(function(){
			arrCov_code.push($(this).find('td:nth-child(1) label').text());
		})
		get_row_useRight(arrCov_code);
		//Benz set Save Clone 29-10-2019
		/* if (type == "Clone") {
			 datasave_useRightInsurance();
		}*/
}

function showcase_sale_benefits(response,type,prd_code_temp,prd_code_Clone){
	
	for(i in response.Tab_SalesBenefits[0].SalesBenefits){
		var obj = response.Tab_SalesBenefits[0].SalesBenefits[i];
		$("#panel_saleBenefits div[class='row']").each(function(){
			if( obj.compen_type == $(this).find('div[class="col-sm-6"] input[type="checkbox"]').val()){
				if(obj.compen_type == "BROKER_FEE"){
					if(obj.compen_rate == 0 && obj.fee == false && obj.vat == false){
						$(this).find('div[class="col-sm-6"] input[type="checkbox"]').prop("checked",false);
						$(this).find('div[class="col-sm-5"] input[type="text"]').attr("disabled",true);
						$("#panel_sale_CL").css("display","none");
					}else{
						$(this).find('div[class="col-sm-6"] input[type="checkbox"]').prop("checked",true);
						$(this).find('div[class="col-sm-5"] input[type="text"]').val((obj.compen_rate*100).toFixed(2)).attr("disabled",false);
						$("#panel_sale_CL").css("display","block");
						
						if( obj.fee){
							$("#chk_fee").prop("checked",true);
						}
						if( obj.vat){
							$("#chk_vat").prop("checked",true);
						}
					}
					
				}else{
					if(obj.compen_rate == 0){
						$(this).find('div[class="col-sm-6"] input[type="checkbox"]').prop("checked",false);
						$(this).find('div[class="col-sm-5"] input[type="text"]').attr("disabled",true);
					}else{
						$(this).find('div[class="col-sm-6"] input[type="checkbox"]').prop("checked",true);
						$(this).find('div[class="col-sm-5"] input[type="text"]').val((obj.compen_rate*100).toFixed(2)).attr("disabled",false);
					}
					
				}
				
			}
			
			
		})
	}
	//Benz set Save Clone 29-10-2019
	/* if (type == "Clone") {
		 datasave_saleBenefit();
	}*/
}

function showcase_term_warranty(response,type,prd_code_temp,prd_code_Clone){
	
	$("#chk_increase_premium_yes_CL1").prop("checked",false);
	$("#chk_increase_premium_yes_CL2").prop("checked",false);
	$("#chk_increase_premium_yes_CL3").prop("checked",false);
	$("#chk_increase_premium_yes_CL4").prop("checked",false);
	
	var obj = response.Tab_Provision[0].product[0];
	$("#menu_term1_datefrom_cl").val(obj.sale_eff_date);
	$("#menu_term1_dateto_cl").val(obj.sale_exp_date);
	$("#system_date_cl").val(obj.sys_eff_date);
	
	if(obj.master_policy != "null"){
		$("#master_policy_cl").val(obj.master_policy);
	}
	if(obj.first_beneficiary == "PARTNER"){
		$("#rd_benefit_person_CL1").prop("checked",true);
	}else if(obj.first_beneficiary == "INTERESTED"){
		$("#rd_benefit_person_CL2").prop("checked",true);
	}
	if(obj.is_flp){
		$("#chk_free_look_CL").prop("checked",true)
		$("#amount_free_look_CL").prop("disabled", false);
		$("#deduct_cost_CL").prop("disabled",false);
	}
	if(obj.is_flp_fee){
		$("#deduct_cost_CL").prop("checked",true);
		$("#deduct_cost_CL").prop("disabled",false);
		$("#tbl_deduct_cost tbody>tr").each(function(){
			$(this).find('td:nth-child(1) input').attr("disabled",false);
		});
	}
	$("#amount_free_look_CL").val(obj.flp_day).attr("disabled",false);
	if(obj.min_period != 0 && obj.min_period != null){
		$("#start_period_insure_cl").val(obj.min_period);
	}
	if(obj.min_period_unit != null){
		$("#start_period_insure_unit_cl option[value="+obj.min_period_unit+"]").attr("selected",true);
	}
	if(obj.max_period != 0 && obj.max_period != null){
		$("#end_period_insure_cl").val(obj.max_period);
	}
	if(obj.max_period_unit != null){
		$("#end_period_insure_unit_cl option[value="+obj.max_period_unit+"]").attr("selected",true);
	}
	if(obj.max_insure_age != 0 && obj.max_insure_age != null){
		$("#max_period_insure_cl").val(obj.max_insure_age);
	}
	
	/*ประวัติการเปลี่ยนแปลงวันที่กำหนดขาย*/
	var row = ""
	for(i in response.Tab_Provision[0].saleHistory){
		var obj = response.Tab_Provision[0].saleHistory[i];
			row = "<tr>"+
				"<td class='text-center'>"+obj.seq+"</td>"+
				"<td class='text-center'>"+obj.update_time+"</td>"+
				"<td class='text-center'>"+obj.user_code+"</td>"+
				"<td class='text-center'>"+obj.sys_eff_date+" - "+obj.sale_exp_date+"</td>"+																
			"</tr>"
		$("#tbl_HistoryPolicy_CL tbody").append(row)
	}
	
	
	/*mode*/
	if(response.Tab_Provision[0].mode.length > 0){
		$("#tbl_modeTerms tbody input[type='checkbox']").prop("checked",false)
	}
	for(i in response.Tab_Provision[0].mode){
		var obj_mode = response.Tab_Provision[0].mode[i];
		$("#tbl_modeTerms tbody>tr").each(function(){
			if( obj_mode.value == $(this).find('td:nth-child(1) input').val()){
				$(this).find('td:nth-child(1) input').prop("checked",true);
			}
		});
	}
	
	/*participant พิกัดอายุ*/
	if(response.Tab_Provision[0].participant[0]){
		var obj_pariticipant =  response.Tab_Provision[0].participant[0];
		$("#start_age_insure_cl").val(obj_pariticipant.min_issue_age);
		$("#start_age_insure_unit_cl option[value='"+obj_pariticipant.min_issue_age_unit+"']").attr("selected","selected");
		$("#end_age_insure_cl").val(obj_pariticipant.max_issue_age);
		$("#end_age_insure_unit_cl option[value='"+obj_pariticipant.max_issue_age_unit+"']").attr("selected","selected");
		$("#max_age_insure_cl").val(obj_pariticipant.max_insure_age);
		
		$("#tbl_formulaTerms tbody>tr").each(function(i){
			if( obj_pariticipant.age_calc_meth == $(this).find('td:nth-child(1) input').val()){
				$(this).find('td:nth-child(1) input').prop("checked",true).attr("disabled",false)
			}
		})
	}
	
	/*ชั้นอาชีพที่เสนอขาย*/
	for(i in response.Tab_Provision[0].occ){
		var obj = response.Tab_Provision[0].occ[i];
		$("#tbl_saleDegreeTerm tbody>tr").each(function(){
			if(obj.value == $(this).find("td:nth-child(1) input[type='checkbox']").val()){
				$(this).find("td:nth-child(1) input[type='checkbox']").prop("checked",true);
			}
		});
	}
	validate_levelJob()
	
	/*จำนวนเงินเอาประกันภัยสูงสุด (ต่อแบบ) คนเดียว*/
	var obj_underwrite = response.Tab_Provision[0].underwrite[0];
	$("#amount_insure_alone_CL").val(obj_underwrite.prd_max_sa)
	$("#amount_insure_alone_unit_CL option[value="+obj_underwrite.prd_max_sa_unit+"]").attr("selected",true)
	if(obj_underwrite.prd_max_sa_unit == "PERCENT"){
		$("#tbl_insure_alone .autoComma").autoNumeric('destroy');
		$("#amount_insure_alone_CL").removeClass("autoComma").addClass("autoPercent3-alone")
		$("#amount_insure_alone_CL").attr("data-v-max","999.99");
		$("#tbl_insure_alone .autoPercent3-alone").autoNumeric('init',{vMin: '0.00', vMax: '999.99'});
	}
	$("#amount_insure_alone_factor_CL option[value="+obj_underwrite.prd_max_sa_factor+"]").attr("selected",true)
	if( obj_underwrite.is_med_req){
		$("#rd_health_check_CL1").prop("checked",true);
		chk_health_check(1);
	}else{
		chk_health_check(2);
	}
	if( obj_underwrite.is_med_sum_accum){
		$("#rd_health_money_CL1").prop("checked",true);
	}
	if( obj_underwrite.is_exist_policy){
		$("#rd_old_list_CL1").prop("checked",true);	
	}
	if( obj_underwrite.is_insure_sum_accum){
		$("#rd_capital_CL1").prop("checked",true);
	}
	if( obj_underwrite.is_substandard){
		$("#rd_increase_premium_CL1").prop("checked",true);
	}else{
		chk_increase_premium(2);
	}
	if( obj_underwrite.is_rider_allow){
		$("#rd_buy_contract_CL1").prop("checked",true);
	}else{
		$("#rd_buy_contract_CL2").prop("checked",true);
	}
	if( obj_underwrite.is_rider_sum_accum){
		$("#rd_buy_contract_period_CL1").prop("checked",true);
	}else{
		$("#rd_buy_contract_period_CL2").prop("checked",true);
	}
	if( obj_underwrite.is_check_ic_ba){
		$("#chk_check_data_CL4").prop("checked",true);
	}else{
		$("#chk_check_data_CL4").prop("checked",false);
	}
	if( obj_underwrite.is_check_ic_fi_cft){
		$("#chk_check_data_CL5").prop("checked",true);
	}else{
		$("#chk_check_data_CL5").prop("checked",false);
	}
	if( obj_underwrite.is_check_sale_blacklist){
		$("#chk_check_data_CL6").prop("checked",true);
	}else{
		$("#chk_check_data_CL6").prop("checked",false);
	}
	if( obj_underwrite.is_reins_alert){
		$("#rd_filing_rs_CL1").prop("checked",true);
	}else{
		$("#rd_filing_rs_CL2").prop("checked",true);
	}
	if( obj_underwrite.is_fax_app){
		$("#rd_fax_app_CL1").prop("checked",true);
	}else{
		$("#rd_fax_app_CL2").prop("checked",true);
	}
	
	/*จำนวนเงินเอาประกันภัยสูงสุด (ต่อแบบ) กู้ร่วม*/
	var row = "";
	var row_id = 1;
	var sl_unit = $("#lookup_unit").val();
	var sl_factor = $("#lookup_factor").val();
	for(i in response.Tab_Provision[0].unwCocreditLimit){
		$("#rd_max_amount_insure_CL2").prop("checked",true);
		chk_max_amount_insure(2);
		var obj = response.Tab_Provision[0].unwCocreditLimit[i];
		row = "<tr>"+														
				"<td id='imgOK_loan_many"+row_id+"' class='verticalCenter text-center'>" +
					"<input type='hidden' id='seq' value='"+obj.seq+"'>" +
				"</td>"+
				"<td class='verticalCenter text-right'><input type='text' id='loan_many_from"+row_id+"_CL' class='autoComma form-control text-right' value='"+obj.Min_loan_amt+"'></td>"+	
				"<td class='verticalCenter text-right'><input type='text' id='loan_many_to"+row_id+"_CL' class='autoComma form-control text-right' value='"+obj.Max_loan_amt+"' onchange='validateMax_tbAmountTo(this);'></td>"+	
				"<td class='verticalCenter text-right'><input type='text' id='loan_many_max_per_person"+row_id+"_CL' class='autoComma form-control text-right' value='"+obj.Pax_max_sa_amt+"' data-v-min='0.00' data-v-max='100.00'></td>"+						
				"<td class='verticalCenter text-center'><select class='form-control sl-unit' id='sl_unit"+row_id+"'><option value='NONE'>None</option>"+sl_unit+"</select></td>"+	
				"<td class='verticalCenter text-center'><select class='form-control sl-factor' id='sl_of"+row_id+"'><option value='NONE'>None</option>"+sl_factor+"</select></td>"+
				"<td class='verticalCenter text-right'><input type='text' id='loan_many_max_per_all"+row_id+"_CL' class='autoComma form-control text-right' value='"+obj.Tot_max_sa_amt+"' data-v-min='0.00' data-v-max='999.99'></td>"+						
				"<td class='verticalCenter text-center'><select class='form-control sl-unit' id='sl_unit"+row_id+"'><option value='NONE'>None</option>"+sl_unit+"</select></td>"+	
				"<td class='verticalCenter text-center'><select class='form-control sl-factor' id='sl_of"+row_id+"'><option value='NONE'>None</option>"+sl_factor+"</select></td>"+																									
			"</tr>"
		$("#tbl_insure_together tbody").append(row);
		$("#tbl_insure_together tbody>tr").eq(i).find("td:nth-child(5) option[value='"+obj.Pax_max_sa_unit+"']").attr("selected",true);
		$("#tbl_insure_together tbody>tr").eq(i).find("td:nth-child(6) option[value='"+obj.Pax_max_sa_factor+"']").attr("selected",true);
		$("#tbl_insure_together tbody>tr").eq(i).find("td:nth-child(8) option[value='"+obj.Tot_max_sa_unit+"']").attr("selected",true);
		$("#tbl_insure_together tbody>tr").eq(i).find("td:nth-child(9) option[value='"+obj.Tot_max_sa_factor+"']").attr("selected",true);
	}
	
	
	/*จำนวนเงินเอาประกันภัยสูงสุด (ต่อราย)*/
	for(i in response.Tab_Provision[0].unwRiderLimit){
		var obj = response.Tab_Provision[0].unwRiderLimit[i];
		//$("#tbl_insure_single tbody>tr").eq(i).find('td:nth-child(1) input[type="checkbox"]').val(obj.prd_rider_code) 
		var prd_rider_code = "";
		if (type == "Clone") {
			if (prd_code_temp == obj.prd_rider_code) {
				prd_rider_code = prd_code_Clone;
			}else {
				prd_rider_code = obj.prd_rider_code;
			}
		}else {
			prd_rider_code = obj.prd_rider_code;
		}
			$("#tbl_insure_single tbody>tr").each(function(i){
				if( prd_rider_code == $(this).find('td:nth-child(1) input[type="checkbox"]').val()){
					$(this).find('td:nth-child(1) input[type="checkbox"]').prop("checked",true);
					$(this).find('td:nth-child(3) input[type="text"]').val(numberWithCommas(parseFloat(obj.Pax_max_sa_amt).toFixed(2)));
					$(this).find('td:nth-child(3) input[type="text"]').attr("disabled",false)
					$("#tbl_increase_premium_CL tbody>tr").eq(i).find('td:nth-child(3) input[type="text"]').val((obj.Max_em*100).toFixed(2));
				}
			})
	}
	//$(".autoComma").autoNumeric('init', { aSep: ',', vMin: '0.00', vMax: '999999999.99', wEmpty: 'zero' });
	
	/*การรวมเงินเอาประกันภัยเพื่อตรวจสุขภาพ , การแสดงรายการ กธ. เดิม , การรวมทุนคุ้มครอง (อำนาจการพิจารณาของ UW)*/
	for(i in response.Tab_Provision[0].unwAccumRule){
		var obj = response.Tab_Provision[0].unwAccumRule[i];
		if( obj.accum_type == "MED_SUM"){
			$("#tbl_health_insurance_CL tbody>tr").remove();
		}else if( obj.accum_type == "EXIST_POLICY"){
			$("#tbl_old_insurance_CL tbody>tr").remove();
		}else if( obj.accum_type == "INSURED_SUM"){
			$("#tbl_UW_consider_CL tbody>tr").remove();
		}
	}
	var row = "";
	var row_id = 0;
	var row_id_health = 1;
	var row_id_old = 1;
	var row_id_uw = 1;
	var main_contract = $("#main_contract").html();
	var lookup_senior = $("#lookup_slSenior").val();
	var lookup_reinsurance_Group = $("#lookup_reinsurance_Group").val();
	var lookup_filing_Channel = $("#lookup_filing_Channel").val();
	var lookup_sale_Channel = $("#lookup_sale_Channel").val();
	for(i in response.Tab_Provision[0].unwAccumRule){
		var obj = response.Tab_Provision[0].unwAccumRule[i];
		if( obj.accum_type == "MED_SUM"){	
			row_id = row_id_health;
			var tr = "tr_healthInsurance";
			var imgOk_id = "imgOK_healthInsurance";
			var imgOk_click = "imgCheckbox_healthInsurance_CL";
			var sl_contract = "sl_contractType_healthInsurance";
			var sl_policy = "sl_policyType_healthInsurance";
			var sl_product = "sl_productType_healthInsurance";
			var sl_reinsurance = "sl_Reinsurance_healthInsurance";
			var sl_senior = "sl_senior_healthInsurance";
			//var sl_filling = "sl_fillingChannel_healthInsurance";
			var sl_saleChanel = "sl_saleChannel_healthInsurance";
			var sl_salePartner = "sl_partner_healthInsurance";
		}else if( obj.accum_type == "EXIST_POLICY"){	
			row_id = row_id_old;
			var tr = "tr_oldinsurance";
			var imgOk_id = "imgOK_oldinsurance";
			var imgOk_click = "imgCheckbox_oldinsurance_CL";
			var sl_contract = "sl_contractType_oldinsurance";
			var sl_policy = "sl_policyType_oldinsurance";
			var sl_product = "sl_productType_oldinsurance";
			var sl_reinsurance = "sl_Reinsurance_oldinsurance";
			var sl_senior = "sl_senior_oldinsurance";
			//var sl_filling = "sl_fillingChannel_oldinsurance";
			var sl_saleChanel = "sl_saleChannel_oldinsurance";
			var sl_salePartner = "sl_partner_oldinsurance";
		}else if( obj.accum_type == "INSURED_SUM"){		
			row_id = row_id_uw;
			var tr = "tr_UWConsider";
			var imgOk_id = "imgOK_UWConsider";
			var imgOk_click = "imgCheckbox_UWConsider_CL";
			var sl_contract = "sl_contractType_UWConsider";
			var sl_policy = "sl_policyType_UWConsider";
			var sl_product = "sl_productType_UWConsider";
			var sl_reinsurance = "sl_Reinsurance_UWConsider";
			var sl_senior = "sl_senior_UWConsider";
			//var sl_filling = "sl_fillingChannel_UWConsider";
			var sl_saleChanel = "sl_saleChannel_UWConsider";
			var sl_salePartner = "sl_partner_UWConsider";
		}
		row = "<tr id='"+tr+row_id+"'>"
		if(row_id == 1){
			row += "<td id='"+imgOk_id+row_id+"' class='text-center vertical-middle' style='background-color:gray;'></td>"
		}else{
			row += "<td id='"+imgOk_id+row_id+"' class='text-center vertical-middle' onclick='"+imgOk_click+"("+row_id+");'>"
		}
		row += "<i class='glyphicon glyphicon-edit'></i>"+
		"</td>"+					
		"<td class='verticalCenter text-center'>"+
			"<select class='form-control' id='"+sl_contract+""+row_id+"' onchange='ddHeath1_select(this.id);'>"+main_contract+
			"</select>"+
		"</td>"+
		"<td class='verticalCenter text-center'>"+
			"<select class='form-control' id='"+sl_policy+""+row_id+"' onchange='ddHeath2_select(this.id);'>"+
				"<option value='0' selected=''>All</option>"+
			"</select>"+
		"</td>"+
		"<td class='verticalCenter text-center'>"+
			"<select class='form-control' id='"+sl_product+""+row_id+"'>"+
				"<option value='0' selected=''>All</option>"+
			"</select>"+
		"</td>"+
		"<td class='verticalCenter text-center'>"+
			"<select class='form-control' id='"+sl_reinsurance+""+row_id+"'>"+
				/*"<option value='NONE' selected=''>None</option>"+*/lookup_reinsurance_Group+
			"</select>"+
		"</td>"+
		"<td class='verticalCenter text-center'>"+
			"<select class='form-control' id='"+sl_senior+""+row_id+"'>"+
				/*"<option value='NONE' selected=''>None</option>"*/lookup_senior+
			"</select>"+
		"</td>"+
		/*"<td class='verticalCenter text-center'>"+
			"<select class='form-control' id='"+sl_filling+""+row_id+"'>"+
				"<option value='NONE' selected=''>All</option>"+lookup_filing_Channel+
			"</select>"+
		"</td>"+*/
		"<td class='verticalCenter text-center'>"+
			"<select class='form-control' id='"+sl_saleChanel+""+row_id+"' onchange='filter_partner(this)'>"+
				"<option data-id='0' value='NONE' selected=''>All</option>"+lookup_sale_Channel+
			"</select>"+
		"</td>"+
		"<td class='verticalCenter text-center'>"+
			"<select class='form-control' id='"+sl_salePartner+""+row_id+"'>"+
				"<option data-id='0' value='NONE' selected=''>All</option>"+
			"</select>"+
		"</td>"+																													
	"</tr>"		
		/*if(obj.is_senior){
			var senior = "SENIOR";
		}else{
			var senior = "NONSENIOR";
		}*/
		if( obj.accum_type == "MED_SUM"){
			$("#rd_health_money_CL1").prop("checked",true);
			$("#tbl_health_insurance_CL").show();
			$("#tbl_health_insurance_CL tbody").append(row);
			$("#btn_health_insurance").show();
			
			var index = row_id_health - 1;
			var tbl = "tbl_health_insurance_CL";
			$("#tbl_health_insurance_CL tbody>tr").eq(index).find("td:nth-child(2) select>option[value="+obj.cov_cat_lv_1+"]").attr("selected",true);
			var id = $("#tbl_health_insurance_CL tbody>tr").eq(index).find("td:nth-child(2) select").attr('id');
			search_covCat2(id,obj,tbl,sl_contract,sl_policy,sl_product);
		
			$("#tbl_health_insurance_CL tbody>tr").eq(index).find("td:nth-child(5) select>option[value="+obj.is_gio+"]").attr("selected",true);
			$("#tbl_health_insurance_CL tbody>tr").eq(index).find("td:nth-child(6) select>option[value='"+obj.is_senior+"']").attr("selected",true);
			//$("#tbl_health_insurance_CL tbody>tr").eq(index).find("td:nth-child(7) select>option[value="+obj.filing_chan_id+"]").attr("selected",true);
			$("#tbl_health_insurance_CL tbody>tr").eq(index).find("td:nth-child(7) select>option[data-id="+obj.sale_chan_id+"]").attr("selected",true);
			var sale_chan_id = $("#tbl_health_insurance_CL tbody>tr").eq(index).find("td:nth-child(7) select>option[data-id="+obj.sale_chan_id+"]").val();
			searchPartnerAccumRule(sale_chan_id,$("#tbl_health_insurance_CL tbody>tr").eq(index).find("td:nth-child(8) select"),obj.sale_partner_code)
			//$("#tbl_health_insurance_CL tbody>tr").eq(index).find("td:nth-child(9) select>option[value="+obj.sale_partner_code+"]").attr("selected",true);
			row_id_health++;
		}else if( obj.accum_type == "EXIST_POLICY"){
			$("#rd_old_list_CL1").prop("checked",true);
			$("#tbl_old_insurance_CL").show();
			$("#tbl_old_insurance_CL tbody").append(row);
			$("#btn_old_insurance").show();
			
			var index = row_id_old - 1;
			var tbl = "tbl_old_insurance_CL";
			$("#tbl_old_insurance_CL tbody>tr").eq(index).find("td:nth-child(2) select>option[value="+obj.cov_cat_lv_1+"]").attr("selected",true);
			var id = $("#tbl_old_insurance_CL tbody>tr").eq(index).find("td:nth-child(2) select").attr('id');
			search_covCat2(id,obj,tbl,sl_contract,sl_policy,sl_product)
			
			$("#tbl_old_insurance_CL tbody>tr").eq(index).find("td:nth-child(3) select>option[value="+obj.cov_cat_lv_2+"]").attr("selected",true);
			$("#tbl_old_insurance_CL tbody>tr").eq(index).find("td:nth-child(4) select>option[value="+obj.cov_cat_lv_3+"]").attr("selected",true);
			$("#tbl_old_insurance_CL tbody>tr").eq(index).find("td:nth-child(5) select>option[value="+obj.is_gio+"]").attr("selected",true);
			$("#tbl_old_insurance_CL tbody>tr").eq(index).find("td:nth-child(6) select>option[value='"+obj.is_senior+"']").attr("selected",true);
			//$("#tbl_old_insurance_CL tbody>tr").eq(index).find("td:nth-child(7) select>option[value="+obj.filing_chan_id+"]").attr("selected",true);
			$("#tbl_old_insurance_CL tbody>tr").eq(index).find("td:nth-child(7) select>option[data-id="+obj.sale_chan_id+"]").attr("selected",true);
			var sale_chan_id = $("#tbl_old_insurance_CL tbody>tr").eq(index).find("td:nth-child(7) select>option[data-id="+obj.sale_chan_id+"]").val();
			searchPartnerAccumRule(sale_chan_id,$("#tbl_old_insurance_CL tbody>tr").eq(index).find("td:nth-child(8) select"),obj.sale_partner_code)
			//$("#tbl_old_insurance_CL tbody>tr").eq(index).find("td:nth-child(9) select>option[value="+obj.sale_partner_code+"]").attr("selected",true);
			row_id_old++;
		}else if( obj.accum_type == "INSURED_SUM"){
			$("#rd_capital_CL1").prop("checked",true);
			$("#tbl_UW_consider_CL").show();
			$("#tbl_UW_consider_CL tbody").append(row);
			$("#btn_UW_Consider").show();
			
			var index = row_id_uw - 1;
			var tbl = "tbl_UW_consider_CL";
			$("#tbl_UW_consider_CL tbody>tr").eq(index).find("td:nth-child(2) select>option[value="+obj.cov_cat_lv_1+"]").attr("selected",true);
			var id = $("#tbl_UW_consider_CL tbody>tr").eq(index).find("td:nth-child(2) select").attr('id');
			search_covCat2(id,obj,tbl,sl_contract,sl_policy,sl_product)
			
			$("#tbl_UW_consider_CL tbody>tr").eq(index).find("td:nth-child(2) select>option[value="+obj.cov_cat_lv_1+"]").attr("selected",true);
			$("#tbl_UW_consider_CL tbody>tr").eq(index).find("td:nth-child(3) select>option[value="+obj.cov_cat_lv_2+"]").attr("selected",true);
			$("#tbl_UW_consider_CL tbody>tr").eq(index).find("td:nth-child(4) select>option[value="+obj.cov_cat_lv_3+"]").attr("selected",true);
			$("#tbl_UW_consider_CL tbody>tr").eq(index).find("td:nth-child(5) select>option[value="+obj.is_gio+"]").attr("selected",true);
			$("#tbl_UW_consider_CL tbody>tr").eq(index).find("td:nth-child(6) select>option[value='"+obj.is_senior+"']").attr("selected",true);
			//$("#tbl_UW_consider_CL tbody>tr").eq(index).find("td:nth-child(7) select>option[value="+obj.filing_chan_id+"]").attr("selected",true);
			$("#tbl_UW_consider_CL tbody>tr").eq(index).find("td:nth-child(7) select>option[data-id="+obj.sale_chan_id+"]").attr("selected",true);
			var sale_chan_id = $("#tbl_UW_consider_CL tbody>tr").eq(index).find("td:nth-child(7) select>option[data-id="+obj.sale_chan_id+"]").val();
			searchPartnerAccumRule(sale_chan_id,$("#tbl_UW_consider_CL tbody>tr").eq(index).find("td:nth-child(8) select"),obj.sale_partner_code)
			//$("#tbl_UW_consider_CL tbody>tr").eq(index).find("td:nth-child(9) select>option[value="+obj.sale_partner_code+"]").attr("selected",true);
			row_id_uw++;
		}
			row_id++;
	}
	
	/*unw_hist_rule การตรวจสอบข้อมูล , IC , Sub */
	for(i in response.Tab_Provision[0].unwHistrule){
		var obj = response.Tab_Provision[0].unwHistrule[i];
		if( obj.Hist_type == $("#chk_check_data_CL1").val() && obj.Is_check == true){	//CLIAM
			$("#chk_check_data_CL1").prop("checked",true);
			$("#panel_oldCov_CL").show();
			if( obj.Is_restrict == true){
				$("#panel_Condition_oldCov").show();
				$("#haveCondition_oldCov").prop("checked",true);
				$("#sl_haveCondition_oldCov option[value="+obj.Restrict_type_1+"]").attr("selected",true);
				$("#sl_haveCondition_oldCov2 option[value="+obj.Condition_1+"]").attr("selected",true);
				$("#sl_haveCondition_oldCov3 option[value="+obj.Restrict_type_2+"]").attr("selected",true);
				$("#sl_haveCondition_oldCov4 option[value="+obj.Condition_2+"]").attr("selected",true);
				$("#sl_haveCondition_oldCov5 option[value="+obj.Restrict_type_3+"]").attr("selected",true);
				$("#sl_haveCondition_oldCov").attr("disabled",false);
				$("#sl_haveCondition_oldCov2").attr("disabled",false);
				$("#sl_haveCondition_oldCov3").attr("disabled",false);
				$("#sl_haveCondition_oldCov4").attr("disabled",false);
				$("#sl_haveCondition_oldCov5").attr("disabled",false);
				$("#sl_NewSA_oldCov option[value="+obj.New_sa_compare+"]").attr("selected",true);
				if(obj.New_sa_amt == ""){
					$("#amount_NewSA_oldCov").val(0);
				}else{
					$("#amount_NewSA_oldCov").val(numberWithCommas(obj.New_sa_amt));
				}

				/*if(obj.Condition_1 == "NONE"){
					$("#sl_haveCondition_oldCov3").attr("disabled",true);
				}*/
				if(obj.Restrict_type_2 == "NONE"){
					$("#sl_haveCondition_oldCov3").attr("disabled",true);
					$("#sl_haveCondition_oldCov4").attr("disabled",true);
				}
				/*if(obj.Condition_2 == "NONE"){
					$("#sl_haveCondition_oldCov4").attr("disabled",true);
				}*/
				if(obj.Restrict_type_3 == "NONE"){
					$("#sl_haveCondition_oldCov5").attr("disabled",true);
				}

				var sel1 = $("#sl_haveCondition_oldCov option:selected").text();
				var sel2 = $("#sl_haveCondition_oldCov3 option:selected").text();
				var sel3 = $("#sl_haveCondition_oldCov5 option:selected").text();
				var block = 1;
				disabled_haveCondition_oldCov(sel1,sel2,sel3,block);
			}else{
				$("#notCondition_oldCov").prop("checked",true);
			}
		}else if( obj.Hist_type == $("#chk_check_data_CL2").val() && obj.Is_check == true){		//IC
			$("#chk_check_data_CL2").prop("checked",true);
			$("#panel_IC_CL").show();
			if( obj.Is_restrict == true){
				$("#panel_Condition_IC").show();
				$("#haveCondition_IC").prop("checked",true);
				$("#sl_haveCondition_IC option[value="+obj.Restrict_type_1+"]").attr("selected",true);
				$("#sl_haveCondition_IC2 option[value="+obj.Condition_1+"]").attr("selected",true);
				$("#sl_haveCondition_IC3 option[value="+obj.Restrict_type_2+"]").attr("selected",true);
				$("#sl_haveCondition_IC4 option[value="+obj.Condition_2+"]").attr("selected",true);
				$("#sl_haveCondition_IC5 option[value="+obj.Restrict_type_3+"]").attr("selected",true);
				$("#sl_haveCondition_IC").attr("disabled",false);
				$("#sl_haveCondition_IC2").attr("disabled",false);
				$("#sl_haveCondition_IC3").attr("disabled",false);
				$("#sl_haveCondition_IC4").attr("disabled",false);
				$("#sl_haveCondition_IC5").attr("disabled",false);
				$("#sl_NewSA_IC option[value="+obj.New_sa_compare+"]").attr("selected",true);
				if(obj.New_sa_amt == ""){
					$("#amount_NewSA_IC").val(0);
				}else{
					$("#amount_NewSA_IC").val(numberWithCommas(obj.New_sa_amt));
				}
				
				/*if(obj.Condition_1 == "NONE"){
					$("#sl_haveCondition_IC3").prop("disabled",true);
				}*/
				if(obj.Restrict_type_2 == "NONE"){
					$("#sl_haveCondition_IC3").prop("disabled",true);
					$("#sl_haveCondition_IC4").prop("disabled",true);
				}
				/*if(obj.Condition_2 == "NONE"){
					$("#sl_haveCondition_IC4").prop("disabled",true);
				}*/
				if(obj.Restrict_type_3 == "NONE"){
					$("#sl_haveCondition_IC5").prop("disabled",true);
				}

				var sel1 = $("#sl_haveCondition_IC option:selected").text();
				var sel2 = $("#sl_haveCondition_IC3 option:selected").text();
				var sel3 = $("#sl_haveCondition_IC5 option:selected").text();
				var block = 2;
				disabled_haveCondition_oldCov(sel1,sel2,sel3,block);
			}else{
				$("#notCondition_IC").prop("checked",true);
			}
		}else if( obj.Hist_type == $("#chk_check_data_CL3").val() && obj.Is_check == true){		//SUB
			$("#chk_check_data_CL3").prop("checked",true);
			$("#panel_SubCov_CL").show();
			if( obj.Is_restrict == true){
				$("#panel_Condition_SubCov").show();
				$("#haveCondition_SubCov").prop("checked",true);
				$("#sl_haveCondition_SubCov option[value="+obj.Restrict_type_1+"]").attr("selected",true);
				$("#sl_haveCondition_SubCov2 option[value="+obj.Condition_1+"]").attr("selected",true);
				$("#sl_haveCondition_SubCov3 option[value="+obj.Restrict_type_2+"]").attr("selected",true);
				$("#sl_haveCondition_SubCov4 option[value="+obj.Condition_2+"]").attr("selected",true);
				$("#sl_haveCondition_SubCov5 option[value="+obj.Restrict_type_3+"]").attr("selected",true);
				$("#sl_haveCondition_SubCov").attr("disabled",false);
				$("#sl_haveCondition_SubCov2").attr("disabled",false);
				$("#sl_haveCondition_SubCov3").attr("disabled",false);
				$("#sl_haveCondition_SubCov4").attr("disabled",false);
				$("#sl_haveCondition_SubCov5").attr("disabled",false);
				$("#sl_NewSA_Sub option[value="+obj.New_sa_compare+"]").attr("selected",true);
				if(obj.New_sa_amt == ""){
					$("#amount_NewSA_Sub").val(0);
				}else{
					$("#amount_NewSA_Sub").val(numberWithCommas(obj.New_sa_amt));
				}

			/*	if(obj.Condition_1 == "NONE"){
					$("#sl_haveCondition_SubCov3").prop("disabled",true);
				}*/
				if(obj.Restrict_type_2 == "NONE"){
					$("#sl_haveCondition_SubCov3").prop("disabled",true);
					$("#sl_haveCondition_SubCov4").prop("disabled",true);
				}
				/*if(obj.Condition_2 == "NONE"){
					$("#sl_haveCondition_SubCov4").prop("disabled",true);
				}*/
				if(obj.Restrict_type_3 == "NONE"){
					$("#sl_haveCondition_SubCov5").prop("disabled",true);
				}
				
				var sel1 = $("#sl_haveCondition_SubCov option:selected").text();
				var sel2 = $("#sl_haveCondition_SubCov3 option:selected").text();
				var sel3 = $("#sl_haveCondition_SubCov5 option:selected").text();
				var block = 3;
				disabled_haveCondition_oldCov(sel1,sel2,sel3,block);
			}else{
				$("#notCondition_SubCov").prop("checked",true);
			}
		}
	}
	
	//ตารางทุนตรวจสุขภาพ
	for(i in response.Tab_Provision[0].unwHistMedSum){
		var obj_sum = response.Tab_Provision[0].unwHistMedSum[i];
		if( obj_sum.Hist_type == $("#chk_check_data_CL1").val()){	//CLAIM
			$("#tbl_capitalHealth_1_CL tbody>tr").remove();
		}else if( obj_sum.Hist_type == $("#chk_check_data_CL2").val()){		//IC
			$("#tbl_capitalHealth_2_CL tbody>tr").remove();
		}else if( obj_sum.Hist_type == $("#chk_check_data_CL3").val()){		//SUB
			$("#tbl_capitalHealth_3_CL tbody>tr").remove();
		}
	}
	var num_row = 1;
	var num_claim = 1;
	var num_ic = 1;
	var num_sub = 1;
	var num_seq = 0;
	for(i in response.Tab_Provision[0].unwHistMedSumDet){
		//var obj_sum = response.Tab_Provision[0].unwHistMedSum[i];
		var obj_sumDet = response.Tab_Provision[0].unwHistMedSumDet[i];
		
		var before_row1 = "";
		var before_row2 = "";
		var before_row3 = "";
		if($("#tbl_capitalHealth_1_CL tbody>tr").length > 0){
			before_row1 = response.Tab_Provision[0].unwHistMedSumDet[i-1];
		}
		if($("#tbl_capitalHealth_2_CL tbody>tr").length > 0){
			before_row2 = response.Tab_Provision[0].unwHistMedSumDet[i-1];
		}
		if($("#tbl_capitalHealth_3_CL tbody>tr").length > 0){
			before_row3 = response.Tab_Provision[0].unwHistMedSumDet[i-1];
		}
		//CLIAM
		if( obj_sumDet.Hist_type == $("#chk_check_data_CL1").val() && obj_sumDet.Seq != before_row1.Seq){	//CLAIM
			var row = "<tr id='tr_capitalHealth1_row"+num_claim+"' data-id='"+obj_sumDet.Seq+"' data-parent='1' data-group='"+obj_sumDet.Seq+"'>"+
					"<td class='text-center' id='imgOKcapitalHealth_"+num_claim+"' onclick='imgCheckbox(this.id);'><i class='glyphicon glyphicon-edit'></i></td>"+
					"<td class='text-center'><input type='text' class='form-control format_date' id='appStart_date_capitalHealth"+num_claim+"' onblur='checkappStartBlock1_CL (this.id);' placeholder='dd/mm/yyyy' onkeyup='keyup_validateDate(event,this.id);'"+
							"onclick='appStart_date(this.id);' value='' maxlength='10'></td>"+	
					"<td class='text-center'><input type='text' class='form-control format_date' id='appTo_date_capitalHealth"+num_claim+"' onblur='checkappStartBlock1_CL (this.id);' placeholder='dd/mm/yyyy' onkeyup='keyup_validateDate(event,this.id);'"+
							"onclick='appTo_date(this.id);' value='' maxlength='10'></td>"+	
					"<td class='text-right'><i class='glyphicon glyphicon-plus icon-blue-circle' id='number_capitalHealth"+num_claim+"' onclick='addRowChild_capitalHealth(this.id);'></i></td>"+	
					"<td class='text-right'><input type='number' id='capitalHealth_ageStart"+num_claim+"' class='form-control text-right' value='"+obj_sumDet.Min_age+"' onblur='clear_rowCoop(this.id);'/></td>"+	
					"<td class='text-right'><input type='number' id='capitalHealth_ageEnd"+num_claim+"' class='form-control text-right' value='"+obj_sumDet.Max_age+"' onblur='clear_rowCoop(this.id);' onchange='validate_ageTotalCapital(this.id,1);'/></td>"+	
					"<td class='text-center'><input type='text' id='capitalHealth_capital"+num_claim+"' class='autoComma form-control text-right' value='"+obj_sumDet.Min_sum_amt+"'/></td>"+	
				"</tr>"
			
			$("#tbl_capitalHealth_1_CL tbody").append(row);
			num_claim++;
			num_seq = 0;
		//CLIAM
		}else if(obj_sumDet.Hist_type == $("#chk_check_data_CL1").val() && obj_sumDet.Seq == before_row1.Seq){
			var num = num_claim+"_"+num_seq
			var row = "<tr id='tr_capitalHealth1_row"+num+"' data-id='"+num+"' data-parent='2' data-group='"+obj_sumDet.Seq+"'>"+
					"<td class='text-center'></td>"+
					"<td class='text-center'></td>"+	
					"<td class='text-center'></td>"+	
					"<td class='text-right'><i class='glyphicon glyphicon-minus icon_active icon-blue-circle' id='number_capitalHealth"+num+"' onclick='deleteRowChild_capitalHealth(this.id);'></i></td>"+
					"<td class='text-right'><input type='number' id='capitalHealth_ageStart"+num+"' class='form-control text-right' value='"+obj_sumDet.Min_age+"' onblur='clear_rowCoop(this.id);' disabled/></td>"+
					"<td class='text-right'><input type='number' id='capitalHealth_ageEnd"+num+"' class='form-control text-right' value='"+obj_sumDet.Max_age+"' onblur='clear_rowCoop(this.id);' onchange='validate_ageTotalCapital(this.id,1);'/></td>"+	
					"<td class='text-right'><input type='text' id='capitalHealth_capital"+num+"' class='autoComma form-control text-right' value='"+obj_sumDet.Min_sum_amt+"'/></td>"+
				"</tr>"
			$("#tbl_capitalHealth_1_CL tbody").append(row);
			num_seq++;
		}
		//IC
		else if( obj_sumDet.Hist_type == $("#chk_check_data_CL2").val() && obj_sumDet.Seq != before_row2.Seq){		//IC
			var row = "<tr id='tr_capitalHealth2_row"+num_ic+"' data-id='"+obj_sumDet.Seq+"' data-parent='1' data-group='"+obj_sumDet.Seq+"'>"+
					"<td class='text-center' id='imgOKcapitalHealthIC_"+num_ic+"' onclick='imgCheckbox(this.id);'><i class='glyphicon glyphicon-edit'></i></td>"+
					"<td class='text-center'><input type='text' class='form-control format_date' id='appStart_date_capitalHealthIC"+num_ic+"' onblur='checkappStartBlock2_CL (this.id);' placeholder='dd/mm/yyyy' onkeyup='keyup_validateDate(event,this.id);'"+
							"onclick='appStart_date(this.id);' value='' maxlength='10'></td>"+	
					"<td class='text-center'><input type='text' class='form-control format_date' id='appTo_date_capitalHealthIC"+num_ic+"' onblur='checkappStartBlock2_CL (this.id);' placeholder='dd/mm/yyyy' onkeyup='keyup_validateDate(event,this.id);'"+
							"onclick='appTo_date(this.id);' value='' maxlength='10'></td>"+	
					"<td class='text-right'><i class='glyphicon glyphicon-plus icon-blue-circle' id='number_capitalHealthIC"+num_ic+"' onclick='addRowChild_capitalHealth2(this.id);'></i></td>"+	
					"<td class='text-right'><input type='number' id='capitalHealthIC_ageStart"+num_ic+"' class='form-control text-right' value='"+obj_sumDet.Min_age+"' onblur='clear_rowCoop(this.id);'/></td>"+	
					"<td class='text-right'><input type='number' id='capitalHealthIC_ageEnd"+num_ic+"' class='form-control text-right' value='"+obj_sumDet.Max_age+"' onblur='clear_rowCoop(this.id);' onchange='validate_ageTotalCapital(this.id,2);'/></td>"+	
					"<td class='text-center'><input type='text' id='capitalHealthIC_capital"+num_ic+"' class='autoComma form-control text-right' value='"+obj_sumDet.Min_sum_amt+"'/></td>"+	
				"</tr>"
			
			$("#tbl_capitalHealth_2_CL tbody").append(row);
			num_ic++;
			num_seq = 0;
		//IC
		}else if(obj_sumDet.Hist_type == $("#chk_check_data_CL2").val() && obj_sumDet.Seq == before_row2.Seq){
			var num = num_ic+"_"+num_seq
			var row = "<tr id='tr_capitalHealth2_row"+num+"' data-id='"+num+"' data-parent='2' data-group='"+obj_sumDet.Seq+"'>"+
					"<td class='text-center'></td>"+
					"<td class='text-center'></td>"+	
					"<td class='text-center'></td>"+	
					"<td class='text-right'><i class='glyphicon glyphicon-minus icon_active icon-blue-circle' id='number_capitalHealth"+num+"' onclick='deleteRowChild_capitalHealth(this.id);'></i></td>"+
					"<td class='text-right'><input type='number' id='capitalHealthIC_ageStart"+num+"' class='form-control text-right' value='"+obj_sumDet.Min_age+"' onblur='clear_rowCoop(this.id);' disabled/></td>"+
					"<td class='text-right'><input type='number' id='capitalHealthIC_ageEnd"+num+"' class='form-control text-right' value='"+obj_sumDet.Max_age+"' onblur='clear_rowCoop(this.id);' onchange='validate_ageTotalCapital(this.id,2);'/></td>"+	
					"<td class='text-right'><input type='text' id='capitalHealthIC_capital"+num+"' class='autoComma form-control text-right' value='"+obj_sumDet.Min_sum_amt+"' /></td>"+
				"</tr>"
			$("#tbl_capitalHealth_2_CL tbody").append(row);
			num_seq++;
		}
		//SUB
		else if( obj_sumDet.Hist_type == $("#chk_check_data_CL3").val() && obj_sumDet.Seq != before_row3.Seq){		//SUB
			var row = "<tr id='tr_capitalHealth3_row"+num_sub+"' data-id='"+obj_sumDet.Seq+"' data-parent='1' data-group='"+obj_sumDet.Seq+"'>"+
					"<td class='text-center' id='imgOKcapitalHealthSub_"+num_sub+"' onclick='imgCheckbox(this.id);'><i class='glyphicon glyphicon-edit'></i></td>"+
					"<td class='text-center'><input type='text' class='form-control format_date' id='appStart_date_capitalHealthSub"+num_sub+"' onblur='checkappStartBlock3_CL (this.id);' placeholder='dd/mm/yyyy' onkeyup='keyup_validateDate(event,this.id);'"+
							"onclick='appStart_date(this.id);' value='' maxlength='10'></td>"+	
					"<td class='text-center'><input type='text' class='form-control format_date' id='appTo_date_capitalHealthSub"+num_sub+"' onblur='checkappStartBlock3_CL (this.id);' placeholder='dd/mm/yyyy' onkeyup='keyup_validateDate(event,this.id);'"+
							"onclick='appTo_date(this.id);' value='' maxlength='10'></td>"+	
					"<td class='text-right'><i class='glyphicon glyphicon-plus icon-blue-circle' id='number_capitalHealthSub"+num_sub+"' onclick='addRowChild_capitalHealth3(this.id);'></i></td>"+	
					"<td class='text-right'><input type='number' id='capitalHealthSub_ageStart"+num_sub+"' class='form-control text-right' value='"+obj_sumDet.Min_age+"' onblur='clear_rowCoop(this.id);'/></td>"+	
					"<td class='text-right'><input type='number' id='capitalHealthSub_ageEnd"+num_sub+"' class='form-control text-right' value='"+obj_sumDet.Max_age+"' onblur='clear_rowCoop(this.id);' onchange='validate_ageTotalCapital(this.id,3);'/></td>"+	
					"<td class='text-center'><input type='text' id='capitalHealthSub_capital"+num_sub+"' class='autoComma form-control text-right' value='"+obj_sumDet.Min_sum_amt+"'/></td>"+	
				"</tr>"
			
			$("#tbl_capitalHealth_3_CL tbody").append(row);
			num_sub++;
			num_seq = 0;
		}
		//SUB
		else if(obj_sumDet.Hist_type == $("#chk_check_data_CL3").val() && obj_sumDet.Seq == before_row3.Seq){
			var num = num_sub+"_"+num_seq
			var row = "<tr id='tr_capitalHealth3_row"+num+"' data-id='"+obj_sumDet.Seq+"' data-parent='2' data-group='"+obj_sumDet.Seq+"'>"+
					"<td class='text-center'></td>"+
					"<td class='text-center'></td>"+	
					"<td class='text-center'></td>"+	
					"<td class='text-right'><i class='glyphicon glyphicon-minus icon_active icon-blue-circle' id='number_capitalHealth"+num+"' onclick='deleteRowChild_capitalHealth(this.id);'></i></td>"+
					"<td class='text-right'><input type='number' id='capitalHealthSub_ageStart"+num+"' class='form-control text-right' value='"+obj_sumDet.Min_age+"' onblur='clear_rowCoop(this.id);' disabled/></td>"+
					"<td class='text-right'><input type='number' id='capitalHealthSub_ageEnd"+num+"' class='form-control text-right' value='"+obj_sumDet.Max_age+"' onblur='clear_rowCoop(this.id);' onchange='validate_ageTotalCapital(this.id,3);'/></td>"+	
					"<td class='text-right'><input type='text' id='capitalHealthSub_capital"+num+"' class='autoComma form-control text-right' value='"+obj_sumDet.Min_sum_amt+"'/></td>"+
				"</tr>"
			$("#tbl_capitalHealth_3_CL tbody").append(row);
			num_seq++;
		}
		num_row++;
		$(".autoComma").autoNumeric('init',{vMin: '0.00', vMax: '999999999.99'});
	}
	
	for(i in response.Tab_Provision[0].unwHistMedSum){
		var obj_sum = response.Tab_Provision[0].unwHistMedSum[i];
		if(obj_sum.Hist_type == $("#chk_check_data_CL1").val()){	//CLIAM
			$("#tbl_capitalHealth_1_CL tbody>tr").each(function(){
				if($(this).data('parent') == 1 && $(this).data('group') == obj_sum.Seq){
					$(this).find('td:nth-child(2) input').val(obj_sum.sale_eff_date)
					$(this).find('td:nth-child(3) input').val(obj_sum.sale_exp_date)
				}
			})
		}
		
		if(obj_sum.Hist_type == $("#chk_check_data_CL2").val()){	//IC
			$("#tbl_capitalHealth_2_CL tbody>tr").each(function(){
				if($(this).data('parent') == 1 && $(this).data('group') == obj_sum.Seq){
					$(this).find('td:nth-child(2) input').val(obj_sum.sale_eff_date)
					$(this).find('td:nth-child(3) input').val(obj_sum.sale_exp_date)
				}
			})
		}
		
		if(obj_sum.Hist_type == $("#chk_check_data_CL3").val()){	//SUB
			$("#tbl_capitalHealth_3_CL tbody>tr").each(function(){
				if($(this).data('parent') == 1 && $(this).data('group') == obj_sum.Seq){
					$(this).find('td:nth-child(2) input').val(obj_sum.sale_eff_date)
					$(this).find('td:nth-child(3) input').val(obj_sum.sale_exp_date)
				}
			})
		}
		
	}
	
	//ซื้อคู่กับแบบ
	var roundBuywidth = 1;
	for(i in response.Tab_Provision[0].unwHistExitProd){
		var obj = response.Tab_Provision[0].unwHistExitProd[i];
		var biz_code = "";
		$("#tbl_chooseBuyWith1_CL tbody>tr").each(function(){
			if(obj.Exist_prd_code == $(this).find('td:nth-child(1) input[type="hidden"]').val()){
				biz_code = $(this).find('td:nth-child(2) a').text();
			}
		})
		
		var row = "<tr><td class='verticalCenter text-center' id='imgOKbuyWith_main"+roundBuywidth+"' onclick='imgCheckbox(this.id);'><i class='glyphicon glyphicon-edit'></i></td>"+
					"<td class='verticalCenter text-center'>" +
						"<label>"+biz_code+"</label>" +
						"<input type='hidden' id='prd_code' value='"+obj.Exist_prd_code+"'>"+
					"</td>"+
				  "</tr>"
		if( obj.Hist_type == $("#chk_check_data_CL1").val()){	//CLAIM
			$("#tbl_buyWith1_CL tbody").append(row);
		}else if( obj.Hist_type == $("#chk_check_data_CL2").val()){		//IC
			$("#tbl_buyWith2_CL tbody").append(row);
		}else if( obj.Hist_type == $("#chk_check_data_CL3").val()){		//SUB
			$("#tbl_buyWith3_CL tbody").append(row);
		}
		roundBuywidth++;
	}
	
	/*ตารางหักค่าใช้จ่าย*/
	for(i in response.Tab_Provision[0].flpFee_arr){
		var obj = response.Tab_Provision[0].flpFee_arr[i];
		$("#tbl_deduct_cost tbody>tr").each(function(){
			if( obj.Fee_type == $(this).find('td:nth-child(1) input').val()){
				$("#tbl_deduct_cost :input").prop("disabled", false);
				$("#tbl_deduct_cost").css("opacity", "1");
				$(this).find('td:nth-child(1) input').attr("checked",true);
			}
		})
	}
	
	/*การตรวจสุขภาพ และการตรวจ Anti-HIV (ตามทุน)*/
	for(i in response.Tab_Provision[0].appenDixProduct){
		$("#rd_health_check_CL1").prop("checked",true);
		$("#tbl_health_check_CL").show();
		var obj = response.Tab_Provision[0].appenDixProduct[i];
		$("#tbl_health_check_CL tbody>tr").each(function(){
			if( obj.Appendix_code == $(this).find('td:nth-child(1) input').val()){
				$(this).find('td:nth-child(1) input').prop("checked",true);
			}
		})
	}
	
	/*substd_type*/
	$("#rd_increase_premium_CL1").prop("checked",false)
	$("#rd_increase_premium_CL2").prop("checked",true)
	for(i in response.Tab_Provision[0].unwSubstdType){
		var obj = response.Tab_Provision[0].unwSubstdType[i];
		$("#div_chk_increase_premium div").each(function(){
			if( obj.substd_type == $(this).find('input').val()){
				$("#rd_increase_premium_CL1").prop("checked",true)
				$(this).find('input').prop("checked",true)
			}
		})
	}
	
	/*pol_issue_unit*/
	$("#rd_approval_branch_CL1").prop("checked",false)
	$("#rd_approval_branch_CL2").prop("checked",false)
	for(i in response.Tab_Provision[0].unwPolIssueUnit){
		var obj = response.Tab_Provision[0].unwPolIssueUnit[i];
		if(obj.Pol_issue_unit == $("#rd_approval_branch_CL1").val()){
			$("#rd_approval_branch_CL1").prop("checked",true)
		}else if(obj.Pol_issue_unit == $("#rd_approval_branch_CL2").val()){
			$("#rd_approval_branch_CL2").prop("checked",true)
		}
	}
	
	/*COOP ไม่ได้ใช้งาน */
	/*for(i in response.Tab_Provision[0].Coop){
		var obj = response.Tab_Provision[0].Coop[i];
		if(obj.Max_em != ""){
			$("#tbl_increaseCOOP_premium_CL tbody>tr").eq(i).find('td:nth-child(3) input[type="text"]').val(obj.Max_em)
		}else{
			$("#tbl_increaseCOOP_premium_CL tbody>tr").eq(i).find('td:nth-child(3) input[type="text"]').val("0.00")
		}
		if(obj.Master_policy != ""){
			$("#tbl_COOP_masterPolicy_CL tbody>tr").eq(i).find('td:nth-child(3) input[type="text"]').val(obj.Master_policy)
		}else{
			$("#tbl_COOP_masterPolicy_CL tbody>tr").eq(i).find('td:nth-child(3) input[type="text"]').val(0)
		}
	}*/
	
	/*validate tab ข้อกำหนด*/
	validate_input6_cl();
	validate_input7_cl();
	validate_input8_cl();
	validate_input9_cl();
	validate_input10_cl();
	
	//Benz set Save Clone 29-10-2019
	/* if (type == "Clone") {
		 datasave_warrantyTerms();
	}*/
}

//Tab Approved
function bt_approved(claim){
	var cov_code = $("#code_Coverage_CL").val();
	var name_TH = $("#approve_nameTH_CL").val();
	var name_EN = $("#approve_nameEN_CL").val();
	var status_policy = $("#status_policy").val();
	var groupName = $("#groupName").val();
	var cov_code_for_JSON=$("#prd_code_base_PM").val();
	var status = "";
	var remark_noApproved = "";
	var remark_update = "";
	
	var status_th="";

	if(claim == "request"){
		status 		= "request_for_approve";		
		status_th	= "ขออนุมัติ";
		$("#div_request_approveCL button").addClass("disabledAll");
	}else if(claim == "approved"){
		status 		= "approved";
		status_th	= "อนุมัติ";
		$("#div_approveCL>div>button").addClass("disabledAll");
	}else if(claim == "not_approved"){
		status 		= "rejected";
		status_th	= "ไม่อนุมัติ";
		remark_noApproved = $('#comment_notApprovedCL').val();
		$("#div_approveCL>div>button").addClass("disabledAll");
	}else if(claim == "request_update"){
		status 		= "request_update";
		status_th	= "ขอแก้ไข";
		remark_update = $('#comment_RequestEditCL').val();
		$("#div_request_editCL button").addClass("disabledAll");
	}else if(claim == "approved_update"){
		status 		= "update";	
		status_th	= "อนุมัติแก้ไข";
		$("#div_approveEditCL>div>button").addClass("disabledAll");
	}else if(claim == "not_approved_update"){
		status 		= "approved_update";
		status_th	= "ไม่อนุมัติแก้ไข";
		remark_noApproved = $('#comment_notApprovedEditCL').val();
		$("#div_approveEditCL>div>button").addClass("disabledAll");
	}
		
	var data_json = {
		"method" : "check_Approved",	
	    "passInsurance": cov_code,
    	"name_TH": name_TH,
    	"name_EN": name_EN,
    	"groupName": groupName,
    	"status_policy": status_policy,
    	/*"remark_user": remark_user,*/
    	"status": status,
    	"remark_noApproved": remark_noApproved,
    	"remark_update": remark_update
		     
	}
	
	
	 $.ajax({
		 type: "POST",
		 url: "ProductCL_SaveData_Servlet", 
		 data: data_json,
		 success: function(response){
			console.log(response);
			
			/***  CODE FOR PREPARE AND SEND MAIL  ****/
		
			var prepareEmail_data = [];
			objEmail = {};
			objEmail["requestApprove"] 		=status_th;
			objEmail["manuName"] 			="แบบประกันหลัก";
			objEmail["manuNameEng"] 		="baseplan";
			objEmail["empID"] 				=$("#empID").val();
			objEmail["empNameHide"] 		=$("#empNameHide").val();
			objEmail["departmentID"] 		=$("#departmentID").val();
			objEmail["departmentHide"] 		=$("#departmentHide").val();
			objEmail["cov_code"] 			=cov_code;
			objEmail["name_TH"] 			=name_TH;
			objEmail["name_EN"] 			=name_EN;
			
			prepareEmail_data.push(objEmail);
			
			var data_json2 = {
		        	"method": "send_Email_Only_Product",
		        	"OptionEmail": "1",
		        	"prepareEmail_data": JSON.stringify(prepareEmail_data), 
			}
			
			
			$.ajax({
				 type: "POST",
				 url: "UW_Email_Servlet", 
				 data: data_json2,
				 success: function(response){
					console.log(response);
					if(claim == "approved" 
					&& (groupName == "POC (1740)" || groupName == "POC_Test")){
						/*** START CODE FOR PREPARE GEN JSON  ****/
						var Appendix_code ="";
						var prepareGenJSON_data = [];
						var prd_code = $("#pass_Insurance_product_cl").val();
						
						$("#tbl_health_check_CL tbody>tr").each(function() {
							if ($(this).find('td:nth-child(1) input ').is(':checked')) {
								Appendix_code=$(this).find('td:nth-child(2)').text();
							}
						});
						
						$("#tb_PM_Rate tbody>tr").each(function() {
							
								cov_code_for_JSON=$(this).find('td:nth-child(1)').text();
							
						});
						var data_json3 = {
					        	"method"		: "GenJsonProduct",
					        	"Prd_code"		: prd_code,
					        	"Cov_code"		: cov_code_for_JSON,
					        	"Appendix_code"	: Appendix_code,
					        	"groupName"		: groupName,
						}
						$.ajax({
							 type: "POST",
							 url: "Center_GenJSON_Product_Servlet", 
							 data: data_json3,
							 success: function(response){
								console.log(response);
							 }
						 });
						console.log("dataJSON",data_json3)
						/*** END CODE FOR PREPARE GEN JSON  ****/	
					}
					
				 }
			 });
			console.log("dataEmail",data_json2)

		/*** END CODE FOR PREPARE AND SEND MAIL  ****/
			
			
		
		
		}
	 });
	console.log("data",data_json)
	
	
		
		
	
}

function openFileTextProduct_CL(file_name,file_ref,tableCol,tb_name,modal_name){
	
	
	var file_data = "";
	file_data = openFile_target(file_name, file_ref, 'txt');
	
	var tableName = tb_name;
	  $("#"+tableName+" tbody>tr").remove();
	  var textRow = file_data.split('\n');
      var textLength = textRow.length - 1;
      
      if(textLength > 50){
    	  textLength = 50;
      }else{
    	  textLength = textLength;
      }

      var col1 = "";
	  var col2 = "";
	  var col3 = "";
	  var col4 = "";
	  var col5 = "";
	  var col6 = "";
	  var tableRow = "";
      for(var i=0; i<textLength; i++ ) {
    
    	  if(tableCol == 3){
    		  col1 = textRow[i].substr(0,3);
    		  col2 = textRow[i].substr(3,2);
    		  col3 = textRow[i].substr(5,2);

    		  tableRow += "<tr>"+
				"<td class='text-center'>"+col1+"</td>"+
				"<td class='text-center'>"+col2+"</td>"+
				"<td class='text-center'>"+col3+"</td>"+
				"</tr>";
 
    	  }else if(tableCol == 5){
    		  col1 = textRow[i].substr(0,2);
    		  col2 = textRow[i].substr(2,1);
    		  col3 = textRow[i].substr(3,2);
    		  col4 = textRow[i].substr(5,2);
    		  col5 = textRow[i].substr(7,6);
    		  
    		  tableRow += "<tr>"+
				"<td class='text-center'>"+col1+"</td>"+
				"<td class='text-center'>"+col2+"</td>"+
				"<td class='text-right'>"+col3+"</td>"+
				"<td class='text-right'>"+col4+"</td>"+
				"<td class='text-right'>"+col5+"</td>"+
				"</tr>";
     		  
    	  }else if(tableCol == 6){
    		   col1 = textRow[i].substr(0,3);
    		   col2 = textRow[i].substr(3,2);
    		   col3 = textRow[i].substr(5,1);
    		   col4 = textRow[i].substr(6,2);
    		   col5 = textRow[i].substr(8,2);
    		   col6 = textRow[i].substr(10,6);
    		  
    		   tableRow += "<tr>"+
				"<td class='text-center'>"+col1+"</td>"+
				"<td class='text-center'>"+col2+"</td>"+
				"<td class='text-right'>"+col3+"</td>"+
				"<td class='text-right'>"+col4+"</td>"+
				"<td class='text-right'>"+col5+"</td>"+
				"<td class='text-right'>"+col6+"</td>"+
				"</tr>";  
    	   /*การคำนวณเบี้ยประกัน*/
    	  }else if(tableCol == 61){
   		   col1 = textRow[i].substr(0,14);
		   col2 = textRow[i].substr(14,1);
		   col3 = textRow[i].substr(15,1);
		   col4 = textRow[i].substr(16,2);
		   col5 = textRow[i].substr(18,1);
		   col6 = textRow[i].substr(19,5);
		  
		   tableRow += "<tr>"+
			"<td class='text-center'>"+col1+"</td>"+
			"<td class='text-center'>"+col2+"</td>"+
			"<td class='text-right'>"+col3+"</td>"+
			"<td class='text-right'>"+col4+"</td>"+
			"<td class='text-right'>"+col5+"</td>"+
			"<td class='text-right'>"+col6+"</td>"+
			"</tr>";    		  
    	  }else if(tableCol == 41){
   		   col1 = textRow[i].substr(0,2);
		   col2 = textRow[i].substr(2,1);
		   col3 = textRow[i].substr(3,2);
		   col4 = textRow[i].substr(5,6);
		  
		   tableRow += "<tr>"+
			"<td class='text-center'>"+col1+"</td>"+
			"<td class='text-center'>"+col2+"</td>"+
			"<td class='text-right'>"+col3+"</td>"+
			"<td class='text-right'>"+col4+"</td>"+
			"</tr>";    
		  
		   $("#download_tb_input_fileSee_modal_pmRate").attr("onclick", "openFile_target('"+file_name+"','"+file_ref+"','txt_download')");
			
		   $("#download_tb_input_fileSee_modal_NAR_inner").attr("onclick", "openFile_target('"+file_name+"','"+file_ref+"','txt_download')");
		   $("#download_tb_input_fileSee_modal_pmRate_inner").attr("onclick", "openFile_target('"+file_name+"','"+file_ref+"','txt_download')");
			
		   
    	  }else if(tableCol == 51){
      		   col1 = textRow[i].substr(0,3);
    		   col2 = textRow[i].substr(3,2);
    		   col3 = textRow[i].substr(5,1);
    		   col4 = textRow[i].substr(6,2);
    		   col5 = textRow[i].substr(8,6);
    		  
    		   tableRow += "<tr>"+
    			"<td class='text-center'>"+col1+"</td>"+
    			"<td class='text-center'>"+col2+"</td>"+
    			"<td class='text-center'>"+col3+"</td>"+
    			"<td class='text-right'>"+col4+"</td>"+
    			"<td class='text-right'>"+col5+"</td>"+
    			"</tr>";    		  
          }else if(tableCol == 31){
    		  col1 = textRow[i].substr(0,2);
    		  col2 = textRow[i].substr(2,3);
    		  col3 = textRow[i].substr(5,7);

    		  tableRow += "<tr>"+
				"<td class='text-center'>"+col1+"</td>"+
				"<td class='text-center'>"+col2+"</td>"+
				"<td class='text-center'>"+col3+"</td>"+
				"</tr>";
    		  
    		  $("#download_tb_inputSA_CL_Rate").attr("onclick", "openFile_target('"+file_name+"','"+file_ref+"','txt_download')");
				
    		  
    	  }else if(tableCol == 42){
      		   col1 = textRow[i].substr(0,5);
    		   col2 = textRow[i].substr(5,1);
    		   col3 = textRow[i].substr(6,2);
    		   col4 = textRow[i].substr(8,8);
    		  
    		   tableRow += "<tr>"+
    			"<td class='text-center'>"+col1+"</td>"+
    			"<td class='text-center'>"+col2+"</td>"+
    			"<td class='text-right'>"+col3+"</td>"+
    			"<td class='text-right'>"+col4+"</td>"+
    			"</tr>";    		  
          }else if(tableCol == 52){
      		   col1 = textRow[i].substr(0,4);
    		   col2 = textRow[i].substr(4,8);
    		   col3 = textRow[i].substr(12,2);
    		   col4 = textRow[i].substr(14,1);
    		   col5 = textRow[i].substr(15,5);
    		  
    		   tableRow += "<tr>"+
    			"<td class='text-center'>"+col1+"</td>"+
    			"<td class='text-center'>"+col2+"</td>"+
    			"<td class='text-center'>"+col3+"</td>"+
    			"<td class='text-right'>"+col4+"</td>"+
    			"<td class='text-right'>"+col5+"</td>"+
    			"</tr>";    		  
          }else if(tableCol == 62){
        	  	col1 = textRow[i].substr(0,4);
   		   		col2 = textRow[i].substr(4,1);
   		   		col3 = textRow[i].substr(5,4);
	   		   col4 = textRow[i].substr(9,2);
	   		   col5 = textRow[i].substr(11,6);
	   		   col6 = textRow[i].substr(17,1);
   		  
	   		   tableRow += "<tr>"+
	   			"<td class='text-center'>"+col1+"</td>"+
	   			"<td class='text-center'>"+col2+"</td>"+
	   			"<td class='text-center'>"+col3+"</td>"+
	   			"<td class='text-center'>"+col4+"</td>"+
	   			"<td class='text-center'>"+col5+"</td>"+
	   			"<td class='text-center'>"+col6+"</td>"+
    			"</tr>";    	
          }else if(tableCol == 53){
      		   col1 = textRow[i].substr(0,4);
    		   col2 = textRow[i].substr(4,1);
    		   col3 = textRow[i].substr(5,5);
    		   col4 = textRow[i].substr(10,2);
    		   col5 = textRow[i].substr(12,6);
    		  
    		   tableRow += "<tr>"+
    			"<td class='text-center'>"+col1+"</td>"+
    			"<td class='text-center'>"+col2+"</td>"+
    			"<td class='text-center'>"+col3+"</td>"+
    			"<td class='text-center'>"+col4+"</td>"+
    			"<td class='text-center'>"+col5+"</td>"+
    			"</tr>";    		  
          }else if(tableCol == 12){
      		   col1 = textRow[i].substr(0,4);
    		   col2 = textRow[i].substr(4,1);
    		   col3 = textRow[i].substr(5,2);
    		   col4 = textRow[i].substr(7,2);
    		   col5 = textRow[i].substr(9,5);
    		   col6 = textRow[i].substr(14,5);
    		   col7 = textRow[i].substr(19,5);
    		   col8 = textRow[i].substr(24,5);
    		   col9 = textRow[i].substr(29,2);
    		   col10 = textRow[i].substr(31,3);
    		   col11 = textRow[i].substr(34,5);
    		   col12 = textRow[i].substr(39,1);
    		  
    		   tableRow += "<tr>"+
    			"<td class='text-center'>"+col1+"</td>"+
    			"<td class='text-center'>"+col2+"</td>"+
    			"<td class='text-center'>"+col3+"</td>"+
    			"<td class='text-center'>"+col4+"</td>"+
    			"<td class='text-center'>"+col5+"</td>"+
    			"<td class='text-center'>"+col6+"</td>"+
    			"<td class='text-center'>"+col7+"</td>"+
    			"<td class='text-center'>"+col8+"</td>"+
    			"<td class='text-center'>"+col9+"</td>"+
    			"<td class='text-center'>"+col10+"</td>"+
    			"<td class='text-center'>"+col11+"</td>"+
    			"<td class='text-center'>"+col12+"</td>"+
    			"</tr>";    		  
          }else if(tableCol == 13){
      		   col1 = textRow[i].substr(0,4);
    		   col2 = textRow[i].substr(4,3);
    		   col3 = textRow[i].substr(7,1);
    		   col4 = textRow[i].substr(8,2);
    		   col5 = textRow[i].substr(10,2);
    		   col6 = textRow[i].substr(12,5);
    		   col7 = textRow[i].substr(17,5);
    		   col8 = textRow[i].substr(22,5);
    		   col9 = textRow[i].substr(27,5);
    		   col10 = textRow[i].substr(32,2);
    		   col11 = textRow[i].substr(34,3);
    		   col12 = textRow[i].substr(37,5);
    		   col13 = textRow[i].substr(42,1);
    		  
    		   tableRow += "<tr>"+
    			"<td class='text-center'>"+col1+"</td>"+
    			"<td class='text-center'>"+col2+"</td>"+
    			"<td class='text-center'>"+col3+"</td>"+
    			"<td class='text-center'>"+col4+"</td>"+
    			"<td class='text-center'>"+col5+"</td>"+
    			"<td class='text-center'>"+col6+"</td>"+
    			"<td class='text-center'>"+col7+"</td>"+
    			"<td class='text-center'>"+col8+"</td>"+
    			"<td class='text-center'>"+col9+"</td>"+
    			"<td class='text-center'>"+col10+"</td>"+
    			"<td class='text-center'>"+col11+"</td>"+
    			"<td class='text-center'>"+col12+"</td>"+
    			"<td class='text-center'>"+col13+"</td>"+
    			"</tr>";    		  
          }else if(tableCol == 69){
    		   	col1 = textRow[i].substr(0,4);
    		   	col2 = textRow[i].substr(4,2);
    		   	col3 = textRow[i].substr(6,1);
    		   	col4 = textRow[i].substr(7,2);
    		   	col5 = textRow[i].substr(9,2);
    		   	col6 = textRow[i].substr(11,6);
    			col7 = textRow[i].substr(17,1);
    		   	tableRow += "<tr>"+
    		  	"<td class='text-center'>"+col1+"</td>"+
    			"<td class='text-center'>"+col2+"</td>"+
    			"<td class='text-right'>"+col3+"</td>"+
    			"<td class='text-right'>"+col4+"</td>"+
    			"<td class='text-right'>"+col5+"</td>"+
    			"<td class='text-right'>"+col6+"</td>"+
    			"<td class='text-right'>"+col7+"</td>"+
    			
    			"</tr>";   
    		   	
    		    $("#download_tb_input_fileSee_modal_NAR").attr("onclick", "openFile_target('"+file_name+"','"+file_ref+"','txt_download')");
    			  
    	  }else if(tableCol == 70){
    		   	col1 = textRow[i].substr(0,4);
    		   	col2 = textRow[i].substr(4,2);
    		   	col3 = textRow[i].substr(6,2);
    		   	col4 = textRow[i].substr(8,2);
    		   	col5 = textRow[i].substr(10,4);
    		   
    		   	tableRow += "<tr>"+
    		  	"<td class='text-center'>"+col1+"</td>"+
    			"<td class='text-center'>"+col2+"</td>"+
    			"<td class='text-right'>"+col3+"</td>"+
    			"<td class='text-right'>"+col4+"</td>"+
    			"<td class='text-right'>"+col5+"</td>"+
    			
    			"</tr>";   
    		   	$("#download_tb_input_fileSee_modal_NAR_ASA").attr("onclick", "openFile_target('"+file_name+"','"+file_ref+"','txt_download')");
    			
    	  }
    	  
    	 /* $("#"+tableName+" tbody>tr").remove();  */
    	 
      }

      $("#"+tableName+">tbody").append(tableRow);	    
      
      if ($.fn.dataTable.isDataTable( "#"+tableName ) ) {   	  
      	var table = $("#"+tableName).DataTable();
      		
      		table.destroy();
      	
      		$("#"+tableName+">tbody").empty();
      		$("#"+tableName+">tbody").append(tableRow);	 
      		$("#"+tableName).DataTable({"ordering": false,"paging": false,"bInfo" : false, 
    			  "oLanguage": {
    		      "sSearch": "ค้นหา: "
    		    }
    		  });
      		
        }else{      
      	 
      	  $("#"+tableName).DataTable({"ordering": false,"paging": false,"bInfo" : false, 
  			  "oLanguage": {
  		      "sSearch": "ค้นหา: "
  		    }
  		  });
      	 
        }
      
     	    	  	
     
     
      
      $("#"+modal_name+" .modal-header>h4>span").html(file_name);
      $("#"+modal_name).modal("show");
     
      /**/
	
}

function cover_fomula(e){
	
	var cov_code = $(e).parent().parent().find('td:nth-child(1) label').text();
	var result = $(e).val();
	
	$("#tb_policyholder tbody>tr").each(function(){
		if( cov_code == $(this).find('td:nth-child(1) #cov_code_policyValue').val()){
			$(this).find('td:nth-child(5) option[value='+result+']').attr("selected",true)
		}
	})
	
}

/*****Max Fix Benefit 21/11/2019*****/
// ผลปะโยชน์ความคุ้มครอง
var row_benefit = 2;
function showcase_benefit_CL(response, type, cov_code, prd_code_rider){

	var html = "";
	var html2 = "";
	var html3 = "";
	var htmlBase = "";
	var main_code = "";
	var font_color = "";
	var row_die = "";
	var row_permanent_disability = "";
	var row_BC = "";
	var j = 0;

	
	
	// Base plan
	if(type == "B"){
		var object_tblBase = response.Tab_Benefits[0];
		html += "<li class='active' id='li_bnf_base_cl'><a data-toggle='tab' href='#menu_ProductBnf1_CL' class='purple'>"+cov_code+"</a></li>"
		htmlBase = "";
		
		/* เสียชีวิต */
		if(object_tblBase.die.length > 0){
		htmlBase += "<li id='die_li' class='active'><a data-toggle='tab' href='#prd_bnf_CL1'>เสียชีวิต</a></li>";
		
		row_die +=	"<table id='tab_die_bnf_base'>"+
			"<tr>"+
			"<td>"+
				"<div style='padding-bottom: 64px'> "+
				"<table class='table table-bordered disabledAll_NotFade' width='250' id='tbody_dieL_Product_CL' style='width: 470px;'>"+
				"<thead>"+
				"<tr>"+
				"<td width='165px' colspan='2' rowspan='2' style='vertical-align: middle;height: 74px;' class='text-center borderBlack bg-primary'>From</td>"+
				"<td width='165px' colspan='2' rowspan='2' style='vertical-align: middle;' class='text-center borderBlack bg-primary'>To</td>"+
				"</tr><tr></tr><thead>"+	
				"<tbody class='disabledAll_NotFade'>"+
				"</tbody>"+							
				"</table>"+
				"</div>"+
			"</td>"+
			"<td>"+
				"<div class='search-table-outter' style='padding-bottom: 50px; width:23%;' id='baseDieTable_R_CL'>"+
					"<table class='table table-bordered disabledAll_NotFade' id='tbody_dieR_Product_CL' style='width: 1350px;'>"+
					"<thead>"+
					"<tr>"+
					"<td width='700px' colspan='9' class='text-center borderBlack bg-primary'>เสียชีวิต</td>"+
					"<td width='300px' colspan='3' rowspan='2' class='text-center borderBlack bg-primary' style='vertical-align: middle; height: 74px;'>อุบัติเหตุ</td>"+
					"<td width='300px' colspan='3' rowspan='2' class='text-center borderBlack bg-primary' style='vertical-align: middle;'>อุบัติเหตุสาธารณะ</td>"+				
					"</tr>"+	
					"<tr>"+
					"<td width='70px' class='text-center borderBlack bg-primary'></td>"+
					"<td width='140px' colspan='2' class='text-center borderBlack bg-primary'>SA (%)</td>"+		
					"<td width='140px' colspan='2' class='text-center borderBlack bg-primary'>Premium (%)</td>"+
					"<td width='70px' style='white-space: nowrap;' class='text-center borderBlack bg-primary'>Include EM</td>"+
					"<td width='140px' colspan='2' style='white-space: nowrap;' class='text-center borderBlack bg-primary'>CV/PV บำนาญ (%)</td>"+		
					"<td width='140px' class='text-center borderBlack bg-primary'>Other</td>"+	
					"</tr>"+
					"</thead>"+
						"<tbody class='disabledAll_NotFade'> "+
						"</tbody>"+
				"</table>"+
				"</div>"+
			"</tr>"+
		"</table>"+
			"</div>"+
			"</tr>"+
			"</table>"
//			"<div id='DeathExceptionCL'>"+
//			"<div class='text-center' style='padding: 20px 0'></div>"+
//			"<div id='div_DeathExceptionCL'>"+	
//				"<table class='table table-bordered borderBlack' id='tbl_DeathException_Product_CL' style='width:100%;'>"+
//					"<thead>"+
//						"<tr>"+	
//							"<th class='text-center bg-primary borderBlack' width='5' style='vertical-align: middle;'>ลำดับ</th>"+							
//							"<th class='text-center verticalCenter bg-primary borderBlack' width='400'>รายการข้อยกเว้นการจ่ายเงินทดแทนในกรณีอุบัติเหตุ</th>"+							
//						"</tr>"+
//					"</thead>html"+
//					"<tbody class='disabledAll_NotFade'>"+
//					"</tbody>"+					
//				"</table>"+	
//			"</div>"+
//			"<div class='text-center' style='padding: 10px 0'></div>"+
//			"</div>";
		
		$("#tabBenefitProduct_CL").prepend(html);
		$("#tabBenefitBasePlan_CL").append(htmlBase);
		$("#prd_bnf_CL1").append(row_die)	
		}
		
		/* ทุพพลภาพถาวรสิ้นเชิง */
		if(object_tblBase.permanent_disability.length > 0){
		htmlBase = "";
		htmlBase += "<li id='permanent_disability_li' class='active'><a data-toggle='tab' href='#prd_bnf_CL2'>ทุพพลภาพถาวรสิ้นเชิง</a></li>";
		
		row_permanent_disability +=	"<table width='100%' id='table_permanent_disability_bnf_base' class='table table-bordered borderBlack' >"+
			"<thead>"+
			"<tr>"+
				"<th width='25px' class='text-center bg-primary borderBlack'></th>"+
				"<th width='50px' class='text-center bg-primary borderBlack' style='vertical-align: middle;'>เลือก</th>"+					
				"<th width='250px' class='text-center verticalCenter bg-primary borderBlack'>ทุพพลภาพถาวรสิ้นเชิง</th>"+
				"<th width='50px' class='text-center verticalCenter bg-primary borderBlack'>จำนวน %</th>"+
			"</tr>"+
			"</thead>"+
			"<tbody class='disabledAll_NotFade'> "+
			"</tbody>"+
		"</table>"
		
		$("#tabBenefitBasePlan_CL").append(htmlBase);
		$("#prd_bnf_CL2").append(row_permanent_disability)	
		}
		
		if(object_tblBase.die.length > 0){
			$("#prd_bnf_CL1").addClass("in active");
			$("#die_li").addClass('active');
			
			$("#prd_bnf_CL2").removeClass("in active");
			$("#permanent_disability_li").removeClass('active');
		}
		
		if(object_tblBase.die.length == 0 && object_tblBase.permanent_disability.length > 0){
			$("#prd_bnf_CL1").removeClass("in active");
			$("#die_li").removeClass('active');
			
			$("#prd_bnf_CL2").addClass("in active");
			$("#permanent_disability_li").addClass('active');
		}
	}

	// Rider
	if(type != "B"){
		
		var header_cov_code = "";
		if(type == "R" || type == "E"){
			header_cov_code = cov_code;
		}else{
			header_cov_code = prd_code_rider;
		}
		
		var rider_code = "";
		if(type == "R" || type == "E"){
			rider_code = cov_code;
		}else{
			rider_code = prd_code_rider;
		}
		
		if(type == "E"){
			main_code = main_cov;
			font_color = "yellow";
		}else{
			main_code = "";
			font_color = "green";
		}
		
		var obj_bnf = response.Tab_Benefit[0];
		var obj_bnf_check = response.Tab_Benefit_Check;

		html += "<li id='bnf_"+rider_code+"_CL' data-id='bnf_"+prd_code_rider+"_CL' data-main='"+main_code+"'><a data-toggle='tab' href='#menu_ProductBnf2_CL' onclick=\"choose_bnf_content_CL('"+type+"','"+rider_code+"');\" class='"+font_color+"'>"+header_cov_code+"</a></li>"

		html3 += "<div id='bnf_rider_"+rider_code+"' class='benefRider_CL' style='display:none'>"+
				 	"<div id='term_box_"+rider_code+"' class='term_boxpanel'>";
		
		if(obj_bnf_check.length != 0){

		html3 += "<div id='benefitDetail"+rider_code+"_CL' style='width: 98%; margin: auto; padding-top: 20px; border-bottom: 1px solid #ddd;''>"+
					"<ul class='nav nav-tabs' id='tabBenefitRider_"+rider_code+"_CL'></ul>"+
				 "</div>";
						
		}
			"</div>"+
		"</div>";
				
		$("#tabBenefitRider_CL").append(html3);
		
		if(response.Tab_Benefit.length > 0){
			
			
			for(i in response.Tab_Benefit){
				var obj = response.Tab_Benefit[i];
				var bnf_id = obj[0].benefit_item.item_name;
				
					html2 += "<li id='tabBC_0"+i+"_"+rider_code+"_CL'><a data-toggle='tab' style='display: block'  onclick=\"show_bnf_content_CL('BC"+i+"_"+rider_code+"_CL','"+rider_code+"');\" id='aBC"+i+"_CL'>"+bnf_id+"</a></li>";
					j++;
			
					
			}
			$("#tabBenefitRider_"+rider_code+"_CL").append(html2);
			$("#tabBC_00_"+rider_code+"_CL").addClass("active in");
			
			/*table*/
			var row = "";
			var flag = false;
			var num = 0;
			
			for(i in response.Tab_Benefit){
			var obj = response.Tab_Benefit[i];
			var bnf_id = obj[0].benefit_item.item_name;	
			var bnf_item_id = obj[0].benefit_item.bnf_item_id;	
			
			/*bnf name*/
			var bnf_name = "";
			for(kk in obj_bnf_check){
				var bnf_code = obj_bnf_check[kk].bnf_Code;
				if(bnf_id == bnf_code){
					bnf_name = obj_bnf_check[kk].name_th;
				}
			}
			

			if(bnf_id == "BC_CL_DDR_01"){
				flag = true;
			}else{
				flag = false;
			}
			
			row = "<div class='tab-content' id='tab_content_BC_0"+i+"_"+rider_code+"_CL' data-name='"+bnf_id+"' data-flag='"+flag+"' data-id='BC_0"+i+"_"+rider_code+"_CL'>"+
			"<div id='BC"+i+"_"+rider_code+"_CL' class='tab-pane'>"+
			"<input type='hidden' id='hidden_BC_0"+i+"_CL' value='"+bnf_item_id+"'>"+
			"<input type='hidden' id='flag_BC_0"+i+"_CL' value='"+bnf_item_id+"'>"+
			"<div class='heading1 text-center' style='padding: 20px 0'>"+bnf_id+" - "+bnf_name+"</div>";
//			"<div class='text-center' style='padding: 20px 0'></div>";

			row += "<div class='text-center' style='padding: 30px 0'></div>"+
					"<div class='scroll_benefitTab_rider'>"+
					"<table class='table table-bordered borderBlack' id='tbl_BC_0"+i+"_"+rider_code+"_CL' style='width:2500px;'>"+							
						"<thead>"+
							"<tr>"+									
								"<th rowspan='2' class='text-center bg-primary borderBlack' width='25' style='vertical-align: middle;'>ลำดับ</th>";
								if(flag == true){
									row += "<th rowspan='2' class='text-center verticalCenter bg-primary borderBlack' width='150'>รหัสโรค</th>";
								}else{
									row += "<th rowspan='2' class='text-center verticalCenter bg-primary borderBlack' width='150'>รหัสความคุ้มครอง</th>";
								}
								
								row += "<th rowspan='2' class='text-center verticalCenter bg-primary borderBlack' width='400'>ความคุ้มครอง</th>"+																		
								"<th rowspan='2' class='text-center verticalCenter bg-primary borderBlack' width='100'>จำนวน</th>"+
								"<th rowspan='2' class='text-center verticalCenter bg-primary borderBlack' width='130'>หน่วย</th>"+
								"<th rowspan='2' class='text-center verticalCenter bg-primary borderBlack' width='100'>ต่อทุน</th>"+
								"<th rowspan='2' class='text-center verticalCenter bg-primary borderBlack' width='110'>ความถี่</th>";
									
//								
//								if(bnf_id == "BC_OL_DDR_01"){
//									row += "<th rowspan='2' class='text-center verticalCenter bg-primary borderBlack' width='70'>สัญญาสิ้นสุด</th>"+
//								"<th rowspan='2' class='text-center verticalCenter bg-primary borderBlack' width='70'>นำไปหักผลประโยชน์ หรือ CV</th>";
//								}
								
								row += "<th rowspan='2' class='text-center verticalCenter bg-primary borderBlack' width='150'>หมายเหตุ</th>"+
								"<th colspan='4' class='text-center verticalCenter bg-primary borderBlack' width='300'>Factor</th>"+
								"<th colspan='2' class='text-center verticalCenter bg-primary borderBlack' width='300'>อุบัติเหตุสาธารณะ</th>"+									
							"</tr>"+	
							"<tr>"+
								"<th class='text-center verticalCenter bg-primary borderBlack' width='70'>ต่ำสุด</th>"+
								"<th class='text-center verticalCenter bg-primary borderBlack' width='70'>สูงสุด</th>"+
								"<th class='text-center verticalCenter bg-primary borderBlack' width='70'>หน่วย</th>"+
								"<th class='text-center verticalCenter bg-primary borderBlack' width='70'>ต่อ</th>"+															
								"<th class='text-center verticalCenter bg-primary borderBlack' width='70'>จำนวน</th>"+
								"<th class='text-center verticalCenter bg-primary borderBlack' width='70'>หน่วย</th>"+										
								"</tr>"+																
						"</thead>"+								
						"<tbody class='disabledAll_NotFade'>"+									
						"</tbody>"+
					"</table>"+
					"</div>"+																		
				"<div class='text-center' style='padding: 10px 0'></div>"+
//				"<div class='col-md-12 benefit_cv_box'>"+
//					"<div class='col1'><input type='checkbox' id='cv_BC_0"+i+"_"+rider_code+"_CL' disabled></div>"+
//					"<div class='col4'><label for='cv_BC_0"+i+"' class='label_notbold'>คืน CV เมื่อสิ้นปี</label></div>"+
//					
//				"</div>"+
//				"<div class='text-center' style='padding: 10px 0'></div>"+
//				"<div class='row'>"+
				
//					"<div class='col-md-4'></div>"+
//					"<div class='col-md-4'>";
	
//					row += "</div>"+
				"</div>";

				num++;

				$("#benefitDetail"+rider_code+"_CL").append(row);
				
				if(i == 0){
					show_bnf_content_CL("BC"+i+"_CL", ""+rider_code+"");
				}
			}

		}	

		if(type == "E"){
			var num_main = $("#tabBenefitProduct_CL li[data-main='"+main_cov+"']").length;
			if(num_main > 0){
				$(html).insertAfter("#tabBenefitProduct_CL li[data-main='"+main_cov+"']:last");
			}else{
				$(html).insertAfter("#tabBenefitProduct_CL li[data-id='bnf_"+main_cov+"_CL']");
			}
			
		}else{
			$("#tabBenefitProduct_CL").append(html);	
		}	
	}
}

function getdata_benefit_CL(response, type, cov_code, prd_code_rider){
	
	// Base plan
	if(type == "B"){
		var obj = response.Tab_Benefits[0];
		if(obj.die.length > 0){

					/*Tab Die*/
					
					var obj_base_die_tab = obj.die;

						if(obj_base_die_tab.length > 0){
							var no = 1;	
							for(i in obj_base_die_tab){
								
									var obj_die_table = obj_base_die_tab[i];
									
									var from_value = obj_die_table.die_calendar[0].dateFrom;
									var to_value = obj_die_table.die_calendar[0].dateTO;
									var from_unit = obj_die_table.die_unit[0].unit_From;
									var to_unit = obj_die_table.die_unit[0].unit_To;
									var compare = obj_die_table.die_calendar[0].compare;
									var die_sa_value = obj_die_table.die_sa[0].value;
									var die_sa_factor = obj_die_table.die_sa[0].factor;
									
									var row1 = "";
									row1 += "<tr id='tbody_dieL_Product_CL"+no+"'>"+
										"<td width='56px' class='borderBlack'><input id='die_fromYear"+no+"_CL' type='text' class='form-control margin-padding0 text-center width80px' value='' ></td>"+
										"<td width='100px' class='text-center borderBlack'><select class='form-control' id='die_fromYearUnit"+no+"_CL' onchange='check_fromtoUnit_CL("+no+");'><option value='NONE'>None</option></select></td>"+
										"<td width='56px' class='borderBlack'><input id='die_toYear"+no+"_CL' type='text' class='form-control margin-padding0 text-center width80px' value=''></td>"+
										"<td width='100px' class='text-center borderBlack'><select class='form-control' id='die_toYearUnit"+no+"_CL'  onchange='check_fromtoUnit_CL("+no+");'><option value='NONE'>None</option></select></td>"+
										"</tr>";
								
									$("#tbody_dieL_Product_CL tbody").append(row1);
									var row2 = "";
									row2 += "<tr id='tbody_dieR_Product_CL"+no+"'>"+
											"<td width='50px' class='text-center borderBlack'><select class='form-control width-initial' id='die_sa_max"+no+"_CL'><option value='NONE'>None</option></select></td>"+
											"<td width='50px' class='borderBlack'><input id='die_sa"+no+"_CL' class='auto form-control margin-padding0 text-center width70px' value='0.00' data-v-min='0.00' data-v-max='999.99'></td>"+
											"<td width='50px' class='text-center borderBlack'><select class='form-control width-initial' id='die_sa_unit"+no+"_CL'><option value='NONE'>None</option></select></td>"+
											"<td width='50px' class='borderBlack'><input id='die_premium"+no+"_CL' onblur='replaceBlank(this)' type='text' class='auto form-control margin-padding0 text-center width70px' value='-' disabled></td>"+
											"<td width='50px' class='text-center borderBlack'><select class='form-control width-initial' id='die_prem"+no+"_CL' onchange='sl_premium("+no+")' disabled><option value='NONE'>None</option></select></td>"+
											"<td width='50px' class='verticalCenter text-center borderBlack'><input id='die_checkbox"+no+"_CL' type='checkbox' disabled></td>"+
											"<td width='50px' class='borderBlack'><input id='die_cvpv_CL"+no+"' onblur='replaceBlank(this)' type='text' class='auto form-control margin-padding0 text-center width70px'  value='-' disabled></td>"+
											"<td width='50px' class='text-center borderBlack'><select class='form-control width80px' id='die_sl_cvpv"+no+"_CL' disabled><option value='NONE'>None</option></select></td>"+
											"<td width='50px' class='text-center borderBlack'><select class='form-control width80px' id='die_sl_oth"+no+"_CL' disabled><option value='NONE'>None</option></select></td>"+
											"<td width='50px' class='text-center borderBlack'><select class='form-control width80px' id='die_condition_adb"+no+"_CL' disabled><option value='NONE'>None</option></select></td>"+
											"<td width='50px' class='borderBlack'><input id='adb_CL"+no+"' onblur='replaceBlank(this)' type='text' class='auto form-control margin-padding0 text-center width70px'  value='-' disabled></td>"+
											"<td width='160px' class='text-center borderBlack'><select class='form-control width80px' id='die_adb_type"+no+"_CL' disabled><option value='NONE'>None</option></select></td>"+
											"<td width='70px' class='text-center borderBlack'><select class='form-control width80px' id='die_condition_acc"+no+"CL' disabled><option value='NONE'>None</option></select></td>"+
											"<td width='70px' class='borderBlack'><input id='adbP_CL"+no+"' onblur='replaceBlank(this)' type='text' class='auto form-control margin-padding0 text-center width70px'  value='-' disabled></td>"+
											"<td width='160px' class='text-center borderBlack'><select class='form-control width80px' id='die_acc_type"+no+"_CL' disabled><option value='NONE'>None</option></select></td>"+
											"</tr>";
//								
								$("#tbody_dieR_Product_CL tbody").append(row2);
							
							$('.auto').autoNumeric('init');
							
							
							/*Lookup*/
							var lookup_unit_calendar = $("#die_calendar_CL_lookup").val();
							$("#die_fromYearUnit"+no+"_CL").append(lookup_unit_calendar);
							$("#die_toYearUnit"+no+"_CL").append(lookup_unit_calendar);
							
							var lookup_unit = $("#die_unit_CL_lookup").val();
							$("#die_sa_max"+no+"_CL").append(lookup_unit);

							var lookup_die_sa = $("#die_sa_CL_lookup").val();
							$("#die_sa_unit"+no+"_CL").append(lookup_die_sa);

							//tbody_dieL_Product_CL
							$("#die_fromYearUnit"+no+"_CL option[value="+from_unit+"]").attr("selected", true);
							$("#die_toYearUnit"+no+"_CL option[value="+to_unit+"]").attr("selected", true);
							$("#die_toYear"+no+"_CL").val(to_value);
							$("#die_fromYear"+no+"_CL").val(from_value);
							$("#die_sa_max"+no+"_CL option[value="+compare+"]").attr("selected", true);
							//tbody_dieR_Product_CL
							$("#die_sa"+no+"_CL").val((die_sa_value*100).toFixed(2));
							$("#die_sa_unit"+no+"_CL option[value="+die_sa_factor+"]").attr("selected", true);
							
							no++;							
									
							}
					}
		}
		
		if(obj.permanent_disability.length > 0){

			/*Tab permanent_disability*/
			
			var obj_base_permanent_disability_tab = obj.permanent_disability;
			
			/*Lookup*/
			var lookup_permanent_disability = $("#disabled_CL_lookup").val();
			$("#table_permanent_disability_bnf_base tbody").append(lookup_permanent_disability);
			
			if(obj_base_permanent_disability_tab.length > 0){
				
				var no = 1;
				for(i in obj_base_permanent_disability_tab){	
					var obj_base_pd_table = obj_base_permanent_disability_tab[i];
					var permanent_disability_text = obj_base_pd_table.text;
					var permanent_disability_pass = obj_base_pd_table.pass;

					$('.auto').autoNumeric('init');

					$("#table_permanent_disability_bnf_base tbody>tr").each(function(){
						var this_chk = $(this).find("input:checkbox");
						
						if($(this_chk).val() == permanent_disability_pass){ // EX. BC_01_0006_01 == BC_01_0006_01
							$(this_chk).prop("checked", true);
							$(this).find("td:nth-child(4) input").val((permanent_disability_text*100).toFixed(2));
						}
					});
					
					no++;
				}
			}
			
		}
	}
	
	if(type != "B"){

		var rider_code = "";
		if(type == "R" || type == "E"){
			rider_code = cov_code
		}else{
			rider_code = prd_code_rider;
		}

		for (i in response.Tab_Benefit) {
			
			/*ข้อมูลในแต่ล่ะ tab*/
			for(j in response.Tab_Benefit[i]){
				
				
				
				if(j == 0){
					
					var obj_bnf = response.Tab_Benefit[i][j];		
					var bnf_id = obj_bnf.benefit_item.bnf_item_id;
					var bnf_name = obj_bnf.benefit_item.item_name;

				}else{
					
				var tabID = 0;
				
				$("#tabBenefitRider_"+cov_code+"_CL li").each(function(){
				var bnf_active = $(this).find("a").text();
				var bnf_name = response.Tab_Benefit[i][0].benefit_item.item_name;
				
				if(bnf_active == bnf_name){
				/************get table***********/			
				var numberImgOK = 0;
				var iii = 0;	
				
				for(ii in response.Tab_Benefit[i][j]){
					/*************************start get data*****************************/
					
					/***********name*********/
					var obj_bnf_name = response.Tab_Benefit[i][j][ii].benefit;
					var objKey = response.Tab_Benefit[i][j][ii].benefit.objKey[0][1];
					
					
					/**********item**********/
					var obj_bnf_item = response.Tab_Benefit[i][j][ii].benefitItem;

					if(obj_bnf_item.bnf_code != ""){
						var bnf_code = obj_bnf_item.bnf_code;
					}else{
						var bnf_code = "Group";
					}					

					if(objKey != null){
						var bnf_name= obj_bnf_name.name_th;
						var bnf_type = 2;
					}else{
						var bnf_name= obj_bnf_item.item_name;
						var bnf_type = 1;
					}

					var remark = obj_bnf_item.note;
					
					/************amount*************/
					var obj_bnf_amount = response.Tab_Benefit[i][j][ii].listBenefitSched[0].listBenefitAmountAccessData[0].benefit_amount;		
					var benef_amt = (obj_bnf_amount.benef_amt*100).toFixed(2);
					var benef_unit = obj_bnf_amount.benef_unit;
					var benef_scope = obj_bnf_amount.benef_scope;
					var benef_factor = obj_bnf_amount.benef_factor;
					
					/************limit*************/
					var obj_bnf_limit = response.Tab_Benefit[i][j][ii].listBenefitSched[0].listBenefitLimit[0];
					var limit_amt = (obj_bnf_limit.limit_amt*100).toFixed(2);
					var limit_amt_min = (obj_bnf_limit.min_limit_amt*100).toFixed(2);
					var limit_unit = obj_bnf_limit.limit_unit;
					var limit_scope = obj_bnf_limit.limit_scope;
					
					/*******special_amount*******/
					var obj_bnf_special_amount = response.Tab_Benefit[i][j][ii].listBenefitSched[0].listBenefitAmountAccessData[0].listBenefitSpecialAmount[0];
					var special_benef_amt = (obj_bnf_special_amount.benef_amt*100).toFixed(2);
					var special_benef_unit = obj_bnf_special_amount.benef_unit;
					
					/*************************end get data*****************************/
					
					/*create table*/										
						var BCID = "BC_0"+tabID+"_"+rider_code+"_CL";
						
						var lastImgOK = $("#tbl_"+BCID+" >tbody>tr:last-child").attr("id") || 0;	
						var rowsNumber = $("#tbl_"+BCID+" >tbody>tr[data-parent='0']").length;
						
						if(lastImgOK == 0){
							numberImgOK = 1;
						}else{
							numberImgOK = Number(rowsNumber)+1;
						}
						
						var numberImgOK_Sub = numberImgOK;
						
						var row1 = "";
						var newID_Del = "imgOKDel_benefit"+BCID+"_"+numberImgOK;
						var imgDel = BCID+"_"+numberImgOK;
						
						if(ii == 0){	
							
							row1 += "<tr id='tbody_benefitL_CL"+numberImgOK+"' data-id='"+numberImgOK+"' data-parent='0' data-level='1'>"+	
									"<td class='text-center borderBlack vertical-middle rider_mainTopic'><span class='spanBenefit_CL'>"+numberImgOK+"</span></td>"+
									"<td class='text-center borderBlack vertical-middle rider_mainTopic'>"+bnf_code+"</td>"+
									"<td class='borderBlack vertical-middle rider_mainTopic'><a class='open-EditBenefitDialog' data-toggle='modal' href='#modal_editCoverage_CL'  data-id='"+numberImgOK+"' data-topic='"+bnf_name+"' data-type='"+bnf_type+"' data-code='"+bnf_code+"'>"+bnf_name+"</a></td>";	
							
							row1 += "<td class='borderBlack vertical-middle'>"+
							   "<input name='benefit_amount_"+BCID+"[]' id='benefit_amount_"+BCID+"_"+numberImgOK+"' type='text' class='auto form-control margin-padding0 text-center width40px' value='"+benef_amt+"' data-v-min='0.00' data-v-max='999.99'>	"+											
							   "</td>"+
							   "<td width='100px' class='borderBlack vertical-middle'>"+
							   "<select class='form-control width-initial lookup-unit' style='margin: 0;width: 100%;' id='benefit_unit"+numberImgOK+"'>"+
								   "<option value='NONE'>None</option>"+
							   "</select>"+												
							   "</td>"+
							   "<td width='100px' class='borderBlack vertical-middle'>"+
							   "<select class='form-control width-initial lookup-scope' style='margin: 0;width: 100%;' id='benefit_fund"+numberImgOK+"'>"+
								   "<option value='NONE'>None</option>"+
							   "</select>"+												
							   "</td>"+
							   "<td width='100px' class='borderBlack vertical-middle'>"+
							   "<select class='form-control width-initial lookup-frequency' style='margin: 0;width: 100%;' id='benefit_fq"+numberImgOK+"'>"+
								   "<option value='NONE' selected>None</option>"+
							   "</select>"+
							   "</td>"+
							   /*"<td width='100px' class='borderBlack text-center vertical-middle'><div class='input-group col-xs-12'><div class='list_coverage'>None</div><a class='open-SelectCoverageDialog' data-toggle='modal' data-id='"+numberImgOK+"' href='#modal_TableCoverage_CL'><button class='btn btn-default btn-primary float-right' type='button' id='btn_benefit"+BCID+"_"+numberImgOK+"'>...</button></a></div></td>"+*/
							   "<td width='100px' class='borderBlack vertical-middle'><textarea class='form-control' id='benefit_remark"+numberImgOK+"'>"+remark+"</textarea></td>"+
							   "<td width='100px' class='borderBlack vertical-middle'>"+
							   "<input name='benefit_factor_min"+numberImgOK+"' id='benefit_factor_min"+numberImgOK+"' type='text' class='auto form-control margin-padding0 text-center width40px' value='"+limit_amt_min+"' data-v-min='0.00' data-v-max='999.99'>"+		   
							   "</td>"+
							   "<td width='100px' class='borderBlack vertical-middle'>"+
							   "<input name='benefit_factor_max"+numberImgOK+"' id='benefit_factor_max"+numberImgOK+"' type='text' class='auto form-control margin-padding0 text-center width40px' value='"+limit_amt+"' data-v-min='0.00' data-v-max='999.99'>"+
							   "</td>"+
							   "<td width='100px' class='borderBlack vertical-middle'>"+
							   "<select class='form-control width-initsial lookup-factor-unit' style='margin: 0;width: 100%;' id='benefit_factor_unit"+numberImgOK+"'>"+
								   "<option value='NONE' selected>None</option>"+
							   "</select>"+
							   "</td>"+
							   "<td width='100px' class='borderBlack vertical-middle'>"+
							   "<select class='form-control width-initial lookup-factor-scope' style='margin: 0;width: 100%;' id='benefit_factor_to"+numberImgOK+"'>"+
								   "<option value='NONE' selected>None</option>"+	
							   "</select>"+
							   "</td>"+
							   "<td width='100px' class='borderBlack vertical-middle'>"+
							   "<input name='benefit_acc_amount"+numberImgOK+"' id='benefit_acc_amount"+numberImgOK+"' type='text' class='auto form-control margin-padding0 text-center width40px' value='"+special_benef_amt+"' data-v-min='0.00' data-v-max='999.99'>"+		   
							   "</td>"+
							   "<td width='100px' class='borderBlack vertical-middle'>"+
							   "<select class='form-control width-initial lookup-factor-unit' style='margin: 0;width: 100%;' id='benefit_acc_unit"+numberImgOK+"'>"+
								   "<option value='NONE' selected>None</option>"+
							   "</select>"+
							   "</td>"+
							   "</tr>";
							
						}else{
			
							iii++
							var numberImgOK = $("#tbl_"+BCID+" >tbody>tr[data-level='1']:last").data("id");
							numberImgOK_Sub = numberImgOK+"_"+iii;
			
							row1 += "<tr id='tbody_benefitL_CL"+numberImgOK+"_"+iii+"' data-id='"+numberImgOK+"_"+iii+"' data-parent='1' data-level='2' data-group='"+numberImgOK+"'>"+
//							   "<td class='text-center borderBlack'></td>"+
							   "<td class='text-center borderBlack vertical-middle'>"+numberImgOK+"."+iii+"</td>"+
							   "<td class='text-center borderBlack vertical-middle'>"+bnf_code+"</td>"+
							   "<td class='borderBlack vertical-middle'>"+bnf_name+"</td>";
							
							row1 += "<td class='borderBlack vertical-middle'>"+
							   "<input name='benefit_amount_"+BCID+"[]' id='benefit_amount_"+BCID+"_"+numberImgOK_Sub+"' type='text' class='auto form-control margin-padding0 text-center width40px' value='"+benef_amt+"' data-v-min='0.00' data-v-max='999.99'>	"+											
							   "</td>"+
							   "<td width='100px' class='borderBlack vertical-middle'>"+
							   "<select class='form-control width-initial lookup-unit' style='margin: 0;width: 100%;' id='benefit_unit"+numberImgOK_Sub+"'>"+
								   "<option value='NONE'>None</option>"+
							   "</select>"+												
							   "</td>"+
							   "<td width='100px' class='borderBlack vertical-middle'>"+
							   "<select class='form-control width-initial lookup-scope' style='margin: 0;width: 100%;' id='benefit_fund"+numberImgOK_Sub+"'>"+
							   "<option value='NONE' selected>None</option>"+
							   "</select>"+												
							   "</td>"+
							   "<td width='100px' class='borderBlack vertical-middle'>"+
							   "<select class='form-control width-initial lookup-frequency' style='margin: 0;width: 100%;' id='benefit_fq"+numberImgOK_Sub+"'>"+
								   "<option value='NONE' selected>None</option>"+
							   "</select>"+
							   "</td>"+
							   /*"<td width='100px' class='borderBlack text-center vertical-middle'><div class='input-group col-xs-12'><div class='list_coverage'>None</div><a class='open-SelectCoverageDialog' data-toggle='modal' data-id='"+numberImgOK+"_"+i+"' href='#modal_TableCoverage_CL'><button class='btn btn-default btn-primary float-right' type='button' id='btn_benefit"+BCID+"_"+numberImgOK_Sub+"'>...</button></a></div></td>"+*/
							   "<td width='100px' class='borderBlack vertical-middle'><textarea class='form-control' id='benefit_remark"+numberImgOK_Sub+"'>"+remark+"</textarea></td>"+
							   "<td width='100px' class='borderBlack vertical-middle'>"+
							   "<input name='benefit_factor_min"+numberImgOK_Sub+"' id='benefit_factor_min"+numberImgOK_Sub+"' type='text' class='auto form-control margin-padding0 text-center width40px' value='"+limit_amt_min+"' data-v-min='0.00' data-v-max='999.99'>"+		   
							   "</td>"+
							   "<td width='100px' class='borderBlack vertical-middle'>"+
							   "<input name='benefit_factor_max"+numberImgOK_Sub+"' id='benefit_factor_max"+numberImgOK_Sub+"' type='text' class='auto form-control margin-padding0 text-center width40px' value='"+limit_amt+"' data-v-min='0.00' data-v-max='999.99'>"+
							   "</td>"+
							   "<td width='100px' class='borderBlack vertical-middle'>"+
							   "<select class='form-control width-initsial lookup-factor-unit' style='margin: 0;width: 100%;' id='benefit_factor_unit"+numberImgOK_Sub+"'>"+
								   "<option value='NONE' selected>None</option>"+
							   "</select>"+
							   "</td>"+
							   "<td width='100px' class='borderBlack vertical-middle'>"+
							   "<select class='form-control width-initial lookup-factor-scope' style='margin: 0;width: 100%;' id='benefit_factor_to"+numberImgOK_Sub+"'>"+
							   "<option value='NONE' selected>None</option>"+	
							   "</select>"+
							   "</td>"+
							   "<td width='100px' class='borderBlack vertical-middle'>"+
							   "<input name='benefit_acc_amount"+numberImgOK_Sub+"' id='benefit_acc_amount"+numberImgOK_Sub+"' type='text' class='auto form-control margin-padding0 text-center width40px' value='"+special_benef_amt+"' data-v-min='0.00' data-v-max='999.99'>"+		   
							   "</td>"+
							   "<td width='100px' class='borderBlack vertical-middle'>"+
							   "<select class='form-control width-initial lookup-factor-unit' style='margin: 0;width: 100%;' id='benefit_acc_unit"+numberImgOK_Sub+"'>"+
								   "<option value='NONE' selected>None</option>"+
							   "</select>"+
							   "</td>"+
							   "</tr>";
							
						}
						
						$("#tbl_"+BCID+" tbody").append(row1);	 	
						$('.auto').autoNumeric('init');
						
						/*set id to dropdown*/
						var dd_number = "";
						if(ii == 0){
							dd_number = numberImgOK;
						}else{
							dd_number = numberImgOK_Sub;
						}

//						/*get lookup*/
						var lookup_unit_rider_CL = $("#rider_unit_CL_lookup").val();
						var lookup_frequency_rider_CL = $("#rider_frequency_CL_lookup").val();
						var lookup_factor_rider_CL = $("#rider_factor_unit_CL_lookup").val();
						var lookup_unitFactor_rider_CL = $("#rider_unitFactor_CL_lookup").val();
						var lookup_factor_scope_rider_CL = $("#rider_factor_scope_CL_lookup").val();

						
						$("#tbl_"+BCID+" #benefit_unit"+dd_number).append(lookup_unit_rider_CL);
						$("#tbl_"+BCID+" #benefit_fund"+dd_number).append(lookup_unitFactor_rider_CL);
						$("#tbl_"+BCID+" #benefit_factor_unit"+dd_number).append(lookup_factor_rider_CL);
						$("#tbl_"+BCID+" #benefit_acc_unit"+dd_number).append(lookup_factor_rider_CL);
						$("#tbl_"+BCID+" #benefit_factor_to"+dd_number).append(lookup_factor_scope_rider_CL);
						$("#tbl_"+BCID+" #benefit_fq"+dd_number).append(lookup_frequency_rider_CL);
						
						$("#tbl_"+BCID+" #benefit_unit"+dd_number).val(benef_unit).attr('selected', 'selected');
						$("#tbl_"+BCID+" #benefit_fund"+dd_number).val(benef_factor).attr('selected', 'selected');
						$("#tbl_"+BCID+" #benefit_fq"+dd_number).val(benef_scope).attr('selected', 'selected');
						$("#tbl_"+BCID+" #benefit_factor_unit"+dd_number).val(limit_unit).attr('selected', 'selected');
						$("#tbl_"+BCID+" #benefit_factor_to"+dd_number).val(limit_scope).attr('selected', 'selected');
						$("#tbl_"+BCID+" #benefit_acc_unit"+dd_number).val(special_benef_unit).attr('selected', 'selected');
						
						}
					}
				tabID++;
				});
			}
			/*if else*/
		}
			/**/

		}
	}

}

function show_bnf_content_CL(tab,cov_code){
	var cove_code = ""+cov_code;

	$("#benefitDetail"+cov_code+"_CL .tab-content>div").each(function(){
		var contentID = $(this).attr("id");
		
		if(contentID == tab){
			$("#"+tab).css("display","block");
			
		}else{
			$(this).css("display","none");
		}
	});
	
}

function choose_bnf_content_CL(type,cov_code){
	if(type != "B"){
		$("#menu_ProductBnf2_CL").addClass('active in')
		$("#menu_ProductBnf1_CL").removeClass('active in')
		$("#BC0_"+cov_code+"_CL").css("display","block")
		$("#tabBenefitRider_"+cov_code+"_CL li:not(:first-child)").removeClass("active");
		$("#tabBenefitRider_"+cov_code+"_CL li:first-child").addClass("active");
		
		var text_bnf = $("#tabBenefitRider_"+cov_code+"_CL li:first-child").text();
		//console.log("text_bnf>> "+text_bnf);
		$("#benefitDetail"+cov_code+"_CL .tab-content[data-name='"+text_bnf+"']>div").css("display","block");
		$("#benefitDetail"+cov_code+"_CL .tab-content[data-name!='"+text_bnf+"']>div").css("display","none");
	
	}
	
	$("#tabBenefitRider_CL .benefRider_CL").each(function(){
		if($(this).attr('id') != "bnf_rider_"+cov_code){
			$(this).css("display","none");
		}else{
			$(this).css("display","block");
		}
	})

	
}

function show_benefit_CL(response){
	//Lookup for benefit
		
	/*Baseplan*/
	var obj_bnf_baseplan = response.Tab_Benefits_BasePlan[0];
	
	var list_die_calendar = "";
	for(i in obj_bnf_baseplan.die[0].die_calendar){
		var obj = obj_bnf_baseplan.die[0].die_calendar[i];
		list_die_calendar += "<option value='"+obj.pass+"'>"+obj.text+"</option>";
	}
	$("#die_calendar_CL_lookup").val(list_die_calendar);
	
	var list_die_sa = "";
	for(i in obj_bnf_baseplan.die[0].die_sa){
		var obj = obj_bnf_baseplan.die[0].die_sa[i];
		list_die_sa += "<option value='"+obj.pass+"'>"+obj.text+"</option>";
	}
	$("#die_sa_CL_lookup").val(list_die_sa);

	var list_die_unit = "";
	for(i in obj_bnf_baseplan.die[0].die_unit){
		var obj = obj_bnf_baseplan.die[0].die_unit[i];
		list_die_unit += "<option value='"+obj.pass+"'>"+obj.text+"</option>";
	}
	$("#die_unit_CL_lookup").val(list_die_unit);

	var list_tb_disabled = "";
	var no = 1;
	for (i in obj_bnf_baseplan.permanent_disability) {
		var obj_tb_disabled = obj_bnf_baseplan.permanent_disability[i];
		if(i != 0){ // 0 = ทุพพลภาพถาวีสิ้นเชิง
		list_tb_disabled += "<tr id='tbody_permanent_disability"+no+"' class='disabledAll_NotFade'>"+
						   	"<td id='imgOKDel_disabled"+no+ "' class='text-center borderBlack td_disabled'></td>"+								
						   	"<td class='text-center borderBlack disabledAll_NotFade' style='vertical-align: middle;'><input type='checkbox' id='imgOK_disabled"+no+"' value='"+obj_tb_disabled.pass+"' class='disabledAll_NotFade'></td>"+	
						   	"<td class='borderBlack verticalCenter disabledAll_NotFade'><input type='text' name='disabled_name"+no+"' id='disabled_name"+no+"' class='form-control margin-padding0 text-center; disabledAll_NotFade' value='"+obj_tb_disabled.text+"' readonly></td>"+									
						   	"<td class='borderBlack disabledAll_NotFade' align='center'><input id='disabled_amount"+no+"' type='text' class='auto form-control margin-padding0 text-center width40px disabledAll_NotFade' value='0.00' data-v-min='0.00' data-v-max='999.99' disabled></td>"+											
						    "</tr>";
		}
		no++;
	}
	$("#disabled_CL_lookup").val(list_tb_disabled);	
	
	/*rider*/
	var obj_bnf_rider = response.Tab_Benefits_Rider[0];
	
	var list_rider_unit = "";
	for(i in obj_bnf_rider.unit){
		var obj = obj_bnf_rider.unit[i];
		list_rider_unit += "<option value='"+obj.pass+"'>"+obj.text+"</option>";
	}
	$("#rider_unit_CL_lookup").val(list_rider_unit);
	
	var list_rider_factor_unit = "";
	for(i in obj_bnf_rider.factor_unit){
		var obj = obj_bnf_rider.factor_unit[i];
		list_rider_factor_unit += "<option value='"+obj.pass+"'>"+obj.text+"</option>";
	}
	$("#rider_factor_unit_CL_lookup").val(list_rider_factor_unit);
	
	var list_rider_unitFactor = "";
	for(i in obj_bnf_rider.unitFactor){
		var obj = obj_bnf_rider.unitFactor[i];
		list_rider_unitFactor += "<option value='"+obj.pass+"'>"+obj.text+"</option>";
	}
	$("#rider_unitFactor_CL_lookup").val(list_rider_unitFactor);
	
	var list_rider_factor_scope = "";
	for(i in obj_bnf_rider.factor_scope){
		var obj = obj_bnf_rider.factor_scope[i];
		list_rider_factor_scope += "<option value='"+obj.pass+"'>"+obj.text+"</option>";
	}
	$("#rider_factor_scope_CL_lookup").val(list_rider_factor_scope);

	var list_rider_frequency = "";
	for(i in obj_bnf_rider.frequency){
		var obj = obj_bnf_rider.frequency[i];
		list_rider_frequency += "<option value='"+obj.pass+"'>"+obj.text+"</option>";
	}
	$("#rider_frequency_CL_lookup").val(list_rider_frequency);
}

function set_status_clone(prd_code, group_name){
	if(prd_code != "" && group_name != ""){
		$.ajax({
	        type: "POST",
	        url : "CloneServlet",
	        async: false,
	        data: {
	        	method 			: "setstatusProductTask",
	        	prd_code_Clone	: prd_code,
	        	groupName		: group_name
	        },       
	        success : function(response) {
	        	console.log("success");
	        	
	        },
	        error : function(response) {}
		});
	}
	
}

/************Khwan Fix for endorse 20/11/2019***************/
function getData_TabCalPrem_CL(endorse_ID, type, endorse_type, prd_rider_code, response, main_cov){
	
	//การคำนวณจำนวนเงินเอาประกันภัย
	var numrow = $("#tb_Calculate_insurance tbody>tr[data-level='1']").length;
	var last_row = $("#tb_Calculate_insurance tbody>tr[data-level='1']:last-child").attr("data-id");
	var numrow3 = "";
	
	if(numrow > 0){
		numrow3 = Number(last_row)+1;
	}else{
		numrow3 = 1;
	}
	
	var row_cal = "";
	var dropdownUnit = $("#hide_fixCovUnit").val();
	var dropdownOF1 = $("#hide_fixCovFactor").val();
	var dropdownOF2 = $("#hide_minCovFactor").val();
	var fontcolor = "";
	var disabled_dd = "";
	var data_main_cov = "";
	var data_key  = "";
	if(type == "B"){
		fontcolor = "fontcolortable1";
		disabled_dd = "";
		data_main_cov = "";
		data_key = prd_rider_code;
	}else if(type == "E"){
		fontcolor = "font-term-yellow";
		disabled_dd = "disabled";
		data_main_cov = main_cov;
		data_key = main_cov;
	}else{
		fontcolor = "fontcolortable2";
		disabled_dd = "disabled";
		data_main_cov = "";
		data_key = prd_rider_code;
	}
	
	row_cal = "<tr id=\"tr_Calculate_insurance_"+numrow3+"\" data-id=\""+numrow3+"\" data-group='"+numrow3+"' data-parent=\"0\" data-level=\"1\" data-key='"+data_key+"' data-main='"+data_main_cov+"'>"+
					"<td width=\"14%\" class=\"text-center verticalCenter "+fontcolor+" borderBlack\">"+
						"<label>"+endorse_ID+"</label>"+
						"<input type='hidden' id='prd_rider_code' value='"+prd_rider_code+"'>"+
						"<input type='hidden' id='seq' value='1'>"+
						"<input type='hidden' id='serie_no' value='1'>"+
						"<input type='hidden' id='cov_type' value='"+type+"'>"+
					"</td>"+
					"<td width=\"7%\"class=\"text-center verticalCenter "+fontcolor+" borderBlack\">" +
					"<label>"+endorse_type+"</label>" +
					"</td>"+
					"<td width=\"3%\" class=\"text-center verticalCenter borderBlack\">"+
						"<i class=\"glyphicon glyphicon-plus icon-blue-circle\"  data-id=\'"+numrow3+"\' data-topic=\'"+numrow3+"\' data-type=\'"+numrow3+"\' id=\"addrowMenu3_"+numrow3+"\" onclick=\"addrowMenu3("+numrow3+");\"></i>"+
					"</td>"+	
					"<td width=\"7%\"class=\"text-right verticalCenter borderBlack\">"+
					"<input type='text' class='autoComma form-control text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999999999.99' onblur='validateMin_tbCal(this)'>"+
					"</td>"+
					"<td width=\"7%\" class=\"text-right verticalCenter borderBlack\">"+
					"<input type='text' class='autoComma form-control margin-padding0 text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999999999.99' onblur='validateMax_tbCal(this);'>"+
					"</td>"+
					"<td width=\"10%\"class=\"text-right verticalCenter borderBlack\">"+
					"<input type='text' class='autoComma form-control margin-padding0 text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999999999.99'>"+
					"</td>"+
					"<td width=\"14%\" class=\"text-right verticalCenter borderBlack\">"+
						"<select class=\"form-control\" onchange='change_unit_CL(this,6)'><option value='NONE'>None</option>"+dropdownUnit+"</select></td>"+
					"<td width=\"14%\" class=\"text-right verticalCenter borderBlack\">"+
						"<select class=\"form-control\"><option value='NONE'>None</option>"+dropdownOF1+"</select></td>"+
					"<td width=\"10%\" class=\"text-right verticalCenter borderBlack\">"+
					"<input type='text' class='autoComma form-control margin-padding0 text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999999999.99'>"+
					"<td width=\"14%\" class=\"text-right verticalCenter borderBlack\">"+
						"<select class=\"form-control\"><option value='NONE'>None</option>"+dropdownOF2+"</select></td>"+
				"</tr>";
		
		if($("#tb_Calculate_insurance tbody>tr").length == 0){
			$("#tb_Calculate_insurance_OL tbody").append(row_cal);
		}else{
			
			var num_main = $("#tb_Calculate_insurance tbody>tr[data-main='"+main_cov+"']").length;
			
			if(num_main > 0){
				$(row_cal).insertAfter("#tb_Calculate_insurance tbody>tr[data-main='"+main_cov+"']:last");
			}else{
				var main_data_id = $("#tb_Calculate_insurance tbody>tr[data-key='"+main_cov+"']").attr("data-id");
				var num_child_main = $("#tb_Calculate_insurance tbody>tr[data-parent='"+main_data_id+"']").length;
				
				if(num_child_main > 0){
					$(row_cal).insertAfter("#tb_Calculate_insurance tbody>tr[data-parent='"+main_data_id+"']:last");
				}else{
					$(row_cal).insertAfter("#tb_Calculate_insurance tbody>tr[data-key='"+main_cov+"']");
				}
				
			}
	
		}
		
		$(".autoComma").autoNumeric('init',{vMin: '0.00', vMax: '999999999.99'});
		
		//renew id
		renew_TabCalPrem_CL();
		
		//การคำนวณเบี้ยประกันภัย
		var numrow_cal = $("#tb_Calculate_insurance2 tbody>tr").length;
		var numberImgOK_cal = "";
		
		if(numrow_cal){
			numberImgOK_cal = Number(numrow_cal)+1;
		}else{
			numberImgOK_cal = 1;
		}
		
		var sl_calculus = $("#hide_slCalculus").val();
		row4 = 	"<tr id=\"tb_Calculate_insurance2_"+numberImgOK_cal+"\" data-key='"+main_cov+"' data-main='"+main_cov+"'>"+
					"<td width=\"30%\" class=\"text-center verticalCenter "+fontcolor+" borderBlack\">"+
						"<input type='hidden' id='prd_rider_code' value='"+prd_rider_code+"'>"+
						"<label>"+endorse_ID+"</label>"+
					"</td>"+
					"<td width=\"20%\" class=\"text-center verticalCenter "+fontcolor+" borderBlack\">"+
						"<label>"+endorse_type+"</label>"+					
					"</td>"+	
					"<td width=\"50%\"class=\"text-center verticalCenter borderBlack\">"+
					"<select class=\"form-control\" disabled><option value='0'>None</option>"+sl_calculus+"</select></td>"+
				"</tr>";	
		
		var num_main_cal = $("#tb_Calculate_insurance2 tbody>tr[data-main='"+main_cov+"']").length;
		
		if(num_main_cal > 0){
			$(row4).insertAfter("#tb_Calculate_insurance2 tbody>tr[data-main='"+main_cov+"']:last");
		}else{
			$(row4).insertAfter("#tb_Calculate_insurance2 tbody>tr[data-key='"+main_cov+"']");
		}
	
		var formula_base = $("#tb_Calculate_insurance2 tbody>tr").eq(0).find('td:nth-child(3) option:selected').val()
		//console.log("formular>> "+formula_base);
		$("#tb_Calculate_insurance2_"+numberImgOK_cal+"").find('td:nth-child(3) option[value="'+formula_base+'"]').attr("selected",true)
		
		//renew id
		renew_TabCalPrem2_CL();
}

function getData_TabUseRight_CL(endorse_ID, type, endorse_type, prd_rider_code, response, main_cov){
	
	var numrow = $("#tb_policyholder tbody>tr").length;
	var numberID = "";
	
	if(numrow){
		numberID = Number(numrow)+1;
	}else{
		numberID = 1;
	}
	
	var row = "";
	var sl_tab2_cal = $("#hide_sl_cal").val();
	row += 	"<tr id=\"tb_policyholder_"+numberID+"\" data-key='"+main_cov+"' data-main='"+main_cov+"'>"+
		"<td width=\"20%\" class=\"text-center verticalCenter font-term-yellow borderBlack\">"+
			"<input type='hidden' id='prd_rider_code' value='"+prd_rider_code+"'>"+
			"<input type='hidden' id='cov_code_policyValue' value='"+endorse_ID+"'/>"+
			"<label>"+endorse_ID+"</label>"+
		"</td>"+
		"<td width=\"10%\" class=\"text-center verticalCenter font-term-yellow borderBlack\">"+
			"<label class='font-term-yellow font-bold'>"+endorse_type+"</label>"+					
		"</td>"+	
		"<td width=\"25%\" class=\"text-center verticalCenter borderBlack\">"+
			"<label class='font-term-yellow font-bold'></label>"+					
		"</td>"+
		"<td width=\"25%\" class=\"text-center verticalCenter borderBlack\">"+
			"<input type='hidden' id='rate_cat_id_tb_useRight'/>"+
			"<input type='hidden' id='rate_layout_id_tb_useRight'/>"+
			"<input type='hidden' id='file_id_tb_useRight'/>"+
			"<label class='font-term-purple font-bold'></label>"+					
		"</td>"+	
		"<td width=\"20%\"class=\"text-center verticalCenter borderBlack\">"+
		"<select class=\"form-control\" onchange='cover_fomula(this)' disabled><option value='NONE'>None</option>"+sl_tab2_cal+"</select></td>"+
	"</tr>";		
	
	var num_main = $("#tb_policyholder tbody>tr[data-main='"+main_cov+"']").length;
	
	if(num_main > 0){
		$(row).insertAfter("#tb_policyholder tbody>tr[data-main='"+main_cov+"']:last");
	}else{
		$(row).insertAfter("#tb_policyholder tbody>tr[data-key='"+main_cov+"']");
	}
	
	renew_TabUseRight_CL();
	
}

function getData_TabWarranty_CL(endorse_ID, type, endorse_type, prd_rider_code, response, main_cov){
	
	//จำนวนเงินเอาประกันภัยสูงสุด (ต่อราย)
	var numrow = $("#tbl_insure_single tbody>tr").length;
	var numberID = "";
	
	if(numrow){
		numberID = Number(numrow)+1;
	}else{
		numberID = 1;
	}
	
	var row = "<tr id='tbody_max_amount_insure"+numberID+"' data-key='"+prd_rider_code+"' data-main='"+main_cov+"'>"+
	"<td id='imgOK_max_amount_insure"+numberID+"_CL' class='verticalCenter text-center'>" +
		"<input id='mode_max_amount_insure"+numberID+"_CL' type='checkbox' onclick='disabled_fieldInsure(this)' value='"+prd_rider_code+"'>" +
	"</td>"+
	"<td class='verticalCenter text-center font-term-yellow font-bold'>"+endorse_type+"</td>"+
	"<td class='verticalCenter'><input type='text' id='max_amount_insure"+numberID+"_CL' class='autoComma form-control text-right' value='0' disabled></td>"+																									
	"</tr>"
	
	$("#tbl_insure_single tbody").append(row);
	$(".autoComma").autoNumeric('init',{vMin: '0.00', vMax: '999999999.99'});
	
	
	//การรับแบบเพิ่มเบี้ยพิเศษ
	var numrow2 = $("#tbl_increase_premium_CL tbody>tr").length;
	var numberID2 = "";
	
	if(numrow2){
		numberID2 = Number(numrow2)+1;
	}else{
		numberID2 = 1;
	}
	
	var row2 = "<tr data-key='"+prd_rider_code+"' data-main='"+main_cov+"'><td class='verticalCenter text-center font-term-yellow font-bold'><label>"+endorse_type+"</label>" +
				"<input type='hidden' id='cov_code' value='"+endorse_ID+"'>"+
		"</td>"+
		"<td class='verticalCenter text-right font-term-yellow font-bold'></td>"+
		"<td class='verticalCenter text-right'><input type='text' id='amount_premium_uw_CL"+numberID2+"' class='autoPercent3 form-control text-right' value='0.00' data-v-min='0.00' data-v-max='999.99' onblur='validate_maxEM(this)'></td>"+																									
	"</tr>"	
		
	$("#tbl_increase_premium_CL tbody").append(row2);
	$(".autoPercent").autoNumeric('init',{vMin: '0.00', vMax: '99.99'});
	$(".autoPercent3").autoNumeric('init',{vMin: '0.00', vMax: '999.99'});
	
	//renew id
	renew_TabWarrantyMax_CL();
	renew_TabWarrantyEM_CL();
	
	var KPW_maxEm
	var json_data = {
				"method": "getCaseBasePlan",
				"bCode": endorse_ID
		}		
		$.ajax({
			url: 'ProductCL_GetData_Servlet',
			type: "POST",
			data: json_data,
			success: function (response) {
				
				var cov = response.Tab_Basic_Information[0].passInsurance;

				KPW_maxEm = (response.Tab_cal_insurance_premiums[0].max_EM*100).toFixed(2);
				
				$("#tbl_increase_premium_CL tbody>tr").each(function(){
					if( cov == $(this).find('td:nth-child(1) input[type="hidden"]').val()){
						$(this).find('td:nth-child(2)').text(KPW_maxEm)
					}
				})
			}
		});

}

/*************renew id**************/

function renew_TabCalPrem_CL(){
	 var new_id = 0;
	 var new_child_id = 1;
	 var parent = 0;

	 $("#tb_Calculate_insurance tbody>tr").each(function(){
		var data_level = $(this).attr("data-level");

		if(data_level == 1){
			new_id = new_id+1;
			parent = new_id;

			$(this).attr("id","tr_Calculate_insurance_"+new_id);
			$(this).attr("data-id",new_id);
			$(this).attr("data-group",new_id);
			$(this).find("td:nth-child(3) i").attr("id","addrowMenu"+new_id);
			$(this).find("td:nth-child(3) i").attr("data-id",new_id);
			$(this).find("td:nth-child(3) i").attr("data-topic",new_id);
			$(this).find("td:nth-child(3) i").attr("data-type",new_id);
			$(this).find("td:nth-child(3) i").attr("onclick","addrowMenu3("+new_id+");");
			
			new_child_id = 1;
		}else{

			var child_id = parent+"_"+new_child_id;
			$(this).attr("id","tr_Calculate_insurance_"+child_id);
			$(this).attr("data-id",child_id);
			$(this).attr("data-parent",parent);
			$(this).attr("data-group",parent);
			$(this).find("td:nth-child(3) i").attr("id","removerow_"+child_id);
			$(this).find("td:nth-child(3) i").attr("data-id",child_id);
			$(this).find("td:nth-child(3) i").attr("data-topic",child_id);
			$(this).find("td:nth-child(3) i").attr("data-type",child_id);
			$(this).find("td:nth-child(3) i").attr("onclick","removerowChild3('tr_Calculate_insurance_"+child_id+"');");

			new_child_id = new_child_id+1;
			
		}
		
	 });
}

function renew_TabCalPrem2_CL(){
	 var new_id = 0;
	 $("#tb_Calculate_insurance2 tbody>tr").each(function(){
		 new_id = new_id+1;
		 $(this).attr("id","tb_Calculate_insurance2_"+new_id);
	 });
}

function renew_TabUseRight_CL(){
	 var new_id = 0;
	 $("#tb_policyholder tbody>tr").each(function(){
		 new_id = new_id+1;
		 $(this).attr("id","tb_policyholder_"+new_id);
	 });
}

//จำนวนเงินเอาประกันภัยสูงสุด (ต่อราย)
function renew_TabWarrantyMax_CL(){
	 var new_id = 0;
	 $("#tbl_insure_single tbody>tr").each(function(){
		 new_id = new_id+1;
		 $(this).attr("id","tbody_max_amount_insure"+new_id);
		 $(this).find("td:nth-child(1)").attr("id","imgOK_max_amount_insure"+new_id+"_CL");
		 $(this).find("td:nth-child(1) input").attr("id","mode_max_amount_insure"+new_id+"_CL");
		 $(this).find("td:nth-child(3) input").attr("id","max_amount_insure"+new_id+"_CL");
	 });
}

//การรับแบบเพิ่มเบี้ยพิเศษ
function renew_TabWarrantyEM_CL(){
	 var new_id = 0;
	 $("#tbl_increase_premium_CL tbody>tr").each(function(){
		 new_id = new_id+1;
		 $(this).find("td:nth-child(3) input").attr("id","amount_premium_uw_CL"+new_id);
	 });
}

