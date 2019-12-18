var Statuesave = "Y";
var nameTab	= "";
 
$(document).ready( function() {
	$(".diss_form").attr("disabled","disabled");
	
	// modal input pmRate
	$("#tb_input_modal_pmRate_OL").addClass("disabledbutton");
	$("#select_input_pmRate_OL").prop("checked",true);
	$("#select_input_pmRate_OL").click(function(){
		$("#tb_input_modal_pmRate_OL").addClass("disabledbutton");
		$("#spanRate1_OL").attr("disabled", false);
		$("#spanRate1_OL").parent().css("pointer-events","");
	});
	$("#select_input_pmRateOriginal_OL").click(function(){
		$("#tb_input_modal_pmRate_OL").removeClass("disabledbutton");
		$("#spanRate1_OL").attr("disabled", true);
		$("#spanRate1_OL").parent().css("pointer-events","none");
	});
	
	//ผลประโยชน์การขาย
	$("#div_SaleHaveCondition_OL").hide();
	//ระบุผลประโยชน์การขาย
	/*jQuery('.datepicker_ol').datetimepicker({
		  timepicker:false,
		  format:'d/m/Y',
		  yearOffset:543 
	});*/
	
	//ข้อกำหนดการรับประกัน
	/*jQuery('#menu_term1_datefrom_ol, #menu_term1_dateto_ol').datetimepicker({
		  timepicker:false,
		  format:'d/m/Y',
		  yearOffset:543 
	});
	
	jQuery('#menu_term1_datefrom_ol,#menu_term1_dateto_ol,#system_date_ol').datetimepicker({timepicker:false, format:'d/m/Y'});*/
	
	$("#tbl_insure_alone_OL").show();	
	$("#tbl_insure_many_OL").hide();
	$("#btn_insure_many_OL").hide();
	
	$("#tbl_deduct_cost_OL :input").prop("disabled", true);
	//$("#tbl_deduct_cost_OL,#panel_first_pay_premium_OL").css("opacity", "0.8");
	$("#tbl_check_data_OL3 :input").prop("disabled", true);
	
	// สร้าง ตารางแบ่งจ่าย
	var month = 1;
	for(var i=2 ; i<13 ; i++){
		month = month + 1;
		var row = "<tr>"+
					"<td class='borderBlack'>"+
					"<input id='ch_payment_"+i+"_ol' class='checkbox_prop' type='checkbox' onclick='ch_payment_fun("+i+");' value='"+month+"' disabled=''>"+
				"</td>"+
				"<td class='borderBlack'>"+
					"<label for='ch_payment_"+i+"_ol'>"+month+"</label>"+
				"</td>"+
				"<td class='borderBlack'>"+
					"<input id='set_Premium_Rate_"+i+"_ol' type='text' class='auto text-right form-control checkbox_prop' value='0.00' data-v-min='0.00' data-v-max='999.99' disabled='disabled'>"+
				"</td>"+
				"</tr>"
		$("#tb_Sperately_Pay_ol tbody").append(row);
	}
	
});

/*เมนู OL*/
$("#menu_OL_1").click(function(){
	if (Statuesave == "N" && nameTab != "menu_OL_1") {
	 	$("#modal_Checkkeyup_OL").modal("show");
	 	data = "menu_OL_1";
	}else{
		document.getElementById("ol_007_1_1-1").style.display = "block";
		document.getElementById("ol_007_1_1-3").style.display = "none";
		document.getElementById("ol_007_1_1-2").style.display = "none";
		document.getElementById("ol_007_1_1-4").style.display = "none";
		document.getElementById("ol_007_1_1-5").style.display = "none";
		document.getElementById("ol_007_1_1-7").style.display = "none";	
		document.getElementById("ol_007_1_1-6").style.display = "none";
	}
})
$("#menu_OL_2").click(function(){
	if (Statuesave == "N" && nameTab != "menu_OL_2") {
	 	$("#modal_Checkkeyup_OL").modal("show");
	 	data = "menu_OL_2";
	}else{
		document.getElementById("ol_007_1_1-1").style.display = "none";
		document.getElementById("ol_007_1_1-3").style.display = "none";
		document.getElementById("ol_007_1_1-2").style.display = "block";
		document.getElementById("ol_007_1_1-4").style.display = "none";
		document.getElementById("ol_007_1_1-5").style.display = "none";
		document.getElementById("ol_007_1_1-7").style.display = "none";	
		document.getElementById("ol_007_1_1-6").style.display = "none";
	}
})
$("#menu_OL_3").click(function(){
	if (Statuesave == "N" && nameTab != "menu_OL_3") {
	 	$("#modal_Checkkeyup_OL").modal("show");
	 	data = "menu_OL_3";
	}else{
		document.getElementById("ol_007_1_1-1").style.display = "none";
		document.getElementById("ol_007_1_1-3").style.display = "block";
		document.getElementById("ol_007_1_1-2").style.display = "none";
		document.getElementById("ol_007_1_1-4").style.display = "none";
		document.getElementById("ol_007_1_1-5").style.display = "none";
		document.getElementById("ol_007_1_1-7").style.display = "none";	
		document.getElementById("ol_007_1_1-6").style.display = "none";
		
		//set การคำนวณเบี้ยประกันภัย
		check_pm_rate_OL();
	}
})
$("#menu_OL_4").click(function(){		
	if (Statuesave == "N" && nameTab != "menu_OL_4") {
	 	$("#modal_Checkkeyup_OL").modal("show");
	 	data = "menu_OL_4";
	}else{
		document.getElementById("ol_007_1_1-1").style.display = "none";
		document.getElementById("ol_007_1_1-3").style.display = "none";
		document.getElementById("ol_007_1_1-2").style.display = "none";
		document.getElementById("ol_007_1_1-4").style.display = "block";
		document.getElementById("ol_007_1_1-5").style.display = "none";
		document.getElementById("ol_007_1_1-7").style.display = "none";	
		document.getElementById("ol_007_1_1-6").style.display = "none";
	}
})
$("#menu_OL_5").click(function(){
	if (Statuesave == "N" && nameTab != "menu_OL_5") {
	 	$("#modal_Checkkeyup_OL").modal("show");
	 	data = "menu_OL_5";
	}else{
		document.getElementById("ol_007_1_1-1").style.display = "none";
		document.getElementById("ol_007_1_1-3").style.display = "none";
		document.getElementById("ol_007_1_1-2").style.display = "none";
		document.getElementById("ol_007_1_1-4").style.display = "none";
		document.getElementById("ol_007_1_1-5").style.display = "block";
		document.getElementById("ol_007_1_1-7").style.display = "none";	
		document.getElementById("ol_007_1_1-6").style.display = "none";
	}
})		
$("#menu_OL_6").click(function(){
	if (Statuesave == "N" && nameTab != "menu_OL_6") {
	 	$("#modal_Checkkeyup_OL").modal("show");
	 	data = "menu_OL_6";
	}else{
		document.getElementById("ol_007_1_1-1").style.display = "none";
		document.getElementById("ol_007_1_1-3").style.display = "none";
		document.getElementById("ol_007_1_1-2").style.display = "none";
		document.getElementById("ol_007_1_1-4").style.display = "none";
		document.getElementById("ol_007_1_1-5").style.display = "none";
		document.getElementById("ol_007_1_1-7").style.display = "none";	
		document.getElementById("ol_007_1_1-6").style.display = "block";
	}
})
$("#menu_OL_7").click(function(){
	if (Statuesave == "N" && nameTab != "menu_OL_7") {
	 	$("#modal_Checkkeyup_OL").modal("show");
	 	data = "menu_OL_7";
	}else{
		document.getElementById("ol_007_1_1-1").style.display = "none";
		document.getElementById("ol_007_1_1-3").style.display = "none";
		document.getElementById("ol_007_1_1-2").style.display = "none";
		document.getElementById("ol_007_1_1-4").style.display = "none";
		document.getElementById("ol_007_1_1-5").style.display = "none";
		document.getElementById("ol_007_1_1-7").style.display = "block";	
		document.getElementById("ol_007_1_1-6").style.display = "none";
	}
})

	//ยืนยัน
function bt_changeTab_OL() {
	if (data == "menu_OL_1"){
		document.getElementById("ol_007_1_1-1").style.display = "block";
		document.getElementById("ol_007_1_1-3").style.display = "none";
		document.getElementById("ol_007_1_1-2").style.display = "none";
		document.getElementById("ol_007_1_1-4").style.display = "none";
		document.getElementById("ol_007_1_1-5").style.display = "none";
		document.getElementById("ol_007_1_1-7").style.display = "none";	
		document.getElementById("ol_007_1_1-6").style.display = "none";
	}else if (data == "menu_OL_2") {
		document.getElementById("ol_007_1_1-1").style.display = "none";
		document.getElementById("ol_007_1_1-3").style.display = "none";
		document.getElementById("ol_007_1_1-2").style.display = "block";
		document.getElementById("ol_007_1_1-4").style.display = "none";
		document.getElementById("ol_007_1_1-5").style.display = "none";
		document.getElementById("ol_007_1_1-7").style.display = "none";	
		document.getElementById("ol_007_1_1-6").style.display = "none";
	}else if (data == "menu_OL_3") {
		document.getElementById("ol_007_1_1-1").style.display = "none";
		document.getElementById("ol_007_1_1-3").style.display = "block";
		document.getElementById("ol_007_1_1-2").style.display = "none";
		document.getElementById("ol_007_1_1-4").style.display = "none";
		document.getElementById("ol_007_1_1-5").style.display = "none";
		document.getElementById("ol_007_1_1-7").style.display = "none";	
		document.getElementById("ol_007_1_1-6").style.display = "none";
		
		//set การคำนวณเบี้ยประกันภัย
		check_pm_rate_OL();
		
	}else if (data == "menu_OL_4") {
		document.getElementById("ol_007_1_1-1").style.display = "none";
		document.getElementById("ol_007_1_1-3").style.display = "none";
		document.getElementById("ol_007_1_1-2").style.display = "none";
		document.getElementById("ol_007_1_1-4").style.display = "block";
		document.getElementById("ol_007_1_1-5").style.display = "none";
		document.getElementById("ol_007_1_1-7").style.display = "none";	
		document.getElementById("ol_007_1_1-6").style.display = "none";
	}else if (data == "menu_OL_5") {
		document.getElementById("ol_007_1_1-1").style.display = "none";
		document.getElementById("ol_007_1_1-3").style.display = "none";
		document.getElementById("ol_007_1_1-2").style.display = "none";
		document.getElementById("ol_007_1_1-4").style.display = "none";
		document.getElementById("ol_007_1_1-5").style.display = "block";
		document.getElementById("ol_007_1_1-7").style.display = "none";	
		document.getElementById("ol_007_1_1-6").style.display = "none";
	}else if (data == "menu_OL_6") {
		document.getElementById("ol_007_1_1-1").style.display = "none";
		document.getElementById("ol_007_1_1-3").style.display = "none";
		document.getElementById("ol_007_1_1-2").style.display = "none";
		document.getElementById("ol_007_1_1-4").style.display = "none";
		document.getElementById("ol_007_1_1-5").style.display = "none";
		document.getElementById("ol_007_1_1-7").style.display = "none";	
		document.getElementById("ol_007_1_1-6").style.display = "block";
	}
	else if (data == "menu_OL_7") {
		document.getElementById("ol_007_1_1-1").style.display = "none";
		document.getElementById("ol_007_1_1-3").style.display = "none";
		document.getElementById("ol_007_1_1-2").style.display = "none";
		document.getElementById("ol_007_1_1-4").style.display = "none";
		document.getElementById("ol_007_1_1-5").style.display = "none";
		document.getElementById("ol_007_1_1-7").style.display = "block";	
		document.getElementById("ol_007_1_1-6").style.display = "none";
	}
	$("#modal_Checkkeyup_OL").modal("hide");
	Statuesave = "Y";
}
//ยกเลิก
$("#checkkeyup_Cancel_OL").click(function(){
	var element = document.getElementById(data);
		element.classList.remove("active");
	var element = document.getElementById(nameTab);
		element.classList.add("active");
});

/*Basic Info*/
function chk_reinsure_OL(value){
	if(value == 1){
		$("#panel_reinsure_OL").show();
		$("#rd_filing_rs_OL1").prop('checked',true)
	}else{
		$("#panel_reinsure_OL").hide();
		$("#rd_filing_rs_OL2").prop('checked',true)
	}
}

////*modal เลือกแบบประกันหลัก/////
$(document).on("click", "#addrowPM_Rate_OL", function () {
	
	var json_data = {
			"method": "getAllBasePlan_OL",
			"pCode": $("#pass_Insurance_product_ol").val()
		}
		
		$.ajax({
			url: 'ProductBasePlanOL_Data_default_Servlet',
			type: "POST",
			data: json_data,
			success: function (response) {
				$('#tb_Choose_primary_insurance_modal_OL').DataTable().destroy();
				$("#tb_Choose_primary_insurance_modal_OL tbody").find("tr").remove();
				
				var row = "";
				var id = 1;
				for(i in response.BasePlanOL_Data){
					var obj = response.BasePlanOL_Data[i];
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
					$("#tb_Choose_primary_insurance_modal_OL tbody").append(row);
					check_row_modal = id;
					id++;
				}
				$("#tb_Choose_primary_insurance_modal_OL").DataTable({"ordering": false,"paging": false,"bInfo" : false, scrollY: '236px',scrollCollapse: true, "autoWidth": false, 
					fixedHeader: {header: true},"oLanguage": {"sSearch": "ค้นหา: "}
				});
				$("#tb_Choose_primary_insurance_modal_OL_wrapper .dataTables_scrollHeadInner").css({"width":"100%"});
				$("#tb_Choose_primary_insurance_modal_OL_wrapper .table").css({"width":"100%"});
				$('#tb_Choose_primary_insurance_modal_OL_wrapper .sorting_asc').removeClass('sorting_asc');

				$('#modal_Choose_primary_insurance_OL').modal('show');
			}
		});
		console.log("data",json_data);
});

////*modal เลือกสัญญาเพิ่มเติม/////	
$(document).on("click", "#addrowAdditional_contract_OL", function () {
	 var numrow_baseplan = $("#tb_PM_Rate_OL>tbody>tr").length;
	/*if($("#sel_Type_Additional_contract option:selected").val() != "OPTIONAL"
		&& $("#sel_Type_Additional_contract option:selected").val() != "BUNDLE"){
		numrow_baseplan--;
	}*/
	
	if(numrow_baseplan <= 0){
		if(numrow_baseplan == 0){
			message = "กรุณาเลือกแบบประกันหลัก";
		}
		if(numrow_baseplan != 0 && $("#sel_Type_Additional_contract option:selected").val() == "NONE"){
			message = "กรุณาเลือกประเภทสัญญาเพิ่มเติม"
		}
		alertError(message);
	}else{		
		
		var json_data = {
				"method": "getAllRider_OL",
				"rCode": $("#pass_Insurance_product_ol").val()
			}
			
			$.ajax({
				url: 'ProductBasePlanOL_Data_default_Servlet',
				type: "POST",
				data: json_data,
				success: function (response) {
					$('#tb_Additional_contract_modal_OL').DataTable().destroy();
					$("#tb_Additional_contract_modal_OL tbody").find("tr").remove();
					
					var row = "";
					var row2 = "";
					var id = 1;
					for(i in response.Rider_OL_Data){
						var obj = response.Rider_OL_Data[i];
						row2 += 	"<tr  id=\"row2_"+id+""+"\">" +	
								"<td class=\"col-sm-1 text-center"+"\">"+
									"<input type='hidden' id='rider_cov_cat_id"+id+"' value='"+obj.cov_cat_id+"' >"+
									"<input type='hidden' id='prd_code_rider_"+id+"' value='"+obj.prd_rider_code+"'>"+
									"<input type='hidden' id='biz_code_"+id+"' value='"+obj.biz_code+"'>"+
									"<input type=\"checkbox\"id=\"ch_Additional_contract_"+id+"\" value='"+obj.insuranceNo+"'>"+
								"</td>"+
								"<td class=\"verticalCenter col-sm-2 text-left"+"\">"+"<label style=\"text-decoration: underline; color: blue;\" for='ch_Additional_contract_"+id+"' id=\"additional_contract_pass_"+id+""+"\">"+obj.prd_rider_code+"</label>"+"" +
								"</td>"+
								"<td class=\"col-sm-5 text-left"+"\">"+"<label id=\"additional_contract_Name_"+id+""+"\" for='ch_Additional_contract_"+id+"'>"+obj.nameTH+"</label>"+"" +
								"</td>"+
							"</tr>";			  
						
						check_row_modal2 = id;
						id++;
					}
					$("#tb_Additional_contract_modal_OL tbody").append(row2);
					$("#tb_Additional_contract_modal_OL").DataTable({"ordering": false,"paging": false,"bInfo" : false, scrollY: '236px',scrollCollapse: true, "autoWidth": false, 
						fixedHeader: {header: true},"oLanguage": {"sSearch": "ค้นหา: "}
					});
					$("#tb_Additional_contract_modal_OL_wrapper .dataTables_scrollHeadInner").css({"width":"100%"});
					$("#tb_Additional_contract_modal_OL_wrapper .table").css({"width":"100%"});
					$('#tb_Additional_contract_modal_OL_wrapper .sorting_asc').removeClass('sorting_asc');

					/*เลือกสัญญาเพิ่มเติมที่มีอยู่แล้ว*/
					var numrow_rider = $("#tb_Additional_contract_OL>tbody>tr").length;
					var arr_rider = [];
					if(numrow_rider > 0){
						$("#tb_Additional_contract_OL>tbody>tr").each(function(){
							var rider_number = $(this).find("td:nth-child(3)>label").text();
							arr_rider.push(rider_number);
						});
					}
					var save_arr_rider = arr_rider.join(",");
					var split_arr_rider = save_arr_rider.split(",");
					
					for(var a=0; a<split_arr_rider.length; a++){
						$("#tb_Additional_contract_modal_OL tbody>tr").each(function(){
							if(split_arr_rider[a] == $(this).find("td:nth-child(2)").text()){
								$(this).find("input[type='checkbox']").prop("checked",true);
							}
						});
					}
					
					$('#modal_Additional_contract_OL').modal('show');
				},
				error : function(){
					alert("Fail")
				}
			});
			console.log("data",json_data);
			
	}
});

//ยืนยันการเลือกข้อมูลจาก*/ modal แบบประกันหลัก
function bt_save_Choose_primary_insurance_OL(){
	var checkrowTB_tb_Base = document.getElementById("tb_PM_Rate_OL").rows.length;//check row
	
	var numberImgOK = $("#tb_Choose_primary_insurance_modal_OL tbody input:radio:checked").attr("id");
		numberImgOK = numberImgOK.replace("ra_Choose_primary_insurance_","");
	
	var ftOnclick = 'imgCheckbox(id);';	
	var base_id = $("#choose_primary_insurance_pass_"+numberImgOK).text();
	var base_name = $("#choose_primary_insurance_Name_"+numberImgOK).text();
	var base_cov_cat_id = $("#base_cov_cat_id"+numberImgOK).val();
	var addrowChild = 'addrowChildBase_OL("1","'+base_name+'",this);';
	if (checkrowTB_tb_Base <= 1) {
		
		 var changeFileModal = 'modalGet_selectFile_OL("'+base_id+'","fileuploads_PMRate1_OL","ip_fileuploads_OL_PM_Rate1_Show_1","span_PM_Rateopen_1","validate_rateP1_OL","span_PM_Ratedownload_1","'+base_cov_cat_id+'")';
		
		 var prd_code = $("#pass_Insurance_product_ol").val();
		 var rate_cat_NAR = $("#rate_cat_NAR_OL").val();
		/*--Add Row--*/
			numrow = 1;
			row = "<tr id=\"rowLookupValue_tbody_PM_Rate1"+"\" data-id='1' data-level='1'>" +	
				"<td class=\"text-left verticalCenter borderBlack\">"+
					"<input type='hidden' id='cov_cat_id_base_PM' value='"+base_cov_cat_id+"' >"+
					"<input type='hidden' id='prd_code_base_PM' value='"+prd_code+"'>"+
					"<label style=\"text-decoration: underline; color: blue;\">"+base_id+"</label>"+
				"</td>"+	
				"<td class=\"text-left verticalCenter fontcolortable1 borderBlack\">"+"<label>"+base_name+"</label>"+"</td>"+
				"<td class=\"text-center verticalCenter borderBlack\">"+
				"<i class=\"glyphicon glyphicon-plus icon-blue-circle\"  data-id=\'1\' data-topic=\'"+base_id+"\' data-type=\'1\' id=\"addrow1_1\" onclick='"+addrowChild+"'></i>"+
				"</td>"+
				"<td colspan=\"2\" class=\"verticalCenter borderBlack\">"+
					"<input type='hidden' id='fileId_base_PM' value=''>"+
					"<input type='hidden' id='rate_cat_id_base_PM' value=''>"+
					"<input type='hidden' id='rate_layout_id_base_PM' value=''>"+
					"<div class=\"input-group col-xs-12\">"+
					"<input type=\"file\" accept=\".txt\" id=\"ip_fileuploads_OL_PM_Rate1_1\" style=\"display: none\">"+
					"<input type=\"text\" class=\"form-control\" id=\"ip_fileuploads_OL_PM_Rate1_Show_1\" readonly> " +
					"<span class=\"input-group-btn\"><button class=\"btn btn-default btn-primary\" onclick='"+changeFileModal+"' type=\"button\" id=\"bt_uploadfilePM_Rate1\" data-toggle=\"modal\" data-target=\"#modal_input_PMRate_OL\">" +
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
				"</td>"+
				"<td class='verticalCenter borderBlack'>" +
					"<input type='text' class='autoComma form-control text-right' value='0.00' data-v-min='0.00' data-v-max='9999999999.00'>"+
				"</td>"+
				"<td class=\"verticalCenter borderBlack\">"+
				"<div id='form_input_file' class='input-group'>"+
					"<input type='hidden' id='fileId_base_NAR_OL' value=''>"+
					"<input type='hidden' id='rate_cat_id_base_NAR_OL' value='"+rate_cat_NAR+"'>"+
					"<input type='hidden' id='rate_layout_id_base_NAR_OL' value=''>"+
					"<input type='text' class='form-control' id='fileuploads_NARText1_OL' readonly=''>"+ 
					"<label class='input-group-btn'> "+
						"<span id='spanNAR1_OL' class='btn btn-primary' >"+
						/*"<font id='validate_NAR1_CL' style='color: red;'>*</font>" +*/
						"<b>...</b>"+
						"<input id='fileuploads_NAR1_OL' type='file' accept='text/plain' style='display: none;'>"+
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
			
			$("#tb_PM_Rate_OL tbody").append(row);
			$(".autoComma").autoNumeric('init',{vMin: '0.00', vMax: '999999999.99'});
			
			// placeholder ของไฟล์ที่เลือกมา
			var layout_name = $("#layout_NAR1_OL").val();
			var layout_name2 = $("#layout_NAR2_OL").val();
			var base_code = $("#tb_Choose_primary_insurance_modal_OL input[type='radio']:checked").parent().parent().find('td:nth-child(2) label').text();
			var product_code_main = $("#pass_Insurance_product_ol").val();
			//var product_code = $("#key_Insurance_product_cl").val();
			var layout = layout_name+""+base_code+"_"+product_code_main;
			var layout2 = layout_name2+""+base_code+"_"+product_code_main;
			//var placeholder_text = layout+".txt" + " หรือ " + layout2+".txt";
			var placeholder_text = layout+".txt"
			// NAR
			$("#fileuploads_NARText1_OL").attr("placeholder",placeholder_text);
			var uploadfile2 = "selectFileRate_OL(2,'fileuploads_NAR1_OL','"+layout+"','','','span_PM_RateopenNAR_1','span_PM_RatedownloadNAR_1')";
			$("#fileuploads_NAR1_OL").attr("onchange",uploadfile2);
			
			/*ดึงข้อมูลใน Base Plan*/
			get_case_base_OL(base_id,base_cov_cat_id,prd_code,true);
			
			if($("#tb_PM_Rate_OL tbody>tr").length > 0){
				$("#validate_input4_ol").hide();
			}
			
			$("#tab_benefitBaseplan_in").css("display","block");
			
			renew_TableAge_OL();
			
		}else{
			message = "กรุณาลบแบบประกันหลักก่อน"
			alertError(message)
		}
			
			
}
/*Get case ตอนเลือก BasePlan*/
function get_case_base_OL(cov_code,base_cov_cat_id,prd_rider_code,flag_bundle){
	var json_data = {
			"method" : "getCaseBasePlan",
			"bCode" : cov_code
	}
	$.ajax({
		url: 'ProductBasePlanOL_GetData_Servlet',
		type: "POST",
		data: json_data,
		async: false,
		success: function (response) {
			var obj = response.Tab_Basic_Information[0];
			var obj_calPrem = response.Tab_cal_insurance_premiums[0];
			
			//****Tab Basic****//
			getData_TabBasicInfo5(cov_code, base_cov_cat_id,response,flag_bundle);
			/*ปิดปุ่ม PM rate กรณีไม่มีการเลือกมาใน rider*/
			if(obj_calPrem.table_insurance_premium.length <= 0){
				$("#rowLookupValue_tbody_PM_Rate1").find('td:nth-child(3) i').addClass('disabledAll')
				$("#bt_uploadfilePM_Rate1").prop("disabled", true);			
			}
			
			//****Tab Cal Prem****//
			getData_TabCalPrem_OL(cov_code, "B", "" , response , true, "");
			//****Tab use right****//
			getData_TabUseRight(cov_code, response, prd_rider_code);
			//****Tab Benefit****//
			showcase_benefit_OL(response,"B",cov_code,"",prd_rider_code,"");
			get_dataBenefit_OL(response, "B", cov_code, prd_rider_code);
			//****Tab Term****//
			getData_TabTerm_data_OL(cov_code,"B",prd_rider_code,response);
			//****Tab Policy****//
			getData_TabPolicyWording_data_OL(cov_code,"B",prd_rider_code,response,false);
			
			
			/****Tab ผลประโยชน์การขาย****/
			getData_TabSaleBenefit_OL(cov_code, "B", "" , response, "");
			
			if(flag_bundle){
				/*เมื่อ get basePlan เสร็จทุกcase จะวิ่งไปดึง rider ที่เป็น bundle*/
				for(i in response.Tab_Basic_Information[0].coverage_Bundle){
					var obj = response.Tab_Basic_Information[0].coverage_Bundle[i]
					var rider_id = obj.cov_code;
					var rider_cov_cat_id = obj.cov_cat_id;
					var prd_code_rider = obj.prd_rider_code;
					var biz_code = obj.biz_code
					var nameTH	= obj.name_th
					//var rider_type = obj.cat_code;
					var count_row = $("#tb_Additional_contract_OL>tbody>tr").length;
					if(count_row > 0){
						var numberImgOK = Number($("#tb_Additional_contract_OL>tbody>tr:last").attr("data-id"));	
					}else{
						var numberImgOK = 0;
					}
					//numberImgOK++;
					get_case_rider_OL("R",rider_id,rider_cov_cat_id,prd_code_rider,numberImgOK,true,biz_code,nameTH)
				}
			}

		},
		error: function(){
			alert("fail")
		}
	});
	console.log("data",json_data);
}

function getData_TabBasicInfo5(cov_code,base_cov_cat_id, response ,flag_bundle){
	var obj_typeBase = response.Tab_Basic_Information[0].type_coverage[0].type[2].text;
	var prd_code = $("#pass_Insurance_product_ol").val();
	
	// sex
	var sex = response.Tab_Basic_Information[0].sex;	
	if(sex == "MALE"){
		$("#chk_sex_BP1_OL").prop("checked",true);
	}else if(sex == "FEMALE"){
		$("#chk_sex_BP2_OL").prop("checked",true);
	}else if(sex == "EITHER"){
		$("#chk_sex_BP1_OL").prop("checked",true).prop("disabled",false);
		$("#chk_sex_BP2_OL").prop("checked",true).prop("disabled",false);
	}
	
	//mode
	for(i in response.Tab_Basic_Information[0].mode){
		$("#validate_input5_ol").hide();
		var obj = response.Tab_Basic_Information[0].mode[i].value;
		$("#tbl_PD_Mode_OL tbody>tr").each(function(){
			if( obj == $(this).find('td:nth-child(1) input').val()){
				$(this).find('td:nth-child(1) input').prop("checked",true);
			}
		});
		/*$("#tbl_modeTerms tbody>tr").each(function(){
			if( obj == $(this).find('td:nth-child(1) input').val()){
				$(this).find('td:nth-child(1) input').prop("checked",true).prop("disabled",false);
			}
		});*/
	}
	
	/*Bundle*/
	if(flag_bundle){
		if(response.Tab_Basic_Information[0].is_bundle != false){
			$("#div_Type_Additional_contract_OL input[name='chk_Type_Additional_contract_OL[]'][value='BUNDLE']").prop("checked",true).attr("disabled",true);
			for(i in response.Tab_Basic_Information[0].coverage_Bundle){
				var obj = response.Tab_Basic_Information[0].coverage_Bundle[i];
				var count_row = $("#tb_Additional_contract_OL>tbody>tr").length;
				if(count_row > 0){
					var numberImgOK = Number($("#tb_Additional_contract_OL>tbody>tr:last").attr("data-id"));	
				}else{
					var numberImgOK = 0;
				}
				numberImgOK++;
				var ftOnclick = 'imgCheckbox(id);';	
				var rider_id = obj.cov_code;
				var rider_name = obj.name_th;
				var rider_cov_cat_id = obj.cov_cat_id;
				var prd_code_rider = obj.prd_rider_code;
				var biz_code = obj.biz_code;
				var rider_type = obj.cat_code;
			    var newID = "imgOK_"+numberImgOK;
			    var rate_cat_NAR = $("#rate_cat_NAR_OL").val();
			    var addrowChild = 'addrowChild_OL("'+numberImgOK+'","'+rider_name+'","'+rider_type+'",this);';
			    var changeFileModal = 'modalGet_selectFile_OL("'+rider_id+'","fileuploads_PMRate1_OL","ip_fileuploads_OL_Additional_contract_Show_'+numberImgOK+'","span_Additional_contractopen_'+numberImgOK+'","validate_Additional_OL_'+numberImgOK+'_OL","span_Additional_contractdownload_'+numberImgOK+'","")';
					    
			    row2 = 	"<tr id=\"tr_Additional_contract_"+numberImgOK+"\" data-id=\""+numberImgOK+"\" data-level=\"1\">"+
						"<td class=\'text-center verticalCenter borderBlack\'  class=\'text-center verticalCenter borderBlack\' id=\""+newID+"\" >"+
						"</td>"+
						"<td class='text-center verticalCenter fontcolortable2 borderBlack font-bold'>" +
							"<input type='hidden' id='hd_prdDesign_OL"+numberImgOK+"' value='BUNDLE'/>"+
							"<label class='font-term-green font-bold'>Bundle</label>"+
							/*"<select class='form-control width100px' id='sel_prd_design'>"+sl_prd_design+"</select>"+*/
						"</td>"+
						"<td class=\"text-left verticalCenter borderBlack\">"+
							"<input type='hidden' id='prd_code_rider_"+numberImgOK+"' value='"+prd_code_rider+"'>"+
							"<input type='hidden' id='cov_code_rider_"+numberImgOK+"' value='"+rider_id+"'>"+
							"<label style=\"text-decoration: underline; color: blue;\">"+rider_id+"</label>"+
						"</td>"+
						"<td class='text-center verticalCenter fontcolortable2 borderBlack font-bold'>" +
							"<input type='hidden' id='cov_cat_id_rider"+numberImgOK+"' value='"+rider_cov_cat_id+"'>"+
							"<label>"+biz_code+"</label>" +
						"</td>"+
						"<td class=\"text-left verticalCenter fontcolortable2 borderBlack\">"+
							"<label>"+rider_name+"</label>"+
						"</td>"+
						"<td class=\"text-center verticalCenter borderBlack\">"+
							"<i class=\"glyphicon glyphicon-plus icon-blue-circle disabledAll\"  data-id=\'"+numberImgOK+"\' data-topic=\'"+rider_id+"\' data-type=\'1\' id=\"addrow1_"+numberImgOK+"\" onclick='"+addrowChild+"'></i>"+
						"</td>"+
						"<td class=\"verticalCenter borderBlack\">"+
							"<div class=\"input-group col-xs-12\">"+
								"<input type='hidden' id='fileId_rider_PM"+numberImgOK+"' value='' />"+
								"<input type='hidden' id='rate_cat_id_rider_PM"+numberImgOK+"' value='' />"+
								"<input type='hidden' id='rate_layout_id_rider_PM"+numberImgOK+"' value='' />"+
								"<input type=\"file\" accept=\".txt\" id=\"ip_fileuploads_Additional_contract"+numberImgOK+"\" style=\"display: none\">"+
								"<input type=\"text\" class=\"form-control clear_val\" id=\"ip_fileuploads_OL_Additional_contract_Show_"+numberImgOK+"\" readonly> " +
								"<span class=\"input-group-btn\"><button class=\"btn btn-default btn-primary disabledAll\" type=\"button\" id=\"bt_uploadfileAdditional_contract"+numberImgOK+"\"  onclick='"+changeFileModal+"' data-toggle=\"modal\" data-target=\"#modal_input_PMRate_OL\">" +
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
					    "</tr>";
				
			    if($("#tb_Additional_contract_OL tbody>tr").length != 0){
			    	$(row2).insertBefore($("#tb_Additional_contract_OL"+">tbody>tr:first").closest('tr'));
			    }else{
			    	$("#tb_Additional_contract_OL tbody").append(row2);
			    }
				
				validate_rd_tbAdditional();
				$(".autoComma").autoNumeric('init',{vMin: '0.00', vMax: '999999999.99'});
				$(".autoPercent").autoNumeric('init',{vMin: '0.00', vMax: '99.99'});
			}
		}
	}
	
	/*ระยะเวลาเอาประกันภัย*/
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
			$("#tb_BasicInformation1_OL tbody").append(row_tbInsurance_period)
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
				$("#tb_BasicInformation1_OL tbody").append(row_tbInsurance_period)
			}
		}
		/*tab ข้อกำหนด default ระยะเวลาเอาประกันภัย*/
//		$("#start_period_insure_cl").val(obj.from)
//		$("#start_period_insure_unit_cl option[value="+obj.from_unit+"]").attr("selected",true)
//		$("#end_period_insure_cl").val(obj.to)
//		$("#end_period_insure_unit_cl option[value="+obj.to_unit+"]").attr("selected",true)
//		$("#max_period_insure_cl").val(response.Tab_Basic_Information[0].maximum_Protection_To)
//		
	}
	
	/*create ตารางการกำหนดบันทึกสลักหลังและพิกัดอายุ*/
	$("#div_ageRange_OL").show();
	var start_age = response.Tab_Basic_Information[0].age_Start;
	var age_Start_Unit = response.Tab_Basic_Information[0].age_Start_Unit;
	var end_age = response.Tab_Basic_Information[0].age_To;
	var age_To_Unit = response.Tab_Basic_Information[0].age_To_Unit; 
	var max_age = response.Tab_Basic_Information[0].maximum_Protection_To;
	var sl_ageCoordinate = $("#sl_unit_age_coordinates_OL").val();
	row_age = "<tr id='tr_ageRange_CV1' data-id='1' data-parent='0' data-level='1' data-type='1'>"+											
			  "<td class='text-left verticalCenter borderBlack'>"
	//if(response.Tab_Basic_Information[0].is_bundle != false){
		row_age += "<label class='font-term-purple font-bold'>"+cov_code+"</label>"
	/*}else{
		row_age += "<label class='font-term-purple font-bold'>"+prd_code+"</label>"
	}*/
	row_age +=	"<input type='hidden' id='prd_rider_code' value="+prd_code+">"+
				"<input type='hidden' id='cov_code' value="+cov_code+">"+
			  "</td>"+
			  "<td class='text-center verticalCenter fontcolortable2 borderBlack'>" +
			  	"<input type='hidden' id='cov_cat_id' value='"+base_cov_cat_id+"' >"+
			  	"<label class='font-term-purple font-bold'>"+obj_typeBase+"</label>" +
			  "</td>"+
			  "<td class='text-center verticalCenter borderBlack'>"+
			  	"<i class='glyphicon glyphicon-plus icon-blue-circle' data-id='1' id='addrow_endorse1' onclick=\"addRowEndorse_OL(1,'"+cov_code+"','"+prd_code+"');\"></i>"+
			  "</td>"+											
			  "<td class='text-center verticalCenter borderBlack'>"+
			  	"<input type='hidden' id='hd_min_issue_age1' value='"+start_age+"'>"+
			  	"<input type='number' class='form-control margin-padding0 text-center width40px' value='"+start_age+"' min='1' onchange=\"numberKey_min_OL(this,'hd_min_issue_age1') , startIssue_term(this)\" disabled>"+
			  "</td>"+
			  "<td class='text-center verticalCenter borderBlack'>"+	
			  	"<input type='hidden' id='start_insure_ageUnit1' value='"+age_Start_Unit+"' >"+
				"<select class='form-control width100px' id='ageRange_unit1_ol' onchange='change_typeTerm1_OL(this)' disabled>"+
					"<option value='NONE'>None</option>"+sl_ageCoordinate+
				"</select>"+
			  "</td>"+
			  "<td class='text-center verticalCenter borderBlack'>"+
			  	"<input type='hidden' id='hd_max_issue_age1' value='"+end_age+"'>"+
			  	"<input type='number' class='form-control margin-padding0 text-center width40px' value='"+end_age+"' min='1' onchange=\"numberKey_max_OL(this,'hd_max_issue_age1') , endIssue_term(this)\" disabled>"+
			  "</td>"+
			  "<td class='text-center verticalCenter borderBlack'>"+	
			  	"<input type='hidden' id='end_insure_ageUnit1' value='"+age_To_Unit+"'>"+
				"<select class='form-control width100px' id='ageRange_unit1_ol' onchange='change_typeTerm2_OL(this)' disabled>"+
					"<option value='NONE'>None</option>"+sl_ageCoordinate+
				"</select>"+
			  "</td>"+
			  "<td class='text-center verticalCenter borderBlack'>"+
			  	"<input type='hidden' id='hd_max_insure_age1' value='"+max_age+"'>"+
				"<input type='number' class='form-control margin-padding0 text-center width40px' value='"+max_age+"' min='1' onchange=\"numberKey_maximum_OL(this,'hd_max_insure_age1') , maxInsure_term_OL(this)\" disabled>"+
			  "</td>"+
			  "<td class='text-center verticalCenter borderBlack'>"+	
			  	/*"<input type='hidden' id='max_insure_ageUnit1' >"+*/
				"<select class='form-control width100px' id='ageRange_unit1_ol' onchange='change_typeTerm3_OL(this)' disabled>"+
					"<option value='NONE'>None</option>"+sl_ageCoordinate+
				"</select>"+
			  "</td>"+																			
			  "</tr>";
	if($("#tb_ageRange_OL tbody>tr").length == 0){
		$("#tb_ageRange_OL tbody").append(row_age)
	}else{
		$(row_age).insertBefore("#tb_ageRange_OL tbody>tr:first");
	}
	$("#tb_ageRange_OL tbody> #tr_ageRange_CV1").find("td:nth-child(5) option[value='"+age_Start_Unit+"']").attr("selected","selected");
	$("#tb_ageRange_OL tbody> #tr_ageRange_CV1").find("td:nth-child(7) option[value='"+age_To_Unit+"']").attr("selected","selected");
	$("#tb_ageRange_OL tbody> #tr_ageRange_CV1").find("td:nth-child(9) option[value='YEAR']").attr("selected","selected");
	
	//ทุนคุ้มครองที่ลดลง SA
	if(response.Tab_cal_insurance_premiums[0].table_capital_decrease[0]){
		$("#inputSA_OL").val(response.Tab_cal_insurance_premiums[0].table_capital_decrease[0].file);
		$("#see_inputSA_OL").attr("onclick", "openFileTextProduct_OL('"+response.Tab_cal_insurance_premiums[0].table_capital_decrease[0].file+"', '"+response.Tab_cal_insurance_premiums[0].table_capital_decrease[0].ref+"',31,'tb_inputSA_OL_Rate', 'modal_inputSA_OL_Rate')");
		
	}
	
	//pay_separately -- ปิดไปเพราะ OL ไม่ได้ใช้
	
/*	$("#chk_sperately_pay_OL").prop("checked",false);
	$("#chk_sperately_pay_OL").attr("disabled",true)
	var sperately_pay = response.Tab_Basic_Information[0].pay_separately_checkbox;
	if(sperately_pay){
		$("#chk_sperately_pay_OL").prop("checked",true);
		$("#chk_sperately_pay_OL").attr("disabled",false)
	}
	for(i in response.Tab_Basic_Information[0].pay_separately){
		var obj_period = response.Tab_Basic_Information[0].pay_separately[i].period;
		var obj_rate = response.Tab_Basic_Information[0].pay_separately[i].rate;
		$("#tb_Sperately_Pay_ol tbody>tr").each(function(){
			if( obj_period == $(this).find('td:nth-child(1) input').val()){
				$(this).find('td:nth-child(1) input').prop("checked",true).prop("disabled",false);
				$(this).find('td:nth-child(1) input').addClass("base")
				$(this).find('td:nth-child(3) input').val((obj_rate*100).toFixed(2)).prop("disabled",false);
			}
		});
	}*/
	
}

function getData_TabUseRight(cov_code, response, prd_rider_code){
	var obj = response.Tab_exercise_rights_insurance[0];
	
	if(obj.POLICY_LOAN.length > 0){
		if(obj.POLICY_LOAN[0].Is_default == true){
			$("#ch_policyLoan_OL").prop("checked", true);
			$("#val_policyLoan_OL").val((obj.POLICY_LOAN[0].Interest_rate*100).toFixed(2));
		}
	}
	
	if(obj.APL.length > 0){
		if(obj.APL[0].Is_default == true){
			$("#ch_APL_OL").prop("checked", true);
			$("#val_APL_OL").val((obj.APL[0].Interest_rate*100).toFixed(2));
		}
	}
	
	if(obj.CASH_SURR.length > 0){
		if(obj.CASH_SURR[0].Is_default == true){
			$("#ch_surrenderPRD_OL").prop("checked", true);
			$("#txt_surrenderPRD_OL").val(obj.CASH_SURR[0].Formula_id);
		}
		if(obj.CASH_SURR[0].Is_claim_deduct == true){
			$("#ch_cvclaim_OL").prop("checked", true);
			
		}
	}
	
	if(obj.ETI.length > 0){
		if(obj.ETI[0].Is_default == true){
			$("#ch_ETIprd_OL").prop("checked", true);
			$("#txt_ch_ETIprd_OL").val(obj.ETI[0].Formula_id)
		}
		var year_age_eti = "";
		if(obj.ETI[0].Period_calc_meth != "NONE"){
			$("#ch_ETItoprd_OL").prop("checked", true);
			$("#txt_ETItoprd_OL").val(obj.ETI[0].Benefit_period);
			
			if(obj.ETI[0].Period_calc_meth == "TO_YEAR"){
				year_age_eti = "จำนวนปี";
			}else if(obj.ETI[0].Period_calc_meth == "TO_AGE"){
				year_age_eti = "ถึงอายุ";
			}
			$("#ip_ETItoprd_OL").val(year_age_eti);
		}
	}
	if(obj.AUTO_ETI.length > 0){
		if(obj.AUTO_ETI[0].Is_default == true){
			$("#ch_AutoETIprd_OL").prop("checked", true);
			$("#txt_AutoETIprd_OL").val(obj.AUTO_ETI[0].Formula_id);
		}
	}
	
	if(obj.RPU.length > 0){
		if(obj.RPU[0].Is_default == true){
			$("#ch_PRUprd_OL").prop("checked", true);
			$("#txt_ch_PRUprd_OL").val(obj.RPU[0].Formula_id);
		}
		if(obj.RPU[0].Is_debt_deduct == true){
			$("#ch_PRUCloseprd_OL").prop("checked", true);
		}
		var year_age_rpu = "";
		
		if(obj.RPU[0].Period_calc_meth != "NONE"){
			$("#ch_RPUtoprd_OL").prop("checked", true);
			$("#txt_PRUtoprd_OL").val(obj.RPU[0].Benefit_period);
			
			if(obj.RPU[0].Period_calc_meth == "TO_YEAR"){
				year_age_rpu = "จำนวนปี";
			}else if(obj.RPU[0].Period_calc_meth == "TO_AGE"){
				year_age_rpu = "ถึงอายุ";
			}
			$("#ip_PRUtoprd_OL").val(year_age_rpu);
		}
		
	}
	if(obj.AUTO_RPU.length > 0){
		if(obj.AUTO_RPU[0].Is_default == true){
			$("#ch_AutoPRUprd_OL").prop("checked", true);
			$("#txt_AutoPRUprd_OL").val(obj.AUTO_RPU[0].Formula_id);
		}
		if(obj.AUTO_RPU[0].Is_debt_deduct == true){
			$("#ch_AutoPRUCloseprd_OL").prop("checked", true);
		}
		if(obj.AUTO_RPU[0].Rpu_sa_type == "APPLY_SA"){
			$("#rd_AutoRPU_OL1").prop("checked", true);
		}else if(obj.AUTO_RPU[0].Rpu_sa_type == "DEATH_BENEFIT"){
			$("#rd_AutoRPU_OL2").prop("checked", true);
		}
	}
		
	/*เพิ่ม row ของ Tab-การใช้สิทธิ์ตามกรมธรรม์ || ตาราง-การเวนคืน กธ.*/
	var numrow3 = 1;
	var sl_tab2_cal = $("#hide_sl_cal_OL").val();
	var row5 = "";
	row5 = 	"<tr id=\"tb_policyholder_OL"+numrow3+"\" data-key='"+prd_rider_code+"' data-main=''>"+
				"<td width=\"20%\" class=\"text-center verticalCenter fontcolortable1 borderBlack\">"+
					"<input type='hidden' id='prd_rider_code' value='"+prd_rider_code+"'>"+
					"<input type='hidden' id='cov_rider_code' value='"+cov_code+"'>"+
					"<label>"+cov_code+"</label>"+
				"</td>"+
				/*"<td width=\"10%\" class=\"text-center verticalCenter fontcolortable1 borderBlack\">"+
					"<label class='font-term-purple font-bold'></label>"+					
				"</td>"+	*/
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
				"<select class=\"form-control\" disabled><option value='NONE'>None</option>"+sl_tab2_cal+"</select></td>"+
			"</tr>";		
	if($("#tb_policyholder_OL tbody>tr").length == 0){
		$("#tb_policyholder_OL tbody").append(row5);
	}else{
		$(row5).insertBefore("#tb_policyholder_OL tbody>tr:first");
	}

//	get_row_useRight_OL(arr_value);	
	var arrBasePlan = [];
	arrBasePlan.push(cov_code);
	get_row_useRight_OL(arrBasePlan);
}

function get_row_useRight_OL(arrRider){

	var json_data = {
			"method" : "Getrate_layout_ByCovCode",
			"cov_code" : JSON.stringify(arrRider)
	}
	
	$.ajax({
		url: 'ProductBasePlanOL_GetData_Servlet',
		type: "POST",
		data: json_data,
		success: function (response) {
			
			for(i in response.rateLayout_Type){
				var obj = response.rateLayout_Type[i];
				$("#tb_policyholder_OL tbody>tr").each(function(){
					if( obj.cov_code == $(this).find('td:nth-child(1) #cov_rider_code').val()){
						$(this).find('td:nth-child(2) label').text(obj.nameTH);
						$(this).find('td:nth-child(3) #rate_cat_id_tb_useRight').val(obj.rate_cat_id);
						$(this).find('td:nth-child(3) #rate_layout_id_tb_useRight').val(obj.rate_layout_id);
						$(this).find('td:nth-child(3) #file_id_tb_useRight').val(obj.file_id);
						$(this).find('td:nth-child(3) label').text(obj.file_name);
						$(this).find('td:nth-child(4) select').attr("disabled",false);
						
					}
				})
				
			}
			
		}
	});
	console.log("data",json_data)
}

function getData_TabTerm_data_OL(cov_code,type,prd_rider_code,response){
	var obj = response.Tab_Basic_Information[0];
	
	// ดึงข้อมูลจาก basePlan
	if(type == "B"){
		if(obj.insurance_period_radio == "TO_AGE"){
			$("#div_rangeInsurance_OL").hide()
			$("#div_ageInsurance_OL").show()
			$("#start_period_insure_ol").val(obj.insurance_period[0].to);
			$("#start_period_insure_unit_ol option[value='"+obj.insurance_period[0].to_unit+"']").attr("selected",true);
		}else if(obj.insurance_period_radio == "TO_YEAR"){
			$("#div_ageInsurance_OL").hide()
			$("#div_rangeInsurance_OL").show()
			
			$("#tb_rangeInsurance_OL tbody>tr").remove()
			for(i in obj.insurance_period){
				var obj_insrance = obj.insurance_period[i]
				var row = "<tr>"+
							"<td>" +
								"<input type='text' class='form-control width50px text-right font-term-purple' id='start_period_insure_ol_"+i+"' value='"+obj_insrance.from+"' maxlength='3' disabled>" +
							"</td>"+
							"<td><select class='form-control width82px font-term-purple' id='start_period_insure_unit_ol_"+i+"' disabled>"+sl_calendar_global+"</select></td>"+
							"<td>" +
								"<input type='text' class='form-control width50px text-right font-term-purple' id='end_period_insure_ol_"+i+"' value='"+obj_insrance.to+"' maxlength='3' disabled>" +
							"</td>"+
							"<td><select class='form-control width82px font-term-purple' id='end_period_insure_unit_ol_"+i+"' disabled>"+sl_calendar_global+"</select></td>"+
						"</tr>"
				$("#tb_rangeInsurance_OL tbody").append(row)
				
				$("#start_period_insure_unit_ol_"+i).find("option[value='"+obj_insrance.from_unit+"']").attr("selected",true)
				$("#end_period_insure_unit_ol_"+i).find("option[value='"+obj_insrance.to_unit+"']").attr("selected",true)
			}
			
		}else{
			alert("fail")
		}
		
		$("#start_paid_insure_ol").val(obj.premium_num);
		$("#start_paid_insure_unit_ol option[value='"+obj.premium_preiod_unit+"']").attr("selected",true);
		
		//mode
		for(i in response.Tab_Basic_Information[0].mode){
			var obj_mode = response.Tab_Basic_Information[0].mode[i].value;
			$("#tbl_modeTerms_OL tbody>tr").each(function(){
				if( obj_mode == $(this).find('td:nth-child(1) input').val()){
					$(this).find('td:nth-child(1) input').prop("checked",true).prop("disabled",false);
				}
			});
		}
		/*Mode การชำระเบี้ย*/
		var obj_cal = response.Tab_cal_insurance_premiums[0].prem_cal_meth;
		if( obj_cal == "PREM_ONLY"){
			$("#tbl_modeTerms_OL2").addClass('disabledAll')
			$("#sale_followRate").addClass('disabledAll')
			$("#div_buy_followRate").addClass('disabledAll')
			$("#tbl_modeTerms_OL").removeClass('disabledAll')
			$("#sale_followCapital").removeClass('disabledAll')
			$("#div_buy_followCapital").removeClass('disabledAll')
		}else if( obj_cal == "SA_ONLY"){
			$("#tbl_modeTerms_OL").addClass('disabledAll')
			$("#sale_followCapital").addClass('disabledAll')
			$("#div_buy_followCapital").addClass('disabledAll')
			$("#tbl_modeTerms_OL2").removeClass('disabledAll')
			$("#sale_followRate").removeClass('disabledAll')
			$("#div_buy_followRate").removeClass('disabledAll')
			for(i in response.Tab_Basic_Information[0].mode){
				var obj_mode = response.Tab_Basic_Information[0].mode[i].value;
				$("#tbl_modeTerms_OL2 tbody>tr").each(function(){
					if( obj_mode == $(this).find('td:nth-child(1) input').val()){
						$(this).find('td:nth-child(1) input').prop("checked",true).prop("disabled",false);
					}
				});
			}
		}else if( obj_cal == "EITHER"){
			$("#tbl_modeTerms_OL").removeClass('disabledAll')
			$("#tbl_modeTerms_OL2").removeClass('disabledAll')
			$("#sale_followRate").removeClass('disabledAll')
			$("#sale_followCapital").removeClass('disabledAll')
			$("#div_buy_followCapital").removeClass('disabledAll')
			$("#div_buy_followRate").removeClass('disabledAll')
			for(i in response.Tab_Basic_Information[0].mode){
				var obj_mode = response.Tab_Basic_Information[0].mode[i].value;
				$("#tbl_modeTerms_OL2 tbody>tr").each(function(){
					if( obj_mode == $(this).find('td:nth-child(1) input').val()){
						$(this).find('td:nth-child(1) input').prop("checked",true).prop("disabled",false);
					}
				});
			}
		}
		
		/*พิกัดอายุ*/
		$("#start_age_insure_ol").val(obj.age_Start)
		$("#start_age_insure_unit_ol option[value='"+obj.age_Start_Unit+"']").attr("selected",true);
		$("#end_age_insure_ol").val(obj.age_To)
		$("#end_age_insure_unit_ol option[value='"+obj.age_To_Unit+"']").attr("selected",true);
		//$("#max_age_insure_ol").val(obj.maximum_Protection_To)
		
		/*สูตรการคำนวณอายุ*/
		if(response.Tab_Basic_Information[0].cal_Age){
			for(i in response.Tab_Basic_Information[0].cal_Age){
				var obj_calAge = response.Tab_Basic_Information[0].cal_Age[i];
				$("#tbl_formulaTerms_OL tbody>tr").each(function(){
					if( obj_calAge.value == $(this).find('td:nth-child(1) input[type="radio"]').val()){
						$(this).find('input[type="radio"]').prop("disabled",false);
					}
				});
			}
		}
		
		/*การซื้อสัญญาแนบท้ายควบ*/
		if(obj.coverage_Bundle){
			
		}
		
	}
	
	
	/*การรับแบบเพิ่มเบี้ยพิเศษ*/
	var KPW_maxEM = (response.Tab_cal_insurance_premiums[0].max_EM*100).toFixed(2)
	var row_id = 1
	var length_row = $("#tbl_increase_premium_OL tbody>tr").length
	if(length_row != 0){
		var ele_id = $("#tbl_increase_premium_OL tbody>tr:last").find('td:nth-child(3) input').attr('id')
			ele_id = ele_id.replace("amount_premium_uw_OL","")
			row_id = Number(ele_id) + 1
	}
	
	var row = "<tr>" 
	var style_color = "";
			if(type == "B"){
				style_color = "font-term-purple"
			}else{
				style_color = "font-term-green"
			}
				row += 	"<td class='verticalCenter text-center "+style_color+" font-bold'>"+
					"<label>"+obj.type_coverage[0].type[3].cat_name+"</label>" +
				"<input type='hidden' id='cov_code' value='"+obj.passInsurance+"'>" +
				"<input type='hidden' id='prd_rider_code' value='"+prd_rider_code+"'>" +
			"</td>"+
			"<td class='verticalCenter text-right "+style_color+" font-bold'>"+KPW_maxEM+"</td>"
			if(KPW_maxEM == 0){
				row += "<td class='verticalCenter text-right'><input type='text' id='amount_premium_uw_OL"+row_id+"' class='autoPercent3 form-control text-right' value='0.00' data-v-min='0.00' data-v-max='999.99' onblur='validate_maxEM(this);' disabled></td>"
			}else{
				row += "<td class='verticalCenter text-right'><input type='text' id='amount_premium_uw_OL"+row_id+"' class='autoPercent3 form-control text-right' value='0.00' data-v-min='0.00' data-v-max='999.99' onblur='validate_maxEM(this);'></td>"
			}
		row += "</tr>"	
	if(type == "B"){
		if($("#tbl_increase_premium_OL tbody>tr").length == 0){
			$("#tbl_increase_premium_OL tbody").append(row)
		}else{
			$(row).insertBefore("#tbl_increase_premium_OL tbody>tr:first");
		}
	}else {
		$("#tbl_increase_premium_OL tbody").append(row)
	}

	/*Validate mode , พิกัดอายุ*/
	validate_input7_ol();
	validate_input8_ol();
}

function getData_TabPolicyWording_data_OL(cov_code,type,prd_rider_code,res,show_cov,main_cov){
	var row_policy = "";
	if(type=="B" && show_cov==false){
		row_policy = " <li data-id='"+prd_rider_code+"'>" +
						"<a data-toggle='tab' href='#policy_in_"+cov_code+"' class='purple'>"+cov_code+"</a>" +
					"</li>"
		$("#tab_policy_panel_OL").prepend(row_policy)
	}else if(type=="R" && show_cov==true){
		row_policy = " <li data-id='"+prd_rider_code+"'>" +
						"<a data-toggle='tab' href='#policy_in_"+cov_code+"' class='green'>"+cov_code+"</a>" +
					"</li>"
		$("#tab_policy_panel_OL").append(row_policy)
	}else if(type=="R" && show_cov==false){
		row_policy = " <li data-id='"+prd_rider_code+"'>" +
				"<a data-toggle='tab' href='#policy_in_"+cov_code+"' class='green'>"+prd_rider_code+"</a>" +
			"</li>"
		$("#tab_policy_panel_OL").append(row_policy)
	}else if(type=="E" && show_cov==true){
		row_policy = " <li data-id='"+prd_rider_code+"' data-main='"+main_cov+"'>" +
				"<a data-toggle='tab' href='#policy_in_"+cov_code+"' class='yellow'>"+cov_code+"</a>" +
			"</li>"
		
		var num_main = $("#tab_policy_panel_OL>li[data-main='"+main_cov+"']").length;	
		if(num_main > 0){
			$(row_policy).insertAfter("#tab_policy_panel_OL>li[data-main='"+main_cov+"']:last");
		}else{
			$(row_policy).insertAfter("#tab_policy_panel_OL>li[data-id='"+main_cov+"']");
		}
		
	}else{
		row_policy = " <li data-id='"+prd_rider_code+"'>" +
		"<a data-toggle='tab' href='#policy_in_"+prd_rider_code+"' class='green'>"+prd_rider_code+"</a>" +
			"</li>"
		$("#tab_policy_panel_OL").append(row_policy)
	}
	
	json_data = {
			"method" : "getLookup_Policy",
			"cov_code" : cov_code
	}
	$.ajax({
		url: 'ProductBasePlanOL_Data_default_Servlet',
		type: "POST",
		data: json_data,
		async: false,
		success: function (response) {
			var baseplan_covCode = $("#tb_PM_Rate_OL tbody>tr").eq(0).find('td:nth-child(1) label').text();
			
			var row_main = "";
			if( baseplan_covCode == cov_code){
				row_main += "<div id='policy_in_"+cov_code+"' class='tab-pane fade active in'>"
			}else{
				if(type != "PR"){
					row_main += "<div id='policy_in_"+cov_code+"' class='tab-pane fade'>"
				}else{
					row_main += "<div id='policy_in_"+prd_rider_code+"' class='tab-pane fade'>"
				}
				
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
		$("#policy_panel_tab_OL").append(row_main);
			
		var row_child = ""
		for(w in response.Tab_Policy_Wording){
				var obj_policy = response.Tab_Policy_Wording[w];
				row_child =	"<tr id='tbody_policy"+obj_policy.pass+"' data-id='"+obj_policy.pass+"'>"+											
						"<td class='text-center borderBlack' style='vertical-align: middle;'>"+obj_policy.pass+"</td>"+									
						"<td class='borderBlack verticalCenter'><label class='label_notbold'>"+obj_policy.text+"</label></td>"+									
						"<td class='borderBlack' align='center'>"+
						"<input type='hidden' id='fileId_pdf_OL"+obj_policy.pass+"'>"+
							"<div class='input-group col-xs-12'>"+
								"<div id='div_pdf_policy"+obj_policy.pass+"_OL' class='filename'>None"+
									/*"<a target='_blank'></a>"+*/
								"</div>"+																								
						    "</div>"+
						"</td>"+										
						"<td class='borderBlack' align='center'>"+
						"<input type='hidden' id='fileId_doc_OL"+obj_policy.pass+"'>"+
							"<div class='input-group col-xs-12'>"+
								"<div id='div_word_policy"+obj_policy.pass+"_OL' class='filename'>None</div>"+																						
							"</div>"+
						"</td>"+																				
					"</tr>"
				if(type != "PR"){
					$("#policy_in_"+cov_code).find('tbody').append(row_child)
				}else{
					$("#policy_in_"+prd_rider_code).find('tbody').append(row_child)
				}
				
			}
			
		//--Get case by cov_code
		var pass_id = ""
		if(type != "PR"){
			pass_id = cov_code
		}else{
			pass_id = prd_rider_code
		}
		for(i in res.Tab_Policy_Wording){
			var obj = res.Tab_Policy_Wording[i]
			$("#policy_in_"+pass_id).find('table>tbody>tr').each(function(){
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
		$("#tab_policy_panel_OL").find('li').removeClass('active')
		$("#tab_policy_panel_OL").find('li:first').addClass('active')
		$("#policy_panel_tab_OL").find('div').removeClass('active in')
		
		$("#policy_in_"+baseplan_covCode).addClass("active in")
		
		}
	})
	console.log("data",json_data);
	
}
//ยืนยันการเลือกข้อมูลจาก modal สัญญาเพิ่มเติม
function bt_save_Additional_contract_OL() {
	
	var arrnumrow = [];
	var arrRider = [];
	var lastImgOK = $('#tb_Additional_contract_OL >tbody>tr:last>td:first').attr("id") || 0;	
	var count_row = $("#tb_Additional_contract_OL>tbody>tr").length;
	
	if(count_row > 0){
		var numberImgOK = Number($("#tb_Additional_contract_OL>tbody>tr:last").attr("data-id"));	
	}else{
		var numberImgOK = 0;
	}
	var numberImgOK_age = Number($("#tb_ageRange_OL>tbody>tr[data-level='1']:last").attr("data-id"));
	var numberImgOK_cal = $("#tb_Calculate_insurance_OL>tbody>tr:last").attr("data-id");
	if(numberImgOK_cal != null){
		if(numberImgOK_cal.includes("_")){
			numberImgOK_cal = $("#tb_Calculate_insurance_OL>tbody>tr:last").attr('data-parent');
		}
	}
    
	
	var arr_value = [];
	var value_check_diff = [];
	var sl_prd_design = "";
	var row2 = "";
	$("#div_Type_Additional_contract_OL div").each(function(){
		if ($(this).find('input').val() != "OPTIONAL" && $(this).find('input').val() != "BUNDLE"){
			var value = $(this).find('input').val();
			var text = $(this).find('label').text()
			row2 += "<option value='"+value+"'>"+text+"</option>"
		}
	})
	sl_prd_design = row2;
	
	/*เก็บค่า rider ที่แอดไปแล้ว*/
	var num_rider = $("#tb_Additional_contract_OL tbody>tr").length;
	if(num_rider > 0){
		$("#tb_Additional_contract_OL tbody>tr>td:nth-child(3)>label").each(function(){
			arrRider.push($(this).text());
		});
		
		var value_chk_old = arrRider.join(",")
		var value = [];
 	 		value = value_chk_old.split(",");
 	
	    for(var i=0; i<value.length; i++){		 
	    	value_check_diff.push(value[i]);	 
	 	}
	}
	
	$("#tb_Additional_contract_modal_OL tbody>tr input[type='checkbox']:checked").each(function(){
		var id = $(this).attr("id");
			id = id.replace("ch_Additional_contract_","");
				
		var ftOnclick = 'imgCheckbox(id);';	
		var rider_id = $(this).parent().parent().find("#ch_Additional_contract_"+id).val();
		var rider_name = $(this).parent().parent().find("#additional_contract_Name_"+id).text();
		var rider_cov_cat_id = $(this).parent().parent().find("#rider_cov_cat_id"+id).val();
		var prd_code_rider = $(this).parent().parent().find("#prd_code_rider_"+id).val();
		var biz_code = $(this).parent().parent().find("#biz_code_"+id).val();
		
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
	    
	    /*เช็ค rider ซ้ำ*/
	    var flag_dupp = false;
		if($("#tb_Additional_contract_OL tbody>tr").length > 0){
			$("#tb_Additional_contract_OL tbody>tr").each(function(){
				if(prd_code_rider == $(this).find('td:nth-child(3) label').text()){
					flag_dupp = true;
				}
			})
		}
	
	    if(flag_dupp == false){
	   //if(save_diff != ""){
	    	
	    numberImgOK++;
	    numberImgOK_age++;
	    numberImgOK_cal++;
	    var newID = "imgOK_"+numberImgOK;
	    var rate_cat_NAR = $("#rate_cat_NAR_OL").val();
	    var addrowChild = 'addrowChild_OL("'+numberImgOK+'","'+rider_name+'","'+rider_type+'",this);';
	    var changeFileModal = 'modalGet_selectFile_OL("'+rider_id+'","fileuploads_PMRate1_OL","ip_fileuploads_OL_Additional_contract_Show_'+numberImgOK+'","span_Additional_contractopen_'+numberImgOK+'","validate_Additional_OL_'+numberImgOK+'_OL","span_Additional_contractdownload_'+numberImgOK+'","")';
	   // for(var m=0; m<save_diff_split.length; m++){
	    	//alert(save_diff_split[m]);
	    	   		       		    	
	   // if(rider_id == save_diff_split[m]){		 
		    row2 = 	"<tr id=\"tr_Additional_contract_"+numberImgOK+"\" data-id=\""+numberImgOK+"\" data-level=\"1\">"+
			"<td class=\'text-center verticalCenter borderBlack\'  class=\'text-center verticalCenter borderBlack\' id=\""+newID+"\" onclick=\'"+ftOnclick+"\'>"+
				"<i class=\'glyphicon glyphicon-edit\'></i>" +
			"</td>"+
			"<td class='text-center verticalCenter fontcolortable2 borderBlack font-bold'>" +
				"<input type='hidden' id='hd_prdDesign_OL"+numberImgOK+"' value='RATE_MAKING'/>"+
				"<select class='form-control width100px' id='sel_prd_design_"+numberImgOK+"' onchange='covert_hiddenPrdDesign(this);'>"+sl_prd_design+"</select>"+
			"</td>"+
			"<td class=\"text-left verticalCenter borderBlack\">"+
				"<input type='hidden' id='prd_code_rider_"+numberImgOK+"' value='"+prd_code_rider+"'>"+
				"<input type='hidden' id='cov_code_rider_"+numberImgOK+"' value='"+rider_id+"'>"+
				"<label style=\"text-decoration: underline; color: blue;\">"+prd_code_rider+"</label>"+
			"</td>"+
			"<td class='text-center verticalCenter fontcolortable2 borderBlack font-bold'>" +
				"<input type='hidden' id='cov_cat_id_rider"+numberImgOK+"' value='"+rider_cov_cat_id+"'>"+
				"<label>"+biz_code+"</label>" +
			"</td>"+
			"<td class=\"text-left verticalCenter fontcolortable2 borderBlack\">"+
				"<label>"+rider_name+"</label>"+
			"</td>"+
			"<td class=\"text-center verticalCenter borderBlack\">"+
				"<i class=\"glyphicon glyphicon-plus icon-blue-circle disabledAll\"  data-id=\'"+numberImgOK+"\' data-topic=\'"+rider_id+"\' data-type=\'1\' id=\"addrow1_"+numberImgOK+"\" onclick='"+addrowChild+"'></i>"+
			"</td>"+
			"<td class=\"verticalCenter borderBlack\">"+
				"<div class=\"input-group col-xs-12\">"+
					"<input type='hidden' id='fileId_rider_PM"+numberImgOK+"' value='' />"+
					"<input type='hidden' id='rate_cat_id_rider_PM"+numberImgOK+"' value='' />"+
					"<input type='hidden' id='rate_layout_id_rider_PM"+numberImgOK+"' value='' />"+
					"<input type=\"file\" accept=\".txt\" id=\"ip_fileuploads_Additional_contract"+numberImgOK+"\" style=\"display: none\">"+
					"<input type=\"text\" class=\"form-control clear_val\" id=\"ip_fileuploads_OL_Additional_contract_Show_"+numberImgOK+"\" readonly> " +
					"<span class=\"input-group-btn\"><button class=\"btn btn-default btn-primary disabledAll\" type=\"button\" id=\"bt_uploadfileAdditional_contract"+numberImgOK+"\"  onclick='"+changeFileModal+"' data-toggle=\"modal\" data-target=\"#modal_input_PMRate_OL\">" +
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
		    "</tr>";
			
			$("#tb_Additional_contract_OL tbody").append(row2);
			$(".autoComma").autoNumeric('init',{vMin: '0.00', vMax: '999999999.99'});
			$(".autoPercent").autoNumeric('init',{vMin: '0.00', vMax: '99.99'});
	    	//}
	    //}
	    
	    get_case_rider_OL("PR",rider_id,rider_cov_cat_id,prd_code_rider,numberImgOK,false,biz_code,rider_name);
	    $("#validate_input11_ol").hide();
	    
	    //ไป validate TAB - ข้อกำหนด การซื้อสัญญาแนบท้ายควบ
	    disabled_coverageRider_OL(prd_code_rider)
	  }
	    
	});
	
	
	var value_chk_new_array = arr_value.join(",");
	var count_sub_modal = $("#tb_Additional_contract_modal_OL tbody>tr input[type='checkbox']:checked").length;
	
	var save_diff_del = [];    	
	value_check_diff.map(function(item){
    	if(!arr_value.includes(item)){
    		save_diff_del.push(item);
  		}
    });
    
	
		
	if($("#div_tb_Additional_contract_OL").innerHeight() > 264){
		$("#div_tb_Additional_contract_OL").addClass("settableproduct");
	}else{
		$("#div_tb_Additional_contract_OL").removeClass("settableproduct");
	}
	
	//ดึงข้อมูลตารางพิกัดอายุ
	//get_tb_ageRange(2);
	//ดึงค่าการใช้สิทธิ์ตามกรมธรรม์
	//get_row_useRight(arr_value);	
	/*เลือก Rider มาใหม่ default ให้เลือก Rate_making มาก่อน*/
	validate_rd_tbAdditional();
}


function get_case_rider_OL(type,cov_code,rider_cov_cat_id,prd_code_rider,numberImgOK,show_cov,biz_code,nameTH){

	var json_data = {
			"method" : "getCaseRider",
			"rCode" : cov_code
	}
	$.ajax({
		url: 'ProductBasePlanOL_GetData_Servlet',
		type: "POST",
		data: json_data,
		async: false,
		success: function (response) {
			var obj = response.Tab_Basic_Information[0];
			var obj_calPrem = response.Tab_cal_insurance_premiums[0];
			
			//****Tab Basic****//
			getData_TabBasicInfo_rider(type,cov_code, rider_cov_cat_id,prd_code_rider,numberImgOK,response,show_cov,biz_code,nameTH);
			//getData_TabCal_rider(cov_code, rider_cov_cat_id,prd_code_rider,numberImgOK,response);
			getData_TabCalPrem_OL(cov_code, type, prd_code_rider, response,show_cov,"");
			//getData_tab_useRight
			getData_TabUseRight_rider_OL(cov_code,type, prd_code_rider, response,show_cov,"");
			/****Tab ผลประโยชน์การขาย****/
			getData_TabSaleBenefit_OL(cov_code, type, prd_code_rider, response,show_cov,"");
			//****Tab Term****//
			getData_TabTerm_data_OL(cov_code,"R",prd_code_rider,response,show_cov);
			//****Tab Policy****//
			getData_TabPolicyWording_data_OL(cov_code,type,prd_code_rider,response,show_cov);
			//****Tab Benefit****//
			showcase_benefit_OL(response, type, cov_code,show_cov,prd_code_rider);
			get_dataBenefit_OL(response, type, cov_code, prd_code_rider);

		},
		error: function(){
			alert("fail")
		}
	});
	console.log("data",json_data);
	

	//GetSalesBenefits Benz 10-10-2019////////////////////////
	var json_data = {
			"method" : "getSalesBenefits",
			"pass_Insurance" : prd_code_rider
	}
	$.ajax({
		url: 'ProductBasePlanOL_GetData_Servlet',
		type: "POST",
		data: json_data,
		async: false,
		success: function (response) {
			getData_TabSaleBenefit_PR_OL(response);
		},
		error: function(){
			alert("fail")
		}
	});
}

function getData_TabBasicInfo_rider(type,cov_code, rider_cov_cat_id,prd_code_rider,numberImgOK,response,show_cov,biz_code,nameTH){
	var obj_typeRider 	= response.Tab_Basic_Information[0].type_coverage[0].type[2].text;
	//var biz_code 		= response.Tab_Basic_Information[0].biz_code;
	//var nameTH 			= response.Tab_Basic_Information[0].nameTH;
	var rider_id 		= cov_code;
	
	var numberImgOK_age = Number($("#tb_ageRange_OL>tbody>tr[data-level='1']:last").attr("data-id"));
	numberImgOK_age++
	numberImgOK_cal = numberImgOK
	
	/*ดึงข้อมูล PR มาโชว์ ถ้าเข้า else จะไปเอาข้อมูลใน coverage*/ 
	if(type == "PR"){
		getData_TabBasic_PR_OL(prd_code_rider);
	}else{
		for(i in response.Tab_cal_insurance_premiums[0].table_insurance_premium){
			var rowChild = i
			var obj_rider_pm = response.Tab_cal_insurance_premiums[0].table_insurance_premium[i]
			if(obj_rider_pm.type == ""){
				var changeFileModal 			= "";
				var getShowFileRiderRMRate = 'openFileTextProduct_OL("'+obj_rider_pm.file+'", "'+obj_rider_pm.ref+'", 41,"tb_input_fileSee_modal_pmRate_OL","modal_input_fileSee_PMRate_OL")';
				var getDownloadFileRiderPMRate = 'openFile_target("'+obj_rider_pm.file+'","'+obj_rider_pm.ref+'","txt_download")';
				
				$("#tb_Additional_contract_OL tbody>tr[data-level='1']").each(function(){
					var row_id = $(this).attr('id')
						row_id = row_id.replace("tr_Additional_contract_","")
						if( $(this).find('td:nth-child(3) #cov_code_rider_'+row_id).val() == response.Tab_Basic_Information[0].passInsurance){
							$(this).find('td:nth-child(7) #fileId_rider_PM'+row_id).val(obj_rider_pm.fileID)
							$(this).find('td:nth-child(7) #rate_cat_id_rider_PM'+row_id).val(obj_rider_pm.rate_cat_id)
							$(this).find('td:nth-child(7) #rate_layout_id_rider_PM'+row_id).val(obj_rider_pm.layout)
							$(this).find('td:nth-child(7) #ip_fileuploads_OL_Additional_contract_Show_'+row_id).val(obj_rider_pm.file)
							
							$("#span_Additional_contractopen_"+row_id).find('span').removeClass('activecolorgray').addClass('activecolorblue')
							$("#span_Additional_contractdownload_"+row_id).find('span').removeClass('activecolorgray').addClass('activecolorblue')
							$("#span_Additional_contractopen_"+row_id).find('span').attr("onclick",getShowFileRiderRMRate)
							$("#span_Additional_contractdownload_"+row_id).find('span').attr("onclick",getDownloadFileRiderPMRate)
						}
				})
				
			}else{
					/*ลูก*/
					/*add row child*/
					var flag_insert = false;
					$("#tb_Additional_contract_OL tbody>tr").each(function(){
					var row_id = $(this).attr('id')
						row_id = row_id.replace("tr_Additional_contract_","")
						if( $(this).find('td:nth-child(3) #cov_code_rider_'+row_id).val() == response.Tab_Basic_Information[0].passInsurance
								&& !flag_insert){
							
							var removerowChild = 'removerowChild_OL("tr_Additional_contract_'+row_id+'_'+rowChild+'","'+row_id+'");';
							var changeFileModal2 = 'modalGet_selectFile_OL("'+cov_code+'","fileuploads_PMRate1_OL","ip_fileuploads_OL_Additional_contract_Show_'+row_id+'_'+rowChild+'","span_Additional_contractopen_'+row_id+'_'+rowChild+'","validate_rate'+row_id+'_'+rowChild+'","span_Additional_contractdownload_'+row_id+'_'+rowChild+'","")';
						    var getShowFileRiderRMRate_child = 'openFileTextProduct_OL("'+obj_rider_pm.file+'", "'+obj_rider_pm.ref+'", 41,"tb_input_fileSee_modal_pmRate_OL","modal_input_fileSee_PMRate_OL")';
							var getDownloadFileRiderPMRate_child = 'openFile_target("'+obj_rider_pm.file+'","'+obj_rider_pm.ref+'","txt_download")';
							
							var row2 = "<tr id=\"tr_Additional_contract_"+row_id+"_"+rowChild+"\" data-id=\""+row_id+"\" data-parent=\""+row_id+"\" data-level='2' data-group='"+row_id+"'>"+
											"<td class=\'text-center verticalCenter borderBlack\'  class=\'text-center verticalCenter borderBlack\'></td>"+
											"<td class=\'text-center verticalCenter borderBlack\'  class=\'text-center verticalCenter borderBlack\'></td>"+
											"<td class=\"text-center verticalCenter	borderBlack\">"+
												"<input type='hidden' id='prd_code_rider_"+row_id+"_"+rowChild+"' value='"+prd_code_rider+"'>" +
												"<input type='hidden' id='cov_code_rider_"+row_id+"_"+rowChild+"' value='"+cov_code+"'>"+
											"</td>"+
												"<td class=\"text-center verticalCenter fontcolortable2 borderBlack font-bold\">"+biz_code +
												"<input type='hidden' id='cov_cat_id_rider"+row_id+"_"+rowChild+"' value='"+obj_typeRider+"'>"+
											"</td>"+
											"<td class=\"text-left verticalCenter fontcolortable2 borderBlack\">"+
												"<label>"+nameTH+"</label>"+
											"</td>"+
											"<td class=\"text-center verticalCenter	borderBlack\"><i class='glyphicon glyphicon-minus icon-blue-circle icon_active disabledAll'  data-id='"+rowChild+"' data-topic='"+rowChild+"' data-type='2' id='removerow_"+rowChild+"' onclick='"+removerowChild+"'></i></td>"+
											"<td class=\"verticalCenter borderBlack\">"+
												"<div class=\"input-group col-xs-12\">"+
													"<input type='hidden' id='fileId_rider_PM"+row_id+"_"+rowChild+"' value='"+obj_rider_pm.fileID+"'>"+
													"<input type='hidden' id='rate_cat_id_rider_PM"+row_id+"_"+rowChild+"' value='"+obj_rider_pm.rate_cat_id+"'>"+
													"<input type='hidden' id='rate_layout_id_rider_PM"+row_id+"_"+rowChild+"' value='"+obj_rider_pm.layout+"'>"+
													"<input type=\"file\" accept=\".txt\" id=\"ip_fileuploads_Additional_contract"+row_id+"_"+rowChild+"\" style=\"display: none\">"+
													"<input type=\"text\" class=\"form-control\" id=\"ip_fileuploads_OL_Additional_contract_Show_"+row_id+"_"+rowChild+"\" value='"+obj_rider_pm.file+"' readonly> "+
													"<span class=\"input-group-btn\"><button class=\"btn btn-default btn-primary disabledAll\" type=\"button\" " +
															"onclick ="+changeFileModal2+" id=\"bt_uploadfileAdditional_contract"+row_id+"_"+rowChild+"\" data-toggle=\"modal\" data-target=\"#modal_input_PMRate\"><font id='validate_rate"+row_id+"_"+rowChild+"' style='color: red;' hidden>*</font>...</button>"+
													"</span>"+
												"</div>"+
											"</td>"+
											"<td class='text-center verticalCenter borderBlack'>"+
												"<a id='span_Additional_contractopen_"+row_id+"_"+rowChild+"' class='active_grey'>"+
													"<span class='glyphicon glyphicon-eye-open activecolorblue' onclick='"+getShowFileRiderRMRate_child+"'></span>"+
												"</a>"+
											"</td>"+
											"<td class=\"text-center verticalCenter borderBlack\">" +
											"<a id='span_Additional_contractdownload_"+row_id+"_"+rowChild+"' class='active_grey'>"+
												"<span data-id=\'span_Additional_contractdownload_"+rowChild+"\' class=\'glyphicon glyphicon-download-alt activecolorblue\'  onclick='"+getDownloadFileRiderPMRate_child+"'></span>"+
											"</a>"+
											"</td>"+
										"</tr>"
							
							$(row2).insertAfter($("#tb_Additional_contract_OL"+">tbody>tr[data-id="+row_id+"]:last").closest('tr'));
							flag_insert = true
						}
					})
			}
		}
	}
	
	
	 // เซ็คว่ามี pm rate รึเปล่า
	 var chk_pmRate  = response.Tab_cal_insurance_premiums[0].table_insurance_premium.length
	 if(chk_pmRate == 0){
		 //alert("yes")
		 $("#tb_Additional_contract_OL tbody>tr").each(function(){
			 var tr_id = $(this).attr('id')
			 	 tr_id = tr_id.replace("tr_Additional_contract_","")
			 if( rider_id == $(this).find('td:nth-child(3) #cov_code_rider_'+tr_id).val()){
				 $(this).find('td:nth-child(6) i').addClass('disabledAll')
				 $(this).find('td:nth-child(7) button').attr("disabled",true)
			 }
		 })
	 }
	
	/*การกำหนดบันทึกสลักหลังและพิกัดอายุ*/	
	var start_age = response.Tab_Basic_Information[0].age_Start;
	var age_Start_Unit = response.Tab_Basic_Information[0].age_Start_Unit;
	var end_age = response.Tab_Basic_Information[0].age_To;
	var age_To_Unit = response.Tab_Basic_Information[0].age_To_Unit; 
	var max_age = "";
		if( response.Tab_Basic_Information[0].maximum_Insure_year != 0){
			max_age = response.Tab_Basic_Information[0].maximum_Insure_year
		}else{
			max_age = response.Tab_Basic_Information[0].maximum_Insure_age
		}
	var sl_ageCoordinate = $("#sl_unit_age_coordinates_OL").val();
	row_age = "<tr id='tr_ageRange_CV"+numberImgOK_age+"' data-id='"+numberImgOK_age+"' data-parent='0' data-level='1' data-type='2'>"+											
	  "<td class='text-left verticalCenter borderBlack'>"
	if(type == "PR"){
		row_age += "<label class='font-term-green font-bold'>"+prd_code_rider+"</label>"
	}else{
		row_age += "<label class='font-term-green font-bold'>"+rider_id+"</label>"
	}
		row_age += "<input type='hidden' id='prd_rider_code' value='"+prd_code_rider+"'>"+
				   "<input type='hidden' id='cov_code' value='"+rider_id+"'>"+
	  "</td>"+
	  "<td class='text-center verticalCenter borderBlack font-term-green font-bold'>" +
	  	"<input type='hidden' id='cov_cat_id' value='"+rider_cov_cat_id+"'>"+
	  	"<label class='font-term-green font-bold'>"+obj_typeRider+"</label>" +
	  "</td>"+
	  "<td class='text-center verticalCenter borderBlack'>"+
	  	"<i class='glyphicon glyphicon-plus icon-blue-circle' data-id='"+numberImgOK_age+"' id='addrow_endorse"+numberImgOK_age+"' onclick=\"addRowEndorse_OL("+numberImgOK_age+", '"+rider_id+"', '"+prd_code_rider+"');\"></i>"+
	  "</td>"+											
	  "<td class='text-center verticalCenter borderBlack'>"+
	  	"<input type='hidden' id='hd_min_issue_age"+numberImgOK_age+"' value='"+start_age+"'>"+
	  	"<input type='number' class='form-control margin-padding0 text-center width40px' value='"+start_age+"' min='1' onchange=\"numberKey_min_OL(this,'hd_min_issue_age"+numberImgOK_age+"');\" disabled>"+
	  "</td>"+
	  "<td class='text-center verticalCenter borderBlack'>"+
	  "<input type='hidden' id='start_insure_ageUnit"+numberImgOK_age+"' value='"+age_Start_Unit+"'>"+
		"<select class='form-control width100px' id='ageRange_unit"+numberImgOK_age+"_ol' onchange='change_typeTerm1_OL(this)' disabled>"+
			"<option value='NONE'>None</option>"+sl_ageCoordinate+
		"</select>"+
	  "</td>"+
	  "<td class='text-center verticalCenter borderBlack'>"+
	  "<input type='hidden' id='hd_max_issue_age"+numberImgOK_age+"' value='"+end_age+"'>"+
	  	"<input type='number' class='form-control margin-padding0 text-center width40px' value='"+end_age+"' min='1' onchange=\"numberKey_max_OL(this,'hd_max_issue_age"+numberImgOK_age+"');\" disabled>"+
	  "</td>"+
	  "<td class='text-center verticalCenter borderBlack'>"+
	  "<input type='hidden' id='end_insure_ageUnit"+numberImgOK_age+"' value='"+age_To_Unit+"' >"+
		"<select class='form-control width100px' id='ageRange_unit"+numberImgOK_age+"_ol' onchange='change_typeTerm2_OL(this)' disabled>"+
			"<option value='NONE'>None</option>"+sl_ageCoordinate+
		"</select>"+
	  "</td>"+
	  "<td class='text-center verticalCenter borderBlack'>"+
	  "<input type='hidden' id='hd_max_insure_age"+numberImgOK_age+"' value='"+max_age+"'>"+
		"<input type='number' class='form-control margin-padding0 text-center width40px' value='"+max_age+"' min='1' onchange=\"numberKey_maximum_OL(this,'hd_max_insure_age"+numberImgOK_age+"');\" disabled>"+
	  "</td>"+
	  "<td class='text-center verticalCenter borderBlack'>"+												
		"<select class='form-control width100px' id='ageRange_unit"+numberImgOK_age+"_ol' onchange='change_typeTerm3_OL(this)' disabled>"+
			"<option value='NONE'>None</option>"+sl_ageCoordinate+
		"</select>"+
	  "</td>"+																			
	  "</tr>";

	$("#tb_ageRange_OL tbody").append(row_age);			
	$("#tb_ageRange_OL tbody> #tr_ageRange_CV"+numberImgOK_age).find("td:nth-child(5) option[value='"+age_Start_Unit+"']").attr("selected","selected");
	$("#tb_ageRange_OL tbody> #tr_ageRange_CV"+numberImgOK_age).find("td:nth-child(7) option[value='"+age_To_Unit+"']").attr("selected","selected");
	$("#tb_ageRange_OL tbody> #tr_ageRange_CV"+numberImgOK_age).find("td:nth-child(9) option[value='YEAR']").attr("selected","selected");
	
}
function getData_TabCal_rider(cov_code, rider_cov_cat_id,prd_code_rider,numberImgOK,response){
	var obj_typeRider = response.Tab_Basic_Information[0].type_coverage[0].type[2].text;
	var rider_id = cov_code;
	numberImgOK = numberImgOK
	numberImgOK_age = numberImgOK
	numberImgOK_cal = numberImgOK
	

	/*เพิ่ม row ของ Tab-คำนวณเบี้ยประกัน || ตาราง-การคำนวณจำนวนเงินเอาประกันภัย*/
	var dropdownUnit = $("#hide_fixCovUnit").val();
	var dropdownOF1 = $("#hide_fixCovFactor").val();
	var dropdownOF2 = $("#hide_minCovFactor").val();
	row_cal = "<tr id=\"tr_Calculate_insurance_"+numberImgOK_cal+"\" data-id=\""+numberImgOK_cal+"\" data-parent=\"0\" data-group='"+numberImgOK_cal+"' data-level=\"1\" data-key='"+rider_id+"' >"+
					"<td width=\"14%\" class=\"text-center verticalCenter fontcolortable2 borderBlack\">"+
						"<input type='hidden' id='prd_rider_code' value='"+prd_code_rider+"'>"+
						"<input type='hidden' id='serie_no' value='1'>"+
						"<input type='hidden' id='seq' value='1'>"+
						"<label>"+rider_id+"</label>"+
					"</td>"+
					"<td width=\"7%\"class=\"text-center verticalCenter fontcolortable2 borderBlack\">" +
						"<label>"+obj_typeRider+"</label>" +
					"</td>"+
					"<td width=\"3%\" class=\"text-center verticalCenter borderBlack\">"+
						"<i class=\"glyphicon glyphicon-plus icon-blue-circle\"  data-id=\'"+numberImgOK_cal+"\' data-topic=\'"+numberImgOK_cal+"\' data-type=\'"+numberImgOK_cal+"\' id=\"addrowMenu3_"+numberImgOK_cal+"\" onclick=\"addrowMenu3("+numberImgOK_cal+");\"></i>"+
					"</td>"+	
					"<td width=\"7%\"class=\"text-right verticalCenter borderBlack\">"+
					"<input type='text' class='autoComma form-control text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999999999.99' onblur='validateMin_tbCal_OL(this)'>"+
					"</td>"+
					"<td width=\"7%\" class=\"text-right verticalCenter borderBlack\">"+ 
					"<input type='text' class='autoComma form-control margin-padding0 text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999999999.99' onblur='validateMax_tbCal(this);'>"+
					"</td>"+
					"<td width=\"10%\"class=\"text-right verticalCenter borderBlack\">"+
					"<input type='text' class='autoComma form-control margin-padding0 text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999999999.99'>"+
					"</td>"+
					"<td width=\"14%\" class=\"text-right verticalCenter borderBlack\">"+
						"<select class=\"form-control\" onchange='change_unit_OL(this,6)'><option value='NONE'>None</option>"+dropdownUnit+"</select></td>"+
					"<td width=\"14%\" class=\"text-right verticalCenter borderBlack\">"+
						"<select class=\"form-control\"><option value='NONE'>None</option>"+dropdownOF1+"</select></td>"+
					"<td width=\"10%\" class=\"text-right verticalCenter borderBlack\">"+
					"<input type='text' class='autoComma form-control margin-padding0 text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999999999.99'>"+
					"<td width=\"14%\" class=\"text-right verticalCenter borderBlack\">"+
						"<select class=\"form-control\"><option value='NONE'>None</option>"+dropdownOF2+"</select></td>"+
				"</tr>";		
		$("#tb_Calculate_insurance_OL tbody").append(row_cal);
		$(".autoComma").autoNumeric('init',{vMin: '0.00', vMax: '999999999.99'});
	
		/*เพิ่ม row ของ Tab-คำนวณเบี้ยประกัน || ตาราง-การคำนวณเบี้ยประกันภัย*/
		var sl_calculus = $("#hide_slCalculus_OL").val();
		row4 = 	"<tr id=\"tb_Calculate_insurance2_OL"+numberImgOK_cal+"\">"+
					"<td width=\"30%\" class=\"text-center verticalCenter fontcolortable2 borderBlack\">"+
						"<input type='hidden' id='prd_rider_code' value='"+prd_code_rider+"'>"+
						"<label>"+rider_id+"</label>"+
					"</td>"+
					"<td width=\"20%\" class=\"text-center verticalCenter fontcolortable2 borderBlack\">"+
						"<label>"+obj_typeRider+"</label>"+					
					"</td>"+	
					"<td width=\"50%\"class=\"text-center verticalCenter borderBlack\">"+
					"<select class=\"form-control\" disabled><option value='0'>None</option>"+sl_calculus+"</select></td>"+
				"</tr>";			  
			$("#tb_Calculate_insurance2_OL tbody").append(row4);
}

//****** Table สัญญาเพิ่มเติม ////*****\\
var rowChild = "0";
function addrowChild_OL(row,name,type,e) {
	
	/*เซ็คไม่ไห้กดตัวลูกได้เกิน 2 row*/
	var flag_duplicate = false;
	$("#tb_Additional_contract_OL tbody>tr").each(function(){
		if(row == $(this).data('group')){
			flag_duplicate = true;
		}
	})
	
	if(!flag_duplicate){
		$(e).addClass('disabledAll')
	}
	
	rowChild = 1;
	var name_tr = "tr_Additional_contract_"+row+"_"+rowChild;
	var removerowChild = 'removerowChild_OL("'+name_tr+'","'+row+'")';
	
	var placeholderParent = $("#tb_Additional_contract_OL tbody>tr[data-id="+row+"]").find('td:nth-child(6) input[type="text"]').attr('placeholder');
	var tr_selId = "tr_Additional_contract_"+row;
	var rate_cat_PM = $("#rate_cat_tbBase_OL").val();
	var rate_cat_NAR = $("#rate_cat_NAR_OL").val();
	var prd_design_child = $("#tb_Additional_contract_OL tbody>tr[data-id="+row+"]").find('td:nth-child(2) #hd_prdDesign_OL'+row).val();
	if(type == ""){
		type = $("#"+tr_selId).find('td:nth-child(4) label').text();
	}
	
	// เพิ่ม onchange placeholder ของไฟล์ที่เลือกมา
	var layout_name1 = $("#layout_NAR1_OL").val();
	var layout_name2 = $("#layout_NAR2_OL").val();
	var product_code_main = $("#pass_Insurance_product_ol").val();
	var cov_code =	$("#"+tr_selId).find('td:nth-child(3) #cov_code_rider_'+row).val();
	//var cov_code = $("#"+tr_selId).find('td:nth-child(3) label').text();
	var cov_cat_id = $("#"+tr_selId).find('td:nth-child(4) input[type="hidden"]').val();
	var prd_rider_code = $("#"+tr_selId).find('td:nth-child(3) #prd_code_rider_'+row).val();
	var layout1 = layout_name1+cov_code+"_"+product_code_main;
	var layout2 = layout_name2+cov_code+"_"+product_code_main;
	var placeholder = layout1+".txt" + " หรือ " + layout2+".txt"
	var changeFileModal = 'modalGet_selectFile_OL("'+cov_code+'","fileuploads_PMRate1_OL","ip_fileuploads_OL_Additional_contract_Show_'+row+'_'+rowChild+'","span_Additional_contractopen_'+row+'_'+rowChild+'","validate_rate'+row+'_'+rowChild+'","span_Additional_contractdownload_'+row+'_'+rowChild+'","")';
	var selectFileNAR = 'selectFileRate_OL(22,"ip_fileuploads_OL_AdditionalNAR_contract_Show_'+row+'_'+rowChild+'","'+layout1+'","'+layout2+'","","span_Additional_contractopenNAR_'+row+'_'+rowChild+'");'
	
	new_row = 	"<tr id=\"tr_Additional_contract_"+row+"_"+rowChild+"\" data-id=\""+row+"\" data-parent=\""+row+"\" data-level='2' data-group='"+row+"'>"+
	"<td class=\'text-center verticalCenter borderBlack\'  class=\'text-center verticalCenter borderBlack\'></td>"+
	"<td class=\"text-center verticalCenter	borderBlack\">" +
		"<input type='hidden' id='hd_prdDesignChild_OL"+row+"' value='"+prd_design_child+"'/>" +
	"</td>" +
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
			"<input type=\"text\" class=\"form-control\" id=\"ip_fileuploads_OL_Additional_contract_Show_"+row+"_"+rowChild+"\" readonly> " +
			"<span class=\"input-group-btn\"><button class=\"btn btn-default btn-primary\" type=\"button\" " +
					"onclick ="+changeFileModal+" id=\"bt_uploadfileAdditional_contract"+row+"_"+rowChild+"\" data-toggle=\"modal\" data-target=\"#modal_input_PMRate_OL\">" +
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
		"<span data-id=\'span_Additional_contractdownload_"+rowChild+"\' class=\'glyphicon glyphicon-download-alt activecolorgray\'></span>"+
		"</a>"+
		"</td>"+
    "</tr>";	

    if(!flag_duplicate){
    	$(new_row).insertAfter($("#tb_Additional_contract_OL"+">tbody>tr[data-id="+row+"]").closest('tr'));
    }
}
function removerowChild_OL(value,dataID) {
	$('#'+value).remove(); 
	$("#tb_Additional_contract_OL #tr_Additional_contract_"+dataID).find('td:nth-child(6) i').removeClass('disabledAll')
}
function addrowChildBase_OL(row,name,e) {
	
	/*เซ็คไม่ไห้กดตัวลูกได้เกิน 2 row*/
	var flag_duplicate = false;
	$("#tb_PM_Rate_OL tbody>tr").each(function(){
		if(row == $(this).data('group')){
			flag_duplicate = true;
		}
	})
	
	if(!flag_duplicate){
		$(e).addClass('disabledAll')
	}
	
	rowChild = 1;
	var name_tr = "rowLookupValue_tbody_PM_Rate"+row+"_"+rowChild;
	var removerowChild = 'removerowChildBase_OL("'+name_tr+'","'+row+'")';
	
	var placeholderParent = $("#tb_PM_Rate_OL tbody>tr[data-id="+row+"]").find('td:nth-child(4) input[type="text"]').attr('placeholder');
	var tr_selId = "rowLookupValue_tbody_PM_Rate"+row;
	//var rate_cat_PM = $("#rate_cat_tbBase_OL").val();
	var rate_cat_NAR = $("#rate_cat_NAR_OL").val();
	
	
	// เพิ่ม onchange placeholder ของไฟล์ที่เลือกมา
	var layout_name1 = $("#layout_NAR1_OL").val();
	var layout_name2 = $("#layout_NAR2_OL").val();
	var product_code_main = $("#pass_Insurance_product_ol").val();
	var cov_code =	$("#"+tr_selId).find('td:nth-child(1) label').text();
	var cov_cat_id = $("#"+tr_selId).find('td:nth-child(1) #cov_cat_id_base_PM').val();
	var prd_rider_code = $("#"+tr_selId).find('td:nth-child(1) #prd_code_base_PM').val();
	var layout1 = layout_name1+cov_code+"_"+product_code_main;
	var layout2 = layout_name2+cov_code+"_"+product_code_main;
	var placeholder = layout1+".txt" + " หรือ " + layout2+".txt"
	var changeFileModal = 'modalGet_selectFile_OL("'+cov_code+'","fileuploads_PMRate1_OL","ip_fileuploads_OL_PM_Rate1_Show_'+row+'_1","span_PM_Rateopen_'+row+'_1","validate_rate'+row+'_1","span_PM_Ratedownload_'+row+'_1","'+cov_cat_id+'")';
	
	new_row = 	"<tr id=\"rowLookupValue_tbody_PM_Rate"+row+"_"+rowChild+"\" data-id=\""+row+"\" data-parent=\""+row+"\" data-level='2' data-group='"+row+"'>"+
	"<td class=\'text-center verticalCenter borderBlack\'  class=\'text-center verticalCenter borderBlack\'>" +
		"<input type='hidden' id='prd_code_base_PM' value='"+prd_rider_code+"' > "+
		"<input type='hidden' id='cov_cat_id_base_PM' value='"+cov_cat_id+"'>"+
	"</td>"+
	"<td class=\"text-left verticalCenter fontcolortable1 borderBlack\">"+
		"<label>"+name+"</label>"+
	"</td>"+
	"<td class=\"text-center verticalCenter borderBlack\">"+
		"<i class=\"glyphicon glyphicon-minus icon-blue-circle icon_active \"  data-id=\'"+rowChild+"\' data-topic=\'"+rowChild+"\' data-type=\'2\' id=\"removerow_"+rowChild+"\" onclick='"+removerowChild+"'></i>"+
	"</td>"+
	"<td colspan='2' class=\"text-center verticalCenter borderBlack\">"+
		"<div class=\"input-group col-xs-12\">"+
			"<input type='hidden' id='fileId_base_PM' value=''>"+
			"<input type='hidden' id='rate_cat_id_base_PM' value=''>"+
			"<input type='hidden' id='rate_layout_id_base_PM' value=''>"+
			"<input type=\"file\" accept=\".txt\" id=\"ip_fileuploads_OL_PM_Rate"+row+"_"+rowChild+"\" style=\"display: none\">"+
			"<input type=\"text\" class=\"form-control\" id=\"ip_fileuploads_OL_PM_Rate1_Show_"+row+"_"+rowChild+"\" readonly> " +
			"<span class=\"input-group-btn\"><button class=\"btn btn-default btn-primary\" type=\"button\" " +
					"onclick ="+changeFileModal+" id=\"bt_uploadfilePM_Rate"+row+"_"+rowChild+"\" data-toggle=\"modal\" data-target=\"#modal_input_PMRate_OL\">" +
//					"<font id='validate_rate"+row+"_"+rowChild+"' style='color: red;'>*</font>" +
					"...</button>"+
			"</span>"+
		"</div>"+
	"</td>"+
	"<td class='text-center verticalCenter borderBlack'>"+
		"<a id='span_PM_Rateopen_"+row+"_"+rowChild+"' class='active_grey'>"+
			"<span class='glyphicon glyphicon-eye-open activecolorgray'></span>"+
		"</a>"+
	"</td>"+
		/*"<span data-id=\'span_Additional_contractopen_"+row+"_"+rowChild+"\' class=\'glyphicon glyphicon-eye-open activecolorgray\'></span></td>"+*/
	"<td class=\"text-center verticalCenter borderBlack\">" +
	"<a id='span_PM_Ratedownload_"+row+"_"+rowChild+"' class='active_grey'>"+
		"<span data-id=\'span_PM_Ratedownload_"+rowChild+"\' class=\'glyphicon glyphicon-download-alt activecolorgray\'></span>"+
		"</a>"+
		"</td>"+
		"<td class=\"verticalCenter borderBlack\"></td>"+
		"<td class=\"verticalCenter borderBlack\"></td>"+
		"<td class=\"verticalCenter borderBlack\"></td>"+
		"<td class=\"verticalCenter borderBlack\"></td>"+
    "</tr>";	

    if(!flag_duplicate){
    	$(new_row).insertAfter($("#tb_PM_Rate_OL"+">tbody>tr[data-id="+row+"]").closest('tr'));
    }
}
function removerowChildBase_OL(value,dataID) {
	$('#'+value).remove(); 
	$("#tb_PM_Rate_OL #rowLookupValue_tbody_PM_Rate"+dataID).find('td:nth-child(3) i').removeClass('disabledAll')
}
/* modalGet_selectFile */
function modalGet_selectFile_OL(id,id_row,textVal,spanfile,validate,spanDownload,cov_cat){
	
	//check base or rider
	var chk_type ;
	if( id == $("#tb_PM_Rate_OL tbody>tr").eq(0).find('td:nth-child(1) label').text()){
		chk_type = true;
	}else{
		chk_type = false;
	}
	
	// clear old data
	$("#file_ref_OL").val("")
	$("#fileuploads_PMRateText1_OL").val("");
	$("#validate_rate1_OL").css("display","inline-block");
	
	/*var rate_cat = "26,27,41,42";*/
	/*rate_cat[0] = 1;
	rate_cat[1] = 2;*/
	var cov_code_cat = "";
	if(cov_cat != ""){
		cov_code_cat = cov_cat
	}
	
	var json_data = {
			"method" : "GetlookupRM_Rate",
			"cov_code" : id,
			"cov_cat" : cov_code_cat
	}
	$.ajax({
		url: 'ProductBasePlanOL_GetData_Servlet',
		type: "POST",
		data: json_data,
		async: false,
		success: function (response) {
			// pm Rate
			if(response.Pm_Rate[0]){
				// placeholder ของไฟล์ที่เลือกมา
				var obj = response.Pm_Rate[0];
				var layout_name = obj.pattern;
				var product_code_main = $("#pass_Insurance_product_ol").val();
				
				var cov_type1 = response.type[0].type[0]
				var cov_type2 = response.type[1].type[0]
				var layout1 = layout_name+cov_type1+"_"+id+"_"+product_code_main;
				var layout2 = layout_name+cov_type2+"_"+id+"_"+product_code_main;
				/*check duplicate PMrate input new file*/
				var define_layout = $("#"+textVal).val()
				$("#tb_PM_Rate_OL tbody>tr").each(function(){
					var on_rateCat = $(this).find('td:nth-child(4) #rate_cat_id_base_PM').val()
					if(on_rateCat == "26" && define_layout != $(this).find('td:nth-child(4) input[type="text"]').val()){
						layout1 = "";
					}else if(on_rateCat == "41" && define_layout != $(this).find('td:nth-child(4) input[type="text"]').val()){
						layout2 = "";
					}
				})
				
				var layout = ""
				if(layout1 != "" && layout2 != ""){
					layout = layout1+".txt" + " หรือ " + layout2+".txt";
				}else if(layout1 != "" && layout2 == ""){
					layout = layout1+".txt" 
				}else if(layout1 == "" && layout2 != ""){
					layout = layout2+".txt" 
				}
				
				$("#fileuploads_PMRateText1_OL").attr("placeholder",layout);
				
				$("#form_input_file_OL #rate_cat_pm_OL").val(obj.rate_cat_id);
				$("#form_input_file_OL #rate_layout_pm_OL").val(obj.rate_layout_id);
				$("#form_input_file_OL #sub_cat_pm_OL").val(obj.sub_cat_id);
				$("#form_input_file_OL #layout_pm_OL").val(layout_name);
				$("#form_input_file_OL #layout_pmRate_1_OL").val(layout1);
				$("#form_input_file_OL #layout_pmRate_2_OL").val(layout2);
				
			
				if(chk_type){
					var uploadfile = "selectFileRate_OL(1,'"+id_row+"','"+layout1+"','"+layout2+"','','"+spanfile+"','"+spanDownload+"')";
				}else{
					var uploadfile = "selectFileRate_OL(11,'"+id_row+"','"+layout1+"','"+layout2+"','','"+spanfile+"','"+spanDownload+"')";
				}
			
				$("#fileuploads_PMRate1_OL").attr("onchange",uploadfile);
				
				//ดึงข้อมูล base plan ที่ มาลง pm rate
				var row = "";
				$("#tb_input_modal_pmRate_OL tbody>tr*").remove();
				var flag_textVal = false;
				for(i in response.Pm_Rate){
					var obj = response.Pm_Rate[i];
					row = "<tr>"+
							"<td class='text-center'>" 
							if($("#"+textVal).val() == obj.file_name){
								flag_textVal = true;
								$("#select_input_pmRateOriginal_OL").prop("checked",true)
								$("#select_input_pmRate_OL").prop("checked",false)
								$("#tb_input_modal_pmRate_OL").removeClass('disabledbutton')
								row += "<input type='radio' name='select_fileOriginal' value='"+obj.file_id+"' checked/>"
							}else if(flag_textVal == false){
								$("#select_input_pmRate_OL").prop("checked",true)
								$("#select_input_pmRateOriginal_OL").prop("checked",false)
								$("#tb_input_modal_pmRate_OL").addClass('disabledbutton')
								$("#select_input_pmRate_OL").click()
								$("#spanRate1_OL").attr("disabled",false)
								row += "<input type='radio' name='select_fileOriginal' value='"+obj.file_id+"'/>"
							}else{
								row += "<input type='radio' name='select_fileOriginal' value='"+obj.file_id+"'/>"
							}
						row +=	"<input type='hidden' id='hd_rateCatId_OL"+i+"' value='"+obj.rate_cat_id+"'/>"+
								"<input type='hidden' id='hd_fileId_OL"+i+"' value='"+obj.file_id+"'/>"+
								"<input type='hidden' id='hd_fileLayout_OL"+i+"' value='"+obj.rate_layout_id+"'/>"+
								"<input type='hidden' id='hd_fileRef_OL"+i+"' value='"+obj.ref+"'/>"+
							"</td>"+
							"<td class='text-center'><a id='span_PM_Rateopen_oldFile_OL_"+i+"' class='active_grey'><span data-id='' class='glyphicon glyphicon-eye-open activecolorblue'></span></a></td>"+
							"<td class='text-left'><label>"+obj.file_name+"</label></td>"+
						"</tr>"
						$("#tb_input_modal_pmRate_OL tbody").append(row);
						$("#span_PM_Rateopen_oldFile_OL_"+i).attr("onclick", "openFileTextProduct_OL('"+obj.file_name+"', '"+obj.ref+"',41,'tb_input_fileSee_modal_pmRate_OL', 'modal_input_fileSee_PMRate_OL')");
						
				}
			}else{
				$("#fileuploads_PMRateText1_OL").attr("placeholder","");
				$("#tb_input_modal_pmRate_OL tbody>tr*").remove();
			}
			var saveFile = "choose_file_pmRate_OL('"+textVal+"','"+validate+"','"+spanfile+"','"+spanDownload+"');"
			$("#bt_contirm_saveFilePMRate_OL").attr("onclick",saveFile)
		}
	});
	console.log("data",json_data)
	
	
	/*check duplicate PMrate*/
	var select_rateCat = $("#"+textVal).parent().parent().find('#rate_cat_id_base_PM').val()
	$("#tb_PM_Rate_OL tbody>tr").each(function(){
		var on_rateCat = $(this).find('td:nth-child(4) #rate_cat_id_base_PM').val()
		$("#tb_input_modal_pmRate_OL tbody>tr").each(function(i){
			var rateCat = $(this).find('td:nth-child(1) #hd_rateCatId_OL'+i).val()
			if(rateCat == on_rateCat && select_rateCat != rateCat){
				$(this).find('td:nth-child(1) input[type="radio"]').attr('disabled', true);
			}
		})
	})
	
}

function numberKey_min_OL(obj,chk_val){
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
function numberKey_max_OL(obj,chk_val){
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
function numberKey_maximum_OL(obj,chk_val){
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

function change_type_OL(type){
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

function startIssue_term_OL(e){
	$("#start_age_insure_ol").val($(e).val());
	$("#hd_min_issue_age1").parent().find('input[type="number"]').val($(e).val())
}
function change_typeTerm1_OL(e){
	var type = $(e).parent().find('input[type="hidden"]').val();
	var type_selected = $(e).val();
	
	if( type_selected != type){
		$(e).val(type).attr("selected",true)
		var type_choose = $(e).find('option:selected').text();
		message = "หน่วยต้องเป็น "+type_choose + " เท่านั้น"
		alertError(message);
	}else{
		$("#start_age_insure_unit_ol option[value='"+$(e).val()+"']").attr("selected",true)
	}
}
function change_typeTerm1_term_OL(e){
	var type = $("#tb_ageRange_OL .font-term-purple").parent().parent().find('td:nth-child(5) input[type="hidden"]').val();
	
	//var type = $(e).parent().find('input[type="hidden"]').val();
	var type_selected = $(e).val();
	
	if( type_selected != type){
		$(e).val(type).attr("selected",true)
		var type_choose = $(e).find('option:selected').text();
		message = "หน่วยต้องเป็น "+type_choose + " เท่านั้น"
		alertError(message);
	}else{
		$("#start_age_insure_unit_ol option[value='"+$(e).val()+"']").attr("selected",true)
	}
}
function endIssue_term_OL(e){
	$("#end_age_insure_ol").val($(e).val());
	$("#hd_max_issue_age1").parent().find('input[type="number"]').val($(e).val())
}
function change_typeTerm2_OL(e){
	
	var type = $(e).parent().find('input[type="hidden"]').val();
	var type_selected = $(e).val();
	
	if( type_selected != type){
		$(e).val(type).attr("selected",true)
		var type_choose = $(e).find('option:selected').text();
		message = "หน่วยต้องเป็น "+type_choose + " เท่านั้น"
		alertError(message);
	}else{
		$("#end_age_insure_unit_ol option[value='"+$(e).val()+"']").attr("selected",true)
	}
}
function change_typeTerm2_term_OL(e){
	var type = $("#tb_ageRange_OL .font-term-purple").parent().parent().find('td:nth-child(7) input[type="hidden"]').val();
	
	//var type = $(e).parent().find('input[type="hidden"]').val();
	var type_selected = $(e).val();
	
	if( type_selected != type){
		$(e).val(type).attr("selected",true)
		var type_choose = $(e).find('option:selected').text();
		message = "หน่วยต้องเป็น "+type_choose + " เท่านั้น"
		alertError(message);
	}else{
		$("#end_age_insure_unit_ol option[value='"+$(e).val()+"']").attr("selected",true)
	}
}
function maxInsure_term_OL(e){
	$("#max_age_insure_ol").val($(e).val());
	$("#hd_max_insure_age1").parent().find('input[type="number"]').val($(e).val())
}
function change_typeTerm3_OL(e){
	var type_selected = $(e).val();
	if( type_selected != "YEAR"){
		$(e).val("YEAR").attr("selected",true)
		message = "หน่วยต้องเป็น ปี เท่านั้น"
		alertError(message);
	}
}

function open_modal_buyWith_key_OL(key){
	
	var modal = "modal_buyWith"+key+"_OL"
	$("#"+modal).modal('show');
	$("#rdChooseKey"+key+"_OL").prop("checked", true);
	$("#tbl_chooseBuyWith"+key+"_OL>tbody>tr i").removeClass("glyphicon-ok").addClass("glyphicon-edit");
	
	var arr_tbBuyWith = [];
	$("#tbl_buyWith"+key+"_OL tbody>tr").each(function(){
		var prd_code = $(this).find('td:nth-child(2) label').text();
		$("#tbl_chooseBuyWith"+key+"_OL tbody>tr").each(function(){
			if( prd_code == $(this).find('td:nth-child(1) input[type="hidden"]').val()){
				$(this).find('td:nth-child(1) i').removeClass('glyphicon-edit').addClass('glyphicon-ok')
			}
		})
	})
}

/*View List Product*/
function viewListProduct_OL(type){
	var table = "";
	var prd_code_sel = "";
	if(type == 1){
		table = "tbl_health_insurance_OL";
		$("#bt_confirmProduct_OL").attr("onclick","bt_confirmProduct_OL('MED_SUM')")
		prd_code_sel = $("#hd_accumRuleExclude_MEDSUM").val()
	}else if(type == 2){
		table = "tbl_old_insurance_OL";
		$("#bt_confirmProduct_OL").attr("onclick","bt_confirmProduct_OL('EXIST_POLICY')")
		prd_code_sel = $("#hd_accumRuleExclude_EXISTPOLICY").val()
	}else if(type == 3){
		table = "tbl_UW_consider_OL";
		$("#bt_confirmProduct_OL").attr("onclick","bt_confirmProduct_OL('INSURED_SUM')")
		prd_code_sel = $("#hd_accumRuleExclude_INSURESUM").val()
	}else if(type == 4){
		table = "tbl_insuranceIssue_OL";
		$("#bt_confirmProduct_OL").attr("onclick","bt_confirmProduct_OL('POLICY')")
		prd_code_sel = $("#hd_accumRuleExclude_POLICY").val()
	}else if(type == 5){
		table = "tbl_insuranceMax_OL";
		$("#bt_confirmProduct_OL").attr("onclick","bt_confirmProduct_OL('SA')")
		prd_code_sel = $("#hd_accumRuleExclude_SA").val()
	}
	var prd_code_arr		= prd_code_sel.split(",");
	
	var criteria = new Array();
	$("#"+table).find("tbody>tr").each(function(){
		obj = {};
		obj["main_contract1"] = $(this).find('td:nth-child(2) option:selected').val()
		if($(this).find('td:nth-child(3) option:selected').val() == 0){
			obj["main_contract2"] = ""
		}else{
			obj["main_contract2"] = $(this).find('td:nth-child(3) option:selected').val()
		}
		if($(this).find('td:nth-child(4) option:selected').val() == 0){
			obj["main_contract3"] = "";
		}else{
			obj["main_contract3"] = $(this).find('td:nth-child(4) option:selected').val()
		}
		if($(this).find('td:nth-child(5) option:selected').val() == "NONE"){
			obj["underwrting_type"] = "";
		}else{
			obj["underwrting_type"] = $(this).find('td:nth-child(5) option:selected').val();
		}
		if($(this).find('td:nth-child(6) option:selected').val() == "NONE"){
			obj["senior"] = "";
		}else{
			obj["senior"] = $(this).find('td:nth-child(6) option:selected').val();
		}
		if($(this).find('td:nth-child(7) option:selected').val() == "NONE"){
			obj["sale_chanel"] = "";
		}else{
			obj["sale_chanel"] = String($(this).find('td:nth-child(7) option:selected').data('id'));
		}
		if($(this).find('td:nth-child(8) option:selected').val() == "NONE"){
			obj["partner"] = "";
		}else{
			obj["partner"] = String($(this).find('td:nth-child(8) option:selected').data('id'));
		}
		criteria.push(obj)
	})
	
	var data_json = {
			"method" 			: "GetViewListProduct",
			"prd_code"			: $("#pass_Insurance_product_ol").val(),
			"criteria"			: JSON.stringify(criteria)
	}
	$.ajax({
		type: "POST",
        url : "ProductBasePlanOL_GetData_Servlet",
        data: data_json,    
        success : function(response) {	
        	
        	$("#tb_viewListPDLeft_OL tbody>tr*").remove();
        	for(i in response.table_product){
        		var obj = response.table_product[i];
        		var row = 	"<tr id='tr_viewListPDLeft_OL"+i+"'>"+
								"<td class='text-center'><input id='chk_viewListPDLeft_OL"+i+"' type='checkbox' value=''></td>"+
								"<td><label for='chk_viewListPDLeft_OL"+i+"'>"+obj.prd_code+"</label></td>"+
								"<td>"+obj.nameTH+"</td>"+
							"</tr>";
        		$("#tb_viewListPDLeft_OL tbody").append(row)
        	}
        	
        	$("#tb_viewListPDRight_OL tbody>tr*").remove();
        	if(prd_code_arr.length > 0){
        		for(i = 0 ; i < prd_code_arr.length ; i++){
        			$("#tb_viewListPDLeft_OL tbody>tr").each(function(){
        				if($(this).find('td:nth-child(2) label').text() == prd_code_arr[i]){
        					$(this).find('td:nth-child(1) input[type="checkbox"]').prop("checked",true)
        					$('#RightMove').click()
        				}
        			})
        		}
        	}
        	
        	/*for(i in response.table_unwAccumRuleExclude){
        		var obj = response.table_unwAccumRuleExclude[i];
        			if(type == 1 && obj.accum_type == "MED_SUM"){
        				var row = "<tr id='tr_viewListPDRight_OL"+i+"'>"+
								"<td class='text-center'><input type='checkbox' id='chk_viewListPDRight_OL"+i+"'</td>"+
								"<td><label for='chk_viewListPDRight_OL"+i+"'>"+obj.prd_code+"</label></td>"+
								"<td>"+obj.nameTH+"</td>"+
							"</tr>"
						$("#tb_viewListPDRight_OL tbody").append(row)
        			}else if(type == 2 && obj.accum_type == "EXIST_POLICY"){
        				var row = "<tr id='tr_viewListPDRight_OL"+i+"'>"+
								"<td class='text-center'><input type='checkbox' id='chk_viewListPDRight_OL"+i+"'</td>"+
								"<td><label for='chk_viewListPDRight_OL"+i+"'>"+obj.prd_code+"</label></td>"+
								"<td>"+obj.nameTH+"</td>"+
							"</tr>"
						$("#tb_viewListPDRight_OL tbody").append(row)
        			}else if(type == 3 && obj.accum_type == "INSURED_SUM"){
        				var row = "<tr id='tr_viewListPDRight_OL"+i+"'>"+
								"<td class='text-center'><input type='checkbox' id='chk_viewListPDRight_OL"+i+"'</td>"+
								"<td><label for='chk_viewListPDRight_OL"+i+"'>"+obj.prd_code+"</label></td>"+
								"<td>"+obj.nameTH+"</td>"+
							"</tr>"
						$("#tb_viewListPDRight_OL tbody").append(row)
        			}else if(type == 4 && obj.accum_type == "POLICY"){
        				var row = "<tr id='tr_viewListPDRight_OL"+i+"'>"+
								"<td class='text-center'><input type='checkbox' id='chk_viewListPDRight_OL"+i+"'</td>"+
								"<td><label for='chk_viewListPDRight_OL"+i+"'>"+obj.prd_code+"</label></td>"+
								"<td>"+obj.nameTH+"</td>"+
						"</tr>"
						$("#tb_viewListPDRight_OL tbody").append(row)
        			}else if(type == 5 && obj.accum_type == "SA"){
        				var row = "<tr id='tr_viewListPDRight_OL"+i+"'>"+
								"<td class='text-center'><input type='checkbox' id='chk_viewListPDRight_OL"+i+"'</td>"+
								"<td><label for='chk_viewListPDRight_OL"+i+"'>"+obj.prd_code+"</label></td>"+
								"<td>"+obj.nameTH+"</td>"+
						"</tr>"
						$("#tb_viewListPDRight_OL tbody").append(row)
					}
        	}*/
        	
        },
        error : function(response) {	
        	console.log("get view list product error.")
        }
	});
	console.log("data",data_json)
}

function selectFileRate_OL(type,select_file,file_format,file_format2,dd_opt,cv_btn,btn_download){	
	var tbl_name = "";
	var tbl_col = "";
	var dd_opt = dd_opt;
	var cv_button = cv_btn;
	var select_file_name = "";
	var validateFile = "";
	var prd_code = $("#pass_Insurance_product_ol").val();
	var cov_code = "";
	
	/*file*/
	var file_id = 0;
	var file_type_id = 3;
	var file_path = "";
	var file_pattern = "";
	var user_code = "0000000";	

	/* แบบประกันหลัก - PMRate BasePlan*/
	if(type == 1){
		
		tbl_name = "tb_input_fileSee_modal_pmRate_OL";
		tblAuto_name = "tb_input_file_modal_pmRate_OL"; // ใส่ไฟล์
		modal_name = "modal_input_file_PMRate_OL";  //ใส่ไฟล์
		modal_cv = "modal_input_fileSee_PMRate_OL";
		tbl_col = 41;		
		file_button1 = "bt_submit_pmRate_OL";
		file_button2 = "bt_cancel_pmRate_OL";
		
		select_file_name = select_file.replace("fileuploads_PMRate","");
		select_file_name = select_file_name.replace("_OL","");
		selectFile = "fileuploads_PMRate"+select_file_name+"_OL";
		textFile = "fileuploads_PMRateText"+select_file_name+"_OL";
		cov_code = $("#tb_PM_Rate_OL tbody>tr").eq(0).find('td:nth-child(1) label').text();
		validateFile = "validate_rate"+select_file_name+"_OL";
//		btn_download = "span_PM_Ratedownload_"+select_file_name;
		
		$("#file_ref_OL").val("")
		var format_checker = file_format+".txt"
		var formater 	   = $("#fileuploads_PMRate1_OL").val().replace(/\\/g, '/').replace(/.*\//, '')
		//console.log("rate",$("#fileuploads_PMRate1_OL").val().replace(/\\/g, '/').replace(/.*\//, ''))
		//console.log("file_format",format_checker)
		
		if(formater == format_checker){
			rate_cat_id = "26"
		}else{
			rate_cat_id = "41"
		}
		//rate_cat_id = $("#rate_cat_pm_OL").val();
		$("#rate_cat_pm_OL").val(rate_cat_id);
		
		sub_cat_id = $("#form_input_file_OL #sub_cat_pm_OL").val();
	}
	/* แบบประกันหลัก NAR BasePlan*/
	if(type == 2){
		
		tbl_name = "tb_input_fileSee_modal_NAR_OL";
		tblAuto_name = "tb_input_file_modal_NAR_OL"; // ใส่ไฟล์
		modal_name = "modal_input_file_NAR_OL";  //ใส่ไฟล์
		modal_cv = "modal_input_fileSee_NAR_OL";
		tbl_col = 63;		
		file_button1 = "bt_submit_BaseNAR_OL";
		file_button2 = "bt_cancel_BaseNAR_OL";
		
		select_file_name = select_file.replace("fileuploads_NAR","");
		select_file_name = select_file_name.replace("_OL","");
		selectFile = "fileuploads_NAR"+select_file_name+"_OL";
		textFile = "fileuploads_NARText"+select_file_name+"_OL";
		cov_code = $("#tb_PM_Rate_OL tbody>tr").eq(0).find('td:nth-child(1) label').text();
		validateFile = "validate_NAR"+select_file_name+"_OL";
//		btn_download = "span_PM_RatedownloadNAR_"+select_file_name;
		rate_cat_id = $("#rate_cat_id_base_NAR_OL").val();
		sub_cat_id = $("#sub_cat_NAR_OL").val();
	}
	/* แบบประกันเสริม - PMRate Rider */
	if(type == 11){
		
		tbl_name = "tb_input_fileSee_modal_pmRate_OL";
		tblAuto_name = "tb_input_file_modal_pmRate_OL"; // ใส่ไฟล์
		modal_name = "modal_input_file_PMRate_OL";  //ใส่ไฟล์
		modal_cv = "modal_input_fileSee_PMRate_OL";
		tbl_col = 41;		
		file_button1 = "bt_submit_pmRate_OL";
		file_button2 = "bt_cancel_pmRate_OL";
		
		select_file_name = select_file.replace("fileuploads_PMRate","");
		select_file_name = select_file_name.replace("_OL","");
		selectFile = "fileuploads_PMRate"+select_file_name+"_OL";
		textFile = "fileuploads_PMRateText"+select_file_name+"_OL";
//		btn_download = "span_Additional_contractdownload_"+select_file_name;
		validateFile = "validate_rate"+select_file_name+"_OL";
		
		rate_cat_id = $("#rate_cat_pm_OL").val();
		sub_cat_id = $("#form_input_file_OL #sub_cat_pm_OL").val();
	}
	/* แบบประกันเสริม - NAR Rider */
	if(type == 22){
	
		tbl_name = "tb_input_fileSee_modal_NAR_OL";
		tblAuto_name = "tb_input_file_modal_NAR_OL"; // ใส่ไฟล์
		modal_name = "modal_input_file_NAR_OL";  //ใส่ไฟล์
		modal_cv = "modal_input_fileSee_NAR_OL";
		tbl_col = 63;		
		file_button1 = "bt_submit_BaseNAR_OL";
		file_button2 = "bt_cancel_BaseNAR_OL";
		
		select_file_name = select_file.replace("ip_fileuploads_OL_AdditionalNAR_contract_Show_","");
		select_file_name = select_file_name.replace("_OL","");
		selectFile = "ip_fileuploads_OL_AdditionalNAR_contract_Show_"+select_file_name;
		textFile = "ip_fileuploads_AdditionalNAR_contract_"+select_file_name;
		if(select_file_name.includes("_")){
			id_parent = $("#tb_Additional_contract_OL tbody").find('#tr_Additional_contract_'+select_file_name).data('group');
			cov_code = $("#tb_Additional_contract_OL tbody").find('#tr_Additional_contract_'+id_parent).find('td:nth-child(2) label').text();
		}else{
			var eq = Number(select_file_name) - 1
			cov_code = $("#tr_Additional_contract_"+select_file_name).find('td:nth-child(2) label').text();
		}
		validateFile = "validate_AdditionalNAR_OL_"+select_file_name;
//		btn_download = "span_Additional_contractdownload_"+select_file_name;
		rate_cat_id = $("#rate_cat_id_rider_NAR_OL"+select_file_name).val();
		sub_cat_id = $("#sub_cat_NAR_OL").val();
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
		
		//file_pattern = file_name.replace(cov_code, "{ประเภท}");
		//file_pattern = file_pattern.replace(prd_code, "{Code}");
		
		var pattern_file = $("#layout_pm_OL").val()
		file_pattern = pattern_file+"{ประเภท}"+"_"+"{Code}"+".txt";
		
	}else if(type == 11){
		var flag_chk = false;
		$("#tb_Additional_contract_OL tbody>tr").each(function(){
			var row_id = $(this).attr('id');
				row_id = row_id.replace("tr_Additional_contract_","")
			var cov_code = $(this).find('td:nth-child(3) #cov_code_rider_'+row_id).val();
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
		if(check_filenameNAR_OL(selectFile, file_format, file_format2) == false){
			//$("#"+validateFile).css("display", "inline-block");
			$("#"+textFile).val("");
			$("#"+selectFile).val("");
			$('#'+cv_button).prop('disabled', true);		
			$('#'+cv_button+">span").removeClass("activecolorblue").addClass("activecolorgray");
		}else{
			//openFile(event,selectFile,tbl_name,tbl_col);
			openFile_OL(event,selectFile,tblAuto_name,tbl_col);
			$("#base64_fileTXT_OL").val("");
			$("#"+modal_name).modal("show");	
				
			convertToBase64_OL(selectFile, file_type_id)
			
			$("#"+file_button1).click(function() {
				$("#modal_waiting").modal('show');
				 var base64 = $("#base64_fileTXT_OL").val();
				 if(base64 != ""){
					 var dateTime = getCurrentDate();
		    		   var file_name_update = "3_"+dateTime+".txt"
			    	   datajson = {				        	
					    		"method" : "uploadFile_txt",
					    		"passInsurance" : $("#pass_Insurance_product_ol").val(),
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
					 	    	$("#file_ref_OL").val(obj_ref)
					 	    	
					 	    	/*save file*/				
								set_Filevalue_OL(type,select_file_name,file_id,file_type_id,file_name,obj_ref,file_pattern,rate_cat_id,sub_cat_id,user_code,cv_button);		
								/*end save file*/
					 	    	$("#modal_waiting").modal('hide');
					 	    	$("body").addClass("body_nopadding");
					 	    	$("#"+btn_download+">span").attr("onclick", "openFile_target('"+file_name+"','"+obj_ref+"','txt_download')");
							 	$('#'+cv_button+">span").attr("onclick", "openFileTextProduct_OL('"+file_name+"','"+obj_ref+"',"+tbl_col+",'"+tbl_name+"', '"+modal_cv+"')");
					 	    	
					 	    }
					    })
		    		 
				 }
				
				
				$("#"+textFile).val(file_name);
				$("#"+validateFile).css("display", "none");				
				$('#'+cv_button+">span").removeClass("activecolorgray").addClass("activecolorblue");
				/*$('#'+cv_button).attr("onclick","open_modalCV("+type+",this.id)");*/
				$("#"+btn_download+">span").removeClass("activecolorgray").addClass("activecolorblue");
				
				/*$('#'+cv_button).click(function(){
					$("#"+modal_cv).modal('show');
				})	*/			
			});
			
			$("#"+file_button2).click(function() {
				$("#"+textFile).val("");				
				$('#'+cv_button).prop('disabled', true);
				$('#'+cv_button+">span").removeClass("activecolorblue").addClass("activecolorgray");
				$("#"+btn_download+">span").removeClass("activecolorblue").addClass("activecolorgray");
			});
		}	
	}else{	
		if(check_filename_OL(selectFile, file_format, "") == false){
			$("#"+validateFile).css("display", "inline-block");
			$("#"+textFile).val("");
			$("#"+selectFile).val("");
			$('#'+cv_button).prop('disabled', true);		
			$('#'+cv_button+">span").removeClass("activecolorblue").addClass("activecolorgray");
		}else{
			//openFile(event,selectFile,tbl_name,tbl_col);
			openFile_OL(event,selectFile,tblAuto_name,tbl_col);
			$("#base64_fileTXT_OL").val("");
			$("#"+modal_name).modal("show");	
			
			convertToBase64_OL(selectFile, file_type_id)
			
			$("#"+file_button1).click(function() {
				$("#modal_waiting").modal('show');
				var base64 = $("#base64_fileTXT_OL").val();
				 if(base64 != ""){
					 var dateTime = getCurrentDate();
		    		   var file_name_update = "3_"+dateTime+".txt"
			    	   datajson = {				        	
					    		"method" : "uploadFile_txt",
					    		"passInsurance" : $("#pass_Insurance_product_ol").val(),
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
					 	    	$("#file_ref_OL").val(obj_ref)
					 	    	console.log(obj_ref)
					 	    	
					 	    	/*save file*/				
								set_Filevalue_OL(type,select_file_name,file_id,file_type_id,file_name,obj_ref,file_pattern,rate_cat_id,sub_cat_id,user_code,cv_button);		
								/*end save file*/
								
					 	    	$("#modal_waiting").modal('hide');
					 	    	$("body").addClass("body_nopadding");
					 	    	$("#"+btn_download+">span").attr("onclick", "openFile_target('"+file_name+"','"+obj_ref+"','txt_download')");
							 	$('#'+cv_button+">span").attr("onclick", "openFileTextProduct_OL('"+file_name+"','"+obj_ref+"',"+tbl_col+",'"+tbl_name+"', '"+modal_cv+"')");
					 	    	
							 	
					 	    }
					    })
		    		 
				 }
				 
				
				$("#"+textFile).val(file_name);
				$("#"+validateFile).css("display", "none");				
				$('#'+cv_button+">span").removeClass("activecolorgray").addClass("activecolorblue");
				/*$('#'+cv_button).attr("onclick","open_modalCV("+type+",this.id)");*/
				$("#"+btn_download+">span").removeClass("activecolorgray").addClass("activecolorblue");
				
				
				/*$('#'+cv_button).click(function(){
					$("#"+modal_cv).modal('show');
				})
				*/
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
var openFile_OL = function(event,fileID,tableName,tableCol) {	
	
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
    	  if(tableCol == 41){
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
    	  }else if(tableCol == 63){
      		   col1 = textRow[i].substr(0,4);
    		   col2 = textRow[i].substr(4,1);
    		   col3 = textRow[i].substr(5,2);
    		   col4 = textRow[i].substr(7,2);
    		   col5 = textRow[i].substr(9,6);
    		   col6 = textRow[i].substr(15,1);
    		  
    		   tableRow = "<tr>"+
    			"<td class='text-center'>"+col1+"</td>"+
    			"<td class='text-center'>"+col2+"</td>"+
    			"<td class='text-center'>"+col3+"</td>"+
    			"<td class='text-center'>"+col4+"</td>"+
    			"<td class='text-center'>"+col5+"</td>"+
    			"<td class='text-center'>"+col6+"</td>"+
    			"</tr>";   
    		   $("#"+tableName+">tbody").append(tableRow);	
    		  
          }
    	
      }
      /*if ( $.fn.dataTable.isDataTable( "#"+tableName ) ) {
    	  var table = $("#"+tableName).DataTable();
    	  table.destroy();
      }
      $("#"+tableName).DataTable({
	    	"paging": false,
	        "ordering": false,
	        "info": false,
	        "language": {
	    	    "search": "ค้นหา:",
	    	    "zeroRecords": " "	
	    }
	  });*/
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

function check_filename_OL(fileID, fileFormat){
	var filename = document.getElementById(fileID).files[0].name.split('.');			
		if(filename[0] != fileFormat){
	    	message = "กรุณานำเข้าไฟล์ที่ถูกต้อง";
	    	$("#fileId_pm_OL").val("")
	    	$("#rate_layout_pm_OL").val("")
			alertError(message);
			return false;
	 }	
}
function check_filenameNAR_OL(fileID, fileFormat , fileFormat2){
	var filename = document.getElementById(fileID).files[0].name.split('.');			
		if(filename[0] != fileFormat && filename[0] != fileFormat2){
	    	message = "กรุณานำเข้าไฟล์ที่ถูกต้อง";
	    	$("#fileId_base_NAR_OL").val("")
	    	$("#rate_layout_id_base_NAR_OL").val("")
			alertError(message);
			return false;
	 }	
}

function set_Filevalue_OL(type,id,file_id,file_type_id,file_name,file_path,file_pattern,rate_cat_id,sub_cat_id,user_code,cv_button){
	
	if(type == 1 || type == 11){
		var input_id = "fileuploads_PMRateText1_OL"
		var input_fileId = "fileId_pm_OL"
		var input_layoutId = "rate_layout_pm_OL"
	}else if(type == 2){
		var input_id = "fileuploads_NARText1_OL"
		var input_fileId = "fileId_base_NAR_OL"
		var input_layoutId = "rate_layout_id_base_NAR_OL"
	}else if(type == 22){
		var input_id = "ip_fileuploads_AdditionalNAR_contract_"+id
		var input_fileId = "fileId_rider_NAR_OL"+id
		var input_layoutId = "rate_layout_id_rider_NAR_OL"+id
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
	    		$("#rate_layout_pm_OL").val(response.rate_layout_id);
	    		$("#fileId_pm_OL").val(response.file_id);
	    	}else if(type == 2){
	    		$("#fileId_base_NAR_OL").val(response.file_id);
	    		$("#rate_layout_id_base_NAR_OL").val(response.rate_layout_id);
	    	}else if(type == 22){
	    		$("#fileId_rider_NAR_OL"+id).val(response.file_id);
	    		$("#rate_layout_id_rider_NAR_OL"+id).val(response.rate_layout_id);
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

function convertToBase64_OL(file_id,type_file){
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
            	$("#base64_fileTXT_OL").val(base64)
            }
           
        };
        // Convert data to base64
        fileReader.readAsDataURL(fileToLoad);
    }
}
function openFileTextProduct_OL(file_name,file_ref,tableCol,tb_name,modal_name){

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
		  
		   $("#download_tb_input_fileSee_modal_pmRate_OL").attr("onclick", "openFile_target('"+file_name+"','"+file_ref+"','txt_download')");
			
		   
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
    		   
    		   $("#download_tb_input_fileSee_modal_NAR_OL").attr("onclick", "openFile_target('"+file_name+"','"+file_ref+"','txt_download')");
     	      
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
          }
    	  
    	 
      }
    
     
      $("#"+tableName+">tbody").append(tableRow);	    	    	  	
     
      /*if ($.fn.dataTable.isDataTable( "#"+tableName ) ) {   	  
    		 	
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
/*****************KHWAN Fix*****************/
/****************1. Basic Info************************/

/*การกำหนดบันทึกสลักหลังและพิกัดอายุ*/
function addRowEndorse_OL(id, cov_code, prd_rider_code){
	var unit1 = $("#tb_ageRange_OL tbody>tr").eq(0).find('td:nth-child(5) select').html();
	var unit2 = $("#tb_ageRange_OL tbody>tr").eq(0).find('td:nth-child(7) select').html();
	var unit3 = $("#tb_ageRange_OL tbody>tr").eq(0).find('td:nth-child(9) select').html();
	
	//Khwan fix
	var rowAge = 0;
	var num_child = $("#tb_ageRange_OL tbody>tr[data-parent='"+id+"']").length;
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
			"<a class='open-AddEndorse-OL' data-toggle='modal' data-parent='"+id+"' data-id='"+numberImgOK_age+"' data-code='"+cov_code+"'><button class='btn btn-default btn-primary' type='button' id='btn_endorse_OL"+numberImgOK_age+"'>...</button></a>"+ 									
	  "</div></td>"+
	  "<td class='text-center verticalCenter borderBlack font-term-green font-bold'>"+
	  	"<input type='hidden' id='cov_cat_id'>"+
	  "</td>"+
	  "<td class='text-center verticalCenter borderBlack'>"+
	  	"<i class='glyphicon glyphicon-minus icon_active icon-blue-circle' data-id='"+numberImgOK_age+"' id='addrow_endorse"+numberImgOK_age+"' onclick='delete_rowEndorse_OL(this.id);'></i>"+
	  "</td>"+											
	  "<td class='text-center verticalCenter borderBlack'>"+
	  	"<input type='hidden' id='hd_min_issue_age"+numberImgOK_age+"'>"+
	  	"<input type='number' class='form-control margin-padding0 text-center width40px' value='0' min='1' onkeyup='numberKey(this);' onkeydown='numberKey(this);' disabled>"+
	  "</td>"+
	  "<td class='text-center verticalCenter borderBlack'>"+
	  	"<input type='hidden' id='start_insure_ageUnit"+numberImgOK_age+"' >"+
		"<select class='form-control width100px' id='ageRange_from_unit"+numberImgOK_age+"_ol' disabled>"+unit1+"</select>"+
	  "</td>"+
	  "<td class='text-center verticalCenter borderBlack'>"+
	  	"<input type='hidden' id='hd_max_issue_age"+numberImgOK_age+"' >"+
	  	"<input type='number' class='form-control margin-padding0 text-center width40px' value='0' min='1' onkeyup='numberKey(this);' onkeydown='numberKey(this);' disabled>"+
	  "</td>"+
	  "<td class='text-center verticalCenter borderBlack'>"+	
	  	"<input type='hidden' id='end_insure_ageUnit"+numberImgOK_age+"' >"+
		"<select class='form-control width100px' id='ageRange_to_unit"+numberImgOK_age+"_cl' disabled>"+unit2+"</select>"+
	  "</td>"+
	  "<td class='text-center verticalCenter borderBlack'>"+
	  	"<input type='hidden' id='hd_max_insure_age"+numberImgOK_age+"' >"+
		"<input type='number' class='form-control margin-padding0 text-center width40px' value='0' min='1' onkeyup='numberKey(this);' onkeydown='numberKey(this);' disabled>"+
	  "</td>"+
	  "<td class='text-center verticalCenter borderBlack'>"+												
		"<select class='form-control width100px' id='ageRange_max_unit"+numberImgOK_age+"_ol' disabled>"+unit3+"</select>"+
	  "</td>"+																			
	  "</tr>";
	
	var numEndorse = $("#tb_ageRange_OL>tbody>tr[data-parent='"+id+"']").length;

	if(numEndorse > 0){
		$(row_age).insertAfter("#tb_ageRange_OL>tbody>tr[data-parent='"+id+"']:last");
	}else{
		$(row_age).insertAfter("#tb_ageRange_OL #tr_ageRange_CV"+id);
	}
		
}

function delete_rowEndorse_OL(id){
	var data_parent = $("#"+id).parent().parent().attr("data-parent");
	var this_id = $("#"+id).attr("id");
		this_id = this_id.replace("addrow_endorse","");
		
	var endorse_code = $("#tb_ageRange_OL #div_endorse_name"+this_id).text();
	
	$("#"+id).parent().parent().remove();
	
	
	/**********************Khwan delete other tabs 20/11/2019****************************/
	
	//การคำนวณเบี้ยประกัน
	$("#tb_Calculate_insurance_OL tbody>tr").each(function(){
		var code = $(this).find("td:nth-child(1) label").text();
		if(endorse_code == code){
			console.log("endorse code>> "+endorse_code);
			console.log("this code>> "+endorse_code);
			$(this).remove();
		}
	});

	//การใช้สิทธิ์ตามกรมธรรม์
	$("#tb_policyholder_OL tbody>tr").each(function(){
		var code = $(this).find("td:nth-child(1) label").text();
		if(endorse_code == code){
			$(this).remove();
		}
	});
	 
	//ผลประโยชน์การขาย
	$("#tbl_SaleBenefitNormal_OL tbody>tr").each(function(){
		var code = $(this).find("td:nth-child(1) label").text();
		if(endorse_code == code){
			$(this).remove();
		}
	});
	
	$("#tbl_SaleBenefit_OL tbody>tr").each(function(){
		var code = $(this).find("td:nth-child(1) label").text();
		if(endorse_code == code){
			$(this).remove();
		}
	});
	
	//ข้อกำหนดการรับประกัน
	$("#tab_policy_panel_OL li>a").each(function(){
		var code = $(this).text();
		if(endorse_code == code){
			$(this).parent().remove();
		}
	});
	
	$("#policy_panel_tab_OL>div").each(function(){
		var code = $(this).attr("id");
			code = code.replace("policy_in_","");
		if(endorse_code == code){
			$(this).remove();
		}
	});
	
	//ผลประโยชน์ความคุ้มครอง
	$("#tabBenefitProduct_OL li>a").each(function(){
		var code = $(this).text();
		if(endorse_code == code){
			$(this).parent().remove();
		}
	});
	
	$("#tabBenefitProduct_OL li[data-id='bnf_rider_"+endorse_code+"']").remove();
	$("#bnf_rider_"+endorse_code).remove();
	
	/**************renew id************/
	renew_TabCalPrem_OL();
	
	//การใช้สิทธิ์ตามกรมธรรม์
	var new_id = 0;
	$("#tb_policyholder_OL tbody>tr").each(function(){
		 new_id = new_id+1;
		 $(this).attr("id", "tb_policyholder_OL"+new_id);
	});
	
	renew_TabSaleBenefitNormal_OL();
	renew_TabSaleBenefitCond_OL();
	
	/**************************************************/ 
	
	var seq = 1;
	
	$("#tb_ageRange_OL tbody>tr[data-parent='"+data_parent+"']").each(function(){
		
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

$(document).on("click", ".open-AddEndorse-OL", function () {

	$("#tbl_endorseAge_OL input:radio").prop("checked", false);
	
    var myId = $(this).attr('data-id');
    var cov_code = $(this).attr('data-code');
    var endorse_code = $("#div_endorse_name"+myId).text();
    var data_parent = $(this).attr("data-parent");
    
    $(".modal-body #hd_endorse_parent_OL").val(data_parent);
    $(".modal-body #hd_endorseID_OL").val( myId );
    $(".modal-body #hd_endorse_code_OL").val(endorse_code);
    
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
			$('#tbl_endorseAge_OL').DataTable().destroy();
			$("#tbl_endorseAge_OL tbody").find("tr").remove();
			
			var row = "";
			var row2 = "";
			var id = 1;
			var check_row_endorse = 0;
			for(i in response.Endorse_CL){
				var obj = response.Endorse_CL[i];
				row2 += 	"<tr id='tr_endorseAge_OL"+id+"'>"+
								"<td class='text-center'>"+
								"<input type='radio' id='select_endorse_OL"+id+"' name='select_endorse_OL' data-cat='"+obj.cov_cat_id+"' value='"+obj.cat_code+"'>"+
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
								"<td class='text-center'><label class='lb_underline' for='select_endorse_OL"+id+"'>"+obj.cov_code+"</label></td>"+
								"<td class='text-left'>"+obj.name_th+"</td>"+			
							"</tr>";			  
				
				check_row_endorse = id;
				id++;
			}
			$("#tbl_endorseAge_OL tbody").append(row2);
			$("#tbl_endorseAge_OL").DataTable({"ordering": false,"paging": false,"bInfo" : false, scrollY: '236px',scrollCollapse: true, "autoWidth": false, 
				fixedHeader: {header: true},"oLanguage": {"sSearch": "ค้นหา: "}
			});
			$("#tbl_endorseAge_OL_wrapper .dataTables_scrollHeadInner").css({"width":"100%"});
			$("#tbl_endorseAge_OL_wrapper .table").css({"width":"100%"});
			$('#tbl_endorseAge_OL_wrapper .sorting_asc').removeClass('sorting_asc');
			
			//radio checked
			if(endorse_code != ""){
				$("#tbl_endorseAge_OL tbody>tr").each(function(){
					var this_value = $(this).find("td:nth-child(2)").text();
					if(endorse_code == this_value){
						$(this).find("td:nth-child(1) input:radio").prop("checked", true);
					}
				});
			}
			
			$('#modal_select_endorse_OL').modal('show');
		
		}
	});

});

function addEndorse_OL(){
	var ID = $("#hd_endorseID_OL").val();
	var parent_ID = $("#hd_endorse_parent_OL").val();
	var endorse_code = $("#hd_endorse_code_OL").val();
	
	var rowID = $("#tbl_endorseAge_OL>tbody>tr input[type='radio']:checked").attr("id");
		rowID = rowID.replace("select_endorse_OL","");
	var endorse_type = $("#tbl_endorseAge_OL>tbody>tr input[type='radio']:checked").val();
	var endorse_ID = $("#tr_endorseAge_OL"+rowID).find("td:nth-child(2)").text();
	var prd_rider_code = $("#tr_endorseAge_OL"+rowID).find("td:nth-child(1) #prd_rider_code").val();
	var min_issue_age = $("#tr_endorseAge_OL"+rowID).find("td:nth-child(1) #min_issue_age").val();
	var max_issue_age = $("#tr_endorseAge_OL"+rowID).find("td:nth-child(1) #max_issue_age").val();
	var min_issue_unit = $("#tr_endorseAge_OL"+rowID).find("td:nth-child(1) #min_issue_age_unit").val();
	var max_issue_unit = $("#tr_endorseAge_OL"+rowID).find("td:nth-child(1) #max_insue_age_unit").val();
	var max_insure_age = $("#tr_endorseAge_OL"+rowID).find("td:nth-child(1) #max_insure_age").val();
	var max_insure_unit = $("#tr_endorseAge_OL"+rowID).find("td:nth-child(1) #max_insure_age_unit").val();

	//check duplicate
	var arr_endorse = [];
	var arr_endorse_new = [];
	var arr_endorse_diff = [];
	$("#tb_ageRange_OL tbody>tr[data-level='2']").each(function(){
		var this_id = $(this).attr("data-id");
		var endorse_selected_code = $("#tb_ageRange_OL #div_endorse_name"+this_id).text();
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
			$("#tb_ageRange_OL #tr_ageRange_CV"+ID).find("td:nth-child(1) div.filename").text(endorse_ID);
			$("#tb_ageRange_OL #tr_ageRange_CV"+ID).find("td:nth-child(1) #prd_rider_code").val(prd_rider_code);
			$("#tb_ageRange_OL #tr_ageRange_CV"+ID).find("td:nth-child(2)").text(endorse_type);
			$("#tb_ageRange_OL #tr_ageRange_CV"+ID).find("td:nth-child(4) input").val(min_issue_age);
			$("#tb_ageRange_OL #tr_ageRange_CV"+ID).find("td:nth-child(5) select>option[value='"+min_issue_unit+"']").attr("selected",true);
			$("#tb_ageRange_OL #tr_ageRange_CV"+ID).find("td:nth-child(6) input").val(max_issue_age);
			$("#tb_ageRange_OL #tr_ageRange_CV"+ID).find("td:nth-child(7) select>option[value='"+max_issue_unit+"']").attr("selected",true);
			$("#tb_ageRange_OL #tr_ageRange_CV"+ID).find("td:nth-child(8) input").val(max_insure_age);
			$("#tb_ageRange_OL #tr_ageRange_CV"+ID).find("td:nth-child(9) select>option[value='"+max_insure_unit+"']").attr("selected",true);
			//$("#addrow_endorse"+ID).attr("onclick","removeEndorse('"+ID+"')");
			
			var main_cov_parent = $("#tb_ageRange_OL #tr_ageRange_CV"+ID).attr("data-parent");
			//var main_cov = $("#tb_ageRange_OL #tr_ageRange_CV"+main_cov_parent).find("td:nth-child(1) label").text();
			var main_cov = $("#tb_ageRange_OL #tr_ageRange_CV"+main_cov_parent).find("td:nth-child(1) #prd_rider_code").val();
			
			//get data Endorse
			var json_data = {
					"method" : "getCaseRider",
					"rCode" : endorse_ID
			}
			$.ajax({
				url: 'ProductBasePlanOL_GetData_Servlet',
				type: "POST",
				data: json_data,
				async: false,
				success: function (response) {
					var obj = response.Tab_Basic_Information[0];
					var obj_calPrem = response.Tab_cal_insurance_premiums[0];
					
					getData_TabCalPrem_OL(endorse_ID, "E", prd_rider_code, response,true, main_cov);
					//getData_tab_useRight
					getData_TabUseRight_rider_OL(endorse_ID,"E", prd_rider_code, response, true, main_cov);
					/****Tab ผลประโยชน์การขาย****/
					getData_TabSaleBenefit_OL(endorse_ID, "E", prd_rider_code, response, true, main_cov);
					//****Tab Term****//
					//getData_TabTerm_data_OL(endorse_ID,"R",prd_rider_code,response,true);
					//****Tab Policy****//
					getData_TabPolicyWording_data_OL(endorse_ID,"E",prd_rider_code,response,true, main_cov);
					//****Tab Benefit****//
					showcase_benefit_OL(response, "E", endorse_ID, true, prd_rider_code, main_cov);
					get_dataBenefit_OL(response, "E", endorse_ID, prd_rider_code, main_cov);

				},
				error: function(){
					alert("fail")
				}
			});
			console.log("data",json_data);
			
			$('#modal_select_endorse_OL').modal('hide');
		}
	}else{
		$('#modal_select_endorse_OL').modal('hide');
	}
	
	$("#tbl_endorseAge_OL input:radio").prop("checked", false);

}

/****************Khwan add other function 20/11/2019****************/
function renew_TabCalPrem_OL(){
	var new_id = 0;
	 var new_child_id = 1;
	 var parent = 0;

	 $("#tb_Calculate_insurance_OL tbody>tr").each(function(){
		var data_level = $(this).attr("data-level");

		if(data_level == 1){
			new_id = new_id+1;
			parent = new_id;

			$(this).attr("id","tr_Calculate_insurance_OL_"+new_id);
			$(this).attr("data-id",new_id);
			$(this).attr("data-group",new_id);
			$(this).find("td:nth-child(3) i").attr("id","addrowMenu3_OL_"+new_id);
			$(this).find("td:nth-child(3) i").attr("data-id",new_id);
			$(this).find("td:nth-child(3) i").attr("data-topic",new_id);
			$(this).find("td:nth-child(3) i").attr("data-type",new_id);
			$(this).find("td:nth-child(3) i").attr("onclick","addrowMenu3_OL("+new_id+");");
			
			new_child_id = 1;
		}else{

			var child_id = parent+"_"+new_child_id;
			$(this).attr("id","tr_Calculate_insurance_OL_"+child_id);
			$(this).attr("data-id",child_id);
			$(this).attr("data-parent",parent);
			$(this).attr("data-group",parent);
			$(this).find("td:nth-child(3) i").attr("id","removerow_OL_"+child_id);
			$(this).find("td:nth-child(3) i").attr("data-id",child_id);
			$(this).find("td:nth-child(3) i").attr("data-topic",child_id);
			$(this).find("td:nth-child(3) i").attr("data-type",child_id);
			$(this).find("td:nth-child(3) i").attr("onclick","removerowChild3_OL('tr_Calculate_insurance_OL_"+child_id+"');");

			new_child_id = new_child_id+1;
			
		}
		
	 });
}

function renew_TabSaleBenefitNormal_OL(){
	 var new_id = 0;
	 var new_child_id = 1;
	 var parent = 0;

	 $("#tbl_SaleBenefitNormal_OL tbody>tr").each(function(){
		var data_level = $(this).attr("data-level");

		if(data_level == 1){
			new_id = new_id+1;
			parent = new_id;

			$(this).attr("id","tr_saleBnf"+new_id);
			$(this).attr("data-id",new_id);
			$(this).attr("data-group",new_id);
			$(this).find("td:nth-child(2) input").attr("id","chk_is_ref_base"+new_id);
			$(this).find("td:nth-child(4) i").attr("id","addrow_rd_"+new_id);
			$(this).find("td:nth-child(4) i").attr("data-id",new_id);
			$(this).find("td:nth-child(5) input").attr("id","datefrom_saleBnf"+new_id);
			$(this).find("td:nth-child(6) input").attr("id","dateto_saleBnf"+new_id);
			$(this).find("td:nth-child(7) input").attr("id","txb_year1_"+new_id);
			$(this).find("td:nth-child(8) input").attr("id","txb_year2_"+new_id);
			$(this).find("td:nth-child(9) input").attr("id","txb_year3_"+new_id);
			$(this).find("td:nth-child(10) input").attr("id","txb_year4_"+new_id);
			$(this).find("td:nth-child(11) input").attr("id","txb_credit_"+new_id);
			$(this).find("td:nth-child(12) input").attr("id","txb_override_"+new_id);
			$(this).find("td:nth-child(13) input").attr("id","txb_comm_"+new_id);
			$(this).find("td:nth-child(14) input").attr("id","txb_incentive_"+new_id);
			$(this).find("td:nth-child(15) input").attr("id","txb_bonus_"+new_id);
			$(this).find("td:nth-child(16) input").attr("id","txb_expense_"+new_id);
			
			new_child_id = 1;
		}else{

			var child_id = parent+"_"+new_child_id;
			$(this).attr("id","tr_saleBnf"+child_id);
			$(this).attr("data-id",child_id);
			$(this).attr("data-parent",parent);
			$(this).attr("data-group",parent);
			$(this).find("td:nth-child(2) input").attr("id","chk_is_ref_base"+child_id);
			$(this).find("td:nth-child(4) i").attr("id","addrow_rd_"+child_id);
			$(this).find("td:nth-child(4) i").attr("data-id",child_id);
			$(this).find("td:nth-child(5) input").attr("id","datefrom_saleBnf"+child_id);
			$(this).find("td:nth-child(6) input").attr("id","dateto_saleBnf"+child_id);
			$(this).find("td:nth-child(7) input").attr("id","txb_year1_"+child_id);
			$(this).find("td:nth-child(8) input").attr("id","txb_year2_"+child_id);
			$(this).find("td:nth-child(9) input").attr("id","txb_year3_"+child_id);
			$(this).find("td:nth-child(10) input").attr("id","txb_year4_"+child_id);
			$(this).find("td:nth-child(11) input").attr("id","txb_credit_"+child_id);
			$(this).find("td:nth-child(12) input").attr("id","txb_override_"+child_id);
			$(this).find("td:nth-child(13) input").attr("id","txb_comm_"+child_id);
			$(this).find("td:nth-child(14) input").attr("id","txb_incentive_"+child_id);
			$(this).find("td:nth-child(15) input").attr("id","txb_bonus_"+child_id);
			$(this).find("td:nth-child(16) input").attr("id","txb_expense_"+child_id);
			
			new_child_id = new_child_id+1;
			
		}
		
	 });
}

function renew_TabSaleBenefitCond_OL(){
	 var cond_new_id = 0;
	 var cond_new_child_id = 1;
	 var cond_parent = 0;

	 $("#tbl_SaleBenefit_OL tbody>tr").each(function(){
		var data_level = $(this).attr("data-level");

		if(data_level == 1){
			cond_new_id = cond_new_id+1;
			cond_parent = cond_new_id;

			$(this).attr("id","tr_saleBnf_cond"+cond_new_id);
			$(this).attr("data-id",cond_new_id);
			$(this).attr("data-group",cond_new_id);
			$(this).find("td:nth-child(2) input").attr("id","chk_is_ref_base_cond"+cond_new_id);
			$(this).find("td:nth-child(4) i").attr("id","addrow_rd_cond_"+cond_new_id);
			$(this).find("td:nth-child(4) i").attr("data-id",cond_new_id);
			$(this).find("td:nth-child(5) input").attr("id","datefrom_saleBnf_cond"+cond_new_id);
			$(this).find("td:nth-child(6) input").attr("id","dateto_saleBnf_cond"+cond_new_id);
			$(this).find("td:nth-child(7) input").attr("id","txb_year1_cond_"+cond_new_id);
			$(this).find("td:nth-child(8) input").attr("id","txb_year2_cond_"+cond_new_id);
			$(this).find("td:nth-child(9) input").attr("id","txb_year3_cond_"+cond_new_id);
			$(this).find("td:nth-child(10) input").attr("id","txb_year4_cond_"+cond_new_id);
			$(this).find("td:nth-child(11) input").attr("id","txb_credit_cond_"+cond_new_id);
			$(this).find("td:nth-child(12) input").attr("id","txb_override_cond_"+cond_new_id);
			$(this).find("td:nth-child(13) input").attr("id","txb_comm_cond_"+cond_new_id);
			$(this).find("td:nth-child(14) input").attr("id","txb_incentive_cond_"+cond_new_id);
			$(this).find("td:nth-child(15) input").attr("id","txb_bonus_cond_"+cond_new_id);
			$(this).find("td:nth-child(16) input").attr("id","txb_expense_cond_"+cond_new_id);
			
			cond_new_child_id = 1;
		}else{

			var child_id = cond_parent+"_"+cond_new_child_id;
			$(this).attr("id","tr_saleBnf_cond"+child_id);
			$(this).attr("data-id",child_id);
			$(this).attr("data-parent",cond_parent);
			$(this).attr("data-group",cond_parent);
			$(this).find("td:nth-child(4) i").attr("id","addrow_rd_cond_"+child_id);
			$(this).find("td:nth-child(4) i").attr("data-id",child_id);
			$(this).find("td:nth-child(5) input").attr("id","datefrom_saleBnf_cond"+child_id);
			$(this).find("td:nth-child(6) input").attr("id","dateto_saleBnf_cond"+child_id);
			$(this).find("td:nth-child(7) input").attr("id","txb_year1_cond_"+child_id);
			$(this).find("td:nth-child(8) input").attr("id","txb_year2_cond_"+child_id);
			$(this).find("td:nth-child(9) input").attr("id","txb_year3_cond_"+child_id);
			$(this).find("td:nth-child(10) input").attr("id","txb_year4_cond_"+child_id);
			$(this).find("td:nth-child(11) input").attr("id","txb_credit_cond_"+child_id);
			$(this).find("td:nth-child(12) input").attr("id","txb_override_cond_"+child_id);
			$(this).find("td:nth-child(13) input").attr("id","txb_comm_cond_"+child_id);
			$(this).find("td:nth-child(14) input").attr("id","txb_incentive_cond_"+child_id);
			$(this).find("td:nth-child(15) input").attr("id","txb_bonus_cond_"+child_id);
			$(this).find("td:nth-child(16) input").attr("id","txb_expense_cond_"+child_id);
			
			cond_new_child_id = cond_new_child_id+1;
			
		}
		
	 });
	
}

function renew_TableAge_OL(){
	 var new_id = 0;
	 var new_child_id = 1;
	 var parent = 0;

	 $("#tb_ageRange_OL tbody>tr").each(function(){
		var data_level = $(this).attr("data-level");
		var cov_code = $(this).find("td:nth-child(1) #cov_code").val();
		var prd_rider_code = $(this).find("td:nth-child(1) #prd_rider_code").val();
		
		if(data_level == 1){
			new_id = new_id+1;
			parent = new_id;
			
			$(this).attr("id","tr_ageRange_CV"+new_id);
			$(this).attr("data-id",new_id);
			$(this).find("td:nth-child(3) i").attr("id","addrow_endorse"+new_id);
			$(this).find("td:nth-child(3) i").attr("data-id",new_id);
			$(this).find("td:nth-child(3) i").attr("onclick","addRowEndorse_OL("+new_id+", '"+cov_code+"', '"+prd_rider_code+"');");
			$(this).find("td:nth-child(4) input[type='hidden']").attr("id","hd_min_issue_age"+new_id);
			$(this).find("td:nth-child(4) input[type='number']").attr("onchange","numberKey_min_OL(this,'hd_min_issue_age"+new_id+"');");
			$(this).find("td:nth-child(5) input[type='hidden']").attr("id","start_insure_ageUnit"+new_id);
			$(this).find("td:nth-child(5) select").attr("id","ageRange_from_unit"+new_id+"_ol");
			$(this).find("td:nth-child(6) input[type='hidden']").attr("id","hd_max_issue_age"+new_id);
			$(this).find("td:nth-child(6) input[type='number']").attr("onchange","numberKey_max_OL(this,'hd_max_issue_age"+new_id+"');");
			$(this).find("td:nth-child(7) input[type='hidden']").attr("id","end_insure_ageUnit"+new_id);
			$(this).find("td:nth-child(7) select").attr("id","ageRange_to_unit"+new_id+"_ol");
			$(this).find("td:nth-child(8) input[type='hidden']").attr("id","hd_max_insure_age"+new_id);
			$(this).find("td:nth-child(8) input[type='number']").attr("onchange","numberKey_maximum_OL(this,'hd_max_insure_age"+new_id+"');");
			$(this).find("td:nth-child(9) input[type='hidden']").attr("id","max_insure_ageUnit"+new_id);
			$(this).find("td:nth-child(9) select").attr("id","ageRange_max_unit"+new_id+"_ol");		
			
			new_child_id = 1;
		}else{

			var child_id = parent+"_"+new_child_id;
			$(this).attr("id","tr_ageRange_CV"+child_id);
			$(this).attr("data-id",child_id);
			$(this).find("td:nth-child(3) i").attr("id","addrow_endorse"+child_id);
			$(this).find("td:nth-child(3) i").attr("data-id",child_id);
			$(this).find("td:nth-child(4) input[type='hidden']").attr("id","hd_min_issue_age"+child_id);
			$(this).find("td:nth-child(4) input[type='number']").attr("onchange","numberKey_min_OL(this,'hd_min_issue_age"+child_id+"');");
			$(this).find("td:nth-child(5) input[type='hidden']").attr("id","start_insure_ageUnit"+child_id);
			$(this).find("td:nth-child(5) select").attr("id","ageRange_from_unit"+child_id+"_ol");
			$(this).find("td:nth-child(6) input[type='hidden']").attr("id","hd_max_issue_age"+child_id);
			$(this).find("td:nth-child(6) input[type='number']").attr("onchange","numberKey_max_OL(this,'hd_max_issue_age"+child_id+"');");
			$(this).find("td:nth-child(7) input[type='hidden']").attr("id","end_insure_ageUnit"+child_id);
			$(this).find("td:nth-child(7) select").attr("id","ageRange_to_unit"+child_id+"_ol");
			$(this).find("td:nth-child(8) input[type='hidden']").attr("id","hd_max_insure_age"+child_id);
			$(this).find("td:nth-child(8) input[type='number']").attr("onchange","numberKey_maximum_OL(this,'hd_max_insure_age"+child_id+"');");
			$(this).find("td:nth-child(9) input[type='hidden']").attr("id","max_insure_ageUnit"+child_id);
			$(this).find("td:nth-child(9) select").attr("id","ageRange_max_unit"+child_id+"_ol");	

			new_child_id = new_child_id+1;
			
		}
		
	 });
}

/****************2. การคำนวณเบี้ยประกัน******************/
function check_pm_rate_OL(){
	//set การคำนวณเบี้ยประกันภัย
	/*if($("#ip_fileuploads_OL_PM_Rate1_Show_1").val() == ""){
		$("#tb_Calculate_insurance2_OL_1").find("select").prop("disabled", true);
	}else{
		$("#tb_Calculate_insurance2_OL_1").find("select").prop("disabled", false);
	}*/
}

/** set value การชำระเบี้ยประกันภัยปีแรก-ปีต่อไป จาก tab term
 * 
 * @param block 1 : ปีแรก
 * 			    2 : ปีต่อไป
 * @returns
 */
function set_ratePayment(block){
	
	if(block == 1){
		/*clear date tab cal*/
		$("input[name='chk_cal_pay_premium_OL[]']:checkbox").prop("checked",false);
		
		/*first year*/
		$("#collect_meth_FYP_OL div>input[type='checkbox']:checked").each(function(){
			var prop_firstYear = $(this).val();
			/*tab cal*/
			$("#prem_flag_FYP div").each(function(){
				if( $(this).find('input[type="checkbox"]').val() == prop_firstYear){
					$(this).find('input[type="checkbox"]').prop("checked",true);
				}
			})
		})
	}else if(block == 2){
		/*clear date tab cal*/
		$("input[name='chk_cal_payRenew_premium_OL[]']:checkbox").prop("checked",false);
		
		/*to year*/
		$("#collect_meth_RYP_OL div>input[type='checkbox']:checked").each(function(){
			var prop_firstYear = $(this).val();
			/*tab cal*/
			$("#prem_flag_RYP div").each(function(){
				if( $(this).find('input[type="checkbox"]').val() == prop_firstYear){
					$(this).find('input[type="checkbox"]').prop("checked",true);
				}
			})
		})
	}else{
		alert("fail")
	}
	
}

function show_prem_collect_OL(){
	//การชำระเบี้ยประกันภัยปีแรก
	$("#prem_flag_FYP>div input:checkbox").prop("checked", false);
	$("#collect_meth_FYP_OL>div input:checkbox:checked").each(function(){
			var this_value = $(this).val();
			
			$("#prem_flag_FYP>div input:checkbox").each(function(){
				var value = $(this).val();
				if(this_value == value){
					$(this).prop("checked", true);
				}
			});
		
	});
	
	//การชำระเบี้ยประกันภัยปีต่อไป/ปีต่ออายุ
	$("#prem_flag_RYP>div input:checkbox").prop("checked", false);
	$("#collect_meth_RYP_OL>div input:checkbox:checked").each(function(){
			var this_value = $(this).val();
			
			$("#prem_flag_RYP>div input:checkbox").each(function(){
				var value = $(this).val();
				if(this_value == value){
					$(this).prop("checked", true);
				}
			});
	});
}

function getData_TabCalPrem_OL(cov_code, type, prd_rider_code, response, show_cov, main_cov){
	
	console.log("type>> "+type);
	
	var obj = response.Tab_Basic_Information[0];
	var obj_calPrem = response.Tab_cal_insurance_premiums[0];
	var cov_code = cov_code;
	var prd_code = "";
	var is_bundle = obj.is_bundle;
	
	if(prd_rider_code != ""){
		if(is_bundle == true){
			prd_code = cov_code;
		}else{
			prd_code = prd_rider_code;
		}
		
	}else{
		prd_code = $("#pass_Insurance_product_ol").val();
		prd_rider_code = $("#pass_Insurance_product_ol").val();
	}
	
	var cov_type = response.Tab_Basic_Information[0].type_coverage[0].type[2].text;
	
	var num_premium_rate 	= obj_calPrem.table_insurance_premium.length;
	var num_extra_rate		= obj_calPrem.table_extra_Rate.length;
	var num_sa_rate 		= obj_calPrem.table_capital_decrease.length;
	
	/*Age Type*/
	var stroage_ageBand = new Array();
	var list_age_type = "";
	if(type == "B"){
		var num_lb_Age = $("#lb_age_specific_OL option").length;
		if(num_lb_Age == 0){
			list_age_type += "<option value=''>Age Specific</option>";
		}
		
		if(obj_calPrem.age_Band.length > 0){
			for(i in obj_calPrem.age_Band){
				
				var flag_dup = false;
				for(y in stroage_ageBand){
					if(obj_calPrem.age_Band[i].value == stroage_ageBand[y]){
						flag_dup = true
					}
				}
				if(!flag_dup){
					list_age_type += "<option value='"+obj_calPrem.age_Band[i].value+"'>"+obj_calPrem.age_Band[i].value+"</option>";
					stroage_ageBand.push(obj_calPrem.age_Band[i].value)
				}
				
			}
		}
		$("#lb_age_specific_OL").append(list_age_type);
	}

	/*การคำนวณจำนวนเงินเอาประกันภัย*/
	/*var num_row_cal = $("#tb_Calculate_insurance_OL tbody tr").length;
	if(num_row_cal > 0){
		$("#tb_Calculate_insurance_OL tbody tr").remove();
	}*/
	
	var numrow = $("#tb_Calculate_insurance_OL tbody>tr[data-level='1']").length;
	var last_row = $("#tb_Calculate_insurance_OL tbody>tr[data-level='1']:last").data("id");
	var numrow_cal = "";
	
	if(numrow > 0){
		numrow_cal = Number(last_row+1);
	}else{
		numrow_cal = 1;
	}
	
	var row_cal = "";
	var dropdownUnit = $("#hide_fixCovUnit_OL").val();
	var dropdownOF1 = $("#hide_fixCovFactor_OL").val();
	var dropdownOF2 = $("#hide_minCovFactor_OL").val();
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
	
	row_cal = "<tr id=\"tr_Calculate_insurance_OL_"+numrow_cal+"\" data-id=\""+numrow_cal+"\" data-group='"+numrow_cal+"' data-parent=\"0\" data-level=\"1\" data-key='"+data_key+"' data-main='"+data_main_cov+"' >"+
					"<td width=\"14%\" class=\"text-center verticalCenter "+fontcolor+" borderBlack\">"
						if(type != "PR"){
							row_cal += "<label>"+cov_code+"</label>";
						}else{
							row_cal += "<label>"+prd_code+"</label>";
						}
						
					row_cal += "<input type='hidden' id='prd_rider_code_OL' value='"+prd_rider_code+"'>"+
						"<input type='hidden' id='seq_OL' value='1'>"+
						"<input type='hidden' id='serie_no_OL' value='1'>"+
						"<input type='hidden' id='type_OL' value='"+type+"'>"+
					"</td>"+
					"<td width=\"7%\"class=\"text-center verticalCenter "+fontcolor+" borderBlack\">" +
					"<label>"+cov_type+"</label>" +
					"</td>"+
					"<td width=\"3%\" class=\"text-center verticalCenter borderBlack\">"+
						"<i class=\"glyphicon glyphicon-plus icon-blue-circle\"  data-id=\'"+numrow_cal+"\' data-topic=\'"+numrow_cal+"\' data-type=\'"+numrow_cal+"\' id=\"addrowMenu3_OL_"+numrow_cal+"\" onclick=\"addrowMenu3_OL("+numrow_cal+");\"></i>"+
					"</td>"+	
					"<td width=\"7%\"class=\"text-right verticalCenter borderBlack\">"+
					"<input type='text' class='autoComma form-control text-center width40px' data-v-min='0.00' data-v-max='999999999.99' onblur='chkBlank_tbCal_OL(this);'>"+
					"</td>"+
					"<td width=\"7%\" class=\"text-right verticalCenter borderBlack\">"+
					"<input type='text' class='autoComma form-control margin-padding0 text-center width40px' data-v-min='0.00' data-v-max='999999999.99' onblur='validateMax_tbCal_OL(this); chkBlank_tbCal_OL(this);'>"+
					"</td>"+
					"<td width=\"7%\"class=\"text-right verticalCenter borderBlack\">"+
					"<input type='text' class='autoComma form-control margin-padding0 text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999999999.99' onblur='chkBlank_tbCal_OL(this); check_value_format_OL(1,this);'>"+
					"</td>"+
					"<td width=\"9%\" class=\"text-right verticalCenter borderBlack\">"+
						"<select class=\"form-control\" onchange='check_value_format_OL(2,this);'>"+dropdownUnit+"</select></td>"+
					"<td width=\"9%\" class=\"text-right verticalCenter borderBlack\">"+
						"<select class=\"form-control\">"+dropdownOF1+"</select></td>"+
					"<td width=\"7%\" class=\"text-right verticalCenter borderBlack\">"+
					"<input type='text' class='autoComma form-control margin-padding0 text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999999999.99' onblur='chkBlank_tbCal_OL(this);'>"+
					"<td width=\"9%\" class=\"text-right verticalCenter borderBlack\">"+
						"<select class=\"form-control\">"+dropdownOF2+"</select></td>"+	
					"<td width=\"7%\" class=\"text-right verticalCenter borderBlack\">"+
					"<input type='text' class='autoComma form-control margin-padding0 text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999999999.99' onblur='chkBlank_tbCal_OL(this);' "+disabled_dd+">"+
					"<td width=\"9%\" class=\"text-right verticalCenter borderBlack\">"+
						"<select class=\"form-control\" "+disabled_dd+">"+dropdownOF2+"</select></td>"+
				"</tr>";
		
		if($("#tb_Calculate_insurance_OL tbody>tr").length == 0){
			$("#tb_Calculate_insurance_OL tbody").append(row_cal);
		}else{
			if(type == "B"){
				$(row_cal).insertBefore("#tb_Calculate_insurance_OL tbody>tr:first");
			}else if(type == "E"){

				var num_main = $("#tb_Calculate_insurance_OL tbody>tr[data-main='"+main_cov+"']").length;

				if(num_main > 0){
					$(row_cal).insertAfter("#tb_Calculate_insurance_OL tbody>tr[data-main='"+main_cov+"']:last");
				}else{
					var main_data_id = $("#tb_Calculate_insurance_OL tbody>tr[data-key='"+main_cov+"']").attr("data-id");
					var num_child_main = $("#tb_Calculate_insurance_OL tbody>tr[data-parent='"+main_data_id+"']").length;
					
					if(num_child_main > 0){
						$(row_cal).insertAfter("#tb_Calculate_insurance_OL tbody>tr[data-parent='"+main_data_id+"']:last");
					}else{
						$(row_cal).insertAfter("#tb_Calculate_insurance_OL tbody>tr[data-key='"+main_cov+"']");
					}
					
				}
				
			}else{
				$(row_cal).insertAfter("#tb_Calculate_insurance_OL tbody>tr:last");
			}
		}
		$(".autoComma").autoNumeric('init',{vMin: '0.00', vMax: '999999999.99'});
		
		
		/*กรณีเป็น rider ปิด 2 คอลัมน์สุดท้าย*/
		if(type == "R" || type == "E"){
			$("#tr_Calculate_insurance_OL_"+numrow_cal+"").find("td:nth-child(11) input").prop("disabled", true);
			$("#tr_Calculate_insurance_OL_"+numrow_cal+"").find("td:nth-child(12) select").prop("disabled", true);
		}
		
		/*****renew id*****/
		renew_TabCalPrem_OL();
		
		/*การคำนวณเบี้ยประกันภัย*/
		if(type == "B"){
			var num_row_cal2 = $("#tb_Calculate_insurance2_OL tbody tr").length;
			if(num_row_cal2 > 0){
				$("#tb_Calculate_insurance2_OL tbody tr").remove();
			}
			
			var sl_formula7 = $("#hide_formular7").val();
			var sl_formula8 = $("#hide_formular8").val();
			var sl_formula9 = $("#hide_formular9").val();
			var text_prem = "";
			var sl_calculus = "";
			var input_file = "";
			var rate_cat = "";

			for(var i=1; i<=3; i++){
				
				if(i == 1){
					text_prem = "Premium Rate";
					rate_cat = 7
					sl_calculus = sl_formula7;
					input_file = "ip_fileuploads_OL_PM_Rate1_Show_1";
				}else if(i == 2){
					text_prem = "Extra Rate";
					rate_cat = 8
					sl_calculus = sl_formula8;
					input_file = "";
				}else if(i == 3){
					text_prem = "SA_Rate";
					rate_cat = 9
					sl_calculus = sl_formula9;
					input_file = "";
				}
				
					row_cal2 = 	"<tr id=\"tb_Calculate_insurance2_OL_"+i+"\">"+
					"<td width=\"30%\" class=\"text-center verticalCenter fontcolortable1 borderBlack\">"+
					/*"<input type='hidden' id='cov_code' value='"+cov_code+"'>";*/
					"<input type='hidden' id='prd_rider_code_OL' value='"+prd_code+"'>";
				if(i == 1){
					row_cal2  += "<label>"+cov_code+"</label>";
				}else{
					row_cal2  += "";
				}
					row_cal2  += "</td>"+
					"<td width=\"20%\" class=\"text-center verticalCenter borderBlack\">"+
						"<label>"+text_prem+"</label>"+	
						"<input type='hidden' id='rate_cat_formula_OL' value='"+rate_cat+"'/>"+
					"</td>"+	
					"<td width=\"50%\"class=\"text-center verticalCenter borderBlack\">"+
					"<select class=\"form-control\">"+sl_calculus+"</select></td>"+
				"</tr>";
					
				$("#tb_Calculate_insurance2_OL tbody").append(row_cal2);
				
				if(i == 1){
					if(num_premium_rate == 0){
						$("#tb_Calculate_insurance2_OL_"+i).find("select").prop("disabled", true);
					}else{
						$("#tb_Calculate_insurance2_OL_"+i).find("select").prop("disabled", false);
					}
				}else if(i == 2){
					if(num_extra_rate == 0){
						$("#tb_Calculate_insurance2_OL_"+i).find("select").prop("disabled", true);
					}else{
						$("#tb_Calculate_insurance2_OL_"+i).find("select").prop("disabled", false);
					}
				}else if(i == 3){
					if(num_sa_rate == 0){
						$("#tb_Calculate_insurance2_OL_"+i).find("select").prop("disabled", true);
					}else{
						$("#tb_Calculate_insurance2_OL_"+i).find("select").prop("disabled", false);
					}				
				}	
				
			}
		}
}


/*4. ผลประโยชน์การขาย*/
function getData_TabSaleBenefit_OL(cov_code, type, prd_rider_code, response, show_cov, main_cov){
	var obj = response.Tab_Basic_Information[0];
	var is_bundle = obj.is_bundle;
	var cov_code = cov_code;
	var prd_code = "";
	var new_row = "";
	var new_row2 = "";
	var num_parent = $("#tbl_SaleBenefitNormal_OL tbody>tr[data-level='1']").length;
	var num_parent_cond = $("#tbl_SaleBenefit_OL tbody>tr[data-level='1']").length;
	var new_row_id = "";
	var new_row_id_cond = "";
	var font_color = "";
	var disabled = "";
	var disabled_icon = "";
	var readonly_date = "";
	var seq = "";
	var date_value = "";
	var data_main_cov = "";
	
	if(num_parent > 0){
		new_row_id = Number(num_parent)+1;
	}else{
		new_row_id = 1;
	}
	
	if(num_parent_cond > 0){
		new_row_id_cond = Number(num_parent_cond)+1;
	}else{
		new_row_id_cond = 1;
	}
	
	if(type == "B"){
		font_color = "fontcolortable1";
		disabled = "";
		disabled_icon = "";
		seq = 1;
		date_value = "";
		readonly_date = "readonly";
		data_main_cov= "";
	}else if(type == "E"){
		font_color = "font-term-yellow";
		disabled = "disabled";
		disabled_icon = "disabledAll"
		seq = 1;
		date_value = "";
		readonly_date = "";
		data_main_cov = main_cov;
	}else{
		font_color = "fontcolortable2";
		disabled = "disabled";
		disabled_icon = "disabledAll"
		seq = 1;
		date_value = "";
		readonly_date = "";
		data_main_cov = "";
	}
	
	if(prd_rider_code == ""){
		prd_code = cov_code;
		prd_rider_code = $("#pass_Insurance_product_ol").val();
	}else{
		//if(is_bundle == true || show_cov == true){
		if(type == "B" || type == "R" || type == "E"){
			prd_code = cov_code;
		}else{
			prd_code = prd_rider_code;
		}
	}
		
	//console.log("prd_code "+prd_code+" bundle>> "+is_bundle);
	
 	new_row = "<tr id='tr_saleBnf"+new_row_id+"' data-id='"+new_row_id+"' data-level='1' data-group='"+new_row_id+"' data-key='"+prd_rider_code+"' data-main='"+data_main_cov+"'>"+
 	"<td class=\"text-center verticalCenter "+font_color+"\">"+
		"<label>"+prd_code+"</label>"+
		"<input type='hidden' id='cov_type_OL' value='"+type+"'>"+
		"<input type='hidden' id='prd_rider_code_OL' value='"+prd_rider_code+"'>"+
		"<input type='hidden' id='seq_OL' value='"+seq+"'>"+
	"</td>";
		
	 if(type == "B"){
		 new_row += "<td class=\'text-center verticalCenter\' class=\'text-center verticalCenter\'></td>";
	 }else{
		 new_row += "<td class=\'text-center verticalCenter\' class=\'text-center verticalCenter\'>"+
	 		"<input type=\"checkbox\" id=\"chk_is_ref_base"+new_row_id+"\" "+disabled+"></td>";
	 }
	 	
	 new_row += "<td class=\'text-center verticalCenter\' class=\'text-center verticalCenter\'>-</td>"+
		"<td class=\"text-center verticalCenter\">"+
		"<i class=\"glyphicon glyphicon-plus icon-blue-circle "+disabled_icon+"\" id=\"addrow_rd_"+new_row_id+"\" data-id=\""+new_row_id+"\" onclick=\"add_row_saleBnf_OL(this);\" "+disabled+"></i>"+
		"</td>"+
		"<td class='text-center'><input type='text' class='form-control "+disabled_icon+"' id='datefrom_saleBnf"+new_row_id+"' onblur='' placeholder='dd/mm/yyyy' value='"+date_value+"' maxlength='10' "+disabled+" "+readonly_date+"></td>"+
		"<td class='text-center'><input type='text' class='form-control "+disabled_icon+"' id='dateto_saleBnf"+new_row_id+"' onblur='checkdateTo_OL(this.id); checkEndDateTo_OL(this);' placeholder='dd/mm/yyyy' value='"+date_value+"' maxlength='10' "+disabled+" "+readonly_date+"></td>"+	
		"<td class=\'text-right verticalCenter\'>"+
		"<input type='text' class='auto text-right form-control' id='txb_year1_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99' "+disabled+">" +
		"</td>"+
		"<td class=\'text-right verticalCenter\'>"+
		"<input type='text' class='auto text-right form-control' id='txb_year2_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99' "+disabled+">" +
		"</td>"+
		"<td class=\'text-right verticalCenter\'>"+
		"<input type='text' class='auto text-right form-control'  id='txb_year3_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99' "+disabled+">" +
		"</td>"+
		"<td class=\'text-right verticalCenter\'>"+
		"<input type='text' class='auto text-right form-control' id='txb_year4_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99' "+disabled+">" +
		"</td>"+
		"<td class=\'text-right verticalCenter\'>"+
		"<input type='text' class='auto text-right form-control' id='txb_credit_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99' "+disabled+">" +
		"</td>"+
		"<td class=\'text-right verticalCenter\'>"+
		"<input type='text' class='auto text-center form-control' id='txb_override_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99' "+disabled+">" +
		"</td>"+
		"<td class=\'text-right verticalCenter\'>"+
		"<input type='text' class='auto text-center form-control' id='txb_comm_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99' "+disabled+">" +
		"</td>"+
		"<td class=\'text-right verticalCenter\'>"+
		"<input type='text' class='auto text-center form-control' id='txb_incentive_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99' "+disabled+">" +
		"</td>"+
		"<td class=\'text-right verticalCenter\'>"+
		"<input type='text' class='auto text-center form-control' id='txb_bonus_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99' "+disabled+">" +
		"</td>"+
		"<td class=\'text-right verticalCenter\'>"+
		"<input type='text' class='auto text-center form-control' id='txb_expense_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99' "+disabled+">" +
		"</td>"+
		"</tr>";
	 
	 var num_row_normal = $("#tbl_SaleBenefitNormal_OL tbody>tr").length;
	 if(type == "B"){
		 if(num_row_normal > 0){
			 $(new_row).insertBefore("#tbl_SaleBenefitNormal_OL tbody>tr:first");
		 }else{
			 $("#tbl_SaleBenefitNormal_OL tbody").append(new_row);
		 }

	 }else{
		 if(type == "E"){
			 var num_main = $("#tbl_SaleBenefitNormal_OL tbody>tr[data-main='"+main_cov+"']").length;
			 
			 if(num_main > 0){
				 $(new_row).insertAfter("#tbl_SaleBenefitNormal_OL tbody>tr[data-main='"+main_cov+"']:last"); 
			 }else{
				 
				 var main_data_id = $("#tbl_SaleBenefitNormal_OL tbody>tr[data-key='"+main_cov+"']").attr("data-id");
				 var num_child_main = $("#tbl_SaleBenefitNormal_OL tbody>tr[data-parent='"+main_data_id+"']").length;
				 
				 if(num_child_main > 0){
					 $(new_row).insertAfter("#tbl_SaleBenefitNormal_OL tbody>tr[data-parent='"+main_data_id+"']:last");
				 }else{
					 $(new_row).insertAfter("#tbl_SaleBenefitNormal_OL tbody>tr[data-key='"+main_cov+"']");
				 }
				 
			 }
			 
			 
		 }else{
			 $("#tbl_SaleBenefitNormal_OL tbody").append(new_row);
		 }

	 }
	 
	 //renew id
	 renew_TabSaleBenefitNormal_OL();
	 
	 
	 if(type == "B"){
		 var year_end = new Date().getFullYear();
			year_end = 9999 - 543;

		 jQuery("#datefrom_saleBnf1, #dateto_saleBnf1").datetimepicker({
			  timepicker:false,
			  format:'d/m/Y',
			  lang:'th',
			  todayButton: false,
			  yearEnd: year_end,
			  maxDate: '9456/12/31',
			  onSelectDate:function(dp,$input){
				  var yearT = new Date(dp).getFullYear();
				  var yearTH = yearT+543;
				  
				  var fulldate = $input.val();
				  var fulldateTH = fulldate.replace(yearT,yearTH);
				  $input.val(fulldateTH);
			  }, 
		});
			
		jQuery("#datefrom_saleBnf1, #dateto_saleBnf1").on("mouseenter mouseleave", function(e){
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
	 
	 /**********************มีเงื่อนไข*************************/
	 var num_row_cond = $("#tbl_SaleBenefit_OL tbody>tr").length;
	 
	 if(num_row_cond > 0){
		//remove row
			$("#tbl_SaleBenefit_OL tbody>tr").each(function(){
				var type = $(this).find("#cov_type_cond_OL").val();
				var data_group = $(this).attr("data-group");
				if(type == "B" && data_group != 1){
					$(this).remove();
				}
			});
			
			$("#tbl_SaleBenefit_OL tbody>tr[data-group='1']").each(function(){
				var data_level = $(this).attr("data-level");
				
				$(this).find("td:nth-child(5) input").val("");
				$(this).find("td:nth-child(6) input").val("");
				$(this).find("td:nth-child(7) input").val("0.00");
				$(this).find("td:nth-child(8) input").val("0.00");
				$(this).find("td:nth-child(9) input").val("0.00");
				$(this).find("td:nth-child(10) input").val("0.00");
				$(this).find("td:nth-child(11) input").val("0.00");
				$(this).find("td:nth-child(12) input").val("0.00");
				$(this).find("td:nth-child(13) input").val("0.00");
				$(this).find("td:nth-child(14) input").val("0.00");
				$(this).find("td:nth-child(15) input").val("0.00");
				$(this).find("td:nth-child(16) input").val("0.00");
				
				if(data_level == 2){
					$(this).remove();
				}
			});
			
			$("#panel_SaleBenefit_OL3").hide();
	 }
	 
	 new_row2 = "<tr id='tr_saleBnf_cond"+new_row_id_cond+"' data-id='"+new_row_id_cond+"' data-level='1' data-group='"+new_row_id_cond+"' data-key='"+prd_rider_code+"' data-main='"+data_main_cov+"'>"+
	 	"<td class=\"text-center verticalCenter "+font_color+"\">"+
			"<label>"+prd_code+"</label>"+
			"<input type='hidden' id='cov_type_cond_OL' value='"+type+"'>"+
			"<input type='hidden' id='prd_rider_code_cond_OL' value='"+prd_rider_code+"'>"+
			"<input type='hidden' id='seq_cond_OL' value='"+seq+"'>"+
			"<input type='hidden' id='serie_cond_OL' value='1'>"+
		"</td>";
		
	 if(type == "B"){
		 new_row2 += "<td class=\'text-center verticalCenter\' class=\'text-center verticalCenter\'></td>"+
		 			 "<td class=\'text-center verticalCenter\' class=\'text-center verticalCenter\'><label>S1</label></td>";
	 }else{
		 new_row2 += "<td class=\'text-center verticalCenter\' class=\'text-center verticalCenter\'>"+
	 		"<input type=\"checkbox\" id=\"chk_is_ref_base_cond"+new_row_id_cond+"\" "+disabled+"></td>"+
	 		"<td class=\'text-center verticalCenter\' class=\'text-center verticalCenter\'><label>1</label></td>";
	 }
	 	
	 new_row2 += "<td class=\"text-center verticalCenter\">"+
		"<i class=\"glyphicon glyphicon-plus icon-blue-circle "+disabled_icon+"\" id=\"addrow_rd_cond_"+new_row_id_cond+"\" data-id=\""+new_row_id_cond+"\" onclick=\"add_row_saleBnf_cond_OL(this);\" "+disabled+"></i>"+
		"</td>"+
		"<td class='text-center'><input type='text' class='form-control "+disabled_icon+"' id='datefrom_saleBnf_cond"+new_row_id_cond+"' onblur='' placeholder='dd/mm/yyyy' value='"+date_value+"' maxlength='10' "+disabled+" "+readonly_date+"></td>"+
		"<td class='text-center'><input type='text' class='form-control "+disabled_icon+"' id='dateto_saleBnf_cond"+new_row_id_cond+"' onblur='checkdateTo_OL(this.id);' placeholder='dd/mm/yyyy' value='"+date_value+"' maxlength='10' "+disabled+" "+readonly_date+"></td>"+	
		"<td class=\'text-right verticalCenter\'>"+
		"<input type='text' class='auto text-right form-control' id='txb_year1_cond_"+new_row_id_cond+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max=999.99 "+disabled+">" +
		"</td>"+
		"<td class=\'text-right verticalCenter\'>"+
		"<input type='text' class='auto text-right form-control' id='txb_year2_cond_"+new_row_id_cond+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99' "+disabled+">" +
		"</td>"+
		"<td class=\'text-right verticalCenter\'>"+
		"<input type='text' class='auto text-right form-control'  id='txb_year3_cond_"+new_row_id_cond+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99' "+disabled+">" +
		"</td>"+
		"<td class=\'text-right verticalCenter\'>"+
		"<input type='text' class='auto text-right form-control' id='txb_year4_cond_"+new_row_id_cond+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99' "+disabled+">" +
		"</td>"+
		"<td class=\'text-right verticalCenter\'>"+
		"<input type='text' class='auto text-right form-control' id='txb_credit_cond_"+new_row_id_cond+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99' "+disabled+">" +
		"</td>"+
		"<td class=\'text-right verticalCenter\'>"+
		"<input type='text' class='auto text-center form-control' id='txb_override_cond_"+new_row_id_cond+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99' "+disabled+">" +
		"</td>"+
		"<td class=\'text-right verticalCenter\'>"+
		"<input type='text' class='auto text-center form-control' id='txb_comm_cond_"+new_row_id_cond+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99' "+disabled+">" +
		"</td>"+
		"<td class=\'text-right verticalCenter\'>"+
		"<input type='text' class='auto text-center form-control' id='txb_incentive_cond_"+new_row_id_cond+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99' "+disabled+">" +
		"</td>"+
		"<td class=\'text-right verticalCenter\'>"+
		"<input type='text' class='auto text-center form-control' id='txb_bonus_cond_"+new_row_id_cond+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99' "+disabled+">" +
		"</td>"+
		"<td class=\'text-right verticalCenter\'>"+
		"<input type='text' class='auto text-center form-control' id='txb_expense_cond_"+new_row_id_cond+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99' "+disabled+">" +
		"</td>"+
		"</tr>";
	 
	 
	 if(type == "B"){
		 if(num_row_cond > 0){
			 $(new_row2).insertBefore("#tbl_SaleBenefit_OL tbody>tr:first");
		 }else{
			 $("#tbl_SaleBenefit_OL tbody").append(new_row2);
		 }
			
	 }else{
		 
		 if(type == "E"){
			 var num_main = $("#tbl_SaleBenefit_OL tbody>tr[data-main='"+main_cov+"']").length;
			 
			 if(num_main > 0){
				 $(new_row2).insertAfter("#tbl_SaleBenefit_OL tbody>tr[data-main='"+main_cov+"']:last"); 
			 }else{
				 
				 var main_data_id = $("#tbl_SaleBenefit_OL tbody>tr[data-key='"+main_cov+"']").attr("data-id");
				 var num_child_main = $("#tbl_SaleBenefit_OL tbody>tr[data-parent='"+main_data_id+"']").length;
				 
				 if(num_child_main > 0){
					 $(new_row2).insertAfter("#tbl_SaleBenefit_OL tbody>tr[data-parent='"+main_data_id+"']:last");
				 }else{
					 $(new_row2).insertAfter("#tbl_SaleBenefit_OL tbody>tr[data-key='"+main_cov+"']");
				 }
				 
			 }
			 
			 
		 }else{
			 $("#tbl_SaleBenefit_OL tbody").append(new_row2);
		 }
		
	 }
	 
	//renew id
	 renew_TabSaleBenefitCond_OL();

	 
	 if(type == "B"){
		 jQuery("#datefrom_saleBnf_cond1, #dateto_saleBnf_cond1").datetimepicker({
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
			
		jQuery("#datefrom_saleBnf_cond1, #dateto_saleBnf_cond1").on("mouseenter mouseleave", function(e){
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

/*ดึงข้อมูลใน product เฉพาะ tab basic*/
function getData_TabBasic_PR_OL(prd_code_rider){
	
	var json_data = {
			"method" : "getBasicInfo_PR",
			"prd_code" : prd_code_rider
	}
	$.ajax({
		url: 'ProductBasePlanOL_GetData_Servlet',
		type: "POST",
		data: json_data,
		async: false,
		success: function (response) {
			
			var obj_PR = response.Tab_Basic_Information[0].rider[0]
			if(obj_PR){
				if(obj_PR.pm_rate.length > 0){
					var changeFileModal 			= "";
					var getShowFileRiderRMRate = 'openFileTextProduct_OL("'+obj_PR.pm_rate[0].filename+'", "'+obj_PR.pm_rate[0].ref+'", 41,"tb_input_fileSee_modal_pmRate_OL","modal_input_fileSee_PMRate_OL")';
					var getDownloadFileRiderPMRate = 'openFile_target("'+obj_PR.pm_rate[0].filename+'","'+obj_PR.pm_rate[0].ref+'","txt_download")';
					
					$("#tb_Additional_contract_OL tbody>tr[data-level='1']").each(function(){
						var row_id = $(this).attr('id')
							row_id = row_id.replace("tr_Additional_contract_","")
							if( $(this).find('td:nth-child(3) #prd_code_rider_'+row_id).val() == obj_PR.prd_code){
								$(this).find('td:nth-child(7) #fileId_rider_PM'+row_id).val(obj_PR.pm_rate[0].fileID)
								$(this).find('td:nth-child(7) #rate_cat_id_rider_PM'+row_id).val(obj_PR.pm_rate[0].rate_cat_id)
								$(this).find('td:nth-child(7) #rate_layout_id_rider_PM'+row_id).val(obj_PR.pm_rate[0].rate_layout_id)
								$(this).find('td:nth-child(7) #ip_fileuploads_OL_Additional_contract_Show_'+row_id).val(obj_PR.pm_rate[0].filename)
								
								$("#span_Additional_contractopen_"+row_id).find('span').removeClass('activecolorgray').addClass('activecolorblue')
								$("#span_Additional_contractdownload_"+row_id).find('span').removeClass('activecolorgray').addClass('activecolorblue')
								$("#span_Additional_contractopen_"+row_id).find('span').attr("onclick",getShowFileRiderRMRate)
								$("#span_Additional_contractdownload_"+row_id).find('span').attr("onclick",getDownloadFileRiderPMRate)
							}
					})
				}
			}
			
		},
		error: function(){
			alert("fail")
		}
	});
	console.log(json_data);
	
	
}

function getData_TabSaleBenefit_PR_OL(response){

	var obj = response.GetSalesBenefits[0];

	if(obj.sel_benefits2.length > 0){
		//$("#tbl_benefit_sale_ol tbody>tr").remove();
		var rowChild1 = 1;
		var rowChild2 = 1;
		var j = 0;
		
		for(i in obj.sel_benefits2){
			var new_row = "";
			var obj_bnf = obj.sel_benefits2[i];
			var is_ref_base_main = obj.sel_benefits2[0].is_ref_base;
			var is_ref_base = obj_bnf.is_ref_base;
			var eff_data = obj_bnf.eff_data;
			var exp_data = obj_bnf.exp_data;
			var serie_no = obj_bnf.serie_no;
			var serie_no_first = obj.sel_benefits2[0].serie_no;
			var year1 = obj_bnf.year1;
			var year2 = obj_bnf.year2;
			var year3 = obj_bnf.year3;
			var year4 = obj_bnf.year4;
			var credit = obj_bnf.credit;
			var overrid = obj_bnf.overrid;
			var advance = obj_bnf.advance;
			var mkt_Inc = obj_bnf.mkt_Inc;
			var sale_volume = obj_bnf.saleValume;
			var mkt_Exp = obj_bnf.mkt_Exp;
			var seq = obj_bnf.seq;
			var cov_code = obj_bnf.cov_code;
			var prd_code = obj_bnf.prd_code;
			
			//alert(prd_code);
			
			var level = "";
			var new_row_id = "";
			var enable_date = "";
			var checked_isBase = "";
			var disabledAll = "";
			
			var num_child = $("#tbl_SaleBenefitNormal_OL tbody>tr[data-parent='"+serie_no_first+"']").length;
			var last_child = "";
			
			if(num_child > 0){
				last_child = $("#tbl_SaleBenefitNormal_OL tbody>tr[data-parent='"+serie_no_first+"']:last").data("id");
				last_child = Number(last_child.replace(serie_no_first+"_",""))+1;
			}else{
				last_child = 1;
			}
			
			$("#tbl_SaleBenefitNormal_OL tbody>tr[data-level='1']").each(function(){
				
				var this_prd_code = $(this).find("td:nth-child(1) #prd_rider_code_OL").val();
				
				var this_id = $(this).attr("data-id");
				
				if((prd_code == this_prd_code) && serie_no == 1){
					//console.log("code" +this_prd_code);
					if(is_ref_base_main == true){
						$(this).find("td:nth-child(2) input").prop("checked", true);	
					}else{
						$(this).find("td:nth-child(2) input").prop("checked", false);
					}
					//console.log("tr>>" +this_id);
					//console.log("date>>" +eff_data);
					$(this).find("td:nth-child(5) input").val(eff_data);
					$(this).find("td:nth-child(6) input").val(exp_data);
					$(this).find("td:nth-child(7) input").val(numberWithCommas(parseFloat(year1).toFixed(2)));
					$(this).find("td:nth-child(8) input").val(numberWithCommas(parseFloat(year2).toFixed(2)));
					$(this).find("td:nth-child(9) input").val(numberWithCommas(parseFloat(year3).toFixed(2)));
					$(this).find("td:nth-child(10) input").val(numberWithCommas(parseFloat(year4).toFixed(2)));
					$(this).find("td:nth-child(11) input").val(numberWithCommas(parseFloat(credit).toFixed(2)));
					$(this).find("td:nth-child(12) input").val(numberWithCommas(parseFloat(overrid).toFixed(2)));
					$(this).find("td:nth-child(13) input").val(numberWithCommas(parseFloat(advance).toFixed(2)));
					$(this).find("td:nth-child(14) input").val(numberWithCommas(parseFloat(mkt_Inc).toFixed(2)));
					$(this).find("td:nth-child(15) input").val(numberWithCommas(parseFloat(sale_volume).toFixed(2)));
					$(this).find("td:nth-child(16) input").val(numberWithCommas(parseFloat(mkt_Exp).toFixed(2)));
					
					rowChild1 = 1;
				}else if((prd_code == this_prd_code) && serie_no == ""){
					j++;
					//new_row_id = serie_no_first+"_"+rowChild3;
					
					var group_id = $(this).attr("data-group");
					id_parent = $("#tbl_SaleBenefitNormal_OL tbody>tr[data-id='"+group_id+"']").attr('data-id');
				
					var cov_code_main = $("#tbl_SaleBenefitNormal_OL tbody>tr[data-id='"+group_id+"']").find("td:nth-child(1) label").text();
					
					if(group_id == 1){
						type = "B";
					}else{
						type = "R";
					}
					
					if(type == "B"){
						disabledAll = "";
					}else{
						disabledAll = "disabledAll";
					}
					

					var name_tr = "tr_saleBnf"+id_parent+"_"+rowChild1;
					var new_row_id = id_parent+"_"+rowChild1;
					var new_row = "<tr id='tr_saleBnf"+new_row_id+"' data-id='"+new_row_id+"' data-parent='"+id_parent+"' data-level='2' data-group='"+id_parent+"'>"+
					 	"<td class=\'text-center verticalCenter\'  class=\'text-center verticalCenter\'>"+
					 	"<input type='hidden' id='cov_type_OL' value='"+type+"'>"+
						"<input type='hidden' id='prd_rider_code_OL' value='"+prd_code+"'>"+
						"<input type='hidden' id='seq_OL' value='"+seq+"'>"+
					 	"</td>"+
					 	"<td class=\'text-center verticalCenter\'  class=\'text-center verticalCenter\'></td>"+
						"<td class=\'text-center verticalCenter\'  class=\'text-center verticalCenter\'>-</td>"+
						"<td class=\"text-center verticalCenter\">"+
						"<i class=\"glyphicon glyphicon-minus icon-blue-circle icon_active "+disabledAll+"\"  data-id=\'"+new_row_id+"\' id=\"removerow_OL_"+new_row_id+"\" onclick='removeRow_OL(this);'></i>"+
						"</td>"+
						"<td class='text-center'><input type='text' class='form-control format_date "+disabledAll+"' id='datefrom_saleBnf"+new_row_id+"' onblur='' placeholder='dd/mm/yyyy' value='' maxlength='10' disabled></td>"+
						"<td class='text-center'><input type='text' class='form-control format_date "+disabledAll+"' id='dateto_saleBnf"+new_row_id+"' onblur='checkdateTo_OL(this.id);' placeholder='dd/mm/yyyy' maxlength='10' disabled></td>"+	
						"<td class=\'text-right verticalCenter\'>"+
						"<input type='text' class='auto text-right form-control' id='txb_year1_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99' disabled>" +
						"</td>"+
						"<td class=\'text-right verticalCenter\'>"+
						"<input type='text' class='auto text-right form-control' id='txb_year2_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99' disabled>" +
						"</td>"+
						"<td class=\'text-right verticalCenter\'>"+
						"<input type='text' class='auto text-right form-control'  id='txb_year3_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99' disabled>" +
						"</td>"+
						"<td class=\'text-right verticalCenter\'>"+
						"<input type='text' class='auto text-right form-control' id='txb_year4_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99' disabled>" +
						"</td>"+
						"<td class=\'text-right verticalCenter\'>"+
						"<input type='text' class='auto text-right form-control' id='txb_credit_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99' disabled>" +
						"</td>"+
						"<td class=\'text-right verticalCenter\'>"+
						"<input type='text' class='auto text-center form-control' id='txb_override_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99' disabled>" +
						"</td>"+
						"<td class=\'text-right verticalCenter\'>"+
						"<input type='text' class='auto text-center form-control' id='txb_comm_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99' disabled>" +
						"</td>"+
						"<td class=\'text-right verticalCenter\'>"+
						"<input type='text' class='auto text-center form-control' id='txb_incentive_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99' disabled>" +
						"</td>"+
						"<td class=\'text-right verticalCenter\'>"+
						"<input type='text' class='auto text-center form-control' id='txb_bonus_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99' disabled>" +
						"</td>"+
						"<td class=\'text-right verticalCenter\'>"+
						"<input type='text' class='auto text-center form-control' id='txb_expense_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99' disabled>" +
						"</td>"+
						"</tr>";	
						//console.log(new_row);
						
						//$(new_row).insertAfter($("#tb_Calculate_insurance_OL>tbody>tr[data-parent="+id_parent+"]:last").closest('tr'));
						
						var num_child = $("#tbl_SaleBenefitNormal_OL>tbody>tr[data-parent="+id_parent+"]").length;
						if(num_child > 0){
							$(new_row).insertAfter($("#tbl_SaleBenefitNormal_OL>tbody>tr[data-parent="+id_parent+"]:last").closest('tr'));
						}else{
							$(new_row).insertAfter($("#tbl_SaleBenefitNormal_OL>tbody>tr[data-id="+id_parent+"]").closest('tr'));
						}
						
						$("#tr_saleBnf"+new_row_id+"").find("td:nth-child(5) input").val(eff_data);
						$("#tr_saleBnf"+new_row_id+"").find("td:nth-child(6) input").val(exp_data);
						$("#tr_saleBnf"+new_row_id+"").find("td:nth-child(7) input").val(numberWithCommas(parseFloat(year1).toFixed(2)));
						$("#tr_saleBnf"+new_row_id+"").find("td:nth-child(8) input").val(numberWithCommas(parseFloat(year2).toFixed(2)));
						$("#tr_saleBnf"+new_row_id+"").find("td:nth-child(9) input").val(numberWithCommas(parseFloat(year3).toFixed(2)));
						$("#tr_saleBnf"+new_row_id+"").find("td:nth-child(10) input").val(numberWithCommas(parseFloat(year4).toFixed(2)));
						$("#tr_saleBnf"+new_row_id+"").find("td:nth-child(11) input").val(numberWithCommas(parseFloat(credit).toFixed(2)));
						$("#tr_saleBnf"+new_row_id+"").find("td:nth-child(12) input").val(numberWithCommas(parseFloat(overrid).toFixed(2)));
						$("#tr_saleBnf"+new_row_id+"").find("td:nth-child(13) input").val(numberWithCommas(parseFloat(advance).toFixed(2)));
						$("#tr_saleBnf"+new_row_id+"").find("td:nth-child(14) input").val(numberWithCommas(parseFloat(mkt_Inc).toFixed(2)));
						$("#tr_saleBnf"+new_row_id+"").find("td:nth-child(15) input").val(numberWithCommas(parseFloat(sale_volume).toFixed(2)));
						$("#tr_saleBnf"+new_row_id+"").find("td:nth-child(16) input").val(numberWithCommas(parseFloat(mkt_Exp).toFixed(2)));

						rowChild1++;
				}
				
			});
			
			//มีเงื่อนไข
			$("#tbl_SaleBenefit_OL tbody>tr[data-level='1']").each(function(){
				
				var this_prd_code = $(this).find("td:nth-child(1) #prd_rider_code_cond_OL").val();
				
				var this_id = $(this).attr("data-id");
				
				if((prd_code == this_prd_code) && serie_no == 1){
					//console.log("code" +this_prd_code);
					if(is_ref_base_main == true){
						$(this).find("td:nth-child(2) input").prop("checked", true);	
					}else{
						$(this).find("td:nth-child(2) input").prop("checked", false);
					}
					//console.log("tr>>" +this_id);
					//console.log("date>>" +eff_data);
					$(this).find("td:nth-child(5) input").val(eff_data);
					$(this).find("td:nth-child(6) input").val(exp_data);
					$(this).find("td:nth-child(7) input").val(numberWithCommas(parseFloat(year1).toFixed(2)));
					$(this).find("td:nth-child(8) input").val(numberWithCommas(parseFloat(year2).toFixed(2)));
					$(this).find("td:nth-child(9) input").val(numberWithCommas(parseFloat(year3).toFixed(2)));
					$(this).find("td:nth-child(10) input").val(numberWithCommas(parseFloat(year4).toFixed(2)));
					$(this).find("td:nth-child(11) input").val(numberWithCommas(parseFloat(credit).toFixed(2)));
					$(this).find("td:nth-child(12) input").val(numberWithCommas(parseFloat(overrid).toFixed(2)));
					$(this).find("td:nth-child(13) input").val(numberWithCommas(parseFloat(advance).toFixed(2)));
					$(this).find("td:nth-child(14) input").val(numberWithCommas(parseFloat(mkt_Inc).toFixed(2)));
					$(this).find("td:nth-child(15) input").val(numberWithCommas(parseFloat(sale_volume).toFixed(2)));
					$(this).find("td:nth-child(16) input").val(numberWithCommas(parseFloat(mkt_Exp).toFixed(2)));
					
					rowChild2 = 1;
				}else if((prd_code == this_prd_code) && serie_no == ""){
					j++;
					//new_row_id = serie_no_first+"_"+j;
					
					var group_id = $(this).attr("data-group");
					id_parent = $("#tbl_SaleBenefit_OL tbody>tr[data-id='"+group_id+"']").attr('data-id');
				
					var cov_code_main = $("#tbl_SaleBenefit_OL tbody>tr[data-id='"+group_id+"']").find("td:nth-child(1) label").text();
					
					if(group_id == 1){
						type = "B";
					}else{
						type = "R";
					}
					
					var name_tr = "tr_saleBnf_cond"+id_parent+"_"+rowChild2;
					var new_row_id = id_parent+"_"+rowChild2;
					var new_row = "<tr id='tr_saleBnf_cond"+new_row_id+"' data-id='"+new_row_id+"' data-parent='"+id_parent+"' data-parentId='"+prd_code+"' data-level='2' data-group='"+id_parent+"'>"+
					 	"<td class=\'text-center verticalCenter\'  class=\'text-center verticalCenter\'>"+
					 	"<input type='hidden' id='cov_type_cond_OL' value='"+type+"'>"+
						"<input type='hidden' id='prd_rider_code_cond_OL' value='"+prd_code+"'>"+
						"<input type='hidden' id='seq_cond_OL' value='"+seq+"'>"+
						"<input type='hidden' id='serie_cond_OL' value=''>"+
					 	"</td>"+
					 	"<td class=\'text-center verticalCenter\'  class=\'text-center verticalCenter\'></td>"+
						"<td class=\'text-center verticalCenter\'  class=\'text-center verticalCenter\'>-</td>"+
						"<td class=\"text-center verticalCenter\">"+
						"<i class=\"glyphicon glyphicon-minus icon-blue-circle icon_active disabledAll\"  data-id=\'"+new_row_id+"\' id=\"removerow_OL_"+new_row_id+"\" onclick='removeRow_OL(this);'></i>"+
						"</td>"+
						"<td class='text-center'><input type='text' class='form-control format_date disabledAll' id='datefrom_saleBnf_cond"+new_row_id+"' onblur='' placeholder='dd/mm/yyyy' value='' maxlength='10' disabled></td>"+
						"<td class='text-center'><input type='text' class='form-control format_date disabledAll' id='dateto_saleBnf_cond"+new_row_id+"' onblur='checkdateTo_OL(this.id);' placeholder='dd/mm/yyyy' maxlength='10' disabled></td>"+	
						"<td class=\'text-right verticalCenter\'>"+
						"<input type='text' class='auto text-right form-control' id='txb_year1_cond_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99' disabled>" +
						"</td>"+
						"<td class=\'text-right verticalCenter\'>"+
						"<input type='text' class='auto text-right form-control' id='txb_year2_cond_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99' disabled>" +
						"</td>"+
						"<td class=\'text-right verticalCenter\'>"+
						"<input type='text' class='auto text-right form-control'  id='txb_year3_cond_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99' disabled>" +
						"</td>"+
						"<td class=\'text-right verticalCenter\'>"+
						"<input type='text' class='auto text-right form-control' id='txb_year4_cond_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99' disabled>" +
						"</td>"+
						"<td class=\'text-right verticalCenter\'>"+
						"<input type='text' class='auto text-right form-control' id='txb_credit_cond_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99' disabled>" +
						"</td>"+
						"<td class=\'text-right verticalCenter\'>"+
						"<input type='text' class='auto text-center form-control' id='txb_override_cond_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99' disabled>" +
						"</td>"+
						"<td class=\'text-right verticalCenter\'>"+
						"<input type='text' class='auto text-center form-control' id='txb_comm_cond_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99' disabled>" +
						"</td>"+
						"<td class=\'text-right verticalCenter\'>"+
						"<input type='text' class='auto text-center form-control' id='txb_incentive_cond_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99' disabled>" +
						"</td>"+
						"<td class=\'text-right verticalCenter\'>"+
						"<input type='text' class='auto text-center form-control' id='txb_bonus_cond_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99' disabled>" +
						"</td>"+
						"<td class=\'text-right verticalCenter\'>"+
						"<input type='text' class='auto text-center form-control' id='txb_expense_cond_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99' disabled>" +
						"</td>"+
						"</tr>";	
						//console.log(new_row);
						
						//$(new_row).insertAfter($("#tb_Calculate_insurance_OL>tbody>tr[data-parent="+id_parent+"]:last").closest('tr'));
						
						var num_child = $("#tbl_SaleBenefit_OL>tbody>tr[data-parent="+id_parent+"]").length;
						if(num_child > 0){
							$(new_row).insertAfter($("#tbl_SaleBenefit_OL>tbody>tr[data-parent="+id_parent+"]:last").closest('tr'));
						}else{
							$(new_row).insertAfter($("#tbl_SaleBenefit_OL>tbody>tr[data-id="+id_parent+"]").closest('tr'));
						}
						
						$("#tr_saleBnf_cond"+new_row_id+"").find("td:nth-child(5) input").val(eff_data);
						$("#tr_saleBnf_cond"+new_row_id+"").find("td:nth-child(6) input").val(exp_data);
						$("#tr_saleBnf_cond"+new_row_id+"").find("td:nth-child(7) input").val(numberWithCommas(parseFloat(year1).toFixed(2)));
						$("#tr_saleBnf_cond"+new_row_id+"").find("td:nth-child(8) input").val(numberWithCommas(parseFloat(year2).toFixed(2)));
						$("#tr_saleBnf_cond"+new_row_id+"").find("td:nth-child(9) input").val(numberWithCommas(parseFloat(year3).toFixed(2)));
						$("#tr_saleBnf_cond"+new_row_id+"").find("td:nth-child(10) input").val(numberWithCommas(parseFloat(year4).toFixed(2)));
						$("#tr_saleBnf_cond"+new_row_id+"").find("td:nth-child(11) input").val(numberWithCommas(parseFloat(credit).toFixed(2)));
						$("#tr_saleBnf_cond"+new_row_id+"").find("td:nth-child(12) input").val(numberWithCommas(parseFloat(overrid).toFixed(2)));
						$("#tr_saleBnf_cond"+new_row_id+"").find("td:nth-child(13) input").val(numberWithCommas(parseFloat(advance).toFixed(2)));
						$("#tr_saleBnf_cond"+new_row_id+"").find("td:nth-child(14) input").val(numberWithCommas(parseFloat(mkt_Inc).toFixed(2)));
						$("#tr_saleBnf_cond"+new_row_id+"").find("td:nth-child(15) input").val(numberWithCommas(parseFloat(sale_volume).toFixed(2)));
						$("#tr_saleBnf_cond"+new_row_id+"").find("td:nth-child(16) input").val(numberWithCommas(parseFloat(mkt_Exp).toFixed(2)));

						rowChild2++;
				}
				
			});
				
		}

		$('.auto').autoNumeric('init');
		
		/*jQuery(".format_date").datetimepicker({
			  timepicker:false,
			  format:'d/m/Y',
			  yearOffset:543 
		});*/
		
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
			
		/*jQuery('.format_date').on("mouseenter mouseleave", function(e){
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
		});*/
	}
}

function add_row_saleBnf_OL(row){
	
	var dataId = $(row).data('id');
	var num_child = $("#tbl_SaleBenefitNormal_OL tbody>tr[data-parent='"+dataId+"']").length;
	var last_row = "";
	var type = $("#tbl_SaleBenefitNormal_OL tbody>tr[data-id='"+dataId+"']").find("td:nth-child(1) #cov_type_OL").val();
	var prd_code = $("#tbl_SaleBenefitNormal_OL tbody>tr[data-id='"+dataId+"']").find("td:nth-child(1) #prd_rider_code_OL").val();
	var numrow_seq = $("#tbl_SaleBenefitNormal_OL tbody>tr[data-group='"+dataId+"']:last").length;
	var seq = "";
	
	if(type == "B"){
		if(numrow_seq > 0){
			seq = Number($("#tbl_SaleBenefitNormal_OL tbody>tr[data-group='"+dataId+"']:last").find("td:nth-child(1) #seq_OL").val())+1;
		}else{
			seq = 1;
		}
	}else{
		seq = 1;
	}
	
	if(num_child > 0){
		last_row = $("#tbl_SaleBenefitNormal_OL tbody>tr[data-parent='"+dataId+"']:last").data("id") || 0;
		last_row = Number(last_row.replace(dataId+"_",""))+1;
	}else{
		last_row = 1;
	}
	
	var new_row_id = dataId+"_"+last_row;

	var end_date = $("#tbl_SaleBenefitNormal_OL tbody>tr[data-group='"+dataId+"']:last").find("td:nth-child(6) input").val(); 
	var start_date = $("#tbl_SaleBenefitNormal_OL tbody>tr[data-group='"+dataId+"']:last").find("td:nth-child(5) input").val(); 
	//var last_end_date = $('#tbl_benefit_sale_ol tbody>tr:last-child').find("td:nth-child(5) input").val();
	var str_end_date = end_date;
	end_date = end_date.split("/").reverse();
	var tomorrow = new Date(end_date);
	tomorrow.setDate(tomorrow.getDate() + 1);
//	console.log("end_date",end_d)
	
	if(end_date != "" && start_date != "" ){

		var today = new Date(tomorrow);
		var dd = today.getDate();
		var mm = today.getMonth() + 1; //January is 0!

		var yyyy = today.getFullYear();
		if (dd < 10) {
		  dd = '0' + dd;
		} 
		if (mm < 10) {
		  mm = '0' + mm;
		} 
		var today = dd + '/' + mm + '/' + yyyy;
		
		var new_row = "";
		 new_row = "<tr id='tr_saleBnf"+new_row_id+"' data-id='"+new_row_id+"' data-parent='"+dataId+"' data-level='2' data-group='"+dataId+"'>"+
		 	"<td class=\'text-center verticalCenter\'  class=\'text-center verticalCenter\'>"+
		 	"<input type='hidden' id='cov_type_OL' value='"+type+"'>"+
			"<input type='hidden' id='prd_rider_code_OL' value='"+prd_code+"'>"+
			"<input type='hidden' id='seq_OL' value='"+seq+"'>"+
		 	"</td>"+
		 	"<td class=\'text-center verticalCenter\'  class=\'text-center verticalCenter\'></td>"+
			"<td class=\'text-center verticalCenter\'  class=\'text-center verticalCenter\'>-</td>"+
			"<td class=\"text-center verticalCenter\">"+
			"<i class=\"glyphicon glyphicon-minus icon-blue-circle icon_active \"  data-id=\'"+new_row_id+"\' id=\"removerow_OL_"+new_row_id+"\" onclick='removeRow_OL(this);'></i>"+
			"</td>"+
			"<td class='text-center'><input type='text' class='form-control format_date disabledAll' id='datefrom_saleBnf"+new_row_id+"' onblur='' placeholder='dd/mm/yyyy' value='"+today+"' maxlength='10' disabled></td>"+
			"<td class='text-center'><input type='text' class='form-control format_date' id='dateto_saleBnf"+new_row_id+"' onblur='checkdateTo_OL(this.id); checkEndDateTo_OL(this);' placeholder='dd/mm/yyyy' maxlength='10' readonly></td>"+	
			"<td class=\'text-right verticalCenter\'>"+
			"<input type='text' class='auto text-right form-control' id='txb_year1_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max=999.99>" +
			"</td>"+
			"<td class=\'text-right verticalCenter\'>"+
			"<input type='text' class='auto text-right form-control' id='txb_year2_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99'>" +
			"</td>"+
			"<td class=\'text-right verticalCenter\'>"+
			"<input type='text' class='auto text-right form-control'  id='txb_year3_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99'>" +
			"</td>"+
			"<td class=\'text-right verticalCenter\'>"+
			"<input type='text' class='auto text-right form-control' id='txb_year4_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99'>" +
			"</td>"+
			"<td class=\'text-right verticalCenter\'>"+
			"<input type='text' class='auto text-right form-control' id='txb_credit_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99'>" +
			"</td>"+
			"<td class=\'text-right verticalCenter\'>"+
			"<input type='text' class='auto text-center form-control' id='txb_override_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99'>" +
			"</td>"+
			"<td class=\'text-right verticalCenter\'>"+
			"<input type='text' class='auto text-center form-control' id='txb_comm_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99'>" +
			"</td>"+
			"<td class=\'text-right verticalCenter\'>"+
			"<input type='text' class='auto text-center form-control' id='txb_incentive_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99'>" +
			"</td>"+
			"<td class=\'text-right verticalCenter\'>"+
			"<input type='text' class='auto text-center form-control' id='txb_bonus_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99'>" +
			"</td>"+
			"<td class=\'text-right verticalCenter\'>"+
			"<input type='text' class='auto text-center form-control' id='txb_expense_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99'>" +
			"</td>"+
			"</tr>";	

		 if(end_date == ""){
				message = "กรุณาใส่วันที่เริ่มต้น และวันที่สิ้นสุด";
				alertError(message);
		 }
		 else if(str_end_date == "31/12/9999"){
			 	message = "กรุณาเปลี่ยนวันที่สิ้นสุด";
				alertError(message);
		 }
		 else{
			if(num_child > 0){
				$(new_row).insertAfter($("#tbl_SaleBenefitNormal_OL"+">tbody>tr[data-parent="+dataId+"]:last").closest('tr'));
			}else{
				$(new_row).insertAfter($("#tbl_SaleBenefitNormal_OL"+">tbody>tr[data-id="+dataId+"]:last").closest('tr'));
			}
			
			$('.auto').autoNumeric('init');
		 }

	}else{
		message = "กรุณาใส่วันที่เริ่มต้น และวันที่สิ้นสุด";
		alertError(message);
	}
	
	
	/*jQuery(".format_date").datetimepicker({
		  timepicker:false,
		  format:'d/m/Y',
		  yearOffset:543 
		  

	}); */

	var year_end = new Date().getFullYear();
	year_end = 9999 - 543;
	
	console.log("end>> "+year_end);
	
	jQuery("#tr_saleBnf"+new_row_id+" td:nth-child(6) input").datetimepicker({
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
		
	jQuery("#tr_saleBnf"+new_row_id+" td:nth-child(6) input").on("mouseenter mouseleave", function(e){
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

function add_row_saleBnf_cond_OL(row){

	var dataId = $(row).data('id');
	var num_child = $("#tbl_SaleBenefit_OL tbody>tr[data-parent='"+dataId+"']").length;
	var last_row = "";
	var type = $("#tbl_SaleBenefit_OL tbody>tr[data-id='"+dataId+"']").find("td:nth-child(1) #cov_type_cond_OL").val();
	var prd_code = $("#tbl_SaleBenefit_OL tbody>tr[data-id='"+dataId+"']").find("td:nth-child(1) #prd_rider_code_cond_OL").val();
	var main_code = $("#tbl_SaleBenefit_OL tbody>tr[data-id='"+dataId+"']").find("td:nth-child(1) label").text();
	var numrow_seq = $("#tbl_SaleBenefit_OL tbody>tr[data-group='"+dataId+"']:last").length;
	var seq = "";
	var serie_name = $("#tbl_SaleBenefit_OL tbody>tr[data-id='"+dataId+"']").find("td:nth-child(3) label").text();
	var serie_no = $("#tbl_SaleBenefit_OL tbody>tr[data-id='"+dataId+"']").find("td:nth-child(1) #serie_cond_OL").val();
	
	if(type == "B"){
		if(numrow_seq > 0){
			seq = Number($("#tbl_SaleBenefit_OL tbody>tr[data-group='"+dataId+"']:last").find("td:nth-child(1) #seq_cond_OL").val())+1;
		}else{
			seq = 1;
		}
	}else{
		seq = 1;
	}
	
	if(num_child > 0){
		last_row = $("#tbl_SaleBenefit_OL tbody>tr[data-parent='"+dataId+"']:last").data("id") || 0;
		last_row = Number(last_row.replace(dataId+"_",""))+1;
	}else{
		last_row = 1;
	}
	
	var new_row_id = dataId+"_"+last_row;
	
	var end_date = $("#tbl_SaleBenefit_OL tbody>tr[data-group='"+dataId+"']:last").find("td:nth-child(6) input").val(); 
	var start_date = $("#tbl_SaleBenefit_OL tbody>tr[data-group='"+dataId+"']:last").find("td:nth-child(5) input").val(); 
	//var last_end_date = $('#tbl_benefit_sale_ol tbody>tr:last-child').find("td:nth-child(5) input").val();
	
	end_date = end_date.split("/").reverse();
	var tomorrow = new Date(end_date);
	tomorrow.setDate(tomorrow.getDate() + 1);
//	alert(end_date)
	
	if(end_date != "" && start_date != "" ){

		var today = new Date(tomorrow);
		var dd = today.getDate();
		var mm = today.getMonth() + 1; //January is 0!

		var yyyy = today.getFullYear();
		if (dd < 10) {
		  dd = '0' + dd;
		} 
		if (mm < 10) {
		  mm = '0' + mm;
		} 
		var today = dd + '/' + mm + '/' + yyyy;
		
		var new_row = "";
		 new_row = "<tr id='tr_saleBnf_cond"+new_row_id+"' data-id='"+new_row_id+"' data-parent='"+dataId+"' data-parentId='"+main_code+"' data-level='2' data-group='"+dataId+"'>"+
		 	"<td class=\'text-center verticalCenter\'  class=\'text-center verticalCenter\'>"+
		 	"<input type='hidden' id='cov_type_cond_OL' value='"+type+"'>"+
			"<input type='hidden' id='prd_rider_code_cond_OL' value='"+prd_code+"'>"+
			"<input type='hidden' id='seq_cond_OL' value='"+seq+"'>"+
			"<input type='hidden' id='serie_cond_OL' value='"+serie_no+"'>"+
		 	"</td>"+
		 	"<td class=\'text-center verticalCenter\'  class=\'text-center verticalCenter\'></td>"+
			"<td class=\'text-center verticalCenter\'  class=\'text-center verticalCenter\'><label>"+serie_name+"</label></td>"+
			"<td class=\"text-center verticalCenter\">"+
			"<i class=\"glyphicon glyphicon-minus icon-blue-circle icon_active \"  data-id=\'"+new_row_id+"\' id=\"removerow_cond_OL_"+new_row_id+"\" onclick='removeRow_cond_OL(this);'></i>"+
			"</td>"+
			"<td class='text-center'><input type='text' class='form-control format_date disabledAll' id='datefrom_saleBnf_cond"+new_row_id+"' onblur='' placeholder='dd/mm/yyyy' value='"+today+"' maxlength='10' disabled></td>"+
			"<td class='text-center'><input type='text' class='form-control format_date' id='dateto_saleBnf_cond"+new_row_id+"' onblur='checkdateTo_OL(this.id);' placeholder='dd/mm/yyyy' maxlength='10' readonly></td>"+	
			"<td class=\'text-right verticalCenter\'>"+
			"<input type='text' class='auto text-right form-control' id='txb_year1_cond_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max=999.99>" +
			"</td>"+
			"<td class=\'text-right verticalCenter\'>"+
			"<input type='text' class='auto text-right form-control' id='txb_year2_cond_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99'>" +
			"</td>"+
			"<td class=\'text-right verticalCenter\'>"+
			"<input type='text' class='auto text-right form-control'  id='txb_year3_cond_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99'>" +
			"</td>"+
			"<td class=\'text-right verticalCenter\'>"+
			"<input type='text' class='auto text-right form-control' id='txb_year4_cond_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99'>" +
			"</td>"+
			"<td class=\'text-right verticalCenter\'>"+
			"<input type='text' class='auto text-right form-control' id='txb_credit_cond_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99'>" +
			"</td>"+
			"<td class=\'text-right verticalCenter\'>"+
			"<input type='text' class='auto text-center form-control' id='txb_override_cond_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99'>" +
			"</td>"+
			"<td class=\'text-right verticalCenter\'>"+
			"<input type='text' class='auto text-center form-control' id='txb_comm_cond_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99'>" +
			"</td>"+
			"<td class=\'text-right verticalCenter\'>"+
			"<input type='text' class='auto text-center form-control' id='txb_incentive_cond_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99'>" +
			"</td>"+
			"<td class=\'text-right verticalCenter\'>"+
			"<input type='text' class='auto text-center form-control' id='txb_bonus_cond_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99'>" +
			"</td>"+
			"<td class=\'text-right verticalCenter\'>"+
			"<input type='text' class='auto text-center form-control' id='txb_expense_cond_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99'>" +
			"</td>"+
			"</tr>";	
		
		 
		 if(end_date == ""){
				message = "กรุณาใส่วันที่เริ่มต้น และวันที่สิ้นสุด";
				alertError(message);
		 }else{
			if(num_child > 0){
				$(new_row).insertAfter($("#tbl_SaleBenefit_OL"+">tbody>tr[data-parent="+dataId+"]:last").closest('tr'));
			}else{
				$(new_row).insertAfter($("#tbl_SaleBenefit_OL"+">tbody>tr[data-id="+dataId+"]:last").closest('tr'));
			}
			
			$('.auto').autoNumeric('init');
		 }

	}else{
		message = "กรุณาใส่วันที่เริ่มต้น และวันที่สิ้นสุด";
		alertError(message);
	}
	
	
	/*jQuery(".format_date").datetimepicker({
		  timepicker:false,
		  format:'d/m/Y',
		  yearOffset:543 
		  

	}); */
	
	var year_end = new Date().getFullYear();
	year_end = 9999 - 543;
	
	console.log("end>> "+year_end);
	
	jQuery("#tr_saleBnf_cond"+new_row_id+" td:nth-child(5) input, #tr_saleBnf_cond"+new_row_id+" td:nth-child(6) input").datetimepicker({
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
		
	jQuery("#tr_saleBnf_cond"+new_row_id+" td:nth-child(5) input, #tr_saleBnf_cond"+new_row_id+" td:nth-child(6) input").on("mouseenter mouseleave", function(e){
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

/*Other Function*/
$("#tb_YearCondition_OL tbody>tr td:nth-child(3) input, #tb_YearCondition_OL tbody>tr td:nth-child(5) input, #tb_YearCondition_OL tbody>tr td:nth-child(7) input").on("keypress keyup",function(){
    if($(this).val() == '0'){
      $(this).val('');  
    }
});

function checkZero_OL(e){
	var value = $(e).val();
	if(value == ""){
		$(e).val("0.00");
	}
}

function removeRow_OL(e){
	$(e).parent().parent().remove();
	var seq = 1;

	$("#tbl_SaleBenefitNormal_OL tbody>tr[data-parent='1']").each(function(){
		$(this).find("td:nth-child(1) #seq_OL").val(Number(seq)+1);
		$(this).attr("id","tr_saleBnf1_"+seq+"");
		$(this).attr("data-id","1_"+seq+"");
		seq++;
	});
	validate_table_SaleBenefitNormal_OL();
}

function validate_table_SaleBenefitNormal_OL() {
	var size_tbl_SaleBenefitNormal_OL = $("#tbl_SaleBenefitNormal_OL tbody>tr").length
	if(size_tbl_SaleBenefitNormal_OL > 1){
		$("#tbl_SaleBenefitNormal_OL tbody>tr").each(function(i){
			if(i != 0){
				var data_parent =  $(this).prev().closest("tr").find('td:nth-child(6) input[type="text"]').val()
				var data_present = $(this).find('td:nth-child(5) input[type="text"]').val()
				
				if(data_present != data_parent && "" != data_present && "" != data_parent){
					var split_data_parent = data_parent.split("/");
					var newDate = split_data_parent[1] + "/" + split_data_parent[0] + "/" + split_data_parent[2]
					var nextDay = new Date(new Date(newDate).getTime() + (1 * 24 * 60 * 60 * 1000));
					
					var d = nextDay.getDate();
					var m = nextDay.getMonth() + 1;
					var y = nextDay.getFullYear();
					
					$(this).find('td:nth-child(5) input[type="text"]').val(d + "/" + m + "/" + y);
				}
			}
		})
	}
}

function removeRow_cond_OL(e){
	//alert($(e).parent().parent().attr("data-group"));
	var parent = $(e).parent().parent().attr("data-group");
	
	$(e).parent().parent().remove();
	var seq = 1;
	
	
	$("#tbl_SaleBenefit_OL tbody>tr[data-parent='"+parent+"']").each(function(){
		$(this).find("td:nth-child(1) #seq_cond_OL").val(Number(seq)+1);
		$(this).attr("id","tr_saleBnf_cond"+parent+"_"+seq+"");
		$(this).attr("data-id",parent+"_"+seq);
		seq++;
	});
	
}

function checkdateTo_OL(e) {
	   var id = e.replace("dateto_saleBnf","");
	   var startDate = $("#datefrom_saleBnf"+id).val();
	   var endDate = $("#"+e).val();
	   debugger;
	   if (startDate != "" && endDate != "") {
	   	var startDate_parse = parseDate(startDate);
	       var endDate_parse = parseDate(endDate);
	   	//alert("start>>"+startDate_parse+" endDate>>"+endDate_parse);
	       if(startDate_parse > endDate_parse){
	       	message = "วันที่เริ่มต้องน้อยกว่าวันที่สิ้นสุดเสมอ";
	   		nameTab 	= "menu_OL_4";
	   		Statuesave = "N";
	   		alertError(message);
	   		$("#"+e).val("");
	       }
	   }
}

function checkEndDateTo_OL(e) {
	   var endDate = $(e).val();
	   var startDateFromNewRow = $(e).parent().parent().closest('tr').next('tr').find('td:nth-child(5) input[type="text"]').val();
	   var cRow = $(e).parent().parent().closest('tr').next('tr'); 

	   if ((startDateFromNewRow != "" && startDateFromNewRow != null) && endDate != "") {
	       var startDate_parse = parseDate(startDateFromNewRow);
	       var endDate_parse = parseDate(endDate);
	      
	       if(endDate_parse >= startDate_parse){
	       	message = "อายุสิ้นสุด จะต้องมีค่ามากกว่าอายุเริ่มต้นเสมอ กรุณาระบุใหม่";
	   		nameTab = "menu_OL_4";
	   		Statuesave = "N";
	   		alertError(message);
	   		$(e).val("");
	       }

	       if(endDate_parse < startDate_parse){
	    	   var splitStartDate = startDateFromNewRow.split("/");
	    	   var splitEndDate = endDate.split("/");
	    	   
	    	   var startDateForCompare = new Date(splitStartDate[1] + "/" + splitStartDate[0] + "/" + splitStartDate[2]);
	    	   var endDateForCompare = new Date(splitEndDate[1] + "/" + splitEndDate[0] + "/" + splitEndDate[2]);
	    	   var endDateForCompare2 = new Date(new Date(endDateForCompare).getTime() + (1 * 24 * 60 * 60 * 1000));

	    	   if(endDateForCompare2 < startDateForCompare){
	    			message = "อายุสิ้นสุด จะต้องมีค่ามากกว่าอายุเริ่มต้นเสมอ กรุณาระบุใหม่";
	    	   		nameTab = "menu_OL_4";
	    	   		Statuesave = "N";
	    	   		alertError(message);
	    	   		$(e).val(""); 
	    	   }
	       }
	   }
}



function addrowMenu3_OL(row) {
	var rowChild3 = 0;
	var rowChild_count = $("#tb_Calculate_insurance_OL tbody>tr[data-parent='"+row+"']").length || 0;
	var end_sa = $("#tb_Calculate_insurance_OL tbody>tr[data-group='"+row+"']:last").find('td:nth-child(5) input').val();
	var cov_code = 	$("#tb_Calculate_insurance_OL tbody>tr[data-group='"+row+"']:first").find('td:nth-child(1) label').text();
	var type = 	$("#tb_Calculate_insurance_OL tbody>tr[data-id='"+row+"']").find('td:nth-child(1) #type_OL').val();
	
	if(rowChild_count < 0){
		rowChild3 = 1;
	}else{
		rowChild3 = rowChild_count+1;
	}
	
	if( Number(replaceComma(end_sa)) >= 1 && Number(replaceComma(end_sa)) < 999999999.99){
		end_sa = Number(replaceComma(end_sa)) + 1
		///หน่วย
		var dropdownUnit = $("#hide_fixCovUnit_OL").val();
		///	ของ1
		var dropdownOF1 = $("#hide_fixCovFactor_OL").val();
		///	ของ2
		var dropdownOF2 = $("#hide_minCovFactor_OL").val();
	
		var prd_rider_code = $("#tb_Calculate_insurance_OL tbody>tr[data-id="+row+"]").find('td:nth-child(1) #prd_rider_code_OL').val();
		var name_tr 		= "tr_Calculate_insurance_OL_"+row+"_"+rowChild3;
		var removerowChild = 'removerowChild3_OL("'+name_tr+'");';
		var serie_no = Number(rowChild3) + Number(1);
		var new_row 		=  "<tr id=\"tr_Calculate_insurance_OL_"+row+"_"+rowChild3+"\" data-id=\""+row+"_"+rowChild3+"\" data-group='"+row+"' data-parent=\""+row+"\" data-level=\"2\">"+
						"<td width=\"14%\" class=\"text-center verticalCenter fontcolortable1 borderBlack\">"+
							"<input type='hidden' id='cov_code_OL' value='"+cov_code+"' >"+
							"<input type='hidden' id='prd_rider_code_OL' value='"+prd_rider_code+"' >"+
							"<input type='hidden' id='serie_no_OL' value='"+serie_no+"'>"+
							"<input type='hidden' id='seq_OL' value=''>"+
							"<input type='hidden' id='type_OL' value='"+type+"'>"+
							"<label>"+"</label>"+
						"</td>"+
						"<td width=\"7%\"class=\"text-center verticalCenter borderBlack\">" +
						"</td>"+
						"<td width=\"3%\" class=\"text-center verticalCenter borderBlack\">"+
							//"<i class=\"glyphicon glyphicon-plus-sign\"  data-id=\'"+numrow3+"\' data-topic=\'"+numrow3+"\' data-type=\'"+numrow3+"\' id=\"addrowMenu3_"+numrow3+"\" onclick=\"addrowMenu3("+numrow3+");\"></i>"+
							"<i class=\"glyphicon icon-blue-circle glyphicon-minus icon_active\"  data-id=\'"+rowChild3+"\' data-topic=\'"+rowChild3+"\' data-type=\'"+rowChild3+"\' id=\"removerow_OL_"+rowChild3+"\" onclick='"+removerowChild+"'></i>"+
							"</td>"+	
						"<td width=\"7%\"class=\"text-right verticalCenter borderBlack\">"+
						"<input type='text' class='autoComma form-control margin-padding0 text-center width40px' value='"+end_sa+"' data-v-min='0.00' data-v-max='999999999.99' disabled>"+
						"</td>"+
						"<td width=\"7%\" class=\"text-right verticalCenter borderBlack\">"+
						"<input type='text' class='autoComma form-control margin-padding0 text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999999999.99' onblur='validateMax_tbCal_OL(this); chkBlank_tbCal_OL(this);'>"+
						"</td>"+
						"<td width=\"7%\"class=\"text-right verticalCenter borderBlack\">"+
						"<input type='text' class='autoComma form-control margin-padding0 text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999999999.99' onblur='chkBlank_tbCal_OL(this); check_value_format_OL(1,this);'>"+
						"</td>"+
						"<td width=\"9%\" class=\"text-right verticalCenter borderBlack\">"+
							"<select class=\"form-control\" onchange='check_value_format_OL(2,this);'>"+dropdownUnit+"</select></td>"+
						"<td width=\"9%\" class=\"text-right verticalCenter borderBlack\">"+
							"<select class=\"form-control\">"+dropdownOF1+"</select></td>"+
						"<td width=\"7%\" class=\"text-right verticalCenter borderBlack\">"+
						"<input type='text' class='autoComma form-control margin-padding0 text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999999999.99' onblur='chkBlank_tbCal_OL(this);'>"+
						"<td width=\"9%\" class=\"text-right verticalCenter borderBlack\">"+
							"<select class=\"form-control\">"+dropdownOF2+"</select></td>"+	
						"<td width=\"7%\" class=\"text-right verticalCenter borderBlack\">"+
						"<input type='text' class='autoComma form-control margin-padding0 text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999999999.99' onblur='chkBlank_tbCal_OL(this);'>"+
						"<td width=\"9%\" class=\"text-right verticalCenter borderBlack\">"+
							"<select class=\"form-control\">"+dropdownOF2+"</select></td>"+
					"</tr>";			  
		
		if(rowChild_count > 0){
			$(new_row).insertAfter($("#tb_Calculate_insurance_OL"+">tbody>tr[data-parent="+row+"]:last").closest('tr'));
		}else{
			$(new_row).insertAfter($("#tb_Calculate_insurance_OL"+">tbody>tr[data-id="+row+"]").closest('tr'));
		}
		$(".autoComma").autoNumeric('init',{vMin: '0.00', vMax: '999999999.99'});
		
		var row_type = $("#tr_Calculate_insurance_OL_"+row+"_"+rowChild3+"").find("td:nth-child(1) #type_OL").val();
		if(row_type != "B"){
			$("#tr_Calculate_insurance_OL_"+row+"_"+rowChild3+"").find("td:nth-child(11) input").prop("disabled", true);
			$("#tr_Calculate_insurance_OL_"+row+"_"+rowChild3+"").find("td:nth-child(12) select").prop("disabled", true);
		}
		
	}else{
		message = "กรุณาใส่ค่าทุนชีวิตอ้างอิง (SA Life) สิ้นสุด";
		alertError(message);
	}
}

function removerowChild3_OL(value) {
	var data_parent = $("#"+value).attr("data-parent");
	
	$('#'+value).remove();

	var seq = 1;
	$("#tb_Calculate_insurance_OL tbody>tr[data-parent='"+data_parent+"']").each(function(){
		$(this).attr("id","tr_Calculate_insurance_OL_"+data_parent+"_"+seq+"");
		$(this).attr("data-id",data_parent+"_"+seq+"");
		$(this).find("td:nth-child(3) i").attr("data-id",seq);
		$(this).find("td:nth-child(3) i").attr("data-topic",seq);
		$(this).find("td:nth-child(3) i").attr("data-type",seq);
		$(this).find("td:nth-child(3) i").attr("id","removerow_OL_"+seq);
		$(this).find("td:nth-child(3) i").attr("onclick","removerowChild3_OL('tr_Calculate_insurance_OL_"+data_parent+"_"+seq+"');");
		seq++;
	});
	validate_tableCalculate_insurance_OL();
}

function validate_tableCalculate_insurance_OL(){
	
	var size_tbCalculate_insurance = $("#tb_Calculate_insurance_OL tbody>tr").length
	if(size_tbCalculate_insurance > 1){
		$("#tb_Calculate_insurance_OL tbody>tr").each(function(i){
			if(i != 0){
				var data_parent =  replaceComma($(this).prev().closest("tr").find('td:nth-child(5) input[type="text"]').val())
				var data_present = replaceComma($(this).find('td:nth-child(5) input[type="text"]').val())
				var td_4 = replaceComma($(this).find('td:nth-child(4) input[type="text"]').val())
				
				if(Number(data_present) != Number(data_parent) + 1 && td_4 != ""){
					$(this).find('td:nth-child(4) input[type="text"]').val(parseFloat(Number(data_parent) + 1).toFixed(2))
				}
			}
		})
	}
}

function validateMax_tbAmountTo_OL(e){
	
	var flag_validate_tableInsureRange = false;
	var start_data = replaceComma($(e).parent().parent().find('td:nth-child(2) input[type="text"]').val())
	var end_data = replaceComma($(e).parent().parent().find('td:nth-child(3) input[type="text"]').val())
	
	if(start_data != "" && end_data != ""){
		if(Number(start_data) >= Number(end_data)){
			$(e).val("");
			message = "กรุณากรอกข้อมุลให้ถูกต้อง"
			alertError(message);
			flag_validate_tableInsureRange = true;
		}
	}
	var length_tb = $("#tbl_insure_range_OL tbody>tr").length
	if(length_tb > 1){
		var future_endData = $(e).closest('tr').next().find('td:nth-child(3) input[type="text"]').val()
		if(future_endData != null){
			future_endData = replaceComma(future_endData)
			if(Number(end_data) >= Number(future_endData) || Number(end_data) == Number(future_endData) - 1){
				$(e).val("");
				message = "กรุณากรอกข้อมุลให้ถูกต้อง"
				alertError(message);
				flag_validate_tableInsureRange = true;
			}
		}
	}
	
	validate_input12_ol()
	if(!flag_validate_tableInsureRange){
		validate_tableInsureRange();
	}
}



function validateMin_tbCal_OL(e){
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

function validateMax_tbCal_OL(e){

	var value = replaceComma($(e).val());
	var min_value = replaceComma($(e).parent().parent().find('td:nth-child(4) input').val());
	var data_group = $(e).parent().parent().attr("data-group");
	
	//validate
	var next_value = $(e).closest("tr[data-group='"+data_group+"']").next("tr[data-group='"+data_group+"']").find("td:nth-child(4) input").val();
	
	if(next_value != undefined){
		var this_value = Number(next_value) - 1;
		console.log("next>> "+next_value);
		console.log("this>> "+this_value);
		
		if(Number(value) != Number(this_value)){
			$(e).val(this_value+".00");
			message = "กรุณากรอกข้อมุลให้ถูกต้อง"
			alertError(message);
		}
	}
	
	if(min_value == "" && value != ""){
		$(e).val("");
		message = "กรุณากรอกข้อมุลให้ถูกต้อง"
		alertError(message);
	}else if(min_value == 0 && value != 0){
		$(e).val("");
		message = "กรุณากรอกข้อมุลให้ถูกต้อง"
		alertError(message);
	}
	
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
}

function check_value_format_OL(type,e){
	//input key value
	if(type == 1){
		var value = replaceComma($(e).val());
		var dd_value = $(e).parent().parent().find("td:nth-child(7) select").val();
		
		if(dd_value == "CURRENCY"){
			if(Number(value) > 999999999.99){
				message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
				alertError(message);
				$(e).val("0.00");
			}
		}else if(dd_value == "PERCENT"){
			if(Number(value) > 999.99){
				message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
				alertError(message);
				$(e).val("0.00");
			}
		}
	
	//dropdown select value	
	}else if(type == 2){
		var value = $(e).val()
		var input_value = replaceComma($(e).parent().parent().find("td:nth-child(6) input").val());
		
		if(value == "CURRENCY"){
			if(Number(input_value) > 999999999.99){
				message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
				alertError(message);
				$(e).parent().parent().find("td:nth-child(6) input").val("0.00");
			}
		}else if(value == "PERCENT"){
			if(Number(input_value) > 999.99){
				message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
				alertError(message);
				$(e).parent().parent().find("td:nth-child(6) input").val("0.00");
			}
		}
	}
	
}

function change_unit_OL(e,col){
	
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
		if(Number(replaceComma($(e).parent().parent().find('td:nth-child('+col+') input[type="text"]').val())) > 999.99){
			$(e).parent().parent().find('td:nth-child('+col+') input[type="text"]').val("0.00");
		}
		$(e).parent().parent().find('td:nth-child('+col+') input[type="text"]').removeClass("autoComma-alone").addClass("autoPercent3-alone")
		$(e).parent().parent().find('td:nth-child('+col+') input[type="text"]').attr("data-v-max","999.99");
		$(e).parent().parent().find(".autoPercent3-alone").autoNumeric('init',{vMin: '0.00', vMax: '999.99'});
	}
}

function chkBlank_tbCal_OL(e){
	/*var value = replaceComma($(e).val());
	if(value == ""){
		$(e).val("0.00");
	}*/
}

/*4. ผลประโยชน์การขาย*/
function addRowSaleCondition_OL(){

	var num_row = $("#tb_YearCondition_OL tbody>tr").length;
	var new_id = "";
	
	if(num_row > 0){
		new_id = Number(num_row)+1;
	}else{
		new_id = 1;
	}
	var new_row = "<tr id='tr_YearCondition_OL"+new_id+"'>"+
			"<td class='text-center borderBlack' id='td_YearCondition_OL"+new_id+"' onclick='imgCheckbox(this.id);' style='vertical-align: middle;'>"+
				"<i class='glyphicon glyphicon-edit'></i>"+
			"</td>"+
			"<td class='borderBlack'>";
	
	if(new_id != 1){
		new_row += "<input id='Agefrom_OL"+new_id+"' class='auto form-control text-center margin-padding0' type='text' onkeypress='validate(event);' onblur='validateBeforeAge_OL(this); validateMinAge_OL(this);' data-v-min='0' data-v-max='99' maxlength='2'>";
	}else{
		new_row += "<input id='Agefrom_OL"+new_id+"' class='auto form-control text-center margin-padding0' type='text' onkeypress='validate(event);' onblur='validateMinAge_OL(this);' data-v-min='0' data-v-max='99' maxlength='2'>";
	}
	
		new_row +=	"</td>"+
			"<td class='borderBlack'>"+
				"<input id='Ageto_OL"+new_id+"' class='auto form-control text-center margin-padding0' type='text' onkeypress='validate(event);' onblur='validateMaxAge_OL(this);' data-v-min='0' data-v-max='99' maxlength='2'>"+
			"</td>"+
			"<td class='borderBlack'>";
		
	if(new_id != 1){
		new_row +=	"<input id='Sumfrom_OL"+new_id+"' class='auto text-right form-control margin-padding0' type='text' onkeypress='validate(event)' onblur='validateBeforeSum_OL(this); validateMinSum_OL(this);' data-v-min='0.00' data-v-max='999999999.99'>";
	}else{
		new_row +=	"<input id='Sumfrom_OL"+new_id+"' class='auto text-right form-control margin-padding0' type='text' onkeypress='validate(event);' onblur='validateMinSum_OL(this);' data-v-min='0.00' data-v-max='999999999.99'>";
	}
	
		new_row +=	"</td>"+
			"<td class='borderBlack'>"+
				"<input id='Sumto_OL"+new_id+"' class='auto text-right form-control margin-padding0' type='text' onkeypress='validate(event)' onblur='validateMaxSum_OL(this);' data-v-min='0.00' data-v-max='999999999.99'>"+
			"</td>"+
			"<td class='borderBlack'>";
		
	if(new_id != 1){
		new_row +=	"<input id='Periodfrom_OL"+new_id+"' class='auto form-control text-center margin-padding0' type='text' onkeypress='validate(event);' onblur='validateBeforePeriod_OL(this); validateMinPeriod_OL(this);' data-v-min='0' data-v-max='99' maxlength='2'>";
	}else{
		new_row +=	"<input id='Periodfrom_OL"+new_id+"' class='auto form-control text-center margin-padding0' type='text' onkeypress='validate(event);' onblur='validateMinPeriod_OL(this);' data-v-min='0' data-v-max='99' maxlength='2'>";
	}
	
		new_row += "</td>"+
			"<td class='borderBlack'>"+
				"<input id='Periodto_OL"+new_id+"' class='auto form-control text-center margin-padding0' type='text' onkeypress='validate(event);' onblur='validateMaxPeriod_OL(this);' data-v-min='0' data-v-max='99' maxlength='2'>"+
			"</td>"+
		"</tr>";
	
	$("#tb_YearCondition_OL tbody").append(new_row);

	if($("#ch_select_condition2_OL").prop("checked") == true){
		$("#tr_YearCondition_OL"+new_id+"").find("td:nth-child(2) input").prop("disabled", false);
		$("#tr_YearCondition_OL"+new_id+"").find("td:nth-child(3) input").prop("disabled", false);
	}else{
		$("#tr_YearCondition_OL"+new_id+"").find("td:nth-child(2) input").prop("disabled", true);
		$("#tr_YearCondition_OL"+new_id+"").find("td:nth-child(3) input").prop("disabled", true);
	}
	
	if($("#ch_select_condition3_OL").prop("checked") == true){
		$("#tr_YearCondition_OL"+new_id+"").find("td:nth-child(4) input").prop("disabled", false);
		$("#tr_YearCondition_OL"+new_id+"").find("td:nth-child(5) input").prop("disabled", false);
	}else{
		$("#tr_YearCondition_OL"+new_id+"").find("td:nth-child(4) input").prop("disabled", true);
		$("#tr_YearCondition_OL"+new_id+"").find("td:nth-child(5) input").prop("disabled", true);
	}
	
	if($("#ch_select_condition4_OL").prop("checked") == true){
		$("#tr_YearCondition_OL"+new_id+"").find("td:nth-child(6) input").prop("disabled", false);
		$("#tr_YearCondition_OL"+new_id+"").find("td:nth-child(7) input").prop("disabled", false);
	}else{
		$("#tr_YearCondition_OL"+new_id+"").find("td:nth-child(6) input").prop("disabled", true);
		$("#tr_YearCondition_OL"+new_id+"").find("td:nth-child(7) input").prop("disabled", true);
	}
	
	$('.auto').autoNumeric('init');
	
	/*เปิดปุ่ม delete*/
	var numrow = $("#tb_YearCondition_OL tbody>tr").length;
	if(numrow > 1){
		$("#deleteRowSale_OL").prop("disabled", false);
	}
	
	$("#tr_YearCondition_OL"+new_id+"").find("td:nth-child(3) input, td:nth-child(5) input, td:nth-child(7) input").on("keypress keyup",function(){
	    if($(this).val() == '0'){
	      $(this).val('');  
	    }
	});
	
}

function deleteRowSaleCondition_OL(){
	
	var imgOKcount = $("#tb_YearCondition_OL i.glyphicon-ok").length;
	if(imgOKcount <= 0)
	{	
		message = "กรุณาเลือกรายการที่ต้องการลบ";
		alertError(message);
	}else{
	
	message = "ต้องการลบรายการใช่หรือไม่";
	alertDeleteError(message);
	
	$("#btn_confirm_del").unbind();
	$("#btn_confirm_del").click(function(){
		var lastImgOK = $('#tb_YearCondition_OL>tbody>tr:last>td:first').attr("id") || 0;	
		var numberImgOK = 0;
		if(lastImgOK == 0){
			numberImgOK = 1;
		}else{
			numberImgOK = Number(lastImgOK.replace("td_YearCondition_OL",""))+1;
		}
		
			$('#tb_YearCondition_OL>tbody>tr').each(function(){
				var checked = $(this).find('td:nth-child(1) i').attr("class");
				if(checked == "glyphicon glyphicon-ok"){	
					deleteTableRow($(this));				
				}
			});
			
			/*gen new id*/
			var newid = 1;
			$('#tb_YearCondition_OL>tbody>tr').each(function(){
				$(this).attr("id", "tr_YearCondition_OL"+newid+"");
				$(this).find("td:nth-child(1)").attr("id", "td_YearCondition_OL"+newid+"");
				$(this).find("td:nth-child(2) input").attr("id", "Agefrom_OL"+newid+"");
				$(this).find("td:nth-child(3) input").attr("id", "Ageto_OL"+newid+"");
				$(this).find("td:nth-child(4) input").attr("id", "Sumfrom_OL"+newid+"");
				$(this).find("td:nth-child(5) input").attr("id", "Sumto_OL"+newid+"");
				$(this).find("td:nth-child(6) input").attr("id", "Periodfrom_OL"+newid+"");
				$(this).find("td:nth-child(7) input").attr("id", "Periodto_OL"+newid+"");
				newid++;
			});
			
			/*ปิดปุ่ม delete*/
			var numrow = $("#tb_YearCondition_OL tbody>tr").length;
			if(numrow == 1){
				$("#deleteRowSale_OL").prop("disabled", true);
			}
		
		});			
	
	}
}

function chk_salebnf_OL(){
	var count = 0;
	var count_cond = 0;
	
	$("#panel_SaleCondition_OL1 input:checkbox").each(function(){
		if($(this).prop("checked") == true){
			count++;

			if($(this).val() == "AGE" || $(this).val() == "CAPITAL" || $(this).val() == "TERM"){
				count_cond++;
			}
		}
	});
	
	//console.log("count>> "+count);
	if(count > 0){
		$("#btn_generate_series_OL").prop("disabled", false);
	}else{
		$("#btn_generate_series_OL").prop("disabled", true);
	}
	
	if(count_cond > 0){
		$("#addRowSale_OL").prop("disabled", false);
	}else{
		$("#addRowSale_OL").prop("disabled", true);
	}
}

function chk_salebnf_age_OL(key){
	
	var chk_age = $(key).prop("checked");
	if(chk_age == true){
		$("#tb_YearCondition_OL tbody td:nth-child(2) input").prop("disabled", false);
		$("#tb_YearCondition_OL tbody td:nth-child(3) input").prop("disabled", false);
	}else{
		$("#tb_YearCondition_OL tbody td:nth-child(2) input").prop("disabled", true).val("");
		$("#tb_YearCondition_OL tbody td:nth-child(3) input").prop("disabled", true).val("");
	}
	
	//remove row
	var chk_sum = $("#ch_select_condition3_OL").prop("checked");
	var chk_period = $("#ch_select_condition4_OL").prop("checked");
	
	if(chk_age == false && chk_sum == false && chk_period == false){
		$("#tb_YearCondition_OL tbody>tr").remove();
		addRowSaleCondition_OL();
		$("#deleteRowSale_OL").prop("disabled", true);
	}
}

function chk_salebnf_sum_OL(key){
	
	var chk_sum = $(key).prop("checked");
	if(chk_sum == true){
		$("#tb_YearCondition_OL tbody td:nth-child(4) input").prop("disabled", false);
		$("#tb_YearCondition_OL tbody td:nth-child(5) input").prop("disabled", false);		
	}else{
		$("#tb_YearCondition_OL tbody td:nth-child(4) input").prop("disabled", true).val("");
		$("#tb_YearCondition_OL tbody td:nth-child(5) input").prop("disabled", true).val("");
	}
	
	//remove row
	var chk_age = $("#ch_select_condition2_OL").prop("checked");
	var chk_period = $("#ch_select_condition4_OL").prop("checked");
	
	if(chk_age == false && chk_sum == false && chk_period == false){
		$("#tb_YearCondition_OL tbody>tr").remove();
		addRowSaleCondition_OL();
		$("#deleteRowSale_OL").prop("disabled", true);
	}
	
}

function chk_salebnf_period_OL(key){
	
	var chk_period = $(key).prop("checked");
	if(chk_period == true){
		$("#tb_YearCondition_OL tbody td:nth-child(6) input").prop("disabled", false);
		$("#tb_YearCondition_OL tbody td:nth-child(7) input").prop("disabled", false);		
	}else{
		$("#tb_YearCondition_OL tbody td:nth-child(6) input").prop("disabled", true).val("");
		$("#tb_YearCondition_OL tbody td:nth-child(7) input").prop("disabled", true).val("");
	}
	
	//remove row
	var chk_age = $("#ch_select_condition2_OL").prop("checked");
	var chk_sum = $("#ch_select_condition3_OL").prop("checked");
	
	if(chk_age == false && chk_sum == false && chk_period == false){
		$("#tb_YearCondition_OL tbody>tr").remove();
		addRowSaleCondition_OL();
		$("#deleteRowSale_OL").prop("disabled", true);
	}
}

$("#tb_YearCondition_OL *").on("change", function(){
	/*message = "กรุณา Generate Series ใหม่ค่ะ";
	alertError(message);*/
	
	$("#tbl_seriesCondition_OL").remove();
	$("#btn_generate_template_OL").hide();
	//remove row
	$("#tbl_SaleBenefit_OL tbody>tr").each(function(){
		var type = $(this).find("#cov_type_cond_OL").val();
		var data_group = $(this).attr("data-group");
		if(type == "B" && data_group != 1){
			$(this).remove();
		}
	});
	
	$("#tbl_SaleBenefit_OL tbody>tr[data-group='1']").each(function(){
		var data_level = $(this).attr("data-level");
		
		$(this).find("td:nth-child(5) input").val("");
		$(this).find("td:nth-child(6) input").val("");
		$(this).find("td:nth-child(7) input").val("0.00");
		$(this).find("td:nth-child(8) input").val("0.00");
		$(this).find("td:nth-child(9) input").val("0.00");
		$(this).find("td:nth-child(10) input").val("0.00");
		$(this).find("td:nth-child(11) input").val("0.00");
		$(this).find("td:nth-child(12) input").val("0.00");
		$(this).find("td:nth-child(13) input").val("0.00");
		$(this).find("td:nth-child(14) input").val("0.00");
		$(this).find("td:nth-child(15) input").val("0.00");
		$(this).find("td:nth-child(16) input").val("0.00");
		
		if(data_level == 2){
			$(this).remove();
		}
	});
	
	$("#panel_SaleBenefit_OL3").hide();
});

function generate_series_OL(){
	
	//remove row
	$("#tbl_SaleBenefit_OL tbody>tr").each(function(){
		var type = $(this).find("#cov_type_cond_OL").val();
		var data_group = $(this).attr("data-group");
		if(type == "B" && data_group != 1){
			$(this).remove();
		}
	});
	
	$("#tbl_SaleBenefit_OL tbody>tr[data-group='1']").each(function(){
		var data_level = $(this).attr("data-level");
		
		$(this).find("td:nth-child(5) input").val("");
		$(this).find("td:nth-child(6) input").val("");
		$(this).find("td:nth-child(7) input").val("0.00");
		$(this).find("td:nth-child(8) input").val("0.00");
		$(this).find("td:nth-child(9) input").val("0.00");
		$(this).find("td:nth-child(10) input").val("0.00");
		$(this).find("td:nth-child(11) input").val("0.00");
		$(this).find("td:nth-child(12) input").val("0.00");
		$(this).find("td:nth-child(13) input").val("0.00");
		$(this).find("td:nth-child(14) input").val("0.00");
		$(this).find("td:nth-child(15) input").val("0.00");
		$(this).find("td:nth-child(16) input").val("0.00");
		
		if(data_level == 2){
			$(this).remove();
		}
	});
	
	$("#panel_SaleBenefit_OL3").hide();
	
	/*check condition*/
	var chk_gender = $("#ch_select_condition0_OL").prop("checked");
	var chk_mode = $("#ch_select_condition1_OL").prop("checked");
	var chk_age = $("#ch_select_condition2_OL").prop("checked");
	var chk_sum = $("#ch_select_condition3_OL").prop("checked");
	var chk_period = $("#ch_select_condition4_OL").prop("checked");
	var show_gender = "";
	var show_mode = "";
	var show_age = "";
	var show_sum = "";
	var show_period = "";
	var table_width = "";
	
	if(chk_gender == true || chk_mode == true || chk_age == true || chk_sum == true || chk_period == true){
		
		$("#tbl_seriesCondition_OL").remove();
		/*$("#tbl_seriesCondition_OL thead").remove();
		$("#tbl_seriesCondition_OL tbody").remove();*/
		$("#btn_generate_template_OL").hide();
		
		/*mode*/
		var mode_arr = [];
		$("#tbl_PD_Mode_OL tbody>tr").each(function(){
			if($(this).find("input[type='checkbox']").prop("checked") == true){
				mode_arr.push($(this).find("td:nth-child(2) label").text());
				mode_arr.push($(this).find("td:nth-child(3) label").text());
				mode_arr.push($(this).find("input[type='checkbox']").val());
			}
		});
		
		var mode_all = mode_arr.join(",");
		var mode_split = mode_all.split(",");
		var count_mode = mode_split.length/3;
		
		/*gender*/
		var male = $("#chk_sex_BP1_OL").prop("checked");
		var female = $("#chk_sex_BP2_OL").prop("checked");
		var count_gender = "";
		if(male == true && female == false){
			count_gender = 1;
		}else if(male == false && female == true){
			count_gender = 1;
		}else{
			count_gender = 2;
		}
		
		/*table*/
		if(chk_gender == true){
			show_gender = ""
		}else{
			show_gender = "displayNone";
		}
		
		if(chk_mode == true){
			show_mode = ""
		}else{
			show_mode = "displayNone";
		}
		
		if(chk_age == true){
			show_age = ""
				
		}else{
			show_age = "displayNone";
		}
		
		if(chk_sum == true){
			show_sum = ""
		}else{
			show_sum = "displayNone";
		}
		
		if(chk_period == true){
			show_period = ""
		}else{
			show_period = "displayNone";
		}

		
		var num_condition = $("#panel_SaleCondition_OL1 input:checkbox:checked").length;
		if(num_condition == 1){
			table_width = "500";
		}else if(num_condition == 2){
			table_width = "700";
		}else if(num_condition == 3){
			table_width = "1000";
		}else if(num_condition == 4){
			table_width = "1200";
		}else if(num_condition == 5){
			table_width = "1500";
		}
		
		var table = "<table id='tbl_seriesCondition_OL' class='table table-bordered' style='width:"+table_width+"px;'>"+
				"<thead>"+
					"<tr>"+
						"<th class='text-center verticalCenter bg-primary borderBlack' width='10%' rowspan='2'>Series Name</th>"+
						"<th class='text-center verticalCenter bg-primary borderBlack "+show_gender+"' width='10%' rowspan='2'>เพศ</th>"+
						"<th class='text-center verticalCenter bg-primary borderBlack "+show_mode+"' width='10%' colspan='2'>OV</th>"+
						"<th class='text-center verticalCenter bg-primary borderBlack "+show_age+"' width='10%' colspan='2'>อายุ(ปี)</th>"+
						"<th class='text-center verticalCenter bg-primary borderBlack "+show_sum+"' width='10%' colspan='2'>ทุน(บาท)</th>"+
						"<th class='text-center verticalCenter bg-primary borderBlack "+show_period+"' width='10%' colspan='2'>ระยะชำระเบี้ย(ปี)</th>"+
					"</tr>"+
					"<tr>"+
						"<th class='text-center verticalCenter bg-primary borderBlack "+show_mode+"' width='10%'>รหัส</th>"+																				
						"<th class='text-center verticalCenter bg-primary borderBlack "+show_mode+"' width='10%'>Mode</th>"+
						"<th class='text-center verticalCenter bg-primary borderBlack "+show_age+"' width='10%'>ตั้งแต่</th>"+
						"<th class='text-center verticalCenter bg-primary borderBlack "+show_age+"' width='10%'>ถึง</th>"+
						"<th class='text-center verticalCenter bg-primary borderBlack "+show_sum+"' width='10%'>ตั้งแต่</th>"+
						"<th class='text-center verticalCenter bg-primary borderBlack "+show_sum+"' width='10%'>ถึง</th>"+
						"<th class='text-center verticalCenter bg-primary borderBlack "+show_period+"' width='10%'>ตั้งแต่</th>"+
						"<th class='text-center verticalCenter bg-primary borderBlack "+show_period+"' width='10%'>ถึง</th>"+
					"</tr>"+
				"</thead>"+
				"<tbody></tbody>"+
				"</table>";
		
		var error = 0;
		if(chk_age == true || chk_sum == true || chk_period == true){
			if(chk_age == true){
				var num_count_age = 0;
				$("#tb_YearCondition_OL tbody>tr").each(function(){
					if($(this).find("td:nth-child(2) input").val() != "" && $(this).find("td:nth-child(3) input").val() != ""){
						num_count_age++;
					}
					
					if($(this).find("td:nth-child(2) input").val() != ""){
						if($(this).find("td:nth-child(3) input").val() == ""){
							error++;
						}
					}
					
						
				});
			}
			
			if(chk_sum == true){
				var num_count_sum = 0;
				$("#tb_YearCondition_OL tbody>tr").each(function(){
					if($(this).find("td:nth-child(4) input").val() != "" && $(this).find("td:nth-child(5) input").val() != ""){
						num_count_sum++;
					}
					
					if($(this).find("td:nth-child(4) input").val() != ""){
						if($(this).find("td:nth-child(5) input").val() == ""){
							error++;
						}
					}
		
				});
			}
			
			if(chk_period == true){
				var num_count_period = 0;
				$("#tb_YearCondition_OL tbody>tr").each(function(){
					if($(this).find("td:nth-child(6) input").val() != "" && $(this).find("td:nth-child(7) input").val() != ""){
						num_count_period++;
					}
					
					if($(this).find("td:nth-child(6) input").val() != ""){
						if($(this).find("td:nth-child(7) input").val() == ""){
							error++;
						}
					}
		
				});
			}
			
			//validate
			if(num_count_age <= 0){
				error++;
			}
			
			if(num_count_sum <= 0){
				error++;
			}
			
			if(num_count_period <= 0){
				error++;
			}
			
		}
		
		if(error <= 0){
			$("#div_seriesCondition_OL").append(table);
			
			if(num_condition >= 3){
				$("#div_seriesCondition_OL").addClass("scroll_Salebenefit2_OL");
			}
			
			$("#btn_generate_template_OL").show();
			
			/*********************หาจำนวนช่องที่กรอก*********************/
			//อายุ
			var count_age = 0;
			$("#tb_YearCondition_OL tbody>tr").each(function(){
				if($(this).find("td:nth-child(2) input").val() != ""){
					count_age++;
				}
			});
			
			//ทุน
			var count_sum = 0;
			$("#tb_YearCondition_OL tbody>tr").each(function(){
				if($(this).find("td:nth-child(4) input").val() != ""){
					count_sum++;
				}
			});
			
			//ระยะชำระเบี้ย
			var count_period = 0;
			$("#tb_YearCondition_OL tbody>tr").each(function(){
				if($(this).find("td:nth-child(6) input").val() != ""){
					count_period++;
				}
			});
			
			/******************สร้างข้อมูลตาราง series*******************/
			var new_row = "";
			var new_row_id =1;
			var n_gender = "";
			var n_mode = "";
			var n_age = "";
			var n_sum = "";
			var n_period = "";
			
			/*set ตัวคูณ*/
			if(chk_gender == true){
				n_gender = count_gender;
			}else{
				n_gender = 1;
			}
			
			if(chk_mode == true){
				n_mode = count_mode;
			}else{
				n_mode = 1;
			}
			
			if(chk_age == true){
				n_age = count_age;
				if(n_age == 0){
					n_age = 1;
				}
			}else{
				n_age = 1;
			}
			
			if(chk_sum == true){
				n_sum = count_sum;
				if(n_sum == 0){
					n_sum = 1;
				}
			}else{
				n_sum = 1;
			}
			
			if(chk_period == true){
				n_period = count_period;
				if(n_period == 0){
					n_period = 1;
				}
			}else{
				n_period = 1;
			}
			
			var n_row = Number(n_gender*n_mode*n_age*n_sum*n_period);
			//alert(n_row);
			
			/****************gen row serie รอ************************/
			for(var i=1;i<=n_row; i++){
				new_row += "<tr id='tr_series_OL"+i+"' data-id='"+i+"'>"+
				"<td class='verticalCenter text-center borderBlack'>"+
				"<label>S"+i+"</label>"+
				"</td>";
				
				//เพศ
				if(chk_gender == true){
					new_row += "<td class='verticalCenter text-center borderBlack'>"+
								"<label id='lb_gender"+i+"'></label>"+
								"</td>";
				}
				
				//mode
				if(chk_mode == true){
					new_row += "<td class='verticalCenter text-center borderBlack'>"+
									"<label id='lb_mode_code"+i+"'></label>"+
									"<input type='hidden' id='hdd_mode_value"+i+"'>"+
								"</td>"+
								"<td class='verticalCenter borderBlack'>"+
									"<label id='lb_mode_text"+i+"'></label>"+
								"</td>";
				}
				
				//age
				if(chk_age == true){
					new_row += "<td class='verticalCenter text-center borderBlack'>"+
									"<label id='lb_age_from"+i+"'></label>"+
								"</td>"+
								"<td class='verticalCenter text-center borderBlack'>"+
									"<label id='lb_age_to"+i+"'></label>"+
								"</td>";
				}
				
				//ทุน
				if(chk_sum == true){
					new_row += "<td class='verticalCenter text-right borderBlack'>"+
									"<label id='lb_sum_from"+i+"'></label>"+
								"</td>"+
								"<td class='verticalCenter text-right borderBlack'>"+
									"<label id='lb_sum_to"+i+"'></label>"+
								"</td>";
				}
				
				//ระยะชำระเบี้ย
				if(chk_period== true){
					new_row += "<td class='verticalCenter text-center borderBlack'>"+
									"<label id='lb_period_from"+i+"'></label>"+
								"</td>"+
								"<td class='verticalCenter borderBlack'>"+
									"<label id='lb_period_to"+i+"'></label>"+
								"</td>";
				}
				
				new_row += "</tr>";
			}
			
			/*ใส่ row ใน tbody*/
			if($("#tbl_seriesCondition_OL thead").length > 0){
				$("#tbl_seriesCondition_OL tbody").append(new_row);
			}
				
			/**/
			var j = 1;
			
			/*mode*/
			if(chk_gender == true){
				var row_mode = (n_row/2)/n_mode;
			}else{
				var row_mode = n_row/n_mode;
			}
			
			//console.log("mode> "+row_mode);
			var next_mode = 1;
			var mode_arr = 0;
			
			/*age*/
			var next_age = 1;
			
			/*ทุน*/
			var next_sum = 1;
			var next_sum2 = 1;
			
			/*ระยะชำระเบี้ย*/
			var next_period = 1;
			var next_period2 = 1;
			
			$("#tbl_seriesCondition_OL tbody>tr").each(function(){
				//เพศ
				if(chk_gender == true){
					if(count_gender == 2){
						if(j<=Number(n_row/2)){
							$(this).find("#lb_gender"+j).text("ชาย");
						}else{
							$(this).find("#lb_gender"+j).text("หญิง");
						}
					}else{
						if(male==true && female == false){
							$(this).find("#lb_gender"+j).text("ชาย");
						}else if(male==false && female == true){
							$(this).find("#lb_gender"+j).text("หญิง");
						}
					}

				}
				
				//mode
				if(chk_mode == true){
					//console.log("age>> "+n_age);
					//console.log("j>>"+j+" j% >>"+j%(n_gender*row_mode))
					//console.log("j>>"+j+" j% >>"+j%row_mode)
					//console.log("row>> "+row_mode);
					
					var this_mode_value = $(this).find("#lb_mode_code"+j).text();
					var this_mode_text = $(this).find("#lb_mode_text"+j).text();
					
					if(row_mode > 1){
						if(j%row_mode != 0){
							next_mode = j+1;
						}
					}else{
						if(chk_gender == true){
							if(j%(n_gender*row_mode) != 0){
								next_mode = j+1;
								
							}else{
								next_mode = j;
							}
						}else{
							next_mode = j;
						}
					}
					
					
					//ใส่ข้อมูล
					
					if(this_mode_value == "" && this_mode_text == ""){
						
						$(this).find("#lb_mode_code"+j).text(mode_split[mode_arr]);
					    $(this).find("#lb_mode_text"+j).text(mode_split[mode_arr+1]);
					    $(this).find("#hdd_mode_value"+j).val(mode_split[mode_arr+2]);
					    
					    //console.log("j>>"+j+" next_mod>>" +next_mode);
					    //console.log("j>>"+j+" mode_arr>>" +mode_arr);
						
						if($("#tb_YearCondition_OL tbody>tr").length > 1){
							if(next_mode == j){
								mode_arr = mode_arr + 3;
								
								if(mode_arr == (count_mode*3)){
									mode_arr = 0;
								}
								
							}
						}else{
							mode_arr = mode_arr + 3;
							
							if(mode_arr == (count_mode*3)){
								mode_arr = 0;
							}
						}
						

						//console.log("next" +next_mode+ "arr>>" +mode_arr);

					}
					
				}
				
				//อายุ
				if(chk_age == true){
					
				   var this_age_from = $(this).find("#lb_age_from"+j).text();
				   var this_age_to = $(this).find("#lb_age_to"+j).text();
				
				   if(count_age > 1){
				   
					 if(j == 1){
					   	 next_age = 1;
				     }else{
				    	 next_age = next_age+1;
				       if(next_age > count_age){
				    	 next_age = 1;
				       }
				     }
 
				   }else{
					   next_age = 1;
				   }
				   
				   if(this_age_from == "" && this_age_to == ""){
				     var age_from = $("#tb_YearCondition_OL #tr_YearCondition_OL"+next_age).find("td:nth-child(2) input").val();
				     var age_to = $("#tb_YearCondition_OL #tr_YearCondition_OL"+next_age).find("td:nth-child(3) input").val();
				    
				     $(this).find("#lb_age_from"+j).text(age_from);
				     $(this).find("#lb_age_to"+j).text(age_to);
				     
				   }
	  	
				}
				
				//ทุน(บาท)
				if(chk_sum == true){
					
					//console.log("sum>> "+count_sum);
					
					var this_sum_from = $(this).find("#lb_sum_from"+j).text();
					var this_sum_to = $(this).find("#lb_sum_to"+j).text();

					 // console.log("j>>" +j+" mod%" +j%count_sum)
					 //console.log("j>>" +j+" sum2>> " +next_sum2+ "next_sum>> "+next_sum+" mod%" +j%count_age);
					
					 //ใส่ข้อมูล
					   if(this_sum_from == "" && this_sum_to == ""){
						 var sum_from = $("#tb_YearCondition_OL #tr_YearCondition_OL"+next_sum).find("td:nth-child(4) input").val();
					     var sum_to = $("#tb_YearCondition_OL #tr_YearCondition_OL"+next_sum).find("td:nth-child(5) input").val();
					   
					   	 $(this).find("#lb_sum_from"+j).text(sum_from);
					     $(this).find("#lb_sum_to"+j).text(sum_to);
					   }
					   
					
					   if((chk_mode == true || chk_gender == true || chk_sum == true) && chk_age == false){
						   next_sum = next_sum + 1;
						   
						   if(next_sum > count_sum){
							   next_sum = 1;
						   }
						   
					   }else if(chk_age == true){
						   //row age > row sum
						   if(count_age > count_sum){
							   next_sum2++;
							   
							   if(next_sum2 > count_age){
								   next_sum2 = 1;
							   }
							   
							   if(next_sum2 == 1){
								   next_sum = next_sum + 1;
								   
								   if(next_sum > count_sum){
									   next_sum = 1;
								   }
							   }
							  
							 //row age < row sum   
						   }else if(count_age < count_sum){
							   next_sum2++;
							   
							   if(next_sum2 > count_age){
								   if(j%count_age == 0){
									   next_sum = next_sum +1; 

									   if(next_sum > count_sum){
										   next_sum = 1;
									   }
								   }
							   }
							   
						   }else{
							 //row age = row sum
							   if(count_age > 1){
								   if(j%count_sum == 0){
									   next_sum = next_sum + 1;
									   
									   if(next_sum > count_sum){ 
										   next_sum = 1;
									   }
								   }
							   }else if(count_age == 1){
								   next_sum = 1;
							   }else{
								   next_sum = next_sum + 1;
							   }
							   
						   }
						   
					   }

				}
				
				//ระยะชำระเบี้ย(ปี)
				if(chk_period == true){
					//console.log("period>> "+count_period);
					
					var this_period_from = $(this).find("#lb_period_from"+j).text();
					var this_period_to = $(this).find("#lb_period_to"+j).text();
					
					 // console.log("j>>" +j+" mod%" +j%count_sum)
					 //console.log("j>>" +j+" period2>> " +next_period2+ "next_period>> "+next_period+" mod%" +j%(count_age*count_sum));
					
					 //ใส่ข้อมูล
					   if(this_period_from == "" && this_period_to == ""){
						 var period_from = $("#tb_YearCondition_OL #tr_YearCondition_OL"+next_period).find("td:nth-child(6) input").val();
					     var period_to = $("#tb_YearCondition_OL #tr_YearCondition_OL"+next_period).find("td:nth-child(7) input").val();
					   
					   	 $(this).find("#lb_period_from"+j).text(period_from);
					     $(this).find("#lb_period_to"+j).text(period_to);
					   }
					   
					
					  if(count_period == 1){
						  next_period = next_period;
					  }else{
						  ////////////
						  if((chk_gender == true || chk_mode == true || chk_period == true) && (chk_age == false || chk_sum == false)){
							   next_period = next_period + 1;
							   
							   if(next_period > count_period){
								   next_period = 1;
							   }
							   
						   }else if(chk_age == true && chk_sum == false){
							   //row age > row period
							   if(count_age > count_period){
								   next_period2++;
								   
								   if(next_period2 > count_age){
									   next_period2 = 1;
								   }
								   
								   if(next_period2 == 1){
									   next_period = next_period + 1;
									   
									   if(next_period > count_period){
										   next_period = 1;
									   }
								   }
								   
							   //row age < row period
							   }else if(count_age < count_period){
								   next_period2++;
								   
								   if(next_period2 > count_age){
									   next_period2 = 1;
								   }
								   
								   if(next_period2 == 1){
									   next_period = next_period + 1;
									   
									   if(next_period > count_period){
										   next_period = 1;
									   }
								   }
							   

							   }else{
								 //row age = row period
								   if(count_age > 1){
									   if(j%count_period == 0){
										   next_period = next_period + 1;
										   
										   if(next_period > count_period){ 
											   next_period = 1;
										   }
									   }
								   }else if(count_age == 1){
									   next_period = next_period;
								   }else{
									   next_period = next_period + 1;
								   }
								   
							   }
						   }else if(chk_age == true && chk_sum == true){

								   if((count_age > count_period) && (count_sum == count_period)){
									   if(j%(count_age*count_period) == 0){
										   next_period = next_period + 1;
										   
										   if(next_period > count_period){
											   next_period = 1;
										   }
									   }
									   
								   }else if((count_age == count_period) && (count_sum == count_period)){
									   if(j%(count_age*count_sum) == 0){
										   next_period = next_period + 1;
										   
										   if(next_period > count_period){
											   next_period = 1;
										   }
									   }
									   
								   }else if((count_period > count_age) && (count_period > count_sum)){
									   if(count_age == count_sum){
										   if(j%(count_age*count_sum) == 0){
											   next_period = next_period + 1;
											   
											   if(next_period > count_period){
												   next_period = 1;
											   } 
										   }
										   
									   }else if(count_age == count_period){
										   if(j%(count_age*count_sum) == 0){
											   next_period = next_period + 1;
											   
											   if(next_period > count_period){
												   next_period = 1;
											   } 
										   }
										   
									   }else{
										   if(count_sum > count_age){
											   if(j%count_sum == 0){
												   next_period = next_period + 1;
												   
												   if(next_period > count_period){
													   next_period = 1;
												   }
											   }
										   }
										   
									   }

								   }else if((count_period == count_sum) && (count_sum > count_age)){
									   //if(chk_gender == true){
										   if(j%(count_period*count_age) == 0){
											   next_period = next_period + 1;
											   
											   if(next_period > count_period){
												   next_period = 1;
											   }
										   }
									   /*}else if(chk_gender == false){
										   if(j%count_period == 0){
											   next_period = next_period + 1;
											   
											   if(next_period > count_period){
												   next_period = 1;
											   }
										   }
									   }*/
									   
								   }else if((count_sum > count_period) && (count_sum > count_age)){
									   //console.log("j>>" +j+" period2>> " +next_period2+ "next_period>> "+next_period+" mod%" +j%(count_sum*count_period));
									   
									   if(count_age == count_period){
										   if(j%(count_sum*count_period) == 0){
											   next_period = next_period + 1;
											   
											   if(next_period > count_period){
												   next_period = 1;
											   }
										   }
									   }else if((count_age > count_period) || (count_age < count_period)){
										   if(j%(count_age*count_sum) == 0){
											   next_period = next_period + 1;
											   
											   if(next_period > count_period){
												   next_period = 1;
											   }
										   }
									   }else{
										   if(j%count_sum == 0){
											   next_period = next_period + 1;
											   
											   if(next_period > count_period){
												   next_period = 1;
											   }
										   }
									   }
  
								   }else if((count_sum > count_period) && (count_sum == count_age)){
									   if(j%(count_age*count_sum) == 0){
										   next_period = next_period + 1;
										   
										   if(next_period > count_period){
											   next_period = 1;
										   }
									   }
								   }else if((count_sum < count_period) && (count_period == count_age)){
									   if(j%(count_period*count_sum) == 0){
										   next_period = next_period + 1;
										   
										   if(next_period > count_period){
											   next_period = 1;
										   }
									   }
								   }
								
						   }
						  ////////
						  
					  }

				}
				
				j++;
			});

			/******************end สร้างข้อมูลตาราง series*******************/
			
		}else{
			message = "กรุณาระบุข้อมูลให้ครบ";
			alertError(message);
		}
	
	}else{
		message = "กรุณาเลือกเงื่อนไข";
		alertError(message);
	}
}

function generate_template_OL(){
	
	//remove row
	$("#tbl_SaleBenefit_OL tbody>tr").each(function(){
		var type = $(this).find("#cov_type_cond_OL").val();
		var data_group = $(this).attr("data-group");
		if(type == "B" && data_group != 1){
			$(this).remove();
		}
	});
	
	$("#tbl_SaleBenefit_OL tbody>tr[data-group='1']").each(function(){
		var data_level = $(this).attr("data-level");
		
		$(this).find("td:nth-child(5) input").val("");
		$(this).find("td:nth-child(6) input").val("");
		$(this).find("td:nth-child(7) input").val("0.00");
		$(this).find("td:nth-child(8) input").val("0.00");
		$(this).find("td:nth-child(9) input").val("0.00");
		$(this).find("td:nth-child(10) input").val("0.00");
		$(this).find("td:nth-child(11) input").val("0.00");
		$(this).find("td:nth-child(12) input").val("0.00");
		$(this).find("td:nth-child(13) input").val("0.00");
		$(this).find("td:nth-child(14) input").val("0.00");
		$(this).find("td:nth-child(15) input").val("0.00");
		$(this).find("td:nth-child(16) input").val("0.00");
		
		if(data_level == 2){
			$(this).remove();
		}
	});
	
	var dataId = $("#tbl_SaleBenefit_OL #tr_saleBnf_cond1").data('id');
	var last_row = "";
	var type = $("#tbl_SaleBenefit_OL #tr_saleBnf_cond1").find("td:nth-child(1) #cov_type_cond_OL").val();
	var prd_code = $("#tbl_SaleBenefit_OL #tr_saleBnf_cond1").find("td:nth-child(1) #prd_rider_code_cond_OL").val();
	var numrow_seq = $("#tbl_SaleBenefit_OL tbody>tr[data-group='"+dataId+"']:last").length;
	var seq = $("#tbl_SaleBenefit_OL #tr_saleBnf_cond1").find("td:nth-child(1) #seq_cond_OL").val();

    var count_serie = Number($("#tbl_seriesCondition_OL tr").length)-1;
    var new_row = "";
	
    for(i=2;i<count_serie;i++){
		var new_row_id = i;
		seq = Number(seq) + 1;
		
		new_row += "<tr id='tr_saleBnf_cond"+new_row_id+"' data-id='"+new_row_id+"' data-level='1' data-group='"+dataId+"'>"+
		 	"<td class=\'text-center verticalCenter\'  class=\'text-center verticalCenter\'>"+
		 	"<input type='hidden' id='cov_type_cond_OL' value='"+type+"'>"+
			"<input type='hidden' id='prd_rider_code_cond_OL' value='"+prd_code+"'>"+
			"<input type='hidden' id='seq_cond_OL' value='1'>"+
			"<input type='hidden' id='serie_cond_OL' value='"+i+"'>"+
		 	"</td>"+
		 	"<td class=\'text-center verticalCenter\'  class=\'text-center verticalCenter\'></td>"+
			"<td class=\'text-center verticalCenter\'  class=\'text-center verticalCenter\'><label>S"+i+"</label></td>"+
			"<td class=\"text-center verticalCenter\">"+
			"<i class=\"glyphicon glyphicon-plus icon-blue-circle \"  data-id=\'"+new_row_id+"\' id=\"addrow_rd_cond_"+new_row_id+"\" onclick='add_row_saleBnf_cond_OL(this);'></i>"+
			"</td>"+
			"<td class='text-center'><input type='text' class='form-control format_date' id='datefrom_saleBnf_cond"+new_row_id+"' onblur='' placeholder='dd/mm/yyyy' value='' maxlength='10' readonly></td>"+
			"<td class='text-center'><input type='text' class='form-control format_date' id='dateto_saleBnf_cond"+new_row_id+"' onblur='checkdateTo_OL(this.id);' placeholder='dd/mm/yyyy' maxlength='10' readonly></td>"+	
			"<td class=\'text-right verticalCenter\'>"+
			"<input type='text' class='auto text-right form-control' id='txb_year1_cond_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max=999.99>" +
			"</td>"+
			"<td class=\'text-right verticalCenter\'>"+
			"<input type='text' class='auto text-right form-control' id='txb_year2_cond_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99'>" +
			"</td>"+
			"<td class=\'text-right verticalCenter\'>"+
			"<input type='text' class='auto text-right form-control'  id='txb_year3_cond_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99'>" +
			"</td>"+
			"<td class=\'text-right verticalCenter\'>"+
			"<input type='text' class='auto text-right form-control' id='txb_year4_cond_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99'>" +
			"</td>"+
			"<td class=\'text-right verticalCenter\'>"+
			"<input type='text' class='auto text-right form-control' id='txb_credit_cond_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99'>" +
			"</td>"+
			"<td class=\'text-right verticalCenter\'>"+
			"<input type='text' class='auto text-center form-control' id='txb_override_cond_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99'>" +
			"</td>"+
			"<td class=\'text-right verticalCenter\'>"+
			"<input type='text' class='auto text-center form-control' id='txb_comm_cond_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99'>" +
			"</td>"+
			"<td class=\'text-right verticalCenter\'>"+
			"<input type='text' class='auto text-center form-control' id='txb_incentive_cond_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99'>" +
			"</td>"+
			"<td class=\'text-right verticalCenter\'>"+
			"<input type='text' class='auto text-center form-control' id='txb_bonus_cond_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99'>" +
			"</td>"+
			"<td class=\'text-right verticalCenter\'>"+
			"<input type='text' class='auto text-center form-control' id='txb_expense_cond_"+new_row_id+"' onblur='checkZero_OL(this);' value='0.00' data-v-min='0.00' data-v-max='999.99'>" +
			"</td>"+
			"</tr>";	

	}
	
	$(new_row).insertAfter($("#tbl_SaleBenefit_OL #tr_saleBnf_cond1").closest('tr'));

	$('.auto').autoNumeric('init');
		 
	/*jQuery(".format_date").datetimepicker({
		  timepicker:false,
		  format:'d/m/Y',
		  yearOffset:543 
		  

	}); */
	
	var year_end = new Date().getFullYear();
	year_end = 9999 - 543;
	
	console.log("end>> "+year_end);
	
	jQuery("#tr_saleBnf_cond"+new_row_id+" td:nth-child(5) input, #tr_saleBnf_cond"+new_row_id+" td:nth-child(6) input").datetimepicker({
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
		
	jQuery("#tr_saleBnf_cond"+new_row_id+" td:nth-child(5) input, #tr_saleBnf_cond"+new_row_id+" td:nth-child(6) input").on("mouseenter mouseleave", function(e){
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
	
	/****gen new all id****/
	var j = 1;
	$("#tbl_SaleBenefit_OL tbody>tr[data-level='1']").each(function(){
		var data_id = $(this).attr("data-id");
		var main_code = $(this).find("td:nth-child(1) label").text();
		var children = $(this).find("tr[data-parentId='"+main_code+"']").length;
		//console.log(main_code);
		//console.log("j>"+j);

		$(this).attr("id", "tr_saleBnf_cond"+j);
		$(this).attr("data-id", j);
		$(this).attr("data-group", j);
		$(this).find("td:nth-child(2) input").attr("id","chk_is_ref_base_cond"+j);
		$(this).find("td:nth-child(4) i").attr("id","addrow_rd_cond_"+j);
		$(this).find("td:nth-child(4) i").attr("data-id",j);
		$(this).find("td:nth-child(5) input").attr("id","datefrom_saleBnf_cond"+j);
		$(this).find("td:nth-child(6) input").attr("id","dateto_saleBnf_cond"+j);
		$(this).find("td:nth-child(7) input").attr("id","txb_year1_cond_"+j);
		$(this).find("td:nth-child(8) input").attr("id","txb_year2_cond_"+j);
		$(this).find("td:nth-child(9) input").attr("id","txb_year3_cond_"+j);
		$(this).find("td:nth-child(10) input").attr("id","txb_year4_cond_"+j);
		$(this).find("td:nth-child(11) input").attr("id","txb_credit_cond_"+j);
		$(this).find("td:nth-child(12) input").attr("id","txb_override_cond_"+j);
		$(this).find("td:nth-child(13) input").attr("id","txb_comm_cond_"+j);
		$(this).find("td:nth-child(14) input").attr("id","txb_incentive_cond_"+j);
		$(this).find("td:nth-child(15) input").attr("id","txb_bonus_cond_"+j);
		$(this).find("td:nth-child(16) input").attr("id","txb_expense_cond_"+j);
		
		var jj = 1;
		$("#tbl_SaleBenefit_OL tbody>tr[data-parentId='"+main_code+"']").each(function(){
			//console.log("jj>> "+jj);
			var data_group = $(this).attr("data-group");
				var number_child_new = j+"_"+jj;							
				
				$(this).attr("id","tr_saleBnf_cond"+number_child_new);
				$(this).attr("data-id",number_child_new);
				$(this).find("td:nth-child(4) i").attr("id","addrow_rd_cond_"+number_child_new);
				$(this).find("td:nth-child(4) i").attr("data-id",number_child_new);
				$(this).find("td:nth-child(5) input").attr("id","datefrom_saleBnf_cond"+number_child_new);
				$(this).find("td:nth-child(6) input").attr("id","dateto_saleBnf_cond"+number_child_new);
				$(this).find("td:nth-child(7) input").attr("id","txb_year1_cond_"+number_child_new);
				$(this).find("td:nth-child(8) input").attr("id","txb_year2_cond_"+number_child_new);
				$(this).find("td:nth-child(9) input").attr("id","txb_year3_cond_"+number_child_new);
				$(this).find("td:nth-child(10) input").attr("id","txb_year4_cond_"+number_child_new);
				$(this).find("td:nth-child(11) input").attr("id","txb_credit_cond_"+number_child_new);
				$(this).find("td:nth-child(12) input").attr("id","txb_override_cond_"+number_child_new);
				$(this).find("td:nth-child(13) input").attr("id","txb_comm_cond_"+number_child_new);
				$(this).find("td:nth-child(14) input").attr("id","txb_incentive_cond_"+number_child_new);
				$(this).find("td:nth-child(15) input").attr("id","txb_bonus_cond_"+number_child_new);
				$(this).find("td:nth-child(16) input").attr("id","txb_expense_cond_"+number_child_new);
				$(this).attr("data-group", j);
				$(this).attr("data-parent", j);
				jj++;
		  });		
		j++;
	});		
	
	
	$("#panel_SaleBenefit_OL3").show();
	
}

//age
function validateMinAge_OL(e){
	var value = $(e).val();
	var max_value = $(e).parent().parent().find('td:nth-child(3) input').val();
	
	if(max_value != ""){
		if(Number(value) > Number(max_value)){
			$(e).val("");
			message = "กรุณากรอกข้อมุลให้ถูกต้อง"
			alertError(message);
		}else if(value == ""){
			message = "กรุณากรอกข้อมุลให้ถูกต้อง"
			alertError(message);
		}
	}
}

function validateMaxAge_OL(e){
	var value = $(e).val();
	var min_value = $(e).parent().parent().find('td:nth-child(2) input').val();
	
	if(min_value == ""){
		$(e).val("");
		message = "กรุณากรอกข้อมุลให้ถูกต้อง"
		alertError(message);
	}else{
		if(Number(value) < Number(min_value)){
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
	}
}

function validateBeforeAge_OL(e){
	var id = $(e).attr("id");
		id = id.replace("Agefrom_OL","");
	var before_id = Number(id)-1;
		
	var value = replaceComma($(e).val());
	var before_from_value = replaceComma($("#Agefrom_OL"+before_id).val());
	var before_to_value = replaceComma($("#Ageto_OL"+before_id).val());
	
	if((before_from_value == "" && before_to_value == "") || (before_from_value != "" && before_to_value == "") || (before_from_value == "" && before_to_value != "")){
		message = "กรุณากรอกข้อมุลให้ครบถ้วน"
		alertError(message);
		$(e).val("");
	}else{
		if(value != ""){
			if(Number(value) != (Number(before_to_value)+1)){		
				message = "กรุณากรอกข้อมุลให้ถูกต้อง"
				alertError(message);
				$(e).val(Number(before_to_value)+1);
			}
		}
	}
}

//sum
function validateMinSum_OL(e){
	var value = replaceComma($(e).val());
	var max_value = replaceComma($(e).parent().parent().find('td:nth-child(5) input').val());
	
	if(max_value != ""){
		if(Number(value) > Number(max_value)){
			$(e).val("");
			message = "กรุณากรอกข้อมุลให้ถูกต้อง"
			alertError(message);
		}else if(value == ""){
			message = "กรุณากรอกข้อมุลให้ถูกต้อง"
			alertError(message);
		}
	}
}

function validateMaxSum_OL(e){
	var value = replaceComma($(e).val());
	var min_value = replaceComma($(e).parent().parent().find('td:nth-child(4) input').val());
	
	if(min_value == ""){
		$(e).val("");
		message = "กรุณากรอกข้อมุลให้ถูกต้อง"
		alertError(message);
	}else{
		if(Number(value) < Number(min_value)){
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
	}	
}

function validateBeforeSum_OL(e){
	var id = $(e).attr("id");
		id = id.replace("Sumfrom_OL","");
	var before_id = Number(id)-1;
		
	var value = replaceComma($(e).val());
	var before_from_value = replaceComma($("#Sumfrom_OL"+before_id).val());
	var before_to_value = replaceComma($("#Sumto_OL"+before_id).val());
	
	if((before_from_value == "" && before_to_value == "") || (before_from_value != "" && before_to_value == "") || (before_from_value == "" && before_to_value != "")){
		message = "กรุณากรอกข้อมุลให้ครบถ้วน"
		alertError(message);
		$(e).val("");
	}else{
		if(value != ""){
			if(Number(value) != (Number(before_to_value)+1)){		
				message = "กรุณากรอกข้อมุลให้ถูกต้อง"
				alertError(message);
				$(e).val(numberWithCommas((Number(before_to_value)+1)+".00"));
			}
		}
	}
}

//period
function validateMinPeriod_OL(e){
	var value = $(e).val();
	var max_value = $(e).parent().parent().find('td:nth-child(7) input').val();
	
	if(max_value != ""){
		if(Number(value) > Number(max_value)){
			$(e).val("");
			message = "กรุณากรอกข้อมุลให้ถูกต้อง"
			alertError(message);
		}else if(value == ""){
			message = "กรุณากรอกข้อมุลให้ถูกต้อง"
			alertError(message);
		}
	}
}

function validateMaxPeriod_OL(e){
	var value = $(e).val();
	var min_value = $(e).parent().parent().find('td:nth-child(6) input').val();
	
	if(min_value == ""){
		$(e).val("");
		message = "กรุณากรอกข้อมุลให้ถูกต้อง"
		alertError(message);
	}else{
		if(Number(value) < Number(min_value)){
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
	}
}

function validateBeforePeriod_OL(e){
	var id = $(e).attr("id");
		id = id.replace("Periodfrom_OL","");
	var before_id = Number(id)-1;
		
	var value = replaceComma($(e).val());
	var before_from_value = replaceComma($("#Periodfrom_OL"+before_id).val());
	var before_to_value = replaceComma($("#Periodto_OL"+before_id).val());
	
	if((before_from_value == "" && before_to_value == "") || (before_from_value != "" && before_to_value == "") || (before_from_value == "" && before_to_value != "")){
		message = "กรุณากรอกข้อมุลให้ครบถ้วน"
		alertError(message);
		$(e).val("");
	}else{
		if(value != ""){
			if(Number(value) != (Number(before_to_value)+1)){		
				message = "กรุณากรอกข้อมุลให้ถูกต้อง"
				alertError(message);
				$(e).val(Number(before_to_value)+1);
			}
		}
	}
}

/*ข้อกำหนดการรับประกัน*/
/**Khwan Fix***/
//การซื้อสัญญาแนบท้ายควบ
function disabled_rider_buy_meth(type){
	if(type == 1){
		//ซื้อตามจำนวนเงินเอาประกันภัย
		var rd1 = $("#rd_buy_contractAmount_OL1").prop("checked");
		var rd2 = $("#rd_buy_contractAmount_OL2").prop("checked");
		
		if(rd1 == true){
			$("#div_buy_followCapital>.panel-body>div.col-sm-12:nth-child(2)").removeClass("disabledAll");
		}
		
		if(rd2 == true){
			$("#div_buy_followCapital>.panel-body>div.col-sm-12:nth-child(2)").addClass("disabledAll");
			
			//เช็คค่าที่เลือกอยู่
			$("#tbl_contractAmount_OL tbody>tr").each(function(){
				var this_value = $(this).find("input:checkbox").val();
				var this_chk = $(this).find("input:checkbox").prop("checked");
				var this_prd_code = $(this).find("td:nth-child(2)").text();
				
				
				if(this_chk == true){
					$(this).find("input:checkbox").prop("checked", false);
					console.log("prd>> "+this_prd_code);
					add_coverageRider_OL(this,this_value,'','',this_prd_code,'','SA_ONLY');
					
				}
			});

		}
		
	}else{
		//ซื้อตามเบี้ยประกันภัย
		var rd1 = $("#rd_buy_contractInsure_OL1").prop("checked");
		var rd2 = $("#rd_buy_contractInsure_OL2").prop("checked");
		
		if(rd1 == true){
			$("#div_buy_followRate>.panel-body>div.col-sm-12:nth-child(2)").removeClass("disabledAll");
		}
		
		if(rd2 == true){
			$("#div_buy_followRate>.panel-body>div.col-sm-12:nth-child(2)").addClass("disabledAll");
			
			//เช็คค่าที่เลือกอยู่
			$("#tbl_contractInsure_OL tbody>tr").each(function(){
				var this_value = $(this).find("input:checkbox").val();
				var this_chk = $(this).find("input:checkbox").prop("checked");
				var this_prd_code = $(this).find("td:nth-child(2)").text();
				
				
				if(this_chk == true){
					$(this).find("input:checkbox").prop("checked", false);
					console.log("prd>> "+this_prd_code);
					add_coverageRider_OL(this,this_value,'','',this_prd_code,'','PREM_ONLY');
					
				}
			});
		}
	}
}

/*************************End Khwan Fix********************************/

function getData_TabUseRight_rider_OL(cov_code,type,prd_code_rider,response,show_cov,main_cov){
	var show_cov_code = "";
	var show_main_code = "";
	if(type != "PR"){
		show_cov_code = cov_code;
	}else{
		show_cov_code = prd_code_rider;
	}
	
	var font_color = "";
	if(type == "E"){
		font_color = "font-term-yellow";
		show_main_code = main_cov;
	}else{
		font_color = "fontcolortable2";
		show_main_code = "";
	}
	
	var lastImgOK = $('#tb_policyholder_OL >tbody>tr:last').attr("id") || 0;
	var numberImgOK = 0;
				
	if(lastImgOK == 0){
		numberImgOK = 1;
	}else{
		numberImgOK = Number(lastImgOK.replace("tb_policyholder_OL",""))+1;
	}
	var sl_tab2_cal = $("#hide_sl_cal_OL").val();
	row5 = 	"<tr id=\"tb_policyholder_OL"+numberImgOK+"\" data-key='"+prd_code_rider+"' data-main='"+show_main_code+"'>"+
				"<td width=\"20%\" class=\"text-center verticalCenter "+font_color+" borderBlack\">"+
				"<input type='hidden' id='prd_rider_code' value='"+prd_code_rider+"'>"+
				"<input type='hidden' id='cov_rider_code' value='"+cov_code+"'>"
					if(type != "PR"){
						row5 += "<label>"+cov_code+"</label>"
					}else{
						row5 += "<label>"+prd_code_rider+"</label>"
					}
			row5 += "</td>"+
				"<td width=\"10%\" class=\"text-center verticalCenter fontcolortable2 borderBlack\">"+
					"<label></label>"+					
				"</td>"+	
				"<td width=\"25%\" class=\"text-center verticalCenter fontcolortable2 borderBlack\">"+
					"<input type='hidden' id='rate_cat_id_tb_useRight'/>"+
					"<input type='hidden' id='rate_layout_id_tb_useRight'/>"+
					"<input type='hidden' id='file_id_tb_useRight'/>"+
					"<label></label>"+					
				"</td>"+
				"<td width=\"20%\"class=\"text-center verticalCenter borderBlack\">"+
				"<select class=\"form-control\" disabled><option value='NONE'>None</option>"+sl_tab2_cal+"</select></td>"+
			"</tr>";
			
		if(type == "E"){
			var num_main = $("#tb_policyholder_OL tbody>tr[data-main='"+main_cov+"']").length;
			if(num_main > 0){
				$(row5).insertAfter("#tb_policyholder_OL tbody>tr[data-main='"+main_cov+"']:last");
			}else{
				$(row5).insertAfter("#tb_policyholder_OL tbody>tr[data-key='"+main_cov+"']");
			}
			
		}else{
			$("#tb_policyholder_OL tbody").append(row5);
		}
		
		//renew id
		 var new_id = 0;
		 $("#tb_policyholder_OL tbody>tr").each(function(){
			 new_id = new_id+1;
			 $(this).attr("id", "tb_policyholder_OL"+new_id);
		 });
		
		var arrRider = [];
		arrRider.push(cov_code);
		get_row_useRight_OL(arrRider);
		
}
/********************************************/
/* การชำระเบี้ยด้วยบัตรเครดิต */
$("#lb_credit_firstYear_OL").on("change",function(){
	var value = $("#lb_credit_firstYear_OL option:selected").val();
	if(value !== "NONE"){
		$("#lb_credit_nextYear_OL").attr("disabled",false);
		
		if(value == "CUSTOMER_FEE"){
			$("input[name='chk_first_pay_premium_OL[]'][value='CREDIT_CARD']").attr("disabled",true);
		}else{
			$("input[name='chk_first_pay_premium_OL[]'][value='CREDIT_CARD']").attr("disabled",false);			
		}
		
	}else{
		
		if(value == "CUSTOMER_FEE"){
			$("input[name='chk_first_pay_premium_OL[]'][value='CREDIT_CARD']").attr("disabled",false);
		}
		
		$("#lb_credit_nextYear_OL option[value='NONE']").attr("selected","selected");
		$("#lb_credit_nextYear_OL").attr("disabled","disabled");
		$("input[name='chk_first_pay_premium_OL[]'][value='CREDIT_CARD']").prop("checked",false).attr("disabled",true);
		$("input[name='chk_next_pay_premium_OL[]'][value='CREDIT_CARD']").prop("checked",false).attr("disabled",true);
	}
	
})
/* การชำระเบี้ยด้วยบัตรเครดิต */
$("#lb_credit_nextYear_OL").on("change",function(){
	var value = $("#lb_credit_nextYear_OL option:selected").val();
	if(value !== "NONE" && value != "CUSTOMER_FEE"){
		$("input[name='chk_next_pay_premium_OL[]'][value='CREDIT_CARD']").attr("disabled",false);
	}else{
		$("input[name='chk_next_pay_premium_OL[]'][value='CREDIT_CARD']").prop("checked",false).attr("disabled",true);
	}
})

$("#lb_saleChannel_OL").on('change', function(){
	var systemCode = $('#lb_saleChannel_OL :selected').val();
	if (systemCode != "" && systemCode != "NONE") {
		$("#lb_partner_OL option").remove();
		var opt_none = "<option value='NONE' selected>None</option>";
		$("#lb_partner_OL").append(opt_none);
		searchPartner_OL();
	}
	else{
		$("#lb_partner_OL option").remove();
		var opt_none = "<option value='NONE' selected>None</option>";
		$("#lb_partner_OL").append(opt_none);
	}
});

function searchPartner_OL(){
	var systemCode = $('#lb_saleChannel_OL :selected').val();
	var json_data = {
			"method": "GetPartner",
	        "systemCode": systemCode
		}
	$.ajax({
		url: 'ProductBasePlanOL_Data_default_Servlet',
		type: "POST",
		data: json_data,
		async: false,
		success: function (response) {
			var row_PDPartner = "";	
			for (i in response.partner) {
				var obj_PDPartner = response.partner[i];
					row_PDPartner += "<option data-id='"+obj_PDPartner.pass+"' value='"+obj_PDPartner.key+"'>"+obj_PDPartner.text+"</option>";
			}
			$("#lb_partner_OL").append(row_PDPartner);
		}
	})
}

/*ผลประโยชน์การขาย*/
function chk_saleCondition_OL(type){
	if(type == 1){
		$("#div_SaleNoCondition_OL").show();
		$("#div_SaleHaveCondition_OL").hide();
	}else{
		$("#div_SaleNoCondition_OL").hide();
		$("#div_SaleHaveCondition_OL").show();
		
		var num_row = $("#tb_YearCondition_OL tbody>tr").length;
		var num_chk = 0;
		$("#panel_SaleCondition_OL1 input:checkbox").each(function(){
			if($(this).prop("checked") == true){
				num_chk++;
			}
		})
		
		if(num_row > 0){
			$("#deleteRowBasicInfo_CL").prop("disabled", false);
		}else{
			$("#deleteRowBasicInfo_CL").prop("disabled", true);
		}
		
		if(num_chk > 0){
			$("#btn_generate_series_OL").prop("disabled", false);
		}else{
			$("#btn_generate_series_OL").prop("disabled", true);
		}
	}
}

//แบบปกติ
function addrowSaleNormal_OL(row,parent) {
	var rowChild = 0;
	var rowChild_count = $("#tbl_SaleBenefitNormal_OL tbody>tr[data-id='"+row+"']").length || 0;
	
	if(rowChild_count < 0){
		rowChild = 1;
	}else{
		rowChild = rowChild_count+1;
	}
	var id_rowChild = row+"_"+rowChild;
	var name_tr 	= "tr_SaleBenefitNormalChild_OL"+row+"_"+rowChild;
	var serie_name 	= $("#tr_SaleBenefitNormal_OL"+row).find("td:nth-child(3) label").text();
	var new_row 		=  "<tr id='"+name_tr+"' data-id='"+id_rowChild+"' data-group='"+row+"' data-level='2'>"+
							"<td class='text-center verticalCenter fontcolortable1 borderBlack'></td>"+
							"<td class='text-center verticalCenter borderBlack'></td>"+
							"<td class='text-center verticalCenter borderBlack'><label>"+serie_name+"</label></td>"+
							"<td class='text-center verticalCenter borderBlack'>"+
								"<i class='glyphicon icon-blue-circle glyphicon-minus icon_active' id='removeSaleNormalChild_"+id_rowChild+"' onclick=\"removerowSale_OL('"+name_tr+"');\"></i>"+
							"</td>"+
							"<td class='text-center verticalCenter borderBlack'>"+
								"<input type='text' class='form-control datepicker_ol' id='datefrom_SaleBenefitNormal_OL1' value='' placeholder='dd/mm/yyyy' maxlength='10'>"+
							"</td>"+
							"<td class='text-center verticalCenter borderBlack'>"+
								"<input type='text' class='form-control datepicker_ol' id='dateto_SaleBenefitNormal_OL1' value='' placeholder='dd/mm/yyyy' maxlength='10'>"+
							"</td>"+
							"<td class='text-right verticalCenter borderBlack'>"+
								"<input type='text' class='auto form-control text-center width40px' value='0' data-v-min='0' data-v-max='99'>"+
							"</td>"+
							"<td class='text-right verticalCenter borderBlack'>"+
								"<input type='text' class='auto form-control text-center width40px' value='0' data-v-min='0' data-v-max='99'>"+
							"</td>"+
							"<td class='text-right verticalCenter borderBlack'>"+
								"<input type='text' class='auto form-control text-center width40px' value='0' data-v-min='0' data-v-max='99'>"+
							"</td>"+
							"<td class='text-right verticalCenter borderBlack'>"+
								"<input type='text' class='auto form-control text-center width40px' value='0' data-v-min='0' data-v-max='99'>"+
							"</td>"+
							"<td class='text-right verticalCenter borderBlack'>"+
								"<input type='text' class='auto form-control text-center width40px' value='0' data-v-min='0.00' data-v-max='100.00'>"+
							"</td>"+
							"<td class='text-right verticalCenter borderBlack'>"+
								"<input type='text' class='auto form-control text-center width40px' value='0' data-v-min='0.00' data-v-max='100.00'>"+
							"</td>"+
							"<td class='text-right verticalCenter borderBlack'>"+
								"<input type='text' class='auto form-control text-center width40px' value='0' data-v-min='0.00' data-v-max='100.00'>"+
							"</td>"+
							"<td class='text-right verticalCenter borderBlack'>"+
								"<input type='text' class='auto form-control text-center width40px' value='0' data-v-min='0.00' data-v-max='100.00'>"+
							"</td>"+
							"<td class='text-right verticalCenter borderBlack'>"+
								"<input type='text' class='auto form-control text-center width40px' value='0' data-v-min='0.00' data-v-max='100.00'>"+
							"</td>"+
							"<td class='text-right verticalCenter borderBlack'>"+
								"<input type='text' class='auto form-control text-center width40px' value='0' data-v-min='0.00' data-v-max='100.00'>"+
							"</td>"+
					 	"</tr>";			  
	
	if(rowChild_count > 0){
		$(new_row).insertAfter($("#tbl_SaleBenefitNormal_OL>tbody>tr[data-id='"+row+"']").closest('tr'));
	}else{
		$(new_row).insertAfter($("#tbl_SaleBenefitNormal_OL>tbody>tr[data-group="+row+"]").closest('tr'));
	}
	
}

//*** Table PM_Rate
function deleteRowPM_Rate1_OL() {
	
	if( $("#tb_PM_Rate_OL tbody>tr").length > 0){
		$("#txt_dropBasePlan_OL").text("ต้องการลบแบบประกันหลักใช่หรือไม่ ?")
		$("#modal_dropBasePlan_OL").modal("show")
		
		$("#bt_approved_dropBasePlanOL").click(function(){
			var key_basePlan = $("#tb_PM_Rate_OL tbody>tr").eq(0).find('td:nth-child(1) label').text();
			$("#chk_sex_BP1_OL").prop("checked",false).prop("disabled",true);
			$("#chk_sex_BP2_OL").prop("checked",false).prop("disabled",true);
			$("#tbl_PD_Mode_OL").find('input[type="checkbox"]:checked').prop("checked",false).attr("disabled","disabled");
			$("#tbl_modeTerms_OL").find('input[type="checkbox"]:checked').prop("checked",false).attr("disabled","disabled");
			$("#tbl_modeTerms_OL2").find('input[type="checkbox"]:checked').prop("checked",false).attr("disabled","disabled");
			$("#tb_Sperately_Pay_ol").find('input[type="checkbox"]:checked').prop("checked",false).attr("disabled","disabled");
			$("#tb_Sperately_Pay_ol").find('input[type="text"]').val(0.00);
			$("#chk_sperately_pay_OL").prop("checked",false);
			$(".checkbox_prop").attr("disabled","disabled");
			$("#tb_BasicInformation1_OL tbody>tr").remove();
			$("#inputSA_OL").val("");
			$("#tbl_formulaTerms_OL input[type='radio']").attr("disabled","disabled");
			$('#tb_PM_Rate_OL tbody').empty();		//remove row
			$("#validate_input4_ol").show();
			$("#div_ageRange_OL").css("display","none");
			$("#ch_change_condition8_OL").prop("checked",false);
			
			/*SA Package*/
	/*		$("#tb_plan_YRT_OL tbody>tr").each(function(){
				if(key_basePlan == $(this).attr('data-key')){
					$(this).remove();
				}
			});*/
			
			/*ลบตารางพิกัดอายุ*/
			$("#tb_ageRange_OL tbody>tr").each(function(){
				if(key_basePlan == $(this).find('td:nth-child(1) label').text()){
					$(this).remove();
				}
			});
			
			/*Khwan Fix ลบ endorse 15/11/2019*/
			$("#tb_ageRange_OL>tbody tr[data-level='2']").each(function(){	
				var ED_code = $(this).find("td:nth-child(1) a").attr("data-code");
				if(ED_code == key_basePlan){
					$(this).remove();
				}
			});
			
			/*ลบตารางแบ่งจ่าย*/
			$("#chk_sperately_pay_OL").prop("checked",false);
			$("#chk_sperately_pay_OL").attr("disabled",true)
			$("#tb_Sperately_Pay_OL tbody>tr").each(function(){
				$(this).find('td:nth-child(1) input').removeClass("base")
				$(this).find('td:nth-child(3) input').val(0)
			})
			
			/*TAB : Lookup Age Type*/
			$("#lb_age_specific_OL option").remove();
			
			/*TAB : ตำนวณเบี้ยประกัน ลบตารางการคำนวณจำนวนเงินเอาประกันภัย*/
			var flag_serie = false;
			$("#tb_Calculate_insurance_OL tbody>tr").each(function(){
				if(key_basePlan == $(this).find('td:nth-child(1) label').text()){
					$(this).remove();
					flag_serie = true;
				}else if($(this).find('td:nth-child(1) label').text() != ""){
					flag_serie = false;
				}else if(flag_serie){
					$(this).remove();
				}
			});
			
			/*TAB : ตำนวณเบี้ยประกัน ลบการคำนวณเบี้ยประกัน*/
			$("#tb_Calculate_insurance2_OL tbody>tr").each(function(){
				if(key_basePlan == $(this).find('td:nth-child(1) label').text()){
					$(this).remove();
				}
			});
			
			/*TAB : การใช้สิทธิ์ตามกรมธรรม์ ลบการเวนคืน กธ.*/
			$("#tb_policyholder_OL tbody>tr").each(function(){
				if(key_basePlan == $(this).find('td:nth-child(1) label').text()){
					$(this).remove();
				}
			});
			
			/*TAB : ผลประโยชน์การขาย ระบุผลประโยชน์การขาย*/
			$("#tbl_SaleBenefitNormal_OL tbody>tr").each(function(){
				if(key_basePlan == $(this).find('td:nth-child(1) label').text()){
					$(this).remove();
				}
				
				if($(this).attr("data-parent") == 1){
					$(this).remove();
				}
			});
			
			var prd = $("#pass_Insurance_product_ol").val()
			$("#tbl_SaleBenefit_OL tbody>tr").each(function(){
				if(prd == $(this).find('td:nth-child(1) #prd_rider_code_cond_OL').val()){
					$(this).remove();
				}
				
				if($(this).attr("data-parent") == 1){
					$(this).remove();
				}
			});
			
			
			/*TAB : ข้อกำหนดการรับประกัน ลบการคำนวณจำนวนเงินเอาประกันภัย*/
			$("#tbl_cal_amount_OL tbody>tr").each(function(){
				if(key_basePlan == $(this).find('td:nth-child(1) label').text()){
					$(this).remove();
				}
			});
			
			/*TAB : ข้อกำหนดการรับประกัน การรับแบบเพิ่มเบี้ยพิเศษ*/
			$("#tbl_increase_premium_OL tbody>tr").each(function(){
				if(key_basePlan == $(this).find('td:nth-child(1) #cov_code').val()){
					$(this).remove();
				}
			});
			
			/*TAB : ข้อกำหนดการรับประกัน ลบ Tab policy*/
			$("#tab_policy_panel_OL li").each(function(){
				if(key_basePlan == $(this).find('a').text()){
					$(this).remove();
				}
			})
			$("#policy_in_"+key_basePlan).remove();
			
			/*TAB : ข้อกำหนดการรับประกัน ลบ ระยะเวลาเอาประกันภัย*/
			$("#div_ageInsurance_OL").hide()
			$("#div_rangeInsurance_OL").hide()
			
			/*TAB : ข้อกำหนดการรับประกัน ลบการคำนวณจำนวนเงินเอาประกันภัย*/
			$("#tbl_insure_single_OL .font-term-purple").parent().remove();
			/*TAB : ข้อกำหนดการรับประกัน ลบการรับแบบเพิ่มเบี้ยพิเศษ*/
			$("#tbl_increase_premium_OL .font-term-purple").parent().remove();
			
			/*เก็บค่าที่ลบไป*/
			if($('#arr_prd_rider_code_delete_OL').val() != ""){
				var arr_prd_rider_code = new Array($('#arr_prd_rider_code_delete_OL').val());
			}else{
				var arr_prd_rider_code = new Array();
			}
				arr_prd_rider_code.push(key_basePlan);
			$('#arr_prd_rider_code_delete_OL').val(arr_prd_rider_code);
			
			$("#modal_dropBasePlan_OL").modal("hide")
			
			/*ถ้า BasePlan นั้น มี Bundle จะตามไปลบด้วย*/
			$("#tb_Additional_contract_OL tbody>tr").each(function(){
				var seq = $(this).attr('id')
					seq = seq.replace("tr_Additional_contract_","")
				if($(this).find('td:nth-child(2) input[type="hidden"]').val() == "BUNDLE"){
					var cov_code = $(this).find('td:nth-child(3) #cov_code_rider_'+seq).val();
					var prd_rider_code = $(this).find('td:nth-child(3) #prd_code_rider_'+seq).val();
					/*ไปลบทุก Tab ที่มี Bundle ผูกไปก้วย*/
					deleteRow_By_CovCode(cov_code, prd_rider_code);
					
				}
			})
			
			/*validate ปุ่ม checkbox type ถ้าลบตัวที่มี bundle อยุ่ด้วย จะไม่ติ๊ก*/
			validate_rd_tbAdditional()
			
			/*ลบ benef_baseplan*/
			$("#tab_benefitBaseplan_in").css("display","none")
			$("#li_bnf_base_ol").remove();
			$("#die_li").remove();
			$("#refundMaturity_li").remove();
			$("#refund_li").remove();
			$("#pension_li").remove();
			$("#medicalFund_li").remove();
			$("#dividend_li").remove();
			$("#prd_bnf_OL1").removeClass("in active");
			
			$("#prd_bnf_OL2").removeClass("in active");
			
			$("#prd_bnf_OL3").removeClass("in active");
			
			$("#prd_bnf_OL4").removeClass("in active");
			
			$("#prd_bnf_OL5").removeClass("in active");
			
			$("#prd_bnf_OL6").removeClass("in active");
		
			$("#tab_die_bnf_base").remove();
			$("#DeathExceptionOL").remove();
			$("#bnf_prd_bnf_OL2").remove();
			$("#bnf_prd_bnf_OL3").remove();
			$("#bnf_prd_bnf_OL4").remove();
			$("#bnf_prd_bnf_OL5").remove();
			$("#bnf_prd_bnf_OL6").remove();
		
			
			var tb_rider_row = $("#tb_Additional_contract_OL tbody>tr").length;
			if(tb_rider_row > 0){
				
				var tb_id = $("#tb_Additional_contract_OL tbody>tr:first").attr('id')
				
				tb_id = tb_id.replace("tr_Additional_contract_","");
				
					var cov_code_rider = $("#cov_code_rider_"+tb_id).val();
					
					$("#bnf_"+cov_code_rider+"_OL").addClass("active")
					$("#menu_ProductBnf1_OL").removeClass("in active");
					$("#menu_ProductBnf2_OL").addClass("in active");
					$("#tabBC_00_"+cov_code_rider+"_OL").addClass("active in")
					$("#BC0_"+cov_code_rider+"_OL").css("display","block")
					$("#bnf_rider_"+cov_code_rider+"").css("display","block")
						
			}
			
		})
	}
	
	renew_TableAge_OL();
	
	
}

//delete row table	*PM_Rate1
function deleteRowAdditional_contract_OL()
	{
	var imgOKcount = $("#tb_Additional_contract_OL i.glyphicon-ok").length;
	if(imgOKcount <= 0)
	{	
		message = "กรุณาเลือกรายการที่ต้องการลบ";
		alertError(message);
	}else{
	message = "ต้องการลบรายการใช่หรือไม่";
	alertDeleteError(message);
	
	$("#btn_confirm_del").click(function(){
		var tblID 		= "#tb_Additional_contract_OL";
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
				var checked_type = $(tblID+" #tr_Additional_contract_"+i).find("td:nth-child(4)").text();
				var checked_id = $(tblID+" #tr_Additional_contract_"+i).find("td:nth-child(3) label").text();
				var prd_rider_code = $(tblID+" #tr_Additional_contract_"+i).find("td:nth-child(3) input[type='hidden']").val();
				
				
				if(checked == "glyphicon glyphicon-ok"){	

					var cov_code = $(tblID+" #tr_Additional_contract_"+i).find("td:nth-child(3) #cov_code_rider_"+i+"").val();
					
					/*SA Package*/
					$("#tb_plan_YRT_OL>tbody tr").each(function(){
						var SA_type = $(this).attr('data-key'); //.find("td:nth-child(2)").text();
						if(SA_type == checked_id){
							deleteTableRow(this);
						}
					});
					
					/*บันทึกสลักหลังและพิกัดอายุ*/
					$("#tb_ageRange_OL>tbody tr").each(function(){
						var age_type = $(this).find("td:nth-child(1) label").text();
						if(age_type == checked_id){
							deleteTableRow(this);
						}
					});
					
					/*Khwan Fix ลบ endorse 15/11/2019*/
					$("#tb_ageRange_OL>tbody tr[data-level='2']").each(function(){	
						var ED_code = $(this).find("td:nth-child(1) #main_rider_code").val();
						if(ED_code == checked_id){
							$(this).remove();
						}
					});
					
					/*TAB : ตำนวณเบี้ยประกัน ลบตารางการคำนวณจำนวนเงินเอาประกันภัย*/
					var flag_serie = false;
					$("#tb_Calculate_insurance_OL tbody>tr").each(function(){
						/*Khwan Fix ลบ Endorse ด้วย 27/11/2019*/
						var type = $(this).find("td:nth-child(1) #type_OL").val();
						var main_cov = "";
						if(type == "E"){
							main_cov = $(this).attr('data-main');
						}else{
							main_cov = $(this).find('td:nth-child(1) label').text();
						}
						
						if(checked_id == main_cov){
							$(this).remove();
							flag_serie = true;
						}else if($(this).find('td:nth-child(1) label').text() != ""){
							flag_serie = false;
						}else if(flag_serie){
							$(this).remove();
						}
						
					});
					

					/*TAB : ตำนวณเบี้ยประกัน ลบการคำนวณเบี้ยประกัน*/
					$("#tb_Calculate_insurance2_OL tbody>tr").each(function(){
						if(checked_id == $(this).find('#prd_rider_code_OL').val()){
							$(this).remove();
						}
					});
					
					/*TAB : การใช้สิทธิ์ตามกรมธรรม์ ลบการเวนคืน กธ.*/
					$("#tb_policyholder_OL tbody>tr").each(function(){
						/*Khwan Fix ลบ Endorse ด้วย 27/11/2019*/
						var data_main = $(this).attr("data-main");
						
						if(data_main != ""){
							if(checked_id == data_main){
								$(this).remove();
							}
						}else{
							if(checked_id == $(this).find('td:nth-child(1) label').text()){
								$(this).remove();
							}
						}
						
					});
					
					/*TAB : ผลประโยชน์การขาย*/
					//แบบปกติ
					$("#tbl_SaleBenefitNormal_OL tbody>tr").each(function(){
						/*Khwan Fix ลบ Endorse ด้วย 27/11/2019*/
						var type = $(this).find("td:nth-child(1) #cov_type_OL").val();
						var main_cov = "";
						if(type == "E"){
							main_cov = $(this).attr('data-main');
						}else{
							main_cov = $(this).find('#prd_rider_code_OL').val();
						}
						
						if(checked_id == main_cov){
							$(this).remove();
						}
					})
					
					/*Tab ผลประโยชน์ความคุ้มครอง - ผลประโยชน์ความคุ้มครอง*/
					$("#tabBenefitProduct_OL li").each(function(){
						/*Khwan Fix ลบ Endorse ด้วย 27/11/2019*/
						var data_main = $(this).attr("data-main");
						var cov_code = $(this).find('a').text();
						
						if(data_main != ""){
							if(data_main == checked_id){
								deleteTableRow($(this));	
								$("#bnf_rider_"+cov_code).remove();	
							}
						}else{
							if(cov_code == checked_id){
								deleteTableRow($(this));	
								$("#bnf_rider_"+cov_code).remove();	
							}
						}
						
					})
					
					
					//แบบมีเงื่อนไข
					$("#tbl_SaleBenefit_OL tbody>tr").each(function(){
						/*Khwan Fix ลบ Endorse ด้วย 27/11/2019*/
						var type = $(this).find("td:nth-child(1) #cov_type_cond_OL").val();
						var main_cov = "";
						if(type == "E"){
							main_cov = $(this).attr('data-main');
						}else{
							main_cov = $(this).find('#prd_rider_code_cond_OL').val();
						}
						
						if(checked_id == main_cov){
							$(this).remove();
						}
					})
					
					/*TAB : ข้อกำหนดการรับประกัน ลบ Tab policy*/
					$("#tab_policy_panel_OL li").each(function(){
						/*Khwan Fix ลบ Endorse ด้วย 27/11/2019*/
						var cov_code = $(this).find('a').text();
						var data_class = $(this).find('a').attr("class");
						
						if(data_class == "yellow"){
							if(checked_id == $(this).attr("data-main")){
								$(this).remove();
								$("#policy_in_"+cov_code).remove();
							}
						}else{
							if(checked_id == $(this).find('a').text()){
								$(this).remove();
								$("#policy_in_"+cov_code).remove();
							}
						}
						
					})
					
					
					/*TAB : ข้อกำหนดการรับประกัน ลบตาราง จำนวนเงินเอาประกันภัยสูงสุด (ต่อราย)*/
					$("#tbl_insure_single_OL tbody>tr").each(function(){
						if(prd_rider_code == $(this).find('td:nth-child(1) input[type="checkbox"]').val()){
							$(this).remove();
						}
					})
					
					/*TAB : ข้อกำหนดการรับประกัน ลบตาราง การรับแบบเพิ่มเบี้ยพิเศษ */
					$("#tbl_increase_premium_OL tbody>tr").each(function(){
						if(checked_id == $(this).find('td:nth-child(1) #prd_rider_code').val()){
							$(this).remove();
						}
					})
					
					/*TAB : ข้อกำหนดการรับประกัน การซื้อสัญญาแนบท้ายควบ */
					cancel_disabled_coverageRider_OL(prd_rider_code)
					
					/*เก็บค่าที่ลบไป*/
					if($('#arr_prd_rider_code_delete_OL').val() != ""){
						var arr_prd_rider_code = new Array($('#arr_prd_rider_code_delete_OL').val());
					}else{
						var arr_prd_rider_code = new Array();
					}
						arr_prd_rider_code.push(prd_rider_code);
						
					$('#arr_prd_rider_code_delete_OL').val(arr_prd_rider_code);
					deleteTableRow(tblID+">tbody>tr[data-group="+i+"]");
					deleteTableRow(tblID+" #tr_Additional_contract_"+i);										
				
					
					var row_baseplan = $("#tb_PM_Rate_OL tbody>tr").length;
					
					if(row_baseplan == 0){
						
						var cov_code_rider = "";
						
						$("#bnf_"+cov_code+"_OL").remove()
						$("#benefitDetail"+cov_code+"_OL").remove();
						
						var tb_rider_row = $("#tb_Additional_contract_OL tbody>tr").length;
							if(tb_rider_row > 0){
									
								var tb_id = $("#tb_Additional_contract_OL tbody>tr:first").attr('id')
									
								tb_id = tb_id.replace("tr_Additional_contract_","");
									
									cov_code_rider = $("#cov_code_rider_"+tb_id).val();
										
									$("#bnf_"+cov_code_rider+"_OL").addClass("active")
									$("#menu_ProductBnf1_OL").removeClass("in active");
									$("#menu_ProductBnf2_OL").addClass("in active");
									$("#tabBC_00_"+cov_code_rider+"_OL").addClass("active in")
									$("#BC0_"+cov_code_rider+"_OL").css("display","block")
									$("#bnf_rider_"+cov_code_rider+"").css("display","block")
									
							}	
					
						
					}else{
						$("#bnf_"+cov_code+"_OL").remove()
						$("#benefitDetail"+cov_code+"_OL").remove();
					
		
					}
					
				}
				
				
		}
			if($("#div_tb_Additional_contract_OL").innerHeight() <= 264){
				$("#div_tb_Additional_contract_OL").removeClass("settableproduct");
			}
	
			//validate *
			if( $("#tb_Additional_contract_OL tbody>tr").length > 0){
				$("#validate_input11_ol").hide();
			}else{
				$("#validate_input11_ol").show();
			}
			
			/*validate type checkbox ที่ลบไป*/
			validate_rd_tbAdditional()
			
			renew_TableAge_OL();
		});
	}
	
	
}

/*ลบ row ตาม cov_code*/
function deleteRow_By_CovCode(cov_code, prd_rider_code){
	var del_cov_code = "";
	
	/* Tab BasicInfo - สัญญาเพิ่มเติม */
	$("#tb_Additional_contract_OL tbody>tr").each(function(){
		var row_id = $(this).attr('id')
			row_id = row_id.replace("tr_Additional_contract_","")
		if( cov_code == $(this).find('td:nth-child(3) #cov_code_rider_'+row_id).val()){
			deleteTableRow(this);
		}
	})
	
	/*******Khwan Fix ลบ Endorse ด้วย 27/11/2019*********/
	/*Tab คำนวณเบี้ย - การคำนวณจำนวนเงินเอาประกันภัย*/
	var flag_serie = false;
	$("#tb_Calculate_insurance_OL tbody>tr").each(function(){
		
		var type = $(this).find("td:nth-child(1) #type_OL").val();
		var main_cov = "";
		 
		if(type == "E"){
			main_cov = $(this).attr('data-main');
			del_cov_code = prd_rider_code;
		}else{
			main_cov = $(this).find('td:nth-child(1) label').text();
			del_cov_code = cov_code;
		}
		
		if(del_cov_code == main_cov){
			$(this).remove();
			flag_serie = true;
		}else if($(this).find('td:nth-child(1) label').text() != ""){
			flag_serie = false;
		}else if(flag_serie){
			$(this).remove();
		}
		
	});
	
	/* Tab BasicInfo - ตารางพิกัดอายุ */
	$("#tb_ageRange_OL tbody>tr").each(function(){
		//alert(cov_code+"|"+$(this).find('td:nth-child(1) #cov_code').val())
		if( cov_code == $(this).find('td:nth-child(1) #cov_code').val()){
			deleteTableRow(this);
		}
	})
	
	/*Khwan Fix ลบ endorse 27/11/2019*/
	$("#tb_ageRange_OL>tbody tr[data-level='2']").each(function(){	
		var ED_code = $(this).find("td:nth-child(1) #main_rider_code").val();
		if(ED_code == prd_rider_code){
			$(this).remove();
		}
	});

	/*Tab : การใช้สิทธิ์ตามกรมธรรม์ ลบการเวนคืน กธ.*/
	$("#tb_policyholder_OL tbody>tr").each(function(){
		/*Khwan Fix ลบ Endorse ด้วย 27/11/2019*/
		var data_main = $(this).attr("data-main");
		
		if(data_main != ""){
			if(prd_rider_code == data_main){
				$(this).remove();
			}
		}else{
			if(cov_code == $(this).find('td:nth-child(1) label').text()){
				$(this).remove();
			}
		}
		
	});
	
	/*Tab ผลประโยชน์การขาย - แบบปกติ*/
	$("#tbl_SaleBenefitNormal_OL tbody>tr").each(function(){
		/*Khwan Fix ลบ Endorse ด้วย 27/11/2019*/
		var type = $(this).find("td:nth-child(1) #cov_type_OL").val();
		var main_cov = "";
		if(type == "E"){
			main_cov = $(this).attr('data-main');
		}else{
			main_cov = $(this).find('#prd_rider_code_OL').val();
		}
		
		if(prd_rider_code == main_cov){
			$(this).remove();
		}
	})
	
	$("#tbl_SaleBenefit_OL tbody>tr").each(function(){
		/*Khwan Fix ลบ Endorse ด้วย 27/11/2019*/
		var type = $(this).find("td:nth-child(1) #cov_type_cond_OL").val();
		var main_cov = "";
		if(type == "E"){
			main_cov = $(this).attr('data-main');
		}else{
			main_cov = $(this).find('#prd_rider_code_cond_OL').val();
		}
		
		if(prd_rider_code == main_cov){
			$(this).remove();
		}
	})
	
	
	/*Tab ผลประโยชน์ความคุ้มครอง - ผลประโยชน์ความคุ้มครอง*/
	$("#tabBenefitProduct_OL li").each(function(){
		/*Khwan Fix ลบ Endorse ด้วย 27/11/2019*/
		var data_main = $(this).attr("data-main");
		var this_cov_code = $(this).find('a').text();
		
		if(data_main != ""){
			if(data_main == prd_rider_code){
				deleteTableRow($(this));	
				$("#bnf_rider_"+this_cov_code).remove();	
			}
		}else{
			if(this_cov_code == cov_code){
				deleteTableRow($(this));	
				$("#bnf_rider_"+this_cov_code).remove();	
			}
		}
	})
	
	/* Tab ข้อกำหนด - การรับแบบเพิ่มเบี้ยพิเศษ*/
	$("#tbl_increase_premium_OL tbody>tr").each(function(){
		if( cov_code == $(this).find('td:nth-child(1) #cov_code').val()){
			deleteTableRow(this);
		}
	})
	
	/*TAB : ข้อกำหนดการรับประกัน ลบ Tab policy*/
	$("#tab_policy_panel_OL li").each(function(){
		/*Khwan Fix ลบ Endorse ด้วย 27/11/2019*/
		var this_cov_code = $(this).find('a').text();
		var data_class = $(this).find('a').attr("class");
		
		if(data_class == "yellow"){
			if(prd_rider_code == $(this).attr("data-main")){
				$(this).remove();
				$("#policy_in_"+this_cov_code).remove();
			}
		}else{
			if(cov_code == $(this).find('a').text()){
				$(this).remove();
				$("#policy_in_"+this_cov_code).remove();
			}
		}
		
	})
	
	/**************renew id************/
	renew_TabCalPrem_OL();
	
	//การใช้สิทธิ์ตามกรมธรรม์
	var new_id = 0;
	$("#tb_policyholder_OL tbody>tr").each(function(){
		 new_id = new_id+1;
		 $(this).attr("id", "tb_policyholder_OL"+new_id);
	});
	
	renew_TabSaleBenefitNormal_OL();
	renew_TabSaleBenefitCond_OL();
	
}

/*ลบ row ตาม prd_code_rider*/
function deleteRow_By_PrdCode(prd_rider_code){
	
	/* Tab BasicInfo - สัญญาเพิ่มเติม */
	$("#tb_Additional_contract_OL tbody>tr").each(function(){
		var row_id = $(this).attr('id')
			row_id = row_id.replace("tr_Additional_contract_","")
		if( prd_rider_code == $(this).find('td:nth-child(3) #prd_code_rider_'+row_id).val()){
			deleteTableRow(this);
		}
	})
	
	/* Tab BasicInfo - ตารางพิกัดอายุ */
	$("#tb_ageRange_OL tbody>tr").each(function(){
		if( prd_rider_code == $(this).find('td:nth-child(1) #prd_rider_code').val()){
			deleteTableRow(this);
		}
	})
	
	/*Khwan Fix ลบ endorse 27/11/2019*/
	$("#tb_ageRange_OL>tbody tr[data-level='2']").each(function(){	
		var ED_code = $(this).find("td:nth-child(1) #main_rider_code").val();
		if(ED_code == prd_rider_code){
			$(this).remove();
		}
	});
	
	/*Tab คำนวณเบี้ย - การคำนวณจำนวนเงินเอาประกันภัย*/
	var flag_serie = false;
	$("#tb_Calculate_insurance_OL tbody>tr").each(function(){
		
		var type = $(this).find("td:nth-child(1) #type_OL").val();
		 
		if(type == "E"){
			main_cov = $(this).attr('data-main');			
		}else{
			main_cov = $(this).find('td:nth-child(1) label').text();
		}
		
		if(prd_rider_code == main_cov){
			$(this).remove();
			flag_serie = true;
		}else if($(this).find('td:nth-child(1) label').text() != ""){
			flag_serie = false;
		}else if(flag_serie){
			$(this).remove();
		}
		
	});
	
	/*Tab การใช้สิทธิ์ตามกรมธรรม์ - การเวนคืน กธ.*/
	$("#tb_policyholder_OL tbody>tr").each(function(){
		/*Khwan Fix ลบ Endorse ด้วย 27/11/2019*/
		var data_main = $(this).attr("data-main");
		
		if(data_main != ""){
			if(prd_rider_code == data_main){
				$(this).remove();
			}
		}else{
			if(prd_rider_code == $(this).find('td:nth-child(1) label').text()){
				$(this).remove();
			}
		}
		
	});
	
	/*Tab ผลประโยชน์การขาย - การเวนคืน กธ.*/
	$("#tbl_SaleBenefitNormal_OL tbody>tr").each(function(){
		/*Khwan Fix ลบ Endorse ด้วย 27/11/2019*/
		var type = $(this).find("td:nth-child(1) #cov_type_OL").val();
		var main_cov = "";
		if(type == "E"){
			main_cov = $(this).attr('data-main');
		}else{
			main_cov = $(this).find('#prd_rider_code_OL').val();
		}
		
		if(prd_rider_code == main_cov){
			$(this).remove();
		}
	})
	
	$("#tbl_SaleBenefit_OL tbody>tr").each(function(){
		/*Khwan Fix ลบ Endorse ด้วย 27/11/2019*/
		var type = $(this).find("td:nth-child(1) #cov_type_cond_OL").val();
		var main_cov = "";
		if(type == "E"){
			main_cov = $(this).attr('data-main');
		}else{
			main_cov = $(this).find('#prd_rider_code_cond_OL').val();
		}
		
		if(prd_rider_code == main_cov){
			$(this).remove();
		}
	})
	
	/*Tab ผลประโยชน์ความคุ้มครอง - ผลประโยชน์ความคุ้มครอง*/
	$("#tabBenefitProduct_OL li").each(function(){
		/*Khwan Fix ลบ Endorse ด้วย 27/11/2019*/
		var data_main = $(this).attr("data-main");
		var this_cov_code = $(this).find('a').text();
		
		if(data_main != ""){
			if(data_main == prd_rider_code){
				deleteTableRow($(this));	
				$("#bnf_rider_"+this_cov_code).remove();	
			}
		}else{
			if(this_cov_code == prd_rider_code){
				deleteTableRow($(this));	
				$("#bnf_rider_"+this_cov_code).remove();	
			}
		}
	})
	
	/* Tab ข้อกำหนด - การรับแบบเพิ่มเบี้ยพิเศษ*/
	$("#tbl_increase_premium_OL tbody>tr").each(function(){
		if( prd_rider_code == $(this).find('td:nth-child(1) #prd_rider_code').val()){
			deleteTableRow(this);
		}
	})
	
	/* Tab ข้อกำหนดการรับประกัน - Policy Wording*/
	$("#tab_policy_panel_OL li").each(function(){
		/*Khwan Fix ลบ Endorse ด้วย 27/11/2019*/
		var this_cov_code = $(this).find('a').text();
		var data_class = $(this).find('a').attr("class");
		
		if(data_class == "yellow"){
			if(prd_rider_code == $(this).attr("data-main")){
				$(this).remove();
				$("#policy_in_"+this_cov_code).remove();
			}
		}else{
			if(prd_rider_code == $(this).find('a').text()){
				$(this).remove();
				$("#policy_in_"+this_cov_code).remove();
			}
		}
		
	})
	
	/**************renew id************/
	renew_TabCalPrem_OL();
	
	//การใช้สิทธิ์ตามกรมธรรม์
	var new_id = 0;
	$("#tb_policyholder_OL tbody>tr").each(function(){
		 new_id = new_id+1;
		 $(this).attr("id", "tb_policyholder_OL"+new_id);
	});
	
	renew_TabSaleBenefitNormal_OL();
	renew_TabSaleBenefitCond_OL();
	renew_TableAge_OL();
}


function choose_file_pmRate_OL(textfile,validate,spanOpen,spanDownload){
	var file_name = "";
	var file_ref = "";
	if($("#select_input_pmRate_OL").is(':checked')){
		file_name = $("#fileuploads_PMRateText1_OL").val();
	}
	if($("#select_input_pmRateOriginal_OL").is(':checked')){
		$("#tb_input_modal_pmRate_OL tbody>tr").each(function(i){
			if($(this).find("td:nth-child(1) input[type='radio']").is(":checked")){
				file_name = $(this).find("td:nth-child(3) label").text();
				file_ref = $(this).find("td:nth-child(1) #hd_fileRef_OL"+i+"").val();
				
				$("#"+spanOpen+">span").removeClass("activecolorgray").addClass("activecolorblue");
				$("#"+spanOpen+">span").attr("onclick","openFileTextProduct_OL('"+file_name+"','"+file_ref+"', 41, 'tb_input_fileSee_modal_pmRate_OL', 'modal_input_fileSee_PMRate_OL')");
				$("#"+spanDownload+">span").removeClass("activecolorgray").addClass("activecolorblue");
				$("#"+spanDownload+">span").attr("onclick", "openFile_target('"+file_name+"','"+file_ref+"','txt_download')")
				
			}
		});
		
			
	}else{
		file_name = $("#fileuploads_PMRateText1_OL").val();
		file_ref  = $("#file_ref_OL").val();
		
		if(file_ref != ""){
			$("#"+spanOpen+">span").removeClass("activecolorgray").addClass("activecolorblue");
			$("#"+spanDownload+">span").removeClass("activecolorgray").addClass("activecolorblue");
			$("#"+spanOpen+">span").attr("onclick","openFileTextProduct_OL('"+file_name+"','"+file_ref+"', 41, 'tb_input_fileSee_modal_pmRate_OL', 'modal_input_fileSee_PMRate_OL')");
			$("#"+spanDownload+">span").attr("onclick", "openFile_target('"+file_name+"','"+file_ref+"','txt_download')")
		}else{
			$("#"+spanOpen+">span").removeClass("activecolorblue").addClass("activecolorgray");
			$("#"+spanDownload+">span").removeClass("activecolorblue").addClass("activecolorgray");
		}
		
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
	if($("#select_input_pmRateOriginal_OL").is(':checked')){
		$("#tb_input_modal_pmRate_OL tbody>tr").each(function(i){
			if($(this).find('td:nth-child(1) input[type="radio"]').is(':checked')){
				rateCatId = $(this).find("td:nth-child(1) #hd_rateCatId_OL"+i+"").val();
				fileId = $(this).find("td:nth-child(1) #hd_fileId_OL"+i+"").val();
				layoutId = $(this).find("td:nth-child(1) #hd_fileLayout_OL"+i+"").val();
			}
		})
	}else if($("#select_input_pmRate_OL").is(':checked')){
		rateCatId = $("#rate_cat_pm_OL").val();
		fileId = $("#fileId_pm_OL").val();
		layoutId = $("#rate_layout_pm_OL").val();
	}
	
	if(textfile == "ip_fileuploads_OL_PM_Rate1_Show_1" || textfile == "ip_fileuploads_OL_PM_Rate1_Show_1_1"){
		$("#"+textfile).parent().parent().parent().find("#fileId_base_PM").val(fileId)
		$("#"+textfile).parent().parent().parent().find("#rate_layout_id_base_PM").val(layoutId)
		$("#"+textfile).parent().parent().parent().find("#rate_cat_id_base_PM").val(rateCatId)
	}else{
		var id = textfile;
			id = id.replace("ip_fileuploads_OL_Additional_contract_Show_","");
		
		/*ถ้าเกิดมีลูก data_group จะไม่ใช่ null*/	
		var data_group = $("#"+textfile).parent().parent().parent().data('group');
		var rider_parent = $("#"+textfile).parent().parent().parent().data('id');
		var flag_parent = false;
		$("#tb_Additional_contract_OL tbody>tr").each(function(){
			if( rider_parent == $(this).data('group')){
				flag_parent = true;
				$("#"+textfile).parent().find("#rate_cat_id_rider_PM"+id+"").val(rateCatId)
				$("#"+textfile).parent().find("#fileId_rider_PM"+id+"").val(fileId)
				$("#"+textfile).parent().find("#rate_layout_id_rider_PM"+id+"").val(layoutId)
			}
		})
		if(data_group != null){
			$("#tb_Additional_contract_OL tbody").find('#tr_Additional_contract_'+data_group).find('td:nth-child(6)>div #rate_cat_id_rider_PM'+data_group).val(rateCatId)
			$("#"+textfile).parent().find("#rate_cat_id_rider_PM"+id+"").val(rateCatId)
			$("#"+textfile).parent().find("#fileId_rider_PM"+id+"").val(fileId)
			$("#"+textfile).parent().find("#rate_layout_id_rider_PM"+id+"").val(layoutId)
		}else if(!flag_parent){
			$("#"+textfile).parent().find("#fileId_rider_PM"+id+"").val(fileId)
			$("#"+textfile).parent().find("#rate_layout_id_rider_PM"+id+"").val(layoutId)
			$("#"+textfile).parent().find("#rate_cat_id_rider_PM"+id+"").val(rateCatId)
		}
		
	}
	
	$("#modal_input_PMRate_OL").modal("hide");
}

function addrowSale_OL(row,parent) {
	var rowChild = 0;
	var rowChild_count = $("#tbl_SaleBenefit_OL tbody>tr[data-id='"+row+"']").length || 0;
	
	if(rowChild_count < 0){
		rowChild = 1;
	}else{
		rowChild = rowChild_count+1;
	}
	var id_rowChild = row+"_"+rowChild;
	var name_tr 	= "tr_SaleBenefitChild_OL"+row+"_"+rowChild;
	var serie_name 	= $("#tr_SaleBenefit_OL"+row).find("td:nth-child(3) label").text();
	var removerowChild = 'removerowChild3("'+name_tr+'");';
	var new_row 		=  "<tr id='"+name_tr+"' data-id='"+id_rowChild+"' data-group='"+row+"' data-level='2'>"+
							"<td class='text-center verticalCenter fontcolortable1 borderBlack'></td>"+
							"<td class='text-center verticalCenter borderBlack'></td>"+
							"<td class='text-center verticalCenter borderBlack'><label>"+serie_name+"</label></td>"+
							"<td class='text-center verticalCenter borderBlack'>"+
								"<i class='glyphicon icon-blue-circle glyphicon-minus icon_active' id='removeSaleChild_"+id_rowChild+"' onclick=\"removerowSale_OL('"+name_tr+"');\"></i>"+
							"</td>"+
							"<td class='text-center verticalCenter borderBlack'>"+
								"<input type='text' class='form-control datepicker_ol' id='datefrom_SaleBenefit_OL1' value='' placeholder='dd/mm/yyyy' maxlength='10'>"+
							"</td>"+
							"<td class='text-center verticalCenter borderBlack'>"+
								"<input type='text' class='form-control datepicker_ol' id='dateto_SaleBenefit_OL1' value='' placeholder='dd/mm/yyyy' maxlength='10'>"+
							"</td>"+
							"<td class='text-right verticalCenter borderBlack'>"+
								"<input type='text' class='auto form-control text-center width40px' value='0' data-v-min='0' data-v-max='99'>"+
							"</td>"+
							"<td class='text-right verticalCenter borderBlack'>"+
								"<input type='text' class='auto form-control text-center width40px' value='0' data-v-min='0' data-v-max='99'>"+
							"</td>"+
							"<td class='text-right verticalCenter borderBlack'>"+
								"<input type='text' class='auto form-control text-center width40px' value='0' data-v-min='0' data-v-max='99'>"+
							"</td>"+
							"<td class='text-right verticalCenter borderBlack'>"+
								"<input type='text' class='auto form-control text-center width40px' value='0' data-v-min='0' data-v-max='99'>"+
							"</td>"+
							"<td class='text-right verticalCenter borderBlack'>"+
								"<input type='text' class='auto form-control text-center width40px' value='0' data-v-min='0.00' data-v-max='100.00'>"+
							"</td>"+
							"<td class='text-right verticalCenter borderBlack'>"+
								"<input type='text' class='auto form-control text-center width40px' value='0' data-v-min='0.00' data-v-max='100.00'>"+
							"</td>"+
							"<td class='text-right verticalCenter borderBlack'>"+
								"<input type='text' class='auto form-control text-center width40px' value='0' data-v-min='0.00' data-v-max='100.00'>"+
							"</td>"+
							"<td class='text-right verticalCenter borderBlack'>"+
								"<input type='text' class='auto form-control text-center width40px' value='0' data-v-min='0.00' data-v-max='100.00'>"+
							"</td>"+
							"<td class='text-right verticalCenter borderBlack'>"+
								"<input type='text' class='auto form-control text-center width40px' value='0' data-v-min='0.00' data-v-max='100.00'>"+
							"</td>"+
							"<td class='text-right verticalCenter borderBlack'>"+
								"<input type='text' class='auto form-control text-center width40px' value='0' data-v-min='0.00' data-v-max='100.00'>"+
							"</td>"+
					 	"</tr>";			  
	
	if(rowChild_count > 0){
		$(new_row).insertAfter($("#tbl_SaleBenefit_OL>tbody>tr[data-id='"+row+"']").closest('tr'));
	}else{
		$(new_row).insertAfter($("#tbl_SaleBenefit_OL>tbody>tr[data-group="+row+"]").closest('tr'));
	}
	
}

function removerowSale_OL(value) {
	$('#'+value).remove(); 
}

/**************   Validate  key input data    *********************/ 
var Statuesave = "Y";
var nameTab	= "";
$("#div_main_menuBasic_Info_OL *").change(function(event){
	 nameTab 	= "menu_OL_1";
	 Statuesave = "N";
});
$("#div_main_menuOL_3 *").change(function(event){
	 nameTab 	= "menu_OL_3";
	 Statuesave = "N";
});
$("#div_main_menuOL_2 *").change(function(event){
	 nameTab 	= "menu_OL_2";
	 Statuesave = "N";
});
$("#benefit_sale_OL *").change(function(event){
	 nameTab 	= "menu_OL_4";
	 Statuesave = "N";
});
$("#warranty_term_OL *").change(function(event){
	 nameTab 	= "menu_OL_5";
	 Statuesave = "N";
});
$("#bnfProduct_OL *").change(function(event){
	 nameTab 	= "menu_OL_7";
	 Statuesave = "N";
});
function replaceAllNumber(value){
	var result = value.replace(/,\./g, "");
	return result;
}

function keyProduct_ol(){
	var key = $("#key_Insurance_product_ol").val();
	if(key.length >= 1){
		$("#validate_input1_ol").hide();
	}else{
		$("#validate_input1_ol").show();
	}
}
function th_Name_ol() {
	var thai_Name  = $('#th_Name_ol').val();
	if (thai_Name != "") {
		$("#validate_input2_ol").hide();
	}else{
		$("#validate_input2_ol").show();
	}
}
function th_marketingName_ol(){
	var thaiMarket_Name  = $('#th_marketingName_ol').val();
	if (thaiMarket_Name != "") {
		$("#validate_input3_ol").hide();
	}else{
		$("#validate_input3_ol").show();
	}
}
function validate_input6_ol(){
	var start_date = $("#menu_term1_datefrom_ol").val();
	var end_date = $("#menu_term1_dateto_ol").val();
	if (start_date != "" && end_date != "") {
		$("#validate_input6_ol").hide();
	}else{
		$("#validate_input6_ol").show();
	}
}
function validate_input7_ol(){
	var flag = false;
	$("#tbl_modeTerms_OL tbody>tr").each(function(){
		if($(this).find('td:nth-child(1) input[type="checkbox"]').is(':checked')){
			flag = true;
		}
	});
	$("#tbl_modeTerms_OL2 tbody>tr").each(function(){
		if($(this).find('td:nth-child(1) input[type="checkbox"]').is(':checked')){
			flag = true;
		}
	});
	if(flag){
		$("#validate_input7_ol").hide();
	}else{
		$("#validate_input7_ol").show();
	}
}
function validate_input8_ol(){
	var ageFrom = $("#start_age_insure_ol").val();
	var ageFrom_unit = $("#start_age_insure_unit_ol option:selected").val();
	var ageTo = $("#end_age_insure_ol").val();
	var ageTo_unit = $("#end_age_insure_unit_ol option:selected").val();
	var flag_validate = validateDate(ageFrom,ageFrom_unit,ageTo,ageTo_unit)
	if( flag_validate ){
		var start_age = $("#start_age_insure_ol").val();
		var end_age = $("#end_age_insure_ol").val();
		if(start_age != "" && end_age != ""){
			$("#validate_input8_ol").hide();
		}else{
			$("#validate_input8_ol").show();
		}
	}else{
		message = "กรุณากรอกข้อมูลพิกัดอายุให้ถูกต้อง"
		alertError(message)
	}
	
}
function validate_input9_ol(){
	// ยังไม่ได้ใช้ validate
	
/*	var flag = false;
	$("#tbl_formulaTerms_OL tbody>tr").each(function(){
		if($(this).find('td:nth-child(1) input[type="radio"]').is(':checked')){
			flag = true;
		}
	})
	if(flag){
		$("#validate_input9_ol").hide();
	}else{
		$("#validate_input9_ol").show();
	}*/
}
function validate_input10_ol(){
	var flag = false;
	$("#tbl_saleDegreeTerm_OL tbody>tr").each(function(){
		if($(this).find('td:nth-child(1) input[type="checkbox"]').is(':checked')){
			flag = true;
		}
	})
	if(flag){
		$("#validate_input10_ol").hide();
	}else{
		$("#validate_input10_ol").show();
	}
}
function validate_input12_ol(){
	var flag = false;
	if($("#tbl_insure_range_OL tbody>tr").length > 1){
		$("#tbl_insure_range_OL tbody>tr").each(function(i){
			var start_value = replaceComma($(this).find('td:nth-child(2) input[type="text"]').val())
			var end_value = replaceComma($(this).find('td:nth-child(3) input[type="text"]').val())
			if(i == 0){
				if(Number(end_value) == ""){
					flag = true
				}
			}else{
				if(Number(start_value) == ""){
					flag = true
				}
				if(Number(end_value) == ""){
					flag = true
				}
			}
		})
	}else{
		flag = false
	}

	if(!flag){
		$("#validate_input12_ol").hide();
	}else{
		$("#validate_input12_ol").show();
	}
	return flag
}
function validate_levelJob_OL(){
	var flag = $("#mode_career_term0_ol").is(':checked');
	
	if(flag){
		$("#tbl_saleDegreeTerm_OL tbody>tr").each(function(i){
			if(i!=0){
				$(this).find('td:nth-child(1) input').prop("checked",false).attr("disabled",true)
			}
		})
	}else{
		$("#tbl_saleDegreeTerm_OL tbody>tr").each(function(i){
			if(i!=0){
				$(this).find('td:nth-child(1) input').attr("disabled",false)
			}
		})
	}
}
function checkdateTo_fixSale_OL() {
	var startDate = $("#menu_term1_datefrom_ol").val();
	var endDate = $("#menu_term1_dateto_ol").val();
	
	if (startDate != "" && endDate != "") {
		var startDate_parse = parseDate($("#menu_term1_datefrom_ol").val());
	    var endDate_parse = parseDate($("#menu_term1_dateto_ol").val());
	    if(startDate_parse > endDate_parse){
	    	
	    	nameTab 	= "menu_OL_5";
	    	Statuesave = "N";
	    	message = "วันที่เริ่มต้นต้องน้อยกว่าวันที่สิ้นสุดเสมอ";
			alertError(message);
	    }
	}
}
/*ตรวจสอบพิกัดอายุ ข้อกำหนด*/
function validate_ageRange_OL(){
	var from_date 		= $("#start_age_insure_ol").val(); 
	var from_dateUnit	= $("#start_age_insure_unit_ol option:selected").val();
	var to_date 		= $("#end_age_insure_ol").val(); 
	var to_dateUnit		= $("#end_age_insure_unit_ol option:selected").val();
	var message 		= "อายุสิ้นสุดต้องมากกว่าอายุที่เริ่มต้นเสมอ"
	
	validate_date(from_date,from_dateUnit,to_date,to_dateUnit,message)
}
function validate_rd_tbAdditional(){
	
	$("#div_Type_Additional_contract_OL div").find('input[type="checkbox"]').prop("checked",false)
	$("#tb_Additional_contract_OL tbody>tr").each(function(){
		var type = $(this).find('td:nth-child(2) input[type="hidden"]').val();
		
		$("#div_Type_Additional_contract_OL div").each(function(){
			if( type == $(this).find('input[type="checkbox"]').val()){
				$(this).find('input[type="checkbox"]').prop("checked",true)
			}
		});
	})
}
/*ข้อกำหนดการรับประกัน*/
function chk_max_amount_insure_OL(value){
	if(value == 1){
		$("#div_max_amount_limit_OL").show();
	}else{
		$("#div_max_amount_limit_OL").hide();
	}
}

function chk_single_max_amount_insure_OL(value){
	if(value == 1){
		$("#div_single_max_amount_limit_OL").show();
	}else{
		$("#div_single_max_amount_limit_OL").hide();
	}
}

function chk_single_max_amount_limit_OL(value){
	if(value == 1){
		if($("#chk_single_max_amount_limit_OL1").is(':checked')){
			$("#txb_single_max_amount_limit_OL1").attr("disabled",false)
			$("#divMain_insuranceIssue_OL").removeClass('disabledAll')
		}else{
			$("#txb_single_max_amount_limit_OL1").attr("disabled",true)
			$("#txb_single_max_amount_limit_OL1").val("")
			$("#divMain_insuranceIssue_OL").addClass('disabledAll')
		}
	}else{
		if($("#chk_single_max_amount_limit_OL2").is(':checked')){
			$("#txb_single_max_amount_limit_OL2").attr("disabled",false)
			$("#divMain_insuranceMax_OL").removeClass('disabledAll')
		}else{
			$("#txb_single_max_amount_limit_OL2").attr("disabled",true)
			$("#txb_single_max_amount_limit_OL2").val("")
			$("#divMain_insuranceMax_OL").addClass('disabledAll')
		}
	}
}

function chk_max_amount_limit_OL(value){
	if(value == 1){
		
		if($("#chk_max_amount_limit_OL1").is(':checked')){
			$("#txb_max_amount_limit_OL1").attr("disabled",false)
		}else{
			$("#txb_max_amount_limit_OL1").attr("disabled",true)
		}
		
	}else{
		if($("#chk_max_amount_limit_OL2").is(':checked')){
			$("#txb_max_amount_limit_OL2").attr("disabled",false)
		}else{
			$("#txb_max_amount_limit_OL2").attr("disabled",true)
		}
	}
}

function chk_health_check_OL(value){
	if(value == 1) 
	{							
		$("#div_tbl_health_check_OL").show();				
	}
	else
	{					
		$("#div_tbl_health_check_OL").hide();			
	}
}

function chk_health_insurance_OL(value){
	if(value == 1) 
	{							
		$("#div_health_insurance_OL").show();
		$("#btn_health_insurance_OL").show();
	}
	else
	{					
		$("#div_health_insurance_OL").hide();	
		$("#btn_health_insurance_OL").hide();
	}
}

function chk_old_insurance_OL(value){
	if(value == 1) 
	{							
		$("#tbl_old_insurance_OL").show();		
		$("#btn_old_insurance_OL").show();
	}
	else
	{					
		$("#tbl_old_insurance_OL").hide();		
		$("#btn_old_insurance_OL").hide();
	}
}

function chk_uw_consider_OL(value){
	if(value == 1) 
	{							
		$("#div_UW_consider_OL").show();		
		$("#btn_UW_Consider_OL").show();
	}
	else
	{					
		$("#div_UW_consider_OL").hide();		
		$("#btn_UW_Consider_OL").hide();
	}
}

function chk_increase_premium_OL(value){
	if(value == 1) 
	{
		$("#div_increase_premium_OL").show();	
	}else{
		$("#div_increase_premium_OL").hide();
	}
}

/*ตรวจสอบข้อมูลเคลม กธ. เดิม*/
$("#chk_check_data_OL1").click(function(){
	if($(this).prop('checked') == true){
		$("#panel_oldCov_OL").show();
		$("#notCondition_oldCov_OL").prop("checked",true);
	}else{
		$("#panel_oldCov_OL").hide();
		$("#panel_Condition_oldCov_OL").hide();
		$("#sl_haveCondition_oldCov_OL option:contains('None')").attr('selected', 'selected');
		$("#sl_haveCondition_oldCov_OL").prop("disabled", true);
		$("input[name='chk_SA_oldCov_OL[]']").prop("checked", false);
		$("#sl_NewSA_oldCov_OL option:contains('None')").attr('selected', 'selected');
		$("#sl_TotalSA_oldCov_OL option:contains('None')").attr('selected', 'selected');	
		$("#amount_NewSA_oldCov_OL, #amount_TotalSA_oldCov_OL, #sl_NewSA_oldCov_OL, #sl_TotalSA_oldCov_OL").prop("disabled", true);
		$("#amount_NewSA_oldCov_OL, #amount_TotalSA_oldCov_OL").val("0.00");
	}
});

$("#notCondition_oldCov_OL").click(function(){
	if($(this).prop('checked') == true){
		$("#panel_Condition_oldCov_OL").hide();
		$("#sl_haveCondition_oldCov_OL option:contains('None')").attr('selected', 'selected');
		$("#sl_haveCondition_oldCov2_OL option:contains('None')").attr('selected', 'selected');
		$("#sl_haveCondition_oldCov3_OL option:contains('None')").attr('selected', 'selected');
		$("#sl_haveCondition_oldCov4_OL option:contains('None')").attr('selected', 'selected');
		$("#sl_haveCondition_oldCov5_OL option:contains('None')").attr('selected', 'selected');
		$("#sl_haveCondition_oldCov_OL").prop("disabled", true);
		$("#sl_haveCondition_oldCov2_OL").prop("disabled",true);
		$("#sl_haveCondition_oldCov3_OL").prop("disabled",true);
		$("#sl_haveCondition_oldCov4_OL").prop("disabled",true);
		$("#sl_haveCondition_oldCov5_OL").prop("disabled",true);
		$("input[name='chk_SA_oldCov_OL[]']").prop("checked", false);
		$("#sl_NewSA_oldCov_OL option:contains('None')").attr('selected', 'selected');
		$("#sl_TotalSA_oldCov_OL option:contains('None')").attr('selected', 'selected');	
		$("#amount_NewSA_oldCov_OL, #amount_TotalSA_oldCov_OL, #sl_NewSA_oldCov_OL, #sl_TotalSA_oldCov_OL").prop("disabled", true);
		$("#amount_NewSA_oldCov_OL, #amount_TotalSA_oldCov_OL").val("0.00");
		
		$("#standing_newSA_1_OL").addClass("disabledAll");
		$("#standing_capitalHealth_1_OL").addClass("disabledAll");
		$("#standing_buyWith1_OL").addClass("disabledAll");
	}
});

$("#haveCondition_oldCov_OL").click(function(){
	if($(this).prop('checked') == true){
		$("#panel_Condition_oldCov_OL").show();
		$("#sl_haveCondition_oldCov_OL").prop("disabled",false);
	}else{
		$("#panel_Condition_oldCov_OL").hide();
		$("#sl_haveCondition_oldCov_OL").prop("disabled",true);
	}
});

$("#sl_haveCondition_oldCov_OL").on("change",function(){
	if($(this).find('option:selected').text() !== "None"){
		$("#sl_haveCondition_oldCov2_OL").prop("disabled",false);
	}else{
		$("#sl_haveCondition_oldCov2_OL").prop("disabled",true);
	}
	disabled_haveCondition_oldCov_OL();
});
$("#sl_haveCondition_oldCov2_OL").on("change",function(){
	if($(this).find('option:selected').text() !== "None"){
		$("#sl_haveCondition_oldCov3_OL").prop("disabled",false);
	}else{
		$("#sl_haveCondition_oldCov3_OL").prop("disabled",true);
	}
});
$("#sl_haveCondition_oldCov3_OL").on("change",function(){
	if($(this).find('option:selected').text() !== "None"){
		$("#sl_haveCondition_oldCov4_OL").prop("disabled",false);
	}else{
		$("#sl_haveCondition_oldCov4_OL").prop("disabled",true);
	}
	disabled_haveCondition_oldCov_OL();
});
$("#sl_haveCondition_oldCov4_OL").on("change",function(){
	if($(this).find('option:selected').text() !== "None"){
		$("#sl_haveCondition_oldCov5_OL").prop("disabled",false);
	}else{
		$("#sl_haveCondition_oldCov5_OL").prop("disabled",true);
	}
});
$("#sl_haveCondition_oldCov5_OL").on("change",function(){
	disabled_haveCondition_oldCov_OL();
});

//เปิดให้กรอกข้อมูลเมื่อเลือกเงื่อนไข ถูกต้อง
function enable_haveCondition_oldCov_OL(value,block){
	if(value == "New SA"){
		$("#standing_newSA_"+block+"_OL").removeClass("disabledAll");
		$("#sl_NewSA_oldCov_OL").attr("disabled",false)
		$("#amount_NewSA_oldCov_OL").attr("disabled",false)
	}else if(value == "ทุนตรวจสุขภาพ"){
		$("#standing_capitalHealth_"+block+"_OL").removeClass("disabledAll");
	}else if(value == "ซื้อคู่กับแบบ"){
		$("#standing_buyWith"+block+"_OL").removeClass("disabledAll");
	}
}

//ปิดให้กรอกเมื่อเลือกเงื่อนไข ไม่ถูกต้อง
function disabled_haveCondition_oldCov_OL(sel1,sel2,sel3,block){
	
	if(block == null){
		var sel1 = $("#sl_haveCondition_oldCov_OL option:selected").text();
		var sel2 = $("#sl_haveCondition_oldCov3_OL option:selected").text();
		var sel3 = $("#sl_haveCondition_oldCov5_OL option:selected").text();
		var block = 1;
	}
	
	$("#standing_newSA_"+block+"_OL").addClass("disabledAll");
	$("#standing_capitalHealth_"+block+"_OL").addClass("disabledAll");
	$("#standing_buyWith"+block+"_OL").addClass("disabledAll");
	enable_haveCondition_oldCov_OL(sel1,block);
	enable_haveCondition_oldCov_OL(sel2,block);
	enable_haveCondition_oldCov_OL(sel3,block);
}

function covert_hiddenPrdDesign(e){
	var result = $(e).val();
	var id = $(e).attr('id')
		id = id.replace("sel_prd_design_","");
	$("#hd_prdDesign_OL"+id).val(result)
	
	if($("#tb_Additional_contract_OL tbody>tr[data-id='"+id+"']").length > 1){
		$("#hd_prdDesignChild_OL"+id).val(result)
	}
	
	validate_rd_tbAdditional();
}

// ปิดให้กรอกเมื่อเลือกเงื่อนไข ไม่ถูกต้อง
function disabled_haveCondition_oldCov_OL(sel1,sel2,sel3,block){
	
	if(block == null){
		var sel1 = $("#sl_haveCondition_oldCov_OL option:selected").text();
		var sel2 = $("#sl_haveCondition_oldCov3_OL option:selected").text();
		var sel3 = $("#sl_haveCondition_oldCov5_OL option:selected").text();
		var block = 1;
	}
	
	$("#standing_newSA_"+block+"_OL").addClass("disabledAll");
	$("#standing_capitalHealth_"+block+"_OL").addClass("disabledAll");
	$("#standing_buyWith"+block+"_OL").addClass("disabledAll");
	enable_haveCondition_oldCov_OL(sel1,block);
	enable_haveCondition_oldCov_OL(sel2,block);
	enable_haveCondition_oldCov_OL(sel3,block);
}

$("#chk_NewSA_oldCov_OL").click(function(){
	if($(this).prop('checked') == true){
		$("#sl_NewSA_oldCov_OL").prop("disabled",false);
		$("#amount_NewSA_oldCov_OL").prop("disabled",false);		
	}else{
		$("#sl_NewSA_oldCov_OL").prop("disabled",true);
		$("#amount_NewSA_oldCov_OL").prop("disabled",true);
		$("#sl_NewSA_oldCov_OL option:contains('None')").attr('selected', 'selected');
		$("#amount_NewSA_oldCov_OL").val("0.00");
	}
});

function checkappStart_OL(id) {
	id = id.replace("appStart_date_capitalHealth_OL","");
	var dateto  = $('#appTo_date_capitalHealth_OL'+id).val();
	var dateto_split		= dateto.split("/");
	var dateto_day			= dateto_split[0];
	var dateto_month		= dateto_split[1];
	var dateto_year			= dateto_split[2];
	var date_to	= dateto_day + 	dateto_month + dateto_year ;
	var appStart_date  = $('#appStart_date_capitalHealth_OL'+id).val();
	var appStart_split		= appStart_date.split("/");
	var appStart_day		= appStart_split[0];
	var appStart_month		= appStart_split[1];
	var appStart_year		= appStart_split[2];
	var date_start = appStart_day + appStart_month + appStart_year ;
}
function checkappTo_OL(id) {
	id = id.replace("appTo_date_capitalHealth_OL","");
	var dateto  = $('#appTo_date_capitalHealth_OL'+id).val();
	var dateto_split		= dateto.split("/");
	var dateto_day			= dateto_split[0];
	var dateto_month		= dateto_split[1];
	var dateto_year			= dateto_split[2];
	var date_to	= dateto_day + 	dateto_month + dateto_year ;
	var appStart_date  = $('#appStart_date_capitalHealth_OL'+id).val();
	var appStart_split		= appStart_date.split("/");
	var appStart_day		= appStart_split[0];
	var appStart_month		= appStart_split[1];
	var appStart_year		= appStart_split[2];
	var date_start = appStart_day + appStart_month + appStart_year ;
}

function appStart_date_OL(id){		
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
	
	/*jQuery('#'+id).datetimepicker({
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

function appTo_date_OL(id){
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

var roundBuywidth = 0;
function saveBuyWidth1_OL(){
		$("#tbl_chooseBuyWith1_OL tbody>tr").each(function(){
			if($(this).find('td:nth-child(1) i').hasClass("glyphicon-ok")){
				var key = $(this).find('td:nth-child(3) a').text();
				var prd_code = $(this).find('td:nth-child(1) input[type="hidden"]').val();
			}
			
			var flag_dup = false;
			$("#tbl_buyWith1_OL tbody>tr").each(function(){
				if( prd_code == $(this).find('td:nth-child(2) label').text()){
					flag_dup = true;
				}
			})
			
			if(key != null && !flag_dup){
				var row = "<tr><td class='verticalCenter text-center' id='imgOKbuyWith_main"+roundBuywidth+"_OL' onclick='imgCheckbox(this.id);'><i class='glyphicon glyphicon-edit'></i></td>"+
					"<td class='verticalCenter text-center'>" +
						"<label>"+prd_code+"</label>" +
					"</td>"+
					"<td class='verticalCenter text-center'>" +
						"<label>"+key+"</label>" +
						"<input type='hidden' id='prd_code' value='"+prd_code+"'>"+
					"</td>"+
					"</tr>"
					
				$("#tbl_buyWith1_OL tbody").append(row);
				roundBuywidth++;
			}
		});
}
var roundBuywidth_IC = 0;
function saveBuyWidth2_OL(){
		$("#tbl_chooseBuyWith2_OL tbody>tr").each(function(){
			if($(this).find('td:nth-child(1) i').hasClass("glyphicon-ok")){
				var key = $(this).find('td:nth-child(3) a').text();
				var prd_code = $(this).find('td:nth-child(1) input[type="hidden"]').val();
			}else{
				key = null;
			}
			
			var flag_dup = false;
			$("#tbl_buyWith2_OL tbody>tr").each(function(){
				if( prd_code == $(this).find('td:nth-child(2) label').text()){
					flag_dup = true;
				}
			})
			
			if(key != null && !flag_dup){
				var row = "<tr><td class='verticalCenter text-center' id='imgOKbuyWith_IC"+roundBuywidth_IC+"_OL' onclick='imgCheckbox(this.id);'><i class='glyphicon glyphicon-edit'></i></td>"+
					"<td class='verticalCenter text-center'>" +
							"<label>"+prd_code+"</label>" +
					"</td>"+
					"<td class='verticalCenter text-center'>" +
						"<label>"+key+"</label>" +
						"<input type='hidden' id='prd_code' value='"+prd_code+"'>"+
					"</td>"+
				"</tr>"
					
				$("#tbl_buyWith2_OL tbody").append(row);
				roundBuywidth_IC++;
			}
		});
}
var roundBuywidth_Sub = 0;
function saveBuyWidth3_OL(){
		$("#tbl_chooseBuyWith3_OL tbody>tr").each(function(){
			if($(this).find('td:nth-child(1) i').hasClass("glyphicon-ok")){
				var key = $(this).find('td:nth-child(3) a').text();
				var prd_code = $(this).find('td:nth-child(1) input[type="hidden"]').val();
			}else{
				key = null;
			}
			
			var flag_dup = false;
			$("#tbl_buyWith3_OL tbody>tr").each(function(){
				if( prd_code == $(this).find('td:nth-child(2) label').text()){
					flag_dup = true;
				}
			})
			
			if(key != null && !flag_dup){
				var row = "<tr><td class='verticalCenter text-center' id='imgOKbuyWith_Sub"+roundBuywidth_Sub+"_OL' onclick='imgCheckbox(this.id);'><i class='glyphicon glyphicon-edit'></i></td>"+
					"<td class='verticalCenter text-center'>" +
						"<label>"+prd_code+"</label>" +
					"</td>"+
					"<td class='verticalCenter text-center'>" +
						"<label>"+key+"</label>" +
						"<input type='hidden' id='prd_code' value='"+prd_code+"'>"+
					"</td>"+
				"</tr>"
					
				$("#tbl_buyWith3_OL tbody").append(row);
				roundBuywidth_Sub++;
			}
		});
}
function deleteRow_buyWith_key_OL(){
	$("#tbl_buyWith1_OL tbody>tr").each(function(){
		$(this).find('.glyphicon-ok').parent().parent().remove();
	});
}
function deleteRow_buyWith_key2_OL(){
	$("#tbl_buyWith2_OL tbody>tr").each(function(){
		$(this).find('.glyphicon-ok').parent().parent().remove();
	});
}
function deleteRow_buyWith_key3_OL(){
	$("#tbl_buyWith3_OL tbody>tr").each(function(){
		$(this).find('.glyphicon-ok').parent().parent().remove();
	});
}


/*ตรวจสอบข้อมูล IC*/
$("#chk_check_data_OL2").click(function(){
	if($(this).prop('checked') == true){
		$("#panel_IC_OL").show();
		$("#notCondition_IC_OL").prop("checked",true);
	}else{
		$("#panel_IC_OL").hide();
		$("#panel_Condition_IC_OL").hide();
		$("#sl_haveCondition_IC_OL option:contains('None')").attr('selected', 'selected');
		$("#sl_haveCondition_IC_OL").prop("disabled", true);
		$("input[name='chk_SA_IC_OL[]']").prop("checked", false);
		$("#sl_NewSA_IC_OL option:contains('None')").attr('selected', 'selected');
		$("#sl_TotalSA_IC_OL option:contains('None')").attr('selected', 'selected');	
		$("#amount_NewSA_IC_OL, #amount_TotalSA_IC_OL, #sl_NewSA_IC_OL, #sl_TotalSA_IC_OL").prop("disabled", true);
		$("#amount_NewSA_IC_OL, #amount_TotalSA_IC_OL").val("0.00");
	}
});

$("#notCondition_IC_OL").click(function(){
	if($(this).prop('checked') == true){
		$("#panel_Condition_IC_OL").hide();
		$("#sl_haveCondition_IC_OL option:contains('None')").attr('selected', 'selected');
		$("#sl_haveCondition_IC2_OL option:contains('None')").attr('selected', 'selected');
		$("#sl_haveCondition_IC3_OL option:contains('None')").attr('selected', 'selected');
		$("#sl_haveCondition_IC4_OL option:contains('None')").attr('selected', 'selected');
		$("#sl_haveCondition_IC5_OL option:contains('None')").attr('selected', 'selected');
		$("#sl_haveCondition_IC2_OL").prop("disabled",true);
		$("#sl_haveCondition_IC3_OL").prop("disabled",true);
		$("#sl_haveCondition_IC4_OL").prop("disabled",true);
		$("#sl_haveCondition_IC5_OL").prop("disabled",true);
		$("#sl_haveCondition_IC_OL").prop("disabled", true);
		$("input[name='chk_SA_IC_OL[]']").prop("checked", false);
		$("#sl_NewSA_IC_OL option:contains('None')").attr('selected', 'selected');
		$("#sl_TotalSA_IC_OL option:contains('None')").attr('selected', 'selected');	
		$("#amount_NewSA_IC_OL, #amount_TotalSA_IC_OL, #sl_NewSA_IC_OL, #sl_TotalSA_IC_OL").prop("disabled", true);
		$("#amount_NewSA_IC_OL, #amount_TotalSA_IC_OL").val("0.00");
		
		$("#standing_newSA_2_OL").addClass("disabledAll");
		$("#standing_capitalHealth_2_OL").addClass("disabledAll");
		$("#standing_buyWith2_OL").addClass("disabledAll");
	}
});

$("#haveCondition_IC_OL").click(function(){
	if($(this).prop('checked') == true){
		$("#panel_Condition_IC_OL").show();
		$("#sl_haveCondition_IC_OL").prop("disabled",false);
	}else{
		$("#panel_Condition_IC_OL").hide();
		$("#sl_haveCondition_IC_OL").prop("disabled",true);
	}
});

$("#sl_haveCondition_IC_OL").on("change",function(){
	if($(this).find('option:selected').text() !== "None"){
		$("#sl_haveCondition_IC2_OL").prop("disabled",false);
	}else{
		$("#sl_haveCondition_IC2_OL").prop("disabled",true);
	}
	disabled_haveCondition_IC_OL();
});
$("#sl_haveCondition_IC2_OL").on("change",function(){
	if($(this).find('option:selected').text() !== "None"){
		$("#sl_haveCondition_IC3_OL").prop("disabled",false);
	}else{
		$("#sl_haveCondition_IC3_OL").prop("disabled",true);
	}
});
$("#sl_haveCondition_IC3_OL").on("change",function(){
	if($(this).find('option:selected').text() !== "None"){
		$("#sl_haveCondition_IC4_OL").prop("disabled",false);
	}else{
		$("#sl_haveCondition_IC4_OL").prop("disabled",true);
	}
	disabled_haveCondition_IC_OL();
});
$("#sl_haveCondition_IC4_OL").on("change",function(){
	if($(this).find('option:selected').text() !== "None"){
		$("#sl_haveCondition_IC5_OL").prop("disabled",false);
	}else{
		$("#sl_haveCondition_IC5_OL").prop("disabled",true);
	}
});
$("#sl_haveCondition_IC5_OL").on("change",function(){
	disabled_haveCondition_IC_OL();
});

//ปิดให้กรอกเมื่อเลือกเงื่อนไข ไม่ถูกต้อง
function disabled_haveCondition_IC_OL(){
	var sel1 = $("#sl_haveCondition_IC_OL option:selected").text();
	var sel2 = $("#sl_haveCondition_IC3_OL option:selected").text();
	var sel3 = $("#sl_haveCondition_IC5_OL option:selected").text();
	
	$("#standing_newSA_2_OL").addClass("disabledAll");
	$("#standing_capitalHealth_2_OL").addClass("disabledAll");
	$("#standing_buyWith2_OL").addClass("disabledAll");
	enable_haveCondition_oldCov_OL(sel1,2);
	enable_haveCondition_oldCov_OL(sel2,2);
	enable_haveCondition_oldCov_OL(sel3,2);
}

$("#chk_NewSA_IC_OL").click(function(){
	if($(this).prop('checked') == true){
		$("#sl_NewSA_IC_OL").prop("disabled",false);
		$("#amount_NewSA_IC_OL").prop("disabled",false);		
	}else{
		$("#sl_NewSA_IC_OL").prop("disabled",true);
		$("#amount_NewSA_IC_OL").prop("disabled",true);
		$("#sl_NewSA_IC_OL option:contains('None')").attr('selected', 'selected');
		$("#amount_NewSA_IC_OL").val("0.00");
	}
});

$("#chk_TotalSA_IC_OL").click(function(){
	if($(this).prop('checked') == true){
		$("#sl_TotalSA_IC_OL").prop("disabled",false);
		$("#amount_TotalSA_IC_OL").prop("disabled",false);
	}else{
		$("#sl_TotalSA_IC_OL").prop("disabled",true);
		$("#amount_TotalSA_IC_OL").prop("disabled",true);
		$("#sl_TotalSA_IC_OL option:contains('None')").attr('selected', 'selected');
		$("#amount_TotalSA_IC_OL").val("0.00");
	}
});

/*ตรวจสอบ กธ. เดิม รับแบบ Sub*/
$("#chk_check_data_OL3").click(function(){
	if($(this).prop('checked') == true){
		$("#panel_SubCov_OL").show();
		$("#notCondition_SubCov_OL").prop("checked",true);
	}else{
		$("#panel_SubCov_OL").hide();
		$("#panel_Condition_SubCov_OL").hide();
		$("#sl_haveCondition_SubCov_OL option:contains('None')").attr('selected', 'selected');
		$("#sl_haveCondition_SubCov_OL").prop("disabled", true);
		$("input[name='chk_SA_SubCov_OL[]']").prop("checked", false);
		$("#sl_NewSA_SubCov_OL option:contains('None')").attr('selected', 'selected');
		$("#sl_TotalSA_SubCov_OL option:contains('None')").attr('selected', 'selected');	
		$("#amount_NewSA_SubCov_OL, #amount_TotalSA_SubCov_OL, #sl_NewSA_SubCov_OL, #sl_TotalSA_SubCov_OL").prop("disabled", true);
		$("#amount_NewSA_SubCov_OL, #amount_TotalSA_SubCov_OL").val("0.00");
	}
});

$("#notCondition_SubCov_OL").click(function(){
	if($(this).prop('checked') == true){
		$("#panel_Condition_SubCov_OL").hide();
		$("#sl_haveCondition_SubCov_OL option:contains('None')").attr('selected', 'selected');
		$("#sl_haveCondition_SubCov2_OL option:contains('None')").attr('selected', 'selected');
		$("#sl_haveCondition_SubCov3_OL option:contains('None')").attr('selected', 'selected');
		$("#sl_haveCondition_SubCov4_OL option:contains('None')").attr('selected', 'selected');
		$("#sl_haveCondition_SubCov5_OL option:contains('None')").attr('selected', 'selected');
		$("#sl_haveCondition_SubCov_OL").prop("disabled", true);
		$("#sl_haveCondition_SubCov2_OL").prop("disabled", true);
		$("#sl_haveCondition_SubCov3_OL").prop("disabled", true);
		$("#sl_haveCondition_SubCov4_OL").prop("disabled", true);
		$("#sl_haveCondition_SubCov5_OL").prop("disabled", true);
		$("input[name='chk_SA_SubCov_OL[]']").prop("checked", false);
		$("#sl_NewSA_SubCov_OL option:contains('None')").attr('selected', 'selected');
		$("#sl_TotalSA_SubCov_OL option:contains('None')").attr('selected', 'selected');	
		$("#amount_NewSA_SubCov_OL, #amount_TotalSA_SubCov_OL, #sl_NewSA_SubCov_OL, #sl_TotalSA_SubCov_OL").prop("disabled", true);
		$("#amount_NewSA_SubCov_OL, #amount_TotalSA_SubCov_OL").val("0.00");
		
		$("#standing_newSA_3_OL").addClass("disabledAll");
		$("#standing_capitalHealth_3_OL").addClass("disabledAll");
		$("#standing_buyWith3_OL").addClass("disabledAll");
	}
});

$("#haveCondition_SubCov_OL").click(function(){
	if($(this).prop('checked') == true){
		$("#panel_Condition_SubCov_OL").show();
		$("#sl_haveCondition_SubCov_OL").prop("disabled",false);
	}else{
		$("#panel_Condition_SubCov_OL").hide();
		$("#sl_haveCondition_SubCov_OL").prop("disabled",true);
	}
});

$("#sl_haveCondition_SubCov_OL").on("change",function(){
	if($(this).find('option:selected').text() !== "None"){
		$("#sl_haveCondition_SubCov2_OL").prop("disabled",false);
	}else{
		$("#sl_haveCondition_SubCov2_OL").prop("disabled",true);
	}
	disabled_haveCondition_SubCov_OL();
});
$("#sl_haveCondition_SubCov2_OL").on("change",function(){
	if($(this).find('option:selected').text() !== "None"){
		$("#sl_haveCondition_SubCov3_OL").prop("disabled",false);
	}else{
		$("#sl_haveCondition_SubCov3_OL").prop("disabled",true);
	}
});
$("#sl_haveCondition_SubCov3_OL").on("change",function(){
	if($(this).find('option:selected').text() !== "None"){
		$("#sl_haveCondition_SubCov4_OL").prop("disabled",false);
	}else{
		$("#sl_haveCondition_SubCov4_OL").prop("disabled",true);
	}
	disabled_haveCondition_SubCov_OL();
});

$("#sl_haveCondition_SubCov4_OL").on("change",function(){
	if($(this).find('option:selected').text() !== "None"){
		$("#sl_haveCondition_SubCov5_OL").prop("disabled",false);
	}else{
		$("#sl_haveCondition_SubCov5_OL").prop("disabled",true);
	}
});
$("#sl_haveCondition_SubCov5_OL").on("change",function(){
	disabled_haveCondition_SubCov_OL();
});

function search_covCat2_OL(id,obj,tbl,sl_contract,sl_policy,sl_product){
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
	        url : "ProductBasePlanOL_Data_default_Servlet",
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
			        		        url : "ProductBasePlanOL_Data_default_Servlet",
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

function searchPartnerAccumRule_OL(condition,result,selectPartner){
	//var systemCode = $('#'+condition+ ':selected').val();
	var systemCode = condition;
	
	if(systemCode != ""){
		var json_data = {
				"method": "GetPartner",
		        "systemCode": systemCode
			}
		$.ajax({
			url: 'ProductBasePlanOL_Data_default_Servlet',
			type: "POST",
			data: json_data,
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

//ปิดให้กรอกเมื่อเลือกเงื่อนไข ไม่ถูกต้อง
function disabled_haveCondition_SubCov_OL(){
	var sel1 = $("#sl_haveCondition_SubCov_OL option:selected").text();
	var sel2 = $("#sl_haveCondition_SubCov3_OL option:selected").text();
	var sel3 = $("#sl_haveCondition_SubCov5_OL option:selected").text();
	
	$("#standing_newSA_3_OL").addClass("disabledAll");
	$("#standing_capitalHealth_3_OL").addClass("disabledAll");
	$("#standing_buyWith3_OL").addClass("disabledAll");
	enable_haveCondition_oldCov_OL(sel1,3);
	enable_haveCondition_oldCov_OL(sel2,3);
	enable_haveCondition_oldCov_OL(sel3,3);
}

$("#chk_NewSA_SubCov_OL").click(function(){
	if($(this).prop('checked') == true){
		$("#sl_NewSA_SubCov_OL").prop("disabled",false);
		$("#amount_NewSA_SubCov_OL").prop("disabled",false);		
	}else{
		$("#sl_NewSA_SubCov_OL").prop("disabled",true);
		$("#amount_NewSA_SubCov_OL").prop("disabled",true);
		$("#sl_NewSA_SubCov_OL option:contains('None')").attr('selected', 'selected');
		$("#amount_NewSA_SubCov_OL").val("0.00");
	}
});

$("#chk_TotalSA_SubCov_OL").click(function(){
	if($(this).prop('checked') == true){
		$("#sl_TotalSA_SubCov_OL").prop("disabled",false);
		$("#amount_TotalSA_SubCov_OL").prop("disabled",false);
	}else{
		$("#sl_TotalSA_SubCov_OL").prop("disabled",true);
		$("#amount_TotalSA_SubCov_OL").prop("disabled",true);
		$("#sl_TotalSA_SubCov_OL option:contains('None')").attr('selected', 'selected');
		$("#amount_TotalSA_SubCov_OL").val("0.00");
	}
});

$("#chk_free_look_OL").on('click',function () {	
		if($(this).is(':checked')){
			$("#amount_free_look_OL").prop("disabled", false);
			$("#deduct_cost_OL").prop("disabled", false);
		}else{
			$("#amount_free_look_OL").prop("disabled", true);
			$("#amount_free_look_OL").val("");
			$("#deduct_cost_OL").prop("disabled", true);
		}
});

$("#deduct_cost_OL").on('click',function () {
	if($(this).is(':checked')){
		$("#tbl_deduct_cost_OL :input").prop("disabled", false);
		$("#tbl_deduct_cost_OL").css("opacity", "1");
	}else{
		$("#tbl_deduct_cost_OL :input").prop("disabled", true);
		$("#tbl_deduct_cost_OL").css("opacity", "0.8");
		$("#tbl_deduct_cost_OL :input").prop("checked", false);
	}
});	
function bt_confirmProduct_OL(accum_type){
	
	var prd_code = [];
	$("#tb_viewListPDRight_OL tbody>tr").each(function(){
		if($(this).find('td:nth-child(2) label').text() != ""){
			prd_code.push($(this).find('td:nth-child(2) label').text());
		}
	})
	
	if( accum_type == 'MED_SUM'){
		$("#hd_accumRuleExclude_MEDSUM").val(prd_code)
	}else if( accum_type == 'EXIST_POLICY'){
		$("#hd_accumRuleExclude_EXISTPOLICY").val(prd_code)
	}else if( accum_type == 'INSURED_SUM'){
		$("#hd_accumRuleExclude_INSURESUM").val(prd_code)
	}else if( accum_type == 'POLICY'){
		$("#hd_accumRuleExclude_POLICY").val(prd_code)
	}else if( accum_type == 'SA'){
		$("#hd_accumRuleExclude_SA").val(prd_code)
	}
}

$('#RightMove').on('click',function () {
	var chk_row = $("#tb_viewListPDLeft_OL input:checkbox:checked").length;
	
	if(chk_row > 0){
		$("#tb_viewListPDLeft_OL tbody>tr").each(function(){
			var id = $(this).attr("id");
				id = id.replace("tr_viewListPDLeft_OL","");
			var chk_move = $(this).find("input:checkbox").prop("checked");
			
			if(chk_move == true){
				var tr = $(this).closest("tr").remove().clone().prop("id","tr_viewListPDRight_OL"+id);
			}	
			$(tr).find("input:checkbox").prop("id","chk_viewListPDRight_OL"+id);
			$(tr).find("input:checkbox").prop("checked",false);
			$(tr).find("label").prop("for","chk_viewListPDRight_OL"+id);
			
		    $("#tb_viewListPDRight_OL tbody").append(tr);
		});
		
		$("#tr_viewListPDRightNodata_OL").hide();
		
		var numrow= $("#tb_viewListPDLeft_OL tbody>tr[data-type!='hidden']").length;
		if(numrow <= 0){
			$("#tr_viewListPDLeftNodata_OL").show();
			$("#tr_viewListPDLeftNodata_OL").css("display", "block");
		}else{
			$("#tr_viewListPDLeftNodata_OL").hide();
		}
	}else{
		message = "กรุณาเลือกรายการ Product";
		alertError(message);
	}
	
});

$('#LeftMove').on('click',function () {
	var chk_row = $("#tb_viewListPDRight_OL input:checkbox:checked").length;
	
	if(chk_row > 0){
		$("#tr_viewListPDLeftNodata_OL").hide();
		
		$("#tb_viewListPDRight_OL tbody>tr").each(function(){
			var id = $(this).attr("id");
				id = id.replace("tr_viewListPDRight_OL","");
			var chk_move = $(this).find("input:checkbox").prop("checked");
			
			if(chk_move == true){
				var tr = $(this).closest("tr").remove().clone().prop("id","tr_viewListPDLeft_OL"+id);
			}	
			$(tr).find("input:checkbox").prop("id","chk_viewListPDLeft_OL"+id);
			$(tr).find("input:checkbox").prop("checked",false);
			$(tr).find("label").prop("for","chk_viewListPDLeft_OL"+id);
			
		    $("#tb_viewListPDLeft_OL tbody").append(tr);
		});
		
		var numrow = $("#tb_viewListPDRight_OL tbody>tr[data-type!='hidden']").length;
		if(numrow <= 0){
			$("#tr_viewListPDRightNodata_OL").show();
			$("#tr_viewListPDRightNodata_OL").css("display", "block");
		}else{
			$("#tr_viewListPDRightNodata_OL").hide();
		}
	}else{
		message = "กรุณาเลือกรายการ Product ที่ต้องการยกเว้น";
		alertError(message);
	}
});

function addinsuranceRange_OL(){
	
	var length_tb = $("#tbl_insure_range_OL tbody>tr").length
	var value_tr_last = replaceComma($("#tbl_insure_range_OL tbody>tr:last").find('td:nth-child(3) input[type="text"]').val())
		value_tr_last = Number(value_tr_last);
	if(value_tr_last != "" && value_tr_last != 0){
		var start_val = Number(value_tr_last) + 1;
		
		var rowID = 1;
		if(length_tb != 0){
			row_ID =  $('#tbl_insure_range_OL>tbody>tr:last>td:first').attr("id")
			rowID = Number(row_ID.replace("imgOK_healthInsurance",""))+1;
		}else{
			rowID = 1;
		}
		
		row = "<tr>"+
				"<td id='imgOK_healthInsurance"+rowID+"' class='text-center vertical-middle' onclick='imgCheckbox(this.id);'><i class='glyphicon glyphicon-edit' ></i></td>"+
				"<td class='verticalCenter text-right'>"+
					"<input type='text' id='amount_insure_range_from_OL"+rowID+"' class='autoComma form-control text-right' data-v-min='0' "+
							"data-v-max='99999999' value='"+start_val+"' onchange='validateMax_tbAmountTo_OL(this)' disabled>"+
				"</td>"+						
				"<td class='text-center'>"+
					"<input type='text' id='amount_insure_range_to_OL"+rowID+"' class='autoComma form-control text-right' data-v-min='1' " +
							"data-v-max='99999999' onchange='validateMax_tbAmountTo_OL(this)' >"+
				"</td>"+	
				"<td class='text-center'>"+
					"<input type='text' id='amount_insure_range_addup_OL"+rowID+"' class='autoComma form-control text-right' value='0.00' data-v-min='0' data-v-max='99999999'>"+
				"</td>"+																								
			"</tr>"	
				
		$("#tbl_insure_range_OL tbody").append(row)
		$(".autoComma").autoNumeric('init',{vMin: '0.00', vMax: '999999999.99'});
		$("#validate_input12_ol").show()
	}
}
function confirmDeleteinsuranceRange_OL(){
	
	$("#tbl_insure_range_OL tbody>tr").each(function(){
		if($(this).find('td:nth-child(1) i').hasClass('glyphicon-ok')){
			$(this).remove();
		}
	})
	validate_tableInsureRange();
	
}

function validate_tableInsureRange(){
	
	var size_tbInsureRange = $("#tbl_insure_range_OL tbody>tr").length
	if(size_tbInsureRange > 1){
		$("#tbl_insure_range_OL tbody>tr").each(function(i){
			if(i != 0){
				var data_parent =  replaceComma($(this).prev().closest("tr").find('td:nth-child(3) input[type="text"]').val())
				var data_present = replaceComma($(this).find('td:nth-child(3) input[type="text"]').val())
				if(Number(data_present) != Number(data_parent) + 1){
					$(this).find('td:nth-child(2) input[type="text"]').val(parseFloat(Number(data_parent) + 1).toFixed(2))
				}
			}
		})
	}
}


var stoage_delete_covRider = new Array();
function add_coverageRider_OL(e,cov_code,rider_name,cov_cat_id,prd_code_rider,biz_code,premCal){
	if($(e).is(':checked')){
		$("#div_Type_Additional_contract_OL input[name='chk_Type_Additional_contract_OL[]'][value='OPTIONAL']").prop("checked",true).attr("disabled",true);
		var count_row = $("#tb_Additional_contract_OL>tbody>tr").length;
		if(count_row > 0){
			var numberImgOK = Number($("#tb_Additional_contract_OL>tbody>tr:last").attr("data-id"));	
		}else{
			var numberImgOK = 0;
		}
		numberImgOK++;
		var ftOnclick = 'imgCheckbox(id);';
		var newID = "imgOK_"+numberImgOK;
	    var rate_cat_NAR = $("#rate_cat_NAR_OL").val();
	    var rider_type = "";
	    var addrowChild = 'addrowChild_OL("'+numberImgOK+'","'+rider_name+'","'+rider_type+'",this);';
	    var changeFileModal = 'modalGet_selectFile_OL("'+cov_code+'","fileuploads_PMRate1_OL","ip_fileuploads_OL_Additional_contract_Show_'+numberImgOK+'","span_Additional_contractopen_'+numberImgOK+'","validate_Additional_OL_'+numberImgOK+'_OL","span_Additional_contractdownload_'+numberImgOK+'","")';
		 
	    row = 	"<tr id=\"tr_Additional_contract_"+numberImgOK+"\" data-id=\""+numberImgOK+"\" data-level=\"1\">"+
		"<td class=\'text-center verticalCenter borderBlack\'  class=\'text-center verticalCenter borderBlack\' id=\""+newID+"\" onclick=\'"+ftOnclick+"\'>"+
			/*"<i class=\'glyphicon glyphicon-edit\'></i>" +*/
		"</td>"+
		"<td class='text-center verticalCenter fontcolortable2 borderBlack font-bold'>" +
			"<input type='hidden' id='hd_prdDesign_OL"+numberImgOK+"' value='OPTIONAL'/>"+
			"<label class='font-term-green font-bold'>Optional</label>"+
		"</td>"+
		"<td class=\"text-left verticalCenter borderBlack\">"+
			"<input type='hidden' id='prd_code_rider_"+numberImgOK+"' value='"+prd_code_rider+"'>"+
			"<input type='hidden' id='cov_code_rider_"+numberImgOK+"' value='"+cov_code+"'>"+
			"<label style=\"text-decoration: underline; color: blue;\">"+prd_code_rider+"</label>"+
		"</td>"+
		"<td class='text-center verticalCenter fontcolortable2 borderBlack font-bold'>" +
			"<input type='hidden' id='cov_cat_id_rider"+numberImgOK+"' value='"+cov_cat_id+"'>"+
			"<label>"+biz_code+"</label>" +
		"</td>"+
		"<td class=\"text-left verticalCenter fontcolortable2 borderBlack\">"+
			"<label>"+rider_name+"</label>"+
		"</td>"+
		"<td class=\"text-center verticalCenter borderBlack\">"+
			"<i class=\"glyphicon glyphicon-plus icon-blue-circle disabledAll\"  data-id=\'"+numberImgOK+"\' data-topic=\'"+cov_code+"\' data-type=\'1\' id=\"addrow1_"+numberImgOK+"\" onclick='"+addrowChild+"'></i>"+
		"</td>"+
		"<td class=\"verticalCenter borderBlack\">"+
			"<div class=\"input-group col-xs-12\">"+
				"<input type='hidden' id='fileId_rider_PM"+numberImgOK+"' value='' />"+
				"<input type='hidden' id='rate_cat_id_rider_PM"+numberImgOK+"' value='' />"+
				"<input type='hidden' id='rate_layout_id_rider_PM"+numberImgOK+"' value='' />"+
				"<input type=\"file\" accept=\".txt\" id=\"ip_fileuploads_Additional_contract"+numberImgOK+"\" style=\"display: none\">"+
				"<input type=\"text\" class=\"form-control clear_val\" id=\"ip_fileuploads_OL_Additional_contract_Show_"+numberImgOK+"\" readonly> " +
				"<span class=\"input-group-btn\"><button class=\"btn btn-default btn-primary disabledAll\" type=\"button\" id=\"bt_uploadfileAdditional_contract"+numberImgOK+"\"  onclick='"+changeFileModal+"' data-toggle=\"modal\" data-target=\"#modal_input_PMRate_OL\">" +
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
	    "</tr>";
		
	     var flag_dup = check_dupTableRider(prd_code_rider)
	     if(!flag_dup){
	    	 $("#tb_Additional_contract_OL tbody").append(row);
	 		$(".autoComma").autoNumeric('init',{vMin: '0.00', vMax: '999999999.99'});
	 		$(".autoPercent").autoNumeric('init',{vMin: '0.00', vMax: '99.99'});
	 		
	 		get_case_rider_OL("PR",cov_code,cov_cat_id,prd_code_rider,numberImgOK,true,biz_code,rider_name)
	     }
		
	}else{
		
		var flag_undup = uncheck_dupTableRider(prd_code_rider)
		if(!flag_undup){
			/*ไปลบทุก Tab ที่มี Optional ผูกไปด้วย*/
			deleteRow_By_PrdCode(prd_code_rider)
			
			/*เก็บ prd_code ที่เราลบออก OPTIONAL*/
			var flag_dupp = false
			for(i=0 ; i < stoage_delete_covRider.length ; i++){
				if(stoage_delete_covRider[i].prd_code_rider == prd_code_rider 
						&& stoage_delete_covRider[i].prem_cal_meth == premCal){
					flag_dupp = true
				}
			}
			if(flag_dupp == false){
				obj = {}
				obj["prd_code_rider"] = prd_code_rider
				obj["prem_cal_meth"] = premCal
				stoage_delete_covRider.push(obj)
				//stoage_delete_covRider.push(prd_code_rider)
			}
			
			
			$("#bnf_"+cov_code+"_OL").remove()
			$("#benefitDetail"+cov_code+"_OL").css("display","none")
			$("#bnf_rider_"+cov_code).css("display","none")
			$("#term_box_"+cov_code).remove();
			var row_baseplan = $("#tb_PM_Rate_OL tbody>tr").length;
		
			if(row_baseplan > 0){
				
				$("#li_bnf_base_ol").addClass("active")
				$("#bnf_"+cov_code+"_OL").removeClass("active")
				$("#menu_ProductBnf1_OL").addClass("in active");
				$("#menu_ProductBnf2_OL").removeClass("in active");
				
			}else{
				var row_tb_rider = $("#tb_Additional_contract_OL tbody>tr").length;
				
				if(row_tb_rider > 0){
					var tb_id = $("#tb_Additional_contract_OL tbody>tr:first").attr('id');
					tb_id = tb_id.replace("tr_Additional_contract_","");
					
					var cov_code_rider = $("#cov_code_rider_"+tb_id).val();
					$("#bnf_"+cov_code_rider+"_OL").addClass("active")
					$("#menu_ProductBnf1_OL").removeClass("in active");
					$("#menu_ProductBnf2_OL").addClass("in active");
					$("#tabBC_00_"+cov_code_rider+"_OL").addClass("active in")
					$("#BC0_"+cov_code_rider+"_OL").css("display","block")
					$("#bnf_rider_"+cov_code_rider+"").css("display","block")
				}
			}
		}
		
	}
	validate_rd_tbAdditional();
	//console.log("stroage",stoage_delete_covRider);
}

/*ส่งค่า prdCode ไปเช็คในตารางว่ามีซ้ำไหม ถ้าซ้ำจะ return true */
function check_dupTableRider(select_prdCode){
	var flag_check_dupTableRider = false;
	
	$("#tb_Additional_contract_OL tbody>tr").each(function(){
		if( $(this).find('td:nth-child(3) label').text() == select_prdCode){
			flag_check_dupTableRider = true
		}
	})
	
	return flag_check_dupTableRider;
}

/*ส่งค่า prdCode ไปเช็คในตารางว่ามีซ้ำไหม ถ้าซ้ำจะ return true */
function uncheck_dupTableRider(select_prdCode){
	var flag_check_dupTableRider = false;
	
	$("#tbl_contractAmount_OL input[type='checkbox']:checked").each(function(){
		if( $(this).parent().parent().find('td:nth-child(2)').text() == select_prdCode){
			flag_check_dupTableRider = true
		}
	})
	$("#tbl_contractInsure_OL input[type='checkbox']:checked").each(function(){
		if( $(this).parent().parent().find('td:nth-child(2)').text() == select_prdCode){
			flag_check_dupTableRider = true
		}
	})
	
	return flag_check_dupTableRider;
}

function disabled_coverageRider_OL(prd_rider_code){
	
	/*การซื้อสัญญาแนบท้ายควบ - ซื้อตามจำนวนเงินเอาประกันภัย */
	$("#tbl_contractAmount_OL tbody>tr").each(function(){
		if( $(this).find('td:nth-child(2)').text() == prd_rider_code){
			$(this).find('td:nth-child(1) input[type="checkbox"]').prop("disabled",true)
		}
	})
	
	/*การซื้อสัญญาแนบท้ายควบ - ซื้อตามเบี้ยประกันภัย*/
	$("#tbl_contractInsure_OL tbody>tr").each(function(){
		if( $(this).find('td:nth-child(2)').text() == prd_rider_code){
			$(this).find('td:nth-child(1) input[type="checkbox"]').prop("disabled",true)
		}
	})
}

function cancel_disabled_coverageRider_OL(prd_rider_code){
	
	/*การซื้อสัญญาแนบท้ายควบ - ซื้อตามจำนวนเงินเอาประกันภัย */
	$("#tbl_contractAmount_OL tbody>tr").each(function(){
		if( $(this).find('td:nth-child(2)').text() == prd_rider_code){
			$(this).find('td:nth-child(1) input[type="checkbox"]').prop("disabled",false)
		}
	})
	
	/*การซื้อสัญญาแนบท้ายควบ - ซื้อตามเบี้ยประกันภัย*/
	$("#tbl_contractInsure_OL tbody>tr").each(function(){
		if( $(this).find('td:nth-child(2)').text() == prd_rider_code){
			$(this).find('td:nth-child(1) input[type="checkbox"]').prop("disabled",false)
		}
	})
}

$("#menu_OL_7").click(function(){	
	
	$("#tabBenefitProduct_OL>li").removeClass("active");
	$(".benefRider_OL").css("display","none")
	$("#tabBenefitProduct_OL>li:first").addClass("active");
	$("#tab_benefitRider_in>div:first").css("disaplay","block")
	
	var tb_baseplan = $("#tb_PM_Rate_OL tbody>tr").length;
	if(tb_baseplan > 0){
		$("#menu_ProductBnf1_OL").addClass("active in");
		$("#menu_ProductBnf2_OL").removeClass("active in");
	}else{
		$("#menu_ProductBnf1_OL").removeClass("active in");
		$("#menu_ProductBnf2_OL").addClass("active in");
		
		var tb_rider_row = $("#tb_Additional_contract_OL tbody>tr").length;
		if(tb_rider_row > 0){
			
			var tb_id = $("#tb_Additional_contract_OL tbody>tr:first").attr('id')
			
			tb_id = tb_id.replace("tr_Additional_contract_","");
			
				var cov_code_rider = $("#cov_code_rider_"+tb_id).val();
				
				$("#bnf_"+cov_code_rider+"_OL").addClass("active")
				$("#tabBC_00_"+cov_code_rider+"_OL").addClass("active in")
				$("#BC0_"+cov_code_rider+"_OL").css("display","block")
				$("#bnf_rider_"+cov_code_rider+"").css("display","block")
					
		}
	}
})
$("#menu_OL_5").click(function(){	
	
	/*validate tab ข้อกำหนด*/
//	validate_input6_cl();
//	validate_input7_cl();
//	validate_input8_cl();
//	validate_input9_cl();
//	validate_input10_cl();
//	
	
	/*เพิ่ม row ของ Tab-ข้อกำหนดการรับประกัน || Lookup ตาราง-การคำนวณจำนวนเงินเอาประกันภัย*/
	var dropdownUnit = $("#hide_fixCovUnit_OL").val();
	var dropdownOF1 = $("#hide_fixCovFactor_OL").val();
	var dropdownOF2 = $("#hide_minCovFactor_OL").val();
	$("#tbl_cal_amount_OL tbody>tr").remove();
	var row_appned = 0;
	var font_color = "";
	$("#tb_Calculate_insurance_OL tbody>tr").each(function(i){
		var level = $(this).data('level');
		if(level == 1){
			var cov_code = $(this).find('td:nth-child(1) label').text();
			var type = $(this).find('td:nth-child(2) label').text();
			var from_sa = $(this).find('td:nth-child(4) input').val();
			var to_sa = $(this).find('td:nth-child(5) input').val();
			var count_money = $(this).find('td:nth-child(6) input').val();
			var unit_money = $(this).find('td:nth-child(7) select').val();
			var factor_money = $(this).find('td:nth-child(8) select').val();
			var bath = $(this).find('td:nth-child(9) input').val();
			var factory_bath = $(this).find('td:nth-child(10) select').val();
			var rate = $(this).find('td:nth-child(11) input').val();
			var factory_rate = $(this).find('td:nth-child(12) select').val();
			var cov_type = $(this).find('td:nth-child(1) #type_OL').val();
			
			var row_cal = "<tr id=\"tr_cal_amount_"+i+"\" data-id=\""+i+"\" data-parent=\"0\" data-level=\"1\" data-key='' >"+
			"<td width=\"12%\" class=\"text-center verticalCenter fontcolortable1\">"
			 if(i == 0){
				 font_color = "font-term-purple";
				 row_cal += "<label class='"+font_color+" font-bold'>"+cov_code+"</label>"+
				 				"<input type='hidden' id='prd_rider_code' value=''>"+
				 				"<input type='hidden' id='serie_no' value=''>"+
				 				"<input type='hidden' id='seq' value=''>"
			 }else{
				 
				 if(cov_type == "E"){
					 font_color = "font-term-yellow";
					 row_cal += "<label class='"+font_color+" font-bold'>"+cov_code+"</label>";
				 }else{
					 font_color = "font-term-green";
					 row_cal += "<label class='"+font_color+" font-bold'>"+cov_code+"</label>";
				 }
				 
				 row_cal += "<input type='hidden' id='prd_rider_code' value=''>"+
				 				"<input type='hidden' id='serie_no' value=''>"+
				 				"<input type='hidden' id='seq' value=''>"
			 }
			row_cal += "</td>"+
					"<td class=\"text-center verticalCenter font-bold "+font_color+"\">"+type+"</td>"+
					"<td width=\"7%\"class=\"text-right verticalCenter \">"+
					"<input type='text' class='auto form-control text-center width40px' value='"+from_sa+"' data-v-min='0.00' data-v-max='999.99' disabled>"+
					"</td>"+
					"<td width=\"7%\" class=\"text-right verticalCenter \">"+
					"<input type='text' class='auto form-control margin-padding0 text-center width40px' value='"+to_sa+"' data-v-min='0.00' data-v-max='999.99' disabled>"+
					"</td>"+
					"<td width=\"10%\"class=\"text-right verticalCenter \">"+
					"<input type='text' class='auto form-control margin-padding0 text-center width40px' value='"+count_money+"' data-v-min='0.00' data-v-max='999999999.99' disabled>"+
					"</td>"+
					"<td width=\"12%\" class=\"text-right verticalCenter \">"+
						"<select class=\"form-control\" disabled><option value='NONE' >None</option>"+dropdownUnit+"</select></td>"+
					"<td width=\"12%\" class=\"text-right verticalCenter \">"+
						"<select class=\"form-control\" disabled><option value='NONE' >None</option>"+dropdownOF1+"</select></td>"+
					"<td width=\"9%\" class=\"text-right verticalCenter \">"+
					"<input type='text' class='auto form-control margin-padding0 text-center width40px' value='"+bath+"' data-v-min='0.00' data-v-max='999999999.99' disabled>"+
					"<td width=\"12%\" class=\"text-right verticalCenter \">"+
					"<select class=\"form-control\" disabled><option value='NONE' >None</option>"+dropdownOF1+"</select></td>"+
					"<td width=\"9%\" class=\"text-right verticalCenter \">"+
					"<input type='text' class='auto form-control margin-padding0 text-center width40px' value='"+rate+"' data-v-min='0.00' data-v-max='999999999.99' style='width: initial' disabled></td>"+
					"<td width=\"12%\" class=\"text-right verticalCenter \">"+
					"<select class=\"form-control\" style='width: initial' disabled><option value='NONE' >None</option>"+dropdownOF1+"</select></td>"+
				"</tr>";		
			$("#tbl_cal_amount_OL tbody").append(row_cal);
			$("#tbl_cal_amount_OL tbody>tr").eq(row_appned).find("td:nth-child(6) option[value="+unit_money+"]").attr("selected",true);
			$("#tbl_cal_amount_OL tbody>tr").eq(row_appned).find("td:nth-child(7) option[value="+factor_money+"]").attr("selected",true);
			$("#tbl_cal_amount_OL tbody>tr").eq(row_appned).find("td:nth-child(9) option[value="+factory_bath+"]").attr("selected",true);
			$("#tbl_cal_amount_OL tbody>tr").eq(row_appned).find("td:nth-child(11) option[value="+factory_rate+"]").attr("selected",true);
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
			var rate = $(this).find('td:nth-child(11) input').val();
			var factory_rate = $(this).find('td:nth-child(12) select').val();
			var row_cal = "<tr id=\"tr_cal_amount_"+i+"\" data-id=\""+i+"\" data-parent=\"0\" data-level=\"1\" data-key='' >"+
			"<td width=\"14%\" class=\"text-center verticalCenter fontcolortable1\">"
			 "<label class='font-term-green font-bold'></label>"+
				 				"<input type='hidden' id='prd_rider_code' value=''>"+
				 				"<input type='hidden' id='serie_no' value=''>"+
				 				"<input type='hidden' id='seq' value=''>"
			row_cal += "</td>"
			row_cal += "<td width=\"7%\"class=\"text-center verticalCenter fontcolortable1 \"><label class='font-term-green font-bold'></label></td>"
			row_cal += 	
					"<td width=\"7%\"class=\"text-right verticalCenter\">"+
					"<input type='text' class='auto form-control text-center width40px' value='"+from_sa+"' data-v-min='0.00' data-v-max='999.99' disabled>"+
					"</td>"+
					"<td width=\"7%\" class=\"text-right verticalCenter\">"+
					"<input type='text' class='auto form-control margin-padding0 text-center width40px' value='"+to_sa+"' data-v-min='0.00' data-v-max='999.99' disabled>"+
					"</td>"+
					"<td width=\"10%\"class=\"text-right verticalCenter\">"+
					"<input type='text' class='auto form-control margin-padding0 text-center width40px' value='"+count_money+"' data-v-min='0.00' data-v-max='999999999.99' disabled>"+
					"</td>"+
					"<td width=\"14%\" class=\"text-right verticalCenter\">"+
						"<select class=\"form-control\" disabled><option value='NONE' >None</option>"+dropdownUnit+"</select></td>"+
					"<td width=\"14%\" class=\"text-right verticalCenter\">"+
						"<select class=\"form-control\" disabled><option value='NONE' >None</option>"+dropdownOF1+"</select></td>"+
					"<td width=\"10%\" class=\"text-right verticalCenter\">"+
					"<input type='text' class='auto form-control margin-padding0 text-center width40px' value='"+bath+"' data-v-min='0.00' data-v-max='999999999.99' disabled>"+
					"<td width=\"14%\" class=\"text-right verticalCenter\">"+
					"<select class=\"form-control\" disabled><option value='NONE' >None</option>"+dropdownOF1+"</select></td>"+
					"<td width=\"10%\" class=\"text-right verticalCenter \">"+
					"<input type='text' class='auto form-control margin-padding0 text-center width40px' value='"+rate+"' data-v-min='0.00' data-v-max='999999999.99' style='width: initial' disabled></td>"+
					"<td width=\"14%\" class=\"text-right verticalCenter \">"+
					"<select class=\"form-control\" style='width: initial' disabled><option value='NONE' >None</option>"+dropdownOF1+"</select></td>"+
				"</tr>";		
			$("#tbl_cal_amount_OL tbody").append(row_cal);
			$("#tbl_cal_amount_OL tbody>tr").eq(row_appned).find("td:nth-child(6) option[value="+unit_money+"]").attr("selected",true);
			$("#tbl_cal_amount_OL tbody>tr").eq(row_appned).find("td:nth-child(7) option[value="+factor_money+"]").attr("selected",true);
			$("#tbl_cal_amount_OL tbody>tr").eq(row_appned).find("td:nth-child(9) option[value="+factory_bath+"]").attr("selected",true);
			$("#tbl_cal_amount_OL tbody>tr").eq(row_appned).find("td:nth-child(11) option[value="+factory_rate+"]").attr("selected",true);
			row_appned++;
		}
	});

});

/************** Validate ******************/
function bt_Menu1_Confirm_ol(){
	var message = "";
	var error = 0;
	
	var key_Insurance_product_cl = $("#key_Insurance_product_ol").val();
	var name_th = $("#th_Name_ol").val();
	var market_name_th = $("#th_marketingName_ol").val();
	
	/*base plan*/
	if($("#tb_PM_Rate_OL tbody>tr").length == 0){
		error++;
	}
	
	if(key_Insurance_product_cl == "" || name_th == "" || market_name_th == ""){
		error++;
	}
	
	//endorse
	$("#tb_ageRange_OL tbody>tr[data-level='2']").each(function(){
		var endorse_name = $(this).find("td:nth-child(1)>div>div").text();
		if(endorse_name == ""){
			error++;
		}
	});
	
	if(error > 0){
		message = "กรุณาระบุข้อมูลให้ครบ";
		alertError(message);
		nameTab 	= "menu_OL_1";
		Statuesave = "N";
	}else{
		datasave_BasicInformation_OL();
		dataDelete_BasicInformation_OL();
		message = "บันทึกข้อมูลเรียบร้อย";
		alertSuccess(message);
		nameTab 	= "menu_OL_1";
		Statuesave = "Y";
	}	
}

/*การคำนวณเบี้ยประกัน*/
function bt_Menu3_Confirm_OL(){
	var message = "";
	var error = 0;
	
	$("#tb_Calculate_insurance_OL tbody tr").each(function(){
		var data_group = $(this).attr("data-group");
		
		//ทุนชีวิตอ้างอิง (SA Life)
		var from = Number(replaceComma($(this).find("td:nth-child(4) input").val()));
		var to =  Number(replaceComma($(this).find("td:nth-child(5) input").val()));
		var next = $(this).closest("tr[data_group='"+data_group+"']").next("tr[data_group='"+data_group+"']").find("td:nth-child(4) input").val();
		if(from > to){
			error++;
		}
		
		if(next != undefined){
			var diff_value = Number(next) - Number(to);
			if(Number(diff_value) != 1){
				error++;
			}
		}
		
		//จำนวนเงินเอาประกันภัย
		var amount1 = Number(replaceComma($(this).find("td:nth-child(6) input").val()));
		var unit1 = $(this).find("td:nth-child(7) select").val();
		var ofunit1 = $(this).find("td:nth-child(8) select").val();
		
		if(Number(amount1) != 0){
			if(unit1 == "NONE"){
				error++;
			}
			
			/*if(ofunit1 == "NONE"){
				error++;
			}*/
		}
		
		if(unit1 != "NONE"){
			if(Number(amount1) == 0){
				error++;
			}
			
			/*if(ofunit1 == "NONE"){
				error++;
			}*/
		}
		
		if(ofunit1 != "NONE"){
			if(Number(amount1) == 0){
				error++;
			}
			
			if(unit1 == "NONE"){
				error++;
			}
		}
		
		//จำนวนเงินเอาประกันภัยขั้นต่ำ
		var amount2 = Number(replaceComma($(this).find("td:nth-child(9) input").val()));
		var unit2 = $(this).find("td:nth-child(10) select").val();
		
		/*if(Number(amount2) != 0){
			if(unit2 == "NONE"){
				error++;
			}
		}*/
		if(unit2 != "NONE"){
			if(Number(amount2) == 0){
				error++;
			}
		}
		
		//จำนวนเงินเบี้ยประกันภัยขั้นต่ำ
		if(data_group == 1){
			var amount3 = Number(replaceComma($(this).find("td:nth-child(11) input").val()));
			var unit3 = $(this).find("td:nth-child(12) select").val();
			
			/*if(Number(amount3) != 0){
				if(unit3 == "NONE"){
					error++;
				}
			}*/
			
			if(unit3 != "NONE"){
				if(Number(amount3) == 0){
					error++;
				}
			}
		}

	});
	
	
	if(error > 0){
		message = "กรุณาระบุข้อมูลให้ครบ";
		alertError(message);
		nameTab 	= "menu_OL_3";
		Statuesave = "N";
	}else{
		datasave_calInsurance_OL();
		message = "บันทึกข้อมูลเรียบร้อย";
		alertSuccess(message);
		nameTab 	= "menu_OL_3";
		Statuesave = "Y";
	}	
}

/*การใช้สิทธิ์ตามกรมธรรม์*/
function bt_Menu2_Confirm_OL(){
	
	var message = "";
	var error = 0;
	
	if(error > 0){
		message = "กรุณาระบุข้อมูลให้ครบ";
		alertError(message);
		nameTab 	= "menu_OL_2";
		Statuesave = "N";
	}else{
		datasave_useRightInsurance_OL();
		message = "บันทึกข้อมูลเรียบร้อย";
		alertSuccess(message);
		nameTab 	= "menu_OL_2";
		Statuesave = "Y";
	}	
}

/*ผลประโยชน์การขาย*/
function bt_Menu4_Confirm_OL(){
	var message = "";
	var error = 0;

	if($("#rd_SaleCondition_OL1").prop("checked") == true){
		/*$("#tbl_SaleBenefitNormal_OL tbody tr[data-group='1']").each(function(){
			var startDate = $(this).find("td:nth-child(5) input").val();
			var endDate =  $(this).find("td:nth-child(6) input").val();
			if(startDate == "" || endDate == ""){
				error++;
			}
			
			if (startDate != "" && endDate != "") {
			   var startDate_parse = parseDate(startDate);
			   var endDate_parse = parseDate(endDate);
		       if(startDate_parse > endDate_parse){
		    	   $(this).find("td:nth-child(6) input").val("");
		   		error++;
		       }
		     }
		});*/
	}else{
		/*if($("#panel_SaleBenefit_OL3").css("display") == "block"){
			$("#tbl_SaleBenefit_OL tbody tr").each(function(){
				var startDate = $(this).find("td:nth-child(5) input").val();
				var endDate =  $(this).find("td:nth-child(6) input").val();
				var type = $(this).find("td:nth-child(1) #cov_type_cond_OL").val();
				
				if(type == "B"){
					if(startDate == "" || endDate == ""){
						error++;
					}
					
					if (startDate != "" && endDate != "") {
						   var startDate_parse = parseDate(startDate);
						   var endDate_parse = parseDate(endDate);
					       if(startDate_parse > endDate_parse){
					    	   $(this).find("td:nth-child(6) input").val("");
					   		error++;
					       }
					    }
				}

			});
		}*/
		
	}
		
	if(error > 0){
		message = "กรุณาระบุข้อมูลให้ครบ";
		alertError(message);
		nameTab 	= "menu_OL_4";
		Statuesave = "N";
	}else{
		datasave_saleBenefit_OL();
		message = "บันทึกข้อมูลเรียบร้อย";
		alertSuccess(message);
		nameTab 	= "menu_OL_4";
		Statuesave = "Y";
	}		
}
/*ข้อกำหนด*/
function bt_Menu5_Confirm_OL(){
	var message = "";
	var error = 0;
	
	/*วันที่กำหนดการขาย*/
	if($("#menu_term1_datefrom_ol").val() == "" || $("#menu_term1_dateto_ol").val() == ""){
		error++;
	}else{
		var dateFrom = $("#menu_term1_datefrom_ol").val();
		var dateTo = $("#menu_term1_dateto_ol").val();
		var d1 = dateFrom.split("/");
		var d2 = dateTo.split("/");
		var from = new Date(d1[2], parseInt(d1[1])-1, d1[0]);  // -1 because months are from 0 to 11
		var to   = new Date(d2[2], parseInt(d2[1])-1, d2[0]);
		
		if( from >= to){
			error = -1;
		}
	}
	
	/*Mode การชำระเบี้ย*/
	var flag_modeTerms = false;
	$("#tbl_modeTerms_OL tbody>tr").each(function(){
		if($(this).find('td:nth-child(1) input[type="checkbox"]').is(':checked')){
			flag_modeTerms = true;
		}
	});
	$("#tbl_modeTerms_OL2 tbody>tr").each(function(){
		if($(this).find('td:nth-child(1) input[type="checkbox"]').is(':checked')){
			flag_modeTerms = true;
		}
	});
	if(!flag_modeTerms){
		error++;
	}
	
	/*พิกัดอายุ*/
	if($("#start_age_insure_ol").val() == "" || $("#end_age_insure_ol").val() == ""){
		error++;
	}
	
	/*ช่วงจำนวนเงินเอาประกันภัย*/
	var chk_data = validate_input12_ol()
	if(chk_data){
		error++;
	}
	// ยังไม่ได้ใช้
	/*สูตรการคำนวณอายุ*/
/*	var flag_formulaTerms = false;
	$("#tbl_formulaTerms_OL tbody>tr").each(function(){
		if($(this).find('td:nth-child(1) input[type="radio"]').is(':checked')){
			flag_formulaTerms = true;
		}
	});
	if(!flag_formulaTerms){
		error++;
	}*/
	
	/*ชั้นอาชีพที่เสนอขาย*/
	var flag_saleDegreeTerms = false;
	$("#tbl_saleDegreeTerm_OL tbody>tr").each(function(){
		if($(this).find('td:nth-child(1) input[type="checkbox"]').is(':checked')){
			flag_saleDegreeTerms = true;
		}
	});
	if(!flag_saleDegreeTerms){
		error++;
	}
	
	if(error > 0){
		message = "กรุณาระบุข้อมูลให้ครบ";
		alertError(message);
		nameTab 	= "menu_OL_5";
		Statuesave = "N";
	}else if(error == -1){
		message = "กรุณาระบุข้อมูลให้ถูกต้อง";
		alertError(message);
	}else{
		datasave_warrantyTerms_OL();
		gen_JSON_UW_AppendixProduct();
		message = "บันทึกข้อมูลเรียบร้อย";
		alertSuccess(message);
		nameTab 	= "menu_OL_5";
		Statuesave = "Y";
	}	
}

/*Policy Wording*/
function bt_Menu5_ConfirmPolicy_OL(){
	var message = "";
	var error = 0;
	
	if(error > 0){
		message = "กรุณาระบุข้อมูลให้ครบ";
		alertError(message);
		nameTab 	= "menu_OL_5_1";
		Statuesave = "N";
	}else{
		datasave_policyWording_OL();
		message = "บันทึกข้อมูลเรียบร้อย";
		alertSuccess(message);
		nameTab 	= "menu_OL_5_1";
		Statuesave = "Y";
	}	
}
/************* End Validate ******************/
function dataDelete_BasicInformation_OL(){
	
	var arr_prd_rider_code = $("#arr_prd_rider_code_delete_OL").val()
	var arr_rider = [];
	var split_arr_rider = arr_prd_rider_code.split(",");
	for(i=0 ; i < split_arr_rider.length ; i++){
		var flag_dupRider = false;
		var rider_code = split_arr_rider[i];
		$("#tb_PM_Rate_OL tbody>tr").each(function(){
			if( rider_code == $(this).find('td:nth-child(1) label').text()){
				flag_dupRider = true;
			}
		})
		$("#tb_Additional_contract_OL tbody>tr").each(function(){
			if( rider_code == $(this).find('td:nth-child(3) label').val()){
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
		url: 'ProductBasePlanOL_SaveData_Servlet',
		type: "POST",
		data: json_data_BasicInfo,
		async: false,
		success: function (response) {
		
		}
	});
	console.log(json_data_BasicInfo);
}

/*******************Approve*******************/
function setting_LookupApproveOL(response){
	var obj_BI = response.Tab_Basic_Information[0];
	var cov_code = $("#pass_Insurance_product_ol").val();
	
	$("#code_Coverage_OL").val(cov_code);
	$("#confirmApprove0051_user_OL .modal-body p>span").text(cov_code);
	$("#confirmApprove0051_OL .modal-body p>span").text(cov_code);
	$("#confirmNotApprove0051_OL .modal-body p>span").text(cov_code);
	$("#confirmEdit0051_user_OL .modal-body p>span").text(cov_code);
	$("#confirmApproveEdit0051_OL .modal-body p>span").text(cov_code);
	$("#confirmNotApproveEdit0051_OL .modal-body p>span").text(cov_code);
}

//Approve
function setting_ApproveOL(response,type,prd_code_temp,prd_code_Clone){
	var obj_BI = response.Tab_Basic_Information[0];
	/*NEW , UPDATE = แก้ไข, REQUEST_FOR_APPROVE = รออนุมัติ, APPROVED = อนุมัติ, REJECTED = ไม่อนุมัติ*/
	//var status = "REJECTED";
	//Benz Clone 22-11-2019
	var status 		= "";
	var status_PD 	= "";
	if (type == "Clone") {
		 status 	= "NEW";
		 status_PD 	= "NEW";
		 datasave_BasicInformation_OL ();
		 datasave_calInsurance_OL ();
		 datasave_useRightInsurance_OL ();
		 datasave_saleBenefit_OL ();
		 datasave_warrantyTerms_OL ();
		 set_status_clone(prd_code_Clone,$("#groupName").val());
			
	}else {
		 status 	= obj_BI.status;
		 status_PD 	= obj_BI.status_PD;
	}
	var cov_code = $("#pass_Insurance_product_ol").val();
	var cov_nameTH = obj_BI.nameTH
	var marketing_nameTH = obj_BI.marketing_nameTH
	
	$("#code_Coverage_OL").val(cov_code);
	$("#approve_nameTH_OL").val(cov_nameTH);
	$("#approve_nameEN_OL").val(marketing_nameTH);
	$("#cov_status").val(status);
	$("#cov_status_PD").val(status_PD);
	$("#confirmApprove0051_user_OL .modal-body p>span").text(cov_code);
	$("#confirmApprove0051_OL .modal-body p>span").text(cov_code);
	$("#confirmNotApprove0051_OL .modal-body p>span").text(cov_code);
	$("#confirmEdit0051_user_OL .modal-body p>span").text(cov_code);
	$("#confirmApproveEdit0051_OL .modal-body p>span").text(cov_code);
	$("#confirmNotApproveEdit0051_OL .modal-body p>span").text(cov_code);
	
	//enable tab
	if(status == "NEW" && status_PD == "NEW"){
		//No Action
	}else{
		$("#menu_OL_3").removeClass("disabledAll");
		$("#menu_OL_2").removeClass("disabledAll");
		$("#menu_OL_4").removeClass("disabledAll");
		$("#menu_OL_5").removeClass("disabledAll");
		$("#menu_OL_7").removeClass("disabledAll");
		$("#menu_OL_6").removeClass("disabledAll");
	}
}

function bt_approved_OL(claim){
	var cov_code = $("#code_Coverage_OL").val();
	var name_TH = $("#approve_nameTH_OL").val();
	var name_EN = $("#approve_nameEN_OL").val();
	var status_policy = $("#status_policy_OL").val();
	var groupName = $("#groupName").val();
	var cov_code_for_JSON=$("#prd_code_base_PM").val();
	var status = "";
	var remark_noApproved = "";
	var remark_update = "";
	
	var status_th="";

	if(claim == "request"){
		status 		= "request_for_approve";		
		status_th	= "ขออนุมัติ";
		$("#div_request_approveOL button").addClass("disabledAll");
	}else if(claim == "approved"){
		status 		= "approved";
		status_th	= "อนุมัติ";
		$("#div_approveOL>div>button").addClass("disabledAll");
	}else if(claim == "not_approved"){
		status 		= "rejected";
		status_th	= "ไม่อนุมัติ";
		remark_noApproved = $('#comment_notApprovedOL').val();
		$("#div_approveOL>div>button").addClass("disabledAll");
	}else if(claim == "request_update"){
		status 		= "request_update";
		status_th	= "ขอแก้ไข";
		remark_update = $('#comment_RequestEditOL').val();
		$("#div_request_editOL button").addClass("disabledAll");
	}else if(claim == "approved_update"){
		status 		= "update";	
		status_th	= "อนุมัติแก้ไข";
		$("#div_approveEditOL>div>button").addClass("disabledAll");
	}else if(claim == "not_approved_update"){
		status 		= "approved_update";
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
		 url: "ProductBasePlanOL_SaveData_Servlet", 
		 data: data_json,
		 async: false,
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
						var prd_code = $("#pass_Insurance_product_ol").val();
						
						$("#tbl_health_check_OL tbody>tr").each(function() {
							if ($(this).find('td:nth-child(1) input ').is(':checked')) {
								Appendix_code=$(this).find('td:nth-child(2)').text();
							}
						});
						
						$("#tb_PM_Rate_OL tbody>tr").each(function() {
							
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

/*initialize*/
/****************Lookup**************/
function show_basicInfo_data_OL(response){

	var row_PDMode = "";	
	for (i in response.Tab_Basic_Information[0].mode) {
		var obj_PDMode = response.Tab_Basic_Information[0].mode[i];
			row_PDMode = "<tr>"+
					 "<td class='text-center verticalCenter fontcolortable1 borderBlack' width='10%'>"+
						"<input id='mode"+i+"_ol' class='' type='checkbox' value='"+obj_PDMode.value+"' disabled>"+
					 "</td>"+
					 "<td class='text-center verticalCenter fontcolortable1 borderBlack' width='10%'>"+
						"<label for='mode"+i+"_ol'>"+obj_PDMode.pass+"</label>"+
					 "</td>"+
					 "<td class='text-left verticalCenter fontcolortable1 borderBlack' width='80%'>"+
						"<label for='mode"+i+"_ol''>"+obj_PDMode.text+"</label>"+
					 "</td>"+
					 "</tr>";
					  
			$("#tbl_PD_Mode_OL tbody").append(row_PDMode);
	}
	
	var row_PDCredit_FirstYear = "";	
	for (i in response.Tab_Basic_Information[0].creditCards_firstYear) {
		var obj_PDCredit_FirstYear = response.Tab_Basic_Information[0].creditCards_firstYear[i];
			row_PDCredit_FirstYear = "<option value='"+obj_PDCredit_FirstYear.pass+"'>"+obj_PDCredit_FirstYear.text+"</option>";
			$("#lb_credit_firstYear_OL").append(row_PDCredit_FirstYear);
	}
	$("#lb_credit_firstYear_OL option[value='AGENT_FEE']").attr("selected","selected");
	
	var row_PDCredit_NextYear = "";	
	for (i in response.Tab_Basic_Information[0].creditCards_toYear) {
		var obj_PDCredit_NextYear = response.Tab_Basic_Information[0].creditCards_toYear[i];
			row_PDCredit_NextYear = "<option value='"+obj_PDCredit_NextYear.pass+"'>"+obj_PDCredit_NextYear.text+"</option>";
			$("#lb_credit_nextYear_OL").append(row_PDCredit_NextYear);
	}
	$("#lb_credit_nextYear_OL option[value='AGENT_FEE']").attr("selected","selected");
	
	var row_PDReinsurance  = "";	
	for (i in response.Tab_Basic_Information[0].reinsurance_Group) {
		var obj_PDReinsurance = response.Tab_Basic_Information[0].reinsurance_Group[i];
			row_PDReinsurance = "<option value='"+obj_PDReinsurance.pass+"'>"+obj_PDReinsurance.text+"</option>";
			$("#lb_reinsurance_OL").append(row_PDReinsurance);
	}
	$("#lb_reinsurance_OL option[value='NON_GIO_FULL_UW']").attr("selected","selected");
	
	var row_PDAML_CFT  = "";	
	for (i in response.Tab_Basic_Information[0].scoring_AML_CFT) {
		var obj_PDAML_CFT = response.Tab_Basic_Information[0].scoring_AML_CFT[i];
			row_PDAML_CFT = "<option value='"+obj_PDAML_CFT.pass+"'>"+obj_PDAML_CFT.text+"</option>";
					  
			$("#lb_AML_CFT_OL").append(row_PDAML_CFT);
	}
	
	var row_PDDistribution  = "";	
	for (i in response.Tab_Basic_Information[0].distribution_Channel) {
		var obj_PDDistribution = response.Tab_Basic_Information[0].distribution_Channel[i];
			row_PDDistribution = "<option value='"+obj_PDDistribution.pass+"'>"+obj_PDDistribution.text+"</option>";
					  
			$("#lb_distribution_OL").append(row_PDDistribution);
	}
	
	var row_PDSale  = "";	
	for (i in response.Tab_Basic_Information[0].sale_Channel) {
		var obj_PDSale = response.Tab_Basic_Information[0].sale_Channel[i];
			row_PDSale = "<option data-id='"+obj_PDSale.value+"' value='"+obj_PDSale.pass+"'>"+obj_PDSale.text+"</option>";
					  
			$("#lb_saleChannel_OL").append(row_PDSale);
	}
	
	var row_PDLoadnType  = "";	
	for (i in response.Tab_Basic_Information[0].loan_Type) {
		var obj_PDLoanType = response.Tab_Basic_Information[0].loan_Type[i];
			row_PDLoadnType = "<option value='"+obj_PDLoanType.pass+"'>"+obj_PDLoanType.text+"</option>";
					  
			$("#sel_Loan_Type_OL").append(row_PDLoadnType);
	}
	
	var sl_ageCoordinates = "";
	var row_PDUnit_age  = "";	
	for (i in response.Tab_Basic_Information[0].unit_age_coordinates) {
		var obj_PDUnit_Age = response.Tab_Basic_Information[0].unit_age_coordinates[i];
			row_PDUnit_age = "<option value='"+obj_PDUnit_Age.pass+"'>"+obj_PDUnit_Age.text+"</option>";
			sl_ageCoordinates += "<option value='"+obj_PDUnit_Age.pass+"'>"+obj_PDUnit_Age.text+"</option>";		  
			$("#tb_ageRange_OL>tbody td:nth-child(6)>select").append(row_PDUnit_age);
	}
	$("#sl_unit_age_coordinates_OL").val(sl_ageCoordinates);
	
	var row_PDContrat_type  = "";	
	for (i in response.Tab_Basic_Information[0].additional_Contract_Type) {
		var obj_PDContract_type = response.Tab_Basic_Information[0].additional_Contract_Type[i];
			row_PDContrat_type = "<div class='col-sm-3 style_col_width25'>"+
					"<input type='checkbox' name='chk_Type_Additional_contract_OL[]' id='chk_Type_Additional_contract_OL"+i+"' value='"+obj_PDContract_type.pass+"' disabled>"+
					"<label for='chk_Type_Additional_contract_OL"+i+"' class='label_input2'>"+obj_PDContract_type.text+"</label>"+
				"</div>"
			$("#div_Type_Additional_contract_OL").append(row_PDContrat_type);
	}
	$("#div_Type_Additional_contract_OL input[name='chk_Type_Additional_contract_OL[]'][value='BUNDLE']").attr("disabled",true)
	$("#div_Type_Additional_contract_OL input[name='chk_Type_Additional_contract_OL[]'][value='OPTIONAL']").attr("disabled",true)
	
	var row_reinsuranOpt  = "";	
	for (i in response.Tab_Basic_Information[0].reinsurance_opt) {
		var obj_reinsuranOpt = response.Tab_Basic_Information[0].reinsurance_opt[i];
			row_reinsuranOpt = "<option value='"+obj_reinsuranOpt.pass+"'>"+obj_reinsuranOpt.text+"</option>";
					  
			$("#lb_reinsure_OL").append(row_reinsuranOpt);
	}
	
	var row_parProduct  = "";	
	for (i in response.Tab_Basic_Information[0].parProduct) {
		var obj_parProduct = response.Tab_Basic_Information[0].parProduct[i];
			row_parProduct = "<option value='"+obj_parProduct.pass+"'>"+obj_parProduct.text+"</option>";
			$("#sel_Par_Product_OL").append(row_parProduct);
	}
	var row_fightingrProduct  = "";	
	for (i in response.Tab_Basic_Information[0].fightingProduct) {
		var obj_fightingProduct = response.Tab_Basic_Information[0].fightingProduct[i];
			row_fightingrProduct = "<option value='"+obj_fightingProduct.pass+"'>"+obj_fightingProduct.text+"</option>";
			$("#sel_Fighting_Product_OL").append(row_fightingrProduct);
	}
	
	
	var obj_nar = response.Tab_Basic_Information[0].NAR[0];
	$("#rate_cat_NAR_OL").val(obj_nar.pass);
	$("#layout_NAR1_OL").val(obj_nar.file[0].file_format);
	//$("#layout_NAR2_OL").val(obj_nar.file[1].file_format);
	$("#sub_cat_NAR_OL").val(obj_nar.sub_rate_cat)
	
	
}

function show_cal_premium_OL(response){
	
	/*Age Type*/
	var list_age_type = "<option value=''>Age Specific</option>";
	$("#lb_age_specific_OL").append(list_age_type);
	
	/*var row_age_specific  = "";	
	for (i in response.Tab_cal_insurance[0].Age_Type) {
		var obj_age_specific = response.Tab_cal_insurance[0].Age_Type[i];
			row_age_specific = "<option value='"+obj_age_specific.pass+"'>"+obj_age_specific.text+"</option>";
					  
			$("#lb_age_specific_OL").append(row_age_specific);
	}*/
	
	var row_SA_P  = "";	
	for (i in response.Tab_cal_insurance[0].FormulaCatId1) {
		var obj_SA_P = response.Tab_cal_insurance[0].FormulaCatId1[i];
			row_SA_P = "<option value='"+obj_SA_P.pass+"'>"+obj_SA_P.text+"</option>";
					  
			$("#lb_SAP_OL").append(row_SA_P);
	}
	
/*//	var row_cal_premium  = "";	
	var sl_cal = "";
	for (i in response.Tab_cal_insurance[0].FormulaCatId4) {
		var obj_cal_premium = response.Tab_cal_insurance[0].FormulaCatId4[i];
		//	row_cal_premium = "<option value='"+obj_cal_premium.pass+"'>"+obj_cal_premium.text+"</option>";
			sl_cal += "<option value='"+obj_cal_premium.pass+"'>"+obj_cal_premium.text+"</option>";
		//	$("#lb_CalRate_CL").append(row_cal_premium);
	}
	$("#hide_slCalculus_OL").val(sl_cal)
	*/
	
	var row_SMI  = "";	
	for (i in response.Tab_cal_insurance[0].FormulaCatId2) {
		var obj_SMI = response.Tab_cal_insurance[0].FormulaCatId2[i];
			row_SMI = "<option value='"+obj_SMI.pass+"'>"+obj_SMI.text+"</option>";
					  
			$("#lb_SMI_OL").append(row_SMI);
	}
	
	var row_MI  = "";	
	for (i in response.Tab_cal_insurance[0].FormulaCatId3) {
		var obj_MI = response.Tab_cal_insurance[0].FormulaCatId3[i];
			row_MI = "<option value='"+obj_MI.pass+"'>"+obj_MI.text+"</option>";
					  
			$("#lb_MI_OL").append(row_MI);
	}
	
	var col_unit = "";	
		col_unit = "<option value='NONE'>None</option>";
	for (i in response.Tab_cal_insurance[0].Fix_cov_unit) {
		var obj_col_unit = response.Tab_cal_insurance[0].Fix_cov_unit[i];
			col_unit += "<option value='"+obj_col_unit.pass+"'>"+obj_col_unit.text+"</option>";
	}
	$("#hide_fixCovUnit_OL").val(col_unit);

	var col_factor = "";	
		col_factor = "<option value='NONE'>None</option>";
	for (i in response.Tab_cal_insurance[0].Fix_cov_factor) {
		var obj_col_factor = response.Tab_cal_insurance[0].Fix_cov_factor[i];
			col_factor += "<option value='"+obj_col_factor.pass+"'>"+obj_col_factor.text+"</option>";
	}
	$("#hide_fixCovFactor_OL").val(col_factor);
	
	var col_factorMin = "";
		col_factorMin = "<option value='NONE'>None</option>";
	for(i in response.Tab_cal_insurance[0].Fix_cov_factorMin){
		var obj_col_factorMin = response.Tab_cal_insurance[0].Fix_cov_factorMin[i];
		col_factorMin += "<option value='"+obj_col_factorMin.pass+"'>"+obj_col_factorMin.text+"</option>";
	}
	$("#hide_minCovFactor_OL").val(col_factorMin);
	
	var col_callect_meth_FYP = "";
	for(i in response.Tab_cal_insurance[0].Collect_Meth){
		var obj_collect_meth = response.Tab_cal_insurance[0].Collect_Meth[i];
		col_callect_meth_FYP = "<div class='col-sm-4' id='col_collect_meth_FYP"+i+"'>"+
			"<input type='checkbox' name='chk_cal_pay_premium_OL[]' id='chk_cal_pay_premium_OL"+i+"' value='"+obj_collect_meth.pass+"'><label for='chk_cal_pay_premium_OL"+i+"' class='label_input2'>"+obj_collect_meth.text+"</label>"+
			"</div>";
		$("#prem_flag_FYP").append(col_callect_meth_FYP);
	}
	
	var col_collect_meth_RYP = "";
	for(i in response.Tab_cal_insurance[0].Collect_Meth){
		var obj_collect_meth_ryp = response.Tab_cal_insurance[0].Collect_Meth[i];
		col_collect_meth_RYP = "<div class='col-sm-4' id='col_collect_meth_RYP"+i+"'>"+
		"<input type='checkbox' name='chk_cal_payRenew_premium_OL[]' id='chk_cal_payRenew_premium_OL"+i+"' value='"+obj_collect_meth_ryp.pass+"'><label for='chk_cal_payRenew_premium_OL"+i+"' class='label_input2'>"+obj_collect_meth_ryp.text+"</label>"+
		"</div>";
		$("#prem_flag_RYP").append(col_collect_meth_RYP);
	}
	
	/*ตารางการคำนวณเบี้ยประกันภัย*/
	var list_Formula7 = "";
	list_Formula7 = "<option value='0'>None</option>";
	for(i in response.Tab_cal_insurance[0].FormulaCatId7){
		var obj = response.Tab_cal_insurance[0].FormulaCatId7[i];
		list_Formula7 += "<option value='"+obj.pass+"'>"+obj.text+"</option>";
	}
	$("#hide_formular7").val(list_Formula7);
	$("#hide_formular7").attr('data-cat',obj.formula_cat_id)
	
	var list_Formula8 = "";
	list_Formula8 = "<option value='0'>None</option>";
	for(i in response.Tab_cal_insurance[0].FormulaCatId8){
		var obj = response.Tab_cal_insurance[0].FormulaCatId8[i];
		list_Formula8 += "<option value='"+obj.pass+"'>"+obj.text+"</option>";
	}
	$("#hide_formular8").val(list_Formula8);
	$("#hide_formular8").attr('data-cat',obj.formula_cat_id)
	
	var list_Formula9 = "";
	list_Formula9 = "<option value='0'>None</option>";
	for(i in response.Tab_cal_insurance[0].FormulaCatId9){
		var obj = response.Tab_cal_insurance[0].FormulaCatId9[i];
		list_Formula9 += "<option value='"+obj.pass+"'>"+obj.text+"</option>";
	}
	$("#hide_formular9").val(list_Formula9);
	$("#hide_formular9").attr('data-cat',obj.formula_cat_id)

}

function show_use_Rights_OL(response){
	var row = "";
	for(i in response.Tab_Use_Rights[0].change_conditions){
		var obj = response.Tab_Use_Rights[0].change_conditions[i];
		var disabled = "";
		var disabled_class = "";
	/*	if(obj.pass == 'PRODUCT'){
			disabled = "disabled";
			disabled_class = "text-muted";
		}else{
			disabled = "";
			disabled_class = "";
		}*/
		row += "<div class='col-sm-6'>"+
			"<input type='checkbox' id='ch_change_condition"+i+"_OL' value='"+obj.pass+"' "+disabled+">"+
			"<label for='ch_change_condition"+i+"_OL' class='control-label-left label_input3 "+disabled_class+"'>"+obj.text+"</label>"+
		"</div>"		
	}
	$("#div_change_condition_OL").append(row)
	
	var sl_cal = "";	
	for (i in response.Tab_Use_Rights[0].expropriation_formula) {
		var obj = response.Tab_Use_Rights[0].expropriation_formula[i];
			sl_cal += "<option value='"+obj.pass+"'>"+obj.text+"</option>";
	}
	$("#hide_sl_cal_OL").val(sl_cal);
}

var sl_calendar_global = "";
function show_term_warranty_OL(response){
	
	$('#main_contract').find('option').clone().appendTo('#sl_contractType_healthInsurance_OL1');
	$('#main_contract').find('option').clone().appendTo('#sl_contractType_oldinsurance_OL1');
	$('#main_contract').find('option').clone().appendTo('#sl_contractType_UWConsider_OL1');
	$('#main_contract').find('option').clone().appendTo('#sl_contractType_insuranceIssue1');
	$('#main_contract').find('option').clone().appendTo('#sl_contractType_insuranceMax1');
	var sl_calendar = "";
	for(i in response.Tab_Warranty_terms[0].calendar){
		var obj = response.Tab_Warranty_terms[0].calendar[i];
			sl_calendar = "<option value='"+obj.pass+"'>"+obj.text+"</option>"
			$("#start_period_insure_unit_ol").append(sl_calendar);
			$("#end_period_insure_unit_ol").append(sl_calendar);
			/*$("#start_period_insure_unit_ol_2").append(sl_calendar);
			$("#end_period_insure_unit_ol_2").append(sl_calendar);*/
			$("#start_age_insure_unit_ol").append(sl_calendar);
			$("#end_age_insure_unit_ol").append(sl_calendar);
			$("#start_paid_insure_unit_ol").append(sl_calendar);
			sl_calendar_global += sl_calendar
	}

	var tb_mode = "";
	for(i in response.Tab_Warranty_terms[0].mode){
		var obj = response.Tab_Warranty_terms[0].mode[i];
			tb_mode = "<tr id='tbody_period_term_OL"+i+"'>"+
						"<td id='imgOK_period_term_OL"+i+"' class='verticalCenter text-center'>" +
								"<input id='mode_period_term"+i+"_ol' type='checkbox' value='"+obj.value+"' onclick='validate_input7_ol();' disabled>" +
						"</td>"+						
						"<td class='text-center'>"+obj.pass+"</td>"+
						"<td class='verticalCenter'>"+obj.text+"</td>"+																								
					"</tr>";
		$("#tbl_modeTerms_OL tbody").append(tb_mode)
		$("#tbl_modeTerms_OL2 tbody").append(tb_mode)
	}
	
	var tb_formula = "";
	for(i in response.Tab_Warranty_terms[0].cal_Age){
		var obj = response.Tab_Warranty_terms[0].cal_Age[i];
			tb_formula = "<tr id='tbody_cal_age_OL"+i+"'>"+
							"<td id='imgOK_cal_age_OL"+i+"' class='verticalCenter text-center'>" +
								"<input id='mode_cal_age"+i+"_ol' name='rd_formula_OL[]' type='radio' value='"+obj.pass+"' onclick='validate_input9_ol();' disabled></td>"+													
							"<td class='verticalCenter'>"+obj.text+"</td>"+																									
						"</tr>"
		$("#tbl_formulaTerms_OL tbody").append(tb_formula);
	}
	
	/*var sl_senior = "<option value='SENIOR'>Senior</option><option value='NONSENIOR'>Non-Senior</option>"
	var lookup_senior = "";
	$("#tbl_health_insurance_OL #sl_senior_healthInsurance1_OL").append(sl_senior);
	$("#tbl_old_insurance_OL #sl_senior_oldinsurance1_OL").append(sl_senior);
	$("#tbl_UW_consider_OL #sl_senior_UWConsider1_OL").append(sl_senior);
	$("#lookup_slSenior_OL").val(sl_senior);*/
	
	var lookup_senior = "";
	for (i in response.Tab_Warranty_terms[0].senior){
		var obj = response.Tab_Warranty_terms[0].senior[i]
		if( obj.text == "None"){
			var text = "All";
		}else{
			var text = obj.text;
		}
			lookup_senior += "<option value='"+obj.pass+"'>"+text+"</option>"
	}
	$("#tbl_health_insurance_OL #sl_senior_healthInsurance_OL1").append(lookup_senior);
	$("#tbl_old_insurance_OL #sl_senior_oldinsurance_OL1").append(lookup_senior);
	$("#tbl_UW_consider_OL #sl_senior_UWConsider_OL1").append(lookup_senior);
	$("#tbl_insuranceIssue_OL #sl_senior_insuranceIssue1").append(lookup_senior);
	$("#tbl_insuranceMax_OL #sl_senior_insuranceMax1").append(lookup_senior);
	
	$("#lookup_slSenior_OL").val(lookup_senior);
	var sl_reInsuranceGroup = "";
	var lookup_reInsuranceGroup = "<option value='NONE'>All</option>";
	for(i in response.Tab_Warranty_terms[0].reinsurance_Group){
		var obj = response.Tab_Warranty_terms[0].reinsurance_Group[i];
			sl_reInsuranceGroup = "<option value='"+obj.pass+"'>"+obj.text+"</option>";
			$("#tbl_health_insurance_OL #sl_Reinsurance_healthInsurance_OL1").append(sl_reInsuranceGroup);
			$("#tbl_old_insurance_OL #sl_Reinsurance_oldinsurance_OL1").append(sl_reInsuranceGroup);
			$("#tbl_UW_consider_OL #sl_Reinsurance_UWConsider_OL1").append(sl_reInsuranceGroup);
			$("#tbl_insuranceIssue_OL #sl_Reinsurance_insuranceIssue1").append(sl_reInsuranceGroup);
			$("#tbl_insuranceMax_OL #sl_Reinsurance_insuranceMax1").append(sl_reInsuranceGroup);
			lookup_reInsuranceGroup += "<option value='"+obj.pass+"'>"+obj.text+"</option>"
	}
	$("#lookup_reinsurance_Group_OL").val(lookup_reInsuranceGroup);
	
	var sl_fillingChannel = "";
	var lookup_fillingChannel = "";
	for(i in response.Tab_Warranty_terms[0].filing_Channel){
		var obj = response.Tab_Warranty_terms[0].filing_Channel[i];
		sl_fillingChannel = "<option value='"+obj.pass+"'>"+obj.text+"</option>";
		$("#tbl_health_insurance_OL #sl_fillingChannel_healthInsurance_OL1").append(sl_fillingChannel);
		$("#tbl_old_insurance_OL #sl_fillingChannel_oldinsurance_OL1").append(sl_fillingChannel);
		$("#tbl_UW_consider_OL #sl_fillingChannel_UWConsider_OL1").append(sl_fillingChannel);
		/*$("#tbl_insuranceIssue_OL #sl_Reinsurance_insuranceIssue1").append(sl_reInsuranceGroup);
		$("#tbl_insuranceMax_OL #sl_Reinsurance_insuranceMax1").append(sl_reInsuranceGroup);*/
		lookup_fillingChannel += "<option value='"+obj.pass+"'>"+obj.text+"</option>"
	}
	$("#lookup_filing_Channel_OL").val(lookup_fillingChannel)
	
	var sl_saleChannel = "";
	var lookup_saleChannel = "";
	for(i in response.Tab_Warranty_terms[0].sale_Channel){
		var obj = response.Tab_Warranty_terms[0].sale_Channel[i];
		sl_saleChannel = "<option data-id='"+obj.value+"' value='"+obj.pass+"'>"+obj.text+"</option>";
		$("#tbl_health_insurance_OL #sl_saleChannel_healthInsurance_OL1").append(sl_saleChannel);
		$("#tbl_old_insurance_OL #sl_saleChannel_oldinsurance_OL1").append(sl_saleChannel);
		$("#tbl_UW_consider_OL #sl_saleChannel_UWConsider_OL1").append(sl_saleChannel);
		$("#tbl_insuranceIssue_OL #sl_saleChannel_insuranceIssue1").append(sl_saleChannel);
		$("#tbl_insuranceMax_OL #sl_saleChannel_insuranceMax1").append(sl_saleChannel);
		lookup_saleChannel += "<option data-id='"+obj.value+"' value='"+obj.pass+"'>"+obj.text+"</option>"
	}
	$("#lookup_sale_Channel_OL").val(lookup_saleChannel);
	
	var sl_unw = "";  
	for(i in response.Tab_Warranty_terms[0].lu_unw_hist_con){
		var obj = response.Tab_Warranty_terms[0].lu_unw_hist_con[i];
		sl_unw = "<option value='"+obj.pass+"'>"+obj.text+"</option>"
		$("#sl_haveCondition_oldCov_OL").append(sl_unw);
		$("#sl_haveCondition_oldCov3_OL").append(sl_unw);
		$("#sl_haveCondition_oldCov5_OL").append(sl_unw);
		$("#sl_haveCondition_IC_OL").append(sl_unw);
		$("#sl_haveCondition_IC3_OL").append(sl_unw);
		$("#sl_haveCondition_IC5_OL").append(sl_unw);
		$("#sl_haveCondition_SubCov_OL").append(sl_unw);
		$("#sl_haveCondition_SubCov3_OL").append(sl_unw);
		$("#sl_haveCondition_SubCov5_OL").append(sl_unw);
	}
	
	var sl_condition = "";
	for(i in response.Tab_Warranty_terms[0].lu_condition){
		var obj = response.Tab_Warranty_terms[0].lu_condition[i];
		sl_condition = "<option value='"+obj.pass+"'>"+obj.text+"</option>"
		$("#sl_haveCondition_oldCov2_OL").append(sl_condition);
		$("#sl_haveCondition_oldCov4_OL").append(sl_condition);
		$("#sl_haveCondition_IC2_OL").append(sl_condition);
		$("#sl_haveCondition_IC4_OL").append(sl_condition);
		$("#sl_haveCondition_SubCov2_OL").append(sl_condition);
		$("#sl_haveCondition_SubCov4_OL").append(sl_condition);
	}
	
	var sl_compare = "";
	for(i in response.Tab_Warranty_terms[0].lu_compare_2){
		var obj = response.Tab_Warranty_terms[0].lu_compare_2[i];
		sl_compare = "<option value='"+obj.pass+"'>"+obj.text+"</option>"
		$("#sl_NewSA_oldCov_OL").append(sl_compare);
		$("#sl_NewSA_IC_OL").append(sl_compare);
		$("#sl_NewSA_Sub_OL").append(sl_compare);
	}
	
	var sl_factor = "";
	for(i in response.Tab_Warranty_terms[0].Fix_cov_factor){
		var obj = response.Tab_Warranty_terms[0].Fix_cov_factor[i];
		sl_factor += "<option value='"+obj.pass+"'>"+obj.text+"</option>"
	}
	$("#lookup_factor_OL").val(sl_factor);
	
	var sl_unit = "";
	for(i in response.Tab_Warranty_terms[0].Fix_cov_unit){
		var obj = response.Tab_Warranty_terms[0].Fix_cov_unit[i];
		sl_unit += "<option value='"+obj.pass+"'>"+obj.text+"</option>"
	}
	$("#lookup_unit_OL").val(sl_unit);
	/*$(".sl-factor").append($("#lookup_factor_OL").val())*/
	$(".sl-unit").append($("#lookup_unit_OL").val())
	
	//unw_hist_rule
	for(i in response.Tab_Warranty_terms[0].unw_hist_rule){
		var obj = response.Tab_Warranty_terms[0].unw_hist_rule[i];
		if( obj.pass == "CLAIM"){
			$("#chk_check_data_OL1").val(obj.pass)
		}else if( obj.pass == "IC"){
			$("#chk_check_data_OL2").val(obj.pass)
		}else if( obj.pass == "SUBSTD"){
			$("#chk_check_data_OL3").val(obj.pass)
		}
	}
	
	/*การตรวจสุขภาพ และการตรวจ Anti-HIV (ตามทุน)*/
	//$("#tbl_health_check_OL tbody>tr").remove()
	var row_id = 1;
	for(i in response.Tab_Warranty_terms[0].Appendix){
		var obj = response.Tab_Warranty_terms[0].Appendix[i];
		row = "<tr>"+
				"<td class='verticalCenter text-center'><input id='rd_health_check_tbl_OL"+row_id+"' name='rd_health_check_OL[]' type='radio' value='"+obj.Appendix_code+"'></td>"+						
				"<td class='verticalCenter text-center'>"+obj.Abb_name+"</td>"+
				"<td class='verticalCenter'>"+obj.Name_th+"</td>"+																								
			"</tr>"
		$("#tbl_health_check_OL tbody").append(row);
		row_id++;
	}
	$("#tbl_health_check_OL").DataTable({"ordering": false,"paging": false,"bInfo" : false, scrollY: '236px',scrollCollapse: true, "autoWidth": false, fixedHeader: {header: true}, "bSearchable":true,"bSort": true,"bFilter": true,"oLanguage": {"sSearch": "ค้นหา: "}});
	$("#tbl_health_check_OL_wrapper .dataTables_scrollHeadInner table").css({"display":""});
	$("#tbl_health_check_OL_wrapper .dataTables_scrollBody table").css({"display":""});
	$("#tbl_health_check_OL_wrapper .dataTables_scrollHeadInner").css({"width":"100%"});
	$("#tbl_health_check_OL_wrapper .table").css({"width":"100%"});

	/*substd_type*/
	var row_id = 1;
	for(i in response.Tab_Warranty_terms[0].unw_substd_type){
		var obj = response.Tab_Warranty_terms[0].unw_substd_type[i];
		row = "<div class='col-sm-3 style_col_width20'>"+
				"<input type='checkbox' name='chk_increase_premium_yes_OL[]' id='chk_increase_premium_yes_OL"+row_id+"' value='"+obj.pass+"' checked>" +
				"<label for='chk_increase_premium_yes_OL"+row_id+"' class='label_input2'>"+obj.text+"</label>"+
			"</div>"
		$("#div_chk_increase_premium_OL").append(row);
		row_id++;
	}
	
	var col_callect_meth_FYP = "";
	for(i in response.Tab_cal_insurance[0].Collect_Meth){
		var obj_collect_meth = response.Tab_cal_insurance[0].Collect_Meth[i];
		col_callect_meth_FYP = "<div class='col-sm-4' id='col_collect_meth_FYP"+i+"'>"+
			"<input type='checkbox' name='chk_first_pay_premium_OL[]' id='chk_first_pay_premium_OL"+i+"' value='"+obj_collect_meth.pass+"' onclick='set_ratePayment(1)'>" +
					"<label for='chk_first_pay_premium_OL"+i+"' class='label_input2'>"+obj_collect_meth.text+"</label>"+
			"</div>";
	
		$("#collect_meth_FYP_OL").append(col_callect_meth_FYP);
	}
	
	var col_callect_meth_RYP = "";
	for(i in response.Tab_cal_insurance[0].Collect_Meth){
		var obj_collect_meth = response.Tab_cal_insurance[0].Collect_Meth[i];
		col_callect_meth_RYP = "<div class='col-sm-4' id='col_collect_meth_RYP"+i+"'>"+
			"<input type='checkbox' name='chk_next_pay_premium_OL[]' id='chk_next_pay_premium_OL"+i+"' value='"+obj_collect_meth.pass+"' onclick='set_ratePayment(2)'>" +
					"<label for='chk_next_pay_premium_OL"+i+"' class='label_input2'>"+obj_collect_meth.text+"</label>"+
			"</div>";
	
		$("#collect_meth_RYP_OL").append(col_callect_meth_RYP);
	}
	
	/*การซื้อสัญญาแนบท้ายควบ - ซื้อตามจำนวนเงินเอาประกันภัย*/
	var row_rider_amount = "";
	var row_rider_insure = "";
	for( i in response.Tab_Warranty_terms[0].list_uwnRider){
		var obj_rider = response.Tab_Warranty_terms[0].list_uwnRider[i];
		if(obj_rider.cov_code != undefined){
			row_rider_amount += "<tr id='tr_contractAmount_OL"+i+"'>"+	
				"<td class='text-center'>"+
				"<input type='hidden' id='riderAmount_cov_cat_id_"+i+"' value='"+obj_rider.cov_cat_id+"'/>"+
				"<input type='hidden' id='riderAmount_prd_code_rider_"+i+"' value='"+obj_rider.prd_rider_code+"'/>"+
				"<input type='hidden' id='riderAmount_biz_code_"+i+"' value='"+obj_rider.biz_code+"'/>"+
				"<input type='checkbox' id='imgOK_contractAmount_OL"+i+"' value='"+obj_rider.cov_code+"' " +
						"onclick=\"add_coverageRider_OL(this,'"+obj_rider.cov_code+"','"+obj_rider.name_th+"','"+obj_rider.cov_cat_id+"','"+obj_rider.prd_rider_code+"','"+obj_rider.biz_code+"','SA_ONLY');\"/>"+
				"</td>"+
				"<td>"+obj_rider.prd_rider_code+"</td>"+
				"<td>"+obj_rider.name_th+"</td>"+
			"</tr>"
			row_rider_insure += "<tr id='tr_contractInsure_OL"+i+"'>"+	
					"<td class='text-center'>"+
						"<input type='hidden' id='riderInsure_cov_cat_id_"+i+"' value='"+obj_rider.cov_cat_id+"'/>"+
						"<input type='hidden' id='riderInsure_prd_code_rider_"+i+"' value='"+obj_rider.prd_rider_code+"'/>"+
						"<input type='hidden' id='riderInsure_biz_code_"+i+"' value='"+obj_rider.biz_code+"'/>"+
						"<input type='checkbox' id='imgOK_contractInsure_OL"+i+"' value='"+obj_rider.cov_code+"' "+
								"onclick=\"add_coverageRider_OL(this,'"+obj_rider.cov_code+"','"+obj_rider.name_th+"','"+obj_rider.cov_cat_id+"','"+obj_rider.prd_rider_code+"','"+obj_rider.biz_code+"','PREM_ONLY');\"/>"+
					"</td>"+
					"<td>"+obj_rider.prd_rider_code+"</td>"+
					"<td>"+obj_rider.name_th+"</td>"+
				"</tr>"
		}
		
	}
	$("#tbl_contractAmount_OL tbody").append(row_rider_amount)
	$("#tbl_contractInsure_OL tbody").append(row_rider_insure)
	$("#tbl_contractAmount_OL,#tbl_contractInsure_OL").DataTable({"ordering": false,"paging": false,"bInfo" : false, scrollY: '236px',scrollX: '400px',scrollCollapse: true, "oLanguage": {"sSearch": "ค้นหา: "}});
	$("#tbl_contractAmount_OL_wrapper .dataTables_scrollHeadInner").css({"width":"100%"});
	$("#tbl_contractAmount_OL_wrapper .table").css({"width":"100%"});
	$("#tbl_contractAmount_OL_wrapper .dataTables_filter").find('input[type="search"]').css({"width":"70%"});
	$("#tbl_contractInsure_OL_wrapper .dataTables_scrollHeadInner").css({"width":"100%"});
	$("#tbl_contractInsure_OL_wrapper .table").css({"width":"100%"});
	$("#tbl_contractInsure_OL_wrapper .dataTables_filter").find('input[type="search"]').css({"width":"70%"});
	
	
	/*ซื้อคู่กับแบบ*/
	var row = "";
	$("#tbl_chooseBuyWith1_OL tbody>tr").remove();
	$("#tbl_chooseBuyWith2_OL tbody>tr").remove();
	$("#tbl_chooseBuyWith3_OL tbody>tr").remove();
	for(i in response.Tab_Warranty_terms[0].ProductBuyWith){
		var obj = response.Tab_Warranty_terms[0].ProductBuyWith[i];
		
		row += "<tr>"+
				"<td class='verticalCenter text-center' id='imgOK1_buyWith"+i+"' onclick='imgCheckbox(this.id);'>"+
					"<input type='hidden' id='prd_code' value='"+obj.Prd_code+"'>"+
					"<i class='glyphicon glyphicon-edit'></i>"+
				"</td>"+
				"<td class='verticalCenter text-left'><label>"+obj.Prd_code+"</label></td>"+
				"<td class='verticalCenter text-left'><a>"+obj.Core_biz_prd_code+"</a></td>"+
			"</tr>"
	}
	
	$("#tbl_chooseBuyWith1_OL tbody").append(row)
	$("#tbl_chooseBuyWith2_OL tbody").append(row)
	$("#tbl_chooseBuyWith3_OL tbody").append(row)
	
	
	 if ( $.fn.dataTable.isDataTable( "#tbl_chooseBuyWith1_OL" ) ) {
    	  var table = $("#tbl_chooseBuyWith1_OL").DataTable();
    	  table.destroy();  
      }
	$("#tbl_chooseBuyWith1_OL").DataTable({"ordering": false,"paging": false,"bInfo" : false, scrollY: '236px',scrollCollapse: true, "autoWidth": false, fixedHeader: {header: true},"oLanguage": {"sSearch": "ค้นหา: "}});
	$("#tbl_chooseBuyWith1_OL_wrapper .dataTables_scrollHeadInner").css({"width":"100%"});
	$("#tbl_chooseBuyWith1_OL_wrapper .table").css({"width":"100%"});
	if ( $.fn.dataTable.isDataTable( "#tbl_chooseBuyWith2_OL" ) ) {
    	  var table = $("#tbl_chooseBuyWith2_OL").DataTable();
    	  table.destroy();  
      }
	$("#tbl_chooseBuyWith2_OL").DataTable({"ordering": false,"paging": false,"bInfo" : false, scrollY: '236px',scrollCollapse: true, "autoWidth": false, fixedHeader: {header: true},"oLanguage": {"sSearch": "ค้นหา: "}});
	$("#tbl_chooseBuyWith2_OL_wrapper .dataTables_scrollHeadInner").css({"width":"100%"});
	$("#tbl_chooseBuyWith2_OL_wrapper .table").css({"width":"100%"});
	if ( $.fn.dataTable.isDataTable( "#tbl_chooseBuyWith3_OL" ) ) {
    	  var table = $("#tbl_chooseBuyWith3_OL").DataTable();
    	  table.destroy();  
      }
	$("#tbl_chooseBuyWith3_OL").DataTable({"ordering": false,"paging": false,"bInfo" : false, scrollY: '236px',scrollCollapse: true, "autoWidth": false, fixedHeader: {header: true},"oLanguage": {"sSearch": "ค้นหา: "}});
	$("#tbl_chooseBuyWith3_OL_wrapper .dataTables_scrollHeadInner").css({"width":"100%"});
	$("#tbl_chooseBuyWith3_OL_wrapper .table").css({"width":"100%"});
	
	
}
function show_sale_benefits_OL(response){
	var arr_mode = [];
	for (i in response.Tab_Basic_Information[0].mode) {
		var obj_PDMode = response.Tab_Basic_Information[0].mode[i];
		arr_mode.push(obj_PDMode.value);
		arr_mode.push(obj_PDMode.pass);
		arr_mode.push(obj_PDMode.text);	
	}
	$("#lookup_bnf_mode_OL").val(arr_mode);
}
/************************************* END LOOKUP ********************************************************/
/**************************************  SAVE  *********************************************************/
function datasave_BasicInformation_OL(){
	
	/*base plan*/
	var baseplan = [];
	$("#tb_PM_Rate_OL tbody>tr").each(function(){
		if($(this).data('level') == 1){		// 1 คือ แม่
			obj = {};
			obj["primary"] = true
			obj["cov_code"] = $(this).find('td:nth-child(1) label').text();
			obj["cov_cat_id"] = $(this).find('td:nth-child(1) #cov_cat_id_base_PM').val();
			obj["prd_rider_code"] = $(this).find('td:nth-child(1) #prd_code_base_PM').val();
			obj["name_th"] = $(this).find('td:nth-child(2) label').text();
			obj["pm_rate_fileId"] = $(this).find('td:nth-child(4) #fileId_base_PM').val();
			obj["pm_rate_cat_id"] = $(this).find('td:nth-child(4) #rate_cat_id_base_PM').val();
			obj["pm_rate_layout_id"] = $(this).find('td:nth-child(4) #rate_layout_id_base_PM').val();
			obj["pm_rate"] = $(this).find('td:nth-child(4) input[type="text"]').val();
			obj["fix_amt"] = replaceComma($(this).find('td:nth-child(7) input[type="text"]').val());
			obj["nar_fileId"] = $(this).find('td:nth-child(8) #fileId_base_NAR_OL').val();
			obj["nar_cat_id"] = $(this).find('td:nth-child(8) #rate_cat_id_base_NAR_OL').val();
			obj["nar_layout_id"] = $(this).find('td:nth-child(8) #rate_layout_id_base_NAR_OL').val();
			obj["nar"] = $(this).find('td:nth-child(8) input[type="text"]').val();
		}else{
			obj = {};
			obj["primary"] = false
			obj["cov_code"] = $(this).find('td:nth-child(1) label').text();
			obj["cov_cat_id"] = $(this).find('td:nth-child(1) #cov_cat_id_base_PM').val();
			obj["prd_rider_code"] = $(this).find('td:nth-child(1) #prd_code_base_PM').val();
			obj["name_th"] = $(this).find('td:nth-child(2) label').text();
			obj["pm_rate_fileId"] = $(this).find('td:nth-child(4) #fileId_base_PM').val();
			obj["pm_rate_cat_id"] = $(this).find('td:nth-child(4) #rate_cat_id_base_PM').val();
			obj["pm_rate_layout_id"] = $(this).find('td:nth-child(4) #rate_layout_id_base_PM').val();
			obj["pm_rate"] = $(this).find('td:nth-child(4) input[type="text"]').val();
			obj["fix_amt"] = "";
			obj["nar_fileId"] = "";
			obj["nar_cat_id"] = "";
			obj["nar_layout_id"] = "";
			obj["nar"] = "";
		}
		baseplan.push(obj);
	});
	
	/*rider*/
	var rider = [];
	$("#tb_Additional_contract_OL tbody>tr").each(function(i){
		var chk_parent = $(this).data('level');
		if(chk_parent == 1){
			var dataId = $(this).attr('id');
			dataId = dataId.replace("tr_Additional_contract_","");
		obj = {};
		var prd_design = $(this).find('td:nth-child(2) input[type="hidden"]').val();
		if(prd_design == null || prd_design == ""){
			obj["prd_design"] = $(this).find('td:nth-child(2) option:selected').val();
		}else{
			obj["prd_design"] = $(this).find('td:nth-child(2) input[type="hidden"]').val();
		}
		obj["prd_rider_code"] = $(this).find('td:nth-child(3) input[type="hidden"]').val();
		obj["cov_code"] = $(this).find('td:nth-child(3) label').text();
		obj["cov_cat_id"] = $(this).find('td:nth-child(4) input[type="hidden"]').val();
		obj["name_th"] = $(this).find('td:nth-child(5) label').text();
		obj["pm_fileId"] = "";
		obj["pm_rate_cat_id"] = "";
		obj["pm_rate_layout_id"] = "";
		obj["pm_rate"] = "";
		//obj["pm_fileId"] = $(this).find("td:nth-child(7) #fileId_rider_PM"+dataId+"").val();
		//obj["pm_rate_cat_id"] = $(this).find("td:nth-child(7) #rate_cat_id_rider_PM"+dataId+"").val();
		//obj["pm_rate_layout_id"] = $(this).find("td:nth-child(7) #rate_layout_id_rider_PM"+dataId+"").val();
		//obj["pm_rate"] = $(this).find('td:nth-child(7) input[type="text"]').val();
		rider.push(obj);
		}
		
		/*if(chk_parent == 2){		//2 คือลูก
			var dataId = $(this).attr('id');
				dataId = dataId.replace("tr_Additional_contract_","");
			obj = {};
			var prd_design = $(this).find('td:nth-child(2) input[type="hidden"]').val();
			if(prd_design == null || prd_design == ""){
				obj["prd_design"] = $(this).find('td:nth-child(2) option:selected').val();
			}else{
				obj["prd_design"] = $(this).find('td:nth-child(2) input[type="hidden"]').val();
			}
			obj["prd_rider_code"] = $(this).find('td:nth-child(3) input[type="hidden"]').val();
			obj["cov_code"] = $(this).find('td:nth-child(3) label').text();
			obj["cov_cat_id"] = $(this).find('td:nth-child(4) input[type="hidden"]').val();
			obj["name_th"] = $(this).find('td:nth-child(5) label').text();
			obj["pm_fileId"] = $(this).find("td:nth-child(7) #fileId_rider_PM"+dataId+"").val();
			obj["pm_rate_cat_id"] = $(this).find("td:nth-child(7) #rate_cat_id_rider_PM"+dataId+"").val();
			obj["pm_rate_layout_id"] = $(this).find("td:nth-child(7) #rate_layout_id_rider_PM"+dataId+"").val();
			obj["pm_rate"] = $(this).find('td:nth-child(7) input[type="text"]').val();
			rider.push(obj);
		}else{
			var dataId = $(this).attr('id');
				dataId = dataId.replace("tr_Additional_contract_","");
			obj = {};
			var prd_design = $(this).find('td:nth-child(2) input[type="hidden"]').val();
			if(prd_design == null || prd_design == ""){
				obj["prd_design"] = $(this).find('td:nth-child(2) option:selected').val();
			}else{
				obj["prd_design"] = $(this).find('td:nth-child(2) input[type="hidden"]').val();
			}
			obj["prd_rider_code"] = $(this).find('td:nth-child(3) input[type="hidden"]').val();
			obj["cov_code"] = $(this).find('td:nth-child(3) label').text();
			obj["cov_cat_id"] = $(this).find('td:nth-child(4) input[type="hidden"]').val();
			//obj["cov_cat_type"] = $(this).find('td:nth-child(4)').text();
			obj["name_th"] = $(this).find('td:nth-child(5) label').text();
			obj["pm_fileId"] = $(this).find("td:nth-child(7) #fileId_rider_PM"+dataId+"").val();
			obj["pm_rate_cat_id"] = $(this).find("td:nth-child(7) #rate_cat_id_rider_PM"+dataId+"").val();
			obj["pm_rate_layout_id"] = $(this).find("td:nth-child(7) #rate_layout_id_rider_PM"+dataId+"").val();
			obj["pm_rate"] = $(this).find('td:nth-child(7) input[type="text"]').val();
			rider.push(obj);
		}*/
	});
	
	/*การกำหนดบันทึกสลักหลังและพิกัดอายุ*/
	var define_endorse = [];
	$("#tb_ageRange_OL tbody>tr").each(function(){
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
	if($("#chk_sex_BP1_OL").is(':checked') && $("#chk_sex_BP2_OL").is(':checked')){
		gender = "EITHER";
	}else if($("#chk_sex_BP2_OL").is(':checked')){
		gender = "FEMALE";
	}else if($("#chk_sex_BP1_OL").is(':checked')){
		gender = "MALE";
	}else{
		gender = "NONE";
	}
	
	//การส่ง Reinsurance
	var reinsurance_opt = "NONE";
	if($("#rd_reinsure_OL1").is(':checked')){
		reinsurance_opt = $("#lb_reinsure_OL option:selected").val();
	}
	
	var json_data_BasicInfo = {
        	"method": "Tab_Basic_Information",
            "prd_code": $("#pass_Insurance_product_ol").val(),
            "core_biz_prd_code": $("#key_Insurance_product_ol").val(),
            "name_th": $("#th_Name_ol").val(),
            "name_en": $("#en_Name_ol").val(),
            "market_name_th": $("#th_marketingName_ol").val(),
            "market_name_en": $("#en_marketingName_ol").val(),
            "base_plan": JSON.stringify(baseplan),
            "rider": JSON.stringify(rider),
            "define_endorse" : JSON.stringify(define_endorse),
            "gender": gender,
            "fyp_credit_card": $("#lb_credit_firstYear_OL").val(),
            "ryp_credit_card": $("#lb_credit_nextYear_OL").val(),
            "reinsure_group": $("#lb_reinsurance_OL").val(),
            "distribution_channel": $("#lb_distribution_OL").val(),
            "sale_channel": $("#lb_saleChannel_OL option:selected").data('id'),
            "sale_partner_code": $("#lb_partner_OL option:selected").data('id'),
            "is_fin_acc": $("#chk_finance_PB_OL").is(':checked'),
            "is_insurance": $("#chk_insurance_contract_OL").is(':checked'),
            "score_aml": $("#lb_AML_CFT_OL").val(),
            "reinsurance_opt" : reinsurance_opt,
            "par_product": $("#sel_Par_Product_OL option:selected").val(),
            "fighting_product": $("#sel_Fighting_Product_OL option:selected").val(),
            "groupName" : $("#groupName").val()
	} 
	
	$("#code_Coverage_OL").val($("#pass_Insurance_product_ol").val());
	$("#approve_nameTH_OL").val($("#th_Name_ol").val());
	$("#approve_nameEN_OL").val($("#th_marketingName_ol").val());
	
	$.ajax({
		url: 'ProductBasePlanOL_SaveData_Servlet',
		type: "POST",
		data: json_data_BasicInfo,
		async: false,
		success: function (response) {
			var cov_status_PD = $("#cov_status_PD").val();
			var cov_status_UW = $("#cov_status").val();
			
			if (response == "success"){
				
				//enable tab
	    		 $("#menu_OL_3").removeClass("disabledAll");
	    		 $("#menu_OL_2").removeClass("disabledAll");
	    		 $("#menu_OL_4").removeClass("disabledAll");
	    		 $("#menu_OL_5").removeClass("disabledAll");
	    		 $("#menu_OL_7").removeClass("disabledAll");
	    		 $("#menu_OL_6").removeClass("disabledAll");
				
				if((cov_status_PD == "NEW" && cov_status_UW == "NEW") || (cov_status_PD == "" && cov_status_UW == "")){
					console.log("save>> "+response);
					
					var flag = $("#flag_email_send_OL").val();
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
						
						objEmail["cov_code"] 			=$("#pass_Insurance_product_ol").val();
						objEmail["name_TH"] 			=$("#th_Name_ol").val();
						objEmail["name_EN"] 			=$("#en_Name_ol").val();
						
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
	console.log(json_data_BasicInfo);
}

/*2. การคำนวณเบี้ยประกัน*/
function datasave_calInsurance_OL(){
	
	/*การคำนวณจำนวนเงินเอาประกันภัย*/
	var coverage_limit = [];
	$("#tb_Calculate_insurance_OL tbody>tr").each(function(i){		
		var level = $(this).attr("data-level");
		obj = {};
		obj["seq"] = $(this).find("td:nth-child(1) #seq_OL").val();

		if(level == 1){
			obj["cov_code"] = $(this).find("td:nth-child(1) label").text();	
		}else if(level == 2){
			obj["cov_code"] = $(this).find("td:nth-child(1) #cov_code_OL").val();	
		}
		
		obj["prd_rider_code"] = $(this).find("td:nth-child(1) #prd_rider_code_OL").val();
		obj["serie_no"] = $(this).find("td:nth-child(1) #serie_no_OL").val();
		obj["type"] = $(this).find("td:nth-child(1) #type_OL").val();
		obj["capital_to"] = replaceComma($(this).find('td:nth-child(4) input').val());
		obj["capital_from"] = replaceComma($(this).find('td:nth-child(5) input').val());
		obj["cash_insurance_no"] = replaceComma($(this).find('td:nth-child(6) input').val());
		obj["cash_insurance_unit"] = $(this).find('td:nth-child(7) select').val();
		obj["cash_insurance_factor"] = $(this).find('td:nth-child(8) select').val();
		obj["cash_low_val"] = replaceComma($(this).find('td:nth-child(9) input').val());
		obj["cash_low_unit"] = $(this).find('td:nth-child(10) select').val();
		obj["insure_low_val"] = replaceComma($(this).find('td:nth-child(11) input').val());
		obj["insure_low_unit"] = $(this).find('td:nth-child(12) select').val();
		
		coverage_limit.push(obj);
	});
	
	/*การคำนวณเบี้ยประกันภัย*/
	var cal_insurance = [];
	$("#tb_Calculate_insurance2_OL tbody>tr").each(function(){
		obj = {};
		obj["cov_code"] = $(this).find("td:nth-child(1) #cov_code_OL").val();
		obj["prd_code"] = $(this).find("td:nth-child(1) #prd_rider_code_OL").val();
		obj["type"] = $(this).find("td:nth-child(2) label").text();
		obj["formula"] = $(this).find('td:nth-child(3) select').val();
		obj["prd_rider_code"] = $(this).find("td:nth-child(1) #prd_rider_code_OL").val();
		//
		cal_insurance.push(obj);
	})
	
	var json_data = {
			"method": "Tab_CalInsurance_Premium",
			"prd_code": $("#pass_Insurance_product_ol").val(),
	        "age_band": $("#lb_age_specific_OL option:selected").val(),
			"coverage_limit" : JSON.stringify(coverage_limit),
			"cal_insurance" : JSON.stringify(cal_insurance),
			"groupName" : $("#groupName").val()	
		}
		
		$.ajax({
			url: 'ProductBasePlanOL_SaveData_Servlet',
			type: "POST",
			data: json_data,
			async: false,
			success: function (response) {
			
			}
		});
		console.log("data",json_data);
}

/*3. การใช้สิทธิ์ตามกรมธรรม์*/
function datasave_useRightInsurance_OL(){
	//save tab use right
	var change_type = [];
	$("#div_change_condition_OL input[type='checkbox']:checked").each(function(){
		var obj = {};
		obj["type"] = $(this).val()
		change_type.push(obj)
	})
	
	/*var change_type = [];
	var obj = {};
	if($("#ch_change_condition1_OL").is(":checked")){
		obj["type"] = $("#ch_change_condition1_OL").val();
		change_type.push(obj)
	}else{
		obj["type"] = "";
		change_type.push(obj)
	}
	var obj = {};
	if($("#ch_change_condition2_OL").is(":checked")){
		obj["type"] = $("#ch_change_condition2_OL").val();
		change_type.push(obj)
	}else{
		obj["type"] = "";
		change_type.push(obj)
	}
	var obj = {};
	if($("#ch_change_condition3_OL").is(":checked")){
		obj["type"] = $("#ch_change_condition3_OL").val();
		change_type.push(obj)
	}else{
		obj["type"] = "";
		change_type.push(obj)
	}
	var obj = {};
	if($("#ch_change_condition4_OL").is(":checked")){
		obj["type"] = $("#ch_change_condition4_OL").val();
		change_type.push(obj)
	}else{
		obj["type"] = "";
		change_type.push(obj)
	}*/
	
	var policy_surrender = [];
	$("#tb_policyholder_OL tbody>tr").each(function(){
		obj = {};
		obj["cov_code"] = $(this).find('td:nth-child(1) label').text();
		obj["prd_rider_code"] = $(this).find('td:nth-child(1) #prd_rider_code').val();
		obj["tb_policyValue"] = $(this).find('td:nth-child(2) label').text();
		obj["tb_CV"] = $(this).find('td:nth-child(2) label').text();
		obj["rate_cat_id"] = $(this).find('td:nth-child(3) #rate_cat_id_tb_useRight').val();
		obj["rate_layout_id"] = $(this).find('td:nth-child(3) #rate_layout_id_tb_useRight').val();
		obj["file_id"] = $(this).find('td:nth-child(3) #file_id_tb_useRight').val();
		obj["formula"] = $(this).find('td:nth-child(4) select').val();
		policy_surrender.push(obj);
	});
	
	var json_data = {
			"method" : "Tab_Grant_Rights",
			"change_type" : JSON.stringify(change_type),
			"prd_code": $("#pass_Insurance_product_ol").val(),
			"Policy_surrender" : JSON.stringify(policy_surrender),
			"groupName" : $("#groupName").val()
	}
	
	
	$.ajax({
		url: 'ProductBasePlanOL_SaveData_Servlet',
		type: "POST",
		data: json_data,
		async: false,
		success: function (response) {
		
		}
		});
		
	console.log("JSON_Data ",json_data)
}


/*4. ผลประโยชน์การขาย*/
function datasave_saleBenefit_OL(){
	var sale_benefit1 = [];
	var sale_benefit2 = [];
	var model = false;
	
	if($("#rd_SaleCondition_OL1").prop("checked") == true){
		//แบบปกติ
		model = true;
		$("#tbl_SaleBenefitNormal_OL tbody>tr").each(function(i){		
			var level = $(this).attr("data-level");
			var is_base = false;
		    //var is_base_main = $("#tbl_SaleBenefitNormal_OL tbody>tr:first-child").find("td:nth-child(1) input:checkbox").prop("checked");
			var serie = "";
			var type = $(this).find("td:nth-child(1) #cov_type_OL").val();
			var parent = "";
			obj = {};
			
			if(level == 1){
				serie = 1;
			}else{
				serie = "";
				parent = $(this).attr("data-parent");
			}
			
			if(type == "B"){
				is_base = false;
			}else{
				if(level == 1){
					is_base = $(this).find("td:nth-child(2) input").prop("checked");
				}else{
					is_base = $("#tr_saleBnf"+parent).find("td:nth-child(2) input").prop("checked");
				}
				
			}
			
			obj["is_ref_base"] = is_base;
			obj["cov_code"] = $(this).find("td:nth-child(1) #prd_rider_code_OL").val();
			obj["seq"] = Number($(this).find("td:nth-child(1) #seq_OL").val());
			obj["eff_data"] = $(this).find("td:nth-child(5) input").val();
			obj["exp_data"] = $(this).find("td:nth-child(6) input").val();
			obj["serie_no"] = serie;

			obj["year1"] = $(this).find('td:nth-child(7) input').val();
			obj["year2"] = $(this).find('td:nth-child(8) input').val();
			obj["year3"] = $(this).find('td:nth-child(9) input').val();
			obj["year4"] = $(this).find('td:nth-child(10) input').val();
			obj["credit"] = $(this).find('td:nth-child(11) input').val();
			obj["overrid"] = $(this).find('td:nth-child(12) input').val();
			obj["advance"] = $(this).find('td:nth-child(13) input').val();
			obj["mkt_Inc"] = $(this).find('td:nth-child(14) input').val();
			obj["saleValume"] = $(this).find('td:nth-child(15) input').val();
			obj["mkt_Exp"] = $(this).find('td:nth-child(16) input').val();
			
			sale_benefit2.push(obj);
		});
	}else{
		//แบบมีเงื่อนไข
		model = false;
		
		if($("#panel_SaleBenefit_OL3").css("display") == "block"){
			$("#tbl_SaleBenefit_OL tbody>tr").each(function(i){		
				var level = $(this).attr("data-level");
				var is_base = false;
			    //var is_base_main = $("#tbl_SaleBenefitNormal_OL tbody>tr:first-child").find("td:nth-child(1) input:checkbox").prop("checked");
				var serie = "";
				var type = $(this).find("td:nth-child(1) #cov_type_cond_OL").val();
				var parent = "";
				
				obj = {};
				
				if(level == 1){
					serie = $(this).find("td:nth-child(1) #serie_cond_OL").val();
				}else{
					serie = $(this).find("td:nth-child(1) #serie_cond_OL").val();
					parent = $(this).attr("data-parent");
				}
				
				if(type == "B"){
					is_base = false;
				}else{
					if(level == 1){
						is_base = $(this).find("td:nth-child(2) input").prop("checked");
					}else{
						is_base = $("#tr_saleBnf_cond"+parent).find("td:nth-child(2) input").prop("checked");
					}
				}
				
				obj["is_ref_base"] = is_base;
				obj["cov_code"] = $(this).find("td:nth-child(1) #prd_rider_code_cond_OL").val();
				obj["seq"] = Number($(this).find("td:nth-child(1) #seq_cond_OL").val());
				obj["eff_data"] = $(this).find("td:nth-child(5) input").val();
				obj["exp_data"] = $(this).find("td:nth-child(6) input").val();
				obj["serie_no"] = Number(serie);

				obj["year1"] = $(this).find('td:nth-child(7) input').val();
				obj["year2"] = $(this).find('td:nth-child(8) input').val();
				obj["year3"] = $(this).find('td:nth-child(9) input').val();
				obj["year4"] = $(this).find('td:nth-child(10) input').val();
				obj["credit"] = $(this).find('td:nth-child(11) input').val();
				obj["overrid"] = $(this).find('td:nth-child(12) input').val();
				obj["advance"] = $(this).find('td:nth-child(13) input').val();
				obj["mkt_Inc"] = $(this).find('td:nth-child(14) input').val();
				obj["saleValume"] = $(this).find('td:nth-child(15) input').val();
				obj["mkt_Exp"] = $(this).find('td:nth-child(16) input').val();
				
				sale_benefit2.push(obj);
			});
		}
		
		//Series
		$("#tbl_seriesCondition_OL tbody>tr").each(function(){
			var this_id = $(this).attr("data-id");
			var gender = $("#lb_gender"+this_id).text();
			var gender_text = "";
			if(gender == "ชาย"){
				gender_text = "MALE";
			}else if(gender == "หญิง"){
				gender_text = "FEMALE";
			}
			
			var min_sum = $(this).find("#lb_sum_from"+this_id+"").text();
			if(min_sum == ""){
				min_sum = "";
			}else{
				min_sum = Math.round10(min_sum.replace(/,/g, ""), -4);
			}
			
			var max_sum = $(this).find("#lb_sum_to"+this_id+"").text();
			if(max_sum == ""){
				max_sum = "";
			}else{
				max_sum = Math.round10(max_sum.replace(/,/g, ""), -4);
			}
			
			var mode_value = "";
			if($("#ch_select_condition1_OL").prop("checked") == false){
				mode_value = "";
			}else{
				mode_value = $(this).find("#hdd_mode_value"+this_id+"").val();
			}
			
			var min_age_value = "";
			if($("#ch_select_condition2_OL").prop("checked") == false){
				min_age_value = "";
			}else{
				min_age_value = $(this).find("#lb_age_from"+this_id+"").text();
			}
			
			var max_age_value = "";
			if($("#ch_select_condition2_OL").prop("checked") == false){
				max_age_value = "";
			}else{
				max_age_value = $(this).find("#lb_age_to"+this_id+"").text();
			}
			
			var min_period_value = "";
			if($("#ch_select_condition4_OL").prop("checked") == false){
				min_period_value = "";
			}else{
				min_period_value = $(this).find("#lb_period_from"+this_id+"").text();
			}
			
			var max_period_value = "";
			if($("#ch_select_condition4_OL").prop("checked") == false){
				max_period_value = "";
			}else{
				max_period_value = $(this).find("#lb_period_to"+this_id+"").text();
			}
			
			obj = {};
			obj["serie_no"] = this_id;
			obj["gender"] = gender_text;
			obj["mode"] = mode_value;
			obj["min_age"] = min_age_value;
			obj["max_age"] = max_age_value;
			obj["min_sum"] =  min_sum;
			obj["max_sum"] =  max_sum;
			obj["min_period"] = min_period_value;
			obj["max_period"] = max_period_value;
			
			sale_benefit1.push(obj);
		});
	}
	

	var json_data = {
			"method": "Tab_Sales_Benefits",
			"prd_code": $("#pass_Insurance_product_ol").val(),
			"model" : model,
			"sale_benefit1" : JSON.stringify(sale_benefit1),
			"sale_benefit2" : JSON.stringify(sale_benefit2),
			"groupName" : $("#groupName").val()	
		}
		
		$.ajax({
			url: 'ProductBasePlanOL_SaveData_Servlet',
			type: "POST",
			data: json_data,
			async: false,
			success: function (response) {
			
			}
		});
		console.log("data",json_data);
}

/*5. ข้อกำหนดการรับประกัน*/
function datasave_warrantyTerms_OL(){
	
	var product = [];
	obj = {};
//	obj["first_beneficiary"] = first_beneficiary;
//	obj["min_period"] = $("#start_period_insure_cl").val();
//	obj["min_period_unit"] = $("#start_period_insure_unit_cl option:selected").val();
//	obj["max_period"] = $("#end_period_insure_cl").val();
//	obj["max_period_unit"] = $("#end_period_insure_unit_cl option:selected").val();
//	obj["max_insure_age"] = $("#max_period_insure_cl").val();
//	obj["max_insure_age_unit"] = "YEAR"; 	//FIXME HARD CODE
	obj["sale_eff_date"] = $("#menu_term1_datefrom_ol").val();
	obj["sale_exp_date"] = $("#menu_term1_dateto_ol").val();
	obj["sys_eff_date"] = $("#system_date_ol").val();
//	obj["master_policy"] = $("#master_policy_cl").val()
	obj["is_flp_fee"] = $("#deduct_cost_OL").is(":checked");
	if($("#amount_free_look_OL").val() == ""){
		obj["flp_day"] = 0;
	}else{
		obj["flp_day"] = $("#amount_free_look_OL").val();
	}
	obj["is_flp"] = $("#chk_free_look_OL").is(":checked");
	product.push(obj)
	
	var age_calc_meth = "";
	$("#tbl_formulaTerms_OL tbody>tr").each(function(){
		if($(this).find('td:nth-child(1) input[type="radio"]').is(":checked")){
			age_calc_meth = $(this).find('td:nth-child(1) input[type="radio"]').val();
		}
	})
	var participant = [];
	obj = {};
	obj["min_issue_age"] = $("#start_age_insure_ol").val();
	obj["min_issue_age_unit"] = $("#start_age_insure_unit_ol option:selected").val();
	obj["max_issue_age"] = $("#end_age_insure_ol").val();
	obj["max_issue_age_unit"] = $("#end_age_insure_unit_ol").val();
//	obj["max_insure_age"] = $("#max_age_insure_cl").val();
//	obj["max_insure_age_unit"] = "YEAR";		//FIXME HARD CODE
	obj["age_calc_meth"] = age_calc_meth
	participant.push(obj)
	
	var mode = [];
	/*if(!$("#tbl_modeTerms_OL").hasClass('disabledAll') && $("#tbl_modeTerms_OL2").hasClass('disabledAll')){
		$("#tbl_modeTerms_OL tbody>tr").each(function(){
			obj = {};
			if($(this).find('td:nth-child(1) input[type="checkbox"]').is(":checked")){
				obj["key"] = $(this).find('td:nth-child(1) input[type="checkbox"]').val();
				obj["text"] = $(this).find('td:nth-child(3)').text();
				obj["prem_cal_meth"] = "SA_ONLY"
				mode.push(obj);
			}
		});
	}
	if(!$("#tbl_modeTerms_OL2").hasClass('disabledAll') && $("#tbl_modeTerms_OL").hasClass('disabledAll')){
		$("#tbl_modeTerms_OL2 tbody>tr").each(function(){
			obj = {};
			if($(this).find('td:nth-child(1) input[type="checkbox"]').is(":checked")){
				obj["key"] = $(this).find('td:nth-child(1) input[type="checkbox"]').val();
				obj["text"] = $(this).find('td:nth-child(3)').text();
				obj["prem_cal_meth"] = "PREM_ONLY"
				mode.push(obj);
			}
		});
	}*/
	
	var length_mode1 = $("#tbl_modeTerms_OL tbody>tr").length
	var length_mode2 = $("#tbl_modeTerms_OL2 tbody>tr").length
	if( length_mode1 == length_mode2 ){
		for(var i=0 ; i < length_mode1 ; i++){
			if( $("#tbl_modeTerms_OL tbody>tr").eq(i).find('td:nth-child(1) input[type="checkbox"]').is(':checked') 
					&& $("#tbl_modeTerms_OL2 tbody>tr").eq(i).find('td:nth-child(1) input[type="checkbox"]').is(':checked')){
				obj = {};
				obj["key"] = $("#tbl_modeTerms_OL tbody>tr").eq(i).find('td:nth-child(1) input[type="checkbox"]').val();
				obj["text"] = $("#tbl_modeTerms_OL tbody>tr").eq(i).find('td:nth-child(3)').text();
				obj["prem_cal_meth"] = "EITHER"
				mode.push(obj);
			}else if( $("#tbl_modeTerms_OL tbody>tr").eq(i).find('td:nth-child(1) input[type="checkbox"]').is(':checked') 
					&& !$("#tbl_modeTerms_OL2 tbody>tr").eq(i).find('td:nth-child(1) input[type="checkbox"]').is(':checked')){
				obj = {};
				obj["key"] = $("#tbl_modeTerms_OL tbody>tr").eq(i).find('td:nth-child(1) input[type="checkbox"]').val();
				obj["text"] = $("#tbl_modeTerms_OL tbody>tr").eq(i).find('td:nth-child(3)').text();
				obj["prem_cal_meth"] = "SA_ONLY"
				mode.push(obj);
			}else if( !$("#tbl_modeTerms_OL tbody>tr").eq(i).find('td:nth-child(1) input[type="checkbox"]').is(':checked') 
					&& $("#tbl_modeTerms_OL2 tbody>tr").eq(i).find('td:nth-child(1) input[type="checkbox"]').is(':checked')){
				obj = {};
				obj["key"] = $("#tbl_modeTerms_OL tbody>tr").eq(i).find('td:nth-child(1) input[type="checkbox"]').val();
				obj["text"] = $("#tbl_modeTerms_OL tbody>tr").eq(i).find('td:nth-child(3)').text();
				obj["prem_cal_meth"] = "PREM_ONLY"
				mode.push(obj);
			}
		}
	}
	
	
	/*คำนวณค่าตาราง underwrite คอลัม rider_buy_meth*/
	var rider_buy_meth = "";
	if( $("#rd_buy_contractAmount_OL1").is(':checked') && $("#rd_buy_contractInsure_OL1").is(':checked')){
		rider_buy_meth = "EITHER"
	}else if( $("#rd_buy_contractAmount_OL1").is(':checked') && !$("#rd_buy_contractInsure_OL1").is(':checked')){
		rider_buy_meth = "SA_ONLY"
	}else if( !$("#rd_buy_contractAmount_OL1").is(':checked') && $("#rd_buy_contractInsure_OL1").is(':checked')){
		rider_buy_meth = "PREM_ONLY"
	}else{
		rider_buy_meth = "NONE"
	}
	
	
	var underwrite = [];
	obj = {};
	obj["is_prd_max_policy"] = $("#rd_max_amount_insure_OL1").is(':checked');
	if($("#rd_max_amount_insure_OL1").is(':checked')){
		obj["prd_max_policy"] = String(Math.round10($("#txb_max_amount_limit_OL1").val(), -4));
		obj["prd_max_sa"] = replaceComma($("#txb_max_amount_limit_OL2").val());
		obj["prd_max_sa_unit"] = "CURRENCY"		//HARDCODE
	}else{
		obj["prd_max_policy"] = "";
		obj["prd_max_sa"] = "";
		obj["prd_max_sa_unit"] = "NONE";
	}
	obj["is_pax_max_policy"] = $("#rd_single_max_amount_insure_OL1").is(':checked');
	if($("#rd_single_max_amount_insure_OL1").is(':checked')){
		obj["pax_max_policy"] = String(Math.round10($("#txb_single_max_amount_limit_OL1").val(), -4));
		obj["pax_max_sa"] = replaceComma($("#txb_single_max_amount_limit_OL2").val());
		obj["pax_max_sa_unit"] = "CURRENCY"		//HARDCODE
	}else{
		obj["pax_max_policy"] = "";
		obj["pax_max_sa"] = "";
		obj["pax_max_sa_unit"] = "NONE";
	}
	if($("#tbl_insure_range_OL tbody>tr").length > 0){
		obj["is_sum_range"] = true
	}else{
		obj["is_sum_range"] = false
	}
	obj["is_med_req"] = $("#rd_health_check_OL1").is(':checked');
	obj["is_med_sum_accum"] = $("#rd_health_money_OL1").is(':checked');
	if($("#rd_health_money_OL1").is(':checked')){
		obj["med_sum_factor"] = String(Math.round10($("#amount_health_insurance_OL").val()/100, -4))
			
	}else{
		obj["med_sum_factor"] = "";
	}
	obj["is_exist_policy"] = $("#rd_old_list_OL1").is(':checked');
	obj["is_insure_sum_accum"] = $("#rd_capital_OL1").is(':checked');
	if($("#rd_capital_OL1").is(':checked')){
		obj["insure_sum_factor"] = String(Math.round10($("#amount_uw_insurance_OL").val()/100, -4))
	}else{
		obj["insure_sum_factor"] = "";
	}
	obj["is_substandard"] = $("#rd_increase_premium_OL1").is(':checked');
	obj["is_rider_allow"] = $("#rd_buy_contractAmount_OL1").is(':checked');
	obj["rider_buy_meth"] = rider_buy_meth;
	obj["is_rider_sum_accum"] = $("#rd_buy_contract_period_OL1").is(':checked');	
	obj["is_check_ic_ba"] = $("#chk_check_data_OL4").is(':checked');
	obj["is_check_ic_fi_cft"] = $("#chk_check_data_OL5").is(':checked');
	obj["is_check_sale_blacklist"] = $("#chk_check_data_OL6").is(':checked');
	//obj["is_reins_alert"] = $("#rd_filing_rs_CL1").is(':checked');
	obj["is_fax_app"] = $("#rd_fax_app_OL1").is(':checked');
	underwrite.push(obj)

	var unwAccumRule = [];
	if($("#rd_single_max_amount_insure_OL1").is(":checked")){
		// unwAccumRule - POLICY
		if($("#chk_single_max_amount_limit_OL1").is(':checked')){
			$("#tbl_insuranceIssue_OL tbody>tr").each(function(i){
				i++;
				obj = {};
				obj["seq"] = i;
				obj["cov_cat_lv_1"] = $(this).find('td:nth-child(2) option:selected').val();
				obj["cov_cat_lv_2"] = $(this).find('td:nth-child(3) option:selected').val();
				obj["cov_cat_lv_3"] = $(this).find('td:nth-child(4) option:selected').val();
				obj["is_gio"] = $(this).find('td:nth-child(5) option:selected').val();
				obj["is_senior"] = $(this).find('td:nth-child(6) option:selected').val();
				obj["filing_chan_id"] = "NONE";
				obj["sale_chan_id"] = ""+$(this).find('td:nth-child(7) option:selected').data('id');
				obj["sale_partner_code"] = ""+$(this).find('td:nth-child(8) option:selected').data('id');
				obj["accum_type"] = "POLICY";
				unwAccumRule.push(obj);
			});
		}
		// unwAccumRule - SA
		if($("#chk_single_max_amount_limit_OL2").is(':checked')){
			$("#tbl_insuranceMax_OL tbody>tr").each(function(i){
				i++;
				obj = {};
				obj["seq"] = i;
				obj["cov_cat_lv_1"] = $(this).find('td:nth-child(2) option:selected').val();
				obj["cov_cat_lv_2"] = $(this).find('td:nth-child(3) option:selected').val();
				obj["cov_cat_lv_3"] = $(this).find('td:nth-child(4) option:selected').val();
				obj["is_gio"] = $(this).find('td:nth-child(5) option:selected').val();
				obj["is_senior"] = $(this).find('td:nth-child(6) option:selected').val();
				obj["filing_chan_id"] = "NONE";
				obj["sale_chan_id"] = ""+$(this).find('td:nth-child(7) option:selected').data('id');
				obj["sale_partner_code"] = ""+$(this).find('td:nth-child(8) option:selected').data('id');
				obj["accum_type"] = "SA";
				unwAccumRule.push(obj);
			});
		}
	}
	if($("#rd_health_money_OL1").is(":checked")){
		// unwAccumRule - MED_SUM
		$("#tbl_health_insurance_OL tbody>tr").each(function(i){
			i++;
			obj = {};
			obj["seq"] = i;
			obj["cov_cat_lv_1"] = $(this).find('td:nth-child(2) option:selected').val();
			obj["cov_cat_lv_2"] = $(this).find('td:nth-child(3) option:selected').val();
			obj["cov_cat_lv_3"] = $(this).find('td:nth-child(4) option:selected').val();
			obj["is_gio"] = $(this).find('td:nth-child(5) option:selected').val();
			obj["is_senior"] = $(this).find('td:nth-child(6) option:selected').val();
			obj["filing_chan_id"] = "NONE";
			obj["sale_chan_id"] = ""+$(this).find('td:nth-child(7) option:selected').data('id');
			obj["sale_partner_code"] = ""+$(this).find('td:nth-child(8) option:selected').data('id');
			obj["accum_type"] = "MED_SUM";
			unwAccumRule.push(obj);
		});
	}
	if($("#rd_old_list_OL1").is(":checked")){
		// unwAccumRule - EXIST_POLICY
		$("#tbl_old_insurance_OL tbody>tr").each(function(i){
			i++;
			obj = {};
			obj["seq"] = i;
			obj["cov_cat_lv_1"] = $(this).find('td:nth-child(2) option:selected').val();
			obj["cov_cat_lv_2"] = $(this).find('td:nth-child(3) option:selected').val();
			obj["cov_cat_lv_3"] = $(this).find('td:nth-child(4) option:selected').val();
			obj["is_gio"] = $(this).find('td:nth-child(5) option:selected').val();
			obj["is_senior"] = $(this).find('td:nth-child(6) option:selected').val();
			obj["filing_chan_id"] = "NONE";
			obj["sale_chan_id"] = ""+$(this).find('td:nth-child(7) option:selected').data('id');
			obj["sale_partner_code"] = ""+$(this).find('td:nth-child(8) option:selected').data('id');
			obj["accum_type"] = "EXIST_POLICY";
			unwAccumRule.push(obj);
		});
	}
	if($("#rd_capital_OL1").is(":checked")){
		// unwAccumRule - INSURED_SUM
		$("#tbl_UW_consider_OL tbody>tr").each(function(i){
			i++;
			obj = {};
			obj["seq"] = i;
			obj["cov_cat_lv_1"] = $(this).find('td:nth-child(2) option:selected').val();
			obj["cov_cat_lv_2"] = $(this).find('td:nth-child(3) option:selected').val();
			obj["cov_cat_lv_3"] = $(this).find('td:nth-child(4) option:selected').val();
			obj["is_gio"] = $(this).find('td:nth-child(5) option:selected').val();
			obj["is_senior"] = $(this).find('td:nth-child(6) option:selected').val();
			obj["filing_chan_id"] = "NONE";
			obj["sale_chan_id"] = ""+$(this).find('td:nth-child(7) option:selected').data('id');
			obj["sale_partner_code"] = ""+$(this).find('td:nth-child(8) option:selected').data('id');
			obj["accum_type"] = "INSURED_SUM";
			unwAccumRule.push(obj);
		});
	}
	
	var occ_degree = [];
	$("#tbl_saleDegreeTerm_OL tbody>tr").each(function(){
		obj = {};
		obj["key"] = $(this).find('td:nth-child(1) input[type="checkbox"]').val();
		obj["text"] = $(this).find('td:nth-child(2)').text();
		obj["check"] = $(this).find('td:nth-child(1) input[type="checkbox"]').is(':checked')
		occ_degree.push(obj);
	});
	
	var unw_sum_range = [];
	$("#tbl_insure_range_OL tbody>tr").each(function(i){
		i++;
		obj = {};
		obj["seq"]	= i;
		obj["amt_type"] = "SA"
		obj["min_sa"] = replaceComma($(this).find('td:nth-child(2) input').val());
		obj["max_sa"] = replaceComma($(this).find('td:nth-child(3) input').val());
		obj["increase_range"] = replaceComma($(this).find('td:nth-child(4) input').val());
		unw_sum_range.push(obj)
	});
	if( !$("#sale_followRate").hasClass('disabledAll') ){
		obj = {};
		obj["seq"]	= 1;
		obj["amt_type"] = "PREM"
		obj["min_sa"] = "";
		obj["max_sa"] = "";
		obj["increase_range"] = replaceComma($("#buy_forwardRate_OL").val());
		unw_sum_range.push(obj)
	}
	
	var pol_issue_unit = [];
	obj = {};
	obj["NBI"] = $("#rd_approval_branch_OL1").is(":checked");
	obj["headquarters"] = $("#rd_approval_branch_OL2").is(":checked");
	pol_issue_unit.push(obj);
	
	// ตาราง unwHistrule
	var unwHistrule = [];
	/*CLAIM*/
	obj = {};
	obj["Hist_type"] = $("#chk_check_data_OL1").val();
	obj["Is_check"] = $("#chk_check_data_OL1").is(":checked");
	obj["Is_restrict"] = $("#haveCondition_oldCov_OL").is(":checked");
	if($("#haveCondition_oldCov_OL").is(":checked")){
		obj["Restrict_type_1"] = $("#sl_haveCondition_oldCov_OL").val();
		obj["Condition_1"] = $("#sl_haveCondition_oldCov2_OL").val();
		obj["Restrict_type_2"] = $("#sl_haveCondition_oldCov3_OL").val();
		obj["Condition_2"] = $("#sl_haveCondition_oldCov4_OL").val();
		obj["Restrict_type_3"] = $("#sl_haveCondition_oldCov5_OL").val();
		/*ถ้าไม่ได้เลือก NewSA จะให้เป็นค่า 0 */
		if( $("#sl_haveCondition_oldCov_OL").val() != "NEW_SA" && $("#sl_haveCondition_oldCov3_OL").val() != "NEW_SA" 
			&& $("#sl_haveCondition_oldCov5_OL").val() != "NEW_SA"){
			obj["New_sa_compare"] = "NONE";
			obj["New_sa_amt"] = "";
		}else{
			var New_sa_amt = $("#amount_NewSA_oldCov_OL").val();
			New_sa_amt = New_sa_amt.replace(/,/g, "");
		obj["New_sa_amt"] = New_sa_amt;
		obj["New_sa_compare"] = $("#sl_NewSA_oldCov_OL").val();
		}
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
	/*IC*/
	obj = {};
	obj["Hist_type"] = $("#chk_check_data_OL2").val();
	obj["Is_check"] = $("#chk_check_data_OL2").is(":checked");
	obj["Is_restrict"] = $("#haveCondition_IC_OL").is(":checked");
	if($("#haveCondition_IC_OL").is(":checked")){
		obj["Restrict_type_1"] = $("#sl_haveCondition_IC_OL").val();
		obj["Condition_1"] = $("#sl_haveCondition_IC2_OL").val();
		obj["Restrict_type_2"] = $("#sl_haveCondition_IC3_OL").val();
		obj["Condition_2"] = $("#sl_haveCondition_IC4_OL").val();
		obj["Restrict_type_3"] = $("#sl_haveCondition_IC5_OL").val();
		/*ถ้าไม่ได้เลือก NewSA จะให้เป็นค่า 0 */
		if( $("#sl_haveCondition_IC_OL").val() != "NEW_SA" && $("#sl_haveCondition_IC3_OL").val() != "NEW_SA" 
			&& $("#sl_haveCondition_IC5_OL").val() != "NEW_SA"){
			obj["New_sa_compare"] = "NONE";
			obj["New_sa_amt"] = "";
		}else{
			var New_sa_amt = $("#amount_NewSA_IC_OL").val();
			New_sa_amt = New_sa_amt.replace(/,/g, "");
		obj["New_sa_amt"] = New_sa_amt;
		obj["New_sa_compare"] = $("#sl_NewSA_IC_OL").val();
		}
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
	/*SUBSTD*/
	obj = {};
	obj["Hist_type"] = $("#chk_check_data_OL3").val();
	obj["Is_check"] = $("#chk_check_data_OL3").is(":checked");
	obj["Is_restrict"] = $("#haveCondition_SubCov_OL").is(":checked");
	if($("#haveCondition_SubCov_OL").is(":checked")){
		obj["Restrict_type_1"] = $("#sl_haveCondition_SubCov_OL").val();
		obj["Condition_1"] = $("#sl_haveCondition_SubCov2_OL").val();
		obj["Restrict_type_2"] = $("#sl_haveCondition_SubCov3_OL").val();
		obj["Condition_2"] = $("#sl_haveCondition_SubCov4_OL").val();
		obj["Restrict_type_3"] = $("#sl_haveCondition_SubCov5_OL").val();
		/*ถ้าไม่ได้เลือก NewSA จะให้เป็นค่า 0 */
		if( $("#sl_haveCondition_SubCov_OL").val() != "NEW_SA" && $("#sl_haveCondition_SubCov3_OL").val() != "NEW_SA" 
			&& $("#sl_haveCondition_SubCov5_OL").val() != "NEW_SA"){
			obj["New_sa_compare"] = "NONE";
			obj["New_sa_amt"] = "";
		}else{
			var New_sa_amt = $("#amount_NewSA_Sub_OL").val();
			New_sa_amt = New_sa_amt.replace(/,/g, "");
			obj["New_sa_amt"] = New_sa_amt;
			obj["New_sa_compare"] = $("#sl_NewSA_Sub_OL").val();
		}
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
	
	var unwHistExitProd = [];
	$("#tbl_buyWith1_OL tbody>tr").each(function(){
		obj = {};
		obj["Hist_type"] = $("#chk_check_data_OL1").val();
		obj["Exist_prd_code"] = $(this).find('td:nth-child(3) input[type="hidden"]').val();
		unwHistExitProd.push(obj);
	})
	$("#tbl_buyWith2_OL tbody>tr").each(function(){
		obj = {};
		obj["Hist_type"] = $("#chk_check_data_OL2").val();
		obj["Exist_prd_code"] = $(this).find('td:nth-child(3) input[type="hidden"]').val();
		unwHistExitProd.push(obj);
	})
	$("#tbl_buyWith3_OL tbody>tr").each(function(){
		obj = {};
		obj["Hist_type"] = $("#chk_check_data_OL3").val();
		obj["Exist_prd_code"] = $(this).find('td:nth-child(3) input[type="hidden"]').val();
		unwHistExitProd.push(obj);
	})
	
	var prem_collect = [];
	$("#collect_meth_FYP_OL input[name='chk_first_pay_premium_OL[]']:checked").each(function(){
		obj = {};
		obj["prem_flag"] = "FYP";
		obj["collect_meth"] = $(this).val();
		prem_collect.push(obj)
	})
	$("#collect_meth_RYP_OL input[name='chk_next_pay_premium_OL[]']:checked").each(function(){
		obj = {};
		obj["prem_flag"] = "RYP";
		obj["collect_meth"] = $(this).val();
		prem_collect.push(obj)
	})
	
	var flpFee_arr = [];
	$("#tbl_deduct_cost_OL tbody>tr").each(function(){
		if($(this).find("td:nth-child(1) input").is(":checked")){
			obj = {};
			obj["Fee_type"] = $(this).find("td:nth-child(1) input").val();
			flpFee_arr.push(obj);
		}
	});
	
	/*appenDixProduct*/
	var anti_HIV = [];
	if($("#rd_health_check_OL1").is(":checked")){
		$("#tbl_health_check_OL tbody>tr").each(function(){
			if($(this).find('td:nth-child(1) input[type="radio"]').is(":checked")){
				obj = {};
				obj["key"] = $(this).find('td:nth-child(1) input[type="radio"]:checked').val();
				obj["prd_code"] = $("#pass_Insurance_product_ol").val();
				obj["eff_date"] = $("#menu_term1_datefrom_ol").val();
				obj["exp_date"] = $("#menu_term1_dateto_ol").val();
				anti_HIV.push(obj);
			}
		});
	}
	
	/*unwAccumRule_exclude*/
	var unwAccumRule_exclude = [];
	var exclude_prd_code_medSum = $("#hd_accumRuleExclude_MEDSUM").val();
	var accumRule_exclude_medSum = [];
		accumRule_exclude_medSum = exclude_prd_code_medSum.split(",");
	for(var i=0; i < accumRule_exclude_medSum.length; i++){	
		var obj = {};
		obj["accum_type"] = "MED_SUM" 
		obj["exclude_prd_code"] = accumRule_exclude_medSum[i];
		unwAccumRule_exclude.push(obj);	 
	}
	var exclude_prd_code_existPolicy = $("#hd_accumRuleExclude_EXISTPOLICY").val();
	var accumRule_exclude_existPolicy = [];
		accumRule_exclude_existPolicy = exclude_prd_code_existPolicy.split(",");
	for(var i=0; i < accumRule_exclude_existPolicy.length; i++){	
		var obj = {};
		obj["accum_type"] = "EXIST_POLICY" 
		obj["exclude_prd_code"] = accumRule_exclude_existPolicy[i];
		unwAccumRule_exclude.push(obj);	 
	}
	var exclude_prd_code_insureSum = $("#hd_accumRuleExclude_INSURESUM").val();
	var accumRule_exclude_insureSum = [];
		accumRule_exclude_insureSum = exclude_prd_code_insureSum.split(",");
	for(var i=0; i < accumRule_exclude_insureSum.length; i++){	
		var obj = {};
		obj["accum_type"] = "INSURED_SUM" 
		obj["exclude_prd_code"] = accumRule_exclude_insureSum[i];
		unwAccumRule_exclude.push(obj);	 
	}
	var exclude_prd_code_policy = $("#hd_accumRuleExclude_POLICY").val();
	var accumRule_exclude_policy = [];
		accumRule_exclude_policy = exclude_prd_code_policy.split(",");
	for(var i=0; i < accumRule_exclude_policy.length; i++){	
		var obj = {};
		obj["accum_type"] = "POLICY" 
		obj["exclude_prd_code"] = accumRule_exclude_policy[i];
		unwAccumRule_exclude.push(obj);	 
	}
	var exclude_prd_code_sa = $("#hd_accumRuleExclude_SA").val();
	var accumRule_exclude_sa = [];
		accumRule_exclude_sa = exclude_prd_code_sa.split(",");
	for(var i=0; i < accumRule_exclude_sa.length; i++){	
		var obj = {};
		obj["accum_type"] = "SA" 
		obj["exclude_prd_code"] = accumRule_exclude_sa[i];
		unwAccumRule_exclude.push(obj);	 
	}
	
	/*การรับแบบเพิ่มเบี้ยพิเศษ*/
	var unw_rider_limit = [];
	$("#tbl_increase_premium_OL tbody>tr").each(function(i){
		obj = {};
		obj["prd_rider_code"] = $(this).find('td:nth-child(1) #prd_rider_code').val();
		obj["max_em"] = String(Math.round10(replaceComma($(this).find('td:nth-child(3) input').val())/100 , -4));
		unw_rider_limit.push(obj);
	});
	
	//การซื้อสัญญาแนบท้ายควบ
	var rider = [];
	$("#tbl_contractAmount_OL tbody>tr").each(function(){
		if($(this).find('td:nth-child(1) input[type="checkbox"]').is(':checked')){
			var id = $(this).attr('id') ;
				id = id.replace("tr_contractAmount_OL","")
		obj = {};
		obj["prd_rider_code"] = $("#riderAmount_prd_code_rider_"+id).val();
		obj["flag_type"] = "R"
		obj["select_rule"] = "OPTIONAL"
		obj["prem_cal_meth"] = "SA_ONLY"
		obj["save_rider"] = true
		rider.push(obj)
		}
	})
	$("#tbl_contractInsure_OL tbody>tr").each(function(){
		if($(this).find('td:nth-child(1) input[type="checkbox"]').is(':checked')){
			var id = $(this).attr('id') ;
				id = id.replace("tr_contractInsure_OL","")
			obj = {};
			obj["prd_rider_code"] = $("#riderInsure_prd_code_rider_"+id).val();
			obj["flag_type"] = "R"
			obj["select_rule"] = "OPTIONAL"
			obj["prem_cal_meth"] = "PREM_ONLY"
			obj["save_rider"] = true
			
			var flag_dup = false;
			for(i=0 ; i < rider.length ; i++){
				if( rider[i].prd_rider_code == $("#riderInsure_prd_code_rider_"+id).val()){
					flag_dup = true;
					rider[i].prem_cal_meth = "EITHER"
				}
			}
			if(!flag_dup){
				rider.push(obj)
			}
			
		}
	})
	
	var optional_sort = [];
	$("#tb_Additional_contract_OL tbody>tr").each(function(){
		if($(this).find('td:nth-child(2) input[type="hidden"]').val() == "OPTIONAL"){
			optional_sort.push($(this).find('td:nth-child(3) label').text())
		}
	})
	var rider_sort = [];
	for(var i=0 ; i < optional_sort.length ; i++){
		var rider_mainIndex = optional_sort[i]
		for(var y=0 ; y < rider.length ; y++){
			if( rider_mainIndex == rider[y].prd_rider_code){
				rider_sort.push(rider[y])
			}
		}
	}
//	console.log(rider_sort)
	for(var i=0 ; i < stoage_delete_covRider.length ; i++){
		var flag_dupp = false;
		var stoage_prdRiderCode = stoage_delete_covRider[i].prd_code_rider;
		var stoage_premCalMeth  = stoage_delete_covRider[i].prem_cal_meth;
		for(var y=0 ; y < rider.length ; y++){
			var rider_obj = rider[y].prd_rider_code; 
			var prem_cal_meth_obj = rider[y].prem_cal_meth; 
			if(stoage_prdRiderCode == rider_obj 
					&& stoage_premCalMeth == prem_cal_meth_obj){
				flag_dupp = true
			}
		}
		if(!flag_dupp){
			var flag_dup_tabBasic = false;
			$("#tb_Additional_contract_OL tbody>tr").each(function(){
				if(stoage_prdRiderCode == $(this).find('td:nth-child(3) label').text() ){
					flag_dup_tabBasic = true;
				}
			})
			if(!flag_dup_tabBasic){
				obj = {};
				obj["prd_rider_code"] = stoage_prdRiderCode;
				obj["flag_type"] = "R"
				obj["select_rule"] = "OPTIONAL"
				obj["prem_cal_meth"] =  stoage_premCalMeth;
				obj["save_rider"] = false
				rider_sort.push(obj)
			}
		}
	}
	
	var json_data = {
			"method" : "Tab_Provision",
			"prd_code": $("#pass_Insurance_product_ol").val(),
			"product" : JSON.stringify(product),
			"participant" : JSON.stringify(participant),
			"mode" : JSON.stringify(mode),
			"underwrite" : JSON.stringify(underwrite),
			"unwAccumRule" : JSON.stringify(unwAccumRule),
			"occ" : JSON.stringify(occ_degree),
			"unwSumRange" : JSON.stringify(unw_sum_range),
			"pol_issue_unit" : JSON.stringify(pol_issue_unit),
			"unwHistrule" : JSON.stringify(unwHistrule),
			"unwHistExitProd" : JSON.stringify(unwHistExitProd),
			"premCollect" : JSON.stringify(prem_collect),
			"flpFee_arr" : JSON.stringify(flpFee_arr),
			"unwAccumRuleExclude" : JSON.stringify(unwAccumRule_exclude),
			"rider" : JSON.stringify(rider_sort),
//			"Coop" : JSON.stringify(Coop),
//			"unwSubstdType" : JSON.stringify(unwSubstdType),
//			"unwCocreditLimit" : JSON.stringify(unw_cocredit_limit),	
			"unwRiderLimit" : JSON.stringify(unw_rider_limit),
			"appenDixProduct" : JSON.stringify(anti_HIV),		
//			"unwHistMedSum" : JSON.stringify(unwHistMedSum),
//			"unwHistMedSumDet" : JSON.stringify(unwHistMedSumDet),
			"groupName" : $("#groupName").val()
	}
	
	$.ajax({
	url: 'ProductBasePlanOL_SaveData_Servlet',
	type: "POST",
	data: json_data,
	async: false,
	success: function (response) {
	
	}
	});
	console.log("data",json_data);
	
}
/* 5.1 policy wording */
function datasave_policyWording_OL(){
	
	/*in-house or outsource*/
	var pol_point_at = "";
	if($("#rd_policy_choice_OL1").is(':checked')){
		pol_point_at = $("#rd_policy_choice_OL1").val();
	}else if($("#rd_policy_choice_OL2").is(':checked')){
		pol_point_at = $("#rd_policy_choice_OL2").val();
	}
	
	var json_data = {
			"method"		: "Tab_Policy",
			"prd_code"		: $("#pass_Insurance_product_ol").val(),
			"pol_point_at"	: pol_point_at,
			"groupName" 	: $("#groupName").val()
	}
	$.ajax({
		url: 'ProductBasePlanOL_SaveData_Servlet',
		type: "POST",
		data: json_data,
		async: false,
		success: function (response) {
		
		}
		});
		console.log("data",json_data);
}
/***********************************  END  SAVE  *********************************************************/


function ddHeath1_select_OL(id){

	
	if(id.includes("sl_contractType_healthInsurance_OL")){
		var ddID = Number(id.replace("sl_contractType_healthInsurance_OL",""));
		var main_contract22 = "sl_policyType_healthInsurance_OL";
		var main_contract33 = "sl_productType_healthInsurance_OL";
	}else if(id.includes("sl_contractType_oldinsurance_OL")){
		var ddID = Number(id.replace("sl_contractType_oldinsurance_OL",""));
		var main_contract22 = "sl_policyType_oldinsurance_OL";
		var main_contract33 = "sl_productType_oldinsurance_OL";
	}else if(id.includes("sl_contractType_UWConsider_OL")){
		var ddID = Number(id.replace("sl_contractType_UWConsider_OL",""));
		var main_contract22 = "sl_policyType_UWConsider_OL";
		var main_contract33 = "sl_productType_UWConsider_OL";
	}else if(id.includes("sl_contractType_insuranceIssue")){
		var ddID = Number(id.replace("sl_contractType_insuranceIssue", ""))
		var main_contract22 = "sl_policyType_insuranceIssue";
		var main_contract33 = "sl_productType_insuranceIssue";
	}else if(id.includes("sl_contractType_insuranceMax")){
		var ddID = Number(id.replace("sl_contractType_insuranceMax", ""));
		var main_contract22 = "sl_policyType_insuranceMax";
		var main_contract33 = "sl_productType_insuranceMax";
	}
	
	var value = $("#"+id).val();
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

function ddHeath2_select_OL(id){
	
	if(id.includes("sl_policyType_healthInsurance_OL")){
		var ddID = Number(id.replace("sl_policyType_healthInsurance_OL",""));
		var main_contract11 = "sl_contractType_healthInsurance_OL";
		var main_contract22 = "sl_policyType_healthInsurance_OL";
		var main_contract33 = "sl_productType_healthInsurance_OL";
	}else if(id.includes("sl_policyType_oldinsurance_OL")){
		var ddID = Number(id.replace("sl_policyType_oldinsurance_OL",""));
		var main_contract11 = "sl_contractType_oldinsurance_OL";
		var main_contract22 = "sl_policyType_oldinsurance_OL";
		var main_contract33 = "sl_productType_oldinsurance_OL";
	}else if(id.includes("sl_policyType_UWConsider_OL")){
		var ddID = Number(id.replace("sl_policyType_UWConsider_OL",""));
		var main_contract11 = "sl_contractType_UWConsider_OL";
		var main_contract22 = "sl_policyType_UWConsider_OL";
		var main_contract33 = "sl_productType_UWConsider_OL";
	}else if(id.includes("sl_policyType_insuranceIssue")){
		var ddID = Number(id.replace("sl_policyType_insuranceIssue", ""))
		var main_contract11 = "sl_contractType_insuranceIssue";
		var main_contract22 = "sl_policyType_insuranceIssue";
		var main_contract33 = "sl_productType_insuranceIssue";
	}else if(id.includes("sl_policyType_insuranceMax")){
		var ddID = Number(id.replace("sl_policyType_insuranceMax",""));
		var main_contract11 = "sl_contractType_insuranceMax"
		var main_contract22 = "sl_policyType_insuranceMax";
		var main_contract33 = "sl_productType_insuranceMax";
	}


	var value = $("#"+id).val();
	
	var main_contract3 = document.getElementById(main_contract33+ddID);
     $("#"+main_contract33+ddID).find('option').remove();
      	 var option 		= 	document.createElement("option");
			option.value 		= 	"";
			option.text 		= 	"All";
			main_contract3.add(option);
			
			
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

function filter_partner_OL(e){
	
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
			url: 'ProductBasePlanOL_Data_default_Servlet',
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

function addhealthInsurance_OL(){
	if($("#div_health_insurance_OL").innerHeight() > 300){
		$("#div_health_insurance_OL").addClass("scroll_insure_many");
	}
	var lastImgOK = $('#tbl_health_insurance_OL>tbody>tr:last>td:first').attr("id") || 0;
	var numberImgOK = 0;
	
	if(lastImgOK == 0){
		numberImgOK = 1;
	}else{
		numberImgOK = Number(lastImgOK.replace("imgOK_healthInsurance_OL",""))+1;
	}
	
	var row = "";
	row = "<tr id='tr_healthInsurance_OL"+numberImgOK+"'>"+
	  "<td id='imgOK_healthInsurance_OL"+numberImgOK+"' class='text-center vertical-middle' onclick='imgCheckbox_healthInsurance_OL("+numberImgOK+");'>"+
	  	"<i class='glyphicon glyphicon-edit'></i>"+
	  "</td>"+					
	  "<td class='verticalCenter text-center'></td>"+
	  "<td class='verticalCenter text-center'><select class='form-control' id='sl_policyType_healthInsurance_OL"+numberImgOK+"' onchange='ddHeath2_select_OL(this.id)'><option>All</option></select></td>"+
	  "<td class='verticalCenter text-center'><select class='form-control' id='sl_productType_healthInsurance_OL"+numberImgOK+"'><option>All</option></select></td>"+
	  "<td class='verticalCenter text-center'></td>"+
	  "<td class='verticalCenter text-center'></td>"+
	  "<td class='verticalCenter text-center'></td>"+
	  /*"<td class='verticalCenter text-center'></td>"+*/
	  "<td class='verticalCenter text-center'><select class='form-control' id='sl_partner_healthInsurance_OL"+numberImgOK+"'><option data-id='0' value='NONE'>All</option></select></td>"+
	 "</tr>";
		
	$("#tbl_health_insurance_OL>tbody").append(row);	
	
	/*clone ประเภทสัญญา*/
	$('#tbl_health_insurance_OL>tbody>tr:first-child>td:nth-child(2)>select').clone().attr("id","sl_contractType_healthInsurance_OL"+numberImgOK).appendTo("#tr_healthInsurance_OL"+numberImgOK+">td:nth-child(2)");
	$("#sl_contractType_healthInsurance_OL"+numberImgOK+" option[value='']").attr("selected",true);
	var optionValues = [];
	$("#sl_contractType_healthInsurance_OL"+numberImgOK+" option").each(function() {
	    optionValues.push($(this).text());
	});
	
	$('#tbl_health_insurance_OL>tbody>tr:first-child>td:nth-child(5)>select').clone().attr("id","sl_Reinsurance_healthInsurance_OL"+numberImgOK).appendTo("#tr_healthInsurance_OL"+numberImgOK+">td:nth-child(5)");
	$('#tbl_health_insurance_OL>tbody>tr:first-child>td:nth-child(6)>select').clone().attr("id","sl_senior_healthInsurance_OL"+numberImgOK).appendTo("#tr_healthInsurance_OL"+numberImgOK+">td:nth-child(6)");
//	$('#tbl_health_insurance_OL>tbody>tr:first-child>td:nth-child(7)>select').clone().attr("id","sl_fillingChannel_healthInsurance_OL"+numberImgOK).appendTo("#tr_healthInsurance_OL"+numberImgOK+">td:nth-child(7)");
	$('#tbl_health_insurance_OL>tbody>tr:first-child>td:nth-child(7)>select').clone().attr("id","sl_saleChannel_healthInsurance_OL"+numberImgOK).appendTo("#tr_healthInsurance_OL"+numberImgOK+">td:nth-child(7)");

	$("#sl_Reinsurance_healthInsurance_OL"+numberImgOK).find("option").removeAttr( "selected" )
	$("#sl_Reinsurance_healthInsurance_OL"+numberImgOK).find("option[value='NONE']").attr("selected",true)
	$("#sl_senior_healthInsurance_OL"+numberImgOK).find("option").removeAttr( "selected" )
	$("#sl_senior_healthInsurance_OL"+numberImgOK).find("option[value='NONE']").attr("selected",true)
//	$("#sl_fillingChannel_healthInsurance_OL"+numberImgOK).find("option").removeAttr( "selected" )
//	$("#sl_fillingChannel_healthInsurance_OL"+numberImgOK).find("option[value='NONE']").attr("selected",true)
	$("#sl_saleChannel_healthInsurance_OL"+numberImgOK).find("option").removeAttr( "selected" )
	$("#sl_saleChannel_healthInsurance_OL"+numberImgOK).find("option[value='NONE']").attr("selected",true)
	/*$("#validate_input12_ol").show();*/
}

function addOldInsurance_OL(){
	if($("#div_old_insurance_OL").innerHeight() > 300){
		$("#div_old_insurance_OL").addClass("scroll_insure_many");
	}
			
	var lastImgOK = $('#tbl_old_insurance_OL>tbody>tr:last>td:first').attr("id") || 0;
	var numberImgOK = 0;
				
	if(lastImgOK == 0){
		numberImgOK = 1;
	}else{
		numberImgOK = Number(lastImgOK.replace("imgOK_oldinsurance_OL",""))+1;
	}
		
	row = "<tr id='tr_oldinsurance_OL"+numberImgOK+"'>"+
	  "<td id='imgOK_oldinsurance_OL"+numberImgOK+"' class='text-center vertical-middle' onclick='imgCheckbox_oldinsurance_OL("+numberImgOK+");'>"+
	  	"<i class='glyphicon glyphicon-edit'></i>"+
	  "</td>"+					
	  "<td class='verticalCenter text-center'></td>"+
	  "<td class='verticalCenter text-center'><select class='form-control' id='sl_policyType_oldinsurance_OL"+numberImgOK+"' onchange='ddHeath2_select_OL(this.id)'><option>All</option></select></td>"+
	  "<td class='verticalCenter text-center'><select class='form-control' id='sl_productType_oldinsurance_OL"+numberImgOK+"'><option>All</option></select></td>"+
	  "<td class='verticalCenter text-center'></td>"+	
	  "<td class='verticalCenter text-center'></td>"+
	  "<td class='verticalCenter text-center'></td>"+
	  /*"<td class='verticalCenter text-center'></td>"+*/
	  "<td class='verticalCenter text-center'><select class='form-control' id='sl_partner_oldinsurance_OL"+numberImgOK+"'><option data-id='0' value='NONE'>All</option></select></td>"+
	 "</tr>";
		
	$("#tbl_old_insurance_OL>tbody").append(row);		
	
	/*clone ประเภทสัญญา*/
	$('#tbl_old_insurance_OL>tbody>tr:first-child>td:nth-child(2)>select').clone().attr("id","sl_contractType_oldinsurance_OL"+numberImgOK).appendTo("#tr_oldinsurance_OL"+numberImgOK+">td:nth-child(2)");
	$("#sl_contractType_oldinsurance_OL"+numberImgOK+" option[value='']").attr("selected",true);
	var optionValues = [];
	$("#sl_contractType_oldinsurance_OL"+numberImgOK+" option").each(function() {
	    optionValues.push($(this).text());
	});
	
	$('#tbl_old_insurance_OL>tbody>tr:first-child>td:nth-child(5)>select').clone().attr("id","sl_Reinsurance_oldinsurance_OL"+numberImgOK).appendTo("#tr_oldinsurance_OL"+numberImgOK+">td:nth-child(5)");
	$('#tbl_old_insurance_OL>tbody>tr:first-child>td:nth-child(6)>select').clone().attr("id","sl_senior_oldinsurance_OL"+numberImgOK).appendTo("#tr_oldinsurance_OL"+numberImgOK+">td:nth-child(6)");
//	$('#tbl_old_insurance_OL>tbody>tr:first-child>td:nth-child(7)>select').clone().attr("id","sl_fillingChannel_oldinsurance_OL"+numberImgOK).appendTo("#tr_oldinsurance_OL"+numberImgOK+">td:nth-child(7)");
	$('#tbl_old_insurance_OL>tbody>tr:first-child>td:nth-child(7)>select').clone().attr("id","sl_saleChannel_oldinsurance_OL"+numberImgOK).appendTo("#tr_oldinsurance_OL"+numberImgOK+">td:nth-child(7)");

	
	$("#sl_Reinsurance_oldinsurance_OL"+numberImgOK).find("option").removeAttr( "selected" )
	$("#sl_Reinsurance_oldinsurance_OL"+numberImgOK).find("option[value='NONE']").attr("selected",true)
	$("#sl_senior_oldinsurance_OL"+numberImgOK).find("option").removeAttr( "selected" )
	$("#sl_senior_oldinsurance_OL"+numberImgOK).find("option[value='NONE']").attr("selected",true)
//	$("#sl_fillingChannel_oldinsurance_OL"+numberImgOK).find("option").removeAttr( "selected" )
//	$("#sl_fillingChannel_oldinsurance_OL"+numberImgOK).find("option[value='NONE']").attr("selected",true)
	$("#sl_saleChannel_oldinsurance_OL"+numberImgOK).find("option").removeAttr( "selected" )
	$("#sl_saleChannel_oldinsurance_OL"+numberImgOK).find("option[value='NONE']").attr("selected",true)
	/*$("#validate_input12_ol").show();*/
}

function addUWConsider_OL(){
	if($("#div_UW_consider_OL").innerHeight() > 300){
		$("#div_UW_consider_OL").addClass("scroll_insure_many");
	}
			
	var lastImgOK = $('#tbl_UW_consider_OL>tbody>tr:last>td:first').attr("id") || 0;
	var numberImgOK = 0;
				
	if(lastImgOK == 0){
		numberImgOK = 1;
	}else{
		numberImgOK = Number(lastImgOK.replace("imgOK_UWConsider_OL",""))+1;
	}
	
	var row = "";

	row = "<tr id='tr_UWConsider_OL"+numberImgOK+"'>"+
		  "<td id='imgOK_UWConsider_OL"+numberImgOK+"' class='text-center vertical-middle' onclick='imgCheckbox_UWConsider_OL("+numberImgOK+");'>"+
		  	"<i class='glyphicon glyphicon-edit'></i>"+
		  "</td>"+					
		  "<td class='verticalCenter text-center'></td>"+
		  "<td class='verticalCenter text-center'><select class='form-control' id='sl_policyType_UWConsider_OL"+numberImgOK+"' onchange='ddHeath2_select_OL(this.id)'><option>All</option></select></td>"+
		  "<td class='verticalCenter text-center'><select class='form-control' id='sl_productType_UWConsider_OL"+numberImgOK+"'><option>All</option></select></td>"+
		  "<td class='verticalCenter text-center'></td>"+
		  "<td class='verticalCenter text-center'></td>"+
		  "<td class='verticalCenter text-center'></td>"+
		 /* "<td class='verticalCenter text-center'></td>"+*/
		  "<td class='verticalCenter text-center'><select class='form-control' id='sl_partner_UWConsider_OL"+numberImgOK+"'><option data-id='0' value='NONE'>All</option></select></td>"+	
		 "</tr>";
			
	$("#tbl_UW_consider_OL>tbody").append(row);		
	
	/*clone ประเภทสัญญา*/
	$('#tbl_UW_consider_OL>tbody>tr:first-child>td:nth-child(2)>select').clone().attr("id","sl_contractType_UWConsider_OL"+numberImgOK).appendTo("#tr_UWConsider_OL"+numberImgOK+">td:nth-child(2)");
	$("#sl_contractType_UWConsider_OL"+numberImgOK+" option[value='']").attr("selected",true);
	var optionValues = [];
	$("#sl_contractType_UWConsider_OL"+numberImgOK+" option").each(function() {
	    optionValues.push($(this).text());
	});
	
	$('#tbl_UW_consider_OL>tbody>tr:first-child>td:nth-child(5)>select').clone().attr("id","sl_Reinsurance_UWConsider_OL"+numberImgOK).appendTo("#tr_UWConsider_OL"+numberImgOK+">td:nth-child(5)");
	$('#tbl_UW_consider_OL>tbody>tr:first-child>td:nth-child(6)>select').clone().attr("id","sl_senior_UWConsider_OL"+numberImgOK).appendTo("#tr_UWConsider_OL"+numberImgOK+">td:nth-child(6)");
//	$('#tbl_UW_consider_OL>tbody>tr:first-child>td:nth-child(7)>select').clone().attr("id","sl_fillingChannel_UWConsider_OL"+numberImgOK).appendTo("#tr_UWConsider_OL"+numberImgOK+">td:nth-child(7)");
	$('#tbl_UW_consider_OL>tbody>tr:first-child>td:nth-child(7)>select').clone().attr("id","sl_saleChannel_UWConsider_OL"+numberImgOK).appendTo("#tr_UWConsider_OL"+numberImgOK+">td:nth-child(7)");

	$("#sl_Reinsurance_UWConsider_OL"+numberImgOK).find("option").removeAttr( "selected" )
	$("#sl_Reinsurance_UWConsider_OL"+numberImgOK).find("option[value='NONE']").attr("selected",true)
	$("#sl_senior_UWConsider_OL"+numberImgOK).find("option").removeAttr( "selected" )
	$("#sl_senior_UWConsider_OL"+numberImgOK).find("option[value='NONE']").attr("selected",true)
//	$("#sl_fillingChannel_UWConsider_OL"+numberImgOK).find("option").removeAttr( "selected" )
//	$("#sl_fillingChannel_UWConsider_OL"+numberImgOK).find("option[value='NONE']").attr("selected",true)
	$("#sl_saleChannel_UWConsider_OL"+numberImgOK).find("option").removeAttr( "selected" )
	$("#sl_saleChannel_UWConsider_OL"+numberImgOK).find("option[value='NONE']").attr("selected",true)
	/*$("#validate_input12_ol").show();*/
	
}

function addinsuranceIssue_OL(){
	if($("#div_insuranceIssue_OL").innerHeight() > 300){
		$("#div_insuranceIssue_OL").addClass("scroll_insure_many");
	}
	
	var lastImgOK = $('#tbl_insuranceIssue_OL>tbody>tr:last>td:first').attr("id") || 0;
	var numberImgOK = 0;
				
	if(lastImgOK == 0){
		numberImgOK = 1;
	}else{
		numberImgOK = Number(lastImgOK.replace("imgOK_insuranceIssue",""))+1;
	}
			
	var row = "";
	row = "<tr id='tr_insuranceIssue"+numberImgOK+"'>"+
	  "<td id='imgOK_insuranceIssue"+numberImgOK+"' class='text-center vertical-middle' onclick='imgCheckbox_insuranceIssue_OL("+numberImgOK+");'>"+
	  	"<i class='glyphicon glyphicon-edit'></i>"+
	  "</td>"+					
	  "<td class='verticalCenter text-center'></td>"+
	  "<td class='verticalCenter text-center'><select class='form-control' id='sl_policyType_insuranceIssue"+numberImgOK+"' onchange='ddHeath2_select_OL(this.id)'><option value=''>All</option></select></td>"+
	  "<td class='verticalCenter text-center'><select class='form-control' id='sl_productType_insuranceIssue"+numberImgOK+"'><option value=''>All</option></select></td>"+
	  "<td class='verticalCenter text-center'></td>"+
	  "<td class='verticalCenter text-center'></td>"+
	  "<td class='verticalCenter text-center'></td>"+
	  /*"<td class='verticalCenter text-center'></td>"+*/
	  "<td class='verticalCenter text-center'><select class='form-control' id='sl_partner_insuranceIssue"+numberImgOK+"'><option value='NONE'>All</option></select></td>"+
	 "</tr>";
		
	$("#tbl_insuranceIssue_OL>tbody").append(row);	
	
	/*clone ประเภทสัญญา*/
	$('#tbl_insuranceIssue_OL>tbody>tr:first-child>td:nth-child(2)>select').clone().attr("id","sl_contractType_insuranceIssue"+numberImgOK).appendTo("#tr_insuranceIssue"+numberImgOK+">td:nth-child(2)");
	$("#sl_contractType_insuranceIssue"+numberImgOK+" option[value='']").attr("selected",true);
	var optionValues = [];
	$("#sl_contractType_insuranceIssue"+numberImgOK+" option").each(function() {
	    optionValues.push($(this).text());
	});
	

	$('#tbl_insuranceIssue_OL>tbody>tr:first-child>td:nth-child(5)>select').clone().attr("id","sl_Reinsurance_insuranceIssue"+numberImgOK).appendTo("#tr_insuranceIssue"+numberImgOK+">td:nth-child(5)");
	$('#tbl_insuranceIssue_OL>tbody>tr:first-child>td:nth-child(6)>select').clone().attr("id","sl_senior_insuranceIssue"+numberImgOK).appendTo("#tr_insuranceIssue"+numberImgOK+">td:nth-child(6)");
//	$('#tbl_insuranceIssue_OL>tbody>tr:first-child>td:nth-child(7)>select').clone().attr("id","sl_fillingChannel_insuranceIssue"+numberImgOK).appendTo("#tr_insuranceIssue"+numberImgOK+">td:nth-child(7)");
	$('#tbl_insuranceIssue_OL>tbody>tr:first-child>td:nth-child(7)>select').clone().attr("id","sl_saleChannel_insuranceIssue"+numberImgOK).appendTo("#tr_insuranceIssue"+numberImgOK+">td:nth-child(7)");

	$("#sl_Reinsurance_insuranceIssue"+numberImgOK).find("option").removeAttr( "selected" )
	$("#sl_Reinsurance_insuranceIssue"+numberImgOK).find("option[value='NONE']").attr("selected",true)
	$("#sl_senior_insuranceIssue"+numberImgOK).find("option").removeAttr( "selected" )
	$("#sl_senior_insuranceIssue"+numberImgOK).find("option[value='NONE']").attr("selected",true)
//	$("#sl_fillingChannel_insuranceIssue"+numberImgOK).find("option").removeAttr( "selected" )
//	$("#sl_fillingChannel_insuranceIssue"+numberImgOK).find("option[value='NONE']").attr("selected",true)
	$("#sl_saleChannel_insuranceIssue"+numberImgOK).find("option").removeAttr( "selected" )
	$("#sl_saleChannel_insuranceIssue"+numberImgOK).find("option[value='NONE']").attr("selected",true)
/*	$("#validate_input12_cl").show();*/
}

function addinsuranceMax_OL(){
	if($("#div_insuranceMax_OL").innerHeight() > 300){
		$("#div_insuranceMax_OL").addClass("scroll_insure_many");
	}
	
	var lastImgOK = $('#tbl_insuranceMax_OL>tbody>tr:last>td:first').attr("id") || 0;
	var numberImgOK = 0;
			
	if(lastImgOK == 0){
		numberImgOK = 1;
	}else{
		numberImgOK = Number(lastImgOK.replace("imgOK_insuranceMax",""))+1;
	}
			
	var row = "";
	row = "<tr id='tr_insuranceMax"+numberImgOK+"'>"+
	  "<td id='imgOK_insuranceMax"+numberImgOK+"' class='text-center vertical-middle' onclick='imgCheckbox_insuranceMax_OL("+numberImgOK+");'>"+
	  	"<i class='glyphicon glyphicon-edit'></i>"+
	  "</td>"+					
	  "<td class='verticalCenter text-center'></td>"+
	  "<td class='verticalCenter text-center'><select class='form-control' id='sl_policyType_insuranceMax"+numberImgOK+"' onchange='ddHeath2_select_OL(this.id)'><option value=''>All</option></select></td>"+
	  "<td class='verticalCenter text-center'><select class='form-control' id='sl_productType_insuranceMax"+numberImgOK+"'><option value=''>All</option></select></td>"+
	  "<td class='verticalCenter text-center'></td>"+
	  "<td class='verticalCenter text-center'></td>"+
	  "<td class='verticalCenter text-center'></td>"+
	  /*"<td class='verticalCenter text-center'></td>"+*/
	  "<td class='verticalCenter text-center'><select class='form-control' id='sl_partner_insuranceMax"+numberImgOK+"'><option value='NONE'>All</option></select></td>"+
	 "</tr>";
		
	$("#tbl_insuranceMax_OL>tbody").append(row);	
	
	/*clone ประเภทสัญญา*/
	$('#tbl_insuranceMax_OL>tbody>tr:first-child>td:nth-child(2)>select').clone().attr("id","sl_contractType_insuranceMax"+numberImgOK).appendTo("#tr_insuranceMax"+numberImgOK+">td:nth-child(2)");
	$("#sl_contractType_insuranceMax"+numberImgOK+" option[value='']").attr("selected",true);
	var optionValues = [];
	$("#sl_contractType_insuranceMax"+numberImgOK+" option").each(function() {
	    optionValues.push($(this).text());
	});
	

	$('#tbl_insuranceMax_OL>tbody>tr:first-child>td:nth-child(5)>select').clone().attr("id","sl_Reinsurance_insuranceMax"+numberImgOK).appendTo("#tr_insuranceMax"+numberImgOK+">td:nth-child(5)");
	$('#tbl_insuranceMax_OL>tbody>tr:first-child>td:nth-child(6)>select').clone().attr("id","sl_senior_insuranceMax"+numberImgOK).appendTo("#tr_insuranceMax"+numberImgOK+">td:nth-child(6)");
//	$('#tbl_insuranceMax_OL>tbody>tr:first-child>td:nth-child(7)>select').clone().attr("id","sl_fillingChannel_insuranceMax"+numberImgOK).appendTo("#tr_insuranceMax"+numberImgOK+">td:nth-child(7)");
	$('#tbl_insuranceMax_OL>tbody>tr:first-child>td:nth-child(7)>select').clone().attr("id","sl_saleChannel_insuranceMax"+numberImgOK).appendTo("#tr_insuranceMax"+numberImgOK+">td:nth-child(7)");

	$("#sl_Reinsurance_insuranceMax"+numberImgOK).find("option").removeAttr( "selected" )
	$("#sl_Reinsurance_insuranceMax"+numberImgOK).find("option[value='NONE']").attr("selected",true)
	$("#sl_senior_insuranceMax"+numberImgOK).find("option").removeAttr( "selected" )
	$("#sl_senior_insuranceMax"+numberImgOK).find("option[value='NONE']").attr("selected",true)
//	$("#sl_fillingChannel_insuranceMax"+numberImgOK).find("option").removeAttr( "selected" )
//	$("#sl_fillingChannel_insuranceMax"+numberImgOK).find("option[value='NONE']").attr("selected",true)
	$("#sl_saleChannel_insuranceMax"+numberImgOK).find("option").removeAttr( "selected" )
	$("#sl_saleChannel_insuranceMax"+numberImgOK).find("option[value='NONE']").attr("selected",true)

	
	/*	$("#validate_input12_cl").show();*/
}

function imgCheckbox_healthInsurance_OL(id){
	var imgOK = "imgOK_healthInsurance_OL"+id;
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


function imgCheckbox_oldinsurance_OL(id){
	var imgOK = "imgOK_oldinsurance_OL"+id;
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


function imgCheckbox_UWConsider_OL(id){
	var imgOK = "imgOK_UWConsider_OL"+id;
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

function confirmDeletehealthInsurance_OL(){
	if($("#div_health_insurance_OL").innerHeight() > 300){
		$("#div_health_insurance_OL").addClass("scroll_insure_many");
	}else{
		$("#div_health_insurance_OL").removeClass("scroll_insure_many");
	}
	
	var imgOKcount = $("#tbl_health_insurance_OL i.glyphicon-ok").length;
	if(imgOKcount <= 0)
	{	
		message = "กรุณาเลือกรายการที่ต้องการลบ";
		alertError(message);
	}else{
	
	message = "ต้องการลบรายการใช่หรือไม่";
	alertDeleteError(message);
	
	$("#btn_confirm_del").unbind();
	$("#btn_confirm_del").click(function(){
		var lastImgOK = $('#tbl_health_insurance_OL>tbody>tr:last>td:first').attr("id") || 0;	
		var numberImgOK = 0;
		if(lastImgOK == 0){
			numberImgOK = 1;
		}else{
			numberImgOK = Number(lastImgOK.replace("imgOK_healthInsurance_OL",""))+1;
		}
		
		$('#tbl_health_insurance_OL>tbody>tr').each(function(){
			var checked = $(this).find('td:nth-child(1) i').attr("class");
			if(checked == "glyphicon glyphicon-ok"){	
				deleteTableRow($(this));				
			}
		})
	
//		validate_tbl_health_insurance_OL();
		});			
	
	}
}

function confirmDeleteOldInsurance_OL(){
	
	if($("#div_old_insurance_OL").innerHeight() > 300){
		$("#div_old_insurance_OL").addClass("scroll_insure_many");
	}else{
		$("#div_old_insurance_OL").removeClass("scroll_insure_many");
	}
	
	var imgOKcount = $("#tbl_old_insurance_OL i.glyphicon-ok").length;
	if(imgOKcount <= 0)
	{	
		message = "กรุณาเลือกรายการที่ต้องการลบ";
		alertError(message);
	}else{
	
	message = "ต้องการลบรายการใช่หรือไม่";
	alertDeleteError(message);
	
	$("#btn_confirm_del").unbind();
	$("#btn_confirm_del").click(function(){
		var lastImgOK = $('#tbl_old_insurance_OL>tbody>tr:last>td:first').attr("id") || 0;	
		var numberImgOK = 0;
		if(lastImgOK == 0){
			numberImgOK = 1;
		}else{
			numberImgOK = Number(lastImgOK.replace("imgOK_oldinsurance_OL",""))+1;
		}
		
		$('#tbl_old_insurance_OL>tbody>tr').each(function(){
			var checked = $(this).find('td:nth-child(1) i').attr("class");
			if(checked == "glyphicon glyphicon-ok"){	
				deleteTableRow($(this));				
			}
		})
		
		/*validate_tbl_old_insurance_CL();*/
		});			
	}
}

function confirmDeleteUWConsider_OL(){

	if($("#div_UW_consider_OL").innerHeight() > 300){
		$("#div_UW_consider_OL").addClass("scroll_insure_many");
	}else{
		$("#div_UW_consider_OL").removeClass("scroll_insure_many");
	}
	
	var imgOKcount = $("#tbl_UW_consider_OL i.glyphicon-ok").length;
	if(imgOKcount <= 0)
	{	
		message = "กรุณาเลือกรายการที่ต้องการลบ";
		alertError(message);
	}else{
	
	message = "ต้องการลบรายการใช่หรือไม่";
	alertDeleteError(message);
	
	$("#btn_confirm_del").unbind();
	$("#btn_confirm_del").click(function(){
		var lastImgOK = $('#tbl_UW_consider_OL>tbody>tr:last>td:first').attr("id") || 0;	
		var numberImgOK = 0;
		if(lastImgOK == 0){
			numberImgOK = 1;
		}else{
			numberImgOK = Number(lastImgOK.replace("imgOK_UWConsider_OL",""))+1;
		}
		
		$('#tbl_UW_consider_OL>tbody>tr').each(function(){
			var checked = $(this).find('td:nth-child(1) i').attr("class");
			if(checked == "glyphicon glyphicon-ok"){	
				deleteTableRow($(this));				
			}
		})
		
		/*validate_tbl_UW_consider_CL();*/
		});			
	}
}
function imgCheckbox_insuranceIssue_OL(id){
	var imgOK = "imgOK_insuranceIssue"+id;
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

function confirmDeleteinsuranceIssue_OL(){
	if($("#div_insuranceIssue_OL").innerHeight() > 300){
		$("#div_insuranceIssue_OL").addClass("scroll_insure_many");
	}else{
		$("#div_insuranceIssue_OL").removeClass("scroll_insure_many");
	}
	
	var imgOKcount = $("#tbl_insuranceIssue_OL i.glyphicon-ok").length;
	if(imgOKcount <= 0)
	{	
		message = "กรุณาเลือกรายการที่ต้องการลบ";
		alertError(message);
	}else{
	
	message = "ต้องการลบรายการใช่หรือไม่";
	alertDeleteError(message);
	
	$("#btn_confirm_del").unbind();
	$("#btn_confirm_del").click(function(){
		var lastImgOK = $('#tbl_insuranceIssue_OL>tbody>tr:last>td:first').attr("id") || 0;	
		var numberImgOK = 0;
		if(lastImgOK == 0){
			numberImgOK = 1;
		}else{
			numberImgOK = Number(lastImgOK.replace("imgOK_insuranceIssue",""))+1;
		}
		
		$('#tbl_insuranceIssue_OL>tbody>tr').each(function(){
			var checked = $(this).find('td:nth-child(1) i').attr("class");
			if(checked == "glyphicon glyphicon-ok"){	
				deleteTableRow($(this));				
			}
		})
		
		/*validate_tbl_insuranceIssue_OL();*/
		});			
	
	}
}

function imgCheckbox_insuranceMax_OL(id){
	var imgOK = "imgOK_insuranceMax"+id;
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

function confirmDeleteinsuranceMax_OL(){
	if($("#div_insuranceMax_OL").innerHeight() > 300){
		$("#div_insuranceMax_OL").addClass("scroll_insure_many");
	}else{
		$("#div_insuranceMax_OL").removeClass("scroll_insure_many");
	}
	
	var imgOKcount = $("#tbl_insuranceMax_OL i.glyphicon-ok").length;
	if(imgOKcount <= 0)
	{	
		message = "กรุณาเลือกรายการที่ต้องการลบ";
		alertError(message);
	}else{
	
	message = "ต้องการลบรายการใช่หรือไม่";
	alertDeleteError(message);
	
	$("#btn_confirm_del").unbind();
	$("#btn_confirm_del").click(function(){
		var lastImgOK = $('#tbl_insuranceMax_OL>tbody>tr:last>td:first').attr("id") || 0;	
		var numberImgOK = 0;
		if(lastImgOK == 0){
			numberImgOK = 1;
		}else{
			numberImgOK = Number(lastImgOK.replace("imgOK_insuranceMax",""))+1;
		}
		
		$('#tbl_insuranceMax_OL>tbody>tr').each(function(){
			var checked = $(this).find('td:nth-child(1) i').attr("class");
			if(checked == "glyphicon glyphicon-ok"){	
				deleteTableRow($(this));				
			}
		})
		
		/*validate_tbl_insuranceMax_OL();*/
		});			
	
	}
}

/**************************** show case **********************************/
function showcase_basicInfo_OL(response,type,prd_code_temp,prd_code_Clone){
	var typeClone = type;
	var obj = response.Tab_Basic_Information[0];
	$("#key_Insurance_product_ol").val(obj.coreBiz);
	///BEnz เพิ่มไปก่อน เดี๋ยวค่อยลบ ฺ14-11-2019
	
	if  (type == "Clone") {
		$("#th_Name_ol").val("Clone"+obj.nameTH);
	}else {
		$("#th_Name_ol").val(obj.nameTH);
	}
	$("#en_Name_ol").val(obj.nameEN);
	$("#th_marketingName_ol").val(obj.marketing_nameTH);
	$("#en_marketingName_ol").val(obj.marketing_nameEN);
	$("#lb_credit_firstYear_OL option[value="+obj.fyp_credit+"]").attr('selected', true);
	$("#lb_credit_nextYear_OL option[value="+obj.ryp_credit+"]").attr('selected', true);
	$("#lb_reinsurance_OL option[value="+obj.underwrite_opt+"]").attr('selected', true);
	$("#lb_distribution_OL option[value="+obj.distribution_Channel+"]").attr('selected', true);
	$("#lb_saleChannel_OL option[data-id="+obj.sale_channel+"]").attr('selected', true);
	searchPartner_OL();
	if(obj.partner != ""){
		$("#lb_partner_OL option[data-id="+obj.partner+"]").attr('selected', true);
	}
	$("#sel_Type_Additional_contract option[value="+obj.prd_design+"]").attr('selected', true);
	//$("#amount_max_commission").val((obj.max_commission*100).toFixed(2))
	$("#sel_Par_Product_OL option[value="+obj.par_product+"]").attr('selected', true);
	$("#sel_Fighting_Product_OL option[value="+obj.figting_product+"]").attr('selected', true);
	/*เป็น Finance Account + สัญญาประกันภัย*/
	$("#chk_finance_PB_OL").prop("checked",false);
	$("#chk_insurance_contract_OL").prop("checked",false);
	if(obj.fin_acc){
		$("#chk_finance_PB_OL").prop("checked",true);
	}
	if(obj.insurance){
		$("#chk_insurance_contract_OL").prop("checked",true);
	}
	
	/*เปลี่ยนผู้รับประโยชน์หลัก*/
/*	if(obj.first_beneficiary == "INTERESTED"){
		$("#chk_change_main_person").prop("checked",true);
	}*/
	/*ข้อกำหนด*/
	if(obj.fyp_credit !== "NONE" ){
		$("#lb_credit_nextYear_OL").attr("disabled",false);
		
		if(obj.fyp_credit == "CUSTOMER_FEE"){
			$("input[name='chk_first_pay_premium_OL[]'][value='CREDIT_CARD']").attr("disabled",true);
		}else{
			$("input[name='chk_first_pay_premium_OL[]'][value='CREDIT_CARD']").attr("disabled",false);			
		}
		
	}else{
		$("#lb_credit_nextYear_OL").attr("disabled",true);
		$("input[name='chk_first_pay_premium_OL[]'][value='CREDIT_CARD']").prop("checked",false)
		$("input[name='chk_first_pay_premium_OL[]'][value='CREDIT_CARD']").attr("disabled",true);
		$("input[name='chk_next_pay_premium_OL[]'][value='CREDIT_CARD']").prop("checked",false).attr("disabled",true);
	}
	
	if(obj.ryp_credit !== "NONE"){
		$("input[name='chk_next_pay_premium_OL[]'][value='CREDIT_CARD']").attr("disabled",false);
	}else{
		$("input[name='chk_next_pay_premium_OL[]'][value='CREDIT_CARD']").prop("checked",false).attr("disabled",true);
	}
	/*if($("#lb_credit_nextYear_OL").val() != ""){
		$("#lb_credit_nextYear_OL").attr("disabled",false);
	}*/
		
	if(obj.reinsurance_opt != "NONE"){
		$("#rd_reinsure_OL1").prop("checked",true)
		$("#rd_filing_rs_OL1").prop("checked",true)
		chk_reinsure_OL(1);
		$("#lb_reinsure_OL option[value='"+obj.reinsurance_opt+"']").attr("selected",true)
	}else{
		$("#rd_reinsure_OL2").prop("checked",true)
		$("#rd_filing_rs_OL2").prop("checked",true)
		chk_reinsure_OL(2)
	}
	$("#lb_AML_CFT_OL option[value="+obj.score_aml+"]").attr('selected', true);
	//$("#sel_Loan_Type_OL option[value="+obj.loan_type+"]").attr('selected', true);
	
	// ตาราง base plan หา type ของมันก่อน เพื่อนำไปหยอดลงในตาราง baseplan
	var prd_code_base = [];
	var cov_code_base = [];
	var cov_cat_id_base = [];
	var cat_code_base = [];
	for(i in response.Tab_Basic_Information[0].type_coverage){
		var obj = response.Tab_Basic_Information[0].type_coverage[i];
			for(ii in response.Tab_Basic_Information[0].type_coverage[i].type){
				var obj_type = response.Tab_Basic_Information[0].type_coverage[i].type[ii];
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
	
	// ตาราง base plan
	var rate_cat_NAR_OL = $("#rate_cat_NAR_OL").val();
	for(i in response.Tab_Basic_Information[0].basePlan){
		var obj_base = response.Tab_Basic_Information[0].basePlan[0];
		var obj_base_pm = response.Tab_Basic_Information[0].basePlan[i].pm_rate[0][0];
		var obj_basepmChild = response.Tab_Basic_Information[0].basePlan[i].pm_rate[0][1];
		var obj_base_nar = response.Tab_Basic_Information[0].basePlan[i].nar[0][0];
		//var obj_age_type = response.Tab_Basic_Information[0].type_coverage[0].type;
		
		var changeFileModal = 'modalGet_selectFile_OL("'+obj_base.cov_code+'","fileuploads_PMRate1_OL","ip_fileuploads_OL_PM_Rate1_Show_1","span_PM_Rateopen_1","validate_rateP1_OL","span_PM_Ratedownload_1","'+obj_base.cov_cat_id+'")';
		var addrowChild = 'addrowChildBase_OL("1","'+obj_base.nameTH+'",this);';
		if(obj_base_pm){
			var get_show_fileModal_PMRate = 'openFileTextProduct_OL("'+obj_base_pm.filename+'", "'+obj_base_pm.ref+'",41,"tb_input_fileSee_modal_pmRate_OL", "modal_input_fileSee_PMRate_OL")';
			var get_download_PMRate = 'openFile_target("'+obj_base_pm.filename+'","'+obj_base_pm.ref+'","txt_download")';
		}
		if(obj_base_nar){
			var get_show_fileModal_NAR = 'openFileTextProduct_OL("'+obj_base_nar.filename+'", "'+obj_base_nar.ref+'",63,"tb_input_fileSee_modal_NAR_OL", "modal_input_fileSee_NAR_OL")';
			var get_download_NAR = 'openFile_target("'+obj_base_nar.filename+'","'+obj_base_nar.ref+'","txt_download")';
			
		}
		//Benz Clone 14-11-2019
		var prd_code = "";
		if (type == "Clone") {
			 prd_code 	= prd_code_Clone;
		}else {
			prd_code 	= obj_base.prd_code;
		}
		
		row = "<tr  id=\"rowLookupValue_tbody_PM_Rate1\" data-id='1' data-level='1'>" +	
		"<td class=\"text-left verticalCenter borderBlack\">"+
			"<label style=\"text-decoration: underline; color: blue;\">"+obj_base.cov_code+"</label>"+
			"<input type='hidden' id='prd_code_base_PM' value='"+prd_code+"' > "+
			"<input type='hidden' id='cov_cat_id_base_PM' value='"+obj_base.cov_cat_id+"'>"+
		"</td>"+	
		"<td class=\"text-left verticalCenter fontcolortable1 borderBlack\">"+"<label>"+obj_base.nameTH+"</label>"+"</td>"+
		"<td class=\"text-center verticalCenter borderBlack\">"+
		"<i class=\"glyphicon glyphicon-plus icon-blue-circle\"  data-id=\'1\' data-topic=\'"+obj_base.cov_code+"\' data-type=\'1\' id=\"addrow1_1\" onclick='"+addrowChild+"'></i>"+
		"</td>";
		if(obj_base_pm){
			row += "<td colspan=\"2\" class=\"verticalCenter borderBlack\">"+
				"<input type='hidden' id='fileId_base_PM' value='"+obj_base_pm.fileID+"'/>"+
				"<input type='hidden' id='rate_cat_id_base_PM' value='"+obj_base_pm.rate_cat_id+"'/>"+
				"<input type='hidden' id='rate_layout_id_base_PM' value='"+obj_base_pm.rate_layout_id+"'/>"+
				"<div class=\"input-group col-xs-12\">"+
				"<input type=\"file\" accept=\".txt\" id=\"ip_fileuploads_OL_PM_Rate1\" style=\"display: none\">"+
				"<input type=\"text\" class=\"form-control\" id=\"ip_fileuploads_OL_PM_Rate1_Show_1\" value='"+obj_base_pm.filename+"'readonly> " +
				"<span class=\"input-group-btn\"><button class=\"btn btn-default btn-primary\" onclick='"+changeFileModal+"' type=\"button\" id=\"bt_uploadfilePM_Rate1\" data-toggle=\"modal\" data-target=\"#modal_input_PMRate_OL\"><font id='validate_rateP1_OL' class='require_file' style='color: red;' hidden>*</font>...</button>"+
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
			"<span data-id=\'span_PM_Ratedownload_1\' class=\'glyphicon glyphicon-download-alt activecolorblue\' onclick='"+get_download_PMRate+"'></span>"+
		"</a>"+
		"</td>";
		
		}else{
			row += "<td colspan=\"2\" class=\"verticalCenter borderBlack\">"+
			"<input type='hidden' id='fileId_base_PM' value=''/>"+
			"<input type='hidden' id='rate_cat_id_base_PM' value=''/>"+
			"<input type='hidden' id='rate_layout_id_base_PM' value=''/>"+
			"<div class=\"input-group col-xs-12\">"+
			"<input type=\"file\" accept=\".txt\" id=\"ip_fileuploads_OL_PM_Rate1\" style=\"display: none\">"+
			"<input type=\"text\" class=\"form-control\" id=\"ip_fileuploads_OL_PM_Rate1_Show_1\" value=''readonly> " +
			"<span class=\"input-group-btn\"><button class=\"btn btn-default btn-primary\" onclick='"+changeFileModal+"' type=\"button\" id=\"bt_uploadfilePM_Rate1\" data-toggle=\"modal\" data-target=\"#modal_input_PMRate_OL\">" +
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
			if  (type == "Clone") {
				var prd_code_old =	prd_code_temp ;
			    var filename_old = 	obj_base_nar.filename;
				if( filename_old.indexOf(prd_code_old) >= 0){
					var filename_new = filename_old.replace(prd_code_old,prd_code_Clone);
				}
			}else {
				filename_new = obj_base_nar.filename;
			}
			row += "<td class=\"verticalCenter borderBlack\">"+
			"<div id='form_input_file' class='input-group'>"+
				"<input type='hidden' id='fileId_base_NAR_OL' value='"+obj_base_nar.fileID+"'/>"+
				"<input type='hidden' id='rate_cat_id_base_NAR_OL' value='"+obj_base_nar.rate_cat_id+"'/>"+
				"<input type='hidden' id='rate_layout_id_base_NAR_OL' value='"+obj_base_nar.rate_layout_id+"'/>"+
				"<input type='text' class='form-control' id='fileuploads_NARText1_OL' value='"+filename_new+"' readonly=''>"+ 
				"<label class='input-group-btn'> "+
					
					"<span id='spanNAR1_OL' class='btn btn-primary' >"+
					"<font id='validate_NAR1_OL' style='color: red;' hidden>*</font><b>...</b>"+
					"<input id='fileuploads_NAR1_OL' type='file' accept='text/plain' style='display: none;' value='"+filename_new+"'>"+
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
			"<span data-id=\'span_PM_RatedownloadNAR_1\' class=\'glyphicon glyphicon-download-alt activecolorblue\' onclick='"+get_download_NAR+"'></span>"+
			"</a>"+
			"</td>";
		
			
		}else{
			row += "<td class=\"verticalCenter borderBlack\">"+
			"<div id='form_input_file' class='input-group'>"+
				"<input type='hidden' id='fileId_base_NAR_OL' value=''/>"+
				"<input type='hidden' id='rate_cat_id_base_NAR_OL' value='"+rate_cat_NAR_OL+"'/>"+
				"<input type='hidden' id='rate_layout_id_base_NAR_OL' value=''/>"+
				"<input type='text' class='form-control' id='fileuploads_NARText1_OL' readonly=''>"+ 
				"<label class='input-group-btn'> "+
					"<span id='spanNAR1_OL' class='btn btn-primary' >"+
					/*"<font id='validate_NAR1_CL' style='color: red;'>*</font>" +*/
					"<b>...</b>"+
					"<input id='fileuploads_NAR1_OL' type='file' accept='text/plain' style='display: none;'>"+
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
		
		$("#tb_PM_Rate_OL tbody").append(row);
		$(".autoComma").autoNumeric('init',{vMin: '0.00', vMax: '999999999.99'});
		
		/*ลูก*/
		if(obj_basepmChild){
			
				var get_show_fileModal_PMRate = 'openFileTextProduct_OL("'+obj_basepmChild.filename+'", "'+obj_basepmChild.ref+'",41,"tb_input_fileSee_modal_pmRate_OL", "modal_input_fileSee_PMRate_OL")';
				var get_download_PMRate = 'openFile_target("'+obj_basepmChild.filename+'","'+obj_basepmChild.ref+'","txt_download")';
			
				var name_tr = "rowLookupValue_tbody_PM_Rate1_1";
				var removerowChild = 'removerowChildBase_OL("'+name_tr+'","1")';
				var changeFileModal = 'modalGet_selectFile_OL("'+obj_base.cov_code+'","fileuploads_PMRate1_OL","ip_fileuploads_OL_PM_Rate1_Show_1_1","span_PM_Rateopen_1_1","validate_rate1_1","span_PM_Ratedownload_1_1","'+obj_base.cov_cat_id+'")';
				new_row = 	"<tr id=\"rowLookupValue_tbody_PM_Rate1_1\" data-id=\"1\" data-parent=\"1\" data-level='2' data-group='1'>"+
				"<td class=\'text-center verticalCenter borderBlack\'  class=\'text-center verticalCenter borderBlack\'>" +
					"<input type='hidden' id='prd_code_base_PM' value='"+prd_code+"' > "+
					"<input type='hidden' id='cov_cat_id_base_PM' value='"+obj_base.cov_cat_id+"'>"+
				"</td>"+
				"<td class=\"text-left verticalCenter fontcolortable1 borderBlack\">"+
					"<label>"+obj_base.nameTH+"</label>"+
				"</td>"+
				"<td class=\"text-center verticalCenter borderBlack\">"+
					"<i class=\"glyphicon glyphicon-minus icon-blue-circle icon_active \"  data-id=\'"+rowChild+"\' data-topic=\'"+rowChild+"\' data-type=\'2\' id=\"removerow_"+rowChild+"\" onclick='"+removerowChild+"'></i>"+
				"</td>"+
				"<td colspan='2' class=\"text-center verticalCenter borderBlack\">"+
					"<div class=\"input-group col-xs-12\">"+
						"<input type='hidden' id='fileId_base_PM' value='"+obj_basepmChild.fileID+"'>"+
						"<input type='hidden' id='rate_cat_id_base_PM' value='"+obj_basepmChild.rate_cat_id+"'>"+
						"<input type='hidden' id='rate_layout_id_base_PM' value='"+obj_basepmChild.rate_layout_id+"'>"+
						"<input type=\"file\" accept=\".txt\" id=\"ip_fileuploads_OL_PM_Rate1_1\" style=\"display: none\">"+
						"<input type=\"text\" class=\"form-control\" id=\"ip_fileuploads_OL_PM_Rate1_Show_1_1\" value='"+obj_basepmChild.filename+"' readonly> " +
						"<span class=\"input-group-btn\"><button class=\"btn btn-default btn-primary\" type=\"button\" " +
								"onclick ="+changeFileModal+" id=\"bt_uploadfilePM_Rate1_1\" data-toggle=\"modal\" data-target=\"#modal_input_PMRate_OL\">" +
								"...</button>"+
						"</span>"+
					"</div>"+
				"</td>"+
				"<td class='text-center verticalCenter borderBlack'>"+
					"<a id='span_PM_Rateopen_1_1' class='active_grey'>"+
						"<span class='glyphicon glyphicon-eye-open activecolorblue' onclick='"+get_show_fileModal_PMRate+"'></span>"+
					"</a>"+
				"</td>"+
				"<td class=\"text-center verticalCenter borderBlack\">" +
				"<a id='span_PM_Ratedownload_1_1' class='active_grey'>"+
					"<span data-id=\'span_PM_Ratedownload_1\' class=\'glyphicon glyphicon-download-alt activecolorblue\' onclick='"+get_download_PMRate+"'></span>"+
					"</a>"+
					"</td>"+
					"<td class=\"verticalCenter borderBlack\"></td>"+
					"<td class=\"verticalCenter borderBlack\"></td>"+
					"<td class=\"verticalCenter borderBlack\"></td>"+
					"<td class=\"verticalCenter borderBlack\"></td>"+
			    "</tr>";	
				$("#tb_PM_Rate_OL tbody").append(new_row)		
				
				
		}
		
		// placeholder ของไฟล์ที่เลือกมา
		var layout_name = $("#layout_NAR1_OL").val();
		//var layout_name2 = $("#layout_NAR2_OL").val();
		//var base_code = $("#tb_Choose_primary_insurance_modal input[type='radio']:checked").parent().parent().find('td:nth-child(2) label').text();
		var base_code = obj_base.cov_code;
		var product_code_main = $("#pass_Insurance_product_ol").val();
		var layout = layout_name+""+base_code+"_"+product_code_main;
		//var layout2 = layout_name2+""+base_code+"_"+product_code_main;
		//var placeholder_text = layout+".txt" + " หรือ " + layout2+".txt";
		var placeholder_text = layout+".txt"
		// NAR
		$("#fileuploads_NARText1_OL").attr("placeholder",placeholder_text);
		var uploadfile2 = "selectFileRate_OL(2,'fileuploads_NAR1_OL','"+layout+"','','','span_PM_RateopenNAR_1','span_PM_RatedownloadNAR_1')";
		$("#fileuploads_NAR1_OL").attr("onchange",uploadfile2);
		
		// Get Case BasePlan
			get_case_base_OL(obj_base.cov_code,obj_base.cov_cat_id,product_code_main,false)
	}
	//ดึงข้อมูล base plan ที่ get case มาหาข้อมูลลง
	
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
					var prd_rider_code = "";
					if (type == "Clone") {
						 if (obj_type.prd_code == prd_code_temp) {
							 prd_rider_code = prd_code_Clone;
						 }else{
							 prd_rider_code = obj_type.prd_code;
						 }
					}else {
						 prd_rider_code = obj_type.prd_code;
					}
					prd_code_rider.push(prd_rider_code);
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
	var sl_prd_design = "";
	var row2 = "";
	$("#div_Type_Additional_contract_OL div").each(function(){
		if ($(this).find('input').val() != "OPTIONAL" && $(this).find('input').val() != "BUNDLE"){
			var value = $(this).find('input').val();
			var text = $(this).find('label').text()
			row2 += "<option value='"+value+"'>"+text+"</option>"
		}
	})
	sl_prd_design = row2;
	var rCode = [];
	var row = ""
	var numberImgOK = 0;
	var rowChild = 1;
	var rate_cat_id_NAR = $("#rate_cat_NAR_OL").val();
	var layout1 = $("#layout_NAR1_OL").val();
	var layout2 = $("#layout_NAR2_OL").val();
	var type_rider = "";
	for(i in response.Tab_Basic_Information[0].rider){
		var obj_rider = response.Tab_Basic_Information[0].rider[i];
		var obj_rider_pm = response.Tab_Basic_Information[0].rider[i].pm_rate[0];
		var obj_pmChild = response.Tab_Basic_Information[0].rider[i].pm_rate[1];
		var obj_rider_nar = response.Tab_Basic_Information[0].rider[i].nar[0];
		var prd_design = response.Tab_Basic_Information[0].rider[i].prd_design;
		
		//if( prd_design != "BUNDLE"){
			var count_row = $("#tb_Additional_contract_OL>tbody>tr").length;
			if(count_row > 0){
				var numberImgOK = Number($("#tb_Additional_contract_OL>tbody>tr:last").attr("data-id"));	
			}else{
				var numberImgOK = 0;
			}
			numberImgOK++;
			
			//num = Number(num) + Number(i);
			//var obj_age_type = response.Tab_Basic_Information[0].type_coverage[num];
			obj = {};
			obj["code"] = obj_rider.cov_code;
			rCode.push(obj)

		//	var numberImgOK = Number(i) + Number(1);
			var newID = "imgOK_"+numberImgOK;
			var addrowChild = 'addrowChild_OL("'+numberImgOK+'","'+obj_rider.nameTH+'","'+obj_rider.biz_code+'",this);';
			var changeFileModal = 'modalGet_selectFile_OL("'+obj_rider.cov_code+'","fileuploads_PMRate1_OL","ip_fileuploads_OL_Additional_contract_Show_'+numberImgOK+'","span_Additional_contractopen_'+numberImgOK+'","validate_Additional_OL_'+numberImgOK+'_OL","span_Additional_contractdownload_'+numberImgOK+'","")';
			if(obj_rider_pm){
				var getShowFileRiderRMRate = 'openFileTextProduct_OL("'+obj_rider_pm.filename+'", "'+obj_rider_pm.ref+'", 41,"tb_input_fileSee_modal_pmRate_OL","modal_input_fileSee_PMRate_OL")';
				var getDownloadFileRiderPMRate = 'openFile_target("'+obj_rider_pm.filename+'","'+obj_rider_pm.ref+'","txt_download")';
				
			}
			if(obj_pmChild){
				var getShowFileRiderRMRate_child = 'openFileTextProduct_OL("'+obj_pmChild.filename+'", "'+obj_pmChild.ref+'", 41,"tb_input_fileSee_modal_pmRate_OL","modal_input_fileSee_PMRate_OL")';
				var getDownloadFileRiderPMRate_child = 'openFile_target("'+obj_pmChild.filename+'","'+obj_pmChild.ref+'","txt_download")';
				
			}
			if(obj_rider_nar){
				var getShowFileRiderNAR = 'openFileTextProduct_OL("'+obj_rider_nar.filename+'", "'+obj_rider_nar.ref+'", 41,"tb_input_file_modal_NAR_OL","modal_input_file_NAR_OL")';
				var getDownloadFileRiderNAR = 'openFile_target("'+obj_rider_nar.filename+'","'+obj_rider_nar.ref+'","txt_download")';
				
			}
			
			for(ii=0 ; ii<cov_code_rider.length ; ii++){
				if(obj_rider.cov_code == cov_code_rider[ii]){
					type_rider = cov_cat_id_rider[ii];
				}
			}
			 row = "<tr id=\"tr_Additional_contract_"+numberImgOK+"\" data-id=\""+numberImgOK+"\" data-level=\"1\">"+
				"<td class=\'text-center verticalCenter borderBlack\'  class=\'text-center verticalCenter borderBlack\' id=\""+newID+"\" onclick=\'imgCheckbox(id)\'>"
					if(prd_design != "OPTIONAL" && prd_design != "BUNDLE"){
						row += "<i class=\'glyphicon glyphicon-edit\'></i>" 
					}
					row += "</td>"+
				"<td class='text-center verticalCenter fontcolortable2 borderBlack font-bold'>" +
					"<input type='hidden' id='hd_prdDesign_OL"+numberImgOK+"' value=''/>"
					if(prd_design == "OPTIONAL"){
						row += "<label class='font-term-green font-bold'>Optional</label>"
					}else if(prd_design == "BUNDLE"){
						row += "<label class='font-term-green font-bold'>Bundle</label>"
					}else{
						row += "<select class='form-control width100px' id='sel_prd_design_"+numberImgOK+"' onchange='covert_hiddenPrdDesign(this)'>"+sl_prd_design+"</select>"
					}
				row += "</td>"+
						"<td class=\"text-left verticalCenter	borderBlack\">"
				if(prd_design == "BUNDLE"){
					row += "<label style=\"text-decoration: underline; color: blue;\">"+obj_rider.cov_code+"</label>"
				}else{
					row += "<label style=\"text-decoration: underline; color: blue;\">"+obj_rider.prd_code+"</label>"
				}
				row += "<input type='hidden' id='prd_code_rider_"+numberImgOK+"' value='"+obj_rider.prd_code+"'>"+
					"<input type='hidden' id='cov_code_rider_"+numberImgOK+"' value='"+obj_rider.cov_code+"'>"+
				"</td>"+
				"<td class=\"text-center verticalCenter fontcolortable2 borderBlack font-bold\">"+obj_rider.biz_code+"" +
					"<input type='hidden' id='cov_cat_id_rider"+numberImgOK+"' value='"+type_rider+"'>" +
				"</td>"+
				"<td class=\"text-left verticalCenter fontcolortable2 borderBlack\">"
				if(prd_design == "BUNDLE"){
					row += "<label>"+obj_rider.nameTH_coverage+"</label>"
				}else{
					row += "<label>"+obj_rider.nameTH+"</label>"
				}
				row +=	"</td>"+
				"<td class=\"text-center verticalCenter borderBlack\">"
					if(obj_pmChild ){
							row += 	"<i class=\"glyphicon glyphicon-plus icon-blue-circle disabledAll\"  data-id=\'"+numberImgOK+"\' data-topic=\'"+obj_rider.cov_code+"\' data-type=\'1\' id=\"addrow1_"+numberImgOK+"\" onclick='"+addrowChild+"'></i>"	
					}else{
							row += 	"<i class=\"glyphicon glyphicon-plus icon-blue-circle disabledAll\"  data-id=\'"+numberImgOK+"\' data-topic=\'"+obj_rider.cov_code+"\' data-type=\'1\' id=\"addrow1_"+numberImgOK+"\" onclick='"+addrowChild+"'></i>"
					}
				//"<i class=\"glyphicon glyphicon-plus icon-blue-circle\"  data-id=\'"+numberImgOK+"\' data-topic=\'"+obj_rider.cov_code+"\' data-type=\'1\' id=\"addrow1_"+numberImgOK+"\" onclick='"+addrowChild+"'></i>"+
				row += "</td>";
			 
			 	if(obj_rider_pm){
			 		row += "<td class=\"verticalCenter borderBlack\">"+
								"<div class=\"input-group col-xs-12\">"+
								"<input type='hidden' id='fileId_rider_PM"+numberImgOK+"' value='"+obj_rider_pm.fileID+"'/>"+
								"<input type='hidden' id='rate_cat_id_rider_PM"+numberImgOK+"' value='"+obj_rider_pm.rate_cat_id+"'/>"+
								"<input type='hidden' id='rate_layout_id_rider_PM"+numberImgOK+"' value='"+obj_rider_pm.rate_layout_id+"'/>"+
								"<input type=\"file\" accept=\".txt\" id=\"ip_fileuploads_Additional_contract"+numberImgOK+"\" style=\"display: none\">"+
								"<input type=\"text\" class=\"form-control clear_val\" id=\"ip_fileuploads_OL_Additional_contract_Show_"+numberImgOK+"\" value='' readonly> " +
								"<span class=\"input-group-btn\"><button class=\"btn btn-default btn-primary disabledAll\" type=\"button\" id=\"bt_uploadfileAdditional_contract"+numberImgOK+"\"  onclick='"+changeFileModal+"' data-toggle=\"modal\" data-target=\"#modal_input_PMRate_OL\">" +
										"<font id='validate_Additional_OL_"+numberImgOK+"_OL' class='require_file' style='color: red;' hidden>*</font>...</button>"+
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
					"<span data-id='span_Additional_contractdownload_"+numberImgOK+"' class='glyphicon glyphicon-download-alt activecolorblue' onclick='"+getDownloadFileRiderPMRate+"'></span>"+
					"</a>"+
					"</td>"
			 	}else{
			 		row += "<td class=\"verticalCenter borderBlack\">"+
								"<div class=\"input-group col-xs-12\">"+
								"<input type='hidden' id='fileId_rider_PM"+numberImgOK+"' value=''/>"+
								"<input type='hidden' id='rate_cat_id_rider_PM"+numberImgOK+"' value=''/>"+
								"<input type='hidden' id='rate_layout_id_rider_PM"+numberImgOK+"' value=''/>"+
								"<input type=\"file\" accept=\".txt\" id=\"ip_fileuploads_Additional_contract"+numberImgOK+"\" style=\"display: none\">"+
								"<input type=\"text\" class=\"form-control clear_val\" id=\"ip_fileuploads_OL_Additional_contract_Show_"+numberImgOK+"\" readonly> " +
								"<span class=\"input-group-btn\"><button class=\"btn btn-default btn-primary disabledAll\" type=\"button\" id=\"bt_uploadfileAdditional_contract"+numberImgOK+"\"  onclick='"+changeFileModal+"' data-toggle=\"modal\" data-target=\"#modal_input_PMRate_OL\">" +
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
					"</td>"
			 	}
				row +=  "</tr>"
				$("#tb_Additional_contract_OL tbody").append(row);
				
				/*ลูก*/
			/*	if(obj_pmChild){
						var removerowChild = 'removerowChild_OL("tr_Additional_contract_'+numberImgOK+'_'+rowChild+'","'+numberImgOK+'");';
						var changeFileModal2 = 'modalGet_selectFile_OL("'+obj_rider.cov_code+'","fileuploads_PMRate1_OL","ip_fileuploads_OL_Additional_contract_Show_'+numberImgOK+'_'+rowChild+'","span_Additional_contractopen_'+numberImgOK+'_'+rowChild+'","validate_rate'+numberImgOK+'_'+rowChild+'","span_Additional_contractdownload_'+numberImgOK+'_'+rowChild+'")';
						var row2 = "<tr id=\"tr_Additional_contract_"+numberImgOK+"_"+rowChild+"\" data-id=\""+numberImgOK+"\" data-parent=\""+numberImgOK+"\" data-level='2' data-group='"+numberImgOK+"'>"+
										"<td class=\'text-center verticalCenter borderBlack\'  class=\'text-center verticalCenter borderBlack\'></td>"+
										"<td class=\'text-center verticalCenter borderBlack\'  class=\'text-center verticalCenter borderBlack\'></td>"+
										"<td class=\"text-center verticalCenter	borderBlack\">"+
											"<input type='hidden' id='prd_code_rider_"+numberImgOK+"_"+rowChild+"' value='"+obj_rider.prd_code+"'>" +
											"<input type='hidden' id='cov_code_rider_"+numberImgOK+"_"+rowChild+"' value='"+obj_rider.cov_code+"'>"+
										"</td>"+
											"<td class=\"text-center verticalCenter fontcolortable2 borderBlack font-bold\">"+obj_rider.biz_code +
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
												"<input type=\"text\" class=\"form-control\" id=\"ip_fileuploads_OL_Additional_contract_Show_"+numberImgOK+"_"+rowChild+"\" value='"+obj_pmChild.filename+"' readonly> "+
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
											"<span data-id=\'span_Additional_contractdownload_"+rowChild+"\' class=\'glyphicon glyphicon-download-alt activecolorblue\'  onclick='"+getDownloadFileRiderPMRate_child+"'></span>"+
										"</a>"+
										"</td>"+
									"</tr>"
								
						$("#tb_Additional_contract_OL tbody").append(row2)			
				}*/
				
			$("#div_Type_Additional_contract_OL input[name='chk_Type_Additional_contract_OL[]'][value='"+obj_rider.prd_design+"']" ).prop("checked",true)
			$("#sel_prd_design_"+numberImgOK).find("option[value='"+obj_rider.prd_design+"']").attr("selected","selected")
			$("#hd_prdDesign_OL"+numberImgOK).val(obj_rider.prd_design)
			// NAR
			var product_code_main = $("#pass_Insurance_product_ol").val();
			var cov_code = obj_rider.cov_code ;
			var layout_name1 = layout1+cov_code+"_"+product_code_main;
			var layout_name2 = layout2+cov_code+"_"+product_code_main;
			var placehoder_text = layout_name1+".txt" + " หรือ " + layout_name2+".txt";
			$("#ip_fileuploads_AdditionalNAR_contract_"+numberImgOK).attr("placeholder",placehoder_text);
			var uploadfile2 = "selectFileRate_OL(22,'ip_fileuploads_OL_AdditionalNAR_contract_Show_"+numberImgOK+"','"+layout_name1+"','"+layout_name2+"','','span_Additional_contractopenNAR_"+numberImgOK+"')";
			$("#ip_fileuploads_OL_AdditionalNAR_contract_Show_"+numberImgOK).attr("onchange",uploadfile2);
		
			/*ไปดึงข้อมูล ของ riders*/
			if(prd_design != "BUNDLE"){
				get_case_rider_OL("PR",obj_rider.cov_code,type_rider,obj_rider.prd_code,numberImgOK,false,obj_rider.biz_code,obj_rider.nameTH)
				disabled_coverageRider_OL(obj_rider.prd_code)
			}else{
				
				get_case_rider_OL("R",obj_rider.cov_code,type_rider,obj_rider.prd_code,numberImgOK,true,obj_rider.biz_code,obj_rider.nameTH_coverage)
			}
			
		//}
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
	var id_bundle = 1;
	if( (response.Tab_Basic_Information[0].age_coordinates + '').length > 0 ){
		$("#div_ageRange_OL").css("display","block");
		var sl_ageCoordinate = $("#sl_unit_age_coordinates_OL").val();
		var cov_base = $("#tb_PM_Rate_OL tbody>tr:first").find('td:nth-child(1) label').text();
		
		//Khwan fix endorse
		$("#tb_ageRange_OL tbody>tr").remove();
		
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
			/*$("#tb_ageRange_OL tbody>tr").each(function(){
				if($(this).find('td:nth-child(1) #prd_rider_code').val() == obj_age.prd_rider_code){
					$(this).find('td:nth-child(4) input[type="number"]').val(obj_age.min_issue_age)
					$(this).find('td:nth-child(5) option[value='+obj_age.min_issue_age_unit+']').attr('selected', true);
					$(this).find('td:nth-child(6) input[type="number"]').val(obj_age.max_issue_age)
					$(this).find('td:nth-child(7) option[value='+obj_age.max_issue_age_unit+']').attr('selected', true);
					$(this).find('td:nth-child(8) input[type="number"]').val(obj_age.max_insure_age)
					$(this).find('td:nth-child(9) option[value='+obj_age.max_insure_age_unit+']').attr('selected', true);
				}
			})*/
			
			//Khwan fix endorse
			var type = obj_age.type;
			//console.log("type>> "+type);
			if(type == "E"){
				
				$("#tb_ageRange_OL tbody>tr").each(function(){
					var this_id = $(this).attr("data-id");
					var prd_rider_code = $(this).find("td:nth-child(1) #prd_rider_code").val();
					
					if(obj_age.main_rider_code == prd_rider_code){
						main_id = this_id;
					}
				});
				
				var count_child = $("#tb_ageRange_OL tbody>tr[data-parent='"+main_id+"']").length;
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
//			Benz Clone 29-10-2019
			var prd_rider_code = "";
			if (typeClone == "Clone") {
				 if (obj_age.prd_rider_code == prd_code_temp) {
					 prd_rider_code = prd_code_Clone;
				 }else{
					 prd_rider_code = obj_age.prd_rider_code;
				 }
			}else {
				 prd_rider_code = obj_age.prd_rider_code;
			}
			
			//main row
				row_age = "<tr id='tr_ageRange_CV"+numrow3+"' data-id='"+numrow3+"' data-parent='"+data_parent+"' data-level='"+data_level+"' data-type='"+data_level+"'>"+											
				  "<td class='text-left verticalCenter borderBlack'>"
				  if(obj_age.cov_code == cov_base){
					  row_age += "<label class='font-term-purple font-bold'>"+obj_age.cov_code+"</label>"+
					  			"<input type='hidden' id='prd_rider_code' value='"+prd_rider_code+"' >"+
					  			"<input type='hidden' id='cov_code' value='"+obj_age.cov_code+"' >"
				  }else{
					  if(type == "E" ){
						  row_age += "<div class='input-group col-xs-12'><input type='hidden' id='main_rider_code' value='"+obj_age.main_rider_code+"'>"+
						  	"<input type='hidden' id='prd_rider_code' value='"+prd_rider_code+"'>"+
						  	"<input type='hidden' id='cov_code' value='"+obj_age.cov_code+"' >"+
							"<div id='div_endorse_name"+numrow3+"' class='filename font-term-yellow font-bold'>"+obj_age.cov_code+"</div>"+			
								"<a class='open-AddEndorse-OL' data-toggle='modal' data-parent='"+main_id+"' data-id='"+numrow3+"' data-code=''><button class='btn btn-default btn-primary' type='button' id='btn_endorse_OL"+numrow3+"'>...</button></a>"+ 									
							"</div>"
					  }else{
						  
						  /*check bundle*/
						  var arr_bundle = [];
						  $("#tb_Additional_contract_OL tbody>tr").each(function(){
							  if($(this).find('td:nth-child(2) label').text() == "Bundle"){
								  var rowID = $(this).attr('id')
								  	  rowID = rowID.replace("tr_Additional_contract_","")	
									  arr_bundle.push($(this).find('td:nth-child(3) #prd_code_rider_'+rowID).val())
							  }
						  })
						  var flag_bundle_age = false;
						  var save_arr_bundle = arr_bundle.join(",");
						  var split_arr_bundle = [];
						      split_arr_bundle = save_arr_bundle.split(",");
						  for(var i=0 ; i < split_arr_bundle.length ; i++){
							  if(obj_age.prd_rider_code == arr_bundle[i]){
								  flag_bundle_age = true
							  }
						  }
						  if(flag_bundle_age){
							  row_age += "<label class='font-term-green font-bold'>"+obj_age.cov_code+"</label>"+
					  			"<input type='hidden' id='prd_rider_code' value='"+prd_rider_code+"' >"+
					  			"<input type='hidden' id='cov_code' value='"+obj_age.cov_code+"' >"
						  }else{
							  row_age += "<label class='font-term-green font-bold'>"+prd_rider_code+"</label>"+
					  			"<input type='hidden' id='prd_rider_code' value='"+prd_rider_code+"' >"+
					  			"<input type='hidden' id='cov_code' value='"+obj_age.cov_code+"' >"
						  }
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
						row_age += "<i class='glyphicon glyphicon-minus icon_active icon-blue-circle' data-id='"+numrow3+"' id='addrow_endorse"+numrow3+"' onclick='delete_rowEndorse_OL(this.id);'></i>";
					}else{
						row_age += "<i class='glyphicon glyphicon-plus icon-blue-circle' data-id='"+numrow3+"' id='addrow_endorse"+numrow3+"' onclick=\"addRowEndorse_OL("+numrow3+", '"+obj_age.cov_code+"', '"+prd_rider_code+"');\"></i>";
					}
				  
					
				row_age += "</td>"+											
				  "<td class='text-center verticalCenter borderBlack'>"+
				  	"<input type='hidden' id='hd_min_issue_age"+numrow3+"' value='"+obj_age.min_issue_age+"'>"
				  	if(obj_age.cov_code == cov_base){
						  row_age += "<input type='number' class='form-control margin-padding0 text-center width40px' value='"+obj_age.min_issue_age+"' min='1' onchange=\"numberKey_min_OL(this,'hd_min_issue_age"+numrow3+"') , startIssue_term_OL(this)\" disabled>"
					  }else{
						  row_age += "<input type='number' class='form-control margin-padding0 text-center width40px' value='"+obj_age.min_issue_age+"' min='1' onchange=\"numberKey_min_OL(this,'hd_min_issue_age"+numrow3+"');\" disabled>"
					  }
				  	
					row_age += "</td>"+
				  "<td class='text-center verticalCenter borderBlack'>"+	
				  	"<input type='hidden' id='start_insure_ageUnit"+numrow3+"' >"+
					"<select class='form-control width100px' id='ageRange_from_unit"+numrow3+"_ol' onchange='change_typeTerm1_OL(this)' disabled>"+
						"<option value='NONE'>None</option>"+sl_ageCoordinate+
					"</select>"+
				  "</td>"+
				  "<td class='text-center verticalCenter borderBlack'>"+
				  	"<input type='hidden' id='hd_max_issue_age"+numrow3+"' value='"+obj_age.max_issue_age+"'>"
				  	if(obj_age.cov_code == cov_base){
						  row_age += "<input type='number' class='form-control margin-padding0 text-center width40px' value='"+obj_age.max_issue_age+"' min='1' onchange=\"numberKey_max_OL(this,'hd_max_issue_age"+numrow3+"') , endIssue_term_OL(this)\" disabled>"
					  }else{
						  row_age += "<input type='number' class='form-control margin-padding0 text-center width40px' value='"+obj_age.max_issue_age+"' min='1' onchange=\"numberKey_max_OL(this,'hd_max_issue_age"+numrow3+"');\" disabled>"
					  }
				  	
					row_age += "</td>"+
				  "<td class='text-center verticalCenter borderBlack'>"+	
				  	"<input type='hidden' id='end_insure_ageUnit"+numrow3+"' >"+
					"<select class='form-control width100px' id='ageRange_to_unit"+numrow3+"_ol' onchange='change_typeTerm2_OL(this)' disabled>"+
						"<option value='NONE'>None</option>"+sl_ageCoordinate+
					"</select>"+
				  "</td>"+
				  "<td class='text-center verticalCenter borderBlack'>"+
				  	"<input type='hidden' id='hd_max_insure_age"+numrow3+"' value='"+obj_age.max_insure_age+"'>"
				  	 if(obj_age.cov_code == cov_base){
						  row_age += "<input type='number' class='form-control margin-padding0 text-center width40px' value='"+obj_age.max_insure_age+"' min='1' onchange=\"numberKey_maximum_OL(this,'hd_max_insure_age"+numrow3+"') , maxInsure_term_OL(this)\" disabled>"
					  }else{
						  row_age += "<input type='number' class='form-control margin-padding0 text-center width40px' value='"+obj_age.max_insure_age+"' min='1' onchange=\"numberKey_maximum_OL(this,'hd_max_insure_age"+numrow3+"');\" disabled>"
					  }
					
					row_age += "</td>"+
				  "<td class='text-center verticalCenter borderBlack'>"+	
				  	"<input type='hidden' id='max_insure_ageUnit"+numrow3+"' >"+
					"<select class='form-control width100px' id='ageRange_max_unit"+numrow3+"_ol' onchange='change_typeTerm3_OL(this)' disabled>"+
						"<option value='NONE'>None</option>"+sl_ageCoordinate+
					"</select>"+
				  "</td>"+																			
				"</tr>";
			
		if(type == "E"){
			var main_code = obj_age.main_rider_code;

			$("#tb_ageRange_OL tbody>tr").each(function(){
				var this_id = $(this).attr("data-id");
				var prd_rider_code = $(this).find("td:nth-child(1) #prd_rider_code").val();
				var cov_code = $(this).find("td:nth-child(1) label").text();
				var numrow_child = $("#tb_ageRange_OL tbody>tr[data-parent='"+this_id+"']").length;
				
				if(main_code == prd_rider_code){
					if(numrow_child > 0){
						$(row_age).insertAfter($("#tb_ageRange_OL tbody>tr[data-parent='"+this_id+"']:last"));
					}else{
						$(row_age).insertAfter($("#tb_ageRange_OL #tr_ageRange_CV"+this_id).closest('tr'));
					}
					
					$("#tb_ageRange_OL #tr_ageRange_CV"+numrow3).find("td:nth-child(1) a").attr("data-code", cov_code);	
				}
			});
			
			/*************Add Endorse to other page***********/
			var endorse_ID = obj_age.cov_code;
			var main_cov = obj_age.main_rider_code;
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
			
			var json_data = {
					"method" : "getCaseRider",
					"rCode" : endorse_ID
			}
			$.ajax({
				url: 'ProductBasePlanOL_GetData_Servlet',
				type: "POST",
				data: json_data,
				async: false,
				success: function (response) {
					var obj = response.Tab_Basic_Information[0];
					var obj_calPrem = response.Tab_cal_insurance_premiums[0];
					
					getData_TabCalPrem_OL(endorse_ID, "E", prd_rider_code, response,true, main_cov);
					//getData_tab_useRight
					getData_TabUseRight_rider_OL(endorse_ID,"E", prd_rider_code, response, true, main_cov);
					/****Tab ผลประโยชน์การขาย****/
					getData_TabSaleBenefit_OL(endorse_ID, "E", prd_rider_code, response, true, main_cov);
					//****Tab Term****//
					//getData_TabTerm_data_OL(endorse_ID,"R",prd_rider_code,response,true);
					//****Tab Policy****//
					getData_TabPolicyWording_data_OL(endorse_ID,"E",prd_rider_code,response,true, main_cov);
					//****Tab Benefit****//
					showcase_benefit_OL(response, "E", endorse_ID, true, prd_rider_code, main_cov);
					get_dataBenefit_OL(response, "E", endorse_ID, prd_rider_code, main_cov);

				},
				error: function(){
					alert("fail")
				}
			});
			/********************************************/
			
		}else{
			//bundle
			if(i != 0){
				for(ii in response.Tab_Basic_Information[0].rider){
					var obj_rider = response.Tab_Basic_Information[0].rider[ii];
					var prd_code = obj_rider.prd_code;
					var prd_design = obj_rider.prd_design;
					
					if(prd_code == obj_age.prd_rider_code){
						if(prd_design == "BUNDLE"){
							$(row_age).insertAfter("#tb_ageRange_OL tr[data-id='"+id_bundle+"']").closest('tr');
							id_bundle++
						}else{
							$("#tb_ageRange_OL tbody").append(row_age);
						}
					}
				}
			}else{
				$("#tb_ageRange_OL tbody").append(row_age);
			}
			
		}
		
		$("#tb_ageRange_OL #tr_ageRange_CV"+numrow3).find('td:nth-child(5) input[type="hidden"]').val(obj_age.min_issue_age_unit)
		$("#tb_ageRange_OL #tr_ageRange_CV"+numrow3).find('td:nth-child(5) option[value='+obj_age.min_issue_age_unit+']').attr('selected', true);
		$("#tb_ageRange_OL #tr_ageRange_CV"+numrow3).find('td:nth-child(7) input[type="hidden"]').val(obj_age.max_issue_age_unit)
		$("#tb_ageRange_OL #tr_ageRange_CV"+numrow3).find('td:nth-child(7) option[value='+obj_age.max_issue_age_unit+']').attr('selected', true);
		$("#tb_ageRange_OL #tr_ageRange_CV"+numrow3).find('td:nth-child(9) option[value='+obj_age.max_insure_age_unit+']').attr('selected', true);
			
		}
	}
	
	
	// sex
	var sex = response.Tab_Basic_Information[0].gender;	
	if(sex == "MALE"){
		$("#chk_sex_BP1_OL").prop("checked",true);
	}else if(sex == "FEMALE"){
		$("#chk_sex_BP2_OL").prop("checked",true);
	}else if(sex == "EITHER"){
		$("#chk_sex_BP1_OL").prop("checked",true).prop("disabled",false);
		$("#chk_sex_BP2_OL").prop("checked",true).prop("disabled",false);
	}
	
	/* hide validate* */
	if($("#key_Insurance_product_ol").val() != ""){
		$("#validate_input1_ol").hide();
	}
	if($("#th_Name_ol").val() != ""){
		$("#validate_input2_ol").hide();
	}
	if($("#th_marketingName_ol").val() != ""){
		$("#validate_input3_ol").hide();
	}
	if($("#tb_PM_Rate_OL tbody>tr").length > 0){
		$("#validate_input4_ol").hide();
	}
	
}


/*2. การคำนวณเบี้ยประกัน*/
function showcase_cal_premium_OL(response,type,prd_code_temp,prd_code_Clone){
	var obj = response.Tab_cal_insurance_premiums[0];
	
	/*Age Type*/ 
	if(obj.age_Band != ""){
		$("#lb_age_specific_OL option[value="+obj.age_Band+"]").attr("selected",true)
	}else{
		$("#lb_age_specific_OL option[value='']").attr("selected",true)
	}
	
	/*การคำนวณจำนวนเงินเอาประกันภัย*/
	var round_parent = 0;
	var rowChild3 = 1;
	var id_parent = "";
	var type1 = "";

	for(i in response.Tab_cal_insurance_premiums[0].limitCondSerie){
		var obj_limitCond = response.Tab_cal_insurance_premiums[0].limitCond[round_parent];
		var obj_limitCondSerie = response.Tab_cal_insurance_premiums[0].limitCondSerie[i];
		var obj_limit_seq1 = response.Tab_cal_insurance_premiums[0].limit_seq1[i];
		var obj_limit_seq2 = response.Tab_cal_insurance_premiums[0].limit_seq2[i];
		
		/*จำนวนเงินเบี้ยประกันภัยขั้นต่ำ*/
		//Benz set  Clone 22-11-2019					
		var prd_rider_code_main = "";
			if (type == "Clone") {
				if (prd_code_temp == obj_limitCondSerie.Prd_rider_code) {
					prd_rider_code_main = prd_code_Clone;
				}else {
					prd_rider_code_main = obj_limitCondSerie.Prd_rider_code;
				}
			}else {
				prd_rider_code_main = obj_limitCondSerie.Prd_rider_code;
			}
		
		var serie_main = obj_limitCondSerie.Serie_no;
		
		var obj_limit_seq3 = "";
		var limit_seq3_Limit_amt = "";
		var Limit_seq3_factor = "";

		if(obj_limitCondSerie.Serie_no == 1){
			round_parent++;
		}
		var flag_tb = false;
	
		$("#tb_Calculate_insurance_OL tbody>tr[data-level='1']").each(function(i){

			type1 = $(this).find("td:nth-child(1) #type_OL").val();
			var row_prd_rider_code = $(this).find('td:nth-child(1) #prd_rider_code_OL').val();
			var get_serie_no = obj_limitCondSerie.Serie_no;
			var get_seq = obj_limitCondSerie.Cond_seq;
			
			//Benz set  Clone 22-11-2019
			var get_prd_rider_code = "";
			if (type == "Clone") {
				if (prd_code_temp == obj_limitCondSerie.Prd_rider_code) {
					get_prd_rider_code = prd_code_Clone;
				}else {
					get_prd_rider_code = obj_limitCondSerie.Prd_rider_code;
				}
			}else {
				get_prd_rider_code = obj_limitCondSerie.Prd_rider_code;
			}
			/*if(row_prd_rider_code == get_prd_rider_code){
				console.log("row "+row_prd_rider_code+ " get "+get_prd_rider_code);
				console.log(obj_limitCondSerie.Serie_no);
			}*/
			
			if((row_prd_rider_code == get_prd_rider_code) && get_serie_no == 1){
				//console.log(type);
				
				/*จำนวนเงินเบี้ยประกันภัยขั้นต่ำ*/
				if(type1 == "B"){
					for(ii in response.Tab_cal_insurance_premiums[0].limit_seq3){
						obj_limit_seq3 = response.Tab_cal_insurance_premiums[0].limit_seq3[ii];
						var serie_seq3 = obj_limit_seq3.Serie_no;
						
						//Benz set  Clone 22-11-2019
						var prd_rider_code_seq3 = "";
						if (type == "Clone") {
							if (prd_code_temp == obj_limit_seq3.Prd_rider_code) {
								prd_rider_code_seq3 = prd_code_Clone;
							}else {
								prd_rider_code_seq3 = obj_limit_seq3.Prd_rider_code;
							}
						}else {
							prd_rider_code_seq3 = obj_limit_seq3.Prd_rider_code;
						}
						
						
						if((prd_rider_code_main == prd_rider_code_seq3) && (serie_main == serie_seq3)){
							limit_seq3_Limit_amt = obj_limit_seq3.Limit_amt;
							Limit_seq3_factor = obj_limit_seq3.Limit_factor;
						}
					}
				}
				
				if(get_seq == null){
					$(this).find('td:nth-child(1) #seq_OL').val(1)
				}else{
					$(this).find('td:nth-child(1) #seq_OL').val(get_seq)
				}
				if(get_serie_no == null){
					$(this).find('td:nth-child(1) #serie_no_OL').val(1)
				}else{
					$(this).find('td:nth-child(1) #serie_no_OL').val(get_serie_no)
				}
				
				if(obj_limitCondSerie.Min_base_amt != 0){
					$(this).find('td:nth-child(4) input').val(numberWithCommas(parseFloat(obj_limitCondSerie.Min_base_amt).toFixed(2)));
				}else{
					$(this).find('td:nth-child(4) input').val("")
				}
				if(obj_limitCondSerie.Max_base_amt != 0){
					$(this).find('td:nth-child(5) input').val(numberWithCommas(parseFloat(obj_limitCondSerie.Max_base_amt).toFixed(2)));
					if(obj_limitCondSerie.Min_base_amt == 0){
						$(this).find('td:nth-child(4) input').val("0.00")
					}
				}else{
					$(this).find('td:nth-child(5) input').val("");
				}
				$(this).find('td:nth-child(6) input').val(numberWithCommas(parseFloat(obj_limit_seq1.Limit_amt).toFixed(2)));
				$(this).find("td:nth-child(7) select>option[value="+obj_limit_seq1.Limit_unit+"]").attr("selected", true);
				$(this).find("td:nth-child(8) select>option[value="+obj_limit_seq1.Limit_factor+"]").attr("selected", true);
				$(this).find('td:nth-child(9) input').val(numberWithCommas(parseFloat(obj_limit_seq2.Limit_amt).toFixed(2)));
				$(this).find("td:nth-child(10) select>option[value="+obj_limit_seq2.Limit_factor+"]").attr("selected", true);
				
				if(type1 == "B"){
					$(this).find('td:nth-child(11) input').val(numberWithCommas(parseFloat(limit_seq3_Limit_amt).toFixed(2)));
					$(this).find("td:nth-child(12) select>option[value="+Limit_seq3_factor+"]").attr("selected", true);
				}
				
				rowChild3 = 1;
				
			}else if((row_prd_rider_code == get_prd_rider_code) && get_serie_no != 1){

				var group_id = $(this).attr("data-group");
				id_parent = $("#tb_Calculate_insurance_OL tbody>tr[data-id='"+group_id+"']").attr('data-id');
			
				var cov_code_main = $("#tb_Calculate_insurance_OL tbody>tr[data-id='"+group_id+"']").find("td:nth-child(1) label").text();
				
				if(group_id == 1){
					type1 = "B";
				}else{
					type1 = "R";
				}
				
				/*จำนวนเงินเบี้ยประกันภัยขั้นต่ำ*/
				if(type1 == "B"){
					for(ii in response.Tab_cal_insurance_premiums[0].limit_seq3){
						obj_limit_seq3 = response.Tab_cal_insurance_premiums[0].limit_seq3[ii];
						var serie_seq3 = obj_limit_seq3.Serie_no;
						
						//Benz set  Clone 22-11-2019					
						var prd_rider_code_seq3 = "";
							if (type == "Clone") {
								if (prd_code_temp == obj_limit_seq3.Prd_rider_code) {
									prd_rider_code_seq3 = prd_code_Clone;
								}else {
									prd_rider_code_seq3 = obj_limit_seq3.Prd_rider_code;
								}
							}else {
								prd_rider_code_seq3 = obj_limit_seq3.Prd_rider_code;
							}
						
						if((prd_rider_code_main == prd_rider_code_seq3) && (serie_main == serie_seq3)){
							limit_seq3_Limit_amt = obj_limit_seq3.Limit_amt;
							Limit_seq3_factor = obj_limit_seq3.Limit_factor;
						}
					}
				}
				
				///หน่วย
				var dropdownUnit = $("#tb_Calculate_insurance_OL tbody>tr").eq(0).find('td:nth-child(7) select').html();
				var dropdownOF1 = $("#tb_Calculate_insurance_OL tbody>tr").eq(0).find('td:nth-child(8) select').html();
				var dropdownOF2 = $("#tb_Calculate_insurance_OL tbody>tr").eq(0).find('td:nth-child(10) select').html();
				var dropdownOF3 = $("#tb_Calculate_insurance_OL tbody>tr").eq(0).find('td:nth-child(12) select').html();
				
				
				if (type == "Clone") {
					if (prd_code_temp == obj_limitCondSerie.Prd_rider_code) {
						obj_limitCondSerie.Prd_rider_code = prd_code_Clone;
					}
				}
				var name_tr 		= "tr_Calculate_insurance_OL_"+id_parent+"_"+rowChild3;
				var removerowChild = 'removerowChild3_OL("'+name_tr+'");';
				var new_row 		=  "<tr id=\"tr_Calculate_insurance_OL_"+id_parent+"_"+rowChild3+"\" data-id=\""+id_parent+"_"+rowChild3+"\" data-group='"+id_parent+"' data-parent=\""+id_parent+"\" data-level=\"2\">"+
						"<td width=\"14%\" class=\"text-center verticalCenter fontcolortable1 borderBlack\">"+
							"<input type='hidden' id='cov_code_OL' value='"+cov_code_main+"' >"+
							"<input type='hidden' id='prd_rider_code_OL' value='"+obj_limitCondSerie.Prd_rider_code+"' >";
							
							if(obj_limitCondSerie.Serie_no == null){
								new_row += "<input type='hidden' id='serie_no_OL' value='2' >";
							}else{
								new_row += "<input type='hidden' id='serie_no_OL' value='"+obj_limitCondSerie.Serie_no+"' >";
							}
				

					new_row	 +=	"<input type='hidden' id='seq_OL' value=''>"+
							"<input type='hidden' id='type_OL' value='"+type1+"'>"+
							"<label>"+"</label>"+
						"</td>"+
						"<td width=\"7%\"class=\"text-center verticalCenter borderBlack\">" +
						"</td>"+
						"<td width=\"3%\" class=\"text-center verticalCenter borderBlack\">"+
							//"<i class=\"glyphicon glyphicon-plus-sign\"  data-id=\'"+numrow3+"\' data-topic=\'"+numrow3+"\' data-type=\'"+numrow3+"\' id=\"addrowMenu3_"+numrow3+"\" onclick=\"addrowMenu3("+numrow3+");\"></i>"+
							"<i class=\"glyphicon icon-blue-circle glyphicon-minus icon_active\"  data-id=\'"+rowChild3+"\' data-topic=\'"+rowChild3+"\' data-type=\'"+rowChild3+"\' id=\"removerow_OL_"+rowChild3+"\" onclick='"+removerowChild+"'></i>"+
							"</td>"+	
						"<td width=\"7%\"class=\"text-right verticalCenter borderBlack\">"+
						"<input type='text' class='autoComma form-control margin-padding0 text-center width40px' data-v-min='0.00' data-v-max='999999999.99' disabled>"+
						"</td>"+
						"<td width=\"7%\" class=\"text-right verticalCenter borderBlack\">"+
						"<input type='text' class='autoComma form-control margin-padding0 text-center width40px' data-v-min='0.00' data-v-max='999999999.99' onblur='validateMax_tbCal_OL(this); chkBlank_tbCal_OL(this);'>"+
						"</td>"+
						"<td width=\"7%\"class=\"text-right verticalCenter borderBlack\">"+
						"<input type='text' class='autoComma form-control margin-padding0 text-center width40px' data-v-min='0.00' data-v-max='999999999.99' onblur='chkBlank_tbCal_OL(this); check_value_format_OL(1,this);'>"+
						"</td>"+
						"<td width=\"9%\" class=\"text-right verticalCenter borderBlack\">"+
							"<select class=\"form-control\" onchange='check_value_format_OL(2,this);'>"+dropdownUnit+"</select></td>"+
						"<td width=\"9%\" class=\"text-right verticalCenter borderBlack\">"+
							"<select class=\"form-control\">"+dropdownOF1+"</select></td>"+
						"<td width=\"7%\" class=\"text-right verticalCenter borderBlack\">"+
						"<input type='text' class='autoComma form-control margin-padding0 text-center width40px' data-v-min='0.00' data-v-max='999999999.99' onblur='chkBlank_tbCal_OL(this);'>"+
						"<td width=\"9%\" class=\"text-right verticalCenter borderBlack\">"+
							"<select class=\"form-control\">"+dropdownOF2+"</select></td>"+	
						"<td width=\"7%\" class=\"text-right verticalCenter borderBlack\">"+
						"<input type='text' class='autoComma form-control margin-padding0 text-center width40px' data-v-min='0.00' data-v-max='999999999.99' onblur='chkBlank_tbCal_OL(this);'>"+
						"<td width=\"9%\" class=\"text-right verticalCenter borderBlack\">"+
							"<select class=\"form-control\">"+dropdownOF2+"</select></td>"+
					"</tr>";
					
					//console.log(new_row);
					
					//$(new_row).insertAfter($("#tb_Calculate_insurance_OL>tbody>tr[data-parent="+id_parent+"]:last").closest('tr'));
					
					var num_child = $("#tb_Calculate_insurance_OL>tbody>tr[data-parent="+id_parent+"]").length;
					if(num_child > 0){
						$(new_row).insertAfter($("#tb_Calculate_insurance_OL>tbody>tr[data-parent="+id_parent+"]:last").closest('tr'));
					}else{
						$(new_row).insertAfter($("#tb_Calculate_insurance_OL>tbody>tr[data-id="+id_parent+"]").closest('tr'));
					}
					
					$("#tr_Calculate_insurance_OL_"+id_parent+"_"+rowChild3).find('td:nth-child(4) input').val(numberWithCommas(parseFloat(obj_limitCondSerie.Min_base_amt).toFixed(2)));
					$("#tr_Calculate_insurance_OL_"+id_parent+"_"+rowChild3).find('td:nth-child(5) input').val(numberWithCommas(parseFloat(obj_limitCondSerie.Max_base_amt).toFixed(2)));
					$("#tr_Calculate_insurance_OL_"+id_parent+"_"+rowChild3).find('td:nth-child(6) input').val(numberWithCommas(parseFloat(obj_limit_seq1.Limit_amt).toFixed(2)));
					$("#tr_Calculate_insurance_OL_"+id_parent+"_"+rowChild3).find("td:nth-child(7) select>option[value="+obj_limit_seq1.Limit_unit+"]").attr("selected", true);
					$("#tr_Calculate_insurance_OL_"+id_parent+"_"+rowChild3).find("td:nth-child(8) select>option[value="+obj_limit_seq1.Limit_factor+"]").attr("selected", true);
					$("#tr_Calculate_insurance_OL_"+id_parent+"_"+rowChild3).find('td:nth-child(9) input').val(numberWithCommas(parseFloat(obj_limit_seq2.Limit_amt).toFixed(2)));
					$("#tr_Calculate_insurance_OL_"+id_parent+"_"+rowChild3).find("td:nth-child(10) select>option[value="+obj_limit_seq2.Limit_factor+"]").attr("selected", true);
					
					if(type1 == "B"){
						$("#tr_Calculate_insurance_OL_"+id_parent+"_"+rowChild3).find('td:nth-child(11) input').val(numberWithCommas(parseFloat(limit_seq3_Limit_amt).toFixed(2)));
						$("#tr_Calculate_insurance_OL_"+id_parent+"_"+rowChild3).find("td:nth-child(12) select>option[value="+Limit_seq3_factor+"]").attr("selected", true);
					}else{
						$("#tr_Calculate_insurance_OL_"+id_parent+"_"+rowChild3).find('td:nth-child(11) input').val("0.00").prop("disabled", true);
						$("#tr_Calculate_insurance_OL_"+id_parent+"_"+rowChild3).find("td:nth-child(12) select>option[value='NONE']").attr("selected", true);
						$("#tr_Calculate_insurance_OL_"+id_parent+"_"+rowChild3).find("td:nth-child(12) select").prop("disabled", true);
					}
					
					rowChild3++;
					
			}
			
			$(".autoComma").autoNumeric('init',{vMin: '0.00', vMax: '999999999.99'});
			
		});
	}
	
	/*formula*/
	for(i in response.Tab_cal_insurance_premiums[0].formula){
		var obj_formula = response.Tab_cal_insurance_premiums[0].formula[i];
		$("#tb_Calculate_insurance2_OL tbody>tr").each(function(){
			//Benz set  Clone 22-11-2019			
			var Prd_rider_code = "";
			if (type == "Clone") {
				if (prd_code_temp == obj_formula.Prd_rider_code) {
					Prd_rider_code = prd_code_Clone;
				}else {
					Prd_rider_code = obj_formula.Prd_rider_code;
				}
			}else {
				Prd_rider_code = obj_formula.Prd_rider_code;
			}
			
			if(Prd_rider_code == $(this).find('td:nth-child(1) #prd_rider_code_OL').val()
					&& obj_formula.Formula_cat_id == $(this).find('td:nth-child(2) #rate_cat_formula_OL').val()){
				$(this).find("td:nth-child(3) select>option[value="+obj_formula.Formula_id+"]").attr('selected', true);
			}
		});
	}
	
	/************ข้อมูลจากหน้าข้อกำหนดการรับประกัน************/
	//การชำระเบี้ยประกันภัยปีแรก
	var obj_prem = response.Tab_Provision[0];
	if(obj_prem.premCollect.length > 0){
		for(i in obj_prem.premCollect){
			var obj_prem_collect = obj_prem.premCollect[i];
			var flag = obj_prem_collect.prem_flag;
			var value = obj_prem_collect.collect_meth;
			
			if(flag == "FYP"){
				$("#prem_flag_FYP>div").each(function(){
					var this_value = $(this).find("input:checkbox").val();
					if(value == this_value){
						$(this).find("input:checkbox").prop("checked", true);
					}
				});
			}else if(flag == "RYP"){
				$("#prem_flag_RYP>div").each(function(){
					var this_value = $(this).find("input:checkbox").val();
					if(value == this_value){
						$(this).find("input:checkbox").prop("checked", true);
					}
				});
			}
		}
	}
	
}

/*3. การใช้สิทธิ์ตามกรมธรรม์*/
function showcase_use_Rights_OL(response,type,prd_code_temp,prd_code_Clone){
	var obj = response.Tab_GrantRightsInsure[0];
//	var obj_get = response.Tab_exercise_rights_insurance[0];
	/*การเปลี่ยนแปลงเงื่อนไขหลังออก กธ.*/
	if(obj.change_Type.length > 0){
		for(i in response.Tab_GrantRightsInsure[0].change_Type){
			var obj_type = response.Tab_GrantRightsInsure[0].change_Type[i];
			$("#div_change_condition_OL input").each(function(){
				if( obj_type.type == $(this).val()){
					$(this).prop("checked",true);
				}
			})
		}
		
	}
	
	/*BasePlan*/
	if(obj.basePlan.length > 0){
		for(i in response.Tab_GrantRightsInsure[0].basePlan){
			var obj_base = response.Tab_GrantRightsInsure[0].basePlan[i];
			$("#tb_policyholder_OL tbody>tr").each(function(){
				if(obj_base.cov_code == $(this).find('td:nth-child(1) label').text() && obj_base.pm_rate[0][0]){
					var str = obj_base.pm_rate[0][0].filename;
					var str2 = str.substring(0,10) + " " + str.substring(20);
					$(this).find('td:nth-child(2) label').text(obj_base.pm_rate[0][0].name_th[0].name);
					$(this).find('td:nth-child(3) label').text(str2);
					$(this).find('td:nth-child(3) #rate_cat_id_tb_useRight').val(obj_base.pm_rate[0][0].rate_cat_id)
					$(this).find('td:nth-child(3) #rate_layout_id_tb_useRight').val(obj_base.pm_rate[0][0].rate_layout_id)
					$(this).find('td:nth-child(3) #file_id_tb_useRight').val(obj_base.pm_rate[0][0].fileID)
					$(this).find('td:nth-child(4) select').attr("disabled",false);
				}
			})
		}
	}
	
	/*rider*/
	for(i in response.Tab_GrantRightsInsure[0].rider){
		var obj_rider = response.Tab_GrantRightsInsure[0].rider[i];
		$("#tb_policyholder_OL tbody>tr").each(function(){
			
			if( obj_rider.cov_code == $(this).find('td:nth-child(1) label').text() && obj_rider.pm_rate[0]){
				var str = obj_rider.pm_rate[0].filename;
				var str2 = str.substring(0,10) + " " + str.substring(20);
				$(this).find('td:nth-child(2) label').text(obj_rider.pm_rate[0].name_th[0].name);
				$(this).find('td:nth-child(3) label').text( str2);
				$(this).find('td:nth-child(3) #rate_cat_id_tb_useRight').val(obj_rider.pm_rate[0].rate_cat_id)
				$(this).find('td:nth-child(3) #rate_layout_id_tb_useRight').val(obj_rider.pm_rate[0].rate_layout_id)
				$(this).find('td:nth-child(3) #file_id_tb_useRight').val(obj_rider.pm_rate[0].fileID)
				$(this).find('td:nth-child(4) select').attr("disabled",false);
				
			}
			
		});
	}
	
	if (type == "Clone") {
		/*formula*/
		for(i in response.Tab_GrantRightsInsure[0].formula){
			var obj = response.Tab_GrantRightsInsure[0].formula[i];
			$("#tb_policyholder_OL tbody>tr").each(function(){
				if (obj.Prd_rider_code == prd_code_temp) {
					obj.Prd_rider_code = prd_code_Clone;
				}
				if( obj.Prd_rider_code == $(this).find('td:nth-child(1) input[type="hidden"]').val()){
					$(this).find("td:nth-child(4) select>option[value="+obj.Formula_id+"]").attr('selected',true)
				}
			})
		}
	}else{
		/*formula*/
		for(i in response.Tab_GrantRightsInsure[0].formula){
			var obj = response.Tab_GrantRightsInsure[0].formula[i];
			$("#tb_policyholder_OL tbody>tr").each(function(){
				if( obj.Prd_rider_code == $(this).find('td:nth-child(1) input[type="hidden"]').val()){
					$(this).find("td:nth-child(4) select>option[value="+obj.Formula_id+"]").attr('selected',true)
				}
			})
		}
	}
	
	
	//ดึง ข้อมูลจาก cov_code มาใส่ใน tab การใช้สิทธิ์
	var arrCov_code = [];
	$("#tb_policyholder_OL tbody>tr").each(function(){
		arrCov_code.push($(this).find('td:nth-child(1) label').text());
	})
	get_row_useRight_OL(arrCov_code);
	

	
}

/*4. ผลประโยชน์การขาย*/
function showcase_sale_benefits_OL(response,type,prd_code_temp,prd_code_Clone){
	var obj = response.Tab_SalesBenefits[0];
	
	if(obj.sel_benefits1.length == 0){
		$("#rd_SaleCondition_OL1").prop("checked", true);
	
		$("#div_SaleNoCondition_OL").show();
		$("#div_SaleHaveCondition_OL").hide();
		
	}else if(obj.sel_benefits1.length > 0){
		$("#flag_SaleBnf_OL").val("1");
		$("#rd_SaleCondition_OL2").prop("checked", true);

		$("#div_SaleNoCondition_OL").hide();
		$("#div_SaleHaveCondition_OL").show();
		
	}else{
		$("#rd_SaleCondition_OL1").prop("checked", true);
		
		$("#div_SaleNoCondition_OL").show();
		$("#div_SaleHaveCondition_OL").hide();
	}
	
	/******put data to table******/
	//var rowChild3 = 1;
	
	/*แบบปกติ*/
	if(obj.sel_benefits2.length > 0 && obj.sel_benefits1.length == 0){
		
		/**/
		var ii = 1;
		var new_row_level1 = "";
		var serie_no_child = "";
		var rowChild3 = 1;
		
		for(i in obj.sel_benefits2){
			
			var obj_bnf = obj.sel_benefits2[i];
			
			var seq = obj_bnf.seq;
			var serie_no = obj_bnf.serie_no;

			var date_start = obj_bnf.eff_data;
			var date_to = obj_bnf.exp_data;
			var year1 = obj_bnf.year1;
			var year2 = obj_bnf.year2;
			var year3 = obj_bnf.year3;
			var year4 = obj_bnf.year4;
			var credit = obj_bnf.credit;
			var overrid = obj_bnf.overrid;
			var advance = obj_bnf.advance;
			var mkt_Inc = obj_bnf.mkt_Inc;
			var sale_volume = obj_bnf.saleValume;
			var mkt_Exp = obj_bnf.mkt_Exp;
			
			var prd_code 		= "";
			var bnf_cov_code 	= "";

			//Benz set Clone 22-11-2019
			if (type == "Clone") {
				if (prd_code_temp == obj_bnf.prd_code) {
					prd_code 		= prd_code_Clone;
					bnf_cov_code	= prd_code_Clone;
				}else {
					prd_code 		= obj_bnf.prd_code;
					bnf_cov_code 	= obj_bnf.prd_code;
				}
			}else {
				prd_code 			= obj_bnf.prd_code;
				bnf_cov_code 		= obj_bnf.prd_code;

			}
			//console.log(ii);
			$("#tbl_SaleBenefitNormal_OL tbody>tr[data-group='1']").each(function(){
				var prd_rider_code = $(this).find("td:nth-child(1) #prd_rider_code_OL").val();
				
				if((bnf_cov_code == prd_rider_code) && ii == 1 && serie_no == 1 && serie_no != ""){
						$(this).find("td:nth-child(5) input").val(date_start);
						$(this).find("td:nth-child(6) input").val(date_to);
						$(this).find("td:nth-child(7) input").val(numberWithCommas(parseFloat(year1).toFixed(2)));
						$(this).find("td:nth-child(8) input").val(numberWithCommas(parseFloat(year2).toFixed(2)));
						$(this).find("td:nth-child(9) input").val(numberWithCommas(parseFloat(year3).toFixed(2)));
						$(this).find("td:nth-child(10) input").val(numberWithCommas(parseFloat(year4).toFixed(2)));
						$(this).find("td:nth-child(11) input").val(numberWithCommas(parseFloat(credit).toFixed(2)));
						$(this).find("td:nth-child(12) input").val(numberWithCommas(parseFloat(overrid).toFixed(2)));
						$(this).find("td:nth-child(13) input").val(numberWithCommas(parseFloat(advance).toFixed(2)));
						$(this).find("td:nth-child(14) input").val(numberWithCommas(parseFloat(mkt_Inc).toFixed(2)));
						$(this).find("td:nth-child(15) input").val(numberWithCommas(parseFloat(sale_volume).toFixed(2)));
						$(this).find("td:nth-child(16) input").val(numberWithCommas(parseFloat(mkt_Exp).toFixed(2)));
					ii++;
					
					serie_no_child = serie_no;
					var new_row_id = serie_no;
					rowChild3 = 1;
				}else if(bnf_cov_code == prd_rider_code && serie_no == ""){
					
					var group_id = $(this).attr("data-group");
					id_parent = $("#tbl_SaleBenefitNormal_OL tbody>tr[data-id='"+group_id+"']").attr('data-id');
				
					var cov_code_main = $("#tbl_SaleBenefitNormal_OL tbody>tr[data-id='"+group_id+"']").find("td:nth-child(1) label").text();
					var disabled = "";
					var disabled_all = "";
					
					if(group_id == 1){
						type = "B";
					}else{
						type = "R";
					}
					
					if(type == "B"){
						disabled = "";
						disabled_all = "";
					}else{
						disabled = "disabled";
						disabled_all = "disabledAll";
					}
					
					if(serie_no == ""){
						serie_no = serie_no_child;
					}
					
					var name_tr = "tr_saleBnf"+serie_no+"_"+rowChild3;
					var new_row_id_child = serie_no+"_"+rowChild3;
					new_row_level1 += "<tr id='tr_saleBnf"+new_row_id_child+"' data-id='"+new_row_id_child+"' data-parent='"+serie_no+"' data-level='2' data-group='"+serie_no+"'>"+
					 	"<td class=\'text-center verticalCenter\'  class=\'text-center verticalCenter\'>"+
					 	"<input type='hidden' id='cov_type_OL' value='"+type+"'>"+
						"<input type='hidden' id='prd_rider_code_OL' value='"+bnf_cov_code+"'>"+
						"<input type='hidden' id='seq_OL' value='"+seq+"'>"+
						"<input type='hidden' id='serie_OL' value='"+serie_no+"'>"+
					 	"</td>"+
					 	"<td class=\'text-center verticalCenter\'  class=\'text-center verticalCenter\'></td>"+
						"<td class=\'text-center verticalCenter\'  class=\'text-center verticalCenter\'>-</td>"+
						"<td class=\"text-center verticalCenter\">"+
						"<i class=\"glyphicon glyphicon-minus icon-blue-circle icon_active "+disabled_all+" \"  data-id=\'"+new_row_id+"\' id=\"removerow_OL_"+new_row_id_child+"\" onclick='removeRow_OL(this);'></i>"+
						"</td>"+
						"<td class='text-center'><input type='text' class='form-control format_date disabledAll' id='datefrom_saleBnf"+new_row_id_child+"' onblur='' placeholder='dd/mm/yyyy' value='"+date_start+"' maxlength='10' disabled></td>"+
						"<td class='text-center'><input type='text' class='form-control format_date "+disabled_all+"' id='dateto_saleBnf"+new_row_id_child+"' onblur='checkdateTo_OL(this.id);' placeholder='dd/mm/yyyy' value='"+date_to+"' maxlength='10' "+disabled+" readonly></td>"+	
						"<td class=\'text-right verticalCenter\'>"+
						"<input type='text' class='auto text-right form-control' id='txb_year1_"+new_row_id_child+"' onblur='checkZero_OL(this);' value='"+numberWithCommas(parseFloat(year1).toFixed(2))+"' data-v-min='0.00' data-v-max='999.99' "+disabled+">" +
						"</td>"+
						"<td class=\'text-right verticalCenter\'>"+
						"<input type='text' class='auto text-right form-control' id='txb_year2_"+new_row_id_child+"' onblur='checkZero_OL(this);' value='"+numberWithCommas(parseFloat(year2).toFixed(2))+"' data-v-min='0.00' data-v-max='999.99' "+disabled+">" +
						"</td>"+
						"<td class=\'text-right verticalCenter\'>"+
						"<input type='text' class='auto text-right form-control'  id='txb_year3_"+new_row_id_child+"' onblur='checkZero_OL(this);' value='"+numberWithCommas(parseFloat(year1).toFixed(3))+"' data-v-min='0.00' data-v-max='999.99' "+disabled+">" +
						"</td>"+
						"<td class=\'text-right verticalCenter\'>"+
						"<input type='text' class='auto text-right form-control' id='txb_year4_"+new_row_id_child+"' onblur='checkZero_OL(this);' value='"+numberWithCommas(parseFloat(year4).toFixed(2))+"' data-v-min='0.00' data-v-max='999.99' "+disabled+">" +
						"</td>"+
						"<td class=\'text-right verticalCenter\'>"+
						"<input type='text' class='auto text-right form-control' id='txb_credit_"+new_row_id_child+"' onblur='checkZero_OL(this);' value='"+numberWithCommas(parseFloat(credit).toFixed(2))+"' data-v-min='0.00' data-v-max='999.99' "+disabled+">" +
						"</td>"+
						"<td class=\'text-right verticalCenter\'>"+
						"<input type='text' class='auto text-center form-control' id='txb_override_"+new_row_id_child+"' onblur='checkZero_OL(this);' value='"+numberWithCommas(parseFloat(overrid).toFixed(2))+"' data-v-min='0.00' data-v-max='999.99' "+disabled+">" +
						"</td>"+
						"<td class=\'text-right verticalCenter\'>"+
						"<input type='text' class='auto text-center form-control' id='txb_comm_"+new_row_id_child+"' onblur='checkZero_OL(this);' value='"+numberWithCommas(parseFloat(advance).toFixed(2))+"' data-v-min='0.00' data-v-max='999.99' "+disabled+">" +
						"</td>"+
						"<td class=\'text-right verticalCenter\'>"+
						"<input type='text' class='auto text-center form-control' id='txb_incentive_"+new_row_id_child+"' onblur='checkZero_OL(this);' value='"+numberWithCommas(parseFloat(mkt_Inc).toFixed(2))+"' data-v-min='0.00' data-v-max='999.99' "+disabled+">" +
						"</td>"+
						"<td class=\'text-right verticalCenter\'>"+
						"<input type='text' class='auto text-center form-control' id='txb_bonus_"+new_row_id_child+"' onblur='checkZero_OL(this);' value='"+numberWithCommas(parseFloat(sale_volume).toFixed(2))+"' data-v-min='0.00' data-v-max='999.99' "+disabled+">" +
						"</td>"+
						"<td class=\'text-right verticalCenter\'>"+
						"<input type='text' class='auto text-center form-control' id='txb_expense_"+new_row_id_child+"' onblur='checkZero_OL(this);' value='"+numberWithCommas(parseFloat(mkt_Exp).toFixed(2))+"' data-v-min='0.00' data-v-max='999.99' "+disabled+">" +
						"</td>"+
						"</tr>";	
						
					rowChild3++;
				}

			});
		}
		
		$(new_row_level1).insertAfter($("#tbl_SaleBenefitNormal_OL #tr_saleBnf1").closest('tr'));
		
	}else{

		//กำหนดเงื่อนไข
		if(obj.sel_benefits3[0].length > 0){
			$("#tb_YearCondition_OL tbody>tr").remove();
			
			$("#addRowSale_OL").prop("disabled", false);
			$("#deleteRowSale_OL").prop("disabled", false);
			
			var new_id = 1;
			var min_age_value = "";
			var max_age_value = "";
			var min_sum_value = "";
			var max_sum_value = "";
			var min_period_value = "";
			var max_period_value = "";
			
			for(i in obj.sel_benefits3[0]){
				var obj_bnf3 = obj.sel_benefits3[0][i];
				var min_age = obj_bnf3[0];
				var max_age = obj_bnf3[1];
				var min_sum = obj_bnf3[2];
				var max_sum = obj_bnf3[3];
				var min_period = obj_bnf3[4];
				var max_period = obj_bnf3[5];
				
				if(min_age_value != min_age){
					min_age_value = min_age;
				}else{
					min_age_value = "";
				}
				
				if(max_age_value != max_age){
					max_age_value = max_age;
				}else{
					max_age_value = "";
				}
				
				if(min_sum_value != min_sum){
					min_sum_value = min_sum;
				}else{
					min_sum_value = "";
				}
				
				if(max_sum_value != max_sum){
					max_sum_value = max_sum;
				}else{
					max_sum_value = "";
				}
				
				if(min_period_value != min_period){
					min_period_value = min_period;
				}else{
					min_period_value = "";
				}
				
				if(max_period_value != max_period){
					max_period_value = max_period;
				}else{
					max_period_value = "";
				}
				
				//put data
				var new_row = "<tr id='tr_YearCondition_OL"+new_id+"'>"+
						"<td class='text-center borderBlack' id='td_YearCondition_OL"+new_id+"' onclick='imgCheckbox(this.id);' style='vertical-align: middle;'>"+
							"<i class='glyphicon glyphicon-edit'></i>"+
						"</td>"+
						"<td class='borderBlack'>";
				
				if(new_id != 1){
					new_row += "<input id='Agefrom_OL"+new_id+"' class='auto form-control text-center margin-padding0' type='text' onkeypress='validate(event);' onblur='validateBeforeAge_OL(this); validateMinAge_OL(this);' data-v-min='0' data-v-max='99' maxlength='2' value='"+min_age_value+"'>";
				}else{
					new_row += "<input id='Agefrom_OL"+new_id+"' class='auto form-control text-center margin-padding0' type='text' onkeypress='validate(event);' onblur='validateMinAge_OL(this);' data-v-min='0' data-v-max='99' maxlength='2' value='"+min_age_value+"'>";
				}
					
					new_row +=	"</td>"+
						"<td class='borderBlack'>"+
							"<input id='Ageto_OL"+new_id+"' class='auto form-control text-center margin-padding0' type='text' onkeypress='validate(event);' onblur='validateMaxAge_OL(this);' data-v-min='0' data-v-max='99' maxlength='2' value='"+max_age_value+"'>"+
						"</td>"+
						"<td class='borderBlack'>";
					
				if(new_id != 1){
					new_row +=	"<input id='Sumfrom_OL"+new_id+"' class='auto text-right form-control margin-padding0' type='text' onkeypress='validate(event)' onblur='validateBeforeSum_OL(this); validateMinSum_OL(this);' data-v-min='0.00' data-v-max='999999999.99' value='"+min_sum_value+"'>";
				}else{
					new_row +=	"<input id='Sumfrom_OL"+new_id+"' class='auto text-right form-control margin-padding0' type='text' onkeypress='validate(event);' onblur='validateMinSum_OL(this);' data-v-min='0.00' data-v-max='999999999.99' value='"+min_sum_value+"'>";
				}
					
					new_row +=	"</td>"+
						"<td class='borderBlack'>"+
							"<input id='Sumto_OL"+new_id+"' class='auto text-right form-control margin-padding0' type='text' onkeypress='validate(event)' onblur='validateMaxSum_OL(this);' data-v-min='0.00' data-v-max='999999999.99' value='"+max_sum_value+"'>"+
						"</td>"+
						"<td class='borderBlack'>";
					
				if(new_id != 1){
					new_row +=	"<input id='Periodfrom_OL"+new_id+"' class='auto form-control text-center margin-padding0' type='text' onkeypress='validate(event);' onblur='validateBeforePeriod_OL(this); validateMinPeriod_OL(this);' data-v-min='0' data-v-max='99' maxlength='2' value='"+min_period_value+"'>";
				}else{
					new_row +=	"<input id='Periodfrom_OL"+new_id+"' class='auto form-control text-center margin-padding0' type='text' onkeypress='validate(event);' onblur='validateMinPeriod_OL(this);' data-v-min='0' data-v-max='99' maxlength='2' value='"+min_period_value+"'>";
				}
					
					new_row +=	"</td>"+
						"<td class='borderBlack'>"+
							"<input id='Periodto_OL"+new_id+"' class='auto form-control text-center margin-padding0' type='text' onkeypress='validate(event);' onblur='validateMaxPeriod_OL(this);' data-v-min='0' data-v-max='99' maxlength='2' value='"+max_period_value+"'>"+
						"</td>"+
					"</tr>";
				
				$("#tb_YearCondition_OL tbody").append(new_row);

				$('.auto').autoNumeric('init');
				
				$("#tr_YearCondition_OL"+new_id+"").find("td:nth-child(3) input, td:nth-child(5) input, td:nth-child(7) input").on("keypress keyup",function(){
				    if($(this).val() == '0'){
				      $(this).val('');  
				    }
				});
				
				new_id++;
			}

		}
		
		//series
		if(obj.sel_benefits1.length > 0){
			
			//เปิดปุ่ม
			$("#btn_generate_series_OL").prop("disabled", false);
			
			var chk_gender = obj.sel_benefits1[0].gender;
			var chk_mode = obj.sel_benefits1[0].mode;
			var chk_age = obj.sel_benefits3[0][0][0];
			var chk_sum = obj.sel_benefits3[0][0][2];
			var chk_period = obj.sel_benefits3[0][0][4];
			var show_gender = "";
			var show_mode = "";
			var show_age = "";
			var show_sum = "";
			var show_period = "";
			
			if(chk_gender != "NONE"){
				$("#ch_select_condition0_OL").prop("checked", true);
				show_gender = "";
			}else{
				show_gender = "displayNone";
			}
			
			if(chk_mode != "NONE"){
				$("#ch_select_condition1_OL").prop("checked", true);
				show_mode = "";
			}else{
				show_mode = "displayNone";
			}
			
			if(chk_age != ""){
				$("#ch_select_condition2_OL").prop("checked", true);
				show_age = "";
				
				$("#tb_YearCondition_OL tbody>tr>td:nth-child(2) input").prop("disabled", false);
				$("#tb_YearCondition_OL tbody>tr>td:nth-child(3) input").prop("disabled", false);
				
			}else{
				show_age = "displayNone";
				
				$("#tb_YearCondition_OL tbody>tr>td:nth-child(2) input").prop("disabled", true);
				$("#tb_YearCondition_OL tbody>tr>td:nth-child(3) input").prop("disabled", true);
			}
			
			if(chk_sum != ""){
				$("#ch_select_condition3_OL").prop("checked", true);
				show_sum = "";
				
				$("#tb_YearCondition_OL tbody>tr>td:nth-child(4) input").prop("disabled", false);
				$("#tb_YearCondition_OL tbody>tr>td:nth-child(5) input").prop("disabled", false);
				
			}else{
				show_sum = "displayNone";
				
				$("#tb_YearCondition_OL tbody>tr>td:nth-child(4) input").prop("disabled", true);
				$("#tb_YearCondition_OL tbody>tr>td:nth-child(5) input").prop("disabled", true);
			}
			
			if(chk_period != ""){
				$("#ch_select_condition4_OL").prop("checked", true);
				show_period = "";
				
				$("#tb_YearCondition_OL tbody>tr>td:nth-child(6) input").prop("disabled", false);
				$("#tb_YearCondition_OL tbody>tr>td:nth-child(7) input").prop("disabled", false);
				
			}else{
				show_period = "displayNone";
				
				$("#tb_YearCondition_OL tbody>tr>td:nth-child(6) input").prop("disabled", true);
				$("#tb_YearCondition_OL tbody>tr>td:nth-child(7) input").prop("disabled", true);
			}
			
			var num_condition = $("#panel_SaleCondition_OL1 input:checkbox:checked").length;
			if(num_condition == 1){
				table_width = "500";
			}else if(num_condition == 2){
				table_width = "700";
			}else if(num_condition == 3){
				table_width = "1000";
			}else if(num_condition == 4){
				table_width = "1200";
			}else if(num_condition == 5){
				table_width = "1500";
			}
			
			//gen table serie
			var table = "<table id='tbl_seriesCondition_OL' class='table table-bordered' style='width:"+table_width+"px;'>"+
			"<thead>"+
				"<tr>"+
					"<th class='text-center verticalCenter bg-primary borderBlack' width='10%' rowspan='2'>Series Name</th>"+
					"<th class='text-center verticalCenter bg-primary borderBlack "+show_gender+"' width='10%' rowspan='2'>เพศ</th>"+
					"<th class='text-center verticalCenter bg-primary borderBlack "+show_mode+"' width='10%' colspan='2'>OV</th>"+
					"<th class='text-center verticalCenter bg-primary borderBlack "+show_age+"' width='10%' colspan='2'>อายุ(ปี)</th>"+
					"<th class='text-center verticalCenter bg-primary borderBlack "+show_sum+"' width='10%' colspan='2'>ทุน(บาท)</th>"+
					"<th class='text-center verticalCenter bg-primary borderBlack "+show_period+"' width='10%' colspan='2'>ระยะชำระเบี้ย(ปี)</th>"+
				"</tr>"+
				"<tr>"+
					"<th class='text-center verticalCenter bg-primary borderBlack "+show_mode+"' width='10%'>รหัส</th>"+																				
					"<th class='text-center verticalCenter bg-primary borderBlack "+show_mode+"' width='10%'>Mode</th>"+
					"<th class='text-center verticalCenter bg-primary borderBlack "+show_age+"' width='10%'>ตั้งแต่</th>"+
					"<th class='text-center verticalCenter bg-primary borderBlack "+show_age+"' width='10%'>ถึง</th>"+
					"<th class='text-center verticalCenter bg-primary borderBlack "+show_sum+"' width='10%'>ตั้งแต่</th>"+
					"<th class='text-center verticalCenter bg-primary borderBlack "+show_sum+"' width='10%'>ถึง</th>"+
					"<th class='text-center verticalCenter bg-primary borderBlack "+show_period+"' width='10%'>ตั้งแต่</th>"+
					"<th class='text-center verticalCenter bg-primary borderBlack "+show_period+"' width='10%'>ถึง</th>"+
				"</tr>"+
			"</thead>"+
			"<tbody></tbody>"+
			"</table>";
			
			$("#div_seriesCondition_OL").append(table);
			
			if(num_condition >= 3){
				$("#div_seriesCondition_OL").addClass("scroll_Salebenefit2_OL");
			}
			
			$("#btn_generate_template_OL").show();
			
			//put data
			var lookup_mode = $("#lookup_bnf_mode_OL").val();
				lookup_mode = lookup_mode.split(",");				
			
			var new_row = "";
			var i = 1;	
			var bnf_mode_code = "";
			var bnf_mode_text = "";
			var value = 0;
			var pass = 1;
			var text = 2;
			
			for(j in obj.sel_benefits1){
				var obj_bnf1 = obj.sel_benefits1[j];
				var bnf_mode = obj_bnf1.mode;
				var bnf_min_age = obj_bnf1.min_age;
				var bnf_max_age = obj_bnf1.max_age;
				var bnf_min_sum = obj_bnf1.min_sum;
				var bnf_max_sum = obj_bnf1.max_sum;
				var bnf_gender = obj_bnf1.gender;
				var bnf_min_period = obj_bnf1.min_period;
				var bnf_max_period = obj_bnf1.max_period;
				var bnf_serie_no = obj_bnf1.serie_no;
				
				
				var bnf_gender_text = "";
				
				if(bnf_gender == "MALE"){
					bnf_gender_text = "ชาย";
				}else if(bnf_gender == "FEMALE"){
					bnf_gender_text = "หญิง";
				}
				
				//console.log("this mode>> "+bnf_mode);
				
				$("#tbl_PD_Mode_OL tbody>tr").each(function(){
					var mode = $(this).find("input:checkbox").val();
					if(bnf_mode == mode){
						//console.log("mode>> "+mode);
						bnf_mode_code = $(this).find("td:nth-child(2) label").text();
						bnf_mode_text = $(this).find("td:nth-child(3) label").text();
					}
				});
				
				//console.log("mode>> "+bnf_mode_text);
				
				//put data to table
				new_row += "<tr id='tr_series_OL"+i+"' data-id='"+i+"'>"+
				"<td class='verticalCenter text-center borderBlack'>"+
				"<label>S"+i+"</label>"+
				"</td>";
				
				//เพศ
				if(chk_gender != "NONE"){
					new_row += "<td class='verticalCenter text-center borderBlack'>"+
								"<label id='lb_gender"+i+"'>"+bnf_gender_text+"</label>"+
								"</td>";
				}
				
				//mode
				if(chk_mode != "NONE"){
					new_row += "<td class='verticalCenter text-center borderBlack'>"+
									"<label id='lb_mode_code"+i+"'>"+bnf_mode_code+"</label>"+
									"<input type='hidden' id='hdd_mode_value"+i+"' value='"+bnf_mode+"'>"+
								"</td>"+
								"<td class='verticalCenter borderBlack'>"+
									"<label id='lb_mode_text"+i+"'>"+bnf_mode_text+"</label>"+
								"</td>";
				}
				
				//age
				if(chk_age != ""){
					new_row += "<td class='verticalCenter text-center borderBlack'>"+
									"<label id='lb_age_from"+i+"'>"+bnf_min_age+"</label>"+
								"</td>"+
								"<td class='verticalCenter text-center borderBlack'>"+
									"<label id='lb_age_to"+i+"'>"+bnf_max_age+"</label>"+
								"</td>";
				}
				
				//ทุน
				if(chk_sum != ""){
					new_row += "<td class='verticalCenter text-right borderBlack'>"+
									"<label id='lb_sum_from"+i+"'>"+parseFloat(bnf_min_sum).toFixed(2)+"</label>"+
								"</td>"+
								"<td class='verticalCenter text-right borderBlack'>"+
									"<label id='lb_sum_to"+i+"'>"+parseFloat(bnf_max_sum).toFixed(2)+"</label>"+
								"</td>";
				}
				
				//ระยะชำระเบี้ย
				if(chk_period != ""){
					new_row += "<td class='verticalCenter text-center borderBlack'>"+
									"<label id='lb_period_from"+i+"'>"+bnf_min_period+"</label>"+
								"</td>"+
								"<td class='verticalCenter borderBlack'>"+
									"<label id='lb_period_to"+i+"'>"+bnf_max_period+"</label>"+
								"</td>";
				}
				
				new_row += "</tr>";
	
				i++;
				
				value = Number(parseInt(value) + parseInt(3));
				pass = Number(parseInt(pass) + parseInt(3));
				text = Number(parseInt(text) + parseInt(3));
				
			}
			
			/*ใส่ row ใน tbody*/
			if($("#tbl_seriesCondition_OL thead").length > 0){
				$("#tbl_seriesCondition_OL tbody").append(new_row);
			}
			
		}
		
	}
	
	//ระบุผลประโยชน์การขาย
	//alert(obj.sel_benefits2.length);
	
	if(obj.sel_benefits1.length > 0 && obj.sel_benefits2.length > 0){
		var ii = 1;
		var new_row_level1 = "";
		var serie_no_child = "";
		var rowChild3 = 1;
		for(i in obj.sel_benefits2){
			
			var obj_bnf = obj.sel_benefits2[i];
			
			var seq = obj_bnf.seq;
			var serie_no = obj_bnf.serie_no;

			var date_start = obj_bnf.eff_data;
			var date_to = obj_bnf.exp_data;
			var year1 = obj_bnf.year1;
			var year2 = obj_bnf.year2;
			var year3 = obj_bnf.year3;
			var year4 = obj_bnf.year4;
			var credit = obj_bnf.credit;
			var overrid = obj_bnf.overrid;
			var advance = obj_bnf.advance;
			var mkt_Inc = obj_bnf.mkt_Inc;
			var sale_volume = obj_bnf.saleValume;
			var mkt_Exp = obj_bnf.mkt_Exp;
			
			var prd_code 		= "";
			var bnf_cov_code 	= "";

			//Benz set Clone 22-11-2019
			if (type == "Clone") {
				if (prd_code_temp == obj_bnf.prd_code) {
					prd_code 		= prd_code_Clone;
					bnf_cov_code	= prd_code_Clone;
				}else {
					prd_code 		= obj_bnf.prd_code;
					bnf_cov_code 	= obj_bnf.prd_code;
				}
			}else {
				prd_code 			= obj_bnf.prd_code;
				bnf_cov_code 		= obj_bnf.prd_code;

			}
			
			//console.log(ii);
			$("#tbl_SaleBenefit_OL tbody>tr[data-group='1']").each(function(){
				var prd_rider_code = $(this).find("td:nth-child(1) #prd_rider_code_cond_OL").val();
				
				if((bnf_cov_code == prd_rider_code) && ii == 1 && serie_no == 1 && serie_no != ""){
						$(this).find("td:nth-child(5) input").val(date_start);
						$(this).find("td:nth-child(6) input").val(date_to);
						$(this).find("td:nth-child(7) input").val(numberWithCommas(parseFloat(year1).toFixed(2)));
						$(this).find("td:nth-child(8) input").val(numberWithCommas(parseFloat(year2).toFixed(2)));
						$(this).find("td:nth-child(9) input").val(numberWithCommas(parseFloat(year3).toFixed(2)));
						$(this).find("td:nth-child(10) input").val(numberWithCommas(parseFloat(year4).toFixed(2)));
						$(this).find("td:nth-child(11) input").val(numberWithCommas(parseFloat(credit).toFixed(2)));
						$(this).find("td:nth-child(12) input").val(numberWithCommas(parseFloat(overrid).toFixed(2)));
						$(this).find("td:nth-child(13) input").val(numberWithCommas(parseFloat(advance).toFixed(2)));
						$(this).find("td:nth-child(14) input").val(numberWithCommas(parseFloat(mkt_Inc).toFixed(2)));
						$(this).find("td:nth-child(15) input").val(numberWithCommas(parseFloat(sale_volume).toFixed(2)));
						$(this).find("td:nth-child(16) input").val(numberWithCommas(parseFloat(mkt_Exp).toFixed(2)));
					ii++;
					
					serie_no_child = serie_no;
					rowChild3 = 1;
				}else if((bnf_cov_code == prd_rider_code) && ii != 1 && serie_no != 1 && serie_no != ""){
					var new_row_id = serie_no;
					new_row_level1 += "<tr id='tr_saleBnf_cond"+new_row_id+"' data-id='"+new_row_id+"' data-level='1' data-group='1'>"+
				 	"<td class=\'text-center verticalCenter\'  class=\'text-center verticalCenter\'>"+
				 	"<input type='hidden' id='cov_type_cond_OL' value='B'>"+
					"<input type='hidden' id='prd_rider_code_cond_OL' value='"+prd_code+"'>"+
					"<input type='hidden' id='seq_cond_OL' value='1'>"+
					"<input type='hidden' id='serie_cond_OL' value='"+serie_no+"'>"+
				 	"</td>"+
				 	"<td class=\'text-center verticalCenter\'  class=\'text-center verticalCenter\'></td>"+
					"<td class=\'text-center verticalCenter\'  class=\'text-center verticalCenter\'><label>S"+serie_no+"</label></td>"+
					"<td class=\"text-center verticalCenter\">"+
					"<i class=\"glyphicon glyphicon-plus icon-blue-circle \"  data-id=\'"+new_row_id+"\' id=\"addrow_rd_cond_"+new_row_id+"\" onclick='add_row_saleBnf_cond_OL(this);'></i>"+
					"</td>"+
					"<td class='text-center'><input type='text' class='form-control format_date' id='datefrom_saleBnf_cond"+new_row_id+"' onblur='' placeholder='dd/mm/yyyy' value='"+date_start+"' maxlength='10' readonly></td>"+
					"<td class='text-center'><input type='text' class='form-control format_date' id='dateto_saleBnf_cond"+new_row_id+"' onblur='checkdateTo_OL(this.id);' placeholder='dd/mm/yyyy' value='"+date_to+"' maxlength='10' readonly></td>"+	
					"<td class=\'text-right verticalCenter\'>"+
					"<input type='text' class='auto text-right form-control' id='txb_year1_cond_"+new_row_id+"' onblur='checkZero_OL(this);' value='"+numberWithCommas(parseFloat(year1).toFixed(2))+"' data-v-min='0.00' data-v-max=999.99>" +
					"</td>"+
					"<td class=\'text-right verticalCenter\'>"+
					"<input type='text' class='auto text-right form-control' id='txb_year2_cond_"+new_row_id+"' onblur='checkZero_OL(this);' value='"+numberWithCommas(parseFloat(year2).toFixed(2))+"' data-v-min='0.00' data-v-max='999.99'>" +
					"</td>"+
					"<td class=\'text-right verticalCenter\'>"+
					"<input type='text' class='auto text-right form-control'  id='txb_year3_cond_"+new_row_id+"' onblur='checkZero_OL(this);' value='"+numberWithCommas(parseFloat(year3).toFixed(2))+"' data-v-min='0.00' data-v-max='999.99'>" +
					"</td>"+
					"<td class=\'text-right verticalCenter\'>"+
					"<input type='text' class='auto text-right form-control' id='txb_year4_cond_"+new_row_id+"' onblur='checkZero_OL(this);' value='"+numberWithCommas(parseFloat(year4).toFixed(2))+"' data-v-min='0.00' data-v-max='999.99'>" +
					"</td>"+
					"<td class=\'text-right verticalCenter\'>"+
					"<input type='text' class='auto text-right form-control' id='txb_credit_cond_"+new_row_id+"' onblur='checkZero_OL(this);' value='"+numberWithCommas(parseFloat(credit).toFixed(2))+"' data-v-min='0.00' data-v-max='999.99'>" +
					"</td>"+
					"<td class=\'text-right verticalCenter\'>"+
					"<input type='text' class='auto text-center form-control' id='txb_override_cond_"+new_row_id+"' onblur='checkZero_OL(this);' value='"+numberWithCommas(parseFloat(overrid).toFixed(2))+"' data-v-min='0.00' data-v-max='999.99'>" +
					"</td>"+
					"<td class=\'text-right verticalCenter\'>"+
					"<input type='text' class='auto text-center form-control' id='txb_comm_cond_"+new_row_id+"' onblur='checkZero_OL(this);' value='"+numberWithCommas(parseFloat(advance).toFixed(2))+"' data-v-min='0.00' data-v-max='999.99'>" +
					"</td>"+
					"<td class=\'text-right verticalCenter\'>"+
					"<input type='text' class='auto text-center form-control' id='txb_incentive_cond_"+new_row_id+"' onblur='checkZero_OL(this);' value='"+numberWithCommas(parseFloat(mkt_Inc).toFixed(2))+"' data-v-min='0.00' data-v-max='999.99'>" +
					"</td>"+
					"<td class=\'text-right verticalCenter\'>"+
					"<input type='text' class='auto text-center form-control' id='txb_bonus_cond_"+new_row_id+"' onblur='checkZero_OL(this);' value='"+numberWithCommas(parseFloat(sale_volume).toFixed(2))+"' data-v-min='0.00' data-v-max='999.99'>" +
					"</td>"+
					"<td class=\'text-right verticalCenter\'>"+
					"<input type='text' class='auto text-center form-control' id='txb_expense_cond_"+new_row_id+"' onblur='checkZero_OL(this);' value='"+numberWithCommas(parseFloat(mkt_Exp).toFixed(2))+"' data-v-min='0.00' data-v-max='999.99'>" +
					"</td>"+
					"</tr>";
					ii++;
					
					serie_no_child = serie_no;
					rowChild3 = 1;
					//$(new_row_level1).insertAfter($("#tbl_SaleBenefit_OL tbody>tr[data-level='1']:last").closest('tr'));
					
				}else if(bnf_cov_code == prd_rider_code && serie_no == ""){
					
					var group_id = $(this).attr("data-group");
					id_parent = $("#tbl_SaleBenefit_OL tbody>tr[data-id='"+group_id+"']").attr('data-id');
				
					var cov_code_main = $("#tbl_SaleBenefit_OL tbody>tr[data-id='"+group_id+"']").find("td:nth-child(1) label").text();
					var disabled = "";
					var disabled_all = "";
					
					if(group_id == 1){
						type = "B";
					}else{
						type = "R";
					}
					
					if(type == "B"){
						disabled = "";
						disabled_all = "";
					}else{
						disabled = "disabled";
						disabled_all = "disabledAll";
					}
					
					if(serie_no == ""){
						serie_no = serie_no_child;
					}
					
					var name_tr = "tr_saleBnf_cond"+serie_no+"_"+rowChild3;
					var new_row_id_child = serie_no+"_"+rowChild3;
					new_row_level1 += "<tr id='tr_saleBnf_cond"+new_row_id_child+"' data-id='"+new_row_id_child+"' data-parent='"+serie_no+"' data-level='2' data-group='"+serie_no+"'>"+
					 	"<td class=\'text-center verticalCenter\'  class=\'text-center verticalCenter\'>"+
					 	"<input type='hidden' id='cov_type_cond_OL' value='"+type+"'>"+
						"<input type='hidden' id='prd_rider_code_cond_OL' value='"+bnf_cov_code+"'>"+
						"<input type='hidden' id='seq_cond_OL' value='"+seq+"'>"+
						"<input type='hidden' id='serie_cond_OL' value='"+serie_no+"'>"+
					 	"</td>"+
					 	"<td class=\'text-center verticalCenter\'  class=\'text-center verticalCenter\'></td>"+
						"<td class=\'text-center verticalCenter\'  class=\'text-center verticalCenter\'><label>S"+serie_no+"</label></td>"+
						"<td class=\"text-center verticalCenter\">"+
						"<i class=\"glyphicon glyphicon-minus icon-blue-circle icon_active "+disabled_all+" \"  data-id=\'"+new_row_id+"\' id=\"removerow_cond_OL_"+new_row_id_child+"\" onclick='removeRow_cond_OL(this);'></i>"+
						"</td>"+
						"<td class='text-center'><input type='text' class='form-control format_date "+disabled_all+"' id='datefrom_saleBnf_cond"+new_row_id_child+"' onblur='' placeholder='dd/mm/yyyy' value='"+date_start+"' maxlength='10' disabled></td>"+
						"<td class='text-center'><input type='text' class='form-control format_date "+disabled_all+"' id='dateto_saleBnf_cond"+new_row_id_child+"' onblur='checkdateTo_OL(this.id);' placeholder='dd/mm/yyyy' value='"+date_to+"' maxlength='10' "+disabled+" readonly></td>"+	
						"<td class=\'text-right verticalCenter\'>"+
						"<input type='text' class='auto text-right form-control' id='txb_year1_cond_"+new_row_id_child+"' onblur='checkZero_OL(this);' value='"+numberWithCommas(parseFloat(year1).toFixed(2))+"' data-v-min='0.00' data-v-max='999.99' "+disabled+">" +
						"</td>"+
						"<td class=\'text-right verticalCenter\'>"+
						"<input type='text' class='auto text-right form-control' id='txb_year2_cond_"+new_row_id_child+"' onblur='checkZero_OL(this);' value='"+numberWithCommas(parseFloat(year2).toFixed(2))+"' data-v-min='0.00' data-v-max='999.99' "+disabled+">" +
						"</td>"+
						"<td class=\'text-right verticalCenter\'>"+
						"<input type='text' class='auto text-right form-control'  id='txb_year3_cond_"+new_row_id_child+"' onblur='checkZero_OL(this);' value='"+numberWithCommas(parseFloat(year1).toFixed(3))+"' data-v-min='0.00' data-v-max='999.99' "+disabled+">" +
						"</td>"+
						"<td class=\'text-right verticalCenter\'>"+
						"<input type='text' class='auto text-right form-control' id='txb_year4_cond_"+new_row_id_child+"' onblur='checkZero_OL(this);' value='"+numberWithCommas(parseFloat(year4).toFixed(2))+"' data-v-min='0.00' data-v-max='999.99' "+disabled+">" +
						"</td>"+
						"<td class=\'text-right verticalCenter\'>"+
						"<input type='text' class='auto text-right form-control' id='txb_credit_cond_"+new_row_id_child+"' onblur='checkZero_OL(this);' value='"+numberWithCommas(parseFloat(credit).toFixed(2))+"' data-v-min='0.00' data-v-max='999.99' "+disabled+">" +
						"</td>"+
						"<td class=\'text-right verticalCenter\'>"+
						"<input type='text' class='auto text-center form-control' id='txb_override_cond_"+new_row_id_child+"' onblur='checkZero_OL(this);' value='"+numberWithCommas(parseFloat(overrid).toFixed(2))+"' data-v-min='0.00' data-v-max='999.99' "+disabled+">" +
						"</td>"+
						"<td class=\'text-right verticalCenter\'>"+
						"<input type='text' class='auto text-center form-control' id='txb_comm_cond_"+new_row_id_child+"' onblur='checkZero_OL(this);' value='"+numberWithCommas(parseFloat(advance).toFixed(2))+"' data-v-min='0.00' data-v-max='999.99' "+disabled+">" +
						"</td>"+
						"<td class=\'text-right verticalCenter\'>"+
						"<input type='text' class='auto text-center form-control' id='txb_incentive_cond_"+new_row_id_child+"' onblur='checkZero_OL(this);' value='"+numberWithCommas(parseFloat(mkt_Inc).toFixed(2))+"' data-v-min='0.00' data-v-max='999.99' "+disabled+">" +
						"</td>"+
						"<td class=\'text-right verticalCenter\'>"+
						"<input type='text' class='auto text-center form-control' id='txb_bonus_cond_"+new_row_id_child+"' onblur='checkZero_OL(this);' value='"+numberWithCommas(parseFloat(sale_volume).toFixed(2))+"' data-v-min='0.00' data-v-max='999.99' "+disabled+">" +
						"</td>"+
						"<td class=\'text-right verticalCenter\'>"+
						"<input type='text' class='auto text-center form-control' id='txb_expense_cond_"+new_row_id_child+"' onblur='checkZero_OL(this);' value='"+numberWithCommas(parseFloat(mkt_Exp).toFixed(2))+"' data-v-min='0.00' data-v-max='999.99' "+disabled+">" +
						"</td>"+
						"</tr>";	
						
					rowChild3++;
				}

			});
		}
		
		$(new_row_level1).insertAfter($("#tbl_SaleBenefit_OL #tr_saleBnf_cond1").closest('tr'));
		
		/****gen new all id****/
		var j = 1;
		$("#tbl_SaleBenefit_OL tbody>tr[data-level='1']").each(function(){
			var data_id = $(this).attr("data-id");
			var children = $(this).find("tr[data-group='"+data_id+"']");
			//console.log(data_id);
			
			var jj = 0;
			$("#tbl_SaleBenefit_OL tbody>tr[data-level='2']").each(function(){
				jj++;
				var data_group = $(this).attr("data-group");
				var type = $(this).find("#cov_type_cond_OL").val();
				
				if(type == "B"){
					
				}else{
					//type = R
					if(data_group == data_id){
						var id_child = $(this).attr("id");
							id_child = id_child.replace("tr_saleBnf_cond","");
							id_child = id_child.replace(data_group,j);
						var number_child_new = id_child;							
						
						$(this).attr("id","tr_saleBnf_cond"+number_child_new);
						$(this).attr("data-id",number_child_new);
						$(this).find("td:nth-child(4) i").attr("id","addrow_rd_cond_"+number_child_new);
						$(this).find("td:nth-child(4) i").attr("data-id",number_child_new);
						$(this).find("td:nth-child(5) input").attr("id","datefrom_saleBnf_cond"+number_child_new);
						$(this).find("td:nth-child(6) input").attr("id","dateto_saleBnf_cond"+number_child_new);
						$(this).find("td:nth-child(7) input").attr("id","txb_year1_cond_"+number_child_new);
						$(this).find("td:nth-child(8) input").attr("id","txb_year2_cond_"+number_child_new);
						$(this).find("td:nth-child(9) input").attr("id","txb_year3_cond_"+number_child_new);
						$(this).find("td:nth-child(10) input").attr("id","txb_year4_cond_"+number_child_new);
						$(this).find("td:nth-child(11) input").attr("id","txb_credit_cond_"+number_child_new);
						$(this).find("td:nth-child(12) input").attr("id","txb_override_cond_"+number_child_new);
						$(this).find("td:nth-child(13) input").attr("id","txb_comm_cond_"+number_child_new);
						$(this).find("td:nth-child(14) input").attr("id","txb_incentive_cond_"+number_child_new);
						$(this).find("td:nth-child(15) input").attr("id","txb_bonus_cond_"+number_child_new);
						$(this).find("td:nth-child(16) input").attr("id","txb_expense_cond_"+number_child_new);
						$(this).attr("data-group", j);
						$(this).attr("data-parent", j);
					}
				}
				
			});
			
			$(this).attr("id", "tr_saleBnf_cond"+j);
			$(this).attr("data-id", j);
			$(this).attr("data-group", j);
			$(this).find("td:nth-child(2) input").attr("id","chk_is_ref_base_cond"+j);
			$(this).find("td:nth-child(4) i").attr("id","addrow_rd_cond_"+j);
			$(this).find("td:nth-child(4) i").attr("data-id",j);
			$(this).find("td:nth-child(5) input").attr("id","datefrom_saleBnf_cond"+j);
			$(this).find("td:nth-child(6) input").attr("id","dateto_saleBnf_cond"+j);
			$(this).find("td:nth-child(7) input").attr("id","txb_year1_cond_"+j);
			$(this).find("td:nth-child(8) input").attr("id","txb_year2_cond_"+j);
			$(this).find("td:nth-child(9) input").attr("id","txb_year3_cond_"+j);
			$(this).find("td:nth-child(10) input").attr("id","txb_year4_cond_"+j);
			$(this).find("td:nth-child(11) input").attr("id","txb_credit_cond_"+j);
			$(this).find("td:nth-child(12) input").attr("id","txb_override_cond_"+j);
			$(this).find("td:nth-child(13) input").attr("id","txb_comm_cond_"+j);
			$(this).find("td:nth-child(14) input").attr("id","txb_incentive_cond_"+j);
			$(this).find("td:nth-child(15) input").attr("id","txb_bonus_cond_"+j);
			$(this).find("td:nth-child(16) input").attr("id","txb_expense_cond_"+j);
			
			j++;
		});
		
		$("#panel_SaleBenefit_OL3").show();
	}
	
	
	$('.auto').autoNumeric('init');
	
	/*jQuery(".format_date").datetimepicker({
		  timepicker:false,
		  format:'d/m/Y',
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
		  maxDate: '9456/12/31',
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

/*5.ข้อกำหนดการรับประกัน*/
function showcase_term_warranty_OL(response,type,prd_code_temp,prd_code_Clone){
	
	var obj_product = response.Tab_Provision[0].product[0];
	$("#menu_term1_datefrom_ol").val(obj_product.sale_eff_date);
	$("#menu_term1_dateto_ol").val(obj_product.sale_exp_date);
	$("#system_date_ol").val(obj_product.sys_eff_date);
	if( obj_product.is_flp ){
		$("#chk_free_look_OL").prop("checked",true);
		$("#amount_free_look_OL").attr("disabled",false);
		$("#deduct_cost_OL").attr("disabled",false);
	}
	$("#amount_free_look_OL").val(obj_product.flp_day);
	if( obj_product.is_flp_fee ){
		$("#deduct_cost_OL").prop("checked",true);
		$("#tbl_deduct_cost_OL").attr("style","");
		$("#tbl_deduct_cost_OL :input[type='checkbox']").attr("disabled",false)
	}
	
	/*participant พิกัดอายุ*/
	if(response.Tab_Provision[0].participant[0]){
		var obj_pariticipant =  response.Tab_Provision[0].participant[0];
		$("#start_age_insure_ol").val(obj_pariticipant.min_issue_age);
		$("#start_age_insure_unit_ol option[value='"+obj_pariticipant.min_issue_age_unit+"']").attr("selected","selected");
		$("#end_age_insure_ol").val(obj_pariticipant.max_issue_age);
		$("#end_age_insure_unit_ol option[value='"+obj_pariticipant.max_issue_age_unit+"']").attr("selected","selected");
		
		$("#tbl_formulaTerms_OL tbody>tr").each(function(i){
			if( obj_pariticipant.age_calc_meth == $(this).find('td:nth-child(1) input').val()){
				$(this).find('td:nth-child(1) input').prop("checked",true).attr("disabled",false)
			}
		})
	}
	
	/*mode*/
	if(response.Tab_Provision[0].mode.length > 0){
		$("#tbl_modeTerms_OL :input[type='checkbox']").prop("checked",false);
		$("#tbl_modeTerms_OL2 :input[type='checkbox']").prop("checked",false);
	}
	for(i in response.Tab_Provision[0].mode){
		var obj = response.Tab_Provision[0].mode[i];
		if( obj.prem_cal_meth == "EITHER"){
			$("#tbl_modeTerms_OL input[type='checkbox'][value="+obj.value+"]").prop("checked",true)
			$("#tbl_modeTerms_OL2 input[type='checkbox'][value="+obj.value+"]").prop("checked",true)
		}else if( obj.prem_cal_meth == "SA_ONLY"){
			$("#tbl_modeTerms_OL input[type='checkbox'][value="+obj.value+"]").prop("checked",true)
		}else if( obj.prem_cal_meth == "PREM_ONLY"){
			$("#tbl_modeTerms_OL2 input[type='checkbox'][value="+obj.value+"]").prop("checked",true)
		}
	}
	
	/*ชั้นอาชีพที่เสนอขาย*/
	for(i in response.Tab_Provision[0].occ){
		var obj = response.Tab_Provision[0].occ[i];
		$("#tbl_saleDegreeTerm_OL tbody>tr").each(function(){
			if(obj.value == $(this).find("td:nth-child(1) input[type='checkbox']").val()){
				$(this).find("td:nth-child(1) input[type='checkbox']").prop("checked",true);
			}
		});
	}
	validate_levelJob_OL()
	
	/*underwrite*/
	var obj_underwrite = response.Tab_Provision[0].underwrite[0];
	$("#amount_insure_alone_CL").val(obj_underwrite.prd_max_sa)
	$("#amount_insure_alone_unit_CL option[value="+obj_underwrite.prd_max_sa_unit+"]").attr("selected",true)
	$("#amount_insure_alone_factor_CL option[value="+obj_underwrite.prd_max_sa_factor+"]").attr("selected",true)
	//จำนวนเงินเอาประกันภัยสูงสุด (ต่อแบบ)
	if( obj_underwrite.is_prd_max_policy){
		$("#rd_max_amount_insure_OL1").prop("checked",true);
		chk_max_amount_insure_OL(1);
		if(obj_underwrite.prd_max_policy){
			$("#chk_max_amount_limit_OL1").prop("checked",true);
			chk_max_amount_limit_OL(1);
			$("#txb_max_amount_limit_OL1").val(numberWithCommas(parseFloat(obj_underwrite.prd_max_policy).toFixed(0)))
		}
		if(obj_underwrite.prd_max_sa){
			$("#chk_max_amount_limit_OL2").prop("checked",true);
			chk_max_amount_limit_OL(2);
			$("#txb_max_amount_limit_OL2").val(numberWithCommas(parseFloat(obj_underwrite.prd_max_sa).toFixed(2)))
		}
	}
	//จำนวนเงินเอาประกันภัยสูงสุด (ต่อราย)
	if( obj_underwrite.is_pax_max_policy){
		$("#rd_single_max_amount_insure_OL1").prop("checked",true);
		chk_single_max_amount_insure_OL(1);
		if(obj_underwrite.pax_max_policy){
			$("#chk_single_max_amount_limit_OL1").prop("checked",true);
			chk_single_max_amount_limit_OL(1);
			$("#txb_single_max_amount_limit_OL1").val(numberWithCommas(parseFloat(obj_underwrite.pax_max_policy).toFixed(0)))
		}
		if(obj_underwrite.pax_max_sa){
			$("#chk_single_max_amount_limit_OL2").prop("checked",true);
			chk_single_max_amount_limit_OL(2);
			$("#txb_single_max_amount_limit_OL2").val(numberWithCommas(parseFloat(obj_underwrite.pax_max_sa).toFixed(2)))
		}
	}
	if( obj_underwrite.is_med_req){
		$("#rd_health_check_OL1").prop("checked",true);
		chk_health_check_OL(1)
		$("#amount_health_insurance_OL").val((obj_underwrite.med_sum_factor*100).toFixed(2))
	}else{
		chk_health_check_OL(2)
	}
	if( obj_underwrite.is_med_sum_accum){
		$("#rd_health_money_OL1").prop("checked",true);
		chk_health_insurance_OL(1);
	}
	if( obj_underwrite.is_exist_policy){
		$("#rd_old_list_OL1").prop("checked",true);	
		chk_old_insurance_OL(1);
	}
	if( obj_underwrite.is_insure_sum_accum){
		$("#rd_capital_OL1").prop("checked",true);
		chk_uw_consider_OL(1);
		$("#amount_uw_insurance_OL").val((obj_underwrite.insure_sum_factor*100).toFixed(2))
	}
	if( obj_underwrite.is_substandard){
		$("#rd_increase_premium_OL1").prop("checked",true);
		chk_increase_premium_OL(1);
	}else{
		$("#rd_increase_premium_OL2").prop("checked",true);
		chk_increase_premium_OL(2);
	}
	/*if( obj_underwrite.is_rider_allow){
		$("#rd_buy_contractAmount_OL1").prop("checked",true);
	}else{
		$("#rd_buy_contractAmount_OL2").prop("checked",true);
	}*/
	if( obj_underwrite.rider_buy_meth == "EITHER"){
		$("#rd_buy_contractAmount_OL1").prop("checked",true);
		$("#rd_buy_contractAmount_OL2").prop("checked",false);
		$("#rd_buy_contractInsure_OL1").prop("checked",true);
		$("#rd_buy_contractInsure_OL2").prop("checked",false);
		
		//Khwan fix ตาราง disabled
		$("#div_buy_followCapital>.panel-body>.col-sm-12").removeClass("disabledAll");
		//Pun fix ตาราง disabled
		$("#div_buy_followRate>.panel-body>div.col-sm-12").removeClass("disabledAll");
		
	}else if( obj_underwrite.rider_buy_meth == "SA_ONLY"){
		$("#rd_buy_contractAmount_OL1").prop("checked",true);
		$("#rd_buy_contractAmount_OL2").prop("checked",false);
		$("#rd_buy_contractInsure_OL1").prop("checked",false);
		$("#rd_buy_contractInsure_OL2").prop("checked",true);
		
		//Khwan fix ตาราง disabled
		$("#div_buy_followCapital>.panel-body>.col-sm-12").removeClass("disabledAll");
		
	}else if( obj_underwrite.rider_buy_meth == "PREM_ONLY"){
		$("#rd_buy_contractAmount_OL1").prop("checked",false);
		$("#rd_buy_contractAmount_OL2").prop("checked",true);
		$("#rd_buy_contractInsure_OL1").prop("checked",true);
		$("#rd_buy_contractInsure_OL2").prop("checked",false);
		
		//Pun fix ตาราง disabled
		$("#div_buy_followRate>.panel-body>div.col-sm-12").removeClass("disabledAll");
	}else{
		$("#rd_buy_contractAmount_OL1").prop("checked",false);
		$("#rd_buy_contractAmount_OL2").prop("checked",true);
		$("#rd_buy_contractInsure_OL1").prop("checked",false);
		$("#rd_buy_contractInsure_OL2").prop("checked",true);
	}
	if( obj_underwrite.is_rider_sum_accum){
		$("#rd_buy_contract_period_OL1").prop("checked",true);
	}else{
		$("#rd_buy_contract_period_OL2").prop("checked",true);
	}
	if( obj_underwrite.is_check_ic_ba){
		$("#chk_check_data_OL4").prop("checked",true);
	}else{
		//$("#chk_check_data_CL4").prop("checked",false);
	}
	if( obj_underwrite.is_check_ic_fi_cft){
		$("#chk_check_data_OL5").prop("checked",true);
	}else{
		//$("#chk_check_data_OL5").prop("checked",false);
	}
	if( obj_underwrite.is_check_sale_blacklist){
		$("#chk_check_data_OL6").prop("checked",true);
	}else{
		$("#chk_check_data_OL6").prop("checked",false);
	}
	/*if( obj_underwrite.is_reins_alert){
		$("#rd_filing_rs_OL1").prop("checked",true);
	}else{
		$("#rd_filing_rs_OL2").prop("checked",true);
	}*/
	if( obj_underwrite.is_fax_app){
		$("#rd_fax_app_OL1").prop("checked",true);
	}else{
		$("#rd_fax_app_OL2").prop("checked",true);
	}
	if( obj_underwrite.pol_print_at == "IN_HOUSE"){
		$("#rd_policy_choice_OL1").prop("checked",true)
		$("#rd_policy_choice_OL2").prop("checked",false)
	}else if( obj_underwrite.pol_print_at == "OUTSOURCE"){
		$("#rd_policy_choice_OL2").prop("checked",true)
		$("#rd_policy_choice_OL1").prop("checked",false)
	}
	
	/*ช่วงจำนวนเงินเอาประกันภัย*/
	if(response.Tab_Provision[0].unwsumrange != null){
		for(i in response.Tab_Provision[0].unwsumrange){
			var obj_sumRamge = response.Tab_Provision[0].unwsumrange[i];
			if( obj_sumRamge.amt_type == "SA"){
				$("#tbl_insure_range_OL tbody>tr").remove();
			}
		}
		var rowID = 1;
		for(i in response.Tab_Provision[0].unwsumrange){
			
			var obj_sumRamge = response.Tab_Provision[0].unwsumrange[i];
			if( obj_sumRamge.amt_type == "SA"){
				
				row = "<tr>"
					if(rowID == 1){
						row += "<td id='imgOK_healthInsurance"+rowID+"' class='text-center vertical-middle'></td>"
					}else{
						row += "<td id='imgOK_healthInsurance"+rowID+"' class='text-center vertical-middle' onclick='imgCheckbox(this.id);'><i class='glyphicon glyphicon-edit' ></i></td>"
					}
					row += 	"<td class='verticalCenter text-right'>"
					if(rowID == 1){
						row +=	"<input type='text' id='amount_insure_range_from_OL"+rowID+"' class='autoComma form-control text-right' data-v-min='0' "+
									"data-v-max='99999999' value='"+obj_sumRamge.min_sa+"' onchange='validateMax_tbAmountTo_OL(this)'>"
					}else{
						row +=	"<input type='text' id='amount_insure_range_from_OL"+rowID+"' class='autoComma form-control text-right' data-v-min='0' "+
									"data-v-max='99999999' value='"+obj_sumRamge.min_sa+"' onchange='validateMax_tbAmountTo_OL(this)' disabled>"
					}
						row +=	"</td>"+						
						"<td class='text-center'>"+
							"<input type='text' id='amount_insure_range_to_OL"+rowID+"' class='autoComma form-control text-right' data-v-min='1' " +
									"data-v-max='99999999' value='"+obj_sumRamge.max_sa+"' onchange='validateMax_tbAmountTo_OL(this)' >"+
						"</td>"+	
						"<td class='text-center'>"+
							"<input type='text' id='amount_insure_range_addup_OL"+rowID+"' class='autoComma form-control text-right' value='"+obj_sumRamge.increase_range+"' data-v-min='0' data-v-max='99999999'>"+
						"</td>"+																								
					"</tr>"	
						
				$("#tbl_insure_range_OL tbody").append(row)
				rowID++;
			}else if( obj_sumRamge.amt_type == "PREM"){
				if(obj_sumRamge.increase_range == null){
					$("#buy_forwardRate_OL").val(0)
				}else{
					if(obj_sumRamge.increase_range != ""){
						$("#buy_forwardRate_OL").val(numberWithCommas((obj_sumRamge.increase_range).toFixed(2)))
					}
				}
				
			}
		}
	}
	
	/*การตรวจสุขภาพ และการตรวจ Anti-HIV (ตามทุน)*/
	for(i in response.Tab_Provision[0].appenDixProduct){
		//$("#rd_health_check_CL1").prop("checked",true);
		//$("#tbl_health_check_CL").show();
		var obj_appenDix = response.Tab_Provision[0].appenDixProduct[i];
		$("#tbl_health_check_OL tbody>tr").each(function(){
			if( obj_appenDix.Appendix_code == $(this).find('td:nth-child(1) input').val()){
				$(this).find('td:nth-child(1) input').prop("checked",true);
			}
		})
	}
	
	/*การรวมเงินเอาประกันภัยเพื่อตรวจสุขภาพ , การแสดงรายการ กธ. เดิม , การรวมทุนคุ้มครอง (อำนาจการพิจารณาของ UW)*/
	for(i in response.Tab_Provision[0].unwAccumRule){
		var obj = response.Tab_Provision[0].unwAccumRule[i];
		if( obj.accum_type == "MED_SUM"){
			$("#tbl_health_insurance_OL tbody>tr").remove();
		}else if( obj.accum_type == "EXIST_POLICY"){
			$("#tbl_old_insurance_OL tbody>tr").remove();
		}else if( obj.accum_type == "INSURED_SUM"){
			$("#tbl_UW_consider_OL tbody>tr").remove();
		}else if( obj.accum_type == "POLICY"){
			$("#tbl_insuranceIssue_OL tbody>tr").remove();
		}else if( obj.accum_type == "SA"){
			$("#tbl_insuranceMax_OL tbody>tr").remove();
		}
	}
	var row = "";
	var row_id = 0;
	var row_id_health = 1;
	var row_id_old = 1;
	var row_id_uw = 1;
	var row_id_policy = 1;
	var row_id_sa = 1;
	var main_contract = $("#main_contract").html();
	var lookup_senior = $("#lookup_slSenior_OL").val();
	var lookup_reinsurance_Group = $("#lookup_reinsurance_Group_OL").val();
	var lookup_filing_Channel = $("#lookup_filing_Channel_OL").val();
	var lookup_sale_Channel = $("#lookup_sale_Channel_OL").val();
	for(i in response.Tab_Provision[0].unwAccumRule){
		var obj = response.Tab_Provision[0].unwAccumRule[i];
		if( obj.accum_type == "MED_SUM"){	
			row_id = row_id_health;
			var tr = "tr_healthInsurance_OL";
			var imgOk_id = "imgOK_healthInsurance_OL";
			var imgOk_click = "imgCheckbox_healthInsurance_OL";
			var sl_contract = "sl_contractType_healthInsurance_OL";
			var sl_policy = "sl_policyType_healthInsurance_OL";
			var sl_product = "sl_productType_healthInsurance_OL";
			var sl_reinsurance = "sl_Reinsurance_healthInsurance_OL";
			var sl_senior = "sl_senior_healthInsurance_OL";
			var sl_saleChanel = "sl_saleChannel_healthInsurance_OL";
			var sl_salePartner = "sl_partner_healthInsurance_OL";
		}else if( obj.accum_type == "EXIST_POLICY"){	
			row_id = row_id_old;
			var tr = "tr_oldinsurance_OL";
			var imgOk_id = "imgOK_oldinsurance_OL";
			var imgOk_click = "imgCheckbox_oldinsurance_OL";
			var sl_contract = "sl_contractType_oldinsurance_OL";
			var sl_policy = "sl_policyType_oldinsurance_OL";
			var sl_product = "sl_productType_oldinsurance_OL";
			var sl_reinsurance = "sl_Reinsurance_oldinsurance_OL";
			var sl_senior = "sl_senior_oldinsurance_OL";
			var sl_saleChanel = "sl_saleChannel_oldinsurance_OL";
			var sl_salePartner = "sl_partner_oldinsurance_OL";
		}else if( obj.accum_type == "INSURED_SUM"){		
			row_id = row_id_uw;
			var tr = "tr_UWConsider_OL";
			var imgOk_id = "imgOK_UWConsider_OL";
			var imgOk_click = "imgCheckbox_UWConsider_OL";
			var sl_contract = "sl_contractType_UWConsider_OL";
			var sl_policy = "sl_policyType_UWConsider_OL";
			var sl_product = "sl_productType_UWConsider_OL";
			var sl_reinsurance = "sl_Reinsurance_UWConsider_OL";
			var sl_senior = "sl_senior_UWConsider_OL";
			var sl_saleChanel = "sl_saleChannel_UWConsider_OL";
			var sl_salePartner = "sl_partner_UWConsider_OL";
		}else if( obj.accum_type == "POLICY"){
			row_id = row_id_policy;
			var tr = "tr_insuranceIssue";
			var imgOk_id = "imgOK_insuranceIssue";
			var imgOk_click = "imgCheckbox_insuranceIssue_OL";
			var sl_contract = "sl_contractType_insuranceIssue";
			var sl_policy = "sl_policyType_insuranceIssue";
			var sl_product = "sl_productType_insuranceIssue";
			var sl_reinsurance = "sl_Reinsurance_insuranceIssue";
			var sl_senior = "sl_senior_insuranceIssue";
			var sl_saleChanel = "sl_saleChannel_insuranceIssue";
			var sl_salePartner = "sl_partner_insuranceIssue";
		}
		else if( obj.accum_type == "SA"){
			row_id = row_id_sa;
			var tr = "tr_insuranceMax";
			var imgOk_id = "imgOK_insuranceMax";
			var imgOk_click = "imgCheckbox_insuranceMax_OL";
			var sl_contract = "sl_contractType_insuranceMax";
			var sl_policy = "sl_policyType_insuranceMax";
			var sl_product = "sl_productType_insuranceMax";
			var sl_reinsurance = "sl_Reinsurance_insuranceMax";
			var sl_senior = "sl_senior_insuranceMax";
			var sl_saleChanel = "sl_saleChannel_insuranceMax";
			var sl_salePartner = "sl_partner_insuranceMax";
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
			"<select class='form-control' id='"+sl_contract+""+row_id+"' onchange='ddHeath1_select_OL(this.id);'>"+main_contract+
			"</select>"+
		"</td>"+
		"<td class='verticalCenter text-center'>"+
			"<select class='form-control' id='"+sl_policy+""+row_id+"' onchange='ddHeath2_select_OL(this.id);'>"+
				"<option value='0' selected=''>All</option>"+
			"</select>"+
		"</td>"+
		"<td class='verticalCenter text-center'>"+
			"<select class='form-control' id='"+sl_product+""+row_id+"'>"+
				"<option value='0' selected=''>All</option>"+
			"</select>"+
		"</td>"+
		"<td class='verticalCenter text-center'>"+
			"<select class='form-control' id='"+sl_reinsurance+""+row_id+"'>"+lookup_reinsurance_Group+
			"</select>"+
		"</td>"+
		"<td class='verticalCenter text-center'>"+
			"<select class='form-control' id='"+sl_senior+""+row_id+"'>"+lookup_senior+
			"</select>"+
		"</td>"+
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
		if( obj.accum_type == "MED_SUM"){
			//$("#rd_health_money_CL1").prop("checked",true);
			$("#tbl_health_insurance_OL").show();
			$("#tbl_health_insurance_OL tbody").append(row);
			$("#btn_health_insurance_OL").show();
			
			var index = row_id_health - 1;
			var tbl = "tbl_health_insurance_OL";
			$("#tbl_health_insurance_OL tbody>tr").eq(index).find("td:nth-child(2) select>option[value="+obj.cov_cat_lv_1+"]").attr("selected",true);
			var id = $("#tbl_health_insurance_OL tbody>tr").eq(index).find("td:nth-child(2) select").attr('id');
			search_covCat2_OL(id,obj,tbl,sl_contract,sl_policy,sl_product);
		
			$("#tbl_health_insurance_OL tbody>tr").eq(index).find("td:nth-child(5) select>option[value="+obj.is_gio+"]").attr("selected",true);
			$("#tbl_health_insurance_OL tbody>tr").eq(index).find("td:nth-child(6) select>option[value='"+obj.is_senior+"']").attr("selected",true);
			//$("#tbl_health_insurance_CL tbody>tr").eq(index).find("td:nth-child(7) select>option[value="+obj.filing_chan_id+"]").attr("selected",true);
			$("#tbl_health_insurance_OL tbody>tr").eq(index).find("td:nth-child(7) select>option[data-id="+obj.sale_chan_id+"]").attr("selected",true);
			var sale_chan_id = $("#tbl_health_insurance_OL tbody>tr").eq(index).find("td:nth-child(7) select>option[data-id="+obj.sale_chan_id+"]").val();
			searchPartnerAccumRule_OL(sale_chan_id,$("#tbl_health_insurance_OL tbody>tr").eq(index).find("td:nth-child(8) select"),obj.sale_partner_code)
			//$("#tbl_health_insurance_CL tbody>tr").eq(index).find("td:nth-child(9) select>option[value="+obj.sale_partner_code+"]").attr("selected",true);
			row_id_health++;
		}else if( obj.accum_type == "EXIST_POLICY"){
			//$("#rd_old_list_CL1").prop("checked",true);
			$("#tbl_old_insurance_OL").show();
			$("#tbl_old_insurance_OL tbody").append(row);
			$("#btn_old_insurance_OL").show();
			
			var index = row_id_old - 1;
			var tbl = "tbl_old_insurance_OL";
			$("#tbl_old_insurance_OL tbody>tr").eq(index).find("td:nth-child(2) select>option[value="+obj.cov_cat_lv_1+"]").attr("selected",true);
			var id = $("#tbl_old_insurance_OL tbody>tr").eq(index).find("td:nth-child(2) select").attr('id');
			search_covCat2_OL(id,obj,tbl,sl_contract,sl_policy,sl_product)
			
			$("#tbl_old_insurance_OL tbody>tr").eq(index).find("td:nth-child(3) select>option[value="+obj.cov_cat_lv_2+"]").attr("selected",true);
			$("#tbl_old_insurance_OL tbody>tr").eq(index).find("td:nth-child(4) select>option[value="+obj.cov_cat_lv_3+"]").attr("selected",true);
			$("#tbl_old_insurance_OL tbody>tr").eq(index).find("td:nth-child(5) select>option[value="+obj.is_gio+"]").attr("selected",true);
			$("#tbl_old_insurance_OL tbody>tr").eq(index).find("td:nth-child(6) select>option[value='"+obj.is_senior+"']").attr("selected",true);
			//$("#tbl_old_insurance_CL tbody>tr").eq(index).find("td:nth-child(7) select>option[value="+obj.filing_chan_id+"]").attr("selected",true);
			$("#tbl_old_insurance_OL tbody>tr").eq(index).find("td:nth-child(7) select>option[data-id="+obj.sale_chan_id+"]").attr("selected",true);
			var sale_chan_id = $("#tbl_old_insurance_OL tbody>tr").eq(index).find("td:nth-child(7) select>option[data-id="+obj.sale_chan_id+"]").val();
			searchPartnerAccumRule_OL(sale_chan_id,$("#tbl_old_insurance_OL tbody>tr").eq(index).find("td:nth-child(8) select"),obj.sale_partner_code)
			//$("#tbl_old_insurance_CL tbody>tr").eq(index).find("td:nth-child(9) select>option[value="+obj.sale_partner_code+"]").attr("selected",true);
			row_id_old++;
		}else if( obj.accum_type == "INSURED_SUM"){
			//$("#rd_capital_CL1").prop("checked",true);
			$("#tbl_UW_consider_OL").show();
			$("#tbl_UW_consider_OL tbody").append(row);
			$("#btn_UW_Consider_OL").show();
			
			var index = row_id_uw - 1;
			var tbl = "tbl_UW_consider_OL";
			$("#tbl_UW_consider_OL tbody>tr").eq(index).find("td:nth-child(2) select>option[value="+obj.cov_cat_lv_1+"]").attr("selected",true);
			var id = $("#tbl_UW_consider_OL tbody>tr").eq(index).find("td:nth-child(2) select").attr('id');
			search_covCat2_OL(id,obj,tbl,sl_contract,sl_policy,sl_product)
			
			$("#tbl_UW_consider_OL tbody>tr").eq(index).find("td:nth-child(2) select>option[value="+obj.cov_cat_lv_1+"]").attr("selected",true);
			$("#tbl_UW_consider_OL tbody>tr").eq(index).find("td:nth-child(3) select>option[value="+obj.cov_cat_lv_2+"]").attr("selected",true);
			$("#tbl_UW_consider_OL tbody>tr").eq(index).find("td:nth-child(4) select>option[value="+obj.cov_cat_lv_3+"]").attr("selected",true);
			$("#tbl_UW_consider_OL tbody>tr").eq(index).find("td:nth-child(5) select>option[value="+obj.is_gio+"]").attr("selected",true);
			$("#tbl_UW_consider_OL tbody>tr").eq(index).find("td:nth-child(6) select>option[value='"+obj.is_senior+"']").attr("selected",true);
			//$("#tbl_UW_consider_CL tbody>tr").eq(index).find("td:nth-child(7) select>option[value="+obj.filing_chan_id+"]").attr("selected",true);
			$("#tbl_UW_consider_OL tbody>tr").eq(index).find("td:nth-child(7) select>option[data-id="+obj.sale_chan_id+"]").attr("selected",true);
			var sale_chan_id = $("#tbl_UW_consider_OL tbody>tr").eq(index).find("td:nth-child(7) select>option[data-id="+obj.sale_chan_id+"]").val();
			searchPartnerAccumRule_OL(sale_chan_id,$("#tbl_UW_consider_OL tbody>tr").eq(index).find("td:nth-child(8) select"),obj.sale_partner_code)
			//$("#tbl_UW_consider_CL tbody>tr").eq(index).find("td:nth-child(9) select>option[value="+obj.sale_partner_code+"]").attr("selected",true);
			row_id_uw++;
		}else if( obj.accum_type == "POLICY"){
			$("#tbl_insuranceIssue_OL").show();
			$("#tbl_insuranceIssue_OL tbody").append(row);
			$("#btn_insuranceIssue_OL").show();
			
			var index = row_id_policy - 1;
			var tbl = "tbl_insuranceIssue_OL";
			$("#tbl_insuranceIssue_OL tbody>tr").eq(index).find("td:nth-child(2) select>option[value="+obj.cov_cat_lv_1+"]").attr("selected",true);
			var id = $("#tbl_insuranceIssue_OL tbody>tr").eq(index).find("td:nth-child(2) select").attr('id');
			search_covCat2_OL(id,obj,tbl,sl_contract,sl_policy,sl_product)
			
			$("#tbl_insuranceIssue_OL tbody>tr").eq(index).find("td:nth-child(2) select>option[value="+obj.cov_cat_lv_1+"]").attr("selected",true);
			$("#tbl_insuranceIssue_OL tbody>tr").eq(index).find("td:nth-child(3) select>option[value="+obj.cov_cat_lv_2+"]").attr("selected",true);
			$("#tbl_insuranceIssue_OL tbody>tr").eq(index).find("td:nth-child(4) select>option[value="+obj.cov_cat_lv_3+"]").attr("selected",true);
			$("#tbl_insuranceIssue_OL tbody>tr").eq(index).find("td:nth-child(5) select>option[value="+obj.is_gio+"]").attr("selected",true);
			$("#tbl_insuranceIssue_OL tbody>tr").eq(index).find("td:nth-child(6) select>option[value='"+obj.is_senior+"']").attr("selected",true);
			$("#tbl_insuranceIssue_OL tbody>tr").eq(index).find("td:nth-child(7) select>option[data-id="+obj.sale_chan_id+"]").attr("selected",true);
			var sale_chan_id = $("#tbl_insuranceIssue_OL tbody>tr").eq(index).find("td:nth-child(7) select>option[data-id="+obj.sale_chan_id+"]").val();
			searchPartnerAccumRule_OL(sale_chan_id,$("#tbl_insuranceIssue_OL tbody>tr").eq(index).find("td:nth-child(8) select"),obj.sale_partner_code)
			row_id_policy++;
		}else if( obj.accum_type == "SA"){
			$("#tbl_insuranceMax_OL").show();
			$("#tbl_insuranceMax_OL tbody").append(row);
			$("#tbl_insuranceMax_OL").show();
			
			var index = row_id_sa - 1;
			var tbl = "tbl_insuranceMax_OL";
			$("#tbl_insuranceMax_OL tbody>tr").eq(index).find("td:nth-child(2) select>option[value="+obj.cov_cat_lv_1+"]").attr("selected",true);
			var id = $("#tbl_insuranceMax_OL tbody>tr").eq(index).find("td:nth-child(2) select").attr('id');
			search_covCat2_OL(id,obj,tbl,sl_contract,sl_policy,sl_product)
			
			$("#tbl_insuranceMax_OL tbody>tr").eq(index).find("td:nth-child(2) select>option[value="+obj.cov_cat_lv_1+"]").attr("selected",true);
			$("#tbl_insuranceMax_OL tbody>tr").eq(index).find("td:nth-child(3) select>option[value="+obj.cov_cat_lv_2+"]").attr("selected",true);
			$("#tbl_insuranceMax_OL tbody>tr").eq(index).find("td:nth-child(4) select>option[value="+obj.cov_cat_lv_3+"]").attr("selected",true);
			$("#tbl_insuranceMax_OL tbody>tr").eq(index).find("td:nth-child(5) select>option[value="+obj.is_gio+"]").attr("selected",true);
			$("#tbl_insuranceMax_OL tbody>tr").eq(index).find("td:nth-child(6) select>option[value='"+obj.is_senior+"']").attr("selected",true);
			$("#tbl_insuranceMax_OL tbody>tr").eq(index).find("td:nth-child(7) select>option[data-id="+obj.sale_chan_id+"]").attr("selected",true);
			var sale_chan_id = $("#tbl_insuranceMax_OL tbody>tr").eq(index).find("td:nth-child(7) select>option[data-id="+obj.sale_chan_id+"]").val();
			searchPartnerAccumRule_OL(sale_chan_id,$("#tbl_insuranceMax_OL tbody>tr").eq(index).find("td:nth-child(8) select"),obj.sale_partner_code)
			row_id_sa++;
		}
			row_id++;
	}
	
	/*unwAccumRuleExclude*/
	var arr_accum_Policy = [];
	var arr_accum_Sa = [];
	var arr_accum_MedSum = [];
	var arr_accum_ExistPolicy = [];
	var arr_accum_InsuredSum = [];
	for(i in response.Tab_Provision[0].unwAccumRuleExclude){
		var obj = response.Tab_Provision[0].unwAccumRuleExclude[i];
		
		//Benz set Cloce 22-11-2019
		if (type == "Clone") {
			if (prd_code_temp == obj.exclude_prd_code) {
				obj.exclude_prd_code = prd_code_Clone;
			}
		}
		
		if( obj.accum_type == "POLICY"){
			arr_accum_Policy.push(obj.exclude_prd_code)
		}else if( obj.accum_type == "SA"){
			arr_accum_Sa.push(obj.exclude_prd_code)
		}else if( obj.accum_type == "MED_SUM"){
			arr_accum_MedSum.push(obj.exclude_prd_code)
		}else if( obj.accum_type == "EXIST_POLICY"){
			arr_accum_ExistPolicy.push(obj.exclude_prd_code)
		}else if( obj.accum_type == "INSURED_SUM"){
			arr_accum_InsuredSum.push(obj.exclude_prd_code)
		}
	}
	$("#hd_accumRuleExclude_POLICY").val(arr_accum_Policy)
	$("#hd_accumRuleExclude_SA").val(arr_accum_Sa)
	$("#hd_accumRuleExclude_MEDSUM").val(arr_accum_MedSum)
	$("#hd_accumRuleExclude_EXISTPOLICY").val(arr_accum_ExistPolicy)
	$("#hd_accumRuleExclude_INSURESUM").val(arr_accum_InsuredSum)
	
	//การรับแบบเพิ่มเบี้ยพิเศษ
	for(i in response.Tab_Provision[0].unwRiderLimit){
		var obj = response.Tab_Provision[0].unwRiderLimit[i];
		//Benz Set Clone 22-10-2019
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
		$("#tbl_increase_premium_OL tbody>tr").each(function(i){
			if( prd_rider_code == $(this).find('#prd_rider_code').val()){
				$(this).find('td:nth-child(3) input[type="text"]').val(numberWithCommas(parseFloat(obj.Max_em*100).toFixed(2)));
			}
		})
	}
	
	/*การซื้อสัญญาแนบท้ายควบ*/
	for(i in response.Tab_Provision[0].productRider){
		var obj = response.Tab_Provision[0].productRider[i];
		
		//Benz set Cloce 22-11-2019
		if (type == "Clone") {
			if (prd_code_temp == obj.prd_rider_code) {
				obj.prd_rider_code = prd_code_Clone;
			}
		}
		
		if( obj.prem_calc_meth == "SA_ONLY"){
			$("#tbl_contractAmount_OL tbody>tr").each(function(i){
				if( obj.prd_rider_code == $(this).find('td:nth-child(1) #riderAmount_prd_code_rider_'+i).val()){
					$(this).find('td:nth-child(1) input[type="checkbox"]').prop("checked",true);
					$(this).find('td:nth-child(1) input[type="checkbox"]').attr("disabled",false)
				}
			})
			$("#tbl_contractInsure_OL tbody>tr").each(function(i){
				if( obj.prd_rider_code == $(this).find('td:nth-child(1) #riderInsure_prd_code_rider_'+i).val()){
					$(this).find('td:nth-child(1) input[type="checkbox"]').attr("disabled",false)
				}
			})
		}else if( obj.prem_calc_meth == "PREM_ONLY"){
			$("#tbl_contractInsure_OL tbody>tr").each(function(i){
				if( obj.prd_rider_code == $(this).find('td:nth-child(1) #riderInsure_prd_code_rider_'+i).val()){
					$(this).find('td:nth-child(1) input[type="checkbox"]').prop("checked",true);
					$(this).find('td:nth-child(1) input[type="checkbox"]').attr("disabled",false)
				}
			})
			$("#tbl_contractAmount_OL tbody>tr").each(function(i){
				if( obj.prd_rider_code == $(this).find('td:nth-child(1) #riderAmount_prd_code_rider_'+i).val()){
					$(this).find('td:nth-child(1) input[type="checkbox"]').attr("disabled",false)
				}
			})
		}else if( obj.prem_calc_meth == "EITHER"){
			$("#tbl_contractAmount_OL tbody>tr").each(function(i){
				if( obj.prd_rider_code == $(this).find('td:nth-child(1) #riderAmount_prd_code_rider_'+i).val()){
					$(this).find('td:nth-child(1) input[type="checkbox"]').prop("checked",true);
					$(this).find('td:nth-child(1) input[type="checkbox"]').attr("disabled",false)
				}
			})
			$("#tbl_contractInsure_OL tbody>tr").each(function(i){
				if( obj.prd_rider_code == $(this).find('td:nth-child(1) #riderInsure_prd_code_rider_'+i).val()){
					$(this).find('td:nth-child(1) input[type="checkbox"]').prop("checked",true);
					$(this).find('td:nth-child(1) input[type="checkbox"]').attr("disabled",false)
				}
			})
		}
	}
	
	/*อำนาจการอนุมัติของสาขาจุดออก กธ. / NBI*/
	if(response.Tab_Provision[0].unwPolIssueUnit.length > 0){
		$("#rd_approval_branch_OL1").prop("checked",false)
		$("#rd_approval_branch_OL2").prop("checked",false)
	}
	for(i in response.Tab_Provision[0].unwPolIssueUnit){
		var obj = response.Tab_Provision[0].unwPolIssueUnit[i];
		if( obj.Pol_issue_unit == "NBI"){
			$("#rd_approval_branch_OL1").prop("checked",true)
		}else if( obj.Pol_issue_unit == "UNW"){
			$("#rd_approval_branch_OL2").prop("checked",true)
		}
	}
	
	/*unw_hist_rule การตรวจสอบข้อมูล , IC , Sub */
	for(i in response.Tab_Provision[0].unwHistrule){
		var obj = response.Tab_Provision[0].unwHistrule[i];
		if( obj.Hist_type == $("#chk_check_data_OL1").val() && obj.Is_check == true){	//CLIAM
			$("#chk_check_data_OL1").prop("checked",true);
			$("#panel_oldCov_OL").show();
			if( obj.Is_restrict == true){
				$("#panel_Condition_oldCov_OL").show();
				$("#haveCondition_oldCov_OL").prop("checked",true);
				$("#sl_haveCondition_oldCov_OL option[value="+obj.Restrict_type_1+"]").attr("selected",true);
				$("#sl_haveCondition_oldCov2_OL option[value="+obj.Condition_1+"]").attr("selected",true);
				$("#sl_haveCondition_oldCov3_OL option[value="+obj.Restrict_type_2+"]").attr("selected",true);
				$("#sl_haveCondition_oldCov4_OL option[value="+obj.Condition_2+"]").attr("selected",true);
				$("#sl_haveCondition_oldCov5_OL option[value="+obj.Restrict_type_3+"]").attr("selected",true);
				$("#sl_haveCondition_oldCov_OL").attr("disabled",false);
				$("#sl_haveCondition_oldCov2_OL").attr("disabled",false);
				$("#sl_haveCondition_oldCov3_OL").attr("disabled",false);
				$("#sl_haveCondition_oldCov4_OL").attr("disabled",false);
				$("#sl_haveCondition_oldCov5_OL").attr("disabled",false);
				$("#sl_NewSA_oldCov_OL option[value="+obj.New_sa_compare+"]").attr("selected",true);
				if(obj.New_sa_amt == ""){
					$("#amount_NewSA_oldCov_OL").val(0);
				}else{
					$("#amount_NewSA_oldCov_OL").val(numberWithCommas((obj.New_sa_amt).toFixed(2)));
				}
				if(obj.Restrict_type_2 == "NONE"){
					$("#sl_haveCondition_oldCov3_OL").attr("disabled",true);
					$("#sl_haveCondition_oldCov4_OL").attr("disabled",true);
				}
				if(obj.Restrict_type_3 == "NONE"){
					$("#sl_haveCondition_oldCov5_OL").attr("disabled",true);
				}

				var sel1 = $("#sl_haveCondition_oldCov_OL option:selected").text();
				var sel2 = $("#sl_haveCondition_oldCov3_OL option:selected").text();
				var sel3 = $("#sl_haveCondition_oldCov5_OL option:selected").text();
				var block = 1;
				disabled_haveCondition_oldCov_OL(sel1,sel2,sel3,block);
			}else{
				$("#notCondition_oldCov_OL").prop("checked",true);
			}
		}else if( obj.Hist_type == $("#chk_check_data_OL2").val() && obj.Is_check == true){		//IC
			$("#chk_check_data_OL2").prop("checked",true);
			$("#panel_IC_OL").show();
			if( obj.Is_restrict == true){
				$("#panel_Condition_IC_OL").show();
				$("#haveCondition_IC_OL").prop("checked",true);
				$("#sl_haveCondition_IC_OL option[value="+obj.Restrict_type_1+"]").attr("selected",true);
				$("#sl_haveCondition_IC2_OL option[value="+obj.Condition_1+"]").attr("selected",true);
				$("#sl_haveCondition_IC3_OL option[value="+obj.Restrict_type_2+"]").attr("selected",true);
				$("#sl_haveCondition_IC4_OL option[value="+obj.Condition_2+"]").attr("selected",true);
				$("#sl_haveCondition_IC5_OL option[value="+obj.Restrict_type_3+"]").attr("selected",true);
				$("#sl_haveCondition_IC_OL").attr("disabled",false);
				$("#sl_haveCondition_IC2_OL").attr("disabled",false);
				$("#sl_haveCondition_IC3_OL").attr("disabled",false);
				$("#sl_haveCondition_IC4_OL").attr("disabled",false);
				$("#sl_haveCondition_IC5_OL").attr("disabled",false);
				$("#sl_NewSA_IC_OL option[value="+obj.New_sa_compare+"]").attr("selected",true);
				if(obj.New_sa_amt == ""){
					$("#amount_NewSA_IC_OL").val(0);
				}else{
					$("#amount_NewSA_IC_OL").val(numberWithCommas((obj.New_sa_amt).toFixed(2)));
				}
				if(obj.Restrict_type_2 == "NONE"){
					$("#sl_haveCondition_IC3_OL").prop("disabled",true);
					$("#sl_haveCondition_IC4_OL").prop("disabled",true);
				}
				if(obj.Restrict_type_3 == "NONE"){
					$("#sl_haveCondition_IC5_OL").prop("disabled",true);
				}

				var sel1 = $("#sl_haveCondition_IC_OL option:selected").text();
				var sel2 = $("#sl_haveCondition_IC3_OL option:selected").text();
				var sel3 = $("#sl_haveCondition_IC5_OL option:selected").text();
				var block = 2;
				disabled_haveCondition_oldCov_OL(sel1,sel2,sel3,block);
			}else{
				$("#notCondition_IC_OL").prop("checked",true);
			}
		}else if( obj.Hist_type == $("#chk_check_data_OL3").val() && obj.Is_check == true){		//SUB
			$("#chk_check_data_OL3").prop("checked",true);
			$("#panel_SubCov_OL").show();
			if( obj.Is_restrict == true){
				$("#panel_Condition_SubCov_OL").show();
				$("#haveCondition_SubCov_OL").prop("checked",true);
				$("#sl_haveCondition_SubCov_OL option[value="+obj.Restrict_type_1+"]").attr("selected",true);
				$("#sl_haveCondition_SubCov2_OL option[value="+obj.Condition_1+"]").attr("selected",true);
				$("#sl_haveCondition_SubCov3_OL option[value="+obj.Restrict_type_2+"]").attr("selected",true);
				$("#sl_haveCondition_SubCov4_OL option[value="+obj.Condition_2+"]").attr("selected",true);
				$("#sl_haveCondition_SubCov5_OL option[value="+obj.Restrict_type_3+"]").attr("selected",true);
				$("#sl_haveCondition_SubCov_OL").attr("disabled",false);
				$("#sl_haveCondition_SubCov2_OL").attr("disabled",false);
				$("#sl_haveCondition_SubCov3_OL").attr("disabled",false);
				$("#sl_haveCondition_SubCov4_OL").attr("disabled",false);
				$("#sl_haveCondition_SubCov5_OL").attr("disabled",false);
				$("#sl_NewSA_Sub_OL option[value="+obj.New_sa_compare+"]").attr("selected",true);
				if(obj.New_sa_amt == ""){
					$("#amount_NewSA_Sub_OL").val(0);
				}else{
					$("#amount_NewSA_Sub_OL").val(numberWithCommas((obj.New_sa_amt).toFixed(2)));
				}
				if(obj.Restrict_type_2 == "NONE"){
					$("#sl_haveCondition_SubCov3_OL").prop("disabled",true);
					$("#sl_haveCondition_SubCov4_OL").prop("disabled",true);
				}
				if(obj.Restrict_type_3 == "NONE"){
					$("#sl_haveCondition_SubCov5_OL").prop("disabled",true);
				}
				
				var sel1 = $("#sl_haveCondition_SubCov_OL option:selected").text();
				var sel2 = $("#sl_haveCondition_SubCov3_OL option:selected").text();
				var sel3 = $("#sl_haveCondition_SubCov5_OL option:selected").text();
				var block = 3;
				disabled_haveCondition_oldCov_OL(sel1,sel2,sel3,block);
			}else{
				$("#notCondition_SubCov_OL").prop("checked",true);
			}
		}
	}
	
	/*ซื้อคู่กับแบบ*/
	var roundBuywidth = 1;
	for(i in response.Tab_Provision[0].unwHistExitProd){
		var obj = response.Tab_Provision[0].unwHistExitProd[i];
		var biz_code = "";
		$("#tbl_chooseBuyWith1_OL tbody>tr").each(function(){
			if(obj.Exist_prd_code == $(this).find('td:nth-child(1) input[type="hidden"]').val()){
				biz_code = $(this).find('td:nth-child(3) a').text();
			}
		})
		
		var row = "<tr><td class='verticalCenter text-center' id='imgOKbuyWith_main"+roundBuywidth+"_OL' onclick='imgCheckbox(this.id);'><i class='glyphicon glyphicon-edit'></i></td>"+
					"<td class='verticalCenter text-center'>" +
						"<label>"+obj.Exist_prd_code+"</label>" +
					"</td>"+
					"<td class='verticalCenter text-center'>" +
						"<label>"+biz_code+"</label>" +
						"<input type='hidden' id='prd_code' value='"+obj.Exist_prd_code+"'>"+
					"</td>"+
				  "</tr>"
		if( obj.Hist_type == $("#chk_check_data_OL1").val()){	//CLAIM
			$("#tbl_buyWith1_OL tbody").append(row);
		}else if( obj.Hist_type == $("#chk_check_data_OL2").val()){		//IC
			$("#tbl_buyWith2_OL tbody").append(row);
		}else if( obj.Hist_type == $("#chk_check_data_OL3").val()){		//SUB
			$("#tbl_buyWith3_OL tbody").append(row);
		}
		roundBuywidth++;
	}
	
	/*การชำระเบี้ยประกันภัยปีแรก / การชำระเบี้ยประกันภัยปีต่อไป/ปีต่ออายุ*/
	for(i in response.Tab_Provision[0].premCollect){
		var obj = response.Tab_Provision[0].premCollect[i];
		if( obj.prem_flag == "FYP"){
			$("#collect_meth_FYP_OL div>input[type='checkbox']").each(function(){
				if( obj.collect_meth == $(this).val()){
					$(this).prop("checked",true)
				}
			})
		}else if( obj.prem_flag == "RYP"){
			$("#collect_meth_RYP_OL div>input[type='checkbox']").each(function(){
				if( obj.collect_meth == $(this).val()){
					$(this).prop("checked",true)
				}
			})
		}
	}
	
	//14/11/2019 Khwan Fix ปีต่อไปเลือกไม่ได้ต้อง disabled checkbox
	var credit_next_year = $("#lb_credit_nextYear_OL option:selected").val();
	if(credit_next_year == "CUSTOMER_FEE" || credit_next_year == "NONE"){
		$("#collect_meth_RYP_OL input:checkbox").each(function(){
			if($(this).val() == "CREDIT_CARD"){
				$(this).prop("disabled", true);
			}
		});
	}
	
	/*รายการหักค่าใช้จ่าย*/
	for(i in response.Tab_Provision[0].flpFee_arr){
		var obj = response.Tab_Provision[0].flpFee_arr[i];
		$("#tbl_deduct_cost_OL tbody>tr").each(function(){
			if( obj.Fee_type == $(this).find('td:nth-child(1) input[type="checkbox"]').val()){
				$(this).find('td:nth-child(1) input[type="checkbox"]').prop("checked",true)
			}
		})
	}
	
	/*validate tab ข้อกำหนด*/
	validate_input6_ol();
	validate_input7_ol();
	validate_input8_ol();
	validate_input9_ol();
	validate_input10_ol();
	$(".autoComma").autoNumeric('init', { aSep: ',', vMin: '0.00', vMax: '999999999.99', wEmpty: 'zero' });
}

/*6. ผลประโยชน์ความคุ้มครอง*/
function showcase_benefit_OL(response,type,cov_code,show_cov,prd_code_rider,main_cov){
	var numberImgOK = "";
	var html = "";
	var html2 = "";
	var html3 = "";
	var htmlBase = "";
	var j = 0;
	
	var die_tab = false;
	var refundMaturity = false;
	var refund = false;
	var pension = false;
	var medical = false;
	var divi = false;
	var rider_code = "";
	var main_code = "";
	var font_color = "";
	//console.log("type>> "+type);
	
	if(type != "B"){
		
		var header_cov_code = "";
		if(type == "R" || type == "E"){
			header_cov_code = cov_code;
		}else{
			header_cov_code = prd_code_rider;
		}
		
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
		
		html += "<li id='bnf_"+rider_code+"_OL' data-id='bnf_"+prd_code_rider+"_OL' data-main='"+main_code+"'><a data-toggle='tab' href='#menu_ProductBnf2_OL' onclick=\"choose_bnf_content_OL('"+type+"','"+rider_code+"');\" class='"+font_color+"'>"+header_cov_code+"</a></li>"
		
		/*put data*/
		var obj_bnf = response.Tab_benefit[0];
		
		/*****Khwan Fix 20/11/2019******/		
		html3 += "<div id='bnf_rider_"+rider_code+"' class='benefRider_OL' style='display:none'>"+
				 	"<div id='term_box_"+rider_code+"' class='term_boxpanel'>";
		
		if(obj_bnf.topic.length != 0){
	
		html3 += "<div id='benefitDetail"+rider_code+"_OL' style='width: 98%; margin: auto; padding-top: 20px; border-bottom: 1px solid #ddd;''>"+
					"<ul class='nav nav-tabs' id='tabBenefitRider_"+rider_code+"_OL'></ul>"+
				 "</div>";
						
		}
			"</div>"+
		"</div>";
		/***************************/
						
		$("#tab_benefitRider_in").append(html3);
		
		if(obj_bnf.benefit.length > 0){
			
				
			for(i in obj_bnf.benefit){
				var obj = response.Tab_benefit[0].benefit[i];
				var bnf_id = obj[0].benefit_item.item_name;
				
					html2 += "<li id='tabBC_0"+i+"_"+rider_code+"_OL'><a data-toggle='tab' style='display: block'  onclick=\"show_bnf_content_OL('BC"+i+"_"+rider_code+"_OL','"+rider_code+"');\" id='aBC"+i+"_OL'>"+bnf_id+"</a></li>";
					j++;
			
					
			}
			$("#tabBenefitRider_"+rider_code+"_OL").append(html2);
			$("#tabBC_00_"+rider_code+"_OL").addClass("active in");
			
			/*table*/
			var row = "";
			var flag = false;
			var num = 0;
			
			for(i in obj_bnf.benefit){
			var obj = response.Tab_benefit[0].benefit[i];
			var bnf_id = obj[0].benefit_item.item_name;	
			var bnf_item_id = obj[0].benefit_item.bnf_item_id;	
			
			/*bnf name*/
			var bnf_name = "";
			for(kk in obj_bnf.topic){
				var bnf_code = response.Tab_benefit[0].topic[kk].bnf_Code;
				if(bnf_id == bnf_code){
					bnf_name = response.Tab_benefit[0].topic[kk].name_th;
				}
			}
			

			if(bnf_id == "BC_OL_DDR_01"){
				flag = true;
			}else{
				flag = false;
			}
			
			row = "<div class='tab-content' id='tab_content_BC_0"+i+"_"+rider_code+"_OL' data-name='"+bnf_id+"' data-flag='"+flag+"' data-id='BC_0"+i+"_"+rider_code+"_OL'>"+
			"<div id='BC"+i+"_"+rider_code+"_OL' class='tab-pane'>"+
			"<input type='hidden' id='hidden_BC_0"+i+"_OL' value='"+bnf_item_id+"'>"+
			"<input type='hidden' id='flag_BC_0"+i+"_OL' value='"+bnf_item_id+"'>"+
			"<div class='heading1 text-center' style='padding: 20px 0'>"+bnf_id+" - "+bnf_name+"</div>"+
			"<div class='text-center' style='padding: 20px 0'></div>";
				
			/*โรคร้ายแรง*/
			if(flag == true){
			 row += "<table class='tbl_DDR1'>"+
					"<tr>"+
						"<td>"+
							"<div style='padding-bottom: 64px'>"+
								"<input type='hidden' id='bnf_itemID' value=''>"+
								"<table class='table table-bordered' width='250' id='tbody_bnfL_BC_0"+i+"_"+rider_code+"_OL' style='width: 400px;'>"+
									"<thead>"+
									"<tr>"+
										"<td width='165px' colspan='2' rowspan='2' style='vertical-align: middle; height: 74px;' class='text-center borderBlack bg-primary'>From</td>"+
										"<td width='165px' colspan='2' rowspan='2' style='vertical-align: middle; height: 74px;' class='text-center borderBlack bg-primary'>To</td>"+
									"</tr>"+
									"<tr>"+
									"</tr>"+	
									"<thead>"+	
									"<tbody class='disabledAll_NotFade'>"+	
									"</tbody>"+		
								"</table>"+
							"</div>"+
						"</td>"+
						"<td>"+
							"<div class='search-table-outter' style='margin-top: -49px; width:30%;'>"+
								"<table class='table table-bordered' id='tbody_bnfR_BC_0"+i+"_"+rider_code+"_OL' style='width: 1320px;'>"+
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
									"<tbody class='disabledAll_NotFade'>"+
									"</tbody>"+
							"</table>"+
							"</div>"+
						"</td>"+
					"</tr>"+
			"</table>";
			
			 
			}

			row += "<div class='text-center' style='padding: 30px 0'></div>"+
					"<div class='scroll_benefitTab_rider'>"+
					"<table class='table table-bordered borderBlack' id='tbl_BC_0"+i+"_"+rider_code+"_OL' style='width:2500px;'>"+							
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
									
								
								if(bnf_id == "BC_OL_DDR_01"){
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
						"<tbody class='disabledAll_NotFade'>"+									
						"</tbody>"+
					"</table>"+
					"</div>"+																		
				"<div class='text-center' style='padding: 10px 0'></div>"+
				"<div class='col-md-12 benefit_cv_box'>"+
					"<div class='col1'><input type='checkbox' id='cv_BC_0"+i+"_"+rider_code+"_OL' disabled></div>"+
					"<div class='col4'><label for='cv_BC_0"+i+"' class='label_notbold'>คืน CV เมื่อสิ้นปี</label></div>"+
					
				"</div>"+
				"<div class='text-center' style='padding: 10px 0'></div>"+
				"<div class='row'>"+
				
					"<div class='col-md-4'></div>"+
					"<div class='col-md-4'>";
	
					row += "</div>"+
				"</div>";
				
			/*รายการข้อยกเว้นการจ่ายเงินทดแทนในกรณีโรคร้ายแรง*/
			if(flag == true){
			row += "<div id='exception_OL'>"+
					"<div class='text-center' style='padding: 30px 0'></div>"+
					"<div id='div_exceptionOL'>"+
					"<input type='hidden' id='exception_bnf_id_OL' value=''>"+
					"<table class='table table-bordered borderBlack' id='exception_Table_BC_0"+i+"_"+rider_code+"_OL' style='width:100%;'>"+
						"<thead>"+
							"<tr>"+
								"<th class='text-center bg-primary borderBlack' width='5' style='vertical-align: middle;'>ลำดับ</th>"+							
								"<th class='text-center verticalCenter bg-primary borderBlack' width='400'>รายการข้อยกเว้นการจ่ายเงินทดแทนในกรณีโรคร้ายแรง</th>"+							
							"</tr>"+
						"</thead>"+
						"<tbody class='disabledAll_NotFade'>"+
						"</tbody>"+							
					"</table>"+
					"</div>"+

					"<div class='text-center' style='padding: 20px 0'></div>"+
				
				"</div>";
			}
				num++;
				$("#benefitDetail"+rider_code+"_OL").append(row);
				
				if(i == 0){
					show_bnf_content_OL("BC"+i+"_OL", ""+rider_code+"");
				}
			}
		
	
		
		/*$("#tabBenefitProduct_OL").append(html);*/
		/**/
		}	
//		get_dataBenefit_OL(response,"R",cov_code);
		if(type == "E"){
			var num_main = $("#tabBenefitProduct_OL li[data-main='"+main_cov+"']").length;
			if(num_main > 0){
				$(html).insertAfter("#tabBenefitProduct_OL li[data-main='"+main_cov+"']:last");
			}else{
				$(html).insertAfter("#tabBenefitProduct_OL li[data-id='bnf_"+main_cov+"_OL']");
			}
			
		}else{
			$("#tabBenefitProduct_OL").append(html);
		}	
	}
	
	if(type == "B"){

		html += "<li class='active' id='li_bnf_base_ol' data-id='bnf_"+prd_code_rider+"_OL' data-main='"+main_code+"'><a data-toggle='tab' href='#menu_ProductBnf1_OL' class='purple'>"+cov_code+"</a></li>"
		htmlBase = "";
		var object_tblBase = response.Tab_Benefits[0];
//		$("#bnf_productbase_OL .tab-content").css("display","block");
		if(object_tblBase.die.length > 0){
			htmlBase += "<li id='die_li' class='active'><a data-toggle='tab' href='#prd_bnf_OL1'>เสียชีวิต</a></li>";
			die_tab = true;
			var row = "";
		
			row +=	"<table id='tab_die_bnf_base'>"+
					"<tr>"+
						"<td>"+
							"<div style='padding-bottom: 64px'> "+
							"<table class='table table-bordered disabledAll_NotFade' width='250' id='tbody_dieL_Product_OL' style='width: 470px;'>"+
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
							"<div class='search-table-outter' style='padding-bottom: 50px; width:23%;' id='baseDieTable_R_OL'>"+
								"<table class='table table-bordered disabledAll_NotFade' id='tbody_dieR_Product_OL' style='width: 1350px;'>"+
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
								"<div id='DeathExceptionOL'>"+
								"<div class='text-center' style='padding: 20px 0'></div>"+
								"<div id='div_DeathExceptionOL'>"+	
								"<table class='table table-bordered borderBlack' id='tbl_DeathException_Product_OL' style='width:100%;'>"+
									"<thead>"+
										"<tr>"+	
											"<th class='text-center bg-primary borderBlack' width='5' style='vertical-align: middle;'>ลำดับ</th>"+							
											"<th class='text-center verticalCenter bg-primary borderBlack' width='400'>รายการข้อยกเว้นการจ่ายเงินทดแทนในกรณีอุบัติเหตุ</th>"+							
										"</tr>"+
									"</thead>"+
									"<tbody class='disabledAll_NotFade'>"+
									"</tbody>"+					
								"</table>"+
								"</div>"+
								"<div class='text-center' style='padding: 10px 0'></div>"+
							"</div>";
					
					$("#prd_bnf_OL1").append(row)
			

		}
		
		if(object_tblBase.refundMaturity.length > 0){
			
			htmlBase += "<li id='refundMaturity_li'><a data-toggle='tab' href='#prd_bnf_OL2'>เงินครบกำหนดสัญญา</a></li>";
			refundMaturity = true;
			var row_2 = "";
			
			row_2 += "<div id='bnf_prd_bnf_OL2'>"+
					"<div class='row col-sm-10'>"+
						"<div class='col-md-3 text-left paddingtop_6px paddingleft_style4'>"+
							"<p>ปีที่ใช้ในการคำนวณ</p>"+
						"</div>"+
						"<div class='col-md-3'>"+
						"<input type='text' class='form-control' value='' id='show_type_contract' readonly>"+
					"</div>"+
					"<div class='col-md-3'>"+
						"<input type='text' class='form-control' value='' id='show_value_contract' readonly>"+
					"</div>"+
					"</div>"+
					"<div class='text-center' style='padding: 20px 0 40px 0;'></div>"+
					"<div class='col-sm-12 overflow_auto'>"+
					"<table class='table table-bordered disabledAll_NotFade' id='tbl_contract_Product_OL' style='width: 1000px;'>"+
						"<thead>"+
						"<tr>"+
							"<td colspan='9' class='text-center borderBlack bg-primary'>เงินครบกำหนดสัญญา</td>"+
						"</tr>"+
						"<tr>"+
							"<td class='text-center borderBlack bg-primary'></td>"+
							"<td colspan='2' class='text-center borderBlack bg-primary'>SA (%)</td>"+
							"<td colspan='2' class='text-center borderBlack bg-primary'>Premium (%)</td>"+
							"<td style='white-space: nowrap;' class='text-center borderBlack bg-primary'>Include<br>EM</td>"+
							"<td colspan='2' style=white-space: nowrap;' class='text-center borderBlack bg-primary'>CV/PV บำนาญ (%)</td>"+
							"<td class='text-center borderBlack bg-primary'>Other</td>"+
						"</tr>"+
						"</thead>"+
						"<tbody class='disabledAll_NotFade'>"+
						"</tbody>"+
					"</table>"+
					"</div>"+
					"<br clear='all'>"+
					"</div>";
					
		
				$("#prd_bnf_OL2").append(row_2);
		
		}
		
		if(object_tblBase.refund.length > 0){
			
			htmlBase += "<li id='refund_li'><a data-toggle='tab' href='#prd_bnf_OL3'>เงินคืนทุกระยะ/เงินจ่ายคืนตามเงื่อนไข</a></li>";
			refund = true;
			var row_3 = "";
			
			row_3 += "<div id='bnf_prd_bnf_OL3'>"+
				"<div class='text-center' style='padding: 20px 0'></div>"+
						"<table class='table table-bordered borderBlack' id='benefit_refund_Product_OL'>"+
							"<thead>"+
								"<tr>"+
									"<th class='text-center bg-primary borderBlack' colspan='2' width='150'>From</th>"+
									"<th class='text-center bg-primary borderBlack' colspan='2' width='150'>To</th>"+
									"<th class='text-center verticalCenter bg-primary borderBlack' rowspan='2' width='100'>ทุก(ปี)</th>"+
									"<th class='text-center verticalCenter bg-primary borderBlack' rowspan='2' width='200'>จำนวน</th>"+
									"<th class='text-center verticalCenter bg-primary borderBlack' rowspan='2' width='200'>หน่วย</th>"+
									"<th class='text-center verticalCenter bg-primary borderBlack' rowspan='2' width='200'>Factor</th>"+
									"<th class='text-center verticalCenter bg-primary borderBlack' rowspan='2' width='200'>ประเภทคำนวณ</th>"+
								"</tr>"+
								"<tr>"+
									"<td class='text-center bg-primary borderBlack' width='75'>Year</td>"+
									"<td class='text-center bg-primary borderBlack' width='75'>Age</td>"+
									"<td class='text-center bg-primary borderBlack' width='75'>Year</td>"+
									"<td class='text-center bg-primary borderBlack' width='75'>Age</td>"+
								"</tr>"+
							"</thead>"+
							"<tbody class='disabledAll_NotFade'>"+
							"</tbody>"+
						"</table>"+
						"</div>";

					$("#prd_bnf_OL3").append(row_3)
				
		}
		
		if(object_tblBase.pension.length > 0){
			
			htmlBase += "<li id='pension_li'><a data-toggle='tab' href='#prd_bnf_OL4'>เงินบำนาญ</a></li>";
			pension = true;
			var row_4 = "";
			
			row_4 = "<div id='bnf_prd_bnf_OL4'>"+
				"<div class='text-center' style='padding: 10px 0'></div>"+
			"<div class='col-sm-10'>"+
				"<div class='col-md-3' style='padding-top: 5px;'>"+
					"<p class='text-left'>อายุที่เริ่มบำนาญ</p>"+
				"</div>"+
				"<div class='col-md-2'>"+
					"<input id='pension_startAge_OL' type='text' class='form-control text-right disabledAll_NotFade'>"+
				"</div>"+
				"<div class='col-md-1'>"+
					"<p style='padding-top: 5px;' class='text-left'>&nbsp;ปี</p>"+
				"</div>"+
			"</div><br clear='all'>"+
			"<div class='text-center' style='padding: 10px 0'></div>"+
			"<div class='col-sm-10'>"+
				"<div class='col-md-3' style='padding-top: 5px;'>"+
					"<p class='text-left'>รับรองการจ่าย</p>"+
				"</div>"+
				"<div class='col-md-2'>"+
					"<input id='pension_confirmPay_OL' type='text' class='form-control text-right disabledAll_NotFade'>"+
				"</div>"+
				"<div class='col-md-1'>"+
					"<p style='padding-top: 5px;' class='text-left'>&nbsp;ปี</p>"+
				"</div>"+
			"</div><br clear='all'>"+
			"<div class='text-center' style='padding: 10px 0'></div>"+
			"<table class='table table-bordered' id='benefit_pension_Product_OL'>"+
				"<thead>"+
					"<tr>"+
						"<th class='text-center borderBlack bg-primary' colspan='2' width='100'>From</th>"+
						"<th class='text-center borderBlack bg-primary' colspan='2' width='100'>To</th>"+
						"<th class='text-center verticalCenter borderBlack bg-primary' rowspan='2' width='100'>ทุก(ปี)</th>"+
						"<th class='text-center verticalCenter borderBlack bg-primary' rowspan='2' width='200'>จำนวน</th>"+
						"<th class='text-center verticalCenter borderBlack bg-primary' rowspan='2' width='200'>หน่วย</th>"+
						"<th class='text-center verticalCenter borderBlack bg-primary' rowspan='2' width='300'>Factor</th>"+
					"</tr>"+
					"<tr>"+
						"<td class='text-center borderBlack bg-primary' width='50'>Year</td>"+
						"<td class='text-center borderBlack bg-primary' width='50'>Age</td>"+
						"<td class='text-center borderBlack bg-primary' width='50'>Year</td>"+
						"<td class='text-center borderBlack bg-primary' width='50'>Age</td>"+
					"</tr>"+
				"</thead>"+
				"<tbody class='disabledAll_NotFade'></tbody>"+
			"</table>"+
			"</div>";
			
			$("#prd_bnf_OL4").append(row_4)
			
			
			
		}
		
		if(object_tblBase.medicalFund.length > 0){
			
			htmlBase += "<li id='medicalFund_li'><a data-toggle='tab' href='#prd_bnf_OL5'>กองทุนค่ารักษาพยาบาล</a></li>";
			medical = true;
			var row_5 = "<div id='bnf_prd_bnf_OL5'>"+
				"<div class='text-center' style='padding: 20px 0'></div>"+
						"<table class='table table-bordered borderBlack' id='benefit_medical_Product_OL'>"+
							"<thead>"+
								"<tr>"+
									"<th class='text-center bg-primary borderBlack' colspan='2' width='150'>From</th>"+
									"<th class='text-center bg-primary borderBlack' colspan='2' width='150'>To</th>"+
									"<th class='text-center verticalCenter bg-primary borderBlack' rowspan='2' width='100'>ทุก(ปี)</th>"+
									"<th class='text-center verticalCenter bg-primary borderBlack' rowspan='2' width='200'>จำนวน</th>"+
									"<th class='text-center verticalCenter bg-primary borderBlack' rowspan='2' width='200'>หน่วย</th>"+
									"<th class='text-center verticalCenter bg-primary borderBlack' rowspan='2' width='200'>Factor</th>"+
									"<th class='text-center verticalCenter bg-primary borderBlack' rowspan='2' width='200'>ประเภทคำนวณ</th>"+
								"</tr>"+
								"<tr>"+
									"<td class='text-center bg-primary borderBlack' width='75'>Year</td>"+
									"<td class='text-center bg-primary borderBlack' width='75'>Age</td>"+
									"<td class='text-center bg-primary borderBlack' width='75'>Year</td>"+
									"<td class='text-center bg-primary borderBlack' width='75'>Age</td>"+
								"</tr>"+
							"</thead>"+
							"<tbody class='disabledAll_NotFade'></tbody>"+
						"</table>"+
						"</div>";
			
			$("#prd_bnf_OL5").append(row_5);
			
		}
		
		if(object_tblBase.dividend.length > 0){
			
			divi = true;
			
			htmlBase += "<li id='dividend_li'><a data-toggle='tab' href='#prd_bnf_OL6'>เงินปันผล</a></li>";

					var row_6 =  "<div id='bnf_prd_bnf_OL6'>"+
						"<div class='text-center' style='padding: 20px 0'></div>"+
					"<div class='panel panel-primary' style='padding: 0px'>"+
						"<div class='row'>"+
							"<div class='col-md-12 panel_head_blue' style='width: 96.6%'>"+
								"<div class='col-sm-12 input-group'>"+
								"<input type='checkbox' id='cbBoxDV1' disabled>"+
								"<label for='cbBoxDV1'>เงินปันผลจำนวนหนึ่ง (Non Guarantee)</label>"+
								"</div>"+
							"</div>"+
						"</div>"+
						"<div class='text-center' style='padding: 10px 0'></div>"+
							"<div class='row'>"+
								"<div class='col-md-1'></div>"+
								"<div class='col-md-2'>"+
									"<label class='text-right' style='padding-top: 5px;'>ประเภทเงินปันผล</label>"+
								"</div>"+
								"<div class='col-md-4'>"+
									"<select class='form-control' id='DVList1' disabled><option value='NONE'>None</option></select>"+
								"</div>"+
							"</div>"+
						"<div class='text-center' style='padding: 10px 0'></div>"+
							"<div class='row'>"+
								"<div class='col-md-1'></div>"+
								"<div class='col-md-2'>"+
									"<label class='text-right' style='padding-top: 5px;'>ปีกรมธรรม์ / อายุ</label>"+
								"</div>"+
								"<div class='col-md-4'>"+
									"<select class='form-control' id='DvList1_Year' disabled><option value='NONE'>None</option></select>"+
								"</div>"+
								"<div class='col-md-1'>"+
									"<input class='form-control' type='text' id='DVBox1' disabled>"+
								"</div>"+
								"<div class='col-md-1 margin-padding0 text-left'>"+
									"<p class='text-left' style='padding-top: 5px;'>ปี</p>"+
								"</div>"+
							"</div>"+
						"<div class='text-center' style='padding: 10px 0'></div>"+
							"<div class='row'>"+
								"<div class='col-md-1'></div>"+
								"<div class='col-md-2'>"+
									"<label class='text-right' style='padding-top: 5px;'>สูตรการคำนวณ</label>"+
								"</div>"+
								"<div class='col-md-4'>"+
									"<select class='form-control' id='DVList1_Cal' disabled><option value='NONE'>None</option></select>"+
								"</div>"+
							"</div>"+
						"<div class='text-center' style='padding: 10px 0'></div>"+
					"</div>"+
					"<div class='text-center' style='padding: 10px 0'></div>"+
					"<div class='panel panel-primary'  style='padding: 0px  0px  60px'>"+
						"<div class='row'>"+
							"<div class='col-md-12 panel_head_blue' style='width: 96.6%'>"+
								"<div class='col-sm-12 input-group'>"+
								"<input type='checkbox' id='cbBoxDV2' disabled>"+
								"<label for='cbBoxDV2'>เงินปันผลที่รับรองการจ่าย (Guarantee)</label>"+
								"</div>"+
							"</div>"+
						"</div>"+
						"<div class='text-center' style='padding: 10px 0'></div>"+
						"<div class='row'>"+
							"<div class='col-md-1'></div>"+
							"<div class='col-md-3 text-left'>"+
								"<input type='radio' name='GuaranteeOL_opt[]' id='GuaranteeOL_opt1' disabled>&nbsp;<label for='GuaranteeOL_opt1'>โหลดตาราง</label>"+
							"</div>"+
						"</div>"+
						"<div class='row'>"+
							"<div class='col-md-1'></div>"+
							"<div class='col-md-2'>"+
								"<p class='text-right' style='padding-top: 5px;''>ตารางเงินปันผล</p>"+
							"</div>"+
							"<div class='col-sm-6'>"+
								"<div class='input-group'>"+
									"<input type='text' class='form-control' id='input_fileGuaruntee_OL' readonly='' placeholder='"+$("#bnf_pattern_dividend").val()+cov_code+".txt'>"+
										"<label class='input-group-btn'>"+
											"<span id='spanBoxGuaruntee_OL' class='btn btn-primary' disabled>"+
												"<font id='validate_fileGuaruntee_OL' style='color: red;''>*</font>เลือกไฟล์"+
												"<input id='select_fileGuaruntee_OL' type='file' accept='.txt' style='display: none;'>"+
											"</span>"+
										"</label>"+
									"<input type='hidden' id='fileID_OL' value=''>"+
									"<input type='hidden' id='layoutID_OL' value=''>"+
								"</div>"+
							"</div>"+
							"<div class='col-md-2'>"+
						"<button type='button' class='btn btn-primary text-center' id='see_file_input_fileGuaruntee_OL' disabled>ดูค่า</button>"+
						"</div>"+
						"</div>"+
						"<div class='text-center' style='padding: 10px 0'></div>"+
						"<div class='row'>"+
							"<div class='col-md-1'></div>"+
							"<div class='col-md-3 text-left'>"+
							"<input type='radio' name='GuaranteeOL_opt[]' id='GuaranteeOL_opt2' disabled>&nbsp;<label for='GuaranteeOL_opt2'>ระบุค่า</label>"+
							"</div>"+
						"</div>"+
						"<div class='text-center' style='padding: 10px 0'></div>"+
						"<div class='col-sm-12 paddingleft_style3'>"+
							"<table class='table table-bordered' id='benefit_GuarunteePB_tbl'> "+
							"<thead>"+
								"<tr>"+
									"<th class='borderBlack bg-primary text-center'>ประเภทเงินปันผล</th>"+
									"<th class='borderBlack bg-primary text-center'>ปี</th>"+
									"<th class='borderBlack bg-primary text-center'>จำนวน</th>"+
									"<th class='borderBlack bg-primary text-center'>หน่วย</th>"+
									"<th class='borderBlack bg-primary text-center'>Factor</th>"+
									"<th class='borderBlack bg-primary text-center'>ประเภทคำนวณ</th>"+
								"</tr>"+
							"</thead>"+
							"<tbody class='disabledAll_NotFade'></tbody>"+
						"</table>"+
						"</div>"+
					"<div class='text-center' style='padding: 20px 0'></div>"+
					"<div class='text-center' style='padding: 10px 0'></div>"+
					
					"<div class='text-center' style='padding: 10px 0'></div>"+
					"</div>";
				
					
				
			$("#prd_bnf_OL6").append(row_6);
		
			var dividend_type_lookup = $("#dividend_type_lookup").val()
			$("#DVList1").append(dividend_type_lookup);
			
			var insure_lookup = $("#insur_year_lookup").val()
			$("#DvList1_Year").append(insure_lookup);
			
			var formula_lookup = $("#formula_lookup").val()
			$("#DVList1_Cal").append(formula_lookup);
			
		}
	
		$("#tabBenefitBasePlan_OL").append(htmlBase);

//		get_dataBenefit_OL(response,"B",cov_code);
		
		if(object_tblBase.die.length > 0){
			
				$("#prd_bnf_OL1").addClass("in active");
				$("#die_li").addClass('active');
				
				$("#prd_bnf_OL2").removeClass("in active");
				$("#refundMaturity_li").removeClass('active');
				
				$("#prd_bnf_OL3").removeClass("in active");
				$("#refund_li").removeClass('active');
				
				$("#prd_bnf_OL4").removeClass("in active");
				$("#pension_li").removeClass('active');
				
				$("#prd_bnf_OL5").removeClass("in active");
				$("#medicalFund_li").removeClass('active');
				
				$("#prd_bnf_OL6").removeClass("in active");
				$("#dividend_li").removeClass('active');
				
		}

		if(object_tblBase.die.length == 0){
			
			if(object_tblBase.refundMaturity.length > 0){
				$("#prd_bnf_OL1").removeClass("in active");
				$("#die_li").removeClass('active');
				
				$("#prd_bnf_OL2").addClass("in active");
				$("#refundMaturity_li").addClass('active');
				
				$("#prd_bnf_OL3").removeClass("in active");
				$("#refund_li").removeClass('active');
				
				$("#prd_bnf_OL4").removeClass("in active");
				$("#pension_li").removeClass('active');
				
				$("#prd_bnf_OL5").removeClass("in active");
				$("#medicalFund_li").removeClass('active');
				
				$("#prd_bnf_OL6").removeClass("in active");
				$("#dividend_li").removeClass('active');
				
			}
			
		}
		
		if(object_tblBase.die.length == 0 && object_tblBase.refundMaturity.length == 0){
			if(object_tblBase.refund.length > 0){
				$("#prd_bnf_OL1").removeClass("in active");
				$("#die_li").removeClass('active');
				
				$("#prd_bnf_OL2").removeClass("in active");
				$("#refundMaturity_li").removeClass('active');
				
				$("#prd_bnf_OL3").addClass("in active");
				$("#refund_li").addClass('active');
				
				$("#prd_bnf_OL4").removeClass("in active");
				$("#pension_li").removeClass('active');
				
				$("#prd_bnf_OL5").removeClass("in active");
				$("#medicalFund_li").removeClass('active');
				
				$("#prd_bnf_OL6").removeClass("in active");
				$("#dividend_li").removeClass('active');
				
			}
			
		}
		if(object_tblBase.die.length == 0 && object_tblBase.refundMaturity.length == 0 && object_tblBase.refund.length == 0){
			if(object_tblBase.pension.length > 0){
				$("#prd_bnf_OL1").removeClass("in active");
				$("#die_li").removeClass('active');
				$("#prd_bnf_OL2").removeClass("in active");
				$("#refundMaturity_li").removeClass('active');
				$("#prd_bnf_OL3").removeClass("in active");
				$("#refund_li").removeClass('active');
				$("#prd_bnf_OL4").addClass("in active");
				$("#pension_li").addClass('active');
				$("#prd_bnf_OL5").removeClass("in active");
				$("#medicalFund_li").removeClass('active');
				$("#prd_bnf_OL6").removeClass("in active");
				$("#dividend_li").removeClass('active');
			}
			
		}
		if(object_tblBase.die.length == 0 && object_tblBase.refundMaturity.length == 0 && object_tblBase.refund.length == 0 && object_tblBase.pension.length == 0){
			if( object_tblBase.medicalFund.length > 0){
				
				$("#prd_bnf_OL1").removeClass("in active");
				$("#die_li").removeClass('active');
				$("#prd_bnf_OL2").removeClass("in active");
				$("#refundMaturity_li").removeClass('active');
				$("#prd_bnf_OL3").removeClass("in active");
				$("#refund_li").removeClass('active');
				$("#prd_bnf_OL4").removeClass("in active");
				$("#pension_li").removeClass('active');
				$("#prd_bnf_OL5").addClass("in active");
				$("#medicalFund_li").addClass('active');
				$("#prd_bnf_OL6").removeClass("in active");
				$("#dividend_li").removeClass('active');
			}
			
		}
		if(object_tblBase.die.length == 0 && object_tblBase.refundMaturity.length == 0 && object_tblBase.refund.length == 0 && object_tblBase.pension.length == 0 && object_tblBase.medicalFund.length == 0){
			if(object_tblBase.dividend.length > 0){
				$("#prd_bnf_OL1").removeClass("in active");
				$("#die_li").removeClass('active');
				$("#prd_bnf_OL2").removeClass("in active");
				$("#refundMaturity_li").removeClass('active');
				$("#prd_bnf_OL3").removeClass("in active");
				$("#refund_li").removeClass('active');
				$("#prd_bnf_OL4").removeClass("in active");
				$("#pension_li").removeClass('active');
				$("#prd_bnf_OL5").removeClass("in active");
				$("#medicalFund_li").removeClass('active');
				$("#prd_bnf_OL6").addClass("in active");
				$("#dividend_li").addClass('active');
			}
			
		}
		
		$("#tabBenefitProduct_OL").prepend(html);
	}

	
		/*$("#tabBenefitProduct_OL").append(html);*/
	
	
	
}

function get_dataBenefit_OL(response, type, cov_code, prd_code_rider){

	if(type != "B"){
		/********tab************/	
		var rider_code = "";
		if(type == "R" || type == "E"){
			rider_code = cov_code
		}else{
			rider_code = prd_code_rider;
		}
		
		for (i in response.Tab_benefit[0].benefit) {
	
			for(j in response.Tab_benefit[0].benefit[i]){
				if(j == 0){
					
					var obj_bnf = response.Tab_benefit[0].benefit[i][j];		
					var bnf_id = obj_bnf.benefit_item.bnf_item_id;
					var bnf_name = obj_bnf.benefit_item.item_name;
					
					/*CV*/
					var bnf_cv = obj_bnf.cov_terminate.return_cash_surr;
					
					/************get master***********/
					
					$("#benefitDetail"+rider_code+"_OL .tab-content").each(function(){
						var tab_bnf = $(this).data("name");		
						var tab_id_disease = $(this).data("id");
						if(bnf_name == tab_bnf){
							$(this).find(".tab-pane>input:hidden").val(bnf_id);
							
							/*คืน CV*/
							if(bnf_cv == true){
								$(this).find(".tab-pane .benefit_cv_box input:checkbox").prop("checked", true);
							}else{
								$(this).find(".tab-pane .benefit_cv_box input:checkbox").prop("checked", false);
							}
							
						}
						
						/*ตารางโรคร้ายแรง*/
						var no = 1;
						if(bnf_name == "BC_OL_DDR_01"){
							if(response.Tab_benefit[0].benefit[i][0].listBenefitSchedAccessData.length > 0){
								
								
								/*console.log(data_disease.listBenefitSchedAccessData.length)*/
								for(jjj in response.Tab_benefit[0].benefit[i][0].listBenefitSchedAccessData){
									
									/*bnf_sched*/
									var sched_disease = response.Tab_benefit[0].benefit[i][0].listBenefitSchedAccessData[jjj];
									var sched_seq = sched_disease.benefit_sched.sched_seq;
									var beg_period = sched_disease.benefit_sched.beg_period;
									var end_period = sched_disease.benefit_sched.end_period;
									var beg_period_unit = sched_disease.benefit_sched.beg_period_unit;
									var end_period_unit = sched_disease.benefit_sched.end_period_unit;
									var amt_compare = sched_disease.benefit_sched.amt_compare;
									/*bnf_amount*/
									for(aaa in response.Tab_benefit[0].benefit[i][0].listBenefitSchedAccessData[jjj].listBenefitAmount){
										var amount_disease = response.Tab_benefit[0].benefit[i][0].listBenefitSchedAccessData[jjj].listBenefitAmount[aaa];
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
												/*"<td class='text-center borderBlack' id='"+newID+"' width='33px' onclick='"+ftOnclick+"' style='vertical-align: middle;'>"+
												"<i class='glyphicon glyphicon-edit'></i>"+
												"</td>"+*/
												/*"<td class='text-center borderBlack'><input id='bnf_phase"+no+"_OL' type='text' class='form-control margin-padding0 text-center width50px' value='"+sched_seq+"' min='1' maxlength='2' onkeyup='numberKey(this), replaceDot(this)' onkeydown='numberKey(this);' onkeypress='validate(event)' onchange='validate_range_tbdie(this.id,this.value,"+tab_id_disease+");'></td>"+*/
												"<td width='56px' class='borderBlack'><input id='bnf_fromYear"+no+"_OL' type='text' class='form-control margin-padding0 text-center' value='"+beg_period+"' onkeypress='validate(event);'  onkeyup='replaceDot(this);' onblur='check_fromto_disease_ol("+no+");' min='1' maxlength='2'></td>"+
												"<td width='100px' class='borderBlack'>"+
													"<select id='bnf_fromYearUnit"+no+"_OL' class='form-control width-initial' onchange='check_fromtoUnit_disease_ol("+no+");' style='margin: 0;width: 100%;'>"+
														"<option value='NONE' selected>None</option>"+
													"</select></td>"+
												"<td width='56px' class='borderBlack'><input id='bnf_toYear"+no+"_OL' type='text' maxlength='2' class='form-control margin-padding0 text-center' value='"+end_period+"' min='1' onkeypress='validate(event);'  onkeyup='replaceDot(this);' onblur='check_fromto_disease_ol("+no+");'></td>"+
												"<td width='100px' class='borderBlack'>"+
													"<select id='bnf_toYearUnit"+no+"_OL' class='form-control width-initial' onchange='check_fromtoUnit_disease_ol("+no+");' style='margin: 0;width: 100%;'>"+
														"<option value='NONE' selected>None</option>"+
													"</select></td>"+
												"</tr>";
								
									
									
									var row_diseaseR = ""; 
									row_diseaseR = "<tr id='tbody_bnfR_"+tab_id_disease+""+no+"'>"+
												"<td width='50px' class='borderBlack'>"+
												"<select id='bnf_sa_max"+no+"_OL' class='form-control width100px'>"+
													"<option value='NONE' selected>None</option>"+												
												"</select></td>"+
												"<td width='50px' class='borderBlack'><input type='text' id='bnf_sa"+no+"_OL' class='auto form-control margin-padding0 text-center width100px' value='"+benef_amt_1+"' onblur='replaceBlank(this);' data-v-min='0.00' data-v-max='999.99'></td>"+
												"<td width='50px' class='borderBlack verticalCenter'>"+
												"<select id='bnf_sa_unit"+no+"_OL' class='form-control width100px'>"+
														"<option value='NONE' selected>None</option>"+
												"</select>"+
												"</td>"+
												"<td width='50px' class='borderBlack'><input id='bnf_premium_OL"+no+"' type='text'"+
													"class='auto form-control margin-padding0 text-center width100px' value='"+benef_amt_2+"' onblur='replaceBlank(this);' data-v-min='0.00' data-v-max='999.99'>"+
												"</td>"+
												"<td width='50px' class='text-center borderBlack'>"+
												"<select id='bnf_premium_unit"+no+"_OL' onchange='sl_premium("+no+")' class='form-control width100px'>"+
														"<option value='NONE' selected>None</option>"+
																
												"</select></td>"+
												"<td width='50px' class='text-center verticalCenter borderBlack'>"+
												"<input id='bnf_checkbox_OL"+no+"' type='checkbox' disabled></td>"+
												"<td width='50px' class='borderBlack'><input id='bnf_cvpv_OL"+no+"' type='text'"+
													"class='auto form-control margin-padding0 text-center width100px' value='"+benef_amt_3+"' onblur='replaceBlank(this);' data-v-min='0.00' data-v-max='999.99'>"+
												"</td>"+
												"<td width='50px' class='text-center borderBlack'>"+
												"<select id='bnf_cv_unit"+no+"_OL' class='form-control width100px'>"+
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
											var lookup_unit_calendar = $("#die_calendar_lookup").val();
											$("#bnf_rider_"+rider_code+" #bnf_fromYearUnit"+no+"_OL").append(lookup_unit_calendar);
											$("#bnf_rider_"+rider_code+" #bnf_toYearUnit"+no+"_OL").append(lookup_unit_calendar);
		
											var lookup_unit = $("#die_unit_lookup").val();
											$("#bnf_rider_"+rider_code+" #bnf_sa_max"+no+"_OL").append(lookup_unit);

											var lookup_sa_unit = $("#die_sa_lookup").val();
											$("#bnf_rider_"+rider_code+" #bnf_sa_unit"+no+"_OL").append(lookup_sa_unit);

											var lookup_premium = $("#die_premium_lookup").val();
										    $("#bnf_rider_"+rider_code+" #bnf_premium_unit"+no+"_OL").append(lookup_premium);
				
											var lookup_cvpv_unit = $("#die_CV_PV_lookup").val();
											$("#bnf_rider_"+rider_code+" #bnf_cv_unit"+no+"_OL").append(lookup_cvpv_unit);
						
											var lookup_other_unit = $("#die_other_lookup").val();
											$("#bnf_rider_"+rider_code+" #bnf_other_unit"+no+"_OL").append(lookup_other_unit);
											
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

							if(response.Tab_benefit[0].benefit[i][j].listBenefit.length > 0){
								
								for(jj in response.Tab_benefit[0].benefit[i][0].listBenefit) {
									var list_exception_disease = response.Tab_benefit[0].benefit[i][j].listBenefit[jj];
									var bnf_code = list_exception_disease.bnf_code;
									var name_th = list_exception_disease.name_th;
									var no = Number(jj)+1;
									var row = "";
									row = "<tr id='tbody_exception"+no+"'>"+					    								
									 "<td class='text-center borderBlack' style='vertical-align: middle;'><span class='spanException_OL' id='orderExceptionID"+no+"'>"+no+"</span></td>"+									
									  "<td class='borderBlack verticalCenter'><input type='text' name='record_name[]' id='record_name"+no+"' class='form-control margin-padding0 text-center;' value='"+name_th+"' readonly></td>"+											  									
								  "</tr>";			
									
									$("#exception_Table_"+tab_id_disease+" tbody").append(row);
									
								}
							}
						}
						
						/*end*/
						
					});	
					
				}else{
					
					
					for(k in response.Tab_benefit[0].benefit){
						
						var obj = response.Tab_benefit[0].benefit[k];
						var bnf_active = obj[0].benefit_item.item_name;
						
						var bnf_name = response.Tab_benefit[0].benefit[i][0].benefit_item.item_name;
						var tabID = k;
						
						
						if(bnf_active == bnf_name){
							
							var BCID = "BC_0"+tabID+"_"+rider_code+"_OL";
								
							/************get table***********/			
							var numberImgOK = 0;
							var iii = 0;	
							/*alert("for2/"+response.Tab_benefit[0].benefit[i][j].length) ;*/
							for(ii in response.Tab_benefit[0].benefit[i][j]){
								/*alert ("22");*/
								/*************************start get data*****************************/
								var data_benefit_rider = response.Tab_benefit[0].benefit[i][j][ii].listBenefitSched;
								if(data_benefit_rider.length > 0){
									
									
									
									/***********name*********/
									var obj_bnf_name = response.Tab_benefit[0].benefit[i][j][ii].benefit;
									var objKey = response.Tab_benefit[0].benefit[i][j][ii].benefit.objKey[0][1];
									/**********item**********/
									var obj_bnf_item = response.Tab_benefit[0].benefit[i][j][ii].benefitItem;
								
									
									
									if(bnf_name = "BC_OL_DDR_01"){
										var is_terminate = response.Tab_benefit[0].benefit[i][j][ii].benefitItem.is_terminate;
										var is_deduct_cash_value = response.Tab_benefit[0].benefit[i][j][ii].benefitItem.is_deduct_cash_value;
										
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
									var obj_bnf_amount = response.Tab_benefit[0].benefit[i][j][ii].listBenefitSched[0].listBenefitAmountAccessData[0].benefit_amount;		
									var benef_amt = numberWithCommas(parseFloat(obj_bnf_amount.benef_amt*100).toFixed(2));
									var benef_unit = obj_bnf_amount.benef_unit;
									var benef_scope = obj_bnf_amount.benef_scope;
									var benef_factor = obj_bnf_amount.benef_factor;
								
									/*********note************/
									var remark = obj_bnf_item.note;
									
									/************limit*************/
									var obj_bnf_limit = response.Tab_benefit[0].benefit[i][j][ii].listBenefitSched[0].listBenefitLimit[0];
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
									var obj_bnf_special_amount = response.Tab_benefit[0].benefit[i][j][ii].listBenefitSched[0].listBenefitAmountAccessData[0].listBenefitSpecialAmount[0];

									var special_benef_unit = obj_bnf_special_amount.benef_unit;
									
									if(special_benef_unit == "CURRENCY" || special_benef_unit == "UNIT"){
										var special_benef_amt = numberWithCommas(parseFloat(obj_bnf_special_amount.benef_amt*100).toFixed(2));
									}else if(special_benef_unit == "PERCENT" || special_benef_unit == "NONE"){
										var special_benef_amt = parseFloat(obj_bnf_special_amount.benef_amt*100).toFixed(2);
									}else{
										var special_benef_amt =obj_bnf_special_amount.benef_amt*100;
									}

									/*************************end get data*****************************/
									
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
										    if(flag_disease == true){
											  row1 += "<td width='70px' class='text-center borderBlack vertical-middle'><input type='checkbox' id='is_benefit_contract_OL"+numberImgOK+"'></td>"+
											   "<td width='70px' class='text-center borderBlack vertical-middle'><input type='checkbox' id='is_benefit_cv_OL"+numberImgOK+"'></td>";
											  
											  
										  }
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
										 
										  
										
									}else{
						
										iii++
										var numberImgOK = $("#tbl_"+BCID+" >tbody>tr[data-level='1']:last").data("id");
										numberImgOK_Sub = numberImgOK+"_"+iii;
						
										row1 += "<tr id='tbody_benefitL_OL"+numberImgOK+"_"+iii+"' data-id='"+numberImgOK+"_"+iii+"' data-parent='1' data-level='2' data-group='"+numberImgOK+"'>"+
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
												   "<td width='70px' class='text-center borderBlack vertical-middle'><input type='checkbox' id='is_benefit_cv_OL"+numberImgOK_Sub+"'></td>";
												   
										   }
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
									
									$("#tbl_"+BCID+" tbody").append(row1);	 	
									$('.auto').autoNumeric('init');
									
									/*set id to dropdown*/
									var dd_number = "";
									if(ii == 0){
										dd_number = numberImgOK;
									}else{
										dd_number = numberImgOK_Sub;
									}
									
									/****************start lookup*************************/
									var lookup_unit_get = $("#bnf_unit_lookup").val();
									var lookup_frequency_get = $("#bnf_frequency_lookup").val();
									var lookup_factorunit_get = $("#bnf_factor_unit_lookup").val();
									var lookup_factorScope = $("#bnf_factor_scope_lookup").val();
									var lookup_unitFactor = $("#bnf_unitFactor_lookup").val();
									
									// dd
									$("#tbl_"+BCID+" #benefit_unit_OL"+dd_number).append(lookup_unit_get);
									$("#tbl_"+BCID+" #benefit_fq_OL"+dd_number).append(lookup_frequency_get);
									$("#tbl_"+BCID+" #benefit_fund_OL"+dd_number).append(lookup_unitFactor);
									$("#tbl_"+BCID+" #benefit_factor_unit_OL"+dd_number).append(lookup_factorunit_get);
									$("#tbl_"+BCID+" #benefit_acc_unit_OL"+dd_number).append(lookup_factorunit_get);
									$("#tbl_"+BCID+" #benefit_factor_to_OL"+dd_number).append(lookup_factorScope);
									
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
						}
						/*end bnf_active == bnf_name*/
						
					}
					/*end for(k in response.Tab_benefit[0].benefit){*/

				}
				
				/*end if else*/
			}
					
		}
	}
	
	if(type == "B"){
		
		var obj_baseplan = response.Tab_Benefits[0];
		if(obj_baseplan.die.length > 0){
		
					
					/*Tab Die*/
					
					var obj_base_die_tab = response.Tab_Benefits[0].die[0];
					
						if(response.Tab_Benefits[0].die[0].base_table.length > 0){
							
							
							var no = 1;	
							for(i in response.Tab_Benefits[0].die[0].base_table[0].sched){
								
									var obj_die_table = response.Tab_Benefits[0].die[0].base_table[0].sched[i];
									
									
								
								
//									var obj_die_table = response.Tab_Benefits[0].die[0].base_table[0].sched[i];
									
									var row1 = "";
									row1 = "<tr id='tbody_dieL_OL"+no+"'>"+
										"<td width='56px' class='borderBlack'><input id='die_fromYear"+no+"_OL' type='text' class='form-control margin-padding0 text-center width80px' value='' ></td>"+
										"<td width='100px' class='text-center borderBlack'><select class='form-control' id='die_fromYearUnit"+no+"_OL' onchange='check_fromtoUnit_OL("+no+");'><option value='NONE'>None</option></select></td>"+
										"<td width='56px' class='borderBlack'><input id='die_toYear"+no+"_OL' type='text' class='form-control margin-padding0 text-center width80px' value=''></td>"+
										"<td width='100px' class='text-center borderBlack'><select class='form-control' id='die_toYearUnit"+no+"_OL'  onchange='check_fromtoUnit_OL("+no+");'><option value='NONE'>None</option></select></td>"+
										"</tr>";
								
									$("#tbody_dieL_Product_OL tbody").append(row1);
									var row2 = "";
									row2 = "<tr id='tbody_dieR_OL"+no+"'>"+
											"<td width='50px' class='text-center borderBlack'><select class='form-control width-initial' id='die_sa_max"+no+"_OL'><option value='NONE'>None</option></select></td>"+
											"<td width='50px' class='borderBlack'><input id='die_sa"+no+"_OL' class='auto form-control margin-padding0 text-center width70px' value='0.00' data-v-min='0.00' data-v-max='999.99'></td>"+
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
								
								$("#tbody_dieR_Product_OL tbody").append(row2);
							
							$('.auto').autoNumeric('init');
							
							
							/*Lookup*/
							var lookup_unit_calendar = $("#die_calendar_lookup").val();
							$("#die_fromYearUnit"+no+"_OL").append(lookup_unit_calendar);
							$("#die_toYearUnit"+no+"_OL").append(lookup_unit_calendar);

							var lookup_unit = $("#die_unit_lookup").val();
							$("#die_sa_max"+no+"_OL").append(lookup_unit);

							var lookup_sa_unit = $("#die_sa_lookup").val();
							$("#die_sa_unit"+no+"_OL").append(lookup_sa_unit);

							var lookup_premium = $("#die_premium_lookup").val();
						    $("#die_prem"+no+"_OL").append(lookup_premium);

							var lookup_cvpv_unit = $("#die_CV_PV_lookup").val();
							$("#die_sl_cvpv"+no+"_OL").append(lookup_cvpv_unit);
		
							var lookup_other_unit = $("#die_other_lookup").val();
							$("#die_sl_oth"+no+"_OL").append(lookup_other_unit);
							
							var lookup_condition_unit = $("#die_condition_lookup").val();
							$("#die_condition_adb"+no+"_OL").append(lookup_condition_unit);
							$("#die_condition_acc"+no+"_OL").append(lookup_condition_unit);
							
							var lookup_adb_unit = $("#die_ADB_lookup").val();
							$("#die_adb_type"+no+"_OL").append(lookup_adb_unit);
							
							var lookup_acc_unit = $("#die_ACC_lookup").val();
							$("#die_acc_type"+no+"_OL").append(lookup_acc_unit);
							
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
				
						/*ตารางรายการข้อยกเว้น*/
						var obj_die_tab = response.Tab_Benefits[0].die[0];
						if(response.Tab_Benefits[0].die.length > 0){
							
							var no = 1;
							for(i in response.Tab_Benefits[0].die[0].exceptionAccidentPay){
								var table_except = response.Tab_Benefits[0].die[0].exceptionAccidentPay[i];
								
									var row = "<tr id='tbody_exception"+no+"'>"+					    								
											  "<td class='text-center borderBlack' style='vertical-align: middle;'><span class='spanException_OL' id='orderID"+no+"'>"+no+"</span></td>"+									
											  "<td class='borderBlack verticalCenter'><input type='text' name='exception_name[]' id='exception_name"+no+"' class='form-control margin-padding0 text-center;' value='' readonly></td>"+											  									
											  "</tr>";			
									
									$("#tbl_DeathException_Product_OL tbody").append(row);
									
									$("#exception_name"+no).val(table_except.name_th);
									
									no++;
									
							}
						}
					
					
		}
		
		/*เงินครบกำหนดสัญญา*/
		var obj_refund_maturity = response.Tab_Benefits[0].refundMaturity[0];
		
		if(response.Tab_Benefits[0].refundMaturity.length > 0){
		
			
			var row_refund = "";
			row_refund = "<tr id='tbody_contract_OL0'>"+
									"<td width='50' class='borderBlack'>"+
									"<select id='die_sa_max0_OL' class='form-control width-initial SA_Value'>"+
									"<option value='NONE'>None</option>"+						
									"</select>"+
									"</td>"+
									"<td width='50' class='borderBlack'><input type='text' id='contract_sa0_OL' class='auto form-control margin-padding0 text-center width70px' value=''></td>"+
									"<td width='120' class='borderBlack verticalCenter'>"+
									"<select id='contract_sa_unit0_OL' class='form-control width90px SA_Unit'>"+
									"<option value='NONE'>None</option>"+
									"</select>"+
								"</td>"+
								"<td width='50' class='borderBlack'><input id='contract_premium_OL0' type='text' class='auto form-control margin-padding0 text-center width70px' value='' ></td>"+
								"<td width='50' class='text-center borderBlack'>"+
								"<select id='contract_sl_premium_OL0' class='form-control width80px premium'>"+
								"<option value='NONE'>None</option>"+	
								"</select></td>"+
								"<td width='50' class='text-center verticalCenter borderBlack'><input id='contract_checkbox_OL0' type='checkbox' disabled></td>"+
								"<td width='50' class='borderBlack'><input id='contract_cvpv_OL0' type='text' class='auto form-control margin-padding0 text-center width70px' value=''></td>"+
								"<td width='120' class='text-center borderBlack'><select id='contract_sl_cvpv_OL0' class='form-control width90px CVPV_UNIT'>"+
								"<option value='NONE'>None</option>"+											
								"</select></td>"+
								"<td class='text-center borderBlack'>"+
									"<select id='contract_other_OL0' class='form-control width90px OTHER_TYPE'>"+
									"<option value='NONE'>None</option>"+								
									"</select>"+
								"</td>"+
							"</tr>";
			
				$("#tbl_contract_Product_OL tbody").append(row_refund)
				
							/*Lookup*/
							var lookup_unit = $("#die_unit_lookup").val();
							$("#die_sa_max0_OL").append(lookup_unit);

							var lookup_sa_unit = $("#die_sa_lookup").val();
							$("#contract_sa_unit0_OL").append(lookup_sa_unit);

							var lookup_premium = $("#die_premium_lookup").val();
						    $("#contract_sl_premium_OL0").append(lookup_premium);

							var lookup_cvpv_unit = $("#die_CV_PV_lookup").val();
							$("#contract_sl_cvpv_OL0").append(lookup_cvpv_unit);
		
							var lookup_other_unit = $("#die_other_lookup").val();
							$("#contract_other_OL0").append(lookup_other_unit);
							
							
							
				for(i in response.Tab_Benefits[0].refundMaturity[0].sched){
					var obj_sched = response.Tab_Benefits[0].refundMaturity[0].sched[i];
					$("#die_sa_max0_OL option[value="+obj_sched.amt_compare+"]").attr("selected", "seleted");
					
				}
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
				
				
				var no = 1;
					for(i in response.Tab_Benefits[0].refund[0].sched){				
							var refund_sched = response.Tab_Benefits[0].refund[0].sched[i];
							var refund_amount = response.Tab_Benefits[0].refund[0].amount[i];
							
							
							var row = "<tr id='tbody_refund"+no+"'>"+
									
									"<td width='75' class='borderBlack'><input id='refund_fromYear"+no+"' class='form-control margin-padding0 text-center'  width='50' value=''></td>"+
									"<td width='75' class='borderBlack'><input id='refund_fromAge"+no+"' class='form-control margin-padding0 text-center' width='50' value=''></td>"+
									"<td width='75' class='borderBlack'><input id='refund_toYear"+no+"' class='form-control margin-padding0 text-center' value=''></td>"+
									"<td width='75' class='borderBlack'><input id='refund_toAge"+no+"' class='form-control margin-padding0 text-center' value=''></td>"+
									"<td width='100' class='borderBlack'><input id='refund_year"+no+"' class='auto form-control text-center' ></td>"+
									"<td width='200' class='borderBlack'><input id='refund_amount"+no+"' class='form-control text-center autoComma' onblur='select_unit("+no+");' type='text' width='50' value='0.00' data-v-min='0.00' data-v-max='999999999.99'></td>"+
									"<td width='200' class='text-center borderBlack'><select class='form-control UNIT_TYPE' id='refund_unit"+no+"' onchange='select_unit_option("+no+");'><option value='NONE'>None</option></select></td>"+
									"<td width='200' class='text-center borderBlack'><select class='form-control BENEF_FACTOR' id='refund_factor"+no+"'><option value='NONE'>None</option></select></td>"+
									"<td width='200' class='text-center borderBlack'><select class='form-control SCOPE_TYPE' id='refund_scope"+no+"'><option value='NONE'>None</option></select></td>"+
								"</tr>";

								$("#benefit_refund_Product_OL tbody").append(row);
								$(".autoComma").autoNumeric('init',{vMin: '0.00', vMax: '999999999.99'});
								/*$('.auto').autoNumeric('init');*/
								
								var unit_refund_lookup = $("#unit_refund_lookup").val();
								$("#refund_unit"+no).append(unit_refund_lookup);
								
								var factor_refund_lookup = $("#factor_refund_lookup").val();
								$("#refund_factor"+no).append(factor_refund_lookup);
								
								var scope_refund_lookup = $("#scope_refund_lookup").val();
								$("#refund_scope"+no).append(scope_refund_lookup);
								
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
				
				
				var no = 1;
				for(i in response.Tab_Benefits[0].pension[0].sched){
					var pension_sched = response.Tab_Benefits[0].pension[0].sched[i];
					var pension_amount = response.Tab_Benefits[0].pension[0].amount[i];
					
					var ftOnclick = 'imgCheckbox(this.id);';
				
					var row = "<tr id='tbody_pension"+no+"'>"+
												"<td width='75' class='borderBlack'><input id='pension_fromYear"+no+"' class='form-control margin-padding0 text-center' type='text' onkeypress='validate(event);' maxlength='3' width='50' value='' onkeyup='replaceDot(this)' onblur='choose_from_year_pension("+no+");'></td>"+
												"<td width='75' class='borderBlack'><input id='pension_fromAge"+no+"' class='form-control margin-padding0 text-center' type='text' onkeypress='validate(event);' maxlength='2' width='50' value='' onkeyup='replaceDot(this)' onblur='choose_from_year_pension("+no+");'></td>"+
												"<td width='75' class='borderBlack'><input id='pension_toYear"+no+"' class='form-control margin-padding0 text-center' type='text' onkeypress='validate(event);' maxlength='3' width='50' value='' onkeyup='replaceDot(this)' onblur='choose_from_year_pension("+no+");'></td>"+
												"<td width='75' class='borderBlack'><input id='pension_toAge"+no+"' class='form-control margin-padding0 text-center' type='text' onkeypress='validate(event);' maxlength='2' width='50' value='' onkeyup='replaceDot(this)' onblur='choose_from_year_pension("+no+");'></td>"+
												"<td width='100' class='borderBlack'><input id='pension_year"+no+"' class='auto form-control text-center' onkeypress='validate(event);' onkeyup='check_min_value_year_pen("+no+"), replaceDot(this)' data-v-min='0' data-v-max='99' type='text' maxlength='2' width='50' value=''></td>"+
												"<td width='200' class='borderBlack'><input id='pension_amount"+no+"' class='form-control text-center autoComma' onblur='select_unit_pension("+no+");' type='text' width='50' value='0.00' data-v-min='0.00' data-v-max='999999999.99'></td>"+
												"<td width='200' class='text-center borderBlack'><select class='form-control UNIT_TYPE' onchange='select_unit_option_pension("+no+");' id='pension_unit"+no+"'><option value='NONE'>None</option></select></td>"+
												"<td width='200' class='text-center borderBlack'><select class='form-control UNIT_TYPE' id='pension_factor"+no+"'><option value='NONE'>None</option></select></td>"+
											
						  "</tr>";
					
					$("#benefit_pension_Product_OL tbody").append(row);
					/*$('.auto').autoNumeric('init');*/
					$(".autoComma").autoNumeric('init',{vMin: '0.00', vMax: '999999999.99'});
					
					var unit_pen_lookup = $("#unit_refund_lookup").val();
					$("#pension_unit"+no).append(unit_pen_lookup);
					
					var factor_pen_lookup = $("#factor_refund_lookup").val();
					$("#pension_factor"+no).append(factor_pen_lookup);
						
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
				
				
				var no = 1;
								
				/*var no = Number(i)+1;*/
				for(i in response.Tab_Benefits[0].medicalFund[0].sched){
					
					
							var med_sched = response.Tab_Benefits[0].medicalFund[0].sched[i];
							var med_amount = response.Tab_Benefits[0].medicalFund[0].amount[i];
							
							var ftOnclick = 'imgCheckbox(this.id);';
							var row = "<tr id='tbody_medical"+no+"'>"+
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

									$("#benefit_medical_Product_OL tbody").append(row);
									$(".autoComma").autoNumeric('init',{vMin: '0.00', vMax: '999999999.99'});
									/*$('.auto').autoNumeric('init');*/
									
									var unit_med_lookup = $("#unit_refund_lookup").val();
									$("#medical_unit"+no).append(unit_med_lookup);
									
									var factor_med_lookup = $("#factor_refund_lookup").val();
									$("#medical_factor"+no).append(factor_med_lookup);
									
									var scope_med_lookup = $("#scope_refund_lookup").val();
									$("#medical_scope"+no).append(scope_med_lookup);
									
									
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
						
						$("#spanBoxGuaruntee_OL").attr("disabled", true);
						$("#select_fileGuaruntee_OL").attr("disabled", true);
						$("#benefit_Guaruntee_tbl").addClass("disabledAll");
						$("input[name='GuaranteeOL_opt[]']").prop("disabled", true);
						
					
						for(i in obj_dividend_tab.file_dividend){
							var get_file_data = obj_dividend_tab.file_dividend[i];
							$("#input_fileGuaruntee_OL").val(get_file_data.file);
							$("#layoutID_OL").val(get_file_data.layout);
							$("#fileID_OL").val(get_file_data.fileID);
							$("#rateCat_dividend_OL").val(get_file_data.pass);
							$("#validate_fileGuaruntee_OL").hide();
							$("#see_file_input_fileGuaruntee_OL").prop("disabled",false)
							$("#see_file_input_fileGuaruntee_OL").attr("onclick", "openFileTextProduct_OL('"+get_file_data.file+"','"+get_file_data.ref+"',22,'tb_DVSee_OL','modal_DVSee_OL')");
					    	
							}
						
							
						
					}
					
					
				}
				if(obj_dividend_tab.sched_02.length > 0 && obj_dividend_tab.amount_02.length > 0){

					$("#cbBoxDV2").prop("checked", true);
					$("#spanBoxGuaruntee_OL").attr("disabled", true);
					$("#select_fileGuaruntee_OL").attr("disabled", true);
					$("#GuaranteeOL_opt2").prop("checked", true);
					$("#validate_fileGuaruntee_OL").show();
					/*tbl*/
					
						var no = 1;
						for(i in response.Tab_Benefits[0].dividend[0].sched_02){				
							var dividend_sched = response.Tab_Benefits[0].dividend[0].sched_02[i];
							var dividend_amount = response.Tab_Benefits[0].dividend[0].amount_02[i];
							
							var ftOnclick = 'imgCheckbox(this.id);';
							var	row = "<tr id='tbody_dividend"+no+"'>"+
										"<td width='200' class='text-center borderBlack'><select class='form-control DIVIDEND_TYPE' id='dividend_beg_type"+no+"'><option value='NONE'>None</option></select></td>"+
										"<td width='75' class='borderBlack' style='margin:0;'><input id='dividend_year"+no+"' maxlength='2' class='auto form-control margin-padding0 text-center' onkeyup='check_min_value_year_div("+no+"), replaceDot(this)' onkeypress='validate(event);' data-v-min='0' data-v-max='99' type='text' width='50' value=''></td>"+
				  						"<td width='75' class='borderBlack' style='margin:0;'><input id='dividend_amount"+no+"' class='form-control margin-padding0 text-center autoComma' onblur='select_unit_dividend("+no+");' type='text' width='50' value='0.00' data-v-min='0.00' data-v-max='999999999.99'></td>"+
										"<td width='200' class='text-center borderBlack'><select class='form-control UNIT_TYPE' onchange='select_unit_option_dividend("+no+");' id='dividend_unit"+no+"'><option value='NONE'>None</option></select></td>"+
										"<td width='200' class='text-center borderBlack'><select class='form-control BENEF_FACTOR' id='dividend_factor"+no+"'><option value='NONE'>None</option></select></td>"+
										"<td width='200' class='text-center borderBlack'><select class='form-control SCOPE_TYPE' id='dividend_scope"+no+"'><option value='NONE'>None</option></select></td>"+
										"</tr>";

							$("#benefit_GuarunteePB_tbl tbody").append(row);
							/*$('.auto').autoNumeric('init');*/
							$(".autoComma").autoNumeric('init',{vMin: '0.00', vMax: '999999999.99'});
									
									/*lookup*/
									var unit_div_lookup = $("#unit_refund_lookup").val();
									$("#dividend_unit"+no).append(unit_div_lookup);
									
									var factor_div_lookup = $("#factor_refund_lookup").val();
									$("#dividend_factor"+no).append(factor_div_lookup);
									
									var scope_div_lookup = $("#scope_refund_lookup").val();
									$("#dividend_scope"+no).append(scope_div_lookup);
									
									var dividend_type_lookup = $("#dividend_type_lookup").val()
									$("#dividend_beg_type"+no).append(dividend_type_lookup);
							
									
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

function show_bnf_content_OL(tab,cov_code){
	var cove_code = ""+cov_code;

	$("#benefitDetail"+cov_code+"_OL .tab-content>div").each(function(){
		var contentID = $(this).attr("id");
		
		if(contentID == tab){
			$("#"+tab).css("display","block");
			
		}else{
			$(this).css("display","none");
		}
	});
	
	
	
}
function choose_bnf_content_OL(type,cov_code){
	if(type != "B"){
		$("#menu_ProductBnf2_OL").addClass('active in')
		$("#menu_ProductBnf1_OL").removeClass('active in')
		$("#BC0_"+cov_code+"_OL").css("display","block")
		$("#tabBenefitRider_"+cov_code+"_OL li:not(:first-child)").removeClass("active");
		$("#tabBenefitRider_"+cov_code+"_OL li:first-child").addClass("active");
		
		var text_bnf = $("#tabBenefitRider_"+cov_code+"_OL li:first-child").text();
		//console.log("text_bnf>> "+text_bnf);
		$("#benefitDetail"+cov_code+"_OL .tab-content[data-name='"+text_bnf+"']>div").css("display","block");
		$("#benefitDetail"+cov_code+"_OL .tab-content[data-name!='"+text_bnf+"']>div").css("display","none");
	
	}
	
	$("#tab_benefitRider_in .benefRider_OL").each(function(){
		if($(this).attr('id') != "bnf_rider_"+cov_code){
			$(this).css("display","none");
		}else{
			$(this).css("display","block");
		}
	})

	
}

function show_benefit_OL(response){
	//Lookup for benefit
	
	/*Baseplan*/
	var obj_bnf_baseplan = response.Tab_Benefits_BasePlan[0];
	$("#bnf_pattern_dividend").val(obj_bnf_baseplan.dividend[0].filelookup_dividend[0].pattern[0].layout);
	
	/*rider*/
	var obj_bnf = response.Tab_Benefits_Rider[0];

	var list_unit = "";
	for(i in obj_bnf.unit){
		var obj = obj_bnf.unit[i];
		list_unit += "<option value='"+obj.pass+"'>"+obj.text+"</option>";
	}
	$("#bnf_unit_lookup").val(list_unit);
		
	var list_factor_unit = "";
	for(i in obj_bnf.factor_unit){
		var obj = obj_bnf.factor_unit[i];
		list_factor_unit += "<option value='"+obj.pass+"'>"+obj.text+"</option>";
	}
	$("#bnf_factor_unit_lookup").val(list_factor_unit);
	
	var list_factor_scope = "";
	for(i in obj_bnf.factor_scope){
		var obj = obj_bnf.factor_scope[i];
		list_factor_scope += "<option value='"+obj.pass+"'>"+obj.text+"</option>";
	}
	$("#bnf_factor_scope_lookup").val(list_factor_scope);
	
	var list_unitFactor = "";
	for(i in obj_bnf.unitFactor){
		var obj = obj_bnf.unitFactor[i];
		list_unitFactor += "<option value='"+obj.pass+"'>"+obj.text+"</option>";
	}
	$("#bnf_unitFactor_lookup").val(list_unitFactor);
	
	var list_frequency = "";
	for(i in obj_bnf.frequency){
		var obj = obj_bnf.frequency[i];
		list_frequency += "<option value='"+obj.pass+"'>"+obj.text+"</option>";
	}
	$("#bnf_frequency_lookup").val(list_frequency);
	
	/*โรคร้ายแรง*/
	var list_die_premium = "";
	for(i in obj_bnf.die.die_premium){
		var obj = obj_bnf.die.die_premium[i];
		list_die_premium += "<option value='"+obj.pass+"'>"+obj.text+"</option>";
	}
	$("#die_premium_lookup").val(list_die_premium);
	
	var list_die_calendar = "";
	for(i in obj_bnf.die.die_calendar){
		var obj = obj_bnf.die.die_calendar[i];
		list_die_calendar += "<option value='"+obj.pass+"'>"+obj.text+"</option>";
	}
	$("#die_calendar_lookup").val(list_die_calendar);
	
	var list_die_CV_PV = "";
	for(i in obj_bnf.die.die_CV_PV){
		var obj = obj_bnf.die.die_CV_PV[i];
		list_die_CV_PV += "<option value='"+obj.pass+"'>"+obj.text+"</option>";
	}
	$("#die_CV_PV_lookup").val(list_die_CV_PV);
	
	var list_die_sa = "";
	for(i in obj_bnf.die.die_sa){
		var obj = obj_bnf.die.die_sa[i];
		list_die_sa += "<option value='"+obj.pass+"'>"+obj.text+"</option>";
	}
	$("#die_sa_lookup").val(list_die_sa);
	
	var list_die_other = "";
	for(i in obj_bnf.die.die_other){
		var obj = obj_bnf.die.die_other[i];
		list_die_other += "<option value='"+obj.pass+"'>"+obj.text+"</option>";
	}
	$("#die_other_lookup").val(list_die_other);
	
	var list_die_unit = "";
	for(i in obj_bnf.die.die_unit){
		var obj = obj_bnf.die.die_unit[i];
		list_die_unit += "<option value='"+obj.pass+"'>"+obj.text+"</option>";
	}
	$("#die_unit_lookup").val(list_die_unit);
	
	/*BASEPLAN*/
	var obj_bnf_base = response.Tab_Benefits_BasePlan[0];
	
	var lookup_condition = "";
	for(i in obj_bnf_base.die[0].condition){
		var obj = obj_bnf_base.die[0].condition[i];
		lookup_condition += "<option value='"+obj.pass+"'>"+obj.text+"</option>";
	}
	$("#die_condition_lookup").val(lookup_condition);
	
	var lookup_adb = "";
	for(i in obj_bnf_base.die[0].accident_ADB){
		var obj = obj_bnf_base.die[0].accident_ADB[i];
		lookup_adb += "<option value='"+obj.pass+"'>"+obj.text+"</option>";
	}
	$("#die_ADB_lookup").val(lookup_adb);
	
	var lookup_acc = "";
	for(i in obj_bnf_base.die[0].accidentPublic_ACC){
		var obj = obj_bnf_base.die[0].accidentPublic_ACC[i];
		lookup_acc += "<option value='"+obj.pass+"'>"+obj.text+"</option>";
	}
	$("#die_ACC_lookup").val(lookup_acc);
	
	var lookup_unit_refund = "";
	for (i in obj_bnf_base.refund[0].benef_unit){
		var obj = obj_bnf_base.refund[0].benef_unit[i];
		lookup_unit_refund += "<option value='"+obj.pass+"'>"+obj.text+"</option>";
	}
	$("#unit_refund_lookup").val(lookup_unit_refund);
	
	var lookup_factor_refund = "";
	for(i in obj_bnf_base.refund[0].benef_factor){
		var obj = obj_bnf_base.refund[0].benef_factor[i];
		lookup_factor_refund += "<option value='"+obj.pass+"'>"+obj.text+"</option>";
	}
	$("#factor_refund_lookup").val(lookup_factor_refund);
	
	var lookup_scope_refund = "";
	for(i in obj_bnf_base.refund[0].benef_scope){
		var obj = obj_bnf_base.refund[0].benef_scope[i];
		lookup_scope_refund += "<option value='"+obj.pass+"'>"+obj.text+"</option>";
	}
	$("#scope_refund_lookup").val(lookup_scope_refund);
	
	var dividend_type_obl = "";	
	for (i in obj_bnf_base.dividend[0].benef_period) {
		var obj = obj_bnf_base.dividend[0].benef_period[i];
		dividend_type_obl += "<option value='"+obj.pass+"'>"+obj.text+"</option>";
	}
	$("#dividend_type_lookup").val(dividend_type_obl);

	
	var lst_insurance_year = "";
	for(i in obj_bnf_base.dividend[0].cov_benef_scope){
		var benef_scope = obj_bnf_base.dividend[0].cov_benef_scope[i];
		lst_insurance_year += "<option value='"+benef_scope.pass+"'>"+benef_scope.text+"</option>";
	}
	$("#insur_year_lookup").val(lst_insurance_year);
	
	var lst_formular_count = "";
	for(i in obj_bnf_base.dividend[0].formula){
		var formular = obj_bnf_base.dividend[0].formula[i];
		lst_formular_count += "<option value='"+formular.pass+"'>"+formular.text+"</option>";
	}
	$("#formula_lookup").val(lst_formular_count);
	
	
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