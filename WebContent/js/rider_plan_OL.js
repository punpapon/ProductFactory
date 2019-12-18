/**..
 * 
 */
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

 $("#div_main_menuOL_8 *").change(function(event){
	 nameTab 	= "menu_OL_8";
	 Statuesave = "N";
 });
 
 $("#benefitDetail_OL *").change(function(event){
	 nameTab 	= "menu_OL_5";
	 Statuesave = "N";
 });
 
 $("#btn_SaveEditBenefit1_OL, #btn_SaveEditBenefit2_OL, #btn_saveSelectCoverage_OL").click(function(){
	 nameTab 	= "menu_OL_5";
	 Statuesave = "N";
 });
 
 $("#btn_saveSelectRecord_OL").click(function(){
	 nameTab 	= "menu_OL_9";
	 Statuesave = "N";
 });
 
 $("#btn_submit_fileuploadPolicy_OL,#btn_submit_fileuploadPolicyWord_OL,#span_reset_pdf1_OL, #span_reset_word1_OL").click(function(){
		nameTab 	= "menu_OL_7";
		Statuesave = "N";
});
$('#Policy_Table_OL').on('input', function(){
	nameTab 	= "menu_OL_7";
	Statuesave = "N";
});

$("#mainRisk_OL *").change(function(){
	nameTab 	= "menu_CL_4";
	Statuesave = "N";
})

$("#benefitDetail_OL *").change(function(){
	nameTab 	= "menu_OL_5";
	Statuesave = "N";
})

var data ="";
/*เมนู CL*/
$("#menu_OL_1").click(function(){
	if (Statuesave == "N" && nameTab != "menu_OL_1") {
	 	$("#modal_Checkkeyup").modal("show");
	 	data = "menu_OL_1";
	}else{
		document.getElementById("ol_006_1_1-1").style.display = "block";
		document.getElementById("ol_006_1_1-3").style.display = "none";
		document.getElementById("ol_006_1_1-4").style.display = "none";
		document.getElementById("ol_006_1_1-5").style.display = "none";
		document.getElementById("ol_006_1_1-6").style.display = "none";
		document.getElementById("ol_006_1_1-7").style.display = "none";
		document.getElementById("ol_006_1_1-8").style.display = "none";
		document.getElementById("ol_006_1_1-9").style.display = "none";
	}
})

$("#menu_OL_3").click(function(){
	if (Statuesave == "N" && nameTab != "menu_OL_3") {
	 	$("#modal_Checkkeyup").modal("show");
	 	data = "menu_OL_3";
	}else{
		document.getElementById("ol_006_1_1-3").style.display = "block";
		document.getElementById("ol_006_1_1-1").style.display = "none";
		document.getElementById("ol_006_1_1-4").style.display = "none";
		document.getElementById("ol_006_1_1-5").style.display = "none";
		document.getElementById("ol_006_1_1-6").style.display = "none";
		document.getElementById("ol_006_1_1-7").style.display = "none";
		document.getElementById("ol_006_1_1-8").style.display = "none";
		document.getElementById("ol_006_1_1-9").style.display = "none";
		
		/*defalut 1 row*/
		var numrow = $("#tb_PM_Rate1_OL tbody>tr").length;
		if(numrow <= 0){
			addRowPM_Rate_OL();
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
	}else {
		document.getElementById("ol_006_1_1-4").style.display = "block";
		document.getElementById("ol_006_1_1-1").style.display = "none";
		document.getElementById("ol_006_1_1-3").style.display = "none";
		document.getElementById("ol_006_1_1-5").style.display = "none";
		document.getElementById("ol_006_1_1-6").style.display = "none";
		document.getElementById("ol_006_1_1-7").style.display = "none";
		document.getElementById("ol_006_1_1-8").style.display = "none";
		document.getElementById("ol_006_1_1-9").style.display = "none";
	}
})
$("#menu_OL_5").click(function(){
	if (Statuesave == "N" && nameTab != "menu_OL_5") {
	 	$("#modal_Checkkeyup").modal("show");
	 	data = "menu_OL_5";
	}else{
		document.getElementById("ol_006_1_1-5").style.display = "block";
		document.getElementById("ol_006_1_1-1").style.display = "none";
		document.getElementById("ol_006_1_1-3").style.display = "none";
		document.getElementById("ol_006_1_1-4").style.display = "none";
		document.getElementById("ol_006_1_1-6").style.display = "none";
		document.getElementById("ol_006_1_1-7").style.display = "none";
		document.getElementById("ol_006_1_1-8").style.display = "none";
		document.getElementById("ol_006_1_1-9").style.display = "none";
	}
})
$("#menu_OL_6").click(function(){
	if (Statuesave == "N" && nameTab != "menu_OL_6") {
	 	$("#modal_Checkkeyup").modal("show");
	 	data = "menu_OL_6";
	}else{
		document.getElementById("ol_006_1_1-6").style.display = "block";
		document.getElementById("ol_006_1_1-1").style.display = "none";
		document.getElementById("ol_006_1_1-3").style.display = "none";
		document.getElementById("ol_006_1_1-4").style.display = "none";
		document.getElementById("ol_006_1_1-5").style.display = "none";
		document.getElementById("ol_006_1_1-7").style.display = "none";
		document.getElementById("ol_006_1_1-8").style.display = "none";
		document.getElementById("ol_006_1_1-9").style.display = "none";
	}
})
$("#menu_OL_7").click(function(){
	if (Statuesave == "N" && nameTab != "menu_OL_7") {
	 	$("#modal_Checkkeyup").modal("show");
	 	data = "menu_OL_7";
	}else{
		document.getElementById("ol_006_1_1-7").style.display = "block";
		document.getElementById("ol_006_1_1-1").style.display = "none";
		document.getElementById("ol_006_1_1-3").style.display = "none";
		document.getElementById("ol_006_1_1-4").style.display = "none";
		document.getElementById("ol_006_1_1-5").style.display = "none";
		document.getElementById("ol_006_1_1-6").style.display = "none";
		document.getElementById("ol_006_1_1-8").style.display = "none";
		document.getElementById("ol_006_1_1-9").style.display = "none";
	}
})
$("#menu_OL_8").click(function(){
	if (Statuesave == "N" && nameTab != "menu_OL_8") {
	 	$("#modal_Checkkeyup").modal("show");
	 	data = "menu_OL_8";
	}else{
		document.getElementById("ol_006_1_1-8").style.display = "block";
		document.getElementById("ol_006_1_1-1").style.display = "none";
		document.getElementById("ol_006_1_1-3").style.display = "none";
		document.getElementById("ol_006_1_1-4").style.display = "none";
		document.getElementById("ol_006_1_1-5").style.display = "none";
		document.getElementById("ol_006_1_1-6").style.display = "none";
		document.getElementById("ol_006_1_1-7").style.display = "none";
		document.getElementById("ol_006_1_1-9").style.display = "none";
	
		/*get อายุ จาก Basic Info*/
		getAge_fromBasicInfo_OL();
	}
})
$("#menu_OL_9").click(function(){
	if (Statuesave == "N" && nameTab != "menu_OL_9") {
	 	$("#modal_Checkkeyup").modal("show");
	 	data = "menu_OL_9";
	}else{
		document.getElementById("ol_006_1_1-9").style.display = "block";
		document.getElementById("ol_006_1_1-1").style.display = "none";
		document.getElementById("ol_006_1_1-3").style.display = "none";
		document.getElementById("ol_006_1_1-4").style.display = "none";
		document.getElementById("ol_006_1_1-5").style.display = "none";
		document.getElementById("ol_006_1_1-6").style.display = "none";
		document.getElementById("ol_006_1_1-7").style.display = "none";
		document.getElementById("ol_006_1_1-8").style.display = "none";
	}
})
 $(document).ready(function(){
	/*$('#thai_Name_ol').keyup(function() {
		   var $th = $(this);
		   $th.val( $th.val().replace(/[^a-zA-Z0-9ก-๙\s\-\(\)]/g, "" ));
	});	
		
	$('#eng_Name_ol').keyup(function() {
			var $th = $(this);
			$th.val( $th.val().replace(/[^a-zA-Z0-9\s\-]/g, "" ));	 
	}); */
	
	$("#norisk_OL *").prop("disabled", "disabled").off('click');		
	//$("#RPU_OL *").attr("disabled", "disabled").off('click');
	$("#tbl_PolicyFile_OL *").attr("disabled", "disabled").off('click');
	
	$("#tbl_PolicyFile_OL,#tbl_PolicyFileWord_OL").DataTable({"ordering": false,"paging": false,"bInfo" : false, scrollY: '312px',scrollCollapse: true, "autoWidth": false, "oLanguage": {"sSearch": "ค้นหา: "}});	
	$("#tbl_HistoryPolicy_OL").DataTable({"ordering": false,"paging": false,"bInfo" : false, "searching" :false, scrollY: '185px',scrollCollapse: true, "autoWidth": false, "oLanguage": {"sSearch": "ค้นหา: "}});
	$(".datatbl_Historypolicy_OL .dataTables_scrollHeadInner").css({"width":"98%"});
	$(".datatbl_Historypolicy_OL .table").css({"width":"100%"});
	
	$(".datatbl_PolicyFile_OL .dataTables_scrollHeadInner,.datatbl_PolicyFileWord_OL .dataTables_scrollHeadInner").css({"width":"100%"});
	$(".datatbl_PolicyFile_OL .table, .datatbl_PolicyFileWord_OL .table").css({"width":"100%"});
	/*	
	$("#tbl_BenefitOpt1_OL,#tbl_BenefitOpt2_OL,#tbl_BenefitOpt2Sub_OL,#tbl_BenefitOpt1Edit_OL,#tbl_BenefitOpt2Edit_OL,#tbl_BenefitOpt2SubEdit_OL").DataTable({"ordering": false,"paging": false,"bInfo" : false, scrollY: '236px',scrollCollapse: true, "autoWidth": false, 
		fixedHeader: {header: true},"oLanguage": {"sSearch": "ค้นหา: "}
	});
	$(".datatbl_BenefitOpt1_OL .dataTables_scrollHeadInner,.datatbl_BenefitOpt2_OL .dataTables_scrollHeadInner,.datatbl_BenefitOpt2Sub_OL .dataTables_scrollHeadInner,.datatbl_BenefitOpt1Edit_OL .dataTables_scrollHeadInner,.datatbl_BenefitOpt2Edit_OL .dataTables_scrollHeadInner,.datatbl_BenefitOpt2SubEdit_OL .dataTables_scrollHeadInner").css({"width":"100%"});
	$(".datatbl_BenefitOpt1_OL .table,.datatbl_BenefitOpt2_OL .table,.datatbl_BenefitOpt2Sub_OL .table,.datatbl_BenefitOpt1Edit_OL .table,.datatbl_BenefitOpt2Edit_OL .table,.datatbl_BenefitOpt2SubEdit_OL .table").css({"width":"100%"});
	*/
	/*บันทึกสลักหลัง*/
	/*$("#tbl_endorsement_CL").DataTable({"ordering": false,"paging": false,"bInfo" : false, scrollY: '236px',scrollCollapse: true, "autoWidth": false, 
		fixedHeader: {header: true},"oLanguage": {"sSearch": "ค้นหา: "}
	});
	$(".datatbl_endorsement_CL .dataTables_scrollHeadInner").css({"width":"100%"});
	$(".datatbl_endorsement_CL .table").css({"width":"100%"});*/
	
	/*ตารางมูลค่ากรมธรรม์*/	
	$('#dbBox1_OL').prop('disabled', true);
	$('#spanBox1_OL').attr("disabled", true);
	
	$('#dbBox2_OL').prop('disabled', true);
	$('#spanBox2_OL').attr("disabled", true);
	
	$("#select_file_3_OL").change(function(){
		$("#validate_input3_OL").css("display", "none");	
	});
	$("#select_file_4_OL").change(function(){
		$("#validate_input4_OL").css("display", "none");
	});
	$("#select_file_5_OL").change(function(){
		$("#validate_input5_OL").css("display", "none");	
	});
	$("#select_file_6_OL").change(function(){
		$("#validate_input6_OL").css("display", "none");
	});
	
	/*ห้ามใส่ค่าลบ*/
	$("#die_OL input[type='number']").keydown(function () {
	    // Save old value.
	    if (!$(this).val() || (parseInt($(this).val()) >= 1))
	    $(this).data("old", $(this).val());
	  });
	  $("#die_OL input[type='number']").keyup(function () {
	    // Check correct, else revert back to old value.
	    if (!$(this).val() || (parseInt($(this).val()) >= 1))
	      ;
	    else
	      $(this).val($(this).data("old"));
	  });
	  	
	 $('#cv_InputExtra_Rate_ol').prop("disabled",true)
	 //selectTypeCal_CL(type_selectCal,1);
	 $("#spanBoxCal1_OL").attr("disabled", true);
	 $("#select_fileCal_1_OL").attr("disabled", true);
	
	 pass_Insurance_coverage_cl  = $('#pass_Insurance_coverage_ol').val();
	 //Em
	 $("#tb_TaxReduce_view_OL").DataTable({
	    	"paging": false,
	        "ordering": false,
	        "info": false,
	        "language": {
	    	    "search": "ค้นหา:",
	    	    "zeroRecords": " "	
	    }
	  });	 
	//เบี้ยมาตรฐาน PM_Rate
	 $("#ch_Base_rate_OL").prop("disabled", true);
	 $("#ch_Base_rate_OL").prop("checked", false);
	// $('#sl_menu3_insurance_premium_cl').prop("disabled",true);
	 $("#divtb_PM_Rate1_OL *").attr("disabled", "disabled").off('click');
	 $('#addrowPM_Rate_OL').prop("disabled",true);
	 $('#delrowPM_Rate_OL').prop("disabled",true);
	 
	// $('#ch_importInsurance_cl').prop("disabled",true);
	 $('#in_step_Career2_Sta_OL').prop("disabled",true);
	 $('#in_step_Career2_To_OL').prop("disabled",true);
	 
	 $('#in_step_Career3_Sta_OL').prop("disabled",true);
	 $('#in_step_Career3_To_OL').prop("disabled",true);

	 $('#in_step_Career4_Sta_OL').prop("disabled",true);
	 $('#in_step_Career4_To_OL').prop("disabled",true);

	 
	 $('#discountInsurancePremiumsSta_ol').prop("disabled",true);
	 $('#discountInsurancePremiumsTo_ol').prop("disabled",true);
	  //***เบี้ยเพิ่มพิเศษ Extra_Rate
	  $("#div_TB_Extra_Rate_OL *").attr("disabled", "disabled").off('click');//default disabled Table Extra_Rate
	  $('#addrowExtra_Rate_OL').prop("disabled",true);
	  $('#delrowExtra_Rate_OL').prop("disabled",true);
	
 });
 
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

 function thai_Name_ol() {
	var thai_Name  = $('#thai_Name_ol').val();
	if (thai_Name != "") {
		$("#validate_input2_ol").hide();
	}else{
		$("#validate_input2_ol").show();
	}
}

 /*คุ้มครองสูงสุด*/
 $("#sl_maximum_Protection_ol").change(function(){
	 if($(this).val() == "NONE"){
		 $("#validate_input6_2ol").show();
	 }else{
		 $("#validate_input6_2ol").hide();
	 }
 });
 
 function max_coverage_ol() {	
		var maximum_Protection  = $('#maximum_Protection_To_ol').val();
		var sl_maximum_Protection = $("#sl_maximum_Protection_ol option:selected").val();
		if (maximum_Protection != "") {
			
			if(sl_maximum_Protection != "NONE"){
				$("#validate_input6_2ol").hide();
			}else{
				$("#validate_input6_2ol").show();
			}
			
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
 
 /**********Basic Information***********/
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
	var age_Start_ol  = Number($('#age_Start_ol').val());
	var age_To_ol  = Number($('#age_To_ol').val());
	
	if(age_Start_ol != "" && age_To_ol != ""){
		$("#validate_input6_1ol").hide();
		
		if (age_Start_ol > age_To_ol){
			message = "อายุสิ้นสุด จะต้องมีค่ามากกว่าอายุเริ่มต้นเสมอ กรุณาระบุใหม่";
			alertError(message);
			$('#age_To_ol').focus();
		}
		
	}else{
		$("#validate_input6_1ol").show();
	}
		
}

function check_age_validate_OL(){
	var age_Start_ol = $('#age_Start_ol').val();
	var age_unitStart_ol = $('#dmy_5_ol option:selected').text();
	var age_To_ol = $('#age_To_ol').val();
	var age_unitTo_ol = $('#dmy_6_ol option:selected').text();
	
	$("#age_Start_ol").on("keyup", function(){
		if(age_Start_ol != "" && age_unitStart_ol != "None" && age_To_ol != "" && age_unitTo_ol != "None"){
			$("#validate_input6_1ol").hide();
			check_fromto_age_OL();
		}else{
			$("#validate_input6_1ol").show();
		}
	});
	
	$("#dmy_5_ol").on("change", function(){
		if(age_Start_ol != "" && age_unitStart_ol != "None" && age_To_ol != "" && age_unitTo_ol != "None"){
			$("#validate_input6_1ol").hide();
			check_fromtoUnit_age_OL($(this).val());
		}else{
			$("#validate_input6_1ol").show();
		}
	});
	
	$("#age_To_ol").on("keyup", function(){
		if(age_Start_ol != "" && age_unitStart_ol != "None" && age_To_ol != "" && age_unitTo_ol != "None"){
			$("#validate_input6_1ol").hide();
			check_fromto_age_OL();
		}else{
			$("#validate_input6_1ol").show();
		}
	});
	
	$("#dmy_6_ol").on("change", function(){
		if(age_Start_ol != "" && age_unitStart_ol != "None" && age_To_ol != "" && age_unitTo_ol != "None"){
			$("#validate_input6_1ol").hide();
			check_fromtoUnit_age_OL($(this).val());
		}else{
			$("#validate_input6_1ol").show();
		}
	});	
}

/*check from-to อายุที่ได้รับความเห็นชอบ*/
function check_fromto_age_OL(){
	
	if($("#dmy_5_ol option:selected").text() != "None" && $("#dmy_6_ol option:selected").text() != "None"){
		$("#age_Start_ol").on('blur', function () {
			
		  var from_unit_text = $("#dmy_5_ol option:selected").val();
		  var to_unit_text = $("#dmy_6_ol option:selected").val();
			
		  var from_value = Number($('#age_Start_ol').val());
		  var to_value = Number($('#age_To_ol').val());	
		  
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
					$('#age_Start_ol').val("").focus();
				}
			}else if(from_unit_text == "DAY" && to_unit_text == "MONTH"){				 
					if(from_value_toMonth > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#age_Start_ol').val("").focus();
					}
			 }else if(from_unit_text == "MONTH" && to_unit_text == "DAY"){	
					if(to_value_toMonth < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#age_To_ol').val("").focus();
				    }
		    }else if(from_unit_text == "DAY" && to_unit_text == "YEAR"){				 
					if(from_value_toYear > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#age_Start_ol').val("").focus();
					}
			 }else if(from_unit_text == "YEAR" && to_unit_text == "DAY"){				 
					if(to_value_toYear < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#age_To_ol').val("").focus();
				    }
		    }else if(from_unit_text == "MONTH" && to_unit_text == "YEAR"){				 
					if(from_value_MonthtoYear > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#age_Start_ol').val("").focus();
					}
			 }else if(from_unit_text == "YEAR" && to_unit_text == "MONTH"){				
					if(to_value_MonthtoYear < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#age_Start_ol').val("").focus();
					}
			 }
		});
	
	   $("#age_To_ol").on('blur', function () {		
		 var from_unit_text = $("#dmy_5_ol option:selected").val();
		 var to_unit_text = $("#dmy_6_ol option:selected").val();
		 
		 var from_value = Number($('#age_Start_ol').val());
		 var to_value = Number($('#age_To_ol').val());	
		 
		 var from_value_toMonth = Number(from_value/30);
		 var to_value_toMonth = Number(to_value/30);
		 var from_value_toYear = Number(from_value/365);
		 var to_value_toYear = Number(to_value/365);
		 var from_value_MonthtoYear = Number(from_value/12);
		 var to_value_MonthtoYear = Number(to_value/12);
		 
		 var from_value = Number($('#age_Start_ol').val());
		 var to_value = Number($('#age_To_ol').val());
		 
		 if(from_unit_text == to_unit_text){
				if(from_value > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#age_To_ol').val("").focus();
				}
		  }else if(from_unit_text == "DAY" && to_unit_text == "MONTH"){				 
					if(from_value_toMonth > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#age_To_ol').val("").focus();
					}
		  }else if(from_unit_text == "MONTH" && to_unit_text == "DAY"){				 
					if(to_value_toMonth < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#age_To_ol').val("").focus();
					}
		  }else if(from_unit_text == "DAY" && to_unit_text == "YEAR"){				 
					if(from_value_toYear > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#age_To_ol').val("").focus();
					}
		  }else if(from_unit_text == "YEAR" && to_unit_text == "DAY"){				
					if(to_value_toYear < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#age_To_ol').val("").focus();
					}
		  }else if(from_unit_text == "MONTH" && to_unit_text == "YEAR"){				 
					if(from_value_MonthtoYear > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#age_To_ol').val("").focus();
					}
		  }else if(from_unit_text == "YEAR" && to_unit_text == "MONTH"){
					if(to_value_MonthtoYear < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#age_To_ol').val("").focus();
					}
			 }
		
		});
	}
}

function check_fromtoUnit_age_OL(value){
	if($("#dmy_5_ol option:selected").text() != "None" && $("#dmy_6_ol option:selected").text() != "None"){
		//$("#dmy_5_ol").change(function(){
		if(value != "NONE"){

			var from_unit_text = $("#dmy_5_ol option:selected").val();
			var to_unit_text = $("#dmy_6_ol option:selected").val();	
			
			//alert(from_unit_text);

			var from_value = Number($('#age_Start_ol').val());
			var to_value = Number($('#age_To_ol').val());
			
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
					$('#age_Start_ol').val("").focus();
				}
			}else if(from_unit_text == "DAY" && to_unit_text == "MONTH"){				 
					if(from_value_toMonth > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#age_Start_ol').val("").focus();
					}
			 }else if(from_unit_text == "MONTH" && to_unit_text == "DAY"){	
					if(to_value_toMonth < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#age_To_ol').val("").focus();
				    }
		    }else if(from_unit_text == "DAY" && to_unit_text == "YEAR"){				 
					if(from_value_toYear > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#age_Start_ol').val("").focus();
					}
			 }else if(from_unit_text == "YEAR" && to_unit_text == "DAY"){				 
					if(to_value_toYear < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#age_To_ol').val("").focus();
				    }
		    }else if(from_unit_text == "MONTH" && to_unit_text == "YEAR"){				 
					if(from_value_MonthtoYear > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#age_Start_ol').val("").focus();
					}
			 }else if(from_unit_text == "YEAR" && to_unit_text == "MONTH"){				
					if(to_value_MonthtoYear < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#age_Start_ol').val("").focus();
					}
			 }
			
		//});	
		}	
		
	}
	
	if(value != "NONE"){
	//$("#dmy_6_ol").change(function(){	
		
		var from_unit_text = $("#dmy_5_ol option:selected").val();
		var to_unit_text = $("#dmy_6_ol option:selected").val();	
		
		var from_value = Number($('#age_Start_ol').val());
		var to_value = Number($('#age_To_ol').val());
		
		var from_value_toMonth = Number(from_value/30);
		var to_value_toMonth = Number(to_value/30);	
		var from_value_toYear = Number(from_value/365);
		var from_value_MonthtoYear = Number(from_value/12);
		var to_value_MonthtoYear = Number(to_value/12);
		
		if(from_unit_text == to_unit_text){
			if(from_value > to_value){
				message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
				alertError(message);
				$('#age_To_ol').val("").focus();
			}
		}else if(from_unit_text == "DAY" && to_unit_text == "MONTH"){				
				if(from_value_toMonth > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#age_To_ol').val("").focus();
				}
		 }else if(from_unit_text == "MONTH" && to_unit_text == "DAY"){					
				if(to_value_toMonth < from_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#age_To_ol').val("").focus();
				}
		}else if(from_unit_text == "DAY" && to_unit_text == "YEAR"){				 
				if(from_value_toYear > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#age_To_ol').val("").focus();
				}
		 }else if(from_unit_text == "YEAR" && to_unit_text == "DAY"){
				var to_value_toYear = to_value/365;		
				if(to_value_toYear < from_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#age_To_ol').val("").focus();
				}
		}else if(from_unit_text == "MONTH" && to_unit_text == "YEAR"){				 
				if(from_value_MonthtoYear > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#die_toYear'+id).val("").focus();
				}
		 }else if(from_unit_text == "YEAR" && to_unit_text == "MONTH"){				 
				if(to_value_MonthtoYear < from_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#age_To_ol').val("").focus();
				}
		 }
		
	//});	
	}
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
	var text_anniversary_cl  = $('#text_anniversary_ol').val();
	var unit_anniversary_cl = $("#dmy_1_ol option:selected").text();
	var maximum_Protection_cl = $("#maximum_Protection_To_ol").val();

	if(Number(text_anniversary_cl) > Number(maximum_Protection_cl)){
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
		}else{
			$("#validate_input15_ol").hide();
		}	
		$("#dmy_1_ol option:contains('ปี')").prop("selected", "selected");
		$("#addRowBasicInfo_OL, #deleteRowBasicInfo_OL").prop("disabled", true);
	}
});

$("#rd_Time_length_ol").click(function(){	
	var rd_Time_length_cl = document.getElementById("rd_Time_length_ol");
	if (rd_Time_length_cl.checked == true){
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

function text_insurance_premium_ol() {
	var text_insurance_premium_cl  = $('#text_insurance_premium_ol').val();
	var unit_insurance_premium_cl = $("#dmy_3_ol option:selected").text();
	
	$("#text_insurance_premium_ol").on("keyup", function(){
		if (text_insurance_premium_cl != "" && unit_insurance_premium_cl != "None") {
			$("#validate_input16_ol").hide();
		}else{
			$("#validate_input16_ol").show();
		}
	});
	
	$("#dmy_3_ol").on("change", function(){
		if (text_insurance_premium_cl != "" && unit_insurance_premium_cl != "None") {
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

$("#rd_insurance_premium_ol").click(function(){	
	var rd_insurance_premium_cl = document.getElementById("rd_insurance_premium_ol");
	if (rd_insurance_premium_cl.checked == true) {
		document.getElementById("text_insurance_premium_ol").disabled = false;
		document.getElementById("text_Time_insurance_premium_ol").disabled = true;
		document.getElementById("ch_sperately_pay_ch_ol").disabled = true;
		//document.getElementById("dmy_3_ol").disabled = false;
		$("#dmy_3_ol").prop("disabled",false);
		$('#text_Time_insurance_premium_ol').val("");
		$("#validate_input16_ol").show();
		document.getElementById("dmy_4_ol").disabled = true;
		$("#dmy_4_ol option:contains('ปี')").prop("selected", "selected");
		document.getElementById("ch_sperately_pay_ch_ol").checked = false;
		$("#div_Sperately_Pay_ol *").attr("disabled", "disabled").off('click');
		
		$("#tb_Sperately_Pay_ol input:checkbox").prop("checked", false);
		$("#tb_Sperately_Pay_ol input:text").val("0.00");
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
			/*$("#text_Time_insurance_premium_cl").keyup(function(){
				if($(this).val() > 1){
					$(this).val(1);
				}
			})*/
		}
	}
});

/*อายุที่ขออนุมัติ + คุ้มครองสูงสุดถึง*/
$("#age_To_ol, #maximum_Protection_To_ol, #text_anniversary_ol, #text_insurance_premium_ol, #text_Time_insurance_premium_ol").on("keypress keyup",function(){
    if($(this).val() == '0'){
      $(this).val('');  
    }
});

function checkMaxProtectionAge_OL() {
	var from_unit = $("#dmy_6_ol option:selected").val();
	var from_value = $("#age_To_ol").val();
	var from_value_convert = "";
	var to_unit = "YEAR";
	var to_value = $("#maximum_Protection_To_ol").val();

	if(from_value != "" && from_unit != "NONE" && to_value != ""){
		if(from_unit == "DAY"){
			from_value_convert = Number(from_value/365);
		}else if(from_unit == "MONTH"){
			from_value_convert = Number(from_value/12);
		}else if(from_unit == "YEAR"){
			from_value_convert = Number(from_value);
		}
		
		if(Number(to_value) < from_value_convert){
			  message = "ข้อมูลคุ้มครองสูงสุดถึงต้องมีค่ามากกว่าอายุที่ขออนุมัติสิ้นสุดเสมอ";
			  alertError(message);
			  $("#maximum_Protection_To_ol").focus();
			  $("#maximum_Protection_To_ol").val("");
		  }			
	}				
}

$("#dmy_4_ol").on("change", function(){
	var dd_value = $(this).find("option:selected").val();
	if(dd_value == "YEAR"){
		$("#ch_sperately_pay_ch_ol").prop("disabled", false);
	}else{
		$("#ch_sperately_pay_ch_ol").prop("disabled", true);
	}
});

var rowtext_d = "";
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

//Radio
var valueTable_D = "";
var startYear = "";
function ra_table_D_ol(row) {
	valueTable_D = row;
	startYear = $("#mo_Table_calPM_OL tbody>tr").eq(row).find('td:nth-child(1) #start_year').val();
}

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
				numberImgOK = Number(lastImgOK.replace("td_BasicInformation1_OL",""))+1;
			}
			var newID = "td_BasicInformation1_OL"+numberImgOK;
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
			$(cloneUnitFrom).attr("onchange","checkFromToPeriod_OL("+numberImgOK+");");
			$(cloneUnitFrom).attr("disabled", false);
			$(cloneUnitFrom).appendTo("#tbody_OL_BasicInformation_"+numberImgOK+">td:nth-child(3)");
			
			var cloneUnitTo  = $('#dmy_1_ol').clone();
			$(cloneUnitTo).attr("id","durationToOL_"+numberImgOK+"");
			$(cloneUnitTo).attr("onclick","durationToOL("+numberImgOK+");");
			$(cloneUnitTo).attr("onchange","checkFromToPeriod_OL("+numberImgOK+");");
			$(cloneUnitTo).attr("disabled", false);
			$(cloneUnitTo).appendTo("#tbody_OL_BasicInformation_"+numberImgOK+">td:nth-child(5)");
			
			var error = 0;
			$("#tb_BasicInformation1_OL input:text").each(function(){
				if($(this).val() == ""){
					error++;
				}
			});
			
			/*remove NONE*/
			$("#tb_BasicInformation1_OL tbody select>option").each(function(){
				if($(this).text() == "None"){
					$(this).remove();
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
			numberImgOK = Number(lastImgOK.replace("td_BasicInformation1_OL",""))+1;
		}
		for(var i = 1;i<=numberImgOK;i++)
			{
				var checked = $('#tbody_OL_BasicInformation_'+i+' >td:first>i').attr("class");
				if(checked == "glyphicon glyphicon-ok"){	
					deleteTableRow('#tbody_OL_BasicInformation_'+i);				
				}
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

/*show table*/
function getLayout_tax_OL(rowTax, obj, cov_code){
	for(var j=0; j<obj.length;j++){
		var format1 = obj[0].layout+cov_code+".txt";
		var format2 = obj[1].layout+cov_code+".txt";
		if(j == 2){
			var format3 = obj[2].layout+cov_code+".txt";
		}else{
			var format3 = "";
		}		
	}
	
	if(format3 != ""){
		var tax_layout = format1+" หรือ "+format2+" หรือ "+format3;
		var tax_onclick = "selectFileTXT_OL(1,'fileuploads_Tax"+rowTax+"_OL','"+format1.replace('.txt','')+"','"+format2.replace('.txt','')+"','"+format3.replace('.txt','')+"','span_TaxOpen_OL_"+rowTax+"')";
	}else{
		var tax_layout = format1+" หรือ "+format2;
		var tax_onclick = "selectFileTXT_OL(1,'fileuploads_Tax"+rowTax+"_OL','"+format1.replace('.txt','')+"','"+format2.replace('.txt','')+"','','span_TaxOpen_OL_"+rowTax+"')";
	}
	
	$("#fileuploads_TaxText"+rowTax+"_OL").attr("placeholder", tax_layout);
	$("#fileuploads_Tax"+rowTax+"_OL").attr("onchange", tax_onclick);
}

function selectFileTXT_OL(type,select_file,file_format,file_format2,file_format3,view_btn){
	var tbl_name = "";
	var tbl_col = "";
	var view_button = view_btn;
	var select_file_name = "";
	var validateFile = "";
	var cov_code = $("#pass_Insurance_coverage_ol").val();
	var btn_download = "";
	/*var for save file*/
	var file_id = "";   	
	var file_type_id = "";
 	var file_url = "";
 	var user_code = "0000000";
 	var datajson = "";

	/*ลดหย่อนภาษี*/
	if(type == 1){
		tbl_mainName = "tb_TaxReduce_OL";
		tbl_name = "tb_TaxReduce_view_OL";
		tblAuto_name = "tb_TaxReduce_viewAuto_OL";
		modalAuto_name = "modal_TableTaxReduceAuto_OL";
		modal_name = "modal_TableTaxReduce_OL";
		tbl_col = 41;		
		file_button1 = "btn_submit_TaxAuto_OL";
		file_button2 = "btn_cancel_TaxAuto_OL";
		del_button = "span_TaxDel_OL";
		download_button = "span_Taxdownload_OL";
		btn_download = "download_tb_TaxReduce_view_OL";
		select_file_name = select_file.replace("fileuploads_Tax","");
		select_file_name = select_file_name.replace("_OL","");
		selectFile = "fileuploads_Tax"+select_file_name+"_OL";
		textFile = "fileuploads_TaxText"+select_file_name+"_OL";
		
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
		btn_download = ""
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
		tbl_name = "";
		tblAuto_name = "tb_DVAuto_OL";
		modalAuto_name = "modal_DVAuto_OL";
		modal_name = "";
		tbl_col = 42;		
		file_button1 = "btn_submit_DVAuto_OL";
		file_button2 = "btn_cancel_DVAuto_OL";
		del_button = "";
		download_button = "";
		btn_download = "";
		select_file_name = "";
		selectFile = select_file;
		textFile = "input_fileGuaruntee_OL";
		
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
			
			$("#"+modalAuto_name).modal("show");	
			
			convertToBase64_OL(selectFile, file_type_id)
			
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
					 	    	var obj_ref = response.upload_ref
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
								    	$("#modal_waiting").modal('hide');
								    	$("body").addClass("body_nopadding");
								    	$('#'+download_button+"_"+select_file_name+">span").removeClass("activecolorgray").addClass("activecolorblue").attr("onclick", "openFile_target('"+file_name+"','"+obj_ref+"','txt_download')");
								    	$('#'+view_button+">span").attr("onclick", "openFileTextRider_OL('"+file_name+"','"+obj_ref+"',"+tbl_col+",'"+tbl_name+"','"+modal_name+"')");
								    	$("#"+btn_download).attr("onclick", "openFile_target('"+file_name+"','"+obj_ref+"','txt_download')");
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
//					$('#'+download_button+"_"+select_file_name+">span").removeClass("activecolorgray").addClass("activecolorblue").attr("onclick", "openFile_target('"+file_name+"','"+obj_ref+"','txt_download')");

					
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
			
			$("#"+modalAuto_name).modal("show");	
			
			convertToBase64_OL(selectFile, file_type_id)
			
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
						 	    	var obj_ref = response.upload_ref
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
									    	$("#modal_waiting").modal('hide');
									    	$("body").addClass("body_nopadding");
									    	$('#'+download_button+"_"+select_file_name+">span").removeClass("activecolorgray").addClass("activecolorblue").attr("onclick", "openFile_target('"+file_name+"','"+obj_ref+"','txt_download')");
									    	$('#'+view_button+">span").attr("onclick", "openFileTextRider_OL('"+file_name+"','"+obj_ref+"',"+tbl_col+",'"+tbl_name+"','"+modal_name+"')");
									    	$("#"+btn_download).attr("onclick", "openFile_target('"+file_name+"','"+obj_ref+"','txt_download')");
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
			$("#"+modalAuto_name).modal("show");	
				
			convertToBase64_OL(selectFile, file_type_id)
			
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
						 	    	var obj_ref = response.upload_ref
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
									    	$("#modal_waiting").modal('hide');
									    	$("body").addClass("body_nopadding");
									    	$("#"+textFile).val(response.file_name);
									    	$('#'+download_button+"_"+select_file_name+">span").removeClass("activecolorgray").addClass("activecolorblue").attr("onclick", "openFile_target('"+file_name+"','"+obj_ref+"','txt_download')");
									    	$('#'+view_button+">span").attr("onclick", "openFileTextRider_OL('"+file_name+"','"+obj_ref+"',"+tbl_col+",'"+tbl_name+"','"+modal_name+"')");
									    	$("#"+btn_download).attr("onclick", "openFile_target('"+file_name+"','"+obj_ref+"','txt_download')");
									    },
									    error : function(response) {	
									    	alert("save file in selectFileTXT_OL error");
									    }
									});				
									/*end save file*/	
									
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
							$(text_file).attr("placeholder","");
							$(text_file).val("");
							$(span).attr("disabled", true);
							$(btn_file).prop("disabled", true);
							
							if($(chk_val).prop("checked") == true){
								$("#ch_calPM_"+tbl+"_ol_0").prop("disabled", true);
								$("#btn_Adddata_calPM_"+tbl+"_ol_0").prop("disabled", true);
								//$("#spancalPM_"+tbl+"0_OL").attr("disabled", true);
								//$("#fileuploads_calPM_"+tbl+"_ol_0").prop("disabled", true);
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
							$(text_file).attr("placeholder","");
							$(text_file).val("");
							$(span).attr("disabled", true);
							$(btn_file).prop("disabled", true);
							
							if($(chk_val).prop("checked") == true){
								$("#ch_calPM_"+tbl+"_ol_0").prop("disabled", true);
								$("#btn_Adddata_calPM_"+tbl+"_ol_0").prop("disabled", true);
								//$("#spancalPM_"+tbl+"0_OL").attr("disabled", true);
								//$("#fileuploads_calPM_"+tbl+"_ol_0").prop("disabled", true);
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
						//$(btn_file).prop("disabled", false);
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
	    url : "RiderOL_Data_default_Servlet",
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
$("#chk_bundleRider_OL1").click(function(){
	var value = $(this).prop("checked")
	if(value == true){
		$("#key_rider_code_ol").prop("disabled", false);
		$("#addBundle_OL").prop("disabled", false);
	}else{
		$("#key_rider_code_ol").prop("disabled", true);
		$("#key_rider_code_ol, #bundle_covCode_ol").val("");
		$("#addBundle_OL").prop("disabled", true);
	}
});

$(document).on("click", "#addBundle_OL", function () {
	
	///BEnz 09-08-2019 /////
	var datajson = {	
			"method"	: "searchBundleSelect"
	}	
	
	$.ajax({
	    type: "POST",
	    url : "RiderOL_Data_default_Servlet",
	    data: datajson,       
	    success : function(response) {
	    	$('#tb_bundleRiderOL_modal').DataTable().destroy();
	    	$("#tb_bundleRiderOL_modal tbody").find("tr").remove();
	    	
	    	var row = "";
	    	var id = 1;
	    	
	    //	var bundle_rider = [{"insuranceNo":"IL_OR_SNB_B_0001","nameTH":"Test1"},{"insuranceNo":"IL_OR_SNB_B_0002","nameTH":"Test2"},{"insuranceNo":"IL_OR_SNB_B_0003","nameTH":"Test3"}];
	    	
	    	for(var i=0; i<response.additional_Contract_Coverage.length; i++){
	    		var obj = response.additional_Contract_Coverage[i];
	    		row2 = 	"<tr  id=\"row2_"+id+""+"\">" +	
	    				"<td class=\"col-sm-1 text-center"+"\">"+"<input type=\"radio\" name=\"ch_bundle_rider[]\" id=\"ch_bundle_rider_"+id+"\" value='"+obj.cov_code+"'>"+"</td>"+
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
	    	 $('#tb_bundleRiderOL_modal_wrapper .sorting_asc').removeClass('sorting_asc');

	    	//เลือกสัญญาเพิ่มเติมที่มีอยู่แล้ว	
	    	var Covcode_bundle = $("#bundle_covCode_ol").val();
	    	if(Covcode_bundle != 0){
	    			$("#tb_bundleRiderOL_modal input:radio").each(function(){
	    				if($(this).val() == Covcode_bundle){
	    					$(this).prop("checked", true);
	    				}
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
	$("#tb_bundleRiderOL_modal input[type='radio']:checked").each(function(){
		chk_count++;
		var id = $(this).attr("id");
			id = id.replace("ch_bundle_rider_","");
		var value = $(this).val();
		var text = $("#bundle_rider_name_"+id).text();
		
		$("#bundle_covCode_ol").val(value);

	});
	
	/*hide row No data*/
	if(chk_count > 0){
		$("#tbl_rider_bundle_OL>tbody>tr[data-group='0']").hide();
	}else{
		$("#tbl_rider_bundle_OL>tbody>tr[data-group='0']").show();
	}
	
	$("#tbl_rider_bundle_OL tbody").append(row);
	
	$("#modal_Choose_Bundle").modal("hide");
	
}

function keyRiderCode_ol(){
	var $rider_code = $("#key_rider_code_ol");
	
	if($rider_code.val() != ""){		
		$rider_code.val( $rider_code.val().replace(/[^a-zA-Z0-9\s\-]/g, "" ));		

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
	var maximum_Protection = $("#maximum_Protection_To_ol").val();
	var sl_maximum_Protection = $("#sl_maximum_Protection_ol option:selected").val();
	var rider_code = $("#key_rider_code_ol").val();

	var mode0 = document.getElementById("mode0_ol");
	var mode1 = document.getElementById("mode1_ol");
	var mode2 = document.getElementById("mode2_ol");
	var mode3 = document.getElementById("mode3_ol");
	var mode4 = document.getElementById("mode4_ol");
	var mode5 = document.getElementById("mode5_ol");
	
	/*var mode4 = document.getElementById("mode4_cl");
	var mode8 = document.getElementById("mode8_cl");
	var mode9 = document.getElementById("mode9_cl");*/
	
	var rd_anniversary_cl = document.getElementById("rd_anniversary_ol");
	var rd_Time_length_cl = document.getElementById("rd_Time_length_ol");
	var rd_insurance_premium_cl 	= document.getElementById("rd_insurance_premium_ol");
	var rd_Time_insurance_premium_cl = document.getElementById("rd_Time_insurance_premium_ol");
	
	/*อายุที่ได้รับความเห็นชอบ*/
	var age_Start_cl = $("#age_Start_ol").val();
	var age_unitSatrt_cl = $("#dmy_5_ol option:selected").text();
	var age_To_cl = $("#age_To_ol").val();
	var age_unitTo_cl = $("#dmy_6_ol option:selected").text();
	
	/*Bundle*/
	if($("#chk_bundleRider_OL1").prop("checked") == true){
		if(rider_code == ""){
			error++;
		}
	}
	
	if(age_Start_cl == "" || age_unitSatrt_cl == "None" || age_To_cl == "" || age_unitTo_cl == "None"){
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
	var rd1 = $("#rd_insurance_premium_ol").prop("checked");
	var rd2 = $("#rd_Time_insurance_premium_ol").prop("checked");
	if($("#ch_PremRider_ol").prop("checked") == true){
		if(rd1 == false && rd2 == false){
			error++;
		}else{
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
		}	
	}
	
	if($("#ch_sperately_pay_ch_OL").prop("checked") == true){
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
	
	if(pass_Insurance_coverage == "" ||  thai_Name  == "" || maximum_Protection == "" || sl_maximum_Protection == "NONE" || ch_male.checked == false && ch_female.checked == false 
			||  rd_anniversary_cl.checked == false && rd_Time_length_cl.checked == false){
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
    $("#input_wordfile_policy1_OL_modal").val("");
    document.getElementById("select_wordfile_policy1_OL_modal").value = "";
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
	var errorSymbol = 0;
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
		    	
		    	var SpacialCharacter = /[`~^&*'|\?;:'"<>\{\}\[\]\\\/]/gi;
		    	var speacialSymbol = file_name.match(SpacialCharacter)
		    	if(speacialSymbol != null){
		    		errorSymbol++;	
		    	}
		    	// validate file duplicate
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
		    	// validate Symbol
		    	if(errorSymbol > 0 && type == "pdf"){
		    		$("#base64_filePDF_OL").val("");
		    		$("#input_pdffile_policy1_OL_modal").val("");
		    		 message = "ชื่อไฟล์ต้องไม่มีสัญลักษณ์พิเศษ";
					 alertError(message);	
		    	}else if(errorSymbol > 0 && type == "word"){
		    		$("#base64_fileDOC_OL").val("");
		    		$("#input_wordfile_policy1_OL_modal").val("");
		    		 message = "ชื่อไฟล์ต้องไม่มีสัญลักษณ์พิเศษ";
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
	console.log($("#base64_fileTXT_OL").val())
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
	       if(file_name_split[1] == "pdf" && file_name_split.length == 2){
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
						 	    	 //$("#modal_upload_pdf_OL").hide();
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
	       if(file_name_split[1] == "doc" || file_name_split[1] == "docx" || file_name_split[1] == "odt" && file_name_split.length == 2){
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
    	$("#fileId_doc_OL"+rowID).val(file);
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
	    		//var number_row = Number(i) + Number(1);
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
		dataSave_PolicyWording_OL();
		message = "บันทึกข้อมูลเรียบร้อย";
		alertSuccess(message);
		Statuesave = "Y";
	}
	
}

/*ผู้ได้รับความคุ้มครอง*/
function getAge_fromBasicInfo_OL(){
	$("#tb_personProtected_OL tbody>tr").each(function(){
		
		var chkbox = $(this).find("input:checkbox");
		var min_age  = $(this).find("td:nth-child(3) input");
		var max_age  = $(this).find("td:nth-child(5) input");
		var min_age_unit  = $(this).find("td:nth-child(4) select");
		var max_age_unit  = $(this).find("td:nth-child(6) select");
		var premium_sl  = $(this).find("td:nth-child(7) select");
		
		/*from Basic Info*/
		var age_Start_cl  =$("#age_Start_ol").val();
		var age_unitStart_cl  =$("#dmy_5_ol option:selected").text();
		var age_To_cl  =$("#age_To_ol").val();
		var age_unitTo_cl  =$("#dmy_6_ol option:selected").text();
		
		if(age_Start_cl != "" && age_unitStart_cl != "None" && age_To_cl != "" && age_unitTo_cl !="None"){		
			if($(chkbox).val() == "PRIMARY"){
				$(chkbox).prop("checked", true);
				
				$(min_age).val(age_Start_cl).prop("disabled", false);
				$(min_age_unit).find("option:contains('"+age_unitStart_cl+"')").attr("selected", "selected");
				$(min_age_unit).prop("disabled", false);
				
				$(max_age).val(age_To_cl).prop("disabled", false);
				$(max_age_unit).find("option:contains('"+age_unitTo_cl+"')").attr("selected", "selected");
				$(max_age_unit).prop("disabled", false);
				
				$(premium_sl).prop("disabled", false);
			}
		}
	});
}

/*เช็ค type number from-to*/
function check_fromto_OL(id){
	
	var min_value = $("#person_min_OL"+id).val();
	var max_value = $("#person_max_OL"+id).val();

	if($("#person_min_unit_OL"+id+" option:selected").text() != "None" && $("#person_max_unit_OL"+id+" option:selected").text() != "None"){
		//$("#person_min"+id).on('blur', function () {
		if(min_value != "" && max_value != ""){
		  var from_unit_text = $("#person_min_unit_OL"+id+" option:selected").val();
		  var to_unit_text = $("#person_max_unit_OL"+id+" option:selected").val();
			
		  var from_value = Number($('#person_min_OL'+id).val());
		  var to_value = Number($('#person_max_OL'+id).val());	
		  
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
					$('#person_min_OL'+id).val("").focus();
				}
			 }else if(from_unit_text == "DAY" && to_unit_text == "MONTH"){
					if(from_value_toMonth > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#person_min_OL'+id).val("").focus();
					}
			 }else if(from_unit_text == "MONTH" && to_unit_text == "DAY"){
					if(to_value_toMonth < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#person_min_OL'+id).val("").focus();
					}
			 }else if(from_unit_text == "DAY" && to_unit_text == "YEAR"){				 
					if(from_value_toYear > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#person_min_OL'+id).val("").focus();
					}
			 }else if(from_unit_text == "YEAR" && to_unit_text == "DAY"){				 
					if(to_value_toYear < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#person_min_OL'+id).val("").focus();
					}
			 }else if(from_unit_text == "MONTH" && to_unit_text == "YEAR"){				 
					if(from_value_MonthtoYear > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#person_min_OL'+id).val("").focus();
					}
			 }else if(from_unit_text == "YEAR" && to_unit_text == "MONTH"){				 
					if(to_value_MonthtoYear < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#person_min_OL'+id).val("").focus();
					}
			 }
		//});
		}
		
		if(max_value != "" && min_value != ""){
	   //$("#person_max"+id).on('blur', function () {		
		   
		 var from_unit_text = $("#person_min_unit_OL"+id+" option:selected").val();
		 var to_unit_text = $("#person_max_unit_OL"+id+" option:selected").val();
		 
		 var from_value_toMonth = Number(from_value/30);
		 var to_value_toMonth = Number(to_value/30);
		 var from_value_toYear = Number(from_value/365);
		 var to_value_toYear = Number(to_value/365);
		 var from_value_MonthtoYear = Number(from_value/12);
		 var to_value_MonthtoYear = Number(to_value/12);
		 
		 var from_value = Number($('#person_min_OL'+id).val());
		 var to_value = Number($('#person_max_OL'+id).val());
		 
		  if(from_unit_text == to_unit_text){
				if(from_value > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#person_max_OL'+id).val("").focus();
				}
		  }else if(from_unit_text == "DAY" && to_unit_text == "MONTH"){				 
					if(from_value_toMonth > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#person_max_OL'+id).val("").focus();
					}
		  }else if(from_unit_text == "MONTH" && to_unit_text == "DAY"){				 
					if(to_value_toMonth < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#person_max_OL'+id).val("").focus();
					}
		  }else if(from_unit_text == "DAY" && to_unit_text == "YEAR"){				 
					if(from_value_toYear > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#person_max_OL'+id).val("").focus();
					}
		  }else if(from_unit_text == "YEAR" && to_unit_text == "DAY"){				
					if(to_value_toYear < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#person_max_OL'+id).val("").focus();
					}
		  }else if(from_unit_text == "MONTH" && to_unit_text == "YEAR"){				 
					if(from_value_MonthtoYear > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#person_max_OL'+id).val("").focus();
					}
		  }else if(from_unit_text == "YEAR" && to_unit_text == "MONTH"){
					if(to_value_MonthtoYear < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#person_max_OL'+id).val("").focus();
					}
			 }
		
		//});
		}
	}
}

function check_fromtoUnit_OL(id){
	var min_unit = $("#person_min_unit_OL"+id+" option:selected").val();
	var max_unit = $("#person_max_unit_OL"+id+" option:selected").val();
	
	if($("#person_min_unit_OL"+id+" option:selected").text() != "None" && $("#person_max_unit_OL"+id+" option:selected").text() != "None"){
		//$("#person_min_unit"+id).change(function(){
		if(min_unit != "NONE"){
			
			var from_unit_text = $("#person_min_unit_OL"+id+" option:selected").val();
			var to_unit_text = $("#person_max_unit_OL"+id+" option:selected").val();	
			
			var from_value = Number($('#person_min_OL'+id).val());
			var to_value = Number($('#person_max_OL'+id).val());
			
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
					$('#person_min_OL'+id).val("").focus();
				}
			}else if(from_unit_text == "DAY" && to_unit_text == "MONTH"){				 
					if(from_value_toMonth > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#person_min_OL'+id).val("").focus();
					}
			 }else if(from_unit_text == "MONTH" && to_unit_text == "DAY"){	
					if(to_value_toMonth < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#person_max_OL'+id).val("").focus();
				    }
		    }else if(from_unit_text == "DAY" && to_unit_text == "YEAR"){				 
					if(from_value_toYear > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#person_min_OL'+id).val("").focus();
					}
			 }else if(from_unit_text == "YEAR" && to_unit_text == "DAY"){				 
					if(to_value_toYear < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#person_max_OL'+id).val("").focus();
				    }
		    }else if(from_unit_text == "MONTH" && to_unit_text == "YEAR"){				 
					if(from_value_MonthtoYear > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#person_min_OL'+id).val("").focus();
					}
			 }else if(from_unit_text == "YEAR" && to_unit_text == "MONTH"){				
					if(to_value_MonthtoYear < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#person_min_OL'+id).val("").focus();
					}
			 }
			
		//});
		}
	}
	
		//$("#person_max_unit"+id).change(function(){	
		if(max_unit != "NONE"){
			
			var from_unit_text = $("#person_min_unit_OL"+id+" option:selected").val();
			var to_unit_text = $("#person_max_unit_OL"+id+" option:selected").val();	
			
			var from_value = Number($('#person_min_OL'+id).val());
			var to_value = Number($('#person_max_OL'+id).val());
			
			var from_value_toMonth = Number(from_value/30);
			var to_value_toMonth = Number(to_value/30);	
			var from_value_toYear = Number(from_value/365);
			var from_value_MonthtoYear = Number(from_value/12);
			var to_value_MonthtoYear = Number(to_value/12);

			if(from_unit_text == to_unit_text){
				if(from_value > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#person_max_OL'+id).val("").focus();
				}
			}else if(from_unit_text == "DAY" && to_unit_text == "MONTH"){				
					if(from_value_toMonth > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#person_max_OL'+id).val("").focus();
					}
			 }else if(from_unit_text == "MONTH" && to_unit_text == "DAY"){					
					if(to_value_toMonth < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#person_max_OL'+id).val("").focus();
					}
			}else if(from_unit_text == "DAY" && to_unit_text == "YEAR"){				 
					if(from_value_toYear > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#person_max_OL'+id).val("").focus();
					}
			 }else if(from_unit_text == "YEAR" && to_unit_text == "DAY"){
					var to_value_toYear = to_value/365;		
					if(to_value_toYear < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#person_max_OL'+id).val("").focus();
					}
			}else if(from_unit_text == "MONTH" && to_unit_text == "YEAR"){				 
					if(from_value_MonthtoYear > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#die_toYear'+id).val("").focus();
					}
			 }else if(from_unit_text == "YEAR" && to_unit_text == "MONTH"){				 
					if(to_value_MonthtoYear < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#person_max_OL'+id).val("").focus();
					}
			 }
			
		//});
	}
}

function imgCheckbox_person_OL(id)
{
	var imgOK = "imgOK_person_OL"+id;
	
	 		if($('#'+imgOK).is(':checked')) 
				{							
					$('#person_min_OL'+id).prop("disabled", false);	
					$('#person_min_unit_OL'+id).prop("disabled", false);
					$('#person_max_OL'+id).prop("disabled", false);
					$('#person_max_unit_OL'+id).prop("disabled", false);
					$('#person_insurance_OL'+id).prop("disabled", false);
				}
			else
				{					
					$('#person_min_OL'+id).prop("disabled", true);
					$('#person_min_unit_OL'+id).prop("disabled", true);
					$('#person_max_OL'+id).prop("disabled", true);
					$('#person_max_unit_OL'+id).prop("disabled", true);
					$('#person_insurance_OL'+id).prop("disabled", true);
				}
	
}
/*บันทึกผู้ได้รับความคุ้มครอง*/
function bt_person_Confirm_OL() {
	var message = "";
	var error = 0;	
	var imgOKcount = $("#div_person_OL input:checkbox:checked").length;		
	var chk = [];
	var chk_number = [];
	var i = 0;
	
	$('#div_person_OL input:checkbox:checked').each(function(){
		i++;
		chk[i] = $(this).attr("id");
		chk_number[i] = Number(chk[i].replace("imgOK_person_OL",""));
		var imgOK = "imgOK_person_OL"+chk_number[i];
			
		if($('#'+imgOK).is(':checked')) {			
			var person_min = [];
			person_min[i]	= $('#person_min_OL'+chk_number[i]).val();
			if(person_min[i] == ""){
				message = "กรุณาระบุข้อมูลให้ครบ";
				alertError(message);
				error++;
			}
			
			var person_min_unit = [];
			person_min_unit[i] 	= $('#person_min_unit_OL'+chk_number[i]).val();			
			if(person_min_unit[i] == "NONE" || person_min_unit[i] == ""){				
				message = "กรุณาระบุข้อมูลให้ครบ";
				alertError(message);
				error++;
					
			}
			
			var person_max = [];
			if(person_max[i] == "0" || person_max[i] == ""){
				message = "กรุณาระบุข้อมูลให้ครบ";
				alertError(message);
				error++;
			}
			
			var person_max_unit = [];
			person_max_unit[i] 	= $('#person_max_unit_OL'+chk_number[i]).val();			
			if(person_max_unit[i] == "NONE" || person_max_unit[i] == ""){				
				message = "กรุณาระบุข้อมูลให้ครบ";
				alertError(message);
				error++;
					
			}
			
			var person_insurance = [];
			person_insurance[i] 	= $('#person_insurance_OL'+chk_number[i]).val();			
			if(person_insurance[i] == ""){				
				message = "กรุณาระบุข้อมูลให้ครบ";
				alertError(message);
				error++;
					
			}
			
			/*เช็คการกรอก min-max*/
			if(person_min[i] != "" && person_min_unit[i] != "NONE"){
				if((person_max[i] == "" || person_max[i] == "0") && (person_max_unit[i] == "NONE" || person_max_unit[i] == "")){
					message = "กรุณาระบุข้อมูลให้ครบ";
					alertError(message);
					error++;
				}
			}
			
			if(person_max[i] != "" && person_max_unit[i] != "NONE"){
				if((person_min[i] == "" || person_min[i] == "0") && (person_min_unit[i] == "NONE" || person_min_unit[i] == "")){
					message = "กรุณาระบุข้อมูลให้ครบ";
					alertError(message);
					error++;
				}
			}
			
		}
		
	});
	
	if(error == 0 && imgOKcount != 0){
		dataSave_protectedPerson_OL();
		message = "บันทึกข้อมูลเรียบร้อย";
		alertSuccess(message);
		
		nameTab 	= "menu_OL_8";
		Statuesave = "Y";
		
	}else if(imgOKcount == 0){
		message = "กรุณาเลือกรายการข้อมูล";
		alertError(message);
		error++;
		
		nameTab 	= "menu_OL_8";
		Statuesave = "N";
	}
}

/*คำนวณเบี้ย*/
$("#ch_standard_premium_ol").click(function(){

	var ch_standard_premium_ol = document.getElementById("ch_standard_premium_ol");
	if (ch_standard_premium_ol.checked == true){
		  $('#rd_cal_insurance_ol').prop("disabled",false);
		  $( "#rd_cal_insurance_ol" ).prop( "checked", true );
		  $('#sl_menu3_insurance_premium_ol').prop("disabled",false);
		  $('#ch_importInsurance_ol').prop("disabled",false);
		  /*$('#discountInsurancePremiumsSta_ol').prop("disabled",false);
		  $('#discountInsurancePremiumsTo_ol').prop("disabled",false);*/ 
		  $('#addrowPM_Rate_OL').prop("disabled",false);
		  $('#delrowPM_Rate_OL').prop("disabled",false);
		  
		  $("#tb_premiumLevel_OL *").prop("disabled",false);
		  /*ปิดไว้ก่อน*/
		  //$("#ch_Base_rate_OL").prop("disabled", false);
		  //$("#ch_Base_rate_OL").prop("checked", true);
		  
		  //$("#ch_step_Career2,#ch_step_Career3,#ch_step_Career4").prop("disabled", false);
		  
		  $("#ch_insurance_premium_Extra_ol").prop("disabled", false);	
		  
		  /*ปิดปุ่ม add row*/
			var num_dd = $("#tb_PM_Rate1_OL>tbody>tr[data-level='1']:first>td:nth-child(2) select>option[value!='NONE']").length;
			var numrow_tbl = $("#tb_PM_Rate1_OL>tbody>tr[data-level='1']").length;
			if(numrow_tbl == num_dd){
				$("#addrowPM_Rate_OL").attr("disabled", true);
			}
		 
	    /*ตารางส่วนลดตามทุนประกัน*/
		$("#spanBoxCal3_OL").attr("disabled", false);
		$("#select_fileCal_3_OL").prop("disabled", false);
			
	}else{
		var checkdataPM_Rate = 0;	
		$("#tb_PM_Rate1_OL tbody>tr").each(function(){
			var fileID = $(this).find("td:nth-child(3) input:text").val();
			if(fileID != ""){
				checkdataPM_Rate++;
			}
		});
		
		if (checkdataPM_Rate > 0){
				$("#textTop7_OL").text("PM_Rate");
				$("#textTop8_OL").text("ตารางเบี้ยประกัน");
				$('#modal_CheckNone_Menu4_OL').modal('show');	
				$("#cancel_CheckNone_Menu4_OL").attr('onclick', 'cancel_check_None_OL("PM_Rate")');
				
				$("#modal_CheckNone_Menu4_OL .modal-header button.close").click(function(){
					$("#ch_standard_premium_ol").prop("checked", true);
				});
				
		}else {
			 //$('#sl_menu3_insurance_premium_cl').val("");
			 //$('#sl_menu3_insurance_premium_cl option:contains("None")').attr("selected","selected");
			 $("#divtb_PM_Rate1_OL *").prop("disabled",true);//default disabled Table PM_Rate
			 $('#addrowPM_Rate_OL').prop("disabled",true);
			 $('#delrowPM_Rate_OL').prop("disabled",true);
			 $("#tb_PM_Rate1_OL>tbody>tr[data-level='1'] select>option:contains('None')").attr("selected","selected");
			 $("#tb_PM_Rate1_OL>tbody>tr").find("td:nth-child(3) input:text").attr("placeholder","");
			 $("#tb_PM_Rate1_OL>tbody>tr").find("td:nth-child(3) span").attr("disabled", true);
			 $("#tb_PM_Rate1_OL>tbody>tr").find("td:nth-child(3) font").css("display", "none");
			 
			 $('#rd_cal_insurance_ol').prop("disabled",true);
			 $("#rd_cal_insurance_ol").prop( "checked", false );
			 $('#sl_menu3_insurance_premium_ol').prop("disabled",true);
			 $('#sl_menu3_insurance_premium_ol').val("")
			 $('#ch_importInsurance_ol').prop("disabled",true);
			 $('#discountInsurancePremiumsSta_ol').prop("disabled",true);
			 $('#discountInsurancePremiumsTo_ol').prop("disabled",true); 
			 $('#discountInsurancePremiumsSta_ol').val("0.00");
			 $('#discountInsurancePremiumsTo_ol').val("0.00");

			 $("#tb_premiumLevel_OL input:text").val("").prop("disabled", true);
			 $("#ch_importInsurance_ol").prop("checked", false);
			 $("#discountInsurancePremiumsSta_ol, #discountInsurancePremiumsTo_ol").val("0.00");	
			 
			 $("#spanBoxCal3_OL").attr("disabled", true);
			 $("#select_fileCal_3_OL").prop("disabled", true);
		}
		 $("#menu3_Confirm_ol2").attr('onclick', 'bt_Menu3_Confirm_ol2("PM_Rate")');

	
	}
});

function selectTypeCal_OL(type,box){
	var filename = type.split('.');
	var filenamelength 	= filename[0].length;
	
	var placeholder = "";
	
	if(filename[0] != ""){
		placeholder = filename[0]+".txt";
	}else{
		placeholder = "";
	}
	
	var input_html = "<div class='input-group'>"+
					 "<input type='text' class='form-control' id='input_fileCal_"+box+"_OL' readonly placeholder='"+placeholder+"'>"+
					 "<label class='input-group-btn'>"+
					 "<span id='spanBoxCal"+box+"_OL' class='btn btn-primary'>"+
					 "<font id='validate_filerate"+box+"_OL' style='color: red; display: inline-block;'>*</font>"+
					 "เลือกไฟล์<input id='select_fileCal_"+box+"_OL' type='file' accept='.txt' style='display: none;'"+
					 "onchange=\"selectFileCal_OL("+box+",'"+filename[0]+"','select_fileCal_"+box+"_OL');"+"\" disabled></span>"+
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
	var btn_download = "";
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
		btn_download = "download_inputExtra_RateView_OL";
		select_file_name = 1;
		type = 21;
		fileID = "em_fileID1_OL";
		
		rate_cat_id = $("#rateCat_inputEM_OL").val();
		sub_cat_id = $("#rateSubCat_inputEM_OL").val();
		
	}else if(select_file == 2){
		tbl_col = 31;
		tbl_auto = "tb_inputSA_CL_RateAuto_OL";
		tbl_view = "tb_inputSA_CL_Rate_OL";
		modal_auto = "modal_inputSA_OL_RateAuto";
		modal_view = "modal_inputSA_OL_Rate";
		cv_button = "cv_SAExtra_Rate_ol";
		btn_save = "save_inputSA_OL_Rate";
		attr_onclick = "open_modalCV_OL(7,this.id)";
		validate_file = "validate_filerate2_OL";
		btn_download = "";
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
		btn_download = "download_inputDisSA_OL_Rate";
		select_file_name = 3;
		type = 33;
		fileID = "dsc_fileID3_OL";
		
		rate_cat_id = $("#rateCat_inputDisSA_OL").val();
		sub_cat_id = $("#rateSubCat_inputDisSA_OL").val();
		
	}else if(select_file == 4){
		tbl_col = 63;
		tbl_auto = "tb_inputNAR_OL_RateAuto";
		tbl_view = "tb_inputNAR_OL_Rate";
		modal_auto = "modal_inputNAR_OL_RateAuto";
		modal_view = "modal_inputNAR_OL_Rate";
		cv_button = "cv_NAR_Rate_ol";
		btn_save = "save_inputNAR_OL_Rate";
		attr_onclick = "open_modalCV_OL(9,this.id)";
		validate_file = "validate_filerate4_OL";
		btn_download = "download_inputNAR_OL_Rate";
		select_file_name = 4;
		type = 43;
		fileID = "NAR_fileID4_OL";
		
		rate_cat_id = $("#rateCat_inputNAR_OL").val();
		sub_cat_id = $("#rateSubCat_inputNAR_OL").val();
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
		
		if(select_file == 4){
			file_pattern = file_name.replace(cov_code,"{P Code}");
		}else{
			file_pattern = file_name.replace(cov_code,"{Code}");
		}
					
		
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
			
			convertToBase64_OL(inputfilename, file_type_id)
			
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
							    	}else if(type == 43){
							    		/*Dis SA*/
							    		$("#NAR_rateLayout"+select_file_name+"_OL").val(response.rate_layout_id);
							    		$("#NAR_fileID"+select_file_name+"_OL").val(response.file_id);
							    	}			
							    	
							    	$("#input_fileCal_"+select_file+"_OL").val(file_name);
									$('#'+cv_button).prop("disabled",false);
//									$('#'+cv_button).attr("onclick",attr_onclick);
									$("#"+validate_file).css("display","none");
									$("#modal_waiting").modal('hide');
									$("body").addClass("body_nopadding");
								
							    	$('#'+cv_button).attr("onclick", "openFileTextRider_OL('"+file_name+"','"+obj_ref+"',"+tbl_col+",'"+tbl_view+"','"+modal_view+"')");
							    	$("#"+btn_download).attr("onclick", "openFile_target('"+file_name+"','"+obj_ref+"','txt_download')");
							
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
	
	if(select_text != "None" || $(this).val() != ""){
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
			$("#tb_PM_Rate1_OL tbody>tr>td:nth-child(2) select>option[value='NONE']").attr('selected', true);
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
							
							$row2.find("td:nth-child(3) input[type='hidden']").eq(0).attr("id","rm_rateLayout_OL"+number_child_new);
							$row2.find("td:nth-child(3) input[type='hidden']").eq(1).attr("id","rm_fileID_OL"+number_child_new);
							
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
				
				$row_extra.find("td:nth-child(2) input[type='hidden']").eq(0).attr("id","ext_rateLayout_OL"+aa);
				$row_extra.find("td:nth-child(2) input[type='hidden']").eq(1).attr("id","ext_fileID_OL"+aa);
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
							
							$row2.find("td:nth-child(2) input[type='hidden']").eq(0).attr("id","cv_rateLayout_OL"+number_child_new);
							$row2.find("td:nth-child(2) input[type='hidden']").eq(1).attr("id","cv_fileID_OL"+number_child_new);
							
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
					
					$row.find("td:nth-child(2) input[type='hidden']").eq(0).attr("id","cv_rateLayout_OL"+k);
					$row.find("td:nth-child(2) input[type='hidden']").eq(1).attr("id","cv_fileID_OL"+k);
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
						  		"<input id='fileuploads_PMRate"+lastID+"_OL' type='file' accept='text/plain' style='display: none;' disabled>"+ 
						  "</span>"+
						 "</label>"+
					"</div>"+
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
					  		"<input id='fileuploads_RateValue"+thisID_Sub+"_OL' type='file' accept='text/plain' style='display: none;' disabled>"+ 
					  "</span>"+
					 "</label>"+
				"</div>"+
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
	
	if(numrow_PMRate <= 0){
		$("#tb_PM_Rate1_OL>tbody").append(new_row);
	}
	
	if(numrow_RateValue <= 0){
		$("#tb_RateValue1_OL>tbody").append(new_row2);
	}
	
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
	
	var tbl_name = "tbl_PMRatePlan_OL";
	var tblAuto_name = "tbl_PMRatePlanAuto_OL";
	
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
			
			$("#btn_value_warning_submit_OL").click(function(){
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
			
			$("#btn_value_warning_cancel_OL").click(function(){	
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
						/*$("#tbody_PM_Rate_OL"+thisID+">td:nth-child(3) input[type='text']").attr("placeholder", "");
						$("#tbody_PM_Rate_OL"+thisID+">td:nth-child(3) *").prop("disabled", true);
						$("#tbody_PM_Rate_OL"+thisID+">td:nth-child(3) span").attr("disabled", true);
						$("#tbody_PM_Rate_OL"+thisID+">td:nth-child(3) span").css("display", "inline-block");*/
						$("#tb_PM_Rate1_OL td:nth-child(3) input[type='text']").val("");
						$("#tb_PM_Rate1_OL td:nth-child(3) input[type='text']").attr("placeholder", "");
						$("#tb_PM_Rate1_OL td:nth-child(3) *").prop("disabled", true);
						$("#tb_PM_Rate1_OL td:nth-child(3) span").attr("disabled", true);
						$("#tb_PM_Rate1_OL td:nth-child(3) span").css("display", "inline-block");
						$("#tb_PM_Rate1_OL td:nth-child(4) a").removeClass("open-PremiumRateDialog_OL");
						$("#tb_PM_Rate1_OL td:nth-child(4) span").removeClass("activecolorblue").addClass("activecolorgray");
						$("#tb_PM_Rate1_OL td:nth-child(5) span").removeClass("activecolorblue").addClass("activecolorgray");
					}else{				
						$("#tbody_PM_Rate_OL"+thisID+">td:nth-child(4) a").removeClass("open-PremiumRateDialog_OL");
						$("#tbody_PM_Rate_OL"+thisID+">td:nth-child(4) span").removeClass("activecolorblue").addClass("activecolorgray");
						$("#tbody_PM_Rate_OL"+thisID+">td:nth-child(5) span").removeClass("activecolorblue").addClass("activecolorgray");
						$("#tbody_PM_Rate_OL"+thisID+">td:nth-child(3) input[type='text']").val("");
						$("#tbody_PM_Rate_OL"+thisID+">td:nth-child(3) input[type='file']").val(null);
						$("#validate_rate"+thisID+"_OL").css("display","inline-block");
						
						$("#fileuploads_PMRateText"+thisID+"_OL").attr("placeholder", file_layout+"_"+baseplanCode_CL+".txt");
					  	
						/*เบี้ยมาตรฐาน*/
						var uploadfile = "selectFileRate_OL("+type+",'s','fileuploads_PMRate"+thisID+"_OL','"+file_layout+"_"+baseplanCode_CL+"','','sl_menu3_insurance_premium_ol','span_PM_Rateopen_OL_"+thisID+"')";
						
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
					  		
					  		var uploadfile_sub = "selectFileRate_OL("+type+",'b','fileuploads_PMRate"+list_band_ID+"_OL','"+file_layout+"_"+list_band_text+"_"+baseplanCode_CL+"','','sl_menu3_insurance_premium_ol','span_PM_Rateopen_OL_"+list_band_ID+"')";
							
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
					  	
						var uploadfile = "selectFileRate_OL("+type+",'s','fileuploads_PMRate"+thisID+"_OL','"+file_layout+"_"+baseplanCode_CL+"','','sl_menu3_insurance_premium_ol','span_PM_Rateopen_OL_"+thisID+"')";
						
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
					  		
					  		var uploadfile_sub = "selectFileRate_OL("+type+",'b','fileuploads_PMRate"+list_band_ID+"_OL','"+file_layout+"_"+list_band_text+"_"+baseplanCode_CL+"','','sl_menu3_insurance_premium_ol','span_PM_Rateopen_OL_"+list_band_ID+"')";
							
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
						
						var uploadfile_sub = "selectFileRate_OL(5,'s','fileuploads_RateValue"+id+"_OL','"+file_layout_r1_text+"','"+file_layout_r2_text+"','dbBox1_OL','span_RateValueopen_OL_"+id+"')";
						
						$("#fileuploads_RateValue"+id+"_OL").attr('onchange', uploadfile_sub);	
				  		$("#tbody_Rate_Value_OL"+id).find("td:nth-child(2) input[type='text']").attr("placeholder", placeholder_main);
				  		
				  		if(selectPM_text == 'None'){
				  			$("#tbody_Rate_Value_OL"+id).find("td:nth-child(2) *").prop("disabled",true);
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
					  		
					  		var uploadfile_band = "selectFileRate_OL(5,'b','fileuploads_RateValue"+id+"_OL','"+file_layout1_text+"','"+file_layout2_text+"','dbBox1_OL','span_RateValueopen_OL_"+id+"')";
							
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
								  	//"<input type='hidden' id='ext_rateCat"+aa+"' value=''>"+
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
						onchange = "selectFileRate_OL(4,'s','fileuploads_ExtraRate"+aa+"_OL','"+file_pattern+"','','sl_insurance_premium_Extra_ol','span_Extra_Rateopen_OL_"+aa+"')";
						
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
	var btn_download = "";
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
		btn_download = "download_tbl_PMRate_OL";
		select_file_name = select_file.replace("fileuploads_PMRate","");
		select_file_name = select_file_name.replace("_OL","");
		selectFile = "fileuploads_PMRate"+select_file_name+"_OL";
		textFile = "fileuploads_PMRateText"+select_file_name+"_OL";
		
		validateFile = "validate_rate"+select_file_name+"_OL";
		downloadFile = "span_PM_Ratedownload_OL_"+select_file_name;
		fileID = "rm_fileID_OL"+select_file_name;
		
		if(rate_cat == 's'){
			rate_cat_id = $("#rateCat_tbStardard_OL").val();
		}else{
			rate_cat_id = $("#rateCat_tbStardard_age_OL").val();	
		}
		
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
		
		select_file_name = select_file.replace("fileuploads_PMRate","");
		select_file_name = select_file_name.replace("_OL","");
		selectFile = "fileuploads_PMRate"+select_file_name+"_OL";
		textFile = "fileuploads_PMRateText"+select_file_name+"_OL";
		btn_download = "download_PMRatePlan4Col_OL";
		validateFile = "validate_rate"+select_file_name+"_OL";
		downloadFile = "span_PM_Ratedownload_OL_"+select_file_name;
		fileID = "rm_fileID"+select_file_name;
		
		if(rate_cat == 's'){
			rate_cat_id = $("#rateCat_tbStardard_OL").val();
		}else{
			rate_cat_id = $("#rateCat_tbStardard_age_OL").val();	
		}
		
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
		
		select_file_name = select_file.replace("fileuploads_PMRate","");
		select_file_name = select_file_name.replace("_OL","");
		selectFile = "fileuploads_PMRate"+select_file_name+"_OL";
		textFile = "fileuploads_PMRateText"+select_file_name+"_OL";
		btn_download = "download_PMRatePlan4Col_OL";
		validateFile = "validate_rate"+select_file_name+"_OL";
		downloadFile = "span_PM_Ratedownload_OL_"+select_file_name;
		fileID = "rm_fileID_OL"+select_file_name;
		
		if(rate_cat == 's'){
			rate_cat_id = $("#rateCat_tbStardard_OL").val();
		}else{
			rate_cat_id = $("#rateCat_tbStardard_age_OL").val();	
		}
		
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
		
		select_file_name = select_file.replace("fileuploads_ExtraRate","");
		select_file_name = select_file_name.replace("_OL","");
		selectFile = "fileuploads_ExtraRate"+select_file_name+"_OL";
		textFile = "fileuploads_ExtraRateText"+select_file_name+"_OL";
		btn_download = "download_ExtraRatePlan_OL";
		validateFile = "validate_extrarate"+select_file_name+"_OL";
		downloadFile = "span_Extra_Ratedownload_OL_"+select_file_name;
		fileID = "ext_fileID_OL"+select_file_name;

		rate_cat_id = $("#rateCat_tbExtra_OL").val();
				
		sub_cat_id = $("#sl_insurance_premium_Extra_ol option:selected").attr("data-subcat");		
	}else if(type == 5){
		/*ตารางมูลค่ากรมธรรม์*/
		tbl_name = "tbl_StandardRisk_OL";
		tblAuto_name = "tbl_StandardRiskAuto_OL";
		modal_name = "cvStandardRiskAuto_OL";
		modal_cv = "cvStandardRisk_OL";
		tbl_col = 12;
		file_button1 = "btn_submit_StandardRiskAuto_OL";
		file_button2 = "btn_cancel_StandardRiskAuto_OL";
		btn_download = "download_StandardRisk_OL";	
		select_file_name = select_file.replace("fileuploads_RateValue","");
		select_file_name = select_file_name.replace("_OL","");
		selectFile = "fileuploads_RateValue"+select_file_name+"_OL";
		textFile = "fileuploads_RateValueText"+select_file_name+"_OL";
		
		//validateFile = "validate_RateValue"+select_file_name+"_CL";
		validateFile = "";
		downloadFile = "span_RateValuedownload_OL_"+select_file_name;
		fileID = "cv_fileID_OL"+select_file_name;
		
		if(rate_cat == 's'){
			rate_cat_id = $("#cv_rate_Agespecific_OL").val();
		}else{
			rate_cat_id = $("#cv_rate_AgeBand_OL").val();	
		}
		
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
		btn_download = "download_StandardRisk_OL";	
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
		btn_download = "";
		select_file_name = select_file.replace("fileuploads_PMRate","");
		select_file_name = select_file_name.replace("_OL","");
		selectFile = "fileuploads_PMRate"+select_file_name+"_OL";
		textFile = "fileuploads_PMRateText"+select_file_name+"_OL";
		
		validateFile = "validate_rate"+select_file_name+"_OL";
		downloadFile = ""
;		fileID = "rm_fileID_OL"+select_file_name;
		
		if(rate_cat == 's'){
			rate_cat_id = $("#rateCat_capital_OL").val();
		}else{
			rate_cat_id = $("#rateSubCat_capital_OL").val();	
		}
		
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
	//$("#"+tbl_name+" tbody").empty();
	
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
					 	    	var obj_ref = response.upload_ref
					 	    	console.log(obj_ref)
					 	    	
					 	    	/*save file*/		
								set_Filevalue_OL(type,select_file_name,file_id,file_type_id,file_name,obj_ref,file_pattern,rate_cat_id,sub_cat_id,user_code);		
								/*end save file*/
					 	    	$("#modal_waiting").modal('hide');
					 	    	$("body").addClass("body_nopadding");
					 	    	$("#"+downloadFile+">span").attr("onclick", "openFile_target('"+file_name+"','"+obj_ref+"','txt_download')");
						    	$('#'+cv_button+">span").attr("onclick", "openFileTextRider_OL('"+file_name+"','"+obj_ref+"',"+tbl_col+",'"+tbl_name+"','"+modal_cv+"')");
						    	$("#"+btn_download).attr("onclick", "openFile_target('"+file_name+"','"+obj_ref+"','txt_download')");
						
					 	    }
					    })
				 	}
				
				
				
				$("#"+textFile).val(file_name);
				
				if(validateFile != ""){
					$("#"+validateFile).css("display", "none");
				}
				
				$('#'+cv_button+">span").removeClass("activecolorgray").addClass("activecolorblue");
//				$('#'+cv_button).attr("onclick","open_modalCV_OL("+type+",this.id)");
				$("#"+downloadFile+">span").removeClass("activecolorgray").addClass("activecolorblue");
				
			});
			
			$("#"+file_button2).click(function() {
				$("#"+textFile).val("");				
				$('#'+cv_button).prop('disabled', true);
				$('#'+cv_button+">span").removeClass("activecolorblue").addClass("activecolorgray");
				$("#"+downloadFile+">span").removeClass("activecolorblue").addClass("activecolorgray");
				
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
					 	    	var obj_ref = response.upload_ref
					 	    	console.log(obj_ref)
					 	    	
					 	    	/*save file*/
								set_Filevalue_OL(type,select_file_name,file_id,file_type_id,file_name,obj_ref,file_pattern,rate_cat_id,sub_cat_id,user_code);		
								/*end save file*/
					 	    	$("#modal_waiting").modal('hide');
					 	    	$("body").addClass("body_nopadding");
					 	    	$("#"+downloadFile+">span").attr("onclick", "openFile_target('"+file_name+"','"+obj_ref+"','txt_download')");
						    	$('#'+cv_button+">span").attr("onclick", "openFileTextRider_OL('"+file_name+"','"+obj_ref+"',"+tbl_col+",'"+tbl_name+"','"+modal_cv+"')");
						    	$("#"+btn_download).attr("onclick", "openFile_target('"+file_name+"','"+obj_ref+"','txt_download')");
						
					 	    }
					    })
				 	}
				 
				
				
				$("#"+textFile).val(file_name);
				if(validateFile != ""){
					$("#"+validateFile).css("display", "none");	
				}
				$('#'+cv_button+">span").removeClass("activecolorgray").addClass("activecolorblue");
//				$('#'+cv_button).attr("onclick","open_modalCV_OL("+type+",this.id)");
				$("#"+downloadFile+">span").removeClass("activecolorgray").addClass("activecolorblue");
				
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

function set_Filevalue_OL(type,id,file_id,file_type_id,file_name,obj_ref,file_pattern,rate_cat_id,sub_cat_id,user_code){
	datajson = {
			file_id			: file_id,
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
	    		$("#rm_rateLayout_OL"+id).val(response.rate_layout_id);
	    		$("#rm_fileID_OL"+id).val(response.file_id);
	    	}else if(type == 4){
	    		/*Extra_Rate*/
	    		$("#ext_rateLayout_OL"+id).val(response.rate_layout_id);
	    		$("#ext_fileID_OL"+id).val(response.file_id);
	    	}else if(type == 5){
	    		/*CV_Rate*/
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
	}else if(type == 6){
		tbl_name = "";
		modal_cv = "modal_inputExtra_RateView_OL";
		rowID = "";
		head_modal = $("#input_fileCal_1_OL").val();
	}else if(type == 7){
		tbl_name = "";
		modal_cv = "modal_inputSA_OL_Rate";
		rowID = "";
		head_modal = $("#input_fileCal_2_OL").val();
	}else if(type == 8){
		tbl_name = "";
		modal_cv = "modal_inputDisSA_OL_Rate";
		rowID = "";
		head_modal = $("#input_fileCal_3_OL").val();
	}else if(type == 9){
		tbl_name = "";
		modal_cv = "modal_inputNAR_OL_Rate";
		rowID = "";
		head_modal = $("#input_fileCal_4_OL").val();
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
		var uploadfile = "selectFileRate_OL(4,'s','fileuploads_ExtraRate"+select_extra_id+"_OL','"+file_layout+"','','sl_insurance_premium_Extra_ol','span_Extra_Rateopen_OL_"+select_extra_id+"')";		
		
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


/****************KHWAN Cal**********************/

function importInsurance_ol() {
	var ch_importInsurance_ol = document.getElementById("ch_importInsurance_ol");
	if (ch_importInsurance_ol.checked == true){
		$('#discountInsurancePremiumsSta_ol').prop("disabled",false)
		$('#discountInsurancePremiumsTo_ol').prop("disabled",false)
	}else{
		$('#discountInsurancePremiumsSta_ol').prop("disabled",true)
		$('#discountInsurancePremiumsTo_ol').prop("disabled",true)
	}
}

///เช็คค่าส่วนลดเบี้ยประกัน
function checkvaluePremiumsSta_PM_Rate_OL() {	
	var discountInsurancePremiumsSta  	= $('#discountInsurancePremiumsSta_ol').val();
	var discountInsurancePremiumsTo  	= $('#discountInsurancePremiumsTo_ol').val();
	if((discountInsurancePremiumsSta != "")){
		if(discountInsurancePremiumsTo < discountInsurancePremiumsSta){
			$("#discountInsurancePremiumsTo_ol").val(discountInsurancePremiumsSta);
			/*message = "กรุณาระบุส่วนลดเบี้ยประกันใหม่ให้ถูกต้อง";
			alertError(message);*/
		}else if(discountInsurancePremiumsTo > discountInsurancePremiumsSta){
			if(discountInsurancePremiumsSta == ""){
				if(discountInsurancePremiumsSta == ""){
					$("#discountInsurancePremiumsSta_ol").val("0.00");
				}
				message = "กรุณาระบุส่วนลดเบี้ยประกันใหม่ให้ถูกต้อง";
				alertError(message);
			}				
		}
	}
}

function checkvaluePremiumsTo_PM_Rate_OL() {
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
///เช็คค่า MIN_EM,MAX_EM 
function checkvalueMin_EM_OL() {			
	var min_EM_cl  = Number($('#min_EM_ol').val());
	var max_EM_cl  = Number($('#max_EM_ol').val());
	
	if((min_EM_cl != "") || (min_EM_cl != "0.00") || (min_EM_cl != "0")){
		if(max_EM_cl < min_EM_cl){
			$("#max_EM_ol").val(parseFloat(min_EM_cl).toFixed(2));					
		}
		/*if(max_EM_cl < min_EM_cl){
			message = "กรุณาระบุ MIN_EM ให้ถูกต้อง";
			alertError(message);
		}*//*else if(discountInsurancePremiumsTo > min_EM_cl){
			if(min_EM_cl == "" || min_EM_cl == "0" || min_EM_cl == "0.00"){
				if(min_EM_cl == ""){
					$("#min_EM_cl").val("0.00");
				}
				message = "กรุณาระบุ MIN_EM ให้ถูกต้อง";
				alertError(message);
			}				
		}*/
	}
	
}
///
function checkvalueMax_EM_OL() {
	var min_EM_cl  = Number($('#min_EM_ol').val());
	var max_EM_cl  = Number($('#max_EM_ol').val());	

	if((max_EM_cl != "") || (max_EM_cl != "0.00") || (max_EM_cl != "0")){
		if(max_EM_cl < min_EM_cl){
			$("#max_EM_ol").val("");
			message = "กรุณาระบุ MAX_EM ให้ถูกต้อง";
			alertError(message);
			$("#max_EM_ol").focus();
		}
	}else if(min_EM_cl != "0" && max_EM_cl == "0"){
		message = "กรุณาระบุ MAX_EM ให้ถูกต้อง";
		alertError(message);
		$("#max_EM_ol").focus();
	}else if(max_EM_cl != "0"){
		//$("#max_EM_cl").val(parseFloat(min_EM_cl).toFixed(2));
		$("#max_EM_ol").val("");
		$("#input_fileCal_1_OL").val("");
		$("#cv_InputExtra_Rate_ol").prop("disabled", true);
		/*message = "กรุณาระบุ MAX_EM ให้ถูกต้อง";
		alertError(message);*/
	}		
}

$("#min_EM_ol").keyup(function(){ 
	var min_EM_cl  = $('#min_EM_ol').val();
	var max_EM_cl  = $('#max_EM_ol').val();
	var riderCode = $("#riderCode_OL").val();
	if ((min_EM_cl != "" || max_EM_cl != "") && (min_EM_cl != 0 || max_EM_cl != 0)){
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
	var riderCode = $("#riderCode_OL").val();
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
			$("#input_fileCal_1_OL").val("");
			$("#input_fileCal_1_OL").attr("placeholder", "");
			$("#spanBoxCal1_OL").attr("disabled", true);
			$("#select_fileCal_1_OL, #cv_InputExtra_Rate_ol").attr("disabled", true);
			if($("#input_fileCal_1_OL").val() == ""){
				$("#validate_filerate1_OL").css("display","inline-block");
			}
		}
});

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
			$('#sl_insurance_premium_Extra_ol').val("");
			document.getElementById("min_EM_ol").disabled = true;
			document.getElementById("max_EM_ol").disabled = true;
			$("#min_EM_ol").val("0.00");
			$("#max_EM_ol").val("0.00");
			$("#input_fileCal_1_OL").val("");
			$("#input_fileCal_1_OL").attr("placeholder","");
			$("#spanBoxCal1_OL").attr("disabled", true);
			$("#select_fileCal_1_OL").attr("disabled", true);				
			//$("#validate_rate1_CL").css("display","inline-block");
			$("#em_rateLayout1_OL,#em_fileID1_OL").val("");
			$("#cv_InputExtra_Rate_ol").attr("disabled", true);
			$("#cv_InputExtra_Rate_ol").removeAttr("onchange");
			
			$("#tb_Extra_Rate_OL>tbody>tr input:text").attr("placeholder","");
			$("#tb_Extra_Rate_OL>tbody>tr td:nth-child(2) span").attr("disabled",true);
			$("#tb_Extra_Rate_OL>tbody>tr td:nth-child(2) font").css("display","none");
			$("#tb_Extra_Rate_OL>tbody>tr input:file").removeAttr("onchange");
			$("#tb_Extra_Rate_OL>tbody>tr input:file").attr("disabled",true);
		}			
		
		 $("#menu3_Confirm_ol2").attr('onclick', 'bt_Menu3_Confirm_ol2("Extra_Rate")');
	}
});

/*NAR*/
$("#ch_NAR_ol").click(function(){
	var ch_Reduced_capital_cl = document.getElementById("ch_NAR_ol");
	if (ch_Reduced_capital_cl.checked == true){
		document.getElementById("sl_NAR_OL").disabled = false;
	}else{
		var count_file = 0;
		if($("#input_fileCal_4_OL").val() != ""){
			count_file++;
		}
		
		if(count_file > 0){
				$("#textTop7_OL").text("NAR_Rate");
				$("#textTop8_OL").text("ตาราง NAR");
				$('#modal_CheckNone_Menu4_OL').modal('show');	
				$("#cancel_CheckNone_Menu4_OL").attr('onclick', 'cancel_check_None_OL("NAR_Rate")');
				
				$("#modal_CheckNone_Menu4_OL .modal-header button.close").click(function(){
					$("#ch_NAR_ol").prop("checked", true);
				});
				
		}else {
			$('#sl_NAR_OL option:contains("None")').attr("selected","selected");
			$('#sl_NAR_OL').attr("disabled",true);
			$("#spanBoxCal4_OL").attr("disabled", true);
			$("#cv_NAR_Rate_ol").attr("disabled", true);
		}
		 	
			$("#menu3_Confirm_ol2").attr('onclick', 'bt_Menu3_Confirm_ol2("NAR_Rate")');				
	}
});

$(document).on('focusin', '#sl_NAR_OL', function(){
	 $(this).data('val', $(this).val());
}).on('change','#sl_NAR_OL', function(){
	var prev_rate = $(this).data('val');
	var current_rate = $(this).val();	
	
	var select_text = $("#sl_NAR_OL option:selected").text();
	var baseplanCode_CL = $("#pass_Insurance_coverage_ol").val();
	var file_layout = "";

	if($("#input_fileCal_4_OL").val() != 0){					
		message = "เคยนำเข้าไฟล์ NAR_Rate ไว้แล้ว ต้องการเปลี่ยนตารางเบี้ยประกัน ใช่หรือไม่";
		alertValuePage_Warning2_OL(message);

		$("#btn_value_warning_submit2_OL").click(function(){
			check_file_NAR_OL();
		});
		
		$("#btn_value_warning_cancel2_OL").click(function(){				
			 $("#modal_value_warning2_OL").modal('hide');
			 $("#sl_NAR_OL").val(prev_rate).attr('selected', 'selected');
	     });
		
	}else{
		check_file_NAR_OL();
	}		

function check_file_NAR_OL(){
		file_layout = $("#sl_NAR_OL option:selected").val();
		file_layout_text = $("#sl_NAR_OL option:selected").text();
		
		file_layout = file_layout+baseplanCode_CL;
		var uploadfile = "selectFileCal_OL(4,'"+file_layout+"','select_fileCal_4_OL')";		
		
		if(file_layout_text != "None"){			
			$("#input_fileCal_4_OL").val("");
			$("#select_fileCal_4_OL").val(null);
			$("#input_fileCal_4_OL").attr("placeholder",file_layout+".txt");
			$("#select_fileCal_4_OL").attr("onchange",uploadfile);
			$("#select_fileCal_4_OL").attr("disabled",false);
			$("#spanBoxCal4_OL").attr("disabled",false);
			$("#cv_NAR_Rate_ol").attr("disabled",true);
			$("#validate_filerate4_OL").css("display","inline-block");
		}else{
			$("#input_fileCal_4_OL").val("");
			$("#select_fileCal_4_OL").val(null);
			$("#input_fileCal_4_OL").attr("placeholder","");
			$("#select_fileCal_4_OL").attr("onchange","");
			$("#select_fileCal_4_OL").attr("disabled",true);
			$("#spanBoxCal4_OL").attr("disabled",true);
			$("#cv_NAR_Rate_ol").attr("disabled",true);
			$("#validate_filerate4_OL").css("display","none");
		}
}
});

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
		
	}else if (data == "NAR_Rate"){
		$('#sl_NAR_OL option:contains("None")').attr("selected","selected");	
  
		document.getElementById("sl_NAR_OL").disabled = true;
		$('#cv_NAR_Rate_ol').attr("onclick");
	 	$('#spanBoxCal4_OL').attr("disabled",true);
	 	$('#cv_NAR_Rate_ol').prop("disabled",true);
	 	$("#select_fileCal_4_OL").attr("disabled", true);
		$("#input_fileCal_4_OL").attr("placeholder", "");
		$("#input_fileCal_4_OL").val("");
		$("#NAR_rateLayout4_OL,#NAR_fileID4_OL").val("");
		
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
	}else if (data == "NAR_Rate") {
		$("#ch_NAR_ol").prop("checked", true);
		$('#modal_CheckNone_Menu4_OL').modal('hide');	
	}
}

$("#ch_insurance_premium_ageBand_ol").click(function(){
	if($(this).prop('checked') == true){
		$("#div_Age_Band_OL *").attr("disabled", false);

	}else{
		$("#div_Age_Band_OL *").attr("disabled", "disabled").off("click");
		$("#tb_Age_Band_OL input:checkbox:checked").each(function(){
			var id = $(this).attr("id");
			id = id.replace("imgOK_ageBand_OL","");
			/*remove age band*/
			var band_text_unselect = $(this).val();
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
			
			$(this).attr("onclick","select_AgeBand_OL("+id+")");
		});
		
		$("#div_Age_Band_OL input:checkbox").prop("checked", false);

	}
	
	if($("#ch_standard_premium_ol").prop('checked') == false){
		$("#ch_standard_premium_ol").prop('checked',true);
		
		/*ปิดไว้ก่อน*/
		//$("#ch_Base_rate_OL").prop("disabled",false);
		//$("#ch_Base_rate_OL").prop( "checked", true );
		
		$('#sl_menu3_insurance_premium_ol').prop("disabled",false);
		$('#ch_importInsurance_ol').prop("disabled",false);
		/*$('#discountInsurancePremiumsSta').prop("disabled",false);
		$('#discountInsurancePremiumsTo').prop("disabled",false);*/
		$('#addrowPM_Rate_OL').prop("disabled",false);
		$('#delrowPM_Rate_OL').prop("disabled",false); 
		$("#tb_premiumLevel_OL>tbody>tr input:text").prop("disabled", false);
		$("#spanBoxCal3_OL").attr("disabled", false);
		$("#select_fileCal_3_OL").prop("disabled", false);
		
		$("#ch_insurance_premium_Extra_ol").prop("disabled", false);
		
		/*ปิดปุ่ม add row*/
		var num_dd = $("#tb_PM_Rate1_OL>tbody>tr[data-level='1']:first>td:nth-child(2) select>option[value!='NONE']").length;
		var numrow_tbl = $("#tb_PM_Rate1_OL>tbody>tr[data-level='1']").length;
		if(numrow_tbl == num_dd){
			$("#addrowPM_Rate_OL").attr("disabled", true);
		}
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
	var riderCode_CL = $("#riderCode_OL").val();
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
				  "<span id='spanRateValue"+thisID_Sub+"_OL' class='btn btn-primary'>"+
				  "..."+
				  	/*"<font id='validate_RateValue"+thisID_Sub+"_OL' style='color: red;'>*</font>..."+*/
				  		"<input id='fileuploads_RateValue"+thisID_Sub+"_OL' type='file' accept='text/plain' style='display: none;'>"+ 
				  "</span>"+
				 "</label>"+
			"</div>"+			
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
			band_layout = file_layout+"_"+row_band+"_"+riderCode_CL+".txt";
			
			file_layout2 = select_text2_value+selectPM_text;
			band_layout2 = file_layout2+"_"+row_band+"_"+riderCode_CL+".txt";
			
			var file_split = select_text2_value.split(",");
			var band_layout2_1 = file_split[0]+selectPM_text+"_"+row_band+"_"+riderCode_CL;
			var band_layout2_2 = file_split[1]+selectPM_text+"_"+row_band+"_"+riderCode_CL;
			
			if(file_split.length > 1){
				var band_layout_all = band_layout2_1+".txt หรือ "+band_layout2_2+".txt";
				var band_layout_onchange = band_layout2_1+"','"+band_layout2_2;
			}else{
				var band_layout_all = band_layout2_1+".txt";
				var band_layout_onchange = band_layout2_1;
			}
				
			
			if(selectPM_text != "None" && select_text != "None" ){			
				$("#fileuploads_PMRateText"+thisID_Sub+"_OL").attr("placeholder", band_layout);
				var uploadfile = "selectFileRate_OL("+type+",'b','fileuploads_PMRate"+thisID_Sub+"_OL','"+file_layout+"_"+row_band+"_"+riderCode_CL+"','','sl_menu3_insurance_premium_ol','span_PM_Rateopen_OL_"+thisID_Sub+"')";
				
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
				var uploadfile = "selectFileRate_OL(5,'b','fileuploads_RateValue"+thisID_Sub+"_OL','"+band_layout_onchange+"','dbBox1_OL','span_RateValueopen_OL_"+thisID_Sub+"')";
				
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

/*ตารางมูลค่าธรรม์*/
function displayPolicyValueOL(type){
	if(type == 1)
		{	
			var cbBox1_OL = $('#cbBox1_OL').prop('checked');
			if(cbBox1_OL)
			{						
				$('#dbBox1_OL').prop('disabled', false);
				$('#norisk_OL *').prop('disabled', false);
				$("#chk_RPU_OL *").prop('disabled', false);
			}else
				{
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
					$("#validate_dd_file1_ol").css("display","inline-block");
											
					$('#norisk_OL *').prop('disabled', true);
					$('#cbBox2_OL').prop('checked', false);
					$('#dbBox2_OL').prop('disabled', true);
					$("#dbBox2_OL option:contains('None')").attr('selected', 'selected');
					$('#cv2_OL').prop('disabled', true);
					$("#validate_dd_file2_ol").css("display","inline-block");
					
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
					$("#validate_dd_file2_ol").css("display","inline-block");
					
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
					$("#validate_dd_file2_ol").css("display","inline-block");
					
					selectTypeCode_OL("",2);
			  }
				
			}
	}
	
	if(type == 3)
	{
		
		var cbBox3_OL = $('#cbBox3_OL').prop('checked');
		if(cbBox3_OL)
			{
				//$("#RPU_OL *").prop('disabled', false);
				$('#dbBox3_1_OL').prop('disabled', false);
				$('#dbBox3_1_OL option').prop('disabled', false);
				$('#dbBox3_2_OL').prop('disabled', false);
				$('#dbBox3_2_OL option').prop('disabled', false);
				$('#dbBox3_3_OL').prop('disabled', false);
				$('#dbBox3_3_OL option').prop('disabled', false);
				
				$('#dbBox3_4_OL').prop('disabled', false);
				$('#dbBox3_4_OL option').prop('disabled', false);
				$('#dbBox3_5_OL').prop('disabled', false);
				$('#dbBox3_5_OL option').prop('disabled', false);
				$('#dbBox3_6_OL').prop('disabled', false);
				$('#dbBox3_6_OL option').prop('disabled', false);
				
				$("#tablePolicy1_OL").prop("checked", true);
				$("#tablePolicy1_OL").prop('disabled', false);
				$("#tablePolicy2_OL").prop('disabled', false);
				
				$("#oldTable_OL").show();
				$("#newTable_OL_year, #newTable_OL").hide();;
				
			}else{
				$("#cbBox3_OL").prop("checked", false);
				$("#tablePolicy1_OL, #tablePolicy2_OL").prop("disabled", true);
				$("#tablePolicy1_OL, #tablePolicy2_OL").prop("checked", false);
				$("#oldTable_OL *").prop('disabled', true);
				$("#oldTable_OL select").find("option:nth-child(1)").prop("selected", "selected");
				$("#newTable_OL_year *").prop('disabled', true);
				$("#newTable_OL span").attr('disabled', true);	
			}
	}
}

function changeDisplayBenefit005_OL(type){
	if(type == 1){
		$("#oldTable_OL").show();
		$("#newTable_OL_year").hide();
		$("#newTable_OL").hide();
		$("#tablePolicy2_OL").prop("checked", false);
	}else{
		$("#oldTable_OL").hide();
		$("#newTable_OL_year").show();
		$("#newTable_OL").show();
		$("#tablePolicy1_OL").prop("checked", false);
		$("#spanBox3_OL, #spanBox4_OL, #spanBox5_OL, #spanBox6_OL").attr("disabled", false)
	}
}

function selectTypeCode_OL(type,box){
	var CovCodeSelect_CL = $("#pass_Insurance_coverage_ol").val();
	
	var typeFormat = type.split(",");		
	var typeLength = typeFormat.length;
	var typeDigit = type.substr(0,4);
	var input_html = "";

	
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
			 "onchange=\"selectFile_OL("+box+",'"+typeFormat[0]+CovCodeSelect_CL+"','"+typeFormat[1]+CovCodeSelect_CL+"');"+"\">"+
			 " </span></label>";
		}else{
			input_html = "<input type='text' class='form-control' id='input_file_"+box+"_OL'"+
			 " placeholder='"+typeFormat[0]+CovCodeSelect_CL+".txt' readonly> <label class='input-group-btn'>"+
			 " <span id='spanBox"+box+"_OL' class='btn btn-primary'><font id='validate_input"+box+"_OL'"+
			 " style='color: red;'>*</font>เลือกไฟล์<input id='select_file_"+box+"_OL' type='file' accept='text/plain' style='display: none;'"+
			 "onchange=\"selectFile_OL("+box+",'"+typeFormat[0]+CovCodeSelect_CL+"','');"+"\">"+
			 " </span></label>";
		}
		
	}		
	//alert(input_html);
	$("#div_file"+box+"_OL").html(input_html);		
}

$("#dbBox2_OL").change(function() {		   		
	var dbBox2_OL = $("#dbBox2_OL").val();
	var dbBox2_OL_text = $("#dbBox2_OL option:selected").text();
	var select_file_2_OL = $("#select_file_2_OL").val();
	var select_hidden_value_old2 = "";
	var select_hidden_value_new2 = "";		
	
		tbl_name = "tbl_NotStandardRisk_OL";
		tblAuto_name = "tbl_NotStandardRiskAuto_OL";
		modal_name = "cvNotStandardRiskAuto_OL";		
	
	if(select_file_2_OL != ""){
		message = "เคยนำเข้าไฟล์ CV ไว้แล้ว ต้องการเปลี่ยนตารางมูลค่ากรมธรรม์ ใช่หรือไม่";
		alertValuePage_Warning3(message);
		
		$("#btn_value_warning_submit3").click(function(){
			$("#"+tblAuto_name+" tbody").empty();
			$("#"+tbl_name+" tbody").empty();
			
			if(dbBox2_OL_text == "None"){
				$('#spanBox2_OL').attr("disabled", true);
				$('#cv2_OL').prop('disabled', true);
				$('#select_file_2_OL').prop('disabled', true);
				$("#validate_dd_file2_ol").css("display", "inline-block");
				$("#dbBox2_OL option:contains('None')").attr("selected","selected");
				$("#select_file_2_OL").val("");
				$("#input_file_2_OL").attr("placeholder","");
				$("#input_file_2_OL").val("")
				$("#validate_input2_OL").css("display","none");
				$("#select_hidden_value_old2_OL").val(dbBox1_CL);
				$("#select_hidden_value_new2_OL").val(dbBox1_CL);
			}else{
				$("#select_hidden_value_new2_OL").val(dbBox2_CL)
				if($("#select_hidden_value_old2_OL").val() != $("#select_hidden_value_new2_OL").val()){						
					selectTypeCode_OL(dbBox2_OL,2);						
					$("#dbBox2_OL").val($("#select_hidden_value_new2_OL").val());				
					
				}	
			}										
			
	     });
	     
	     $("#btn_value_warning_cancel3").click(function(){
	    	 if(dbBox1_OL == ""){
	    		 $("#dbBox2_OL").val($("#select_hidden_value_new2_OL").val());
	    	 }else{
	    		 $("#dbBox2_OL").val($("#select_hidden_value_old2_OL").val());
	    		 $('#spanBox2_OL').attr("disabled", false);
				 $('#cv2_OL').prop('disabled', false);
				 $('#select_file_2_OL').prop('disabled', false);
				 $("#validate_dd_file2_ol").css("display", "none");
	    	 }		    	
			 $("#modal_value_warning").modal('hide');
	     })
	    
	}else{
		if(dbBox2_OL_text != "None"){
			selectTypeCode_OL(dbBox2_OL,2);
			$("#select_hidden_value_old2").val(dbBox2_OL);
			$('#spanBox2_OL').attr("disabled", false);
			//$('#cv2_CL').prop('disabled', false);
			$('#select_file_2_OL').prop('disabled', false);
			$("#validate_dd_file2_ol").css("display", "none");
		}else{
			selectTypeCode_OL("",2);
			$("#validate_dd_file2_ol").css("display", "inline-block");
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

/*บันทึกสลักหลัง*/
function check_rd_endorse_OL(value){
	if(value == 1){
		$("#endorse_Baseplan_OL,#endorse_Rider_OL").hide();
		$("#tbl_baseplanSelect_OL>tbody>tr").remove();
		$("#tbl_riderSelect_OL>tbody>tr").remove();
	}else{
		$("#endorse_Baseplan_OL,#endorse_Rider_OL").show();
	}
}

/*เลือกแบบประกันหลัก (เพิ่มเติม)*/
$(document).on("click", "#selectBasePlan_OL", function () {	
	$.ajax({
        type: "POST",
        url : "BasePlanCL_GetData_Servlet",
        data: {
        	method 	: "getBasePlanCL",
        },       
        success : function(response) {	
        	ShowDataBasePlanOL(response);
        },
        error : function(response) {	
        	alert("error");
        }
	});
});

function ShowDataBasePlanOL(response){
	$("#tb_SelectBaseplan_modal_OL tbody>tr input:checkbox").prop("checked", false);
	
	var row = "";
	for(i in response.BasePlanCL_Data){
		var obj = response.BasePlanCL_Data[i];
		row = "<tr id=\"row2_"+i+""+"\">" +	
			"<td class=\"col-sm-1 text-center"+"\">"+"<input type=\"checkbox\" id=\"ch_baseplan_OL_"+i+"\" value='"+obj.insuranceNo+"'>"+"</td>"+
			"<td class=\"verticalCenter col-sm-2 text-left"+"\">"+"<label style=\"text-decoration: underline; color: blue;\" for=\"ch_baseplan_OL_"+i+"\" id=\"baseplan_pass_OL_"+i+""+"\">"+obj.insuranceNo+"</label>"+"" +
			"</td>"+
			"<td class=\"col-sm-5 text-left"+"\">"+"<label for=\"ch_baseplan_OL_"+i+"\" id=\"baseplan_Name_OL_"+i+""+"\">"+obj.nameTH+"</label>"+"" +
			"</td>"+
		"</tr>";
		
		$("#tb_SelectBaseplan_modal_OL tbody").append(row);
	}
	
	$('#tb_SelectBaseplan_modal_OL').DataTable().destroy();
	$("#tb_SelectBaseplan_modal_OL").DataTable({"ordering": false,"paging": false,"bInfo" : false, scrollY: '236px',scrollCollapse: true, "autoWidth": false, 
		fixedHeader: {header: true},"oLanguage": {"sSearch": "ค้นหา: "}
	});
	$("#tb_SelectBaseplan_modal_OL_wrapper .dataTables_scrollHeadInner").css({"width":"100%"});
	$("#tb_SelectBaseplan_modal_OL_wrapper .table").css({"width":"100%"});
	
	/*เลือกแบบประกันหลักที่มีอยู่แล้ว*/
	var numrow_baseplan = $("#tbl_baseplanSelect_OL>tbody>tr").length;
	var arr_baseplan = [];
	if(numrow_baseplan > 0){
		$("#tbl_baseplanSelect_OL>tbody>tr").each(function(){
			var baseplan_number = $(this).find("td:nth-child(2)>label").text();
			arr_baseplan.push(baseplan_number);
		});
	}
	var save_arr_baseplan = arr_baseplan.join(",");
	var split_arr_baseplan = save_arr_baseplan.split(",");
	
	$("#tb_SelectBaseplan_modal_OL input:checkbox").prop("checked", false);
	
	for(var a=0; a<split_arr_baseplan.length; a++){
		$("#tb_SelectBaseplan_modal_OL tbody>tr").each(function(){
			if(split_arr_baseplan[a] == $(this).find("td:nth-child(2)").text()){
				$(this).find("input[type='checkbox']").prop("checked",true);
			}
		});
	}
		
	$('#modal_selectBaseplan_OL').modal('show');
}

/*บันทึกการเลือกแบบประกันหลัก*/
var numAdditional_contract = "";
function bt_save_Baseplan_OL() {
	var arrnumrow = [];
	var arrBaseplan = [];	
	var lastImgOK = $('#tbl_baseplanSelect_OL>tbody>tr:last>td:first').attr("id") || 0;	
	var count_row = $("#tbl_baseplanSelect_OL>tbody>tr").length;

	if(count_row > 0){
		//alert($("#tbl_"+BCID+">tbody>tr[data-group="+dataID+"]:last").attr("id"));		
		var numberImgOK = Number($("#tbl_baseplanSelect_OL>tbody>tr:last-child").attr("data-id"));	
	}else{
		var numberImgOK = 0;
	}
	var arr_value = [];
	var value_check_diff = [];
	
	/*เก็บค่า baseplan ที่แอดไปแล้ว*/
	var num_baseplan = $("#tbl_baseplanSelect_OL tbody>tr").length;
	if(num_baseplan > 0){
		$("#tbl_baseplanSelect_OL tbody>tr>td:nth-child(2)>label").each(function(){
			arrBaseplan.push($(this).text());
		});
		
		var value_chk_old = arrBaseplan.join(",")
		var value = [];
 	 		value = value_chk_old.split(",");
 	
	    for(var i=0; i<value.length; i++){		 
	    	value_check_diff.push(value[i]);	 
	 	}
	}
	
	$("#tb_SelectBaseplan_modal_OL tbody>tr input[type='checkbox']:checked").each(function(){
		var id = $(this).attr("id");
			id = id.replace("ch_baseplan_OL_","");
				
		var ftOnclick = "imgCheckbox(this.id);";	
		var baseplan_id = $("#baseplan_pass_OL_"+id).text();
		var baseplan_name = $("#baseplan_Name_OL_"+id).text();
		var baseplan_type = $(this).val();
		var save_diff = [];
		
		arr_value.push(baseplan_id);
		
		/*เช็คค่า Baseplan ID ซ้ำ*/
		arr_value.map(function(item){
	  		  if(!arrBaseplan.includes(item)){
	  			  save_diff.push(item);
	  		    }
	  	});
		
		var save_diff_data = save_diff.join(",");
	    var save_diff_split = save_diff_data.split(",");
		
	    if(save_diff != ""){
	    	
	    numberImgOK++;
	    var newID = "imgOK_"+numberImgOK;
	    
	    var addrowChild = 'addrowChild("'+numberImgOK+'","'+baseplan_name+'","'+baseplan_type+'");';
	    
	    for(var m=0; m<save_diff_split.length; m++){
	    	//alert(save_diff_split[m]);
	    	   		       		    	
	    if(baseplan_id == save_diff_split[m]){		
	    	row2 = "<tr id='tbody_baseplan_OL"+numberImgOK+"' data-id="+numberImgOK+">"+
						"<td id='imgOK_baseplan_OL"+numberImgOK+"' class='text-center verticalCenter' onclick='"+ftOnclick+"'>"+
							"<i class='glyphicon glyphicon-edit'></i></td>"+
						"<td class='verticalCenter'><label>"+baseplan_id+"</label></td>"+
						"<td class='verticalCenter'>"+baseplan_name+"</td>"+																									
					"</tr>";
	    	
			$("#tbl_baseplanSelect_OL tbody").append(row2);
			$('.auto').autoNumeric('init');

	    	}
	    }
	  }
	});
		
	if($("#div_BaseplanSelect_OL").innerHeight() > 264){
		$("#div_BaseplanSelect_OL").addClass("settableproduct");
	}else{
		$("#div_BaseplanSelect_OL").removeClass("settableproduct");
	}
	
	nameTab 	= "menu_OL_9";
	Statuesave = "N";
	
}

/*ลบแบบประกันหลัก*/
function deleteBaseplan_OL()
{
	var imgOKcount = $("#tbl_baseplanSelect_OL i.glyphicon-ok").length;
	if(imgOKcount <= 0)
	{	
		message = "กรุณาเลือกรายการที่ต้องการลบ";
		alertError(message);
	}else{
	message = "ต้องการลบรายการใช่หรือไม่";
	alertDeleteError(message);
	
	$("#btn_confirm_del").click(function(){
		var tblID 		= "#tbl_baseplanSelect_OL";
		var lastImgOK = $(tblID+" >tbody>tr:last>td:first").attr("id") || 0;	
		var numberImgOK = 0;
		if(lastImgOK == 0){
			numberImgOK = 1;
		}else{
			numberImgOK = Number(lastImgOK.replace("imgOK_baseplan_OL",""))+1;
		}
		for(var i = 1;i<=numberImgOK;i++)
			{
				var checked = $(tblID+" #tbody_baseplan_OL"+i+" >td:first>i").attr("class");
				if(checked == "glyphicon glyphicon-ok"){	
					deleteTableRow(tblID+" #tbody_baseplan_OL"+i);										
				}
			
			}
			if($("#div_BaseplanSelect_OL").innerHeight() <= 264){
				$("#div_BaseplanSelect_OL").removeClass("settableproduct");
			}
			
			nameTab 	= "menu_OL_9";
			Statuesave = "N";
			
		});
	}
}

/*สัญญาเพิ่มเติม*/
/*เลือกสัญญาเพิ่มเติม (เพิ่มเติม)*/
$(document).on("click", "#selectRider_OL", function () {	
	$.ajax({
        type: "POST",
        url : "RiderCL_GetData_Servlet",
        data: {
        	method 	: "getRiderCL2",
        },       
        success : function(response) {	
        	ShowDataRiderMenuOL(response);
        },
        error : function(response) {	
        	alert("error");
        }
	});	
});

function ShowDataRiderMenuOL(response){
	$("#tb_SelectRider_modal_OL tbody>tr input:checkbox").prop("checked", false);
	
	var row = "";
	for(i in response.RiderCL_Data){
		var obj = response.RiderCL_Data[i];
		row = "<tr id=\"row2_"+i+""+"\">" +	
				"<td class=\"col-sm-1 text-center"+"\">"+"<input type=\"checkbox\" id=\"ch_rider_OL_"+i+"\" value='"+obj.insuranceNo+"'>"+"</td>"+
				"<td class=\"verticalCenter col-sm-2 text-left"+"\">"+"<label style=\"text-decoration: underline; color: blue;\" for=\"ch_rider_OL_"+i+"\" id=\"rider_pass_OL_"+i+""+"\">"+obj.insuranceNo+"</label>"+"" +
				"</td>"+
				"<td class=\"col-sm-5 text-left"+"\">"+"<label for=\"ch_rider_OL_"+i+"\" id=\"rider_Name_OL_"+i+""+"\">"+obj.nameTH+"</label>"+"" +
				"</td>"+
			"</tr>";			  
		$("#tb_SelectRider_modal_OL tbody").append(row);
	}
	
	$('#tb_SelectRider_modal_OL').DataTable().destroy();
	$("#tb_SelectRider_modal_OL").DataTable({"ordering": false,"paging": false,"bInfo" : false, scrollY: '236px',scrollCollapse: true, "autoWidth": false, 
		fixedHeader: {header: true},"oLanguage": {"sSearch": "ค้นหา: "}
	});
	$("#tb_SelectRider_modal_OL_wrapper .dataTables_scrollHeadInner").css({"width":"100%"});
	$("#tb_SelectRider_modal_OL_wrapper .table").css({"width":"100%"});
	
	/*เลือสัญญาเพิ่มเติมที่มีอยู่แล้ว*/
	var numrow_rider = $("#tbl_riderSelect_OL>tbody>tr").length;
	var arr_rider = [];
	if(numrow_rider > 0){
		$("#tbl_riderSelect_OL>tbody>tr").each(function(){
			var rider_number = $(this).find("td:nth-child(2)>label").text();
			arr_rider.push(rider_number);
		});
	}
	var save_arr_rider = arr_rider.join(",");
	var split_arr_rider = save_arr_rider.split(",");
	
	$("#tb_SelectRider_modal_OL input:checkbox").prop("checked", false);
	
	for(var a=0; a<split_arr_rider.length; a++){
		$("#tb_SelectRider_modal_OL tbody>tr").each(function(){
			if(split_arr_rider[a] == $(this).find("td:nth-child(2)").text()){
				//alert(split_arr_rider[a]+" Label: "+$(this).find("td:nth-child(2)").text());
				$(this).find("input[type='checkbox']").prop("checked",true);
			}
		});
	}
	
	$('#modal_selectRider_OL').modal('show');
}

/*บันทึกการเลือกสัญญาเพิ่มเติม*/
var numAdditional_contract = "";
function bt_save_Rider_OL() {
	var arrnumrow = [];
	var arrRider = [];	
	var lastImgOK = $('#tbl_riderSelect_OL>tbody>tr:last>td:first').attr("id") || 0;	
	var count_row = $("#tbl_riderSelect_OL>tbody>tr").length;

	if(count_row > 0){
		//alert($("#tbl_"+BCID+">tbody>tr[data-group="+dataID+"]:last").attr("id"));		
		var numberImgOK = Number($("#tbl_riderSelect_OL>tbody>tr:last-child").attr("data-id"));	
	}else{
		var numberImgOK = 0;
	}
	var arr_value = [];
	var value_check_diff = [];
	
	/*เก็บค่า baseplan ที่แอดไปแล้ว*/
	var num_rider = $("#tbl_riderSelect_OL tbody>tr").length;
	if(num_rider > 0){
		$("#tbl_riderSelect_OL tbody>tr>td:nth-child(2)>label").each(function(){
			arrRider.push($(this).text());
		});
		
		var value_chk_old = arrRider.join(",")
		var value = [];
 	 		value = value_chk_old.split(",");
 	
	    for(var i=0; i<value.length; i++){		 
	    	value_check_diff.push(value[i]);	 
	 	}
	}
	
	$("#tb_SelectRider_modal_OL tbody>tr input[type='checkbox']:checked").each(function(){
		var id = $(this).attr("id");
			id = id.replace("ch_rider_OL_","");
				
		var ftOnclick = "imgCheckbox(this.id);";	
		var rider_id = $("#rider_pass_OL_"+id).text();
		var rider_name = $("#rider_Name_OL_"+id).text();
		var rider_type = $(this).val();
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
	    var newID = "imgOK_OL_"+numberImgOK;
	    
	    var addrowChild = 'addrowChild("'+numberImgOK+'","'+rider_name+'","'+rider_type+'");';
	    
	    for(var m=0; m<save_diff_split.length; m++){
	    	//alert(save_diff_split[m]);
	    	   		       		    	
	    if(rider_id == save_diff_split[m]){		
	    	row2 = "<tr id='tbody_rider_OL"+numberImgOK+"' data-id="+numberImgOK+">"+
						/*"<td id='imgOK_baseplan"+numberImgOK+"' class='verticalCenter text-center'><input id='baseplanSelect"+numberImgOK+"_cl' type='checkbox' value='G_NC_ML_R_E21'></td>"+*/
						"<td id='imgOK_rider_OL"+numberImgOK+"' class='text-center verticalCenter' onclick='"+ftOnclick+"'>"+
							"<i class='glyphicon glyphicon-edit'></i></td>"+
						"<td class='verticalCenter'><label>"+rider_id+"</label></td>"+
						"<td class='verticalCenter'>"+rider_name+"</td>"+																									
					"</tr>";
	    	
			$("#tbl_riderSelect_OL tbody").append(row2);
			$('.auto').autoNumeric('init');

	    	}
	    }
	  }
	});
		
	if($("#div_RiderSelect_OL").innerHeight() > 264){
		$("#div_RiderSelect_OL").addClass("settableproduct");
	}else{
		$("#div_RiderSelect_OL").removeClass("settableproduct");
	}
	
	nameTab 	= "menu_OL_9";
	Statuesave = "N";	
}

/*ลบสัญญาเพิ่มเติม*/
function deleteRider_OL()
{
	var imgOKcount = $("#tbl_riderSelect_OL i.glyphicon-ok").length;
	if(imgOKcount <= 0)
	{	
		message = "กรุณาเลือกรายการที่ต้องการลบ";
		alertError(message);
	}else{
	message = "ต้องการลบรายการใช่หรือไม่";
	alertDeleteError(message);
	
	$("#btn_confirm_del").click(function(){
		var tblID 		= "#tbl_riderSelect_OL";
		var lastImgOK = $(tblID+" >tbody>tr:last>td:first").attr("id") || 0;	
		var numberImgOK = 0;
		if(lastImgOK == 0){
			numberImgOK = 1;
		}else{
			numberImgOK = Number(lastImgOK.replace("imgOK_rider_OL",""))+1;
		}
		for(var i = 1;i<=numberImgOK;i++)
			{
				var checked = $(tblID+" #tbody_rider_OL"+i+" >td:first>i").attr("class");
				if(checked == "glyphicon glyphicon-ok"){	
					deleteTableRow(tblID+" #tbody_rider_OL"+i);										
				}
			
			}
			if($("#div_RiderSelect_OL").innerHeight() <= 264){
				$("#div_RiderSelect_OL").removeClass("settableproduct");
			}
			
			nameTab 	= "menu_OL_9";
			Statuesave = "N";	
		});
	}
}

function check_rd_endorse_OL(value){
	if(value == 1){
		$("#endorse_Baseplan_OL,#endorse_Rider_OL").hide();
		$("#tbl_baseplanSelect_OL>tbody>tr").remove();
		$("#tbl_riderSelect_OL>tbody>tr").remove();
	}else{
		$("#endorse_Baseplan_OL,#endorse_Rider_OL").show();
	}
}

function bt_record_OL_Confirm() {	
	var message = "";
	var error = 0;
	var record_count = $("#record_Table_OL>tbody>tr").length;			
	var record_name = document.getElementsByName('record_name_OL[]');
	var num_baseplan = $("#tbl_baseplanSelect_OL>tbody>tr").length;
	var num_rider = $("#tbl_riderSelect_OL>tbody>tr").length;
	
	for (i=0; i<record_count; i++)
		{
		 if (record_name[i].value == ""){
			 error++;
		}
	}

	if($("#rd_endorseMatch_OL2").prop("checked") == true){
		if(num_baseplan <= 0 && num_rider <= 0){
			error++;
		}
	}
	
	if(error > 0){
		 message = "กรุณาระบุข้อมูลให้ครบ";
		 alertError(message);
		 nameTab 	= "menu_OL_9";
		 Statuesave = "N";
	}else{
		dataSave_Endorse_OL();
		nameTab 	= "menu_OL_9";
		Statuesave = "Y";
		message = "บันทึกข้อมูลเรียบร้อย";
		alertSuccess(message);
	}
}

/*add บันทึกสลักหลัง*/
function saveSelectRecord_OL(){	
	var num_rows_endorse = $("#record_Table_OL tbody>tr").length;
	
	if(num_rows_endorse > 0){
		$("#record_Table_OL tbody>tr").remove();
	}
	
	var num_rows = $("#tbl_endorsement_OL>tbody>tr").length;
	var table = document.getElementById("record_Table_OL");	
	var row = "";
	for(var j=0; j<=num_rows; j++){
		var opt_endorsementSelect = false ;
			opt_endorsementSelect = document.getElementById("opt_endorsementSelect_OL"+j);
		var tr_endorsementSelect = $("#tr_endorsementSelect_OL"+j);
		if (opt_endorsementSelect != null){
			if(opt_endorsementSelect.checked == true){
				var lb_endorsementSelect = document.getElementById('lb_endorsementSelect_OL'+j).innerHTML;
				var key = $("#tr_endorsementSelect_OL"+j).find('td:nth-child(2)').text();
				if($("#record_Table_OL>tbody>tr").length > 0){
					var TableRow = Number($("#record_Table_OL>tbody>tr").length)-1;
					var lastImgOKNew = table.getElementsByClassName("spanRecord_OL");
				}else{
					var TableRow = 0;
					var lastImgOKNew = 0;
				}
						
				//alert(lastImgOKNew[TableRow].innerHTML);
				var numberImgOKNew = 0;
							
				if(lastImgOKNew == 0){
					numberImgOKNew = 1;
				}else{
					numberImgOKNew = Number(lastImgOKNew[TableRow].innerHTML)+1;
				}
					
				var lastImgOK = $('#record_Table_OL>tbody>tr:last>td:first').attr("id") || 0;
				var numberImgOK = 0;
							
				if(lastImgOK == 0){
					numberImgOK = 1;
				}else{
					numberImgOK = Number(lastImgOK.replace("imgOK_record_OL",""))+1;
				}
						
				var row = "";
				
				row = "<tr id='tbody_record_OL"+numberImgOK+"'>"+					    								
						  "<td id='imgOK_record_OL"+numberImgOK+"' class='text-center borderBlack'"+
						  "onclick='imgCheckbox_record_OL("+numberImgOK+");' data-key='"+key+"' style='vertical-align: middle;'>" +
						  "<i class='glyphicon glyphicon-edit'></i></td>"+	
						  "<td class='text-center borderBlack' style='vertical-align: middle;'><span class='spanRecord_OL' id='orderID_OL"+numberImgOK+"'>"+numberImgOKNew+"</span></td>"+									
						  "<td class='borderBlack verticalCenter'><input type='text' name='record_name_OL[]' id='record_name_OL"+numberImgOK+"' class='form-control margin-padding0 text-center;' value='"+lb_endorsementSelect+"' readonly></td>"+											  									
					  "</tr>";			
				
				$("#record_Table_OL tbody").append(row);
				//$(tr_endorsementSelect).hide();
			}
		}
	}
       
	if($("#div_recordOL").innerHeight() > 792){
		$("#div_recordOL").addClass("scroll_policy");
	}
 
	$("#modal_endorsement_OL").modal("hide");
	
	$("#tbl_endorsement_OL input[name='opt_endorsementSelect_OL[]']").prop("checked", false);
	
}

$(document).on("click", ".open-endorseDialog_OL", function () {
	if ($.fn.dataTable.isDataTable( "#tbl_endorsement_OL" ) ) {   	  
		 //$("#tbl_BenefitOpt1_CL").destroy();   	
		 
	}else{  		
		$("#tbl_endorsement_OL").DataTable({"ordering": false,"paging": false,"bInfo" : false, scrollY: '236px',scrollCollapse: true, "autoWidth": false, 
			fixedHeader: {header: true},"oLanguage": {"sSearch": "ค้นหา: "}
		});
		$(".datatbl_endorsement_OL .dataTables_scrollHeadInner").css({"width":"100%"});
		$(".datatbl_endorsement_OL .table").css({"width":"100%"});  

	}
	
	$("#tbl_endorsement_OL tbody>tr input:checkbox").prop("checked", false);
	
	$("#record_Table_OL tbody>tr").each(function(){
		var endorse_code = $(this).find("td:nth-child(1)").attr("data-key");
		
		$("#tbl_endorsement_OL tbody>tr input:checkbox").each(function(){
			if(endorse_code == $(this).val()){
				$(this).prop("checked", true);
			}
		});
	});
	
	$("#modal_endorsement_OL").modal("show");
});

function addRecordNew_OL(){	
	
	if($("#div_recordOL").innerHeight() > 792){
		$("#div_recordOL").addClass("scroll_policy");
	}
	
	var table = document.getElementById("record_Table_OL");	

	if($("#record_Table_OL>tbody>tr").length > 0){
		var TableRow = Number($("#record_Table_OL>tbody>tr").length)-1;
		var lastImgOKNew = table.getElementsByClassName("spanRecord_OL");
	}else{
		var TableRow = 0;
		var lastImgOKNew = 0;
	}
			
	//alert(lastImgOKNew[TableRow].innerHTML);
	var numberImgOKNew = 0;
				
	if(lastImgOKNew == 0){
		numberImgOKNew = 1;
	}else{
		numberImgOKNew = Number(lastImgOKNew[TableRow].innerHTML)+1;
	}
		
	var lastImgOK = $('#record_Table_OL>tbody>tr:last>td:first').attr("id") || 0;
	var numberImgOK = 0;
				
	if(lastImgOK == 0){
		numberImgOK = 1;
	}else{
		numberImgOK = Number(lastImgOK.replace("imgOK_record_OL",""))+1;
	}
			
	var row = "";
	
	row = "<tr id='tbody_record_OL"+numberImgOK+"'>"+					    								
		  "<td id='imgOK_record_OL"+numberImgOK+"' class='text-center borderBlack'"+
		  "onclick='imgCheckbox_record_OL("+numberImgOK+");' style='vertical-align: middle;'>" +
		  "<i class='glyphicon glyphicon-edit'></i></td>"+	
		  "<td class='text-center borderBlack' style='vertical-align: middle;'><span class='spanRecord_OL' id='orderID_OL"+numberImgOK+"'>"+numberImgOKNew+"</span></td>"+									
		  "<td class='borderBlack verticalCenter'><input type='text' name='record_name_OL[]' id='record_name_OL"+numberImgOK+"' class='form-control margin-padding0 text-center;'></td>"+											  									
		  "</tr>";
	
	
	$("#record_Table_OL tbody").append(row);
	/*$('.auto').autoNumeric('init');*/
}

function imgCheckbox_record_OL(id)
{
	var imgOK = "imgOK_record_OL"+id;
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

function confirmDeleteRecord_OL(){
	
	if($("#div_recordOL").innerHeight() > 792){
		$("#div_recordOL").addClass("scroll_policy");
	}else{
		$("#div_recordOL").removeClass("scroll_policy");
	}
	
	var imgOKcount = $("#record_Table_OL i.glyphicon-ok").length;
	if(imgOKcount <= 0)
	{	
		message = "กรุณาเลือกรายการที่ต้องการลบ";
		alertError(message);
	}else{
		
	message = "ต้องการลบรายการใช่หรือไม่";
	alertDeleteError(message);
		
	$("#btn_confirm_del").click(function(){				
		var lastImgOK = $('#record_Table_OL >tbody>tr:last>td:first').attr("id") || 0;	
		var numberImgOK = 0;
		if(lastImgOK == 0){
			numberImgOK = 1;
		}else{
			numberImgOK = Number(lastImgOK.replace("imgOK_record_OL",""))+1;
		}
		
		for(var i = 1;i<=numberImgOK;i++){
				var checked = $('#tbody_record_OL'+i+' >td:first>i').attr("class");
				if(checked == "glyphicon glyphicon-ok"){	
		
					/*คืนค่าที่ลบในตาราง*/
					var tr_bodyRecord = $('#tbody_record_OL'+i+" input[name='record_name_OL[]']").val();
					
					$("#tbl_endorsement_OL tbody>tr").each(function(){
						var lb_endorsement_OL = $(this).find("label").text();
												
						if(lb_endorsement_OL == tr_bodyRecord){
							$(this).show();
						}
					});
					
					deleteTableRow('#tbody_record_OL'+i);	
					
					nameTab 	= "menu_OL_9";
					Statuesave = "N";
					
				}				
		 }
			
		 /*create new order number in span*/
		 var record_count = $("#record_Table_OL>tbody>tr").length;
		 var table = document.getElementById("record_Table_OL");
		 var spans = table.getElementsByClassName("spanRecord_OL");
			for(var j = 0;j<record_count;j++){					
				//alert(spans[j].innerHTML);				
				spans[j].innerHTML = j+1;							 						
			}	
	  });
	}
}

/* ขออนุมัติ >> โชว์ข้อมูลจากหน้า Basic Info.*/
function showdata_fromBasic_OL(){	
	var cov_code = $("#pass_Insurance_coverage_ol").val();
	$("#code_Coverage_OL").val(cov_code);
	
	$("#confirmApprove_user_OL .modal-body p>span").text(cov_code);
	$("#confirmApprove_OL .modal-body p>span").text(cov_code);
	$("#confirmNotApprove_OL .modal-body p>span").text(cov_code);
}

/*ผลประโยชน์/ความคุ้มครอง*/
/*อื่นๆ*/

function cancleBenefit_OL()
{
	changeDisplayBenefit005_OL(0);
}

function cancelTab_OL(page){
	if(page == 1){
		/*ผลประโยชน์/ความคุ้มครอง*/
		setTimeout(() => {
			$("#mainBenefit_OL").css("display", "block");
			$("#benefitDetail_OL").css("display", "none");			
			//$("#tbl_benefit_CL i").removeClass("glyphicon-ok").addClass("glyphicon-edit");
		}, 30);
		
		
		$("#benefitDetail_OL .tab-content").remove();
		$("#tabBenefitRider_OL").html("");
		$("#benefitDetail_OL .tab-pane").removeClass("active");
		
	}
	
}

function imgCheckbox_benefit_OL(id)
{
	var imgOK = "imgOK_benefitOL"+id;
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

function show_bnf_content_OL(tab){
	
	$("#benefitDetail_OL .tab-content>div").each(function(){
		var contentID = $(this).attr("id");
		
		if(contentID == tab){
//			alert(contentID+" tab>>"+tab)
			$("#"+tab).css("display","block");
		}else{
			$(this).css("display","none");
		}
	});
	
}

/*โรคร้ายแรง*/
function newAddBenefitSD_OL(tab){
	
	var tbl = "BC_0"+tab+"_OL";

	/*var lastImgOK = $('#tbody_bnfL_OL >tbody>tr:last>td:first').attr("id") || 0;*/
	var lastImgOK = $('#tbody_bnfL_'+tbl+' >tbody>tr:last>td:first').attr("id") || 0;
	
	//alert(lastImgOK);
	var numberImgOK = 0;
	
	if(lastImgOK == 0){
		numberImgOK = 1;
	}else{
		var numberImgOK = Number(lastImgOK.replace("imgOK_OL_",""))+1;
	}
	

	var newID = "imgOK_OL_"+numberImgOK;
	var ftOnclick = 'imgCheckbox(this.id);';
	
	var row1 = "";
	row1 = "<tr id='tbody_bnfL_"+tbl+""+numberImgOK+"'>"+
				"<td class='text-center borderBlack' id='"+newID+"' width='33px' onclick='"+ftOnclick+"' style='vertical-align: middle;'>"+
				"<i class='glyphicon glyphicon-edit'></i>"+
				"</td>"+
				/*"<td class='text-center borderBlack'><input id='bnf_phase"+numberImgOK+"_OL' type='text' class='form-control margin-padding0 text-center width50px' maxlength='2' onkeyup='numberKey(this), replaceDot(this)' onkeydown='numberKey(this);' onkeypress='validate(event)' onchange='validate_range_tbdie(this.id,this.value,"+tab+");' value='' min='1'></td>"+*/
				"<td width='56px' class='borderBlack'><input id='bnf_fromYear"+numberImgOK+"_OL' type='text' class='form-control margin-padding0 text-center width50px' value='1'  onkeypress='validate(event);'  onkeyup='replaceDot_rd(this);' onblur='check_fromto_disease_ol("+numberImgOK+");' min='1' maxlength='2'></td>"+
				"<td width='100px' class='borderBlack'>"+
					"<select id='bnf_fromYearUnit"+numberImgOK+"_OL' class='form-control width-initial' onchange='check_fromtoUnit_disease_ol("+numberImgOK+");' style='margin: 0;width: 100%;'>"+
						"<option value='NONE' selected>None</option>"+
					"</select></td>"+
				"<td width='56px' class='borderBlack'><input id='bnf_toYear"+numberImgOK+"_OL' type='text' class='form-control margin-padding0 text-center width50px' value='1'  onkeypress='validate(event);'  onkeyup='replaceDot_rd(this);' onblur='check_fromto_disease_ol("+numberImgOK+");' min='1' maxlength='2'></td>"+
				"<td width='100px' class='borderBlack'>"+
					"<select id='bnf_toYearUnit"+numberImgOK+"_OL' class='form-control width-initial' onchange='check_fromtoUnit_disease_ol("+numberImgOK+");' style='margin: 0;width: 100%;'>"+
						"<option value='NONE' selected>None</option>"+
					"</select></td>"+
			"</tr>";

	var row2 = "";
	row2 = "<tr id='tbody_bnfR_"+tbl+""+numberImgOK+"'>"+
				"<td width='50px' class='borderBlack'>"+
				"<select id='bnf_sa_max"+numberImgOK+"_OL' class='form-control width-initial lookup_bnf_SA_OL'>"+
					"<option value='NONE' selected>None</option>"+												
				"</select></td>"+
			"<td width='50px' class='borderBlack'><input type='text' id='bnf_sa"+numberImgOK+"_OL' onblur='replaceBlank(this);' class='auto form-control margin-padding0 text-center width70px' value='0.00' data-v-min='0.00' data-v-max='999.99'></td>"+
			"<td width='50px' class='borderBlack verticalCenter'>"+
			"<select id='bnf_sa_unit"+numberImgOK+"_OL' class='form-control width80px lookup_bnf_SAunit_OL'>"+
					"<option value='NONE' selected>None</option>"+
			"</select>"+
			"</td>"+
			"<td width='50px' class='borderBlack'><input id='bnf_premium_OL"+numberImgOK+"' type='text'"+
				"class='auto form-control margin-padding0 text-center width70px' onblur='replaceBlank(this);' value='0.00' data-v-min='0.00' data-v-max='999.99'>"+
			"</td>"+
			"<td width='50px' class='text-center borderBlack'>"+
			"<select id='bnf_premium_unit"+numberImgOK+"_OL' onchange='sl_premium("+numberImgOK+")' class='form-control width80px'>"+
					"<option value='NONE' selected>None</option>"+
							
			"</select></td>"+
			"<td width='50px' class='text-center verticalCenter borderBlack'>"+
			"<input id='bnf_checkbox_OL"+numberImgOK+"' type='checkbox' disabled></td>"+
			"<td width='50px' class='borderBlack'><input id='bnf_cvpv_OL"+numberImgOK+"' type='text'"+
				" class='auto form-control margin-padding0 text-center width70px' onblur='replaceBlank(this);'  value='0.00' data-v-min='0.00' data-v-max='999.99'>"+
			"</td>"+
			"<td width='50px' class='text-center borderBlack'>"+
			"<select id='bnf_cv_unit"+numberImgOK+"_OL' class='form-control width80px'>"+
				"<option value='NONE' selected>None</option>"+
																
			"</select>"+
			"</td>"+
			"<td width='50px' class='text-center borderBlack'>"+
			"<select id='bnf_other_unit"+numberImgOK+"_OL' class='form-control width100px'>"+
					"<option value='NONE' selected>None</option>"+
															
			"</select>"+
			"</td>"+
			"</tr>";
	
	$("#tbody_bnfL_"+tbl+" tbody").append(row1);
	$("#tbody_bnfR_"+tbl+" tbody").append(row2);
	

	
	$('.auto').autoNumeric('init');

	/*Lookup*/
	var lookup_unit_calendar = $("#lookup_calendar_unit_OL").val();
	lookup_unit_calendar = lookup_unit_calendar.split(",");
	
	// unit
	var pass = 0;
	var text = 1;
	for(a = 0 ; a < lookup_unit_calendar.length/2 ; a++){
		var option_calendar = "<option value='"+lookup_unit_calendar[pass]+"'>"+lookup_unit_calendar[text]+"</option>"
		pass = Number(parseInt(pass) + parseInt(2));
		text = Number(parseInt(text) + parseInt(2));
		$("#bnf_fromYearUnit"+numberImgOK+"_OL").append(option_calendar);
		$("#bnf_toYearUnit"+numberImgOK+"_OL").append(option_calendar);
	}
	
	var lookup_unit = $("#lookup_disease_unit_OL").val();
	lookup_unit = lookup_unit.split(",");
	var pass = 0;
	var text = 1;
	for(a = 0 ; a < lookup_unit.length/2 ; a++){
		var option_unit = "<option value='"+lookup_unit[pass]+"'>"+lookup_unit[text]+"</option>"
		pass = Number(parseInt(pass) + parseInt(2));
		text = Number(parseInt(text) + parseInt(2));
		$("#bnf_sa_max"+numberImgOK+"_OL").append(option_unit);
	}
	
	var lookup_sa_unit = $("#lookup_sa_unit_OL").val();
	lookup_sa_unit = lookup_sa_unit.split(",")
	var pass = 0;
	var text = 1;
	for(a = 0 ; a < lookup_sa_unit.length/2 ; a++){
		var option_sa = "<option value='"+lookup_sa_unit[pass]+"'>"+lookup_sa_unit[text]+"</option>"
		pass = Number(parseInt(pass) + parseInt(2));
		text = Number(parseInt(text) + parseInt(2));
		$("#bnf_sa_unit"+numberImgOK+"_OL").append(option_sa);
		
	}
	
	var type_premium = $("#lst_premium_sl").val();
	type_premium = type_premium.split(",")
	var pass = 0;
	var text = 1;
	for(a = 0 ; a < type_premium.length/2 ; a++){
		var row_premium = "<option value='"+type_premium[pass]+"'>"+type_premium[text]+"</option>"
		pass = Number(parseInt(pass) + parseInt(2));
		text = Number(parseInt(text) + parseInt(2))
		$("#bnf_premium_unit"+numberImgOK+"_OL").append(row_premium);
	}	
	
	var lookup_cvpv_unit = $("#lookup_cvpv_OL").val();
	lookup_cvpv_unit = lookup_cvpv_unit.split(",")
	var pass = 0;
	var text = 1;
	for(a = 0 ; a < lookup_cvpv_unit.length/2 ; a++){
		var option_cvpv = "<option value='"+lookup_cvpv_unit[pass]+"'>"+lookup_cvpv_unit[text]+"</option>"
		pass = Number(parseInt(pass) + parseInt(2));
		text = Number(parseInt(text) + parseInt(2));
		$("#bnf_cv_unit"+numberImgOK+"_OL").append(option_cvpv);
	}
	
	var lookup_other_unit = $("#lookup_other_OL").val();
	lookup_other_unit = lookup_other_unit.split(",")
	var pass = 0;
	var text = 1;
	for(a = 0 ; a < lookup_other_unit.length/2 ; a++){
		var option_other = "<option value='"+lookup_other_unit[pass]+"'>"+lookup_other_unit[text]+"</option>"
		pass = Number(parseInt(pass) + parseInt(2));
		text = Number(parseInt(text) + parseInt(2));
		$("#bnf_other_unit"+numberImgOK+"_OL").append(option_other);
	}
	
	
	nameTab 	= "menu_OL_5";
	Statuesave = "N";
}

function cloneBenefitSD_OL(tbl){	 
	
    var lastImgOK = $('#tbody_bnfL_'+tbl+' >tbody>tr:last>td:first').attr("id") || 0;
    var numberImgOK = Number(lastImgOK.replace("imgOK_OL_",""))+1;

    var imgOKcount = $("#tbody_bnfL_"+tbl+" i.glyphicon-ok").length;	
    
	if(imgOKcount <= 0)
	{	
		message = "กรุณาเลือกรายการที่ต้องการคัดลอก";
		alertError(message);
		
	}else{
		
	for(var i = 1;i<numberImgOK;i++)
		{
		
			var checked = $('#tbody_bnfL_'+tbl+''+i+' >td:first>i').attr("class");			
			if(checked == "glyphicon glyphicon-ok")
				{	
				var runnumber = numberImgOK
			    	/*runnumber++*/
					
					var cloneL = $('#tbody_bnfL_'+tbl+''+i).clone().prop("id","tbody_bnfL_"+tbl+""+runnumber);
					var cloneR = $('#tbody_bnfR_'+tbl+''+i).clone().prop("id","tbody_bnfR_"+tbl+""+runnumber);
					
					 // Set id of new element
					 $(cloneL).find('td:first').prop("id","imgOK_OL_"+runnumber);
					 $(cloneL).find('td:first>i').removeClass("glyphicon-ok").addClass("glyphicon-edit");
					 /*$(cloneL).find('input[type=text]:nth-child(2)').attr("id","bnf_phase"+runnumber+"_OL");*/
					 $(cloneL).find('td:nth-child(2) input').attr("id","bnf_fromYear"+runnumber+"_OL");
					 $(cloneL).find('td:nth-child(4) input').attr("id","bnf_toYear"+runnumber+"_OL");
					 $(cloneL).find('td:nth-child(3) select').attr("id","bnf_fromYearUnit"+runnumber+"_OL");
					 $(cloneL).find('td:nth-child(5) select').attr("id","bnf_toYearUnit"+runnumber+"_OL");
					 		 
					 $(cloneR).find('td:nth-child(1) select').attr("id","bnf_sa_max"+runnumber+"_OL");
					 $(cloneR).find('td:nth-child(2) input').attr("id","bnf_sa"+runnumber+"_OL");
					 $(cloneR).find('td:nth-child(3) select').attr("id","bnf_sa_unit"+runnumber+"_OL");
					 $(cloneR).find('td:nth-child(4) input').attr("id","bnf_premium_OL"+runnumber);
					 $(cloneR).find('td:nth-child(5) select').attr("id","bnf_premium_unit"+runnumber+"_OL");
					 $(cloneR).find('td:nth-child(6) input').attr("id","bnf_checkbox_OL"+runnumber);
					 $(cloneR).find('td:nth-child(7) input').attr("id","bnf_cvpv_OL"+runnumber+"_OL");
					 $(cloneR).find('td:nth-child(8) select').attr("id","bnf_cv_unit"+runnumber+"_OL");
					 $(cloneR).find('td:nth-child(9) select').attr("id","bnf_other_unit"+runnumber+"_OL");
					 
				/*var sched_seq = $(cloneL).find('input[type=text]:nth-child(2)').attr("id","bnf_phase"+runnumber+"_OL").val();
				
				if(sched_seq != ""){ 
					 $(cloneL).find("td:nth-child(2) input").attr("id","bnf_phase"+runnumber+"_OL").val("");
					 $(cloneL).find("td:nth-child(3) input").attr("onblur","check_fromto("+runnumber+")");
					 $(cloneL).find("td:nth-child(5) input").attr("onblur","check_fromto("+runnumber+")");
					 $(cloneL).find('td:nth-child(4)>select').attr("onchange","check_fromtoUnit("+runnumber+")");
					 $(cloneL).find('td:nth-child(6)>select').attr("onchange","check_fromtoUnit("+runnumber+")");
					 $(cloneR).find('td:nth-child(5)>select').attr("onchange","sl_premium("+runnumber+")");
				 }else{*/
					 /*$(cloneL).find("td:nth-child(2) input").attr("id","bnf_phase"+runnumber+"_OL").val("");*/
					 $(cloneL).find("td:nth-child(2) input").attr("onblur","check_fromto_disease_ol("+runnumber+")");
					 $(cloneL).find("td:nth-child(4) input").attr("onblur","check_fromto_disease_ol("+runnumber+")");
					 $(cloneL).find('td:nth-child(3)>select').attr("onchange","check_fromtoUnit_disease_ol("+runnumber+")");
					 $(cloneL).find('td:nth-child(5)>select').attr("onchange","check_fromtoUnit_disease_ol("+runnumber+")");
					 $(cloneR).find('td:nth-child(5)>select').attr("onchange","sl_premium("+runnumber+")");
				 //}
					 
					 var $originalSelects1 = $('#tbody_bnfL_'+tbl+''+i).find('select:nth-child(1)');
					 $(cloneL).find('select:nth-child(1)').each(function(index, item) {
					      $(item).val($originalSelects1.eq(index).val() );
					  
					 });
					 

					 var $originalSelects2 = $('#tbody_bnfL_'+tbl+''+i).find('select:nth-child(2)');
					 $(cloneL).find('select:nth-child(2)').each(function(index2, item2) {					      
					      $(item2).val($originalSelects2.eq(index2).val() );
					  
					 });
					 
					 var $originalSelects3 = $('#tbody_bnfR_'+tbl+''+i).find('select:nth-child(1)');
					 $(cloneR).find('select:nth-child(1)').each(function(index3, item3) {				
					      $(item3).val($originalSelects3.eq(index3).val() );
					  
					 });
					 
					 var $originalSelects4 = $('#tbody_bnfR_'+tbl+''+i).find('select:nth-child(2)');
					 $(cloneR).find('select:nth-child(2)').each(function(index4, item4) {					    
					      $(item4).val($originalSelects4.eq(index4).val() );
					  
					 });
					 
					 $(cloneL).insertAfter("#tbody_bnfL_"+tbl+" >tbody tr:last");
					 $(cloneR).insertAfter("#tbody_bnfR_"+tbl+" >tbody tr:last");
					 
					 $('.auto').autoNumeric('init');
					 
				}			
		}
	nameTab 	= "menu_OL_5";
	Statuesave = "N";
	}	   
}

function confirmDeleteBenefitSD_OL(tbl){

	var imgOKcount = $("#tbody_bnfL_"+tbl+" i.glyphicon-ok").length;	
	if(imgOKcount <= 0)
	{	
		message = "กรุณาเลือกรายการที่ต้องการลบ";
		alertError(message);
	}else{
	
	message = "ต้องการลบรายการใช่หรือไม่";
	alertDeleteError(message);	
	
	$("#btn_confirm_del").click(function(){
		var lastImgOK = $('#tbody_bnfL_'+tbl+' >tbody>tr:last>td:first').attr("id");	
		var numberImgOK = Number(lastImgOK.replace("imgOK_OL_",""))+1;
		
		for(var i = 1;i<=numberImgOK;i++)
			{
				var checked = $('#tbody_bnfL_'+tbl+''+i+' >td:first>i').attr("class");
				if(checked == "glyphicon glyphicon-ok")
					{
						deleteTableRow('#tbody_bnfL_'+tbl+''+i);
						deleteTableRow('#tbody_bnfR_'+tbl+''+i);
					}
			}	
		
		/*change ID*/	
		/*var a=0, a2=0;
		$("#tbody_bnfL_OL tbody>tr").each(function(){
			a++;
			$(this).attr("id","tbody_bnfL_OL"+a);
			$(this).find("td:nth-child(1)").attr("id","imgOK_OL_"+a);
			$(this).find("td:nth-child(2)>input").attr("id","bnf_phase"+a+"_OL");
			$(this).find("td:nth-child(3)>input").attr("id","bnf_fromYear"+a+"_OL");
			$(this).find("td:nth-child(4)>select").attr("id","bnf_fromYearUnit"+a+"_OL");
			$(this).find("td:nth-child(5)>input").attr("id","bnf_toYear"+a+"_OL");
			$(this).find("td:nth-child(6)>select").attr("id","bnf_toYearUnit"+a+"_OL");		
		});
		
		$("#tbody_bnfR_OL tbody>tr").each(function(){
			a2++;
			$(this).attr("id","tbody_bnfL_OL"+a2);
			$(this).find("td:nth-child(1)>select").attr("id","bnf_sa_max"+a2+"_OL");
			$(this).find("td:nth-child(2)>input").attr("id","bnf_sa"+a2+"_OL");
			$(this).find("td:nth-child(3)>select").attr("id","bnf_sa_unit"+a2+"_OL");
			$(this).find("td:nth-child(4)>input").attr("id","bnf_premium_OL"+a2);
			$(this).find("td:nth-child(5)>select").attr("id","bnf_premium_unit"+a2+"_OL");	
			$(this).find("td:nth-child(6)>input").attr("id","bnf_checkbox_OL"+a2);	
			$(this).find("td:nth-child(7)>input").attr("id","bnf_cvpv_OL"+a2);
			$(this).find("td:nth-child(8)>select").attr("id","bnf_cv_unit"+a2+"_OL");
			$(this).find("td:nth-child(9)>select").attr("id","bnf_other_unit"+a2+"_OL");
		});	*/
		
		nameTab 	= "menu_OL_5";
		Statuesave = "N";
	});	
	
	}
}

/*รายการข้อยกเว้นการจ่ายเงินทดแทนในกรณีโรคร้ายแรง
$(document).on("click", ".open-exceptionDialog_OL", function () {	
	$("#tbl_exception_OL input:checkbox").prop("checked", false);
	
	$("#exception_Table_OL tbody>tr").each(function(){
		var code = $(this).find("td:nth-child(1)").attr("data-key");
		
		$("#tbl_exception_OL tbody>tr input:checkbox").each(function(){
			if(code == $(this).val()){
				$(this).prop("checked", true);
			}
		});
	});
	
	$("#modal_exception_OL").modal("show");
});*/

function saveSelectexception_OL(tbl){	
	var num_main_row = $("#exception_Table_"+tbl+" tbody>tr").length;
	
	$("#tbl_exception_OL input[type='checkbox']:checked").each(function(){
		var key = $(this).parent().parent().find('td:nth-child(1) input').val();
		var chk_match = false;
		var lb_ExceptionSelect = $(this).parent().parent().find('td:nth-child(2) label').text();
		for(var i = 0; i < num_main_row; i++){
			if(key == $("#exception_Table_"+tbl+" tbody>tr").eq(i).find("td:nth-child(1)").data("key")){
				chk_match = true;
			}
		}
		
		var lastImgOK = $("#exception_Table_"+tbl+" tbody>tr:last>td:first").attr("id") || 0;
		var numberImgOK = 0;
					
		if(lastImgOK == 0){
			numberImgOK = 1;
		}else{
			numberImgOK = Number(lastImgOK.replace("imgOK_exception",""))+1;
		}
		
		if(num_main_row == 0 || chk_match == false){
			row = "<tr id='tbody_exception"+numberImgOK+"'>"+					    								
			  "<td id='imgOK_exception"+numberImgOK+"' class='text-center borderBlack'"+
			  "onclick='imgCheckbox_exception_OL("+numberImgOK+");' data-key='"+key+"' style='vertical-align: middle;'>" +
			  "<i class='glyphicon glyphicon-edit'></i></td>"+	
			  "<td class='text-center borderBlack' style='vertical-align: middle;'><span class='spanException_OL' id='orderExceptionID"+numberImgOK+"'></span></td>"+									
			  "<td class='borderBlack verticalCenter'><input type='text' name='record_name[]' id='record_name"+numberImgOK+"' class='form-control margin-padding0 text-center;' value='"+lb_ExceptionSelect+"' readonly></td>"+											  									
		  "</tr>";			
	
			$("#exception_Table_"+tbl+" tbody").append(row);
		}
		
	})
	/*ลบค่า*/
	$("#tbl_exception_OL input[type='checkbox']").each(function(){
		if(!$(this).is(':checked')){
			var unchecked = $(this).val();
			var topic = "";
			
			$("#exception_Table_"+tbl+" tbody>tr").each(function(){
				if(unchecked == $(this).find('td:nth-child(1)').data("key")){
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
	
	
	$("#exception_Table_"+tbl+" tbody>tr").each(function(no){
		$(this).find("td:nth-child(2)").text(no+1)
	});
	
       
	if($("#div_exceptionOL").innerHeight() > 792){
		$("#div_exceptionOL").addClass("scroll_policy");
	}
 
	$("#modal_exception_OL").modal("hide");
	
	$("#tbl_exception_OL input[name='opt_exceptionSelect[]']").prop("checked", false);
	
}

function confirmDeleteException_OL(tbl){
	
	if($("#div_exceptionOL").innerHeight() > 792){
		$("#div_exceptionOL").addClass("scroll_policy");
	}else{
		$("#div_exceptionOL").removeClass("scroll_policy");
	}
	
	var imgOKcount = $("#exception_Table_"+tbl+" i.glyphicon-ok").length;
	if(imgOKcount <= 0)
	{	
		message = "กรุณาเลือกรายการที่ต้องการลบ";
		alertError(message);
	}else{
		
	message = "ต้องการลบรายการใช่หรือไม่";
	alertDeleteError(message);
		
	$("#btn_confirm_del").click(function(){				
		var lastImgOK = $('#exception_Table_'+tbl+' >tbody>tr:last>td:first').attr("id") || 0;	
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
					
					$("#tbl_exception_OL tbody>tr").each(function(){
						var lb_exception_CL = $(this).find("label").text();
												
						if(lb_exception_CL == tr_bodyRecord){
							$(this).show();
						}
					});
					
					deleteTableRow('#tbody_exception'+i);	
					
					nameTab 	= "menu_OL_9";
					Statuesave = "N";
					
				}				
		 }
			
		 /*create new order number in span*/
		 /*var record_count = $("#exception_Table_OL>tbody>tr").length;
		 var table = document.getElementById("exception_Table_OL");
		 var spans = table.getElementsByClassName("spanException_OL");
			for(var j = 0;j<record_count;j++){					
				//alert(spans[j].innerHTML);				
				spans[j].innerHTML = j+1;							 						
			}	*/
		$("#exception_Table_"+tbl+" tbody>tr").each(function(num){
			$(this).find("td:nth-child(2)").text(num+1);
		})
		
	  });
	}
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

function open_exception_OL(tbl){
	
	var arr_except_disease_key = [];
	$("#exception_Table_"+tbl+" tbody>tr").each(function(){
		var key = $(this).find('td:nth-child(1)').data('key');
		arr_except_disease_key.push(key);
		
		/*รีค่าส่วนที่ไม่ได้เลือกออก*/
		$("#tbl_exception_OL tbody>tr").each(function(){
				$(this).find('td:nth-child(1) input').prop("checked", false);
				
		});
		
		/*กลับมาเช็คค่าส่วนที่เลือกใหม่*/
		$("#tbl_exception_OL tbody>tr").each(function(){
			for(a in arr_except_disease_key){
				if(arr_except_disease_key[a] == $(this).find('td:nth-child(1) input').val()){
					$(this).find('td:nth-child(1) input').prop("checked", true);
				}
			}
		});
	});
	

	$("#btn_exception_OL").attr("onclick","saveSelectexception_OL('"+tbl+"')");
}

function confirmSelectBenefit_OL(){	
	var imgOKcount = $("#tbl_benefit_OL i.glyphicon-ok").length;
	var cov_status = $("#cov_status").val();
	var cov_status_RP = $("#cov_status_RP").val();
	
	if(imgOKcount <= 0)
	{	
		if(cov_status == "REQUEST_FOR_APPROVE" || cov_status == "APPROVED" || cov_status == "REQUEST_UPDATE" || cov_status_RP == "REQUEST_FOR_APPROVE" || cov_status_RP == "APPROVED" || cov_status_RP == "REQUEST_UPDATE"){
			message = "ไม่สามารถดูข้อมูลได้ เนื่องจากไม่มีรายการบันทึกไว้";
		}else{
			message = "กรุณาเลือกรายการที่ต้องการบันทึก";
		}
		
		alertError(message);
	}else{
	save_tab_benefitsCoverage_OL();
	
	var lastImgOK = $('#tbl_benefit_OL >tbody>tr:last>td:first').attr("id") || 0;	
	var numberImgOK = 0;
	if(lastImgOK == 0){
		numberImgOK = 1;
	}else{
		numberImgOK = Number(lastImgOK.replace("imgOK_benefitOL",""))+1;
	}
	
	var arr_objPass = [];
	var arr_objText = [];
	var arr_bnf = [];
	var arr_flag = [];
	$("#tbl_benefit_OL tbody>tr").each(function(){
		var className = $(this).find("td:nth-child(1) i").attr('class');
		if(className == "glyphicon glyphicon-ok"){
			arr_objPass.push($(this).find("td:nth-child(1)").data('value'));
			arr_objText.push($(this).find("td:nth-child(2)").text());
			arr_bnf.push($(this).find("td:nth-child(1)").data('value'));
			arr_flag.push($(this).find("td:nth-child(1)").data('flag'));
		}
	});
	
	$("#hidden_all_bnf_OL").val(arr_bnf);
	
	var firstCheck = $('#tbl_benefit_OL >tbody>tr>td>i.glyphicon-ok:first').attr("id");
	var numberfirstCheck = Number(firstCheck.replace("iconBenefitOL",""));
	var html = "";
	var j = 0;
	
	for(var i = 0;i<numberImgOK;i++)
		{			
			var checked = $('#tbody_benefitOL'+i+' >td:first>i').attr("class");
			if(checked == "glyphicon glyphicon-ok"){						
				html += "<li id='tabBC_0"+i+"_OL'><a data-toggle='tab' onclick=\"show_bnf_content_OL('BC"+i+"_OL');\""+
				"style='display: block' id='aBC"+i+"_OL'>"+arr_objPass[j]+"</a></li>";
				/*html += "<li id='tabBC_0"+i+"'><a data-toggle='tab' data-target='#BC"+i+"_CL'"+
				"style='display: block' id='aBC"+i+"_CL'>"+arr_objPass[j]+"</a></li>";*/
				j++;
			}			
		}
	
	$("#tabBenefitRider_OL").append(html);
	//$("#tabBC_0"+numberfirstCheck).attr("class","active");
	$("#BC"+numberfirstCheck+"_OL").addClass("active in");
	var num = 0;

	var row = "";
	for(var i = 0;i<numberImgOK;i++)
	{
		var checked = $('#tbody_benefitOL'+i+' >td:first>i').attr("class");
		if(checked == "glyphicon glyphicon-ok"){
		
		row = "<div class='tab-content'id='tab_content_BC_0"+i+"_OL' data-name='"+arr_objPass[num]+"' data-flag='"+arr_flag[num]+"' data-id='BC_0"+i+"_OL'>"+
			"<div id='BC"+i+"_OL' class='tab-pane'>"+
			"<input type='hidden' id='hidden_BC_0"+i+"_OL' value=''>"+
			"<input type='hidden' id='flag_BC_0"+i+"_OL' value='"+arr_flag[num]+"'>"+
			"<div class='heading1'>"+arr_objText[num]+"</div>"+
			"<div class='text-center' style='padding: 20px 0'></div>";
			
		/*โรคร้ายแรง*/
		if(arr_flag[num] == true){
		 row += "<table>"+
				"<tr>"+
					"<td>"+
						"<div style='padding-bottom: 64px'>"+
							"<input type='hidden' id='bnf_itemID' value=''>"+
							"<table class='table table-bordered' width='250' id='tbody_bnfL_BC_0"+i+"_OL' style='width: 470px;'>"+
								"<thead>"+
								"<tr>"+
									"<td width='64px' rowspan='2' style='vertical-align: middle;height: 74px;' class='text-center borderBlack bg-primary'>เลือก</td>"+
									/*"<td width='64px' rowspan='2' style='vertical-align: middle;height: 74px;' class='text-center borderBlack bg-primary'>ระยะ</td>"+*/
									"<td width='165px' colspan='2' rowspan='2' style='vertical-align: middle;' class='text-center borderBlack bg-primary'>From</td>"+
									"<td width='165px' colspan='2' rowspan='2' style='vertical-align: middle;' class='text-center borderBlack bg-primary'>To</td>"+
								"</tr>"+
								"<tr>"+
								"</tr>"+	
								"<thead>"+	
								"<tbody>"+	
								"</tbody>"+		
							"</table>"+
						"</div>"+
					"</td>"+
					"<td>"+
						"<div class='search-table-outter' style='margin-top: -49px; width:39%;'>"+
							"<table class='table table-bordered' id='tbody_bnfR_BC_0"+i+"_OL' style='width: 1000px;'>"+
								"<thead>"+
								"<tr>"+
									"<td width='700px' colspan='9' class='text-center borderBlack bg-primary'>เจ็บป่วยจากโรคร้ายแรง</td>"+
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
								"<tbody>"+
								"</tbody>"+
						"</table>"+
						"</div>"+
					"</td>"+
				"</tr>"+
		"</table>"+
		 
		 "<div class='row'>"+					
			"<div class='col-md-6 text-left'>"+
				"<div class='col-md-4' style='padding-left: 0;'>"+
					"<button class='btn btn-primary width100' onclick=\"newAddBenefitSD_OL('"+i+"');\">เพิ่มรายการ</button>"+
				"</div>"+
				"<div class='col-md-4' style='padding-left: 0;'>"+
					"<button class='btn btn-primary width100' onclick=\"cloneBenefitSD_OL('BC_0"+i+"_OL');\">คัดลอกรายการ</button>"+
				"</div>"+
				"<div class='col-md-4 text-left' style='padding-left: 0;'>"+
					"<button class='btn btn-primary width100' onclick=\"confirmDeleteBenefitSD_OL('BC_0"+i+"_OL');\">ลบรายการ</button>"+
				"</div>"+
			"</div>"+
			"<div class='col-md-4 text-right' style='float:right; padding-right:20px;'>"+
				
			"</div>"+
		"</div>";
		 
		}

		row += "<div class='text-center' style='padding: 30px 0'></div>"+
				"<div class='scroll_benefitTab_rider'>"+
				"<table class='table table-bordered borderBlack' id='tbl_BC_0"+i+"_OL' style='width:2500px;'>"+							
					"<thead>"+
						"<tr>"+									
							"<th rowspan='2' class='text-center bg-primary borderBlack' width='25' style='vertical-align: middle; height:74px;'>เลือก</th>"+
							"<th rowspan='2' class='text-center bg-primary borderBlack' width='25' style='vertical-align: middle;'>ลำดับ</th>";
							if(arr_flag[num] == true){
								row += "<th rowspan='2' class='text-center verticalCenter bg-primary borderBlack' width='150'>รหัสโรค</th>";
							}else{
								row += "<th rowspan='2' class='text-center verticalCenter bg-primary borderBlack' width='150'>รหัสความคุ้มครอง</th>";
							}
							
							row += "<th rowspan='2' class='text-center verticalCenter bg-primary borderBlack' width='400'>ความคุ้มครอง</th>"+																		
							"<th rowspan='2' class='text-center verticalCenter bg-primary borderBlack' width='100'>จำนวน</th>"+
							"<th rowspan='2' class='text-center verticalCenter bg-primary borderBlack' width='130'>หน่วย</th>"+
							"<th rowspan='2' class='text-center verticalCenter bg-primary borderBlack' width='100'>ต่อทุน</th>"+
							"<th rowspan='2' class='text-center verticalCenter bg-primary borderBlack' width='110'>ความถี่</th>";
								
							
							if(arr_flag[num] == true){
								row += "<th rowspan='2' class='text-center verticalCenter bg-primary borderBlack' width='70'>สัญญาสิ้นสุด</th>"+
							"<th rowspan='2' class='text-center verticalCenter bg-primary borderBlack' width='70'>นำไปหักผลประโยชน์ หรือ CV</th>";
							}
							
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
					"<tbody>"+									
					"</tbody>"+
				"</table>"+
				"</div>"+																		
			"<div class='text-center' style='padding: 10px 0'></div>"+
			"<div class='col-md-12 benefit_cv_box'>"+
				"<div class='col1'><input type='checkbox' id='cv_BC_0"+i+"_OL'></div>"+
				"<div class='col4'><label for='cv_BC_0"+i+"' class='label_notbold'>คืน CV เมื่อสิ้นปี</label></div>"+
				/*"<div class='col2'>คืน CV</div>"+
				"<div class='col3'><input type='text' class='auto form-control' id='cv_percent_BC_0"+i+"_OL' data-v-min='0.00' data-v-max='100.00'></div>"+
				"<div class='col4'>% เมื่อสิ้นปีกรณีการจ่ายสินไหมไปแล้ว</div>"+
				"<div class='col3'><input type='text' class='auto form-control' id='cv_percent_diff_BC_0"+i+"_OL' readonly></div>"+
				"<div class='col4'>%</div>"+*/
			"</div>"+
			"<div class='text-center' style='padding: 10px 0'></div>"+
			"<div class='row'>"+
				"<div class='col-md-4'>"+
					"<div class='col-md-6' style='padding-left: 0;'>"+
						"<a class='open-SelectBenefitDialog_OL' data-toggle='modal' href='#modal_selectCoverage_OL'><button class='btn btn-primary width100' onclick=\"addBenefitRider_OL('BC_0"+i+"_OL');\">เพิ่มรายการ</button></a>"+
					"</div>"+
					"<div class='col-md-6'>"+
						"<button class='btn btn-primary width100' onclick=\"confirmDeleteBenefitRaider_OL('BC_0"+i+"');\">ลบรายการ</button>"+
					"</div>"+
				"</div>"+
				"<div class='col-md-4'></div>"+
				"<div class='col-md-4'>";
				
				if(arr_flag[num] == false){		
				row += "<div class='col-md-6'>"+
						"<button class='btn btn-primary width100' onclick=\"bt_benefit_OL_Confirm('BC_0"+i+"_OL');\">บันทึก</button>"+
					"</div>"+
					"<div class='col-md-6' style='padding-right: 0'>"+
						"<button class='btn btn-primary width100' data-dismiss='modal' data-toggle='modal'"+
								"data-target='#cancelBoxOL_Benefit'>ยกเลิก</button>"+
					"</div>";
				}
				
				row += "</div>"+
			"</div>";
			
		/*รายการข้อยกเว้นการจ่ายเงินทดแทนในกรณีโรคร้ายแรง*/
		if(arr_flag[num] == true){
		row += "<div id='exception_OL'>"+
				"<div class='text-center' style='padding: 30px 0'></div>"+
				"<div id='div_exceptionOL'>"+
				"<input type='hidden' id='exception_bnf_id_OL' value=''>"+
				"<table class='table table-bordered borderBlack' id='exception_Table_BC_0"+i+"_OL' style='width:100%;'>"+
					"<thead>"+
						"<tr>"+
							"<th class='text-center bg-primary borderBlack' width='5' style='vertical-align: middle;'></th>"+	
							"<th class='text-center bg-primary borderBlack' width='5' style='vertical-align: middle;'>ลำดับ</th>"+							
							"<th class='text-center verticalCenter bg-primary borderBlack' width='400'>รายการข้อยกเว้นการจ่ายเงินทดแทนในกรณีโรคร้ายแรง</th>"+							
						"</tr>"+
					"</thead>"+
					"<tbody>"+
					"</tbody>"+							
				"</table>"+
				"</div>"+

				"<div class='text-center' style='padding: 20px 0'></div>"+
				"<div class='row'>"+
					"<div class='col-md-4'>"+
						"<div class='col-md-6' style='padding-left: 0;'>"+
							"<a class='open-exceptionDialog_OL' data-toggle='modal' href='#modal_exception_OL'>"+
								"<button class='btn btn-primary width100' onclick=\"open_exception_OL('BC_0"+i+"_OL')\">เพิ่มรายการ</button>"+
							"</a>"+
						"</div>"+
						"<div class='col-md-6'>"+
							"<button class='btn btn-primary width100' onclick=\"confirmDeleteException_OL('BC_0"+i+"_OL');\">ลบรายการ</button>"+
						"</div>"+
					"</div>"+
					"<div class='col-md-4'></div>"+
					"<div class='col-md-4'>"+
					"<div class='col-md-6'>"+
						"<button class='btn btn-primary width100' onclick=\"bt_benefit_OL_Confirm('BC_0"+i+"_OL');\">บันทึก</button>"+
					"</div>"+
					"<div class='col-md-6' style='padding-right: 0'>"+
						"<button class='btn btn-primary width100' data-dismiss='modal' data-toggle='modal'"+
								"data-target='#cancelBoxOL_Benefit'>ยกเลิก</button>"+
					"</div>"+
					"</div>"+
				"</div>"+
			"</div>";
		}
		num++;
		$("#benefitDetail_OL").append(row);
		
		}
	}
	
	$("#tabBenefitRider_OL").find('li').first().addClass("active").find('a').attr("aria-expanded","true");
	//var id_showFrist = $("#tabBenefitRider_CL").find('li').first().addClass("active").find('a').attr('href');
	/*var id_showFrist = $("#tabBenefitRider_CL").find('li').first().addClass("active").find('a').attr('data-target');
	$(""+id_showFrist).addClass('active');	*/
	
	$("#BC"+numberfirstCheck+"_OL").addClass("active");
	
	setTimeout(() => {
		$("#mainBenefit_OL").css("display", "none");
		$("#benefitDetail_OL").css("display", "block");
	}, 30);
		
	}	
}

/*บันทึกความคุ้มครอง*/
function bt_benefit_OL_Confirm(tbl) {	
	var message = "";
	var error = 0;

	var record_count = $("#tbl_"+tbl+">tbody>tr").length;		
	var flag_disease = $("#tab_content_"+tbl).data("flag");
	$("#tbl_"+tbl+">tbody>tr").each(function(){

			var benef_amt = $(this).find("td:nth-child(5) input").val();
			var benef_unit = $(this).find("td:nth-child(6) option:selected").val();
			
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
			
			if(flag_disease == true){
				var min_limit_amt = $(this).find("td:nth-child(12) input").val();
				var limit_amt = $(this).find("td:nth-child(13) input").val();
				var limit_unit = $(this).find("td:nth-child(14) option:selected").val();
				
				var spe_benef_amt = $(this).find("td:nth-child(16) input").val();
				var spe_benef_unit = $(this).find("td:nth-child(17) option:selected").val();
				
				
				
			}else{
				var min_limit_amt = $(this).find("td:nth-child(10) input").val();
				var limit_amt = $(this).find("td:nth-child(11) input").val();
				var limit_unit = $(this).find("td:nth-child(12) option:selected").val();
				
				var spe_benef_amt = $(this).find("td:nth-child(14) input").val();
				var spe_benef_unit = $(this).find("td:nth-child(15) option:selected").val();
				
			}
			if(min_limit_amt != "0.00" || limit_amt != "0.00" ){
				if(limit_unit == "NONE") {
					error++;
				}
			}
			
			
			if(limit_unit != "NONE"){
				if(min_limit_amt == "0.00" && limit_amt == "0.00" ){
					error++;
				}
				if(min_limit_amt == "0" && limit_amt == "0" ){
					error++;
				}
				
			}
			
			if(spe_benef_amt != "0.00"){
				if(spe_benef_unit == "NONE"){
					error++;
				}
			}

			if(spe_benef_unit != "NONE"){
				if(spe_benef_amt == "0.00"){
					error++;
				}
				if(spe_benef_amt == "0"){
					error++;
				}
			}
			
			
			
	});
	/*validateตารางโรคร้ายแรง*/
	if(flag_disease == true){
		$("#tbody_bnfL_"+tbl+" tbody>tr").each(function(){
			var beg_period = $(this).find("td:nth-child(2) input").val();
			var beg_eriod_unit = $(this).find("td:nth-child(3) option:selected").val();
			var end_period = $(this).find("td:nth-child(4) input").val();
			var end_period_unit = $(this).find("td:nth-child(5) option:selected").val();

			/*var sched_seq = $(this).find("td:nth-child(2) input").val();
			if(sched_seq == ""){
				error++;
			}*/
			
			if(beg_period != "" || beg_period != "0"){
				if(beg_eriod_unit == "NONE"){
					error++;
				}
			}
				
			if(beg_eriod_unit != "NONE"){
				if(beg_period == "" || beg_period == "0"){
					error++;
				}
			}
			
			if(end_period != "" || end_period != "0"){
				if(end_period_unit == "NONE"){
					error++;
				}
			}
			
			if(end_period_unit != "NONE"){
				if(end_period == "" || end_period == "0"){
					error++;
				}
			}
			
			
			
		});
		$("#tbody_bnfR_"+tbl+" tbody>tr").each(function(){
			
			var benef_amt_sa = $(this).find("td:nth-child(2) input").val();
			var benef_scope_sa = $(this).find("td:nth-child(3) option:selected").val();
			if(benef_amt_sa != "0.00"){
				if(benef_scope_sa == "NONE"){
					error++;
				}
			}
			if(benef_scope_sa != "NONE"){
				if(benef_amt_sa == "0.00"){
					error++;
				}
			}
			
			var benef_amt_pre = $(this).find("td:nth-child(4) input").val();
			var benef_scope_pre = $(this).find("td:nth-child(5) option:selected").val();
			if(benef_amt_pre != "0.00"){
				if(benef_scope_pre == "NONE"){
					error++;
				}
			}
			if(benef_scope_pre != "NONE"){
				if(benef_amt_pre == "0.00"){
					error++;
				}
			}
			
			var benef_amt_cvpv = $(this).find("td:nth-child(7) input").val();
			var benef_scope_cvpv = $(this).find("td:nth-child(8) option:selected").val();
			if(benef_amt_cvpv != "0.00"){
				if(benef_scope_cvpv == "NONE"){
					error++;
				}
			}
			if(benef_scope_cvpv != "NONE"){
				if(benef_amt_cvpv == "0.00"){
					error++;
				}
			}
		});
	}
	
	
	if(error > 0){
		message = "กรุณาระบุข้อมูลให้ครบ";
		alertError(message);
		nameTab 	= "menu_OL_5";
		Statuesave = "N";
	}else{
		dataSave_benefitsCoverage_OL(tbl);
		
		nameTab 	= "menu_OL_5";
		Statuesave = "Y";		
		message = "บันทึกข้อมูลเรียบร้อย";
		alertSuccess(message);
	}
}

function lookupCatValueAcessData_OL(response){
	/* unit */
	var lookup_unit = new Array();
	for(i in response.selectLookupBenefitdata[0].unit){
		var obj = response.selectLookupBenefitdata[0].unit[i];
		lookup_unit.push(obj.pass);
		lookup_unit.push(obj.text);
	}
	$("#lookup_unit_OL").val(lookup_unit);
	
	/* frequency */
	var lookup_frequency = new Array();
	for(i in response.selectLookupBenefitdata[0].frequency){
		var obj = response.selectLookupBenefitdata[0].frequency[i];
		lookup_frequency.push(obj.pass);
		lookup_frequency.push(obj.text);
	}
	$("#lookup_frequency_OL").val(lookup_frequency);
	
	/*factor_unit_new*/
	var unit_factor_lookup_new = new Array();
	for(i in response.selectLookupBenefitdata[0].factor_unit){
		var obj = response.selectLookupBenefitdata[0].factor_unit[i];
		unit_factor_lookup_new.push(obj.pass);
		unit_factor_lookup_new.push(obj.text);
	}
	$("#lookup_unit_factor_OL").val(unit_factor_lookup_new);
	
	/* factor unit */
	var lookup_factor_unit = [];
	for(i in response.selectLookupBenefitdata[0].unitFactor){
		var obj = response.selectLookupBenefitdata[0].unitFactor[i];
		lookup_factor_unit.push(obj.pass);
		lookup_factor_unit.push(obj.text);
	}
	$("#lookup_factor_unit_OL").val(lookup_factor_unit);
	
	var lookup_factor_scope = [];
	for(i in response.selectLookupBenefitdata[0].factor_scope){
		var obj = response.selectLookupBenefitdata[0].factor_scope[i];
		lookup_factor_scope.push(obj.pass);
		lookup_factor_scope.push(obj.text);
	}
	$("#lookup_factorScope_OL").val(lookup_factor_scope);

	/*ตารางโรคร้ายแรง*/
	var lookup_disease_calendar = [];
	for(i in response.selectLookupBenefitdata[0].die[0].die_calendar){
		var obj = response.selectLookupBenefitdata[0].die[0].die_calendar[i];
		lookup_disease_calendar.push(obj.pass);
		lookup_disease_calendar.push(obj.text);
	}
	$("#lookup_calendar_unit_OL").val(lookup_disease_calendar);
	

	var lookup_disease_sa = [];
	for(i in response.selectLookupBenefitdata[0].die[0].die_sa){
		var obj = response.selectLookupBenefitdata[0].die[0].die_sa[i];
		lookup_disease_sa.push(obj.pass);
		lookup_disease_sa.push(obj.text);
	}
	$("#lookup_sa_unit_OL").val(lookup_disease_sa);
	
	/*var lst_premium = ["ACCU", "ACCU", "YRT", "YRT"];
	$("#lst_premium_sl").val(lst_premium);*/

	var lookup_disease_premium = [];
	for(i in response.selectLookupBenefitdata[0].die[0].die_premium){
		var obj = response.selectLookupBenefitdata[0].die[0].die_premium[i];
		lookup_disease_premium.push(obj.pass);
		lookup_disease_premium.push(obj.pass);
	}
	$("#lst_premium_sl").val(lookup_disease_premium);
	
	var lookup_disease_other = [];
	for(i in response.selectLookupBenefitdata[0].die[0].die_other){
		var obj = response.selectLookupBenefitdata[0].die[0].die_other[i];
		lookup_disease_other.push(obj.pass);
		lookup_disease_other.push(obj.text);
	}
	$("#lookup_other_OL").val(lookup_disease_other);
	
	var lookup_disease_cvpv = [];
	for(i in response.selectLookupBenefitdata[0].die[0].die_CV_PV){
		var obj = response.selectLookupBenefitdata[0].die[0].die_CV_PV[i];
		lookup_disease_cvpv.push(obj.pass);
		lookup_disease_cvpv.push(obj.text);
	}
	$("#lookup_cvpv_OL").val(lookup_disease_cvpv);

	var lookup_disease_unit = [];
	for(i in response.selectLookupBenefitdata[0].die[0].die_unit){
		var obj = response.selectLookupBenefitdata[0].die[0].die_unit[i];
		lookup_disease_unit.push(obj.pass);
		lookup_disease_unit.push(obj.text);
	}
	$("#lookup_disease_unit_OL").val(lookup_disease_unit);
		
	var data_exception = [];
	/*var row_Exception = "";*/
	for (i in response.selectLookupBenefitdata[0].die[0].exception) {
		var obj_Exception = response.selectLookupBenefitdata[0].die[0].exception[i];
		var row_Exception = "<tr id='tr_exceptionSelect"+i+"'>"+
			"<td class='text-center vertical-middle'><input type='checkbox' name='opt_exceptionSelect[]' id='opt_exceptionSelect"+i+"' value="+obj_Exception.pass+"></td>" +
			"<td class='vertical-middle'><label id='lb_exceptionSelect"+i+"'>"+obj_Exception.text+"</label></td>" +
		"</tr>";
				
			$("#tbl_exception_OL tbody").append(row_Exception);
			
			
	}
	if ( $.fn.dataTable.isDataTable( '#tbl_exception_OL' ) ) {
		
	}else{
		
		$("#tbl_exception_OL").DataTable({"ordering": false,"paging": false,"bInfo" : false, scrollY: '236px',scrollCollapse: true, "autoWidth": false, 
			fixedHeader: {header: true},"oLanguage": {"sSearch": "ค้นหา: "}
		});
		$(".datatbl_exception_OL .dataTables_scrollHeadInner").css({"width":"100%"});
		$(".datatbl_exception_OL .table").css({"width":"100%"});
}
	
}
function get_dataBenefit_OL(response){
	 
	/********tab************/	
	
	for (i in response.Tab_Benefit_Check) {
		
		/*ข้อมูลในแต่ล่ะ tab*/
		for(j in response.Tab_Benefit_Check[i]){
			if(j == 0){
				
				var obj_bnf = response.Tab_Benefit_Check[i][j];		
				var bnf_id = obj_bnf.benefit_item.bnf_item_id;
				var bnf_name = obj_bnf.benefit_item.item_name;
				
			/************get master***********/
			
			$("#benefitDetail_OL .tab-content").each(function(){
				var tab_bnf = $(this).data("name");		
				var tab_id_disease = $(this).data("id");
				if(bnf_name == tab_bnf){
					$(this).find(".tab-pane>input:hidden").val(bnf_id);
				}	
				
		
				/*ตารางโรคร้ายแรง*/
			var no = 1;
			if(bnf_name == "BC_OL_DDR_01"){
				if(response.Tab_Benefit_Check[i][0].listBenefitSchedAccessData.length > 0){
					
					/*console.log(data_disease.listBenefitSchedAccessData.length)*/
					for(jjj in response.Tab_Benefit_Check[i][0].listBenefitSchedAccessData){
						
						/*bnf_sched*/
						var sched_disease = response.Tab_Benefit_Check[i][0].listBenefitSchedAccessData[jjj];
						var sched_seq = sched_disease.benefit_sched.sched_seq;
						var beg_period = sched_disease.benefit_sched.beg_period;
						var end_period = sched_disease.benefit_sched.end_period;
						var beg_period_unit = sched_disease.benefit_sched.beg_period_unit;
						var end_period_unit = sched_disease.benefit_sched.end_period_unit;
						var amt_compare = sched_disease.benefit_sched.amt_compare;
						/*bnf_amount*/
						for(aaa in response.Tab_Benefit_Check[i][0].listBenefitSchedAccessData[jjj].listBenefitAmount){
							var amount_disease = response.Tab_Benefit_Check[i][0].listBenefitSchedAccessData[jjj].listBenefitAmount[aaa];
							var benef_amt_check_seq = amount_disease.amt_seq;
							if(benef_amt_check_seq == "1") {
								var benef_amt_1 = (amount_disease.benef_amt*100).toFixed(2);
								var benef_unit_1 = amount_disease.benef_factor;
							}else if(benef_amt_check_seq == "2"){
								var benef_amt_2 = (amount_disease.benef_amt*100).toFixed(2);
								var benef_unit_2 = amount_disease.benef_factor;
							}else if(benef_amt_check_seq == "3"){
								var benef_amt_3 = (amount_disease.benef_amt*100).toFixed(2);
								var benef_unit_3 = amount_disease.benef_factor;
							}else if(benef_amt_check_seq == "4"){
								var benef_unit_4 = amount_disease.benef_factor;
							}
						}
						
						
						/*	Create Disease Table*/
						var newID = "imgOK_OL_"+no;
						var ftOnclick = 'imgCheckbox(this.id);';
						
						var row_diseaseL = "";
						row_diseaseL = "<tr id='tbody_bnfL_"+tab_id_disease+""+no+"'>"+
									"<td class='text-center borderBlack' id='"+newID+"' width='33px' onclick='"+ftOnclick+"' style='vertical-align: middle;'>"+
									"<i class='glyphicon glyphicon-edit'></i>"+
									"</td>"+
									/*"<td class='text-center borderBlack'><input id='bnf_phase"+no+"_OL' type='text' class='form-control margin-padding0 text-center width50px' value='"+sched_seq+"' min='1' maxlength='2' onkeyup='numberKey(this), replaceDot(this)' onkeydown='numberKey(this);' onkeypress='validate(event)' onchange='validate_range_tbdie(this.id,this.value,"+tab_id_disease+");'></td>"+*/
									"<td width='56px' class='borderBlack'><input id='bnf_fromYear"+no+"_OL' type='text' class='form-control margin-padding0 text-center width50px' value='"+beg_period+"' onkeypress='validate(event);'  onkeyup='replaceDot(this);' onblur='check_fromto_disease_ol("+no+");' min='1' maxlength='2'></td>"+
									"<td width='100px' class='borderBlack'>"+
										"<select id='bnf_fromYearUnit"+no+"_OL' class='form-control width-initial' onchange='check_fromtoUnit_disease_ol("+no+");' style='margin: 0;width: 100%;'>"+
											"<option value='NONE' selected>None</option>"+
										"</select></td>"+
									"<td width='56px' class='borderBlack'><input id='bnf_toYear"+no+"_OL' type='text' maxlength='2' class='form-control margin-padding0 text-center width50px' value='"+end_period+"' min='1' onkeypress='validate(event);'  onkeyup='replaceDot(this);' onblur='check_fromto_disease_ol("+no+");'></td>"+
									"<td width='100px' class='borderBlack'>"+
										"<select id='bnf_toYearUnit"+no+"_OL' class='form-control width-initial' onchange='check_fromtoUnit_disease_ol("+no+");' style='margin: 0;width: 100%;'>"+
											"<option value='NONE' selected>None</option>"+
										"</select></td>"+
									"</tr>";
					
						
						
						var row_diseaseR = ""; 
						row_diseaseR = "<tr id='tbody_bnfR_"+tab_id_disease+""+no+"'>"+
									"<td width='50px' class='borderBlack'>"+
									"<select id='bnf_sa_max"+no+"_OL' class='form-control width-initial'>"+
										"<option value='NONE' selected>None</option>"+												
									"</select></td>"+
									"<td width='50px' class='borderBlack'><input type='text' id='bnf_sa"+no+"_OL' class='auto form-control margin-padding0 text-center width70px' value='"+benef_amt_1+"' onblur='replaceBlank(this);' data-v-min='0.00' data-v-max='999.99'></td>"+
									"<td width='50px' class='borderBlack verticalCenter'>"+
									"<select id='bnf_sa_unit"+no+"_OL' class='form-control width80px'>"+
											"<option value='NONE' selected>None</option>"+
									"</select>"+
									"</td>"+
									"<td width='50px' class='borderBlack'><input id='bnf_premium_OL"+no+"' type='text'"+
										"class='auto form-control margin-padding0 text-center width70px' value='"+benef_amt_2+"' onblur='replaceBlank(this);' data-v-min='0.00' data-v-max='999.99'>"+
									"</td>"+
									"<td width='50px' class='text-center borderBlack'>"+
									"<select id='bnf_premium_unit"+no+"_OL' onchange='sl_premium("+no+")' class='form-control width80px'>"+
											"<option value='NONE' selected>None</option>"+
													
									"</select></td>"+
									"<td width='50px' class='text-center verticalCenter borderBlack'>"+
									"<input id='bnf_checkbox_OL"+no+"' type='checkbox' disabled></td>"+
									"<td width='50px' class='borderBlack'><input id='bnf_cvpv_OL"+no+"' type='text'"+
										"class='auto form-control margin-padding0 text-center width70px' value='"+benef_amt_3+"' onblur='replaceBlank(this);' data-v-min='0.00' data-v-max='999.99'>"+
									"</td>"+
									"<td width='50px' class='text-center borderBlack'>"+
									"<select id='bnf_cv_unit"+no+"_OL' class='form-control width80px'>"+
										"<option value='NONE' selected>None</option>"+
																						
									"</select>"+
									"</td>"+
									"<td width='50px' class='text-center borderBlack'>"+
									"<select id='bnf_other_unit"+no+"_OL' class='form-control width100px'>"+
											"<option value='NONE' selected>None</option>"+
																					
									"</select>"+
									"</td>"+
								"</tr>";
										
						
								$("#tbody_bnfL_"+tab_id_disease+" tbody").append(row_diseaseL);
								$("#tbody_bnfR_"+tab_id_disease+" tbody").append(row_diseaseR);
								
								$('.auto').autoNumeric('init');
									
								/*Lookup*/
								var lookup_unit_calendar = $("#lookup_calendar_unit_OL").val();
								lookup_unit_calendar = lookup_unit_calendar.split(",");
								
								// unit
								var pass = 0;
								var text = 1;
								for(a = 0 ; a < lookup_unit_calendar.length/2 ; a++){
									var option_calendar = "<option value='"+lookup_unit_calendar[pass]+"'>"+lookup_unit_calendar[text]+"</option>"
									pass = Number(parseInt(pass) + parseInt(2));
									text = Number(parseInt(text) + parseInt(2));
									$("#bnf_fromYearUnit"+no+"_OL").append(option_calendar);
									$("#bnf_toYearUnit"+no+"_OL").append(option_calendar);
								}
								
								var lookup_unit = $("#lookup_disease_unit_OL").val();
								lookup_unit = lookup_unit.split(",");
								var pass = 0;
								var text = 1;
								for(a = 0 ; a < lookup_unit.length/2 ; a++){
									var option_unit = "<option value='"+lookup_unit[pass]+"'>"+lookup_unit[text]+"</option>"
									pass = Number(parseInt(pass) + parseInt(2));
									text = Number(parseInt(text) + parseInt(2));
									$("#bnf_sa_max"+no+"_OL").append(option_unit);
								}
								
								var lookup_sa_unit = $("#lookup_sa_unit_OL").val();
								lookup_sa_unit = lookup_sa_unit.split(",")
								var pass = 0;
								var text = 1;
								for(a = 0 ; a < lookup_sa_unit.length/2 ; a++){
									var option_sa = "<option value='"+lookup_sa_unit[pass]+"'>"+lookup_sa_unit[text]+"</option>"
									pass = Number(parseInt(pass) + parseInt(2));
									text = Number(parseInt(text) + parseInt(2));
									$("#bnf_sa_unit"+no+"_OL").append(option_sa);
									
								}
								
								var type_premium = $("#lst_premium_sl").val();
								type_premium = type_premium.split(",")
								var pass = 0;
								var text = 1;
								for(a = 0 ; a < type_premium.length/2 ; a++){
									var row_premium = "<option value='"+type_premium[pass]+"'>"+type_premium[text]+"</option>"
									pass = Number(parseInt(pass) + parseInt(2));
									text = Number(parseInt(text) + parseInt(2))
									$("#bnf_premium_unit"+no+"_OL").append(row_premium);
								}	
								
								var lookup_cvpv_unit = $("#lookup_cvpv_OL").val();
								lookup_cvpv_unit = lookup_cvpv_unit.split(",")
								var pass = 0;
								var text = 1;
								for(a = 0 ; a < lookup_cvpv_unit.length/2 ; a++){
									var option_cvpv = "<option value='"+lookup_cvpv_unit[pass]+"'>"+lookup_cvpv_unit[text]+"</option>"
									pass = Number(parseInt(pass) + parseInt(2));
									text = Number(parseInt(text) + parseInt(2));
									$("#bnf_cv_unit"+no+"_OL").append(option_cvpv);
								}
								
								var lookup_other_unit = $("#lookup_other_OL").val();
								lookup_other_unit = lookup_other_unit.split(",")
								var pass = 0;
								var text = 1;
								for(a = 0 ; a < lookup_other_unit.length/2 ; a++){
									var option_other = "<option value='"+lookup_other_unit[pass]+"'>"+lookup_other_unit[text]+"</option>"
									pass = Number(parseInt(pass) + parseInt(2));
									text = Number(parseInt(text) + parseInt(2));
									$("#bnf_other_unit"+no+"_OL").append(option_other);
								}
								
								/*Get Lookup*/
								$("#bnf_fromYearUnit"+no+"_OL option[value="+beg_period_unit+"]").attr("selected", true);
								$("#bnf_toYearUnit"+no+"_OL option[value="+end_period_unit+"]").attr("selected", true);
								$("#bnf_sa_max"+no+"_OL option[value="+amt_compare+"]").attr("selected", true);
								$("#bnf_sa_unit"+no+"_OL option[value="+benef_unit_1+"]").attr("selected", true);
								if(benef_unit_2 == "ACC_TOT_PREM"){
									$("#bnf_premium_unit"+no+"_OL option[value=ACCU]").attr("selected", true);
									$("#bnf_checkbox_OL"+no).prop("checked", true);
									$("#bnf_checkbox_OL"+no).prop("disabled", false);
								}else if(benef_unit_2 == "ACC_STD_PREM"){
									$("#bnf_premium_unit"+no+"_OL option[value=ACCU]").attr("selected", true);
									$("#bnf_checkbox_OL"+no).prop("checked", false);
									$("#bnf_checkbox_OL"+no).prop("disabled", false);
								}else if(benef_unit_2 == "ANN_TOT_PREM"){
									$("#bnf_premium_unit"+no+"_OL option[value=YRT]").attr("selected", true);
									$("#bnf_checkbox_OL"+no).prop("checked", true);
									$("#bnf_checkbox_OL"+no).prop("disabled", false);
								}else if(benef_unit_2 == "ANN_STD_PREM"){
									$("#bnf_premium_unit"+no+"_OL option[value=YRT]").attr("selected", true);
									$("#bnf_checkbox_OL"+no).prop("checked", false);
									$("#bnf_checkbox_OL"+no).prop("disabled", false);
								}else if(benef_unit_2 == "ACC_COUPON_STD_PREM"){
									$("#bnf_checkbox_OL"+no).prop("checked", false);
									$("#bnf_checkbox_OL"+no).prop("disabled", false);
									$("#bnf_premium_unit"+no+"_OL option[value=ACCU_COUPON]").attr("selected", true);
									
								}else if(benef_unit_2 == "ACC_COUPON_TOT_PREM"){
									$("#bnf_checkbox_OL"+no).prop("checked", true);
									$("#bnf_checkbox_OL"+no).prop("disabled", false);
									$("#bnf_premium_unit"+no+"_OL option[value=ACCU_COUPON]").attr("selected", true);
									
								}
								
								$("#bnf_cv_unit"+no+"_OL option[value="+benef_unit_3+"]").attr("selected", true);
								$("#bnf_other_unit"+no+"_OL option[value="+benef_unit_4+"]").attr("selected", true);
								
								
								no++;
								
					}
				}
//			}
			
			
			/*get ตารางข้อยกเว้นโรคร้ายแรง*/
//			if(bnf_name == "BC_OL_DDR_01"){
				if(response.Tab_Benefit_Check[i][j].listBenefit.length > 0){
					for(jj in response.Tab_Benefit_Check[i][0].listBenefit) {
						var list_exception_disease = response.Tab_Benefit_Check[i][j].listBenefit[jj];
						var bnf_code = list_exception_disease.bnf_code;
						var name_th = list_exception_disease.name_th;
						var no = Number(jj)+1;
						var row = "";
						row = "<tr id='tbody_exception"+no+"'>"+					    								
						  "<td id='imgOK_exception"+no+"' class='text-center borderBlack'"+
						  "onclick='imgCheckbox_exception_OL("+no+");' data-key='"+bnf_code+"' style='vertical-align: middle;'>" +
						  "<i class='glyphicon glyphicon-edit'></i></td>"+	
						  "<td class='text-center borderBlack' style='vertical-align: middle;'><span class='spanException_OL' id='orderExceptionID"+no+"'>"+no+"</span></td>"+									
						  "<td class='borderBlack verticalCenter'><input type='text' name='record_name[]' id='record_name"+no+"' class='form-control margin-padding0 text-center;' value='"+name_th+"' readonly></td>"+											  									
					  "</tr>";			
				
						$("#exception_Table_"+tab_id_disease+" tbody").append(row);
						
					}
				}
			}
			
			});	
			
			
			}else{
				
			$('#tbl_benefit_OL >tbody i.glyphicon-ok').each(function(){
			var tabID = $(this).attr("id");
				tabID = tabID.replace("iconBenefitOL","");
				
			var bnf_active = $("#imgOK_benefitOL"+tabID).attr("data-value");
			//console.log(response.Tab_Benefit_Check[i])
			var bnf_name = response.Tab_Benefit_Check[i][0].benefit_item.item_name;
			
			/*console.log(bnf_name+"||"+bnf_active)*/
			
			if(bnf_active == bnf_name){
			/************get table***********/			
			var numberImgOK = 0;
			var iii = 0;	
			
			
			for(ii in response.Tab_Benefit_Check[i][j]){
				/*************************start get data*****************************/
				var data_benefit_rider = response.Tab_Benefit_Check[i][j][ii].listBenefitSched;
				if(data_benefit_rider.length > 0){
					/***********name*********/
					var obj_bnf_name = response.Tab_Benefit_Check[i][j][ii].benefit;
					var objKey = response.Tab_Benefit_Check[i][j][ii].benefit.objKey[0][1];
					
					
					/**********item**********/
					var obj_bnf_item = response.Tab_Benefit_Check[i][j][ii].benefitItem;
				
					
					
					if(bnf_name = "BC_OL_DDR_01"){
						var is_terminate = response.Tab_Benefit_Check[i][j][ii].benefitItem.is_terminate;
						var is_deduct_cash_value = response.Tab_Benefit_Check[i][j][ii].benefitItem.is_deduct_cash_value;
						
					}
						
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
					
					/************amount*************/
					var obj_bnf_amount = response.Tab_Benefit_Check[i][j][ii].listBenefitSched[0].listBenefitAmountAccessData[0].benefit_amount;		
					var benef_amt = numberWithCommas(parseFloat(obj_bnf_amount.benef_amt*100).toFixed(2));
					var benef_unit = obj_bnf_amount.benef_unit;
					var benef_scope = obj_bnf_amount.benef_scope;
					var benef_factor = obj_bnf_amount.benef_factor;
				
					/*********note************/
					var remark = obj_bnf_item.note;
					
					/************limit*************/
					var obj_bnf_limit = response.Tab_Benefit_Check[i][j][ii].listBenefitSched[0].listBenefitLimit[0];
					var limit_unit = obj_bnf_limit.limit_unit;
					if(limit_unit == "CURRENCY" || limit_unit == "UNIT"){
							var limit_amt = numberWithCommas(parseFloat(obj_bnf_limit.limit_amt*100).toFixed(2));	
							var min_limit_amount = numberWithCommas(parseFloat(obj_bnf_limit.min_limit_amt*100).toFixed(2));
					}else if(limit_unit == "PERCENT" || limit_unit == "NONE"){
							var limit_amt = parseFloat(obj_bnf_limit.limit_amt*100).toFixed(2);	
							var min_limit_amount = parseFloat(obj_bnf_limit.min_limit_amt*100).toFixed(2);
					}else{
							var limit_amt = obj_bnf_limit.limit_amt*100;	
							var min_limit_amount = obj_bnf_limit.min_limit_amt*100;
					}
					
					
					var limit_scope = obj_bnf_limit.limit_scope;
					
					/*******special_amount*******/
					var obj_bnf_special_amount = response.Tab_Benefit_Check[i][j][ii].listBenefitSched[0].listBenefitAmountAccessData[0].listBenefitSpecialAmount[0];

					var special_benef_unit = obj_bnf_special_amount.benef_unit;
					
					if(special_benef_unit == "CURRENCY" || special_benef_unit == "UNIT"){
						var special_benef_amt = numberWithCommas(parseFloat(obj_bnf_special_amount.benef_amt*100).toFixed(2));
					}else if(special_benef_unit == "PERCENT" || special_benef_unit == "NONE"){
						var special_benef_amt = parseFloat(obj_bnf_special_amount.benef_amt*100).toFixed(2);
					}else{
						var special_benef_amt =obj_bnf_special_amount.benef_amt*100;
					}
					
					
					
					
					
					/*************************end get data*****************************/
					
					/*create table*/
						
						var BCID = "BC_0"+tabID+"_OL";
						
						var lastImgOK = $("#tbl_"+BCID+" >tbody>tr:last-child").attr("id") || 0;	
						var rowsNumber = $("#tbl_"+BCID+" >tbody>tr[data-parent='0']").length;
						var flag_disease = $("#tab_content_"+BCID).data("flag");
						
						if(lastImgOK == 0){
							numberImgOK = 1;
						}else{
							numberImgOK = Number(rowsNumber)+1;
						}
						
						var numberImgOK_Sub = numberImgOK;
						
						var row1 = "";
						var newID_Del = "imgOKDel_benefit_OL"+BCID+"_"+numberImgOK;
						var imgDel = BCID+"_"+numberImgOK;
						
						if(ii == 0){	
							
							row1 += "<tr id='tbody_benefitL_OL"+numberImgOK+"' data-id='"+numberImgOK+"' data-parent='0' data-level='1'>"+
									"<td id="+newID_Del+" class='text-center borderBlack vertical-middle'"+
									"onclick=\"imgCheckboxDel_benefit_OL('"+imgDel+"');\""+
									"style='vertical-align: middle;'><i "+
									"class='glyphicon glyphicon-edit'></i></td>"+   	
									"<td class='text-center borderBlack vertical-middle rider_mainTopic'><span class='spanBenefit_OL'>"+numberImgOK+"</span></td>"+
									"<td class='text-center borderBlack vertical-middle rider_mainTopic'>"+bnf_code+"</td>"+
									"<td class='borderBlack vertical-middle rider_mainTopic'><a class='open-EditBenefitDialog_OL' data-toggle='modal' href='#modal_editCoverage_OL'  data-id='"+numberImgOK+"' data-topic='"+bnf_name+"' data-type='"+bnf_type+"' data-code='"+bnf_code+"'>"+bnf_name+"</a></td>";	
							
							row1 += "<td class='borderBlack vertical-middle'>"+
							   "<input name='benefit_amount_OL_"+BCID+"[]' id='benefit_amount_OL_"+BCID+"_"+numberImgOK+"' type='text' class='form-control margin-padding0 text-center width40px' value='"+benef_amt+"' onkeypress='validate(event);' onblur=\"replaceBlank(this), select_unit_ol('"+BCID+"',"+numberImgOK+", this.value);\" data-v-min='0.00' data-v-max='999999999.99' >	"+											
							   "</td>"+
							   "<td width='100px' class='borderBlack vertical-middle'>"+
							   "<select class='form-control width-initial lookup-unit' style='margin: 0;width: 100%;' id='benefit_unit_OL"+numberImgOK+"' onchange=\"select_unit_option_ol('"+BCID+"',"+numberImgOK+");\">"+
								   "<option value='NONE'>None</option>"+
							   "</select>"+												
							   "</td>"+
							   "<td width='100px' class='borderBlack vertical-middle'>"+
							   "<select class='form-control width-initial lookup-frequency' style='margin: 0;width: 100%;' id='benefit_fund_OL"+numberImgOK+"'>"+
								   "<option value='NONE'>None</option>"+
							   "</select>"+												
							   "</td>"+
							   "<td width='100px' class='borderBlack vertical-middle'>"+
							   "<select class='form-control width-initial lookup-frequency' style='margin: 0;width: 100%;' id='benefit_fq_OL"+numberImgOK+"'>"+
								   "<option value='NONE' selected>None</option>"+
							   "</select>"+
							   "</td>";
							   /*"<td width='100px' class='borderBlack text-center vertical-middle'><div class='input-group col-xs-12'><div class='list_coverage'>None</div><a class='open-SelectCoverageDialog_OL' data-toggle='modal' data-id='"+numberImgOK+"' href='#modal_TableCoverage_OL'><button class='btn btn-default btn-primary float-right' type='button' id='btn_benefit"+BCID+"_"+numberImgOK+"_OL'>...</button></a></div></td>"+*/
							  if(flag_disease == true){
								  row1 += "<td width='70px' class='text-center borderBlack vertical-middle'><input type='checkbox' id='is_benefit_contract_OL"+numberImgOK+"'></td>"+
								   "<td width='70px' class='text-center borderBlack vertical-middle'><input type='checkbox' id='is_benefit_cv_OL"+numberImgOK+"'></td>"+
								  "<td width='100px' class='borderBlack vertical-middle'><textarea class='form-control' id='benefit_remark_OL"+numberImgOK+"'>"+remark+"</textarea></td>"+
								   "<td width='100px' class='borderBlack vertical-middle'>"+
								   "<input name='benefit_factor_min_OL"+numberImgOK+"' id='benefit_factor_min_OL"+numberImgOK+"' type='text' class='form-control margin-padding0 text-center width40px' onkeypress='validate(event);' onblur=\"replaceBlank(this), select_unit_factor_ol('"+BCID+"',"+numberImgOK+", this.value);\" value='"+min_limit_amount+"' data-v-min='0.00' data-v-max='999999999.99'>"+		   
								   "</td>"+
								   "<td width='100px' class='borderBlack vertical-middle'>"+
								   "<input name='benefit_factor_max_OL"+numberImgOK+"' id='benefit_factor_max_OL"+numberImgOK+"' type='text' class='form-control margin-padding0 text-center width40px' onkeypress='validate(event);' onblur=\"replaceBlank(this), select_unit_factor_ol('"+BCID+"',"+numberImgOK+", this.value);\" value='"+limit_amt+"' data-v-min='0.00' data-v-max='999999999.99'>"+
								   "</td>"+
								   "<td width='100px' class='borderBlack vertical-middle'>"+
								   "<select class='form-control width-initsial lookup-unit' style='margin: 0;width: 100%;' id='benefit_factor_unit_OL"+numberImgOK+"' onchange=\"select_unit_option_factor_ol('"+BCID+"',"+numberImgOK+");\">"+
									   "<option value='NONE' selected>None</option>"+
								   "</select>"+
								   "</td>"+
								   "<td width='100px' class='borderBlack vertical-middle'>"+
								   "<select class='form-control width-initial lookup-frequency' style='margin: 0;width: 100%;' id='benefit_factor_to_OL"+numberImgOK+"'>"+
									   "<option value='NONE' selected>None</option>"+
								   "</select>"+
								   "</td>"+
								   "<td width='100px' class='borderBlack vertical-middle'>"+
								   "<input name='benefit_acc_amount_OL"+numberImgOK+"' id='benefit_acc_amount_OL"+numberImgOK+"' type='text' class='form-control margin-padding0 text-center width40px' value='"+special_benef_amt+"' onkeypress='validate(event);' onblur=\"replaceBlank(this), select_unit_acc_ol('"+BCID+"',"+numberImgOK+", this.value);\" data-v-min='0.00' data-v-max='999999999.99'>"+		   
								   "</td>"+
								   "<td width='100px' class='borderBlack vertical-middle'>"+
								   "<select class='form-control width-initial lookup-unit' style='margin: 0;width: 100%;' id='benefit_acc_unit_OL"+numberImgOK+"' onchange=\"select_unit_option_acc_ol('"+BCID+"',"+numberImgOK+");\">"+
									   "<option value='NONE' selected>None</option>"+
								   "</select>"+
								   "</td>"+
								   "</tr>";
								  
							  }else{
								  row1 += "<td width='100px' class='borderBlack vertical-middle'><textarea class='form-control' id='benefit_remark_OL"+numberImgOK+"'>"+remark+"</textarea></td>"+
								   "<td width='100px' class='borderBlack vertical-middle'>"+
								   "<input name='benefit_factor_min_OL"+numberImgOK+"' id='benefit_factor_min_OL"+numberImgOK+"' type='text' class='form-control margin-padding0 text-center width40px' onkeypress='validate(event);' onblur=\"replaceBlank(this), select_unit_factor_ol('"+BCID+"',"+numberImgOK+", this.value);\" value='"+min_limit_amount+"' data-v-min='0.00' data-v-max='999999999.99'>"+		   
								   "</td>"+
								   "<td width='100px' class='borderBlack vertical-middle'>"+
								   "<input name='benefit_factor_max_OL"+numberImgOK+"' id='benefit_factor_max_OL"+numberImgOK+"' type='text' class='form-control margin-padding0 text-center width40px' onkeypress='validate(event);' onblur=\"replaceBlank(this), select_unit_factor_ol('"+BCID+"',"+numberImgOK+", this.value);\" value='"+limit_amt+"' data-v-min='0.00' data-v-max='999999999.99'>"+
								   "</td>"+
								   "<td width='100px' class='borderBlack vertical-middle'>"+
								   "<select class='form-control width-initsial lookup-unit' style='margin: 0;width: 100%;' id='benefit_factor_unit_OL"+numberImgOK+"' onchange=\"select_unit_option_factor_ol('"+BCID+"',"+numberImgOK+");\">"+
									   "<option value='NONE' selected>None</option>"+
								   "</select>"+
								   "</td>"+
								   "<td width='100px' class='borderBlack vertical-middle'>"+
								   "<select class='form-control width-initial lookup-frequency' style='margin: 0;width: 100%;' id='benefit_factor_to_OL"+numberImgOK+"'>"+
									   "<option value='NONE' selected>None</option>"+
								   "</select>"+
								   "</td>"+
								   "<td width='100px' class='borderBlack vertical-middle'>"+
								   "<input name='benefit_acc_amount_OL"+numberImgOK+"' id='benefit_acc_amount_OL"+numberImgOK+"' type='text' class='form-control margin-padding0 text-center width40px' value='"+special_benef_amt+"' onkeypress='validate(event);' onblur=\"replaceBlank(this), select_unit_acc_ol('"+BCID+"',"+numberImgOK+", this.value);\" data-v-min='0.00' data-v-max='999999999.99'>"+		   
								   "</td>"+
								   "<td width='100px' class='borderBlack vertical-middle'>"+
								   "<select class='form-control width-initial lookup-unit' style='margin: 0;width: 100%;' id='benefit_acc_unit_OL"+numberImgOK+"' onchange=\"select_unit_option_acc_ol('"+BCID+"',"+numberImgOK+");\">"+
									   "<option value='NONE' selected>None</option>"+
								   "</select>"+
								   "</td>"+
								   "</tr>";
							  }
								  
							 
							  
							
						}else{
			
							iii++
							var numberImgOK = $("#tbl_"+BCID+" >tbody>tr[data-level='1']:last").data("id");
							numberImgOK_Sub = numberImgOK+"_"+iii;
			
							row1 += "<tr id='tbody_benefitL_OL"+numberImgOK+"_"+iii+"' data-id='"+numberImgOK+"_"+iii+"' data-parent='1' data-level='2' data-group='"+numberImgOK+"'>"+
							   "<td class='text-center borderBlack'></td>"+
							   "<td class='text-center borderBlack vertical-middle'>"+numberImgOK+"."+iii+"</td>"+
							   "<td class='text-center borderBlack vertical-middle'>"+bnf_code+"</td>"+
							   "<td class='borderBlack vertical-middle'>"+bnf_name+"</td>";
							
							row1 += "<td class='borderBlack vertical-middle'>"+
							   "<input name='benefit_amount_OL_"+BCID+"[]' id='benefit_amount_OL_"+BCID+"_"+numberImgOK_Sub+"' type='text' class='form-control margin-padding0 text-center width40px' value='"+benef_amt+"' onkeypress='validate(event);' onblur=\"replaceBlank(this), select_unit_ol('"+BCID+"','"+numberImgOK_Sub+"', this.value);\" data-v-min='0.00' data-v-max='999999999.99'>	"+											
							   "</td>"+
							   "<td width='100px' class='borderBlack vertical-middle'>"+
							   "<select class='form-control width-initial lookup-unit' style='margin: 0;width: 100%;' id='benefit_unit_OL"+numberImgOK_Sub+"' onchange=\"select_unit_option_ol('"+BCID+"','"+numberImgOK_Sub+"');\">"+
								   "<option value='NONE'>None</option>"+
							   "</select>"+												
							   "</td>"+
							   "<td width='100px' class='borderBlack vertical-middle'>"+
							   "<select class='form-control width-initial lookup-frequency' style='margin: 0;width: 100%;' id='benefit_fund_OL"+numberImgOK_Sub+"'>"+
							   "<option value='NONE' selected>None</option>"+
							   "</select>"+												
							   "</td>"+
							   "<td width='100px' class='borderBlack vertical-middle'>"+
							   "<select class='form-control width-initial lookup-frequency' style='margin: 0;width: 100%;' id='benefit_fq_OL"+numberImgOK_Sub+"'>"+
								   "<option value='NONE' selected>None</option>"+
							   "</select>"+
							   "</td>";
							   if(flag_disease == true){
									  row1 += "<td width='70px' class='text-center borderBlack vertical-middle'><input type='checkbox' id='is_benefit_contract_OL"+numberImgOK_Sub+"'></td>"+
									   "<td width='70px' class='text-center borderBlack vertical-middle'><input type='checkbox' id='is_benefit_cv_OL"+numberImgOK_Sub+"'></td>"+
									   "<td width='100px' class='borderBlack vertical-middle'><textarea class='form-control' id='benefit_remark_OL"+numberImgOK_Sub+"'>"+remark+"</textarea></td>"+
									   "<td width='100px' class='borderBlack vertical-middle'>"+
									   "<input name='benefit_factor_min_OL"+numberImgOK_Sub+"' id='benefit_factor_min_OL"+numberImgOK_Sub+"' type='text' class='form-control margin-padding0 text-center width40px' onkeypress='validate(event);' onblur=\"replaceBlank(this), select_unit_factor_ol('"+BCID+"','"+numberImgOK_Sub+"', this.value);\" value='"+min_limit_amount+"' data-v-min='0.00' data-v-max='999999999.99'>"+		   
									   "</td>"+
									   "<td width='100px' class='borderBlack vertical-middle'>"+
									   "<input name='benefit_factor_max_OL"+numberImgOK_Sub+"' id='benefit_factor_max_OL"+numberImgOK_Sub+"' type='text' class='form-control margin-padding0 text-center width40px' onkeypress='validate(event);' onblur=\"replaceBlank(this), select_unit_factor_ol('"+BCID+"','"+numberImgOK_Sub+"', this.value);\" value='"+limit_amt+"' data-v-min='0.00'  data-v-max='999999999.99'>"+
									   "</td>"+
									   "<td width='100px' class='borderBlack vertical-middle'>"+
									   "<select class='form-control width-initsial lookup-unit' style='margin: 0;width: 100%;' id='benefit_factor_unit_OL"+numberImgOK_Sub+"' onchange=\"select_unit_option_factor_ol('"+BCID+"','"+numberImgOK_Sub+"');\">"+
										   "<option value='NONE' selected>None</option>"+
									   "</select>"+
									   "</td>"+
									   "<td width='100px' class='borderBlack vertical-middle'>"+
									   "<select class='form-control width-initial lookup-frequency' style='margin: 0;width: 100%;' id='benefit_factor_to_OL"+numberImgOK_Sub+"'>"+
									   "<option value='NONE' selected>None</option>"+
									   "</select>"+
									   "</td>"+
									   "<td width='100px' class='borderBlack vertical-middle'>"+
									   "<input name='benefit_acc_amount_OL"+numberImgOK_Sub+"' id='benefit_acc_amount_OL"+numberImgOK_Sub+"' type='text' class='form-control margin-padding0 text-center width40px' onkeypress='validate(event);' onblur=\"replaceBlank(this), select_unit_acc_ol('"+BCID+"','"+numberImgOK_Sub+"', this.value);\" value='"+special_benef_amt+"' data-v-min='0.00'  data-v-max='999999999.99'>"+		   
									   "</td>"+
									   "<td width='100px' class='borderBlack vertical-middle'>"+
									   "<select class='form-control width-initial lookup-unit' style='margin: 0;width: 100%;' id='benefit_acc_unit_OL"+numberImgOK_Sub+"' onchange=\"select_unit_option_acc_ol('"+BCID+"','"+numberImgOK_Sub+"');\">"+
										   "<option value='NONE' selected>None</option>"+
									   "</select>"+
									   "</td>"+
									   "</tr>";
							   }else{
								   row1 += "<td width='100px' class='borderBlack vertical-middle'><textarea class='form-control' id='benefit_remark_OL"+numberImgOK_Sub+"'>"+remark+"</textarea></td>"+
								   "<td width='100px' class='borderBlack vertical-middle'>"+
								   "<input name='benefit_factor_min_OL"+numberImgOK_Sub+"' id='benefit_factor_min_OL"+numberImgOK_Sub+"' type='text' class='form-control margin-padding0 text-center width40px' onkeypress='validate(event);' onblur=\"replaceBlank(this), select_unit_factor_ol('"+BCID+"','"+numberImgOK_Sub+"', this.value);\" value='"+min_limit_amount+"' data-v-min='0.00' data-v-max='999999999.99'>"+		   
								   "</td>"+
								   "<td width='100px' class='borderBlack vertical-middle'>"+
								   "<input name='benefit_factor_max_OL"+numberImgOK_Sub+"' id='benefit_factor_max_OL"+numberImgOK_Sub+"' type='text' class='form-control margin-padding0 text-center width40px' onkeypress='validate(event);' onblur=\"replaceBlank(this), select_unit_factor_ol('"+BCID+"','"+numberImgOK_Sub+"', this.value);\" value='"+limit_amt+"' data-v-min='0.00'  data-v-max='999999999.99'>"+
								   "</td>"+
								   "<td width='100px' class='borderBlack vertical-middle'>"+
								   "<select class='form-control width-initsial lookup-unit' style='margin: 0;width: 100%;' id='benefit_factor_unit_OL"+numberImgOK_Sub+"' onchange=\"select_unit_option_factor_ol('"+BCID+"','"+numberImgOK_Sub+"');\">"+
									   "<option value='NONE' selected>None</option>"+
								   "</select>"+
								   "</td>"+
								   "<td width='100px' class='borderBlack vertical-middle'>"+
								   "<select class='form-control width-initial lookup-frequency' style='margin: 0;width: 100%;' id='benefit_factor_to_OL"+numberImgOK_Sub+"'>"+
								   "<option value='NONE' selected>None</option>"+
								   "</select>"+
								   "</td>"+
								   "<td width='100px' class='borderBlack vertical-middle'>"+
								   "<input name='benefit_acc_amount_OL"+numberImgOK_Sub+"' id='benefit_acc_amount_OL"+numberImgOK_Sub+"' type='text' class='form-control margin-padding0 text-center width40px' onkeypress='validate(event);' onblur=\"replaceBlank(this), select_unit_acc_ol('"+BCID+"','"+numberImgOK_Sub+"', this.value);\" value='"+special_benef_amt+"' data-v-min='0.00'  data-v-max='999999999.99'>"+		   
								   "</td>"+
								   "<td width='100px' class='borderBlack vertical-middle'>"+
								   "<select class='form-control width-initial lookup-unit' style='margin: 0;width: 100%;' id='benefit_acc_unit_OL"+numberImgOK_Sub+"' onchange=\"select_unit_option_acc_ol('"+BCID+"','"+numberImgOK_Sub+"');\">"+
									   "<option value='NONE' selected>None</option>"+
								   "</select>"+
								   "</td>"+
								   "</tr>";
							
							   }
									  
								   
							
						}
						
						$("#tbl_"+BCID+" tbody").append(row1);	 	
						$('.auto').autoNumeric('init');
						/*$('.autoComma').autoNumeric('init',{vMin: '0.00', vMax: '999999999.99'});*/
						/*set id to dropdown*/
						var dd_number = "";
						if(ii == 0){
							dd_number = numberImgOK;
						}else{
							dd_number = numberImgOK_Sub;
						}
						
						/****************start lookup*************************/
						var lookup_unit_get = $("#lookup_unit_OL").val();
						lookup_unit_get = lookup_unit_get.split(",");
						var lookup_frequency_get = $("#lookup_frequency_OL").val();
						lookup_frequency_get = lookup_frequency_get.split(",");
						var lookup_factorunit_get = $("#lookup_factor_unit_OL").val();
						lookup_factorunit_get = lookup_factorunit_get.split(",");
						var lookup_factorScope = $("#lookup_factorScope_OL").val();
						lookup_factorScope = lookup_factorScope.split(",");
						var unit_factor_new = $("#lookup_unit_factor_OL").val();
						unit_factor_new = unit_factor_new.split(",");
						
						// unit
						var pass = 0;
						var text = 1;
						var option_unit = "";
						for(a = 0 ; a < lookup_unit_get.length/2 ; a++){
							var row_unit = "<option value='"+lookup_unit_get[pass]+"'>"+lookup_unit_get[text]+"</option>"
							pass = Number(parseInt(pass) + parseInt(2));
							text = Number(parseInt(text) + parseInt(2));
							$("#tbl_"+BCID+" #benefit_unit_OL"+dd_number).append(row_unit);
						}
						
						// frequency
						var pass = 0;
						var text = 1;
						var option_frequency = "";
						for(aa = 0 ; aa < lookup_frequency_get.length/2 ; aa++){
							var row_frequency = "<option value='"+lookup_frequency_get[pass]+"'>"+lookup_frequency_get[text]+"</option>"
							pass = Number(parseInt(pass) + parseInt(2));
							text = Number(parseInt(text) + parseInt(2));
							/*option_frequency += row_frequency*/
							$("#tbl_"+BCID+" #benefit_fq_OL"+dd_number).append(row_frequency);
					
						}
						
						// factor unit
						var pass = 0;
						var text = 1;
						var option_fac_unit = "";
						for(aaa = 0 ; aaa < lookup_factorunit_get.length/2 ; aaa++){
							var row_factorunit = "<option value='"+lookup_factorunit_get[pass]+"'>"+lookup_factorunit_get[text]+"</option>"
							pass = Number(parseInt(pass) + parseInt(2));
							text = Number(parseInt(text) + parseInt(2))
							/*option_fac_unit += row_factorunit*/
							$("#tbl_"+BCID+" #benefit_fund_OL"+dd_number).append(row_factorunit);
						}
						
						var pass = 0;
						var text = 1;
						var option_unit_factor_new = "";
						for(a = 0 ; a < unit_factor_new.length/2 ; a++){
							var row_unit_factor_new = "<option value='"+unit_factor_new[pass]+"'>"+unit_factor_new[text]+"</option>"
							pass = Number(parseInt(pass) + parseInt(2));
							text = Number(parseInt(text) + parseInt(2));
							$("#tbl_"+BCID+" #benefit_factor_unit_OL"+dd_number).append(row_unit_factor_new);
							$("#tbl_"+BCID+" #benefit_acc_unit_OL"+dd_number).append(row_unit_factor_new);
						}
						
						// factor Scope
						var pass = 0;
						var text = 1;
						for(a = 0 ; a < lookup_factorScope.length/2 ; a++){
							var row_factorScope = "<option value='"+lookup_factorScope[pass]+"'>"+lookup_factorScope[text]+"</option>"
							pass = Number(parseInt(pass) + parseInt(2));
							text = Number(parseInt(text) + parseInt(2))
							$("#tbl_"+BCID+" #benefit_factor_to_OL"+dd_number).append(row_factorScope);
						}
						
						/****************end lookup*************************/
							
							$("#tbl_"+BCID+" #benefit_unit_OL"+dd_number+" option[value="+benef_unit+"]").attr("selected", true);
							$("#tbl_"+BCID+" #benefit_fund_OL"+dd_number+" option[value="+benef_factor+"]").attr('selected', true);
							$("#tbl_"+BCID+" #benefit_factor_unit_OL"+dd_number+" option[value="+limit_unit+"]").attr('selected', true);
							$("#tbl_"+BCID+" #benefit_factor_to_OL"+dd_number+" option[value="+limit_scope+"]").attr('selected', true);
							$("#tbl_"+BCID+" #benefit_acc_unit_OL"+dd_number+" option[value="+special_benef_unit+"]").attr('selected', true);
							$("#tbl_"+BCID+" #benefit_fq_OL"+dd_number+" option[value="+benef_scope+"]").attr('selected', true);
						
								
								if(is_terminate){
									$("#is_benefit_contract_OL"+dd_number).attr("checked", true);
								}
								if(is_deduct_cash_value){
									$("#is_benefit_cv_OL"+dd_number).attr("checked", true);
								}
					
							
							
					
				}
				}
			
			var data_disease = response.Tab_Benefit_Check[i][0];
			
			var return_cash_surr = data_disease.cov_terminate.return_cash_surr;
			
			if(return_cash_surr == true){
				$("#cv_"+BCID).prop("checked", true);
			}
		
			
		}	
		
	});
		}
	
			
		}
		
		
		
  }
	
	
}

function numberWithCommas(x) {
	   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}



function validate_range_tbdie(id,val,tbl){
	
	var tab = "BC_0"+tbl+"_OL";
	
	var size_tb = $("#tbody_bnfL_"+tab+" tbody>tr").length;
	$("#"+id).removeClass("errorClass");
	
	if(size_tb > 1){
		for(var i=0 ; i<size_tb ; i++){
			var data = $("#tbody_bnfL_"+tab+" tbody>tr").eq(i).find('td:nth-child(2) input[type="text"]').val();
			var chk_id = $("#tbody_bnfL_"+tab+" tbody>tr").eq(i).find('td:nth-child(2) input[type="text"]').attr('id');
			
			if(chk_id !== id ){
				if(Number(data) == Number(val)){
					$("#"+id).addClass("errorClass");
					$("#"+id).val("");
				}
			}
		}
	}
	
}

function numberKey(value){
	var val = $(value).val();
	if (!val || (parseInt(val) >= 1))
	      ;
	else{ $(value).val($(value).data("old")); }

	if (val > 999 ) {$(value).val(999);}
	
}

function replaceDot_rd(e){
	var value = $(e).val();
	if(value == "."){

	/*	if(value.includes(".")){*/
			var result = value.replace(/./g,'');
			$(e).val(result)
		/*}*/
	}
		

}

function replaceBlank(e){
	var value = $(e).val();
	if(value == ""){
		$(e).val("0.00");
	}
}

function sl_premium(id){

		if($("#bnf_premium_unit"+id+"_OL").val() != "NONE"){
			$("#bnf_checkbox_OL"+id).prop("disabled", false);
			$("#bnf_checkbox_OL"+id).prop("checked", false);
		}else{
			$("#bnf_checkbox_OL"+id).prop("disabled", true);
			$("#bnf_checkbox_OL"+id).prop("checked", false);
		}
}

function check_fromto_disease_ol(id){

	var from_unit_text = $("#bnf_fromYearUnit"+id+"_OL option:selected").val();
	var to_unit_text = $("#bnf_toYearUnit"+id+"_OL option:selected").val();	
	
	var from_value = Number($('#bnf_fromYear'+id+'_OL').val());
	var to_value = Number($('#bnf_toYear'+id+'_OL').val());	
	
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
					$('#bnf_fromYear'+id+'_OL').val("").focus();
					$("#bnf_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#bnf_toYear'+id+'_OL').val("").focus();
					$("#bnf_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }else if(from_unit_text == "DAY" && to_unit_text == "WEEK"){			 
				if(from_value_toWeek > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#bnf_fromYear'+id+'_OL').val("").focus();
					$("#bnf_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#bnf_toYear'+id+'_OL').val("").focus();
					$("#bnf_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }else if(from_unit_text == "WEEK" && to_unit_text == "DAY"){			
				if(to_value_toWeek < from_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#bnf_fromYear'+id+'_OL').val("").focus();
					$("#bnf_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#bnf_toYear'+id+'_OL').val("").focus();
					$("#bnf_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }else if(from_unit_text == "DAY" && to_unit_text == "MONTH"){			 
				if(from_value_toMonth > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#bnf_fromYear'+id+'_OL').val("").focus();
					$("#bnf_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#bnf_toYear'+id+'_OL').val("").focus();
					$("#bnf_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }else if(from_unit_text == "MONTH" && to_unit_text == "DAY"){			 
				if(to_value_toMonth < from_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#bnf_fromYear'+id+'_OL').val("").focus();
					$("#bnf_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#bnf_toYear'+id+'_OL').val("").focus();
					$("#bnf_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }else if(from_unit_text == "DAY" && to_unit_text == "YEAR"){			 
				if(from_value_toYear > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#bnf_fromYear'+id+'_OL').val("").focus();
					$("#bnf_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#bnf_toYear'+id+'_OL').val("").focus();
					$("#bnf_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }else if(from_unit_text == "YEAR" && to_unit_text == "DAY"){
				if(to_value_toYear < from_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#bnf_fromYear'+id+'_OL').val("").focus();
					$("#bnf_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#bnf_toYear'+id+'_OL').val("").focus();
					$("#bnf_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }else if(from_unit_text == "WEEK" && to_unit_text == "MONTH"){			 
				if(from_value_WeektoMonth > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#bnf_fromYear'+id+'_OL').val("").focus();
					$("#bnf_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#bnf_toYear'+id+'_OL').val("").focus();
					$("#bnf_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }else if(from_unit_text == "MONTH" && to_unit_text == "WEEK"){
				if(to_value_WeektoMonth < from_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#bnf_fromYear'+id+'_OL').val("").focus();
					$("#bnf_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#bnf_toYear'+id+'_OL').val("").focus();
					$("#bnf_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }else if(from_unit_text == "WEEK" && to_unit_text == "YEAR"){
				if(from_value_WeektoYear > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#bnf_fromYear'+id+'_OL').val("").focus();
					$("#bnf_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#bnf_toYear'+id+'_OL').val("").focus();
					$("#bnf_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }else if(from_unit_text == "YEAR" && to_unit_text == "WEEK"){
				if(to_value_WeektoYear < from_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#bnf_fromYear'+id+'_OL').val("").focus();
					$("#bnf_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#bnf_toYear'+id+'_OL').val("").focus();
					$("#bnf_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }else if(from_unit_text == "MONTH" && to_unit_text == "YEAR"){
				if(from_value_MonthtoYear > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#bnf_fromYear'+id+'_OL').val("").focus();
					$("#bnf_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#bnf_toYear'+id+'_OL').val("").focus();
					$("#bnf_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }else if(from_unit_text == "YEAR" && to_unit_text == "MONTH"){
				if(to_value_MonthtoYear < from_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#bnf_fromYear'+id+'_OL').val("").focus();
					$("#bnf_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#bnf_toYear'+id+'_OL').val("").focus();
					$("#bnf_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }else if(from_unit_text == "AGE" && to_unit_text == "MONTH"){
			 if(to_value_MonthtoYear < from_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#bnf_fromYear'+id+'_OL').val("").focus();
					$("#bnf_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#bnf_toYear'+id+'_OL').val("").focus();
					$("#bnf_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }else if(from_unit_text == "AGE" && to_unit_text == "WEEK"){
				if(to_value_WeektoYear < from_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#bnf_fromYear'+id+'_OL').val("").focus();
					$("#bnf_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#bnf_toYear'+id+'_OL').val("").focus();
					$("#bnf_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }else if(from_unit_text == "AGE" && to_unit_text == "DAY"){
				if(to_value_toYear < from_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#bnf_fromYear'+id+'_OL').val("").focus();
					$("#bnf_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#bnf_toYear'+id+'_OL').val("").focus();
					$("#bnf_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }else if(from_unit_text == "DAY" && to_unit_text == "AGE"){			 
				if(from_value_toYear > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#bnf_fromYear'+id+'_OL').val("").focus();
					$("#bnf_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#bnf_toYear'+id+'_OL').val("").focus();
					$("#bnf_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }else if(from_unit_text == "WEEK" && to_unit_text == "AGE"){
				if(from_value_WeektoYear > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#bnf_fromYear'+id+'_OL').val("").focus();
					$("#bnf_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#bnf_toYear'+id+'_OL').val("").focus();
					$("#bnf_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }else if(from_unit_text == "MONTH" && to_unit_text == "AGE"){
				if(from_value_MonthtoYear > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#bnf_fromYear'+id+'_OL').val("").focus();
					$("#bnf_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#bnf_toYear'+id+'_OL').val("").focus();
					$("#bnf_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }
	}
}

function check_fromtoUnit_disease_ol(id){	

	var from_unit_text = $("#bnf_fromYearUnit"+id+"_OL option:selected").val();
	var to_unit_text = $("#bnf_toYearUnit"+id+"_OL option:selected").val();	
	
	var from_value = Number($('#bnf_fromYear'+id+'_OL').val());
	var to_value = Number($('#bnf_toYear'+id+'_OL').val());	
	
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
					$('#bnf_fromYear'+id+'_OL').val("").focus();
					$("#bnf_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#bnf_toYear'+id+'_OL').val("").focus();
					$("#bnf_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }else if(from_unit_text == "DAY" && to_unit_text == "WEEK"){			 
				if(from_value_toWeek > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#bnf_fromYear'+id+'_OL').val("").focus();
					$("#bnf_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#bnf_toYear'+id+'_OL').val("").focus();
					$("#bnf_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }else if(from_unit_text == "WEEK" && to_unit_text == "DAY"){			
				if(to_value_toWeek < from_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#bnf_fromYear'+id+'_OL').val("").focus();
					$("#bnf_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#bnf_toYear'+id+'_OL').val("").focus();
					$("#bnf_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }else if(from_unit_text == "DAY" && to_unit_text == "MONTH"){			 
				if(from_value_toMonth > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#bnf_fromYear'+id+'_OL').val("").focus();
					$("#bnf_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#bnf_toYear'+id+'_OL').val("").focus();
					$("#bnf_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }else if(from_unit_text == "MONTH" && to_unit_text == "DAY"){			 
				if(to_value_toMonth < from_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#bnf_fromYear'+id+'_OL').val("").focus();
					$("#bnf_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#bnf_toYear'+id+'_OL').val("").focus();
					$("#bnf_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }else if(from_unit_text == "DAY" && to_unit_text == "YEAR"){			 
				if(from_value_toYear > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#bnf_fromYear'+id+'_OL').val("").focus();
					$("#bnf_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#bnf_toYear'+id+'_OL').val("").focus();
					$("#bnf_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }else if(from_unit_text == "YEAR" && to_unit_text == "DAY"){
				if(to_value_toYear < from_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#bnf_fromYear'+id+'_OL').val("").focus();
					$("#bnf_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#bnf_toYear'+id+'_OL').val("").focus();
					$("#bnf_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }else if(from_unit_text == "WEEK" && to_unit_text == "MONTH"){			 
				if(from_value_WeektoMonth > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#bnf_fromYear'+id+'_OL').val("").focus();
					$("#bnf_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#bnf_toYear'+id+'_OL').val("").focus();
					$("#bnf_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }else if(from_unit_text == "MONTH" && to_unit_text == "WEEK"){
				if(to_value_WeektoMonth < from_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#bnf_fromYear'+id+'_OL').val("").focus();
					$("#bnf_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#bnf_toYear'+id+'_OL').val("").focus();
					$("#bnf_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }else if(from_unit_text == "WEEK" && to_unit_text == "YEAR"){
				if(from_value_WeektoYear > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#bnf_fromYear'+id+'_OL').val("").focus();
					$("#bnf_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#bnf_toYear'+id+'_OL').val("").focus();
					$("#bnf_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }else if(from_unit_text == "YEAR" && to_unit_text == "WEEK"){
				if(to_value_WeektoYear < from_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#bnf_fromYear'+id+'_OL').val("").focus();
					$("#bnf_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#bnf_toYear'+id+'_OL').val("").focus();
					$("#bnf_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }else if(from_unit_text == "MONTH" && to_unit_text == "YEAR"){
				if(from_value_MonthtoYear > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#bnf_fromYear'+id+'_OL').val("").focus();
					$("#bnf_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#bnf_toYear'+id+'_OL').val("").focus();
					$("#bnf_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }else if(from_unit_text == "YEAR" && to_unit_text == "MONTH"){
				if(to_value_MonthtoYear < from_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#bnf_fromYear'+id+'_OL').val("").focus();
					$("#bnf_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#bnf_toYear'+id+'_OL').val("").focus();
					$("#bnf_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }else if(from_unit_text == "AGE" && to_unit_text == "MONTH"){
			 if(to_value_MonthtoYear < from_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#bnf_fromYear'+id+'_OL').val("").focus();
					$("#bnf_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#bnf_toYear'+id+'_OL').val("").focus();
					$("#bnf_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }else if(from_unit_text == "AGE" && to_unit_text == "WEEK"){
				if(to_value_WeektoYear < from_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#bnf_fromYear'+id+'_OL').val("").focus();
					$("#bnf_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#bnf_toYear'+id+'_OL').val("").focus();
					$("#bnf_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }else if(from_unit_text == "AGE" && to_unit_text == "DAY"){
				if(to_value_toYear < from_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#bnf_fromYear'+id+'_OL').val("").focus();
					$("#bnf_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#bnf_toYear'+id+'_OL').val("").focus();
					$("#bnf_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }else if(from_unit_text == "DAY" && to_unit_text == "AGE"){			 
				if(from_value_toYear > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#bnf_fromYear'+id+'_OL').val("").focus();
					$("#bnf_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#bnf_toYear'+id+'_OL').val("").focus();
					$("#bnf_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }else if(from_unit_text == "WEEK" && to_unit_text == "AGE"){
				if(from_value_WeektoYear > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#bnf_fromYear'+id+'_OL').val("").focus();
					$("#bnf_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#bnf_toYear'+id+'_OL').val("").focus();
					$("#bnf_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }else if(from_unit_text == "MONTH" && to_unit_text == "AGE"){
				if(from_value_MonthtoYear > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#bnf_fromYear'+id+'_OL').val("").focus();
					$("#bnf_fromYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
					$('#bnf_toYear'+id+'_OL').val("").focus();
					$("#bnf_toYearUnit"+id+"_OL option:contains('None')").prop("selected", "selected");
				}
		 }
	}
}


function addBenefitRider_OL(tbl){
	
	$("#div_bnfOpt_OL>div").remove();
	tbl_row = "<div class='datatbl_BenefitOpt1"+tbl+"_OL'>"+
			  "<table class='table table-bordered' id='tbl_BenefitOpt1"+tbl+"_OL'>"+
		      "<thead>"+
			  "<tr class='bg-primary'>"+
				"<th class='text-center' width='10%' style='border-right:none; vertical-align:middle;'>เลือก</th>"+
				"<th class='text-center' width='20%' style='border-right:none;'>รหัสความคุ้มครอง</th>"+
				"<th class='text-center' width='70%' style='vertical-align:middle;'>ความคุ้มครอง</th>"+									
			  "</tr>"+
			  "</thead>"+
			  "<tbody>"+
			  "</tbody>"+
			  "</table>"+
			  "<div class='text-center' style='padding: 10px 0'></div>"+	
				"<div class='row' align='center'>"+						
					"<button type='button' class='btn btn-primary' style='margin-right:5px;' id='btn_OpenSaveBenefit_modal1' onclick=\"saveBenefitValueOL_popup(1,'"+tbl+"');\">ตกลง</button>"+						
					"<button type='button' class='btn btn-primary' data-dismiss='modal'>ยกเลิก</button>"+												
				"</div>"+
			"</div>";
	
	tbl_row += "<div class='datatbl_BenefitOpt2"+tbl+"_OL displayNone'>"+
				"<table class='table table-bordered' id='tbl_BenefitOpt2"+tbl+"_OL'>"+
				"<thead>"+
				"<tr class='bg-primary'>"+
				"<th class='text-center' width='10%' style='border-right:none; vertical-align:middle;'>เลือก</th>"+
				"<th class='text-center' width='20%' style='border-right:none;'>รหัสความคุ้มครอง</th>"+
				"<th class='text-center' width='70%' style='vertical-align:middle;'>ความคุ้มครอง</th>"+									
				"</tr>"+
				"</thead>"+
				"<tbody>"+
				"</tbody>"+
				"</table>"+
				"<div class='text-center' style='padding: 10px 0'></div></div>";
	
	tbl_row += "<div class='datatbl_BenefitOpt2Sub"+tbl+"_OL'>"+
				"<table class='table table-bordered' id='tbl_BenefitOpt2Sub"+tbl+"_OL'>"+
				"<thead>"+
				"<tr class='bg-primary'>"+
				"<th class='text-center' width='10%' style='border-right:none; vertical-align:middle;'>เลือก</th>"+
				"<th class='text-center' width='20%' style='border-right:none;'>รหัสความคุ้มครอง</th>"+
				"<th class='text-center' width='70%' style='vertical-align:middle;'>ความคุ้มครอง</th>"+								
				"</tr>"+
				"</thead>"+
				"<tbody>"+				
				"</tbody>"+
				"</table>"+
				"<div class='text-center' style='padding: 10px 0'></div>"+	
				"<div class='row' align='center'>"+						
					"<button type='button' class='btn btn-primary' style='margin-right:5px;' id='btn_SaveEditBenefit1' onclick=\"saveBenefitValueOL_popup(2,'"+tbl+"');\">ตกลง</button>"+						
					"<button type='button' class='btn btn-primary' data-dismiss='modal'>ยกเลิก</button>"+												
				"</div>"+
				"</div>";
	
	$("#div_bnfOpt_OL").append(tbl_row);
	
	$(".datatbl_BenefitOpt2Sub"+tbl+"_OL").css("display", "none");
	
	var id = $("#tabBenefitRider_OL").find('.active a').text();
	var data_json = {
			"method": "get_Benefit_RiderCL",
        	"bnf_cat_code": id
        }
	$.ajax({
        type: "POST",    
        url : "RiderCL_GetData_Servlet",
        data: data_json,      
        success : function(response) {	
        	add_rowBenefitRider_OL(response,tbl,"");
        },
        error : function(response) {	
        	alert("error");
        }
	});
	
}

function add_rowBenefitRider_OL(response,tbl,edit){
	/*$("#tbl_BenefitOpt1_OL tbody>tr").remove();
	$("#tbl_BenefitOpt2_OL tbody>tr").remove();
	$("#tbl_BenefitOpt2Sub_OL tbody>tr").remove();
	$("#tbl_BenefitOpt2SubEdit_OL tbody>tr").remove();
	$("#tbl_BenefitOpt1Edit_OL tbody>tr").remove();
	$("#tbl_BenefitOpt2Edit_OL tbody>tr").remove();*/
	
	
	for(i in response.add_Protection){
		var obj = response.add_Protection[i];
		num = new Number(parseInt(i) + parseInt(1));
		var flag_addrow = false;
		$("#tbl_"+tbl).find('tbody tr').each(function(){
			if($(this).find('td:nth-child(3)').text() == obj.bnf_code){
				flag_addrow = true;
			}
		});
		if(edit == "edit"){
			flag_addrow = false;
		}
		
		if(!flag_addrow){
			row = "<tr>"+
					"<td class='text-center'><input type='checkbox' id='opt1_benefitdetail_OL"+num+"' name='opt1_benefitdetail_OL[]' class='chk' value='"+obj.bnf_code+","+obj.name_TH+"' disabled></td>"+
					"<td class='text-center'>"+obj.bnf_code+"</td>"+
					"<td class='text-left'>"+obj.name_TH+"</td>"+
				"</tr>"
					
			$("#tbl_BenefitOpt1"+tbl+"_OL").append(row);
			
			row2 = "<tr>"+
					"<td class='text-center'><input type='radio' id='opt2_benefitdetail_OL"+num+"' name='opt2_benefitdetail_OL[]' onclick='displayBenefitValueOptionOL_popup(this.value);' class='chk_rd' value='"+obj.bnf_code+","+obj.name_TH+"'></td>"+
					"<td class='text-center'>"+obj.bnf_code+"</td>"+
					"<td class='text-left'>"+obj.name_TH+"</td>"+									
				"</tr>";
			
			$("#tbl_BenefitOpt2"+tbl+"_OL").append(row2);
			
			row3 = "<tr>"+
					"<td class='text-center'><input type='checkbox' id='opt1sub_benefitdetail_OL"+num+"' name='opt1sub_benefitdetail_OL[]' class='chk' value='"+obj.bnf_code+","+obj.name_TH+"'></td>"+
					"<td class='text-center'>"+obj.bnf_code+"</td>"+
					"<td class='text-left'>"+obj.name_TH+"</td>"+									
				"</tr>";
			
			$("#tbl_BenefitOpt2Sub"+tbl+"_OL").append(row3);
			
			row4 = "<tr>"+
					"<td class='text-center'><input type='checkbox' id='opt1sub_benefitdetail"+num+"_edit_OL' name='opt1_benefitdetail_edit_OL[]' class='chk' value='"+obj.bnf_code+","+obj.name_TH+"'></td>"+
					"<td class='text-center'>"+obj.bnf_code+"</td>"+
					"<td class='text-left'>"+obj.name_TH+"</td>"+									
				"</tr>"
			
			$("#tbl_BenefitOpt1Edit"+tbl+"_OL").append(row4);
				
			row5 = "<tr>"+
					"<td class='text-center'><input type='radio' id='opt2_benefitdetail"+num+"_edit_OL' name='opt2_benefitdetail_edit_OL[]' onclick='displayBenefitValueOptionEditOL_popup(this.value);' class='chk_rd' value='"+obj.bnf_code+","+obj.name_TH+"'></td>"+
					"<td class='text-center'>"+obj.bnf_code+"</td>"+
					"<td class='text-left'>"+obj.name_TH+"</td>"+									
				"</tr>";
				
			$("#tbl_BenefitOpt2Edit"+tbl+"_OL").append(row5);
			
			row6 = "<tr>"+
					"<td class='text-center'><input type='checkbox' id='opt1sub_benefitdetail"+num+"_edit_OL' name='opt1_benefitdetail_edit_OL[]' class='chk_edit' value='"+obj.bnf_code+","+obj.name_TH+"'></td>"+
					"<td class='text-center'>"+obj.bnf_code+"</td>"+
					"<td class='text-left'>"+obj.name_TH+"</td>"+									
				"</tr>"
			
			$("#tbl_BenefitOpt2SubEdit"+tbl+"_OL").append(row6);
		}
	}
	if ($.fn.dataTable.isDataTable( "#tbl_BenefitOpt1"+tbl+"_OL" ) ) {   	  
		 //$("#tbl_BenefitOpt1_CL").destroy();   	
		 
	}else{  		
		$("#tbl_BenefitOpt1"+tbl+"_OL").DataTable({"ordering": false,"paging": false,"bInfo" : false, scrollY: '236px',scrollCollapse: true, "autoWidth": false, 
			fixedHeader: {header: true},"oLanguage": {"sSearch": "ค้นหา: "}
		});
		$(".datatbl_BenefitOpt1"+tbl+"_OL .dataTables_scrollHeadInner").css({"width":"100%"});
		$(".datatbl_BenefitOpt1"+tbl+"_OL .table").css({"width":"100%"});  

	}

	
	if ($.fn.dataTable.isDataTable( "#tbl_BenefitOpt2"+tbl+"_OL" ) ) {   	  
		  //$("#tbl_BenefitOpt2_CL").destroy();   	
	}else{  
		$("#tbl_BenefitOpt2"+tbl+"_OL").DataTable({"ordering": false,"paging": false,"bInfo" : false, scrollY: '236px',scrollCollapse: true, "autoWidth": false, 
			fixedHeader: {header: true},"oLanguage": {"sSearch": "ค้นหา: "}
		});
		$(".datatbl_BenefitOpt2"+tbl+"_OL .dataTables_scrollHeadInner").css({"width":"100%"});
		$(".datatbl_BenefitOpt2"+tbl+"_OL .table").css({"width":"100%"});  
	}
	
	if ($.fn.dataTable.isDataTable( "#tbl_BenefitOpt2Sub"+tbl+"_OL" ) ) {   	  
		 // $("#tbl_BenefitOpt2Sub_CL").destroy();   	
	}else{  
		$("#tbl_BenefitOpt2Sub"+tbl+"_OL").DataTable({"ordering": false,"paging": false,"bInfo" : false, scrollY: '236px',scrollCollapse: true, "autoWidth": false, 
			fixedHeader: {header: true},"oLanguage": {"sSearch": "ค้นหา: "}
		});
		$(".datatbl_BenefitOpt2Sub"+tbl+"_OL .dataTables_scrollHeadInner").css({"width":"100%"});
		$(".datatbl_BenefitOpt2Sub"+tbl+"_OL .table").css({"width":"100%"});  
	}
	
	if ($.fn.dataTable.isDataTable( "#tbl_BenefitOpt1Edit"+tbl+"_OL" ) ) {   	  
		 // $("#tbl_BenefitOpt1Edit_CL").destroy();   	
	}else{  
		$("#tbl_BenefitOpt1Edit"+tbl+"_OL").DataTable({"ordering": false,"paging": false,"bInfo" : false, scrollY: '236px',scrollCollapse: true, "autoWidth": false, 
			fixedHeader: {header: true},"oLanguage": {"sSearch": "ค้นหา: "}
		});
		$(".datatbl_BenefitOpt1Edit"+tbl+"_OL .dataTables_scrollHeadInner").css({"width":"100%"});
		$(".datatbl_BenefitOpt1Edit"+tbl+"_OL .table").css({"width":"100%"});  
	}
	
	if ($.fn.dataTable.isDataTable( "#tbl_BenefitOpt2Edit"+tbl+"_OL" ) ) {   	  
		  //$("#tbl_BenefitOpt2Edit_CL").destroy();   	
	}else{  
		$("#tbl_BenefitOpt2Edit"+tbl+"_OL").DataTable({"ordering": false,"paging": false,"bInfo" : false, scrollY: '236px',scrollCollapse: true, "autoWidth": false, 
			fixedHeader: {header: true},"oLanguage": {"sSearch": "ค้นหา: "}
		});
		$(".datatbl_BenefitOpt2Edit"+tbl+"_OL .dataTables_scrollHeadInner").css({"width":"100%"});
		$(".datatbl_BenefitOpt2Edit"+tbl+"_OL .table").css({"width":"100%"});  

	}
	
	if ($.fn.dataTable.isDataTable( "#tbl_BenefitOpt2SubEdit"+tbl+"_OL" ) ) {   	  
		  //$("#tbl_BenefitOpt2SubEdit_CL").destroy();   	
	}else{  
		$("#tbl_BenefitOpt2SubEdit"+tbl+"_OL").DataTable({"ordering": false,"paging": false,"bInfo" : false, scrollY: '236px',scrollCollapse: true, "autoWidth": false, 
			fixedHeader: {header: true},"oLanguage": {"sSearch": "ค้นหา: "}
		});
		$(".datatbl_BenefitOpt2SubEdit"+tbl+"_OL .dataTables_scrollHeadInner").css({"width":"100%"});
		$(".datatbl_BenefitOpt2SubEdit"+tbl+"_OL .table").css({"width":"100%"});  
	}
}

/*edit modal*/
function displayBenefitValueOptionEditOL_popup(value){	
	//var select_benefit1_CL = $('#select_benefit1_CL').prop('checked');	
	var Optsub_BCID = $(".modal-body #OptSub_benefitedit_OL").val(value); 								
	var BCID = $("#BCID_benefitOL_edit").val();
	
			$('.datatbl_BenefitOpt2SubEdit'+BCID+'_OL').css("display","block");	
			$('.datatbl_BenefitOpt2Edit'+BCID+'_OL').css("display","none");	
			$('#tbl_BenefitOpt2SubEdit'+BCID+'_OL').show();
			$('#tbl_BenefitOpt2Edit'+BCID+'_OL').hide();
	
	
	var dataID = $("#dataID_OL").val();
	
	var i = 0, val_chk_tbl2 = [];
	var j = 0, val_chk_tbl3 = [];
	var k = 0, val_tbl = [];
	var m = 0, val_chk = [];
	$("#tbl_BenefitOpt2Edit"+BCID+"_OL input[name='opt2_benefitdetail_edit_OL[]']:checked").each(function(){
		i++;
		val_chk_tbl2[i] = $(this).val().split(",");
		
		$("#tbl_BenefitOpt2SubEdit"+BCID+"_OL tbody>tr").each(function(){
			j++;
			val_chk_tbl3[j] = $(this).find("input[name='opt1_benefitdetail_edit_OL[]']").val().split(",");
			if(val_chk_tbl3[j][0] == val_chk_tbl2[i][0]){
				$(this).closest('tr').hide();
			}
		});
	});
	
	$("#tbl_"+BCID+" tbody>tr").each(function(){
		k++;
		val_tbl[k] = $(this).find("td:nth-child(3)").html();
		
		$("#tbl_BenefitOpt2SubEdit"+BCID+"_OL tbody>tr").each(function(){
			m++;
			val_chk[m] = $(this).find("input[name='opt1_benefitdetail_edit_OL[]']").val().split(",");
			if($(this).find("input[name='opt1_benefitdetail_edit_OL[]']").prop("checked") == true){
				$(this).closest('tr').show();
			}else{
				if(val_chk[m][0] == val_tbl[k]){
					$(this).closest('tr').hide();
				}
			}
		});		
	});		
}

/*บันทึก modal เลือกความคุ้มครอง*/
function saveBenefitValueOL_popup(type,tbl){	

	var ParentID = $("#ParentID_benefitOL").val();
	var benefit_desc = $("#benefit_desc_OL").val();
	var BCID = $("#BCID_benefitOL").val();
	var flag = $("#flag_"+BCID).val();
	var arr_flag = $("#tab_content_"+BCID).data("flag");
	
	/*opt sub*/
	var OptSub_benefitCL = $("#OptSub_benefitOL").val();
		OptSub_benefitCL = OptSub_benefitCL.split(",")
	var OptSub_BCID = OptSub_benefitCL[0];	
	var OptSub_name = OptSub_benefitCL[1];

	var lastImgOK = $("#tbl_"+BCID+" >tbody>tr:last-child").attr("id") || 0;	
	var rowsNumber = $("#tbl_"+BCID+" >tbody>tr:last-child").attr("data-group");
	
	if(rowsNumber){
		rowsNumber_new = Number(rowsNumber)+1;
	}else{
		rowsNumber_new = 1;
	}
	
	
	/****************start lookup*************************/
	var lookup_unit = $("#lookup_unit_OL").val();
		lookup_unit = lookup_unit.split(",");
	var lookup_frequency = $("#lookup_frequency_OL").val();
		lookup_frequency = lookup_frequency.split(",");
	var lookup_factorunit = $("#lookup_factor_unit_OL").val();
		lookup_factorunit = lookup_factorunit.split(",");
	var lookup_fac_unit_new = $("#lookup_unit_factor_OL").val();
		lookup_fac_unit_new = lookup_fac_unit_new.split(",");
	var lookup_factorScope = $("#lookup_factorScope_OL").val();
		lookup_factorScope = lookup_factorScope.split(",");
	var unit_factor_new = $("#lookup_unit_factor_OL").val();
		unit_factor_new = unit_factor_new.split(",");
		
	// unit
	var pass = 0;
	var text = 1;
	var option_unit = "";
	for(i = 0 ; i < lookup_unit.length/2 ; i++){
		var row_unit = "<option value='"+lookup_unit[pass]+"'>"+lookup_unit[text]+"</option>"
		pass = Number(parseInt(pass) + parseInt(2));
		text = Number(parseInt(text) + parseInt(2));
		option_unit += row_unit
	}
	
	// frequency
	var pass = 0;
	var text = 1;
	var option_frequency = "";
	for(i = 0 ; i < lookup_frequency.length/2 ; i++){
		var row_frequency = "<option value='"+lookup_frequency[pass]+"'>"+lookup_frequency[text]+"</option>"
		pass = Number(parseInt(pass) + parseInt(2));
		text = Number(parseInt(text) + parseInt(2));
		option_frequency += row_frequency
		
	}
	
	// factor unit
	var pass = 0;
	var text = 1;
	var option_fac_unit = "";
	for(i = 0 ; i < lookup_factorunit.length/2 ; i++){
		var row_factorunit = "<option value='"+lookup_factorunit[pass]+"'>"+lookup_factorunit[text]+"</option>"
		pass = Number(parseInt(pass) + parseInt(2));
		text = Number(parseInt(text) + parseInt(2))
		option_fac_unit += row_factorunit
	}
	
	var pass = 0;
	var text = 1;
	var option_scope = "";
	for(i = 0 ; i < lookup_factorScope.length/2 ; i++){
		var row_option_scope = "<option value='"+lookup_factorScope[pass]+"'>"+lookup_factorScope[text]+"</option>"
		pass = Number(parseInt(pass) + parseInt(2));
		text = Number(parseInt(text) + parseInt(2));
		option_scope += row_option_scope
	}
	
	var pass = 0;
	var text = 1;
	var option_factor_new = "";
	for(i = 0 ; i < unit_factor_new.length/2 ; i++){
		var row_factor_new = "<option value='"+unit_factor_new[pass]+"'>"+unit_factor_new[text]+"</option>"
		pass = Number(parseInt(pass) + parseInt(2));
		text = Number(parseInt(text) + parseInt(2));
		option_factor_new += row_factor_new
	}
	
	/****************end lookup*************************/
	//var rowsNumber_new = Number(rowsNumber)+1;
	var numberImgOK = 0;
	if(lastImgOK == 0){
		numberImgOK = 1;
	}else{
		//numberImgOK = Number(lastImgOK.replace("tbody_benefitL_CL",""))+1;
		numberImgOK = Number(ParentID)+1;
	}
		
	var row1 = "";
	var newID_Del = "imgOKDel_benefit_OL"+BCID+"_"+numberImgOK;
	var imgDel = BCID+"_"+numberImgOK;
	if((type == 1  && benefit_desc != "") || (type == 2) ){	
		row1 += "<tr id='tbody_benefitL_OL"+numberImgOK+"' data-id='"+numberImgOK+"' data-parent='0' data-level='1'>"+
				"<td id="+newID_Del+" class='text-center borderBlack vertical-middle'"+
				"onclick=\"imgCheckboxDel_benefit_OL('"+imgDel+"');\""+
				"style='vertical-align: middle;'><i "+
				"class='glyphicon glyphicon-edit'></i></td>"+   	
				"<td class='text-center borderBlack vertical-middle rider_mainTopic'><span class='spanBenefit_OL'>"+numberImgOK+"</span></td>";
		if(type == 1){
		row1 += "<td class='text-center borderBlack vertical-middle rider_mainTopic'>Group</td>"+
		   		"<td class='borderBlack vertical-middle rider_mainTopic'><a class='open-EditBenefitDialog_OL' data-toggle='modal' href='#modal_editCoverag_OL'  data-id='"+numberImgOK+"' data-topic='"+benefit_desc+"' data-type='1'>"+benefit_desc+"</a></td>";	
		}else if(type == 2){
			row1 += "<td class='text-center borderBlack vertical-middle rider_mainTopic'>"+OptSub_BCID+"</td>"+
	   		"<td class='borderBlack vertical-middle rider_mainTopic'><a class='open-EditBenefitDialog_OL' data-toggle='modal' href='#modal_editCoverage_OL'  data-id='"+numberImgOK+"' data-topic='"+OptSub_name+"' data-type='2' data-code='"+OptSub_BCID+"'>"+OptSub_name+"</a></td>";	
		}
		
		row1 += "<td class='borderBlack vertical-middle'>"+
		   "<input name='benefit_amount_OL_"+BCID+"[]' id='benefit_amount_OL_"+BCID+"_"+numberImgOK+"' type='text' class='form-control margin-padding0 text-center width40px' onkeypress='validate(event);' onblur=\"replaceBlank(this), select_unit_ol('"+BCID+"',"+numberImgOK+", this.value);\" value='0.00' data-v-min='0.00' data-v-max='999999999.99'>	"+											
		   "</td>"+
		   "<td width='100px' class='borderBlack vertical-middle'>"+
		   "<select class='form-control width-initial lookup-unit' style='margin: 0;width: 100%;' id='benefit_unit_OL"+numberImgOK+"' onchange=\"select_unit_option_ol('"+BCID+"',"+numberImgOK+");\">"+
			   "<option value='NONE' selected>None</option>"+option_unit+
		   "</select>"+												
		   "</td>"+
		   "<td width='100px' class='borderBlack vertical-middle'>"+
		   "<select class='form-control width-initial lookup-frequency' style='margin: 0;width: 100%;' id='benefit_fund_OL"+numberImgOK+"'>"+
			   "<option value='NONE'>None</option>"+option_fac_unit+
		   "</select>"+												
		   "</td>"+
		   "<td width='100px' class='borderBlack vertical-middle'>"+
		   "<select class='form-control width-initial lookup-frequency' style='margin: 0;width: 100%;' id='benefit_fq_OL"+numberImgOK+"'>"+
			   "<option value='NONE' selected>None</option>"+option_frequency+
		   "</select>"+
		   "</td>";
		   /*"<td width='100px' class='borderBlack text-center vertical-middle'><div class='input-group col-xs-12'><div class='list_coverage'>None</div><a class='open-SelectCoverageDialog_OL' data-toggle='modal' data-id='"+numberImgOK+"' href='#modal_TableCoverage_OL'><button class='btn btn-default btn-primary float-right' type='button' id='btn_benefit"+BCID+"_"+numberImgOK+"_OL'>...</button></a></div></td>";*/
		   
		   if(arr_flag == true){
			   row1 += "<td width='70px' class='text-center borderBlack vertical-middle'><input type='checkbox' id='is_benefit_contract_OL"+numberImgOK+"'></td>"+
			   "<td width='70px' class='text-center borderBlack vertical-middle'><input type='checkbox' id='is_benefit_cv_OL"+numberImgOK+"'></td>";
		   }
		   
		   row1 += "<td width='100px' class='borderBlack vertical-middle'><textarea class='form-control' id='benefit_remark_OL"+numberImgOK+"'></textarea></td>"+
		   "<td width='100px' class='borderBlack vertical-middle'>"+
		   "<input name='benefit_factor_min_OL"+numberImgOK+"' id='benefit_factor_min_OL"+numberImgOK+"' type='text' class='form-control margin-padding0 text-center width40px' onkeypress='validate(event);' onblur=\"replaceBlank(this), select_unit_factor_ol('"+BCID+"',"+numberImgOK+", this.value);\" value='0.00' data-v-min='0.00' data-v-max='999999999.99'>"+		   
		   "</td>"+
		   "<td width='100px' class='borderBlack vertical-middle'>"+
		   "<input name='benefit_factor_max_OL"+numberImgOK+"' id='benefit_factor_max_OL"+numberImgOK+"' type='text' class='form-control margin-padding0 text-center width40px' onkeypress='validate(event);' onblur=\"replaceBlank(this), select_unit_factor_ol('"+BCID+"',"+numberImgOK+", this.value);\" value='0.00' data-v-min='0.00' data-v-max='999999999.99'>"+
		   "</td>"+
		   "<td width='100px' class='borderBlack vertical-middle'>"+
		   "<select class='form-control width-initsial' style='margin: 0;width: 100%;' id='benefit_factor_unit_OL"+numberImgOK+"' onchange=\"select_unit_option_factor_ol('"+BCID+"',"+numberImgOK+");\">"+
			   "<option value='NONE' selected>None</option>"+option_factor_new+
		   "</select>"+
		   "</td>"+
		   "<td width='100px' class='borderBlack vertical-middle'>"+
		   "<select class='form-control width-initial lookup-frequency' style='margin: 0;width: 100%;' id='benefit_factor_to_OL"+numberImgOK+"'>"+
			   "<option value='NONE' selected>None</option>"+option_scope+	
		   "</select>"+
		   "</td>"+
		   "<td width='100px' class='borderBlack vertical-middle'>"+
		   "<input name='benefit_acc_amount_OL"+numberImgOK+"' id='benefit_acc_amount_OL"+numberImgOK+"' type='text' class='form-control margin-padding0 text-center width40px' onkeypress='validate(event);' onblur=\"replaceBlank(this), select_unit_acc_ol('"+BCID+"',"+numberImgOK+", this.value);\" value='0.00' data-v-min='0.00' data-v-max='999999999.99'>"+		   
		   "</td>"+
		   "<td width='100px' class='borderBlack vertical-middle'>"+
		   "<select class='form-control width-initial lookup-unit' style='margin: 0;width: 100%;' id='benefit_acc_unit_OL"+numberImgOK+"' onchange=\"select_unit_option_acc_ol('"+BCID+"',"+numberImgOK+");\">"+
			   "<option value='NONE' selected>None</option>"+option_factor_new+
		   "</select>"+
		   "</td>"+
		   "</tr>";
		
	}
	
	var checkbox_len = "";
	if(type == 1){
		checkbox_len = $("#tbl_BenefitOpt1"+tbl+"_OL input[name='opt1_benefitdetail_OL[]']:checked").length;
	}else if(type == 2){
		checkbox_len = $("#tbl_BenefitOpt2Sub"+tbl+"_OL input[name='opt1sub_benefitdetail_OL[]']:checked").length;
	}
	
	var numberImgOK_Sub = numberImgOK;
		
	/*var table = document.getElementById("tbl_BenefitOpt1_CL");
	var spans = table.getElementsByClassName("spanBenefit_CL");*/
	var val = [];
	var val_chk = [];
	var i = 0;
	if(checkbox_len > 0){
		$("#btn_SaveEditBenefit1_OL").prop("disabled", false);
		
		$('.chk:checked').each(function(){
		i++
		
		numberImgOK_Sub = numberImgOK+"_"+i;
				
	    val[i] = $(this).val();
	    val_chk[i] = $(this).val().split(",")	      
		
		row1 += "<tr id='tbody_benefitL_OL"+numberImgOK+"_"+i+"' data-id='"+numberImgOK+"_"+i+"' data-parent='1' data-level='2' data-group='"+numberImgOK+"'>"+
		   "<td class='text-center borderBlack'></td>"+
		   "<td class='text-center borderBlack vertical-middle'>"+numberImgOK+"."+i+"</td>"+
		   "<td class='text-center borderBlack vertical-middle'>"+val_chk[i][0]+"</td>"+
		   "<td class='borderBlack vertical-middle'>"+val_chk[i][1]+"</td>";
		
		row1 += "<td class='borderBlack vertical-middle'>"+
		   "<input name='benefit_amount_OL_"+BCID+"[]' id='benefit_amount_OL_"+BCID+"_"+numberImgOK_Sub+"' type='text' class='form-control margin-padding0 text-center width40px' onkeypress='validate(event);' onblur=\"replaceBlank(this), select_unit_ol('"+BCID+"','"+numberImgOK_Sub+"', this.value);\" value='0.00' data-v-min='0.00' data-v-max='999999999.99'>	"+											
		   "</td>"+
		   "<td width='100px' class='borderBlack vertical-middle'>"+
		   "<select class='form-control width-initial lookup-unit' style='margin: 0;width: 100%;' id='benefit_unit_OL"+numberImgOK_Sub+"' onchange=\"select_unit_option_ol('"+BCID+"','"+numberImgOK_Sub+"');\">"+
			   "<option value='NONE' selected>None</option>"+option_unit+
		   "</select>"+												
		   "</td>"+
		   "<td width='100px' class='borderBlack vertical-middle'>"+
		   "<select class='form-control width-initial lookup-frequency' style='margin: 0;width: 100%;' id='benefit_fund_OL"+numberImgOK_Sub+"'>"+
		   "<option value='NONE' selected>None</option>"+option_fac_unit+
		   "</select>"+												
		   "</td>"+
		   "<td width='100px' class='borderBlack vertical-middle'>"+
		   "<select class='form-control width-initial lookup-frequency' style='margin: 0;width: 100%;' id='benefit_fq_OL"+numberImgOK_Sub+"'>"+
			   "<option value='NONE' selected>None</option>"+option_frequency+
		   "</select>"+
		   "</td>";
		   /*"<td width='100px' class='borderBlack text-center vertical-middle'><div class='input-group col-xs-12'><div class='list_coverage'>None</div><a class='open-SelectCoverageDialog_OL' data-toggle='modal' data-id='"+numberImgOK+"_"+i+"' href='#modal_TableCoverage_OL'><button class='btn btn-default btn-primary float-right' type='button' id='btn_benefit"+BCID+"_"+numberImgOK_Sub+"_OL'>...</button></a></div></td>";*/
		   
		   if(arr_flag == true){
			   row1 += "<td width='70px' class='text-center borderBlack vertical-middle'><input type='checkbox' id='is_benefit_contract_OL"+numberImgOK_Sub+"'></td>"+
			   "<td width='70px' class='text-center borderBlack vertical-middle'><input type='checkbox' id='is_benefit_cv_OL"+numberImgOK_Sub+"'></td>";
		   }
		   
		   row1 += "<td width='100px' class='borderBlack vertical-middle'><textarea class='form-control' id='benefit_remark_OL"+numberImgOK_Sub+"'></textarea></td>"+
		   "<td width='100px' class='borderBlack vertical-middle'>"+
		   "<input name='benefit_factor_min_OL"+numberImgOK_Sub+"' id='benefit_factor_min_OL"+numberImgOK_Sub+"' type='text' class='form-control margin-padding0 text-center width40px' onkeypress='validate(event);' onblur=\"replaceBlank(this), select_unit_factor_ol('"+BCID+"','"+numberImgOK_Sub+"', this.value);\" value='0.00' data-v-min='0.00' data-v-max='999999999.99'>"+		   
		   "</td>"+
		   "<td width='100px' class='borderBlack vertical-middle'>"+
		   "<input name='benefit_factor_max_OL"+numberImgOK_Sub+"' id='benefit_factor_max_OL"+numberImgOK_Sub+"' type='text' class='form-control margin-padding0 text-center width40px' onkeypress='validate(event);' onblur=\"replaceBlank(this), select_unit_factor_ol('"+BCID+"','"+numberImgOK_Sub+"', this.value);\" value='0.00' data-v-min='0.00' data-v-max='999999999.99'>"+
		   "</td>"+
		   "<td width='100px' class='borderBlack vertical-middle'>"+
		   "<select class='form-control width-initsial' style='margin: 0;width: 100%;' id='benefit_factor_unit_OL"+numberImgOK_Sub+"' onchange=\"select_unit_option_factor_ol('"+BCID+"','"+numberImgOK_Sub+"');\">"+
			   "<option value='NONE' selected>None</option>"+option_factor_new+
		   "</select>"+
		   "</td>"+
		   "<td width='100px' class='borderBlack vertical-middle'>"+
		   "<select class='form-control width-initial lookup-frequency' style='margin: 0;width: 100%;' id='benefit_factor_to_OL"+numberImgOK_Sub+"'>"+
		   "<option value='NONE' selected>None</option>"+option_scope+	
		   "</select>"+
		   "</td>"+
		   "<td width='100px' class='borderBlack vertical-middle'>"+
		   "<input name='benefit_acc_amount_OL"+numberImgOK_Sub+"' id='benefit_acc_amount_OL"+numberImgOK_Sub+"' type='text' class='form-control margin-padding0 text-center width40px' onkeypress='validate(event);' onblur=\"replaceBlank(this), select_unit_acc_ol('"+BCID+"','"+numberImgOK_Sub+"', this.value);\" value='0.00' data-v-max='999999999.99'>"+		   
		   "</td>"+
		   "<td width='100px' class='borderBlack vertical-middle'>"+
		   "<select class='form-control width-initial lookup-unit' style='margin: 0;width: 100%;' id='benefit_acc_unit_OL"+numberImgOK_Sub+"' onchange=\"select_unit_option_acc_ol('"+BCID+"','"+numberImgOK_Sub+"');\">"+
			   "<option value='NONE' selected>None</option>"+option_factor_new+
		   "</select>"+
		   "</td>"+
		   "</tr>";
	
		//$(this).closest('tr').hide();	
		
		/*remove list ในกลุ่มความคุ้มครอง*/
		var val_opt_tbl1 = [];
		var val_opt_code_tbl1 = []
		var m=0;
		
		$("#tbl_BenefitOpt1"+tbl+"_OL tbody>tr").each(function(){
			m++;
			val_opt_tbl1[m] = $(this).find("input[name='opt1_benefitdetail_OL[]']").val();
			val_opt_code_tbl1[m] = $(this).find("input[name='opt1_benefitdetail_OL[]']").val().split(",");
			if(val_opt_code_tbl1[m][0] == val_chk[i][0]){
				$(this).closest('tr').hide();
			}
		});
		
		/*remove list ในความคุ้มครอง*/
		var val_opt_tbl2 = [];
		var val_opt_code_tbl2 = []
		var n=0;
		
		$("#tbl_BenefitOpt2"+tbl+"_OL tbody>tr").each(function(){
			n++;
			val_opt_tbl2[n] = $(this).find("input[name='opt2_benefitdetail_OL[]']").val();
			val_opt_code_tbl2[n] = $(this).find("input[name='opt2_benefitdetail_OL[]']").val().split(",");
			if(val_opt_code_tbl2[n][0] == val_chk[i][0]){
				$(this).closest('tr').hide();
			}
		});
		
		/*remove list ในหมวดความคุ้มครอง ตารางย่อย*/
		var val_opt_tbl3 = [];
		var val_opt_code_tbl3 = []
		var mm=0;
		
		$("#tbl_BenefitOpt2Sub"+tbl+"_OL tbody>tr").each(function(){
			m++;
			val_opt_tbl3[mm] = $(this).find("input[name='opt1sub_benefitdetail_OL[]']").val();
			val_opt_code_tbl3[mm] = $(this).find("input[name='opt1sub_benefitdetail_OL[]']").val().split(",");
			if(val_opt_code_tbl3[mm][0] == val_chk[i][0]){
				$(this).closest('tr').hide();
			}
		});
	
			
	 });
	}/*else{
		$("#btn_SaveEditBenefit1").prop("disabled", true);
	}	*/
	
	$("#tbl_"+BCID+" tbody").append(row1);	 	
	$('.auto').autoNumeric('init');
	/*$(".autoComma").autoNumeric('init',{vMin: '0.00', vMax: '999999999.99'});*/
	
	if(type == 1){
		if(benefit_desc != ""){
			$("#modal_selectCoverage_OL").modal("hide");
		}else{		 
			 message = "กรุณาระบุข้อมูลให้ครบ";
			 alertError(message);		
		}
	}else if(type == 2){
		//if(checkbox_len > 0){
			$("#modal_selectCoverage_OL").modal("hide");
		//}
		$("#tbl_BenefitOpt1"+tbl+"_OL tbody>tr").remove();
	}
	
	
	/*******/
	
}
function select_unit_ol(tbl,id,val){

	var value = $("#benefit_amount_OL_"+tbl+"_"+id+"").val()
	var thisVal = replaceComma($("#benefit_amount_OL_"+tbl+"_"+id+"").val());

	var unit = $("#benefit_unit_OL"+id+" option:selected").val();
	if($("#benefit_unit_OL"+id+" option:selected").val() != "NONE"){
		if($("#benefit_unit_OL"+id+" option:selected").val() == "PERCENT"){
			if(Number(thisVal) > 999.99){
				
				$("#benefit_amount_OL_"+tbl+"_"+id+"").val("0.00");
				$("#benefit_amount_OL_"+tbl+"_"+id+"").attr("data-v-max","999.99");
				
			}else{
				$("#benefit_amount_OL_"+tbl+"_"+id+"").attr("data-v-max","999.99");
				$("#benefit_amount_OL_"+tbl+"_"+id+"").val(parseFloat(value).toFixed(2));
			}
			
			$("#benefit_amount_OL_"+tbl+"_"+id+"").attr("onkeyup","replaceDot_rd(this)");
			$("#benefit_amount_OL_"+tbl+"_"+id+"").attr("maxlength","6");
		
				
		}
		if($("#benefit_unit_OL"+id+" option:selected").val() == "CURRENCY"){
			if(Number(thisVal) > 999999999.99){
				$("#benefit_amount_OL_"+tbl+"_"+id+"").attr("data-v-max","999999999.99");
				var addComma = numberWithCommas(parseFloat(thisVal).toFixed(2));
				$("#benefit_amount_OL_"+tbl+"_"+id+"").val("0.00");
				$("#benefit_amount_OL_"+tbl+"_"+id+"").attr("onkeyup","replaceDot_rd(this)");
				$("#benefit_amount_OL_"+tbl+"_"+id+"").attr("maxlength","12");

			}else{
				$("#benefit_amount_OL_"+tbl+"_"+id+"").attr("data-v-max","999999999.99");
				var addComma = numberWithCommas(parseFloat(thisVal).toFixed(2));
				$("#benefit_amount_OL_"+tbl+"_"+id+"").val(addComma);
				$("#benefit_amount_OL_"+tbl+"_"+id+"").attr("onkeyup","replaceDot_rd(this)");
				$("#benefit_amount_OL_"+tbl+"_"+id+"").attr("maxlength","12");

			}
			
		}
		if($("#benefit_unit_OL"+id+" option:selected").val() == "UNIT"){
			if(Number(thisVal) > 999999999.99){
				$("#benefit_amount_OL_"+tbl+"_"+id+"").attr("data-v-max","999999999.99");
				var addComma = numberWithCommas(parseFloat(thisVal).toFixed(2));
				$("#benefit_amount_OL_"+tbl+"_"+id+"").val("0.00");
				$("#benefit_amount_OL_"+tbl+"_"+id+"").attr("onkeyup","replaceDot_rd(this)");
				$("#benefit_amount_OL_"+tbl+"_"+id+"").attr("maxlength","12");
			}else{
				$("#benefit_amount_OL_"+tbl+"_"+id+"").attr("data-v-max","999999999.99");
				var addComma = numberWithCommas(parseFloat(thisVal).toFixed(2));
				$("#benefit_amount_OL_"+tbl+"_"+id+"").val(addComma);
				$("#benefit_amount_OL_"+tbl+"_"+id+"").attr("onkeyup","replaceDot_rd(this)");
				$("#benefit_amount_OL_"+tbl+"_"+id+"").attr("maxlength","12");
			}
			

		}
		
	}else{
		$("#benefit_amount_OL_"+tbl+"_"+id+"").val(numberWithCommas(parseFloat(thisVal).toFixed(2)));
		$("#benefit_amount_OL_"+tbl+"_"+id+"").attr("maxlength","12");
		$("#benefit_amount_OL_"+tbl+"_"+id+"").attr("onkeyup","replaceDot_rd(this), replaceZero_rd(this)");

	}
	

}

function select_unit_acc_ol(tbl,id,val){

	var acc_amount = $("#benefit_acc_amount_OL"+id).val();
	var acc_amountInt = replaceComma(acc_amount);
		if($("#benefit_acc_unit_OL"+id).val() != "NONE"){
			if($("#benefit_acc_unit_OL"+id).val() == "DAY" || $("#benefit_acc_unit_OL"+id).val() == "WEEK" || $("#benefit_acc_unit_OL"+id).val() == "MONTH" || $("#benefit_acc_unit_OL"+id).val() == "YEAR" || $("#benefit_acc_unit_OL"+id).val() == "HOSPITAL_ADMIT"){			if(acc_amountInt.includes(".")){
					
					$("#benefit_acc_amount_OL"+id).addClass("auto");
					var M = Math.trunc(acc_amountInt);
					$("#benefit_acc_amount_OL"+id).val(M);
					$("#benefit_acc_amount_OL"+id).attr("maxlength","3")	
					$("#benefit_acc_amount_OL"+id).attr("onkeyup","replaceDotDot_rd(this), replaceZero_rd(this)");
				}
			
			}
			
			if($("#benefit_acc_unit_OL"+id).val() == "PERCENT"){
				if(Number(acc_amountInt) > 999.99){
					$("#benefit_acc_amount_OL"+id).val("0.00");
				
				}else{
					$("#benefit_acc_amount_OL"+id).val(parseFloat(acc_amount).toFixed(2));
				}
				$("#benefit_acc_amount_OL"+id).attr("data-v-max","999.99");
				$("#benefit_acc_amount_OL"+id).attr("maxlength","6")	
				$("#benefit_acc_amount_OL"+id).attr("onkeyup","replaceDot_rd(this)");
			}
			
			if($("#benefit_acc_unit_OL"+id).val() == "CURRENCY" || $("#benefit_acc_unit_OL"+id).val() == "UNIT"){
				if(Number(acc_amountInt) > 999999999.99){
					$("#benefit_acc_amount_OL"+id).val("0.00");
				}else{
					
					var addComma = numberWithCommas(parseFloat(acc_amountInt).toFixed(2));
					$("#benefit_acc_amount_OL"+id).val(addComma);
					
				}
				$("#benefit_acc_amount_OL"+id).attr("maxlength","12");
				$("#benefit_acc_amount_OL"+id).attr("onkeyup","replaceDot_rd(this)");
			}
		}else{
		
			$("#benefit_acc_amount_OL"+id).attr("maxlength","3");
			$("#benefit_acc_amount_OL"+id).attr("onkeyup","replaceDot_rd(this)");
			
		}

}


function select_unit_factor_ol(tbl,id,val){

	var min_limit_amount = $("#benefit_factor_min_OL"+id).val();
	var limit_amount = $("#benefit_factor_max_OL"+id).val();
	var limit_amountInt = replaceComma(limit_amount);
	var min_limit_amountInt = replaceComma(min_limit_amount);
	
	
	
	if($("#benefit_factor_unit_OL"+id+" option:selected").val() != "NONE"){
		
		if($("#benefit_factor_unit_OL"+id+" option:selected").val() == "DAY" || $("#benefit_factor_unit_OL"+id+" option:selected").val() == "WEEK" || $("#benefit_factor_unit_OL"+id+" option:selected").val() == "MONTH" || $("#benefit_factor_unit_OL"+id+" option:selected").val() == "YEAR" || $("#benefit_factor_unit_OL"+id+" option:selected").val() == "HOSPITAL_ADMIT"){				
			if(limit_amountInt.includes(".") || min_limit_amountInt.includes(".")){
				$("#benefit_factor_min_OL"+id).val("0");
				$("#benefit_factor_min_OL"+id).attr("maxlength","3")	
				$("#benefit_factor_min_OL"+id).attr("onkeyup","replaceDotDot_rd(this), replaceZero_rd(this)");
				
				/*var M = Math.trunc(acc_amountInt);*/
				$("#benefit_factor_max_OL"+id).val("0");
				$("#benefit_factor_max_OL"+id).attr("maxlength","3")	
				$("#benefit_factor_max_OL"+id).attr("onkeyup","replaceDotDot_rd(this), replaceZero_rd(this)");
			}
				
		}else if($("#benefit_factor_unit_OL"+id+" option:selected").val() == "PERCENT"){
			if(Number(limit_amountInt) > 999.99 || Number(min_limit_amountInt) > 999.99){
			
				$("#benefit_factor_min_OL"+id).val("0.00");
				$("#benefit_factor_min_OL"+id).attr("maxlength","6")		
			
				$("#benefit_factor_max_OL"+id).val("0.00");
				$("#benefit_factor_max_OL"+id).attr("maxlength","6")
			}else{
			
				$("#benefit_factor_min_OL"+id).val(parseFloat(min_limit_amount).toFixed(2));
				$("#benefit_factor_min_OL"+id).attr("maxlength","6")		
				
				$("#benefit_factor_max_OL"+id).val(parseFloat(limit_amount).toFixed(2));
				$("#benefit_factor_max_OL"+id).attr("maxlength","6")
			}
			
			$("#benefit_factor_max_OL"+id).attr("onkeyup","replaceDot_rd(this), replaceZero_rd(this)");
			$("#benefit_factor_min_OL"+id).attr("onkeyup","replaceDot_rd(this), replaceZero_rd(this)");
					
		}else if($("#benefit_factor_unit_OL"+id+" option:selected").val() == "CURRENCY" || $("#benefit_factor_unit_OL"+id+" option:selected").val() == "UNIT"){
			if(Number(limit_amountInt) > 999999999.99 || Number(min_limit_amountInt) > 999999999.99){
				$("#benefit_factor_min_OL"+id).addClass("auto");
				$("#benefit_factor_min_OL"+id).attr("maxlength","12");
				
				$("#benefit_factor_min_OL"+id).val("0.00");
				$("#benefit_factor_max_OL"+id).addClass("auto");
				$("#benefit_factor_max_OL"+id).attr("maxlength","12");
			
				$("#benefit_factor_max_OL"+id).val("0.00");
			}else{
				$("#benefit_factor_min_OL"+id).addClass("auto");
				$("#benefit_factor_min_OL"+id).attr("maxlength","12");
				var addCommaMin = numberWithCommas(parseFloat(min_limit_amountInt).toFixed(2));
				$("#benefit_factor_min_OL"+id).val(addCommaMin);
				$("#benefit_factor_max_OL"+id).addClass("auto");
				$("#benefit_factor_max_OL"+id).attr("maxlength","12");
				var addCommaMax = numberWithCommas(parseFloat(limit_amountInt).toFixed(2));
				$("#benefit_factor_max_OL"+id).val(addCommaMax);
			}
			
			$("#benefit_factor_max_OL"+id).attr("onkeyup","replaceDot_rd(this), replaceZero_rd(this)");
			$("#benefit_factor_min_OL"+id).attr("onkeyup","replaceDot_rd(this), replaceZero_rd(this)");
		}
		
	}else{
			$("#benefit_factor_max_OL"+id).attr("maxlength","12");
			$("#benefit_factor_min_OL"+id).attr("maxlength","12");
			
			$("#benefit_factor_max_OL"+id).attr("onkeyup","replaceDot_rd(this), replaceZero_rd(this)");
			$("#benefit_factor_min_OL"+id).attr("onkeyup","replaceDot_rd(this), replaceZero_rd(this)");
	}
	
	
	/*Check Min-Max Val*/
	if($("#benefit_factor_unit_OL"+id+" option:selected").val() == "DAY" || $("#benefit_factor_unit_OL"+id+" option:selected").val() == "WEEK" || $("#benefit_factor_unit_OL"+id+" option:selected").val() == "MONTH" || $("#benefit_factor_unit_OL"+id+" option:selected").val() == "YEAR" || $("#benefit_factor_unit_OL"+id+" option:selected").val() == "HOSPITAL_ADMIT"){
		if(Number(limit_amountInt) != "0" && Number(min_limit_amountInt) != "0"){
			if(Number(min_limit_amountInt) > Number(limit_amountInt)){
				message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
				alertError(message);
				$("#benefit_factor_min_OL"+id).val("0");
				$("#benefit_factor_max_OL"+id).val("0");
				
			}
		}
	}else{
		if(Number(limit_amountInt) != "0.00" && Number(min_limit_amountInt) != "0.00"){
			if(Number(min_limit_amountInt) > Number(limit_amountInt)){

				message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
				alertError(message);
				$("#benefit_factor_min_OL"+id).val("0.00");
				$("#benefit_factor_max_OL"+id).val("0.00");
				
			}
		}
	}
	
	
	
}


function select_unit_option_ol(tbl,id){

	var amount_val = $("#benefit_amount_OL_"+tbl+"_"+id).val();
	var amountInt = replaceComma(amount_val);
	if($("#benefit_unit_OL"+id+" option:selected").val() != "NONE"){
		if($("#benefit_unit_OL"+id).val() == "PERCENT"){

			if(Number(amountInt) > 999.99){
				
				$("#benefit_amount_OL_"+tbl+"_"+id).val("0.00");	
				$("#benefit_amount_OL_"+tbl+"_"+id).attr("data-v-max","999.99");
				
			}else{
				$("#benefit_amount_OL_"+tbl+"_"+id).val(parseFloat(amountInt).toFixed(2));
				$("#benefit_amount_OL_"+tbl+"_"+id).attr("data-v-max","999.99");
				}
			
			$("#benefit_amount_OL_"+tbl+"_"+id+"").attr("onkeyup","replaceDot_rd(this), replaceZero_rd(this)");
			$("#benefit_amount_OL_"+tbl+"_"+id).attr("maxlength","6");
			
			
		}
		if($("#benefit_unit_OL"+id).val() == "CURRENCY" ){
			$("#benefit_amount_OL_"+tbl+"_"+id).attr("data-v-max","999999999.99");
			/*$("#benefit_amount_OL_"+tbl+"_"+id).addClass("autoComma");*/
			var addCommaCur = numberWithCommas(parseFloat(amountInt).toFixed(2));
			$("#benefit_amount_OL_"+tbl+"_"+id).val(addCommaCur);
			$("#benefit_amount_OL_"+tbl+"_"+id).attr("onkeyup","replaceDot_rd(this), replaceZero_rd(this)");
			$("#benefit_amount_OL_"+tbl+"_"+id).attr("maxlength","12");
		}
		if($("#benefit_unit_OL"+id).val() == "UNIT" ){
			$("#benefit_amount_OL_"+tbl+"_"+id).attr("data-v-max","999999999.99");
			var addCommaUn = numberWithCommas(parseFloat(amountInt).toFixed(2));
			$("#benefit_amount_OL_"+tbl+"_"+id).val(addCommaUn);
			$("#benefit_amount_OL_"+tbl+"_"+id).attr("onkeyup","replaceDot_rd(this), replaceZero_rd(this)");
			$("#benefit_amount_OL_"+tbl+"_"+id).attr("maxlength","12");
		}
	}else{
		$("#benefit_amount_OL_"+tbl+"_"+id).attr("data-v-max","999999999.99");
		$("#benefit_amount_OL_"+tbl+"_"+id).attr("onkeyup","replaceDot_rd(this), replaceZero_rd(this)");
		$("#benefit_amount_OL_"+tbl+"_"+id).attr("maxlength","12");
	}
	

}

function select_unit_option_acc_ol(tbl,id){

	var acc_amount = $("#benefit_acc_amount_OL"+id).val();
	var acc_amountInt = replaceComma(acc_amount);
	if($("#benefit_acc_unit_OL"+id).val() != "NONE"){
		if($("#benefit_acc_unit_OL"+id).val() == "DAY" || $("#benefit_acc_unit_OL"+id).val() == "WEEK" || $("#benefit_acc_unit_OL"+id).val() == "MONTH" || $("#benefit_acc_unit_OL"+id).val() == "YEAR" || $("#benefit_acc_unit_OL"+id).val() == "HOSPITAL_ADMIT"){
			if(acc_amountInt.includes(".")){
				
				$("#benefit_acc_amount_OL"+id).addClass("auto");
				var M = Math.trunc(acc_amountInt);
				$("#benefit_acc_amount_OL"+id).val("0");
				$("#benefit_acc_amount_OL"+id).attr("maxlength","3");
				$("#benefit_acc_amount_OL"+id).attr("onkeyup","replaceDotDot_rd(this), replaceZero_rd(this)");
				
			}
		
		}
		
		if($("#benefit_acc_unit_OL"+id).val() == "PERCENT"){
			if(Number(acc_amountInt) > 999.99){
				$("#benefit_acc_amount_OL"+id).addClass("auto");
				$("#benefit_acc_amount_OL"+id).val("0.00");
				$("#benefit_acc_amount_OL"+id).attr("maxlength","6")		
			}else{
				$("#benefit_acc_amount_OL"+id).val(parseFloat(acc_amount).toFixed(2));
				$("#benefit_acc_amount_OL"+id).attr("maxlength","6")	
				$("#benefit_acc_amount_OL"+id).addClass("auto");
			}
				
			$("#benefit_acc_amount_OL"+id).attr("onkeyup","replaceDot_rd(this), replaceZero_rd(this)");
		}
		
		if($("#benefit_acc_unit_OL"+id).val() == "CURRENCY" || $("#benefit_acc_unit_OL"+id).val() == "UNIT"){
			if(Number(acc_amountInt) > 999999999.99){
				$("#benefit_acc_amount_OL"+id).attr("maxlength","12");
				var addComma = numberWithCommas(parseFloat(acc_amountInt).toFixed(2));
				$("#benefit_acc_amount_OL"+id).val("0.00");
				$("#benefit_acc_amount_OL"+id).attr("onkeyup","replaceDot_rd(this), replaceZero_rd(this)");
			}else{
				$("#benefit_acc_amount_OL"+id).attr("maxlength","12");
				var addComma = numberWithCommas(parseFloat(acc_amountInt).toFixed(2));
				$("#benefit_acc_amount_OL"+id).val(addComma);
				$("#benefit_acc_amount_OL"+id).attr("onkeyup","replaceDot_rd(this), replaceZero_rd(this)");
			}
			
		}
	
	}else{
		$("#benefit_acc_amount_OL"+id).val("0.00");
		$("#benefit_acc_amount_OL"+id).attr("maxlength","12");
		$("#benefit_acc_amount_OL"+id).attr("onkeyup","replaceDot_rd(this), replaceZero_rd(this)");
	}
}

function select_unit_option_factor_ol(tbl,id){
	
	var min_limit_amount = $("#benefit_factor_min_OL"+id).val();
	var limit_amount = $("#benefit_factor_max_OL"+id).val();
	var limit_amountInt = replaceComma(limit_amount);
	var min_limit_amountInt = replaceComma(min_limit_amount);
	var limit_unit = $("#benefit_factor_unit_OL"+id+" option:selected").val();
	
	
	if($("#benefit_factor_unit_OL"+id+" option:selected").val() != "NONE"){
		if($("#benefit_factor_unit_OL"+id+" option:selected").val() == "DAY" || $("#benefit_factor_unit_OL"+id+" option:selected").val() == "WEEK" || $("#benefit_factor_unit_OL"+id+" option:selected").val() == "MONTH" || $("#benefit_factor_unit_OL"+id+" option:selected").val() == "YEAR" || $("#benefit_factor_unit_OL"+id+" option:selected").val() == "HOSPITAL_ADMIT"){
			if(limit_amountInt.includes(".") || min_limit_amountInt.includes(".")){
				
				$("#benefit_factor_min_OL"+id).addClass("auto");
				/*var M = Math.trunc(acc_amountInt);*/
				$("#benefit_factor_min_OL"+id).val("0");
				$("#benefit_factor_min_OL"+id).attr("maxlength","3");
				$("#benefit_factor_min_OL"+id).attr("onkeyup","replaceDotDot_rd(this), replaceZero_rd(this)");
				
				$("#benefit_factor_max_OL"+id).addClass("auto");
				/*var M = Math.trunc(acc_amountInt);*/
				$("#benefit_factor_max_OL"+id).val("0");
				$("#benefit_factor_max_OL"+id).attr("maxlength","3");
				$("#benefit_factor_max_OL"+id).attr("onkeyup","replaceDotDot_rd(this), replaceZero_rd(this)");
				
			}
		
		}else if($("#benefit_factor_unit_OL"+id+" option:selected").val() == "PERCENT"){
			if(Number(limit_amountInt) > 999.99 || Number(min_limit_amountInt) > 999.99){
				$("#benefit_factor_min_OL"+id).addClass("auto");
				$("#benefit_factor_min_OL"+id).val("0.00");
				$("#benefit_factor_min_OL"+id).attr("maxlength","6")		
				$("#benefit_factor_max_OL"+id).addClass("auto");
				$("#benefit_factor_max_OL"+id).val("0.00");
				$("#benefit_factor_max_OL"+id).attr("maxlength","6")		
			}else{
				$("#benefit_factor_min_OL"+id).val(parseFloat(min_limit_amount).toFixed(2));
				$("#benefit_factor_min_OL"+id).attr("maxlength","6")	
				$("#benefit_factor_min_OL"+id).addClass("auto");
				$("#benefit_factor_max_OL"+id).val(parseFloat(limit_amountInt).toFixed(2));
				$("#benefit_factor_max_OL"+id).attr("maxlength","6")	
				$("#benefit_factor_max_OL"+id).addClass("auto");
			}
				
		
		}else if($("#benefit_factor_unit_OL"+id+" option:selected").val() == "CURRENCY" ){
			if(Number(limit_amountInt) > 999999999.99 || Number(min_limit_amountInt) > 999999999.99){
				$("#benefit_factor_min_OL"+id).attr("maxlength","12");
				
				$("#benefit_factor_min_OL"+id).val("0.00");
				
				$("#benefit_factor_max_OL"+id).attr("maxlength","12");
				
				$("#benefit_factor_max_OL"+id).val("0.00");
			}else{
				$("#benefit_factor_min_OL"+id).attr("maxlength","12");
				var addCommaMin = numberWithCommas(parseFloat(min_limit_amountInt).toFixed(2));
				$("#benefit_factor_min_OL"+id).val(addCommaMin);
				
				$("#benefit_factor_max_OL"+id).attr("maxlength","12");
				var addCommaMax = numberWithCommas(parseFloat(limit_amountInt).toFixed(2));
				$("#benefit_factor_max_OL"+id).val(addCommaMax);
			}
			
		}else if($("#benefit_factor_unit_OL"+id+" option:selected").val() == "UNIT"){
			if(Number(limit_amountInt) > 999999999.99 || Number(min_limit_amountInt) > 999999999.99){
				$("#benefit_factor_min_OL"+id).attr("maxlength","12");
				
				$("#benefit_factor_min_OL"+id).val("0.00");
				
				$("#benefit_factor_max_OL"+id).attr("maxlength","12");
				
				$("#benefit_factor_max_OL"+id).val("0.00");
			}else{
				$("#benefit_factor_min_OL"+id).attr("maxlength","12");
				var addCommaMin = numberWithCommas(parseFloat(min_limit_amountInt).toFixed(2));
				$("#benefit_factor_min_OL"+id).val(addCommaMin);
				
				$("#benefit_factor_max_OL"+id).attr("maxlength","12");
				var addCommaMax = numberWithCommas(parseFloat(limit_amountInt).toFixed(2));
				$("#benefit_factor_max_OL"+id).val(addCommaMax);
			}
		}
	
	}else{
		$("#benefit_factor_min_OL"+id).val("0.00");
		$("#benefit_factor_min_OL"+id).attr("maxlength","12");
		
		$("#benefit_factor_max_OL"+id).val("0.00");
		$("#benefit_factor_max_OL"+id).attr("maxlength","12");
	}
}

function replaceDotDot_rd(e){
	var value = $(e).val();
	if(value.includes(".")){
		var result = value.replace(/./g,'');
		$(e).val(result)
	}
}
function replaceZero_rd(e){
	var value = $(e).val();
	if(Number(value) == "0"){
		var val = value.replace(/0/g,'');
		$(e).val(val);
		
	}
	
}

function replaceComma(e){
	var result = e.replace(/,/g, "");
	return result;
}

$('#tabBenefitRider_OL').click(function (e) {
	$(".tab-pane").removeClass("active");
	$("#tbl_BenefitOpt2_OL_wrapper").hide();
});

/*open modal*/
$("#benefit_desc_OL").keyup(function(){
	 $("#btn_OpenSaveBenefit_modal1_OL").prop("disabled", false);
	 $("#div_bnfOpt_OL *").prop("disabled", false);
});

$("#benefit_desc_edit_OL").keyup(function(){
	var benefit_desc_edit = $("#benefit_desc_edit_OL").val();
	if(benefit_desc_edit == ""){
		$("#btn_saveBenefit_modal1_OL").prop("disabled", true);
		$('#tbl_BenefitOpt1Edit_OL *').prop("disabled", true);
	}else{
		$("#btn_saveBenefit_modal1_OL").prop("disabled", false);
		$('#tbl_BenefitOpt1Edit_OL *').prop("disabled", false);
	}
});

$("#tbl_BenefitOpt2Sub_OL input[name='opt1sub_benefitdetail_OL[]']").change(function(){
	$('#btn_SaveEditBenefit1_OL').prop("disabled", false);
});

$("#tbl_BenefitOpt2SubEdit_OL input[name='opt1_benefitdetail_edit_OL[]']").change(function(){
	$('#btn_SaveEditBenefit2_OL').prop("disabled", false);
});

$(document).on("click", ".open-SelectBenefitDialog_OL", function () {	
    var tabmyId = $("#tabBenefitRider_OL>li.active").attr('id');
    var myId = tabmyId.replace("tab","");   
    var lastParent = $("#tbl_"+myId).find("tbody>tr[data-parent='0']:last").attr("data-id");
    $(".modal-body #BCID_benefitOL").val( myId );   
    $(".modal-body #ParentID_benefitOL").val( lastParent ); 
    $(".modal-body #BCID_benefitOL_old").val( myId );
    
    $('#modal_selectCoverage_OL').modal('show');
    
    $("#benefit_desc_OL").val("").prop("disabled", false);
    $('.datatbl_BenefitOpt1'+myId+'_OL').css("display","block");
    $('#tbl_BenefitOpt1'+myId+'_OL').show();
    $("#tbl_BenefitOpt1"+myId+"_OL input[type='checkbox']").prop("checked", false);
    $("#select_benefit1_OL").prop("checked", true);
    $("#tbl_BenefitOpt1"+myId+"_OL *").prop("disabled", true);
    $("#btn_OpenSaveBenefit_modal1_OL").prop("disabled", true);
    
    $("#tbl_BenefitOpt2_OL input[type='radio']").prop("checked", false);
    $('#tbl_BenefitOpt2Sub_OL').hide();
    $('.datatbl_BenefitOpt2Sub_OL').css("display","none");
    $("#tbl_BenefitOpt2Sub_OL input[type='checkbox']").prop("checked", false);
    //$("#btn_SaveEditBenefit1").prop("disabled", true);
    
    var val = [], val_tbl1 = [], val_tbl2 = [];
    var a=0, a1=0, a2=0;
    $("#tbl_"+myId+" tbody>tr").each(function(){
    	a++;
    	val[a] = $(this).find("td:nth-child(3)").text();
    	
    	//$("#tbl_BenefitOpt1_OL input[name='opt1_benefitdetail_OL[]']").each(function(){
    	$("#tbl_BenefitOpt1"+myId+"_OL input[name='opt1_benefitdetail_OL[]']").each(function(){
    		a1++;
    		val_tbl1[a1] = $(this).val().split(",");
    		
    		if(val_tbl1[a1][0] == val[a]){
    			//alert(val_tbl1[a1][0]+">>"+val[a]);
    			$(this).closest('tr').hide();
    		}
    	});
    	
    	$("#tbl_BenefitOpt2_OL input[name='opt2_benefitdetail_OL[][]']").each(function(){
    		a2++;
    		val_tbl2[a2] = $(this).val().split(",");
    		if(val_tbl2[a2][0] == val[a]){
    			$(this).closest('tr').hide();
    		}
    	});    	
    }); 
    
    /*เคลียร์ตาราง*/
    if($("#tbl_"+myId+" tbody>tr").length <= 0){
    	$("#tbl_BenefitOpt1"+myId+"_OL input[name='opt1_benefitdetail_OL[]']").prop("checked", false);
    	$("#tbl_BenefitOpt1"+myId+"_OL tbody>tr").closest('tr').show();
    	
    	$("#tbl_BenefitOpt2_OL input[name='opt2_benefitdetail_OL[]']").prop("checked", false);
    	$("#tbl_BenefitOpt2_OL tbody>tr").closest('tr').show();
    	
    	$("#tbl_BenefitOpt2Sub_OL input[name='opt1sub_benefitdetail_OL[]']").prop("checked", false);
    	$("#tbl_BenefitOpt2Sub_OL tbody>tr").closest('tr').show();
    	
    	$("#tbl_BenefitOpt1Edit_OL input[name='opt1_benefitdetail_edit_OL[]']").prop("checked", false);
    	$("#tbl_BenefitOpt1Edit_OL tbody>tr").closest('tr').show();
    	
    	$("#tbl_BenefitOpt2Edit_OL input[name='opt2_benefitdetail_edit_OL[]']").prop("checked", false);
    	$("#tbl_BenefitOpt2Edit_OL tbody>tr").closest('tr').show();
    	
    	$("#tbl_BenefitOpt2SubEdit_OL input[name='opt1_benefitdetail_edit_OL[]']").prop("checked", false);
    	$("#tbl_BenefitOpt2SubEdit_OL tbody>tr").closest('tr').show();  	
    }    
});

$(document).on("click", ".open-EditBenefitDialog_OL", function () {	
	
	/*ADD New*/
	var tabmyId = $("#tabBenefitRider_OL>li.active").attr('id');
    var myId = tabmyId.replace("tab","");  
    $(".modal-body #BCID_benefitOL_edit").val( myId );   
   
    var tbl_row = "";
	$("#div_bnfOptEdit_OL>div").remove();

	tbl_row = "<div class='datatbl_BenefitOpt1Edit"+myId+"_OL'>"+
	  "<table class='table table-bordered' id='tbl_BenefitOpt1Edit"+myId+"_OL'>"+
    "<thead>"+
	  "<tr class='bg-primary'>"+
		"<th class='text-center' width='10%' style='border-right:none; vertical-align:middle;'>เลือก</th>"+
		"<th class='text-center' width='20%' style='border-right:none;'>รหัสความคุ้มครอง</th>"+
		"<th class='text-center' width='70%' style='vertical-align:middle;'>ความคุ้มครอง</th>"+									
	  "</tr>"+
	  "</thead>"+
	  "<tbody>"+
	  "</tbody>"+
	  "</table>"+
	  "<div class='text-center' style='padding: 10px 0'></div>"+	
		"<div class='row' align='center'>"+						
			"<button type='button' class='btn btn-primary' style='margin-right:5px;' id='btn_saveBenefit_modal1' onclick=\"saveBenefitValueEditOL_popup();\">ตกลง</button>"+						
			"<button type='button' class='btn btn-primary' data-dismiss='modal'>ยกเลิก</button>"+												
		"</div>"+
	"</div>";

	tbl_row += "<div class='datatbl_BenefitOpt2Edit"+myId+"_OL displayNone'>"+
			"<table class='table table-bordered' id='tbl_BenefitOpt2Edit"+myId+"_OL'>"+
			"<thead>"+
			"<tr class='bg-primary'>"+
			"<th class='text-center' width='10%' style='border-right:none; vertical-align:middle;'>เลือก</th>"+
			"<th class='text-center' width='20%' style='border-right:none;'>รหัสความคุ้มครอง</th>"+
			"<th class='text-center' width='70%' style='vertical-align:middle;'>ความคุ้มครอง</th>"+									
			"</tr>"+
			"</thead>"+
			"<tbody>"+
			"</tbody>"+
			"</table>"+
			"<div class='text-center' style='padding: 10px 0'></div></div>";
	
	tbl_row += "<div class='datatbl_BenefitOpt2SubEdit"+myId+"_OL'>"+
			"<table class='table table-bordered' id='tbl_BenefitOpt2SubEdit"+myId+"_OL'>"+
			"<thead>"+
			"<tr class='bg-primary'>"+
			"<th class='text-center' width='10%' style='border-right:none; vertical-align:middle;'>เลือก</th>"+
			"<th class='text-center' width='20%' style='border-right:none;'>รหัสความคุ้มครอง</th>"+
			"<th class='text-center' width='70%' style='vertical-align:middle;'>ความคุ้มครอง</th>"+								
			"</tr>"+
			"</thead>"+
			"<tbody>"+				
			"</tbody>"+
			"</table>"+
			"<div class='text-center' style='padding: 10px 0'></div>"+	
			"<div class='row' align='center'>"+						
				"<button type='button' class='btn btn-primary' style='margin-right:5px;' id='btn_SaveEditBenefit2' onclick=\"saveBenefitValueEditOL_popup();\">ตกลง</button>"+						
				"<button type='button' class='btn btn-primary' data-dismiss='modal'>ยกเลิก</button>"+												
			"</div>"+
			"</div>";
	$("#div_bnfOptEdit_OL").append(tbl_row);
	
	
	var dataType = $(this).attr('data-type');
    var dataID = $(this).attr('data-id');
    var dataName = $(this).attr('data-topic');
    var id_coverage = $(this).parent().parent().find('td:nth-child(3)').text();
    var text_coverage = $(this).parent().parent().find('td:nth-child(4) a').text();
    
	/*get lookup*/
	var id = $("#tabBenefitRider_OL").find('.active a').text();
	var tbl = $("#tabBenefitRider_OL").find('.active').attr("id");
		tbl = tbl.replace("tab","");
	
	var data_json = {
			"method": "get_Benefit_RiderCL",
        	"bnf_cat_code": id
        }
	$.ajax({
        type: "POST",    
        url : "RiderCL_GetData_Servlet",
        data: data_json,      
        success : function(response) {	
        	add_rowBenefitRider_OL(response,tbl,"edit");
        	
        	/****************************/
        	$("#OptSub_benefitedit_OL").val(id_coverage+","+text_coverage)
        	
        	/*var tabmyId = $("#tabBenefitRider_OL>li.active").attr('id');
            var myId = tabmyId.replace("tab","");  
            $(".modal-body #BCID_benefitOL_edit").val( myId );   
           */    
            //edit
            
            var listgroup_count = $("#tbl_"+myId).find("tbody>tr[data-group='"+dataID+"']").length;    
            var $table = $("#tbl_"+myId);
            
            var val = [];
        	var val_chk = [];
        	var val_row = [];
        	var j = 0;
        	
        	var val2 = [];
        	var val_chk2 = [];
        	var k = 0;
        	
        	var val3 = [];
        	var val_chk3 = [];
        	var l = 0;
        	
        	var val4 = [];
        	var val_chk4 = [];
        	var m = 0;
        	
        	var val_sub = [];
        	var val_chk_sub = [];
        	var jj = 0;
        	
        	var val_oldsave = [];	
        	
        	if(dataType == 1){		
        		var rows = $table.find("tr[data-group='"+dataID+"']");
        	    rows.each(function (index, row) {
        	    	
        	    	var
        	        $row = $(row),     
        	        id = $row.attr('id'),
        	        CodeName = $row.find('td:nth-child(3)').html(),
        	        CodeDesc = $row.find('td:nth-child(4)').html();        
        	        	   
        	    	//edit กลุ่มของความคุ้มครอง    	
        	    	$("#tbl_BenefitOpt1Edit"+myId+"_OL tbody>tr").each(function(){
        	    		j++				
        	    		val[j] = $(this).find("input[name='opt1_benefitdetail_edit_OL[]']").val();
        	    		val_chk[j] = $(this).find("input[name='opt1_benefitdetail_edit_OL[]']").val().split(",")
        	    		    
        	    		if(val_chk[j][0] == CodeName){
        	    		   $(this).closest('tr').show();
        	    		   $(this).find("input[name='opt1_benefitdetail_edit_OL[]']").prop("checked", true);
        	    		   val_oldsave.push(val_chk[j][0]);
        	    		}
        	    	});
        	    		//val_oldsave.join(",");
        	    });
        	    var data_oldsave = $("#data_oldsave_OL").val(val_oldsave);
        	    
        	   // เช็คว่าเลือกซ้ำไม่ได้
        	    var rows2 = $table.find("tr[data-group!='"+dataID+"']");
        	    rows2.each(function (index2, row2) {
        	    	var
        	        $row2 = $(row2),     
        	        id2 = $row2.attr('id'),
        	        level2 = $row2.data('level'),
        	        CodeName2 = $row2.find('td:nth-child(3)').html();      
        	        	   
        	    	//remove กลุ่มของความคุ้มครอง   
        	    		$("#tbl_BenefitOpt1Edit"+myId+"_OL tbody>tr").each(function(){
        	    			k++				
        	    		    val2[k] = $(this).find("input[name='opt1_benefitdetail_edit_OL[]']").val();
        	    		    val_chk2[k] = $(this).find("input[name='opt1_benefitdetail_edit_OL[]']").val().split(",")
        	    		    
        	    		    if(val_chk2[k][0] == CodeName2){	    		  
        	    		    	$(this).closest('tr').hide();
        	    		    }
        	    		});
        	    		
        	    		$("#tbl_BenefitOpt2Edit"+myId+"_OL tbody>tr").each(function(){
        	    			l++				
        	    		    val3[l] = $(this).find("input[name='opt2_benefitdetail_edit_OL[]']").val();
        	    		    val_chk3[l] = $(this).find("input[name='opt2_benefitdetail_edit_OL[]']").val().split(",")
        	    		    
        	    		    if(val_chk3[l][0] == CodeName2){	    		  
        	    		    	$(this).closest('tr').hide();
        	    		    }
        	    		});
        	    		
        	    		$("#tbl_BenefitOpt2SubEdit"+myId+"_OL tbody>tr").each(function(){
        	    			m++				
        	    		    val4[m] = $(this).find("input[name='opt1_benefitdetail_edit_OL[]']").val();
        	    		    val_chk4[m] = $(this).find("input[name='opt1_benefitdetail_edit_OL[]']").val().split(",")
        	    		    
        	    		    if(val_chk4[m][0] == CodeName2){	    		  
        	    		    	$(this).closest('tr').hide();
        	    		    }
        	    		});
        	    });	    
        	    
        	}else if(dataType == 2){		
        		var rows = $table.find("tr[data-id='"+dataID+"']");
        		rows.each(function (index, row) {
        	    	var
        	        $row = $(row),     
        	        id = $row.attr('id'),
        	        CodeName = $row.find('td:nth-child(3)').html(),
        	        CodeDesc = $row.find('td:nth-child(4)').html();        
        	        
        	    	//edit กลุ่มของความคุ้มครอง    	
        	    		$("#tbl_BenefitOpt2Edit"+myId+"_OL tbody>tr").each(function(){
        	    			j++				
        	    		    val[j] = $(this).find("input[name='opt2_benefitdetail_edit_OL[]']").val();
        	    		    val_chk[j] = $(this).find("input[name='opt2_benefitdetail_edit_OL[]']").val().split(",")
        	    		    val_row[j] = $(this);
        	    		    
        	    		    if(val_chk[j][0] == CodeName){	    		    		    		    	
        	    		    	$(this).closest('tr').show();
        	 	    		    $(this).find("input[name='opt2_benefitdetail_edit_OL[]']").prop("checked", true);	    	    		    	
        	    		    }else{
        	    		    	var a=0, CodeNameDiff = [];
        	    		    	$("#tbl_"+myId+" tbody>tr[data-id!='"+dataID+"']").each(function(){
        	    		    		a++;
        	    		    		CodeNameDiff[a] = $(this).find("td:nth-child(3)").html();
        	    		    		if(val_chk[j][0] == CodeNameDiff[a]){
        	    		    			val_row[j].hide();
        	    		    		}
        	    		    	});
        	    		    }
        	    		});	
        	    		
        	    		/*// เพิ่มข้อมูลลงในตาราง จากที่กด Edit
        	    		var rowEdit = "<tr>"+
    					"<td class='text-center'><input type='radio' id='opt2_benefitdetail0_edit_OL' name='opt2_benefitdetail_edit_OL[]' onclick='displayBenefitValueOptionEditOL_popup(this.value);' class='chk_rd' value='"+id_coverage+","+text_coverage+"' checked></td>"+
    					"<td class='text-center'>"+id_coverage+"</td>"+
    					"<td class='text-left'>"+text_coverage+"</td>"+									
    				"</tr>";
    				
        	    		$("#tbl_BenefitOpt2Edit_OL").append(rowEdit);*/
        	    });
        				
        		var rows_sub = $table.find("tr[data-group='"+dataID+"']");
        		rows_sub.each(function (index_sub, row_sub) {
        	    	var
        	        $row_sub = $(row_sub),     
        	        id_sub = $row_sub.attr('id'),
        	        CodeNameSub = $row_sub.find('td:nth-child(3)').html(),
        	        CodeDescSub = $row_sub.find('td:nth-child(4)').html();        
        	        
        	    	//edit กลุ่มของความคุ้มครอง    	
        	    		$("#tbl_BenefitOpt2SubEdit"+myId+"_OL tbody>tr").each(function(){
        	    			jj++				
        	    		    val_sub[j] = $(this).find("input[name='opt1_benefitdetail_edit_OL[]']").val();
        	    		    val_chk_sub[j] = $(this).find("input[name='opt1_benefitdetail_edit_OL[]']").val().split(",")
        	    		    
        	    		    if(val_chk_sub[j][0] == CodeNameSub){
        	    		    	$(this).closest('tr').show();
        	    		    	$(this).find("input[name='opt1_benefitdetail_edit_OL[]']").prop("checked", true);
        	    		    	val_oldsave.push(val_chk_sub[j][0]);
        	    		    }
        	    		});			       
        	    });
        		var data_oldsave = $("#data_oldsave_OL").val(val_oldsave);		
        		
        	}

            $(".modal-body #dataID_OL").val( dataID ); 
            $(".modal-body #dataName_OL").val( dataName );    
            
            $(".datatbl_BenefitOpt2SubEdit"+myId+"_OL").css("display","none");
        	$("#tbl_BenefitOpt2SubEdit"+myId+"_OL").hide();
            
            if(dataType == 1){
            	var benefit_desc_edit = $("#benefit_desc_edit_OL").val( dataName );
            	$("#benefit_desc_edit_OL").prop("disabled", false);
            	
            	if(benefit_desc_edit == ""){
            		$('#tbl_BenefitOpt1Edit'+myId+'_OL *').prop("disabled", true);
            	}else{
            		$('#tbl_BenefitOpt1Edit'+myId+'_OL *').prop("disabled", false);
            	}
            	
            	$('.datatbl_BenefitOpt1Edit'+myId+'_OL').css("display","block");
            	$('#tbl_BenefitOpt1Edit'+myId+'_OL').show();
            	$("#select_benefit1_OL_edit").prop("checked", true);
            	
            	$('.datatbl_BenefitOpt2Edit'+myId+'_OL').css("display","none");
             	$('#tbl_BenefitOpt2Edit'+myId+'_OL').hide();    	
             	$("#tbl_BenefitOpt2Edit"+myId+"_OL input[name='opt2_benefitdetail_edit_OL[]']").prop("checked", false);
             	
             	$("#btn_saveBenefit_modal1_OL").prop("disabled", false);
            	
            }else if(dataType == 2){    	    	
        	    $("#select_benefit2_OL_edit").prop("checked", true);
        	    $('.datatbl_BenefitOpt2Edit'+myId+'_OL').css("display","block");
            	$('#tbl_BenefitOpt2Edit'+myId+'_OL').show();	
        	    
        	    $("#select_benefit1_OL_edit").prop("checked", false);
        	    $("#benefit_desc_edit_OL").val("");
        	    $("#benefit_desc_edit_OL").prop("disabled", true);
        	    $('.datatbl_BenefitOpt1Edit'+myId+'_OL').css("display","none");
            	$('#tbl_BenefitOpt1Edit'+myId+'_OL').hide();
            	
            	$("#btn_SaveEditBenefit2_OL").prop("disabled", false);
            	
            /*	 $("#select_benefit2_CL_edit").prop("checked", true);
          	    $('.datatbl_BenefitOpt2SubEdit_CL').css("display","block");
              	$('#tbl_BenefitOpt2SubEdit_CL').show();	
              	
          	    $("#select_benefit1_CL_edit").prop("checked", false);
          	    $("#benefit_desc_edit").val("");
          	    $("#benefit_desc_edit").prop("disabled", true);
          	    $('.datatbl_BenefitOpt2SubEdit_CL').css("display","none");
              	$('#tbl_BenefitOpt2SubEdit_CL').hide();*/
              	
        	  }
        	
            
            $('#modal_editCoverage_OL').modal('show');     
        	//****************************//*
       	
        	
        },
        error : function(response) {	
        	console.log("get_Benefit_RiderOL error");
        }
	});
	 
});

/*edit เลือกความคุ้มครอง*/
function saveBenefitValueEditOL_popup(){	
	
	var select_benefit1_OL = $('#select_benefit1_OL_edit').prop('checked');
	var select_benefit2_OL = $('#select_benefit2_OL_edit').prop('checked');
	var BCID = $("#BCID_benefitOL_edit").val();
	var flag_disease = $("#tab_content_"+BCID).data("flag");
	/*edit กลุ่มของความคุ้มครอง*/
	var tbl_modal = "";
	if(select_benefit1_OL){
		tbl_modal = "tbl_BenefitOpt1Edit"+BCID+"_OL";
		type = 1;
	}else if(select_benefit2_OL){
		tbl_modal = "tbl_BenefitOpt2SubEdit"+BCID+"_OL";
		type = 2;
	}
	
	var ParentID = $("#ParentID_benefitOL_edit").val();
	var benefit_desc = $("#benefit_desc_edit_OL").val();
/*	var BCID = $("#BCID_benefitOL_edit").val();*/
	var dataID = $("#dataID_OL").val();
	/*opt sub*/
	var OptSub_benefitOL = $("#OptSub_benefitedit_OL").val();
		OptSub_benefitOL = OptSub_benefitOL.split(",")
	var OptSub_BCID = OptSub_benefitOL[0];	
	var OptSub_name = OptSub_benefitOL[1];	
	
	if((type == 1  && benefit_desc != "") || type == 2){	
		if(type == 1){
			$("#tbl_"+BCID+">tbody>tr[data-id="+dataID+"]>td:nth-child(3)").html("Group");
			$("#tbl_"+BCID+">tbody>tr[data-id="+dataID+"]>td:nth-child(4)").html("<a class='open-EditBenefitDialog_OL' data-toggle='modal' href='#modal_editCoverage_OL'  data-id='"+dataID+"' data-topic='"+benefit_desc+"' data-type='1'>"+benefit_desc+"</a>");
		}else if(type ==2){
			$("#tbl_"+BCID+">tbody>tr[data-id="+dataID+"]>td:nth-child(3)").html(OptSub_BCID);
			$("#tbl_"+BCID+">tbody>tr[data-id="+dataID+"]>td:nth-child(4)").html("<a class='open-EditBenefitDialog_OL' data-toggle='modal' href='#modal_editCoverage_OL'  data-id='"+dataID+"' data-topic='"+OptSub_name+"' data-type='2' data-code='"+OptSub_BCID+"'>"+OptSub_name+"</a>");
		}		
	}
	
	/*sub*/
	var count_sub = $("#tbl_"+BCID+">tbody>tr[data-group="+dataID+"]").length;
	//var count_sub_modal_checked = $("#"+tbl_modal+" input[name='opt1_benefitdetail_edit[]']:checked").length;
	
	var $table = $("#tbl_"+BCID);
	var rowsNumber = $table.find("tr[data-id='"+dataID+"']>td:nth-child(2)>span").html();
	var rows = $table.find("tr[data-group='"+dataID+"']");
	var val = [];
	var val_chk = [];	
	var new_row = "";
	
	
	if(count_sub > 0){
		//alert($("#tbl_"+BCID+">tbody>tr[data-group="+dataID+"]:last").attr("id"));		
		var j = Number($("#tbl_"+BCID+">tbody>tr[data-group="+dataID+"]:last").attr("data-id").replace(dataID+"_", ""));
		var jj = Number($("#tbl_"+BCID+">tbody>tr[data-group="+dataID+"]:last").attr("data-id").replace(dataID+"_", ""));	
	}else{
		var j = 0;
		var jj = 0;
	}
	
    	var value_chk_new = [];
    	var value_chk_old = $("#data_oldsave_OL").val();
	   	
    	var value_check_diff = [];
    	var value = [];
	 	 	value = value_chk_old.split(",");
	 	
	    for(var i=0; i<value.length; i++){		 
	    	value_check_diff.push(value[i]);	 
	 	}
	    
	    var save_diff = [];
	    var save_diff_data = "";
	    var save_diff_split = "";
    	$("#"+tbl_modal+" input[name='opt1_benefitdetail_edit_OL[]']:checked").each(function(){   			
    			j++				
    		    val[j] = $(this).val();
    		    val_chk[j] = $(this).val().split(",")   
    		      		    
    		    /*check กับค่าเก่าว่าซ้ำมั๊ย*/    		    		    	  		    
    		    value_chk_new.push(val_chk[j][0]);	 
 		     		    	
   		    	value_chk_new.map(function(item){
    		  		  if(!value_chk_old.includes(item)){
    		  			  save_diff.push(item);
    		  		    }
    		  	});
   		    	save_diff_data = save_diff.join(",");
   		    	save_diff_split = save_diff_data.split(",");
   		    	
   		    	if(save_diff != ""){
   		    		
   		    	for(var m=0; m<save_diff_split.length; m++){
   		    	   		       		    	
   		    		if(val_chk[j][0] == save_diff_split[m]){
   		    			
	    		    var numberImgOK_Sub = dataID+"_"+j;   	
	    		    /****************start lookup*************************/
	    			var lookup_unit = $("#lookup_unit_OL").val();
	    				lookup_unit = lookup_unit.split(",");
	    			var lookup_frequency = $("#lookup_frequency_OL").val();
	    				lookup_frequency = lookup_frequency.split(",");
	    			var lookup_factorunit = $("#lookup_factor_unit_OL").val();
	    				lookup_factorunit = lookup_factorunit.split(",");
	    			var lookup_fac_unit_new = $("#lookup_unit_factor_OL").val();
	    				lookup_fac_unit_new = lookup_fac_unit_new.split(",");
	    			var lookup_factorScope = $("#lookup_factorScope_OL").val();
	    				lookup_factorScope = lookup_factorScope.split(",");
	    			var unit_factor_new = $("#lookup_unit_factor_OL").val();
	    				unit_factor_new = unit_factor_new.split(",");
	    				
	    			// unit
	    			var pass = 0;
	    			var text = 1;
	    			var option_unit = "";
	    			for(i = 0 ; i < lookup_unit.length/2 ; i++){
	    				var row_unit = "<option value='"+lookup_unit[pass]+"'>"+lookup_unit[text]+"</option>"
	    				pass = Number(parseInt(pass) + parseInt(2));
	    				text = Number(parseInt(text) + parseInt(2));
	    				option_unit += row_unit
	    			}
	    			
	    			// frequency
	    			var pass = 0;
	    			var text = 1;
	    			var option_frequency = "";
	    			for(i = 0 ; i < lookup_frequency.length/2 ; i++){
	    				var row_frequency = "<option value='"+lookup_frequency[pass]+"'>"+lookup_frequency[text]+"</option>"
	    				pass = Number(parseInt(pass) + parseInt(2));
	    				text = Number(parseInt(text) + parseInt(2));
	    				option_frequency += row_frequency
	    				
	    			}
	    			
	    			// factor unit
	    			var pass = 0;
	    			var text = 1;
	    			var option_fac_unit = "";
	    			for(i = 0 ; i < lookup_factorunit.length/2 ; i++){
	    				var row_factorunit = "<option value='"+lookup_factorunit[pass]+"'>"+lookup_factorunit[text]+"</option>"
	    				pass = Number(parseInt(pass) + parseInt(2));
	    				text = Number(parseInt(text) + parseInt(2))
	    				option_fac_unit += row_factorunit
	    			}
	    			
	    			var pass = 0;
	    			var text = 1;
	    			var option_scope = "";
	    			for(i = 0 ; i < lookup_factorScope.length/2 ; i++){
	    				var row_option_scope = "<option value='"+lookup_factorScope[pass]+"'>"+lookup_factorScope[text]+"</option>"
	    				pass = Number(parseInt(pass) + parseInt(2));
	    				text = Number(parseInt(text) + parseInt(2));
	    				option_scope += row_option_scope
	    			}
	    			
	    			var pass = 0;
	    			var text = 1;
	    			var option_factor_new = "";
	    			for(i = 0 ; i < unit_factor_new.length/2 ; i++){
	    				var row_factor_new = "<option value='"+unit_factor_new[pass]+"'>"+unit_factor_new[text]+"</option>"
	    				pass = Number(parseInt(pass) + parseInt(2));
	    				text = Number(parseInt(text) + parseInt(2));
	    				option_factor_new += row_factor_new
	    			}
	    			
	    		    
	    		    new_row += "<tr id='tbody_benefitL_OL"+dataID+"_"+j+"' data-id='"+dataID+"_"+j+"' data-parent='1' data-level='2' data-group='"+dataID+"'>"+
 				   "<td class='text-center borderBlack'></td>"+
 				   "<td class='text-center borderBlack vertical-middle'><span class='spanBenefitsub_OL'>"+rowsNumber+"</span>."+j+"</td>"+
 				   "<td class='text-center borderBlack vertical-middle'>"+val_chk[j][0]+"</td>"+
 				   "<td class='borderBlack vertical-middle'>"+val_chk[j][1]+"</td>";
	    			
	    		    new_row += "<td class='borderBlack vertical-middle'>"+
	    			   "<input name='benefit_amount_OL_"+BCID+"[]' id='benefit_amount_OL_"+BCID+"_"+numberImgOK_Sub+"' type='text' class='form-control margin-padding0 text-center width40px' onkeypress='validate(event);' onblur='replaceBlank(this);' value='0.00' data-v-min='0.00' data-v-max='999999999.99'>	"+											
	    			   "</td>"+
	    			   "<td width='100px' class='borderBlack vertical-middle'>"+
	    			   "<select class='form-control width-initial lookup-unit' style='margin: 0;width: 100%;' id='benefit_unit_OL"+numberImgOK_Sub+"' >"+
	    				   "<option value='NONE' selected>None</option>"+option_unit+
	    			   "</select>"+												
	    			   "</td>"+
	    			   "<td width='100px' class='borderBlack vertical-middle'>"+
	    			   "<select class='form-control width-initial lookup-frequency' style='margin: 0;width: 100%;' id='benefit_fund_OL"+numberImgOK_Sub+"'>"+
	    			   "<option value='NONE' selected>None</option>"+option_fac_unit+
	    			   "</select>"+												
	    			   "</td>"+
	    			   "<td width='100px' class='borderBlack vertical-middle'>"+
	    			   "<select class='form-control width-initial lookup-frequency' style='margin: 0;width: 100%;' id='benefit_fq_OL"+numberImgOK_Sub+"'>"+
	    				   "<option value='NONE' selected>None</option>"+option_frequency+
	    			   "</select>"+
	    			   "</td>";
//	    			   "<td width='100px' class='borderBlack text-center vertical-middle'><div class='input-group col-xs-12'><div class='list_coverage'>None</div><a class='open-SelectCoverageDialog_OL' data-toggle='modal' data-id='"+dataID+"_"+j+"' href='#modal_TableCoverage_OL'><button class='btn btn-default btn-primary float-right' type='button' id='btn_benefit"+BCID+"_"+numberImgOK_Sub+"_OL'>...</button></a></div></td>"+
	    			  if(flag_disease == true){
	    				  new_row += "<td width='70px' class='text-center borderBlack vertical-middle'><input type='checkbox' id='is_benefit_contract_OL"+numberImgOK_Sub+"'></td>"+
						   "<td width='70px' class='text-center borderBlack vertical-middle'><input type='checkbox' id='is_benefit_cv_OL"+numberImgOK_Sub+"'></td>";
						   
	    			  }
	    			  new_row +=  "<td width='100px' class='borderBlack vertical-middle'><textarea class='form-control' id='benefit_remark_OL"+numberImgOK_Sub+"'></textarea></td>"+
	    			   "<td width='100px' class='borderBlack vertical-middle'>"+
	    			   "<input name='benefit_factor_min_OL"+numberImgOK_Sub+"' id='benefit_factor_min_OL"+numberImgOK_Sub+"' type='text' class='form-control margin-padding0 text-center width40px' onkeypress='validate(event);' onblur='replaceBlank(this);' value='0.00' data-v-min='0.00' data-v-max='999999999.99'>"+		   
	    			   "</td>"+
	    			   "<td width='100px' class='borderBlack vertical-middle'>"+
	    			   "<input name='benefit_factor_max_OL"+numberImgOK_Sub+"' id='benefit_factor_max_OL"+numberImgOK_Sub+"' type='text' class='form-control margin-padding0 text-center width40px' onkeypress='validate(event);' onblur='replaceBlank(this);' value='0.00' data-v-min='0.00' data-v-max='999999999.99'>"+
	    			   "</td>"+
	    			   "<td width='100px' class='borderBlack vertical-middle'>"+
	    			   "<select class='form-control width-initsial lookup-factor-unit' style='margin: 0;width: 100%;' id='benefit_factor_unit_OL"+numberImgOK_Sub+"'>"+
	    				   "<option value='NONE' selected>None</option>"+option_factor_new+
	    			   "</select>"+
	    			   "</td>"+
	    			   "<td width='100px' class='borderBlack vertical-middle'>"+
	    			   "<select class='form-control width-initial lookup-frequency' style='margin: 0;width: 100%;' id='benefit_factor_to_OL"+numberImgOK_Sub+"'>"+
	    			   "<option value='NONE' selected>None</option>"+option_scope+	
	    			   "</select>"+
	    			   "</td>"+
	    			   "<td width='100px' class='borderBlack vertical-middle'>"+
	    			   "<input name='benefit_acc_amount_OL"+numberImgOK_Sub+"' id='benefit_acc_amount_OL"+numberImgOK_Sub+"' type='text' class='form-control margin-padding0 text-center width40px' onkeypress='validate(event);' onblur='replaceBlank(this);' value='0.00' data-v-min='0.00' data-v-max='999999999.99'>"+		   
	    			   "</td>"+
	    			   "<td width='100px' class='borderBlack vertical-middle'>"+
	    			   "<select class='form-control width-initial lookup-unit' style='margin: 0;width: 100%;' id='benefit_acc_unit_OL"+numberImgOK_Sub+"'>"+
	    				   "<option value='NONE' selected>None</option>"+option_factor_new+
	    			   "</select>"+
	    			   "</td>"+
	    			   "</tr>";
	
   		    		}
   		    	}
   		    }
    	});	
    	 
    	 var value_chk_new_array = value_chk_new.join(",");
    	 
    	var count_sub_modal = $("#"+tbl_modal+" input[name='opt1_benefitdetail_edit_OL[]']:checked").length;
    	
    	var save_diff_del = [];    	
    	value_check_diff.map(function(item){
	    	if(!value_chk_new.includes(item)){
	    		save_diff_del.push(item);
	  		}
	    });
	    
	    var data_diff_del = save_diff_del.join(",");
    	if(count_sub_modal < count_sub){
    		var save_diff_del_split = data_diff_del.split(",");
    		for(var a=0; a<save_diff_del_split.length; a++){
    			$("#tbl_"+BCID+">tbody>tr[data-group='"+dataID+"']").each(function(){
    				var code_old = $(this).find("td:nth-child(3)").text();
    				if(save_diff_del_split[a] == code_old){
    					/*ต้อง remove*/
    					$(this).closest('tr').remove();
    				}
    			});   			
    		}
    		
    	}else{   					
    			var save_diff_split = value_chk_new_array.split(",");
    			var k = 0, l = 0;
    			var value_each_chk = [];
    			
        		for(var aa=0; aa<save_diff_split.length; aa++){        		
        			$("#tbl_"+BCID+">tbody>tr[data-group='"+dataID+"']").each(function(){	
        				var tbl_sub_id = $(this).attr("id");
        				var code_old2 = $(this).find("td:nth-child(3)").text();
        				
        				if(type == 1){
	        				$("#tbl_BenefitOpt1Edit"+BCID+"_OL input[name='opt1_benefitdetail_edit_OL[]']").each(function(){
	        						k++;	       		    		   
	        		    		    value_each_chk[k] = $(this).val().split(",")        					
	        						//alert(value_each_chk[k][0]+"old "+code_old2);
	        						
		        					if (($(this).prop('checked')==false) && (value_each_chk[k][0] == code_old2)){ 	
		        						/*ต้อง remove*/
		        						$("#tbl_"+BCID+">tbody>tr[id='"+tbl_sub_id+"']").closest('tr').remove();
		        					}
	        				});
        				}
        				
        				if(type == 2){
	        				$("#tbl_BenefitOpt2SubEdit"+BCID+"_OL input[name='opt1_benefitdetail_edit_OL[]']").each(function(){
	        						l++;	       		    		   
	        		    		    value_each_chk[l] = $(this).val().split(",")        					
	        						//alert(value_each_chk[k][0]+"old "+code_old2);
	        						
		        					if (($(this).prop('checked')==false) && (value_each_chk[l][0] == code_old2)){ 
		        						/*ต้อง remove*/
		        						$("#tbl_"+BCID+">tbody>tr[id='"+tbl_sub_id+"']").closest('tr').remove();
		        					}
	        				});
        				}
        			});   			
        		}
        		
    	}
    	
    	/*add row*/
    	var count_sub2 = $("#tbl_"+BCID+">tbody>tr[data-group="+dataID+"]").length;

		if(count_sub2 > 0 && count_sub2 != "undefined"){				
			$(new_row).insertAfter($("#tbl_"+BCID+">tbody>tr[data-group='"+dataID+"']:last").closest('tr'));

		}else{			
        	$(new_row).insertAfter($("#tbl_"+BCID+">tbody>tr[data-id="+dataID+"]").closest('tr'));
        }       	
    	
    	$('.auto').autoNumeric('init');
    	$(".autoComma").autoNumeric('init',{vMin: '0.00', vMax: '999999999.99'});
    
    /*lookup*/
	$("#"+tbl_modal+" input[name='opt1_benefitdetail_edit_OL[]']:checked").each(function(){   			
		jj++				
	    val[jj] = $(this).val();
	    val_chk[jj] = $(this).val().split(",")  
	    
		if(save_diff != ""){
			
			var save_diff_data2 = save_diff.join(",");			
			var save_diff_duplicate = removeDuplicate(save_diff);
			    save_diff_duplicate = save_diff_duplicate.join(",");
			var save_diff_split2 = save_diff_duplicate.split(",");
			
		    	for(var m=0; m<save_diff_split2.length; m++){		    	   		       		    	
		    		if(val_chk[jj][0] == save_diff_split2[m]){

		    			var numberImgOK_Sub = dataID+"_"+jj; 
		    			
		            	/*var lookup_unit = $("#lookup_unit_OL").val();
		            		lookup_unit = lookup_unit.split(",");
		            	var lookup_frequency = $("#lookup_frequency_OL").val();
		            		lookup_frequency = lookup_frequency.split(",");
		            	var lookup_factor_unit = $("#lookup_factor_unit_OL").val();
		            		lookup_factor_unit = lookup_factor_unit.split(",");
		            		
		            		// unit
		            		var pass = 0;
		            		var text = 1;
		            		for(i = 0 ; i < lookup_unit.length/2 ; i++){
		            			var row_unit = "<option value='"+lookup_unit[pass]+"'>"+lookup_unit[text]+"</option>"
		            			pass = Number(parseInt(pass) + parseInt(2));
		            			text = Number(parseInt(text) + parseInt(2))
		            			$("#benefit_unit_OL"+numberImgOK_Sub).append(row_unit);
		            			$("#benefit_acc_unit_OL"+numberImgOK_Sub).append(row_unit);
		            		}
		            		
		            		// frequency
		            		var pass = 0;
		            		var text = 1;
		            		for(i = 0 ; i < lookup_frequency.length/2 ; i++){
		            			var row_frequency = "<option value='"+lookup_frequency[pass]+"'>"+lookup_frequency[text]+"</option>"
		            			pass = Number(parseInt(pass) + parseInt(2));
		            			text = Number(parseInt(text) + parseInt(2))
		            			$("#benefit_fund_OL"+numberImgOK_Sub).append(row_frequency);
		            			$("#benefit_fq_OL"+numberImgOK_Sub).append(row_frequency);
		            			$("#benefit_factor_to_OL"+numberImgOK_Sub).append(row_frequency);
		            		}
		            		
		            		// factor unit
		            		var pass = 0;
		            		var text = 1;
		            		for(i = 0 ; i < lookup_factor_unit.length/2 ; i++){
		            			var row_factor_unit = "<option value='"+lookup_factor_unit[pass]+"'>"+lookup_factor_unit[text]+"</option>"
		            			pass = Number(parseInt(pass) + parseInt(2));
		            			text = Number(parseInt(text) + parseInt(2))
		            			$("#benefit_factor_unit_OL"+numberImgOK_Sub).append(row_factor_unit);
		            		}*/
		            		
		    		}
		    	}
		}
	});
	
	/*re-id*/	
	var b = 0;
	$("#tbl_"+BCID+">tbody>tr[data-group='"+dataID+"']").each(function(){
		b++;
		$(this).find('td:nth-child(2)').text(dataID+"."+b);
		$(this).attr("id","tbody_benefitL_OL"+dataID+"_"+b);
		$(this).attr("data-id",dataID+"_"+b);	
		$(this).attr("data-group",dataID);
		$(this).find('input[type=text]:nth-child(1)').attr("id","benefit_amount_OL_"+BCID+"_"+dataID+"_"+b).attr("onblur","select_unit_ol('"+BCID+"','"+dataID+"_"+b+"', this) , replaceBlank(this)");
		$(this).find('td:nth-child(6) select').attr("id","benefit_unit_OL"+dataID+"_"+b).attr("onchange", "select_unit_option_ol('"+BCID+"','"+dataID+"_"+b+"')");
		$(this).find('td:nth-child(7) select').attr("id","benefit_fund_OL"+dataID+"_"+b);
		$(this).find('td:nth-child(8) select').attr("id","benefit_fq_OL"+dataID+"_"+b);
		if(flag_disease == true){
			$(this).find('td:nth-child(9) input').attr("id","is_benefit_contract_OL"+dataID+"_"+b);
			$(this).find('td:nth-child(10) input').attr("id","is_benefit_cv_OL"+dataID+"_"+b);
			$(this).find('td:nth-child(11) textarea').attr("id","benefit_remark_OL"+dataID+"_"+b);
			$(this).find('td:nth-child(12) input').attr("id","benefit_factor_min_OL"+dataID+"_"+b).attr("onblur","select_unit_factor_ol('"+BCID+"','"+dataID+"_"+b+"', this) , replaceBlank(this)");
			$(this).find('td:nth-child(13) input').attr("id","benefit_factor_max_OL"+dataID+"_"+b).attr("onblur","select_unit_factor_ol('"+BCID+"','"+dataID+"_"+b+"', this) , replaceBlank(this)");
			$(this).find('td:nth-child(14) select').attr("id","benefit_factor_unit_OL"+dataID+"_"+b).attr("onchange", "select_unit_option_factor_ol('"+BCID+"','"+dataID+"_"+b+"')");
			$(this).find('td:nth-child(15) select').attr("id","benefit_factor_to_OL"+dataID+"_"+b);
			$(this).find('td:nth-child(16) input').attr("id","benefit_acc_amount_OL"+dataID+"_"+b).attr("onblur","select_unit_acc_ol('"+BCID+"','"+dataID+"_"+b+"', this) , replaceBlank(this)");
			$(this).find('td:nth-child(17) select').attr("id","benefit_acc_unit_OL"+dataID+"_"+b).attr("onchange", "select_unit_option_acc_ol('"+BCID+"','"+dataID+"_"+b+"')");
		}else{
			$(this).find('td:nth-child(9) textarea').attr("id","benefit_remark_OL"+dataID+"_"+b);
			$(this).find('td:nth-child(10) input').attr("id","benefit_factor_min_OL"+dataID+"_"+b).attr("onblur","select_unit_factor_ol('"+BCID+"','"+dataID+"_"+b+"', this) , replaceBlank(this)");
			$(this).find('td:nth-child(11) input').attr("id","benefit_factor_max_OL"+dataID+"_"+b).attr("onblur","select_unit_factor_ol('"+BCID+"','"+dataID+"_"+b+"', this) , replaceBlank(this)");
			$(this).find('td:nth-child(12) select').attr("id","benefit_factor_unit_OL"+dataID+"_"+b).attr("onchange", "select_unit_option_factor_ol('"+BCID+"','"+dataID+"_"+b+"')");
			$(this).find('td:nth-child(13) select').attr("id","benefit_factor_to_OL"+dataID+"_"+b);
			$(this).find('td:nth-child(14) input').attr("id","benefit_acc_amount_OL"+dataID+"_"+b).attr("onblur","select_unit_acc_ol('"+BCID+"','"+dataID+"_"+b+"', this) , replaceBlank(this)");
			$(this).find('td:nth-child(15) select').attr("id","benefit_acc_unit_OL"+dataID+"_"+b).attr("onchange", "select_unit_option_acc_ol('"+BCID+"','"+dataID+"_"+b+"')");
		}
		
		
	});
	
	$("#modal_editCoverage_OL").modal("hide");	
}

$(document).on("click", ".open-SelectCoverageDialog_OL", function () {	
    var tabmyId = $("#tabBenefitRider_OL>li.active").attr('id');
    var myId = tabmyId.replace("tab","");   
    //var dataID = $(this).data('id');
    var dataID = $(this).find("button").attr("id").replace("btn_benefit_OL"+myId+"_","");   
    var BCID_tblCL = $(".modal-body #BCID_tblOL").val( myId );     
    $(".modal-body #dataID_tblOL").val( dataID ); 
    
    /*clone*/ 
    var $target = $("#tbl_CoverageofBenefit_OL>tbody");
    var record_count = $("#tbl_CoverageofBenefit_OL>tbody>tr").length;
    
    if(record_count <= 0){
    	$("#tbl_"+myId+">tbody>tr[data-id != "+dataID+"]").each(function() {
            var $tds = $(this).children(),
                $row = $("<tr></tr>"),
                $value = $tds.eq(1).text();
            	
            var row_append = $row.append("<td class='text-center vertical-middle'><input type='checkbox' name='opt_coverageTblSelect_OL[]' value='"+$value+"'></td>").append($tds.eq(1).clone()).append($tds.eq(2).clone()).append($tds.eq(3).clone());
       
            $(row_append).find('td:nth-child(2)').removeClass("borderBlack");
            $(row_append).find('td:nth-child(3)').removeClass("borderBlack");
            $(row_append).find('td:nth-child(4)').removeClass("borderBlack");
            
            $(row_append).appendTo($target);
        });
    }else{
    	$("#tbl_CoverageofBenefit_OL>tbody").empty();
    	
    	$("#tbl_"+myId+">tbody>tr[data-id != "+dataID+"]").each(function() {
            var $tds = $(this).children(),
            	$row = $("<tr></tr>"),
            	$value = $tds.eq(1).text();
            
            var row_append = $row.append("<td class='text-center vertical-middle'><input type='checkbox' name='opt_coverageTblSelect_OL[]' value='"+$value+"'></td>").append($tds.eq(1).clone()).append($tds.eq(2).clone()).append($tds.eq(3).clone());
       
            $(row_append).find('td:nth-child(2)').removeClass("borderBlack");
            $(row_append).find('td:nth-child(3)').removeClass("borderBlack");
            $(row_append).find('td:nth-child(4)').removeClass("borderBlack");
            
            $(row_append).appendTo($target);
        });
    }  
    
    $('#modal_TableCoverage_OL').modal('show');
          
});

/*add ของความคุ้มครอง*/
function saveSelectCoverage_OL(){	
	
	var BCID = $("#BCID_tblOL").val();
	var dataID = $("#dataID_tblOL").val();

	var select_value = [];
	var val = [];
	var j = 0;
	
    $("#modal_TableCoverage_OL input[name='opt_coverageTblSelect_OL[]']:checked").each(function(){
    	j++				
    	val[j] = $(this).val();  
    	select_value.push(val[j]);	    
    });	
  
    var data = select_value.join(',')
    $("#tbl_"+BCID+">tbody>tr[data-id="+dataID+"]>td:nth-child(9) div.list_coverage").html(data);

	$("#modal_TableCoverage_OL").modal("hide");
	
}

/*ปิด modal*/
$('#modal_editCoverage_OL').on('hidden.bs.modal', function () {
	var BCID = $(".modal-body #BCID_benefitOL_edit").val();
	$("#tbl_BenefitOpt1Edit"+BCID+"_OL input[name='opt1_benefitdetail_edit_OL[]']").prop("checked", false);
	$("#tbl_BenefitOpt2SubEdit"+BCID+"_OL input[name='opt1_benefitdetail_edit_OL[]']").prop("checked", false);	
})

/*เลือก option*/
function displayBenefitValueOL_popup(){	
	var select_benefit1_OL = $('#select_benefit1_OL').prop('checked');
	var select_benefit2_OL = $('#select_benefit2_OL').prop('checked');
	var select_BCID = $(".modal-body #BCID_benefitOL").val(); 
	var numrow_bnf = $("#tbl_"+select_BCID+"_OL").find('tbody tr').length;
	if(select_benefit1_OL)
		{	
			$('#benefit_desc_OL').prop('disabled', false);					
			$('.datatbl_BenefitOpt1'+select_BCID+'_OL').css("display","block");	
			$('.datatbl_BenefitOpt2'+select_BCID+'_OL').css("display","none");	
			$('.datatbl_BenefitOpt2Sub'+select_BCID+'_OL').css("display","none");
			$('#tbl_BenefitOpt1'+select_BCID+'_OL').show();
			$('#tbl_BenefitOpt2'+select_BCID+'_OL').hide();
			/*$('#tbl_BenefitOpt2Sub'+select_BCID+'_OL').hide();*/
			document.getElementById("select_benefit1_OL").value = 1;
			document.getElementById("select_benefit2_OL").value = 0;
			
			$("#tbl_BenefitOpt2"+select_BCID+"_OL input[type='radio']").prop("checked", false);
			$("#tbl_BenefitOpt2Sub"+select_BCID+"_OL input[type='checkbox']").prop("checked", false);
			
			if(numrow_bnf > 0){
				$("#tbl_"+select_BCID+"_OL").find('tbody tr').each(function(){
					var select_bnf = $(this).find('td:nth-child(3)').text();
					$("#tbl_BenefitOpt2"+select_BCID+"_OL").find('tbody tr').each(function(){
						if(select_bnf == $(this).find("td:nth-child(2)").text()){
							$(this).closest('tr').hide();
						}else{
							$(this).closest('tr').show();
						}
					});
				});
				$("#tbl_"+select_BCID+"_OL").find('tbody tr').each(function(){
					var select_bnf = $(this).find('td:nth-child(3)').text();
					$("#tbl_BenefitOpt2Sub"+select_BCID+"_OL").find('tbody tr').each(function(){
						if(select_bnf == $(this).find("td:nth-child(2)").text()){
							$(this).closest('tr').hide();
						}else{
							$(this).closest('tr').show();
						}
					});
				});
			}else{
				$("#tbl_BenefitOpt2"+select_BCID+"_OL").find('tbody tr').show();
				$("#tbl_BenefitOpt2Sub"+select_BCID+"_OL").find('tbody tr').show();
			}
			
	}else if(select_benefit2_OL){
			$('#benefit_desc_OL').prop('disabled', true);
			$("#benefit_desc").val("");	
			$('.datatbl_BenefitOpt2'+select_BCID+'_OL').css("display","block");	
			$('.datatbl_BenefitOpt1'+select_BCID+'_OL').css("display","none");	
			$('.datatbl_BenefitOpt2Sub'+select_BCID+'_OL').css("display","none");
			$('#tbl_BenefitOpt2'+select_BCID+'_OL').show();
			$('#tbl_BenefitOpt1'+select_BCID+'_OL').hide();	
			/*$('#tbl_BenefitOpt2Sub_OL').hide();	*/
			$("#tbl_BenefitOpt2"+select_BCID+"_OL_wrapper").show();
			document.getElementById("select_benefit1_OL").value = 0;
			document.getElementById("select_benefit2_OL").value = 1;
			
			$("#tbl_BenefitOpt1"+select_BCID+"_OL input:checkbox").prop("checked", false);
	}
}

/*เลือกความคุ้มครอง*/
function displayBenefitValueOptionOL_popup(value){	
	//var select_benefit1_CL = $('#select_benefit1_CL').prop('checked');	
	var Optsub_BCID = $(".modal-body #OptSub_benefitOL").val(value); 
	var select_BCID = $(".modal-body #BCID_benefitOL").val();

			$('.datatbl_BenefitOpt2Sub'+select_BCID+'_OL').css("display","block");	
			$('.datatbl_BenefitOpt2'+select_BCID+'_OL').css("display","none");	
			/*$('#tbl_BenefitOpt2Sub_OL').show();
			$('#tbl_BenefitOpt2_OL').hide();	*/
			
			var val_input = value.split(",");
			
			/*remove list ในกลุ่มความคุ้มครอง*/
			var val_opt_tbl1 = [];
			var val_opt_code_tbl1 = []
			var m=0;
			
			/*$("#tbl_BenefitOpt1_CL tbody>tr").each(function(){
				m++;
				val_opt_tbl1[m] = $(this).find("input[name='opt1_benefitdetail[]']").val();
				val_opt_code_tbl1[m] = $(this).find("input[name='opt1_benefitdetail[]']").val().split(",");
				if(val_opt_code_tbl1[m][0] == val_input[0]){
					$(this).closest('tr').hide();
				}
			});*/
			
			/*remove list ในความคุ้มครอง*/
			var val_opt_tbl2 = [];
			var val_opt_code_tbl2 = []
			var n=0;
			
			$("#tbl_BenefitOpt2"+select_BCID+"_OL tbody>tr").each(function(){
				n++;
				val_opt_tbl2[n] = $(this).find("input[name='opt2_benefitdetail_OL[]']").val();
				val_opt_code_tbl2[n] = $(this).find("input[name='opt2_benefitdetail_OL[]']").val().split(",");
				if(val_opt_code_tbl2[n][0] == val_input[0]){
					$(this).closest('tr').hide();
				}
			});
			
			/*remove list ในหมวดความคุ้มครอง ตารางย่อย*/
			var val_opt_tbl3 = [];
			var val_opt_code_tbl3 = []
			var mm=0;
			
			$("#tbl_BenefitOpt2Sub"+select_BCID+"_OL tbody>tr").each(function(){
				m++;
				val_opt_tbl3[mm] = $(this).find("input[name='opt1sub_benefitdetail_OL[]']").val();
				val_opt_code_tbl3[mm] = $(this).find("input[name='opt1sub_benefitdetail_OL[]']").val().split(",");
				if(val_opt_code_tbl3[mm][0] == val_input[0]){
					$(this).closest('tr').hide();
				}
			});
			
			if($("#tbl_BenefitOpt2Sub"+select_BCID+"_OL tbody>tr").length == 1){
				
				row_empty = "<tr id='row_empty'>"+
						"<td colspan='3' class='text-center'>ไม่มีข้อมูล รายการความคุมความคุ้มครองย่อย</td>"+
					"</tr>";
				$("#tbl_BenefitOpt2Sub_OL tbody").append(row_empty);
			}
			
}

function confirmDeleteBenefitRaider_OL(tbl){
	
	var tblID = ("#tbl_"+tbl+"_OL");
	var imgOKcount = $(tblID+" i.glyphicon-ok").length;
	if(imgOKcount <= 0)
	{	
		message = "กรุณาเลือกรายการที่ต้องการลบ";
		alertError(message);
	}else{

	message = "ต้องการลบรายการใช่หรือไม่";
	alertDeleteError(message);
		
	$("#btn_confirm_del").click(function(){
	
		var lastImgOK = $(tblID+" >tbody>tr[data-level='1']:last>td:first").attr("id") || 0;	
		var numberImgOK = 0;
		if(lastImgOK == 0){
			numberImgOK = 1;
		}else{
	
		 numberImgOK = Number(lastImgOK.replace("imgOKDel_benefit_OL"+tbl+"_OL_",""))+1;
			
		}
		
		var a = 0; aa = 0;
		var value_del = [];
		var save_value_del = [];	
		var code_del = [];
			
		var value_code_del = [];
		var save_code_del = [];
			
		for(var i = 1;i<=numberImgOK;i++)
		{
				var checked = $(tblID+" #tbody_benefitL_OL"+i+" >td:first>i").attr("class");
				var dataID = $(tblID+" #tbody_benefitL_OL"+i).attr("data-id");
				if(checked == "glyphicon glyphicon-ok"){
									
					var rows_del = $(tblID).find("tr[data-id='"+dataID+"']");						
									
					/*tr parent*/
					rows_del.each(function (index, row_del) {
						a++;
						var
				        $row_del = $(row_del),	
				        id_del = $row_del.find("td:nth-child(2)").text(),
				        //id_del = $row_del.data("id"),       
				        children_del = $(tblID).find("tr[data-group=" + id_del + "]");
											
						value_del[a] = $(this).find("td:nth-child(2)").text();					
						save_value_del.push(value_del[a]);
						
						value_code_del[a] = $(this).find("td:nth-child(3)").text();
						save_code_del.push(value_code_del[a]);
						
						/*tr child*/					
						if(children_del.length > 0){
							children_del.each(function (index2, row_del2) {
								aa++;
								var
						        $row_del2 = $(row_del2),
						        id2 = $row_del2.data("id");
								
								value_del[aa] = $(this).find("td:nth-child(2)").text();		
								save_value_del.push(value_del[aa]);						
								
								value_code_del[aa] = $(this).find("td:nth-child(3)").text();
								save_code_del.push(value_code_del[aa]);
				            });
						}				
					});
					
					deleteTableRow(tblID+">tbody>tr[data-group="+dataID+"]");
					deleteTableRow(tblID+" #tbody_benefitL_OL"+i);
					
					nameTab 	= "menu_OL_5";
					Statuesave = "N";
				}				
		}	
		
		/*เปิด row ที่ลบไป*/
		var chk_tbl1 = [],chk_tbl2 = [],chk_tbl3 = [],chk_tbl4 = [],chk_tbl5 = [],chk_tbl6 = [];
		var value_code = save_code_del.join(",").split(",");
		var c1=0, c2=0, c3=0, c4=0, c5=0, c6=0;
		for(var b=0; b<value_code.length; b++){
			var num1 = $("#tbl_BenefitOpt1"+tbl+"_OL tbody>tr input[name='opt1_benefitdetail_OL[]']").length;
			var num2 = $("#tbl_BenefitOpt2_OL tbody>tr input[name='opt2_benefitdetail_OL[]']").length;
			var num3 = $("#tbl_BenefitOpt2Sub_OL tbody>tr input[name='opt1sub_benefitdetail_OL[]']").length;
			var num4 = $("#tbl_BenefitOpt1Edit_OL tbody>tr input[name='opt1_benefitdetail_edit_OL[]']").length;
			var num5 = $("#tbl_BenefitOpt2Edit_OL tbody>tr input[name='opt2_benefitdetail_edit_OL[]']").length;
			var num6 = $("#tbl_BenefitOpt2SubEdit_OL tbody>tr input[name='opt1_benefitdetail_edit_OL[]']").length;
			
			if(num1 > 0){
				$("#tbl_BenefitOpt1"+tbl+"_OL tbody>tr").each(function(){
					c1++;
					chk_tbl1[c1] = $(this).find("input[name='opt1_benefitdetail_OL[]']").val().split(",");
					if(value_code[b] == chk_tbl1[c1][0]){
						$(this).closest('tr').show();
					}
				});
			}
			
			if(num2 > 0){
				$("#tbl_BenefitOpt2_OL tbody>tr").each(function(){
					c2++;
					chk_tbl2[c2] = $(this).find("input[name='opt2_benefitdetail_OL[]']").val().split(",");			
					if(value_code[b] == chk_tbl2[c2][0]){
						$(this).closest('tr').show();
					}
				});
			}		
			
			if(num3 > 0){
				$("#tbl_BenefitOpt2Sub_OL tbody>tr").each(function(){
					c3++;
					chk_tbl3[c3] = $(this).find("input[name='opt1sub_benefitdetail_OL[]']").val().split(",");
					if(value_code[b] == chk_tbl3[c3][0]){
						$(this).closest('tr').show();
					}
				});
			}
			
			if(num4 > 0){
				$("#tbl_BenefitOpt1Edit_OL tbody>tr").each(function(){
					c4++;
					chk_tbl4[c4] = $(this).find("input[name='opt1_benefitdetail_edit_OL[]']").val().split(",");
					if(value_code[b] == chk_tbl4[c4][0]){
						$(this).closest('tr').show();
					}
				});
			}
			
			if(num5 > 0){
				$("#tbl_BenefitOpt2Edit_OL tbody>tr").each(function(){
					c5++;
					chk_tbl5[c5] = $(this).find("input[name='opt2_benefitdetail_edit_OL[]']").val().split(",");
					if(value_code[b] == chk_tbl5[c5][0]){
						$(this).closest('tr').show();
					}
				});
			}
			//$("#row_empty").remove();
			
			if(num6 > 0){
				$("#tbl_BenefitOpt2SubEdit_OL tbody>tr").each(function(){
					c6++;
					chk_tbl6[c6] = $(this).find("input[name='opt1_benefitdetail_edit_OL[]']").val().split(",");
					if(value_code[b] == chk_tbl6[c6][0]){
						$(this).closest('tr').show();
					}
				});
			}
		} 
			
	  /*ค่าของความคุ้มครองแต่ล่ะ row*/
	  $(tblID+">tbody>tr>td:nth-child(9) div.list_coverage").each(function() {
		 var value_check = $(this).text();
		 var value_check_save = [];
		 var value = [];
		 	 value = value_check.split(",");
		 
		 for(var i=0; i<value.length; i++){		 
			 value_check_save.push(value[i]);	 
		 }

		 if(value_check_save != "None"){
			  var save = [];
			  value_check_save.map(function(item){
			  if(!save_value_del.includes(item)){
			      save.push(item);
			    }
			  });
		  }	
		 if(save != ""){
			 $(this).text(save);	
		 }else{
			 $(this).text("None");	
		 }
		  
	  });
	  	   
	  /*create new order number in span*/
	  var
	  j = 0,
	  $table = $(tblID),
	  rows = $table.find("tr[data-level='1']");

		rows.each(function (index, row) {			
		j++;
		var
	      $row = $(row),
	      level = $row.data("level");
	      //id = $row.data("id");
	      id = Number($row.attr("id").replace("tbody_benefitL_OL",""));
	      children = $table.find("tr[data-group=" + id + "]");
		
			//$table.find("tr[data-id=" + id + "]>td:nth-child(2)>span").html(j);	
			$row.find("td:nth-child(2)>span").html(j);			
			//alert(id);
			
			/*ค่าเก่า+ใหม่*/
			/*var number_parent = $row.data("id");*/
			var number_parent =  Number($row.attr("id").replace("tbody_benefitL_OL",""));
			var number_parent_new = $row.find("td:nth-child(2)").text();
					
			$(tblID+">tbody>tr>td:nth-child(9) div.list_coverage").each(function() {
				var text_value = [];
					text_value = $(this).text();
			
				var text_split = text_value.split(",");
				if(text_value != "None"){
					for(var b=0; b<text_split.length; b++){
						if(text_split[b] == number_parent){
							//alert(text_split[aa]);
							$(this).text($(this).text().replace(text_split[b], number_parent_new));
						}
					}	
				}										
			});	

			if(children.length > 0){			
				var jj = 0;
				children.each(function (index2, row2) {				
					jj++;
					var
			        $row2 = $(row2),
			        id2 = $row2.data("id");
			        //id2 = Number($row2.attr("id").replace("tbody_benefitL_CL",""));
				
					//children.find("td:nth-child(2)>span").html(j);
					$row2.find("td:nth-child(2)").html(j+"."+jj);

					//var number_child = $row2.data("id");
					var number_child = $row2.attr("id").replace("tbody_benefitL_OL","");
						number_child =  Number(number_child.replace("_","."));
					var number_child_new = $row2.find("td:nth-child(2)").text();							
					
					$(tblID+">tbody>tr>td:nth-child(9) div.list_coverage").each(function() {
						var text_value2 = [];
							text_value2 = $(this).text();
					
						var text_split2 = text_value2.split(",");
						if(text_value2 != "None"){
							for(var bb=0; bb<text_split2.length; bb++){
								if(text_split2[bb] == number_child){
									//alert(text_split[aa]);
									$(this).text($(this).text().replace(text_split2[bb], number_child_new));
								}
							}	
						}										
					});
					
					$row2.attr("id","tbody_benefitL_OL"+j+"_"+jj);
					$row2.attr("data-id",j+"_"+jj);	
					$row2.attr("data-group",j);
					$row2.find('input[type=text]:nth-child(1)').attr("id","benefit_amount_OL_"+tbl+"_"+j+"_"+jj);
					$row2.find('select:nth-child(1)').attr("id","benefit_unit_OL"+j+"_"+jj);
					$row2.find('select:nth-child(2)').attr("id","benefit_fund_OL"+j+"_"+jj);
					$row2.find('select:nth-child(3)').attr("id","benefit_fq_OL"+j+"_"+jj);
					$row2.find('a.open-SelectCoverageDialog_OL').attr("data-id",j+"_"+jj);
					$row2.find('textarea').attr("id","benefit_remark_OL"+j+"_"+jj);
					$row2.find('button:nth-child(1)').attr("id","btn_benefit_OL"+tbl+"_"+j+"_"+jj);
					$row2.find('select:nth-child(4)').attr("id","benefit_factor_select_OL"+j+"_"+jj);
					$row2.find('input[type=text]:nth-child(2)').attr("id","benefit_factor_amount_OL_"+tbl+"_"+j+"_"+jj);
					$row2.find('select:nth-child(5)').attr("id","benefit_factor_unit_OL"+j+"_"+jj);
					$row2.find('select:nth-child(6)').attr("id","benefit_factor_to_OL"+j+"_"+jj);
					
	          });
			}	
			
			$row.attr("id","tbody_benefitL_OL"+j);
			$row.attr("data-id",j);
			$row.find("td:nth-child(1)").attr("id","imgOKDel_benefit_OL"+tbl+"_"+j);
			$row.find("td:nth-child(1)").attr("onclick","imgCheckboxDel_benefit_OL('"+tbl+"_"+j+"')");
			$row.find('a.open-EditBenefitDialog_OL').attr("data-id",j);
			$row.find('textarea').attr("id","benefit_remark_OL"+j);
			$row.find('input[type=text]:nth-child(1)').attr("id","benefit_amount_OL_"+tbl+"_"+j);
			$row.find('select:nth-child(1)').attr("id","benefit_unit_OL"+j);
			$row.find('select:nth-child(2)').attr("id","benefit_fund_OL"+j);
			$row.find('select:nth-child(3)').attr("id","benefit_fq_OL"+j);
			$row.find('a.open-SelectCoverageDialog_OL').attr("data-id",j);
			$row.find('button:nth-child(1)').attr("id","btn_benefit_OL"+tbl+"_"+j);
			$row.find('select:nth-child(4)').attr("id","benefit_factor_select_OL"+j);
			$row.find('input[type=text]:nth-child(2)').attr("id","benefit_amount_OL_"+tbl+"_"+j);
			$row.find('select:nth-child(5)').attr("id","benefit_factor_unit_OL"+j);
			$row.find('select:nth-child(6)').attr("id","benefit_factor_to_OL"+j);
			
		});					
	});		
  }

}

/*del benefit*/
function imgCheckboxDel_benefit_OL(id)
{
	var imgOK = "imgOKDel_benefit_OL"+id;
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

/*edit เลือก option*/
function displayBenefitValueEditOL_popup(){	
	var select_benefit1_OL = $('#select_benefit1_OL_edit').prop('checked');
	var select_benefit2_OL = $('#select_benefit2_OL_edit').prop('checked');
	var select_BCID = $(".modal-body #BCID_benefitOL_edit").val(); 
	var val_tbl = [], val_chk = [];
	var a1=0, a2=0;
	
	if($("#tbl_BenefitOpt2Edit"+select_BCID+"_OL input[name='opt2_benefitdetail_edit_OL[]']:checked").length > 0){
		var val_chk_edit = $("#tbl_BenefitOpt2Edit_OL input[name='opt2_benefitdetail_edit_OL[]']:checked").val();
		val_chk_edit = val_chk_edit.split(",");
		var optSelect = $("#optSelect_OL").val(val_chk_edit[0]);
		$("#tbl_"+select_BCID+" tbody>tr").each(function(){
			a1++;
			val_tbl[a1] = $(this).find("td:nth-child(3)").html();
			
			$("#tbl_BenefitOpt1Edit"+select_BCID+"_OL tbody>tr").each(function(){
				a2++;
				val_chk[a2] = $(this).find("input[name='opt1_benefitdetail_edit_OL[]']").val().split(",");
							
				if(val_chk[a2][0] == $(optSelect).val()){
					$(this).closest('tr').show();
				}else{
					if(val_chk[a2][0] == val_tbl[a1]){
						$(this).closest('tr').hide();
					}
				}
			});		
		});
	}
	
	if(select_benefit1_OL)
		{	
			$('#benefit_desc_edit_OL').prop('disabled', false);					
			$('.datatbl_BenefitOpt1Edit'+select_BCID+'_OL').css("display","block");	
			$('.datatbl_BenefitOpt2Edit'+select_BCID+'_OL').css("display","none");	
			$('.datatbl_BenefitOpt2SubEdit'+select_BCID+'_OL').css("display","none");
			$('#tbl_BenefitOpt1Edit'+select_BCID+'_OL').show();
			$('#tbl_BenefitOpt2Edit'+select_BCID+'_OL').hide();
			$('#tbl_BenefitOpt2SubEdit'+select_BCID+'_OL').hide();
			document.getElementById("select_benefit1_OL_edit").value = 1;
			document.getElementById("select_benefit2_OL_edit").value = 0;
			
			//$("#tbl_BenefitOpt2Edit_CL input[type='radio']").prop("checked", false);
			$("#tbl_BenefitOpt1Edit"+select_BCID+"_OL *").prop("disabled", false);
			$("#btn_saveBenefit_modal1_OL").prop("disabled", false);	
			
			$("#tbl_BenefitOpt2Edit"+select_BCID+"_OL input[type='radio']").each(function(){
				var value = $(this).val().split(",");
				if(value[0] == $(optSelect).val()){
					$(this).prop("checked", true);
				}else{
					$(this).prop("checked", false);
				}
			});
			
	}else if(select_benefit2_OL){
			$('#benefit_desc_edit_OL').prop('disabled', true);		
			$('.datatbl_BenefitOpt2Edit'+select_BCID+'_OL').css("display","block");	
			$('.datatbl_BenefitOpt1Edit'+select_BCID+'_OL').css("display","none");	
			$('.datatbl_BenefitOpt2SubEdit'+select_BCID+'_OL').css("display","none");
			$('#tbl_BenefitOpt2Edit'+select_BCID+'_OL').show();
			$('#tbl_BenefitOpt1Edit'+select_BCID+'_OL').hide();	
			$('#tbl_BenefitOpt2SubEdit'+select_BCID+'_OL').hide();	
			document.getElementById("select_benefit1_OL_edit").value = 0;
			document.getElementById("select_benefit2_OL_edit").value = 1;
			
			$("#btn_SaveEditBenefit2_OL").prop("disabled", false);
	}
		
}

/*ตารางมูลค่ากรมธรรม์*/
function settingPolicyValue_OL(){		
	$("#riderCode_OL").val($("#pass_Insurance_coverage_ol").val());
	
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
		download_modal = "download_StandardRisk_OL";
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
									$('#'+cv_button).attr("onclick", "openFileTextRider_OL('"+file_name+"','"+obj_ref+"',"+tbl_col+",'"+tbl_name+"','"+modal_cv+"')");
							  
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
									$('#'+cv_button).attr("onclick", "openFileTextRider_OL('"+file_name+"','"+obj_ref+"',"+tbl_col+",'"+tbl_name+"','"+modal_cv+"')");
							  
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

/*ชั้นอาชีพ*/
function checkFromToLevel_OL(id) {
	var from_value = $("#datefromLevel_OL"+id).val();
	var to_value = $("#datetoLevel_OL"+id).val();
	
	if(from_value != "" && to_value != ""){
		if(Number(from_value) > Number(to_value)){
			 message = "อัตราเบี้ยฯ เพิ่มตามชั้นอาชีพสูงสุดต้องมากกว่าต่ำสุดเสมอ";
			  alertError(message);
			  $("#datetoLevel_OL"+id).focus();
			  $("#datetoLevel_OL"+id).val("");
		}
	}		 
}
function validate_zero_ToLevel_OL(id){
	var to_value = $("#datetoLevel_OL"+id).val();
	if(to_value == '0' || to_value == '0.00'){
		$("#datetoLevel_OL"+id).val('');
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

			var uploadfile = "selectFileRate_OL(5,'s','fileuploads_RateValue"+select_cv_id+"_OL','"+file_layout1_text+"','"+file_layout2_text+"','dbBox1_OL','span_RateValueopen_OL_"+select_cv_id+"')";			
			
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
				 
				 var uploadfile_band = "selectFileRate_OL(5,'b','fileuploads_RateValue"+select_band_id+"_OL','"+file_layout1_band+"','"+file_layout2_band+"','dbBox1_OL','span_RateValueopen_OL_"+select_band_id+"')";
				 
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
	
		tbl_name = "tbl_NotStandardRisk_OL";
		tblAuto_name = "tbl_NotStandardRiskAuto_OL";
		modal_name = "cvNotStandardRiskAuto_OL";		
		
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

/*********************Validate Save*************************/
/*คำนวณเบี้ยประกัน*/
function bt_Menu3_Confirm_OL() {
	var error = 0;
	
	/*เบี้ยมาตรฐาน*/
	if($("#ch_standard_premium_ol").prop("checked") == true){
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
	}
	
	if($("#ch_importInsurance_ol").prop("checked") == true){
		var discountFrom = $("#discountInsurancePremiumsSta_ol").val();
		var discountTo = $("#discountInsurancePremiumsTo_ol").val();
		if(discountFrom == "" || discountTo == "" || discountTo == "0"){
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

		if($("#min_EM_ol").val() != "0.00" && $("#min_EM_ol").val() != "" && $("#max_EM_ol").val() != "0.00" && $("#max_EM_ol").val() != ""){
			if($("#input_fileCal_1_OL").val() == ""){
				error++;
			}
		}else if($("#min_EM_ol").val() == "0.00" && $("#max_EM_ol").val() != "0.00"){
			if($("#input_fileCal_1_OL").val() == ""){
				error++;
			}
		}else if($("#min_EM_ol").val() == "" && $("#max_EM_ol").val() != ""){
				error++;
		}else if($("#min_EM_ol").val() != "" && $("#max_EM_ol").val() == ""){
				error++;
		}
	}	
	
	
	/*NAR*/
	if($("#ch_NAR_ol").prop("checked") == true){
		if($("#sl_NAR_OL option:selected").text() != "None"){
			if($("#input_fileCal_4_OL").val() == ""){
				error++;
			}
		}
	}
	
	if(error > 0){
		message = "กรุณาระบุข้อมูลให้ครบถ้วน";
		nameTab 	= "menu_OL_3";
		Statuesave = "N";
		alertError(message);
	}else{
		nameTab 	= "menu_OL_3";
		Statuesave = "Y";
		dataSave_calInsurancePremium_OL();
		var message = "บันทึกข้อมูลเรียบร้อย";
		alertSuccess(message);
	}
	
}

/*Fix เพิ่ม*/
$("#ch_PremRider_ol").click(function(){
	if($(this).prop("checked") == true){
		$("#rd_insurance_premium_ol").prop("disabled", false);
		$("#rd_Time_insurance_premium_ol").prop("disabled", false);
	}else{
		$("#rd_insurance_premium_ol").prop("disabled", true);
		$("#rd_insurance_premium_ol").prop("checked", false);
		$("#rd_Time_insurance_premium_ol").prop("disabled", true);
		$("#rd_Time_insurance_premium_ol").prop("checked", false);
		
		$("#text_insurance_premium_ol, #text_Time_insurance_premium_ol").prop("disabled", true).val("");
		$("#dmy_3_ol, #dmy_4_ol").prop("disabled", true);
		$("#dmy_3_ol option[value='YEAR'], #dmy_4_ol option[value='YEAR']").attr("selected", true);
		
		$("#ch_sperately_pay_ch_ol").prop("disabled" ,true);
		$("#ch_sperately_pay_ch_ol").prop("checked" ,false);
		
		$("#tb_Sperately_Pay_ol input:checkbox").prop("disabled" ,true);
		$("#tb_Sperately_Pay_ol input:checkbox").prop("checked" ,false);
		$("#tb_Sperately_Pay_ol input:text").prop("disabled" ,true).val("0.00");
	}
});

/******************Save to DB**********************/
/*1. Save Basic Information*/
function dataSave_BasicInformation_OL(){
	
	/*isBundle*/
	if($("#chk_bundleRider_OL1").prop("checked") == true){
		is_bundle = true;
	}else{
		is_bundle = false;
	}	
	
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
	
	/*ระยะประกันของสัญญาประกันชีวิต*/
	var term_contract_data = [];
	if($("#rd_anniversary_ol").prop("checked") == true){
		obj = {};
		obj["radio"] = $("#rd_anniversary_ol").val();
		obj["value"] = [];
		
		obj_value = {};		
		obj_value["min_age"] = "0";
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
	
	if($("#ch_PremRider_ol").prop("checked") == true){
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
						obj_value["period"] = $(this).find("td:nth-child(2)").text();
						obj_value["rate"] = Math.round10(rate/100, -4);
						obj["separate_pay"].push(obj_value);
					}		
				});
			}else{
				obj["separate_pay"] = "";
			}
		}
		payment_contract_data.push(obj);
	}
	
	
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
			obj = {};
			obj["text"] = $(this).find("td:nth-child(2) input").val();
			obj["rate_cat_id"] = $(this).find("td:nth-child(3) input[name='tax_type_OL[]']").val();
			obj["rate_layout_id"] = $(this).find("#hdd_layoutID_OL"+ID).val();
			obj["file_id"] = $(this).find("#hdd_fileID_OL"+ID).val();
			TaxReduce_data.push(obj);
		}		
	});
	
	/*คุ้มครองสูงสุด*/
	var max_insure_value = $("#sl_maximum_Protection_ol option:selected").val();
	var max_insure_age = "";
	var max_insure_year = "";
	if(max_insure_value == "TO_AGE"){
		max_insure_age = $("#maximum_Protection_To_ol").val();
	}else if(max_insure_value == "TO_YEAR"){
		max_insure_year = $("#maximum_Protection_To_ol").val();
	}
	
	var json_data_BasicInfo = {
        	"method": "Tab_Basic_Information",
            "passInsurance": $("#pass_Insurance_coverage_ol").val(),
            "is_bundle": is_bundle,
            "bundle_cov_code": $("#bundle_covCode_ol").val(),
            "cov_cat_id" : $("#cov_cat_id_OL").val(),
            "core_biz_prd_code" : $("#key_rider_code_ol").val(),
            "name_th": $("#thai_Name_ol").val(),
            "name_en": $("#eng_Name_ol").val(),
            "sale_eff_date": $("#appStart_date_ol").val(),
            "sale_exp_date": $("#appTo_date_ol").val(),
            "min_age": $("#age_Start_ol").val(),
            "min_age_unit" : $("#dmy_5_ol option:selected").val(),
            "max_age": $("#age_To_ol").val(),
            "max_age_unit" : $("#dmy_6_ol option:selected").val(),
            "max_insure_age": max_insure_age,
            "max_insure_year": max_insure_year,
            "gender": gender,
            "ch_separate_pay" : ch_sperately_pay,
            "mode": JSON.stringify(mode_data),
            "filing_Channel" : JSON.stringify(filing_data),
            "contract_Type" : $("#sl_promise_type_ol option:selected").val(), /*ประเภทสัญญา*/
            //"per_unit" : $("#sl_insurance_premium_ol option:selected").val(), /*ต่อหน่วย*/
            "protect_Type" : $("#sl_Protection_type_ol option:selected").val(), /*ประเภทความคุ้มครอง*/
            "term_contract" : JSON.stringify(term_contract_data),/*ระยะประกันของสัญญาเพิ่มเติม*/
            "payment_contract" : JSON.stringify(payment_contract_data),
            "prem_assump_rate" : JSON.stringify(prem_assump_rate),
            "prem_Rate" : Math.round10($("#text_Calculate_premiums_1ol").val()/100 , -4),/*อัตราดอกเบี้ยที่ใช้ในการคำนวณเบี้ยประกัน*/
            "table_TaxReduce" : JSON.stringify(TaxReduce_data),/*ลดหย่อนภาษี*/
            //"sum_decr_rate": Math.round10($("#text_Calculate_premiums_2ol").val()/100 , -4),/*อัตราดอกเบี้ยที่ใช้ในการคำนวณทุน*/
            "Taxreduce_healthy":Math.round10($("#text_tax_healthOL").val()/100 , -4)/*ลดหย่อนภาษีสุขภาพ*/
        	
	}
	
	$("#code_Coverage_OL").val($("#pass_Insurance_coverage_ol").val());
	$("#approve_nameTH_OL").val($("#thai_Name_ol").val());
	$("#approve_nameEN_OL").val($("#eng_Name_ol").val());
	
	$.ajax({
		url: 'RiderOL_SaveData_Servlet',
		type: "POST",
		data: json_data_BasicInfo,
		success: function (response) {
			var cov_status_PD = $("#cov_status").val();
			var cov_status_RP = $("#cov_status_RP").val();
			
			if (response == "success"){
				
				//enable tab
	    		 $("#menu_OL_7").removeClass("disabledAll");
	    		 $("#menu_OL_8").removeClass("disabledAll");
	    		 $("#menu_OL_3").removeClass("disabledAll");
	    		 $("#menu_OL_4").removeClass("disabledAll");
	    		 $("#menu_OL_5").removeClass("disabledAll");
	    		 $("#menu_OL_9").removeClass("disabledAll");
	    		 $("#menu_OL_6").removeClass("disabledAll");
				
				if((cov_status_PD == "NEW" && cov_status_RP == "NEW") || (cov_status_PD == "" && cov_status_RP == "")){
	    			 console.log("save>> "+response)
	    			 
	    			 var flag = $("#flag_email_send_OL").val();
	    			 console.log("flag>> "+flag)
	    			 if(flag != "T"){
	    				 /***  CODE FOR PREPARE AND SEND MAIL  ****/
							var prepareEmail_data = [];
							objEmail = {};
							objEmail["requestApprove"] 		="สร้างใหม่";
							objEmail["manuName"] 			="ความคุ้มครองสัญญาเพิ่มเติม";
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
	console.log("json_data_basicInfo: ", json_data_BasicInfo);
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
		url: 'RiderOL_SaveData_Servlet',
		type: "POST",
		data: data_save,
	     success: function (response) {
	    	
	    }
	});
	console.log("save_policy:",data_save);
}

/*3. ผู้ได้รับความคุ้มครอง */
function dataSave_protectedPerson_OL(){
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
	
	var protectedPerson = new Array();
	$("#tb_personProtected_OL tbody>tr").each(function(){
		if($(this).find("input:checkbox").prop("checked") == true){
			obj = {};
			obj["type"] 		=  $(this).find("td:nth-child(1) input").val();
			obj["min_age"] 		= $(this).find("td:nth-child(3) input[name='person_min_OL[]']").val();
			obj["min_age_unit"] = $(this).find("td:nth-child(4) option:selected").val();
			obj["max_age"]		= $(this).find("td:nth-child(5) input[name='person_max_OL[]']").val();
			obj["max_age_unit"] = $(this).find("td:nth-child(6) option:selected").val();
			obj["insurance_premium"] = $(this).find("td:nth-child(7) option:selected").val();
			protectedPerson.push(obj);
		}
	})
	
	var json_data_protectedPerson = {
		"method": "Tab_ProtectedPerson",
        "passInsurance": $("#pass_Insurance_coverage_ol").val(),
		"protectedPerson" : JSON.stringify(protectedPerson),
		"gender": gender,
		"max_insure_age": $("#maximum_Protection_To_ol").val()
	}
	
	$.ajax({
		url: 'RiderOL_SaveData_Servlet',
		type: "POST",
		data: json_data_protectedPerson,
		success: function (response) {
		
		}
	});
	console.log("data",json_data_protectedPerson);
}

/*4.คำนวณเบี้ย*/
function dataSave_calInsurancePremium_OL(){
	
	/*Age Band*/
	var ageBand = new Array();
	$("#tb_Age_Band_OL tbody>tr").each(function(){
		if($(this).find("input:checkbox").prop("checked") == true){
			obj = {};
			obj["value"] = $(this).find("td:nth-child(1) input").val();
			ageBand.push(obj);
		}
	})
	
	/*เบี้ยมาตรฐาน*/
	var select_insurance_premium = new Array();
	var table_insurance_premium = new Array();
	
	if($("#ch_standard_premium_ol").prop("checked") == true){
		if($("#sl_menu3_insurance_premium_ol option:selected").text() != "None"){
			
			obj_main = {};
			obj_main["pass"] = 1;
			obj_main["text"] = $("#sl_menu3_insurance_premium_ol option:selected").text();
			select_insurance_premium.push(obj_main);
			
			
			$("#tb_PM_Rate1_OL tbody>tr").each(function(){
				obj = {};
				
				var id = $(this).attr("id");
					id = id.replace("tbody_PM_Rate_OL","");
				var level = $(this).data("level");
				if(level == 1){
					obj["rate_cat_id"] = $("#rateCat_tbStardard_OL").val();
					obj["rate_type"] = $(this).find("td:nth-child(2) select>option:selected").val();			
					obj["age_band_code"] = "";
				}else{
					var group = $(this).attr("data-group");
					obj["rate_cat_id"] = $("#rateCat_tbStardard_age_OL").val();
					obj["rate_type"] = $("#tbody_PM_Rate_OL"+group).find("td:nth-child(2) select>option:selected").val();
					obj["age_band_code"] = $(this).find("td:nth-child(2) label").text();
				}
				
				obj["rate_layout_id"] = $("#rm_rateLayout_OL"+id).val();
				obj["file_id"] = $("#rm_fileID_OL"+id).val();
				obj["file"] = $(this).find("td:nth-child(3) input[type='text']").val();
				
				table_insurance_premium.push(obj);
			})
		}
	}

	/* อัตราเบี้ยเพิ่มตามขั้นอาชีพ */
	var rateByJob = new Array();
	$("#tb_premiumLevel_OL tbody>tr").each(function(){
		var max_SA = $(this).find("td:nth-child(4) input[type='text']").val();
			max_SA = max_SA.replace(/,/g, "");
			
		obj = {};
		obj["level"] = $(this).find("td:nth-child(1) label").text();
		obj["rate_from"] = Math.round10($(this).find("td:nth-child(2) input[type='text']").val()/100, -4);
		obj["rate_to"] = Math.round10($(this).find("td:nth-child(3) input[type='text']").val()/100, -4);
		obj["max_perSA"] = Math.round10(max_SA, -4);
		if(obj["rate_from"] !== "" && obj["rate_to"] !== ""){
			rateByJob.push(obj);
		}
	})
	
	/* มีส่วนลดเบี้ยประกัน */
	var rate_discount = new Array();
		obj = {};
		obj["prem_dis"] = $("#ch_importInsurance_ol").is(":checked");
		obj["min_prem_dis_rate"] = Math.round10($("#discountInsurancePremiumsSta_ol").val()/100, -4);
		obj["max_prem_dis_rate"] = Math.round10($("#discountInsurancePremiumsTo_ol").val()/100, -4);
	rate_discount.push(obj);
	
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
			
			obj["rate_cat_id"] = $("#rateCat_tbExtra_OL").val();
			
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

	/*checkbox*/
	var chk_extra = $("#ch_insurance_premium_Extra_ol").prop("checked");
	var chk_extra_value = false;
	if(chk_extra == true){
		chk_extra_value = true;
	}else{
		chk_extra_value = false;
	}
	
	/*NAR*/
	var sl_NAR = [];	
	obj = {};
	obj["pass"] = 1;
	obj["text"] = $("#sl_NAR_OL option:selected").text();
	if($("#sl_NAR_OL option:selected").text() != "None"){
		sl_NAR.push(obj);
	}

	var tb_NAR  = [];
	if($("#input_fileCal_4_OL").val() != ""){
		obj = {};
		obj["rate_type"] = "";
		obj["age_band_code"] = "";
		
		obj["rate_cat_id"] = $("#rateCat_inputNAR_OL").val();
		
		if($("#input_fileCal_4_OL").val()){
			obj["file_id"] = $("#NAR_fileID4_OL").val();
			obj["rate_layout_id"] = $("#NAR_rateLayout4_OL").val();
		}else{
			obj["file_id"] = "";
			obj["rate_layout_id"] = "";
		}
		obj["file"] = $("#input_fileCal_4_OL").val();
		tb_NAR.push(obj);
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
	
	var json_data_cal_insurancePremium = {
			"method": "Tab_CalInsurance_Premium",
	        "passInsurance": $("#pass_Insurance_coverage_ol").val(),
			"age_band" : JSON.stringify(ageBand),
			"select_insurance_premium" : JSON.stringify(select_insurance_premium),
			"table_insurance_premium" : JSON.stringify(table_insurance_premium),
			"table_rate_job" : JSON.stringify(rateByJob),
			"is_substd" : chk_extra_value,
			"select_extra_Rate" : JSON.stringify(sl_extra_premium),
			"table_extra_Rate" : JSON.stringify(tb_extra_premium),
			"EM_file" : JSON.stringify(tb_em),
            "min_EM": Math.round10($("#min_EM_ol").val()/100, -4),
            "max_EM": Math.round10($("#max_EM_ol").val()/100, -4),
			"prem_dis" : JSON.stringify(rate_discount),
			"is_standard_risk" : tb_risk,
			"table_dis_sa" : JSON.stringify(tb_DisSA),
			"select_NAR" : JSON.stringify(sl_NAR),
			"table_NAR" : JSON.stringify(tb_NAR),
		}
		
		$.ajax({
			url: 'RiderOL_SaveData_Servlet',
			type: "POST",
			data: json_data_cal_insurancePremium,
			success: function (response) {
			/*if (response == "success"){
			}else if (response == "fail"){
			}*/
			}
		});
		console.log("data",json_data_cal_insurancePremium);
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
					obj["rate_cat_id"] = $("#cv_rate_Agespecific_OL").val();
				}else{
					var data_group = $(this).data("group");
					var rate_type = $("#tbody_Rate_Value_OL"+data_group).find("td:nth-child(1) label").text();
					
					obj["rate_type"] = rate_type;
					obj["age_band_code"] = $(this).find("td:nth-child(1) label").text();
					obj["rate_cat_id"] =  $("#cv_rate_AgeBand_OL").val();
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
		url: 'RiderOL_SaveData_Servlet',
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

/*6. ผลประโยชน์/ความคุ้มครอง*/
function save_tab_benefitsCoverage_OL(){
	
	var benefitsCoverage = new Array();
	$("#tbl_benefit_OL tbody>tr").each(function(){
		var className = $(this).find("td:nth-child(1) i").attr('class');
		if(className == "glyphicon glyphicon-ok"){
			obj = {};
			obj["pass"] = $(this).find("td:nth-child(1)").data('value');
			obj["text"] = $(this).find("td:nth-child(2)").text();
			benefitsCoverage.push(obj)
			
			document.getElementById('resultTab_OL').value += "," + $(this).find("td:nth-child(1)").data('value');
			
		}
	})
	///LookupCatValueAcessData 
	$.ajax({
        type: "POST",
        url : "RiderOL_Data_default_Servlet",
        data: {
        	method 	: "getLookupBenefitdata",
        },       
        success : function(response) {	
        	lookupCatValueAcessData_OL(response);
        	var data_json = {
        			"method": "Tab_Benefits_Coverage_Checker",
        			"passInsurance": $("#pass_Insurance_coverage_ol").val(),
                    "benefitsCoverage": JSON.stringify(benefitsCoverage)
                }
        	
        	$.ajax({
        	url: 'RiderOL_SaveData_Servlet',
        	type: "POST",
        	data: data_json,
        	 success: function (response) {	
        		 
        		get_dataBenefit_OL(response);
        		 
        	 }
        	});
        	console.log("data",data_json);
        },
        error : function(response) {	
        	console.log("get bnf data error.");
        }
	});
	
	/*var data_json = {
			"method": "Tab_Benefits_Coverage_Checker",
			"passInsurance": $("#pass_Insurance_coverage_ol").val(),
            "benefitsCoverage": JSON.stringify(benefitsCoverage)
        }
	
	$.ajax({
	url: 'RiderOL_SaveData_Servlet',
	type: "POST",
	data: data_json,
	 success: function (response) {	
		get_dataBenefit_OL(response);
	 }
	});
	console.log("data",data_json);*/
}

/* 6.1 Save ผลประโยชน์/ความคุ้มครอง*/
function dataSave_benefitsCoverage_OL(tab){
	/*console.log($("#hidden_"+tab).val())*/
	var benefitsCoverage_ol = []; 
	var benefitsCoverage_tab = new Array();
	var rows_main = $("#tbl_"+tab).find("tr[data-level='1']");		
	var arr_flag = $("#tab_content_"+tab).data("flag");
	
	obj = {}; 
	obj["tab"] = $("#hidden_"+tab).val();
	obj["value"] = [];
	
	$(rows_main).each(function(){
		var id = $(this).attr("data-id");
		obj_all = [];

		obj_value = {};	
		obj_value["sequence"] = $(this).find("td:nth-child(2)").text(),
		obj_value["main"] = true,
		obj_value["key_coverage"] = $(this).find("td:nth-child(3)").text(),
		obj_value["coverage"] = $(this).find("td:nth-child(4)").text(),
		obj_value["count"] = Math.round10(replaceComma($(this).find("td:nth-child(5) input[type='text']").val())/100, -4),
		obj_value["unit"] = $(this).find("td:nth-child(6) option:selected").val(),
		obj_value["by_capital"] = $(this).find("td:nth-child(7) option:selected").val(),
		obj_value["frequency"] = $(this).find("td:nth-child(8) option:selected").val(),
		/*obj_value["of_coverage"] = $(this).find("td:nth-child(9) div>div").text(),*/
		obj_value["of_coverage"] = "";
		if(arr_flag == true){
			obj_value["is_terminate"] = $(this).find("td:nth-child(9) input[type=checkbox]").is(":checked");
			obj_value["is_deduct_cash_value"] = $(this).find("td:nth-child(10) input[type=checkbox]").is(":checked");
			obj_value["remark"] = $(this).find("td:nth-child(11) textarea").val(),
			obj_value["factor_min"] = Math.round10(replaceComma($(this).find("td:nth-child(12) input[type='text']").val())/100, -4),
			obj_value["factor_max"] = Math.round10(replaceComma($(this).find("td:nth-child(13) input[type='text']").val())/100, -4),
			obj_value["factor_unit"] = $(this).find("td:nth-child(14) option:selected").val(),
			obj_value["factor_per"] = $(this).find("td:nth-child(15) option:selected").val(),
			obj_value["accident_count"] = Math.round10(replaceComma($(this).find("td:nth-child(16) input[type='text']").val())/100, -4),
			obj_value["accident_unit"] = $(this).find("td:nth-child(17) option:selected").val()
		}else{
			obj_value["remark"] = $(this).find("td:nth-child(9) textarea").val(),
			obj_value["factor_min"] = Math.round10(replaceComma($(this).find("td:nth-child(10) input[type='text']").val())/100, -4),
			obj_value["factor_max"] = Math.round10(replaceComma($(this).find("td:nth-child(11) input[type='text']").val())/100, -4),
			obj_value["factor_unit"] = $(this).find("td:nth-child(12) option:selected").val(),
			obj_value["factor_per"] = $(this).find("td:nth-child(13) option:selected").val(),
			obj_value["accident_count"] = Math.round10(replaceComma($(this).find("td:nth-child(14) input[type='text']").val())/100, -4),
			obj_value["accident_unit"] = $(this).find("td:nth-child(15) option:selected").val(),
			
			obj_value["is_terminate"] = false,
			obj_value["is_deduct_cash_value"] = false
		}
		obj_all.push(obj_value);
		
		/*child*/
		$("#tbl_"+tab+" tr[data-group="+id+"]").each(function(){
	
			obj_value = {};	
			obj_value["sequence"] = $(this).find("td:nth-child(2)").text(),
			obj_value["main"] = false,
			obj_value["key_coverage"] = $(this).find("td:nth-child(3)").text(),
			obj_value["coverage"] = $(this).find("td:nth-child(4)").text(),
			obj_value["count"] = Math.round10(replaceComma($(this).find("td:nth-child(5) input[type='text']").val())/100, -4),
			obj_value["unit"] = $(this).find("td:nth-child(6) option:selected").val(),
			obj_value["by_capital"] = $(this).find("td:nth-child(7) option:selected").val(),
			obj_value["frequency"] = $(this).find("td:nth-child(8) option:selected").val(),
			/*obj_value["of_coverage"] = $(this).find("td:nth-child(9) div>div").text(),*/
			obj_value["of_coverage"] = "";
			if(arr_flag == true){
				obj_value["is_terminate"] = $(this).find("td:nth-child(9) input[type=checkbox]").is(":checked");
				obj_value["is_deduct_cash_value"] = $(this).find("td:nth-child(10) input[type=checkbox]").is(":checked");
				obj_value["remark"] = $(this).find("td:nth-child(11) textarea").val(),
				obj_value["factor_min"] = Math.round10(replaceComma($(this).find("td:nth-child(12) input[type='text']").val())/100, -4),
				obj_value["factor_max"] = Math.round10(replaceComma($(this).find("td:nth-child(13) input[type='text']").val())/100, -4),
				obj_value["factor_unit"] = $(this).find("td:nth-child(14) option:selected").val(),
				obj_value["factor_per"] = $(this).find("td:nth-child(15) option:selected").val(),
				obj_value["accident_count"] = Math.round10(replaceComma($(this).find("td:nth-child(16) input[type='text']").val())/100, -4),
				obj_value["accident_unit"] = $(this).find("td:nth-child(17) option:selected").val()
			}else{
				obj_value["remark"] = $(this).find("td:nth-child(9) textarea").val(),
				obj_value["factor_min"] = Math.round10(replaceComma($(this).find("td:nth-child(10) input[type='text']").val())/100, -4),
				obj_value["factor_max"] = Math.round10(replaceComma($(this).find("td:nth-child(11) input[type='text']").val())/100, -4),
				obj_value["factor_unit"] = $(this).find("td:nth-child(12) option:selected").val(),
				obj_value["factor_per"] = $(this).find("td:nth-child(13) option:selected").val(),
				obj_value["accident_count"] = Math.round10(replaceComma($(this).find("td:nth-child(14) input[type='text']").val())/100, -4),
				obj_value["accident_unit"] = $(this).find("td:nth-child(15) option:selected").val(),
				
				obj_value["is_terminate"] = false,
				obj_value["is_deduct_cash_value"] = false
			}
			obj_all.push(obj_value);
		});
		
		obj["value"].push(obj_all);
		
	});
	benefitsCoverage_ol.push(obj)
	
	var row_diease = $("#tbody_bnfL_"+tab+" tbody>tr").length;
	
	var table_disease = new Array();
	var obj_disease_main = {};
	obj_disease_main["item_name"] = $("#tab_content_"+tab).data("name");
	obj_disease_main["value"] = [];
	/*ตารางโรคร้ายแรง*/
	var index = 1;
	for(var i=0; i<row_diease ; i++){
		obj_disease = {};
		var distance = ""+index;
		/*var distance = $("#tbody_bnfL_"+tab+" tbody>tr").eq(i).find('td:nth-child(2) input').val();*/
		var duration_from = $("#tbody_bnfL_"+tab+" tbody>tr").eq(i).find('td:nth-child(2) input').val();
		var duration_from_type = $("#tbody_bnfL_"+tab+" tbody>tr").eq(i).find('td:nth-child(3) option:selected').val();
		var duration_to = $("#tbody_bnfL_"+tab+" tbody>tr").eq(i).find('td:nth-child(4) input').val();
		var duration_to_type = $("#tbody_bnfL_"+tab+" tbody>tr").eq(i).find('td:nth-child(5) option:selected').val();
		var select = $("#tbody_bnfR_"+tab+" tbody>tr").eq(i).find('td:nth-child(1) option:selected').val();
			
		var lst_death = [];
		var object_death = {};
		object_death["sa"] = Math.round10($("#tbody_bnfR_"+tab+" tbody>tr").eq(i).find('td:nth-child(2) input').val()/100, -4);
		object_death["sa_type"] = $("#tbody_bnfR_"+tab+" tbody>tr").eq(i).find('td:nth-child(3) option:selected').val();
		object_death["premium"] =  Math.round10($("#tbody_bnfR_"+tab+" tbody>tr").eq(i).find('td:nth-child(4) input').val()/100, -4);
		object_death["premium_type"] = $("#tbody_bnfR_"+tab+" tbody>tr").eq(i).find('td:nth-child(5) option:selected').val();
		object_death["include_EM"] = $("#tbody_bnfR_"+tab+" tbody>tr").eq(i).find('td:nth-child(6) input[type=checkbox]').is(":checked");
		object_death["CV_PV"] = Math.round10($("#tbody_bnfR_"+tab+" tbody>tr").eq(i).find('td:nth-child(7) input').val()/100, -4);
		object_death["CV_PV_type"] = $("#tbody_bnfR_"+tab+" tbody>tr").eq(i).find('td:nth-child(8) option:selected').val();
		object_death["other"] = $("#tbody_bnfR_"+tab+" tbody>tr").eq(i).find('td:nth-child(9) option:selected').val();
		lst_death.push(object_death);

		obj_disease = {
				"distance": distance,
				"duration_from": duration_from,
				"duration_from_type": duration_from_type,
				"duration_to": duration_to,
				"duration_to_type": duration_to_type,
				"select" : select,
				"death" : lst_death
		}
		
		/*table_disease.push(obj_disease);*/
		
		obj_disease_main["value"].push(obj_disease);
		index++;
	}
	table_disease.push(obj_disease_main);

	var lstDataTbl2 = new Array();
	var obj_tblExcept = {};
	obj_tblExcept["item_name"] = $("#tab_content_"+tab).data("name");
	obj_tblExcept["value"] = [];
	
	$('#exception_Table_'+tab+' tbody>tr').each(function(){
		var obj_except = {}
		obj_except["except_val"] = $(this).find('td:nth-child(1)').data('key');
		/*lstDataTbl2.push(obj_except);*/
		obj_tblExcept["value"].push(obj_except);
	});
	lstDataTbl2.push(obj_tblExcept);
	
	
	if($("#cv_"+tab).prop("checked") == true){
		checked_cv = true;
	}else{
		checked_cv = false;
	}
	var data_json = {
			"method": "Tab_Benefits",
        	"passInsurance": $("#pass_Insurance_coverage_ol").val(),
            "benefitsCoverage": JSON.stringify(benefitsCoverage_ol),
            "return_cv" : checked_cv,
            "table_disease" : JSON.stringify(table_disease),
            "table_exception" : JSON.stringify(lstDataTbl2),
    }
	
	$.ajax({
	url: 'RiderOL_SaveData_Servlet',
	type: "POST",
	data: data_json,
	 success: function (response) {
		
	 }
	});
	console.log("data json:",data_json);
}

/*บันทึกสลักหลัง*/
function dataSave_Endorse_OL(){
	
	var basePlan = new Array();
	var rider = new Array();
	
	if($("#rd_endorseMatch_OL2").is(":checked")){
		/*basePlan*/		
		$("#tbl_baseplanSelect_OL tbody>tr").each(function(){
			obj = {};
			obj["key_insurance"] = $(this).find("td:nth-child(2) label").text();
			obj["name_insurance"] = $(this).find("td:nth-child(3)").text();
			basePlan.push(obj);
		})
		
		/*rider*/		
		$("#tbl_riderSelect_OL tbody>tr").each(function(){
			obj = {};
			obj["key_insurance"] = $(this).find("td:nth-child(2) label").text();
			obj["name_insurance"] = $(this).find("td:nth-child(3)").text();
			rider.push(obj);
		})
	}
	
	/*รายการขยายความคุ้มครอง*/
	var expand_coverage = new Array();
	$("#record_Table_OL tbody>tr").each(function(){
		obj = {};
		obj["key"] = $(this).find("td:nth-child(1)").attr("data-key");
		obj["expand_coverage"] = $(this).find("td:nth-child(3) input[type='text']").val();
		expand_coverage.push(obj);
	})
	
	var data_json = {
			"method": "Tab_Endorse",
        	"passInsurance": $("#pass_Insurance_coverage_ol").val(),
        	"bnf_id" : $("#endorse_bnf_id_OL").val(),
			"basePlan" : JSON.stringify(basePlan),
			"rider" : JSON.stringify(rider),
			"expand_coverage" : JSON.stringify(expand_coverage)
        }
	//alert(JSON.stringify(data_json));
	$.ajax({
	url: 'RiderOL_SaveData_Servlet',
	type: "POST",
	data: data_json,
	 success: function (response) {
		/*if (response == "success"){
		}else if (response == "fail"){
		}*/
	}
	});
	console.log("data",data_json);
}

/* 7. Save ขออนุมัติ*/
function dataSave_approved_OL(claim){
	var code_Coverage = $("#pass_Insurance_coverage_ol").val();
	var name_TH = $("#name_TH_OL").val();
	var name_EN = $("#name_EN_Ol").val();
	var status_policy = $("#status_policy_OL").val();
	//var remark_user = $("textarea #remark_user").val();
	var status = "";
	var remark_noApproved = "";
	if(claim == "request"){
		status = "ขออนุมัติ"
	}else if(claim == "approved"){
		status = "อนุมัติ"
	}else{
		status = "ไม่อนุมัติ"
		remark_noApproved = $('#txt_noRemark_OL').val();
	}
	/*var data_json = {
		"method": "Tab_Approved",
        "passInsurance": $("#pass_Insurance_coverage_cl").val(),
		"code_Coverage": code_Coverage,
    	"name_TH": name_TH,
    	"name_EN": name_EN,
    	"status_policy": status_policy,
    	"remark_user": remark_user,
    	"status": status,
    	"remark_noApproved": remark_noApproved
		     
	}*/
	//alert(JSON.stringify(data_json));
	 /*$.ajax({
		 type: "POST",
		 url: "", 
		 data: data_json,
		 success: function(result){
			
	 }});*/
	//console.log("data",data_json)
}

//Tab Approved
function bt_approved_OL(claim){
	var cov_code = $("#code_Coverage_OL").val();
	var name_TH = $("#approve_nameTH_OL").val();
	var name_EN = $("#approve_nameEN_OL").val();
	var status_policy = $("#status_policy_OL").val();
	var groupName = $("#groupName").val();
	
	var status = "";
	var remark_noApproved = "";
	var remark_update = "";
	
	var status_th="";
	
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
		 url: "RiderOL_SaveData_Servlet", 
		 data: data_json,
		 success: function(response){
			console.log(response);
			
			/***  CODE FOR PREPARE AND SEND MAIL  ****/
			
			var prepareEmail_data = [];
			objEmail = {};
			objEmail["requestApprove"] 		=status_th;
			objEmail["manuName"] 			="ความคุ้มครองสัญญาเพิ่มเติม";
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
		
		/*** END CODE FOR PREPARE AND SEND MAIL  ****/
			
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
function setting_ApproveOL(response){
	var obj_BI = response.Tab_Basic_Information[0];
	/*NEW , UPDATE = แก้ไข, REQUEST_FOR_APPROVE = รออนุมัติ, APPROVED = อนุมัติ, REJECTED = ไม่อนุมัติ*/
	//var status = "UPDATE";
	var status = obj_BI.status;
	var status_RP = obj_BI.status_RP;
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
		 $("#menu_OL_8").removeClass("disabledAll");
		 $("#menu_OL_3").removeClass("disabledAll");
		 $("#menu_OL_4").removeClass("disabledAll");
		 $("#menu_OL_5").removeClass("disabledAll");
		 $("#menu_OL_9").removeClass("disabledAll");
		 $("#menu_OL_6").removeClass("disabledAll");
	}
}

/********************Lookup************************/
/*Lookup Basic Info*/
 function show_basicInformation_OL(response){	
		$("#cov_cat_id_OL").val(response.Tab_Basic_Information[0].cov_cat_id);
		
		// dropdown dateType
		var row_calendar = "";	
		for (i in response.Tab_Basic_Information[0].calendar) {
			var obj_calendar = response.Tab_Basic_Information[0].calendar[i];
				row_calendar = "<option value="+obj_calendar.pass+">"+obj_calendar.text+"</option>";	
				$(".unit_calendar").append(row_calendar);
		}
		
		$(".unit_calendar option").each(function(){
			if($(this).val() == "YEAR"){
				$(this).attr("selected", "selected");
			}
		});
		
		var carlendar_table_disease = [];
		for(i in response.Tab_Basic_Information[0].calendar){
			var obj_Unit = response.Tab_Basic_Information[0].calendar[i];
				carlendar_table_disease.push(obj_Unit.pass);
				carlendar_table_disease.push(obj_Unit.text);
		  		
			$("#lookup_bnf_unit_OL").val(carlendar_table_disease);	
		}
			
		// table mode
		var row_caseMonth = "";	
		for (i in response.Tab_Basic_Information[0].mode) {
			var obj_caseMonth = response.Tab_Basic_Information[0].mode[i];
				row_caseMonth = "<tr>"+
				  "<td><input name='mode_ol[]' id='mode"+i+"_ol' type='checkbox' value='"+obj_caseMonth.value+"' onclick='check_mode_value_OL(this.id,this.value);'></td>"+
				  "<td><label for='mode"+i+"_ol'>"+obj_caseMonth.pass+"</label></td>"+
				  "<td><label for='mode"+i+"_ol'>"+obj_caseMonth.text+"</label></td>"+
				  "</tr>";
						  
				$("#tbl_BI_Mode_OL tbody").append(row_caseMonth);
		}
		
		// table Filing Channel
		var row_filingChannel = "";		
		for (i in response.Tab_Basic_Information[0].filing_Channel) {
			var obj_filingChannel = response.Tab_Basic_Information[0].filing_Channel[i];
				row_filingChannel = "<tr>"+
					  "<td><input type='checkbox' id='ch_filingCN"+i+"_OL' value='"+obj_filingChannel.pass+"'></td>"+
					  "<td><label for='ch_filingCN"+i+"_OL'>&nbsp;&nbsp;"+obj_filingChannel.text+"</label></td>"+				
					  "</tr>";
							  	
				$("#tbl_BI_FilingCN_OL tbody").append(row_filingChannel);
		}	
		
		/* ประเภทสัญญา */
		var row_categoryLicence = "";	
		for (i in response.Tab_Basic_Information[0].contract_Type) {
			var obj_promiseType = response.Tab_Basic_Information[0].contract_Type[i];
			row_promiseType = "<option value="+obj_promiseType.pass+">"+obj_promiseType.text+"</option>";	
				$("#sl_promise_type_ol").append(row_promiseType);
		}
		
		$("#sl_promise_type_ol option").each(function(){
			if($(this).val() == "LONG_TERM"){
				$(this).attr("selected", "selected");
			}
		});
		
		/* ต่อหน่วย */
		var list_unit = "";		
		for (i in response.Tab_Basic_Information[0].per_unit) {
			var obj_unit = response.Tab_Basic_Information[0].per_unit[i];
			list_unit = "<option value='"+obj_unit.pass+"'>"+obj_unit.text+"</option>";
			  
			  $(".list_unit").append(list_unit);		  		  
		}
		
		/* ประเภทความคุ้มครอง */
		var list_coverageType = "";		
		for (i in response.Tab_Basic_Information[0].protect_Type) {
			var obj_coverageType = response.Tab_Basic_Information[0].protect_Type[i];
			list_coverageType = "<option value='"+obj_coverageType.pass+"'>"+obj_coverageType.text+"</option>";
			  
			  $(".protection_type").append(list_coverageType);		  		  
		}
		
		$("#sl_Protection_type_ol option").each(function(){
			if($(this).val() == "CURRENCY"){
				$(this).attr("selected", "selected");
			}
		});
		
		/* ระยะชำระเบี้ยของสัญญาเพิ่มเติม */
		var list_pay_Separately = "";
		/*for(i in response.Tab_Basic_Information[0].pay_Separately){
			var obj_pay_Separately = response.Tab_Basic_Information[0].pay_Separately[i];
			list_pay_Separately = 	"<tr>" +	
						"<td  class='borderBlack' width='5%'><input id='ch_payment_ol_"+i+"' type='checkbox' onclick='ch_payment_fun_ol("+i+");' value='"+obj_pay_Separately.pass+"' disabled></td>"+
						"<td class='borderBlack' width='25%' ><label for='ch_payment_ol_"+i+"'>"+obj_pay_Separately.pass+"</label></td>"+
						"<td  class='borderBlack' width='70%'>" +
					"<input id='set_Premium_Rate_ol_"+i+"' type='text' class='auto text-right form-control' value='0.00' data-v-min='0.00' data-v-max='999.99' disabled='disabled'>" +
				"</td>"+
			"</tr>";			  
			$("#tb_Sperately_Pay_ol tbody").append(list_pay_Separately);
		}*/
		var j = 0;
		for(jj=2; jj<=12; jj++){
			list_pay_Separately = 
				"<tr>"+	
				"<td class='borderBlack'><input id='ch_payment_ol_"+jj+"' type='checkbox' onclick='ch_payment_fun_ol("+jj+");' value='"+jj+"' disabled></td>"+
				"<td class='borderBlack'><label id='lb_payment_ol_"+jj+"' for='ch_payment_ol_"+jj+"'>"+jj+"</label></td>"+
				"<td class='borderBlack'>" +
				"<input id='set_Premium_Rate_ol_"+jj+"' type='text' class='auto text-right form-control' onblur='check_value_payment_OL("+jj+");' value='0.00' data-v-min='0.00' data-v-max='999.99' disabled='disabled'>" +
				"</td>"+
				"</tr>";			  
			$("#tb_Sperately_Pay_ol tbody").append(list_pay_Separately);
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
		
		/* ตารางมรณะ ที่ใช้ในการคำนวณอัตราดอกเบี้ย */
		var list_table_death = "";
		for(i in response.Tab_Basic_Information[0].table_Death){
			var obj_table_Death = response.Tab_Basic_Information[0].table_Death[i];
			list_table_death = 	"<tr id='tr_DeathOL"+i+"'>" +	
						"<td  class='borderBlack text-center' width='10% '><input id='ch_D_ol_"+i+"' type='checkbox' value='"+obj_table_Death.pass+"' onclick='ch_Table_D_ol("+i+");' disabled='disabled'></td>"+
						"<td class='borderBlack' width='10%' ><label for='ch_D_ol_"+i+"'>"+obj_table_Death.text+"</label></td>"+
						/*"<td  class='borderBlack text-right' width='15%'>" +
							"<input id='in_percent_D_"+i+"' type='text' class='auto text-right form-control' data-v-min='0' data-v-max='100' disabled='disabled'>" +
						"</td>"+*/
						"<td class='borderBlack' width='60%'><label id='textshow_tableD_ol_"+i+"'></label><input type='hidden' name='hdd_mort_id_ol' id='hdd_mort_id_ol"+i+"' value=''></td>" +
						"<td class='borderBlack' width='5%'><input disabled='disabled' id='btn_Adddata_D_ol_"+i+"' type='button' class='btn btn-default btn-primary' value='...' onclick='showModal_Table_D_OL("+i+");'>" + 
				"</td>"+
			"</tr>";			  
			$("#tb_BasicInformation_Death_OL tbody").append(list_table_death);
		}
		
		/* ตารางมรณะ ที่ใช้ในการคำนวณอัตราดอกเบี้ย (เลือก Popup)*/
		var list_table_death_popUp = "";
		for(i in response.Tab_Basic_Information[0].table_Death2){
			var obj_table_Death_popUp = response.Tab_Basic_Information[0].table_Death2[i];
			list_table_death_popUp = "<tr>" +	
					"<td class='borderBlack' width='5%' align='center'><input onclick='ra_table_D_ol("+i+")' value='"+obj_table_Death_popUp.pass+"' id='ra_table_D_ol_"+i+"' type='radio' name='check_D_ol'></td>"+
					"<td class='borderBlack' width='95%'><Label id='text_Table_D_ol_"+i+"'>"+obj_table_Death_popUp.text+"</Label></td>"+
				"</tr>";			  
			$("#mo_Table_D_OL tbody").append(list_table_death_popUp);
		}
		
		/* ตารางทุพพลภาพที่ใช้ในการคำนวณอัตราเบี้ย */
		var tbl_row_disabilityPremium = "";
		for (i in response.Tab_Basic_Information[0].table_Disability) {
			var obj_disabilityPremium = response.Tab_Basic_Information[0].table_Disability[i];
			tbl_row_disabilityPremium = "<tr id='tr_TPDOL"+i+"'>"+
						"<td class='borderBlack text-center'><input id='ch_TPD_ol_"+i+"' value='"+obj_disabilityPremium.pass+"' onclick='ch_Table_TPD_ol("+i+");' type='checkbox' disabled></td>"+
						"<td class='borderBlack'><label for='ch_TPD_ol_"+i+"'>"+obj_disabilityPremium.text+"</label></td>"+
						/*"<td class='borderBlack text-right'>"+
						"<input id='in_percent_TPD_"+i+"'  type='text' class='auto text-right form-control' data-v-min='0' data-v-max='100' disabled'>"+
						"</td>"+*/
						"<td width='60%' class='borderBlack'><label id='textshow_tableTPD_ol_"+i+"'></label><input type='hidden' name='hdd_tpd_id_ol' id='hdd_tpd_id_ol"+i+"' value=''></td>"+
						"<td  width='5%' class='borderBlack'><input disabled type='button' id ='btn_Adddata_TPD_ol_"+i+"' class='btn btn-default btn-primary' value='...' onclick='showModal_Table_TPD_OL("+i+");'></td>"+
				"</tr>";
			
			$("#tb_BasicInformation_TPD_OL tbody").append(tbl_row_disabilityPremium);
		}
		
		/* ตารางทุพพลภาพที่ใช้ในการคำนวณอัตราเบี้ย (เลือก Popup)*/
		var tbl_row_disabilityPremium_popUp = "";
		for (i in response.Tab_Basic_Information[0].table_Disability2) {
			var obj_disabilityPremium_popUp = response.Tab_Basic_Information[0].table_Disability2[i];
			tbl_row_disabilityPremium_popUp = "<tr>" +	
					"<td class='borderBlack' width='5%' align='center'><input onclick='ra_table_TPD_ol("+i+")' value='"+obj_disabilityPremium_popUp.pass+"' id='ra_table_TPD_ol_"+i+"' type='radio' name='check_TPD_ol'></td>"+
					"<td class='borderBlack' width='95%'><Label id='text_Table_TPD_ol_"+i+"'>"+obj_disabilityPremium_popUp.text+"</Label></td>"+
				"</tr>";	
			
			$("#mo_Table_TPD_OL tbody").append(tbl_row_disabilityPremium_popUp);
		}
		
		/*ตารางลดหย่อนภาษี*/
		var riderCode = $("#pass_Insurance_coverage_ol").val();
		var tbl_row_taxDeduction = "";
		var rowTax = "";
		
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
			getLayout_tax_OL(rowTax, obj_taxDeduction.file, riderCode);			 	
		}	
		
		// ค่าเริ่มต้นตาม User
		$("#ch_male_ol").prop("checked", true);
		$("#ch_female_ol").prop("checked", true);

		if($("#ch_male_ol").prop("checked") == true || $("#ch_female_ol").prop("checked") == true){
			$("#validate_input11_ol").hide();
		}else{
			$("#validate_input11_ol").show();
		}
		
		$("#rd_anniversary_ol").prop("checked", true);
		
		if($("#tb_BasicInformation1_OL tbody>tr").length <= 0){
			addRowBasicInformation1_OL();
			
			$("#tb_BasicInformation1_OL tbody>tr").addClass("disabledAll");
		}
		
		$("#sl_maximum_Protection_ol option").each(function(){
			if($(this).val() == "TO_AGE"){
				$(this).attr("selected", "selected");
			}
		})

}
 
/*lookup Policy wording*/
function show_policyWording_data_OL(response){
	var list_policy = "";	
	var j = 0;
	for (i in response.Tab_Policy_Wording) {
		var obj_policy = response.Tab_Policy_Wording[i];
		j++;
		list_policy = "<tr id='tbody_policy_OL"+j+"' data-id='"+obj_policy.pass+"'>"+
					  "<td id='imgOK_policy_OL"+j+"' class='text-center borderBlack td_disabled'></td>"+
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
						"<a id='span_history_OL"+j+"' class='active_grey open-HistoryDialog_OL' data-toggle='modal' data-id='"+j+"' onclick='history_policyWording_OL("+obj_policy.pass+")'><span class='glyphicon glyphicon-time'></span></a>"+										
					 "</td>"+										
					 "</tr>";
		  
		  $("#Policy_Table_OL tbody").append(list_policy);		  		  
	}	
} 

/* Lookup ผู้ได้รับความคุ้มครอง */
function show_ProtectedPerson_OL(response){	
	/* ตารางผู้ได้รับความคุ้มครอง */
	var row_tbPerson_protected = "";
	for (i in response.Tab_Protected_Person[0].table_Protected_Person) {
		var obj_tbPerson_protected = response.Tab_Protected_Person[0].table_Protected_Person[i];
			row_tbPerson_protected = "<tr>"+
			"<td class='borderBlack text-center vertical-middle'>"+
			"<input type='checkbox' id='imgOK_person_OL"+i+"' value='"+obj_tbPerson_protected.value+"' onclick='imgCheckbox_person_OL("+i+");'>"+
		"</td>"+
		"<td class='borderBlack vertical-middle'>"+
			"<input type='text' name='person_name_OL[]' id='person_name_OL"+i+"' class='form-control margin-padding0 text-center' value='"+obj_tbPerson_protected.text+"' readonly>"+										
		"</td>"+
		"<td width='10%' class='borderBlack'>"+
			"<input type='text' name='person_min_OL[]' id='person_min_OL"+i+"' class='auto text-right form-control' onkeyup='check_fromto_OL("+i+");' data-v-min='0' data-v-max='999' maxlength='3' disabled>"+
		"</td>"+
		"<td width='13%' class='borderBlack'>"+
			"<select name='person_min_unit_OL[]' id='person_min_unit_OL"+i+"' class='form-control text-center unit_calendarProtectedPerson' onchange='check_fromtoUnit_OL("+i+");' disabled>"+
				"<option value='NONE'>None</option>"+
			"</select>"+
		"</td>"+
		"<td width='10%' class='borderBlack'>"+
			"<input type='text' name='person_max_OL[]' id='person_max_OL"+i+"' class='auto text-right form-control' onkeyup='check_fromto_OL("+i+");' data-v-min='0' data-v-max='999' maxlength='3' disabled>"+
		"</td>"+
		"<td width='13%' class='borderBlack text-center'>"+
			"<select class='form-control unit_calendarProtectedPerson' name='person_max_unit_OL[]' id='person_max_unit_OL"+i+"' onchange='check_fromtoUnit_OL("+i+");' disabled>"+
				"<option value='NONE'>None</option>"+
			"</select>"+
		"</td>"+
		"<td class='borderBlack'>"+
			"<select name='person_insurance_OL[]' id='person_insurance_OL"+i+"' class='form-control text-center person_insurance' disabled>"+
				"<option value='NONE'>None</option>"+
			"</select>"+
		"</td>"+
	"</tr>";
				
	$("#tb_personProtected_OL tbody").append(row_tbPerson_protected);
	$('.auto').autoNumeric('init');
	
	}
	
	 /* date_Type */
	var row_calendar = "";	
	for (i in response.Tab_Protected_Person[0].age_coordinates) {
		var obj_calendar = response.Tab_Protected_Person[0].age_coordinates[i];
			row_calendar = "<option value="+obj_calendar.pass+">"+obj_calendar.text+"</option>";	
			$(".unit_calendarProtectedPerson").append(row_calendar);
	}
	
	/* เบี้ยประกัน */
	var row_insurance_premium = "";
	for (i in response.Tab_Protected_Person[0].insurance_premium) {
		var obj_insurance_premium = response.Tab_Protected_Person[0].insurance_premium[i];
			row_insurance_premium = "<option value="+obj_insurance_premium.pass+">"+obj_insurance_premium.text+"</option>";	
			$(".person_insurance").append(row_insurance_premium);
	}
	
}

function show_cal_insurance_premiums_OL(response){	
	var riderCode = $("#pass_Insurance_coverage_ol").val();
	$('#sl_menu3_insurance_premium_ol').prop("disabled",true);
	/*$("#ch_Base_rate").prop("disabled",false);
	$("#ch_Base_rate").prop( "checked", true );*/
	$("#ch_insurance_premium_Extra_ol").prop("disabled",true);
	$("#bt_view_cv_extraRate_OL").attr("disabled",true);
	$("#tb_premiumLevel_OL *").prop("disabled",true);
	
	/* ช่วงอายุ */
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
  	
	/* ตารางเบี้ยประกัน */
	var list_STDRate = "";	
	for (i in response.Tab_cal_insurance_premiums[0].selectbox_Std_Premiums[0].specific) {
		var obj_STDRate = response.Tab_cal_insurance_premiums[0].selectbox_Std_Premiums[0].specific[i];
		list_STDRate = "<option value='"+obj_STDRate.layout+"' data-subcat='"+obj_STDRate.sub_rate_cat+"'>"+obj_STDRate.text+"</option>";
		  
		$("#sl_menu3_insurance_premium_ol").append(list_STDRate);		  		  
	}
	
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
		list_ExtraRate = "<option value='"+obj_ExtraRate.pattern[0].layout+"' data-subcat='"+obj_ExtraRate.pattern[1].sub_rate_cat+"'>"+obj_ExtraRate.pattern[2].text+"</option>";
		  
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

	var list_NARRate = "";	
	for (i in response.Tab_cal_insurance_premiums[0].nar_Rate) {
		var obj_NARRate = response.Tab_cal_insurance_premiums[0].nar_Rate[i];
		list_NARRate = "<option value='"+obj_NARRate.pattern[0].layout+"' data-subcat='"+obj_NARRate.pattern[1].sub_rate_cat+"'>"+obj_NARRate.pattern[2].text+"</option>";
		  
		$("#sl_NAR_OL").append(list_NARRate);		  		  
	}
	
	var riderCode = $("#riderCode_OL").val();
	var list_EM = "";	
	for (i in response.Tab_cal_insurance_premiums[0].em_Age) {
		var obj_EM = response.Tab_cal_insurance_premiums[0].em_Age[i].pattern[0].layout;
		list_EM = obj_EM+riderCode+".txt";
		selectTypeCal_OL(list_EM,1);
		
		$("#spanBoxCal1_OL").attr("disabled",true);	  		  
	}
	
	selectTypeCal_OL("",4);
	$("#spanBoxCal4_OL").attr("disabled",true);
	
	/*EM*/
	var tb_em_hidden = "<input type='hidden' id='em_rateLayout1_OL' value=''>"+
	"<input type='hidden' id='em_fileID1_OL' value=''>";

	$("#div_fileCal1_OL").append(tb_em_hidden);
	
	/*NAR*/
	var tb_NAR_hidden = "<input type='hidden' id='NAR_rateLayout4_OL' value=''>"+
	"<input type='hidden' id='NAR_fileID4_OL' value=''>";

	$("#div_fileCal4_OL").append(tb_NAR_hidden);
	
	/* rate cat id */
	$("#rateCat_tbStardard_OL").val(response.Tab_cal_insurance_premiums[0].tb_premiums.premiums_cal_layout_0[0].rate_cat_id_specific);
	$("#rateCat_tbStardard_age_OL").val(response.Tab_cal_insurance_premiums[0].tb_premiums.premiums_cal_layout_0[0].rate_cat_id_age_Band);
	
	/*เบี้ยเพิ่ม*/
	$("#rateCat_tbExtra_OL").val(response.Tab_cal_insurance_premiums[0].tb_premiums.premiums_cal_layout_2[0].rate_cat_id_specific);
	
	/*EM file*/
	$("#rateCat_inputEM_OL").val(response.Tab_cal_insurance_premiums[0].tb_premiums.premiums_cal_layout_3[0].rate_cat_id_specific);
	$("#rateSubCat_inputEM_OL").val(response.Tab_cal_insurance_premiums[0].em_Age[0].pattern[1].sub_rate_cat);
	
	/*NAR file*/
	$("#rateCat_inputNAR_OL").val(response.Tab_cal_insurance_premiums[0].tb_premiums.premiums_cal_layout_4[0].rate_cat_id_specific);
	$("#rateSubCat_inputNAR_OL").val(response.Tab_cal_insurance_premiums[0].nar_Rate[0].pattern[1].sub_rate_cat);

	/*ตารางส่วนลดตามทุนประกัน*/
	var obj_disSa = response.Tab_cal_insurance_premiums[0].dis_Sa[0];
	list_disSa = obj_disSa.pattern[0].layout+riderCode+".txt";

	selectTypeCal_OL(list_disSa,3);	 
	
	$("#spanBoxCal3_OL").attr("disabled", true)
	
	var tb_disSa_hidden = "<input type='hidden' id='dsc_rateLayout3_OL' value=''>"+
	"<input type='hidden' id='dsc_fileID3_OL' value=''>";

	$("#div_fileCal3_OL").append(tb_disSa_hidden);
	$("#validate_filerate3_OL").hide();
	
	$("#rateCat_inputDisSA_OL").val(obj_disSa.pattern[3].rate_cat_id);
	$("#rateSubCat_inputDisSA_OL").val(obj_disSa.pattern[1].sub_rate_cat);
	
}

/* Lookup ตารางมูลค่ากรมธรรม์ */
function show_table_policy_value_OL(response){
	var list_Risk = "";	
	for (i in response.Tab_table_policy_value[0].selectbox_standard_risk[0].specific[0]) {
		var obj_Risk = response.Tab_table_policy_value[0].selectbox_standard_risk[0].specific[0][i][0];
		var numrow_layout = obj_Risk.file.length;
		
		if(numrow_layout > 1){
			var format1 = obj_Risk.file[0].layout;
			var format2 = obj_Risk.file[1].layout;
			var file_format = format1+","+format2;
		}else{
			var format1 = obj_Risk.file[0].layout;
			var file_format = format1;
		}
		
		list_Risk = "<option value='"+file_format+"' data-subcat='"+obj_Risk.sub_rate_cat+"'>"+obj_Risk.text+"</option>";
		  
		$("#dbBox1_OL").append(list_Risk);		  		  
	}
	
	$("#cv_rate_Agespecific_OL").val(response.Tab_table_policy_value[0].standard_risk[0].rate_cat_id_specific);
	$("#cv_rate_AgeBand_OL").val(response.Tab_table_policy_value[0].standard_risk[0].rate_cat_id_age_Band);
	
	var list_NoRisk = "";
	for (i in response.Tab_table_policy_value[0].selectbox_standard_risk_row) {
		var obj_ExtraRate = response.Tab_table_policy_value[0].selectbox_standard_risk_row[i];
		list_NoRisk = "<option value='"+obj_ExtraRate.pattern[0].layout+"' data-subcat='"+obj_ExtraRate.pattern[1].sub_rate_cat+"'>"+obj_ExtraRate.pattern[2].text+"</option>";
		  
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
			row_male += "<option value='"+obj_male.nonforf_rate_id+"' data-type='"+obj_male.nonforf_prov+"' data-year='"+obj_male.year+"' data-ref='"+obj_male.file_ref+"' data-file='"+obj_male.file_name+"'>"+obj_male.file_name+"</option>";
		}
		$("#dbBox3_2_OL").append(row_male);
		
		var row_female = "";
		for (i in response.Tab_table_policy_value[0].rpu[0].female) {
			var obj_female = response.Tab_table_policy_value[0].rpu[0].female[i];
			row_female += "<option value='"+obj_female.nonforf_rate_id+"' data-type='"+obj_female.nonforf_prov+"' data-year='"+obj_female.year+"' data-ref='"+obj_female.file_ref+"' data-file='"+obj_female.file_name+"'>"+obj_female.file_name+"</option>";
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
			row_male += "<option value='"+obj_male.nonforf_rate_id+"' data-type='"+obj_male.nonforf_prov+"' data-year='"+obj_male.year+"' data-ref='"+obj_male.file_ref+"' data-file='"+obj_male.file_name+"'>"+obj_male.file_name+"</option>";
		}
		$("#dbBox3_5_OL").append(row_male);
		
		var row_female = "";
		for (i in response.Tab_table_policy_value[0].eti[0].female) {
			var obj_female = response.Tab_table_policy_value[0].eti[0].female[i];
			row_female += "<option value='"+obj_female.nonforf_rate_id+"' data-type='"+obj_female.nonforf_prov+"' data-year='"+obj_female.year+"' data-ref='"+obj_female.file_ref+"' data-file='"+obj_female.file_name+"'>"+obj_female.file_name+"</option>";
		}
		$("#dbBox3_6_OL").append(row_female);
	}
	
	/*Khwan Fix ETI/RPU 03/12/2019*/
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
	
}

/*Lookup บันทึกสลักหลัง*/
function show_Endorse_OL(response){

	var row_Endorse = "";
	for (i in response.Tab_Endorse) {
		var obj_Endorse = response.Tab_Endorse[i];
		row_Endorse = "<tr id='tr_endorsementSelect_OL"+i+"'>" +
			"<td class='text-center vertical-middle'><input type='checkbox' name='opt_endorsementSelect_OL[]' id='opt_endorsementSelect_OL"+i+"' value="+obj_Endorse.pass+"></td>" +
			"<td class='text-center vertical-middle'><label for='opt_endorsementSelect_OL"+i+"'>"+obj_Endorse.pass+"</label></td>"+	
			"<td class='vertical-middle'><label id='lb_endorsementSelect_OL"+i+"'>"+obj_Endorse.text+"</label></td>" +
		"</tr>";
				
			$("#tbl_endorsement_OL tbody").append(row_Endorse);
			
	}
}
/*Lookup ผลประโยชน์/ความคุ้มครอง*/
function show_coverage_benefits_OL(response){
	
	/* ตารางผลประโยชน์และความคุ้มครอง */
	var row_table_coverageBenefits = "";
	for (i in response.Tab_Benefits[0].permanent_cat) {
		var obj_table_coverageBenefits = response.Tab_Benefits[0].permanent_cat[i];
			row_table_coverageBenefits = "<tr id='tbody_benefitOL"+i+"' class='borderBlack'>";
			if(obj_table_coverageBenefits.pass == "BC_OL_DDR_01"){
				row_table_coverageBenefits += "<td id='imgOK_benefitOL"+i+"' data-value='"+obj_table_coverageBenefits.pass+"' data-flag='true' class='text-center borderBlack' onclick='imgCheckbox_benefit_OL("+i+");' style='vertical-align: middle;'><i class='glyphicon glyphicon-edit' id='iconBenefitOL"+i+"'></i></td>";
			}else{
				row_table_coverageBenefits += "<td id='imgOK_benefitOL"+i+"' data-value='"+obj_table_coverageBenefits.pass+"' data-flag='false' class='text-center borderBlack' onclick='imgCheckbox_benefit_OL("+i+");' style='vertical-align: middle;'><i class='glyphicon glyphicon-edit' id='iconBenefitOL"+i+"'></i></td>";
			}
		  		
			row_table_coverageBenefits += "<td class='borderBlack'>"+obj_table_coverageBenefits.pass+" - "+obj_table_coverageBenefits.text+"</td>"+
		  	"</tr>";
				
			$("#tbl_benefit_OL tbody").append(row_table_coverageBenefits);
	}
	
	/*โรคร้ายแรง*/
	/*var numrow = $("#tbl_benefit_OL tbody>tr:last").attr("id");
		numrow = Number(numrow.replace("tbody_benefitOL",""))+1;
	
	row_table_coverageBenefits_BC05 = "<tr id='tbody_benefitOL"+numrow+"' class='borderBlack'>"+
		"<td id='imgOK_benefitOL"+numrow+"' data-value='BC_05' data-flag='true' class='text-center borderBlack' onclick='imgCheckbox_benefit_OL("+numrow+");' style='vertical-align: middle;'><i class='glyphicon glyphicon-edit' id='iconBenefitOL"+numrow+"'></i></td>"+
		"<td class='borderBlack'>BC_05 - โรคร้ายแรง</td>"+
	"</tr>";
	
	$("#tbl_benefit_OL tbody").append(row_table_coverageBenefits_BC05);*/

}

/*************************************** Show Case **********************************************/

/*show case*/
function showcase_basicInfo_OL(response){
	
	// set data
	var obj_data = response.Tab_Basic_Information[0];
	$("#cov_cat_id_OL").val(obj_data.cov_cat_id);
	
	$("#thai_Name_ol").val(obj_data.nameTH);
	
	$("#eng_Name_ol").val(obj_data.nameEN);
	$("#appStart_date_ol").val(obj_data.sale_eff_date);
	$("#appTo_date_ol").val(obj_data.sale_exp_date);
	$("#age_Start_ol").val(obj_data.age_Start);
	$("#age_To_ol").val(obj_data.age_To);
	
	
	/*bundle*/
	if(obj_data.is_bundle == true){
		$("#chk_bundleRider_OL1").prop("checked", true);
		$("#key_rider_code_ol").val(obj_data.rider_code);
		$("#key_rider_code_ol").prop("disabled", false);
		if(obj_data.coverage_Bundle.length > 0){
			$("#bundle_covCode_ol").val(obj_data.coverage_Bundle[0].cov_code);
		}		
		$("#addBundle_OL").prop("disabled", false);
		
	}	
	
	if(obj_data.max_insure_age != "0"){
		$("#sl_maximum_Protection_ol option:contains('ถึงอายุ')").prop("selected", "selected");
		$("#maximum_Protection_To_ol").val(obj_data.max_insure_age);
		$("#validate_input6_2ol").hide();
	}else if(obj_data.max_insure_year != "0"){
		$("#sl_maximum_Protection_ol option:contains('ปี')").prop("selected", "selected");
		$("#maximum_Protection_To_ol").val(obj_data.max_insure_year);
		$("#validate_input6_2ol").hide();
	}
	
	if(obj_data.age_Start_unit == "NONE" || obj_data.age_Start_unit == ""){
		$("#dmy_5_ol").val("NONE").attr('selected', 'selected');
	}else{
		$("#dmy_5_ol").val(obj_data.age_Start_unit).attr('selected', 'selected');
	}
	
	if(obj_data.age_To_unit == "NONE" || obj_data.age_To_unit == ""){
		$("#dmy_6_ol").val("NONE").attr('selected', 'selected');
	}else{
		$("#dmy_6_ol").val(obj_data.age_To_unit).attr('selected', 'selected');
	}
	
	if(obj_data.contract_type == "NONE" || obj_data.contract_type == ""){
		$("#sl_promise_type_ol").val("NONE").attr('selected', 'selected');
	}else{
		$("#sl_promise_type_ol").val(obj_data.contract_type).attr('selected', 'selected');
	}
	
	if(obj_data.coverage_type == "NONE" || obj_data.coverage_type == ""){
		$("#sl_Protection_type_ol").val("NONE").attr('selected', 'selected');
	}else{
		$("#sl_Protection_type_ol").val(obj_data.coverage_type).attr('selected', 'selected');
	}
	
	$("#text_Calculate_premiums_1ol").val(parseFloat(obj_data.prem_Rate*100).toFixed(2));
	$("#text_Calculate_premiums_2ol").val(parseFloat(obj_data.sum_decr_rate*100).toFixed(2));
	
	/*mode*/
	for (i in obj_data.mode) {
		var obj_BI_mode = obj_data.mode[i];	
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
	for (i in obj_data.filing_Channel) {
		var obj_BI_filing = obj_data.filing_Channel[i];	
		$("#tbl_BI_FilingCN_OL input:checkbox").each(function(){			
			if($(this).val() == obj_BI_filing.value){
				$(this).prop("checked", true);
			}
		});
	}
	
	/*เพศ*/
	if(obj_data.sex == "EITHER"){
		$("#ch_male_ol, #ch_female_ol").prop("checked",true);
	}else if(obj_data.sex == "MALE"){
		$("#ch_male_ol").prop("checked",true);
		$("#ch_female_ol").prop("checked",false);
	}else if(obj_data.sex == "FEMALE"){
		$("#ch_female_ol").prop("checked",true);
		$("#ch_male_ol").prop("checked",false);
	}
	
	/*ระยะประกันของสัญญาประกันชีวิต*/
	// คุ้มครองถึงอายุ
	if(obj_data.insurance_period_radio == "TO_AGE"){
		$("#rd_anniversary_ol").prop("checked", true);
	}else{
		$("#rd_Time_length_ol").prop("checked", true);
	}
	// ระยะเวลาคุ้มครอง
	if(obj_data.insurance_period_radio == "TO_YEAR"){
		var row = "";
		$("#tb_BasicInformation1_OL tbody>tr").remove();
		
		for (i in obj_data.insurance_period) {
			var obj_BI_insurance_period = obj_data.insurance_period[i];	
					
			var lastImgOK = $('#tb_BasicInformation1_OL >tbody>tr:last-child>td:first').attr("id") || 0;
			var numberImgOK = 0;
			
			if(lastImgOK == 0){
				numberImgOK = 1;
			}else{
				numberImgOK = Number(lastImgOK.replace("td_BasicInformation1_OL",""))+1;
			}
			var newID = "td_BasicInformation1_OL"+numberImgOK;
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
			
			var cloneUnitFrom  = $('#dmy_1_cl').clone();
			$(cloneUnitFrom).attr("id","durationFromOL_"+numberImgOK+"");
			$(cloneUnitFrom).attr("onclick","durationFromOL("+numberImgOK+");");
			$(cloneUnitFrom).attr("disabled", false);
			$(cloneUnitFrom).appendTo("#tbody_OL_BasicInformation_"+numberImgOK+">td:nth-child(3)");
			
			var cloneUnitTo  = $('#dmy_1_ol').clone();
			$(cloneUnitTo).attr("id","durationToOL_"+numberImgOK+"");
			$(cloneUnitTo).attr("onclick","durationToOL("+numberImgOK+");");
			$(cloneUnitTo).attr("disabled", false);
			$(cloneUnitTo).appendTo("#tbody_OL_BasicInformation_"+numberImgOK+">td:nth-child(5)");				
			
			$("#durationFromOL_"+numberImgOK+"").val(obj_BI_insurance_period.from_unit).attr('selected', 'selected');
			$("#durationToOL_"+numberImgOK+"").val(obj_BI_insurance_period.to_unit).attr('selected', 'selected');
		}
		
		/*remove NONE*/
		$("#tb_BasicInformation1 tbody select>option").each(function(){
			if($(this).text() == "None"){
				$(this).remove();
			}
		});
		
		$("#addRowBasicInfo_OL, #deleteRowBasicInfo_OL").prop("disabled", false);
		
	}else{
		/*คุ้มครองถึงอายุ*/
		for (i in obj_data.insurance_period) {
			var obj_BI_insurance_period = obj_data.insurance_period[i];
			$("#text_anniversary_ol").val(obj_BI_insurance_period.to).prop("disabled", false);
			if(obj_BI_insurance_period.to_unit == "NONE" || obj_BI_insurance_period.to_unit == ""){
				$("#dmy_1_ol").val("NONE").attr('selected', 'selected').prop("disabled", false);
			}else{
				$("#dmy_1_ol").val(obj_BI_insurance_period.to_unit).attr('selected', 'selected').prop("disabled", false);
			}
		}
		
		$("#addRowBasicInfo_OL, #deleteRowBasicInfo_OL").prop("disabled", true);
	}
	
	/*ระยะชำระเบี้ยของสัญญาประกันชีวิต*/
	if(obj_data.premium_preiod_radio != ""){
		$("#ch_PremRider_ol").prop("checked", true);
		$("#rd_insurance_premium_ol, #rd_Time_insurance_premium_ol").prop("disabled", false);
		
		if(obj_data.premium_preiod_radio == "TO_AGE"){
			$("#rd_insurance_premium_ol").prop("checked", true);
		}else{
			$("#rd_Time_insurance_premium_ol").prop("checked", true);
		}
			
		if(obj_data.premium_preiod_radio == "TO_AGE"){
			/*ชำระถึงอายุ*/
			$("#text_insurance_premium_ol").val(obj_data.premium_num).prop("disabled", false);
			if(obj_data.premium_preiod_unit == "NONE" || obj_data.premium_preiod_unit == ""){
				$("#dmy_3_ol").val("NONE").attr('selected', 'selected').prop("disabled", false);
			}else{
				$("#dmy_3_ol").val(obj_data.premium_preiod_unit).attr('selected', 'selected').prop("disabled", false);
			}
		}else{
			/*ระยะชำระเบี้ย*/	
			$("#text_Time_insurance_premium_ol").val(obj_data.premium_num).prop("disabled", false);
			if(obj_data.premium_preiod_unit == "NONE" || obj_data.premium_preiod_unit == ""){
				$("#dmy_4_ol").val("NONE").attr('selected', 'selected').prop("disabled", false);
			}else{
				$("#dmy_4_ol").val(obj_data.premium_preiod_unit).attr('selected', 'selected').prop("disabled", false);
			}
		}
	}
	
	/*แบ่งจ่ายได้*/
	if($("#rd_Time_insurance_premium_ol").prop("checked") == true && $("#dmy_4_ol option:selected").val() == "YEAR"){
	//if(obj_data.premium_preiod_unit == "YEAR"){
		$("#ch_sperately_pay_ch_ol").prop("disabled", false);
	}
	
	if(obj_data.pay_separately_checkbox == true){
		$("#ch_sperately_pay_ch_ol").prop("checked", true)		
	}
	
	for (i in obj_data.pay_separately) {
		var obj_BI_pay_separately = obj_data.pay_separately[i];
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
	for(i in obj_data.table_Cal1){
		var obj = obj_data.table_Cal1[i];
		$("#tb_CalPremiumUse_ol tbody>tr").each(function(i){
			if( obj.prem_assump_type == $(this).find('td:nth-child(1) input[type="checkbox"]').val()){
				$(this).find('td:nth-child(1) input[type="checkbox"]').prop("checked",true)
				ch_valPM_ol(i,"#ch_calPM_"+i+"_ol");
			}
		});
	}
		
	/*ตารางที่ใช้ในการคำนวณเบี้ย*/
	for(i in obj_data.table_Cal2){
		var obj = obj_data.table_Cal2[i];
		$("#tb_allCalPM_OL tbody>tr").each(function(i){
			var first_row = false;
			if( i % 3 == 0){
				first_row = true;
			}
			if(obj.prem_assump_type == $(this).data('value') && first_row == true){
				if( obj.gender == $(this).find('td:nth-child(2) input[type="checkbox"]').val()){
					$(this).find('td:nth-child(2) input[type="checkbox"]').prop("checked",true);
					$(this).find('td:nth-child(2) input[type="checkbox"]').prop("disabled",false);
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
	if(obj_data.prem_Rate != "0.0000"){
		var prem_rate = parseFloat(obj_data.prem_Rate*100).toFixed(2);
		$("#text_Calculate_premiums_1ol").val(prem_rate);
	}else{
		$("#text_Calculate_premiums_1ol").val("");
	}
	
	/*if(obj_data.sum_decr_rate != "0.0000"){
		var sum_decr_rate = parseFloat(obj_data.sum_decr_rate*100).toFixed(2);
		$("#text_Calculate_premiums_2ol").val(sum_decr_rate);
	}else{
		$("#text_Calculate_premiums_2ol").val("");
	}*/
	
	if(obj_data.prem_Rate != "0.0000"){
		var prem_rate = parseFloat(obj_data.prem_Rate*100).toFixed(2);
		$("#text_Calculate_premiums_1ol").val(prem_rate);
	}else{
		$("#text_Calculate_premiums_1ol").val("");
	}
	
	/*ลดหย่อนภาษีสุขภาพ 15,000 บาท*/
	if(obj_data.tax_health_prem != "0.0000"){
		var tax_health_prem = parseFloat(obj_data.tax_health_prem*100).toFixed(2);
		$("#text_tax_healthOL").val(tax_health_prem);
	}else{
		$("#text_tax_healthOL").val("");
	}
	
	/*ลดหย่อนภาษี*/
	if(obj_data.table_TaxReduce.length > 0){
		replaceLayout_tax(obj_data.passInsurance);
		
		for (i in obj_data.table_TaxReduce) {
			var obj_BI_Tax = obj_data.table_TaxReduce[i];
			
			$("#tb_TaxReduce_OL tbody>tr").each(function(){
				var dataID = Number($(this).attr("data-id"));
				var ID = $(this).attr("id");
					ID = ID.replace("tbody_TaxReduce_OL_","");
				if(dataID == obj_BI_Tax.pass){
					$(this).find("td:nth-child(3) input:text").val(obj_BI_Tax.layout);
					$(this).find("#hdd_layoutID_OL"+ID).val(obj_BI_Tax.id);
					$(this).find("#hdd_fileID_OL"+ID).val(obj_BI_Tax.fileID);
					$(this).find("td:nth-child(4) span,td:nth-child(5) span,td:nth-child(6) span").removeClass("activecolorgray").addClass("activecolorblue");
					$(this).find("td:nth-child(5) span").attr("onclick", "openFileTextRider_OL('"+obj_BI_Tax.layout+"','"+obj_BI_Tax.ref+"',41,'tb_TaxReduce_view_OL','modal_TableTaxReduce_OL')");
					$(this).find("td:nth-child(6) span").attr("onclick", "openFile_target('"+obj_BI_Tax.layout+"','"+obj_BI_Tax.ref+"','txt_download')");

				}
			});		
		}
	}	
	
	/*ปิดดอกจันทร์*/
	if(obj_data.nameTH != ""){
		$("#validate_input2_ol").hide();
	}
	
	if($("#maximum_Protection_To_ol").length > 0){
		$("#validate_input6_2ol").hide();
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
	
	/*อายุที่ได้รับความเห็นชอบ*/
	var age_Start_ol = $("#age_Start_ol").val();
	var age_unitStart_ol = $("#dmy_5_ol option:selected").val();
	var age_To_ol = $("#age_To_ol").val();
	var age_unitTo_ol = $("#dmy_6_ol option:selected").val();
	
	if(age_Start_ol != "" && age_unitStart_ol != "None" && age_To_ol != "" && age_unitTo_ol != "None"){
		$("#validate_input6_1ol").hide();
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
/* showcase Tab ผู้ได้รับความคุ้มครอง */
function showcase_ProtectedPerson_OL(response){
	var obj = response.Tab_protected_person[0];

	for (i in obj.protected_person) {
		var obj_protecetPerson = obj.protected_person[i];
		$("#tb_personProtected_OL tbody>tr").each(function(){
			var chk_value = $(this).find("td:nth-child(1) input:checkbox");
			if($(chk_value).val() == obj_protecetPerson.type){
				$(chk_value).prop("checked", true).prop("disabled", false);
				
				$(this).find("td:nth-child(3) input").val(obj_protecetPerson.min_age).prop("disabled", false);;
				$(this).find("td:nth-child(4) select").val(obj_protecetPerson.min_age_unit).attr('selected','selected').prop("disabled", false);;
				$(this).find("td:nth-child(5) input").val(obj_protecetPerson.max_age).prop("disabled", false);;
				$(this).find("td:nth-child(6) select").val(obj_protecetPerson.max_age_unit).attr('selected','selected').prop("disabled", false);;
				$(this).find("td:nth-child(7) select").val(obj_protecetPerson.prem).attr('selected','selected').prop("disabled", false);;
			}
		});			
	}	
}
/* showcase Tab การคำนวณเบี้ยประกัน */
function showcase_insurance_premiums_OL(response){
	var obj_CP = response.Tab_cal_insurance_premiums[0];
	var rcode = $("#pass_Insurance_coverage_ol").val();

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
		
		/*เช็คค่าเบี้ยมาตรฐานทั้งหมด */
		if(obj_CP.table_insurance_premium.length > 0 || obj_CP.prem_disc == true || obj_CP.Prem_occ_charge.length > 0 || obj_CP.table_Dis_Sa.length > 0){	// แก้ไขเนื่องจากเปลี่ยน หน้าจอเพื่อให้ทำงานต่อได้่
			$("#ch_standard_premium_ol").prop("checked", true);
			$("#ch_importInsurance_ol").prop("disabled", false);
			$("#ch_insurance_premium_Extra_ol").prop("disabled", false);
			$("#tb_premiumLevel_OL *").prop("disabled", false);

			/*dropdown*/
			if(obj_CP.select_insurance_premium.length > 0){
				for (i in obj_CP.select_insurance_premium) {
					var obj_CP_select_insurance_premium = obj_CP.select_insurance_premium[i];
					if(obj_CP_select_insurance_premium.pass == 26){
						var dd_text = obj_CP_select_insurance_premium.text;
					}
				}
			}

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
				}

				for (i in obj_CP.table_insurance_premium) {
					
					var obj_CP_table_insurance_premium = obj_CP.table_insurance_premium[i];
					/*var type = obj_CP_table_insurance_premium.file.replace(dd_value,"");
						type = type.replace("_"+rcode+".txt","");	*/
					var type = obj_CP_table_insurance_premium.sub_code;
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
										"<input type='text' class='form-control' id='fileuploads_PMRateText"+lastID+"_OL' readonly='' value='"+obj_CP_table_insurance_premium.file+"'>"+ 
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
						
						$("#fileuploads_PMRateText"+lastID+"_OL").attr("placeholder", dd_value+rate_type+"_"+rcode+".txt");				  	
						var uploadfile = "selectFileRate_OL("+select_type+",'s','fileuploads_PMRate"+lastID+"_OL','"+dd_value+rate_type+"_"+rcode+"','','sl_menu3_insurance_premium_ol','span_PM_Rateopen_OL_"+lastID+"')";					
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
						var tbCal = "";
						var tbl_name = "";
						var modal_name = "";
						if(select_type == 1){
							tbCal = 61;
							tbl_name = "tbl_PMRatePlan_OL";
							modal_name = "modal_PMRate_OL";
						}else if(select_type == 2){
							tbCal = 41;
							tbl_name = "tbl_PMRatePlan4Col_OL";
							modal_name = "modal_PMRate4Col_OL";
						}else if(select_type == 3){
							tbCal = 41;
							tbl_name = "tbl_PMRatePlan4Col_OL";
							modal_name = "modal_PMRate4Col_OL";
						}
						$("#span_PM_Rateopen_OL_"+lastID+">span").attr("onclick", "openFileTextRider_OL('"+obj_CP_table_insurance_premium.file+"','"+obj_CP_table_insurance_premium.ref+"',"+tbCal+",'"+tbl_name+"','"+modal_name+"')");
						$("#span_PM_Ratedownload_OL_"+lastID+">span").attr("onclick", "openFile_target('"+obj_CP_table_insurance_premium.file+"','"+obj_CP_table_insurance_premium.ref+"','txt_download')");

						
						/************************************/
						var num_row = parseInt(i) + 1;

						if(response.Tab_cal_insurance_premiums[0].table_extra_Rate.length == 0 ){
							var row_extraRate = "<tr id='tbody_Extra_Rate_OL"+num_row+"'>"+
							"<td class='borderBlack vertical-middle'><label>"+type+"</label></td>"+
							"<td class='borderBlack'>"+
							  	"<div class='input-group'>"+
								"<input type='text' class='form-control' id='fileuploads_ExtraRateText"+num_row+"_OL' readonly>"+ 
									"<label class='input-group-btn'>"+ 
									  "<span id='spanExtraRate"+num_row+"_OL' class='btn btn-primary' disabled>"+
									  	"<font id='validate_extrarate"+num_row+"_OL' style='color: red;'>*</font>..."+
									  		"<input id='fileuploads_ExtraRate"+num_row+"_OL' type='file' accept='text/plain' style='display: none;' disabled>"+ 
									  "</span>"+
									 "</label>"+
								"</div>"+
								"<input type='hidden' id='ext_rateLayout_OL"+num_row+"' value=''>"+
								"<input type='hidden' id='ext_fileID_OL"+num_row+"' value=''>"+
							 "</td>"+
							 "<td class='borderBlack'>"+
							 	"<a id='span_Extra_Rateopen_OL_"+num_row+"' class='active_grey' disabled>"+
									"<span class='glyphicon glyphicon-eye-open activecolorgray' disabled></span>"+
								"</a>"+							 	
							 "</td>"+
							 "<td class='borderBlack'>"+
								 "<a id='span_Extra_Ratedownload_OL_"+num_row+"' class='active_grey' disabled>"+
									"<span class='glyphicon glyphicon-download-alt activecolorgray' disabled></span>"+
								 "</a>"+
							"</td>"+
							"</tr>";								
							
							$("#tb_Extra_Rate_OL>tbody").append(row_extraRate);
						}
						
						/*ความเสี่ยงมาตรฐาน*/
						//if(response.Tab_table_policy_value[0].table_policy_value.length <= 0 && obj_CP_table_insurance_premium.type == ""){
						if(obj_CP_table_insurance_premium.type == ""){
							var new_riskStardard = "<tr id='tbody_Rate_Value_OL"+num_row+"' data-id='"+num_row+"' data-level='1'>"+
							  "<td class='borderBlack vertical-middle'><label>"+type+"</label></td>"+
							  "<td class='borderBlack'>"+
							  	"<div class='input-group'>"+
								"<input type='text' class='form-control' id='fileuploads_RateValueText"+num_row+"_OL' readonly=''>"+ 
									"<label class='input-group-btn'>"+ 
									  "<span id='spanRateValue"+num_row+"_OL' class='btn btn-primary' disabled>..."+
									  	/*"<font id='validate_RateValue"+num_row+"_CL' style='color: red;'>*</font>..."+*/
									  		"<input id='fileuploads_RateValue"+num_row+"_OL' type='file' accept='text/plain' style='display: none;' disabled>"+ 
									  "</span>"+
									 "</label>"+
								"</div>"+
								"<input type='hidden' id='cv_rateLayout_OL"+num_row+"' value=''>"+
								"<input type='hidden' id='cv_fileID_OL"+num_row+"' value=''>"+	
							  "</td>"+
							  "<td class='borderBlack'>"+
							 	"<a id='span_RateValueopen_OL_"+num_row+"' class='active_grey' disabled>"+
									"<span class='glyphicon glyphicon-eye-open activecolorgray' disabled></span>"+
								"</a>"+							 	
							 "</td>"+
							 "<td class='borderBlack'>"+
								 "<a id='span_RateValuedownload_OL_"+num_row+"' class='active_grey' disabled>"+
									"<span class='glyphicon glyphicon-download-alt activecolorgray' disabled></span>"+
								 "</a>"+
							 "</td>"+				
							"</tr>";
							
							$("#tb_RateValue1_OL tbody").append(new_riskStardard);
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
									"<input type='text' class='form-control' id='fileuploads_PMRateText"+thisID_Sub+"_OL' readonly='' value='"+obj_CP_table_insurance_premium.file+"'>"+ 
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
											  "<span id='spanRateValue"+thisID_Sub+"_OL' class='btn btn-primary' disabled>..."+
											  	/*"<font id='validate_RateValue"+thisID_Sub+"_CL' style='color: red;'>*</font>..."+*/
											  		"<input id='fileuploads_RateValue"+thisID_Sub+"_OL' type='file' accept='text/plain' style='display: none;' disabled>"+ 
											  "</span>"+
											 "</label>"+
										"</div>"+
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
								$("#fileuploads_PMRateText"+thisID_Sub+"_OL").attr("placeholder", dd_value+rate_type+"_"+age_band+"_"+rcode+".txt");				  	
								var uploadfile = "selectFileRate_OL("+select_type+",'b','fileuploads_PMRate"+thisID_Sub+"_OL','"+dd_value+rate_type+"_"+age_band+"_"+rcode+"','','sl_menu3_insurance_premium_ol','span_PM_Rateopen_OL_"+thisID_Sub+"')";					
								$("#fileuploads_PMRate"+thisID_Sub+"_OL").attr('onchange', uploadfile);	
								/*****************************/
								

								/*get show file data*/
								var tbCal = "";
								var tbl_name = "";
								var modal_name = "";
								if(select_type == 1){
									tbCal = 61;
									tbl_name = "tb_PM_Rate_view_T1_view";
									modal_name = "modal_PMRate_CL_view";
								}else if(select_type == 2){
									tbCal = 41;
									tbl_name = "tbl_PMRatePlan4Col_OL";
									modal_name = "modal_PMRate4Col_OL";
								}else if(select_type == 3){
									tbCal = 41;
									tbl_name = "tbl_PMRatePlan4Col_OL";
									modal_name = "modal_PMRate4Col_OL";
								}
								$("#span_PM_Rateopen_OL_"+thisID_Sub+">span").attr("onclick", "openFileTextRider_OL('"+obj_CP_table_insurance_premium.file+"','"+obj_CP_table_insurance_premium.ref+"',"+tbCal+",'"+tbl_name+"','"+modal_name+"')");
								$("#span_PM_Ratedownload_OL_"+thisID_Sub+">span").attr("onclick", "openFile_target('"+obj_CP_table_insurance_premium.file+"','"+obj_CP_table_insurance_premium.ref+"','txt_download')");

								
							}
						
						});								
					}

				}
				
				//$("#tb_PM_Rate1>tbody>tr:first-child").remove();
			}

			// อัตราเบี้ยเพิ่มตามขั้นอาชีพ
			if(obj_CP.Prem_occ_charge.length > 0){		
				for (i in obj_CP.Prem_occ_charge) {
					var obj = obj_CP.Prem_occ_charge[i];
					$("#tb_premiumLevel_OL tbody>tr").each(function(){
						if($(this).find('td:nth-child(1) label').text() == obj.lvclass){
							$(this).find('td:nth-child(2) input').val((obj.start*100).toFixed(2)).prop("disabled", false);
							$(this).find('td:nth-child(3) input').val((obj.to*100).toFixed(2)).prop("disabled", false);
							$(this).find('td:nth-child(4) input').val(Comma(parseFloat(obj.max_extra_per).toFixed(2))).prop("disabled", false);  
						}
					});
				}
			}
			
			/*ตารางส่วนลดตามทุนประกัน*/
			if(obj_CP.table_Dis_Sa.length > 0){	
				var obj_SA = obj_CP.table_Dis_Sa[0];
				$("#input_fileCal_3_OL").val(obj_SA.file);
				$("#dsc_rateLayout3_OL").val(obj_SA.layout);
				$("#dsc_fileID3_OL").val(obj_SA.fileID);
			}
			
			$("#spanBoxCal3_OL").attr("disabled", false);
			$("#select_fileCal_3_OL").prop("disabled", false);
			if($("#input_fileCal_3_OL").val() != ""){
				$("#dsc_Input_ol").prop("disabled", false);
				$("#dsc_Input_ol").attr("onclick", "openFileTextRider_OL('"+obj_SA.file+"','"+obj_SA.ref+"',52,'tb_inputDisSA_OL_Rate','modal_inputDisSA_OL_Rate')");
				
			}
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
						type = type.replace("_"+rcode+".txt","");*/
						type = obj_extraRate.sub_code;
					}else{
						type = "None";
					}
					
					/*file*/
					var filename = "";
					if(obj_CP.table_extra_Rate.length > 0){
						filename = obj_extraRate.file;
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
					var file_layout = dd_value+type+"_"+rcode;
					var uploadfile = "selectFileRate_OL(4,'b','fileuploads_ExtraRate"+aa+"_OL','"+file_layout+"','','sl_insurance_premium_Extra_ol','span_Extra_Rateopen_OL_"+aa+"')";
					
					$("#fileuploads_ExtraRateText"+aa+"_OL").attr("placeholder",file_layout+".txt");
					$("#fileuploads_ExtraRate"+aa+"_OL").attr("onchange",uploadfile);
					/*end insert*/
					
					$("#span_Extra_Rateopen_OL_"+aa+">span").attr("onclick", "openFileTextRider_OL('"+obj_extraRate.file+"','"+obj_extraRate.ref+"',51,'tbl_ExtraRatePlan_OL','modal_ExtraRate_OL')");
					$("#span_Extra_Ratedownload_OL_"+aa+">span").attr("onclick", "openFile_target('"+obj_extraRate.file+"','"+obj_extraRate.ref+"','txt_download')");

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
					$("#input_fileCal_1_OL").val(obj_EM.file);
					if(obj_EM.file != ""){
						$("#validate_filerate1_OL").css("display","none");
						$("#spanBoxCal1_OL").attr("disabled", false);
						$("#cv_InputExtra_Rate_ol").prop("disabled", false);
						$("#select_fileCal_1_OL").attr("disabled", false);
						$("#cv_InputExtra_Rate_ol").attr("onclick", "openFileTextRider_OL('"+obj_EM.file+"','"+obj_EM.ref+"',3,'tb_inputExtra_RateView_OL','modal_inputExtra_RateView_OL')")
						
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
		
		/*NAR*/
		if(obj_CP.select_NAR.length > 0 || obj_CP.table_NAR.length > 0){	
		//if(obj_CP.table_capital_decrease.length > 0){	
			$("#ch_NAR_ol").prop("checked", true);
			
			/*dropdown*/
			for (i in obj_CP.select_NAR) {
				var obj_CP_select_NAR = obj_CP.select_NAR[i];
				if(obj_CP_select_NAR.pass == 1){
					var dd_text = obj_CP_select_NAR.text;
				}
			}
		
			$("#sl_NAR_OL").prop("disabled", false);
			$("#sl_NAR_OL option:contains("+dd_text+")").attr("selected", "selected");
			
			
			var sl_NAR = $("#sl_NAR_OL option:selected").val();
			var type_NAR = sl_NAR+rcode+".txt";
			selectTypeCal_OL(type_NAR,4);
			
			$("#input_fileCal_4_OL").val(obj_CP.table_NAR[0].file);
			if(obj_CP.table_NAR[0].file != ""){
				$("#validate_filerate4_OL").css("display","none");
			}
			$("#select_fileCal_4_OL, #spanBoxCal4_OL, #cv_NAR_Rate_ol").attr("disabled", false);
			$("#cv_NAR_Rate_ol").attr("onclick", "openFileTextRider_OL('"+obj_CP.table_NAR[0].file+"','"+obj_CP.table_NAR[0].ref+"',63,'tb_inputNAR_OL_Rate','modal_inputNAR_OL_Rate')");
			/*file*/		
			var tb_NAR_hidden = 
				"<input type='hidden' id='NAR_rateLayout4_OL' value='"+obj_CP.table_NAR[0].layout+"'>"+
				"<input type='hidden' id='NAR_fileID4_OL' value='"+obj_CP.table_NAR[0].fileID+"'>";
			
			$("#div_fileCal4_OL").append(tb_NAR_hidden);
					
		}		
	
}

function showcase_PolicyValue_OL(response){
	var obj_PV = response.Tab_table_policy_value[0];
	var bcode = $("#pass_Insurance_coverage_ol").val();
	
	/*กรณีเลือกคำนวณทุนจากเบี้ยประกันไว้*/
	addRowPM_Rate_OL();
	
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
			
			if(dd_split.length > 1){
				placeholder = dd_pattern1+rate_type+"_"+bcode+".txt หรือ "+dd_pattern2+rate_type+"_"+bcode+".txt";
				uploadfile = "selectFileRate_OL(5,'s','fileuploads_RateValue"+lastID+"_OL','"+dd_pattern1+rate_type+"_"+bcode+"','"+dd_pattern2+rate_type+"_"+bcode+"','dbBox1_OL','span_RateValueopen_OL_"+lastID+"')";	
			}else{
				placeholder = dd_pattern1+rate_type+"_"+bcode+".txt";
				uploadfile = "selectFileRate_OL(5,'s','fileuploads_RateValue"+lastID+"_OL','"+dd_pattern1+rate_type+"_"+bcode+"','','dbBox1_OL','span_RateValueopen_OL_"+lastID+"')";
			}
			
			$("#fileuploads_RateValueText"+lastID+"_OL").attr("placeholder", placeholder);				  	
						
			$("#fileuploads_RateValue"+lastID+"_OL").attr('onchange', uploadfile);
			$("#fileuploads_RateValue"+lastID+"_OL").attr("disabled", false);
			
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
				uploadfile = "selectFileRate_OL(5,'b','fileuploads_RateValue"+thisID_Sub+"_OL','"+dd_pattern1+rate_type+"_"+age_band+"_"+bcode+"','"+dd_pattern2+rate_type+"_"+age_band+"_"+bcode+"','dbBox1_OL','span_RateValueopen_OL_"+thisID_Sub+"')";	
			}else{
				placeholder = dd_pattern1+rate_type+"_"+age_band+"_"+bcode+".txt";
				uploadfile = "selectFileRate_OL(5,'b','fileuploads_RateValue"+thisID_Sub+"_OL','"+dd_pattern1+rate_type+"_"+age_band+"_"+bcode+"','','dbBox1_OL','span_RateValueopen_OL_"+thisID_Sub+"')";
			}
			
			$("#fileuploads_RateValueText"+thisID_Sub+"_OL").attr("placeholder", placeholder);				  						
			$("#fileuploads_RateValue"+thisID_Sub+"_OL").attr('onchange', uploadfile);
			$("#fileuploads_RateValue"+thisID_Sub+"_OL").attr("disabled", false);
			
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
				
				/**************************************/
				/*set cv table*/
				if(obj_PV_table_policy_value.type == ""){
					$("#tb_RateValue1_OL tbody>tr[data-level='1']").each(function(){
						var lastID = $(this).attr("id");
							lastID = lastID.replace("tbody_Rate_Value_OL","");
						var rate_type = $(this).find("td:nth-child(1) label").text();
						
						if(type == rate_type){
							$(this).find("td:nth-child(2) input:text").val(obj_PV_table_policy_value.file);
							$(this).find("td:nth-child(2) input[type='hidden']").eq(0).val(obj_PV_table_policy_value.layout);
							$(this).find("td:nth-child(2) input[type='hidden']").eq(1).val(obj_PV_table_policy_value.fileID);
							
							$(this).find("td:nth-child(3) a").attr("disabled", false);
							$(this).find("td:nth-child(3) span").attr("disabled", false).removeClass("activecolorgray").addClass("activecolorblue").attr("onclick", "openFileTextRider_OL('"+obj_PV_table_policy_value.file+"','"+obj_PV_table_policy_value.ref+"',12,'tbl_StandardRisk_OL','cvStandardRisk_OL')");
							$(this).find("td:nth-child(4) a").attr("disabled", false);
							$(this).find("td:nth-child(4) span").attr("disabled", false).removeClass("activecolorgray").addClass("activecolorblue").attr("onclick", "openFile_target('"+obj_PV_table_policy_value.file+"','"+obj_PV_table_policy_value.ref+"','txt_download')");
							$(this).find("td:nth-child(2) input[type='file']").attr("disabled", false);
						}

					});
				}else{
					$("#tb_RateValue1_OL tbody>tr[data-level='2']").each(function(){
						var thisID_Sub = $(this).attr("id");
							thisID_Sub = thisID_Sub.replace("tbody_Rate_Value_OL","");
						var age_band = $(this).find("td:nth-child(1) label").text();
						var group = $(this).attr("data-group");
						var rate_type = $("#tbody_Rate_Value_OL"+group).find("td:nth-child(1) label").text();
						
						if(type == rate_type && band == age_band){
							$(this).find("td:nth-child(2) input:text").val(obj_PV_table_policy_value.file);
							$(this).find("td:nth-child(2) input[type='hidden']").eq(0).val(obj_PV_table_policy_value.layout);
							$(this).find("td:nth-child(2) input[type='hidden']").eq(1).val(obj_PV_table_policy_value.fileID);
						
							$(this).find("td:nth-child(3) a").attr("disabled", false);
							$(this).find("td:nth-child(3) span").attr("disabled", false).removeClass("activecolorgray").addClass("activecolorblue").attr("onclick", "openFileTextRider_OL('"+obj_PV_table_policy_value.file+"','"+obj_PV_table_policy_value.ref+"',12,'tbl_StandardRisk_OL','cvStandardRisk_OL')");
							$(this).find("td:nth-child(4) a").attr("disabled", false);
							$(this).find("td:nth-child(4) span").attr("disabled", false).removeClass("activecolorgray").addClass("activecolorblue").attr("onclick", "openFile_target('"+obj_PV_table_policy_value.file+"','"+obj_PV_table_policy_value.ref+"','txt_download')");
							$(this).find("td:nth-child(2) input[type='file']").attr("disabled", false);
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
			var filetype = $("#dbBox2_OL option:selected").val();
			selectType_OL(filetype+bcode,2);
			$("#input_file_2_OL").val(obj_PV.table_Low_Risk[0].file);
			$("#spanBox2_OL, #cv2_OL").attr("disabled", false);
			$("#select_file_2_OL").prop("disabled", false);
			$("#cv2_OL").attr("onclick", "openFileTextRider_OL('"+obj_PV.table_Low_Risk[0].file+"','"+obj_PV.table_Low_Risk[0].ref+"',13,'tbl_NotStandardRisk_OL','cvNotStandardRisk_OL')")
			
			if($("#input_file_2_OL").val() != ""){
				$("#validate_input2_OL").hide();
			}else{
				$("#validate_input2_OL").show();
			}
			
			$("#cvLow_rateLayout2_OL").val(obj_PV.table_Low_Risk[0].layout);
			$("#cvLow_fileID2_OL").val(obj_PV.table_Low_Risk[0].fileID);

		}

		var error_ETI_RPU = 0;
		/*RPU*/
		if(obj_PV.RPU.length > 0 || obj_PV.ETI.length > 0){
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
				
					$("#dbBox3_1_OL, #dbBox3_2_OL, #dbBox3_3_OL").prop("disabled", false);
					//$("#tmo1_OL, #tmo2_OL").prop("disabled", false);
				
				
					$("#dbBox3_4_OL, #dbBox3_5_OL, #dbBox3_6_OL").prop("disabled", false);
					//$("#tmo3_OL, #tmo4_OL").prop("disabled", false);		
			}
			
			var tbl_col = 55;
			var modal_cv = "ETIRPU_OL";
			var tbl_name = "tbl_ETIRPU_OL";
			
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
				
				if(file_ref_male != ""){
					$("#tmo1_OL").attr("onclick", "openFileTextRider_OL('"+file_name_male+"','"+file_ref_male+"',"+tbl_col+",'"+tbl_name+"','"+modal_cv+"')");
					$("#tmo1_OL").prop("disabled", false);					
				}
				
				var file_ref_female = $("#dbBox3_3_OL option:selected").attr("data-ref");
				var file_name_female = $("#dbBox3_3_OL option:selected").attr("data-file");
				
				if(file_ref_female != ""){
					$("#tmo2_OL").attr("onclick", "openFileTextRider_OL('"+file_name_female+"','"+file_ref_female+"',"+tbl_col+",'"+tbl_name+"','"+modal_cv+"')");
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
				
				if(file_ref_male != ""){
					$("#tmo3_OL").attr("onclick", "openFileTextRider_OL('"+file_name_male+"','"+file_ref_male+"',"+tbl_col+",'"+tbl_name+"','"+modal_cv+"')");
					$("#tmo3_OL").prop("disabled", false);					
				}
				
				var file_ref_female = $("#dbBox3_6_OL option:selected").attr("data-ref");
				var file_name_female = $("#dbBox3_6_OL option:selected").attr("data-file");
				
				if(file_ref_female != ""){
					$("#tmo4_OL").attr("onclick", "openFileTextRider_OL('"+file_name_female+"','"+file_ref_female+"',"+tbl_col+",'"+tbl_name+"','"+modal_cv+"')");
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

function showcase_coverage_benefits_OL(response){
	/*var obj_benef = response.Tab_Benefit_Check[0];*/
	var chk_benef = response.Tab_Benefit_Check;
	if(chk_benef.length > 0){
		for(i in response.Tab_Benefit_Check){
			var obj_benef = response.Tab_Benefit_Check[i];
			$("#tbl_benefit_OL tbody>tr").each(function(){
				var chk_val = $(this).find("td:nth-child(1)").attr("data-value");;
				if(chk_val == obj_benef.bnf_Code){
					$(this).find("td:nth-child(1) i").removeClass("glyphicon-edit").addClass("glyphicon-ok");
				}
			});
		}
	}
	
}

/*บันทึกสลักหลัง*/
function showcase_save_Endorse_OL(response){
	var row = "";
	var ii = 0;
	
	if(response.Tab_Endorse.length > 0){
		$("#endorse_bnf_id_OL").val(response.Tab_Endorse[0].bnf_item_id_Master);
	
		for (i in response.Tab_Endorse[1].Endorse) {
			var obj_endorse = response.Tab_Endorse[1].Endorse[i];
			
				ii++;
				row = "<tr id='tbody_record_OL"+ii+"'>"+					    								
				  "<td id='imgOK_record_OL"+ii+"' class='text-center borderBlack'"+
				  "onclick='imgCheckbox_record_OL("+ii+");' data-key='"+obj_endorse.pass+"' style='vertical-align: middle;'>" +
				  "<i class='glyphicon glyphicon-edit'></i></td>"+	
				  "<td class='text-center borderBlack' style='vertical-align: middle;'><span class='spanRecord_OL' id='orderID_OL"+ii+"'>"+ii+"</span></td>"+									
				  "<td class='borderBlack verticalCenter'><input type='text' name='record_name_OL[]' id='record_name_OL"+ii+"' class='form-control margin-padding0 text-center;' value='"+obj_endorse.text+"' readonly></td>"+											  									
				  "</tr>";			
		
				$("#record_Table_OL tbody").append(row);
		}
	}
	
	/*การใช้บันทึกสลักหลังคู่กับ*/
	if(response.Tab_Endorse[2].BasePlan.length > 0 || response.Tab_Endorse[3].Rider.length > 0){
		$("#rd_endorseMatch_OL2").prop("checked", true);
		
		var j = 0;
		var jj = 0;
		
		/*Baseplan*/
		var row_baseplan = "";	
		for(i in response.Tab_Endorse[2].BasePlan){
			var obj_baseplan = response.Tab_Endorse[2].BasePlan[i];
			j++;
			row_baseplan += "<tr id='tbody_baseplan_OL"+j+"' data-id="+j+">"+
			"<td id='imgOK_baseplan_OL"+j+"' class='text-center verticalCenter' onclick='imgCheckbox(this.id);'>"+
				"<i class='glyphicon glyphicon-edit'></i></td>"+
			"<td class='verticalCenter'><label>"+obj_baseplan.cov_code+"</label></td>"+
			"<td class='verticalCenter'>"+obj_baseplan.name_th+"</td>"+																									
			"</tr>";

		}
		
		$("#tbl_baseplanSelect_OL tbody").append(row_baseplan);		
		
		/*Rider*/
		var row_rider = "";	
		for(i in response.Tab_Endorse[3].Rider){
			var obj_rider = response.Tab_Endorse[3].Rider[i];
			jj++;
			row_rider += "<tr id='tbody_rider_OL"+jj+"' data-id="+jj+">"+
			"<td id='imgOK_rider_OL"+jj+"' class='text-center verticalCenter' onclick='imgCheckbox(this.id);'>"+
				"<i class='glyphicon glyphicon-edit'></i></td>"+
			"<td class='verticalCenter'><label>"+obj_rider.cov_code+"</label></td>"+
			"<td class='verticalCenter'>"+obj_rider.name_th+"</td>"+																									
			"</tr>";

		}
		
		$("#tbl_riderSelect_OL tbody").append(row_rider);
		
		$("#endorse_Baseplan_OL,#endorse_Rider_OL").show();
		
		
	}else{
		$("#rd_endorseMatch_OL1").prop("checked", true);
	}
}



function openFileTextRider_OL(file_name,file_ref,tableCol,tb_name,modal_name){
	var file_data = "";
		file_data = openFile_target(file_name, file_ref, 'txt');
	
	/*console.log("FileName --- > "+file_name)
	console.log("file_ref --- > "+file_ref)
	console.log("tableCol --- > "+tableCol)
	console.log("tb_name --- > "+tb_name)
	console.log("modal_name --- > "+modal_name)*/
	
	
	/*append to modal*/
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

    	  if(tableCol == 4){
    		  tableRow += "<tr>"+
				"<td class='text-center'>"+textRow_split[0]+"</td>"+
				"<td class='text-center'>"+textRow_split[1]+"</td>"+
				"<td class='text-right'>"+textRow_split[2]+"</td>"+
				"<td class='text-right'>"+textRow_split[3]+"</td>"+
				"</tr>";
    	  }else if(tableCol == 3){
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
    	  /* การคำนวณเบี้ยประกัน*/
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
		   
		   $("#download_tbl_PMRate_OL").attr("onclick", "openFile_target('"+file_name+"','"+file_ref+"','txt_download')");
		   
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
		   
		   $("#download_tbl_PMRatePlan4Col_OL").attr("onclick", "openFile_target('"+file_name+"','"+file_ref+"','txt_download')");
		  
		   $("#download_tb_TaxReduce_view_OL").attr("onclick", "openFile_target('"+file_name+"','"+file_ref+"','txt_download')");
		   
		   
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
          }else if(tableCol == 63){
      		   col1 = textRow[i].substr(0,4);
    		   col2 = textRow[i].substr(4,1);
    		   col3 = textRow[i].substr(5,2);
    		   col4 = textRow[i].substr(7,2);
    		   col5 = textRow[i].substr(9,6);
    		   col6 = textRow[i].substr(15,1);
    		  
    		   tableRow += "<tr>"+
    			"<td class='text-center'>"+col1+"</td>"+
    			"<td class='text-center'>"+col2+"</td>"+
    			"<td class='text-center'>"+col3+"</td>"+
    			"<td class='text-center'>"+col4+"</td>"+
    			"<td class='text-center'>"+col5+"</td>"+
    			"<td class='text-center'>"+col6+"</td>"+
    			"</tr>";   
    		   
    		   $("#download_tb_inputNAR_OL_Rate").attr("onclick", "openFile_target('"+file_name+"','"+file_ref+"','txt_download')");
     	      
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

/*Khwan Fix 03/12/2019*/
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
		$("#input_file_mort1_OL, #input_file_mort2_OL, #input_file_mort3_OL, #input_file_mort4_OL").prop("disabled", false);
		$("#spanBoxMort1_OL, #spanBoxMort2_OL, #spanBoxMort3_OL, #spanBoxMort4_OL").attr("disabled", false);
		$("#select_file_Mort1_OL, #select_file_Mort2_OL, #select_file_Mort3_OL, #select_file_Mort4_OL").prop("disabled", false);
		
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
		$("#select_file_Mort1_OL").attr("onchange","selectFileMain_OL('1','select_file_Mort1_OL','"+new_pattern1_1.replace(".txt","")+"','"+new_pattern1_2.replace(".txt","")+"')");
		$("#select_file_Mort2_OL").attr("onchange","selectFileMain_OL('1','select_file_Mort2_OL','"+new_pattern2_1.replace(".txt","")+"','"+new_pattern2_2.replace(".txt","")+"')");
		$("#select_file_Mort3_OL").attr("onchange","selectFileMain_OL('1','select_file_Mort3_OL','"+new_pattern3_1.replace(".txt","")+"','"+new_pattern3_2.replace(".txt","")+"')");
		$("#select_file_Mort4_OL").attr("onchange","selectFileMain_OL('1','select_file_Mort4_OL','"+new_pattern4_1.replace(".txt","")+"','"+new_pattern4_2.replace(".txt","")+"')");
		
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
										$('#'+cv_button).attr("onclick", "openFileTextRider_OL('"+file_name+"','"+obj_ref+"',"+tbl_col+",'"+tbl_name+"','"+modal_cv+"')");
								    
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
	var tbl_col = 55;
	var modal_cv = "ETIRPU_OL";
	var tbl_name = "tbl_ETIRPU_OL";
	
	if(key == "dbBox3_2_OL"){
		cv_button = "tmo1_OL";
	}else if(key == "dbBox3_3_OL"){
		cv_button = "tmo2_OL";
	}else if(key == "dbBox3_5_OL"){
		cv_button = "tmo3_OL";
	}else if(key == "dbBox3_6_OL"){
		cv_button = "tmo4_OL";
	}

	if(file_ref != ""){
		$('#'+cv_button).attr("onclick", "openFileTextRider_OL('"+file_name+"','"+file_ref+"',"+tbl_col+",'"+tbl_name+"','"+modal_cv+"')");
		$('#'+cv_button).prop("disabled", false);
	}else{
		$('#'+cv_button).prop("disabled", true);
	}
}