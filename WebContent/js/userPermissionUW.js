jQuery(document).ready( function() {
	 //
	 var datajson = "";
		datajson = {
		        	method 	: "getUser_Permission",
		        	userID	: $("#empID").val(),
		        	departmentID : $("#departmentID").val()
		}
	 $.ajax({
		    type: "POST",
		    url : "LoginServlet",
		    data: datajson,       
		    success : function(response) {	
		    	//SetUserPermission(response);
		    	var list_permission = [];
		    	var obj = response.User_Permission[0];
		    
				list_permission.push(obj.create);
				list_permission.push(obj.edit_all);
				list_permission.push(obj.edit);
				list_permission.push(obj.download);
				list_permission.push(obj.approve);
		    	
		    	$("#userPermission").val(list_permission);
		    	$("#groupName").val(obj.group_name);
		    	console.log(response);
		    	
		    	SetUserPermissionUW();
		    },
		    error : function(response) {	
		    	console.log("Permission Denied!!")
		    }
		});
 });

function SetUserPermissionUW(){
	//alert($("#userPermission").val());
	var list_permission = $("#userPermission").val();
		list_permission = list_permission.split(",");
	
	var status = $("#cov_statusCL").val();
	//UPDATE, REQUEST_FOR_APPROVE, APPROVED, REJECTED, REQUEST_FOR_UPDATE
	//var status = "UPDATE";
	//var groupName = $("#groupName").val();

	var groupName = "TECH (1720)";
	var permission_create = list_permission[0];
	var permission_edit_all = list_permission[1];
	var permission_edit = list_permission[2];
	var permission_download = list_permission[3];
	var permission_approve = list_permission[4];
	
	var path = window.location.pathname;
	var page = path.split("/").pop();
	
	//alert(page);
	;
	/************Create*************/
	if(groupName != "TECH (1720)"){
		$("#tb_appendixmaster tbody>tr").each(function() {
			$(this).find('td:nth-child(8) input[type="button"]').attr("disabled", true);	
		});
		//btn_add_appendix
		$("#btn_add_appendix").prop("disabled", true);
		$("#form_ageCapitalProtectionTab1 *").addClass("disabledAll_NotFade");
		//$("#form_ageCapitalProtectionTab2 *").addClass("disabledAll_NotFade");
		
		if(page == "setting_checkList.jsp"){
			
			$("#row_user_button").hide();
			$("#row_user_tab2").hide();
			$("#row_super_tab2").hide();
			$("#row_super_button").hide();
			$("#bt_addGroup_checkList").hide(); 
			$("#bt_copy_group").hide(); 
			//id="bt_add_member_exam"
			$("#bt_add_member_exam").hide(); 
			$("#bt_delete_member_exam").hide(); 
			$("#bt_save_member_exam").hide(); 
			
			$("#tb_tab1_checklist tbody>tr").each(function() {
				
				var row_Status = $(this).find('td:nth-child(8) input').val();
				if(row_Status=="รออนุมัติ"||row_Status=="ขอแก้ไข"){
					$(this).find('td:nth-child(1) input[type="checkbox"]').attr("disabled", true);
					$(this).find('td:nth-child(9) input[type="checkbox"]').attr("disabled", true);
				}else{
					$(this).find('td:nth-child(1) input[type="checkbox"]').attr("disabled", true);
					$(this).find('td:nth-child(9) input[type="checkbox"]').attr("disabled", true);
				}
				$(this).find('td:nth-child(9) input[type="checkbox"]').attr("disabled", true);	
			});
			
			$("#tb_mainTab2 tbody>tr").each(function() {
				$(this).find('td:nth-child(1) input').attr("disabled",true)

			})
			$("#tb_modal_checkListNot tbody>tr").each(function() {
				$(this).find('td:nth-child(1) input').attr("disabled",true)

			})
		
		}else if(page == "listAppendix.jsp" ){
			$("#tb_appendixmaster tbody>tr").each(function() {
				$(this).find('td:nth-child(8) input[type="button"]').attr("disabled", true);	
			});
			
			$("#btn_add_appendix").hide(); 
			$("#form_ageCapitalProtectionTab1 *").addClass("disabledAll_NotFade");
			//$("#tb_Capital_byAge *").addClass("disabledAll_NotFade");
			$("#tb_diagnose_description tbody").find("tr").addClass("disabledAll_NotFade");
			//$("#tb_Capital_byAge tbody").find("tr").addClass("disabledAll_NotFade");
			
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
			
			$("#bt_add_sum")	.attr("disabled", true);
			$("#bt_delete_sum")	.attr("disabled", true);
			$("#bt_delete_age")	.attr("disabled", true);
			$("#bt_add_age")	.attr("disabled", true);
			
			$("#tb_manage_appendix tbody>tr").each(function() {
				//if ($(this).find('td:nth-child(1) input').is(':checked')) {
				var row_Status = $(this).find('td:nth-child(11) ').text();
			    
				if(row_Status=="รออนุมัติ"||row_Status=="ขอแก้ไข"){
					$(this).find('td:nth-child(1) input').attr("disabled",false)
					$(this).find('td:nth-child(2) select').attr("disabled", true);
					$(this).find('td:nth-child(3) select').attr("disabled", true);
					$(this).find('td:nth-child(4) select').attr("disabled", true);
					$(this).find('td:nth-child(5) a').attr("disabled",true);
					$(this).find('td:nth-child(8) input').attr("disabled",true);
					$(this).find('td:nth-child(9) input').attr("disabled",true);
				}else if(row_Status=="อนุมัติแล้ว"){
					$(this).find('td:nth-child(1) input').attr("disabled",true)
					$(this).find('td:nth-child(2) select').attr("disabled", true);
					$(this).find('td:nth-child(3) select').attr("disabled", true);
					$(this).find('td:nth-child(4) select').attr("disabled", true);
					$(this).find('td:nth-child(5) a').attr("disabled",true);
					$(this).find('td:nth-child(8) input').attr("disabled",true);
					$(this).find('td:nth-child(9) input').attr("disabled",true);
				}else{
					$(this).find('td:nth-child(1) input')	.attr("disabled",true)
					$(this).find('td:nth-child(2) select')	.attr("disabled", true);
					$(this).find('td:nth-child(3) select')	.attr("disabled", true);
					$(this).find('td:nth-child(4) select')	.attr("disabled", true);
					$(this).find('td:nth-child(5) a')		.attr("disabled",true);
					$(this).find('td:nth-child(8) input')	.attr("disabled",true);
					$(this).find('td:nth-child(9) input')	.attr("disabled",true);
				}
					
					//$(this).find('td:nth-child(6) input').attr("disabled",true);		
				//}
		    })
		    
		    $("#bt_modal_listProduct_save").hide(); 
		    $("#bt_select_all").hide(); 
			
		    $("#row_user_move").hide(); 
			$("#row_super_move").hide(); 
			
			$("#row_user_appendix").hide(); 
			$("#row_super_appendix").hide(); 
			
			$("#appendixValue")			.attr("disabled", true);
			
			$("#appendixValueName")		.attr("disabled", true);
			$("#appendixName")			.attr("disabled", true);
			$("#appendixVersion")		.attr("disabled", true);
			$("#appendixVersionname")	.attr("disabled", true);
			$("#CoverageWarningAmt")	.attr("disabled", true);
			$("#start_date")			.attr("disabled", true);
			$("#end_date")				.attr("disabled", true);
			$("#coverage_capital_val")	.attr("disabled", true);
		
			$("#bt_add_age")		.attr("disabled", true);
			$("#bt_add_sum")		.attr("disabled", true);
			$("#bt1_req_med")		.attr("disabled", true);
			$("#bt1_req_edit_app")	.attr("disabled", true);
			
		}else if(page == "total_capital.jsp" ){
			
			$("#tb_tab1_listAppendix_accum tbody>tr").each(function() {
				$(this).find('td:nth-child(7) select').attr("disabled", true);
				$(this).find('td:nth-child(8) select').attr("disabled", true);
				$(this).find('td:nth-child(9) select').attr("disabled", true);
				$(this).find('td:nth-child(10) select').attr("disabled", true);
			});
			
			$("#tb_tab1_listAppendix_accum tbody>tr").each(function(){
				var row_status=$(this).find("td:nth-child(11) ").text();
				
				if(row_status!="รออนุมัติ"){
					$(this).find('td:nth-child(1) input').attr("disabled", true);
				}
				if(row_status=="รออนุมัติ" || row_status=="ขอแก้ไข"){
					$(this).find('td:nth-child(1) input').attr("disabled", true);
				}
				
			});
			
			$("#tb_tab1_listStatusInsurance tbody>tr").each(function() {
				$(this).find('td:nth-child(4) input').attr("disabled", true);
				$(this).find('td:nth-child(5) input').attr("disabled", true);
				$(this).find('td:nth-child(6) input').attr("disabled", true);
				$(this).find('td:nth-child(7) input').attr("disabled", true);
			});
			
			$("#tb_tab1_listStatusInsurance tbody>tr").each(function(){
				var row_status=$(this).find("td:nth-child(8) ").text();
				//
				if(row_status!="รออนุมัติ"){
					$(this).find('td:nth-child(1) input').attr("disabled", true);
				}
				if(row_status=="รออนุมัติ" || row_status=="ขอแก้ไข"){
					$(this).find('td:nth-child(1) input').attr("disabled", true);
				}
			});
			
			$("#tb_tab1_listStatusInsurance2 tbody>tr").each(function() {
				$(this).find('td:nth-child(4) input').attr("disabled", true);
				$(this).find('td:nth-child(5) input').attr("disabled", true);
				$(this).find('td:nth-child(6) input').attr("disabled", true);
				$(this).find('td:nth-child(7) input').attr("disabled", true);
			});
			
			$("#tb_tab1_listStatusInsurance2 tbody>tr").each(function(){
				var row_status=$(this).find("td:nth-child(8) ").text();
				//
				if(row_status!="รออนุมัติ"){
					$(this).find('td:nth-child(1) input').attr("disabled", true);
				}
				if(row_status=="รออนุมัติ" || row_status=="ขอแก้ไข"){
					$(this).find('td:nth-child(1) input').attr("disabled", true);
				}
			});
			
			
			$("#row_user_accum").hide(); 
			$("#row_super_accum").hide(); 
			
			$("#row_user_tab3_top").hide(); 
			$("#row_super_tab3_top").hide(); 
			
			$("#row_user_tab3_under").hide(); 
			$("#row_super_tab3_under").hide(); 
		}
		
	}else{
//		if(permission_create == "0"){
//			if(page == "base_plan.jsp" || page == "rider_plan.jsp"){
//				$("#bt_CreateInsurance").prop("disabled", true);
//			}else if(page == "product.jsp"){
//				$("#bt_CreateProduct").prop("disabled", true);
//			}
//		}
		;
		/************Edit All*************/
		if(permission_edit_all == "0"){
					
			if(page == "base_plan.jsp"){
				$("#div_main_menuBasic_Info input, #div_main_menuBasic_Info button, #div_main_menuBasic_Info select, #div_main_menuBasic_Info label, #div_main_menuBasic_Info textarea").addClass("disabledAll_NotFade");
				$("#tbl_BI_Mode_CL *, #tbl_BI_FilingCN_CL *, #tbl_BI_AgeCal_CL *, #tb_BasicInformation1 *, #tb_Sperately_Pay *, #tb_BasicInformation_Death *, #tb_BasicInformation_TPD *, #tb_TaxReduce *").addClass("disabledAll_NotFade");
				$("#policy_CL *").addClass("disabledAll_NotFade");
				$("#div_main_menuCL_2 *").addClass("disabledAll_NotFade");
				$("#div_main_menuCL_3 label, #div_main_menuCL_3 input, #div_main_menuCL_3 select, #div_main_menuCL_3 button, #div_main_menuCL_3 span, #tb_PM_Rate1 *, #panel_extraRateCL *, #panel_SARateCL *").addClass("disabledAll_NotFade");
				$("#mainRisk label, #mainRisk input, #mainRisk select, #mainRisk button, #tb_RateValue1 *, #panel_noriskCL *").addClass("disabledAll_NotFade");
				$("#mainBenefit_CL input:checkbox, #tbody_dieL_CL, #tbody_dieR_CL, #die_CL button, #disabled_CL *").addClass("disabledAll_NotFade");
				$("#benefitView_CL").show();
				$("#benefitSubmit_CL").hide();
				$("#approve_CL *").addClass("disabledAll_NotFade");
				$("#div_request_editCL, #div_request_approveCL, #div_approveCL").hide();
				
			}else if(page == "rider_plan.jsp"){

				$("#div_main_menuBasic_Info input, #div_main_menuBasic_Info button, #div_main_menuBasic_Info select, #div_main_menuBasic_Info label, #div_main_menuBasic_Info textarea").addClass("disabledAll_NotFade");
				$("#tbl_BI_Mode_CL *, #tbl_BI_FilingCN_CL *, #tbl_BI_AgeCal_CL *, #tb_BasicInformation1 *, #tb_Sperately_Pay *, #tb_BasicInformation_Death *, #tb_BasicInformation_TPD *, #tb_TaxReduce *").addClass("disabledAll_NotFade");
				$("#policy_CL *").addClass("disabledAll_NotFade");
				$("#div_main_menuCL_8 *").addClass("disabledAll_NotFade");
				$("#div_main_menuCL_3 label, #div_main_menuCL_3 input, #div_main_menuCL_3 select, #div_main_menuCL_3 button, #div_main_menuCL_3 span, #tb_PM_Rate1 *, #panel_extraRateCL *, #panel_SARateCL *").addClass("disabledAll_NotFade");
				$("#mainPolicy label, #mainPolicy input, #mainPolicy select, #mainPolicy button, #tb_RateValue1 *, #panel_noriskCL *").addClass("disabledAll_NotFade");
				$("#mainBenefit_CL input:checkbox, #benefitDetail_CL input, #benefitDetail_CL select, #benefitDetail_CL textarea, #benefitDetail_CL a.open-EditBenefitDialog, #benefitDetail_CL button, #benefitDetail_CL a.open-SelectBenefitDialog").addClass("disabledAll_NotFade");
				$("#benefitView_CL").show();
				$("#benefitSubmit_CL").hide();
				$("#div_main_menuCL_9 *").addClass("disabledAll_NotFade");
				$("#approve_CL *").addClass("disabledAll_NotFade");
				$("#div_request_editCL, #div_request_approveCL, #div_approveCL").hide();
				
			}else if(page == "product.jsp"){
				$("#div_main_menuBasic_Info input, #div_main_menuBasic_Info button, #div_main_menuBasic_Info select, #div_main_menuBasic_Info label, #div_main_menuBasic_Info textarea").addClass("disabledAll_NotFade");
				$("#tb_Additional_contract *, #tb_ageRange_CL *, #tb_COOP_CL *, #tb_COOP_CL_2 *, #tb_COOP_CL_3 *").addClass("disabledAll_NotFade");
				$("#div_main_menuCL_3 input, #div_main_menuCL_3 button, #div_main_menuCL_3 select, #div_main_menuCL_3 label, #tb_Calculate_insurance *").addClass("disabledAll_NotFade");
				$("#div_main_menuCL_2 *").addClass("disabledAll_NotFade");
				$("#benefit_sale_CL *").addClass("disabledAll_NotFade");
				$("#warranty_term_CL input, #warranty_term_CL button, #warranty_term_CL select, #warranty_term_CL label, #warranty_term_CL textarea").addClass("disabledAll_NotFade");
				$("#tbl_increaseCOOP_premium_CL *, #tbl_COOP_masterPolicy_CL *").addClass("disabledAll_NotFade");
				$("#approve_CL *").addClass("disabledAll_NotFade");
				$("#div_request_editCL, #div_request_approveCL, #div_approveCL").hide();
			}
			
			
			/******อนุมัติ*******/
			if(groupName == "PD1" || groupName == "PD2" || groupName == "PD3" || groupName == "PD_Test"){
				if(permission_approve == "0"){
					/*staff*/
					$("#div_request_approveCL").hide();
					$("#div_approveCL").hide();
					$("#div_request_editCL").hide();
					$("#btn_request_approveCL").addClass("disabledAll_NotFade");
					
					$("#comment").val("เมื่อทำการขออนุมัติแล้ว ไม่สามารถแก้ไขรายละเอียดได้ แต่จะแก้ไขรายละเอียดได้ก็ต่อเมื่อแบบประกันนี้ไม่ผ่านการอนุมัติเท่านั้น ดังนั้น กรุณาตรวจสอบรายละเอียดแบบประกันนี้ให้ครบถ้วน โดยการคลิกที่ Tab ข้อมูลต่างๆ เพื่อตรวจสอบข้อมูลและแก้ไขข้อมูลให้ถูกต้องก่อนการขออนุมัติ");
				}
			}else if(groupName == "P03"){
				if(permission_approve == "0"){
					/*staff*/
					$("#div_request_approveCL").hide();
					$("#div_approveCL").hide();
					$("#btn_request_approveCL").addClass("disabledAll_NotFade");
					
					$("#comment").val("เมื่อทำการขออนุมัติแล้ว ไม่สามารถแก้ไขรายละเอียดได้ แต่จะแก้ไขรายละเอียดได้ก็ต่อเมื่อแบบประกันนี้ไม่ผ่านการอนุมัติเท่านั้น ดังนั้น กรุณาตรวจสอบรายละเอียด Policy Wording ของแบบประกันนี้ให้ครบถ้วน");
				}
			}
			
		}else if(permission_edit_all == "1"){
		
			/******อนุมัติ*******/
			//if(groupName == "PD1" || groupName == "PD2" || groupName == "PD3" || groupName == "PD_Test"){
			if(true){
					if(permission_approve == "0"){
						$("#row_user_button").show();
						$("#row_user_tab2").show();
						$("#row_super_tab2").hide();
						$("#row_super_button").hide();
						if(page == "setting_checkList.jsp"){
							
							//$("#row_user_button").hide();
							//$("#row_super_button").show();
							$("#bt_addGroup_checkList").show(); 
							$("#bt_copy_group").show(); 
							
							
							
							
						}else if(page == "listAppendix.jsp" ){
							$("#row_user_move").show(); 
							$("#row_super_move").hide(); 
							
							$("#row_user_appendix").show(); 
							$("#row_super_appendix").hide(); 
							
							$("#bt1_appr_med").hide(); 
							
							$("#tb_manage_appendix tbody>tr").each(function() {
								//if ($(this).find('td:nth-child(1) input').is(':checked')) {
								var row_Status = $(this).find('td:nth-child(11) ').text();
								if(row_Status=="อนุมัติแล้ว"||row_Status=="รออนุมัติ"||row_Status=="ขอแก้ไข"){
									//$(this).find('td:nth-child(1) input').attr("disabled",true)
									$(this).find('td:nth-child(2) select').attr("disabled", true);
									$(this).find('td:nth-child(3) select').attr("disabled", true);
									$(this).find('td:nth-child(4) select').attr("disabled", true);
									$(this).find('td:nth-child(5) a').attr("disabled",true);
									$(this).find('td:nth-child(8) input').attr("disabled",true);
									$(this).find('td:nth-child(9) input').attr("disabled",true);
								}else{
									$(this).find('td:nth-child(1) input').attr("disabled",false)
									$(this).find('td:nth-child(2) select').attr("disabled", false);
									$(this).find('td:nth-child(3) select').attr("disabled", false);
									$(this).find('td:nth-child(4) select').attr("disabled", false);
									$(this).find('td:nth-child(5) a').attr("disabled",false);
									$(this).find('td:nth-child(8) input').attr("disabled",false);
									$(this).find('td:nth-child(9) input').attr("disabled",false);
								}
									
									//$(this).find('td:nth-child(6) input').attr("disabled",true);		
								//}
						    })
							
							
						}else if(page == "total_capital.jsp" ){
							//$("#bt_submit1").attr("disabled",false)
							$("#row_user_accum").show(); 
							$("#row_super_accum").hide(); 
							
							$("#row_user_tab3_top").show(); 
							$("#row_super_tab3_top").hide(); 
							
							$("#row_user_tab3_under").show(); 
							$("#row_super_tab3_under").hide(); 
							
							$("#tb_tab1_listAppendix_accum tbody>tr").each(function(){
								var row_status=$(this).find("td:nth-child(11) ").text();
								//
								if(row_status=="รออนุมัติ"){
									//$(this).find('td:nth-child(1) input').attr("disabled", true);
								}
							});
							
							$("#tb_tab1_listStatusInsurance tbody>tr").each(function(){
								var row_status=$(this).find("td:nth-child(8) ").text();
								//
								if(row_status=="รออนุมัติ"||row_status=="ขอแก้ไข"){
									//$(this).find('td:nth-child(1) input').attr("disabled", true);
								}
							});
							
							$("#tb_tab1_listStatusInsurance2 tbody>tr").each(function(){
								var row_status=$(this).find("td:nth-child(8) ").text();
								//
								if(row_status=="รออนุมัติ"||row_status=="ขอแก้ไข"){
									//$(this).find('td:nth-child(1) input').attr("disabled", true);
								}
							});
							
							
							
						}
						
					/*ขออนุมัติได้*/
					if(status == "UPDATE"){
						$("#div_request_approveCL").show();
						$("#div_approveCL").hide();
						$("#div_request_editCL").hide();
					}else if(status == "REQUEST_FOR_APPROVE"){
						$("#div_request_approveCL").hide();
						$("#div_approveCL").show().addClass("disabledAll");
						$("#div_request_editCL").hide();
					}else if(status == "APPROVED"){
						$("#div_request_approveCL").hide();
						
						setting_page_auth("base_plan.jsp");
						setting_page_auth("rider_plan.jsp");
						setting_page_auth("product.jsp");
						
					}else if(status == "REJECTED"){
						$("#div_request_approveCL").show();
						$("#div_approveCL").hide();
						$("#div_request_editCL").hide();
					}
					
					$("#comment").val("เมื่อทำการขออนุมัติแล้ว ไม่สามารถแก้ไขรายละเอียดได้ แต่จะแก้ไขรายละเอียดได้ก็ต่อเมื่อแบบประกันนี้ไม่ผ่านการอนุมัติเท่านั้น ดังนั้น กรุณาตรวจสอบรายละเอียดแบบประกันนี้ให้ครบถ้วน โดยการคลิกที่ Tab ข้อมูลต่างๆ เพื่อตรวจสอบข้อมูลและแก้ไขข้อมูลให้ถูกต้องก่อนการขออนุมัติ");
				
				}else if(permission_approve == "1"){
					
					if(page == "setting_checkList.jsp"){
					
						$("#row_user_button").hide();
						$("#row_user_tab2").hide();
						$("#row_super_tab2").show();
						$("#row_super_button").show();
						$("#bt_addGroup_checkList").hide(); 
						$("#bt_copy_group").hide(); 
						//id="bt_add_member_exam"
						$("#bt_add_member_exam").hide(); 
						$("#bt_delete_member_exam").hide(); 
						$("#bt_save_member_exam").hide(); 
						
						$("#tb_tab1_checklist tbody>tr").each(function() {
							
							var row_Status = $(this).find('td:nth-child(8) input').val();
							if(row_Status=="รออนุมัติ"||row_Status=="ขอแก้ไข"){
								$(this).find('td:nth-child(1) input[type="checkbox"]').attr("disabled", false);
								$(this).find('td:nth-child(9) input[type="checkbox"]').attr("disabled", false);
							}else{
								$(this).find('td:nth-child(1) input[type="checkbox"]').attr("disabled", true);
								$(this).find('td:nth-child(9) input[type="checkbox"]').attr("disabled", true);
							}
							$(this).find('td:nth-child(9) input[type="checkbox"]').attr("disabled", true);	
						});
						
						$("#tb_mainTab2 tbody>tr").each(function() {
							$(this).find('td:nth-child(1) input').attr("disabled",true)

						})
						$("#tb_modal_checkListNot tbody>tr").each(function() {
							$(this).find('td:nth-child(1) input').attr("disabled",true)

						})
					
					}else if(page == "listAppendix.jsp" ){
						$("#tb_appendixmaster tbody>tr").each(function() {
							$(this).find('td:nth-child(8) input[type="button"]').attr("disabled", true);	
						});
						
						$("#btn_add_appendix").hide(); 
						$("#form_ageCapitalProtectionTab1 *").addClass("disabledAll_NotFade");
						//$("#tb_Capital_byAge *").addClass("disabledAll_NotFade");
						$("#tb_diagnose_description tbody").find("tr").addClass("disabledAll_NotFade");
						//$("#tb_Capital_byAge tbody").find("tr").addClass("disabledAll_NotFade");
						var cap_age_row_length =$("#tb_Capital_byAge tbody>tr").length;
						var cap_age_column_length ;//=$("#tb_Capital_byAge tbody").columnCount();
						
						$("#tb_Capital_byAge tbody tr").each(function(){
						      cap_age_column_length = 0
						      $(this).children("td").each(function(){
						    	  cap_age_column_length++;
						      }); // next td
						}); // next tr
						///debugger;
						for(var i = 1 ;i<=cap_age_row_length;i++){
							for(var j = 1 ;j<=cap_age_column_length;j++){
								$("#bt_coverage_byAge"+(Number(j)) +"_"+(Number(i)) ).attr("disabled",true);
							}
						}
						
						$("#bt_add_sum").attr("disabled", true);
						$("#bt_delete_sum").attr("disabled", true);
						$("#bt_delete_age").attr("disabled", true);
						$("#bt_add_age").attr("disabled", true);
						
						$("#tb_manage_appendix tbody>tr").each(function() {
							//if ($(this).find('td:nth-child(1) input').is(':checked')) {
							var row_Status = $(this).find('td:nth-child(11) ').text();
						    
							if(row_Status=="รออนุมัติ"||row_Status=="ขอแก้ไข"){
								$(this).find('td:nth-child(1) input').attr("disabled",false)
								$(this).find('td:nth-child(2) select').attr("disabled", true);
								$(this).find('td:nth-child(3) select').attr("disabled", true);
								$(this).find('td:nth-child(4) select').attr("disabled", true);
								$(this).find('td:nth-child(5) a').attr("disabled",true);
								$(this).find('td:nth-child(8) input').attr("disabled",true);
								$(this).find('td:nth-child(9) input').attr("disabled",true);
							}else if(row_Status=="อนุมัติแล้ว"){
								$(this).find('td:nth-child(1) input').attr("disabled",true)
								$(this).find('td:nth-child(2) select').attr("disabled", true);
								$(this).find('td:nth-child(3) select').attr("disabled", true);
								$(this).find('td:nth-child(4) select').attr("disabled", true);
								$(this).find('td:nth-child(5) a').attr("disabled",true);
								$(this).find('td:nth-child(8) input').attr("disabled",true);
								$(this).find('td:nth-child(9) input').attr("disabled",true);
							}else{
								$(this).find('td:nth-child(1) input')	.attr("disabled",true)
								$(this).find('td:nth-child(2) select')	.attr("disabled", true);
								$(this).find('td:nth-child(3) select')	.attr("disabled", true);
								$(this).find('td:nth-child(4) select')	.attr("disabled", true);
								$(this).find('td:nth-child(5) a')		.attr("disabled",true);
								$(this).find('td:nth-child(8) input')	.attr("disabled",true);
								$(this).find('td:nth-child(9) input')	.attr("disabled",true);
							}
								
								//$(this).find('td:nth-child(6) input').attr("disabled",true);		
							//}
					    })
					    
					    $("#bt_modal_listProduct_save").hide(); 
					    $("#bt_select_all").hide(); 
						
					    $("#row_user_move").hide(); 
						$("#row_super_move").show(); 
						
						$("#row_user_appendix").hide(); 
						$("#row_super_appendix").show(); 
						
						$("#appendixValue")			.attr("disabled", true);
						
						$("#appendixValueName")		.attr("disabled", true);
						$("#appendixName")			.attr("disabled", true);
						$("#appendixVersion")		.attr("disabled", true);
						$("#appendixVersionname")	.attr("disabled", true);
						$("#CoverageWarningAmt")	.attr("disabled", true);
						$("#start_date")			.attr("disabled", true);
						$("#end_date")				.attr("disabled", true);
						$("#coverage_capital_val")	.attr("disabled", true);
					
						$("#bt_add_age")		.attr("disabled", true);
						$("#bt_add_sum")		.attr("disabled", true);
						$("#bt1_req_med")		.attr("disabled", true);
						$("#bt1_req_edit_app")	.attr("disabled", false);
						
					}else if(page == "total_capital.jsp" ){
						
						$("#tb_tab1_listAppendix_accum tbody>tr").each(function() {
							$(this).find('td:nth-child(7) select').attr("disabled", true);
							$(this).find('td:nth-child(8) select').attr("disabled", true);
							$(this).find('td:nth-child(9) select').attr("disabled", true);
							$(this).find('td:nth-child(10) select').attr("disabled", true);
						});
						
						$("#tb_tab1_listAppendix_accum tbody>tr").each(function(){
							var row_status=$(this).find("td:nth-child(11) ").text();
							
							if(row_status!="รออนุมัติ"){
								$(this).find('td:nth-child(1) input').attr("disabled", true);
							}
							if(row_status=="รออนุมัติ" || row_status=="ขอแก้ไข"){
								$(this).find('td:nth-child(1) input').attr("disabled", false);
							}
							
						});
						
						$("#tb_tab1_listStatusInsurance tbody>tr").each(function() {
							$(this).find('td:nth-child(4) input').attr("disabled", true);
							$(this).find('td:nth-child(5) input').attr("disabled", true);
							$(this).find('td:nth-child(6) input').attr("disabled", true);
							$(this).find('td:nth-child(7) input').attr("disabled", true);
						});
						
						$("#tb_tab1_listStatusInsurance tbody>tr").each(function(){
							var row_status=$(this).find("td:nth-child(8) ").text();
							//
							if(row_status!="รออนุมัติ"){
								$(this).find('td:nth-child(1) input').attr("disabled", true);
							}
							if(row_status=="รออนุมัติ" || row_status=="ขอแก้ไข"){
								$(this).find('td:nth-child(1) input').attr("disabled", false);
							}
						});
						
						$("#tb_tab1_listStatusInsurance2 tbody>tr").each(function() {
							$(this).find('td:nth-child(4) input').attr("disabled", true);
							$(this).find('td:nth-child(5) input').attr("disabled", true);
							$(this).find('td:nth-child(6) input').attr("disabled", true);
							$(this).find('td:nth-child(7) input').attr("disabled", true);
						});
						
						$("#tb_tab1_listStatusInsurance2 tbody>tr").each(function(){
							var row_status=$(this).find("td:nth-child(8) ").text();
							//
							if(row_status!="รออนุมัติ"){
								$(this).find('td:nth-child(1) input').attr("disabled", true);
							}
							if(row_status=="รออนุมัติ" || row_status=="ขอแก้ไข"){
								$(this).find('td:nth-child(1) input').attr("disabled", false);
							}
						});
						
						
						$("#row_user_accum").hide(); 
						$("#row_super_accum").show(); 
						
						$("#row_user_tab3_top").hide(); 
						$("#row_super_tab3_top").show(); 
						
						$("#row_user_tab3_under").hide(); 
						$("#row_super_tab3_under").show(); 
					}
					/*อนุมัติได้*/
					if(status == "APPROVED"){

//						setting_page_auth("base_plan.jsp");
//						setting_page_auth("rider_plan.jsp");
//						setting_page_auth("product.jsp");
//						
//						/*ขอแก้ไข*/
//						$("#div_request_editCL").show();
//						$("#div_request_approveCL, #div_approveCL").hide();
					}else if(status == "UPDATE"){
//						$("#div_request_approveCL").hide();
//						$("#div_approveCL").show();
//						$("#div_request_editCL").hide();
					}else if(status == "REQUEST_FOR_APPROVE"){
//						$("#div_request_approveCL").hide();
//						$("#div_approveCL").show();
//						$("#div_request_editCL").hide();
					}else if(status == "REJECTED"){
//						$("#div_request_approveCL").hide();
//						$("#div_approveCL").show();
//						$("#div_request_editCL").hide();
					}
					
					$("#comment").val("กรุณาตรวจสอบรายละเอียดนี้ให้ครบถ้วน โดยการคลิกที่ Tab ข้อมูลต่างๆ เพื่อตรวจสอบข้อมูลก่อนการอนุมัติ");
				}
			}else if(groupName == "P03"){
				if(permission_approve == "0"){
					
					/*ขออนุมัติได้*/
					if(status == "UPDATE"){
						$("#div_request_approveCL").show();
						$("#div_approveCL").hide();
						$("#div_request_editCL").hide();
						$("#div_policyStatus_CL").hide();
					}else if(status == "APPROVED"){
						$("#div_request_approveCL").hide();
						
						setting_page_auth("base_plan.jsp");
						setting_page_auth("rider_plan.jsp");
						setting_page_auth("product.jsp");
						
						if(page == "base_plan.jsp"){
							$("#div_policyStatus_CL").hide();
						}else if(page == "rider_plan.jsp"){
							$("#div_policyStatus_CL").hide();	
						}
						
						/*ขอแก้ไข*/
						$("#div_request_editCL").show();
						$("#div_request_approveCL, #div_approveCL").hide();
						
					}
					
					$("#comment").val("เมื่อทำการขออนุมัติแล้ว ไม่สามารถแก้ไขรายละเอียดได้ แต่จะแก้ไขรายละเอียดได้ก็ต่อเมื่อแบบประกันนี้ไม่ผ่านการอนุมัติเท่านั้น ดังนั้น กรุณาตรวจสอบรายละเอียด Policy Wording ของแบบประกันนี้ให้ครบถ้วน");
				
				}else if(permission_approve == "1"){
					/*อนุมัติได้*/
					
					if(status == "APPROVED"){
						
						setting_page_auth("base_plan.jsp");
						setting_page_auth("rider_plan.jsp");
						setting_page_auth("product.jsp");
						
						if(page == "base_plan.jsp"){
							$("#div_policyStatus_CL").hide();
						}else if(page == "rider_plan.jsp"){
							$("#div_policyStatus_CL").hide();	
						}
						
						/*ขอแก้ไข*/
						$("#div_request_editCL").show();
						$("#div_request_approveCL, #div_approveCL").hide();
						$("#div_policyStatus_CL").hide();
						
					}else if(status == "UPDATE"){					
						$("#div_request_approveCL").hide();
						$("#div_approveCL").show();
						$("#div_request_editCL").hide();
						$("#div_policyStatus_CL").hide();
					}
					
					$("#comment").val("กรุณาตรวจสอบรายละเอียด Policy Wording ของแบบประกันนี้ให้ครบถ้วน เพื่อตรวจสอบข้อมูลก่อนการอนุมัติ");
				}
			}
		}
	}
	
	
	
}
function SetUserPermissionUW_Modal(){
	
	//alert($("#userPermission").val());
	var list_permission = $("#userPermission").val();
		list_permission = list_permission.split(",");
	
	var status = $("#cov_statusCL").val();
	//UPDATE, REQUEST_FOR_APPROVE, APPROVED, REJECTED, REQUEST_FOR_UPDATE
	//var status = "UPDATE";
	//var groupName = $("#groupName").val();

	var groupName = "TECH (1720)";
	var permission_create = list_permission[0];
	var permission_edit_all = list_permission[1];
	var permission_edit = list_permission[2];
	var permission_download = list_permission[3];
	var permission_approve = list_permission[4];
	
	var path = window.location.pathname;
	var page = path.split("/").pop();
	
	//alert(page);
	/************Create*************/
	if(groupName != "TECH (1720)"){
		$("#tb_appendixmaster tbody>tr").each(function() {
			$(this).find('td:nth-child(8) input[type="button"]').attr("disabled", true);	
		});
		//btn_add_appendix
		$("#btn_add_appendix").prop("disabled", true);
		$("#form_ageCapitalProtectionTab1 *").addClass("disabledAll_NotFade");
		//$("#form_ageCapitalProtectionTab2 *").addClass("disabledAll_NotFade");
		
	}else{
//		if(permission_create == "0"){
//			if(page == "base_plan.jsp" || page == "rider_plan.jsp"){
//				$("#bt_CreateInsurance").prop("disabled", true);
//			}else if(page == "product.jsp"){
//				$("#bt_CreateProduct").prop("disabled", true);
//			}
//		}
		
		/************Edit All*************/
		if(permission_edit_all == "0"){
					
			if(page == "base_plan.jsp"){
				
				
			}else if(page == "rider_plan.jsp"){

				
				
			}else if(page == "product.jsp"){
				
			}
			
			
			/******อนุมัติ*******/
			if(groupName == "PD1" || groupName == "PD2" || groupName == "PD3" || groupName == "PD_Test"){
				if(permission_approve == "0"){
					/*staff*/
					$("#div_request_approveCL").hide();
					$("#div_approveCL").hide();
					$("#div_request_editCL").hide();
					$("#btn_request_approveCL").addClass("disabledAll_NotFade");
					
					$("#comment").val("เมื่อทำการขออนุมัติแล้ว ไม่สามารถแก้ไขรายละเอียดได้ แต่จะแก้ไขรายละเอียดได้ก็ต่อเมื่อแบบประกันนี้ไม่ผ่านการอนุมัติเท่านั้น ดังนั้น กรุณาตรวจสอบรายละเอียดแบบประกันนี้ให้ครบถ้วน โดยการคลิกที่ Tab ข้อมูลต่างๆ เพื่อตรวจสอบข้อมูลและแก้ไขข้อมูลให้ถูกต้องก่อนการขออนุมัติ");
				}
			}else if(groupName == "P03"){
				if(permission_approve == "0"){
					/*staff*/
					$("#div_request_approveCL").hide();
					$("#div_approveCL").hide();
					$("#btn_request_approveCL").addClass("disabledAll_NotFade");
					
					$("#comment").val("เมื่อทำการขออนุมัติแล้ว ไม่สามารถแก้ไขรายละเอียดได้ แต่จะแก้ไขรายละเอียดได้ก็ต่อเมื่อแบบประกันนี้ไม่ผ่านการอนุมัติเท่านั้น ดังนั้น กรุณาตรวจสอบรายละเอียด Policy Wording ของแบบประกันนี้ให้ครบถ้วน");
				}
			}
			
		}else if(permission_edit_all == "1"){
		
			/******อนุมัติ*******/
			//if(groupName == "PD1" || groupName == "PD2" || groupName == "PD3" || groupName == "PD_Test"){
			if(true){
					if(permission_approve == "0"){
						
						
						if(page == "setting_checkList.jsp"){
							
							//$("#row_user_button").hide();
							//$("#row_super_button").show();
							$("#bt_addGroup_checkList").show(); 
							$("#bt_copy_group").show(); 
							
							
						}else if(page == "listAppendix.jsp" ){
							
							
							
						}else if(page == "total_capital.jsp" ){
							//$("#bt_submit1").attr("disabled",false)
							$("#row_user_accum").show(); 
							$("#row_super_accum").hide(); 
							
							$("#row_user_tab3_top").show(); 
							$("#row_super_tab3_top").hide(); 
							
							$("#row_user_tab3_under").show(); 
							$("#row_super_tab3_under").hide(); 
							
							
							
							$("#tb_tab1_listAppendix_accum tbody>tr").each(function(){
								var row_status=$(this).find("td:nth-child(11) ").text();
								//
								if(row_status=="รออนุมัติ"){
									$(this).find('td:nth-child(1) input').attr("disabled", true);
								}
							});
							
							$("#tb_tab1_listStatusInsurance tbody>tr").each(function(){
								var row_status=$(this).find("td:nth-child(8) ").text();
								//
								if(row_status=="รออนุมัติ"||row_status=="ขอแก้ไข"){
									$(this).find('td:nth-child(1) input').attr("disabled", true);
								}
							});
							
							$("#tb_tab1_listStatusInsurance2 tbody>tr").each(function(){
								var row_status=$(this).find("td:nth-child(8) ").text();
								//
								if(row_status=="รออนุมัติ"||row_status=="ขอแก้ไข"){
									$(this).find('td:nth-child(1) input').attr("disabled", true);
								}
							});
							
							
							
						}
						
					/*ขออนุมัติได้*/
					if(status == "UPDATE"){
						$("#div_request_approveCL").show();
						$("#div_approveCL").hide();
						$("#div_request_editCL").hide();
					}else if(status == "REQUEST_FOR_APPROVE"){
						$("#div_request_approveCL").hide();
						$("#div_approveCL").show().addClass("disabledAll");
						$("#div_request_editCL").hide();
					}else if(status == "APPROVED"){
						$("#div_request_approveCL").hide();
						
						setting_page_auth("base_plan.jsp");
						setting_page_auth("rider_plan.jsp");
						setting_page_auth("product.jsp");
						
					}else if(status == "REJECTED"){
						$("#div_request_approveCL").show();
						$("#div_approveCL").hide();
						$("#div_request_editCL").hide();
					}
					
					$("#comment").val("เมื่อทำการขออนุมัติแล้ว ไม่สามารถแก้ไขรายละเอียดได้ แต่จะแก้ไขรายละเอียดได้ก็ต่อเมื่อแบบประกันนี้ไม่ผ่านการอนุมัติเท่านั้น ดังนั้น กรุณาตรวจสอบรายละเอียดแบบประกันนี้ให้ครบถ้วน โดยการคลิกที่ Tab ข้อมูลต่างๆ เพื่อตรวจสอบข้อมูลและแก้ไขข้อมูลให้ถูกต้องก่อนการขออนุมัติ");
				
				}else if(permission_approve == "1"){
					
					if(page == "setting_checkList.jsp"){
					
						$("#row_user_button").hide();
						$("#row_user_tab2").hide();
						$("#row_super_tab2").show();
						$("#row_super_button").show();
						$("#bt_addGroup_checkList").hide(); 
						$("#bt_copy_group").hide(); 
						//id="bt_add_member_exam"
						$("#bt_add_member_exam").hide(); 
						$("#bt_delete_member_exam").hide(); 
						$("#bt_save_member_exam").hide(); 
						
						$("#tb_tab1_checklist tbody>tr").each(function() {
							
							var row_Status = $(this).find('td:nth-child(8) input').val();
							if(row_Status=="รออนุมัติ"||row_Status=="ขอแก้ไข"){
								$(this).find('td:nth-child(1) input[type="checkbox"]').attr("disabled", false);
								$(this).find('td:nth-child(9) input[type="checkbox"]').attr("disabled", false);
							}else{
								$(this).find('td:nth-child(1) input[type="checkbox"]').attr("disabled", true);
								$(this).find('td:nth-child(9) input[type="checkbox"]').attr("disabled", true);
							}
								
						});
						
					
					}else if(page == "listAppendix.jsp" ){
						$("#bt_choose_Appendix_To").attr("disabled", true);
						
						var row_Status;
						$("#tb_manage_appendix tbody>tr").each(function() {
							if ($(this).find('td:nth-child(1) input').is(':checked')) {
								
								row_Status = $(this).find('td:nth-child(11) ').text();
							}
						})
						
						$("#tb_product_related  tbody>tr").each(function(i) {
							
							if ($(this).find('td:nth-child(1) input').is(':checked')) {
								$(this).find('td:nth-child(1) input').attr("disabled", true);
							}else{
								$("#tb_product_related>tbody>tr").eq(i).addClass("hide");
							}
							
							if(row_Status=="ไม่อนุมัติแล้ว"){
								
								$("#bt_choose_Appendix_To").attr("disabled",true);

							}
							
								//$(this).find('td:nth-child(6) input').attr("disabled",true);		
							//}
					    })
					}else if(page == "total_capital.jsp" ){
						
						$("#tb_tab1_listAppendix_accum tbody>tr").each(function() {
							$(this).find('td:nth-child(7) select').attr("disabled", true);
							$(this).find('td:nth-child(8) select').attr("disabled", true);
							$(this).find('td:nth-child(9) select').attr("disabled", true);
							$(this).find('td:nth-child(10) select').attr("disabled", true);
						});
						
						$("#tb_tab1_listAppendix_accum tbody>tr").each(function(){
							var row_status=$(this).find("td:nth-child(11) ").text();
							
							if(row_status!="รออนุมัติ"){
								$(this).find('td:nth-child(1) input').attr("disabled", true);
							}
							if(row_status=="รออนุมัติ" || row_status=="ขอแก้ไข"){
								$(this).find('td:nth-child(1) input').attr("disabled", false);
							}
							
						});
						
						$("#tb_tab1_listStatusInsurance tbody>tr").each(function() {
							$(this).find('td:nth-child(4) input').attr("disabled", true);
							$(this).find('td:nth-child(5) input').attr("disabled", true);
							$(this).find('td:nth-child(6) input').attr("disabled", true);
							$(this).find('td:nth-child(7) input').attr("disabled", true);
						});
						
						$("#tb_tab1_listStatusInsurance tbody>tr").each(function(){
							var row_status=$(this).find("td:nth-child(8) ").text();
							//
							if(row_status!="รออนุมัติ"){
								$(this).find('td:nth-child(1) input').attr("disabled", true);
							}
							if(row_status=="รออนุมัติ" || row_status=="ขอแก้ไข"){
								$(this).find('td:nth-child(1) input').attr("disabled", false);
							}
						});
						
						$("#tb_tab1_listStatusInsurance2 tbody>tr").each(function() {
							$(this).find('td:nth-child(4) input').attr("disabled", true);
							$(this).find('td:nth-child(5) input').attr("disabled", true);
							$(this).find('td:nth-child(6) input').attr("disabled", true);
							$(this).find('td:nth-child(7) input').attr("disabled", true);
						});
						
						$("#tb_tab1_listStatusInsurance2 tbody>tr").each(function(){
							var row_status=$(this).find("td:nth-child(8) ").text();
							//
							if(row_status!="รออนุมัติ"){
								$(this).find('td:nth-child(1) input').attr("disabled", true);
							}
							if(row_status=="รออนุมัติ" || row_status=="ขอแก้ไข"){
								$(this).find('td:nth-child(1) input').attr("disabled", false);
							}
						});
						
						
						$("#row_user_accum").hide(); 
						$("#row_super_accum").show(); 
						
						$("#row_user_tab3_top").hide(); 
						$("#row_super_tab3_top").show(); 
						
						$("#row_user_tab3_under").hide(); 
						$("#row_super_tab3_under").show(); 
					}
					/*อนุมัติได้*/
					if(status == "APPROVED"){

//						setting_page_auth("base_plan.jsp");
//						setting_page_auth("rider_plan.jsp");
//						setting_page_auth("product.jsp");
//						
//						/*ขอแก้ไข*/
//						$("#div_request_editCL").show();
//						$("#div_request_approveCL, #div_approveCL").hide();
					}else if(status == "UPDATE"){
//						$("#div_request_approveCL").hide();
//						$("#div_approveCL").show();
//						$("#div_request_editCL").hide();
					}else if(status == "REQUEST_FOR_APPROVE"){
//						$("#div_request_approveCL").hide();
//						$("#div_approveCL").show();
//						$("#div_request_editCL").hide();
					}else if(status == "REJECTED"){
//						$("#div_request_approveCL").hide();
//						$("#div_approveCL").show();
//						$("#div_request_editCL").hide();
					}
					
					$("#comment").val("กรุณาตรวจสอบรายละเอียดนี้ให้ครบถ้วน โดยการคลิกที่ Tab ข้อมูลต่างๆ เพื่อตรวจสอบข้อมูลก่อนการอนุมัติ");
				}
			}else if(groupName == "P03"){
				if(permission_approve == "0"){
					
					/*ขออนุมัติได้*/
					if(status == "UPDATE"){
						$("#div_request_approveCL").show();
						$("#div_approveCL").hide();
						$("#div_request_editCL").hide();
						$("#div_policyStatus_CL").hide();
					}else if(status == "APPROVED"){
						$("#div_request_approveCL").hide();
						
						setting_page_auth("base_plan.jsp");
						setting_page_auth("rider_plan.jsp");
						setting_page_auth("product.jsp");
						
						if(page == "base_plan.jsp"){
							$("#div_policyStatus_CL").hide();
						}else if(page == "rider_plan.jsp"){
							$("#div_policyStatus_CL").hide();	
						}
						
						/*ขอแก้ไข*/
						$("#div_request_editCL").show();
						$("#div_request_approveCL, #div_approveCL").hide();
						
					}
					
					$("#comment").val("เมื่อทำการขออนุมัติแล้ว ไม่สามารถแก้ไขรายละเอียดได้ แต่จะแก้ไขรายละเอียดได้ก็ต่อเมื่อแบบประกันนี้ไม่ผ่านการอนุมัติเท่านั้น ดังนั้น กรุณาตรวจสอบรายละเอียด Policy Wording ของแบบประกันนี้ให้ครบถ้วน");
				
				}else if(permission_approve == "1"){
					/*อนุมัติได้*/
					
					if(status == "APPROVED"){
						
						setting_page_auth("base_plan.jsp");
						setting_page_auth("rider_plan.jsp");
						setting_page_auth("product.jsp");
						
						if(page == "base_plan.jsp"){
							$("#div_policyStatus_CL").hide();
						}else if(page == "rider_plan.jsp"){
							$("#div_policyStatus_CL").hide();	
						}
						
						/*ขอแก้ไข*/
						$("#div_request_editCL").show();
						$("#div_request_approveCL, #div_approveCL").hide();
						$("#div_policyStatus_CL").hide();
						
					}else if(status == "UPDATE"){					
						$("#div_request_approveCL").hide();
						$("#div_approveCL").show();
						$("#div_request_editCL").hide();
						$("#div_policyStatus_CL").hide();
					}
					
					$("#comment").val("กรุณาตรวจสอบรายละเอียด Policy Wording ของแบบประกันนี้ให้ครบถ้วน เพื่อตรวจสอบข้อมูลก่อนการอนุมัติ");
				}
			}
		}
	}
	
	
	
}
function setting_page_auth(page){
	if(page == "base_plan.jsp"){
		$("#div_main_menuBasic_Info input, #div_main_menuBasic_Info button, #div_main_menuBasic_Info select, #div_main_menuBasic_Info label, #div_main_menuBasic_Info textarea").addClass("disabledAll_NotFade");
		$("#tbl_BI_Mode_CL *, #tbl_BI_FilingCN_CL *, #tbl_BI_AgeCal_CL *, #tb_BasicInformation1 *, #tb_Sperately_Pay *, #tb_BasicInformation_Death *, #tb_BasicInformation_TPD *, #tb_TaxReduce *").addClass("disabledAll_NotFade");
		$("#policy_CL *").addClass("disabledAll_NotFade");
		$("#div_main_menuCL_2 *").addClass("disabledAll_NotFade");
		$("#div_main_menuCL_3 label, #div_main_menuCL_3 input, #div_main_menuCL_3 select, #div_main_menuCL_3 button, #div_main_menuCL_3 span, #tb_PM_Rate1 *, #panel_extraRateCL *, #panel_SARateCL *").addClass("disabledAll_NotFade");
		$("#mainRisk label, #mainRisk input, #mainRisk select, #mainRisk button, #tb_RateValue1 *, #panel_noriskCL *").addClass("disabledAll_NotFade");
		$("#mainBenefit_CL input:checkbox, #tbody_dieL_CL, #tbody_dieR_CL, #die_CL button, #disabled_CL *").addClass("disabledAll_NotFade");
		$("#benefitView_CL").show();
		$("#benefitSubmit_CL").hide();

	}else if(page == "rider_plan.jsp"){

		$("#div_main_menuBasic_Info input, #div_main_menuBasic_Info button, #div_main_menuBasic_Info select, #div_main_menuBasic_Info label, #div_main_menuBasic_Info textarea").addClass("disabledAll_NotFade");
		$("#tbl_BI_Mode_CL *, #tbl_BI_FilingCN_CL *, #tbl_BI_AgeCal_CL *, #tb_BasicInformation1 *, #tb_Sperately_Pay *, #tb_BasicInformation_Death *, #tb_BasicInformation_TPD *, #tb_TaxReduce *").addClass("disabledAll_NotFade");
		$("#policy_CL *").addClass("disabledAll_NotFade");
		$("#div_main_menuCL_8 *").addClass("disabledAll_NotFade");
		$("#div_main_menuCL_3 label, #div_main_menuCL_3 input, #div_main_menuCL_3 select, #div_main_menuCL_3 button, #div_main_menuCL_3 span, #tb_PM_Rate1 *, #panel_extraRateCL *, #panel_SARateCL *").addClass("disabledAll_NotFade");
		$("#mainPolicy label, #mainPolicy input, #mainPolicy select, #mainPolicy button, #tb_RateValue1 *, #panel_noriskCL *").addClass("disabledAll_NotFade");
		$("#mainBenefit_CL input:checkbox, #benefitDetail_CL input, #benefitDetail_CL select, #benefitDetail_CL textarea, #benefitDetail_CL a.open-EditBenefitDialog, #benefitDetail_CL button, #benefitDetail_CL a.open-SelectBenefitDialog").addClass("disabledAll_NotFade");
		$("#benefitView_CL").show();
		$("#benefitSubmit_CL").hide();
		$("#div_main_menuCL_9 *").addClass("disabledAll_NotFade");
		
	}else if(page == "product.jsp"){
		$("#div_main_menuBasic_Info input, #div_main_menuBasic_Info button, #div_main_menuBasic_Info select, #div_main_menuBasic_Info label, #div_main_menuBasic_Info textarea").addClass("disabledAll_NotFade");
		$("#tb_Additional_contract *, #tb_ageRange_CL *, #tb_COOP_CL *, #tb_COOP_CL_2 *, #tb_COOP_CL_3 *").addClass("disabledAll_NotFade");
		$("#div_main_menuCL_3 input, #div_main_menuCL_3 button, #div_main_menuCL_3 select, #div_main_menuCL_3 label, #tb_Calculate_insurance *").addClass("disabledAll_NotFade");
		$("#div_main_menuCL_2 *").addClass("disabledAll_NotFade");
		$("#benefit_sale_CL *").addClass("disabledAll_NotFade");
		$("#warranty_term_CL input, #warranty_term_CL button, #warranty_term_CL select, #warranty_term_CL label, #warranty_term_CL textarea").addClass("disabledAll_NotFade");
		$("#tbl_increaseCOOP_premium_CL *, #tbl_COOP_masterPolicy_CL *").addClass("disabledAll_NotFade");
	}
}

