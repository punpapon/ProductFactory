/****/
 $(document).ready( function(event) {
	 $('[data-toggle="tooltip"]').tooltip({ boundary: 'window' });
	 
	 pass_Insurance_coverage_cl  = $('#pass_Insurance_coverage_cl').val();
	 //Menu1	
		  $("#div_Sperately_Pay *").attr("disabled", "disabled").off('click');
	 
	  //เบี้ยมาตรฐาน PM_Rate
		 $('#rd_cal_insurance_cl').prop("disabled",true);
		 $('#sl_menu3_insurance_premium_cl').prop("disabled",true);
		 //$("#divtb_PM_Rate1 *").attr("disabled", "disabled").off('click');
		 $("#tb_PM_Rate1 *").prop("disabled", true);
		 $('#addrowPM_Rate').prop("disabled",true);
		 $('#delrowPM_Rate').prop("disabled",true);
		 
		 $('#ch_importInsurance_cl').prop("disabled",true);
		 $('#discountInsurancePremiumsSta').prop("disabled",true);
		 $('#discountInsurancePremiumsTo').prop("disabled",true);
		  //***เบี้ยเพิ่มพิเศษ Extra_Rate
		  $("#div_TB_Extra_Rate *").attr("disabled", "disabled").off('click');//default disabled Table Extra_Rate
		  $('#addrowExtra_Rate').prop("disabled",true);
		  $('#delrowExtra_Rate').prop("disabled",true);

		 //Em
		 $('#cv_InputExtra_Rate_cl').prop("disabled",true);
		 $("#spanBoxCal1_CL").attr("disabled", true);
		 //$("#select_fileCal_1_CL").attr("disabled", true);
		 
		//SA_Rate
		 $('#cv_SAExtra_Rate_cl').prop("disabled",true);
		 //selectTypeCal_CL2("SA_CL 12 10K_xxxx.txt",2);
		 $("#spanBoxCal2_CL").attr("disabled", true);
		 //$("#select_fileCal_1_CL").attr("disabled", true);

 });
/**************   Validate  key input data    *********************/ 
 var Statuesave = "Y";
 var nameTab	= "";
 $("#div_main_menuBasic_Info *").change(function(event){
	 nameTab 	= "menu_CL_1";
	 Statuesave = "N";
 });
 $("#div_main_menuCL_2 *").change(function(event){
	 nameTab 	= "menu_CL_2";
	 Statuesave = "N";
 });
 $("#div_main_menuCL_3 *").change(function(event){
	 nameTab 	= "menu_CL_3";
	 Statuesave = "N";
 });
 
function thai_Name_cl() {
	var thai_Name  = $('#thai_Name_cl').val();
	if (thai_Name != "") {
		$("#validate_input2_cl").hide();
	}else{
		$("#validate_input2_cl").show();
	}
}

function max_coverage_cl() {	
	var maximum_Protection  = $('#maximum_Protection_To_cl').val();
	if (maximum_Protection != "") {
		$("#validate_input6_2cl").hide();
		$("#text_anniversary_cl").val(maximum_Protection);
		
		if($("#rd_Time_length_cl").prop("checked") == false){
			$("#rd_anniversary_cl").prop("checked", true)
		}else{
			$("#rd_anniversary_cl").prop("checked", false)
			
			var error1 = 0;
			
			if($("#tb_BasicInformation1 tbody>tr").length <= 0 ){
				error1++;
			}
			
			$("#tb_BasicInformation1 input:text").each(function(){
				if($(this).val() == ""){
					error1++;
				}
			});
			
			if(error1 <= 0){
				$("#validate_input15_cl").hide();
			}else{
				$("#validate_input15_cl").show();
			}	
			
		}
		
		
		if($("#rd_anniversary_cl").prop("checked") == true){
			$("#validate_input15_cl").hide();
			$("#text_anniversary_cl").prop("disabled", false);
			$("#dmy_1_cl").prop("disabled", false);
		}
		
	}else{
		$("#validate_input6_2cl").show();
		$("#text_anniversary_cl").val("");
		$("#rd_anniversary_cl").prop("checked", false);
		$("#text_anniversary_cl").prop("disabled", true);
		$("#dmy_1_cl").prop("disabled", true);
		
		if($("#rd_Time_length_cl").prop("checked") == false){
			$("#rd_anniversary_cl").prop("checked", true)
		}else{
			$("#rd_anniversary_cl").prop("checked", false)
			
			var error1 = 0;
			
			if($("#tb_BasicInformation1 tbody>tr").length <= 0 ){
				error1++;
			}
			
			$("#tb_BasicInformation1 input:text").each(function(){
				if($(this).val() == ""){
					error1++;
				}
			});
			
			if(error1 <= 0){
				$("#validate_input15_cl").hide();
			}else{
				$("#validate_input15_cl").show();
			}	
			
		}
		
	}
}
//เพศ
$("input[name='ch_gender_cl[]']").click(function(){
	var chk_gender = $("input[name='ch_gender_cl[]']:checked").length;
	if(chk_gender >= 1){
		$("#validate_input11_cl").hide();
	}else{
		$("#validate_input11_cl").show();
	}
});
$("#ch_male_cl").click(function(){	
	var value = $(this).val();
	
	if($(this).prop("checked") == true){
		$("#tb_BasicInformation_Death tbody>tr").each(function(){
			var chk_value = $(this).find("input:checkbox").val();
			if(chk_value == value){
				$(this).find("input:checkbox").attr("disabled",false);
				$(this).find("td:nth-child(4) input").attr("disabled",false);
			}else if(chk_value == "EITHER"){
				$(this).find("input:checkbox").attr("disabled",false);
				$(this).find("td:nth-child(4) input").attr("disabled",false);
			}
		});
		
		$("#tb_BasicInformation_TPD tbody>tr").each(function(){
			var chk_value = $(this).find("input:checkbox").val();
			if(chk_value == value){
				$(this).find("input:checkbox").attr("disabled",false);
				$(this).find("td:nth-child(4) input").attr("disabled",false);
			}else if(chk_value == "EITHER"){
				$(this).find("input:checkbox").attr("disabled",false);
				$(this).find("td:nth-child(4) input").attr("disabled",false);
			}
		});
		
	}else{
		$("#tb_BasicInformation_Death tbody>tr").each(function(){
			var chk_value = $(this).find("input:checkbox").val();
			if(chk_value == value){
				$(this).find("input:checkbox").prop("checked",false);
				$(this).find("input:checkbox").attr("disabled",true);
				$(this).find("td:nth-child(4) input").attr("disabled",true);
				$(this).find("td:nth-child(3) label").text("");
				$(this).find("td:nth-child(3) input:hidden").val("");
			}else if(chk_value == "EITHER"){
				if($("#ch_female_cl").prop("checked") == true){
					$(this).find("input:checkbox").attr("disabled",false);
					$(this).find("td:nth-child(4) input").attr("disabled",false);					
				}else{
					$(this).find("input:checkbox").prop("checked",false);
					$(this).find("input:checkbox").attr("disabled",true);
					$(this).find("td:nth-child(4) input").attr("disabled",true);
					$(this).find("td:nth-child(3) label").text("");
					$(this).find("td:nth-child(3) input:hidden").val("");
				}				
			}
		});
		
		$("#tb_BasicInformation_TPD tbody>tr").each(function(){
			var chk_value = $(this).find("input:checkbox").val();
			if(chk_value == value){
				$(this).find("input:checkbox").prop("checked",false);
				$(this).find("input:checkbox").attr("disabled",true);
				$(this).find("td:nth-child(4) input").attr("disabled",true);
				$(this).find("td:nth-child(3) label").text("");
				$(this).find("td:nth-child(3) input:hidden").val("");
			}else if(chk_value == "EITHER"){
				if($("#ch_female_cl").prop("checked") == true){
					$(this).find("input:checkbox").attr("disabled",false);
					$(this).find("td:nth-child(4) input").attr("disabled",false);
				}else{
					$(this).find("input:checkbox").prop("checked",false);
					$(this).find("input:checkbox").attr("disabled",true);
					$(this).find("td:nth-child(4) input").attr("disabled",true);
					$(this).find("td:nth-child(3) label").text("");
					$(this).find("td:nth-child(3) input:hidden").val("");
				}				
			}
		});
	}
});
$("#ch_female_cl").click(function(){
	var value = $(this).val();
	
	if($(this).prop("checked") == true){
		$("#tb_BasicInformation_Death tbody>tr").each(function(){
			var chk_value = $(this).find("input:checkbox").val();
			if(chk_value == value){
				$(this).find("input:checkbox").attr("disabled",false);
				$(this).find("td:nth-child(4) input").attr("disabled",false);
			}else if(chk_value == "EITHER"){
				$(this).find("input:checkbox").attr("disabled",false);
				$(this).find("td:nth-child(4) input").attr("disabled",false);
			}
		});
		
		$("#tb_BasicInformation_TPD tbody>tr").each(function(){
			var chk_value = $(this).find("input:checkbox").val();
			if(chk_value == value){
				$(this).find("input:checkbox").attr("disabled",false);
				$(this).find("td:nth-child(4) input").attr("disabled",false);
			}else if(chk_value == "EITHER"){
					$(this).find("input:checkbox").attr("disabled",false);
					$(this).find("td:nth-child(4) input").attr("disabled",false);
			}
		});
		
	}else{
		
		$("#tb_BasicInformation_Death tbody>tr").each(function(){
			var chk_value = $(this).find("input:checkbox").val();
			if(chk_value == value){
				$(this).find("input:checkbox").prop("checked",false);
				$(this).find("input:checkbox").attr("disabled",true);
				$(this).find("td:nth-child(4) input").attr("disabled",true);
				$(this).find("td:nth-child(3) label").text("");
				$(this).find("td:nth-child(3) input:hidden").val("");
			}else if(chk_value == "EITHER"){
				if($("#ch_male_cl").prop("checked") == true){
					$(this).find("input:checkbox").attr("disabled",false);
					$(this).find("td:nth-child(4) input").attr("disabled",false);
				}else{
					$(this).find("input:checkbox").prop("checked",false);
					$(this).find("input:checkbox").attr("disabled",true);
					$(this).find("td:nth-child(4) input").attr("disabled",true);
					$(this).find("td:nth-child(3) label").text("");
					$(this).find("td:nth-child(3) input:hidden").val("");
				}			
			}
		});
		
		$("#tb_BasicInformation_TPD tbody>tr").each(function(){
			var chk_value = $(this).find("input:checkbox").val();
			if(chk_value == value){
				$(this).find("input:checkbox").prop("checked",false);
				$(this).find("input:checkbox").attr("disabled",true);
				$(this).find("td:nth-child(4) input").attr("disabled",true);
				$(this).find("td:nth-child(3) label").text("");
				$(this).find("td:nth-child(3) input:hidden").val("");
			}else if(chk_value == "EITHER"){
				if($("#ch_male_cl").prop("checked") == true){
					$(this).find("input:checkbox").attr("disabled",false);
					$(this).find("td:nth-child(4) input").attr("disabled",false);
				}else{
					$(this).find("input:checkbox").prop("checked",false);
					$(this).find("input:checkbox").attr("disabled",true);
					$(this).find("td:nth-child(4) input").attr("disabled",true);
					$(this).find("td:nth-child(3) label").text("");
					$(this).find("td:nth-child(3) input:hidden").val("");
				}	
			}
		});
	}
});

//ระยะประกันของสัญญาประกันชีวิต
function text_anniversary_cl() {
	var text_anniversary_cl  = $('#text_anniversary_cl').val();
	var unit_anniversary_cl = $("#dmy_1_cl option:selected").text();
	
	$("#text_anniversary_cl").on("keyup", function(){
		if (text_anniversary_cl != "" && unit_anniversary_cl != "None") {
			$("#validate_input15_cl").hide();
		}else{
			$("#validate_input15_cl").show();
		}
	});
	
	$("#dmy_1_cl").on("change", function(){
		if (text_anniversary_cl != "" && unit_anniversary_cl != "None") {
			$("#validate_input15_cl").hide();
		}else{
			$("#validate_input15_cl").show();
		}
	});	
}

function checkMax_text_anniversary_cl() {
	var text_anniversary_cl  = $('#text_anniversary_cl').val();
	var unit_anniversary_cl = $("#dmy_1_cl option:selected").text();
	var maximum_Protection_cl = $("#maximum_Protection_To_cl").val();

	if(Number(text_anniversary_cl) > Number(maximum_Protection_cl)){
		message = "คุ้มครองถึงอายุจะต้องมีค่าน้อยกว่าหรือเท่ากับคุ้มครองสูงสุดถึงเสมอ กรุณาระบุใหม่";
		alertError(message);
		$('#text_anniversary_cl').val("");
		$('#text_anniversary_cl').focus();
	}			
}

var rowtext_d = "";
//ตารางมรณะ
function ch_Table_D(row) {
	var check_D  = document.getElementById("ch_D_"+row);
	var value = $("#ch_D_"+row).val();
	
	if (check_D.checked == true){
		document.getElementById("btn_Adddata_D_"+row).disabled = false;
		
		/*เช็คเพศ*/
		if(value == "EITHER"){
			$("#tb_BasicInformation_Death tbody>tr").each(function() {
					var chk_val = $(this).find("input:checkbox");
					var btn = $(this).find("input:button");
					
				if($("#ch_male_cl").prop("checked") == true){
					if($(chk_val).val() == "MALE"){
						$(chk_val).prop("disabled", true);
						$(btn).prop("disabled", true);
					}
				}
				if($("#ch_female_cl").prop("checked") == true){
					if($(chk_val).val() == "FEMALE"){
						$(chk_val).prop("disabled", true);
						$(btn).prop("disabled", true);
					}
				}	
					
			 });
		}else{					
				$("#tb_BasicInformation_Death tbody>tr").each(function() {
					var chk_val = $(this).find("input:checkbox");
					var btn = $(this).find("input:button");
					if($(chk_val).val() == "EITHER"){
						$(chk_val).prop("disabled", true);
						$(btn).prop("disabled", true);
					}else if($(chk_val).val() == "FEMALE" || $(chk_val).val() == "MALE"){
						if($("#ch_female_cl").prop("checked") == true && $("#ch_male_cl").prop("checked") == true){	
							$(chk_val).prop("checked", true);
							$(btn).prop("disabled", false);
						}
					}
				});			
		}				
	}else{		
		document.getElementById("btn_Adddata_D_"+row).disabled = true;
		$("#textshow_tableD_"+row).text(""); 
		$("#btn_Adddata_D_"+row).prop("disabled", false);
		
		/*เช็คเพศ*/
		if(value == "EITHER"){
			$("#tb_BasicInformation_Death tbody>tr").each(function() {
					var chk_val = $(this).find("input:checkbox");
					var btn = $(this).find("input:button");
					
					if($("#ch_male_cl").prop("checked") == true){
						if($(chk_val).val() == "MALE"){
							$(chk_val).prop("disabled", false);
							$(btn).prop("disabled", false);
						}
					}
					if($("#ch_female_cl").prop("checked") == true){
						if($(chk_val).val() == "FEMALE"){
							$(chk_val).prop("disabled", false);
							$(btn).prop("disabled", false);
						}
					}
					
			 });
		}else{
			if($("#ch_female_cl").prop("checked") == true && $("#ch_male_cl").prop("checked") == true){
				if(value == "FEMALE" || value == "MALE"){
					$("#tb_BasicInformation_Death tbody>tr").each(function() {
						var chk_val = $(this).find("input:checkbox");
						var btn = $(this).find("input:button");
						if(value == "FEMALE" && $(chk_val).val() == "MALE"){
							$(chk_val).prop("checked", false);
							$(this).find("td:nth-child(3) label").text("");
							if($(chk_val).prop("checked") == true){
								$("#ch_D_0").prop("disabled", true);
								$("#btn_Adddata_D_0").prop("disabled", true);
							}else{
								$("#ch_D_0").prop("disabled", false);
								$("#btn_Adddata_D_0").prop("disabled", false);
							}
						}else if(value == "MALE" && $(chk_val).val() == "FEMALE"){
							$(chk_val).prop("checked", false);
							$(this).find("td:nth-child(3) label").text("");
							if($(chk_val).prop("checked") == true){
								$("#ch_D_0").prop("disabled", true);
								$("#btn_Adddata_D_0").prop("disabled", true);
							}else{
								$("#ch_D_0").prop("disabled", false);
								$("#btn_Adddata_D_0").prop("disabled", false);
							}
						}
				 	});
				}
			}else if($("#ch_male_cl").prop("checked") == true && $("#ch_female_cl").prop("checked") == false){
				$("#tb_BasicInformation_Death tbody>tr").each(function() {
					var chk_val = $(this).find("input:checkbox");
					var btn = $(this).find("input:button");
					if($(chk_val).val() == "EITHER"){
						$(chk_val).prop("disabled", false);
						$(btn).prop("disabled", false);
						$(this).find("td:nth-child(3) label").text("");
					}
				});	
			}else if($("#ch_male_cl").prop("checked") == false && $("#ch_female_cl").prop("checked") == true){
				$("#tb_BasicInformation_Death tbody>tr").each(function() {
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

function showModal_Table_D(row) {	
	$("#mo_Table_D_CL input:radio").prop("checked", false);
	var gender = $("#ch_D_"+row).val();
	
	/*get data from DB with filter*/
	var datajson = {	
			"method"	: "calculation_premium_rates",
			"type" 		: "D",
			"gender" 	: gender     
	}	
	
	$.ajax({
	    type: "POST",
	    url : "BasePlanCL_Data_default_Servlet",
	    data: datajson,       
	    async: false,
	    success : function(response) {					    	
	    	$("#mo_Table_D_CL tbody").find("tr").remove();			
			var tbl_death_modal = "";
			for (i in response.List_calculation_premium_rates[0].calculation_premium) {
				var obj_death_modal = response.List_calculation_premium_rates[0].calculation_premium[i];						
				tbl_death_modal = "<tr>" +	
						"<td  class='borderBlack' width='5%' align='center'><input onclick='ra_table_D ("+i+")' id='ra_table_D_"+i+"' value="+obj_death_modal.pass+" type='radio' name='check_D'></td>"+
						"<td  class='borderBlack' width='95%'><Label id='text_Table_D_"+i+"' for='ra_table_D_"+i+"'>"+obj_death_modal.text+"</Label></td>"+
					"</tr>";			  
				$("#mo_Table_D_CL tbody").append(tbl_death_modal);
			}
			    	
	    },
	    error : function(response) {	
	    	alert("showModal_Table_D error");
	    }
	});		
		
	
	var headerText = $("#tr_DeathCL"+row+">td:nth-child(2)>label").text();
	$("#mo_Table_D_CL>thead th:nth-child(2)>span").text(headerText);
	$('#show_Table_D_CL').modal('show');
	rowtext_d = row;
}
//Radio
var valueTable_D = "";
function ra_table_D(row) {
	valueTable_D = row;
}
//save
function tax_save_D() {
	var ra_table_D  = $("#text_Table_D_"+valueTable_D).text();
	var rd_table_D  = $("#ra_table_D_"+valueTable_D).val();	
	$("#textshow_tableD_"+rowtext_d).text(ra_table_D); 
	$("#hdd_mort_id"+rowtext_d).val(rd_table_D); 
}
var rowtext_tpd = "";
//ตารางทุพพลภาพ
function ch_Table_TPD(row) {
	var check_TPD  = document.getElementById("ch_TPD_"+row);
	var value = $("#ch_TPD_"+row).val();
	
	if (check_TPD.checked == true){
		document.getElementById("btn_Adddata_TPD_"+row).disabled = false;
		
		/*เช็คเพศ*/
		if(value == "EITHER"){
			$("#tb_BasicInformation_TPD tbody>tr").each(function() {
					var chk_val = $(this).find("input:checkbox");
					var btn = $(this).find("input:button");
					
				if($("#ch_male_cl").prop("checked") == true){
					if($(chk_val).val() == "MALE"){
						$(chk_val).prop("disabled", true);
						$(btn).prop("disabled", true);
					}
				}
				if($("#ch_female_cl").prop("checked") == true){
					if($(chk_val).val() == "FEMALE"){
						$(chk_val).prop("disabled", true);
						$(btn).prop("disabled", true);
					}
				}	
					
			 });
		}else{					
				$("#tb_BasicInformation_TPD tbody>tr").each(function() {
					var chk_val = $(this).find("input:checkbox");
					var btn = $(this).find("input:button");
					if($(chk_val).val() == "EITHER"){
						$(chk_val).prop("disabled", true);
						$(btn).prop("disabled", true);
					}else if($(chk_val).val() == "FEMALE" || $(chk_val).val() == "MALE"){
						if($("#ch_female_cl").prop("checked") == true && $("#ch_male_cl").prop("checked") == true){	
							$(chk_val).prop("checked", true);
							$(btn).prop("disabled", false);
						}
					}
				});			
		}				
	}else{		
		document.getElementById("btn_Adddata_TPD_"+row).disabled = true;
		$("#textshow_tableTPD_"+row).text(""); 
		$("#btn_Adddata_TPD_"+row).prop("disabled", false);
		
		/*เช็คเพศ*/
		if(value == "EITHER"){
			$("#tb_BasicInformation_TPD tbody>tr").each(function() {
					var chk_val = $(this).find("input:checkbox");
					var btn = $(this).find("input:button");
					
					if($("#ch_male_cl").prop("checked") == true){
						if($(chk_val).val() == "MALE"){
							$(chk_val).prop("disabled", false);
							$(btn).prop("disabled", false);
						}
					}
					if($("#ch_female_cl").prop("checked") == true){
						if($(chk_val).val() == "FEMALE"){
							$(chk_val).prop("disabled", false);
							$(btn).prop("disabled", false);
						}
					}
					
			 });
		}else{
			if($("#ch_female_cl").prop("checked") == true && $("#ch_male_cl").prop("checked") == true){
				if(value == "FEMALE" || value == "MALE"){
					$("#tb_BasicInformation_TPD tbody>tr").each(function() {
						var chk_val = $(this).find("input:checkbox");
						var btn = $(this).find("input:button");
						if(value == "FEMALE" && $(chk_val).val() == "MALE"){
							$(chk_val).prop("checked", false);
							$(this).find("td:nth-child(3) label").text("");
							if($(chk_val).prop("checked") == true){
								$("#ch_TPD_0").prop("disabled", true);
								$("#btn_Adddata_TPD_0").prop("disabled", true);
							}else{
								$("#ch_TPD_0").prop("disabled", false);
								$("#btn_Adddata_TPD_0").prop("disabled", false);
							}
						}else if(value == "MALE" && $(chk_val).val() == "FEMALE"){
							$(chk_val).prop("checked", false);
							$(this).find("td:nth-child(3) label").text("");
							if($(chk_val).prop("checked") == true){
								$("#ch_TPD_0").prop("disabled", true);
								$("#btn_Adddata_TPD_0").prop("disabled", true);
							}else{
								$("#ch_TPD_0").prop("disabled", false);
								$("#btn_Adddata_TPD_0").prop("disabled", false);
							}
						}
				 	});
				}
			}else if($("#ch_male_cl").prop("checked") == true && $("#ch_female_cl").prop("checked") == false){
				$("#tb_BasicInformation_TPD tbody>tr").each(function() {
					var chk_val = $(this).find("input:checkbox");
					var btn = $(this).find("input:button");
					if($(chk_val).val() == "EITHER"){
						$(chk_val).prop("disabled", false);
						$(btn).prop("disabled", false);
						$(this).find("td:nth-child(3) label").text("");
					}
				});	
			}else if($("#ch_male_cl").prop("checked") == false && $("#ch_female_cl").prop("checked") == true){
				$("#tb_BasicInformation_TPD tbody>tr").each(function() {
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

function showModal_Table_TPD(row) {
	$("#mo_Table_TPD_CL input:radio").prop("checked", false);
	var gender = $("#ch_TPD_"+row).val();
		
	/*get data from DB with filter*/
	datajson = {				        	
			"method"	: "calculation_premium_rates",
			"type" 		: "TPD",
			"gender" 	: gender     
	}		
	$.ajax({
		type: "POST",
		url : "BasePlanCL_Data_default_Servlet",
		data: datajson,        
		async: false,
		success : function(response) {					    	
			$("#mo_Table_TPD_CL tbody").find("tr").remove();
			var tbl_disability_modal = "";
			for (i in response.List_calculation_premium_rates[0].calculation_premium) {
			var obj_disability_modal = response.List_calculation_premium_rates[0].calculation_premium[i];	
			tbl_disability_modal = "<tr>" +	
						"<td  class='borderBlack' width='5%' align='center'><input onclick='ra_table_TPD ("+i+")' id='ra_table_TPD_"+i+"' value="+obj_disability_modal.pass+" type='radio' name='check_TPD'></td>"+
						"<td  class='borderBlack' width='95%'><Label id='text_Table_TPD_"+i+"' for='ra_table_TPD_"+i+"'>"+obj_disability_modal.text+"</Label></td>"+
					  "</tr>";			  
				$("#mo_Table_TPD_CL tbody").append(tbl_disability_modal);
			}			    	
		},
		error : function(response) {	
		   alert("showModal_Table_TPD error");
		}
	});		
	
	var headerText = $("#tr_TPDCL"+row+">td:nth-child(2)>label").text();
	$("#mo_Table_TPD_CL>thead th:nth-child(2)>span").text(headerText);

	$('#show_Table_TPD_CL').modal('show');	
	rowtext_tpd = row;
	
};
//Radio
var valueTable_TPD = "";
function ra_table_TPD(row) {
	valueTable_TPD = row;
}
//save
function tax_save_TPD() {
	var ra_table_TPD  = $("#text_Table_TPD_"+valueTable_TPD).text();
	var rd_table_TPD  = $("#ra_table_TPD_"+valueTable_TPD).val();
	$("#textshow_tableTPD_"+rowtext_tpd).text(ra_table_TPD); 
	$("#hdd_tpd_id"+rowtext_tpd).val(rd_table_TPD); 
}
/////

$("#rd_anniversary_cl").click(function(){	
	var rd_anniversary_cl = document.getElementById("rd_anniversary_cl");
	if (rd_anniversary_cl.checked == true) {
		document.getElementById("text_anniversary_cl").disabled = false;
		document.getElementById("dmy_1_cl").disabled = false;	
		//$("#tb_BasicInformation1 *").prop("disabled", true);
		$("#tb_BasicInformation1 tbody>tr").remove();
		
		if($("#tb_BasicInformation1 tbody>tr").length <= 0){
			addRowBasicInformation1();
			
			$("#tb_BasicInformation1 tbody>tr").addClass("disabledAll");
		}
		
		if($("#text_anniversary_cl").val() == ""){
			$("#validate_input15_cl").show();
		}else{
			$("#validate_input15_cl").hide();
		}		
		$("#dmy_1_cl option:contains('ปี')").prop("selected", "selected");
		$("#addRowBasicInfo_CL, #deleteRowBasicInfo_CL").prop("disabled", true);
	}
});
$("#rd_Time_length_cl").click(function(){	
	var rd_Time_length_cl = document.getElementById("rd_Time_length_cl");
	if (rd_Time_length_cl.checked == true){
		$('#text_anniversary_cl').prop("disabled",true);
		$("#tb_BasicInformation1 *").prop("disabled", false);
		$("#dmy_1_cl").prop("disabled", true)		
		$("#dmy_1_cl option:contains('ปี')").prop("selected", "selected");
		$("#addRowBasicInfo_CL, #deleteRowBasicInfo_CL").prop("disabled", false);
		$("#tb_BasicInformation1 tbody>tr").removeClass("disabledAll");
		
		var error1 = 0;
		
		if($("#tb_BasicInformation1 tbody>tr").length <= 0 ){
			error1++;
		}
		
		$("#tb_BasicInformation1 input:text").each(function(){
			if($(this).val() == ""){
				error1++;
			}
		});
		
		if(error1 <= 0){
			$("#validate_input15_cl").hide();
		}else{
			$("#validate_input15_cl").show();
		}	
	}
});

$("#tb_BasicInformation1 *").on("change", function(){
	var error = 0;
	$("#tb_BasicInformation1 input:text").each(function(){
		if($(this).val() == ""){
			error++;
		}
	});
	if(error <= 0){
		$("#validate_input15_cl").hide();
	}else{
		$("#validate_input15_cl").show();
	}	
 });


function text_insurance_premium_cl() {
	var text_insurance_premium_cl  = $('#text_insurance_premium_cl').val();
	var unit_insurance_premium_cl = $("#dmy_3_cl option:selected").text();
	
	$("#text_insurance_premium_cl").on("keyup", function(){
		if (text_insurance_premium_cl != "" && unit_insurance_premium_cl != "None") {
			$("#validate_input16_cl").hide();
		}else{
			$("#validate_input16_cl").show();
		}
	});
	
	$("#dmy_3_cl").on("change", function(){
		if (text_insurance_premium_cl != "" && unit_insurance_premium_cl != "None") {
			$("#validate_input16_cl").hide();
		}else{
			$("#validate_input16_cl").show();
		}
	});	
}

function text_Time_insurance_premium_cl() {
	var text_Time_insurance_premium_cl  = $('#text_Time_insurance_premium_cl').val();
	var unit_Time_insurance_premium_cl = $("#dmy_4_cl option:selected").text();
	
	$("#text_Time_insurance_premium_cl").on("keyup", function(){
		if (text_Time_insurance_premium_cl != "" && unit_Time_insurance_premium_cl != "None") {
			$("#validate_input16_cl").hide();
			if(unit_Time_insurance_premium_cl == "ปี"){
				$("#ch_sperately_pay_ch").prop("disabled", false);
			}
		}else{
			$("#validate_input16_cl").show();
		}
	});
	
	$("#dmy_4_cl").on("change", function(){
		if (text_Time_insurance_premium_cl != "" && unit_Time_insurance_premium_cl != "None") {
			$("#validate_input16_cl").hide();
		}else{
			$("#validate_input16_cl").show();
		}
	});	
}

$("#rd_insurance_premium_cl").click(function(){	
	var rd_insurance_premium_cl = document.getElementById("rd_insurance_premium_cl");
	if (rd_insurance_premium_cl.checked == true) {
		document.getElementById("text_insurance_premium_cl").disabled = false;
		document.getElementById("text_Time_insurance_premium_cl").disabled = true;
		document.getElementById("ch_sperately_pay_ch").disabled = true;
		document.getElementById("dmy_3_cl").disabled = false;
		$('#text_Time_insurance_premium_cl').val("");
		$("#validate_input16_cl").show();
		document.getElementById("dmy_4_cl").disabled = true;
		$("#dmy_4_cl option:contains('ปี')").prop("selected", "selected");
		document.getElementById("ch_sperately_pay_ch").checked = false;
		$("#div_Sperately_Pay *").attr("disabled", "disabled").off('click');
		
		$("#tb_Sperately_Pay input:checkbox").prop("checked", false);
		$("#tb_Sperately_Pay input:text").val("0.00");
	}
});
$("#rd_Time_insurance_premium_cl").click(function(){	
	var rd_Time_insurance_premium_cl = document.getElementById("rd_Time_insurance_premium_cl");

	if (rd_Time_insurance_premium_cl.checked == true) {
		document.getElementById("text_Time_insurance_premium_cl").disabled = false;
		document.getElementById("text_insurance_premium_cl").disabled = true;
		//document.getElementById("ch_sperately_pay_ch").disabled = false;
		document.getElementById("dmy_4_cl").disabled = false;
		$('#text_insurance_premium_cl').val("");
		$("#validate_input16_cl").show();
		document.getElementById("dmy_3_cl").disabled = true;
		$("#dmy_3_cl option:contains('ปี')").prop("selected", "selected");
		
		$("#text_Time_insurance_premium_cl").prop("readonly", false);
		$("#dmy_4_cl").removeAttr("readonly");
		
		if($("#dmy_4_cl option:selected").text() == "ปี"){
			$("#ch_sperately_pay_ch").prop("disabled", false);
		}else{
			$("#ch_sperately_pay_ch").prop("disabled", true);
		}
		
		/*เช็คว่าเลือก mode เป็น 8,9 อยู่*/		
		if($("#mode3_cl").prop("checked") == true || $("#mode4_cl").prop("checked") == true){
			$("#text_Time_insurance_premium_cl").val("1");
			document.getElementById("text_Time_insurance_premium_cl").disabled = true;
			document.getElementById("dmy_4_cl").disabled = true;
			$("#validate_input16_cl").hide();
			/*$("#text_Time_insurance_premium_cl").keyup(function(){
				if($(this).val() > 1){
					$(this).val(1);
				}
			})*/
		}
	}
});

///เช็คอายุสิ้นสุด ต้องมีค่ามากกว่าอายุ เริ่มต้นเสมอ
function checkdata() {
	
	var age_Start_cl  = $('#age_Start_cl').val();
	var age_To_cl  = $('#age_To_cl').val();
	
	if(age_Start_cl != "" && age_To_cl != ""){
			$("#validate_input6_1cl").hide();
		
		if (Number(age_Start_cl) > Number(age_To_cl)){
			message = "อายุสิ้นสุด จะต้องมีค่ามากกว่าอายุเริ่มต้นเสมอ กรุณาระบุใหม่";
			alertError(message);
			$('#age_To_cl').focus();
		}
		
	}else{
		$("#validate_input6_1cl").show();
	}
		
}
//คุ้มครองสูงสุดถึง ห้ามระบุ0
function checkdate0(id) {
	var idcheck  = $('#'+id+'').val();
	if (idcheck <= 0){
		$('#'+id+'').val("");
	}
}

/*ระยะเวลาคุ้มครอง*/
function checkFromToPeriod_CL(id) {
	var from_value = $("#datefrom_"+id).val();
	var from_unit = $("#durationFrom_"+id+" option:selected").val();
	var to_value = $("#dateto_"+id).val();
	var to_unit = $("#durationTo_"+id+" option:selected").val();
	
	if(from_value != "" && from_unit != "NONE" && to_value != "" && to_unit != "NONE"){
		if(Number(from_value) > Number(to_value)){
			 message = "ระยะเวลาคุ้มครองสิ้นสุดต้องมากกว่าเสมอ";
			  alertError(message);
			  $("#dateto_"+id).focus();
			  $("#dateto_"+id).val("");
		}
	}		 
}
function validate_zero_tovalue(id){
	var to_value = $("#dateto_"+id).val();
	if(to_value == '0'){
		$("#dateto_"+id).val('');
	  }
}

////เลือกแบงจ่าย////////////
$("#ch_sperately_pay_ch").click(function(){	
	var ch_sperately_pay_ch = document.getElementById("ch_sperately_pay_ch");
	if (ch_sperately_pay_ch.checked == true) {
		  $('#tb_Sperately_Pay input:checkbox').attr('disabled', false);	  
	}else{
		  $('#tb_Sperately_Pay input:checkbox').attr('disabled', true);
		  $('#tb_Sperately_Pay input:checkbox').prop('checked', false);
		  $('#tb_Sperately_Pay').find("td:nth-child(3) input").prop('disabled', true);
		  $('#tb_Sperately_Pay').find("td:nth-child(3) input").val("0.00");
	}
});
///////////////////ตาราง แบ่งจ่าย ///////////////////////////////
function ch_payment_fun(row) {
	
	var ch_payment = document.getElementById("ch_payment_"+row);
	if (ch_payment.checked == true) {
		$("#set_Premium_Rate_"+row).attr("disabled", false);
	}else{
		$("#set_Premium_Rate_"+row).attr("disabled", true).val("0.00");
		
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
}

//Filing Channel
function ckeckFilingChannel() {
	var ch_Tied_Agency = document.getElementById("ch_Tied_Agency_cl");
	var ch_Bancassurance_cl = document.getElementById("ch_Bancassurance_cl");
	if (ch_Tied_Agency.checked == true && ch_Bancassurance_cl.checked == true) {
		document.getElementById("ch_Agent_cl").disabled = true;
		document.getElementById("ch_Commercial_Bank_cl").disabled = false;
		document.getElementById("ch_Public_Bank_cl").disabled = false;
		document.getElementById("ch_Direct_cl").disabled = true;
		document.getElementById("ch_Group_cl").disabled = false;
		document.getElementById("ch_Leasing_cl").disabled = false;
		document.getElementById("ch_Consumer_cl").disabled = false;
		document.getElementById("ch_Electronic2_cl").disabled = true;
	}else if (ch_Tied_Agency.checked  == false && ch_Bancassurance_cl.checked  == true){
		document.getElementById("ch_Agent_cl").disabled = true;
		document.getElementById("ch_Commercial_Bank_cl").disabled = false;
		document.getElementById("ch_Public_Bank_cl").disabled = false;
		document.getElementById("ch_Direct_cl").disabled = true;
		document.getElementById("ch_Group_cl").disabled = true;
		document.getElementById("ch_Leasing_cl").disabled = true;
		document.getElementById("ch_Consumer_cl").disabled = true;
		document.getElementById("ch_Electronic2_cl").disabled = true;
	}else if (ch_Tied_Agency.checked == true && ch_Bancassurance_cl.checked == false){
		document.getElementById("ch_Agent_cl").disabled = true;
		document.getElementById("ch_Commercial_Bank_cl").disabled = true;
		document.getElementById("ch_Public_Bank_cl").disabled = true;
		document.getElementById("ch_Direct_cl").disabled = true;
		document.getElementById("ch_Group_cl").disabled = false;
		document.getElementById("ch_Leasing_cl").disabled = false;
		document.getElementById("ch_Consumer_cl").disabled = false;
		document.getElementById("ch_Electronic2_cl").disabled = true;	
	}else{
		document.getElementById("ch_Agent_cl").disabled = true;
		document.getElementById("ch_Commercial_Bank_cl").disabled = true;
		document.getElementById("ch_Public_Bank_cl").disabled = true;
		document.getElementById("ch_Direct_cl").disabled = true;
		document.getElementById("ch_Group_cl").disabled = true;
		document.getElementById("ch_Leasing_cl").disabled = true;
		document.getElementById("ch_Consumer_cl").disabled = true;
		document.getElementById("ch_Electronic2_cl").disabled = true;
	}
}
/*************************menu-1  ****************************/
function checkappStart_CL() {
	var dateto  = $('#appTo_date_cl').val();
	var dateto_split		= dateto.split("/");
	var dateto_day			= dateto_split[0];
	var dateto_month		= dateto_split[1];
	var dateto_year			= dateto_split[2];
	var date_to	= dateto_day + 	dateto_month + dateto_year ;
	var appStart_date  = $('#appStart_date_cl').val();
	var appStart_split		= appStart_date.split("/");
	var appStart_day		= appStart_split[0];
	var appStart_month		= appStart_split[1];
	var appStart_year		= appStart_split[2];
	var date_start = appStart_day + appStart_month + appStart_year ;
}
$("#appStart_date_cl,#appTo_date_cl").keyup(function(e){
    if (e.keyCode != 8){    
        if ($(this).val().length == 2){
            $(this).val($(this).val() + "/");
        }else if ($(this).val().length == 5){
            $(this).val($(this).val() + "/");
        }
    }
}); 
function parseDate(str) {
    var mdy = str.split('/')
    console.log(mdy)
    return new Date(mdy[2], mdy[1] - 1, mdy[0]);
}
function checkappTo_CL() {
   var startDate = $("#appStart_date_cl").val();
   var endDate = $("#appTo_date_cl").val();

   if (startDate != "" && endDate != "") {
   	var startDate_parse = parseDate($("#appStart_date_cl").val());
       var endDate_parse = parseDate($("#appTo_date_cl").val());
   	//alert("start>>"+startDate_parse+" endDate>>"+endDate_parse);
       if(startDate_parse > endDate_parse){
       	message = "วันที่เริ่มต้นต้องน้อยกว่าวันที่สิ้นสุดเสมอ";
   		nameTab 	= "menu_CL_1";
   		Statuesave = "N";
   		alertError(message);
       }
   }
}
function appStart_date_CL(){		
	/*date from*/
	var date_from 			= $("#appStart_date_cl").val();
		date_from			= date_from.split("/");
	var appStart_day			= date_from[0];
	var appStart_month			= date_from[1];
	var appStart_year			= date_from[2];
	var date_start = new Date(appStart_year + "/" + appStart_month + "/" + appStart_day) ;
	
	var start_day = date_start.getDate();
	var start_month = date_start.getMonth()+1;
	var start_year = date_start.getFullYear();
	
	var start_fulldate = start_year+"/"+start_month+"/"+start_day;
	
	/*jQuery('#appStart_date_cl').datetimepicker({
		  timepicker:false,
		  format:'d/m/Y',
		  yearOffset:543 
		 });
	jQuery('#appTo_date_cl').datetimepicker({
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

function appTo_date_CL(){
	/*date from*/
	var date_from 			= $("#appStart_date_cl").val();
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
	var date_to = $("#appTo_date_cl").val();		
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

	/*jQuery('#appTo_date_cl').datetimepicker({
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
	
/**************************menu-3**************************/
//	เบี้ยมาตรฐาน
$("#ch_standard_premium_cl").click(function(){
	var ch_standard_premium_cl = document.getElementById("ch_standard_premium_cl");
	if (ch_standard_premium_cl.checked == true){
		  $('#rd_cal_insurance_cl').prop("disabled",false);
		  $( "#rd_cal_insurance_cl" ).prop( "checked", true );
		  $('#sl_menu3_insurance_premium_cl').prop("disabled",false);
		  $('#ch_importInsurance_cl').prop("disabled",false);			  
	}else{
		var checkdataPM_Rate = 0;	
		$("#tb_PM_Rate1 tbody>tr").each(function(){
			var fileID = $(this).find("td:nth-child(3) input:text").val();
			if(fileID != ""){
				checkdataPM_Rate++;
			}
		});
		
		if (checkdataPM_Rate > 0){
				$("#textTop7").text("PM_Rate");
				$("#textTop8").text("ตารางเบี้ยประกัน");
				$('#modal_CheckNone_Menu4').modal('show');	
				$("#cancel_CheckNone_Menu4").attr('onclick', 'cancel_check_None("PM_Rate")');
				
				$("#modal_CheckNone_Menu4 .modal-header button.close").click(function(){
					$("#ch_standard_premium_cl").prop("checked", true);
				});
				
		}else {
			 $("#divtb_PM_Rate1 *").prop("disabled",true);//default disabled Table PM_Rate
			 $('#addrowPM_Rate').prop("disabled",true);
			 $('#delrowPM_Rate').prop("disabled",true);
			/* $("#tb_PM_Rate1>tbody>tr[data-level='1'] select>option:contains('NONE')").attr("selected","selected");
			 $("#tb_PM_Rate1>tbody>tr").find("td:nth-child(3) input:text").attr("placeholder","");
			 $("#tb_PM_Rate1>tbody>tr").find("td:nth-child(3) span").attr("disabled", true);
			 $("#tb_PM_Rate1>tbody>tr").find("td:nth-child(3) font").css("display", "none");*/
			 $("#tb_PM_Rate1 tbody>tr").remove();
			 addRowPM_Rate();
			 $("#tb_PM_Rate1 tbody>tr td:nth-child(2) select").prop("disabled", true);
			 
			 $('#rd_cal_insurance_cl').prop("disabled",true);
			 $("#rd_cal_insurance_cl").prop( "checked", false );
			 $('#sl_menu3_insurance_premium_cl').prop("disabled",true);
			 $('#sl_menu3_insurance_premium_cl').val("NONE")
			 $('#ch_importInsurance_cl').prop("disabled",true);
			 $('#discountInsurancePremiumsSta').prop("disabled",true);
			 $('#discountInsurancePremiumsTo').prop("disabled",true); 
			 $('#discountInsurancePremiumsSta').val("0.00");
			 $('#discountInsurancePremiumsTo').val("0.00");

			 $("#tb_premiumLevel_CL input:text").val("").prop("disabled", true);
			 $("#ch_importInsurance_cl").prop("checked", false);
			 $("#discountInsurancePremiumsSta, #discountInsurancePremiumsTo").val("0.00");	
		}
		 $("#menu3_Confirm_cl2").attr('onclick', 'bt_Menu3_Confirm_cl2("PM_Rate")');
		
	$("#ch_importInsurance_cl").prop("checked", false);
	$("#discountInsurancePremiumsSta, #discountInsurancePremiumsTo").val("0.00");	 
	
	}
});
//
//	เบี้ยเพิ่มพิเศษ
$("#ch_insurance_premium_Extra_cl").click(function(){
	var ch_insurance_premium_Extra_cl = document.getElementById("ch_insurance_premium_Extra_cl");
	if (ch_insurance_premium_Extra_cl.checked == true){
		document.getElementById("sl_insurance_premium_Extra_cl").disabled = false;
		document.getElementById("min_EM_cl").disabled = false;
		document.getElementById("max_EM_cl").disabled = false;
	}else{
		/*ตาราง*/
		var count_file = 0;
		
		$("#tb_Extra_Rate>tbody>tr input:text").each(function(){
			var file_value = $(this).val();
			if(file_value != ""){
				count_file++;
			}
		});
		
		var min_EM = $("#min_EM_cl").val();
		var max_EM = $("#max_EM_cl").val();
		var EM_file = $("#input_fileCal_1_CL").val();

		if(EM_file != ""){
			count_file++;
		}
		
		if(count_file > 0){
			$("#textTop7").text("Extra_Rate");
			$("#textTop8").text("ตารางเบี้ยประกัน");
			$('#modal_CheckNone_Menu4').modal('show');	
			$("#cancel_CheckNone_Menu4").attr('onclick', 'cancel_check_None("Extra_Rate")');
			
			$("#modal_CheckNone_Menu4 .modal-header button.close").click(function(){
				$("#ch_insurance_premium_Extra_cl").prop("checked", true);
			});
			
		}else{
			document.getElementById("sl_insurance_premium_Extra_cl").disabled = true;
			$('#sl_insurance_premium_Extra_cl').val("NONE");
			document.getElementById("min_EM_cl").disabled = true;
			document.getElementById("max_EM_cl").disabled = true;
			$("#min_EM_cl").val("0.00");
			$("#max_EM_cl").val("0.00");
			$("#input_fileCal_1_CL").val("");
			$("#input_fileCal_1_CL").attr("placeholder","");
			$("#spanBoxCal1_CL").attr("disabled", true);
			$("#select_fileCal_1_CL").attr("disabled", true);								
			$("#em_rateLayout1,#em_fileID1").val("");
			$("#cv_InputExtra_Rate_cl").attr("disabled", true);
			$("#cv_InputExtra_Rate_cl").removeAttr("onchange");
			
			$("#tb_Extra_Rate>tbody>tr input:text").attr("placeholder","");
			$("#tb_Extra_Rate>tbody>tr td:nth-child(2) span").attr("disabled",true);
			$("#tb_Extra_Rate>tbody>tr input:file").removeAttr("onchange");
			$("#tb_Extra_Rate>tbody>tr input:file").attr("disabled",true);
		}			
		
		 $("#menu3_Confirm_cl2").attr('onclick', 'bt_Menu3_Confirm_cl2("Extra_Rate")');

	}
});

/*ทุนคุ้มครองที่ลดลง*/	
$("#ch_Reduced_capital_cl").click(function(){
	var ch_Reduced_capital_cl = document.getElementById("ch_Reduced_capital_cl");
	if (ch_Reduced_capital_cl.checked == true){
		document.getElementById("sl_Reduced_capital_Cal2_CL").disabled = false;
	}else{
		var count_file = 0;
		if($("#input_fileCal_2_CL").val() != ""){
			count_file++;
		}
		
		if (count_file > 0){
				$("#textTop7").text("SA_CL_Rate");
				$("#textTop8").text("ตารางทุน");
				$('#modal_CheckNone_Menu4').modal('show');	
				$("#cancel_CheckNone_Menu4").attr('onclick', 'cancel_check_None("SA_CL_Rate")');
				
				$("#modal_CheckNone_Menu4 .modal-header button.close").click(function(){
					$("#ch_Reduced_capital_cl").prop("checked", true);
				});
				
		}else {
			$('#sl_Reduced_capital_Cal2_CL option:contains("None")').attr("selected","selected");
			$('#sl_Reduced_capital_Cal2_CL').attr("disabled",true);
			$("#spanBoxCal2_CL").attr("disabled", true);
			$("#cv_SAExtra_Rate_cl").attr("disabled", true);
		}
		 	
			$("#menu3_Confirm_cl2").attr('onclick', 'bt_Menu3_Confirm_cl2("SA_CL_Rate")');				
	}
});

///////////////////////////////////////////////////////
function bt_Menu3_Confirm_cl2(data) {
	if (data == "PM_Rate") {
		$('#sl_menu3_insurance_premium_cl option:contains("None")').attr("selected","selected");		
		//$('#tb_PM_Rate1'+' tbody').empty();		//remove row

		$("#tb_PM_Rate1 tbody>tr").remove();
		addRowPM_Rate();
		$("#tb_PM_Rate1 tbody>tr td:nth-child(2) select").prop("disabled", true);
		
		// ตารางเบี้ยเพิ่มพิเศษ
		$("#tb_Extra_Rate tbody>tr").remove();
		$("#sl_insurance_premium_Extra_cl option:contains('None')").attr("selected","selected");
		$("#sl_insurance_premium_Extra_cl").prop("disabled", true);
		
		var min_EM = $("#min_EM_cl").val();
		var max_EM = $("#max_EM_cl").val();
		if(min_EM == "0.00" && max_EM == "0.00"){
			$("#ch_insurance_premium_Extra_cl").prop("checked", false);
			$("#min_EM_cl, #max_EM_cl").prop("disabled", true);
		}
		
		// ตารางมูลค่า
		$("#tb_RateValue1 tbody>tr").remove();
		$("#dbBox1_CL option:contains('None')").attr("selected","selected");
		$("#dbBox1_CL").prop("disabled", true);
		$("#cbBox1_CL").prop("checked", false);
		
		/*row ในหน้าตารางมูลค่า*/
		var lastID = 1;
		var listgroup_count = $("#tb_PM_Rate1").find("tbody>tr[data-group='"+lastID+"']").length;
		
		var lastSubID = "";
		if(listgroup_count > 0){
			lastSubID = $("#tb_PM_Rate1").find("tbody>tr[data-group='"+lastID+"']:last").attr("data-id");
			lastSubID = Number(lastSubID.replace(lastID+"_",""))+1;
		}else{
			lastSubID = 0;
		}
		var new_row2 = "<tr id='tbody_Rate_Value"+lastID+"' data-id='"+lastID+"' data-level='1'>"+
		  "<td class='borderBlack vertical-middle'><label>None</label></td>"+
		  "<td class='borderBlack'>"+
		  	"<div class='input-group'>"+
			"<input type='text' class='form-control' id='fileuploads_RateValueText"+lastID+"_CL' readonly=''>"+ 
				"<label class='input-group-btn'>"+ 
				  "<span id='spanRateValue"+lastID+"_CL' class='btn btn-primary' disabled>..."+
				  	/*"<font id='validate_RateValue"+lastID+"_CL' style='color: red;'>*</font>..."+*/
				  		"<input id='fileuploads_RateValue"+lastID+"_CL' type='file' accept='text/plain' style='display: none;' disabled>"+ 
				  "</span>"+
				 "</label>"+
			"</div>"+
			"<input type='hidden' id='cv_rateLayout"+lastID+"' value=''>"+
			"<input type='hidden' id='cv_fileID"+lastID+"' value=''>"+	
		  "</td>"+
		  "<td class='borderBlack'>"+
		 	"<a id='span_RateValueopen_"+lastID+"' class='active_grey' disabled>"+
				"<span class='glyphicon glyphicon-eye-open activecolorgray' disabled></span>"+
			"</a>"+							 	
		 "</td>"+
		 "<td class='borderBlack'>"+
			 "<a id='span_RateValuedownload_"+lastID+"' class='active_grey' disabled>"+
				"<span class='glyphicon glyphicon-download-alt activecolorgray' disabled></span>"+
			 "</a>"+
		 "</td>"+				
		"</tr>";
		
		/*row sub*/
		$("#tb_Age_Band>tbody>tr").each(function(){
			lastSubID++;
			var thisID_Sub = lastID+"_"+lastSubID;
			var chk_val = $(this).find("td:nth-child(1)>input[type='checkbox']").prop("checked");
			if(chk_val == true){
				var band_val = $(this).find("td:nth-child(2)").text();

				new_row2 += "<tr id='tbody_Rate_Value"+thisID_Sub+"' data-id='"+thisID_Sub+"' data-group='"+lastID+"' data-level='2' disabled='disabled'>"+
				  "<td class='borderBlack vertical-middle'><label>"+band_val+"</label></td>"+
				  "<td class='borderBlack'>"+
				  	"<div class='input-group'>"+
					"<input type='text' class='form-control' id='fileuploads_RateValueText"+thisID_Sub+"_CL' readonly=''>"+ 
						"<label class='input-group-btn'>"+ 
						  "<span id='spanRateValue"+thisID_Sub+"_CL' class='btn btn-primary' disabled>..."+
						  	/*"<font id='validate_RateValue"+thisID_Sub+"_CL' style='color: red;'>*</font>..."+*/
						  		"<input id='fileuploads_RateValue"+thisID_Sub+"_CL' type='file' accept='text/plain' style='display: none;' disabled>"+ 
						  "</span>"+
						 "</label>"+
					"</div>"+
					"<input type='hidden' id='cv_rateLayout"+thisID_Sub+"' value=''>"+
					"<input type='hidden' id='cv_fileID"+thisID_Sub+"' value=''>"+
				  "</td>"+			 
				  "<td class='borderBlack'>"+
				 	"<a id='span_RateValueopen_"+thisID_Sub+"' class='active_grey' disabled>"+
						"<span class='glyphicon glyphicon-eye-open activecolorgray' disabled></span>"+
					"</a>"+							 	
				 "</td>"+
				 "<td class='borderBlack'>"+
					 "<a id='span_RateValuedownload_"+thisID_Sub+"' class='active_grey' disabled>"+
						"<span class='glyphicon glyphicon-download-alt activecolorgray' disabled></span>"+
					 "</a>"+
				"</td>"+
				"</tr>";
			}		
		});
		
		$("#tb_RateValue1>tbody").append(new_row2);
		
		
		 $("#divtb_PM_Rate1 *").prop("disabled",true);//default disabled Table PM_Rate
		 $('#addrowPM_Rate').prop("disabled",true);
		 $('#delrowPM_Rate').prop("disabled",true);
		
		 $('#rd_cal_insurance_cl').prop("disabled",true);
		 $( "#rd_cal_insurance_cl" ).prop( "checked", false );
		 $('#sl_menu3_insurance_premium_cl').prop("disabled",true);
		 $('#ch_importInsurance_cl').prop("disabled",true);
		 $('#discountInsurancePremiumsSta').prop("disabled",true);
		 $('#discountInsurancePremiumsTo').prop("disabled",true); 
		 $('#discountInsurancePremiumsSta').val("0.00");
		 $('#discountInsurancePremiumsTo').val("0.00");
		 $('#modal_CheckNone_Menu4').modal('hide');	
	}else if (data == "Extra_Rate"){
		$('#sl_insurance_premium_Extra_cl option:contains("None")').attr("selected","selected");
		
		/*เบี้ยเพิ่มพิเศษ*/
		$("#tb_Extra_Rate>tbody>tr").find("td:nth-child(2) input:text").val("");
		$("#tb_Extra_Rate>tbody>tr").find("td:nth-child(2) input:text").attr("placeholder","");
		$("#tb_Extra_Rate>tbody>tr").find("td:nth-child(2) span").attr("disabled", true);
		$("#tb_Extra_Rate>tbody>tr").find("td:nth-child(2) span>font").css("display", "none");
		$("#tb_Extra_Rate>tbody>tr").find("td:nth-child(2) input:file").prop("disabled", true);
		$("#tb_Extra_Rate>tbody>tr").find("td:nth-child(3) a").removeAttr("onclick");
		$("#tb_Extra_Rate>tbody>tr").find("td:nth-child(3) span").removeClass("activecolorblue").addClass("activecolorgray");
		$("#tb_Extra_Rate>tbody>tr").find("td:nth-child(4) span").removeClass("activecolorblue").addClass("activecolorgray");
		
		document.getElementById("sl_insurance_premium_Extra_cl").disabled = true;
		document.getElementById("min_EM_cl").disabled = true;
		document.getElementById("max_EM_cl").disabled = true;
		$("#div_TB_Extra_Rate *").prop("disabled",true);//default disabled Table Extra_Rate
		$('#addrowExtra_Rate').prop("disabled",true);
		$('#delrowExtra_Rate').prop("disabled",true);
		$('#min_EM_cl').val("0.00");
		$('#max_EM_cl').val("0.00");
		$("#spanBoxCal1_CL").attr("disabled", true);
		$("#input_fileCal_1_CL").val("");
		$("#input_fileCal_1_CL").attr("placeholder","");
		$("#spanBoxCal1_CL").attr("disabled", true);
		//$("#select_fileCal_1_CL").removeAttr("onchange");
		$("#select_fileCal_1_CL").attr("disabled", true);
		$("#cv_InputExtra_Rate_cl").attr("disabled", true);
		$("#em_rateLayout1,#em_fileID1").val("");
		
		$('#modal_CheckNone_Menu4').modal('hide');	
	}else if (data == "SA_CL_Rate"){
		$('#sl_Reduced_capital_Cal2_CL option:contains("None")').attr("selected","selected");	
  
			document.getElementById("sl_Reduced_capital_Cal2_CL").disabled = true;
		$('#cv_SAExtra_Rate_cl').attr("onclick");
	 	$('#spanBoxCal2_CL').attr("disabled",true);
	 	$('#cv_SAExtra_Rate_cl').prop("disabled",true);
	 	$("#select_fileCal_2_CL").attr("disabled", true);
		$("#input_fileCal_2_CL").attr("placeholder", "");
		$("#input_fileCal_2_CL").val("");
		$("#decrease_rateLayout2,#decrease_fileID2").val("");
		
		$('#modal_CheckNone_Menu4').modal('hide');	
	}
}
function cancel_check_None(data) {
	if (data == "PM_Rate"){
		$("#ch_standard_premium_cl").prop("checked", true);
		$('#modal_CheckNone_Menu4').modal('hide');	
	}else if (data == "Extra_Rate") {
		$("#ch_insurance_premium_Extra_cl").prop("checked", true);
		$('#modal_CheckNone_Menu4').modal('hide');	
	}else if (data == "SA_CL_Rate") {
		$("#ch_Reduced_capital_cl").prop("checked", true);
		$('#modal_CheckNone_Menu4').modal('hide');	
	}
}

/////////////////////////////////////////////////
// 	ทุนคุ้มครองที่ลดลง
/*$("#ch_Reduced_capital_cl").click(function(){
	var ch_Reduced_capital = document.getElementById("ch_Reduced_capital_cl");
	if (ch_Reduced_capital.checked == true){
		document.getElementById("sl_Reduced_capital_Cal2_CL").disabled = false;
	}else{
		if (valuetext_Sa != "") {
			$("#cancel_CheckNone_Menu3").attr('onclick', 'cancel_CheckNone_Menu3_2 ("'+valuetext_Sa+'","'+valueselect_Sa+'")');
			 $("#menu3_Confirm_cl").attr('onclick', 'bt_Menu3_Confirm_cl("SA_CL_Rate2")');
			$("#textTop5").text("SA_CL_Rate");
			$("#textTop6").text("ตารางทุน");
			$('#modal_CheckNone_Menu3').modal('show');	
		 }
		$("#sl_Reduced_capital_Cal2_CL").attr("disabled", true);
		
	}
});*/

var data ="";
/*เมนู CL*/
$("#menu_CL_1").click(function(){
	if (Statuesave == "N" && nameTab != "menu_CL_1") {
	 	$("#modal_Checkkeyup").modal("show");
	 	data = "menu_CL_1";
	}else{
		document.getElementById("cl_005_1_1-1").style.display = "block";
		document.getElementById("cl_005_1_1-2").style.display = "none";
		document.getElementById("cl_005_1_1-3").style.display = "none";
		document.getElementById("cl_005_1_1-4").style.display = "none";
		document.getElementById("cl_005_1_1-5").style.display = "none";
		document.getElementById("cl_005_1_1-6").style.display = "none";
		document.getElementById("cl_005_1_1-7").style.display = "none";
	}
})
$("#menu_CL_2").click(function(){
	if (Statuesave == "N" && nameTab != "menu_CL_2") {
	 	$("#modal_Checkkeyup").modal("show");
	 	data = "menu_CL_2";
	}else{
		document.getElementById("cl_005_1_1-2").style.display = "block";
		document.getElementById("cl_005_1_1-1").style.display = "none";
		document.getElementById("cl_005_1_1-3").style.display = "none";
		document.getElementById("cl_005_1_1-4").style.display = "none";
		document.getElementById("cl_005_1_1-5").style.display = "none";
		document.getElementById("cl_005_1_1-6").style.display = "none";
		document.getElementById("cl_005_1_1-7").style.display = "none";
	}
})
$("#menu_CL_3").click(function(){
	if (Statuesave == "N" && nameTab != "menu_CL_3") {
	 	$("#modal_Checkkeyup").modal("show");
	 	data = "menu_CL_3";
	}else{
		document.getElementById("cl_005_1_1-3").style.display = "block";
		document.getElementById("cl_005_1_1-1").style.display = "none";
		document.getElementById("cl_005_1_1-2").style.display = "none";
		document.getElementById("cl_005_1_1-4").style.display = "none";
		document.getElementById("cl_005_1_1-5").style.display = "none";
		document.getElementById("cl_005_1_1-6").style.display = "none";
		document.getElementById("cl_005_1_1-7").style.display = "none";
		
		/*defalut 1 row*/
		var numrow = $("#tb_PM_Rate1 tbody>tr").length;
		if(numrow <= 0){
			addRowPM_Rate();
			$("#tb_PM_Rate1 tbody>tr>td:nth-child(2)>select").attr("disabled", true);
		}
	}
})
$("#menu_CL_4").click(function(){
	settingPolicyValue();
	if (Statuesave == "N" && nameTab != "menu_CL_4") {
	 	$("#modal_Checkkeyup").modal("show");
	 	data = "menu_CL_4";
	}else{
		document.getElementById("cl_005_1_1-4").style.display = "block";
		document.getElementById("cl_005_1_1-1").style.display = "none";
		document.getElementById("cl_005_1_1-2").style.display = "none";
		document.getElementById("cl_005_1_1-3").style.display = "none";
		document.getElementById("cl_005_1_1-5").style.display = "none";
		document.getElementById("cl_005_1_1-6").style.display = "none";
		document.getElementById("cl_005_1_1-7").style.display = "none";
	}
})
$("#menu_CL_5").click(function(){
	if (Statuesave == "N" && nameTab != "menu_CL_5") {
	 	$("#modal_Checkkeyup").modal("show");
	 	data = "menu_CL_5";
	}else{
		document.getElementById("cl_005_1_1-5").style.display = "block";
		document.getElementById("cl_005_1_1-1").style.display = "none";
		document.getElementById("cl_005_1_1-2").style.display = "none";
		document.getElementById("cl_005_1_1-3").style.display = "none";
		document.getElementById("cl_005_1_1-4").style.display = "none";
		document.getElementById("cl_005_1_1-6").style.display = "none";
		document.getElementById("cl_005_1_1-7").style.display = "none";
	}
})
$("#menu_CL_6").click(function(){
	if (Statuesave == "N" && nameTab != "menu_CL_6") {
	 	$("#modal_Checkkeyup").modal("show");
	 	data = "menu_CL_6";
	}else{
		document.getElementById("cl_005_1_1-6").style.display = "block";
		document.getElementById("cl_005_1_1-1").style.display = "none";
		document.getElementById("cl_005_1_1-2").style.display = "none";
		document.getElementById("cl_005_1_1-3").style.display = "none";
		document.getElementById("cl_005_1_1-4").style.display = "none";
		document.getElementById("cl_005_1_1-5").style.display = "none";
		document.getElementById("cl_005_1_1-7").style.display = "none";
	}
})
$("#menu_CL_7").click(function(){
	if (Statuesave == "N" && nameTab != "menu_CL_7") {
		 	$("#modal_Checkkeyup").modal("show");
		 	data = "menu_CL_7";
	}else{
		document.getElementById("cl_005_1_1-7").style.display = "block";
		document.getElementById("cl_005_1_1-1").style.display = "none";
		document.getElementById("cl_005_1_1-2").style.display = "none";
		document.getElementById("cl_005_1_1-3").style.display = "none";
		document.getElementById("cl_005_1_1-4").style.display = "none";
		document.getElementById("cl_005_1_1-5").style.display = "none";
		document.getElementById("cl_005_1_1-6").style.display = "none";
	}
})
//ยืนยัน
function bt_changeTab() {
	if (data == "menu_CL_7") {
		document.getElementById("cl_005_1_1-7").style.display = "block";
		document.getElementById("cl_005_1_1-1").style.display = "none";
		document.getElementById("cl_005_1_1-2").style.display = "none";
		document.getElementById("cl_005_1_1-3").style.display = "none";
		document.getElementById("cl_005_1_1-4").style.display = "none";
		document.getElementById("cl_005_1_1-5").style.display = "none";
		document.getElementById("cl_005_1_1-6").style.display = "none";
		$("#modal_Checkkeyup").modal("hide");
		Statuesave = "Y";
	}else if (data == "menu_CL_1"){
		document.getElementById("cl_005_1_1-1").style.display = "block";
		document.getElementById("cl_005_1_1-2").style.display = "none";
		document.getElementById("cl_005_1_1-3").style.display = "none";
		document.getElementById("cl_005_1_1-4").style.display = "none";
		document.getElementById("cl_005_1_1-5").style.display = "none";
		document.getElementById("cl_005_1_1-6").style.display = "none";
		document.getElementById("cl_005_1_1-7").style.display = "none";
	}else if (data == "menu_CL_2") {
		document.getElementById("cl_005_1_1-2").style.display = "block";
		document.getElementById("cl_005_1_1-1").style.display = "none";
		document.getElementById("cl_005_1_1-3").style.display = "none";
		document.getElementById("cl_005_1_1-4").style.display = "none";
		document.getElementById("cl_005_1_1-5").style.display = "none";
		document.getElementById("cl_005_1_1-6").style.display = "none";
		document.getElementById("cl_005_1_1-7").style.display = "none";
	}else if (data == "menu_CL_3") {
		document.getElementById("cl_005_1_1-3").style.display = "block";
		document.getElementById("cl_005_1_1-1").style.display = "none";
		document.getElementById("cl_005_1_1-2").style.display = "none";
		document.getElementById("cl_005_1_1-4").style.display = "none";
		document.getElementById("cl_005_1_1-5").style.display = "none";
		document.getElementById("cl_005_1_1-6").style.display = "none";
		document.getElementById("cl_005_1_1-7").style.display = "none";
	}else if (data == "menu_CL_4") {
		document.getElementById("cl_005_1_1-4").style.display = "block";
		document.getElementById("cl_005_1_1-1").style.display = "none";
		document.getElementById("cl_005_1_1-2").style.display = "none";
		document.getElementById("cl_005_1_1-3").style.display = "none";
		document.getElementById("cl_005_1_1-5").style.display = "none";
		document.getElementById("cl_005_1_1-6").style.display = "none";
		document.getElementById("cl_005_1_1-7").style.display = "none";
	}else if (data == "menu_CL_5") {
		document.getElementById("cl_005_1_1-5").style.display = "block";
		document.getElementById("cl_005_1_1-1").style.display = "none";
		document.getElementById("cl_005_1_1-2").style.display = "none";
		document.getElementById("cl_005_1_1-3").style.display = "none";
		document.getElementById("cl_005_1_1-4").style.display = "none";
		document.getElementById("cl_005_1_1-6").style.display = "none";
		document.getElementById("cl_005_1_1-7").style.display = "none";
	}else if (data == "menu_CL_6") {
		document.getElementById("cl_005_1_1-6").style.display = "block";
		document.getElementById("cl_005_1_1-1").style.display = "none";
		document.getElementById("cl_005_1_1-2").style.display = "none";
		document.getElementById("cl_005_1_1-3").style.display = "none";
		document.getElementById("cl_005_1_1-4").style.display = "none";
		document.getElementById("cl_005_1_1-5").style.display = "none";
		document.getElementById("cl_005_1_1-7").style.display = "none";
	}else if (data == "menu_CL_7") {
		document.getElementById("cl_005_1_1-7").style.display = "block";
		document.getElementById("cl_005_1_1-1").style.display = "none";
		document.getElementById("cl_005_1_1-2").style.display = "none";
		document.getElementById("cl_005_1_1-3").style.display = "none";
		document.getElementById("cl_005_1_1-4").style.display = "none";
		document.getElementById("cl_005_1_1-5").style.display = "none";
		document.getElementById("cl_005_1_1-6").style.display = "none";
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

//
function addRowBasicInformation1(){
	var typeMoney = $('select.item-i').val() || 0;
			var lastImgOK = $('#tb_BasicInformation1 >tbody>tr:last>td:first').attr("id") || 0;
			var numberImgOK = 0;
			
			if(lastImgOK == 0){
				numberImgOK = 1;
			}else{
				numberImgOK = Number(lastImgOK.replace("td_BasicInformation1_",""))+1;
			}
			var newID = "td_BasicInformation1_"+numberImgOK;
			var ftOnclick = 'imgCheckbox("'+newID+'");';
			var row = "";
			row = "<tr id='tbody_CL_BasicInformation_"+numberImgOK+"'>"+
				  						"<td width='11%' class='text-center borderBlack' id="+"'"+newID+"'"+" onclick='"+ftOnclick+"' style='vertical-align: middle;'><i class='glyphicon glyphicon-edit'></i></td>"+
										"<td width='21%' class='borderBlack'><input id='datefrom_"+numberImgOK+"' class='auto form-control text-center margin-padding0' type='text' onkeypress='validate(event);' onblur='checkFromToPeriod_CL("+numberImgOK+");' data-v-min='0' data-v-max='999' maxlength='3'></td>"+
										"<td width='21%' class='text-center borderBlack'></td>"+
										"<td width='21%' class='borderBlack'><input id='dateto_"+numberImgOK+"' class='auto form-control text-center margin-padding0' type='text' onkeypress='validate(event); validate_zero_tovalue("+numberImgOK+");' onkeyup='validate_zero_tovalue("+numberImgOK+");' onblur='checkFromToPeriod_CL("+numberImgOK+");' data-v-min='0' data-v-max='999' maxlength='3'></td>"+
										"<td width='21%' class='text-center borderBlack'></td>"+
				  "</tr>";
			$("#tb_BasicInformation1 tbody").append(row);
			$('.auto').autoNumeric('init');
			
			var cloneUnitFrom  = $('#dmy_1_cl').clone();
			$(cloneUnitFrom).attr("id","durationFrom_"+numberImgOK+"");
			$(cloneUnitFrom).attr("onclick","durationFrom("+numberImgOK+");");
			$(cloneUnitFrom).attr("onchange","checkFromToPeriod_CL("+numberImgOK+");");
			$(cloneUnitFrom).attr("disabled", false);
			$(cloneUnitFrom).appendTo("#tbody_CL_BasicInformation_"+numberImgOK+">td:nth-child(3)");
			
			var cloneUnitTo  = $('#dmy_1_cl').clone();
			$(cloneUnitTo).attr("id","durationTo_"+numberImgOK+"");
			$(cloneUnitTo).attr("onclick","durationTo("+numberImgOK+");");
			$(cloneUnitTo).attr("onchange","checkFromToPeriod_CL("+numberImgOK+");");
			$(cloneUnitTo).attr("disabled", false);
			$(cloneUnitTo).appendTo("#tbody_CL_BasicInformation_"+numberImgOK+">td:nth-child(5)");
			
			var error = 0;
			$("#tb_BasicInformation1 input:text").each(function(){
				if($(this).val() == ""){
					error++;
				}
			});
			
			/*remove NONE*/
			$("#tb_BasicInformation1 tbody select>option").each(function(){
				if($(this).text() == "None"){
					$(this).remove();
				}
			});
			
			if(error <= 0){
				$("#validate_input15_cl").hide();
			}else{
				$("#validate_input15_cl").show();
			}

}
function durationFrom(row) {
	var durationFrom  = $('#durationFrom_'+row).val();
	$('#durationTo_'+row).val(durationFrom);
}
function durationTo(row) {
	var durationTo  = $('#durationTo_'+row).val();
	$('#durationFrom_'+row).val(durationTo);
}
//delete row table	*tb_BasicInformation1
function deleteRowBasicInformation1()
{
	var imgOKcount = $("#tb_BasicInformation1 i.glyphicon-ok").length;
	if(imgOKcount <= 0)
	{	
		message = "กรุณาเลือกรายการที่ต้องการลบ";
		alertError(message);
	}else{
	message = "ต้องการลบรายการใช่หรือไม่";
	alertDeleteError(message);
	
	$("#btn_confirm_del").click(function(){
		var lastImgOK = $('#tb_BasicInformation1 >tbody>tr:last>td:first').attr("id") || 0;	
		var numberImgOK = 0;
		if(lastImgOK == 0){
			numberImgOK = 1;
		}else{
			numberImgOK = Number(lastImgOK.replace("td_BasicInformation1_",""))+1;
		}
		for(var i = 1;i<=numberImgOK;i++)
			{
				var checked = $('#tbody_CL_BasicInformation_'+i+' >td:first>i').attr("class");
				if(checked == "glyphicon glyphicon-ok"){	
					deleteTableRow('#tbody_CL_BasicInformation_'+i);				
				}
		}
		
		if($("#tb_BasicInformation1 input:text").length <= 0){
			$("#validate_input15_cl").show();
		}else{
			$("#validate_input15_cl").hide();
		}
		
	});			
  }
}	
function addRowBasicInformation2(){
	/*ปิดปุ่ม add*/
	var numrow_tax = $("#tb_TaxReduce>tbody tr").length;
	if(numrow_tax == 3){
		$("#btn_add_rowTaxBasic_CL").attr("disabled", true);
	}else{
		$("#btn_add_rowTaxBasic_CL").attr("disabled", false);
	}
		
	if($("#div_TaxReduce").innerHeight() > 270){
		$("#div_TaxReduce").addClass("settableCL margin_bottom_style1");			
	}else{
		$("#div_TaxReduce").removeClass("settableCL margin_bottom_style1");
	}
	
	var typeMoney = $('select.item-i').val() || 0;
			var lastImgOK = $('#tb_TaxReduce>tbody>tr:last>td:first').attr("id") || 0;
			var numberImgOK = 1;
			if(lastImgOK == 1){
				numberImgOK = 2;
			}else{
				numberImgOK = Number(lastImgOK.replace("td_TaxReduce_",""))+1;
			}
			var newID = "td_TaxReduce_"+numberImgOK;
			var ftOnclick = 'imgCheckbox("'+newID+'");';
			var row = "";
			/*row = "<tr id='tbody_TaxReduce_"+numberImgOK+"'>"+
				  						"<td id="+"'"+newID+"'"+" width='5%' class='borderBlack'  onclick='"+ftOnclick+"' style='vertical-align: middle;'><i class='glyphicon glyphicon-edit'></i></td>"+
				  						"<td width='25%' class='borderBlack'><input type='text' class='form-control' onblur='checkKeyText_TaxReduce ("+numberImgOK+");' id='topics_Tax_"+numberImgOK+"'></td>"+
										"<td width='55%' class='borderBlack'>" +
											"<div class='input-group col-xs-12'>" +
												"<input type='file' accept='.txt' id='ip_fileuploads_CL1_"+numberImgOK+"'  style='display: none'>" +
												"<input type='text' class='form-control' id='ip_fileuploads_CL1_Show_"+numberImgOK+"'readonly>" +
												"<span class='input-group-btn'><button class='btn btn-default btn-primary' type='button' id='bt_uploadfile1_"+numberImgOK+"' " +
														"onclick='uploadfile0("+'"tb_TaxReduce"'+","+'"ip_fileuploads_CL1_"'+","+'"ip_fileuploads_CL1_Show_"'+","+'"span0_"'+","+'"span1_"'+","+'"span2_"'+","+'"tb_TaxReduce_view"'+","+'"Tax_Death 11 10K_"'+","+numberImgOK+");'>...</button>" +
												"</span>" +
											"</div>" +
										"</td>"+
										"<td width='8%' class='borderBlack'>" +
										"<span class='glyphicon glyphicon-refresh activecolorgray' data-id='span0_"+numberImgOK+"'></span>" +
									"</td>"+
										"<td width='8%' class='borderBlack'>" +
											"<span class='glyphicon glyphicon-eye-open activecolorgray' data-id='span1_"+numberImgOK+"'></span>" +
										"</td>"+
										"<td width='7%' class='borderBlack'>" +
											"<span class='glyphicon glyphicon-download-alt activecolorgray' data-id='span2_"+numberImgOK+"'></span>" +
										"</td>"+
				  "</tr>";*/
			
			row = "<tr id='tbody_TaxReduce_"+numberImgOK+"'>"+
				  "<td id="+"'"+newID+"'"+" width='5%' class='borderBlack'  onclick='"+ftOnclick+"' style='vertical-align: middle;'><i class='glyphicon glyphicon-edit'></i></td>"+
				  "<td width='25%' class='borderBlack'><input type='text' class='form-control' onblur='checkKeyText_TaxReduce ("+numberImgOK+");' id='topics_Tax_"+numberImgOK+"'></td>"+
				  "<td width='55%' class='borderBlack'>"+
				  "<input name='tax_type[]' id='tax_type"+numberImgOK+"' value='1' type='hidden'>"+
					"<div class='input-group'>"+
					"<input type='text' class='form-control' id='fileuploads_TaxText"+numberImgOK+"_CL' readonly=''> "+
						"<label class='input-group-btn'>"+ 
						"<span id='spanTax"+numberImgOK+"_CL' class='btn btn-primary'>..."+
						"<input id='fileuploads_Tax"+numberImgOK+"_CL' type='file' accept='text/plain' style='display: none;'> "+
			            "</span>"+
						"</label>"+
			        "</div>"+
				  "</td>"+
				  "<td width='8%' class='borderBlack'>"+
					"<a id='span_TaxDel_"+numberImgOK+"' class='active_grey' onclick='reset_fileTax("+numberImgOK+");'>"+
					  "<span class='glyphicon glyphicon-refresh activecolorgray'></span>"+
					 "</a>"+
				 "</td>"+
				 "<td width='8%' class='borderBlack'>"+
					"<a id='span_TaxOpen_"+numberImgOK+"' class='active_grey'>"+
					  "<span class='glyphicon glyphicon-eye-open activecolorgray'></span>"+
					"</a>"+
				 "</td>"+
				 "<td width='7%' class='borderBlack'>"+
					"<a id='span_Taxdownload_"+numberImgOK+"' class='active_grey'>"+
					  "<span class='glyphicon glyphicon-download-alt activecolorgray'></span>"+
					"</a>"+
				  "</td>"+
				"</tr>";
			
			
			$("#tb_TaxReduce tbody").append(row);
			
			var baseplanCode = $("#pass_Insurance_coverage_cl").val();
			
			/*เช้ค file layout*/
			var arr_file_diff = [];
			var arr_file_new = [];
			var arr_file = ["Tax_D 11 10K_"+baseplanCode, "Tax_D 11 100K_"+baseplanCode, "Tax_TPD 11 10K_"+baseplanCode, "Tax_TPD 11 100K_"+baseplanCode];
			
			$("#tb_TaxReduce>tbody td:nth-child(3) input[type='file']").each(function(){
				arr_file_new.push($(this).val().replace(/\\/g, '/').replace(/.*\//, '').replace('.txt',''));
			});

			arr_file.map(function(item){
		  		  if(!arr_file_new.includes(item)){
		  			arr_file_diff.push(item);
		  		  }
		  	});
				
			var file_layout_diff = arr_file_diff.join(",");
			var file_layout_split = file_layout_diff.split(",");
			
			if(file_layout_split.length >= 2){
				var tax_layout = file_layout_split[0]+".txt หรือ "+file_layout_split[1]+".txt";
				var tax_onclick = "selectFileTXT_CL(1,'fileuploads_Tax"+numberImgOK+"_CL','"+file_layout_split[0]+"','"+file_layout_split[1]+"','span_TaxOpen_"+numberImgOK+"')";
			}else{
				var tax_layout = file_layout_split[0]+".txt";
				var tax_onclick = "selectFileTXT_CL(1,'fileuploads_Tax"+numberImgOK+"_CL','"+file_layout_split[0]+"','','span_TaxOpen_"+numberImgOK+"')";
			}
			
			
			$("#fileuploads_TaxText"+numberImgOK+"_CL").attr("placeholder", tax_layout);
			$("#fileuploads_Tax"+numberImgOK+"_CL").attr("onchange", tax_onclick);
			
}
function checkKeyText_TaxReduce(row) {// ///เช็คหัวข้อซ้ำ
	var topics_Tax  = $('#topics_Tax_'+row).val();
	var tablename		= "tb_TaxReduce";
	var lastImgOK = $('#'+''+tablename+''+'>tbody>tr:last>td:first').attr("id") || 0;
	var	numberImgOK = Number(lastImgOK.replace("td_TaxReduce_",""));
	
	if (row >= numberImgOK){
		for (var i = 1; i <= row-1; i++){
			var topics 	= $('#topics_Tax_'+i).val();
			if (topics == topics_Tax && topics != "" && topics_Tax != "") {
				message = "ไม่อนุญาติให้ชื่อไฟล์ซ้ำกันเข้าระบบ กรุณาเลือกไฟล์นำเข้าใหม่";
				alertError(message);
				$('#topics_Tax_'+row).val("");
			}
		}
	}else if (row < numberImgOK) {
		for (var ii = 1; ii <= numberImgOK; ii++) {
			var topics2 	= $('#topics_Tax_'+ii).val();
			if (topics2 == topics_Tax && topics != "" && topics_Tax	 != "" && row != ii) {
				message = "ไม่อนุญาติให้ชื่อไฟล์ซ้ำกันเข้าระบบ กรุณาเลือกไฟล์นำเข้าใหม่";
				alertError(message);
				$('#topics_Tax_'+row).val("");
			}
		}
	}
}
//delete row table	*tb_TaxReduce
function deleteRowBasicInformation2()
{		
	var imgOKcount = $("#tb_TaxReduce i.glyphicon-ok").length;
	if(imgOKcount <= 0)
	{	
		message = "กรุณาเลือกรายการที่ต้องการลบ";
		alertError(message);
	}else{
	message = "ต้องการลบรายการใช่หรือไม่";
	alertDeleteError(message);
	
	$("#btn_confirm_del").click(function(){
		var lastImgOK = $('#tb_TaxReduce >tbody>tr:last>td:first').attr("id") || 0;	
		var numberImgOK = 0;
		if(lastImgOK == 0){
			numberImgOK = 1;
		}else{
			numberImgOK = Number(lastImgOK.replace("td_TaxReduce_",""))+1;
		}
		for(var i = 1;i<=numberImgOK;i++)
			{
				var checked = $('#tbody_TaxReduce_'+i+' >td:first>i').attr("class");
				if(checked == "glyphicon glyphicon-ok"){	
					deleteTableRow('#tbody_TaxReduce_'+i);		

					if($("#div_TaxReduce").innerHeight() <= 270){
						$("#div_TaxReduce").removeClass("settableCL margin_bottom_style1");
					}
				}
			}
		
		/*เปิดปุ่ม add*/
		var numrow_tax = $("#tb_TaxReduce>tbody tr").length;
		if(numrow_tax <= 3){
			$("#btn_add_rowTaxBasic_CL").attr("disabled", false);
		}else{
			$("#btn_add_rowTaxBasic_CL").attr("disabled", true);
		}
					
	});
	
	}
	
}	
/// CheckKeyText_PM_Rate
function checkKeyText_PM_Rate(row) {// ///เช็คหัวข้อซ้ำ
	var topics_PM_Rate  = $('#topics_PM_Rate_'+row).val();
	var tablename		= "tb_PM_Rate1";
	var lastImgOK = $('#'+''+tablename+''+'>tbody>tr:last>td:first').attr("id") || 0;
	var	numberImgOK = Number(lastImgOK.replace("td_PM_Rate1_",""));
	if (row >= numberImgOK){
		for (var i = 1; i <= row-1; i++){
			var topics 	= $('#topics_PM_Rate_'+i).val();
			if (topics == topics_PM_Rate && topics != "" && topics_PM_Rate != "") {
				message = "ไม่อนุญาติให้ชื่อไฟล์ซ้ำกันเข้าระบบ กรุณาเลือกไฟล์นำเข้าใหม่";
				alertError(message);
				$('#topics_PM_Rate_'+row).val("");
			}
		}
	}else if (row < numberImgOK) {
		for (var ii = 1; ii <= numberImgOK; ii++) {
			var topics2 	= $('#topics_PM_Rate_'+ii).val();
			if (topics2 == topics_PM_Rate && topics != "" && topics_PM_Rate != "" && row != ii) {
				message = "ไม่อนุญาติให้ชื่อไฟล์ซ้ำกันเข้าระบบ กรุณาเลือกไฟล์นำเข้าใหม่";
				alertError(message);
				$('#topics_PM_Rate_'+row).val("");
			}
		}
	}
}

///table Extra_Rate manu3
function addRowExtra_Rate(){
	var typeMoney = $('select.item-i').val() || 0;
			var lastImgOK = $('#tb_Extra_Rate>tbody>tr:last>td:first').attr("id") || 0;
			var numberImgOK = 1;
			if(lastImgOK == 1){
				numberImgOK = 2;
			}else{
				numberImgOK = Number(lastImgOK.replace("td_Extra_Rate_",""))+1;
			}
			var newID = "td_Extra_Rate_"+numberImgOK;
			var ftOnclick = 'imgCheckbox("'+newID+'");';
			var row = "";
			row = "<tr id='tbody_Extra_Rate_"+numberImgOK+"'>"+
				  						"<td id="+"'"+newID+"'"+" width='5%' class='borderBlack'  onclick='"+ftOnclick+"' style='vertical-align: middle;'><i class='glyphicon glyphicon-edit'></i></td>"+
				  						"<td width='25%' class='borderBlack'><input type='text' class='form-control' onblur='checkKeyText_Extra_Rate ("+numberImgOK+");' id='topics_Extra_Rate_"+numberImgOK+"'></td>"+
										"<td width='55%' class='borderBlack'>" +
											"<div id='div_tbExtraRate"+numberImgOK+"' class='input-group col-xs-12'>" +
												"<input type='file' accept='text/plain' id='ip_fileuploads_CL_Extra_Rate_"+numberImgOK+"'  style='display: none'>" +
												"<input type='text' class='form-control' id='ip_fileuploads_CL_Extra_Rate_Show_"+numberImgOK+"'readonly>" +
												"<span class='input-group-btn'><button class='btn btn-default btn-primary' type='button' id='bt_uploadfileExtra_Rate_"+numberImgOK+"' " +
														"onclick='uploadfile2("+'"tb_Extra_Rate"'+","+'"ip_fileuploads_CL_Extra_Rate_"'+","+'"ip_fileuploads_CL_Extra_Rate_Show_"'+","+'"span_Extra_Rateopen_"'+","+'"span_Extra_Ratedownload_"'+","+'"tb_Extra_Rate_view"'+","+'"Extra_Rate_checkfileAll"'+","+numberImgOK+");'>...</button>" +
												"</span>" +
											"</div>" +
										"</td>"+
										"<td width='8%' class='borderBlack'>" +
											"<span class='glyphicon glyphicon-eye-open activecolorgray' data-id='span_Extra_Rateopen_"+numberImgOK+"'></span>" +
										"</td>"+
										"<td width='7%' class='borderBlack'>" +
											"<span class='glyphicon glyphicon-download-alt activecolorgray' data-id='span_Extra_Ratedownload_"+numberImgOK+"'></span>" +
										"</td>"+
				  "</tr>";
			$("#tb_Extra_Rate tbody").append(row);
}
/// CheckKeyText_PM_Rate
function checkKeyText_Extra_Rate(row) {// ///เช็คหัวข้อซ้ำ
	var topics_Extra_Rate  = $('#topics_Extra_Rate_'+row).val();
	var tablename		= "tb_Extra_Rate";
	var lastImgOK = $('#'+''+tablename+''+'>tbody>tr:last>td:first').attr("id") || 0;
	var	numberImgOK = Number(lastImgOK.replace("td_Extra_Rate_",""));
	
	if (row >= numberImgOK){
		for (var i = 1; i <= row-1; i++){
			var topics 	= $('#topics_Extra_Rate_'+i).val();
			if (topics == topics_Extra_Rate && topics != "" && topics_Extra_Rate != "") {
				message = "ไม่อนุญาติให้ชื่อไฟล์ซ้ำกันเข้าระบบ กรุณาเลือกไฟล์นำเข้าใหม่";
				alertError(message);
				$('#topics_Extra_Rate_'+row).val("");
			}
		}
	}else if (row < numberImgOK) {
		for (var ii = 1; ii <= numberImgOK; ii++) {
			var topics2 	= $('#topics_Extra_Rate_'+ii).val();
			if (topics2 == topics_Extra_Rate && topics != "" && topics_Extra_Rate != "" && row != ii) {
				message = "ไม่อนุญาติให้ชื่อไฟล์ซ้ำกันเข้าระบบ กรุณาเลือกไฟล์นำเข้าใหม่";
				alertError(message);
				$('#topics_Extra_Rate_'+row).val("");
			}
		}
	}
}
//delete row table	*Extra_Rate1
function deleteRowExtra_Rate()
{
	var imgOKcount = $("#tb_Extra_Rate i.glyphicon-ok").length;
	if(imgOKcount <= 0)
	{	
		message = "กรุณาเลือกรายการที่ต้องการลบ";
		alertError(message);
	}else{
	message = "ต้องการลบรายการใช่หรือไม่";
	alertDeleteError(message);
	
	$("#btn_confirm_del").click(function(){
		var lastImgOK = $('#tb_Extra_Rate >tbody>tr:last>td:first').attr("id") || 0;	
		var numberImgOK = 0;
		if(lastImgOK == 0){
			numberImgOK = 1;
		}else{
			numberImgOK = Number(lastImgOK.replace("td_Extra_Rate_",""))+1;
		}
		for(var i = 1;i<=numberImgOK;i++)
			{
				var checked = $('#tbody_Extra_Rate_'+i+' >td:first>i').attr("class");
				if(checked == "glyphicon glyphicon-ok"){	
					deleteTableRow('#tbody_Extra_Rate_'+i);				
				}
		}
		});
	}
}	
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
function downloadfile(row) {
	var value  = $('#ip_fileuploads_CL1_Show_'+row).val();
	
	  var element = document.createElement('a');
	  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent("111"));
	  element.setAttribute('download', value);

	  element.style.display = 'none';
	  document.body.appendChild(element);
	  element.click();
	  document.body.removeChild(element);
	}

function downloadfile2(row) {
	var value  = $('#ip_fileuploads_CL1_Show_'+row).val();
	
	  var element = document.createElement('a');
	  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent("111"));
	  element.setAttribute('download', value);

	  element.style.display = 'none';
	  document.body.appendChild(element);
	  element.click();
	  document.body.removeChild(element);
	}

/***************บันทึก*******Menu1*********/
function bt_Menu1_Confirm_cl() {
	var message = "";
	var error = 0;
	var error_date = 0;
	var error_rate = 0;
	var pass_Insurance_coverage = $('#pass_Insurance_coverage_cl').val();
	var thai_Name 				= $('#thai_Name_cl').val();
	var ch_male = document.getElementById("ch_male_cl");
	var ch_female = document.getElementById("ch_female_cl");
	var ch_male_value = $("#ch_male_cl").val();
	var ch_female_value = $("#ch_female_cl").val();
	var maximum_Protection = $("#maximum_Protection_To_cl").val();
	var num_gender_chk = $("input[name='ch_gender_cl[]']:checked").length;
	
	var rd_anniversary = document.getElementById("rd_anniversary_cl");
	var rd_Time_length = document.getElementById("rd_Time_length_cl");
	var rd_insurance_premium 	= document.getElementById("rd_insurance_premium_cl");
	var rd_Time_insurance_premium = document.getElementById("rd_Time_insurance_premium_cl");
	
	/*อายุที่ขออนุมัติ*/
	var age_Start_cl = $("#age_Start_cl").val();
	var age_To_cl = $("#age_To_cl").val();
	if(age_Start_cl == "" || age_To_cl == ""){
		error++;
	}
	
	/*ระยะประกันของสัญญาเพิ่มเติม*/
	if($("#rd_anniversary_cl").prop("checked") == true){
		if($("#text_anniversary_cl").val() == "" || $("#dmy_1_cl option:selected").text() == "None"){
			error++;
		}
	}
	
	if($("#rd_Time_length_cl").prop("checked") == true){
		var numrow_period = $("#tb_BasicInformation1>tbody tr").length;
		var count_period
		
		if(numrow_period <= 0){
			error++;
		}else{
			$("#tb_BasicInformation1>tbody input:text").each(function(){
				if($(this).val() == ""){
					error++;
				}
			});
		}
	}
	
	/*ระยะชำระเบี้ยของสัญญาเพิ่มเติม*/
	if($("#rd_insurance_premium_cl").prop("checked") == true){
		if($("#text_insurance_premium_cl").val() == "" || $("#dmy_3_cl option:selected").text() == "None"){
			error++;
		}
	}
	
	if($("#rd_Time_insurance_premium_cl").prop("checked") == true){
		if($("#text_Time_insurance_premium_cl").val() == "" || $("#dmy_4_cl option:selected").text() == "None"){
			error++;
		}
	}
	
	if($("#ch_sperately_pay_ch").prop("checked") == true){
		var numrow_seperately_pay = $("#tb_Sperately_Pay>tbody input:checkbox:checked").length;			
		if(numrow_seperately_pay <= 0){
			error++;
		}else{
			$("#tb_Sperately_Pay>tbody input:checkbox:checked").each(function(){
				var id = $(this).attr("id");
					id = id.replace("ch_payment_","");
				var rate_value = $("#set_Premium_Rate_"+id).val();
				if(rate_value == 0){
					error_rate++;
				}
			});
		}
	}

	$("#tb_BasicInformation_Death>tbody tr").each(function(){
		if($(this).find("input:checkbox").prop("checked") == true){
			if($(this).find("td:nth-child(3)").text() == ""){
				error++;
			}
		}
	});
	
	$("#tb_BasicInformation_TPD>tbody tr").each(function(){
		if($(this).find("input:checkbox").prop("checked") == true){
			if($(this).find("td:nth-child(3)").text() == ""){
				error++;
			}
		}
	});
	
	/*วันที่ คปภ.อนุมัติ*/
	var appStart_date_cl = $("#appStart_date_cl").val();
	var appTo_date_cl = $("#appTo_date_cl").val();
	
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
	$("#tbl_BI_Mode_CL tbody>tr input:checkbox").each(function(){
		if($(this).prop("checked") == true){
			count_mode++;
		}
	});
	
	if(count_mode <= 0){
		error++;
	}
	
	/*แบ่งจ่าย*/
	$("#tb_Sperately_Pay input:checkbox:checked").each(function(){
		var id = $(this).attr("id");
			id = id.replace("ch_payment_","");
		var value = $(this).val();
		var value_add = $("#lb_payment_"+id).text();
		var value_key = $("#set_Premium_Rate_"+id).val();
		var sum = Number(value_add*value_key);
		if(sum < 100){
			error++;
		}
	});
	
	if(pass_Insurance_coverage == "" ||  thai_Name  == "" || maximum_Protection == "" || ch_male.checked == false && ch_female.checked == false 
			|| (rd_anniversary.checked == false && rd_Time_length.checked == false) ||  (rd_insurance_premium.checked == false 
			&& rd_Time_insurance_premium.checked == false)){
		error++;
	}
	
	if(age_Start_cl != "" && age_To_cl != ""){
    	var startDate_parse = parseDate($("#appStart_date_cl").val());
        var endDate_parse = parseDate($("#appTo_date_cl").val());
    	//alert("start>>"+startDate_parse+" endDate>>"+endDate_parse);
        if(startDate_parse > endDate_parse){
        	error_date++;
        }
	}
	
	if((error > 0 && error_date <= 0 && error_rate <= 0) || (error > 0 && error_date <= 0 && error_rate > 0) || (error > 0 && error_date > 0 && error_rate <= 0)){
		message = "กรุณาระบุข้อมูลให้ครบ";
		alertError(message);
		nameTab 	= "menu_CL_1";
		Statuesave = "N";
	}else if(error == 0 && error_date > 0 && error_rate <= 0){
		message = "วันที่เริ่มต้นต้องน้อยกว่าวันที่สิ้นสุดเสมอ";
		nameTab 	= "menu_CL_1";
		Statuesave = "N";
		alertError(message);
	}else if(error == 0 && error_date == 0 && error_rate > 0){
		message = "อัตราเบี้ยประกันภัยรายงวดต้องไม่เท่ากับ 0.00";
		nameTab 	= "menu_CL_1";
		Statuesave = "N";
		alertError(message);
	}else{		
		nameTab 	= "menu_CL_1";
		Statuesave = "Y";
		dataSave_BasicInformation();
		var message = "บันทึกข้อมูลเรียบร้อย";
		alertSuccess(message);
	}	
}
/*อายุที่ขออนุมัติ + คุ้มครองสูงสุดถึง*/
$("#age_To_cl, #maximum_Protection_To_cl, #text_anniversary_cl, #text_insurance_premium_cl, #text_Time_insurance_premium_cl").on("keypress keyup",function(){
    if($(this).val() == '0'){
      $(this).val('');  
    }
});

function checkMaxProtectionAge_CL() {
  if($("#maximum_Protection_To_cl").val() != ""){
	  var  min =$("#age_To_cl").val();
	  var  max= $("#maximum_Protection_To_cl").val();
		
	  if(Number(max) < Number(min)){
		  message = "ข้อมูลคุ้มครองสูงสุดถึงต้องมีค่ามากกว่าอายุที่ขออนุมัติสิ้นสุดเสมอ";
		  alertError(message);
		  $("#maximum_Protection_To_cl").focus();
		  $("#maximum_Protection_To_cl").val("");
	  }	
  }
}

function bt_Menu1_Canceled_cl(status) {
	  window.location = "base_plan.jsp?user="+status;
}
//ปิด model
function modal_TableTax_off(row) {
	$('#ip_fileuploads_CL1_Show_'+row).val("");
}
//ล้างค่า
function cleardataTax(ip_fileuploads,dataId0,dataId,dataId2) {
	$('#'+ip_fileuploads).val("");
	$("span[data-id=" + dataId + "]").removeClass( "glyphicon glyphicon-eye-open activecolorblue" ).addClass( "glyphicon glyphicon-eye-open activecolorgray" );
    $("span[data-id=" + dataId + "]").removeAttr("data-toggle");
    $("span[data-id=" + dataId + "]").removeAttr("data-target");
	$("span[data-id=" + dataId0 + "]").removeAttr("onclick");
	$("span[data-id=" + dataId + "]").removeAttr("onclick");
	$("span[data-id=" + dataId2 + "]").removeAttr("onclick");
	$("span[data-id=" + dataId2 + "]").removeClass( "glyphicon glyphicon-eye-download activecolorblue" ).addClass( "glyphicon glyphicon-eye-download activecolorgray" );
	$("span[data-id=" + dataId0 + "]").removeClass( "glyphicon glyphicon-refresh activecolorblue" ).addClass( "glyphicon glyphicon-refresh activecolorgray" );
}

///เช็คค่าส่วนลดเบี้ยประกัน
function checkvaluePremiumsSta_PM_Rate() {	
	var discountInsurancePremiumsSta  	= Number($('#discountInsurancePremiumsSta').val());
	var discountInsurancePremiumsTo  	= Number($('#discountInsurancePremiumsTo').val());
	if((discountInsurancePremiumsSta != "")){
		if(discountInsurancePremiumsTo < discountInsurancePremiumsSta){
			$("#discountInsurancePremiumsTo").val(parseFloat(discountInsurancePremiumsSta).toFixed(2));
			/*message = "กรุณาระบุส่วนลดเบี้ยประกันใหม่ให้ถูกต้อง";
			alertError(message);*/
		}else if(discountInsurancePremiumsTo > discountInsurancePremiumsSta){
			if(discountInsurancePremiumsSta == ""){
				if(discountInsurancePremiumsSta == ""){
					$("#discountInsurancePremiumsSta").val("0.00");
				}
				message = "กรุณาระบุส่วนลดเบี้ยประกันใหม่ให้ถูกต้อง";
				alertError(message);
			}				
		}
	}
}

function checkvaluePremiumsTo_PM_Rate() {
	var discountInsurancePremiumsSta  	= Number($('#discountInsurancePremiumsSta').val());
	var discountInsurancePremiumsTo  	= Number($('#discountInsurancePremiumsTo').val());
	if((discountInsurancePremiumsTo != "") || (discountInsurancePremiumsTo != "0.00") || (discountInsurancePremiumsTo != "0")){
		if(discountInsurancePremiumsTo < discountInsurancePremiumsSta){
			$("#discountInsurancePremiumsTo").val(parseFloat(discountInsurancePremiumsSta).toFixed(2));
			message = "กรุณาระบุส่วนลดเบี้ยประกันใหม่ให้ถูกต้อง";
			alertError(message);
		}
	}else{
		message = "กรุณาระบุส่วนลดเบี้ยประกันใหม่ให้ถูกต้อง";
		alertError(message);
	}
}
///เช็คค่า MIN_EM,MAX_EM 
function checkvalueMin_EM() {			
	var min_EM_cl  = $('#min_EM_cl').val();
	var max_EM_cl  = $('#max_EM_cl').val();
	
	if((min_EM_cl != "") || (min_EM_cl != "0.00") || (min_EM_cl != "0")){
		if(max_EM_cl < min_EM_cl){
			$("#max_EM_cl").val(min_EM_cl);					
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
function checkvalueMax_EM() {
	var min_EM_cl  = Number($('#min_EM_cl').val());
	var max_EM_cl  = Number($('#max_EM_cl').val());	

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

$("#min_EM_cl").keyup(function(){ 
	var min_EM_cl  = $('#min_EM_cl').val();
	var max_EM_cl  = $('#max_EM_cl').val();
	var riderCode = $("#baseplanCode_CL").val();
	var EM_Pattern = $("#pattern_inputEM").val();
	if ((min_EM_cl != "" || max_EM_cl != "") &&
			(min_EM_cl != 0 || max_EM_cl != 0)){
	//$('#select_fileCal_1_CL').attr("disabled", false);
	$("#input_fileCal_1_CL").attr("placeholder", EM_Pattern+riderCode+".txt");
	$("#spanBoxCal1_CL").attr("disabled", false);
	$("#select_fileCal_1_CL").attr("disabled", false);
	//$("#validate_filerate1_CL").css("display","inline-block");
}else{
	//('#select_fileCal_1_CL').attr("disabled", true);
	$("#input_fileCal_1_CL").attr("placeholder", "");
	$("#spanBoxCal1_CL").attr("disabled", true);
	$("#select_fileCal_1_CL").attr("disabled", true);
	//$("#validate_filerate1_CL").css("display","inline-block");
}
});
$("#max_EM_cl").keyup(function(){ 
	var min_EM_cl  = $('#min_EM_cl').val();
	var max_EM_cl  = $('#max_EM_cl').val();
	var riderCode = $("#baseplanCode_CL").val();
	var EM_Pattern = $("#pattern_inputEM").val();
	if ((min_EM_cl != "" || max_EM_cl != "") && (min_EM_cl != 0 || max_EM_cl != 0)){
	//$('#select_fileCal_1_CL').attr("disabled", false);
	$("#input_fileCal_1_CL").attr("placeholder", EM_Pattern+riderCode+".txt");
	$("#spanBoxCal1_CL").attr("disabled", false);
	$("#select_fileCal_1_CL").attr("disabled", false);
	if($("#input_fileCal_1_CL").val() == ""){
		$("#validate_filerate1_CL").css("display","inline-block");
	}
}else{
	//$('#select_fileCal_1_CL').attr("disabled", true);
	$("#input_fileCal_1_CL").attr("placeholder", "");
	$("#spanBoxCal1_CL").attr("disabled", true);
	$("#select_fileCal_1_CL").attr("disabled", true);
	$("#input_fileCal_1_CL").val("");
	$("#cv_InputExtra_Rate_cl").attr("disabled", true);
	if($("#input_fileCal_1_CL").val() == ""){
		$("#validate_filerate1_CL").css("display","inline-block");
	}
}
});

//
var topics_Tax = "";
//เช็คไฟล์ซ้ำ
//ตารางลดหย่อน
function check_filename1(fileID,fileFormat,tablename,topicsname){
	var filename = document.getElementById(fileID).files[0].name.split('.');
		var filenamelength 	= filename[0].length;
		//
		var name_split = filename[0].split('_'); // 
		var  name_pass_Insurance = name_split.length-1;
		//
		var numbercheck 	= filenamelength - name_split[name_pass_Insurance].length;
		var checkname = filename[0].substr(0, numbercheck);
		///check format file table TaxReduce
		
		if (fileFormat == "Tax_D") {
			if(checkname != "Tax_D 11 10K_" && checkname != "Tax_D 11 100K_" || name_split[name_pass_Insurance] != pass_Insurance_coverage_cl){
				message = "กรุณานำเข้าไฟล์ที่ถูกต้อง";
				alertError(message);
				return false;
			}else {
				if (check_DuplicateFile0() == false) {
					return false;
				}
			}
		}else if (fileFormat == "Tax_TPD") {
			if(checkname != "Tax_TPD 11 10K_" && checkname != "Tax_TPD 11 100K_" || name_split[name_pass_Insurance] != pass_Insurance_coverage_cl){
				message = "กรุณานำเข้าไฟล์ที่ถูกต้อง";
				alertError(message);
				return false;
			}else {
				if (check_DuplicateFile0() == false) {
					return false;
				}
			}
		}else if (fileFormat == "Tax_ALL") {
			//checkname
			if (name_split.length == 3) {;//เช็คชนดของไฟล์ 4 = ไฟล์ เริ่มต้น
			////เช็คไฟล์ซ้ำ////
			var lastImgOK = $('#'+''+tablename+''+'>tbody>tr:last>td:first').attr("id") || 0;
			var	numberImgOK = Number(lastImgOK.replace("td_TaxReduce_",""));
			for (var i = 1; i <= numberImgOK-1; i++){
				var fileID2	= $('#ip_fileuploads_CL1_Show_'+i).val();
				var topics 	= $('#topics_Tax_'+i).val();
				
				if (fileID2 != "" &&  fileID2 != undefined){	
					var filename2 = fileID2.split('.');
					var filenamelength2 	= filename2[0].length;
					//
					var name_split2 = filename2[0].split('_'); // 
					var  name_pass_Insurance2 = name_split2.length-1;
					//
					var numbercheck2 	= filenamelength2 - name_split2[name_pass_Insurance].length;
					var checkname2 = filename2[0].substr(0, numbercheck2);
						if (checkname2 == checkname && name_split[name_pass_Insurance] == pass_Insurance_coverage_cl ) {//เช็คไฟล์ซ้ำ
							message = "ไม่อนุญาตให้นำเข้าไฟล์ซ้ำกันในระบบ กรุณาเลือกนำเข้าไฟล์ใหม่อีกครั้ง";
							alertError(message);
							return false;
						}
				}
			}
			///เช็คไฟล์ผิด/////
				if(checkname != "Tax_D 11 10K_" && checkname != "Tax_D 11 100K_" && checkname != "Tax_TPD 11 10K_" && checkname != "Tax_TPD 11 100K_" 
					|| name_split[name_pass_Insurance] != pass_Insurance_coverage_cl){
					message = "กรุณานำเข้าไฟล์ที่ถูกต้อง";
					alertError(message);
					return false;
				}
			}else {
				message = "กรุณานำเข้าไฟล์ที่ถูกต้อง";
				alertError(message);
				return false;
			}
			/*....*******************************************....*/
		}
		///check format file table PM_Rate
		///เริ่มต้น/////
		//////เสียชีวิต และทุพพลภาพ
		else if (fileFormat == "check_selectBox_0_DTPD"){//ตามแผนคุ้มครอง  
			//var check_Age_Band1 = filename[0].substr(0, 16); //ตัดชื่อไฟล์เพื่อเช็ค
			if(checkname != "P_CL 14 P_DTPD_"   || name_split[name_pass_Insurance] != pass_Insurance_coverage_cl){
				message = "กรุณานำเข้าไฟล์ที่ถูกต้อง";
				alertError(message);
				return false;
			}else {
				if (check_DuplicateFile1() == false) {
					return false;
				}
			}
		}else if (fileFormat == "check_selectBox_1_DTPD"){//ต่อทุน 10,000 บาท 
			if(checkname != "P_CL 11 10K_DTPD_"   || name_split[name_pass_Insurance] != pass_Insurance_coverage_cl){
				message = "กรุณานำเข้าไฟล์ที่ถูกต้อง";
				alertError(message);
				return false;
			}else {
				if (check_DuplicateFile1() == false) {
					return false;
				}
			}
		}else if (fileFormat == "check_selectBox_2_DTPD"){//ต่อทุน 100,000 บาท 
			if(checkname != "P_CL 11 100K_DTPD_"   || name_split[name_pass_Insurance] != pass_Insurance_coverage_cl){
				message = "กรุณานำเข้าไฟล์ที่ถูกต้อง";
				alertError(message);
				return false;
			}else {
				if (check_DuplicateFile1() == false) {
					return false;
				}
			}
		}
		///////Age Band////////////////
		//////เสียชีวิต และทุพพลภาพ
		else if (fileFormat == "check_selectBox_0_DTPD_AB"){//ตามแผนคุ้มครอง  
			var n = filename[0].indexOf("B");//เช็คไฟล์ทั้งหมดของ /Age Band/
			var check_Age_Band1 = filename[0].substr(0, n+1); //ตัดชื่อไฟล์เพื่อเช็ค
			
			if(check_Age_Band1 != "P_CL 14 P_DTPD_B"   || name_split[name_pass_Insurance] != pass_Insurance_coverage_cl){
				message = "กรุณานำเข้าไฟล์ที่ถูกต้อง";
				alertError(message);
				return false;
			}
		}else if (fileFormat == "check_selectBox_1_DTPD_AB"){//ต่อทุน 10,000 บาท 
			var n = filename[0].indexOf("B");//เช็คไฟล์ทั้งหมดของ /Age Band/
			var check_Age_Band1 = filename[0].substr(0, n+1); //ตัดชื่อไฟล์เพื่อเช็ค
			
			if(check_Age_Band1 != "P_CL 11 10K_DTPD_B"   || name_split[name_pass_Insurance] != pass_Insurance_coverage_cl){
				message = "กรุณานำเข้าไฟล์ที่ถูกต้อง";
				alertError(message);
				return false;
			}
		}else if (fileFormat == "check_selectBox_2_DTPD_AB"){//ต่อทุน 100,000 บาท 
			var n = filename[0].indexOf("B");//เช็คไฟล์ทั้งหมดของ /Age Band/
			var check_Age_Band1 = filename[0].substr(0, n+1); //ตัดชื่อไฟล์เพื่อเช็ค
			
			if(check_Age_Band1 != "P_CL 11 100K_DTPD_B"   || name_split[name_pass_Insurance] != pass_Insurance_coverage_cl){
				message = "กรุณานำเข้าไฟล์ที่ถูกต้อง";
				alertError(message);
				return false;
			}
		}
	///////เริ่มต้น////////////////
		/////เสียชีวิต
		else if (fileFormat == "check_selectBox_0_D"){//ตามแผนคุ้มครอง  
			if(checkname != "P_CL 14 P_D_"   || name_split[name_pass_Insurance] != pass_Insurance_coverage_cl){
				message = "กรุณานำเข้าไฟล์ที่ถูกต้อง";
				alertError(message);
				return false;
			}else {
				if (check_DuplicateFile1() == false) {
					return false;
				}
			}
		}else if (fileFormat == "check_selectBox_1_D"){//ต่อทุน 10,000 บาท 
			if(checkname != "P_CL 11 10K_D_"   || name_split[name_pass_Insurance] != pass_Insurance_coverage_cl){
				message = "กรุณานำเข้าไฟล์ที่ถูกต้อง";
				alertError(message);
				return false;
			}else {
				if (check_DuplicateFile1() == false) {
					return false;
				}
			}
		}else if (fileFormat == "check_selectBox_2_D"){//ต่อทุน 100,000 บาท 
			if(checkname != "P_CL 11 100K_D_"   || name_split[name_pass_Insurance] != pass_Insurance_coverage_cl){
				message = "กรุณานำเข้าไฟล์ที่ถูกต้อง";
				alertError(message);
				return false;
			}else {
				if (check_DuplicateFile1() == false) {
					return false;
				}
			}
		}
	///////Age Band////////////////
		/////เสียชีวิต
		else if (fileFormat == "check_selectBox_0_D_AB"){//ตามแผนคุ้มครอง  
			var n = filename[0].indexOf("B");//เช็คไฟล์ทั้งหมดของ /Age Band/
			var check_Age_Band1 = filename[0].substr(0, n+1); //ตัดชื่อไฟล์เพื่อเช็ค
			
			if(check_Age_Band1 != "P_CL 14 P_D_B"   || name_split[name_pass_Insurance] != pass_Insurance_coverage_cl){
				message = "กรุณานำเข้าไฟล์ที่ถูกต้อง";
				alertError(message);
				return false;
			}
		}else if (fileFormat == "check_selectBox_1_D_AB"){//ต่อทุน 10,000 บาท 
			var n = filename[0].indexOf("B");//เช็คไฟล์ทั้งหมดของ /Age Band/
			var check_Age_Band1 = filename[0].substr(0, n+1); //ตัดชื่อไฟล์เพื่อเช็ค
			
			if(check_Age_Band1 != "P_CL 11 10K_D_B"   || name_split[name_pass_Insurance] != pass_Insurance_coverage_cl){
				message = "กรุณานำเข้าไฟล์ที่ถูกต้อง";
				alertError(message);
				return false;
			}
		}else if (fileFormat == "check_selectBox_2_D_AB"){//ต่อทุน 100,000 บาท 
			var n = filename[0].indexOf("B");//เช็คไฟล์ทั้งหมดของ /Age Band/
			var check_Age_Band1 = filename[0].substr(0, n+1); //ตัดชื่อไฟล์เพื่อเช็ค
			
			if(check_Age_Band1 != "P_CL 11 100K_D_B"   || name_split[name_pass_Insurance] != pass_Insurance_coverage_cl){
				message = "กรุณานำเข้าไฟล์ที่ถูกต้อง";
				alertError(message);
				return false;
			}
		}
		///////เริ่มต้น////////////////
		/////ทุพพลภาพ
		else if (fileFormat == "check_selectBox_0_TPD"){//ตามแผนคุ้มครอง  
			if(checkname != "P_CL 14 P_TPD_"   || name_split[name_pass_Insurance] != pass_Insurance_coverage_cl){
				message = "กรุณานำเข้าไฟล์ที่ถูกต้อง";
				alertError(message);
				return false;
			}else {
				if (check_DuplicateFile1() == false) {
					return false;
				}
			}
		}else if (fileFormat == "check_selectBox_1_TPD"){//ต่อทุน 10,000 บาท 
			if(checkname != "P_CL 11 10K_TPD_"   || name_split[name_pass_Insurance] != pass_Insurance_coverage_cl){
				message = "กรุณานำเข้าไฟล์ที่ถูกต้อง";
				alertError(message);
				return false;
			}else {
				if (check_DuplicateFile1() == false) {
					return false;
				}
			}
		}else if (fileFormat == "check_selectBox_2_TPD"){//ต่อทุน 100,000 บาท 
			if(checkname != "P_CL 11 100K_TPD_"   || name_split[name_pass_Insurance] != pass_Insurance_coverage_cl){
				message = "กรุณานำเข้าไฟล์ที่ถูกต้อง";
				alertError(message);
				return false;
			}else {
				if (check_DuplicateFile1() == false) {
					return false;
				}
			}
		}
	///////Age Band////////////////	
	/////ทุพพลภาพ
		else if (fileFormat == "check_selectBox_0_TPD_AB"){//ตามแผนคุ้มครอง  
			var n = filename[0].indexOf("B");//เช็คไฟล์ทั้งหมดของ /Age Band/
			var check_Age_Band1 = filename[0].substr(0, n+1); //ตัดชื่อไฟล์เพื่อเช็ค
			
			if(check_Age_Band1 != "P_CL 14 P_TPD_B"   || name_split[name_pass_Insurance] != pass_Insurance_coverage_cl){
				message = "กรุณานำเข้าไฟล์ที่ถูกต้อง";
				alertError(message);
				return false;
			}
		}else if (fileFormat == "check_selectBox_1_TPD_AB"){//ต่อทุน 10,000 บาท 
			var n = filename[0].indexOf("B");//เช็คไฟล์ทั้งหมดของ /Age Band/
			var check_Age_Band1 = filename[0].substr(0, n+1); //ตัดชื่อไฟล์เพื่อเช็ค
			
			if(check_Age_Band1 != "P_CL 11 10K_TPD_B"   || name_split[name_pass_Insurance] != pass_Insurance_coverage_cl){
				message = "กรุณานำเข้าไฟล์ที่ถูกต้อง";
				alertError(message);
				return false;
			}
		}else if (fileFormat == "check_selectBox_2_TPD_AB"){//ต่อทุน 100,000 บาท 
			var n = filename[0].indexOf("B");//เช็คไฟล์ทั้งหมดของ /Age Band/
			var check_Age_Band1 = filename[0].substr(0, n+1); //ตัดชื่อไฟล์เพื่อเช็ค
			
			if(check_Age_Band1 != "P_CL 11 100K_TPD_B"   || name_split[name_pass_Insurance] != pass_Insurance_coverage_cl){
				message = "กรุณานำเข้าไฟล์ที่ถูกต้อง";
				alertError(message);
				return false;
			}
		}
		////เช็คไฟล์ตามแผนความคุ้มครอง *ทุกไฟล์
		else if (fileFormat == "check_selectBox_0_All"){
			//checkname
			if (name_split.length == 4) {;//เช็คชนดของไฟล์ 4 = ไฟล์ เริ่มต้น
			////เช็คไฟล์ซ้ำ////
			var lastImgOK = $('#'+''+tablename+''+'>tbody>tr:last>td:first').attr("id") || 0;
			var	numberImgOK = Number(lastImgOK.replace("td_PM_Rate1_",""));
			for (var i = 1; i <= numberImgOK-1; i++){
				var fileID2	= $('#ip_fileuploads_CL_PM_Rate1_Show_'+i).val();
				var topics 	= $('#topics_PM_Rate_'+i).val();
				/*if (topicsname == "") {///เช็คหัวข้อซ้ำ
					message = "ไม่อนุญาติให้ชื่อไฟล์ซ้ำกันเข้าระบบ กรุณาเลือกไฟล์นำเข้าใหม่";
					alertError(message);
					return false;
				}else*/ if (fileID2 != "" &&  fileID2 != undefined){	
					var filename2 = fileID2.split('.');
					var filenamelength2 	= filename2[0].length;
					//
					var name_split2 = filename2[0].split('_'); // 
					var  name_pass_Insurance2 = name_split2.length-1;
					//
					var numbercheck2 	= filenamelength2 - name_split2[name_pass_Insurance].length;
					var checkname2 = filename2[0].substr(0, numbercheck2);
						if (checkname2 == checkname && name_split[name_pass_Insurance] == pass_Insurance_coverage_cl ) {//เช็คไฟล์ซ้ำ
							message = "ไม่อนุญาตให้นำเข้าไฟล์ซ้ำกันในระบบ กรุณาเลือกนำเข้าไฟล์ใหม่อีกครั้ง";
							alertError(message);
							return false;
						}
				}
			}
			///เช็คไฟล์ผิด/////
				if(valueselect_PM_Rate == 0 && checkname != "P_CL 14 P_DTPD_" && checkname != "P_CL 14 P_D_" 
					 && checkname != "P_CL 14 P_TPD_" || name_split[name_pass_Insurance] != pass_Insurance_coverage_cl){
					message = "กรุณานำเข้าไฟล์ที่ถูกต้อง";
					alertError(message);
					return false;
				}else if(valueselect_PM_Rate == 1 && checkname != "P_CL 11 10K_DTPD_" && checkname != "P_CL 11 10K_D_"  
					&& checkname != "P_CL 11 10K_TPD_" || name_split[name_pass_Insurance] != pass_Insurance_coverage_cl){
					message = "กรุณานำเข้าไฟล์ที่ถูกต้อง";
					alertError(message);
					return false;
				}
				else if(valueselect_PM_Rate == 2 && checkname != "P_CL 11 100K_DTPD_" && checkname != "P_CL 11 100K_D_"  
					&& checkname != "P_CL 11 100K_TPD_" || name_split[name_pass_Insurance] != pass_Insurance_coverage_cl){
					message = "กรุณานำเข้าไฟล์ที่ถูกต้อง";
					alertError(message);
					return false;
				}
			}else if (name_split.length == 5) {//เช็คชนดของไฟล์ 5 = ไฟล์ Age Band
				var n = filename[0].indexOf("B");//เช็คไฟล์ทั้งหมดของ /Age Band/
				var check_Age_Band1 = filename[0].substr(0, n+1); //ตัดชื่อไฟล์เพื่อเช็ค
				
			////เช็คไฟล์ซ้ำ////
				var lastImgOK = $('#'+''+tablename+''+'>tbody>tr:last>td:first').attr("id") || 0;
				var	numberImgOK = Number(lastImgOK.replace("td_PM_Rate1_",""));
				for (var i = 1; i <= numberImgOK-1; i++){
					var fileID2 = $('#ip_fileuploads_CL_PM_Rate1_Show_'+i).val();
					var topics 	= $('#topics_PM_Rate_'+i).val();
					/*if (topics == topicsname) {///เช็คหัวข้อซ้ำ
						message = "ไม่อนุญาติให้ชื่อไฟล์ซ้ำกันเข้าระบบ กรุณาเลือกไฟล์นำเข้าใหม่";
						alertError(message);
						return false;
					}else*/ if (fileID2 != "" &&  fileID2 != undefined){
						var filename2 = fileID2.split('.');
						var n = filename[0].indexOf("B");//เช็คไฟล์ทั้งหมดของ /Age Band/
						var check_Age_Band2 = filename2[0].substr(0, n+1); //ตัดชื่อไฟล์เพื่อเช็ค
						
						if (check_Age_Band1 == check_Age_Band2 && name_split[name_pass_Insurance] == pass_Insurance_coverage_cl ) {
							message = "ไม่อนุญาตให้นำเข้าไฟล์ซ้ำกันในระบบ กรุณาเลือกนำเข้าไฟล์ใหม่อีกครั้ง";
							alertError(message);
							return false;
						}
					}
				}
				///เช็คไฟล์ผิด/////
				if(valueselect_PM_Rate == 0 && check_Age_Band1 != "P_CL 14 P_DTPD_B" && check_Age_Band1 != "P_CL 14 P_D_B" 
					&& check_Age_Band1 != "P_CL 14 P_TPD_B" || name_split[name_pass_Insurance] != pass_Insurance_coverage_cl){
					message = "กรุณานำเข้าไฟล์ที่ถูกต้อง";
					alertError(message);
					return false;
				}else if(valueselect_PM_Rate == 1 && check_Age_Band1 != "P_CL 11 10K_DTPD_B" && check_Age_Band1 != "P_CL 11 10K_D_B"  
					&& check_Age_Band1 != "P_CL 11 10K_TPD_B" || name_split[name_pass_Insurance] != pass_Insurance_coverage_cl){
					message = "กรุณานำเข้าไฟล์ที่ถูกต้อง";
					alertError(message);
					return false;
				}
				else if(valueselect_PM_Rate == 2 && check_Age_Band1 != "P_CL 11 100K_DTPD_B" && check_Age_Band1 != "P_CL 11 100K_D_B"  
					&& check_Age_Band1 != "P_CL 11 100K_TPD_B" || name_split[name_pass_Insurance] != pass_Insurance_coverage_cl){
					message = "กรุณานำเข้าไฟล์ที่ถูกต้อง";
					alertError(message);
					return false;
				}
			}else {
				message = "กรุณานำเข้าไฟล์ที่ถูกต้อง";
				alertError(message);
				return false;
			}
		}
		//*****Extra_Rate********
		/////ต่อทุน10,000
		else if (fileFormat == "check_selectBoxExtra_1_DTPD") {
			if(checkname != "P_Ext_CL 14 10K_DTPD_"   || name_split[name_pass_Insurance] != pass_Insurance_coverage_cl){
				message = "กรุณานำเข้าไฟล์ที่ถูกต้อง";
				alertError(message);
				return false;
			}else {
				if (check_DuplicateFile2() == false) {
					return false;
				}
			}
		}else if (fileFormat == "check_selectBoxExtra_1_D") {
			if(checkname != "P_Ext_CL 14 10K_D_"   || name_split[name_pass_Insurance] != pass_Insurance_coverage_cl){
				message = "กรุณานำเข้าไฟล์ที่ถูกต้อง";
				alertError(message);
				return false;
			}else {
				if (check_DuplicateFile2() == false) {
					return false;
				}
			}
		}else if (fileFormat == "check_selectBoxExtra_1_TPD") {
			if(checkname != "P_Ext_CL 14 10K_TPD_"   || name_split[name_pass_Insurance] != pass_Insurance_coverage_cl){
				message = "กรุณานำเข้าไฟล์ที่ถูกต้อง";
				alertError(message);
				return false;
			}else {
				if (check_DuplicateFile2() == false) {
					return false;
				}
			}
		}
		/////ต่อทุน 100,000
		else if (fileFormat == "check_selectBoxExtra_2_DTPD") {
			if(checkname != "P_Ext_CL 14 100K_DTPD_"   || name_split[name_pass_Insurance] != pass_Insurance_coverage_cl){
				message = "กรุณานำเข้าไฟล์ที่ถูกต้อง";
				alertError(message);
				return false;
			}else {
				if (check_DuplicateFile2() == false) {
					return false;
				}
			}
		}else if (fileFormat == "check_selectBoxExtra_2_D") {
			if(checkname != "P_Ext_CL 14 100K_D_"   || name_split[name_pass_Insurance] != pass_Insurance_coverage_cl){
				message = "กรุณานำเข้าไฟล์ที่ถูกต้อง";
				alertError(message);
				return false;
			}else {
				if (check_DuplicateFile2() == false) {
					return false;
				}
			}
		}else if (fileFormat == "check_selectBoxExtra_2_TPD") {
			if(checkname != "P_Ext_CL 14 100K_TPD_"   || name_split[name_pass_Insurance] != pass_Insurance_coverage_cl){
				message = "กรุณานำเข้าไฟล์ที่ถูกต้อง";
				alertError(message);
				return false;
			}else {
				if (check_DuplicateFile2() == false) {
					return false;
				}
			}
		}
		////เช็คไฟล์ตามแผนความคุ้มครอง *ทุกไฟล์
		else if (fileFormat == "check_selectBoxExtra_0_All"){
			//checkname
			 if (name_split.length == 5) {//เช็คชนิดของไฟล์
				var numbercheck 	= filenamelength - name_split[name_pass_Insurance].length;
				var check_Age_Band1 = filename[0].substr(0, numbercheck);
			////เช็คไฟล์ซ้ำ////
				var lastImgOK = $('#'+''+tablename+''+'>tbody>tr:last>td:first').attr("id") || 0;
				var	numberImgOK = Number(lastImgOK.replace("td_Extra_Rate_",""));
				for (var i = 1; i <= numberImgOK-1; i++){
					var fileID2 = $('#ip_fileuploads_CL_Extra_Rate_Show_'+i).val();
					var topics 	= $('#topics_Extra_Rate_'+i).val();
					/*if (topics == topicsname) {///เช็คหัวข้อซ้ำ
						message = "ไม่อนุญาติให้ชื่อไฟล์ซ้ำกันเข้าระบบ กรุณาเลือกไฟล์นำเข้าใหม่";
						alertError(message);
						return false;
					}else*/ if (fileID2 != "" &&  fileID2 != undefined){
						var filename2 		= fileID2.split('.');
						var filenamelength2 = filename2[0].length;
						//
						var name_split2 			= filename2[0].split('_'); // 
						var  name_pass_Insurance2 	= name_split2.length-1;
						//
						var numbercheck2 	= filenamelength2 - name_split2[name_pass_Insurance].length;
						var checkname2 		= filename2[0].substr(0, numbercheck2);
							if (checkname2 == checkname && name_split[name_pass_Insurance] == pass_Insurance_coverage_cl) {
								message = "ไม่อนุญาตให้นำเข้าไฟล์ซ้ำกันในระบบ กรุณาเลือกนำเข้าไฟล์ใหม่อีกครั้ง";
								alertError(message);
								return false;
							}
					}
				}
				///เช็คไฟล์ผิด/////
				if(valueselect_Extra == 1 && check_Age_Band1 != "P_Ext_CL 14 10K_DTPD_" && check_Age_Band1 != "P_Ext_CL 14 10K_D_"  
					&& check_Age_Band1 != "P_Ext_CL 14 10K_TPD_" || name_split[name_pass_Insurance] != pass_Insurance_coverage_cl){
					message = "กรุณานำเข้าไฟล์ที่ถูกต้อง";
					alertError(message);
					return false;
				}
				else if(valueselect_Extra == 2 && check_Age_Band1 != "P_Ext_CL 14 100K_DTPD_" && check_Age_Band1 != "P_Ext_CL 14 100K_D_"  
					&& check_Age_Band1 != "P_Ext_CL 14 100K_TPD_" || name_split[name_pass_Insurance] != pass_Insurance_coverage_cl){
					message = "กรุณานำเข้าไฟล์ที่ถูกต้อง";
					alertError(message);
					return false;
				}
			}else {
					message = "กรุณานำเข้าไฟล์ที่ถูกต้อง";
					alertError(message);
					return false;
			}
		}
		else {
			if(checkname != fileFormat || name_split[name_pass_Insurance] != pass_Insurance_coverage_cl){
				message = "กรุณานำเข้าไฟล์ที่ถูกต้อง";
				alertError(message);
				return false;
			}
		}
function check_DuplicateFile0() {
////เช็คไฟล์ซ้ำ////
	var lastImgOK = $('#'+''+tablename+''+'>tbody>tr:last>td:first').attr("id") || 0;
	var	numberImgOK = Number(lastImgOK.replace("td_TaxReduce_",""));
	for (var i = 1; i <= numberImgOK; i++){
		var fileID2	= $('#ip_fileuploads_CL1_Show_'+i).val();
		var topics 	= $('#topics_Tax_'+i).val();
		
		if (fileID2 != "" &&  fileID2 != undefined){	
			var filename2 = fileID2.split('.');
			var filenamelength2 	= filename2[0].length;
			//
			var name_split2 = filename2[0].split('_'); // 
			var  name_pass_Insurance2 = name_split2.length-1;
			//
			var numbercheck2 	= filenamelength2 - name_split2[name_pass_Insurance].length;
			var checkname2 = filename2[0].substr(0, numbercheck2);
				if (checkname2 == checkname && name_split[name_pass_Insurance] == pass_Insurance_coverage_cl ) {//เช็คไฟล์ซ้ำ
					message = "ไม่อนุญาตให้นำเข้าไฟล์ซ้ำกันในระบบ กรุณาเลือกนำเข้าไฟล์ใหม่อีกครั้ง";
					alertError(message);
					return false;
				}
		}
	}
}
function check_DuplicateFile1() {
	////เช็คไฟล์ซ้ำ////
		var lastImgOK = $('#'+''+tablename+''+'>tbody>tr:last>td:first').attr("id") || 0;
		var	numberImgOK = Number(lastImgOK.replace("td_PM_Rate1_",""));
		for (var i = 1; i <= numberImgOK; i++){
			var fileID2	= $('#ip_fileuploads_CL_PM_Rate1_Show_'+i).val();
			var topics 	= $('#topics_PM_Rate_'+i).val();
			if (fileID2 != "" &&  fileID2 != undefined){	
				var filename2 = fileID2.split('.');
				var filenamelength2 	= filename2[0].length;
				//
				var name_split2 = filename2[0].split('_'); // 
				var  name_pass_Insurance2 = name_split2.length-1;
				//
				var numbercheck2 	= filenamelength2 - name_split2[name_pass_Insurance].length;
				var checkname2 = filename2[0].substr(0, numbercheck2);
					if (checkname2 == checkname && name_split[name_pass_Insurance] == pass_Insurance_coverage_cl ) {//เช็คไฟล์ซ้ำ
						message = "ไม่อนุญาตให้นำเข้าไฟล์ซ้ำกันในระบบ กรุณาเลือกนำเข้าไฟล์ใหม่อีกครั้ง";
						alertError(message);
						return false;
					}
			}
		}
}
function check_DuplicateFile2 () {
	////เช็คไฟล์ซ้ำ////
	var lastImgOK = $('#'+''+tablename+''+'>tbody>tr:last>td:first').attr("id") || 0;
	var	numberImgOK = Number(lastImgOK.replace("td_Extra_Rate_",""));
	for (var i = 1; i <= numberImgOK; i++){
		var fileID2 = $('#ip_fileuploads_CL_Extra_Rate_Show_'+i).val();
		var topics 	= $('#topics_Extra_Rate_'+i).val();
			if (fileID2 != "" &&  fileID2 != undefined){	
				var filename2 = fileID2.split('.');
				var filenamelength2 	= filename2[0].length;
				//
				var name_split2 = filename2[0].split('_'); // 
				var  name_pass_Insurance2 = name_split2.length-1;
				//
				var numbercheck2 	= filenamelength2 - name_split2[name_pass_Insurance].length;
				var checkname2 = filename2[0].substr(0, numbercheck2);
					if (checkname2 == checkname && name_split[name_pass_Insurance] == pass_Insurance_coverage_cl ) {//เช็คไฟล์ซ้ำ
						message = "ไม่อนุญาตให้นำเข้าไฟล์ซ้ำกันในระบบ กรุณาเลือกนำเข้าไฟล์ใหม่อีกครั้ง";
						alertError(message);
						return false;
					}
			}
		}
	}
}

var valuetext_Sa = "";
var valueselect_Sa = "";
///////////////////นำเข้า ตารางช่วงอายุ-นำเข้า SA_CL_Rate///////////////////
function selectTypeCal_CL(type,box){
		var filename = type.split('.');
		var filenamelength 	= filename[0].length;
		
		var placeholder = "";
		
		if(filename[0] != ""){
			placeholder = filename[0]+".txt";
		}else{
			placeholder = "";
		}
		
		var input_html = "<div class='input-group'>"+
						 "<input type='text' class='form-control' id='input_fileCal_"+box+"_CL' readonly placeholder='"+placeholder+"'>"+
						 "<label class='input-group-btn'>"+
						 "<span id='spanBoxCal"+box+"_CL' class='btn btn-primary'>"+
						 "<font id='validate_filerate"+box+"_CL' style='color: red; display: inline-block;'>*</font>"+
						 "เลือกไฟล์<input id='select_fileCal_"+box+"_CL' type='file' accept='text/plain' style='display: none;'"+
						 "onchange=\"selectFileCal_CL("+box+",'"+filename[0]+"','select_fileCal_"+box+"_CL');"+"\" disabled></span>"+
						 "</label></div>";
		
		$("#div_fileCal"+box+"_CL").html(input_html);
}

function cancel_CheckNone_Menu3(data1, data2) {
		$("#input_fileCal_2_CL").val(data1);
		$("#sl_Reduced_capital_Cal2_CL").val(data2);
		$('#modal_CheckNone_Menu3').modal('hide');
		
}

function selectFileCal_CL(select_file,file_format,id_fileupload){
			var tbl_auto = "";
			var modal_auto = "";
			var tbl_view = "";
			var modal_view = "";
			var tbl_col = 0;
			var attr_onclick = "";
			var cov_code = $("#pass_Insurance_coverage_cl").val();
			
			/*file*/
			var select_file_name = "";
			var type = "";
			var file_id = 0;
			var file_type_id = 3;
			var file_path = "";
			var file_pattern = "";
			var user_code = "0000000";	    

			if(select_file == 1){
				tbl_col = 54;
				tbl_auto = "tb_inputExtra_RateAuto";
				tbl_view = "tb_inputExtra_RateView";
				modal_auto = "modal_inputExtra_RateAuto";
				modal_view = "modal_inputExtra_RateView";
				cv_button = "cv_InputExtra_Rate_cl";
				btn_save = "save_inputExtra_Rate";
				attr_onclick = "open_modalCV(6,this.id)";
				validate_file = "validate_filerate1_CL";
				
				select_file_name = 1;
				type = 21;
				fileID = "em_fileID1";
				btn_download = "download_tb_inputExtra_RateView"
				rate_cat_id = $("#rateCat_inputEM").val();
				sub_cat_id = $("#rateSubCat_inputEM").val();
				
			}else if(select_file == 2){
				tbl_col = 31;
				tbl_auto = "tb_inputSA_CL_RateAuto";
				tbl_view = "tb_inputSA_CL_Rate";
				modal_auto = "modal_inputSA_CL_RateAuto";
				modal_view = "modal_inputSA_CL_Rate";
				cv_button = "cv_SAExtra_Rate_cl";
				btn_save = "save_inputSA_CL_Rate";
				attr_onclick = "open_modalCV(7,this.id)";
				validate_file = "validate_filerate2_CL";
				btn_download = "download_tb_inputSA_CL_Rate";
				select_file_name = 2;
				type = 22;
				fileID = "decrease_fileID2";
				
				rate_cat_id = $("#rateCat_inputSA").val();
				sub_cat_id = $("#sl_Reduced_capital_Cal2_CL option:selected").attr("data-subcat");
			}
			var inputfilename 	= "select_fileCal_"+select_file+"_CL";
			
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
			
			if(check_filename2(id_fileupload, file_format) == false){
					$('#'+cv_button).prop("disabled",true);		
					$("#input_fileCal_"+select_file+"_CL").val("");					
			}else{	
					openFile(event,inputfilename,tbl_auto,tbl_col);
					openFile(event,inputfilename,tbl_view,tbl_col);
					$("#base64_fileTXT_CL").val("");
					$('#'+modal_auto).modal('show');	
					
					//Added
					convertToBase64("select_fileCal_"+select_file_name+"_CL",file_type_id);
					 /*if(checkfile_policyDupicate(file_name,"txt") == false){			  
						 message = "ไม่สามารถอัพโหลดได้ เนื่องจากมีชื่อไฟล์นี้อยู่แล้ว";
						 alertError(message);					    
						 $("#input_fileCal_"+select_file_name+"_CL").val("");
					 }*/

					 
					$("#"+btn_save).unbind();
					$("#"+btn_save).click(function(){
						
						/*save file*/
						//set_Filevalue(type,select_file_name,file_id,file_type_id,file_name,file_path,file_pattern,rate_cat_id,sub_cat_id,user_code);		
						/*end save file*/
						var base64 = $("#base64_fileTXT_CL").val();
						$("#modal_waiting").modal('show');
						 if( base64 != ""){
							 var dateTime = getCurrentDate();
				    		   var file_name_update = "3_"+dateTime+".txt"
					    	   datajson = {				        	
							    		"method" : "uploadFile_txt",
							    		"passInsurance" : $("#pass_Insurance_coverage_cl").val(),
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
										    		$("#em_rateLayout"+select_file_name).val(response.rate_layout_id);
										    		$("#em_fileID"+select_file_name).val(response.file_id);
										    	}else if(type == 22){
										    		/*SA*/
										    		$("#decrease_rateLayout"+select_file_name).val(response.rate_layout_id);
										    		$("#decrease_fileID"+select_file_name).val(response.file_id);
										    	}	
										    	
										    	$("#input_fileCal_"+select_file+"_CL").val(file_name);
												$('#'+cv_button).prop("disabled",false);
//												$('#'+cv_button).attr("onclick",attr_onclick);
												$("#"+validate_file).css("display","none");
												$("#base64_fileTXT_CL").val("");
												$("#modal_waiting").modal('hide');
												$("body").addClass("body_nopadding");
												$('#'+cv_button).attr("onclick","openFileTextBasePlan_CL('"+file_name+"','"+obj_ref+"', "+tbl_col+", '"+tbl_view+"', '"+modal_view+"')");
												$("#"+btn_download).attr("onclick", "openFile_target('"+file_name+"','"+obj_ref+"','txt_download')");
												
										    },
										    error : function(response) {	
										    	//console.log("save file error");
										    	message = "ไม่สามารถบันทึกไฟล์ได้";
												alertError(message);
										    	
										    	$("#input_fileCal_"+select_file+"_CL").val("");
										    }
										});	
							 	    	
							 	    }
							    })
							    
						 }
							

					});

			}
}

function check_filename2(fileID, fileFormat){
			var filename = document.getElementById(fileID).files[0].name.split('.');			
			var checkname = filename[0];
			
			///check file format
				if(checkname != fileFormat){
					message = "กรุณานำเข้าไฟล์ที่ถูกต้อง";
					alertError(message);
					return false;
				}
}
function view_CV_InputExtra_Rate(event,inputfilename,tablemodal,col) {
		document.getElementById("save_inputExtra_Rate").style.display = "none";
		document.getElementById("download_inputExtra_Rate").style.display = "block";
		openFile3(event,inputfilename,tablemodal,3);
		$('#modal_inputExtra_Rate').modal('show');
}
function modal_inputExtra_Rate_off() {
		$("#input_fileCal_1_CL").val("");
}
function view_CV_SAExtra_Rate_cl(event,inputfilename,tablemodal,col) {
		document.getElementById("save_inputSA_CL_Rate").style.display = "none";
		document.getElementById("download_tb_inputSA_CL_Rate").style.display = "block";
		openFile3(event,inputfilename,tablemodal,3);
		$('#modal_inputSA_CL_Rate').modal('show');
}
function modal_inputSA_CL_Rate_off() {
		$("#input_fileCal_2_CL").val("");
}
	//////////////////////////////END///////////////////////////
	function check_character(ch){
		var len 	= ""
		var	digit	= "";
			if(ch == " "){ 
				len=0;
			}else{
				len = ch.length;
			}
		for(var i=0 ; i<len ; i++)
		{
			digit = ch.charAt(i)
			if( (digit >= "a" && digit <= "z") || (digit >="0" && digit <="9") || (digit >="A" && digit <="Z") || (digit =="_")){
				return true;	
			}else{
				return false;	
			}	
		}	
	}	
	function settextTopics(event,id_fileupload,tablemodal,row,textTop) {
		//เซต text ตารางดูค่า

		$('#'+tablemodal+' tbody').empty();		//remove row
		document.getElementById("tax_save").style.display = "none";
		document.getElementById("tax_download").style.display = "block";
		
		openFile2(event,""+id_fileupload+"",tablemodal,4);
		
		$("#tableseevalue_show").text(textTop); 
		$("#"+"modal_TableTaxReduce").modal("show");
	}
	function settextTopics2(event,id_fileupload,tablemodal,row,textTop) {
		//เซต text ตารางดูค่า
		$('#'+tablemodal+' tbody').empty();		//remove row
		var sl_menu3_insurance_premium_cl = $('#sl_menu3_insurance_premium_cl').val();
		if (sl_menu3_insurance_premium_cl == "0") {
			openFile2(event,""+id_fileupload+"",tablemodal,6);
		}else{
			openFile2(event,""+id_fileupload+"",tablemodal,4);
		}
		document.getElementById("save_PM_Rate").style.display = "none";
		document.getElementById("download_PM_Rate").style.display = "block";
		
		var topics_PM_Rate = $('#topics_PM_Rate_'+row).val();
		$("#tableseevalue_show2_1").text(topics_PM_Rate); 
		$("#textTop1").text(textTop); 
		
		$("#"+"modal_PM_Rate").modal("show");
	}
	function settextTopics2_2(event,id_fileupload,tablemodal,row,textTop) {
		//เซต text ตารางดูค่า
		$('#'+tablemodal+' tbody').empty();		//remove row
		var sl_menu3_insurance_premium_cl = $('#sl_menu3_insurance_premium_cl').val();
		if (sl_menu3_insurance_premium_cl == "0") {
			openFile2(event,""+id_fileupload+"",tablemodal,6);
		}else{
			openFile2(event,""+id_fileupload+"",tablemodal,4);
		}
		document.getElementById("save_PM_Rate2").style.display = "none";
		document.getElementById("download_PM_Rate2").style.display = "block";
		
		var topics_PM_Rate = $('#topics_PM_Rate_'+row).val();
		$("#tableseevalue_show2_2").text(topics_PM_Rate); 
		$("#textTop2").text(textTop); 
		
		$("#"+"modal_PM_Rate2").modal("show");
	}
	function settextTopics3(event,id_fileupload,tablemodal,row,textTop2) {
		//เซต text ตารางดูค่า
		$('#'+tablemodal+' tbody').empty();		//remove row
		openFile2(event,""+id_fileupload+"",tablemodal,5);
		
		document.getElementById("save_Extra_Rate").style.display = "none";
		document.getElementById("download_Extra_Rate").style.display = "block";
		
		var topics_Extra_Rate = $('#topics_Extra_Rate_'+row).val();
		$("#tableseevalue_show3").text(topics_Extra_Rate); 
		$("#textTop3").text(textTop2); 
		
		 $("#"+"modal_Extra_Rate").modal("show");
	}
	var openFile2 = function(event,fileID,tableName,tableCol) {	

	    var input = event.target;
	    var reader = new FileReader();
	    reader.onload = function(){
	      var text = reader.result;	      
	      var textRow = text.split('\n');
	      var textLength = textRow.length - 1;
	      var col1 = "";
    	  var col2 = "";
    	  var col3 = "";
    	  var col4 = "";
    	  var col5 = "";
    	  var col6 = "";
	      for(var i=0; i<textLength; i++ ) {
	    	  var textRow_split = textRow[i].split(',');  	 
	    	  if(tableCol == 4){
	    		  	col1 = textRow[i].substr(0,2);
	    		  	col2 = textRow[i].substr(2,1);
	    		  	col3 = textRow[i].substr(3,2);
	    		  	col4 = textRow[i].substr(5,6);
	    		  tableRow = "<tr>"+
	    		  	"<td class='text-center'>"+col1+"</td>"+
					"<td class='text-center'>"+col2+"</td>"+
					"<td class='text-right'>"+col3+"</td>"+
					"<td class='text-right'>"+col4+"</td>"+
					"</tr>";
	    		  $("#"+tableName+">tbody").append(tableRow);	
	    	  }if(tableCol == 5){
	    		  	col1 = textRow[i].substr(0,3);
	    		  	col2 = textRow[i].substr(3,2);
	    		  	col3 = textRow[i].substr(5,1);
	    		  	col4 = textRow[i].substr(6,2);
	    		  	col5 = textRow[i].substr(8,6);
	    		  	tableRow = "<tr>"+
	    		  	"<td class='text-center'>"+col1+"</td>"+
					"<td class='text-center'>"+col2+"</td>"+
					"<td class='text-right'>"+col3+"</td>"+
					"<td class='text-right'>"+col4+"</td>"+
					"<td class='text-right'>"+col5+"</td>"+
					"</tr>";
					$("#"+tableName+">tbody").append(tableRow);	
	    	  }else if(tableCol == 6){
	    		   	col1 = textRow[i].substr(0,4);
	    		   	col2 = textRow[i].substr(4,1);
	    		   	col3 = textRow[i].substr(5,1);
	    		   	col4 = textRow[i].substr(6,2);
	    		   	col5 = textRow[i].substr(7,1);
	    		   	col6 = textRow[i].substr(8,5);
	    		   	tableRow = "<tr>"+
	    		  	"<td class='text-center'>"+col1+"</td>"+
					"<td class='text-center'>"+col2+"</td>"+
					"<td class='text-right'>"+col3+"</td>"+
					"<td class='text-right'>"+col4+"</td>"+
					"<td class='text-right'>"+col5+"</td>"+
					"<td class='text-right'>"+col6+"</td>"+
					"</tr>";   
	    		  $("#"+tableName+">tbody").append(tableRow);	
	    	  }
	    	
	      }
	      if ( $.fn.dataTable.isDataTable( "#"+tableName ) ) {
	    	  $("#"+tableName).destroy();
	      }
	      $("#"+tableName).DataTable({
		    	"paging": false,
		        "ordering": false,
		        "info": false,
		        "language": {
		    	    "search": "ค้นหา:",
		    	    "zeroRecords": " "	
		    }
		  });
	    };   
	   setTimeout(function(){
	    	reader.readAsText(document.getElementById(fileID).files[0]);    
	    }, 100);
	  }
	////////////////////////////////////3//////////////////////
	var openFile3 = function(event,fileID,tableName,tableCol) {	
	    var input = event.target;
	    var reader = new FileReader();
	    reader.onload = function(){
	      var text = reader.result;	      
	      var textRow = text.split('\n');
	      var textLength = textRow.length - 1;
	      var col1 = "";
    	  var col2 = "";
    	  var col3 = "";
    	  
	      for(var i=0; i<textLength; i++ ) {
	    	  var textRow_split = textRow[i].split(',');  	  
	    	  if(tableCol == 3){
	    		  if (tableName == "tb_inputExtra_Rate_view") {
	    				col1 = textRow[i].substr(0,3);
		    		  	col2 = textRow[i].substr(3,2);
		    		  	col3 = textRow[i].substr(5,2);
		    		  	tableRow = "<tr>"+
		    		  	"<td class='text-center'>"+col1+"</td>"+
						"<td class='text-center'>"+col2+"</td>"+
						"<td class='text-right'>"+col3+"</td>"+
						"</tr>";
	    			  $("#"+tableName+">tbody").append(tableRow);	
	    		  }else if(tableName == "tb_inputSA_CL_Rate") {
	    				col1 = textRow[i].substr(0,2);
		    		  	col2 = textRow[i].substr(2,3);
		    		  	col3 = textRow[i].substr(5,7);
		    		  	tableRow = "<tr>"+
		    		  	"<td class='text-center'>"+col1+"</td>"+
						"<td class='text-center'>"+col2+"</td>"+
						"<td class='text-right'>"+col3+"</td>"+
						"</tr>";
	    			  $("#"+tableName+">tbody").append(tableRow);	
	    		  }
	    	  }
	      }
	      if ( $.fn.dataTable.isDataTable( "#"+tableName ) ) {
	    	  $("#"+tableName).destroy();
	      }
	      $("#"+tableName).DataTable({
		    	"paging": false,
		        "ordering": false,
		        "info": false,
		        "language": {
		    	    "search": "ค้นหา:",
		    	    "zeroRecords": " "	
		    }
		  });
	    };   
	  
	   setTimeout(function(){
		   reader.readAsText(input.files[0]);    
	    }, 100);
	  }
	
/***************บันทึกการคำนวณเบี้ยประกัน KHWAN*********/
function bt_Menu3_Confirm() {
		var error = 0;
		
		/*เบี้ยมาตรฐาน*/
		if($("#ch_standard_premium_cl").prop("checked") == true){
			/*if($("#sl_menu3_insurance_premium_cl option:selected").text() == "None"){
				error++;
			}*/
			
			if($("#sl_menu3_insurance_premium_cl option:selected").text() != "None"){
				$("#tb_PM_Rate1>tbody>tr").each(function(){
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
		
		if($("#ch_importInsurance_cl").prop("checked") == true){
			var discountFrom = $("#discountInsurancePremiumsSta").val();
			var discountTo = $("#discountInsurancePremiumsTo").val();
			if(discountFrom == "" || discountTo == ""  || discountTo == "0.00" || discountTo == "0"){
				error++;
			}
		}
		
		/*เบี้ยเพิ่มพิเศษ*/
		if($("#ch_insurance_premium_Extra_cl").prop("checked") == true){
			if($("#sl_insurance_premium_Extra_cl option:selected").text == "None"){
				error++;
			}
			
			if($("#sl_insurance_premium_Extra_cl option:selected").text != "None"){
				$("#tb_Extra_Rate>tbody>tr").each(function(){
					if($(this).find("td:nth-child(2) input[type='text']").val() == ""){
						error++;
					}
				});
			}
			
			if($("#max_EM_cl").val() != "0.00"){
				if($("#input_fileCal_1_CL").val() == ""){
					error++;
				}
			}
		}
		
		/*ทุนคุ้มครองที่ลดลง*/
		if($("#ch_Reduced_capital_cl").prop("checked") == true){
			if($("#sl_Reduced_capital_Cal2_CL option:selected").text() == "None"){
				error++;
			}
			
			if($("#sl_Reduced_capital_Cal2_CL option:selected").text() != "None"){
				if($("#input_fileCal_2_CL").val() == ""){
					error++;
				}
			}
		}
		
		
		if(error > 0){
			message = "กรุณาระบุข้อมูลให้ครบถ้วน";
			Statuesave = "N";
			nameTab 	= "menu_CL_3";
			alertError(message);
		}else{
			dataSave_cal_premium();
			
			Statuesave = "Y";
			nameTab 	= "menu_CL_3";
			var message = "บันทึกข้อมูลเรียบร้อย";
			alertSuccess(message);
		}
		
	}
	
	///Menu การใช้สิทธิ์ตามกรมธรรม์ //
	function bt_Menu2_Confirm_cl() {
		var ch_expropriate = document.getElementById("ch_expropriate_insurance");
		//if (ch_expropriate.checked == true ) {
			dataSave_privilege_insurance();
			
			Statuesave = "Y";
			nameTab 	= "menu_CL_2";
			var message = "บันทึกข้อมูลเรียบร้อย";
			alertSuccess(message);
		/*}else {
			Statuesave = "N";
			message = "กรุณานำเข้าไฟล์ที่ถูกต้อง";
			alertError(message);
		}*/
		
	/*****/	
	}
	
	
/************KHWAN**************/		
$(document).ready( function() {
	/*$('#thai_Name_cl').keyup(function() {
	   var $th = $(this);
	   $th.val( $th.val().replace(/[^a-zA-Z0-9ก-๙\s\-\(\)]/g, "" ));
 
	});	
	
	$('#eng_Name_cl').keyup(function() {
		   var $th = $(this);
		   $th.val( $th.val().replace(/[^a-zA-Z0-9\s\-]/g, "" ));
	 
	});	*/
	
	$("#risk_CL *").prop("disabled", "disabled").off('click');
	$("#norisk_CL *").prop("disabled", "disabled").off('click');
	$("#RPU_CL *").attr("disabled", "disabled").off('click');
	$("#tbl_PolicyFile_CL *").attr("disabled", "disabled").off('click');
	
	//$("#tbl_PolicyFile_CL,#tbl_PolicyFileWord_CL").DataTable({"ordering": false,"paging": false,"bInfo" : false, scrollY: '312px',scrollCollapse: true, "autoWidth": false, "oLanguage": {"sSearch": "ค้นหา: "}});	
	$("#tbl_HistoryPolicy_CL").DataTable({"ordering": false,"paging": false,"bInfo" : false, "searching" :false, scrollY: '185px',scrollCollapse: true, "autoWidth": false, "oLanguage": {"sSearch": "ค้นหา: "}});
	$(".datatbl_Historypolicy_CL .dataTables_scrollHeadInner").css({"width":"100%"});
	$(".datatbl_Historypolicy_CL .table").css({"width":"100%"});
	
	$(".datatbl_PolicyFile_CL .dataTables_scrollHeadInner,.datatbl_PolicyFileWord_CL .dataTables_scrollHeadInner").css({"width":"100%"});
	$(".datatbl_PolicyFile_CL .table, .datatbl_PolicyFileWord_CL .table").css({"width":"100%"});
	
	/*ตารางมูลค่ากรมธรรม์*/	
	$('#dbBox1_CL').prop('disabled', true);
	$('#spanBox1_CL').attr("disabled", true);
	
	$('#dbBox2_CL').prop('disabled', true);
	$('#spanBox2_CL').attr("disabled", true);

	$("#select_file_3_CL").change(function(){
		$("#validate_input3_CL").css("display", "none");	
	});
	$("#select_file_4_CL").change(function(){
		$("#validate_input4_CL").css("display", "none");
	});
	$("#select_file_5_CL").change(function(){
		$("#validate_input5_CL").css("display", "none");	
	});
	$("#select_file_6_CL").change(function(){
		$("#validate_input6_CL").css("display", "none");
	});

});
	
	function numberKey(value){
		var val = $(value).val();
		if (!val || (parseInt(val) >= 1))
		      ;
		else{ $(value).val($(value).data("old")); }

		if (val > 999 ) {$(value).val(999);}
		
	}
	
	function validate_range_fromTo(id,val){
		if(val > 0){
			if(val < 0 || val > 999){
				$("#"+id).addClass("errorClass");
				$("#"+id).val(1);
			}else{
				$("#"+id).removeClass("errorClass");
			}
		}
	}
	
	function validate_range_tbdie(id,val){
		
		var size_tb = $("#tbody_dieL_CL tbody>tr:not(:hidden)").length;
		$("#"+id).removeClass("errorClass");
		
		if(size_tb > 1){
			for(var i=0 ; i<size_tb ; i++){
				var data = $("#tbody_dieL_CL tbody>tr").eq(i).find('td:nth-child(2) input[type="number"]').val();
				var chk_id = $("#tbody_dieL_CL tbody>tr").eq(i).find('td:nth-child(2) input[type="number"]').attr('id');
				
				if(chk_id !== id ){
					if(data == val){
						$("#"+id).addClass("errorClass");
						$("#"+id).val("");
					}
				}
			}
		}
		
		/*$("#tbody_dieL_CL tbody>tr").each(function(){
			var data = $(this).find('td:nth-child(2) input[type="number"]').val();
			alert(data +"and"+val)
			if(data == val){
				alert("YES")
				$(this).find('td:nth-child(2) input[type="number"]').addClass("errorClass");
				$(this).find('td:nth-child(2) input[type="number"]').val("");
			}else{
				alert("NO")
				$(this).find('td:nth-child(2) input[type="number"]').removeClass("errorClass");
			}
			
		})*/
	}
	/*ตารางมูลค่ากรมธรรม์*/
	function settingPolicyValue(){		
		$("#baseplanCode_CL").val($("#pass_Insurance_coverage_cl").val());
		$("#surrender_CL").val($("#ch_expropriate_insurance:checked").val());
		var surrender_CL = $("#surrender_CL").val();
		if(surrender_CL == "TRUE"){
			$("#risk_CL *").prop("disabled", false);
		}else{
			$("#risk_CL *").prop("disabled", true);
			$("#norisk_CL *").prop("disabled", true);
		}
		
		if($("#dbBox1_CL option:selected").text() != "None"){
			$("#validate_dd_file1").css("display", "none");
		}else{
			$("#validate_dd_file1").css("display", "inline-block");
		}
		
		$("#cv1_CL").prop("disabled", true);
		
		if($("#dbBox2_CL option:selected").text() != "None"){
			$("#validate_dd_file2").css("display", "none");
		}else{
			$("#validate_dd_file2").css("display", "inline-block");
		}
		
		
		if($("#dbBox2_CL option:selected").text() == "None"){
			selectType_CL("",2);		
		}
		if($("#input_file_2_CL").val() != ""){
			$("#cv2_CL").prop("disabled", false);
		}				
	}
	
function selectType_CL(type,box){
		var typeDigit = type.substr(0,4);
		
		if(type == ""){
			input_html = "<input type='text' class='form-control' id='input_file_"+box+"_CL'"+
			 " readonly> <label class='input-group-btn'>"+
			 " <span disabled id='spanBox"+box+"_CL' class='btn btn-primary'>เลือกไฟล์<input id='select_file_"+box+"_CL' type='file' accept='text/plain' style='display: none;'"+
			 "onchange=\"selectFile_CL("+box+",'"+type+"');"+"\" disabled>"+
			 " </span></label>";
		}else{
			input_html = "<input type='text' class='form-control' id='input_file_"+box+"_CL'"+
			 " placeholder='"+type+".txt' readonly> <label class='input-group-btn'>"+
			 " <span disabled id='spanBox"+box+"_CL' class='btn btn-primary'><font id='validate_input"+box+"_CL'"+
			 " style='color: red;'>*</font>เลือกไฟล์<input id='select_file_"+box+"_CL' type='file' accept='text/plain' style='display: none;'"+
			 "onchange=\"selectFile_CL("+box+",'"+type+"');"+"\" disabled>"+
			 " </span></label>";
		}
		
		$("#div_file"+box+"_CL").html(input_html);
}
				
$("#dbBox2_CL").change(function() {		   		
		var dbBox2_CL = $("#dbBox2_CL").val();
		var dbBox2_CL_text = $("#dbBox2_CL option:selected").text();
		var select_file_2_CL = $("#select_file_2_CL").val();
		var select_hidden_value_old2 = "";
		var select_hidden_value_new2 = "";		
		
			tbl_name = "tbl_NotStandardRisk_CL";
			tblAuto_name = "tbl_NotStandardRiskAuto_CL";
			modal_name = "cvNotStandardRiskAuto_CL";		
		
		if(select_file_2_CL != ""){
			message = "เคยนำเข้าไฟล์ CV ไว้แล้ว ต้องการเปลี่ยนตารางมูลค่ากรมธรรม์ ใช่หรือไม่";
			alertValuePage_Warning3(message);
			
			$("#btn_value_warning_submit3").click(function(){
				$("#"+tblAuto_name+" tbody").empty();
				$("#"+tbl_name+" tbody").empty();
				
				if(dbBox2_CL == ""){
					$('#spanBox2_CL').attr("disabled", true);
					$('#cv2_CL').prop('disabled', true);
					$('#select_file_2_CL').prop('disabled', true);
					$("#validate_dd_file2").css("display", "inline-block");
					$("#dbBox2_CL").val("");
					$("#select_file_2_CL").val("");
					$("#input_file_2_CL").attr("placeholder","");
					$("#input_file_2_CL").val("")
					$("#validate_input2_CL").css("display","none");
					$("#select_hidden_value_old2").val(dbBox1_CL);
					$("#select_hidden_value_new2").val(dbBox1_CL);
				}else{
					$("#select_hidden_value_new2").val(dbBox2_CL)
					if($("#select_hidden_value_old2").val() != $("#select_hidden_value_new2").val()){						
						selectTypeCode_CL(dbBox2_CL,2);						
						$("#dbBox2_CL").val($("#select_hidden_value_new2").val());				
						
					}	
				}										
				
		     });
		     
		     $("#btn_value_warning_cancel3").click(function(){
		    	 if(dbBox1_CL == ""){
		    		 $("#dbBox2_CL").val($("#select_hidden_value_new2").val());
		    	 }else{
		    		 $("#dbBox2_CL").val($("#select_hidden_value_old2").val());
		    		 $('#spanBox2_CL').attr("disabled", false);
					 $('#cv2_CL').prop('disabled', false);
					 $('#select_file_2_CL').prop('disabled', false);
					 $("#validate_dd_file2").css("display", "none");
		    	 }		    	
				 $("#modal_value_warning").modal('hide');
		     })
		    
		}else{
			if(dbBox2_CL_text != "None"){
				selectTypeCode_CL(dbBox2_CL,2);
				$("#select_hidden_value_old2").val(dbBox2_CL);
				$('#spanBox2_CL').attr("disabled", false);
				//$('#cv2_CL').prop('disabled', false);
				$('#select_file_2_CL').prop('disabled', false);
				$("#validate_dd_file2").css("display", "none");
			}else{
				selectTypeCode_CL("",2);
				$("#validate_dd_file2").css("display", "inline-block");
			}			
			
		}		 
	});
		
	function alertValuePage_Warning(message)
	{
	    $('#txt_value_alert_error').text(message);
	    $('#modal_value_warning').modal();
	}
	
	function alertValuePage_Warning2(message)
	{
	    $('#txt_value_alert_error2').text(message);
	    $('#modal_value_warning2').modal();
	}
	
	function alertValuePage_Warning3(message)
	{
	    $('#txt_value_alert_error3').text(message);
	    $('#modal_value_warning3').modal('show');
	}
	
	function alertValuePage_Warning4(message)
	{
	    $('#txt_value_alert_error4').text(message);
	    $('#modal_value_warning4').modal();
	}
	
	function selectTypeCode_CL(type,box){
		var CovCodeSelect_CL = $("#pass_Insurance_coverage_cl").val();
		
		var typeFormat = type.split(",");		
		var typeLength = typeFormat.length;
		var typeDigit = type.substr(0,4);
		var input_html = "";
	
		
		if(type == ""){
			input_html = "<input type='text' class='form-control' id='input_file_"+box+"_CL'"+
			 " readonly disabled> <label class='input-group-btn'>"+
			 " <span id='spanBox"+box+"_CL' class='btn btn-primary' disabled>เลือกไฟล์<input id='select_file_"+box+"_CL' type='file' accept='text/plain' style='display: none;' disabled>"+
			 //"onchange=\"selectFile_CL("+box+",'"+typeFormat[0]+baseplanCodeSelect_CL+"','"+typeFormat[1]+baseplanCodeSelect_CL+"');"+"\">"+
			 " </span></label>";
		}else{
			if(typeLength > 1){
				input_html = "<input type='text' class='form-control' id='input_file_"+box+"_CL'"+
				 " placeholder='"+typeFormat[0]+CovCodeSelect_CL+".txt หรือ "+typeFormat[1]+CovCodeSelect_CL+".txt' readonly> <label class='input-group-btn'>"+
				 " <span id='spanBox"+box+"_CL' class='btn btn-primary'><font id='validate_input"+box+"_CL'"+
				 " style='color: red;'>*</font>เลือกไฟล์<input id='select_file_"+box+"_CL' type='file' accept='text/plain' style='display: none;'"+
				 "onchange=\"selectFile_CL("+box+",'"+typeFormat[0]+CovCodeSelect_CL+"','"+typeFormat[1]+CovCodeSelect_CL+"');"+"\">"+
				 " </span></label>";
			}else{
				input_html = "<input type='text' class='form-control' id='input_file_"+box+"_CL'"+
				 " placeholder='"+typeFormat[0]+CovCodeSelect_CL+".txt' readonly> <label class='input-group-btn'>"+
				 " <span id='spanBox"+box+"_CL' class='btn btn-primary'><font id='validate_input"+box+"_CL'"+
				 " style='color: red;'>*</font>เลือกไฟล์<input id='select_file_"+box+"_CL' type='file' accept='text/plain' style='display: none;'"+
				 "onchange=\"selectFile_CL("+box+",'"+typeFormat[0]+CovCodeSelect_CL+"','');"+"\">"+
				 " </span></label>";
			}
			
		}		
		//alert(input_html);
		$("#div_file"+box+"_CL").html(input_html);		
	}
		
function selectFile_CL(select_file,file_format,file_format2){
	var tbl_name = "";
	var tbl_col = "";
	var dd_opt = "";
	
	var cov_code = $("#pass_Insurance_coverage_cl").val();
	var tr_tbl = "";
	var data_level = "";
	var data_group = "";
	var rate_type = "";
	var rate_band_type = "";
	
	/*file*/
	var file_id = 0;
	var file_type_id = 3;
	var file_path = "";
	var file_pattern = "";
	var user_code = "0000000";	
	
	if(select_file == 1){
		tbl_name = "tbl_StandardRisk_CL";
		tblAuto_name = "tbl_StandardRiskAuto_CL";
		modal_name = "cvStandardRiskAuto_CL";
		modal_cv = "cvStandardRisk_CL";
		tbl_col = 5;
		dd_opt = "dbBox1_CL";
		cv_button = "cv1_CL";
		file_button1 = "btn_submit_StandardRiskAuto";
		file_button2 = "btn_cancel_StandardRiskAuto";
	}else if(select_file == 2){
		tbl_name = "tbl_NotStandardRisk_CL";
		tblAuto_name = "tbl_NotStandardRiskAuto_CL";
		modal_name = "cvNotStandardRiskAuto_CL";
		modal_cv = "cvNotStandardRisk_CL";
		tbl_col = 6;
		dd_opt = "dbBox2_CL";
		cv_button = "cv2_CL";
		file_button1 = "btn_submit_NotStandardRiskAuto";
		file_button2 = "btn_cancel_NotStandardRiskAuto";
		
		type = 32;
		downloadFile = "cv2_CL";
		fileID = "cvLow_fileID2";
		
		rate_cat_id = $("#cvLow_rateCat2").val();
		sub_cat_id = $("#dbBox2_CL option:selected").attr("data-subcat");
	}
	
	var dd_text = $("#"+dd_opt+" option:selected").text();
		dd_text = dd_text.replace("ข้อมูลกรมธรรม์","");
			
	$("#select_file_"+select_file+"_CL").click(function () {
	    this.value = null;
	});
	
	$("#"+tblAuto_name+" tbody").empty();
	$("#"+tbl_name+" tbody").empty();
	var file_name = $("#select_file_"+select_file+"_CL").val().replace(/\\/g, '/').replace(/.*\//, '');	
		file_path = $("#select_file_"+select_file+"_CL").val();
	
	if($("#input_file_"+select_file+"_CL").val() == ""){
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
		if(check_filename("select_file_"+select_file+"_CL", file_format, file_format2) == false){
			$("#validate_input"+select_file+"_CL").css("display", "inline-block");
			$("#input_file_"+select_file+"_CL").val("");	
			$('#'+cv_button).prop('disabled', true);
		}else{			
			openFile(event,"select_file_"+select_file+"_CL",tbl_name,tbl_col);
			openFile(event,"select_file_"+select_file+"_CL",tblAuto_name,tbl_col);
			
			$("#base64_fileTXT_CL").val("");
			
			$("#"+modal_name).modal("show");
			
			//Added
			convertToBase64("select_file_2_CL",file_type_id);
			 /*if(checkfile_policyDupicate(file_name,"txt") == false){			  
				 message = "ไม่สามารถอัพโหลดได้ เนื่องจากมีชื่อไฟล์นี้อยู่แล้ว";
				 alertError(message);					    
				 $("#input_file_2_CL").val("");
			 }*/
			
			$("#"+file_button1).unbind();
			$("#"+file_button1).click(function() {
				
				/*save file*/				
				//set_Filevalue(type,select_file,file_id,file_type_id,file_name,file_path,file_pattern,rate_cat_id,sub_cat_id,user_code);		
				/*end save file*/
				 $("#modal_waiting").modal('show');
				 var base64 = $("#base64_fileTXT_CL").val();
				 if(base64 != ""){
					 var dateTime = getCurrentDate();
		    		   var file_name_update = "3_"+dateTime+".txt"
			    	   datajson = {				        	
					    		"method" : "uploadFile_txt",
					    		"passInsurance" : $("#pass_Insurance_coverage_cl").val(),
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
							    		$("#cvLow_rateLayout"+select_file).val(response.rate_layout_id);
							    		$("#cvLow_fileID"+select_file).val(response.file_id);
							    	}	
							    	
							    	$("#input_file_"+select_file+"_CL").val(file_name);
									$("#validate_input"+select_file+"_CL").css("display", "none");
									$('#'+cv_button).prop('disabled', false); 
									$("#modal_waiting").modal('hide');
									$("body").addClass("body_nopadding");
									$('#'+cv_button).attr("onclick","openFileTextBasePlan_CL('"+file_name+"','"+obj_ref+"', "+tbl_col+", '"+tbl_name+"', '"+modal_cv+"')");
									   
							    },
							    error : function(response) {	
							    	//console.log("save file error");
								message = "ไม่สามารถบันทึกไฟล์ได้";
								alertError(message);
								
								$("#input_file_"+select_file+"_CL").val("");
							    }
							});	
					 	    	
					 	    }
					    })
		    		 
				 }
				 
				

			});
			
			$("#"+file_button2).click(function() {
				$("#input_file_"+select_file+"_CL").val("");
				$("#validate_input"+select_file+"_CL").css("display", "inline-block");
				$('#'+cv_button).prop('disabled', true);
			});
			
		}												
		
	}else{
		if(check_filename("select_file_"+select_file+"_CL", file_format, "") == false){
			$("#validate_input"+select_file+"_CL").css("display", "inline-block");
			$("#input_file_"+select_file+"_CL").val("");
			$('#'+cv_button).prop('disabled', true);
		}else{
			openFile(event,"select_file_"+select_file+"_CL",tbl_name,tbl_col);
			openFile(event,"select_file_"+select_file+"_CL",tblAuto_name,tbl_col);
			
			$("#base64_fileTXT_CL").val("");
			
			$("#"+modal_name).modal("show");	
			
			//Added
			convertToBase64("select_file_"+select_file+"_CL",file_type_id);
			 /*if(checkfile_policyDupicate(file_name,"txt") == false){			  
				 message = "ไม่สามารถอัพโหลดได้ เนื่องจากมีชื่อไฟล์นี้อยู่แล้ว";
				 alertError(message);					    
				 $("#input_file_"+select_file+"_CL").val("");
			 }*/
			
			 
			$("#"+file_button1).click(function() {
				
				/*save file*/				
				//set_Filevalue(type,select_file,file_id,file_type_id,file_name,file_path,file_pattern,rate_cat_id,sub_cat_id,user_code);		
				/*end save file*/
				 $("#modal_waiting").modal('show');
				 var base64 = $("#base64_fileTXT_CL").val();
				 if(base64 != ""){
					 var dateTime = getCurrentDate();
		    		   var file_name_update = "3_"+dateTime+".txt"
			    	   datajson = {				        	
					    		"method" : "uploadFile_txt",
					    		"passInsurance" : $("#pass_Insurance_coverage_cl").val(),
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
							    		$("#cvLow_rateLayout"+select_file).val(response.rate_layout_id);
							    		$("#cvLow_fileID"+select_file).val(response.file_id);
							    	}	
							    	
							    	$("#input_file_"+select_file+"_CL").val(file_name);
									$("#validate_input"+select_file+"_CL").css("display", "none");
									$('#'+cv_button).prop('disabled', false);
									 $("#modal_waiting").modal('hide');
									 $("body").addClass("body_nopadding");
									 $('#'+cv_button).attr("onclick","openFileTextBasePlan_CL('"+file_name+"','"+obj_ref+"', "+tbl_col+", '"+tbl_name+"', '"+modal_cv+"')");
										
							    },
							    error : function(response) {	
							    	//console.log("save file error");
								message = "ไม่สามารถบันทึกไฟล์ได้";
								alertError(message);
								
								$("#input_file_"+select_file+"_CL").val("");
							    }
							});	
					 	    }
					    })
		    		 
				 }
				 
				

			});
			
			$("#"+file_button2).click(function() {
				$("#input_file_"+select_file+"_CL").val("");
				$("#validate_input"+select_file+"_CL").css("display", "inline-block");
				$('#'+cv_button).prop('disabled', true);
			});
		}	
	}
			
}
	
function displayPolicyValueCL(type){
	if(type == 1)
		{
			var cbBox1_CL = $('#cbBox1_CL').prop('checked');

				if(cbBox1_CL)
				{						
					$('#dbBox1_CL').prop('disabled', false);
					$('#norisk_CL *').prop('disabled', false);
				}else
					{
					var count_file = 0;
					var count_file2 = 0;
					var dd_dbBox1_CL = $("#dbBox1_CL option:selected").text();
					$("#tb_RateValue1>tbody>tr").each(function(){
						var file_value = $(this).find("td:nth-child(2) input:text").val();
						if(file_value != ""){
							count_file++;
						}
					});
					
					if($("#input_file_2_CL").val() != ""){
						count_file2++;
					}
					
					if(count_file > 0 || count_file2 > 0){
						message = "เคยนำเข้าไฟล์ CV ไว้แล้ว ต้องการยกเลิกใช่หรือไม่";
						alertValuePage_Warning4(message);
						
						$("#btn_value_warning_submit4").click(function(){
							$('#dbBox1_CL').prop('disabled', true);
							$("#dbBox1_CL option:contains('None')").attr('selected', 'selected');
							$('#spanBox1_CL').attr("disabled", true);
							$('#cv1_CL').prop('disabled', true);
							$('#select_file_1_CL').prop('disabled', true);
							$("#validate_dd_file1").css("display","inline-block");
													
							$('#norisk_CL *').prop('disabled', true);
							$('#cbBox2_CL').prop('checked', false);
							$('#dbBox2_CL').prop('disabled', true);
							$("#dbBox2_CL option:contains('None')").attr('selected', 'selected');
							$('#cv2_CL').prop('disabled', true);
							$("#validate_dd_file2").css("display","inline-block");						
							
							$("#tb_RateValue1>tbody>tr input:text").val("");
							$("#tb_RateValue1>tbody>tr").find("td:nth-child(2) span").attr("disabled", true);
							$("#tb_RateValue1>tbody>tr").find("td:nth-child(2) input:hidden").val("");
							$("#tb_RateValue1>tbody>tr").find("td:nth-child(2) input:text").attr("placeholder","");
							$("#tb_RateValue1>tbody>tr").find("td:nth-child(2) input:file").removeAttr("onchange");
							$("#tb_RateValue1>tbody>tr").find("td:nth-child(2) input:file").prop("disabled", true);
							$("#tb_RateValue1>tbody>tr").find("td:nth-child(2) font").css("display", "none");
							$("#tb_RateValue1>tbody>tr").find("td:nth-child(3) span").removeClass("activecolorblue").addClass("activecolorgray");
							$("#tb_RateValue1>tbody>tr").find("td:nth-child(4) span").removeClass("activecolorblue").addClass("activecolorgray");
						
							
							selectTypeCode_CL("",1);
							selectTypeCode_CL("",2);
						});
						
						$("#modal_value_warning4 .modal-header button.close").click(function(){
							$("#cbBox1_CL").prop("checked", true);
						});
						
						$("#btn_value_warning_cancel4").click(function(){
							$("#cbBox1_CL").prop("checked", true);
							$("#modal_value_warning4").modal("hide");
						});	
					}else{
						$('#dbBox1_CL').prop('disabled', true);
						$("#dbBox1_CL option:contains('None')").attr('selected', 'selected');
						$('#spanBox1_CL').attr("disabled", true);
						$('#cv1_CL').prop('disabled', true);
						$('#select_file_1_CL').prop('disabled', true);
						$("#validate_dd_file1").css("display","inline-block");
												
						$('#norisk_CL *').prop('disabled', true);
						$('#cbBox2_CL').prop('checked', false);
						$('#dbBox2_CL').prop('disabled', true);
						$("#dbBox2_CL option:contains('None')").attr('selected', 'selected');
						$('#cv2_CL').prop('disabled', true);
						$("#validate_dd_file2").css("display","inline-block");
						
						$("#tb_RateValue1>tbody>tr input:text").val("");
						$("#tb_RateValue1>tbody>tr").find("td:nth-child(2) span").attr("disabled", true);
						$("#tb_RateValue1>tbody>tr").find("td:nth-child(2) input:hidden").val("");
						$("#tb_RateValue1>tbody>tr").find("td:nth-child(2) input:text").attr("placeholder","");
						$("#tb_RateValue1>tbody>tr").find("td:nth-child(2) input:file").removeAttr("onchange");
						$("#tb_RateValue1>tbody>tr").find("td:nth-child(2) input:file").prop("disabled", true);
						$("#tb_RateValue1>tbody>tr").find("td:nth-child(2) font").css("display", "none");
						$("#tb_RateValue1>tbody>tr").find("td:nth-child(3) span").removeClass("activecolorblue").addClass("activecolorgray");
						$("#tb_RateValue1>tbody>tr").find("td:nth-child(4) span").removeClass("activecolorblue").addClass("activecolorgray");
						
						selectTypeCode_CL("",1);
						selectTypeCode_CL("",2);
					}
						
				}
	}
	
	if(type == 2)
	{
		var cbBox2_CL = $('#cbBox2_CL').prop('checked');
			if(cbBox2_CL)
			{
				$('#dbBox2_CL').prop('disabled', false);
			}else{
				if($("#input_file_2_CL").val() != ""){
					message = "เคยนำเข้าไฟล์ CV ไว้แล้ว ต้องการยกเลิกใช่หรือไม่";
					alertValuePage_Warning4(message);
					
					$("#btn_value_warning_submit4").click(function(){
						$("#cbBox2_CL").prop("disabled", false);
						$('#dbBox2_CL').prop('disabled', true);
						$("#dbBox2_CL option:contains('None')").attr('selected', 'selected');			
						$('#spanBox2_CL').attr("disabled", true);
						$('#cv2_CL').prop('disabled', true);
						$('#select_file_2_CL').prop('disabled', true);
						$("#validate_dd_file2").css("display","inline-block");
						
						selectTypeCode_CL("",2);
					});
					
					$("#modal_value_warning4 .modal-header button.close").click(function(){
						$("#cbBox2_CL").prop("checked", true);
					});
					
					$("#btn_value_warning_cancel4").click(function(){
						$("#cbBox2_CL").prop("checked", true);
						$("#modal_value_warning4").modal("hide");
					});	
					
				  }else{
					  	$('#dbBox2_CL').prop('disabled', true);
						$("#dbBox2_CL option:contains('None')").attr('selected', 'selected');			
						$('#spanBox2_CL').attr("disabled", true);
						$('#cv2_CL').prop('disabled', true);
						$('#select_file_2_CL').prop('disabled', true);
						$("#validate_dd_file2").css("display","inline-block");
						
						selectTypeCode_CL("",2);
				  }
					
				}
	}
	
	if(type == 3)
	{
		var cbBox3_CL = $('#cbBox3_CL').prop('checked');
		if(cbBox3_CL)
			{
				$("input[name=tablePolicyCL]").prop('disabled', false);
				$('#dbBox3_1_CL').prop('disabled', false);
				$('#dbBox3_2_CL').prop('disabled', false);
				$('#dbBox3_3_CL').prop('disabled', false);
				$('#dbBox3_4_CL').prop('disabled', false);
				$('#dbBox3_5_CL').prop('disabled', false);
				$('#dbBox3_6_CL').prop('disabled', false);
				
				$('#tmo1_CL').prop("disabled", false);
				$('#tmo2_CL').prop('disabled', false);
				$('#tmo3_CL').prop("disabled", false);
				$('#tmo4_CL').prop('disabled', false);
				
				$('#spanBox3_CL').attr("disabled", false);	
				$('#spanBox4_CL').attr("disabled", false);
				$('#spanBox5_CL').attr("disabled", false);
				$('#spanBox6_CL').attr("disabled", false);
				
				$('#select_file_3_CL').attr("disabled", false);	
				$('#select_file_4_CL').attr("disabled", false);
				$('#select_file_5_CL').attr("disabled", false);
				$('#select_file_6_CL').attr("disabled", false);
								
				$('#tmo5_CL').prop('disabled', false);
				$('#tmo6_CL').prop('disabled', false);
				$('#tmo7_CL').prop('disabled', false);
				$('#tmo8_CL').prop('disabled', false);
			}else
				{
					$("input[name=tablePolicyCL]").prop('disabled', true);
					$('#dbBox3_1_CL').prop('disabled', true);
					$('#dbBox3_2_CL').prop('disabled', true);
					$('#dbBox3_3_CL').prop('disabled', true);
					$('#dbBox3_4_CL').prop('disabled', true);
					$('#dbBox3_5_CL').prop('disabled', true);
					$('#dbBox3_6_CL').prop('disabled', true);
					
					$('#tmo1_CL').prop("disabled", true);
					$('#tmo2_CL').prop('disabled', true);
					$('#tmo3_CL').prop("disabled", false);
					$('#tmo4_CL').prop('disabled', false);
					
					$('#spanBox3_CL').attr("disabled", true);
					$('#spanBox4_CL').attr("disabled", true);
					$('#spanBox5_CL').attr("disabled", true);
					$('#spanBox6_CL').attr("disabled", true);
					
					$('#select_file_3_CL').attr("disabled", true);	
					$('#select_file_4_CL').attr("disabled", true);
					$('#select_file_5_CL').attr("disabled", true);
					$('#select_file_6_CL').attr("disabled", true);
									
					$('#tmo5_CL').prop('disabled', true);
					$('#tmo6_CL').prop('disabled', true);
					$('#tmo7_CL').prop('disabled', true);
					$('#tmo8_CL').prop('disabled', true);
				}
	}
}

function changeDisplayBenefit005_CL(type)
{
	if(type == 0)
		{
			$('#aDie_CL').css("display", "none");
			$('#aDisabled_CL').css("display", "none");
			$('#aContract_CL').css("display", "none");
			$('#aRefund_CL').css("display", "none");
			$('#aPension_CL').css("display", "none");
			$('#aMedical_CL').css("display", "none");
			$('#aDividend_CL').css("display", "none");
			
			$("#mainBenefit_CL").css("display", "block");
			$("#benefitDetail_CL").css("display", "none");
		
		}
	if(type == 1)
		{
			controlTabBenefit_CL();
			save_tab_coverageBenefits();
			
		}
	if(type == 2)
		{
			$("#oldTable_CL").css("display", "none");
			$("#newTable_CL").css("display", "block");
		}
	if(type == 3)
		{
			$("#oldTable_CL").css("display", "block");
			$("#newTable_CL").css("display", "none");
		}
}
/***************บันทึก****************/
function bt_Menu4_CL_Confirm() {
	var message = "";
	var error = 0;
	var numfile = 0;
	var chk_box1 = $("#cbBox1_CL").prop("checked");
	
	if($("#cbBox1_CL").prop("checked") == true){
		if($("#dbBox1_CL option:selected").text() == "None"){
			error++;
		}
		
		if($("#dbBox1_CL option:selected").text() != "None"){
			$("#tb_RateValue1>tbody>tr").each(function(){
				if($(this).find("td:nth-child(2) input[type='text']").val() != ""){
					numfile++;
				}
			});			
			console.log(numfile);
		}
	}
	
	if($("#cbBox2_CL").prop("checked") == true){
		if($("#dbBox2_CL option:selected").text() == "None"){
			error++;
		}
		
		if($("#dbBox2_CL option:selected").text() != "None"){
			if($("#input_file_2_CL").val() == ""){
				error++;
			}
		}
	}
	
	if(error > 0 && numfile >= 1 && chk_box1 == true){
		message = "กรุณาระบุข้อมูลให้ครบ";
		alertError(message);
		nameTab 	= "menu_CL_4";
		Statuesave = "N";
	}else if(error > 0 && numfile < 1 && chk_box1 == true){
		message = "กรุณาระบุข้อมูลให้ครบ";
		alertError(message);
		nameTab 	= "menu_CL_4";
		Statuesave = "N";
	}else if(error == 0 && numfile < 1 && chk_box1 == true){
		message = "กรุณานำเข้า CV อย่างน้อย 1 ไฟล์";
		nameTab 	= "menu_CL_4";
		Statuesave = "N";
		alertError(message);
	}else{		
		nameTab 	= "menu_CL_4";
		Statuesave = "Y";
		save_tab_tableValueInsurance();
		var message = "บันทึกข้อมูลเรียบร้อย";
		alertSuccess(message);
	}
	
}


/*ผลประโยชน์/ความคุ้มครอง*/
function controlTabBenefit_CL()
{
	var cbDie_CL = $('#cbDie_CL').prop('checked');
	var cbDisabled_CL = $('#cbDisabled_CL').prop('checked');
	
	if(cbDie_CL == true)
	{
		$('#tabDie_CL').attr("class","active");
		$('#tabDisabled_CL').attr("class","");
		$("#die_CL").addClass("active in");
		$("#disabled_CL").removeClass("active in");
		
	}else if(cbDisabled_CL == true)
	{
		$('#tabDisabled_CL').attr("class","active");
		$("#die_CL").removeClass("active in");
		$("#disabled_CL").addClass("active in");
	}
	
	if(cbDie_CL == true){
		$('#aDie_CL').css("display", "block");
	}else{
		$('#aDie_CL').css("display", "none");
	}
	if(cbDisabled_CL == true){
		$('#aDisabled_CL').css("display", "block");
	}else{
		$('#aDisabled_CL').css("display", "none");
	}
	
	setTimeout(() => {
		$("#mainBenefit_CL").css("display", "none");
		$("#benefitDetail_CL").css("display", "block");
	}, 30);
}

function controlSubmitBenefit_CL()
{
	var error = 0;
	var cbDie_CL = $('#cbDie_CL').prop('checked');
	var cbDisabled_CL = $('#cbDisabled_CL').prop('checked');
	
	if(cbDie_CL == true)
	{		
		error++;
		$('#cbDie_CL_person').prop("checked", true)
	}else{
		$('#cbDie_CL_person').prop("checked", false)
	}
	if(cbDisabled_CL == true)
	{
		error++;
		$('#cbDisabled_CL_person').prop("checked", true)
	}else{
		$('#cbDisabled_CL_person').prop("checked", false)
	}
	
	if(error > 0){
		$('#benefitSubmit_CL').prop("disabled",false);
	}else{
		$('#benefitSubmit_CL').prop("disabled",true);
	}
}

	/*ผลประโยชน์/ความคุ้มครอง (เสียชีวิต)*/
	
	/*เพิ่มเสียชีวิต*/
	var dropdownFromTo_DL = 
	//"<select class='form-control width-initial' style='margin: 0;width: 100%;'>"+
	"<option selected>None</option>"+
	"<option>วัน</option>"+
	"<option>สัปดาห์</option>"+
	"<option>เดือน</option>"+
	"<option>ปี</option>"+
	"<option>อายุ</option>";
	//"</select>";
	
	var dropdownSa_CL = 
	//"<select class='form-control width-initial'>"+
	"<option selected>None</option>"+
	"<option >SA</option>"+
	/*"<option>ทุน * SA</option>"+*/
	"<option >SA_Dec</option>";
	//"</select>";
	
	var dropdownPremium_CL = "<select class='form-control width-initial' disabled>"+
	"<option selected>None</option>"+
	"<option>Accu</option>"+
	"<option>YRT</option>"+	
	"</select>";
	
	var dropdownCvPv_CL = "<select class='form-control width-initial' disabled>"+
	"<option selected>None</option>"+
	"<option>CV</option>"+
	"<option>PV บำนาญ</option>"+	
	"</select>";
	
	var dropdownOther_CL = "<select class='form-control width-initial' disabled>"+
	"<option selected>None</option>"+
	"<option>เงินปันผลสะสม</option>"+
	"<option>กองทุนรักษาพยาบาล</option>"+
	/*"<option>ทุนลดตามตาราง</option>"+*/	
	"</select>";
	
	var dropdownADB1_CL = "<select class='form-control width-initial' disabled>"+
	"<option selected>None</option>"+
	"<option>And</option>"+
	"<option>Or</option>"+	
	"</select>";
	
	var dropdownADB2_CL = "<select class='form-control width-initial' disabled>"+
	"<option selected>None</option>"+
	/*"<option>Accu Premium</option>"+*/
	"<option>SA</option>"+
	"<option>Fix</option>"+	
	"</select>";

function cloneBenefitDie_CL(){	 
    var lastImgOK = $('#tbody_dieL_CL >tbody>tr:last>td:first').attr("id") || 0;
    var numberImgOK = Number(lastImgOK.replace("imgOK_",""))+1;
    var runnumber = Number(lastImgOK.replace("imgOK_",""));
	   
    var imgOKcount = $("#tbody_dieL_CL i.glyphicon-ok").length;	
	if(imgOKcount <= 0)
	{	
		message = "กรุณาเลือกรายการที่ต้องการคัดลอก";
		alertError(message);
		
	}else{
		
	for(var i = 1;i<numberImgOK;i++)
		{
			var checked = $('#tbody_dieL_CL'+i+' >td:first>i').attr("class");			
			if(checked == "glyphicon glyphicon-ok")
				{	
			    	runnumber++
					/*$('#tbody_dieL_CL'+i).clone().prop('id', 'tbody_dieL_CL'+runnumber).appendTo("#tbody_dieL_CL >tbody");
					$('#tbody_dieR_CL'+i).clone().prop('id', 'tbody_dieR_CL'+runnumber).appendTo("#tbody_dieR_CL >tbody");*/
					var cloneL = $('#tbody_dieL_CL'+i).clone().prop("id","tbody_dieL_CL"+runnumber);
					var cloneR = $('#tbody_dieR_CL'+i).clone().prop("id","tbody_dieR_CL"+runnumber);
					
					 // Set id of new element
					 $(cloneL).find('td:first').prop("id","imgOK_"+runnumber);
					 $(cloneL).find('td:first>i').removeClass("glyphicon-ok").addClass("glyphicon-edit");
					/* $(cloneL).find('input[type=number]:nth-child(1)').attr("id","die_phase"+runnumber+"_CL");*/
					 $(cloneL).find('input[type=number]:nth-child(1)').attr("id","die_fromYear"+runnumber+"_CL");
					 $(cloneL).find('input[type=number]:nth-child(2)').attr("id","die_toYear"+runnumber+"_CL");
					 $(cloneL).find('td:nth-child(3)>select').attr("id","die_fromYearUnit"+runnumber+"_CL");
					 $(cloneL).find('td:nth-child(5)>select').attr("id","die_toYearUnit"+runnumber+"_CL");
					 		 
					 $(cloneR).find('td:nth-child(1)>select').attr("id","die_sa_max"+runnumber+"_CL");
					 $(cloneR).find('td:nth-child(2)>input').attr("id","die_sa"+runnumber+"_CL");
					 $(cloneR).find('td:nth-child(4)>input').attr("id","die_premium_CL"+runnumber);
					 $(cloneR).find('input[type=checkbox]:nth-child(1)').attr("id","die_checkbox"+runnumber);
					 $(cloneR).find('input[type=text]:nth-child(2)').attr("id","die_cvpv_CL"+runnumber);
					 $(cloneR).find('input[type=text]:nth-child(3)').attr("id","adb_CL"+runnumber);
					 $(cloneR).find('input[type=text]:nth-child(4)').attr("id","adbP_CL"+runnumber);
					 $(cloneR).find('td:nth-child(3)>select').attr("id","die_sa_unit"+runnumber+"_CL");
					 
					 var $originalSelects1 = $('#tbody_dieL_CL'+i).find('select:nth-child(1)');
					 $(cloneL).find('select:nth-child(1)').each(function(index, item) {
					      $(item).val($originalSelects1.eq(index).val() );
					  
					 });
					 
					 var $originalSelects2 = $('#tbody_dieL_CL'+i).find('select:nth-child(2)');
					 $(cloneL).find('select:nth-child(2)').each(function(index2, item2) {					      
					      $(item2).val($originalSelects2.eq(index2).val() );
					  
					 });
					 
					 var $originalSelects3 = $('#tbody_dieR_CL'+i).find('select:nth-child(1)');
					 $(cloneR).find('select:nth-child(1)').each(function(index3, item3) {				
					      $(item3).val($originalSelects3.eq(index3).val() );
					  
					 });
					 
					 var $originalSelects4 = $('#tbody_dieR_CL'+i).find('select:nth-child(2)');
					 $(cloneR).find('select:nth-child(2)').each(function(index4, item4) {					    
					      $(item4).val($originalSelects4.eq(index4).val() );
					  
					 });
					 
					 $(cloneL).insertAfter("#tbody_dieL_CL >tbody tr:last");
					 $(cloneR).insertAfter("#tbody_dieR_CL >tbody tr:last");
					 $('.auto').autoNumeric('init');
					 
				}			
		}
	nameTab 	= "menu_CL_5";
	Statuesave = "N";
	}	   
}

function newAddBenefitDie_CL(){
	var lastImgOK = $('#tbody_dieL_CL >tbody>tr:last>td:first').attr("id") || 0;
	
	//alert(lastImgOK);
	var numberImgOK = 0;
	
	if(lastImgOK == 0){
		numberImgOK = 1;
	}else{
		numberImgOK = Number(lastImgOK.replace("imgOK_",""))+1;
	}
	
	var newID = "imgOK_"+numberImgOK;
	var ftOnclick = 'imgCheckbox(this.id);';
	
	var row1 = "";
	row1 = "<tr id='tbody_dieL_CL"+numberImgOK+"'>"+
								"<td width='65px' class='text-center borderBlack' id="+"'"+newID+"'"+" onclick='"+ftOnclick+"' style='vertical-align: middle;'><i class='glyphicon glyphicon-edit'></i></td>"+
								/*"<td class='text-center borderBlack'><input id='die_phase"+numberImgOK+"_CL' type='number' class='form-control margin-padding0 text-center width50px' value='' min='1' onkeyup='numberKey(this);' onkeydown='numberKey(this);' onchange='validate_range_tbdie(this.id,this.value);'></td>"+*/
								"<td width='56px' class='borderBlack'><input id='die_fromYear"+numberImgOK+"_CL' type='number' class='form-control margin-padding0 text-center width50px' value='1' min='1' onkeyup='check_fromto("+numberImgOK+");'></td>"+
								"<td width='100px' class='text-center borderBlack'></td>"+
								"<td width='56px' class='borderBlack'><input id='die_toYear"+numberImgOK+"_CL' type='number' class='form-control margin-padding0 text-center width50px' value='1' onkeyup='check_fromto("+numberImgOK+");'></td>"+
								"<td width='100px' class='text-center borderBlack'></td>"+
			"</tr>";
	
	
	var row2 = "";
	row2 = "<tr id='tbody_dieR_CL"+numberImgOK+"'>"+
								"<td width='50px' class='text-center borderBlack'></td>"+
								"<td width='50px' class='borderBlack'><input id='die_sa"+numberImgOK+"_CL' class='auto form-control margin-padding0 text-center width70px' value='0.00' data-v-min='0.00' data-v-max='999.99'>"+
								"<td width='50px' class='text-center borderBlack'></td>"+
								"<td width='50px' class='borderBlack'><input id='die_premium_CL"+numberImgOK+"' type='text' class='form-control margin-padding0 text-center width70px' value='-' disabled></td>"+
								"<td width='50px' class='text-center borderBlack'>"+dropdownPremium_CL+"</td>"+
								"<td width='50px' class='verticalCenter text-center borderBlack'><input id='die_checkbox"+numberImgOK+"' type='checkbox' disabled></td>"+
								"<td width='50px' class='borderBlack'><input id='die_cvpv_CL"+numberImgOK+"' type='text' class='form-control margin-padding0 text-center width50px' value='-' disabled></td>"+
								"<td width='50px' class='text-center borderBlack'>"+dropdownCvPv_CL+"</td>"+
								"<td width='50px' class='text-center borderBlack'>"+dropdownOther_CL+"</td>"+
								"<td width='50px' class='text-center borderBlack'>"+dropdownADB1_CL+"</td>"+
								"<td width='50px' class='borderBlack'><input id='adb_CL"+numberImgOK+"' type='text' class='form-control margin-padding0 text-center widt50px' value='-' disabled></td>"+
								"<td width='160px' class='text-center borderBlack'>"+dropdownADB2_CL+"</td>"+
								"<td width='70px' class='text-center borderBlack'>"+dropdownADB1_CL+"</td>"+
								"<td width='70px' class='borderBlack'><input id='adbP_CL"+numberImgOK+"' type='text' class='form-control margin-padding0 text-center width50px' value='-' disabled></td>"+
								"<td width='160px' class='text-center borderBlack'>"+dropdownADB2_CL+"</td>"+
			"</tr>";
	
	$("#tbody_dieL_CL tbody").append(row1);
	$("#tbody_dieR_CL tbody").append(row2);
	
	$('#tbody_dieL_CL1 td:nth-child(3)>select').clone().attr("id","die_fromYearUnit"+numberImgOK+"_CL").attr("onchange","check_fromtoUnit("+numberImgOK+");").appendTo("#tbody_dieL_CL"+numberImgOK+">td:nth-child(3)");
	$('#tbody_dieL_CL1 td:nth-child(5)>select').clone().attr("id","die_toYearUnit"+numberImgOK+"_CL").attr("onchange","check_fromtoUnit("+numberImgOK+");").appendTo("#tbody_dieL_CL"+numberImgOK+">td:nth-child(5)");	
	$('#tbody_dieR_CL1 td:nth-child(1)>select').clone().attr("id","die_sa_max"+numberImgOK+"_CL").appendTo("#tbody_dieR_CL"+numberImgOK+">td:nth-child(1)");
	$('#tbody_dieR_CL1 td:nth-child(3)>select').clone().attr("id","die_sa_unit"+numberImgOK+"_CL").appendTo("#tbody_dieR_CL"+numberImgOK+">td:nth-child(3)");
	
	$('.auto').autoNumeric('init');
	
	nameTab 	= "menu_CL_5";
	Statuesave = "N";
}

/*ลบเสียชีวิต*/
function confirmDeleteBenefit_CL(){
	var imgOKcount = $("#tbody_dieL_CL i.glyphicon-ok").length;	
	if(imgOKcount <= 0)
	{	
		message = "กรุณาเลือกรายการที่ต้องการลบ";
		alertError(message);
	}else{
	
	message = "ต้องการลบรายการใช่หรือไม่";
	alertDeleteError(message);	
	
	$("#btn_confirm_del").click(function(){
		var lastImgOK = $('#tbody_dieL_CL >tbody>tr:last>td:first').attr("id");	
		var numberImgOK = Number(lastImgOK.replace("imgOK_",""))+1;
		
		for(var i = 1;i<=numberImgOK;i++)
			{
				var checked = $('#tbody_dieL_CL'+i+' >td:first>i').attr("class");
				if(checked == "glyphicon glyphicon-ok")
					{
						deleteTableRow('#tbody_dieL_CL'+i);
						deleteTableRow('#tbody_dieR_CL'+i);
					}
			}	
		
		/*change ID*/	
		var a=0, a2=0;
		$("#tbody_dieL_CL tbody>tr").each(function(){
			a++;
			$(this).attr("id","tbody_dieL_CL"+a);
			$(this).find("td:nth-child(1)").attr("id","imgOK_"+a);
			/*$(this).find("td:nth-child(2)>input").attr("id","die_phase"+a+"_CL");*/
			$(this).find("td:nth-child(2)>input").attr("id","die_phase"+a+"_CL");
			$(this).find("td:nth-child(3)>select").attr("id","die_fromYearUnit"+a+"_CL");
			$(this).find("td:nth-child(4)>input").attr("id","die_phase"+a+"_CL");
			$(this).find("td:nth-child(5)>select").attr("id","die_toYearUnit"+a+"_CL");		
		});
		
		$("#tbody_dieR_CL tbody>tr").each(function(){
			a2++;
			$(this).attr("id","tbody_dieR_CL"+a2);
			$(this).find("td:nth-child(2)>input").attr("id","die_sa"+a2+"_CL");
			$(this).find("td:nth-child(3)>select").attr("id","die_sa_unit"+a2+"_CL");
			$(this).find("td:nth-child(4)>input").attr("id","die_premium_CL"+a2);
			$(this).find("td:nth-child(6)>input").attr("id","die_checkbox"+a2);	
			$(this).find("td:nth-child(7)>input").attr("id","die_cvpv_CL"+a2);
			$(this).find("td:nth-child(11)>input").attr("id","adb_CL"+a2);
			$(this).find("td:nth-child(14)>input").attr("id","adbP_CL"+a2);
		});	
		
		nameTab 	= "menu_CL_5";
		Statuesave = "N";
	});	
	
	}
}

/*บันทึกเสียชีวิต*/
function bt_Die_CL_Confirm() {
	var message = "";
	var error = 0;
	
	var imgOKcount = $("#tbody_dieL_CL tbody>tr:visible i.glyphicon-edit").length;
	var row_length = $("#tbody_dieL_CL tbody>tr").length;
	var row_hidden = Number($("#tbody_dieL_CL tbody>tr:hidden").length);
		//row_hidden = row_hidden + parseInt(1);
	var row_start = row_length - row_hidden;

	$("#tbody_dieL_CL tbody>tr:visible").each(function(){
		
		var id = $(this).attr("id");
			id = id.replace("tbody_dieL_CL","");
			
		var die_phase = $('#die_phase'+id+'_CL').val();
		if(die_phase == ""){
			error++;
		}	
		
		var die_fromYear = $('#die_fromYear'+id+'_CL').val();
		if(die_fromYear == ""){
			error++;
		}
		
		var die_fromYearUnit_CL_text = $('#die_fromYearUnit'+id+'_CL option:selected').text();
		if(die_fromYearUnit_CL_text == "None"){
			error++;
		}
		
		var die_toYearUnit_CL_text	= $('#die_toYearUnit'+id+'_CL option:selected').text();
		if(die_toYearUnit_CL_text == "None"){
			error++;
		}
		
		var die_toYearUnit_CL = $('#die_toYearUnit'+id+'_CL').val();
		if(die_toYearUnit_CL == ""){
			error++;
		}
		
		var die_sa_CL = $('#die_sa'+id+'_CL').val();
		if(die_sa_CL == "0.00" || die_sa_CL == "0" || die_sa_CL == ""){
			error++;
		}
		
		var die_sa_unit_CL_text	= $('#die_sa_unit'+id+'_CL option:selected').text();
		if(die_sa_unit_CL_text == "None"){
			error++;
		}
		
	});
	/*for(var i = row_start;i<=imgOKcount;i++){
		
			ระยะ
			var die_phase_CL = [];
			die_phase_CL[i]	= $('#die_phase'+i+'_CL').val();
			if(die_phase_CL[i] == ""){
				message = "กรุณาระบุข้อมูลให้ครบ";
				alertError(message);
				error++;
			}	
			
			from
			var die_fromYear_CL = [];
			die_fromYear_CL[i]	= $('#die_fromYear'+i+'_CL').val();
			if(die_fromYear_CL[i] == ""){
				message = "กรุณาระบุข้อมูลให้ครบ";
				alertError(message);
				error++;
			}
			
			var die_fromYearUnit_CL_text = [];			
			die_fromYearUnit_CL_text[i]	= $('#die_fromYearUnit'+i+'_CL option:selected').text();
			if(die_fromYearUnit_CL_text[i] == "None"){
				message = "กรุณาระบุข้อมูลให้ครบ";
				alertError(message);
				error++;
			}
			
			to
			var die_toYearUnit_CL_text = [];
			die_toYearUnit_CL_text[i]	= $('#die_toYearUnit'+i+'_CL option:selected').text();
			if(die_toYearUnit_CL_text[i] == "None"){
				message = "กรุณาระบุข้อมูลให้ครบ";
				alertError(message);
				error++;
			}
			
			var die_toYearUnit_CL = [];
			die_toYearUnit_CL[i]	= $('#die_toYearUnit'+i+'_CL').val();
			if(die_toYearUnit_CL[i] == ""){
				message = "กรุณาระบุข้อมูลให้ครบ";
				alertError(message);
				error++;
			}
			
			SA
			var die_sa_CL = [];
			die_sa_CL[i]	= $('#die_sa'+i+'_CL').val();
			if(die_sa_CL[i] == "0.00" && die_sa_CL[i] == "0" && die_sa_CL[i] == ""){
				message = "กรุณาระบุข้อมูลให้ครบ";
				alertError(message);
				error++;
			}
			
			var die_sa_unit_CL_text = [];
			die_sa_unit_CL_text[i]	= $('#die_sa_unit'+i+'_CL option:selected').val();
			if(die_sa_unit_CL_text[i] == "NONE"){
				message = "กรุณาระบุข้อมูลให้ครบ";
				alertError(message);
				error++;
			}
	}*/

	if(error == 0 && imgOKcount > 0){
		save_benefitsCoverage_dead();
		message = "บันทึกข้อมูลเรียบร้อย";
		alertSuccess(message);
		nameTab 	= "menu_CL_5";
		Statuesave = "Y";
	}else{
		message = "กรุณาระบุข้อมูลให้ครบ";
		alertError(message);
		nameTab 	= "menu_CL_5";
		Statuesave = "N";
	}
}

/*เช็ค type number from-to*/
function check_fromto(id){
	
	var from_unit_text = $("#die_fromYearUnit"+id+"_CL option:selected").val();
	var to_unit_text = $("#die_toYearUnit"+id+"_CL option:selected").val();
	
	console.log("from"+from_unit_text+" to"+to_unit_text);
	
	if(from_unit_text != "NONE" && to_unit_text != "NONE"){
		$("#die_fromYear"+id+"_CL").on('blur', function () {
		  
		  var from_value = Number($('#die_fromYear'+id+'_CL').val());
		  var to_value = Number($('#die_toYear'+id+'_CL').val());	

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
					$('#die_fromYear'+id+'_CL').val("").focus();
				}
		 }else if(from_unit_text == "DAY" && to_unit_text == "WEEK"){			 
				if(from_value_toWeek > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#die_fromYear'+id+'_CL').val("").focus();
				}
		 }else if(from_unit_text == "WEEK" && to_unit_text == "DAY"){			
				if(to_value_toWeek < from_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#die_fromYear'+id+'_CL').val("").focus();
				}
		 }else if(from_unit_text == "DAY" && to_unit_text == "MONTH"){			 
				if(from_value_toMonth > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#die_fromYear'+id+'_CL').val("").focus();
				}
		 }else if(from_unit_text == "MONTH" && to_unit_text == "DAY"){			 
				if(to_value_toMonth < from_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#die_fromYear'+id+'_CL').val("").focus();
				}
		 }else if(from_unit_text == "DAY" && to_unit_text == "YEAR"){			 
				if(from_value_toYear > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#die_fromYear'+id+'_CL').val("").focus();
				}
		 }else if(from_unit_text == "YEAR" && to_unit_text == "DAY"){
				if(to_value_toYear < from_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#die_fromYear'+id+'_CL').val("").focus();
				}
		 }else if(from_unit_text == "WEEK" && to_unit_text == "MONTH"){			 
				if(from_value_WeektoMonth > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#die_fromYear'+id+'_CL').val("").focus();
				}
		 }else if(from_unit_text == "MONTH" && to_unit_text == "WEEK"){
				if(to_value_WeektoMonth < from_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#die_fromYear'+id+'_CL').val("").focus();
				}
		 }else if(from_unit_text == "WEEK" && to_unit_text == "YEAR"){
				if(from_value_WeektoYear > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#die_fromYear'+id+'_CL').val("").focus();
				}
		 }else if(from_unit_text == "YEAR" && to_unit_text == "WEEK"){
				if(to_value_WeektoYear < from_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#die_fromYear'+id+'_CL').val("").focus();
				}
		 }else if(from_unit_text == "MONTH" && to_unit_text == "YEAR"){
				if(from_value_MonthtoYear > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#die_fromYear'+id+'_CL').val("").focus();
				}
		 }else if(from_unit_text == "YEAR" && to_unit_text == "MONTH"){
				if(to_value_MonthtoYear < from_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#die_fromYear'+id+'_CL').val("").focus();
				}
		 }

		});
	
	   $("#die_toYear"+id+"_CL").on('blur', function () {	
		 var from_value = Number($('#die_fromYear'+id+'_CL').val());
		 var to_value = Number($('#die_toYear'+id+'_CL').val());	
		 
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
					$('#die_toYear'+id+'_CL').val("").focus();
				}
		  }else if(from_unit_text == "DAY" && to_unit_text == "WEEK"){
					if(from_value_toWeek > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#die_toYear'+id+'_CL').val("").focus();
					}
		  }else if(from_unit_text == "WEEK" && to_unit_text == "DAY"){
					if(to_value_toWeek < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#die_toYear'+id+'_CL').val("").focus();
					}
		  }else if(from_unit_text == "DAY" && to_unit_text == "MONTH"){			 
					if(from_value_toMonth > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#die_toYear'+id+'_CL').val("").focus();
					}
		  }else if(from_unit_text == "MONTH" && to_unit_text == "DAY"){
					if(to_value_toMonth < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#die_toYear'+id+'_CL').val("").focus();
					}
		  }else if(from_unit_text == "DAY" && to_unit_text == "YEAR"){				 
					if(from_value_toYear > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#die_toYear'+id+'_CL').val("").focus();
					}
		  }else if(from_unit_text == "YEAR" && to_unit_text == "DAY"){
					if(to_value_toYear < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#die_toYear'+id+'_CL').val("").focus();
					}
		  }else if(from_unit_text == "WEEK" && to_unit_text == "MONTH"){
					if(from_value_WeektoMonth > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#die_toYear'+id+'_CL').val("").focus();
					}
		  }else if(from_unit_text == "MONTH" && to_unit_text == "WEEK"){
					if(to_value_WeektoMonth < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#die_toYear'+id+'_CL').val("").focus();
					}
		  }else if(from_unit_text == "WEEK" && to_unit_text == "YEAR"){
					if(from_value_WeektoYear > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#die_toYear'+id+'_CL').val("").focus();
					}
		  }else if(from_unit_text == "YEAR" && to_unit_text == "WEEK"){
					if(to_value_WeektoYear < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#die_toYear'+id+'_CL').val("").focus();
					}
		  }else if(from_unit_text == "MONTH" && to_unit_text == "YEAR"){
					if(from_value_MonthtoYear > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#die_toYear'+id+'_CL').val("").focus();
					}
		  }else if(from_unit_text == "YEAR" && to_unit_text == "MONTH"){
					if(to_value_MonthtoYear < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#die_toYear'+id+'_CL').val("").focus();
					}
			 }
		
		});
	}
}

function check_fromtoUnit(id){	
	var from_unit_text = $("#die_fromYearUnit"+id+"_CL option:selected").val();
	var to_unit_text = $("#die_toYearUnit"+id+"_CL option:selected").val();	
	
	if(from_unit_text != "NONE" && to_unit_text != "NONE"){
		$("#die_fromYearUnit"+id+"_CL").change(function(){
			var from_value = Number($('#die_fromYear'+id+'_CL').val());
			var to_value = Number($('#die_toYear'+id+'_CL').val());

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
					$('#die_fromYear'+id+'_CL').val("").focus();
				}
			}else if(from_unit_text == "DAY" && to_unit_text == "WEEK"){
					if(from_value_toWeek > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#die_fromYear'+id+'_CL').val("").focus();
				    }
		    }else if(from_unit_text == "WEEK" && to_unit_text == "DAY"){
					if(to_value_toWeek < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#die_toYear'+id+'_CL').val("").focus();
				    }
		    }else if(from_unit_text == "DAY" && to_unit_text == "MONTH"){
					if(from_value_toMonth > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#die_fromYear'+id+'_CL').val("").focus();
					}
			 }else if(from_unit_text == "MONTH" && to_unit_text == "DAY"){
					if(to_value_toMonth < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#die_toYear'+id+'_CL').val("").focus();
				    }
		    }else if(from_unit_text == "DAY" && to_unit_text == "YEAR"){
					if(from_value_toYear > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#die_fromYear'+id+'_CL').val("").focus();
					}
			 }else if(from_unit_text == "YEAR" && to_unit_text == "DAY"){
					if(to_value_toYear < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#die_toYear'+id+'_CL').val("").focus();
				    }
		    }else if(from_unit_text == "WEEK" && to_unit_text == "MONTH"){
					if(from_value_WeektoMonth > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#die_toYear'+id+'_CL').val("").focus();
				    }
		    }else if(from_unit_text == "MONTH" && to_unit_text == "WEEK"){
					if(to_value_WeektoMonth < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#die_toYear'+id+'_CL').val("").focus();
					}
			 }else if(from_unit_text == "WEEK" && to_unit_text == "YEAR"){
					if(from_value_WeektoYear > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#die_fromYear'+id+'_CL').val("").focus();
					}
			 }else if(from_unit_text == "YEAR" && to_unit_text == "WEEK"){
					if(to_value_WeektoYear < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#die_fromYear'+id+'_CL').val("").focus();
					}
		     }else if(from_unit_text == "MONTH" && to_unit_text == "YEAR"){
					if(from_value_MonthtoYear > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#die_fromYear'+id+'_CL').val("").focus();
					}
			 }else if(from_unit_text == "YEAR" && to_unit_text == "MONTH"){
					if(to_value_MonthtoYear < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#die_fromYear'+id+'_CL').val("").focus();
					}
			 }
			
		});	
	}
	
	$("#die_toYearUnit"+id+"_CL").change(function(){				
		var from_value = Number($('#die_fromYear'+id+'_CL').val());
		var to_value = Number($('#die_toYear'+id+'_CL').val());

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
				$('#die_toYear'+id+'_CL').val("").focus();
			}
		}else if(from_unit_text == "DAY" && to_unit_text == "WEEK"){
			if(from_value_toWeek > to_value){
				message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
				alertError(message);
				$('#die_toYear'+id+'_CL').val("").focus();
			}
		}else if(from_unit_text == "WEEK" && to_unit_text == "DAY"){	
			if(to_value_toWeek < from_value){
				message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
				alertError(message);
				$('#die_toYear'+id+'_CL').val("").focus();
			}
		}else if(from_unit_text == "DAY" && to_unit_text == "MONTH"){
			 var from_value_toMonth = from_value/30;
				if(from_value_toMonth > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#die_toYear'+id+'_CL').val("").focus();
				}
		 }else if(from_unit_text == "MONTH" && to_unit_text == "DAY"){	
				if(to_value_toMonth < from_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#die_toYear'+id+'_CL').val("").focus();
				}
		}else if(from_unit_text == "DAY" && to_unit_text == "YEAR"){
				if(from_value_toYear > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#die_toYear'+id+'_CL').val("").focus();
				}
		 }else if(from_unit_text == "YEAR" && to_unit_text == "DAY"){	
				if(to_value_toYear < from_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#die_toYear'+id+'_CL').val("").focus();
				}
		}else if(from_unit_text == "WEEK" && to_unit_text == "MONTH"){	
			if(from_value_WeektoMonth > to_value){
				message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
				alertError(message);
				$('#die_toYear'+id+'_CL').val("").focus();
			}
		}else if(from_unit_text == "MONTH" && to_unit_text == "WEEK"){
				if(to_value_WeektoMonth < from_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#die_toYear'+id+'_CL').val("").focus();
				}
		 }else if(from_unit_text == "WEEK" && to_unit_text == "YEAR"){
				if(from_value_WeektoYear > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#die_toYear'+id+'_CL').val("").focus();
				}
		 }else if(from_unit_text == "YEAR" && to_unit_text == "WEEK"){
				if(to_value_WeektoYear < from_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#die_toYear'+id+'_CL').val("").focus();
				}
	     }else if(from_unit_text == "MONTH" && to_unit_text == "YEAR"){
				if(from_value_MonthtoYear > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#die_toYear'+id+'_CL').val("").focus();
				}
		 }else if(from_unit_text == "YEAR" && to_unit_text == "MONTH"){
				if(to_value_MOnthtoYear < from_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#die_toYear'+id+'_CL').val("").focus();
				}
		 }
		
	});
}


/*ทุพพลภาพถาวรสิ้นเชิง*/
function imgCheckbox_disabled(id)
{
	var imgOK = "imgOK_disabled"+id;
	
	 		if($('#'+imgOK).is(':checked')) 
				{							
					$('#disabled_amount'+id).prop("disabled", false);	
					$('#disabled_name'+id).prop("disabled", false);
				}
			else
				{					
					$('#disabled_amount'+id).prop("disabled", true);
					$('#disabled_name'+id).prop("disabled", true);
				}
	
}
function imgCheckboxDel_disabled(id)
{
	var imgOK = "imgOKDel_disabled"+id;
	var classed = $('#'+imgOK+' >i').attr("class") || 0;
		
	if(classed != 0)
		{			
			if(classed == "glyphicon glyphicon-edit")
				{		
					$('#'+imgOK+' >i').attr("class", "glyphicon glyphicon-ok del_disabled");
					$('#'+imgOK+' >i').css("display","block");
				}
			else
				{
					$('#'+imgOK+' >i').attr("class", "glyphicon glyphicon-edit");
					$('#'+imgOK+' >i').css("display","block");
				}
		}
}
function addDisabledNew(){
			var lastImgOK = $('#Disabled_Table >tbody>tr:last>td:first').attr("id") || 0;
			var numberImgOK = 0;
						
			if(lastImgOK == 0){
				numberImgOK = 1;
			}else{
				numberImgOK = Number(lastImgOK.replace("imgOKDel_disabled",""))+1;
			}
			
			var newID = "imgOK_disabled"+numberImgOK;
			var newID_Del = "imgOKDel_disabled"+numberImgOK;
			
			var row = "";
			row = "<tr id='tbody_disabled"+numberImgOK+"'>"+
									"<td id="+newID_Del+" class='text-center borderBlack'"+
									"onclick='imgCheckboxDel_disabled("+numberImgOK+");'"+
									"style='vertical-align: middle;'><i "+
									"class='glyphicon glyphicon-edit'></i></td>"+
									"<td class='text-center borderBlack' style='vertical-align: middle;'><input type='checkbox' id='"+newID+"' value='' onclick='imgCheckbox_disabled("+numberImgOK+");' checked></td>"+																		
									"<td class='borderBlack verticalCenter'><input type='text' name='disabled_name"+numberImgOK+"' id='disabled_name"+numberImgOK+"' class='form-control margin-padding0 text-center;'></td>"+									
									"<td class='borderBlack' align='center'><input id='disabled_amount"+numberImgOK+"' type='text' class='auto form-control margin-padding0 text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999.99'></td>"+											
								    "</tr>";
			
			$("#Disabled_Table tbody").append(row);
			$('.auto').autoNumeric('init');
			
			nameTab 	= "menu_CL_5";
			Statuesave = "N";
}

function confirmDeleteDisabled_CL(){
	var imgOKcount = $("#Disabled_Table i.del_disabled").length;
	if(imgOKcount <= 0)
	{	
		message = "กรุณาเลือกรายการที่ต้องการลบ";
		alertError(message);
	}else{

	message = "ต้องการลบรายการใช่หรือไม่";
	alertDeleteError(message);
		
	$("#btn_confirm_del").click(function(){		
		var lastImgOK = $('#Disabled_Table >tbody>tr:last>td:first').attr("id");	
		var numberImgOK = Number(lastImgOK.replace("imgOKDel_disabled",""))+1;
	
		for(var i = 1;i<=numberImgOK;i++)
			{
				var checked = $('#tbody_disabled'+i+' >td:first>i').attr("class");
				if(checked == "glyphicon glyphicon-ok del_disabled")
					{	
					deleteTableRow('#tbody_disabled'+i);
						/*if(i>=6){
							deleteTableRow('#tbody_disabled'+i);
						}else{
							message = "ไม่สามารถลบรายการที่ 1-5 ออกได้";
							alertError(message);
						}	*/					
					}
			}
		
		nameTab 	= "menu_CL_5";
		Statuesave = "N";
		});
	}
}

/*บันทึกทุพพลภาพถาวรสิ้นเชิง*/
function bt_Disabled_CL_Confirm() {
	var message = "";
	var error = 0;	
	var imgOKcount = $("#Disabled_Table input:checkbox:checked").length;		
	var chk = [];
	var chk_number = [];
	var i = 0;
	
	$('#Disabled_Table input:checkbox:checked').each(function(){
		i++;
		chk[i] = $(this).attr("id");
		chk_number[i] = Number(chk[i].replace("imgOK_disabled",""));
		var imgOK = "imgOK_disabled"+chk_number[i];
			
		if($('#'+imgOK).is(':checked')) {			
			var disabled_name = [];
			disabled_name[i]	= $('#disabled_name'+chk_number[i]).val();
			if(disabled_name[i] == ""){
				message = "กรุณาระบุข้อมูลให้ครบ";
				alertError(message);
				error++;
			}
			
			var disabled_amount = [];
			disabled_amount[i] 	= $('#disabled_amount'+chk_number[i]).val();
			if(disabled_name[i] != "การฟื้นคืนสภาพ"){
				if(disabled_amount[i] == "0.00" || disabled_amount[i] == "0" || disabled_amount[i] == ""){				
						message = "กรุณาระบุข้อมูลให้ครบ";
						alertError(message);
						error++;
					
				}
			}
		}
		
	});
	
	if(error == 0 && imgOKcount != 0){
		save_benefitsCoverage_disability();
		message = "บันทึกข้อมูลเรียบร้อย";
		alertSuccess(message);
		nameTab 	= "menu_CL_5";
		Statuesave = "Y";
	}else if(imgOKcount == 0){
		message = "กรุณาเลือกรายการข้อมูล";
		alertError(message);
		error++;
	}
}

/*อื่นๆ*/

function cancleBenefit_CL()
{
	changeDisplayBenefit005_CL(0);
}

function cancelPage(url){
	location.href = url;	
}

function cancelTab(page){
	if(page == 1){
		/*ผลประโยชน์/ความคุ้มครอง*/
		setTimeout(() => {
			$("#mainBenefit_CL").css("display", "block");
			$("#benefitDetail_CL").css("display", "none");
		}, 30);
		
	}
	
}

/*policy wording*/
function displayPolicyValueWordCL_popup(){	
	var uploadWord1_CL = $('#uploadWord1_CL').prop('checked');
	var uploadWord2_CL = $('#uploadWord2_CL').prop('checked');
	
	if(uploadWord1_CL)
		{	
			$('#select_wordfile_policy1_CL_modal').prop('disabled', false);
			$('#input_wordfile_policy1_CL_modal').attr("disabled", false);
			$('#btn_word_policy1_CL_modal').prop('disabled', false);
			$("#tbl_PolicyFileWord_CL *").attr("disabled", "disabled").off('click');
			$("#tbl_PolicyFileWord_CL input[type='radio']").prop("checked",false);
	}else{
			$('#select_wordfile_policy1_CL_modal').prop('disabled', true);
			$('#input_wordfile_policy1_CL_modal').attr("disabled", true);
			$('#btn_word_policy1_CL_modal').prop('disabled', true);
			$("#tbl_PolicyFileWord_CL *").prop("disabled", false);
	}
}

/*policy Upload Modal*/

/*history*/
$(document).on("click", ".open-HistoryDialog_CL", function () {
    var myId = $(this).data('id');
    $(".modal-body #History_Policy_CL").val( myId );
    
	/*โชว์  modal title ด้วย policy name*/
	var policy_name = $("#policy_name"+myId).val();
	$("#modal_historyPolicy_CL .modal-header>h4>span").html(policy_name);
	
	var chk_class = $(this).attr('class')
	if( chk_class.includes('active_grey')){
		 $('#modal_historyPolicy_CL').modal('hide');
	}else{
		$('#modal_historyPolicy_CL').modal('show');
	}
    
});

/*open modal*/
$(document).on("click", ".open-AddUploadDialog_pdf", function () {
    var myId = $(this).data('id');
    $(".modal-body #pdfID_Policy_CL").val( myId );
    document.getElementById("upload1_CL").value = 1;
    
    $("#tbl_PolicyFile_CL *").prop("disabled", true);
    $("input[name='uploadOld_CL']:radio").prop("checked", false);  
    
    $("#upload1_CL").prop("checked", true);
    $("#input_pdffile_policy1_CL_modal").val("");
    document.getElementById("select_pdffile_policy1_CL_modal").value = "";
    $("#base64_filePDF_CL").val("")
    $('#select_pdffile_policy1_CL_modal').prop('disabled', false);
	$('#input_pdffile_policy1_CL_modal').attr("disabled", false);
	$('#btn_pdf_policy1_CL_modal').prop('disabled', false);
	
	/*โชว์  modal title ด้วย policy name*/
	var policy_name = $("#policy_name"+myId).val();
	$("#modal_upload_pdf .modal-header>h4>span").html(policy_name);
	
    $('#modal_upload_pdf').modal('show');
});

$(document).on("click", ".open-AddUploadDialog_word", function () {
    var myId = $(this).data('id');
    $(".modal-body #wordID_Policy_CL").val( myId );   
    document.getElementById("uploadWord1_CL").value = 1;
     
    $("#tbl_PolicyFileWord_CL *").prop("disabled", true);
    $("input[name='uploadOldWord_CL']:radio").prop("checked", false);
    
    $("#uploadWord1_CL").prop("checked", true);
    $("#input_wordfile_policy1_CL_modal").val("");
    document.getElementById("select_wordfile_policy1_CL_modal").value = "";
    $("#base64_fileDOC_CL").val("")
    $('#select_wordfile_policy1_CL_modal').prop('disabled', false);
	$('#input_wordfile_policy1_CL_modal').attr("disabled", false);
	$('#btn_word_policy1_CL_modal').prop('disabled', false);
	
	/*โชว์  modal title ด้วย policy name*/
	var policy_name = $("#policy_name"+myId).val();
	$("#modal_upload_word .modal-header>h4>span").html(policy_name);
	
	$('#modal_upload_word').modal('show');
});

/*เลือก option*/
function displayPolicyValueCL_popup(){	
	var upload1_CL = $('#upload1_CL').prop('checked');
	var upload2_CL = $('#upload2_CL').prop('checked');
	if(upload1_CL)
		{	
			$('#select_pdffile_policy1_CL_modal').prop('disabled', false);
			$('#input_pdffile_policy1_CL_modal').attr("disabled", false);
			$('#btn_pdf_policy1_CL_modal').prop('disabled', false);
			$("#tbl_PolicyFile_CL *").attr("disabled", "disabled").off('click');
			$("#tbl_PolicyFile_CL input[type='radio']").prop("checked",false);
			document.getElementById("upload1_CL").value = 1;
			document.getElementById("upload2_CL").value = 0;					
	}else if(upload2_CL){
			$('#select_pdffile_policy1_CL_modal').prop('disabled', true);
			$('#input_pdffile_policy1_CL_modal').attr("disabled", true);
			$('#btn_pdf_policy1_CL_modal').prop('disabled', true);
			$("#tbl_PolicyFile_CL *").prop("disabled", false);
			document.getElementById("upload1_CL").value = 0;
			document.getElementById("upload2_CL").value = 1;
	}
}

/*************ไฟล์ pdf+word**************/
function checkfile_policyDupicate(file_name,type){
	var error = 0;
	var errorSymbol = 0;
	var tbl = "";
	var doc_type_id = "";
	var tbl_main = "Policy_Table_CL"
	if(type == "pdf"){
		tbl = "tbl_PolicyFile_CL";
		doc_type_id = 2;
	}else if(type == "word"){
		tbl = "tbl_PolicyFileWord_CL";
		doc_type_id = 1;
	}else if(type == "txt"){ //added
		tbl = "";
		doc_type_id = 3;
		
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
		    		$("#base64_filePDF_CL").val("");
		    		$("#input_pdffile_policy1_CL_modal").val("");
		    		 message = "ไม่สามารถอัพโหลดได้ เนื่องจากมีชื่อไฟล์นี้อยู่แล้ว";
					 alertError(message);	
		    	}else if(error > 0 && type == "word"){
		    		$("#base64_fileDOC_CL").val("");
		    		$("#input_wordfile_policy1_CL_modal").val("");
		    		 message = "ไม่สามารถอัพโหลดได้ เนื่องจากมีชื่อไฟล์นี้อยู่แล้ว";
					 alertError(message);	
		    	}else if(error > 0 && type == "txt"){
		    		$("#base64_fileTXT_CL").val("");
		    		file_name.val("");
		    		 message = "ไม่สามารถอัพโหลดได้ เนื่องจากมีชื่อไฟล์นี้อยู่แล้ว";
					 alertError(message);
		    		
		    	}
		    	// validate Symbol
		    	if(errorSymbol > 0 && type == "pdf"){
		    		$("#base64_filePDF_CL").val("");
		    		$("#input_pdffile_policy1_CL_modal").val("");
		    		 message = "ชื่อไฟล์ต้องไม่มีสัญลักษณ์พิเศษ";
					 alertError(message);	
		    	}else if(errorSymbol > 0 && type == "word"){
		    		$("#base64_fileDOC_CL").val("");
		    		$("#input_wordfile_policy1_CL_modal").val("");
		    		 message = "ชื่อไฟล์ต้องไม่มีสัญลักษณ์พิเศษ";
					 alertError(message);	
		    	}else if(errorSymbol > 0 && type == "txt"){
		    		$("#base64_fileTXT_CL").val("");
		    		file_name.val("");
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
 			   $("#input_pdffile_policy1_CL_modal").val("");
 			   $("#base64_filePDF_CL").val("");
 			   error++;				
 		   }
    	});
		//เซ็คชื่อไฟล์ซ้ำใน ตาราง Policy wording หลัก
		$("#"+tbl_main+" tbody>tr").each(function(){
			if( type == "pdf"){
				if(file_name.toUpperCase() == $(this).find('td:nth-child(4) .filename>a').text().toUpperCase()){
					   $("#input_pdffile_policy1_CL_modal").val("");
					   $("#base64_filePDF_CL").val("");
					   error++;				
				}
			}else if( type == "word"){
				if(file_name.toUpperCase() == $(this).find('td:nth-child(6) .filename>a').text().toUpperCase()){
					$("#base64_fileDOC_CL").val("");
		    		$("#input_wordfile_policy1_CL_modal").val("");
					   error++;				
				}
			}
			   
	 	});
		
		if(error > 0){ return false; }else{ return true; }
	
}
function convertToBase64(file_id,type_file) {
	
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
            	$("#base64_fileDOC_CL").val(base64)
            }else if(type_file == "2"){
            	$("#base64_filePDF_CL").val(base64)
            }else if(type_file == "3"){
            	$("#base64_fileTXT_CL").val(base64)
            }
           
        };
        // Convert data to base64
        fileReader.readAsDataURL(fileToLoad);
    }
  
}
/*************ไฟล์ pdf**************/
/*เลือกนำเข้า */
function uploadfile_policy_pdf(row) {		
	    	  $("#select_pdffile_policy1_CL_modal").trigger("click");	    	  	    	  
	    	  $("#select_pdffile_policy1_CL_modal").unbind("change");
	    	  
			  $("#select_pdffile_policy1_CL_modal ").change(function(e) {
				  var file_path = this.value;
			       var file_name = this.value.replace(/\\/g, '/').replace(/.*\//, '');	
			       var file_type = row;
			      
			       var file_name_split = file_name.split(".")
			       if(file_name_split[1] == "pdf" && file_name_split.length == 2){
			    	   convertToBase64("select_pdffile_policy1_CL_modal",row);
			    	
				       if(checkfile_policyDupicate(file_name,"pdf") == false){			    	   
						   message = "ไม่สามารถอัพโหลดได้ เนื่องจากมีชื่อไฟล์นี้อยู่แล้ว";
						   alertError(message);					    
						   $("#select_pdffile_policy1_CL_modal").val("");
				       }else{			    	   
				    	   $("#btn_submit_fileuploadPolicy_CL").unbind();
				    	   $("#btn_submit_fileuploadPolicy_CL").click(function(){	
				    		   $("#modal_waiting").modal('show');
				    		   var base64 = $("#base64_filePDF_CL").val();
					    	   var rowID = $(".modal-body #pdfID_Policy_CL").val(); 
					    	   if( base64 != ""){
					    		   GetFileModalPolicy_CL(rowID, file_path, file_name,"","pdf");
					    		   var dateTime = getCurrentDate();
					    		   var file_name_update = "2_"+dateTime+".pdf"
					    			   datajson = {				        	
								    		"method" : "uploadFile",
								    		"passInsurance" : $("#pass_Insurance_coverage_cl").val(),
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
								 	    	var rowPolicy = $("#show_modal_selectPolicy_pdf").val();
								 	    	 
								 	    	// ชนิดไฟล์,ชื่อไฟล์,ที่อยู่ของไฟล์,ไฟล์ไอดีที่ซ่อนอยู่
								 	    	saveFile(file_type,file_name,obj_ref,"fileId_pdf_CL"+rowPolicy);
								 	    	$("#div_pdf_policy"+rowPolicy+"_CL").find('a').attr("onclick","openFile_target(this,'"+obj_ref+"','pdf')")
								 	    	$("#modal_upload_pdf").hide();
								 	    },
								 	    error : function(response) {	
											 message = "ขนาดไฟล์ห้ามเกิน 30 MB"
											 alertError(message)
											 var rowPolicy = $("#show_modal_selectPolicy_pdf").val();
											 resetFilePolicy_CL(rowPolicy,'pdf');
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
function selectfile_policy_pdf(fileId) {	
	$("#upload2_CL").prop('checked',true)
	$("#btn_submit_fileuploadPolicy_CL").unbind();
	$("#btn_submit_fileuploadPolicy_CL").click(function(){		   
		var rowID = $(".modal-body #pdfID_Policy_CL").val(); 
		var filename = "";
		var ref = "";
		$("#tbl_PolicyFile_CL tbody>tr").each(function(){
			if($(this).find('td:nth-child(1) input[type="radio"]').is(':checked')){
				filename = $(this).find('td:nth-child(3)').text();
				ref = $(this).find('td:nth-child(3) input[type="hidden"]').val();
			}
		})
		if( $("#upload2_CL").is(':checked')){
			GetFileModalPolicy_CL(rowID, fileId , filename , ref , "pdf");
		}else{
			$("#modal_upload_pdf").modal('hide');
		}
		
	})		       		       
}
/*lookup ไฟล์เดิม*/
function oldFile_policyWording_CL(doc_type_id,file_type){
	
	// ซ่อนค่าให้รู้ว่า popup หน้านีคือของ row ไหน
	if(file_type == "2"){
		$("#btn_submit_fileuploadPolicy_CL").attr('data-id',doc_type_id)
		$("#show_modal_selectPolicy_pdf").val(doc_type_id)
	}else if(file_type == "1"){
		$("#btn_submit_fileuploadPolicyWord_CL").attr('data-id',doc_type_id)
		$("#show_modal_selectPolicy_doc").val(doc_type_id)
	}
	
	datajson = {				        	
		"method" : "getLookupOldFilePolicy",
		"doc_type_id" : doc_type_id,
		"file_type" : file_type,
		"cov_code" : $("#pass_Insurance_coverage_cl").val()
	}	
				
	$.ajax({
		 type: "POST",
	    url : "PolicyWording_Data_Servlet",
	    data: datajson,       
	    success : function(response) {	
	    	
	    	if(response.old_file){
	    		if(file_type == "2"){
	    			//var tableName = "tbl_PolicyFile_CL";
	    			if ( $.fn.dataTable.isDataTable( "#tbl_PolicyFile_CL" ) ) {
	  		    	  var table = $("#tbl_PolicyFile_CL").DataTable();
	  		    	  table.destroy();
	  		      	}
	    			$("#tbl_PolicyFile_CL tbody>tr").remove();
	    		}else if(file_type == "1"){
	    			//var tableName = "tbl_PolicyFileWord_CL";
	    			if ( $.fn.dataTable.isDataTable( "#tbl_PolicyFileWord_CL" ) ) {
		  		    	  var table = $("#tbl_PolicyFileWord_CL").DataTable();
		  		    	  table.destroy();
		  		    }
	    			$("#tbl_PolicyFileWord_CL tbody>tr").remove();
	    		}
	    		
		    	for(i in response.old_file){
		    		var obj = response.old_file[i];
		    		
					if(file_type == "2" && obj.file_type == "2"){
						var flag_chkDup_pdf = false;
						$("#tbl_PolicyFile_CL tbody>tr").each(function(){
							if( $(this).find('td:nth-child(1) input[type="radio"]').val() == obj.file_id){
								flag_chkDup_pdf = true;
							}
						})
						if(!flag_chkDup_pdf){
							var row = "<tr>"+
			    				"<td class='text-center'><input type='radio' id='uploadOld"+i+"_CL' name='uploadOld_CL' value='"+obj.file_id+"' onclick='selectfile_policy_pdf(this.value);'></td>"+
								"<td class='text-center'><a onclick=\"openFile_target(this,'"+obj.file_ref+"','pdf')\" target='_blank'><span class='glyphicon glyphicon-eye-open'></span></a></td>"+
								"<td class='text-left'><input type='hidden' id='ref_File' value='"+obj.file_ref+"'>"+obj.file_name+"</td>"+
								"</tr>"
							$("#tbl_PolicyFile_CL tbody").append(row);
						}
						
					}else if(file_type == "1" && obj.file_type == "1"){
						var flag_chkDup_doc = false;
						$("#tbl_PolicyFileWord_CL tbody>tr").each(function(){
							if( $(this).find('td:nth-child(1) input[type="radio"]').val() == obj.file_id){
								flag_chkDup_doc = true;
							}
						})
						if(!flag_chkDup_doc){
							var row = "<tr>"+
									"<td class='text-center'><input type='radio' id='uploadOldWord"+i+"_CL' name='uploadOldWord_CL' value='"+obj.file_id+"' onclick='selectfile_policy_word(this.value);'></td>"+
									"<td class='text-center'><a onclick=\"openFile_target(this,'"+obj.file_ref+"','doc')\" target='_blank'><span class='glyphicon glyphicon-eye-open'></span></a></td>"+
									"<td class='text-left'><input type='hidden' id='ref_File' value='"+obj.file_ref+"'>"+obj.file_name+"</td>"+									
								"</tr>"
							$("#tbl_PolicyFileWord_CL tbody").append(row);
						}
					}
		    	}
	    	}
	    	
	    	// default validate ค่าเริ่มต้น
	    	if(file_type == "2"){
	    		$("#upload1_CL").prop('checked',true)
		    	displayPolicyValueCL_popup();
	    		$("#tbl_PolicyFile_CL").DataTable({
		    		"ordering": false,
		    		"paging": false,
		    		"bInfo" : false, 
		    		"scrollY": '312px',
		    		"scrollCollapse": true, 
		    		"autoWidth": false, 
		    		"oLanguage": {"sSearch": "ค้นหา: "}
		    	});
		    	$(".datatbl_PolicyFile_CL .dataTables_scrollHeadInner").css({"width":"100%"});
		    	$(".datatbl_PolicyFile_CL .table").css({"width":"100%"});
	    	}else if(file_type == "1"){
	    		$("#uploadWord1_CL").prop('checked',true)
	    		displayPolicyValueWordCL_popup();
	    		$("#tbl_PolicyFileWord_CL").DataTable({
		    		"ordering": false,
		    		"paging": false,
		    		"bInfo" : false, 
		    		"scrollY": '312px',
		    		"scrollCollapse": true, 
		    		"autoWidth": false, 
		    		"oLanguage": {"sSearch": "ค้นหา: "}
		    	});
		    	$(".datatbl_PolicyFileWord_CL .dataTables_scrollHeadInner").css({"width":"100%"});
		    	$(".datatbl_PolicyFileWord_CL .table").css({"width":"100%"});
	    	}
	    	
	    },
	 	error : function(response) {	
		 
	 	}
	})
	console.log("datajson",datajson)
}

/***********ไฟล์ word*************/
/*เลือกนำเข้า */
function uploadfile_policy_word(row) {	
		 $("#select_wordfile_policy1_CL_modal").trigger("click");
		 $("#select_wordfile_policy1_CL_modal").unbind("change");
		  $("#select_wordfile_policy1_CL_modal").change(function() {			 					  
			   var file_path = this.value;
		       var file_name = this.value.replace(/\\/g, '/').replace(/.*\//, '');
		       var file_type = row;
		       
		       var file_name_split = file_name.split(".")
		       if(file_name_split[1] == "doc" || file_name_split[1] == "docx" || file_name_split[1] == "odt" && file_name_split.length == 2){
		    	   convertToBase64("select_wordfile_policy1_CL_modal",row);
			       if(checkfile_policyDupicate(file_name,"word") == false){			    	   
					   message = "ไม่สามารถอัพโหลดได้ เนื่องจากมีชื่อไฟล์นี้อยู่แล้ว";
					   alertError(message);					    
					   $("#select_wordfile_policy1_CL_modal").val("");
			       }else{			    	   
			    	   $("#btn_submit_fileuploadPolicyWord_CL").unbind();
			    	   $("#btn_submit_fileuploadPolicyWord_CL").click(function(){
			    		   
			    		   $("#modal_waiting").modal('show');
			    		   var base64 = $("#base64_fileDOC_CL").val();
				    	   var rowID = $(".modal-body #wordID_Policy_CL").val(); 
				    	   
				    	   if( base64 != ""){
				    		  
				    		   GetFileModalPolicy_CL(rowID, file_path, file_name,"", "word");
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
							 	    	var rowPolicy = $("#show_modal_selectPolicy_doc").val();
							 	    	
							 	    	// ชนิดไฟล์,ชื่อไฟล์,ที่อยู่ของไฟล์,ไฟล์ไอดีที่ซ่อนอยู่
								 	    saveFile(file_type,file_name,obj_ref,"fileId_doc_CL"+rowPolicy);
								 	   $("#div_word_policy"+rowPolicy+"_CL").find('a').attr("onclick","openFile_target(this,'"+obj_ref+"','doc')")
							 	    	$("#modal_upload_word").hide();
							 	    },
								    error : function(response) {	
										 message = "ขนาดไฟล์ห้ามเกิน 30 MB"
										 alertError(message)
										 var rowPolicy = $("#show_modal_selectPolicy_doc").val();
										 resetFilePolicy_CL(rowPolicy,'word');
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
btn_submit_fileuploadPolicyWord_CL
function selectfile_policy_word(fileId) {	
		$("#uploadWord2_CL").prop("checked",true)
		  $("#btn_submit_fileuploadPolicyWord_CL").unbind();
	      $("#btn_submit_fileuploadPolicyWord_CL").click(function(){	
	    	
	    	   var rowID = $(".modal-body #wordID_Policy_CL").val(); 
	    	   var filename = "";
	    	   var ref = "";
				$("#tbl_PolicyFileWord_CL tbody>tr").each(function(){
					if($(this).find('td:nth-child(1) input[type="radio"]').is(':checked')){
						filename = $(this).find('td:nth-child(3)').text();
						ref = $(this).find('td:nth-child(3) input[type="hidden"]').val();
					}
				})
	    	   
				if( $("#uploadWord2_CL").is(':checked')){
					 GetFileModalPolicy_CL(rowID , fileId , filename , ref , "word");	  
				}else{
					$("#modal_upload_word").modal('hide');
				}
	    	   
	      })		       		       
}

/*กดตกลงใน modal*/
function GetFileModalPolicy_CL(rowID, file, filename, ref, type){
	//$("#input_"+type+"file_policy"+rowID+"_CL").val(filename);
	if(type =='pdf'){
		//var url = "<a href='download/FileNamePDF_01.pdf' download>"+filename+"</a>";
		//var url = "<a href='file_viewer.jsp?type=pdf' target='_blank'>"+filename+"</a>";
		var url = "<a onclick=\"openFile_target(this,'"+ref+"','pdf')\" target='_blank'>"+filename+"</a>";
	}
	if(type =='word'){
		//var url = "<a href='download/FileNameMSWord_01.doc' download>"+filename+"</a>";
		//var url = "<a href='file_viewer.jsp?type=word' target='_blank'>"+filename+"</a>";
		var url = "<a onclick=\"openFile_target(this,'"+ref+"','doc')\" target='_blank'>"+filename+"</a>";
	}
	$("#div_"+type+"_policy"+rowID+"_CL").html(url);
	
	//$("#select_pdffile_policy"+row+"_CL").val(file);
	$("#modal_upload_"+type).modal('hide');
	
	var dataResetPdfID 	= "span_reset_pdf"+rowID;
	var dataResetWordID 	= "span_reset_word"+rowID;
    var dataDownloadID = "span_download"+rowID;
    var dataHistoryID = "span_history"+rowID;
    
    if(type=='pdf'){
    	$("a#"+ dataResetPdfID).removeClass("active_grey").addClass("active_blue");
    	$("#fileId_pdf_CL"+rowID).val(file)
    }else if(type == 'word'){
    	$("a#"+ dataResetWordID).removeClass("active_grey").addClass("active_blue");
    	$("#fileId_doc_CL"+rowID).val(file)
    }
    
    $("a#"+ dataDownloadID).removeClass("active_grey").addClass("active_blue");
    $("a#"+ dataHistoryID).removeClass("active_grey").addClass("active_blue");
   
}

function resetFilePolicy_CL(rowID,type){
	if(type=="pdf"){
		$("#fileId_pdf_CL"+rowID).val("");
		$("#div_pdf_policy"+rowID+"_CL").html("None");
	}else if(type=="word"){
		$("#fileId_doc_CL"+rowID).val("");
		$("#div_word_policy"+rowID+"_CL").html("None");
	}
	
	var dataResetPdfID 	= "span_reset_pdf"+rowID;
	var dataResetWordID 	= "span_reset_word"+rowID;   
    var dataDownloadID = "span_download"+rowID;
    var dataHistoryID = "span_history"+rowID;
	
    if(type=='pdf'){
    	$("a#"+ dataResetPdfID).removeClass("active_blue").addClass("active_grey");
    }else if(type == 'word'){
    	$("a#"+ dataResetWordID).removeClass("active_blue").addClass("active_grey");
    }
    
    $("a#"+ dataDownloadID).removeClass("active_blue").addClass("active_grey");
   // $("a#"+ dataHistoryID).removeClass("active_blue").addClass("active_grey");
    
    validActive = 1;
}

/******** History file *********/
function history_policyWording_CL(doc_type_id){
	
	datajson = {				        	
		"method" : "getHistoryPolicy",
		"doc_type_id" : doc_type_id,
		"cov_code" : $("#pass_Insurance_coverage_cl").val()
	}	
				
	$.ajax({
		 type: "POST",
	    url : "PolicyWording_Data_Servlet",
	    data: datajson,       
	    success : function(response) {	
	    	
	    	$("#tbl_HistoryPolicy_CL tbody>tr").remove();
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
					/*"<a href='download/"+fileName_pdf+"' download>"+fileName_pdf+"</a>" +*/
				"</td>"+
				"<td class='text-center'>" +
				"<a onclick=\"openFile_target(this,'"+file_ref_doc+"','doc')\" target='_blank'>"+fileName_doc+"</a>"+
					/*"<a href='download/"+filename_doc+"' download>"+filename_doc+"</a>" +*/
				"</td>"+
				/*"<!-- <td class='text-center'><a class='active_blue'><span class='glyphicon glyphicon-download-alt'></span></a></td>"+
				"<td class='text-center'><a class='active_blue'><span class='glyphicon glyphicon-download-alt'></span></a></td> -->"+	*/
			"</tr>"
				$("#tbl_HistoryPolicy_CL tbody").append(row)
	    	}
	    	
	    	
	    },
	 	error : function(response) {	
		 
	 	}
	})
	console.log("datajson",datajson)
	
}


/*เพิ่มรายการ*/
function addPolicyNew_CL(){	
	
	if($("#div_policyCL").innerHeight() > 792){
		$("#div_policyCL").addClass("scroll_policy");
	}
	
	var table = document.getElementById("Policy_Table_CL");		
	var TableRow = Number($("#Policy_Table_CL>tbody>tr").length)-1;
	var lastImgOKNew = table.getElementsByClassName("spanPolicy_CL");
	
	//alert(lastImgOKNew[TableRow].innerHTML);
	var numberImgOKNew = 0;
				
	if(lastImgOKNew == 0){
		numberImgOKNew = 1;
	}else{
		numberImgOKNew = Number(lastImgOKNew[TableRow].innerHTML)+1;
	}
		
	var lastImgOK = $('#Policy_Table_CL >tbody>tr:last>td:first').attr("id") || 0;
	var numberImgOK = 0;
				
	if(lastImgOK == 0){
		numberImgOK = 1;
	}else{
		numberImgOK = Number(lastImgOK.replace("imgOK_policy",""))+1;
	}
			
	var row = "";
	var pdfOnclick = "resetFilePolicy_CL("+numberImgOK+",'pdf');";
	var wordOnclick = 'resetFilePolicy_CL('+numberImgOK+',"word");';
	
	row = "<tr id='tbody_policy"+numberImgOK+"'>"+					    								
		  "<td id='imgOK_policy"+numberImgOK+"' class='text-center borderBlack'"+
		  "onclick='imgCheckbox_policy_CL("+numberImgOK+");' style='vertical-align: middle;'>" +
		  "<i class='glyphicon glyphicon-edit'></i></td>"+	
		  "<td class='text-center borderBlack' style='vertical-align: middle;'><span class='spanPolicy_CL' id='orderID"+numberImgOK+"'>"+numberImgOKNew+"</span></td>"+									
		  "<td class='borderBlack verticalCenter'><input type='text' name='policy_name[]' id='policy_name"+numberImgOK+"' class='form-control margin-padding0 text-center;'></td>"+									
		  "<td class='borderBlack' align='center'>"+
		  "<input type='hidden' id='fileId_pdf_CL"+numberImgOK+"'>"+
		  "<div class='input-group col-xs-12'>"+											
		  "<div id='div_pdf_policy"+numberImgOK+"_CL' class='filename'>None</div>"+
		  "<a class='open-AddUploadDialog_pdf' data-toggle='modal' data-id="+numberImgOK+" href='#modal_upload_pdf'>"+
		  "<button class='btn btn-default btn-primary' type='button' id='btn_pdf_policy"+numberImgOK+"_CL'>...</button></a>"+		
		  "</div>"+
		  "</td>"+
		  "<td class='text-center borderBlack vertical-middle'>"+
		  "<a id='span_reset_pdf"+numberImgOK+"' class='active_grey' onclick=\"resetFilePolicy_CL("+numberImgOK+",'pdf')\"><span class='glyphicon glyphicon-refresh'></span></a>"+
		  "</td>"+
		  "<td class='borderBlack' align='center'>"+
		  "<input type='hidden' id='fileId_doc_CL"+numberImgOK+"'>"+
		  "<div class='input-group col-xs-12'>"+
		  "<div id='div_word_policy"+numberImgOK+"_CL' class='filename'>None</div>"+
		  "<a class='open-AddUploadDialog_word' data-toggle='modal' data-id="+numberImgOK+" href='#modal_upload_word'><button class='btn btn-default btn-primary' type='button' id='btn_word_policy"+numberImgOK+"_CL'>...</button></a>"+		  
		  "</div>"+
		  "</td>"+
		  "<td class='text-center borderBlack vertical-middle'>"+
		  "<a id='span_reset_word"+numberImgOK+"' class='active_grey' onclick='"+wordOnclick+"'><span class='glyphicon glyphicon-refresh'></span></a>"+
		  "</td>"+									
		  /*"<td class='text-center borderBlack'>"+
		  "<a id='span_download"+numberImgOK+"' class='active_grey'><span class='glyphicon glyphicon-download-alt'></span></a>"+
	      "</td>"+*/
		  "<td class='text-center borderBlack vertical-middle'>"+
		  "<a id='span_history"+numberImgOK+"' class='active_grey open-HistoryDialog_CL' data-toggle='modal' data-id="+numberImgOK+" ><span class='glyphicon glyphicon-time'></span></a>"+										
		  "</td>"+										
		  "</tr>";
	
	
	$("#Policy_Table_CL tbody").append(row);
	nameTab 	= "menu_CL_7";
	Statuesave = "N";
	/*$('.auto').autoNumeric('init');*/
}

function imgCheckbox_policy_CL(id)
{
	var imgOK = "imgOK_policy"+id;
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

function confirmDeletePolicy_CL(){
	
	if($("#div_policyCL").innerHeight() > 792){
		$("#div_policyCL").addClass("scroll_policy");
	}else{
		$("#div_policyCL").removeClass("scroll_policy");
	}
	
	var imgOKcount = $("#Policy_Table_CL i.glyphicon-ok").length;
	if(imgOKcount <= 0)
	{	
		message = "กรุณาเลือกรายการที่ต้องการลบ";
		alertError(message);
	}else{
	
	message = "ต้องการลบรายการใช่หรือไม่";
	alertDeleteError(message);
	
	$("#btn_confirm_del").click(function(){
		var lastImgOK = $('#Policy_Table_CL >tbody>tr:last>td:first').attr("id") || 0;	
		var numberImgOK = 0;
		if(lastImgOK == 0){
			numberImgOK = 1;
		}else{
			numberImgOK = Number(lastImgOK.replace("imgOK_policy",""))+1;
		}
		
		for(var i = 1;i<=numberImgOK;i++)
			{
				var checked = $('#tbody_policy'+i+' >td:first>i').attr("class");
				if(checked == "glyphicon glyphicon-ok"){	
					deleteTableRow('#tbody_policy'+i);				
				}
				
		}
			
		  /*  create new order number in span*/
			var record_count = $("#Policy_Table_CL>tbody>tr").length;
			var table = document.getElementById("Policy_Table_CL");
			var spans = table.getElementsByClassName("spanPolicy_CL");
				for(var j = 0;j<record_count;j++){					
					 //alert(spans[j].innerHTML);				
						 spans[j].innerHTML = j+1;
							 						
				}			
				nameTab 	= "menu_CL_7";
				Statuesave = "N";
		});
			
	}
}

/*บันทึก policy*/
function bt_policy_CL_Confirm() {	
	var message = "";
	var error = 0;
	var record_count = $("#Policy_Table_CL>tbody>tr").length;			
	var policy_name = document.getElementsByName('policy_name[]');
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
		dataSave_PolicyWording();
		message = "บันทึกข้อมูลเรียบร้อย";
		alertSuccess(message);
		Statuesave = "Y";
	}
	
}

/*ยืนยันการลบ*/
function alertDeleteError(message)
{
    $('#txt_alert_delete_error').text(message);
    $('#modal_warning_delete').modal();
}

/*edit active*/
$("#btn_submit_fileuploadPolicy_CL,#btn_submit_fileuploadPolicyWord_CL,#span_reset_pdf1, #span_reset_word1").click(function(){
	nameTab 	= "menu_CL_7";
	Statuesave = "N";
});
$('#Policy_Table_CL').on('input', function(){
	nameTab 	= "menu_CL_7";
	Statuesave = "N";
});

$("#mainRisk *").change(function(){
	nameTab 	= "menu_CL_4";
	Statuesave = "N";
})

$("#benefitDetail_CL *").change(function(){
	nameTab 	= "menu_CL_5";
	Statuesave = "N";
})

/*show table*/
function getLayout_tax(rowTax, obj, cov_code){
	
	for(var j=0; j<obj.length;j++){
		var format1 = obj[0].layout+cov_code+".txt";
		var format2 = obj[1].layout+cov_code+".txt";
	}
	
	var tax_layout = format1+" หรือ "+format2;
	var tax_onclick = "selectFileTXT_CL(1,'fileuploads_Tax"+rowTax+"_CL','"+format1.replace('.txt','')+"','"+format2.replace('.txt','')+"','span_TaxOpen_"+rowTax+"')";
	
	$("#fileuploads_TaxText"+rowTax+"_CL").attr("placeholder", tax_layout);
	$("#fileuploads_Tax"+rowTax+"_CL").attr("onchange", tax_onclick);
}

function replaceLayout_tax(cov_code){
	var numrow = $("#tb_TaxReduce tbody>tr").length;
	for(var j=1; j<=numrow;j++){
		var get_format = $("#fileuploads_TaxText"+j+"_CL").attr("placeholder");
		var format_split = get_format.split("หรือ");
		
		var format1 = (jQuery.trim(format_split[0])).replace("_.txt","_"+cov_code+".txt");
		var format2 = (jQuery.trim(format_split[1])).replace("_.txt","_"+cov_code+".txt");
		
		var tax_layout = format1+" หรือ "+format2;
		var tax_onclick = "selectFileTXT_CL(1,'fileuploads_Tax"+j+"_CL','"+format1.replace('.txt','')+"','"+format2.replace('.txt','')+"','span_TaxOpen_"+j+"')";
		
		$("#fileuploads_TaxText"+j+"_CL").attr("placeholder", tax_layout);
		$("#fileuploads_Tax"+j+"_CL").attr("onchange", tax_onclick);
	}	
}

function show_basicInfo_data(response){
	/*1. Basic Info.*/
	/*mode*/	
	var baseplanCode = $("#pass_Insurance_coverage_cl").val();
	var row_BI = "";	
	for (i in response.Tab_Basic_Information[0].mode) {
		var obj_BI = response.Tab_Basic_Information[0].mode[i];
			row_BI = "<tr>"+
				  "<td><input name='mode_cl[]' id='mode"+i+"_cl' type='checkbox' value='"+obj_BI.value+"' onclick='check_mode_value(this.id,this.value);'></td>"+
				  "<td><label for='mode"+i+"_cl'>"+obj_BI.pass+"</label></td>"+
				  "<td><label for='mode"+i+"_cl'>"+obj_BI.text+"</label></td>"+
				  "</tr>";
					  
			$("#tbl_BI_Mode_CL tbody").append(row_BI);
	}
		
	/*filing channel*/	
	var row_FL = "";		
	for (i in response.Tab_Basic_Information[0].filing_Channel) {
		var obj_FL = response.Tab_Basic_Information[0].filing_Channel[i];
			row_FL = "<tr>"+
				  "<td><input type='checkbox' id='ch_filingCN"+i+"_CL' value='"+obj_FL.pass+"'></td>"+
				  "<td><label for='ch_filingCN"+i+"_CL'>&nbsp;&nbsp;"+obj_FL.text+"</label></td>"+				
				  "</tr>";
						  
			$("#tbl_BI_FilingCN_CL tbody").append(row_FL);
	}	

	/*sale channel*/	
	/*var row_SC = "";		
	for (i in response.sale_Channel) {
		  row_SC = "<tr>"+
			 "<td><input type='checkbox' id='ch_SaleCN"+i+"_CL' value='"+response.sale_Channel[i].pass+"' onclick='sale_Channel();' disabled></td>"+
			 "<td><label for='ch_SaleCN"+i+"_CL'>&nbsp;&nbsp;"+response.sale_Channel[i].text+"</label></td>"+				
			 "</tr>";
		  
		  $("#tbl_BI_SaleCN_CL tbody").append(row_SC);		  		  
	}*/
	
	/*สูตรคำนวนณอายุ*/
	var row_AgeCal = "";		
	for (i in response.Tab_Basic_Information[0].cal_Age) {
		var obj_AgeCal = response.Tab_Basic_Information[0].cal_Age[i];
		row_AgeCal = "<tr>"+
			 "<td><input type='checkbox' id='ch_AgeCal"+i+"_CL' value='"+obj_AgeCal.pass+"'></td>"+
			 "<td><label for='ch_AgeCal"+i+"_CL'>&nbsp;&nbsp;"+obj_AgeCal.text+"</label></td>"+				
			 "</tr>";
		  
		  $("#tbl_BI_AgeCal_CL tbody").append(row_AgeCal);		  		  
	}
	
	/*เบี้ยประกัน*/
	var list_IRPremium = "";		
	for (i in response.Tab_Basic_Information[0].insurance_premium) {
		var obj_IRPremium = response.Tab_Basic_Information[0].insurance_premium[i];
		list_IRPremium = "<option value='"+obj_IRPremium.pass+"'>"+obj_IRPremium.text+"</option>";
		  
		  $("#sl_insurance_premium_cl").append(list_IRPremium);		  		  
	}
	
	$("#sl_insurance_premium_cl option").each(function(){
		if($(this).val() == "EACH"){
			$(this).attr("selected", "selected");
		}
	});
		
	/*ประเภทความคุ้มครอง*/
	var list_coverageType = "";		
	for (i in response.Tab_Basic_Information[0].protect_Type) {
		var obj_coverageType = response.Tab_Basic_Information[0].protect_Type[i];
		list_coverageType = "<option value='"+obj_coverageType.pass+"'>"+obj_coverageType.text+"</option>";
		  $("#sl_coverage_type_cl").append(list_coverageType);		  		  
	}
	
	$("#sl_coverage_type_cl option").each(function(){
		if($(this).val() == "CURRENCY"){
			$(this).attr("selected", "selected");
		}
	});
	
	/*ประเภทสัญญา*/
	var list_contractType = "";		
	for (i in response.Tab_Basic_Information[0].contract_Type) {
		var obj_contractType = response.Tab_Basic_Information[0].contract_Type[i];
		list_contractType = "<option value='"+obj_contractType.pass+"'>"+obj_contractType.text+"</option>";
		  
		  $("#sl_contract_type_cl").append(list_contractType);		  		  
	}
	
	$("#sl_contract_type_cl option").each(function(){
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
			"<td class='borderBlack'><input id='ch_payment_"+jj+"' type='checkbox' onclick='ch_payment_fun("+jj+");' value='"+jj+"' disabled></td>"+
			"<td class='borderBlack'><label for='ch_payment_"+jj+"' id='lb_payment_"+jj+"'>"+jj+"</label></td>"+
			"<td class='borderBlack'>" +
			"<input id='set_Premium_Rate_"+jj+"' type='text' class='auto text-right form-control' onblur='check_value_payment("+jj+");' value='0.00' data-v-min='0.00' data-v-max='999.99' disabled='disabled'>" +
			"</td>"+
			"</tr>";			  
		$("#tb_Sperately_Pay tbody").append(tbl_row_periodLife);
		j++;
	}
	$('.auto').autoNumeric('init');
	  
	  /*ตารางมรณะที่ใช้ในการคำนวณอัตราเบี้ย*/
	  var tbl_row_deathPremium = "";
		for (i in response.Tab_Basic_Information[0].table_Death) {
			var obj_deathPremium = response.Tab_Basic_Information[0].table_Death[i];
			tbl_row_deathPremium = 
			"<tr id='tr_DeathCL"+i+"'>"+	
			"<td class='borderBlack text-center'><input id='ch_D_"+i+"' onclick='ch_Table_D("+i+");' type='checkbox' value='"+obj_deathPremium.pass+"' disabled></td>"+
			"<td class='borderBlack text-center'><label for='ch_D_"+i+"'>"+obj_deathPremium.text+"</label></td>"+
			/*"<td class=borderBlack text-right>"+
			"<input id='in_percent_D_"+i+"' type='text' class='auto text-right form-control' "+
			"'data-v-min='0' data-v-max='100' disabled='disabled'>"+
			"</td>"+*/
			"<td class='borderBlack' width='60%'><label id='textshow_tableD_"+i+"'></label><input type='hidden' name='hdd_mort_id' id='hdd_mort_id"+i+"' value=''></td>"+
			"<td class='borderBlack' width='5%' ><input disabled id ='btn_Adddata_D_"+i+"' type='button' class='btn btn-default btn-primary' value='...' onclick='showModal_Table_D("+i+");'></td>"+			  
			"</tr>";
			
			$("#tb_BasicInformation_Death tbody").append(tbl_row_deathPremium);
		}
		
		/*ตารางทุพพลภาพที่ใช้ในการคำนวณอัตราเบี้ย*/
		  var tbl_row_disabilityPremium = "";
			for (i in response.Tab_Basic_Information[0].table_Disability) {
				var obj_disabilityPremium = response.Tab_Basic_Information[0].table_Disability[i];
				tbl_row_disabilityPremium = 
				"<tr id='tr_TPDCL"+i+"'>"+
				"<td class='borderBlack text-center'><input id='ch_TPD_"+i+"' onclick='ch_Table_TPD("+i+");' value='"+obj_disabilityPremium.pass+"' type='checkbox' disabled>"+
				"</td>"+
				"<td class='borderBlack text-center'><label for='ch_TPD_"+i+"'>"+obj_disabilityPremium.text+"</label></td>"+
				/*"<td class='borderBlack text-right'>"+
				"<input id='in_percent_TPD_"+i+"'  type='text' class='auto text-right form-control' data-v-min='0' data-v-max='100' disabled'>"+
				"</td>"+*/
				"<td width='60%' class='borderBlack'><label id='textshow_tableTPD_"+i+"'></label><input type='hidden' name='hdd_tpd_id' id='hdd_tpd_id"+i+"' value=''></td>"+
				"<td  width='5%' class='borderBlack'><input disabled type='button' id ='btn_Adddata_TPD_"+i+"' class='btn btn-default btn-primary' value='...' onclick='showModal_Table_TPD("+i+");'></td>"+
				"</tr>";
				
				$("#tb_BasicInformation_TPD tbody").append(tbl_row_disabilityPremium);
			}

			//สร้างข้อมูล ตารางมรณะ modal		
			$("#mo_Table_D_CL tbody").find("tr").remove();			
			var tbl_death_modal = "";
			for (i in response.Tab_Basic_Information[0].table_Death2) {
				var obj_death_modal = response.Tab_Basic_Information[0].table_Death2[i];						
				tbl_death_modal = "<tr>" +	
						"<td  class='borderBlack' width='5%' align='center'><input onclick='ra_table_D ("+i+")' id='ra_table_D_"+i+"' value="+obj_death_modal.pass+" type='radio' name='check_D'></td>"+
						"<td  class='borderBlack' width='95%'><Label id='text_Table_D_"+i+"' for='ra_table_D_"+i+"'>"+obj_death_modal.text+"</Label></td>"+
					"</tr>";			  
				$("#mo_Table_D_CL tbody").append(tbl_death_modal);
			}
			
			//สร้างสร้างข้อมูล ตารางทุพพลภาพ	modal		
			$("#mo_Table_TPD_CL tbody").find("tr").remove();
			var tbl_disability_modal = "";
			for (i in response.Tab_Basic_Information[0].table_Disability2) {
			var obj_disability_modal = response.Tab_Basic_Information[0].table_Disability2[i];	
			tbl_disability_modal = "<tr>" +	
						"<td  class='borderBlack' width='5%' align='center'><input onclick='ra_table_TPD ("+i+")' id='ra_table_TPD_"+i+"' value="+obj_disability_modal.pass+" type='radio' name='check_TPD'></td>"+
						"<td  class='borderBlack' width='95%'><Label id='text_Table_TPD_"+i+"' for='ra_table_TPD_"+i+"'>"+obj_disability_modal.text+"</Label></td>"+
					  "</tr>";			  
				$("#mo_Table_TPD_CL tbody").append(tbl_disability_modal);
			}
			
			/*ตารางลดหย่อนภาษี*/
			var tbl_row_taxDeduction = "";
			var rowTax = "";
			for(i in response.Tab_Basic_Information[0].table_TaxReduce[0]){
				rowTax++;
				var obj_taxDeduction = response.Tab_Basic_Information[0].table_TaxReduce[0][i][0];
				
				tbl_row_taxDeduction = 
					"<tr id='tbody_TaxReduce_"+rowTax+"' data-id="+obj_taxDeduction.rate_cat_id+">"+
						"<td id='td_TaxReduce_"+rowTax+"' width='5%' class='borderBlack' style='background-color: gray;'></td>"+
						"<td width='25%' class='borderBlack'><label>"+obj_taxDeduction.text+"</label>"+
							"<input id='topics_Tax_"+rowTax+"' value='"+obj_taxDeduction.rate_cat_id+"' type='hidden'>"+
						"</td>"+
						"<td width='55%' class='borderBlack'>"+
						"<input name='tax_type[]' id='tax_type"+rowTax+"' value='"+obj_taxDeduction.rate_cat_id+"' type='hidden'>"+
							"<div class='input-group'>"+
							"<input type='text' class='form-control' id='fileuploads_TaxText"+rowTax+"_CL' readonly=''>"+
							"<label class='input-group-btn'>"+ 
							"<span id='spanTax"+rowTax+"_CL' class='btn btn-primary'>..."+
							"<input id='fileuploads_Tax"+rowTax+"_CL' type='file' accept='text/plain' style='display: none;'>"+ 
							"</span>"+
							"</label>"+
							"</div>"+
							"<input type='hidden' name='hdd_rateSub' id='hdd_rateSub"+rowTax+"' value='"+obj_taxDeduction.sub_rate_cat+"'>"+
							"<input type='hidden' name='hdd_layoutID' id='hdd_layoutID"+rowTax+"' value=''>"+
							"<input type='hidden' name='hdd_fileID' id='hdd_fileID"+rowTax+"' value=''>"+
							"<input type='hidden' id='base64_fileTXT_CL' value=''>"+
							
					   "</td>"+
					   "<td width='8%' class='borderBlack'>"+
							"<a id='span_TaxDel_"+rowTax+"' class='active_grey' onclick='reset_fileTax("+rowTax+");'>"+
								"<span class='glyphicon glyphicon-refresh activecolorgray'></span>"+
							"</a>"+
						"</td>"+
						"<td width='8%' class='borderBlack'>"+
							"<a id='span_TaxOpen_"+rowTax+"' class='active_grey'>"+
								"<span class='glyphicon glyphicon-eye-open activecolorgray'></span>"+
							"</a>"+
						"</td>"+
						"<td width='7%' class='borderBlack'>"+
							"<a id='span_Taxdownload_"+rowTax+"' class='active_grey'>"+
								"<span class='glyphicon glyphicon-download-alt activecolorgray'></span>"+
							"</a>"+
						"</td>"+
					"</tr>";
				
				$("#tb_TaxReduce tbody").append(tbl_row_taxDeduction);
				
				/*ลดหย่อนภาษี*/
				getLayout_tax(rowTax, obj_taxDeduction.file, baseplanCode);			 	
			}	
			
			// ค่าเริ่มต้นตาม User
			$("#ch_male_cl").prop("checked", true);
			$("#ch_female_cl").prop("checked", true);

			if($("#ch_male_cl").prop("checked") == true || $("#ch_female_cl").prop("checked") == true){
				$("#validate_input11_cl").hide();
				$("#tb_BasicInformation_Death tbody td:nth-child(1) input:checkbox").attr("disabled", false);
				$("#tb_BasicInformation_TPD tbody td:nth-child(1) input:checkbox").attr("disabled", false);
			}else{
				$("#validate_input11_cl").show();
				$("#tb_BasicInformation_Death tbody td:nth-child(1) input:checkbox").attr("disabled", true);
				$("#tb_BasicInformation_TPD tbody td:nth-child(1) input:checkbox").attr("disabled", true);
			}
			
			if($("#tb_BasicInformation1 tbody>tr").length <= 0){
				addRowBasicInformation1();
				
				$("#tb_BasicInformation1 tbody>tr").addClass("disabledAll");
			}
}	

function show_policyWording_data(response){
	var list_policy = "";	
	var j = 0;
	for (i in response.Tab_Policy_Wording) {
		var obj_policy = response.Tab_Policy_Wording[i];
		j++;
		list_policy = "<tr id='tbody_policy"+j+"' data-id='"+obj_policy.pass+"'>"+
					  "<td id='imgOK_policy"+j+"' class='text-center borderBlack td_disabled'></td>"+
					  "<td class='text-center borderBlack' style='vertical-align: middle;'><span class='spanPolicy_CL' id='OrderID"+j+"'>"+j+"</span></td>"+									
					  "<td class='borderBlack verticalCenter'><input type='text' name='policy_name[]' id='policy_name"+j+"' class='form-control margin-padding0 text-center;' value='"+obj_policy.text+"' readonly></td>"+									
					  "<td class='borderBlack' align='center'>"+
					  "<input type='hidden' id='fileId_pdf_CL"+j+"'>"+
					  "<div class='input-group col-xs-12'>"+
					  	"<div id='div_pdf_policy"+j+"_CL' class='filename'>None</div>"+		
							"<a class='open-AddUploadDialog_pdf' data-toggle='modal' data-id='"+j+"' href='#modal_upload_pdf'><button class='btn btn-default btn-primary' type='button' onclick='oldFile_policyWording_CL("+obj_policy.pass+",2);' id='btn_pdf_policy"+j+"_CL'>...</button></a>"+ 									
					  "</div>"+
					 "</td>"+
					 "<td class='text-center borderBlack vertical-middle'>"+
						"<a id='span_reset_pdf"+j+"' class='active_grey' onclick=\"resetFilePolicy_CL("+j+",'pdf');\"><span class='glyphicon glyphicon-refresh'></span></a>"+
					 "</td>"+
					 "<td class='borderBlack' align='center'>"+
					 "<input type='hidden' id='fileId_doc_CL"+j+"'>"+
						"<div class='input-group col-xs-12'>"+
							"<div id='div_word_policy"+j+"_CL' class='filename'>None</div>"+
							"<a class='open-AddUploadDialog_word' data-toggle='modal' data-id='"+j+"' href='#modal_upload_word'><button class='btn btn-default btn-primary' type='button' id='btn_word_policy"+j+"_CL' onclick='oldFile_policyWording_CL("+obj_policy.pass+",1);'>...</button></a>"+									
						"</div>"+
					 "</td>"+
					 "<td class='text-center borderBlack vertical-middle'>"+
						"<a id='span_reset_word"+j+"' class='active_grey' onclick=\"resetFilePolicy_CL("+j+",'word');\"><span class='glyphicon glyphicon-refresh'></span></a>"+
					 "</td>"+									
					 "<td class='text-center borderBlack vertical-middle'>"+
						"<a id='span_history"+j+"' class='active_grey open-HistoryDialog_CL' onclick='history_policyWording_CL("+obj_policy.pass+")' data-toggle='modal' data-id='"+j+"'><span class='glyphicon glyphicon-time'></span></a>"+										
					 "</td>"+										
					 "</tr>";
		  
		  $("#Policy_Table_CL tbody").append(list_policy);		  		  
	}	
}

function show_privilege_insurance_data(response){
	var list_ETI = "";	
	for (i in response.Tab_exercise_rights_insurance[0].ETI) {
		var obj_ETI = response.Tab_exercise_rights_insurance[0].ETI[i];
		list_ETI = "<option value="+obj_ETI.pass+">"+obj_ETI.text+"</option>";
		  
		$("#sel_ETI_cl").append(list_ETI);		  		  
	}
	
	var list_AutoETI = "";	
	for (i in response.Tab_exercise_rights_insurance[0].Auto_ETI) {
		var obj_AutoETI = response.Tab_exercise_rights_insurance[0].Auto_ETI[i];
		list_AutoETI = "<option value="+obj_AutoETI.pass+">"+obj_AutoETI.text+"</option>";
		  
		$("#sel_AutoETI_cl").append(list_AutoETI);		  		  
	}
	
	var list_ETITo = "";	
	for (i in response.Tab_exercise_rights_insurance[0].ETI_To) {
		var obj_ETITo = response.Tab_exercise_rights_insurance[0].ETI_To[i];
		list_ETITo = "<option value="+obj_ETITo.pass+">"+obj_ETITo.text+"</option>";
		  
		$("#sel_PhaseETI_cl").append(list_ETITo);		  		  
	}
	
	var list_calendar = "";	
	for (i in response.Tab_exercise_rights_insurance[0].calendar) {
		var obj_ETITo = response.Tab_exercise_rights_insurance[0].calendar[i];
		list_calendar = "<option value="+obj_ETITo.pass+">"+obj_ETITo.text+"</option>";
		  
		$("#dmy_2_1_cl,#dmy_2_2_cl").append(list_ETITo);		  		  
	}
	
	var list_RPU = "";	
	for (i in response.Tab_exercise_rights_insurance[0].RPU) {
		var obj_RPU = response.Tab_exercise_rights_insurance[0].RPU[i];
		list_RPU = "<option value="+obj_RPU.pass+">"+obj_RPU.text+"</option>";
		  
		$("#sel_RPU_cl").append(list_RPU);		  		  
	}
	
	var list_AutoRPU = "";	
	for (i in response.Tab_exercise_rights_insurance[0].Auto_RPU) {
		var obj_AutoRPU = response.Tab_exercise_rights_insurance[0].Auto_RPU[i];
		list_AutoRPU = "<option value="+obj_AutoRPU.pass+">"+obj_AutoRPU.text+"</option>";
		  
		$("#sel_AutoRPU_cl").append(list_AutoRPU);		  		  
	}
	
	var list_RPUTo = "";	
	for (i in response.Tab_exercise_rights_insurance[0].RPU_To) {
		var obj_RPUTo = response.Tab_exercise_rights_insurance[0].RPU_To[i];
		list_RPUTo = "<option value="+obj_RPUTo.pass+">"+obj_RPUTo.text+"</option>";
		  
		$("#sel_PhaseRPU_cl").append(list_RPUTo);		  		  
	}
}

function show_cal_premium_data(response){
	var list_AgeBand = "";	
	var j = 0;
	for (i in response.Tab_cal_insurance_premiums[0].age_Band) {
		j++;
		var obj_AgeBand = response.Tab_cal_insurance_premiums[0].age_Band[i];
		list_AgeBand = "<tr id='tr_AgeBand"+j+"'>"+
					   "<td class='borderBlack' style='vertical-align: middle;'><input type='checkbox' id='imgOK_ageBand"+j+"' value='"+obj_AgeBand.Band+"' onclick='select_AgeBand("+j+")'></td>"+
					   "<td class='borderBlack'>"+obj_AgeBand.Band+"</td>"+
					   "<td class='borderBlack'>"+obj_AgeBand.text+"</td>"+
					   "</tr>";
		  
		$("#tb_Age_Band tbody").append(list_AgeBand);		  		  
	}
	
	$("#div_Age_Band *").attr("disabled", "disabled").off('click');

	var list_STDRate = "";	
	for (i in response.Tab_cal_insurance_premiums[0].selectbox_Std_Premiums[0].specific) {
		var obj_STDRate = response.Tab_cal_insurance_premiums[0].selectbox_Std_Premiums[0].specific[i];
		list_STDRate = "<option value='"+obj_STDRate.layout+"' data-subcat='"+obj_STDRate.sub_rate_cat+"'>"+obj_STDRate.text+"</option>";
		  
		$("#sl_menu3_insurance_premium_cl").append(list_STDRate);		  		  
	}
	
	/*PM type*/
	var pmRate = [];
	for (i in response.Tab_cal_insurance_premiums[0].PM_Type_premium) {
		var obj_PMType = response.Tab_cal_insurance_premiums[0].PM_Type_premium[i];
		pmRate.push(obj_PMType.name);	
	}
	$("#PMrate_type_CL").val(pmRate);
	/*var list_PMRate = "";		  
	for (i in response.Tab_cal_insurance_premiums[0].select_pm_Rate) {
		var obj_PMRate = response.Tab_cal_insurance_premiums[0].select_pm_Rate[i];
		list_PMRate = "<option value="+obj_PMRate.pass+">"+obj_PMRate.text+"</option>";
		  
		$(".sl_STD_PM_Rate").append(list_PMRate);		  		  
	}*/
	
	var list_ExtraRate = "";	
	for (i in response.Tab_cal_insurance_premiums[0].selectbox_Extra_Premiums) {
		var obj_ExtraRate = response.Tab_cal_insurance_premiums[0].selectbox_Extra_Premiums[i];
		list_ExtraRate = "<option value='"+obj_ExtraRate.pattern[0].layout+"' data-subcat='"+obj_ExtraRate.pattern[1].sub_rate_cat+"'>"+obj_ExtraRate.pattern[2].text+"</option>";
		  
		$("#sl_insurance_premium_Extra_cl").append(list_ExtraRate);		  		  
	}
	
	var list_CLRate = "";	
	for (i in response.Tab_cal_insurance_premiums[0].sa_Rate) {
		var obj_CLRate = response.Tab_cal_insurance_premiums[0].sa_Rate[i];
		list_CLRate = "<option value='"+obj_CLRate.pattern[0].layout+"' data-subcat='"+obj_CLRate.pattern[1].sub_rate_cat+"'>"+obj_CLRate.pattern[2].text+"</option>";
		  
		$("#sl_Reduced_capital_Cal2_CL").append(list_CLRate);		  		  
	}
	
	var baseplanCode = $("#baseplanCode_CL").val();
	var list_EM = "";	
	for (i in response.Tab_cal_insurance_premiums[0].em_Age) {
		var obj_EM = response.Tab_cal_insurance_premiums[0].em_Age[i].pattern[0].layout;
		list_EM = obj_EM+baseplanCode+".txt";
		selectTypeCal_CL(list_EM,1);
		
		$("#spanBoxCal1_CL").attr("disabled",true);	  		  
	}

	selectTypeCal_CL("",2);
	$("#spanBoxCal2_CL").attr("disabled",true);
	
	/*PM Rate*/
	var tb_pmRate_hidden = "<input type='hidden' id='rm_rateLayout1' value=''>"+
							"<input type='hidden' id='rm_fileID1' value=''>";
	$("#div_filePM1_CL").append(tb_pmRate_hidden)
	
	/** set Rate Cat ID**/
	/*PM Rate*/
	$("#rateCat_tbStardard").val(response.Tab_cal_insurance_premiums[0].tb_premiums.premiums_cal_layout_0[0].rate_cat_id_specific);
	$("#rateCat_tbStardard_age").val(response.Tab_cal_insurance_premiums[0].tb_premiums.premiums_cal_layout_0[0].rate_cat_id_age_Band);
	/*Extra Rate*/
	$("#rateCat_tbExtra").val(response.Tab_cal_insurance_premiums[0].tb_premiums.premiums_cal_layout_1[0].rate_cat_id_specific);
	/*EM*/
	$("#rateCat_inputEM").val(response.Tab_cal_insurance_premiums[0].tb_premiums.premiums_cal_layout_2[0].rate_cat_id_specific);
	$("#rateSubCat_inputEM").val(response.Tab_cal_insurance_premiums[0].em_Age[0].pattern[1].sub_rate_cat);
	$("#pattern_inputEM").val(response.Tab_cal_insurance_premiums[0].em_Age[0].pattern[0].layout);
	/*SA*/
	$("#rateCat_inputSA").val(response.Tab_cal_insurance_premiums[0].tb_premiums.premiums_cal_layout_3[0].rate_cat_id_specific);
		
	/*EM*/
	var tb_em_hidden = "<input type='hidden' id='em_rateLayout1' value=''>"+
	"<input type='hidden' id='em_fileID1' value=''>";

	$("#div_fileCal1_CL").append(tb_em_hidden);
	
	/*SA*/		
	var tb_decrease_hidden =
		"<input type='hidden' id='decrease_rateLayout2' value=''>"+
		"<input type='hidden' id='decrease_fileID2' value=''>";
	
	$("#div_fileCal2_CL").append(tb_decrease_hidden);	
}

function show_PolicyValue_data(response){
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
		  
		$("#dbBox1_CL").append(list_Risk);		  		  
	}
	
	$("#cv_rate_Agespecific").val(response.Tab_table_policy_value[0].standard_risk[0].rate_cat_id_specific);
	$("#cv_rate_AgeBand").val(response.Tab_table_policy_value[0].standard_risk[0].rate_cat_id_age_Band);
	
	var list_NoRisk = "";
	for (i in response.Tab_table_policy_value[0].selectbox_standard_risk_row) {
		var obj_ExtraRate = response.Tab_table_policy_value[0].selectbox_standard_risk_row[i];
		list_NoRisk = "<option value='"+obj_ExtraRate.pattern[0].layout+"' data-subcat='"+obj_ExtraRate.pattern[1].sub_rate_cat+"'>"+obj_ExtraRate.pattern[2].text+"</option>";
		  
		$("#dbBox2_CL").append(list_NoRisk);		  		  
	}
	
	var tb_cv_hidden = "<input type='hidden' id='cvLow_rateCat2' value='"+response.Tab_table_policy_value[0].standard_risk_row[0].rate_cat_id_specific+"'>"+
	"<input type='hidden' id='cvLow_rateLayout2' value=''>"+
	"<input type='hidden' id='cvLow_fileID2' value=''>";
	
	$("#row_cvLow_file").append(tb_cv_hidden);
	
}

function show_BenefitValue_data(response){
	$("#tbody_dieL_CL0, #tbody_dieR_CL0").hide();
	
	var list_Unit = "";
	for (i in response.Tab_Benefits[0].die[0].die_calendar) {
		var obj_Unit = response.Tab_Benefits[0].die[0].die_calendar[i];
		list_Unit = "<option value='"+obj_Unit.pass+"'>"+obj_Unit.text+"</option>";
		  
		$(".die_unit").append(list_Unit);		  		  
	}
	
	$(".die_unit option:contains('ปี')").attr("selected", "selected");
	
	var list_SA1 = "";
	for (i in response.Tab_Benefits[0].die[0].die_unit) {
		var obj_SA1 = response.Tab_Benefits[0].die[0].die_unit[i];
		list_SA1 = "<option value='"+obj_SA1.pass+"'>"+obj_SA1.text+"</option>";
		  
		$(".SA_Value").append(list_SA1);		  		  
	}
	
	var list_SA2 = "";
	for (i in response.Tab_Benefits[0].die[0].die_sa) {
		var obj_SA2 = response.Tab_Benefits[0].die[0].die_sa[i];
		list_SA2 = "<option value='"+obj_SA2.pass+"'>"+obj_SA2.text+"</option>";
		  
		$(".SA_Unit").append(list_SA2);		  		  
	}
	
	var tb_disabled = "";
	var j = 0;
	for (i in response.Tab_Benefits[0].permanent_disability) {
		var obj_tb_disabled = response.Tab_Benefits[0].permanent_disability[i];
		j++;
		list_tb_disabled = "<tr id='tbody_disabled"+j+"'>"+
						   	"<td id='imgOKDel_disabled"+j+"' class='text-center borderBlack td_disabled'></td>"+
						   	"<td class='text-center borderBlack' style='vertical-align: middle;'><input type='checkbox' id='imgOK_disabled"+j+"'value='"+obj_tb_disabled.pass+"'onclick='imgCheckbox_disabled("+j+");'></td>"+									
						   	"<td class='borderBlack verticalCenter'><input type='text' name='disabled_name"+j+"' id='disabled_name"+j+"' class='form-control margin-padding0 text-center;' value='"+obj_tb_disabled.text+"' readonly></td>"+									
						   	"<td class='borderBlack' align='center'><input id='disabled_amount"+j+"' type='text' class='auto form-control margin-padding0 text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999.99' disabled></td>"+											
						   "</tr>";
		  
		$("#Disabled_Table tbody").append(list_tb_disabled);	
		$('.auto').autoNumeric('init');
	}
	
	$("#Disabled_Table tbody>tr:first-child").remove();
}

/*คำนวณเบี้ยประกัน By Khwan*/
$("#ch_insurance_premium_ageBand_cl").click(function(){
	if($(this).prop('checked') == true){
		$("#div_Age_Band *").attr("disabled", false);
		
		if($("#ch_standard_premium_cl").prop('checked') == false){
			$("#ch_standard_premium_cl").prop('checked',true);
			
			$("#rd_cal_insurance_cl").prop("disabled",false);
			$("#rd_cal_insurance_cl").prop( "checked", true );
			$('#sl_menu3_insurance_premium_cl').prop("disabled",false);
			$('#ch_importInsurance_cl').prop("disabled",false);
			$('#discountInsurancePremiumsSta').prop("disabled",false);
			$('#discountInsurancePremiumsTo').prop("disabled",false); 
			
			/*ปิดปุ่ม add row*/
			var num_dd = $("#tb_PM_Rate1>tbody>tr[data-level='1']:first>td:nth-child(2) select>option[value!='NONE']").length;
			var numrow_tbl = $("#tb_PM_Rate1>tbody>tr[data-level='1']").length;
			if(numrow_tbl == num_dd){
				$("#addrowPM_Rate").attr("disabled", true);
			}
		}
		
	}else{
		$("#tb_Age_Band tbody>tr").each(function(){
			if($(this).find('input[type="checkbox"]').prop("checked")){
				var band_select = $(this).attr('id');
					band_select = Number(band_select.replace("tr_AgeBand",""));
					unselect_AgeBand(band_select);
			}
		});
		
		$("#div_Age_Band *").attr("disabled", "disabled").off("click");
		$("#div_Age_Band input:checkbox").prop("checked", false);
	}
	
});

$("#ch_importInsurance_cl").click(function(){
	if($(this).prop("checked") == true){
		$('#discountInsurancePremiumsSta, #discountInsurancePremiumsTo').prop("disabled",false);
	}else{
		$('#discountInsurancePremiumsSta,#discountInsurancePremiumsTo').prop("disabled",true);
		$("#discountInsurancePremiumsSta, #discountInsurancePremiumsTo").val("0.00");
	}
});

$(document).on('focusin', '#sl_menu3_insurance_premium_cl', function(){
	    //console.log("Saving value " + $(this).val());
	    $(this).data('val', $(this).val());
	}).on('change','#sl_menu3_insurance_premium_cl', function(){
		var prev_rate = $(this).data('val');
		var current_rate = $(this).val();
	    //console.log("Prev value " + prev_rate);
	   // console.log("New value " + current_rate);
	    
		/*ปิดปุ่ม add row*/
		var num_dd = $("#tb_PM_Rate1>tbody>tr[data-level='1']:first>td:nth-child(2) select>option[value!='NONE']").length;
		var numrow_tbl = $("#tb_PM_Rate1>tbody>tr[data-level='1']").length;
		if(numrow_tbl != num_dd){
			$("#addrowPM_Rate").attr("disabled", false);
			
		}
		$("#delrowPM_Rate").prop("disabled", false);
		
		var select_text = $("#sl_menu3_insurance_premium_cl option:selected").text();
		var selectPM_text = $("#tb_PM_Rate1 tbody>tr>td:nth-child(2)>select").find("option:selected").text();
		
		if(select_text != "None" || $(this).val() != "NONE"){
			$("#tb_PM_Rate1 tbody>tr>td:nth-child(2)>select").prop("disabled", false);
			$("#tb_PM_Rate1 tbody>tr:nth-child(1)>td:nth-child(2)>select option").prop("disabled", false);
			
			if(selectPM_text != "None"){
				var check_file = 0;
				$("#tb_PM_Rate1>tbody td:nth-child(3) :input[type='text']").each(function(index) {
					if($(this).val() != ""){
						check_file++;
					}
				});
				
				if(check_file > 0){					
					message = "เคยนำเข้าไฟล์ PM_Rate ไว้แล้ว ต้องการเปลี่ยนตารางเบี้ยประกัน ใช่หรือไม่";
					alertValuePage_Warning2(message);

					$("#btn_value_warning_submit2").click(function(){
						check_file_layout("", prev_rate);
					});
					
					$("#btn_value_warning_cancel2").click(function(){	
						
						 $("#modal_value_warning2").modal('hide');
						 $("#sl_menu3_insurance_premium_cl").val(prev_rate).attr('selected', 'selected');
				     });
					
				}else{
					check_file_layout("", prev_rate);
				}				
			}
			
		}else{
			var check_file = 0;
			$("#tb_PM_Rate1>tbody td:nth-child(3) input[type='text']").each(function(index) {
				if($(this).val() != ""){
					check_file++;
				}
			});
			
			if(check_file > 0){					
				message = "เคยนำเข้าไฟล์ PM_Rate ไว้แล้ว ต้องการเปลี่ยนตารางเบี้ยประกัน ใช่หรือไม่";
				alertValuePage_Warning2(message);

				$("#btn_value_warning_submit2").click(function(){
					$("#tb_PM_Rate1 tbody>tr>td:nth-child(3) input[type='text']").val("");
					$("#tb_PM_Rate1 tbody>tr>td:nth-child(3) input[type='file']").val(null);
					$("#tb_PM_Rate1 tbody>tr>td:nth-child(2)>select").prop("disabled", true);
					$("#tb_PM_Rate1 tbody>tr>td:nth-child(3) input[type='file']").prop("disabled", true);
					$("#tb_PM_Rate1 tbody>tr>td:nth-child(2)>select>option:contains('None')").attr('selected', 'selected');
					$("#tb_PM_Rate1 tbody>tr>td:nth-child(3) input[type='text']").attr("placeholder", "");
					$("#tb_PM_Rate1 tbody>tr>td:nth-child(3) *").prop("disabled", true);
					$("#tb_PM_Rate1 tbody>tr>td:nth-child(3) span").attr('disabled', true);
					$("#tb_PM_Rate1 tbody>tr>td:nth-child(3) font").css('display', "none");
					$("#tb_PM_Rate1 tbody>tr>td:nth-child(4) span").removeClass("activecolorblue").addClass("activecolorgray");
					$("#tb_PM_Rate1 tbody>tr>td:nth-child(5) span").removeClass("activecolorblue").addClass("activecolorgray");
					
					$("#tb_Extra_Rate tbody>tr").remove();
					
					/*ความเสี่ยงมาตรฐาน*/
					$("#dbBox1_CL option:contains('None')").attr('selected', 'selected');
					
					$("#tb_RateValue1 tbody>tr").each(function(){
						var level = $(this).data("level");
						if(level == 1){
							$(this).find("td:nth-child(1) label").text("None");
						}	
												
						$(this).find("td:nth-child(2) font").css("display", "none");
						$(this).find("td:nth-child(2) input:text").val("");
						$(this).find("td:nth-child(2) input:text").attr("placeholder","");
						$(this).find("td:nth-child(2) span").attr("disabled", true);
						$(this).find("td:nth-child(2) input:file").attr("disabled", true);
						$(this).find("td:nth-child(2) input:file").removeAttr("onchange");
						$(this).find("td:nth-child(3) span").removeClass("activecolorblue").addClass("activecolorgray");
						$(this).find("td:nth-child(4) span").removeClass("activecolorblue").addClass("activecolorgray")
						
					});
					
				});
				
				$("#btn_value_warning_cancel2").click(function(){	
					
					 $("#modal_value_warning2").modal('hide');
					 $("#sl_menu3_insurance_premium_cl").val(prev_rate).attr('selected', 'selected');
			     });
				
			}else{
				$("#tb_PM_Rate1 tbody>tr>td:nth-child(3) input[type='text']").val("");
				$("#tb_PM_Rate1 tbody>tr>td:nth-child(3) input[type='file']").val(null);
				$("#tb_PM_Rate1 tbody>tr>td:nth-child(2)>select").prop("disabled", true);
				$("#tb_PM_Rate1 tbody>tr>td:nth-child(3) input[type='file']").prop("disabled", true);
				$("#tb_PM_Rate1 tbody>tr>td:nth-child(2)>select>option:contains('None')").attr('selected', 'selected');
				$("#tb_PM_Rate1 tbody>tr>td:nth-child(3) input[type='text']").attr("placeholder", "");
				$("#tb_PM_Rate1 tbody>tr>td:nth-child(3) *").prop("disabled", true);
				$("#tb_PM_Rate1 tbody>tr>td:nth-child(3) span").attr('disabled', true);
				$("#tb_PM_Rate1 tbody>tr>td:nth-child(3) font").css('display', "none");
				$("#tb_PM_Rate1 tbody>tr>td:nth-child(4) span").removeClass("activecolorblue").addClass("activecolorgray");
				$("#tb_PM_Rate1 tbody>tr>td:nth-child(5) span").removeClass("activecolorblue").addClass("activecolorgray");
			
				/*ความเสี่ยงมาตรฐาน*/
				$("#dbBox1_CL option:contains('None')").attr('selected', 'selected');
				
				$("#tb_RateValue1 tbody>tr").each(function(){
					var level = $(this).data("level");
					if(level == 1){
						$(this).find("td:nth-child(1) label").text("None");
					}	
											
					$(this).find("td:nth-child(2) font").css("display", "none");
					$(this).find("td:nth-child(2) input:text").val("");
					$(this).find("td:nth-child(2) input:text").attr("placeholder","");
					$(this).find("td:nth-child(2) span").attr("disabled", true);
					$(this).find("td:nth-child(2) input:file").attr("disabled", true);
					$(this).find("td:nth-child(2) input:file").removeAttr("onchange");
					$(this).find("td:nth-child(3) span").removeClass("activecolorblue").addClass("activecolorgray");
					$(this).find("td:nth-child(4) span").removeClass("activecolorblue").addClass("activecolorgray")
					
				});
			
			}			
						
		}
});

function check_file_layout(id,rate){
	var select_text = jQuery.trim($("#sl_menu3_insurance_premium_cl option:selected").text());
	var select_text_value = $("#sl_menu3_insurance_premium_cl option:selected").val();
	var select_text2 = jQuery.trim($("#dbBox1_CL option:selected").text());
	var select_text2_value = $("#dbBox1_CL option:selected").val();
	var numrow = $("#tb_PM_Rate1>tbody>tr[data-level='1']").length;
	var file_layout = "";
	var file_layout2 = "";
	var baseplanCode_CL = $("#pass_Insurance_coverage_cl").val();
	var tr_group = "";
	var tr_group2 = "";
	
	if(id != ""){
		var ddID = Number(id.replace("sl_PM_Type_CL",""));
		var val_select = $("#sl_PM_Type_CL"+ddID+" option:selected").text();
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
	
	var tbl_name = "tbl_PMRatePlan_CL";
	var tblAuto_name = "tbl_PMRatePlanAuto_CL";
	
	var prev = "";
	var current = "";
	/**/
	$(document).on('focusin', '#sl_PM_Type_CL'+ddID, function(){
	    $(this).data('val', $(this).val());
	}).on('change','#sl_PM_Type_CL'+ddID, function(){
	    prev = $(this).data('val');
	    current = $(this).val();
	    /*console.log("id>"+$(this).attr('id')+ " prev value" + prev);
		console.log("id>"+$(this).attr('id')+ " New value " + current);*/
	});
	/**/
	
	if(id != ""){
		if(($("#fileuploads_PMRateText"+ddID+"_CL").val() != "")){
			message = "เคยนำเข้าไฟล์ PM_Rate ไว้แล้ว ต้องการเปลี่ยนตารางเบี้ยประกัน ใช่หรือไม่";
			alertValuePage_Warning(message);
			
			$("#btn_value_warning_submit").click(function(){
				if(arrDuplicate != ""){
					message = "ไม่สามารถเลือกประเภท PM Rate ซ้ำได้";
					alertError(message);
					
					$("#sl_PM_Type_CL"+ddID+" option:contains('None')").attr('selected', 'selected');
					$("#tbody_PM_Rate"+ddID+">td:nth-child(3) *").prop('disabled', true);
					$("#tbody_PM_Rate"+ddID+">td:nth-child(3) input[type='text']").attr("placeholder", "");
					
					$("#tb_PM_Rate1>tbody>tr[data-group='"+ddID+"']>td:nth-child(3) *").prop('disabled', true);
					$("#tb_PM_Rate1>tbody>tr[data-group='"+ddID+"']>td:nth-child(3) input[type='text']").attr("placeholder", "");
					$("#tbody_PM_Rate"+ddID+">td:nth-child(3) span").attr('disabled', true);
					$("#validate_rate"+ddID+"_CL").css('display', 'inline-block');
					$("#tbody_PM_Rate"+ddID+">td:nth-child(4) a").removeClass("open-PremiumRateDialog_CL");
					$("#tbody_PM_Rate"+ddID+">td:nth-child(4) span").removeClass("activecolorblue").addClass("activecolorgray");
					$("#tbody_PM_Rate"+ddID+">td:nth-child(5) span").removeClass("activecolorblue").addClass("activecolorgray");
										
					$("#tbody_PM_Rate"+ddID+">td:nth-child(3) input[type='text']").val("");	
					/*$("#tbody_PM_Rate"+ddID+">td:nth-child(3) input[type='file']").val(null);*/
					
					$("#tb_PM_Rate1>tbody>tr[data-group="+ddID+"]>td:nth-child(3) input[type='text']").val("");
					$("#tb_PM_Rate1>tbody>tr[data-group="+ddID+"]>td:nth-child(3) input[type='file']").val(null);
					$("#tb_PM_Rate1>tbody>tr[data-group="+ddID+"]>td:nth-child(3) *").prop("disabled",true);
					$("#tb_PM_Rate1>tbody>tr[data-group="+ddID+"]>td:nth-child(3) span").attr("disabled",true);
					$("#tb_PM_Rate1>tbody>tr[data-group="+ddID+"]>td:nth-child(3) label>font").css("display","inline-block");
					$("#tb_PM_Rate1>tbody>tr[data-group="+ddID+"]>td:nth-child(4) a").removeClass("open-PremiumRateDialog_CL");
					$("#tb_PM_Rate1>tbody>tr[data-group="+ddID+"]>td:nth-child(4) span").removeClass("activecolorblue").addClass("activecolorgray");
					$("#tb_PM_Rate1>tbody>tr[data-group="+ddID+"]>td:nth-child(5) span").removeClass("activecolorblue").addClass("activecolorgray");
					
					/*Extra rate*/
					$("tbody_Extra_Rate"+ddID).remove();
					
				}else{
					$("#"+tblAuto_name+" tbody").empty();
					$("#"+tbl_name+" tbody").empty();
					
					//$("#tbody_PM_Rate"+ddID+">td:nth-child(3) input[type='text']").attr("placeholder", "");
					$("#fileuploads_PMRateText"+ddID+"_CL").val("");
					$("#fileuploads_PMRate"+ddID+"_CL").val(null);				
					$("#validate_rate"+ddID+"_CL").css("display","inline-block");
					$("#tbody_PM_Rate"+ddID+">td:nth-child(4) a").removeClass("open-PremiumRateDialog_CL");
					$("#tbody_PM_Rate"+ddID+">td:nth-child(4) span").removeClass("activecolorblue").addClass("activecolorgray");
					$("#tbody_PM_Rate"+ddID+">td:nth-child(5) span").removeClass("activecolorblue").addClass("activecolorgray");
					$("#tbody_PM_Rate"+ddID+">td:nth-child(3) span").css("display", "inline-block");
					$("#tbody_PM_Rate"+ddID+">td:nth-child(3) font").css("display", "inline-block");
										
					selectFilePMRate_CL("loop",ddID);
				}
			});
			
			$("#btn_value_warning_cancel").click(function(){	
				 $("#modal_value_warning").modal('hide');				 
				 $("#sl_PM_Type_CL"+ddID).val(prev).attr('selected', 'selected');
				 //$("#sl_menu3_insurance_premium_cl").val(rate).attr('selected', 'selected');			 				 
		     });
			
		}else{
			
			if(arrDuplicate != ""){
				message = "ไม่สามารถเลือกประเภท PM Rate ซ้ำได้";
				alertError(message);
				
				$("#sl_PM_Type_CL"+ddID+" option:contains('None')").attr('selected', 'selected');
				$("#tbody_PM_Rate"+ddID+">td:nth-child(3) *").prop('disabled', true);
				$("#tbody_PM_Rate"+ddID+">td:nth-child(3) input[type='text']").attr("placeholder", "");
				
				$("#tbody_PM_Rate"+ddID+">td:nth-child(3) span").attr('disabled', true);
				$("#tbody_PM_Rate"+ddID+">td:nth-child(4) a").removeClass("open-PremiumRateDialog_CL");
				$("#tbody_PM_Rate"+ddID+">td:nth-child(4) span").removeClass("activecolorblue").addClass("activecolorgray");
				$("#tbody_PM_Rate"+ddID+">td:nth-child(5) span").removeClass("activecolorblue").addClass("activecolorgray");
				$("#tbody_PM_Rate"+ddID+">td:nth-child(3) input[type='text']").val("");
				$("#tbody_PM_Rate"+ddID+">td:nth-child(3) input[type='file']").val(null);
				
				$("#tb_PM_Rate1>tbody>tr[data-group='"+ddID+"']>td:nth-child(3) input[type='text']").attr("placeholder", "");
				$("#tb_PM_Rate1>tbody>tr[data-group='"+ddID+"']>td:nth-child(3) input[type='text']").val("");
				$("#tb_PM_Rate1>tbody>tr[data-group='"+ddID+"']>td:nth-child(3) input[type='file']").val(null);
				$("#tb_PM_Rate1>tbody>tr[data-group='"+ddID+"']>td:nth-child(3) *").prop("disabled",true);
				$("#tb_PM_Rate1>tbody>tr[data-group='"+ddID+"']>td:nth-child(3) span").attr("disabled",true);
				$("#tb_PM_Rate1>tbody>tr[data-group='"+ddID+"']>td:nth-child(4) a").removeClass("open-PremiumRateDialog_CL");
				$("#tb_PM_Rate1>tbody>tr[data-group='"+ddID+"']>td:nth-child(4) span").removeClass("activecolorblue").addClass("activecolorgray");
				$("#tb_PM_Rate1>tbody>tr[data-group='"+ddID+"']>td:nth-child(5) span").removeClass("activecolorblue").addClass("activecolorgray");
				
				/*Extra rate*/
				$("#tbody_Extra_Rate"+ddID).remove();
				
			}else{
				if(id != ""){
					selectFilePMRate_CL("",ddID);
				}else{
					selectFilePMRate_CL("loop",ddID);
				}
				
			}	
		}
	}else{
		selectFilePMRate_CL("loop","");
	}
		
/*************/

	function selectFilePMRate_CL(mode,id){
			if(mode == 'loop'){
				for(var ii=0;ii<numrow;ii++){
					var thisID_text = $("select.sl_STD_PM_Rate").eq(ii).attr("id");
					var thisID = Number(thisID_text.replace("sl_PM_Type_CL",""));
					var selectPM_text = $("#"+thisID_text).find("option:selected").text();
					
					if(select_text == 'ตามแผนความคุ้มครอง'){
						type = 1;
					}else if(select_text == 'ต่อทุน 10,000 บาท'){
						type = 2;
					}else if(select_text == 'ต่อทุน 100,000 บาท'){
						type = 3;
					}
					
					file_layout = select_text_value+selectPM_text;
					file_layout2 = select_text2_value+selectPM_text;
					
					if(select_text == 'None' || selectPM_text == 'None'){
						$("#tbody_PM_Rate"+thisID+">td:nth-child(3) input[type='text']").attr("placeholder", "");
						$("#tbody_PM_Rate"+thisID+">td:nth-child(3) *").prop("disabled", true);
						$("#tbody_PM_Rate"+thisID+">td:nth-child(3) span").attr("disabled", true);
						$("#tbody_PM_Rate"+thisID+">td:nth-child(3) span").css("display", "inline-block");
					}else{				
						$("#tbody_PM_Rate"+thisID+">td:nth-child(4) a").removeClass("open-PremiumRateDialog_CL");
						$("#tbody_PM_Rate"+thisID+">td:nth-child(4) span").removeClass("activecolorblue").addClass("activecolorgray");
						$("#tbody_PM_Rate"+thisID+">td:nth-child(5) span").removeClass("activecolorblue").addClass("activecolorgray");
						$("#tbody_PM_Rate"+thisID+">td:nth-child(3) input[type='text']").val("");
						$("#tbody_PM_Rate"+thisID+">td:nth-child(3) input[type='file']").val(null);
						$("#validate_rate"+thisID+"_CL").css("display","inline-block");
						
						$("#fileuploads_PMRateText"+thisID+"_CL").attr("placeholder", file_layout+"_"+baseplanCode_CL+".txt");
					  	
						/*เบี้ยมาตรฐาน*/
						var uploadfile = "selectFileRate_CL("+type+",'s','fileuploads_PMRate"+thisID+"_CL','"+file_layout+"_"+baseplanCode_CL+"','','sl_menu3_insurance_premium_cl','span_PM_Rateopen_"+thisID+"')";
						
						$("#fileuploads_PMRate"+thisID+"_CL").attr('onchange', uploadfile);	
						$("#tbody_PM_Rate"+thisID+">td:nth-child(3) span").attr("disabled", false);
					  	$("#tbody_PM_Rate"+thisID+">td:nth-child(3) *").prop("disabled", false);
					  						  
					  	tr_group = "#tb_PM_Rate1>tbody tr[data-group='"+thisID+"']";
					  	
					  	$(tr_group).each(function(){
					  		var list_band_text = $(this).find("td:nth-child(2)").text();
					  		var list_band_layout = "";
					  		var list_band_ID = $(this).data("id");
					  		
					  		if(file_layout != ""){
					  			list_band_layout = file_layout+"_"+list_band_text+"_"+baseplanCode_CL+".txt";
					  		}else{
					  			list_band_layout = "";
					  		}
					  		
					  		var uploadfile_sub = "selectFileRate_CL("+type+",'b','fileuploads_PMRate"+list_band_ID+"_CL','"+file_layout+"_"+list_band_text+"_"+baseplanCode_CL+"','','sl_menu3_insurance_premium_cl','span_PM_Rateopen_"+list_band_ID+"')";
							
							$("#fileuploads_PMRate"+list_band_ID+"_CL").attr('onchange', uploadfile_sub);	
					  		$(this).find("td:nth-child(3) input[type='text']").attr("placeholder", list_band_layout);
					  		$(this).find("td:nth-child(3) input[type='text']").val("");
							$(this).find("td:nth-child(3) input[type='file']").val(null);
							$("#validate_rate"+list_band_ID+"_CL").css("display","inline-block");
							$(this).find("td:nth-child(4) a").removeClass("open-PremiumRateDialog_CL");
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
					var selectPM_text = $("#sl_PM_Type_CL"+id).find("option:selected").text();
					
					if(select_text == 'ตามแผนความคุ้มครอง'){
						type = 1;
					}else if(select_text == 'ต่อทุน 10,000 บาท'){
						type = 2;
					}else if(select_text == 'ต่อทุน 100,000 บาท'){
						type = 3;
					}
					
					file_layout = select_text_value+selectPM_text;
					file_layout2 = select_text2_value+selectPM_text;					
					
					if(select_text == 'None' || selectPM_text == 'None'){
						$("#tbody_PM_Rate"+thisID+">td:nth-child(3) input[type='text']").attr("placeholder", "");
						$("#tbody_PM_Rate"+thisID+">td:nth-child(3) *").prop("disabled", true);
						$("#tbody_PM_Rate"+thisID+">td:nth-child(3) span").attr("disabled", true);
					}else{
						$("#fileuploads_PMRateText"+thisID+"_CL").attr("placeholder", file_layout+"_"+baseplanCode_CL+".txt");
					  	
						var uploadfile = "selectFileRate_CL("+type+",'s','fileuploads_PMRate"+thisID+"_CL','"+file_layout+"_"+baseplanCode_CL+"','','sl_menu3_insurance_premium_cl','span_PM_Rateopen_"+thisID+"')";
						
						$("#fileuploads_PMRate"+thisID+"_CL").attr('onchange', uploadfile);	
						$("#tbody_PM_Rate"+thisID+">td:nth-child(3) span").attr("disabled", false);
					  	$("#tbody_PM_Rate"+thisID+">td:nth-child(3) *").prop("disabled", false);	
					  	$("#tbody_PM_Rate"+thisID+">td:nth-child(3) font").css("display", "inline-block");
					  	
					  	tr_group = "#tb_PM_Rate1>tbody tr[data-group='"+thisID+"']";
					  				  	
					  	$(tr_group).each(function(){
					  		var list_band_text = $(this).find("td:nth-child(2)").text();
					  		var list_band_layout = "";
					  		var list_band_ID = $(this).data("id");
					  		
					  		if(file_layout != ""){
					  			list_band_layout = file_layout+"_"+list_band_text+"_"+baseplanCode_CL+".txt";
					  		}else{
					  			list_band_layout = "";
					  		}
					  		
					  		var uploadfile_sub = "selectFileRate_CL("+type+",'b','fileuploads_PMRate"+list_band_ID+"_CL','"+file_layout+"_"+list_band_text+"_"+baseplanCode_CL+"','','sl_menu3_insurance_premium_cl','span_PM_Rateopen_"+list_band_ID+"')";
							
							$("#fileuploads_PMRate"+list_band_ID+"_CL").attr('onchange', uploadfile_sub);	
					  		$(this).find("td:nth-child(3) input[type='text']").attr("placeholder", list_band_layout);
					  		$("#validate_rate"+list_band_ID+"_CL").css("display","inline-block");
					  		
					  		if(selectPM_text == 'None'){
					  			$(this).find("*").prop("disabled",true);
					  		}else{
					  			$(this).find("td:nth-child(3) *").prop("disabled",false);
					  			$(this).find("td:nth-child(3) span").attr("disabled",false);
					  		}					  		
					  	});	
					}
					
					/*ตารางมูลค่า*/		
					$("#tb_RateValue1 tbody").css("display","grid");
					$("#tb_RateValue1 tbody").show();
					$("#tbody_Rate_Value"+id+">td:nth-child(1)>label").text(selectPM_text);
					var dbBox1_text  = $("#dbBox1_CL option:selected").text();
					var dbBox1_val = $("#dbBox1_CL").val();
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
						
						var uploadfile_sub = "selectFileRate_CL(5,'s','fileuploads_RateValue"+id+"_CL','"+file_layout_r1_text+"','"+file_layout_r2_text+"','dbBox1_CL','span_RateValueopen_"+id+"')";
						
						$("#fileuploads_RateValue"+id+"_CL").attr('onchange', uploadfile_sub);	
				  		$("#tbody_Rate_Value"+id).find("td:nth-child(2) input[type='text']").attr("placeholder", placeholder_main);
				  		
				  		if(selectPM_text == 'None'){
				  			$("#tbody_Rate_Value"+id).find("*").prop("disabled",true);
				  		}else{
				  			$("#tbody_Rate_Value"+id).find("td:nth-child(2) *").prop("disabled",false);
				  			$("#tbody_Rate_Value"+id).find("td:nth-child(2) span").attr("disabled",false);
				  		}
						
				  		/*Band*/
						tr_group = "#tb_RateValue1>tbody tr[data-group='"+thisID+"']";
	  				  	
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
					  		
					  		var uploadfile_band = "selectFileRate_CL(5,'b','fileuploads_RateValue"+id+"_CL','"+file_layout1_text+"','"+file_layout2_text+"','dbBox1_CL','span_RateValueopen_"+id+"')";
							
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
			var num_PMRate = $("#tb_PM_Rate1>tbody>tr[data-level='1']").length;
			for(var a=0;a<num_PMRate;a++){
				var PMRate_type = $("select.sl_STD_PM_Rate").eq(a).find("option:selected").text();
				var PMRate_id = $("select.sl_STD_PM_Rate").eq(a).attr("id");
					PMRate_id = Number(PMRate_id.replace("sl_PM_Type_CL",""));
				
				var dd_extra_rate = $("#sl_insurance_premium_Extra_cl option:selected").text();
				var dd_extra_rate_value = $("#sl_insurance_premium_Extra_cl option:selected").val();
				var file_pattern  = "";
				var onchange  = "";
				
				if(PMRate_type != "None"){	
					var numrow_extra = $("#tb_Extra_Rate>tbody>tr").length;
					if(numrow_extra > 0){						
							var ExtraRate_type = $("#tb_Extra_Rate>tbody>tr").eq(a).find("td:nth-child(1)").text();
							//var ExtraRate_id = $("#tb_Extra_Rate>tbody>tr").eq(a).attr("id");
							   // ExtraRate_id = Number(ExtraRate_id.replace("tbody_Extra_Rate",""));
							    
							if(ExtraRate_type != PMRate_type){    
								$("#tb_Extra_Rate>tbody>tr").eq(a).remove();
								var numrow_extra2 = $("#tb_Extra_Rate>tbody>tr").length;
								if(numrow_extra2 > 0){
									var aa = $("#tb_Extra_Rate>tbody>tr:last-child").attr("id");
									aa = Number(aa.replace("tbody_Extra_Rate",""))+1;
								}else{
									var aa = 1;
								}							
							}else{
								var aa = $("#tb_Extra_Rate>tbody>tr:last-child").attr("id");
								aa = Number(aa.replace("tbody_Extra_Rate",""))+1;
							}
							
							
							
							if(ExtraRate_type != PMRate_type){									
								var row_extra = "<tr id='tbody_Extra_Rate"+aa+"'>"+
								"<td class='borderBlack vertical-middle'><label>"+PMRate_type+"</label></td>"+
								"<td class='borderBlack'>"+
								  	"<div id='div_fileExRate"+aa+"_CL' class='input-group'>"+
								  	//"<input type='hidden' id='ext_rateCat"+aa+"' value=''>"+
									 "<input type='hidden' id='ext_rateLayout"+aa+"' value=''>"+
									 "<input type='hidden' id='ext_fileID"+aa+"' value=''>"+
									"<input type='text' class='form-control' id='fileuploads_ExtraRateText"+aa+"_CL' readonly>"+ 
										"<label class='input-group-btn'>"+ 
										  "<span id='spanExtraRate"+aa+"_CL' class='btn btn-primary'>"+
										  	"<font id='validate_extrarate"+aa+"_CL' style='color: red;'>*</font>..."+
										  		"<input id='fileuploads_ExtraRate"+aa+"_CL' type='file' accept='text/plain' style='display: none;'>"+ 
										  "</span>"+
										 "</label>"+
									"</div>"+
								 "</td>"+
								 "<td class='borderBlack'>"+
								 	"<a id='span_Extra_Rateopen_"+aa+"' class='active_grey' disabled>"+
										"<span class='glyphicon glyphicon-eye-open activecolorgray' disabled></span>"+
									"</a>"+							 	
								 "</td>"+
								 "<td class='borderBlack'>"+
									 "<a id='span_Extra_Ratedownload_"+aa+"' class='active_grey' disabled>"+
										"<span class='glyphicon glyphicon-download-alt activecolorgray' disabled></span>"+
									 "</a>"+
								"</td>"+
								"</tr>";								
								
								$("#tb_Extra_Rate>tbody").append(row_extra);
														
							}
					}else{
						var aa=1;
						var row_extra = "<tr id='tbody_Extra_Rate"+aa+"'>"+
						"<td class='borderBlack vertical-middle'><label>"+PMRate_type+"</label></td>"+
						"<td class='borderBlack'>"+
						  	"<div id='div_fileExRate"+aa+"_CL' class='input-group'>"+
						  	
							 "<input type='hidden' id='ext_rateLayout"+aa+"' value=''>"+
							 "<input type='hidden' id='ext_fileID"+aa+"' value=''>"+
							"<input type='text' class='form-control' id='fileuploads_ExtraRateText"+aa+"_CL' readonly>"+ 
								"<label class='input-group-btn'>"+ 
								  "<span id='spanExtraRate"+aa+"_CL' class='btn btn-primary'>"+
								  	"<font id='validate_extrarate"+aa+"_CL' style='color: red;'>*</font>..."+
								  		"<input id='fileuploads_ExtraRate"+aa+"_CL' type='file' accept='text/plain' style='display: none;'>"+ 
								  "</span>"+
								 "</label>"+
							"</div>"+
						 "</td>"+
						 "<td class='borderBlack'>"+
						 	"<a id='span_Extra_Rateopen_"+aa+"' class='active_grey' disabled>"+
								"<span class='glyphicon glyphicon-eye-open activecolorgray' disabled></span>"+
							"</a>"+							 	
						 "</td>"+
						 "<td class='borderBlack'>"+
							 "<a id='span_Extra_Ratedownload_"+aa+"' class='active_grey' disabled>"+
								"<span class='glyphicon glyphicon-download-alt activecolorgray' disabled></span>"+
							 "</a>"+
						"</td>"+
						"</tr>";
						$("#tb_Extra_Rate>tbody").append(row_extra);
					}
					
					if(dd_extra_rate != "None"){
						file_pattern = dd_extra_rate_value+PMRate_type+"_"+baseplanCode_CL;
						onchange = "selectFileRate_CL(4,'s','fileuploads_ExtraRate"+aa+"_CL','"+file_pattern+"','','sl_insurance_premium_Extra_cl','span_Extra_Rateopen_"+aa+"')";
						
						$("#fileuploads_ExtraRateText"+aa+"_CL").attr("placeholder",file_pattern+".txt");
						$("#fileuploads_ExtraRate"+aa+"_CL").attr("onchange",onchange);
					}
					
				}
			}	
			
			if(dd_extra_rate != "None" && PMRate_type != "None"){
				$("#tb_Extra_Rate>tbody>tr").find("td:nth-child(2) span").attr("disabled",false);
				$("#tb_Extra_Rate>tbody>tr").find("td:nth-child(2) input[type='file']").attr("disabled",false);
			}else{
				$("#tb_Extra_Rate>tbody>tr").find("td:nth-child(2) span").attr("disabled",true);
				$("#tb_Extra_Rate>tbody>tr").find("td:nth-child(2) input[type='file']").attr("disabled",true);
			}
			
	}	
	/**/
	
}	

function select_AgeBand(band){	
	var row_band = $("#tr_AgeBand"+band+"").find("td:nth-child(2)").text();
	var num_row = $("#tb_PM_Rate1>tbody>tr>td:nth-child(2)>select").length;
	var num_row2 = $("#tb_RateValue1>tbody>tr[data-level='1']").length;
	
	/*format*/
	var select_text = jQuery.trim($("#sl_menu3_insurance_premium_cl option:selected").text());
	var select_text2 = $("#dbBox1_CL option:selected").text();
	var select_text_value = $("#sl_menu3_insurance_premium_cl option:selected").val();
	var select_text2_value = $("#dbBox1_CL option:selected").val();
	var baseplanCode_CL = $("#pass_Insurance_coverage_cl").val();
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
		thisID = $("#tb_PM_Rate1>tbody tr[data-level='1']").eq(i).attr("data-id");
		var listgroup_count = $("#tb_PM_Rate1").find("tbody>tr[data-group='"+thisID+"']").length;  
		var lastID = "";
		if(listgroup_count > 0){
			lastID = $("#tb_PM_Rate1").find("tbody>tr[data-group='"+thisID+"']:last").attr("data-id");
			lastID = Number(lastID.replace(thisID+"_",""))+1;
		}else{
			lastID = 1;
		}
		//var cat_id = Number(thisID) + lastID;
		var thisID_Sub = thisID+"_"+lastID;
		var selectPM_text = $("#tb_PM_Rate1>tbody tr[data-level='1']").eq(i).find("td:nth-child(2)>select option:selected").text();
		var selectPM_value = $("#tb_PM_Rate1>tbody tr[data-level='1']").eq(i).find("td:nth-child(2)>select option:selected").val();
		
		var new_row = "<tr id='tbody_PM_Rate"+thisID_Sub+"' data-id='"+thisID_Sub+"' data-group='"+thisID+"' data-level='2'>"+
		  "<td class='borderBlack' style='background-color: gray;'></td>"+
		  "<td class='borderBlack vertical-middle'><label>B"+band+"</label></td>"+
		  "<td class='borderBlack'>"+
		  	"<div class='input-group'>"+
		  	
			"<input type='hidden' id='rm_rateLayout"+thisID_Sub+"' value=''>"+
			"<input type='hidden' id='rm_fileID"+thisID_Sub+"' value=''>"+
			"<input type='text' class='form-control' id='fileuploads_PMRateText"+thisID_Sub+"_CL' readonly>"+ 
				"<label class='input-group-btn'>"+ 
				  "<span id='spanRate"+thisID_Sub+"_CL' class='btn btn-primary'>"+
				  	"<font id='validate_rate"+thisID_Sub+"_CL' style='color: red;'>*</font>..."+
				  		"<input id='fileuploads_PMRate"+thisID_Sub+"_CL' type='file' accept='text/plain' style='display: none;'>"+ 
				  "</span>"+
				 "</label>"+
			"</div>"+
		  "</td>"+		  
		  "<td class='borderBlack'>"+
		 	"<a id='span_PM_Rateopen_"+thisID_Sub+"' class='active_grey'>"+
				"<span class='glyphicon glyphicon-eye-open activecolorgray'></span>"+
			"</a>"+							 	
		 "</td>"+
		 "<td class='borderBlack'>"+
			 "<a id='span_PM_Ratedownload_"+thisID_Sub+"' class='active_grey'>"+
				"<span class='glyphicon glyphicon-download-alt activecolorgray'></span>"+
			 "</a>"+
		"</td>"+		 
		"</tr>";

		/*ตารางมูลค่ากรมธรรม์*/
		var new_row2 = "<tr id='tbody_Rate_Value"+thisID_Sub+"' data-id='"+thisID_Sub+"' data-group='"+thisID+"' data-level='2'>"+
		  "<td class='borderBlack vertical-middle'><label>B"+band+"</label></td>"+
		  "<td class='borderBlack'>"+
		  	"<div class='input-group'>"+
			"<input type='text' class='form-control' id='fileuploads_RateValueText"+thisID_Sub+"_CL' readonly>"+ 
				"<label class='input-group-btn'>"+ 
				  "<span id='spanRateValue"+thisID_Sub+"_CL' class='btn btn-primary'>..."+
				  	/*"<font id='validate_RateValue"+thisID_Sub+"_CL' style='color: red;'>*</font>..."+*/
				  		"<input id='fileuploads_RateValue"+thisID_Sub+"_CL' type='file' accept='text/plain' style='display: none;'>"+ 
				  "</span>"+
				 "</label>"+
			"</div>"+			
			"<input type='hidden' id='cv_rateLayout"+thisID_Sub+"' value=''>"+
			"<input type='hidden' id='cv_fileID"+thisID_Sub+"' value=''>"+	
		  "</td>"+		  
		  "<td class='borderBlack'>"+
		 	"<a id='span_RateValueopen_"+thisID_Sub+"' class='active_grey'>"+
				"<span class='glyphicon glyphicon-eye-open activecolorgray'></span>"+
			"</a>"+							 	
		 "</td>"+
		 "<td class='borderBlack'>"+
			 "<a id='span_RateValuedownload_"+thisID_Sub+"' class='active_grey'>"+
				"<span class='glyphicon glyphicon-download-alt activecolorgray'></span>"+
			 "</a>"+
		"</td>"+		 
		"</tr>";
	
		if(num_row != 0){
			if(listgroup_count > 0){
				$(new_row).insertAfter("#tb_PM_Rate1 >tbody tr[data-group='"+thisID+"']:last");
				$(new_row2).insertAfter("#tb_RateValue1 >tbody tr[data-group='"+thisID+"']:last");
			}else{
				$(new_row).insertAfter("#tb_PM_Rate1 >tbody tr[data-id="+thisID+"]");
				$(new_row2).insertAfter("#tb_RateValue1 >tbody tr[data-id="+thisID+"]");
			}

			file_layout = select_text_value+selectPM_text;
			band_layout = file_layout+"_"+row_band+"_"+baseplanCode_CL+".txt";
			
			file_layout2 = select_text2_value+selectPM_text;
			band_layout2 = file_layout2+"_"+row_band+"_"+baseplanCode_CL+".txt";
			
			var file_split = select_text2_value.split(",");
			var band_layout2_1 = file_split[0]+selectPM_text+"_"+row_band+"_"+baseplanCode_CL;
			var band_layout2_2 = file_split[1]+selectPM_text+"_"+row_band+"_"+baseplanCode_CL;
			
			if(file_split.length > 1){
				var band_layout_all = band_layout2_1+".txt หรือ "+band_layout2_2+".txt";
				var band_layout_onchange = band_layout2_1+"','"+band_layout2_2;
			}else{
				var band_layout_all = band_layout2_1+".txt";
				var band_layout_onchange = band_layout2_1;
			}
				
			if(selectPM_text != "None" && select_text != "None" ){			
				$("#fileuploads_PMRateText"+thisID_Sub+"_CL").attr("placeholder", band_layout);
				var uploadfile = "selectFileRate_CL("+type+",'b','fileuploads_PMRate"+thisID_Sub+"_CL','"+file_layout+"_"+row_band+"_"+baseplanCode_CL+"','','sl_menu3_insurance_premium_cl','span_PM_Rateopen_"+thisID_Sub+"')";
				
				$("#fileuploads_PMRate"+thisID_Sub+"_CL").attr('onchange', uploadfile);	
				$("#tbody_PM_Rate"+thisID_Sub+">td:nth-child(3) span").prop("disabled", false);
			  	$("#tbody_PM_Rate"+thisID_Sub+">td:nth-child(3) *").prop("disabled", false);
			}else{
				$("#tbody_PM_Rate"+thisID_Sub+">td:nth-child(3) span").attr("disabled", true);
			  	$("#tbody_PM_Rate"+thisID_Sub+">td:nth-child(3) *").prop("disabled", true);
			}
			
			/*ตารางมูลค่า*/
			if(selectPM_text != "None" && select_text2 != "None" ){			
				$("#fileuploads_RateValueText"+thisID_Sub+"_CL").attr("placeholder", band_layout_all);
				var uploadfile = "selectFileRate_CL(5,'b','fileuploads_RateValue"+thisID_Sub+"_CL','"+band_layout_onchange+"','dbBox1_CL','span_RateValueopen_"+thisID_Sub+"')";
				
				$("#fileuploads_RateValue"+thisID_Sub+"_CL").attr('onchange', uploadfile);	
				$("#tbody_Rate_Value"+thisID_Sub+">td:nth-child(2) span").prop("disabled", false);
			  	$("#tbody_Rate_Value"+thisID_Sub+">td:nth-child(2) *").prop("disabled", false);
			}else{
				$("#tbody_Rate_Value"+thisID_Sub+">td:nth-child(2) span").attr("disabled", true);
			  	$("#tbody_Rate_Value"+thisID_Sub+">td:nth-child(2) *").prop("disabled", true);
			}
			
		 }				
	   }
	}
	
	/*Band*/
	$("#tb_Age_Band input[type='checkbox']:checked").each(function(){
		var band = $(this).val();
			band = band.replace("B","");
		$(this).attr("onclick","unselect_AgeBand("+band+")");	
	});
}

function unselect_AgeBand(band){	
	var band_text_unselect = "B"+band;
	$("#tb_PM_Rate1>tbody tr[data-level='2']").each(function(){
		var band_text = $(this).find("td:nth-child(2)").text();
		if(band_text == band_text_unselect){
			$(this).remove();
		}		
	});
	
	$("#tb_RateValue1>tbody tr[data-level='2']").each(function(){
		var band_text2 = $(this).find("td:nth-child(1)").text();
		if(band_text2 == band_text_unselect){
			$(this).remove();
		}		
	});
	
	$("#imgOK_ageBand"+band+"").attr("onclick","select_AgeBand("+band+")");
}

function addRowPM_Rate(){
	var lastID = Number($("#tb_PM_Rate1>tbody>tr[data-level='1']:last").attr("data-id"))+1 || 1;
	var listgroup_count = $("#tb_PM_Rate1").find("tbody>tr[data-group='"+lastID+"']").length;
	
	var lastSubID = "";
	if(listgroup_count > 0){
		lastSubID = $("#tb_PM_Rate1").find("tbody>tr[data-group='"+lastID+"']:last").attr("data-id");
		lastSubID = Number(lastSubID.replace(lastID+"_",""))+1;
	}else{
		lastSubID = 0;
	}
	var rateCatID = $("#rm_rateCat1").val();
	
	var new_row = "<tr id='tbody_PM_Rate"+lastID+"' data-id='"+lastID+"' data-level='1'>"+
				  "<td class='text-center borderBlack' id='imgOK_"+lastID+"' width='33px' onclick='imgCheckbox(this.id);' style='vertical-align: middle;'><i class='glyphicon glyphicon-edit'></i></td>"+
				  "<td class='borderBlack'></td>"+
				  "<td class='borderBlack'>"+
				  	"<div class='input-group'>"+
					"<input type='text' class='form-control' id='fileuploads_PMRateText"+lastID+"_CL' readonly=''>"+ 
						"<label class='input-group-btn'>"+ 
						  "<span id='spanRate"+lastID+"_CL' class='btn btn-primary' disabled>"+
						  	"<font id='validate_rate"+lastID+"_CL' style='color: red;'>*</font>..."+
						  		"<input id='fileuploads_PMRate"+lastID+"_CL' type='file' accept='text/plain' style='display: none;' disabled>"+ 
						  "</span>"+
						 "</label>"+
					"</div>"+
					"<input type='hidden' id='rm_rateLayout"+lastID+"' value=''>"+
					"<input type='hidden' id='rm_fileID"+lastID+"' value=''>"+
				  "</td>"+
				  "<td class='borderBlack'>"+
				 	"<a id='span_PM_Rateopen_"+lastID+"' class='active_grey' disabled>"+
						"<span class='glyphicon glyphicon-eye-open activecolorgray' disabled></span>"+
					"</a>"+							 	
				 "</td>"+
				 "<td class='borderBlack'>"+
					 "<a id='span_PM_Ratedownload_"+lastID+"' class='active_grey' disabled>"+
						"<span class='glyphicon glyphicon-download-alt activecolorgray' disabled></span>"+
					 "</a>"+
				 "</td>"+				
				"</tr>";
	
	/*row ในหน้าตารางมูลค่า*/
	var new_row2 = "<tr id='tbody_Rate_Value"+lastID+"' data-id='"+lastID+"' data-level='1'>"+
	  "<td class='borderBlack vertical-middle'><label>None</label></td>"+
	  "<td class='borderBlack'>"+
	  	"<div class='input-group'>"+
		"<input type='text' class='form-control' id='fileuploads_RateValueText"+lastID+"_CL' readonly=''>"+ 
			"<label class='input-group-btn'>"+ 
			  "<span id='spanRateValue"+lastID+"_CL' class='btn btn-primary' disabled>..."+
			  	/*"<font id='validate_RateValue"+lastID+"_CL' style='color: red;'>*</font>..."+*/
			  		"<input id='fileuploads_RateValue"+lastID+"_CL' type='file' accept='text/plain' style='display: none;' disabled>"+ 
			  "</span>"+
			 "</label>"+
		"</div>"+
		"<input type='hidden' id='cv_rateLayout"+lastID+"' value=''>"+
		"<input type='hidden' id='cv_fileID"+lastID+"' value=''>"+	
	  "</td>"+
	  "<td class='borderBlack'>"+
	 	"<a id='span_RateValueopen_"+lastID+"' class='active_grey' disabled>"+
			"<span class='glyphicon glyphicon-eye-open activecolorgray' disabled></span>"+
		"</a>"+							 	
	 "</td>"+
	 "<td class='borderBlack'>"+
		 "<a id='span_RateValuedownload_"+lastID+"' class='active_grey' disabled>"+
			"<span class='glyphicon glyphicon-download-alt activecolorgray' disabled></span>"+
		 "</a>"+
	 "</td>"+				
	"</tr>";
	
	/*row sub*/
	$("#tb_Age_Band>tbody>tr").each(function(){
		lastSubID++;
		var thisID_Sub = lastID+"_"+lastSubID;
		var chk_val = $(this).find("td:nth-child(1)>input[type='checkbox']").prop("checked");
		if(chk_val == true){
			var band_val = $(this).find("td:nth-child(2)").text();
			
			new_row += "<tr id='tbody_PM_Rate"+thisID_Sub+"' data-id='"+thisID_Sub+"' data-group='"+lastID+"' data-level='2' disabled='disabled'>"+
			  "<td class='borderBlack' style='background-color: gray;'></td>"+
			  "<td class='borderBlack vertical-middle'><label>"+band_val+"</label></td>"+
			  "<td class='borderBlack'>"+
			  	"<div class='input-group'>"+
				"<input type='text' class='form-control' id='fileuploads_PMRateText"+thisID_Sub+"_CL' readonly=''>"+ 
					"<label class='input-group-btn'>"+ 
					  "<span id='spanRate"+thisID_Sub+"_CL' class='btn btn-primary' disabled>"+
					  	"<font id='validate_rate"+thisID_Sub+"_CL' style='color: red;'>*</font>..."+
					  		"<input id='fileuploads_PMRate"+thisID_Sub+"_CL' type='file' accept='text/plain' style='display: none;'>"+ 
					  "</span>"+
					 "</label>"+
				"</div>"+
				"<input type='hidden' id='rm_rateCat"+thisID_Sub+"' value=''>"+
				"<input type='hidden' id='rm_rateLayout"+thisID_Sub+"' value=''>"+
				"<input type='hidden' id='rm_fileID"+thisID_Sub+"' value=''>"+
			  "</td>"+			 
			  "<td class='borderBlack'>"+
			 	"<a id='span_PM_Rateopen_"+thisID_Sub+"' class='active_grey' disabled>"+
					"<span class='glyphicon glyphicon-eye-open activecolorgray' disabled></span>"+
				"</a>"+							 	
			 "</td>"+
			 "<td class='borderBlack'>"+
				 "<a id='span_PM_Ratedownload_"+thisID_Sub+"' class='active_grey' disabled>"+
					"<span class='glyphicon glyphicon-download-alt activecolorgray' disabled></span>"+
				 "</a>"+
			"</td>"+
			"</tr>";
			
			
			new_row2 += "<tr id='tbody_Rate_Value"+thisID_Sub+"' data-id='"+thisID_Sub+"' data-group='"+lastID+"' data-level='2' disabled='disabled'>"+
			  "<td class='borderBlack vertical-middle'><label>"+band_val+"</label></td>"+
			  "<td class='borderBlack'>"+
			  	"<div class='input-group'>"+
				"<input type='text' class='form-control' id='fileuploads_RateValueText"+thisID_Sub+"_CL' readonly=''>"+ 
					"<label class='input-group-btn'>"+ 
					  "<span id='spanRateValue"+thisID_Sub+"_CL' class='btn btn-primary' disabled>..."+
					  	/*"<font id='validate_RateValue"+thisID_Sub+"_CL' style='color: red;'>*</font>..."+*/
					  		"<input id='fileuploads_RateValue"+thisID_Sub+"_CL' type='file' accept='text/plain' style='display: none;'>"+ 
					  "</span>"+
					 "</label>"+
				"</div>"+
				"<input type='hidden' id='cv_rateLayout"+thisID_Sub+"' value=''>"+
				"<input type='hidden' id='cv_fileID"+thisID_Sub+"' value=''>"+
			  "</td>"+			 
			  "<td class='borderBlack'>"+
			 	"<a id='span_RateValueopen_"+thisID_Sub+"' class='active_grey' disabled>"+
					"<span class='glyphicon glyphicon-eye-open activecolorgray' disabled></span>"+
				"</a>"+							 	
			 "</td>"+
			 "<td class='borderBlack'>"+
				 "<a id='span_RateValuedownload_"+thisID_Sub+"' class='active_grey' disabled>"+
					"<span class='glyphicon glyphicon-download-alt activecolorgray' disabled></span>"+
				 "</a>"+
			"</td>"+
			"</tr>";
		}		
	});
	
	$("#tb_PM_Rate1>tbody").append(new_row);
	$("#tb_RateValue1>tbody").append(new_row2);
	
	/*type*/
	var PMrate_type = $("#PMrate_type_CL").val().split(",");
	var dd_PMrate_type = "<select class='form-control sl_STD_PM_Rate' onchange=\"check_file_layout(this.id,'');\">";
		dd_PMrate_type += "<option value='NONE'>None</option>";
	
	for(var i = 0; i < PMrate_type.length; i++){
		dd_PMrate_type += "<option value='"+PMrate_type[i]+"'>"+PMrate_type[i]+"</option>";
	}
	dd_PMrate_type += "</select>";
	
	//$('#tb_PM_Rate1 tbody>tr:first-child td:nth-child(2)>select').clone().attr("id","sl_PM_Type_CL"+lastID).appendTo("#tbody_PM_Rate"+lastID+">td:nth-child(2)");
	$(dd_PMrate_type).attr("id","sl_PM_Type_CL"+lastID).appendTo("#tbody_PM_Rate"+lastID+">td:nth-child(2)");
	
	$("#sl_PM_Type_CL"+lastID+" option").each(function(){
		$(this).removeAttr("selected");
	});
	
	$("#sl_PM_Type_CL"+lastID+" :contains('None')").attr("selected", "selected");
	
	/*ปิดปุ่ม add row*/
	var num_dd = $("#tb_PM_Rate1>tbody>tr[data-level='1']:first>td:nth-child(2) select>option[value!='NONE']").length;
	var numrow_tbl = $("#tb_PM_Rate1>tbody>tr[data-level='1']").length;
	if(numrow_tbl == num_dd){
		$("#addrowPM_Rate").attr("disabled", true);
	}
	
}

//delete row table	*PM_Rate1
function deleteRowPM_Rate()
{
	var imgOKcount = $("#tb_PM_Rate1 i.glyphicon-ok").length;
	if(imgOKcount <= 0)
	{	
		message = "กรุณาเลือกรายการที่ต้องการลบ";
		alertError(message);
	}else{
	message = "ต้องการลบรายการใช่หรือไม่";
	alertDeleteError(message);
	
	$("#btn_confirm_del").click(function(){
		var lastImgOK = $("#tb_PM_Rate1 >tbody>tr[data-level='1']:last>td:first").attr("id") || 0;	
		var numberImgOK = 0;
		if(lastImgOK == 0){
			numberImgOK = 1;
		}else{
			numberImgOK = Number(lastImgOK.replace("imgOK_",""))+1;
		}
		for(var i = 1;i<=numberImgOK;i++)
			{
				var checked = $('#tbody_PM_Rate'+i+' >td:first>i').attr("class");
				if(checked == "glyphicon glyphicon-ok"){	
					deleteTableRow("#tbody_PM_Rate"+i);
					deleteTableRow("#tb_PM_Rate1>tbody>tr[data-group="+i+"]");
					deleteTableRow("#tbody_Extra_Rate"+i);
					deleteTableRow("#tb_RateValue1>tbody>tr[data-group="+i+"]");
					deleteTableRow("#tbody_Rate_Value"+i);
				}
		}
		
		  /*เปลี่ยน ID ใน PM Rate ใหม่ กรณีลบข้อมูล*/
		  var
		  j = 0,
		  $table = $("#tb_PM_Rate1"),
		  rows = $table.find("tr[data-level='1']");

			rows.each(function (index, row) {			
			j++;
			var
		      $row = $(row),
		      level = $row.data("level");
		      //id = $row.data("id");
		      id = Number($row.attr("id").replace("tbody_PM_Rate",""));
		      children = $table.find("tr[data-group=" + id + "]");
				
				/*ค่าเก่า+ใหม่*/
				var number_parent =  Number($row.attr("id").replace("tbody_PM_Rate",""));
				var number_parent_new = j;

				if(children.length > 0){			
					var jj = 0;
					children.each(function (index2, row2) {				
						jj++;
						var
				        $row2 = $(row2),
				        id2 = $row2.data("id");

						var number_child = $row2.attr("id").replace("tbody_PM_Rate","");
						var number_child_new = j+"_"+jj;							
						
						$row2.attr("id","tbody_PM_Rate"+number_child_new);
						$row2.attr("data-id",number_child_new);	
						$row2.attr("data-group",j);
						$row2.find("td:nth-child(3) input[type='file']").attr("id","fileuploads_PMRateGroup"+number_child_new+"_CL");
						$row2.find("td:nth-child(3) input[type='text']").attr("id","fileuploads_PMRateTextGroup"+number_child_new+"_CL");
						//$row2.find("td:nth-child(3) button").attr("id","bt_uploadfile_PM_RateGroup"+number_child_new+"_CL");
						$row2.find("td:nth-child(3) span").attr("id","spanRate"+number_child_new+"_CL");
						$row2.find("td:nth-child(3) font").attr("id","validate_rate"+number_child_new+"_CL");
						$row2.find("td:nth-child(4) a").attr("id","span_PM_RateopenGroup_"+number_child_new);
						$row2.find("td:nth-child(5) a").attr("id","span_PM_RatedownloadGroup_"+number_child_new);
						
						$row2.find("td:nth-child(3) input[type='hidden']").eq(0).attr("id","rm_rateLayout"+number_child_new);
						$row2.find("td:nth-child(3) input[type='hidden']").eq(1).attr("id","rm_fileID"+number_child_new);
		          });
				}	
				
				$row.attr("id","tbody_PM_Rate"+j);
				$row.attr("data-id",j);
				$row.find("td:nth-child(1)").attr("id","imgOK_"+j);
				$row.find("td:nth-child(2) select").attr("id","sl_PM_Type_CL"+j);
				$row.find("td:nth-child(3) input[type='file']").attr("id","fileuploads_PMRate"+j+"_CL");
				$row.find("td:nth-child(3) input[type='text']").attr("id","fileuploads_PMRateText"+j+"_CL");
				$row.find("td:nth-child(3) span").attr("id","spanRate"+k+"_CL");
				$row.find("td:nth-child(3) font").attr("id","validate_rate"+k+"_CL");
				$row.find("td:nth-child(4) a").attr("id","span_PM_Rateopen_"+j);
				$row.find("td:nth-child(5) a").attr("id","span_PM_Ratedownload_"+j);
				
				$row.find("td:nth-child(3) input[type='hidden']").eq(0).attr("id","rm_rateCat"+j);
				$row.find("td:nth-child(3) input[type='hidden']").eq(1).attr("id","rm_rateLayout"+j);
				$row.find("td:nth-child(3) input[type='hidden']").eq(2).attr("id","rm_fileID"+j);
											
			});
			
			/*เปลี่ยน ID extra rate ใหม่กรณีลบ PM Rate*/
			var numrow_extra = $("#tb_Extra_Rate>tbody>tr").length;
			var aa = 0;
			for(var a=0;a<numrow_extra;a++){
				aa++;
				var $row_extra = $("#tb_Extra_Rate>tbody>tr").eq(a);
				$row_extra.attr("id","tbody_Extra_Rate"+aa);
				$row_extra.find("td:nth-child(2) input[type='file']").attr("id","fileuploads_ExtraRate"+aa+"_CL");
				$row_extra.find("td:nth-child(2) input[type='text']").attr("id","fileuploads_ExtraRateText"+aa+"_CL");
				$row_extra.find("td:nth-child(2) span").attr("id","spanExtraRate"+aa+"_CL");
				$row_extra.find("td:nth-child(2) font").attr("id","validate_extrarate"+aa+"_CL");
				$row_extra.find("td:nth-child(3) a").attr("id","span_Extra_Rateopen_"+aa);
				$row_extra.find("td:nth-child(4) a").attr("id","span_Extra_Ratedownload_"+aa);
				
				$row_extra.find("td:nth-child(2) input[type='hidden']").eq(0).attr("id","ext_rateLayout"+aa);
				$row_extra.find("td:nth-child(2) input[type='hidden']").eq(1).attr("id","ext_fileID"+aa);
		
			}
			
		   /*เปลี่ยน ID ตารางมูลค่า*/
			var
			  k = 0,
			  $table_rate = $("#tb_RateValue1"),
			  rows_rate = $table_rate.find("tr[data-level='1']");

				rows_rate.each(function (index, row) {			
				k++;
				var
			      $row = $(row),
			      level = $row.data("level");
			      //id = $row.data("id");
			      id_rate = Number($row.attr("id").replace("tbody_Rate_Value",""));
			      children_rate = $table_rate.find("tr[data-group=" + id_rate + "]");
					
					/*ค่าเก่า+ใหม่*/
					var number_parent =  Number($row.attr("id").replace("tbody_Rate_Value",""));
					var number_parent_new = k;

					if(children_rate.length > 0){			
						var kk = 0;
						children_rate.each(function (index2, row2) {				
							kk++;
							var
					        $row2 = $(row2),
					        id2_rate = $row2.data("id");

							var number_child = $row2.attr("id").replace("tbody_Rate_Value","");
							var number_child_new = k+"_"+kk;							
							
							$row2.attr("id","tbody_Rate_Value"+number_child_new);
							$row2.attr("data-id",number_child_new);	
							$row2.attr("data-group",k);
							$row2.find("td:nth-child(2) input[type='file']").attr("id","fileuploads_RateValue"+number_child_new+"_CL");
							$row2.find("td:nth-child(2) input[type='text']").attr("id","fileuploads_RateValueText"+number_child_new+"_CL");
							$row2.find("td:nth-child(2) span").attr("id","spanRateValue"+k+"_CL");
							//$row2.find("td:nth-child(2) font").attr("id","validate_RateValue"+k+"_CL");
							$row2.find("td:nth-child(3) a").attr("id","span_RateValueopen_"+number_child_new);
							$row2.find("td:nth-child(4) a").attr("id","span_RateValuedownload_"+number_child_new);
							
							$row2.find("td:nth-child(2) input[type='hidden']").eq(0).attr("id","cv_rateLayout"+number_child_new);
							$row2.find("td:nth-child(2) input[type='hidden']").eq(1).attr("id","cv_fileID"+number_child_new);
							
			          });
					}	

					$row.attr("id","tbody_Rate_Value"+k);
					$row.attr("data-id",k);
					$row.find("td:nth-child(2) input[type='file']").attr("id","fileuploads_RateValue"+k+"_CL");
					$row.find("td:nth-child(2) input[type='text']").attr("id","fileuploads_RateValueText"+k+"_CL");
					$row.find("td:nth-child(2) span").attr("id","spanRateValue"+k+"_CL");
					//$row.find("td:nth-child(2) font").attr("id","validate_RateValue"+k+"_CL");
					$row.find("td:nth-child(3) a").attr("id","span_RateValueopen_"+k);
					$row.find("td:nth-child(4) a").attr("id","span_RateValuedownload_"+k);	
					
					$row.find("td:nth-child(2) input[type='hidden']").eq(0).attr("id","cv_rateLayout"+k);
					$row.find("td:nth-child(2) input[type='hidden']").eq(1).attr("id","cv_fileID"+k);
				});	
				
				/*reset Age band*/
				var PMRate_count = $("#tb_PM_Rate1 tbody>tr").length;
				if(PMRate_count <=0){
					$("#ch_insurance_premium_ageBand_cl").prop("checked", false);
					$("#tb_Age_Band input:checkbox").each(function(){
						var id = $(this).attr("id");
							id = id.replace("imgOK_ageBand", "");							
						$(this).prop("checked", false);
						$(this).prop("disabled", true);
						$(this).attr("onclick", "select_AgeBand("+id+")");
					});					
				}
				
		/*เปิดปุ่ม add row*/
		var num_dd = $("#tb_PM_Rate1>tbody>tr[data-level='1']:first>td:nth-child(2) select>option[value!='NONE']").length;
		var numrow_tbl = $("#tb_PM_Rate1>tbody>tr[data-level='1']").length;
		if((numrow_tbl < num_dd) || (num_dd == 0 && numrow_tbl == 0)){
			$("#addrowPM_Rate").attr("disabled", false);
		}
	});	
	
  }
}	

function selectFileRate_CL(type,rate_cat,select_file,file_format,file_format2,dd_opt,cv_btn){
	var tbl_name = "";
	var tbl_col = "";
	var dd_opt = dd_opt;
	var cv_button = cv_btn;
	var select_file_name = "";
	var validateFile = "";
	var downloadFile = "";
	var head_modal = "";
	var head_modal_text = "";
	var cov_code = $("#pass_Insurance_coverage_cl").val();
	var tr_tbl = "";
	var data_level = "";
	var data_group = "";
	var rate_type = "";
	var rate_band_type = "";
	
	/*file*/
	var file_id = 0;
	var file_type_id = 3;
	var file_path = "";
	var file_pattern = "";
	var user_code = "0000000";	        

	/*ตามแผนความคุ้มครอง*/
	if(type == 1){
		tbl_name = "tbl_PMRatePlan_CL";
		tblAuto_name = "tbl_PMRatePlanAuto_CL";
		modal_name = "modal_PMRateAuto_CL";
		modal_cv = "modal_PMRate_CL";
		tbl_col = 61;		
		file_button1 = "btn_submit_PMRatePlanAuto";
		file_button2 = "btn_cancel_PMRatePlanAuto";
		button_modal = "";
		select_file_name = select_file.replace("fileuploads_PMRate","");
		select_file_name = select_file_name.replace("_CL","");
		selectFile = "fileuploads_PMRate"+select_file_name+"_CL";
		textFile = "fileuploads_PMRateText"+select_file_name+"_CL";
		
		validateFile = "validate_rate"+select_file_name+"_CL";
		downloadFile = "span_PM_Ratedownload_"+select_file_name;
		fileID = "rm_fileID"+select_file_name;
		
		if(rate_cat == 's'){
			rate_cat_id = $("#rateCat_tbStardard").val();
		}else{
			rate_cat_id = $("#rateCat_tbStardard_age").val();	
		}
		
		sub_cat_id = $("#sl_menu3_insurance_premium_cl option:selected").attr("data-subcat");
		/*ต่อทุน 10,000 บาท*/
	}else if(type == 2){
		tbl_name = "tbl_PMRatePlan4Col_CL";
		tblAuto_name = "tbl_PMRatePlan4ColAuto_CL";
		modal_name = "modal_PMRate4ColAuto_CL";
		modal_cv = "modal_PMRate4Col_CL";
		tbl_col = 41;		
		file_button1 = "btn_submit_PMRatePlan4ColAuto";
		file_button2 = "btn_cancel_PMRatePlan4ColAuto";
		button_modal = "download_tbl_PMRatePlan4Col_CL";
		select_file_name = select_file.replace("fileuploads_PMRate","");
		select_file_name = select_file_name.replace("_CL","");
		selectFile = "fileuploads_PMRate"+select_file_name+"_CL";
		textFile = "fileuploads_PMRateText"+select_file_name+"_CL";
		
		validateFile = "validate_rate"+select_file_name+"_CL";
		downloadFile = "span_PM_Ratedownload_"+select_file_name;
		fileID = "rm_fileID"+select_file_name;
		
		if(rate_cat == 's'){
			rate_cat_id = $("#rateCat_tbStardard").val();
		}else{
			rate_cat_id = $("#rateCat_tbStardard_age").val();	
		}
		
		sub_cat_id = $("#sl_menu3_insurance_premium_cl option:selected").attr("data-subcat");
		/*ต่อทุน 100,000 บาท*/
	}else if(type == 3){
		tbl_name = "tbl_PMRatePlan4Col_CL";
		tblAuto_name = "tbl_PMRatePlan4ColAuto_CL";
		modal_name = "modal_PMRate4ColAuto_CL";
		modal_cv = "modal_PMRate4Col_CL";
		tbl_col = 41;		
		file_button1 = "btn_submit_PMRatePlan4ColAuto";
		file_button2 = "btn_cancel_PMRatePlan4ColAuto";
		button_modal = "download_tbl_PMRatePlan4Col_CL";
		select_file_name = select_file.replace("fileuploads_PMRate","");
		select_file_name = select_file_name.replace("_CL","");
		selectFile = "fileuploads_PMRate"+select_file_name+"_CL";
		textFile = "fileuploads_PMRateText"+select_file_name+"_CL";
		
		validateFile = "validate_rate"+select_file_name+"_CL";
		downloadFile = "span_PM_Ratedownload_"+select_file_name;
		fileID = "rm_fileID"+select_file_name;
		
		if(rate_cat == 's'){
			rate_cat_id = $("#rateCat_tbStardard").val();
		}else{
			rate_cat_id = $("#rateCat_tbStardard_age").val();	
		}
		
		sub_cat_id = $("#sl_menu3_insurance_premium_cl option:selected").attr("data-subcat");
		/*เบี้ยเพิ่มพิเศษ*/
	}else if(type == 4){
		tbl_name = "tbl_ExtraRatePlan_CL";
		tblAuto_name = "tbl_ExtraRatePlanAuto_CL";
		modal_name = "modal_ExtraRateAuto_CL";
		modal_cv = "modal_ExtraRate_CL";
		tbl_col = 51;		
		file_button1 = "btn_submit_ExtraRatePlanAuto";
		file_button2 = "btn_cancel_ExtraRatePlanAuto";
		button_modal = "download_tbl_ExtraRatePlan_CL";
		select_file_name = select_file.replace("fileuploads_ExtraRate","");
		select_file_name = select_file_name.replace("_CL","");
		selectFile = "fileuploads_ExtraRate"+select_file_name+"_CL";
		textFile = "fileuploads_ExtraRateText"+select_file_name+"_CL";
		
		validateFile = "validate_extrarate"+select_file_name+"_CL";
		downloadFile = "span_Extra_Ratedownload_"+select_file_name;
		fileID = "ext_fileID"+select_file_name;

		rate_cat_id = $("#rateCat_tbExtra").val();
				
		sub_cat_id = $("#sl_insurance_premium_Extra_cl option:selected").attr("data-subcat");
		/*ตารางมูลค่ากรมธรรม์*/
	}else if(type == 5){
		tbl_name = "tbl_StandardRisk_CL";
		tblAuto_name = "tbl_StandardRiskAuto_CL";
		modal_name = "cvStandardRiskAuto_CL";
		modal_cv = "cvStandardRisk_CL";
		tbl_col = 5;
		file_button1 = "btn_submit_StandardRiskAuto";
		file_button2 = "btn_cancel_StandardRiskAuto";
		button_modal = "download_tbl_StandardRisk_CL";		
		select_file_name = select_file.replace("fileuploads_RateValue","");
		select_file_name = select_file_name.replace("_CL","");
		selectFile = "fileuploads_RateValue"+select_file_name+"_CL";
		textFile = "fileuploads_RateValueText"+select_file_name+"_CL";
		
		//validateFile = "validate_RateValue"+select_file_name+"_CL";
		validateFile = "";
		downloadFile = "span_RateValuedownload_"+select_file_name;
		fileID = "cv_fileID"+select_file_name;
		
		if(rate_cat == 's'){
			rate_cat_id = $("#cv_rate_Agespecific").val();
		}else{
			rate_cat_id = $("#cv_rate_AgeBand").val();	
		}
		
		sub_cat_id = $("#dbBox1_CL option:selected").attr("data-subcat");
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
	if(type == 1 || type == 2 || type == 3){
		tr_tbl = $("#tbody_PM_Rate"+select_file_name);
		data_level = $(tr_tbl).attr("data-level");
		
		if(data_level == 1){
			rate_type = $(tr_tbl).find("td:nth-child(2) select>option:selected").text();
			
			file_pattern = file_name.replace(cov_code, "{Code}");
			file_pattern = file_pattern.replace(rate_type, "{ประเภท}");
		}else{
			data_group = $(tr_tbl).attr("data-group");
			rate_type = $("#tbody_PM_Rate"+data_group).find("td:nth-child(2) select>option:selected").text();
			rate_band_type = $(tr_tbl).find("td:nth-child(2) label").text();
			
			file_pattern = file_name.replace(cov_code, "{Code}");
			file_pattern = file_pattern.replace(rate_type, "{ประเภท}");
			file_pattern = file_pattern.replace(rate_band_type, "{Bx}");
		}		
	}else if(type == 4){
		tr_tbl = $("#tbody_Extra_Rate"+select_file_name);
		rate_type = $(tr_tbl).find("td:nth-child(1) label").text();
		
		file_pattern = file_name.replace(cov_code, "{Code}");
		file_pattern = file_pattern.replace(rate_type, "{ประเภท}");
	}else if(type == 5){
		tr_tbl = $("#tbody_Rate_Value"+select_file_name);
		data_level = $(tr_tbl).attr("data-level");
		
		if(data_level == 1){
			rate_type = $(tr_tbl).find("td:nth-child(1) label").text();
			
			file_pattern = file_name.replace(cov_code, "{Code}");
			file_pattern = file_pattern.replace(rate_type, "{ประเภท}");
		}else{
			data_group = $(tr_tbl).attr("data-group");
			rate_type = $("#tbody_Rate_Value"+data_group).find("td:nth-child(1) label").text();
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
			
			$("#base64_fileTXT_CL").val("");
			
			$("#"+modal_name).modal("show");	
			
			//Added
			convertToBase64(selectFile,file_type_id);
			 /*if(checkfile_policyDupicate(file_name,"txt") == false){			  
				 message = "ไม่สามารถอัพโหลดได้ เนื่องจากมีชื่อไฟล์นี้อยู่แล้ว";
				 alertError(message);					    
				 $("#fileuploads_Tax"+select_file_name+"_CL").val("");
			 }*/
			
			
			$("#"+file_button1).unbind();
			$("#"+file_button1).click(function() {
				/*save file*/				
				//set_Filevalue(type,select_file_name,file_id,file_type_id,file_name,file_path,file_pattern,rate_cat_id,sub_cat_id,user_code);		
				/*end save file*/
				 $("#modal_waiting").modal('show');
				 var base64 = $("#base64_fileTXT_CL").val();
				 if(base64 != ""){
					 var dateTime = getCurrentDate();
		    		   var file_name_update = "3_"+dateTime+".txt"
			    	   datajson = {				        	
					    		"method" : "uploadFile_txt",
					    		"passInsurance" : $("#pass_Insurance_coverage_cl").val(),
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
							    	if(type == 1 || type == 2 || type == 3){
							    		/*PM_Rate*/
							    		$("#rm_rateLayout"+select_file_name).val(response.rate_layout_id);
							    		$("#rm_fileID"+select_file_name).val(response.file_id);
							    	}else if(type == 4){
							    		/*Extra_Rate*/
							    		$("#ext_rateLayout"+select_file_name).val(response.rate_layout_id);
							    		$("#ext_fileID"+select_file_name).val(response.file_id);
							    	}else if(type == 5){
							    		/*CV_Rate*/
							    		$("#cv_rateLayout"+select_file_name).val(response.rate_layout_id);
							    		$("#cv_fileID"+select_file_name).val(response.file_id);
							    	}
							    	
							    	$("#"+textFile).val(file_name);
									
									if(validateFile != ""){
										$("#"+validateFile).css("display", "none");
									}
									
									$('#'+cv_button+">span").removeClass("activecolorgray").addClass("activecolorblue");
//									$('#'+cv_button).attr("onclick","open_modalCV("+type+",this.id)");
									$("#"+downloadFile+">span").removeClass("activecolorgray").addClass("activecolorblue").attr("onclick", "openFile_target('"+file_name+"','"+obj_ref+"','txt_download')");
									
									$("#"+button_modal).attr("onclick", "openFile_target('"+file_name+"','"+obj_ref+"','txt_download')");
									$('#'+cv_button+">span").attr("onclick","openFileTextBasePlan_CL('"+file_name+"','"+obj_ref+"', "+tbl_col+", '"+tbl_name+"', '"+modal_cv+"')");
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
				$('#'+downloadFile+">span").removeClass("activecolorblue").addClass("activecolorgray");
				
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
			$("#base64_fileTXT_CL").val("");
			
			$("#"+modal_name).modal("show");	
			
			//Added
			convertToBase64(selectFile,file_type_id);
			 /*if(checkfile_policyDupicate(file_name,"txt") == false){			  
				 message = "ไม่สามารถอัพโหลดได้ เนื่องจากมีชื่อไฟล์นี้อยู่แล้ว";
				 alertError(message);					    
				 $("#fileuploads_PMRate"+select_file_name+"_CL").val("");
			 }*/
			
			$("#"+file_button1).unbind();
			$("#"+file_button1).click(function() {
				
				/*save file*/
				//set_Filevalue(type,select_file_name,file_id,file_type_id,file_name,file_path,file_pattern,rate_cat_id,sub_cat_id,user_code);		
				/*end save file*/
				 $("#modal_waiting").modal('show');
				 var base64 = $("#base64_fileTXT_CL").val();
				 if(base64 != ""){
					 var dateTime = getCurrentDate();
		    		 var file_name_update = "3_"+dateTime+".txt"
			    	   datajson = {				        	
					    		"method" : "uploadFile_txt",
					    		"passInsurance" : $("#pass_Insurance_coverage_cl").val(),
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
								    	if(type == 1 || type == 2 || type == 3){
								    		/*PM_Rate*/
								    		$("#rm_rateLayout"+select_file_name).val(response.rate_layout_id);
								    		$("#rm_fileID"+select_file_name).val(response.file_id);
								    	}else if(type == 4){
								    		/*Extra_Rate*/
								    		$("#ext_rateLayout"+select_file_name).val(response.rate_layout_id);
								    		$("#ext_fileID"+select_file_name).val(response.file_id);
								    	}else if(type == 5){
								    		/*CV_Rate*/
								    		$("#cv_rateLayout"+select_file_name).val(response.rate_layout_id);
								    		$("#cv_fileID"+select_file_name).val(response.file_id);
								    	}
								    	
								    	$("#"+textFile).val(file_name);
										if(validateFile != ""){
											$("#"+validateFile).css("display", "none");	
										}
										$('#'+cv_button+">span").removeClass("activecolorgray").addClass("activecolorblue");
//										$('#'+cv_button).attr("onclick","open_modalCV("+type+",this.id)");
										$("#"+downloadFile+">span").removeClass("activecolorgray").addClass("activecolorblue").attr("onclick", "openFile_target('"+file_name+"','"+obj_ref+"','txt_download')");
										$("#"+button_modal).attr("onclick", "openFile_target('"+file_name+"','"+obj_ref+"','txt_download')");
										$('#'+cv_button+">span").attr("onclick","openFileTextBasePlan_CL('"+file_name+"','"+obj_ref+"', "+tbl_col+", '"+tbl_name+"', '"+modal_cv+"')");
										   
										$("#base64_fileTXT_CL").val("");
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
				 

				/*$('#'+cv_button).click(function(){
					$("#"+modal_cv).modal('show');
				})*/
				
			});
			
			$("#"+file_button2).click(function() {
				$("#"+textFile).val("");
				$('#'+cv_button).prop('disabled', true);
				$('#'+cv_button+">span").removeClass("activecolorblue").addClass("activecolorgray");
				$('#'+downloadFile+">span").removeClass("activecolorblue").addClass("activecolorgray");
				
			});
		}
	}	
}

function set_Filevalue(type,id,file_id,file_type_id,file_name,file_path,file_pattern,rate_cat_id,sub_cat_id,user_code){
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
	    	if(type == 1 || type == 2 || type == 3){
	    		/*PM_Rate*/
	    		$("#rm_rateLayout"+id).val(response.rate_layout_id);
	    		$("#rm_fileID"+id).val(response.file_id);
	    	}else if(type == 4){
	    		/*Extra_Rate*/
	    		$("#ext_rateLayout"+id).val(response.rate_layout_id);
	    		$("#ext_fileID"+id).val(response.file_id);
	    	}else if(type == 5){
	    		/*CV_Rate*/
	    		$("#cv_rateLayout"+id).val(response.rate_layout_id);
	    		$("#cv_fileID"+id).val(response.file_id);
	    	}else if(type == 21){
	    		/*EM*/
	    		$("#em_rateLayout"+id).val(response.rate_layout_id);
	    		$("#em_fileID"+id).val(response.file_id);
	    	}else if(type == 22){
	    		/*SA*/
	    		$("#decrease_rateLayout"+id).val(response.rate_layout_id);
	    		$("#decrease_fileID"+id).val(response.file_id);
	    	}else if(type == 32){
	    		/*CV Low*/
	    		$("#cvLow_rateLayout"+id).val(response.rate_layout_id);
	    		$("#cvLow_fileID"+id).val(response.file_id);
	    	}					    	
	    },
	    error : function(response) {	
	    	console.log("save file error");
	    }
	});		
}

function open_modalCV(type,id){
	var tbl_name = "";
	var rowID = "";
	var head_modal = "";
	var head_modal_text = "";
	if(type == 1){		
		tbl_name = "tb_PM_Rate1";
		modal_cv = "modal_PMRate_CL";
		rowID = id.replace("span_PM_Rateopen_","");
		head_modal = $("#"+tbl_name).find("#tbody_PM_Rate"+rowID+" td:nth-child(3) input[type='text']").val();
		
	}else if(type == 2){
		tbl_name = "tb_PM_Rate1";
		modal_cv = "modal_PMRate4Col_CL";
		rowID = id.replace("span_PM_Rateopen_","");
		head_modal = $("#"+tbl_name).find("#tbody_PM_Rate"+rowID+" td:nth-child(3) input[type='text']").val();
		
	}else if(type == 3){
		tbl_name = "tb_PM_Rate1";
		modal_cv = "modal_PMRate4Col_CL";
		rowID = id.replace("span_PM_Rateopen_","");
		head_modal = $("#"+tbl_name).find("#tbody_PM_Rate"+rowID+" td:nth-child(3) input[type='text']").val();
		
	}else if(type == 4){
		tbl_name = "tb_Extra_Rate";
		modal_cv = "modal_ExtraRate_CL";
		rowID = id.replace("span_Extra_Rateopen_","");
		head_modal = $("#"+tbl_name).find("#tbody_Extra_Rate"+rowID+" td:nth-child(2) input[type='text']").val();
	}else if(type == 5){;
		tbl_name = "tb_RateValue1";
		modal_cv = "cvStandardRisk_CL";
		rowID = id.replace("span_RateValueopen_","");
		head_modal = $("#"+tbl_name).find("#tbody_Rate_Value"+rowID+" td:nth-child(2) input[type='text']").val();
	}else if(type == 6){;
		tbl_name = "";
		modal_cv = "modal_inputExtra_RateView";
		rowID = "";
		head_modal = $("#input_fileCal_1_CL").val();
	}else if(type == 7){;
		tbl_name = "";
		modal_cv = "modal_inputSA_CL_Rate";
		rowID = "";
		head_modal = $("#input_fileCal_2_CL").val();
	}	
	
	$("#"+modal_cv+" .modal-header>h4>span").html(head_modal);
	$("#"+modal_cv).modal('show');
}

$(document).on('focusin', '#sl_insurance_premium_Extra_cl', function(){
	 $(this).data('val', $(this).val());
}).on('change','#sl_insurance_premium_Extra_cl', function(){
	var prev_rate = $(this).data('val');
	var current_rate = $(this).val();	
	
	var numrow = $("#tb_Extra_Rate>tbody>tr").length;
	var select_text = $("#sl_insurance_premium_Extra_cl option:selected").text();
	var baseplanCode_CL = $("#pass_Insurance_coverage_cl").val();
	var file_layout = "";
	
	var check_file = 0;
	$("#tb_Extra_Rate>tbody td:nth-child(2) :input[type='text']").each(function(index) {
		if($(this).val() != ""){
			check_file++;
		}
	});
	
	if(check_file > 0){					
		message = "เคยนำเข้าไฟล์ Extra_Rate ไว้แล้ว ต้องการเปลี่ยนตารางเบี้ยประกัน ใช่หรือไม่";
		alertValuePage_Warning2(message);

		$("#btn_value_warning_submit2").click(function(){
			check_file_extra();
		});
		
		$("#btn_value_warning_cancel2").click(function(){				
			 $("#modal_value_warning2").modal('hide');
			 $("#sl_insurance_premium_Extra_cl").val(prev_rate).attr('selected', 'selected');
	     });
		
	}else{
		check_file_extra();
	}		

 function check_file_extra(){

	for(var i=0; i<numrow; i++){
		var select_extra_text = $("#tb_Extra_Rate>tbody>tr").eq(i).find("td:nth-child(1)").text();
		var select_extra_id = $("#tb_Extra_Rate>tbody>tr").eq(i).attr("id");
			select_extra_id = Number(select_extra_id.replace("tbody_Extra_Rate",""));
	
		file_layout = $("#sl_insurance_premium_Extra_cl option:selected").val();
		
		file_layout = file_layout+select_extra_text+"_"+baseplanCode_CL;
		var uploadfile = "selectFileRate_CL(4,'s','fileuploads_ExtraRate"+select_extra_id+"_CL','"+file_layout+"','','sl_insurance_premium_Extra_cl','span_Extra_Rateopen_"+select_extra_id+"')";		
		
		if(select_text != "None"){
			$("#fileuploads_ExtraRateText"+select_extra_id+"_CL").val("");
			$("#fileuploads_ExtraRate"+select_extra_id+"_CL").val(null);
			$("#fileuploads_ExtraRateText"+select_extra_id+"_CL").attr("placeholder",file_layout+".txt");
			$("#fileuploads_ExtraRate"+select_extra_id+"_CL").attr("onchange",uploadfile);
			$("#fileuploads_ExtraRate"+select_extra_id+"_CL").attr("disabled",false);
			$("#spanExtraRate"+select_extra_id+"_CL").attr("disabled",false);
			$("#validate_extrarate"+select_extra_id+"_CL").css("display","inline-block");
			$("#span_Extra_Rateopen_"+select_extra_id+">span").removeClass("activecolorblue").addClass("activecolorgray");
			$("#span_Extra_Ratedownload_"+select_extra_id+">span").removeClass("activecolorblue").addClass("activecolorgray");
		}else{
			$("#fileuploads_ExtraRateText"+select_extra_id+"_CL").val("");
			$("#fileuploads_ExtraRate"+select_extra_id+"_CL").val(null);
			$("#fileuploads_ExtraRateText"+select_extra_id+"_CL").attr("placeholder","");
			$("#fileuploads_ExtraRate"+select_extra_id+"_CL").removeAttr("onchange");
			$("#fileuploads_ExtraRate"+select_extra_id+"_CL").attr("disabled",true);
			$("#spanExtraRate"+select_extra_id+"_CL").attr("disabled",true);
			$("#validate_extrarate"+select_extra_id+"_CL").css("display","none");
			$("#span_Extra_Rateopen_"+select_extra_id+">span").removeClass("activecolorblue").addClass("activecolorgray");
			$("#span_Extra_Ratedownload_"+select_extra_id+">span").removeClass("activecolorblue").addClass("activecolorgray");
		}

	}
 }
});

/*SA_CL*/
$(document).on('focusin', '#sl_Reduced_capital_Cal2_CL', function(){
	 $(this).data('val', $(this).val());
}).on('change','#sl_Reduced_capital_Cal2_CL', function(){
	var prev_rate = $(this).data('val');
	var current_rate = $(this).val();	
	
	var select_text = $("#sl_Reduced_capital_Cal2_CL option:selected").text();
	var baseplanCode_CL = $("#pass_Insurance_coverage_cl").val();
	var file_layout = "";

	if($("#input_fileCal_2_CL").val() != 0){					
		message = "เคยนำเข้าไฟล์ SA_CL_Rate ไว้แล้ว ต้องการเปลี่ยนตารางเบี้ยประกัน ใช่หรือไม่";
		alertValuePage_Warning2(message);

		$("#btn_value_warning_submit2").click(function(){
			check_file_SA();
		});
		
		$("#btn_value_warning_cancel2").click(function(){				
			 $("#modal_value_warning2").modal('hide');
			 $("#sl_Reduced_capital_Cal2_CL").val(prev_rate).attr('selected', 'selected');
	     });
		
	}else{
		check_file_SA();
	}		

function check_file_SA(){
		file_layout = $("#sl_Reduced_capital_Cal2_CL option:selected").val();
		file_layout_text = $("#sl_Reduced_capital_Cal2_CL option:selected").text();
		
		file_layout = file_layout+baseplanCode_CL;
		var uploadfile = "selectFileCal_CL(2,'"+file_layout+"','select_fileCal_2_CL')";		
		
		if(file_layout_text != "None"){			
			$("#input_fileCal_2_CL").val("");
			$("#select_fileCal_2_CL").val(null);
			$("#input_fileCal_2_CL").attr("placeholder",file_layout+".txt");
			$("#select_fileCal_2_CL").attr("onchange",uploadfile);
			$("#select_fileCal_2_CL").attr("disabled",false);
			$("#spanBoxCal2_CL").attr("disabled",false);
			$("#cv_SAExtra_Rate_cl").attr("disabled",true);
			$("#validate_filerate2_CL").css("display","inline-block");
		}else{
			$("#input_fileCal_2_CL").val("");
			$("#select_fileCal_2_CL").val(null);
			$("#input_fileCal_2_CL").attr("placeholder","");
			$("#select_fileCal_2_CL").attr("onchange","");
			$("#select_fileCal_2_CL").attr("disabled",true);
			$("#spanBoxCal2_CL").attr("disabled",true);
			$("#cv_SAExtra_Rate_cl").attr("disabled",true);
			$("#validate_filerate2_CL").css("display","none");
		}
 }
});


/*ตารางมูลค่ากรมธรรม์*/
$(document).on('focusin', '#dbBox1_CL', function(){
	 $(this).data('val', $(this).val());
}).on('change','#dbBox1_CL', function(){
	var prev_rate = $(this).data('val');
	var current_rate = $(this).val();	
	
	var numrow = $("#tb_RateValue1>tbody>tr").length;
	var select_text = $("#dbBox1_CL option:selected").text();
	var select_value = $("#dbBox1_CL").val();
	var baseplanCode_CL = $("#pass_Insurance_coverage_cl").val();
	
	if(select_text != "None"){
		$("#validate_dd_file1").hide();
	}else{
		$("#validate_dd_file1").show();
	}
	
	var check_file = 0;
	$("#tb_RateValue1>tbody td:nth-child(2) :input[type='text']").each(function(index) {
		if($(this).val() != ""){
			check_file++;
		}
	});
	
	if(check_file > 0){		
		message = "เคยนำเข้าไฟล์ CV ไว้แล้ว ต้องการเปลี่ยนตารางมูลค่ากรมธรรม์ ใช่หรือไม่";
		//$('#txt_value_alert_error3').text(message);
	    //$('#modal_value_warning3').modal('show');
		alertValuePage_Warning3(message);

		$("#btn_value_warning_submit3").click(function(){
			check_file_cv();
		});
		
		$("#btn_value_warning_cancel3").click(function(){				
			 $("#modal_value_warning3").modal('hide');
			 $("#dbBox1_CL").val(prev_rate).attr('selected', 'selected');
	     });
		
	}else{
		check_file_cv();
	}		

function check_file_cv(){
	for(var i=0; i<numrow; i++){
		var select_cv_text = $("#tb_RateValue1>tbody>tr").eq(i).find("td:nth-child(1)").text();
		var select_cv_id = $("#tb_RateValue1>tbody>tr").eq(i).attr("id");
			select_cv_id = Number(select_cv_id.replace("tbody_Rate_Value",""));
			
		var numrow_band = $("#tb_RateValue1>tbody>tr[data-group='"+select_cv_id+"']").lenght;	
		
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

			var uploadfile = "selectFileRate_CL(5,'s','fileuploads_RateValue"+select_cv_id+"_CL','"+file_layout1_text+"','"+file_layout2_text+"','dbBox1_CL','span_RateValueopen_"+select_cv_id+"')";			
			
			$("#fileuploads_RateValueText"+select_cv_id+"_CL").val("");
			$("#fileuploads_RateValue"+select_cv_id+"_CL").val(null);
			$("#fileuploads_RateValueText"+select_cv_id+"_CL").attr("placeholder",placeholder);
			$("#fileuploads_RateValue"+select_cv_id+"_CL").attr("onchange",uploadfile);
			$("#fileuploads_RateValue"+select_cv_id+"_CL").attr("disabled",false);
			$("#spanRateValue"+select_cv_id+"_CL").attr("disabled",false);
			//$("#validate_RateValue"+select_cv_id+"_CL").css("display","inline-block");
			$("#span_RateValueopen_"+select_cv_id+">span").removeClass("activecolorblue").addClass("activecolorgray");	
			$("#span_RateValuedownload_"+select_cv_id+">span").removeClass("activecolorblue").addClass("activecolorgray");	
			$("#tb_RateValue1 tbody>tr input:hidden").prop("disabled", false);
			
			 $("#tb_RateValue1>tbody>tr[data-group='"+select_cv_id+"']").each(function(){
				 var band = $(this).find("td:nth-child(1)").text();
				 var select_band_id = $(this).attr("id");
					 select_band_id = select_band_id.replace("tbody_Rate_Value","");
				 
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
				 
				 var uploadfile_band = "selectFileRate_CL(5,'b','fileuploads_RateValue"+select_band_id+"_CL','"+file_layout1_band+"','"+file_layout2_band+"','dbBox1_CL','span_RateValueopen_"+select_band_id+"')";
				 
				 $("#fileuploads_RateValueText"+select_band_id+"_CL").val("");
				 $("#fileuploads_RateValue"+select_band_id+"_CL").val(null);
				 $("#fileuploads_RateValueText"+select_band_id+"_CL").attr("placeholder",placeholder_band);
				 $("#fileuploads_RateValue"+select_band_id+"_CL").attr("onchange",uploadfile_band);
				 $("#fileuploads_RateValue"+select_band_id+"_CL").attr("disabled",false);
				 $("#spanRateValue"+select_band_id+"_CL").attr("disabled",false);
				 //$("#validate_RateValue"+select_band_id+"_CL").css("display","inline-block");
				 $("#span_RateValueopen_"+select_band_id+">span").removeClass("activecolorblue").addClass("activecolorgray");
				 $("#span_RateValuedownload_"+select_band_id+">span").removeClass("activecolorblue").addClass("activecolorgray");	
			 });
			
		}else{
			$("#fileuploads_RateValueText"+select_cv_id+"_CL").val("");
			$("#fileuploads_RateValue"+select_cv_id+"_CL").val(null);
			$("#fileuploads_RateValueText"+select_cv_id+"_CL").attr("placeholder","");
			$("#fileuploads_RateValue"+select_cv_id+"_CL").attr("onchange","");
			$("#fileuploads_RateValue"+select_cv_id+"_CL").attr("disabled",true);
			$("#spanRateValue"+select_cv_id+"_CL").attr("disabled",true);
			//$("#validate_RateValue"+select_cv_id+"_CL").css("display","none");
			$("#span_RateValueopen_"+select_cv_id+">span").removeClass("activecolorblue").addClass("activecolorgray");	
			$("#span_RateValuedownload_"+select_cv_id+">span").removeClass("activecolorblue").addClass("activecolorgray");	
			
			$("#tb_RateValue1>tbody>tr[data-group='"+select_cv_id+"']").each(function(){
				 var band = $(this).find("td:nth-child(1)").text();
				 var select_band_id = $(this).attr("id");
					 select_band_id = select_band_id.replace("tbody_Rate_Value","");
				
				$("#fileuploads_RateValueText"+select_band_id+"_CL").val("");
				$("#fileuploads_RateValue"+select_band_id+"_CL").val(null);
				$("#fileuploads_RateValueText"+select_band_id+"_CL").attr("placeholder","");
				$("#fileuploads_RateValue"+select_band_id+"_CL").attr("onchange","");
				$("#fileuploads_RateValue"+select_band_id+"_CL").attr("disabled",true);
				$("#spanRateValue"+select_band_id+"_CL").attr("disabled",true);
				//$("#validate_RateValue"+select_band_id+"_CL").css("display","none");
				$("#span_RateValueopen_"+select_band_id+">span").removeClass("activecolorblue").addClass("activecolorgray");
				$("#span_RateValuedownload_"+select_band_id+">span").removeClass("activecolorblue").addClass("activecolorgray");
			 });
		
		}		
	}
 }
});

/*Basic Information by KHWAN*/

/*Mode 8,9*/
function check_mode_value(id,value){	
	var num_checked = $("#tbl_BI_Mode_CL>tbody input:checkbox:checked").length;
	if(num_checked > 0){
		$("#validate_input8_cl").hide();
	}else{
		$("#validate_input8_cl").show();
	}
	
	if($("#"+id).prop("checked") == true){
		if(value == "SINGLE_SHORT" || value == "SINGLE_PREM"){
			$("#validate_input16_cl").css("display","none");
			$("#rd_Time_insurance_premium_cl").prop("checked", true).prop("readonly", true);
			$("#text_Time_insurance_premium_cl").val("1").prop("readonly", true).prop("disabled", false);
			$("#dmy_4_cl").attr("readonly", "readonly").prop("disabled", false);
			$("#dmy_4_cl option:contains('ปี')").attr("selected", "selected");
			$("#ch_sperately_pay_ch").prop("disabled", false);
			
			$("#text_insurance_premium_cl").val("").prop("disabled", true);
			$("#dmy_3_cl").prop("disabled", true);			
			
			$("#tbl_BI_Mode_CL>tbody input:checkbox:not(:checked)").each(function(){
				$(this).prop("disabled", true);
			});
			
		}else if(value != "SINGLE_SHORT" || value != "SINGLE_PREM"){
			$("#tbl_BI_Mode_CL>tbody input:checkbox:not(:checked)").each(function(){
				if($(this).val() == "SINGLE_SHORT" || $(this).val() == "SINGLE_PREM"){
					$(this).prop("disabled", true);
				}	
			});
		}else{
		
			$("#tbl_BI_Mode_CL>tbody input:checkbox").each(function(){
				$(this).prop("disabled", false);
			});
		}
	}else{
		if(value == "SINGLE_SHORT" || value == "SINGLE_PREM"){
			$("#validate_input16_cl").css("display","inline-block");
			$("#rd_Time_insurance_premium_cl,#rd_insurance_premium_cl").prop("checked",false);
			$("#text_Time_insurance_premium_cl").val("");
			$("#text_Time_insurance_premium_cl, #dmy_4_cl").prop("disabled", true);
			$("#dmy_4_cl option:contains('ปี')").attr("selected", "selected");
			
			$("#tbl_BI_Mode_CL>tbody input:checkbox").each(function(){
				$(this).prop("disabled", false);
			});
		}else{
			var num_count = $("#tbl_BI_Mode_CL>tbody input:checkbox:checked").length;
			if(num_count <= 0){
				$("#tbl_BI_Mode_CL>tbody input:checkbox").prop("disabled", false);
			}
		}		
	}
}

/*check from-to อายุที่ได้รับความเห็นชอบ*/
function check_fromto_age(){
	
	if($("#age_To_cl").val() != ""){
		$("#age_Start_cl").on('blur', function () {			

		  var from_value = Number($('#age_Start_cl').val());
		  var to_value = Number($('#age_To_cl').val());	
		  
		  if(from_value > to_value){
				message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
				alertError(message);
				$('#age_Start_cl').val("").focus();
			}
		});
	
	   $("#age_To_cl").on('blur', function () {		

		  var from_value = Number($('#age_Start_cl').val());
		  var to_value = Number($('#age_To_cl').val());	
		 
		  if(from_value > to_value){
			  	message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
				alertError(message);
				$('#age_To_cl').val("").focus();
		}

		});
	}
}

function openFileTextBasePlan_CL(file_name,file_ref,tableCol,tb_name,modal_name){
	/*call data*/

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

    	 $("#download_tb_inputExtra_RateView").attr("onclick", "openFile_target('"+file_name+"','"+file_ref+"','txt_download')");
    		     
 
    	  }else if(tableCol == 54){
    		  
	    	   col1 = textRow[i].substr(0,3);
	   		   col2 = textRow[i].substr(3,2);
	   		   col3 = textRow[i].substr(5,1);
	   		   col4 = textRow[i].substr(6,2);
	   		   col5 = textRow[i].substr(8,2);
	   		  
	   		   tableRow += "<tr>"+
	   			"<td class='text-center'>"+col1+"</td>"+
	   			"<td class='text-center'>"+col2+"</td>"+
	   			"<td class='text-center'>"+col3+"</td>"+
	   			"<td class='text-right'>"+col4+"</td>"+
	   			"<td class='text-right'>"+col5+"</td>"+
	   			"</tr>";    
   		   
    		  $("#download_tb_inputExtra_RateView").attr("onclick", "openFile_target('"+file_name+"','"+file_ref+"','txt_download')");
    		     
 
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
    		  
    		  $("#download_tbl_StandardRisk_CL").attr("onclick", "openFile_target('"+file_name+"','"+file_ref+"','txt_download')");
    		  
    	  } else if(tableCol == 6){
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
    		   
    		   $("#download_tbl_NotStandardRisk_CL").attr("onclick", "openFile_target('"+file_name+"','"+file_ref+"','txt_download')");
     		  
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
		   
		   $("#download_tb_TaxReduce_view").attr("onclick", "openFile_target('"+file_name+"','"+file_ref+"','txt_download')");
		   $("#download_tbl_PMRatePlan4Col_CL").attr("onclick", "openFile_target('"+file_name+"','"+file_ref+"','txt_download')");
			
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
    		   
    		   $("#download_tbl_ExtraRatePlan_CL").attr("onclick", "openFile_target('"+file_name+"','"+file_ref+"','txt_download')");
   			
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
          }
        
      }
      $("#"+tableName+">tbody").append(tableRow);	    	    	  	
      /*
      if ($.fn.dataTable.isDataTable( "#"+tableName ) ) {   	  
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

function selectFileTXT_CL(type,select_file,file_format,file_format2,view_btn){
	var tbl_name = "";
	var tbl_col = "";
	var view_button = view_btn;
	var select_file_name = "";
	var validateFile = "";
	var cov_code = $("#pass_Insurance_coverage_cl").val();
	
	/*var for save file*/
	var file_id = "";   	
	var file_type_id = "";
 	var file_url = "";
 	var user_code = "0000000";
 	var datajson = "";
 	
	/*ลดหย่อนภาษี*/
	if(type == 1){
		tbl_mainName = "tb_TaxReduce";
		tbl_name = "tb_TaxReduce_view";
		tblAuto_name = "tb_TaxReduce_viewAuto";
		modalAuto_name = "modal_TableTaxReduceAuto";
		modal_name = "modal_TableTaxReduce";
		tbl_col = 41;		
		file_button1 = "btn_submit_TaxAuto";
		file_button2 = "btn_cancel_TaxAuto";
		del_button = "span_TaxDel";
		download_button = "span_Taxdownload";
		download_modal = "download_tb_TaxReduce_view"
		
		select_file_name = select_file.replace("fileuploads_Tax","");
		select_file_name = select_file_name.replace("_CL","");
		selectFile = "fileuploads_Tax"+select_file_name+"_CL";
		textFile = "fileuploads_TaxText"+select_file_name+"_CL";
		
		/*send to servlet*/
		file_id = $("#hdd_fileID"+select_file_name).val();   	
		file_type_id = "3";
		
		rate_cat_id = $("#tax_type"+select_file_name).val();
		sub_cat_id = $("#hdd_rateSub"+select_file_name).val();
		
	}
	
	var headerText = $("#"+tbl_mainName+">tbody>tr").eq(Number(select_file_name)-1).find("td:nth-child(2)>input").val();
	
	$("#"+selectFile).unbind();
	$("#"+selectFile).click(function () {
	    this.value = null;	 
	});

	$("#"+tblAuto_name+" tbody").empty();
	$("#"+tbl_name+" tbody").empty();
	var file_name = $("#"+selectFile).val().replace(/\\/g, '/').replace(/.*\//, '');
	var file_path = $("#"+selectFile).val();
	var file_pattern = file_name.replace(cov_code, "{Code}");
	//alert(file_pattern);
		
	//$("#select_file_"+select_file+"_CL").unbind("change");	
	
	$("#"+modalAuto_name+" .modal-header>h4>span").text(file_name);
	//$("#"+modal_name+" .modal-header>h4>span").html(" ("+headerText+")");
	$("#"+file_button1).unbind();


	 
	if(file_format2 != ""){
		if(check_filename(selectFile, file_format, file_format2) == false){
			$("#"+textFile).val("");
			$("#"+selectFile).val("");
			$('#'+view_button).prop('disabled', true);		
			$('#'+view_button+">span").removeClass("activecolorblue").addClass("activecolorgray");
			$("#base64_fileTXT_CL").val("");

		}else{
			
			$("#base64_fileTXT_CL").val("");
			openFile(event,selectFile,tbl_name,tbl_col);
			openFile(event,selectFile,tblAuto_name,tbl_col);			
			
			$("#"+modalAuto_name).modal("show");	
			
	
			//1.แปลงไฟล์เป็น base64 ดูในบรรทัด 5491
			 convertToBase64(selectFile,file_type_id);
			 /*if(checkfile_policyDupicate(file_name,"txt") == false){			  
				 message = "ไม่สามารถอัพโหลดได้ เนื่องจากมีชื่อไฟล์นี้อยู่แล้ว";
				 alertError(message);					    
				 $("#fileuploads_Tax"+select_file_name+"_CL").val("");
			 }*/
			
			$("#"+file_button1).unbind();
			$("#"+file_button1).click(function() {
				 var base64 = $("#base64_fileTXT_CL").val();
				 $("#modal_waiting").modal('show');
				 if( base64 != ""){
					 var dateTime = getCurrentDate();
		    		   var file_name_update = "3_"+dateTime+".txt"
			    	   datajson = {				        	
					    		"method" : "uploadFile_txt",
					    		"passInsurance" : $("#pass_Insurance_coverage_cl").val(),
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
								    	$("#hdd_fileID"+select_file_name).val(response.file_id);
								    	$("#hdd_layoutID"+select_file_name).val(response.rate_layout_id);
								    	$("#"+textFile).val(response.file_name);
								    	
								    	$("#"+textFile).val(file_name);

										$('#'+view_button+">span").removeClass("activecolorgray").addClass("activecolorblue");
										$('#'+del_button+"_"+select_file_name+">span").removeClass("activecolorgray").addClass("activecolorblue");
										$('#'+download_button+"_"+select_file_name+">span").removeClass("activecolorgray").addClass("activecolorblue").attr("onclick", "openFile_target('"+file_name+"','"+obj_ref+"','txt_download')");
										$("#"+download_modal).attr("onclick", "openFile_target('"+file_name+"','"+obj_ref+"','txt_download')");
										$('#'+view_button+">span").attr("onclick","openFileTextBasePlan_CL('"+file_name+"','"+obj_ref+"',"+tbl_col+",'"+tbl_name+"','"+modal_name+"')");
										
										 $("#modal_waiting").modal('hide');
										 $("body").addClass("body_nopadding");
								    },
								    error : function(response) {	
								    	//alert("save file in selectFileTXT_CL error");
								    	message = "ไม่สามารถบันทึกไฟล์ได้";
										alertError(message);
								    	$("#"+textFile).val("");
								    }
								});	
					 	    	
					 	    }
					    })
				 }
							
				/*end save file*/
/*
				$('#'+view_button).click(function(){
					
					var view_button_ID = view_button.replace("span_TaxOpen_","");
					var headerText_view = $("#"+tbl_mainName+">tbody>tr").eq(Number(view_button_ID)-1).find("td:nth-child(3) input[type='text']").val();
					$("#"+modal_name+" .modal-header>h4>span").html(headerText_view);
					
					$("#"+modal_name).modal('show');
				})		*/
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
		if(check_filename(selectFile, file_format, "") == false){
			$("#"+textFile).val("");
			$("#"+selectFile).val("");
			$('#'+view_button).prop('disabled', true);		
			$('#'+view_button+">span").removeClass("activecolorblue").addClass("activecolorgray");
		}else{
			openFile(event,selectFile,tbl_name,tbl_col);
			openFile(event,selectFile,tblAuto_name,tbl_col);
			$("#base64_fileTXT_CL").val("");
			$("#"+modalAuto_name).modal("show");	
			 convertToBase64(selectFile,file_type_id);
			$("#"+file_button1).unbind();
			$("#"+file_button1).click(function() {
				
				var base64 = $("#base64_fileTXT_CL").val();
				$("#modal_waiting").modal('show');
				 if( base64 != ""){
					 var dateTime = getCurrentDate();
		    		   var file_name_update = "3_"+dateTime+".txt"
			    	   datajson = {				        	
					    		"method" : "uploadFile_txt",
					    		"passInsurance" : $("#pass_Insurance_coverage_cl").val(),
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
								    	$("#hdd_fileID"+select_file_name).val(response.file_id);
								    	$("#hdd_layoutID"+select_file_name).val(response.rate_layout_id);
								    	$("#"+textFile).val(response.file_name);
								    	
								    	$("#"+textFile).val(file_name);				
										$('#'+view_button+">span").removeClass("activecolorgray").addClass("activecolorblue");
										$('#'+del_button+"_"+select_file_name+">span").removeClass("activecolorgray").addClass("activecolorblue");
										$('#'+download_button+"_"+select_file_name+">span").removeClass("activecolorgray").addClass("activecolorblue").attr("onclick", "openFile_target('"+file_name+"','"+obj_ref+"','txt_download')");
										$('#'+view_button+">span").attr("onclick","openFileTextBasePlan_CL('"+file_name+"','"+obj_ref+"', "+tbl_col+", '"+tbl_name+"', '"+modal_name+"')");
										$("#"+download_modal).attr("onclick", "openFile_target('"+file_name+"','"+obj_ref+"','txt_download')");
										$("body").addClass("body_nopadding");
										$("#modal_waiting").modal('hide');
						
								    },
								    error : function(response) {	
								    	//alert("save file in selectFileTXT_CL error");
								    	message = "ไม่สามารถบันทึกไฟล์ได้";
										alertError(message);
								    	$("#"+textFile).val("");
								    }
								});				
								/*end save file*/	
					 	    }
					    })
				 }
				/*

				$('#'+view_button).click(function(){
					var view_button_ID = view_button.replace("span_TaxOpen_","");
					var headerText_view = $("#"+tbl_mainName+">tbody>tr").eq(Number(view_button_ID)-1).find("td:nth-child(3) input[type='text']").val();
					$("#"+modal_name+" .modal-header>h4>span").html(headerText_view);
					
					$("#"+modal_name).modal('show');
				})*/		
			});
			
			$("#"+file_button2).click(function() {
				$("#"+textFile).val("");
				$('#'+view_button).prop('disabled', true);
				$('#'+view_button+">span").removeClass("activecolorblue").addClass("activecolorgray");
				$('#'+del_button+"_"+select_file_name+">span").removeClass("activecolorblue").addClass("activecolorgray");
				$('#'+download_button+"_"+select_file_name+">span").removeClass("activecolorblue").addClass("activecolorgray");
			});
		}	
	}
}

function reset_fileTax(id){
	$("#fileuploads_TaxText"+id+"_CL").val("");
	document.getElementById("fileuploads_Tax"+id+"_CL").value = null;
	
	$('#span_TaxOpen_'+id).unbind();
	$('#span_TaxOpen_'+id).prop('disabled', true);
	$('#span_TaxOpen_'+id+">span").removeClass("activecolorblue").addClass("activecolorgray");
	$('#span_TaxDel_'+id+">span").removeClass("activecolorblue").addClass("activecolorgray");
	$('#span_Taxdownload_'+id+">span").removeClass("activecolorblue").addClass("activecolorgray");
}

/*Edit by KHWAN (json data)*/
//covert decimal/double
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


/*1. Basic Information*/
function dataSave_BasicInformation(){
	
	/*gender*/
	var male = $("#ch_male_cl").prop("checked");
	var female = $("#ch_female_cl").prop("checked");
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
	$("#tbl_BI_Mode_CL input:checkbox:checked").each(function(){
		obj = {};
		obj["value"] = $(this).val();
		mode_data.push(obj);
	});
	
	/*filing_Channel*/
	var filing_data = [];
	$("#tbl_BI_FilingCN_CL input:checkbox:checked").each(function(){
		obj = {};
		obj["value"] = $(this).val();
		filing_data.push(obj);
	});
	
	/*สูตรการคำนวณอายุ*/
	var calAge_data = [];
	$("#tbl_BI_AgeCal_CL input:checkbox:checked").each(function(){
		obj = {};
		obj["value"] = $(this).val();
		calAge_data.push(obj);
	});
	
	/*ระยะประกันของสัญญาประกันชีวิต*/
	var term_contract_data = [];
	if($("#rd_anniversary_cl").prop("checked") == true){
		obj = {};
		obj["radio"] = $("#rd_anniversary_cl").val();
		obj["value"] = [];
		
		obj_value = {};		
		obj_value["min_age"] = "";
		obj_value["max_age"] = $("#text_anniversary_cl").val();
		obj_value["unit_age"] = $("#dmy_1_cl option:selected").val();
		obj["value"].push(obj_value);
		term_contract_data.push(obj);
	}else{
		obj = {};
		obj["radio"] = $("#rd_Time_length_cl").val();
		obj["value"] = [];
		$("#tb_BasicInformation1 tbody>tr").each(function(){
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
	if($("#ch_sperately_pay_ch").prop("checked") == true){
		ch_sperately_pay = true;
	}else{
		ch_sperately_pay = false;
	}
	if($("#rd_insurance_premium_cl").prop("checked") == true){
		obj = {};
		obj["radio"] = $("#rd_insurance_premium_cl").val();
		obj["age"] = $("#text_insurance_premium_cl").val();
		obj["unit_age"] = $("#dmy_3_cl option:selected").val();		
		obj["separate_pay"] = "";
	}else{
		obj = {};
		obj["radio"] = $("#rd_Time_insurance_premium_cl").val();
		obj["age"] = $("#text_Time_insurance_premium_cl").val();
		obj["unit_age"] = $("#dmy_4_cl option:selected").val();
		
		var num_chk = $("#tb_Sperately_Pay input:checkbox:checked").length;
		if(num_chk > 0){
			obj["separate_pay"] = [];
			
			$("#tb_Sperately_Pay tbody>tr").each(function(){
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
	
	/*ตารางมรณะ*/
	var mortality_data = [];
	$("#tb_BasicInformation_Death tbody>tr").each(function(){
		if($(this).find("input:checkbox").prop("checked") == true){
			obj = {};
			obj["apply_rate"] = null;
			obj["sex"] = $(this).find("td:nth-child(1) input").val();
			obj["margin_rate"] = null;
			obj["name_TH"] = $(this).find("td:nth-child(3) label").text();
			obj["name_EN"] = $(this).find("td:nth-child(3) label").text();
			obj["mort_tli_id"] = $(this).find("td:nth-child(3) input:hidden").val();
			mortality_data.push(obj);
		}		
	});
	
	/*ตารางทุพพลภาพ*/
	var tpd_data = [];
	$("#tb_BasicInformation_TPD tbody>tr").each(function(){
		if($(this).find("input:checkbox").prop("checked") == true){
			obj = {};
			obj["apply_rate"] = null;
			obj["sex"] = $(this).find("td:nth-child(1) input").val();
			obj["margin_rate"] = null;
			obj["name_TH"] = $(this).find("td:nth-child(3) label").text();
			obj["name_EN"] = $(this).find("td:nth-child(3) label").text();
			obj["tpd_tli_id"] = $(this).find("td:nth-child(3) input:hidden").val();
			tpd_data.push(obj);
		}		
	});
	
	/*ลดหย่อนภาษี*/
	var TaxReduce_data = [];
	$("#tb_TaxReduce tbody>tr").each(function(){
		if($(this).find("td:nth-child(3) input:text").val() != ""){
			var ID = $(this).attr("id");
				ID = ID.replace("tbody_TaxReduce_","");
			obj = {}			
			obj["rate_cat_id"] = $(this).find("td:nth-child(3) input[name='tax_type[]']").val();
			obj["text"] = $(this).find("td:nth-child(2) input").val();
			obj["rate_layout_id"] = $(this).find("#hdd_layoutID"+ID).val();
			obj["file_id"] = $(this).find("#hdd_fileID"+ID).val();
			TaxReduce_data.push(obj);
		}		
	});
	
	var json_data_BasicInfo = {
			        	"method": "Tab_Basic_Information",
			            "passInsurance": $("#pass_Insurance_coverage_cl").val(),
			            "name_th": $("#thai_Name_cl").val(),
			            "name_en": $("#eng_Name_cl").val(),
			            "sale_eff_date": $("#appStart_date_cl").val(),
			            "sale_exp_date": $("#appTo_date_cl").val(),
			            "min_age": $("#age_Start_cl").val(),
			            "max_age": $("#age_To_cl").val(),
			            "max_insure_age": $("#maximum_Protection_To_cl").val(),
			            "gender": gender,
			            "ch_separate_pay" : ch_sperately_pay,
			            "mode": JSON.stringify(mode_data),
			            "filing_Channel" : JSON.stringify(filing_data),
			            "cal_Age" : JSON.stringify(calAge_data),
			            "insurance_premium" : $("#sl_insurance_premium_cl option:selected").val(), /*เบี้ยประกัน*/
			            "protect_Type" : $("#sl_coverage_type_cl option:selected").val(), /*ประเภทความคุ้มครอง*/
			            "contract_Type" : $("#sl_contract_type_cl option:selected").val(), /*ประเภทสัญญา*/
			            "term_contract" : JSON.stringify(term_contract_data),
			            "payment_contract" : JSON.stringify(payment_contract_data),
			            "mortality_Tli" : JSON.stringify(mortality_data),
			            "tpd_Tli" : JSON.stringify(tpd_data),
			            "table_TaxReduce" : JSON.stringify(TaxReduce_data),
			            "prem_Rate" : Math.round10($("#text_Calculate_premiums_1cl").val()/100, -4),
			            "sum_decr_rate" : Math.round10($("#text_Calculate_premiums_2cl").val()/100, -4),
			        	"note" : $("#Basic_remark").val()
	   }
	
	$("#code_Coverage_CL").val($("#pass_Insurance_coverage_cl").val());
	$("#approve_nameTH_CL").val($("#thai_Name_cl").val());
	$("#approve_nameEN_CL").val($("#eng_Name_cl").val());
	
	$.ajax({
		url: 'BasePlanCL_SaveData_Servlet',
		type: "POST",
		async: false,
		data: json_data_BasicInfo,
	    success: function (response) {
	    	 var cov_status_PD = $("#cov_status").val();
	    	 var cov_status_RP = $("#cov_status_RP").val();
	    	 
	    	 if (response == "success"){
	    		 //enable tab
	    		 $("#menu_CL_7").removeClass("disabledAll");
	    		 $("#menu_CL_2").removeClass("disabledAll");
	    		 $("#menu_CL_3").removeClass("disabledAll");
	    		 $("#menu_CL_4").removeClass("disabledAll");
	    		 $("#menu_CL_5").removeClass("disabledAll");
	    		 $("#menu_CL_6").removeClass("disabledAll");
	    		 
	    		 if((cov_status_PD == "NEW" && cov_status_RP == "NEW") || (cov_status_PD == "" && cov_status_RP == "")){
	    			 console.log("save>> "+response)
	    			 
	    			 var flag = $("#flag_email_send_CL").val();
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
	 	 					
	 	 					objEmail["cov_code"] 			=$("#pass_Insurance_coverage_cl").val();
	 	 					objEmail["name_TH"] 			=$("#thai_Name_cl").val();
	 	 					objEmail["name_EN"] 			=$("#eng_Name_cl").val();
	 	 					
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
	 	 						 async : false,
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
	console.log("data:",json_data_BasicInfo);
	/*end create json*/
}

/*2.Policy Wording*/
function dataSave_PolicyWording(){
	
	/*ตาราง Policy Wording*/
	var arr_policy_data = [];
	$("#Policy_Table_CL tbody>tr").each(function(){
		
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
			"passInsurance"		: $("#pass_Insurance_coverage_cl").val(),
			"policyWording"		: JSON.stringify(arr_policy_data)
			
	}
	$.ajax({
		url: 'BasePlanCL_SaveData_Servlet',
		type: "POST",
		data: data_save,
	     success: function (response) {
	    	
	    }
	});
	console.log("save_policy:",data_save);
}

/*3.การใช้สิทธิ์ตามกรมธรรม์*/
function dataSave_privilege_insurance(){
	if($("#ch_expropriate_insurance").prop("checked") == true){
		value = true;
	}else{
		value = false;
	}
	
	var json_data_privilege_insurance = {
			"method" 			: "Tab_rights_insurance",
			"passInsurance"		: $("#pass_Insurance_coverage_cl").val(),
			"surrender_check" 	: value,
	}
	$.ajax({
		url: 'BasePlanCL_SaveData_Servlet',
		type: "POST",
		data: json_data_privilege_insurance,
	     success: function (response) {
	    	// alert (response);
	    	/*if (response == "success"){
	    	}else if (response == "fail"){
	    	}*/
	    }
	});
	//alert(JSON.stringify(json_data_privilege_insurance).replace(/\\/g, ''));
	console.log("cal_premium: "+json_data_privilege_insurance);
}

/*4.คำนวณเบี้ยประกัน*/
function dataSave_cal_premium(){
	/*age band*/
	var age_band = [];
	$("#tb_Age_Band input:checkbox:checked").each(function(){
		obj = {};
		obj["value"] = $(this).val();
		age_band.push(obj);
	});
	
	/*เบี้ยมาตรฐาน*/
	var sl_insurance_premium = [];	
	var tb_insurance_premium = [];
	var sl_prem_dis = [];	
	
	if($("#ch_standard_premium_cl").prop("checked") == true){
		if($("#sl_menu3_insurance_premium_cl option:selected").text() != "None"){
			obj = {};
			obj["pass"] = 1;
			obj["text"] = $("#sl_menu3_insurance_premium_cl option:selected").text();
			sl_insurance_premium.push(obj);	
			
			/*นำเข้า PM_Rate*/
			$("#tb_PM_Rate1 tbody>tr").each(function(){
				obj = {};
				var level = $(this).data("level");
				var id = $(this).attr("id");
					id = id.replace("tbody_PM_Rate","");
				
				if(level == 1){		
					obj["rate_cat_id"] = $("#rateCat_tbStardard").val();
					obj["rate_type"] = $(this).find("td:nth-child(2) select>option:selected").val();			
					obj["age_band_code"] = "";
				}else{
					var group = $(this).attr("data-group");
					obj["rate_cat_id"] = $("#rateCat_tbStardard_age").val();
					obj["rate_type"] = $("#tbody_PM_Rate"+group).find("td:nth-child(2) select>option:selected").val();
					//obj["rate_type"] = $(this).find("td:nth-child(1) input:hidden").val();
					obj["age_band_code"] = $(this).find("td:nth-child(2) label").text();
				}
				
				obj["rate_layout_id"] = $("#rm_rateLayout"+id).val();
				obj["file_id"] = $("#rm_fileID"+id).val();
				obj["file"] = $(this).find("td:nth-child(3) input:text").val();
				tb_insurance_premium.push(obj);
			});
		}
	}
	
	/*ส่วนลดเบี้ยประกัน*/
	if($("#ch_importInsurance_cl").prop("checked") == true){		
		obj = {};
		obj["is_prem_dis"] = true;
		obj["min_prem_dis_rate"] = Math.round10($("#discountInsurancePremiumsSta").val()/100, -4);
		obj["max_prem_dis_rate"] = Math.round10($("#discountInsurancePremiumsTo").val()/100, -4);				
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
	obj["text"] = $("#sl_insurance_premium_Extra_cl option:selected").text();
	if($("#sl_insurance_premium_Extra_cl option:selected").text() != "None"){
		sl_extra_premium.push(obj);	
	}
	
	var tb_extra_premium = [];
	var num_extra = $("#tb_Extra_Rate tbody>tr td:nth-child(2) input:text").val();
	if(num_extra != ""){
	$("#tb_Extra_Rate tbody>tr").each(function(){
		var id = $(this).attr("id");
			id = id.replace("tbody_Extra_Rate","");
			
		obj = {};
		obj["rate_type"] = $(this).find("td:nth-child(1) label").text();
		obj["age_band_code"] = "";
		
		obj["rate_cat_id"] = $("#rateCat_tbExtra").val();
		
		if($("#ext_rateLayout"+id).val() == null){
			obj["rate_layout_id"] = 0;
		}else{
			obj["rate_layout_id"] = $("#ext_rateLayout"+id).val();
		}
		
		if($("#ext_fileID"+id).val() == null){
			obj["file_id"] = 0;
		}else{
			obj["file_id"] = $("#ext_fileID"+id).val();
		}
		
		obj["file"] = $(this).find("td:nth-child(2) input:text").val();
		tb_extra_premium.push(obj);
	});
	}
	
	/*EM File*/
	var tb_em  = [];
	if($("#input_fileCal_1_CL").val() != ""){
		obj = {};
		obj["rate_type"] = "";
		obj["age_band_code"] = "";
		
		obj["rate_cat_id"] = $("#rateCat_inputEM").val();
		obj["rate_layout_id"] = $("#em_rateLayout1").val();
		obj["file_id"] = $("#em_fileID1").val();
		obj["file"] = $("#input_fileCal_1_CL").val();
		tb_em.push(obj);
	}
	
	/*ทุนคุ้มครองที่ลดลง*/
	var sl_capital_decrease = [];	
	obj = {};
	obj["pass"] = 1;
	obj["text"] = $("#sl_Reduced_capital_Cal2_CL option:selected").text();
	if($("#sl_Reduced_capital_Cal2_CL option:selected").text() != "None"){
		sl_capital_decrease.push(obj);
	}
	
	var tb_capital_decrease  = [];
	if($("#input_fileCal_2_CL").val() != ""){
		obj = {};
		obj["rate_type"] = "";
		obj["age_band_code"] = "";
		
		obj["rate_cat_id"] = $("#rateCat_inputSA").val();
		
		if($("#input_fileCal_2_CL").val()){
			obj["file_id"] = $("#decrease_fileID2").val();
			obj["rate_layout_id"] = $("#decrease_rateLayout2").val();
		}else{
			obj["file_id"] = "";
			obj["rate_layout_id"] = "";
		}
		obj["file"] = $("#input_fileCal_2_CL").val();
		tb_capital_decrease.push(obj);
	}
	
	/*checkbox*/
	var chk_extra = $("#ch_insurance_premium_Extra_cl").prop("checked");
	var chk_extra_value = false;
	if(chk_extra == true){
		chk_extra_value = true;
	}else{
		chk_extra_value = false;
	}
	
	var chk_sa = $("#ch_Reduced_capital_cl").prop("checked");
	var chk_sa_value = false;
	if(chk_sa == true){
		chk_sa_value = true;
	}else{
		chk_sa_value = false;
	}
	
	/*ความเสี่ยงมาตรฐาน*/
	var num_tb_risk = 0;
	$("#tb_RateValue1 tbody>tr input[type='text']").each(function(){
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
	
	var json_data_cal_premium = {
        	"method": "Tab_cal_insurance_premiums",
        	"passInsurance": $("#pass_Insurance_coverage_cl").val(),
            "age_Band": JSON.stringify(age_band),
            "select_insurance_premium" : JSON.stringify(sl_insurance_premium),
            "table_insurance_premium" : JSON.stringify(tb_insurance_premium),
            "prem_dis" : JSON.stringify(sl_prem_dis),
            "is_substd" : chk_extra_value,
            "select_extra_Rate" : JSON.stringify(sl_extra_premium),
            "table_extra_Rate" : JSON.stringify(tb_extra_premium),
            "min_EM": Math.round10($("#min_EM_cl").val()/100, -4),
            "max_EM": Math.round10($("#max_EM_cl").val()/100, -4),
            "EM_file" : JSON.stringify(tb_em),
            "is_sa_decr" : chk_sa_value,
            "select_capital_decrease" : JSON.stringify(sl_capital_decrease),
            "table_capital_decrease" : JSON.stringify(tb_capital_decrease),
            "is_standard_risk" : tb_risk
	}
	
	$.ajax({
		url: 'BasePlanCL_SaveData_Servlet',
		type: "POST",
		data: json_data_cal_premium,
	     success: function (response) {
	    	// alert (response);
	    	/*if (response == "success"){
	    	}else if (response == "fail"){
	    	}*/
	    }
	});
	console.log("cal_premium: ",json_data_cal_premium);
}

/************************* pun fix - save  ***************************/

//Tab Table value insurance
function save_tab_tableValueInsurance(){
	
	/* ตารางความเสี่ยงมาตรฐาน */
	var form1_cb_tb_Policy_pass = $("#dbBox1_CL option:selected").val();
	var form1_cb_tb_Policy_text = $("#dbBox1_CL option:selected").text();

	var standard_risk = [];
		obj_main = {};
		obj_main["pass"] = form1_cb_tb_Policy_pass;
		obj_main["text"] = form1_cb_tb_Policy_text;
		
		var form1_list_data = [];
		$("#tb_RateValue1 tbody>tr").each(function(){
			var file_value = $(this).find("td:nth-child(2) input:text").val();
			if(file_value != ""){
				var level = $(this).data("level");
				var id = $(this).attr("id");
					id = id.replace("tbody_Rate_Value","");
				
				obj = {};
				if(level == 1){		
					obj["rate_type"] = $(this).find('td:nth-child(1)').text();			
					obj["age_band_code"] = "";
					obj["rate_cat_id"] = $("#cv_rate_Agespecific").val();
				}else{
					var data_group = $(this).data("group");
					var rate_type = $("#tbody_Rate_Value"+data_group).find("td:nth-child(1) label").text();
					
					obj["rate_type"] = rate_type;
					obj["age_band_code"] = $(this).find("td:nth-child(1) label").text();
					obj["rate_cat_id"] =  $("#cv_rate_AgeBand").val();
				}

				//obj["rate_cat_id"] = $("#cv_rateCat"+id).val();
				obj["rate_layout_id"] = $("#cv_rateLayout"+id).val();
				obj["file_id"] = $("#cv_fileID"+id).val();
				obj["file"] = $(this).find('td:nth-child(2) input[type="text"]').val();
				form1_list_data.push(obj);
			}
		});
		obj_main["layout"] = form1_list_data;
		standard_risk.push(obj_main);
	
	/* ตารางความต่ำกว่าเสี่ยงมาตรฐาน */
	var form2_cb_tb_Policy_pass = $("#dbBox2_CL option:selected").val();
	var form2_cb_tb_Policy_text = $("#dbBox2_CL option:selected").text();
	//var form2_tb_input_CV_cv = $("#input_file_2_CL").val();
	var tb_cvLow  = [];
	obj = {};
	obj["rate_type"] = "";
	obj["age_band_code"] = "";
	
	obj["rate_cat_id"] = $("#cvLow_rateCat2").val();
	obj["rate_layout_id"] = $("#cvLow_rateLayout2").val();
	obj["file_id"] = $("#cvLow_fileID2").val();
	obj["file"] = $("#input_file_2_CL").val();
	tb_cvLow.push(obj);
	
	var standard_risk_row = new Array();
		obj = {};
		obj["pass"] = form2_cb_tb_Policy_pass;
		obj["text"] = form2_cb_tb_Policy_text;
		obj["layout"] = tb_cvLow;
	standard_risk_row.push(obj);
	
	var chk_std_risk = false;
	if($("#cbBox1_CL").prop("checked") == true){
		chk_std_risk = true;
	}else{
		chk_std_risk = false;
	}
	
	var chk_std_lowrisk = false;
	if($("#cbBox2_CL").prop("checked") == true){
		chk_std_lowrisk = true;
	}else{
		chk_std_lowrisk = false;
	}
	
	var data_json = {
					"method": "Tab_table_policy_value",
					"passInsurance": $("#pass_Insurance_coverage_cl").val(),
					"is_standard_risk" : chk_std_risk,
		            "standard_risk": JSON.stringify(standard_risk),
		            "is_standard_risk_row" : chk_std_lowrisk,
		            "standard_risk_row": JSON.stringify(standard_risk_row)  
		        }

	$.ajax({
		url: 'BasePlanCL_SaveData_Servlet',
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

//Tab save_tab_coverageBenefits
function save_tab_coverageBenefits(){
	var benefits_dead = $("#cbDie_CL").is(":checked");
	var protectPerson_dead = $("#cbDie_CL_person").is(":checked");
	var benefits_disability = $("#cbDisabled_CL").is(":checked");
	var protectPerson_disability = $("#cbDisabled_CL_person").is(":checked");
		
	/* กลุ่มเสียชีวิต */
	var group_dead = [];
		obj = {};
		obj["dead"] = benefits_dead;
		obj["insured_member"] = protectPerson_dead;
	group_dead.push(obj);
	
	/* กลุ่มทุพพลภาพถาวรสิ้นเชิง */
	var Group_disability = [];
		obj = {};
		obj["disability"] = benefits_disability;
		obj["insured_member"] = protectPerson_disability;
		Group_disability.push(obj);
	
	var data_json = {
		"method": "Tab_coverageBenefits",
		"passInsurance": $("#pass_Insurance_coverage_cl").val(),
		"Group_dead": JSON.stringify(group_dead),
		"Group_disability": JSON.stringify(Group_disability)
	}
		
	$.ajax({
		url: 'BasePlanCL_SaveData_Servlet',
		type: "POST",
		data: data_json,
	     success: function (response) {
	    	/*if (response == "success"){
	    	}else if (response == "fail"){
	    	}*/
	    }
	});
	console.log("data",data_json)
}
//ตาราง dead
function save_benefitsCoverage_dead(){
	
	var data_json = new Array();
	
	var row_length = $("#tbody_dieL_CL tbody>tr").length;
	//var row_hidden = Number($("#tbody_dieL_CL tbody>tr:hidden").length);	
	
	var row_hidden = 0;
	$("#tbody_dieL_CL tbody>tr").each(function(){
		var css = $(this).css("display");
		if(css == "none"){
			row_hidden++;
		}
	})
	
	var lstData = new Array();
	var index = 1;
	
	for(var i=row_hidden; i<row_length ; i++){
		obj = {};
		var distance = ""+index;
		/*var distance = $("#tbody_dieL_CL tbody>tr").eq(i).find('td:nth-child(2)>input[type=number]').val();*/
		var duration_from = $("#tbody_dieL_CL tbody>tr").eq(i).find('td:nth-child(2)>input[type=number]').val();
		var duration_from_type = $("#tbody_dieL_CL tbody>tr").eq(i).find('td:nth-child(3) option:selected').val();
		var duration_to = $("#tbody_dieL_CL tbody>tr").eq(i).find('td:nth-child(4)>input[type=number]').val();
		var duration_to_type = $("#tbody_dieL_CL tbody>tr").eq(i).find('td:nth-child(5) option:selected').val();
		var select = $("#tbody_dieR_CL tbody>tr").eq(i).find('td:nth-child(1) option:selected').val();
		var sa = $("#tbody_dieR_CL tbody>tr").eq(i).find('td:nth-child(2) input').val();
		var sa_type = $("#tbody_dieR_CL tbody>tr").eq(i).find('td:nth-child(3) option:selected').val();
		var premium = $("#tbody_dieR_CL tbody>tr").eq(i).find('td:nth-child(4) input').val();
		var premium_type = $("#tbody_dieR_CL tbody>tr").eq(i).find('td:nth-child(5) option:selected').val();
		var include_EM = $("#tbody_dieR_CL tbody>tr").eq(i).find('td:nth-child(6) input[type=checkbox]').is(":checked");
		var CV_PV = $("#tbody_dieR_CL tbody>tr").eq(i).find('td:nth-child(7) input[type=text]').val();
		var CV_PV_type = $("#tbody_dieR_CL tbody>tr").eq(i).find('td:nth-child(8) option:selected').val();
		var other = $("#tbody_dieR_CL tbody>tr").eq(i).find('td:nth-child(9) option:selected').val();
		var ADB_1 = $("#tbody_dieR_CL tbody>tr").eq(i).find('td:nth-child(10) option:selected').val();
		var ADB_2 = $("#tbody_dieR_CL tbody>tr").eq(i).find('td:nth-child(11) input').val();
		var ADB_3 = $("#tbody_dieR_CL tbody>tr").eq(i).find('td:nth-child(12) option:selected').val();
		var ADB_public_1 = $("#tbody_dieR_CL tbody>tr").eq(i).find('td:nth-child(13) option:selected').val();
		var ADB_public_2 = $("#tbody_dieR_CL tbody>tr").eq(i).find('td:nth-child(14) input').val();
		var ADB_public_3 = $("#tbody_dieR_CL tbody>tr").eq(i).find('td:nth-child(15) option:selected').val();
		
		var object = {
				"distance": distance,
				"duration_from": duration_from,
				"duration_from_type": duration_from_type,
				"duration_to": duration_to,
				"duration_to_type": duration_to_type,
				"select": select,
				"sa": Math.round10(sa/100, -4),
				"sa_type": sa_type,
				"premium": premium,
				"premium_type": premium_type,
				"include_EM": include_EM,
				"CV_PV": CV_PV,
				"CV_PV_type": CV_PV_type,
				"other": other,
				"ADB_1": ADB_1,
				"ADB_2": ADB_2,
				"ADB_3": ADB_3,
				"ADB_public_1": ADB_public_1,
				"ADB_public_2": ADB_public_2,
				"ADB_public_3": ADB_public_3
		}
		lstData.push(object);
		index++;
	}
	data_json = {
			"method": "save_benefitsCoverage_dead",
			"passInsurance": $("#pass_Insurance_coverage_cl").val(),
			"bnf_item_id": $("#bnf_itemID").val(),
			"die" : JSON.stringify(lstData)
	}	
	
	$.ajax({
		url: 'BasePlanCL_SaveData_Servlet',
		type: "POST",
		data: data_json,
		async: false,
	     success: function (response) {
	    	/*if (response == "success"){
	    	}else if (response == "fail"){
	    	}*/
	    }
	});
	console.log("data",data_json)
}
//ตาราง ทุพพลภาพถาวรสิ้นเชิง
function save_benefitsCoverage_disability(){
	
	var obj = new Array();
	$('#Disabled_Table input[type=checkbox]:checked').each(function () {
		var disability = $(this).parent().parent().find('td:nth-child(3) input[type="text"]').val();
		var count = $(this).parent().parent().find('td:nth-child(4) input[type="text"]').val();
		var pass = $(this).val();
		var bnf_id = $(this).attr("data-id");
		
		if(bnf_id == undefined){
			bnf_id = "";
		}
		
		var object = {
				"passInsurance": $("#pass_Insurance_coverage_cl").val(),
				"pass" : pass,
				"bnf_id" : bnf_id ,
				"disability": disability,
				"count": Math.round10(count/100, -4)
		};
		obj.push(object);
	});
	
	var data_json = {
		"method": "save_benefitsCoverage_disability",
		"passInsurance": $("#pass_Insurance_coverage_cl").val(),
		"permanent_disability" : JSON.stringify(obj)
	}
	
	$.ajax({
		url: 'BasePlanCL_SaveData_Servlet',
		type: "POST",
		data: data_json,
		async: false,
	     success: function (response) {
	    	/*if (response == "success"){
	    	}else if (response == "fail"){
	    	}*/
	    }
	});
	console.log("data",data_json)
}

//Tab Approved
function bt_approved(claim){
	var cov_code = $("#code_Coverage_CL").val();
	var name_TH = $("#approve_nameTH_CL").val();
	var name_EN = $("#approve_nameEN_CL").val();
	var status_policy = $("#status_policy").val();
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
		 url: "BasePlanCL_SaveData_Servlet", 
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

$("#dmy_4_cl").on("change", function(){
	var dd_value = $(this).find("option:selected").val();
	if(dd_value == "YEAR"){
		$("#ch_sperately_pay_ch").prop("disabled", false);
	}else{
		$("#ch_sperately_pay_ch").prop("disabled", true);
	}
});

/*Get Data from Khwan*/

//setting Approve Lookup
function setting_LookupApproveCL(response){
	var obj_BI = response.Tab_Basic_Information[0];
	var cov_code = $("#pass_Insurance_coverage_cl").val();
	
	$("#code_Coverage_CL").val(cov_code);
	$("#confirmApprove0051_user_CL .modal-body p>span").text(cov_code);
	$("#confirmApprove0051_CL .modal-body p>span").text(cov_code);
	$("#confirmNotApprove0051_CL .modal-body p>span").text(cov_code);
	$("#confirmEdit0051_user_CL .modal-body p>span").text(cov_code);
	$("#confirmApproveEdit0051_CL .modal-body p>span").text(cov_code);
	$("#confirmNotApproveEdit0051_CL .modal-body p>span").text(cov_code);
}

//Approve
function setting_ApproveCL(response,type,cov_code_temp,cov_code_Clone){
	var obj_BI = response.Tab_Basic_Information[0];
	/*NEW , UPDATE = แก้ไข, REQUEST_FOR_APPROVE = รออนุมัติ, APPROVED = อนุมัติ, REJECTED = ไม่อนุมัติ*/
	//var status = "UPDATE";
	
	//Pun Clone 21-11-2019
	var status 		= "";
	var status_RP 	= "";
	if (type == "Clone") {
		 status 	= "NEW";
		 status_RP 	= "NEW";
		/* Clone_dataSave_BasicInformation();
		 Clone_dataSave_privilege_insurance();
		 Clone_dataSave_cal_premium();
		 Clone_dataSave_tab_tableValueInsurance();*/
		/* dataSave_BasicInformation();
		 dataSave_PolicyWording();
		 dataSave_privilege_insurance();
		 dataSave_cal_premium();*/
		 set_status_clone_Coverage(cov_code_Clone,$("#groupName").val());
			
	}else {
		 status 	= obj_BI.status;
		 status_RP 	= obj_BI.status_RP;
	}
	
	var cov_code = $("#pass_Insurance_coverage_cl").val();
	var cov_nameTH = obj_BI.nameTH
	var cov_nameEN = obj_BI.nameEN
	
	$("#code_Coverage_CL").val(cov_code);
	$("#approve_nameTH_CL").val(cov_nameTH);
	$("#approve_nameEN_CL").val(cov_nameEN);
	$("#cov_status").val(status);
	$("#cov_status_RP").val(status_RP);
	$("#confirmApprove0051_user_CL .modal-body p>span").text(cov_code);
	$("#confirmApprove0051_CL .modal-body p>span").text(cov_code);
	$("#confirmNotApprove0051_CL .modal-body p>span").text(cov_code);
	$("#confirmEdit0051_user_CL .modal-body p>span").text(cov_code);
	$("#confirmApproveEdit0051_CL .modal-body p>span").text(cov_code);
	$("#confirmNotApproveEdit0051_CL .modal-body p>span").text(cov_code);
	
	//enable tab
	if(status == "NEW" && status_RP == "NEW"){
		//No Action
	}else{
		 $("#menu_CL_7").removeClass("disabledAll");
		 $("#menu_CL_2").removeClass("disabledAll");
		 $("#menu_CL_3").removeClass("disabledAll");
		 $("#menu_CL_4").removeClass("disabledAll");
		 $("#menu_CL_5").removeClass("disabledAll");
		 $("#menu_CL_6").removeClass("disabledAll");
	}
}

function showcase_basicInfo(response,type,cov_code_temp,cov_code_Clone){
	var obj_BI = response.Tab_Basic_Information[0];
	
	/*Clone*/
	var passInsurance = ""
	var nameTH = ""
	if(type == "Clone"){
		passInsurance 	= cov_code_Clone
		nameTH 			= "( Clone ) "+obj_BI.nameTH
	}else{
		passInsurance	= obj_BI.passInsurance
		nameTH 			= obj_BI.nameTH
	}
	
	
	
	/*โหลดข้อมูล*/
	$("#pass_Insurance_coverage_cl").val(passInsurance);
	
	$("#thai_Name_cl").val(nameTH);
	$("#eng_Name_cl").val(obj_BI.nameEN);
	$("#appStart_date_cl").val(obj_BI.sale_eff_date);
	$("#appTo_date_cl").val(obj_BI.sale_exp_date);
	$("#age_Start_cl").val(obj_BI.age_Start);
	$("#age_To_cl").val(obj_BI.age_To);
	if(obj_BI.maximum_Protection_To != "0"){
		$("#maximum_Protection_To_cl").val(obj_BI.maximum_Protection_To);
		$("#validate_input6_2cl").hide();
	}else{
		$("#maximum_Protection_To_cl").val("");
		$("#validate_input6_2cl").show();
	}
	
	/*mode*/
	for (i in obj_BI.mode) {
		var obj_BI_mode = obj_BI.mode[i];	
		$("#tbl_BI_Mode_CL input:checkbox").each(function(){	
			var value = $(this).val();
			if(value == obj_BI_mode.value){
				$(this).prop("checked", true);				
				if(value == "ANNUAL" || value == "MONTH" || value == "QUARTER" || value == "SEMIANNUAL"){
					$("#tbl_BI_Mode_CL input:checkbox").each(function(){
						if($(this).val() == "SINGLE_PREM" || $(this).val() == "SINGLE_SHORT"){
							$(this).prop("disabled", true);
						}
					});
				}else{
					/*8,9*/
					if(value == "SINGLE_PREM"){
						$("#tbl_BI_Mode_CL input:checkbox").each(function(){
							if($(this).val() == "ANNUAL" || $(this).val() == "MONTH" || $(this).val() == "QUARTER" || $(this).val() == "SEMIANNUAL" || $(this).val() == "SINGLE_SHORT"){
								$(this).prop("disabled", true);
							}
						});
					}else if(value == "SINGLE_SHORT"){
						$("#tbl_BI_Mode_CL input:checkbox").each(function(){
							if($(this).val() == "ANNUAL" || $(this).val() == "MONTH" || $(this).val() == "QUARTER" || $(this).val() == "SEMIANNUAL" || $(this).val() == "SINGLE_PREM"){
								$(this).prop("disabled", true);
							}
						});
					}else{
						$("#tbl_BI_Mode_CL input:checkbox").each(function(){
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
		$("#tbl_BI_FilingCN_CL input:checkbox").each(function(){			
			if($(this).val() == obj_BI_filing.value){
				$(this).prop("checked", true);
			}
		});
	}
	
	/*เพศ*/
	if(obj_BI.sex == "EITHER"){
		$("#ch_male_cl, #ch_female_cl").prop("checked",true);
	}else if(obj_BI.sex == "MALE"){
		$("#ch_male_cl").prop("checked",true);
		$("#ch_female_cl").prop("checked",false);
	}else if(obj_BI.sex == "FEMALE"){
		$("#ch_female_cl").prop("checked",true);
		$("#ch_male_cl").prop("checked",false);
	}
	
	/*สูตรการคำนวณอายุ*/
	for (i in obj_BI.cal_Age) {
		var obj_BI_calAge = obj_BI.cal_Age[i];	
		$("#tbl_BI_AgeCal_CL input:checkbox").each(function(){			
			if($(this).val() == obj_BI_calAge.value){
				$(this).prop("checked", true);
			}
		});
	}
	
	/*เบี้ยประกัน*/
	if(obj_BI.insurance_premium == "NONE" || obj_BI.insurance_premium == ""){
		$("#sl_insurance_premium_cl").val("NONE").attr('selected', 'selected');
	}else{
		$("#sl_insurance_premium_cl").val(obj_BI.insurance_premium).attr('selected', 'selected');
	}
	
	/*ประเภทความคุ้มครอง*/
	if(obj_BI.coverage_type == "NONE" || obj_BI.coverage_type == ""){
		$("#sl_coverage_type_cl").val("NONE").attr('selected', 'selected');
	}else{
		$("#sl_coverage_type_cl").val(obj_BI.coverage_type).attr('selected', 'selected');
	}
	
	/*ประเภทสัญญา*/
	if(obj_BI.contract_type == "NONE" || obj_BI.contract_type == ""){
		$("#sl_contract_type_cl").val("NONE").attr('selected', 'selected');
	}else{
		$("#sl_contract_type_cl").val(obj_BI.contract_type).attr('selected', 'selected');
	}
	
	/*ระยะประกันของสัญญาประกันชีวิต*/
	if(obj_BI.insurance_period_radio == "TO_AGE"){
		$("#rd_anniversary_cl").prop("checked", true);
	}else{
		$("#rd_Time_length_cl").prop("checked", true);
	}
		
		/*ระยะเวลาคุ้มครอง*/
		if(obj_BI.insurance_period_radio == "TO_YEAR"){
			var row = "";
			//$("#tb_BasicInformation1 tbody>tr").remove();
			for (i in obj_BI.insurance_period) {
				var obj_BI_insurance_period = obj_BI.insurance_period[i];	
						
				var lastImgOK = $('#tb_BasicInformation1 >tbody>tr:last-child>td:first').attr("id") || 0;
				var numberImgOK = 0;
				
				if(lastImgOK == 0){
					numberImgOK = 1;
				}else{
					numberImgOK = Number(lastImgOK.replace("td_BasicInformation1_",""))+1;
				}
				var newID = "td_BasicInformation1_"+numberImgOK;
				var ftOnclick = 'imgCheckbox("'+newID+'");';
								
				row = "<tr id='tbody_CL_BasicInformation_"+numberImgOK+"'>"+
				"<td width='11%' class='text-center borderBlack' id="+"'"+newID+"'"+" onclick='"+ftOnclick+"' style='vertical-align: middle;'><i class='glyphicon glyphicon-edit'></i></td>"+
				"<td width='21%' class='borderBlack'><input id='datefrom_"+numberImgOK+"' class='auto form-control text-center margin-padding0' type='text' onkeypress='validate(event)' onblur='checkFromToPeriod_CL("+numberImgOK+");' data-v-min='0' data-v-max='999' maxlength='3' value='"+obj_BI_insurance_period.from+"'></td>"+
				"<td width='21%' class='text-center borderBlack'></td>"+
				"<td width='21%' class='borderBlack'><input id='dateto_"+numberImgOK+"' class='auto form-control text-center margin-padding0' type='text' onkeypress='validate(event); validate_zero_tovalue("+numberImgOK+");'  onkeyup='validate_zero_tovalue("+numberImgOK+");' onblur='checkFromToPeriod_CL("+numberImgOK+");' data-v-min='0' data-v-max='999' maxlength='3' value='"+obj_BI_insurance_period.to+"'></td>"+
				"<td width='21%' class='text-center borderBlack'></td>"+
				"</tr>";

				$("#tb_BasicInformation1 tbody").append(row);
				
				var cloneUnitFrom  = $('#dmy_1_cl').clone();
				$(cloneUnitFrom).attr("id","durationFrom_"+numberImgOK+"");
				$(cloneUnitFrom).attr("onclick","durationFrom("+numberImgOK+");");
				$(cloneUnitFrom).attr("disabled", false);
				$(cloneUnitFrom).appendTo("#tbody_CL_BasicInformation_"+numberImgOK+">td:nth-child(3)");
				
				var cloneUnitTo  = $('#dmy_1_cl').clone();
				$(cloneUnitTo).attr("id","durationTo_"+numberImgOK+"");
				$(cloneUnitTo).attr("onclick","durationTo("+numberImgOK+");");
				$(cloneUnitTo).attr("disabled", false);
				$(cloneUnitTo).appendTo("#tbody_CL_BasicInformation_"+numberImgOK+">td:nth-child(5)");				
				
				$("#durationFrom_"+numberImgOK+"").val(obj_BI_insurance_period.from_unit).attr('selected', 'selected');
				$("#durationTo_"+numberImgOK+"").val(obj_BI_insurance_period.to_unit).attr('selected', 'selected');
			}
			
			/*remove NONE*/
			$("#tb_BasicInformation1 tbody select>option").each(function(){
				if($(this).text() == "None"){
					$(this).remove();
				}
			});
			
			$("#addRowBasicInfo_CL, #deleteRowBasicInfo_CL").prop("disabled", false);
			
		}else{
			/*คุ้มครองถึงอายุ*/
			for (i in obj_BI.insurance_period) {
				var obj_BI_insurance_period = obj_BI.insurance_period[i];
				$("#text_anniversary_cl").val(obj_BI_insurance_period.to).prop("disabled", false);
				if(obj_BI_insurance_period.to_unit == "NONE" || obj_BI_insurance_period.to_unit == ""){
					$("#dmy_1_cl").val("NONE").attr('selected', 'selected').prop("disabled", false);
				}else{
					$("#dmy_1_cl").val(obj_BI_insurance_period.to_unit).attr('selected', 'selected').prop("disabled", false);
				}
			}
			
			$("#addRowBasicInfo_CL, #deleteRowBasicInfo_CL").prop("disabled", true);
		}
		
		/*remove 1st row*/
		if($("#tb_BasicInformation1 tbody>tr").length > 1){
			$("#tb_BasicInformation1 tbody>tr:first-child").remove();
		}
		
		/*เปลี่ยน ID*/
		var newID = 0;
		$("#tb_BasicInformation1 tbody>tr").each(function(){
			newID++;
			var onclick = "imgCheckbox('td_BasicInformation1_"+newID+"');";
			$(this).attr("id", "tbody_CL_BasicInformation_"+newID);
			$(this).find("td:nth-child(1)").attr("id", "td_BasicInformation1_"+newID);
			$(this).find("td:nth-child(1)").attr("onclick", onclick);
			$(this).find("td:nth-child(2)>input").attr("id", "datefrom_"+newID);
			$(this).find("td:nth-child(2)>input").attr("onblur", "checkFromToPeriod_CL("+newID+");");
			$(this).find("td:nth-child(3)>select").attr("id", "durationFrom_"+newID);
			$(this).find("td:nth-child(3)>select").attr("onclick", "durationFrom("+newID+");");
			$(this).find("td:nth-child(4)>input").attr("id", "dateto_"+newID);
			$(this).find("td:nth-child(4)>input").attr("onkeypress", "validate(event); validate_zero_tovalue("+newID+");");
			$(this).find("td:nth-child(4)>input").attr("onkeyup", "validate_zero_tovalue("+newID+");");
			$(this).find("td:nth-child(4)>input").attr("onblur", "checkFromToPeriod_CL("+newID+");");
			$(this).find("td:nth-child(5)>select").attr("id", "durationTo_"+newID);
			$(this).find("td:nth-child(5)>select").attr("onclick", "durationFrom("+newID+");");
		});
		
		/*ระยะชำระเบี้ยของสัญญาประกันชีวิต*/
		if(obj_BI.premium_preiod_radio == "TO_AGE"){
			$("#rd_insurance_premium_cl").prop("checked", true);
		}else{
			$("#rd_Time_insurance_premium_cl").prop("checked", true);
		}
			
		if(obj_BI.premium_preiod_radio == "TO_AGE"){
			/*ชำระถึงอายุ*/
			$("#text_insurance_premium_cl").val(obj_BI.premium_num).prop("disabled", false);
			if(obj_BI.premium_preiod_unit == "NONE" || obj_BI.premium_preiod_unit == ""){
				$("#dmy_3_cl").val("NONE").attr('selected', 'selected').prop("disabled", false);
			}else{
				$("#dmy_3_cl").val(obj_BI.premium_preiod_unit).attr('selected', 'selected').prop("disabled", false);
			}
		}else{
			/*ระยะชำระเบี้ย*/	
			$("#text_Time_insurance_premium_cl").val(obj_BI.premium_num).prop("disabled", false);
			if(obj_BI.premium_preiod_unit == "NONE" || obj_BI.premium_preiod_unit == ""){
				$("#dmy_4_cl").val("NONE").attr('selected', 'selected').prop("disabled", false);
			}else{
				$("#dmy_4_cl").val(obj_BI.premium_preiod_unit).attr('selected', 'selected').prop("disabled", false);
			}
		}
		
		/*แบ่งจ่ายได้*/
		if($("#rd_Time_insurance_premium_cl").prop("checked") == true && $("#dmy_4_cl option:selected").val() == "YEAR"){
		//if(obj_BI.premium_preiod_unit == "YEAR"){
			$("#ch_sperately_pay_ch").prop("disabled", false);
		}
		
		if(obj_BI.pay_separately_checkbox == true){
			$("#ch_sperately_pay_ch").prop("checked", true)		
		}
		
		for (i in obj_BI.pay_separately) {
			var obj_BI_pay_separately = obj_BI.pay_separately[i];
			
			$("#tb_Sperately_Pay tbody>tr").each(function(){
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
		
		/*ตารางมรณะ*/	
			var male = $("#ch_male_cl").val();
			var female = $("#ch_female_cl").val();
			if(obj_BI.mortality_Tli.length > 0){
				for (i in obj_BI.mortality_Tli) {
					var obj_BI_mortality_Tli = obj_BI.mortality_Tli[i];
					
					$("#tb_BasicInformation_Death tbody>tr").each(function(){
						var chk_value = $(this).find("td:nth-child(1) input:checkbox");
						if($(chk_value).val() == obj_BI_mortality_Tli.sex){				
							$(chk_value).prop("checked", true).prop("disabled", false);
							$(this).find("td:nth-child(3) label").text(obj_BI_mortality_Tli.name_TH);
							$(this).find("td:nth-child(3) input[type='hidden']").val(obj_BI_mortality_Tli.mort_tli_id);
							$(this).find("td:nth-child(4) input").prop("disabled", false);
						}
					});			
				}
			}else{
				$("#tb_BasicInformation_Death tbody>tr").each(function(){
					var chk_value = $(this).find("td:nth-child(1) input:checkbox");
					
						if($("#ch_male_cl").prop("checked") == true){
							if($(chk_value).val() == male || $(chk_value).val() == "EITHER"){
								$(chk_value).prop("disabled", false);
								$(this).find("td:nth-child(4) input").prop("disabled", false);
							}
						}
						if($("#ch_female_cl").prop("checked") == true){
							if($(chk_value).val() == female || $(chk_value).val() == "EITHER"){
								$(chk_value).prop("disabled", false);
								$(this).find("td:nth-child(4) input").prop("disabled", false);
							}
						}
				});	
			}
				
		/*ตารางทุพพลภาพ*/
		if(obj_BI.tpd_Tli.length > 0){
			for (i in obj_BI.tpd_Tli) {
				var obj_BI_tpd_Tli = obj_BI.tpd_Tli[i];
				
				$("#tb_BasicInformation_TPD tbody>tr").each(function(){
					var chk_value = $(this).find("td:nth-child(1) input:checkbox");	
					if($(chk_value).val() == obj_BI_tpd_Tli.sex){
						$(chk_value).prop("checked", true).prop("disabled", false);
						$(this).find("td:nth-child(3) label").text(obj_BI_tpd_Tli.name_TH);
						$(this).find("td:nth-child(3) input[type='hidden']").val(obj_BI_tpd_Tli.tpd_tli_id);
						$(this).find("td:nth-child(4) input").prop("disabled", false);
					}

				});			
			}
		}else{
			$("#tb_BasicInformation_TPD tbody>tr").each(function(){
				var chk_value = $(this).find("td:nth-child(1) input:checkbox");									
					if($("#ch_male_cl").prop("checked") == true){
						if($(chk_value).val() == male || $(chk_value).val() == "EITHER"){
							$(chk_value).prop("disabled", false);
							$(this).find("td:nth-child(4) input").prop("disabled", false);
						}
					}
					if($("#ch_female_cl").prop("checked") == true){
						if($(chk_value).val() == female || $(chk_value).val() == "EITHER"){
							$(chk_value).prop("disabled", false);
							$(this).find("td:nth-child(4) input").prop("disabled", false);
							
						}
					}
			});	
		}	
		
		/*อัตราดอกเบี้ย*/
		if(obj_BI.prem_Rate != "0.0000"){
			var prem_rate = parseFloat(obj_BI.prem_Rate*100).toFixed(2);
			$("#text_Calculate_premiums_1cl").val(prem_rate);
		}else{
			$("#text_Calculate_premiums_1cl").val("");
		}
		
		if(obj_BI.sum_decr_rate != "0.0000"){
			var sum_decr_rate = parseFloat(obj_BI.sum_decr_rate*100).toFixed(2);
			$("#text_Calculate_premiums_2cl").val(sum_decr_rate);
		}else{
			$("#text_Calculate_premiums_2cl").val("");
		}
		
		/*ลดหย่อนภาษี*/
		if(obj_BI.table_TaxReduce.length > 0){
			replaceLayout_tax(obj_BI.passInsurance);
			
			for (i in obj_BI.table_TaxReduce) {
				var obj_BI_Tax = obj_BI.table_TaxReduce[i];
				var fileName_table_TaxReduce = obj_BI_Tax.layout
				if(type == "Clone"){
					fileName_table_TaxReduce = obj_BI_Tax.layout.replace(cov_code_temp,cov_code_Clone)
				}	
				
				$("#tb_TaxReduce tbody>tr").each(function(){
					var dataID = Number($(this).attr("data-id"));
					var ID = $(this).attr("id");
						ID = ID.replace("tbody_TaxReduce_","");
					if(dataID == obj_BI_Tax.pass){
						$(this).find("td:nth-child(3) input:text").val(obj_BI_Tax.layout);
						$(this).find("#hdd_layoutID"+ID).val(obj_BI_Tax.id);
						$(this).find("#hdd_fileID"+ID).val(obj_BI_Tax.fileID);
						$(this).find("td:nth-child(4) span,td:nth-child(5) span,td:nth-child(6) span").removeClass("activecolorgray").addClass("activecolorblue");
						$(this).find("td:nth-child(5) span").attr("onclick","openFileTextBasePlan_CL('"+fileName_table_TaxReduce+"','"+obj_BI_Tax.ref+"', 41, 'tb_TaxReduce_view', 'modal_TableTaxReduce')")
						$(this).find("td:nth-child(6) span").attr("onclick", "openFile_target('"+fileName_table_TaxReduce+"','"+obj_BI_Tax.ref+"','txt_download')");
					}
				});		
			}
		}		
				
		/*หมายเหตุ*/
		$("#Basic_remark").text(obj_BI.note);

		/*ปิดดอกจันทร์*/
		if(obj_BI.nameTH != ""){
			$("#validate_input2_cl").hide();
		}
		
		if($("#age_Start_cl").val() != "" && $("#age_To_cl").val() != ""){
			$("#validate_input6_1cl").hide();
		}
		
		if($("#tbl_BI_Mode_CL input:checkbox:checked").length > 0){
			$("#validate_input8_cl").hide();
		}
		
		if($("input[name='ch_gender_cl[]']:checked").length > 0){
			$("#validate_input11_cl").hide();
		}
		
		if($("input[name='rd_Term_of_insurance_cl']").length > 0){
			$("#validate_input15_cl").hide();
		}
		
		if($("input[name='rd_Time_insurance_premium_cl']").length > 0){
			$("#validate_input16_cl").hide();
		}	
}

function showcase_policyWording_data(response){
	// table policy
	for(i in response.Tab_Policy_Wording){
		var obj_policy = response.Tab_Policy_Wording[i];
		for(j in response.Tab_Policy_Wording[i].file){
			var obj_policy_file = response.Tab_Policy_Wording[i].file[j];
			$("#Policy_Table_CL tbody>tr").each(function(){
				if( $(this).data('id') == obj_policy.doc_type_id){
					var type = "";
					if(obj_policy_file.file_type == "1"){
						type = "word";
					}else if(obj_policy_file.file_type == "2"){
						type = "pdf";
					}
					GetFileModalPolicy_CL(obj_policy.doc_type_id, obj_policy_file.file_id, obj_policy_file.file_name, obj_policy_file.file_ref,type)
				}
			})
		}
	}
	
	$("#Policy_Table_CL tbody>tr").each(function(){
		var doc_type_id = $(this).data('id')
		datajson = {				        	
			"method" : "getHistoryPolicy",
			"doc_type_id" : doc_type_id,
			"cov_code" : $("#pass_Insurance_coverage_cl").val()
		}	
					
		$.ajax({
			 type: "POST",
		    url : "PolicyWording_Data_Servlet",
		    data: datajson,
		    async: false,
		    success : function(response) {	
		    		    	
		    	if( response.history_policy[0]){
		    		$("#Policy_Table_CL tbody>tr[data-id='"+doc_type_id+"']").find('td:nth-child(8) a').removeClass('active_grey').addClass('active_blue')
		    	}
		    },
		 	error : function(response) {	
			 
		 	}
		})
	});
	
	
}

function showcase_privilege_insurance(response){
	var obj_PI = response.Tab_exercise_rights_insurance[0];
	
	if(obj_PI.surrender_check == true){
		$("#ch_expropriate_insurance").prop("checked", true);
	}else{
		$("#ch_expropriate_insurance").prop("checked", false);
	}
}

function showcase_cal_premium(response){
	var obj_CP = response.Tab_cal_insurance_premiums[0];
	var bcode = $("#pass_Insurance_coverage_cl").val();

	// เซ็คค่าที่เข้ามาใน tab คำนวณเบี้ย	
	//if(obj_CP.length > 0){
		/*มีค่า Age Band*/
		if(obj_CP.age_Band.length > 0){
			$("#ch_insurance_premium_ageBand_cl").prop("checked", true);
			$("#tb_Age_Band *").attr("disabled", false);
			for (i in obj_CP.age_Band) {
				var obj_CP_age_Band = obj_CP.age_Band[i];
				$("#tb_Age_Band tbody>tr").each(function(){
					if(obj_CP_age_Band.value == $(this).find("td:nth-child(2)").text()){
						$(this).find("input:checkbox").prop("checked", true);
						var id = $(this).find("input:checkbox").attr("id");
							id = id.replace("imgOK_ageBand","");
						$(this).find("input:checkbox").attr("onclick","unselect_AgeBand("+id+")")
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
		$("#PMrate_type_CL").val(pmRate);
	
	 /*เช็คค่าเบี้ยมาตรฐานทั้งหมด */	
	  if(obj_CP.table_insurance_premium.length > 0 || obj_CP.prem_disc == true){		
			$("#ch_standard_premium_cl").prop("checked", true);
			$("#ch_importInsurance_cl").prop("disabled", false);

			/*dropdown*/
			for (i in obj_CP.select_insurance_premium) {
				var obj_CP_select_insurance_premium = obj_CP.select_insurance_premium[i];
				if(obj_CP_select_insurance_premium.pass == 1){
					var dd_text = obj_CP_select_insurance_premium.text;
				}
			}
			$("#rd_cal_insurance_cl").prop("disabled", false).prop("checked", true);
			$("#sl_menu3_insurance_premium_cl").prop("disabled", false);
			$("#sl_menu3_insurance_premium_cl option:contains("+dd_text+")").attr("selected", "selected");
					
			/*มีส่วนลดเบี้ยประกัน*/
			if(obj_CP.prem_disc == true){
				$("#ch_importInsurance_cl").prop("checked", true);
				$("#discountInsurancePremiumsSta").val(parseFloat(obj_CP.prem_min*100).toFixed(2));
				$("#discountInsurancePremiumsTo").val(parseFloat(obj_CP.prem_max*100).toFixed(2));
				$("#discountInsurancePremiumsSta").attr("disabled",false);
				$("#discountInsurancePremiumsTo").attr("disabled",false);
			}else{
				$("#ch_importInsurance_cl").prop("checked", false);
			}
			
			if(obj_CP.table_insurance_premium.length > 0){			
				$("#addrowPM_Rate, #delrowPM_Rate").prop("disabled", false);
				
				var dd_value = $("#sl_menu3_insurance_premium_cl option:selected").val();
				var select_text = jQuery.trim($("#sl_menu3_insurance_premium_cl option:selected").text());
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
					var file_name_insurance_premium = "";
						file_name_insurance_premium = obj_CP_table_insurance_premium.file
					/*var type = obj_CP_table_insurance_premium.file.replace(dd_value,"");
						type = type.replace("_"+bcode+".txt","");	*/
					var type = obj_CP_table_insurance_premium.sub_code;
					
					if(obj_CP_table_insurance_premium.type == ""){
						
						lastID++;
						var new_row = "<tr id='tbody_PM_Rate"+lastID+"' data-id='"+lastID+"' data-level='1'>"+
									  "<td class='text-center borderBlack' id='imgOK_"+lastID+"' width='33px' onclick='imgCheckbox(this.id);' style='vertical-align: middle;'><i class='glyphicon glyphicon-edit'></i></td>"+
									  "<td class='borderBlack'>" +
									  "<select class='form-control sl_STD_PM_Rate' id='sl_PM_Type_CL"+lastID+"' onchange=\"check_file_layout(this.id,'');\">"+
										"<option value='NONE'>None</option>"+
										"</select>" +
									  "</td>"+
									  "<td class='borderBlack'>"+
									  	"<div class='input-group'>"+
										"<input type='text' class='form-control' id='fileuploads_PMRateText"+lastID+"_CL' readonly='' value='"+file_name_insurance_premium+"'>"+ 
											"<label class='input-group-btn'>"+ 
											  "<span id='spanRate"+lastID+"_CL' class='btn btn-primary'>"+
											  "<font id='validate_rate"+lastID+"_CL' style='color: red; display: none;'>*</font>"+
											  	"..."+
											  		"<input id='fileuploads_PMRate"+lastID+"_CL' type='file' accept='text/plain' style='display: none;'>"+ 
											  "</span>"+
											 "</label>"+
										"</div>"+
										"<input type='hidden' id='rm_rateCat"+lastID+"' value='"+obj_CP_table_insurance_premium.pass+"'>"+
										"<input type='hidden' id='rm_rateLayout"+lastID+"' value='"+obj_CP_table_insurance_premium.layout+"'>"+
										"<input type='hidden' id='rm_fileID"+lastID+"' value='"+obj_CP_table_insurance_premium.fileID+"'>"+
									  "</td>"+
									  "<td class='borderBlack'>"+
									 	"<a id='span_PM_Rateopen_"+lastID+"' class='active_grey'>"+
											"<span class='glyphicon glyphicon-eye-open activecolorblue'></span>"+
										"</a>"+							 	
									 "</td>"+
									 "<td class='borderBlack'>"+
										 "<a id='span_PM_Ratedownload_"+lastID+"' class='active_grey'>"+
											"<span class='glyphicon glyphicon-download-alt activecolorblue'></span>"+
										 "</a>"+
									 "</td>"+				
									"</tr>";
						$("#tb_PM_Rate1 tbody").append(new_row);
						
						/*********************************/
						
						//ADD
						var tbCal = "";
						var tbl_name = "";
						var modal_name = "";
						if(select_type == 1){
							tbCal = 61;
							tbl_name = "tbl_PMRatePlan_CL";
							modal_name = "modal_PMRateAuto_CL";
						}else if(select_type == 2){
							tbCal = 41;
							tbl_name = "tbl_PMRatePlan4Col_CL";
							modal_name = "modal_PMRate4Col_CL";
						}else if(select_type == 3){
							tbCal = 41;
							tbl_name = "tbl_PMRatePlan4Col_CL";
							modal_name = "modal_PMRate4Col_CL";
						}
						$("#span_PM_Rateopen_"+lastID+">span").attr("onclick", "openFileTextBasePlan_CL('"+file_name_insurance_premium+"','"+obj_CP_table_insurance_premium.ref+"',"+tbCal+",'"+tbl_name+"','"+modal_name+"')");
						$("#span_PM_Ratedownload_"+lastID+">span").attr("onclick", "openFile_target('"+file_name_insurance_premium+"','"+obj_CP_table_insurance_premium.ref+"','txt_download')");
					
						/*add rate type*/
						var option_PMType = "";
						var PMType = $("#PMrate_type_CL").val();
							PMType = PMType.split(",");
						for(var j=0; j<PMType.length; j++){
							option_PMType += "<option value='"+PMType[j]+"'>"+PMType[j]+"</option>";	
						}	
						$("#sl_PM_Type_CL"+lastID).append(option_PMType);
						
						/*Age Specific*/			
						$("#sl_PM_Type_CL"+lastID+" option").each(function(){
							if($(this).val() == type){
								$(this).attr("selected", "selected");
							}
						});
						var rate_type = $("#sl_PM_Type_CL"+lastID+" option:selected").val();
						
						$("#fileuploads_PMRateText"+lastID+"_CL").attr("placeholder", dd_value+rate_type+"_"+bcode+".txt");				  	
						var uploadfile = "selectFileRate_CL("+select_type+",'s','fileuploads_PMRate"+lastID+"_CL','"+dd_value+rate_type+"_"+bcode+"','','sl_menu3_insurance_premium_cl','span_PM_Rateopen_"+lastID+"')";					
						$("#fileuploads_PMRate"+lastID+"_CL").attr('onchange', uploadfile);	
						
						/*เปิด-ปิดปุ่ม add row*/
						var num_dd = $("#tb_PM_Rate1>tbody>tr[data-level='1']:first>td:nth-child(2) select>option[value!='NONE']").length;
						var numrow_tbl = $("#tb_PM_Rate1>tbody>tr[data-level='1']").length;
						if(numrow_tbl == num_dd){
							$("#addrowPM_Rate").attr("disabled", true);
						}else{
							$("#addrowPM_Rate").attr("disabled", false);
						}
						
						/************************************/
						var num_row = parseInt(i) + 1;

						if(response.Tab_cal_insurance_premiums[0].table_extra_Rate.length == 0 ){
							var row_extraRate = "<tr id='tbody_Extra_Rate"+num_row+"'>"+
							"<td class='borderBlack vertical-middle'><label>"+type+"</label></td>"+
							"<td class='borderBlack'>"+
							  	"<div class='input-group'>"+
								"<input type='text' class='form-control' id='fileuploads_ExtraRateText"+num_row+"_CL' readonly>"+ 
									"<label class='input-group-btn'>"+ 
									  "<span id='spanExtraRate"+num_row+"_CL' class='btn btn-primary' disabled>"+
									  	"<font id='validate_extrarate"+num_row+"_CL' style='color: red;'>*</font>..."+
									  		"<input id='fileuploads_ExtraRate"+num_row+"_CL' type='file' accept='text/plain' style='display: none;' disabled>"+ 
									  "</span>"+
									 "</label>"+
								"</div>"+
								"<input type='hidden' id='ext_rateLayout"+num_row+"' value=''>"+
								"<input type='hidden' id='ext_fileID"+num_row+"' value=''>"+
							 "</td>"+
							 "<td class='borderBlack'>"+
							 	"<a id='span_Extra_Rateopen_"+num_row+"' class='active_grey' disabled>"+
									"<span class='glyphicon glyphicon-eye-open activecolorgray' disabled></span>"+
								"</a>"+							 	
							 "</td>"+
							 "<td class='borderBlack'>"+
								 "<a id='span_Extra_Ratedownload_"+num_row+"' class='active_grey' disabled>"+
									"<span class='glyphicon glyphicon-download-alt activecolorgray' disabled></span>"+
								 "</a>"+
							"</td>"+
							"</tr>";								
							
							$("#tb_Extra_Rate>tbody").append(row_extraRate);
						}
						
						/*ความเสี่ยงมาตรฐาน*/
						//if(response.Tab_table_policy_value[0].table_policy_value.length <= 0 && obj_CP_table_insurance_premium.type == ""){
						if(obj_CP_table_insurance_premium.type == ""){
							var new_riskStardard = "<tr id='tbody_Rate_Value"+num_row+"' data-id='"+num_row+"' data-level='1'>"+
							  "<td class='borderBlack vertical-middle'><label>"+type+"</label></td>"+
							  "<td class='borderBlack'>"+
							  	"<div class='input-group'>"+
								"<input type='text' class='form-control' id='fileuploads_RateValueText"+num_row+"_CL' readonly=''>"+ 
									"<label class='input-group-btn'>"+ 
									  "<span id='spanRateValue"+num_row+"_CL' class='btn btn-primary' disabled>..."+
									  	/*"<font id='validate_RateValue"+num_row+"_CL' style='color: red;'>*</font>..."+*/
									  		"<input id='fileuploads_RateValue"+num_row+"_CL' type='file' accept='text/plain' style='display: none;'>"+ 
									  "</span>"+
									 "</label>"+
								"</div>"+
								"<input type='hidden' id='cv_rateLayout"+num_row+"' value=''>"+
								"<input type='hidden' id='cv_fileID"+num_row+"' value=''>"+	
							  "</td>"+
							  "<td class='borderBlack'>"+
							 	"<a id='span_RateValueopen_"+num_row+"' class='active_grey' disabled>"+
									"<span class='glyphicon glyphicon-eye-open activecolorgray' disabled></span>"+
								"</a>"+							 	
							 "</td>"+
							 "<td class='borderBlack'>"+
								 "<a id='span_RateValuedownload_"+num_row+"' class='active_grey' disabled>"+
									"<span class='glyphicon glyphicon-download-alt activecolorgray' disabled></span>"+
								 "</a>"+
							 "</td>"+				
							"</tr>";
							
							$("#tb_RateValue1 tbody").append(new_riskStardard);
						}
						
					}else{
						/*************age band**************/
						var band_val = obj_CP_table_insurance_premium.type;
							type = obj_CP_table_insurance_premium.sub_code;

						$("#tb_PM_Rate1 tbody>tr[data-level='1']").each(function(){
							var main_type = $(this).find("td:nth-child(2) select>option:selected").val();
							if(type == main_type){
								lastSubID++;
								var main_id = $(this).attr("data-id");
								var num_child = $("#tb_PM_Rate1 tbody>tr[data-group='"+main_id+"']").length;
								if(num_child <= 0){
									var lastSubID = 1;
								}else{
									var lastSubID = Number(num_child+1);
								}
								
								var thisID_Sub = main_id+"_"+lastSubID;	
								
								var new_row = "<tr id='tbody_PM_Rate"+thisID_Sub+"' data-id='"+thisID_Sub+"' data-group='"+main_id+"' data-level='2'>"+
								  "<td class='borderBlack' style='background-color: gray;'><input type='hidden' id='hidden_type"+thisID_Sub+"' value='"+type+"'></td>"+
								  "<td class='borderBlack vertical-middle'><label>"+band_val+"</label></td>"+
								  "<td class='borderBlack'>"+
								  	"<div class='input-group'>"+
									"<input type='text' class='form-control' id='fileuploads_PMRateText"+thisID_Sub+"_CL' readonly='' value='"+file_name_insurance_premium+"'>"+ 
										"<label class='input-group-btn'>"+ 
										  "<span id='spanRate"+thisID_Sub+"_CL' class='btn btn-primary'>"+
										  "<font id='validate_rate"+thisID_Sub+"_CL' style='color: red; display: none;'>*</font>"+
										  	"..."+
										  		"<input id='fileuploads_PMRate"+thisID_Sub+"_CL' type='file' accept='text/plain' style='display: none;'>"+ 
										  "</span>"+
										 "</label>"+
										 "</div>"+
									"<input type='hidden' id='rm_rateCat"+thisID_Sub+"' value='"+obj_CP_table_insurance_premium.pass+"'>"+
									"<input type='hidden' id='rm_rateLayout"+thisID_Sub+"' value='"+obj_CP_table_insurance_premium.layout+"'>"+
									"<input type='hidden' id='rm_fileID"+thisID_Sub+"' value='"+obj_CP_table_insurance_premium.fileID+"'>"+
									
								  "</td>"+			 
								  "<td class='borderBlack'>"+
								 	"<a id='span_PM_Rateopen_"+thisID_Sub+"' class='active_grey'>"+
										"<span class='glyphicon glyphicon-eye-open activecolorblue'></span>"+
									"</a>"+							 	
								 "</td>"+
								 "<td class='borderBlack'>"+
									 "<a id='span_PM_Ratedownload_"+thisID_Sub+"' class='active_grey'>"+
										"<span class='glyphicon glyphicon-download-alt activecolorblue'></span>"+
									 "</a>"+
								"</td>"+
								"</tr>";
								
								/*ความเสี่ยงมาตฐาน Age band*/
								/*if(response.Tab_table_policy_value[0].table_policy_value.length <= 0 && obj_CP_table_insurance_premium.type != ""){*/
								if(obj_CP_table_insurance_premium.type != ""){
									var new_riskStardard = "<tr id='tbody_Rate_Value"+thisID_Sub+"' data-id='"+thisID_Sub+"' data-group='"+main_id+"' data-level='2'>"+
									  "<td class='borderBlack vertical-middle'><label>"+band_val+"</label></td>"+
									  "<td class='borderBlack'>"+
									  	"<div class='input-group'>"+
										"<input type='text' class='form-control' id='fileuploads_RateValueText"+thisID_Sub+"_CL' readonly=''>"+ 
											"<label class='input-group-btn'>"+ 
											  "<span id='spanRateValue"+thisID_Sub+"_CL' class='btn btn-primary' disabled>..."+
											  	/*"<font id='validate_RateValue"+thisID_Sub+"_CL' style='color: red;'>*</font>..."+*/
											  		"<input id='fileuploads_RateValue"+thisID_Sub+"_CL' type='file' accept='text/plain' style='display: none;'>"+ 
											  "</span>"+
											 "</label>"+
										"</div>"+
										"<input type='hidden' id='cv_rateLayout"+thisID_Sub+"' value=''>"+
										"<input type='hidden' id='cv_fileID"+thisID_Sub+"' value=''>"+	
									  "</td>"+
									  "<td class='borderBlack'>"+
									 	"<a id='span_RateValueopen_"+thisID_Sub+"' class='active_grey' disabled>"+
											"<span class='glyphicon glyphicon-eye-open activecolorgray' disabled></span>"+
										"</a>"+							 	
									 "</td>"+
									 "<td class='borderBlack'>"+
									 	"<a id='span_RateValuedownload_"+thisID_Sub+"' class='active_grey' disabled>"+
											"<span class='glyphicon glyphicon-download-alt activecolorgray' disabled></span>"+
										 "</a>"+
									 "</td>"+				
									"</tr>";

								}	
								
								if(num_child <=0){
									$(new_row).insertAfter("#tbody_PM_Rate"+main_id);
									$(new_riskStardard).insertAfter("#tbody_Rate_Value"+main_id);
								}else{
									$(new_row).insertAfter("#tb_PM_Rate1 tbody>tr[data-group='"+main_id+"']:last");
									$(new_riskStardard).insertAfter("#tb_RateValue1 tbody>tr[data-group='"+main_id+"']:last");
								}

								/*****************************/
								/*Age Band*/
								var rate_type = $("#tbody_PM_Rate"+thisID_Sub).attr("data-group");
									rate_type = $("#tbody_PM_Rate"+rate_type).find("td:nth-child(2) select>option:selected").val();
								
								var age_band = $("#tbody_PM_Rate"+thisID_Sub).find("td:nth-child(2) label").text();	
								$("#fileuploads_PMRateText"+thisID_Sub+"_CL").attr("placeholder", dd_value+rate_type+"_"+age_band+"_"+bcode+".txt");				  	
								var uploadfile = "selectFileRate_CL("+select_type+",'b','fileuploads_PMRate"+thisID_Sub+"_CL','"+dd_value+rate_type+"_"+age_band+"_"+bcode+"','','sl_menu3_insurance_premium_cl','span_PM_Rateopen_"+thisID_Sub+"')";					
								$("#fileuploads_PMRate"+thisID_Sub+"_CL").attr('onchange', uploadfile);	
								/*****************************/
								
								
								//ADD
								var tbCal = "";
								var tbl_name = "";
								var modal_name = "";
								if(select_type == 1){
									tbCal = 61;
									tbl_name = "tbl_PMRatePlan_CL";
									modal_name = "modal_PMRateAuto_CL";
								}else if(select_type == 2){
									tbCal = 41;
									tbl_name = "tbl_PMRatePlan4Col_CL";
									modal_name = "modal_PMRate4Col_CL";
								}else if(select_type == 3){
									tbCal = 41;
									tbl_name = "tbl_PMRatePlan4Col_CL";
									modal_name = "modal_PMRate4Col_CL";
								}
								$("#span_PM_Rateopen_"+thisID_Sub+">span").attr("onclick", "openFileTextBasePlan_CL('"+file_name_insurance_premium+"','"+obj_CP_table_insurance_premium.ref+"',"+tbCal+",'"+tbl_name+"','"+modal_name+"')")
								$("#span_PM_Ratedownload_"+thisID_Sub+">span").attr("onclick", "openFile_target('"+file_name_insurance_premium+"','"+obj_CP_table_insurance_premium.ref+"','txt_download')");
								
							}
						
						});								
					}

				}
				
				//$("#tb_PM_Rate1>tbody>tr:first-child").remove();
			}

		}
		
		/*เบี้ยเพิ่มพิเศษ*/
		//if(obj_CP.select_extra_Rate.length > 0 || obj_CP.table_extra_Rate.length > 0 || (obj_CP.min_EM != "0.0000" && obj_CP.max_EM != "0.0000")){
		if(obj_CP.is_substd == true){
			$("#ch_insurance_premium_Extra_cl").prop("checked", true);
			
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
			
			$("#sl_insurance_premium_Extra_cl").prop("disabled", false);
			$("#sl_insurance_premium_Extra_cl option:contains("+dd_text+")").attr("selected", "selected");
			
			/*ตาราง*/
			if(obj_CP.table_extra_Rate.length > 0){	
				var dd_value = $("#sl_insurance_premium_Extra_cl option:selected").val();
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
						filename = obj_extraRate.file;
					}else{
						filename = "";
					}
							
					var row_extra = "<tr id='tbody_Extra_Rate"+aa+"'>"+
					"<td class='borderBlack vertical-middle'><label>"+type+"</label></td>"+
					"<td class='borderBlack'>";
					if(filename != ""){
						row_extra += "<div class='input-group'>"+
						"<input type='text' class='form-control' id='fileuploads_ExtraRateText"+aa+"_CL' value='"+filename+"' readonly>"+ 
							"<label class='input-group-btn'>"+ 
							  "<span id='spanExtraRate"+aa+"_CL' class='btn btn-primary'>"+
							  "<font id='validate_extrarate"+aa+"_CL' style='color: red; display: none;'>*</font>"+
							  	"..."+
							  		"<input id='fileuploads_ExtraRate"+aa+"_CL' type='file' accept='text/plain' style='display: none;'>"+ 
							  "</span>"+
							 "</label>"+
						"</div>"+
						"<input type='hidden' id='ext_rateLayout"+aa+"' value='"+obj_extraRate.layout+"'>"+
						"<input type='hidden' id='ext_fileID"+aa+"' value='"+obj_extraRate.fileID+"'>"+
						"</td>"+
						 "<td class='borderBlack'>"+
						 	"<a id='span_Extra_Rateopen_"+aa+"' class='active_grey'>"+
								"<span class='glyphicon glyphicon-eye-open activecolorblue'></span>"+
							"</a>"+							 	
						 "</td>"+
						 "<td class='borderBlack'>"+
							 "<a id='span_Extra_Ratedownload_"+aa+"' class='active_grey'>"+
								"<span class='glyphicon glyphicon-download-alt activecolorblue'></span>"+
							 "</a>"+
						"</td>"+
						"</tr>";
					}else{
						row_extra += "<div class='input-group'>"+
						"<input type='text' class='form-control' id='fileuploads_ExtraRateText"+aa+"_CL' readonly>"+ 
						"<label class='input-group-btn'>"+ 
						  "<span id='spanExtraRate"+aa+"_CL' class='btn btn-primary' disabled>"+
						  	"<font id='validate_extrarate"+aa+"_CL' style='color: red;'>*</font>..."+
						  		"<input id='fileuploads_ExtraRate"+aa+"_CL' type='file' accept='text/plain' style='display: none;'>"+ 
						  "</span>"+
						 "</label>"+
						 "</div>"+
						 "<input type='hidden' id='ext_rateLayout"+aa+"' value='"+obj_extraRate.layout+"'>"+
						 "<input type='hidden' id='ext_fileID"+aa+"' value='"+obj_extraRate.fileID+"'>"+
						"</td>"+
						 "<td class='borderBlack'>"+
						 	"<a id='span_Extra_Rateopen_"+aa+"' class='active_grey'>"+
								"<span class='glyphicon glyphicon-eye-open activecolorgray'></span>"+
							"</a>"+							 	
						 "</td>"+
						 "<td class='borderBlack'>"+
							 "<a id='span_Extra_Ratedownload_"+aa+"' class='active_grey'>"+
								"<span class='glyphicon glyphicon-download-alt activecolorgray'></span>"+
							 "</a>"+
						"</td>"+
						"</tr>";
					}
					  												
					$("#tb_Extra_Rate>tbody").append(row_extra);
					$("#tb_Extra_Rate").attr("disabled", false);
					
					/*get show file data*/
					var getShowFile = "openFileTextBasePlan_CL('"+filename+"', '"+obj_extraRate.ref+"',51, 'tbl_ExtraRatePlan_CL','modal_ExtraRate_CL')"
					$("#span_Extra_Rateopen_"+aa+">span").attr("onclick", getShowFile);
					$("#span_Extra_Ratedownload_"+aa+">span").attr("onclick", "openFile_target('"+filename+"','"+obj_extraRate.ref+"','txt_download')");
					
					
					/*insert pattern for new upload*/		
					var file_layout = dd_value+type+"_"+bcode;
					var uploadfile = "selectFileRate_CL(4,'b','fileuploads_ExtraRate"+aa+"_CL','"+file_layout+"','','sl_insurance_premium_Extra_cl','span_Extra_Rateopen_"+aa+"')";
					
					$("#fileuploads_ExtraRateText"+aa+"_CL").attr("placeholder",file_layout+".txt");
					$("#fileuploads_ExtraRate"+aa+"_CL").attr("onchange",uploadfile);
					/*end insert*/
					
					if(filename != ""){
						$("#tb_Extra_Rate *").attr("disabled", false);	
					}else{
						$("#tb_Extra_Rate *").attr("disabled", true);	
					}
					
					aa++;
					
				}
				
			}
				
			/*EM*/				
				if(obj_CP.min_EM != ""){
					$("#min_EM_cl").val((obj_CP.min_EM*100).toFixed(2));
					$("#min_EM_cl").prop("disabled", false);					
				}
				
				if(obj_CP.max_EM != ""){
					$("#max_EM_cl").val((obj_CP.max_EM*100).toFixed(2));
					$("#max_EM_cl").prop("disabled", false);
				}
				
				if(obj_CP.max_EM == "0.0000"  || obj_CP.max_EM == "0"){
					$("#spanBoxCal1_CL").prop("disabled", true);
					$("#select_fileCal_1_CL, #cv_InputExtra_Rate_cl").prop("disabled", true);
				}else{
					$("#spanBoxCal1_CL").prop("disabled", false);
					$("#select_fileCal_1_CL, #cv_InputExtra_Rate_cl").prop("disabled", false);
				}	
				
				var obj_EM = obj_CP.em_Age[0];
				var fileName_emFile = ""
				
				if(obj_CP.em_Age.length > 0){
					fileName_emFile = obj_EM.file
					
					$("#input_fileCal_1_CL").val(fileName_emFile);
					if(obj_EM.file != ""){
						$("#validate_filerate1_CL").css("display","none");
						$("#spanBoxCal1_CL").attr("disabled", false);
						$("#cv_InputExtra_Rate_cl").prop("disabled", false);
						$("#select_fileCal_1_CL").attr("disabled", false);
						var getShowFile = "openFileTextBasePlan_CL('"+fileName_emFile+"', '"+obj_EM.ref+"',54,'tb_inputExtra_RateView','modal_inputExtra_RateView')"
						$("#cv_InputExtra_Rate_cl").attr("onclick",getShowFile);
					}
				}else{
					$("#input_fileCal_1_CL").val("");
				}
				
				if(obj_CP.em_Age.length > 0){
					$("#em_rateLayout1").val(obj_EM.layout);
					$("#em_fileID1").val(obj_EM.fileID);

				}else{
					var tb_em_hidden =
						"<input type='hidden' id='em_rateLayout1' value=''>"+
						"<input type='hidden' id='em_fileID1' value=''>";

					$("#div_fileCal1_CL").append(tb_em_hidden);
				}
	
			}
		
		/*ทุนคุ้มครองที่ลดลง*/
		if(obj_CP.is_sa_decr == true){
		//if(obj_CP.table_capital_decrease.length > 0){	
			$("#ch_Reduced_capital_cl").prop("checked", true);
			
			/*dropdown*/
			for (i in obj_CP.select_capital_decrease) {
				var obj_CP_select_capital_decrease = obj_CP.select_capital_decrease[i];
				if(obj_CP_select_capital_decrease.pass == 1){
					var dd_text = obj_CP_select_capital_decrease.text;
				}
			}
		
			$("#sl_Reduced_capital_Cal2_CL").prop("disabled", false);
			$("#sl_Reduced_capital_Cal2_CL option:contains("+dd_text+")").attr("selected", "selected");
			
			
			var sl_SA = $("#sl_Reduced_capital_Cal2_CL option:selected").val();
			var type_SA = sl_SA+bcode+".txt";
			selectTypeCal_CL(type_SA,2);
			var fileName_capital_decrease = "";
				fileName_capital_decrease = obj_CP.table_capital_decrease[0].file
			
			$("#input_fileCal_2_CL").val(fileName_capital_decrease);
			if(obj_CP.table_capital_decrease[0].file != ""){
				$("#validate_filerate2_CL").css("display","none");
				/*getShowFile*/
				var getShowFile_decrease = "openFileTextBasePlan_CL('"+fileName_capital_decrease+"', '"+obj_CP.table_capital_decrease[0].ref+"',31,'tb_inputSA_CL_Rate','modal_inputSA_CL_Rate')"
				$("#cv_SAExtra_Rate_cl").attr("onclick", getShowFile_decrease);
				
			}
			$("#select_fileCal_2_CL, #spanBoxCal2_CL, #cv_SAExtra_Rate_cl").attr("disabled", false);
			
			/*file*/		
			var tb_decrease_hidden = "<input type='hidden' id='decrease_rateCat2' value='"+obj_CP.table_capital_decrease[0].pass+"'>"+
				"<input type='hidden' id='decrease_rateLayout2' value='"+obj_CP.table_capital_decrease[0].layout+"'>"+
				"<input type='hidden' id='decrease_fileID2' value='"+obj_CP.table_capital_decrease[0].fileID+"'>";
			
			$("#div_fileCal2_CL").append(tb_decrease_hidden);
					
		}	
}

function showcase_PolicyValue(response){
	var obj_PV = response.Tab_table_policy_value[0];
	var bcode = $("#pass_Insurance_coverage_cl").val();
	
	/*ความเสี่ยงมาตรฐาน*/
	if(obj_PV.table_policy_value.length > 0){
		$("#cbBox1_CL").prop("checked", true);
		$("#cbBox1_CL").prop("disabled", false);
		/*dropdown*/
		for (i in obj_PV.select_policy_value) {
			var obj_PV_select_policy_value = obj_PV.select_policy_value[i];
			if(obj_PV_select_policy_value.pass == 1){
				var dd_text = obj_PV_select_policy_value.text;
			}
		}
		
		$("#dbBox1_CL").prop("disabled", false);
		$("#dbBox1_CL option:contains("+dd_text+")").attr("selected", "selected");
		
		/*place holder*/
		var dd_value = $("#dbBox1_CL option:selected").val();
		var dd_split = dd_value.split(",");
		if(dd_split.length > 1){
			var dd_pattern1 = dd_split[0];
			var dd_pattern2 = dd_split[1];
		}else{
			var dd_pattern1 = dd_split[0];
			var dd_pattern2 = "";
		}
		
		/*Age Specific*/
		$("#tb_RateValue1 tbody>tr[data-level='1']").each(function(){
			var lastID = $(this).attr("id");
				lastID = lastID.replace("tbody_Rate_Value","");
			var rate_type = $(this).find("td:nth-child(1) label").text();

			var placeholder = "";
			var uploadfile = "";
			
			if(dd_split.length > 1){
				placeholder = dd_pattern1+rate_type+"_"+bcode+".txt หรือ "+dd_pattern2+rate_type+"_"+bcode+".txt";
				uploadfile = "selectFileRate_CL(5,'s','fileuploads_RateValue"+lastID+"_CL','"+dd_pattern1+rate_type+"_"+bcode+"','"+dd_pattern2+rate_type+"_"+bcode+"','dbBox1_CL','span_RateValueopen_"+lastID+"')";	
			}else{
				placeholder = dd_pattern1+rate_type+"_"+bcode+".txt";
				uploadfile = "selectFileRate_CL(5,'s','fileuploads_RateValue"+lastID+"_CL','"+dd_pattern1+rate_type+"_"+bcode+"','','dbBox1_CL','span_RateValueopen_"+lastID+"')";
			}
			
			$("#fileuploads_RateValueText"+lastID+"_CL").attr("placeholder", placeholder);				  	
						
			$("#fileuploads_RateValue"+lastID+"_CL").attr('onchange', uploadfile);
//			$("#span_RateValueopen_"+lastID).attr("onclick", "openFileTextBasePlan_CL('"+obj_PV_table_policy_value.file+"', '"+obj_PV_table_policy_value.ref+"',5,'tbl_StandardRisk_CL','cvStandardRiskAuto_CL')");
		});
		
		/*Age Band*/
		$("#tb_RateValue1 tbody>tr[data-level='2']").each(function(){
			var thisID_Sub = $(this).attr("id");
				thisID_Sub = thisID_Sub.replace("tbody_Rate_Value","");
			var age_band = $(this).find("td:nth-child(1) label").text();
			var group = $(this).attr("data-group");

			var rate_type = $("#tbody_Rate_Value"+group).find("td:nth-child(1) label").text();
			var placeholder = "";
			var uploadfile = "";
			
			if(dd_split.length > 1){
				placeholder = dd_pattern1+rate_type+"_"+age_band+"_"+bcode+".txt หรือ "+dd_pattern2+rate_type+"_"+age_band+"_"+bcode+".txt";
				uploadfile = "selectFileRate_CL(5,'b','fileuploads_RateValue"+thisID_Sub+"_CL','"+dd_pattern1+rate_type+"_"+age_band+"_"+bcode+"','"+dd_pattern2+rate_type+"_"+age_band+"_"+bcode+"','dbBox1_CL','span_RateValueopen_"+thisID_Sub+"')";	
			}else{
				placeholder = dd_pattern1+rate_type+"_"+age_band+"_"+bcode+".txt";
				uploadfile = "selectFileRate_CL(5,'b','fileuploads_RateValue"+thisID_Sub+"_CL','"+dd_pattern1+rate_type+"_"+age_band+"_"+bcode+"','','dbBox1_CL','span_RateValueopen_"+thisID_Sub+"')";
			}
			
			$("#fileuploads_RateValueText"+thisID_Sub+"_CL").attr("placeholder", placeholder);				  						
			$("#fileuploads_RateValue"+thisID_Sub+"_CL").attr('onchange', uploadfile);
//			$("#span_RateValueopen_"+thisID_Sub).attr("onclick", "openFileTextBasePlan_CL('"+obj_PV_table_policy_value.file+"', '"+obj_PV_table_policy_value.ref+"',5,'tbl_StandardRisk_CL','cvStandardRiskAuto_CL')");
			
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
				var fileName_policy_value = "";
					fileName_policy_value = obj_PV_table_policy_value.file
				
				/**************************************/
				/*set cv table*/
				if(obj_PV_table_policy_value.type == ""){
					$("#tb_RateValue1 tbody>tr[data-level='1']").each(function(){
						var lastID = $(this).attr("id");
							lastID = lastID.replace("tbody_Rate_Value","");
						var rate_type = $(this).find("td:nth-child(1) label").text();
						
						if(type == rate_type){
							$(this).find("td:nth-child(2) input:text").val(fileName_policy_value);
							$(this).find("td:nth-child(2) input[type='hidden']").eq(0).val(obj_PV_table_policy_value.layout);
							$(this).find("td:nth-child(2) input[type='hidden']").eq(1).val(obj_PV_table_policy_value.fileID);
							
							$(this).find("td:nth-child(3) a").attr("disabled", false);
							$(this).find("td:nth-child(3) span").attr("disabled", false).removeClass("activecolorgray").addClass("activecolorblue").attr("onclick", "openFileTextBasePlan_CL('"+fileName_policy_value+"', '"+obj_PV_table_policy_value.ref+"',5,'tbl_StandardRisk_CL','cvStandardRisk_CL')");
							$(this).find("td:nth-child(4) a").attr("disabled", false);
							$(this).find("td:nth-child(4) span").attr("disabled", false).removeClass("activecolorgray").addClass("activecolorblue").attr("onclick", "openFile_target('"+fileName_policy_value+"','"+obj_PV_table_policy_value.ref+"','txt_download')");
							
						}
						
					});
				}else{
					$("#tb_RateValue1 tbody>tr[data-level='2']").each(function(){
						var thisID_Sub = $(this).attr("id");
							thisID_Sub = thisID_Sub.replace("tbody_Rate_Value","");
						var age_band = $(this).find("td:nth-child(1) label").text();
						var group = $(this).attr("data-group");
						var rate_type = $("#tbody_Rate_Value"+group).find("td:nth-child(1) label").text();
						
						if(type == rate_type && band == age_band){
							$(this).find("td:nth-child(2) input:text").val(fileName_policy_value);
							$(this).find("td:nth-child(2) input[type='hidden']").eq(0).val(obj_PV_table_policy_value.layout);
							$(this).find("td:nth-child(2) input[type='hidden']").eq(1).val(obj_PV_table_policy_value.fileID);
						
							$(this).find("td:nth-child(3) a").attr("disabled", false);
							$(this).find("td:nth-child(3) span").attr("disabled", false).removeClass("activecolorgray").addClass("activecolorblue").attr("onclick", "openFileTextBasePlan_CL('"+fileName_policy_value+"', '"+obj_PV_table_policy_value.ref+"',5,'tbl_StandardRisk_CL','cvStandardRisk_CL')");
							$(this).find("td:nth-child(4) a").attr("disabled", false);
							$(this).find("td:nth-child(4) span").attr("disabled", false).removeClass("activecolorgray").addClass("activecolorblue").attr("onclick", "openFile_target('"+fileName_policy_value+"','"+obj_PV_table_policy_value.ref+"','txt_download')");
							
							
						
						}
						
					});
				}
				
				$("#tb_RateValue1 tbody>tr>td:nth-child(2) span").attr("disabled", false);

			}
			
			//$("#tb_RateValue1>tbody>tr:first-child").remove();
			
		}
		
		/*ความเสี่ยงต่ำกว่ามาตรฐาน*/
		$("#cbBox2_CL").prop("disabled", false);

		if(obj_PV.table_Low_Risk.length > 0){
			$("#cbBox2_CL").prop("checked", true);
			
			/*dropdown*/
			for (i in obj_PV.select_Low_Risk) {
				var obj_PV_select_Low_Risk = obj_PV.select_Low_Risk[i];
				if(obj_PV_select_Low_Risk.pass == 1){
					var dd_text = obj_PV_select_Low_Risk.text;
				}
			}
		
			$("#dbBox2_CL").prop("disabled", false);
			$("#dbBox2_CL option:contains("+dd_text+")").attr("selected", "selected");
			
			/*file*/
			var fileName_table_Low_Risk = obj_PV.table_Low_Risk[0].file;
			var filetype = $("#dbBox2_CL option:selected").val();
			selectType_CL(filetype+bcode,2);
			$("#input_file_2_CL").val(fileName_table_Low_Risk);
			$("#spanBox2_CL, #cv2_CL").attr("disabled", false);
			$("#select_file_2_CL").prop("disabled", false);
			
			if($("#input_file_2_CL").val() != ""){
				$("#validate_input2_CL").hide();
				/*get show file data*/
				$("#cv2_CL").attr("onclick", "openFileTextBasePlan_CL('"+fileName_table_Low_Risk+"', '"+obj_PV.table_Low_Risk[0].ref+"',6,'tbl_NotStandardRisk_CL','cvNotStandardRisk_CL')");
				
			}else{
				$("#validate_input2_CL").show();
			}
			
			$("#cvLow_rateLayout2").val(obj_PV.table_Low_Risk[0].layout);
			$("#cvLow_fileID2").val(obj_PV.table_Low_Risk[0].fileID);

		}
		
	}
	
}

function showcase_Benefit(response){
	/*เสียชีวิต*/
	$("#tbody_dieL_CL0, #tbody_dieR_CL0").hide();
	if($("#cbDie_CL").prop("checked") == true){
		var obj_die = response.Tab_Benefits[0].die;
		var ii = Number($("#tbody_dieL_CL tbody>tr").length)+1;	
		var SA_value = "";
		
		var bnfID = response.Tab_Benefits[0].benefitItem_ID;
		if(bnfID != ""){
			$("#bnf_itemID").val(response.Tab_Benefits[0].benefitItem_ID);
		}
		
		if(obj_die.length > 0){
			for(i in obj_die){
				
				var obj_CP_die = obj_die[i].die_calendar[0];
				var obj_CP_dieSA = obj_die[i].die_sa[0];
				var obj_CP_dieUnit = obj_die[i].die_unit[0];
				
				var numberImgOK = ii++;
				
				var newID = "imgOK_"+numberImgOK;
				var ftOnclick = 'imgCheckbox(this.id);';
				
				//alert(obj_CP_dieSA.value);
				if(obj_die[i].die_sa.length > 0){
					if(obj_CP_dieSA.value != ""){
						SA_value = (obj_CP_dieSA.value*100).toFixed(2);
					}else{
						SA_value = "";
					}
				}
							
				var row1 = "";
				row1 = "<tr id='tbody_dieL_CL"+numberImgOK+"'>"+
											"<td width='65px' class='text-center borderBlack' id="+"'"+newID+"'"+" onclick='"+ftOnclick+"' style='vertical-align: middle;'><i class='glyphicon glyphicon-edit'></i></td>"+
											/*"<td class='text-center borderBlack'><input id='die_phase"+numberImgOK+"_CL' type='number' class='form-control margin-padding0 text-center width50px' value='"+obj_CP_die.order+"' min='1' onkeyup='numberKey(this);' onkeydown='numberKey(this);' onchange='validate_range_tbdie(this.id,this.value)'></td>"+*/
											"<td width='56px' class='borderBlack'><input id='die_fromYear"+numberImgOK+"_CL' type='number' class='form-control margin-padding0 text-center width50px' value='"+obj_CP_die.dateFrom+"' min='1' onkeyup='check_fromto("+numberImgOK+");' onchange='validate_range_fromTo(this.id,this.value);'></td>"+
											"<td width='100px' class='text-center borderBlack'></td>"+
											"<td width='56px' class='borderBlack'><input id='die_toYear"+numberImgOK+"_CL' type='number' class='form-control margin-padding0 text-center width50px' value='"+obj_CP_die.dateTO+"' onkeyup='check_fromto("+numberImgOK+");' onchange='validate_range_fromTo(this.id,this.value);'></td>"+
											"<td width='100px' class='text-center borderBlack'></td>"+
						"</tr>";
				
				
				var row2 = "";
				row2 = "<tr id='tbody_dieR_CL"+numberImgOK+"'>"+
											"<td width='50px' class='text-center borderBlack'></td>"+
											"<td width='50px' class='borderBlack'><input id='die_sa"+numberImgOK+"_CL' class='auto form-control margin-padding0 text-center width70px' value='"+SA_value+"' data-v-min='0.00' data-v-max='999.99'>"+
											/*"<td width='50px' class='borderBlack'><input id='die_sa"+numberImgOK+"_CL' class='auto form-control margin-padding0 text-center width70px' value='' data-v-min='0.00' data-v-max='999.99'>"+*/
											"<td width='50px' class='text-center borderBlack'></td>"+
											"<td width='50px' class='borderBlack'><input id='die_premium_CL"+numberImgOK+"' type='text' class='form-control margin-padding0 text-center width70px' value='-' disabled></td>"+
											"<td width='50px' class='text-center borderBlack'>"+dropdownPremium_CL+"</td>"+
											"<td width='50px' class='verticalCenter text-center borderBlack'><input id='die_checkbox"+numberImgOK+"' type='checkbox' disabled></td>"+
											"<td width='50px' class='borderBlack'><input id='die_cvpv_CL"+numberImgOK+"' type='text' class='form-control margin-padding0 text-center width50px' value='-' disabled></td>"+
											"<td width='50px' class='text-center borderBlack'>"+dropdownCvPv_CL+"</td>"+
											"<td width='50px' class='text-center borderBlack'>"+dropdownOther_CL+"</td>"+
											"<td width='50px' class='text-center borderBlack'>"+dropdownADB1_CL+"</td>"+
											"<td width='50px' class='borderBlack'><input id='adb_CL"+numberImgOK+"' type='text' class='form-control margin-padding0 text-center widt50px' value='-' disabled></td>"+
											"<td width='160px' class='text-center borderBlack'>"+dropdownADB2_CL+"</td>"+
											"<td width='70px' class='text-center borderBlack'>"+dropdownADB1_CL+"</td>"+
											"<td width='70px' class='borderBlack'><input id='adbP_CL"+numberImgOK+"' type='text' class='form-control margin-padding0 text-center width50px' value='-' disabled></td>"+
											"<td width='160px' class='text-center borderBlack'>"+dropdownADB2_CL+"</td>"+
						"</tr>";
				
				$("#tbody_dieL_CL tbody").append(row1);
				$("#tbody_dieR_CL tbody").append(row2); 
				
				
				$('#tbody_dieL_CL tbody>tr:first-child td:nth-child(3)>select').clone().attr("id","die_fromYearUnit"+numberImgOK+"_CL").attr("onchange","check_fromtoUnit("+numberImgOK+");").appendTo("#tbody_dieL_CL"+numberImgOK+">td:nth-child(3)");
				$('#tbody_dieL_CL tbody>tr:first-child td:nth-child(5)>select').clone().attr("id","die_toYearUnit"+numberImgOK+"_CL").attr("onchange","check_fromtoUnit("+numberImgOK+");").appendTo("#tbody_dieL_CL"+numberImgOK+">td:nth-child(5)");	
				$('#tbody_dieR_CL tbody>tr:first-child td:nth-child(1)>select').clone().attr("id","die_sa_max"+numberImgOK+"_CL").appendTo("#tbody_dieR_CL"+numberImgOK+">td:nth-child(1)");
				$('#tbody_dieR_CL tbody>tr:first-child td:nth-child(3)>select').clone().attr("id","die_sa_unit"+numberImgOK+"_CL").appendTo("#tbody_dieR_CL"+numberImgOK+">td:nth-child(3)");
				
				/*unit*/	
				$("#die_fromYearUnit"+numberImgOK+"_CL option").each(function(){
					if(obj_CP_dieUnit.unit_From == $(this).val()){
						$(this).attr("selected", "selected");
					}
				});
				
				$("#die_toYearUnit"+numberImgOK+"_CL option").each(function(){
					if(obj_CP_dieUnit.unit_To == $(this).val()){
						$(this).attr("selected", "selected");
					}
				});
				
				/*compare*/
				$("#die_sa_max"+numberImgOK+"_CL option").each(function(){
					if(obj_CP_die.compare == $(this).val()){
						$(this).attr("selected", "selected");
					}
				});
				
				/*SA*/				
				$("#die_sa_unit"+numberImgOK+"_CL option").each(function(){
					if(obj_die[i].die_sa.length > 0){
						if(obj_CP_dieSA.factor == $(this).val()){
							$(this).attr("selected", "selected");
						}
					}else{
							//$(this +":contains('None')").attr("selected", "selected");
					}
				});
				
				$('.auto').autoNumeric('init');
			}
			$("#tbody_dieL_CL tbody>tr:nth-child(2), #tbody_dieR_CL tbody>tr:nth-child(2)").hide();
		}
		
	}
	
	/*ทุพพลภาพถาวรสิ้นเชิง*/
	if($("#cbDisabled_CL").prop("checked") == true){
		var obj_BNF = response.Tab_Benefits[0];
		for(i in obj_BNF.permanent_disability){
			var obj_TPD = obj_BNF.permanent_disability[i];
			$("#Disabled_Table tbody>tr").eq(i).find('input:checkbox').attr("data-id", obj_TPD.bnf_Item_ID);
			$("#Disabled_Table input:checkbox").each(function(){
				var ID = $(this).attr("id").replace("imgOK_disabled", "");
				if($(this).val() == obj_TPD.pass){
					$(this).prop("checked", true);		
					
					if(obj_TPD.text != "" || obj_TPD.text == 0){
						$("#disabled_amount"+ID).attr("disabled", false).val((obj_TPD.text*100).toFixed(2));
					}else{
						$("#disabled_amount"+ID).attr("disabled", false).val("");
					}
					
				}
				$('.auto').autoNumeric('init');
			});
			
		}
	}
	
	
	
}
