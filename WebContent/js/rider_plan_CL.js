/**
 * 
 */
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

 $("#div_main_menuCL_8 *").change(function(event){
	 nameTab 	= "menu_CL_8";
	 Statuesave = "N";
 });
 
 $("#benefitDetail_CL *").change(function(event){
	 nameTab 	= "menu_CL_5";
	 Statuesave = "N";
 });
 
 $("#btn_SaveEditBenefit1, #btn_SaveEditBenefit2, #btn_saveSelectCoverage_CL").click(function(){
	 nameTab 	= "menu_CL_5";
	 Statuesave = "N";
 });
 
 $("#btn_saveSelectRecord_CL").click(function(){
	 nameTab 	= "menu_CL_9";
	 Statuesave = "N";
 });
 
 
var data_sl_PM_Type = $("#sl_PM_Type_CL1 option:selected").text();
if(data_sl_PM_Type == 'None'){
	$("#cbBox1_CL").prop("checked", false);
	$("#cbBox1_CL").prop("disabled", true);
}
var pass_Insurance_coverage_cl = "";
 $(document).ready( function() {
	 pass_Insurance_coverage_cl  = $('#pass_Insurance_coverage_cl').val();
	 //Em
	 $("#tb_TaxReduce_view").DataTable({
	    	"paging": false,
	        "ordering": false,
	        "info": false,
	        "language": {
	    	    "search": "ค้นหา:",
	    	    "zeroRecords": " "	
	    }
	  });	 
	 //เบี้ยมาตรฐาน PM_Rate
	 $('#ch_Base_rate').prop("disabled",true);
	// $('#sl_menu3_insurance_premium_cl').prop("disabled",true);
	 $("#divtb_PM_Rate1 *").attr("disabled", "disabled").off('click');
	 $('#addrowPM_Rate').prop("disabled",true);
	 $('#delrowPM_Rate').prop("disabled",true);
	 
	// $('#ch_importInsurance_cl').prop("disabled",true);
	 $('#in_step_Career2_Sta').prop("disabled",true);
	 $('#in_step_Career2_To').prop("disabled",true);
	 
	 $('#in_step_Career3_Sta').prop("disabled",true);
	 $('#in_step_Career3_To').prop("disabled",true);

	 $('#in_step_Career4_Sta').prop("disabled",true);
	 $('#in_step_Career4_To').prop("disabled",true);

	 
	 $('#discountInsurancePremiumsSta').prop("disabled",true);
	 $('#discountInsurancePremiumsTo').prop("disabled",true);
	  //***เบี้ยเพิ่มพิเศษ Extra_Rate
	  $("#div_TB_Extra_Rate *").attr("disabled", "disabled").off('click');//default disabled Table Extra_Rate
	  $('#addrowExtra_Rate').prop("disabled",true);
	  $('#delrowExtra_Rate').prop("disabled",true);
			 		
 });
/**************   Validate  key input data    *********************/ 
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
	    	alert("read data error");
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
		   alert("read data error");
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

/*อายุที่ขออนุมัติ + คุ้มครองสูงสุดถึง*/
$("#age_To_cl, #maximum_Protection_To_cl, #text_anniversary_cl, #text_insurance_premium_cl, #text_Time_insurance_premium_cl").on("keypress keyup",function(){
    if($(this).val() == '0'){
      $(this).val('');  
    }
});

function checkMaxProtectionAge_CL() {
	var from_unit = $("#dmy_6_cl option:selected").val();
	var from_value = $("#age_To_cl").val();
	var from_value_convert = "";
	var to_unit = "YEAR";
	var to_value = $("#maximum_Protection_To_cl").val();

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
			  $("#maximum_Protection_To_cl").focus();
			  $("#maximum_Protection_To_cl").val("");
		  }	
		
	}
				
}

////////////////////////////////////3//////////////////////
var openFile3 = function(event,fileID,tableName,tableCol) {	
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
      var tableRow = "";
      var col1 = "";
	  var col2 = "";
	  var col3 = "";
	  var col4 = "";
	  var col5 = "";
	  var col6 = "";
	  for(var i=0; i<textLength; i++ ) {
    	  
    	  var textRow_split = textRow[i].split(',');
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
    	  }else if(tableCol == 41){
   		   col1 = textRow[i].substr(0,2);
		   col2 = textRow[i].substr(3,1);
		   col3 = textRow[i].substr(4,2);
		   col4 = textRow[i].substr(6,6);
		  
		   tableRow += "<tr>"+
			"<td class='text-center'>"+col1+"</td>"+
			"<td class='text-center'>"+col2+"</td>"+
			"<td class='text-right'>"+col3+"</td>"+
			"<td class='text-right'>"+col4+"</td>"+
			"</tr>";    		  
    	  }else if(tableCol == 51){
      		   col1 = textRow[i].substr(0,3);
    		   col2 = textRow[i].substr(4,2);
    		   col3 = textRow[i].substr(6,1);
    		   col4 = textRow[i].substr(7,2);
    		   col5 = textRow[i].substr(9,6);
    		  
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
          }
    	    	
 
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


function bt_Menu3_Confirm_cl(datatype) {
	if (datatype == "PM_Rate") {
		//PM_Rate	
			var sl_menu3_insurance_premium_cl = $('#sl_menu3_insurance_premium_cl').val();
			if (sl_menu3_insurance_premium_cl == "0") {
				$('#tb_PM_Rate1'+' tbody').empty();		//remove row
				var rowdefault = 3;
				var namepremium = ["เสียชีวิต และทุพพลภาพ","เสียชีวิต","ทุพพลภาพ"];
				for (var i =0 ; i < rowdefault; i++) {
				var rownumber = i+1;
					var newID = "td_PM_Rate1_"+rownumber;
					var ftOnclick = 'imgCheckbox("'+newID+'");';
					var row = "";
					row = "<tr id='tbody_PM_Rate1_"+rownumber+"'>"+
						  						"<td id="+"'"+newID+"'"+" width='5%' class='borderBlack' style='background-color: gray;'></i></td>"+
						  						"<td width='25%' class='borderBlack'><label>"+namepremium[i]+"</label><input id='topics_PM_Rate_"+rownumber+"' type='hidden'></td>"+
												"<td width='55%' class='borderBlack'>" +
													"<div class='input-group col-xs-12'>" +
														"<input type='file' accept='.txt' id='ip_fileuploads_CL_PM_Rate1_"+rownumber+"'  style='display: none'>" +
														"<input type='text' class='form-control' id='ip_fileuploads_CL_PM_Rate1_Show_"+rownumber+"'readonly>" +
														"<span class='input-group-btn'><button class='btn btn-default btn-primary' type='button' id='bt_uploadfilePM_Rate1_"+rownumber+"' " +
																"onclick='uploadfile1("+'"tb_PM_Rate1"'+","+'"ip_fileuploads_CL_PM_Rate1_"'+","+'"ip_fileuploads_CL_PM_Rate1_Show_"'+","+'"span_PM_Rateopen_"'+","+'"span_PM_Ratedownload_"'+","+'"tb_PM_Rate_view"'+","+'"PM_Rate_checkfileAll"'+","+rownumber+");'>...</button>" +
														"</span>" +
													"</div>" +
												"</td>"+
												"<td width='8%' class='borderBlack'>" +
													"<span class='glyphicon glyphicon-eye-open activecolorgray' data-id='span_PM_Rateopen_"+rownumber+"'></span>" +
												"</td>"+
												"<td width='7%' class='borderBlack'>" +
													"<span class='glyphicon glyphicon-download-alt activecolorgray' data-id='span_PM_Ratedownload_"+rownumber+"'></span>" +
												"</td>"+
						  "</tr>";
					$("#tb_PM_Rate1 tbody").append(row);
					
				}
				//เสียชีวิต และทุพพลภาพ
				  	$("#ip_fileuploads_CL_PM_Rate1_Show_1").attr("placeholder", "P_CL 14 P_DTPD_PLxx.txt");
				  	$("#bt_uploadfilePM_Rate1_1").attr('onclick', 'uploadfile1("tb_PM_Rate1","ip_fileuploads_CL_PM_Rate1_","ip_fileuploads_CL_PM_Rate1_Show_","span_PM_Rateopen_","span_PM_Ratedownload_","tb_PM_Rate_view2","P_CL 14 P_DTPD_","1")');
				  	 $("#topics_PM_Rate_1").val("เสียชีวิต และทุพพลภาพ");
				 //เสียชีวิต  
					  $("#ip_fileuploads_CL_PM_Rate1_Show_2").attr("placeholder", "P_CL 14 P_D_PLxx.txt");
					  $("#bt_uploadfilePM_Rate1_2").attr('onclick', 'uploadfile1("tb_PM_Rate1","ip_fileuploads_CL_PM_Rate1_","ip_fileuploads_CL_PM_Rate1_Show_","span_PM_Rateopen_","span_PM_Ratedownload_","tb_PM_Rate_view2","P_CL 14 P_D_","2")');
					  $("#topics_PM_Rate_2").val("เสียชีวิต");
				//ทุพพลภาพถาวรสิ้นเชิง
					  $("#ip_fileuploads_CL_PM_Rate1_Show_3").attr("placeholder", "P_CL 14 P_TPD_PLxx.txt");
					  $("#bt_uploadfilePM_Rate1_3").attr('onclick', 'uploadfile1("tb_PM_Rate1","ip_fileuploads_CL_PM_Rate1_","ip_fileuploads_CL_PM_Rate1_Show_","span_PM_Rateopen_","span_PM_Ratedownload_","tb_PM_Rate_view2","P_CL 14 P_TPD_","3")');
					  $("#topics_PM_Rate_3").val("ทุพพลภาพ");
					  
			}else if (sl_menu3_insurance_premium_cl == "1") {
				$('#tb_PM_Rate1'+' tbody').empty();		//remove row
				var rowdefault = 3;
				var namepremium = ["เสียชีวิต และทุพพลภาพ","เสียชีวิต","ทุพพลภาพ"];
				for (var i =0 ; i < rowdefault; i++) {
				var rownumber = i+1;
					var newID = "td_PM_Rate1_"+rownumber;
					var ftOnclick = 'imgCheckbox("'+newID+'");';
					var row = "";
					row = "<tr id='tbody_PM_Rate1_"+rownumber+"'>"+
						  						"<td id="+"'"+newID+"'"+" width='5%' class='borderBlack' style='background-color: gray;'></i></td>"+
						  						"<td width='25%' class='borderBlack'><label>"+namepremium[i]+"</label><input id='topics_PM_Rate_"+rownumber+"' type='hidden'></td>"+
												"<td width='55%' class='borderBlack'>" +
													"<div class='input-group col-xs-12'>" +
														"<input type='file' accept='.txt' id='ip_fileuploads_CL_PM_Rate1_"+rownumber+"'  style='display: none'>" +
														"<input type='text' class='form-control' id='ip_fileuploads_CL_PM_Rate1_Show_"+rownumber+"'readonly>" +
														"<span class='input-group-btn'><button class='btn btn-default btn-primary' type='button' id='bt_uploadfilePM_Rate1_"+rownumber+"' " +
																"onclick='uploadfile1("+'"tb_PM_Rate1"'+","+'"ip_fileuploads_CL_PM_Rate1_"'+","+'"ip_fileuploads_CL_PM_Rate1_Show_"'+","+'"span_PM_Rateopen_"'+","+'"span_PM_Ratedownload_"'+","+'"tb_PM_Rate_view"'+","+'"PM_Rate_checkfileAll"'+","+rownumber+");'>...</button>" +
														"</span>" +
													"</div>" +
												"</td>"+
												"<td width='8%' class='borderBlack'>" +
													"<span class='glyphicon glyphicon-eye-open activecolorgray' data-id='span_PM_Rateopen_"+rownumber+"'></span>" +
												"</td>"+
												"<td width='7%' class='borderBlack'>" +
													"<span class='glyphicon glyphicon-download-alt activecolorgray' data-id='span_PM_Ratedownload_"+rownumber+"'></span>" +
												"</td>"+
						  "</tr>";
					$("#tb_PM_Rate1 tbody").append(row);
				}
				//เสียชีวิต และทุพพลภาพ
					$("#ip_fileuploads_CL_PM_Rate1_Show_1").attr("placeholder", "P_CL 11 10K_DTPD_PLxx.txt");
					$("#bt_uploadfilePM_Rate1_1").attr('onclick', 'uploadfile1("tb_PM_Rate1","ip_fileuploads_CL_PM_Rate1_","ip_fileuploads_CL_PM_Rate1_Show_","span_PM_Rateopen_","span_PM_Ratedownload_","tb_PM_Rate_view","P_CL 11 10K_DTPD_","1")');
					$("#topics_PM_Rate_1").val("เสียชีวิต และทุพพลภาพ");
				//เสียชีวิต  
					$("#ip_fileuploads_CL_PM_Rate1_Show_2").attr("placeholder", "P_CL 11 10K_D_PLxx.txt");
					$("#bt_uploadfilePM_Rate1_2").attr('onclick', 'uploadfile1("tb_PM_Rate1","ip_fileuploads_CL_PM_Rate1_","ip_fileuploads_CL_PM_Rate1_Show_","span_PM_Rateopen_","span_PM_Ratedownload_","tb_PM_Rate_view","P_CL 11 10K_D_","2")');
					$("#topics_PM_Rate_2").val("เสียชีวิต");  
				//ทุพพลภาพถาวรสิ้นเชิง
					$("#ip_fileuploads_CL_PM_Rate1_Show_3").attr("placeholder", "P_CL 11 10K_TPD_PLxx.txt");
					$("#bt_uploadfilePM_Rate1_3").attr('onclick', 'uploadfile1("tb_PM_Rate1","ip_fileuploads_CL_PM_Rate1_","ip_fileuploads_CL_PM_Rate1_Show_","span_PM_Rateopen_","span_PM_Ratedownload_","tb_PM_Rate_view","P_CL 11 10K_TPD_","3")');
					$("#topics_PM_Rate_3").val("ทุพพลภาพ");
			}else if (sl_menu3_insurance_premium_cl == "2") {
				$('#tb_PM_Rate1'+' tbody').empty();		//remove row
				var rowdefault = 3;
				var namepremium = ["เสียชีวิต และทุพพลภาพ","เสียชีวิต","ทุพพลภาพ"];
				for (var i =0 ; i < rowdefault; i++) {
				var rownumber = i+1;
					var newID = "td_PM_Rate1_"+rownumber;
					var ftOnclick = 'imgCheckbox("'+newID+'");';
					var row = "";
					row = "<tr id='tbody_PM_Rate1_"+rownumber+"'>"+
						  						"<td id="+"'"+newID+"'"+" width='5%' class='borderBlack' style='background-color: gray;'></i></td>"+
						  						"<td width='25%' class='borderBlack'><label>"+namepremium[i]+"</label><input id='topics_PM_Rate_"+rownumber+"' type='hidden'></td>"+
												"<td width='55%' class='borderBlack'>" +
													"<div class='input-group col-xs-12'>" +
														"<input type='file' accept='.txt' id='ip_fileuploads_CL_PM_Rate1_"+rownumber+"'  style='display: none'>" +
														"<input type='text' class='form-control' id='ip_fileuploads_CL_PM_Rate1_Show_"+rownumber+"'readonly>" +
														"<span class='input-group-btn'><button class='btn btn-default btn-primary' type='button' id='bt_uploadfilePM_Rate1_"+rownumber+"' " +
																"onclick='uploadfile1("+'"tb_PM_Rate1"'+","+'"ip_fileuploads_CL_PM_Rate1_"'+","+'"ip_fileuploads_CL_PM_Rate1_Show_"'+","+'"span_PM_Rateopen_"'+","+'"span_PM_Ratedownload_"'+","+'"tb_PM_Rate_view"'+","+'"PM_Rate_checkfileAll"'+","+rownumber+");'>...</button>" +
														"</span>" +
													"</div>" +
												"</td>"+
												"<td width='8%' class='borderBlack'>" +
													"<span class='glyphicon glyphicon-eye-open activecolorgray' data-id='span_PM_Rateopen_"+rownumber+"'></span>" +
												"</td>"+
												"<td width='7%' class='borderBlack'>" +
													"<span class='glyphicon glyphicon-download-alt activecolorgray' data-id='span_PM_Ratedownload_"+rownumber+"'></span>" +
												"</td>"+
						  "</tr>";
					$("#tb_PM_Rate1 tbody").append(row);
					
				}
				//เสียชีวิต และทุพพลภาพ
				  	$("#ip_fileuploads_CL_PM_Rate1_Show_1").attr("placeholder", "P_CL 11 100K_DTPD_PLxx.txt");
				  	$("#bt_uploadfilePM_Rate1_1").attr('onclick', 'uploadfile1("tb_PM_Rate1","ip_fileuploads_CL_PM_Rate1_","ip_fileuploads_CL_PM_Rate1_Show_","span_PM_Rateopen_","span_PM_Ratedownload_","tb_PM_Rate_view","P_CL 11 100K_DTPD_","1")');
					$("#topics_PM_Rate_1").val("เสียชีวิต และทุพพลภาพ");
				 //เสียชีวิต  
					  $("#ip_fileuploads_CL_PM_Rate1_Show_2").attr("placeholder", "P_CL 11 100K_D_PLxx.txt");
					  $("#bt_uploadfilePM_Rate1_2").attr('onclick', 'uploadfile1("tb_PM_Rate1","ip_fileuploads_CL_PM_Rate1_","ip_fileuploads_CL_PM_Rate1_Show_","span_PM_Rateopen_","span_PM_Ratedownload_","tb_PM_Rate_view","P_CL 11 100K_D_","2")');
					  $("#topics_PM_Rate_2").val("เสียชีวิต");  
				 //ทุพพลภาพถาวรสิ้นเชิง
					  $("#ip_fileuploads_CL_PM_Rate1_Show_3").attr("placeholder", "P_CL 11 100K_TPD_PLxx.txt");
					  $("#bt_uploadfilePM_Rate1_3").attr('onclick', 'uploadfile1("tb_PM_Rate1","ip_fileuploads_CL_PM_Rate1_","ip_fileuploads_CL_PM_Rate1_Show_","span_PM_Rateopen_","span_PM_Ratedownload_","tb_PM_Rate_view","P_CL 11 100K_TPD_","3")');
					  $("#topics_PM_Rate_3").val("ทุพพลภาพ");
			}else if (sl_menu3_insurance_premium_cl == "") {
				$('#tb_PM_Rate1'+' tbody').empty();		//remove row
				var rowdefault = 3;
				var namepremium = ["เสียชีวิต และทุพพลภาพ","เสียชีวิต","ทุพพลภาพ"];
				for (var i =0 ; i < rowdefault; i++) {
				var rownumber = i+1;
					var newID = "td_PM_Rate1_"+rownumber;
					var ftOnclick = 'imgCheckbox("'+newID+'");';
					var row = "";
					row = "<tr id='tbody_PM_Rate1_"+rownumber+"'>"+
						  						"<td id="+"'"+newID+"'"+" width='5%' class='borderBlack' style='background-color: gray;'></i></td>"+
						  						"<td width='25%' class='borderBlack'><label>"+namepremium[i]+"</label><input id='topics_PM_Rate_"+rownumber+"' type='hidden'></td>"+
												"<td width='55%' class='borderBlack'>" +
													"<div class='input-group col-xs-12'>" +
														"<input type='file' accept='.txt' id='ip_fileuploads_CL_PM_Rate1_"+rownumber+"'  style='display: none'>" +
														"<input type='text' class='form-control' id='ip_fileuploads_CL_PM_Rate1_Show_"+rownumber+"'readonly>" +
														"<span class='input-group-btn'><button class='btn btn-default btn-primary' type='button' id='bt_uploadfilePM_Rate1_"+rownumber+"' " +
																"onclick='uploadfile1("+'"tb_PM_Rate1"'+","+'"ip_fileuploads_CL_PM_Rate1_"'+","+'"ip_fileuploads_CL_PM_Rate1_Show_"'+","+'"span_PM_Rateopen_"'+","+'"span_PM_Ratedownload_"'+","+'"tb_PM_Rate_view"'+","+'"PM_Rate_checkfileAll"'+","+rownumber+");'>...</button>" +
														"</span>" +
													"</div>" +
												"</td>"+
												"<td width='8%' class='borderBlack'>" +
													"<span class='glyphicon glyphicon-eye-open activecolorgray' data-id='span_PM_Rateopen_"+rownumber+"'></span>" +
												"</td>"+
												"<td width='7%' class='borderBlack'>" +
													"<span class='glyphicon glyphicon-download-alt activecolorgray' data-id='span_PM_Ratedownload_"+rownumber+"'></span>" +
												"</td>"+
						  "</tr>";
					$("#tb_PM_Rate1 tbody").append(row);
					
				}
				//เสียชีวิต และทุพพลภาพ
				  	$("#ip_fileuploads_CL_PM_Rate1_Show_1").attr("placeholder", "");
				  	$("#bt_uploadfilePM_Rate1_1").attr('onclick', 'uploadfile1("tb_PM_Rate1","ip_fileuploads_CL_PM_Rate1_","ip_fileuploads_CL_PM_Rate1_Show_","span_PM_Rateopen_","span_PM_Ratedownload_","tb_PM_Rate_view2","P_CL 14 P_DTPD_","1")');
				  	 $("#topics_PM_Rate_1").val("เสียชีวิต และทุพพลภาพ");
				 //เสียชีวิต  
					  $("#ip_fileuploads_CL_PM_Rate1_Show_2").attr("placeholder", "");
					  $("#bt_uploadfilePM_Rate1_2").attr('onclick', 'uploadfile1("tb_PM_Rate1","ip_fileuploads_CL_PM_Rate1_","ip_fileuploads_CL_PM_Rate1_Show_","span_PM_Rateopen_","span_PM_Ratedownload_","tb_PM_Rate_view2","P_CL 14 P_D_","2")');
					  $("#topics_PM_Rate_2").val("เสียชีวิต");
				//ทุพพลภาพถาวรสิ้นเชิง
					  $("#ip_fileuploads_CL_PM_Rate1_Show_3").attr("placeholder", "");
					  $("#bt_uploadfilePM_Rate1_3").attr('onclick', 'uploadfile1("tb_PM_Rate1","ip_fileuploads_CL_PM_Rate1_","ip_fileuploads_CL_PM_Rate1_Show_","span_PM_Rateopen_","span_PM_Ratedownload_","tb_PM_Rate_view2","P_CL 14 P_TPD_","3")');
					  $("#topics_PM_Rate_3").val("ทุพพลภาพ");
					  
					  $("#divtb_PM_Rate1 *").attr("disabled", "disabled").off('click');
					  $('#addrowPM_Rate').prop("disabled",true);
					  $('#delrowPM_Rate').prop("disabled",true);
			}
		}
	 $('#modal_CheckNone_Menu3').modal('hide');
}

///เช็คอายุสิ้นสุด ต้องมีค่ามากกว่าอายุ เริ่มต้นเสมอ
function checkdata() {
	var age_Start_cl  = $('#age_Start_cl').val();
	var age_To_cl  = $('#age_To_cl').val();
	if (age_Start_cl > age_To_cl){
		message = "อายุสิ้นสุด จะต้องมีค่ามากกว่าอายุเริ่มต้นเสมอ กรุณาระบุใหม่";
		alertError(message);
		$('#age_To_cl').val("");
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
		$('#tb_Sperately_Pay thead ,#tb_Sperately_Pay thead>tr, #tb_Sperately_Pay tbody>tr, #tb_Sperately_Pay tbody>tr>td').attr('disabled', false);
		$('#tb_Sperately_Pay input:checkbox').attr('disabled', false);
		  
	}else{
		$('#tb_Sperately_Pay input:checkbox').attr('disabled', true);
		$('#tb_Sperately_Pay input:checkbox').prop('checked', false);
		$('#tb_Sperately_Pay input:text').attr('disabled', true);
		$('#tb_Sperately_Pay input:text').val("0.00");
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
/*
 * 	ch_filingCN0_CL = ch_Tied_Agency
 	ch_filingCN1_CL = ch_Bancassurance_cl
 * 	
 */
function ckeckFilingChannel() {
	var ch_Tied_Agency = document.getElementById("ch_Tied_Agency_cl");
	var ch_Bancassurance_cl = document.getElementById("ch_Bancassurance_cl");
	// ch_Tied_Agency.checked == true && ch_Bancassurance_cl.checked == true
	if (ch_filingCN0_CL.checked == true && ch_filingCN1_CL.checked == true) {
		document.getElementById("ch_Agent_cl").disabled = true;
		document.getElementById("ch_Commercial_Bank_cl").disabled = false;
		document.getElementById("ch_Public_Bank_cl").disabled = false;
		document.getElementById("ch_Direct_cl").disabled = true;
		document.getElementById("ch_Group_cl").disabled = false;
		document.getElementById("ch_Leasing_cl").disabled = false;
		document.getElementById("ch_Consumer_cl").disabled = false;
		document.getElementById("ch_Electronic2_cl").disabled = true;
		// ch_Tied_Agency.checked  == false && ch_Bancassurance_cl.checked  == true
	}else if (ch_filingCN0_CL.checked  == false && ch_filingCN1_CL.checked  == true){
		document.getElementById("ch_Agent_cl").disabled = true;
		document.getElementById("ch_Commercial_Bank_cl").disabled = false;
		document.getElementById("ch_Public_Bank_cl").disabled = false;
		document.getElementById("ch_Direct_cl").disabled = true;
		document.getElementById("ch_Group_cl").disabled = true;
		document.getElementById("ch_Leasing_cl").disabled = true;
		document.getElementById("ch_Consumer_cl").disabled = true;
		document.getElementById("ch_Electronic2_cl").disabled = true;
	}else if (ch_filingCN0_CL.checked == true && ch_filingCN1_CL.checked == false){
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
	});*/	
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

$("#mode0_cl").click(function(){
	var mode0 = document.getElementById("mode0_cl");
	var mode1 = document.getElementById("mode1_cl");
	var mode2 = document.getElementById("mode2_cl");
	var mode4 = document.getElementById("mode4_cl");
	if (mode0.checked == true || mode1.checked == true || mode2.checked == true || mode4.checked == true ) {
		document.getElementById("mode8_cl").disabled = true;
		document.getElementById("mode9_cl").disabled = true;
		$("#validate_input8_cl").hide();
	}else{
		document.getElementById("mode8_cl").disabled = false;
		document.getElementById("mode9_cl").disabled = false;
		$("#validate_input8_cl").show();
	}
});
$("#mode1_cl").click(function(){
	var mode0 = document.getElementById("mode0_cl");
	var mode1 = document.getElementById("mode1_cl");
	var mode2 = document.getElementById("mode2_cl");
	var mode4 = document.getElementById("mode4_cl");
	if (mode0.checked == true || mode1.checked == true || mode2.checked == true || mode4.checked == true ) {
		document.getElementById("mode8_cl").disabled = true;
		document.getElementById("mode9_cl").disabled = true;
		$("#validate_input8_cl").hide();
	}else{
		document.getElementById("mode8_cl").disabled = false;
		document.getElementById("mode9_cl").disabled = false;
		$("#validate_input8_cl").show();
	}
});
$("#mode2_cl").click(function(){
	var mode0 = document.getElementById("mode0_cl");
	var mode1 = document.getElementById("mode1_cl");
	var mode2 = document.getElementById("mode2_cl");
	var mode4 = document.getElementById("mode4_cl");
	if (mode0.checked == true || mode1.checked == true || mode2.checked == true || mode4.checked == true ) {
		document.getElementById("mode8_cl").disabled = true;
		document.getElementById("mode9_cl").disabled = true;
		$("#validate_input8_cl").hide();
	}else{
		document.getElementById("mode8_cl").disabled = false;
		document.getElementById("mode9_cl").disabled = false;
		$("#validate_input8_cl").show();
	}
});
$("#mode4_cl").click(function(){
	var mode0 = document.getElementById("mode0_cl");
	var mode1 = document.getElementById("mode1_cl");
	var mode2 = document.getElementById("mode2_cl");
	var mode4 = document.getElementById("mode4_cl");
	if (mode0.checked == true || mode1.checked == true || mode2.checked == true || mode4.checked == true ) {
		document.getElementById("mode8_cl").disabled = true;
		document.getElementById("mode9_cl").disabled = true;
		$("#validate_input8_cl").hide();
	}else{
		document.getElementById("mode8_cl").disabled = false;
		document.getElementById("mode9_cl").disabled = false;
		$("#validate_input8_cl").show();
	}
});
$("#mode8_cl").click(function(){
	var mode8	 = document.getElementById("mode8_cl");
	if (mode8.checked == true) {
		document.getElementById("mode0_cl").disabled = true;
		document.getElementById("mode1_cl").disabled = true;
		document.getElementById("mode2_cl").disabled = true;
		document.getElementById("mode4_cl").disabled = true;
		document.getElementById("mode9_cl").disabled = true;
		$("#validate_input8_cl").hide();
	}else{
		document.getElementById("mode0_cl").disabled = false;
		document.getElementById("mode1_cl").disabled = false;
		document.getElementById("mode2_cl").disabled = false;
		document.getElementById("mode4_cl").disabled = false;
		document.getElementById("mode9_cl").disabled = false;
		$("#validate_input8_cl").show();
	}
});
$("#mode9_cl").click(function(){
	var mode9 = document.getElementById("mode9_cl");
	if (mode9.checked == true) {
		document.getElementById("mode0_cl").disabled = true;
		document.getElementById("mode1_cl").disabled = true;
		document.getElementById("mode2_cl").disabled = true;
		document.getElementById("mode4_cl").disabled = true;
		document.getElementById("mode8_cl").disabled = true;
		$("#validate_input8_cl").hide();
	}else{
		document.getElementById("mode0_cl").disabled = false;
		document.getElementById("mode1_cl").disabled = false;
		document.getElementById("mode2_cl").disabled = false;
		document.getElementById("mode4_cl").disabled = false;
		document.getElementById("mode8_cl").disabled = false;
		$("#validate_input8_cl").show();
	}
});
var data ="";
/*เมนู CL*/
$("#menu_CL_1").click(function(){
	if (Statuesave == "N" && nameTab != "menu_CL_1") {
	 	$("#modal_Checkkeyup").modal("show");
	 	data = "menu_CL_1";
	}else{
		document.getElementById("cl_006_1_1-1").style.display = "block";
		document.getElementById("cl_006_1_1-3").style.display = "none";
		document.getElementById("cl_006_1_1-4").style.display = "none";
		document.getElementById("cl_006_1_1-5").style.display = "none";
		document.getElementById("cl_006_1_1-6").style.display = "none";
		document.getElementById("cl_006_1_1-7").style.display = "none";
		document.getElementById("cl_006_1_1-8").style.display = "none";
		document.getElementById("cl_006_1_1-9").style.display = "none";
	}
})

$("#menu_CL_3").click(function(){
	if (Statuesave == "N" && nameTab != "menu_CL_3") {
	 	$("#modal_Checkkeyup").modal("show");
	 	data = "menu_CL_3";
	}else{
		document.getElementById("cl_006_1_1-3").style.display = "block";
		document.getElementById("cl_006_1_1-1").style.display = "none";
		document.getElementById("cl_006_1_1-4").style.display = "none";
		document.getElementById("cl_006_1_1-5").style.display = "none";
		document.getElementById("cl_006_1_1-6").style.display = "none";
		document.getElementById("cl_006_1_1-7").style.display = "none";
		document.getElementById("cl_006_1_1-8").style.display = "none";
		document.getElementById("cl_006_1_1-9").style.display = "none";
		
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
	}else {
		document.getElementById("cl_006_1_1-4").style.display = "block";
		document.getElementById("cl_006_1_1-1").style.display = "none";
		document.getElementById("cl_006_1_1-3").style.display = "none";
		document.getElementById("cl_006_1_1-5").style.display = "none";
		document.getElementById("cl_006_1_1-6").style.display = "none";
		document.getElementById("cl_006_1_1-7").style.display = "none";
		document.getElementById("cl_006_1_1-8").style.display = "none";
		document.getElementById("cl_006_1_1-9").style.display = "none";
	}
})
$("#menu_CL_5").click(function(){
	if (Statuesave == "N" && nameTab != "menu_CL_5") {
	 	$("#modal_Checkkeyup").modal("show");
	 	data = "menu_CL_5";
	}else{
		document.getElementById("cl_006_1_1-5").style.display = "block";
		document.getElementById("cl_006_1_1-1").style.display = "none";
		document.getElementById("cl_006_1_1-3").style.display = "none";
		document.getElementById("cl_006_1_1-4").style.display = "none";
		document.getElementById("cl_006_1_1-6").style.display = "none";
		document.getElementById("cl_006_1_1-7").style.display = "none";
		document.getElementById("cl_006_1_1-8").style.display = "none";
		document.getElementById("cl_006_1_1-9").style.display = "none";
	}
})
$("#menu_CL_6").click(function(){
	if (Statuesave == "N" && nameTab != "menu_CL_6") {
	 	$("#modal_Checkkeyup").modal("show");
	 	data = "menu_CL_6";
	}else{
		document.getElementById("cl_006_1_1-6").style.display = "block";
		document.getElementById("cl_006_1_1-1").style.display = "none";
		document.getElementById("cl_006_1_1-3").style.display = "none";
		document.getElementById("cl_006_1_1-4").style.display = "none";
		document.getElementById("cl_006_1_1-5").style.display = "none";
		document.getElementById("cl_006_1_1-7").style.display = "none";
		document.getElementById("cl_006_1_1-8").style.display = "none";
		document.getElementById("cl_006_1_1-9").style.display = "none";
	}
})
$("#menu_CL_7").click(function(){
	if (Statuesave == "N" && nameTab != "menu_CL_7") {
	 	$("#modal_Checkkeyup").modal("show");
	 	data = "menu_CL_7";
	}else{
		document.getElementById("cl_006_1_1-7").style.display = "block";
		document.getElementById("cl_006_1_1-1").style.display = "none";
		document.getElementById("cl_006_1_1-3").style.display = "none";
		document.getElementById("cl_006_1_1-4").style.display = "none";
		document.getElementById("cl_006_1_1-5").style.display = "none";
		document.getElementById("cl_006_1_1-6").style.display = "none";
		document.getElementById("cl_006_1_1-8").style.display = "none";
		document.getElementById("cl_006_1_1-9").style.display = "none";
	}
})
$("#menu_CL_8").click(function(){
	if (Statuesave == "N" && nameTab != "menu_CL_8") {
	 	$("#modal_Checkkeyup").modal("show");
	 	data = "menu_CL_8";
	}else{
		document.getElementById("cl_006_1_1-8").style.display = "block";
		document.getElementById("cl_006_1_1-1").style.display = "none";
		document.getElementById("cl_006_1_1-3").style.display = "none";
		document.getElementById("cl_006_1_1-4").style.display = "none";
		document.getElementById("cl_006_1_1-5").style.display = "none";
		document.getElementById("cl_006_1_1-6").style.display = "none";
		document.getElementById("cl_006_1_1-7").style.display = "none";
		document.getElementById("cl_006_1_1-9").style.display = "none";
	
		/*get อายุ จาก Basic Info*/
		getAge_fromBasicInfo();
	}
})
$("#menu_CL_9").click(function(){
	if (Statuesave == "N" && nameTab != "menu_CL_9") {
	 	$("#modal_Checkkeyup").modal("show");
	 	data = "menu_CL_9";
	}else{
		document.getElementById("cl_006_1_1-9").style.display = "block";
		document.getElementById("cl_006_1_1-1").style.display = "none";
		document.getElementById("cl_006_1_1-3").style.display = "none";
		document.getElementById("cl_006_1_1-4").style.display = "none";
		document.getElementById("cl_006_1_1-5").style.display = "none";
		document.getElementById("cl_006_1_1-6").style.display = "none";
		document.getElementById("cl_006_1_1-7").style.display = "none";
		document.getElementById("cl_006_1_1-8").style.display = "none";
	}
})

//ยืนยัน
function bt_changeTab() {
	if (data == "menu_CL_7") {
		document.getElementById("cl_006_1_1-7").style.display = "block";
		document.getElementById("cl_006_1_1-1").style.display = "none";
		document.getElementById("cl_006_1_1-3").style.display = "none";
		document.getElementById("cl_006_1_1-4").style.display = "none";
		document.getElementById("cl_006_1_1-5").style.display = "none";
		document.getElementById("cl_006_1_1-6").style.display = "none";
		document.getElementById("cl_006_1_1-8").style.display = "none";
		document.getElementById("cl_006_1_1-9").style.display = "none";
		$("#modal_Checkkeyup").modal("hide");
		Statuesave = "Y";
	}else if (data == "menu_CL_1"){
		document.getElementById("cl_006_1_1-1").style.display = "block";
		document.getElementById("cl_006_1_1-3").style.display = "none";
		document.getElementById("cl_006_1_1-4").style.display = "none";
		document.getElementById("cl_006_1_1-5").style.display = "none";
		document.getElementById("cl_006_1_1-6").style.display = "none";
		document.getElementById("cl_006_1_1-7").style.display = "none";
		document.getElementById("cl_006_1_1-8").style.display = "none";
		document.getElementById("cl_006_1_1-9").style.display = "none";
	}else if (data == "menu_CL_3") {
		document.getElementById("cl_006_1_1-3").style.display = "block";
		document.getElementById("cl_006_1_1-1").style.display = "none";
		document.getElementById("cl_006_1_1-4").style.display = "none";
		document.getElementById("cl_006_1_1-5").style.display = "none";
		document.getElementById("cl_006_1_1-6").style.display = "none";
		document.getElementById("cl_006_1_1-7").style.display = "none";
		document.getElementById("cl_006_1_1-8").style.display = "none";
		document.getElementById("cl_006_1_1-9").style.display = "none";
	}else if (data == "menu_CL_4") {
		document.getElementById("cl_006_1_1-4").style.display = "block";
		document.getElementById("cl_006_1_1-1").style.display = "none";
		document.getElementById("cl_006_1_1-3").style.display = "none";
		document.getElementById("cl_006_1_1-5").style.display = "none";
		document.getElementById("cl_006_1_1-6").style.display = "none";
		document.getElementById("cl_006_1_1-7").style.display = "none";
		document.getElementById("cl_006_1_1-8").style.display = "none";
		document.getElementById("cl_006_1_1-9").style.display = "none";
	}else if (data == "menu_CL_5") {
		document.getElementById("cl_006_1_1-5").style.display = "block";
		document.getElementById("cl_006_1_1-1").style.display = "none";
		document.getElementById("cl_006_1_1-3").style.display = "none";
		document.getElementById("cl_006_1_1-4").style.display = "none";
		document.getElementById("cl_006_1_1-6").style.display = "none";
		document.getElementById("cl_006_1_1-7").style.display = "none";
		document.getElementById("cl_006_1_1-8").style.display = "none";
		document.getElementById("cl_006_1_1-9").style.display = "none";
	}else if (data == "menu_CL_6") {
		document.getElementById("cl_006_1_1-6").style.display = "block";
		document.getElementById("cl_006_1_1-1").style.display = "none";
		document.getElementById("cl_006_1_1-3").style.display = "none";
		document.getElementById("cl_006_1_1-4").style.display = "none";
		document.getElementById("cl_006_1_1-5").style.display = "none";
		document.getElementById("cl_006_1_1-7").style.display = "none";
		document.getElementById("cl_006_1_1-8").style.display = "none";
		document.getElementById("cl_006_1_1-9").style.display = "none";
	}else if (data == "menu_CL_7") {
		document.getElementById("cl_006_1_1-7").style.display = "block";
		document.getElementById("cl_006_1_1-1").style.display = "none";
		document.getElementById("cl_006_1_1-3").style.display = "none";
		document.getElementById("cl_006_1_1-4").style.display = "none";
		document.getElementById("cl_006_1_1-5").style.display = "none";
		document.getElementById("cl_006_1_1-6").style.display = "none";
	}else if (data == "menu_CL_8") {
		document.getElementById("cl_006_1_1-8").style.display = "block";
		document.getElementById("cl_006_1_1-1").style.display = "none";
		document.getElementById("cl_006_1_1-3").style.display = "none";
		document.getElementById("cl_006_1_1-4").style.display = "none";
		document.getElementById("cl_006_1_1-5").style.display = "none";
		document.getElementById("cl_006_1_1-6").style.display = "none";
		document.getElementById("cl_006_1_1-7").style.display = "none";
		document.getElementById("cl_006_1_1-9").style.display = "none";
	}else if (data == "menu_CL_9") {
		document.getElementById("cl_006_1_1-9").style.display = "block";
		document.getElementById("cl_006_1_1-1").style.display = "none";
		document.getElementById("cl_006_1_1-3").style.display = "none";
		document.getElementById("cl_006_1_1-4").style.display = "none";
		document.getElementById("cl_006_1_1-5").style.display = "none";
		document.getElementById("cl_006_1_1-6").style.display = "none";
		document.getElementById("cl_006_1_1-7").style.display = "none";
		document.getElementById("cl_006_1_1-8").style.display = "none";
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

//menu3  อัตราเบี้ยพื้นฐาน
$("#ch_Base_rate").click(function(){
	var ch_Base_rate = document.getElementById("ch_Base_rate");
	if (ch_Base_rate.checked == true){
		
		var checkdataPM_Rate = "";
		var tablename = "tb_PM_Rate1";
		var lastImgOK = $('#'+''+tablename+''+'>tbody>tr:last>td:first').attr("id") || 0;
		var	numberImgOK = Number(lastImgOK.replace("td_PM_Rate1_",""));
		for (var i = 1; i <= numberImgOK; i++){
			var fileID = $('#ip_fileuploads_CL_PM_Rate1_Show_'+i).val();
			if (fileID == ""){
				checkdataPM_Rate += 0;
			}else if (fileID !== ""){
				checkdataPM_Rate += 1;
			}
		}
		if (checkdataPM_Rate > 0){
				$("#textTop7").text("PM_Rate");
				$("#textTop8").text("ตารางเบี้ยประกัน");
				$('#modal_CheckNone_Menu4').modal('show');	
				 $("#cancel_CheckNone_Menu4").attr('onclick', 'cancel_check_None("PM_Rate")');
				 
				 $("#modal_CheckNone_Menu4 .modal-header button.close").click(function(){
						$("#ch_standard_premium_cl").prop("checked", true);
				 });
		}else {
			 $('#sl_menu3_insurance_premium_cl').val("");		
			//ตารางเบี้ยประกัน
				$("#divtb_PM_Rate1 *").attr("disabled", "disabled").off('click');
				 $('#sl_menu3_insurance_premium_cl').prop("disabled",true);
				 $('#addrowPM_Rate').prop("disabled",true);
				 $('#delrowPM_Rate').prop("disabled",true);
				 //อัตราเบี้ยฯเพิ่มตามชั้นอาชีพ
				 $('#ch_step_Career2').prop("disabled",true);
				 $('#ch_step_Career3').prop("disabled",true);
				 $('#ch_step_Career4').prop("disabled",true);
				 $('#in_step_Career2_Sta').prop("disabled",true);
				 $('#in_step_Career2_To').prop("disabled",true);
				 $('#in_step_Career3_Sta').prop("disabled",true);
				 $('#in_step_Career3_To').prop("disabled",true);
				 $('#in_step_Career4_Sta').prop("disabled",true);
				 $('#in_step_Career4_To').prop("disabled",true);
				 //มีส่วนลดเบี้ยประกัน
				 $('#ch_importInsurance_cl').prop("disabled",true);
				 $('#discountInsurancePremiumsSta').prop("disabled",true);
				 $('#discountInsurancePremiumsTo').prop("disabled",true);
				 
				//เสียชีวิต และทุพพลภาพ
				 $("#ip_fileuploads_CL_PM_Rate1_Show_1").attr("placeholder", "");
				 //เสียชีวิต  
				 $("#ip_fileuploads_CL_PM_Rate1_Show_2").attr("placeholder", "");
				 //ทุพพลภาพถาวรสิ้นเชิง
				 $("#ip_fileuploads_CL_PM_Rate1_Show_3").attr("placeholder", "");
		}
		 $("#menu3_Confirm_cl2").attr('onclick', 'bt_Menu3_Confirm_cl2("PM_Rate")');
	}else{
		//ตารางเบี้ยประกัน
		 $('#sl_menu3_insurance_premium_cl').prop("disabled",false);
		 var sl_menu3_insurance_premium_cl = $('#sl_menu3_insurance_premium_cl').val();
			if (sl_menu3_insurance_premium_cl != "") {
				  $("#divtb_PM_Rate1 *").prop("disabled",false);
				  $('#addrowPM_Rate').prop("disabled",false);
				  $('#delrowPM_Rate').prop("disabled",false);
			}	
		//อัตราเบี้ยฯเพิ่มตามชั้นอาชีพ
		 $('#ch_step_Career2').prop("disabled",false);
			var ch_step_Career2 = document.getElementById("ch_step_Career2");
			if (ch_step_Career2.checked == true){
				$('#in_step_Career2_Sta').prop("disabled",false)
				$('#in_step_Career2_To').prop("disabled",false)
			}else{
				$('#in_step_Career2_Sta').prop("disabled",true)
				$('#in_step_Career2_To').prop("disabled",true)
			}	
		 $('#ch_step_Career3').prop("disabled",false);
		 var ch_step_Career3 = document.getElementById("ch_step_Career3");
			if (ch_step_Career3.checked == true){
				$('#in_step_Career3_Sta').prop("disabled",false)
				$('#in_step_Career3_To').prop("disabled",false)
			}else{
				$('#in_step_Career3_Sta').prop("disabled",true)
				$('#in_step_Career3_To').prop("disabled",true)
			}
		 $('#ch_step_Career4').prop("disabled",false);
		 var ch_step_Career4 = document.getElementById("ch_step_Career4");
			if (ch_step_Career4.checked == true){
				$('#in_step_Career4_Sta').prop("disabled",false)
				$('#in_step_Career4_To').prop("disabled",false)
			}else{
				$('#in_step_Career4_Sta').prop("disabled",true)
				$('#in_step_Career4_To').prop("disabled",true)
			}
			 //มีส่วนลดเบี้ยประกัน
		 $('#ch_importInsurance_cl').prop("disabled",false);
	}
});
function cancel_check_None(data) {
	if (data == "PM_Rate"){
		$("#ch_standard_premium_cl").prop("checked", true);
		$("#ch_Base_rate").prop("checked", true);
		$('#modal_CheckNone_Menu4').modal('hide');	
	}else if (data == "Extra_Rate"){
		$("#ch_insurance_premium_Extra_cl").prop("checked", true);
		$('#modal_CheckNone_Menu4').modal('hide');	
	}
}
///////////////////////////////////////////////////////
	function bt_Menu3_Confirm_cl2(data) {
		if (data == "PM_Rate") {
			$('#sl_menu3_insurance_premium_cl option:contains("None")').prop("selected", "selected");		
			$("#ch_Base_rate").prop("checked", false);
			$("#ch_Base_rate").prop("disabled", true);
			
			/*เบี้ยมาตรฐาน*/
			$('#sl_menu3_insurance_premium_cl option:contains("None")').attr("selected","selected");		
			//$('#tb_PM_Rate1'+' tbody').empty();		//remove row

			$("#tb_PM_Rate1 tbody>tr").remove();
			addRowPM_Rate();
			$("#tb_PM_Rate1 tbody>tr td:nth-child(2) select").prop("disabled", true);
			
			// ตารางเบี้ยเพิ่มพิเศษ
			$("#tb_Extra_Rate tbody>tr").remove();
			$('#sl_insurance_premium_Extra_cl option:contains("None")').attr("selected","selected");
			$("#sl_insurance_premium_Extra_cl").prop("disabled", true);

			var min_EM = $("#min_EM_cl").val();
			var max_EM = $("#max_EM_cl").val();
			if(min_EM == "0.00" && max_EM == "0.00"){
				$("#ch_insurance_premium_Extra_cl").prop("checked", false);
				$("#min_EM_cl, #max_EM_cl").prop("disabled", true);
			}
			
			// ตารางมูลค่า
			$("#tb_RateValue1 tbody>tr").remove();
			$('#dbBox1_CL option:contains("None")').attr("selected","selected");
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
			 $("#rd_cal_insurance_cl" ).prop( "checked", false );
			 $('#sl_menu3_insurance_premium_cl').prop("disabled",true);
			 $('#ch_importInsurance_cl').prop("disabled",true);
			 $("#ch_importInsurance_cl").prop("checked", false);
			 $("#discountInsurancePremiumsSta, #discountInsurancePremiumsTo").val("0.00");
			 $("#discountInsurancePremiumsSta, #discountInsurancePremiumsTo").prop("disabled", true);
			 
			 $("#tb_premiumLevel_CL>tbody>tr input:text").prop("disabled", true);
			 $("#tb_premiumLevel_CL>tbody>tr input:text").val("");
			 
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
			$("#validate_filerate1_CL").css("display","none");
			$("#input_fileCal_1_CL").val("");
			$("#input_fileCal_1_CL").attr("placeholder","");
			$("#spanBoxCal1_CL").attr("disabled", true);
			//$("#select_fileCal_1_CL").removeAttr("onchange");
			$("#select_fileCal_1_CL").attr("disabled", true);
			$("#cv_InputExtra_Rate_cl").attr("disabled", true);
			$("#em_rateLayout1,#em_fileID1").val("");
			
			$('#modal_CheckNone_Menu4').modal('hide');	
		}else if (data == "SA_CL_Rate"){
			$('#sl_Reduced_capital_Cal2_CL').val("");	
  
			document.getElementById("sl_Reduced_capital_Cal2_CL").disabled = true;
			$('#cv_SAExtra_Rate_cl').attr("onclick");
		 	$('#spanBoxCal2_CL').prop("disabled",true);
		 	$('#cv_SAExtra_Rate_cl').prop("disabled",true);
		 	$("#select_fileCal_2_CL").attr("disabled", true);
			var input_fileCal_2_CL  = $('#input_fileCal_2_CL').val();
			if (input_fileCal_2_CL != "") {
				$("#input_fileCal_2_CL").attr("placeholder", "");
				$("#input_fileCal_2_CL").val("");
			}
			
			$('#modal_CheckNone_Menu4').modal('hide');	
		}
		
	}
	//menu3 อัตราเบี้ยฯเพิ่มตามชั้นอาชีพ
	function step_Career2() {
		var ch_step_Career2 = document.getElementById("ch_step_Career2");
		if (ch_step_Career2.checked == true){
			$('#in_step_Career2_Sta').prop("disabled",false)
			$('#in_step_Career2_To').prop("disabled",false)
		}else{
			$('#in_step_Career2_Sta').prop("disabled",true)
			$('#in_step_Career2_To').prop("disabled",true)
		}
	}
	
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
			/*if(EM_file != ""){
				count_file++;
			}*/

			if(count_file > 0){
				$("#textTop7").text("Extra_Rate");
				$("#textTop8").text("ตารางเบี้ยประกัน");
				$('#modal_CheckNone_Menu4').modal('show');	
				 $("#cancel_CheckNone_Menu4").attr('onclick', 'cancel_check_None("Extra_Rate")');
				 
				 $("#modal_CheckNone_Menu4 .modal-header button.close").click(function(){
						$("#ch_insurance_premium_Extra_cl").prop("checked", true);
				 });
				 
			}else{
				//document.getElementById("sl_insurance_premium_Extra_cl").disabled = true;
				$('#sl_insurance_premium_Extra_cl option:contains("None")').attr("selected", "selected");
				$("#sl_insurance_premium_Extra_cl").prop("disabled", true);
				document.getElementById("min_EM_cl").disabled = true;
				document.getElementById("max_EM_cl").disabled = true;
				$("#min_EM_cl").val("0.00");
				$("#max_EM_cl").val("0.00");
				$("#input_fileCal_1_CL").val("");
				$("#input_fileCal_1_CL").attr("placeholder","");
				$("#spanBoxCal1_CL").attr("disabled", true);
				$("#select_fileCal_1_CL").attr("disabled", true);				
				//$("#validate_rate1_CL").css("display","inline-block");
				$("#em_rateLayout1,#em_fileID1").val("");
				$("#cv_InputExtra_Rate_cl").attr("disabled", true);
				$("#cv_InputExtra_Rate_cl").removeAttr("onchange");
				
				$("#tb_Extra_Rate>tbody>tr input:text").attr("placeholder","");
				$("#tb_Extra_Rate>tbody>tr td:nth-child(2) span").attr("disabled",true);
				$("#tb_Extra_Rate>tbody>tr td:nth-child(2) font").css("display","none");
				$("#tb_Extra_Rate>tbody>tr input:file").removeAttr("onchange");
				$("#tb_Extra_Rate>tbody>tr input:file").attr("disabled",true);
			}			
			
			 $("#menu3_Confirm_cl2").attr('onclick', 'bt_Menu3_Confirm_cl2("Extra_Rate")');
		}
	});
	///เช็คค่าส่วนลดเบี้ยประกัน
	function checkPremiumsSta_career(id) {
		var  discountFrom = $("#in_step_Career"+id+"_Sta").val();
		var  discountTo= $("#in_step_Career"+id+"_To").val();
		
	  if(discountTo != "0.00"){
		if(discountFrom > discountTo){
			message = "กรุณาระบุอัตราเบี้ยฯใหม่ให้ถูกต้อง";
			alertError(message);
			$("#in_step_Career"+id+"_Sta").val("").focus();
		}else if(discountFrom == "0" || discountFrom == "0.00"){
			message = "กรุณาระบุอัตราเบี้ยฯใหม่ให้ถูกต้อง";
			alertError(message);
			$("#in_step_Career"+id+"_Sta").val("").focus();
		}	  
	 }
	}
	//
	function checkPremiumsTo_career(id) {
		var  discountFrom = $("#in_step_Career"+id+"_Sta").val();
		var  discountTo= $("#in_step_Career"+id+"_To").val();
		if(discountFrom > discountTo){
			message = "กรุณาระบุอัตราเบี้ยฯใหม่ให้ถูกต้อง";
			alertError(message);
			$("#in_step_Career"+id+"_To").val("").focus();
		}else if(discountTo == "0" || discountTo == "0.00"){
			message = "กรุณาระบุอัตราเบี้ยฯใหม่ให้ถูกต้อง";
			alertError(message);
			$("#in_step_Career"+id+"_To").val("").focus();
		}
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
		var min_EM_cl  = Number($('#min_EM_cl').val());
		var max_EM_cl  = Number($('#max_EM_cl').val());
		
		if((min_EM_cl != "") || (min_EM_cl != "0.00") || (min_EM_cl != "0")){
			if(max_EM_cl < min_EM_cl){
				$("#max_EM_cl").val(parseFloat(min_EM_cl).toFixed(2));					
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
		var riderCode = $("#riderCode_CL").val();
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
		var riderCode = $("#riderCode_CL").val();
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
		$("#input_fileCal_1_CL").val("");
		$("#spanBoxCal1_CL").attr("disabled", true);
		$("#select_fileCal_1_CL").attr("disabled", true);
		$("#cv_InputExtra_Rate_cl").prop("disabled", true);
		if($("#input_fileCal_1_CL").val() == ""){
			$("#validate_filerate1_CL").css("display","inline-block");
		}
	}
	});
	
///////////////////นำเข้า ตารางช่วงอายุ-นำเข้า SA_CL_Rate///////////////////	
	function selectTypeCal_CL(type,box){
		var filename = type.split('.');
		var filenamelength 	= filename[0].length;
	
		var input_html = "<div class='input-group'>"+
						 "<input type='text' class='form-control' id='input_fileCal_"+box+"_CL' placeholder='"+type+"' readonly>"+
						 "<label class='input-group-btn'>"+
						 "<span id='spanBoxCal"+box+"_CL' class='btn btn-primary'>"+
						 "<font id='validate_filerate"+box+"_CL' style='color: red; display: inline-block;'>*</font>"+
						 "เลือกไฟล์<input id='select_fileCal_"+box+"_CL' type='file' accept='.txt' style='display: none;'"+
						 "onchange=\"selectFileCal_CL("+box+",'"+filename[0]+"','select_fileCal_"+box+"_CL');"+"\" disabled></span>"+
						 "</label></div>";
		
		$("#div_fileCal"+box+"_CL").html(input_html);
	}
	
	function step_Career3() {
		var ch_step_Career3 = document.getElementById("ch_step_Career3");
		if (ch_step_Career3.checked == true){
			$('#in_step_Career3_Sta').prop("disabled",false)
			$('#in_step_Career3_To').prop("disabled",false)
		}else{
			$('#in_step_Career3_Sta').prop("disabled",true)
			$('#in_step_Career3_To').prop("disabled",true)
		}
	}
	function step_Career4() {
		var ch_step_Career4 = document.getElementById("ch_step_Career4");
		if (ch_step_Career4.checked == true){
			$('#in_step_Career4_Sta').prop("disabled",false)
			$('#in_step_Career4_To').prop("disabled",false)
		}else{
			$('#in_step_Career4_Sta').prop("disabled",true)
			$('#in_step_Career4_To').prop("disabled",true)
		}
	}
function importInsurance_cl() {
	var ch_importInsurance_cl = document.getElementById("ch_importInsurance_cl");
	if (ch_importInsurance_cl.checked == true){
		$('#discountInsurancePremiumsSta').prop("disabled",false)
		$('#discountInsurancePremiumsTo').prop("disabled",false)
	}else{
		$('#discountInsurancePremiumsSta').prop("disabled",true)
		$('#discountInsurancePremiumsTo').prop("disabled",true)
	}
}
	
function selectFileCal_CL(select_file,file_format,id_fileupload){
	
		var tbl_auto = "";
		var modal_auto = "";
		var tbl_view = "";
		var modal_view = "";
		var tbl_col = 0;
		var attr_onclick = "";
		var cov_code = $("#pass_Insurance_coverage_cl").val();
		var download_modal = "";
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
			download_modal = "download_inputExtra_RateView";
			select_file_name = 1;
			type = 21;
			fileID = "em_fileID1";
			
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
			validate_file = "";
			download_modal = "";
			select_file_name = 2;
			type = 22;
			fileID = "decrease_fileID2";
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
	
		if(check_filename2(id_fileupload, file_format) == false){
				$('#'+cv_button).prop("disabled",true);		
				$("#input_fileCal_"+select_file+"_CL").val("");					
		}else{	
				openFile3(event,inputfilename,tbl_auto,tbl_col);
				openFile3(event,inputfilename,tbl_view,tbl_col);
					
					$("#base64_fileTXT_CL").val("");
					
				
				$('#'+modal_auto).modal('show');	
				
				convertToBase64(inputfilename, file_type_id)
				
				$("#"+btn_save).unbind();
				$("#"+btn_save).click(function(){

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
						 	    	
						 	    	
						 	    /*save file*/		
								datajson = {				        	
										file_id 		: file_id,
										file_type_id 	: file_type_id,
										file_name 		: file_name,
										file_url		: obj_ref,
										file_pattern	: file_pattern,
										rate_cat_id		: rate_cat_id,
										sub_cat_id		: sub_cat_id,
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
								    	//	$("#em_rateCat"+id).val(4)
								    		$("#em_rateLayout"+select_file_name).val(response.rate_layout_id);
								    		$("#em_fileID"+select_file_name).val(response.file_id);
								    	}else if(type == 22){
								    		/*SA*/
								    		//$("#decrease_rateCat"+id).val(5)
								    		$("#decrease_rateLayout"+select_file_name).val(response.rate_layout_id);
								    		$("#decrease_fileID"+select_file_name).val(response.file_id);
								    	}
								    	$("#modal_waiting").modal('hide');
								    	$("body").addClass("body_nopadding");
								    	$("#input_fileCal_"+select_file+"_CL").val(file_name);
										$('#'+cv_button).prop("disabled",false);
//										$('#'+cv_button).attr("onclick",attr_onclick);
										$("#"+validate_file).css("display","none");
										
										$('#'+cv_button).attr("onclick","openFileTextRider_CL('"+file_name+"','"+obj_ref+"', "+tbl_col+", '"+tbl_view+"', '"+modal_view+"')");
										$("#"+download_modal).attr("onclick", "openFile_target('"+file_name+"','"+obj_ref+"','txt_download')");
										
								    },
								    error : function(response) {	
								    	//alert("save file error");
										message = "ไม่สามารถบันทึกไฟล์ได้";
										alertError(message);
										
										$("#input_fileCal_"+select_file+"_CL").val("");
										$("#input_fileCal_"+select_file+"_CL").attr("value","");
								    }
								});
						 	    	
						 	    	
						 	    	
						 	   	$("#base64_fileTXT_CL").val("");
						 	   	
						 	    }
						    })
			    		 
					 }
					 
					
					
					
				});

		}
}	
	
	function check_filename2(fileID, fileFormat){
		var filename = document.getElementById(fileID).files[0].name.split('.');			
			if(filename[0] != fileFormat){
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
		$("#bt_closeModal").removeAttr( "onclick" );
		$("#bt_closeModal").click(function(){
			
			$('#modal_inputExtra_Rate').modal('hide');
		})
	}
	function modal_inputExtra_Rate_off() {
		
		$("#input_fileCal_1_CL").val("");
		$('#modal_inputExtra_Rate').modal('hide');
		$('#bt_view_cv_extraRate').prop("disabled",true);
	}
////Add Row tb_BasicInformation1 ////
	var dropdownUnit = "<select class='form-control' style='margin: 0; padding: 0;' >"+
	"<option value='1'>ปี</option>" +
	"<option value='2'>เดือน</option>" +
	"<option value='3'>วัน</option>"+
	"</select>";


var dropdownFactor = "<select class='form-control' style='margin: 0; padding: 0;' >"+
	"<option value='1'>ปี</option>" +
	"<option value='2'>เดือน</option>" +
	"<option value='3'>วัน</option>"+
	
	"</select>";

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
	///table PM_Rate manu3
	/*function addRowPM_Rate1(){
		debugger;
		var typeMoney = $('select.item-i').val() || 0;
				var lastImgOK = $('#tb_PM_Rate1>tbody>tr:last>td:first').attr("id") || 0;
				var numberImgOK = 1;
				if(lastImgOK == 1){
					numberImgOK = 2;
				}else{
					numberImgOK = Number(lastImgOK.replace("td_PM_Rate1_",""))+1;
				}
				var newID = "td_PM_Rate1_"+numberImgOK;
				var ftOnclick = 'imgCheckbox("'+newID+'");';
				var row = "";
				row = "<tr id='tbody_PM_Rate1_"+numberImgOK+"'>"+
					  						"<td id="+"'"+newID+"'"+" width='5%' class='borderBlack'  onclick='"+ftOnclick+"' style='vertical-align: middle;'><i class='glyphicon glyphicon-edit'></i></td>"+
					  						"<td width='25%' class='borderBlack'><input type='text' class='form-control'  onblur='checkKeyText_PM_Rate ("+numberImgOK+");' id='topics_PM_Rate_"+numberImgOK+"'></td>"+
											"<td width='55%' class='borderBlack'>" +
												"<div class='input-group col-xs-12'>" +
													"<input type='file' accept='.txt' id='ip_fileuploads_CL_PM_Rate1_"+numberImgOK+"'  style='display: none'>" +
													"<input type='text' class='form-control' id='ip_fileuploads_CL_PM_Rate1_Show_"+numberImgOK+"'readonly>" +
													"<span class='input-group-btn'><button class='btn btn-default btn-primary' type='button' id='bt_uploadfilePM_Rate1_"+numberImgOK+"' " +
															"onclick='uploadfile1("+'"tb_PM_Rate1"'+","+'"ip_fileuploads_CL_PM_Rate1_"'+","+'"ip_fileuploads_CL_PM_Rate1_Show_"'+","+'"span_PM_Rateopen_"'+","+'"span_PM_Ratedownload_"'+","+'"tb_PM_Rate_view"'+","+'"PM_Rate_checkfileAll"'+","+numberImgOK+");'>...</button>" +
													"</span>" +
												"</div>" +
											"</td>"+
											"<td width='8%' class='borderBlack'>" +
												"<span class='glyphicon glyphicon-eye-open activecolorgray' data-id='span_PM_Rateopen_"+numberImgOK+"'></span>" +
											"</td>"+
											"<td width='7%' class='borderBlack'>" +
												"<span class='glyphicon glyphicon-download-alt activecolorgray' data-id='span_PM_Ratedownload_"+numberImgOK+"'></span>" +
											"</td>"+
					  "</tr>";
				$("#tb_PM_Rate1 tbody").append(row);
	}*/
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
	//delete row table	*PM_Rate1
	function deleteRowPM_Rate1()
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
			var lastImgOK = $('#tb_PM_Rate1 >tbody>tr:last>td:first').attr("id") || 0;	
			var numberImgOK = 0;
			if(lastImgOK == 0){
				numberImgOK = 1;
			}else{
				numberImgOK = Number(lastImgOK.replace("td_PM_Rate1_",""))+1;
			}
			for(var i = 1;i<=numberImgOK;i++)
				{
					var checked = $('#tbody_PM_Rate1_'+i+' >td:first>i').attr("class");
					if(checked == "glyphicon glyphicon-ok"){	
						deleteTableRow('#tbody_PM_Rate1_'+i);				
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
	var maximum_Protection = $("#maximum_Protection_To_cl").val();
	var rider_code = $("#key_rider_code_cl").val();

	var mode0 = document.getElementById("mode0_cl");
	var mode1 = document.getElementById("mode1_cl");
	var mode2 = document.getElementById("mode2_cl");
	var mode3 = document.getElementById("mode3_cl");
	var mode4 = document.getElementById("mode4_cl");
	var mode5 = document.getElementById("mode5_cl");
	
	/*var mode4 = document.getElementById("mode4_cl");
	var mode8 = document.getElementById("mode8_cl");
	var mode9 = document.getElementById("mode9_cl");*/
	
	var rd_anniversary_cl = document.getElementById("rd_anniversary_cl");
	var rd_Time_length_cl = document.getElementById("rd_Time_length_cl");
	var rd_insurance_premium_cl 	= document.getElementById("rd_insurance_premium_cl");
	var rd_Time_insurance_premium_cl = document.getElementById("rd_Time_insurance_premium_cl");
	
	/*อายุที่ได้รับความเห็นชอบ*/
	var age_Start_cl = $("#age_Start_cl").val();
	var age_unitSatrt_cl = $("#dmy_5_cl option:selected").text();
	var age_To_cl = $("#age_To_cl").val();
	var age_unitTo_cl = $("#dmy_6_cl option:selected").text();
	
	if(age_Start_cl == "" || age_unitSatrt_cl == "None" || age_To_cl == "" || age_unitTo_cl == "None"){
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
	var rd1 = $("#rd_insurance_premium_cl").prop("checked");
	var rd2 = $("#rd_Time_insurance_premium_cl").prop("checked");
	if($("#ch_PremRider_cl").prop("checked") == true){
		if(rd1 == false && rd2 == false){
			error++;
		}else{
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
	
	var numcheck_death = $("#tb_BasicInformation_Death>tbody input:checkbox:checked").length;
	if(numcheck_death > 0){
		$("#tb_BasicInformation_Death>tbody tr").each(function(){
			if($(this).find("input:checkbox").prop("checked") == true){
				if($(this).find("td:nth-child(3)").text() == ""){
					error++;
				}
			}
		});
	}
	
	var numcheck_TPD = $("#tb_BasicInformation_TPD>tbody input:checkbox:checked").length;
	if(numcheck_TPD > 0){
		$("#tb_BasicInformation_TPD>tbody tr").each(function(){
			if($(this).find("input:checkbox").prop("checked") == true){
				if($(this).find("td:nth-child(3)").text() == ""){
					error++;
				}
			}
		});
	}
	
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
	
	if(pass_Insurance_coverage == "" ||  thai_Name  == "" || maximum_Protection == "" || ch_male.checked == false && ch_female.checked == false 
			||  rd_anniversary_cl.checked == false && rd_Time_length_cl.checked == false){
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

function bt_Menu1_Canceled_cl(status) {
	  window.location = "base_plan.jsp?user="+status;
}

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

var openFile2 = function(event,fileID,tableName,tableCol) {	
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

///Menu การใช้สิทธิ์ตามกรมธรรม์ //
function bt_Menu2_Confirm_cl() {
	var ch_expropriate = document.getElementById("ch_expropriate_insurance");
	
	if (ch_expropriate.checked == true ) {
		var message = "บันทึกข้อมูลเรียบร้อย";
		alertSuccess(message);
	}else {
		message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
		alertError(message);
	}
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
	});*/			
		
	//$("#risk_CL *").prop("disabled", "disabled").off('click');
	$("#norisk_CL *").prop("disabled", "disabled").off('click');		
	$("#RPU_CL *").attr("disabled", "disabled").off('click');
	$("#tbl_PolicyFile_CL *").attr("disabled", "disabled").off('click');
	
	$("#tbl_PolicyFile_CL,#tbl_PolicyFileWord_CL").DataTable({"ordering": false,"paging": false,"bInfo" : false, scrollY: '312px',scrollCollapse: true, "autoWidth": false, "oLanguage": {"sSearch": "ค้นหา: "}});	
	$("#tbl_HistoryPolicy_CL").DataTable({"ordering": false,"paging": false,"bInfo" : false, "searching" :false, scrollY: '185px',scrollCollapse: true, "autoWidth": false, "oLanguage": {"sSearch": "ค้นหา: "}});
	$(".datatbl_Historypolicy_CL .dataTables_scrollHeadInner").css({"width":"98%"});
	$(".datatbl_Historypolicy_CL .table").css({"width":"100%"});
	
	$(".datatbl_PolicyFile_CL .dataTables_scrollHeadInner,.datatbl_PolicyFileWord_CL .dataTables_scrollHeadInner").css({"width":"100%"});
	$(".datatbl_PolicyFile_CL .table, .datatbl_PolicyFileWord_CL .table").css({"width":"100%"});
	
	/*$("#tbl_BenefitOpt1_CL,#tbl_BenefitOpt2_CL,#tbl_BenefitOpt2Sub_CL,#tbl_BenefitOpt1Edit_CL,#tbl_BenefitOpt2Edit_CL,#tbl_BenefitOpt2SubEdit_CL").DataTable({"ordering": false,"paging": false,"bInfo" : false, scrollY: '236px',scrollCollapse: true, "autoWidth": false, 
		fixedHeader: {header: true},"oLanguage": {"sSearch": "ค้นหา: "}
	});
	$(".datatbl_BenefitOpt1_CL .dataTables_scrollHeadInner,.datatbl_BenefitOpt2_CL .dataTables_scrollHeadInner,.datatbl_BenefitOpt2Sub_CL .dataTables_scrollHeadInner,.datatbl_BenefitOpt1Edit_CL .dataTables_scrollHeadInner,.datatbl_BenefitOpt2Edit_CL .dataTables_scrollHeadInner,.datatbl_BenefitOpt2SubEdit_CL .dataTables_scrollHeadInner").css({"width":"100%"});
	$(".datatbl_BenefitOpt1_CL .table,.datatbl_BenefitOpt2_CL .table,.datatbl_BenefitOpt2Sub_CL .table,.datatbl_BenefitOpt1Edit_CL .table,.datatbl_BenefitOpt2Edit_CL .table,.datatbl_BenefitOpt2SubEdit_CL .table").css({"width":"100%"});*/
	
	/*บันทึกสลักหลัง*/
	/*$("#tbl_endorsement_CL").DataTable({"ordering": false,"paging": false,"bInfo" : false, scrollY: '236px',scrollCollapse: true, "autoWidth": false, 
		fixedHeader: {header: true},"oLanguage": {"sSearch": "ค้นหา: "}
	});
	$(".datatbl_endorsement_CL .dataTables_scrollHeadInner").css({"width":"100%"});
	$(".datatbl_endorsement_CL .table").css({"width":"100%"});*/
	
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
	
	/*ห้ามใส่ค่าลบ*/
	$("#die_CL input[type='number']").keydown(function () {
	    // Save old value.
	    if (!$(this).val() || (parseInt($(this).val()) >= 1))
	    $(this).data("old", $(this).val());
	  });
	  $("#die_CL input[type='number']").keyup(function () {
	    // Check correct, else revert back to old value.
	    if (!$(this).val() || (parseInt($(this).val()) >= 1))
	      ;
	    else
	      $(this).val($(this).data("old"));
	  });
	  	
	  /* pun fix*/
	  $('#cv_InputExtra_Rate_cl').prop("disabled",true)
		 //selectTypeCal_CL(type_selectCal,1);
		 $("#spanBoxCal1_CL").attr("disabled", true);
		 $("#select_fileCal_1_CL").attr("disabled", true);
	  
	  /*เบี้ยมาตรฐาน*/ 
	  $("#ch_Base_rate").prop("disabled", true);
	  $("#ch_Base_rate").prop("checked", false);
});
	
	function numberKey_2digit(value){
		var val = $(value).val();
		if (!val || (parseInt(val) >= 1))
		      ;
		else{ $(value).val($(value).data("old")); }

		if (val > 99 ) {$(value).val(99);}
	}

	/*ตารางมูลค่ากรมธรรม์*/
	function settingPolicyValue(){		
		$("#riderplanCode_CL").val($("#pass_Insurance_coverage_cl").val());
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
		
		/*เปิด checkbox ตารางมูลค่ากรมธรรม์*/
		/*var count_file = 0;
		$("#tb_RateValue1>tbody>tr input:text").each(function(){
			if($(this).val() != ""){
				count_file++;
			}
		});*/
		
		//if(count_file > 0){
			$("#cbBox1_CL").prop("disabled", false);
			$("#cbBox2_CL").prop("disabled", false);
		//}
		
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
		//$("#dbBox"+box+"_CL").prop("disabled", false);
		//$("#spanBox"+box+"_CL").attr("disabled", false);
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
				
				if(dbBox2_CL_text == "None"){
					$('#spanBox2_CL').attr("disabled", true);
					$('#cv2_CL').prop('disabled', true);
					$('#select_file_2_CL').prop('disabled', true);
					$("#validate_dd_file2").css("display", "inline-block");
					$("#dbBox2_CL option:contains('None')").attr("selected","selected");
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
		var btn_download = "";
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
			btn_download = "download_tbl_StandardRisk_CL";
			rate_cat_id = "";
			sub_cat_id = "";
			
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
			btn_download = "download_tbl_NotStandardRisk_CL";
			type = 32;
			downloadFile = "cv2_CL";
			fileID = "cvLow_fileID2";
			
			rate_cat_id = $("#rateCat_tbRiskLowStardard").val();
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
		//$("#select_file_"+select_file+"_CL").unbind("change");	
			
		if($("#input_file_"+select_file+"_CL").val() == ""){
			file_id = "";
		}else{
			file_id = $("#"+fileID).val();
		}	
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
				//$("#validate_input"+select_file+"_CL").css("display", "none");
				//$("#input_file_"+select_file+"_CL").val(file_name);	
				//$('#'+cv_button).prop('disabled', false);
				
				$("#base64_fileTXT_CL").val("");
				
				$("#"+modal_name).modal("show");
				
				convertToBase64("select_file_"+select_file+"_CL",file_type_id)
				
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
						 	    	
						 	    	
						 	    /*save file*/
								datajson = {				        	
										file_id 		: file_id,
										file_type_id 	: file_type_id,
										file_name 		: file_name,
										file_url		: obj_ref,
										file_pattern	: file_pattern,
										rate_cat_id		: rate_cat_id,
										sub_cat_id		: sub_cat_id,
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
										$('#'+cv_button).attr("onclick","openFileTextRider_CL('"+file_name+"','"+obj_ref+"', "+tbl_col+", '"+tbl_name+"', '"+modal_cv+"')");
										$("#modal_waiting").modal('hide');
										$("body").addClass("body_nopadding");
										$("#"+btn_download).attr("onclick", "openFile_target('"+file_name+"','"+obj_ref+"','txt_download')");
										
								    },
								    error : function(response) {	
								    	//alert("save file error");
										message = "ไม่สามารถบันทึกไฟล์ได้";
										alertError(message);
										
										$("#input_file_"+select_file+"_CL").val("");
								    }
								});
											
						 	   	$("#base64_fileTXT_CL").val("");
						 	   	
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
				//$("#validate_input"+select_file+"_CL").css("display", "none");				
				//$("#input_file_"+select_file+"_CL").val(file_name);	
				//$('#'+cv_button).prop('disabled', false);
				
		 	   	$("#base64_fileTXT_CL").val("");
				
				$("#"+modal_name).modal("show");	
					
				convertToBase64("select_file_"+select_file+"_CL",file_type_id)
				
				$("#"+file_button1).click(function() {
					/*save file*/				
					//set_Filevalue(type,select_file,file_id,file_type_id,file_name,file_path,file_pattern,rate_cat_id,sub_cat_id,user_code,cv_button);		
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
										sub_cat_id		: sub_cat_id,
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
										$('#'+cv_button).attr("onclick","openFileTextRider_CL('"+file_name+"','"+obj_ref+"', "+tbl_col+", '"+tbl_name+"', '"+modal_cv+"')");
										$("#modal_waiting").modal('hide');
										$("body").addClass("body_nopadding");
										$("#"+btn_download).attr("onclick", "openFile_target('"+file_name+"','"+obj_ref+"','txt_download')");
								    },
								    error : function(response) {	
								    	//alert("save file error");
										message = "ไม่สามารถบันทึกไฟล์ได้";
										alertError(message);
										
										$("#input_file_"+select_file+"_CL").val("");
								    }
								});
														
						 	   	$("#base64_fileTXT_CL").val("");
						 	   	
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
			
		}else if(cbDisabled_CL == true)
		{
			$('#tabDisabled_CL').attr("class","active");
		}
	
	if(cbDie_CL == true)$('#aDie_CL').css("display", "block");
	if(cbDisabled_CL == true)$('#aDisabled_CL').css("display", "block");
	
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
var dropdownFromTo_DL = "<select class='form-control width-initial' style='margin: 0;width: 100%;'>"+
"<option>วัน</option>"+
"<option>สัปดาห์</option>"+
"<option>เดือน</option>"+
"<option>ปี</option>"+
"<option>อายุ</option>"+
"</select>";

var dropdownSa_CL = "<select class='form-control width-initial'>"+
"<option selected>None</option>"+
"<option >SA</option>"+
/*"<option>ทุน * SA</option>"+*/
"<option >SA_Dec</option>"+
"</select>";

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


function newAddBenefitDie_DL(){
	var lastImgOK = $('#tbody_dieL_CL >tbody>tr:last>td:first').attr("id") || 0;
	
	//alert(lastImgOK);
	var numberImgOK = 0;
	
	if(lastImgOK == 0){
		numberImgOK = 1;
	}else{
		numberImgOK = Number(lastImgOK.replace("imgOK_",""))+1;
	}
	
	var newID = "imgOK_"+numberImgOK;
	var ftOnclick = 'imgCheckbox("'+newID+'");';
	
	var row1 = "";
	row1 = "<tr id='tbody_dieL_CL"+numberImgOK+"'>"+
								"<td width='65px' class='text-center borderBlack' id="+"'"+newID+"'"+" onclick='"+ftOnclick+"' style='vertical-align: middle;'><i class='glyphicon glyphicon-edit'></i></td>"+
								"<td class='text-center borderBlack'><input id='die_phase"+numberImgOK+"_CL' type='number' class='form-control margin-padding0 text-center width50px' value='1' min='1'></td>"+
								"<td width='56px' class='borderBlack'><input id='die_fromYear"+numberImgOK+"_CL' type='number' class='form-control margin-padding0 text-center' value='1' min='1'></td>"+
								"<td width='100px' class='text-center borderBlack'>"+dropdownFromTo_DL+"</td>"+
								"<td width='56px' class='borderBlack'><input id='die_toYear"+numberImgOK+"_CL' type='number' class='form-control margin-padding0 text-center' value='1'></td>"+
								"<td width='100px' class='text-center borderBlack'>"+dropdownFromTo_DL+"</td>"+
			"</tr>";
	
	
	var row2 = "";
	row2 = "<tr id='tbody_dieR_CL"+numberImgOK+"'>"+
								"<td width='50px' class='text-center borderBlack'>"+dropdownMax+"</td>"+
								"<td width='50px' class='borderBlack'><input id='die_sa"+numberImgOK+"_CL' class='auto form-control margin-padding0 text-center width70px' value='0.00' data-v-min='0.00' data-v-max='999.99'>"+
								"<td width='50px' class='text-center borderBlack'>"+dropdownSa_CL+"</td>"+
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
								"<td width='70px' class='borderBlack'><input id='adb_CL"+numberImgOK+"' type='text' class='form-control margin-padding0 text-center width50px' value='-' disabled></td>"+
								"<td width='160px' class='text-center borderBlack'>"+dropdownADB2_CL+"</td>"+
			"</tr>";
	
	$("#tbody_dieL_CL tbody").append(row1);
	$("#tbody_dieR_CL tbody").append(row2);
	$('.auto').autoNumeric('init');
}

/*ลบเสียชีวิต*/
function confirmDeleteBenefit_CL(){
	var imgOKcount = $("#tbody_dieL_CL i.glyphicon-ok").length;	
	if(imgOKcount <= 0)
	{	
		message = "กรุณาเลือกรายการที่ต้องการลบ";
		alertError(message);
	}else{
		
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
	}
}

/*บันทึกเสียชีวิต*/
function bt_Die_CL_Confirm() {
	var message = "";
	var error = 0;
	
	var imgOKcount = $("#tbody_dieL_CL i.glyphicon-edit").length;
	
	for(var i = 1;i<=imgOKcount;i++){
			/*ระยะ*/
			var die_phase_CL = [];
			die_phase_CL[i]	= $('#die_phase'+i+'_CL').val();
			if(die_phase_CL[i] == ""){
				message = "กรุณาระบุข้อมูลให้ครบ";
				alertError(message);
				error++;
			}	
			
			/*from*/
			var die_fromYear_CL = [];
			die_fromYear_CL[i]	= $('#die_fromYear'+i+'_CL').val();
			if(die_fromYear_CL[i] == ""){
				message = "กรุณาระบุข้อมูลให้ครบ";
				alertError(message);
				error++;
			}
			
			/*to*/
			var die_toYear_CL = [];
			die_toYear_CL[i]	= $('#die_toYear'+i+'_CL').val();
			if(die_toYear_CL[i] == ""){
				message = "กรุณาระบุข้อมูลให้ครบ";
				alertError(message);
				error++;
			}	
			
			/*SA*/
			var die_sa_CL = [];
			die_sa_CL[i]	= $('#die_sa'+i+'_CL').val();
			if(die_sa_CL[i] == "0.00" || die_sa_CL[i] == "0" || die_sa_CL[i] == ""){
				message = "กรุณาระบุข้อมูลให้ครบ";
				alertError(message);
				error++;
			}
			
		
	}

	if(error == 0 && imgOKcount > 0){
		message = "บันทึกข้อมูลเรียบร้อย";
		alertSuccess(message);
	}
}

/*ทุพพลภาพถาวรสิ้นเชิง*/
function imgCheckbox_disabled(id)
{
	var imgOK = "imgOK_disabled"+id;
	var classed = $('#'+imgOK+' >i').attr("class") || 0;
		
	if(classed != 0)
		{			
			if(classed == "glyphicon glyphicon-edit")
				{		
					$('#'+imgOK+' >i').attr("class", "glyphicon glyphicon-ok edit_disabled");
					$('#'+imgOK+' >i').css("display","block");
					$('#disabled_amount'+id).prop("disabled", false);	
					$('#disabled_name'+id).prop("disabled", false);
				}
			else
				{
					$('#'+imgOK+' >i').attr("class", "glyphicon glyphicon-edit");
					$('#'+imgOK+' >i').css("display","block");
					$('#disabled_amount'+id).prop("disabled", true);
					$('#disabled_name'+id).prop("disabled", true);
				}
		}
}
function imgCheckboxDel_disabled(id)
{
	var imgOK = "imgOKDel_disabled"+id;
	var classed = $('#'+imgOK+' >i').attr("class") || 0;
		
	if(classed != 0)
		{			
			if(classed == "glyphicon glyphicon-trash")
				{		
					$('#'+imgOK+' >i').attr("class", "glyphicon glyphicon-ok del_disabled");
					$('#'+imgOK+' >i').css("display","block");
				}
			else
				{
					$('#'+imgOK+' >i').attr("class", "glyphicon glyphicon-trash");
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
									"class='glyphicon glyphicon-trash'></i></td>"+
									"<td id="+newID+" class='text-center borderBlack' onclick='imgCheckbox_disabled("+numberImgOK+");' style='vertical-align: middle;'>"+
									"<i class='glyphicon glyphicon-ok edit_disabled'></i></td>"+									
									"<td class='borderBlack verticalCenter'><input type='text' name='disabled_name"+numberImgOK+"' id='disabled_name"+numberImgOK+"' class='form-control margin-padding0 text-center;'></td>"+									
									"<td class='borderBlack' align='center'><input id='disabled_amount"+numberImgOK+"' type='text' class='auto form-control margin-padding0 text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999.99'></td>"+											
								    "</tr>";
			
			$("#Disabled_Table tbody").append(row);
			$('.auto').autoNumeric('init');
}

function confirmDeleteDisabled_CL(){
	var imgOKcount = $("#Disabled_Table i.del_disabled").length;
	if(imgOKcount <= 0)
	{	
		message = "กรุณาเลือกรายการที่ต้องการลบ";
		alertError(message);
	}else{
		
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
	}
}

/*บันทึกทุพพลภาพถาวรสิ้นเชิง*/
function bt_Disabled_CL_Confirm() {
	var message = "";
	var error = 0;
	
	var imgOKcount = $("#Disabled_Table i.edit_disabled").length;		
	var lastImgOK = $('#Disabled_Table >tbody>tr:last>td:nth-child(2)').attr("id");	
	var numberImgOK = Number(lastImgOK.replace("imgOK_disabled",""))+1;

	for(var i = 1;i<=numberImgOK;i++){
		var checked = $('#tbody_disabled'+i+' >td:nth-child(2)>i').attr("class");
		if(checked == "glyphicon glyphicon-ok edit_disabled"){
			var disabled_name = [];
			disabled_name[i]	= $('#disabled_name'+i).val();
			if(disabled_name[i] == ""){
				message = "กรุณาระบุข้อมูลให้ครบ";
				alertError(message);
				error++;
			}		
			
			var disabled_amount = [];
			disabled_amount[i] 	= $('#disabled_amount'+i).val();
			if(i != 5){
				if(disabled_amount[i] == "0.00" || disabled_amount[i] == "0" || disabled_amount[i] == ""){				
						message = "กรุณาระบุข้อมูลให้ครบ";
						alertError(message);
						error++;
					
				}
			}
		}
	}
	
	if(error == 0 && imgOKcount > 0){
		message = "บันทึกข้อมูลเรียบร้อย";
		alertSuccess(message);
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
			//$("#tbl_benefit_CL i").removeClass("glyphicon-ok").addClass("glyphicon-edit");
		}, 30);
		
		
		$("#benefitDetail_CL .tab-content").remove();
		$("#tabBenefitRider_CL").html("");
		$("#benefitDetail_CL .tab-pane").removeClass("active");
		
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
	}else if(type == "txt"){
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
		    		$("base64_fileTXT_CL").val("");
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
		    		$("base64_fileTXT_CL").val("");
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
	    	  
			  $("#select_pdffile_policy1_CL_modal ").change(function() {
				  
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
				    	   $("#btn_submit_fileuploadPolicyPdf_CL").unbind();
				    	   $("#btn_submit_fileuploadPolicyPdf_CL").click(function(){	
				    		   $("#modal_waiting").modal('show');
				    		   var base64 = $("#base64_filePDF_CL").val();
					    	   var rowID = $(".modal-body #pdfID_Policy_CL").val(); 
					    	   if( base64 != ""){
					    		   GetFileModalPolicy_CL(rowID, file_path, file_name,"", "pdf");
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
								 	    	$("#div_pdf_policy"+rowPolicy+"_CL").find('a').attr("onclick","openFile_target(this,'"+obj_ref+"','pdf')")
								 	    	// ชนิดไฟล์,ชื่อไฟล์,ที่อยู่ของไฟล์,ไฟล์ไอดีที่ซ่อนอยู่
								 	    	saveFile(file_type,file_name,obj_ref,"fileId_pdf_CL"+rowPolicy);
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
	  $("#btn_submit_fileuploadPolicyPdf_CL").unbind();
      $("#btn_submit_fileuploadPolicyPdf_CL").click(function(){		    	 
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
function oldFilePDF_policyWording_CL(doc_type_id,file_type){

	// ซ่อนค่าให้รู้ว่า popup หน้านีคือของ row ไหน
	if(file_type == "2"){
		$("#btn_submit_fileuploadPolicyPdf_CL").attr('data-id',doc_type_id)
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
	    			if ( $.fn.dataTable.isDataTable( "#tbl_PolicyFile_CL" ) ) {
		  		    	  var table = $("#tbl_PolicyFile_CL").DataTable();
		  		    	  table.destroy();
		  		      	}
	    			$("#tbl_PolicyFile_CL tbody>tr").remove();
	    		}else if(file_type == "1"){
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
				    		   var file_name_update = "1_"+dateTime+".opt"
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
							 	    	var rowPolicy = $("#show_modal_selectPolicy_doc").val();
							 	    	$("#div_word_policy"+rowPolicy+"_CL").find('a').attr("onclick","openFile_target(this,'"+obj_ref+"','doc')")
							 	    	
							 	    	// ชนิดไฟล์,ชื่อไฟล์,ที่อยู่ของไฟล์,ไฟล์ไอดีที่ซ่อนอยู่
								 	    saveFile(file_type,file_name,obj_ref,"fileId_doc_CL"+rowPolicy);
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
function GetFileModalPolicy_CL(rowID, file, filename, ref ,type){
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
    //$("a#"+ dataHistoryID).removeClass("active_blue").addClass("active_grey");
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
	    async: false,
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
				"</td>"+
				"<td class='text-center'>" +
					"<a onclick=\"openFile_target(this,'"+file_ref_doc+"','doc')\" target='_blank'>"+fileName_doc+"</a>"+
				"</td>"+	
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
	var pdfOnclick = 'resetFilePolicy_CL('+numberImgOK+',"pdf");';
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
	  "<a id='span_reset_pdf"+numberImgOK+"' class='active_grey' onclick='"+pdfOnclick+"'><span class='glyphicon glyphicon-refresh'></span></a>"+
	  "</td>"+
	  "<td class='borderBlack' align='center'>"+
	  "<div class='input-group col-xs-12'>"+
	  "<input type='hidden' id='fileId_doc_CL"+numberImgOK+"'>"+
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
			
		    /*create new order number in span*/
			var record_count = $("#Policy_Table_CL>tbody>tr").length;
			var table = document.getElementById("Policy_Table_CL");
			var spans = table.getElementsByClassName("spanPolicy_CL");
				for(var j = 0;j<record_count;j++){					
					 //alert(spans[j].innerHTML);				
						 spans[j].innerHTML = j+1;
							 	
					
				}	
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
		nameTab 	= "menu_CL_7";
		Statuesave = "N";
	}
	
	if(error == 0){
		dataSave_PolicyWording();
		message = "บันทึกข้อมูลเรียบร้อย";
		alertSuccess(message);
		nameTab 	= "menu_CL_7";
		Statuesave = "Y";
	}
}

/*edit active*/
$("#btn_submit_fileuploadPolicyPdf_CL,#btn_submit_fileuploadPolicyWord_CL,#span_reset_pdf1, #span_reset_word1").click(function(){
	nameTab 	= "menu_CL_7";
	Statuesave = "N";
});
$('#Policy_Table_CL').on('input', function(){
	nameTab 	= "menu_CL_7";
	Statuesave = "N";
});

$("#mainPolicy *").change(function(){
	nameTab 	= "menu_CL_4";
	Statuesave = "N";
})

$("#benefitDetail_CL *").change(function(){
	nameTab 	= "menu_CL_5";
	Statuesave = "N";
})

/*ผลประโยชน์/ความคุ้มครอง*/
function imgCheckbox_benefit_CL(id)
{
	var imgOK = "imgOK_benefitCL"+id;
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

function show_bnf_content(tab){
	//alert(tab);
	$("#benefitDetail_CL .tab-content>div").each(function(){
		var contentID = $(this).attr("id");
		
		if(contentID == tab){
			//alert(contentID+" tab>>"+tab)
			$("#"+tab).css("display","block");
		}else{
			$(this).css("display","none");
		}
	});
	
}

function confirmSelectBenefit_CL(){	
	var imgOKcount = $("#tbl_benefit_CL i.glyphicon-ok").length;
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
	save_tab_benefitsCoverage();
	
	var lastImgOK = $('#tbl_benefit_CL >tbody>tr:last>td:first').attr("id") || 0;	
	var numberImgOK = 0;
	if(lastImgOK == 0){
		numberImgOK = 1;
	}else{
		numberImgOK = Number(lastImgOK.replace("imgOK_benefitCL",""))+1;
	}
	
	var arr_objPass = [];
	var arr_objText = [];
	var arr_bnf = [];
	$("#tbl_benefit_CL tbody>tr").each(function(){
		var className = $(this).find("td:nth-child(1) i").attr('class');
		if(className == "glyphicon glyphicon-ok"){
			arr_objPass.push($(this).find("td:nth-child(1)").data('value'));
			arr_objText.push($(this).find("td:nth-child(2)").text());
			arr_bnf.push($(this).find("td:nth-child(1)").data('value'));
		}
	});
	
	$("#hidden_all_bnf").val(arr_bnf);
	
	var firstCheck = $('#tbl_benefit_CL >tbody>tr>td>i.glyphicon-ok:first').attr("id");
	var numberfirstCheck = Number(firstCheck.replace("iconBenefitCL",""));
	var html = "";
	var j = 0;
	
	for(var i = 0;i<numberImgOK;i++)
		{			
			var checked = $('#tbody_benefitCL'+i+' >td:first>i').attr("class");
			if(checked == "glyphicon glyphicon-ok"){						
				html += "<li id='tabBC_0"+i+"'><a data-toggle='tab' onclick=\"show_bnf_content('BC"+i+"_CL');\""+
				"style='display: block' id='aBC"+i+"_CL'>"+arr_objPass[j]+"</a></li>";
				/*html += "<li id='tabBC_0"+i+"'><a data-toggle='tab' data-target='#BC"+i+"_CL'"+
				"style='display: block' id='aBC"+i+"_CL'>"+arr_objPass[j]+"</a></li>";*/
				j++;
			}			
		}
	
	$("#tabBenefitRider_CL").append(html);
	//$("#tabBC_0"+numberfirstCheck).attr("class","active");
	$("#BC"+numberfirstCheck+"_CL").addClass("active in");
	var num = 0;

	
	for(var i = 0;i<numberImgOK;i++)
	{
		var checked = $('#tbody_benefitCL'+i+' >td:first>i').attr("class");
		if(checked == "glyphicon glyphicon-ok"){
			var row = "<div class='tab-content' data-name='"+arr_objPass[num]+"'>"+
				"<div id='BC"+i+"_CL' class='tab-pane'>"+
				"<input type='hidden' id='hidden_BC_0"+i+"' value=''>"+
				"<div class='heading1'>"+arr_objText[num]+"</div>"+
					"<div class='text-center' style='padding: 20px 0'></div>"+
						"<div class='scroll_benefitTab_rider'>"+
						"<table class='table table-bordered borderBlack' id='tbl_BC_0"+i+"' style='width:2500px;'>"+							
							"<thead>"+
								"<tr>"+									
									"<th rowspan='2' class='text-center bg-primary borderBlack' width='25' style='vertical-align: middle; height:74px;'>เลือก</th>"+
									"<th rowspan='2' class='text-center bg-primary borderBlack' width='25' style='vertical-align: middle;'>ลำดับ</th>"+							
									"<th rowspan='2' class='text-center verticalCenter bg-primary borderBlack' width='150'>รหัสความคุ้มครอง</th>"+
									"<th rowspan='2' class='text-center verticalCenter bg-primary borderBlack' width='400'>ความคุ้มครอง</th>"+																		
									"<th rowspan='2' class='text-center verticalCenter bg-primary borderBlack' width='100'>จำนวน</th>"+
									"<th rowspan='2' class='text-center verticalCenter bg-primary borderBlack' width='130'>หน่วย</th>"+
									"<th rowspan='2' class='text-center verticalCenter bg-primary borderBlack' width='100'>ต่อทุน</th>"+
									"<th rowspan='2' class='text-center verticalCenter bg-primary borderBlack' width='110'>ความถี่</th>"+
									/*"<th rowspan='2' class='text-center verticalCenter bg-primary borderBlack' width='200'>ของความคุ้มครอง</th>"+	*/																			
									"<th rowspan='2' class='text-center verticalCenter bg-primary borderBlack' width='150'>หมายเหตุ</th>"+
									"<th colspan='4' class='text-center verticalCenter bg-primary borderBlack' width='300'>Factor</th>"+
									"<th colspan='2' class='text-center verticalCenter bg-primary borderBlack' width='300'>อุบัติเหตุสาธารณะ</th>"+									
								"</tr>"+	
								"<tr>"+
									"<th class='text-center verticalCenter bg-primary borderBlack' width='70'>Min</th>"+
									"<th class='text-center verticalCenter bg-primary borderBlack' width='70'>Max</th>"+
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
						"<div class='col1'><input type='checkbox' id='cv_BC_0"+i+"' onclick='chk_cv_percent_cl("+i+");'></div>"+
						"<div class='col4'><label for='cv_BC_0"+i+"' class='label_notbold'>คืน CV เมื่อสิ้นปี</label></div>"+
						/*"<div class='col3'><input type='text' class='auto form-control' id='cv_percent_BC_0"+i+"' onblur='chk_diff_value_CL("+i+");' data-v-min='0.00' data-v-max='100.00' disabled></div>"+
						"<div class='col4'>% เมื่อสิ้นปีกรณีการจ่ายสินไหมไปแล้ว</div>"+
						"<div class='col3'><input type='text' class='auto form-control' id='cv_percent_diff_BC_0"+i+"' readonly></div>"+
						"<div class='col4'>%</div>"+*/
					"</div>"+
					"<div class='text-center' style='padding: 10px 0'></div>"+
					"<div class='row'>"+
						"<div class='col-md-4'>"+
							"<div class='col-md-6' style='padding-left: 0;'>"+
								"<a class='open-SelectBenefitDialog' data-toggle='modal' href='#modal_selectCoverage_CL'><button class='btn btn-primary width100' onclick=\"addBenefitRider_CL('BC_0"+i+"');\">เพิ่มรายการ</button></a>"+
							"</div>"+
							"<div class='col-md-6'>"+
								"<button class='btn btn-primary width100' onclick=\"confirmDeleteBenefitRaider_CL('BC_0"+i+"');\">ลบรายการ</button>"+
							"</div>"+
						"</div>"+
						"<div class='col-md-4'></div>"+
						"<div class='col-md-4'>"+
							"<div class='col-md-6'>"+
								"<button class='btn btn-primary width100' onclick=\"bt_benefit_CL_Confirm('BC_0"+i+"');\">บันทึก</button>"+
							"</div>"+
							"<div class='col-md-6' style='padding-right: 0'>"+
								"<button class='btn btn-primary width100' data-dismiss='modal' data-toggle='modal'"+
										"data-target='#cancelBoxCL_Benefit'>ยกเลิก</button>"+
							"</div>"+
						"</div>"+
					"</div>";
			num++;
			$("#benefitDetail_CL").append(row);
			$('.auto').autoNumeric('init');
		}
	}
	
	$("#tabBenefitRider_CL").find('li').first().addClass("active").find('a').attr("aria-expanded","true");
	//var id_showFrist = $("#tabBenefitRider_CL").find('li').first().addClass("active").find('a').attr('href');
	/*var id_showFrist = $("#tabBenefitRider_CL").find('li').first().addClass("active").find('a').attr('data-target');
	$(""+id_showFrist).addClass('active');	*/
	
	$("#BC"+numberfirstCheck+"_CL").addClass("active");
	
	setTimeout(() => {
		$("#mainBenefit_CL").css("display", "none");
		$("#benefitDetail_CL").css("display", "block");
	}, 30);
		
	}	

}

//เพิ่ม
function chk_cv_percent_cl(row){
	var chk = $("#cv_BC_0"+row).prop("checked");
	var amount = $("#cv_percent_BC_0"+row);
	var amount_diff = $("#cv_percent_diff_BC_0"+row);
	if(chk == true){
		$(amount).prop("disabled", false);
	}else{
		$(amount).prop("disabled", true);
		$(amount).val("");
		$(amount_diff).val("");
	}
} 

function chk_diff_value_CL(row){
	var value = $("#cv_percent_BC_0"+row).val();
	var value_diff = "";
	if(value != ""){
		value_diff = 100 - Number(value);
		$("#cv_percent_diff_BC_0"+row).val((value_diff).toFixed(2));
	}
}

$('#tabBenefitRider_CL').click(function (e) {
	$(".tab-pane").removeClass("active");
	$("#tbl_BenefitOpt2_CL_wrapper").hide();
});

/*open modal*/
$("#benefit_desc").keyup(function(){
	 $("#btn_OpenSaveBenefit_modal1").prop("disabled", false);
	 //$("#tbl_BenefitOpt1_CL *").prop("disabled", false);
	 $("#div_bnfOpt_CL *").prop("disabled", false);
});

$("#benefit_desc_edit").keyup(function(){
	var benefit_desc_edit = $("#benefit_desc_edit").val();
	if(benefit_desc_edit == ""){
		$("#btn_saveBenefit_modal1").prop("disabled", true);
		$('#tbl_BenefitOpt1Edit_CL *').prop("disabled", true);
	}else{
		$("#btn_saveBenefit_modal1").prop("disabled", false);
		$('#tbl_BenefitOpt1Edit_CL *').prop("disabled", false);
	}
});

$("#tbl_BenefitOpt2Sub_CL input[name='opt1sub_benefitdetail[]']").change(function(){
	$('#btn_SaveEditBenefit1').prop("disabled", false);
});

$("#tbl_BenefitOpt2SubEdit_CL input[name='opt1_benefitdetail_edit[]']").change(function(){
	$('#btn_SaveEditBenefit2').prop("disabled", false);
});

$(document).on("click", ".open-SelectBenefitDialog", function () {	
    var tabmyId = $("#tabBenefitRider_CL>li.active").attr('id');
    var myId = tabmyId.replace("tab","");   
    var lastParent = $("#tbl_"+myId).find("tbody>tr[data-parent='0']:last").attr("data-id");
    $(".modal-body #BCID_benefitCL").val( myId );   
    $(".modal-body #ParentID_benefitCL").val( lastParent ); 
    $(".modal-body #BCID_benefitCL_old").val( myId );
    
    $('#modal_selectCoverage_CL').modal('show');
    
    $("#benefit_desc").val("").prop("disabled", false);
    $(".datatbl_BenefitOpt1"+myId+"_CL").css("display","block");
    $("#tbl_BenefitOpt1"+myId+"_CL").show();
    $("#tbl_BenefitOpt1"+myId+"_CL input[type='checkbox']").prop("checked", false);
    $("#select_benefit1_CL").prop("checked", true);
    $("#tbl_BenefitOpt1"+myId+"_CL *").prop("disabled", true);
    $("#btn_OpenSaveBenefit_modal1").prop("disabled", true);
    
    $("#tbl_BenefitOpt2_CL input[type='radio']").prop("checked", false);
    //$('#tbl_BenefitOpt2Sub_CL').hide();
    //$('.datatbl_BenefitOpt2Sub_CL').css("display","none");
    $("#tbl_BenefitOpt2Sub_CL input[type='checkbox']").prop("checked", false);
    //$("#btn_SaveEditBenefit1").prop("disabled", true);
    
    var val = [], val_tbl1 = [], val_tbl2 = [];
    var a=0, a1=0, a2=0;
    $("#tbl_"+myId+" tbody>tr").each(function(){
    	a++;
    	val[a] = $(this).find("td:nth-child(3)").text();
    	
    	$("#tbl_BenefitOpt1"+myId+"_CL input[name='opt1_benefitdetail[]']").each(function(){
    		a1++;
    		val_tbl1[a1] = $(this).val().split(",");
    		if(val_tbl1[a1][0] == val[a]){
    			$(this).closest('tr').hide();
    		}
    	});
    	
    	$("#tbl_BenefitOpt2_CL input[name='opt2_benefitdetail[][]']").each(function(){
    		a2++;
    		val_tbl2[a2] = $(this).val().split(",");
    		if(val_tbl2[a2][0] == val[a]){
    			$(this).closest('tr').hide();
    		}
    	});    	
    }); 
    
    /*เคลียร์ตาราง*/
    if($("#tbl_"+myId+" tbody>tr").length <= 0){
    	$("#tbl_BenefitOpt1"+myId+"_CL input[name='opt1_benefitdetail[]']").prop("checked", false);
    	$("#tbl_BenefitOpt1"+myId+"_CL tbody>tr").closest('tr').show();
    	
    	$("#tbl_BenefitOpt2_CL input[name='opt2_benefitdetail[]']").prop("checked", false);
    	$("#tbl_BenefitOpt2_CL tbody>tr").closest('tr').show();
    	
    	$("#tbl_BenefitOpt2Sub_CL input[name='opt1sub_benefitdetail[]']").prop("checked", false);
    	$("#tbl_BenefitOpt2Sub_CL tbody>tr").closest('tr').show();
    	
    	$("#tbl_BenefitOpt1Edit_CL input[name='opt1_benefitdetail_edit[]']").prop("checked", false);
    	$("#tbl_BenefitOpt1Edit_CL tbody>tr").closest('tr').show();
    	
    	$("#tbl_BenefitOpt2Edit_CL input[name='opt2_benefitdetail_edit[]']").prop("checked", false);
    	$("#tbl_BenefitOpt2Edit_CL tbody>tr").closest('tr').show();
    	
    	$("#tbl_BenefitOpt2SubEdit_CL input[name='opt1_benefitdetail_edit[]']").prop("checked", false);
    	$("#tbl_BenefitOpt2SubEdit_CL tbody>tr").closest('tr').show();  	
    }    
});

$(document).on("click", ".open-EditBenefitDialog", function () {	
	var tabmyId = $("#tabBenefitRider_CL>li.active").attr('id');
    var myId = tabmyId.replace("tab","");  
    $(".modal-body #BCID_benefitCL_edit").val( myId );   
    
	var tbl_row = "";
	$("#div_bnfOptEdit_CL>div").remove();

	tbl_row = "<div class='datatbl_BenefitOpt1Edit"+myId+"_CL'>"+
	  "<table class='table table-bordered' id='tbl_BenefitOpt1Edit"+myId+"_CL'>"+
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
			"<button type='button' class='btn btn-primary' style='margin-right:5px;' id='btn_saveBenefit_modal1' onclick=\"saveBenefitValueEditCL_popup();\">ตกลง</button>"+						
			"<button type='button' class='btn btn-primary' data-dismiss='modal'>ยกเลิก</button>"+												
		"</div>"+
	"</div>";

	tbl_row += "<div class='datatbl_BenefitOpt2Edit"+myId+"_CL displayNone'>"+
			"<table class='table table-bordered' id='tbl_BenefitOpt2Edit"+myId+"_CL'>"+
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
	
	tbl_row += "<div class='datatbl_BenefitOpt2SubEdit"+myId+"_CL'>"+
			"<table class='table table-bordered' id='tbl_BenefitOpt2SubEdit"+myId+"_CL'>"+
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
				"<button type='button' class='btn btn-primary' style='margin-right:5px;' id='btn_SaveEditBenefit2' onclick=\"saveBenefitValueEditCL_popup();\">ตกลง</button>"+						
				"<button type='button' class='btn btn-primary' data-dismiss='modal'>ยกเลิก</button>"+												
			"</div>"+
			"</div>";
	$("#div_bnfOptEdit_CL").append(tbl_row);
	
	var dataType = $(this).attr('data-type');
    var dataID = $(this).attr('data-id');
    var dataName = $(this).attr('data-topic');
    var id_coverage = $(this).parent().parent().find('td:nth-child(3)').text();
    var text_coverage = $(this).parent().parent().find('td:nth-child(4) a').text();
    
	/*get lookup*/
	var id = $("#tabBenefitRider_CL").find('.active a').text();
	var tbl = $("#tabBenefitRider_CL").find('.active').attr("id");
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
        	add_rowBenefitRider_CL(response,tbl,"edit");
        	
        	/****************************/
        	$("#OptSub_benefitedit_CL").val(id_coverage+","+text_coverage)
 
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
        	    	$("#tbl_BenefitOpt1Edit"+myId+"_CL tbody>tr").each(function(){
        	    		j++				
        	    		val[j] = $(this).find("input[name='opt1_benefitdetail_edit[]']").val();
        	    		val_chk[j] = $(this).find("input[name='opt1_benefitdetail_edit[]']").val().split(",")
        	    		    
        	    		if(val_chk[j][0] == CodeName){
        	    		   $(this).closest('tr').show();
        	    		   $(this).find("input[name='opt1_benefitdetail_edit[]']").prop("checked", true);
        	    		   val_oldsave.push(val_chk[j][0]);
        	    		}
        	    	});
        	    		//val_oldsave.join(",");
        	    });
        	    var data_oldsave = $("#data_oldsave").val(val_oldsave);
        	    
        	   // เช็คว่าเลือกซ้ำไม่ได้
        	    var rows2 = $table.find("tr[data-group!='"+dataID+"']");
        	    rows2.each(function (index2, row2) {
        	    	var
        	        $row2 = $(row2),     
        	        id2 = $row2.attr('id'),
        	        level2 = $row2.data('level'),
        	        CodeName2 = $row2.find('td:nth-child(3)').html();      
        	        	   
        	    	//remove กลุ่มของความคุ้มครอง   
        	    		$("#tbl_BenefitOpt1Edit"+myId+"_CL tbody>tr").each(function(){
        	    			k++				
        	    		    val2[k] = $(this).find("input[name='opt1_benefitdetail_edit[]']").val();
        	    		    val_chk2[k] = $(this).find("input[name='opt1_benefitdetail_edit[]']").val().split(",")
        	    		    
        	    		    if(val_chk2[k][0] == CodeName2){	    		  
        	    		    	$(this).closest('tr').hide();
        	    		    }
        	    		});
        	    		
        	    		$("#tbl_BenefitOpt2Edit"+myId+"_CL tbody>tr").each(function(){
        	    			l++				
        	    		    val3[l] = $(this).find("input[name='opt2_benefitdetail_edit[]']").val();
        	    		    val_chk3[l] = $(this).find("input[name='opt2_benefitdetail_edit[]']").val().split(",")
        	    		    
        	    		    if(val_chk3[l][0] == CodeName2){	    		  
        	    		    	$(this).closest('tr').hide();
        	    		    }
        	    		});
        	    		
        	    		$("#tbl_BenefitOpt2SubEdit"+myId+"_CL tbody>tr").each(function(){
        	    			m++				
        	    		    val4[m] = $(this).find("input[name='opt1_benefitdetail_edit[]']").val();
        	    		    val_chk4[m] = $(this).find("input[name='opt1_benefitdetail_edit[]']").val().split(",")
        	    		    
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
        	    		$("#tbl_BenefitOpt2Edit"+myId+"_CL tbody>tr").each(function(){
        	    			j++				
        	    		    val[j] = $(this).find("input[name='opt2_benefitdetail_edit[]']").val();
        	    		    val_chk[j] = $(this).find("input[name='opt2_benefitdetail_edit[]']").val().split(",")
        	    		    val_row[j] = $(this);
        	    		    
        	    		    if(val_chk[j][0] == CodeName){	    		    		    		    	
        	    		    	$(this).closest('tr').show();
        	 	    		    $(this).find("input[name='opt2_benefitdetail_edit[]']").prop("checked", true);	    	    		    	
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
        	    		
        	    		// เพิ่มข้อมูลลงในตาราง จากที่กด Edit
        	    		/*var rowEdit = "<tr>"+
    					"<td class='text-center'><input type='radio' id='opt2_benefitdetail0_edit' name='opt2_benefitdetail_edit[]' onclick='displayBenefitValueOptionEditCL_popup(this.value);' class='chk_rd' value='"+id_coverage+","+text_coverage+"' checked></td>"+
    					"<td class='text-center'>"+id_coverage+"</td>"+
    					"<td class='text-left'>"+text_coverage+"</td>"+									
    				"</tr>";
    				
        	    		$("#tbl_BenefitOpt2Edit_CL").append(rowEdit);*/
        	    });
        				
        		var rows_sub = $table.find("tr[data-group='"+dataID+"']");
        		rows_sub.each(function (index_sub, row_sub) {
        	    	var
        	        $row_sub = $(row_sub),     
        	        id_sub = $row_sub.attr('id'),
        	        CodeNameSub = $row_sub.find('td:nth-child(3)').html(),
        	        CodeDescSub = $row_sub.find('td:nth-child(4)').html();        
        	        
        	    	//edit กลุ่มของความคุ้มครอง    	
        	    		$("#tbl_BenefitOpt2SubEdit"+myId+"_CL tbody>tr").each(function(){
        	    			jj++				
        	    		    val_sub[j] = $(this).find("input[name='opt1_benefitdetail_edit[]']").val();
        	    		    val_chk_sub[j] = $(this).find("input[name='opt1_benefitdetail_edit[]']").val().split(",")
        	    		    
        	    		    if(val_chk_sub[j][0] == CodeNameSub){
        	    		    	$(this).closest('tr').show();
        	    		    	$(this).find("input[name='opt1_benefitdetail_edit[]']").prop("checked", true);
        	    		    	val_oldsave.push(val_chk_sub[j][0]);
        	    		    }
        	    		});			       
        	    });
        		var data_oldsave = $("#data_oldsave").val(val_oldsave);		
        		
        	}

            $(".modal-body #dataID").val( dataID ); 
            $(".modal-body #dataName").val( dataName );    
            
            $(".datatbl_BenefitOpt2SubEdit"+myId+"_CL").css("display","none");
        	$("#tbl_BenefitOpt2SubEdit"+myId+"_CL").hide();
            
            if(dataType == 1){
            	var benefit_desc_edit = $("#benefit_desc_edit").val( dataName );
            	$("#benefit_desc_edit").prop("disabled", false);
            	
            	if(benefit_desc_edit == ""){
            		$("#tbl_BenefitOpt1Edit"+myId+"_CL *").prop("disabled", true);
            	}else{
            		$("#tbl_BenefitOpt1Edit"+myId+"_CL *").prop("disabled", false);
            	}
            	
            	$(".datatbl_BenefitOpt1Edit"+myId+"_CL").css("display","block");
            	$("#tbl_BenefitOpt1Edit"+myId+"_CL").show();
            	$("#select_benefit1_CL_edit").prop("checked", true);
            	
            	$(".datatbl_BenefitOpt2Edit"+myId+"_CL").css("display","none");
             	$("#tbl_BenefitOpt2Edit"+myId+"_CL").hide();    	
             	$("#tbl_BenefitOpt2Edit"+myId+"_CL input[name='opt2_benefitdetail_edit[]']").prop("checked", false);
             	
             	$("#btn_saveBenefit_modal1").prop("disabled", false);
            	
            }else if(dataType == 2){    	    	
        	    $("#select_benefit2_CL_edit").prop("checked", true);
        	    $(".datatbl_BenefitOpt2Edit"+myId+"_CL").css("display","block");
            	$("#tbl_BenefitOpt2Edit"+myId+"_CL").show();	
        	    
        	    $("#select_benefit1_CL_edit").prop("checked", false);
        	    $("#benefit_desc_edit").val("");
        	    $("#benefit_desc_edit").prop("disabled", true);
        	    $(".datatbl_BenefitOpt1Edit"+myId+"_CL").css("display","none");
            	$("#tbl_BenefitOpt1Edit"+myId+"_CL").hide();
            	
            	$("#btn_SaveEditBenefit2").prop("disabled", false);
            	
            /*	 $("#select_benefit2_CL_edit").prop("checked", true);
          	    $('.datatbl_BenefitOpt2SubEdit_CL').css("display","block");
              	$('#tbl_BenefitOpt2SubEdit_CL').show();	
              	
          	    $("#select_benefit1_CL_edit").prop("checked", false);
          	    $("#benefit_desc_edit").val("");
          	    $("#benefit_desc_edit").prop("disabled", true);
          	    $('.datatbl_BenefitOpt2SubEdit_CL').css("display","none");
              	$('#tbl_BenefitOpt2SubEdit_CL').hide();*/
              	
        	  }
        	
            
            $('#modal_editCoverage_CL').modal('show');     
        	//****************************//*
       	
        	
        },
        error : function(response) {	
        	console.log("get_Benefit_RiderCL error");
        }
	});
	 
});

/*ปิด modal*/
$('#modal_editCoverage_CL').on('hidden.bs.modal', function () {
	var BCID = $(".modal-body #BCID_benefitCL_edit").val();  
	$("#tbl_BenefitOpt1Edit"+BCID+"_CL input[name='opt1_benefitdetail_edit[]']").prop("checked", false);
	$("#tbl_BenefitOpt2SubEdit"+BCID+"_CL input[name='opt1_benefitdetail_edit[]']").prop("checked", false);	
})

/*เลือก option*/
function displayBenefitValueCL_popup(){	
	var select_benefit1_CL = $('#select_benefit1_CL').prop('checked');
	var select_benefit2_CL = $('#select_benefit2_CL').prop('checked');
	var select_BCID = $(".modal-body #BCID_benefitCL").val(); 
	var numrow_bnf = $("#tbl_"+select_BCID).find('tbody tr').length;
	if(select_benefit1_CL)
		{	
			$('#benefit_desc').prop('disabled', false);					
			$(".datatbl_BenefitOpt1"+select_BCID+"_CL").css("display","block");	
			$(".datatbl_BenefitOpt2"+select_BCID+"_CL").css("display","none");	
			$(".datatbl_BenefitOpt2Sub"+select_BCID+"_CL").css("display","none");
			$("#tbl_BenefitOpt1"+select_BCID+"_CL").show();
			$("#tbl_BenefitOpt2"+select_BCID+"_CL").hide();
			//$('#tbl_BenefitOpt2Sub_CL').hide();
			document.getElementById("select_benefit1_CL").value = 1;
			document.getElementById("select_benefit2_CL").value = 0;
			
			$("#tbl_BenefitOpt2"+select_BCID+"_CL input[type='radio']").prop("checked", false);
			$("#tbl_BenefitOpt2Sub"+select_BCID+"_CL input[type='checkbox']").prop("checked", false);
			
			if(numrow_bnf > 0){
				$("#tbl_"+select_BCID).find('tbody tr').each(function(){
					var select_bnf = $(this).find('td:nth-child(3)').text();
					$("#tbl_BenefitOpt2"+select_BCID+"_CL").find('tbody tr').each(function(){
						if(select_bnf == $(this).find("td:nth-child(2)").text()){
							$(this).closest('tr').hide();
						}else{
							$(this).closest('tr').show();
						}
					});
					
				});
				
				$("#tbl_"+select_BCID).find('tbody tr').each(function(){
					var select_bnf = $(this).find('td:nth-child(3)').text();
					$("#tbl_BenefitOpt2Sub"+select_BCID+"_CL").find('tbody tr').each(function(){
						if(select_bnf == $(this).find("td:nth-child(2)").text()){
							$(this).closest('tr').hide();
						}else{
							$(this).closest('tr').show();
						}
					});
					
				});
				
			}else{
				$("#tbl_BenefitOpt2"+select_BCID+"_CL").find('tbody tr').show();
				$("#tbl_BenefitOpt2Sub"+select_BCID+"_CL").find('tbody tr').show();
			}
			
			
	}else if(select_benefit2_CL){
			$("#benefit_desc").prop('disabled', true);	
			$("#benefit_desc").val("");	
			$(".datatbl_BenefitOpt2"+select_BCID+"_CL").css("display","block");	
			$(".datatbl_BenefitOpt1"+select_BCID+"_CL").css("display","none");	
			$(".datatbl_BenefitOpt2Sub"+select_BCID+"_CL").css("display","none");
			$("#tbl_BenefitOpt2"+select_BCID+"_CL").show();
			$("#tbl_BenefitOpt1"+select_BCID+"_CL").hide();	
			//$('#tbl_BenefitOpt2Sub_CL').hide();	
			$("#tbl_BenefitOpt2"+select_BCID+"_CL_wrapper").show();
			document.getElementById("select_benefit1_CL").value = 0;
			document.getElementById("select_benefit2_CL").value = 1;
			
			$("#tbl_BenefitOpt1"+select_BCID+"_CL input:checkbox").prop("checked", false);
	}
}
/*เลือกความคุ้มครอง*/
function displayBenefitValueOptionCL_popup(value){	
	//var select_benefit1_CL = $('#select_benefit1_CL').prop('checked');	
	var Optsub_BCID = $(".modal-body #OptSub_benefitCL").val(value); 
	var select_BCID = $(".modal-body #BCID_benefitCL").val();
	
			$(".datatbl_BenefitOpt2Sub"+select_BCID+"_CL").css("display","block");
			$(".datatbl_BenefitOpt2"+select_BCID+"_CL").css("display","none");	
			/*$('.datatbl_BenefitOpt2Sub_CL').css("display","block");	
			$('.datatbl_BenefitOpt2_CL').css("display","none");	
			$('#tbl_BenefitOpt2Sub_CL').show();
			$('#tbl_BenefitOpt2_CL').hide();	*/
			
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
			
			$("#tbl_BenefitOpt2"+select_BCID+"_CL tbody>tr").each(function(){
				n++;
				val_opt_tbl2[n] = $(this).find("input[name='opt2_benefitdetail[]']").val();
				val_opt_code_tbl2[n] = $(this).find("input[name='opt2_benefitdetail[]']").val().split(",");
				if(val_opt_code_tbl2[n][0] == val_input[0]){
					$(this).closest('tr').hide();
				}
			});
			
			/*remove list ในหมวดความคุ้มครอง ตารางย่อย*/
			var val_opt_tbl3 = [];
			var val_opt_code_tbl3 = []
			var mm=0;
			
			$("#tbl_BenefitOpt2Sub"+select_BCID+"_CL tbody>tr").each(function(){
				m++;
				val_opt_tbl3[mm] = $(this).find("input[name='opt1sub_benefitdetail[]']").val();
				val_opt_code_tbl3[mm] = $(this).find("input[name='opt1sub_benefitdetail[]']").val().split(",");
				if(val_opt_code_tbl3[mm][0] == val_input[0]){
					$(this).closest('tr').hide();
				}
			});
			
			if($("#tbl_BenefitOpt2Sub"+select_BCID+"_CL tbody>tr").length == 1){
				
				row_empty = "<tr id='row_empty'>"+
						"<td colspan='3' class='text-center'>ไม่มีข้อมูล รายการความคุ้มครองย่อย</td>"+
					"</tr>";
				$("#tbl_BenefitOpt2Sub_CL tbody").append(row_empty);
			}
			
}

/*edit modal*/
function displayBenefitValueOptionEditCL_popup(value){	
	//var select_benefit1_CL = $('#select_benefit1_CL').prop('checked');	
	var Optsub_BCID = $(".modal-body #OptSub_benefitedit_CL").val(value); 
	var BCID = $("#BCID_benefitCL_edit").val();

			$(".datatbl_BenefitOpt2SubEdit"+BCID+"_CL").css("display","block");	
			$(".datatbl_BenefitOpt2Edit"+BCID+"_CL").css("display","none");	
			$("#tbl_BenefitOpt2SubEdit"+BCID+"_CL").show();
			$("#tbl_BenefitOpt2Edit"+BCID+"_CL").hide();
	
	
	var dataID = $("#dataID").val();
	
	var i = 0, val_chk_tbl2 = [];
	var j = 0, val_chk_tbl3 = [];
	var k = 0, val_tbl = [];
	var m = 0, val_chk = [];
	$("#tbl_BenefitOpt2Edit"+BCID+"_CL input[name='opt2_benefitdetail_edit[]']:checked").each(function(){
		i++;
		val_chk_tbl2[i] = $(this).val().split(",");
		
		$("#tbl_BenefitOpt2SubEdit"+BCID+"_CL tbody>tr").each(function(){
			j++;
			val_chk_tbl3[j] = $(this).find("input[name='opt1_benefitdetail_edit[]']").val().split(",");
			if(val_chk_tbl3[j][0] == val_chk_tbl2[i][0]){
				$(this).closest('tr').hide();
			}
		});
	});
	
	$("#tbl_"+BCID+" tbody>tr").each(function(){
		k++;
		val_tbl[k] = $(this).find("td:nth-child(3)").html();
		
		$("#tbl_BenefitOpt2SubEdit"+BCID+"_CL tbody>tr").each(function(){
			m++;
			val_chk[m] = $(this).find("input[name='opt1_benefitdetail_edit[]']").val().split(",");
			if($(this).find("input[name='opt1_benefitdetail_edit[]']").prop("checked") == true){
				$(this).closest('tr').show();
			}else{
				if(val_chk[m][0] == val_tbl[k]){
					$(this).closest('tr').hide();
				}
			}
		});		
	});		
}

/*  กดเพิ่มรายการ ผลประโยชน์/ความคุ้มครอง*/
function addTableCoverage(){
	
}

/*บันทึก modal เลือกความคุ้มครอง*/
function saveBenefitValueCL_popup(type,tbl){	
	var ParentID = $("#ParentID_benefitCL").val();
	var benefit_desc = $("#benefit_desc").val();
	var BCID = $("#BCID_benefitCL").val();
	
	/*opt sub*/
	var OptSub_benefitCL = $("#OptSub_benefitCL").val();
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
	var lookup_unit = $("#lookup_unit").val();
		lookup_unit = lookup_unit.split(",");
	var lookup_frequency = $("#lookup_frequency").val();
		lookup_frequency = lookup_frequency.split(",");
	var lookup_factorunit = $("#lookup_factor_unit").val();
		lookup_factorunit = lookup_factorunit.split(",");
	var lookup_fac_unit_new = $("#lookup_factorUnit").val();
		lookup_fac_unit_new = lookup_fac_unit_new.split(",");
	var lookup_factorScope = $("#lookup_factorScope").val();
		lookup_factorScope = lookup_factorScope.split(",");
		
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
	var option_factor_new = "";
	for(i = 0 ; i < lookup_fac_unit_new.length/2 ; i++){
		var row_factor_new = "<option value='"+lookup_fac_unit_new[pass]+"'>"+lookup_fac_unit_new[text]+"</option>"
		pass = Number(parseInt(pass) + parseInt(2));
		text = Number(parseInt(text) + parseInt(2));
		option_factor_new += row_factor_new
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
	var newID_Del = "imgOKDel_benefit"+BCID+"_"+numberImgOK;
	var imgDel = BCID+"_"+numberImgOK;
	if((type == 1  && benefit_desc != "") || (type == 2) ){		
		row1 += "<tr id='tbody_benefitL_CL"+numberImgOK+"' data-id='"+numberImgOK+"' data-parent='0' data-level='1'>"+
				"<td id="+newID_Del+" class='text-center borderBlack vertical-middle'"+
				"onclick=\"imgCheckboxDel_benefit('"+imgDel+"');\""+
				"style='vertical-align: middle;'><i "+
				"class='glyphicon glyphicon-edit'></i></td>"+   	
				"<td class='text-center borderBlack vertical-middle rider_mainTopic'><span class='spanBenefit_CL'>"+numberImgOK+"</span></td>";
		if(type == 1){
		row1 += "<td class='text-center borderBlack vertical-middle rider_mainTopic'>Group</td>"+
		   		"<td class='borderBlack vertical-middle rider_mainTopic'><a class='open-EditBenefitDialog' data-toggle='modal' href='#modal_editCoverage_CL'  data-id='"+numberImgOK+"' data-topic='"+benefit_desc+"' data-type='1'>"+benefit_desc+"</a></td>";	
		}else if(type == 2){
			row1 += "<td class='text-center borderBlack vertical-middle rider_mainTopic'>"+OptSub_BCID+"</td>"+
	   		"<td class='borderBlack vertical-middle rider_mainTopic'><a class='open-EditBenefitDialog' data-toggle='modal' href='#modal_editCoverage_CL'  data-id='"+numberImgOK+"' data-topic='"+OptSub_name+"' data-type='2' data-code='"+OptSub_BCID+"'>"+OptSub_name+"</a></td>";	
		}
		
		row1 += "<td class='borderBlack vertical-middle'>"+
		   "<input name='benefit_amount_"+BCID+"[]' id='benefit_amount_"+BCID+"_"+numberImgOK+"' type='text' class='auto form-control margin-padding0 text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999.99'>	"+											
		   "</td>"+
		   "<td width='100px' class='borderBlack vertical-middle'>"+
		   "<select class='form-control width-initial lookup-unit' style='margin: 0;width: 100%;' id='benefit_unit"+numberImgOK+"'>"+
			   "<option value='NONE' selected>None</option>"+option_unit+
		   "</select>"+												
		   "</td>"+
		   "<td width='100px' class='borderBlack vertical-middle'>"+
		   "<select class='form-control width-initial lookup-scope' style='margin: 0;width: 100%;' id='benefit_fund"+numberImgOK+"'>"+
			   "<option value='NONE'>None</option>"+option_fac_unit+
		   "</select>"+												
		   "</td>"+
		   "<td width='100px' class='borderBlack vertical-middle'>"+
		   "<select class='form-control width-initial lookup-frequency' style='margin: 0;width: 100%;' id='benefit_fq"+numberImgOK+"'>"+
			   "<option value='NONE' selected>None</option>"+option_frequency+
		   "</select>"+
		   "</td>"+
		   /*"<td width='100px' class='borderBlack text-center vertical-middle'><div class='input-group col-xs-12'><div class='list_coverage'>None</div><a class='open-SelectCoverageDialog' data-toggle='modal' data-id='"+numberImgOK+"' href='#modal_TableCoverage_CL'><button class='btn btn-default btn-primary float-right' type='button' id='btn_benefit"+BCID+"_"+numberImgOK+"'>...</button></a></div></td>"+*/
		   "<td width='100px' class='borderBlack vertical-middle'><textarea class='form-control' id='benefit_remark"+numberImgOK+"'></textarea></td>"+
		   "<td width='100px' class='borderBlack vertical-middle'>"+
		   "<input name='benefit_factor_min"+numberImgOK+"' id='benefit_factor_min"+numberImgOK+"' type='text' class='auto form-control margin-padding0 text-center width40px' value='' data-v-min='0.00' data-v-max='999.99'>"+		   
		   "</td>"+
		   "<td width='100px' class='borderBlack vertical-middle'>"+
		   "<input name='benefit_factor_max"+numberImgOK+"' id='benefit_factor_max"+numberImgOK+"' type='text' class='auto form-control margin-padding0 text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999.99'>"+
		   "</td>"+
		   "<td width='100px' class='borderBlack vertical-middle'>"+
		   "<select class='form-control width-initsial lookup-factor-unit' style='margin: 0;width: 100%;' id='benefit_factor_unit"+numberImgOK+"'>"+
			   "<option value='NONE' selected>None</option>"+option_factor_new+
		   "</select>"+
		   "</td>"+
		   "<td width='100px' class='borderBlack vertical-middle'>"+
		   "<select class='form-control width-initial lookup-factor-scope' style='margin: 0;width: 100%;' id='benefit_factor_to"+numberImgOK+"'>"+
			   "<option value='NONE' selected>None</option>"+option_scope+	
		   "</select>"+
		   "</td>"+
		   "<td width='100px' class='borderBlack vertical-middle'>"+
		   "<input name='benefit_acc_amount"+numberImgOK+"' id='benefit_acc_amount"+numberImgOK+"' type='text' class='auto form-control margin-padding0 text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999.99'>"+		   
		   "</td>"+
		   "<td width='100px' class='borderBlack vertical-middle'>"+
		   "<select class='form-control width-initial lookup-factor-unit' style='margin: 0;width: 100%;' id='benefit_acc_unit"+numberImgOK+"'>"+
			   "<option value='NONE' selected>None</option>"+option_factor_new+
		   "</select>"+
		   "</td>"+
		   "</tr>";
		
	}
	
	var checkbox_len = "";
	if(type == 1){
		checkbox_len = $("#tbl_BenefitOpt1"+tbl+"_CL input[name='opt1_benefitdetail[]']:checked").length;
	}else if(type == 2){
		checkbox_len = $("#tbl_BenefitOpt2Sub"+tbl+"_CL input[name='opt1sub_benefitdetail[]']:checked").length;
	}
	
	var numberImgOK_Sub = numberImgOK;
		
	/*var table = document.getElementById("tbl_BenefitOpt1_CL");
	var spans = table.getElementsByClassName("spanBenefit_CL");*/
	var val = [];
	var val_chk = [];
	var i = 0;
	if(checkbox_len > 0){
		$("#btn_SaveEditBenefit1").prop("disabled", false);
		
		$('.chk:checked').each(function(){
		i++
		
		numberImgOK_Sub = numberImgOK+"_"+i;
				
	    val[i] = $(this).val();
	    val_chk[i] = $(this).val().split(",")	      
		
		row1 += "<tr id='tbody_benefitL_CL"+numberImgOK+"_"+i+"' data-id='"+numberImgOK+"_"+i+"' data-parent='1' data-level='2' data-group='"+numberImgOK+"'>"+
		   "<td class='text-center borderBlack'></td>"+
		   "<td class='text-center borderBlack vertical-middle'>"+numberImgOK+"."+i+"</td>"+
		   "<td class='text-center borderBlack vertical-middle'>"+val_chk[i][0]+"</td>"+
		   "<td class='borderBlack vertical-middle'>"+val_chk[i][1]+"</td>";
		
		row1 += "<td class='borderBlack vertical-middle'>"+
		   "<input name='benefit_amount_"+BCID+"[]' id='benefit_amount_"+BCID+"_"+numberImgOK_Sub+"' type='text' class='auto form-control margin-padding0 text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999.99'>	"+											
		   "</td>"+
		   "<td width='100px' class='borderBlack vertical-middle'>"+
		   "<select class='form-control width-initial lookup-unit' style='margin: 0;width: 100%;' id='benefit_unit"+numberImgOK_Sub+"'>"+
			   "<option value='NONE' selected>None</option>"+option_unit+
		   "</select>"+												
		   "</td>"+
		   "<td width='100px' class='borderBlack vertical-middle'>"+
		   "<select class='form-control width-initial lookup-scope' style='margin: 0;width: 100%;' id='benefit_fund"+numberImgOK_Sub+"'>"+
		   "<option value='NONE' selected>None</option>"+option_fac_unit+
		   "</select>"+												
		   "</td>"+
		   "<td width='100px' class='borderBlack vertical-middle'>"+
		   "<select class='form-control width-initial lookup-frequency' style='margin: 0;width: 100%;' id='benefit_fq"+numberImgOK_Sub+"'>"+
			   "<option value='NONE' selected>None</option>"+option_frequency+
		   "</select>"+
		   "</td>"+
		   /*"<td width='100px' class='borderBlack text-center vertical-middle'><div class='input-group col-xs-12'><div class='list_coverage'>None</div><a class='open-SelectCoverageDialog' data-toggle='modal' data-id='"+numberImgOK+"_"+i+"' href='#modal_TableCoverage_CL'><button class='btn btn-default btn-primary float-right' type='button' id='btn_benefit"+BCID+"_"+numberImgOK_Sub+"'>...</button></a></div></td>"+*/
		   "<td width='100px' class='borderBlack vertical-middle'><textarea class='form-control' id='benefit_remark"+numberImgOK_Sub+"'></textarea></td>"+
		   "<td width='100px' class='borderBlack vertical-middle'>"+
		   "<input name='benefit_factor_min"+numberImgOK_Sub+"' id='benefit_factor_min"+numberImgOK_Sub+"' type='text' class='auto form-control margin-padding0 text-center width40px' value='' data-v-min='0.00' data-v-max='999.99'>"+		   
		   "</td>"+
		   "<td width='100px' class='borderBlack vertical-middle'>"+
		   "<input name='benefit_factor_max"+numberImgOK_Sub+"' id='benefit_factor_max"+numberImgOK_Sub+"' type='text' class='auto form-control margin-padding0 text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999.99'>"+
		   "</td>"+
		   "<td width='100px' class='borderBlack vertical-middle'>"+
		   "<select class='form-control width-initsial lookup-factor-unit' style='margin: 0;width: 100%;' id='benefit_factor_unit"+numberImgOK_Sub+"'>"+
			   "<option value='NONE' selected>None</option>"+option_factor_new+
		   "</select>"+
		   "</td>"+
		   "<td width='100px' class='borderBlack vertical-middle'>"+
		   "<select class='form-control width-initial lookup-factor-scope' style='margin: 0;width: 100%;' id='benefit_factor_to"+numberImgOK_Sub+"'>"+
		   "<option value='NONE' selected>None</option>"+option_scope+	
		   "</select>"+
		   "</td>"+
		   "<td width='100px' class='borderBlack vertical-middle'>"+
		   "<input name='benefit_acc_amount"+numberImgOK_Sub+"' id='benefit_acc_amount"+numberImgOK_Sub+"' type='text' class='auto form-control margin-padding0 text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999.99'>"+		   
		   "</td>"+
		   "<td width='100px' class='borderBlack vertical-middle'>"+
		   "<select class='form-control width-initial lookup-factor-unit' style='margin: 0;width: 100%;' id='benefit_acc_unit"+numberImgOK_Sub+"'>"+
			   "<option value='NONE' selected>None</option>"+option_factor_new+
		   "</select>"+
		   "</td>"+
		   "</tr>";
	
		//$(this).closest('tr').hide();	
		
		/*remove list ในกลุ่มความคุ้มครอง*/
		var val_opt_tbl1 = [];
		var val_opt_code_tbl1 = []
		var m=0;
		
		$("#tbl_BenefitOpt1"+tbl+"_CL tbody>tr").each(function(){
			m++;
			val_opt_tbl1[m] = $(this).find("input[name='opt1_benefitdetail[]']").val();
			val_opt_code_tbl1[m] = $(this).find("input[name='opt1_benefitdetail[]']").val().split(",");
			if(val_opt_code_tbl1[m][0] == val_chk[i][0]){
				$(this).closest('tr').hide();
			}
		});
		
		/*remove list ในความคุ้มครอง*/
		var val_opt_tbl2 = [];
		var val_opt_code_tbl2 = []
		var n=0;
		
		$("#tbl_BenefitOpt2"+tbl+"_CL tbody>tr").each(function(){
			n++;
			val_opt_tbl2[n] = $(this).find("input[name='opt2_benefitdetail[]']").val();
			val_opt_code_tbl2[n] = $(this).find("input[name='opt2_benefitdetail[]']").val().split(",");
			if(val_opt_code_tbl2[n][0] == val_chk[i][0]){
				$(this).closest('tr').hide();
			}
		});
		
		/*remove list ในหมวดความคุ้มครอง ตารางย่อย*/
		var val_opt_tbl3 = [];
		var val_opt_code_tbl3 = []
		var mm=0;
		
		$("#tbl_BenefitOpt2Sub"+tbl+"_CL tbody>tr").each(function(){
			m++;
			val_opt_tbl3[mm] = $(this).find("input[name='opt1sub_benefitdetail[]']").val();
			val_opt_code_tbl3[mm] = $(this).find("input[name='opt1sub_benefitdetail[]']").val().split(",");
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
	
	if(type == 1){
		if(benefit_desc != ""){
			$("#modal_selectCoverage_CL").modal("hide");
		}else{		 
			 message = "กรุณาระบุข้อมูลให้ครบ";
			 alertError(message);		
		}
	}else if(type == 2){
		//if(checkbox_len > 0){
			$("#modal_selectCoverage_CL").modal("hide");
		//}
		$("#tbl_BenefitOpt1"+tbl+"_CL tbody>tr").remove();
	}
	

}

/*edit เลือก option*/
function displayBenefitValueEditCL_popup(){	
	var select_benefit1_CL = $('#select_benefit1_CL_edit').prop('checked');
	var select_benefit2_CL = $('#select_benefit2_CL_edit').prop('checked');
	var select_BCID = $(".modal-body #BCID_benefitCL_edit").val(); 
	var val_tbl = [], val_chk = [];
	var a1=0, a2=0;
	
	if($("#tbl_BenefitOpt2Edit"+select_BCID+"_CL input[name='opt2_benefitdetail_edit[]']:checked").length > 0){
		var val_chk_edit = $("#tbl_BenefitOpt2Edit"+select_BCID+"_CL input[name='opt2_benefitdetail_edit[]']:checked").val();
		val_chk_edit = val_chk_edit.split(",");
		var optSelect = $("#optSelect").val(val_chk_edit[0]);
		$("#tbl_"+select_BCID+" tbody>tr").each(function(){
			a1++;
			val_tbl[a1] = $(this).find("td:nth-child(3)").html();
			
			$("#tbl_BenefitOpt1Edit"+select_BCID+"_CL tbody>tr").each(function(){
				a2++;
				val_chk[a2] = $(this).find("input[name='opt1_benefitdetail_edit[]']").val().split(",");
							
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
	
	if(select_benefit1_CL)
		{	
			$('#benefit_desc_edit').prop('disabled', false);					
			$(".datatbl_BenefitOpt1Edit"+select_BCID+"_CL").css("display","block");	
			$(".datatbl_BenefitOpt2Edit"+select_BCID+"_CL").css("display","none");	
			$(".datatbl_BenefitOpt2SubEdit"+select_BCID+"_CL").css("display","none");
			$("#tbl_BenefitOpt1Edit"+select_BCID+"_CL").show();
			$("#tbl_BenefitOpt2Edit"+select_BCID+"_CL").hide();
			$("#tbl_BenefitOpt2SubEdit"+select_BCID+"_CL").hide();
			document.getElementById("select_benefit1_CL_edit").value = 1;
			document.getElementById("select_benefit2_CL_edit").value = 0;
			
			//$("#tbl_BenefitOpt2Edit_CL input[type='radio']").prop("checked", false);
			$("#tbl_BenefitOpt1Edit"+select_BCID+"_CL *").prop("disabled", false);
			$("#btn_saveBenefit_modal1").prop("disabled", false);	
			
			$("#tbl_BenefitOpt2Edit"+select_BCID+"_CL input[type='radio']").each(function(){
				var value = $(this).val().split(",");
				if(value[0] == $(optSelect).val()){
					$(this).prop("checked", true);
				}else{
					$(this).prop("checked", false);
				}
			});
			
	}else if(select_benefit2_CL){
			$('#benefit_desc_edit').prop('disabled', true);		
			$(".datatbl_BenefitOpt2Edit"+select_BCID+"_CL").css("display","block");	
			$(".datatbl_BenefitOpt1Edit"+select_BCID+"_CL").css("display","none");	
			$(".datatbl_BenefitOpt2SubEdit"+select_BCID+"_CL").css("display","none");
			$("#tbl_BenefitOpt2Edit"+select_BCID+"_CL").show();
			$("#tbl_BenefitOpt1Edit"+select_BCID+"_CL").hide();	
			$("#tbl_BenefitOpt2SubEdit"+select_BCID+"_CL").hide();	
			document.getElementById("select_benefit1_CL_edit").value = 0;
			document.getElementById("select_benefit2_CL_edit").value = 1;
			
			$("#btn_SaveEditBenefit2").prop("disabled", false);
	}
		
}

/*edit เลือกความคุ้มครอง*/
function saveBenefitValueEditCL_popup(){	
	
	var select_benefit1_CL = $('#select_benefit1_CL_edit').prop('checked');
	var select_benefit2_CL = $('#select_benefit2_CL_edit').prop('checked');
	var BCID = $("#BCID_benefitCL_edit").val();
	/*edit กลุ่มของความคุ้มครอง*/
	var tbl_modal = "";
	if(select_benefit1_CL){
		tbl_modal = "tbl_BenefitOpt1Edit"+BCID+"_CL";
		type = 1;
	}else if(select_benefit2_CL){
		tbl_modal = "tbl_BenefitOpt2SubEdit"+BCID+"_CL";
		type = 2;
	}
	
	var ParentID = $("#ParentID_benefitCL_edit").val();
	var benefit_desc = $("#benefit_desc_edit").val();
	
	var dataID = $("#dataID").val();
	/*opt sub*/
	var OptSub_benefitCL = $("#OptSub_benefitedit_CL").val();
		OptSub_benefitCL = OptSub_benefitCL.split(",")
	var OptSub_BCID = OptSub_benefitCL[0];	
	var OptSub_name = OptSub_benefitCL[1];	
	
	if((type == 1  && benefit_desc != "") || type == 2){	
		if(type == 1){
			$("#tbl_"+BCID+">tbody>tr[data-id="+dataID+"]>td:nth-child(3)").html("Group");
			$("#tbl_"+BCID+">tbody>tr[data-id="+dataID+"]>td:nth-child(4)").html("<a class='open-EditBenefitDialog' data-toggle='modal' href='#modal_editCoverage_CL'  data-id='"+dataID+"' data-topic='"+benefit_desc+"' data-type='1'>"+benefit_desc+"</a>");
		}else if(type ==2){
			$("#tbl_"+BCID+">tbody>tr[data-id="+dataID+"]>td:nth-child(3)").html(OptSub_BCID);
			$("#tbl_"+BCID+">tbody>tr[data-id="+dataID+"]>td:nth-child(4)").html("<a class='open-EditBenefitDialog' data-toggle='modal' href='#modal_editCoverage_CL'  data-id='"+dataID+"' data-topic='"+OptSub_name+"' data-type='2' data-code='"+OptSub_BCID+"'>"+OptSub_name+"</a>");
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
    	var value_chk_old = $("#data_oldsave").val();
	   	
    	var value_check_diff = [];
    	var value = [];
	 	 	value = value_chk_old.split(",");
	 	
	    for(var i=0; i<value.length; i++){		 
	    	value_check_diff.push(value[i]);	 
	 	}
	    
	    var save_diff = [];
	    var save_diff_data = "";
	    var save_diff_split = "";
    	$("#"+tbl_modal+" input[name='opt1_benefitdetail_edit[]']:checked").each(function(){   			
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
	    		    
	    		    new_row += "<tr id='tbody_benefitL_CL"+dataID+"_"+j+"' data-id='"+dataID+"_"+j+"' data-parent='1' data-level='2' data-group='"+dataID+"'>"+
 				   "<td class='text-center borderBlack'></td>"+
 				   "<td class='text-center borderBlack vertical-middle'><span class='spanBenefitsub_CL'>"+rowsNumber+"</span>."+j+"</td>"+
 				   "<td class='text-center borderBlack vertical-middle'>"+val_chk[j][0]+"</td>"+
 				   "<td class='borderBlack vertical-middle'>"+val_chk[j][1]+"</td>";
	    			
	    		    new_row += "<td class='borderBlack vertical-middle'>"+
	    			   "<input name='benefit_amount_"+BCID+"[]' id='benefit_amount_"+BCID+"_"+numberImgOK_Sub+"' type='text' class='auto form-control margin-padding0 text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999.99'>	"+											
	    			   "</td>"+
	    			   "<td width='100px' class='borderBlack vertical-middle'>"+
	    			   "<select class='form-control width-initial lookup-unit' style='margin: 0;width: 100%;' id='benefit_unit"+numberImgOK_Sub+"'>"+
	    				   "<option value='NONE' selected>None</option>"+
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
	    			   /*"<td width='100px' class='borderBlack text-center vertical-middle'><div class='input-group col-xs-12'><div class='list_coverage'>None</div><a class='open-SelectCoverageDialog' data-toggle='modal' data-id='"+dataID+"_"+j+"' href='#modal_TableCoverage_CL'><button class='btn btn-default btn-primary float-right' type='button' id='btn_benefit"+BCID+"_"+numberImgOK_Sub+"'>...</button></a></div></td>"+*/
	    			   "<td width='100px' class='borderBlack vertical-middle'><textarea class='form-control' id='benefit_remark"+numberImgOK_Sub+"'></textarea></td>"+
	    			   "<td width='100px' class='borderBlack vertical-middle'>"+
	    			   "<input name='benefit_factor_min"+numberImgOK_Sub+"' id='benefit_factor_min"+numberImgOK_Sub+"' type='text' class='auto form-control margin-padding0 text-center width40px' value='' data-v-min='0.00' data-v-max='999.99'>"+		   
	    			   "</td>"+
	    			   "<td width='100px' class='borderBlack vertical-middle'>"+
	    			   "<input name='benefit_factor_max"+numberImgOK_Sub+"' id='benefit_factor_max"+numberImgOK_Sub+"' type='text' class='auto form-control margin-padding0 text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999.99'>"+
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
	    			   "<input name='benefit_acc_amount"+numberImgOK_Sub+"' id='benefit_acc_amount"+numberImgOK_Sub+"' type='text' class='auto form-control margin-padding0 text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999.99'>"+		   
	    			   "</td>"+
	    			   "<td width='100px' class='borderBlack vertical-middle'>"+
	    			   "<select class='form-control width-initial lookup-factor-unit' style='margin: 0;width: 100%;' id='benefit_acc_unit"+numberImgOK_Sub+"'>"+
	    				   "<option value='NONE' selected>None</option>"+
	    			   "</select>"+
	    			   "</td>"+
	    			   "</tr>";
	
   		    		}
   		    	}
   		    }
    	});	
    	 
    	 var value_chk_new_array = value_chk_new.join(",");
    	 
    	var count_sub_modal = $("#"+tbl_modal+" input[name='opt1_benefitdetail_edit[]']:checked").length;
    	
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
	        				$("#tbl_BenefitOpt1Edit"+BCID+"_CL input[name='opt1_benefitdetail_edit[]']").each(function(){
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
	        				$("#tbl_BenefitOpt2SubEdit"+BCID+"_CL input[name='opt1_benefitdetail_edit[]']").each(function(){
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
    
    /*lookup*/
	$("#"+tbl_modal+" input[name='opt1_benefitdetail_edit[]']:checked").each(function(){   			
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

		            	var lookup_unit = $("#lookup_unit").val();
		            		lookup_unit = lookup_unit.split(",");
		            	var lookup_frequency = $("#lookup_frequency").val();
		            		lookup_frequency = lookup_frequency.split(",");
		            	var lookup_factor_unit = $("#lookup_factor_unit").val();
		            		lookup_factor_unit = lookup_factor_unit.split(",");
		            	var lookup_factorUnit = $("#lookup_factorUnit").val();
							lookup_factorUnit = lookup_factorUnit.split(",");
						var lookup_factorScope = $("#lookup_factorScope").val();
							lookup_factorScope = lookup_factorScope.split(",");
		            		
		            		// unit
		            		var pass = 0;
		            		var text = 1;
		            		for(i = 0 ; i < lookup_unit.length/2 ; i++){
		            			var row_unit = "<option value='"+lookup_unit[pass]+"'>"+lookup_unit[text]+"</option>"
		            			pass = Number(parseInt(pass) + parseInt(2));
		            			text = Number(parseInt(text) + parseInt(2))
		            			$("#benefit_unit"+numberImgOK_Sub).append(row_unit);
		            		//	$("#benefit_acc_unit"+numberImgOK_Sub).append(row_unit);
		            		}
		            		
		            		// frequency
		            		var pass = 0;
		            		var text = 1;
		            		for(i = 0 ; i < lookup_frequency.length/2 ; i++){
		            			var row_frequency = "<option value='"+lookup_frequency[pass]+"'>"+lookup_frequency[text]+"</option>"
		            			pass = Number(parseInt(pass) + parseInt(2));
		            			text = Number(parseInt(text) + parseInt(2))
		            			
		            			$("#benefit_fq"+numberImgOK_Sub).append(row_frequency);
		            			//$("#benefit_factor_to"+numberImgOK_Sub).append(row_frequency);
		            		}
		            		
		            		// factor unit scope
		            		var pass = 0;
		            		var text = 1;
		            		for(i = 0 ; i < lookup_factor_unit.length/2 ; i++){
		            			var row_factor_unit = "<option value='"+lookup_factor_unit[pass]+"'>"+lookup_factor_unit[text]+"</option>"
		            			pass = Number(parseInt(pass) + parseInt(2));
		            			text = Number(parseInt(text) + parseInt(2))
		            			$("#benefit_fund"+numberImgOK_Sub).append(row_factor_unit);
		            			//$("#benefit_factor_unit"+numberImgOK_Sub).append(row_factor_unit);
		            		}
		            		
		            		// factor Unit
							var pass = 0;
							var text = 1;
							for(a = 0 ; a < lookup_factorUnit.length/2 ; a++){
								var row_factorUnit = "<option value='"+lookup_factorUnit[pass]+"'>"+lookup_factorUnit[text]+"</option>"
								pass = Number(parseInt(pass) + parseInt(2));
								text = Number(parseInt(text) + parseInt(2))
								$("#benefit_factor_unit"+numberImgOK_Sub).append(row_factorUnit);
								$("#benefit_acc_unit"+numberImgOK_Sub).append(row_factorUnit);
							}
							
							// factor Scope
							var pass = 0;
							var text = 1;
							for(a = 0 ; a < lookup_factorScope.length/2 ; a++){
								var row_factorScope = "<option value='"+lookup_factorScope[pass]+"'>"+lookup_factorScope[text]+"</option>"
								pass = Number(parseInt(pass) + parseInt(2));
								text = Number(parseInt(text) + parseInt(2))
								$("#benefit_factor_to"+numberImgOK_Sub).append(row_factorScope);
							}
		            		
		    		}
		    	}
		}
	});
	
	/*re-id*/	
	var b = 0;
	$("#tbl_"+BCID+">tbody>tr[data-group='"+dataID+"']").each(function(){
		b++;
		$(this).find('td:nth-child(2)').text(dataID+"."+b);
		$(this).attr("id","tbody_benefitL_CL"+dataID+"_"+b);
		$(this).attr("data-id",dataID+"_"+b);	
		$(this).attr("data-group",dataID);
		$(this).find('input[type=text]:nth-child(1)').attr("id","benefit_amount_"+BCID+"_"+dataID+"_"+b);
		$(this).find('td:nth-child(6) select').attr("id","benefit_unit"+dataID+"_"+b);
		$(this).find('td:nth-child(7) select').attr("id","benefit_fund"+dataID+"_"+b);
		$(this).find('td:nth-child(8) select').attr("id","benefit_fq"+dataID+"_"+b);
		$(this).find('a.open-SelectCoverageDialog').attr("data-id",dataID+"_"+b);
		$(this).find('td:nth-child(9) button').attr("id","btn_benefit"+BCID+"_"+dataID+"_"+b);
		$(this).find('td:nth-child(10) textarea').attr("id","benefit_remark"+dataID+"_"+b)
		$(this).find('td:nth-child(11) input:text').attr("id","benefit_factor_min"+dataID+"_"+b);
		$(this).find('td:nth-child(11) input:text').attr("name","benefit_factor_min"+dataID+"_"+b);
		$(this).find('td:nth-child(13) select').attr("id","benefit_factor_select"+dataID+"_"+b);
		$(this).find('td:nth-child(12) input:text').attr("id","benefit_factor_amount"+dataID+"_"+b);
		$(this).find('td:nth-child(12) input:text').attr("name","benefit_factor_amount"+dataID+"_"+b);
		$(this).find('td:nth-child(13) select').attr("id","benefit_factor_unit"+dataID+"_"+b);
		$(this).find('td:nth-child(14) select').attr("id","benefit_factor_to"+dataID+"_"+b);
		$(this).find('td:nth-child(15) input:text').attr("id","benefit_acc_amount"+dataID+"_"+b);
		$(this).find('td:nth-child(15) input:text').attr("name","benefit_acc_amount"+dataID+"_"+b);
		$(this).find('td:nth-child(16) select').attr("id","benefit_acc_unit"+dataID+"_"+b);
	});
	
	$("#modal_editCoverage_CL").modal("hide");	
}

function removeDuplicate(arr) {        
    var c;        
    var len = arr.length;        
    var result = [];        
    var obj = {};                
    for (c = 0; c<len; c++)  {            
       obj[arr[c]] = 0;        
    }  
    for (c in obj) {            
       result.push(c);        
    }            
    return result;      
 }        

/*del benefit*/
function imgCheckboxDel_benefit(id)
{
	var imgOK = "imgOKDel_benefit"+id;
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

function addBenefitRider_CL(tbl){
	$("#div_bnfOpt_CL>div").remove();
	tbl_row = "<div class='datatbl_BenefitOpt1"+tbl+"_CL'>"+
			  "<table class='table table-bordered' id='tbl_BenefitOpt1"+tbl+"_CL'>"+
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
					"<button type='button' class='btn btn-primary' style='margin-right:5px;' id='btn_OpenSaveBenefit_modal1' onclick=\"saveBenefitValueCL_popup(1,'"+tbl+"');\">ตกลง</button>"+						
					"<button type='button' class='btn btn-primary' data-dismiss='modal'>ยกเลิก</button>"+												
				"</div>"+
			"</div>";
	
	tbl_row += "<div class='datatbl_BenefitOpt2"+tbl+"_CL displayNone'>"+
				"<table class='table table-bordered' id='tbl_BenefitOpt2"+tbl+"_CL'>"+
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
	
	tbl_row += "<div class='datatbl_BenefitOpt2Sub"+tbl+"_CL'>"+
				"<table class='table table-bordered' id='tbl_BenefitOpt2Sub"+tbl+"_CL'>"+
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
					"<button type='button' class='btn btn-primary' style='margin-right:5px;' id='btn_SaveEditBenefit1' onclick=\"saveBenefitValueCL_popup(2,'"+tbl+"');\">ตกลง</button>"+						
					"<button type='button' class='btn btn-primary' data-dismiss='modal'>ยกเลิก</button>"+												
				"</div>"+
				"</div>";
	
	$("#div_bnfOpt_CL").append(tbl_row);
	
	$(".datatbl_BenefitOpt2Sub"+tbl+"_CL").css("display", "none");
	var id = $("#tabBenefitRider_CL").find('.active a').text();
	var data_json = {
			"method": "get_Benefit_RiderCL",
        	"bnf_cat_code": id
        }
	$.ajax({
        type: "POST",    
        url : "RiderCL_GetData_Servlet",
        data: data_json,      
        success : function(response) {		
        	add_rowBenefitRider_CL(response,tbl,"");
        },
        error : function(response) {	
        	alert("error");
        }
	});
	
}

function add_rowBenefitRider_CL(response,tbl,edit){

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
					"<td class='text-center'><input type='checkbox' id='opt1_benefitdetail"+num+"' name='opt1_benefitdetail[]' class='chk' value='"+obj.bnf_code+","+obj.name_TH+"' disabled></td>"+
					"<td class='text-center'>"+obj.bnf_code+"</td>"+
					"<td class='text-left'>"+obj.name_TH+"</td>"+
				"</tr>"
					
			$("#tbl_BenefitOpt1"+tbl+"_CL").append(row);
			
			row2 = "<tr>"+
					"<td class='text-center'><input type='radio' id='opt2_benefitdetail"+num+"' name='opt2_benefitdetail[]' onclick='displayBenefitValueOptionCL_popup(this.value);' class='chk_rd' value='"+obj.bnf_code+","+obj.name_TH+"'></td>"+
					"<td class='text-center'>"+obj.bnf_code+"</td>"+
					"<td class='text-left'>"+obj.name_TH+"</td>"+									
				"</tr>";
			
			$("#tbl_BenefitOpt2"+tbl+"_CL").append(row2);
			
			row3 = "<tr>"+
					"<td class='text-center'><input type='checkbox' id='opt1sub_benefitdetail"+num+"' name='opt1sub_benefitdetail[]' class='chk' value='"+obj.bnf_code+","+obj.name_TH+"'></td>"+
					"<td class='text-center'>"+obj.bnf_code+"</td>"+
					"<td class='text-left'>"+obj.name_TH+"</td>"+									
				"</tr>";
			
			$("#tbl_BenefitOpt2Sub"+tbl+"_CL").append(row3);
			
			row4 = "<tr>"+
					"<td class='text-center'><input type='checkbox' id='opt1sub_benefitdetail"+num+"_edit' name='opt1_benefitdetail_edit[]' class='chk' value='"+obj.bnf_code+","+obj.name_TH+"'></td>"+
					"<td class='text-center'>"+obj.bnf_code+"</td>"+
					"<td class='text-left'>"+obj.name_TH+"</td>"+									
				"</tr>"
			
			$("#tbl_BenefitOpt1Edit"+tbl+"_CL").append(row4);
				
			row5 = "<tr>"+
					"<td class='text-center'><input type='radio' id='opt2_benefitdetail"+num+"_edit' name='opt2_benefitdetail_edit[]' onclick='displayBenefitValueOptionEditCL_popup(this.value);' class='chk_rd' value='"+obj.bnf_code+","+obj.name_TH+"'></td>"+
					"<td class='text-center'>"+obj.bnf_code+"</td>"+
					"<td class='text-left'>"+obj.name_TH+"</td>"+									
				"</tr>";
				
			$("#tbl_BenefitOpt2Edit"+tbl+"_CL").append(row5);
			
			row6 = "<tr>"+
					"<td class='text-center'><input type='checkbox' id='opt1sub_benefitdetail"+num+"_edit' name='opt1_benefitdetail_edit[]' class='chk_edit' value='"+obj.bnf_code+","+obj.name_TH+"'></td>"+
					"<td class='text-center'>"+obj.bnf_code+"</td>"+
					"<td class='text-left'>"+obj.name_TH+"</td>"+									
				"</tr>"
			
			$("#tbl_BenefitOpt2SubEdit"+tbl+"_CL").append(row6);
		}
	}
	
	if ($.fn.dataTable.isDataTable( "#tbl_BenefitOpt1"+tbl+"_CL" ) ) {   	  
		 //$("#tbl_BenefitOpt1_CL").destroy();   	
		 
	}else{  		
		$("#tbl_BenefitOpt1"+tbl+"_CL").DataTable({"ordering": false,"paging": false,"bInfo" : false, scrollY: '236px',scrollCollapse: true, "autoWidth": false, 
			fixedHeader: {header: true},"oLanguage": {"sSearch": "ค้นหา: "}
		});
		$(".datatbl_BenefitOpt1"+tbl+"_CL .dataTables_scrollHeadInner").css({"width":"100%"});
		$(".datatbl_BenefitOpt1"+tbl+"_CL .table").css({"width":"100%"});  

	}

	
	if ($.fn.dataTable.isDataTable( "#tbl_BenefitOpt2"+tbl+"_CL" ) ) {   	  
		  //$("#tbl_BenefitOpt2_CL").destroy();   	
	}else{  
		$("#tbl_BenefitOpt2"+tbl+"_CL").DataTable({"ordering": false,"paging": false,"bInfo" : false, scrollY: '236px',scrollCollapse: true, "autoWidth": false, 
			fixedHeader: {header: true},"oLanguage": {"sSearch": "ค้นหา: "}
		});
		$(".datatbl_BenefitOpt2"+tbl+"_CL .dataTables_scrollHeadInner").css({"width":"100%"});
		$(".datatbl_BenefitOpt2"+tbl+"_CL .table").css({"width":"100%"});  
	}
	
	if ($.fn.dataTable.isDataTable( "#tbl_BenefitOpt2Sub"+tbl+"_CL" ) ) {   	  
		 // $("#tbl_BenefitOpt2Sub_CL").destroy();   	
	}else{  
		$("#tbl_BenefitOpt2Sub"+tbl+"_CL").DataTable({"ordering": false,"paging": false,"bInfo" : false, scrollY: '236px',scrollCollapse: true, "autoWidth": false, 
			fixedHeader: {header: true},"oLanguage": {"sSearch": "ค้นหา: "}
		});
		$(".datatbl_BenefitOpt2Sub"+tbl+"_CL .dataTables_scrollHeadInner").css({"width":"100%"});
		$(".datatbl_BenefitOpt2Sub"+tbl+"_CL .table").css({"width":"100%"});  
	}
	
	if ($.fn.dataTable.isDataTable( "#tbl_BenefitOpt1Edit"+tbl+"_CL" ) ) {   	  
		 // $("#tbl_BenefitOpt1Edit_CL").destroy();   	
	}else{  
		$("#tbl_BenefitOpt1Edit"+tbl+"_CL").DataTable({"ordering": false,"paging": false,"bInfo" : false, scrollY: '236px',scrollCollapse: true, "autoWidth": false, 
			fixedHeader: {header: true},"oLanguage": {"sSearch": "ค้นหา: "}
		});
		$(".datatbl_BenefitOpt1Edit"+tbl+"_CL .dataTables_scrollHeadInner").css({"width":"100%"});
		$(".datatbl_BenefitOpt1Edit"+tbl+"_CL .table").css({"width":"100%"});  
	}
	
	if ($.fn.dataTable.isDataTable( "#tbl_BenefitOpt2Edit"+tbl+"_CL" ) ) {   	  
		  //$("#tbl_BenefitOpt2Edit_CL").destroy();   	
	}else{  
		$("#tbl_BenefitOpt2Edit"+tbl+"_CL").DataTable({"ordering": false,"paging": false,"bInfo" : false, scrollY: '236px',scrollCollapse: true, "autoWidth": false, 
			fixedHeader: {header: true},"oLanguage": {"sSearch": "ค้นหา: "}
		});
		$(".datatbl_BenefitOpt2Edit"+tbl+"_CL .dataTables_scrollHeadInner").css({"width":"100%"});
		$(".datatbl_BenefitOpt2Edit"+tbl+"_CL .table").css({"width":"100%"});  

	}
	
	if ($.fn.dataTable.isDataTable( "#tbl_BenefitOpt2SubEdit"+tbl+"_CL" ) ) {   	  
		  //$("#tbl_BenefitOpt2SubEdit_CL").destroy();   	
	}else{  
		$("#tbl_BenefitOpt2SubEdit"+tbl+"_CL").DataTable({"ordering": false,"paging": false,"bInfo" : false, scrollY: '236px',scrollCollapse: true, "autoWidth": false, 
			fixedHeader: {header: true},"oLanguage": {"sSearch": "ค้นหา: "}
		});
		$(".datatbl_BenefitOpt2SubEdit"+tbl+"_CL .dataTables_scrollHeadInner").css({"width":"100%"});
		$(".datatbl_BenefitOpt2SubEdit"+tbl+"_CL .table").css({"width":"100%"});  
	}

	
}

function confirmDeleteBenefitRaider_CL(tbl){
	var tblID = ("#tbl_"+tbl);
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
			numberImgOK = Number(lastImgOK.replace("imgOKDel_benefit"+tbl+"_",""))+1;
		}
		
		var a = 0; aa = 0;
		var value_del = [];
		var save_value_del = [];	
		var code_del = [];
			
		var value_code_del = [];
		var save_code_del = [];
			
		for(var i = 1;i<=numberImgOK;i++)
		{
				var checked = $(tblID+" #tbody_benefitL_CL"+i+" >td:first>i").attr("class");
				var dataID = $(tblID+" #tbody_benefitL_CL"+i).attr("data-id");
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
					deleteTableRow(tblID+" #tbody_benefitL_CL"+i);
					
					nameTab 	= "menu_CL_5";
					Statuesave = "N";
				}				
		}	
		
		/*เปิด row ที่ลบไป*/
		var chk_tbl1 = [],chk_tbl2 = [],chk_tbl3 = [],chk_tbl4 = [],chk_tbl5 = [],chk_tbl6 = [];
		var value_code = save_code_del.join(",").split(",");
		var c1=0, c2=0, c3=0, c4=0, c5=0, c6=0;
		for(var b=0; b<value_code.length; b++){
			var num1 = $("#tbl_BenefitOpt1"+tbl+"_CL tbody>tr input[name='opt1_benefitdetail[]']").length;
			var num2 = $("#tbl_BenefitOpt2_CL tbody>tr input[name='opt2_benefitdetail[]']").length;
			var num3 = $("#tbl_BenefitOpt2Sub_CL tbody>tr input[name='opt1sub_benefitdetail[]']").length;
			var num4 = $("#tbl_BenefitOpt1Edit_CL tbody>tr input[name='opt1_benefitdetail_edit[]']").length;
			var num5 = $("#tbl_BenefitOpt2Edit_CL tbody>tr input[name='opt2_benefitdetail_edit[]']").length;
			var num6 = $("#tbl_BenefitOpt2SubEdit_CL tbody>tr input[name='opt1_benefitdetail_edit[]']").length;
			
			if(num1 > 0){
				$("#tbl_BenefitOpt1"+tbl+"_CL tbody>tr").each(function(){
					c1++;
					chk_tbl1[c1] = $(this).find("input[name='opt1_benefitdetail[]']").val().split(",");
					if(value_code[b] == chk_tbl1[c1][0]){
						$(this).closest('tr').show();
					}
				});
			}
			
			if(num2 > 0){
				$("#tbl_BenefitOpt2_CL tbody>tr").each(function(){
					c2++;
					chk_tbl2[c2] = $(this).find("input[name='opt2_benefitdetail[]']").val().split(",");			
					if(value_code[b] == chk_tbl2[c2][0]){
						$(this).closest('tr').show();
					}
				});
			}		
			
			if(num3 > 0){
				$("#tbl_BenefitOpt2Sub_CL tbody>tr").each(function(){
					c3++;
					chk_tbl3[c3] = $(this).find("input[name='opt1sub_benefitdetail[]']").val().split(",");
					if(value_code[b] == chk_tbl3[c3][0]){
						$(this).closest('tr').show();
					}
				});
			}
			
			if(num4 > 0){
				$("#tbl_BenefitOpt1Edit_CL tbody>tr").each(function(){
					c4++;
					chk_tbl4[c4] = $(this).find("input[name='opt1_benefitdetail_edit[]']").val().split(",");
					if(value_code[b] == chk_tbl4[c4][0]){
						$(this).closest('tr').show();
					}
				});
			}
			
			if(num5 > 0){
				$("#tbl_BenefitOpt2Edit_CL tbody>tr").each(function(){
					c5++;
					chk_tbl5[c5] = $(this).find("input[name='opt2_benefitdetail_edit[]']").val().split(",");
					if(value_code[b] == chk_tbl5[c5][0]){
						$(this).closest('tr').show();
					}
				});
			}
			//$("#row_empty").remove();
			
			if(num6 > 0){
				$("#tbl_BenefitOpt2SubEdit_CL tbody>tr").each(function(){
					c6++;
					chk_tbl6[c6] = $(this).find("input[name='opt1_benefitdetail_edit[]']").val().split(",");
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
	      id = Number($row.attr("id").replace("tbody_benefitL_CL",""));
	      children = $table.find("tr[data-group=" + id + "]");
		
			//$table.find("tr[data-id=" + id + "]>td:nth-child(2)>span").html(j);	
			$row.find("td:nth-child(2)>span").html(j);			
			//alert(id);
			
			/*ค่าเก่า+ใหม่*/
			/*var number_parent = $row.data("id");*/
			var number_parent =  Number($row.attr("id").replace("tbody_benefitL_CL",""));
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
					var number_child = $row2.attr("id").replace("tbody_benefitL_CL","");
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
					
					$row2.attr("id","tbody_benefitL_CL"+j+"_"+jj);
					$row2.attr("data-id",j+"_"+jj);	
					$row2.attr("data-group",j);
					$row2.find('input[type=text]:nth-child(1)').attr("id","benefit_amount_"+tbl+"_"+j+"_"+jj);
					$row2.find('select:nth-child(1)').attr("id","benefit_unit"+j+"_"+jj);
					$row2.find('select:nth-child(2)').attr("id","benefit_fund"+j+"_"+jj);
					$row2.find('select:nth-child(3)').attr("id","benefit_fq"+j+"_"+jj);
					$row2.find('a.open-SelectCoverageDialog').attr("data-id",j+"_"+jj);
					$row2.find('textarea').attr("id","benefit_remark"+j+"_"+jj);
					$row2.find('button:nth-child(1)').attr("id","btn_benefit"+tbl+"_"+j+"_"+jj);
					$row2.find('select:nth-child(4)').attr("id","benefit_factor_select"+j+"_"+jj);
					$row2.find('input[type=text]:nth-child(2)').attr("id","benefit_factor_amount_"+tbl+"_"+j+"_"+jj);
					$row2.find('select:nth-child(5)').attr("id","benefit_factor_unit"+j+"_"+jj);
					$row2.find('select:nth-child(6)').attr("id","benefit_factor_to"+j+"_"+jj);
					
	          });
			}	
			
			$row.attr("id","tbody_benefitL_CL"+j);
			$row.attr("data-id",j);
			$row.find("td:nth-child(1)").attr("id","imgOKDel_benefit"+tbl+"_"+j);
			$row.find("td:nth-child(1)").attr("onclick","imgCheckboxDel_benefit('"+tbl+"_"+j+"')");
			$row.find('a.open-EditBenefitDialog').attr("data-id",j);
			$row.find('textarea').attr("id","benefit_remark"+j);
			$row.find('input[type=text]:nth-child(1)').attr("id","benefit_amount_"+tbl+"_"+j);
			$row.find('select:nth-child(1)').attr("id","benefit_unit"+j);
			$row.find('select:nth-child(2)').attr("id","benefit_fund"+j);
			$row.find('select:nth-child(3)').attr("id","benefit_fq"+j);
			$row.find('a.open-SelectCoverageDialog').attr("data-id",j);
			$row.find('button:nth-child(1)').attr("id","btn_benefit"+tbl+"_"+j);
			$row.find('select:nth-child(4)').attr("id","benefit_factor_select"+j);
			$row.find('input[type=text]:nth-child(2)').attr("id","benefit_amount_"+tbl+"_"+j);
			$row.find('select:nth-child(5)').attr("id","benefit_factor_unit"+j);
			$row.find('select:nth-child(6)').attr("id","benefit_factor_to"+j);
			
		});					
	});		
  }

}

/*บันทึกความคุ้มครอง*/
function bt_benefit_CL_Confirm(tbl) {	
	var message = "";
	var error = 0;
	var record_count = $("#tbl_"+tbl+">tbody>tr").length;		
	var benefit_amount = document.getElementsByName("benefit_amount_"+tbl+"[]");
	var benefit_factor_amount = document.getElementsByName("benefit_factor_amount_"+tbl+"[]");

	/*for (i=0; i<record_count; i++)
		{
		 if (benefit_amount[i].value == "0.00" || benefit_amount[i].value == "0" || benefit_amount[i].value == "")
			{
			 message = "กรุณาระบุข้อมูลให้ครบ";
			 alertError(message);
			 error++;
			}
		 
		 if (benefit_factor_amount[i].value == "0.00" || benefit_factor_amount[i].value == "0" || benefit_factor_amount[i].value == "")
			{
			 message = "กรุณาระบุข้อมูลให้ครบ";
			 alertError(message);
			 error++;
			}
		}*/
	
	/*$("#tbl_"+tbl+">tbody>tr").each(function(){
		var id = $(this).data("id");
		var benef_amt = $("#benefit_amount_"+tbl+"_"+id).val();
		var benef_unit = $("#benefit_unit"+id+" option:selected").val();
		var benef_scope = $("#benefit_fund"+id+" option:selected").val();
		
		if(benef_unit != "NONE"){
			if(benef_amt == ""){
				error++;
			}
		}
		
		var limit_amt = $("#benefit_factor_max"+id).val();
		var limit_unit = $("#benefit_factor_unit"+id+" option:selected").val();
		var limit_scope = $("#benefit_factor_to"+id+" option:selected").val();
		
		if(limit_unit != "NONE"){
			if(limit_amt == ""){
				error++;
			}
		}
		
		var special_amt = $("#benefit_acc_amount"+id).val();
		var special_unit = $("#benefit_acc_unit"+id+" option:selected").val();
		
		if(special_unit != "NONE"){
			if(special_amt == ""){
				error++;
			}
		}
		
	});*/
	
	if(error == 0){
		dataSave_benefitsCoverage(tbl);
		
		nameTab 	= "menu_CL_5";
		Statuesave = "Y";		
		message = "บันทึกข้อมูลเรียบร้อย";
		alertSuccess(message);
	}
}

$(document).on("click", ".open-SelectCoverageDialog", function () {	
    var tabmyId = $("#tabBenefitRider_CL>li.active").attr('id');
    var myId = tabmyId.replace("tab","");   
    //var dataID = $(this).data('id');
    var dataID = $(this).find("button").attr("id").replace("btn_benefit"+myId+"_","");   
    var BCID_tblCL = $(".modal-body #BCID_tblCL").val( myId );     
    $(".modal-body #dataID_tblCL").val( dataID ); 
    
    /*clone*/ 
    var $target = $("#tbl_CoverageofBenefit_CL>tbody");
    var record_count = $("#tbl_CoverageofBenefit_CL>tbody>tr").length;
    
    if(record_count <= 0){
    	$("#tbl_"+myId+">tbody>tr[data-id != "+dataID+"]").each(function() {
            var $tds = $(this).children(),
                $row = $("<tr></tr>"),
                $value = $tds.eq(1).text();
            	
            var row_append = $row.append("<td class='text-center vertical-middle'><input type='checkbox' name='opt_coverageTblSelect[]' value='"+$value+"'></td>").append($tds.eq(1).clone()).append($tds.eq(2).clone()).append($tds.eq(3).clone());
       
            $(row_append).find('td:nth-child(2)').removeClass("borderBlack");
            $(row_append).find('td:nth-child(3)').removeClass("borderBlack");
            $(row_append).find('td:nth-child(4)').removeClass("borderBlack");
            
            $(row_append).appendTo($target);
        });
    }else{
    	$("#tbl_CoverageofBenefit_CL>tbody").empty();
    	
    	$("#tbl_"+myId+">tbody>tr[data-id != "+dataID+"]").each(function() {
            var $tds = $(this).children(),
            	$row = $("<tr></tr>"),
            	$value = $tds.eq(1).text();
            
            var row_append = $row.append("<td class='text-center vertical-middle'><input type='checkbox' name='opt_coverageTblSelect[]' value='"+$value+"'></td>").append($tds.eq(1).clone()).append($tds.eq(2).clone()).append($tds.eq(3).clone());
       
            $(row_append).find('td:nth-child(2)').removeClass("borderBlack");
            $(row_append).find('td:nth-child(3)').removeClass("borderBlack");
            $(row_append).find('td:nth-child(4)').removeClass("borderBlack");
            
            $(row_append).appendTo($target);
        });
    }  
    
    $('#modal_TableCoverage_CL').modal('show');
          
});

/*add ของความคุ้มครอง*/
function saveSelectCoverage_CL(){	
	
	var BCID = $("#BCID_tblCL").val();
	var dataID = $("#dataID_tblCL").val();

	var select_value = [];
	var val = [];
	var j = 0;
	
    $("#modal_TableCoverage_CL input[name='opt_coverageTblSelect[]']:checked").each(function(){
    	j++				
    	val[j] = $(this).val();  
    	select_value.push(val[j]);	    
    });	
  
    var data = select_value.join(',')
    $("#tbl_"+BCID+">tbody>tr[data-id="+dataID+"]>td:nth-child(9) div.list_coverage").html(data);

	$("#modal_TableCoverage_CL").modal("hide");
	
}

/*บันทึกสลักหลัง*/
function addRecordNew_CL(){	
	
	if($("#div_recordCL").innerHeight() > 792){
		$("#div_recordCL").addClass("scroll_policy");
	}
	
	var table = document.getElementById("record_Table_CL");	

	if($("#record_Table_CL>tbody>tr").length > 0){
		var TableRow = Number($("#record_Table_CL>tbody>tr").length)-1;
		var lastImgOKNew = table.getElementsByClassName("spanRecord_CL");
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
		
	var lastImgOK = $('#record_Table_CL>tbody>tr:last>td:first').attr("id") || 0;
	var numberImgOK = 0;
				
	if(lastImgOK == 0){
		numberImgOK = 1;
	}else{
		numberImgOK = Number(lastImgOK.replace("imgOK_record",""))+1;
	}
			
	var row = "";
	
	row = "<tr id='tbody_record"+numberImgOK+"'>"+					    								
		  "<td id='imgOK_record"+numberImgOK+"' class='text-center borderBlack'"+
		  "onclick='imgCheckbox_record_CL("+numberImgOK+");' style='vertical-align: middle;'>" +
		  "<i class='glyphicon glyphicon-edit'></i></td>"+	
		  "<td class='text-center borderBlack' style='vertical-align: middle;'><span class='spanRecord_CL' id='orderID"+numberImgOK+"'>"+numberImgOKNew+"</span></td>"+									
		  "<td class='borderBlack verticalCenter'><input type='text' name='record_name[]' id='record_name"+numberImgOK+"' class='form-control margin-padding0 text-center;'></td>"+											  									
		  "</tr>";
	
	
	$("#record_Table_CL tbody").append(row);
	/*$('.auto').autoNumeric('init');*/
}

function imgCheckbox_record_CL(id)
{
	var imgOK = "imgOK_record"+id;
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

/*บันทึกสลักหลัง*/

/*เลือกแบบประกันหลัก (เพิ่มเติม)*/
$(document).on("click", "#selectBasePlan", function () {	
		$.ajax({
	        type: "POST",
	        url : "BasePlanCL_GetData_Servlet",
	        data: {
	        	method 	: "getBasePlanCL",
	        },       
	        success : function(response) {	
	        	ShowDataBasePlanCL(response);
	        },
	        error : function(response) {	
	        	alert("error");
	        }
		});
});

function ShowDataBasePlanCL(response){
	
	var row = "";
	for(i in response.BasePlanCL_Data){
		var obj = response.BasePlanCL_Data[i];
		row = "<tr id=\"row2_"+i+""+"\">" +	
			"<td class=\"col-sm-1 text-center"+"\">"+"<input type=\"checkbox\" id=\"ch_baseplan_"+i+"\" value='"+obj.insuranceNo+"'>"+"</td>"+
			"<td class=\"verticalCenter col-sm-2 text-left"+"\">"+"<label style=\"text-decoration: underline; color: blue;\" for=\"ch_baseplan_"+i+"\" id=\"baseplan_pass_"+i+""+"\">"+obj.insuranceNo+"</label>"+"" +
			"</td>"+
			"<td class=\"col-sm-5 text-left"+"\">"+"<label for=\"ch_baseplan_"+i+"\" id=\"baseplan_Name_"+i+""+"\">"+obj.nameTH+"</label>"+"" +
			"</td>"+
		"</tr>";
		
		$("#tb_SelectBaseplan_modal tbody").append(row);
	}
	
	$('#tb_SelectBaseplan_modal').DataTable().destroy();
	$("#tb_SelectBaseplan_modal").DataTable({"ordering": false,"paging": false,"bInfo" : false, scrollY: '236px',scrollCollapse: true, "autoWidth": false, 
		fixedHeader: {header: true},"oLanguage": {"sSearch": "ค้นหา: "}
	});
	$("#tb_SelectBaseplan_modal_wrapper .dataTables_scrollHeadInner").css({"width":"100%"});
	$("#tb_SelectBaseplan_modal_wrapper .table").css({"width":"100%"});
	
	/*เลือกแบบประกันหลักที่มีอยู่แล้ว*/
	var numrow_baseplan = $("#tbl_baseplanSelect>tbody>tr").length;
	var arr_baseplan = [];
	if(numrow_baseplan > 0){
		$("#tbl_baseplanSelect>tbody>tr").each(function(){
			var baseplan_number = $(this).find("td:nth-child(2)>label").text();
			arr_baseplan.push(baseplan_number);
		});
	}
	var save_arr_baseplan = arr_baseplan.join(",");
	var split_arr_baseplan = save_arr_baseplan.split(",");
	
	$("#tb_SelectBaseplan_modal input:checkbox").prop("checked", false);
	
	for(var a=0; a<split_arr_baseplan.length; a++){
		$("#tb_SelectBaseplan_modal tbody>tr").each(function(){
			if(split_arr_baseplan[a] == $(this).find("td:nth-child(2)").text()){
				$(this).find("input[type='checkbox']").prop("checked",true);
			}
		});
	}
		
	$('#modal_selectBaseplan').modal('show');
}

/*บันทึกการเลือกแบบประกันหลัก*/
var numAdditional_contract = "";
function bt_save_Baseplan() {
	var arrnumrow = [];
	var arrBaseplan = [];	
	var lastImgOK = $('#tbl_baseplanSelect>tbody>tr:last>td:first').attr("id") || 0;	
	var count_row = $("#tbl_baseplanSelect>tbody>tr").length;

	if(count_row > 0){
		//alert($("#tbl_"+BCID+">tbody>tr[data-group="+dataID+"]:last").attr("id"));		
		var numberImgOK = Number($("#tbl_baseplanSelect>tbody>tr:last-child").attr("data-id"));	
	}else{
		var numberImgOK = 0;
	}
	var arr_value = [];
	var value_check_diff = [];
	
	/*เก็บค่า baseplan ที่แอดไปแล้ว*/
	var num_baseplan = $("#tbl_baseplanSelect tbody>tr").length;
	if(num_baseplan > 0){
		$("#tbl_baseplanSelect tbody>tr>td:nth-child(2)>label").each(function(){
			arrBaseplan.push($(this).text());
		});
		
		var value_chk_old = arrBaseplan.join(",")
		var value = [];
 	 		value = value_chk_old.split(",");
 	
	    for(var i=0; i<value.length; i++){		 
	    	value_check_diff.push(value[i]);	 
	 	}
	}
	
	$("#tb_SelectBaseplan_modal tbody>tr input[type='checkbox']:checked").each(function(){
		var id = $(this).attr("id");
			id = id.replace("ch_baseplan_","");
				
		var ftOnclick = "imgCheckbox(this.id);";	
		var baseplan_id = $("#baseplan_pass_"+id).text();
		var baseplan_name = $("#baseplan_Name_"+id).text();
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
	    	row2 = "<tr id='tbody_baseplan"+numberImgOK+"' data-id="+numberImgOK+">"+
						/*"<td id='imgOK_baseplan"+numberImgOK+"' class='verticalCenter text-center'><input id='baseplanSelect"+numberImgOK+"_cl' type='checkbox' value='G_NC_ML_R_E21'></td>"+*/
						"<td id='imgOK_baseplan"+numberImgOK+"' class='text-center verticalCenter' onclick='"+ftOnclick+"'>"+
							"<i class='glyphicon glyphicon-edit'></i></td>"+
						"<td class='verticalCenter'><label>"+baseplan_id+"</label></td>"+
						"<td class='verticalCenter'>"+baseplan_name+"</td>"+																									
					"</tr>";
	    	
			$("#tbl_baseplanSelect tbody").append(row2);
			$('.auto').autoNumeric('init');

	    	}
	    }
	  }
	});
		
	if($("#div_BaseplanSelect").innerHeight() > 264){
		$("#div_BaseplanSelect").addClass("settableproduct");
	}else{
		$("#div_BaseplanSelect").removeClass("settableproduct");
	}
	
	nameTab 	= "menu_CL_9";
	Statuesave = "N";
	
}

/*ลบแบบประกันหลัก*/
function deleteBaseplan()
{
	var imgOKcount = $("#tbl_baseplanSelect i.glyphicon-ok").length;
	if(imgOKcount <= 0)
	{	
		message = "กรุณาเลือกรายการที่ต้องการลบ";
		alertError(message);
	}else{
	message = "ต้องการลบรายการใช่หรือไม่";
	alertDeleteError(message);
	
	$("#btn_confirm_del").click(function(){
		var tblID 		= "#tbl_baseplanSelect";
		var lastImgOK = $(tblID+" >tbody>tr:last>td:first").attr("id") || 0;	
		var numberImgOK = 0;
		if(lastImgOK == 0){
			numberImgOK = 1;
		}else{
			numberImgOK = Number(lastImgOK.replace("imgOK_baseplan",""))+1;
		}
		for(var i = 1;i<=numberImgOK;i++)
			{
				var checked = $(tblID+" #tbody_baseplan"+i+" >td:first>i").attr("class");
				if(checked == "glyphicon glyphicon-ok"){	
					deleteTableRow(tblID+" #tbody_baseplan"+i);										
				}
			
			}
			if($("#div_BaseplanSelect").innerHeight() <= 264){
				$("#div_BaseplanSelect").removeClass("settableproduct");
			}
			
			nameTab 	= "menu_CL_9";
			Statuesave = "N";
			
		});
	}
}

/*สัญญาเพิ่มเติม*/
/*เลือกสัญญาเพิ่มเติม (เพิ่มเติม)*/
$(document).on("click", "#selectRider", function () {	
		$.ajax({
	        type: "POST",
	        url : "RiderCL_GetData_Servlet",
	        data: {
	        	method 	: "getRiderCL2",
	        },       
	        success : function(response) {	
	        	ShowDataRiderMenuCL(response);
	        },
	        error : function(response) {	
	        	alert("error");
	        }
		});	
});

function ShowDataRiderMenuCL(response){
	var row = "";
	for(i in response.RiderCL_Data){
		var obj = response.RiderCL_Data[i];
		row = "<tr id=\"row2_"+i+""+"\">" +	
				"<td class=\"col-sm-1 text-center"+"\">"+"<input type=\"checkbox\" id=\"ch_rider_"+i+"\" value='"+obj.insuranceNo+"'>"+"</td>"+
				"<td class=\"verticalCenter col-sm-2 text-left"+"\">"+"<label style=\"text-decoration: underline; color: blue;\" for=\"ch_rider_"+i+"\" id=\"rider_pass_"+i+""+"\">"+obj.insuranceNo+"</label>"+"" +
				"</td>"+
				"<td class=\"col-sm-5 text-left"+"\">"+"<label for=\"ch_rider_"+i+"\" id=\"rider_Name_"+i+""+"\">"+obj.nameTH+"</label>"+"" +
				"</td>"+
			"</tr>";			  
		$("#tb_SelectRider_modal tbody").append(row);
	}
	
	$('#tb_SelectRider_modal').DataTable().destroy();
	$("#tb_SelectRider_modal").DataTable({"ordering": false,"paging": false,"bInfo" : false, scrollY: '236px',scrollCollapse: true, "autoWidth": false, 
		fixedHeader: {header: true},"oLanguage": {"sSearch": "ค้นหา: "}
	});
	$("#tb_SelectRider_modal_wrapper .dataTables_scrollHeadInner").css({"width":"100%"});
	$("#tb_SelectRider_modal_wrapper .table").css({"width":"100%"});
	
	/*เลือสัญญาเพิ่มเติมที่มีอยู่แล้ว*/
	var numrow_rider = $("#tbl_riderSelect>tbody>tr").length;
	var arr_rider = [];
	if(numrow_rider > 0){
		$("#tbl_riderSelect>tbody>tr").each(function(){
			var rider_number = $(this).find("td:nth-child(2)>label").text();
			arr_rider.push(rider_number);
		});
	}
	var save_arr_rider = arr_rider.join(",");
	var split_arr_rider = save_arr_rider.split(",");
	
	$("#tb_SelectRider_modal input:checkbox").prop("checked", false);
	
	for(var a=0; a<split_arr_rider.length; a++){
		$("#tb_SelectRider_modal tbody>tr").each(function(){
			//alert(split_arr_rider[a]+" Label: "+$(this).find("td:nth-child(2)").text());
			if(split_arr_rider[a] == $(this).find("td:nth-child(2)").text()){
				
				$(this).find("input[type='checkbox']").prop("checked",true);
			}
		});
	}
	
	$('#modal_selectRider').modal('show');
}

/*บันทึกการเลือกสัญญาเพิ่มเติม*/
var numAdditional_contract = "";
function bt_save_Rider() {
	var arrnumrow = [];
	var arrRider = [];	
	var lastImgOK = $('#tbl_riderSelect>tbody>tr:last>td:first').attr("id") || 0;	
	var count_row = $("#tbl_riderSelect>tbody>tr").length;

	if(count_row > 0){
		//alert($("#tbl_"+BCID+">tbody>tr[data-group="+dataID+"]:last").attr("id"));		
		var numberImgOK = Number($("#tbl_riderSelect>tbody>tr:last-child").attr("data-id"));	
	}else{
		var numberImgOK = 0;
	}
	var arr_value = [];
	var value_check_diff = [];
	
	/*เก็บค่า baseplan ที่แอดไปแล้ว*/
	var num_rider = $("#tbl_riderSelect tbody>tr").length;
	if(num_rider > 0){
		$("#tbl_riderSelect tbody>tr>td:nth-child(2)>label").each(function(){
			arrRider.push($(this).text());
		});
		
		var value_chk_old = arrRider.join(",")
		var value = [];
 	 		value = value_chk_old.split(",");
 	
	    for(var i=0; i<value.length; i++){		 
	    	value_check_diff.push(value[i]);	 
	 	}
	}
	
	$("#tb_SelectRider_modal tbody>tr input[type='checkbox']:checked").each(function(){
		var id = $(this).attr("id");
			id = id.replace("ch_rider_","");
				
		var ftOnclick = "imgCheckbox(this.id);";	
		var rider_id = $("#rider_pass_"+id).text();
		var rider_name = $("#rider_Name_"+id).text();
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
	    var newID = "imgOK_"+numberImgOK;
	    
	    var addrowChild = 'addrowChild("'+numberImgOK+'","'+rider_name+'","'+rider_type+'");';
	    
	    for(var m=0; m<save_diff_split.length; m++){
	    	//alert(save_diff_split[m]);
	    	   		       		    	
	    if(rider_id == save_diff_split[m]){		
	    	row2 = "<tr id='tbody_rider"+numberImgOK+"' data-id="+numberImgOK+">"+
						/*"<td id='imgOK_baseplan"+numberImgOK+"' class='verticalCenter text-center'><input id='baseplanSelect"+numberImgOK+"_cl' type='checkbox' value='G_NC_ML_R_E21'></td>"+*/
						"<td id='imgOK_rider"+numberImgOK+"' class='text-center verticalCenter' onclick='"+ftOnclick+"'>"+
							"<i class='glyphicon glyphicon-edit'></i></td>"+
						"<td class='verticalCenter'><label>"+rider_id+"</label></td>"+
						"<td class='verticalCenter'>"+rider_name+"</td>"+																									
					"</tr>";
	    	
			$("#tbl_riderSelect tbody").append(row2);
			$('.auto').autoNumeric('init');

	    	}
	    }
	  }
	});
		
	if($("#div_RiderSelect").innerHeight() > 264){
		$("#div_RiderSelect").addClass("settableproduct");
	}else{
		$("#div_RiderSelect").removeClass("settableproduct");
	}
	
	nameTab 	= "menu_CL_9";
	Statuesave = "N";	
}

/*ลบสัญญาเพิ่มเติม*/
function deleteRider()
{
	var imgOKcount = $("#tbl_riderSelect i.glyphicon-ok").length;
	if(imgOKcount <= 0)
	{	
		message = "กรุณาเลือกรายการที่ต้องการลบ";
		alertError(message);
	}else{
	message = "ต้องการลบรายการใช่หรือไม่";
	alertDeleteError(message);
	
	$("#btn_confirm_del").click(function(){
		var tblID 		= "#tbl_riderSelect";
		var lastImgOK = $(tblID+" >tbody>tr:last>td:first").attr("id") || 0;	
		var numberImgOK = 0;
		if(lastImgOK == 0){
			numberImgOK = 1;
		}else{
			numberImgOK = Number(lastImgOK.replace("imgOK_rider",""))+1;
		}
		for(var i = 1;i<=numberImgOK;i++)
			{
				var checked = $(tblID+" #tbody_rider"+i+" >td:first>i").attr("class");
				if(checked == "glyphicon glyphicon-ok"){	
					deleteTableRow(tblID+" #tbody_rider"+i);										
				}
			
			}
			if($("#div_RiderSelect").innerHeight() <= 264){
				$("#div_RiderSelect").removeClass("settableproduct");
			}
			
			nameTab 	= "menu_CL_9";
			Statuesave = "N";	
		});
	}
}

function check_rd_endorse(value){
	if(value == 1){
		$("#endorse_Baseplan_CL,#endorse_Rider_CL").hide();
		$("#tbl_baseplanSelect>tbody>tr").remove();
		$("#tbl_riderSelect>tbody>tr").remove();
	}else{
		$("#endorse_Baseplan_CL,#endorse_Rider_CL").show();
	}
}

function bt_record_CL_Confirm() {	
	var message = "";
	var error = 0;
	var record_count = $("#record_Table_CL>tbody>tr").length;			
	var record_name = document.getElementsByName('record_name[]');
	var num_baseplan = $("#tbl_baseplanSelect>tbody>tr").length;
	var num_rider = $("#tbl_riderSelect>tbody>tr").length;
	
	for (i=0; i<record_count; i++)
		{
		 if (record_name[i].value == ""){
			 error++;
		}
	}
	
	if($("#rd_endorseMatch_CL2").prop("checked") == true){
		if(num_baseplan <= 0 && num_rider <= 0){
			error++;
		}
	}
	
	if(error > 0){
		 message = "กรุณาระบุข้อมูลให้ครบ";
		 alertError(message);
		 nameTab 	= "menu_CL_9";
		 Statuesave = "N";
	}else{
		dataSave_Endorse();
		nameTab 	= "menu_CL_9";
		Statuesave = "Y";
		message = "บันทึกข้อมูลเรียบร้อย";
		alertSuccess(message);
	}
}

/*add บันทึกสลักหลัง*/
function saveSelectRecord_CL(){	
	var num_rows_endorse = $("#record_Table_CL tbody>tr").length;
	
	if(num_rows_endorse > 0){
		$("#record_Table_CL tbody>tr").remove();
	}
	
	var num_rows = $("#tbl_endorsement_CL>tbody>tr").length;
	var table = document.getElementById("record_Table_CL");	
	var row = "";
	for(var j=0; j<=num_rows; j++){
		var opt_endorsementSelect = false ;
			opt_endorsementSelect = document.getElementById("opt_endorsementSelect"+j);
		var tr_endorsementSelect = $("#tr_endorsementSelect"+j);
		if (opt_endorsementSelect != null){
			if(opt_endorsementSelect.checked == true){
				var lb_endorsementSelect = document.getElementById('lb_endorsementSelect'+j).innerHTML;
				var key = $("#tr_endorsementSelect"+j).find('td:nth-child(2)').text();
				if($("#record_Table_CL>tbody>tr").length > 0){
					var TableRow = Number($("#record_Table_CL>tbody>tr").length)-1;
					var lastImgOKNew = table.getElementsByClassName("spanRecord_CL");
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
					
				var lastImgOK = $('#record_Table_CL>tbody>tr:last>td:first').attr("id") || 0;
				var numberImgOK = 0;
							
				if(lastImgOK == 0){
					numberImgOK = 1;
				}else{
					numberImgOK = Number(lastImgOK.replace("imgOK_record",""))+1;
				}
						
				var row = "";
				
				row = "<tr id='tbody_record"+numberImgOK+"'>"+					    								
						  "<td id='imgOK_record"+numberImgOK+"' class='text-center borderBlack'"+
						  "onclick='imgCheckbox_record_CL("+numberImgOK+");' data-key='"+key+"' style='vertical-align: middle;'>" +
						  "<i class='glyphicon glyphicon-edit'></i></td>"+	
						  "<td class='text-center borderBlack' style='vertical-align: middle;'><span class='spanRecord_CL' id='orderID"+numberImgOK+"'>"+numberImgOKNew+"</span></td>"+									
						  "<td class='borderBlack verticalCenter'><input type='text' name='record_name[]' id='record_name"+numberImgOK+"' class='form-control margin-padding0 text-center;' value='"+lb_endorsementSelect+"' readonly></td>"+											  									
					  "</tr>";			
				
				$("#record_Table_CL tbody").append(row);
				//$(tr_endorsementSelect).hide();
			}
		}
	}
       
	if($("#div_recordCL").innerHeight() > 792){
		$("#div_recordCL").addClass("scroll_policy");
	}
 
	$("#modal_endorsement_CL").modal("hide");
	
	$("#tbl_endorsement_CL input[name='opt_endorsementSelect[]']").prop("checked", false);
	
}

$(document).on("click", ".open-endorseDialog", function () {
	if ($.fn.dataTable.isDataTable( "#tbl_endorsement_CL" ) ) {   	  
		 //$("#tbl_BenefitOpt1_CL").destroy();   	
		 
	}else{  		
		$("#tbl_endorsement_CL").DataTable({"ordering": false,"paging": false,"bInfo" : false, scrollY: '236px',scrollCollapse: true, "autoWidth": false, 
			fixedHeader: {header: true},"oLanguage": {"sSearch": "ค้นหา: "}
		});
		$(".datatbl_endorsement_CL .dataTables_scrollHeadInner").css({"width":"100%"});
		$(".datatbl_endorsement_CL .table").css({"width":"100%"});  

	}
	
	$("#tbl_endorsement_CL tbody>tr input:checkbox").prop("checked", false);
	
	$("#record_Table_CL tbody>tr").each(function(){
		var endorse_code = $(this).find("td:nth-child(1)").attr("data-key");

		$("#tbl_endorsement_CL tbody>tr input:checkbox").each(function(){
			if(endorse_code == $(this).val()){
				$(this).prop("checked", true);
			}
		});
	});
	
	$("#modal_endorsement_CL").modal("show");
});

function confirmDeleteRecord_CL(){
	
	if($("#div_recordCL").innerHeight() > 792){
		$("#div_recordCL").addClass("scroll_policy");
	}else{
		$("#div_recordCL").removeClass("scroll_policy");
	}
	
	var imgOKcount = $("#record_Table_CL i.glyphicon-ok").length;
	if(imgOKcount <= 0)
	{	
		message = "กรุณาเลือกรายการที่ต้องการลบ";
		alertError(message);
	}else{
		
	message = "ต้องการลบรายการใช่หรือไม่";
	alertDeleteError(message);
		
	$("#btn_confirm_del").click(function(){				
		var lastImgOK = $('#record_Table_CL >tbody>tr:last>td:first').attr("id") || 0;	
		var numberImgOK = 0;
		if(lastImgOK == 0){
			numberImgOK = 1;
		}else{
			numberImgOK = Number(lastImgOK.replace("imgOK_record",""))+1;
		}
		
		for(var i = 1;i<=numberImgOK;i++){
				var checked = $('#tbody_record'+i+' >td:first>i').attr("class");
				if(checked == "glyphicon glyphicon-ok"){	
		
					/*คืนค่าที่ลบในตาราง*/
					var tr_bodyRecord = $('#tbody_record'+i+" input[name='record_name[]']").val();
					
					$("#tbl_endorsement_CL tbody>tr").each(function(){
						var lb_endorsement_CL = $(this).find("label").text();
												
						if(lb_endorsement_CL == tr_bodyRecord){
							$(this).show();
						}
					});
					
					deleteTableRow('#tbody_record'+i);	
					
					nameTab 	= "menu_CL_9";
					Statuesave = "N";
					
				}				
		 }
			
		 /*create new order number in span*/
		 var record_count = $("#record_Table_CL>tbody>tr").length;
		 var table = document.getElementById("record_Table_CL");
		 var spans = table.getElementsByClassName("spanRecord_CL");
			for(var j = 0;j<record_count;j++){					
				//alert(spans[j].innerHTML);				
				spans[j].innerHTML = j+1;							 						
			}	
	  });
	}
}

/*ผู้ได้รับความคุ้มครอง*/
function imgCheckbox_person(id)
{
	var imgOK = "imgOK_person"+id;
	
	 		if($('#'+imgOK).is(':checked')) 
				{							
					$('#person_min'+id).prop("disabled", false);	
					$('#person_min_unit'+id).prop("disabled", false);
					$('#person_max'+id).prop("disabled", false);
					$('#person_max_unit'+id).prop("disabled", false);
					$('#person_insurance'+id).prop("disabled", false);
				}
			else
				{					
					$('#person_min'+id).prop("disabled", true);
					$('#person_min_unit'+id).prop("disabled", true);
					$('#person_max'+id).prop("disabled", true);
					$('#person_max_unit'+id).prop("disabled", true);
					$('#person_insurance'+id).prop("disabled", true);
				}
	
}
/*บันทึกผู้ได้รับความคุ้มครอง*/
function bt_person_Confirm_cl() {
	var message = "";
	var error = 0;	
	var imgOKcount = $("#div_person_CL input:checkbox:checked").length;		
	var chk = [];
	var chk_number = [];
	var i = 0;
	
	$('#div_person_CL input:checkbox:checked').each(function(){
		i++;
		chk[i] = $(this).attr("id");
		chk_number[i] = Number(chk[i].replace("imgOK_person",""));
		var imgOK = "imgOK_person"+chk_number[i];
			
		if($('#'+imgOK).is(':checked')) {			
			var person_min = [];
			person_min[i]	= $('#person_min'+chk_number[i]).val();
			if(person_min[i] == ""){
				message = "กรุณาระบุข้อมูลให้ครบ";
				alertError(message);
				error++;
			}
			
			var person_min_unit = [];
			person_min_unit[i] 	= $('#person_min_unit'+chk_number[i]).val();			
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
			person_max_unit[i] 	= $('#person_max_unit'+chk_number[i]).val();			
			if(person_max_unit[i] == "NONE" || person_max_unit[i] == ""){				
				message = "กรุณาระบุข้อมูลให้ครบ";
				alertError(message);
				error++;
					
			}
			
			var person_insurance = [];
			person_insurance[i] 	= $('#person_insurance'+chk_number[i]).val();			
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
		dataSave_protectedPerson();
		message = "บันทึกข้อมูลเรียบร้อย";
		alertSuccess(message);
		
		nameTab 	= "menu_CL_8";
		Statuesave = "Y";
		
	}else if(imgOKcount == 0){
		message = "กรุณาเลือกรายการข้อมูล";
		alertError(message);
		error++;
		
		nameTab 	= "menu_CL_8";
		Statuesave = "N";
	}
}

/*ยืนยันการลบ*/
function alertDeleteError(message)
{
    $('#txt_alert_delete_error').text(message);
    $('#modal_warning_delete').modal();
}

/*ชั้นอาชีพ*/
function checkFromToLevel_CL(id) {
	var from_value = $("#datefromLevel_"+id).val();
	var to_value = $("#datetoLevel_"+id).val();
	
	if(from_value != "" && to_value != ""){
		if(Number(from_value) > Number(to_value)){
			 message = "อัตราเบี้ยฯ เพิ่มตามชั้นอาชีพสูงสุดต้องมากกว่าต่ำสุดเสมอ";
			  alertError(message);
			  $("#datetoLevel_"+id).focus();
			  $("#datetoLevel_"+id).val("");
		}
	}		 
}
function validate_zero_ToLevel(id){
	var to_value = $("#datetoLevel_"+id).val();
	if(to_value == '0' || to_value == '0.00'){
		$("#datetoLevel_"+id).val('');
	  }
}

/*ผู้ได้รับความคุ้มครอง ห้ามใส่ .*/
function validate_dot(id){
	var value = $("#"+id).val();
	if(value == "."){
		$("#"+id).val("");
	}
}


/* Get Data pun */
/* initialize หน้า basic_information */
function initialize_basicInformation(response){	
	$("#cov_cat_id").val(response.Tab_Basic_Information[0].cov_cat_id);
	
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
	
	// table mode
	var row_caseMonth = "";	
	for (i in response.Tab_Basic_Information[0].mode) {
		var obj_caseMonth = response.Tab_Basic_Information[0].mode[i];
			row_caseMonth = "<tr>"+
			  "<td><input name='mode_cl[]' id='mode"+i+"_cl' type='checkbox' value='"+obj_caseMonth.value+"' onclick='check_mode_value(this.id,this.value);'></td>"+
			  "<td><label for='mode"+i+"_cl'>"+obj_caseMonth.pass+"</label></td>"+
			  "<td><label for='mode"+i+"_cl'>"+obj_caseMonth.text+"</label></td>"+
			  "</tr>";
					  
			$("#tbl_BI_Mode_CL tbody").append(row_caseMonth);
	}
	
	// table Filing Channel
	var row_filingChannel = "";		
	for (i in response.Tab_Basic_Information[0].filing_Channel) {
		var obj_filingChannel = response.Tab_Basic_Information[0].filing_Channel[i];
			row_filingChannel = "<tr>"+
				  "<td><input type='checkbox' id='ch_filingCN"+i+"_CL' value='"+obj_filingChannel.pass+"'></td>"+
				  "<td><label for='ch_filingCN"+i+"_CL'>&nbsp;&nbsp;"+obj_filingChannel.text+"</label></td>"+				
				  "</tr>";
						  	
			$("#tbl_BI_FilingCN_CL tbody").append(row_filingChannel);
	}	
	
	/* ประเภทสัญญา */
	var row_categoryLicence = "";	
	for (i in response.Tab_Basic_Information[0].contract_Type) {
		var obj_promiseType = response.Tab_Basic_Information[0].contract_Type[i];
		row_promiseType = "<option value="+obj_promiseType.pass+">"+obj_promiseType.text+"</option>";	
			$("#sl_promise_type_cl").append(row_promiseType);
	}
	
	$("#sl_promise_type_cl option").each(function(){
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
	
	$("#sl_Protection_type_cl option").each(function(){
		if($(this).val() == "CURRENCY"){
			$(this).attr("selected", "selected");
		}
	});
	
	/* ระยะชำระเบี้ยของสัญญาเพิ่มเติม */
	var list_pay_Separately = "";
	for(i in response.Tab_Basic_Information[0].pay_Separately){
		var obj_pay_Separately = response.Tab_Basic_Information[0].pay_Separately[i];
		list_pay_Separately = 	"<tr>" +	
					"<td  class='borderBlack' width='5%'><input id='ch_payment_"+i+"' type='checkbox' onclick='ch_payment_fun ("+i+");' value='"+obj_pay_Separately.pass+"' disabled></td>"+
					"<td class='borderBlack' width='25%' ><label for='ch_payment_"+i+"' id='lb_payment_"+i+"'>"+obj_pay_Separately.pass+"</label></td>"+
					"<td  class='borderBlack' width='70%'>" +
						"<input id='set_Premium_Rate_"+i+"' type='text' class='auto text-right form-control' onblur='check_value_payment("+i+");' value='0.00' data-v-min='0.00' data-v-max='999.99' disabled='disabled'>" +
					"</td>"+
		"</tr>";			  
		$("#tb_Sperately_Pay tbody").append(list_pay_Separately);
	}
	
	$('.auto').autoNumeric('init');
	
	/* ตารางมรณะ ที่ใช้ในการคำนวณอัตราดอกเบี้ย */
	var list_table_death = "";
	for(i in response.Tab_Basic_Information[0].table_Death){
		var obj_table_Death = response.Tab_Basic_Information[0].table_Death[i];
		list_table_death = 	"<tr id='tr_DeathCL"+i+"'>" +	
					"<td  class='borderBlack text-center' width='10% '><input id='ch_D_"+i+"' type='checkbox' value='"+obj_table_Death.pass+"' onclick='ch_Table_D ("+i+");' disabled></td>"+
					"<td class='borderBlack' width='10%' ><label for='ch_D_"+i+"'>"+obj_table_Death.text+"</label></td>"+
					/*"<td  class='borderBlack text-right' width='15%'>" +
						"<input id='in_percent_D_"+i+"' type='text' class='auto text-right form-control' data-v-min='0' data-v-max='100' disabled='disabled'>" +
					"</td>"+*/
					"<td class='borderBlack' width='60%'><label id='textshow_tableD_"+i+"'></label><input type='hidden' name='hdd_mort_id' id='hdd_mort_id"+i+"' value=''></td>" +
					"<td class='borderBlack' width='5%'><input disabled='disabled' id='btn_Adddata_D_"+i+"' type='button' class='btn btn-default btn-primary' value='...' onclick='showModal_Table_D("+i+");'>" + 
			"</td>"+
		"</tr>";			  
		$("#tb_BasicInformation_Death tbody").append(list_table_death);
	}
	
	/* ตารางมรณะ ที่ใช้ในการคำนวณอัตราดอกเบี้ย (เลือก Popup)*/
	var list_table_death_popUp = "";
	for(i in response.Tab_Basic_Information[0].table_Death2){
		var obj_table_Death_popUp = response.Tab_Basic_Information[0].table_Death2[i];
		list_table_death_popUp = "<tr>" +	
				"<td class='borderBlack' width='5%' align='center'><input onclick='ra_table_D ("+i+")' value='"+obj_table_Death_popUp.pass+"' id='ra_table_D_"+i+"' type='radio' name='check_D'></td>"+
				"<td class='borderBlack' width='95%'><Label id='text_Table_D_"+i+"'>"+obj_table_Death_popUp.text+"</Label></td>"+
			"</tr>";			  
		$("#mo_Table_D_CL tbody").append(list_table_death_popUp);
	}
	
	/* ตารางทุพพลภาพที่ใช้ในการคำนวณอัตราเบี้ย */
	var tbl_row_disabilityPremium = "";
	for (i in response.Tab_Basic_Information[0].table_Disability) {
		var obj_disabilityPremium = response.Tab_Basic_Information[0].table_Disability[i];
		tbl_row_disabilityPremium = "<tr id='tr_TPDCL"+i+"'>"+
					"<td class='borderBlack text-center'><input id='ch_TPD_"+i+"' value='"+obj_disabilityPremium.pass+"' onclick='ch_Table_TPD("+i+");' type='checkbox' disabled></td>"+
					"<td class='borderBlack'><label for='ch_TPD_"+i+"'>"+obj_disabilityPremium.text+"</label></td>"+
					/*"<td class='borderBlack text-right'>"+
					"<input id='in_percent_TPD_"+i+"'  type='text' class='auto text-right form-control' data-v-min='0' data-v-max='100' disabled'>"+
					"</td>"+*/
					"<td width='60%' class='borderBlack'><label id='textshow_tableTPD_"+i+"'></label><input type='hidden' name='hdd_tpd_id' id='hdd_tpd_id"+i+"' value=''></td>"+
					"<td  width='5%' class='borderBlack'><input disabled type='button' id ='btn_Adddata_TPD_"+i+"' class='btn btn-default btn-primary' value='...' onclick='showModal_Table_TPD("+i+");'></td>"+
			"</tr>";
		
		$("#tb_BasicInformation_TPD tbody").append(tbl_row_disabilityPremium);
	}
	
	/* ตารางทุพพลภาพที่ใช้ในการคำนวณอัตราเบี้ย (เลือก Popup)*/
	var tbl_row_disabilityPremium_popUp = "";
	for (i in response.Tab_Basic_Information[0].table_Disability2) {
		var obj_disabilityPremium_popUp = response.Tab_Basic_Information[0].table_Disability2[i];
		tbl_row_disabilityPremium_popUp = "<tr>" +	
				"<td class='borderBlack' width='5%' align='center'><input onclick='ra_table_TPD ("+i+")' value='"+obj_disabilityPremium_popUp.pass+"' id='ra_table_TPD_"+i+"' type='radio' name='check_TPD'></td>"+
				"<td class='borderBlack' width='95%'><Label id='text_Table_TPD_"+i+"'>"+obj_disabilityPremium_popUp.text+"</Label></td>"+
			"</tr>";	
		
		$("#mo_Table_TPD_CL tbody").append(tbl_row_disabilityPremium_popUp);
	}
	
	/*ตารางลดหย่อนภาษี*/
	var riderCode = $("#pass_Insurance_coverage_cl").val();
	var tbl_row_taxDeduction = "";
	var rowTax = "";
	
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
		getLayout_tax(rowTax, obj_taxDeduction.file, riderCode);			 	
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
	
	$("#rd_anniversary_cl").prop("checked", true);
	
	if($("#tb_BasicInformation1 tbody>tr").length <= 0){
		addRowBasicInformation1();
		
		$("#tb_BasicInformation1 tbody>tr").addClass("disabledAll");
	}

}

/*Policy wording*/
function initialize_policy_wording(response){
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
							"<a class='open-AddUploadDialog_pdf' data-toggle='modal' data-id='"+j+"' href='#modal_upload_pdf'><button class='btn btn-default btn-primary' type='button' id='btn_pdf_policy"+j+"_CL' onclick='oldFilePDF_policyWording_CL("+obj_policy.pass+",2);'>...</button></a>"+ 									
					  "</div>"+
					 "</td>"+
					 "<td class='text-center borderBlack vertical-middle'>"+
						"<a id='span_reset_pdf"+j+"' class='active_grey' onclick=\"resetFilePolicy_CL("+j+",'pdf');\"><span class='glyphicon glyphicon-refresh'></span></a>"+
					 "</td>"+
					 "<td class='borderBlack' align='center'>"+
					 "<input type='hidden' id='fileId_doc_CL"+j+"'>"+
						"<div class='input-group col-xs-12'>"+
							"<div id='div_word_policy"+j+"_CL' class='filename'>None</div>"+
							"<a class='open-AddUploadDialog_word' data-toggle='modal' data-id='"+j+"' href='#modal_upload_word'><button class='btn btn-default btn-primary' type='button' id='btn_word_policy"+j+"_CL' onclick='oldFilePDF_policyWording_CL("+obj_policy.pass+",1);'>...</button></a>"+									
						"</div>"+
					 "</td>"+
					 "<td class='text-center borderBlack vertical-middle'>"+
						"<a id='span_reset_word"+j+"' class='active_grey' onclick=\"resetFilePolicy_CL("+j+",'word');\"><span class='glyphicon glyphicon-refresh'></span></a>"+
					 "</td>"+									
					 "<td class='text-center borderBlack vertical-middle'>"+
						"<a id='span_history"+j+"' class='active_grey open-HistoryDialog_CL' data-toggle='modal' data-id='"+j+"' onclick='history_policyWording_CL("+obj_policy.pass+")'><span class='glyphicon glyphicon-time'></span></a>"+										
					 "</td>"+										
					 "</tr>";
		  
		  $("#Policy_Table_CL tbody").append(list_policy);		  		  
	}
}

/* initialize หน้า ผู้ได้รับความคุ้มครอง */
function initialize_ProtectedPerson(response){	
	/* ตารางผู้ได้รับความคุ้มครอง */
	var row_tbPerson_protected = "";
	for (i in response.Tab_Protected_Person[0].table_Protected_Person) {
		var obj_tbPerson_protected = response.Tab_Protected_Person[0].table_Protected_Person[i];
			row_tbPerson_protected = "<tr>"+
			"<td class='borderBlack text-center vertical-middle'>"+
			"<input type='checkbox' id='imgOK_person"+i+"' value='"+obj_tbPerson_protected.value+"' onclick='imgCheckbox_person("+i+");'>"+
		"</td>"+
		"<td class='borderBlack vertical-middle'>"+
			"<input type='text' name='person_name[]' id='person_name"+i+"' class='form-control margin-padding0 text-center' value='"+obj_tbPerson_protected.text+"' readonly>"+										
		"</td>"+
		"<td width='10%' class='borderBlack'>"+
			"<input type='text' name='person_min[]' id='person_min"+i+"' class='auto text-right form-control' onblur='check_fromto("+i+");' data-v-min='0' data-v-max='999' maxlength='3' disabled>"+
		"</td>"+
		"<td width='13%' class='borderBlack'>"+
			"<select name='person_min_unit[]' id='person_min_unit"+i+"' class='form-control text-center unit_calendarProtectedPerson' onchange='check_fromtoUnit("+i+");' disabled>"+
				"<option value='NONE'>None</option>"+
			"</select>"+
		"</td>"+
		"<td width='10%' class='borderBlack'>"+
			"<input type='text' name='person_max[]' id='person_max"+i+"' class='auto text-right form-control' onblur='check_fromto("+i+");' data-v-min='0' data-v-max='999' maxlength='3' disabled>"+
		"</td>"+
		"<td width='13%' class='borderBlack text-center'>"+
			"<select class='form-control unit_calendarProtectedPerson' name='person_max_unit[]' id='person_max_unit"+i+"' onchange='check_fromtoUnit("+i+");' disabled>"+
				"<option value='NONE'>None</option>"+
			"</select>"+
		"</td>"+
		"<td class='borderBlack'>"+
			"<select name='person_insurance[]' id='person_insurance"+i+"' class='form-control text-center person_insurance' disabled>"+
				"<option value='NONE'>None</option>"+
			"</select>"+
		"</td>"+
	"</tr>";
				
	$("#tb_personProtected tbody").append(row_tbPerson_protected);
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

/* initialize หน้า การคำนวณเบี้ยประกัน */
function initialize_cal_insurance_premiums(response){	
	var riderCode = $("#pass_Insurance_coverage_cl").val();
	$('#sl_menu3_insurance_premium_cl').prop("disabled",true);
	/*$("#ch_Base_rate").prop("disabled",false);
	$("#ch_Base_rate").prop( "checked", true );*/
	$("#ch_insurance_premium_Extra_cl").prop("disabled",true);
	$("#bt_view_cv_extraRate").attr("disabled",true);
	$("#tb_premiumLevel_CL *").prop("disabled",true);
	
	/* ช่วงอายุ */
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
  	
  	 /*var type_selectCal = "Em_Age 7_"+riderCode+".txt";
	 selectTypeCal_CL(type_selectCal,1);*/
	$("#spanBoxCal1_CL").attr("disabled",true);
	
	/* ตารางเบี้ยประกัน */
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
	
	var list_ExtraRate = "";	
	for (i in response.Tab_cal_insurance_premiums[0].selectbox_Extra_Premiums) {
		var obj_ExtraRate = response.Tab_cal_insurance_premiums[0].selectbox_Extra_Premiums[i];
		list_ExtraRate = "<option value='"+obj_ExtraRate.pattern[0].layout+"' data-subcat='"+obj_ExtraRate.pattern[1].sub_rate_cat+"'>"+obj_ExtraRate.pattern[2].text+"</option>";
		  
		$("#sl_insurance_premium_Extra_cl").append(list_ExtraRate);		  		  
	}

	var riderCode = $("#riderCode_CL").val();
	var list_EM = "";	
	for (i in response.Tab_cal_insurance_premiums[0].em_Age) {
		var obj_EM = response.Tab_cal_insurance_premiums[0].em_Age[i].pattern[0].layout;
		list_EM = obj_EM+riderCode+".txt";
		selectTypeCal_CL(list_EM,1);
		
		$("#spanBoxCal1_CL").attr("disabled",true);	  		  
	}
	
	/*EM*/
	var tb_em_hidden = "<input type='hidden' id='em_rateLayout1' value=''>"+
	"<input type='hidden' id='em_fileID1' value=''>";

	$("#div_fileCal1_CL").append(tb_em_hidden);
	
	/* rate cat id */
	$("#rateCat_tbStardard").val(response.Tab_cal_insurance_premiums[0].tb_premiums.premiums_cal_layout_0[0].rate_cat_id_specific);
	$("#rateCat_tbStardard_age").val(response.Tab_cal_insurance_premiums[0].tb_premiums.premiums_cal_layout_0[0].rate_cat_id_age_Band);
	
	/*เบี้ยเพิ่ม*/
	$("#rateCat_tbExtra").val(response.Tab_cal_insurance_premiums[0].tb_premiums.premiums_cal_layout_1[0].rate_cat_id_specific);
	/*EM file*/
	$("#rateCat_inputEM").val(response.Tab_cal_insurance_premiums[0].tb_premiums.premiums_cal_layout_2[0].rate_cat_id_specific);
	$("#rateSubCat_inputEM").val(response.Tab_cal_insurance_premiums[0].em_Age[0].pattern[1].sub_rate_cat);
	$("#pattern_inputEM").val(response.Tab_cal_insurance_premiums[0].em_Age[0].pattern[0].layout);
	
}

/* initialize หน้า ตารางมูลค่ากรมธรรม์ */
function initialize_table_policy_value(response){
	
	$("#rateCat_tbRiskStardard").val(response.Tab_table_policy_value[0].standard_risk[0].rate_cat_id_specific);
	$("#rateCat_tbRiskStardard_ageBand").val(response.Tab_table_policy_value[0].standard_risk[0].rate_cat_id_age_Band);
	$("#rateCat_tbRiskLowStardard").val(response.Tab_table_policy_value[0].standard_risk_row[0].rate_cat_id_specific);
	
	/* ความเสี่ยงมาตรฐาน ตารางมูลค่ากรมธรรม์ */
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
	
	/* ความเสี่ยงต่ำกว่ามาตรฐาน ตารางมูลค่ากรมธรรม์ */
	var list_NoRisk = "";
	for (i in response.Tab_table_policy_value[0].selectbox_standard_risk_row) {
		var obj_ExtraRate = response.Tab_table_policy_value[0].selectbox_standard_risk_row[i];
		list_NoRisk = "<option value='"+obj_ExtraRate.pattern[0].layout+"' data-subcat='"+obj_ExtraRate.pattern[1].sub_rate_cat+"'>"+obj_ExtraRate.pattern[2].text+"</option>";
		  
		$("#dbBox2_CL").append(list_NoRisk);		  		  
	}
}

/* initialize หน้า ผลประโยชน์และความคุ้มครอง */
function initialize_coverage_benefits(response){
	
	/* ตารางผลประโยชน์และความคุ้มครอง */
	var row_table_coverageBenefits = "";
	for (i in response.Tab_Benefits[0].permanent_cat) {
		var obj_table_coverageBenefits = response.Tab_Benefits[0].permanent_cat[i];
			row_table_coverageBenefits = "<tr id='tbody_benefitCL"+i+"' class='borderBlack'>"+
		  		"<td id='imgOK_benefitCL"+i+"' data-value='"+obj_table_coverageBenefits.pass+"' class='text-center borderBlack' onclick='imgCheckbox_benefit_CL("+i+");' style='vertical-align: middle;'><i class='glyphicon glyphicon-edit' id='iconBenefitCL"+i+"'></i></td>"+
		  		"<td class='borderBlack'>"+obj_table_coverageBenefits.pass+" - "+obj_table_coverageBenefits.text+"</td>"+
		  	"</tr>";
				
			$("#tbl_benefit_CL tbody").append(row_table_coverageBenefits);
	}
}
/* initialize หน้า tab ความคุ้มครอง */
function lookupCatValueAcessData(response){
	
	/* unit */
	var lookup_unit = new Array();
	for(i in response.selectLookupBenefitdata[0].unit){
		var obj = response.selectLookupBenefitdata[0].unit[i];
		lookup_unit.push(obj.pass);
		lookup_unit.push(obj.text);
	}
	$("#lookup_unit").val(lookup_unit);
	
	/* frequency */
	var lookup_frequency = new Array();
	for(i in response.selectLookupBenefitdata[0].frequency){
		var obj = response.selectLookupBenefitdata[0].frequency[i];
		lookup_frequency.push(obj.pass);
		lookup_frequency.push(obj.text);
	}
	$("#lookup_frequency").val(lookup_frequency);
	
	/* factor unit */
	var lookup_factor_unit = new Array();
	for(i in response.selectLookupBenefitdata[0].unitFactor){
		var obj = response.selectLookupBenefitdata[0].unitFactor[i];
		lookup_factor_unit.push(obj.pass);
		lookup_factor_unit.push(obj.text);
	}
	$("#lookup_factor_unit").val(lookup_factor_unit);
	
	/* factor Unit */
	var lookup_factor_unit = new Array();
	for(i in response.selectLookupBenefitdata[0].factor_unit){
		var obj = response.selectLookupBenefitdata[0].factor_unit[i];
		lookup_factor_unit.push(obj.pass);
		lookup_factor_unit.push(obj.text);
	}
	$("#lookup_factorUnit").val(lookup_factor_unit);
	
	/* factor Scope */
	var lookup_factor_scope = new Array();
	for(i in response.selectLookupBenefitdata[0].factor_scope){
		var obj = response.selectLookupBenefitdata[0].factor_scope[i];
		lookup_factor_scope.push(obj.pass);
		lookup_factor_scope.push(obj.text);
	}
	$("#lookup_factorScope").val(lookup_factor_scope);
}

/* initialize หน้า tab บันทึกสลักหลัง */
function initialize_save_Endorse(response){
	
	/* รายการขยายความคุ้มครอง */
	var row_Endorse = "";
	for (i in response.Tab_Endorse) {
		var obj_Endorse = response.Tab_Endorse[i];
		row_Endorse = "<tr id='tr_endorsementSelect"+i+"'>" +
			"<td class='text-center vertical-middle'><input type='checkbox' name='opt_endorsementSelect[]' id='opt_endorsementSelect"+i+"' value="+obj_Endorse.pass+"></td>" +
			"<td class='text-center vertical-middle'><label for='opt_endorsementSelect"+i+"'>"+obj_Endorse.pass+"</label></td>"+	
			"<td class='vertical-middle'><label id='lb_endorsementSelect"+i+"'>"+obj_Endorse.text+"</label></td>" +
		"</tr>";
				
		$("#tbl_endorsement_CL tbody").append(row_Endorse);
			
	}
}
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
function setting_ApproveCL(response){
	var obj_BI = response.Tab_Basic_Information[0];
	/*NEW , UPDATE = แก้ไข, REQUEST_FOR_APPROVE = รออนุมัติ, APPROVED = อนุมัติ, REJECTED = ไม่อนุมัติ*/
	//var status = "APPROVED";
	var status = obj_BI.status;
	var status_RP = obj_BI.status_RP;
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
		 $("#menu_CL_8").removeClass("disabledAll");
		 $("#menu_CL_3").removeClass("disabledAll");
		 $("#menu_CL_4").removeClass("disabledAll");
		 $("#menu_CL_5").removeClass("disabledAll");
		 $("#menu_CL_9").removeClass("disabledAll");
	     $("#menu_CL_6").removeClass("disabledAll");
	}
}

/* showcase by PUN*/
function showcase_basicInfo(response){	
	// set data
	var obj_data = response.Tab_Basic_Information[0];
	$("#cov_cat_id").val(obj_data.cov_cat_id);
	$("#thai_Name_cl").val(obj_data.nameTH);
	$("#eng_Name_cl").val(obj_data.nameEN);
	$("#appStart_date_cl").val(obj_data.sale_eff_date);
	$("#appTo_date_cl").val(obj_data.sale_exp_date);
	$("#age_Start_cl").val(obj_data.age_Start);
	$("#age_To_cl").val(obj_data.age_To);
	$("#key_rider_code_cl").val(obj_data.rider_code);
	
	if(obj_data.maximum_Protection_To != "0"){
		$("#maximum_Protection_To_cl").val(obj_data.maximum_Protection_To);
		$("#validate_input6_2cl").hide();
	}else{
		$("#maximum_Protection_To_cl").val("");
		$("#validate_input6_2cl").show();
	}
	
	if(obj_data.age_Start_unit == "NONE" || obj_data.age_Start_unit == ""){
		$("#dmy_5_cl").val("NONE").attr('selected', 'selected');
	}else{
		$("#dmy_5_cl").val(obj_data.age_Start_unit).attr('selected', 'selected');
	}
	
	if(obj_data.age_To_unit == "NONE" || obj_data.age_To_unit == ""){
		$("#dmy_6_cl").val("NONE").attr('selected', 'selected');
	}else{
		$("#dmy_6_cl").val(obj_data.age_To_unit).attr('selected', 'selected');
	}
	
	if(obj_data.contract_type == "NONE" || obj_data.contract_type == ""){
		$("#sl_promise_type_cl").val("NONE").attr('selected', 'selected');
	}else{
		$("#sl_promise_type_cl").val(obj_data.contract_type).attr('selected', 'selected');
	}
	
	if(obj_data.coverage_type == "NONE" || obj_data.coverage_type == ""){
		$("#sl_Protection_type_cl").val("NONE").attr('selected', 'selected');
	}else{
		$("#sl_Protection_type_cl").val(obj_data.coverage_type).attr('selected', 'selected');
	}
	
	$("#text_Calculate_premiums_1cl").val(parseFloat(obj_data.prem_Rate*100).toFixed(2));
	$("#text_Calculate_premiums_2cl").val(parseFloat(obj_data.sum_decr_rate*100).toFixed(2));
	$("#text_tax_healthCL").val(parseFloat(obj_data.tax_health_prem*100).toFixed(2));
	
	
	/*mode*/
	for (i in obj_data.mode) {
		var obj_BI_mode = obj_data.mode[i];	
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
	for (i in obj_data.filing_Channel) {
		var obj_BI_filing = obj_data.filing_Channel[i];	
		$("#tbl_BI_FilingCN_CL input:checkbox").each(function(){			
			if($(this).val() == obj_BI_filing.value){
				$(this).prop("checked", true);
			}
		});
	}
	
	/*เพศ*/
	if(obj_data.sex == "EITHER"){
		$("#ch_male_cl, #ch_female_cl").prop("checked",true);
	}else if(obj_data.sex == "MALE"){
		$("#ch_male_cl").prop("checked",true);
		$("#ch_female_cl").prop("checked",false);
	}else if(obj_data.sex == "FEMALE"){
		$("#ch_female_cl").prop("checked",true);
		$("#ch_male_cl").prop("checked",false);
	}
	
	/*ระยะประกันของสัญญาประกันชีวิต*/
	// คุ้มครองถึงอายุ
	if(obj_data.insurance_period_radio == "TO_AGE"){
		$("#rd_anniversary_cl").prop("checked", true);
	}else{
		$("#rd_Time_length_cl").prop("checked", true);
	}
	// ระยะเวลาคุ้มครอง
	if(obj_data.insurance_period_radio == "TO_YEAR"){
		var row = "";
		$("#tb_BasicInformation1 tbody>tr").remove();
		
		for (i in obj_data.insurance_period) {
			var obj_BI_insurance_period = obj_data.insurance_period[i];	
					
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
			"<td width='21%' class='borderBlack'><input id='datefrom_"+numberImgOK+"' class='auto form-control text-center margin-padding0' type='text' onkeypress='validate(event); validate_zero_tovalue("+numberImgOK+")' onkeyup='validate_zero_tovalue("+numberImgOK+");' onblur='checkFromToPeriod_CL("+numberImgOK+");' data-v-min='0' data-v-max='999' maxlength='3' value='"+obj_BI_insurance_period.from+"'></td>"+
			"<td width='21%' class='text-center borderBlack'></td>"+
			"<td width='21%' class='borderBlack'><input id='dateto_"+numberImgOK+"' class='auto form-control text-center margin-padding0' type='text' onkeypress='validate(event); validate_zero_tovalue("+numberImgOK+")' onkeyup='validate_zero_tovalue("+numberImgOK+");' onblur='checkFromToPeriod_CL("+numberImgOK+");' data-v-min='0' data-v-max='999' maxlength='3' value='"+obj_BI_insurance_period.to+"'></td>"+
			"<td width='21%' class='text-center borderBlack'></td>"+
			"</tr>";
		
			$("#tb_BasicInformation1 tbody").append(row);
			$('.auto').autoNumeric('init');
			
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
		for (i in obj_data.insurance_period) {
			var obj_BI_insurance_period = obj_data.insurance_period[i];
			$("#text_anniversary_cl").val(obj_BI_insurance_period.to).prop("disabled", false);
			if(obj_BI_insurance_period.to_unit == "NONE" || obj_BI_insurance_period.to_unit == ""){
				$("#dmy_1_cl").val("NONE").attr('selected', 'selected').prop("disabled", false);
			}else{
				$("#dmy_1_cl").val(obj_BI_insurance_period.to_unit).attr('selected', 'selected').prop("disabled", false);
			}
		}
		
		$("#addRowBasicInfo_CL, #deleteRowBasicInfo_CL").prop("disabled", true);
	}
	
	/*ระยะชำระเบี้ยของสัญญาประกันชีวิต*/
	if(obj_data.premium_preiod_radio != ""){
		$("#ch_PremRider_cl").prop("checked", true);
		$("#rd_insurance_premium_cl, #rd_Time_insurance_premium_cl").prop("disabled", false);
		
		if(obj_data.premium_preiod_radio == "TO_AGE"){
			$("#rd_insurance_premium_cl").prop("checked", true);
		}else{
			$("#rd_Time_insurance_premium_cl").prop("checked", true);
		}
			
		if(obj_data.premium_preiod_radio == "TO_AGE"){
			/*ชำระถึงอายุ*/
			$("#text_insurance_premium_cl").val(obj_data.premium_num).prop("disabled", false);
			if(obj_data.premium_preiod_unit == "NONE" || obj_data.premium_preiod_unit == ""){
				$("#dmy_3_cl").val("NONE").attr('selected', 'selected').prop("disabled", false);
			}else{
				$("#dmy_3_cl").val(obj_data.premium_preiod_unit).attr('selected', 'selected').prop("disabled", false);
			}
		}else{
			/*ระยะชำระเบี้ย*/	
			$("#text_Time_insurance_premium_cl").val(obj_data.premium_num).prop("disabled", false);
			if(obj_data.premium_preiod_unit == "NONE" || obj_data.premium_preiod_unit == ""){
				$("#dmy_4_cl").val("NONE").attr('selected', 'selected').prop("disabled", false);
			}else{
				$("#dmy_4_cl").val(obj_data.premium_preiod_unit).attr('selected', 'selected').prop("disabled", false);
			}
		}
		/*แบ่งจ่ายได้*/
		if($("#rd_Time_insurance_premium_cl").prop("checked") == true && $("#dmy_4_cl option:selected").val() == "YEAR"){
		//if(obj_data.premium_preiod_unit == "YEAR"){
			$("#ch_sperately_pay_ch").prop("disabled", false);
		}
		
		if(obj_data.pay_separately_checkbox == true){
			$("#ch_sperately_pay_ch").prop("checked", true)		
		}
		
		for (i in obj_data.pay_separately) {
			var obj_BI_pay_separately = obj_data.pay_separately[i];
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
		
	}

	/*ตารางมรณะ*/	
	var male = $("#ch_male_cl").val();
	var female = $("#ch_female_cl").val();
	if(obj_data.mortality_Tli.length > 0){
		for (i in obj_data.mortality_Tli) {
			var obj_BI_mortality_Tli = obj_data.mortality_Tli[i];
			
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
	if(obj_data.tpd_Tli.length > 0){
		for (i in obj_data.tpd_Tli) {
			var obj_BI_tpd_Tli = obj_data.tpd_Tli[i];
			
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
	
	/*ลดหย่อนภาษี*/
	if(obj_data.table_TaxReduce.length > 0){
		replaceLayout_tax(obj_data.passInsurance);
		
		for (i in obj_data.table_TaxReduce) {
			var obj_BI_Tax = obj_data.table_TaxReduce[i];
			
			$("#tb_TaxReduce tbody>tr").each(function(){
				var dataID = Number($(this).attr("data-id"));
				var ID = $(this).attr("id");
					ID = ID.replace("tbody_TaxReduce_","");
				if(dataID == obj_BI_Tax.pass){
					$(this).find("td:nth-child(3) input:text").val(obj_BI_Tax.layout);
					$(this).find("#hdd_layoutID"+ID).val(obj_BI_Tax.id);
					$(this).find("#hdd_fileID"+ID).val(obj_BI_Tax.fileID);
					$(this).find("td:nth-child(4) span,td:nth-child(5) span,td:nth-child(6) span").removeClass("activecolorgray").addClass("activecolorblue");
					$(this).find("td:nth-child(5) span").attr("onclick", "openFileTextRider_CL('"+obj_BI_Tax.layout+"','"+obj_BI_Tax.ref+"',41,'tb_TaxReduce_view','modal_TableTaxReduce')" )
					$(this).find("td:nth-child(6) span").attr("onclick", "openFile_target('"+obj_BI_Tax.layout+"','"+obj_BI_Tax.ref+"','txt_download')");
				}
			});		
		}
	}	
	
	/*ปิดดอกจันทร์*/
	if(obj_data.nameTH != ""){
		$("#validate_input2_cl").hide();
	}
	
	if($("#maximum_Protection_To_cl").length > 0){
		$("#validate_input6_2cl").hide();
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
	
	/*อายุที่ได้รับความเห็นชอบ*/
	var age_Start_cl = $("#age_Start_cl").val();
	var age_unitStart_cl = $("#dmy_5_cl option:selected").val();
	var age_To_cl = $("#age_To_cl").val();
	var age_unitTo_cl = $("#dmy_6_cl option:selected").val();
	
	if(age_Start_cl != "" && age_unitStart_cl != "None" && age_To_cl != "" && age_unitTo_cl != "None"){
		$("#validate_input6_1cl").hide();
	}	
}

/*showcase Tab Policy Wording*/
function showcase_policy_wording(response){
	
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
					GetFileModalPolicy_CL(obj_policy.doc_type_id, obj_policy_file.file_id, obj_policy_file.file_name,obj_policy_file.file_ref, type)
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
		    async:false,
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

/* showcase Tab ผู้ได้รับความคุ้มครอง */
function showcase_ProtectedPerson(response){
	var obj = response.Tab_protected_person[0];

	for (i in obj.protected_person) {
		var obj_protecetPerson = obj.protected_person[i];
		$("#tb_personProtected tbody>tr").each(function(){
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
function showcase_insurance_premiums(response){
	var obj_CP = response.Tab_cal_insurance_premiums[0];
	var rcode = $("#pass_Insurance_coverage_cl").val();
	
	$("#ch_insurance_premium_Extra_cl").prop("disabled", false);
	
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
					$(this).find("input:checkbox").attr("onclick","unselect_AgeBand("+id+")");
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
	if(obj_CP.table_insurance_premium.length > 0 || obj_CP.prem_disc == true || obj_CP.Prem_occ_charge.length > 0){		
		$("#ch_standard_premium_cl").prop("checked", true);
		$("#tb_premiumLevel_CL input").prop("disabled", false);
		$("#ch_importInsurance_cl").prop("disabled", false);
		
		/*dropdown*/
		for (i in obj_CP.select_insurance_premium) {
			var obj_CP_select_insurance_premium = obj_CP.select_insurance_premium[i];
			if(obj_CP_select_insurance_premium.pass == 1){
				var dd_text = obj_CP_select_insurance_premium.text;
			}
		}
		//$("#ch_Base_rate").prop("disabled", false).prop("checked", true);
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
			var lastSubID = 0;
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
					type = type.replace("_"+rcode+".txt","");*/	
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
									"<input type='text' class='form-control' id='fileuploads_PMRateText"+lastID+"_CL' readonly='' value='"+obj_CP_table_insurance_premium.file+"'>"+ 
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
					
					$("#fileuploads_PMRateText"+lastID+"_CL").attr("placeholder", dd_value+rate_type+"_"+rcode+".txt");				  	
					var uploadfile = "selectFileRate_CL("+select_type+",'s','fileuploads_PMRate"+lastID+"_CL','"+dd_value+rate_type+"_"+rcode+"','','sl_menu3_insurance_premium_cl','span_PM_Rateopen_"+lastID+"')";					
					$("#fileuploads_PMRate"+lastID+"_CL").attr('onchange', uploadfile);	
					
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
						tbl_name = "tbl_PMRatePlan4Col_CL";
						modal_name = "modal_PMRate4Col_CL";
					}else if(select_type == 3){
						tbCal = 41;
						tbl_name = "tbl_PMRatePlan4Col_CL";
						modal_name = "modal_PMRate4Col_CL";
					}
					$("#span_PM_Rateopen_"+lastID+">span").attr("onclick", "openFileTextRider_CL('"+obj_CP_table_insurance_premium.file+"','"+obj_CP_table_insurance_premium.ref+"',"+tbCal+",'"+tbl_name+"','"+modal_name+"')");
					$("#span_PM_Ratedownload_"+lastID+">span").attr("onclick", "openFile_target('"+obj_CP_table_insurance_premium.file+"','"+obj_CP_table_insurance_premium.ref+"','txt_download')");

					
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
					/*if(response.Tab_table_policy_value[0].table_policy_value.length <= 0 && obj_CP_table_insurance_premium.type == ""){*/
					if(obj_CP_table_insurance_premium.type == ""){
						var new_riskStardard = "<tr id='tbody_Rate_Value"+num_row+"' data-id='"+num_row+"' data-level='1'>"+
						  "<td class='borderBlack vertical-middle'><label>"+type+"</label></td>"+
						  "<td class='borderBlack'>"+
						  	"<div class='input-group'>"+
							"<input type='text' class='form-control' id='fileuploads_RateValueText"+num_row+"_CL' readonly=''>"+ 
								"<label class='input-group-btn'>"+ 
								  "<span id='spanRateValue"+num_row+"_CL' class='btn btn-primary' disabled>..."+
								  	/*"<font id='validate_RateValue"+num_row+"_CL' style='color: red;'>*</font>..."+*/
								  		"<input id='fileuploads_RateValue"+num_row+"_CL' type='file' accept='text/plain' style='display: none;' disabled>"+ 
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
								"<input type='text' class='form-control' id='fileuploads_PMRateText"+thisID_Sub+"_CL' readonly='' value='"+obj_CP_table_insurance_premium.file+"'>"+ 
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
							$("#fileuploads_PMRateText"+thisID_Sub+"_CL").attr("placeholder", dd_value+rate_type+"_"+age_band+"_"+rcode+".txt");				  	
							var uploadfile = "selectFileRate_CL("+select_type+",'b','fileuploads_PMRate"+thisID_Sub+"_CL','"+dd_value+rate_type+"_"+age_band+"_"+rcode+"','','sl_menu3_insurance_premium_cl','span_PM_Rateopen_"+thisID_Sub+"')";					
							$("#fileuploads_PMRate"+thisID_Sub+"_CL").attr('onchange', uploadfile);	
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
								tbl_name = "tbl_PMRatePlan4Col_CL";
								modal_name = "modal_PMRate4Col_CL";
							}else if(select_type == 3){
								tbCal = 41;
								tbl_name = "tbl_PMRatePlan4Col_CL";
								modal_name = "modal_PMRate4Col_CL";
							}
							$("#span_PM_Rateopen_"+thisID_Sub+">span").attr("onclick", "openFileTextRider_CL('"+obj_CP_table_insurance_premium.file+"','"+obj_CP_table_insurance_premium.ref+"',"+tbCal+",'"+tbl_name+"','"+modal_name+"')");
							$("#span_PM_Ratedownload_"+thisID_Sub+">span").attr("onclick", "openFile_target('"+obj_CP_table_insurance_premium.file+"','"+obj_CP_table_insurance_premium.ref+"','txt_download')");
							
							
						}
					
					});	

				}

				// อัตราเบี้ยเพิ่มตามขั้นอาชีพ
				if(obj_CP.Prem_occ_charge.length > 0){		
					for (i in obj_CP.Prem_occ_charge) {
						var obj = obj_CP.Prem_occ_charge[i];
						$("#tb_premiumLevel_CL tbody>tr").each(function(){
							if($(this).find('td:nth-child(1) label').text() == obj.lvclass){
								 $(this).find('td:nth-child(2) input').val((obj.start*100).toFixed(2)).prop("disabled", false);
								 $(this).find('td:nth-child(3) input').val((obj.to*100).toFixed(2)).prop("disabled", false);
							}
						});
					}
				}

			}
			
		}	
	}
	
	/*เบี้ยเพิ่มพิเศษ*/
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
			/*var aa = lastID;*/
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
				
				/*insert pattern for new upload*/		
				var file_layout = dd_value+type+"_"+rcode;
				var uploadfile = "selectFileRate_CL(4,'b','fileuploads_ExtraRate"+aa+"_CL','"+file_layout+"','','sl_insurance_premium_Extra_cl','span_Extra_Rateopen_"+aa+"')";
				
				$("#fileuploads_ExtraRateText"+aa+"_CL").attr("placeholder",file_layout+".txt");
				$("#fileuploads_ExtraRate"+aa+"_CL").attr("onchange",uploadfile);
				/*end insert*/
				
				$("#span_Extra_Rateopen_"+aa+">span").attr("onclick", "openFileTextRider_CL('"+obj_extraRate.file+"','"+obj_extraRate.ref+"',51,'tbl_ExtraRatePlan_CL','modal_ExtraRate_CL')");
				$("#span_Extra_Ratedownload_"+aa+">span").attr("onclick", "openFile_target('"+obj_extraRate.file+"','"+obj_extraRate.ref+"','txt_download')");
				
				
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
				$("#spanBoxCal1_CL").attr("disabled", false);
				$("#select_fileCal_1_CL, #cv_InputExtra_Rate_cl").prop("disabled", false);
			}	
			
			var obj_EM = obj_CP.em_Age[0];
		
			if(obj_CP.em_Age.length > 0){
				$("#input_fileCal_1_CL").val(obj_EM.file);
	
				if(obj_EM.file != ""){
					$("#validate_filerate1_CL").css("display","none");
					$("#spanBoxCal1_CL").attr("disabled", false);
					$("#cv_InputExtra_Rate_cl").prop("disabled", false);
					$("#select_fileCal_1_CL").attr("disabled", false);
					$("#cv_InputExtra_Rate_cl").attr("onclick", "openFileTextRider_CL('"+obj_EM.file+"','"+obj_EM.ref+"',54,'tb_inputExtra_RateView','modal_inputExtra_RateView')")
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
}

/* showcase Tab ตารางมูลค่ากรมธรรม์ */
function showcase_table_policy_value(response){
	var obj_PV = response.Tab_table_policy_value[0];
	var rcode = $("#pass_Insurance_coverage_cl").val();

	/*ความเสี่ยงมาตรฐาน*/
	if(obj_PV.table_policy_value.length > 0){
		$("#cbBox1_CL").prop("checked", true);

		/*dropdown*/
		for (i in obj_PV.select_policy_value) {
			var obj_PV_select_policy_value = obj_PV.select_policy_value[i];
			if(obj_PV_select_policy_value.pass == 1){
				var dd_text = obj_PV_select_policy_value.text;
			}
		}
		
		$("#dbBox1_CL").prop("disabled", false);
		$("#dbBox1_CL option:contains("+dd_text+")").attr("selected", "selected");
		//$("#tb_RateValue1 tbody>tr *").remove();
		
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
				placeholder = dd_pattern1+rate_type+"_"+rcode+".txt หรือ "+dd_pattern2+rate_type+"_"+rcode+".txt";
				uploadfile = "selectFileRate_CL(5,'s','fileuploads_RateValue"+lastID+"_CL','"+dd_pattern1+rate_type+"_"+rcode+"','"+dd_pattern2+rate_type+"_"+rcode+"','dbBox1_CL','span_RateValueopen_"+lastID+"')";	
			}else{
				placeholder = dd_pattern1+rate_type+"_"+rcode+".txt";
				uploadfile = "selectFileRate_CL(5,'s','fileuploads_RateValue"+lastID+"_CL','"+dd_pattern1+rate_type+"_"+rcode+"','','dbBox1_CL','span_RateValueopen_"+lastID+"')";
			}
			
			$("#fileuploads_RateValueText"+lastID+"_CL").attr("placeholder", placeholder);				  	
						
			$("#fileuploads_RateValue"+lastID+"_CL").attr('onchange', uploadfile);
			$("#fileuploads_RateValue"+lastID+"_CL").attr("disabled", false);
			
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
				placeholder = dd_pattern1+rate_type+"_"+age_band+"_"+rcode+".txt หรือ "+dd_pattern2+rate_type+"_"+age_band+"_"+rcode+".txt";
				uploadfile = "selectFileRate_CL(5,'b','fileuploads_RateValue"+thisID_Sub+"_CL','"+dd_pattern1+rate_type+"_"+age_band+"_"+rcode+"','"+dd_pattern2+rate_type+"_"+age_band+"_"+rcode+"','dbBox1_CL','span_RateValueopen_"+thisID_Sub+"')";	
			}else{
				placeholder = dd_pattern1+rate_type+"_"+age_band+"_"+rcode+".txt";
				uploadfile = "selectFileRate_CL(5,'b','fileuploads_RateValue"+thisID_Sub+"_CL','"+dd_pattern1+rate_type+"_"+age_band+"_"+rcode+"','','dbBox1_CL','span_RateValueopen_"+thisID_Sub+"')";
			}
			
			$("#fileuploads_RateValueText"+thisID_Sub+"_CL").attr("placeholder", placeholder);				  						
			$("#fileuploads_RateValue"+thisID_Sub+"_CL").attr('onchange', uploadfile);
			$("#fileuploads_RateValue"+thisID_Sub+"_CL").attr("disabled", false);
			
		});
		
		if(obj_PV.table_policy_value.length > 0){		

			var lastID = $("#tb_PM_Rate1>tbody>tr[data-level='1']").data("id");
			var lastSubID = 0;
			for (i in obj_PV.table_policy_value) {
				var obj_PV_table_policy_value = obj_PV.table_policy_value[i];
				var type = obj_PV_table_policy_value.sub_code;
				var band = obj_PV_table_policy_value.type;
				
				/**************************************/
				/*set cv table*/	
				if(obj_PV_table_policy_value.type == ""){
					$("#tb_RateValue1 tbody>tr[data-level='1']").each(function(){
						var lastID = $(this).attr("id");
							lastID = lastID.replace("tbody_Rate_Value","");
						var rate_type = $(this).find("td:nth-child(1) label").text();
						
						if(type == rate_type){
							$(this).find("td:nth-child(2) input:text").val(obj_PV_table_policy_value.file);
							$(this).find("td:nth-child(2) input[type='hidden']").eq(0).val(obj_PV_table_policy_value.layout);
							$(this).find("td:nth-child(2) input[type='hidden']").eq(1).val(obj_PV_table_policy_value.fileID);
							
							$(this).find("td:nth-child(3) a").attr("disabled", false);
							$(this).find("td:nth-child(3) span").attr("disabled", false).removeClass("activecolorgray").addClass("activecolorblue").attr("onclick", "openFileTextRider_CL('"+obj_PV_table_policy_value.file+"','"+obj_PV_table_policy_value.ref+"',5,'tbl_StandardRisk_CL','cvStandardRisk_CL')")
							
							$(this).find("td:nth-child(4) a").attr("disabled", false);
							$(this).find("td:nth-child(4) span").attr("disabled", false).removeClass("activecolorgray").addClass("activecolorblue").attr("onclick", "openFile_target('"+obj_PV_table_policy_value.file+"','"+obj_PV_table_policy_value.ref+"','txt_download')");
							$(this).find("td:nth-child(2) input[type='file']").attr("disabled", false);
							
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
							$(this).find("td:nth-child(2) input:text").val(obj_PV_table_policy_value.file);
							$(this).find("td:nth-child(2) input[type='hidden']").eq(0).val(obj_PV_table_policy_value.layout);
							$(this).find("td:nth-child(2) input[type='hidden']").eq(1).val(obj_PV_table_policy_value.fileID);
						
							$(this).find("td:nth-child(3) a").attr("disabled", false);
							$(this).find("td:nth-child(3) span").attr("disabled", false).removeClass("activecolorgray").addClass("activecolorblue").attr("onclick", "openFileTextRider_CL('"+obj_PV_table_policy_value.file+"','"+obj_PV_table_policy_value.ref+"',5,'tbl_StandardRisk_CL','cvStandardRisk_CL')");
							$(this).find("td:nth-child(4) a").attr("disabled", false);
							$(this).find("td:nth-child(4) span").attr("disabled", false).removeClass("activecolorgray").addClass("activecolorblue").attr("onclick", "openFile_target('"+obj_PV_table_policy_value.file+"','"+obj_PV_table_policy_value.ref+"','txt_download')");
							$(this).find("td:nth-child(2) input[type='file']").attr("disabled", false);
						}
						
					});
				}
				
				$("#tb_RateValue1 tbody>tr>td:nth-child(2) span").attr("disabled", false);

			}
			
			//$("#tb_RateValue1>tbody>tr:first-child").remove();
			
		}
		
		/*ความเสี่ยงต่ำกว่ามาตรฐาน*/
		if(obj_PV.table_Low_Risk.length > 0){
			$("#cbBox2_CL").prop("disabled", false);
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
			var filetype = $("#dbBox2_CL option:selected").val();
			selectType_CL(filetype+rcode,2);
			$("#input_file_2_CL").val(obj_PV.table_Low_Risk[0].file);
			$("#spanBox2_CL, #cv2_CL").attr("disabled", false);
			$("#select_file_2_CL").prop("disabled", false);
			
			if($("#input_file_2_CL").val() != ""){
				$("#validate_input2_CL").hide();
			}else{
				$("#validate_input2_CL").show();
			}
			
			$("#cvLow_rateLayout2").val(obj_PV.table_Low_Risk[0].layout);
			$("#cvLow_fileID2").val(obj_PV.table_Low_Risk[0].fileID);
			
			$("#cv2_CL").attr("onclick", "openFileTextRider_CL('"+obj_PV.table_Low_Risk[0].file+"','"+obj_PV.table_Low_Risk[0].ref+"',6,'tbl_NotStandardRisk_CL','cvNotStandardRisk_CL')")
			
		}
	}
	
	/*ปิดดอกจันทร์*/
	$("#tb_RateValue1 tbody>tr").each(function(){
		if($(this).find('td:nth-child(2) input').val() != "" ){
			$("#validate_dd_file1").hide();
		}else{
			$("#validate_dd_file1").show();
		}
	});
		
	if($("#input_file_2_CL").val() != ""){
		$("#validate_dd_file2").hide();
	}
	
}

/* showcase Tab ผลประโยชน์/ความคุ้มครอง */
function showcase_coverage_benefits(response){
	for (i in response.Tab_Benefit_Check) {
		var obj_coverageBenefits = response.Tab_Benefit_Check[i];
		$("#tbl_benefit_CL tbody>tr").each(function(){
			var chk_value = $(this).find("td:nth-child(1)").attr('data-value');
			if(obj_coverageBenefits.bnf_Code == chk_value){
				$(this).find("td:nth-child(1) i").removeClass("glyphicon-edit").addClass("glyphicon-ok");				
			}
		});			
	}
}

/* showcase Tab บันทึกสลักหลัง */
function showcase_save_Endorse(response){
	var row = "";
	var ii = 0;
	
	if(response.Tab_Endorse.length > 0){
		$("#endorse_bnf_id").val(response.Tab_Endorse[0].bnf_item_id_Master);
	
		for (i in response.Tab_Endorse[1].Endorse) {
			var obj_endorse = response.Tab_Endorse[1].Endorse[i];
			
				ii++;
				row = "<tr id='tbody_record"+ii+"'>"+					    								
				  "<td id='imgOK_record"+ii+"' class='text-center borderBlack'"+
				  "onclick='imgCheckbox_record_CL("+ii+");' data-key='"+obj_endorse.pass+"' style='vertical-align: middle;'>" +
				  "<i class='glyphicon glyphicon-edit'></i></td>"+	
				  "<td class='text-center borderBlack' style='vertical-align: middle;'><span class='spanRecord_CL' id='orderID_OL"+ii+"'>"+ii+"</span></td>"+									
				  "<td class='borderBlack verticalCenter'><input type='text' name='record_name[]' id='record_name"+ii+"' class='form-control margin-padding0 text-center;' value='"+obj_endorse.text+"' readonly></td>"+											  									
				  "</tr>";			
		
				$("#record_Table_CL tbody").append(row);
		}
	}
	
	/*การใช้บันทึกสลักหลังคู่กับ*/
	if(response.Tab_Endorse[2].BasePlan.length > 0 || response.Tab_Endorse[3].Rider.length > 0){
		$("#rd_endorseMatch_CL2").prop("checked", true);
		
		var j = 0;
		var jj = 0;
		
		/*Baseplan*/
		var row_baseplan = "";	
		for(i in response.Tab_Endorse[2].BasePlan){
			var obj_baseplan = response.Tab_Endorse[2].BasePlan[i];
			j++;
			row_baseplan += "<tr id='tbody_baseplan"+j+"' data-id="+j+">"+
			"<td id='imgOK_baseplan"+j+"' class='text-center verticalCenter' onclick='imgCheckbox(this.id);'>"+
				"<i class='glyphicon glyphicon-edit'></i></td>"+
			"<td class='verticalCenter'><label>"+obj_baseplan.cov_code+"</label></td>"+
			"<td class='verticalCenter'>"+obj_baseplan.name_th+"</td>"+																									
			"</tr>";

		}
		
		$("#tbl_baseplanSelect tbody").append(row_baseplan);		
		
		/*Rider*/
		var row_rider = "";	
		for(i in response.Tab_Endorse[3].Rider){
			var obj_rider = response.Tab_Endorse[3].Rider[i];
			jj++;
			row_rider += "<tr id='tbody_rider"+jj+"' data-id="+jj+">"+
			"<td id='imgOK_rider"+jj+"' class='text-center verticalCenter' onclick='imgCheckbox(this.id);'>"+
				"<i class='glyphicon glyphicon-edit'></i></td>"+
			"<td class='verticalCenter'><label>"+obj_rider.cov_code+"</label></td>"+
			"<td class='verticalCenter'>"+obj_rider.name_th+"</td>"+																									
			"</tr>";

		}
		
		$("#tbl_riderSelect tbody").append(row_rider);
		
		$("#endorse_Baseplan_CL,#endorse_Rider_CL").show();
		
		
	}else{
		$("#rd_endorseMatch_CL1").prop("checked", true);
	}
	
	/*for (i in response.Tab_Endorse) {
		var obj_endorse = response.Tab_Endorse[i];
		if(i != 0){
			ii++;
			row = "<tr id='tbody_record"+ii+"'>"+					    								
			  "<td id='imgOK_record"+ii+"' class='text-center borderBlack'"+
			  "onclick='imgCheckbox_record_CL("+ii+");' data-key='"+obj_endorse.pass+"' style='vertical-align: middle;'>" +
			  "<i class='glyphicon glyphicon-edit'></i></td>"+	
			  "<td class='text-center borderBlack' style='vertical-align: middle;'><span class='spanRecord_CL' id='orderID"+ii+"'>"+ii+"</span></td>"+									
			  "<td class='borderBlack verticalCenter'><input type='text' name='record_name[]' id='record_name"+ii+"' class='form-control margin-padding0 text-center;' value='"+obj_endorse.text+"' readonly></td>"+											  									
		  "</tr>";			
	
			$("#record_Table_CL tbody").append(row);
		}else{
			$("#endorse_bnf_id").val(obj_endorse.bnf_item_id_Master);
		}
		
	}*/
}

/*คำนวณเบี้ยประกัน */
$("#ch_insurance_premium_ageBand_cl").click(function(){
	if($(this).prop('checked') == true){
		$("#div_Age_Band *").attr("disabled", false);
	}else{
		$("#div_Age_Band *").attr("disabled", "disabled").off("click");
		$("#tb_Age_Band input:checkbox:checked").each(function(){
			var id = $(this).attr("id");
				id = id.replace("imgOK_ageBand","");
			/*remove age band*/
			var band_text_unselect = $(this).val();
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
			
			$(this).attr("onclick","select_AgeBand("+id+")");
		});
		
		$("#div_Age_Band input:checkbox").prop("checked", false);

	}
	
	if($("#ch_standard_premium_cl").prop('checked') == false){
		$("#ch_standard_premium_cl").prop('checked',true);
		
		/*$("#ch_Base_rate").prop("disabled",false);
		$("#ch_Base_rate").prop( "checked", true );*/
		$('#sl_menu3_insurance_premium_cl').prop("disabled",false);
		$('#ch_importInsurance_cl').prop("disabled",false);
		/*$('#discountInsurancePremiumsSta').prop("disabled",false);
		$('#discountInsurancePremiumsTo').prop("disabled",false);*/
		$('#addrowPM_Rate').prop("disabled",false);
		$('#delrowPM_Rate').prop("disabled",false); 
		$("#tb_premiumLevel_CL>tbody>tr input:text").prop("disabled", false);
		
		/*ปิดปุ่ม add row*/
		var num_dd = $("#tb_PM_Rate1>tbody>tr[data-level='1']:first>td:nth-child(2) select>option[value!='']").length;
		var numrow_tbl = $("#tb_PM_Rate1>tbody>tr[data-level='1']").length;
		if(numrow_tbl == num_dd){
			$("#addrowPM_Rate").attr("disabled", true);
		}
	}
	
	if($("#ch_standard_premium_cl").prop('disabled') == false){
		$("#ch_insurance_premium_Extra_cl").prop("disabled", false);
	}
})
	
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
    $('#modal_value_warning4').modal('show');
}

$(document).on('focusin', '#sl_menu3_insurance_premium_cl', function(){
    //console.log("Saving value " + $(this).val());
    $(this).data('val', $(this).val());
}).on('change','#sl_menu3_insurance_premium_cl', function(){
	var prev_rate = $(this).data('val');
	var current_rate = $(this).val();
    //console.log("Prev value " + prev_rate);
   // console.log("New value " + current_rate);
    
    //$("#addrowPM_Rate").prop("disabled", false);
	$("#delrowPM_Rate").prop("disabled", false);
	var select_text = $("#sl_menu3_insurance_premium_cl option:selected").text();
	var selectPM_text = $("#tb_PM_Rate1 tbody>tr>td:nth-child(2)>select").find("option:selected").text();
	
	/*ปิดปุ่ม add row*/
	var num_dd = $("#tb_PM_Rate1>tbody>tr[data-level='1']:first>td:nth-child(2) select>option[value!='']").length;
	var numrow_tbl = $("#tb_PM_Rate1>tbody>tr[data-level='1']").length;
	if(numrow_tbl == num_dd){
		$("#addrowPM_Rate").attr("disabled", true);
	}
	
	if(select_text != "None" || $(this).val() != ""){
		$("#tb_PM_Rate1 tbody>tr>td:nth-child(2)>select").prop("disabled", false);
		$("#tb_PM_Rate1 tbody>tr[data-level='1']>td:nth-child(2)>select option").prop("disabled", false);
		
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
		$("#tb_PM_Rate1>tbody td:nth-child(3) :input[type='text']").each(function(index) {
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
var riderCode_CL = $("#pass_Insurance_coverage_cl").val();
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
					
					$("#fileuploads_PMRateText"+thisID+"_CL").attr("placeholder", file_layout+"_"+riderCode_CL+".txt");
				  	
					var uploadfile = "selectFileRate_CL("+type+",'s','fileuploads_PMRate"+thisID+"_CL','"+file_layout+"_"+riderCode_CL+"','','sl_menu3_insurance_premium_cl','span_PM_Rateopen_"+thisID+"')";
					
					$("#fileuploads_PMRate"+thisID+"_CL").attr('onchange', uploadfile);	
					$("#tbody_PM_Rate"+thisID+">td:nth-child(3) span").attr("disabled", false);
				  	$("#tbody_PM_Rate"+thisID+">td:nth-child(3) *").prop("disabled", false);
				  						  
				  	tr_group = "#tb_PM_Rate1>tbody tr[data-group='"+thisID+"']";
				  	
				  	$(tr_group).each(function(){
				  		var list_band_text = $(this).find("td:nth-child(2)").text();
				  		var list_band_layout = "";
				  		var list_band_ID = $(this).data("id");
				  		
				  		if(file_layout != ""){
				  			list_band_layout = file_layout+"_"+list_band_text+"_"+riderCode_CL+".txt";
				  		}else{
				  			list_band_layout = "";
				  		}
				  		
				  		var uploadfile_sub = "selectFileRate_CL("+type+",'b','fileuploads_PMRate"+list_band_ID+"_CL','"+file_layout+"_"+list_band_text+"_"+riderCode_CL+"','','sl_menu3_insurance_premium_cl','span_PM_Rateopen_"+list_band_ID+"')";
						
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
					$("#fileuploads_PMRateText"+thisID+"_CL").attr("placeholder", file_layout+"_"+riderCode_CL+".txt");
				  	
					var uploadfile = "selectFileRate_CL("+type+",'s','fileuploads_PMRate"+thisID+"_CL','"+file_layout+"_"+riderCode_CL+"','','sl_menu3_insurance_premium_cl','span_PM_Rateopen_"+thisID+"')";
					
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
				  			list_band_layout = file_layout+"_"+list_band_text+"_"+riderCode_CL+".txt";
				  		}else{
				  			list_band_layout = "";
				  		}
				  		
				  		var uploadfile_sub = "selectFileRate_CL("+type+",'b','fileuploads_PMRate"+list_band_ID+"_CL','"+file_layout+"_"+list_band_text+"_"+riderCode_CL+"','','sl_menu3_insurance_premium_cl','span_PM_Rateopen_"+list_band_ID+"')";
						
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
						 
						file_layout_r1_text = file_layout_r1+selectPM_text+"_"+riderCode_CL;
						file_layout_r2_text = file_layout_r2+selectPM_text+"_"+riderCode_CL;
						
						placeholder_main = file_layout_r1_text+".txt หรือ "+file_layout_r2_text+".txt";
					}else{
						file_layout_r1 = file_layout[0];
						file_layout_r2 = "";
						
						file_layout_r1_text = file_layout_r1+selectPM_text+"_"+riderCode_CL;
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
							 
							file_layout1_text = file_layout1+selectPM_text+"_"+list_band_text+"_"+riderCode_CL;
							file_layout2_text = file_layout2+selectPM_text+"_"+list_band_text+"_"+riderCode_CL;
							
							placeholder = file_layout1_text+".txt หรือ "+file_layout2_text+".txt";
						}else{
							file_layout1 = file_layout[0];
							file_layout2 = "";
							
							file_layout1_text = file_layout1+selectPM_text+"_"+list_band_text+"_"+riderCode_CL;
							file_layout2_text = "";
							
							placeholder = file_layout1_text+".txt";
						}	
				  		
				  		var uploadfile_band = "selectFileRate_CL(5,'b','fileuploads_RateValue"+list_band_ID+"_CL','"+file_layout1_text+"','"+file_layout2_text+"','dbBox1_CL','span_RateValueopen_"+list_band_ID+"')";
						
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
							  	"<input type='hidden' id='ext_rateCat"+aa+"' value=''>"+
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
					file_pattern = dd_extra_rate_value+PMRate_type+"_"+riderCode_CL;
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
	var riderCode_CL = $("#riderCode_CL").val();
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
				$("#fileuploads_PMRateText"+thisID_Sub+"_CL").attr("placeholder", band_layout);
				var uploadfile = "selectFileRate_CL("+type+",'b','fileuploads_PMRate"+thisID_Sub+"_CL','"+file_layout+"_"+row_band+"_"+riderCode_CL+"','','sl_menu3_insurance_premium_cl','span_PM_Rateopen_"+thisID_Sub+"')";
				
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
		dd_PMrate_type += "<option value=''>None</option>";
	
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
	var num_dd = $("#tb_PM_Rate1>tbody>tr[data-level='1']:first>td:nth-child(2) select>option[value!='']").length;
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
						
						$row2.find("td:nth-child(3) input[type='hidden']").eq(0).attr("id","rm_rateCat"+number_child_new);
						$row2.find("td:nth-child(3) input[type='hidden']").eq(1).attr("id","rm_rateLayout"+number_child_new);
						$row2.find("td:nth-child(3) input[type='hidden']").eq(2).attr("id","rm_fileID"+number_child_new);
						
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
		var num_dd = $("#tb_PM_Rate1>tbody>tr[data-level='1']:first>td:nth-child(2) select>option[value!='']").length;
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
	var modal_download = "";
	/*file*/
	var file_id = 0;
	var file_type_id = 3;
	var file_path = "";
	var file_pattern = "";
	var user_code = "0000000";

	/*ตามแผนความคุ้มครอง*/ 
	if(type == 1){	
		tbl_name = "tb_PM_Rate_view_T1_view";
		tblAuto_name = "tb_PM_Rate_view_T1"; // ใส่ไฟล์
		modal_name = "modal_PMRate_CL";  //ใส่ไฟล์
		modal_cv = "modal_PMRate_CL_view";
		tbl_col = 61;		
		file_button1 = "btn_submit_PMRatePlanAuto";
		file_button2 = "btn_cancel_PMRatePlanAuto";
		modal_download = "";
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
		tblAuto_name = "tb_PM_Rate_Capital";
		modal_name = "modal_PM_Rate";
		modal_cv = "modal_PMRate4Col_CL";
		tbl_col = 41;		
		file_button1 = "btn_submit_PMRatePlan4ColAuto";
		file_button2 = "btn_cancel_PMRatePlan4ColAuto";
		modal_download = "download_tbl_PMRatePlan4Col_CL";
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
		tblAuto_name = "tb_PM_Rate_Capital";
		modal_name = "modal_PM_Rate";
		modal_cv = "modal_PMRate4Col_CL";
		tbl_col = 41;		
		file_button1 = "btn_submit_PMRatePlan4ColAuto";
		file_button2 = "btn_cancel_PMRatePlan4ColAuto";
		modal_download = "download_tbl_PMRatePlan4Col_CL";
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
		modal_download = "download_tbl_ExtraRatePlan_CL";
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
		modal_download = "download_tbl_StandardRisk_CL";
		select_file_name = select_file.replace("fileuploads_RateValue","");
		select_file_name = select_file_name.replace("_CL","");
		selectFile = "fileuploads_RateValue"+select_file_name+"_CL";
		textFile = "fileuploads_RateValueText"+select_file_name+"_CL";
		
		//validateFile = "validate_RateValue"+select_file_name+"_CL";
		validateFile = "";
		downloadFile = "span_RateValuedownload_"+select_file_name;
		fileID = "cv_fileID"+select_file_name;
		
		if(rate_cat == 's'){
			rate_cat_id = $("#rateCat_tbRiskStardard").val();
		}else{
			rate_cat_id = $("#rateCat_tbRiskStardard_ageBand").val();	
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
	//$("#select_file_"+select_file+"_CL").unbind("change");
	if($("#"+textFile).val() == ""){
		file_id = "";
	}else{
		file_id = $("#"+fileID).val();
	}	
	
	$("#"+modal_name+" .modal-header>h4>span").html(file_name);
	//$("#"+modal_cv+" .modal-header>h4>span").html(" ("+dd_text+")");

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
	/*end*/

	if(file_format2 != ""){
		if(check_filename(selectFile, file_format, file_format2) == false){
			if(validateFile != ""){
				$("#"+validateFile).css("display", "inline-block");
			}
			$("#"+textFile).val("");
			$("#"+selectFile).val("");
			$('#'+cv_button).prop('disabled', true);		
			$('#'+cv_button+">span").removeClass("activecolorblue").addClass("activecolorgray");
			$("#"+downloadFile+">span").removeClass("activecolorblue").addClass("activecolorgray");
		}else{
			openFile(event,selectFile,tbl_name,tbl_col);
			openFile(event,selectFile,tblAuto_name,tbl_col);
			
			$("#base64_fileTXT_CL").val("");
			
			$("#"+modal_name).modal("show");	
			
			convertToBase64(selectFile, file_type_id);
				
			$("#"+file_button1).unbind();
			$("#"+file_button1).click(function() {
				
				/*save file*/				
				//set_Filevalue(type,select_file_name,file_id,file_type_id,file_name,file_path,file_pattern,rate_cat_id,sub_cat_id,user_code);		
				/*end save file*/
				/*$('#'+cv_button).click(function(){
					$("#"+modal_cv).modal('show');
				})*/
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
					 	    	
					 	    	
					 	    /*save file*/	
							datajson = {				        	
									file_id 		: file_id,
									file_type_id 	: file_type_id,
									file_name 		: file_name,
									file_url		: obj_ref,
									file_pattern	: file_pattern,
									rate_cat_id		: rate_cat_id,
									sub_cat_id		: sub_cat_id,
									user_code		: user_code	        
							}	
							console.log("datajson",datajson)
							$.ajax({
							    type: "POST",
							    url : "BasePlanCL_save_file_Servlet",
							    data: datajson,       
							    success : function(response) {					    	
							    	if(type == 1 || type == 2 || type == 3){
							    		$("#rm_rateLayout"+select_file_name).val(response.rate_layout_id);
							    		$("#rm_fileID"+select_file_name).val(response.file_id);
							    	}else if(type == 4){
							    		/*Extra_Rate*/
							    		//$("#ext_rateCat"+id).val(3);
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
									$('#'+cv_button+">span").removeClass("activecolorgray").addClass("activecolorblue").attr("onclick","openFileTextRider_CL('"+file_name+"','"+obj_ref+"', "+tbl_col+", '"+tbl_name+"', '"+modal_cv+"')");
									$("#"+modal_download).attr("onclick", "openFile_target('"+file_name+"','"+obj_ref+"','txt_download')");
									
//									$('#'+cv_button).attr("onclick","open_modalCV("+type+",this.id)");
									$("#"+downloadFile+">span").removeClass("activecolorgray").addClass("activecolorblue").attr("onclick", "openFile_target('"+file_name+"','"+obj_ref+"','txt_download')");
									$("#modal_waiting").modal('hide');
									$("body").addClass("body_nopadding");
							    },
							    error : function(response) {	
							    	//alert("save file error");
									message = "ไม่สามารถบันทึกไฟล์ได้";
									alertError(message);
									$("#modal_waiting").modal('hide');
									$("#"+textFile).val("");
									$('#'+cv_button+">span").removeClass("activecolorblue").addClass("activecolorgray");
									$('#'+downloadFile+">span").removeClass("activecolorblue").addClass("activecolorgray");
								
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
			
			convertToBase64(selectFile, file_type_id);
			
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
									sub_cat_id		: sub_cat_id,
									user_code		: user_code	        
							}	
							console.log("datajson",datajson)
							$.ajax({
							    type: "POST",
							    url : "BasePlanCL_save_file_Servlet",
							    data: datajson,       
							    success : function(response) {					    	
							    	if(type == 1 || type == 2 || type == 3){
							    		$("#rm_rateLayout"+select_file_name).val(response.rate_layout_id);
							    		$("#rm_fileID"+select_file_name).val(response.file_id);
							    	}else if(type == 4){
							    		/*Extra_Rate*/
							    		//$("#ext_rateCat"+id).val(3);
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
									$('#'+cv_button+">span").removeClass("activecolorgray").addClass("activecolorblue").attr("onclick","openFileTextRider_CL('"+file_name+"','"+obj_ref+"', "+tbl_col+", '"+tbl_name+"', '"+modal_cv+"')");
									//$('#'+cv_button).attr("onclick","open_modalCV("+type+",this.id)");
									$("#"+modal_download).attr("onclick", "openFile_target('"+file_name+"','"+obj_ref+"','txt_download')");
									
									$('#'+downloadFile+">span").removeClass("activecolorgray").addClass("activecolorblue").attr("onclick", "openFile_target('"+file_name+"','"+obj_ref+"','txt_download')");
									$("#modal_waiting").modal('hide');
									$("body").addClass("body_nopadding");
							    },
							    error : function(response) {	
							    	//alert("save file error");
									message = "ไม่สามารถบันทึกไฟล์ได้";
									alertError(message);
									$("#modal_waiting").modal('hide');
									$("#"+textFile).val("");
									$('#'+cv_button+">span").removeClass("activecolorblue").addClass("activecolorgray");
									$('#'+downloadFile+">span").removeClass("activecolorblue").addClass("activecolorgray");
								
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
			sub_cat_id		: sub_cat_id,
			user_code		: user_code	        
	}	
	console.log("datajson",datajson)
	$.ajax({
	    type: "POST",
	    url : "BasePlanCL_save_file_Servlet",
	    data: datajson,       
	    success : function(response) {					    	
	    	if(type == 1 || type == 2 || type == 3){
	    		$("#rm_rateLayout"+id).val(response.rate_layout_id);
	    		$("#rm_fileID"+id).val(response.file_id);
	    	}else if(type == 4){
	    		/*Extra_Rate*/
	    		//$("#ext_rateCat"+id).val(3);
	    		$("#ext_rateLayout"+id).val(response.rate_layout_id);
	    		$("#ext_fileID"+id).val(response.file_id);
	    	}else if(type == 5){
	    		/*CV_Rate*/
	    		$("#cv_rateLayout"+id).val(response.rate_layout_id);
	    		$("#cv_fileID"+id).val(response.file_id);
	    	}else if(type == 21){
	    		/*EM*/
	    	//	$("#em_rateCat"+id).val(4)
	    		$("#em_rateLayout"+id).val(response.rate_layout_id);
	    		$("#em_fileID"+id).val(response.file_id);
	    	}else if(type == 22){
	    		/*SA*/
	    		//$("#decrease_rateCat"+id).val(5)
	    		$("#decrease_rateLayout"+id).val(response.rate_layout_id);
	    		$("#decrease_fileID"+id).val(response.file_id);
	    	}else if(type == 32){
	    		/*CV Low*/
	    		$("#cvLow_rateLayout"+id).val(response.rate_layout_id);
	    		$("#cvLow_fileID"+id).val(response.file_id);
	    	}
	    },
	    error : function(response) {	
	    	//alert("save file error");
			message = "ไม่สามารถบันทึกไฟล์ได้";
			alertError(message);
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
		modal_cv = "modal_PMRate_CL_view";
		rowID = id.replace("span_PM_Rateopen_","");
		head_modal = $("#"+tbl_name).find("#tbody_PM_Rate"+rowID+" td:nth-child(3) input[type='text']").val();
		
	}else if(type == 2){
		tbl_name = "tbl_PMRatePlan4Col_CL";
		modal_cv = "modal_PMRate4Col_CL";
		rowID = id.replace("span_PM_Rateopen_","");
		head_modal = $("#"+tbl_name).find("#tbody_PM_Rate"+rowID+" td:nth-child(3) input[type='text']").val();
		
	}else if(type == 3){
		tbl_name = "tbl_PMRatePlan4Col_CL";
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
		message = "เคยนำเข้าไฟล์ PM_Rate ไว้แล้ว ต้องการเปลี่ยนตารางเบี้ยประกัน ใช่หรือไม่";
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
	var select_extraRate = $("#sl_insurance_premium_Extra_cl option:selected").text();
	if(select_extraRate != "None"){
		for(var i=0; i<numrow; i++){
			var select_extra_text = $("#tb_Extra_Rate>tbody>tr").eq(i).find("td:nth-child(1)").text();
			var select_extra_id = $("#tb_Extra_Rate>tbody>tr").eq(i).attr("id");
				select_extra_id = Number(select_extra_id.replace("tbody_Extra_Rate",""));
		
			file_layout = $("#sl_insurance_premium_Extra_cl option:selected").val();
			
			file_layout = file_layout+select_extra_text+"_"+baseplanCode_CL;
			var uploadfile = "selectFileRate_CL(4,'s','fileuploads_ExtraRate"+select_extra_id+"_CL','"+file_layout+"','','sl_insurance_premium_Extra_cl','span_Extra_Rateopen_"+select_extra_id+"')";		
			
			$("#fileuploads_ExtraRateText"+select_extra_id+"_CL").val("");
			$("#fileuploads_ExtraRate"+select_extra_id+"_CL").val(null);
			$("#fileuploads_ExtraRateText"+select_extra_id+"_CL").attr("placeholder",file_layout+".txt");
			$("#fileuploads_ExtraRate"+select_extra_id+"_CL").attr("onchange",uploadfile);
			$("#fileuploads_ExtraRate"+select_extra_id+"_CL").attr("disabled",false);
			$("#spanExtraRate"+select_extra_id+"_CL").attr("disabled",false);
			$("#validate_extrarate"+select_extra_id+"_CL").css("display","inline-block");
			$("#span_Extra_Rateopen_"+select_extra_id+">span").removeClass("activecolorblue").addClass("activecolorgray");
			$("#span_Extra_Ratedownload_"+select_extra_id+">span").removeClass("activecolorblue").addClass("activecolorgray");
		}
	}else{
		$("#tb_Extra_Rate>tbody>tr input:text").val("");
		$("#tb_Extra_Rate>tbody>tr input:text").attr("placeholder","");
		$("#tb_Extra_Rate>tbody>tr input:text").removeAttr("onchange");
		$("#tb_Extra_Rate>tbody>tr input:file").attr("disabled", true);
		$("#tb_Extra_Rate>tbody>tr td:nth-child(2) span").attr("disabled", true);
		$("#tb_Extra_Rate>tbody>tr td:nth-child(2) span>font").css("display","none");
		$("#tb_Extra_Rate>tbody>tr td:nth-child(3) span").removeClass("activecolorblue").addClass("activecolorgray");
		$("#tb_Extra_Rate>tbody>tr td:nth-child(4) span").removeClass("activecolorblue").addClass("activecolorgray");
	}	
  }
});

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

// radio เบี้ยมาตรฐาน menu3
$("#ch_standard_premium_cl").click(function(){

	var ch_standard_premium_cl = document.getElementById("ch_standard_premium_cl");
	if (ch_standard_premium_cl.checked == true){
		  $('#rd_cal_insurance_cl').prop("disabled",false);
		  $( "#rd_cal_insurance_cl" ).prop( "checked", true );
		  $('#sl_menu3_insurance_premium_cl').prop("disabled",false);
		  $('#ch_importInsurance_cl').prop("disabled",false);
		  $('#discountInsurancePremiumsSta').prop("disabled",false);
		  $('#discountInsurancePremiumsTo').prop("disabled",false); 
		  $('#addrowPM_Rate').prop("disabled",false);
		  $('#delrowPM_Rate').prop("disabled",false);
		  
		  $("#tb_premiumLevel_CL *").prop("disabled",false);
		  /*$("#ch_Base_rate").prop("disabled", false);
		  $("#ch_Base_rate").prop("checked", true);*/
		  //$("#ch_step_Career2,#ch_step_Career3,#ch_step_Career4").prop("disabled", false);
		  
		  $("#ch_insurance_premium_Extra_cl").prop("disabled", false);			  
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
					$("#ch_standard_premium_ol").prop("checked", true);
				});
				
		}else {
			 //$('#sl_menu3_insurance_premium_cl').val("");
			 //$('#sl_menu3_insurance_premium_cl option:contains("None")').attr("selected","selected");
			 $("#divtb_PM_Rate1 *").prop("disabled",true);//default disabled Table PM_Rate
			 $('#addrowPM_Rate').prop("disabled",true);
			 $('#delrowPM_Rate').prop("disabled",true);
			 /*$("#tb_PM_Rate1>tbody>tr[data-level='1'] select>option:contains('None')").attr("selected","selected");
			 $("#tb_PM_Rate1>tbody>tr").find("td:nth-child(3) input:text").attr("placeholder","");
			 $("#tb_PM_Rate1>tbody>tr").find("td:nth-child(3) span").attr("disabled", true);
			 $("#tb_PM_Rate1>tbody>tr").find("td:nth-child(3) font").css("display", "none");*/
			 addRowPM_Rate();
			 $("#tb_PM_Rate1 tbody>tr td:nth-child(2) select").prop("disabled", true);
			 
			 $('#rd_cal_insurance_cl').prop("disabled",true);
			 $("#rd_cal_insurance_cl").prop( "checked", false );
			 $('#sl_menu3_insurance_premium_cl').prop("disabled",true);
			 $('#sl_menu3_insurance_premium_cl').val("")
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
	var riderCode_CL = $("#pass_Insurance_coverage_cl").val();
	
	var check_file = 0;
	
	if(select_text != "None"){
		$("#validate_dd_file1").hide();
	}else{
		$("#validate_dd_file1").show();
	}
	
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
				 
				file_layout1_text = file_layout1+select_cv_text+"_"+riderCode_CL;
				file_layout2_text = file_layout2+select_cv_text+"_"+riderCode_CL;
				
				placeholder = file_layout1_text+".txt หรือ "+file_layout2_text+".txt";
			}else{
				file_layout1 = file_layout[0];
				file_layout2 = "";
				
				file_layout1_text = file_layout1+select_cv_text+"_"+riderCode_CL;
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
			$("#span_RateValueopen_"+select_cv_id).removeAttr("onclick");
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
					 
					 file_layout1_band = file_layout1+select_cv_text+"_"+band+"_"+riderCode_CL;
					 file_layout2_band = file_layout2+select_cv_text+"_"+band+"_"+riderCode_CL;
					 
					 placeholder_band = file_layout1_band+".txt หรือ "+file_layout2_band+".txt";
				 }else{
					 file_layout1 = file_layout[0];
					 file_layout2 = "";
					 
					 file_layout1_band = file_layout1+select_cv_text+"_"+band+"_"+riderCode_CL;
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
				 $("#span_RateValueopen_"+select_band_id).removeAttr("onclick");
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
			$("#span_RateValueopen_"+select_cv_id).removeAttr("onclick");
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
				$("#span_RateValueopen_"+select_band_id).removeAttr("onclick");
				$("#span_RateValueopen_"+select_band_id+">span").removeClass("activecolorblue").addClass("activecolorgray");
				$("#span_RateValuedownload_"+select_band_id+">span").removeClass("activecolorblue").addClass("activecolorgray");
			 });
		
		}		
	}
}
});

/*Basic Information by KHWAN*/
$("#dmy_4_cl").on("change", function(){
	var dd_value = $(this).find("option:selected").val();
	if(dd_value == "YEAR"){
		$("#ch_sperately_pay_ch").prop("disabled", false);
	}else{
		$("#ch_sperately_pay_ch").prop("disabled", true);
	}
});

function check_age_validate(){
	var age_Start_cl = $('#age_Start_cl').val();
	var age_unitStart_cl = $('#dmy_5_cl option:selected').text();
	var age_To_cl = $('#age_To_cl').val();
	var age_unitTo_cl = $('#dmy_6_cl option:selected').text();
	
	$("#age_Start_cl").on("keyup", function(){
		if(age_Start_cl != "" && age_unitStart_cl != "None" && age_To_cl != "" && age_unitTo_cl != "None"){
			$("#validate_input6_1cl").hide();
			check_fromto_age();
		}else{
			$("#validate_input6_1cl").show();
		}
	});
	
	$("#dmy_5_cl").on("change", function(){
		if(age_Start_cl != "" && age_unitStart_cl != "None" && age_To_cl != "" && age_unitTo_cl != "None"){
			$("#validate_input6_1cl").hide();
			check_fromtoUnit_age($(this).val());
		}else{
			$("#validate_input6_1cl").show();
		}
	});
	
	$("#age_To_cl").on("keyup", function(){
		if(age_Start_cl != "" && age_unitStart_cl != "None" && age_To_cl != "" && age_unitTo_cl != "None"){
			$("#validate_input6_1cl").hide();
			check_fromto_age();
		}else{
			$("#validate_input6_1cl").show();
		}
	});
	
	$("#dmy_6_cl").on("change", function(){
		if(age_Start_cl != "" && age_unitStart_cl != "None" && age_To_cl != "" && age_unitTo_cl != "None"){
			$("#validate_input6_1cl").hide();
			check_fromtoUnit_age($(this).val());
		}else{
			$("#validate_input6_1cl").show();
		}
	});
		
}

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
	
	$("#age_Start_cl").on('blur', function () {
		
		if($("#dmy_5_cl option:selected").text() != "None" && $("#dmy_6_cl option:selected").text() != "None" && $("#age_To_cl").val() != ""){	
		  
		  var from_unit_text = $("#dmy_5_cl option:selected").val();
		  var to_unit_text = $("#dmy_6_cl option:selected").val();
			
		  var from_value = Number($('#age_Start_cl').val());
		  var to_value = Number($('#age_To_cl').val());	
		  
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
					$('#age_Start_cl').val("").focus();
				}
			}else if(from_unit_text == "DAY" && to_unit_text == "MONTH"){				 
					if(from_value_toMonth > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#age_Start_cl').val("").focus();
					}
			 }else if(from_unit_text == "MONTH" && to_unit_text == "DAY"){	
					if(to_value_toMonth < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#age_To_cl').val("").focus();
				    }
		    }else if(from_unit_text == "DAY" && to_unit_text == "YEAR"){				 
					if(from_value_toYear > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#age_Start_cl').val("").focus();
					}
			 }else if(from_unit_text == "YEAR" && to_unit_text == "DAY"){				 
					if(to_value_toYear < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#age_To_cl').val("").focus();
				    }
		    }else if(from_unit_text == "MONTH" && to_unit_text == "YEAR"){				 
					if(from_value_MonthtoYear > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#age_Start_cl').val("").focus();
					}
			 }else if(from_unit_text == "YEAR" && to_unit_text == "MONTH"){				
					if(to_value_MonthtoYear < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#age_Start_cl').val("").focus();
					}
			 }
		   }
		});
		
	  $("#age_To_cl").on('blur', function () {	
		  
		if($("#dmy_5_cl option:selected").text() != "None" && $("#dmy_6_cl option:selected").text() != "None" && $("#age_To_cl").val() != ""){   
		 
		 var from_unit_text = $("#dmy_5_cl option:selected").val();
		 var to_unit_text = $("#dmy_6_cl option:selected").val();
		 
		 var from_value = Number($('#age_Start_cl').val());
		 var to_value = Number($('#age_To_cl').val());	
		 
		 var from_value_toMonth = Number(from_value/30);
		 var to_value_toMonth = Number(to_value/30);
		 var from_value_toYear = Number(from_value/365);
		 var to_value_toYear = Number(to_value/365);
		 var from_value_MonthtoYear = Number(from_value/12);
		 var to_value_MonthtoYear = Number(to_value/12);
		 
		 var from_value = Number($('#age_Start_cl').val());
		 var to_value = Number($('#age_To_cl').val());
		 
		 if(from_unit_text == to_unit_text){
				if(from_value > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#age_To_cl').val("").focus();
				}
		  }else if(from_unit_text == "DAY" && to_unit_text == "MONTH"){				 
					if(from_value_toMonth > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#age_To_cl').val("").focus();
					}
		  }else if(from_unit_text == "MONTH" && to_unit_text == "DAY"){				 
					if(to_value_toMonth < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#age_To_cl').val("").focus();
					}
		  }else if(from_unit_text == "DAY" && to_unit_text == "YEAR"){				 
					if(from_value_toYear > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#age_To_cl').val("").focus();
					}
		  }else if(from_unit_text == "YEAR" && to_unit_text == "DAY"){				
					if(to_value_toYear < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#age_To_cl').val("").focus();
					}
		  }else if(from_unit_text == "MONTH" && to_unit_text == "YEAR"){				 
					if(from_value_MonthtoYear > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#age_To_cl').val("").focus();
					}
		  }else if(from_unit_text == "YEAR" && to_unit_text == "MONTH"){
					if(to_value_MonthtoYear < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#age_To_cl').val("").focus();
					}
			 }
		  }
		
	  });
}

function check_fromtoUnit_age(value){

	if($("#dmy_5_cl option:selected").text() != "None" && $("#dmy_6_cl option:selected").text() != "None"){
		//$("#dmy_5_cl").change(function(){
		if(value != "NONE"){

			var from_unit_text = $("#dmy_5_cl option:selected").val();
			var to_unit_text = $("#dmy_6_cl option:selected").val();	
			
			//alert(from_unit_text);

			var from_value = Number($('#age_Start_cl').val());
			var to_value = Number($('#age_To_cl').val());
			
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
					$('#age_Start_cl').val("").focus();
				}
			}else if(from_unit_text == "DAY" && to_unit_text == "MONTH"){				 
					if(from_value_toMonth > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#age_Start_cl').val("").focus();
					}
			 }else if(from_unit_text == "MONTH" && to_unit_text == "DAY"){	
					if(to_value_toMonth < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#age_To_cl').val("").focus();
				    }
		    }else if(from_unit_text == "DAY" && to_unit_text == "YEAR"){				 
					if(from_value_toYear > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#age_Start_cl').val("").focus();
					}
			 }else if(from_unit_text == "YEAR" && to_unit_text == "DAY"){				 
					if(to_value_toYear < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#age_To_cl').val("").focus();
				    }
		    }else if(from_unit_text == "MONTH" && to_unit_text == "YEAR"){				 
					if(from_value_MonthtoYear > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#age_Start_cl').val("").focus();
					}
			 }else if(from_unit_text == "YEAR" && to_unit_text == "MONTH"){				
					if(to_value_MonthtoYear < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#age_Start_cl').val("").focus();
					}
			 }
			
		//});	
		}	
		
	}
	
	if(value != "NONE"){
	//$("#dmy_6_cl").change(function(){	
		
		var from_unit_text = $("#dmy_5_cl option:selected").val();
		var to_unit_text = $("#dmy_6_cl option:selected").val();	
		
		var from_value = Number($('#age_Start_cl').val());
		var to_value = Number($('#age_To_cl').val());
		
		var from_value_toMonth = Number(from_value/30);
		var to_value_toMonth = Number(to_value/30);	
		var from_value_toYear = Number(from_value/365);
		var from_value_MonthtoYear = Number(from_value/12);
		var to_value_MonthtoYear = Number(to_value/12);
		
		if(from_unit_text == to_unit_text){
			if(from_value > to_value){
				message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
				alertError(message);
				$('#age_To_cl').val("").focus();
			}
		}else if(from_unit_text == "DAY" && to_unit_text == "MONTH"){				
				if(from_value_toMonth > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#age_To_cl').val("").focus();
				}
		 }else if(from_unit_text == "MONTH" && to_unit_text == "DAY"){					
				if(to_value_toMonth < from_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#age_To_cl').val("").focus();
				}
		}else if(from_unit_text == "DAY" && to_unit_text == "YEAR"){				 
				if(from_value_toYear > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#age_To_cl').val("").focus();
				}
		 }else if(from_unit_text == "YEAR" && to_unit_text == "DAY"){
				var to_value_toYear = to_value/365;		
				if(to_value_toYear < from_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#age_To_cl').val("").focus();
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
					$('#age_To_cl').val("").focus();
				}
		 }
		
	//});	
	}
}

function selectFileTXT_CL(type,select_file,file_format,file_format2,view_btn){
	var tbl_name = "";
	var tbl_col = "";
	var view_button = view_btn;
	var select_file_name = "";
	var validateFile = "";
	var cov_code = $("#pass_Insurance_coverage_cl").val();
	var download_modal = "";
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
		download_modal = "download_tb_TaxReduce_view";
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
	//$("#select_file_"+select_file+"_CL").unbind("change");	
	
	$("#"+modalAuto_name+" .modal-header>h4>span").text(file_name);
	//$("#"+modal_name+" .modal-header>h4>span").html(" ("+headerText+")");
	
	if(file_format2 != ""){
		if(check_filename(selectFile, file_format, file_format2) == false){
			$("#"+textFile).val("");
			$("#"+selectFile).val("");
			$('#'+view_button).prop('disabled', true);		
			$('#'+view_button+">span").removeClass("activecolorblue").addClass("activecolorgray");

		}else{;
			openFile(event,selectFile,tbl_name,tbl_col);
			openFile(event,selectFile,tblAuto_name,tbl_col);			
			
			$("#base64_fileTXT_CL").val("");
			
			$("#"+modalAuto_name).modal("show");	
			
			/*save file*/
			convertToBase64(selectFile, file_type_id);
			 /*if(checkfile_policyDupicate(file_name,"txt") == false){			  
				 message = "ไม่สามารถอัพโหลดได้ เนื่องจากมีชื่อไฟล์นี้อยู่แล้ว";
				 alertError(message);					    
				$("#fileuploads_TaxText"+select_file_name+"_CL").val("");
			 }*/
			
			
			$("#"+file_button1).unbind();
			$("#"+file_button1).click(function() {
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
								
								//console.log("save file>>"+datajson);
												
								$.ajax({
								    type: "POST",
								    url : "BasePlanCL_save_file_Servlet",
								    data: datajson,       
								    success : function(response) {					    	
								    	$("#hdd_fileID"+select_file_name).val(response.file_id);
								    	$("#hdd_layoutID"+select_file_name).val(response.rate_layout_id);
								    	$("#"+textFile).val(response.file_name);
								    	
								    	$("#"+textFile).val(file_name);

										$('#'+view_button+">span").removeClass("activecolorgray").addClass("activecolorblue").attr("onclick","openFileTextRider_CL('"+file_name+"','"+obj_ref+"', "+tbl_col+", '"+tbl_name+"', '"+modal_name+"')");
										$("#"+download_modal).attr("onclick", "openFile_target('"+file_name+"','"+obj_ref+"','txt_download')");
										
										$('#'+del_button+"_"+select_file_name+">span").removeClass("activecolorgray").addClass("activecolorblue");
										$('#'+download_button+"_"+select_file_name+">span").removeClass("activecolorgray").addClass("activecolorblue").attr("onclick", "openFile_target('"+file_name+"','"+obj_ref+"','txt_download')");
										$("#modal_waiting").modal('hide');
										$("body").addClass("body_nopadding");
								    },
								    error : function(response) {	
								    	//alert("save file error");
								    	message = "ไม่สามารถบันทึกไฟล์ได้";
										alertError(message);
								    	$("#"+textFile).val("");
								    }
								    
								
								});	
					 	    	
					 	   	$("#base64_fileTXT_CL").val("");
					 	   	
					 	    }
					    })
		    		 
				 }
				
				
							
				/*end save file*/
				
				
				
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
			
			convertToBase64(selectFile, file_type_id);
			
			$("#"+file_button1).unbind();
			$("#"+file_button1).click(function() {
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
										$("#modal_waiting").modal('hide');
										$("body").addClass("body_nopadding");
								    },
								    error : function(response) {	
								    	//alert("save file error");
								    	message = "ไม่สามารถบันทึกไฟล์ได้";
										alertError(message);
								    	$("#"+textFile).val("");
								    }
								   
								});	
					 	    	
					 	       $("#base64_fileTXT_CL").val("");
					 	    }
					    })
		    		 
				 }
				 
							
				/*end save file*/

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

/*ผู้ได้รับความคุ้มครอง*/
function getAge_fromBasicInfo(){
	$("#tb_personProtected tbody>tr").each(function(){
		
		var chkbox = $(this).find("input:checkbox");
		var min_age  = $(this).find("td:nth-child(3) input");
		var max_age  = $(this).find("td:nth-child(5) input");
		var min_age_unit  = $(this).find("td:nth-child(4) select");
		var max_age_unit  = $(this).find("td:nth-child(6) select");
		var premium_sl  = $(this).find("td:nth-child(7) select");
		
		/*from Basic Info*/
		var age_Start_cl  =$("#age_Start_cl").val();
		var age_unitStart_cl  =$("#dmy_5_cl option:selected").text();
		var age_To_cl  =$("#age_To_cl").val();
		var age_unitTo_cl  =$("#dmy_6_cl option:selected").text();
		
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
function check_fromto(id){
	
	var min_value = $("#person_min"+id).val();
	var max_value = $("#person_max"+id).val();

	if($("#person_min_unit"+id+" option:selected").text() != "None" && $("#person_max_unit"+id+" option:selected").text() != "None"){
		//$("#person_min"+id).on('blur', function () {
		if(min_value != "" && max_value != ""){
		  var from_unit_text = $("#person_min_unit"+id+" option:selected").val();
		  var to_unit_text = $("#person_max_unit"+id+" option:selected").val();
			
		  var from_value = Number($('#person_min'+id).val());
		  var to_value = Number($('#person_max'+id).val());	
		  
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
					$('#person_min'+id).val("").focus();
				}
			 }else if(from_unit_text == "DAY" && to_unit_text == "MONTH"){
					if(from_value_toMonth > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#person_min'+id).val("").focus();
					}
			 }else if(from_unit_text == "MONTH" && to_unit_text == "DAY"){
					if(to_value_toMonth < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#person_min'+id).val("").focus();
					}
			 }else if(from_unit_text == "DAY" && to_unit_text == "YEAR"){				 
					if(from_value_toYear > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#person_min'+id).val("").focus();
					}
			 }else if(from_unit_text == "YEAR" && to_unit_text == "DAY"){				 
					if(to_value_toYear < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#person_min'+id).val("").focus();
					}
			 }else if(from_unit_text == "MONTH" && to_unit_text == "YEAR"){				 
					if(from_value_MonthtoYear > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#person_min'+id).val("").focus();
					}
			 }else if(from_unit_text == "YEAR" && to_unit_text == "MONTH"){				 
					if(to_value_MonthtoYear < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#person_min'+id).val("").focus();
					}
			 }
		//});
		}
		
		if(max_value != "" && min_value != ""){
	   //$("#person_max"+id).on('blur', function () {		
		   
		 var from_unit_text = $("#person_min_unit"+id+" option:selected").val();
		 var to_unit_text = $("#person_max_unit"+id+" option:selected").val();
		 
		 var from_value_toMonth = Number(from_value/30);
		 var to_value_toMonth = Number(to_value/30);
		 var from_value_toYear = Number(from_value/365);
		 var to_value_toYear = Number(to_value/365);
		 var from_value_MonthtoYear = Number(from_value/12);
		 var to_value_MonthtoYear = Number(to_value/12);
		 
		 var from_value = Number($('#person_min'+id).val());
		 var to_value = Number($('#person_max'+id).val());
		 
		  if(from_unit_text == to_unit_text){
				if(from_value > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#person_max'+id).val("").focus();
				}
		  }else if(from_unit_text == "DAY" && to_unit_text == "MONTH"){				 
					if(from_value_toMonth > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#person_max'+id).val("").focus();
					}
		  }else if(from_unit_text == "MONTH" && to_unit_text == "DAY"){				 
					if(to_value_toMonth < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#person_max'+id).val("").focus();
					}
		  }else if(from_unit_text == "DAY" && to_unit_text == "YEAR"){				 
					if(from_value_toYear > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#person_max'+id).val("").focus();
					}
		  }else if(from_unit_text == "YEAR" && to_unit_text == "DAY"){				
					if(to_value_toYear < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#person_max'+id).val("").focus();
					}
		  }else if(from_unit_text == "MONTH" && to_unit_text == "YEAR"){				 
					if(from_value_MonthtoYear > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#person_max'+id).val("").focus();
					}
		  }else if(from_unit_text == "YEAR" && to_unit_text == "MONTH"){
					if(to_value_MonthtoYear < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#person_max'+id).val("").focus();
					}
			 }
		
		//});
		}
	}
}

function check_fromtoUnit(id){
	var min_unit = $("#person_min_unit"+id+" option:selected").val();
	var max_unit = $("#person_max_unit"+id+" option:selected").val();
	
	if($("#person_min_unit"+id+" option:selected").text() != "None" && $("#person_max_unit"+id+" option:selected").text() != "None"){
		//$("#person_min_unit"+id).change(function(){
		if(min_unit != "NONE"){
			
			var from_unit_text = $("#person_min_unit"+id+" option:selected").val();
			var to_unit_text = $("#person_max_unit"+id+" option:selected").val();	
			
			var from_value = Number($('#person_min'+id).val());
			var to_value = Number($('#person_max'+id).val());
			
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
					$('#person_min'+id).val("").focus();
				}
			}else if(from_unit_text == "DAY" && to_unit_text == "MONTH"){				 
					if(from_value_toMonth > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#person_min'+id).val("").focus();
					}
			 }else if(from_unit_text == "MONTH" && to_unit_text == "DAY"){	
					if(to_value_toMonth < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#person_max'+id).val("").focus();
				    }
		    }else if(from_unit_text == "DAY" && to_unit_text == "YEAR"){				 
					if(from_value_toYear > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#person_min'+id).val("").focus();
					}
			 }else if(from_unit_text == "YEAR" && to_unit_text == "DAY"){				 
					if(to_value_toYear < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#person_max'+id).val("").focus();
				    }
		    }else if(from_unit_text == "MONTH" && to_unit_text == "YEAR"){				 
					if(from_value_MonthtoYear > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#person_min'+id).val("").focus();
					}
			 }else if(from_unit_text == "YEAR" && to_unit_text == "MONTH"){				
					if(to_value_MonthtoYear < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#person_min'+id).val("").focus();
					}
			 }
			
		//});
		}
	}
	
		//$("#person_max_unit"+id).change(function(){	
		if(max_unit != "NONE"){
			
			var from_unit_text = $("#person_min_unit"+id+" option:selected").val();
			var to_unit_text = $("#person_max_unit"+id+" option:selected").val();	
			
			var from_value = Number($('#person_min'+id).val());
			var to_value = Number($('#person_max'+id).val());
			
			var from_value_toMonth = Number(from_value/30);
			var to_value_toMonth = Number(to_value/30);	
			var from_value_toYear = Number(from_value/365);
			var from_value_MonthtoYear = Number(from_value/12);
			var to_value_MonthtoYear = Number(to_value/12);

			if(from_unit_text == to_unit_text){
				if(from_value > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#person_max'+id).val("").focus();
				}
			}else if(from_unit_text == "DAY" && to_unit_text == "MONTH"){				
					if(from_value_toMonth > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#person_max'+id).val("").focus();
					}
			 }else if(from_unit_text == "MONTH" && to_unit_text == "DAY"){					
					if(to_value_toMonth < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#person_max'+id).val("").focus();
					}
			}else if(from_unit_text == "DAY" && to_unit_text == "YEAR"){				 
					if(from_value_toYear > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#person_max'+id).val("").focus();
					}
			 }else if(from_unit_text == "YEAR" && to_unit_text == "DAY"){
					var to_value_toYear = to_value/365;		
					if(to_value_toYear < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#person_max'+id).val("").focus();
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
						$('#person_max'+id).val("").focus();
					}
			 }
			
		//});
	}
}

function keyRiderCode_cl(){
	var $rider_code = $("#key_rider_code_cl");
	
	if($rider_code.val() != ""){
		
		//$rider_code.val( $rider_code.val().replace(/[^a-zA-Z0-9\s\-]/g, "" ));		
		
		$("#validate_input1_1_cl").hide();
	}else{
		$("#validate_input1_1_cl").show();
	}
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
		if(discountFrom == "" || discountTo == "" || discountTo == "0"){
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
		
		if($("#min_EM_cl").val() != "0.00"){
			if($("#input_fileCal_1_CL").val() == ""){
				error++;
			}
		}
	}	
	
	
	if(error > 0){
		message = "กรุณาระบุข้อมูลให้ครบถ้วน";
		nameTab 	= "menu_CL_3";
		Statuesave = "N";
		alertError(message);
	}else{
		nameTab 	= "menu_CL_3";
		Statuesave = "Y";
		dataSave_calInsurancePremium();
		var message = "บันทึกข้อมูลเรียบร้อย";
		alertSuccess(message);
	}
	
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

/***************************/
/*Fix เพิ่ม*/
$("#ch_PremRider_cl").click(function(){
	if($(this).prop("checked") == true){
		$("#rd_insurance_premium_cl").prop("disabled", false);
		$("#rd_Time_insurance_premium_cl").prop("disabled", false);
	}else{
		$("#rd_insurance_premium_cl").prop("disabled", true);
		$("#rd_insurance_premium_cl").prop("checked", false);
		$("#rd_Time_insurance_premium_cl").prop("disabled", true);
		$("#rd_Time_insurance_premium_cl").prop("checked", false);
		
		$("#text_insurance_premium_cl, #text_Time_insurance_premium_cl").prop("disabled", true).val("");
		$("#dmy_3_cl, #dmy_4_cl").prop("disabled", true);
		$("#dmy_3_cl option[value='YEAR'], #dmy_4_cl option[value='YEAR']").attr("selected", true);
		
		$("#ch_sperately_pay_ch").prop("disabled" ,true);
		$("#ch_sperately_pay_ch").prop("checked" ,false);
		
		$("#tb_Sperately_Pay input:checkbox").prop("disabled" ,true);
		$("#tb_Sperately_Pay input:checkbox").prop("checked" ,false);
		$("#tb_Sperately_Pay input:text").prop("disabled" ,true).val("0.00");
	}
});


/***************************/

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
	
	/*ระยะประกันของสัญญาประกันชีวิต*/
	var term_contract_data = [];
	if($("#rd_anniversary_cl").prop("checked") == true){
		obj = {};
		obj["radio"] = $("#rd_anniversary_cl").val();
		obj["value"] = [];
		
		obj_value = {};		
		obj_value["min_age"] = "0";
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
	
	if($("#ch_PremRider_cl").prop("checked") == true){
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
			obj = {};
			obj["text"] = $(this).find("td:nth-child(2) input").val();
			obj["rate_cat_id"] = $(this).find("td:nth-child(3) input[name='tax_type[]']").val();
			obj["rate_layout_id"] = $(this).find("#hdd_layoutID"+ID).val();
			obj["file_id"] = $(this).find("#hdd_fileID"+ID).val();
			TaxReduce_data.push(obj);
		}		
	});
	
	var json_data_BasicInfo = {
        	"method": "Tab_Basic_Information",
            "passInsurance": $("#pass_Insurance_coverage_cl").val(),
            "cov_cat_id" : $("#cov_cat_id").val(),
            "core_biz_prd_code" : $("#key_rider_code_cl").val(),
            "name_th": $("#thai_Name_cl").val(),
            "name_en": $("#eng_Name_cl").val(),
            "sale_eff_date": $("#appStart_date_cl").val(),
            "sale_exp_date": $("#appTo_date_cl").val(),
            "min_age": $("#age_Start_cl").val(),
            "min_age_unit" : $("#dmy_5_cl option:selected").val(),
            "max_age": $("#age_To_cl").val(),
            "max_age_unit" : $("#dmy_6_cl option:selected").val(),
            "max_insure_age": $("#maximum_Protection_To_cl").val(),
            "gender": gender,
            "ch_separate_pay" : ch_sperately_pay,
            "mode": JSON.stringify(mode_data),
            "filing_Channel" : JSON.stringify(filing_data),
            "contract_Type" : $("#sl_promise_type_cl option:selected").val(), /*ประเภทสัญญา*/
            "per_unit" : "", 
            //"per_unit" : $("#sl_insurance_premium_cl option:selected").val(), /*ต่อหน่วย*/
            "protect_Type" : $("#sl_Protection_type_cl option:selected").val(), /*ประเภทความคุ้มครอง*/
            "term_contract" : JSON.stringify(term_contract_data),/*ระยะประกันของสัญญาเพิ่มเติม*/
            "payment_contract" : JSON.stringify(payment_contract_data),
            "mortality_Tli" : JSON.stringify(mortality_data),/*ตารางมรณะ*/
            "tpd_Tli" :  JSON.stringify(tpd_data),/*ตารางทุรพลภาพ*/
            "prem_Rate" : Math.round10($("#text_Calculate_premiums_1cl").val()/100 , -4),/*อัตราดอกเบี้ยที่ใช้ในการคำนวณเบี้ยประกัน*/
            "table_TaxReduce" : JSON.stringify(TaxReduce_data),/*ลดหย่อนภาษี*/
            "sum_decr_rate": Math.round10($("#text_Calculate_premiums_2cl").val()/100 , -4),/*อัตราดอกเบี้ยที่ใช้ในการคำนวณทุน*/
            "Taxreduce_healthy":Math.round10($("#text_tax_healthCL").val()/100 , -4)/*ลดหย่อนภาษีสุขภาพ*/
        	
	}
	
	$("#code_Coverage_CL").val($("#pass_Insurance_coverage_cl").val());
	$("#approve_nameTH_CL").val($("#thai_Name_cl").val());
	$("#approve_nameEN_CL").val($("#eng_Name_cl").val());
	
	//console.log(JSON.stringify(json_data_BasicInfo));
	$.ajax({
		url: 'RiderCL_SaveData_Servlet',
		type: "POST",
		data: json_data_BasicInfo,
		success: function (response) {
			var cov_status_PD = $("#cov_status").val();
			var cov_status_RP = $("#cov_status_RP").val();
			
			if (response == "success"){
				
				//enable tab
	    		 $("#menu_CL_7").removeClass("disabledAll");
	    		 $("#menu_CL_8").removeClass("disabledAll");
	    		 $("#menu_CL_3").removeClass("disabledAll");
	    		 $("#menu_CL_4").removeClass("disabledAll");
	    		 $("#menu_CL_5").removeClass("disabledAll");
	    		 $("#menu_CL_9").removeClass("disabledAll");
	    		 $("#menu_CL_6").removeClass("disabledAll");
				
				if((cov_status_PD == "NEW" && cov_status_RP == "NEW") || (cov_status_PD == "" && cov_status_RP == "")){
	    			 console.log("save>> "+response)
	    			 
	    			 var flag = $("#flag_email_send_CL").val();
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
	/*end create json*/
}

/*2. Policy Wording */
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
	//alert(JSON.stringify(json_data_policyWording));
	$.ajax({
		url: 'RiderCL_SaveData_Servlet',
		type: "POST",
		data: data_save,
		success: function (response) {
		/*if (response == "success"){
		}else if (response == "fail"){
		}*/
		}
	});
	console.log("data:",data_save);
	/*end create json*/

}

/*3. ผู้ได้รับความคุ้มครอง FIXME *PUN */ 
function dataSave_protectedPerson(){
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
	
	var protectedPerson = new Array();
	$("#tb_personProtected tbody>tr").each(function(){
		if($(this).find("input:checkbox").prop("checked") == true){
			obj = {};
			obj["type"] 		=  $(this).find("td:nth-child(1) input").val();
			obj["min_age"] 		= $(this).find("td:nth-child(3) input[name='person_min[]']").val();
			obj["min_age_unit"] = $(this).find("td:nth-child(4) option:selected").val();
			obj["max_age"]		= $(this).find("td:nth-child(5) input[name='person_max[]']").val();
			obj["max_age_unit"] = $(this).find("td:nth-child(6) option:selected").val();
			obj["insurance_premium"] = $(this).find("td:nth-child(7) option:selected").val();
			protectedPerson.push(obj);
		}
	})
	
	var json_data_protectedPerson = {
		"method": "Tab_ProtectedPerson",
        "passInsurance": $("#pass_Insurance_coverage_cl").val(),
		"protectedPerson" : JSON.stringify(protectedPerson),
		"gender": gender,
		"max_insure_age": $("#maximum_Protection_To_cl").val()
	}
	
	$.ajax({
		url: 'RiderCL_SaveData_Servlet',
		type: "POST",
		data: json_data_protectedPerson,
		success: function (response) {
		
		}
	});
	console.log("data",json_data_protectedPerson);
}

/*3. การคำนวณเบี้ยประกัน */
function dataSave_calInsurancePremium(){
	
	/*Age Band*/
	var ageBand = new Array();
	$("#tb_Age_Band tbody>tr").each(function(){
		if($(this).find("input:checkbox").prop("checked") == true){
			obj = {};
			obj["value"] = $(this).find("td:nth-child(1) input").val();
			ageBand.push(obj);
		}
	})

	/*เบี้ยมาตรฐาน*/
	var select_insurance_premium = new Array();	
	var table_insurance_premium = new Array();
	
	if($("#ch_standard_premium_cl").prop("checked") == true){
		
		if($("#sl_menu3_insurance_premium_cl option:selected").text() != "None"){
			obj_main = {};
			obj_main["pass"] = $("#sl_menu3_insurance_premium_cl option:selected").val();
			obj_main["text"] = $("#sl_menu3_insurance_premium_cl option:selected").text();
			select_insurance_premium.push(obj_main);
			
			$("#tb_PM_Rate1 tbody>tr").each(function(){
				obj = {};
				
				var id = $(this).attr("id");
					id = id.replace("tbody_PM_Rate","");
				var level = $(this).data("level");
				if(level == 1){
					obj["rate_cat_id"] = $("#rateCat_tbStardard").val();
					obj["rate_type"] = $(this).find("td:nth-child(2) select>option:selected").val();			
					obj["age_band_code"] = "";
				}else{
					var group = $(this).attr("data-group");
					obj["rate_cat_id"] = $("#rateCat_tbStardard_age").val();
					obj["rate_type"] = $("#tbody_PM_Rate"+group).find("td:nth-child(2) select>option:selected").val();
					obj["age_band_code"] = $(this).find("td:nth-child(2) label").text();
				}
				
				obj["rate_layout_id"] = $("#rm_rateLayout"+id).val();
				obj["file_id"] = $("#rm_fileID"+id).val();
				obj["file"] = $(this).find("td:nth-child(3) input[type='text']").val();
				
				table_insurance_premium.push(obj);
			});
			
		}
	}
	
	/* อัตราเบี้ยเพิ่มตามขั้นอาชีพ */
	var rateByJob = new Array();
	$("#tb_premiumLevel_CL tbody>tr").each(function(){
		obj = {};
		obj["level"] = $(this).find("td:nth-child(1) label").text();
		obj["rate_from"] = Math.round10($(this).find("td:nth-child(2) input[type='text']").val()/100, -4);
		obj["rate_to"] = Math.round10($(this).find("td:nth-child(3) input[type='text']").val()/100, -4);
		obj["max_perSA"] = $(this).find("td:nth-child(4) input[type='text']").val();
		if(obj["rate_from"] !== "" && obj["rate_to"] !== ""){
			rateByJob.push(obj);
		}
	})
	
	/* มีส่วนลดเบี้ยประกัน */
	var rate_discount = new Array();
		obj = {};
		obj["prem_dis"] = $("#ch_importInsurance_cl").is(":checked");
		obj["min_prem_dis_rate"] = Math.round10($("#discountInsurancePremiumsSta").val()/100, -4);
		obj["max_prem_dis_rate"] = Math.round10($("#discountInsurancePremiumsTo").val()/100, -4);
	rate_discount.push(obj);
	
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

	/*checkbox*/
	var chk_extra = $("#ch_insurance_premium_Extra_cl").prop("checked");
	var chk_extra_value = false;
	if(chk_extra == true){
		chk_extra_value = true;
	}else{
		chk_extra_value = false;
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
	
	var json_data_cal_insurancePremium = {
			"method": "Tab_CalInsurance_Premium",
	        "passInsurance": $("#pass_Insurance_coverage_cl").val(),
			"age_band" : JSON.stringify(ageBand),
			"select_insurance_premium" : JSON.stringify(select_insurance_premium),
			"table_insurance_premium" : JSON.stringify(table_insurance_premium),
			"table_rate_job" : JSON.stringify(rateByJob),
			"is_substd" : chk_extra_value,
			"select_extra_Rate" : JSON.stringify(sl_extra_premium),
			"table_extra_Rate" : JSON.stringify(tb_extra_premium),
			"EM_file" : JSON.stringify(tb_em),
            "min_EM": Math.round10($("#min_EM_cl").val()/100, -4),
            "max_EM": Math.round10($("#max_EM_cl").val()/100, -4),
			"prem_dis" : JSON.stringify(rate_discount),
			"is_standard_risk" : tb_risk
		}
		
		$.ajax({
			url: 'RiderCL_SaveData_Servlet',
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

/*4. ตารางมูลค่ากรมธรรม์*/
function save_tab_tableValueInsurance(){
	
	/* ตารางความเสี่ยงมาตรฐาน */
	var standard_risk = [];
		obj_main = {};
		obj_main["pass"] = $("#dbBox1_CL option:selected").val();
		obj_main["text"] = $("#dbBox1_CL option:selected").text();
		
		var form1_list_data = [];
		$("#tb_RateValue1 tbody>tr").each(function(){
			var file_value = $(this).find("td:nth-child(2) input:text").val();
			if(file_value != ""){
				var level = $(this).data("level");
				var id = $(this).attr("id");
					id = id.replace("tbody_Rate_Value","");
				
				obj = {};
				if(level == 1){		
					obj["rate_type"] = $(this).find('td:nth-child(1) label').text();			
					obj["age_band_code"] = "";
					obj["rate_cat_id"] = $("#rateCat_tbRiskStardard").val();
				}else{
					var data_group = $(this).data("group");
					var rate_type = $("#tbody_Rate_Value"+data_group).find("td:nth-child(1) label").text();
					
					obj["rate_type"] = rate_type;
					obj["age_band_code"] = $(this).find("td:nth-child(1) label").text();
					obj["rate_cat_id"] =  $("#rateCat_tbRiskStardard_ageBand").val();
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
	var standard_risk_row_obj = new Array();
		obj = {};
		obj["rate_type"] = "";
		obj["age_band_code"] = "";
		obj["rate_cat_id"] = $("#rateCat_tbRiskLowStardard").val();
		obj["rate_layout_id"] = $("#cvLow_rateLayout2").val();
		obj["file_id"] = $("#cvLow_fileID2").val();
		obj["file"] = $("#input_file_2_CL").val();
	standard_risk_row_obj.push(obj);
	
	var standard_risk_row = new Array();
		obj = {};
		obj["pass"] = $("#dbBox2_CL option:selected").val();
		obj["text"] = $("#dbBox2_CL option:selected").text();
		obj["layout"] = standard_risk_row_obj;
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
		url: 'RiderCL_SaveData_Servlet',
		type: "POST",
		data: data_json,
	     success: function (response) {
	    	if (response == "success"){
	    	}else if (response == "fail"){
	    	}
	    }
	});
	console.log("data",data_json);
}

/*5. ผลประโยชน์/ความคุ้มครอง*/
function save_tab_benefitsCoverage(){
	
	var benefitsCoverage = new Array();
	$("#tbl_benefit_CL tbody>tr").each(function(){
		var className = $(this).find("td:nth-child(1) i").attr('class');
		if(className == "glyphicon glyphicon-ok"){
			obj = {};
			obj["pass"] = $(this).find("td:nth-child(1)").data('value');
			obj["text"] = $(this).find("td:nth-child(2)").text();
			benefitsCoverage.push(obj)
			
			document.getElementById('resultTab').value += "," + $(this).find("td:nth-child(1)").data('value');
			
		}
	})
	///LookupCatValueAcessData 
	$.ajax({
        type: "POST",
        url : "RiderCL_Data_default_Servlet",
        data: {
        	method 	: "getLookupBenefitdata",
        },       
        success : function(response) {	
        	lookupCatValueAcessData(response);
        },
        error : function(response) {	
        	console.log("get bnf data error.");
        }
	});
	
	var data_json = {
			"method": "Tab_Benefits_Coverage_Checker",
			"passInsurance": $("#pass_Insurance_coverage_cl").val(),
            "benefitsCoverage": JSON.stringify(benefitsCoverage)
        }
	
	$.ajax({
	url: 'RiderCL_SaveData_Servlet',
	type: "POST",
	data: data_json,
	 success: function (response) {	
		get_dataBenefit(response);
	 }
	});
	console.log("data",data_json);
}

function get_dataBenefit(response){

		/********tab************/	
		for (i in response.Tab_Benefit_Check) {
			/*ข้อมูลในแต่ล่ะ tab*/
			for(j in response.Tab_Benefit_Check[i]){
				
				if(j == 0){
					
					var obj_bnf = response.Tab_Benefit_Check[i][j];		
					var bnf_id = obj_bnf.benefit_item.bnf_item_id;
					var bnf_name = obj_bnf.benefit_item.item_name;
					
					/*CV*/
					var bnf_cv = obj_bnf.cov_terminate.return_cash_surr;
					
				/************get master***********/
				
				$("#benefitDetail_CL .tab-content").each(function(){
					var tab_bnf = $(this).data("name");			
					if(bnf_name == tab_bnf){
						$(this).find(".tab-pane>input:hidden").val(bnf_id);
						
						/*คืน CV*/
						if(bnf_cv == true){
							$(this).find(".tab-pane .benefit_cv_box input:checkbox").prop("checked", true);
						}else{
							$(this).find(".tab-pane .benefit_cv_box input:checkbox").prop("checked", false);
						}
						
					}			
				});	
	
				}else{
					
				$('#tbl_benefit_CL >tbody i.glyphicon-ok').each(function(){
				var tabID = $(this).attr("id");
					tabID = tabID.replace("iconBenefitCL","");
					
				var bnf_active = $("#imgOK_benefitCL"+tabID).attr("data-value");
				var bnf_name = response.Tab_Benefit_Check[i][0].benefit_item.item_name;
				
				if(bnf_active == bnf_name){
				/************get table***********/			
				var numberImgOK = 0;
				var iii = 0;	
				
				for(ii in response.Tab_Benefit_Check[i][j]){
					/*************************start get data*****************************/
					
					/***********name*********/
					var obj_bnf_name = response.Tab_Benefit_Check[i][j][ii].benefit;
					var objKey = response.Tab_Benefit_Check[i][j][ii].benefit.objKey[0][1];
					
					
					/**********item**********/
					var obj_bnf_item = response.Tab_Benefit_Check[i][j][ii].benefitItem;

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
					var note = response.Tab_Benefit_Check[i][j][ii].benefitItem.note;
					/************amount*************/
					var obj_bnf_amount = response.Tab_Benefit_Check[i][j][ii].listBenefitSched[0].listBenefitAmountAccessData[0].benefit_amount;		
					var benef_amt = (obj_bnf_amount.benef_amt*100).toFixed(2);
					var benef_unit = obj_bnf_amount.benef_unit;
					var benef_scope = obj_bnf_amount.benef_scope;
					var benef_factor = obj_bnf_amount.benef_factor;
					
					/************limit*************/
					var obj_bnf_limit = response.Tab_Benefit_Check[i][j][ii].listBenefitSched[0].listBenefitLimit[0];
					var limit_amt_min = (obj_bnf_limit.min_limit_amt*100).toFixed(2);
					var limit_amt = (obj_bnf_limit.limit_amt*100).toFixed(2);
					var limit_unit = obj_bnf_limit.limit_unit;
					var limit_scope = obj_bnf_limit.limit_scope;
					
					/*******special_amount*******/
					var obj_bnf_special_amount = response.Tab_Benefit_Check[i][j][ii].listBenefitSched[0].listBenefitAmountAccessData[0].listBenefitSpecialAmount[0];
					var special_benef_amt = (obj_bnf_special_amount.benef_amt*100).toFixed(2);
					var special_benef_unit = obj_bnf_special_amount.benef_unit;
					
					/*************************end get data*****************************/
					
					/*create table*/										
						var BCID = "BC_0"+tabID;
						
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
									"<td id="+newID_Del+" class='text-center borderBlack vertical-middle'"+
									"onclick=\"imgCheckboxDel_benefit('"+imgDel+"');\""+
									"style='vertical-align: middle;'><i "+
									"class='glyphicon glyphicon-edit'></i></td>"+   	
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
							   "<td width='100px' class='borderBlack vertical-middle'><textarea class='form-control' id='benefit_remark"+numberImgOK+"'></textarea></td>"+
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
							   "<td class='text-center borderBlack'></td>"+
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
							   "<td width='100px' class='borderBlack vertical-middle'><textarea class='form-control' id='benefit_remark"+numberImgOK_Sub+"'></textarea></td>"+
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
						
										
						/*get lookup*/
						var lookup_unit = $("#lookup_unit").val();
							lookup_unit = lookup_unit.split(",");
						var lookup_frequency = $("#lookup_frequency").val();
							lookup_frequency = lookup_frequency.split(",");
						var lookup_factor_unit = $("#lookup_factor_unit").val();
							lookup_factor_unit = lookup_factor_unit.split(",");
						var lookup_factorUnit = $("#lookup_factorUnit").val();
							lookup_factorUnit = lookup_factorUnit.split(",");
						var lookup_factorScope = $("#lookup_factorScope").val();
							lookup_factorScope = lookup_factorScope.split(",");
							
							// unit
							var pass = 0;
							var text = 1;
							for(a = 0 ; a < lookup_unit.length/2 ; a++){
								var row_unit = "<option value='"+lookup_unit[pass]+"'>"+lookup_unit[text]+"</option>"
								pass = Number(parseInt(pass) + parseInt(2));
								text = Number(parseInt(text) + parseInt(2))
								$("#tbl_"+BCID+" #benefit_unit"+dd_number).append(row_unit);
								//$("#tbl_"+BCID+" #benefit_acc_unit"+dd_number).append(row_unit);
							}
							
							// frequency
							var pass = 0;
							var text = 1;
							for(aa = 0 ; aa < lookup_frequency.length/2 ; aa++){
								var row_frequency = "<option value='"+lookup_frequency[pass]+"'>"+lookup_frequency[text]+"</option>"
								pass = Number(parseInt(pass) + parseInt(2));
								text = Number(parseInt(text) + parseInt(2))
								
								$("#tbl_"+BCID+" #benefit_fq"+dd_number).append(row_frequency);
								//$("#tbl_"+BCID+" #benefit_factor_to"+dd_number).append(row_frequency);
							}					
							
							// factor unit
							var pass = 0;
							var text = 1;
							for(a = 0 ; a < lookup_factor_unit.length/2 ; a++){
								var row_factor_unit = "<option value='"+lookup_factor_unit[pass]+"'>"+lookup_factor_unit[text]+"</option>"
								pass = Number(parseInt(pass) + parseInt(2));
								text = Number(parseInt(text) + parseInt(2))
								$("#tbl_"+BCID+" #benefit_fund"+dd_number).append(row_factor_unit);
							//	$("#tbl_"+BCID+" #benefit_factor_unit"+dd_number).append(row_factor_unit);
							}
							
							// factor Unit
							var pass = 0;
							var text = 1;
							for(a = 0 ; a < lookup_factorUnit.length/2 ; a++){
								var row_factorUnit = "<option value='"+lookup_factorUnit[pass]+"'>"+lookup_factorUnit[text]+"</option>"
								pass = Number(parseInt(pass) + parseInt(2));
								text = Number(parseInt(text) + parseInt(2))
								$("#tbl_"+BCID+" #benefit_factor_unit"+dd_number).append(row_factorUnit);
								$("#tbl_"+BCID+" #benefit_acc_unit"+dd_number).append(row_factorUnit);
							}
							
							// factor Scope
							var pass = 0;
							var text = 1;
							for(a = 0 ; a < lookup_factorScope.length/2 ; a++){
								var row_factorScope = "<option value='"+lookup_factorScope[pass]+"'>"+lookup_factorScope[text]+"</option>"
								pass = Number(parseInt(pass) + parseInt(2));
								text = Number(parseInt(text) + parseInt(2))
								$("#tbl_"+BCID+" #benefit_factor_to"+dd_number).append(row_factorScope);
							}
							
							$("#tbl_"+BCID+" #benefit_unit"+dd_number).val(benef_unit).attr('selected', 'selected');
							$("#tbl_"+BCID+" #benefit_fund"+dd_number).val(benef_factor).attr('selected', 'selected');
							$("#tbl_"+BCID+" #benefit_fq"+dd_number).val(benef_scope).attr('selected', 'selected');
							$("#tbl_"+BCID+" #benefit_remark"+dd_number).val(note).attr('selected', 'selected');
							$("#tbl_"+BCID+" #benefit_factor_unit"+dd_number).val(limit_unit).attr('selected', 'selected');
							$("#tbl_"+BCID+" #benefit_factor_to"+dd_number).val(limit_scope).attr('selected', 'selected');
							$("#tbl_"+BCID+" #benefit_acc_unit"+dd_number).val(special_benef_unit).attr('selected', 'selected');

						}
					}
				});
			}
			/*if else*/
		}
			/**/
	}
		
		/*Permission*/
		SetUserPermission();
}
/*6. ผลประโยชน์/ความคุ้มครอง*/
function dataSave_benefitsCoverage(tab){

	var benefitsCoverage = []; 
	var benefitsCoverage_tab = new Array();

	var rows_main = $("#tbl_"+tab).find("tr[data-level='1']");						
	
	obj = {};
	obj["tab"] =  $("#hidden_"+tab).val();
	obj["value"] = [];
	
	$(rows_main).each(function(){
		var id = $(this).attr("data-id");
		obj_all = [];

		obj_value = {};	
		obj_value["sequence"] = $(this).find("td:nth-child(2)").text(),
		obj_value["main"] = true,
		obj_value["key_coverage"] = $(this).find("td:nth-child(3)").text(),
		obj_value["coverage"] = $(this).find("td:nth-child(4)").text(),
		obj_value["count"] = Math.round10($(this).find("td:nth-child(5) input[type='text']").val()/100, -4),
		obj_value["unit"] = $(this).find("td:nth-child(6) option:selected").val(),
		obj_value["by_capital"] = $(this).find("td:nth-child(7) option:selected").val(),
		obj_value["frequency"] = $(this).find("td:nth-child(8) option:selected").val(),
		/*obj_value["of_coverage"] = $(this).find("td:nth-child(9) div>div").text(),*/
		obj_value["of_coverage"] = '',
		obj_value["remark"] = $(this).find("td:nth-child(9) textarea").val(),
		obj_value["factor_min"] = Math.round10($(this).find("td:nth-child(10) input[type='text']").val()/100, -4),
		obj_value["factor_max"] = Math.round10($(this).find("td:nth-child(11) input[type='text']").val()/100, -4),
		obj_value["factor_unit"] = $(this).find("td:nth-child(12) option:selected").val(),
		obj_value["factor_per"] = $(this).find("td:nth-child(13) option:selected").val(),
		obj_value["accident_count"] = Math.round10($(this).find("td:nth-child(14) input[type='text']").val()/100, -4),
		obj_value["accident_unit"] = $(this).find("td:nth-child(15) option:selected").val()
		
		obj_all.push(obj_value);
		
		/*child*/
		$("#tbl_"+tab+" tr[data-group="+id+"]").each(function(){
			obj_value = {};	
			obj_value["sequence"] = $(this).find("td:nth-child(2)").text(),
			obj_value["main"] = false,
			obj_value["key_coverage"] = $(this).find("td:nth-child(3)").text(),
			obj_value["coverage"] = $(this).find("td:nth-child(4)").text(),
			obj_value["count"] = Math.round10($(this).find("td:nth-child(5) input[type='text']").val()/100, -4),
			obj_value["unit"] = $(this).find("td:nth-child(6) option:selected").val(),
			obj_value["by_capital"] = $(this).find("td:nth-child(7) option:selected").val(),
			obj_value["frequency"] = $(this).find("td:nth-child(8) option:selected").val(),
			/*obj_value["of_coverage"] = $(this).find("td:nth-child(9) div>div").text(),*/
			obj_value["of_coverage"] = '',
			obj_value["remark"] = $(this).find("td:nth-child(9) textarea").val(),
			obj_value["factor_min"] = Math.round10($(this).find("td:nth-child(10) input[type='text']").val()/100, -4),
			obj_value["factor_max"] = Math.round10($(this).find("td:nth-child(11) input[type='text']").val()/100, -4),
			obj_value["factor_unit"] = $(this).find("td:nth-child(12) option:selected").val(),
			obj_value["factor_per"] = $(this).find("td:nth-child(13) option:selected").val(),
			obj_value["accident_count"] = Math.round10($(this).find("td:nth-child(14) input[type='text']").val()/100, -4),
			obj_value["accident_unit"] = $(this).find("td:nth-child(15) option:selected").val()
			
			obj_all.push(obj_value);
		});
		
		obj["value"].push(obj_all);
		
	});
	
	benefitsCoverage.push(obj);
	
	/*คืน CV*/
	var cv_value = false;
	if($("#cv_"+tab).prop("checked") == true){
		cv_value = true;
	}else{
		cv_value = false;
	}

	var data_json = {
			"method": "Tab_Benefits",
        	"passInsurance": $("#pass_Insurance_coverage_cl").val(),
            "benefitsCoverage": JSON.stringify(benefitsCoverage),
            "cv": cv_value
    }
	
	$.ajax({
	url: 'RiderCL_SaveData_Servlet',
	type: "POST",
	data: data_json,
	 success: function (response) {
		
	 }
	});
	console.log("data",data_json);
}

/*7. บันทึกสลักหลัง*/
function dataSave_Endorse(){
	
	var basePlan = new Array();
	var rider = new Array();
	
	if($("#rd_endorseMatch_CL2").is(":checked")){
		/*basePlan*/
		$("#tbl_baseplanSelect tbody>tr").each(function(){
			obj = {};
			obj["key_insurance"] = $(this).find("td:nth-child(2) label").text();
			obj["name_insurance"] = $(this).find("td:nth-child(3)").text();
			basePlan.push(obj);
		})
		
		/*rider*/
		
		$("#tbl_riderSelect tbody>tr").each(function(){
			obj = {};
			obj["key_insurance"] = $(this).find("td:nth-child(2) label").text();
			obj["name_insurance"] = $(this).find("td:nth-child(3)").text();
			rider.push(obj);
		})
	}
	
	/*รายการขยายความคุ้มครอง*/
	var expand_coverage = new Array();
	$("#record_Table_CL tbody>tr").each(function(){
		obj = {};
		obj["key"] = $(this).find("td:nth-child(1)").attr("data-key");
		obj["expand_coverage"] = $(this).find("td:nth-child(3) input[type='text']").val();
		expand_coverage.push(obj);
	})
	
	var data_json = {
			"method": "Tab_Endorse",
        	"passInsurance": $("#pass_Insurance_coverage_cl").val(),
        	"bnf_id" : $("#endorse_bnf_id").val(),
			"basePlan" : JSON.stringify(basePlan),
			"rider" : JSON.stringify(rider),
			"expand_coverage" : JSON.stringify(expand_coverage)
        }
	//alert(JSON.stringify(data_json));
	$.ajax({
	url: 'RiderCL_SaveData_Servlet',
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

/*8. ขออนุมัติ*/
function dataSave_approved(claim){
	var code_Coverage = $("#pass_Insurance_coverage_cl").val();
	var name_TH = $("#name_TH").val();
	var name_EN = $("#name_EN").val();
	var status_policy = $("#status_policy").val();
	//var remark_user = $("textarea #remark_user").val();
	var status = "";
	var remark_noApproved = "";
	if(claim == "request"){
		status = "ขออนุมัติ"
	}else if(claim == "approved"){
		status = "อนุมัติ"
	}else{
		status = "ไม่อนุมัติ"
		remark_noApproved = $('#txt_noRemark').val();
	}
	var data_json = {
		"method": "Tab_Approved",
        "passInsurance": $("#pass_Insurance_coverage_cl").val(),
		"code_Coverage": code_Coverage,
    	"name_TH": name_TH,
    	"name_EN": name_EN,
    	"status_policy": status_policy,
    	/*"remark_user": remark_user,*/
    	"status": status,
    	"remark_noApproved": remark_noApproved
		     
	}
	//alert(JSON.stringify(data_json));
	 /*$.ajax({
		 type: "POST",
		 url: "", 
		 data: data_json,
		 success: function(result){
			
	 }});*/
	console.log("data",data_json)
}

//Tab Approved
function bt_approved(claim){
	var cov_code = $("#code_Coverage_CL").val();
	var name_TH = $("#approve_nameTH_CL").val();
	var name_EN = $("#approve_nameEN_CL").val();
	var status_policy = $("#status_policy").val();
	var groupName = $("#groupName").val();
	
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
		 url: "RiderCL_SaveData_Servlet", 
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
			
			
		 },error : function(response) {	
	        	console.log("save status error.")
	     },
	 });
	console.log("data",data_json)
	
	
}

function openFileTextRider_CL(file_name,file_ref,tableCol,tb_name,modal_name){
	var file_data = "";
		file_data = openFile_target(file_name, file_ref, 'txt');
	
	
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
    		   
    		   $("#download_tbl_NotStandardRisk_CL").attr("onclick", "openFile_target('"+file_name+"','"+file_ref+"','txt_download')");
     	      
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
		   
		   $("#download_tbl_PMRatePlan4Col_CL").attr("onclick", "openFile_target('"+file_name+"','"+file_ref+"','txt_download')");
 	      $("#download_tb_TaxReduce_view").attr("onclick", "openFile_target('"+file_name+"','"+file_ref+"','txt_download')");
  	     
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
