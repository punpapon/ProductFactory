/*KHWAN*/
	var data ="";
	/*เมนู CL*/
	$("#menu_OL_1").click(function(){
		if (Statuesave == "N" && nameTab != "menu_OL_1") {
		 	$("#modal_Checkkeyup").modal("show");
		 	data = "menu_OL_1";
		}else{
			document.getElementById("ol_005_1_1-1").style.display = "block";
			document.getElementById("ol_005_1_1-2").style.display = "none";
			document.getElementById("ol_005_1_1-3").style.display = "none";
			document.getElementById("ol_005_1_1-4").style.display = "none";
			document.getElementById("ol_005_1_1-5").style.display = "none";
			document.getElementById("ol_005_1_1-6").style.display = "none";
			document.getElementById("ol_005_1_1-7").style.display = "none";
		}
	})
	$("#menu_OL_2").click(function(){
		if (Statuesave == "N" && nameTab != "menu_OL_2") {
		 	$("#modal_Checkkeyup").modal("show");
		 	data = "menu_OL_2";
		}else{
			document.getElementById("ol_005_1_1-2").style.display = "block";
			document.getElementById("ol_005_1_1-1").style.display = "none";
			document.getElementById("ol_005_1_1-3").style.display = "none";
			document.getElementById("ol_005_1_1-4").style.display = "none";
			document.getElementById("ol_005_1_1-5").style.display = "none";
			document.getElementById("ol_005_1_1-6").style.display = "none";
			document.getElementById("ol_005_1_1-7").style.display = "none";
		}
		
	})
	$("#menu_OL_3").click(function(){
		if (Statuesave == "N" && nameTab != "menu_OL_3") {
		 	$("#modal_Checkkeyup").modal("show");
		 	data = "menu_OL_3";
		}else{
			document.getElementById("ol_005_1_1-3").style.display = "block";
			document.getElementById("ol_005_1_1-1").style.display = "none";
			document.getElementById("ol_005_1_1-2").style.display = "none";
			document.getElementById("ol_005_1_1-4").style.display = "none";
			document.getElementById("ol_005_1_1-5").style.display = "none";
			document.getElementById("ol_005_1_1-6").style.display = "none";
			document.getElementById("ol_005_1_1-7").style.display = "none";
			
			/*defalut 1 row*/
			var numrow = $("#tb_PM_Rate1_OL tbody>tr").length;
			if(numrow <= 0){
				addRowPM_Rate_OL();
			}

			/*ปิดปุ่ม add row*/
			var num_dd = $("#tb_PM_Rate1_OL>tbody>tr[data-level='1']:first>td:nth-child(2) select>option[value!='NONE']").length;
			var numrow_tbl = $("#tb_PM_Rate1_OL>tbody>tr[data-level='1']").length;
			if(numrow_tbl == num_dd){
				$("#addrowPM_Rate_OL").attr("disabled", true);
			}
			
			if($("#sl_menu3_insurance_premium_ol option:selected").text() == "None"){
				$(".sl_STD_PM_Rate").prop("disabled", true);
			}
			
		}
		
		if($("#ch_standard_premium_ol").prop("checked") == false){
			$("#tb_PM_Rate1_OL tbody *").prop("disabled", true);
			$("#ch_importInsurance_ol").prop("disabled", true);
		}
		
	})
	$("#menu_OL_4").click(function(){
		settingPolicyValue_OL();
		if (Statuesave == "N" && nameTab != "menu_OL_4") {
		 	$("#modal_Checkkeyup").modal("show");
		 	data = "menu_OL_4";
		}else{
			document.getElementById("ol_005_1_1-4").style.display = "block";
			document.getElementById("ol_005_1_1-1").style.display = "none";
			document.getElementById("ol_005_1_1-2").style.display = "none";
			document.getElementById("ol_005_1_1-3").style.display = "none";
			document.getElementById("ol_005_1_1-5").style.display = "none";
			document.getElementById("ol_005_1_1-6").style.display = "none";
			document.getElementById("ol_005_1_1-7").style.display = "none";

		}
	})
	$("#menu_OL_5").click(function(){
		if (Statuesave == "N" && nameTab != "menu_OL_5") {
		 	$("#modal_Checkkeyup").modal("show");
		 	data = "menu_OL_5";
		}else{
			document.getElementById("ol_005_1_1-5").style.display = "block";
			document.getElementById("ol_005_1_1-1").style.display = "none";
			document.getElementById("ol_005_1_1-2").style.display = "none";
			document.getElementById("ol_005_1_1-3").style.display = "none";
			document.getElementById("ol_005_1_1-4").style.display = "none";
			document.getElementById("ol_005_1_1-6").style.display = "none";
			document.getElementById("ol_005_1_1-7").style.display = "none";
		}
	})
	$("#menu_OL_6").click(function(){
		if (Statuesave == "N" && nameTab != "menu_OL_6") {
		 	$("#modal_Checkkeyup").modal("show");
		 	data = "menu_OL_6";
		}else{
			$("#code_Coverage_OL").val($("#pass_Insurance_coverage_ol").val());
			document.getElementById("ol_005_1_1-6").style.display = "block";
			document.getElementById("ol_005_1_1-1").style.display = "none";
			document.getElementById("ol_005_1_1-2").style.display = "none";
			document.getElementById("ol_005_1_1-3").style.display = "none";
			document.getElementById("ol_005_1_1-4").style.display = "none";
			document.getElementById("ol_005_1_1-5").style.display = "none";
			document.getElementById("ol_005_1_1-7").style.display = "none";
		}
	})
	$("#menu_OL_7").click(function(){
		if (Statuesave == "N" && nameTab != "menu_OL_7") {
			 	$("#modal_Checkkeyup").modal("show");
			 	data = "menu_OL_7";
		}else{
			document.getElementById("ol_005_1_1-7").style.display = "block";
			document.getElementById("ol_005_1_1-1").style.display = "none";
			document.getElementById("ol_005_1_1-2").style.display = "none";
			document.getElementById("ol_005_1_1-3").style.display = "none";
			document.getElementById("ol_005_1_1-4").style.display = "none";
			document.getElementById("ol_005_1_1-5").style.display = "none";
			document.getElementById("ol_005_1_1-6").style.display = "none";
		}
	})
	//ยืนยัน
	function bt_changeTab() {
		if (data == "menu_OL_7") {
			document.getElementById("ol_005_1_1-7").style.display = "block";
			document.getElementById("ol_005_1_1-1").style.display = "none";
			document.getElementById("ol_005_1_1-2").style.display = "none";
			document.getElementById("ol_005_1_1-3").style.display = "none";
			document.getElementById("ol_005_1_1-4").style.display = "none";
			document.getElementById("ol_005_1_1-5").style.display = "none";
			document.getElementById("ol_005_1_1-6").style.display = "none";
			$("#modal_Checkkeyup").modal("hide");
			Statuesave = "Y";
		}else if (data == "menu_OL_1"){
			document.getElementById("ol_005_1_1-1").style.display = "block";
			document.getElementById("ol_005_1_1-2").style.display = "none";
			document.getElementById("ol_005_1_1-3").style.display = "none";
			document.getElementById("ol_005_1_1-4").style.display = "none";
			document.getElementById("ol_005_1_1-5").style.display = "none";
			document.getElementById("ol_005_1_1-6").style.display = "none";
			document.getElementById("ol_005_1_1-7").style.display = "none";
		}else if (data == "menu_OL_2") {
			document.getElementById("ol_005_1_1-2").style.display = "block";
			document.getElementById("ol_005_1_1-1").style.display = "none";
			document.getElementById("ol_005_1_1-3").style.display = "none";
			document.getElementById("ol_005_1_1-4").style.display = "none";
			document.getElementById("ol_005_1_1-5").style.display = "none";
			document.getElementById("ol_005_1_1-6").style.display = "none";
			document.getElementById("ol_005_1_1-7").style.display = "none";
		}else if (data == "menu_OL_3") {
			document.getElementById("ol_005_1_1-3").style.display = "block";
			document.getElementById("ol_005_1_1-1").style.display = "none";
			document.getElementById("ol_005_1_1-2").style.display = "none";
			document.getElementById("ol_005_1_1-4").style.display = "none";
			document.getElementById("ol_005_1_1-5").style.display = "none";
			document.getElementById("ol_005_1_1-6").style.display = "none";
			document.getElementById("ol_005_1_1-7").style.display = "none";
		}else if (data == "menu_OL_4") {
			document.getElementById("ol_005_1_1-4").style.display = "block";
			document.getElementById("ol_005_1_1-1").style.display = "none";
			document.getElementById("ol_005_1_1-2").style.display = "none";
			document.getElementById("ol_005_1_1-3").style.display = "none";
			document.getElementById("ol_005_1_1-5").style.display = "none";
			document.getElementById("ol_005_1_1-6").style.display = "none";
			document.getElementById("ol_005_1_1-7").style.display = "none";
		}else if (data == "menu_OL_5") {
			document.getElementById("ol_005_1_1-5").style.display = "block";
			document.getElementById("ol_005_1_1-1").style.display = "none";
			document.getElementById("ol_005_1_1-2").style.display = "none";
			document.getElementById("ol_005_1_1-3").style.display = "none";
			document.getElementById("ol_005_1_1-4").style.display = "none";
			document.getElementById("ol_005_1_1-6").style.display = "none";
			document.getElementById("ol_005_1_1-7").style.display = "none";
		}else if (data == "menu_OL_6") {
			document.getElementById("ol_005_1_1-6").style.display = "block";
			document.getElementById("ol_005_1_1-1").style.display = "none";
			document.getElementById("ol_005_1_1-2").style.display = "none";
			document.getElementById("ol_005_1_1-3").style.display = "none";
			document.getElementById("ol_005_1_1-4").style.display = "none";
			document.getElementById("ol_005_1_1-5").style.display = "none";
			document.getElementById("ol_005_1_1-7").style.display = "none";
		}else if (data == "menu_OL_7") {
			document.getElementById("ol_005_1_1-7").style.display = "block";
			document.getElementById("ol_005_1_1-1").style.display = "none";
			document.getElementById("ol_005_1_1-2").style.display = "none";
			document.getElementById("ol_005_1_1-3").style.display = "none";
			document.getElementById("ol_005_1_1-4").style.display = "none";
			document.getElementById("ol_005_1_1-5").style.display = "none";
			document.getElementById("ol_005_1_1-6").style.display = "none";
		}
		$("#modal_Checkkeyup").modal("hide");
		Statuesave = "Y";
}

/**************   Validate  key input data    *********************/ 
 var Statuesave = "Y";
 var nameTab	= "";
 $("#div_main_menuBasic_Info_OL *").change(function(event){
	 nameTab 	= "menu_OL_1";
	 Statuesave = "N";
 });
 $("#div_main_menuOL_2 *").change(function(event){
	 nameTab 	= "menu_OL_2";
	 Statuesave = "N";
 });
 $("#div_main_menuOL_3 *").change(function(event){
	 nameTab 	= "menu_OL_3";
	 Statuesave = "N";
 });

$(document).ready( function() {
	/*$('#thai_Name_ol').keyup(function() {
	   var $th = $(this);
	   $th.val( $th.val().replace(/[^a-zA-Z0-9ก-๙\s\-\(\)]/g, "" ));
 
	});	
	
	$('#eng_Name_ol').keyup(function() {
		   var $th = $(this);
		   $th.val( $th.val().replace(/[^a-zA-Z0-9\s\-]/g, "" ));
	 
	});	*/
	 $('#sl_menu3_insurance_premium_ol').prop("disabled",true);
	 //$("#divtb_PM_Rate1 *").attr("disabled", "disabled").off('click');
	 $("#tb_PM_Rate1_OL *").prop("disabled", true);
	 $('#addrowPM_Rate_OL').prop("disabled",true);
	 $('#delrowPM_Rate_OL').prop("disabled",true);
	 
	 /*ผลประโยชน์/ความคุ้มครอง*/
	 $("#benefit_Guaruntee_tbl").addClass("disabledAll");
	 
	 $("input[name='rd_AutoRPU_OL[]']").prop("disabled", true);
	
	 
	// $(".autoComma").autoNumeric('init',{vMin: '0.00', vMax: '999999999.99'});
	
	 
});
 
function thai_Name_ol() {
		var thai_Name  = $('#thai_Name_ol').val();
		if (thai_Name != "") {
			$("#validate_input2_ol").hide();
		}else{
			$("#validate_input2_ol").show();
		}
}

function max_coverage_ol() {	
	var maximum_Protection  = $('#maximum_Protection_To_ol').val();
	if (maximum_Protection != "") {
		$("#validate_input6_2ol").hide();
		$("#text_anniversary_ol").val(maximum_Protection);
		
		if($("#rd_Time_length_ol").prop("checked") == false){
			$("#rd_anniversary_ol").prop("checked", true)
		}else{
			$("#rd_anniversary_ol").prop("checked", false)
			
			var error1 = 0;
			
			if($("#tb_BasicInformation1_OL tbody>tr").length <= 0 ){
				error1++;
			}
			
			$("#tb_BasicInformation1_OL input:text").each(function(){
				if($(this).val() == ""){
					error1++;
				}
			});
			
			if(error1 <= 0){
				$("#validate_input15_ol").hide();
			}else{
				$("#validate_input15_ol").show();
			}	
			
		}
		
		
		if($("#rd_anniversary_ol").prop("checked") == true){
			$("#validate_input15_ol").hide();
			$("#text_anniversary_ol").prop("disabled", false);
			$("#dmy_1_ol").prop("disabled", false);
		}
		
	}else{
		$("#validate_input6_2ol").show();
		$("#text_anniversary_ol").val("");
		$("#rd_anniversary_ol").prop("checked", false);
		$("#text_anniversary_ol").prop("disabled", true);
		$("#dmy_1_ol").prop("disabled", true);
		
		if($("#rd_Time_length_ol").prop("checked") == false){
			$("#rd_anniversary_ol").prop("checked", true)
		}else{
			$("#rd_anniversary_ol").prop("checked", false)
			
			var error1 = 0;
			
			if($("#tb_BasicInformation1_OL tbody>tr").length <= 0 ){
				error1++;
			}
			
			$("#tb_BasicInformation1_OL input:text").each(function(){
				if($(this).val() == ""){
					error1++;
				}
			});
			
			if(error1 <= 0){
				$("#validate_input15_ol").hide();
			}else{
				$("#validate_input15_ol").show();
			}	
			
		}
		
	}
}

/*********Basic Information********/
function checkappStart_OL() {
	var dateto  = $('#appTo_date_ol').val();
	var dateto_split		= dateto.split("/");
	var dateto_day			= dateto_split[0];
	var dateto_month		= dateto_split[1];
	var dateto_year			= dateto_split[2];
	var date_to	= dateto_day + 	dateto_month + dateto_year ;
	var appStart_date  = $('#appStart_date_ol').val();
	var appStart_split		= appStart_date.split("/");
	var appStart_day		= appStart_split[0];
	var appStart_month		= appStart_split[1];
	var appStart_year		= appStart_split[2];
	var date_start = appStart_day + appStart_month + appStart_year ;
}

$("#appStart_date_ol,#appTo_date_ol").keyup(function(e){
	if (e.keyCode != 8){    
	    if ($(this).val().length == 2){
	        $(this).val($(this).val() + "/");
	    }else if ($(this).val().length == 5){
	        $(this).val($(this).val() + "/");
	    }
	}
}); 

function checkappTo_OL() {
	var startDate = $("#appStart_date_ol").val();
	var endDate = $("#appTo_date_ol").val();
	
	if (startDate != "" && endDate != "") {
		var startDate_parse = parseDate($("#appStart_date_ol").val());
	    var endDate_parse = parseDate($("#appTo_date_ol").val());
		//alert("start>>"+startDate_parse+" endDate>>"+endDate_parse);
	    if(startDate_parse > endDate_parse){
	    	message = "วันที่เริ่มต้นต้องน้อยกว่าวันที่สิ้นสุดเสมอ";
			nameTab 	= "menu_OL_1";
			Statuesave = "N";
			alertError(message);
	    }
	}
}

function appStart_date_OL(){		
	/*date from*/
	var date_from 			= $("#appStart_date_ol").val();
		date_from			= date_from.split("/");
	var appStart_day			= date_from[0];
	var appStart_month			= date_from[1];
	var appStart_year			= date_from[2];
	var date_start = new Date(appStart_year + "/" + appStart_month + "/" + appStart_day) ;
	
	var start_day = date_start.getDate();
	var start_month = date_start.getMonth()+1;
	var start_year = date_start.getFullYear();
	
	var start_fulldate = start_year+"/"+start_month+"/"+start_day;
	
	/*jQuery('#appStart_date_ol').datetimepicker({
		  timepicker:false,
		  format:'d/m/Y',
		  yearOffset:543 
		 });
	jQuery('#appTo_date_ol').datetimepicker({
		  onShow:function( ct ){
			 
			 this.setOptions({
				   minDate:start_fulldate?start_fulldate:false
			 })
		  },
		  timepicker:false,
		  format:'d/m/Y',
		  yearOffset:543
	});	*/
}

function appTo_date_OL(){
	/*date from*/
	var date_from 			= $("#appStart_date_ol").val();
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
	var date_to = $("#appTo_date_ol").val();		
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
	
	/*jQuery('#appTo_date_ol').datetimepicker({
		  onShow:function( ct ){
			 this.setOptions({
				   minDate:start_fulldate?start_fulldate:false
			 })
		  },
		  timepicker:false,
		  format:'d/m/Y',
		  yearOffset:543
	});*/
}

function checkdata_OL() {
	
	var age_Start_ol  = $('#age_Start_ol').val();
	var age_To_ol  = $('#age_To_ol').val();
	
	if(age_Start_ol != "" && age_To_ol != ""){
			$("#validate_input6_1ol").hide();
		
		if (Number(age_Start_ol) > Number(age_To_ol)){
			message = "อายุสิ้นสุด จะต้องมีค่ามากกว่าอายุเริ่มต้นเสมอ กรุณาระบุใหม่";
			alertError(message);
			$('#age_To_ol').focus();
		}
		
	}else{
		$("#validate_input6_1ol").show();
	}
		
}

/*function check_value(){
	
}*/

function Comma(Num) 
{
     Num += '';
     Num = Num.replace(/,/g, '');

      x = Num.split('.');
      x1 = x[0];
      x2 = x.length > 1 ? '.' + x[1] : '';
      var rgx = /(\d+)(\d{3})/;
      while (rgx.test(x1))
         x1 = x1.replace(rgx, '$1' + ',' + '$2');
      
      return x1 + x2;
} 

/*Mode 8,9*/
function check_mode_value_OL(id,value){	
	var num_checked = $("#tbl_BI_Mode_OL>tbody input:checkbox:checked").length;
	if(num_checked > 0){
		$("#validate_input8_ol").hide();
	}else{
		$("#validate_input8_ol").show();
	}
	
	if($("#"+id).prop("checked") == true){
		if(value == "SINGLE_SHORT" || value == "SINGLE_PREM"){
			$("#validate_input16_ol").css("display","none");
			$("#rd_Time_insurance_premium_ol").prop("checked", true).prop("readonly", true);
			$("#text_Time_insurance_premium_ol").val("1").prop("readonly", true).prop("disabled", false);
			$("#dmy_4_ol").attr("readonly", "readonly").prop("disabled", false);
			$("#dmy_4_ol option:contains('ปี')").attr("selected", "selected");
			$("#ch_sperately_pay_ch_ol").prop("disabled", false);
			
			$("#text_insurance_premium_ol").val("").prop("disabled", true);
			$("#dmy_3_ol").prop("disabled", true);			
			
			$("#tbl_BI_Mode_OL>tbody input:checkbox:not(:checked)").each(function(){
				$(this).prop("disabled", true);
			});
			
		}else if(value != "SINGLE_SHORT" || value != "SINGLE_PREM"){
			$("#tbl_BI_Mode_OL>tbody input:checkbox:not(:checked)").each(function(){
				if($(this).val() == "SINGLE_SHORT" || $(this).val() == "SINGLE_PREM"){
					$(this).prop("disabled", true);
				}	
			});
		}else{
		
			$("#tbl_BI_Mode_OL>tbody input:checkbox").each(function(){
				$(this).prop("disabled", false);
			});
		}
	}else{
		if(value == "SINGLE_SHORT" || value == "SINGLE_PREM"){
			$("#validate_input16_ol").css("display","inline-block");
			$("#rd_Time_insurance_premium_ol,#rd_insurance_premium_ol").prop("checked",false);
			$("#text_Time_insurance_premium_ol").val("");
			$("#text_Time_insurance_premium_ol, #dmy_4_ol").prop("disabled", true);
			$("#dmy_4_ol option:contains('ปี')").attr("selected", "selected");
			
			$("#tbl_BI_Mode_OL>tbody input:checkbox").each(function(){
				$(this).prop("disabled", false);
			});
		}else{
			var num_count = $("#tbl_BI_Mode_OL>tbody input:checkbox:checked").length;
			if(num_count <= 0){
				$("#tbl_BI_Mode_OL>tbody input:checkbox").prop("disabled", false);
			}
		}		
	}
}

//เพศ
$("input[name='ch_gender_ol[]']").click(function(){
	var chk_gender = $("input[name='ch_gender_ol[]']:checked").length;
	if(chk_gender >= 1){
		$("#validate_input11_ol").hide();
	}else{
		$("#validate_input11_ol").show();
	}
});

$("#ch_male_ol").click(function(){	
	var value = $(this).val();
	var value_flag = $(this).prop("checked");
	
	$("#tb_allCalPM_OL tbody>tr input:checkbox").prop("checked", false);
	$("#tb_allCalPM_OL tbody>tr input:button").attr("disabled", true);
	
	$("#tb_allCalPM_OL tbody>tr").each(function(){
		var chk_value = $(this).find("input:checkbox").val();
		var id = $(this).attr("id");
			id = id.replace("tr_calPM_","");
		
		$("#textshow_tablecalPM_"+id).text("");
		$("#fileuploads_calPMText_"+id).attr("placeholder", "");
		$("#fileuploads_calPMText_"+id).val("");
		$("#spancalPM_"+id).attr("disabled", true);
			
		if(value_flag == true){
			if(value == chk_value){
				$(this).find("input:checkbox").prop("disabled", false);
			}else if(chk_value == "EITHER" || chk_value == "FEMALE"){
				if($("#ch_female_ol").prop("checked") == true){
					$(this).find("input:checkbox").prop("disabled", false);
				}else{
					$(this).find("input:checkbox").prop("disabled", true);
				}
			}
		}else{
			if(value == chk_value){
				$(this).find("input:checkbox").prop("disabled", true);
			}else if(chk_value == "EITHER" || chk_value == "FEMALE"){
				if($("#ch_female_ol").prop("checked") == true){
					$(this).find("input:checkbox").prop("disabled", false);
				}else{
					$(this).find("input:checkbox").prop("disabled", true);
				}
			}
		}
	
	});
	
});

$("#ch_female_ol").click(function(){	
	var value = $(this).val();
	var value_flag = $(this).prop("checked");
	
	$("#tb_allCalPM_OL tbody>tr input:checkbox").prop("checked", false);
	$("#tb_allCalPM_OL tbody>tr input:button").attr("disabled", true);
	
	$("#tb_allCalPM_OL tbody>tr").each(function(){
		var chk_value = $(this).find("input:checkbox").val();
		var id = $(this).attr("id");
			id = id.replace("tr_calPM_","");
		
		$("#textshow_tablecalPM_"+id).text("");
		$("#fileuploads_calPMText_"+id).attr("placeholder", "");
		$("#fileuploads_calPMText_"+id).val("");
		$("#spancalPM_"+id).attr("disabled", true);
			
		if(value_flag == true){
			if(value == chk_value){
				$(this).find("input:checkbox").prop("disabled", false);
			}else if(chk_value == "EITHER" || chk_value == "MALE"){
				if($("#ch_male_ol").prop("checked") == true){
					$(this).find("input:checkbox").prop("disabled", false);
				}else{
					$(this).find("input:checkbox").prop("disabled", true);
				}
			}
		}else{
			if(value == chk_value){
				$(this).find("input:checkbox").prop("disabled", true);
			}else if(chk_value == "EITHER" || chk_value == "MALE"){
				if($("#ch_male_ol").prop("checked") == true){
					$(this).find("input:checkbox").prop("disabled", false);
				}else{
					$(this).find("input:checkbox").prop("disabled", true);
				}
			}
		}
	
	});
	
});

//ระยะประกันของสัญญาประกันชีวิต
function text_anniversary_ol() {
	var text_anniversary_cl  = $('#text_anniversary_ol').val();
	var unit_anniversary_cl = $("#dmy_1_ol option:selected").text();
	
	$("#text_anniversary_ol").on("keyup", function(){
		if (text_anniversary_cl != "" && unit_anniversary_cl != "None") {
			$("#validate_input15_ol").hide();
		}else{
			$("#validate_input15_ol").show();
		}
	});
	
	$("#dmy_1_ol").on("change", function(){
		if (text_anniversary_cl != "" && unit_anniversary_cl != "None") {
			$("#validate_input15_ol").hide();
		}else{
			$("#validate_input15_ol").show();
		}
	});	
}
function checkMax_text_anniversary_ol() {
	var text_anniversary_ol  = $('#text_anniversary_ol').val();
	var unit_anniversary_ol = $("#dmy_1_ol option:selected").text();
	var maximum_Protection_ol = $("#maximum_Protection_To_ol").val();

	if(Number(text_anniversary_ol) > Number(maximum_Protection_ol)){
		message = "คุ้มครองถึงอายุจะต้องมีค่าน้อยกว่าหรือเท่ากับคุ้มครองสูงสุดถึงเสมอ กรุณาระบุใหม่";
		alertError(message);
		$('#text_anniversary_ol').val("");
		$('#text_anniversary_ol').focus();
	}	
	
}

$("#rd_anniversary_ol").click(function(){	
	var rd_anniversary_cl = document.getElementById("rd_anniversary_ol");
	if (rd_anniversary_cl.checked == true) {
		document.getElementById("text_anniversary_ol").disabled = false;
		document.getElementById("dmy_1_ol").disabled = false;	
		//$("#tb_BasicInformation1 *").prop("disabled", true);
		$("#tb_BasicInformation1_OL tbody>tr").remove();
		
		if($("#tb_BasicInformation1_OL tbody>tr").length <= 0){
			addRowBasicInformation1_OL();
			
			$("#tb_BasicInformation1_OL tbody>tr").addClass("disabledAll");
		}
		
		if($("#text_anniversary_ol").val() == ""){
			$("#validate_input15_ol").show();
		}		
		$("#dmy_1_ol option:contains('ปี')").prop("selected", "selected");
		$("#addRowBasicInfo_OL, #deleteRowBasicInfo_OL").prop("disabled", true);
	}
});
$("#rd_Time_length_ol").click(function(){	
	var rd_Time_length_cl = document.getElementById("rd_Time_length_ol");
	if (rd_Time_length_cl.checked == true){
		$('#text_anniversary_ol').val("");	
		$('#text_anniversary_ol').prop("disabled",true);
		$("#tb_BasicInformation1_OL *").prop("disabled", false);
		$("#dmy_1_ol").prop("disabled", true)		
		$("#dmy_1_ol option:contains('ปี')").prop("selected", "selected");
		$("#addRowBasicInfo_OL, #deleteRowBasicInfo_OL").prop("disabled", false);
		$("#tb_BasicInformation1_OL tbody>tr").removeClass("disabledAll");
		
		var error1 = 0;
		
		if($("#tb_BasicInformation1_OL tbody>tr").length <= 0 ){
			error1++;
		}
		
		$("#tb_BasicInformation1_OL input:text").each(function(){
			if($(this).val() == ""){
				error1++;
			}
		});
		
		if(error1 <= 0){
			$("#validate_input15_ol").hide();
		}else{
			$("#validate_input15_ol").show();
		}	
	}
});

$("#tb_BasicInformation1_OL *").on("change", function(){
	var error = 0;
	$("#tb_BasicInformation1_OL input:text").each(function(){
		if($(this).val() == ""){
			error++;
		}
	});
	if(error <= 0){
		$("#validate_input15_ol").hide();
	}else{
		$("#validate_input15_ol").show();
	}	
 });

$("#rd_insurance_premium_ol").click(function(){	
	var rd_insurance_premium_cl = document.getElementById("rd_insurance_premium_ol");
	if (rd_insurance_premium_cl.checked == true) {
		document.getElementById("text_insurance_premium_ol").disabled = false;
		document.getElementById("text_Time_insurance_premium_ol").disabled = true;
		document.getElementById("ch_sperately_pay_ch_ol").disabled = true;
		document.getElementById("dmy_3_ol").disabled = false;
		$('#text_Time_insurance_premium_ol').val("");
		$("#validate_input16_ol").show();
		document.getElementById("dmy_4_ol").disabled = true;
		$("#dmy_4_ol option:contains('ปี')").prop("selected", "selected");
		document.getElementById("ch_sperately_pay_ch_ol").checked = false;
		$("#div_Sperately_Pay_ol *").attr("disabled", "disabled").off('click');
		
		$("#div_Sperately_Pay_ol input:checkbox").prop("checked", false);
		$("#div_Sperately_Pay_ol input:text").val("0.00");
	}
});

$("#rd_Time_insurance_premium_ol").click(function(){	
	var rd_Time_insurance_premium_cl = document.getElementById("rd_Time_insurance_premium_ol");

	if (rd_Time_insurance_premium_cl.checked == true) {
		document.getElementById("text_Time_insurance_premium_ol").disabled = false;
		document.getElementById("text_insurance_premium_ol").disabled = true;
		//document.getElementById("ch_sperately_pay_ch").disabled = false;
		document.getElementById("dmy_4_ol").disabled = false;
		$('#text_insurance_premium_ol').val("");
		$("#validate_input16_ol").show();
		document.getElementById("dmy_3_ol").disabled = true;
		$("#dmy_3_ol option:contains('ปี')").prop("selected", "selected");
		
		$("#text_Time_insurance_premium_ol").prop("readonly", false);
		$("#dmy_4_ol").removeAttr("readonly");
		
		if($("#dmy_4_ol option:selected").text() == "ปี"){
			$("#ch_sperately_pay_ch_ol").prop("disabled", false);
		}else{
			$("#ch_sperately_pay_ch_ol").prop("disabled", true);
		}
		
		/*เช็คว่าเลือก mode เป็น 8,9 อยู่*/		
		if($("#mode3_ol").prop("checked") == true || $("#mode4_ol").prop("checked") == true){
			$("#text_Time_insurance_premium_ol").val("1");
			document.getElementById("text_Time_insurance_premium_ol").disabled = true;
			document.getElementById("dmy_4_ol").disabled = true;
			$("#validate_input16_ol").hide();
		}
	}
});

function text_insurance_premium_ol() {
	var text_insurance_premium_ol  = $('#text_insurance_premium_ol').val();
	var unit_insurance_premium_ol = $("#dmy_3_ol option:selected").text();
	
	$("#text_insurance_premium_ol").on("keyup", function(){
		if (text_insurance_premium_ol != "" && unit_insurance_premium_ol != "None") {
			$("#validate_input16_ol").hide();
		}else{
			$("#validate_input16_ol").show();
		}
	});
	
	$("#dmy_3_ol").on("change", function(){
		if (text_insurance_premium_ol != "" && unit_insurance_premium_ol != "None") {
			$("#validate_input16_ol").hide();
		}else{
			$("#validate_input16_ol").show();
		}
	});	
}

function text_Time_insurance_premium_ol() {
	var text_Time_insurance_premium_ol  = $('#text_Time_insurance_premium_ol').val();
	var unit_Time_insurance_premium_ol = $("#dmy_4_ol option:selected").text();
	
	$("#text_Time_insurance_premium_ol").on("keyup", function(){
		if (text_Time_insurance_premium_ol != "" && unit_Time_insurance_premium_ol != "None") {
			$("#validate_input16_ol").hide();
		}else{
			$("#validate_input16_ol").show();
		}
	});
	
	$("#dmy_4_ol").on("change", function(){
		if (text_Time_insurance_premium_ol != "" && unit_Time_insurance_premium_ol != "None") {
			$("#validate_input16_ol").hide();
		}else{
			$("#validate_input16_ol").show();
		}
	});	
}

$("#dmy_4_ol").on("change", function(){
	var dd_value = $(this).find("option:selected").val();
	if(dd_value == "YEAR"){
		$("#ch_sperately_pay_ch_ol").prop("disabled", false);
	}else{
		$("#ch_sperately_pay_ch_ol").prop("disabled", true);
	}
});

//ตารางมรณะ
function ch_Table_D_ol(row) {
	var check_D  = document.getElementById("ch_D_ol_"+row);
	var value = $("#ch_D_ol_"+row).val();
	
	if (check_D.checked == true){
		document.getElementById("btn_Adddata_D_ol_"+row).disabled = false;
		
		/*เช็คเพศ*/
		if(value == "EITHER"){
			$("#tb_BasicInformation_Death_OL tbody>tr").each(function() {
					var chk_val = $(this).find("input:checkbox");
					var btn = $(this).find("input:button");
					
				if($("#ch_male_ol").prop("checked") == true){
					if($(chk_val).val() == "MALE"){
						$(chk_val).prop("disabled", true);
						$(btn).prop("disabled", true);
					}
				}
				if($("#ch_female_ol").prop("checked") == true){
					if($(chk_val).val() == "FEMALE"){
						$(chk_val).prop("disabled", true);
						$(btn).prop("disabled", true);
					}
				}	
					
			 });
		}else{					
				$("#tb_BasicInformation_Death_OL tbody>tr").each(function() {
					var chk_val = $(this).find("input:checkbox");
					var btn = $(this).find("input:button");
					if($(chk_val).val() == "EITHER"){
						$(chk_val).prop("disabled", true);
						$(btn).prop("disabled", true);
					}else if($(chk_val).val() == "FEMALE" || $(chk_val).val() == "MALE"){
						if($("#ch_female_ol").prop("checked") == true && $("#ch_male_ol").prop("checked") == true){	
							$(chk_val).prop("checked", true);
						}
					}
				});			
		}				
	}else{		
		document.getElementById("btn_Adddata_D_ol_"+row).disabled = true;
		$("#textshow_tableD_ol_"+row).text(""); 
		$("#btn_Adddata_D_ol_"+row).prop("disabled", false);
		
		/*เช็คเพศ*/
		if(value == "EITHER"){
			$("#tb_BasicInformation_Death_OL tbody>tr").each(function() {
					var chk_val = $(this).find("input:checkbox");
					var btn = $(this).find("input:button");
					
					if($("#ch_male_ol").prop("checked") == true){
						if($(chk_val).val() == "MALE"){
							$(chk_val).prop("disabled", false);
							$(btn).prop("disabled", false);
						}
					}
					if($("#ch_female_ol").prop("checked") == true){
						if($(chk_val).val() == "FEMALE"){
							$(chk_val).prop("disabled", false);
							$(btn).prop("disabled", false);
						}
					}
					
			 });
		}else{
			if($("#ch_female_ol").prop("checked") == true && $("#ch_male_ol").prop("checked") == true){
				if(value == "FEMALE" || value == "MALE"){
					$("#tb_BasicInformation_Death_OL tbody>tr").each(function() {
						var chk_val = $(this).find("input:checkbox");
						var btn = $(this).find("input:button");
						if(value == "FEMALE" && $(chk_val).val() == "MALE"){
							$(chk_val).prop("checked", false);
							$(this).find("td:nth-child(3) label").text("");
							if($(chk_val).prop("checked") == true){
								$("#ch_D_ol_0").prop("disabled", true);
								$("#btn_Adddata_D_ol_0").prop("disabled", true);
							}else{
								$("#ch_D_ol_0").prop("disabled", false);
								$("#btn_Adddata_D_ol_0").prop("disabled", false);
							}
						}else if(value == "MALE" && $(chk_val).val() == "FEMALE"){
							$(chk_val).prop("checked", false);
							$(this).find("td:nth-child(3) label").text("");
							if($(chk_val).prop("checked") == true){
								$("#ch_D_ol_0").prop("disabled", true);
								$("#btn_Adddata_D_ol_0").prop("disabled", true);
							}else{
								$("#ch_D_0").prop("disabled", false);
								$("#btn_Adddata_D_ol_0").prop("disabled", false);
							}
						}
				 	});
				}
			}else if($("#ch_male_ol").prop("checked") == true && $("#ch_female_ol").prop("checked") == false){
				$("#tb_BasicInformation_Death_OL tbody>tr").each(function() {
					var chk_val = $(this).find("input:checkbox");
					var btn = $(this).find("input:button");
					if($(chk_val).val() == "EITHER"){
						$(chk_val).prop("disabled", false);
						$(btn).prop("disabled", false);
						$(this).find("td:nth-child(3) label").text("");
					}
				});	
			}else if($("#ch_male_ol").prop("checked") == false && $("#ch_female_ol").prop("checked") == true){
				$("#tb_BasicInformation_Death_OL tbody>tr").each(function() {
					var chk_val = $(this).find("input:checkbox");
					var btn = $(this).find("input:button");
					if($(chk_val).val() == "EITHER"){
						$(chk_val).prop("disabled", false);
						$(btn).prop("disabled", false);
						$(this).find("td:nth-child(3) label").text("");
					}
				});	
				
			}
		}
	
	}	
}
var rowtype_d = "";
var rownum_d = "";

//Radio
var valueTable_D = "";
var startYear = "";
function ra_table_D_ol(row) {
	valueTable_D = row;
	startYear = $("#mo_Table_calPM_OL tbody>tr").eq(row).find('td:nth-child(1) #start_year').val();
}
//Save
function tax_save_calPM_OL(){
	
	var num_chk = $("#mo_Table_calPM_OL input:radio:checked").length;

	if(num_chk > 0){
		var ra_table_D  = $("#text_Table_calPM_"+valueTable_D).text();
		var rd_table_D  = $("#ra_table_calPM_"+valueTable_D).val();	
		var startYear = $("#modal_start_year"+valueTable_D).val();
		var file_id = $("#modal_file_id"+valueTable_D).val();
		var file_name = $("#modal_file_name"+valueTable_D).val();
		
		$("#textshow_tablecalPM_"+rowtype_d+"_ol_"+rownum_d).text(ra_table_D); 
		$("#hdd_premAssumRate_"+rowtype_d+"_ol_"+rownum_d).val(rd_table_D); 
		
		var gender = "";

		switch(rownum_d){
			case 0: gender = "";
				break;
			case 1: gender = "_F";
				break;
			case 2: gender = "_M";
				break;
		}
		
		var layout = $("#hdd_calPM_"+rowtype_d+"_ol_"+rownum_d+"").attr("data-pattern");
		var placeholder = layout+startYear+gender;
		var placeholder_text = layout+startYear+gender+".txt";
		$("#fileuploads_calPMText_"+rowtype_d+"_ol_"+rownum_d).attr("placeholder",placeholder_text);
		var uploadfile = "selectFileTXT_OL(2,'fileuploads_calPM_"+rowtype_d+"_ol_"+rownum_d+"','"+placeholder+"','','','')";
		$("#fileuploads_calPM_"+rowtype_d+"_ol_"+rownum_d).attr("onchange",uploadfile);
		
		if(file_id != 0){
			$("#spancalPM_"+rowtype_d+"_ol_"+rownum_d).attr("disabled", true);
			$("#fileuploads_calPM_"+rowtype_d+"_ol_"+rownum_d).prop("disabled", true);
			$("#fileuploads_calPMText_"+rowtype_d+"_ol_"+rownum_d).val(file_name);
		}else{
			$("#spancalPM_"+rowtype_d+"_ol_"+rownum_d).attr("disabled", false);
			$("#fileuploads_calPM_"+rowtype_d+"_ol_"+rownum_d).prop("disabled", false);
			$("#fileuploads_calPMText_"+rowtype_d+"_ol_"+rownum_d).val("");
		}
		
		$("#show_Table_calPM_OL").modal("hide");
		
	}else{
		message = "กรุณาเลือกตารางที่ใช้ในการคำนวณเบี้ยค่ะ";
		alertError(message);
	}
	
}
//Radio
var valueTable_TPD = "";
function ra_table_TPD_ol(row) {
	valueTable_TPD = row;
}
//save
function tax_save_TPD_ol() {
	var ra_table_TPD  = $("#text_Table_TPD_ol_"+valueTable_TPD).text();
	var rd_table_TPD  = $("#ra_table_TPD_ol_"+valueTable_TPD).val();
	$("#textshow_tableTPD_ol_"+rowtext_tpd).text(ra_table_TPD); 
	$("#hdd_tpd_ol_id"+rowtext_tpd).val(rd_table_TPD); 
}
/////

function addRowBasicInformation1_OL(){
	var typeMoney = $('select.item-i').val() || 0;
			var lastImgOK = $('#tb_BasicInformation1_OL >tbody>tr:last>td:first').attr("id") || 0;
			var numberImgOK = 0;
			
			if(lastImgOK == 0){
				numberImgOK = 1;
			}else{
				numberImgOK = Number(lastImgOK.replace("td_BasicInformation1_OL_",""))+1;
			}
			var newID = "td_BasicInformation1_OL_"+numberImgOK;
			var ftOnclick = 'imgCheckbox("'+newID+'");';
			
			var row = "";
			row = "<tr id='tbody_OL_BasicInformation_"+numberImgOK+"'>"+
				"<td width='11%' class='text-center borderBlack' id="+"'"+newID+"'"+" onclick='"+ftOnclick+"' style='vertical-align: middle;'><i class='glyphicon glyphicon-edit'></i></td>"+
				"<td width='21%' class='borderBlack'><input id='datefrom_OL_"+numberImgOK+"' class='auto form-control text-center margin-padding0' type='text' onkeypress='validate(event);' onblur='checkFromToPeriod_OL("+numberImgOK+");' data-v-min='0' data-v-max='999' maxlength='3'></td>"+
				"<td width='21%' class='text-center borderBlack'></td>"+
				"<td width='21%' class='borderBlack'><input id='dateto_OL_"+numberImgOK+"' class='auto form-control text-center margin-padding0' type='text' onkeypress='validate(event); validate_zero_tovalue_OL("+numberImgOK+");' onkeyup='validate_zero_tovalue_OL("+numberImgOK+");' onblur='checkFromToPeriod_OL("+numberImgOK+");' data-v-min='0' data-v-max='999' maxlength='3'></td>"+
				"<td width='21%' class='text-center borderBlack'></td>"+
				  "</tr>";
			$("#tb_BasicInformation1_OL tbody").append(row);
			$('.auto').autoNumeric('init');
			
			var cloneUnitFrom  = $('#dmy_1_ol').clone();
			$(cloneUnitFrom).attr("id","durationFromOL_"+numberImgOK+"");
			$(cloneUnitFrom).attr("onclick","durationFromOL("+numberImgOK+");");
			$(cloneUnitFrom).attr("disabled", false);
			$(cloneUnitFrom).appendTo("#tbody_OL_BasicInformation_"+numberImgOK+">td:nth-child(3)");
			
			var cloneUnitTo  = $('#dmy_1_ol').clone();
			$(cloneUnitTo).attr("id","durationToOL_"+numberImgOK+"");
			$(cloneUnitTo).attr("onclick","durationToOL("+numberImgOK+");");
			$(cloneUnitTo).attr("disabled", false);
			$(cloneUnitTo).appendTo("#tbody_OL_BasicInformation_"+numberImgOK+">td:nth-child(5)");
			
			var error = 0;
			$("#tb_BasicInformation1_OL input:text").each(function(){
				if($(this).val() == ""){
					error++;
				}
			});
			
			if(error <= 0){
				$("#validate_input15_ol").hide();
			}else{
				$("#validate_input15_ol").show();
			}
			
}
function durationFromOL(row) {
	var durationFrom  = $('#durationFromOL_'+row).val();
	$('#durationToOL_'+row).val(durationFrom);
}
function durationToOL(row) {
	var durationTo  = $('#durationToOL_'+row).val();
	$('#durationFromOL_'+row).val(durationTo);
}
function deleteRowBasicInformation1_OL()
{
	var imgOKcount = $("#tb_BasicInformation1_OL i.glyphicon-ok").length;
	if(imgOKcount <= 0)
	{	
		message = "กรุณาเลือกรายการที่ต้องการลบ";
		alertError(message);
	}else{
	message = "ต้องการลบรายการใช่หรือไม่";
	alertDeleteError(message);
	
	$("#btn_confirm_del").click(function(){
		var lastImgOK = $('#tb_BasicInformation1_OL >tbody>tr:last>td:first').attr("id") || 0;	
		var numberImgOK = 0;
		if(lastImgOK == 0){
			numberImgOK = 1;
		}else{
			numberImgOK = Number(lastImgOK.replace("td_BasicInformation1_OL_",""))+1;
		}
		for(var i = 1;i<=numberImgOK;i++)
			{
				var checked = $('#tbody_OL_BasicInformation_'+i+' >td:first>i').attr("class");
				if(checked == "glyphicon glyphicon-ok"){	
					deleteTableRow('#tbody_OL_BasicInformation_'+i);				
				}
		}
		
		if($("#tb_BasicInformation1_OL input:text").length <= 0){
			$("#validate_input15_ol").show();
		}else{
			$("#validate_input15_ol").hide();
		}
	});			
  }
}	

function text_insurance_premium_ol() {
	var text_insurance_premium_ol  = $('#text_insurance_premium_ol').val();
	var unit_insurance_premium_ol = $("#dmy_3_ol option:selected").text();
	
	$("#text_insurance_premium_ol").on("keyup", function(){
		if (text_insurance_premium_ol != "" && unit_insurance_premium_ol != "None") {
			$("#validate_input16_ol").hide();
		}else{
			$("#validate_input16_ol").show();
		}
	});
	
	$("#dmy_3_ol").on("change", function(){
		if (text_insurance_premium_ol != "" && unit_insurance_premium_ol != "None") {
			$("#validate_input16_ol").hide();
		}else{
			$("#validate_input16_ol").show();
		}
	});	
}
///////////////////ตาราง แบ่งจ่าย ///////////////////////////////
function ch_payment_fun_ol(row) {
	
	var ch_payment = document.getElementById("ch_payment_ol_"+row);
	if (ch_payment.checked == true) {
		$("#set_Premium_Rate_ol_"+row).attr("disabled", false);
	}else{
		$("#set_Premium_Rate_ol_"+row).attr("disabled", true).val("0.00");
	}
}

function check_value_payment_OL(row){
	var value = $("#set_Premium_Rate_ol_"+row).val()
	var value_add = $("#lb_payment_ol_"+row).text();
	var value_sum = "";

	if(value != "" && value != 0){
		value_sum = Number(value) * Number(value_add);
		if(value_sum < 100){
			message = "อัตราเบี้ยประกันภัยรายงวดต้องไม่น้อยกว่าหรือเท่ากับ 100%";
			alertError(message);
			$("#set_Premium_Rate_ol_"+row).focus();
			$("#set_Premium_Rate_ol_"+row).val("0.00");
		}
	}
}

/*ระยะเวลาคุ้มครอง*/
function checkFromToPeriod_OL(id) {
	var from_value = $("#datefrom_OL_"+id).val();
	var from_unit = $("#durationFrom_OL_"+id+" option:selected").val();
	var to_value = $("#dateto_OL_"+id).val();
	var to_unit = $("#durationTo_OL_"+id+" option:selected").val();
	
	if(from_value != "" && from_unit != "NONE" && to_value != "" && to_unit != "NONE"){
		if(Number(from_value) > Number(to_value)){
			 message = "ระยะเวลาคุ้มครองสิ้นสุดต้องมากกว่าเสมอ";
			  alertError(message);
			  $("#dateto_OL_"+id).focus();
			  $("#dateto_OL_"+id).val("");
		}
	}		 
}
function validate_zero_tovalue_OL(id){
	var to_value = $("#dateto_OL_"+id).val();
	if(to_value == '0'){
		$("#dateto_OL_"+id).val('');
	  }
}

////เลือกแบงจ่าย////////////
$("#ch_sperately_pay_ch_ol").click(function(){	
	var ch_sperately_pay_ch = document.getElementById("ch_sperately_pay_ch_ol");
	if (ch_sperately_pay_ch.checked == true) {
		  $('#tb_Sperately_Pay_ol input:checkbox').attr('disabled', false);	  
	}else{
		  $('#tb_Sperately_Pay_ol input:checkbox').attr('disabled', true);
		  $('#tb_Sperately_Pay_ol input:checkbox').prop('checked', false);
		  $('#tb_Sperately_Pay_ol').find("td:nth-child(3) input").prop('disabled', true);
		  $('#tb_Sperately_Pay_ol').find("td:nth-child(3) input").val("0.00");
	}
});

function selectFileTXT_OL(type,select_file,file_format,file_format2,file_format3,view_btn){
	var tbl_name = "";
	var tbl_col = "";
	var view_button = view_btn;
	var select_file_name = "";
	var validateFile = "";
	var cov_code = $("#pass_Insurance_coverage_ol").val();
	var modal_download = "";
	/*var for save file*/
	var file_id = "";   	
	var file_type_id = "";
 	var file_url = "";
 	var user_code = "0000000";
 	var datajson = "";

	/*ลดหย่อนภาษี*/
	if(type == 1){
		tbl_mainName = "tb_TaxReduce_OL";
		
		del_button = "span_TaxDel_OL";
		download_button = "span_Taxdownload_OL";
		modal_download = "download_tb_TaxReduce_view_OL";
		select_file_name = select_file.replace("fileuploads_Tax","");
		select_file_name = select_file_name.replace("_OL","");
		selectFile = "fileuploads_Tax"+select_file_name+"_OL";
		textFile = "fileuploads_TaxText"+select_file_name+"_OL";
		
		/*Khwan Fix show column 29/11/2019*/
		if(select_file_name == 1){
			//สุขภาพ 15,000 บาท
			modalAuto_name = "modal_TableTaxReduceAuto_OL";
			modal_name = "modal_TableTaxReduce_OL";	
			tbl_name = "tb_TaxReduce_view_OL";
			tblAuto_name = "tb_TaxReduce_viewAuto_OL";
			file_button1 = "btn_submit_TaxAuto_OL";
			file_button2 = "btn_cancel_TaxAuto_OL";
			tbl_col = 64;	
		}else{
			//คุ้มครองชีวิตตั้งแต่ 10 ปีขึ้นไป
			modalAuto_name = "modal_TableTaxReduceAuto2_OL";
			modal_name = "modal_TableTaxReduce2_OL";	
			tbl_name = "tb_TaxReduce_view2_OL";
			tblAuto_name = "tb_TaxReduce_viewAuto2_OL";
			file_button1 = "btn_submit_TaxAuto2_OL";
			file_button2 = "btn_cancel_TaxAuto2_OL";
			tbl_col = 63;	

		}
		
		/*send to servlet*/
		file_id = $("#hdd_fileID_OL"+select_file_name).val();   	
		file_type_id = "3";
		
		rate_cat_id = $("#tax_type_OL"+select_file_name).val();
		sub_cat_id = $("#hdd_rateSub_OL"+select_file_name).val();
		
	}else if(type == 2){
		tbl_mainName = "tb_CalPM_viewAuto_OL";
		tbl_name = "";
		tblAuto_name = "tb_CalPM_viewAuto_OL";
		modalAuto_name = "modal_TableCalPMAuto_OL";
		modal_name = "";
		tbl_col = 42;		
		file_button1 = "btn_submit_CalPMAuto_OL";
		file_button2 = "btn_cancel_CalPMAuto_OL";
		del_button = "";
		download_button = "";
		modal_download = "";
		select_file_name = select_file.replace("fileuploads_calPM_","");
		selectFile = "fileuploads_calPM_"+select_file_name;
		textFile = "fileuploads_calPMText_"+select_file_name;
		
		/*send to servlet*/
		file_id = "";   	
		file_type_id = "3";
		
		rate_cat_id = $("#hdd_calPM_"+select_file_name).val();
		sub_cat_id = $("#hdd_calPM_"+select_file_name).attr("data-subcat");
		prem_assum_rate = $("#hdd_premAssumRate_"+select_file_name).val();
		
	}else if(type == 3){
		tbl_mainName = "tb_DVAuto_OL";
		tbl_name = "tb_DVSee_OL";
		tblAuto_name = "tb_DVAuto_OL";
		modalAuto_name = "modal_DVAuto_OL";
		modal_name = "modal_DVSee_OL";
		tbl_col = 22;		
		file_button1 = "btn_submit_DVAuto_OL";
		file_button2 = "btn_cancel_DVAuto_OL";
		del_button = "";
		download_button = "";
		modal_download = "download_tb_DVSee_OL";
		select_file_name = "";
		selectFile = select_file;
		textFile = "input_fileGuaruntee_OL";
		view_button = "see_file_input_fileGuaruntee_OL";
		/*send to servlet*/
		file_id = "";   	
		file_type_id = "3";
		
		rate_cat_id = $("#rateCat_dividend_OL").val();
		sub_cat_id = $("#rateSubCat_dividend_OL").val();
		prem_assum_rate = "";
		
	}
	
	var headerText = $("#"+tbl_mainName+">tbody>tr").eq(Number(select_file_name)-1).find("td:nth-child(2)>input").val();
	
	$("#"+selectFile).click(function () {
	    this.value = null;	 
	});
	
	$("#"+tblAuto_name+" tbody").empty();
	
	if(type != 2 && tbl_name != ""){
		$("#"+tbl_name+" tbody").empty();
	}
		
	var file_name = $("#"+selectFile).val().replace(/\\/g, '/').replace(/.*\//, '');
	var file_path = $("#"+selectFile).val();
	
	if(type == 2){
		var file_pattern = $("#hdd_calPM_"+select_file_name).attr("data-name");
	}else{
		var file_pattern = file_name.replace(cov_code, "{Code}");
	}
	
	
	$("#"+modalAuto_name+" .modal-header>h4>span").text(file_name);
	$("#"+file_button1).unbind();

	if(file_format2 != "" && file_format3 == ""){
		if(check_filename_OL(selectFile, file_format, file_format2, "") == false){
			$("#"+textFile).val("");
			$("#"+selectFile).val("");
			$('#'+view_button).prop('disabled', true);		
			$('#'+view_button+">span").removeClass("activecolorblue").addClass("activecolorgray");

		}else{
			openFile(event,selectFile,tbl_name,tbl_col);
			openFile(event,selectFile,tblAuto_name,tbl_col);	
			
			$("#base64_fileTXT_OL").val("");
			convertToBase64_OL(selectFile, file_type_id)
			
			$("#"+modalAuto_name).modal("show");	
			
			$("#"+file_button1).unbind();
			$("#"+file_button1).click(function() {
				
				
				$("#modal_waiting").modal('show');
				 var base64 = $("#base64_fileTXT_OL").val();
				 if(base64 != ""){
					 var dateTime = getCurrentDate();
		    		 var file_name_update = "3_"+dateTime+".txt";
		    		 
		    		 		datajson = {				        	
					    		"method" : "uploadFile_txt",
					    		"passInsurance" : $("#pass_Insurance_coverage_ol").val(),
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
						 	    	
						 	    	var obj_ref = response.upload_ref;
						 	    	console.log(obj_ref)
						 	    	
									/*save file*/				
									datajson = {				        	
											file_id 		: file_id,
											file_type_id 	: file_type_id,
											file_name 		: file_name,
											file_url		: obj_ref,
											file_pattern	: file_pattern,
											rate_cat_id 	: rate_cat_id,
											sub_cat_id		: sub_cat_id,
											user_code		: user_code	        
									}
													
									$.ajax({
									    type: "POST",
									    url : "BasePlanCL_save_file_Servlet",
									    data: datajson,       
									    success : function(response) {					    	
									    	$("#hdd_fileID_OL"+select_file_name).val(response.file_id);
									    	$("#hdd_layoutID_OL"+select_file_name).val(response.rate_layout_id);
									    	$("#"+textFile).val(response.file_name);
									    	$('#'+download_button+"_"+select_file_name+">span").attr("onclick", "openFile_target('"+file_name+"','"+obj_ref+"','txt_download')");
									    	$('#'+view_button+">span").attr("onclick", "openFileTextBasePlan_OL('"+file_name+"','"+obj_ref+"',"+tbl_col+",'"+tbl_name+"','"+modal_name+"')");
									    	
									    	$("#"+modal_download).attr("onclick", "openFile_target('"+file_name+"','"+obj_ref+"','txt_download')");
									    	$("#modal_waiting").modal('hide');

									    	$("body").addClass("body_nopadding");
									    	
									    	$("#base64_fileTXT_OL").val("");
									    },
									    error : function(response) {	
									    	alert("save file in selectFileTXT_OL error");
									    }
									});				
									/*end save file*/
						 	    	
						 	    }
						    })
				 		}
				

					$("#"+textFile).val(file_name);
					
					$('#'+view_button+">span").removeClass("activecolorgray").addClass("activecolorblue");
					$('#'+del_button+"_"+select_file_name+">span").removeClass("activecolorgray").addClass("activecolorblue");
					$('#'+download_button+"_"+select_file_name+">span").removeClass("activecolorgray").addClass("activecolorblue");
					
					$('#'+view_button).click(function(){
						var view_button_ID = view_button.replace("span_TaxOpen_","");
						var headerText_view = $("#"+tbl_mainName+">tbody>tr").eq(Number(view_button_ID)-1).find("td:nth-child(3) input[type='text']").val();
						$("#"+modal_name+" .modal-header>h4>span").html(headerText_view);
						
						$("#"+modal_name).modal('show');
					})	
				
							
			});
			
			$("#"+file_button2).click(function() {
				$("#"+textFile).val("");				
				$('#'+view_button).prop('disabled', true);
				$('#'+view_button+">span").removeClass("activecolorblue").addClass("activecolorgray");
				$('#'+del_button+"_"+select_file_name+">span").removeClass("activecolorblue").addClass("activecolorgray");
				$('#'+download_button+"_"+select_file_name+">span").removeClass("activecolorblue").addClass("activecolorgray");
			});
		}	

	}else if(file_format2 != "" && file_format3 != ""){
		if(check_filename_OL(selectFile, file_format, file_format2, file_format3) == false){
			$("#"+textFile).val("");
			$("#"+selectFile).val("");
			$('#'+view_button).prop('disabled', true);		
			$('#'+view_button+">span").removeClass("activecolorblue").addClass("activecolorgray");

		}else{
			openFile(event,selectFile,tbl_name,tbl_col);
			openFile(event,selectFile,tblAuto_name,tbl_col);			
			
			$("#base64_fileTXT_OL").val("");
			convertToBase64_OL(selectFile, file_type_id)
			$("#"+modalAuto_name).modal("show");	
			
			$("#"+file_button1).unbind();
			$("#"+file_button1).click(function() {
				
				$("#modal_waiting").modal('show');
				 var base64 = $("#base64_fileTXT_OL").val();
				 if(base64 != ""){
					 var dateTime = getCurrentDate();
		    		 var file_name_update = "3_"+dateTime+".txt";
		    		 
		    		 		datajson = {				        	
					    		"method" : "uploadFile_txt",
					    		"passInsurance" : $("#pass_Insurance_coverage_ol").val(),
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
						 	    	
						 	    	var obj_ref = response.upload_ref;
						 	    	console.log(obj_ref)
						 	    	
						 	    	/*save file*/				
									datajson = {				        	
											file_id 		: file_id,
											file_type_id 	: file_type_id,
											file_name 		: file_name,
											file_url		: obj_ref,
											file_pattern	: file_pattern,
											rate_cat_id 	: rate_cat_id,
											sub_cat_id		: sub_cat_id,
											user_code		: user_code	        
									}
													
									$.ajax({
									    type: "POST",
									    url : "BasePlanCL_save_file_Servlet",
									    data: datajson,       
									    success : function(response) {					    	
									    	$("#hdd_fileID_OL"+select_file_name).val(response.file_id);
									    	$("#hdd_layoutID_OL"+select_file_name).val(response.rate_layout_id);
									    	$("#"+textFile).val(response.file_name);
									    	$('#'+download_button+"_"+select_file_name+">span").attr("onclick", "openFile_target('"+file_name+"','"+obj_ref+"','txt_download')");
									    	$('#'+view_button+">span").attr("onclick", "openFileTextBasePlan_OL('"+file_name+"','"+obj_ref+"',"+tbl_col+",'"+tbl_name+"','"+modal_name+"')");
									    	
									    	$("#"+modal_download).attr("onclick", "openFile_target('"+file_name+"','"+obj_ref+"','txt_download')");
									    	
									    	$("#modal_waiting").modal('hide');

									    	$("body").addClass("body_nopadding");
									    	
									    	$("#base64_fileTXT_OL").val("");
									    },
									    error : function(response) {	
									    	alert("save file in selectFileTXT_OL error");
									    }
									});				
									/*end save file*/
						 	
						 	    }
						    })
				 		}
				
				
				

				$("#"+textFile).val(file_name);

				$('#'+view_button+">span").removeClass("activecolorgray").addClass("activecolorblue");
				$('#'+del_button+"_"+select_file_name+">span").removeClass("activecolorgray").addClass("activecolorblue");
				$('#'+download_button+"_"+select_file_name+">span").removeClass("activecolorgray").addClass("activecolorblue");
				
				$('#'+view_button).click(function(){
					var view_button_ID = view_button.replace("span_TaxOpen_","");
					var headerText_view = $("#"+tbl_mainName+">tbody>tr").eq(Number(view_button_ID)-1).find("td:nth-child(3) input[type='text']").val();
					$("#"+modal_name+" .modal-header>h4>span").html(headerText_view);
					
					$("#"+modal_name).modal('show');
				})				
			});
			
			$("#"+file_button2).click(function() {
				$("#"+textFile).val("");				
				$('#'+view_button).prop('disabled', true);
				$('#'+view_button+">span").removeClass("activecolorblue").addClass("activecolorgray");
				$('#'+del_button+"_"+select_file_name+">span").removeClass("activecolorblue").addClass("activecolorgray");
				$('#'+download_button+"_"+select_file_name+">span").removeClass("activecolorblue").addClass("activecolorgray");
			});
		}	

	}else{	
		if(check_filename_OL(selectFile, file_format, "","") == false){
			$("#"+textFile).val("");
			$("#"+selectFile).val("");
			
			if(type != 2){
				$('#'+view_button).prop('disabled', true);		
				$('#'+view_button+">span").removeClass("activecolorblue").addClass("activecolorgray");
			}
			
		}else{
			
			if(type == 1 && tbl_name != ""){
				openFile(event,selectFile,tbl_name,tbl_col);
			}
			
			openFile(event,selectFile,tblAuto_name,tbl_col);
			
			$("#base64_fileTXT_OL").val("");
			convertToBase64_OL(selectFile, file_type_id)
			$("#"+modalAuto_name).modal("show");	
			
			$("#"+file_button1).unbind();
			$("#"+file_button1).click(function() {
			
				$("#modal_waiting").modal('show');
			
				var base64 = $("#base64_fileTXT_OL").val();
				 if(base64 != ""){
					 var dateTime = getCurrentDate();
		    		 var file_name_update = "3_"+dateTime+".txt";
		    	
		    		 		datajson = {				        	
					    		"method" : "uploadFile_txt",
					    		"passInsurance" : $("#pass_Insurance_coverage_ol").val(),
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
						 	    	
						 	    	var obj_ref = response.upload_ref;
						 	    	console.log(obj_ref)
						 	    	
						 	    	/*save file*/
									if(type == 1 || type == 3){
										datajson = {				        	
												file_id 		: file_id,
												file_type_id 	: file_type_id,
												file_name 		: file_name,
												file_url		: obj_ref,
												file_pattern	: file_pattern,
												rate_cat_id 	: rate_cat_id,
												sub_cat_id		: sub_cat_id,
												user_code		: user_code	        
										}
									}else{
										datajson = {				        	
												file_id 		: file_id,
												file_type_id 	: file_type_id,
												file_name 		: file_name,
												file_url		: obj_ref,
												file_pattern	: file_pattern,
												rate_cat_id 	: rate_cat_id,
												sub_cat_id		: sub_cat_id,
												prem_assum_rate : prem_assum_rate,
												user_code		: user_code	        
										}
									}
									
													
									$.ajax({
									    type: "POST",
									    url : "BasePlanCL_save_file_Servlet",
									    data: datajson,       
									    success : function(response) {	
									    	if(type == 1){
									    		$("#hdd_fileID_OL"+select_file_name).val(response.file_id);
										    	$("#hdd_layoutID_OL"+select_file_name).val(response.rate_layout_id);
									    	}else if(type == 3){
									    		$("#layoutID_OL").val(response.rate_layout_id);
									    		$("#fileID_OL").val(response.file_id);
									    		$("#validate_fileGuaruntee_OL").css("display", "none");
									    	} 
									    	
									    	$("#"+textFile).val(response.file_name);
									    	$('#'+download_button+"_"+select_file_name+">span").attr("onclick", "openFile_target('"+file_name+"','"+obj_ref+"','txt_download')");
									    	$('#'+view_button+">span").attr("onclick", "openFileTextBasePlan_OL('"+file_name+"','"+obj_ref+"',"+tbl_col+",'"+tbl_name+"','"+modal_name+"')");
									    	
									    	$("#"+modal_download).attr("onclick", "openFile_target('"+file_name+"','"+obj_ref+"','txt_download')");
									    	$("#modal_waiting").modal('hide');

									    	$("body").addClass("body_nopadding");
									    	if(type == 3){
									    		$('#'+view_button).attr("onclick", "openFileTextBasePlan_OL('"+file_name+"','"+obj_ref+"',"+tbl_col+",'"+tbl_name+"','"+modal_name+"')");
									    		$('#'+view_button).prop("disabled",false)
									    	}
									    	
									    },
									    error : function(response) {	
									    	alert("save file in selectFileTXT_OL error");
									    }
									});				
									/*end save file*/
									$("#base64_fileTXT_OL").val("");
									
						 	    }
						    })
				 		}
				
				
					
				
				//$("#"+textFile).val(file_name);		
				
				if(type == 1){
					$('#'+view_button+">span").removeClass("activecolorgray").addClass("activecolorblue");
					$('#'+del_button+"_"+select_file_name+">span").removeClass("activecolorgray").addClass("activecolorblue");
					$('#'+download_button+"_"+select_file_name+">span").removeClass("activecolorgray").addClass("activecolorblue");
				
					$('#'+view_button).click(function(){
						var view_button_ID = view_button.replace("span_TaxOpen_OL_","");
						var headerText_view = $("#"+tbl_mainName+">tbody>tr").eq(Number(view_button_ID)-1).find("td:nth-child(3) input[type='text']").val();
						$("#"+modal_name+" .modal-header>h4>span").html(headerText_view);
						
						$("#"+modal_name).modal('show');
					})		
				}	
			});
			
			$("#"+file_button2).click(function() {
				$("#"+textFile).val("");
				
				if(type == 1){
					$('#'+view_button).prop('disabled', true);
					$('#'+view_button+">span").removeClass("activecolorblue").addClass("activecolorgray");
					$('#'+del_button+"_"+select_file_name+">span").removeClass("activecolorblue").addClass("activecolorgray");
					$('#'+download_button+"_"+select_file_name+">span").removeClass("activecolorblue").addClass("activecolorgray");
				}				
			});
		}	
	}
}
function reset_fileTax_OL(id){
	$("#fileuploads_TaxText"+id+"_OL").val("");
	document.getElementById("fileuploads_Tax"+id+"_OL").value = null;
	
	$('#span_TaxOpen_OL_'+id).unbind();
	$('#span_TaxOpen_OL_'+id).prop('disabled', true);
	$('#span_TaxOpen_OL_'+id+">span").removeClass("activecolorblue").addClass("activecolorgray");
	$('#span_TaxDel_OL_'+id+">span").removeClass("activecolorblue").addClass("activecolorgray");
	$('#span_Taxdownload_OL_'+id+">span").removeClass("activecolorblue").addClass("activecolorgray");
}

/*ตารางที่ใช้ในการคำนวณเบี้ย ฺBasic Info*/
function ch_Table_CalPM(row,tbl) {
	var check_D  = document.getElementById("ch_calPM_"+tbl+"_ol_"+row);
	var value = $("#ch_calPM_"+tbl+"_ol_"+row).val();

	if(check_D.checked == true){
		$("#btn_Adddata_calPM_"+tbl+"_ol_"+row).prop("disabled", false);
		
		/*เช็คเพศ*/
		if(value == "EITHER"){
			$("#tb_allCalPM_OL tbody>tr[data-group='"+tbl+"']").each(function() {
					var chk_val = $(this).find("input:checkbox");
					var btn = $(this).find("input:button");
					var span = $(this).find(".input-group span");
					var btn_file = $(this).find("input:file");
					var text_file = $(this).find("input:text");
					
				if($("#ch_male_ol").prop("checked") == true){
					if($(chk_val).val() == "MALE"){
						$(chk_val).prop("disabled", true);
						//$(btn_file).prop("disabled", true);
						$(text_file).val("");
					}
				}
				if($("#ch_female_ol").prop("checked") == true){
					if($(chk_val).val() == "FEMALE"){
						$(chk_val).prop("disabled", true);
						//$(btn_file).prop("disabled", true);
						$(text_file).val("");
					}
				}	
					
			 });
		}else{					
				$("#tb_allCalPM_OL tbody>tr[data-group='"+tbl+"']").each(function() {
					var chk_val = $(this).find("input:checkbox");
					var btn = $(this).find("input:button");
					var span = $(this).find(".input-group span");
					var btn_file = $(this).find("input:file");
					var text_file = $(this).find("input:text");
					
					if($(chk_val).val() == "EITHER"){
						$(chk_val).prop("disabled", true);
						//$(btn_file).prop("disabled", true);
						$(text_file).val("");
					}else if($(chk_val).val() == "FEMALE" || $(chk_val).val() == "MALE"){
						if($("#ch_female_ol").prop("checked") == true && $("#ch_male_ol").prop("checked") == true){	
							$(chk_val).prop("checked", true);
							$(btn).prop("disabled", false);
						}
					}
				});			
		}				
	}else{		
		$("#btn_Adddata_calPM_"+tbl+"_ol_"+row).prop("disabled", true);
		$("#textshow_tablecalPM_"+tbl+"_ol_"+row).text(""); 
		$("#fileuploads_calPMText_"+tbl+"_ol_"+row).removeAttr("placeholder",""); 
		$("#fileuploads_calPMText_"+tbl+"_ol_"+row).val("");
		$("#fileuploads_calPM_"+tbl+"_ol_"+row).removeAttr("onchange","");
		$("#fileuploads_calPM_"+tbl+"_ol_"+row).prop("disabled",true);
		$("#spancalPM_"+tbl+"_ol_"+row).attr("disabled", true);
		
		/*เช็คเพศ*/
		if(value == "EITHER"){
			$("#tb_allCalPM_OL tbody>tr[data-group='"+tbl+"']").each(function() {
					var chk_val = $(this).find("input:checkbox");
					var btn = $(this).find("input:button");
					var span = $(this).find(".input-group span");
					var btn_file = $(this).find("input:file");
					var text_file = $(this).find("input:text");
					
					if($("#ch_male_ol").prop("checked") == true){
						if($(chk_val).val() == "MALE"){
							$(chk_val).prop("disabled", false);
							//$(btn_file).prop("disabled", false);
						}
					}
					if($("#ch_female_ol").prop("checked") == true){
						if($(chk_val).val() == "FEMALE"){
							$(chk_val).prop("disabled", false);
							//$(btn_file).prop("disabled", false);
						}
					}
					
			 });
		}else{
			if($("#ch_female_ol").prop("checked") == true && $("#ch_male_ol").prop("checked") == true){
				if(value == "FEMALE" || value == "MALE"){
					$("#tb_allCalPM_OL tbody>tr[data-group='"+tbl+"']").each(function() {
						var chk_val = $(this).find("input:checkbox");
						var btn = $(this).find("input:button");
						var span = $(this).find(".input-group span");
						var btn_file = $(this).find("input:file");
						var text_file = $(this).find("input:text");
						
						if(value == "FEMALE" && $(chk_val).val() == "MALE"){
							$(chk_val).prop("checked", false);
							$(this).find("td:nth-child(3) label").text("");
							$(btn).prop("disabled", true);
							if($(chk_val).prop("checked") == true){
								$("#ch_calPM_"+tbl+"_ol_0").prop("disabled", true);
								$("#btn_Adddata_calPM_"+tbl+"_ol_0").prop("disabled", true);
								//$("#spancalPM_"+tbl+"0_OL").attr("disabled", true);
								//$("#fileuploads_calPM_"+tbl+"_ol_0").prop("disabled", true);
								$("#fileuploads_calPM_"+tbl+"_ol_0").val("");
							}else{
								$("#ch_calPM_"+tbl+"_ol_0").prop("disabled", false);
								//$("#btn_Adddata_calPM_"+tbl+"_ol_0").prop("disabled", false);
								//$("#spancalPM_"+tbl+"0_OL").attr("disabled", false);
								//$("#fileuploads_calPM_"+tbl+"_ol_0").prop("disabled", false);
							}
						}else if(value == "MALE" && $(chk_val).val() == "FEMALE"){
							$(chk_val).prop("checked", false);
							$(this).find("td:nth-child(3) label").text("");
							$(btn).prop("disabled", true);
							if($(chk_val).prop("checked") == true){
								$("#ch_calPM_"+tbl+"_ol_0").prop("disabled", true);
								$("#btn_Adddata_calPM_"+tbl+"_ol_0").prop("disabled", true);
								//$("#spancalPM_"+tbl+"0_OL").attr("disabled", true);
								//$("#fileuploads_calPM_"+tbl+"_ol_0").prop("disabled", true);
								$("#fileuploads_calPM_"+tbl+"_ol_0").val("");
							}else{
								$("#ch_calPM_"+tbl+"_ol_0").prop("disabled", false);
								//$("#btn_Adddata_calPM_"+tbl+"_ol_0").prop("disabled", false);
								//$("#spancalPM_"+tbl+"0_OL").attr("disabled", false);
								//$("#fileuploads_calPM_"+tbl+"_ol_0").prop("disabled", false);
							}
						}
				 	});
				}
			}else if($("#ch_male_ol").prop("checked") == true && $("#ch_female_ol").prop("checked") == false){
				$("#tb_allCalPM_OL tbody>tr[data-group='"+tbl+"']").each(function() {
					var chk_val = $(this).find("input:checkbox");
					var btn = $(this).find("input:button");
					var span = $(this).find(".input-group span");
					var btn_file = $(this).find("input:file");
					var text_file = $(this).find("input:text");
					
					if($(chk_val).val() == "EITHER"){
						$(chk_val).prop("disabled", false);
						//$(btn).prop("disabled", false);
						$(this).find("td:nth-child(4) label").text("");
						//$(span).attr("disabled", false);
						$(btn_file).prop("disabled", false);
					}
				});	
			}else if($("#ch_male_ol").prop("checked") == false && $("#ch_female_ol").prop("checked") == true){
				$("#tb_allCalPM_OL tbody>tr[data-group='"+tbl+"']").each(function() {
					var chk_val = $(this).find("input:checkbox");
					var btn = $(this).find("input:button");
					var span = $(this).find(".input-group span");
					var btn_file = $(this).find("input:file");
					var text_file = $(this).find("input:text");
					
					if($(chk_val).val() == "EITHER"){
						$(chk_val).prop("disabled", false);
						//$(btn).prop("disabled", false);
						$(this).find("td:nth-child(4) label").text("");
						//$(span).attr("disabled", false);
						$(btn_file).prop("disabled", false);
					}
				});	
				
			}
		}
	
	}	
}

/*เลือกข้อมูลตารางที่ใช้ในการคำนวณเบี้ย จาก Lookup*/
function showModal_Table_calPM(row,tbl,type) {	
	$("#mo_Table_calPM_OL input:radio").prop("checked", false);
	var gender = $("#ch_calPM_"+tbl+"_ol_"+row).val();
	
	/*get data from DB with filter*/
	var datajson = {	
			"method"	: "calculation_premium_rates",
			"type" 		: type,
			"gender" 	: gender     
	}	
	
	$.ajax({
	    type: "POST",
	    url : "BasePlanOL_Data_default_Servlet",
	    data: datajson,       
	    success : function(response) {					    	
	    	$("#mo_Table_calPM_OL tbody").find("tr").remove();			
			var tbl_calPM_modal = "";
			if(response.List_calculation_premium_rates.length > 0){
				for (i in response.List_calculation_premium_rates) {
					var obj_calPM_modal = response.List_calculation_premium_rates[i];						
					tbl_calPM_modal = "<tr>" +	
							"<td  class='borderBlack' width='5%' align='center'>" +
								"<input type='hidden' id='modal_start_year"+i+"' value='"+obj_calPM_modal.stat_year+"'>"+
								"<input type='hidden' id='modal_file_id"+i+"' value='"+obj_calPM_modal.file_id+"'>"+
								"<input type='hidden' id='modal_file_name"+i+"' value='"+obj_calPM_modal.file_name+"'>"+
								"<input onclick='ra_table_D_ol("+i+")' id='ra_table_calPM_"+i+"' value="+obj_calPM_modal.pass+" type='radio' name='check_calPM[]'>" +
							"</td>"+
							"<td  class='borderBlack' width='95%'><Label id='text_Table_calPM_"+i+"' for='ra_table_calPM_"+i+"'>"+obj_calPM_modal.text+"</Label></td>"+
						"</tr>";			  
					$("#mo_Table_calPM_OL tbody").append(tbl_calPM_modal);
					$("#tax_save_calPM_OL").prop("disabled", false);
				}
			}else{
				tbl_calPM_modal = "<tr><td class='borderBlack' colspan='2' align='center'>ไม่มีรายการตาราง</td></tr>";	
				$("#mo_Table_calPM_OL tbody").append(tbl_calPM_modal);
				
				$("#tax_save_calPM_OL").prop("disabled", true);
			}
			
			    	
	    },
	    error : function(response) {	
	    	alert("showModal_Table_calPM error");
	    }
	});	
	console.log("data",datajson)
		
	var headerModal = $("#tb_allCalPM_OL tbody>tr[data-group="+tbl+"]:first>td:nth-child(1)>label").text();
	var headerText = $("#tr_calPM_"+tbl+"_ol_"+row+" label[for='ch_calPM_"+tbl+"_ol_"+row+"']").text();
	$("#mo_Table_calPM_OL>thead th:nth-child(2)>span").text(headerText);
	$("#show_Table_calPM_OL .modal-title>label>span").text(headerModal);
	$('#show_Table_calPM_OL').modal('show');
	//rowtext_calPM = row;
	rowtype_d = tbl;
	rownum_d = row;
}

/*โชว์ตารางที่ใช้ในการคำนวณเบี้ยตามที่เลือก*/
function ch_valPM_ol(tbl,e){
	
	var row = "";
	var chk_row = $("#ch_calPM_"+tbl+"_ol").val();
	var chk_label = $("#lb_calPM_"+tbl+"_ol").text();
	var type = $(e).val();
	
	/*either*/
	var either_ratecat = $("#hdd_either"+tbl+"_OL").val();
	var either_subcat = $("#hdd_either"+tbl+"_OL").attr("data-subcat");
	var either_layout = $("#hdd_either"+tbl+"_OL").attr("data-layout");
	var either_pattern = $("#hdd_either"+tbl+"_OL").attr("data-pattern");
	var either_name = $("#hdd_either"+tbl+"_OL").attr("data-name");
	
	/*MALE*/
	var male_ratecat = $("#hdd_male"+tbl+"_OL").val();
	var male_subcat = $("#hdd_male"+tbl+"_OL").attr("data-subcat");
	var male_layout = $("#hdd_male"+tbl+"_OL").attr("data-layout");
	var male_pattern = $("#hdd_male"+tbl+"_OL").attr("data-pattern");
	var male_name = $("#hdd_male"+tbl+"_OL").attr("data-name");
	
	/*FEMALE*/
	var female_ratecat = $("#hdd_female"+tbl+"_OL").val();
	var female_subcat = $("#hdd_female"+tbl+"_OL").attr("data-subcat");
	var female_layout = $("#hdd_female"+tbl+"_OL").attr("data-layout");
	var female_pattern = $("#hdd_female"+tbl+"_OL").attr("data-pattern");
	var female_name = $("#hdd_female"+tbl+"_OL").attr("data-name");
	
	row = "<tr id='tr_calPM_"+tbl+"_ol_0' data-group='"+tbl+"' data-value='"+type+"'>"+
		"<td class='borderBlack text-center v_middle' rowspan='3'><label>"+chk_label+"</label></td>"+
		"<td class='borderBlack text-center'><input id='ch_calPM_"+tbl+"_ol_0' type='checkbox' value='EITHER' onclick=\"ch_Table_CalPM(0,'"+tbl+"');\">"+
		"<input type='hidden' id='hdd_calPM_"+tbl+"_ol_0' value='"+either_ratecat+"' data-subcat='"+either_subcat+"' data-layout='"+either_layout+"' data-pattern='"+either_pattern+"' data-name='"+either_name+"'>"+
		"</td>"+
		"<td class='borderBlack text-center'><label for='ch_calPM_"+tbl+"_ol_0'>รวม</label></td>"+
		"<td class='borderBlack' width='30%'><label id='textshow_tablecalPM_"+tbl+"_ol_0'></label><input type='hidden' name='hdd_premAssumRate_"+tbl+"_ol' id='hdd_premAssumRate_"+tbl+"_ol_0' value=''></td>"+
		"<td class='borderBlack' width='5%'><input disabled id ='btn_Adddata_calPM_"+tbl+"_ol_0' type='button' class='btn btn-default btn-primary' value='...' onclick=\"showModal_Table_calPM(0,'"+tbl+"','"+type+"');\"></td>"+
		"<td class='borderBlack' width='40%'><div class='input-group'><input type='text' class='form-control' id='fileuploads_calPMText_"+tbl+"_ol_0' readonly='' placeholder=''><label class='input-group-btn'><span id='spancalPM_"+tbl+"_ol_0' class='btn btn-primary' disabled>...<input id='fileuploads_calPM_"+tbl+"_ol_0' type='file' accept='text/plain' style='display: none;' disabled></span></label></div></td>"+
	"</tr>"+
	"<tr id='tr_calPM_"+tbl+"_ol_1' data-group='"+tbl+"' data-value='"+type+"'>"+
		"<td class='borderBlack text-center'><input id='ch_calPM_"+tbl+"_ol_1' type='checkbox' value='FEMALE' onclick=\"ch_Table_CalPM(1,'"+tbl+"');\" disabled>"+
		"<input type='hidden' id='hdd_calPM_"+tbl+"_ol_1' value='"+male_ratecat+"' data-subcat='"+male_subcat+"' data-layout='"+male_layout+"' data-pattern='"+male_pattern+"' data-name='"+male_name+"'>"+
		"</td>"+
		"<td class='borderBlack text-center'><label for='ch_calPM_"+tbl+"_ol_1'>หญิง</label></td>"+
		"<td class='borderBlack' width='30%'><label id='textshow_tablecalPM_"+tbl+"_ol_1'></label><input type='hidden' name='hdd_premAssumRate_"+tbl+"_ol' id='hdd_premAssumRate_"+tbl+"_ol_1' value=''></td>"+
		"<td class='borderBlack' width='5%'><input disabled id ='btn_Adddata_calPM_"+tbl+"_ol_1' type='button' class='btn btn-default btn-primary' value='...' onclick=\"showModal_Table_calPM(1,'"+tbl+"','"+type+"');\"></td>"+
		"<td class='borderBlack' width='40%'><div class='input-group'><input type='text' class='form-control' id='fileuploads_calPMText_"+tbl+"_ol_1' readonly='' placeholder=''><label class='input-group-btn'><span id='spancalPM_"+tbl+"_ol_1' class='btn btn-primary' disabled>...<input id='fileuploads_calPM_"+tbl+"_ol_1' type='file' accept='text/plain' style='display: none;' disabled></span></label></div></td>"+
	"</tr>"+
	"<tr id='tr_calPM_"+tbl+"_ol_2' data-group='"+tbl+"' data-value='"+type+"'>"+
		"<td class='borderBlack text-center'><input id='ch_calPM_"+tbl+"_ol_2' type='checkbox' value='MALE' onclick=\"ch_Table_CalPM(2,'"+tbl+"');\" disabled>"+
		"<input type='hidden' id='hdd_calPM_"+tbl+"_ol_2' value='"+female_ratecat+"' data-subcat='"+female_subcat+"' data-layout='"+female_layout+"' data-pattern='"+female_pattern+"' data-name='"+female_name+"'>"+
		"</td>"+
		"<td class='borderBlack text-center'><label for='ch_calPM_"+tbl+"_ol_2'>ชาย</label></td>"+
		"<td class='borderBlack' width='30%'><label id='textshow_tablecalPM_"+tbl+"_ol_2'></label><input type='hidden' name='hdd_premAssumRate_"+tbl+"_ol' id='hdd_premAssumRate_"+tbl+"_ol_2' value=''></td>"+
		"<td class='borderBlack' width='5%'><input disabled id ='btn_Adddata_calPM_"+tbl+"_ol_2' type='button' class='btn btn-default btn-primary' value='...' onclick=\"showModal_Table_calPM(2,'"+tbl+"','"+type+"');\"></td>"+
		"<td class='borderBlack' width='40%'><div class='input-group'><input type='text' class='form-control' id='fileuploads_calPMText_"+tbl+"_ol_2' readonly='' placeholder=''><label class='input-group-btn'><span id='spancalPM_"+tbl+"_ol_2' class='btn btn-primary' disabled>...<input id='fileuploads_calPM_"+tbl+"_ol_2' type='file' accept='text/plain' style='display: none;' disabled></span></label></div></td>"+
	"</tr>";
	
	if($("#ch_calPM_"+tbl+"_ol").prop("checked") == true){
		$("#tb_allCalPM_OL tbody").append(row);
	}else{
		$("#tr_calPM_"+tbl+"_ol_0").remove();
		$("#tr_calPM_"+tbl+"_ol_1").remove();
		$("#tr_calPM_"+tbl+"_ol_2").remove();
		
	}
	
	
	var numrow = $("#tb_allCalPM_OL tbody>tr").length;
	if(numrow > 0){
		$("#tb_allCalPM_OL").removeClass("displayNone").addClass("displayBlock");
	}else{
		$("#tb_allCalPM_OL").removeClass("displayBlock").addClass("displayNone");
	}
	
	/********check gender********/
	/*male*/
	var value_male = $("#ch_male_ol").val();
	if($("#ch_male_ol").prop("checked") == true){
		$("#tb_allCalPM_OL tbody>tr").each(function(){
			var chk_value = $(this).find("input:checkbox").val();
			if(chk_value == value_male){
				$(this).find("input:checkbox").attr("disabled",false);
				//$(this).find("input[type='button']").attr("disabled",false);
				//$(this).find("span").attr("disabled",false);
				//$(this).find("input[type='file']").attr("disabled",false);
			}else if(chk_value == "EITHER"){
				$(this).find("input:checkbox").attr("disabled",false);
				$(this).find("input[type='button']").attr("disabled", true);
				//$(this).find("span").attr("disabled",false);
				//$(this).find("input[type='file']").attr("disabled",false);
			}
		});		
		
	}else{
		$("#tb_allCalPM_OL tbody>tr").each(function(){
			var chk_value = $(this).find("input:checkbox").val();
			if(chk_value == value_male){
				$(this).find("input:checkbox").prop("checked",false);
				$(this).find("input:checkbox").attr("disabled",true);
				//$(this).find("input[type='button']").attr("disabled",true);
				$(this).find("td:nth-child(4) label").text("");
				$(this).find("td:nth-child(4) input:hidden").val("");
				//$(this).find("span").attr("disabled",true);
				//$(this).find("input[type='file']").attr("disabled",true);
				$(this).find("input[type='text']").val("");
			}else if(chk_value == "EITHER"){
				if($("#ch_female_ol").prop("checked") == true){
					$(this).find("input:checkbox").attr("disabled",false);
					$(this).find("td:nth-child(5) input").attr("disabled",false);	
					//$(this).find("span").attr("disabled",false);
					//$(this).find("input[type='file']").attr("disabled",false);
				}else{
					$(this).find("input:checkbox").prop("checked",false);
					$(this).find("input:checkbox").attr("disabled",true);
					//$(this).find("input[type='button']").attr("disabled",true);
					$(this).find("td:nth-child(4) label").text("");
					$(this).find("td:nth-child(4) input:hidden").val("");
					//$(this).find("span").attr("disabled",true);
					//$(this).find("input[type='file']").attr("disabled",true);
					$(this).find("input[type='text']").val("");
				}				
			}
		});

	}
	
	/*female*/
	var value_female = $("#ch_female_ol").val();
	if($("#ch_female_ol").prop("checked") == true){
		$("#tb_allCalPM_OL tbody>tr").each(function(){
			var chk_value = $(this).find("input:checkbox").val();
			if(chk_value == value_female){
				$(this).find("input:checkbox").attr("disabled",false);
				//$(this).find("input[type='button']").attr("disabled",false);
				//$(this).find("span").attr("disabled",false);
				//$(this).find("input[type='file']").attr("disabled",false);
			}else if(chk_value == "EITHER"){
				$(this).find("input:checkbox").attr("disabled",false);
				$(this).find("input[type='button']").attr("disabled",true);
				//$(this).find("span").attr("disabled",false);
				//$(this).find("input[type='file']").attr("disabled",false);
			}
		});

	}else{
		
		$("#tb_allCalPM_OL tbody>tr").each(function(){
			var chk_value = $(this).find("input:checkbox").val();
			if(chk_value == value_female){
				$(this).find("input:checkbox").prop("checked",false);
				$(this).find("input:checkbox").attr("disabled",true);
				//$(this).find("input[type='button']").attr("disabled",true);
				$(this).find("td:nth-child(4) label").text("");
				$(this).find("td:nth-child(4) input:hidden").val("");
				//$(this).find("span").attr("disabled",true);
				//$(this).find("input[type='file']").attr("disabled",true);
				$(this).find("input[type='text']").val("");
			}else if(chk_value == "EITHER"){
				if($("#ch_male_ol").prop("checked") == true){
					$(this).find("input:checkbox").attr("disabled",false);
					//$(this).find("input[type='button']").attr("disabled",false);
					//$(this).find("span").attr("disabled",false);
					//$(this).find("input[type='file']").attr("disabled",false);
				}else{
					$(this).find("input:checkbox").prop("checked",false);
					$(this).find("input:checkbox").attr("disabled",true);
					//$(this).find("input[type='button']").attr("disabled",true);
					$(this).find("td:nth-child(4) label").text("");
					$(this).find("td:nth-child(4) input:hidden").val("");
					//$(this).find("span").attr("disabled",true);
					//$(this).find("input[type='file']").attr("disabled",true);
					$(this).find("input[type='text']").val("");
				}			
			}
		});

	}
	/*********end gender*******/
}

/*bundle*/
$("#chk_bundleBaseplan_OL1").click(function(){
	var numrow = $("#tbl_rider_bundle_OL tbody>tr").length;
	
	if($(this).prop("checked") == true){
		$("#div_bundle_rider_OL").show();
	}else{
		$("#div_bundle_rider_OL").hide();
	}
});

$(document).on("click", "#addBundle_OL", function () {	
	///BEnz 09-08-2019 /////
	var datajson = {	
			"method"	: "searchBundleSelect"
	}	
	
	$.ajax({
	    type: "POST",
	    url : "BasePlanOL_Data_default_Servlet",
	    data: datajson,       
	    success : function(response) {

	    	$('#tb_bundleRiderOL_modal').DataTable().destroy();
	    	$("#tb_bundleRiderOL_modal tbody").find("tr").remove();
	    	var row = "";
	    	var id = 1;
	    	
	    	//var bundle_rider = [{"insuranceNo":"RC_AC_ADB_R_0001","nameTH":"Test1"},{"insuranceNo":"RC_AC_ADB_R_0002","nameTH":"Test2"},{"insuranceNo":"RC_AC_ADB_R_0003","nameTH":"Test3"}];
	    	
	    	for(var i=0; i<response.additional_Contract_Coverage.length; i++){
	    		var obj = response.additional_Contract_Coverage[i];
	    		row2 = 	"<tr  id=\"row2_"+id+""+"\">" +	
	    				"<td class=\"col-sm-1 text-center"+"\">"+"<input type=\"checkbox\" id=\"ch_bundle_rider_"+id+"\" value='"+obj.cov_code+"'>"+"</td>"+
	    				"<td class=\"verticalCenter col-sm-2 text-left"+"\">"+"<label style=\"text-decoration: underline; color: blue;\" id=\"lb_bundle_rider_"+id+""+"\" for=\"ch_bundle_rider_"+id+"\">"+obj.cov_code+"</label>"+"" +
	    				"</td>"+
	    				"<td class=\"col-sm-5 text-left"+"\">"+"<label id=\"bundle_rider_name_"+id+""+"\">"+obj.name_th+"</label>"+"" +
	    				"</td>"+
	    			"</tr>";			  
	    		$("#tb_bundleRiderOL_modal tbody").append(row2);
	    		check_row_modal2 = id;
	    		id++;
	    	}
	    	$("#tb_bundleRiderOL_modal").DataTable({"ordering": false,"paging": false,"bInfo" : false, scrollY: '236px',scrollCollapse: true, "autoWidth": false, 
	    		fixedHeader: {header: true},"oLanguage": {"sSearch": "ค้นหา: "}
	    	});
	    	$("#tb_bundleRiderOL_modal_wrapper .dataTables_scrollHeadInner").css({"width":"100%"});
	    	$("#tb_bundleRiderOL_modal_wrapper .table").css({"width":"100%"});

	    	/*เลือกสัญญาเพิ่มเติมที่มีอยู่แล้ว*/
	    	var count_row_nodata = $("#tbl_rider_bundle_OL>tbody>tr[data-group='0']").length;
	    	var count_row = $("#tbl_rider_bundle_OL>tbody>tr[data-group='1']").length;
	    	
	    	if(count_row > 0){
	    		$("#tbl_rider_bundle_OL tbody>tr").each(function(){
	    			var text_rider = $(this).find("td:nth-child(2)").text();
	    			$("#tb_bundleRiderOL_modal input:checkbox").each(function(){
	    				if($(this).val() == text_rider){
	    					$(this).prop("checked", true);
	    				}
	    			});
	    		});
	    	}
	    	
	    	$('#modal_Choose_Bundle').modal('show');
	    },
	    error : function(response) {	
	    	alert("searchBundleSelect error");
	    }
	});	
});

function bt_save_bundleRiderOL(){
	$("#tbl_rider_bundle_OL>tbody>tr[data-group='1']").remove();
	
	var count_row = $("#tbl_rider_bundle_OL>tbody>tr[data-group='1']").length;
	var row = "";
	var chk_count = 0;
	if(count_row > 0){
		var numberImgOK = $("#tbl_rider_bundle_OL>tbody>tr[data-group='1']:last").attr("data-id");
	}else{
		var numberImgOK = 0;
	}
	
	/*modal*/
	$("#tb_bundleRiderOL_modal input[type='checkbox']:checked").each(function(){
		chk_count++;
		var id = $(this).attr("id");
			id = id.replace("ch_bundle_rider_","");
		var value = $(this).val();
		var text = $("#bundle_rider_name_"+id).text();
		
		numberImgOK++;
		
		row += "<tr id='tbody_rider_bundle_OL"+numberImgOK+"' data-group='1' data-id="+numberImgOK+">"+
			  "<td id='imgOK_rider_bundle_OL"+numberImgOK+"' class='verticalCenter text-center'>"+
			  "<input id='chk_rider_bundle_OL"+numberImgOK+"' type='checkbox' value='"+value+"'>"+
			  "</td>"+
			  "<td class='verticalCenter text-left font-term-green'><label for='chk_rider_bundle_OL"+numberImgOK+"'>"+value+"</label></td>"+
			  "</tr>";
	});
	
	/*hide row No data*/
	if(chk_count > 0 || count_row > 0){
		$("#tbl_rider_bundle_OL>tbody>tr[data-group='0']").hide();
	}else{
		$("#tbl_rider_bundle_OL>tbody>tr[data-group='0']").show();
	}
	
	$("#tbl_rider_bundle_OL tbody").append(row);
	
	$("#modal_Choose_Bundle").modal("hide");
	
}

function deleteRowBundleOL()
{
	var imgOKcount = $("#tbl_rider_bundle_OL input[type='checkbox']:checked").length;
	if(imgOKcount <= 0)
	{	
		message = "กรุณาเลือกรายการที่ต้องการลบ";
		alertError(message);
	}else{
	message = "ต้องการลบรายการใช่หรือไม่";
	alertDeleteError(message);
	
	$("#btn_confirm_del").click(function(){
		var lastImgOK = $("#tbl_rider_bundle_OL >tbody>tr[data-group='1']:last").attr("data-id") || 0;	
		var numberImgOK = 0;
		if(lastImgOK == 0){
			numberImgOK = 1;
		}else{
			numberImgOK = Number(lastImgOK)+1;
		}
		for(var i = 1;i<=numberImgOK;i++)
			{
				if($("#chk_rider_bundle_OL"+i).prop("checked") == true){	
					deleteTableRow('#tbody_rider_bundle_OL'+i);				
				}
			}
		
			var num_row = $("#tbl_rider_bundle_OL tbody>tr[data-group='1']").length;
			if(num_row == 0){
				$("#tbl_rider_bundle_OL>tbody>tr[data-group='0']").show();
			}		
		});
	}
}	


/*Save Basic Info*/
function bt_Menu1_Confirm_ol() {
	var message = "";
	var error = 0;
	var error_date = 0;
	var error_rate = 0;
	var error_cal_prem = 0;
	var pass_Insurance_coverage = $('#pass_Insurance_coverage_ol').val();
	var thai_Name 				= $('#thai_Name_ol').val();
	var ch_male = document.getElementById("ch_male_ol");
	var ch_female = document.getElementById("ch_female_ol");
	var ch_male_value = $("#ch_male_ol").val();
	var ch_female_value = $("#ch_female_ol").val();
	var num_gender_chk = $("input[name='ch_gender_ol[]']:checked").length;
	
	var rd_anniversary = document.getElementById("rd_anniversary_ol");
	var rd_Time_length = document.getElementById("rd_Time_length_ol");
	var rd_insurance_premium 	= document.getElementById("rd_insurance_premium_ol");
	var rd_Time_insurance_premium = document.getElementById("rd_Time_insurance_premium_ol");
	
	/*อายุที่ขออนุมัติ*/
	var age_Start_cl = $("#age_Start_ol").val();
	var age_To_cl = $("#age_To_ol").val();
	if(age_Start_cl == "" || age_To_cl == ""){
		error++;
	}
	
	/*ระยะประกันของสัญญาเพิ่มเติม*/
	if($("#rd_anniversary_ol").prop("checked") == true){
		if($("#text_anniversary_ol").val() == "" || $("#dmy_1_ol option:selected").text() == "None"){
			error++;
		}
	}
	
	if($("#rd_Time_length_ol").prop("checked") == true){
		var numrow_period = $("#tb_BasicInformation1_OL>tbody tr").length;
		var count_period
		
		if(numrow_period <= 0){
			error++;
		}else{
			$("#tb_BasicInformation1_OL>tbody input:text").each(function(){
				if($(this).val() == ""){
					error++;
				}
			});
		}
	}
	
	/*ระยะชำระเบี้ยของสัญญาเพิ่มเติม*/
	if($("#rd_insurance_premium_ol").prop("checked") == true){
		if($("#text_insurance_premium_ol").val() == "" || $("#dmy_3_ol option:selected").text() == "None"){
			error++;
		}
	}
	
	if($("#rd_Time_insurance_premium_ol").prop("checked") == true){
		if($("#text_Time_insurance_premium_ol").val() == "" || $("#dmy_4_ol option:selected").text() == "None"){
			error++;
		}
	}
	
	if($("#ch_sperately_pay_ch_ol").prop("checked") == true){
		var numrow_seperately_pay = $("#tb_Sperately_Pay_ol>tbody input:checkbox:checked").length;			
		if(numrow_seperately_pay <= 0){
			error++;
		}else{
			$("#tb_Sperately_Pay_ol>tbody input:checkbox:checked").each(function(){
				var id = $(this).attr("id");
					id = id.replace("ch_payment_ol_","");
				var rate_value = $("#set_Premium_Rate_ol_"+id).val();
				if(rate_value == 0){
					error_rate++;
				}
			});
		}
	}
	
	/*ตารางที่ใช้ในการคำนวณเบี้ย*/
	var numrow_chk_cal = $("#tb_CalPremiumUse_ol input:checkbox:checked").length;
	if(numrow_chk_cal > 0){
		$("#tb_CalPremiumUse_ol input:checkbox:checked").each(function(){
			var value = $(this).val();
			var count = $("#tb_allCalPM_OL>tbody tr[data-value='"+value+"']").find("input:checkbox:checked").length;			
			if(count <= 0){
				error_cal_prem++;
			}		
		});
	}
	
	$("#tb_allCalPM_OL>tbody tr").each(function(){
		var id = $(this).attr("id");
			id = id.replace("tr_calPM_","");
		var label = $("#textshow_tablecalPM_"+id).text();
		if($(this).find("input:checkbox").prop("checked") == true){
			if(label == ""){
				error++;
			}
		}
	});

	/*วันที่ คปภ.อนุมัติ*/
	var appStart_date_cl = $("#appStart_date_ol").val();
	var appTo_date_cl = $("#appTo_date_ol").val();
	
	if(appStart_date_cl != ""){
		if(appTo_date_cl == ""){
			error++;
		}
	}
	
	if(appTo_date_cl != ""){
		if(appStart_date_cl == ""){
			error++;
		}
	}
	
	/*mode*/
	var count_mode = 0;
	$("#tbl_BI_Mode_OL tbody>tr input:checkbox").each(function(){
		if($(this).prop("checked") == true){
			count_mode++;
		}
	});
	
	if(count_mode <= 0){
		error++;
	}
	
	/*แบ่งจ่าย*/
	$("#tb_Sperately_Pay_ol input:checkbox:checked").each(function(){
		var id = $(this).attr("id");
			id = id.replace("ch_payment_ol_","");
		var value = $(this).val();
		var value_add = $("#lb_payment_ol_"+id).text();
		var value_key = $("#set_Premium_Rate_ol_"+id).val();
		var sum = Number(value_add*value_key);
		if(sum < 100){
			error++;
		}
	});
	
	if(pass_Insurance_coverage == "" ||  thai_Name  == "" || ch_male.checked == false && ch_female.checked == false 
			|| (rd_anniversary.checked == false && rd_Time_length.checked == false) ||  (rd_insurance_premium.checked == false 
			&& rd_Time_insurance_premium.checked == false)){
		error++;
	}
	
	if(age_Start_cl != "" && age_To_cl != ""){
    	var startDate_parse = parseDate($("#appStart_date_ol").val());
        var endDate_parse = parseDate($("#appTo_date_ol").val());
    	//alert("start>>"+startDate_parse+" endDate>>"+endDate_parse);
        if(startDate_parse > endDate_parse){
        	error_date++;
        }
	}
	
	if((error > 0 && error_date <= 0 && error_rate <= 0 && error_cal_prem <= 0) || (error > 0 && error_date <= 0 && error_rate > 0 && error_cal_prem <= 0) || (error > 0 && error_date > 0 && error_rate <= 0 && error_cal_prem <= 0) || (error > 0 && error_date > 0 && error_rate > 0 && error_cal_prem > 0)
			|| (error > 0 && error_date == 0 && error_rate == 0 && error_cal_prem > 0)){
		message = "กรุณาระบุข้อมูลให้ครบ";
		alertError(message);
		nameTab 	= "menu_OL_1";
		Statuesave = "N";
	}else if(error == 0 && error_date > 0 && error_rate <= 0 && error_cal_prem <= 0){
		message = "วันที่เริ่มต้นต้องน้อยกว่าวันที่สิ้นสุดเสมอ";
		nameTab 	= "menu_OL_1";
		Statuesave = "N";
		alertError(message);
	}else if(error == 0 && error_date == 0 && error_rate > 0 && error_cal_prem == 0){
		message = "อัตราเบี้ยประกันภัยรายงวดต้องไม่เท่ากับ 0.00";
		nameTab 	= "menu_OL_1";
		Statuesave = "N";
		alertError(message);
	}else if(error == 0 && error_date == 0 && error_rate == 0 && error_cal_prem > 0){
		message = "กรุณาระบุตารางที่ใช้ในการคำนวณเบี้ย";
		nameTab 	= "menu_OL_1";
		Statuesave = "N";
		alertError(message);
	}else{		
		nameTab 	= "menu_OL_1";
		Statuesave = "Y";
		dataSave_BasicInformation_OL();
		var message = "บันทึกข้อมูลเรียบร้อย";
		alertSuccess(message);

	}	

}

/*อายุที่ขออนุมัติ + คุ้มครองสูงสุดถึง*/
$("#age_To_ol, #maximum_Protection_To_ol, #text_anniversary_ol, #text_insurance_premium_ol, #text_Time_insurance_premium_ol").on("keypress keyup",function(){
    if($(this).val() == '0'){
      $(this).val('');  
    }
});

function checkMaxProtectionAge_OL() {
	  if($("#maximum_Protection_To_ol").val() != ""){
		  var  min =$("#age_To_ol").val();
		  var  max= $("#maximum_Protection_To_ol").val();
			
		  if(Number(max) < Number(min)){
			  message = "ข้อมูลคุ้มครองสูงสุดถึงต้องมีค่ามากกว่าอายุที่ขออนุมัติสิ้นสุดเสมอ";
			  alertError(message);
			  $("#maximum_Protection_To_ol").focus();
			  $("#maximum_Protection_To_ol").val("");
		  }	
	  }
}

/*function openAcc(){
	
}*/
/*การใช้สิทธิกรมธรรม์*/
$("#eti_year_ol, #rpu_year_ol").on("keypress keyup",function(){
    if($(this).val() == '0'){
      $(this).val('');  
    }
});
function bt_Menu2_Confirm_ol(){
	var message = "";
	var error = 0;
	
	/*Policy Loan Interest*/
	var chk_Policy_Loan = $("#chk_Policy_Loan_ol").prop("checked");
	var txb_Policy_Loan = $("#txb_Policy_Loan_ol").val();
	
	if(chk_Policy_Loan == true){
		if(txb_Policy_Loan == "0" || txb_Policy_Loan == "0.00" || txb_Policy_Loan == ""){
			error++;
		}
	}
	
	/*APL Interest*/
	var ch_APL_Auto = $("#ch_APL_Auto_ol").prop("checked");
	var apl_Auto = $("#apl_Auto_ol").val();
	
	if(ch_APL_Auto == true){
		if(apl_Auto == "0" || apl_Auto == "0.00" || apl_Auto == ""){
			error++;
		}
	}
	
	/*เวนคืนกรมธรรม์*/
	var ch_surrender = $("#ch_expropriate_insurance_OL").prop("checked");
	var sel_Surrender = $("#sel_Surrender_ol option:selected").text();
	
	if(ch_surrender == true){
		if(sel_Surrender == "None"){
			error++;
		}
	}
	
	/*ETI*/
	var ch_ETI = $("#ch_ETI_ol").prop("checked");
	var sel_ETI = $("#sel_ETI_ol option:selected").text();
	var ch_AutoETI = $("#ch_AutoETI_ol").prop("checked");
	var sel_AutoETI = $("#sel_AutoETI_ol option:selected").text();
	var ch_PhaseETI = $("#ch_PhaseETI_ol").prop("checked");
	var sel_PhaseETI = $("#sel_PhaseETI_ol option:selected").text();
	var eti_year = $("#eti_year_ol").val();
	var eti_year_unit = $("#dmy_2_1_ol option:selected").text();
	
	if(ch_ETI == true){
		if(sel_ETI == "None"){
			error++;
		}
	}
	
	if(ch_AutoETI == true){
		if(sel_AutoETI == "None"){
			error++;
		}
	}
	
	if(ch_PhaseETI == true){
		if(sel_PhaseETI == "None" || eti_year == ""){
			error++;
		}
	}
	
	/*RPU*/
	var ch_RPU = $("#ch_RPU_ol").prop("checked");
	var sel_RPU = $("#sel_RPU_ol option:selected").text();
	var ch_RPUClose = $("#ch_RPUClose_ol").prop("checked");
	var ch_AutoRPU = $("#ch_AutoRPU_ol").prop("checked");
	var sel_AutoRPU = $("#sel_AutoRPU_ol option:selected").text();
	var ch_AutoRPUClose = $("#ch_AutoRPUClose_ol").prop("checked");
	
	var ch_PhaseRPU = $("#ch_PhaseRPU_ol").prop("checked");
	var sel_PhaseRPU = $("#sel_PhaseRPU_ol option:selected").text();
	var rpu_year = $("#rpu_year_ol").val();
	var rpu_year_unit = $("#dmy_2_2_ol option:selected").text();
	
	if(ch_RPU == true){
		if(sel_RPU == "None"){
			error++;
		}
	}
	
	if(ch_AutoRPU == true){
		if(sel_AutoRPU == "None"){
			error++;
		}
	}
	
	if(ch_PhaseRPU == true){
		if(sel_PhaseRPU == "None" || rpu_year == ""){
			error++;
		}
	}
	
	if(error > 0){
		message = "กรุณาระบุข้อมูลให้ครบ";
		alertError(message);
		nameTab 	= "menu_OL_2";
		Statuesave = "N";
	}else{		
		nameTab 	= "menu_OL_2";
		Statuesave = "Y";
		dataSave_privilege_insurance_OL()
		validate_ETI_RPU_OL();
		var message = "บันทึกข้อมูลเรียบร้อย";
		alertSuccess(message);
	}
}
/*การคำนวณเบี้ยประกัน*/
function bt_Menu3_Confirm_OL(){
	var error = 0;
	var chk_type1 = $("#rd_cal_insurance_ol").prop("checked");
	var chk_type2 = $("#rd_cal_capital_ol").prop("checked");
	/*เบี้ยมาตรฐาน*/
	if($("#ch_standard_premium_ol").prop("checked") == true){
		//if(chk_type1 == true){
			
				/*if($("#sl_menu3_insurance_premium_ol option:selected").text() == "None"){
					error++;
				}*/
				
				if($("#sl_menu3_insurance_premium_ol option:selected").text() != "None"){
					$("#tb_PM_Rate1_OL>tbody>tr").each(function(){
						if($(this).find("td:nth-child(2) option:selected").text() == "None"){
							error++
						}else{
							if($(this).find("td:nth-child(3) input[type='text']").val() == ""){
								error++;
							}
						}
					});
				}
			
		/*}else if(chk_type2 == true){
			if($("#sl_menu3_capital_ol option:selected").text() == "None"){
				error++;
			}
			
			if($("#sl_menu3_capital_ol option:selected").text() != "None"){
					if($("#input_file_3_OL").val() == ""){
						error++;
					}
			}
		}*/
	}
	
	if($("#ch_importInsurance_ol").prop("checked") == true){
		var discountFrom = $("#discountInsurancePremiumsSta_ol").val();
		var discountTo = $("#discountInsurancePremiumsTo_ol").val();
		if(discountFrom == "" || discountTo == ""  || discountTo == "0.00" || discountTo == "0"){
			error++;
		}
	}
	
	/*เบี้ยเพิ่มพิเศษ*/
	if($("#ch_insurance_premium_Extra_ol").prop("checked") == true){
		if($("#sl_insurance_premium_Extra_ol option:selected").text == "None"){
			error++;
		}
		
		if($("#sl_insurance_premium_Extra_ol option:selected").text != "None"){
			$("#tb_Extra_Rate_OL>tbody>tr").each(function(){
				if($(this).find("td:nth-child(2) input[type='text']").val() == ""){
					error++;
				}
			});
		}
		
		if($("#max_EM_ol").val() != "0.00"){
			if($("#input_fileCal_1_OL").val() == ""){
				error++;
			}
		}
	}
	
	/*ทุนคุ้มครองที่ลดลง*/
	if($("#ch_Reduced_capital_ol").prop("checked") == true){
		if($("#sl_Reduced_capital_Cal2_OL option:selected").text() == "None"){
			error++;
		}
		
		if($("#sl_Reduced_capital_Cal2_OL option:selected").text() != "None"){
			if($("#input_fileCal_2_OL").val() == ""){
				error++;
			}
		}
	}
	
	if(error > 0){
		message = "กรุณาระบุข้อมูลให้ครบถ้วน";
		Statuesave = "N";
		nameTab 	= "menu_OL_3";
		alertError(message);
	}else{
		dataSave_cal_premium_OL();
		Statuesave = "Y";
		nameTab 	= "menu_OL_3";
		var message = "บันทึกข้อมูลเรียบร้อย";
		alertSuccess(message);
	}
}
/*ตารางมูลค่ากรมธรรม์*/
$("#dbBox3_1_OL").change(function(){
	var year = $(this).val();
	
	$("#dbBox3_2_OL").val("0").prop("selected","selected");
	$("#dbBox3_3_OL").val("0").prop("selected","selected");
	
	$("#tmo1_OL").prop("disabled", true);
	$("#tmo2_OL").prop("disabled", true);
	
	if(year != 0){
		$("#dbBox3_2_OL option").each(function(){
			var male_year = $(this).attr("data-year");
			var value = $(this).val();
			
			if(year != male_year){
				if(value != 0){
					$(this).hide();
				}else{
					$(this).show();
				}
				
			}else{
				$(this).show();
			}
		});
		
		$("#dbBox3_3_OL option").each(function(){
			var female_year = $(this).attr("data-year");
			var value = $(this).val();
			
			if(year != female_year){
				if(value != 0){
					$(this).hide();
				}else{
					$(this).show();
				}
			}else{
				$(this).show();
			}
		});
	}else{
		$("#dbBox3_2_OL option").show();
		$("#dbBox3_3_OL option").show();
	}
	
});

$("#dbBox3_4_OL").change(function(){
	var year = $(this).val();
	
	$("#dbBox3_5_OL").val("0").prop("selected","selected");
	$("#dbBox3_6_OL").val("0").prop("selected","selected");
	
	$("#tmo3_OL").prop("disabled", true);
	$("#tmo4_OL").prop("disabled", true);
	
	if(year != 0){
		$("#dbBox3_5_OL option").each(function(){
			var male_year = $(this).attr("data-year");
			var value = $(this).val();
			
			if(year != male_year){
				if(value != 0){
					$(this).hide();
				}else{
					$(this).show();
				}
			}else{
				$(this).show();
			}
		});
		
		$("#dbBox3_6_OL option").each(function(){
			var female_year = $(this).attr("data-year");
			var value = $(this).val();
			
			if(year != female_year){
				if(value != 0){
					$(this).hide();
				}else{
					$(this).show();
				}
			}else{
				$(this).show();
			}
		});
	}else{
		$("#dbBox3_5_OL option").show();
		$("#dbBox3_6_OL option").show();
	}
	
});

function bt_Menu4_OL_Confirm(){

	var message = "";
	var error = 0;
	var error_RPU = 0;
	var error_ETI = 0;
	var numfile = 0;
	var chk_box1 = $("#cbBox1_OL").prop("checked");
	
	if($("#cbBox1_OL").prop("checked") == true){
		if($("#dbBox1_OL option:selected").text() == "None"){
			error++;
		}
		
		if($("#dbBox1_OL option:selected").text() != "None"){
			$("#tb_RateValue1_OL>tbody>tr").each(function(){
				if($(this).find("td:nth-child(2) input[type='text']").val() != ""){
					numfile++;
				}
			});			
			console.log(numfile);
		}
	}
	
	if($("#cbBox2_OL").prop("checked") == true){
		if($("#dbBox2_OL option:selected").text() == "None"){
			error++;
		}
		
		if($("#dbBox2_OL option:selected").text() != "None"){
			if($("#input_file_2_OL").val() == ""){
				error++;
			}
		}
	}	
	
	/*RPU/ETI*/
	if($("#cbBox3_OL").prop("checked") == true){
		var chk1 = $("#tablePolicy1_OL").prop("checked");
		var chk2 = $("#tablePolicy2_OL").prop("checked");
		
		/*RPU*/
		var RPU_val = $("#dbBox3_1_OL option:selected").val();
		var RPU_M = $("#dbBox3_2_OL option:selected").val();
		var RPU_F = $("#dbBox3_3_OL option:selected").val();
		
		/*ETI*/
		var ETI_val = $("#dbBox3_4_OL option:selected").val();
		var ETI_M = $("#dbBox3_5_OL option:selected").val();
		var ETI_F = $("#dbBox3_6_OL option:selected").val();
		
		if(chk1 == true){
			if(RPU_val != "0"){
				if(RPU_M == "0"){
					error_RPU++;
				}
				if(RPU_F == "0"){
					error_RPU++;
				}
			}/*else{
				error_RPU++;
			}*/
			
			if(ETI_val != "0"){
				if(ETI_M == "0"){
					error_ETI++;
				}
				if(ETI_F == "0"){
					error_ETI++;
				}
			}/*else{
				error_ETI++;
			}*/
		}else if(chk2 == true){
			
		}
		
	}

	
	if(error > 0 && numfile >= 1 && chk_box1 == true && error_RPU == 0 && error_ETI == 0){
		message = "กรุณาระบุข้อมูลให้ครบ";
		alertError(message);
		nameTab 	= "menu_OL_4";
		Statuesave = "N";
	}else if(error > 0 && numfile < 1 && chk_box1 == true && error_RPU == 0 && error_ETI == 0){
		message = "กรุณาระบุข้อมูลให้ครบ";
		alertError(message);
		nameTab 	= "menu_OL_4";
		Statuesave = "N";
	}else if(error == 0 && numfile < 1 && chk_box1 == true && error_RPU == 0 && error_ETI == 0){
		message = "กรุณานำเข้า CV อย่างน้อย 1 ไฟล์";
		nameTab 	= "menu_OL_4";
		Statuesave = "N";
		alertError(message);
	}else if(error == 0 && numfile >= 1 && chk_box1 == true && error_RPU > 0 || error_ETI > 0){
		message = "กรุณาเลือกตารางมรณะแบบ RPU/ETI";
		nameTab 	= "menu_OL_4";
		Statuesave = "N";
		alertError(message);
	}else if(error == 0 && numfile < 1 && chk_box1 == true && error_RPU > 0 || error_ETI > 0){
		message = "กรุณาเลือกตารางมรณะแบบ RPU/ETI";
		nameTab 	= "menu_OL_4";
		Statuesave = "N";
		alertError(message);
	}else if(error == 0 && numfile < 1 && chk_box1 == false && error_RPU > 0 || error_ETI > 0){
		message = "กรุณาเลือกตารางมรณะแบบ RPU/ETI";
		nameTab 	= "menu_OL_4";
		Statuesave = "N";
		alertError(message);
	}else{		
		nameTab 	= "menu_OL_4";
		Statuesave = "Y";
		dataSave_tableValueInsurance_OL();
		var message = "บันทึกข้อมูลเรียบร้อย";
		alertSuccess(message);
	}
	
}
/*ผลประโยชน์/ความคุ้มครอง Tab : เสียชีวิต*/
function bt_Die_OL_Confirm(){
	var message = "";
	var error = 0;

		var imgOKcount = $("#tbody_dieL_OL tbody>tr i.glyphicon-edit").length;
		var row_length = $("#tbody_dieR_OL tbody>tr").length;
		var row_hidden = Number($("#tbody_dieL_OL tbody>tr:hidden").length);
		console.log(row_hidden)
		$("#tbody_dieL_OL tbody>tr").each(function(i){
			
			if(row_hidden != 1){
			
					/*ระยะ*/
					/*var die_phase_OL = [];
					die_phase_OL = $(this).find("td:nth-child(2) input").val();
					if(die_phase_OL == ""){
						error++;
					}*/
					
					/*from*/
					var die_fromYear_OL = [];
					die_fromYear_OL	= $(this).find("td:nth-child(2) input").val();
					if(die_fromYear_OL == "" || die_fromYear_OL == "0"){
						error++;
					}
					
					var die_fromYearUnit_OL_text = [];			
					die_fromYearUnit_OL_text = $(this).find("td:nth-child(3) option:selected").val();
					if(die_fromYearUnit_OL_text == "NONE"){
						error++;
					}
					
					/*to*/
					var die_toYearUnit_OL = [];
					die_toYearUnit_OL = $(this).find("td:nth-child(4) input").val();
					if(die_toYearUnit_OL == "" || die_toYearUnit_OL == "0"){
						error++;
					}
					
					var die_toYearUnit_OL_text = [];
					die_toYearUnit_OL_text	= $(this).find("td:nth-child(5) option:selected").val();
					if(die_toYearUnit_OL_text == "NONE"){
						error++;
					}
			}else{
				if(i != 0){
					/*ระยะ*/
					/*var die_phase_OL = [];
					die_phase_OL = $(this).find("td:nth-child(2) input").val();
					if(die_phase_OL == ""){
						error++;
					}*/
					
					/*from*/
					var die_fromYear_OL = [];
					die_fromYear_OL	= $(this).find("td:nth-child(2) input").val();
					if(die_fromYear_OL == "" || die_fromYear_OL == "0"){
						error++;
					}
					
					var die_fromYearUnit_OL_text = [];		
					die_fromYearUnit_OL_text = $(this).find("td:nth-child(3) option:selected").val();
					if(die_fromYearUnit_OL_text == "NONE"){
						error++;
					}
					
					/*to*/
					var die_toYearUnit_OL = [];
					die_toYearUnit_OL = $(this).find("td:nth-child(4) input").val();
					if(die_toYearUnit_OL == "" || die_toYearUnit_OL == "0"){
						error++;
					}
					
					var die_toYearUnit_OL_text = [];
					die_toYearUnit_OL_text	= $(this).find("td:nth-child(5) option:selected").val();
					if(die_toYearUnit_OL_text == "NONE"){
						error++;
					}
				}
			}
			
			
			
			
		});
		
		$("#tbody_dieR_OL tbody>tr").each(function(i){
			
			if(row_hidden != 1 ){
				
					/*SA*/
					var die_sa_OL = [];
					die_sa_OL = $(this).find("td:nth-child(2) input").val();
					var die_sa_unit_OL_text = [];
					die_sa_unit_OL_text = $(this).find("td:nth-child(3) option:selected").val();
					
					if(die_sa_OL != "0.00"){
						if(die_sa_unit_OL_text == "NONE"){
							error++;
						}
					}
					
					if(die_sa_unit_OL_text != "NONE"){
						if(die_sa_OL == "0.00"){
							error++;
						}
					
					}
					
					/*validate Premuim*/
					var die_prem_ol = [];
					die_prem_ol = $(this).find("td:nth-child(4) input").val();
					var die_prem_val_ol = [];
					die_prem_val_ol = $(this).find("td:nth-child(5) option:selected").val();
					
					if(die_prem_ol != "0.00"){
						if(die_prem_val_ol == "NONE"){
							error++;
						}
					}
					
					if(die_prem_val_ol != "NONE"){
						if(die_prem_ol == "0.00"){
							error++;
						}
					}
					

					/*validate cv/pv*/
					var die_inp_cvpv_OL = [];
					die_inp_cvpv_OL = $(this).find("td:nth-child(7) input").val();
					var die_cvpv_OL = [];
					die_cvpv_OL = $(this).find("td:nth-child(8) option:selected").val();
					
					if(die_inp_cvpv_OL != "0.00"){
						if(die_cvpv_OL == "NONE"){
							error++;
						}
					}
					if(die_cvpv_OL != "NONE"){
						if(die_inp_cvpv_OL == "0.00" ){
							error++;
						}
					}
					
					/*ตารางอุบัติเหตุ ADB*/
					var die_condition_adb_ol = [];
					die_condition_adb_ol = $(this).find("td:nth-child(10) option:selected").val();
					var die_adb_val_ol = [];
					die_adb_val_ol = $(this).find("td:nth-child(11) input").val();
					var die_adb_type_ol = [];
					die_adb_type_ol = $(this).find("td:nth-child(12) option:selected").val();
					
					if(die_condition_adb_ol != "NONE"){
					 
						if(die_adb_val_ol == "0.00" || die_adb_type_ol == "NONE"){
							error++;
						}
					}
					if(die_adb_val_ol != "0.00"){
						if(die_condition_adb_ol == "NONE" || die_adb_type_ol == "NONE"){
							error++;
						}
					}
					if(die_adb_type_ol != "NONE"){
						if(die_adb_val_ol == "0.00" ||die_condition_adb_ol == "NONE"){
							error++;
						}
					}
					
					/*ตารางอุบัติเหตุสาธารณะ*/
					var die_condition_acc_ol = [];
					die_condition_acc_ol = $(this).find("td:nth-child(13) option:selected").val();
					var die_acc_val_ol = [];
					die_acc_val_ol = $(this).find("td:nth-child(14) input").val();
					var die_acc_type_ol = [];
					die_acc_type_ol = $(this).find("td:nth-child(15) option:selected").val();
					
					if(die_condition_acc_ol != "NONE"){
						if(die_acc_val_ol == "0.00" || die_acc_type_ol == "NONE"){
							error++;
						}
					}
					if(die_acc_val_ol != "0.00" ){
						if(die_condition_acc_ol == "NONE" || die_acc_type_ol == "NONE"){
							error++;
						}
					}
					if(die_acc_type_ol != "NONE"){
						if(die_acc_val_ol == "0.00" || die_condition_acc_ol == "NONE"){
							error++;
						}
					}
				
			}else{
				if(i != 0){
					/*SA*/
					var die_sa_OL = [];
					die_sa_OL = $(this).find("td:nth-child(2) input").val();
					var die_sa_unit_OL_text = [];
					die_sa_unit_OL_text = $(this).find("td:nth-child(3) option:selected").val();
					
					if(die_sa_OL != "0.00"){
						if(die_sa_unit_OL_text == "NONE"){
							error++;
						}
					}
					
					if(die_sa_unit_OL_text != "NONE"){
						if(die_sa_OL == "0.00"){
							error++;
						}
					
					}
					
					/*validate Premuim*/
					var die_prem_ol = [];
					die_prem_ol = $(this).find("td:nth-child(4) input").val();
					var die_prem_val_ol = [];
					die_prem_val_ol = $(this).find("td:nth-child(5) option:selected").val();
					
					if(die_prem_ol != "0.00"){
						if(die_prem_val_ol == "NONE"){
							error++;
						}
					}
					
					if(die_prem_val_ol != "NONE"){
						if(die_prem_ol == "0.00"){
							error++;
						}
					}
					

					/*validate cv/pv*/
					var die_inp_cvpv_OL = [];
					die_inp_cvpv_OL = $(this).find("td:nth-child(7) input").val();
					var die_cvpv_OL = [];
					die_cvpv_OL = $(this).find("td:nth-child(8) option:selected").val();
					
					if(die_inp_cvpv_OL != "0.00"){
						if(die_cvpv_OL == "NONE"){
							error++;
						}
					}
					if(die_cvpv_OL != "NONE"){
						if(die_inp_cvpv_OL == "0.00" ){
							error++;
						}
					}
					
					/*ตารางอุบัติเหตุ ADB*/
					var die_condition_adb_ol = [];
					die_condition_adb_ol = $(this).find("td:nth-child(10) option:selected").val();
					var die_adb_val_ol = [];
					die_adb_val_ol = $(this).find("td:nth-child(11) input").val();
					var die_adb_type_ol = [];
					die_adb_type_ol = $(this).find("td:nth-child(12) option:selected").val();
					
					if(die_condition_adb_ol != "NONE"){
					 
						if(die_adb_val_ol == "0.00" || die_adb_type_ol == "NONE"){
							error++;
						}
					}
					if(die_adb_val_ol != "0.00"){
						if(die_condition_adb_ol == "NONE" || die_adb_type_ol == "NONE"){
							error++;
						}
					}
					if(die_adb_type_ol != "NONE"){
						if(die_adb_val_ol == "0.00" ||die_condition_adb_ol == "NONE"){
							error++;
						}
					}
					
					/*ตารางอุบัติเหตุสาธารณะ*/
					var die_condition_acc_ol = [];
					die_condition_acc_ol = $(this).find("td:nth-child(13) option:selected").val();
					var die_acc_val_ol = [];
					die_acc_val_ol = $(this).find("td:nth-child(14) input").val();
					var die_acc_type_ol = [];
					die_acc_type_ol = $(this).find("td:nth-child(15) option:selected").val();
					
					if(die_condition_acc_ol != "NONE"){
						if(die_acc_val_ol == "0.00" || die_acc_type_ol == "NONE"){
							error++;
						}
					}
					if(die_acc_val_ol != "0.00" ){
						if(die_condition_acc_ol == "NONE" || die_acc_type_ol == "NONE"){
							error++;
						}
					}
					if(die_acc_type_ol != "NONE"){
						if(die_acc_val_ol == "0.00" || die_condition_acc_ol == "NONE"){
							error++;
						}
					}
				}
			}
			
			
		});
		
		
		
	if(error > 0){
		message = "กรุณาระบุข้อมูลให้ครบ";
		alertError(message);
	}else{
		dataSave_benefitsCoverage_dead_OL();
		message = "บันทึกข้อมูลเรียบร้อย";
		alertSuccess(message);
		nameTab 	= "menu_OL_5";
		Statuesave = "Y";
	}
}

/*ผลประโยชน์/ความคุ้มครอง Tab : เงินครบสัญญา*/
function bt_Contract_OL_Confirm(){
	var message = "";
	var error = 0;

	if($("#contract_sa0_OL").val()  == "0.00" || $("#contract_sa_unit0_OL option:selected").val() == "NONE"){
		error++;
	}
	if($("#contract_sa0_OL").val()  != "0.00"){
		if($("#contract_sa_unit0_OL option:selected").val() == "NONE"){
			error++;
		}
	}
	if($("#contract_sa_unit0_OL option:selected").val() != "NONE"){
		if($("#contract_sa0_OL").val()  == "0.00"){
			error++;
		}
	}

	if($("#contract_premium_OL0").val() != "0.00"){
		if($("#contract_sl_premium_OL0 option:selected").val() == "NONE"){
			error++;
		}
	}
	if($("#contract_sl_premium_OL0 option:selected").val() != "NONE"){
		if($("#contract_premium_OL0").val() == "0.00" ||$("#contract_premium_OL0").val() == ""){
			error++;
		}
	}
	
	
	if($("#contract_cvpv_OL0").val() != "0.00"){
		if($("#contract_sl_cvpv_OL0 option:selected").val() == "NONE"){
			error++;
		}
	}
	if($("#contract_sl_cvpv_OL0 option:selected").val() != "NONE"){
		if($("#contract_cvpv_OL0").val() == "0.00" ){
			error++;
		}
	}
	
	if(error > 0){
		message = "กรุณาระบุข้อมูลให้ครบ";
		alertError(message);
	}else{
		dataSave_benefitsCoverage_contract_OL();
		message = "บันทึกข้อมูลเรียบร้อย";
		alertSuccess(message);
		nameTab 	= "menu_OL_5";
		Statuesave = "Y";
	}
}

/*ผลประโยชน์/ความคุ้มครอง Tab : เงินคืนทุกระยะ*/
function bt_Refund_OL_Confirm(){
	var message = "";
	var error = 0;

	var imgOKcount = $("#benefit_refund tbody>tr i.glyphicon-edit").length;
	var row = Number($("#benefit_refund tbody>tr").length);
		
	$("#benefit_refund tbody>tr").each(function(){
		
		var from_year = [];
		var from_age = [];
		var to_year = [];
		var to_age = [];
		from_year = $(this).find("td:nth-child(2) input").val();
		from_age = $(this).find("td:nth-child(3) input").val();
		
		to_year = $(this).find("td:nth-child(4) input").val();
		to_age = $(this).find("td:nth-child(5) input").val();
		
		var benef_amt = [];
		var benef_unit = [];
		benef_amt = $(this).find("td:nth-child(7) input").val();
		benef_unit = $(this).find("td:nth-child(8) option:selected").val();
		
		if(from_year == "" && from_age == ""){
			error++;
		}
		
		if(benef_amt != "0.00"){
			if(benef_unit == "NONE"){
				error++;
			}
		}
	
		if(benef_unit != "NONE"){
			if(benef_amt == "0.00"){
				error++;
			}
		}
		
		if(from_year != "" || from_age != ""){
			if(to_year == "" && to_age == ""){
				error++;
			}
			
			if(benef_amt == "0.00" || benef_amt == ""){
				error++;
			}
			if(benef_unit == "NONE"){
				error++;
			}
			
		}
	});
		
	if(error > 0){
		message = "กรุณาระบุข้อมูลให้ครบ";
		alertError(message);
	}else{
		dataSave_benefitsCoverage_refund_OL();
		message = "บันทึกข้อมูลเรียบร้อย";
		alertSuccess(message);
		nameTab 	= "menu_OL_5";
		Statuesave = "Y";
	}
}

/*ผลประโยชน์/ความคุ้มครอง Tab : เงินบำนาญ*/
function bt_Pension_OL_Confirm(){
	var message = "";
	var error = 0;
	var imgOKcount = $("#benefit_pension tbody>tr i.glyphicon-edit").length;
	var row = Number($("#benefit_pension tbody>tr").length);

	if($("#pension_startAge_OL").val() == "0" || $("#pension_startAge_OL").val() == ""){
		error++;
	}
	if($("#pension_confirmPay_OL").val() == "0" || $("#pension_confirmPay_OL").val() == ""){
		error++;
	}
	
	$("#benefit_pension tbody>tr").each(function(){
		var from_year = [];
		var from_age = [];
		var to_year = [];
		var to_age = [];
		from_year = $(this).find("td:nth-child(2) input").val();
		from_age = $(this).find("td:nth-child(3) input").val();
		
		to_year = $(this).find("td:nth-child(4) input").val();
		to_age = $(this).find("td:nth-child(5) input").val();
		
		var benef_amt = [];
		var benef_unit = [];
		benef_amt = $(this).find("td:nth-child(7) input").val();
		benef_unit = $(this).find("td:nth-child(8) option:selected").val();
		
		if(from_year == "" && from_age == ""){
			error++;
		}
		
		if(benef_amt != "0.00"){
			if(benef_unit == "NONE"){
				error++;
			}
		}
	
		if(benef_unit != "NONE"){
			if(benef_amt == "0.00"){
				error++;
			}
		}
		
		if(from_year != "" || from_age != ""){
			if(to_year == "" && to_age == ""){
				error++;
			}
			
			if(benef_amt == "0.00" || benef_amt == ""){
				error++;
			}
			if(benef_unit == "NONE"){
				error++;
			}
			
		}
	});

	
	if(error > 0){
		message = "กรุณาระบุข้อมูลให้ครบ";
		alertError(message);
	}else{
		dataSave_benefitsCoverage_pension_OL();
		message = "บันทึกข้อมูลเรียบร้อย";
		alertSuccess(message);
		nameTab 	= "menu_OL_5";
		Statuesave = "Y";
	}
}

/*ผลประโยชน์/ความคุ้มครอง Tab : กองทุนค่ารักษาพยายาล*/
function bt_Medical_OL_Confirm(){
	var message = "";
	var error = 0;
	var imgOKcount = $("#benefit_medical tbody>tr i.glyphicon-edit").length;
	var row = Number($("#benefit_medical tbody>tr").length);

	$("#benefit_medical tbody>tr").each(function(){
		var from_year = [];
		var from_age = [];
		var to_year = [];
		var to_age = [];
		from_year = $(this).find("td:nth-child(2) input").val();
		from_age = $(this).find("td:nth-child(3) input").val();
		
		to_year = $(this).find("td:nth-child(4) input").val();
		to_age = $(this).find("td:nth-child(5) input").val();
		
		var benef_amt = [];
		var benef_unit = [];
		benef_amt = $(this).find("td:nth-child(7) input").val();
		benef_unit = $(this).find("td:nth-child(8) option:selected").val();
		
		if(from_year == "" && from_age == ""){
			error++;
		}
		
		if(benef_amt != "0.00"){
			if(benef_unit == "NONE"){
				error++;
			}
		}
	
		if(benef_unit != "NONE"){
			if(benef_amt == "0.00"){
				error++;
			}
		}
		
		if(from_year != "" || from_age != ""){
			if(to_year == "" && to_age == ""){
				error++;
			}
			
			if(benef_amt == "0.00" || benef_amt == ""){
				error++;
			}
			if(benef_unit == "NONE"){
				error++;
			}
			
		}
	});
	
	
	if(error > 0){
		message = "กรุณาระบุข้อมูลให้ครบ";
		alertError(message);
	}else{
		dataSave_benefitsCoverage_medical_OL();
		message = "บันทึกข้อมูลเรียบร้อย";
		alertSuccess(message);
		nameTab 	= "menu_OL_5";
		Statuesave = "Y";
	}
}

/*ผลประโยชน์/ความคุ้มครอง Tab : เงินปันผล*/
function bt_Dividend_OL_Confirm(){
	var message = "";
	var error = 0;
	
	if($("#cbBoxDV1").prop("checked") == true){
		
		var beg_period_type_01 = $("#DVList1").val();
		if(beg_period_type_01 == "NONE"){
			error++;
		}
		
		var benef_scope_01 = $("#DvList1_Year").val();
		var beg_period_01 = $("#DVBox1").val();
		if(benef_scope_01 == "NONE"){
				error++;
		
		}
		
		if(beg_period_01 == ""){
				error++;
			
		}
		
		
		var formular_id = $("#DVList1_Cal").val();
		if(formular_id == "NONE"){
			error++;
		}
	}
	
	
	if($("#cbBoxDV2").prop("checked") == true){
		if($("#GuaranteeOL_opt2").prop("checked") == true){

			var imgOKcount = $("#benefit_Guaruntee_tbl tbody>tr i.glyphicon-edit").length;
			var row = Number($("#benefit_Guaruntee_tbl tbody>tr").length);
			
			$("#benefit_Guaruntee_tbl tbody>tr").each(function(){
				var beg_period_type = [];
				beg_period_type = $(this).find("td:nth-child(2) option:selected").val();
				if(beg_period_type == "NONE"){
					error++;
				}
				
				var benef_amt = [];
				benef_amt = $(this).find("td:nth-child(4) input").val();
				if(benef_amt == "0.00"){
					error++;				
				}
				
				var benef_unit = [];
				benef_unit = $(this).find("td:nth-child(5) option:selected").val();
				if(benef_unit == "NONE"){
					error++;
				}
			});
			
		}else if($("#GuaranteeOL_opt1").prop("checked") == true){
			/*validate file*/
			if($("#input_fileGuaruntee_OL").val() == ""){
				error++;
			}
			if($("fileID_OL").val() == ""){
				error++;
			}
			if($("layoutID_OL").val() == ""){
				error++;
			}
			if($("rateCat_dividend_OL").val() == ""){
				error++;
			}
			
		}
	}
	
	
		if(error > 0){
			message = "กรุณาระบุข้อมูลให้ครบ";
			alertError(message);
		}else{
			dataSave_benefitsCoverage_dividend_OL();
			message = "บันทึกข้อมูลเรียบร้อย";
			alertSuccess(message);
			nameTab 	= "menu_OL_5";
			Statuesave = "Y";
		}
}


/*policy wording*/
function displayPolicyValueWordOL_popup(){	
	var uploadWord1_OL = $('#uploadWord1_OL').prop('checked');
	var uploadWord2_OL = $('#uploadWord2_OL').prop('checked');
	
	if(uploadWord1_OL)
		{	
			$('#select_wordfile_policy1_OL_modal').prop('disabled', false);
			$('#input_wordfile_policy1_OL_modal').attr("disabled", false);
			$('#btn_word_policy1_OL_modal').prop('disabled', false);
			$("#tbl_PolicyFileWord_OL *").attr("disabled", "disabled").off('click');
	}else{
			$('#select_wordfile_policy1_OL_modal').prop('disabled', true);
			$('#input_wordfile_policy1_OL_modal').attr("disabled", true);
			$('#btn_word_policy1_OL_modal').prop('disabled', true);
			$("#tbl_PolicyFileWord_OL *").prop("disabled", false);
	}
}

/*policy Upload Modal*/

/*history*/
$(document).on("click", ".open-HistoryDialog_OL", function () {
    var myId = $(this).data('id');
    $(".modal-body #History_Policy_OL").val( myId );
    
	/*โชว์  modal title ด้วย policy name*/
	var policy_name = $("#policy_name_OL"+myId).val();
	$("#modal_historyPolicy_OL .modal-header>h4>span").html(policy_name);
	
	var chk_class = $(this).attr('class')
	if( chk_class.includes('active_grey')){
		 $('#modal_historyPolicy_OL').modal('hide');
	}else{
		$('#modal_historyPolicy_OL').modal('show');
	}
});

/*open modal*/
$(document).on("click", ".open-AddUploadDialog_pdf_OL", function () {
    var myId = $(this).data('id');
    $(".modal-body #pdfID_Policy_OL").val( myId );
    document.getElementById("upload1_OL").value = 1;
    
    $("#tbl_PolicyFile_OL *").prop("disabled", true);
    $("input[name='uploadOld_OL']:radio").prop("checked", false);  
    
    $("#upload1_OL").prop("checked", true);
    $("#input_pdffile_policy1_OL_modal").val("");
    document.getElementById("select_pdffile_policy1_OL_modal").value = "";
    $("#base64_filePDF_OL").val("")
    $('#select_pdffile_policy1_OL_modal').prop('disabled', false);
	$('#input_pdffile_policy1_OL_modal').attr("disabled", false);
	$('#btn_pdf_policy1_OL_modal').prop('disabled', false);
	
	/*โชว์  modal title ด้วย policy name*/
	var policy_name = $("#policy_name_OL"+myId).val();
	$("#modal_upload_pdf_OL .modal-header>h4>span").html(policy_name);
	
    $('#modal_upload_pdf_OL').modal('show');
});

$(document).on("click", ".open-AddUploadDialog_word_OL", function () {
    var myId = $(this).data('id');
    $(".modal-body #wordID_Policy_OL").val( myId );   
    document.getElementById("uploadWord1_OL").value = 1;
     
    $("#tbl_PolicyFileWord_OL *").prop("disabled", true);
    $("input[name='uploadOldWord_OL']:radio").prop("checked", false);
    
    $("#uploadWord1_OL").prop("checked", true);
    $("#input_wordfile_policy1_OL_modal").val("");
    document.getElementById("select_wordfile_policy1_OL_modal").value = "";
    $("#base64_fileDOC_OL").val("")
    $('#select_wordfile_policy1_OL_modal').prop('disabled', false);
	$('#input_wordfile_policy1_OL_modal').attr("disabled", false);
	$('#btn_word_policy1_OL_modal').prop('disabled', false);
	
	/*โชว์  modal title ด้วย policy name*/
	var policy_name = $("#policy_name_OL"+myId).val();
	$("#modal_upload_word_OL .modal-header>h4>span").html(policy_name);
	
	$('#modal_upload_word_OL').modal('show');
});

/*เลือก option*/
function displayPolicyValueOL_popup(){	
	var upload1_OL = $('#upload1_OL').prop('checked');
	var upload2_OL = $('#upload2_OL').prop('checked');
	
	if(upload1_OL)
		{	
			$('#select_pdffile_policy1_OL_modal').prop('disabled', false);
			$('#input_pdffile_policy1_OL_modal').attr("disabled", false);
			$('#btn_pdf_policy1_OL_modal').prop('disabled', false);
			$("#tbl_PolicyFile_OL *").attr("disabled", "disabled").off('click');
			$("#tbl_PolicyFile_OL input[type='radio']").prop("checked",false);
			document.getElementById("upload1_OL").value = 1;
			document.getElementById("upload2_OL").value = 0;					
	}else if(upload2_OL){
			$('#select_pdffile_policy1_OL_modal').prop('disabled', true);
			$('#input_pdffile_policy1_OL_modal').attr("disabled", true);
			$('#btn_pdf_policy1_OL_modal').prop('disabled', true);
			$("#tbl_PolicyFile_OL *").prop("disabled", false);
			document.getElementById("upload1_OL").value = 0;
			document.getElementById("upload2_OL").value = 1;
	}
}

/*************ไฟล์ pdf+word**************/
function checkfile_policyDupicate_OL(file_name,type){
	var error = 0;
	var tbl = "";
	var doc_type_id = "";
	var tbl_main = "Policy_Table_OL"
	if(type == "pdf"){
		tbl = "tbl_PolicyFile_OL";
		doc_type_id = 2;
	}else if(type == "word"){
		tbl = "tbl_PolicyFileWord_OL";
		doc_type_id = 1;
	}
	
	datajson = {				        	
			"method" : "getFilenameByDocTypeID",
			"doc_type_id" : doc_type_id
		}	
		$.ajax({
			 type: "POST",
		    url : "Download_Upload_Servlet",
		    data: datajson,       
		    success : function(response) {	
		    	
		    	// เซ็คชื่อไฟล์ซ้ำใน database
		    	for(i in response.fileNameAll){
		    		var obj = response.fileNameAll[i];
		    		if( file_name.toUpperCase() == (obj.filename).toUpperCase()){
		    			 error++;	
		    		}
		    	}
		    	
		    	if(error > 0 && type == "pdf"){
		    		$("#base64_filePDF_OL").val("");
		    		$("#input_pdffile_policy1_OL_modal").val("");
		    		 message = "ไม่สามารถอัพโหลดได้ เนื่องจากมีชื่อไฟล์นี้อยู่แล้ว";
					 alertError(message);	
		    	}else if(error > 0 && type == "word"){
		    		$("#base64_fileDOC_OL").val("");
		    		$("#input_wordfile_policy1_OL_modal").val("");
		    		 message = "ไม่สามารถอัพโหลดได้ เนื่องจากมีชื่อไฟล์นี้อยู่แล้ว";
					 alertError(message);	
		    	}
		    	
		    },
		 	error : function(response) {	
			 
		 	}
		})
		console.log("datajson",datajson)
	
		//เซ็คชื่อไฟล์ซ้ำใน ตารางไฟล์เดิม
    	$("#"+tbl+" tbody>tr").each(function(){
 		   if(file_name.toUpperCase() == $(this).find('td:nth-child(3)').text().toUpperCase()){
 			   $("#input_pdffile_policy1_OL_modal").val("");
 			   $("#base64_filePDF_OL").val("");
 			   error++;				
 		   }
    	});
		//เซ็คชื่อไฟล์ซ้ำใน ตาราง Policy wording หลัก
		$("#"+tbl_main+" tbody>tr").each(function(){
			if( type == "pdf"){
				if(file_name.toUpperCase() == $(this).find('td:nth-child(4) .filename>a').text().toUpperCase()){
					   $("#input_pdffile_policy1_OL_modal").val("");
					   $("#base64_filePDF_OL").val("");
					   error++;				
				}
			}else if( type == "word"){
				if(file_name.toUpperCase() == $(this).find('td:nth-child(6) .filename>a').text().toUpperCase()){
					$("#base64_fileDOC_OL").val("");
		    		$("#input_wordfile_policy1_OL_modal").val("");
					   error++;				
				}
			}
			   
	 	});
	
		if(error > 0){ return false; }else{ return true; }
	
}

/*lookup ไฟล์เดิม*/
function oldFile_policyWording_OL(doc_type_id,file_type){
	
	// ซ่อนค่าให้รู้ว่า popup หน้านีคือของ row ไหน
	if(file_type == "2"){
		$("#btn_submit_fileuploadPolicy_OL").attr('data-id',doc_type_id)
		$("#show_modal_selectPolicy_pdf_OL").val(doc_type_id)
	}else if(file_type == "1"){
		$("#btn_submit_fileuploadPolicyWord_OL").attr('data-id',doc_type_id)
		$("#show_modal_selectPolicy_doc_OL").val(doc_type_id)
	}
	
	datajson = {				        	
		"method" : "getLookupOldFilePolicy",
		"doc_type_id" : doc_type_id,
		"file_type" : file_type,
		"cov_code" : $("#pass_Insurance_coverage_ol").val()
	}	
				
	$.ajax({
		 type: "POST",
	    url : "PolicyWording_Data_Servlet",
	    data: datajson,       
	    success : function(response) {	
	    	
	    	if(response.old_file){
	    		if(file_type == "2"){
	    			//var tableName = "tbl_PolicyFile_CL";
	    			if ( $.fn.dataTable.isDataTable( "#tbl_PolicyFile_OL" ) ) {
	  		    	  var table = $("#tbl_PolicyFile_OL").DataTable();
	  		    	  table.destroy();
	  		      	}
	    			$("#tbl_PolicyFile_OL tbody>tr").remove();
	    		}else if(file_type == "1"){
	    			//var tableName = "tbl_PolicyFileWord_CL";
	    			if ( $.fn.dataTable.isDataTable( "#tbl_PolicyFileWord_OL" ) ) {
		  		    	  var table = $("#tbl_PolicyFileWord_OL").DataTable();
		  		    	  table.destroy();
		  		    }
	    			$("#tbl_PolicyFileWord_OL tbody>tr").remove();
	    		}
	    		
		    	for(i in response.old_file){
		    		var obj = response.old_file[i];
		    		
					if(file_type == "2" && obj.file_type == "2"){
						var flag_chkDup_pdf = false;
						$("#tbl_PolicyFile_OL tbody>tr").each(function(){
							if( $(this).find('td:nth-child(1) input[type="radio"]').val() == obj.file_id){
								flag_chkDup_pdf = true;
							}
						})
						if(!flag_chkDup_pdf){
							var row = "<tr>"+
			    				"<td class='text-center'><input type='radio' id='uploadOld"+i+"_OL' name='uploadOld_OL' value='"+obj.file_id+"' onclick='selectfile_policy_pdf_OL(this.value);'></td>"+
								"<td class='text-center'><a onclick=\"openFile_target(this,'"+obj.file_ref+"','pdf')\" target='_blank'><span class='glyphicon glyphicon-eye-open'></span></a></td>"+
								"<td class='text-left'><input type='hidden' id='ref_File' value='"+obj.file_ref+"'>"+obj.file_name+"</td>"+
								"</tr>"
							$("#tbl_PolicyFile_OL tbody").append(row);
						}
						
					}else if(file_type == "1" && obj.file_type == "1"){
						var flag_chkDup_doc = false;
						$("#tbl_PolicyFileWord_OL tbody>tr").each(function(){
							if( $(this).find('td:nth-child(1) input[type="radio"]').val() == obj.file_id){
								flag_chkDup_doc = true;
							}
						})
						if(!flag_chkDup_doc){
							var row = "<tr>"+
									"<td class='text-center'><input type='radio' id='uploadOldWord"+i+"_OL' name='uploadOldWord_OL' value='"+obj.file_id+"' onclick='selectfile_policy_word_OL(this.value);'></td>"+
									"<td class='text-center'><a onclick=\"openFile_target(this,'"+obj.file_ref+"','doc')\" target='_blank'><span class='glyphicon glyphicon-eye-open'></span></a></td>"+
									"<td class='text-left'><input type='hidden' id='ref_File' value='"+obj.file_ref+"'>"+obj.file_name+"</td>"+									
								"</tr>"
							$("#tbl_PolicyFileWord_OL tbody").append(row);
						}
					}
		    	}
	    	}
	    	
	    	// default validate ค่าเริ่มต้น
	    	if(file_type == "2"){
	    		$("#upload1_OL").prop('checked',true)
		    	displayPolicyValueOL_popup();
	    		$("#tbl_PolicyFile_OL").DataTable({
		    		"ordering": false,
		    		"paging": false,
		    		"bInfo" : false, 
		    		"scrollY": '312px',
		    		"scrollCollapse": true, 
		    		"autoWidth": false, 
		    		"oLanguage": {"sSearch": "ค้นหา: "}
		    	});
		    	$(".datatbl_PolicyFile_OL .dataTables_scrollHeadInner").css({"width":"100%"});
		    	$(".datatbl_PolicyFile_OL .table").css({"width":"100%"});
	    	}else if(file_type == "1"){
	    		$("#uploadWord1_OL").prop('checked',true)
	    		displayPolicyValueWordOL_popup();
	    		$("#tbl_PolicyFileWord_OL").DataTable({
		    		"ordering": false,
		    		"paging": false,
		    		"bInfo" : false, 
		    		"scrollY": '312px',
		    		"scrollCollapse": true, 
		    		"autoWidth": false, 
		    		"oLanguage": {"sSearch": "ค้นหา: "}
		    	});
		    	$(".datatbl_PolicyFileWord_OL .dataTables_scrollHeadInner").css({"width":"100%"});
		    	$(".datatbl_PolicyFileWord_OL .table").css({"width":"100%"});
	    	}
	    	
	    },
	 	error : function(response) {	
		 
	 	}
	})
	console.log("datajson",datajson)
}
function convertToBase64_OL(file_id,type_file) {
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
  
            if( type_file == "1"){
            	$("#base64_fileDOC_OL").val(base64)
            }else if(type_file == "2"){
            	$("#base64_filePDF_OL").val(base64)
            }else if(type_file == "3"){
            	$("#base64_fileTXT_OL").val(base64)
            }
            
        };
        // Convert data to base64
        fileReader.readAsDataURL(fileToLoad);
    }
    
}
/*************ไฟล์ pdf**************/
/*เลือกนำเข้า */
function uploadfile_policy_pdf_OL(row) {		
	 $("#select_pdffile_policy1_OL_modal").trigger("click");	    	  	    	  
	  $("#select_pdffile_policy1_OL_modal").unbind("change");
	  
	  $("#select_pdffile_policy1_OL_modal ").change(function(e) {
		  var file_path = this.value;
	       var file_name = this.value.replace(/\\/g, '/').replace(/.*\//, '');	
	       var file_type = row;
	      
	       var file_name_split = file_name.split(".")
	       if(file_name_split[1] == "pdf"){
	    	   convertToBase64_OL("select_pdffile_policy1_OL_modal",row);
	    	
		       if(checkfile_policyDupicate_OL(file_name,"pdf") == false){			    	   
				   message = "ไม่สามารถอัพโหลดได้ เนื่องจากมีชื่อไฟล์นี้อยู่แล้ว";
				   alertError(message);					    
				   $("#select_pdffile_policy1_OL_modal").val("");
		       }else{			    	   
		    	   $("#btn_submit_fileuploadPolicy_OL").unbind();
		    	   $("#btn_submit_fileuploadPolicy_OL").click(function(){	
		    		   $("#modal_waiting").modal('show');
		    		   var base64 = $("#base64_filePDF_OL").val();
			    	   var rowID = $(".modal-body #pdfID_Policy_OL").val(); 
			    	   if( base64 != ""){
			    		   GetFileModalPolicy_OL(rowID, file_path, file_name,"","pdf");
			    		   var dateTime = getCurrentDate();
			    		   var file_name_update = "2_"+dateTime+".pdf"
			    			   datajson = {				        	
						    		"method" : "uploadFile",
						    		"passInsurance" : $("#pass_Insurance_coverage_ol").val(),
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
						 	
						 	    	var rowPolicy = $("#show_modal_selectPolicy_pdf_OL").val();
						 	    	 $("#div_pdf_policy"+rowPolicy+"_OL").find('a').attr("onclick","openFile_target(this,'"+obj_ref+"','pdf')")
						 	    	// ชนิดไฟล์,ชื่อไฟล์,ที่อยู่ของไฟล์,ไฟล์ไอดีที่ซ่อนอยู่
						 	    	saveFile(file_type,file_name,obj_ref,"fileId_pdf_OL"+rowPolicy);
						 	    	$("#modal_upload_pdf_OL").hide();
						 	    },
						 	    error : function(response) {	
									 message = "ขนาดไฟล์ห้ามเกิน 30 MB"
									 alertError(message)
									 var rowPolicy = $("#show_modal_selectPolicy_pdf_OL").val();
									 resetFilePolicy_OL(rowPolicy,'pdf');
							 	}
						    })
						    
			    	   }
			      });
		       }
	       }else{
	    	   message = "กรุณาใส่ไฟล์ให้ถูกต้อง"
	    	   alertError(message);
	    	   this.value = "";
	       }
	    		       			  
	  });
}

/*เลือกไฟล์เดิม*/
function selectfile_policy_pdf_OL(fileId) {		  		       	      
	$("#upload2_OL").prop('checked',true)
	$("#btn_submit_fileuploadPolicy_OL").unbind();
	$("#btn_submit_fileuploadPolicy_OL").click(function(){		   
		var rowID = $(".modal-body #pdfID_Policy_OL").val(); 
		var filename = "";
		var ref = "";
		$("#tbl_PolicyFile_OL tbody>tr").each(function(){
			if($(this).find('td:nth-child(1) input[type="radio"]').is(':checked')){
				filename = $(this).find('td:nth-child(3)').text();
				ref = $(this).find('td:nth-child(3) input[type="hidden"]').val();
			}
		})
		if( $("#upload2_OL").is(':checked')){
			GetFileModalPolicy_OL(rowID, fileId , filename , ref , "pdf");
		}else{
			$("#modal_upload_pdf_OL").modal('hide');
		}
		
	})	     		       
}

/***********ไฟล์ word*************/
/*เลือกนำเข้า */
function uploadfile_policy_word_OL(row) {	
	 $("#select_wordfile_policy1_OL_modal").trigger("click");
	 $("#select_wordfile_policy1_OL_modal").unbind("change");
	  $("#select_wordfile_policy1_OL_modal").change(function() {			 					  
		   var file_path = this.value;
	       var file_name = this.value.replace(/\\/g, '/').replace(/.*\//, '');
	       var file_type = row;
	       
	       var file_name_split = file_name.split(".")
	       if(file_name_split[1] == "doc" || file_name_split[1] == "docx" || file_name_split[1] == "odt"){
	    	   convertToBase64_OL("select_wordfile_policy1_OL_modal",row);
		       if(checkfile_policyDupicate_OL(file_name,"word") == false){			    	   
				   message = "ไม่สามารถอัพโหลดได้ เนื่องจากมีชื่อไฟล์นี้อยู่แล้ว";
				   alertError(message);					    
				   $("#select_wordfile_policy1_OL_modal").val("");
		       }else{			    	   
		    	   $("#btn_submit_fileuploadPolicyWord_OL").unbind();
		    	   $("#btn_submit_fileuploadPolicyWord_OL").click(function(){
		    		   $("#modal_waiting").modal('show');
		    		   var base64 = $("#base64_fileDOC_OL").val();
			    	   var rowID = $(".modal-body #wordID_Policy_OL").val(); 
			    	   
			    	   if( base64 != ""){
			    		   GetFileModalPolicy_OL(rowID, file_path, file_name,"", "word");
			    		   var dateTime = getCurrentDate();
			    		   var file_name_update = "1_"+dateTime+".odt"
				    	   datajson = {				        	
						    		"method" : "uploadFile",
						    		"passInsurance" : $("#pass_Insurance_coverage_ol").val(),
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
						 	    	var rowPolicy = $("#show_modal_selectPolicy_doc_OL").val();
						 	    	
						 	    	$("#div_word_policy"+rowPolicy+"_OL").find('a').attr("onclick","openFile_target(this,'"+obj_ref+"','doc')")
						 	    	
						 	    	// ชนิดไฟล์,ชื่อไฟล์,ที่อยู่ของไฟล์,ไฟล์ไอดีที่ซ่อนอยู่
							 	    saveFile(file_type,file_name,obj_ref,"fileId_doc_OL"+rowPolicy);
						 	    	$("#modal_upload_word_OL").hide();
						 	    },
						 	    error : function(response) {	
									 message = "ขนาดไฟล์ห้ามเกิน 30 MB"
									 alertError(message)
									 var rowPolicy = $("#show_modal_selectPolicy_doc_OL").val();
									 resetFilePolicy_OL(rowPolicy,'word');
							 	}
						    })
			    	   }
			       })
		       }	
	       }else{
	    	   message = "กรุณาใส่ไฟล์ให้ถูกต้อง"
	    	   alertError(message);
	    	   this.value = "";
	       }
	  });		
}
/*เลือกไฟล์เดิม*/
function selectfile_policy_word_OL(fileId) {		       	      
	$("#uploadWord2_OL").prop("checked",true)
	$("#btn_submit_fileuploadPolicyWord_OL").unbind();
    $("#btn_submit_fileuploadPolicyWord_OL").click(function(){		   
  	   var rowID = $(".modal-body #wordID_Policy_OL").val(); 
  	   var filename = "";
  	   var ref = "";
			$("#tbl_PolicyFileWord_OL tbody>tr").each(function(){
				if($(this).find('td:nth-child(1) input[type="radio"]').is(':checked')){
					filename = $(this).find('td:nth-child(3)').text();
					ref = $(this).find('td:nth-child(3) input[type="hidden"]').val();
				}
			})
  	   
			if( $("#uploadWord2_OL").is(':checked')){
				 GetFileModalPolicy_OL(rowID , fileId , filename , ref , "word");	  
			}else{
				$("#modal_upload_word_OL").modal('hide');
			}
  	   
    })	
}

/*กดตกลงใน modal*/
function GetFileModalPolicy_OL(rowID, file, filename, ref, type){
	if(type =='pdf'){
		var url = "<a onclick=\"openFile_target(this,'"+ref+"','pdf')\" target='_blank'>"+filename+"</a>";
	}
	if(type =='word'){
		var url = "<a onclick=\"openFile_target(this,'"+ref+"','doc')\" target='_blank'>"+filename+"</a>";
	}

	$("#div_"+type+"_policy"+rowID+"_OL").html(url);
	$("#modal_upload_"+type+"_OL").modal('hide');
	
	var dataResetPdfID 	= "span_reset_pdf_OL"+rowID;
	var dataResetWordID 	= "span_reset_word_OL"+rowID;
    var dataDownloadID = "span_download_OL"+rowID;
    var dataHistoryID = "span_history_OL"+rowID;
    
    if(type=='pdf'){
    	$("a#"+ dataResetPdfID).removeClass("active_grey").addClass("active_blue");
    	$("#fileId_pdf_OL"+rowID).val(file)
    }else if(type == 'word'){
    	$("a#"+ dataResetWordID).removeClass("active_grey").addClass("active_blue");
    	$("#fileId_doc_OL"+rowID).val(file)
    }
    
    $("a#"+ dataDownloadID).removeClass("active_grey").addClass("active_blue");
    $("a#"+ dataHistoryID).removeClass("active_grey").addClass("active_blue");
   
}

function resetFilePolicy_OL(rowID,type){
	if(type=="pdf"){
		$("#fileId_pdf_OL"+rowID).val("");
		$("#div_pdf_policy"+rowID+"_OL").html("None");
	}else if(type=="word"){
		$("#fileId_doc_OL"+rowID).val("");
		$("#div_word_policy"+rowID+"_OL").html("None");
	}
	
	var dataResetPdfID 	= "span_reset_pdf_OL"+rowID;
	var dataResetWordID 	= "span_reset_word_OL"+rowID;   
    var dataDownloadID = "span_download_OL"+rowID;
    var dataHistoryID = "span_history_OL"+rowID;
	
    if(type=='pdf'){
    	$("a#"+ dataResetPdfID).removeClass("active_blue").addClass("active_grey");
    }else if(type == 'word'){
    	$("a#"+ dataResetWordID).removeClass("active_blue").addClass("active_grey");
    }
    
    $("a#"+ dataDownloadID).removeClass("active_blue").addClass("active_grey");
    //$("a#"+ dataHistoryID).removeClass("active_blue").addClass("active_grey");
    
    validActive = 1;
}

/******** History file *********/
function history_policyWording_OL(doc_type_id){
	
	datajson = {				        	
		"method" : "getHistoryPolicy",
		"doc_type_id" : doc_type_id,
		"cov_code" : $("#pass_Insurance_coverage_ol").val()
	}	
				
	$.ajax({
		 type: "POST",
	    url : "PolicyWording_Data_Servlet",
	    data: datajson,     
	    async: false,
	    success : function(response) {	
	    	
	    	$("#tbl_HistoryPolicy_OL tbody>tr").remove();
	    	for(i in response.history_policy){
	    		var obj = response.history_policy[i];
	    		
	    		var fileId_doc = "";	//type 1
	    		var fileName_doc = "";	//type 1
	    		var	file_ref_doc = "";	//type 1
	    		var fileId_pdf = "";	//type 2
	    		var fileName_pdf = "";	//type 2
	    		var file_ref_pdf = "";	//type 2
	    		for(j in response.history_policy[i].file){
	    			var obj_file = response.history_policy[i].file[j];
	    			if( obj_file.type == "1"){
	    				fileId_doc = obj_file.file_id;
	    				fileName_doc = obj_file.file_name;
	    				file_ref_doc = obj_file.file_ref;
	    			}else if( obj_file.type == "2"){
	    				fileId_pdf = obj_file.file_id;
	    				fileName_pdf = obj_file.file_name;
	    				file_ref_pdf = obj_file.file_ref;
	    			}
	    		}
	    		row = "<tr>"+
				"<td class='text-center'>"+obj.seq+"</td>"+
				"<td class='text-center'>"+obj.date+"</td>"+
				"<td class='text-center'>"+obj.userId+"</td>"+
				"<td class='text-center'>" +
					"<a onclick=\"openFile_target(this,'"+file_ref_pdf+"','pdf')\" target='_blank'>"+fileName_pdf+"</a>"+
				"</td>"+
				"<td class='text-center'>" +
				"<a onclick=\"openFile_target(this,'"+file_ref_doc+"','doc')\" target='_blank'>"+fileName_doc+"</a>"+
				"</td>"+
			"</tr>"
				$("#tbl_HistoryPolicy_OL tbody").append(row)
	    	}
	    	
	    },
	 	error : function(response) {	
		 
	 	}
	})
	console.log("datajson",datajson)
}

/*เพิ่มรายการ*/
function addPolicyNew_OL(){	
	
	if($("#div_policyOL").innerHeight() > 792){
		$("#div_policyOL").addClass("scroll_policy");
	}
	
	var table = document.getElementById("Policy_Table_OL");		
	var TableRow = Number($("#Policy_Table_OL>tbody>tr").length)-1;
	var lastImgOKNew = table.getElementsByClassName("spanPolicy_OL");
	
	//alert(lastImgOKNew[TableRow].innerHTML);
	var numberImgOKNew = 0;
				
	if(lastImgOKNew == 0){
		numberImgOKNew = 1;
	}else{
		numberImgOKNew = Number(lastImgOKNew[TableRow].innerHTML)+1;
	}
		
	var lastImgOK = $('#Policy_Table_OL >tbody>tr:last>td:first').attr("id") || 0;
	var numberImgOK = 0;
				
	if(lastImgOK == 0){
		numberImgOK = 1;
	}else{
		numberImgOK = Number(lastImgOK.replace("imgOK_policy_OL",""))+1;
	}
			
	var row = "";
	var pdfOnclick = 'resetFilePolicy_OL('+numberImgOK+',"pdf");';
	var wordOnclick = 'resetFilePolicy_OL('+numberImgOK+',"word");';
	
	row = "<tr id='tbody_policy_OL"+numberImgOK+"'>"+					    								
		  "<td id='imgOK_policy_OL"+numberImgOK+"' class='text-center borderBlack'"+
		  "onclick='imgCheckbox_policy_OL("+numberImgOK+");' style='vertical-align: middle;'>" +
		  "<i class='glyphicon glyphicon-edit'></i></td>"+	
		  "<td class='text-center borderBlack' style='vertical-align: middle;'><span class='spanPolicy_OL' id='orderID_OL"+numberImgOK+"'>"+numberImgOKNew+"</span></td>"+									
		  "<td class='borderBlack verticalCenter'><input type='text' name='policy_name_OL[]' id='policy_name_OL"+numberImgOK+"' class='form-control margin-padding0 text-center;'></td>"+									
		  "<td class='borderBlack' align='center'>"+
		  "<div class='input-group col-xs-12'>"+											
		  "<div id='div_pdf_policy"+numberImgOK+"_OL' class='filename'>None</div>"+
		  "<a class='open-AddUploadDialog_pdf_OL' data-toggle='modal' data-id="+numberImgOK+" href='#modal_upload_pdf_OL'>"+
		  "<button class='btn btn-default btn-primary' type='button' id='btn_pdf_policy"+numberImgOK+"_OL'>...</button></a>"+		
		  "</div>"+
		  "</td>"+
		  "<td class='text-center borderBlack vertical-middle'>"+
		  "<a id='span_reset_pdf_OL"+numberImgOK+"' class='active_grey' onclick=\"resetFilePolicy_OL("+numberImgOK+",'pdf')\"><span class='glyphicon glyphicon-refresh'></span></a>"+
		  "</td>"+
		  "<td class='borderBlack' align='center'>"+
		  "<div class='input-group col-xs-12'>"+
		  "<div id='div_word_policy"+numberImgOK+"_OL' class='filename'>None</div>"+
		  "<a class='open-AddUploadDialog_word_OL' data-toggle='modal' data-id="+numberImgOK+" href='#modal_upload_word_OL'><button class='btn btn-default btn-primary' type='button' id='btn_word_policy"+numberImgOK+"_OL'>...</button></a>"+		  
		  "</div>"+
		  "</td>"+
		  "<td class='text-center borderBlack vertical-middle'>"+
		  "<a id='span_reset_word_OL"+numberImgOK+"' class='active_grey' onclick='"+wordOnclick+"'><span class='glyphicon glyphicon-refresh'></span></a>"+
		  "</td>"+									
		  /*"<td class='text-center borderBlack'>"+
		  "<a id='span_download"+numberImgOK+"' class='active_grey'><span class='glyphicon glyphicon-download-alt'></span></a>"+
	      "</td>"+*/
		  "<td class='text-center borderBlack vertical-middle'>"+
		  "<a id='span_history_OL"+numberImgOK+"' class='active_grey open-HistoryDialog_OL' data-toggle='modal' data-id="+numberImgOK+" ><span class='glyphicon glyphicon-time'></span></a>"+										
		  "</td>"+										
		  "</tr>";
	
	
	$("#Policy_Table_OL tbody").append(row);
	nameTab 	= "menu_OL_7";
	Statuesave = "N";
	/*$('.auto').autoNumeric('init');*/
}

function imgCheckbox_policy_OL(id)
{
	var imgOK = "imgOK_policy_OL"+id;
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


function confirmDeletePolicy_OL(){
	
	if($("#div_policyOL").innerHeight() > 792){
		$("#div_policyOL").addClass("scroll_policy");
	}else{
		$("#div_policyOL").removeClass("scroll_policy");
	}
	
	var imgOKcount = $("#Policy_Table_OL i.glyphicon-ok").length;
	if(imgOKcount <= 0)
	{	
		message = "กรุณาเลือกรายการที่ต้องการลบ";
		alertError(message);
	}else{
	
	message = "ต้องการลบรายการใช่หรือไม่";
	alertDeleteError(message);
	
	$("#btn_confirm_del").click(function(){
		var lastImgOK = $('#Policy_Table_OL >tbody>tr:last>td:first').attr("id") || 0;	
		var numberImgOK = 0;
		if(lastImgOK == 0){
			numberImgOK = 1;
		}else{
			numberImgOK = Number(lastImgOK.replace("imgOK_policy_OL",""))+1;
		}
		
		for(var i = 1;i<=numberImgOK;i++)
			{
				var checked = $('#tbody_policy_OL'+i+' >td:first>i').attr("class");
				if(checked == "glyphicon glyphicon-ok"){	
					deleteTableRow('#tbody_policy_OL'+i);				
				}
				
		}
			
		    /*create new order number in span*/
			var record_count = $("#Policy_Table_OL>tbody>tr").length;
			var table = document.getElementById("Policy_Table_OL");
			var spans = table.getElementsByClassName("spanPolicy_OL");
				for(var j = 0;j<record_count;j++){					
					 //alert(spans[j].innerHTML);				
						 spans[j].innerHTML = j+1;
							 						
				}			
				nameTab 	= "menu_OL_7";
				Statuesave = "N";
		});
			
	}
}

/*บันทึก policy*/
function bt_policy_OL_Confirm() {	
	var message = "";
	var error = 0;
	var record_count = $("#Policy_Table_OL>tbody>tr").length;			
	var policy_name = document.getElementsByName('policy_name_OL[]');
	var arr_value = [];
	for (i=0; i<record_count; i++)
		{
		 if (policy_name[i].value == "")
			{
			 message = "กรุณาระบุข้อมูลให้ครบ";
			 alertError(message);
			 error++;
			}	
		 arr_value.push(policy_name[i].value);
		}
	
	/*เช็คชื่อ policy name ซ้ำ*/
	var arr= arr_value.sort(); 
	var arrDuplicate = [];
	for (var j = 0; j < arr.length - 1; j++) {
		if (arr[j + 1] == arr[j]) {
			arrDuplicate.push(arr[j]);
		}
	}		
	if(arrDuplicate != ""){
		message = "ไม่สามารถอัพโหลดได้ เนื่องจากมีชื่อ Policy Name นี้อยู่แล้ว";
		alertError(message);
		error++;
	}

	if(error == 0){
		message = "บันทึกข้อมูลเรียบร้อย";
		dataSave_PolicyWording_OL();
		alertSuccess(message);
		Statuesave = "Y";
	}
	
}

/*การใช้สิทธิ์ตามกรมธรรม์*/
$("#chk_Policy_Loan_ol").click(function(){
	if($(this).prop("checked") == true){
		$("#txb_Policy_Loan_ol").prop("disabled", false);
	}else{
		$("#txb_Policy_Loan_ol").val("0.00");
		$("#txb_Policy_Loan_ol").prop("disabled", true);
	}
});

$("#ch_APL_Auto_ol").click(function(){
	if($(this).prop("checked") == true){
		$("#apl_Auto_ol").prop("disabled", false);
	}else{
		$("#apl_Auto_ol").val("0.00");
		$("#apl_Auto_ol").prop("disabled", true);
	}
});

$("#ch_expropriate_insurance_OL").click(function(){
	if($(this).prop("checked") == true){
		$("#sel_Surrender_ol").prop("disabled", false);
		$("#ch_CVClaim_ol").prop("disabled", false);
	}else{
		$("#sel_Surrender_ol option:contains('None')").prop("selected", "selected");
		$("#sel_Surrender_ol").prop("disabled", true);
		$("#ch_CVClaim_ol").prop("disabled", true);
		$("#ch_CVClaim_ol").prop("checked", false);
	}
});

$("#ch_ETI_ol").click(function(){
	if($(this).prop("checked") == true){
		$("#sel_ETI_ol").prop("disabled", false);
		$("#ch_AutoETI_ol").prop("disabled", false);
		$("#ch_PhaseETI_ol").prop("disabled", false);
	}else{
		$("#sel_ETI_ol option:contains('None')").prop("selected", "selected");
		$("#sel_ETI_ol").prop("disabled", true);
		
		$("#ch_AutoETI_ol").prop("disabled", true);
		$("#ch_AutoETI_ol").prop("checked", false);
		$("#sel_AutoETI_ol option:contains('None')").prop("selected", "selected");
		$("#sel_AutoETI_ol").prop("disabled", true);
		
		$("#ch_PhaseETI_ol").prop("disabled", true);
		$("#ch_PhaseETI_ol").prop("checked", false);
		$("#sel_PhaseETI_ol option:contains('None')").prop("selected", "selected");
		$("#sel_PhaseETI_ol").prop("disabled", true);
		$("#eti_year_ol").val("");
		$("#eti_year_ol").prop("disabled", true);
		$("#dmy_2_1_ol option:contains('ปี')").prop("selected", "selected");
		$("#dmy_2_1_ol").prop("disabled", true);
	}
});

$("#ch_AutoETI_ol").click(function(){
	if($(this).prop("checked") == true){
		$("#sel_AutoETI_ol").prop("disabled", false);
	}else{
		$("#sel_AutoETI_ol option:contains('None')").prop("selected", "selected");
		$("#sel_AutoETI_ol").prop("disabled", true);
	}
});

$("#ch_PhaseETI_ol").click(function(){
	if($(this).prop("checked") == true){
		$("#sel_PhaseETI_ol,#eti_year_ol,#dmy_2_1_ol").prop("disabled", false);
		
		/*ระยะประกันของสัญญาประกันชีวิต*/
		var age_value = "";
		if($("#rd_anniversary_ol").prop("checked") == true){
			age_value = $("#text_anniversary_ol").val();
		}else if($("#rd_Time_length_ol").prop("checked") == true){
			age_value = $("#tb_BasicInformation1_OL tbody>tr:last-child>td:nth-child(4)>input").val();
		}
		
		var ETI  = $("#sel_PhaseETI_ol option:selected").val();
		
		if($("#rd_anniversary_ol").prop("checked") == true){
			$("#sel_PhaseETI_ol option:contains('ถึงอายุ')").attr("selected", "selected");
		}else if($("#rd_Time_length_ol").prop("checked") == true){
			$("#sel_PhaseETI_ol option:contains('จำนวนปี')").attr("selected", "selected");
		}
		
		if($("#eti_year_ol").val() == ""){
			if($("#rd_anniversary_ol").prop("checked") == true){
				$("#eti_year_ol").val(age_value);
			}else if($("#rd_Time_length_ol").prop("checked") == true){
				$("#eti_year_ol").val(age_value);
			}
		}

		
	}else{
		$("#sel_PhaseETI_ol option:contains('None')").prop("selected", "selected");
		$("#eti_year_ol").val("");
		$("#dmy_2_1_ol option:contains('ปี')").prop("selected", "selected");
		$("#sel_PhaseETI_ol,#eti_year_ol,#dmy_2_1_ol").prop("disabled", true);
	}
});

$("#ch_RPU_ol").click(function(){
	if($(this).prop("checked") == true){
		$("#sel_RPU_ol").prop("disabled", false);
		$("#ch_RPUClose_ol").prop("disabled", false);
		$("input[name='rd_AutoRPU_OL[]']").prop("disabled", false);
		$("#ch_AutoRPU_ol").prop("disabled", false);
		$("#ch_PhaseRPU_ol").prop("disabled", false);
	}else{
		$("#sel_RPU_ol option:contains('None')").prop("selected", "selected");
		$("#sel_RPU_ol").prop("disabled", true);
		$("#ch_RPUClose_ol").prop("disabled", true);
		$("#ch_RPUClose_ol").prop("checked", false);
		$("input[name='rd_AutoRPU_OL[]']").prop("disabled", true);
		
		$("#rd_AutoRPU_OL1").prop("checked", true);
		$("#rd_AutoRPU_OL2").prop("checked", false);
		
		$("#ch_AutoRPU_ol").prop("disabled", true);
		$("#ch_AutoRPU_ol").prop("checked", false);
		$("#sel_AutoRPU_ol option:contains('None')").prop("selected", "selected");
		$("#sel_AutoRPU_ol").prop("disabled",true);
		$("#ch_AutoRPUClose_ol").prop("disabled",true);
		$("#ch_AutoRPUClose_ol").prop("checked",false);
		
		$("#ch_PhaseRPU_ol").prop("disabled", true);
		$("#ch_PhaseRPU_ol").prop("checked", false);
		$("#sel_PhaseRPU_ol option:contains('None')").prop("selected", "selected");
		$("#sel_PhaseRPU_ol").prop("disabled", true);
		$("#rpu_year_ol").val("");
		$("#rpu_year_ol").prop("disabled", true);
		$("#dmy_2_2_ol").prop("disabled", true);
		$("#dmy_2_2_ol option:contains('ปี')").prop("selected", "selected");
	}
});

$("#ch_AutoRPU_ol").click(function(){
	if($(this).prop("checked") == true){
		$("#sel_AutoRPU_ol").prop("disabled", false);
		$("#ch_AutoRPUClose_ol").prop("disabled", false);
		//$("input[name='rd_AutoRPU_OL[]']").prop("disabled", false);
	}else{
		$("#sel_AutoRPU_ol option:contains('None')").prop("selected", "selected");
		$("#sel_AutoRPU_ol").prop("disabled", true);
		$("#ch_AutoRPUClose_ol").prop("disabled", true);
		$("#ch_AutoRPUClose_ol").prop("checked", false);
		//$("input[name='rd_AutoRPU_OL[]']").prop("disabled", true);
	}
});

$("#ch_PhaseRPU_ol").click(function(){
	if($(this).prop("checked") == true){
		$("#sel_PhaseRPU_ol,#rpu_year_ol,#dmy_2_2_ol").prop("disabled", false);
		
		/*ระยะประกันของสัญญาประกันชีวิต*/
		var age_value = "";
		if($("#rd_anniversary_ol").prop("checked") == true){
			age_value = $("#text_anniversary_ol").val();
		}else if($("#rd_Time_length_ol").prop("checked") == true){
			age_value = $("#tb_BasicInformation1_OL tbody>tr:last-child>td:nth-child(4)>input").val();
		}
		
		var RPU  = $("#sel_PhaseRPU_ol option:selected").val();
				
		if($("#rd_anniversary_ol").prop("checked") == true){
			$("#sel_PhaseRPU_ol option:contains('ถึงอายุ')").attr("selected", "selected");
		}else if($("#rd_Time_length_ol").prop("checked") == true){
			$("#sel_PhaseRPU_ol option:contains('จำนวนปี')").attr("selected", "selected");
		}
		
		if($("#rpu_year_ol").val() == ""){
			if($("#rd_anniversary_ol").prop("checked") == true){
				$("#rpu_year_ol").val(age_value);
			}else if($("#rd_Time_length_ol").prop("checked") == true){
				$("#rpu_year_ol").val(age_value);
			}
		}
		
	}else{
		$("#sel_PhaseRPU_ol option:contains('None')").prop("selected", "selected");
		$("#rpu_year_ol").val("");
		$("#dmy_2_2_ol option:contains('ปี')").prop("selected", "selected");
		$("#sel_PhaseRPU_ol,#rpu_year_ol,#dmy_2_2_ol").prop("disabled", true);
	}
});

/*การคำนวณเบี้ยประกัน*/
$("#ch_insurance_premium_ageBand_ol").click(function(){
	if($(this).prop('checked') == true){
		$("#div_Age_Band_OL *").attr("disabled", false);
		
		if($("#ch_standard_premium_ol").prop('checked') == false){
			$("#ch_standard_premium_ol").prop('checked',true);
			
			$("#rd_cal_insurance_ol").prop("disabled",false);
			$("#rd_cal_insurance_ol").prop( "checked", true );
			$('#sl_menu3_insurance_premium_ol').prop("disabled",false);
			$('#ch_importInsurance_ol').prop("disabled",false);
			$('#discountInsurancePremiumsSta_ol').prop("disabled",false);
			$('#discountInsurancePremiumsTo_ol').prop("disabled",false); 
			$("#rd_cal_capital_ol").prop("disabled",false);
			$("#ch_calInsurance_ol").prop("disabled", false);
			$("#spanBoxCal3_OL").attr("disabled", false);
			$("#select_fileCal_3_OL").prop("disabled", false);
			$("#expenses_pension_ol").prop("disabled", false);
			
			/*ปิดปุ่ม add row*/
			var num_dd = $("#tb_PM_Rate1_OL>tbody>tr[data-level='1']:first>td:nth-child(2) select>option[value!='NONE']").length;
			var numrow_tbl = $("#tb_PM_Rate1_OL>tbody>tr[data-level='1']").length;
			if(numrow_tbl == num_dd){
				$("#addrowPM_Rate_OL").attr("disabled", true);
			}
			
		}
		
	}else{
		$("#tb_Age_Band_OL tbody>tr").each(function(){
			if($(this).find('input[type="checkbox"]').prop("checked")){
				var band_select = $(this).attr('id');
					band_select = Number(band_select.replace("tr_AgeBand_OL",""));
					unselect_AgeBand_OL(band_select);
			}
		});
		
		$("#div_Age_Band_OL *").attr("disabled", "disabled").off("click");
		$("#div_Age_Band_OL input:checkbox").prop("checked", false);
	}
	
});
function select_AgeBand_OL(band){	
	var row_band = $("#tr_AgeBand_OL"+band+"").find("td:nth-child(2)").text();
	var num_row = $("#tb_PM_Rate1_OL>tbody>tr>td:nth-child(2)>select").length;
	var num_row2 = $("#tb_RateValue1_OL>tbody>tr[data-level='1']").length;
	
	/*format*/
	var select_text = jQuery.trim($("#sl_menu3_insurance_premium_ol option:selected").text());
	var select_text2 = $("#dbBox1_OL option:selected").text();
	var select_text_value = $("#sl_menu3_insurance_premium_ol option:selected").val();
	var select_text2_value = $("#dbBox1_OL option:selected").val();
	var baseplanCode_OL = $("#pass_Insurance_coverage_ol").val();
	var file_layout = "";
	var band_layout = "";
	var file_layout2 = "";
	var band_layout2 = "";
	var j=0;
	var thisID = 0;
	
	if(select_text == 'ตามแผนความคุ้มครอง'){
		type = 1;
	}else if(select_text == 'ต่อทุน 10,000 บาท'){
		type = 2;
	}else if(select_text == 'ต่อทุน 100,000 บาท'){
		type = 3;
	}else if(select_text == 'กลุ่มรายเดือน Industrial'){
		type = 41;
	}else if(select_text == 'กลุ่มรายงวด Tax Minus'){
		type = 41;
	}
	
	if(num_row != 0){
	for(i=0;i<num_row;i++){
		j++;
		thisID = $("#tb_PM_Rate1_OL>tbody tr[data-level='1']").eq(i).attr("data-id");
		var listgroup_count = $("#tb_PM_Rate1_OL").find("tbody>tr[data-group='"+thisID+"']").length;  
		var lastID = "";
		if(listgroup_count > 0){
			lastID = $("#tb_PM_Rate1_OL").find("tbody>tr[data-group='"+thisID+"']:last").attr("data-id");
			lastID = Number(lastID.replace(thisID+"_",""))+1;
		}else{
			lastID = 1;
		}
		//var cat_id = Number(thisID) + lastID;
		var thisID_Sub = thisID+"_"+lastID;
		var selectPM_text = $("#tb_PM_Rate1_OL>tbody tr[data-level='1']").eq(i).find("td:nth-child(2)>select option:selected").text();
		var selectPM_value = $("#tb_PM_Rate1_OL>tbody tr[data-level='1']").eq(i).find("td:nth-child(2)>select option:selected").val();
		
		var new_row = "<tr id='tbody_PM_Rate_OL"+thisID_Sub+"' data-id='"+thisID_Sub+"' data-group='"+thisID+"' data-level='2'>"+
		  "<td class='borderBlack' style='background-color: gray;'></td>"+
		  "<td class='borderBlack vertical-middle'><label>B"+band+"</label></td>"+
		  "<td class='borderBlack'>"+
		  	"<div class='input-group'>"+
		  	
		  	"<input type='hidden' id='rm_rateCat_OL"+thisID_Sub+"' value=''>"+
			"<input type='hidden' id='rm_rateLayout_OL"+thisID_Sub+"' value=''>"+
			"<input type='hidden' id='rm_fileID_OL"+thisID_Sub+"' value=''>"+
			"<input type='text' class='form-control' id='fileuploads_PMRateText"+thisID_Sub+"_OL' readonly>"+ 
				"<label class='input-group-btn'>"+ 
				  "<span id='spanRate"+thisID_Sub+"_OL' class='btn btn-primary'>"+
				  	"<font id='validate_rate"+thisID_Sub+"_OL' style='color: red;'>*</font>..."+
				  		"<input id='fileuploads_PMRate"+thisID_Sub+"_OL' type='file' accept='text/plain' style='display: none;'>"+ 
				  "</span>"+
				 "</label>"+
			"</div>"+
		  "</td>"+		  
		  "<td class='borderBlack'>"+
		 	"<a id='span_PM_Rateopen_OL_"+thisID_Sub+"' class='active_grey'>"+
				"<span class='glyphicon glyphicon-eye-open activecolorgray'></span>"+
			"</a>"+							 	
		 "</td>"+
		 "<td class='borderBlack'>"+
			 "<a id='span_PM_Ratedownload_OL_"+thisID_Sub+"' class='active_grey'>"+
				"<span class='glyphicon glyphicon-download-alt activecolorgray'></span>"+
			 "</a>"+
		"</td>"+		 
		"</tr>";

		$("#imgOK_ageBand_OL"+band+"").attr("onclick","unselect_AgeBand_OL("+band+")");			
	
		/*ตารางมูลค่ากรมธรรม์*/
		var new_row2 = "<tr id='tbody_Rate_Value_OL"+thisID_Sub+"' data-id='"+thisID_Sub+"' data-group='"+thisID+"' data-level='2'>"+
		  "<td class='borderBlack vertical-middle'><label>B"+band+"</label></td>"+
		  "<td class='borderBlack'>"+
		  	"<div class='input-group'>"+
			"<input type='text' class='form-control' id='fileuploads_RateValueText"+thisID_Sub+"_OL' readonly>"+ 
				"<label class='input-group-btn'>"+ 
				  "<span id='spanRateValue"+thisID_Sub+"_OL' class='btn btn-primary'>..."+
				  	/*"<font id='validate_RateValue"+thisID_Sub+"_OL' style='color: red;'>*</font>..."+*/
				  		"<input id='fileuploads_RateValue"+thisID_Sub+"_OL' type='file' accept='text/plain' style='display: none;'>"+ 
				  "</span>"+
				 "</label>"+
			"</div>"+			
			"<input type='hidden' id='cv_rateCat_OL"+thisID_Sub+"' value=''>"+
			"<input type='hidden' id='cv_rateLayout_OL"+thisID_Sub+"' value=''>"+
			"<input type='hidden' id='cv_fileID_OL"+thisID_Sub+"' value=''>"+	
		  "</td>"+		  
		  "<td class='borderBlack'>"+
		 	"<a id='span_RateValueopen_OL_"+thisID_Sub+"' class='active_grey'>"+
				"<span class='glyphicon glyphicon-eye-open activecolorgray'></span>"+
			"</a>"+							 	
		 "</td>"+
		 "<td class='borderBlack'>"+
			 "<a id='span_RateValuedownload_OL_"+thisID_Sub+"' class='active_grey'>"+
				"<span class='glyphicon glyphicon-download-alt activecolorgray'></span>"+
			 "</a>"+
		"</td>"+		 
		"</tr>";
	
		if(num_row != 0){
			if(listgroup_count > 0){
				$(new_row).insertAfter("#tb_PM_Rate1_OL >tbody tr[data-group='"+thisID+"']:last");
				$(new_row2).insertAfter("#tb_RateValue1_OL >tbody tr[data-group='"+thisID+"']:last");
			}else{
				$(new_row).insertAfter("#tb_PM_Rate1_OL >tbody tr[data-id="+thisID+"]");
				$(new_row2).insertAfter("#tb_RateValue1_OL >tbody tr[data-id="+thisID+"]");
			}

			file_layout = select_text_value+selectPM_text;
			band_layout = file_layout+"_"+row_band+"_"+baseplanCode_OL+".txt";
			
			file_layout2 = select_text2_value+selectPM_text;
			band_layout2 = file_layout2+"_"+row_band+"_"+baseplanCode_OL+".txt";
			
			var file_split = select_text2_value.split(",");
			
			if(file_split > 1){
				var band_layout2_1 = file_split[0]+selectPM_text+"_"+row_band+"_"+baseplanCode_OL;
				var band_layout2_2 = file_split[1]+selectPM_text+"_"+row_band+"_"+baseplanCode_OL;
			}else{
				var band_layout2_1 = file_split[0]+selectPM_text+"_"+row_band+"_"+baseplanCode_OL;
				var band_layout2_2 = "";
			}
			
			if(file_split.length > 1){
				var band_layout_all = band_layout2_1+".txt หรือ "+band_layout2_2+".txt";
				var band_layout_onchange = band_layout2_1+"','"+band_layout2_2;
			}else{
				var band_layout_all = band_layout2_1+".txt";
				var band_layout_onchange = band_layout2_1;
			}
				
			if(selectPM_text != "None" && select_text != "None" ){		
				
				var rate_cat = "";
				var rate_cat_sub = "";
				if($("#rd_cal_insurance_ol").prop("checked") == true){
					rate_cat = $("#rateCat_tbStardard_OL").val();
					rate_cat_sub = $("#rateCat_tbStardard_age_OL").val();
				}else{
					rate_cat = $("#rateCat_capital_OL").val();
					rate_cat_sub = $("#rateSubCat_capital_OL").val();
				}
				
				var layout_id  = $("#sl_menu3_insurance_premium_ol").find("option:selected").attr("data-layout");
				
				$("#fileuploads_PMRateText"+thisID_Sub+"_OL").attr("placeholder", band_layout);
				//var uploadfile = "selectFileRate_OL("+type+",'b','fileuploads_PMRate"+thisID_Sub+"_OL','"+file_layout+"_"+row_band+"_"+baseplanCode_OL+"','','sl_menu3_insurance_premium_ol','span_PM_Rateopen_OL_"+thisID_Sub+"')";
				var uploadfile = "selectFileTXTMain_OL("+rate_cat+", 3,'fileuploads_PMRate"+thisID_Sub+"_OL',"+layout_id+",'','','"+file_layout+"_"+row_band+"_"+baseplanCode_OL+"','','','span_PM_Rateopen_OL_"+thisID_Sub+"');";
				
				$("#fileuploads_PMRate"+thisID_Sub+"_OL").attr('onchange', uploadfile);	
				$("#tbody_PM_Rate_OL"+thisID_Sub+">td:nth-child(3) span").prop("disabled", false);
			  	$("#tbody_PM_Rate_OL"+thisID_Sub+">td:nth-child(3) *").prop("disabled", false);
			}else{
				$("#tbody_PM_Rate_OL"+thisID_Sub+">td:nth-child(3) span").attr("disabled", true);
			  	$("#tbody_PM_Rate_OL"+thisID_Sub+">td:nth-child(3) *").prop("disabled", true);
			}
			
			/*ตารางมูลค่า*/
			if(selectPM_text != "None" && select_text2 != "None" ){			
				$("#fileuploads_RateValueText"+thisID_Sub+"_OL").attr("placeholder", band_layout_all);
				//var uploadfile = "selectFileRate_OL(5,'b','fileuploads_RateValue"+thisID_Sub+"_OL','"+band_layout_onchange+"','dbBox1_OL','span_RateValueopen_OL_"+thisID_Sub+"')";
				
				//get new layout
				var layout_select = $("#dbBox1_OL option:selected").attr("data-layout");
				var layout_split = layout_select.split(",");
				if(layout_split.length > 1){
					layout_id1 = layout_split[0];
					layout_id2 = layout_split[1];
				}else{
					layout_id1 = layout_select;
					layout_id2 = "''";
				}
				
				var uploadfile = "selectFileTXTMain_OL("+$("#cv_rate_AgeBand_OL").val()+", 9,'fileuploads_RateValue"+thisID_Sub+"_OL',"+layout_id1+","+layout_id2+",'','"+band_layout2_1+"','"+band_layout2_2+"','','span_RateValueopen_OL_"+thisID_Sub+"')";
				
				$("#fileuploads_RateValue"+thisID_Sub+"_OL").attr('onchange', uploadfile);	
				$("#tbody_Rate_Value_OL"+thisID_Sub+">td:nth-child(2) span").prop("disabled", false);
			  	$("#tbody_Rate_Value_OL"+thisID_Sub+">td:nth-child(2) *").prop("disabled", false);
			}else{
				$("#tbody_Rate_Value_OL"+thisID_Sub+">td:nth-child(2) span").attr("disabled", true);
			  	$("#tbody_Rate_Value_OL"+thisID_Sub+">td:nth-child(2) *").prop("disabled", true);
			}
			
		 }				
	   }
	}
	
	/*Band*/
	$("#tb_Age_Band_OL input[type='checkbox']:checked").each(function(){
		var band = $(this).val();
			band = band.replace("B","");
		$(this).attr("onclick","unselect_AgeBand_OL("+band+")");	
	});
}

function unselect_AgeBand_OL(band){	
	var band_text_unselect = "B"+band;
	$("#tb_PM_Rate1_OL>tbody tr[data-level='2']").each(function(){
		var band_text = $(this).find("td:nth-child(2)").text();
		if(band_text == band_text_unselect){
			$(this).remove();
		}		
	});
	
	$("#tb_RateValue1_OL>tbody tr[data-level='2']").each(function(){
		var band_text2 = $(this).find("td:nth-child(1)").text();
		if(band_text2 == band_text_unselect){
			$(this).remove();
		}		
	});
	
	$("#imgOK_ageBand_OL"+band+"").attr("onclick","select_AgeBand_OL("+band+")");
}

//เบี้ยเพิ่มพิเศษ
$("#ch_insurance_premium_Extra_ol").click(function(){
	var ch_insurance_premium_Extra_ol = document.getElementById("ch_insurance_premium_Extra_ol");
	if (ch_insurance_premium_Extra_ol.checked == true){
		document.getElementById("sl_insurance_premium_Extra_ol").disabled = false;
		document.getElementById("min_EM_ol").disabled = false;
		document.getElementById("max_EM_ol").disabled = false;
	}else{
		/*ตาราง*/
		var count_file = 0;
		
		$("#tb_Extra_Rate_OL>tbody>tr input:text").each(function(){
			var file_value = $(this).val();
			if(file_value != ""){
				count_file++;
			}
		});
		
		var min_EM = $("#min_EM_ol").val();
		var max_EM = $("#max_EM_ol").val();
		var EM_file = $("#input_fileCal_1_OL").val();

		if(EM_file != ""){
			count_file++;
		}
		
		if(count_file > 0){
			$("#textTop7_OL").text("Extra_Rate");
			$("#textTop8_OL").text("ตารางเบี้ยประกัน");
			$('#modal_CheckNone_Menu4_OL').modal('show');	
			$("#cancel_CheckNone_Menu4_OL").attr('onclick', 'cancel_check_None_OL("Extra_Rate")');
			
			$("#modal_CheckNone_Menu4_OL .modal-header button.close").click(function(){
				$("#ch_insurance_premium_Extra_ol").prop("checked", true);
			});
			
		}else{
			document.getElementById("sl_insurance_premium_Extra_ol").disabled = true;
			$('#sl_insurance_premium_Extra_ol').val("NONE");
			document.getElementById("min_EM_ol").disabled = true;
			document.getElementById("max_EM_ol").disabled = true;
			$("#min_EM_ol").val("0.00");
			$("#max_EM_ol").val("0.00");
			$("#input_fileCal_1_OL").val("");
			$("#input_fileCal_1_OL").attr("placeholder","");
			$("#spanBoxCal1_OL").attr("disabled", true);
			$("#select_fileCal_1_OL").attr("disabled", true);								
			$("#em_rateLayout1_OL,#em_fileID1_OL").val("");
			$("#cv_InputExtra_Rate_ol").attr("disabled", true);
			$("#cv_InputExtra_Rate_ol").removeAttr("onchange");
			
			$("#tb_Extra_Rate_OL>tbody>tr input:text").attr("placeholder","");
			$("#tb_Extra_Rate_OL>tbody>tr td:nth-child(2) span").attr("disabled",true);
			$("#tb_Extra_Rate_OL>tbody>tr input:file").removeAttr("onchange");
			$("#tb_Extra_Rate_OL>tbody>tr input:file").attr("disabled",true);
		}			
		
		 $("#menu3_Confirm_ol2").attr('onclick', 'bt_Menu3_Confirm_ol2("Extra_Rate")');

	}
});

/*ทุนคุ้มครองที่ลดลง*/	
$("#ch_Reduced_capital_ol").click(function(){
	var ch_Reduced_capital_cl = document.getElementById("ch_Reduced_capital_ol");
	if (ch_Reduced_capital_cl.checked == true){
		document.getElementById("sl_Reduced_capital_Cal2_OL").disabled = false;
	}else{
		var count_file = 0;
		if($("#input_fileCal_2_OL").val() != ""){
			count_file++;
		}
		
		if (count_file > 0){
				$("#textTop7_OL").text("SA_Rate");
				$("#textTop8_OL").text("ตารางทุน");
				$('#modal_CheckNone_Menu4_OL').modal('show');	
				$("#cancel_CheckNone_Menu4_OL").attr('onclick', 'cancel_check_None_OL("SA_CL_Rate")');
				
				$("#modal_CheckNone_Menu4_OL .modal-header button.close").click(function(){
					$("#ch_Reduced_capital_ol").prop("checked", true);
				});
				
		}else {
			$('#sl_Reduced_capital_Cal2_OL option:contains("None")').attr("selected","selected");
			$('#sl_Reduced_capital_Cal2_OL').attr("disabled",true);
			$("#spanBoxCal2_OL").attr("disabled", true);
			$("#cv_SAExtra_Rate_ol").attr("disabled", true);
		}
		 	
			$("#menu3_Confirm_ol2").attr('onclick', 'bt_Menu3_Confirm_ol2("SA_CL_Rate")');				
	}
});

///////////////////////////////////////////////////////
function bt_Menu3_Confirm_ol2(data) {
	if (data == "PM_Rate") {
		$('#sl_menu3_insurance_premium_ol option:contains("None")').attr("selected","selected");		
		//$('#tb_PM_Rate1'+' tbody').empty();		//remove row

		$("#tb_PM_Rate1_OL tbody>tr").remove();
		addRowPM_Rate_OL();
		$("#tb_PM_Rate1_OL tbody>tr td:nth-child(2) select").prop("disabled", true);
		
		// ตารางเบี้ยเพิ่มพิเศษ
		$("#tb_Extra_Rate_OL tbody>tr").remove();
		$("#sl_insurance_premium_Extra_ol option:contains('None')").attr("selected","selected");
		$("#sl_insurance_premium_Extra_ol").prop("disabled", true);
		
		var min_EM = $("#min_EM_ol").val();
		var max_EM = $("#max_EM_ol").val();
		if(min_EM == "0.00" && max_EM == "0.00"){
			$("#ch_insurance_premium_Extra_ol").prop("checked", false);
			$("#min_EM_ol, #max_EM_ol").prop("disabled", true);
		}
		
		// ตารางมูลค่า
		$("#tb_RateValue1_OL tbody>tr").remove();
		$("#dbBox1_OL option:contains('None')").attr("selected","selected");
		$("#dbBox1_OL").prop("disabled", true);
		$("#cbBox1_OL").prop("checked", false);
		
		/*row ในหน้าตารางมูลค่า*/
		var lastID = 1;
		var listgroup_count = $("#tb_PM_Rate1_OL").find("tbody>tr[data-group='"+lastID+"']").length;
		
		var lastSubID = "";
		if(listgroup_count > 0){
			lastSubID = $("#tb_PM_Rate1_OL").find("tbody>tr[data-group='"+lastID+"']:last").attr("data-id");
			lastSubID = Number(lastSubID.replace(lastID+"_",""))+1;
		}else{
			lastSubID = 0;
		}
		var new_row2 = "<tr id='tbody_Rate_Value_OL"+lastID+"' data-id='"+lastID+"' data-level='1'>"+
		  "<td class='borderBlack vertical-middle'><label>None</label></td>"+
		  "<td class='borderBlack'>"+
		  	"<div class='input-group'>"+
			"<input type='text' class='form-control' id='fileuploads_RateValueText"+lastID+"_OL' readonly=''>"+ 
				"<label class='input-group-btn'>"+ 
				  "<span id='spanRateValue"+lastID+"_OL' class='btn btn-primary' disabled>..."+
				  	/*"<font id='validate_RateValue"+lastID+"_CL' style='color: red;'>*</font>..."+*/
				  		"<input id='fileuploads_RateValue"+lastID+"_OL' type='file' accept='text/plain' style='display: none;' disabled>"+ 
				  "</span>"+
				 "</label>"+
			"</div>"+
			"<input type='hidden' id='cv_rateCat_OL"+lastID+"' value=''>"+
			"<input type='hidden' id='cv_rateLayout_OL"+lastID+"' value=''>"+
			"<input type='hidden' id='cv_fileID_OL"+lastID+"' value=''>"+	
		  "</td>"+
		  "<td class='borderBlack'>"+
		 	"<a id='span_RateValueopen_OL_"+lastID+"' class='active_grey' disabled>"+
				"<span class='glyphicon glyphicon-eye-open activecolorgray' disabled></span>"+
			"</a>"+							 	
		 "</td>"+
		 "<td class='borderBlack'>"+
			 "<a id='span_RateValuedownload_OL_"+lastID+"' class='active_grey' disabled>"+
				"<span class='glyphicon glyphicon-download-alt activecolorgray' disabled></span>"+
			 "</a>"+
		 "</td>"+				
		"</tr>";
		
		/*row sub*/
		$("#tb_Age_Band_OL>tbody>tr").each(function(){
			lastSubID++;
			var thisID_Sub = lastID+"_"+lastSubID;
			var chk_val = $(this).find("td:nth-child(1)>input[type='checkbox']").prop("checked");
			if(chk_val == true){
				var band_val = $(this).find("td:nth-child(2)").text();

				new_row2 += "<tr id='tbody_Rate_Value_OL"+thisID_Sub+"' data-id='"+thisID_Sub+"' data-group='"+lastID+"' data-level='2' disabled='disabled'>"+
				  "<td class='borderBlack vertical-middle'><label>"+band_val+"</label></td>"+
				  "<td class='borderBlack'>"+
				  	"<div class='input-group'>"+
					"<input type='text' class='form-control' id='fileuploads_RateValueText"+thisID_Sub+"_OL' readonly=''>"+ 
						"<label class='input-group-btn'>"+ 
						  "<span id='spanRateValue"+thisID_Sub+"_OL' class='btn btn-primary' disabled>..."+
						  	/*"<font id='validate_RateValue"+thisID_Sub+"_CL' style='color: red;'>*</font>..."+*/
						  		"<input id='fileuploads_RateValue"+thisID_Sub+"_OL' type='file' accept='text/plain' style='display: none;' disabled>"+ 
						  "</span>"+
						 "</label>"+
					"</div>"+
					"<input type='hidden' id='cv_rateCat_OL"+thisID_Sub+"' value=''>"+
					"<input type='hidden' id='cv_rateLayout_OL"+thisID_Sub+"' value=''>"+
					"<input type='hidden' id='cv_fileID_OL"+thisID_Sub+"' value=''>"+
				  "</td>"+			 
				  "<td class='borderBlack'>"+
				 	"<a id='span_RateValueopen_OL_"+thisID_Sub+"' class='active_grey' disabled>"+
						"<span class='glyphicon glyphicon-eye-open activecolorgray' disabled></span>"+
					"</a>"+							 	
				 "</td>"+
				 "<td class='borderBlack'>"+
					 "<a id='span_RateValuedownload_OL_"+thisID_Sub+"' class='active_grey' disabled>"+
						"<span class='glyphicon glyphicon-download-alt activecolorgray' disabled></span>"+
					 "</a>"+
				"</td>"+
				"</tr>";
			}		
		});
		
		$("#tb_RateValue1_OL>tbody").append(new_row2);

		 var rd_cal_insurance = $("#rd_cal_insurance_ol").prop("checked");
		 var rd_cal_capital = $("#rd_cal_capital_ol").prop("checked");
		 
			$("#divtb_PM_Rate1_OL *").prop("disabled",true);//default disabled Table PM_Rate
			$('#addrowPM_Rate_OL').prop("disabled",true);
			$('#delrowPM_Rate_OL').prop("disabled",true);
		
			$('#rd_cal_insurance_ol').prop("disabled",true);
			$("#rd_cal_insurance_ol" ).prop( "checked", false );
			$("#sl_menu3_insurance_premium_ol").prop("disabled",true);

			$("#rd_cal_capital_ol").prop("disabled",true);
			$("#rd_cal_capital_ol").prop("checked",false);
			$('#ch_importInsurance_ol').prop("disabled",true);
			$("#ch_importInsurance_ol").prop("checked", false);
			$('#discountInsurancePremiumsSta_ol').prop("disabled",true);
			$('#discountInsurancePremiumsTo_ol').prop("disabled",true); 
			$('#discountInsurancePremiumsSta_ol').val("0.00");
			$('#discountInsurancePremiumsTo_ol').val("0.00");
			$("#expenses_pension_ol").prop("disabled",true);
			$("#expenses_pension_ol").val("");
			$("#input_fileCal_3_OL").val("");
			$("#spanBoxCal3_OL").attr("disabled", true);
			$("#select_fileCal_3_OL").prop("disabled", true);
			$("#dsc_Input_ol").prop("disabled", true);
			$('#modal_CheckNone_Menu4_OL').modal('hide');	
		 
		 
	}else if (data == "Extra_Rate"){
		$('#sl_insurance_premium_Extra_ol option:contains("None")').attr("selected","selected");
		
		/*เบี้ยเพิ่มพิเศษ*/
		$("#tb_Extra_Rate_OL>tbody>tr").find("td:nth-child(2) input:text").val("");
		$("#tb_Extra_Rate_OL>tbody>tr").find("td:nth-child(2) input:text").attr("placeholder","");
		$("#tb_Extra_Rate_OL>tbody>tr").find("td:nth-child(2) span").attr("disabled", true);
		$("#tb_Extra_Rate_OL>tbody>tr").find("td:nth-child(2) span>font").css("display", "none");
		$("#tb_Extra_Rate_OL>tbody>tr").find("td:nth-child(2) input:file").prop("disabled", true);
		$("#tb_Extra_Rate_OL>tbody>tr").find("td:nth-child(3) a").removeAttr("onclick");
		$("#tb_Extra_Rate_OL>tbody>tr").find("td:nth-child(3) span").removeClass("activecolorblue").addClass("activecolorgray");
		$("#tb_Extra_Rate_OL>tbody>tr").find("td:nth-child(4) span").removeClass("activecolorblue").addClass("activecolorgray");
		
		document.getElementById("sl_insurance_premium_Extra_ol").disabled = true;
		document.getElementById("min_EM_ol").disabled = true;
		document.getElementById("max_EM_ol").disabled = true;
		$("#div_TB_Extra_Rate_OL *").prop("disabled",true);//default disabled Table Extra_Rate
		$('#addrowExtra_Rate_OL').prop("disabled",true);
		$('#delrowExtra_Rate_OL').prop("disabled",true);
		$('#min_EM_ol').val("0.00");
		$('#max_EM_ol').val("0.00");
		$("#spanBoxCal1_OL").attr("disabled", true);
		$("#input_fileCal_1_OL").val("");
		$("#input_fileCal_1_OL").attr("placeholder","");
		$("#spanBoxCal1_OL").attr("disabled", true);
		//$("#select_fileCal_1_CL").removeAttr("onchange");
		$("#select_fileCal_1_OL").attr("disabled", true);
		$("#cv_InputExtra_Rate_ol").attr("disabled", true);
		$("#em_rateLayout1_OL,#em_fileID1_OL").val("");
		
		$('#modal_CheckNone_Menu4_OL').modal('hide');	
	}else if (data == "SA_CL_Rate"){
		$('#sl_Reduced_capital_Cal2_OL option:contains("None")').attr("selected","selected");	
  
		document.getElementById("sl_Reduced_capital_Cal2_OL").disabled = true;
		$('#cv_SAExtra_Rate_ol').attr("onclick");
	 	$('#spanBoxCal2_OL').attr("disabled",true);
	 	$('#cv_SAExtra_Rate_ol').prop("disabled",true);
	 	$("#select_fileCal_2_OL").attr("disabled", true);
		$("#input_fileCal_2_OL").attr("placeholder", "");
		$("#input_fileCal_2_OL").val("");
		$("#decrease_rateLayout2_OL,#decrease_fileID2_OL").val("");
		
		$('#modal_CheckNone_Menu4_OL').modal('hide');	
	}
}

function cancel_check_None_OL(data) {
	if (data == "PM_Rate"){
		$("#ch_standard_premium_ol").prop("checked", true);
		$('#modal_CheckNone_Menu4_OL').modal('hide');	
	}else if (data == "Extra_Rate") {
		$("#ch_insurance_premium_Extra_ol").prop("checked", true);
		$('#modal_CheckNone_Menu4_OL').modal('hide');			
	}else if (data == "SA_CL_Rate") {
		$("#ch_Reduced_capital_ol").prop("checked", true);
		$('#modal_CheckNone_Menu4_OL').modal('hide');	
	}
}


function selectTypeCal_OL(type,box,rate_cat,rate_layout){
	var filename = type.split('.');
	var filenamelength 	= filename[0].length;
	
	var placeholder = "";
	var cv_button = "";
	var type_upload = "";

	if(filename[0] != ""){
		placeholder = filename[0]+".txt";
	}else{
		placeholder = "";
	}
	
	if(box == 1){
		cv_button = "cv_InputExtra_Rate_ol";
		type_upload = 5;
	}else if(box == 2){
		cv_button = "cv_SAExtra_Rate_ol";
		type_upload = 6;
	}else if(box == 3){
		cv_button = "dsc_Input_ol";
		type_upload = 7;
	}
	
	/*var input_html = "<div class='input-group'>"+
					 "<input type='text' class='form-control' id='input_fileCal_"+box+"_OL' readonly placeholder='"+placeholder+"'>"+
					 "<label class='input-group-btn'>"+
					 "<span id='spanBoxCal"+box+"_OL' class='btn btn-primary'>"+
					 "<font id='validate_filerate"+box+"_OL' style='color: red; display: inline-block;'>*</font>"+
					 "เลือกไฟล์<input id='select_fileCal_"+box+"_OL' type='file' accept='.txt' style='display: none;'"+
					 "onchange=\"selectFileCal_OL("+box+",'"+filename[0]+"','select_fileCal_"+box+"_OL');"+"\" disabled></span>"+
					 "</label></div>";*/
	
	var input_html = "<div class='input-group'>"+
	 "<input type='text' class='form-control' id='input_fileCal_"+box+"_OL' readonly placeholder='"+placeholder+"'>"+
	 "<label class='input-group-btn'>"+
	 "<span id='spanBoxCal"+box+"_OL' class='btn btn-primary'>"+
	 "<font id='validate_filerate"+box+"_OL' style='color: red; display: inline-block;'>*</font>"+
	 "เลือกไฟล์<input id='select_fileCal_"+box+"_OL' type='file' accept='.txt' style='display: none;'"+
	 "onchange=\"selectFileTXTMain_OL("+rate_cat+", "+type_upload+",'select_fileCal_"+box+"_OL',"+rate_layout+",'','','"+filename[0]+"','','','"+cv_button+"');"+"\" disabled></span>"+
	 "</label></div>";
	
	$("#div_fileCal"+box+"_OL").html(input_html);
}

function selectFileCal_OL(select_file,file_format,id_fileupload){
	var tbl_auto = "";
	var modal_auto = "";
	var tbl_view = "";
	var modal_view = "";
	var tbl_col = 0;
	var attr_onclick = "";
	var cov_code = $("#pass_Insurance_coverage_ol").val();
	
	/*file*/
	var select_file_name = "";
	var type = "";
	var file_id = 0;
	var file_type_id = 3;
	var file_path = "";
	var file_pattern = "";
	var user_code = "0000000";	    

	if(select_file == 1){
		tbl_col = 3;
		tbl_auto = "tb_inputExtra_RateAuto_OL";
		tbl_view = "tb_inputExtra_RateView_OL";
		modal_auto = "modal_inputExtra_RateAuto_OL";
		modal_view = "modal_inputExtra_RateView_OL";
		cv_button = "cv_InputExtra_Rate_ol";
		btn_save = "save_inputExtra_Rate_OL";
		attr_onclick = "open_modalCV_OL(6,this.id)";
		validate_file = "validate_filerate1_OL";
		modal_download = "download_tb_inputExtra_RateView_OL";
		select_file_name = 1;
		type = 21;
		fileID = "em_fileID1_OL";
		
		rate_cat_id = $("#rateCat_inputEM_OL").val();
		sub_cat_id = $("#rateSubCat_inputEM_OL").val();
		
	}else if(select_file == 2){
		tbl_col = 31;
		tbl_auto = "tb_inputSA_OL_RateAuto";
		tbl_view = "tb_inputSA_OL_Rate";
		modal_auto = "modal_inputSA_OL_RateAuto";
		modal_view = "modal_inputSA_OL_Rate";
		cv_button = "cv_SAExtra_Rate_ol";
		btn_save = "save_inputSA_OL_Rate";
		attr_onclick = "open_modalCV_OL(7,this.id)";
		validate_file = "validate_filerate2_OL";
		modal_download = "download_tb_inputSA_OL_Rate";
		select_file_name = 2;
		type = 22;
		fileID = "decrease_fileID2_OL";
		
		rate_cat_id = $("#rateCat_inputSA_OL").val();
		sub_cat_id = $("#sl_Reduced_capital_Cal2_OL option:selected").attr("data-subcat");
		
	}else if(select_file == 3){
		tbl_col = 52;
		tbl_auto = "tb_inputDisSA_OL_RateAuto";
		tbl_view = "tb_inputDisSA_OL_Rate";
		modal_auto = "modal_inputDisSA_OL_RateAuto";
		modal_view = "modal_inputDisSA_OL_Rate";
		cv_button = "dsc_Input_ol";
		btn_save = "save_inputDisSA_OL_Rate";
		attr_onclick = "open_modalCV_OL(8,this.id)";
		validate_file = "validate_filerate3_OL";
		modal_download = "download_tb_inputDisSA_OL_Rate";
		select_file_name = 3;
		type = 33;
		fileID = "dsc_fileID3_OL";
		
		rate_cat_id = $("#rateCat_inputDisSA_OL").val();
		sub_cat_id = $("#rateSubCat_inputDisSA_OL").val();
	}
	var inputfilename 	= "select_fileCal_"+select_file+"_OL";
	
	if($("#"+inputfilename).val() == ""){
		file_id = "";
	}else{
		file_id = $("#"+fileID).val();
	}

	$("#"+id_fileupload).click(function () {
		this.value = null;
	});
	
	//remove row
	$('#'+tbl_auto+' tbody').empty();		
	$('#'+tbl_view+' tbody').empty();
	
	var file_name = $("#"+id_fileupload).val().replace(/\\/g, '/').replace(/.*\//, '');
		file_path = $("#"+id_fileupload).val();
		
		file_pattern = file_name.replace(cov_code,"{Code}");			
		
	$("#"+modal_auto+" .modal-header>h4>span").text(file_name);
	$("#"+btn_save).unbind();
	
	if(check_filename(id_fileupload, file_format) == false){
			$('#'+cv_button).prop("disabled",true);		
			$("#input_fileCal_"+select_file+"_OL").val("");					
	}else{	
			openFile(event,inputfilename,tbl_auto,tbl_col);
			openFile(event,inputfilename,tbl_view,tbl_col);
			
			$("#base64_fileTXT_OL").val("");
				
			$('#'+modal_auto).modal('show');
		
			convertToBase64_OL(inputfilename,file_type_id)
			
			$("#"+btn_save).unbind();
			$("#"+btn_save).click(function(){
				
				/*save file*/
				//set_Filevalue(type,select_file_name,file_id,file_type_id,file_name,file_path,file_pattern,rate_cat_id,sub_cat_id,user_code);		
				/*end save file*/
				$("#modal_waiting").modal('show');
				var base64 = $("#base64_fileTXT_OL").val();
				 if(base64 != ""){
					 var dateTime = getCurrentDate();
		    		 var file_name_update = "3_"+dateTime+".txt";
		    		 
		    		 		datajson = {				        	
					    		"method" : "uploadFile_txt",
					    		"passInsurance" : $("#pass_Insurance_coverage_ol").val(),
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
						 	    	
						 	    	var obj_ref = response.upload_ref;
						 	    	console.log(obj_ref)
						 	    	
						 	    	
						 	    	datajson = {				        	
										file_id 		: file_id,
										file_type_id 	: file_type_id,
										file_name 		: file_name,
										file_url		: obj_ref,
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
								    	if(type == 21){
								    		/*EM*/
								    		$("#em_rateLayout"+select_file_name+"_OL").val(response.rate_layout_id);
								    		$("#em_fileID"+select_file_name+"_OL").val(response.file_id);
								    	}else if(type == 22){
								    		/*SA*/
								    		$("#decrease_rateLayout"+select_file_name+"_OL").val(response.rate_layout_id);
								    		$("#decrease_fileID"+select_file_name+"_OL").val(response.file_id);
								    	}else if(type == 33){
								    		/*Dis SA*/
								    		$("#dsc_rateLayout"+select_file_name+"_OL").val(response.rate_layout_id);
								    		$("#dsc_fileID"+select_file_name+"_OL").val(response.file_id);
								    	}	
								    	
								    	$("#input_fileCal_"+select_file+"_OL").val(file_name);
										$('#'+cv_button).prop("disabled",false);
//										$('#'+cv_button).attr("onclick",attr_onclick);
										$("#"+validate_file).css("display","none");
										$('#'+cv_button).attr("onclick", "openFileTextBasePlan_OL('"+file_name+"','"+obj_ref+"',"+tbl_col+",'"+tbl_view+"','"+modal_view+"')");
										$("#"+modal_download).attr("onclick", "openFile_target('"+file_name+"','"+obj_ref+"','txt_download')");
										$("#modal_waiting").modal('hide');
										$("body").addClass("body_nopadding");
								    },
								    error : function(response) {	
								    	//console.log("save file error");
								    	message = "ไม่สามารถบันทึกไฟล์ได้";
										alertError(message);
								    	
								    	$("#input_fileCal_"+select_file+"_OL").val("");
								    }
								});		
						 	    	
						 	    
						 	    }
						    })
				 		}
				
				

			});

	}
}

//เบี้ยมาตรฐาน
$("#ch_standard_premium_ol").click(function(){
	var ch_standard_premium_ol = document.getElementById("ch_standard_premium_ol");
	
	if (ch_standard_premium_ol.checked == true){
		  $("#rd_cal_insurance_ol").prop("disabled",false);
		  $("#rd_cal_insurance_ol").prop( "checked", true );
		  $('#sl_menu3_insurance_premium_ol').prop("disabled",false);
		  $('#ch_importInsurance_ol').prop("disabled",false);	
		  $("#rd_cal_capital_ol").prop("disabled",false);
		  $("#ch_calInsurance_ol").prop("disabled", false);
		  $("#spanBoxCal3_OL").attr("disabled", false);
		  $("#select_fileCal_3_OL").prop("disabled", false);
		  $("#expenses_pension_ol").prop("disabled", false);
	}else{
		$("#ch_insurance_premium_ageBand_ol").prop("checked", false);
		/*$("#rd_cal_insurance_ol, #rd_cal_capital_ol").prop("checked", false);
		$("#sl_menu3_insurance_premium_ol").prop("disabled", true);*/
		$("#tb_Age_Band_OL tbody>tr").find("td:nth-child(1) input:checkbox").prop("checked", false);
		var checkdataPM_Rate = 0;
		var rd_cal_insurance = $("#rd_cal_insurance_ol").prop("checked");
		var rd_cal_capital = $("#rd_cal_capital_ol").prop("checked");
		
		$("#tb_PM_Rate1_OL tbody>tr").each(function(){
			var fileID = $(this).find("td:nth-child(3) input:text").val();
			if(fileID != ""){
				checkdataPM_Rate++;
			}
		});

		if (checkdataPM_Rate > 0){
				$("#textTop7_OL").text("");
				$("#textTop8_OL").text("ตารางเบี้ยประกัน");
				$('#modal_CheckNone_Menu4_OL').modal('show');	
				$("#cancel_CheckNone_Menu4_OL").attr('onclick', 'cancel_check_None_OL("PM_Rate")');
				
				$("#modal_CheckNone_Menu4_OL .modal-header button.close").click(function(){
					$("#ch_standard_premium_ol").prop("checked", true);
				});
				
		}else {
			
			 $("#divtb_PM_Rate1_OL *").prop("disabled",true);//default disabled Table PM_Rate
			 $('#addrowPM_Rate_OL').attr("disabled",true);
			 $('#delrowPM_Rate_OL').attr("disabled",true);
	
			 $("#tb_PM_Rate1_OL tbody>tr").remove();
			 addRowPM_Rate_OL();
			 $("#tb_PM_Rate1_OL tbody>tr td:nth-child(2) select").prop("disabled", true);	
			 
			 $('#rd_cal_insurance_ol, #rd_cal_capital_ol').prop("disabled",true);
			 $("#rd_cal_insurance_ol, #rd_cal_capital_ol").prop( "checked", false);
			 $('#sl_menu3_insurance_premium_ol').prop("disabled",true);
			 $('#sl_menu3_insurance_premium_ol').val("NONE")

			 $("#ch_calInsurance_ol").prop("disabled",true);
			 $('#ch_importInsurance_ol').prop("disabled",true);
			 $('#discountInsurancePremiumsSta_ol').prop("disabled",true);
			 $('#discountInsurancePremiumsTo_ol').prop("disabled",true); 
			 $('#discountInsurancePremiumsSta_ol').val("0.00");
			 $('#discountInsurancePremiumsTo_ol').val("0.00");

			 $("#tb_premiumLevel_OL input:text").val("").prop("disabled", true);
			 $("#ch_importInsurance_ol").prop("checked", false);
			 $("#discountInsurancePremiumsSta_ol, #discountInsurancePremiumsTo_ol").val("0.00");	
			 
			 $("#ch_importInsurance_ol").prop("checked", false);
			 $("#discountInsurancePremiumsSta_ol, #discountInsurancePremiumsTo_ol").val("0.00");	 
			 $("#ch_calInsurance_ol").prop("disabled", true);
			 $("#spanBoxCal3_OL").attr("disabled", true);
			 $("#select_fileCal_3_OL").prop("disabled", true);
		}
	$("#menu3_Confirm_ol2").attr('onclick', 'bt_Menu3_Confirm_ol2("PM_Rate")');

	}
});

$("#rd_cal_insurance_ol").click(function(){
	$("#rd_cal_capital_ol").prop("checked", false);
	$("#tr_calPremium_OL1,#tr_calPremium_OL2,#tr_calPremium_OL3,#tr_calPremium_OL4").show();
	$("#tr_calCapital_OL1,#tr_calCapital_OL2,#tr_calCapital_OL3").hide();
	$("#ch_calInsurance_ol").prop("disabled", false);
	
	$("#sl_menu3_insurance_premium_ol option[value!='NONE']").remove();
	$("#sl_menu3_insurance_premium_ol").append($("#dd_insurance_premium_OL").val());
	
	$("#tr_calPremium_OL1>td>label").text("ตารางเบี้ยประกัน");
	$("#tr_calPremium_OL2>td>label").text("นำเข้า PM_Rate");
	
	/*clear data*/
	var num_file = 0;
	$("#tb_PM_Rate1_OL tbody input:text").each(function(){
		if($(this).val() != ""){
			num_file++;
		}
	});
	
	if(num_file > 0){
		$("#tb_PM_Rate1_OL tbody input:text").val("");
		$("#tb_PM_Rate1_OL tbody td:nth-child(3) font").css("display", "inline-block");
		$("#tb_PM_Rate1_OL tbody td:nth-child(4) span").removeClass("activecolorblue").addClass("activecolorgray");
		$("#tb_PM_Rate1_OL tbody td:nth-child(5) span").removeClass("activecolorblue").addClass("activecolorgray");
	}
	
});

$("#rd_cal_capital_ol").click(function(){
	$("#rd_cal_insurance_ol").prop("checked", false);
	$("#tr_calPremium_OL1,#tr_calPremium_OL2,#tr_calPremium_OL3,#tr_calPremium_OL4").show();
	$("#tr_calCapital_OL1,#tr_calCapital_OL2,#tr_calCapital_OL3").hide();
	$("#sl_menu3_capital_ol").prop("disabled", false);
	$("#ch_calInsurance_ol").prop("disabled", true);
	$("#ch_calInsurance_ol").prop("checked", false);
	
	$("#sl_menu3_insurance_premium_ol option[value!='NONE']").remove();
	$("#sl_menu3_insurance_premium_ol").append($("#dd_capital_OL").val());
	
	$("#tr_calPremium_OL1>td>label").text("ตารางทุนประกัน");
	$("#tr_calPremium_OL2>td>label").text("นำเข้า SA_Rate");
	
	/*clear data*/
	var num_file = 0;
	$("#tb_PM_Rate1_OL tbody input:text").each(function(){
		if($(this).val() != ""){
			num_file++;
		}
	});
	
	if(num_file > 0){
		$("#tb_PM_Rate1_OL tbody input:text").val("");
		$("#tb_PM_Rate1_OL tbody td:nth-child(3) font").css("display", "inline-block");
		$("#tb_PM_Rate1_OL tbody td:nth-child(4) span").removeClass("activecolorblue").addClass("activecolorgray");
		$("#tb_PM_Rate1_OL tbody td:nth-child(5) span").removeClass("activecolorblue").addClass("activecolorgray");
	}
});

$("#ch_importInsurance_ol").click(function(){
	if($(this).prop("checked") == true){
		$('#discountInsurancePremiumsSta_ol, #discountInsurancePremiumsTo_ol').prop("disabled",false);
	}else{
		$('#discountInsurancePremiumsSta_ol,#discountInsurancePremiumsTo_ol').prop("disabled",true);
		$("#discountInsurancePremiumsSta_ol, #discountInsurancePremiumsTo_ol").val("0.00");
	}
});

$(document).on('focusin', '#sl_menu3_insurance_premium_ol', function(){
    //console.log("Saving value " + $(this).val());
    $(this).data('val', $(this).val());
}).on('change','#sl_menu3_insurance_premium_ol', function(){
	var prev_rate = $(this).data('val');
	var current_rate = $(this).val();

	/*ปิดปุ่ม add row*/
	var num_dd = $("#tb_PM_Rate1_OL>tbody>tr[data-level='1']:first>td:nth-child(2) select>option[value!='NONE']").length;
	var numrow_tbl = $("#tb_PM_Rate1_OL>tbody>tr[data-level='1']").length;
	if(numrow_tbl != num_dd){
		$("#addrowPM_Rate_OL").attr("disabled", false);
		
	}
	$("#delrowPM_Rate_OL").prop("disabled", false);
	
	var select_text = $("#sl_menu3_insurance_premium_ol option:selected").text();
	var selectPM_text = $("#tb_PM_Rate1_OL tbody>tr>td:nth-child(2)>select").find("option:selected").text();
	
	if(select_text != "None" || $(this).val() != "NONE"){
		$("#tb_PM_Rate1_OL tbody>tr>td:nth-child(2)>select").prop("disabled", false);
		$("#tb_PM_Rate1_OL tbody>tr:nth-child(1)>td:nth-child(2)>select option").prop("disabled", false);
		
		if(selectPM_text != "None"){
			var check_file = 0;
			$("#tb_PM_Rate1_OL>tbody td:nth-child(3) :input[type='text']").each(function(index) {
				if($(this).val() != ""){
					check_file++;
				}
			});
			
			if(check_file > 0){					
				message = "เคยนำเข้าไฟล์ PM_Rate ไว้แล้ว ต้องการเปลี่ยนตารางเบี้ยประกัน ใช่หรือไม่";
				alertValuePage_Warning2_OL(message);

				$("#btn_value_warning_submit2_OL").click(function(){
					check_file_layout_OL("", prev_rate);
				});
				
				$("#btn_value_warning_cancel2_OL").click(function(){	
					
					 $("#modal_value_warning2_OL").modal('hide');
					 $("#sl_menu3_insurance_premium_ol").val(prev_rate).attr('selected', 'selected');
			     });
				
			}else{
				check_file_layout_OL("", prev_rate);
			}				
		}
		
	}else{
		var check_file = 0;
		$("#tb_PM_Rate1_OL>tbody td:nth-child(3) input[type='text']").each(function(index) {
			if($(this).val() != ""){
				check_file++;
			}
		});
		
		if(check_file > 0){					
			message = "เคยนำเข้าไฟล์ PM_Rate ไว้แล้ว ต้องการเปลี่ยนตารางเบี้ยประกัน ใช่หรือไม่";
			alertValuePage_Warning2_OL(message);

			$("#btn_value_warning_submit2_OL").click(function(){
				$("#tb_PM_Rate1_OL tbody>tr>td:nth-child(3) input[type='text']").val("");
				$("#tb_PM_Rate1_OL tbody>tr>td:nth-child(3) input[type='file']").val(null);
				$("#tb_PM_Rate1_OL tbody>tr>td:nth-child(2)>select").prop("disabled", true);
				$("#tb_PM_Rate1_OL tbody>tr>td:nth-child(3) input[type='file']").prop("disabled", true);
				$("#tb_PM_Rate1_OL tbody>tr>td:nth-child(2)>select>option:contains('None')").attr('selected', 'selected');
				$("#tb_PM_Rate1_OL tbody>tr>td:nth-child(3) input[type='text']").attr("placeholder", "");
				$("#tb_PM_Rate1_OL tbody>tr>td:nth-child(3) *").prop("disabled", true);
				$("#tb_PM_Rate1_OL tbody>tr>td:nth-child(3) span").attr('disabled', true);
				$("#tb_PM_Rate1_OL tbody>tr>td:nth-child(3) font").css('display', "none");
				$("#tb_PM_Rate1_OL tbody>tr>td:nth-child(4) span").removeClass("activecolorblue").addClass("activecolorgray");
				$("#tb_PM_Rate1_OL tbody>tr>td:nth-child(5) span").removeClass("activecolorblue").addClass("activecolorgray");
				
				$("#tb_Extra_Rate_OL tbody>tr").remove();
				
				/*ความเสี่ยงมาตรฐาน*/
				$("#dbBox1_OL option:contains('None')").attr('selected', 'selected');
				
				$("#tb_RateValue1_OL tbody>tr").each(function(){
					var level = $(this).data("level");
					if(level == 1){
						$(this).find("td:nth-child(1) label").text("None");
					}	
											
					$(this).find("td:nth-child(2) font").css("display", "none");
					$(this).find("td:nth-child(2) input:text").val("");
					$(this).find("td:nth-child(2) input:text").attr("placeholder","");
					$(this).find("td:nth-child(2) span").attr("disabled", true);
					$(this).find("td:nth-child(2) input[type='file']").attr("disabled", true);
					$(this).find("td:nth-child(2) input[type='file']").removeAttr("onchange");
					$(this).find("td:nth-child(3) span").removeClass("activecolorblue").addClass("activecolorgray");
					$(this).find("td:nth-child(4) span").removeClass("activecolorblue").addClass("activecolorgray")
					
				});
				
			});
			
			$("#btn_value_warning_cancel2_OL").click(function(){	
				
				 $("#modal_value_warning2_OL").modal('hide');
				 $("#sl_menu3_insurance_premium_ol").val(prev_rate).attr('selected', 'selected');
		     });
			
		}else{
			$("#tb_PM_Rate1_OL tbody>tr>td:nth-child(3) input[type='text']").val("");
			$("#tb_PM_Rate1_OL tbody>tr>td:nth-child(3) input[type='file']").val(null);
			$("#tb_PM_Rate1_OL tbody>tr>td:nth-child(2)>select").prop("disabled", true);
			$("#tb_PM_Rate1_OL tbody>tr>td:nth-child(3) input[type='file']").prop("disabled", true);
			$("#tb_PM_Rate1_OL tbody>tr>td:nth-child(2)>select>option:contains('None')").attr('selected', 'selected');
			$("#tb_PM_Rate1_OL tbody>tr>td:nth-child(3) input[type='text']").attr("placeholder", "");
			$("#tb_PM_Rate1_OL tbody>tr>td:nth-child(3) *").prop("disabled", true);
			$("#tb_PM_Rate1_OL tbody>tr>td:nth-child(3) span").attr('disabled', true);
			$("#tb_PM_Rate1_OL tbody>tr>td:nth-child(3) font").css('display', "none");
			$("#tb_PM_Rate1_OL tbody>tr>td:nth-child(4) span").removeClass("activecolorblue").addClass("activecolorgray");
			$("#tb_PM_Rate1_OL tbody>tr>td:nth-child(5) span").removeClass("activecolorblue").addClass("activecolorgray");
		
			/*ความเสี่ยงมาตรฐาน*/
			$("#dbBox1_OL option:contains('None')").attr('selected', 'selected');
			
			$("#tb_RateValue1_OL tbody>tr").each(function(){
				var level = $(this).data("level");
				if(level == 1){
					$(this).find("td:nth-child(1) label").text("None");
				}	
										
				$(this).find("td:nth-child(2) font").css("display", "none");
				$(this).find("td:nth-child(2) input:text").val("");
				$(this).find("td:nth-child(2) input:text").attr("placeholder","");
				$(this).find("td:nth-child(2) span").attr("disabled", true);
				$(this).find("td:nth-child(2) input[type='file']").attr("disabled", true);
				$(this).find("td:nth-child(2) input[type='file']").removeAttr("onchange");
				$(this).find("td:nth-child(3) span").removeClass("activecolorblue").addClass("activecolorgray");
				$(this).find("td:nth-child(4) span").removeClass("activecolorblue").addClass("activecolorgray")
				
			});
		
		}			
					
	}
});

/*คำนวณทุนจากเบี้ยประกัน*/
$(document).on('focusin', '#sl_menu3_capital_ol', function(){
    //console.log("Saving value " + $(this).val());
    $(this).data('val', $(this).val());
}).on('change','#sl_menu3_capital_ol', function(){
	var prev_rate = $(this).data('val');
	var current_rate = $(this).val();
    console.log("Prev value " + prev_rate);
    console.log("New value " + current_rate);
    
    $("#spanBoxCapital1_OL").attr("disabled", false);
	$("#select_fileCapital_1_OL").prop("disabled", false);
	
	var sl_menu3_capital = $("#sl_menu3_capital_ol option:selected").val();
	var sl_menu3_capital_text = $("#sl_menu3_capital_ol option:selected").text();
	var select_file_3_CL = $("#select_file_3_OL").val();
	var select_hidden_value_old2 = "";
	var select_hidden_value_new2 = "";
	
	var rate_cat = $("#sl_menu3_capital_ol option:selected").attr("data-ratecat");	
	$("#capital_rateCat3_OL").val(rate_cat);
	
		tbl_name = "tbl_Capital_OL";
		tblAuto_name = "tbl_CapitalAuto_OL";
		modal_name = "CapitalAuto_OL";		
	
	if(select_file_3_CL != ""){
		message = "เคยนำเข้าไฟล์ไว้แล้ว ต้องการเปลี่ยน SA_Rate ใช่หรือไม่";
		alertValuePage_Warning3_OL(message);
		
		$("#btn_value_warning_submit3_OL").click(function(){
			$("#"+tblAuto_name+" tbody").empty();
			$("#"+tbl_name+" tbody").empty();
			
			if(sl_menu3_capital_text == "None"){
				$('#spanBox3_OL').attr("disabled", true);
				$('#capital_Input_ol').prop('disabled', true);
				$('#select_file_3_OL').prop('disabled', true);
				$("#validate_dd_file3_OL").css("display", "inline-block");
				$("#sl_menu3_capital_ol").val("NONE").attr("selected","selected");
				$("#select_file_3_OL").val("");
				$("#input_file_3_OL").attr("placeholder","");
				$("#input_file_3_OL").val("")
				$("#validate_input3_OL").css("display","none");
			}else{
				if(prev_rate != current_rate){	
					selectTypeCode_OL(current_rate,3);			
					$("#sl_menu3_capital_ol").val(current_rate).attr("selected", "selected");	
					$("#input_file_3_OL").val("")
					
				}	
			}										
			
	     });
	     
	     $("#btn_value_warning_cancel3_OL").click(function(){
	    	 if(sl_menu3_capital == ""){
	    		 $("#sl_menu3_capital_ol").val(current_rate);
	    	 }else{
	    		 $("#sl_menu3_capital_ol").val(prev_rate);
	    		 $('#spanBox3_OL').attr("disabled", false);
				 $('#capital_Input_ol').prop('disabled', false);
				 $('#select_file_3_OL').prop('disabled', false);
				 $("#validate_dd_file3_OL").css("display", "none");
	    	 }		    	
			 $("#modal_value_warning3_OL").modal('hide');
	     })
	    
	}else{
		if(sl_menu3_capital_text != "None"){
			selectTypeCode_OL(current_rate,3);
			$('#spanBox3_OL').attr("disabled", false);
			//$('#cv2_CL').prop('disabled', false);
			$('#select_file_3_OL').prop('disabled', false);
			$("#validate_dd_file3_OL").css("display", "none");
		}else{
			selectTypeCode_OL("",3);
			$("#validate_dd_file3_OL").css("display", "inline-block");
		}			
		
	}	
	
	
});

function addRowPM_Rate_OL(){
	var lastID = Number($("#tb_PM_Rate1_OL>tbody>tr[data-level='1']:last").attr("data-id"))+1 || 1;
	var listgroup_count = $("#tb_PM_Rate1_OL").find("tbody>tr[data-group='"+lastID+"']").length;   
	var lastSubID = "";
	if(listgroup_count > 0){
		lastSubID = $("#tb_PM_Rate1_OL").find("tbody>tr[data-group='"+lastID+"']:last").attr("data-id");
		lastSubID = Number(lastSubID.replace(lastID+"_",""))+1;
	}else{
		lastSubID = 0;
	}
	var rateCatID = $("#rm_rateCat1_OL").val();
	var numrow_PMRate = $("#tb_PM_Rate1_OL tbody>tr").length;
	var numrow_RateValue = $("#tb_RateValue1_OL tbody>tr").length;
	
	var new_row = "<tr id='tbody_PM_Rate_OL"+lastID+"' data-id='"+lastID+"' data-level='1'>"+
				  "<td class='text-center borderBlack' id='imgOK_OL_"+lastID+"' width='33px' onclick='imgCheckbox(this.id);' style='vertical-align: middle;'><i class='glyphicon glyphicon-edit'></i></td>"+
				  "<td class='borderBlack'></td>"+
				  "<td class='borderBlack'>"+
				  	"<div class='input-group'>"+
					"<input type='text' class='form-control' id='fileuploads_PMRateText"+lastID+"_OL' readonly=''>"+ 
						"<label class='input-group-btn'>"+ 
						  "<span id='spanRate"+lastID+"_OL' class='btn btn-primary' disabled>"+
						  	"<font id='validate_rate"+lastID+"_OL' style='color: red;'>*</font>..."+
						  		"<input id='fileuploads_PMRate"+lastID+"_OL' type='file' accept='text/plain' style='display: none;'>"+ 
						  "</span>"+
						 "</label>"+
					"</div>"+
					"<input type='hidden' id='rm_rateCat_OL"+lastID+"' value=''>"+
					"<input type='hidden' id='rm_rateLayout_OL"+lastID+"' value=''>"+
					"<input type='hidden' id='rm_fileID_OL"+lastID+"' value=''>"+
				  "</td>"+
				  "<td class='borderBlack'>"+
				 	"<a id='span_PM_Rateopen_OL_"+lastID+"' class='active_grey' disabled>"+
						"<span class='glyphicon glyphicon-eye-open activecolorgray' disabled></span>"+
					"</a>"+							 	
				 "</td>"+
				 "<td class='borderBlack'>"+
					 "<a id='span_PM_Ratedownload_OL_"+lastID+"' class='active_grey' disabled>"+
						"<span class='glyphicon glyphicon-download-alt activecolorgray' disabled></span>"+
					 "</a>"+
				 "</td>"+				
				"</tr>";
	
	/*row ในหน้าตารางมูลค่า*/
	var new_row2 = "<tr id='tbody_Rate_Value_OL"+lastID+"' data-id='"+lastID+"' data-level='1'>"+
	  "<td class='borderBlack vertical-middle'><label>None</label></td>"+
	  "<td class='borderBlack'>"+
	  	"<div class='input-group'>"+
		"<input type='text' class='form-control' id='fileuploads_RateValueText"+lastID+"_OL' readonly=''>"+ 
			"<label class='input-group-btn'>"+ 
			  "<span id='spanRateValue"+lastID+"_OL' class='btn btn-primary' disabled>..."+
			  	/*"<font id='validate_RateValue"+lastID+"_OL' style='color: red;'>*</font>..."+*/
			  		"<input id='fileuploads_RateValue"+lastID+"_OL' type='file' accept='text/plain' style='display: none;' disabled>"+ 
			  "</span>"+
			 "</label>"+
		"</div>"+
		"<input type='hidden' id='cv_rateCat_OL"+lastID+"' value=''>"+
		"<input type='hidden' id='cv_rateLayout_OL"+lastID+"' value=''>"+
		"<input type='hidden' id='cv_fileID_OL"+lastID+"' value=''>"+	
	  "</td>"+
	  "<td class='borderBlack'>"+
	 	"<a id='span_RateValueopen_OL_"+lastID+"' class='active_grey' disabled>"+
			"<span class='glyphicon glyphicon-eye-open activecolorgray' disabled></span>"+
		"</a>"+							 	
	 "</td>"+
	 "<td class='borderBlack'>"+
		 "<a id='span_RateValuedownload_OL_"+lastID+"' class='active_grey' disabled>"+
			"<span class='glyphicon glyphicon-download-alt activecolorgray' disabled></span>"+
		 "</a>"+
	 "</td>"+				
	"</tr>";
	
	/*row sub*/
	$("#tb_Age_Band_OL>tbody>tr").each(function(){
		lastSubID++;
		var thisID_Sub = lastID+"_"+lastSubID;
		var chk_val = $(this).find("td:nth-child(1)>input[type='checkbox']").prop("checked");
		if(chk_val == true){
			var band_val = $(this).find("td:nth-child(2)").text();
			
			new_row += "<tr id='tbody_PM_Rate_OL"+thisID_Sub+"' data-id='"+thisID_Sub+"' data-group='"+lastID+"' data-level='2' disabled='disabled'>"+
			  "<td class='borderBlack' style='background-color: gray;'></td>"+
			  "<td class='borderBlack vertical-middle'><label>"+band_val+"</label></td>"+
			  "<td class='borderBlack'>"+
			  	"<div class='input-group'>"+
				"<input type='text' class='form-control' id='fileuploads_PMRateText"+thisID_Sub+"_OL' readonly=''>"+ 
					"<label class='input-group-btn'>"+ 
					  "<span id='spanRate"+thisID_Sub+"_OL' class='btn btn-primary' disabled>"+
					  	"<font id='validate_rate"+thisID_Sub+"_OL' style='color: red;'>*</font>..."+
					  		"<input id='fileuploads_PMRate"+thisID_Sub+"_OL' type='file' accept='text/plain' style='display: none;'>"+ 
					  "</span>"+
					 "</label>"+
				"</div>"+
				"<input type='hidden' id='rm_rateCat_OL"+thisID_Sub+"' value=''>"+
				"<input type='hidden' id='rm_rateLayout_OL"+thisID_Sub+"' value=''>"+
				"<input type='hidden' id='rm_fileID_OL"+thisID_Sub+"' value=''>"+
			  "</td>"+			 
			  "<td class='borderBlack'>"+
			 	"<a id='span_PM_Rateopen_OL_"+thisID_Sub+"' class='active_grey' disabled>"+
					"<span class='glyphicon glyphicon-eye-open activecolorgray' disabled></span>"+
				"</a>"+							 	
			 "</td>"+
			 "<td class='borderBlack'>"+
				 "<a id='span_PM_Ratedownload_OL_"+thisID_Sub+"' class='active_grey' disabled>"+
					"<span class='glyphicon glyphicon-download-alt activecolorgray' disabled></span>"+
				 "</a>"+
			"</td>"+
			"</tr>";
			
			
			new_row2 += "<tr id='tbody_Rate_Value_OL"+thisID_Sub+"' data-id='"+thisID_Sub+"' data-group='"+lastID+"' data-level='2' disabled='disabled'>"+
			  "<td class='borderBlack vertical-middle'><label>"+band_val+"</label></td>"+
			  "<td class='borderBlack'>"+
			  	"<div class='input-group'>"+
				"<input type='text' class='form-control' id='fileuploads_RateValueText"+thisID_Sub+"_OL' readonly=''>"+ 
					"<label class='input-group-btn'>"+ 
					  "<span id='spanRateValue"+thisID_Sub+"_OL' class='btn btn-primary' disabled>..."+
					  	/*"<font id='validate_RateValue"+thisID_Sub+"_OL' style='color: red;'>*</font>..."+*/
					  		"<input id='fileuploads_RateValue"+thisID_Sub+"_OL' type='file' accept='text/plain' style='display: none;'>"+ 
					  "</span>"+
					 "</label>"+
				"</div>"+
				"<input type='hidden' id='cv_rateCat_OL"+thisID_Sub+"' value=''>"+
				"<input type='hidden' id='cv_rateLayout_OL"+thisID_Sub+"' value=''>"+
				"<input type='hidden' id='cv_fileID_OL"+thisID_Sub+"' value=''>"+
			  "</td>"+			 
			  "<td class='borderBlack'>"+
			 	"<a id='span_RateValueopen_OL_"+thisID_Sub+"' class='active_grey' disabled>"+
					"<span class='glyphicon glyphicon-eye-open activecolorgray' disabled></span>"+
				"</a>"+							 	
			 "</td>"+
			 "<td class='borderBlack'>"+
				 "<a id='span_RateValuedownload_OL_"+thisID_Sub+"' class='active_grey' disabled>"+
					"<span class='glyphicon glyphicon-download-alt activecolorgray' disabled></span>"+
				 "</a>"+
			"</td>"+
			"</tr>";
		}		
	});
	
	//if(numrow_PMRate <= 0){
		$("#tb_PM_Rate1_OL>tbody").append(new_row);
	//}
	
	//if(numrow_RateValue <= 0){
		$("#tb_RateValue1_OL>tbody").append(new_row2);
	//}
	
	/*type*/
	var PMrate_type = $("#PMrate_type_OL").val().split(",");
	var dd_PMrate_type = "<select class='form-control sl_STD_PM_Rate' onchange=\"check_file_layout_OL(this.id,'');\">";
		dd_PMrate_type += "<option value='NONE'>None</option>";
	
	for(var i = 0; i < PMrate_type.length; i++){
		dd_PMrate_type += "<option value='"+PMrate_type[i]+"'>"+PMrate_type[i]+"</option>";
	}
	dd_PMrate_type += "</select>";
	
	//$('#tb_PM_Rate1 tbody>tr:first-child td:nth-child(2)>select').clone().attr("id","sl_PM_Type_CL"+lastID).appendTo("#tbody_PM_Rate"+lastID+">td:nth-child(2)");
	$(dd_PMrate_type).attr("id","sl_PM_Type_OL"+lastID).appendTo("#tbody_PM_Rate_OL"+lastID+">td:nth-child(2)");
	
	$("#sl_PM_Type_OL"+lastID+" option").each(function(){
		$(this).removeAttr("selected");
	});
	
	$("#sl_PM_Type_OL"+lastID+" :contains('None')").attr("selected", "selected");
	
	/*ปิดปุ่ม add row*/
	var num_dd = $("#tb_PM_Rate1_OL>tbody>tr[data-level='1']:first>td:nth-child(2) select>option[value!='NONE']").length;
	var numrow_tbl = $("#tb_PM_Rate1_OL>tbody>tr[data-level='1']").length;
	if(numrow_tbl == num_dd){
		$("#addrowPM_Rate_OL").attr("disabled", true);
	}
}

function check_file_layout_OL(id,rate){
	var select_text = jQuery.trim($("#sl_menu3_insurance_premium_ol option:selected").text());
	var select_text_value = $("#sl_menu3_insurance_premium_ol option:selected").val();
	var select_text2 = jQuery.trim($("#dbBox1_OL option:selected").text());
	var select_text2_value = $("#dbBox1_OL option:selected").val();
	var numrow = $("#tb_PM_Rate1_OL>tbody>tr[data-level='1']").length;
	var file_layout = "";
	var file_layout2 = "";
	var baseplanCode_CL = $("#pass_Insurance_coverage_ol").val();
	var tr_group = "";
	var tr_group2 = "";
	
	if(id != ""){
		var ddID = Number(id.replace("sl_PM_Type_OL",""));
		var val_select = $("#sl_PM_Type_OL"+ddID+" option:selected").text();
	}
	
	/*เช็ค type ซ้ำ*/
	var arr_value = [];
	for (i=0; i<numrow; i++)
		{		 
		 arr_value.push($("select.sl_STD_PM_Rate option:selected").eq(i).text());
		}
	
	var arr= arr_value.sort(); 
	var arrDuplicate = [];
	for (var j = 0; j < arr.length - 1; j++) {
	  if(arr[j] != 'None'){
		if (arr[j + 1] == arr[j]) {
			arrDuplicate.push(arr[j]);
		}
	  }
	}	
	
	/*var tbl_name = "tbl_PMRatePlan_OL";
	var tblAuto_name = "tbl_PMRatePlanAuto_OL";*/
	var tbl_name = "tbl_ModalMain_OL";
	var tblAuto_name = "tbl_ModalMainAuto_OL";
	
	var prev = "";
	var current = "";
	
	/**/
	$(document).on('focusin', '#sl_PM_Type_OL'+ddID, function(){
	    $(this).data('val', $(this).val());
	}).on('change','#sl_PM_Type_OL'+ddID, function(){
	    prev = $(this).data('val');
	    current = $(this).val();
	    /*console.log("id>"+$(this).attr('id')+ " prev value" + prev);
		console.log("id>"+$(this).attr('id')+ " New value " + current);*/
	});
	/**/
	
	if(id != ""){
		if(($("#fileuploads_PMRateText"+ddID+"_OL").val() != "")){
			message = "เคยนำเข้าไฟล์ PM_Rate ไว้แล้ว ต้องการเปลี่ยนตารางเบี้ยประกัน ใช่หรือไม่";
			alertValuePage_Warning_OL(message);
			
			$("#btn_value_warning_submit").click(function(){
				if(arrDuplicate != ""){
					message = "ไม่สามารถเลือกประเภท PM Rate ซ้ำได้";
					alertError(message);
					
					$("#sl_PM_Type_OL"+ddID+" option:contains('None')").attr('selected', 'selected');
					$("#tbody_PM_Rate_OL"+ddID+">td:nth-child(3) *").prop('disabled', true);
					$("#tbody_PM_Rate_OL"+ddID+">td:nth-child(3) input[type='text']").attr("placeholder", "");
					
					$("#tb_PM_Rate1_OL>tbody>tr[data-group='"+ddID+"']>td:nth-child(3) *").prop('disabled', true);
					$("#tb_PM_Rate1_OL>tbody>tr[data-group='"+ddID+"']>td:nth-child(3) input[type='text']").attr("placeholder", "");
					$("#tbody_PM_Rate_OL"+ddID+">td:nth-child(3) span").attr('disabled', true);
					$("#validate_rate"+ddID+"_OL").css('display', 'inline-block');
					$("#tbody_PM_Rate_OL"+ddID+">td:nth-child(4) a").removeClass("open-PremiumRateDialog_OL");
					$("#tbody_PM_Rate_OL"+ddID+">td:nth-child(4) span").removeClass("activecolorblue").addClass("activecolorgray");
					$("#tbody_PM_Rate_OL"+ddID+">td:nth-child(5) span").removeClass("activecolorblue").addClass("activecolorgray");
										
					$("#tbody_PM_Rate_OL"+ddID+">td:nth-child(3) input[type='text']").val("");	
					/*$("#tbody_PM_Rate"+ddID+">td:nth-child(3) input[type='file']").val(null);*/
					
					$("#tb_PM_Rate1_OL>tbody>tr[data-group="+ddID+"]>td:nth-child(3) input[type='text']").val("");
					$("#tb_PM_Rate1_OL>tbody>tr[data-group="+ddID+"]>td:nth-child(3) input[type='file']").val(null);
					$("#tb_PM_Rate1_OL>tbody>tr[data-group="+ddID+"]>td:nth-child(3) *").prop("disabled",true);
					$("#tb_PM_Rate1_OL>tbody>tr[data-group="+ddID+"]>td:nth-child(3) span").attr("disabled",true);
					$("#tb_PM_Rate1_OL>tbody>tr[data-group="+ddID+"]>td:nth-child(3) label>font").css("display","inline-block");
					$("#tb_PM_Rate1_OL>tbody>tr[data-group="+ddID+"]>td:nth-child(4) a").removeClass("open-PremiumRateDialog_OL");
					$("#tb_PM_Rate1_OL>tbody>tr[data-group="+ddID+"]>td:nth-child(4) span").removeClass("activecolorblue").addClass("activecolorgray");
					$("#tb_PM_Rate1_OL>tbody>tr[data-group="+ddID+"]>td:nth-child(5) span").removeClass("activecolorblue").addClass("activecolorgray");
					
					/*Extra rate*/
					$("#tbody_Extra_Rate_OL"+ddID).remove();
					
				}else{
					$("#"+tblAuto_name+" tbody").empty();
					$("#"+tbl_name+" tbody").empty();
					
					//$("#tbody_PM_Rate"+ddID+">td:nth-child(3) input[type='text']").attr("placeholder", "");
					$("#fileuploads_PMRateText"+ddID+"_OL").val("");
					$("#fileuploads_PMRate"+ddID+"_OL").val(null);				
					$("#validate_rate"+ddID+"_OL").css("display","inline-block");
					$("#tbody_PM_Rate_OL"+ddID+">td:nth-child(4) a").removeClass("open-PremiumRateDialog_OL");
					$("#tbody_PM_Rate_OL"+ddID+">td:nth-child(4) span").removeClass("activecolorblue").addClass("activecolorgray");
					$("#tbody_PM_Rate_OL"+ddID+">td:nth-child(5) span").removeClass("activecolorblue").addClass("activecolorgray");
					$("#tbody_PM_Rate_OL"+ddID+">td:nth-child(3) span").css("display", "inline-block");
					$("#tbody_PM_Rate_OL"+ddID+">td:nth-child(3) font").css("display", "inline-block");
										
					selectFilePMRate_OL("loop",ddID);
				}
			});
			
			$("#btn_value_warning_cancel").click(function(){	
				 $("#modal_value_warning_OL").modal('hide');				 
				 $("#sl_PM_Type_OL"+ddID).val(prev).attr('selected', 'selected');
				 //$("#sl_menu3_insurance_premium_cl").val(rate).attr('selected', 'selected');			 				 
		     });
			
		}else{
			
			if(arrDuplicate != ""){
				message = "ไม่สามารถเลือกประเภท PM Rate ซ้ำได้";
				alertError(message);
				
				$("#sl_PM_Type_OL"+ddID+" option:contains('None')").attr('selected', 'selected');
				$("#tbody_PM_Rate_OL"+ddID+">td:nth-child(3) *").prop('disabled', true);
				$("#tbody_PM_Rate_OL"+ddID+">td:nth-child(3) input[type='text']").attr("placeholder", "");
				
				$("#tbody_PM_Rate_OL"+ddID+">td:nth-child(3) span").attr('disabled', true);
				$("#tbody_PM_Rate_OL"+ddID+">td:nth-child(4) a").removeClass("open-PremiumRateDialog_OL");
				$("#tbody_PM_Rate_OL"+ddID+">td:nth-child(4) span").removeClass("activecolorblue").addClass("activecolorgray");
				$("#tbody_PM_Rate_OL"+ddID+">td:nth-child(5) span").removeClass("activecolorblue").addClass("activecolorgray");
				$("#tbody_PM_Rate_OL"+ddID+">td:nth-child(3) input[type='text']").val("");
				$("#tbody_PM_Rate_OL"+ddID+">td:nth-child(3) input[type='file']").val(null);
				
				$("#tb_PM_Rate1_OL>tbody>tr[data-group='"+ddID+"']>td:nth-child(3) input[type='text']").attr("placeholder", "");
				$("#tb_PM_Rate1_OL>tbody>tr[data-group='"+ddID+"']>td:nth-child(3) input[type='text']").val("");
				$("#tb_PM_Rate1_OL>tbody>tr[data-group='"+ddID+"']>td:nth-child(3) input[type='file']").val(null);
				$("#tb_PM_Rate1_OL>tbody>tr[data-group='"+ddID+"']>td:nth-child(3) *").prop("disabled",true);
				$("#tb_PM_Rate1_OL>tbody>tr[data-group='"+ddID+"']>td:nth-child(3) span").attr("disabled",true);
				$("#tb_PM_Rate1_OL>tbody>tr[data-group='"+ddID+"']>td:nth-child(4) a").removeClass("open-PremiumRateDialog_OL");
				$("#tb_PM_Rate1_OL>tbody>tr[data-group='"+ddID+"']>td:nth-child(4) span").removeClass("activecolorblue").addClass("activecolorgray");
				$("#tb_PM_Rate1_OL>tbody>tr[data-group='"+ddID+"']>td:nth-child(5) span").removeClass("activecolorblue").addClass("activecolorgray");
				
				/*Extra rate*/
				$("#tbody_Extra_Rate_OL"+ddID).remove();
				
			}else{
				if(id != ""){
					selectFilePMRate_OL("",ddID);
				}else{
					selectFilePMRate_OL("loop",ddID);
				}
				
			}	
		}
	}else{
		selectFilePMRate_OL("loop","");
	}
		
/*************/

	function selectFilePMRate_OL(mode,id){
			if(mode == 'loop'){
				for(var ii=0;ii<numrow;ii++){
					var thisID_text = $("select.sl_STD_PM_Rate").eq(ii).attr("id");
					var thisID = Number(thisID_text.replace("sl_PM_Type_OL",""));
					var selectPM_text = $("#"+thisID_text).find("option:selected").text();
					
					if(select_text == 'ตามแผนความคุ้มครอง'){
						type = 1;
					}else if(select_text == 'ต่อทุน 10,000 บาท'){
						type = 2;
					}else if(select_text == 'ต่อทุน 100,000 บาท'){
						type = 3;
					}else if(select_text == 'กลุ่มรายเดือน Industrial'){
						type = 41;
					}else if(select_text == 'กลุ่มรายงวด Tax Minus'){
						type = 41;
					}
					
					file_layout = select_text_value+selectPM_text;
					file_layout2 = select_text2_value+selectPM_text;
					
					if(select_text == 'None' || selectPM_text == 'None'){
						$("#tbody_PM_Rate_OL"+thisID+">td:nth-child(3) input[type='text']").attr("placeholder", "");
						$("#tbody_PM_Rate_OL"+thisID+">td:nth-child(3) *").prop("disabled", true);
						$("#tbody_PM_Rate_OL"+thisID+">td:nth-child(3) span").attr("disabled", true);
						$("#tbody_PM_Rate_OL"+thisID+">td:nth-child(3) span").css("display", "inline-block");
					}else{				
						$("#tbody_PM_Rate_OL"+thisID+">td:nth-child(4) a").removeClass("open-PremiumRateDialog_OL");
						$("#tbody_PM_Rate_OL"+thisID+">td:nth-child(4) span").removeClass("activecolorblue").addClass("activecolorgray");
						$("#tbody_PM_Rate_OL"+thisID+">td:nth-child(5) span").removeClass("activecolorblue").addClass("activecolorgray");
						$("#tbody_PM_Rate_OL"+thisID+">td:nth-child(3) input[type='text']").val("");
						$("#tbody_PM_Rate_OL"+thisID+">td:nth-child(3) input[type='file']").val(null);
						$("#validate_rate"+thisID+"_OL").css("display","inline-block");
						
						$("#fileuploads_PMRateText"+thisID+"_OL").attr("placeholder", file_layout+"_"+baseplanCode_CL+".txt");
					  	
						/*เบี้ยมาตรฐาน*/
						var rate_cat = "";
						var rate_cat_sub = "";
						if($("#rd_cal_insurance_ol").prop("checked") == true){
							rate_cat = $("#rateCat_tbStardard_OL").val();
							rate_cat_sub = $("#rateCat_tbStardard_age_OL").val();
						}else{
							rate_cat = $("#rateCat_capital_OL").val();
							rate_cat_sub = $("#rateSubCat_capital_OL").val();
						}
						
						var layout_id  = $("#sl_menu3_insurance_premium_ol").find("option:selected").attr("data-layout");
						/*var uploadfile = "selectFileRate_OL("+type+",'s','fileuploads_PMRate"+thisID+"_OL','"+file_layout+"_"+baseplanCode_CL+"','','sl_menu3_insurance_premium_ol','span_PM_Rateopen_OL_"+thisID+"')";*/
						var uploadfile = "selectFileTXTMain_OL("+rate_cat+", 2,'fileuploads_PMRate"+thisID+"_OL',"+layout_id+",'','','"+file_layout+"_"+baseplanCode_CL+"','','','span_PM_Rateopen_OL_"+thisID+"')";
						
						$("#fileuploads_PMRate"+thisID+"_OL").attr('onchange', uploadfile);	
						$("#tbody_PM_Rate_OL"+thisID+">td:nth-child(3) span").attr("disabled", false);
					  	$("#tbody_PM_Rate_OL"+thisID+">td:nth-child(3) *").prop("disabled", false);
					  						  
					  	tr_group = "#tb_PM_Rate1_OL>tbody tr[data-group='"+thisID+"']";
					  	
					  	$(tr_group).each(function(){
					  		var list_band_text = $(this).find("td:nth-child(2)").text();
					  		var list_band_layout = "";
					  		var list_band_ID = $(this).data("id");
					  		
					  		if(file_layout != ""){
					  			list_band_layout = file_layout+"_"+list_band_text+"_"+baseplanCode_CL+".txt";
					  		}else{
					  			list_band_layout = "";
					  		}
					  		
					  		var layout_id_sub  = $("#sl_menu3_insurance_premium_ol").find("option:selected").attr("data-layoutsub");
					  		var uploadfile_sub = "selectFileTXTMain_OL("+rate_cat_sub+", 3,'fileuploads_PMRate"+list_band_ID+"_OL',"+layout_id_sub+",'','','"+file_layout+"_"+list_band_text+"_"+baseplanCode_CL+"','','','span_PM_Rateopen_OL_"+list_band_ID+"')";
					  		//var uploadfile_sub = "selectFileRate_OL("+type+",'b','fileuploads_PMRate"+list_band_ID+"_OL','"+file_layout+"_"+list_band_text+"_"+baseplanCode_CL+"','','sl_menu3_insurance_premium_ol','span_PM_Rateopen_OL_"+list_band_ID+"')";
							
							$("#fileuploads_PMRate"+list_band_ID+"_OL").attr('onchange', uploadfile_sub);	
					  		$(this).find("td:nth-child(3) input[type='text']").attr("placeholder", list_band_layout);
					  		$(this).find("td:nth-child(3) input[type='text']").val("");
							$(this).find("td:nth-child(3) input[type='file']").val(null);
							$("#validate_rate"+list_band_ID+"_OL").css("display","inline-block");
							$(this).find("td:nth-child(4) a").removeClass("open-PremiumRateDialog_OL");
							$(this).find("td:nth-child(4) span").removeClass("activecolorblue").addClass("activecolorgray");
							$(this).find("td:nth-child(5) span").removeClass("activecolorblue").addClass("activecolorgray");
							
					  		if(selectPM_text == 'None'){
					  			$(this).find("*").prop("disabled",true);
					  		}else{
					  			$(this).find("td:nth-child(3) *").prop("disabled",false);
					  			$(this).find("td:nth-child(3) span").attr("disabled",false);
					  		}
					  		
					  	});	
					}										
				}
			}else{
					var thisID = id;
					var selectPM_text = $("#sl_PM_Type_OL"+id).find("option:selected").text();
					
					if(select_text == 'ตามแผนความคุ้มครอง'){
						type = 1;
					}else if(select_text == 'ต่อทุน 10,000 บาท'){
						type = 2;
					}else if(select_text == 'ต่อทุน 100,000 บาท'){
						type = 3;
					}else if(select_text == 'กลุ่มรายเดือน Industrial'){
						type = 41;
					}else if(select_text == 'กลุ่มรายงวด Tax Minus'){
						type = 41;
					}
					
					file_layout = select_text_value+selectPM_text;
					file_layout2 = select_text2_value+selectPM_text;					
					
					if(select_text == 'None' || selectPM_text == 'None'){
						$("#tbody_PM_Rate_OL"+thisID+">td:nth-child(3) input[type='text']").attr("placeholder", "");
						$("#tbody_PM_Rate_OL"+thisID+">td:nth-child(3) *").prop("disabled", true);
						$("#tbody_PM_Rate_OL"+thisID+">td:nth-child(3) span").attr("disabled", true);
					}else{
						$("#fileuploads_PMRateText"+thisID+"_OL").attr("placeholder", file_layout+"_"+baseplanCode_CL+".txt");
					  	
						var rate_cat = "";
						var rate_cat_sub = "";
						if($("#rd_cal_insurance_ol").prop("checked") == true){
							rate_cat = $("#rateCat_tbStardard_OL").val();
							rate_cat_sub = $("#rateCat_tbStardard_age_OL").val();
						}else{
							rate_cat = $("#rateCat_capital_OL").val();
							rate_cat_sub = $("#rateSubCat_capital_OL").val();
						}
						
						var layout_id  = $("#sl_menu3_insurance_premium_ol").find("option:selected").attr("data-layout");
						var uploadfile = "selectFileTXTMain_OL("+rate_cat+", 2,'fileuploads_PMRate"+thisID+"_OL',"+layout_id+",'','','"+file_layout+"_"+baseplanCode_CL+"','','','span_PM_Rateopen_OL_"+thisID+"')";
						//var uploadfile = "selectFileRate_OL("+type+",'s','fileuploads_PMRate"+thisID+"_OL','"+file_layout+"_"+baseplanCode_CL+"','','sl_menu3_insurance_premium_ol','span_PM_Rateopen_OL_"+thisID+"')";
						
						$("#fileuploads_PMRate"+thisID+"_OL").attr('onchange', uploadfile);	
						$("#tbody_PM_Rate_OL"+thisID+">td:nth-child(3) span").attr("disabled", false);
					  	$("#tbody_PM_Rate_OL"+thisID+">td:nth-child(3) *").prop("disabled", false);	
					  	$("#tbody_PM_Rate_OL"+thisID+">td:nth-child(3) font").css("display", "inline-block");
					  	
					  	tr_group = "#tb_PM_Rate1_OL>tbody tr[data-group='"+thisID+"']";
					  				  	
					  	$(tr_group).each(function(){
					  		var list_band_text = $(this).find("td:nth-child(2)").text();
					  		var list_band_layout = "";
					  		var list_band_ID = $(this).data("id");
					  		
					  		if(file_layout != ""){
					  			list_band_layout = file_layout+"_"+list_band_text+"_"+baseplanCode_CL+".txt";
					  		}else{
					  			list_band_layout = "";
					  		}
					  		
					  		var layout_id_sub  = $("#sl_menu3_insurance_premium_ol").find("option:selected").attr("data-layoutsub");
					  		var uploadfile_sub = "selectFileTXTMain_OL("+rate_cat_sub+", 3,'fileuploads_PMRate"+list_band_ID+"_OL',"+layout_id_sub+",'','','"+file_layout+"_"+list_band_text+"_"+baseplanCode_CL+"','','','span_PM_Rateopen_OL_"+list_band_ID+"')";
					  		//var uploadfile_sub = "selectFileRate_OL("+type+",'b','fileuploads_PMRate"+list_band_ID+"_OL','"+file_layout+"_"+list_band_text+"_"+baseplanCode_CL+"','','sl_menu3_insurance_premium_ol','span_PM_Rateopen_OL_"+list_band_ID+"')";
							
							$("#fileuploads_PMRate"+list_band_ID+"_OL").attr('onchange', uploadfile_sub);	
					  		$(this).find("td:nth-child(3) input[type='text']").attr("placeholder", list_band_layout);
					  		$("#validate_rate"+list_band_ID+"_OL").css("display","inline-block");
					  		
					  		if(selectPM_text == 'None'){
					  			$(this).find("*").prop("disabled",true);
					  		}else{
					  			$(this).find("td:nth-child(3) *").prop("disabled",false);
					  			$(this).find("td:nth-child(3) span").attr("disabled",false);
					  		}					  		
					  	});	
					}
					
					/*ตารางมูลค่า*/		
					$("#tb_RateValue1_OL tbody").css("display","grid");
					$("#tb_RateValue1_OL tbody").show();
					$("#tbody_Rate_Value_OL"+id+">td:nth-child(1)>label").text(selectPM_text);
					var dbBox1_text  = $("#dbBox1_OL option:selected").text();
					var dbBox1_val = $("#dbBox1_OL").val();
					var file_layout1_text = "";
					var file_layout2_text = "";
					var placeholder = "";
					var placeholder_main = "";
					
					file_layout = dbBox1_val.split(",");						
								
					if(dbBox1_text != "None"){
						
						/*Not Band*/	
						if(file_layout.length > 1){
							file_layout_r1 = file_layout[0];
							file_layout_r2 = file_layout[1];
							 
							file_layout_r1_text = file_layout_r1+selectPM_text+"_"+baseplanCode_CL;
							file_layout_r2_text = file_layout_r2+selectPM_text+"_"+baseplanCode_CL;
							
							placeholder_main = file_layout_r1_text+".txt หรือ "+file_layout_r2_text+".txt";
						}else{
							file_layout_r1 = file_layout[0];
							file_layout_r2 = "";
							
							file_layout_r1_text = file_layout_r1+selectPM_text+"_"+baseplanCode_CL;
							file_layout_r2_text = "";
							
							placeholder_main = file_layout_r1_text+".txt";
						}
						
						
						//get new layout
						var layout_select = $("#dbBox1_OL option:selected").attr("data-layout");
						var layout_split = layout_select.split(",");
						if(layout_split.length > 1){
							layout_id1 = layout_split[0];
							layout_id2 = layout_split[1];
						}else{
							layout_id1 = layout_select;
							layout_id2 = "''";
						}
						
						var uploadfile_sub = "selectFileTXTMain_OL("+rate_cat_sub+", 8,'fileuploads_RateValue"+id+"_OL',"+layout_id1+","+layout_id2+",'','"+file_layout_r1_text+"','"+file_layout_r2_text+"','','span_RateValueopen_OL_"+id+"')";
						//var uploadfile_sub = "selectFileRate_OL(5,'s','fileuploads_RateValue"+id+"_OL','"+file_layout_r1_text+"','"+file_layout_r2_text+"','dbBox1_OL','span_RateValueopen_OL_"+id+"')";
						
						$("#fileuploads_RateValue"+id+"_OL").attr('onchange', uploadfile_sub);	
				  		$("#tbody_Rate_Value_OL"+id).find("td:nth-child(2) input[type='text']").attr("placeholder", placeholder_main);
				  		
				  		if(selectPM_text == 'None'){
				  			$("#tbody_Rate_Value_OL"+id).find("*").prop("disabled",true);
				  		}else{
				  			$("#tbody_Rate_Value_OL"+id).find("td:nth-child(2) *").prop("disabled",false);
				  			$("#tbody_Rate_Value_OL"+id).find("td:nth-child(2) span").attr("disabled",false);
				  		}
						
				  		/*Band*/
						tr_group = "#tb_RateValue1_OL>tbody tr[data-group='"+thisID+"']";
	  				  	
					  	$(tr_group).each(function(){
					  		var list_band_text = $(this).find("td:nth-child(1)").text();
					  		var list_band_layout = "";
					  		var list_band_ID = $(this).data("id");
					  		
					  		if(file_layout.length > 1){
								file_layout1 = file_layout[0];
								file_layout2 = file_layout[1];
								 
								file_layout1_text = file_layout1+selectPM_text+"_"+list_band_text+"_"+baseplanCode_CL;
								file_layout2_text = file_layout2+selectPM_text+"_"+list_band_text+"_"+baseplanCode_CL;
								
								placeholder = file_layout1_text+".txt หรือ "+file_layout2_text+".txt";
							}else{
								file_layout1 = file_layout[0];
								file_layout2 = "";
								
								file_layout1_text = file_layout1+selectPM_text+"_"+list_band_text+"_"+baseplanCode_CL;
								file_layout2_text = "";
								
								placeholder = file_layout1_text+".txt";
							}	
					  		
					  		//var uploadfile_band = "selectFileRate_OL(5,'b','fileuploads_RateValue"+id+"_OL','"+file_layout1_text+"','"+file_layout2_text+"','dbBox1_OL','span_RateValueopen_OL_"+id+"')";
					  		var uploadfile_band = "selectFileTXTMain_OL("+rate_cat_sub+", 9,'fileuploads_RateValue"+id+"_OL',"+layout_id1+","+layout_id2+",'','"+file_layout1_text+"','"+file_layout2_text+"','','span_RateValueopen_OL_"+id+"')";
					  		
							$(this).find("td:nth-child(2) input[type='text']").attr("placeholder",placeholder);
							$(this).find("td:nth-child(2) input[type='file']").attr("onchange",uploadfile_band);
							
							if(selectPM_text == 'None'){
								$(this).find("*").prop("disabled",true);
							}else{
								$(this).prop("disabled",false);
								$(this).find("td:nth-child(2) *").prop("disabled",false);
								$(this).find("td:nth-child(2) span").attr("disabled",false);
							}
					  							  	
					  	});	

					}
										
			}
			
			/*เพิ่ม row เบี้ยเพิ่มพิเศษตาม PM Rate*/
			var num_PMRate = $("#tb_PM_Rate1_OL>tbody>tr[data-level='1']").length;
			for(var a=0;a<num_PMRate;a++){
				var PMRate_type = $("select.sl_STD_PM_Rate").eq(a).find("option:selected").text();
				var PMRate_id = $("select.sl_STD_PM_Rate").eq(a).attr("id");
					PMRate_id = Number(PMRate_id.replace("sl_PM_Type_OL",""));
				
				var dd_extra_rate = $("#sl_insurance_premium_Extra_ol option:selected").text();
				var dd_extra_rate_value = $("#sl_insurance_premium_Extra_ol option:selected").val();
				var file_pattern  = "";
				var onchange  = "";
				
				if(PMRate_type != "None"){	
					var numrow_extra = $("#tb_Extra_Rate_OL>tbody>tr").length;
					if(numrow_extra > 0){						
							var ExtraRate_type = $("#tb_Extra_Rate_OL>tbody>tr").eq(a).find("td:nth-child(1)").text();
							//var ExtraRate_id = $("#tb_Extra_Rate>tbody>tr").eq(a).attr("id");
							   // ExtraRate_id = Number(ExtraRate_id.replace("tbody_Extra_Rate",""));
							    
							if(ExtraRate_type != PMRate_type){    
								$("#tb_Extra_Rate_OL>tbody>tr").eq(a).remove();
								var numrow_extra2 = $("#tb_Extra_Rate_OL>tbody>tr").length;
								if(numrow_extra2 > 0){
									var aa = $("#tb_Extra_Rate_OL>tbody>tr:last-child").attr("id");
									aa = Number(aa.replace("tbody_Extra_Rate_OL",""))+1;
								}else{
									var aa = 1;
								}							
							}else{
								var aa = $("#tb_Extra_Rate_OL>tbody>tr:last-child").attr("id");
								aa = Number(aa.replace("tbody_Extra_Rate_OL",""))+1;
							}

							if(ExtraRate_type != PMRate_type){									
								var row_extra = "<tr id='tbody_Extra_Rate_OL"+aa+"'>"+
								"<td class='borderBlack vertical-middle'><label>"+PMRate_type+"</label></td>"+
								"<td class='borderBlack'>"+
								  	"<div id='div_fileExRate"+aa+"_OL' class='input-group'>"+
								  	 "<input type='hidden' id='ext_rateCat_OL"+aa+"' value=''>"+
									 "<input type='hidden' id='ext_rateLayout_OL"+aa+"' value=''>"+
									 "<input type='hidden' id='ext_fileID_OL"+aa+"' value=''>"+
									"<input type='text' class='form-control' id='fileuploads_ExtraRateText"+aa+"_OL' readonly>"+ 
										"<label class='input-group-btn'>"+ 
										  "<span id='spanExtraRate"+aa+"_OL' class='btn btn-primary'>"+
										  	"<font id='validate_extrarate"+aa+"_OL' style='color: red;'>*</font>..."+
										  		"<input id='fileuploads_ExtraRate"+aa+"_OL' type='file' accept='text/plain' style='display: none;'>"+ 
										  "</span>"+
										 "</label>"+
									"</div>"+
								 "</td>"+
								 "<td class='borderBlack'>"+
								 	"<a id='span_Extra_Rateopen_OL_"+aa+"' class='active_grey' disabled>"+
										"<span class='glyphicon glyphicon-eye-open activecolorgray' disabled></span>"+
									"</a>"+							 	
								 "</td>"+
								 "<td class='borderBlack'>"+
									 "<a id='span_Extra_Ratedownload_OL_"+aa+"' class='active_grey' disabled>"+
										"<span class='glyphicon glyphicon-download-alt activecolorgray' disabled></span>"+
									 "</a>"+
								"</td>"+
								"</tr>";								
								
								$("#tb_Extra_Rate_OL>tbody").append(row_extra);
														
							}
					}else{
						var aa=1;
						var row_extra = "<tr id='tbody_Extra_Rate_OL"+aa+"'>"+
						"<td class='borderBlack vertical-middle'><label>"+PMRate_type+"</label></td>"+
						"<td class='borderBlack'>"+
						  	"<div id='div_fileExRate"+aa+"_OL' class='input-group'>"+
						  	 "<input type='hidden' id='ext_rateCat_OL"+aa+"' value=''>"+
							 "<input type='hidden' id='ext_rateLayout_OL"+aa+"' value=''>"+
							 "<input type='hidden' id='ext_fileID_OL"+aa+"' value=''>"+
							"<input type='text' class='form-control' id='fileuploads_ExtraRateText"+aa+"_OL' readonly>"+ 
								"<label class='input-group-btn'>"+ 
								  "<span id='spanExtraRate"+aa+"_OL' class='btn btn-primary'>"+
								  	"<font id='validate_extrarate"+aa+"_OL' style='color: red;'>*</font>..."+
								  		"<input id='fileuploads_ExtraRate"+aa+"_OL' type='file' accept='text/plain' style='display: none;'>"+ 
								  "</span>"+
								 "</label>"+
							"</div>"+
						 "</td>"+
						 "<td class='borderBlack'>"+
						 	"<a id='span_Extra_Rateopen_OL_"+aa+"' class='active_grey' disabled>"+
								"<span class='glyphicon glyphicon-eye-open activecolorgray' disabled></span>"+
							"</a>"+							 	
						 "</td>"+
						 "<td class='borderBlack'>"+
							 "<a id='span_Extra_Ratedownload_OL_"+aa+"' class='active_grey' disabled>"+
								"<span class='glyphicon glyphicon-download-alt activecolorgray' disabled></span>"+
							 "</a>"+
						"</td>"+
						"</tr>";
						$("#tb_Extra_Rate_OL>tbody").append(row_extra);
					}
					
					if(dd_extra_rate != "None"){
						file_pattern = dd_extra_rate_value+PMRate_type+"_"+baseplanCode_CL;
						var rate_cat = $("#sl_insurance_premium_Extra_ol option:selected").attr("data-ratecat");
						var rate_layout = $("#sl_insurance_premium_Extra_ol option:selected").attr("data-layout");
						//onchange = "selectFileRate_OL(4,'s','fileuploads_ExtraRate"+aa+"_OL','"+file_pattern+"','','sl_insurance_premium_Extra_ol','span_Extra_Rateopen_OL_"+aa+"')";
						onchange = "selectFileTXTMain_OL("+rate_cat+", 4,'fileuploads_ExtraRate"+aa+"_OL',"+rate_layout+",'','','"+file_pattern+"','','','span_Extra_Rateopen_OL_"+aa+"')";
						
						$("#fileuploads_ExtraRateText"+aa+"_OL").attr("placeholder",file_pattern+".txt");
						$("#fileuploads_ExtraRate"+aa+"_OL").attr("onchange",onchange);
					}
					
				}
			}	
			
			if(dd_extra_rate != "None" && PMRate_type != "None"){
				$("#tb_Extra_Rate_OL>tbody>tr").find("td:nth-child(2) span").attr("disabled",false);
				$("#tb_Extra_Rate_OL>tbody>tr").find("td:nth-child(2) input[type='file']").attr("disabled",false);
			}else{
				$("#tb_Extra_Rate_OL>tbody>tr").find("td:nth-child(2) span").attr("disabled",true);
				$("#tb_Extra_Rate_OL>tbody>tr").find("td:nth-child(2) input[type='file']").attr("disabled",true);
			}			
	}	
	/**/	
}

function findRateCat(table,tr_id,rate_cat,sub_cat){
	// FIXME
	var type = "";
	var rate_ageSpeci = [];
	var rate_ageBand = [];
	var rate_ageSum = [];
	var arr_rateCat = "";
	/*ตาราง เบี้ยมาตรฐาน PM*/
	if(table == "PM"){
		if($("#rd_cal_insurance_ol").is(':checked')){	//คำนวณเบี้ยจากทุนประกัน	
			
			if(rate_cat == 's'){		//Age Speci													
				var type_pm = $("#tb_PM_Rate1_OL #tbody_PM_Rate_OL"+tr_id).find('td:nth-child(2) select>option:selected').val();
			}else{						//Age Band
				var type_pm_dataID = $("#tb_PM_Rate1_OL tbody>tr[data-id='"+tr_id+"']").data('group');
				var type_pm = $("#tb_PM_Rate1_OL #tbody_PM_Rate_OL"+type_pm_dataID).find('td:nth-child(2) select>option:selected').val();
			}
			type = type_pm;
			obj = {};
			obj["rate_cat"] = $("#rateCat_tbStardard_OL").val();
			rate_ageSpeci.push(obj)
			obj = {};
			obj["rate_cat"] = $("#rateCat_tbStardard_P_OL").val();
			rate_ageSpeci.push(obj)
			obj = {};
			obj["rate_cat"] = $("#rateCat_tbStardard_age_OL").val();
			rate_ageBand.push(obj)
			obj = {};
			obj["rate_cat"] = $("#rateCat_tbStardard_age_P_OL").val();
			rate_ageBand.push(obj)
			obj = {};
			obj["rate_cat"] = $("#rateCat_tbStardard_OL").val();
			rate_ageSum.push(obj)
			obj = {};
			obj["rate_cat"] = $("#rateCat_tbStardard_P_OL").val();
			rate_ageSum.push(obj)
			obj = {};
			obj["rate_cat"] = $("#rateCat_tbStardard_age_OL").val();
			rate_ageSum.push(obj)
			obj = {};
			obj["rate_cat"] = $("#rateCat_tbStardard_age_P_OL").val();
			rate_ageSum.push(obj)
		}else{
			
			if(rate_cat == 's'){		//Age Speci													
				var type_pm = $("#tb_PM_Rate1_OL #tbody_PM_Rate_OL"+tr_id).find('td:nth-child(2) select>option:selected').val();
			}else{						//Age Band
				var type_pm_dataID = $("#tb_PM_Rate1_OL tbody>tr[data-id='"+tr_id+"']").data('group');
				var type_pm = $("#tb_PM_Rate1_OL #tbody_PM_Rate_OL"+type_pm_dataID).find('td:nth-child(2) select>option:selected').val();
			}
			type = type_pm;
			obj = {};
			obj["rate_cat"] = $("#rateCat_capital_OL").val();
			rate_ageSpeci.push(obj)
			obj = {};
			obj["rate_cat"] = $("#rateCat_capital_P_OL").val();
			rate_ageSpeci.push(obj)
			obj = {};
			obj["rate_cat"] = $("#rateSubCat_capital_OL").val();
			rate_ageBand.push(obj)
			obj = {};
			obj["rate_cat"] = $("#rateSubCat_capital_P_OL").val();
			rate_ageBand.push(obj)
			obj = {};
			obj["rate_cat"] = $("#rateCat_capital_OL").val();
			rate_ageSum.push(obj)
			obj = {};
			obj["rate_cat"] = $("#rateCat_capital_P_OL").val();
			rate_ageSum.push(obj)
			obj = {};
			obj["rate_cat"] = $("#rateSubCat_capital_OL").val();
			rate_ageSum.push(obj)
			obj = {};
			obj["rate_cat"] = $("#rateSubCat_capital_P_OL").val();
			rate_ageSum.push(obj)
		}
	}
	/*ตาราง เบี้ยเพิ่มพิเศษ EM*/
	else if(table == "EM"){
		if(rate_cat == 's'){		//Age Speci													
			var type_em = $("#tb_Extra_Rate_OL #tbody_Extra_Rate_OL"+tr_id).find('td:nth-child(1) label').text();
			type = type_em;
			obj = {};
			obj["rate_cat"] = $("#rateCat_tbExtra_OL").val();
			rate_ageSpeci.push(obj)
			obj = {};
			obj["rate_cat"] = $("#rateCat_tbExtra_P_OL").val();
			rate_ageSpeci.push(obj)
			obj = {};
			obj["rate_cat"] = $("#rateCat_tbExtra_OL").val();
			rate_ageSum.push(obj)
			obj = {};
			obj["rate_cat"] = $("#rateCat_tbExtra_P_OL").val();
			rate_ageSum.push(obj)
		}
	}
	/* ตาราง CV */
	else if(table == "CV"){
		if(rate_cat == 's'){	
			var type_cv = $("#tb_RateValue1_OL #tbody_Rate_Value_OL"+tr_id).find('td:nth-child(1) label').text();	
		}else{						//Age Band
			var type_cv_dataID = $("#tb_RateValue1_OL tbody>tr[data-id='"+tr_id+"']").data('group');
			var type_cv = $("#tb_RateValue1_OL #tbody_Rate_Value_OL"+type_cv_dataID).find('td:nth-child(1) label').text();
		}
		type = type_cv;
			obj = {};
			obj["rate_cat"] = $("#cv_rate_Agespecific_OL").val();
			rate_ageSpeci.push(obj)
			obj = {};
			obj["rate_cat"] = $("#cv_rate_Agespecific_P_OL").val();
			rate_ageSpeci.push(obj)
			obj = {};
			obj["rate_cat"] = $("#cv_rate_AgeBand_OL").val();
			rate_ageBand.push(obj)
			obj = {};
			obj["rate_cat"] = $("#cv_rate_AgeBand_P_OL").val();
			rate_ageBand.push(obj)
			obj = {};
			obj["rate_cat"] = $("#cv_rate_Agespecific_OL").val();
			rate_ageSum.push(obj)
			obj = {};
			obj["rate_cat"] = $("#cv_rate_Agespecific_P_OL").val();
			rate_ageSum.push(obj)
			obj = {};
			obj["rate_cat"] = $("#cv_rate_AgeBand_OL").val();
			rate_ageSum.push(obj)
			obj = {};
			obj["rate_cat"] = $("#cv_rate_AgeBand_P_OL").val();
			rate_ageSum.push(obj)
	}
	
	var result_rateCat = [];
	var datajson = {
			"method"	: "searchRateCatByAgeType",
			"type"      : type,
			"age_speci" : JSON.stringify(rate_ageSpeci),
			"age_Band"  : JSON.stringify(rate_ageBand),
			"age_Sum"   : JSON.stringify(rate_ageSum),
			"sub_cat"	: sub_cat
		}
	console.log(datajson)				
	$.ajax({
	    type: "POST",
	    url : "BasePlanOL_GetData_Servlet",
	    data: datajson,   
	    async: false,
	    success : function(response) {	
	    	
	    	if(rate_cat == 's'){
		    	for (i in response.RateCat_result) {
		    		var obj_rate = response.RateCat_result[i];
		    		if( obj_rate.type_rate == "AS" && obj_rate.sub_code == type){
		    			//result_rateCat = obj_rate.rate_cat_id
		    			result_rateCat.push(obj_rate.rate_cat_id, obj_rate.rate_layout_id)
		    		}
		    	}
	    	}else{
	    		for (i in response.RateCat_result) {
		    		var obj_rate = response.RateCat_result[i];
		    		if( obj_rate.type_rate == "AB" && obj_rate.sub_code == type){
		    			//result_rateCat = obj_rate.rate_cat_id
		    			result_rateCat.push(obj_rate.rate_cat_id, obj_rate.rate_layout_id)
		    		}
		    	}
	    	}
	    	
	    	arr_rateCat = result_rateCat.join(",");
	    	
	    	/*check null*/
	    	if(result_rateCat == ""){
	    		alert("err")
	    	}
	    	
	    },
	    error : function(response) {	
	    }
	});			
	return arr_rateCat;
}

function selectFileRate_OL(type,rate_cat,select_file,file_format,file_format2,dd_opt,cv_btn){
	var tbl_name = "";
	var tbl_col = "";
	var dd_opt = dd_opt;
	var cv_button = cv_btn;
	var select_file_name = "";
	var validateFile = "";
	var downloadFile = "";
	var head_modal = "";
	var head_modal_text = "";
	var cov_code = $("#pass_Insurance_coverage_ol").val();
	var tr_tbl = "";
	var data_level = "";
	var data_group = "";
	var rate_type = "";
	var rate_band_type = "";
	var modal_download = "";
	/*file*/
	var file_id = 0;
	var file_type_id = 3;
	var file_path = "";
	var file_pattern = "";
	var user_code = "0000000";	        

	/*ตามแผนความคุ้มครอง*/
	if(type == 1){
		tbl_name = "tbl_PMRatePlan_OL";
		tblAuto_name = "tbl_PMRatePlanAuto_OL";
		modal_name = "modal_PMRateAuto_OL";
		modal_cv = "modal_PMRate_OL";
		tbl_col = 61;		
		file_button1 = "btn_submit_PMRatePlanAuto_OL";
		file_button2 = "btn_cancel_PMRatePlanAuto_OL";
		modal_download = "";
		select_file_name = select_file.replace("fileuploads_PMRate","");
		select_file_name = select_file_name.replace("_OL","");
		selectFile = "fileuploads_PMRate"+select_file_name+"_OL";
		textFile = "fileuploads_PMRateText"+select_file_name+"_OL";
		
		validateFile = "validate_rate"+select_file_name+"_OL";
		downloadFile = "span_PM_Ratedownload_OL_"+select_file_name;
		fileID = "rm_fileID_OL"+select_file_name;
		
		rate_cat_id = findRateCat("PM",select_file_name,rate_cat)
		
		/*if(rate_cat == 's'){
			rate_cat_id = $("#rateCat_tbStardard_OL").val();
		}else{
			rate_cat_id = $("#rateCat_tbStardard_age_OL").val();	
		}*/
		
		sub_cat_id = $("#sl_menu3_insurance_premium_ol option:selected").attr("data-subcat");
		/*ต่อทุน 10,000 บาท*/
	}else if(type == 2){
		tbl_name = "tbl_PMRatePlan4Col_OL";
		tblAuto_name = "tbl_PMRatePlan4ColAuto_OL";
		modal_name = "modal_PMRate4ColAuto_OL";
		modal_cv = "modal_PMRate4Col_OL";
		tbl_col = 41;		
		file_button1 = "btn_submit_PMRatePlan4ColAuto_OL";
		file_button2 = "btn_cancel_PMRatePlan4ColAuto_OL";
		modal_download = "download_tbl_PMRatePlan4Col_OL";
		select_file_name = select_file.replace("fileuploads_PMRate","");
		select_file_name = select_file_name.replace("_OL","");
		selectFile = "fileuploads_PMRate"+select_file_name+"_OL";
		textFile = "fileuploads_PMRateText"+select_file_name+"_OL";
		
		validateFile = "validate_rate"+select_file_name+"_OL";
		downloadFile = "span_PM_Ratedownload_OL_"+select_file_name;
		fileID = "rm_fileID_OL"+select_file_name;
		
		rate_cat_id = findRateCat("PM",select_file_name,rate_cat)
		/*if(rate_cat == 's'){
			rate_cat_id = $("#rateCat_tbStardard_OL").val();
		}else{
			rate_cat_id = $("#rateCat_tbStardard_age_OL").val();	
		}*/
		
		sub_cat_id = $("#sl_menu3_insurance_premium_ol option:selected").attr("data-subcat");
		/*ต่อทุน 100,000 บาท*/
	}else if(type == 3){
		tbl_name = "tbl_PMRatePlan4Col_OL";
		tblAuto_name = "tbl_PMRatePlan4ColAuto_OL";
		modal_name = "modal_PMRate4ColAuto_OL";
		modal_cv = "modal_PMRate4Col_OL";
		tbl_col = 41;		
		file_button1 = "btn_submit_PMRatePlan4ColAuto_OL";
		file_button2 = "btn_cancel_PMRatePlan4ColAuto_OL";
		modal_download = "download_tbl_PMRatePlan4Col_OL";
		select_file_name = select_file.replace("fileuploads_PMRate","");
		select_file_name = select_file_name.replace("_OL","");
		selectFile = "fileuploads_PMRate"+select_file_name+"_OL";
		textFile = "fileuploads_PMRateText"+select_file_name+"_OL";
		
		validateFile = "validate_rate"+select_file_name+"_OL";
		downloadFile = "span_PM_Ratedownload_OL_"+select_file_name;
		fileID = "rm_fileID_OL"+select_file_name;
		
		/*if(rate_cat == 's'){
			rate_cat_id = $("#rateCat_tbStardard_OL").val();
		}else{
			rate_cat_id = $("#rateCat_tbStardard_age_OL").val();	
		}*/
		rate_cat_id = findRateCat("PM",select_file_name,rate_cat)
		
		sub_cat_id = $("#sl_menu3_insurance_premium_ol option:selected").attr("data-subcat");
		/*เบี้ยเพิ่มพิเศษ*/
	}else if(type == 4){
		tbl_name = "tbl_ExtraRatePlan_OL";
		tblAuto_name = "tbl_ExtraRatePlanAuto_OL";
		modal_name = "modal_ExtraRateAuto_OL";
		modal_cv = "modal_ExtraRate_OL";
		tbl_col = 51;		
		file_button1 = "btn_submit_ExtraRatePlanAuto_OL";
		file_button2 = "btn_cancel_ExtraRatePlanAuto_OL";
		modal_download = "download_tbl_ExtraRatePlan_OL";
		select_file_name = select_file.replace("fileuploads_ExtraRate","");
		select_file_name = select_file_name.replace("_OL","");
		selectFile = "fileuploads_ExtraRate"+select_file_name+"_OL";
		textFile = "fileuploads_ExtraRateText"+select_file_name+"_OL";
		
		validateFile = "validate_extrarate"+select_file_name+"_OL";
		downloadFile = "span_Extra_Ratedownload_OL_"+select_file_name;
		fileID = "ext_fileID_OL"+select_file_name;

		rate_cat_id = findRateCat("EM",select_file_name,rate_cat)
		//rate_cat_id = $("#rateCat_tbExtra_OL").val();
				
		sub_cat_id = $("#sl_insurance_premium_Extra_ol option:selected").attr("data-subcat");
		/*ตารางมูลค่ากรมธรรม์*/
	}else if(type == 5){
		tbl_name = "tbl_StandardRisk_OL";
		tblAuto_name = "tbl_StandardRiskAuto_OL";
		modal_name = "cvStandardRiskAuto_OL";
		modal_cv = "cvStandardRisk_OL";
		tbl_col = 12;
		file_button1 = "btn_submit_StandardRiskAuto_OL";
		file_button2 = "btn_cancel_StandardRiskAuto_OL";
		modal_download = "download_tbl_StandardRisk_OL"; 
			
 		select_file_name = select_file.replace("fileuploads_RateValue","");
		select_file_name = select_file_name.replace("_OL","");
		selectFile = "fileuploads_RateValue"+select_file_name+"_OL";
		textFile = "fileuploads_RateValueText"+select_file_name+"_OL";
		
		//validateFile = "validate_RateValue"+select_file_name+"_CL";
		validateFile = "";
		downloadFile = "span_RateValuedownload_OL_"+select_file_name;
		fileID = "cv_fileID_OL"+select_file_name;
		
		rate_cat_id = findRateCat("CV",select_file_name,rate_cat)
		/*if(rate_cat == 's'){
			rate_cat_id = $("#cv_rate_Agespecific_OL").val();
		}else{
			rate_cat_id = $("#cv_rate_AgeBand_OL").val();	
		}*/
		
		sub_cat_id = $("#dbBox1_OL option:selected").attr("data-subcat");
	}else if(type == 6){
		/*Tab basic ตารางที่ใช้ในการคำนวณเบี้ย - ตารางที่ใช้*/
		tbl_name = "tbl_calInsuranceAuto_OL";
		tblAuto_name = "tbl_calInsuranceAuto_OL";
		modal_name = "modal_calInsuranceAuto_OL";
		modal_cv = "cvStandardRisk_OL";
		tbl_col = 41;
		file_button1 = "btn_submit_calInsuranceAuto_OL";
		file_button2 = "btn_cancel_calInsuranceAuto_OL";
		modal_download = "download_tbl_StandardRisk_OL";		
		select_file_name = select_file.replace("fileuploads_calPM_","");
		//select_file_name = select_file_name.replace("_OL","");
		
		selectFile = "fileuploads_calPM_"+select_file_name;
		textFile = "fileuploads_calPMText_"+select_file_name;
		
		validateFile = "";
		downloadFile = "";
		//fileID = "cv_fileID_OL"+select_file_name;
		
		/*if(rate_cat == 's'){
			rate_cat_id = $("#cv_rate_Agespecific_OL").val();
		}else{
			rate_cat_id = $("#cv_rate_AgeBand_OL").val();	
		}
		
		sub_cat_id = $("#dbBox1_OL option:selected").attr("data-subcat");*/
	}else if(type == 41){
		tbl_name = "tbl_Capital_OL";
		tblAuto_name = "tbl_CapitalAuto_OL";
		modal_name = "CapitalAuto_OL";
		modal_cv = "Capital_OL";
		tbl_col = 41;		
		file_button1 = "btn_submit_CapitalAuto_OL";
		file_button2 = "btn_cancel_CapitalAuto_OL";
		modal_download = "download_tbl_StandardRisk_OL";
		select_file_name = select_file.replace("fileuploads_PMRate","");
		select_file_name = select_file_name.replace("_OL","");
		selectFile = "fileuploads_PMRate"+select_file_name+"_OL";
		textFile = "fileuploads_PMRateText"+select_file_name+"_OL";
		
		validateFile = "validate_rate"+select_file_name+"_OL";
		downloadFile = "span_PM_Ratedownload_OL_"+select_file_name;
		fileID = "rm_fileID_OL"+select_file_name;
		
		rate_cat_id = findRateCat("PM",select_file_name,rate_cat)
		/*if(rate_cat == 's'){
			rate_cat_id = $("#rateCat_capital_OL").val();
		}else{
			rate_cat_id = $("#rateSubCat_capital_OL").val();	
		}*/
		
		sub_cat_id = $("#sl_menu3_insurance_premium_ol option:selected").attr("data-subcat");
		
		if(sub_cat_id == 16){
			tbl_col = 62;
		}else if(sub_cat_id == 17){
			tbl_col = 53;
		}
		
	}
	
	/*คำนวณทุนจากเบี้ยประกัน*/
	if(type == 41){
		$("#"+tblAuto_name+" thead>tr").remove();
		$("#"+tbl_name+" thead>tr").remove();
		var thead = "";
		if(sub_cat_id == 16){
			thead = "<tr style='background-color: #EEEEEE;'>"+
						"<th class='text-center'>Plan</th>"+
						"<th class='text-center'>Sex</th>"+
						"<th class='text-center'>Prem</th>"+
						"<th class='text-center'>Entry Age</th>"+
						"<th class='text-center'>SA</th>"+
						"<th class='text-center'>Blank</th>"+
					"</tr>";
		}else if(sub_cat_id == 17){
			thead = "<tr style='background-color: #EEEEEE;'>"+
							"<th class='text-center'>Plan</th>"+
							"<th class='text-center'>Sex</th>"+
							"<th class='text-center'>Prem</th>"+
							"<th class='text-center'>Entry Age</th>"+
							"<th class='text-center'>SA</th>"+
						"</tr>";
		}
		
		$("#"+tblAuto_name+" thead").append(thead);
		$("#"+tbl_name+" thead").append(thead);
	}
	
	
	$("#"+selectFile).click(function () {
	    this.value = null;	   
	});

	$("#"+tblAuto_name+" tbody").empty();
	$("#"+tbl_name+" tbody").empty();
	var file_name = $("#"+selectFile).val().replace(/\\/g, '/').replace(/.*\//, '');
		file_path = $("#"+selectFile).val();
		
	if($("#"+textFile).val() == ""){
		file_id = "";
	}else{
		file_id = $("#"+fileID).val();
	}	
	//$("#select_file_"+select_file+"_CL").unbind("change");
	$("#"+modal_name+" .modal-header>h4>span").html(file_name);
	//$("#"+modal_cv+" .modal-header>h4>span").html(" ("+dd_text+")");
	$("#"+file_button1).unbind();
	
	/*file pattern*/	
	if(type == 1 || type == 2 || type == 3 || type == 41){
		tr_tbl = $("#tbody_PM_Rate_OL"+select_file_name);
		data_level = $(tr_tbl).attr("data-level");
		
		if(data_level == 1){
			rate_type = $(tr_tbl).find("td:nth-child(2) select>option:selected").text();
			
			file_pattern = file_name.replace(cov_code, "{Code}");
			file_pattern = file_pattern.replace(rate_type, "{ประเภท}");
		}else{
			data_group = $(tr_tbl).attr("data-group");
			rate_type = $("#tbody_PM_Rate_OL"+data_group).find("td:nth-child(2) select>option:selected").text();
			rate_band_type = $(tr_tbl).find("td:nth-child(2) label").text();
			
			file_pattern = file_name.replace(cov_code, "{Code}");
			file_pattern = file_pattern.replace(rate_type, "{ประเภท}");
			file_pattern = file_pattern.replace(rate_band_type, "{Bx}");
		}		
	}else if(type == 4){
		tr_tbl = $("#tbody_Extra_Rate_OL"+select_file_name);
		rate_type = $(tr_tbl).find("td:nth-child(1) label").text();
		
		file_pattern = file_name.replace(cov_code, "{Code}");
		file_pattern = file_pattern.replace(rate_type, "{ประเภท}");
	}else if(type == 5){
		tr_tbl = $("#tbody_Rate_Value_OL"+select_file_name);
		data_level = $(tr_tbl).attr("data-level");
		
		if(data_level == 1){
			rate_type = $(tr_tbl).find("td:nth-child(1) label").text();
			
			file_pattern = file_name.replace(cov_code, "{Code}");
			file_pattern = file_pattern.replace(rate_type, "{ประเภท}");
		}else{
			data_group = $(tr_tbl).attr("data-group");
			rate_type = $("#tbody_Rate_Value_OL"+data_group).find("td:nth-child(1) label").text();
			rate_band_type = $(tr_tbl).find("td:nth-child(1) label").text();
			
			file_pattern = file_name.replace(cov_code, "{Code}");
			file_pattern = file_pattern.replace(rate_type, "{ประเภท}");
			file_pattern = file_pattern.replace(rate_band_type, "{Bx}");
		}
	}		
	
	//alert(file_pattern);
		
	if(file_format2 != ""){
		if(check_filename(selectFile, file_format, file_format2) == false){
			if(validateFile != ""){
				$("#"+validateFile).css("display", "inline-block");
			}
			$("#"+textFile).val("");
			$("#"+selectFile).val("");
			$('#'+cv_button).prop('disabled', true);		
			$('#'+cv_button+">span").removeClass("activecolorblue").addClass("activecolorgray");
			$('#'+downloadFile+">span").removeClass("activecolorblue").addClass("activecolorgray");
		}else{
			openFile(event,selectFile,tbl_name,tbl_col);
			openFile(event,selectFile,tblAuto_name,tbl_col);
			
			$("#base64_fileTXT_OL").val("");
			$("#"+modal_name).modal("show");	
			
			convertToBase64_OL(selectFile, file_type_id)
			$("#"+file_button1).unbind();
			$("#"+file_button1).click(function() {
				/*save file*/				
				//set_Filevalue(type,select_file_name,file_id,file_type_id,file_name,file_path,file_pattern,rate_cat_id,sub_cat_id,user_code);		
				/*end save file*/
				$("#modal_waiting").modal('show');
				 var base64 = $("#base64_fileTXT_OL").val();
				 if(base64 != ""){
					 var dateTime = getCurrentDate();
		    		 var file_name_update = "3_"+dateTime+".txt";
		    		 
		    		 		datajson = {				        	
					    		"method" : "uploadFile_txt",
					    		"passInsurance" : $("#pass_Insurance_coverage_ol").val(),
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
						 	    	
						 	    	var obj_ref = response.upload_ref;
						 	    	console.log(obj_ref)
						 	    	
									datajson = {				        	
											file_id 		: file_id,
											file_type_id 	: file_type_id,
											file_name 		: file_name,
											file_url		: obj_ref,
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
									    	if(type == 1 || type == 2 || type == 3 || type == 41){
									    		/*PM_Rate*/
									    		$("#rm_rateCat_OL"+select_file_name).val(rate_cat_id);
									    		$("#rm_rateLayout_OL"+select_file_name).val(response.rate_layout_id);
									    		$("#rm_fileID_OL"+select_file_name).val(response.file_id);
									    	}else if(type == 4){
									    		/*Extra_Rate*/
									    		$("#ext_rateCat_OL"+select_file_name).val(rate_cat_id);
									    		$("#ext_rateLayout_OL"+select_file_name).val(response.rate_layout_id);
									    		$("#ext_fileID_OL"+select_file_name).val(response.file_id);
									    	}else if(type == 5){
									    		/*CV_Rate*/
									    		$("#cv_rateCat_OL"+select_file_name).val(rate_cat_id);
									    		$("#cv_rateLayout_OL"+select_file_name).val(response.rate_layout_id);
									    		$("#cv_fileID_OL"+select_file_name).val(response.file_id);
									    	}
									    	
									    	$("#"+textFile).val(file_name);
											
											if(validateFile != ""){
												$("#"+validateFile).css("display", "none");
											}
											
											$('#'+cv_button+">span").removeClass("activecolorgray").addClass("activecolorblue");
//											$('#'+cv_button).attr("onclick","open_modalCV_OL("+type+",this.id)");
											$("#"+downloadFile+">span").removeClass("activecolorgray").addClass("activecolorblue").attr("onclick", "openFile_target('"+file_name+"','"+obj_ref+"','txt_download')");
											$('#'+cv_button+">span").attr("onclick", "openFileTextBasePlan_OL('"+file_name+"','"+obj_ref+"',"+tbl_col+",'"+tbl_name+"','"+modal_cv+"')");
									    	$("#"+modal_download).attr("onclick", "openFile_target('"+file_name+"','"+obj_ref+"','txt_download')");
											$("#modal_waiting").modal('hide');
											$("body").addClass("body_nopadding");
									    },
									    error : function(response) {	
									    	//console.log("save file error");
											message = "ไม่สามารถบันทึกไฟล์ได้";
											alertError(message);
											
											$("#"+textFile).val("");
									    }
									});	
						 	    }
						    })
				 		}
				

			});
			
			$("#"+file_button2).click(function() {
				$("#"+textFile).val("");				
				$('#'+cv_button).prop('disabled', true);
				$('#'+cv_button+">span").removeClass("activecolorblue").addClass("activecolorgray");
			});
		}	
	}else{	
		if(check_filename(selectFile, file_format, "") == false){
			if(validateFile != ""){
				$("#"+validateFile).css("display", "inline-block");
			}
			$("#"+textFile).val("");
			$("#"+selectFile).val("");
			$('#'+cv_button).prop('disabled', true);		
			$('#'+cv_button+">span").removeClass("activecolorblue").addClass("activecolorgray");
			$('#'+downloadFile+">span").removeClass("activecolorblue").addClass("activecolorgray");
		}else{
			openFile(event,selectFile,tbl_name,tbl_col);
			openFile(event,selectFile,tblAuto_name,tbl_col);
			$("#base64_fileTXT_OL").val("");
			$("#"+modal_name).modal("show");	
			
			convertToBase64_OL(selectFile, file_type_id)
			
			$("#"+file_button1).unbind();
			$("#"+file_button1).click(function() {
				
				/*save file*/
				//set_Filevalue(type,select_file_name,file_id,file_type_id,file_name,file_path,file_pattern,rate_cat_id,sub_cat_id,user_code);		
				/*end save file*/
				$("#modal_waiting").modal('show');
				 var base64 = $("#base64_fileTXT_OL").val();
				 if(base64 != ""){
					 var dateTime = getCurrentDate();
		    		 var file_name_update = "3_"+dateTime+".txt";
		    		 
		    		 		datajson = {				        	
					    		"method" : "uploadFile_txt",
					    		"passInsurance" : $("#pass_Insurance_coverage_ol").val(),
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
						 	    	
						 	    	var obj_ref = response.upload_ref;
						 	    	console.log(obj_ref)
									datajson = {				        	
											file_id 		: file_id,
											file_type_id 	: file_type_id,
											file_name 		: file_name,
											file_url		: obj_ref,
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
									    	if(type == 1 || type == 2 || type == 3 || type == 41){
									    		/*PM_Rate*/
									    		
									    		$("#rm_rateCat_OL"+select_file_name).val(rate_cat_id);
									    		$("#rm_rateLayout_OL"+select_file_name).val(response.rate_layout_id);
									    		$("#rm_fileID_OL"+select_file_name).val(response.file_id);
									    	}else if(type == 4){
									    		/*Extra_Rate*/
									    		$("#ext_rateCat_OL"+select_file_name).val(rate_cat_id);
									    		$("#ext_rateLayout_OL"+select_file_name).val(response.rate_layout_id);
									    		$("#ext_fileID_OL"+select_file_name).val(response.file_id);
									    	}else if(type == 5){
									    		/*CV_Rate*/
									    		$("#cv_rateCat_OL"+select_file_name).val(rate_cat_id);
									    		$("#cv_rateLayout_OL"+select_file_name).val(response.rate_layout_id);
									    		$("#cv_fileID_OL"+select_file_name).val(response.file_id);
									    	}
									    	
									    	$("#"+textFile).val(file_name);
											if(validateFile != ""){
												$("#"+validateFile).css("display", "none");	
											}
											$('#'+cv_button+">span").removeClass("activecolorgray").addClass("activecolorblue");
//											$('#'+cv_button).attr("onclick","open_modalCV_OL("+type+",this.id)");
											$("#"+downloadFile+">span").removeClass("activecolorgray").addClass("activecolorblue").attr("onclick", "openFile_target('"+file_name+"','"+obj_ref+"','txt_download')");
											$('#'+cv_button+">span").attr("onclick", "openFileTextBasePlan_OL('"+file_name+"','"+obj_ref+"',"+tbl_col+",'"+tbl_name+"','"+modal_cv+"')");
											$("#modal_waiting").modal('hide');
											$("body").addClass("body_nopadding");
											$("#"+modal_download).attr("onclick", "openFile_target('"+file_name+"','"+obj_ref+"','txt_download')");
									    },
									    error : function(response) {	
									    	//console.log("save file error");
											message = "ไม่สามารถบันทึกไฟล์ได้";
											alertError(message);
											
											$("#"+textFile).val("");
									    }
									});	
						 	    }
						    })
				 		}
				

				/*$('#'+cv_button).click(function(){
					$("#"+modal_cv).modal('show');
				})*/
				
			});
			
			$("#"+file_button2).click(function() {
				$("#"+textFile).val("");
				$('#'+cv_button).prop('disabled', true);
				$('#'+cv_button+">span").removeClass("activecolorblue").addClass("activecolorgray");
			});
		}
	}	
}

function set_Filevalue_OL(type,id,file_id,file_type_id,file_name,file_path,file_pattern,rate_cat_id,sub_cat_id,user_code){
	datajson = {
			file_id			: file_id,
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
	    	if(type == 1 || type == 2 || type == 3 || type == 41){
	    		/*PM_Rate*/
	    		$("#rm_rateCat_OL"+select_file_name).val(rate_cat_id);	//pun add
	    		$("#rm_rateLayout_OL"+id).val(response.rate_layout_id);
	    		$("#rm_fileID_OL"+id).val(response.file_id);
	    	}else if(type == 4){
	    		/*Extra_Rate*/
	    		$("#ext_rateCat_OL"+id).val(rate_cat_id); 	//pun add
	    		$("#ext_rateLayout_OL"+id).val(response.rate_layout_id);
	    		$("#ext_fileID_OL"+id).val(response.file_id);
	    	}else if(type == 5){
	    		/*CV_Rate*/
	    		$("#cv_rateCat_OL"+id).val(rate_cat_id); 		//pun add
	    		$("#cv_rateLayout_OL"+id).val(response.rate_layout_id);
	    		$("#cv_fileID_OL"+id).val(response.file_id);
	    	}else if(type == 21){
	    		/*EM*/
	    		$("#em_rateLayout"+id+"_OL").val(response.rate_layout_id);
	    		$("#em_fileID"+id+"_OL").val(response.file_id);
	    	}else if(type == 22){
	    		/*SA*/
	    		$("#decrease_rateLayout"+id+"_OL").val(response.rate_layout_id);
	    		$("#decrease_fileID"+id+"_OL").val(response.file_id);
	    	}else if(type == 32){
	    		/*CV Low*/
	    		$("#cvLow_rateLayout"+id+"_OL").val(response.rate_layout_id);
	    		$("#cvLow_fileID"+id+"_OL").val(response.file_id);
	    	}else if(type == 33){
	    		/*Dis SA*/
	    		$("#dsc_rateLayout"+id+"_OL").val(response.rate_layout_id);
	    		$("#dsc_fileID"+id+"_OL").val(response.file_id);
	    	}else if(type == 11){
	    		/*คำนวณทุนจากเบี้ยประกัน*/
	    		$("#capital_rateLayout"+id+"_OL").val(response.rate_layout_id);
	    		$("#capital_fileID"+id+"_OL").val(response.file_id);
	    	}
	    		
	    	
	    	
	    },
	    error : function(response) {	
	    	console.log("save file error");
	    }
	});		
}

function open_modalCV_OL(type,id){
	var tbl_name = "";
	var rowID = "";
	var head_modal = "";
	var head_modal_text = "";
	if(type == 1){		
		tbl_name = "tb_PM_Rate1_OL";
		modal_cv = "modal_PMRate_OL";
		rowID = id.replace("span_PM_Rateopen_OL_","");
		head_modal = $("#"+tbl_name).find("#tbody_PM_Rate_OL"+rowID+" td:nth-child(3) input[type='text']").val();
		
	}else if(type == 2){
		tbl_name = "tb_PM_Rate1_OL";
		modal_cv = "modal_PMRate4Col_OL";
		rowID = id.replace("span_PM_Rateopen_OL_","");
		head_modal = $("#"+tbl_name).find("#tbody_PM_Rate_OL"+rowID+" td:nth-child(3) input[type='text']").val();
		
	}else if(type == 3){
		tbl_name = "tb_PM_Rate1_OL";
		modal_cv = "modal_PMRate4Col_OL";
		rowID = id.replace("span_PM_Rateopen_OL_","");
		head_modal = $("#"+tbl_name).find("#tbody_PM_Rate_OL"+rowID+" td:nth-child(3) input[type='text']").val();
		
	}else if(type == 4){
		tbl_name = "tb_Extra_Rate_OL";
		modal_cv = "modal_ExtraRate_OL";
		rowID = id.replace("span_Extra_Rateopen_OL_","");
		head_modal = $("#"+tbl_name).find("#tbody_Extra_Rate_OL"+rowID+" td:nth-child(2) input[type='text']").val();
	}else if(type == 5){;
		tbl_name = "tb_RateValue1_OL";
		modal_cv = "cvStandardRisk_OL";
		rowID = id.replace("span_RateValueopen_OL_","");
		head_modal = $("#"+tbl_name).find("#tbody_Rate_Value_OL"+rowID+" td:nth-child(2) input[type='text']").val();
	}else if(type == 6){;
		tbl_name = "";
		modal_cv = "modal_inputExtra_RateView_OL";
		rowID = "";
		head_modal = $("#input_fileCal_1_OL").val();
	}else if(type == 7){;
		tbl_name = "";
		modal_cv = "modal_inputSA_OL_Rate";
		rowID = "";
		head_modal = $("#input_fileCal_2_OL").val();
	}else if(type == 8){;
		tbl_name = "";
		modal_cv = "modal_inputDisSA_OL_Rate";
		rowID = "";
		head_modal = $("#input_fileCal_3_OL").val();
	}	
	
	$("#"+modal_cv+" .modal-header>h4>span").html(head_modal);
	$("#"+modal_cv).modal('show');
}

$(document).on('focusin', '#sl_insurance_premium_Extra_ol', function(){
	 $(this).data('val', $(this).val());
}).on('change','#sl_insurance_premium_Extra_ol', function(){
	var prev_rate = $(this).data('val');
	var current_rate = $(this).val();	
	
	var numrow = $("#tb_Extra_Rate_OL>tbody>tr").length;
	var select_text = $("#sl_insurance_premium_Extra_ol option:selected").text();
	var baseplanCode_CL = $("#pass_Insurance_coverage_ol").val();
	var file_layout = "";
	
	var check_file = 0;
	$("#tb_Extra_Rate_OL>tbody td:nth-child(2) :input[type='text']").each(function(index) {
		if($(this).val() != ""){
			check_file++;
		}
	});
	
	if(check_file > 0){					
		message = "เคยนำเข้าไฟล์ Extra_Rate ไว้แล้ว ต้องการเปลี่ยนตารางเบี้ยประกัน ใช่หรือไม่";
		alertValuePage_Warning2_OL(message);

		$("#btn_value_warning_submit2_OL").click(function(){
			check_file_extra_OL();
		});
		
		$("#btn_value_warning_cancel2_OL").click(function(){				
			 $("#modal_value_warning2_OL").modal('hide');
			 $("#sl_insurance_premium_Extra_ol").val(prev_rate).attr('selected', 'selected');
	     });
		
	}else{
		check_file_extra_OL();
	}		

function check_file_extra_OL(){

	for(var i=0; i<numrow; i++){
		var select_extra_text = $("#tb_Extra_Rate_OL>tbody>tr").eq(i).find("td:nth-child(1)").text();
		var select_extra_id = $("#tb_Extra_Rate_OL>tbody>tr").eq(i).attr("id");
			select_extra_id = Number(select_extra_id.replace("tbody_Extra_Rate_OL",""));
	
		file_layout = $("#sl_insurance_premium_Extra_ol option:selected").val();
		
		file_layout = file_layout+select_extra_text+"_"+baseplanCode_CL;
		rate_cat = $("#sl_insurance_premium_Extra_ol option:selected").attr("data-ratecat");
		rate_layout = $("#sl_insurance_premium_Extra_ol option:selected").attr("data-layout");
		
		//var uploadfile = "selectFileRate_OL(4,'s','fileuploads_ExtraRate"+select_extra_id+"_OL','"+file_layout+"','','sl_insurance_premium_Extra_ol','span_Extra_Rateopen_OL_"+select_extra_id+"')";		
		var uploadfile = "selectFileTXTMain_OL("+rate_cat+", 4,'fileuploads_ExtraRate"+select_extra_id+"_OL',"+rate_layout+",'','','"+file_layout+"','','','span_Extra_Rateopen_OL_"+select_extra_id+"');";		
		
		if(select_text != "None"){
			$("#fileuploads_ExtraRateText"+select_extra_id+"_OL").val("");
			$("#fileuploads_ExtraRate"+select_extra_id+"_OL").val(null);
			$("#fileuploads_ExtraRateText"+select_extra_id+"_OL").attr("placeholder",file_layout+".txt");
			$("#fileuploads_ExtraRate"+select_extra_id+"_OL").attr("onchange",uploadfile);
			$("#fileuploads_ExtraRate"+select_extra_id+"_OL").attr("disabled",false);
			$("#spanExtraRate"+select_extra_id+"_OL").attr("disabled",false);
			$("#validate_extrarate"+select_extra_id+"_OL").css("display","inline-block");
			$("#span_Extra_Rateopen_OL_"+select_extra_id+">span").removeClass("activecolorblue").addClass("activecolorgray");
			$("#span_Extra_Ratedownload_OL_"+select_extra_id+">span").removeClass("activecolorblue").addClass("activecolorgray");
		}else{
			$("#fileuploads_ExtraRateText"+select_extra_id+"_OL").val("");
			$("#fileuploads_ExtraRate"+select_extra_id+"_OL").val(null);
			$("#fileuploads_ExtraRateText"+select_extra_id+"_OL").attr("placeholder","");
			$("#fileuploads_ExtraRate"+select_extra_id+"_OL").removeAttr("onchange");
			$("#fileuploads_ExtraRate"+select_extra_id+"_OL").attr("disabled",true);
			$("#spanExtraRate"+select_extra_id+"_OL").attr("disabled",true);
			$("#validate_extrarate"+select_extra_id+"_OL").css("display","none");
			$("#span_Extra_Rateopen_OL_"+select_extra_id+">span").removeClass("activecolorblue").addClass("activecolorgray");
			$("#span_Extra_Ratedownload_OL_"+select_extra_id+">span").removeClass("activecolorblue").addClass("activecolorgray");
		}

	}
}
});

/*SA_CL*/
$(document).on('focusin', '#sl_Reduced_capital_Cal2_OL', function(){
	 $(this).data('val', $(this).val());
}).on('change','#sl_Reduced_capital_Cal2_OL', function(){
	var prev_rate = $(this).data('val');
	var current_rate = $(this).val();	
	
	var select_text = $("#sl_Reduced_capital_Cal2_OL option:selected").text();
	var baseplanCode_CL = $("#pass_Insurance_coverage_ol").val();
	var file_layout = "";

	if($("#input_fileCal_2_OL").val() != 0){					
		message = "เคยนำเข้าไฟล์ SA_Rate ไว้แล้ว ต้องการเปลี่ยนตารางเบี้ยประกัน ใช่หรือไม่";
		alertValuePage_Warning2_OL(message);

		$("#btn_value_warning_submit2_OL").click(function(){
			check_file_SA_OL();
		});
		
		$("#btn_value_warning_cancel2_OL").click(function(){				
			 $("#modal_value_warning2_OL").modal('hide');
			 $("#sl_Reduced_capital_Cal2_OL").val(prev_rate).attr('selected', 'selected');
	     });
		
	}else{
		check_file_SA_OL();
	}		

function check_file_SA_OL(){
		file_layout = $("#sl_Reduced_capital_Cal2_OL option:selected").val();
		file_layout_text = $("#sl_Reduced_capital_Cal2_OL option:selected").text();
		
		file_layout = file_layout+baseplanCode_CL;
		rate_cat = $("#sl_Reduced_capital_Cal2_OL option:selected").attr("data-ratecat");
		rate_layout = $("#sl_Reduced_capital_Cal2_OL option:selected").attr("data-layout");
		//var uploadfile = "selectFileCal_OL(2,'"+file_layout+"','select_fileCal_2_OL')";		
		var uploadfile = "selectFileTXTMain_OL("+rate_cat+", 5,'select_fileCal_2_OL',"+rate_layout+",'','','"+file_layout+"','','','cv_SAExtra_Rate_ol');";	
		
		if(file_layout_text != "None"){			
			$("#input_fileCal_2_OL").val("");
			$("#select_fileCal_2_OL").val(null);
			$("#input_fileCal_2_OL").attr("placeholder",file_layout+".txt");
			$("#select_fileCal_2_OL").attr("onchange",uploadfile);
			$("#select_fileCal_2_OL").attr("disabled",false);
			$("#spanBoxCal2_OL").attr("disabled",false);
			$("#cv_SAExtra_Rate_ol").attr("disabled",true);
			$("#validate_filerate2_OL").css("display","inline-block");
		}else{
			$("#input_fileCal_2_OL").val("");
			$("#select_fileCal_2_OL").val(null);
			$("#input_fileCal_2_OL").attr("placeholder","");
			$("#select_fileCal_2_OL").attr("onchange","");
			$("#select_fileCal_2_OL").attr("disabled",true);
			$("#spanBoxCal2_OL").attr("disabled",true);
			$("#cv_SAExtra_Rate_ol").attr("disabled",true);
			$("#validate_filerate2_OL").css("display","none");
		}
 }
});

/*คำนวณทุนจากเบี้ยประกัน*/
/*$("#sl_menu3_capital_ol").change(function() {	

	var sl_menu3_capital = $("#sl_menu3_capital_ol option:selected").val();
	var sl_menu3_capital_text = $("#sl_menu3_capital_ol option:selected").text();
	var select_file_3_CL = $("#select_file_3_OL").val();
	var select_hidden_value_old2 = "";
	var select_hidden_value_new2 = "";
	
	var rate_cat = $("#sl_menu3_capital_ol option:selected").attr("data-ratecat");	
	$("#capital_rateCat3_OL").val(rate_cat);
	
		tbl_name = "tbl_Capital_OL";
		tblAuto_name = "tbl_CapitalAuto_OL";
		modal_name = "CapitalAuto_OL";		
	
	if(select_file_3_CL != ""){
		message = "เคยนำเข้าไฟล์ไว้แล้ว ต้องการเปลี่ยน SA_Rate ใช่หรือไม่";
		alertValuePage_Warning3_OL(message);
		
		$("#btn_value_warning_submit3_OL").click(function(){
			$("#"+tblAuto_name+" tbody").empty();
			$("#"+tbl_name+" tbody").empty();
			debugger;
			if(sl_menu3_capital == ""){
				$('#spanBox3_OL').attr("disabled", true);
				$('#capital_Input_ol').prop('disabled', true);
				$('#select_file_3_OL').prop('disabled', true);
				$("#validate_dd_file3_OL").css("display", "inline-block");
				$("#sl_menu3_capital_ol").val("");
				$("#select_file_3_OL").val("");
				$("#input_file_3_OL").attr("placeholder","");
				$("#input_file_3_OL").val("")
				$("#validate_input3_OL").css("display","none");
				$("#select_hidden_value_old_capital").val(sl_menu3_capital);
				$("#select_hidden_value_new_capital").val(sl_menu3_capital);
			}else{
				$("#select_hidden_value_new_capital").val(sl_menu3_capital)
				if($("#select_hidden_value_old_capital").val() != $("#select_hidden_value_new_capital").val()){						
					selectTypeCode_OL(sl_menu3_capital,2);			
					alert($("#select_hidden_value_new_capital").val());
					$("#sl_menu3_capital_ol").val($("#select_hidden_value_new_capital").val());				
					
				}	
			}										
			
	     });
	     
	     $("#btn_value_warning_cancel3_OL").click(function(){
	    	 if(sl_menu3_capital == ""){
	    		 $("#sl_menu3_capital_ol").val($("#select_hidden_value_new_capital").val());
	    	 }else{
	    		 $("#sl_menu3_capital_ol").val($("#select_hidden_value_old_capital").val());
	    		 $('#spanBox3_OL').attr("disabled", false);
				 $('#capital_Input_ol').prop('disabled', false);
				 $('#select_file_3_OL').prop('disabled', false);
				 $("#validate_dd_file3_OL").css("display", "none");
	    	 }		    	
			 $("#modal_value_warning_OL").modal('hide');
	     })
	    
	}else{
		if(sl_menu3_capital_text != "None"){
			selectTypeCode_OL(sl_menu3_capital,3);
			$("#select_hidden_value_old3_OL").val(sl_menu3_capital);
			$('#spanBox3_OL').attr("disabled", false);
			//$('#cv2_CL').prop('disabled', false);
			$('#select_file_3_OL').prop('disabled', false);
			$("#validate_dd_file3_OL").css("display", "none");
		}else{
			selectTypeCode_OL("",3);
			$("#validate_dd_file3_OL").css("display", "inline-block");
		}			
		
	}		 
});
*/

/*ตารางมูลค่ากรมธรรม์*/
function displayPolicyValueOL(type){
	if(type == 1)
		{
			var cbBox1_OL = $('#cbBox1_OL').prop('checked');
			var cbBox2_OL = $('#cbBox2_OL').prop('checked');

				if(cbBox1_OL)
				{						
					$('#dbBox1_OL').prop('disabled', false);
					$('#norisk_OL *').prop('disabled', false);
				}else{
					var count_file = 0;
					var count_file2 = 0;
					var dd_dbBox1_OL = $("#dbBox1_OL option:selected").text();
					$("#tb_RateValue1_OL>tbody>tr").each(function(){
						var file_value = $(this).find("td:nth-child(2) input:text").val();
						if(file_value != ""){
							count_file++;
						}
					});
					
					if($("#input_file_2_OL").val() != ""){
							count_file2++;
					}
					
					if(count_file > 0 || count_file2 > 0){
						message = "เคยนำเข้าไฟล์ CV ไว้แล้ว ต้องการยกเลิกใช่หรือไม่";
						alertValuePage_Warning4_OL(message);
						
						$("#btn_value_warning_submit4_OL").click(function(){
							$('#dbBox1_OL').prop('disabled', true);
							$("#dbBox1_OL option:contains('None')").attr('selected', 'selected');
							$('#spanBox1_OL').attr("disabled", true);
							$('#cv1_OL').prop('disabled', true);
							$('#select_file_1_OL').prop('disabled', true);
							$("#validate_dd_file1_OL").css("display","inline-block");
													
							$('#norisk_OL *').prop('disabled', true);
							$('#cbBox2_OL').prop('checked', false);
							$('#dbBox2_OL').prop('disabled', true);
							$("#dbBox2_OL option:contains('None')").attr('selected', 'selected');
							$('#cv2_OL').prop('disabled', true);
							$("#validate_dd_file2_OL").css("display","inline-block");						
							
							$("#tb_RateValue1_OL>tbody>tr input:text").val("");
							$("#tb_RateValue1_OL>tbody>tr").find("td:nth-child(2) span").attr("disabled", true);
							$("#tb_RateValue1_OL>tbody>tr").find("td:nth-child(2) input:hidden").val("");
							$("#tb_RateValue1_OL>tbody>tr").find("td:nth-child(2) input:text").attr("placeholder","");
							$("#tb_RateValue1_OL>tbody>tr").find("td:nth-child(2) input:file").removeAttr("onchange");
							$("#tb_RateValue1_OL>tbody>tr").find("td:nth-child(2) input:file").prop("disabled", true);
							$("#tb_RateValue1_OL>tbody>tr").find("td:nth-child(2) font").css("display", "none");
							$("#tb_RateValue1_OL>tbody>tr").find("td:nth-child(3) span").removeClass("activecolorblue").addClass("activecolorgray");
							$("#tb_RateValue1_OL>tbody>tr").find("td:nth-child(4) span").removeClass("activecolorblue").addClass("activecolorgray");
						
							
							selectTypeCode_OL("",1);
							selectTypeCode_OL("",2);
						});
						
						$("#modal_value_warning4_OL .modal-header button.close").click(function(){
							$("#cbBox1_OL").prop("checked", true);
						});
						
						$("#btn_value_warning_cancel4_OL").click(function(){
							$("#cbBox1_OL").prop("checked", true);
							$("#modal_value_warning4_OL").modal("hide");
						});	
					}else{
						$('#dbBox1_OL').prop('disabled', true);
						$("#dbBox1_OL option:contains('None')").attr('selected', 'selected');
						$('#spanBox1_OL').attr("disabled", true);
						$('#cv1_OL').prop('disabled', true);
						$('#select_file_1_OL').prop('disabled', true);
						$("#validate_dd_file1_OL").css("display","inline-block");
												
						$('#norisk_OL *').prop('disabled', true);
						$('#cbBox2_OL').prop('checked', false);
						$('#dbBox2_OL').prop('disabled', true);
						$("#dbBox2_OL option:contains('None')").attr('selected', 'selected');
						$('#cv2_OL').prop('disabled', true);
						$("#validate_dd_file2_OL").css("display","inline-block");
						
						$("#tb_RateValue1_OL>tbody>tr input:text").val("");
						$("#tb_RateValue1_OL>tbody>tr").find("td:nth-child(2) span").attr("disabled", true);
						$("#tb_RateValue1_OL>tbody>tr").find("td:nth-child(2) input:hidden").val("");
						$("#tb_RateValue1_OL>tbody>tr").find("td:nth-child(2) input:text").attr("placeholder","");
						$("#tb_RateValue1_OL>tbody>tr").find("td:nth-child(2) input:file").removeAttr("onchange");
						$("#tb_RateValue1_OL>tbody>tr").find("td:nth-child(2) input:file").prop("disabled", true);
						$("#tb_RateValue1_OL>tbody>tr").find("td:nth-child(2) font").css("display", "none");
						$("#tb_RateValue1_OL>tbody>tr").find("td:nth-child(3) span").removeClass("activecolorblue").addClass("activecolorgray");
						$("#tb_RateValue1_OL>tbody>tr").find("td:nth-child(4) span").removeClass("activecolorblue").addClass("activecolorgray");
						
						selectTypeCode_OL("",1);
						selectTypeCode_OL("",2);
					}
						
				}
	}
	
	if(type == 2)
	{
		var cbBox2_OL = $('#cbBox2_OL').prop('checked');
			if(cbBox2_OL)
			{
				$('#dbBox2_OL').prop('disabled', false);
			}else{
				if($("#input_file_2_OL").val() != ""){
					message = "เคยนำเข้าไฟล์ CV ไว้แล้ว ต้องการยกเลิกใช่หรือไม่";
					alertValuePage_Warning4_OL(message);
					
					$("#btn_value_warning_submit4_OL").click(function(){
						$("#cbBox2_OL").prop("disabled", false);
						$('#dbBox2_OL').prop('disabled', true);
						$("#dbBox2_OL option:contains('None')").attr('selected', 'selected');			
						$('#spanBox2_OL').attr("disabled", true);
						$('#cv2_OL').prop('disabled', true);
						$('#select_file_2_OL').prop('disabled', true);
						$("#validate_dd_file2_OL").css("display","inline-block");
						
						selectTypeCode_OL("",2);
					});
					
					$("#modal_value_warning4_OL .modal-header button.close").click(function(){
						$("#cbBox2_OL").prop("checked", true);
					});
					
					$("#btn_value_warning_cancel4_OL").click(function(){
						$("#cbBox2_OL").prop("checked", true);
						$("#modal_value_warning4_OL").modal("hide");
					});	
					
				  }else{
					  	$('#dbBox2_OL').prop('disabled', true);
						$("#dbBox2_OL option:contains('None')").attr('selected', 'selected');			
						$('#spanBox2_OL').attr("disabled", true);
						$('#cv2_OL').prop('disabled', true);
						$('#select_file_2_OL').prop('disabled', true);
						$("#validate_dd_file2_OL").css("display","inline-block");
						
						selectTypeCode_OL("",2);
				  }
					
				}
	}
	
	if(type == 3)
	{
		var cbBox3_OL = $('#cbBox3_OL').prop('checked');
		var ETI = $("#ch_ETI_ol").prop('checked');
		var RPU = $("#ch_RPU_ol").prop('checked');
		
		if(cbBox3_OL)
			{
				$("#tablePolicy1_OL").prop("checked", true);
				$("#tablePolicy1_OL").prop('disabled', false);
				$("#tablePolicy2_OL").prop('disabled', false);
				
				$("#oldTable_OL").show();
				$("#newTable_OL_year, #newTable_OL").hide();
				
				if(RPU == true){
					$('#dbBox3_1_OL').prop('disabled', false);
					$('#dbBox3_2_OL').prop('disabled', false);
					$('#dbBox3_3_OL').prop('disabled', false);
					/*$('#tmo1_OL').prop("disabled", false);
					$('#tmo2_OL').prop('disabled', false);*/
				}
				
				if(ETI == true){
					$('#dbBox3_4_OL').prop('disabled', false);
					$('#dbBox3_5_OL').prop('disabled', false);
					$('#dbBox3_6_OL').prop('disabled', false);
					/*$('#tmo3_OL').prop("disabled", false);
					$('#tmo4_OL').prop('disabled', false);*/
				}

				$('#spanBox3_OL').attr("disabled", false);	
				$('#spanBox4_OL').attr("disabled", false);
				$('#spanBox5_OL').attr("disabled", false);
				$('#spanBox6_OL').attr("disabled", false);
				
				$('#select_file_3_OL').attr("disabled", false);	
				$('#select_file_4_OL').attr("disabled", false);
				$('#select_file_5_OL').attr("disabled", false);
				$('#select_file_6_OL').attr("disabled", false);
								
				/*$('#tmo5_OL').prop('disabled', false);
				$('#tmo6_OL').prop('disabled', false);
				$('#tmo7_OL').prop('disabled', false);
				$('#tmo8_OL').prop('disabled', false);*/
			}else{
				$("#tablePolicy1_OL").prop('disabled', true);
				$("#tablePolicy2_OL").prop('disabled', true);
				$("#tablePolicy1_OL").prop('checked', false);
				$("#tablePolicy2_OL").prop('checked', false);
				$('#dbBox3_1_OL').prop('disabled', true);
				$('#dbBox3_2_OL').prop('disabled', true);
				$('#dbBox3_3_OL').prop('disabled', true);
				$('#dbBox3_4_OL').prop('disabled', true);
				$('#dbBox3_5_OL').prop('disabled', true);
				$('#dbBox3_6_OL').prop('disabled', true);
				
				$('#tmo1_OL').prop("disabled", true);
				$('#tmo2_OL').prop('disabled', true);
				$('#tmo3_OL').prop("disabled", true);
				$('#tmo4_OL').prop('disabled', true);
				
				$('#spanBox3_OL').attr("disabled", true);
				$('#spanBox4_OL').attr("disabled", true);
				$('#spanBox5_OL').attr("disabled", true);
				$('#spanBox6_OL').attr("disabled", true);
				
				$('#select_file_3_OL').attr("disabled", true);	
				$('#select_file_4_OL').attr("disabled", true);
				$('#select_file_5_OL').attr("disabled", true);
				$('#select_file_6_OL').attr("disabled", true);
								
				$('#tmo5_OL').prop('disabled', true);
				$('#tmo6_OL').prop('disabled', true);
				$('#tmo7_OL').prop('disabled', true);
				$('#tmo8_OL').prop('disabled', true);
				
				$("#newTable_OL_year *").prop('disabled', true);
				$("#oldTable_OL select").find("option:nth-child(1)").prop("selected", "selected");
				
				/*$("#cbBox3_OL").prop("checked", false);
				$("#tablePolicy1_OL, #tablePolicy2_OL").prop("disabled", true);
				$("#tablePolicy1_OL, #tablePolicy2_OL").prop("checked", false);
				$("#oldTable_OL *").prop('disabled', true);
				$("#oldTable_OL select").find("option:nth-child(1)").prop("selected", "selected");
				$("#newTable_OL_year *, #newTable_OL *").prop('disabled', true);
				$("#newTable_OL span").attr('disabled', true);*/
				}
	}
}

/*ตารางมูลค่ากรมธรรม์*/
$(document).on('focusin', '#dbBox1_OL', function(){
	 $(this).data('val', $(this).val());
}).on('change','#dbBox1_OL', function(){
	var prev_rate = $(this).data('val');
	var current_rate = $(this).val();	
	
	var numrow = $("#tb_RateValue1_OL>tbody>tr").length;
	var select_text = $("#dbBox1_OL option:selected").text();
	var select_value = $("#dbBox1_OL").val();
	var baseplanCode_CL = $("#pass_Insurance_coverage_ol").val();
	
	if(select_text != "None"){
		$("#validate_dd_file1_OL").hide();
	}else{
		$("#validate_dd_file1_OL").show();
	}
	
	var check_file = 0;
	$("#tb_RateValue1_OL>tbody td:nth-child(2) :input[type='text']").each(function(index) {
		if($(this).val() != ""){
			check_file++;
		}
	});
	
	if(check_file > 0){		
		message = "เคยนำเข้าไฟล์ CV ไว้แล้ว ต้องการเปลี่ยนตารางมูลค่ากรมธรรม์ ใช่หรือไม่";
		//$('#txt_value_alert_error3').text(message);
	    //$('#modal_value_warning3').modal('show');
		alertValuePage_Warning4_OL(message);

		$("#btn_value_warning_submit4_OL").click(function(){
			check_file_cv_OL();
		});
		
		$("#btn_value_warning_cancel4_OL").click(function(){				
			 $("#modal_value_warning4_OL").modal('hide');
			 $("#dbBox1_OL").val(prev_rate).attr('selected', 'selected');
	     });
		
	}else{
		check_file_cv_OL();
	}		

function check_file_cv_OL(){
	for(var i=0; i<numrow; i++){
		var select_cv_text = $("#tb_RateValue1_OL>tbody>tr").eq(i).find("td:nth-child(1)").text();
		var select_cv_id = $("#tb_RateValue1_OL>tbody>tr").eq(i).attr("id");
			select_cv_id = Number(select_cv_id.replace("tbody_Rate_Value_OL",""));
			
		var numrow_band = $("#tb_RateValue1_OL>tbody>tr[data-group='"+select_cv_id+"']").lenght;	
		
		file_layout = select_value.split(",");	
		
		if(select_text != "None"){
			if(file_layout.length > 1){
				file_layout1 = file_layout[0];
				file_layout2 = file_layout[1];
				 
				file_layout1_text = file_layout1+select_cv_text+"_"+baseplanCode_CL;
				file_layout2_text = file_layout2+select_cv_text+"_"+baseplanCode_CL;
				
				placeholder = file_layout1_text+".txt หรือ "+file_layout2_text+".txt";
			}else{
				file_layout1 = file_layout[0];
				file_layout2 = "";
				
				file_layout1_text = file_layout1+select_cv_text+"_"+baseplanCode_CL;
				file_layout2_text = "";
				
				placeholder = file_layout1_text+".txt";
			}
			
			/*******************************/
			var rate_cat = $("#cv_rate_Agespecific_OL").val();
			var rate_cat_sub = $("#cv_rate_AgeBand_OL").val();

			var layout_id_select  = $("#dbBox1_OL option:selected").attr("data-layout");
			var layout_id_split = layout_id_select.split(",");

			if(layout_id_split.length > 1){
				layout_id1 = layout_id_split[0];
				layout_id2 = layout_id_split[1];
			}else{
				layout_id1 = layout_id_select;
				layout_id2 = "''";
			}
			//var uploadfile = "selectFileRate_OL(5,'s','fileuploads_RateValue"+select_cv_id+"_OL','"+file_layout1_text+"','"+file_layout2_text+"','dbBox1_OL','span_RateValueopen_OL_"+select_cv_id+"')";		
			var uploadfile = "selectFileTXTMain_OL("+rate_cat+", 8,'fileuploads_RateValue"+select_cv_id+"_OL',"+layout_id1+","+layout_id2+",'','"+file_layout1_text+"','"+file_layout2_text+"','','span_RateValueopen_OL_"+select_cv_id+"')";
			
			/*******************************/

			$("#fileuploads_RateValueText"+select_cv_id+"_OL").val("");
			$("#fileuploads_RateValue"+select_cv_id+"_OL").val(null);
			$("#fileuploads_RateValueText"+select_cv_id+"_OL").attr("placeholder",placeholder);
			$("#fileuploads_RateValue"+select_cv_id+"_OL").attr("onchange",uploadfile);
			$("#fileuploads_RateValue"+select_cv_id+"_OL").attr("disabled",false);
			$("#spanRateValue"+select_cv_id+"_OL").attr("disabled",false);
			//$("#validate_RateValue"+select_cv_id+"_OL").css("display","inline-block");
			$("#span_RateValueopen_OL_"+select_cv_id+">span").removeClass("activecolorblue").addClass("activecolorgray");	
			$("#span_RateValuedownload_OL_"+select_cv_id+">span").removeClass("activecolorblue").addClass("activecolorgray");	
			$("#tb_RateValue1_OL tbody>tr input:hidden").prop("disabled", false);
			
			 $("#tb_RateValue1_OL>tbody>tr[data-group='"+select_cv_id+"']").each(function(){
				 var band = $(this).find("td:nth-child(1)").text();
				 var select_band_id = $(this).attr("id");
					 select_band_id = select_band_id.replace("tbody_Rate_Value_OL","");
				 
				 if(file_layout.length > 1){
					 file_layout1 = file_layout[0];
					 file_layout2 = file_layout[1];
					 
					 file_layout1_band = file_layout1+select_cv_text+"_"+band+"_"+baseplanCode_CL;
					 file_layout2_band = file_layout2+select_cv_text+"_"+band+"_"+baseplanCode_CL;
					 
					 placeholder_band = file_layout1_band+".txt หรือ "+file_layout2_band+".txt";
				 }else{
					 file_layout1 = file_layout[0];
					 file_layout2 = "";
					 
					 file_layout1_band = file_layout1+select_cv_text+"_"+band+"_"+baseplanCode_CL;
					 file_layout2_band = "";
					 
					 placeholder_band = file_layout1_band+".txt";
				 }
				 
				 //var uploadfile_band = "selectFileRate_OL(5,'b','fileuploads_RateValue"+select_band_id+"_OL','"+file_layout1_band+"','"+file_layout2_band+"','dbBox1_OL','span_RateValueopen_OL_"+select_band_id+"')";
				 var uploadfile_band = "selectFileTXTMain_OL("+rate_cat+", 9,'fileuploads_RateValue"+select_band_id+"_OL',"+layout_id1+","+layout_id2+",'','"+file_layout1_band+"','"+file_layout2_band+"','','span_RateValueopen_OL_"+select_band_id+"')";
				 
				 
				 $("#fileuploads_RateValueText"+select_band_id+"_OL").val("");
				 $("#fileuploads_RateValue"+select_band_id+"_OL").val(null);
				 $("#fileuploads_RateValueText"+select_band_id+"_OL").attr("placeholder",placeholder_band);
				 $("#fileuploads_RateValue"+select_band_id+"_OL").attr("onchange",uploadfile_band);
				 $("#fileuploads_RateValue"+select_band_id+"_OL").attr("disabled",false);
				 $("#spanRateValue"+select_band_id+"_OL").attr("disabled",false);
				 //$("#validate_RateValue"+select_band_id+"_OL").css("display","inline-block");
				 $("#span_RateValueopen_OL_"+select_band_id+">span").removeClass("activecolorblue").addClass("activecolorgray");
				 $("#span_RateValuedownload_OL_"+select_band_id+">span").removeClass("activecolorblue").addClass("activecolorgray");	
			 });
			
		}else{
			$("#fileuploads_RateValueText"+select_cv_id+"_OL").val("");
			$("#fileuploads_RateValue"+select_cv_id+"_OL").val(null);
			$("#fileuploads_RateValueText"+select_cv_id+"_OL").attr("placeholder","");
			$("#fileuploads_RateValue"+select_cv_id+"_OL").attr("onchange","");
			$("#fileuploads_RateValue"+select_cv_id+"_OL").attr("disabled",true);
			$("#spanRateValue"+select_cv_id+"_OL").attr("disabled",true);
			//$("#validate_RateValue"+select_cv_id+"_OL").css("display","none");
			$("#span_RateValueopen_OL_"+select_cv_id+">span").removeClass("activecolorblue").addClass("activecolorgray");	
			$("#span_RateValuedownload_OL_"+select_cv_id+">span").removeClass("activecolorblue").addClass("activecolorgray");	
			
			$("#tb_RateValue1_OL>tbody>tr[data-group='"+select_cv_id+"']").each(function(){
				 var band = $(this).find("td:nth-child(1)").text();
				 var select_band_id = $(this).attr("id");
					 select_band_id = select_band_id.replace("tbody_Rate_Value_OL","");
				
				$("#fileuploads_RateValueText"+select_band_id+"_OL").val("");
				$("#fileuploads_RateValue"+select_band_id+"_OL").val(null);
				$("#fileuploads_RateValueText"+select_band_id+"_OL").attr("placeholder","");
				$("#fileuploads_RateValue"+select_band_id+"_OL").attr("onchange","");
				$("#fileuploads_RateValue"+select_band_id+"_OL").attr("disabled",true);
				$("#spanRateValue"+select_band_id+"_OL").attr("disabled",true);
				//$("#validate_RateValue"+select_band_id+"_OL").css("display","none");
				$("#span_RateValueopen_OL_"+select_band_id+">span").removeClass("activecolorblue").addClass("activecolorgray");
				$("#span_RateValuedownload_OL_"+select_band_id+">span").removeClass("activecolorblue").addClass("activecolorgray");
			 });
		
		}		
	}
 }
});

$("#dbBox2_OL").change(function() {		   		
	var dbBox2_CL = $("#dbBox2_OL").val();
	var dbBox2_CL_text = $("#dbBox2_OL option:selected").text();
	var select_file_2_CL = $("#input_file_2_OL").val();
	var select_hidden_value_old2 = "";
	var select_hidden_value_new2 = "";		
	
		/*tbl_name = "tbl_NotStandardRisk_OL";
		tblAuto_name = "tbl_NotStandardRiskAuto_OL";
		modal_name = "cvNotStandardRiskAuto_OL";*/	
		
		tbl_name = "tbl_ModalMain_OL";
		tblAuto_name = "tbl_ModalMainAuto_OL";
		modal_name = "ModalMainAuto_OL";
		modal_cv = "ModalMain_OL";
		
	if(select_file_2_CL != ""){
		message = "เคยนำเข้าไฟล์ CV ไว้แล้ว ต้องการเปลี่ยนตารางมูลค่ากรมธรรม์ ใช่หรือไม่";
		alertValuePage_Warning4_OL(message);
		
		$("#btn_value_warning_submit4_OL").click(function(){
			$("#"+tblAuto_name+" tbody").empty();
			$("#"+tbl_name+" tbody").empty();
			
			if(dbBox2_CL == ""){
				$('#spanBox2_OL').attr("disabled", true);
				$('#cv2_OL').prop('disabled', true);
				$('#select_file_2_OL').prop('disabled', true);
				$("#validate_dd_file2_OL").css("display", "inline-block");
				$("#dbBox2_OL").val("");
				$("#select_file_2_OL").val("");
				$("#input_file_2_OL").attr("placeholder","");
				$("#input_file_2_OL").val("")
				$("#validate_input2_OL").css("display","none");
				$("#select_hidden_value_old2_OL").val(dbBox1_CL);
				$("#select_hidden_value_new2_OL").val(dbBox1_CL);
			}else{
				$("#select_hidden_value_new2_OL").val(dbBox2_CL)
				if($("#select_hidden_value_old2_OL").val() != $("#select_hidden_value_new2_OL").val()){						
					selectTypeCode_OL(dbBox2_CL,2);						
					$("#dbBox2_OL").val($("#select_hidden_value_new2_OL").val());				
					
				}	
			}										
			
	     });
	     
	     $("#btn_value_warning_cancel4_OL").click(function(){
	    	 if(dbBox1_CL == ""){
	    		 $("#dbBox2_OL").val($("#select_hidden_value_new2_OL").val());
	    	 }else{
	    		 $("#dbBox2_OL").val($("#select_hidden_value_old2_OL").val());
	    		 $('#spanBox2_OL').attr("disabled", false);
				 $('#cv2_OL').prop('disabled', false);
				 $('#select_file_2_OL').prop('disabled', false);
				 $("#validate_dd_file2_OL").css("display", "none");
	    	 }		    	
			 $("#modal_value_warning_OL").modal('hide');
	     })
	    
	}else{
		if(dbBox2_CL_text != "None"){
			selectTypeCode_OL(dbBox2_CL,2);
			$("#select_hidden_value_old2_OL").val(dbBox2_CL);
			$('#spanBox2_OL').attr("disabled", false);
			//$('#cv2_CL').prop('disabled', false);
			$('#select_file_2_OL').prop('disabled', false);
			$("#validate_dd_file2_OL").css("display", "none");
		}else{
			selectTypeCode_OL("",2);
			$("#validate_dd_file2_OL").css("display", "inline-block");
		}			
		
	}		 
});

function alertValuePage_Warning_OL(message)
{
    $('#txt_value_alert_error_OL').text(message);
    $('#modal_value_warning_OL').modal();
}

function alertValuePage_Warning2_OL(message)
{
    $('#txt_value_alert_error2_OL').text(message);
    $('#modal_value_warning2_OL').modal();
}

function alertValuePage_Warning3_OL(message)
{
    $('#txt_value_alert_error3_OL').text(message);
    $('#modal_value_warning3_OL').modal('show');
}

function alertValuePage_Warning4_OL(message)
{
    $('#txt_value_alert_error4_OL').text(message);
    $('#modal_value_warning4_OL').modal();
}

$("#sel_PhaseETI_ol").change(function(){
	var age_value = $("#age_ETI_RPU_OL").val();
	if($(this).val() == "TO_YEAR"){
		$("#eti_year_ol").val(age_value);
	}else{
		$("#eti_year_ol").val("");
	}
});

$("#sel_PhaseRPU_ol").change(function(){
	var age_value = $("#age_ETI_RPU_OL").val();
	if($(this).val() == "TO_YEAR"){
		$("#rpu_year_ol").val(age_value);
	}else{
		$("#rpu_year_ol").val("");
	}
});

/*ตารางมูลค่ากรมธรรม์*/
function settingPolicyValue_OL(){		
	$("#baseplanCode_OL").val($("#pass_Insurance_coverage_ol").val());
	$("#surrender_OL").val($("#ch_expropriate_insurance_OL:checked").val());
	var surrender_OL = $("#surrender_OL").val();
	if(surrender_OL == "TRUE"){
		$("#risk_OL *").prop("disabled", false);
	}else{
		$("#risk_OL *").prop("disabled", true);
		$("#norisk_OL *").prop("disabled", true);
	}
	
	if($("#dbBox1_OL option:selected").text() != "None"){
		$("#validate_dd_file1_OL").css("display", "none");
	}else{
		$("#validate_dd_file1_OL").css("display", "inline-block");
	}
	
	$("#cv1_OL").prop("disabled", true);
	
	if($("#dbBox2_OL option:selected").text() != "None"){
		$("#validate_dd_file2_OL").css("display", "none");
	}else{
		$("#validate_dd_file2_OL").css("display", "inline-block");
	}
	
	
	if($("#dbBox2_OL option:selected").text() == "None"){
		selectType_OL("",2);		
	}
	if($("#input_file_2_OL").val() != ""){
		$("#cv2_OL").prop("disabled", false);
	}	
	
	/*ETI/RPU*/
	var ETI = $("#ch_ETI_ol").prop("checked");
	var RPU = $("#ch_RPU_ol").prop("checked");
	
	if(ETI == true || RPU == true){
		$("#cbBox3_OL").prop("disabled", false);
		
		/*if(RPU == true){
			$("#dbBox3_1_OL, #dbBox3_2_OL, #dbBox3_3_OL").prop('disabled', false);
			$("#tmo1_OL, #tmo2_OL").attr("disabled", false);
		}else{
			$("#dbBox3_1_OL, #dbBox3_2_OL, #dbBox3_3_OL").prop('disabled', true);
			$("#tmo1_OL, #tmo2_OL").attr("disabled", true);
		}
		
		if(ETI == true){
			$("#dbBox3_4_OL, #dbBox3_5_OL, #dbBox3_6_OL").prop('disabled', false);
			$("#tmo3_OL, #tmo4_OL").attr("disabled", false);
		}else{
			$("#dbBox3_4_OL, #dbBox3_5_OL, #dbBox3_6_OL").prop('disabled', true);
			$("#tmo3_OL, #tmo4_OL").attr("disabled", true);
		}*/
		
	}else{
		$("#cbBox3_OL").prop("disabled", true);
		$("#cbBox3_OL").prop("checked", false);
	}
}

function selectType_OL(type,box){
	var typeDigit = type.substr(0,4);
	
	if(type == ""){
		input_html = "<input type='text' class='form-control' id='input_file_"+box+"_OL'"+
		 " readonly> <label class='input-group-btn'>"+
		 " <span disabled id='spanBox"+box+"_OL' class='btn btn-primary'>เลือกไฟล์<input id='select_file_"+box+"_OL' type='file' accept='text/plain' style='display: none;'"+
		 "onchange=\"selectFile_OL("+box+",'"+type+"');"+"\" disabled>"+
		 " </span></label>";
	}else{
		input_html = "<input type='text' class='form-control' id='input_file_"+box+"_OL'"+
		 " placeholder='"+type+".txt' readonly> <label class='input-group-btn'>"+
		 " <span disabled id='spanBox"+box+"_OL' class='btn btn-primary'><font id='validate_input"+box+"_OL'"+
		 " style='color: red;'>*</font>เลือกไฟล์<input id='select_file_"+box+"_OL' type='file' accept='text/plain' style='display: none;'"+
		 "onchange=\"selectFile_OL("+box+",'"+type+"');"+"\" disabled>"+
		 " </span></label>";
	}
	
	$("#div_file"+box+"_OL").html(input_html);
}

function selectTypeCode_OL(type,box){
	var CovCodeSelect_CL = $("#pass_Insurance_coverage_ol").val();
	
	var typeFormat = type.split(",");		
	var typeLength = typeFormat.length;
	var typeDigit = type.substr(0,4);
	var input_html = "";
	var rate_cat  = "";
	var rate_layout = "";
	var cv_button = "";
	var type_upload = "";
	
	if(box == 2){
		rate_cat = $("#cvLow_rateCat2_OL").val();
		rate_layout = $("#dbBox2_OL option:selected").attr("data-layout");
		cv_button = "cv2_OL";
		type_upload = 10;
	}
	
	if(type == ""){
		input_html = "<input type='text' class='form-control' id='input_file_"+box+"_OL'"+
		 " readonly disabled> <label class='input-group-btn'>"+
		 " <span id='spanBox"+box+"_OL' class='btn btn-primary' disabled>เลือกไฟล์<input id='select_file_"+box+"_OL' type='file' accept='text/plain' style='display: none;' disabled>"+
		 //"onchange=\"selectFile_CL("+box+",'"+typeFormat[0]+baseplanCodeSelect_CL+"','"+typeFormat[1]+baseplanCodeSelect_CL+"');"+"\">"+
		 " </span></label>";
	}else{
		if(typeLength > 1){
			input_html = "<input type='text' class='form-control' id='input_file_"+box+"_OL'"+
			 " placeholder='"+typeFormat[0]+CovCodeSelect_CL+".txt หรือ "+typeFormat[1]+CovCodeSelect_CL+".txt' readonly> <label class='input-group-btn'>"+
			 " <span id='spanBox"+box+"_OL' class='btn btn-primary'><font id='validate_input"+box+"_OL'"+
			 " style='color: red;'>*</font>เลือกไฟล์<input id='select_file_"+box+"_OL' type='file' accept='text/plain' style='display: none;'"+
			 //"onchange=\"selectFile_OL("+box+",'"+typeFormat[0]+CovCodeSelect_CL+"','"+typeFormat[1]+CovCodeSelect_CL+"');"+"\">"+
			 "onchange=\"selectFileTXTMain_OL("+rate_cat+", "+type_upload+",'select_file_"+box+"_OL',"+rate_layout+",'','','"+typeFormat[0]+CovCodeSelect_CL+"','"+typeFormat[1]+CovCodeSelect_CL+"','','"+cv_button+"');"+"\">"+
			 " </span></label>";
		}else{
			input_html = "<input type='text' class='form-control' id='input_file_"+box+"_OL'"+
			 " placeholder='"+typeFormat[0]+CovCodeSelect_CL+".txt' readonly> <label class='input-group-btn'>"+
			 " <span id='spanBox"+box+"_OL' class='btn btn-primary'><font id='validate_input"+box+"_OL'"+
			 " style='color: red;'>*</font>เลือกไฟล์<input id='select_file_"+box+"_OL' type='file' accept='text/plain' style='display: none;'"+
			 //"onchange=\"selectFile_OL("+box+",'"+typeFormat[0]+CovCodeSelect_CL+"','');"+"\">"+
			 "onchange=\"selectFileTXTMain_OL("+rate_cat+", "+type_upload+",'select_file_"+box+"_OL',"+rate_layout+",'','','"+typeFormat[0]+CovCodeSelect_CL+"','','','"+cv_button+"');"+"\">"+
			 " </span></label>";
		}
		
	}		
	//alert(input_html);
	$("#div_file"+box+"_OL").html(input_html);		
}

function selectFile_OL(select_file,file_format,file_format2){
	var tbl_name = "";
	var tbl_col = "";
	var dd_opt = "";
	
	var cov_code = $("#pass_Insurance_coverage_ol").val();
	var tr_tbl = "";
	var data_level = "";
	var data_group = "";
	var rate_type = "";
	var rate_band_type = "";
	var download_modal = "";
	/*file*/
	var file_id = 0;
	var file_type_id = 3;
	var file_path = "";
	var file_pattern = "";
	var user_code = "0000000";	
	
	if(select_file == 1){
		tbl_name = "tbl_StandardRisk_OL";
		tblAuto_name = "tbl_StandardRiskAuto_OL";
		modal_name = "cvStandardRiskAuto_OL";
		modal_cv = "cvStandardRisk_OL";
		tbl_col = 5;
		dd_opt = "dbBox1_OL";
		cv_button = "cv1_OL";
		download_modal = "download_tbl_StandardRisk_OL";
		file_button1 = "btn_submit_StandardRiskAuto_OL";
		file_button2 = "btn_cancel_StandardRiskAuto_OL";
	}else if(select_file == 2){
		tbl_name = "tbl_NotStandardRisk_OL";
		tblAuto_name = "tbl_NotStandardRiskAuto_OL";
		modal_name = "cvNotStandardRiskAuto_OL";
		modal_cv = "cvNotStandardRisk_OL";
		tbl_col = 13;
		dd_opt = "dbBox2_OL";
		cv_button = "cv2_OL";
		download_modal = "download_tbl_NotStandardRisk_OL";
		file_button1 = "btn_submit_NotStandardRiskAuto_OL";
		file_button2 = "btn_cancel_NotStandardRiskAuto_OL";
		
		type = 32;
		downloadFile = "cv2_OL";
		fileID = "cvLow_fileID2_OL";
		
		rate_cat_id = $("#cvLow_rateCat2_OL").val();
		sub_cat_id = $("#dbBox2_OL option:selected").attr("data-subcat");
	}
	
	var dd_text = $("#"+dd_opt+" option:selected").text();
		dd_text = dd_text.replace("ข้อมูลกรมธรรม์","");
			
	$("#select_file_"+select_file+"_OL").click(function () {
	    this.value = null;
	});
	
	$("#"+tblAuto_name+" tbody").empty();
	$("#"+tbl_name+" tbody").empty();
	var file_name = $("#select_file_"+select_file+"_OL").val().replace(/\\/g, '/').replace(/.*\//, '');	
		file_path = $("#select_file_"+select_file+"_OL").val();
	
	if($("#input_file_"+select_file+"_OL").val() == ""){
		file_id = "";
	}else{
		file_id = $("#"+fileID).val();
	}		
	//$("#select_file_"+select_file+"_CL").unbind("change");
	if(select_file == 2){
		file_pattern = file_name.replace(cov_code, "{Code}");
	}
	
	$("#"+modal_name+" .modal-header>h4>span").text(file_name);
	$("#"+modal_cv+" .modal-header>h4>span").text(file_name);
	
	$("#"+file_button1).unbind();
	
	if(file_format2 != ""){				
		if(check_filename("select_file_"+select_file+"_OL", file_format, file_format2) == false){
			$("#validate_input"+select_file+"_OL").css("display", "inline-block");
			$("#input_file_"+select_file+"_OL").val("");	
			$('#'+cv_button).prop('disabled', true);
		}else{			
			openFile(event,"select_file_"+select_file+"_OL",tbl_name,tbl_col);
			openFile(event,"select_file_"+select_file+"_OL",tblAuto_name,tbl_col);
			
			$("#base64_fileTXT_OL").val("");
			
			$("#"+modal_name).modal("show");
			
			convertToBase64_OL("select_file_"+select_file+"_OL", file_type_id)
			
			$("#"+file_button1).unbind();
			$("#"+file_button1).click(function() {
				
				/*save file*/				
				//set_Filevalue(type,select_file,file_id,file_type_id,file_name,file_path,file_pattern,rate_cat_id,sub_cat_id,user_code);		
				/*end save file*/
				$("#modal_waiting").modal('show');
				var base64 = $("#base64_fileTXT_OL").val();
		    	   if( base64 != ""){
		    		   var dateTime = getCurrentDate();
		    		   var file_name_update = "3_"+dateTime+".txt"
		    			   datajson = {				        	
					    		"method" : "uploadFile_txt",
					    		"passInsurance" : $("#pass_Insurance_coverage_ol").val(),
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
					 	    	

								datajson = {				        	
										file_id 		: file_id,
										file_type_id 	: file_type_id,
										file_name 		: file_name,
										file_url		: obj_ref,
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
								    	if(type == 32){
								    		/*CV Low*/
								    		$("#cvLow_rateLayout"+select_file+"_OL").val(response.rate_layout_id);
								    		$("#cvLow_fileID"+select_file+"_OL").val(response.file_id);
								    	}	
								    	
								    	$("#input_file_"+select_file+"_OL").val(file_name);
										$("#validate_input"+select_file+"_OL").css("display", "none");
										$('#'+cv_button).prop('disabled', false);
										$("#modal_waiting").modal('hide');
										$("body").addClass("body_nopadding");
										$("#"+download_modal).attr("onclick", "openFile_target('"+file_name+"','"+obj_ref+"','txt_download')");
										$('#'+cv_button).attr("onclick", "openFileTextBasePlan_OL('"+file_name+"','"+obj_ref+"',"+tbl_col+",'"+tbl_name+"','"+modal_cv+"')");
								    },
								    error : function(response) {	
								    	//console.log("save file error");
									message = "ไม่สามารถบันทึกไฟล์ได้";
									alertError(message);
									
									$("#input_file_"+select_file+"_OL").val("");
								    }
								});	
					 	    	
					 	    }
					    })
					    
		    	   }
				

			});
			
			$("#"+file_button2).click(function() {
				$("#input_file_"+select_file+"_OL").val("");
				$("#validate_input"+select_file+"_OL").css("display", "inline-block");
				$('#'+cv_button).prop('disabled', true);
			});
			
		}												
		
	}else{
		if(check_filename("select_file_"+select_file+"_OL", file_format, "") == false){
			$("#validate_input"+select_file+"_OL").css("display", "inline-block");
			$("#input_file_"+select_file+"_OL").val("");
			$('#'+cv_button).prop('disabled', true);
		}else{
			openFile(event,"select_file_"+select_file+"_OL",tbl_name,tbl_col);
			openFile(event,"select_file_"+select_file+"_OL",tblAuto_name,tbl_col);
			
			$("#base64_fileTXT_OL").val("");
			
			$("#"+modal_name).modal("show");	
			
			convertToBase64_OL("select_file_"+select_file+"_OL", file_type_id)
			
			$("#"+file_button1).click(function() {
				
				/*save file*/				
				//set_Filevalue(type,select_file,file_id,file_type_id,file_name,file_path,file_pattern,rate_cat_id,sub_cat_id,user_code);		
				/*end save file*/
				$("#modal_waiting").modal('show');
				var base64 = $("#base64_fileTXT_OL").val();
		    	   if( base64 != ""){
		    		   var dateTime = getCurrentDate();
		    		   var file_name_update = "3_"+dateTime+".txt"
		    			   datajson = {				        	
					    		"method" : "uploadFile_txt",
					    		"passInsurance" : $("#pass_Insurance_coverage_ol").val(),
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
					 	    	
					 	       
								datajson = {				        	
										file_id 		: file_id,
										file_type_id 	: file_type_id,
										file_name 		: file_name,
										file_url		: obj_ref,
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
								    	if(type == 32){
								    		/*CV Low*/
								    		$("#cvLow_rateLayout"+select_file+"_OL").val(response.rate_layout_id);
								    		$("#cvLow_fileID"+select_file+"_OL").val(response.file_id);
								    	}	
								    	
								    	$("#input_file_"+select_file+"_OL").val(file_name);
										$("#validate_input"+select_file+"_OL").css("display", "none");
										$('#'+cv_button).prop('disabled', false);
										$("#modal_waiting").modal('hide');
										$("body").addClass("body_nopadding");
										$("#"+download_modal).attr("onclick", "openFile_target('"+file_name+"','"+obj_ref+"','txt_download')");
										$('#'+cv_button).attr("onclick", "openFileTextBasePlan_OL('"+file_name+"','"+obj_ref+"',"+tbl_col+",'"+tbl_name+"','"+modal_cv+"')");
								   
								    },
								    error : function(response) {	
								    	//console.log("save file error");
									message = "ไม่สามารถบันทึกไฟล์ได้";
									alertError(message);
									
									$("#input_file_"+select_file+"_OL").val("");
								    }
								});	
					 	    	
					 	    }
					    })
					    
		    	   }
		    	

			});
			
			$("#"+file_button2).click(function() {
				$("#input_file_"+select_file+"_OL").val("");
				$("#validate_input"+select_file+"_OL").css("display", "inline-block");
				$('#'+cv_button).prop('disabled', true);
			});
		}	
	}
			
}

function changeDisplayBenefit005_OL(type){
	var cov_status =  $("#cov_status").val();
	if(type == 1){
		$("#oldTable_OL").show();
		$("#newTable_OL").hide();
		$("#newTable_OL_year").hide();
		$("#tablePolicy2_OL").prop("checked", false);
		controlTabBenefit_OL();
		//Benz  19-11-2019 Check Status
		if (cov_status == "" || cov_status == "NEW" || cov_status == "UPDATE") {
			save_tab_coverageBenefits_OL();
		}
	}else{
		$("#oldTable_OL").hide();
		$("#newTable_OL").show();
		$("#newTable_OL_year").show();
		$("#newTable_OL_year *").prop('disabled', false);
		$("#tablePolicy1_OL").prop("checked", false);
	}
}

/*ผลประโยชน์/ความคุ้มครอง*/
function controlTabBenefit_OL()
{
	var cbDie_OL = $('#cbDie_OL').prop('checked');
	var cbContract_OL = $('#cbContract_OL').prop('checked');
	//--
	var cbRefund_OL = $('#cbRefund_OL').prop('checked');
	var cbPension_OL = $('#cbPension_OL').prop('checked');
	var cbMedical_OL = $('#cbMedical_OL').prop('checked');
	var cbDividend_OL = $('#cbDividend_OL').prop('checked');
	
	if(cbDie_OL == true)
	{
		$('#tabDie').attr("class","active");
		$('#tabContract').attr("class","");
		$('#tabRefund').attr("class","");
		$('#tabPension').attr("class","");
		$('#tabMedical').attr("class","");
		$('#tabDividend').attr("class","");
		$("#die_OL").addClass("active in");
		$("#contract_OL").removeClass("active in");
		$("#refund_OL").removeClass("active in");
		$("#pension_OL").removeClass("active in");
		$("#medical_OL").removeClass("active in");
		$("#dividend_OL").removeClass("active in");
		
	}else if(cbContract_OL == true){
		$('#tabContract').attr("class","active");
		$("#contract_OL").addClass("active in");
		$("#die_OL").removeClass("active in");
		$("#refund_OL").removeClass("active in");
		$("#pension_OL").removeClass("active in");
		$("#medical_OL").removeClass("active in");
		$("#dividend_OL").removeClass("active in");
	}else if(cbRefund_OL == true){
		$('#tabRefund').attr("class","active");
		$('#refund_OL').addClass("active in");
		$("#die_OL").removeClass("active in");
		$("#contract_OL").removeClass("active in");
		$("#pension_OL").removeClass("active in");
		$("#medical_OL").removeClass("active in");
		$("#dividend_OL").removeClass("active in");
	}else if(cbPension_OL == true){
		$('#tabPension').attr("class","active");
		$("#die_OL").removeClass("active in");
		$('#pension_OL').addClass("active in");
		$("#contract_OL").removeClass("active in");
		$("#refund_OL").removeClass("active in");
		$("#medical_OL").removeClass("active in");
		$("#dividend_OL").removeClass("active in");
	}else if(cbMedical_OL == true){
		$('#tabMedical').attr("class","active");
		$('#medical_OL').addClass("active in");
		$("#die_OL").removeClass("active in");
		$("#contract_OL").removeClass("active in");
		$("#refund_OL").removeClass("active in");
		$("#pension_OL").removeClass("active in");
		$("#dividend_OL").removeClass("active in");
	}else if(cbDividend_OL == true){
		$('#tabDividend').attr("class","active");
		$('#dividend_OL').addClass("active in");
		$("#die_OL").removeClass("active in");
		$("#contract_OL").removeClass("active in");
		$("#refund_OL").removeClass("active in");
		$("#pension_OL").removeClass("active in");
		$("#medical_OL").removeClass("active in");
	}
	
	if(cbDie_OL == true){
		$('#aDie').css("display", "block");

	}else{
		$('#aDie').css("display", "none");

	}
	if(cbContract_OL == true){
		$('#aContract').css("display", "block");
	}else{
		$('#aContract').css("display", "none");
	}
	if(cbRefund_OL == true){
		$('#aRefund').css("display", "block");
	}else{
		$('#aRefund').css("display", "none");
	}
	if(cbPension_OL == true){
		$('#aPension').css("display", "block");
	}else{
		$('#aPension').css("display", "none");
	}
	if(cbMedical_OL == true){
		$('#aMedical').css("display", "block");
	}else{
		$('#aMedical').css("display", "none");
	}
	if(cbDividend_OL == true){
		$('#aDividend').css("display", "block");
	}else{
		$('#aDividend').css("display", "none");
	}
	
	setTimeout(() => {
		$("#mainBenefit_OL").css("display", "none");
		$("#benefitDetail_OL").css("display", "block");
	}, 30);
}
/*ผลประโยชน์/ความคุ้มครอง*/
function displayDividendValue(){
	var cbBoxDV1 = $('#cbBoxDV1').prop('checked');			
		if(cbBoxDV1)
		{					
			$('#DVList1').prop('disabled', false);
			$('#DvList1_Year').attr("disabled", false);
			$('#DVBox1').prop('disabled', false);
			$('#DVList1_Cal').prop('disabled', false);					
		}else{
			$('#DVList1').prop('disabled', true);
			$('#DvList1_Year').attr("disabled", true);
			$('#DVBox1').prop('disabled', true);
			$('#DVList1_Cal').prop('disabled', true);	
			$("#DVList1 option:contains('None')").prop("selected", "selected");
			$("#DvList1_Year option:contains('None')").prop("selected", "selected");
			$("#DVList1_Cal option:contains('None')").prop("selected", "selected");
			$("#DVBox1").val("");
		}


var cbBoxDV2 = $('#cbBoxDV2').prop('checked');
		if(cbBoxDV2)
		{
			$('#GuaranteeOL_opt1').prop('disabled', false);
			$('#GuaranteeOL_opt2').prop('disabled', false);

		}else{
			$('#GuaranteeOL_opt1').prop('disabled', true);
			$('#GuaranteeOL_opt2').prop('disabled', true);
			$("input[name='GuaranteeOL_opt[]']").prop("checked", false);
			$("#spanBoxGuaruntee_OL").attr("disabled", true);
			$("#select_fileGuaruntee_OL").attr("disabled", true);
			$("#benefit_Guaruntee_tbl").addClass("disabledAll");
			$("#input_fileGuaruntee_OL").val("");
			$('#btn_DV_add').prop('disabled', true);	
			$('#btn_DV_del').prop('disabled', true);
			
			
		}
}

function controlSubmitBenefit(){
	if($('#cbDie_OL').prop('checked') == true){
		$("#cbDie_OL_person").prop("checked", true);
	}else{
		$("#cbDie_OL_person").prop("checked", false);
	}
	
	if($("#cbContract_OL").prop("checked") == true){
		$("#cbContract_OL_person").prop("checked", true);
	}else{
		$("#cbContract_OL_person").prop("checked", false);
	}
	
	if($("#cbRefund_OL").prop("checked") == true){
		$("#cbRefund_OL_person").prop("checked", true);
	}else{
		$("#cbRefund_OL_person").prop("checked", false);
	}
	
	if($("#cbPension_OL").prop("checked") == true){
		$("#cbPension_OL_person").prop("checked", true);
	}else{
		$("#cbPension_OL_person").prop("checked", false);
	}
	
	if($('#cbMedical_OL').prop('checked') == true){
		$("#cbMedical_OL_person").prop("checked", true);
	}else{
		$("#cbMedical_OL_person").prop("checked", false);
	}
	
	if($('#cbDividend_OL').prop('checked') == true){
		$("#cbDividend_person").prop("checked", true);
	}else{
		$("#cbDividend_person").prop("checked", false);
	}
	
	if($('#cbDie_OL').prop('checked') == false && $("#cbContract_OL").prop("checked") == false && $("#cbRefund_OL").prop("checked") == false && $("#cbPension_OL").prop("checked") == false && $('#cbMedical_OL').prop('checked') == false && $('#cbDividend_OL').prop('checked') == false){
		$("#benefitSubmit").prop("disabled", true);
	}else{
		$("#benefitSubmit").prop("disabled", false);
	}
}

function cancelTab_OL(page){
	if(page == 1){
		/*ผลประโยชน์/ความคุ้มครอง*/
		setTimeout(() => {
			$("#mainBenefit_OL").css("display", "block");
			$("#benefitDetail_OL").css("display", "none");
		}, 30);
		
	}
	
}

$("#GuaranteeOL_opt1").click(function(){
	$("#spanBoxGuaruntee_OL").attr("disabled", false);
	$("#select_fileGuaruntee_OL").attr("disabled", false);
	$("#benefit_Guaruntee_tbl").addClass("disabledAll");
	$('#btn_DV_add').prop('disabled', true);	
	$('#btn_DV_del').prop('disabled', true);
	$("#see_file_input_fileGuaruntee_OL").prop("disabled",true);
	$("#benefit_Guaruntee_tbl tbody>tr").each(function(){
		$(this).find("td:nth-child(2) option:contains('None')").prop("selected", "selected");
		$(this).find("td:nth-child(3) input").val("");
		$(this).find("td:nth-child(4) input").val("");
		$(this).find("td:nth-child(5) option:contains('None')").prop("selected", "selected");
		$(this).find("td:nth-child(6) option:contains('None')").prop("selected", "selected");
		$(this).find("td:nth-child(7) option:contains('None')").prop("selected", "selected");
	});
	
});

$("#GuaranteeOL_opt2").click(function(){
	$("#spanBoxGuaruntee_OL").attr("disabled", true);
	$("#select_fileGuaruntee_OL").attr("disabled", true);
	$("#input_fileGuaruntee_OL").val("");
	$("#benefit_Guaruntee_tbl").removeClass("disabledAll");
	$('#btn_DV_add').prop('disabled', false);	
	$('#btn_DV_del').prop('disabled', false);
	$("#fileID_OL").val("");
	$("#layoutID_OL").val("");
	$("#validate_fileGuaruntee_OL").show();
	$("#select_fileGuaruntee_OL").val("");	
	$("#see_file_input_fileGuaruntee_OL").prop("disabled",true);
});

function saveSelectDeathException_OL(){	
	var num_row_exception = $("#tbl_DeathExceptionOL tbody>tr").length;
	
	$("#tbl_DeathExceptionOL_modal input[type='checkbox']:checked").each(function(){
		var key = $(this).parent().parent().find('td:nth-child(1) input').val();
		var chk_match = false;
		var lb_ExceptionSelect = $(this).parent().parent().find('td:nth-child(2) label').text();
		for(var i = 0; i < num_row_exception; i++){
			if(key == $("#tbl_DeathExceptionOL tbody>tr").eq(i).find("td:nth-child(1)").data("key")){
				chk_match = true;
			}
		}
		

		var lastImgOK = $('#tbl_DeathExceptionOL>tbody>tr:last>td:first').attr("id") || 0;
		var numberImgOK = 0;
					
		if(lastImgOK == 0){
			numberImgOK = 1;
		}else{
			numberImgOK = Number(lastImgOK.replace("imgOK_exception",""))+1;
		}
		
		if(num_row_exception == 0 || chk_match == false){
			var row = "";
			row = "<tr id='tbody_exception"+numberImgOK+"'>"+					    								
					  "<td id='imgOK_exception"+numberImgOK+"' class='text-center borderBlack'"+
					  "onclick='imgCheckbox_exception_OL("+numberImgOK+");' data-key='"+key+"' style='vertical-align: middle;'>" +
					  "<i class='glyphicon glyphicon-edit'></i>" +
					  "</td>"+	
					  "<td class='text-center borderBlack' style='vertical-align: middle;'><span class='spanException_OL' id='orderID"+numberImgOK+"'></span></td>"+									
					  "<td class='borderBlack verticalCenter'><input type='text' name='exception_name[]' id='exception_name"+numberImgOK+"' class='form-control margin-padding0 text-center;' value='"+lb_ExceptionSelect+"' readonly></td>"+											  									
				  "</tr>";			
			
			$("#tbl_DeathExceptionOL tbody").append(row);
			
		}
	})
	/*ลบค่า*/
	$("#tbl_DeathExceptionOL_modal input[type='checkbox']").each(function(){
		
		if(!$(this).is(':checked')){
		
			var unchecked = $(this).val();
			var topic = "";
			
			$("#tbl_DeathExceptionOL tbody>tr").each(function(){
				if( unchecked == $(this).find('td:nth-child(1)').data("key")){
					topic = $(this).find('td:nth-child(1)').data('key')
					$(this).remove();
				}
				var topic_running = $(this).find('td:nth-child(1)').data('key')
				if( topic == topic_running){
					$(this).remove();
				}
			})
		}
	})
	

	$("#tbl_DeathExceptionOL>tbody>tr").each(function(no){
		$(this).find("td:nth-child(2)").text(no+1)
	});
	
	
	if($("#div_DeathExceptionOL").innerHeight() > 792){
		$("#div_DeathExceptionOL").addClass("scroll_policy");
	}
 
	$("#modal_DeathExceptionOL").modal("hide");

	$("#tbl_DeathExceptionOL input[name='opt_ExceptionSelect[]']").prop("checked", false);
	
	
}

function imgCheckbox_exception_OL(id)
{
	var imgOK = "imgOK_exception"+id;
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

function confirmDeleteException_OL(){
	
	/*if($("#div_DeathExceptionOL").innerHeight() > 792){
		$("#div_DeathExceptionOL").addClass("scroll_policy");
	}else{
		$("#div_DeathExceptionOL").removeClass("scroll_policy");
	}*/
	
	var imgOKcount = $("#tbl_DeathExceptionOL i.glyphicon-ok").length;
	if(imgOKcount <= 0)
	{	
		message = "กรุณาเลือกรายการที่ต้องการลบ";
		alertError(message);
	}else{
		
	message = "ต้องการลบรายการใช่หรือไม่";
	alertDeleteError(message);
		
	$("#btn_confirm_del").click(function(){				
		var lastImgOK = $('#tbl_DeathExceptionOL >tbody>tr:last>td:first').attr("id") || 0;	
		var numberImgOK = 0;
		if(lastImgOK == 0){
			numberImgOK = 1;
		}else{
			numberImgOK = Number(lastImgOK.replace("imgOK_exception",""))+1;
		}
		
		for(var i = 1;i<=numberImgOK;i++){
				var checked = $('#tbody_exception'+i+' >td:first>i').attr("class");
				if(checked == "glyphicon glyphicon-ok"){	
		
					/*คืนค่าที่ลบในตาราง*/
					var tr_bodyRecord = $('#tbody_exception'+i+" input[name='exception_name[]']").val();
					
					$("#tbl_DeathExceptionOL_modal tbody>tr").each(function(){
						var lb_endorsement_CL = $(this).find("label").text();
												
						if(lb_endorsement_CL == tr_bodyRecord){
							$(this).show();
						}
					});
					
					deleteTableRow('#tbody_exception'+i);	
							
					nameTab 	= "menu_OL_5";
					Statuesave = "N";
					
				}				
		 }
		 /*create new order number in span*/
		$('#tbl_DeathExceptionOL >tbody>tr').each(function(no){
			$(this).find("td:nth-child(2)").text(no+1);
		})
			
		 /*create new order number in span*/
		 /*var record_count = $("#tbl_DeathExceptionOL>tbody>tr").length;
		 var table = document.getElementById("tbl_DeathExceptionOL");
		 var spans = table.getElementsByClassName("spanException_OL");
			for(var j = 0;j<record_count;j++){					
				//alert(spans[j].innerHTML);				
				spans[j].innerHTML = j+1;							 						
			}*/	
	  });
	}
}

/*อนุมัติ*/
/*$(document).on("click", ".open-approve_OL", function () {
    var cov_code = $("#code_Coverage_OL").val();
    $("#confirmApprove0051_user_OL .modal-body p>span").html(cov_code);

	$('#confirmApprove0051_user_OL').modal('show');
});

$(document).on("click", ".open-approve-other_OL", function () {
    var cov_code = $("#code_Coverage_OL").val();
    $("#confirmApprove0051_OL .modal-body p>span").html(cov_code);
    
	$('#confirmApprove0051_OL').modal('show');
});

$(document).on("click", ".open-Notapprove_OL", function () {
    var cov_code = $("#code_Coverage_OL").val();
    $("#confirmNotApprove0051_OL .modal-body p>span").html(cov_code);
    
	$('#confirmNotApprove0051_OL').modal('show');
});*/


//Tab Approved
function bt_approved_OL(claim){
	var cov_code = $("#code_Coverage_OL").val();
	var name_TH = $("#approve_nameTH_OL").val();
	var name_EN = $("#approve_nameEN_OL").val();
	var status_policy = $("#status_policy_OL").val();
	var groupName = $("#groupName").val();
	
	var empNameHide=$("#empNameHide").val();
	var departmentID=$("#departmentID").val();
	var departmentHide=$("#departmentHide").val();
	
	var prepareEmail_data = [];
	
	var status_th="";
	
	var status = "";
	var remark_noApproved = "";
	var remark_update = "";
	
	if(claim == "request"){
		status = "request_for_approve";
		status_th	= "ขออนุมัติ";
		$("#div_request_approveOL button").addClass("disabledAll");
	}else if(claim == "approved"){
		status = "approved";
		status_th	= "อนุมัติ";
		$("#div_approveOL>div>button").addClass("disabledAll");
	}else if(claim == "not_approved"){
		status = "rejected";
		status_th	= "ไม่อนุมัติ";
		remark_noApproved = $('#comment_notApprovedOL').val();
		$("#div_approveOL>div>button").addClass("disabledAll");
	}else if(claim == "request_update"){
		status = "request_update";
		status_th	= "ขอแก้ไข";
		remark_update = $('#comment_RequestEditOL').val();
		$("#div_request_editOL button").addClass("disabledAll");
	}else if(claim == "approved_update"){
		status = "update";	
		status_th	= "อนุมัติแก้ไข";
		$("#div_approveEditOL>div>button").addClass("disabledAll");
	}else if(claim == "not_approved_update"){
		status = "approved_update";
		status_th	= "ไม่อนุมัติแก้ไข";
		remark_noApproved = $('#comment_notApprovedEditOL').val();
		$("#div_approveEditOL>div>button").addClass("disabledAll");
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
		 url: "BasePlanOL_SaveData_Servlet", 
		 data: data_json,
		 success: function(response){
			console.log(response);
			
			/***  CODE FOR PREPARE AND SEND MAIL  ****/
			//debugger;
			
				var prepareEmail_data = [];
				objEmail = {};
				objEmail["requestApprove"] 		=status_th;
				objEmail["manuName"] 			="ความคุ้มครองสัญญาหลัก";
				objEmail["empNameHide"] 		=$("#empNameHide").val();
				objEmail["empID"] 				=$("#empID").val();
				objEmail["departmentID"] 		=$("#departmentID").val();
				objEmail["departmentHide"] 		=$("#departmentHide").val();
				
				objEmail["cov_code"] 			=cov_code;
				objEmail["name_TH"] 			=name_TH;
				objEmail["name_EN"] 			=name_EN;
				
				prepareEmail_data.push(objEmail);
				
				var data_json2 = {
			        	"method": "send_Email",
			        	"OptionEmail": "1",
			        	"prepareEmail_data": JSON.stringify(prepareEmail_data),
			            
				}
				$.ajax({
					 type: "POST",
					 url: "UW_Email_Servlet", 
					 data: data_json2,
					 success: function(response){
						console.log(response);
					 }
				 });
				console.log("dataEmail",data_json2)
			
			
			/***  END CODE FOR PREPARE AND SEND MAIL  ****/
		 }
	 });
	console.log("data",data_json)
}

//setting Approve Lookup
function setting_LookupApproveOL(response){
	var obj_BI = response.Tab_Basic_Information[0];
	var cov_code = $("#pass_Insurance_coverage_ol").val();
	
	$("#code_Coverage_OL").val(cov_code);
	$("#confirmApprove0051_user_OL .modal-body p>span").text(cov_code);
	$("#confirmApprove0051_OL .modal-body p>span").text(cov_code);
	$("#confirmNotApprove0051_OL .modal-body p>span").text(cov_code);
	$("#confirmEdit0051_user_OL .modal-body p>span").text(cov_code);
	$("#confirmApproveEdit0051_OL .modal-body p>span").text(cov_code);
	$("#confirmNotApproveEdit0051_OL .modal-body p>span").text(cov_code);
}

//Approve
function setting_ApproveOL(response,type,cov_code_temp,cov_code_Clone){
	var obj_BI = response.Tab_Basic_Information[0];
	/*NEW , UPDATE = แก้ไข, REQUEST_FOR_APPROVE = รออนุมัติ, APPROVED = อนุมัติ, REJECTED = ไม่อนุมัติ*/
	//var status = "UPDATE";
	
	//Pun Clone 21-11-2019
	var status 		= "";
	var status_RP 	= "";
	if (type == "Clone") {
		 status 	= "NEW";
		 status_RP 	= "NEW";
		 set_status_clone_Coverage(cov_code_Clone,$("#groupName").val());
			
	}else {
		 status 	= obj_BI.status;
		 status_RP 	= obj_BI.status_RP;
	}
	
	var cov_code = $("#pass_Insurance_coverage_ol").val();
	var cov_nameTH = obj_BI.nameTH
	var cov_nameEN = obj_BI.nameEN
	
	$("#code_Coverage_OL").val(cov_code);
	$("#approve_nameTH_OL").val(cov_nameTH);
	$("#approve_nameEN_OL").val(cov_nameEN);
	$("#cov_status").val(status);
	$("#cov_status_RP").val(status_RP);
	$("#confirmApprove0051_user_OL .modal-body p>span").text(cov_code);
	$("#confirmApprove0051_OL .modal-body p>span").text(cov_code);
	$("#confirmNotApprove0051_OL .modal-body p>span").text(cov_code);
	$("#confirmEdit0051_user_OL .modal-body p>span").text(cov_code);
	$("#confirmApproveEdit0051_OL .modal-body p>span").text(cov_code);
	$("#confirmNotApproveEdit0051_OL .modal-body p>span").text(cov_code);
	
	//enable tab
	if(status == "NEW" && status_RP == "NEW"){
		//No Action
	}else{
		 $("#menu_OL_7").removeClass("disabledAll");
		 $("#menu_OL_2").removeClass("disabledAll");
		 $("#menu_OL_3").removeClass("disabledAll");
		 $("#menu_OL_4").removeClass("disabledAll");
		 $("#menu_OL_5").removeClass("disabledAll");
		 $("#menu_OL_6").removeClass("disabledAll");
	}
}

/**********lookup*************/
function show_basicInfo_data_OL(response){
	/*1. Basic Info.*/
	/*mode*/	
	var baseplanCode = $("#pass_Insurance_coverage_ol").val();
	var row_BI = "";	
	for (i in response.Tab_Basic_Information[0].mode) {		
		var obj_BI = response.Tab_Basic_Information[0].mode[i];	
			row_BI = "<tr>"+
				  "<td><input name='mode_cl[]' id='mode"+i+"_ol' type='checkbox' value='"+obj_BI.value+"' onclick='check_mode_value_OL(this.id,this.value);'></td>"+
				  "<td><label for='mode"+i+"_ol'>"+obj_BI.pass+"</label></td>"+
				  "<td><label for='mode"+i+"_ol'>"+obj_BI.text+"</label></td>"+
				  "</tr>";
					  
			$("#tbl_BI_Mode_OL tbody").append(row_BI);
	}
		
	/*filing channel*/	
	var row_FL = "";		
	for (i in response.Tab_Basic_Information[0].filing_Channel) {
		var obj_FL = response.Tab_Basic_Information[0].filing_Channel[i];
			row_FL = "<tr>"+
				  "<td><input type='checkbox' id='ch_filingCN"+i+"_OL' value='"+obj_FL.pass+"'></td>"+
				  "<td><label for='ch_filingCN"+i+"_OL'>&nbsp;&nbsp;"+obj_FL.text+"</label></td>"+				
				  "</tr>";
						  
			$("#tbl_BI_FilingCN_OL tbody").append(row_FL);
	}	
	
	/*สูตรคำนวนณอายุ*/
	var row_AgeCal = "";		
	for (i in response.Tab_Basic_Information[0].cal_Age) {
		var obj_AgeCal = response.Tab_Basic_Information[0].cal_Age[i];
		row_AgeCal = "<tr>"+
			 "<td><input type='checkbox' id='ch_AgeCal"+i+"_OL' value='"+obj_AgeCal.pass+"'></td>"+
			 "<td><label for='ch_AgeCal"+i+"_OL'>&nbsp;&nbsp;"+obj_AgeCal.text+"</label></td>"+				
			 "</tr>";
		  
		  $("#tbl_BI_AgeCal_OL tbody").append(row_AgeCal);		  		  
	}
	
	/*เบี้ยประกัน*/
	var list_IRPremium = "";		
	for (i in response.Tab_Basic_Information[0].insurance_premium) {
		var obj_IRPremium = response.Tab_Basic_Information[0].insurance_premium[i];
		list_IRPremium = "<option value='"+obj_IRPremium.pass+"'>"+obj_IRPremium.text+"</option>";
		  
		  $("#sl_insurance_premium_ol").append(list_IRPremium);		  		  
	}
	
	$("#sl_insurance_premium_ol option").each(function(){
		if($(this).val() == "EACH"){
			$(this).attr("selected", "selected");
		}
	});
	
	/*ประเภทความคุ้มครอง*/
	var list_coverageType = "";		
	for (i in response.Tab_Basic_Information[0].protect_Type) {
		var obj_coverageType = response.Tab_Basic_Information[0].protect_Type[i];
		list_coverageType = "<option value='"+obj_coverageType.pass+"'>"+obj_coverageType.text+"</option>";
		  $("#sl_coverage_type_ol").append(list_coverageType);		  		  
	}
	
	$("#sl_coverage_type_ol option").each(function(){
		if($(this).val() == "CURRENCY"){
			$(this).attr("selected", "selected");
		}
	});
	
	/*ประเภทสัญญา*/
	var list_contractType = "";		
	for (i in response.Tab_Basic_Information[0].contract_Type) {
		var obj_contractType = response.Tab_Basic_Information[0].contract_Type[i];
		list_contractType = "<option value='"+obj_contractType.pass+"'>"+obj_contractType.text+"</option>";
		  
		  $("#sl_contract_type_ol").append(list_contractType);		  		  
	}
	
	$("#sl_contract_type_ol option").each(function(){
		if($(this).val() == "LONG_TERM"){
			$(this).attr("selected", "selected");
		}
	});
	
	/*หน่วย*/
	var list_unit = "";		
	for (i in response.Tab_Basic_Information[0].calendar) {
		var obj_unit = response.Tab_Basic_Information[0].calendar[i];
		list_unit = "<option value='"+obj_unit.pass+"'>"+obj_unit.text+"</option>";
		  
		  $(".list_unit1").append(list_unit);		  		  
	}
	
	$(".list_unit1 option").each(function(){
		if($(this).val() == "YEAR"){
			$(this).attr("selected", "selected");
		}
	});
	
	/*ตารางแบ่งจ่าย*/
	var tbl_row_periodLife = "";
	/*for (i in response.Tab_Basic_Information[0].pay_Separately) {
		var obj_periodLife = response.Tab_Basic_Information[0].pay_Separately[i];
		tbl_row_periodLife = 
			"<tr>"+	
			"<td class='borderBlack'><input id='ch_payment_"+i+"' type='checkbox' onclick='ch_payment_fun("+i+");' value='"+obj_periodLife.pass+"' disabled></td>"+
			"<td class='borderBlack'><label for='ch_payment_"+i+"'>"+obj_periodLife.pass+"</label></td>"+
			"<td class='borderBlack'>" +
			"<input id='set_Premium_Rate_"+i+"' type='text' class='auto text-right form-control' value='0.00' data-v-min='0.00' data-v-max='999.99' disabled='disabled'>" +
			"</td>"+
			"</tr>";			  
		$("#tb_Sperately_Pay tbody").append(tbl_row_periodLife);
	}*/
	var j = 0;
	for(jj=2; jj<=12; jj++){
		tbl_row_periodLife = 
			"<tr>"+	
			"<td class='borderBlack'><input id='ch_payment_ol_"+jj+"' type='checkbox' onclick='ch_payment_fun_ol("+jj+");' value='"+jj+"' disabled></td>"+
			"<td class='borderBlack'><label id='lb_payment_ol_"+jj+"' for='ch_payment_ol_"+jj+"'>"+jj+"</label></td>"+
			"<td class='borderBlack'>" +
			"<input id='set_Premium_Rate_ol_"+jj+"' type='text' class='auto text-right form-control' onblur='check_value_payment_OL("+jj+");' value='0.00' data-v-min='0.00' data-v-max='999.99' disabled='disabled'>" +
			"</td>"+
			"</tr>";			  
		$("#tb_Sperately_Pay_ol tbody").append(tbl_row_periodLife);
	}
	$('.auto').autoNumeric('init');
	 
	/*ตารางที่ใช้ในการคำนวณเบี้ย*/
	var data_CalPremiumUse = "";
	for( i in response.Tab_Basic_Information[0].table_cal){
		var obj_calPM =  response.Tab_Basic_Information[0].table_cal[i];
		row_calPM = "<tr id='tr_calPM"+i+"'>"+	
		"<td class='borderBlack'><input id='ch_calPM_"+i+"_ol' type='checkbox' onclick=\"ch_valPM_ol('"+i+"',this);\" value='"+obj_calPM.pass+"'>"+
		"<input type='hidden' id='hdd_either"+i+"_OL' value='"+obj_calPM.rateLayout[0].rate_cat_id+"' data-subcat='"+obj_calPM.rateLayout[0].sub_cat_id+"' data-layout='"+obj_calPM.rateLayout[0].rate_layout_id+"' data-pattern='"+obj_calPM.rateLayout[0].file_name_pattern+"' data-name='"+obj_calPM.rateLayout[0].name_en+"'>"+
		"<input type='hidden' id='hdd_male"+i+"_OL' value='"+obj_calPM.rateLayout[1].rate_cat_id+"' data-subcat='"+obj_calPM.rateLayout[1].sub_cat_id+"' data-layout='"+obj_calPM.rateLayout[1].rate_layout_id+"' data-pattern='"+obj_calPM.rateLayout[1].file_name_pattern+"' data-name='"+obj_calPM.rateLayout[1].name_en+"'>"+
		"<input type='hidden' id='hdd_female"+i+"_OL' value='"+obj_calPM.rateLayout[2].rate_cat_id+"' data-subcat='"+obj_calPM.rateLayout[2].sub_cat_id+"' data-layout='"+obj_calPM.rateLayout[2].rate_layout_id+"' data-pattern='"+obj_calPM.rateLayout[2].file_name_pattern+"' data-name='"+obj_calPM.rateLayout[2].name_en+"'>"+
		"</td>"+
		"<td class='borderBlack'><label for='ch_calPM_"+i+"_ol' id='lb_calPM_"+i+"_ol'>"+obj_calPM.text+"</label></td>"+
		"</tr>";			  
	$("#tb_CalPremiumUse_ol tbody").append(row_calPM);
	}
	
	  /*ตารางมรณะที่ใช้ในการคำนวณอัตราเบี้ย*/
	  var tbl_row_deathPremium = "";
		for (i in response.Tab_Basic_Information[0].table_Death) {
			var obj_deathPremium = response.Tab_Basic_Information[0].table_Death[i];
			tbl_row_deathPremium = 
			"<tr id='tr_DeathOL"+i+"'>"+	
			"<td class='borderBlack text-center'><input id='ch_D_ol_"+i+"' onclick='ch_Table_D_ol("+i+");' type='checkbox' value='"+obj_deathPremium.pass+"' disabled></td>"+
			"<td class='borderBlack text-center'><label for='ch_D_ol_"+i+"'>"+obj_deathPremium.text+"</label></td>"+
			/*"<td class=borderBlack text-right>"+
			"<input id='in_percent_D_"+i+"' type='text' class='auto text-right form-control' "+
			"'data-v-min='0' data-v-max='100' disabled='disabled'>"+
			"</td>"+*/
			"<td class='borderBlack' width='60%'><label id='textshow_tableD_ol_"+i+"'></label><input type='hidden' name='hdd_mort_id_ol' id='hdd_mort_id_ol"+i+"' value=''></td>"+
			"<td class='borderBlack' width='5%' ><input disabled id ='btn_Adddata_D_ol_"+i+"' type='button' class='btn btn-default btn-primary' value='...' onclick='showModal_Table_D_ol("+i+");'></td>"+			  
			"</tr>";
			
			$("#tb_BasicInformation_Death_OL tbody").append(tbl_row_deathPremium);
		}
		
		/*ตารางทุพพลภาพที่ใช้ในการคำนวณอัตราเบี้ย*/
		  var tbl_row_disabilityPremium = "";
			for (i in response.Tab_Basic_Information[0].table_Disability) {
				var obj_disabilityPremium = response.Tab_Basic_Information[0].table_Disability[i];
				tbl_row_disabilityPremium = 
				"<tr id='tr_TPDCL"+i+"'>"+
				"<td class='borderBlack text-center'><input id='ch_TPD_ol_"+i+"' onclick='ch_Table_TPD_ol("+i+");' value='"+obj_disabilityPremium.pass+"' type='checkbox' disabled>"+
				"</td>"+
				"<td class='borderBlack text-center'><label for='ch_TPD_ol_"+i+"'>"+obj_disabilityPremium.text+"</label></td>"+
				/*"<td class='borderBlack text-right'>"+
				"<input id='in_percent_TPD_"+i+"'  type='text' class='auto text-right form-control' data-v-min='0' data-v-max='100' disabled'>"+
				"</td>"+*/
				"<td width='60%' class='borderBlack'><label id='textshow_tableTPD_ol_"+i+"'></label><input type='hidden' name='hdd_tpd_ol_id' id='hdd_tpd_ol_id"+i+"' value=''></td>"+
				"<td  width='5%' class='borderBlack'><input disabled type='button' id ='btn_Adddata_TPD_ol_"+i+"' class='btn btn-default btn-primary' value='...' onclick='showModal_Table_TPD_OL("+i+");'></td>"+
				"</tr>";
				
				$("#tb_BasicInformation_TPD_OL tbody").append(tbl_row_disabilityPremium);
			}

			//สร้างข้อมูล ตารางมรณะ modal		
			$("#mo_Table_D_OL tbody").find("tr").remove();			
			var tbl_death_modal = "";
			for (i in response.Tab_Basic_Information[0].table_Death2) {
				var obj_death_modal = response.Tab_Basic_Information[0].table_Death2[i];						
				tbl_death_modal = "<tr>" +	
						"<td  class='borderBlack' width='5%' align='center'><input onclick='ra_table_D_ol("+i+")' id='ra_table_D_ol_"+i+"' value="+obj_death_modal.pass+" type='radio' name='check_D_ol'></td>"+
						"<td  class='borderBlack' width='95%'><Label id='text_Table_D_ol_"+i+"' for='ra_table_D_ol_"+i+"'>"+obj_death_modal.text+"</Label></td>"+
					"</tr>";			  
				$("#mo_Table_D_OL tbody").append(tbl_death_modal);
			}
			
			//สร้างสร้างข้อมูล ตารางทุพพลภาพ	modal		
			$("#mo_Table_TPD_OL tbody").find("tr").remove();
			var tbl_disability_modal = "";
			for (i in response.Tab_Basic_Information[0].table_Disability2) {
			var obj_disability_modal = response.Tab_Basic_Information[0].table_Disability2[i];	
			tbl_disability_modal = "<tr>" +	
						"<td  class='borderBlack' width='5%' align='center'><input onclick='ra_table_TPD_ol("+i+")' id='ra_table_TPD_ol_"+i+"' value="+obj_disability_modal.pass+" type='radio' name='check_TPD'></td>"+
						"<td  class='borderBlack' width='95%'><Label id='text_Table_TPD_ol_"+i+"' for='ra_table_TPD_ol_"+i+"'>"+obj_disability_modal.text+"</Label></td>"+
					  "</tr>";			  
				$("#mo_Table_TPD_OL tbody").append(tbl_disability_modal);
			}
			
		/*ตารางลดหย่อนภาษี*/
			var tbl_row_taxDeduction = "";
			var rowTax = "";
			for(i in response.Tab_Basic_Information[0].table_TaxReduce[0]){
				rowTax++;
				var obj_taxDeduction = response.Tab_Basic_Information[0].table_TaxReduce[0][i][0];
				
				tbl_row_taxDeduction = 
					"<tr id='tbody_TaxReduce_OL_"+rowTax+"' data-id="+obj_taxDeduction.rate_cat_id+">"+
						"<td id='td_TaxReduce_OL_"+rowTax+"' width='5%' class='borderBlack' style='background-color: gray;'></td>"+
						"<td width='25%' class='borderBlack'><label>"+obj_taxDeduction.text+"</label>"+
							"<input id='topics_Tax_OL_"+rowTax+"' value='"+obj_taxDeduction.rate_cat_id+"' type='hidden'>"+
						"</td>"+
						"<td width='55%' class='borderBlack'>"+
						"<input name='tax_type_OL[]' id='tax_type_OL"+rowTax+"' value='"+obj_taxDeduction.rate_cat_id+"' type='hidden'>"+
							"<div class='input-group'>"+
							"<input type='text' class='form-control' id='fileuploads_TaxText"+rowTax+"_OL' readonly=''>"+
							"<label class='input-group-btn'>"+ 
							"<span id='spanTax"+rowTax+"_OL' class='btn btn-primary'>..."+
							"<input id='fileuploads_Tax"+rowTax+"_OL' type='file' accept='text/plain' style='display: none;'>"+ 
							"</span>"+
							"</label>"+
							"</div>"+
							"<input type='hidden' name='hdd_rateSub' id='hdd_rateSub_OL"+rowTax+"' value='"+obj_taxDeduction.sub_rate_cat+"'>"+
							"<input type='hidden' name='hdd_layoutID' id='hdd_layoutID_OL"+rowTax+"' value=''>"+
							"<input type='hidden' name='hdd_fileID' id='hdd_fileID_OL"+rowTax+"' value=''>"+
							"<input type='hidden' id='base64_fileTXT_OL' value=''>"+
					   "</td>"+
					   "<td width='8%' class='borderBlack'>"+
							"<a id='span_TaxDel_OL_"+rowTax+"' class='active_grey' onclick='reset_fileTax_OL("+rowTax+");'>"+
								"<span class='glyphicon glyphicon-refresh activecolorgray'></span>"+
							"</a>"+
						"</td>"+
						"<td width='8%' class='borderBlack'>"+
							"<a id='span_TaxOpen_OL_"+rowTax+"' class='active_grey'>"+
								"<span class='glyphicon glyphicon-eye-open activecolorgray'></span>"+
							"</a>"+
						"</td>"+
						"<td width='7%' class='borderBlack'>"+
							"<a id='span_Taxdownload_OL_"+rowTax+"' class='active_grey'>"+
								"<span class='glyphicon glyphicon-download-alt activecolorgray'></span>"+
							"</a>"+
						"</td>"+
					"</tr>";
				
				$("#tb_TaxReduce_OL tbody").append(tbl_row_taxDeduction);
				
				/*ลดหย่อนภาษี*/
				getLayout_tax_OL(rowTax, obj_taxDeduction.rate_cat_id, obj_taxDeduction.file, baseplanCode);	
				
				/*Khwan Fix 03/12/2019*/
				getLayoutMain_OL(obj_taxDeduction.rate_cat_id, 1, obj_taxDeduction.ratelayoutdet);		

			}
			
			// ค่าเริ่มต้นตาม User
			$("#ch_male_ol").prop("checked", true);
			$("#ch_female_ol").prop("checked", true);
			
			if($("#ch_male_ol").prop("checked") == true || $("#ch_female_ol").prop("checked") == true){
				$("#validate_input11_ol").hide();
			}else{
				$("#validate_input11_ol").show();
			}
			
			if($("#tb_BasicInformation1_OL tbody>tr").length <= 0){
				addRowBasicInformation1_OL();
				
				$("#tb_BasicInformation1_OL tbody>tr").addClass("disabledAll");
			}
}

function show_policyWording_data_OL(response){
	var list_policy = "";	
	var j = 0;
	for (i in response.Tab_Policy_Wording) {
		var obj_policy = response.Tab_Policy_Wording[i];
		j++;
		
		list_policy = "<tr id='tbody_policy_OL"+i+"' data-id='"+obj_policy.pass+"'>"+
					  "<td id='imgOK_policy_OL"+i+"' class='text-center borderBlack td_disabled'></td>"+
					  "<td class='text-center borderBlack' style='vertical-align: middle;'><span class='spanPolicy_OL' id='OrderID_OL"+j+"'>"+j+"</span></td>"+									
					  "<td class='borderBlack verticalCenter'><input type='text' name='policy_name_OL[]' id='policy_name_OL"+j+"' class='form-control margin-padding0 text-center;' value='"+obj_policy.text+"' readonly></td>"+									
					  "<td class='borderBlack' align='center'>"+
					  "<input type='hidden' id='fileId_pdf_OL"+j+"'>"+
					  "<div class='input-group col-xs-12'>"+
					  	"<div id='div_pdf_policy"+j+"_OL' class='filename'>None</div>"+		
							"<a class='open-AddUploadDialog_pdf_OL' data-toggle='modal' data-id='"+j+"' href='#modal_upload_pdf_OL'><button class='btn btn-default btn-primary' type='button' onclick='oldFile_policyWording_OL("+obj_policy.pass+",2);' id='btn_pdf_policy"+j+"_OL'>...</button></a>"+ 									
					  "</div>"+
					 "</td>"+
					 "<td class='text-center borderBlack vertical-middle'>"+
						"<a id='span_reset_pdf_OL"+j+"' class='active_grey' onclick=\"resetFilePolicy_OL("+j+",'pdf');\"><span class='glyphicon glyphicon-refresh'></span></a>"+
					 "</td>"+
					 "<td class='borderBlack' align='center'>"+
					 "<input type='hidden' id='fileId_doc_OL"+j+"'>"+
						"<div class='input-group col-xs-12'>"+
							"<div id='div_word_policy"+j+"_OL' class='filename'>None</div>"+
							"<a class='open-AddUploadDialog_word_OL' data-toggle='modal' data-id='"+j+"' href='#modal_upload_word_OL'><button class='btn btn-default btn-primary' type='button' onclick='oldFile_policyWording_OL("+obj_policy.pass+",1);' id='btn_word_policy"+j+"_OL'>...</button></a>"+									
						"</div>"+
					 "</td>"+
					 "<td class='text-center borderBlack vertical-middle'>"+
						"<a id='span_reset_word_OL"+j+"' class='active_grey' onclick=\"resetFilePolicy_OL("+j+",'word');\"><span class='glyphicon glyphicon-refresh'></span></a>"+
					 "</td>"+									
					 "<td class='text-center borderBlack vertical-middle'>"+
						"<a id='span_history_OL"+j+"' class='active_grey open-HistoryDialog_OL' onclick='history_policyWording_OL("+obj_policy.pass+")' data-toggle='modal' data-id='"+j+"' ><span class='glyphicon glyphicon-time'></span></a>"+										
					 "</td>"+										
					 "</tr>";
		  
		  $("#Policy_Table_OL tbody").append(list_policy);		  		  
	}	
}

function show_privilege_insurance_data_OL(response){
	//CASH_SURR
	var list_CASH_SURR = "";
	list_CASH_SURR = "<option value='0'>None</option>";
	for(i in response.Tab_exercise_rights_insurance[0].CASH_SURR){
		var obj_CASH_SURR = response.Tab_exercise_rights_insurance[0].CASH_SURR[i];
		list_CASH_SURR += "<option value="+obj_CASH_SURR.pass+">"+obj_CASH_SURR.text+"</option>";
		
	}
	$("#sel_Surrender_ol").append(list_CASH_SURR);
	
	var list_ETI = "";	
	list_ETI = "<option value='0'>None</option>";
	for (i in response.Tab_exercise_rights_insurance[0].ETI) {
		var obj_ETI = response.Tab_exercise_rights_insurance[0].ETI[i];
		list_ETI += "<option value="+obj_ETI.pass+">"+obj_ETI.text+"</option>";
			  		  
	}
	$("#sel_ETI_ol").append(list_ETI);	
	
	var list_AutoETI = "";	
	list_AutoETI = "<option value='0'>None</option>";
	for (i in response.Tab_exercise_rights_insurance[0].ETI) {
		var obj_AutoETI = response.Tab_exercise_rights_insurance[0].ETI[i];
		list_AutoETI += "<option value="+obj_AutoETI.pass+">"+obj_AutoETI.text+"</option>";
		
	}
	$("#sel_AutoETI_ol").append(list_AutoETI);		  		  
	
	var list_ETITo = "";
	list_ETITo = "<option value='NONE'>None</option>";
	for (i in response.Tab_exercise_rights_insurance[0].protection_To) {
		var obj_ETITo = response.Tab_exercise_rights_insurance[0].protection_To[i];
		list_ETITo += "<option value="+obj_ETITo.pass+">"+obj_ETITo.text+"</option>";
		   		  
	}
	$("#sel_PhaseETI_ol").append(list_ETITo);		
	
	var list_calendar = "";	
	//alert(response.Tab_exercise_rights_insurance[0].calendar);
	for (i in response.Tab_exercise_rights_insurance[0].calendar) {
		var obj_ETITo = response.Tab_exercise_rights_insurance[0].calendar[i];
		list_calendar = "<option value="+obj_ETITo.pass+">"+obj_ETITo.text+"</option>";
		
		$("#dmy_2_1_ol,#dmy_2_2_ol").append(list_calendar); 				  		  
	}
	
	$("#dmy_2_1_ol option:contains('ปี'), #dmy_2_2_ol option:contains('ปี')").prop("selected", "selected");

	var list_RPU = "";	
	list_RPU = "<option value='0'>None</option>";
	for (i in response.Tab_exercise_rights_insurance[0].RPU) {
		var obj_RPU = response.Tab_exercise_rights_insurance[0].RPU[i];
		list_RPU += "<option value="+obj_RPU.pass+">"+obj_RPU.text+"</option>";
		    
	}
	$("#sel_RPU_ol").append(list_RPU);		  
	
	var list_AutoRPU = "";
	list_AutoRPU = "<option value='0'>None</option>";
	for (i in response.Tab_exercise_rights_insurance[0].RPU) {
		var obj_AutoRPU = response.Tab_exercise_rights_insurance[0].RPU[i];
		list_AutoRPU += "<option value="+obj_AutoRPU.pass+">"+obj_AutoRPU.text+"</option>";
				  		  
	}
	$("#sel_AutoRPU_ol").append(list_AutoRPU);
	
	var list_RPUTo = "";	
	list_RPUTo = "<option value='NONE'>None</option>";
	for (i in response.Tab_exercise_rights_insurance[0].protection_To) {
		var obj_RPUTo = response.Tab_exercise_rights_insurance[0].protection_To[i];
		list_RPUTo += "<option value="+obj_RPUTo.pass+">"+obj_RPUTo.text+"</option>";
		 		  		  
	}
	$("#sel_PhaseRPU_ol").append(list_RPUTo);
	
	/*คำนวณทุนจากเบี้ยประกัน*/
	if($("#sl_menu3_capital_ol option:selected").text() == "None"){
		selectType_OL("",3);		
	}
}

function show_cal_premium_data_OL(response){
	var list_AgeBand = "";	
	var j = 0;
	for (i in response.Tab_cal_insurance_premiums[0].age_Band) {
		j++;
		var obj_AgeBand = response.Tab_cal_insurance_premiums[0].age_Band[i];
		list_AgeBand = "<tr id='tr_AgeBand_OL"+j+"'>"+
					   "<td class='borderBlack' style='vertical-align: middle;'><input type='checkbox' id='imgOK_ageBand_OL"+j+"' value='"+obj_AgeBand.Band+"' onclick='select_AgeBand_OL("+j+")'></td>"+
					   "<td class='borderBlack'>"+obj_AgeBand.Band+"</td>"+
					   "<td class='borderBlack'>"+obj_AgeBand.text+"</td>"+
					   "</tr>";
		  
		$("#tb_Age_Band_OL tbody").append(list_AgeBand);		  		  
	}
	
	$("#div_Age_Band_OL *").attr("disabled", "disabled").off('click');
		
	/*PM type*/
	var pmRate = [];
	for (i in response.Tab_cal_insurance_premiums[0].PM_Type_premium) {
		var obj_PMType = response.Tab_cal_insurance_premiums[0].PM_Type_premium[i];
		pmRate.push(obj_PMType.name);	
	}
	$("#PMrate_type_OL").val(pmRate);
	
	var list_ExtraRate = "";	
	for (i in response.Tab_cal_insurance_premiums[0].selectbox_Extra_Premiums) {
		var obj_ExtraRate = response.Tab_cal_insurance_premiums[0].selectbox_Extra_Premiums[i];
		list_ExtraRate = "<option value='"+obj_ExtraRate.pattern[0].layout+"' data-subcat='"+obj_ExtraRate.pattern[1].sub_rate_cat+"' data-ratecat='"+obj_ExtraRate.pattern[3].rate_cat_id+"' data-layout='"+obj_ExtraRate.pattern[4].layout_id+"'>"+obj_ExtraRate.pattern[2].text+"</option>";
		
		var flag_dup = false
		$("#sl_insurance_premium_Extra_ol option").each(function(){
			if(obj_ExtraRate.pattern[0].layout == $(this).val()){
				flag_dup = true
			}
		})
		
		if(!flag_dup){
			$("#sl_insurance_premium_Extra_ol").append(list_ExtraRate);
		}
		
	}
		
	var list_CLRate = "";	
	for (i in response.Tab_cal_insurance_premiums[0].sa_Rate) {
		var obj_CLRate = response.Tab_cal_insurance_premiums[0].sa_Rate[i];
		list_CLRate = "<option value='"+obj_CLRate.pattern[0].layout+"' data-subcat='"+obj_CLRate.pattern[1].sub_rate_cat+"' data-ratecat='"+obj_CLRate.pattern[3].rate_cat_id+"' data-layout='"+obj_CLRate.pattern[4].layout_id+"'>"+obj_CLRate.pattern[2].text+"</option>";
		  
		$("#sl_Reduced_capital_Cal2_OL").append(list_CLRate);		  		  
	}

	var baseplanCode = $("#baseplanCode_OL").val();
	var list_EM = "";	
	for (i in response.Tab_cal_insurance_premiums[0].em_Age) {
		var obj_EM = response.Tab_cal_insurance_premiums[0].em_Age[i];
		list_EM = obj_EM.pattern[0].layout+baseplanCode+".txt";
		rate_cat = obj_EM.pattern[3].rate_cat_id;
		rate_layout = obj_EM.pattern[4].layout_id;
		
		selectTypeCal_OL(list_EM,1,rate_cat,rate_layout);
		
		$("#spanBoxCal1_OL").attr("disabled",true);	  		  
	}

	selectTypeCal_OL("",2,"","");
	$("#spanBoxCal2_OL").attr("disabled",true);
	
	/*PM Rate*/
	var tb_pmRate_hidden = "<input type='hidden' id='rm_rateLayout1_OL' value=''>"+
							"<input type='hidden' id='rm_fileID1_OL' value=''>";
	$("#div_filePM1_OL").append(tb_pmRate_hidden)
	
	/** set Rate Cat ID**/
	/*PM Rate*/
	$("#rateCat_tbStardard_OL").val(response.Tab_cal_insurance_premiums[0].tb_premiums.premiums_cal_layout_0[0].rate_cat_id_specific);
	$("#rateCat_tbStardard_age_OL").val(response.Tab_cal_insurance_premiums[0].tb_premiums.premiums_cal_layout_0[0].rate_cat_id_age_Band);
	/*PM Rate P*/
	$("#rateCat_tbStardard_P_OL").val(response.Tab_cal_insurance_premiums[0].tb_premiums.premiums_cal_layout_6[0].rate_cat_id_specific);
	$("#rateCat_tbStardard_age_P_OL").val(response.Tab_cal_insurance_premiums[0].tb_premiums.premiums_cal_layout_6[0].rate_cat_id_age_Band);
	/*Extra Rate*/
	$("#rateCat_tbExtra_OL").val(response.Tab_cal_insurance_premiums[0].tb_premiums.premiums_cal_layout_3[0].rate_cat_id_specific);
	$("#rateCat_tbExtra_P_OL").val(response.Tab_cal_insurance_premiums[0].tb_premiums.premiums_cal_layout_8[0].rate_cat_id_specific);
	/*EM*/
	$("#rateCat_inputEM_OL").val(response.Tab_cal_insurance_premiums[0].tb_premiums.premiums_cal_layout_4[0].rate_cat_id_specific);
	$("#rateSubCat_inputEM_OL").val(response.Tab_cal_insurance_premiums[0].em_Age[0].pattern[1].sub_rate_cat);
	/*SA*/
	$("#rateCat_inputSA_OL").val(response.Tab_cal_insurance_premiums[0].tb_premiums.premiums_cal_layout_5[0].rate_cat_id_specific);
	/*คำนวณทุนจากเบี้ยประกัน*/
	$("#rateCat_capital_OL").val(response.Tab_cal_insurance_premiums[0].tb_premiums.premiums_cal_layout_2[0].rate_cat_id_specific);
	$("#rateSubCat_capital_OL").val(response.Tab_cal_insurance_premiums[0].tb_premiums.premiums_cal_layout_2[0].rate_cat_id_age_Band);
	/*คำนวณทุนจากเบี้ยประกัน P*/
	$("#rateCat_capital_P_OL").val(response.Tab_cal_insurance_premiums[0].tb_premiums.premiums_cal_layout_7[0].rate_cat_id_specific);
	$("#rateSubCat_capital_P_OL").val(response.Tab_cal_insurance_premiums[0].tb_premiums.premiums_cal_layout_7[0].rate_cat_id_age_Band);
	
	
	/*EM*/	
	var tb_em_hidden = "<input type='hidden' id='em_rateLayout1_OL' value=''>"+
	"<input type='hidden' id='em_fileID1_OL' value=''>";

	$("#div_fileCal1_OL").append(tb_em_hidden);
	
	/*Dis SA*/		
	var tb_decrease_hidden =
		"<input type='hidden' id='decrease_rateLayout2_OL' value=''>"+
		"<input type='hidden' id='decrease_fileID2_OL' value=''>";
	
	$("#div_fileCal2_OL").append(tb_decrease_hidden);
	
	/**********เพิ่มใน OL********/
	/*คำนวณเบี้ยจากทุนประกัน	*/
	var list_STDRate = "";	
	for (i in response.Tab_cal_insurance_premiums[0].selectbox_Std_Premiums[0].specific) {
		var obj_STDRate = response.Tab_cal_insurance_premiums[0].selectbox_Std_Premiums[0].specific[i];
		var this_layout = obj_STDRate.layout;
		var this_layout_band_id = "";
		
		/*Khwan Fix get layout Age band map for PMRate*/
		for (ii in response.Tab_cal_insurance_premiums[0].selectbox_Std_Premiums[0].age_band) {
			var obj_band = response.Tab_cal_insurance_premiums[0].selectbox_Std_Premiums[0].age_band[ii];
			var this_layout_band = obj_band.layout;
			
			if(this_layout == this_layout_band){
				this_layout_band_id = obj_band.layout_id;
			}
			
		}
		
		list_STDRate += "<option value='"+obj_STDRate.layout+"' data-subcat='"+obj_STDRate.sub_rate_cat+"' data-ratecat='"+obj_STDRate.rate_cat_id+"' data-layout='"+obj_STDRate.layout_id+"' data-layoutsub='"+this_layout_band_id+"'>"+obj_STDRate.text+"</option>";	  
	}		
	$("#dd_insurance_premium_OL").val(list_STDRate);	
	//$("#sl_menu3_insurance_premium_ol").append(list_STDRate);
	
	/*คำนวณทุนจากเบี้ยประกัน*/
	var list_SARate = "";	
	for (i in response.Tab_cal_insurance_premiums[0].cal_Sa[0].specific) {
		var obj_SARate = response.Tab_cal_insurance_premiums[0].cal_Sa[0].specific[i];
		var this_layout = obj_SARate.layout;
		var this_layout_band_id = "";
		
		/*Khwan Fix get layout Age band map for PMRate*/
		for (ii in response.Tab_cal_insurance_premiums[0].cal_Sa[0].age_band) {
			var obj_band = response.Tab_cal_insurance_premiums[0].cal_Sa[0].age_band[ii];
			var this_layout_band = obj_band.layout;
			
			if(this_layout == this_layout_band){
				this_layout_band_id = obj_band.layout_id;
			}
			
		}
		
		list_SARate += "<option value='"+obj_SARate.layout+"' data-subcat='"+obj_SARate.sub_rate_cat+"' data-ratecat='"+obj_SARate.rate_cat_id+"' data-layout='"+obj_SARate.layout_id+"' data-layoutsub='"+this_layout_band_id+"'>"+obj_SARate.text+"</option>";	  
	}
	//$("#sl_menu3_capital_ol").append(list_SARate);	
	$("#dd_capital_OL").val(list_SARate);
	
	/*ใส่ข้อมูล dropdown*/
	var num_dd_pm = $("#sl_menu3_insurance_premium_ol option[value!='NONE']").length;
	if(num_dd_pm <= 0){
		$("#sl_menu3_insurance_premium_ol").append($("#dd_insurance_premium_OL").val());
	}
	
	/*ตารางส่วนลดตามทุนประกัน*/
	var obj_disSa = response.Tab_cal_insurance_premiums[0].dis_Sa[0];
	list_disSa = obj_disSa.pattern[0].layout+baseplanCode+".txt";
	ratecat_disSa = obj_disSa.pattern[3].rate_cat_id;
	ratelayout_disSa = obj_disSa.pattern[4].layout_id;
	
	selectTypeCal_OL(list_disSa,3,ratecat_disSa,ratelayout_disSa);	 
	
	$("#spanBoxCal3_OL").attr("disabled", true)
	
	var tb_disSa_hidden = "<input type='hidden' id='dsc_rateLayout3_OL' value=''>"+
	"<input type='hidden' id='dsc_fileID3_OL' value=''>";

	$("#div_fileCal3_OL").append(tb_disSa_hidden);
	$("#validate_filerate3_OL").hide();
	
	$("#rateCat_inputDisSA_OL").val(obj_disSa.pattern[3].rate_cat_id);
	$("#rateSubCat_inputDisSA_OL").val(obj_disSa.pattern[1].sub_rate_cat);
	
	/*****Khwan Fix 11/12/2019 Get New Layout*****/
	var obj_PMDet = "";
	var PM_Det_rate_cat = "";
	var PM_Det_layout = "";
	
	var obj_BandDet = "";
	var Band_Det_rate_cat = "";
	var Band_Det_layout = "";
	
	for (i in response.Tab_cal_insurance_premiums[0].selectbox_Std_Premiums[0].specific) {
		obj_PMDet = response.Tab_cal_insurance_premiums[0].selectbox_Std_Premiums[0].specific[i];
		PM_Det_rate_cat = obj_PMDet.rate_cat_id;
		PM_Det_layout = obj_PMDet.ratelayoutdet;
	}
	
	for (i in response.Tab_cal_insurance_premiums[0].selectbox_Std_Premiums[0].age_band) {
		obj_BandDet = response.Tab_cal_insurance_premiums[0].selectbox_Std_Premiums[0].age_band[i];
		Band_Det_rate_cat = obj_BandDet.rate_cat_id;
		Band_Det_layout = obj_BandDet.ratelayoutdet;		
	}
	
	getLayoutMain_OL(PM_Det_rate_cat, 2, PM_Det_layout);
	getLayoutMain_OL(Band_Det_rate_cat, 2, Band_Det_layout);
	
	//PM Rate P
	var obj_PMDet_P = "";
	var PM_Det_rate_cat_P = "";
	var PM_Det_layout_P = "";
	
	var obj_BandDet_P = "";
	var Band_Det_rate_cat_P = "";
	var Band_Det_layout_P = "";
	
	for (i in response.Tab_cal_insurance_premiums[0].selectbox_Std_Premiums_P[0].specific) {
		obj_PMDet_P = response.Tab_cal_insurance_premiums[0].selectbox_Std_Premiums_P[0].specific[i];
		PM_Det_rate_cat_P = obj_PMDet_P.rate_cat_id;
		PM_Det_layout_P = obj_PMDet_P.ratelayoutdet;
	}
	
	for (i in response.Tab_cal_insurance_premiums[0].selectbox_Std_Premiums_P[0].age_band) {
		obj_BandDet_P = response.Tab_cal_insurance_premiums[0].selectbox_Std_Premiums_P[0].age_band[i];
		Band_Det_rate_cat_P = obj_BandDet_P.rate_cat_id;
		Band_Det_layout_P = obj_BandDet_P.ratelayoutdet;		
	}
	
	getLayoutMain_OL(PM_Det_rate_cat_P, 2, PM_Det_layout_P);
	getLayoutMain_OL(Band_Det_rate_cat_P, 2, Band_Det_layout_P);
	
	
	//คำนวณทุนจากเบี้ยประกัน
	var obj_PMDet2 = "";
	var PM_Det_rate_cat2 = "";
	var PM_Det_layout2 = "";
	
	var obj_BandDet2 = "";
	var Band_Det_rate_cat2 = "";
	var Band_Det_layout2 = "";
	
	for (i in response.Tab_cal_insurance_premiums[0].cal_Sa[0].specific) {
		obj_PMDet2 = response.Tab_cal_insurance_premiums[0].cal_Sa[0].specific[i];
		PM_Det_rate_cat2 = obj_PMDet2.rate_cat_id;
		PM_Det_layout2 = obj_PMDet2.ratelayoutdet;
	}
	
	for (i in response.Tab_cal_insurance_premiums[0].cal_Sa[0].age_band) {
		obj_BandDet2 = response.Tab_cal_insurance_premiums[0].cal_Sa[0].age_band[i];
		Band_Det_rate_cat2 = obj_BandDet2.rate_cat_id;
		Band_Det_layout2 = obj_BandDet2.ratelayoutdet;		
	}
	
	getLayoutMain_OL(PM_Det_rate_cat2, 2, PM_Det_layout2);
	getLayoutMain_OL(Band_Det_rate_cat2, 2, Band_Det_layout2);
	
	//คำนวณทุนจากเบี้ยประกัน P
	var obj_PMDet2_P = "";
	var PM_Det_rate_cat2_P = "";
	var PM_Det_layout2_P = "";
	
	var obj_BandDet2_P = "";
	var Band_Det_rate_cat2_P = "";
	var Band_Det_layout2_P = "";
	
	for (i in response.Tab_cal_insurance_premiums[0].cal_Sa_P[0].specific) {
		obj_PMDet2_P = response.Tab_cal_insurance_premiums[0].cal_Sa_P[0].specific[i];
		PM_Det_rate_cat2_P = obj_PMDet2_P.rate_cat_id;
		PM_Det_layout2_P = obj_PMDet2_P.ratelayoutdet;
	}
	
	for (i in response.Tab_cal_insurance_premiums[0].cal_Sa_P[0].age_band) {
		obj_BandDet2_P = response.Tab_cal_insurance_premiums[0].cal_Sa_P[0].age_band[i];
		Band_Det_rate_cat2_P = obj_BandDet2_P.rate_cat_id;
		Band_Det_layout2_P = obj_BandDet2_P.ratelayoutdet;		
	}
	
	getLayoutMain_OL(PM_Det_rate_cat2_P, 2, PM_Det_layout2_P);
	getLayoutMain_OL(Band_Det_rate_cat2_P, 2, Band_Det_layout2_P);
	
	//extra Rate
	var obj_ExtraDet = "";
	var extra_Det_rate_cat = "";
	var extra_Det_layout = "";

	for (i in response.Tab_cal_insurance_premiums[0].selectbox_Extra_Premiums) {
		obj_ExtraDet = response.Tab_cal_insurance_premiums[0].selectbox_Extra_Premiums[i];
		extra_Det_rate_cat = obj_ExtraDet.pattern[3].rate_cat_id;
		extra_Det_layout = obj_ExtraDet.pattern[3].ratelayoutdet;
		
		getLayoutMain_OL(extra_Det_rate_cat, 3, extra_Det_layout);
	}

	//EM
	var obj_EMDet = "";
	var EM_Det_rate_cat = "";
	var EM_Det_layout = "";
	
	for (i in response.Tab_cal_insurance_premiums[0].em_Age) {
		obj_EMDet = response.Tab_cal_insurance_premiums[0].em_Age[i];
		EM_Det_rate_cat = obj_EMDet.pattern[3].rate_cat_id;
		EM_Det_layout = obj_EMDet.pattern[3].ratelayoutdet;
	}
	
	getLayoutMain_OL(EM_Det_rate_cat, 4, EM_Det_layout);
	
	//ทุนคุ้มครองที่ลดลง
	var obj_SADet = "";
	var SA_Det_rate_cat = "";
	var SA_Det_layout = "";
	
	for (i in response.Tab_cal_insurance_premiums[0].sa_Rate) {
		obj_SADet = response.Tab_cal_insurance_premiums[0].sa_Rate[i];
		SA_Det_rate_cat = obj_SADet.pattern[3].rate_cat_id;
		SA_Det_layout = obj_SADet.pattern[3].ratelayoutdet;
	}
	
	getLayoutMain_OL(SA_Det_rate_cat, 5, SA_Det_layout);
	
	//ส่วนลดตามทุนประกัน
	var obj_DisSADet = "";
	var DisSA_Det_rate_cat = "";
	var DisSA_Det_layout = "";
	
	for (i in response.Tab_cal_insurance_premiums[0].dis_Sa) {
		obj_DisSADet = response.Tab_cal_insurance_premiums[0].dis_Sa[i];
		DisSA_Det_rate_cat = obj_DisSADet.pattern[3].rate_cat_id;
		DisSA_Det_layout = obj_DisSADet.pattern[3].ratelayoutdet;
	}
	
	getLayoutMain_OL(DisSA_Det_rate_cat, 6, DisSA_Det_layout);
}

function show_PolicyValue_data_OL(response){
	var list_Risk = "";	
	for (i in response.Tab_table_policy_value[0].selectbox_standard_risk[0].specific[0]) {
		var obj_Risk = response.Tab_table_policy_value[0].selectbox_standard_risk[0].specific[0][i][0];
		var numrow_layout = obj_Risk.file.length;
		
		if(numrow_layout > 1){
			var format1 = obj_Risk.file[0].layout;
			var format2 = obj_Risk.file[1].layout;
			var file_format = format1+","+format2;
			
			var layout1 = obj_Risk.file[0].layout_id;
			var layout2 = obj_Risk.file[1].layout_id;
			var layout_format = layout1+","+layout2;
		}else{
			var format1 = obj_Risk.file[0].layout;
			var file_format = format1;
			
			var layout1 = obj_Risk.file[0].layout_id;
			var layout_format = layout1;
		}
		
		//age band layout map
		var this_layout_band_id = "";
		
		//Khwan Fix get layout Age band map for Age Specific
		for (ii in response.Tab_table_policy_value[0].selectbox_standard_risk[0].age_Band[0]) {
			var obj_band = response.Tab_table_policy_value[0].selectbox_standard_risk[0].age_Band[0][ii][0];
			var numrow_layout_band = obj_band.file.length;
			
			if(numrow_layout_band > 1){
				var band_format1 = obj_band.file[0].layout;
				var band_format2 = obj_band.file[1].layout;
				
				var band_layout1 = obj_band.file[0].layout_id;
				var band_layout2 = obj_band.file[1].layout_id;
				var band_layout_format = layout1+","+layout2;
				
				//check layout
				if(format1 == band_format1 && format2 == band_format2){
					var band_layout_id1 = band_layout1;
					var band_layout_id2 = band_layout2;
					var band_layout_id_format = band_layout_id1+","+band_layout_id2;
				}
				
			}else{
				var band_format1 = obj_band.file[0].layout;
				
				var band_layout1 = obj_band.file[0].layout_id;
				var band_layout_format = layout1;
				
				//check layout
				if(format1 == band_format1){
					var band_layout_id1 = band_layout1;
					var band_layout_id_format = band_layout_id1;
				}
			}	
		}

		list_Risk = "<option value='"+file_format+"' data-subcat='"+obj_Risk.sub_rate_cat+"' data-ratecat='"+obj_Risk.rate_cat_id+"' data-layout='"+layout_format+"' data-layoutsub='"+band_layout_id_format+"'>"+obj_Risk.text+"</option>";
		 
		var flag_dup = false
		$("#dbBox1_OL option").each(function(){
			var value = $(this).val();
			var value_split = value.split(",");
			
			if(value_split > 1){
				value1 = value_split[0];
				value2 = value_split[1];
			}else{
				value1 = value;
			}
			
			if(numrow_layout > 1){
				if(format1 == value1 && format2 == value2){
					flag_dup = true
				}
			}else{
				if(format1 == value1){
					flag_dup = true
				}
			}
			
		})
		
		if(!flag_dup){
			$("#dbBox1_OL").append(list_Risk);
		}
				  		  
	}
	
	/* Lookup rate cat */
	$("#cv_rate_Agespecific_OL").val(response.Tab_table_policy_value[0].standard_risk[0].rate_cat_id_specific);
	$("#cv_rate_AgeBand_OL").val(response.Tab_table_policy_value[0].standard_risk[0].rate_cat_id_age_Band);
	$("#cv_rate_Agespecific_P_OL").val(response.Tab_table_policy_value[0].standard_risk[1].rate_cat_id_specific);
	$("#cv_rate_AgeBand_P_OL").val(response.Tab_table_policy_value[0].standard_risk[1].rate_cat_id_age_Band);
	
	var list_NoRisk = "";
	for (i in response.Tab_table_policy_value[0].selectbox_standard_risk_row) {
		var obj_ExtraRate = response.Tab_table_policy_value[0].selectbox_standard_risk_row[i];
		list_NoRisk = "<option value='"+obj_ExtraRate.pattern[0].layout+"' data-subcat='"+obj_ExtraRate.pattern[1].sub_rate_cat+"' data-ratecat='"+obj_ExtraRate.pattern[3].rate_cat_id+"' data-layout='"+obj_ExtraRate.pattern[4].layout_id+"'>"+obj_ExtraRate.pattern[2].text+"</option>";
		  
		$("#dbBox2_OL").append(list_NoRisk);		  		  
	}
	
	var tb_cv_hidden = "<input type='hidden' id='cvLow_rateCat2_OL' value='"+response.Tab_table_policy_value[0].standard_risk_row[0].rate_cat_id_specific+"'>"+
	"<input type='hidden' id='cvLow_rateLayout2_OL' value=''>"+
	"<input type='hidden' id='cvLow_fileID2_OL' value=''>";
	
	$("#row_cvLow_file_OL").append(tb_cv_hidden);
	
	/*RPU*/
	if(response.Tab_table_policy_value[0].rpu.length > 0){
		var row_year = "";
		for (i in response.Tab_table_policy_value[0].rpu[0].year) {
			var obj_year = response.Tab_table_policy_value[0].rpu[0].year[i];
			row_year += "<option value='"+obj_year.Start_year+"'>"+obj_year.Start_year+"</option>";
		}
		$("#dbBox3_1_OL").append(row_year);
		
		var row_male = "";
		for (i in response.Tab_table_policy_value[0].rpu[0].male) {
			var obj_male = response.Tab_table_policy_value[0].rpu[0].male[i];
			row_male += "<option value='"+obj_male.nonforf_rate_id+"' data-type='"+obj_male.nonforf_prov+"' data-year='"+obj_male.year+"' data-ref='"+obj_male.file_ref+"' data-file='"+obj_male.file_name+"' data-layout='"+obj_male.layout_id+"'>"+obj_male.file_name+"</option>";
		}
		$("#dbBox3_2_OL").append(row_male);
		
		var row_female = "";
		for (i in response.Tab_table_policy_value[0].rpu[0].female) {
			var obj_female = response.Tab_table_policy_value[0].rpu[0].female[i];
			row_female += "<option value='"+obj_female.nonforf_rate_id+"' data-type='"+obj_female.nonforf_prov+"' data-year='"+obj_female.year+"' data-ref='"+obj_female.file_ref+"' data-file='"+obj_female.file_name+"' data-layout='"+obj_female.layout_id+"'>"+obj_female.file_name+"</option>";
		}
		$("#dbBox3_3_OL").append(row_female);
	}
	
	/*ETI*/
	if(response.Tab_table_policy_value[0].eti.length > 0){
		var row_year = "";
		for (i in response.Tab_table_policy_value[0].eti[0].year) {
			var obj_year = response.Tab_table_policy_value[0].eti[0].year[i];
			row_year += "<option value='"+obj_year.Start_year+"'>"+obj_year.Start_year+"</option>";
		}
		$("#dbBox3_4_OL").append(row_year);
		
		var row_male = "";
		for (i in response.Tab_table_policy_value[0].eti[0].male) {
			var obj_male = response.Tab_table_policy_value[0].eti[0].male[i];
			row_male += "<option value='"+obj_male.nonforf_rate_id+"' data-type='"+obj_male.nonforf_prov+"' data-year='"+obj_male.year+"' data-ref='"+obj_male.file_ref+"' data-file='"+obj_male.file_name+"' data-layout='"+obj_male.layout_id+"'>"+obj_male.file_name+"</option>";
		}
		$("#dbBox3_5_OL").append(row_male);
		
		var row_female = "";
		for (i in response.Tab_table_policy_value[0].eti[0].female) {
			var obj_female = response.Tab_table_policy_value[0].eti[0].female[i];
			row_female += "<option value='"+obj_female.nonforf_rate_id+"' data-type='"+obj_female.nonforf_prov+"' data-year='"+obj_female.year+"' data-ref='"+obj_female.file_ref+"' data-file='"+obj_female.file_name+"' data-layout='"+obj_female.layout_id+"'>"+obj_female.file_name+"</option>";
		}
		$("#dbBox3_6_OL").append(row_female);
	}
	
	/*Khwan Fix ETI/RPU 29/11/2019*/
	/*****RPU****/
	var obj_rpu = response.Tab_table_policy_value[0].rpu_pattern[0];
	
	$("#RPU_ratecat_OL").val(obj_rpu.female[0].rate_cat_id);
	$("#RPU_subcatMale_OL").val(obj_rpu.male[0].sub_cat_id);
	$("#RPU_subcatFeMale_OL").val(obj_rpu.female[0].sub_cat_id);
	
	//rpu pattern
	var rpu_female = [];
	var rpu_male = [];
	for (i in obj_rpu.female) {
		var obj_female = obj_rpu.female[i];
		rpu_female.push(obj_female.rate_layout_id);
		rpu_female.push(obj_female.file_name_pattern);
		rpu_female.push(obj_female.name_en);
	}
	
	$("#RPU_female_pattern_OL").val(rpu_female);
	
	for (i in obj_rpu.male) {
		var obj_male = obj_rpu.male[i];
		rpu_male.push(obj_male.rate_layout_id);
		rpu_male.push(obj_male.file_name_pattern);
		rpu_male.push(obj_male.name_en);
	}
	
	$("#RPU_male_pattern_OL").val(rpu_male);
	
	/*****ETI****/
	var obj_eti = response.Tab_table_policy_value[0].eti_pattern[0];
	
	$("#ETI_ratecat_OL").val(obj_eti.female[0].rate_cat_id);
	$("#ETI_subcatMale_OL").val(obj_eti.male[0].sub_cat_id);
	$("#ETI_subcatFeMale_OL").val(obj_eti.female[0].sub_cat_id);
	
	//eti pattern
	var eti_female = [];
	var eti_male = [];
	for (i in obj_eti.female) {
		var obj_female = obj_eti.female[i];
		eti_female.push(obj_female.rate_layout_id);
		eti_female.push(obj_female.file_name_pattern);
		eti_female.push(obj_female.name_en);
	}
	
	$("#ETI_female_pattern_OL").val(eti_female);
	
	for (i in obj_rpu.male) {
		var obj_male = obj_eti.male[i];
		eti_male.push(obj_male.rate_layout_id);
		eti_male.push(obj_male.file_name_pattern);
		eti_male.push(obj_male.name_en);
	}
	
	$("#ETI_male_pattern_OL").val(eti_male);
	
	Insertpattern_OL();
	
	/*****Khwan Fix 13/12/2019 Get New Layout*****/
	//ความเสี่ยงภัยมาตรฐาน
	var obj_PMDet = "";
	var PM_Det_rate_cat = "";
	var PM_Det_layout = "";
	
	var obj_BandDet = "";
	var Band_Det_rate_cat = "";
	var Band_Det_layout = "";
	
	for (i in response.Tab_table_policy_value[0].selectbox_standard_risk[0].specific[0]) {
		obj_PMDet = response.Tab_table_policy_value[0].selectbox_standard_risk[0].specific[0][i][0];
		PM_Det_rate_cat = obj_PMDet.rate_cat_id;
		PM_Det_layout = obj_PMDet.ratelayoutdet;
		
		getLayoutMain_OL(PM_Det_rate_cat, 7, PM_Det_layout);
	}
	
	for (i in response.Tab_table_policy_value[0].selectbox_standard_risk[0].age_Band[0]) {
		obj_BandDet = response.Tab_table_policy_value[0].selectbox_standard_risk[0].age_Band[0][i][0];
		Band_Det_rate_cat = obj_BandDet.rate_cat_id;
		Band_Det_layout = obj_BandDet.ratelayoutdet;	
		
		getLayoutMain_OL(Band_Det_rate_cat, 7, Band_Det_layout);
	}

	//ความเสี่ยงภัยมาตรฐาน P
	var obj_PMDet_P = "";
	var PM_Det_rate_cat_P = "";
	var PM_Det_layout_P = "";
	
	var obj_BandDet_P = "";
	var Band_Det_rate_cat_P = "";
	var Band_Det_layout_P = "";
	
	for (i in response.Tab_table_policy_value[0].selectbox_standard_risk_P[0].specific[0]) {
		obj_PMDet_P = response.Tab_table_policy_value[0].selectbox_standard_risk_P[0].specific[0][i][0];
		PM_Det_rate_cat_P = obj_PMDet_P.rate_cat_id;
		PM_Det_layout_P = obj_PMDet_P.ratelayoutdet;
		
		getLayoutMain_OL(PM_Det_rate_cat_P, 7, PM_Det_layout_P);
	}
	
	for (i in response.Tab_table_policy_value[0].selectbox_standard_risk_P[0].age_Band[0]) {
		obj_BandDet_P = response.Tab_table_policy_value[0].selectbox_standard_risk_P[0].age_Band[0][i][0];
		Band_Det_rate_cat_P = obj_BandDet_P.rate_cat_id;
		Band_Det_layout_P = obj_BandDet_P.ratelayoutdet;	
		
		getLayoutMain_OL(Band_Det_rate_cat_P, 7, Band_Det_layout_P);
	}

	//ความเสี่ยงภัยต่ำกว่ามาตรฐาน
	var obj_PMDet_low = "";
	var PM_Det_rate_cat_low = "";
	var PM_Det_layout_low = "";
	
	for (i in response.Tab_table_policy_value[0].selectbox_standard_risk_row) {
		obj_PMDet_low = response.Tab_table_policy_value[0].selectbox_standard_risk_row[i];
		PM_Det_rate_cat_low = obj_PMDet_low.pattern[3].rate_cat_id;
		PM_Det_layout_low = obj_PMDet_low.pattern[3].ratelayoutdet;
		
		getLayoutMain_OL(PM_Det_rate_cat_low, 8, PM_Det_layout_low);
	}

	//ตารางมรณะสำหรับคำนวณปิดบัญชี(RPU/ETI)
	var obj_MortDet_male = "";
	var Mort_Det_rate_cat_male = "";
	var Mort_Det_layout_male = "";
	
	var obj_MortDet_male2 = "";
	var Mort_Det_rate_cat_male2 = "";
	var Mort_Det_layout_male2 = "";
	
	var obj_MortDet_female = "";
	var Mort_Det_rate_cat_female = "";
	var Mort_Det_layout_female = "";
	
	var obj_MortDet_female2 = "";
	var Mort_Det_rate_cat_female2 = "";
	var Mort_Det_layout_female2 = "";
	
	for (i in response.Tab_table_policy_value[0].rpu_pattern[0].male) {
		obj_MortDet_male = response.Tab_table_policy_value[0].rpu_pattern[0].male[i];
		Mort_Det_rate_cat_male = obj_MortDet_male.rate_cat_id;
		Mort_Det_layout_male = obj_MortDet_male.ratelayoutdet;
		
		getLayoutMain_OL(Mort_Det_rate_cat_male, 9, Mort_Det_layout_male);
	}
	
	for (i in response.Tab_table_policy_value[0].rpu_pattern[0].female) {
		obj_MortDet_female = response.Tab_table_policy_value[0].rpu_pattern[0].female[i];
		Mort_Det_rate_cat_female = obj_MortDet_female.rate_cat_id;
		Mort_Det_layout_female = obj_MortDet_female.ratelayoutdet;
		
		getLayoutMain_OL(Mort_Det_rate_cat_female, 9, Mort_Det_layout_female);
	}


	for (i in response.Tab_table_policy_value[0].eti_pattern[0].male) {
		obj_MortDet_male2 = response.Tab_table_policy_value[0].eti_pattern[0].male[i];
		Mort_Det_rate_cat_male2 = obj_MortDet_male2.rate_cat_id;
		Mort_Det_layout_male2 = obj_MortDet_male2.ratelayoutdet;
		
		getLayoutMain_OL(Mort_Det_rate_cat_male2, 9, Mort_Det_layout_male2);
	}
	
	for (i in response.Tab_table_policy_value[0].eti_pattern[0].female) {
		obj_MortDet_female2 = response.Tab_table_policy_value[0].eti_pattern[0].female[i];
		Mort_Det_rate_cat_female2 = obj_MortDet_female2.rate_cat_id;
		Mort_Det_layout_female2 = obj_MortDet_female2.ratelayoutdet;
		
		getLayoutMain_OL(Mort_Det_rate_cat_female2, 9, Mort_Det_layout_female2);
	}

}

function show_BenefitValue_data_OL(response){
	$("#tbody_dieL_OL0, #tbody_dieR_OL0").hide();
	
	/*รายการข้อยกเว้น*/
//	var arr = [{"pass":"1","text":"การถูกฆ่าหรือถูกทำร้ายร่างกายโดยเจตนา"},{"pass":"2","text":"สงคราม (ไม่ว่าจะมีการประกาศหรือไม่ก็ตาม) การรุกราน หรือการกระทำของศัตรูต่างชาติ"},{"pass":"3","text":"การแข่งรถ แข่งเรือหรือแข่งม้า การเล่นสกีน้ำ การเล่นสเก็ต การโดดร่ม การเล่นโปโล..."},{"pass":"4","text":"ขณะขึ้นหรือลง หรือขณะโดยสารอยู่ในอากาศยานที่มิได้จดทะเบียนเพื่อบรรทุก ผู้โดยสารและ..."}];
	var row_Exception = "";
	for (i in response.Tab_Benefits[0].die[0].exception) {
		var obj_Endorse = response.Tab_Benefits[0].die[0].exception[i];
		row_Exception = "<tr id='tr_ExceptionSelect"+i+"'>" +
			"<td class='text-center vertical-middle'><input type='checkbox' name='opt_ExceptionSelect[]' id='opt_ExceptionSelect"+i+"' value="+obj_Endorse.pass+"></td>" +	
			"<td class='vertical-middle'><label id='lb_ExceptionSelect"+i+"'>"+obj_Endorse.text+"</label></td>" +
		"</tr>";
				
			$("#tbl_DeathExceptionOL_modal tbody").append(row_Exception);
			
		/*if ( $.fn.dataTable.isDataTable( '#tbl_DeathExceptionOL_modal' ) ) {
			$("#tbl_DeathExceptionOL_modal").DataTable();
//				$("#tbl_DeathExceptionOL_modal").DataTable().destroy();
			}else{
				
				$("#tbl_DeathExceptionOL_modal").DataTable({"ordering": false,"paging": false,"bInfo" : false, scrollY: '236px',scrollCollapse: true, "autoWidth": false, 
					fixedHeader: {header: true},"oLanguage": {"sSearch": "ค้นหา: "}
				});
				$(".datatbl_DeathExceptionOL_modal .dataTables_scrollHeadInner").css({"width":"100%"});
				$(".datatbl_DeathExceptionOL_modal .table").css({"width":"100%"});
		}*/
	}
	/*NEW*/
	if ( $.fn.dataTable.isDataTable( '#tbl_DeathExceptionOL_modal' ) ) {
	/*	$("#tbl_DeathExceptionOL_modal").DataTable();*/
//			$("#tbl_DeathExceptionOL_modal").DataTable().destroy();
		}else{
			
			$("#tbl_DeathExceptionOL_modal").DataTable({"ordering": false,"paging": false,"bInfo" : false, scrollY: '236px',scrollCollapse: true, "autoWidth": false, 
				fixedHeader: {header: true},"oLanguage": {"sSearch": "ค้นหา: "}
			});
			$(".datatbl_DeathExceptionOL_modal .dataTables_scrollHeadInner").css({"width":"100%"});
			$(".datatbl_DeathExceptionOL_modal .table").css({"width":"100%"});
	}
	
	var list_SA1 = "";
	list_SA1 = "<option value='NONE'>None</option>";
	for (i in response.Tab_Benefits[0].die[0].die_unit) {
		var obj_SA1 = response.Tab_Benefits[0].die[0].die_unit[i];
		list_SA1 += "<option value='"+obj_SA1.pass+"'>"+obj_SA1.text+"</option>";
		  	  		  
	}
	$(".SA_Value").append(list_SA1);
	
	var die_sa_val = [];	
	for (i in response.Tab_Benefits[0].die[0].die_unit) {
		var obj_SA = response.Tab_Benefits[0].die[0].die_unit[i];
		die_sa_val.push(obj_SA.pass);	
		die_sa_val.push(obj_SA.text);	
	}
	$("#die_sa_value_OL").val(die_sa_val);
	
	var lst_sa_get = [];
	for(i in response.Tab_Benefits[0].die[0].die_sa){
		var obj = response.Tab_Benefits[0].die[0].die_sa[i];
		lst_sa_get.push(obj.pass);
		lst_sa_get.push(obj.text);
	}
	$("#die_sa_type_OL").val(lst_sa_get);
	
	
	var list_SA2 = "";
	list_SA2 = "<option value='NONE'>None</option>";
	for (i in response.Tab_Benefits[0].die[0].die_sa) {
		var obj_SA2 = response.Tab_Benefits[0].die[0].die_sa[i];
		list_SA2 += "<option value='"+obj_SA2.pass+"'>"+obj_SA2.text+"</option>";
			
	}
	$(".SA_Unit").append(list_SA2);
	
	var lst_lookup_cvpv = "";
	lst_lookup_cvpv = "<option value='NONE'>None</option>";
	for(i in response.Tab_Benefits[0].die[0].die_CV_PV){
		var obj = response.Tab_Benefits[0].die[0].die_CV_PV[i];
		lst_lookup_cvpv += "<option value='"+obj.pass+"'>"+obj.text+"</option>";
	}
	$(".CVPV_UNIT").append(lst_lookup_cvpv);
	
	/*die_oth_type_OL*/
	var lst_other = "";
	lst_other = "<option value='NONE'>None</option>";
	for(i in response.Tab_Benefits[0].die[0].die_other){
		var obj = response.Tab_Benefits[0].die[0].die_other[i];
		lst_other += "<option value='"+obj.pass+"'>"+obj.text+"</option>";
	}
	$(".OTHER_TYPE").append(lst_other);
	
	var lst_oth_type_get = [];
	for(i in response.Tab_Benefits[0].die[0].die_other){
		var obj = response.Tab_Benefits[0].die[0].die_other[i];
		lst_oth_type_get.push(obj.pass);
		lst_oth_type_get.push(obj.text);
	}
	$("#die_oth_type_OL").val(lst_oth_type_get);
	
	/*adb_type_OL*/
	var lst_adb_type = "";
	lst_adb_type = "<option value='NONE'>None</option>";
	for(i in response.Tab_Benefits[0].die[0].accident_ADB){
		var obj = response.Tab_Benefits[0].die[0].accident_ADB[i];
		lst_adb_type += "<option value='"+obj.pass+"'>"+obj.text+"</option>";
	}
	$(".ADB_TYPE").append(lst_adb_type);
	
	/*acc_public_type_OL*/
	var lst_adb_public_type = "";
	lst_adb_public_type = "<option value='NONE'>None</option>";
	for(i in response.Tab_Benefits[0].die[0].accidentPublic_ACC){
		var obj = response.Tab_Benefits[0].die[0].accidentPublic_ACC[i];
		lst_adb_public_type += "<option value='"+obj.pass+"'>"+obj.text+"</option>";
	}
	$(".ACC_PUBLIC_TYPE").append(lst_adb_public_type);
	
	var lst_adb_public_type_get = [];
	for(i in response.Tab_Benefits[0].die[0].accident_ADB){
		var obj = response.Tab_Benefits[0].die[0].accident_ADB[i];
		lst_adb_public_type_get.push(obj.pass);
		lst_adb_public_type_get.push(obj.text);
	}
	$("#acc_public_type_OL").val(lst_adb_public_type_get);
	
	var lst_adb_type_get = [];
	for(i in response.Tab_Benefits[0].die[0].accident_ADB){
		var obj = response.Tab_Benefits[0].die[0].accident_ADB[i];
		lst_adb_type_get.push(obj.pass);
		lst_adb_type_get.push(obj.text);
	}
	$("#adb_type_OL").val(lst_adb_type_get);
	
	var cvpv_unit_get = [];
	for(i in response.Tab_Benefits[0].die[0].die_CV_PV){
		var obj = response.Tab_Benefits[0].die[0].die_CV_PV[i];
		cvpv_unit_get.push(obj.pass);
		cvpv_unit_get.push(obj.text);
	}
	$("#cvpv_unit_OL").val(cvpv_unit_get);
	
	var refund_factor = [];	
	for (i in response.Tab_Benefits[0].refund[0].benef_factor) {
		var obj_SA = response.Tab_Benefits[0].refund[0].benef_factor[i];
		refund_factor.push(obj_SA.pass);	
		refund_factor.push(obj_SA.text);	
	}
	$("#benef_factor_OL").val(refund_factor);
	
	
	
	var list_calendar = "";
	list_calendar = "<option value='NONE'>None</option>";
	for(i in response.Tab_Benefits[0].die[0].die_calendar){
		var obj_die_calendar = response.Tab_Benefits[0].die[0].die_calendar[i]; 
		list_calendar += "<option value='"+obj_die_calendar.pass+"'>"+obj_die_calendar.text+"</option>";
		
	}
	$(".die_calendar").append(list_calendar);
	
	var die_calendar_val = [];	
	for (i in response.Tab_Benefits[0].die[0].die_calendar) {
		var obj_unit = response.Tab_Benefits[0].die[0].die_calendar[i];
		die_calendar_val.push(obj_unit.pass);	
		die_calendar_val.push(obj_unit.text);	
	}
	$("#die_calendar_OL").val(die_calendar_val);
	
	var list_sl_premium = "";
	list_sl_premium = "<option value='NONE'>None</option>";
	for(i in response.Tab_Benefits[0].die[0].die_premium){
		var obj_die_premium = response.Tab_Benefits[0].die[0].die_premium[i];
		list_sl_premium += "<option value='"+obj_die_premium.pass+"'>"+obj_die_premium.text+"</option>";
	}
	$(".premium").append(list_sl_premium);
	
	var lst_premium_forClone = [];
	for(i in response.Tab_Benefits[0].die[0].die_premium){
		var obj_die_premium_forClone = response.Tab_Benefits[0].die[0].die_premium[i];
		lst_premium_forClone.push(obj_die_premium_forClone.pass);
		lst_premium_forClone.push(obj_die_premium_forClone.text);
	}
	$("#lst_premium_sl").val(lst_premium_forClone);
	
	/*var lst_premium = "";
		lst_premium = "<option value='NONE'>None</option>";
		lst_premium += "<option value='ACCU'>ACCU</option>";
		lst_premium += "<option value='YRT'>YRT</option>";
	$(".premium").append(lst_premium);
	
	var lst_premium_forClone = ["ACCU", "ACCU", "YRT", "YRT"];

	$("#lst_premium_sl").val(lst_premium_forClone);
	*/
	/*lst_adb =  "<option value='NONE'>None</option>";*/
	
	var lst_condition = "";
	lst_condition = "<option value='NONE'>None</option>";
	for(i in response.Tab_Benefits[0].die[0].condition){
		var obj_condition = response.Tab_Benefits[0].die[0].condition[i];
		lst_condition += "<option value='"+obj_condition.pass+"'>"+obj_condition.text+"</option>";
	}
	$(".CONDITION").append(lst_condition);
	
	var die_condition = [];	
	for (i in response.Tab_Benefits[0].die[0].condition) {
		var obj_unit_con = response.Tab_Benefits[0].die[0].condition[i];
		die_condition.push(obj_unit_con.pass);	
		die_condition.push(obj_unit_con.text);	
	}
	$("#die_condition_OL").val(die_condition);
	
	
	var lst_unit_type = "";
	lst_unit_type = "<option value='NONE'>None</option>";
	for(i in response.Tab_Benefits[0].refund[0].benef_unit){
		var obj_unit_type = response.Tab_Benefits[0].refund[0].benef_unit[i];
		lst_unit_type += "<option value='"+obj_unit_type.pass+"'>"+obj_unit_type.text+"</option>";
		
	}
	$(".UNIT_TYPE").append(lst_unit_type);
	
	var lst_benef_factor = "";
	lst_benef_factor = "<option value='NONE'>None</option>";
	for(i in response.Tab_Benefits[0].refund[0].benef_factor){
		var obj_benef_factor = response.Tab_Benefits[0].refund[0].benef_factor[i];
		lst_benef_factor += "<option value='"+obj_benef_factor.pass+"'>"+obj_benef_factor.text+"</option>";
	}
	$('.BENEF_FACTOR').append(lst_benef_factor);
	
	var benef_unit = [];	
	for (i in response.Tab_Benefits[0].refund[0].benef_unit) {
		var obj_unit = response.Tab_Benefits[0].refund[0].benef_unit[i];
		benef_unit.push(obj_unit.pass);	
		benef_unit.push(obj_unit.text);	
	}
	$("#benef_unit_OL").val(benef_unit);
	
	var lst_scope_type = "";
	lst_scope_type = "<option value='NONE'>None</option>";
	for(i in response.Tab_Benefits[0].refund[0].benef_scope){
		var obj_benef_scope = response.Tab_Benefits[0].refund[0].benef_scope[i];
		lst_scope_type += "<option value='"+obj_benef_scope.pass+"'>"+obj_benef_scope.text+"</option>";
	
	}
	$('.SCOPE_TYPE').append(lst_scope_type);
	
	var refund_scope = [];	
	for (i in response.Tab_Benefits[0].refund[0].benef_scope) {
		var obj = response.Tab_Benefits[0].refund[0].benef_scope[i];
		refund_scope.push(obj.pass);	
		refund_scope.push(obj.text);	
	}
	$("#benef_scope_OL").val(refund_scope);
	
	var dividend_type_obl = [];	
	for (i in response.Tab_Benefits[0].dividend[0].benef_period) {
		var obj = response.Tab_Benefits[0].dividend[0].benef_period[i];
		dividend_type_obl.push(obj.pass);	
		dividend_type_obl.push(obj.text);	
	}
	$("#benef_dividend_OL").val(dividend_type_obl);
	
	
	
	var lst_dividend_type = "";
	lst_dividend_type = "<option value='NONE'>None</option>";
	for(i in response.Tab_Benefits[0].dividend[0].benef_period){
		var benef_period = response.Tab_Benefits[0].dividend[0].benef_period[i];
		lst_dividend_type += "<option value='"+benef_period.pass+"'>"+benef_period.text+"</option>";
	}
	$('.DIVIDEND_TYPE').append(lst_dividend_type);
	
	var lst_insurance_year = "";
	lst_insurance_year = "<option value='NONE'>None</option>";
	for(i in response.Tab_Benefits[0].dividend[0].cov_benef_scope){
		var benef_scope = response.Tab_Benefits[0].dividend[0].cov_benef_scope[i];
		lst_insurance_year += "<option value='"+benef_scope.pass+"'>"+benef_scope.text+"</option>";
	}
	$('.INSURANCE_YEAR').append(lst_insurance_year);
	
	var lst_formular_count = "";
	lst_formular_count = "<option value='NONE'>None</option>";
	for(i in response.Tab_Benefits[0].dividend[0].formula){
		var formular = response.Tab_Benefits[0].dividend[0].formula[i];
		lst_formular_count += "<option value='"+formular.pass+"'>"+formular.text+"</option>";
	}
	$('.FORMULAR_COUNT').append(lst_formular_count);
	
	/*File*/	
		var div_file = response.Tab_Benefits[0].dividend[0].filelookup_dividend[0];
		$("#rateCat_dividend_OL").val(div_file.pattern[3].rate_cat_id);
		$("#rateSubCat_dividend_OL").val(div_file.pattern[1].sub_rate_cat);
//		$("#layoutID_OL").val(div_file.pattern[i].layout);
		var cov_code = $("#pass_Insurance_coverage_ol").val();
		var format = div_file.pattern[i].layout+cov_code;
		var place  = div_file.pattern[i].layout+cov_code+'.txt';
		var select_file = "selectFileTXT_OL(3,'select_fileGuaruntee_OL','"+format.replace('.txt','')+"','','','spanBoxGuaruntee_OL')";
		$("#select_fileGuaruntee_OL").attr('onchange', select_file);	
		$("#input_fileGuaruntee_OL").attr('placeholder', place);	
	
}

function checkvaluePremiumsSta_PM_Rate_OL(){
	var discountInsurancePremiumStart_OL = Number($("#discountInsurancePremiumsSta_ol").val());
	var discountInsurancePremiumTo_OL = Number($('#discountInsurancePremiumsTo_ol').val());
	
	if(discountInsurancePremiumStart_OL != ""){
		if(discountInsurancePremiumTo_OL < discountInsurancePremiumStart_OL){
			$("#discountInsurancePremiumsTo_ol").val(parseFloat(discountInsurancePremiumStart_OL).toFixed(2));
		}else if(discountInsurancePremiumTo_OL > discountInsurancePremiumStart_OL){
			if(discountInsurancePremiumStart_OL == ""){
	
				$("#discountInsurancePremiumsSta_ol").val("0.00");

				message = "กรุณาระบุส่วนลดเบี้ยประกันใหม่ให้ถูกต้อง";
				alertError(message);
				
			}
		}
	}
}

function checkvaluePremiumsTo_PM_Rate_OL(){
	var discountInsurancePremiumsSta  	= Number($('#discountInsurancePremiumsSta_ol').val());
	var discountInsurancePremiumsTo  	= Number($('#discountInsurancePremiumsTo_ol').val());
	if((discountInsurancePremiumsTo != "") || (discountInsurancePremiumsTo != "0.00") || (discountInsurancePremiumsTo != "0")){
		if(discountInsurancePremiumsTo < discountInsurancePremiumsSta){
			$("#discountInsurancePremiumsTo_ol").val(parseFloat(discountInsurancePremiumsSta).toFixed(2));
			message = "กรุณาระบุส่วนลดเบี้ยประกันใหม่ให้ถูกต้อง";
			alertError(message);
		}
	}else{
		message = "กรุณาระบุส่วนลดเบี้ยประกันใหม่ให้ถูกต้อง";
		alertError(message);
	}
}

///เช็คค่า MIN_EM,MAX_EM 
function checkvalueMin_EM_OL() {			
	var min_EM_cl  = $('#min_EM_ol').val();
	var max_EM_cl  = $('#max_EM_ol').val();
	
	if((min_EM_cl != "") || (min_EM_cl != "0.00") || (min_EM_cl != "0")){
		if(max_EM_cl < min_EM_cl){
			$("#max_EM_ol").val(min_EM_cl);					
		}
	}
	
}
///
function checkvalueMax_EM_OL() {
	var min_EM_cl  = Number($('#min_EM_ol').val());
	var max_EM_cl  = Number($('#max_EM_ol').val());	

	if((max_EM_cl != "") || (max_EM_cl != "0.00") || (max_EM_cl != "0")){
		if(max_EM_cl < min_EM_cl){
			$("#max_EM_cl").val("");
			message = "กรุณาระบุ MAX_EM ให้ถูกต้อง";
			alertError(message);
			$("#max_EM_cl").focus();
		}
	}else if(min_EM_cl != "0" && max_EM_cl == "0"){
		message = "กรุณาระบุ MAX_EM ให้ถูกต้อง";
		alertError(message);
		$("#max_EM_cl").focus();
	}else if(max_EM_cl != "0"){
		//$("#max_EM_cl").val(parseFloat(min_EM_cl).toFixed(2));
		$("#max_EM_cl").val("");
		$("#input_fileCal_1_CL").val("");
		$("#cv_InputExtra_Rate_cl").prop("disabled", true);
		/*message = "กรุณาระบุ MAX_EM ให้ถูกต้อง";
		alertError(message);*/
	}		
}

$("#min_EM_ol").keyup(function(){ 
	var min_EM_cl  = $('#min_EM_ol').val();
	var max_EM_cl  = $('#max_EM_ol').val();
	var riderCode = $("#baseplanCode_OL").val();
	if ((min_EM_cl != "" || max_EM_cl != "") &&
			(min_EM_cl != 0 || max_EM_cl != 0)){
	//$('#select_fileCal_1_CL').attr("disabled", false);
	$("#input_fileCal_1_OL").attr("placeholder", "Em_Age 7_"+riderCode+".txt");
	$("#spanBoxCal1_OL").attr("disabled", false);
	$("#select_fileCal_1_OL").attr("disabled", false);
	//$("#validate_filerate1_CL").css("display","inline-block");
}else{
	//('#select_fileCal_1_CL').attr("disabled", true);
	$("#input_fileCal_1_OL").attr("placeholder", "");
	$("#spanBoxCal1_OL").attr("disabled", true);
	$("#select_fileCal_1_OL").attr("disabled", true);
	//$("#validate_filerate1_CL").css("display","inline-block");
}
});
$("#max_EM_ol").keyup(function(){ 
	var min_EM_cl  = $('#min_EM_ol').val();
	var max_EM_cl  = $('#max_EM_ol').val();
	var riderCode = $("#baseplanCode_OL").val();
	if ((min_EM_cl != "" || max_EM_cl != "") && (min_EM_cl != 0 || max_EM_cl != 0)){
		//$('#select_fileCal_1_CL').attr("disabled", false);
		$("#input_fileCal_1_OL").attr("placeholder", "Em_Age 7_"+riderCode+".txt");
		$("#spanBoxCal1_OL").attr("disabled", false);
		$("#select_fileCal_1_OL").attr("disabled", false);
		if($("#input_fileCal_1_OL").val() == ""){
			$("#validate_filerate1_OL").css("display","inline-block");
		}
	}else{
		//$('#select_fileCal_1_CL').attr("disabled", true);
		$("#input_fileCal_1_OL").attr("placeholder", "");
		$("#spanBoxCal1_OL").attr("disabled", true);
		$("#select_fileCal_1_OL").attr("disabled", true);
		$("#input_fileCal_1_OL").val("");
		$("#cv_InputExtra_Rate_ol").attr("disabled", true);
		if($("#input_fileCal_1_OL").val() == ""){
			$("#validate_filerate1_OL").css("display","inline-block");
		}
	}
});

function deleteRowPM_Rate_OL() {
	var imgOKCount = $('#tb_PM_Rate1_OL i.glyphicon-ok').length;
	if(imgOKCount <= 0){
		message = "กรุณาเลือกรายการที่ต้องการลบ";
		alertError(message);
	}else{
		message = "ต้องการลบรายการใช่หรือไม่";
		alertDeleteError(message);
		$("#btn_confirm_del").click(function(){
			var lastImgOK = $("#tb_PM_Rate1_OL >tbody>tr[data-level='1']:last>td:first").attr("id") || 0;	
			var numberImgOK = 0;
			
			if(lastImgOK == 0){
				numberImgOK = 1;
			}else{
				numberImgOK = Number(lastImgOK.replace("imgOK_OL_",""))+1;
			}

			for(var i = 1; i < numberImgOK; i++){
				var checked = $('#tbody_PM_Rate_OL'+i+' >td:first>i').attr('class');
				if(checked == "glyphicon glyphicon-ok"){
					deleteTableRow("#tbody_PM_Rate_OL"+i);
					deleteTableRow("#tb_PM_Rate1_OL>tbody>tr[data-group="+i+"]");
					deleteTableRow("#tbody_Extra_Rate_OL"+i);
					deleteTableRow("#tb_RateValue1_OL>tbody>tr[data-group="+i+"]");
					deleteTableRow("#tbody_Rate_Value_OL"+i);
					
				}
			}
			
			/*เปลี่ยน ID ใน PM Rate ใหม่ กรณีลบข้อมูล*/
			var j = 0;
			$table = $("#tb_PM_Rate1_OL"),
			rows = $table.find("tr[data-level='1']");
			
			rows.each(function (index, row) {			
				j++;
				
				var $row = $(row),
				level = $row.data("level");
				
				id = Number($row.attr("id").replace("tbody_PM_Rate_OL",""));
			      children = $table.find("tr[data-group=" + id + "]");
				
			      /*ค่าเก่า+ใหม่*/
					var number_parent =  Number($row.attr("id").replace("tbody_PM_Rate_OL",""));
					var number_parent_new = j;
					
					if(children.length > 0){
						var jj = 0;
						children.each(function (index2, row2) {	
							jj++;
							
							var  $row2 = $(row2),
					        id2 = $row2.data("id");
							
							var number_child = $row2.attr("id").replace("tbody_PM_Rate_OL","");
							var number_child_new = j+"_"+jj;							
							
							$row2.attr("id","tbody_PM_Rate_OL"+number_child_new);
							$row2.attr("data-id",number_child_new);	
							$row2.attr("data-group",j);
							$row2.find("td:nth-child(3) input[type='file']").attr("id","fileuploads_PMRate"+number_child_new+"_OL");
							$row2.find("td:nth-child(3) input[type='text']").attr("id","fileuploads_PMRateText"+number_child_new+"_OL");
							//$row2.find("td:nth-child(3) button").attr("id","bt_uploadfile_PM_RateGroup"+number_child_new+"_CL");
							$row2.find("td:nth-child(3) span").attr("id","spanRate"+number_child_new+"_OL");
							$row2.find("td:nth-child(3) font").attr("id","validate_rate"+number_child_new+"_OL");
							$row2.find("td:nth-child(4) a").attr("id","span_PM_Rateopen_OL"+number_child_new);
							$row2.find("td:nth-child(5) a").attr("id","span_PM_Ratedownload_OL"+number_child_new);
							
							$row2.find("td:nth-child(3) input[type='hidden']").eq(0).attr("id","rm_rateCat_OL"+number_child_new);
							$row2.find("td:nth-child(3) input[type='hidden']").eq(1).attr("id","rm_rateLayout_OL"+number_child_new);
							$row2.find("td:nth-child(3) input[type='hidden']").eq(2).attr("id","rm_fileID_OL"+number_child_new);
							
						});
						
					}
					
					$row.attr("id","tbody_PM_Rate_OL"+j);
					$row.attr("data-id",j);
					$row.find("td:nth-child(1)").attr("id","imgOK_OL_"+j);
					$row.find("td:nth-child(2) select").attr("id","sl_PM_Type_OL"+j);
					$row.find("td:nth-child(3) input[type='file']").attr("id","fileuploads_PMRate"+j+"_OL");
					$row.find("td:nth-child(3) input[type='text']").attr("id","fileuploads_PMRateText"+j+"_OL");
					$row.find("td:nth-child(3) span").attr("id","spanRate"+k+"_OL");
					$row.find("td:nth-child(3) font").attr("id","validate_rate"+k+"_OL");
					$row.find("td:nth-child(4) a").attr("id","span_PM_Rateopen_OL_"+j);
					$row.find("td:nth-child(5) a").attr("id","span_PM_Ratedownload_OL_"+j);
					
					$row.find("td:nth-child(3) input[type='hidden']").eq(0).attr("id","rm_rateCat_OL"+j);
					$row.find("td:nth-child(3) input[type='hidden']").eq(1).attr("id","rm_rateLayout_OL"+j);
					$row.find("td:nth-child(3) input[type='hidden']").eq(2).attr("id","rm_fileID_OL"+j);
					
			});
			
			/*เปลี่ยน ID extra rate ใหม่กรณีลบ PM Rate*/
			var numrow_extra = $("#tb_Extra_Rate_OL>tbody>tr").length;
			var aa = 0;
			for(var a=0;a<numrow_extra;a++){
				aa++;
				var $row_extra = $("#tb_Extra_Rate>tbody>tr").eq(a);
				$row_extra.attr("id","tbody_Extra_Rate_OL"+aa);
				$row_extra.find("td:nth-child(2) input[type='file']").attr("id","fileuploads_ExtraRate"+aa+"_OL");
				$row_extra.find("td:nth-child(2) input[type='text']").attr("id","fileuploads_ExtraRateText"+aa+"_OL");
				$row_extra.find("td:nth-child(2) span").attr("id","spanExtraRate"+aa+"_OL");
				$row_extra.find("td:nth-child(2) font").attr("id","validate_extrarate"+aa+"_OL");
				$row_extra.find("td:nth-child(3) a").attr("id","span_Extra_Rateopen_OL_"+aa);
				$row_extra.find("td:nth-child(4) a").attr("id","span_Extra_Ratedownload_OL_"+aa);
				
				$row_extra.find("td:nth-child(2) input[type='hidden']").eq(0).attr("id","ext_rateCat_OL"+aa);
				$row_extra.find("td:nth-child(2) input[type='hidden']").eq(1).attr("id","ext_rateLayout_OL"+aa);
				$row_extra.find("td:nth-child(2) input[type='hidden']").eq(2).attr("id","ext_fileID_OL"+aa);
			}
			
		    /*เปลี่ยน ID ตารางมูลค่า*/
			
			var k = 0;
			$table_rate = $('#tb_RateValue1_OL'),
			rows_rate = $table_rate.find("tr[data-level='1']");
			
			rows_rate.each(function(index, row){
				k++;
				var $row = $(row),
			      level = $row.data("level");
				
					id_rate = Number($row.attr("id").replace("tbody_Rate_Value_OL",""));
					children_rate = $table_rate.find("tr[data-group=" + id_rate + "]");
					
					/*ค่าเก่า+ใหม่*/
					var number_parent =  Number($row.attr("id").replace("tbody_Rate_Value_OL",""));
					var number_parent_new = k;
					if(children_rate.length > 0){
						var kk = 0;
						children_rate.each(function (index2, row2) {
							
							kk++;
							var
					        $row2 = $(row2),
					        id2_rate = $row2.data("id");

							var number_child = $row2.attr("id").replace("tbody_Rate_Value_OL","");
							var number_child_new = k+"_"+kk;							

							$row2.attr("id","tbody_Rate_Value_OL"+number_child_new);
							$row2.attr("data-id",number_child_new);	
							$row2.attr("data-group",k);
							$row2.find("td:nth-child(2) input[type='file']").attr("id","fileuploads_RateValue"+number_child_new+"_OL");
							$row2.find("td:nth-child(2) input[type='text']").attr("id","fileuploads_RateValueText"+number_child_new+"_OL");
							$row2.find("td:nth-child(2) span").attr("id","spanRateValue"+k+"_OL");
							//$row2.find("td:nth-child(2) font").attr("id","validate_RateValue"+k+"_CL");
							$row2.find("td:nth-child(3) a").attr("id","span_RateValueopen_OL_"+number_child_new);
							$row2.find("td:nth-child(4) a").attr("id","span_RateValuedownload_OL_"+number_child_new);
							
							$row2.find("td:nth-child(2) input[type='hidden']").eq(0).attr("id","cv_rateCat_OL"+number_child_new);
							$row2.find("td:nth-child(2) input[type='hidden']").eq(1).attr("id","cv_rateLayout_OL"+number_child_new);
							$row2.find("td:nth-child(2) input[type='hidden']").eq(2).attr("id","cv_fileID_OL"+number_child_new);
							
						});
					}

					$row.attr("id","tbody_Rate_Value_OL"+k);
					$row.attr("data-id",k);
					$row.find("td:nth-child(2) input[type='file']").attr("id","fileuploads_RateValue"+k+"_OL");
					$row.find("td:nth-child(2) input[type='text']").attr("id","fileuploads_RateValueText"+k+"_OL");
					$row.find("td:nth-child(2) span").attr("id","spanRateValue"+k+"_OL");
					//$row.find("td:nth-child(2) font").attr("id","validate_RateValue"+k+"_CL");
					$row.find("td:nth-child(3) a").attr("id","span_RateValueopen_OL_"+k);
					$row.find("td:nth-child(4) a").attr("id","span_RateValuedownload_OL_"+k);	
					
					$row.find("td:nth-child(2) input[type='hidden']").eq(0).attr("id","cv_rateCat_OL"+k);
					$row.find("td:nth-child(2) input[type='hidden']").eq(1).attr("id","cv_rateLayout_OL"+k);
					$row.find("td:nth-child(2) input[type='hidden']").eq(2).attr("id","cv_fileID_OL"+k);
			});
			
			/*reset Age band*/
			var PMRate_count = $("#tb_PM_Rate1_OL tbody>tr").length;
			if(PMRate_count <=0){
				$("#ch_insurance_premium_ageBand_ol").prop("checked", false);
				$("#tb_Age_Band_OL input:checkbox").each(function(){
					var id = $(this).attr("id");
						id = id.replace("imgOK_ageBand_OL", "");							
					$(this).prop("checked", false);
					$(this).prop("disabled", true);
					$(this).attr("onclick", "select_AgeBand_OL("+id+")");
				});					
			}
			
			/*เปิดปุ่ม add row*/
			var num_dd = $("#tb_PM_Rate1_OL>tbody>tr[data-level='1']:first>td:nth-child(2) select>option[value!='NONE']").length;
			var numrow_tbl = $("#tb_PM_Rate1_OL>tbody>tr[data-level='1']").length;
			if((numrow_tbl < num_dd) || (num_dd == 0 && numrow_tbl == 0)){
				$("#addrowPM_Rate_OL").attr("disabled", false);
			}
		});
	}
}

function newAddBenefitDie_OL(){
	var lastImgOK = $('#tbody_dieL_OL >tbody>tr:last>td:first').attr("id") || 0;
	var numberImgOK = 0;

	if(lastImgOK == 0){
		numberImgOK = 1;
	}else{
		numberImgOK = Number(lastImgOK.replace("imgOK_OL_",""))+1;
	}
	var newID = "imgOK_OL_"+numberImgOK;
	var ftOnclick = 'imgCheckbox(this.id);';
	
	var row1 = "";
	row1 = "<tr id='tbody_dieL_OL"+numberImgOK+"'>"+
			"<td width='65px' class='text-center borderBlack' id="+"'"+newID+"'"+" onclick='"+ftOnclick+"' style='vertical-align: middle;'><i class='glyphicon glyphicon-edit'></i></td>"+
			/*"<td class='text-center borderBlack'><input id='die_phase"+numberImgOK+"_OL' type='text' class='form-control margin-padding0 text-center width50px'  maxlength='2' value='' min='1' onkeyup='numberKey_OL(this), replaceDot(this)' onkeydown='numberKey_OL(this);' onkeypress='validate(event)' onchange='validate_range_tbdie_OL(this.id,this.value);'></td>"+*/
			"<td width='56px' class='borderBlack'><input id='die_fromYear"+numberImgOK+"_OL' onkeypress='validate(event);' type='text' class='form-control margin-padding0 text-center width50px' value='1' min='1' onkeyup='replaceDot(this)' onblur='check_fromto_OL("+numberImgOK+");'</td>"+
			"<td width='100px' class='text-center borderBlack'><select class='form-control' id='die_fromYearUnit"+numberImgOK+"_OL' onchange='check_fromtoUnit_OL("+numberImgOK+");' ><option value='NONE'>None</option></select></td>"+
			"<td width='56px' class='borderBlack'><input id='die_toYear"+numberImgOK+"_OL' onkeypress='validate(event);' type='text' class='form-control margin-padding0 text-center width50px' value='1'  onkeyup='replaceDot(this)' onblur='check_fromto_OL("+numberImgOK+");'</td>"+
			"<td width='100px' class='text-center borderBlack'><select class='form-control' id='die_toYearUnit"+numberImgOK+"_OL'  onchange='check_fromtoUnit_OL("+numberImgOK+");'><option value='NONE'>None</option></select></td>"+
			"</tr>";
	$("#tbody_dieL_OL tbody").append(row1);
	var row2 = "";
	/*row2 = "<tr id='tbody_dieR_OL"+numberImgOK+"'>"+
			"<td width='50px' class='text-center borderBlack'><select class='form-control calendar' id='die_sa_max"+numberImgOK+"_OL' ><option value='NONE'>None</option></select></td>"+
			"<td width='50px' class='borderBlack'><input id='die_sa"+numberImgOK+"_OL' onkeyup='input_sa_die_OL("+numberImgOK+");' class='auto form-control margin-padding0 text-center width70px' value='0.00' data-v-min='0.00' data-v-max='999.99'>"+
			"<td width='50px' class='text-center borderBlack'><select class='form-control' id='die_sa_unit"+numberImgOK+"_OL' ><option value='NONE'>None</option></select></td>"+
			"<td width='50px' class='borderBlack'><input id='die_premium_OL"+numberImgOK+"' type='text' class='auto form-control margin-padding0 text-center width70px'  value='0.00' data-v-min='0.00' data-v-max='999.99' ></td>"+
			"<td width='50px' class='text-center borderBlack'><select class='form-control' id='die_prem"+numberImgOK+"_OL' onchange='sl_premium("+numberImgOK+")'><option value='NONE'>None</option></select></td>"+
			"<td width='50px' class='verticalCenter text-center borderBlack'><input id='die_checkbox"+numberImgOK+"' type='checkbox' disabled></td>"+
			"<td width='50px' class='borderBlack'><input id='die_cvpv_OL"+numberImgOK+"' type='text' class='auto form-control margin-padding0 text-center width70px'  value='0.00' data-v-min='0.00' data-v-max='999.99' ></td>"+
			"<td width='50px' class='text-center borderBlack'><select class='form-control' id='die_sl_cvpv"+numberImgOK+"_OL' ><option value='NONE'>None</option></select></td>"+
			"<td width='50px' class='text-center borderBlack'><select class='form-control' id='die_sl_oth"+numberImgOK+"_OL' ><option value='NONE'>None</option></select></td>"+
			"<td width='50px' class='text-center borderBlack'><select class='form-control' id='die_condition_adb"+numberImgOK+"_OL' disabled><option value='NONE'>None</option></select></td>"+
			"<td width='50px' class='borderBlack'><input id='adb_OL"+numberImgOK+"' type='text' class='auto form-control margin-padding0 text-center width70px'  value='0.00' data-v-min='0.00' data-v-max='999.99' disabled></td>"+
			"<td width='160px' class='text-center borderBlack'><select class='form-control' id='die_adb_type"+numberImgOK+"_OL' disabled><option value='NONE'>None</option></select></td>"+
			"<td width='70px' class='text-center borderBlack'><select class='form-control' id='die_condition_acc"+numberImgOK+"_OL' disabled><option value='NONE'>None</option></select></td>"+
			"<td width='70px' class='borderBlack'><input id='adbP_OL"+numberImgOK+"' type='text' class='auto form-control margin-padding0 text-center width70px'  value='0.00' data-v-min='0.00' data-v-max='999.99' disabled></td>"+
			"<td width='160px' class='text-center borderBlack'><select class='form-control' id='die_acc_type"+numberImgOK+"_OL' disabled><option value='NONE'>None</option></select></td>"+
			"</tr>";
	*/
		row2 = "<tr id='tbody_dieR_OL"+numberImgOK+"'>"+
		"<td width='50px' class='text-center borderBlack'><select class='form-control width-initial' id='die_sa_max"+numberImgOK+"_OL'><option value='NONE'>None</option></select></td>"+
		"<td width='50px' class='borderBlack'><input id='die_sa"+numberImgOK+"_OL' onblur='replaceBlank(this)' class='auto form-control margin-padding0 text-center width70px' value='0.00' data-v-min='0.00' data-v-max='999.99'>"+
		"<td width='50px' class='text-center borderBlack'><select class='form-control width-initial' id='die_sa_unit"+numberImgOK+"_OL'><option value='NONE'>None</option></select></td>"+
		"<td width='50px' class='borderBlack'><input id='die_premium_OL"+numberImgOK+"' type='text' onblur='replaceBlank(this)' class='auto form-control margin-padding0 text-center width70px' value='0.00' data-v-min='0.00' data-v-max='999.99' ></td>"+
		"<td width='50px' class='text-center borderBlack'><select class='form-control width-initial' id='die_prem"+numberImgOK+"_OL' onchange='sl_premium("+numberImgOK+")'><option value='NONE'>None</option></select></td>"+
		"<td width='50px' class='verticalCenter text-center borderBlack'><input id='die_checkbox"+numberImgOK+"' type='checkbox' disabled></td>"+
		"<td width='50px' class='borderBlack'><input id='die_cvpv_OL"+numberImgOK+"' onblur='replaceBlank(this)' type='text' class='auto form-control margin-padding0 text-center width70px'  value='0.00' data-v-min='0.00' data-v-max='999.99' ></td>"+
		"<td width='50px' class='text-center borderBlack'><select class='form-control width80px' id='die_sl_cvpv"+numberImgOK+"_OL'><option value='NONE'>None</option></select></td>"+
		"<td width='50px' class='text-center borderBlack'><select class='form-control width80px' id='die_sl_oth"+numberImgOK+"_OL'><option value='NONE'>None</option></select></td>"+
		"<td width='50px' class='text-center borderBlack'><select class='form-control width80px' id='die_condition_adb"+numberImgOK+"_OL'><option value='NONE'>None</option></select></td>"+
		"<td width='50px' class='borderBlack'><input id='adb_OL"+numberImgOK+"' onblur='replaceBlank(this)' type='text' class='auto form-control margin-padding0 text-center width70px'  value='0.00' data-v-min='0.00' data-v-max='999.99'></td>"+
		"<td width='160px' class='text-center borderBlack'><select class='form-control width80px' id='die_adb_type"+numberImgOK+"_OL'><option value='NONE'>None</option></select></td>"+
		"<td width='70px' class='text-center borderBlack'><select class='form-control width80px' id='die_condition_acc"+numberImgOK+"_OL'><option value='NONE'>None</option></select></td>"+
		"<td width='70px' class='borderBlack'><input id='adbP_OL"+numberImgOK+"' onblur='replaceBlank(this)' type='text' class='auto form-control margin-padding0 text-center width70px'  value='0.00' data-v-min='0.00' data-v-max='999.99' ></td>"+
		"<td width='160px' class='text-center borderBlack'><select class='form-control width80px' id='die_acc_type"+numberImgOK+"_OL'><option value='NONE'>None</option></select></td>"+
		"</tr>";

	$("#tbody_dieR_OL tbody").append(row2);
	

	$('.auto').autoNumeric('init');
	

	var row_time = "";
	var carl = $("#die_calendar_OL").val();
	carl = carl.split(",");

	var pass = 0;
	var text = 1;
	for(i = 0 ; i < carl.length/2 ; i++){
		var row_time = "<option value='"+carl[pass]+"'>"+carl[text]+"</option>"
		pass = Number(parseInt(pass) + parseInt(2));
		text = Number(parseInt(text) + parseInt(2))
		$("#die_fromYearUnit"+numberImgOK+"_OL").append(row_time);
		$("#die_toYearUnit"+numberImgOK+"_OL").append(row_time);
	}
	
	var row_sa_val = "";
	var sa_val = $("#die_sa_value_OL").val();
	sa_val = sa_val.split(",");

	var pass = 0;
	var text = 1;
	for(i = 0 ; i < sa_val.length/2 ; i++){
		var row_sa_val = "<option value='"+sa_val[pass]+"'>"+sa_val[text]+"</option>"
		pass = Number(parseInt(pass) + parseInt(2));
		text = Number(parseInt(text) + parseInt(2))
		$("#die_sa_max"+numberImgOK+"_OL").append(row_sa_val);
		
	}
	
	var row_oth = "";
	var oth_type = $("#die_oth_type_OL").val();
	oth_type = oth_type.split(",");

	var pass = 0;
	var text = 1;
	for(i = 0 ; i < oth_type.length/2 ; i++){
		var row_oth = "<option value='"+oth_type[pass]+"'>"+oth_type[text]+"</option>"
		pass = Number(parseInt(pass) + parseInt(2));
		text = Number(parseInt(text) + parseInt(2))
		$("#die_sl_oth"+numberImgOK+"_OL").append(row_oth);
		
	}
	
	var row_unit = "";
	var type = $("#die_sa_type_OL").val();
		type = type.split(",");

	var pass = 0;
	var text = 1;
	for(i = 0 ; i < type.length/2 ; i++){
		var row_unit = "<option value='"+type[pass]+"'>"+type[text]+"</option>"
		pass = Number(parseInt(pass) + parseInt(2));
		text = Number(parseInt(text) + parseInt(2))
		$("#die_sa_unit"+numberImgOK+"_OL").append(row_unit);

	}
	
	/*adb_type_OL*/
	var row_adb = "";
	var type_adb = $("#adb_type_OL").val();
	type_adb = type_adb.split(",");
	var pass = 0;
	var text = 1;
	for(i = 0 ; i < type_adb.length/2 ; i++){
		var row_adb = "<option value='"+type_adb[pass]+"'>"+type_adb[text]+"</option>"
		pass = Number(parseInt(pass) + parseInt(2));
		text = Number(parseInt(text) + parseInt(2))
		$("#die_adb_type"+numberImgOK+"_OL").append(row_adb);
	}
	
	/*acc_public_type_OL*/
	var row_acc_public = "";
	var type_acc_public = $("#acc_public_type_OL").val();
	type_acc_public = type_acc_public.split(",");
	var pass = 0;
	var text = 1;
	for(i = 0 ; i < type_acc_public.length/2 ; i++){
		var row_acc_public = "<option value='"+type_acc_public[pass]+"'>"+type_acc_public[text]+"</option>"
		pass = Number(parseInt(pass) + parseInt(2));
		text = Number(parseInt(text) + parseInt(2))
		$("#die_acc_type"+numberImgOK+"_OL").append(row_acc_public);
	}
	
	var row_cvpv = "";
	var type_cvpv = $("#cvpv_unit_OL").val();
		type_cvpv = type_cvpv.split(",");
	var pass = 0;
	var text = 1;
	for(i = 0 ; i < type_cvpv.length/2 ; i++){
		var row_cvpv = "<option value='"+type_cvpv[pass]+"'>"+type_cvpv[text]+"</option>"
		pass = Number(parseInt(pass) + parseInt(2));
		text = Number(parseInt(text) + parseInt(2))
		$("#die_sl_cvpv"+numberImgOK+"_OL").append(row_cvpv);
	}
	
	var row_premium = "";
	var type_premium = $("#lst_premium_sl").val();
		type_premium = type_premium.split(",");

	var pass = 0;
	var text = 1;
	for(i = 0 ; i < type_premium.length/2 ; i++){
		var row_premium = "<option value='"+type_premium[pass]+"'>"+type_premium[text]+"</option>"
		pass = Number(parseInt(pass) + parseInt(2));
		text = Number(parseInt(text) + parseInt(2))
		$("#die_prem"+numberImgOK+"_OL").append(row_premium);
	}
	
	var row_con = "";
	var type_con = $("#die_condition_OL").val();
	type_con = type_con.split(",");

	var pass = 0;
	var text = 1;
	for(i = 0 ; i < type_con.length/2 ; i++){
		var row_con = "<option value='"+type_con[pass]+"'>"+type_con[text]+"</option>"
		pass = Number(parseInt(pass) + parseInt(2));
		text = Number(parseInt(text) + parseInt(2))
		$("#die_condition_adb"+numberImgOK+"_OL").append(row_con);
		$("#die_condition_acc"+numberImgOK+"_OL").append(row_con);
	}
	
	nameTab 	= "menu_OL_5";
	Statuesave = "N";
	
}

function numberKey_OL(value){
	var val = $(value).val();
	if (!val || (parseInt(val) >= 1))
	      ;
	else{ $(value).val($(value).data("old")); }

	if (val > 999 ) {$(value).val(999);}
	
}

function validate_range_fromTo_OL(id,val){
	if(val > 0){
		if(val < 0 || val > 999){
			$("#"+id).addClass("errorClass");
			$("#"+id).val(1);
		}else{
			$("#"+id).removeClass("errorClass");
		}
	}
}

function validate_range_tbdie_OL(id,val){
	
	var size_tb = $("#tbody_dieL_OL tbody>tr:not(:hidden)").length;
	$("#"+id).removeClass("errorClass");
	
	if(size_tb > 1){
		for(var i=0 ; i<size_tb ; i++){
			var data = $("#tbody_dieL_OL tbody>tr").eq(i).find('td:nth-child(2) input[type="text"]').val();
			var chk_id = $("#tbody_dieL_OL tbody>tr").eq(i).find('td:nth-child(2) input[type="text"]').attr('id');
			
			if(chk_id !== id ){
				if(Number(data) == Number(val)){
					$("#"+id).addClass("errorClass");
					$("#"+id).val("");
				}
			}
		}
	}
	
}

/*เช็ค type number from-to*/
function check_fromto_OL(id){

	var from_unit_text = $("#die_fromYearUnit"+id+"_OL option:selected").val();
	var to_unit_text = $("#die_toYearUnit"+id+"_OL option:selected").val();
	
	var from_value = Number($('#die_fromYear'+id+'_OL').val());
	var to_value = Number($('#die_toYear'+id+'_OL').val());	
	console.log("from"+from_unit_text+" to"+to_unit_text);
	
	if(from_unit_text != "NONE" && to_unit_text != "NONE"){
		
		  var from_value_toWeek = Number(from_value/7);
		  var to_value_toWeek = Number(to_value/7);
		  var from_value_toMonth = Number(from_value/30);
		  var to_value_toMonth = Number(to_value/30);
		  var from_value_toYear = Number(from_value/365);
		  var to_value_toYear = Number(to_value/365);
		  var from_value_WeektoMonth = Number(from_value/4);
		  var to_value_WeektoMonth = Number(to_value/4);
		  var from_value_WeektoYear = Number(from_value/48);
		  var to_value_WeektoYear = Number(to_value/48);
		  var from_value_MonthtoYear = Number(from_value/12);
		  var to_value_MonthtoYear = Number(to_value/12);
		 
		  
		  if(from_unit_text == to_unit_text){
				if(from_value > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#die_fromYear'+id+'_OL').val("").focus();
					$("#die_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#die_toYear'+id+'_OL').val("").focus();
					$("#die_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }else if(from_unit_text == "DAY" && to_unit_text == "WEEK"){			 
				if(from_value_toWeek > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#die_fromYear'+id+'_OL').val("").focus();
					$("#die_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#die_toYear'+id+'_OL').val("").focus();
					$("#die_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }else if(from_unit_text == "WEEK" && to_unit_text == "DAY"){			
				if(to_value_toWeek < from_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#die_fromYear'+id+'_OL').val("").focus();
					$("#die_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#die_toYear'+id+'_OL').val("").focus();
					$("#die_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }else if(from_unit_text == "DAY" && to_unit_text == "MONTH"){			 
				if(from_value_toMonth > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#die_fromYear'+id+'_OL').val("").focus();
					$("#die_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#die_toYear'+id+'_OL').val("").focus();
					$("#die_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }else if(from_unit_text == "MONTH" && to_unit_text == "DAY"){			 
				if(to_value_toMonth < from_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#die_fromYear'+id+'_OL').val("").focus();
					$("#die_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#die_toYear'+id+'_OL').val("").focus();
					$("#die_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }else if(from_unit_text == "DAY" && to_unit_text == "YEAR"){			 
				if(from_value_toYear > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#die_fromYear'+id+'_OL').val("").focus();
					$("#die_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#die_toYear'+id+'_OL').val("").focus();
					$("#die_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }else if(from_unit_text == "YEAR" && to_unit_text == "DAY"){
				if(to_value_toYear < from_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#die_fromYear'+id+'_OL').val("").focus();
					$("#die_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#die_toYear'+id+'_OL').val("").focus();
					$("#die_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }else if(from_unit_text == "WEEK" && to_unit_text == "MONTH"){			 
				if(from_value_WeektoMonth > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#die_fromYear'+id+'_OL').val("").focus();
					$("#die_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#die_toYear'+id+'_OL').val("").focus();
					$("#die_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }else if(from_unit_text == "MONTH" && to_unit_text == "WEEK"){
				if(to_value_WeektoMonth < from_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#die_fromYear'+id+'_OL').val("").focus();
					$("#die_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#die_toYear'+id+'_OL').val("").focus();
					$("#die_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }else if(from_unit_text == "WEEK" && to_unit_text == "YEAR"){
				if(from_value_WeektoYear > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#die_fromYear'+id+'_OL').val("").focus();
					$("#die_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#die_toYear'+id+'_OL').val("").focus();
					$("#die_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }else if(from_unit_text == "YEAR" && to_unit_text == "WEEK"){
				if(to_value_WeektoYear < from_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#die_fromYear'+id+'_OL').val("").focus();
					$("#die_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#die_toYear'+id+'_OL').val("").focus();
					$("#die_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }else if(from_unit_text == "MONTH" && to_unit_text == "YEAR"){
				if(from_value_MonthtoYear > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#die_fromYear'+id+'_OL').val("").focus();
					$("#die_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#die_toYear'+id+'_OL').val("").focus();
					$("#die_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }else if(from_unit_text == "YEAR" && to_unit_text == "MONTH"){
				if(to_value_MonthtoYear < from_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#die_fromYear'+id+'_OL').val("").focus();
					$("#die_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#die_toYear'+id+'_OL').val("").focus();
					$("#die_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }else if(from_unit_text == "AGE" && to_unit_text == "MONTH"){
			 if(to_value_MonthtoYear < from_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#die_fromYear'+id+'_OL').val("").focus();
					$("#die_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#die_toYear'+id+'_OL').val("").focus();
					$("#die_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }else if(from_unit_text == "AGE" && to_unit_text == "WEEK"){
				if(to_value_WeektoYear < from_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#die_fromYear'+id+'_OL').val("").focus();
					$("#die_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#die_toYear'+id+'_OL').val("").focus();
					$("#die_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }else if(from_unit_text == "AGE" && to_unit_text == "DAY"){
				if(to_value_toYear < from_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#die_fromYear'+id+'_OL').val("").focus();
					$("#die_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#die_toYear'+id+'_OL').val("").focus();
					$("#die_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }else if(from_unit_text == "DAY" && to_unit_text == "AGE"){			 
				if(from_value_toYear > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#die_fromYear'+id+'_OL').val("").focus();
					$("#die_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#die_toYear'+id+'_OL').val("").focus();
					$("#die_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }else if(from_unit_text == "WEEK" && to_unit_text == "AGE"){
				if(from_value_WeektoYear > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#die_fromYear'+id+'_OL').val("").focus();
					$("#die_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#die_toYear'+id+'_OL').val("").focus();
					$("#die_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }else if(from_unit_text == "MONTH" && to_unit_text == "AGE"){
				if(from_value_MonthtoYear > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#die_fromYear'+id+'_OL').val("").focus();
					$("#die_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#die_toYear'+id+'_OL').val("").focus();
					$("#die_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }
		
	}
}

function check_fromtoUnit_OL(id){	

	var from_unit_text = $("#die_fromYearUnit"+id+"_OL option:selected").val();
	var to_unit_text = $("#die_toYearUnit"+id+"_OL option:selected").val();	
	
	if(from_unit_text != "NONE" && to_unit_text != "NONE"){
		/*$("#die_fromYearUnit"+id+"_OL").change(function(){*/
			var from_value = Number($('#die_fromYear'+id+'_OL').val());
			var to_value = Number($('#die_toYear'+id+'_OL').val());

			 var from_value_toWeek =Number(from_value/7);
			 var to_value_toWeek = Number(to_value/7);
			 var from_value_toMonth = Number(from_value/30);
			 var to_value_toMonth = Number(to_value/30);
			 var from_value_toYear = Number(from_value/365);
			 var to_value_toYear = Number(to_value/365);
			 var from_value_WeektoMonth = Number(from_value/4);
			 var to_value_WeektoMonth = Number(to_value/4);
			 var from_value_WeektoYear = Number(from_value/48);
			 var to_value_WeektoYear = Number(to_value/48);
			 var from_value_MonthtoYear = Number(from_value/12);
			 var to_value_MonthtoYear = Number(to_value/12);			
			
			 
			if(from_unit_text == to_unit_text){
				if(from_value > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#die_fromYear'+id+'_OL').val("").focus();
					$("#die_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#die_toYear'+id+'_OL').val("").focus();
					$("#die_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
			}else if(from_unit_text == "DAY" && to_unit_text == "WEEK"){
					if(from_value_toWeek > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#die_fromYear'+id+'_OL').val("").focus();
						$("#die_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
						$('#die_toYear'+id+'_OL').val("").focus();
						$("#die_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				    }
		    }else if(from_unit_text == "WEEK" && to_unit_text == "DAY"){
					if(to_value_toWeek < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						alertError(message);
						$('#die_fromYear'+id+'_OL').val("").focus();
						$("#die_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
						$('#die_toYear'+id+'_OL').val("").focus();
						$("#die_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				    }
		    }else if(from_unit_text == "DAY" && to_unit_text == "MONTH"){
					if(from_value_toMonth > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#die_fromYear'+id+'_OL').val("").focus();
						$("#die_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
						$('#die_toYear'+id+'_OL').val("").focus();
						$("#die_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					}
			 }else if(from_unit_text == "MONTH" && to_unit_text == "DAY"){
					if(to_value_toMonth < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#die_fromYear'+id+'_OL').val("").focus();
						$("#die_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
						$('#die_toYear'+id+'_OL').val("").focus();
						$("#die_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				    }
		    }else if(from_unit_text == "DAY" && to_unit_text == "YEAR"){
					if(from_value_toYear > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#die_fromYear'+id+'_OL').val("").focus();
						$("#die_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
						$('#die_toYear'+id+'_OL').val("").focus();
						$("#die_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					}
			 }else if(from_unit_text == "YEAR" && to_unit_text == "DAY"){
					if(to_value_toYear < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#die_fromYear'+id+'_OL').val("").focus();
						$("#die_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
						$('#die_toYear'+id+'_OL').val("").focus();
						$("#die_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				    }
		    }else if(from_unit_text == "WEEK" && to_unit_text == "MONTH"){
					if(from_value_WeektoMonth > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#die_fromYear'+id+'_OL').val("").focus();
						$("#die_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
						$('#die_toYear'+id+'_OL').val("").focus();
						$("#die_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				    }
		    }else if(from_unit_text == "MONTH" && to_unit_text == "WEEK"){
					if(to_value_WeektoMonth < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#die_fromYear'+id+'_OL').val("").focus();
						$("#die_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
						$('#die_toYear'+id+'_OL').val("").focus();
						$("#die_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					}
			 }else if(from_unit_text == "WEEK" && to_unit_text == "YEAR"){
					if(from_value_WeektoYear > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#die_fromYear'+id+'_OL').val("").focus();
						$("#die_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
						$('#die_toYear'+id+'_OL').val("").focus();
						$("#die_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					}
			 }else if(from_unit_text == "YEAR" && to_unit_text == "WEEK"){
					if(to_value_WeektoYear < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#die_fromYear'+id+'_OL').val("").focus();
						$("#die_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
						$('#die_toYear'+id+'_OL').val("").focus();
						$("#die_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					}
		     }else if(from_unit_text == "MONTH" && to_unit_text == "YEAR"){
					if(from_value_MonthtoYear > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#die_fromYear'+id+'_OL').val("").focus();
						$("#die_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
						$('#die_toYear'+id+'_OL').val("").focus();
						$("#die_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					}
			 }else if(from_unit_text == "YEAR" && to_unit_text == "MONTH"){
					if(to_value_MonthtoYear < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#die_fromYear'+id+'_OL').val("").focus();
						$("#die_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
						$('#die_toYear'+id+'_OL').val("").focus();
						$("#die_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					}
			 }else if(from_unit_text == "YEAR" && to_unit_text == "YEAR"){
					if(to_value < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#die_fromYear'+id+'_OL').val("").focus();
						$("#die_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
						$('#die_toYear'+id+'_OL').val("").focus();
						$("#die_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					}
			 }else if(from_unit_text == "AGE" && to_unit_text == "MONTH"){
				 if(to_value_MonthtoYear < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#die_fromYear'+id+'_OL').val("").focus();
						$("#die_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
						$('#die_toYear'+id+'_OL').val("").focus();
						$("#die_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					}
			 }else if(from_unit_text == "AGE" && to_unit_text == "WEEK"){
					if(to_value_WeektoYear < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#die_fromYear'+id+'_OL').val("").focus();
						$("#die_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
						$('#die_toYear'+id+'_OL').val("").focus();
						$("#die_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					}
			 }else if(from_unit_text == "AGE" && to_unit_text == "DAY"){
					if(to_value_toYear < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#die_fromYear'+id+'_OL').val("").focus();
						$("#die_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
						$('#die_toYear'+id+'_OL').val("").focus();
						$("#die_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					}
			 }else if(from_unit_text == "DAY" && to_unit_text == "AGE"){			 
					if(from_value_toYear > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#die_fromYear'+id+'_OL').val("").focus();
						$("#die_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
						$('#die_toYear'+id+'_OL').val("").focus();
						$("#die_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					}
			 }else if(from_unit_text == "WEEK" && to_unit_text == "AGE"){
					if(from_value_WeektoYear > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#die_fromYear'+id+'_OL').val("").focus();
						$("#die_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
						$('#die_toYear'+id+'_OL').val("").focus();
						$("#die_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					}
			 }else if(from_unit_text == "MONTH" && to_unit_text == "AGE"){
					if(from_value_MonthtoYear > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#die_fromYear'+id+'_OL').val("").focus();
						$("#die_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
						$('#die_toYear'+id+'_OL').val("").focus();
						$("#die_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					}
			 }
		/*});	*/
	}
	
}

function cloneBenefitDie_OL(){
	  var lastImgOK = $('#tbody_dieL_OL >tbody>tr:last>td:first').attr("id") || 0;
	  var numberImgOK = Number(lastImgOK.replace("imgOK_OL_",""))+1;
	  /*var runnumber = Number(lastImgOK.replace("imgOK_OL_",""));*/
	  
	  var imgOKcount = $("#tbody_dieL_OL i.glyphicon-ok").length;	
	  
	  if(imgOKcount <= 0)
		{	
			message = "กรุณาเลือกรายการที่ต้องการคัดลอก";
			alertError(message);
			
		}else{
			for(var i = 1; i < numberImgOK; i++){
				var checked = $('#tbody_dieL_OL'+i+' >td:first>i').attr("class");
				if(checked == "glyphicon glyphicon-ok"){
					
					var runnumber = numberImgOK;
					
					var cloneL = $('#tbody_dieL_OL'+i).clone().prop("id","tbody_dieL_OL"+runnumber);
					var cloneR = $('#tbody_dieR_OL'+i).clone().prop("id","tbody_dieR_OL"+runnumber);

					 $(cloneL).find('td:first').prop("id","imgOK_OL_"+runnumber);
					 $(cloneL).find('td:first>i').removeClass("glyphicon-ok").addClass("glyphicon-edit");
					/* $(cloneL).find('input[type=text]:nth-child(2)').attr("id","die_phase"+runnumber+"_OL");*/
					 $(cloneL).find('td:nth-child(2) input').attr("id","die_fromYear"+runnumber+"_OL");
					 $(cloneL).find('td:nth-child(4) input').attr("id","die_toYear"+runnumber+"_OL");
					 $(cloneL).find('td:nth-child(3)>select').attr("id","die_fromYearUnit"+runnumber+"_OL");
					 $(cloneL).find('td:nth-child(5)>select').attr("id","die_toYearUnit"+runnumber+"_OL");
					 
					 $(cloneR).find('td:nth-child(1)>select').attr("id","die_sa_max"+runnumber+"_OL");
					 $(cloneR).find('td:nth-child(2) input').attr("id","die_sa"+runnumber+"_OL");
					 $(cloneR).find('td:nth-child(5)>select').attr("id","die_prem"+runnumber+"_OL");
					 $(cloneR).find('td:nth-child(6) input').attr("id","die_checkbox"+runnumber);
					 $(cloneR).find('td:nth-child(7) input').attr("id","die_cvpv_OL"+runnumber);
					 $(cloneR).find('td:nth-child(11)').attr("id","adb_OL"+runnumber);
					 $(cloneR).find('td:nth-child(14)').attr("id","adbP_OL"+runnumber);
					 $(cloneR).find('td:nth-child(3)>select').attr("id","die_sa_unit"+runnumber+"_OL");
					 $(cloneR).find('td:nth-child(8)>select').attr("id","die_sl_cvpv"+runnumber+"_OL");
					 $(cloneR).find('td:nth-child(9)>select').attr("id","die_sl_oth"+runnumber+"_OL");
					 $(cloneR).find('td:nth-child(4) input').attr("id","die_premium_OL"+runnumber);
					 $(cloneR).find('td:nth-child(10)>select').attr("id","die_condition_adb"+runnumber+"_OL");
					 $(cloneR).find('td:nth-child(12)>select').attr("id","die_adb_type"+runnumber+"_OL");
					 $(cloneR).find('td:nth-child(13)>select').attr("id","die_acc_type"+runnumber+"_OL");
					 $(cloneR).find('td:nth-child(15)>select').attr("id","die_condition_acc"+runnumber+"_OL");
					 
					/* var new_diePhase = $(cloneL).find("td:nth-child(2) input").attr("id","die_phase"+runnumber+"_OL").val();
					 if(new_diePhase != ""){*/
						 /*$(cloneL).find("td:nth-child(2) input").attr("id","die_phase"+runnumber+"_OL").val("");*/
						/* $(cloneL).find("td:nth-child(2) input").attr("onblur","check_fromto_OL("+runnumber+")");
						 $(cloneL).find("td:nth-child(4) input").attr("onblur","check_fromto_OL("+runnumber+")");
						 $(cloneL).find('td:nth-child(3)>select').attr("onchange","check_fromtoUnit_OL("+runnumber+")");
						 $(cloneL).find('td:nth-child(5)>select').attr("onchange","check_fromtoUnit_OL("+runnumber+")");
						 $(cloneR).find('td:nth-child(5)>select').attr("onchange","sl_premium("+runnumber+")");*/
					/* }else{*/
						 /*$(cloneL).find("td:nth-child(2) input").attr("id","die_phase"+runnumber+"_OL").val("");*/
						 $(cloneL).find("td:nth-child(2) input").attr("onblur","check_fromto_OL("+runnumber+")");
						 $(cloneL).find("td:nth-child(4) input").attr("onblur","check_fromto_OL("+runnumber+")");
						 $(cloneL).find('td:nth-child(3)>select').attr("onchange","check_fromtoUnit_OL("+runnumber+")");
						 $(cloneL).find('td:nth-child(5)>select').attr("onchange","check_fromtoUnit_OL("+runnumber+")");
						 $(cloneR).find('td:nth-child(5)>select').attr("onchange","sl_premium("+runnumber+")");
					/* }*/
					
					 
					 var $originalSelects1 = $('#tbody_dieL_OL'+i).find('select:nth-child(1)');
					 $(cloneL).find('select:nth-child(1)').each(function(index, item) {
					      $(item).val($originalSelects1.eq(index).val() );
					  
					 });
					 

					 var $originalSelects2 = $('#tbody_dieL_OL'+i).find('select:nth-child(2)');
					 $(cloneL).find('select:nth-child(2)').each(function(index2, item2) {					      
					      $(item2).val($originalSelects2.eq(index2).val() );
					  
					 });
					 
					 var $originalSelects3 = $('#tbody_dieR_OL'+i).find('select:nth-child(1)');
					 $(cloneR).find('select:nth-child(1)').each(function(index3, item3) {				
					      $(item3).val($originalSelects3.eq(index3).val() );
					  
					 });
					 
					 var $originalSelects4 = $('#tbody_dieR_OL'+i).find('select:nth-child(2)');
					 $(cloneR).find('select:nth-child(2)').each(function(index4, item4) {					    
					      $(item4).val($originalSelects4.eq(index4).val() );
					  
					 });
					 
					 $(cloneL).insertAfter("#tbody_dieL_OL >tbody tr:last");
					 $(cloneR).insertAfter("#tbody_dieR_OL >tbody tr:last");
					 $('.auto').autoNumeric('init');
					 runnumber++;
				}
			}
			nameTab 	= "menu_OL_5";
			Statuesave = "N";
		}
}

function confirmDeleteBenefit_OL(){
	var imgOKcount = $("#tbody_dieL_OL i.glyphicon-ok").length;	
	if(imgOKcount <= 0)
	{	
		message = "กรุณาเลือกรายการที่ต้องการลบ";
		alertError(message);
	}else{
		/*alert("Hello world")*/
		message = "ต้องการลบรายการใช่หรือไม่";
		alertDeleteError(message);	
		$('#btn_confirm_del').click(function(){
			var lastImgOK = $('#tbody_dieL_OL >tbody>tr:last>td:first').attr("id");	
			var numberImgOK = Number(lastImgOK.replace("imgOK_OL_",""))+1;
			
			for(var i = 1;i<=numberImgOK;i++){
				var checked = $('#tbody_dieL_OL'+i+' >td:first>i').attr("class");
				if(checked == "glyphicon glyphicon-ok"){
					deleteTableRow('#tbody_dieL_OL'+i);
					deleteTableRow('#tbody_dieR_OL'+i);
				}
			}
			/*change ID*/	
	/*		var a=0, a2=0;
			$("#tbody_dieL_OL tbody>tr").each(function(i){
				if(i != 0){
					a++;
					$(this).attr("id","tbody_dieL_OL"+a);
					$(this).find("td:nth-child(1)").attr("id","imgOK_OL_"+a);
					$(this).find("td:nth-child(2)>input").attr("id","die_phase"+a+"_OL");
					$(this).find("td:nth-child(3)>input").attr("id","die_phase"+a+"_OL");
					$(this).find("td:nth-child(4)>select").attr("id","die_fromYearUnit"+a+"_OL");
					$(this).find("td:nth-child(5)>input").attr("id","die_phase"+a+"_OL");
					$(this).find("td:nth-child(6)>select").attr("id","die_toYearUnit"+a+"_OL");		
				}
				
			});
			
			$("#tbody_dieR_OL tbody>tr").each(function(i){
				if(i != 0){
					a2++;
					$(this).attr("id","tbody_dieR_OL"+a2);
					$(this).find("td:nth-child(2)>input").attr("id","die_sa"+a2+"_OL");
					$(this).find("td:nth-child(3)>select").attr("id","die_sa_unit"+a2+"_OL");
					$(this).find("td:nth-child(4)>input").attr("id","die_premium_OL"+a2);
					$(this).find("td:nth-child(6)>input").attr("id","die_checkbox"+a2);	
					$(this).find("td:nth-child(7)>input").attr("id","die_cvpv_OL"+a2);
					$(this).find("td:nth-child(11)>input").attr("id","adb_OL"+a2);
					$(this).find("td:nth-child(14)>input").attr("id","adbP_OL"+a2);
				}
				
			});	*/
			nameTab 	= "menu_OL_5";
			Statuesave = "N";
		});
	}
}

function addBenefitRefund_OL(){
	
	var typeMoney = $('select.item-i').val() || 0;

			var lastImgOK = $('#benefit_refund >tbody>tr:last>td:first').attr("id") || 0;
			var numberImgOK = 0;
			
			if(lastImgOK == 0){
				numberImgOK = 1;
			}else{
				numberImgOK = Number(lastImgOK.replace("imgOK_refund",""))+1;
			}
			
			var newID = "imgOK_refund"+numberImgOK;
			var ftOnclick = 'imgCheckbox("'+newID+'");';
			
			var row = "";
			row = "<tr id='tbody_refund"+numberImgOK+"'>"+
				  						"<td width='50' class='text-center borderBlack' id="+"'"+newID+"'"+" onclick='"+ftOnclick+"' style='vertical-align: middle;'><i class='glyphicon glyphicon-edit'></i></td>"+
										"<td width='75' class='borderBlack'><input id='refund_fromYear"+numberImgOK+"' class='form-control margin-padding0 text-center' onkeypress='validate(event);' maxlength='4' type='text' width='50' value='' onkeyup='replaceDot(this)' onblur='choose_from_year("+numberImgOK+");'></td>"+
										"<td width='75' class='borderBlack'><input id='refund_fromAge"+numberImgOK+"' class='form-control margin-padding0 text-center' onkeypress='validate(event);' maxlength='2' type='text' width='50' value='' onkeyup='replaceDot(this)' onblur='choose_from_year("+numberImgOK+");'></td>"+
										"<td width='75' class='borderBlack'><input id='refund_toYear"+numberImgOK+"' class='form-control margin-padding0 text-center'onkeypress='validate(event);'  maxlength='4' type='text' width='50' value='' onkeyup='replaceDot(this)' onblur='choose_from_year("+numberImgOK+");'></td>"+
										"<td width='75' class='borderBlack'><input id='refund_toAge"+numberImgOK+"' class='form-control margin-padding0 text-center' onkeypress='validate(event);' maxlength='2' type='text' width='50' value='' onkeyup='replaceDot(this)' onblur='choose_from_year("+numberImgOK+");'></td>"+
										"<td width='100' class='borderBlack'><input id='refund_year"+numberImgOK+"' class='auto form-control text-center' onkeypress='validate(event);'  onkeyup='check_min_value_year("+numberImgOK+"), replaceDot(this)' data-v-min='0' data-v-max='99' maxlength='2' type='text' width='50' value=''></td>"+
										"<td width='200' class='borderBlack'><input id='refund_amount"+numberImgOK+"' class='auto form-control text-center'  onblur='select_unit("+numberImgOK+");' type='text' width='50' value='0.00' data-v-min='0.00' data-v-max='999999999.99'></td>"+
										"<td width='200' class='text-center borderBlack'><select class='form-control UNIT_TYPE' onchange='select_unit_option("+numberImgOK+")' id='refund_unit"+numberImgOK+"'><option value='NONE'>None</option></select></td>"+
										"<td width='200' class='text-center borderBlack'><select class='form-control BENEF_FACTOR' id='refund_factor"+numberImgOK+"'><option value='NONE'>None</option></select></td>"+
										"<td width='200' class='text-center borderBlack'><select class='form-control SCOPE_TYPE' id='refund_scope"+numberImgOK+"'><option value='NONE'>None</option></select></td>"+
				  "</tr>";
			
			$("#benefit_refund tbody").append(row);
			$('.auto').autoNumeric('init');
			
			var row_unit = "";
			var type = $("#benef_factor_OL").val();
				type = type.split(",");

			var pass = 0;
			var text = 1;
			for(i = 0 ; i < type.length/2 ; i++){
				var row_unit = "<option value='"+type[pass]+"'>"+type[text]+"</option>"
				pass = Number(parseInt(pass) + parseInt(2));
				text = Number(parseInt(text) + parseInt(2))
				$("#refund_factor"+numberImgOK).append(row_unit);
			}
			
			var row_fac = "";
			var typeFac = $("#benef_unit_OL").val();
			typeFac = typeFac.split(",");

			var pass = 0;
			var text = 1;
			for(i = 0 ; i < typeFac.length/2 ; i++){
				var row_fac = "<option value='"+typeFac[pass]+"'>"+typeFac[text]+"</option>"
				pass = Number(parseInt(pass) + parseInt(2));
				text = Number(parseInt(text) + parseInt(2))
				$("#refund_unit"+numberImgOK).append(row_fac);
			}
			
			var row_scope = "";
			var typeScope = $("#benef_scope_OL").val();
			typeScope = typeScope.split(",");

			var pass = 0;
			var text = 1;
			for(i = 0 ; i < typeScope.length/2 ; i++){
				var row_scope = "<option value='"+typeScope[pass]+"'>"+typeScope[text]+"</option>"
				pass = Number(parseInt(pass) + parseInt(2));
				text = Number(parseInt(text) + parseInt(2))
				$("#refund_scope"+numberImgOK).append(row_scope);
			}
			
}

function addBenefitMedical_OL(){
	/*var typeMoney = $('select.item-i').val() || 0;*/

	var lastImgOK = $('#benefit_medical >tbody>tr:last>td:first').attr("id") || 0;
	var numberImgOK = 0;
	
	if(lastImgOK == 0){
		numberImgOK = 1;
	}else{
		numberImgOK = Number(lastImgOK.replace("imgOK_med",""))+1;
	}
	
	var newID = "imgOK_med"+numberImgOK;
	var ftOnclick = 'imgCheckbox("'+newID+'");';
	
	var row = "";
	row = "<tr id='tbody_medical"+numberImgOK+"'>"+
								"<td width='50' class='text-center borderBlack' id="+"'"+newID+"'"+" onclick='"+ftOnclick+"' style='vertical-align: middle;'><i class='glyphicon glyphicon-edit'></i></td>"+
								"<td width='75' class='borderBlack'><input id='medical_fromYear"+numberImgOK+"' class='form-control margin-padding0 text-center' onkeypress='validate(event);' type='text' width='50' maxlength='3' value='' onkeyup='replaceDot(this)' onblur='choose_from_year_med("+numberImgOK+");'></td>"+
								"<td width='75' class='borderBlack'><input id='medical_fromAge"+numberImgOK+"' class='form-control margin-padding0 text-center' onkeypress='validate(event);' type='text' width='50' maxlength='2' value='' onkeyup='replaceDot(this)' onblur='choose_from_year_med("+numberImgOK+");'></td>"+
								"<td width='75' class='borderBlack'><input id='medical_toYear"+numberImgOK+"' class='form-control margin-padding0 text-center' onkeypress='validate(event);' type='text' width='50' maxlength='3' value='' onkeyup='replaceDot(this)' onblur='choose_from_year_med("+numberImgOK+");'></td>"+
								"<td width='75' class='borderBlack'><input id='medical_toAge"+numberImgOK+"' class='form-control margin-padding0 text-center' onkeypress='validate(event);' type='text' width='50' maxlength='2' value='' onkeyup='replaceDot(this)' onblur='choose_from_year_med("+numberImgOK+");'></td>"+
								"<td width='100' class='borderBlack'><input id='medical_year"+numberImgOK+"' class='auto form-control text-center' type='text' onkeypress='validate(event);'  onkeyup='check_min_value_year_med("+numberImgOK+")' data-v-min='0' data-v-max='99' width='50' maxlength='2' value='' ></td>"+
								"<td width='200' class='borderBlack'><input id='medical_amount"+numberImgOK+"' class='auto form-control text-center' onblur='select_unit_med("+numberImgOK+")' type='text' width='50' value='0.00' data-v-min='0.00' data-v-max='999999999.99'></td>"+
								"<td width='200' class='text-center borderBlack'><select class='form-control UNIT_TYPE' onchange='select_unit_option_med("+numberImgOK+")' id='medical_unit"+numberImgOK+"'><option value='NONE'>None</option></select></td>"+
								"<td width='200' class='text-center borderBlack'><select class='form-control BENEF_FACTOR' id='medical_factor"+numberImgOK+"'><option value='NONE'>None</option></select></td>"+
								"<td width='200' class='text-center borderBlack'><select class='form-control SCOPE_TYPE' id='medical_scope"+numberImgOK+"'><option value='NONE'>None</option></select></td>"+
		  "</tr>";
	
	$("#benefit_medical tbody").append(row);
	$('.auto').autoNumeric('init');
	
	var row_unit = "";
	var type = $("#benef_factor_OL").val();
		type = type.split(",");

	var pass = 0;
	var text = 1;
	for(i = 0 ; i < type.length/2 ; i++){
		var row_unit = "<option value='"+type[pass]+"'>"+type[text]+"</option>"
		pass = Number(parseInt(pass) + parseInt(2));
		text = Number(parseInt(text) + parseInt(2))
		$("#medical_factor"+numberImgOK).append(row_unit);
	}
	
	var row_fac = "";
	var typeFac = $("#benef_unit_OL").val();
	typeFac = typeFac.split(",");

	var pass = 0;
	var text = 1;
	for(i = 0 ; i < typeFac.length/2 ; i++){
		var row_fac = "<option value='"+typeFac[pass]+"'>"+typeFac[text]+"</option>"
		pass = Number(parseInt(pass) + parseInt(2));
		text = Number(parseInt(text) + parseInt(2))
		$("#medical_unit"+numberImgOK).append(row_fac);
	}
	
	var row_scope = "";
	var typeScope = $("#benef_scope_OL").val();
	typeScope = typeScope.split(",");

	var pass = 0;
	var text = 1;
	for(i = 0 ; i < typeScope.length/2 ; i++){
		var row_scope = "<option value='"+typeScope[pass]+"'>"+typeScope[text]+"</option>"
		pass = Number(parseInt(pass) + parseInt(2));
		text = Number(parseInt(text) + parseInt(2))
		$("#medical_scope"+numberImgOK).append(row_scope);
	}
	
	
	
}

function addBenefitPension_OL() {
	var typeMoney = $('select.item-i').val() || 0;

	var lastImgOK = $('#benefit_pension >tbody>tr:last>td:first').attr("id") || 0;
	var numberImgOK = 0;
	
	if(lastImgOK == 0){
		numberImgOK = 1;
	}else{
		numberImgOK = Number(lastImgOK.replace("imgOK_pension",""))+1;
	}
	
	var newID = "imgOK_pension"+numberImgOK;
	var ftOnclick = 'imgCheckbox(this.id);';
	
	var row = "";
	row = "<tr id='tbody_pension"+numberImgOK+"'>"+
		  						"<td width='50' class='text-center borderBlack' id="+"'"+newID+"'"+" onclick='"+ftOnclick+"' style='vertical-align: middle;'><i class='glyphicon glyphicon-edit'></i></td>"+
								"<td width='75' class='borderBlack'><input id='pension_fromYear"+numberImgOK+"' class='form-control margin-padding0 text-center' onkeypress='validate(event);' type='text' maxlength='3' width='50' value='' onkeyup='replaceDot(this)' onblur='choose_from_year_pension("+numberImgOK+");'></td>"+
								"<td width='75' class='borderBlack'><input id='pension_fromAge"+numberImgOK+"' class='form-control margin-padding0 text-center' onkeypress='validate(event);' type='text' maxlength='2' width='50' value='' onkeyup='replaceDot(this)' onblur='choose_from_year_pension("+numberImgOK+");'></td>"+
								"<td width='75' class='borderBlack'><input id='pension_toYear"+numberImgOK+"' class='form-control margin-padding0 text-center' onkeypress='validate(event);' type='text' maxlength='3' width='50' value='' onkeyup='replaceDot(this)' onblur='choose_from_year_pension("+numberImgOK+");'></td>"+
								"<td width='75' class='borderBlack'><input id='pension_toAge"+numberImgOK+"' class='form-control margin-padding0 text-center' onkeypress='validate(event);' type='text' maxlength='2' width='50' value='' onkeyup='replaceDot(this)' onblur='choose_from_year_pension("+numberImgOK+");'></td>"+
								"<td width='100' class='borderBlack'><input id='pension_year"+numberImgOK+"' class='auto form-control text-center' type='text' onkeypress='validate(event);'  onkeyup='check_min_value_year_pen("+numberImgOK+")' data-v-min='0' data-v-max='99' width='50' maxlength='2' value=''></td>"+
								"<td width='200' class='borderBlack'><input id='pension_amount"+numberImgOK+"' class='auto form-control text-center' onblur='select_unit_pension("+numberImgOK+");' type='text' width='50' value='0.00' data-v-min='0.00' data-v-max='999999999.99'></td>"+
								"<td width='200' class='text-center borderBlack'><select class='form-control UNIT_TYPE' onchange='select_unit_option_pension("+numberImgOK+");' id='pension_unit"+numberImgOK+"'><option value='NONE'>None</option></select></td>"+
								"<td width='200' class='text-center borderBlack'><select class='form-control UNIT_TYPE' id='pension_factor"+numberImgOK+"'><option value='NONE'>None</option></select></td>"+
							
		  "</tr>";

	$("#benefit_pension tbody").append(row);
	$('.auto').autoNumeric('init');
	
	var type = $("#benef_factor_OL").val();
	type = type.split(",");

	var pass = 0;
	var text = 1;
	for(i = 0 ; i < type.length/2 ; i++){
		var row_unit = "<option value='"+type[pass]+"'>"+type[text]+"</option>"
		pass = Number(parseInt(pass) + parseInt(2));
		text = Number(parseInt(text) + parseInt(2))
		$("#pension_factor"+numberImgOK).append(row_unit);
	}
	
	var row_fac = "";
	var typeFac = $("#benef_unit_OL").val();
	typeFac = typeFac.split(",");

	var pass = 0;
	var text = 1;
	for(i = 0 ; i < typeFac.length/2 ; i++){
		var row_fac = "<option value='"+typeFac[pass]+"'>"+typeFac[text]+"</option>"
		pass = Number(parseInt(pass) + parseInt(2));
		text = Number(parseInt(text) + parseInt(2))
		$("#pension_unit"+numberImgOK).append(row_fac);
	}
	
}

function addBenefitDividend_OL(){

	var lastImgOK = $('#benefit_Guaruntee_tbl >tbody>tr:last>td:first').attr("id") || 0;
	var numberImgOK = 0;
	
	if(lastImgOK == 0){
		numberImgOK = 1;
	}else{
		numberImgOK = Number(lastImgOK.replace("imgOK_div",""))+1;
	}
	
	var newID = "imgOK_div"+numberImgOK;
	var ftOnclick = 'imgCheckbox("'+newID+'");';
	
	var row = "";
	row = "<tr id='tbody_dividend"+numberImgOK+"'>"+
								"<td width='50' class='text-center borderBlack' id="+"'"+newID+"'"+" onclick='"+ftOnclick+"' style='vertical-align: middle;'><i class='glyphicon glyphicon-edit'></i></td>"+
								"<td width='200' class='text-center borderBlack'><select class='form-control DIVIDEND_TYPE' id='dividend_beg_type"+numberImgOK+"'><option value='NONE'>None</option></select></td>"+
								"<td width='75' class='borderBlack' style='margin:0;'><input id='dividend_year"+numberImgOK+"' class='auto form-control margin-padding0 text-center' onkeypress='validate(event);' onkeyup='check_min_value_year_div("+numberImgOK+")' data-v-min='0' data-v-max='99' maxlength='2' type='text' width='50' value=''></td>"+
		  						"<td width='75' class='borderBlack' style='margin:0;'><input id='dividend_amount"+numberImgOK+"' class='auto form-control margin-padding0 text-center' onblur='select_unit_dividend("+numberImgOK+")' type='text' width='50' value='0.00' data-v-min='0.00' data-v-max='999999999.99'></td>"+
								"<td width='200' class='text-center borderBlack'><select class='form-control UNIT_TYPE' onchange='select_unit_option_dividend("+numberImgOK+");' id='dividend_unit"+numberImgOK+"'><option value='NONE'>None</option></select></td>"+
								"<td width='200' class='text-center borderBlack'><select class='form-control BENEF_FACTOR' id='dividend_factor"+numberImgOK+"'><option value='NONE'>None</option></select></td>"+
								"<td width='200' class='text-center borderBlack'><select class='form-control SCOPE_TYPE' id='dividend_scope"+numberImgOK+"'><option value='NONE'>None</option></select></td>"+
		  "</tr>";
	
	$("#benefit_Guaruntee_tbl tbody").append(row);
	$('.auto').autoNumeric('init');
	
					var row_unit = "";
					var type = $("#benef_factor_OL").val();
						type = type.split(",");
				
					var pass = 0;
					var text = 1;
					for(i = 0 ; i < type.length/2 ; i++){
						var row_unit = "<option value='"+type[pass]+"'>"+type[text]+"</option>"
						pass = Number(parseInt(pass) + parseInt(2));
						text = Number(parseInt(text) + parseInt(2))
						$("#dividend_factor"+numberImgOK).append(row_unit);
					}
					
					var row_fac = "";
					var typeFac = $("#benef_unit_OL").val();
					typeFac = typeFac.split(",");
				
					var pass = 0;
					var text = 1;
					for(i = 0 ; i < typeFac.length/2 ; i++){
						var row_fac = "<option value='"+typeFac[pass]+"'>"+typeFac[text]+"</option>"
						pass = Number(parseInt(pass) + parseInt(2));
						text = Number(parseInt(text) + parseInt(2))
						$("#dividend_unit"+numberImgOK).append(row_fac);
					}
					
					var row_scope = "";
					var typeScope = $("#benef_scope_OL").val();
					typeScope = typeScope.split(",");
				
					var pass = 0;
					var text = 1;
					for(i = 0 ; i < typeScope.length/2 ; i++){
						var row_scope = "<option value='"+typeScope[pass]+"'>"+typeScope[text]+"</option>"
						pass = Number(parseInt(pass) + parseInt(2));
						text = Number(parseInt(text) + parseInt(2))
						$("#dividend_scope"+numberImgOK).append(row_scope);
					}
					
					
					var row_dividend = "";
					var typeDividend = $("#benef_dividend_OL").val();
					typeDividend = typeDividend.split(",");
				
					var pass = 0;
					var text = 1;
					for(i = 0 ; i < typeDividend.length/2 ; i++){
						var row_dividend = "<option value='"+typeDividend[pass]+"'>"+typeDividend[text]+"</option>"
						pass = Number(parseInt(pass) + parseInt(2));
						text = Number(parseInt(text) + parseInt(2))
						$("#dividend_beg_type"+numberImgOK).append(row_dividend);
					}
					
					
	
	
}

function select_unit(val){
	
	var amount = $("#refund_amount"+val).val();
	if($("#refund_unit"+val).val() == "PERCENT"){
		var amountInt = replaceComma(amount);

		if(Number(amountInt) > 999.99){
			message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
			alertError(message);
			$("#refund_amount"+val).val("0.00");
		}
	}
	
	if(amount == ""){
		$("#refund_amount"+val).val("0.00");
	}
	
	
}

function select_unit_pension(val){
	var amount = $("#pension_amount"+val).val();
	if($("#pension_unit"+val).val() == "PERCENT"){
		var amountInt = replaceComma(amount);

		if(Number(amountInt) > 999.99){
			message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
			alertError(message);
			$("#pension_amount"+val).val("0.00");
		}
	}
	if(amount == ""){
		$("#pension_amount"+val).val("0.00");
	}
}

function select_unit_med(val){
	var amount = $("#medical_amount"+val).val();
	if($("#medical_unit"+val).val() == "PERCENT"){
		var amountInt = replaceComma(amount);

		if(Number(amountInt) > 999.99){
			message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
			alertError(message);
			$("#medical_amount"+val).val("0.00");
		}
	}
	if(amount == ""){
		$("#medical_amount"+val).val("0.00");
	}
	
}
function select_unit_dividend(val){
	var amount = $("#dividend_amount"+val).val();
	if($("#dividend_unit"+val).val() == "PERCENT"){
		var amountInt = replaceComma(amount);

		if(Number(amountInt) > 999.99){
			message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
			alertError(message);
			$("#dividend_amount"+val).val("0.00");
		}
	}
	if(amount == ""){
		$("#dividend_amount"+val).val("0.00");
	}
}


function select_unit_option(val){
	var amount = $("#refund_amount"+val).val();
		var amountInt = replaceComma(amount);
		if(Number(amountInt) > 999.99){
			if($("#refund_unit"+val).val() == "PERCENT"){
				message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
				alertError(message);
				$("#refund_unit"+val+" option[value=NONE]").attr("selected", true);
			}
		}
}


function select_unit_option_pension(val){
	var amount = $("#pension_amount"+val).val();
		var amountInt = replaceComma(amount);
		if(Number(amountInt) > 999.99){
			if($("#pension_unit"+val).val() == "PERCENT"){
				message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
				alertError(message);
				$("#pension_unit"+val+" option[value=NONE]").attr("selected", true);
			}
		}
}

function select_unit_option_med(val){
	var amount = $("#medical_amount"+val).val();
		var amountInt = replaceComma(amount);
		if(Number(amountInt) > 999.99){
			if($("#medical_unit"+val).val() == "PERCENT"){
				message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
				alertError(message);
				$("#medical_unit"+val+" option[value=NONE]").attr("selected", true);
			}
		}
}

function select_unit_option_dividend(val){
	var amount = $("#dividend_amount"+val).val();
		var amountInt = replaceComma(amount);
		if(Number(amountInt) > 999.99){
			if($("#dividend_unit"+val).val() == "PERCENT"){
				message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
				alertError(message);
				$("#dividend_unit"+val+" option[value=NONE]").attr("selected", true);
			}
		}
}

function replaceComma(value){
	var result = value.replace(/,/g, "");
	return result;
}


function delete_tbBenefitRefund(){
	$("#benefit_refund tbody>tr").each(function(){
		if( $(this).find('td:nth-child(1) i').hasClass('glyphicon-ok')){
			$(this).remove();
		}
	})
}

function delete_tbDeletePension(){
	$("#benefit_pension tbody>tr").each(function(){
		if( $(this).find('td:nth-child(1) i').hasClass('glyphicon-ok')){
			$(this).remove();
		}
	})
}

function delete_tbDeleteMedical(){
	$("#benefit_medical tbody>tr").each(function(){
		if( $(this).find('td:nth-child(1) i').hasClass('glyphicon-ok')){
			$(this).remove();
		}
	})
}

function delete_tbDeleteDividend(){
	$("#benefit_Guaruntee_tbl tbody>tr").each(function(){
		if( $(this).find('td:nth-child(1) i').hasClass('glyphicon-ok')){
			$(this).remove();
		}
	})
}

function acttion_privilege_insurance_OL(){
	$("#chk_Policy_Loan_ol").click(function(){
		
	})
	
}
function check_min_value(){
	if($("#pension_startAge_OL").val() == "0"){
		$("#pension_startAge_OL").val("");
	}
	
	if($("#pension_confirmPay_OL").val() == "0"){
		$("#pension_confirmPay_OL").val("");
	}
}

function check_min_value_year(id){
	if($("#refund_year"+id).val() == "0"){
		$("#refund_year"+id).val("");  
	}
	
}

function check_min_value_year_pen(id){
	if($("#pension_year"+id).val() == "0"){
		$("#pension_year"+id).val("");  
	}
	
}
function check_min_value_year_med(id){

	if($("#medical_year"+id).val() == "0"){
		$("#medical_year"+id).val("");  
	}
}
function check_min_value_year_div(id){

	if($("#dividend_year"+id).val() == "0"){
		$("#dividend_year"+id).val("");  
	}
	
}

function replaceDot(e){
	var value = $(e).val();
	if(value.includes(".")){
		var result = value.replace(/./g,'');
		$(e).val(result)
	}
	
}

function replaceZero(e){
	var value = $(e).val();
	if(value == "0"){
		$(e).val("");
	}
}

function replaceBlank(e){
	var value = $(e).val();
	if(value == ""){
		$(e).val("0.00");
	}
}
function sl_premium(no){
	if($("#die_prem"+no+"_OL").val() != "NONE"){
		$("#die_checkbox"+no).prop("disabled", false);
	}else{
		$("#die_checkbox"+no).prop("disabled", true);
		$("#die_checkbox"+no).prop("checked", false);
	}
	
}
function sl_premium_contract(){

	if($("#contract_sl_premium_OL0").val() != "NONE"){
		$("#contract_checkbox_OL0").prop("disabled", false);
	}else{
		$("#contract_checkbox_OL0").prop("disabled", true);
		$("#contract_checkbox_OL0").prop("checked", false);
	}
}

function choose_from_year(id){

	if($('#refund_fromYear'+id).val() != ""){
		$('#refund_fromAge'+id).prop("disabled", true);
		if($("#refund_fromYear"+id).val() == "0"){
			$('#refund_fromYear'+id).val('');
			$('#refund_fromAge'+id).prop("disabled", false);
		}
		
		if($('#refund_fromYear'+id).val() != "" && $('#refund_toYear'+id).val() != ""){
			var yearFrom = Number($('#refund_fromYear'+id).val());
			var yearTo = Number($('#refund_toYear'+id).val());
			if(yearFrom > yearTo){
				$('#refund_fromYear'+id).val('');
				message = "ปีที่สิ้นสุดจะต้องมีค่ามากกว่าปีเริ่มต้นเสมอ กรุณาระบุใหม่";
				alertError(message);
			}
		}
		
	}else{
		$('#refund_fromAge'+id).prop("disabled", false);
	}
	if($('#refund_fromAge'+id).val() != ""){
		$('#refund_fromYear'+id).prop("disabled", true);
		if($('#refund_fromAge'+id).val() == "0"){
			$('#refund_fromAge'+id).val("");
			$('#refund_fromYear'+id).prop("disabled", false);
		}
		
		if($('#refund_fromAge'+id).val() != "" && $('#refund_toAge'+id).val() != ""){
			var ageFrom = Number($('#refund_fromAge'+id).val());
			var agerTo = Number($('#refund_toAge'+id).val());
			if(ageFrom > agerTo){
				$('#refund_fromAge'+id).val("");
				message = "อายุที่สิ้นสุดจะต้องมีค่ามากกว่าอายุเริ่มต้นเสมอ กรุณาระบุใหม่";
				alertError(message);
			}
		}
		
	}else{
		$('#refund_fromYear'+id).prop("disabled", false);
	}
	
	if($('#refund_toYear'+id).val() != ""){
		$('#refund_toAge'+id).prop("disabled", true);
		if($('#refund_toYear'+id).val() == "0"){
			$('#refund_toYear'+id).val('');
			$('#refund_toAge'+id).prop("disabled", false);
		}
		
		if($('#refund_fromYear'+id).val() != "" && $('#refund_toYear'+id).val() != ""){
			var yearFrom = Number($('#refund_fromYear'+id).val());
			var yearTo = Number($('#refund_toYear'+id).val());
			if(yearFrom > yearTo){
				$('#refund_toYear'+id).val('');
				message = "ปีที่สิ้นสุดจะต้องมีค่ามากกว่าปีเริ่มต้นเสมอ กรุณาระบุใหม่";
				alertError(message);
			}
		}
	}else {
		$('#refund_toAge'+id).prop("disabled", false);
	}
		
	if($('#refund_toAge'+id).val() != ""){
		$('#refund_toYear'+id).prop("disabled", true);
		if($('#refund_toAge'+id).val() == "0"){
			$('#refund_toAge'+id).val('');
			$('#refund_toYear'+id).prop("disabled", false);
		}
		
		if($('#refund_fromAge'+id).val() != "" && $('#refund_toAge'+id).val() != ""){
			var ageFrom = Number($('#refund_fromAge'+id).val());
			var agerTo = Number($('#refund_toAge'+id).val());
			if(ageFrom > agerTo){
				$('#refund_toAge'+id).val("");
				message = "อายุที่สิ้นสุดจะต้องมีค่ามากกว่าอายุเริ่มต้นเสมอ กรุณาระบุใหม่";
				alertError(message);
			}
		}
		
	}else{
		$('#refund_toYear'+id).prop("disabled", false);
		
	}
	
	
}
function choose_from_year_pension(val){
	/*pension*/
	
	if($('#pension_fromYear'+val).val() != ""){
		$('#pension_fromAge'+val).prop("disabled", true);
		if($('#pension_fromYear'+val).val() == '0'){
			$('#pension_fromYear'+val).val('');
			$('#pension_fromAge'+val).prop("disabled", false);
		}
		if($('#pension_fromYear'+val).val() != "" && $('#pension_toYear'+val).val() != ""){
			var yearFrom = Number($('#pension_fromYear'+val).val());
			var yearTo = Number($('#pension_toYear'+val).val());
			if(yearFrom > yearTo){
				$('#pension_fromYear'+val).val('');
				message = "ปีที่สิ้นสุดจะต้องมีค่ามากกว่าปีเริ่มต้นเสมอ กรุณาระบุใหม่";
				alertError(message);
			}
		}
	}else{
		$('#pension_fromAge'+val).prop("disabled", false);
	}
	if($('#pension_fromAge'+val).val() != ""){
		$('#pension_fromYear'+val).prop("disabled", true);
		if($('#pension_fromAge'+val).val() == "0"){
			$('#pension_fromAge'+val).val("");
			$('#pension_fromYear'+val).prop("disabled", false);
		}
		
		if($('#pension_fromAge'+val).val() != "" && $('#pension_toAge'+val).val() != ""){
			var ageFrom = Number($('#pension_fromAge'+val).val());
			var ageTo = Number($('#pension_toAge'+val).val());
			if(ageFrom > ageTo){
				$('#pension_fromAge'+val).val('');
				message = "อายุที่สิ้นสุดจะต้องมีค่ามากกว่าอายุเริ่มต้นเสมอ กรุณาระบุใหม่";
				alertError(message);
			}
		}
		
	}else {
		$('#pension_fromYear'+val).prop("disabled", false);
	}
	if($('#pension_toYear'+val).val() != ""){
		$('#pension_toAge'+val).prop("disabled", true);
		if($('#pension_toYear'+val).val() == "0"){
			$('#pension_toYear'+val).val("");
			$('#pension_toAge'+val).prop("disabled", false);
		}
		
		if($('#pension_fromYear'+val).val() != "" && $('#pension_toYear'+val).val() != ""){
			var yearFrom = Number($('#pension_fromYear'+val).val());
			var yearTo = Number($('#pension_toYear'+val).val());
			if(yearFrom > yearTo){
				$('#pension_toYear'+val).val('');
				message = "ปีที่สิ้นสุดจะต้องมีค่ามากกว่าปีเริ่มต้นเสมอ กรุณาระบุใหม่";
				alertError(message);
			}
		}
		
	}else{
		$('#pension_toAge'+val).prop("disabled", false);

	}
	
	if($('#pension_toAge'+val).val() != ""){
		$('#pension_toYear'+val).prop("disabled", true);
		if($('#pension_toAge'+val).val() == "0"){
			$('#pension_toAge'+val).val("");
			$('#pension_toYear'+val).prop("disabled", false);
		}
		
		if($('#pension_fromAge'+val).val() != "" && $('#pension_toAge'+val).val() != ""){
			var ageFrom = Number($('#pension_fromAge'+val).val());
			var ageTo = Number($('#pension_toAge'+val).val());
			if(ageFrom > ageTo){
				$('#pension_toAge'+val).val('');
				message = "อายุที่สิ้นสุดจะต้องมีค่ามากกว่าอายุเริ่มต้นเสมอ กรุณาระบุใหม่";
				alertError(message);
			}
		}
		
	}else{
		$('#pension_toYear'+val).prop("disabled", false);
		
	}
	
	
}

function choose_from_year_med(val){
		/*Med*/
	
	if($('#medical_fromYear'+val).val() != ""){
		$('#medical_fromAge'+val).prop("disabled", true);
		if($('#medical_fromYear'+val).val() == "0"){
			$('#medical_fromYear'+val).val("");
			$('#medical_fromAge'+val).prop("disabled", false);
		}
		
		if($('#medical_fromYear'+val).val() != "" && $('#medical_toYear'+val).val() != ""){
			var yearFrom = Number($('#medical_fromYear'+val).val());
			var yearTo = Number($('#medical_toYear'+val).val());
			if(yearFrom > yearTo){
				$('#medical_fromYear'+val).val('');
				message = "ปีที่สิ้นสุดจะต้องมีค่ามากกว่าปีเริ่มต้นเสมอ กรุณาระบุใหม่";
				alertError(message);
			}
		}
		
	}else{
		$('#medical_fromAge'+val).prop("disabled", false);
	}
	if($('#medical_fromAge'+val).val() != ""){
		$('#medical_fromYear'+val).prop("disabled", true);
		if($('#medical_fromAge'+val).val() == "0"){
			$('#medical_fromAge'+val).val("");
			$('#medical_fromYear'+val).prop("disabled", false);
		}
	
		if($('#medical_fromAge'+val).val() != "" && $('#medical_toAge'+val).val() != ""){
			var yearFrom = Number($('#medical_fromAge'+val).val());
			var yearTo = Number($('#medical_toAge'+val).val());
			if(yearFrom > yearTo){
				$('#medical_fromAge'+val).val('');
				message = "ปีที่สิ้นสุดจะต้องมีค่ามากกว่าปีเริ่มต้นเสมอ กรุณาระบุใหม่";
				alertError(message);
			}
		}
		
	}else{
		$('#medical_fromYear'+val).prop("disabled", false);
	}
		
	if($('#medical_toYear'+val).val() != ""){
		$('#medical_toAge'+val).prop("disabled", true);
		if($('#medical_toYear'+val).val() == "0"){
			$('#medical_toYear'+val).val("");
			$('#medical_toAge'+val).prop("disabled", false);
		}
		

		if($('#medical_fromYear'+val).val() != "" && $('#medical_toYear'+val).val() != ""){
			var yearFrom = Number($('#medical_fromYear'+val).val());
			var yearTo = Number($('#medical_toYear'+val).val());
			if(yearFrom > yearTo){
				$('#medical_toYear'+val).val('');
				message = "ปีที่สิ้นสุดจะต้องมีค่ามากกว่าปีเริ่มต้นเสมอ กรุณาระบุใหม่";
				alertError(message);
			}
		}
		
	}else {
		$('#medical_toAge'+val).prop("disabled", false);
	}
		
	if($('#medical_toAge'+val).val() != ""){
		$('#medical_toYear'+val).prop("disabled", true);
		if($('#medical_toAge'+val).val() == "0"){
			$('#medical_toAge'+val).val("");
			$('#medical_toYear'+val).prop("disabled", false);
		}
		
		if($('#medical_fromAge'+val).val() != "" && $('#medical_toAge'+val).val() != ""){
			var yearFrom = Number($('#medical_fromAge'+val).val());
			var yearTo = Number($('#medical_toAge'+val).val());
			if(yearFrom > yearTo){
				$('#medical_toAge'+val).val('');
				message = "ปีที่สิ้นสุดจะต้องมีค่ามากกว่าปีเริ่มต้นเสมอ กรุณาระบุใหม่";
				alertError(message);
			}
		}
		
	}else{
		$('#medical_toYear'+val).prop("disabled", false);
	}
	
}


// show dialog แสดงค่าที่ถูกเลือกไว้อยู่แล้ว
function showModal_DeathExceptionOL(){
	var arr_key = [];
	$("#tbl_DeathExceptionOL tbody>tr").each(function(){
		
		var key = $(this).find('td:nth-child(1)').data('key');
		
		arr_key.push(key);
	});
	/*รีค่าส่วนที่ไม่ได้เลือกออก*/
	$("#tbl_DeathExceptionOL_modal tbody>tr").each(function(){
			$(this).find('td:nth-child(1) input').prop("checked", false);
	});
	/*กลับมาเช็คค่าส่วนที่เลือกใหม่*/
	$("#tbl_DeathExceptionOL_modal tbody>tr").each(function(){
		for(a in arr_key){
			if(arr_key[a] == $(this).find('td:nth-child(1) input').val()){
				$(this).find('td:nth-child(1) input').prop("checked", true);
			}
		}
	});
	
}
/*1. Basic Information*/
function dataSave_BasicInformation_OL(){

	/*ตาราง รหัสความคุ้มครองสัญญาเพิ่มเติม*/
	var key_coverageExtra = [];
	$("#tbl_rider_bundle_OL input:checkbox").each(function(){
		obj = {};
		obj["value"] = $(this).val();
		key_coverageExtra.push(obj);
	})
	
	/*gender*/
	var male = $("#ch_male_ol").prop("checked");
	var female = $("#ch_female_ol").prop("checked");
	var gender = "";
	if(male == true && female == false){
		gender = "MALE";
	}else if(male == false && female == true){
		gender = "FEMALE";
	}else{
		gender = "EITHER";
	}
	
	/*mode*/
	var mode_data = [];
	$("#tbl_BI_Mode_OL input:checkbox:checked").each(function(){
		obj = {};
		obj["value"] = $(this).val();
		mode_data.push(obj);
	});
	
	/*filing_Channel*/
	var filing_data = [];
	$("#tbl_BI_FilingCN_OL input:checkbox:checked").each(function(){
		obj = {};
		obj["value"] = $(this).val();
		filing_data.push(obj);
	});
	
	/*สูตรการคำนวณอายุ*/
	var calAge_data = [];
	$("#tbl_BI_AgeCal_OL input:checkbox:checked").each(function(){
		obj = {};
		obj["value"] = $(this).val();
		calAge_data.push(obj);
	});
	
	/*ระยะประกันของสัญญาประกันชีวิต*/
	var term_contract_data = [];
	if($("#rd_anniversary_ol").prop("checked") == true){
		obj = {};
		obj["radio"] = $("#rd_anniversary_ol").val();
		obj["value"] = [];
		
		obj_value = {};		
		obj_value["min_age"] = "";
		obj_value["max_age"] = $("#text_anniversary_ol").val();
		obj_value["unit_age"] = $("#dmy_1_ol option:selected").val();
		obj["value"].push(obj_value);
		term_contract_data.push(obj);
	}else{
		obj = {};
		obj["radio"] = $("#rd_Time_length_ol").val();
		obj["value"] = [];
		$("#tb_BasicInformation1_OL tbody>tr").each(function(){
			obj_value = {};	
			obj_value["min_age"] = $(this).find("td:nth-child(2) input").val();
			obj_value["max_age"] = $(this).find("td:nth-child(4) input").val();
			obj_value["unit_age"] = $(this).find("td:nth-child(3) option:selected").val();
			obj["value"].push(obj_value);
		});
		term_contract_data.push(obj);
	}
	
	/*ระยะชำระเบี้ยของสัญญาประกันชีวิต*/
	var payment_contract_data = [];
	var ch_sperately_pay = false;
	if($("#ch_sperately_pay_ch_ol").prop("checked") == true){
		ch_sperately_pay = true;
	}else{
		ch_sperately_pay = false;
	}
	if($("#rd_insurance_premium_ol").prop("checked") == true){
		obj = {};
		obj["radio"] = $("#rd_insurance_premium_ol").val();
		obj["age"] = $("#text_insurance_premium_ol").val();
		obj["unit_age"] = $("#dmy_3_ol option:selected").val();		
		obj["separate_pay"] = "";
	}else{
		obj = {};
		obj["radio"] = $("#rd_Time_insurance_premium_ol").val();
		obj["age"] = $("#text_Time_insurance_premium_ol").val();
		obj["unit_age"] = $("#dmy_4_ol option:selected").val();
		
		var num_chk = $("#tb_Sperately_Pay_ol input:checkbox:checked").length;
		if(num_chk > 0){
			obj["separate_pay"] = [];
			
			$("#tb_Sperately_Pay_ol tbody>tr").each(function(){
				if($(this).find("input:checkbox").prop("checked") == true){
					var rate = $(this).find("td:nth-child(3) input").val();
					obj_value = {};	
					obj_value["period"] = $(this).find("td:nth-child(2) label").text();
					obj_value["rate"] = Math.round10(rate/100, -4);
					obj["separate_pay"].push(obj_value);
				}		
			});
		}else{
			obj["separate_pay"] = "";
		}
	}
	payment_contract_data.push(obj);
	
	/*รายการตารางที่ใช้ในการคำนวณเบี้ย*/
	var prem_assump_rate = [];
	$("#tb_allCalPM_OL tbody>tr").each(function(i){
		if($(this).find('td:nth-child(2) input[type="checkbox"]').val() == "EITHER" && $(this).find('td:nth-child(2) input[type="checkbox"]').is(':checked')){
			obj = {};
			obj["prem_assump_type"] = $(this).data('value');
			obj["gender"] = $(this).find('td:nth-child(2) input').val();
			obj["prem_assum_rate_id"] = $(this).find('td:nth-child(4) input[type="hidden"]').val();
			prem_assump_rate.push(obj)
		}
		if($(this).find('td:nth-child(1) input[type="checkbox"]').val() != "EITHER" && $(this).find('td:nth-child(1) input[type="checkbox"]').is(':checked')){
			obj = {};
			obj["prem_assump_type"] = $(this).data('value');
			obj["gender"] = $(this).find('td:nth-child(1) input').val();
			obj["prem_assum_rate_id"] = $(this).find('td:nth-child(3) input[type="hidden"]').val();
			prem_assump_rate.push(obj)
		}
	})
	
	/*ลดหย่อนภาษี*/
	var TaxReduce_data = [];
	$("#tb_TaxReduce_OL tbody>tr").each(function(){
		if($(this).find("td:nth-child(3) input:text").val() != ""){
			var ID = $(this).attr("id");
				ID = ID.replace("tbody_TaxReduce_OL_","");
			obj = {}			
			obj["rate_cat_id"] = $(this).find("td:nth-child(3) input[name='tax_type_OL[]']").val();
			obj["text"] = $(this).find("td:nth-child(2) input").val();
			obj["rate_layout_id"] = $(this).find("#hdd_layoutID_OL"+ID).val();
			obj["file_id"] = $(this).find("#hdd_fileID_OL"+ID).val();
			TaxReduce_data.push(obj);
		}		
	});
	
	
	var json_data_BasicInfo = {
	        	"method": "Tab_Basic_Information",
	            "passInsurance": $("#pass_Insurance_coverage_ol").val(),
	            "is_bundle": $("#chk_bundleBaseplan_OL1").is(':checked'),
	            "key_coverageExtra" : JSON.stringify(key_coverageExtra),
	            "name_th": $("#thai_Name_ol").val(),
	            "name_en": $("#eng_Name_ol").val(),
	            "sale_eff_date": $("#appStart_date_ol").val(),
	            "sale_exp_date": $("#appTo_date_ol").val(),
	            "min_age": $("#age_Start_ol").val(),
	            "max_age": $("#age_To_ol").val(),
	            "max_insure_age": $("#maximum_Protection_To_ol").val(),
	            "gender": gender,
	            "ch_separate_pay" : ch_sperately_pay,	
	            "mode": JSON.stringify(mode_data),	
	            "filing_Channel" : JSON.stringify(filing_data),
	            "cal_Age" : JSON.stringify(calAge_data),
	            "insurance_premium" : $("#sl_insurance_premium_ol option:selected").val(), /*เบี้ยประกัน*/
	            "protect_Type" : $("#sl_coverage_type_ol option:selected").val(), /*ประเภทความคุ้มครอง*/
	            "contract_Type" : $("#sl_contract_type_ol option:selected").val(), /*ประเภทสัญญา*/
	            "term_contract" : JSON.stringify(term_contract_data),
	            "payment_contract" : JSON.stringify(payment_contract_data),	
	            //"mortality_Tli" : JSON.stringify(mortality_data),
	            //"tpd_Tli" : JSON.stringify(tpd_data),
	            "prem_assump_rate" : JSON.stringify(prem_assump_rate),
	            "table_TaxReduce" : JSON.stringify(TaxReduce_data),
	            "prem_Rate" : Math.round10($("#text_Calculate_premiums_1ol").val()/100, -4),
	            "sum_decr_rate" : Math.round10($("#text_Calculate_premiums_2ol").val()/100, -4),
	        	"note" : $("#Basic_remark_OL").val()
	}
	
	$("#code_Coverage_OL").val($("#pass_Insurance_coverage_ol").val());
	$("#approve_nameTH_OL").val($("#thai_Name_ol").val());
	$("#approve_nameEN_OL").val($("#eng_Name_ol").val());
	
	$.ajax({
	url: 'BasePlanOL_SaveData_Servlet',
	type: "POST",
	data: json_data_BasicInfo,
	success: function (response) {
		var cov_status_PD = $("#cov_status").val();
   	 	var cov_status_RP = $("#cov_status_RP").val();
   	 	
		if (response == "success"){
			
			 //enable tab
	   		 $("#menu_OL_7").removeClass("disabledAll");
	   		 $("#menu_OL_2").removeClass("disabledAll");
	   		 $("#menu_OL_3").removeClass("disabledAll");
	   		 $("#menu_OL_4").removeClass("disabledAll");
	   		 $("#menu_OL_5").removeClass("disabledAll");
	   		 $("#menu_OL_6").removeClass("disabledAll");
   		 
	   		if((cov_status_PD == "NEW" && cov_status_RP == "NEW") || (cov_status_PD == "" && cov_status_RP == "")){
	   			console.log("save OL>> " +response);
	   			
		   		var flag = $("#flag_email_send_OL").val();
				console.log("flag>> "+flag)
				if(flag != "T"){
					/***  CODE FOR PREPARE AND SEND MAIL  ****/
					//debugger;
					
						var prepareEmail_data = [];
						objEmail = {};
						objEmail["requestApprove"] 		="สร้างใหม่";
						objEmail["manuName"] 			="ความคุ้มครองสัญญาหลัก";
						objEmail["empNameHide"] 		=$("#empNameHide").val();
						objEmail["empID"] 				=$("#empID").val();
						objEmail["departmentID"] 		=$("#departmentID").val();
						objEmail["departmentHide"] 		=$("#departmentHide").val();
						
						objEmail["cov_code"] 			=$("#pass_Insurance_coverage_ol").val();
						objEmail["name_TH"] 			=$("#thai_Name_ol").val();
						objEmail["name_EN"] 			=$("#eng_Name_ol").val();
						
						prepareEmail_data.push(objEmail);
						
						var data_json2 = {
					        	"method": "send_Email",
					        	"OptionEmail": "1",
					        	"prepareEmail_data": JSON.stringify(prepareEmail_data),
					            
						}
						$.ajax({
							 type: "POST",
							 url: "UW_Email_Servlet", 
							 data: data_json2,
							 success: function(response){
								console.log(response);
								$("#flag_email_send_OL").val("T");
							 }
						 });
						console.log("dataEmail",data_json2)
					/***  END CODE FOR PREPARE AND SEND MAIL  ****/
				}
	   			
	   		}
		  }			
		}
	});
	console.log("data:",json_data_BasicInfo);
}

/*2.Policy Wording*/
function dataSave_PolicyWording_OL(){
	
	/*ตาราง Policy Wording*/
	var arr_policy_data = [];
	$("#Policy_Table_OL tbody>tr").each(function(){
		
		if( $(this).find('td:nth-child(4) input[type="hidden"]').val() != "" || $(this).find('td:nth-child(6) input[type="hidden"]').val() != ""){
			obj = {};
			obj["doc_type_id"] = $(this).data('id');
			
			//pdf
			if( $(this).find('td:nth-child(4) input[type="hidden"]').val() != ""){
				obj["pdf_file_id"] = $(this).find('td:nth-child(4) input[type="hidden"]').val();
			}else{
				obj["pdf_file_id"] = "";
			}
			//doc
			if( $(this).find('td:nth-child(6) input[type="hidden"]').val() != ""){
				obj["doc_file_id"] = $(this).find('td:nth-child(6) input[type="hidden"]').val();
			}else{
				obj["doc_file_id"] = "";
			}
			
			arr_policy_data.push(obj)
		}
			
	});
	
	var data_save = {
			"method" 			: "Tab_Policy_Wording",
			"passInsurance"		: $("#pass_Insurance_coverage_ol").val(),
			"policyWording"		: JSON.stringify(arr_policy_data)
			
	}
	$.ajax({
		url: 'BasePlanOL_SaveData_Servlet',
		type: "POST",
		data: data_save,
	     success: function (response) {
	    	
	    }
	});
	console.log("save_policy:",data_save);
}

function dataSave_privilege_insurance_OL(){
	if($('#chk_Policy_Loan_ol').prop('checked') == true){
		chk_policy_loan = true;
	}else{
		chk_policy_loan = false;
	}
	
	if($('#ch_APL_Auto_ol').prop('checked') == true){
		chk_apl_auto = true;
	}else{
		chk_apl_auto = false;
	}
	
	if($('#ch_CVClaim_ol').prop('checked') == true){
		ch_CVClaim = true;
	}else{
		ch_CVClaim = false;
	}
	
	if($('#ch_expropriate_insurance_OL').prop('checked') == true){
		CASH_SURR_val = true;
	}else{
		CASH_SURR_val = false;
	}

	if($('#ch_ETI_ol').prop('checked') == true){
		ETI_val = true;
	}else{
		ETI_val = false;
	}

	if($('#ch_AutoETI_ol').prop('checked') == true){
		AUTOETI_val = true;
	}else{
		AUTOETI_val = false;
	}
	
	if($('#ch_PhaseETI_ol').prop('checked') == true){
		ETI_TO_val = true;
	}else{
		ETI_TO_val = false;
	}
	
	if($('#ch_RPU_ol').prop('checked') == true){
		RPU_val = true;
	}else{
		RPU_val = false;
	}
	
	if($('#ch_RPUClose_ol').prop('checked') == true){
		is_debt_deduct_PRU_val = true;
	}else{
		is_debt_deduct_PRU_val = false;
	}
	
	if($('#ch_AutoRPU_ol').prop('checked') == true){
		AutoRPU_val = true;
	}else{
		AutoRPU_val = false;
	}
	
	if($('#ch_AutoRPUClose_ol').prop('checked') == true){
		is_debt_deduct_AUTO_PRU_val = true;
	}else{
		is_debt_deduct_AUTO_PRU_val = false;
	}
	
	
	if($("#rd_AutoRPU_OL1").prop("checked") == true){
		value = $("#rd_AutoRPU_OL1").val();
	}else if($("#rd_AutoRPU_OL2").prop("checked") == true){
		value = $("#rd_AutoRPU_OL2").val();
	}
	
	if($('#ch_PhaseRPU_ol').prop('checked') == true){
		PRU_TO_val = true;
	}else{
		PRU_TO_val = false;
	}
	
	var json_data_privilege_insurance = {
			"method" 			: "Tab_rights_insurance",
			"passInsurance"		: $("#pass_Insurance_coverage_ol").val(),
			"POLICY_LOAN" 		: chk_policy_loan,	
			"txb_Policy_Loan" 	: Math.round10($("#txb_Policy_Loan_ol").val()/100, -4),
			"APL_AUTO"			: chk_apl_auto,
			"txb_APL_AUTO"		: Math.round10($("#apl_Auto_ol").val()/100, -4),
			"CV_Claim"			: ch_CVClaim,
			"CASH_SURR" 		: CASH_SURR_val,
			"formula_id_CASH_SURR"	: $("#sel_Surrender_ol option:selected").val(),
			"ETI"				: ETI_val,
			"formula_id_ETI"	: $('#sel_ETI_ol option:selected').val(),
			"AUTO_ETI"			: AUTOETI_val,
			"formula_id_AUTO_ETI" : $('#sel_AutoETI_ol option:selected').val(),
			"ETI_TO"			: ETI_TO_val,
			"period_calc_meth_ETI"	: $('#sel_PhaseETI_ol option:selected').val(),
			"benefit_period_ETI"	: $('#eti_year_ol').val(),
			"period_unit_ETI"		: $('#dmy_2_1_ol option:selected').val(),
			"RPU"				: RPU_val,
			"formula_id_RPU"	: $('#sel_RPU_ol option:selected').val(),
			"is_debt_deduct_PRU"	: is_debt_deduct_PRU_val,
			"AUTO_RPU"			: AutoRPU_val,
			"formula_id_AUTO_RPU"	: $('#sel_AutoRPU_ol option:selected').val(),
			"is_debt_deduct_AUTO_PRU"	: is_debt_deduct_AUTO_PRU_val,
			"rpu_sa_type"		: value,
			"PRU_TO"			: PRU_TO_val,
			"period_calc_meth_RPU" : $('#sel_PhaseRPU_ol option:selected').val(),
			"benefit_period_RPU"	: $('#rpu_year_ol').val(),
			"period_unit_RPU"		: $('#dmy_2_2_ol option:selected').val(),
			
			
			
			
	}
	$.ajax({
		url: 'BasePlanOL_SaveData_Servlet',
		type: "POST",
		data: json_data_privilege_insurance,
	     success: function (response) {

	    }
	});
	console.log("json_data_privilege_insurance: ",json_data_privilege_insurance);
}


function dataSave_cal_premium_OL(){

	/*age band*/
	var age_band = [];
	$("#tb_Age_Band_OL input:checkbox:checked").each(function(){
		obj = {};
		obj["value"] = $(this).val();
		age_band.push(obj);
	});
	
	/*เบี้ยมาตรฐาน*/
	/*คำนวณเบี้ยจากทุนประกัน*/
	var sl_insurance_premium = [];	
	var tb_insurance_premium = [];
	
	if($("#ch_standard_premium_ol").prop("checked") == true){
		if($("#sl_menu3_insurance_premium_ol option:selected").text() != "None"){
			if($("#rd_cal_insurance_ol").prop("checked") == true){
				obj = {};
				obj["pass"] = 1;
				obj["text"] = $("#sl_menu3_insurance_premium_ol option:selected").text();
				sl_insurance_premium.push(obj);	
			
				$("#tb_PM_Rate1_OL tbody>tr").each(function(){
					obj = {};
					var level = $(this).data("level");
					var id = $(this).attr("id");
						id = id.replace("tbody_PM_Rate_OL","");
					
					if(level == 1){		
						obj["rate_cat_id"] = $(this).find('td:nth-child(3) #rm_rateCat_OL'+id).val();
						obj["rate_type"] = $(this).find("td:nth-child(2) select>option:selected").val();			
						obj["age_band_code"] = "";
					}else{
						var group = $(this).attr("data-group");
						obj["rate_cat_id"] = $(this).find('td:nth-child(3) #rm_rateCat_OL'+id).val();//$("#rateCat_tbStardard_age_OL").val();
						obj["rate_type"] = $("#tbody_PM_Rate_OL"+group).find("td:nth-child(2) select>option:selected").val();
						//obj["rate_type"] = $(this).find("td:nth-child(1) input:hidden").val();
						obj["age_band_code"] = $(this).find("td:nth-child(2) label").text();
					}
					
					obj["rate_layout_id"] = $("#rm_rateLayout_OL"+id).val();
					obj["file_id"] = $("#rm_fileID_OL"+id).val();
					obj["file"] = $(this).find("td:nth-child(3) input:text").val();
					tb_insurance_premium.push(obj);
				});
			/*คำนวณทุนจากเบี้ยประกัน*/	
			}else if($("#rd_cal_capital_ol").prop("checked") == true){	
				obj = {};
				obj["pass"] = 1;
				obj["text"] = $("#sl_menu3_insurance_premium_ol option:selected").text();
				sl_insurance_premium.push(obj);	
					
				$("#tb_PM_Rate1_OL tbody>tr").each(function(){
					obj = {};
					var level = $(this).data("level");
					var id = $(this).attr("id");
						id = id.replace("tbody_PM_Rate_OL","");
					
					if(level == 1){		
						obj["rate_cat_id"] =$(this).find('td:nth-child(3) #rm_rateCat_OL'+id).val();
						obj["rate_type"] = $(this).find("td:nth-child(2) select>option:selected").val();			
						obj["age_band_code"] = "";
					}else{
						var group = $(this).attr("data-group");
						obj["rate_cat_id"] = $(this).find('td:nth-child(3) #rm_rateCat_OL'+id).val();
						obj["rate_type"] = $("#tbody_PM_Rate_OL"+group).find("td:nth-child(2) select>option:selected").val();
						//obj["rate_type"] = $(this).find("td:nth-child(1) input:hidden").val();
						obj["age_band_code"] = $(this).find("td:nth-child(2) label").text();
					}
					
					obj["rate_layout_id"] = $("#rm_rateLayout_OL"+id).val();
					obj["file_id"] = $("#rm_fileID_OL"+id).val();
					obj["file"] = $(this).find("td:nth-child(3) input:text").val();
					tb_insurance_premium.push(obj);
				});
			}
		}
	}
	
	/*ส่วนลดเบี้ยประกัน*/
	var sl_prem_dis = [];	
	if($("#ch_importInsurance_ol").prop("checked") == true){		
		obj = {};
		obj["is_prem_dis"] = true;
		obj["min_prem_dis_rate"] = Math.round10($("#discountInsurancePremiumsSta_ol").val()/100, -4);
		obj["max_prem_dis_rate"] = Math.round10($("#discountInsurancePremiumsTo_ol").val()/100, -4);				
	}else{
		obj = {};
		obj["is_prem_dis"] = false;
		obj["min_prem_dis_rate"] = "0";
		obj["max_prem_dis_rate"] = "0";			
	}
	sl_prem_dis.push(obj);	
	
	/*เบี้ยเพิ่มพิเศษ*/
	var sl_extra_premium = [];	
	obj = {};
	obj["pass"] = 1;
	obj["text"] = $("#sl_insurance_premium_Extra_ol option:selected").text();
	if($("#sl_insurance_premium_Extra_ol option:selected").text() != "None"){
		sl_extra_premium.push(obj);	
	}
	
	var tb_extra_premium = [];
	var num_extra = $("#tb_Extra_Rate_OL tbody>tr td:nth-child(2) input:text").val();
	if(num_extra != ""){
	$("#tb_Extra_Rate_OL tbody>tr").each(function(){
		var id = $(this).attr("id");
			id = id.replace("tbody_Extra_Rate_OL","");
			
		obj = {};
		obj["rate_type"] = $(this).find("td:nth-child(1) label").text();
		obj["age_band_code"] = "";
		
		obj["rate_cat_id"] = $("#ext_rateCat_OL"+id).val();
		
		if($("#ext_rateLayout_OL"+id).val() == null){
			obj["rate_layout_id"] = 0;
		}else{
			obj["rate_layout_id"] = $("#ext_rateLayout_OL"+id).val();
		}
		
		if($("#ext_fileID_OL"+id).val() == null){
			obj["file_id"] = 0;
		}else{
			obj["file_id"] = $("#ext_fileID_OL"+id).val();
		}
		
		obj["file"] = $(this).find("td:nth-child(2) input:text").val();
		tb_extra_premium.push(obj);
	});
	}
	
	/*EM File*/
	var tb_em  = [];
	if($("#input_fileCal_1_OL").val() != ""){
		obj = {};
		obj["rate_type"] = "";
		obj["age_band_code"] = "";
		
		obj["rate_cat_id"] = $("#rateCat_inputEM_OL").val();
		obj["rate_layout_id"] = $("#em_rateLayout1_OL").val();
		obj["file_id"] = $("#em_fileID1_OL").val();
		obj["file"] = $("#input_fileCal_1_OL").val();
		tb_em.push(obj);
	}
	
	/*ทุนคุ้มครองที่ลดลง*/
	var sl_capital_decrease = [];	
	obj = {};
	obj["pass"] = 1;
	obj["text"] = $("#sl_Reduced_capital_Cal2_OL option:selected").text();
	if($("#sl_Reduced_capital_Cal2_OL option:selected").text() != "None"){
		sl_capital_decrease.push(obj);
	}
	
	var tb_capital_decrease  = [];
	if($("#input_fileCal_2_OL").val() != ""){
		obj = {};
		obj["rate_type"] = "";
		obj["age_band_code"] = "";
		
		obj["rate_cat_id"] = $("#rateCat_inputSA_OL").val();
		
		if($("#input_fileCal_2_OL").val()){
			obj["file_id"] = $("#decrease_fileID2_OL").val();
			obj["rate_layout_id"] = $("#decrease_rateLayout2_OL").val();
		}else{
			obj["file_id"] = "";
			obj["rate_layout_id"] = "";
		}
		obj["file"] = $("#input_fileCal_2_OL").val();
		tb_capital_decrease.push(obj);
	}
	
	/*checkbox*/
	var chk_extra = $("#ch_insurance_premium_Extra_ol").prop("checked");
	var chk_extra_value = false;
	if(chk_extra == true){
		chk_extra_value = true;
	}else{
		chk_extra_value = false;
	}
	
	var chk_sa = $("#ch_Reduced_capital_ol").prop("checked");
	var chk_sa_value = false;
	if(chk_sa == true){
		chk_sa_value = true;
	}else{
		chk_sa_value = false;
	}
	
	/*ความเสี่ยงมาตรฐาน*/
	var num_tb_risk = 0;
	$("#tb_RateValue1_OL tbody>tr input[type='text']").each(function(){
		if($(this).val() != ""){
			num_tb_risk++;
		}
	});
	
	var tb_risk  = false;
	if(num_tb_risk <= 0){
		tb_risk = true;
	}else{
		tb_risk = false;
	}
	
	/*****OL*****/
	var rd_cal_insurance_ol = $("#rd_cal_insurance_ol").prop("checked");
	var ch_calInsurance_ol = $("#ch_calInsurance_ol").prop("checked");
	var rd_cal_capital_ol = $("#rd_cal_capital_ol").prop("checked");
	
	/*SET prem_calc_meth*/
	var prem_calc_meth = "";
	if(rd_cal_insurance_ol == true && ch_calInsurance_ol == false && rd_cal_capital_ol == false){
		prem_calc_meth = "PREM_ONLY";
	}else if(rd_cal_insurance_ol == true && ch_calInsurance_ol == true && rd_cal_capital_ol == false){
		prem_calc_meth = "EITHER";
	}else if(rd_cal_insurance_ol == false && ch_calInsurance_ol == false && rd_cal_capital_ol == true){
		prem_calc_meth = "SA_ONLY";
	}
		
	/*ตารางส่วนลดตามทุนประกัน*/
	var tb_DisSA  = [];
	if($("#input_fileCal_3_OL").val() != ""){
		obj = {};
		obj["rate_type"] = "";
		obj["age_band_code"] = "";
		
		obj["rate_cat_id"] = $("#rateCat_inputDisSA_OL").val();
		obj["rate_layout_id"] = $("#dsc_rateLayout3_OL").val();
		obj["file_id"] = $("#dsc_fileID3_OL").val();
		obj["file"] = $("#input_fileCal_3_OL").val();
		tb_DisSA.push(obj);
	}
	
	/* ค่าใช้จ่ายคงที่ของกลุ่มบำนาญ*/
	var per_policy_prem = $("#expenses_pension_ol").val();
		per_policy_prem = per_policy_prem.replace(/,/g, "");
	
	var json_data_cal_premium = {
        	"method": "Tab_cal_insurance_premiums",
        	"passInsurance": $("#pass_Insurance_coverage_ol").val(),
            "age_Band": JSON.stringify(age_band),
            "prem_calc_meth": prem_calc_meth,
            "select_insurance_premium" : JSON.stringify(sl_insurance_premium),
            "table_insurance_premium" : JSON.stringify(tb_insurance_premium),
            "prem_dis" : JSON.stringify(sl_prem_dis),
            "is_substd" : chk_extra_value,
            "select_extra_Rate" : JSON.stringify(sl_extra_premium),
            "table_extra_Rate" : JSON.stringify(tb_extra_premium),
            "min_EM": Math.round10($("#min_EM_ol").val()/100, -4),
            "max_EM": Math.round10($("#max_EM_ol").val()/100, -4),
            "EM_file" : JSON.stringify(tb_em),
            "is_sa_decr" : chk_sa_value,
            "select_capital_decrease" : JSON.stringify(sl_capital_decrease),
            "table_capital_decrease" : JSON.stringify(tb_capital_decrease),
            "is_standard_risk" : tb_risk,
            "table_dis_sa" : JSON.stringify(tb_DisSA),
            "per_policy_prem" : per_policy_prem,
	}
	
	$.ajax({
		url: 'BasePlanOL_SaveData_Servlet',
		type: "POST",
		data: json_data_cal_premium,
	     success: function (response) {	
	    }
	});
	console.log("cal_premium: ",json_data_cal_premium);

}

function dataSave_tableValueInsurance_OL(){
	
	/* ตารางความเสี่ยงมาตรฐาน */
	var form1_cb_tb_Policy_pass = $("#dbBox1_OL option:selected").val();
	var form1_cb_tb_Policy_text = $("#dbBox1_OL option:selected").text();

	var standard_risk = [];
		obj_main = {};
		obj_main["pass"] = form1_cb_tb_Policy_pass;
		obj_main["text"] = form1_cb_tb_Policy_text;
		
		var form1_list_data = [];
		$("#tb_RateValue1_OL tbody>tr").each(function(){
			var file_value = $(this).find("td:nth-child(2) input:text").val();
			if(file_value != ""){
				var level = $(this).data("level");
				var id = $(this).attr("id");
					id = id.replace("tbody_Rate_Value_OL","");
				
				obj = {};
				if(level == 1){		
					obj["rate_type"] = $(this).find('td:nth-child(1)').text();			
					obj["age_band_code"] = "";
					obj["rate_cat_id"] = $(this).find("td:nth-child(2) #cv_rateCat_OL"+id).val();
					//obj["rate_cat_id"] = $("#cv_rate_Agespecific_OL").val();
				}else{
					var data_group = $(this).data("group");
					var rate_type = $("#tbody_Rate_Value_OL"+data_group).find("td:nth-child(1) label").text();
					
					obj["rate_type"] = rate_type;
					obj["age_band_code"] = $(this).find("td:nth-child(1) label").text();
					obj["rate_cat_id"] =  $(this).find("td:nth-child(2) #cv_rateCat_OL"+id).val();
					//obj["rate_cat_id"] =  $("#cv_rate_AgeBand_OL").val();
				}

				//obj["rate_cat_id"] = $("#cv_rateCat"+id).val();
				obj["rate_layout_id"] = $("#cv_rateLayout_OL"+id).val();
				obj["file_id"] = $("#cv_fileID_OL"+id).val();
				obj["file"] = $(this).find('td:nth-child(2) input[type="text"]').val();
				form1_list_data.push(obj);
			}
		});
		obj_main["layout"] = form1_list_data;
		standard_risk.push(obj_main);
	
	/* ตารางความต่ำกว่าเสี่ยงมาตรฐาน */
	var form2_cb_tb_Policy_pass = $("#dbBox2_OL option:selected").val();
	var form2_cb_tb_Policy_text = $("#dbBox2_OL option:selected").text();
	//var form2_tb_input_CV_cv = $("#input_file_2_CL").val();
	var tb_cvLow  = [];
	obj = {};
	obj["rate_type"] = "";
	obj["age_band_code"] = "";
	
	obj["rate_cat_id"] = $("#cvLow_rateCat2_OL").val();
	obj["rate_layout_id"] = $("#cvLow_rateLayout2_OL").val();
	obj["file_id"] = $("#cvLow_fileID2_OL").val();
	obj["file"] = $("#input_file_2_OL").val();
	tb_cvLow.push(obj);
	
	var standard_risk_row = new Array();
		obj = {};
		obj["pass"] = form2_cb_tb_Policy_pass;
		obj["text"] = form2_cb_tb_Policy_text;
		obj["layout"] = tb_cvLow;
	standard_risk_row.push(obj);
	
	var chk_std_risk = false;
	if($("#cbBox1_OL").prop("checked") == true){
		chk_std_risk = true;
	}else{
		chk_std_risk = false;
	}
	
	var chk_std_lowrisk = false;
	if($("#cbBox2_OL").prop("checked") == true){
		chk_std_lowrisk = true;
	}else{
		chk_std_lowrisk = false;
	}
	
	/*RPU*/
	var RPU  = [];
	var ETI  = [];
	
	//ตารางใหม่
	var RPU_Table = [];		
	var ETI_Table = [];

	var RPU_male = [];
	var RPU_female = [];
	var ETI_male = [];
	var ETI_female = [];
	
	if($("#tablePolicy1_OL").prop("checked") == true){
		obj = {};
		obj["male_nonforf_rate"] = $("#dbBox3_2_OL option:selected").val();
		obj["female_nonforf_rate"] = $("#dbBox3_3_OL option:selected").val();
		
		RPU.push(obj);

		obj2 = {};
		obj2["male_nonforf_rate"] = $("#dbBox3_5_OL option:selected").val();
		obj2["female_nonforf_rate"] = $("#dbBox3_6_OL option:selected").val();
		
		ETI.push(obj2);	
		
	}else if($("#tablePolicy2_OL").prop("checked") == true){
		
		var year = $("#txb_newTable_OL").val();
		
		if($("#input_file_mort1_OL").val() != "" || $("#input_file_mort2_OL").val() != ""){
			obj_rpu = {};
		}
		
		if($("#input_file_mort3_OL").val() != "" || $("#input_file_mort4_OL").val() != ""){
			obj_eti = {};
		}
		
		if($("#input_file_mort1_OL").val() != ""){
			obj = {};
			obj["year"] = year;
			obj["gender"] = "MALE";
			obj["rate_type"] = "";
			obj["rate_cat_id"] = $("#RPU_ratecat_OL").val();
			obj["rate_layout_id"] = $("#rpu_male_rateLayout_OL").val();
			obj["file_id"] = $("#rpu_male_fileID_OL").val();
			obj["file"] = $("#input_file_mort1_OL").val();
			obj["flag"] = $("#flag_RPU_male_OL").val();
			
			RPU_male.push(obj);	
		}

		
		if($("#input_file_mort2_OL").val() != ""){
			obj = {};
			obj["year"] = year;
			obj["gender"] = "FEMALE";
			obj["rate_type"] = "";
			obj["rate_cat_id"] = $("#RPU_ratecat_OL").val();
			obj["rate_layout_id"] = $("#rpu_female_rateLayout_OL").val();
			obj["file_id"] = $("#rpu_female_fileID_OL").val();
			obj["file"] = $("#input_file_mort2_OL").val();
			obj["flag"] = $("#flag_RPU_female_OL").val();
			
			RPU_female.push(obj);
		}
		
		if($("#input_file_mort3_OL").val() != ""){
			obj = {};
			obj["year"] = year;
			obj["gender"] = "MALE";
			obj["rate_type"] = "";
			obj["rate_cat_id"] = $("#ETI_ratecat_OL").val();
			obj["rate_layout_id"] = $("#eti_male_rateLayout_OL").val();
			obj["file_id"] = $("#eti_male_fileID_OL").val();
			obj["file"] = $("#input_file_mort3_OL").val();
			obj["flag"] = $("#flag_ETI_male_OL").val();
			
			ETI_male.push(obj);	
		}
		
		if($("#input_file_mort4_OL").val() != ""){
			obj = {};
			obj["year"] = year;
			obj["gender"] = "FEMALE";
			obj["rate_type"] = "";
			obj["rate_cat_id"] = $("#ETI_ratecat_OL").val();
			obj["rate_layout_id"] = $("#eti_female_rateLayout_OL").val();
			obj["file_id"] = $("#eti_female_fileID_OL").val();
			obj["file"] = $("#input_file_mort4_OL").val();
			obj["flag"] = $("#flag_ETI_female_OL").val();
			
			ETI_female.push(obj);
		}		
		
		if($("#input_file_mort1_OL").val() != "" || $("#input_file_mort2_OL").val() != ""){
			if($("#input_file_mort1_OL").val() != ""){
				obj_rpu["male"] = RPU_male;
			}else{
				obj_rpu["male"] = [];
			}
			
			if($("#input_file_mort2_OL").val() != ""){
				obj_rpu["female"] = RPU_female;
			}else{
				obj_rpu["female"] = [];
			}
			
			RPU_Table.push(obj_rpu);
		}
		
		if($("#input_file_mort3_OL").val() != "" || $("#input_file_mort4_OL").val() != ""){
			if($("#input_file_mort3_OL").val() != ""){
				obj_eti["male"] = ETI_male;
			}else{
				obj_eti["male"] = [];
			}
			
			if($("#input_file_mort4_OL").val() != ""){
				obj_eti["female"] = ETI_female;
			}else{
				obj_eti["female"] = [];
			}
			
			ETI_Table.push(obj_eti);
		}
		
		
		
	}
	
	var chk_RPU_ETI = false;
	if($("#cbBox3_OL").prop("checked") == true){
		chk_RPU_ETI = true;
	}else{
		chk_RPU_ETI = false;
	}
	
	var chk_RPU_ETI_tbl = false;
	if($("#tablePolicy1_OL").prop("checked") == true && $("#tablePolicy2_OL").prop("checked") == false){
		chk_RPU_ETI_tbl = false;
	}else if($("#tablePolicy1_OL").prop("checked") == false && $("#tablePolicy2_OL").prop("checked") == true){
		chk_RPU_ETI_tbl = true;
	}
	
	var data_json = {
					"method": "Tab_table_policy_value",
					"passInsurance": $("#pass_Insurance_coverage_ol").val(),
					"is_standard_risk" : chk_std_risk,
		            "standard_risk": JSON.stringify(standard_risk),
		            "is_standard_risk_row" : chk_std_lowrisk,
		            "standard_risk_row": JSON.stringify(standard_risk_row),
		            "is_RPU_ETI" : chk_RPU_ETI,
		            "is_RPU_ETI_Table" : chk_RPU_ETI_tbl,
		            "RPU" : JSON.stringify(RPU),
		            "ETI" : JSON.stringify(ETI),
		            "RPU_Table" : JSON.stringify(RPU_Table),
		            "ETI_Table" : JSON.stringify(ETI_Table)
		        }

	$.ajax({
		url: 'BasePlanOL_SaveData_Servlet',
		type: "POST",
		data: data_json,
	     success: function (response) {
	    	 $("#flag_RPU_male_OL").val("false");
	    	 $("#flag_RPU_female_OL").val("false");
	    	 $("#flag_ETI_male_OL").val("false");
	    	 $("#flag_ETI_female_OL").val("false");
	    	/*if (response == "success"){
	    	}else if (response == "fail"){
	    	}*/
	    }
	});
	console.log("data",data_json);	
}

/* Tab ผลประโยชน์/ความคุ้มครอง - หน้าแรก*/
function save_tab_coverageBenefits_OL(){
	var benefits_dead = $("#cbDie_OL").is(":checked");
	var protectPerson_dead = $("#cbDie_OL_person").is(":checked");
	var benefits_contract = $("#cbContract_OL").is(":checked");
	var protectPerson_contract = $("#cbContract_OL_person").is(":checked");
	var benefits_refund = $("#cbRefund_OL").is(":checked");
	var protectPerson_refund = $("#cbRefund_OL_person").is(":checked");
	var benefits_pension = $("#cbPension_OL").is(":checked");
	var protectPerson_pension = $("#cbPension_OL_person").is(":checked");
	var benefits_medical= $("#cbMedical_OL").is(":checked");
	var protectPerson_medical = $("#cbMedical_OL_person").is(":checked");
	var benefits_dividend = $("#cbDividend_OL").is(":checked");
	var protectPerson_dividend = $("#cbDividend_person").is(":checked");
	
	/*if()*/
	if(benefits_dead == true){
		dead = true;
	}else{
		dead = false;
	}
	
	if(benefits_contract == true){
		contract = true;
	}else{
		contract = false;
	}
	
	if(benefits_refund == true){
		bf_refund = true;
	}else{
		bf_refund = false;
	}
	
	if(benefits_pension == true){
		pension = true;
	}else{
		pension = false;
	}
	
	if(benefits_medical == true){
		bf_medical = true;
	}else{
		bf_medical = false;
	}
	if(benefits_dividend == true){
		bf_dividend = true;
	}else{
		bf_dividend = false;
	}
	var benefit_tab = [];
		obj = {};
		obj["group_dead"] = dead;
		benefit_tab.push(obj);
		obj = {};
		obj["group_contract"] = contract;
		benefit_tab.push(obj);
		obj = {};
		obj["group_refund"] = bf_refund;
		benefit_tab.push(obj);
		obj = {};
		obj["group_pension"] = pension;
		benefit_tab.push(obj);
		obj = {};
		obj["group_medical"] = bf_medical;
		benefit_tab.push(obj);
		obj = {};
		obj["group_dividend"] = bf_dividend;
		benefit_tab.push(obj);
	

		
	var data_json = {
		"method": "Tab_coverageBenefits",
		"passInsurance": $("#pass_Insurance_coverage_ol").val(),
		"tab_benefit": JSON.stringify(benefit_tab)
	}
		
	$.ajax({
		url: 'BasePlanOL_SaveData_Servlet',
		type: "POST",
		data: data_json,
	     success: function (response) {
	    }
	});
	console.log("data",data_json)
}

/*Tab : เสียชีวิต*/
function dataSave_benefitsCoverage_dead_OL(){

	/*TBL 1*/
	var row_length = $("#tbody_dieL_OL tbody>tr").length;
	var row_hidden = Number($("#tbody_dieL_OL tbody>tr:hidden").length);	
	
	var lstData = new Array();
	var index = 1;
	for(var i=row_hidden; i<row_length ; i++){
		obj = {};
		var distance = ""+index;
		/*var distance = $("#tbody_dieL_OL tbody>tr").eq(i).find('td:nth-child(2) input').val();*/
		var duration_from = $("#tbody_dieL_OL tbody>tr").eq(i).find('td:nth-child(2)>input[type=text]').val();
		var duration_from_type = $("#tbody_dieL_OL tbody>tr").eq(i).find('td:nth-child(3) option:selected').val();
		var duration_to = $("#tbody_dieL_OL tbody>tr").eq(i).find('td:nth-child(4)>input[type=text]').val();
		var duration_to_type = $("#tbody_dieL_OL tbody>tr").eq(i).find('td:nth-child(5) option:selected').val();
		var select = $("#tbody_dieR_OL tbody>tr").eq(i).find('td:nth-child(1) option:selected').val();
		
		var lst_death = [];
		var object_death = {};
		object_death["sa"] = Math.round10($("#tbody_dieR_OL tbody>tr").eq(i).find('td:nth-child(2) input').val()/100, -4);
		object_death["sa_type"] = $("#tbody_dieR_OL tbody>tr").eq(i).find('td:nth-child(3) option:selected').val();
		object_death["premium"] =  Math.round10($("#tbody_dieR_OL tbody>tr").eq(i).find('td:nth-child(4) input').val()/100, -4);
		object_death["premium_type"] = $("#tbody_dieR_OL tbody>tr").eq(i).find('td:nth-child(5) option:selected').val();
		object_death["include_EM"] = $("#tbody_dieR_OL tbody>tr").eq(i).find('td:nth-child(6) input[type=checkbox]').is(":checked");
		object_death["CV_PV"] = Math.round10($("#tbody_dieR_OL tbody>tr").eq(i).find('td:nth-child(7) input').val()/100, -4);
		object_death["CV_PV_type"] = $("#tbody_dieR_OL tbody>tr").eq(i).find('td:nth-child(8) option:selected').val();
		object_death["other"] = $("#tbody_dieR_OL tbody>tr").eq(i).find('td:nth-child(9) option:selected').val();
		lst_death.push(object_death);
		
		var lst_ADB = [];
		var object_adb = {};
		object_adb["ADB_1"] = $("#tbody_dieR_OL tbody>tr").eq(i).find('td:nth-child(10) option:selected').val();
		object_adb["ADB_2"] = $("#tbody_dieR_OL tbody>tr").eq(i).find('td:nth-child(11) input').val();
		object_adb["ADB_3"] = $("#tbody_dieR_OL tbody>tr").eq(i).find('td:nth-child(12) option:selected').val();
		lst_ADB.push(object_adb);
		
		var lst_public_acc = [];
		var object_public_acc = {};
		object_public_acc["ADB_public_1"] = $("#tbody_dieR_OL tbody>tr").eq(i).find('td:nth-child(13) option:selected').val();
		object_public_acc["ADB_public_2"] = $("#tbody_dieR_OL tbody>tr").eq(i).find('td:nth-child(14) input').val();
		object_public_acc["ADB_public_3"] = $("#tbody_dieR_OL tbody>tr").eq(i).find('td:nth-child(15) option:selected').val();
		lst_public_acc.push(object_public_acc);
		
		
		
		var object = {
				"bnf_item_id": $("#bnf_itemID_OL").val(),
				"distance": distance,
				"duration_from": duration_from,
				"duration_from_type": duration_from_type,
				"duration_to": duration_to,
				"duration_to_type": duration_to_type,
				"select" : select,
				"death" : lst_death,
				"ADB" : lst_ADB,
				"PUBLIC_ACC" : lst_public_acc
			
		}
		lstData.push(object);
		index++;
	}
	
	var lstDataTbl2 = new Array();
	$('#tbl_DeathExceptionOL tbody>tr').each(function(){
		var obj = {}
		obj["except_val"] = $(this).find('td:nth-child(1)').data('key');
		lstDataTbl2.push(obj);
	});
	
	
	var data_json_dead_OL = {
			"method": "save_benefitsCoverage_dead",
			"passInsurance": $("#pass_Insurance_coverage_ol").val(),
			"die" : JSON.stringify(lstData),
			"except" : JSON.stringify(lstDataTbl2)
	}

	$.ajax({
		url: 'BasePlanOL_SaveData_Servlet',
		type: "POST",
		data: data_json_dead_OL,
	     success: function (response) {
	    	/*if (response == "success"){
	    	}else if (response == "fail"){
	    	}*/
	    }
	});
	console.log("data",data_json_dead_OL)

	
	/*$.ajax({
	url: '',
	type: "POST",
	data: data_json_dead_OL,
     success: function (response) {
    }
	});*/
	console.log("data_dead_JSON:", data_json_dead_OL);
	
	
}

function dataSave_benefitsCoverage_contract_OL(){
	/*alert("dataSave_benefitsCoverage_contract_OL")*/
	
	var listDataContractOL = [];
	$('#tbl_contract_OL tbody>tr').each(function(){
		/*set data*/
		sl_sa_max_OL = $(this).find('td:nth-child(1) option:selected').val();
		
		var lst_group_contract_ol = [];
		var object_detail = {};
		object_detail["sa"] =  Math.round10($(this).find('td:nth-child(2) input').val()/100, -4);
		object_detail["sa_type"] = $(this).find('td:nth-child(3) option:selected').val();
		object_detail["premium"] = Math.round10($(this).find('td:nth-child(4) input').val()/100, -4);
		object_detail["premium_type"] = $(this).find('td:nth-child(5) option:selected').val();
		object_detail["include_EM"] = $(this).find('td:nth-child(6) input[type=checkbox]').is(':checked');
		object_detail["CV_PV"] = Math.round10($(this).find('td:nth-child(7) input').val()/100, -4);
		object_detail["CV_PV_type"] = $(this).find('td:nth-child(8) option:selected').val();
		object_detail["other"] = $(this).find('td:nth-child(9) option:selected').val();
		lst_group_contract_ol.push(object_detail);
		
		var object = {
		"sl_max_val" : sl_sa_max_OL,
		"group_contract" : lst_group_contract_ol
		}
		listDataContractOL.push(object);
		
	});
	
	var data_json_contract_ol = {
			"method": "save_RefundMaturity",
			"passInsurance": $("#pass_Insurance_coverage_ol").val(),
			"table_contrac_ol" : JSON.stringify(listDataContractOL)
	} 
	
	$.ajax({
		url: 'BasePlanOL_SaveData_Servlet',
		type: "POST",
		data: data_json_contract_ol,
	     success: function (response) {
	    }
	});
	console.log("data_json : ", data_json_contract_ol)
	
}

function dataSave_benefitsCoverage_refund_OL(){
	/*alert("dataSave_benefitsCoverage_refund_OL")*/
	var listDataBenefitRefund = [];
	$('#benefit_refund tbody>tr').each(function(){
		/*set data*/
		var type_from 	= "";
	    var type_to	  	= "";
	    var value_from 	= "";
	    var value_to	= "";
		policy_year_begin = $(this).find('td:nth-child(2) input').val();
		policy_age_begin = $(this).find('td:nth-child(3) input').val();
		
		if (policy_year_begin != ""){
			value_from = policy_year_begin;
			type_from = "Year";
		}else if (policy_age_begin != "") {
			value_from = policy_age_begin;
			type_from = "Age";
		}
		
		policy_year_end = $(this).find('td:nth-child(4) input').val();
		policy_age_end = $(this).find('td:nth-child(5) input').val();
		
		if (policy_year_end != ""){
			value_to = policy_year_end;
			type_to = "Year";
		}else if (policy_age_end != "") {
			value_to = policy_age_end;
			type_to = "Age";
		}
	
		every_year = $(this).find('td:nth-child(6) input').val();
		benef_amt = $(this).find('td:nth-child(7) input').val();
		benef_unit = $(this).find('td:nth-child(8) option:selected').val();
		benef_factor = $(this).find('td:nth-child(9) option:selected').val();
		benef_scope = $(this).find('td:nth-child(10) option:selected').val();
		
		var benef_sched = [];
		var object_sched = {};
			object_sched["value_from"] = value_from,
			object_sched["type_from"] = type_from,
			object_sched["value_to"] = value_to,
			object_sched["type_to"] = type_to,
			object_sched["every_year"] = every_year
			benef_sched.push(object_sched);
		
		var benef_amount = []; 
		var object_amount = {};
			object_amount["benef_amt"] = replaceComma(benef_amt),
			object_amount["benef_unit"] = benef_unit,
			object_amount["benef_factor"] = benef_factor,
			object_amount["benef_scope"] = benef_scope
			benef_amount.push(object_amount);
		
			var obj = {
					"benefit_sched" : benef_sched,
					"benefit_amount" : benef_amount
				}
			listDataBenefitRefund.push(obj);
		
	});
	
	
	var data_json_benefit_refund = {
			"method": "save_Refund",
			"passInsurance": $("#pass_Insurance_coverage_ol").val(),
			"table_benefit_refund" : JSON.stringify(listDataBenefitRefund)
	}
	$.ajax({
		url: 'BasePlanOL_SaveData_Servlet',
		type: "POST",
		data: data_json_benefit_refund,
	     success: function (response) {
	    }
	});
	
	console.log("JSON_data : ", data_json_benefit_refund)
}
		

/*เงินบำนาญ*/
function dataSave_benefitsCoverage_pension_OL(){
	/*set data table benefit*/
	var lst_data_coverage_pension = [];
	
	$('#benefit_pension tbody>tr').each(function(){
		
		var type_from 	= "";
	    var type_to	  	= "";
	    var value_from 	= "";
	    var value_to	= "";
	    
	    beg_period = $(this).find('td:nth-child(2) input').val();
		beg_period_age = $(this).find('td:nth-child(3) input').val();
		if (beg_period != ""){
			value_from = beg_period;
			type_from = "Year";
		}else if (beg_period_age != "") {
			value_from = beg_period_age;
			type_from = "Age";
		}
		end_period = $(this).find('td:nth-child(4) input').val();
		end_period_age = $(this).find('td:nth-child(5) input').val();
		
		if (end_period != ""){
			value_to = end_period;
			type_to = "Year";
		}else if (end_period_age != "") {
			value_to = end_period_age;
			type_to = "Age";
		}
		
		every_year = $(this).find('td:nth-child(6) input').val();
		benefit_amount = $(this).find('td:nth-child(7) input').val();
		benefit_amount_unit = $(this).find('td:nth-child(8) option:selected').val();
		factor = $(this).find('td:nth-child(9) option:selected').val();
		
		var benef_sched = [];
		var object = {};
		object["value_from"] = value_from,
		object["type_from"] = type_from,
		object["value_to"] = value_to,
		object["type_to"] = type_to,
		object["every_year"] = every_year
		benef_sched.push(object);
		
		var benef_amount = [];
		var object = {};
		object["benef_amt"] = replaceComma(benefit_amount),
		object["benef_unit"] = benefit_amount_unit,
		object["benef_factor"] = factor
		benef_amount.push(object)
		
		var object_tbl = {
			"benefit_sched" : benef_sched,
			"benefit_amount" : benef_amount
		}
		lst_data_coverage_pension.push(object_tbl);
	});
	
		
		
	
	var data_json = {
			"method": "save_Pension",
			"passInsurance": $("#pass_Insurance_coverage_ol").val(),
			"beg_age" : $('#pension_startAge_OL').val(),
			"benefit_sched" : $('#pension_confirmPay_OL').val(),
			"tbl_coverage_pension" : JSON.stringify(lst_data_coverage_pension)
 		}
			
		$.ajax({
			url: 'BasePlanOL_SaveData_Servlet',
			type: "POST",
			data: data_json,
		     success: function (response) {
		    }
		});
	
		console.log("data_benefitsCoverage_pension :",data_json)
}

function dataSave_benefitsCoverage_medical_OL(){
	
	var arr_medical = [];
	$("#benefit_medical tbody>tr").each(function(){
		
		var type_from 	= "";
	    var type_to	  	= "";
	    var value_from 	= "";
	    var value_to	= "";
	    
	    beg_period = $(this).find('td:nth-child(2) input').val();
		beg_period_age = $(this).find('td:nth-child(3) input').val();
		if (beg_period != ""){
			value_from = beg_period;
			type_from = "Year";
		}else if (beg_period_age != "") {
			value_from = beg_period_age;
			type_from = "Age";
		}
		end_period = $(this).find('td:nth-child(4) input').val();
		end_period_age = $(this).find('td:nth-child(5) input').val();
		if (end_period != ""){
			value_to = end_period;
			type_to = "Year";
		}else if (end_period_age != "") {
			value_to = end_period_age;
			type_to = "Age";
		}
		
		var lst_benef_sched = [];
		var obj = {};
		obj["value_from"] = value_from;
		obj["type_from"] = type_from;
		obj["value_to"] = value_to;
		obj["type_to"] = type_to;
		obj["every_year"] = $(this).find('td:nth-child(6) input').val();
		lst_benef_sched.push(obj);
		
		var lst_benef_amount = [];
		var obj = {};
		obj["benef_amt"] = replaceComma($(this).find('td:nth-child(7) input').val());
		obj["benef_unit"] = $(this).find('td:nth-child(8) option:selected').val();
		obj["benef_factor"] = $(this).find('td:nth-child(9) option:selected').val();
		obj["benef_scope"] = $(this).find('td:nth-child(10) option:selected').val();
		lst_benef_amount.push(obj);
		
		var object = {
				"benefit_sched" : lst_benef_sched,
				"benefit_amount" : lst_benef_amount
		}
		
		arr_medical.push(object);
	})
	
	var data_json = {
			"method": "save_MedicalFund",
			"passInsurance": $("#pass_Insurance_coverage_ol").val(),
			"medical": JSON.stringify(arr_medical)
		}
			
		$.ajax({
			url: 'BasePlanOL_SaveData_Servlet',
			type: "POST",
			data: data_json,
		     success: function (response) {
		    }
		});
		console.log("data",data_json)
}

function dataSave_benefitsCoverage_dividend_OL(){
	/*checkbox non-guarantee*/
	var arr_dividend = [];
	var tbl_dividend  = [];
	var choose_file = [];
	 
	if($('#cbBoxDV1').prop('checked') == true){
		chk_non_guarantee = true;
	}else{
		chk_non_guarantee = false;
	}
	
	if($('#cbBoxDV2').prop('checked') == true){
		chk_guarantee = true;

		if($('#GuaranteeOL_opt1').prop('checked') == true){
			/*select file*/
			is_from_file = true;
			
			
			 var obj = {};
			 
						obj["rate_cat_id"] = $("#rateCat_dividend_OL").val();
						obj["sub_rate_cat"] = $("#rateSubCat_dividend_OL").val();
						obj["rate_layout_id"] = $("#layoutID_OL").val();
						obj["file_id"] = $("#fileID_OL").val();
						obj["age_band_code"] = "";
						obj["file"] = "";
						obj["rate_type"] = "";

						choose_file.push(obj);
		 
		}else{
			/*ตาราง เงินปันผลที่รับรองการจ่าย (Guarantee) แบบ ระบุ*/
			is_from_file = false;
			$("#benefit_Guaruntee_tbl tbody>tr").each(function(){
				var lst_benef_sched = [];
				var object = {};
				object["dividend_type_tbl"] = $(this).find('td:nth-child(2) option:selected').val();
				object["year"] = $(this).find('td:nth-child(3) input').val();
				lst_benef_sched.push(object);
				
				
				var lst_benef_amount = [];
				var obj = {};
				obj["benef_amt"] = replaceComma($(this).find('td:nth-child(4) input').val());
				obj["benef_unit"] = $(this).find('td:nth-child(5) option:selected').val();
				obj["benef_factor"] = $(this).find('td:nth-child(6) option:selected').val();
				obj["benef_scope"] = $(this).find('td:nth-child(7) option:selected').val();
				lst_benef_amount.push(obj)
				
				var object = {
						"benefit_sched" : lst_benef_sched,
						"benefit_amount" : lst_benef_amount
				}
				
				arr_dividend.push(object);
				
				
				
			})
		}
	}else{
		chk_guarantee = false;
		is_from_file = false;		
	}

	var data_json = {
			"method": "save_Dividend",
			"passInsurance": $("#pass_Insurance_coverage_ol").val(),
			"chk_non_guarantee" : chk_non_guarantee,
			"dividend_type" : $('#DVList1 option:selected').val(),
			"insurance_age" : $('#DvList1_Year option:selected').val(),
			"insurance_age_amt" : $('#DVBox1').val(),
			"formular_count" : $('#DVList1_Cal option:selected').val(),
			"chk_guarantee" : chk_guarantee,
			"is_from_file" : is_from_file,
			"choose_file" : JSON.stringify(choose_file),
			"tbl_guarantee" : JSON.stringify(arr_dividend)
			
			
		}
			
		$.ajax({
			url: 'BasePlanOL_SaveData_Servlet',
			type: "POST",
			data: data_json,
		     success: function (response) {
		    }
		});
		console.log("data_json_benefitsCoverage_dividend_OL :", data_json)
}

/*End ผลประโยชน?*/


/*Get Data showcase*/
function showcase_basicInfo_OL(response,typeClone,cov_code_temp,new_cov_code){	
	var obj_BI = response.Tab_Basic_Information[0];

	/*Clone*/
	var passInsurance = ""
	var nameTH = ""
	if(typeClone == "Clone"){
		passInsurance 	= new_cov_code
		nameTH 			= "( Clone ) "+obj_BI.nameTH
	}else{
		passInsurance	= obj_BI.passInsurance
		nameTH 			= obj_BI.nameTH
	}
	
	/*โหลดข้อมูล*/
	$("#pass_Insurance_coverage_ol").val(passInsurance);
	
	/*bundle*/
	if(obj_BI.is_bundle == true){
		$("#chk_bundleBaseplan_OL1").prop("checked", true);
	}
	if(obj_BI.coverage_Bundle.length > 0){	
		$("#chk_bundleBaseplan_OL1").prop("disabled", true);
		$("#div_bundle_rider_OL").show();
		$("#tbl_rider_bundle_OL>tbody>tr[data-group='0']").hide();
		
		var row = "";
		var numberImgOK = 0;
		for (i in obj_BI.coverage_Bundle) {
			var obj_BI_bundle = obj_BI.coverage_Bundle[i];	
			numberImgOK++;
			row += "<tr id='tbody_rider_bundle_OL"+numberImgOK+"' data-group='1' data-id="+numberImgOK+">"+
			  /*"<td id='imgOK_rider_bundle_OL"+numberImgOK+"' class='verticalCenter text-center'>"+
			  "<input id='chk_rider_bundle_OL"+numberImgOK+"' type='checkbox' value='"+obj_BI_bundle.cov_code+"'>"+
			  "</td>"+*/
			  "<td class='verticalCenter text-left font-term-green'><label for='chk_rider_bundle_OL"+numberImgOK+"'>"+obj_BI_bundle.cov_code+"</label></td>"+
			  "</tr>";
		}
		
		$("#tbl_rider_bundle_OL tbody").append(row);
		
	}else{
		$("#chk_bundleBaseplan_OL1").prop("disabled", false);
	}
	
	$("#thai_Name_ol").val(nameTH);
	$("#eng_Name_ol").val(obj_BI.nameEN);
	$("#appStart_date_ol").val(obj_BI.sale_eff_date);
	$("#appTo_date_ol").val(obj_BI.sale_exp_date);
	$("#age_Start_ol").val(obj_BI.age_Start);
	$("#age_To_ol").val(obj_BI.age_To);
	if(obj_BI.maximum_Protection_To != "0"){
		$("#maximum_Protection_To_ol").val(obj_BI.maximum_Protection_To);
		$("#validate_input6_2ol").hide();
	}else{
		$("#maximum_Protection_To_ol").val("");
		$("#validate_input6_2ol").show();
	}
	
	/*mode*/
	for (i in obj_BI.mode) {
		var obj_BI_mode = obj_BI.mode[i];	
		$("#tbl_BI_Mode_OL input:checkbox").each(function(){	
			var value = $(this).val();
			if(value == obj_BI_mode.value){
				$(this).prop("checked", true);				
				if(value == "ANNUAL" || value == "MONTH" || value == "QUARTER" || value == "SEMIANNUAL"){
					$("#tbl_BI_Mode_OL input:checkbox").each(function(){
						if($(this).val() == "SINGLE_PREM" || $(this).val() == "SINGLE_SHORT"){
							$(this).prop("disabled", true);
						}
					});
				}else{
					/*8,9*/
					if(value == "SINGLE_PREM"){
						$("#tbl_BI_Mode_OL input:checkbox").each(function(){
							if($(this).val() == "ANNUAL" || $(this).val() == "MONTH" || $(this).val() == "QUARTER" || $(this).val() == "SEMIANNUAL" || $(this).val() == "SINGLE_SHORT"){
								$(this).prop("disabled", true);
							}
						});
					}else if(value == "SINGLE_SHORT"){
						$("#tbl_BI_Mode_OL input:checkbox").each(function(){
							if($(this).val() == "ANNUAL" || $(this).val() == "MONTH" || $(this).val() == "QUARTER" || $(this).val() == "SEMIANNUAL" || $(this).val() == "SINGLE_PREM"){
								$(this).prop("disabled", true);
							}
						});
					}else{
						$("#tbl_BI_Mode_OL input:checkbox").each(function(){
							if($(this).val() == "ANNUAL" || $(this).val() == "MONTH" || $(this).val() == "QUARTER" || $(this).val() == "SEMIANNUAL"){
								$(this).prop("disabled", true);
							}
						});
					}
					
				}
			}
		});
	}
	
	/*filing channel*/
	for (i in obj_BI.filing_Channel) {
		var obj_BI_filing = obj_BI.filing_Channel[i];	
		$("#tbl_BI_FilingCN_OL input:checkbox").each(function(){			
			if($(this).val() == obj_BI_filing.value){
				$(this).prop("checked", true);
			}
		});
	}
	
	/*เพศ*/
	if(obj_BI.sex == "EITHER"){
		$("#ch_male_ol, #ch_female_ol").prop("checked",true);
	}else if(obj_BI.sex == "MALE"){
		$("#ch_male_ol").prop("checked",true);
		$("#ch_female_ol").prop("checked",false);
	}else if(obj_BI.sex == "FEMALE"){
		$("#ch_female_ol").prop("checked",true);
		$("#ch_male_ol").prop("checked",false)
	}
	
	/*สูตรการคำนวณอายุ*/
	for (i in obj_BI.cal_Age) {
		var obj_BI_calAge = obj_BI.cal_Age[i];	
		$("#tbl_BI_AgeCal_OL input:checkbox").each(function(){			
			if($(this).val() == obj_BI_calAge.value){
				$(this).prop("checked", true);
			}
		});
	}
	
	/*เบี้ยประกัน*/
	if(obj_BI.insurance_premium == "NONE" || obj_BI.insurance_premium == ""){
		$("#sl_insurance_premium_ol").val("NONE").attr('selected', 'selected');
	}else{
		$("#sl_insurance_premium_ol").val(obj_BI.insurance_premium).attr('selected', 'selected');
	}
	
	/*ประเภทความคุ้มครอง*/
	if(obj_BI.coverage_type == "NONE" || obj_BI.coverage_type == ""){
		$("#sl_coverage_type_ol").val("NONE").attr('selected', 'selected');
	}else{
		$("#sl_coverage_type_ol").val(obj_BI.coverage_type).attr('selected', 'selected');
	}
	
	/*ประเภทสัญญา*/
	if(obj_BI.contract_type == "NONE" || obj_BI.contract_type == ""){
		$("#sl_contract_type_ol").val("NONE").attr('selected', 'selected');
	}else{
		$("#sl_contract_type_ol").val(obj_BI.contract_type).attr('selected', 'selected');
	}
	
	/*ระยะประกันของสัญญาประกันชีวิต*/
	if(obj_BI.insurance_period_radio == "TO_AGE"){
		$("#rd_anniversary_ol").prop("checked", true);
	}else{
		$("#rd_Time_length_ol").prop("checked", true);
	}
		
		/*ระยะเวลาคุ้มครอง*/
		if(obj_BI.insurance_period_radio == "TO_YEAR"){
			var row = "";
			for (i in obj_BI.insurance_period) {
				var obj_BI_insurance_period = obj_BI.insurance_period[i];	
						
				var lastImgOK = $('#tb_BasicInformation1_OL >tbody>tr:last-child>td:first').attr("id") || 0;
				var numberImgOK = 0;
				
				if(lastImgOK == 0){
					numberImgOK = 1;
				}else{
					numberImgOK = Number(lastImgOK.replace("td_BasicInformation1_OL_",""))+1;
				}
				var newID = "td_BasicInformation1_OL_"+numberImgOK;
				var ftOnclick = 'imgCheckbox("'+newID+'");';
				
				row = "<tr id='tbody_OL_BasicInformation_"+numberImgOK+"'>"+
				"<td width='11%' class='text-center borderBlack' id="+"'"+newID+"'"+" onclick='"+ftOnclick+"' style='vertical-align: middle;'><i class='glyphicon glyphicon-edit'></i></td>"+
				"<td width='21%' class='borderBlack'><input id='datefrom_OL_"+numberImgOK+"' class='auto form-control text-center margin-padding0' type='text' onkeypress='validate(event); validate_zero_tovalue_OL("+numberImgOK+")' onkeyup='validate_zero_tovalue_OL("+numberImgOK+");' onblur='checkFromToPeriod_OL("+numberImgOK+");' data-v-min='0' data-v-max='999' maxlength='3' value='"+obj_BI_insurance_period.from+"'></td>"+
				"<td width='21%' class='text-center borderBlack'></td>"+
				"<td width='21%' class='borderBlack'><input id='dateto_OL_"+numberImgOK+"' class='auto form-control text-center margin-padding0' type='text' onkeypress='validate(event); validate_zero_tovalue_OL("+numberImgOK+")' onkeyup='validate_zero_tovalue_OL("+numberImgOK+");' onblur='checkFromToPeriod_OL("+numberImgOK+");' data-v-min='0' data-v-max='999' maxlength='3' value='"+obj_BI_insurance_period.to+"'></td>"+
				"<td width='21%' class='text-center borderBlack'></td>"+
				"</tr>";
				
				$("#tb_BasicInformation1_OL tbody").append(row);
				$('.auto').autoNumeric('init');
				
				var cloneUnitFrom  = $('#dmy_1_ol').clone();
				$(cloneUnitFrom).attr("id","durationFrom_"+numberImgOK+"");
				$(cloneUnitFrom).attr("onclick","durationFrom("+numberImgOK+");");
				$(cloneUnitFrom).attr("disabled", false);
				$(cloneUnitFrom).appendTo("#tbody_OL_BasicInformation_"+numberImgOK+">td:nth-child(3)");
				
				var cloneUnitTo  = $('#dmy_1_ol').clone();
				$(cloneUnitTo).attr("id","durationTo_"+numberImgOK+"");
				$(cloneUnitTo).attr("onclick","durationTo("+numberImgOK+");");
				$(cloneUnitTo).attr("disabled", false);
				$(cloneUnitTo).appendTo("#tbody_OL_BasicInformation_"+numberImgOK+">td:nth-child(5)");				
				
				$("#durationFromOL_"+numberImgOK+"").val(obj_BI_insurance_period.from_unit).attr('selected', 'selected');
				$("#durationToOL_"+numberImgOK+"").val(obj_BI_insurance_period.to_unit).attr('selected', 'selected');
			}
			
			$("#addRowBasicInformation1_OL, #deleteRowBasicInformation1_OL").prop("disabled", false);
			
		}else{
			/*คุ้มครองถึงอายุ*/
			for (i in obj_BI.insurance_period) {
				var obj_BI_insurance_period = obj_BI.insurance_period[i];
				$("#text_anniversary_ol").val(obj_BI_insurance_period.to).prop("disabled", false);
				if(obj_BI_insurance_period.to_unit == "NONE" || obj_BI_insurance_period.to_unit == ""){
					$("#dmy_1_ol").val("NONE").attr('selected', 'selected').prop("disabled", false);
				}else{
					$("#dmy_1_ol").val(obj_BI_insurance_period.to_unit).attr('selected', 'selected').prop("disabled", false);
				}
			}
			
			$("#addRowBasicInformation1_OL, #deleteRowBasicInformation1_OL").prop("disabled", true);
		}
		
		if($("#tb_BasicInformation1_OL tbody>tr").length > 1){
			$("#tb_BasicInformation1_OL tbody>tr:first-child").remove();
		}
		
		/*เปลี่ยน ID*/
		var newID = 0;
		$("#tb_BasicInformation1_OL tbody>tr").each(function(){
			newID++;
			var onclick = "imgCheckbox('td_BasicInformation1_OL_"+newID+"');";
			$(this).attr("id", "tbody_OL_BasicInformation_"+newID);
			$(this).find("td:nth-child(1)").attr("id", "td_BasicInformation1_OL_"+newID);
			$(this).find("td:nth-child(1)").attr("onclick", onclick);
			$(this).find("td:nth-child(2)>input").attr("id", "datefrom_OL_"+newID);
			$(this).find("td:nth-child(2)>input").attr("onblur", "checkFromToPeriod_OL("+newID+");");
			$(this).find("td:nth-child(3)>select").attr("id", "durationFrom_OL_"+newID);
			$(this).find("td:nth-child(3)>select").attr("onclick", "durationFrom_OL("+newID+");");
			$(this).find("td:nth-child(4)>input").attr("id", "dateto_OL_"+newID);
			$(this).find("td:nth-child(4)>input").attr("onkeypress", "validate(event); validate_zero_tovalue_OL("+newID+");");
			$(this).find("td:nth-child(4)>input").attr("onkeyup", "validate_zero_tovalue_OL("+newID+");");
			$(this).find("td:nth-child(4)>input").attr("onblur", "checkFromToPeriod_OL("+newID+");");
			$(this).find("td:nth-child(5)>select").attr("id", "durationTo_OL_"+newID);
			$(this).find("td:nth-child(5)>select").attr("onclick", "durationFrom_OL("+newID+");");
		});
		
		/*ระยะชำระเบี้ยของสัญญาประกันชีวิต*/
		if(obj_BI.premium_preiod_radio == "TO_AGE"){
			$("#rd_insurance_premium_ol").prop("checked", true);
		}else{
			$("#rd_Time_insurance_premium_ol").prop("checked", true);
		}
			
		if(obj_BI.premium_preiod_radio == "TO_AGE"){
			/*ชำระถึงอายุ*/
			$("#text_insurance_premium_ol").val(obj_BI.premium_num).prop("disabled", false);
			if(obj_BI.premium_preiod_unit == "NONE" || obj_BI.premium_preiod_unit == ""){
				$("#dmy_3_ol").val("NONE").attr('selected', 'selected').prop("disabled", false);
			}else{
				$("#dmy_3_ol").val(obj_BI.premium_preiod_unit).attr('selected', 'selected').prop("disabled", false);
			}
		}else{
			/*ระยะชำระเบี้ย*/	
			$("#text_Time_insurance_premium_ol").val(obj_BI.premium_num).prop("disabled", false);
			if(obj_BI.premium_preiod_unit == "NONE" || obj_BI.premium_preiod_unit == ""){
				$("#dmy_4_ol").val("NONE").attr('selected', 'selected').prop("disabled", false);
			}else{
				$("#dmy_4_ol").val(obj_BI.premium_preiod_unit).attr('selected', 'selected').prop("disabled", false);
			}
		}
		
		/*แบ่งจ่ายได้*/
		if($("#rd_Time_insurance_premium_ol").prop("checked") == true && $("#dmy_4_ol option:selected").val() == "YEAR"){
		//if(obj_BI.premium_preiod_unit == "YEAR"){
			$("#ch_sperately_pay_ch_ol").prop("disabled", false);
		}
		
		if(obj_BI.pay_separately_checkbox == true){
			$("#ch_sperately_pay_ch_ol").prop("checked", true)		
		}
		
		for (i in obj_BI.pay_separately) {
			var obj_BI_pay_separately = obj_BI.pay_separately[i];
			
			$("#tb_Sperately_Pay_ol tbody>tr").each(function(){
				var chk_value = $(this).find("td:nth-child(1) input:checkbox");
				if($(chk_value).val() == obj_BI_pay_separately.period){
					$(chk_value).prop("checked", true).prop("disabled", false);
					var rate_value = (obj_BI_pay_separately.rate*100).toFixed(2)
					$(this).find("td:nth-child(3) input").val(rate_value).prop("disabled", false)
				}else{
					$(chk_value).prop("disabled", false)
				}
			});			
		}
		
		/*รายการตารางที่ใช้ในการคำนวณเบี้ย*/
		for(i in obj_BI.table_Cal1){
			var obj = obj_BI.table_Cal1[i];
			$("#tb_CalPremiumUse_ol tbody>tr").each(function(i){
				if( obj.prem_assump_type == $(this).find('td:nth-child(1) input[type="checkbox"]').val()){
					$(this).find('td:nth-child(1) input[type="checkbox"]').prop("checked",true)
					ch_valPM_ol(i,"#ch_calPM_"+i+"_ol");
				}
			});
	
		}
		/*ตารางที่ใช้ในการคำนวณเบี้ย*/
		for(i in obj_BI.table_Cal2){
			var obj = obj_BI.table_Cal2[i];
			$("#tb_allCalPM_OL tbody>tr").each(function(i){
				var first_row = false;
				if( i % 3 == 0){
					first_row = true;
				}
				
				var id = $(this).attr("id");
					//id = id.replace("tr_","");
					
				if(obj.prem_assump_type == $(this).data('value') && first_row == true){
					if( obj.gender == $(this).find('td:nth-child(2) input[type="checkbox"]').val()){
						$(this).find('td:nth-child(2) input[type="checkbox"]').prop("checked",true);
						$(this).find('td:nth-child(2) input[type="checkbox"]').prop("disabled", false);
						$(this).find('td:nth-child(4) label').text(obj.name);
						$(this).find('td:nth-child(4) input[type="hidden"]').val(obj.prem_assump_rate_id);
						$(this).find('td:nth-child(5) input[type="button"]').prop("disabled", false);
						$(this).find('td:nth-child(6) input[type="text"]').val(obj.file_name);
					}
					
				}else if(obj.prem_assump_type == $(this).data('value') && first_row == false){
					if( obj.gender == $(this).find('td:nth-child(1) input[type="checkbox"]').val()){
						$(this).find('td:nth-child(1) input[type="checkbox"]').prop("checked",true);
						$(this).find('td:nth-child(1) input[type="checkbox"]').prop("disabled",false);
						$(this).find('td:nth-child(3) label').text(obj.name);
						$(this).find('td:nth-child(3) input[type="hidden"]').val(obj.prem_assump_rate_id);
						$(this).find('td:nth-child(4) input[type="button"]').prop("disabled", false);
						$(this).find('td:nth-child(5) input[type="text"]').val(obj.file_name);
					}
				}

				/*เปิด-ปิด checkbox*/
				if(obj.gender == "EITHER" && obj.prem_assump_type == $(this).data('value')){
					$("#tb_allCalPM_OL tbody>tr[data-value='"+obj.prem_assump_type+"']").each(function(i){
						var other_gender = $(this).find("input:checkbox").val();
						if(other_gender == "MALE" || other_gender == "FEMALE"){
							$(this).find("input:checkbox").prop("disabled",true);
						}
					});
				}else if(obj.gender == "FEMALE" || obj.gender == "MALE" && obj.prem_assump_type == $(this).data('value')){
					$("#tb_allCalPM_OL tbody>tr[data-value='"+obj.prem_assump_type+"']").each(function(i){
						var other_gender = $(this).find("input:checkbox").val();
						if(other_gender == "EITHER"){
							$(this).find("input:checkbox").prop("disabled",true);
						}
					});
				}
				
			});
		}
		
		/*อัตราดอกเบี้ย*/
		if(obj_BI.prem_Rate != "0.0000"){
			var prem_rate = parseFloat(obj_BI.prem_Rate*100).toFixed(2);
			$("#text_Calculate_premiums_1ol").val(prem_rate);
		}else{
			$("#text_Calculate_premiums_1ol").val("");
		}
		
		if(obj_BI.sum_decr_rate != "0.0000"){
			var sum_decr_rate = parseFloat(obj_BI.sum_decr_rate*100).toFixed(2);
			$("#text_Calculate_premiums_2ol").val(sum_decr_rate);
		}else{
			$("#text_Calculate_premiums_2ol").val("");
		}
		
		/*ลดหย่อนภาษี*/
		if(obj_BI.table_TaxReduce.length > 0){
			replaceLayout_tax(obj_BI.passInsurance);
			
			/*Khwan Fix for new get layout 11/12/2019*/
			tbl_name = "tbl_ModalMain_OL";
			modal_cv = "ModalMain_OL";
			download_modal = "download_tbl_ModalMain_OL";
			
			for (i in obj_BI.table_TaxReduce) {
				var obj_BI_Tax = obj_BI.table_TaxReduce[i];
				var fileName_table_TaxReduce = obj_BI_Tax.layout
				if(typeClone == "Clone"){
					fileName_table_TaxReduce = obj_BI_Tax.layout.replace(cov_code_temp,new_cov_code)
				}

				var format_name = "Tax_LayoutDet_OL_rateCat"+obj_BI_Tax.pass+"_layout"+obj_BI_Tax.id;
				var format_name_col = "Tax_Cols_LayoutDet_OL_rateCat"+obj_BI_Tax.pass+"_layout"+obj_BI_Tax.id;
				
				var tbl_col = $("#"+format_name_col).val();
				
				$("#tb_TaxReduce_OL tbody>tr").each(function(){
					var dataID = Number($(this).attr("data-id"));
					var ID = $(this).attr("id");
						ID = ID.replace("tbody_TaxReduce_OL_","");
					if(dataID == obj_BI_Tax.pass){
						$(this).find("td:nth-child(3) input:text").val(fileName_table_TaxReduce);
						$(this).find("#hdd_layoutID_OL"+ID).val(obj_BI_Tax.id);
						$(this).find("#hdd_fileID_OL"+ID).val(obj_BI_Tax.fileID);
						$(this).find("td:nth-child(4) span,td:nth-child(5) span,td:nth-child(6) span").removeClass("activecolorgray").addClass("activecolorblue");
						
						/*Khwan Fix for new get layout 11/12/2019*/
						$(this).find("td:nth-child(5) span").attr("onclick", "openFileTextMain('"+fileName_table_TaxReduce+"','"+obj_BI_Tax.ref+"',"+tbl_col+",'"+tbl_name+"','"+modal_cv+"','"+download_modal+"','"+format_name+"')")
						
						/*if(obj_BI_Tax.pass == 24){
							//คุ้มครองชีวิตตั้งแต่ 10 ปีขึ้นไป
							$(this).find("td:nth-child(5) span").attr("onclick", "openFileTextBasePlan_OL('"+fileName_table_TaxReduce+"','"+obj_BI_Tax.ref+"',63,'tb_TaxReduce_view2_OL','modal_TableTaxReduce2_OL')");
						}else{
							$(this).find("td:nth-child(5) span").attr("onclick", "openFileTextBasePlan_OL('"+fileName_table_TaxReduce+"','"+obj_BI_Tax.ref+"',64,'tb_TaxReduce_view_OL','modal_TableTaxReduce_OL')");
						}*/
						
						$(this).find("td:nth-child(6) span").attr("onclick", "openFile_target('"+fileName_table_TaxReduce+"','"+obj_BI_Tax.ref+"','txt_download')");
						
						
					}
				});		
			}
		}		
				
		/*หมายเหตุ*/
		$("#Basic_remark_OL").text(obj_BI.note);

		/*ปิดดอกจันทร์*/
		if(obj_BI.nameTH != ""){
			$("#validate_input2_ol").hide();
		}
		
		if($("#age_Start_ol").val() != "" && $("#age_To_ol").val() != ""){
			$("#validate_input6_1ol").hide();
		}
		
		if($("#tbl_BI_Mode_OL input:checkbox:checked").length > 0){
			$("#validate_input8_ol").hide();
		}
		
		if($("input[name='ch_gender_ol[]']:checked").length > 0){
			$("#validate_input11_ol").hide();
		}
		
		if($("input[name='rd_Term_of_insurance_ol']").length > 0){
			$("#validate_input15_ol").hide();
		}
		
		if($("input[name='rd_Time_insurance_premium_ol']").length > 0){
			$("#validate_input16_ol").hide();
		}
	
}
function showcase_policyWording_OL(response){
	
	// table policy
	for(i in response.Tab_Policy_Wording){
		var obj_policy = response.Tab_Policy_Wording[i];
		for(j in response.Tab_Policy_Wording[i].file){
			var obj_policy_file = response.Tab_Policy_Wording[i].file[j];
			$("#Policy_Table_OL tbody>tr").each(function(){
				if( $(this).data('id') == obj_policy.doc_type_id){
					var type = "";
					if(obj_policy_file.file_type == "1"){
						type = "word";
					}else if(obj_policy_file.file_type == "2"){
						type = "pdf";
					}
					GetFileModalPolicy_OL(obj_policy.doc_type_id, obj_policy_file.file_id, obj_policy_file.file_name, obj_policy_file.file_ref,type)
				}
			})
		}
	}
	
	$("#Policy_Table_OL tbody>tr").each(function(){
		var doc_type_id = $(this).data('id')
		datajson = {				        	
			"method" : "getHistoryPolicy",
			"doc_type_id" : doc_type_id,
			"cov_code" : $("#pass_Insurance_coverage_ol").val()
		}	
					
		$.ajax({
			 type: "POST",
		    url : "PolicyWording_Data_Servlet",
		    data: datajson,       
		    async:false,
		    success : function(response) {	
		    		    	
		    	if( response.history_policy[0]){
		    		$("#Policy_Table_OL tbody>tr[data-id='"+doc_type_id+"']").find('td:nth-child(8) a').removeClass('active_grey').addClass('active_blue')
		    	}
		    },
		 	error : function(response) {	
			 
		 	}
		})
	});
	
}

function showcase_privilege_insurance_OL(response){
	
	var obj_PI = response.Tab_exercise_rights_insurance[0];
	
	/*CASH_SURR*/
	if(obj_PI.CASH_SURR.length > 0){
			$("#ch_expropriate_insurance_OL").prop("checked", true);
			
			if($("#ch_expropriate_insurance_OL").prop("checked") == true){
				$("#ch_CVClaim_ol").prop("disabled", false);
			}
			
			for (i in obj_PI.CASH_SURR) {
				var obj_cash_surr = obj_PI.CASH_SURR[i];	
				$("#sel_Surrender_ol").prop("disabled", false);
				$("#sel_Surrender_ol option[value="+obj_cash_surr.Formula_id+"]").attr("selected",true)
					
				if(obj_cash_surr.Is_claim_deduct == true){
					$("#ch_CVClaim_ol").prop("checked", true);
				}
			}		
	}
	
	/*APL*/
	if(obj_PI.APL.length > 0){
		$("#ch_APL_Auto_ol").prop("checked", true);
		for(i in obj_PI.APL){
			var obj_apl = obj_PI.APL[i];
			$('#apl_Auto_ol').val((obj_apl.Interest_rate*100).toFixed(2));
			$('#apl_Auto_ol').prop("disabled", false);
		}
	}
	
	/*Policy_Loan*/
	if(obj_PI.POLICY_LOAN.length > 0){
		$("#chk_Policy_Loan_ol").prop("checked", true);
		for(i in obj_PI.POLICY_LOAN){
			var obj_policy_loan = obj_PI.POLICY_LOAN[i];
			$("#txb_Policy_Loan_ol").val((obj_policy_loan.Interest_rate*100).toFixed(2));
			$("#txb_Policy_Loan_ol").prop("disabled", false);
		}
	}
	
	/*ETI*/
	if(obj_PI.ETI.length > 0){
		$("#ch_ETI_ol").prop("checked", true);
		
		if($("#ch_ETI_ol").prop("checked") == true){
			$("#ch_AutoETI_ol").prop("disabled", false);
			$("#ch_PhaseETI_ol").prop("disabled", false);
		}
		
		for(i in obj_PI.ETI){
			var obj_eti = obj_PI.ETI[i];
			$("#sel_ETI_ol").prop("disabled", false);
			$("#sel_ETI_ol option[value="+obj_eti.Formula_id+"]").attr("selected", true);
			
			/*ETI_TO*/
			if(obj_eti.Period_calc_meth == "NONE"){
				$("#ch_PhaseETI_ol").prop("checked", false);
				$("#sel_PhaseETI_ol").prop("disabled", true);
				$("#eti_year_ol").prop("disabled", true);
				$("#dmy_2_1_ol").prop("disabled", true);
			}else{
				$("#ch_PhaseETI_ol").prop("checked", true);
				$("#sel_PhaseETI_ol").prop("disabled", false);
				$("#sel_PhaseETI_ol option[value="+obj_eti.Period_calc_meth+"]").attr("selected", true);
				
				$("#eti_year_ol").prop("disabled", false);
				$("#eti_year_ol").val(obj_eti.Benefit_period);
				
				$("#dmy_2_1_ol").prop("disabled", false);
				$("#dmy_2_1_ol option[value="+obj_eti.Period_unit+"]").attr("selected", true);
				
			}
		}
	}
	/*AUTO_ETI*/
	if(obj_PI.AUTO_ETI.length > 0){
		$("#ch_AutoETI_ol").prop("checked", true);
		for(i in obj_PI.AUTO_ETI){
			var obj_auto_eti = obj_PI.AUTO_ETI[i];
			$("#sel_AutoETI_ol").prop("disabled", false);
			$("#sel_AutoETI_ol option[value="+obj_auto_eti.Formula_id+"]").attr("selected", true);
			
		}
	}
	/*RPU*/
	if(obj_PI.RPU.length > 0){
		$("#ch_RPU_ol").prop("checked", true);
		
		if($("#ch_RPU_ol").prop("checked") == true){
			$("#ch_AutoRPU_ol").prop("disabled", false);
			$("#ch_PhaseRPU_ol").prop("disabled", false);
		}
		
		$("#rd_AutoRPU_OL1").prop("disabled", false);
		$("#rd_AutoRPU_OL2").prop("disabled", false);
		$("#ch_RPUClose_ol").prop("disabled", false);
		for(i in obj_PI.RPU){
			var obj_rpu = obj_PI.RPU[i];
			$("#sel_RPU_ol").prop("disabled", false);
			$("#sel_RPU_ol option[value="+obj_rpu.Formula_id+"]").attr("selected", true);
			
			if(obj_rpu.Is_debt_deduct == true){
				$("#ch_RPUClose_ol").prop("checked", true);
			}else if(obj_rpu.Is_debt_deduct == false){
				$("#ch_RPUClose_ol").prop("checked", false);
			}
			
			if(obj_rpu.Rpu_sa_type == "APPLY_SA"){
				$("#rd_AutoRPU_OL1").prop("checked", true);
			}else{
				$("#rd_AutoRPU_OL2").prop("checked", true);
			}
			if(obj_rpu.Period_calc_meth == "NONE"){
				
			}else{
				$("#ch_PhaseRPU_ol").prop("checked", true);
				$("#sel_PhaseRPU_ol").prop("disabled", false);
				$("#sel_PhaseRPU_ol option[value="+obj_rpu.Period_calc_meth+"]").attr("selected", true);
				$("#rpu_year_ol").prop("disabled", false);
				$("#rpu_year_ol").val(obj_rpu.Benefit_period)
				$("#dmy_2_2_ol").prop("disabled", false);
				$("#dmy_2_2_ol option[value="+obj_rpu.Period_unit+"]").attr("selected", true);
				
			}
		}
	}
	/*AUTO_RPU*/
	if(obj_PI.AUTO_RPU.length > 0){
		$("#ch_AutoRPU_ol").prop("checked", true);
		$("#ch_AutoRPUClose_ol").prop("disabled", false);
		for(i in obj_PI.AUTO_RPU){
			var obj_auto_rpu = obj_PI.AUTO_RPU[i];
			$("#sel_AutoRPU_ol").prop("disabled", false);
			$("#sel_AutoRPU_ol option[value="+obj_auto_rpu.Formula_id+"]").attr("selected", true);
			
			if(obj_auto_rpu.Is_debt_deduct == true){
				$("#ch_AutoRPUClose_ol").prop("checked", true);
			}else if(obj_auto_rpu.Is_debt_deduct == false){
				$("#ch_AutoRPUClose_ol").prop("checked", false);
			}
		
		}
	}	
}

function showcase_cal_premium_OL(response,typeClone,cov_code_temp,new_cov_code){
	var obj_CP = response.Tab_cal_insurance_premiums[0];
	var bcode = $("#pass_Insurance_coverage_ol").val();
	
	tbl_name = "tbl_ModalMain_OL";
	modal_cv = "ModalMain_OL";
	download_modal = "download_tbl_ModalMain_OL";
	
	// เซ็คค่าที่เข้ามาใน tab คำนวณเบี้ย	
	//if(obj_CP.length > 0){
		/*มีค่า Age Band*/
		if(obj_CP.age_Band.length > 0){
			$("#ch_insurance_premium_ageBand_ol").prop("checked", true);
			$("#tb_Age_Band_OL *").attr("disabled", false);
			for (i in obj_CP.age_Band) {
				var obj_CP_age_Band = obj_CP.age_Band[i];
				$("#tb_Age_Band_OL tbody>tr").each(function(){
					if(obj_CP_age_Band.value == $(this).find("td:nth-child(2)").text()){
						$(this).find("input:checkbox").prop("checked", true);
						var id = $(this).find("input:checkbox").attr("id");
							id = id.replace("imgOK_ageBand_OL","");
						$(this).find("input:checkbox").attr("onclick","unselect_AgeBand_OL("+id+")")
					}
				});
			}
		}
		
		/*เบี้ยมาตรฐาน*/
		
		/*PM type*/
		var pmRate = [];
		for (i in response.Tab_cal_insurance_premiums[0].PM_Type_premium) {
			var obj_PMType = response.Tab_cal_insurance_premiums[0].PM_Type_premium[i];
			pmRate.push(obj_PMType.name);	
		}
		
		$("#PMrate_type_OL").val(pmRate);
		
		/*OL*/
		var prem_calc_meth = obj_CP.prem_calc_meth;
		if(prem_calc_meth == "PREM_ONLY"){
			$("#rd_cal_insurance_ol").prop("checked", true);
			$("#ch_calInsurance_ol").prop("disabled", false);
			$("#tr_calPremium_OL1,#tr_calPremium_OL2,#tr_calPremium_OL3,#tr_calPremium_OL4").show();
			$("#tr_calCapital_OL1,#tr_calCapital_OL2,#tr_calCapital_OL3").hide();
			
		}else if(prem_calc_meth == "SA_ONLY"){
			$("#rd_cal_capital_ol").prop("checked", true);
			$("#rd_cal_insurance_ol").prop("checked", false);
			$("#ch_calInsurance_ol").attr("disabled", true);
			
			$("#tr_calPremium_OL1,#tr_calPremium_OL2,#tr_calPremium_OL3,#tr_calPremium_OL4").show();
			$("#tr_calCapital_OL1,#tr_calCapital_OL2,#tr_calCapital_OL3").hide();				
			
		}else if(prem_calc_meth == "EITHER"){
			$("#rd_cal_insurance_ol").prop("checked", true);
			$("#ch_calInsurance_ol").prop("checked", true);
			$("#ch_calInsurance_ol").prop("disabled", false);
		}
		
		/*OL dropdown*/
		if($("#rd_cal_capital_ol").prop("checked") == true){
			$("#sl_menu3_insurance_premium_ol option[value!='NONE']").remove();
			/*ใส่ข้อมูล dropdown*/
			$("#sl_menu3_insurance_premium_ol").append($("#dd_capital_OL").val());
			
			$("#tr_calPremium_OL1>td>label").text("ตารางทุนประกัน");
			$("#tr_calPremium_OL2>td>label").text("นำเข้า SA_Rate");
			
		}else if($("#rd_cal_insurance_ol").prop("checked") == true){
			$("#sl_menu3_insurance_premium_ol option[value!='NONE']").remove();
			/*ใส่ข้อมูล dropdown*/
			$("#sl_menu3_insurance_premium_ol").append($("#dd_insurance_premium_OL").val());
			
			$("#tr_calPremium_OL1>td>label").text("ตารางเบี้ยประกัน");
			$("#tr_calPremium_OL2>td>label").text("นำเข้า PM_Rate");
		}
		
		/*เช็คค่าเบี้ยมาตรฐานทั้งหมด */
		if(obj_CP.table_insurance_premium.length > 0 || obj_CP.prem_disc == true || obj_CP.table_Dis_Sa.length > 0 || obj_CP.per_policy_prem != "0.0000"){	// แก้ไขเนื่องจากเปลี่ยน หน้าจอเพื่อให้ทำงานต่อได้่

			$("#ch_standard_premium_ol").prop("checked", true);
			$("#ch_importInsurance_ol").prop("disabled", false);

			/*dropdown*/
			if(obj_CP.select_insurance_premium.length > 0){
				for (i in obj_CP.select_insurance_premium) {
					var obj_CP_select_insurance_premium = obj_CP.select_insurance_premium[i];
					if(obj_CP_select_insurance_premium.pass == 26){
						var dd_text = obj_CP_select_insurance_premium.text;
					}
				}
			}else if(obj_CP.select_cal_Premiums.length > 0){
				for (i in obj_CP.select_cal_Premiums) {
					var obj_CP_select_cal_Premiums = obj_CP.select_cal_Premiums[i];
					if(obj_CP_select_cal_Premiums.pass == 29){
						var dd_text = obj_CP_select_cal_Premiums.text;
					}
				}
			}
			/*คำนวณทุนจากเบี้ยประกัน*/
			/*if(obj_CP.select_cal_Premiums.length > 0){
				var obj_select_cal_Premium = obj_CP.select_cal_Premiums[0];
				$("#sl_menu3_insurance_premium_ol").prop("disabled", false);
					$("#sl_menu3_insurance_premium_ol option").each(function(){
						//alert($(this).attr("data-subcat")+">>"+obj_select_cal_Premium.subcat);
						if($(this).attr("data-subcat") == obj_select_cal_Premium.subcat){
							$(this).attr("selected", "selected");
						}
					});
			}*/

			$("#rd_cal_insurance_ol").prop("disabled", false);
			$("#sl_menu3_insurance_premium_ol").prop("disabled", false);
			$("#sl_menu3_insurance_premium_ol option:contains("+dd_text+")").attr("selected", "selected");
			
			/*มีส่วนลดเบี้ยประกัน*/
			if(obj_CP.prem_disc == true){
				$("#ch_importInsurance_ol").prop("checked", true);
				$("#discountInsurancePremiumsSta_ol").val(parseFloat(obj_CP.prem_min*100).toFixed(2));
				$("#discountInsurancePremiumsTo_ol").val(parseFloat(obj_CP.prem_max*100).toFixed(2));
				$("#discountInsurancePremiumsSta_ol").attr("disabled",false);
				$("#discountInsurancePremiumsTo_ol").attr("disabled",false);
			}else{
				$("#ch_importInsurance_ol").prop("checked", false);
			}
			
			if(obj_CP.table_insurance_premium.length > 0){			
				$("#addrowPM_Rate_OL, #delrowPM_Rate_OL").prop("disabled", false);
				
				var dd_value = $("#sl_menu3_insurance_premium_ol option:selected").val();
				var select_text = jQuery.trim($("#sl_menu3_insurance_premium_ol option:selected").text());
				var lastID = 0;
				var select_type = 0;

				if(select_text == 'ตามแผนความคุ้มครอง'){
					select_type = 1;
				}else if(select_text == 'ต่อทุน 10,000 บาท'){
					select_type = 2;
				}else if(select_text == 'ต่อทุน 100,000 บาท'){
					select_type = 3;
				}else if(select_text == 'กลุ่มรายเดือน Industrial'){
					select_type = 41;
				}else if(select_text == 'กลุ่มรายงวด Tax Minus'){
					select_type = 41;
				}

				var row_id_EM = 1
				var row_id_CV = 1
				for (i in obj_CP.table_insurance_premium) {
					
					var obj_CP_table_insurance_premium = obj_CP.table_insurance_premium[i];
					/*var type = obj_CP_table_insurance_premium.file.replace(dd_value,"");
						type = type.replace("_"+bcode+".txt","");	*/
					var type = obj_CP_table_insurance_premium.sub_code;
					
					var file_name_insurance_premium = obj_CP_table_insurance_premium.file;
					if(typeClone == "Clone"){
						file_name_insurance_premium = obj_CP_table_insurance_premium.file.replace(cov_code_temp,new_cov_code)
					}
					
					if(obj_CP_table_insurance_premium.type == ""){
						lastID++;
						var new_row = "<tr id='tbody_PM_Rate_OL"+lastID+"' data-id='"+lastID+"' data-level='1'>"+
									  "<td class='text-center borderBlack' id='imgOK_OL_"+lastID+"' width='33px' onclick='imgCheckbox(this.id);' style='vertical-align: middle;'><i class='glyphicon glyphicon-edit'></i></td>"+
									  "<td class='borderBlack'>" +
									  "<select class='form-control sl_STD_PM_Rate' id='sl_PM_Type_OL"+lastID+"' onchange=\"check_file_layout_OL(this.id,'');\">"+
										"<option value='NONE'>None</option>"+
										"</select>" +
									  "</td>"+
									  "<td class='borderBlack'>"+
									  	"<div class='input-group'>"+
										"<input type='text' class='form-control' id='fileuploads_PMRateText"+lastID+"_OL' readonly='' value='"+file_name_insurance_premium+"'>"+ 
											"<label class='input-group-btn'>"+ 
											  "<span id='spanRate"+lastID+"_OL' class='btn btn-primary'>"+
											  "<font id='validate_rate"+lastID+"_OL' style='color: red; display: none;'>*</font>"+
											  	"..."+
											  		"<input id='fileuploads_PMRate"+lastID+"_OL' type='file' accept='text/plain' style='display: none;'>"+ 
											  "</span>"+
											 "</label>"+
										"</div>"+
										"<input type='hidden' id='rm_rateCat_OL"+lastID+"' value='"+obj_CP_table_insurance_premium.pass+"'>"+
										"<input type='hidden' id='rm_rateLayout_OL"+lastID+"' value='"+obj_CP_table_insurance_premium.layout+"'>"+
										"<input type='hidden' id='rm_fileID_OL"+lastID+"' value='"+obj_CP_table_insurance_premium.fileID+"'>"+
									  "</td>"+
									  "<td class='borderBlack'>"+
									 	"<a id='span_PM_Rateopen_OL_"+lastID+"' class='active_grey'>"+
											"<span class='glyphicon glyphicon-eye-open activecolorblue'></span>"+
										"</a>"+							 	
									 "</td>"+
									 "<td class='borderBlack'>"+
										 "<a id='span_PM_Ratedownload_OL_"+lastID+"' class='active_grey'>"+
											"<span class='glyphicon glyphicon-download-alt activecolorblue'></span>"+
										 "</a>"+
									 "</td>"+				
									"</tr>";
						$("#tb_PM_Rate1_OL tbody").append(new_row);
						
						/*********************************/
						/*add rate type*/
						var option_PMType = "";
						var PMType = $("#PMrate_type_OL").val();
							PMType = PMType.split(",");
						for(var j=0; j<PMType.length; j++){
							option_PMType += "<option value='"+PMType[j]+"'>"+PMType[j]+"</option>";	
						}	
						$("#sl_PM_Type_OL"+lastID).append(option_PMType);
						
						/*Age Specific*/			
						$("#sl_PM_Type_OL"+lastID+" option").each(function(){
							if($(this).val() == type){
								$(this).attr("selected", "selected");
							}
						});
						var rate_type = $("#sl_PM_Type_OL"+lastID+" option:selected").val();
						
						$("#fileuploads_PMRateText"+lastID+"_OL").attr("placeholder", dd_value+rate_type+"_"+bcode+".txt");				  	
						
						/*เบี้ยมาตรฐาน*/
						var rate_cat = "";
						if($("#rd_cal_insurance_ol").prop("checked") == true){
							rate_cat = $("#rateCat_tbStardard_OL").val();
						}else{
							rate_cat = $("#rateCat_capital_OL").val();
						}
						
						var layout_id  = $("#sl_menu3_insurance_premium_ol").find("option:selected").attr("data-layout");
						var uploadfile = "selectFileTXTMain_OL("+rate_cat+", 2,'fileuploads_PMRate"+lastID+"_OL',"+layout_id+",'','','"+dd_value+rate_type+"_"+bcode+"','','','span_PM_Rateopen_OL_"+lastID+"')";
						//var uploadfile = "selectFileRate_OL("+select_type+",'s','fileuploads_PMRate"+lastID+"_OL','"+dd_value+rate_type+"_"+bcode+"','','sl_menu3_insurance_premium_ol','span_PM_Rateopen_OL_"+lastID+"')";					
						$("#fileuploads_PMRate"+lastID+"_OL").attr('onchange', uploadfile);	
						
						/*เปิด-ปิดปุ่ม add row*/
						var num_dd = $("#tb_PM_Rate1_OL>tbody>tr[data-level='1']:first>td:nth-child(2) select>option[value!='NONE']").length;
						var numrow_tbl = $("#tb_PM_Rate1_OL>tbody>tr[data-level='1']").length;
						if(numrow_tbl == num_dd){
							$("#addrowPM_Rate_OL").attr("disabled", true);
						}else{
							$("#addrowPM_Rate_OL").attr("disabled", false);
						}
						
						
						/*get show file data*/
						/*var tbCal = "";
						var tbl_name = "";
						var modal_name = "";
						if(select_type == 1){
							tbCal = 61;
							tbl_name = "tbl_PMRatePlan_OL";
							modal_name = "modal_PMRateAuto_OL";
						}else if(select_type == 2){
							tbCal = 41;
							tbl_name = "tbl_PMRatePlan4Col_OL";
							modal_name = "modal_PMRate4Col_OL";
						}else if(select_type == 3){
							tbCal = 41;
							tbl_name = "tbl_PMRatePlan4Col_OL";
							modal_name = "modal_PMRate4Col_OL";
						}*/
						
						format_name = "PMRate_LayoutDet_OL_rateCat"+obj_CP_table_insurance_premium.pass+"_layout"+obj_CP_table_insurance_premium.layout;
						format_name_col = "PMRate_Cols_LayoutDet_OL_rateCat"+obj_CP_table_insurance_premium.pass+"_layout"+obj_CP_table_insurance_premium.layout;
						
						tbl_col = $("#"+format_name_col).val();
						
						$("#span_PM_Rateopen_OL_"+lastID+">span").attr("onclick", "openFileTextMain('"+file_name_insurance_premium+"','"+obj_CP_table_insurance_premium.ref+"',"+tbl_col+",'"+tbl_name+"','"+modal_cv+"','"+download_modal+"','"+format_name+"')");
						$("#span_PM_Ratedownload_OL_"+lastID+">span").attr("onclick", "openFile_target('"+file_name_insurance_premium+"','"+obj_CP_table_insurance_premium.ref+"','txt_download')");
						//$("#span_PM_Rateopen_OL_"+lastID+">span").attr("onclick", "openFileTextBasePlan_OL('"+file_name_insurance_premium+"','"+obj_CP_table_insurance_premium.ref+"',"+tbCal+",'"+tbl_name+"','"+modal_name+"')");
						//$("#span_PM_Ratedownload_OL_"+lastID+">span").attr("onclick", "openFile_target('"+file_name_insurance_premium+"','"+obj_CP_table_insurance_premium.ref+"','txt_download')");
						
						
						/************************************/
						var num_row = parseInt(i) + 1;

						if(response.Tab_cal_insurance_premiums[0].table_extra_Rate.length == 0 ){
							
							var row_extraRate = "<tr id='tbody_Extra_Rate_OL"+row_id_EM+"'>"+
							"<td class='borderBlack vertical-middle'><label>"+type+"</label></td>"+
							"<td class='borderBlack'>"+
							  	"<div class='input-group'>"+
								"<input type='text' class='form-control' id='fileuploads_ExtraRateText"+row_id_EM+"_OL' readonly>"+ 
									"<label class='input-group-btn'>"+ 
									  "<span id='spanExtraRate"+row_id_EM+"_OL' class='btn btn-primary' disabled>"+
									  	"<font id='validate_extrarate"+row_id_EM+"_OL' style='color: red;'>*</font>..."+
									  		"<input id='fileuploads_ExtraRate"+row_id_EM+"_OL' type='file' accept='text/plain' style='display: none;' disabled>"+ 
									  "</span>"+
									 "</label>"+
								"</div>"+
								"<input type='hidden' id='ext_rateCat_OL"+row_id_EM+"' value=''>"+
								"<input type='hidden' id='ext_rateLayout_OL"+row_id_EM+"' value=''>"+
								"<input type='hidden' id='ext_fileID_OL"+row_id_EM+"' value=''>"+
							 "</td>"+
							 "<td class='borderBlack'>"+
							 	"<a id='span_Extra_Rateopen_OL_"+row_id_EM+"' class='active_grey' disabled>"+
									"<span class='glyphicon glyphicon-eye-open activecolorgray' disabled></span>"+
								"</a>"+							 	
							 "</td>"+
							 "<td class='borderBlack'>"+
								 "<a id='span_Extra_Ratedownload_OL_"+row_id_EM+"' class='active_grey' disabled>"+
									"<span class='glyphicon glyphicon-download-alt activecolorgray' disabled></span>"+
								 "</a>"+
							"</td>"+
							"</tr>";								
							
							$("#tb_Extra_Rate_OL>tbody").append(row_extraRate);
							row_id_EM++;
							
						}
						
						/*ความเสี่ยงมาตรฐาน*/
						//if(response.Tab_table_policy_value[0].table_policy_value.length <= 0 && obj_CP_table_insurance_premium.type == ""){
						if(obj_CP_table_insurance_premium.type == ""){
															
							var new_riskStardard = "<tr id='tbody_Rate_Value_OL"+row_id_CV+"' data-id='"+row_id_CV+"' data-level='1'>"+
							  "<td class='borderBlack vertical-middle'><label>"+type+"</label></td>"+
							  "<td class='borderBlack'>"+
							  	"<div class='input-group'>"+
								"<input type='text' class='form-control' id='fileuploads_RateValueText"+row_id_CV+"_OL' readonly=''>"+ 
									"<label class='input-group-btn'>"+ 
									  "<span id='spanRateValue"+row_id_CV+"_OL' class='btn btn-primary'>..."+
									  	/*"<font id='validate_RateValue"+num_row+"_CL' style='color: red;'>*</font>..."+*/
									  		"<input id='fileuploads_RateValue"+row_id_CV+"_OL' type='file' accept='text/plain' style='display: none;'>"+ 
									  "</span>"+
									 "</label>"+
								"</div>"+
								"<input type='hidden' id='cv_rateCat_OL"+row_id_CV+"' value=''>"+
								"<input type='hidden' id='cv_rateLayout_OL"+row_id_CV+"' value=''>"+
								"<input type='hidden' id='cv_fileID_OL"+row_id_CV+"' value=''>"+	
							  "</td>"+
							  "<td class='borderBlack'>"+
							 	"<a id='span_RateValueopen_OL_"+row_id_CV+"' class='active_grey' disabled>"+
									"<span class='glyphicon glyphicon-eye-open activecolorgray' disabled></span>"+
								"</a>"+							 	
							 "</td>"+
							 "<td class='borderBlack'>"+
								 "<a id='span_RateValuedownload_OL_"+row_id_CV+"' class='active_grey' disabled>"+
									"<span class='glyphicon glyphicon-download-alt activecolorgray' disabled></span>"+
								 "</a>"+
							 "</td>"+				
							"</tr>";
							
							$("#tb_RateValue1_OL tbody").append(new_riskStardard);
							row_id_CV++;
						}
						
					}else{
						/*************age band**************/
						var band_val = obj_CP_table_insurance_premium.type;
							type = obj_CP_table_insurance_premium.sub_code;

						$("#tb_PM_Rate1_OL tbody>tr[data-level='1']").each(function(){
							var main_type = $(this).find("td:nth-child(2) select>option:selected").val();
							if(type == main_type){
								lastSubID++;
								var main_id = $(this).attr("data-id");
								var num_child = $("#tb_PM_Rate1_OL tbody>tr[data-group='"+main_id+"']").length;
								if(num_child <= 0){
									var lastSubID = 1;
								}else{
									var lastSubID = Number(num_child+1);
								}
								
								var thisID_Sub = main_id+"_"+lastSubID;	
								
								var new_row = "<tr id='tbody_PM_Rate_OL"+thisID_Sub+"' data-id='"+thisID_Sub+"' data-group='"+main_id+"' data-level='2'>"+
								  "<td class='borderBlack' style='background-color: gray;'><input type='hidden' id='hidden_type"+thisID_Sub+"' value='"+type+"'></td>"+
								  "<td class='borderBlack vertical-middle'><label>"+band_val+"</label></td>"+
								  "<td class='borderBlack'>"+
								  	"<div class='input-group'>"+
									"<input type='text' class='form-control' id='fileuploads_PMRateText"+thisID_Sub+"_OL' readonly='' value='"+file_name_insurance_premium+"'>"+ 
										"<label class='input-group-btn'>"+ 
										  "<span id='spanRate"+thisID_Sub+"_OL' class='btn btn-primary'>"+
										  "<font id='validate_rate"+thisID_Sub+"_OL' style='color: red; display: none;'>*</font>"+
										  	"..."+
										  		"<input id='fileuploads_PMRate"+thisID_Sub+"_OL' type='file' accept='text/plain' style='display: none;'>"+ 
										  "</span>"+
										 "</label>"+
										 "</div>"+
									"<input type='hidden' id='rm_rateCat_OL"+thisID_Sub+"' value='"+obj_CP_table_insurance_premium.pass+"'>"+
									"<input type='hidden' id='rm_rateLayout_OL"+thisID_Sub+"' value='"+obj_CP_table_insurance_premium.layout+"'>"+
									"<input type='hidden' id='rm_fileID_OL"+thisID_Sub+"' value='"+obj_CP_table_insurance_premium.fileID+"'>"+
									
								  "</td>"+			 
								  "<td class='borderBlack'>"+
								 	"<a id='span_PM_Rateopen_OL_"+thisID_Sub+"' class='active_grey'>"+
										"<span class='glyphicon glyphicon-eye-open activecolorblue'></span>"+
									"</a>"+							 	
								 "</td>"+
								 "<td class='borderBlack'>"+
									 "<a id='span_PM_Ratedownload_OL_"+thisID_Sub+"' class='active_grey'>"+
										"<span class='glyphicon glyphicon-download-alt activecolorblue'></span>"+
									 "</a>"+
								"</td>"+
								"</tr>";
								
								/*ความเสี่ยงมาตฐาน Age band*/
								/*if(response.Tab_table_policy_value[0].table_policy_value.length <= 0 && obj_CP_table_insurance_premium.type != ""){*/
								if(obj_CP_table_insurance_premium.type != ""){
									var new_riskStardard = "<tr id='tbody_Rate_Value_OL"+thisID_Sub+"' data-id='"+thisID_Sub+"' data-group='"+main_id+"' data-level='2'>"+
									  "<td class='borderBlack vertical-middle'><label>"+band_val+"</label></td>"+
									  "<td class='borderBlack'>"+
									  	"<div class='input-group'>"+
										"<input type='text' class='form-control' id='fileuploads_RateValueText"+thisID_Sub+"_OL' readonly=''>"+ 
											"<label class='input-group-btn'>"+ 
											  "<span id='spanRateValue"+thisID_Sub+"_OL' class='btn btn-primary'>..."+
											  	/*"<font id='validate_RateValue"+thisID_Sub+"_CL' style='color: red;'>*</font>..."+*/
											  		"<input id='fileuploads_RateValue"+thisID_Sub+"_OL' type='file' accept='text/plain' style='display: none;'>"+ 
											  "</span>"+
											 "</label>"+
										"</div>"+
										  "<input type='hidden' id='cv_rateCat_OL"+thisID_Sub+"' value=''>"+
										"<input type='hidden' id='cv_rateLayout_OL"+thisID_Sub+"' value=''>"+
										"<input type='hidden' id='cv_fileID_OL"+thisID_Sub+"' value=''>"+	
									  "</td>"+
									  "<td class='borderBlack'>"+
									 	"<a id='span_RateValueopen_OL_"+thisID_Sub+"' class='active_grey' disabled>"+
											"<span class='glyphicon glyphicon-eye-open activecolorgray' disabled></span>"+
										"</a>"+							 	
									 "</td>"+
									 "<td class='borderBlack'>"+
									 	"<a id='span_RateValuedownload_OL_"+thisID_Sub+"' class='active_grey' disabled>"+
											"<span class='glyphicon glyphicon-download-alt activecolorgray' disabled></span>"+
										 "</a>"+
									 "</td>"+				
									"</tr>";

								}	
								
								if(num_child <=0){
									$(new_row).insertAfter("#tbody_PM_Rate_OL"+main_id);
									$(new_riskStardard).insertAfter("#tbody_Rate_Value_OL"+main_id);
								}else{
									$(new_row).insertAfter("#tb_PM_Rate1_OL tbody>tr[data-group='"+main_id+"']:last");
									$(new_riskStardard).insertAfter("#tb_RateValue1_OL tbody>tr[data-group='"+main_id+"']:last");
								}

								/*****************************/
								/*Age Band*/
								var rate_type = $("#tbody_PM_Rate_OL"+thisID_Sub).attr("data-group");
									rate_type = $("#tbody_PM_Rate_OL"+rate_type).find("td:nth-child(2) select>option:selected").val();
								
								var age_band = $("#tbody_PM_Rate_OL"+thisID_Sub).find("td:nth-child(2) label").text();	
								$("#fileuploads_PMRateText"+thisID_Sub+"_OL").attr("placeholder", dd_value+rate_type+"_"+age_band+"_"+bcode+".txt");				  	
								
								var rate_cat_sub = "";
								if($("#rd_cal_insurance_ol").prop("checked") == true){
									rate_cat_sub = $("#rateCat_tbStardard_age_OL").val();
								}else{
									rate_cat_sub = $("#rateSubCat_capital_OL").val();
								}
								
								var layout_id_sub = $("#sl_menu3_insurance_premium_ol option:selected").attr("data-layoutsub");
								var uploadfile_sub = "selectFileTXTMain_OL("+rate_cat_sub+", 3,'fileuploads_PMRate"+thisID_Sub+"_OL',"+layout_id_sub+",'','','"+dd_value+rate_type+"_"+age_band+"_"+bcode+"','','','span_PM_Rateopen_OL_"+thisID_Sub+"')";
								//var uploadfile = "selectFileRate_OL("+select_type+",'b','fileuploads_PMRate"+thisID_Sub+"_OL','"+dd_value+rate_type+"_"+age_band+"_"+bcode+"','','sl_menu3_insurance_premium_ol','span_PM_Rateopen_OL_"+thisID_Sub+"')";					
								$("#fileuploads_PMRate"+thisID_Sub+"_OL").attr('onchange', uploadfile_sub);	
								/*****************************/
									
								/*get show file data*/
								/*var tbCal = "";
								var tbl_name = "";
								var modal_name = "";
								if(select_type == 1){
									tbCal = 61;
									tbl_name = "tbl_PMRatePlan_OL";
									modal_name = "modal_PMRateAuto_OL";
								}else if(select_type == 2){
									tbCal = 41;
									tbl_name = "tbl_PMRatePlan4Col_OL";
									modal_name = "modal_PMRate4Col_OL";
								}else if(select_type == 3){
									tbCal = 41;
									tbl_name = "tbl_PMRatePlan4Col_OL";
									modal_name = "modal_PMRate4Col_OL";
								}*/

								format_name = "PMRate_LayoutDet_OL_rateCat"+obj_CP_table_insurance_premium.pass+"_layout"+obj_CP_table_insurance_premium.layout;
								format_name_col = "PMRate_Cols_LayoutDet_OL_rateCat"+obj_CP_table_insurance_premium.pass+"_layout"+obj_CP_table_insurance_premium.layout;
								
								tbl_col = $("#"+format_name_col).val();
								
								$("#span_PM_Rateopen_OL_"+thisID_Sub+">span").attr("onclick", "openFileTextMain('"+file_name_insurance_premium+"','"+obj_CP_table_insurance_premium.ref+"',"+tbl_col+",'"+tbl_name+"','"+modal_cv+"','"+download_modal+"','"+format_name+"')");
								$("#span_PM_Ratedownload_OL_"+thisID_Sub+">span").attr("onclick", "openFile_target('"+file_name_insurance_premium+"','"+obj_CP_table_insurance_premium.ref+"','txt_download')");
								
								//$("#span_PM_Rateopen_OL_"+thisID_Sub+">span").attr("onclick", "openFileTextBasePlan_OL('"+file_name_insurance_premium+"','"+obj_CP_table_insurance_premium.ref+"',"+tbCal+",'"+tbl_name+"','"+modal_name+"')");
								//$("#span_PM_Ratedownload_OL_"+thisID_Sub+">span").attr("onclick", "openFile_target('"+file_name_insurance_premium+"','"+obj_CP_table_insurance_premium.ref+"','txt_download')");
								
								
							}
						
						});								
					}

				}
				
				//$("#tb_PM_Rate1>tbody>tr:first-child").remove();
			}
			
			
			/*if(obj_CP.tb_cal_Premiums.length > 0){	
				var obj_select_cal_Premium = obj_CP.select_cal_Premiums[0];
				var obj_cal_Premium = obj_CP.tb_cal_Premiums[0];
				$("#input_file_3_OL").val(obj_cal_Premium.file);
				$("#capital_rateCat3_OL").val(obj_select_cal_Premium.pass);
				$("#capital_rateLayout3_OL").val(obj_cal_Premium.layout);
				$("#capital_fileID3_OL").val(obj_cal_Premium.fileID);
				
				$("#spanBox3_OL").attr("disabled", false);
				$("#select_file_3_OL, #capital_Input_ol").prop("disabled", false);
			}*/
			
			if(obj_CP.table_Dis_Sa.length > 0){	
				var obj_SA = obj_CP.table_Dis_Sa[0];
				//var fileName_sa = obj_CP.table_capital_decrease[0].file;
				var fileName_sa = obj_SA.file;
				if(typeClone == "Clone"){
					fileName_sa = obj_SA.file.replace(cov_code_temp,new_cov_code)
				}
				
				format_name = "DisSARate_LayoutDet_OL_rateCat"+obj_SA.pass+"_layout"+obj_SA.layout;
				format_name_col = "DisSARate_Cols_LayoutDet_OL_rateCat"+obj_SA.pass+"_layout"+obj_SA.layout;
				
				tbl_col = $("#"+format_name_col).val();
				
				$("#input_fileCal_3_OL").val(obj_SA.file);
				$("#dsc_rateLayout3_OL").val(obj_SA.layout);
				$("#dsc_fileID3_OL").val(obj_SA.fileID);
				//$("#dsc_Input_ol").attr("onclick", "openFileTextBasePlan_OL('"+fileName_sa+"','"+obj_SA.ref+"',52,'tb_inputDisSA_OL_Rate','modal_inputDisSA_OL_Rate')");
				$("#dsc_Input_ol").attr("onclick", "openFileTextMain('"+fileName_sa+"','"+obj_SA.ref+"',"+tbl_col+",'"+tbl_name+"','"+modal_cv+"','"+download_modal+"','"+format_name+"')");
			}
			
			if(obj_CP.per_policy_prem != "0.0000"){
				var per_policy_prem = Comma(parseFloat(obj_CP.per_policy_prem).toFixed(2))
				//console.log(Comma(parseFloat(obj_CP.per_policy_prem).toFixed(2)));
				$("#expenses_pension_ol").val(per_policy_prem);
			}
			
			$("#rd_cal_capital_ol").prop("disabled", false);
			$("#spanBoxCal3_OL").attr("disabled", false);
			$("#select_fileCal_3_OL").prop("disabled", false);
			if($("#input_fileCal_3_OL").val() != ""){
				$("#dsc_Input_ol").prop("disabled", false);
			}
			$("#expenses_pension_ol").prop("disabled", false);

		}

		/*เบี้ยเพิ่มพิเศษ*/
		//if(obj_CP.select_extra_Rate.length > 0 || obj_CP.table_extra_Rate.length > 0 || (obj_CP.min_EM != "0.0000" && obj_CP.max_EM != "0.0000")){
		if(obj_CP.is_substd == true){
			$("#ch_insurance_premium_Extra_ol").prop("checked", true);
			
			/*dropdown*/
			if(obj_CP.select_extra_Rate.length > 0){
				for (i in obj_CP.select_extra_Rate) {
					var obj_CP_select_extra_Rate = obj_CP.select_extra_Rate[i];
					if(obj_CP_select_extra_Rate.pass == 1){
						var dd_text = obj_CP_select_extra_Rate.text;
					}
				}
			}else{
				var dd_text = "None";			
			}
			
			$("#sl_insurance_premium_Extra_ol").prop("disabled", false);
			$("#sl_insurance_premium_Extra_ol option:contains("+dd_text+")").attr("selected", "selected");
			
			/*ตาราง*/
			if(obj_CP.table_extra_Rate.length > 0){	
				var dd_value = $("#sl_insurance_premium_Extra_ol option:selected").val();
				//var aa = lastID;
				var aa = 1;
				
				for (i in obj_CP.table_extra_Rate){
					var obj_extraRate = obj_CP.table_extra_Rate[i];
					var type = "";
					if(obj_CP.table_extra_Rate.length > 0){
						/*type = obj_extraRate.file.replace(dd_value,"");
						type = type.replace("_"+bcode+".txt","");*/
						type = obj_extraRate.sub_code;
					}else{
						type = "None";
					}
					
					/*file*/
					var filename = "";
					if(obj_CP.table_extra_Rate.length > 0){
						if(typeClone == "Clone"){
							filename = obj_extraRate.file.replace(cov_code_temp,new_cov_code)
						}else{
							filename = obj_extraRate.file;
						}
					}else{
						filename = "";
					}
							
					var row_extra = "<tr id='tbody_Extra_Rate_OL"+aa+"'>"+
					"<td class='borderBlack vertical-middle'><label>"+type+"</label></td>"+
					"<td class='borderBlack'>";
					if(filename != ""){
						row_extra += "<div class='input-group'>"+
						"<input type='text' class='form-control' id='fileuploads_ExtraRateText"+aa+"_OL' value='"+filename+"' readonly>"+ 
							"<label class='input-group-btn'>"+ 
							  "<span id='spanExtraRate"+aa+"_OL' class='btn btn-primary'>"+
							  "<font id='validate_extrarate"+aa+"_OL' style='color: red; display: none;'>*</font>"+
							  	"..."+
							  		"<input id='fileuploads_ExtraRate"+aa+"_OL' type='file' accept='text/plain' style='display: none;'>"+ 
							  "</span>"+
							 "</label>"+
						"</div>"+
						"<input type='hidden' id='ext_rateCat_OL"+aa+"' value='"+obj_extraRate.pass+"'>"+
						"<input type='hidden' id='ext_rateLayout_OL"+aa+"' value='"+obj_extraRate.layout+"'>"+
						"<input type='hidden' id='ext_fileID_OL"+aa+"' value='"+obj_extraRate.fileID+"'>"+
						"</td>"+
						 "<td class='borderBlack'>"+
						 	"<a id='span_Extra_Rateopen_OL_"+aa+"' class='active_grey'>"+
								"<span class='glyphicon glyphicon-eye-open activecolorblue'></span>"+
							"</a>"+							 	
						 "</td>"+
						 "<td class='borderBlack'>"+
							 "<a id='span_Extra_Ratedownload_OL_"+aa+"' class='active_grey'>"+
								"<span class='glyphicon glyphicon-download-alt activecolorblue'></span>"+
							 "</a>"+
						"</td>"+
						"</tr>";
					}else{
						row_extra += "<div class='input-group'>"+
						"<input type='text' class='form-control' id='fileuploads_ExtraRateText"+aa+"_OL' readonly>"+ 
						"<label class='input-group-btn'>"+ 
						  "<span id='spanExtraRate"+aa+"_OL' class='btn btn-primary' disabled>"+
						  	"<font id='validate_extrarate"+aa+"_OL' style='color: red;'>*</font>..."+
						  		"<input id='fileuploads_ExtraRate"+aa+"_OL' type='file' accept='text/plain' style='display: none;'>"+ 
						  "</span>"+
						 "</label>"+
						 "</div>"+
						 "<input type='hidden' id='ext_rateCat_OL"+aa+"' value='"+obj_extraRate.pass+"'>"+
						 "<input type='hidden' id='ext_rateLayout_OL"+aa+"' value='"+obj_extraRate.layout+"'>"+
						 "<input type='hidden' id='ext_fileID_OL"+aa+"' value='"+obj_extraRate.fileID+"'>"+
						"</td>"+
						 "<td class='borderBlack'>"+
						 	"<a id='span_Extra_Rateopen_OL_"+aa+"' class='active_grey'>"+
								"<span class='glyphicon glyphicon-eye-open activecolorgray'></span>"+
							"</a>"+							 	
						 "</td>"+
						 "<td class='borderBlack'>"+
							 "<a id='span_Extra_Ratedownload_OL_"+aa+"' class='active_grey'>"+
								"<span class='glyphicon glyphicon-download-alt activecolorgray'></span>"+
							 "</a>"+
						"</td>"+
						"</tr>";
					}
					  												
					$("#tb_Extra_Rate_OL>tbody").append(row_extra);
					$("#tb_Extra_Rate_OL").attr("disabled", false);
					
					/*insert pattern for new upload*/		
					var file_layout = dd_value+type+"_"+bcode;
					var rate_cat = obj_extraRate.pass;
					var layout_id  = obj_extraRate.layout;
					var uploadfile = "selectFileTXTMain_OL("+rate_cat+", 4,'fileuploads_ExtraRate"+aa+"_OL',"+layout_id+",'','','"+file_layout+"','','','span_Extra_Rateopen_OL_"+aa+"')";
					//var uploadfile = "selectFileRate_OL(4,'b','fileuploads_ExtraRate"+aa+"_OL','"+file_layout+"','','sl_insurance_premium_Extra_ol','span_Extra_Rateopen_OL_"+aa+"')";
					
					$("#fileuploads_ExtraRateText"+aa+"_OL").attr("placeholder",file_layout+".txt");
					$("#fileuploads_ExtraRate"+aa+"_OL").attr("onchange",uploadfile);
					/*end insert*/
					
					//Khwan Fix new get layout
					format_name = "ExtraRate_LayoutDet_OL_rateCat"+obj_extraRate.pass+"_layout"+obj_extraRate.layout;
					format_name_col = "ExtraRate_Cols_LayoutDet_OL_rateCat"+obj_extraRate.pass+"_layout"+obj_extraRate.layout;
					
					tbl_col = $("#"+format_name_col).val();

					//var getShowFileExtraRate_OL = "openFileTextBasePlan_OL('"+filename+"','"+obj_extraRate.ref+"',51,'tbl_ExtraRatePlan_OL','modal_ExtraRate_OL')";
					var getShowFileExtraRate_OL = "openFileTextMain('"+filename+"','"+obj_extraRate.ref+"',"+tbl_col+",'"+tbl_name+"','"+modal_cv+"','"+download_modal+"','"+format_name+"')";
					$("#span_Extra_Rateopen_OL_"+aa+">span").attr("onclick", getShowFileExtraRate_OL);
					$("#span_Extra_Ratedownload_OL_"+aa+">span").attr("onclick", "openFile_target('"+filename+"','"+obj_extraRate.ref+"','txt_download')");
					
					if(filename != ""){
						$("#tb_Extra_Rate_OL *").attr("disabled", false);	
					}else{
						$("#tb_Extra_Rate_OL *").attr("disabled", true);	
					}
					
					aa++;
					
				}
				
			}
				
			/*EM*/				
				if(obj_CP.min_EM != ""){
					$("#min_EM_ol").val((obj_CP.min_EM*100).toFixed(2));
					$("#min_EM_ol").prop("disabled", false);					
				}
				
				if(obj_CP.max_EM != ""){
					$("#max_EM_ol").val((obj_CP.max_EM*100).toFixed(2));
					$("#max_EM_ol").prop("disabled", false);
				}
				
				if(obj_CP.max_EM == "0.0000"  || obj_CP.max_EM == "0"){
					$("#spanBoxCal1_OL").prop("disabled", true);
					$("#select_fileCal_1_OL, #cv_InputExtra_Rate_ol").prop("disabled", true);
				}else{
					$("#spanBoxCal1_OL").prop("disabled", false);
					$("#select_fileCal_1_OL, #cv_InputExtra_Rate_ol").prop("disabled", false);
				}	
				
				var obj_EM = obj_CP.em_Age[0];
				
				if(obj_CP.em_Age.length > 0){
					var fileName_EM = obj_EM.file
					if(typeClone == "Clone"){
						fileName_EM = obj_EM.file.replace(cov_code_temp,new_cov_code)
					}
					
					//Khwan Fix get new layout
					format_name = "EMRate_LayoutDet_OL_rateCat"+obj_EM.pass+"_layout"+obj_EM.layout;
					format_name_col = "EMRate_Cols_LayoutDet_OL_rateCat"+obj_EM.pass+"_layout"+obj_EM.layout;
					
					tbl_col = $("#"+format_name_col).val();
					
					$("#input_fileCal_1_OL").val(fileName_EM);
					if(obj_EM.file != ""){
						$("#validate_filerate1_OL").css("display","none");
						$("#spanBoxCal1_OL").attr("disabled", false);
						$("#cv_InputExtra_Rate_ol").prop("disabled", false);
						$("#select_fileCal_1_OL").attr("disabled", false);
						//$("#cv_InputExtra_Rate_ol").attr("onclick", "openFileTextBasePlan_OL('"+fileName_EM+"','"+obj_EM.ref+"',3,'tb_inputExtra_RateView_OL','modal_inputExtra_RateView_OL')");
						$("#cv_InputExtra_Rate_ol").attr("onclick", "openFileTextMain('"+fileName_EM+"','"+obj_EM.ref+"',"+tbl_col+",'"+tbl_name+"','"+modal_cv+"','"+download_modal+"','"+format_name+"')");
					}
				}else{
					$("#input_fileCal_1_OL").val("");
				}
				
				if(obj_CP.em_Age.length > 0){
					$("#em_rateLayout1_OL").val(obj_EM.layout);
					$("#em_fileID1_OL").val(obj_EM.fileID);

				}else{
					var tb_em_hidden =
						"<input type='hidden' id='em_rateLayout1_OL' value=''>"+
						"<input type='hidden' id='em_fileID1_OL' value=''>";

					$("#div_fileCal1_OL").append(tb_em_hidden);
				}
	
			}
		
		/*ทุนคุ้มครองที่ลดลง*/
		if(obj_CP.is_sa_decr == true){
		//if(obj_CP.table_capital_decrease.length > 0){	
			$("#ch_Reduced_capital_ol").prop("checked", true);
			
			/*dropdown*/
			for (i in obj_CP.select_capital_decrease) {
				var obj_CP_select_capital_decrease = obj_CP.select_capital_decrease[i];
				if(obj_CP_select_capital_decrease.pass == 1){
					var dd_text = obj_CP_select_capital_decrease.text;
				}
			}
		
			$("#sl_Reduced_capital_Cal2_OL").prop("disabled", false);
			$("#sl_Reduced_capital_Cal2_OL option:contains("+dd_text+")").attr("selected", "selected");
			
			
			var sl_SA = $("#sl_Reduced_capital_Cal2_OL option:selected").val();
			var rate_cat_SA = $("#sl_Reduced_capital_Cal2_OL option:selected").attr("data-ratecat");
			var rate_layout_SA = $("#sl_Reduced_capital_Cal2_OL option:selected").attr("data-layout");
			var type_SA = sl_SA+bcode+".txt";
			
			selectTypeCal_OL(type_SA,2,rate_cat_SA,rate_layout_SA);
			
			var fileName_capital_decrease = "";;
			if(typeClone == "Clone"){
				fileName_capital_decrease = obj_CP.table_capital_decrease[0].file.replace(cov_code_temp,new_cov_code)
			}else{
				fileName_capital_decrease = obj_CP.table_capital_decrease[0].file;
			}
			
			$("#input_fileCal_2_OL").val(fileName_capital_decrease);
			if(obj_CP.table_capital_decrease[0].file != ""){
				$("#validate_filerate2_OL").css("display","none");
			}
			$("#select_fileCal_2_OL, #spanBoxCal2_OL, #cv_SAExtra_Rate_ol").attr("disabled", false);
			
			/*file*/		
			var tb_decrease_hidden = "<input type='hidden' id='decrease_rateCat2_OL' value='"+obj_CP.table_capital_decrease[0].pass+"'>"+
				"<input type='hidden' id='decrease_rateLayout2_OL' value='"+obj_CP.table_capital_decrease[0].layout+"'>"+
				"<input type='hidden' id='decrease_fileID2_OL' value='"+obj_CP.table_capital_decrease[0].fileID+"'>";
			
			$("#div_fileCal2_OL").append(tb_decrease_hidden);
			
			/*get show file data*/
			format_name = "SARate_LayoutDet_OL_rateCat"+obj_CP.table_capital_decrease[0].pass+"_layout"+obj_CP.table_capital_decrease[0].layout;
			format_name_col = "SARate_Cols_LayoutDet_OL_rateCat"+obj_CP.table_capital_decrease[0].pass+"_layout"+obj_CP.table_capital_decrease[0].layout;
			
			tbl_col = $("#"+format_name_col).val();
			
			//$("#cv_SAExtra_Rate_ol").attr("onclick", "openFileTextBasePlan_OL('"+fileName_capital_decrease+"','"+obj_CP.table_capital_decrease[0].ref+"',31,'tb_inputSA_OL_Rate','modal_inputSA_OL_Rate')")
			$("#cv_SAExtra_Rate_ol").attr("onclick", "openFileTextMain('"+fileName_capital_decrease+"','"+obj_CP.table_capital_decrease[0].ref+"',"+tbl_col+",'"+tbl_name+"','"+modal_cv+"','"+download_modal+"','"+format_name+"')")
		}	
		
}
function showcase_PolicyValue_OL(response,typeClone,cov_code_temp,new_cov_code){
	var obj_PV = response.Tab_table_policy_value[0];
	var bcode = $("#pass_Insurance_coverage_ol").val();
	
	tbl_name = "tbl_ModalMain_OL";
	modal_cv = "ModalMain_OL";
	download_modal = "download_tbl_ModalMain_OL";
	
	/*กรณีเลือกคำนวณทุนจากเบี้ยประกันไว้*/
	//addRowPM_Rate_OL();
	
	/*ความเสี่ยงมาตรฐาน*/
	if(obj_PV.table_policy_value.length > 0){
		$("#cbBox1_OL").prop("checked", true);
		$("#cbBox1_OL").prop("disabled", false);
		/*dropdown*/
		for (i in obj_PV.select_policy_value) {
			var obj_PV_select_policy_value = obj_PV.select_policy_value[i];
			if(obj_PV_select_policy_value.pass == 1){
				var dd_text = obj_PV_select_policy_value.text;
			}
		}
		
		$("#dbBox1_OL").prop("disabled", false);
		$("#dbBox1_OL option:contains("+dd_text+")").attr("selected", "selected");
		$("#validate_dd_file1_OL").hide();
		
		/*place holder*/
		var dd_value = $("#dbBox1_OL option:selected").val();
		var dd_split = dd_value.split(",");
		if(dd_split.length > 1){
			var dd_pattern1 = dd_split[0];
			var dd_pattern2 = dd_split[1];
		}else{
			var dd_pattern1 = dd_split[0];
			var dd_pattern2 = "";
		}
		
		/*Age Specific*/
		$("#tb_RateValue1_OL tbody>tr[data-level='1']").each(function(){
			var lastID = $(this).attr("id");
				lastID = lastID.replace("tbody_Rate_Value_OL","");
			var rate_type = $(this).find("td:nth-child(1) label").text();

			var placeholder = "";
			var uploadfile = "";
			var rate_cat = $("#cv_rate_Agespecific_OL").val();
			var layout_id_select  = $("#dbBox1_OL").find("option:selected").attr("data-layout");
			var layout_id_split = layout_id_select.split(",");
			if(layout_id_split.length > 1){
				layout_id1 = layout_id_split[0];
				layout_id2 = layout_id_split[1];
			}else{
				layout_id1 = layout_id_select;
				layout_id2 = "''";
			}
			
			if(dd_split.length > 1){
				placeholder = dd_pattern1+rate_type+"_"+bcode+".txt หรือ "+dd_pattern2+rate_type+"_"+bcode+".txt";
				//uploadfile = "selectFileRate_OL(5,'s','fileuploads_RateValue"+lastID+"_OL','"+dd_pattern1+rate_type+"_"+bcode+"','"+dd_pattern2+rate_type+"_"+bcode+"','dbBox1_OL','span_RateValueopen_OL_"+lastID+"')";	
				uploadfile = "selectFileTXTMain_OL("+rate_cat+", 8,'fileuploads_RateValue"+lastID+"_OL',"+layout_id1+","+layout_id2+",'','"+dd_pattern1+rate_type+"_"+bcode+"','"+dd_pattern2+rate_type+"_"+bcode+"','','span_RateValueopen_OL_"+lastID+"')";
			}else{
				placeholder = dd_pattern1+rate_type+"_"+bcode+".txt";
				//uploadfile = "selectFileRate_OL(5,'s','fileuploads_RateValue"+lastID+"_OL','"+dd_pattern1+rate_type+"_"+bcode+"','','dbBox1_OL','span_RateValueopen_OL_"+lastID+"')";
				uploadfile = "selectFileTXTMain_OL("+rate_cat+", 8,'fileuploads_RateValue"+lastID+"_OL',"+layout_id1+","+layout_id2+",'','"+dd_pattern1+rate_type+"_"+bcode+"','','','span_RateValueopen_OL_"+lastID+"')";
			}
			
			$("#fileuploads_RateValueText"+lastID+"_OL").attr("placeholder", placeholder);				  	
						
			$("#fileuploads_RateValue"+lastID+"_OL").attr('onchange', uploadfile);
			
		});
		
		/*Age Band*/
		$("#tb_RateValue1_OL tbody>tr[data-level='2']").each(function(){
			var thisID_Sub = $(this).attr("id");
				thisID_Sub = thisID_Sub.replace("tbody_Rate_Value_OL","");
			var age_band = $(this).find("td:nth-child(1) label").text();
			var group = $(this).attr("data-group");

			var rate_type = $("#tbody_Rate_Value_OL"+group).find("td:nth-child(1) label").text();
			var placeholder = "";
			var uploadfile = "";
			
			if(dd_split.length > 1){
				placeholder = dd_pattern1+rate_type+"_"+age_band+"_"+bcode+".txt หรือ "+dd_pattern2+rate_type+"_"+age_band+"_"+bcode+".txt";
				//uploadfile = "selectFileRate_OL(5,'b','fileuploads_RateValue"+thisID_Sub+"_OL','"+dd_pattern1+rate_type+"_"+age_band+"_"+bcode+"','"+dd_pattern2+rate_type+"_"+age_band+"_"+bcode+"','dbBox1_OL','span_RateValueopen_OL_"+thisID_Sub+"')";	
				uploadfile = "selectFileTXTMain_OL("+rate_cat+", 9,'fileuploads_RateValue"+thisID_Sub+"_OL',"+layout_id1+","+layout_id2+",'','"+dd_pattern1+rate_type+"_"+age_band+"_"+bcode+"','"+dd_pattern2+rate_type+"_"+age_band+"_"+bcode+"','','span_RateValueopen_OL_"+thisID_Sub+"')";
			}else{
				placeholder = dd_pattern1+rate_type+"_"+age_band+"_"+bcode+".txt";
				//uploadfile = "selectFileRate_OL(5,'b','fileuploads_RateValue"+thisID_Sub+"_OL','"+dd_pattern1+rate_type+"_"+age_band+"_"+bcode+"','','dbBox1_OL','span_RateValueopen_OL_"+thisID_Sub+"')";
				uploadfile = "selectFileTXTMain_OL("+rate_cat+", 9,'fileuploads_RateValue"+thisID_Sub+"_OL',"+layout_id1+","+layout_id2+",'','"+dd_pattern1+rate_type+"_"+age_band+"_"+bcode+"','','','span_RateValueopen_OL_"+thisID_Sub+"')";
			}
			
			$("#fileuploads_RateValueText"+thisID_Sub+"_OL").attr("placeholder", placeholder);				  						
			$("#fileuploads_RateValue"+thisID_Sub+"_OL").attr('onchange', uploadfile);
			
		});
		
		/*put data*/
		if(obj_PV.table_policy_value.length > 0){		
			var lastID = 0;
			
			for (i in obj_PV.table_policy_value) {
				var obj_PV_table_policy_value = obj_PV.table_policy_value[i];
				/*var type = obj_CP_table_insurance_premium.file.replace(dd_value,"");
					type = type.replace("_"+bcode+".txt","");	*/
				var type = obj_PV_table_policy_value.sub_code;
				var band = obj_PV_table_policy_value.type;
				var fileName_policy_value = obj_PV_table_policy_value.file;
				if(typeClone == "Clone"){
					fileName_policy_value = obj_PV_table_policy_value.file.replace(cov_code_temp,new_cov_code)
				}
				/**************************************/
				/*set cv table*/
				if(obj_PV_table_policy_value.type == ""){
					$("#tb_RateValue1_OL tbody>tr[data-level='1']").each(function(){
						var lastID = $(this).attr("id");
							lastID = lastID.replace("tbody_Rate_Value_OL","");
						var rate_type = $(this).find("td:nth-child(1) label").text();
						
						//new layout
						format_name = "CVRate_LayoutDet_OL_rateCat"+obj_PV_table_policy_value.pass+"_layout"+obj_PV_table_policy_value.layout;
						format_name_col = "CVRate_Cols_LayoutDet_OL_rateCat"+obj_PV_table_policy_value.pass+"_layout"+obj_PV_table_policy_value.layout;
						
						tbl_col = $("#"+format_name_col).val();
						
						if(type == rate_type){
							$(this).find("td:nth-child(2) input:text").val(fileName_policy_value);
							$(this).find("td:nth-child(2) input[type='hidden']").eq(0).val(obj_PV_table_policy_value.pass);
							$(this).find("td:nth-child(2) input[type='hidden']").eq(1).val(obj_PV_table_policy_value.layout);
							$(this).find("td:nth-child(2) input[type='hidden']").eq(2).val(obj_PV_table_policy_value.fileID);
							
							$(this).find("td:nth-child(3) a").attr("disabled", false);
							//$(this).find("td:nth-child(3) span").attr("disabled", false).removeClass("activecolorgray").addClass("activecolorblue").attr("onclick", "openFileTextBasePlan_OL('"+fileName_policy_value+"','"+obj_PV_table_policy_value.ref+"',12,'tbl_StandardRisk_OL','cvStandardRisk_OL')");
							$(this).find("td:nth-child(3) span").attr("disabled", false).removeClass("activecolorgray").addClass("activecolorblue").attr("onclick", "openFileTextMain('"+fileName_policy_value+"','"+obj_PV_table_policy_value.ref+"',"+tbl_col+",'"+tbl_name+"','"+modal_cv+"','"+download_modal+"','"+format_name+"')");
							$(this).find("td:nth-child(4) a").attr("disabled", false);
							$(this).find("td:nth-child(4) span").attr("disabled", false).removeClass("activecolorgray").addClass("activecolorblue").attr("onclick", "openFile_target('"+fileName_policy_value+"','"+obj_PV_table_policy_value.ref+"','txt_download')");
							
						}

					});
				}else{
					$("#tb_RateValue1_OL tbody>tr[data-level='2']").each(function(){
						var thisID_Sub = $(this).attr("id");
							thisID_Sub = thisID_Sub.replace("tbody_Rate_Value_OL","");
						var age_band = $(this).find("td:nth-child(1) label").text();
						var group = $(this).attr("data-group");
						var rate_type = $("#tbody_Rate_Value_OL"+group).find("td:nth-child(1) label").text();
						
						//new layout
						format_name = "CVRate_LayoutDet_OL_rateCat"+obj_PV_table_policy_value.pass+"_layout"+obj_PV_table_policy_value.layout;
						format_name_col = "CVRate_Cols_LayoutDet_OL_rateCat"+obj_PV_table_policy_value.pass+"_layout"+obj_PV_table_policy_value.layout;
						
						tbl_col = $("#"+format_name_col).val();
						
						if(type == rate_type && band == age_band){
							$(this).find("td:nth-child(2) input:text").val(fileName_policy_value);
							$(this).find("td:nth-child(2) input[type='hidden']").eq(0).val(obj_PV_table_policy_value.pass);
							$(this).find("td:nth-child(2) input[type='hidden']").eq(1).val(obj_PV_table_policy_value.layout);
							$(this).find("td:nth-child(2) input[type='hidden']").eq(2).val(obj_PV_table_policy_value.fileID);
						
							$(this).find("td:nth-child(3) a").attr("disabled", false);
							//$(this).find("td:nth-child(3) span").attr("disabled", false).removeClass("activecolorgray").addClass("activecolorblue").attr("onclick", "openFileTextBasePlan_OL('"+fileName_policy_value+"','"+obj_PV_table_policy_value.ref+"',12,'tbl_StandardRisk_OL','cvStandardRisk_OL')");
							$(this).find("td:nth-child(3) span").attr("disabled", false).removeClass("activecolorgray").addClass("activecolorblue").attr("onclick", "openFileTextMain('"+fileName_policy_value+"','"+obj_PV_table_policy_value.ref+"',"+tbl_col+",'"+tbl_name+"','"+modal_cv+"','"+download_modal+"','"+format_name+"')");
							$(this).find("td:nth-child(4) a").attr("disabled", false);
							$(this).find("td:nth-child(4) span").attr("disabled", false).removeClass("activecolorgray").addClass("activecolorblue").attr("onclick", "openFile_target('"+fileName_policy_value+"','"+obj_PV_table_policy_value.ref+"','txt_download')");
							
						}
						
					});
				}
				
				$("#tb_RateValue1_OL tbody>tr>td:nth-child(2) span").attr("disabled", false);

			}
			
			//$("#tb_RateValue1>tbody>tr:first-child").remove();
			
			}
		}

		/*ความเสี่ยงต่ำกว่ามาตรฐาน*/
		$("#cbBox2_OL").prop("disabled", false);

		if(obj_PV.table_Low_Risk.length > 0){
			$("#cbBox2_OL").prop("checked", true);
			$("#validate_dd_file2_OL").hide();
			
			/*dropdown*/
			for (i in obj_PV.select_Low_Risk) {
				var obj_PV_select_Low_Risk = obj_PV.select_Low_Risk[i];
				if(obj_PV_select_Low_Risk.pass == 1){
					var dd_text = obj_PV_select_Low_Risk.text;
				}
			}
		
			$("#dbBox2_OL").prop("disabled", false);
			$("#dbBox2_OL option:contains("+dd_text+")").attr("selected", "selected");
			
			/*file*/
			var fileName_table_Low_Risk = obj_PV.table_Low_Risk[0].file;
			if(typeClone == "Clone"){
				fileName_table_Low_Risk = obj_PV.table_Low_Risk[0].file.replace(cov_code_temp,new_cov_code)
			}
			var filetype = $("#dbBox2_OL option:selected").val();
			selectTypeCode_OL(filetype,2);
			
			//new layout
			format_name = "CVLowRate_LayoutDet_OL_rateCat"+obj_PV.table_Low_Risk[0].pass+"_layout"+obj_PV.table_Low_Risk[0].layout;
			format_name_col = "CVLowRate_Cols_LayoutDet_OL_rateCat"+obj_PV.table_Low_Risk[0].pass+"_layout"+obj_PV.table_Low_Risk[0].layout;
			
			tbl_col = $("#"+format_name_col).val();
			
			$("#input_file_2_OL").val(fileName_table_Low_Risk);
			$("#spanBox2_OL, #cv2_OL").attr("disabled", false);
			$("#select_file_2_OL").prop("disabled", false);
			//$("#cv2_OL").attr("onclick", "openFileTextBasePlan_OL('"+fileName_table_Low_Risk+"','"+obj_PV.table_Low_Risk[0].ref+"',13,'tbl_NotStandardRisk_OL','cvNotStandardRisk_OL')");
			$("#cv2_OL").attr("onclick", "openFileTextMain('"+fileName_table_Low_Risk+"','"+obj_PV.table_Low_Risk[0].ref+"',"+tbl_col+",'"+tbl_name+"','"+modal_cv+"','"+download_modal+"','"+format_name+"')");
			
			if($("#input_file_2_OL").val() != ""){
				$("#validate_input2_OL").hide();
			}else{
				$("#validate_input2_OL").show();
			}
			
			$("#cvLow_rateLayout2_OL").val(obj_PV.table_Low_Risk[0].layout);
			$("#cvLow_fileID2_OL").val(obj_PV.table_Low_Risk[0].fileID);

		}
		
		var ETI_checked = $("#ch_ETI_ol").prop("checked");
		var RPU_checked = $("#ch_RPU_ol").prop("checked");
		var error_ETI_RPU = 0;
		/*RPU*/
		if((ETI_checked == true || RPU_checked == true) && (obj_PV.RPU.length > 0 || obj_PV.ETI.length > 0)){
			$("#cbBox3_OL").prop("disabled", false);
			
			/*check เงื่อนไขการเช็ค cbBox3_OL*/
			if(obj_PV.RPU.length > 0){
				if(obj_PV.RPU[0].Male_nonforf_rate != "0"){
					error_ETI_RPU++;
				}else if(obj_PV.RPU[0].Female_nonforf_rate != "0"){
					error_ETI_RPU++;
				}
			}
			
			if(obj_PV.ETI.length > 0){
				if(obj_PV.ETI[0].Male_nonforf_rate != "0"){
					error_ETI_RPU++;
				}else if(obj_PV.ETI[0].Female_nonforf_rate != "0"){
					error_ETI_RPU++;
				}
			}
			
			
			if(error_ETI_RPU > 0){
				$("#cbBox3_OL").prop("checked", true);
			}
			
			if($("#cbBox3_OL").prop("checked") == true){
				$("#tablePolicy1_OL, #tablePolicy2_OL").prop("disabled", false);
				if(RPU_checked == true){
					$("#dbBox3_1_OL, #dbBox3_2_OL, #dbBox3_3_OL").prop("disabled", false);
					//$("#tmo1_OL, #tmo2_OL").prop("disabled", false);
				}else{
					$("#tmo1_OL, #tmo2_OL").prop("disabled", true);
				}
				if(ETI_checked == true){
					$("#dbBox3_4_OL, #dbBox3_5_OL, #dbBox3_6_OL").prop("disabled", false);
					//$("#tmo3_OL, #tmo4_OL").prop("disabled", false);
				}else{
					$("#tmo3_OL, #tmo4_OL").prop("disabled", true);
				}
			}
			
			/*var tbl_col = 55;
			var modal_cv = "ETIRPU_OL";
			var tbl_name = "tbl_ETIRPU_OL";*/
			
			tbl_name = "tbl_ModalMain_OL";
			modal_cv = "ModalMain_OL";
			download_modal = "download_tbl_ModalMain_OL";

			if(obj_PV.RPU.length > 0){
				var obj_PV_RPU = obj_PV.RPU[0];
				var male = obj_PV_RPU.Male_nonforf_rate;
				var female = obj_PV_RPU.Female_nonforf_rate;
				var year = obj_PV_RPU.Year;
				
				$("#dbBox3_1_OL").val(year).prop("selected","selected");
				$("#dbBox3_2_OL").val(male).prop("selected","selected");
				$("#dbBox3_3_OL").val(female).prop("selected","selected");
				
				/*Khwan Fix open Modal*/
				var file_ref_male = $("#dbBox3_2_OL option:selected").attr("data-ref");
				var file_name_male = $("#dbBox3_2_OL option:selected").attr("data-file");
				var rate_cat_male = $("#RPU_ratecat_OL").val();
				var rate_layout_male = $("#dbBox3_2_OL option:selected").attr("data-layout");
				
				var format_name = "ETIRPU_LayoutDet_OL_rateCat"+rate_cat_male+"_layout"+rate_layout_male;
				var format_name_col = "ETIRPU_Cols_LayoutDet_OL_rateCat"+rate_cat_male+"_layout"+rate_layout_male;
				
				var tbl_col = $("#"+format_name_col).val();
				
				if(file_ref_male != ""){
					//$("#tmo1_OL").attr("onclick", "openFileTextBasePlan_OL('"+file_name_male+"','"+file_ref_male+"',"+tbl_col+",'"+tbl_name+"','"+modal_cv+"')");
					$("#tmo1_OL").attr("onclick", "openFileTextMain('"+file_name_male+"','"+file_ref_male+"',"+tbl_col+",'"+tbl_name+"','"+modal_cv+"','"+download_modal+"','"+format_name+"')");
					$("#tmo1_OL").prop("disabled", false);					
				}
				
				var file_ref_female = $("#dbBox3_3_OL option:selected").attr("data-ref");
				var file_name_female = $("#dbBox3_3_OL option:selected").attr("data-file");
				var rate_cat_female = $("#RPU_ratecat_OL").val();
				var rate_layout_female = $("#dbBox3_3_OL option:selected").attr("data-layout");
				
				var format_name = "ETIRPU_LayoutDet_OL_rateCat"+rate_cat_female+"_layout"+rate_layout_female;
				var format_name_col = "ETIRPU_Cols_LayoutDet_OL_rateCat"+rate_cat_female+"_layout"+rate_layout_female;
				
				var tbl_col = $("#"+format_name_col).val();
				
				if(file_ref_female != ""){
					//$("#tmo2_OL").attr("onclick", "openFileTextBasePlan_OL('"+file_name_female+"','"+file_ref_female+"',"+tbl_col+",'"+tbl_name+"','"+modal_cv+"')");
					$("#tmo2_OL").attr("onclick", "openFileTextMain('"+file_name_female+"','"+file_ref_female+"',"+tbl_col+",'"+tbl_name+"','"+modal_cv+"','"+download_modal+"','"+format_name+"')");
					$("#tmo2_OL").prop("disabled", false);					
				}
				
				/*กรอง dd*/
				if(year != 0){
					$("#dbBox3_2_OL option").each(function(){
						var male_year = $(this).attr("data-year");
						var value = $(this).val();
						
						if(year != male_year){
							if(value != 0){
								$(this).hide();
							}else{
								$(this).show();
							}
						}else{
							$(this).show();
						}
					});
				}else{
					$("#dbBox3_2_OL option").show();
				}
				
				
				/*กรอง dd*/
				if(year != 0){
					$("#dbBox3_3_OL option").each(function(){
						var female_year = $(this).attr("data-year");
						var value = $(this).val();
						
						if(year != female_year){
							if(value != 0){
								$(this).hide();
							}else{
								$(this).show();
							}
						}else{
							$(this).show();
						}
					});
				}else{
					$("#dbBox3_3_OL option").show();
				}
			}
			
			if(obj_PV.ETI.length > 0){
				var obj_PV_ETI = obj_PV.ETI[0];
				var male = obj_PV_ETI.Male_nonforf_rate;
				var female = obj_PV_ETI.Female_nonforf_rate;
				var year = obj_PV_ETI.Year;
				
				$("#dbBox3_4_OL").val(year).prop("selected","selected");
				$("#dbBox3_5_OL").val(male).prop("selected","selected");
				$("#dbBox3_6_OL").val(female).prop("selected","selected");
				
				/*Khwan Fix open Modal*/
				var file_ref_male = $("#dbBox3_5_OL option:selected").attr("data-ref");
				var file_name_male = $("#dbBox3_5_OL option:selected").attr("data-file");
				var rate_cat_male = $("#ETI_ratecat_OL").val();
				var rate_layout_male = $("#dbBox3_5_OL option:selected").attr("data-layout");
				
				var format_name = "ETIRPU_LayoutDet_OL_rateCat"+rate_cat_male+"_layout"+rate_layout_male;
				var format_name_col = "ETIRPU_Cols_LayoutDet_OL_rateCat"+rate_cat_male+"_layout"+rate_layout_male;
				
				var tbl_col = $("#"+format_name_col).val();
				
				if(file_ref_male != ""){
					//$("#tmo3_OL").attr("onclick", "openFileTextBasePlan_OL('"+file_name_male+"','"+file_ref_male+"',"+tbl_col+",'"+tbl_name+"','"+modal_cv+"')");
					$("#tmo3_OL").attr("onclick", "openFileTextMain('"+file_name_male+"','"+file_ref_male+"',"+tbl_col+",'"+tbl_name+"','"+modal_cv+"','"+download_modal+"','"+format_name+"')");
					$("#tmo3_OL").prop("disabled", false);					
				}
				
				var file_ref_female = $("#dbBox3_6_OL option:selected").attr("data-ref");
				var file_name_female = $("#dbBox3_6_OL option:selected").attr("data-file");
				var rate_cat_female = $("#ETI_ratecat_OL").val();
				var rate_layout_female = $("#dbBox3_6_OL option:selected").attr("data-layout");
				
				var format_name = "ETIRPU_LayoutDet_OL_rateCat"+rate_cat_female+"_layout"+rate_layout_female;
				var format_name_col = "ETIRPU_Cols_LayoutDet_OL_rateCat"+rate_cat_female+"_layout"+rate_layout_female;
				
				var tbl_col = $("#"+format_name_col).val();
				
				if(file_ref_female != ""){
					//$("#tmo4_OL").attr("onclick", "openFileTextBasePlan_OL('"+file_name_female+"','"+file_ref_female+"',"+tbl_col+",'"+tbl_name+"','"+modal_cv+"')");
					$("#tmo4_OL").attr("onclick", "openFileTextMain('"+file_name_female+"','"+file_ref_female+"',"+tbl_col+",'"+tbl_name+"','"+modal_cv+"','"+download_modal+"','"+format_name+"')");
					$("#tmo4_OL").prop("disabled", false);					
				}
				
				/*กรอง dd*/
				if(year != 0){
					$("#dbBox3_5_OL option").each(function(){
						var male_year = $(this).attr("data-year");
						var value = $(this).val();
						
						if(year != male_year){
							if(value != 0){
								$(this).hide();
							}else{
								$(this).show();
							}
						}else{
							$(this).show();
						}
		
					});
				}else{
					$("#dbBox3_5_OL option").show();
				}
				
				/*กรอง dd*/
				if(year != 0){
					$("#dbBox3_6_OL option").each(function(){
						var female_year = $(this).attr("data-year");
						var value = $(this).val();
						
						if(year != female_year){
							if(value != 0){
								$(this).hide();
							}else{
								$(this).show();
							}
						}else{
							$(this).show();
						}
					});
				}else{
					$("#dbBox3_6_OL option").show();
				}
			}
			
		}
		
}

function showcase_Benefit_OL(response,typeClone,cov_code_temp,new_cov_code){
	var obj_benef_tab = response.Tab_Benefits[0];
	/*Page*/
	if(obj_benef_tab.page.length > 0){
		$("#benefitSubmit").prop("disabled", false);

		for (i in response.Tab_Benefits[0].page) { 
			
			var benef_page = response.Tab_Benefits[0].page[i];
			
			if(benef_page.value == "BC_OL_D"){
				$("#cbDie_OL").prop('checked', true);
				$('#cbDie_OL_person').prop('checked', true);
			}
			
			if(benef_page.value == "BC_OL_MAT"){
				$('#cbContract_OL').prop("checked", true);
				$('#cbContract_OL_person').prop('checked', true);
			}
			
			if(benef_page.value == "BC_OL_PAY"){
				$('#cbRefund_OL').prop('checked', true);
				$('#cbRefund_OL_person').prop('checked', true);
			}
			if(benef_page.value == "BC_OL_PEN"){
				$('#cbPension_OL').prop('checked', true);
				$('#cbPension_OL_person').prop('checked', true);
			}
			
			if(benef_page.value == "BC_OL_MED"){
				$('#cbMedical_OL').prop('checked', true);
				$('#cbMedical_OL_person').prop('checked', true);
			}
			if(benef_page.value == "BC_OL_DIV"){
				$('#cbDividend_OL').prop('checked', true);
				$('#cbDividend_person').prop('checked', true);
			}
		}	
	}
	
	/*Tab Die*/
	
	var obj_base_die_tab = response.Tab_Benefits[0].die[0];
	if(response.Tab_Benefits[0].die.length > 0){
		if(response.Tab_Benefits[0].die[0].base_table.length > 0){
			
			var empt_val = response.Tab_Benefits[0].die[0].base_table[0].sched;
			if(empt_val.length != 0){
				$("#tbody_dieL_OL0, #tbody_dieR_OL0").hide();
				var num_row = $("#tbody_dieL_OL tbody>tr").length;
				var num_rowR = $("#tbody_dieR_OL tbody>tr").length;
				if(num_row > 0){
					$("#tbody_dieL_OL tbody>tr").remove();
				}
				if(num_rowR > 0){
					$("#tbody_dieR_OL tbody>tr").remove();
				}
			}
				
				
			var no = 1;	
			for(i in response.Tab_Benefits[0].die[0].base_table[0].sched){
				
					var obj_die_table = response.Tab_Benefits[0].die[0].base_table[0].sched[i];
					
					
				var ftOnclick = 'imgCheckbox(this.id);';
					
				var row1 = "";
				row1 = "<tr id='tbody_dieL_OL"+no+"'>"+
					"<td width='65px' class='text-center borderBlack' id='imgOK_OL_"+no+"' onclick='"+ftOnclick+"' style='vertical-align: middle;'><i class='glyphicon glyphicon-edit'></i></td>"+
					/*"<td class='text-center borderBlack'><input id='die_phase"+no+"_OL' type='text' class='form-control margin-padding0 text-center width50px' value=''  maxlength='2' max='99' onkeyup='numberKey_OL(this), replaceDot(this)' onkeydown='numberKey_OL(this);' onkeypress='validate(event)' onchange='validate_range_tbdie_OL(this.id,this.value);'></td>"+*/
					"<td width='56px' class='borderBlack'><input id='die_fromYear"+no+"_OL' type='text' class='form-control margin-padding0 text-center width50px' onkeypress='validate(event);' value=''maxlength='2' min='' onkeyup='replaceDot(this)' onblur='check_fromto_OL("+no+");' ></td>"+
					"<td width='100px' class='text-center borderBlack'><select class='form-control' id='die_fromYearUnit"+no+"_OL' onchange='check_fromtoUnit_OL("+no+");'><option value='NONE'>None</option></select></td>"+
					"<td width='56px' class='borderBlack'><input id='die_toYear"+no+"_OL' type='text' class='form-control margin-padding0 text-center width50px' onkeypress='validate(event);' value='' maxlength='2'  onkeyup='replaceDot(this)' onblur='check_fromto_OL("+no+");'></td>"+
					"<td width='100px' class='text-center borderBlack'><select class='form-control' id='die_toYearUnit"+no+"_OL'  onchange='check_fromtoUnit_OL("+no+");'><option value='NONE'>None</option></select></td>"+
					"</tr>";
			
				$("#tbody_dieL_OL tbody").append(row1);
				var row2 = "";
				row2 = "<tr id='tbody_dieR_OL"+no+"'>"+
						"<td width='50px' class='text-center borderBlack'><select class='form-control width-initial' id='die_sa_max"+no+"_OL'><option value='NONE'>None</option></select></td>"+
						"<td width='50px' class='borderBlack'><input id='die_sa"+no+"_OL' onblur='replaceBlank(this)' class='auto form-control margin-padding0 text-center width70px' value='0.00' data-v-min='0.00' data-v-max='999.99'>"+
						"<td width='50px' class='text-center borderBlack'><select class='form-control width-initial' id='die_sa_unit"+no+"_OL'><option value='NONE'>None</option></select></td>"+
						"<td width='50px' class='borderBlack'><input id='die_premium_OL"+no+"' onblur='replaceBlank(this)' type='text' class='auto form-control margin-padding0 text-center width70px' value='0.00' data-v-min='0.00' data-v-max='999.99' ></td>"+
						"<td width='50px' class='text-center borderBlack'><select class='form-control width-initial' id='die_prem"+no+"_OL' onchange='sl_premium("+no+")'><option value='NONE'>None</option></select></td>"+
						"<td width='50px' class='verticalCenter text-center borderBlack'><input id='die_checkbox"+no+"' type='checkbox' disabled></td>"+
						"<td width='50px' class='borderBlack'><input id='die_cvpv_OL"+no+"' onblur='replaceBlank(this)' type='text' class='auto form-control margin-padding0 text-center width70px'  value='0.00' data-v-min='0.00' data-v-max='999.99' ></td>"+
						"<td width='50px' class='text-center borderBlack'><select class='form-control width80px' id='die_sl_cvpv"+no+"_OL'><option value='NONE'>None</option></select></td>"+
						"<td width='50px' class='text-center borderBlack'><select class='form-control width80px' id='die_sl_oth"+no+"_OL'><option value='NONE'>None</option></select></td>"+
						"<td width='50px' class='text-center borderBlack'><select class='form-control width80px' id='die_condition_adb"+no+"_OL'><option value='NONE'>None</option></select></td>"+
						"<td width='50px' class='borderBlack'><input id='adb_OL"+no+"' onblur='replaceBlank(this)' type='text' class='auto form-control margin-padding0 text-center width70px'  value='0.00' data-v-min='0.00' data-v-max='999.99' ></td>"+
						"<td width='160px' class='text-center borderBlack'><select class='form-control width80px' id='die_adb_type"+no+"_OL'><option value='NONE'>None</option></select></td>"+
						"<td width='70px' class='text-center borderBlack'><select class='form-control width80px' id='die_condition_acc"+no+"_OL'><option value='NONE'>None</option></select></td>"+
						"<td width='70px' class='borderBlack'><input id='adbP_OL"+no+"' onblur='replaceBlank(this)' type='text' class='auto form-control margin-padding0 text-center width70px'  value='0.00' data-v-min='0.00' data-v-max='999.99' ></td>"+
						"<td width='160px' class='text-center borderBlack'><select class='form-control width80px' id='die_acc_type"+no+"_OL'><option value='NONE'>None</option></select></td>"+
						"</tr>";
			
			$("#tbody_dieR_OL tbody").append(row2);
			
			$('.auto').autoNumeric('init');
			
			
			var row_time = "";
			var carl = $("#die_calendar_OL").val();
			carl = carl.split(",");

			var pass = 0;
			var text = 1;
			for(i = 0 ; i < carl.length/2 ; i++){
				var row_time = "<option value='"+carl[pass]+"'>"+carl[text]+"</option>"
				pass = Number(parseInt(pass) + parseInt(2));
				text = Number(parseInt(text) + parseInt(2))
				$("#die_fromYearUnit"+no+"_OL").append(row_time);
				$("#die_toYearUnit"+no+"_OL").append(row_time);
			}
			
			var row_sa_val = "";
			var sa_val = $("#die_sa_value_OL").val();
			sa_val = sa_val.split(",");

			var pass = 0;
			var text = 1;
			for(i = 0 ; i < sa_val.length/2 ; i++){
				var row_sa_val = "<option value='"+sa_val[pass]+"'>"+sa_val[text]+"</option>"
				pass = Number(parseInt(pass) + parseInt(2));
				text = Number(parseInt(text) + parseInt(2))
				$("#die_sa_max"+no+"_OL").append(row_sa_val);
				
			}
			
			var row_unit = "";
			var type = $("#die_sa_type_OL").val();
				type = type.split(",");

			var pass = 0;
			var text = 1;
			for(i = 0 ; i < type.length/2 ; i++){
				var row_unit = "<option value='"+type[pass]+"'>"+type[text]+"</option>"
				pass = Number(parseInt(pass) + parseInt(2));
				text = Number(parseInt(text) + parseInt(2))
				$("#die_sa_unit"+no+"_OL").append(row_unit);
				
				
			}
			var row_oth = "";
			var oth_type = $("#die_oth_type_OL").val();
			oth_type = oth_type.split(",");

			var pass = 0;
			var text = 1;
			for(i = 0 ; i < oth_type.length/2 ; i++){
				var row_oth = "<option value='"+oth_type[pass]+"'>"+oth_type[text]+"</option>"
				pass = Number(parseInt(pass) + parseInt(2));
				text = Number(parseInt(text) + parseInt(2))
				$("#die_sl_oth"+no+"_OL").append(row_oth);
				
			}
			
			
			var row_adb = "";
			var type_adb = $("#adb_type_OL").val();
			type_adb = type_adb.split(",");
			var pass = 0;
			var text = 1;
			for(i = 0 ; i < type_adb.length/2 ; i++){
				var row_adb = "<option value='"+type_adb[pass]+"'>"+type_adb[text]+"</option>"
				pass = Number(parseInt(pass) + parseInt(2));
				text = Number(parseInt(text) + parseInt(2))
				$("#die_adb_type"+no+"_OL").append(row_adb);
			}
			
			/*acc_public_type_OL*/
			var row_acc_public_get = "";
			var type_acc_public_get = $("#acc_public_type_OL").val();
			type_acc_public_get = type_acc_public_get.split(",");
			var pass = 0;
			var text = 1;
			for(i = 0 ; i < type_acc_public_get.length/2 ; i++){
				var row_acc_public_get = "<option value='"+type_acc_public_get[pass]+"'>"+type_acc_public_get[text]+"</option>"
				pass = Number(parseInt(pass) + parseInt(2));
				text = Number(parseInt(text) + parseInt(2))
				$("#die_acc_type"+no+"_OL").append(row_acc_public_get);
			}
			
			
			var row_cvpv = "";
			var type_cvpv = $("#cvpv_unit_OL").val();
				type_cvpv = type_cvpv.split(",");
			var pass = 0;
			var text = 1;
			for(i = 0 ; i < type_cvpv.length/2 ; i++){
				var row_cvpv = "<option value='"+type_cvpv[pass]+"'>"+type_cvpv[text]+"</option>"
				pass = Number(parseInt(pass) + parseInt(2));
				text = Number(parseInt(text) + parseInt(2))
				$("#die_sl_cvpv"+no+"_OL").append(row_cvpv);
			}
			
			var row_pre = "";
			var type_pre = $("#lst_premium_sl").val();
			type_pre = type_pre.split(",");

			var pass = 0;
			var text = 1;
			for(i = 0 ; i < type_pre.length/2 ; i++){
				var row_pre = "<option value='"+type_pre[pass]+"'>"+type_pre[text]+"</option>"
				pass = Number(parseInt(pass) + parseInt(2));
				text = Number(parseInt(text) + parseInt(2))
				$("#die_prem"+no+"_OL").append(row_pre);
			}
			
			var row_con = "";
			var type_con = $("#die_condition_OL").val();
			type_con = type_con.split(",");

			var pass = 0;
			var text = 1;
			for(i = 0 ; i < type_con.length/2 ; i++){
				var row_con = "<option value='"+type_con[pass]+"'>"+type_con[text]+"</option>"
				pass = Number(parseInt(pass) + parseInt(2));
				text = Number(parseInt(text) + parseInt(2))
				$("#die_condition_adb"+no+"_OL").append(row_con);
				$("#die_condition_acc"+no+"_OL").append(row_con);
			}
			
			/*sched*/
			/*$("#die_phase"+no+"_OL").val(obj_die_table.sched_seq);*/
			$("#die_fromYear"+no+"_OL").val(obj_die_table.beg_period);
			$("#die_fromYearUnit"+no+"_OL option[value="+obj_die_table.beg_period_unit+"]").attr("selected", true);
			$("#die_toYear"+no+"_OL").val(obj_die_table.end_period);
			$("#die_toYearUnit"+no+"_OL option[value="+obj_die_table.end_period_unit+"]").attr("selected", true);
			$("#die_sa_max"+no+"_OL option[value="+obj_die_table.amt_compare+"]").attr("selected", true);
			
			/*amount*/
			
			for(i in response.Tab_Benefits[0].die[0].base_table[0].sched[0].amount){
			
				var die_amount = obj_die_table.amount[i];
				if(die_amount.amt_seq == "1"){
					$("#die_sa"+no+"_OL").val((die_amount.benef_amt*100).toFixed(2));
					$("#die_sa_unit"+no+"_OL option[value="+die_amount.benef_factor+"]").attr("selected", true);
				}
				if(die_amount.amt_seq == "2"){
					
					$("#die_premium_OL"+no).val((die_amount.benef_amt*100).toFixed(2));
					if(die_amount.benef_factor == "ACC_TOT_PREM"){
						$("#die_checkbox"+no).prop("checked", true);
						$("#die_checkbox"+no).prop("disabled", false);
						$("#die_prem"+no+"_OL option[value=ACCU]").attr("selected", true);
					}else if(die_amount.benef_factor == "ACC_STD_PREM"){
						$("#die_checkbox"+no).prop("checked", false);
						$("#die_checkbox"+no).prop("disabled", false);
						$("#die_prem"+no+"_OL option[value=ACCU]").attr("selected", true);
					}else if(die_amount.benef_factor == "ANN_TOT_PREM"){
						$("#die_checkbox"+no).prop("checked", true);
						$("#die_checkbox"+no).prop("disabled", false);
						$("#die_prem"+no+"_OL option[value=YRT]").attr("selected", true);
					}else if(die_amount.benef_factor == "ANN_STD_PREM"){
						$("#die_checkbox"+no).prop("checked", false);
						$("#die_checkbox"+no).prop("disabled", false);
						$("#die_prem"+no+"_OL option[value=YRT]").attr("selected", true);
					}else if(die_amount.benef_factor == "ACC_COUPON_STD_PREM"){
						$("#die_checkbox"+no).prop("checked", false);
						$("#die_checkbox"+no).prop("disabled", false);
						$("#die_prem"+no+"_OL option[value=ACCU_COUPON]").attr("selected", true);
						
					}else if(die_amount.benef_factor == "ACC_COUPON_TOT_PREM"){
						$("#die_checkbox"+no).prop("checked", true);
						$("#die_checkbox"+no).prop("disabled", false);
						$("#die_prem"+no+"_OL option[value=ACCU_COUPON]").attr("selected", true);
						
					}else if(die_amount.benef_factor == "ACC_ANNUITY_STD_PREM"){
						$("#die_checkbox"+no).prop("checked", false);
						$("#die_checkbox"+no).prop("disabled", false);
						$("#die_prem"+no+"_OL option[value=ACCU_ANNUITY]").attr("selected", true);
						
					}else if(die_amount.benef_factor == "ACC_ANNUITY_TOT_PREM"){
						$("#die_checkbox"+no).prop("checked", true);
						$("#die_checkbox"+no).prop("disabled", false);
						$("#die_prem"+no+"_OL option[value=ACCU_ANNUITY]").attr("selected", true);
						
					}
					
				}
				
				if(die_amount.amt_seq == "3"){
					$("#die_cvpv_OL"+no+"").val((die_amount.benef_amt*100).toFixed(2));
					$("#die_sl_cvpv"+no+"_OL option[value="+die_amount.benef_factor+"]").attr("selected", true);
				}
				if(die_amount.amt_seq == "4"){
					$("#die_sl_oth"+no+"_OL option[value="+die_amount.benef_factor+"]").attr("selected", true);
				}
				
			}
			for(i in response.Tab_Benefits[0].die[0].base_table[0].sched[0].special_Amt){
				var die_secial_amount = obj_die_table.special_Amt[i];
				if(die_secial_amount.special_type == "ADB"){
					$("#adb_OL"+no).val((die_secial_amount.benef_amt).toFixed(2));
					$("#die_adb_type"+no+"_OL option[value="+die_secial_amount.benef_factor+"]").attr("selected", true);
					$("#die_condition_adb"+no+"_OL option[value="+die_secial_amount.benef_cond+"]").attr("selected", true);
				}
				if(die_secial_amount.special_type == "PUBLIC_ACC"){
					$("#adbP_OL"+no).val((die_secial_amount.benef_amt).toFixed(2));
					$("#die_acc_type"+no+"_OL option[value="+die_secial_amount.benef_factor+"]").attr("selected", true);
					$("#die_condition_acc"+no+"_OL option[value="+die_secial_amount.benef_cond+"]").attr("selected", true);
				}
			}
			
			
			no++;
			
					
			}

	}
}

	
	
	
	/*ตารางรายการข้อยกเว้น*/
	var obj_die_tab = response.Tab_Benefits[0].die[0];
	if(response.Tab_Benefits[0].die.length > 0){
		for(i in response.Tab_Benefits[0].die[0].exceptionAccidentPay){
			var table_except = response.Tab_Benefits[0].die[0].exceptionAccidentPay[i];
			
			var no = Number(i)+1;
			
				var row = "<tr id='tbody_exception"+no+"'>"+					    								
						  "<td id='imgOK_exception"+no+"' class='text-center borderBlack'"+
						  "onclick='imgCheckbox_exception_OL("+no+");' data-key='"+table_except.bnf_cat_code+"' style='vertical-align: middle;'>" +
						  "<i class='glyphicon glyphicon-edit'></i>" +
						  "</td>"+	
						  "<td class='text-center borderBlack' style='vertical-align: middle;'><span class='spanException_OL' id='orderID"+no+"'>"+no+"</span></td>"+									
						  "<td class='borderBlack verticalCenter'><input type='text' name='exception_name[]' id='exception_name"+no+"' class='form-control margin-padding0 text-center;' value='"+table_except.name_th+"' readonly></td>"+											  									
					  "</tr>";			
				
				$("#tbl_DeathExceptionOL tbody").append(row);
		
		}
	}
	
	/*เงินครบกำหนดสัญญา*/
	var obj_refund_maturity = response.Tab_Benefits[0].refundMaturity[0];
	/*sched*/[{"rate_cate_id":"38","sub_rate_cat":"18","layout":"DIV 13 10K_","file":"เงินปันผล","file_ID":"P_Ext_CL 14 100K_D_GL_CL_DEC_B_0008.txt"}]
	if(response.Tab_Benefits[0].refundMaturity.length > 0){
		if(obj_refund_maturity.sched.length > 0){
			for(i in response.Tab_Benefits[0].refundMaturity[0].sched){
				var obj_re_mu_sch = response.Tab_Benefits[0].refundMaturity[0].sched[i];
				$("#die_sa_max"+i+"_OL option[value="+obj_re_mu_sch.amt_compare+"]").attr("selected", true);
	 		}
		}
		/*amount*/
		if(obj_refund_maturity.amount.length > 0){
			for(i in response.Tab_Benefits[0].refundMaturity[0].amount){
				var re_mu_seq = response.Tab_Benefits[0].refundMaturity[0].amount[i];
				
				if(re_mu_seq.amt_seq == '1'){
					$("#contract_sa0_OL").val((re_mu_seq.benef_amt*100).toFixed(2));
					$("#contract_sa_unit0_OL option[value="+re_mu_seq.benef_factor+"]").attr("selected", true);
				}

				if(re_mu_seq.amt_seq == '2'){
				
					$('#contract_premium_OL0').val((re_mu_seq.benef_amt*100).toFixed(2));
					if(re_mu_seq.benef_factor == "ACC_STD_PREM"){
						$('#contract_checkbox_OL0').prop('checked', false);
						$('#contract_checkbox_OL0').prop('disabled', false);
						$('#contract_sl_premium_OL0 option[value=ACCU]').attr("selected", true);
					}else if(re_mu_seq.benef_factor == "ACC_TOT_PREM"){
						$('#contract_checkbox_OL0').prop('checked', true);
						$('#contract_checkbox_OL0').prop('disabled', false);
						$('#contract_sl_premium_OL0 option[value=ACCU]').attr("selected", true);
					}else if(re_mu_seq.benef_factor == "ANN_STD_PREM"){
						$('#contract_checkbox_OL0').prop('checked', false);
						$('#contract_checkbox_OL0').prop('disabled', false);
						$('#contract_sl_premium_OL0 option[value=YRT]').attr("selected", true);
					}else if(re_mu_seq.benef_factor == "ANN_TOT_PREM"){
						$('#contract_checkbox_OL0').prop('checked', true);
						$('#contract_checkbox_OL0').prop('disabled', false);
						$('#contract_sl_premium_OL0 option[value=YRT]').attr("selected", true);
					}else if(re_mu_seq.benef_factor == "ACC_COUPON_STD_REM"){
						$('#contract_checkbox_OL0').prop('checked', false);
						$('#contract_checkbox_OL0').prop('disabled', false);
						$('#contract_sl_premium_OL0 option[value=ACCU_COUPON]').attr("selected", true);
					}else if(re_mu_seq.benef_factor == "ACC_COUPON_TOT_REM"){
						$('#contract_checkbox_OL0').prop('checked', true);
						$('#contract_checkbox_OL0').prop('disabled', false);
						$('#contract_sl_premium_OL0 option[value=ACCU_COUPON]').attr("selected", true);
					}else if(re_mu_seq.benef_factor == "ACC_ANNUITY_STD_PREM"){
						$('#contract_checkbox_OL0').prop('checked', false);
						$('#contract_checkbox_OL0').prop('disabled', false);
						$('#contract_sl_premium_OL0 option[value=ACCU_ANNUITY]').attr("selected", true);
					}else if(re_mu_seq.benef_factor == "ACC_ANNUITY_TOT_PREM"){
						$('#contract_checkbox_OL0').prop('checked', true);
						$('#contract_checkbox_OL0').prop('disabled', false);
						$('#contract_sl_premium_OL0 option[value=ACCU_ANNUITY]').attr("selected", true);
					}		
				}
				if(re_mu_seq.amt_seq == '3'){
				
					$("#contract_cvpv_OL0").val((re_mu_seq.benef_amt*100).toFixed(2));
					$("#contract_sl_cvpv_OL0 option[value="+re_mu_seq.benef_factor+"]").attr("selected", true);
	 			}
				if(re_mu_seq.amt_seq == '4'){
					
					$("#contract_other_OL0 option[value="+re_mu_seq.benef_factor+"]").attr("selected", true);
				}
			}
		}
		
		if(obj_refund_maturity.type.length > 0){
			
			$("#show_type_contract").val(obj_refund_maturity.type);
			
		}
		if(obj_refund_maturity.period.length > 0){
			
			$("#show_value_contract").val(obj_refund_maturity.period);
			
		}
		
	}
	
	
	/*เงินคืนทุกระยะ*/
	var obj_refund_tab = response.Tab_Benefits[0].refund[0];
	if(response.Tab_Benefits[0].refund.length > 0){
		if(obj_refund_tab.sched.length > 0 && obj_refund_tab.amount.length > 0){
			var num_row = $("#benefit_refund tbody>tr").length;
			if(num_row > 0){
				$("#benefit_refund tbody>tr").remove();
			}
			
			var no = 1;
				for(i in response.Tab_Benefits[0].refund[0].sched){				
						var refund_sched = response.Tab_Benefits[0].refund[0].sched[i];
						var refund_amount = response.Tab_Benefits[0].refund[0].amount[i];
						
						var ftOnclick = 'imgCheckbox(this.id);';
						var row = "<tr id='tbody_refund"+no+"'>"+
								"<td width='50' class='text-center borderBlack' id='imgOK_refund"+no+"' onclick='"+ftOnclick+"' style='vertical-align: middle;'><i class='glyphicon glyphicon-edit'></i></td>"+
								"<td width='75' class='borderBlack'><input id='refund_fromYear"+no+"' class='form-control margin-padding0 text-center' onkeypress='validate(event);' type='text' maxlength='3' width='50' value='' onkeyup='replaceDot(this)' onblur='choose_from_year("+no+");'></td>"+
								"<td width='75' class='borderBlack'><input id='refund_fromAge"+no+"' class='form-control margin-padding0 text-center' onkeypress='validate(event);' type='text' maxlength='2' width='50' value='' onkeyup='replaceDot(this)' onblur='choose_from_year("+no+");'></td>"+
								"<td width='75' class='borderBlack'><input id='refund_toYear"+no+"' class='form-control margin-padding0 text-center' onkeypress='validate(event);' type='text' maxlength='3' width='50' value='' onkeyup='replaceDot(this)' onblur='choose_from_year("+no+");'></td>"+
								"<td width='75' class='borderBlack'><input id='refund_toAge"+no+"' class='form-control margin-padding0 text-center' onkeypress='validate(event);' type='text' maxlength='2' width='50' value='' onkeyup='replaceDot(this)' onblur='choose_from_year("+no+");'></td>"+
								"<td width='100' class='borderBlack'><input id='refund_year"+no+"' class='auto form-control text-center' onkeypress='validate(event);' onkeyup='check_min_value_year("+no+"), replaceDot(this)' data-v-min='0' data-v-max='99' type='text' maxlength='2' width='50' value=''></td>"+
								"<td width='200' class='borderBlack'><input id='refund_amount"+no+"' class='form-control text-center autoComma' onblur='select_unit("+no+");' type='text' width='50' value='0.00' data-v-min='0.00' data-v-max='999999999.99'></td>"+
								"<td width='200' class='text-center borderBlack'><select class='form-control UNIT_TYPE' id='refund_unit"+no+"' onchange='select_unit_option("+no+");'><option value='NONE'>None</option></select></td>"+
								"<td width='200' class='text-center borderBlack'><select class='form-control BENEF_FACTOR' id='refund_factor"+no+"'><option value='NONE'>None</option></select></td>"+
								"<td width='200' class='text-center borderBlack'><select class='form-control SCOPE_TYPE' id='refund_scope"+no+"'><option value='NONE'>None</option></select></td>"+
							"</tr>";

							$("#benefit_refund tbody").append(row);
							$(".autoComma").autoNumeric('init',{vMin: '0.00', vMax: '999999999.99'});
							/*$('.auto').autoNumeric('init');*/
							
							var row_unit = "";
							var type = $("#benef_factor_OL").val();
								type = type.split(",");

							var pass = 0;
							var text = 1;
							for(i = 0 ; i < type.length/2 ; i++){
								var row_unit = "<option value='"+type[pass]+"'>"+type[text]+"</option>"
								pass = Number(parseInt(pass) + parseInt(2));
								text = Number(parseInt(text) + parseInt(2))
								$("#refund_factor"+no).append(row_unit);
							}
							
							var row_fac = "";
							var typeFac = $("#benef_unit_OL").val();
							typeFac = typeFac.split(",");

							var pass = 0;
							var text = 1;
							for(i = 0 ; i < typeFac.length/2 ; i++){
								var row_fac = "<option value='"+typeFac[pass]+"'>"+typeFac[text]+"</option>"
								pass = Number(parseInt(pass) + parseInt(2));
								text = Number(parseInt(text) + parseInt(2))
								$("#refund_unit"+no).append(row_fac);
							}
							
							var row_scope = "";
							var typeScope = $("#benef_scope_OL").val();
							typeScope = typeScope.split(",");

							var pass = 0;
							var text = 1;
							for(i = 0 ; i < typeScope.length/2 ; i++){
								var row_scope = "<option value='"+typeScope[pass]+"'>"+typeScope[text]+"</option>"
								pass = Number(parseInt(pass) + parseInt(2));
								text = Number(parseInt(text) + parseInt(2))
								$("#refund_scope"+no).append(row_scope);
							}
							
							
							var refund_beg_val = refund_sched.beg_period;
							var refund_end_val = refund_sched.end_period;
							if(refund_sched.beg_period_type == 'POLICY_YEAR_BEG'){
								$('#refund_fromAge'+no+'').prop('disabled', true);	
								$('#refund_fromYear'+no+'').val(refund_beg_val);
								
							}else if(refund_sched.beg_period_type == 'ATT_AGE_BEG'){
								$('#refund_fromYear'+no+'').prop('disabled', true);	
								$('#refund_fromAge'+no+'').val(refund_beg_val);
							}
							
							if(refund_sched.end_period_type == 'POLICY_YEAR_END'){
								$('#refund_toAge'+no+'').prop('disabled', true);
								$('#refund_toYear'+no+'').val(refund_end_val);
								
							}else if(refund_sched.end_period_type == 'ATT_AGE_END'){
								$('#refund_toYear'+no+'').prop('disabled', true);
								$('#refund_toAge'+no+'').val(refund_end_val);
							}
							
							
							$('#refund_year'+no+'').val(refund_sched.freq_period);
															
							$('#refund_amount'+no+'').val(numberWithCommas(parseFloat(refund_amount.benef_amt).toFixed(2)));
							$("#refund_unit"+no+" option[value="+refund_amount.benef_unit+"]").attr("selected", true);
							$("#refund_factor"+no+" option[value="+refund_amount.benef_factor+"]").attr("selected", true);
							$("#refund_scope"+no+" option[value="+refund_amount.benef_scope+"]").attr("selected", true);
									
									
							no++;
				}
					
			}
	}
	
	
	/*เงินบำนาญ*/
	var obj_pension_tab = response.Tab_Benefits[0].pension[0];
	if(response.Tab_Benefits[0].pension.length > 0){
		$("#pension_startAge_OL").val(obj_pension_tab.beg_age);
		$("#pension_confirmPay_OL").val(obj_pension_tab.benefit_sched);
		if(obj_pension_tab.sched.length > 0 && obj_pension_tab.amount.length > 0){
			var num_row = $("#benefit_pension tbody>tr").length;
			if(num_row > 0){
				$("#benefit_pension tbody>tr").remove();
			}
			
			var no = 1;
			for(i in response.Tab_Benefits[0].pension[0].sched){
				var pension_sched = response.Tab_Benefits[0].pension[0].sched[i];
				var pension_amount = response.Tab_Benefits[0].pension[0].amount[i];
				
				var ftOnclick = 'imgCheckbox(this.id);';
			
				var row = "<tr id='tbody_pension"+no+"'>"+
											"<td width='50' class='text-center borderBlack' id='imgOK_pension"+no+"'  onclick='"+ftOnclick+"' style='vertical-align: middle;'><i class='glyphicon glyphicon-edit'></i></td>"+
											"<td width='75' class='borderBlack'><input id='pension_fromYear"+no+"' class='form-control margin-padding0 text-center' type='text' onkeypress='validate(event);' maxlength='3' width='50' value='' onkeyup='replaceDot(this)' onblur='choose_from_year_pension("+no+");'></td>"+
											"<td width='75' class='borderBlack'><input id='pension_fromAge"+no+"' class='form-control margin-padding0 text-center' type='text' onkeypress='validate(event);' maxlength='2' width='50' value='' onkeyup='replaceDot(this)' onblur='choose_from_year_pension("+no+");'></td>"+
											"<td width='75' class='borderBlack'><input id='pension_toYear"+no+"' class='form-control margin-padding0 text-center' type='text' onkeypress='validate(event);' maxlength='3' width='50' value='' onkeyup='replaceDot(this)' onblur='choose_from_year_pension("+no+");'></td>"+
											"<td width='75' class='borderBlack'><input id='pension_toAge"+no+"' class='form-control margin-padding0 text-center' type='text' onkeypress='validate(event);' maxlength='2' width='50' value='' onkeyup='replaceDot(this)' onblur='choose_from_year_pension("+no+");'></td>"+
											"<td width='100' class='borderBlack'><input id='pension_year"+no+"' class='auto form-control text-center' onkeypress='validate(event);' onkeyup='check_min_value_year_pen("+no+"), replaceDot(this)' data-v-min='0' data-v-max='99' type='text' maxlength='2' width='50' value=''></td>"+
											"<td width='200' class='borderBlack'><input id='pension_amount"+no+"' class='form-control text-center autoComma' onblur='select_unit_pension("+no+");' type='text' width='50' value='0.00' data-v-min='0.00' data-v-max='999999999.99'></td>"+
											"<td width='200' class='text-center borderBlack'><select class='form-control UNIT_TYPE' onchange='select_unit_option_pension("+no+");' id='pension_unit"+no+"'><option value='NONE'>None</option></select></td>"+
											"<td width='200' class='text-center borderBlack'><select class='form-control UNIT_TYPE' id='pension_factor"+no+"'><option value='NONE'>None</option></select></td>"+
										
					  "</tr>";
				
				$("#benefit_pension tbody").append(row);
				/*$('.auto').autoNumeric('init');*/
				$(".autoComma").autoNumeric('init',{vMin: '0.00', vMax: '999999999.99'});
				
				var type = $("#benef_factor_OL").val();
				type = type.split(",");

				var pass = 0;
				var text = 1;
				for(i = 0 ; i < type.length/2 ; i++){
					var row_unit = "<option value='"+type[pass]+"'>"+type[text]+"</option>"
					pass = Number(parseInt(pass) + parseInt(2));
					text = Number(parseInt(text) + parseInt(2))
					$("#pension_factor"+no).append(row_unit);
				}
				
				var row_fac = "";
				var typeFac = $("#benef_unit_OL").val();
				typeFac = typeFac.split(",");
		
				var pass = 0;
				var text = 1;
				for(i = 0 ; i < typeFac.length/2 ; i++){
					var row_fac = "<option value='"+typeFac[pass]+"'>"+typeFac[text]+"</option>"
					pass = Number(parseInt(pass) + parseInt(2));
					text = Number(parseInt(text) + parseInt(2))
					$("#pension_unit"+no).append(row_fac);
				}
				
					
				var pension_beg_val = pension_sched.beg_period;
				var pension_end_val = pension_sched.end_period;
				if(pension_sched.beg_period_type == 'POLICY_YEAR_BEG'){
					$('#pension_fromAge'+no+'').prop('disabled', true);	
					$('#pension_fromYear'+no+'').val(pension_beg_val);
					
				}else if(pension_sched.beg_period_type == 'ATT_AGE_BEG'){
					$('#pension_fromYear'+no+'').prop('disabled', true);	
					$('#pension_fromAge'+no+'').val(pension_beg_val);
				}
				
				if(pension_sched.end_period_type == 'POLICY_YEAR_END'){
					$('#pension_toAge'+no+'').prop('disabled', true);
					$('#pension_toYear'+no+'').val(pension_end_val);
					
				}else if(pension_sched.end_period_type == 'ATT_AGE_END'){
					$('#pension_toYear'+no+'').prop('disabled', true);
					$('#pension_toAge'+no+'').val(pension_end_val);
				}
				
				$('#pension_year'+no+'').val(pension_sched.freq_period);
				
				$('#pension_amount'+no+'').val(numberWithCommas(parseFloat(pension_amount.benef_amt).toFixed(2)));
				$("#pension_unit"+no+" option[value="+pension_amount.benef_unit+"]").attr("selected", true);
				$("#pension_factor"+no+" option[value="+pension_amount.benef_factor+"]").attr("selected", true);
				
				
				no++;
				
			}
			
			
		}
	}

	
	/*กองทุนค่ารักษาพยาบาล*/
	var obj_medical_tab = response.Tab_Benefits[0].medicalFund[0];
	if(response.Tab_Benefits[0].medicalFund.length > 0){
		if(obj_medical_tab.sched.length > 0 && obj_medical_tab.amount.length > 0){
			var num_row = $("#benefit_medical tbody>tr").length;
			if(num_row > 0){
				$("#benefit_medical tbody>tr").remove();
			}
			
			var no = 1;
							
			/*var no = Number(i)+1;*/
			for(i in response.Tab_Benefits[0].medicalFund[0].sched){
				
				
						var med_sched = response.Tab_Benefits[0].medicalFund[0].sched[i];
						var med_amount = response.Tab_Benefits[0].medicalFund[0].amount[i];
						
						var ftOnclick = 'imgCheckbox(this.id);';
						var row = "<tr id='tbody_medical"+no+"'>"+
								"<td width='50' class='text-center borderBlack' id='imgOK_med"+no+"' onclick='"+ftOnclick+"' style='vertical-align: middle;'><i class='glyphicon glyphicon-edit'></i></td>"+
								"<td width='75' class='borderBlack'><input id='medical_fromYear"+no+"' class='form-control margin-padding0 text-center' type='text' onkeypress='validate(event);'  width='50' maxlength='3' value='' onkeyup='replaceDot(this)' onblur='choose_from_year_med("+no+");'></td>"+
								"<td width='75' class='borderBlack'><input id='medical_fromAge"+no+"' class='form-control margin-padding0 text-center' type='text' onkeypress='validate(event);' width='50' maxlength='2' value='' onkeyup='replaceDot(this)' onblur='choose_from_year_med("+no+");'></td>"+
								"<td width='75' class='borderBlack'><input id='medical_toYear"+no+"' class='form-control margin-padding0 text-center' type='text' onkeypress='validate(event);' width='50' maxlength='3' value='' onkeyup='replaceDot(this)' onblur='choose_from_year_med("+no+");'></td>"+
								"<td width='75' class='borderBlack'><input id='medical_toAge"+no+"' class='form-control margin-padding0 text-center' type='text' onkeypress='validate(event);' width='50' maxlength='2' value='' onkeyup='replaceDot(this)' onblur='choose_from_year_med("+no+");'></td>"+
								"<td width='100' class='borderBlack'><input id='medical_year"+no+"' class='auto form-control text-center' onkeypress='validate(event);' onkeyup='check_min_value_year_med("+no+"), replaceDot(this)' data-v-min='0' data-v-max='99' type='text' width='50' maxlength='2' value=''></td>"+
								"<td width='200' class='borderBlack'><input id='medical_amount"+no+"' class='form-control text-center autoComma' onblur='select_unit_med("+no+");' type='text' width='50' value='0.00' data-v-min='0.00' data-v-max='999999999.99'></td>"+
								"<td width='200' class='text-center borderBlack'><select class='form-control UNIT_TYPE' onchange='select_unit_option_med("+no+");' id='medical_unit"+no+"'><option value='NONE'>None</option></select></td>"+
								"<td width='200' class='text-center borderBlack'><select class='form-control BENEF_FACTOR' id='medical_factor"+no+"'><option value='NONE'>None</option></select></td>"+
								"<td width='200' class='text-center borderBlack'><select class='form-control SCOPE_TYPE' id='medical_scope"+no+"'><option value='NONE'>None</option></select></td>"+
								"</tr>";

								$("#benefit_medical tbody").append(row);
								$(".autoComma").autoNumeric('init',{vMin: '0.00', vMax: '999999999.99'});
								/*$('.auto').autoNumeric('init');*/
								
								var row_unit = "";
								var type = $("#benef_factor_OL").val();
									type = type.split(",");

								var pass = 0;
								var text = 1;
								for(i = 0 ; i < type.length/2 ; i++){
									var row_unit = "<option value='"+type[pass]+"'>"+type[text]+"</option>"
									pass = Number(parseInt(pass) + parseInt(2));
									text = Number(parseInt(text) + parseInt(2))
									$("#medical_factor"+no).append(row_unit);
								}
								
								var row_fac = "";
								var typeFac = $("#benef_unit_OL").val();
								typeFac = typeFac.split(",");

								var pass = 0;
								var text = 1;
								for(i = 0 ; i < typeFac.length/2 ; i++){
									var row_fac = "<option value='"+typeFac[pass]+"'>"+typeFac[text]+"</option>"
									pass = Number(parseInt(pass) + parseInt(2));
									text = Number(parseInt(text) + parseInt(2))
									$("#medical_unit"+no).append(row_fac);
								}
								
								var row_scope = "";
								var typeScope = $("#benef_scope_OL").val();
								typeScope = typeScope.split(",");

								var pass = 0;
								var text = 1;
								for(i = 0 ; i < typeScope.length/2 ; i++){
									var row_scope = "<option value='"+typeScope[pass]+"'>"+typeScope[text]+"</option>"
									pass = Number(parseInt(pass) + parseInt(2));
									text = Number(parseInt(text) + parseInt(2))
									$("#medical_scope"+no).append(row_scope);
								}
								
								
								var medical_beg_val = med_sched.beg_period;
								var medical_end_val = med_sched.end_period;
								if(med_sched.beg_period_type == 'POLICY_YEAR_BEG'){
									$('#medical_fromAge'+no+'').prop('disabled', true);	
									$('#medical_fromYear'+no+'').val(medical_beg_val);
									
								}else if(med_sched.beg_period_type == 'ATT_AGE_BEG'){
									$('#medical_fromYear'+no+'').prop('disabled', true);	
									$('#medical_fromAge'+no+'').val(medical_beg_val);
								}
								
								if(med_sched.end_period_type == 'POLICY_YEAR_END'){
									$('#medical_toAge'+no+'').prop('disabled', true);
									$('#medical_toYear'+no+'').val(medical_end_val);
									
								}else if(med_sched.end_period_type == 'ATT_AGE_END'){
									$('#medical_toYear'+no+'').prop('disabled', true);
									$('#medical_toAge'+no+'').val(medical_end_val);
								}
								
								
								$('#medical_year'+no+'').val(med_sched.freq_period);
																
								$('#medical_amount'+no+'').val(numberWithCommas(parseFloat(med_amount.benef_amt).toFixed(2)));
								$("#medical_unit"+no+" option[value="+med_amount.benef_unit+"]").attr("selected", true);
								$("#medical_factor"+no+" option[value="+med_amount.benef_factor+"]").attr("selected", true);
								$("#medical_scope"+no+" option[value="+med_amount.benef_scope+"]").attr("selected", true);
										
										
								no++;
					}

		}
	}
	
	/*เงินปันผล*/
	var obj_dividend_tab = response.Tab_Benefits[0].dividend[0];
	if(response.Tab_Benefits[0].dividend.length > 0){
		
		if(obj_dividend_tab.sched_01.length > 0 && obj_dividend_tab.amount_01.length > 0){
			var obj_sched1 = response.Tab_Benefits[0].dividend[0].sched_01[0];
			var obj_amoun1 = response.Tab_Benefits[0].dividend[0].amount_01[0];
			$("#cbBoxDV1").prop("checked", true);
			$("#DVList1").prop("disabled",false);
			$("#DvList1_Year").prop("disabled", false);
			$("#DVBox1").prop("disabled", false);
			$("#DVList1_Cal").prop("disabled", false);
			
			$("#validate_DVList1_OL").hide();
			$("#validate_DvList1_Year_OL").hide();
			$("#validate_DVList1_Cal_OL").hide();
			
			$("#DVList1 option[value="+obj_sched1.beg_period_type+"]").attr("selected", true);
			$("#DvList1_Year option[value="+obj_amoun1.benef_scope+"]").attr("selected", true);
			$("#DVBox1").val(obj_sched1.beg_period);
			$("#DVList1_Cal option[value="+obj_sched1.formula_id+"]").attr("selected", true);
		}
		
		
	

		
		if(obj_dividend_tab.item_02.length > 0){
			var is_from_file_checked = obj_dividend_tab.item_02[0];
			
			if(is_from_file_checked.is_from_file == true){
				$("#cbBoxDV2").prop("checked", true);
				$("#GuaranteeOL_opt1").prop("checked", true);
				/*getFile*/
				
				if(obj_dividend_tab.file_dividend.length > 0){
					
					$("#spanBoxGuaruntee_OL").attr("disabled", false);
					$("#select_fileGuaruntee_OL").attr("disabled", false);
					$("#benefit_Guaruntee_tbl").addClass("disabledAll");
					$('#btn_DV_add').prop('disabled', true);	
					$('#btn_DV_del').prop('disabled', true);
					$("input[name='GuaranteeOL_opt[]']").prop("disabled", false);
					
				
					for(i in obj_dividend_tab.file_dividend){
						var get_file_data = obj_dividend_tab.file_dividend[i];
						var fileName_dividend = get_file_data.file;
						if(typeClone == "Clone"){
							fileName_dividend = get_file_data.file.replace(cov_code_temp,new_cov_code)
						}
						
						$("#input_fileGuaruntee_OL").val(fileName_dividend);
						$("#layoutID_OL").val(get_file_data.layout);
						$("#fileID_OL").val(get_file_data.fileID);
						$("#rateCat_dividend_OL").val(get_file_data.pass);
						$("#validate_fileGuaruntee_OL").hide();
						$("#see_file_input_fileGuaruntee_OL").prop("disabled",false)
						$("#see_file_input_fileGuaruntee_OL").attr("onclick", "openFileTextBasePlan_OL('"+fileName_dividend+"','"+get_file_data.ref+"',22,'tb_DVSee_OL','modal_DVSee_OL')");
				    	
						}
					
						
					
				}
				
				
			}
			if(obj_dividend_tab.sched_02.length > 0 && obj_dividend_tab.amount_02.length > 0){

				$("#cbBoxDV2").prop("checked", true);
				$("#spanBoxGuaruntee_OL").attr("disabled", true);
				$("#select_fileGuaruntee_OL").attr("disabled", true);
				$('#btn_DV_add').prop('disabled', false);	
				$('#btn_DV_del').prop('disabled', false);
				$("#GuaranteeOL_opt2").prop("checked", true);
				$("input[name='GuaranteeOL_opt[]']").prop("disabled", false);
				$("#benefit_Guaruntee_tbl").removeClass("disabledAll");
				$("#validate_fileGuaruntee_OL").show();
				/*tbl*/
				var num_row = $("#benefit_Guaruntee_tbl tbody>tr").length;
				if(num_row > 0){
					$("#benefit_Guaruntee_tbl tbody>tr").remove();
					
				
					var no = 1;
					for(i in response.Tab_Benefits[0].dividend[0].sched_02){				
						var dividend_sched = response.Tab_Benefits[0].dividend[0].sched_02[i];
						var dividend_amount = response.Tab_Benefits[0].dividend[0].amount_02[i];
						
						var ftOnclick = 'imgCheckbox(this.id);';
						var	row = "<tr id='tbody_dividend"+no+"'>"+
									"<td width='50' class='text-center borderBlack' id='imgOK_div"+no+"' onclick='"+ftOnclick+"' style='vertical-align: middle;'><i class='glyphicon glyphicon-edit'></i></td>"+
									"<td width='200' class='text-center borderBlack'><select class='form-control DIVIDEND_TYPE' id='dividend_beg_type"+no+"'><option value='NONE'>None</option></select></td>"+
									"<td width='75' class='borderBlack' style='margin:0;'><input id='dividend_year"+no+"' maxlength='2' class='auto form-control margin-padding0 text-center' onkeyup='check_min_value_year_div("+no+"), replaceDot(this)' onkeypress='validate(event);' data-v-min='0' data-v-max='99' type='text' width='50' value=''></td>"+
			  						"<td width='75' class='borderBlack' style='margin:0;'><input id='dividend_amount"+no+"' class='form-control margin-padding0 text-center autoComma' onblur='select_unit_dividend("+no+");' type='text' width='50' value='0.00' data-v-min='0.00' data-v-max='999999999.99'></td>"+
									"<td width='200' class='text-center borderBlack'><select class='form-control UNIT_TYPE' onchange='select_unit_option_dividend("+no+");' id='dividend_unit"+no+"'><option value='NONE'>None</option></select></td>"+
									"<td width='200' class='text-center borderBlack'><select class='form-control BENEF_FACTOR' id='dividend_factor"+no+"'><option value='NONE'>None</option></select></td>"+
									"<td width='200' class='text-center borderBlack'><select class='form-control SCOPE_TYPE' id='dividend_scope"+no+"'><option value='NONE'>None</option></select></td>"+
									"</tr>";

						$("#benefit_Guaruntee_tbl tbody").append(row);
						/*$('.auto').autoNumeric('init');*/
						$(".autoComma").autoNumeric('init',{vMin: '0.00', vMax: '999999999.99'});
								
								var row_unit = "";
								var type = $("#benef_factor_OL").val();
									type = type.split(",");

								var pass = 0;
								var text = 1;
								for(i = 0 ; i < type.length/2 ; i++){
									var row_unit = "<option value='"+type[pass]+"'>"+type[text]+"</option>"
									pass = Number(parseInt(pass) + parseInt(2));
									text = Number(parseInt(text) + parseInt(2))
									$("#dividend_factor"+no).append(row_unit);
								}
								
								var row_fac = "";
								var typeFac = $("#benef_unit_OL").val();
								typeFac = typeFac.split(",");

								var pass = 0;
								var text = 1;
								for(i = 0 ; i < typeFac.length/2 ; i++){
									var row_fac = "<option value='"+typeFac[pass]+"'>"+typeFac[text]+"</option>"
									pass = Number(parseInt(pass) + parseInt(2));
									text = Number(parseInt(text) + parseInt(2))
									$("#dividend_unit"+no).append(row_fac);
								}
								
								var row_scope = "";
								var typeScope = $("#benef_scope_OL").val();
								typeScope = typeScope.split(",");

								var pass = 0;
								var text = 1;
								for(i = 0 ; i < typeScope.length/2 ; i++){
									var row_scope = "<option value='"+typeScope[pass]+"'>"+typeScope[text]+"</option>"
									pass = Number(parseInt(pass) + parseInt(2));
									text = Number(parseInt(text) + parseInt(2))
									$("#dividend_scope"+no).append(row_scope);
								}
								
								
								var row_dividend = "";
								var typeDividend = $("#benef_dividend_OL").val();
								typeDividend = typeDividend.split(",");

								var pass = 0;
								var text = 1;
								for(i = 0 ; i < typeDividend.length/2 ; i++){
									var row_dividend = "<option value='"+typeDividend[pass]+"'>"+typeDividend[text]+"</option>"
									pass = Number(parseInt(pass) + parseInt(2));
									text = Number(parseInt(text) + parseInt(2))
									$("#dividend_beg_type"+no).append(row_dividend);
								}
								
								
								
								
								$("#dividend_beg_type"+no+" option[value="+dividend_sched.beg_period_type+"]").attr("selected", true);
								$("#dividend_year"+no+"").val(dividend_sched.beg_period);
								
								$('#dividend_amount'+no+'').val(numberWithCommas(parseFloat(dividend_amount.benef_amt).toFixed(2)));
								$("#dividend_unit"+no+" option[value="+dividend_amount.benef_unit+"]").attr("selected", true);
								$("#dividend_factor"+no+" option[value="+dividend_amount.benef_factor+"]").attr("selected", true);
								$("#dividend_scope"+no+" option[value="+dividend_amount.benef_scope+"]").attr("selected", true);
										
										
								no++;
								
					}
			
			
			}
			

			}
		}


	}
	
	}
function numberWithCommas(x) {
	   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function openFileTextBasePlan_OL(file_name,file_ref,tableCol,tb_name,modal_name){

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
    		  
    		  $("#download_tb_inputExtra_RateView_OL").attr("onclick", "openFile_target('"+file_name+"','"+file_ref+"','txt_download')");
    	      
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
		   
		   $("#download_tb_TaxReduce_view_OL").attr("onclick", "openFile_target('"+file_name+"','"+file_ref+"','txt_download')");
		   $("#download_tbl_PMRatePlan4Col_OL").attr("onclick", "openFile_target('"+file_name+"','"+file_ref+"','txt_download')");
		   
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
    		   
    		   $("#download_tbl_ExtraRatePlan_OL").attr("onclick", "openFile_target('"+file_name+"','"+file_ref+"','txt_download')");
    		   
          }else if(tableCol == 31){
    		  col1 = textRow[i].substr(0,2);
    		  col2 = textRow[i].substr(2,3);
    		  col3 = textRow[i].substr(5,7);

    		  tableRow += "<tr>"+
				"<td class='text-center'>"+col1+"</td>"+
				"<td class='text-center'>"+col2+"</td>"+
				"<td class='text-center'>"+col3+"</td>"+
				"</tr>";
    		  
    		  
    		  $("#download_tb_inputSA_OL_Rate").attr("onclick", "openFile_target('"+file_name+"','"+file_ref+"','txt_download')");
    	      
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
    		   
    		   $("#download_tb_inputDisSA_OL_Rate").attr("onclick", "openFile_target('"+file_name+"','"+file_ref+"','txt_download')");
     	      
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
    		   
    		   $("#download_tbl_StandardRisk_OL").attr("onclick", "openFile_target('"+file_name+"','"+file_ref+"','txt_download')");
      	      
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
    		   
    		   $("#download_tbl_NotStandardRisk_OL").attr("onclick", "openFile_target('"+file_name+"','"+file_ref+"','txt_download')");
    		   $("#download_tbl_StandardRisk_OL").attr("onclick", "openFile_target('"+file_name+"','"+file_ref+"','txt_download')");
      	      
    		   
          }else if(tableCol == 22){
      		   col1 = textRow[i].substr(0,4);
    		   col2 = textRow[i].substr(4,2);
    		   col3 = textRow[i].substr(6,2);
    		   col4 = textRow[i].substr(8,5);
    		  
    		   tableRow += "<tr>"+
    			"<td class='text-center'>"+col1+"</td>"+
    			"<td class='text-center'>"+col2+"</td>"+
    			"<td class='text-right'>"+col3+"</td>"+
    			"<td class='text-right'>"+col4+"</td>"+
    			"</tr>";   
    		   $("#download_tb_DVSee_OL").attr("onclick", "openFile_target('"+file_name+"','"+file_ref+"','txt_download')");
          }else if(tableCol == 63){
        	   col1 = textRow[i].substr(0,4);
	   		   col2 = textRow[i].substr(4,1);
	   		   col3 = textRow[i].substr(5,1);
	   		   col4 = textRow[i].substr(6,2);
	   		   col5 = textRow[i].substr(8,5);
	   		   col6 = textRow[i].substr(13,1);
    		  
    		   tableRow += "<tr>"+
    		    "<td class='text-center'>"+col1+"</td>"+
	   			"<td class='text-center'>"+col2+"</td>"+
	   			"<td class='text-center'>"+col3+"</td>"+
	   			"<td class='text-right'>"+col4+"</td>"+
	   			"<td class='text-right'>"+col5+"</td>"+
	   			"<td class='text-center'>"+col6+"</td>"+
    			"</tr>";    
    		   
    		   $("#download_tb_TaxReduce_view2_OL").attr("onclick", "openFile_target('"+file_name+"','"+file_ref+"','txt_download')");
    		   $("#download_tbl_PMRatePlan4Col_OL").attr("onclick", "openFile_target('"+file_name+"','"+file_ref+"','txt_download')");
    		   
        	}else if(tableCol == 64){
        	   col1 = textRow[i].substr(0,4);
	   		   col2 = textRow[i].substr(4,1);
	   		   col3 = textRow[i].substr(5,1);
	   		   col4 = textRow[i].substr(6,2);
	   		   col5 = textRow[i].substr(8,5);
	   		   col6 = textRow[i].substr(13,1);
    		  
    		   tableRow += "<tr>"+
    		    "<td class='text-center'>"+col1+"</td>"+
	   			"<td class='text-center'>"+col2+"</td>"+
	   			"<td class='text-center'>"+col3+"</td>"+
	   			"<td class='text-right'>"+col4+"</td>"+
	   			"<td class='text-right'>"+col5+"</td>"+
	   			"<td class='text-center'>"+col6+"</td>"+
    			"</tr>";    
    		   
    		   $("#download_tb_TaxReduce_view_OL").attr("onclick", "openFile_target('"+file_name+"','"+file_ref+"','txt_download')");
    		   $("#download_tbl_PMRatePlan4Col_OL").attr("onclick", "openFile_target('"+file_name+"','"+file_ref+"','txt_download')");
    		   
        	  }else if(tableCol == 55){
     		   col1 = textRow[i].substr(0,2);
    		   col2 = textRow[i].substr(2,14);
    		   col3 = textRow[i].substr(16,14);
    		   col4 = textRow[i].substr(30,14);
    		   col5 = textRow[i].substr(44,14);
    		  
    		   tableRow += "<tr>"+
    			"<td class='text-center'>"+col1+"</td>"+
    			"<td class='text-center'>"+col2+"</td>"+
    			"<td class='text-center'>"+col3+"</td>"+
    			"<td class='text-center'>"+col4+"</td>"+
    			"<td class='text-center'>"+col5+"</td>"+
    			"</tr>"; 
    		   
    		   $("#download_tbl_ETIRPU_OL").attr("onclick", "openFile_target('"+file_name+"','"+file_ref+"','txt_download')");
              }

        
      }
      $("#"+tableName+">tbody").append(tableRow);	    	    	  	

      /*if ($.fn.dataTable.isDataTable( "#"+tableName ) ) {   	  
    	  var table = $("#"+tableName).DataTable();
    	  table.destroy();
      }else{      
    	 
    	  $("#"+tableName).DataTable({"ordering": false,"paging": false,"bInfo" : false, 
			  "oLanguage": {
		      "sSearch": "ค้นหา: "
		    }
		  });
      }*/
      
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

function onchangeDividendType_OL(){
	var dvd_type = $("#DVList1 option:selected").val();
	var dvd_list_year = $("#DvList1_Year option:selected").val();
	var dvd_for = $("#DVList1_Cal option:selected").val();
	if(dvd_type != "NONE"){
		$("#validate_DVList1_OL").hide();
	}else{
		$("#validate_DVList1_OL").show();
	}
	
	if(dvd_list_year != "NONE"){
		$("#validate_DvList1_Year_OL").hide();
	}else{
		$("#validate_DvList1_Year_OL").show();
	}
	
	if(dvd_for != "NONE"){
		$("#validate_DVList1_Cal_OL").hide();
	}else{
		$("#validate_DVList1_Cal_OL").show();
	}
}

/**********Khwan fix 25/11/2019*************/
$("#menu_OL_5").click(function(){
	/*for show tab_benefit*/
	if($("#rd_Time_length_ol").prop("checked") == true){
		var year_val = $("#tb_BasicInformation1_OL tbody>tr:last").find("td:nth-child(4) input").val();
		if(year_val != ""){
			$("#show_type_contract").val("ปี");
			$("#show_value_contract").val(year_val);
		}
	}else{
		var text_anniversary_ol = $('#text_anniversary_ol').val();
		 if(text_anniversary_ol != ""){
			$("#show_type_contract").val("อายุ");
			$("#show_value_contract").val(text_anniversary_ol);
		 }
	}
});

function isNumberKey(evt)
{
   var charCode = (evt.which) ? evt.which : event.keyCode
   if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;

   return true;
}

function Insertpattern_OL(){
	var lookup_rpu_female = $("#RPU_female_pattern_OL").val();
		lookup_rpu_female = lookup_rpu_female.split(",");
	var lookup_rpu_male = $("#RPU_male_pattern_OL").val();
		lookup_rpu_male = lookup_rpu_male.split(",");
	var lookup_eti_female = $("#ETI_female_pattern_OL").val();
		lookup_eti_female = lookup_eti_female.split(",");
	var lookup_eti_male = $("#ETI_male_pattern_OL").val();
		lookup_eti_male = lookup_eti_male.split(",");
		
	// RPU	
	var pass = 0;
	var text = 1;
	var text2 = 2;
	var rpu_male_pattern = "";
	for(i = 0 ; i < lookup_rpu_male.length/3 ; i++){
		rpu_male_pattern += lookup_rpu_male[text2];
		if(i%3 == 0){
			rpu_male_pattern += " หรือ ";
		}
		text2 = Number(parseInt(text2) + parseInt(3));
	}	
	
	$("#input_file_mort1_OL").attr("placeholder",rpu_male_pattern);
	
	var pass = 0;
	var text = 1;
	var text2 = 2;
	var rpu_female_pattern = "";
	for(i = 0 ; i < lookup_rpu_female.length/3 ; i++){
		rpu_female_pattern += lookup_rpu_female[text2];
		if(i%3 == 0){
			rpu_female_pattern += " หรือ ";
		}
		text2 = Number(parseInt(text2) + parseInt(3));
	}
	
	$("#input_file_mort2_OL").attr("placeholder",rpu_female_pattern);
	
	//ETI
	var pass = 0;
	var text = 1;
	var text2 = 2;
	var eti_male_pattern = "";
	for(i = 0 ; i < lookup_eti_male.length/3 ; i++){
		eti_male_pattern += lookup_eti_male[text2];
		if(i%3 == 0){
			eti_male_pattern += " หรือ ";
		}
		text2 = Number(parseInt(text2) + parseInt(3));
	}
	
	$("#input_file_mort3_OL").attr("placeholder",eti_male_pattern);
	
	var pass = 0;
	var text = 1;
	var text2 = 2;
	var eti_female_pattern = "";
	for(i = 0 ; i < lookup_eti_female.length/3 ; i++){
		eti_female_pattern += lookup_eti_female[text2];
		if(i%3 == 0){
			eti_female_pattern += " หรือ ";
		}
		text2 = Number(parseInt(text2) + parseInt(3));
	}
	
	$("#input_file_mort4_OL").attr("placeholder",eti_female_pattern);
	
}

$(document).on('focusin', '#txb_newTable_OL', function(){
    $("#old_txb_newTable_OL").val($(this).val());
});

$(document).on('focusin', '#txb_newTable_rate_OL', function(){
    $("#old_txb_newTable_rate_OL").val($(this).val());
})

function putValue_newTable_OL(){
	var year = $("#txb_newTable_OL").val();
	var rate = $("#txb_newTable_rate_OL").val();
		rate = rate.replace(".","");
	
	var old_year = $("#old_txb_newTable_OL").val();
	var old_rate = $("#old_txb_newTable_rate_OL").val();
		old_rate = old_rate.replace(".","");
	
    var year_replace = "";
    var rate_raplace = "";

	if(year != "" && year.length == 4 && rate != ""){
		
		var chk_ETI = $("#ch_ETI_ol").prop("checked");
		var chk_RPU = $("#ch_RPU_ol").prop("checked");
		
		if(chk_ETI == true){
			$("#input_file_mort3_OL, #input_file_mort4_OL").prop("disabled", false);
			$("#spanBoxMort3_OL, #spanBoxMort4_OL").attr("disabled", false);
			$("#select_file_Mort3_OL, #select_file_Mort4_OL").prop("disabled", false);
		}
		
		if(chk_RPU == true){
			$("#input_file_mort1_OL, #input_file_mort2_OL").prop("disabled", false);
			$("#spanBoxMort1_OL, #spanBoxMort2_OL").attr("disabled", false);
			$("#select_file_Mort1_OL, #select_file_Mort2_OL").prop("disabled", false);
		}
		
		//placeholder
		var new_pattern1 = $("#input_file_mort1_OL").attr("placeholder");
		var new_pattern1_split = new_pattern1.split(" หรือ ");
		
		if(old_year == ""){
			year_replace = "{ปีพ.ศ.}";			
		}else{		
			year_replace = old_year;				
		}
		
		if(old_rate == ""){
			rate_raplace = "{ดอกเบี้ย}";
		}else{
			rate_raplace = old_rate;
		}
		
		var new_pattern1_1 = new_pattern1_split[0].replace(year_replace,year);
			new_pattern1_1 = new_pattern1_1.replace(rate_raplace, rate);
		var new_pattern1_2 = new_pattern1_split[1].replace(year_replace,year);
			new_pattern1_2 = new_pattern1_2.replace(rate_raplace, rate);
		
		var new_pattern2 = $("#input_file_mort2_OL").attr("placeholder");
		var new_pattern2_split = new_pattern2.split(" หรือ ");
		
		var new_pattern2_1 = new_pattern2_split[0].replace(year_replace,year);
			new_pattern2_1 = new_pattern2_1.replace(rate_raplace, rate);
		var new_pattern2_2 = new_pattern2_split[1].replace(year_replace,year);
			new_pattern2_2 = new_pattern2_2.replace(rate_raplace, rate);
		
		var new_pattern3 = $("#input_file_mort3_OL").attr("placeholder");
		var new_pattern3_split = new_pattern3.split(" หรือ ");
		
		var new_pattern3_1 = new_pattern3_split[0].replace(year_replace,year);
			new_pattern3_1 = new_pattern3_1.replace(rate_raplace, rate);
		var new_pattern3_2 = new_pattern3_split[1].replace(year_replace,year);
			new_pattern3_2 = new_pattern3_2.replace(rate_raplace, rate);
		
		var new_pattern4 = $("#input_file_mort4_OL").attr("placeholder");
		var new_pattern4_split = new_pattern4.split(" หรือ ");
		
		var new_pattern4_1 = new_pattern4_split[0].replace(year_replace,year);
			new_pattern4_1 = new_pattern4_1.replace(rate_raplace, rate);
		var new_pattern4_2 = new_pattern4_split[1].replace(year_replace,year);
			new_pattern4_2 = new_pattern4_2.replace(rate_raplace, rate);

		$("#input_file_mort1_OL").attr("placeholder", new_pattern1_1+" หรือ "+new_pattern1_2);
		$("#input_file_mort2_OL").attr("placeholder", new_pattern2_1+" หรือ "+new_pattern2_2);
		$("#input_file_mort3_OL").attr("placeholder", new_pattern3_1+" หรือ "+new_pattern3_2);
		$("#input_file_mort4_OL").attr("placeholder", new_pattern4_1+" หรือ "+new_pattern4_2);
		
		//onchange
		/*$("#select_file_Mort1_OL").attr("onchange","selectFileMain_OL('1','select_file_Mort1_OL','"+new_pattern1_1.replace(".txt","")+"','"+new_pattern1_2.replace(".txt","")+"')");
		$("#select_file_Mort2_OL").attr("onchange","selectFileMain_OL('1','select_file_Mort2_OL','"+new_pattern2_1.replace(".txt","")+"','"+new_pattern2_2.replace(".txt","")+"')");
		$("#select_file_Mort3_OL").attr("onchange","selectFileMain_OL('1','select_file_Mort3_OL','"+new_pattern3_1.replace(".txt","")+"','"+new_pattern3_2.replace(".txt","")+"')");
		$("#select_file_Mort4_OL").attr("onchange","selectFileMain_OL('1','select_file_Mort4_OL','"+new_pattern4_1.replace(".txt","")+"','"+new_pattern4_2.replace(".txt","")+"')");*/
		
		var rate_cat_RPU = $("#RPU_ratecat_OL").val();
		var rate_cat_ETI = $("#ETI_ratecat_OL").val();
		
		//RPU Male
		var rate_layout_RPU_Male = $("#RPU_male_pattern_OL").val();
			rate_layout_RPU_Male = rate_layout_RPU_Male.split(",");
		var rate_layout_RPU_Male1 = rate_layout_RPU_Male[0];
		var rate_layout_RPU_Male2 = rate_layout_RPU_Male[3];
		
		//RPU Female
		var rate_layout_RPU_Female = $("#RPU_female_pattern_OL").val();
			rate_layout_RPU_Female = rate_layout_RPU_Female.split(",");
		var rate_layout_RPU_Female1 = rate_layout_RPU_Female[0];
		var rate_layout_RPU_Female2 = rate_layout_RPU_Female[3];
		
		//ETI Male
		var rate_layout_ETI_Male = $("#ETI_male_pattern_OL").val();
			rate_layout_ETI_Male = rate_layout_ETI_Male.split(",");
		var rate_layout_ETI_Male1 = rate_layout_ETI_Male[0];
		var rate_layout_ETI_Male2 = rate_layout_ETI_Male[3];
		
		//ETI Female
		var rate_layout_ETI_Female = $("#ETI_female_pattern_OL").val();
			rate_layout_ETI_Female = rate_layout_ETI_Female.split(",");
		var rate_layout_ETI_Female1 = rate_layout_ETI_Female[0];
		var rate_layout_ETI_Female2 = rate_layout_ETI_Female[3];

		$("#select_file_Mort1_OL").attr("onchange","selectFileTXTMain_OL("+rate_cat_RPU+", 11,'select_file_Mort1_OL',"+rate_layout_RPU_Male1+","+rate_layout_RPU_Male2+",'','"+new_pattern1_1.replace(".txt","")+"','"+new_pattern1_2.replace(".txt","")+"','','cv_tmo1_OL');");
		$("#select_file_Mort2_OL").attr("onchange","selectFileTXTMain_OL("+rate_cat_RPU+", 11,'select_file_Mort2_OL',"+rate_layout_RPU_Female1+","+rate_layout_RPU_Female2+",'','"+new_pattern2_1.replace(".txt","")+"','"+new_pattern2_2.replace(".txt","")+"','','cv_tmo2_OL');");
		$("#select_file_Mort3_OL").attr("onchange","selectFileTXTMain_OL("+rate_cat_ETI+", 11,'select_file_Mort3_OL',"+rate_layout_ETI_Male1+","+rate_layout_ETI_Male2+",'','"+new_pattern3_1.replace(".txt","")+"','"+new_pattern3_2.replace(".txt","")+"','','cv_tmo3_OL');");
		$("#select_file_Mort4_OL").attr("onchange","selectFileTXTMain_OL("+rate_cat_ETI+", 11,'select_file_Mort4_OL',"+rate_layout_ETI_Female1+","+rate_layout_ETI_Female2+",'','"+new_pattern4_1.replace(".txt","")+"','"+new_pattern4_2.replace(".txt","")+"','','cv_tmo4_OL');");
		
	}
	
}

function selectFileMain_OL(type,select_file,file_format,file_format2){
	var tbl_name = "";
	var tbl_col = "";
	var dd_opt = "";
	
	var cov_code = $("#pass_Insurance_coverage_ol").val();
	var tr_tbl = "";
	var data_level = "";
	var data_group = "";
	var rate_type = "";
	var rate_band_type = "";
	var download_modal = "";
	/*file*/
	var file_id = 0;
	var file_type_id = 3;
	var file_path = "";
	var file_pattern = "";
	var user_code = "0000000";	
	var select_id = "";
	var input_file = "";
	var rate_LayoutID = "";
	var validateID = "";
	var flagID = "";
	
	if(type == 1){
		//modal & table
		tbl_name = "tbl_ETIRPU_OL";
		tblAuto_name = "tbl_ETIRPUAuto_OL";
		modal_name = "ETIRPUAuto_OL";
		modal_cv = "ETIRPU_OL";
		tbl_col = 55;
		dd_opt = "";
		
		select_id = select_file.replace("select_file_Mort","");
		select_id = select_id.replace("_OL","");
		input_file = "input_file_mort"+select_id+"_OL";
		cv_button = "cv_tmo"+select_id+"_OL";
		validateID = "validate_inputMort"+select_id+"_OL";
		
		download_modal = "download_tbl_ETIRPU_OL";
		file_button1 = "btn_submit_ETIRPUAuto_OL";
		file_button2 = "btn_cancel_ETIRPUAuto_OL";

		downloadFile = "";
		
		if(select_id == 1){
			fileID = "rpu_male_fileID_OL";
			rate_LayoutID = "rpu_male_rateLayout_OL";
			rate_cat_id = $("#RPU_ratecat_OL").val();
			sub_cat_id = $("#RPU_subcatMale_OL").val();
			flagID = "flag_RPU_male_OL";
		}else if(select_id == 2){
			fileID = "rpu_female_fileID_OL";
			rate_LayoutID = "rpu_female_rateLayout_OL";
			rate_cat_id = $("#RPU_ratecat_OL").val();
			sub_cat_id = $("#RPU_subcatFeMale_OL").val();
			flagID = "flag_RPU_female_OL";
		}else if(select_id == 3){
			fileID = "eti_male_fileID_OL";
			rate_LayoutID = "eti_male_rateLayout_OL";
			rate_cat_id = $("#ETI_ratecat_OL").val();
			sub_cat_id = $("#ETI_subcatMale_OL").val();
			flagID = "flag_ETI_male_OL";
		}else if(select_id == 4){
			fileID = "eti_female_fileID_OL";
			rate_LayoutID = "eti_female_rateLayout_OL";
			rate_cat_id = $("#ETI_ratecat_OL").val();
			sub_cat_id = $("#ETI_subcatFeMale_OL").val();
			flagID = "flag_ETI_female_OL";
		}		
	}
			
	$("#"+select_file).click(function () {
	    this.value = null;
	});
	
	$("#"+tblAuto_name+" tbody").empty();
	$("#"+tbl_name+" tbody").empty();
	var file_name = $("#"+select_file).val().replace(/\\/g, '/').replace(/.*\//, '');	
		file_path = $("#"+select_file).val();
	
	if($("#"+input_file).val() == ""){
		file_id = "";
	}else{
		file_id = $("#"+fileID).val();
	}		
	//$("#select_file_"+select_file+"_CL").unbind("change");
	if(type == 1){
		var year = $("#txb_newTable_OL").val();
		var rate = $("#txb_newTable_rate_OL").val();
			rate = rate.replace(".","");
		file_pattern = file_name.replace(year, "{ปีพ.ศ.}");
		file_pattern = file_pattern.replace(rate,"{ดอกเบี้ย}");
	}
	
	$("#"+modal_name+" .modal-header>h4>span").text(file_name);
	$("#"+modal_cv+" .modal-header>h4>span").text(file_name);
	
	$("#"+file_button1).unbind();
	
	if(file_format2 != ""){				
		if(check_filename(select_file, file_format, file_format2) == false){
			$("#"+input_file).val("");
			$("#"+select_file).val("");
			$('#'+cv_button).prop('disabled', true);
			
			if(type != 1){
				$("#"+validateID).css("display", "inline-block");
			}
			
		}else{			
			openFile(event,select_file,tbl_name,tbl_col);
			openFile(event,select_file,tblAuto_name,tbl_col);
			
			$("#base64_fileTXT_OL").val("");
			
			$("#"+modal_name).modal("show");
			
			convertToBase64_OL(select_file, file_type_id)
			
			$("#"+file_button1).unbind();
			$("#"+file_button1).click(function() {
				/*save file*/				
				//set_Filevalue(type,select_file,file_id,file_type_id,file_name,file_path,file_pattern,rate_cat_id,sub_cat_id,user_code);		
				/*end save file*/
				$("#modal_waiting").modal('show');
				var base64 = $("#base64_fileTXT_OL").val();
		    	   if( base64 != ""){
		    		   var dateTime = getCurrentDate();
		    		   var file_name_update = "3_"+dateTime+".txt"
		    			   datajson = {				        	
					    		"method" : "uploadFile_txt",
					    		"passInsurance" : $("#pass_Insurance_coverage_ol").val(),
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
					 	    	console.log(obj_ref);
					 	    	
								datajson = {				        	
										file_id 		: file_id,
										file_type_id 	: file_type_id,
										file_name 		: file_name,
										file_url		: obj_ref,
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
								    	
								    	$("#"+rate_LayoutID).val(response.rate_layout_id);
								    	$("#"+fileID).val(response.file_id);
								    	$("#"+input_file).val(file_name);
										$("#"+validateID).css("display", "none");
										$('#'+cv_button).prop('disabled', false);
										$("#modal_waiting").modal('hide');
										$("body").addClass("body_nopadding");
										$("#"+download_modal).attr("onclick", "openFile_target('"+file_name+"','"+obj_ref+"','txt_download')");
										$('#'+cv_button).attr("onclick", "openFileTextBasePlan_OL('"+file_name+"','"+obj_ref+"',"+tbl_col+",'"+tbl_name+"','"+modal_cv+"')");
										
										
										if(type == 1){
											$("#"+flagID).val("true");
										}
								    },
								    error : function(response) {	
								    	//console.log("save file error");
								    $("#modal_waiting").modal('hide');
									message = "ไม่สามารถบันทึกไฟล์ได้";
									alertError(message);
									
									$("#"+input_file).val("");

								    }
								});	
					 	    	
					 	    }
					    })
					    
		    	   }
				

			});
			
			$("#"+file_button2).click(function() {
				$("#"+input_file).val("");
				$("#"+select_file).val("");
				$('#'+cv_button).prop('disabled', true);
				
				if(type != 1){
					$("#"+validateID).css("display", "inline-block");
				}
			});
			
		}												
		
	}			
}

function getFile_ETI_RPU_OL(key){
	var file_ref = $("#"+key+" option:selected").attr("data-ref");
	var file_name = $("#"+key+" option:selected").attr("data-file");
	var cv_button = "";
	var rate_cat = "";
	var rate_layout = $("#"+key+" option:selected").attr("data-layout");
	
	tbl_name = "tbl_ModalMain_OL";
	modal_cv = "ModalMain_OL";
	download_modal = "download_tbl_ModalMain_OL";

	if(key == "dbBox3_2_OL"){
		cv_button = "tmo1_OL";
		rate_cat = $("#RPU_ratecat_OL").val();
	}else if(key == "dbBox3_3_OL"){
		cv_button = "tmo2_OL";
		rate_cat = $("#RPU_ratecat_OL").val();
	}else if(key == "dbBox3_5_OL"){
		cv_button = "tmo3_OL";
		rate_cat = $("#ETI_ratecat_OL").val();
	}else if(key == "dbBox3_6_OL"){
		cv_button = "tmo4_OL";
		rate_cat = $("#ETI_ratecat_OL").val();
	}
	
	var format_name = "ETIRPU_LayoutDet_OL_rateCat"+rate_cat+"_layout"+rate_layout;
	var format_name_col = "ETIRPU_Cols_LayoutDet_OL_rateCat"+rate_cat+"_layout"+rate_layout;
		
	var tbl_col = $("#"+format_name_col).val();
	
	if(file_ref != ""){
		//$('#'+cv_button).attr("onclick", "openFileTextBasePlan_OL('"+file_name+"','"+file_ref+"',"+tbl_col+",'"+tbl_name+"','"+modal_cv+"')");
		$('#'+cv_button).attr("onclick", "openFileTextMain('"+file_name+"','"+file_ref+"',"+tbl_col+",'"+tbl_name+"','"+modal_cv+"','"+download_modal+"','"+format_name+"')");
		$('#'+cv_button).prop("disabled", false);
	}else{
		$('#'+cv_button).prop("disabled", true);
	}
}

function validate_ETI_RPU_OL(){
	//validate ETI/RPU หน้าตารางมูลค่า
	$("#tablePolicy1_OL").prop("checked", true); 
	$("#tablePolicy2_OL").prop("checked", false);
	$("#oldTable_OL").show();
	$("#newTable_OL_year").hide();
	$("#newTable_OL").hide();
	$("#txb_newTable_OL").val("");
	$("#txb_newTable_rate_OL").val("");
	$("#input_file_mort1_OL, #input_file_mort2_OL, #input_file_mort3_OL, #input_file_mort4_OL").val(""); 
	$("#input_file_mort1_OL, #input_file_mort2_OL, #input_file_mort3_OL, #input_file_mort4_OL").prop("disabled", true); 
	$("#spanBoxMort1_OL, #spanBoxMort2_OL, #spanBoxMort3_OL, #spanBoxMort4_OL").attr("disabled", true);
	$("#select_file_Mort1_OL, #select_file_Mort2_OL, #select_file_Mort3_OL, #select_file_Mort4_OL").prop("disabled", true);
	$("#cv_tmo1_OL, #cv_tmo2_OL, #cv_tmo3_OL, #cv_tmo4_OL").prop("disabled", true);
}

/*****************Khwan Fix 06/12/2019 for layout det*********************/
/*Fix new get layout*/
function getLayout_tax_OL(rowTax, rate_cat, obj, cov_code){
	for(var j=0; j<obj.length;j++){
		var format1 = obj[0].layout+cov_code+".txt";
		var format2 = obj[1].layout+cov_code+".txt";
		var layoutID1 = obj[0].layout_id;
		var layoutID2 = obj[1].layout_id;
		
		if(j == 2){
			var format3 = obj[2].layout+cov_code+".txt";
			var layoutID3 = obj[2].layout_id;
		}else{
			var format3 = "";
			var layoutID3 = "";
		}		
	}

	if(format3 != ""){
		var tax_layout = format1+" หรือ "+format2+" หรือ "+format3;
		var tax_onclick = "selectFileTXTMain_OL("+rate_cat+", 1,'fileuploads_Tax"+rowTax+"_OL',"+layoutID1+","+layoutID2+","+layoutID3+",'"+format1.replace('.txt','')+"','"+format2.replace('.txt','')+"','"+format3.replace('.txt','')+"','span_TaxOpen_OL_"+rowTax+"')";
	}else{
		var tax_layout = format1+" หรือ "+format2;
		var tax_onclick = "selectFileTXTMain_OL("+rate_cat+", 1,'fileuploads_Tax"+rowTax+"_OL',"+layoutID1+","+layoutID2+",'','"+format1.replace('.txt','')+"','"+format2.replace('.txt','')+"','','span_TaxOpen_OL_"+rowTax+"')";
	}
	
	$("#fileuploads_TaxText"+rowTax+"_OL").attr("placeholder", tax_layout);
	$("#fileuploads_Tax"+rowTax+"_OL").attr("onchange", tax_onclick);
}

function getLayoutMain_OL(rate_cat, type, obj){
	var div_id = "";
	var hidden_name = "";
	var hidden_name_col = "";
	var rate_layout = "";
	var format_name = "";
	var format_name_col = "";
	var num_col = "";
	
	if(type == 1){
	//ลดหย่อนภาษี
		div_id = "ui005_Menu";
		hidden_name = "Tax_LayoutDet_OL"; 
		hidden_name_col = "Tax_Cols_LayoutDet_OL"; 
	}else if(type == 2){
	//เบี้ยมาตรฐาน
		div_id = "ui005_Menu";
		hidden_name = "PMRate_LayoutDet_OL"; 
		hidden_name_col = "PMRate_Cols_LayoutDet_OL"; 
	}else if(type == 3){
	//เบี้ยเพิ่มพิเศษ
		div_id = "ui005_Menu";
		hidden_name = "ExtraRate_LayoutDet_OL"; 
		hidden_name_col = "ExtraRate_Cols_LayoutDet_OL"; 
	}else if(type == 4){
	//EM
		div_id = "ui005_Menu";
		hidden_name = "EMRate_LayoutDet_OL"; 
		hidden_name_col = "EMRate_Cols_LayoutDet_OL"; 
	}else if(type == 5){
	//ทุนคุ้มครองที่ลดลง
		div_id = "ui005_Menu";
		hidden_name = "SARate_LayoutDet_OL"; 
		hidden_name_col = "SARate_Cols_LayoutDet_OL"; 
	}else if(type == 6){
	//ส่วนลดตามทุนประกัน
		div_id = "ui005_Menu";
		hidden_name = "DisSARate_LayoutDet_OL"; 
		hidden_name_col = "DisSARate_Cols_LayoutDet_OL"; 
	}else if(type == 7){
	//ความเสี่ยงภัยมาตรฐาน
		div_id = "ui005_Menu";
		hidden_name = "CVRate_LayoutDet_OL"; 
		hidden_name_col = "CVRate_Cols_LayoutDet_OL"; 
	}else if(type == 8){
	//ความเสี่ยงภัยต่ำกว่ามาตรฐาน
		div_id = "ui005_Menu";
		hidden_name = "CVLowRate_LayoutDet_OL"; 
		hidden_name_col = "CVLowRate_Cols_LayoutDet_OL"; 
	}else if(type == 9){
	//ตารางมรณะสำหรับคำนวณปิดบัญชี(RPU/ETI)
		div_id = "ui005_Menu";
		hidden_name = "ETIRPU_LayoutDet_OL"; 
		hidden_name_col = "ETIRPU_Cols_LayoutDet_OL"; 
	}
	
	for(var j=0; j<obj.length;j++){
		
		if(type == 1 || type == 2 || type == 3 || type == 4 || type == 5 || type == 6 || type == 7 || type == 8 || type == 9){
			rate_layout = obj[j].rate_layout_det[0].rate_layout_id;
			num_col = obj[j].rate_layout_det.length;
		}
		
		var format_col = [];
		format_name = hidden_name+"_rateCat"+rate_cat+"_layout"+rate_layout;
		format_name_col = hidden_name_col+"_rateCat"+rate_cat+"_layout"+rate_layout;
		
		for(var jj=0; jj<num_col; jj++){
			var obj_det = obj[j].rate_layout_det[jj];
			format_col.push(obj_det.column_name);
			format_col.push(obj_det.column_len);
		}
		
		$("#"+div_id).append("<input type='hidden' id='"+format_name_col+"' value='"+num_col+"'>");
		$("#"+div_id).append("<input type='hidden' id='"+format_name+"' value='"+format_col+"'>");
		
	}	
}

function selectFileTXTMain_OL(rate_cat,type,select_file,layout_id1,layout_id2,layout_id3,file_format,file_format2,file_format3){
	var tbl_name = "";
	var tbl_col = "";
	var dd_opt = "";
	
	var cov_code = $("#pass_Insurance_coverage_ol").val();
	var tr_tbl = "";
	var data_level = "";
	var data_group = "";
	var rate_type = "";
	var rate_band_type = "";
	var download_modal = "";
	
	/*file*/
	var fileID = "";
	var file_id = 0;
	var file_type_id = 3;
	var file_path = "";
	var file_pattern = "";
	var user_code = "0000000";	
	
	var select_id = "";
	var input_file = "";
	var rate_LayoutID = "";
	var validateID = "";
	var flagID = "";
	var DelID = "";
	
	var hidden_name = "";
	var hidden_name_col = "";
	var format_name = "";
	var format_name_col = "";
	var rate_layout = "";
	var obj_rate_split = "";
	//rate cat id ที่เอาไปใช้ save จริงของเบี้ย
	var rate_CatID = "";
	//rate cat ที่เอาไปใช้เรียก layout
	var rate_CatLayout = "";
	var rate_layoutID = "";
	
	var chk_file1 = 0;
	var chk_file2 = 0;
	var chk_file3 = 0;
	
	tbl_name = "tbl_ModalMain_OL";
	tblAuto_name = "tbl_ModalMainAuto_OL";
	modal_name = "ModalMainAuto_OL";
	modal_cv = "ModalMain_OL";
	download_modal = "download_tbl_ModalMain_OL";
	file_button1 = "btn_submit_ModalMainAuto_OL";
	file_button2 = "btn_cancel_ModalMainAuto_OL";
	
	if(type == 1){
		////ลดหย่อนภาษี
		hidden_name = "Tax_LayoutDet_OL"; 
		hidden_name_col = "Tax_Cols_LayoutDet_OL"; 
		
		dd_opt = "";
		
		select_id = select_file.replace("fileuploads_Tax","");
		select_id = select_id.replace("_OL","");
		input_file = "fileuploads_TaxText"+select_id+"_OL";
		cv_button = "span_TaxOpen_OL_"+select_id;
		validateID = "";
		downloadFile = "span_Taxdownload_OL_"+select_id;
		DelID = "span_TaxDel_OL_"+select_id;
		
		fileID = "hdd_fileID_OL"+select_id;
		rate_LayoutID = "hdd_layoutID_OL"+select_id;
		rate_cat_id = $("#tax_type_OL"+select_id).val();
		sub_cat_id = $("#hdd_rateSub_OL"+select_id).val();
		flagID = "";
		rate_CatID = "";
		rate_CatLayout = rate_cat;
		
	}else if(type == 2){
		////เบี้ยมาตรฐาน PM Rate
		hidden_name = "PMRate_LayoutDet_OL"; 
		hidden_name_col = "PMRate_Cols_LayoutDet_OL"; 
		
		dd_opt = "";
		
		select_id = select_file.replace("fileuploads_PMRate","");
		select_id = select_id.replace("_OL","");
		input_file = "fileuploads_PMRateText"+select_id+"_OL";
		cv_button = "span_PM_Rateopen_OL_"+select_id;
		validateID = "validate_rate"+select_id+"_OL";
		downloadFile = "span_PM_Ratedownload_OL_"+select_id;
		DelID = "";
		
		fileID = "rm_fileID_OL"+select_id;
		rate_LayoutID = "rm_rateLayout_OL"+select_id;
		
		sub_cat_id = $("#sl_menu3_insurance_premium_ol option:selected").attr("data-subcat");
		//rate_cat_id = findRateCat("PM",select_id,"s",sub_cat_id);
		obj_rate = findRateCat("PM",select_id,"s",sub_cat_id);
		console.log("obj>> "+obj_rate);
		
		obj_rate_split = obj_rate.split(",");
		
		rate_cat_id = obj_rate_split[0];
		rate_layoutID = obj_rate_split[1];

		flagID = "";
		rate_CatID = "rm_rateCat_OL"+select_id;
		rate_CatLayout = rate_cat_id;
		
	}else if(type == 3){
		////เบี้ยมาตรฐาน Band
		hidden_name = "PMRate_LayoutDet_OL"; 
		hidden_name_col = "PMRate_Cols_LayoutDet_OL"; 
		
		dd_opt = "";
		
		select_id = select_file.replace("fileuploads_PMRate","");
		select_id = select_id.replace("_OL","");
		input_file = "fileuploads_PMRateText"+select_id+"_OL";
		cv_button = "span_PM_Rateopen_OL_"+select_id;
		validateID = "validate_rate"+select_id+"_OL";
		downloadFile = "span_PM_Ratedownload_OL_"+select_id;
		DelID = "";
		
		fileID = "rm_fileID_OL"+select_id;
		rate_LayoutID = "rm_rateLayout_OL"+select_id;
		
		sub_cat_id = $("#sl_menu3_insurance_premium_ol option:selected").attr("data-subcat");
		//rate_cat_id = findRateCat("PM",select_id,"b",sub_cat_id);
		obj_rate = findRateCat("PM",select_id,"b",sub_cat_id);
		console.log("obj>> "+obj_rate);
		
		obj_rate_split = obj_rate.split(",");
		
		rate_cat_id = obj_rate_split[0];
		rate_layoutID = obj_rate_split[1];
		
		flagID = "";
		rate_CatID = "rm_rateCat_OL"+select_id;
		rate_CatLayout = rate_cat_id;
		
	}else if(type == 4){
		////Extra Rate
		hidden_name = "ExtraRate_LayoutDet_OL"; 
		hidden_name_col = "ExtraRate_Cols_LayoutDet_OL"; 
		
		dd_opt = "";
		
		select_id = select_file.replace("fileuploads_ExtraRate","");
		select_id = select_id.replace("_OL","");
		input_file = "fileuploads_ExtraRateText"+select_id+"_OL";
		cv_button = "span_Extra_Rateopen_OL_"+select_id;
		validateID = "validate_extrarate"+select_id+"_OL";
		downloadFile = "span_Extra_Ratedownload_OL_"+select_id;
		DelID = "";
		
		fileID = "ext_fileID_OL"+select_id;
		rate_LayoutID = "ext_rateLayout_OL"+select_id;
		
		sub_cat_id = $("#sl_insurance_premium_Extra_ol option:selected").attr("data-subcat");
		
		obj_rate = findRateCat("EM",select_id,"s",sub_cat_id);
		console.log("obj>> "+obj_rate);
		
		obj_rate_split = obj_rate.split(",");
		
		rate_cat_id = obj_rate_split[0];
		rate_layoutID = obj_rate_split[1];

		flagID = "";
		rate_CatID = "ext_rateCat_OL"+select_id;
		rate_CatLayout = rate_cat_id;
		
	}else if(type == 5){
		////EM age
		hidden_name = "EMRate_LayoutDet_OL"; 
		hidden_name_col = "EMRate_Cols_LayoutDet_OL"; 
		
		dd_opt = "";
		
		select_id = select_file.replace("select_fileCal_","");
		select_id = select_id.replace("_OL","");
		input_file = "input_fileCal_"+select_id+"_OL";
		cv_button = "cv_InputExtra_Rate_ol";
		validateID = "validate_filerate"+select_id+"_OL";
		downloadFile = "";
		DelID = "";
		
		fileID = "em_fileID"+select_id+"_OL";
		rate_LayoutID = "em_rateLayout"+select_id+"_OL";
		
		sub_cat_id = $("#rateSubCat_inputEM_OL").val();
		rate_cat_id = $("#rateCat_inputEM_OL").val();

		flagID = "";
		rate_CatID = "";
		rate_CatLayout = rate_cat;
		
	}else if(type == 6){
		////ทุนคุ้มครองที่ลดลง
		hidden_name = "SARate_LayoutDet_OL"; 
		hidden_name_col = "SARate_Cols_LayoutDet_OL"; 
		
		dd_opt = "";
		
		select_id = select_file.replace("select_fileCal_","");
		select_id = select_id.replace("_OL","");
		input_file = "input_fileCal_"+select_id+"_OL";
		cv_button = "cv_SAExtra_Rate_ol";
		validateID = "validate_filerate"+select_id+"_OL";
		downloadFile = "";
		DelID = "";
		
		fileID = "decrease_fileID"+select_id+"_OL";
		rate_LayoutID = "decrease_rateLayout"+select_id+"_OL";
		
		sub_cat_id = $("#sl_Reduced_capital_Cal2_OL option:selected").attr("data-subcat");
		rate_cat_id = $("#sl_Reduced_capital_Cal2_OL option:selected").attr("data-ratecat");

		flagID = "";
		rate_CatID = "";
		rate_CatLayout = rate_cat_id;
		
	}else if(type == 7){
		////ส่วนลดตามทุนประกัน
		hidden_name = "DisSARate_LayoutDet_OL"; 
		hidden_name_col = "DisSARate_Cols_LayoutDet_OL"; 
		
		dd_opt = "";
		
		select_id = select_file.replace("select_fileCal_","");
		select_id = select_id.replace("_OL","");
		input_file = "input_fileCal_"+select_id+"_OL";
		cv_button = "dsc_Input_ol";
		validateID = "validate_filerate"+select_id+"_OL";
		downloadFile = "";
		DelID = "";
		
		fileID = "dsc_fileID"+select_id+"_OL";
		rate_LayoutID = "dsc_rateLayout"+select_id+"_OL";
		
		sub_cat_id = $("#rateSubCat_inputDisSA_OL").val();
		rate_cat_id = $("#rateCat_inputDisSA_OL").val();

		flagID = "";
		rate_CatID = "";
		rate_CatLayout = rate_cat_id;
		
	}else if(type == 8){
		////ความเสี่ยงภัยมาตรฐาน
		hidden_name = "CVRate_LayoutDet_OL"; 
		hidden_name_col = "CVRate_Cols_LayoutDet_OL"; 
		
		dd_opt = "";
		
		select_id = select_file.replace("fileuploads_RateValue","");
		select_id = select_id.replace("_OL","");
		input_file = "fileuploads_RateValueText"+select_id+"_OL";
		cv_button = "span_RateValueopen_OL_"+select_id;
		validateID = "";
		downloadFile = "span_RateValuedownload_OL_"+select_id;
		DelID = "";
		
		fileID = "cv_fileID_OL"+select_id;
		rate_LayoutID = "cv_rateLayout_OL"+select_id;
		
		sub_cat_id = $("#dbBox1_OL option:selected").attr("data-subcat");
		//rate_cat_id = findRateCat("PM",select_id,"s",sub_cat_id);
		obj_rate = findRateCat("CV",select_id,"s",sub_cat_id);
		console.log("obj>> "+obj_rate);
		
		obj_rate_split = obj_rate.split(",");
		
		rate_cat_id = obj_rate_split[0];
		rate_layoutID = obj_rate_split[1];

		flagID = "";
		rate_CatID = "cv_rateCat_OL"+select_id;
		rate_CatLayout = rate_cat_id;
		
	}else if(type == 9){
		////ความเสี่ยงภัยมาตรฐาน Band
		hidden_name = "CVRate_LayoutDet_OL"; 
		hidden_name_col = "CVRate_Cols_LayoutDet_OL"; 
		
		dd_opt = "";
		
		select_id = select_file.replace("fileuploads_RateValue","");
		select_id = select_id.replace("_OL","");
		input_file = "fileuploads_RateValueText"+select_id+"_OL";
		cv_button = "span_RateValueopen_OL_"+select_id;
		validateID = "";
		downloadFile = "span_RateValuedownload_OL_"+select_id;
		DelID = "";
		
		fileID = "cv_fileID_OL"+select_id;
		rate_LayoutID = "cv_rateLayout_OL"+select_id;
		
		sub_cat_id = $("#dbBox1_OL option:selected").attr("data-subcat");
		//rate_cat_id = findRateCat("PM",select_id,"s",sub_cat_id);
		obj_rate = findRateCat("CV",select_id,"b",sub_cat_id);
		console.log("obj>> "+obj_rate);
		
		obj_rate_split = obj_rate.split(",");
		
		rate_cat_id = obj_rate_split[0];
		rate_layoutID = obj_rate_split[1];

		flagID = "";
		rate_CatID = "cv_rateCat_OL"+select_id;
		rate_CatLayout = rate_cat_id;
		
	}else if(type == 10){
		////ความเสี่ยงภัยต่ำกว่ามาตรฐาน
		hidden_name = "CVLowRate_LayoutDet_OL"; 
		hidden_name_col = "CVLowRate_Cols_LayoutDet_OL"; 
		
		dd_opt = "";
		
		select_id = select_file.replace("select_file_","");
		select_id = select_id.replace("_OL","");
		input_file = "input_file_"+select_id+"_OL";
		cv_button = "cv2_OL";
		validateID = "validate_input"+select_id+"_OL";
		downloadFile = "";
		DelID = "";
		
		fileID = "cvLow_fileID"+select_id+"_OL";
		rate_LayoutID = "cvLow_rateLayout"+select_id+"_OL";
		
		sub_cat_id = $("#dbBox2_OL option:selected").attr("data-subcat");
		rate_cat_id = $("#dbBox2_OL option:selected").attr("data-ratecat");

		flagID = "";
		rate_CatID = "";
		rate_CatLayout = rate_cat;
		
	}else if(type == 11){
		////ตารางมรณะสำหรับคำนวณปิดบัญชี(RPU/ETI)
		hidden_name = "ETIRPU_LayoutDet_OL"; 
		hidden_name_col = "ETIRPU_Cols_LayoutDet_OL"; 
		
		dd_opt = "";
		
		select_id = select_file.replace("select_file_Mort","");
		select_id = select_id.replace("_OL","");
		input_file = "input_file_mort"+select_id+"_OL";
		cv_button = "cv_tmo"+select_id+"_OL";
		validateID = "";
		downloadFile = "";
		DelID = "";
		
		if(select_id == 1){
			fileID = "rpu_male_fileID_OL";
			rate_LayoutID = "rpu_male_rateLayout_OL";
			rate_cat_id = $("#RPU_ratecat_OL").val();
			sub_cat_id = $("#RPU_subcatMale_OL").val();
			flagID = "flag_RPU_male_OL";
		}else if(select_id == 2){
			fileID = "rpu_female_fileID_OL";
			rate_LayoutID = "rpu_female_rateLayout_OL";
			rate_cat_id = $("#RPU_ratecat_OL").val();
			sub_cat_id = $("#RPU_subcatFeMale_OL").val();
			flagID = "flag_RPU_female_OL";
		}else if(select_id == 3){
			fileID = "eti_male_fileID_OL";
			rate_LayoutID = "eti_male_rateLayout_OL";
			rate_cat_id = $("#ETI_ratecat_OL").val();
			sub_cat_id = $("#ETI_subcatMale_OL").val();
			flagID = "flag_ETI_male_OL";
		}else if(select_id == 4){
			fileID = "eti_female_fileID_OL";
			rate_LayoutID = "eti_female_rateLayout_OL";
			rate_cat_id = $("#ETI_ratecat_OL").val();
			sub_cat_id = $("#ETI_subcatFeMale_OL").val();
			flagID = "flag_ETI_female_OL";
		}
		
		rate_CatID = "";
		rate_CatLayout = rate_cat_id;
		
	}
	
	/********File********/
	$("#"+select_file).click(function () {
	    this.value = null;
	});
	
	$("#"+tblAuto_name+" thead").empty();
	$("#"+tbl_name+" thead").empty();
	
	$("#"+tblAuto_name+" tbody").empty();
	$("#"+tbl_name+" tbody").empty();
	
	var file_name = $("#"+select_file).val().replace(/\\/g, '/').replace(/.*\//, '');	
		file_path = $("#"+select_file).val();
	
	if($("#"+input_file).val() == ""){
		file_id = "";
	}else{
		file_id = $("#"+fileID).val();
	}
	
	console.log("fileID>> "+fileID);
	console.log("ratecat>> "+rate_cat_id);
	//$("#select_file_"+select_file+"_CL").unbind("change");
	
	/*******Pattern*******/
	if(type == 1 || type == 5 || type == 6 || type == 7 || type == 10){
		file_pattern = file_name.replace(cov_code, "{Code}");
	}else if(type == 2){
		rate_type = $("#tbody_PM_Rate_OL"+select_id).find("td:nth-child(2) select>option:selected").text();
		
		file_pattern = file_name.replace(cov_code, "{Code}");
		file_pattern = file_pattern.replace(rate_type, "{ประเภท}");
	}else if(type == 3){
		data_group = $("#tbody_PM_Rate_OL"+select_id).attr("data-group");
		rate_type = $("#tbody_PM_Rate_OL"+data_group).find("td:nth-child(2) select>option:selected").text();
		rate_band_type = $("#tbody_PM_Rate_OL"+select_id).find("td:nth-child(2) label").text();
		
		file_pattern = file_name.replace(cov_code, "{Code}");
		file_pattern = file_pattern.replace(rate_type, "{ประเภท}");
		file_pattern = file_pattern.replace(rate_band_type, "{Bx}");
	}else if(type == 4){
		rate_type = $("#tbody_Extra_Rate_OL"+select_id).find("td:nth-child(1) label").text();
		
		file_pattern = file_name.replace(cov_code, "{Code}");
		file_pattern = file_pattern.replace(rate_type, "{ประเภท}");
	}else if(type == 8){
		rate_type = $("#tbody_Rate_Value_OL"+select_id).find("td:nth-child(1) label").text();
		
		file_pattern = file_name.replace(cov_code, "{Code}");
		file_pattern = file_pattern.replace(rate_type, "{ประเภท}");
	}else if(type == 9){
		data_group = $("#tbody_Rate_Value_OL"+select_id).attr("data-group");
		rate_type = $("#tbody_Rate_Value_OL"+data_group).find("td:nth-child(1) label").text();
		rate_band_type = $("#tbody_Rate_Value_OL"+select_id).find("td:nth-child(1) label").text();
		
		file_pattern = file_name.replace(cov_code, "{Code}");
		file_pattern = file_pattern.replace(rate_type, "{ประเภท}");
		file_pattern = file_pattern.replace(rate_band_type, "{Bx}");
	}else if(type == 11){
		var year = $("#txb_newTable_OL").val();
		var rate = $("#txb_newTable_rate_OL").val();
			rate = rate.replace(".","");
		file_pattern = file_name.replace(year, "{ปีพ.ศ.}");
		file_pattern = file_pattern.replace(rate,"{ดอกเบี้ย}");
	}
	/*******************/
	
	$("#"+modal_name+" .modal-header>h4>span").text(file_name);
	$("#"+modal_cv+" .modal-header>h4>span").text(file_name);
	
	$("#"+file_button1).unbind();
	
	if(check_filenameMain_OL(select_file, file_format, file_format2, file_format3) == false){
		$("#"+input_file).val("");
		$("#"+select_file).val("");
		$('#'+cv_button).prop('disabled', true);
		
		if(validateID != ""){
			$("#"+validateID).css("display", "inline-block");
		}
		
	}else{
		
		/***Get column****/

		if(file_name.replace(".txt","") == file_format){
			chk_file1 = 1;
		}else if(file_name.replace(".txt","") == file_format2){
			chk_file2 = 1;
		}else if(file_name.replace(".txt","") == file_format3){
			chk_file3 = 1;
		}
		
		if(type == 2 || type == 3 || type == 4 || type == 8 || type == 9){
			rate_layout = rate_layoutID;
		}else{
			if(chk_file1 == 1){
				rate_layout = layout_id1;
			}else if(chk_file2 == 1){
				rate_layout = layout_id2;
			}else if(chk_file3 == 1){
				rate_layout = layout_id3;
			}
		}
		
		
		format_name = hidden_name+"_rateCat"+rate_CatLayout+"_layout"+rate_layout;
		format_name_col = hidden_name_col+"_rateCat"+rate_CatLayout+"_layout"+rate_layout;
		
		tbl_col = $("#"+format_name_col).val();
		
		/****************/
		
		openFileMain(event,select_file,tbl_name,tbl_col,format_name);
		openFileMain(event,select_file,tblAuto_name,tbl_col,format_name);
		
		$("#base64_fileTXT_OL").val("");
		
		$("#"+modal_name).modal("show");
		
		convertToBase64_OL(select_file, file_type_id)
		
		$("#"+file_button1).unbind();
		$("#"+file_button1).click(function() {
			
			$("#modal_waiting").modal('show');
			var base64 = $("#base64_fileTXT_OL").val();
	    	   if( base64 != ""){
	    		   var dateTime = getCurrentDate();
	    		   var file_name_update = "3_"+dateTime+".txt"
	    			   datajson = {				        	
				    		"method" : "uploadFile_txt",
				    		"passInsurance" : $("#pass_Insurance_coverage_ol").val(),
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
				 	    	console.log(obj_ref);
				 	    	
							datajson = {				        	
									file_id 		: file_id,
									file_type_id 	: file_type_id,
									file_name 		: file_name,
									file_url		: obj_ref,
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
							    	
							    	$("#"+rate_LayoutID).val(response.rate_layout_id);
							    	$("#"+fileID).val(response.file_id);
							    	$("#"+input_file).val(file_name);
							    	
							    	if(rate_CatID != ""){
							    		$("#"+rate_CatID).val(rate_cat_id);
							    	}
							    	
							    	if(validateID != ""){
							    		$("#"+validateID).css("display", "none");
							    	}
							    	
									$('#'+cv_button).prop('disabled', false);
									$("#modal_waiting").modal('hide');
									$("body").addClass("body_nopadding");
									
									if(type == 1 || type == 2 || type == 3 || type == 4 || type == 8 || type == 9){
										$("#"+downloadFile+" span").attr("onclick", "openFile_target('"+file_name+"','"+obj_ref+"','txt_download')");
										$('#'+cv_button+" span").attr("onclick", "openFileTextMain('"+file_name+"','"+obj_ref+"',"+tbl_col+",'"+tbl_name+"','"+modal_cv+"','"+download_modal+"','"+format_name+"')");
										
										$('#'+cv_button+">span").removeClass("activecolorgray").addClass("activecolorblue");
										$("#"+downloadFile+">span").removeClass("activecolorgray").addClass("activecolorblue");
										
										if(DelID != ""){
											$("#"+DelID+">span").removeClass("activecolorgray").addClass("activecolorblue");
										}
										
									}else{
										if(downloadFile != ""){
											$("#"+downloadFile).attr("onclick", "openFile_target('"+file_name+"','"+obj_ref+"','txt_download')");
											$("#"+downloadFile).prop("disabled", false);
										}
										
										$('#'+cv_button).attr("onclick", "openFileTextMain('"+file_name+"','"+obj_ref+"',"+tbl_col+",'"+tbl_name+"','"+modal_cv+"','"+download_modal+"','"+format_name+"')");
										$('#'+cv_button).prop("disabled", false);
										
									}
									
									
									if(flagID != ""){
										$("#"+flagID).val("true");
									}
							    },
							    error : function(response) {	
							    	//console.log("save file error");
							    $("#modal_waiting").modal('hide');
								message = "ไม่สามารถบันทึกไฟล์ได้";
								alertError(message);
								
								$("#"+input_file).val("");

							    }
							});	
				 	    	
				 	    }
				    })
				    
	    	   }
		});
		
		$("#"+file_button2).click(function() {
			$("#"+input_file).val("");
			$("#"+select_file).val("");
			$('#'+cv_button).prop('disabled', true);
			
			if(type != 1){
				if(validateID != ""){
					$("#"+validateID).css("display", "inline-block");
				}		
			}
		});
		
	}												 			
}

function check_filenameMain_OL(fileID, fileFormat, fileFormat2, fileFormat3){
	var filename = document.getElementById(fileID).files[0].name.split('.');	
	if(fileFormat2 != "" && fileFormat3 == ""){
		if(filename[0] != fileFormat && filename[0] != fileFormat2){
	    	message = "กรุณานำเข้าไฟล์ที่ถูกต้อง";
			alertError(message);
			return false;
		}
	}else if(fileFormat2 != "" && fileFormat3 != ""){
		if(filename[0] != fileFormat && filename[0] != fileFormat2 && filename[0] != fileFormat3){
	    	message = "กรุณานำเข้าไฟล์ที่ถูกต้อง";
			alertError(message);
			return false;
		}
	}else{
		if(filename[0] != fileFormat){
	    	message = "กรุณานำเข้าไฟล์ที่ถูกต้อง";
			alertError(message);
			return false;
	 }
	}	
}

var openFileMain = function(event,fileID,tableName,tableCol,layoutDetID) {	
    var input = event.target;        
    var reader = new FileReader();
    var tableRow_header = "";
    var tableRow = "";

    reader.onload = function(){
      var text = reader.result;	      
      var textRow = text.split('\n');
      var textLength = textRow.length - 1;
      
      if(textLength > 50){
    	  textLength = 50;
      }else{
    	  textLength = textLength;
      }
      
      var Layout = $("#"+layoutDetID).val();
      console.log("layout>> "+layoutDetID);
      	  Layout = Layout.split(",");
      
      /******append header******/
      tableRow_header += "<tr style='background-color: #EEEEEE;'>";
      var col_name = 0;
      
      for(a=0 ; a<Layout.length/2; a++){		   
		   tableRow_header += "<th class='text-center'>"+Layout[col_name]+"</th>";

		   col_name = Number(parseInt(col_name) + parseInt(2));
		   
		}
	   
	   tableRow_header += "</tr>"
	  
	  $("#"+tableName+">thead").append(tableRow_header);
		   
      /******append data******/
      for(var i=0; i<textLength; i++ ) {

    	   var col_len = 1;
    	   var start = 0;
    	   
    	   tableRow += "<tr>";
    	   
    	   for(a=0 ; a<Layout.length/2; a++){
    		   var col = textRow[i].substr(start,Layout[col_len]);
    		   
    		   tableRow += "<td class='text-center'>"+col+"</td>";
    		   
    		   start = Number(start) + Number(Layout[col_len]);
 
    		   col_name = Number(parseInt(col_name) + parseInt(2));
    		   col_len = Number(parseInt(col_len) + parseInt(2));
    		   
    		}
    	   
		   tableRow += "</tr>"
		
      }
     
      $("#"+tableName+">tbody").append(tableRow);	
      
      if ($.fn.dataTable.isDataTable( "#"+tableName ) ) {   	  
    		  //$("#"+tableName).destroy();   	
      }else{      
    	
    	  $("#"+tableName).DataTable({"ordering": false,"paging": false,"bInfo" : false, 
			  "oLanguage": {
		      "sSearch": "ค้นหา: "
		    }
		  });
      }
      
    };   
    /*reader.readAsText(input.files[0]); */     
    setTimeout(function(){
   	 reader.readAsText(document.getElementById(fileID).files[0]);     
    }, 100);
    
}

function openFileTextMain(file_name,file_ref,tableCol,tb_name,modal_name,btn_download,layoutDetID){
	
	$("#"+tableName+">thead").empty();
	$("#"+tableName+">tbody").empty();
	
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

      var tableRow_header = "";
      var tableRow = "";
      
      var Layout = $("#"+layoutDetID).val();
      console.log("layout>> "+layoutDetID);
      	  Layout = Layout.split(",");
      
      /******append header******/
      tableRow_header += "<tr style='background-color: #EEEEEE;'>";
      var col_name = 0;
      
      for(a=0 ; a<Layout.length/2; a++){		   
		   tableRow_header += "<th class='text-center'>"+Layout[col_name]+"</th>";

		   col_name = Number(parseInt(col_name) + parseInt(2));
		   
		}
	   
	   tableRow_header += "</tr>"
	  
	  $("#"+tableName+">thead").append(tableRow_header);
      
	  /******append data******/
      for(var i=0; i<textLength; i++ ) {

    	   var col_len = 1;
    	   var start = 0;
    	   
    	   tableRow += "<tr>";
    	   
    	   for(a=0 ; a<Layout.length/2; a++){
    		   var col = textRow[i].substr(start,Layout[col_len]);
    		   
    		   tableRow += "<td class='text-center'>"+col+"</td>";
    		   
    		   start = Number(start) + Number(Layout[col_len]);
 
    		   col_name = Number(parseInt(col_name) + parseInt(2));
    		   col_len = Number(parseInt(col_len) + parseInt(2));
    		   
    		}
    	   
		   tableRow += "</tr>"
		   $("#"+btn_download).attr("onclick", "openFile_target('"+file_name+"','"+file_ref+"','txt_download')");
		
      } 
      
      $("#"+tableName+">tbody").append(tableRow);	    	    	  	

      if ($.fn.dataTable.isDataTable( "#"+tableName ) ) { 
    	  $("#"+tableName+">thead").empty();
    	  $("#"+tableName+">tbody").empty();
    	  $("#"+tableName+">thead").append(tableRow_header);	
    	  $("#"+tableName+">tbody").append(tableRow);	 
	
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