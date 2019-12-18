jQuery(document).ready( function() {
	 //debugger;
	
	$("#modal_warning_login").modal({ show:false, backdrop:'static'});
	$("#modal_waiting").modal({ show:false, backdrop:'static'});
	
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
		    	//$("#groupName").val("");

		    	var group_name = $("#groupName").val();
		    	if(group_name != ""){
		    		SetUserPermission();
		    	}else{
		    		message = "เกิดความผิดพลาดในการเชื่อมต่อ กรุณาทำการเข้าสู่ระบบอีกครั้ง";
		    		alertError_Login(message);
		    		
		    		$("#modal_warning_login .modal-body button.close").click(function(){
		    			window.location.href = 'login.jsp';
		    		});
		    		
		    	}
		    	
		    	console.log(response);
		    },
		    error : function(response) {	
		    	console.log("Permission Denied!!")
		    }
		});
 });

function SetUserPermission(){
	//alert($("#userPermission").val());
	var list_permission = $("#userPermission").val();
		list_permission = list_permission.split(",");
	
	var status = $("#cov_status").val();
	//UPDATE, REQUEST_FOR_APPROVE, APPROVED, REJECTED, REQUEST_FOR_UPDATE
	//var status = "UPDATE_POC";
	var status_RP = "";
	var status_PD = "";
	
	if($("#cov_status_RP").val() != ""){
		status_RP = $("#cov_status_RP").val();
	}else{
		status_RP = "NEW";
	}
		
	if($("#cov_status_PD").val() != ""){
		status_PD = $("#cov_status_PD").val();
	}else{
		status_PD = "NEW";
	}
	
	var groupName = $("#groupName").val();
	//POC (1740)
	//var groupName = "PD_Test";
	var permission_create = list_permission[0];
	var permission_edit_all = list_permission[1];
	var permission_edit = list_permission[2];
	var permission_download = list_permission[3];
	var permission_approve = list_permission[4];
	
	var path = window.location.pathname;
	var page = path.split("/").pop();
	
	//alert(page);
	/************Create*************/
	if(permission_create == "0"){
		if(page == "base_plan.jsp" || page == "rider_plan.jsp"){
			$("#bt_CreateInsurance").prop("disabled", true);
		}else if(page == "product.jsp" || page == "product_rider.jsp"){
			$("#bt_CreateProduct").prop("disabled", true);
		}
	}
	
	/************Edit All*************/
	
	
	/*policy wording status*/
	if(status_RP == "NEW"){
		$("#status_policy").val("สร้างใหม่");
		$("#status_policy_OL").val("สร้างใหม่");
		
	}else if(status_RP == "UPDATE"){
		$("#status_policy").val("แก้ไข");
		$("#status_policy_OL").val("แก้ไข");
		
	}else if(status_RP == "REQUEST_FOR_APPROVE"){
		$("#status_policy").val("ขออนุมัติ");
		$("#status_policy_OL").val("ขออนุมัติ");
		
	}else if(status_RP == "APPROVED"){
		$("#status_policy").val("อนุมัติ");
		$("#status_policy_OL").val("อนุมัติ");
		
	}else if(status_RP == "REJECTED"){
		$("#status_policy").val("ไม่อนุมัติ");
		$("#status_policy_OL").val("ไม่อนุมัติ");
		
	}else if(status_RP == "REQUEST_UPDATE"){
		$("#status_policy").val("ขอแก้ไข");
		$("#status_policy_OL").val("ขอแก้ไข");
		
	}
	
	/*PD Status*/
	if(status_PD == "NEW"){
		$("#status_policy").val("สร้างใหม่");
		$("#status_policy_OL").val("สร้างใหม่");
		
	}else if(status_PD == "UPDATE"){
		$("#status_policy").val("แก้ไข");
		$("#status_policy_OL").val("แก้ไข");
		
	}else if(status_PD == "REQUEST_FOR_APPROVE"){
		$("#status_policy").val("ขออนุมัติ");
		$("#status_policy_OL").val("ขออนุมัติ");
		
	}else if(status_PD == "APPROVED"){
		$("#status_policy").val("อนุมัติ");
		$("#status_policy_OL").val("อนุมัติ");
		
	}else if(status_PD == "REJECTED"){
		$("#status_policy").val("ไม่อนุมัติ");
		$("#status_policy_OL").val("ไม่อนุมัติ");
		
	}else if(status_PD == "REQUEST_UPDATE"){
		$("#status_policy").val("ขอแก้ไข");
		$("#status_policy_OL").val("ขอแก้ไข");
		
	}
	
	//alert(status);
	
	if(permission_edit_all == "0"){
				
		if(page == "base_plan.jsp"){
			$("#div_main_menuBasic_Info input, #div_main_menuBasic_Info button, #div_main_menuBasic_Info select, #div_main_menuBasic_Info label, #div_main_menuBasic_Info textarea").addClass("disabledAll_NotFade");
			$("#tbl_BI_Mode_CL *, #tbl_BI_FilingCN_CL *, #tbl_BI_AgeCal_CL *, #tb_BasicInformation1 *, #tb_Sperately_Pay *, #tb_BasicInformation_Death *, #tb_BasicInformation_TPD *, #tb_TaxReduce *").addClass("disabledAll_NotFade");
			$("#policy_CL *").addClass("disabledAll_NotFade");
			$("#div_main_menuCL_2 *").addClass("disabledAll_NotFade");
			$("#div_main_menuCL_3 label, #div_main_menuCL_3 input, #div_main_menuCL_3 select, #div_main_menuCL_3 button, #div_main_menuCL_3 span, #tb_PM_Rate1 *, #panel_extraRateCL *, #panel_SARateCL *").addClass("disabledAll_NotFade");
			$("#mainRisk label, #mainRisk input, #mainRisk select, #mainRisk button, #tb_RateValue1 *, #panel_noriskCL *").addClass("disabledAll_NotFade");
			$("#mainBenefit_CL input:checkbox, #mainBenefit_CL label, #tbody_dieL_CL, #tbody_dieR_CL, #die_CL button, #disabled_CL *").addClass("disabledAll_NotFade");
			$("#benefitView_CL").show();
			$("#benefitSubmit_CL").hide();
			$("#approve_CL *").addClass("disabledAll_NotFade");
			$("#div_request_editCL, #div_request_approveCL, #div_approveCL, #div_approveEditCL").hide();
			
			/*OL*/
			$("#div_main_menuBasic_Info_OL input, #div_main_menuBasic_Info_OL button, #div_main_menuBasic_Info_OL select, #div_main_menuBasic_Info_OL label, #div_main_menuBasic_Info_OL textarea").addClass("disabledAll_NotFade");
			$("#tbl_BI_Mode_OL *, #tbl_BI_FilingCN_OL *, #tbl_BI_AgeCal_OL *, #tb_BasicInformation1_OL *, #tb_Sperately_Pay_ol *, #tb_allCalPM_OL *, #tb_TaxReduce_OL *").addClass("disabledAll_NotFade");
			$("#policy_OL *").addClass("disabledAll_NotFade");
			$("#div_main_menuOL_2 *").addClass("disabledAll_NotFade");
			$("#div_main_menuOL_3 label, #div_main_menuOL_3 input, #div_main_menuOL_3 select, #div_main_menuOL_3 button, #div_main_menuOL_3 span, #tb_PM_Rate1_OL *, #panel_extraRateOL *, #panel_SARateOL *").addClass("disabledAll_NotFade");
			$("#mainRisk_OL label, #mainRisk_OL input, #mainRisk_OL select, #mainRisk_OL button, #tb_RateValue1_OL *, #panel_noriskOL *").addClass("disabledAll_NotFade");
			$("#mainBenefit_OL input:checkbox, #mainBenefit_OL label, #tbody_dieL_OL, #tbody_dieR_OL, #die_OL button, #disabled_OL *").addClass("disabledAll_NotFade");
			$("#benefitView_OL").show();
			$("#benefitSubmit").hide();
			$("#approve_OL *").addClass("disabledAll_NotFade");
			$("#div_request_editOL, #div_request_approveOL, #div_approveOL, #div_approveEditOL").hide();
			
		}else if(page == "rider_plan.jsp"){
			$("#div_main_menuBasic_Info input, #div_main_menuBasic_Info button, #div_main_menuBasic_Info select, #div_main_menuBasic_Info label, #div_main_menuBasic_Info textarea").addClass("disabledAll_NotFade");
			$("#tbl_BI_Mode_CL *, #tbl_BI_FilingCN_CL *, #tbl_BI_AgeCal_CL *, #tb_BasicInformation1 *, #tb_Sperately_Pay *, #tb_BasicInformation_Death *, #tb_BasicInformation_TPD *, #tb_TaxReduce *").addClass("disabledAll_NotFade");
			$("#policy_CL *").addClass("disabledAll_NotFade");
			$("#div_main_menuCL_8 *").addClass("disabledAll_NotFade");
			$("#div_main_menuCL_3 label, #div_main_menuCL_3 input, #div_main_menuCL_3 select, #div_main_menuCL_3 button, #div_main_menuCL_3 span, #tb_PM_Rate1 *, #panel_extraRateCL *, #panel_SARateCL *").addClass("disabledAll_NotFade");
			$("#mainPolicy label, #mainPolicy input, #mainPolicy select, #mainPolicy button, #tb_RateValue1 *, #panel_noriskCL *").addClass("disabledAll_NotFade");
			$("#mainBenefit_CL input:checkbox, #mainBenefit_CL label, #benefitDetail_CL input, #benefitDetail_CL select, #benefitDetail_CL textarea, #benefitDetail_CL a.open-EditBenefitDialog, #benefitDetail_CL button, #benefitDetail_CL a.open-SelectBenefitDialog").addClass("disabledAll_NotFade");
			$("#benefitDetail_CL .benefit_cv_box>div>label").addClass("disabledAll_NotFade");
			$("#benefitView_CL").show();
			$("#benefitSubmit_CL").hide();
			$("#tbl_benefit_CL").addClass("disabledAll_NotFade");
			$("#div_main_menuCL_9 *").addClass("disabledAll_NotFade");
			$("#approve_CL *").addClass("disabledAll_NotFade");
			$("#div_request_editCL, #div_request_approveCL, #div_approveCL, #div_approveEditCL").hide();
			
			/*OL*/
			$("#div_main_menuBasic_Info_OL input, #div_main_menuBasic_Info_OL button, #div_main_menuBasic_Info_OL select, #div_main_menuBasic_Info_OL label, #div_main_menuBasic_Info_OL textarea").addClass("disabledAll_NotFade");
			$("#tbl_BI_Mode_OL *, #tbl_BI_FilingCN_OL *, #tbl_BI_AgeCal_OL *, #tb_BasicInformation1_OL *, #tb_Sperately_Pay_ol *, #tb_CalPremiumUse_ol *, #tb_allCalPM_OL *, #tb_TaxReduce_OL *").addClass("disabledAll_NotFade");
			$("#Policy_Table_OL *").addClass("disabledAll_NotFade");
			$("#div_main_menuOL_8 *").addClass("disabledAll_NotFade");
			$("#div_main_menuOL_3 label, #div_main_menuOL_3 input, #div_main_menuOL_3 select, #div_main_menuOL_3 button, #div_main_menuOL_3 span, #tb_PM_Rate1_OL *, #panel_extraRateOL *, #panel_SARateOL *").addClass("disabledAll_NotFade");
			$("#mainPolicy_OL label, #mainPolicy_OL input, #mainPolicy_OL select, #mainPolicy_OL button, #tb_RateValue1_OL *, #panel_noriskOL *").addClass("disabledAll_NotFade");
			$("#mainBenefit_OL input:checkbox, #mainBenefit_OL label, #benefitDetail_OL input, #benefitDetail_OL select, #benefitDetail_OL textarea, #benefitDetail_OL a.open-EditBenefitDialog_OL, #benefitDetail_OL button, #benefitDetail_OL a.open-open-SelectBenefitDialog_OL").addClass("disabledAll_NotFade");
			$("#benefitDetail_OL .benefit_cv_box>div>label").addClass("disabledAll_NotFade");
			$("#benefitView_OL").show();
			$("#benefitSubmit_OL").hide();
			$("#tbl_benefit_OL").addClass("disabledAll_NotFade");
			$("#div_main_menuOL_9 *").addClass("disabledAll_NotFade");
			$("#approve_OL *").addClass("disabledAll_NotFade");
			$("#div_request_editOL, #div_request_approveOL, #div_approveOL, #div_approveEditOL").hide();
			
		}else if(page == "product.jsp"){
			$("#div_main_menuBasic_Info input, #div_main_menuBasic_Info button, #div_main_menuBasic_Info select, #div_main_menuBasic_Info label, #div_main_menuBasic_Info textarea").addClass("disabledAll_NotFade");
			$("#tb_PM_Rate *, #tb_Additional_contract *, #tb_ageRange_CL *, #tb_COOP_CL *, #tb_COOP_CL_2 *, #tb_COOP_CL_3 *").addClass("disabledAll_NotFade");
			$("#div_main_menuCL_3 input, #div_main_menuCL_3 button, #div_main_menuCL_3 select, #div_main_menuCL_3 label, #tb_Calculate_insurance *").addClass("disabledAll_NotFade");
			$("#div_main_menuCL_2 *").addClass("disabledAll_NotFade");
			$("#benefit_sale_CL input, #benefit_sale_CL button, #benefit_sale_CL label").addClass("disabledAll_NotFade");
			$("#warranty_term_CL input, #warranty_term_CL button, #warranty_term_CL select, #warranty_term_CL label, #warranty_term_CL textarea").addClass("disabledAll_NotFade");
			$("#tbl_increaseCOOP_premium_CL *, #tbl_COOP_masterPolicy_CL *").addClass("disabledAll_NotFade");
			$("#approve_CL *").addClass("disabledAll_NotFade");
			$("#div_request_editCL, #div_request_approveCL, #div_approveCL, #div_approveEditCL").hide();
		
			/*OL*/
			$("#div_main_menuBasic_Info_OL input, #div_main_menuBasic_Info_OL button, #div_main_menuBasic_Info_OL select, #div_main_menuBasic_Info_OL label, #div_main_menuBasic_Info_OL textarea").addClass("disabledAll_NotFade");
			$("#tb_PM_Rate_OL *, #tb_Additional_contract_OL *, #tb_ageRange_OL").addClass("disabledAll_NotFade");
			$("#div_main_menuOL_3 input, #div_main_menuOL_3 button, #div_main_menuOL_3 select, #div_main_menuOL_3 label, #tb_Calculate_insurance2_OL *").addClass("disabledAll_NotFade");
			$("#div_main_menuOL_2 *").addClass("disabledAll_NotFade");
			$("#benefit_sale_OL input, #benefit_sale_OL label, #benefit_sale_OL button, #benefit_sale_OL select, #benefit_sale_OL textarea").addClass("disabledAll_NotFade");
			$("#tbl_SaleBenefitNormal_OL input, #tbl_SaleBenefitNormal_OL button, #tbl_SaleBenefitNormal_OL i").addClass("disabledAll_NotFade");
			$("#div_SaleHaveCondition_OL input, #div_SaleHaveCondition_OL button, #div_SaleHaveCondition_OL select, #div_SaleHaveCondition_OL i, #div_SaleHaveCondition_OL textarea, #div_SaleHaveCondition_OL label").addClass("disabledAll_NotFade");
			$("#warranty_term_OL input, #warranty_term_OL button, #warranty_term_OL select, #warranty_term_OL label, #warranty_term_OL textarea").addClass("disabledAll_NotFade");
			$("#tbl_insure_range_OL *, #tbl_modeTerms_OL2 *, #tbl_contractAmount_OL *, #tbl_contractInsure_OL *").addClass("disabledAll_NotFade");
			$("#approve_OL *").addClass("disabledAll_NotFade");
			$("#div_request_editOL, #div_request_approveOL, #div_approveOL, #div_approveEditOL").hide();
			
		}else if(page == "product_rider.jsp"){
			$("#div_main_menuBasic_Info input, #div_main_menuBasic_Info button, #div_main_menuBasic_Info select, #div_main_menuBasic_Info label, #div_main_menuBasic_Info textarea").addClass("disabledAll_NotFade");
			$("#tb_Additional_contract *").addClass("disabledAll_NotFade");
			$("#div_main_menuCL_3 input, #div_main_menuCL_3 button, #div_main_menuCL_3 select, #div_main_menuCL_3 label, #tb_Calculate_insurance *").addClass("disabledAll_NotFade");
			$("#tb_Calculate_insurance2 *").addClass("disabledAll_NotFade");
			$("#tbl_benefit_sale_ol input, #tbl_benefit_sale_ol button, #tbl_benefit_sale_ol i").addClass("disabledAll_NotFade");
			$("#warranty_term_CL input, #warranty_term_CL button, #warranty_term_CL select, #warranty_term_CL label, #warranty_term_CL textarea").addClass("disabledAll_NotFade");
			$("#approve_OL *").addClass("disabledAll_NotFade");
			$("#div_request_editOL, #div_request_approveOL, #div_approveOL, #div_approveEditOL").hide();
		}
		
		
		/******อนุมัติ*******/
		if(groupName == "PD1" || groupName == "PD2" || groupName == "PD3" || groupName == "PD_Test"){
			if(permission_approve == "0"){
				/*staff*/
				$("#div_request_approveCL").hide();
				$("#div_approveCL").hide();
				$("#div_request_editCL").hide();
				$("#div_approveEditCL").hide();
				$("#btn_request_approveCL").addClass("disabledAll_NotFade");
				
				$("#comment").val("เมื่อทำการขออนุมัติแล้ว ไม่สามารถแก้ไขรายละเอียดได้ แต่จะแก้ไขรายละเอียดได้ก็ต่อเมื่อแบบประกันนี้ไม่ผ่านการอนุมัติเท่านั้น ดังนั้น กรุณาตรวจสอบรายละเอียดแบบประกันนี้ให้ครบถ้วน โดยการคลิกที่ Tab ข้อมูลต่างๆ เพื่อตรวจสอบข้อมูลและแก้ไขข้อมูลให้ถูกต้องก่อนการขออนุมัติ");
				
				/*OL*/
				$("#div_request_approveOL").hide();
				$("#div_approveOL").hide();
				$("#div_request_editOL").hide();
				$("#div_approveEditOL").hide();
				$("#btn_request_approveOL").addClass("disabledAll_NotFade");
				
				$("#comment_OL").val("เมื่อทำการขออนุมัติแล้ว ไม่สามารถแก้ไขรายละเอียดได้ แต่จะแก้ไขรายละเอียดได้ก็ต่อเมื่อแบบประกันนี้ไม่ผ่านการอนุมัติเท่านั้น ดังนั้น กรุณาตรวจสอบรายละเอียดแบบประกันนี้ให้ครบถ้วน โดยการคลิกที่ Tab ข้อมูลต่างๆ เพื่อตรวจสอบข้อมูลและแก้ไขข้อมูลให้ถูกต้องก่อนการขออนุมัติ");
			}
		}else if(groupName == "P03" || groupName == "RP" || groupName == "RP_Test"){
			if(permission_approve == "0"){
				/*staff*/
				$("#div_request_approveCL").hide();
				$("#div_approveCL").hide();
				$("#div_request_editCL").hide();
				$("#div_approveEditCL").hide();
				$("#btn_request_approveCL").addClass("disabledAll_NotFade");
				
				$("#comment").val("เมื่อทำการขออนุมัติแล้ว ไม่สามารถแก้ไขรายละเอียดได้ แต่จะแก้ไขรายละเอียดได้ก็ต่อเมื่อแบบประกันนี้ไม่ผ่านการอนุมัติเท่านั้น ดังนั้น กรุณาตรวจสอบรายละเอียด Policy Wording ของแบบประกันนี้ให้ครบถ้วน");
				
				/*OL*/
				$("#div_request_approveOL").hide();
				$("#div_approveOL").hide();
				$("#div_request_editOL").hide();
				$("#div_approveEditOL").hide();
				$("#btn_request_approveOL").addClass("disabledAll_NotFade");
				
				$("#comment_OL").val("เมื่อทำการขออนุมัติแล้ว ไม่สามารถแก้ไขรายละเอียดได้ แต่จะแก้ไขรายละเอียดได้ก็ต่อเมื่อแบบประกันนี้ไม่ผ่านการอนุมัติเท่านั้น ดังนั้น กรุณาตรวจสอบรายละเอียด Policy Wording ของแบบประกันนี้ให้ครบถ้วน");
			}
		}else if(groupName == "POC (1740)" || groupName == "POC_Test"){
			if(permission_approve == "0"){
				/*staff*/
				$("#div_request_approveCL").hide();
				$("#div_approveCL").hide();
				$("#div_request_editCL").hide();
				$("#div_approveEditCL").hide();
				$("#btn_request_approveCL").addClass("disabledAll_NotFade");
				
				$("#comment").val("เมื่อทำการขออนุมัติแล้ว ไม่สามารถแก้ไขรายละเอียดได้ แต่จะแก้ไขรายละเอียดได้ก็ต่อเมื่อแบบประกันนี้ไม่ผ่านการอนุมัติเท่านั้น ดังนั้น กรุณาตรวจสอบรายละเอียดแบบประกันนี้ให้ครบถ้วน โดยการคลิกที่ Tab ข้อมูลต่างๆ เพื่อตรวจสอบข้อมูลและแก้ไขข้อมูลให้ถูกต้องก่อนการขออนุมัติ");
				
				/*OL*/
				$("#div_request_approveOL").hide();
				$("#div_approveOL").hide();
				$("#div_request_editOL").hide();
				$("#div_approveEditOL").hide();
				$("#btn_request_approveOL").addClass("disabledAll_NotFade");
				
				$("#comment_OL").val("เมื่อทำการขออนุมัติแล้ว ไม่สามารถแก้ไขรายละเอียดได้ แต่จะแก้ไขรายละเอียดได้ก็ต่อเมื่อแบบประกันนี้ไม่ผ่านการอนุมัติเท่านั้น ดังนั้น กรุณาตรวจสอบรายละเอียดแบบประกันนี้ให้ครบถ้วน โดยการคลิกที่ Tab ข้อมูลต่างๆ เพื่อตรวจสอบข้อมูลและแก้ไขข้อมูลให้ถูกต้องก่อนการขออนุมัติ");
			}
		}
		
	}else if(permission_edit_all == "1"){

		/******อนุมัติ*******/
		if(groupName == "PD1" || groupName == "PD2" || groupName == "PD3" || groupName == "PD_Test"){

			if(permission_approve == "0"){
				
				if(status == "NEW" || status == ""){
					$("#div_request_approveCL").show().addClass("disabledAll");
					$("#div_approveCL").hide();
					$("#div_request_editCL").hide();
					$("#div_approveEditCL").hide();
					
					$("#div_request_approveOL").show().addClass("disabledAll");
					$("#div_approveOL").hide();
					$("#div_request_editOL").hide();
					$("#div_approveEditOL").hide();
					
					if(page == "base_plan.jsp" || page == "rider_plan.jsp"){
						
						if(status_RP == "NEW"){
							$("#status_policy").val("สร้างใหม่");
							$("#status_policy_OL").val("สร้างใหม่");
						}else if(status_RP == "UPDATE"){
							$("#status_policy").val("แก้ไข");
							$("#status_policy_OL").val("แก้ไข");
						}else if(status_RP == "REQUEST_FOR_APPROVE"){
							$("#status_policy").val("ขออนุมัติ");
							$("#status_policy_OL").val("ขออนุมัติ");
						}else if(status_RP == "APPROVED"){
							$("#status_policy").val("อนุมัติ");
							$("#status_policy_OL").val("อนุมัติ");
						}else if(status_RP == "REJECTED"){
							$("#status_policy").val("ไม่อนุมัติ");
							$("#status_policy_OL").val("ไม่อนุมัติ");
						}else if(status_RP == "REQUEST_UPDATE"){
							$("#status_policy").val("ขอแก้ไข");
							$("#status_policy_OL").val("ขอแก้ไข");
						}
						
					}else if(page == "product.jsp" || page == "product_rider.jsp"){
						if(status_PD == "UPDATE"){
							$("#status_policy").val("แก้ไข");
							$("#status_policy_OL").val("แก้ไข");	
							
							$("#div_request_approveCL, #div_request_approveOL").show().removeClass("disabledAll");
						}else if(status_PD == "REQUEST_FOR_APPROVE"){
							$("#status_policy").val("ขออนุมัติ");
							$("#status_policy_OL").val("ขออนุมัติ");	
							
							$("#div_request_approveCL, #div_request_approveOL").show().addClass("disabledAll");
						
							setting_page_auth("product.jsp");
							setting_page_auth("product_rider.jsp");
							
						}else if(status_PD == "APPROVED"){
							$("#status_policy").val("อนุมัติ");
							$("#status_policy_OL").val("อนุมัติ");	
							
							$("#div_request_approveCL, #div_request_approveOL").hide();
							$("#div_request_editCL, #div_request_editOL").show();

							setting_page_auth("product.jsp");
							setting_page_auth("product_rider.jsp");
							
						}else if(status_PD == "REJECTED"){
							$("#status_policy").val("ไม่อนุมัติ");
							$("#status_policy_OL").val("ไม่อนุมัติ");	
								
						}else if(status_PD == "REQUEST_UPDATE"){
							$("#div_request_approveCL, #div_request_approveOL").hide();
							$("#div_request_editCL, #div_request_editOL").show().addClass("disabledAll");

							setting_page_auth("product.jsp");
							setting_page_auth("product_rider.jsp");
						}
						
						
					}

				}else if(status == "UPDATE"){
					$("#div_request_approveCL").show();
					$("#div_approveCL").hide();
					$("#div_request_editCL").hide();
					$("#div_approveEditCL").hide();
					
					/*OL*/
					$("#div_request_approveOL").show();
					$("#div_approveOL").hide();
					$("#div_request_editOL").hide();
					$("#div_approveEditOL").hide();

					
					if(page == "base_plan.jsp" || page == "rider_plan.jsp"){
						if(status_RP == "REQUEST_FOR_APPROVE"){
							$("#div_request_approveCL, #div_request_approveOL").addClass("disabledAll");
						}else if(status_RP == "APPROVED"){
							$("#div_request_approveCL, #div_request_approveOL").removeClass("disabledAll");
						}else if(status_RP == "REJECTED"){
							$("#div_request_approveCL, #div_request_approveOL").addClass("disabledAll");
						}else if(status_RP == "REQUEST_UPDATE"){
							$("#div_request_approveCL, #div_request_approveOL").addClass("disabledAll");
						}
					}else if(page == "product.jsp" || page == "product_rider.jsp"){
						if(status_PD == "UPDATE"){
							$("#div_request_approveCL, #div_request_approveOL").removeClass("disabledAll");

						}else if(status_PD == "REQUEST_FOR_APPROVE"){
							$("#div_request_approveCL, #div_request_approveOL").addClass("disabledAll");
							
							setting_page_auth("base_plan.jsp");
							setting_page_auth("rider_plan.jsp");
							setting_page_auth("product.jsp");
							setting_page_auth("product_rider.jsp");
							
						}else if(status_PD == "APPROVED"){
							$("#div_request_approveCL, #div_request_approveOL").hide();
							$("#div_request_editCL, #div_request_editOL").show();
							
							setting_page_auth("base_plan.jsp");
							setting_page_auth("rider_plan.jsp");
							setting_page_auth("product.jsp");
							setting_page_auth("product_rider.jsp");
							
						}else if(status_PD == "REJECTED"){
							$("#div_request_approveCL, #div_request_approveOL").addClass("disabledAll");
						}else if(status_PD == "REQUEST_UPDATE"){
							$("#div_request_approveCL, #div_request_approveOL").hide();
							$("#div_request_editCL, #div_request_editOL").show().addClass("disabledAll");
							
							setting_page_auth("base_plan.jsp");
							setting_page_auth("rider_plan.jsp");
							setting_page_auth("product.jsp");
							setting_page_auth("product_rider.jsp");
						}
					}
	
				}else if(status == "REQUEST_FOR_APPROVE"){
					$("#div_request_approveCL").show().addClass("disabledAll");
					$("#div_approveCL").hide();
					$("#div_request_editCL").hide();
					$("#div_approveEditCL").hide();
					
					/*OL*/
					$("#div_request_approveOL").show().addClass("disabledAll");
					$("#div_approveOL").hide();
					$("#div_request_editOL").hide();
					$("#div_approveEditOL").hide();
					
					if(page == "base_plan.jsp" || page == "rider_plan.jsp"){					
						setting_page_auth("base_plan.jsp");
						setting_page_auth("rider_plan.jsp");
						setting_page_auth("product.jsp");
						setting_page_auth("product_rider.jsp");
						
					}else if(page == "product.jsp" || page == "product_rider.jsp"){
						if(status_PD == "REQUEST_FOR_APPROVE" || status_PD == "APPROVED" || status_PD == "REQUEST_UPDATE"){
							setting_page_auth("base_plan.jsp");
							setting_page_auth("rider_plan.jsp");
							setting_page_auth("product.jsp");
							setting_page_auth("product_rider.jsp");
						}
					}
					
					
				}else if(status == "APPROVED"){
					$("#div_request_approveCL").hide();
					$("#div_approveCL").hide();
					$("#div_request_editCL").show();
					$("#div_approveEditCL").hide();
					
					/*OL*/
					$("#div_request_approveOL").hide();
					$("#div_approveOL").hide();
					$("#div_request_editOL").show();
					$("#div_approveEditOL").hide();
					
					if(page == "base_plan.jsp" || page == "rider_plan.jsp"){					
						setting_page_auth("base_plan.jsp");
						setting_page_auth("rider_plan.jsp");
						setting_page_auth("product.jsp");
						setting_page_auth("product_rider.jsp");
						
					}else if(page == "product.jsp" || page == "product_rider.jsp"){
						if(status_PD == "UPDATE" || status_PD == "REQUEST_FOR_APPROVE" || status_PD == "APPROVED" || status_PD == "REQUEST_UPDATE" || status_PD == "REJECTED"){
							
							if(status_PD == "REQUEST_FOR_APPROVE" || status_PD == "APPROVED" || status_PD == "REQUEST_UPDATE" || status_PD == "REJECTED"){
								setting_page_auth("base_plan.jsp");
								setting_page_auth("rider_plan.jsp");
								setting_page_auth("product.jsp");
								setting_page_auth("product_rider.jsp");
							}

							if(status_PD == "UPDATE"){
								$("#status_policy").val("แก้ไข");
								$("#status_policy_OL").val("แก้ไข");	
								$("#div_request_editCL, #div_request_editOL").hide();
								$("#div_request_approveCL, #div_request_approveOL").show().removeClass("disabledAll");
							}else if(status_PD == "REQUEST_FOR_APPROVE"){
								$("#status_policy").val("ขออนุมัติ");
								$("#status_policy_OL").val("ขออนุมัติ");	
								$("#div_request_editCL, #div_request_editOL").hide();
								$("#div_request_approveCL, #div_request_approveOL").show().addClass("disabledAll");
							}else if(status_PD == "APPROVED"){
								$("#status_policy").val("อนุมัติ");
								$("#status_policy_OL").val("อนุมัติ");	
								
								$("#div_request_approveCL, #div_request_approveOL").hide();
								$("#div_request_editCL, #div_request_editOL").show();
							}else if(status_PD == "REJECTED"){
								$("#status_policy").val("ไม่อนุมัติ");
								$("#status_policy_OL").val("ไม่อนุมัติ");	
								
								$("#div_request_approveCL, #div_request_approveOL").show().removeClass("disabledAll");
							}else if(status_PD == "REQUEST_UPDATE"){
								
								$("#div_request_approveCL, #div_request_approveOL").hide();
								$("#div_request_editCL, #div_request_editOL").show().removeClass("disabledAll");
							}

						}
					}
					
				}else if(status == "REJECTED"){
					$("#div_request_approveCL").show().addClass("disabledAll")
					$("#div_approveCL").hide();
					$("#div_request_editCL").hide();
					$("#div_approveEditCL").hide();
					
					/*OL*/
					$("#div_request_approveOL").show().addClass("disabledAll");
					$("#div_approveOL").hide();
					$("#div_request_editOL").hide();
					$("#div_approveEditOL").hide();
					
				}else if(status == "REQUEST_UPDATE"){
					$("#div_request_approveCL").hide();
					$("#div_approveCL").hide();
					$("#div_request_editCL").show().addClass("disabledAll");
					$("#div_approveEditCL").hide();
					
					/*OL*/
					$("#div_request_approveOL").hide();
					$("#div_approveOL").hide();
					$("#div_request_editOL").show().addClass("disabledAll");
					$("#div_approveEditOL").hide();
					
					if(page == "base_plan.jsp" || page == "rider_plan.jsp"){					
						setting_page_auth("base_plan.jsp");
						setting_page_auth("rider_plan.jsp");
						setting_page_auth("product.jsp");
						setting_page_auth("product_rider.jsp");
						
					}else if(page == "product.jsp" || page == "product_rider.jsp"){
						if(status_PD == "REQUEST_FOR_APPROVE" || status_PD == "APPROVED" || status_PD == "REQUEST_UPDATE"){
							setting_page_auth("base_plan.jsp");
							setting_page_auth("rider_plan.jsp");
							setting_page_auth("product.jsp");
							setting_page_auth("product_rider.jsp");
						}
					}			
				}
				
				$("#comment").val("เมื่อทำการขออนุมัติแล้ว ไม่สามารถแก้ไขรายละเอียดได้ แต่จะแก้ไขรายละเอียดได้ก็ต่อเมื่อแบบประกันนี้ไม่ผ่านการอนุมัติเท่านั้น ดังนั้น กรุณาตรวจสอบรายละเอียดแบบประกันนี้ให้ครบถ้วน โดยการคลิกที่ Tab ข้อมูลต่างๆ เพื่อตรวจสอบข้อมูลและแก้ไขข้อมูลให้ถูกต้องก่อนการขออนุมัติ");
				$("#comment_OL").val("เมื่อทำการขออนุมัติแล้ว ไม่สามารถแก้ไขรายละเอียดได้ แต่จะแก้ไขรายละเอียดได้ก็ต่อเมื่อแบบประกันนี้ไม่ผ่านการอนุมัติเท่านั้น ดังนั้น กรุณาตรวจสอบรายละเอียดแบบประกันนี้ให้ครบถ้วน โดยการคลิกที่ Tab ข้อมูลต่างๆ เพื่อตรวจสอบข้อมูลและแก้ไขข้อมูลให้ถูกต้องก่อนการขออนุมัติ");
			
			}else if(permission_approve == "1"){
				
				if(status == "NEW" || status == ""){
					$("#div_request_approveCL").hide();
					$("#div_approveCL").show().addClass("disabledAll");
					$("#div_request_editCL").hide();
					$("#div_approveEditCL").hide();
					
					$("#div_request_approveOL").hide();
					$("#div_approveOL").show().addClass("disabledAll");
					$("#div_request_editOL").hide();
					$("#div_approveEditOL").hide();
					
					if(page == "base_plan.jsp" || page == "rider_plan.jsp"){
						if(status_RP == "NEW"){
							$("#status_policy").val("สร้างใหม่");
							$("#status_policy_OL").val("สร้างใหม่");
						}else if(status_RP == "UPDATE"){
							$("#status_policy").val("แก้ไข");
							$("#status_policy_OL").val("แก้ไข");
						}else if(status_RP == "REQUEST_FOR_APPROVE"){
							$("#status_policy").val("ขออนุมัติ");
							$("#status_policy_OL").val("ขออนุมัติ");
						}else if(status_RP == "APPROVED"){
							$("#status_policy").val("อนุมัติ");
							$("#status_policy_OL").val("อนุมัติ");
						}else if(status_RP == "REJECTED"){
							$("#status_policy").val("ไม่อนุมัติ");
							$("#status_policy_OL").val("ไม่อนุมัติ");
						}else if(status_RP == "REQUEST_UPDATE"){
							$("#status_policy").val("ขอแก้ไข");
							$("#status_policy_OL").val("ขอแก้ไข");
						}
					}else if(page == "product.jsp" || page == "product_rider.jsp"){
						if(status_PD == "UPDATE"){
							$("#status_policy").val("แก้ไข");
							$("#status_policy_OL").val("แก้ไข");	

							$("#div_approveCL, #div_approveOL").hide();
							$("#div_request_approveCL, #div_request_approveOL").show().removeClass("disabledAll");
						}else if(status_PD == "REQUEST_FOR_APPROVE"){
							$("#status_policy").val("ขออนุมัติ");
							$("#status_policy_OL").val("ขออนุมัติ");	
							
							$("#div_approveCL, #div_approveOL").show().removeClass("disabledAll");

							setting_page_auth("product.jsp");
							setting_page_auth("product_rider.jsp");
							
						}else if(status_PD == "APPROVED"){
							$("#status_policy").val("อนุมัติ");
							$("#status_policy_OL").val("อนุมัติ");	
							
							$("#div_request_approveCL, #div_request_approveOL").hide();
							$("#div_approveCL, #div_approveOL").hide();
							$("#div_request_editCL, #div_request_editOL").show();
							
							setting_page_auth("product.jsp");
							setting_page_auth("product_rider.jsp");
							
						}else if(status_PD == "REJECTED"){
							$("#status_policy").val("ไม่อนุมัติ");
							$("#status_policy_OL").val("ไม่อนุมัติ");	
							
							$("#div_request_approveCL, #div_request_approveOL").hide();
							
						}else if(status_PD == "REQUEST_UPDATE"){
							
							$("#div_request_approveCL, #div_request_approveOL").hide();
							$("#div_approveCL, #div_approveOL").hide();
							$("#div_approveEditCL, #div_approveEditOL").show();

							setting_page_auth("product.jsp");
							setting_page_auth("product_rider.jsp");
							
						}
					}
					
				}else if(status == "UPDATE"){
					$("#div_request_approveCL").show();
					$("#div_approveCL").hide();
					//$("#div_approveCL").show().addClass("disabledAll");
					$("#div_request_editCL").hide();
					$("#div_approveEditCL").hide();
					
					/*OL*/
					$("#div_request_approveOL").show();
					$("#div_approveOL").hide();
					//$("#div_approveOL").show().addClass("disabledAll");
					$("#div_request_editOL").hide();
					$("#div_approveEditOL").hide();
					
					if(page == "base_plan.jsp" || page == "rider_plan.jsp"){
						if(status_RP == "NEW"){
							$("#div_approveCL, #div_approveOL").hide();
							$("#div_request_approveCL, #div_request_approveOL").show().addClass("disabledAll");
						}else if(status_RP == "UPDATE"){
							$("#div_approveCL, #div_approveOL").hide();
							$("#div_request_approveCL, #div_request_approveOL").show().addClass("disabledAll");
						}else if(status_RP == "REQUEST_FOR_APPROVE"){
							$("#div_approveCL, #div_approveOL").addClass("disabledAll");
							$("#div_request_approveCL, #div_request_approveOL").show().addClass("disabledAll");
						}else if(status_RP == "REJECTED"){
							$("#div_approveCL, #div_approveOL").addClass("disabledAll");
						}else if(status_RP == "REQUEST_UPDATE"){
							$("#div_approveCL, #div_approveOL").addClass("disabledAll");
						}
					}else if(page == "product.jsp" || page == "product_rider.jsp"){
						if(status_PD == "UPDATE"){
							$("#div_approveCL, #div_approveOL").hide();
							$("#div_request_approveCL, #div_request_approveOL").show().removeClass("disabledAll");	
						}else if(status_PD == "REQUEST_FOR_APPROVE"){
							$("#div_request_approveCL, #div_request_approveOL").hide()
							$("#div_approveCL, #div_approveOL").show().removeClass("disabledAll");
							
							setting_page_auth("base_plan.jsp");
							setting_page_auth("rider_plan.jsp");
							setting_page_auth("product.jsp");
							setting_page_auth("product_rider.jsp");
							
						}else if(status_PD == "APPROVED"){
							$("#div_request_approveCL, #div_request_approveOL").hide()
							$("#div_approveCL, #div_approveOL").hide();
							$("#div_request_editCL, #div_request_editOL").show();
							
							setting_page_auth("base_plan.jsp");
							setting_page_auth("rider_plan.jsp");
							setting_page_auth("product.jsp");
							setting_page_auth("product_rider.jsp");

						}else if(status_PD == "REJECTED"){
							$("#div_approveCL, #div_approveOL").addClass("disabledAll");
						}else if(status_PD == "REQUEST_UPDATE"){
							$("#div_approveCL, #div_approveOL").hide().addClass("disabledAll");
							$("#div_request_editCL, #div_request_editOL").hide();
							$("#div_request_approveCL, #div_request_approveOL").hide();
							$("#div_approveEditCL, #div_approveEditOL").show();
							
							setting_page_auth("base_plan.jsp");
							setting_page_auth("rider_plan.jsp");
							setting_page_auth("product.jsp");
							setting_page_auth("product_rider.jsp");
						}
					}
	
				}else if(status == "REQUEST_FOR_APPROVE"){

					$("#div_request_approveCL").hide();
					$("#div_approveCL").show().removeClass("disabledAll");
					$("#div_request_editCL").hide();
					$("#div_approveEditCL").hide();
					
					/*OL*/
					$("#div_request_approveOL").hide();
					$("#div_approveOL").show().removeClass("disabledAll");
					$("#div_request_editOL").hide();
					$("#div_approveEditOL").hide();
					
					if(page == "base_plan.jsp" || page == "rider_plan.jsp"){					
						setting_page_auth("base_plan.jsp");
						setting_page_auth("rider_plan.jsp");
						setting_page_auth("product.jsp");
						setting_page_auth("product_rider.jsp");
						
					}else if(page == "product.jsp" || page == "product_rider.jsp"){
						if(status_PD == "REQUEST_FOR_APPROVE" || status_PD == "APPROVED" || status_PD == "REQUEST_UPDATE"){
							setting_page_auth("base_plan.jsp");
							setting_page_auth("rider_plan.jsp");
							setting_page_auth("product.jsp");
							setting_page_auth("product_rider.jsp");
							
							if(status_PD == "REQUEST_UPDATE"){
								$("#div_approveCL, #div_approveOL").hide().removeClass("disabledAll");
								$("#div_approveEditCL, #div_approveEditOL").show();
							}
							
						}
					}
					
				}else if(status == "APPROVED"){
					$("#div_request_approveCL").hide();
					$("#div_approveCL").hide();
					$("#div_request_editCL").show();
					$("#div_approveEditCL").hide();
					
					/*OL*/
					$("#div_request_approveOL").hide();
					$("#div_approveOL").hide();
					$("#div_request_editOL").show();
					$("#div_approveEditOL").hide();
					
					if(page == "base_plan.jsp" || page == "rider_plan.jsp"){					
						setting_page_auth("base_plan.jsp");
						setting_page_auth("rider_plan.jsp");
						setting_page_auth("product.jsp");
						
					}else if(page == "product.jsp" || page == "product_rider.jsp"){
						if(status_PD == "UPDATE" || status_PD == "REQUEST_FOR_APPROVE" || status_PD == "APPROVED" || status_PD == "REQUEST_UPDATE" || status_PD == "REJECTED"){
							
							if(status_PD == "REQUEST_FOR_APPROVE" || status_PD == "APPROVED" || status_PD == "REQUEST_UPDATE" || status_PD == "REJECTED"){
								setting_page_auth("base_plan.jsp");
								setting_page_auth("rider_plan.jsp");
								setting_page_auth("product.jsp");
								setting_page_auth("product_rider.jsp");
							}
							
							if(status_PD == "UPDATE"){
								$("#status_policy").val("แก้ไข");
								$("#status_policy_OL").val("แก้ไข");	
								$("#div_request_editCL, #div_request_editOL").hide();
								$("#div_request_approveCL, #div_request_approveOL").show().removeClass("disabledAll");
								
							}else if(status_PD == "REQUEST_FOR_APPROVE"){
								$("#status_policy").val("ขออนุมัติ");
								$("#status_policy_OL").val("ขออนุมัติ");	
								$("#div_request_editCL, #div_request_editOL").hide();
								$("#div_approveCL, #div_approveCL").show().removeClass("disabledAll");
							}else if(status_PD == "APPROVED"){
								$("#status_policy").val("อนุมัติ");
								$("#status_policy_OL").val("อนุมัติ");	
								
								$("#div_request_approveCL, #div_request_approveOL").hide();
								$("#div_request_editCL, #div_request_editOL").show();
							}else if(status_PD == "REJECTED"){
								$("#status_policy").val("ไม่อนุมัติ");
								$("#status_policy_OL").val("ไม่อนุมัติ");	
								
								$("#div_request_approveCL, #div_request_approveOL").show().removeClass("disabledAll");
							}else if(status_PD == "REQUEST_UPDATE"){
								
								$("#div_request_approveCL, #div_request_approveOL").hide();
								$("#div_request_editCL, #div_request_editOL").hide();
								$("#div_approveEditCL, #div_approveEditOL").show();
							}
						}
					}
					
				}else if(status == "REJECTED"){
					$("#div_request_approveCL").hide();
					$("#div_approveCL").show().addClass("disabledAll");
					$("#div_request_editCL").hide();
					$("#div_approveEditCL").hide();
					
					/*OL*/
					$("#div_request_approveOL").hide();
					$("#div_approveOL").show().addClass("disabledAll");
					$("#div_request_editOL").hide();
					$("#div_approveEditOL").hide();
					
				}else if(status == "REQUEST_UPDATE"){
					$("#div_request_approveCL").hide();
					$("#div_approveCL").hide();
					$("#div_request_editCL").hide();
					$("#div_approveEditCL").show();
					
					/*OL*/
					$("#div_request_approveOL").hide();
					$("#div_approveOL").hide();
					$("#div_request_editOL").hide();
					$("#div_approveEditOL").show();
					
					if(page == "base_plan.jsp" || page == "rider_plan.jsp"){					
						setting_page_auth("base_plan.jsp");
						setting_page_auth("rider_plan.jsp");
						setting_page_auth("product.jsp");
						setting_page_auth("product_rider.jsp");
						
					}else if(page == "product.jsp" || page == "product_rider.jsp"){
						if(status_PD == "REQUEST_FOR_APPROVE" || status_PD == "APPROVED" || status_PD == "REQUEST_UPDATE"){
							setting_page_auth("base_plan.jsp");
							setting_page_auth("rider_plan.jsp");
							setting_page_auth("product.jsp");
							setting_page_auth("product_rider.jsp");
							
							if(status_PD == "REQUEST_UPDATE"){
								$("#div_approveCL, #div_approveOL").hide().removeClass("disabledAll");
								$("#div_approveEditCL, #div_approveEditOL").show();
							}
						}
					}
					
				}
				
				$("#comment").val("กรุณาตรวจสอบรายละเอียดนี้ให้ครบถ้วน โดยการคลิกที่ Tab ข้อมูลต่างๆ เพื่อตรวจสอบข้อมูลก่อนการอนุมัติ");
				$("#comment_OL").val("กรุณาตรวจสอบรายละเอียดนี้ให้ครบถ้วน โดยการคลิกที่ Tab ข้อมูลต่างๆ เพื่อตรวจสอบข้อมูลก่อนการอนุมัติ");
			}
			
		}else if(groupName == "P03" || groupName == "RP" || groupName == "RP_Test"){
			/*ทีมวิจัย*/

			if(permission_approve == "0"){
				
				$("#div_request_approveCL").show();
				$("#div_approveCL").hide();
				$("#div_request_editCL").hide();
				$("#div_approveEditCL").hide();
				
				$("#div_request_approveOL").show();
				$("#div_approveOL").hide();
				$("#div_request_editOL").hide();
				$("#div_approveEditOL").hide();
				
				if(status == "NEW" || status == ""){
					if(status_RP == "NEW"){
						$("#status_policy").val("สร้างใหม่");
						$("#status_policy_OL").val("สร้างใหม่");
					}
				}else if(status == "UPDATE" || status == "REQUEST_FOR_APPROVE" || status == "APPROVED" || status == "REQUEST_UPDATE"){
					if(page == "base_plan.jsp" || page == "rider_plan.jsp"){
						if(status_RP == "REQUEST_FOR_APPROVE" || status_RP == "APPROVED" || status_RP == "REQUEST_UPDATE"){
							setting_page_auth("base_plan.jsp");
							setting_page_auth("rider_plan.jsp");
							setting_page_auth("product.jsp");
							setting_page_auth("product_rider.jsp");
						}
					}else if(page == "product.jsp" || page == "product_rider.jsp"){
						if(status_PD == "REQUEST_FOR_APPROVE" || status_PD == "APPROVED" || status_PD == "REQUEST_UPDATE"){
							setting_page_auth("base_plan.jsp");
							setting_page_auth("rider_plan.jsp");
							setting_page_auth("product.jsp");
							setting_page_auth("product_rider.jsp");
						}
					}
				}
				
				if(page == "base_plan.jsp" || page == "rider_plan.jsp"){
					if(status_RP == "NEW"){
						$("#div_request_approveCL, #div_request_approveOL").addClass("disabledAll");
					}else if(status_RP == "UPDATE"){
						$("#div_request_approveCL, #div_request_approveOL").removeClass("disabledAll");
					}else if(status_RP == "REQUEST_FOR_APPROVE"){
						$("#div_request_approveCL, #div_request_approveOL").addClass("disabledAll");
					}else if(status_RP == "APPROVED"){
						$("#div_request_editCL, #div_request_editOL").show();
						$("#div_request_approveCL, #div_request_approveOL").hide();
					}else if(status_RP == "REJECTED"){
						$("#div_request_approveCL, #div_request_approveOL").addClass("disabledAll");
					}else if(status_RP == "REQUEST_UPDATE"){
						$("#div_request_approveCL, #div_request_approveOL").hide();
						$("#div_request_editCL, #div_request_editOL").show().addClass("disabledAll");
					}
				}else if(page == "product.jsp" || page == "product_rider.jsp"){
					if(status_PD == "UPDATE"){
						$("#div_request_approveCL, #div_request_approveOL").removeClass("disabledAll");
					}else if(status_PD == "REQUEST_FOR_APPROVE"){
						$("#div_request_approveCL, #div_request_approveOL").addClass("disabledAll");
					}else if(status_PD == "APPROVED"){
						$("#div_request_editCL, #div_request_editOL").show();
						$("#div_request_approveCL, #div_request_approveOL").hide();
					}else if(status_PD == "REJECTED"){
						$("#div_request_approveCL, #div_request_approveOL").addClass("disabledAll");
					}else if(status_PD == "REQUEST_UPDATE"){
						$("#div_request_approveCL, #div_request_approveOL").hide();
						$("#div_request_editCL, #div_request_editOL").show().addClass("disabledAll");
					}
				}
							
				$("#comment").val("เมื่อทำการขออนุมัติแล้ว ไม่สามารถแก้ไขรายละเอียดได้ แต่จะแก้ไขรายละเอียดได้ก็ต่อเมื่อแบบประกันนี้ไม่ผ่านการอนุมัติเท่านั้น ดังนั้น กรุณาตรวจสอบรายละเอียด Policy Wording ของแบบประกันนี้ให้ครบถ้วน");
				$("#comment_OL").val("เมื่อทำการขออนุมัติแล้ว ไม่สามารถแก้ไขรายละเอียดได้ แต่จะแก้ไขรายละเอียดได้ก็ต่อเมื่อแบบประกันนี้ไม่ผ่านการอนุมัติเท่านั้น ดังนั้น กรุณาตรวจสอบรายละเอียด Policy Wording ของแบบประกันนี้ให้ครบถ้วน");
			
			}else if(permission_approve == "1"){
				
				$("#div_request_approveCL").hide();
				$("#div_approveCL").show();
				$("#div_request_editCL").hide();
				$("#div_approveEditCL").hide();
				
				$("#div_request_approveOL").hide();
				$("#div_approveOL").show();
				$("#div_request_editOL").hide();
				$("#div_approveEditOL").hide();
				
				/*อนุมัติได้*/
				if(status == "NEW" || status == ""){
						if(status_RP == "NEW"){
							$("#status_policy").val("สร้างใหม่");
							$("#status_policy_OL").val("สร้างใหม่");
						}
					
				}else if(status == "UPDATE" || status == "REQUEST_FOR_APPROVE" || status == "APPROVED" || status == "REQUEST_UPDATE"){
					if(page == "base_plan.jsp" || page == "rider_plan.jsp"){
						if(status_RP == "REQUEST_FOR_APPROVE" || status_RP == "APPROVED" || status_RP == "REQUEST_UPDATE"){
							setting_page_auth("base_plan.jsp");
							setting_page_auth("rider_plan.jsp");
							setting_page_auth("product.jsp");
							setting_page_auth("product_rider.jsp");
							
							if(status_RP == "REQUEST_UPDATE"){
								$("#div_approveCL, #div_approveOL").hide();
								$("#div_approveEditCL, #div_approveEditOL").show();
							}
						}
					}else if(page == "product.jsp" || page == "product_rider.jsp"){
						if(status_PD == "REQUEST_FOR_APPROVE" || status_PD == "APPROVED" || status_PD == "REQUEST_UPDATE"){
							setting_page_auth("base_plan.jsp");
							setting_page_auth("rider_plan.jsp");
							setting_page_auth("product.jsp");
							setting_page_auth("product_rider.jsp");
							
							if(status_PD == "REQUEST_UPDATE"){
								$("#div_approveCL, #div_approveOL").hide();
								$("#div_approveEditCL, #div_approveEditOL").show();
							}
						}
					}
				}

				if(page == "base_plan.jsp" || page == "rider_plan.jsp"){
					if(status_RP == "NEW"){
						$("#div_approveCL, #div_approveOL").hide();
						$("#div_request_approveCL, #div_request_approveOL").show().addClass("disabledAll");
					}else if(status_RP == "UPDATE"){
						//$("#div_approveCL, #div_approveOL").addClass("disabledAll");
						$("#div_approveCL, #div_approveOL").hide();
						$("#div_request_approveCL, #div_request_approveOL").show().removeClass("disabledAll");
					}else if(status_RP == "REQUEST_FOR_APPROVE"){
						$("#div_approveCL, #div_approveOL").removeClass("disabledAll");
					}else if(status_RP == "APPROVED"){
						$("#div_request_editCL, #div_request_editOL").show();
						$("#div_approveCL, #div_approveOL").hide();
						$("#div_request_approveCL, #div_request_approveOL").hide();
					}else if(status_RP == "REJECTED"){
						$("#div_approveCL, #div_approveOL").addClass("disabledAll");
					}else if(status_RP == "REQUEST_UPDATE"){
						$("#div_approveCL, #div_approveOL").removeClass("disabledAll");
					}
				}else if(page == "product.jsp" || page == "product_rider.jsp"){
					if(status_PD == "NEW"){
						$("#div_approveCL, #div_approveOL").hide();
						$("#div_request_approveCL, #div_request_approveOL").show().addClass("disabledAll");
					}else if(status_PD == "UPDATE"){
						$("#div_approveCL, #div_approveOL").hide();
						$("#div_request_approveCL, #div_request_approveOL").show();
					}else if(status_PD == "REQUEST_FOR_APPROVE"){
						$("#div_approveCL, #div_approveOL").removeClass("disabledAll");
					}else if(status_PD == "APPROVED"){
						$("#div_request_editCL, #div_request_editOL").show();
						$("#div_approveCL, #div_approveOL").hide();
					}else if(status_PD == "REJECTED"){
						$("#div_approveCL, #div_approveOL").addClass("disabledAll");
					}else if(status_PD == "REQUEST_UPDATE"){
						$("#div_approveCL, #div_approveOL").removeClass("disabledAll");
					}
				}
				
				$("#comment").val("กรุณาตรวจสอบรายละเอียด Policy Wording ของแบบประกันนี้ให้ครบถ้วน เพื่อตรวจสอบข้อมูลก่อนการอนุมัติ");
				$("#comment_OL").val("กรุณาตรวจสอบรายละเอียด Policy Wording ของแบบประกันนี้ให้ครบถ้วน เพื่อตรวจสอบข้อมูลก่อนการอนุมัติ");
			}
		}else if(groupName == "POC (1740)" || groupName == "POC_Test"){
			/*UW*/
			
			if(permission_approve == "0"){
				
				if(status == "NEW" || status == ""){
					$("#div_request_approveCL").show().addClass("disabledAll");
					$("#div_approveCL").hide();
					$("#div_request_editCL").hide();
					$("#div_approveEditCL").hide();
					
					$("#div_request_approveOL").show().addClass("disabledAll");
					$("#div_approveOL").hide();
					$("#div_request_editOL").hide();
					$("#div_approveEditOL").hide();
					
					if(status_PD == "NEW"){
						$("#status_policy").val("สร้างใหม่");
						$("#status_policy_OL").val("สร้างใหม่");
					}else if(status_PD == "REQUEST_FOR_APPROVE"){
						$("#status_policy").val("ขออนุมัติ");
						$("#status_policy_OL").val("ขออนุมัติ");
					}else if(status_PD == "APPROVED"){
						$("#status_policy").val("อนุมัติ");
						$("#status_policy_OL").val("อนุมัติ");
					}else if(status_PD == "REQUEST_UPDATE"){
						$("#status_policy").val("ขอแก้ไข");
						$("#status_policy_OL").val("ขอแก้ไข");
					}else if(status_PD == "REJECTED"){
						$("#status_policy").val("ไม่อนุมัติ");
						$("#status_policy_OL").val("ไม่อนุมัติ");
					}
					
				}else if(status == "UPDATE"){
					$("#div_request_approveCL").show().removeClass("disabledAll");
					$("#div_approveCL").hide();
					$("#div_request_editCL").hide();
					$("#div_approveEditCL").hide();
					
					/*OL*/
					$("#div_request_approveOL").show().removeClass("disabledAll");
					$("#div_approveOL").hide();
					$("#div_request_editOL").hide();
					$("#div_approveEditOL").hide();

					
					if(page == "base_plan.jsp" || page == "rider_plan.jsp"){
						if(status_RP == "REQUEST_FOR_APPROVE"){
							$("#div_request_approveCL, #div_request_approveOL").addClass("disabledAll");
						}else if(status_RP == "APPROVED"){
							$("#div_request_approveCL, #div_request_approveOL").removeClass("disabledAll");
						}else if(status_RP == "REJECTED"){
							$("#div_request_approveCL, #div_request_approveOL").addClass("disabledAll");
						}else if(status_RP == "REQUEST_UPDATE"){
							$("#div_request_approveCL, #div_request_approveOL").addClass("disabledAll");
						}
					}else if(page == "product.jsp" || page == "product_rider.jsp"){
						if(status_PD == "REQUEST_FOR_APPROVE"){
							$("#div_request_approveCL, #div_request_approveOL").addClass("disabledAll");
						}else if(status_PD == "APPROVED"){
							$("#div_request_approveCL, #div_request_approveOL").removeClass("disabledAll");
						}else if(status_PD == "REJECTED"){
							$("#div_request_approveCL, #div_request_approveOL").addClass("disabledAll");
						}else if(status_PD == "REQUEST_UPDATE"){
							$("#div_request_approveCL, #div_request_approveOL").addClass("disabledAll");
						}
					}
	
				}else if(status == "REQUEST_FOR_APPROVE"){
					$("#div_request_approveCL").show().addClass("disabledAll");
					$("#div_approveCL").hide();
					$("#div_request_editCL").hide();
					$("#div_approveEditCL").hide();
					
					/*OL*/
					$("#div_request_approveOL").show().addClass("disabledAll");
					$("#div_approveOL").hide();
					$("#div_request_editOL").hide();
					$("#div_approveEditOL").hide();
					
					setting_page_auth("base_plan.jsp");
					setting_page_auth("rider_plan.jsp");
					setting_page_auth("product.jsp");
					setting_page_auth("product_rider.jsp");
					
				}else if(status == "APPROVED"){
					$("#div_request_approveCL").hide();
					$("#div_approveCL").hide();
					$("#div_request_editCL").show();
					$("#div_approveEditCL").hide();
					
					/*OL*/
					$("#div_request_approveOL").hide();
					$("#div_approveOL").hide();
					$("#div_request_editOL").show();
					$("#div_approveEditOL").hide();
					
					setting_page_auth("base_plan.jsp");
					setting_page_auth("rider_plan.jsp");
					setting_page_auth("product.jsp");
					setting_page_auth("product_rider.jsp");
					
				}else if(status == "REJECTED"){
					$("#div_request_approveCL").show().addClass("disabledAll")
					$("#div_approveCL").hide();
					$("#div_request_editCL").hide();
					$("#div_approveEditCL").hide();
					
					/*OL*/
					$("#div_request_approveOL").show().addClass("disabledAll");
					$("#div_approveOL").hide();
					$("#div_request_editOL").hide();
					$("#div_approveEditOL").hide();
					
				}else if(status == "REQUEST_UPDATE"){
					$("#div_request_approveCL").hide();
					$("#div_approveCL").hide();
					$("#div_request_editCL").show().addClass("disabledAll");
					$("#div_approveEditCL").hide();
					
					/*OL*/
					$("#div_request_approveOL").hide();
					$("#div_approveOL").hide();
					$("#div_request_editOL").show().addClass("disabledAll");
					$("#div_approveEditOL").hide();
					
					setting_page_auth("base_plan.jsp");
					setting_page_auth("rider_plan.jsp");
					setting_page_auth("product.jsp");
					setting_page_auth("product_rider.jsp");
					
				}
				
				$("#comment").val("เมื่อทำการขออนุมัติแล้ว ไม่สามารถแก้ไขรายละเอียดได้ แต่จะแก้ไขรายละเอียดได้ก็ต่อเมื่อแบบประกันนี้ไม่ผ่านการอนุมัติเท่านั้น ดังนั้น กรุณาตรวจสอบรายละเอียดแบบประกันนี้ให้ครบถ้วน โดยการคลิกที่ Tab ข้อมูลต่างๆ เพื่อตรวจสอบข้อมูลและแก้ไขข้อมูลให้ถูกต้องก่อนการขออนุมัติ");
				$("#comment_OL").val("เมื่อทำการขออนุมัติแล้ว ไม่สามารถแก้ไขรายละเอียดได้ แต่จะแก้ไขรายละเอียดได้ก็ต่อเมื่อแบบประกันนี้ไม่ผ่านการอนุมัติเท่านั้น ดังนั้น กรุณาตรวจสอบรายละเอียดแบบประกันนี้ให้ครบถ้วน โดยการคลิกที่ Tab ข้อมูลต่างๆ เพื่อตรวจสอบข้อมูลและแก้ไขข้อมูลให้ถูกต้องก่อนการขออนุมัติ");
			
			}else if(permission_approve == "1"){
				
				if(status == "NEW" || status == ""){
					$("#div_request_approveCL").show().addClass("disabledAll");
					$("#div_approveCL").hide();
					$("#div_request_editCL").hide();
					$("#div_approveEditCL").hide();
					
					$("#div_request_approveOL").show().addClass("disabledAll");
					$("#div_approveOL").hide();
					$("#div_request_editOL").hide();
					$("#div_approveEditOL").hide();
					
					if(status_PD == "NEW"){
						$("#status_policy").val("สร้างใหม่");
						$("#status_policy_OL").val("สร้างใหม่");
					}else if(status_PD == "REQUEST_FOR_APPROVE"){
						$("#status_policy").val("ขออนุมัติ");
						$("#status_policy_OL").val("ขออนุมัติ");
					}else if(status_PD == "APPROVED"){
						$("#status_policy").val("อนุมัติ");
						$("#status_policy_OL").val("อนุมัติ");
					}else if(status_PD == "REQUEST_UPDATE"){
						$("#status_policy").val("ขอแก้ไข");
						$("#status_policy_OL").val("ขอแก้ไข");
					}else if(status_PD == "REJECTED"){
						$("#status_policy").val("ไม่อนุมัติ");
						$("#status_policy_OL").val("ไม่อนุมัติ");
					}
					
				}else if(status == "UPDATE"){
					$("#div_request_approveCL").show().removeClass("disabledAll");
					$("#div_approveCL").hide();
					$("#div_request_editCL").hide();
					$("#div_approveEditCL").hide();
					
					/*OL*/
					$("#div_request_approveOL").show().removeClass("disabledAll");
					$("#div_approveOL").hide();
					$("#div_request_editOL").hide();
					$("#div_approveEditOL").hide();
					
					if(page == "base_plan.jsp" || page == "rider_plan.jsp"){
						if(status_RP == "NEW"){
							$("#div_approveCL, #div_approveOL").hide();
							$("#div_request_approveCL, #div_request_approveOL").show().addClass("disabledAll");
						}else if(status_RP == "UPDATE"){
							$("#div_approveCL, #div_approveOL").hide();
							$("#div_request_approveCL, #div_request_approveOL").show().removeClass("disabledAll");
						}else if(status_RP == "REQUEST_FOR_APPROVE"){
							$("#div_approveCL, #div_approveOL").addClass("disabledAll");
						}else if(status_RP == "REJECTED"){
							$("#div_approveCL, #div_approveOL").addClass("disabledAll");
						}else if(status_RP == "REQUEST_UPDATE"){
							$("#div_approveCL, #div_approveOL").addClass("disabledAll");
						}
					}else if(page == "product.jsp"){
						if(status_RP == "NEW"){
							$("#div_approveCL, #div_approveOL").hide();
							$("#div_request_approveCL, #div_request_approveOL").show().addClass("disabledAll");
						}else if(status_RP == "UPDATE"){
							$("#div_approveCL, #div_approveOL").hide();
							$("#div_request_approveCL, #div_request_approveOL").show();
						}else if(status_PD == "REQUEST_FOR_APPROVE"){
							$("#div_approveCL, #div_approveOL").addClass("disabledAll");
						}else if(status_PD == "REJECTED"){
							$("#div_approveCL, #div_approveOL").addClass("disabledAll");
						}else if(status_PD == "REQUEST_UPDATE"){
							$("#div_approveCL, #div_approveOL").addClass("disabledAll");
						}
					}
	
				}else if(status == "REQUEST_FOR_APPROVE"){

					$("#div_request_approveCL").hide();
					$("#div_approveCL").show().removeClass("disabledAll");
					$("#div_request_editCL").hide();
					$("#div_approveEditCL").hide();
					
					/*OL*/
					$("#div_request_approveOL").hide();
					$("#div_approveOL").show().removeClass("disabledAll");
					$("#div_request_editOL").hide();
					$("#div_approveEditOL").hide();
					
					setting_page_auth("base_plan.jsp");
					setting_page_auth("rider_plan.jsp");
					setting_page_auth("product.jsp");
					setting_page_auth("product_rider.jsp");
					
				}else if(status == "APPROVED"){
					$("#div_request_approveCL").hide();
					$("#div_approveCL").hide();
					$("#div_request_editCL").show();
					$("#div_approveEditCL").hide();
					
					/*OL*/
					$("#div_request_approveOL").hide();
					$("#div_approveOL").hide();
					$("#div_request_editOL").show();
					$("#div_approveEditOL").hide();
					
					setting_page_auth("base_plan.jsp");
					setting_page_auth("rider_plan.jsp");
					setting_page_auth("product.jsp");
					setting_page_auth("product_rider.jsp");
					
				}else if(status == "REJECTED"){
					$("#div_request_approveCL").hide();
					$("#div_approveCL").show().addClass("disabledAll");
					$("#div_request_editCL").hide();
					$("#div_approveEditCL").hide();
					
					/*OL*/
					$("#div_request_approveOL").hide();
					$("#div_approveOL").show().addClass("disabledAll");
					$("#div_request_editOL").hide();
					$("#div_approveEditOL").hide();
					
				}else if(status == "REQUEST_UPDATE"){
					$("#div_request_approveCL").hide();
					$("#div_approveCL").hide();
					$("#div_request_editCL").hide();
					$("#div_approveEditCL").show();
					
					/*OL*/
					$("#div_request_approveOL").hide();
					$("#div_approveOL").hide();
					$("#div_request_editOL").hide();
					$("#div_approveEditOL").show();
					
					setting_page_auth("base_plan.jsp");
					setting_page_auth("rider_plan.jsp");
					setting_page_auth("product.jsp");
					setting_page_auth("product_rider.jsp");
					
				}
				
				$("#comment").val("กรุณาตรวจสอบรายละเอียดนี้ให้ครบถ้วน โดยการคลิกที่ Tab ข้อมูลต่างๆ เพื่อตรวจสอบข้อมูลก่อนการอนุมัติ");
				$("#comment_OL").val("กรุณาตรวจสอบรายละเอียดนี้ให้ครบถ้วน โดยการคลิกที่ Tab ข้อมูลต่างๆ เพื่อตรวจสอบข้อมูลก่อนการอนุมัติ");
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
		$("#mainBenefit_CL input:checkbox, #mainBenefit_CL label, #tbody_dieL_CL, #tbody_dieR_CL, #die_CL button, #disabled_CL *").addClass("disabledAll_NotFade");
		$("#benefitView_CL").show();
		$("#benefitSubmit_CL").hide();
		
		/*OL*/
		$("#div_main_menuBasic_Info_OL input, #div_main_menuBasic_Info_OL button, #div_main_menuBasic_Info_OL select, #div_main_menuBasic_Info_OL label, #div_main_menuBasic_Info_OL textarea").addClass("disabledAll_NotFade");
		$("#tbl_BI_Mode_OL *, #tbl_BI_FilingCN_OL *, #tbl_BI_AgeCal_OL *, #tb_BasicInformation1_OL *, #tb_Sperately_Pay_ol *, #tb_allCalPM_OL *, #tb_TaxReduce_OL *").addClass("disabledAll_NotFade");
		$("#policy_OL *").addClass("disabledAll_NotFade");
		$("#div_main_menuOL_2 *").addClass("disabledAll_NotFade");
		$("#div_main_menuOL_3 label, #div_main_menuOL_3 input, #div_main_menuOL_3 select, #div_main_menuOL_3 button, #div_main_menuOL_3 span, #tb_PM_Rate1_OL *, #panel_extraRateOL *, #panel_SARateOL *").addClass("disabledAll_NotFade");
		$("#mainRisk_OL label, #mainRisk_OL input, #mainRisk_OL select, #mainRisk_OL button, #tb_RateValue1_OL *, #panel_noriskOL *").addClass("disabledAll_NotFade");
		$("#mainBenefit_OL input:checkbox, #mainBenefit_OL label, #tbody_dieL_OL, #tbody_dieR_OL, #die_OL button, #disabled_OL *").addClass("disabledAll_NotFade");
		$("#benefitView_OL").show();
		$("#benefitSubmit").hide();

	}else if(page == "rider_plan.jsp"){

		$("#div_main_menuBasic_Info input, #div_main_menuBasic_Info button, #div_main_menuBasic_Info select, #div_main_menuBasic_Info label, #div_main_menuBasic_Info textarea").addClass("disabledAll_NotFade");
		$("#tbl_BI_Mode_CL *, #tbl_BI_FilingCN_CL *, #tbl_BI_AgeCal_CL *, #tb_BasicInformation1 *, #tb_Sperately_Pay *, #tb_BasicInformation_Death *, #tb_BasicInformation_TPD *, #tb_TaxReduce *").addClass("disabledAll_NotFade");
		$("#policy_CL *").addClass("disabledAll_NotFade");
		$("#div_main_menuCL_8 *").addClass("disabledAll_NotFade");
		$("#div_main_menuCL_3 label, #div_main_menuCL_3 input, #div_main_menuCL_3 select, #div_main_menuCL_3 button, #div_main_menuCL_3 span, #tb_PM_Rate1 *, #panel_extraRateCL *, #panel_SARateCL *").addClass("disabledAll_NotFade");
		$("#mainPolicy label, #mainPolicy input, #mainPolicy select, #mainPolicy button, #tb_RateValue1 *, #panel_noriskCL *").addClass("disabledAll_NotFade");
		$("#mainBenefit_CL input:checkbox, #mainBenefit_CL label, #benefitDetail_CL input, #benefitDetail_CL select, #benefitDetail_CL textarea, #benefitDetail_CL a.open-EditBenefitDialog, #benefitDetail_CL button, #benefitDetail_CL a.open-SelectBenefitDialog").addClass("disabledAll_NotFade");
		$("#benefitDetail_CL .benefit_cv_box>div>label").addClass("disabledAll_NotFade");
		$("#benefitView_CL").show();
		$("#benefitSubmit_CL").hide();
		$("#tbl_benefit_CL").addClass("disabledAll_NotFade");
		$("#div_main_menuCL_9 *").addClass("disabledAll_NotFade");
		
		/*OL*/
		$("#div_main_menuBasic_Info_OL input, #div_main_menuBasic_Info_OL button, #div_main_menuBasic_Info_OL select, #div_main_menuBasic_Info_OL label, #div_main_menuBasic_Info_OL textarea").addClass("disabledAll_NotFade");
		$("#tbl_BI_Mode_OL *, #tbl_BI_FilingCN_OL *, #tbl_BI_AgeCal_OL *, #tb_BasicInformation1_OL *, #tb_Sperately_Pay_ol *, #tb_CalPremiumUse_ol *, #tb_allCalPM_OL *, #tb_TaxReduce_OL *").addClass("disabledAll_NotFade");
		$("#Policy_Table_OL *").addClass("disabledAll_NotFade");
		$("#div_main_menuOL_8 *").addClass("disabledAll_NotFade");
		$("#div_main_menuOL_3 label, #div_main_menuOL_3 input, #div_main_menuOL_3 select, #div_main_menuOL_3 button, #div_main_menuOL_3 span, #tb_PM_Rate1_OL *, #panel_extraRateOL *, #panel_SARateOL *").addClass("disabledAll_NotFade");
		$("#mainPolicy_OL label, #mainPolicy_OL input, #mainPolicy_OL select, #mainPolicy_OL button, #tb_RateValue1_OL *, #panel_noriskOL *").addClass("disabledAll_NotFade");
		$("#mainBenefit_OL input:checkbox, #mainBenefit_OL label, #benefitDetail_OL input, #benefitDetail_OL select, #benefitDetail_OL textarea, #benefitDetail_OL a.open-EditBenefitDialog_OL, #benefitDetail_OL button, #benefitDetail_OL a.open-open-SelectBenefitDialog_OL").addClass("disabledAll_NotFade");
		$("#benefitDetail_OL .benefit_cv_box>div>label").addClass("disabledAll_NotFade");
		$("#benefitView_OL").show();
		$("#benefitSubmit_OL").hide();
		$("#tbl_benefit_OL").addClass("disabledAll_NotFade");
		$("#div_main_menuOL_9 *").addClass("disabledAll_NotFade");
		
	}else if(page == "product.jsp"){
		$("#div_main_menuBasic_Info input, #div_main_menuBasic_Info button, #div_main_menuBasic_Info select, #div_main_menuBasic_Info label, #div_main_menuBasic_Info textarea").addClass("disabledAll_NotFade");
		$("#tb_PM_Rate *, #tb_Additional_contract *, #tb_ageRange_CL *, #tb_COOP_CL *, #tb_COOP_CL_2 *, #tb_COOP_CL_3 *").addClass("disabledAll_NotFade");
		$("#div_main_menuCL_3 input, #div_main_menuCL_3 button, #div_main_menuCL_3 select, #div_main_menuCL_3 label, #tb_Calculate_insurance *").addClass("disabledAll_NotFade");
		$("#div_main_menuCL_2 *").addClass("disabledAll_NotFade");
		$("#benefit_sale_CL input, #benefit_sale_CL button, #benefit_sale_CL label").addClass("disabledAll_NotFade");
		$("#warranty_term_CL input, #warranty_term_CL button, #warranty_term_CL select, #warranty_term_CL label, #warranty_term_CL textarea").addClass("disabledAll_NotFade");
		$("#tbl_increaseCOOP_premium_CL *, #tbl_COOP_masterPolicy_CL *").addClass("disabledAll_NotFade");
		
		/*OL*/
		$("#div_main_menuBasic_Info_OL input, #div_main_menuBasic_Info_OL button, #div_main_menuBasic_Info_OL select, #div_main_menuBasic_Info_OL label, #div_main_menuBasic_Info_OL textarea").addClass("disabledAll_NotFade");
		$("#tb_PM_Rate_OL *, #tb_Additional_contract_OL *, #tb_ageRange_OL").addClass("disabledAll_NotFade");
		$("#div_main_menuOL_3 input, #div_main_menuOL_3 button, #div_main_menuOL_3 select, #div_main_menuOL_3 label, #tb_Calculate_insurance2_OL *").addClass("disabledAll_NotFade");
		$("#div_main_menuOL_2 *").addClass("disabledAll_NotFade");
		$("#benefit_sale_OL input, #benefit_sale_OL label, #benefit_sale_OL button, #benefit_sale_OL select, #benefit_sale_OL textarea").addClass("disabledAll_NotFade");
		$("#tbl_SaleBenefitNormal_OL input, #tbl_SaleBenefitNormal_OL button, #tbl_SaleBenefitNormal_OL i").addClass("disabledAll_NotFade");
		$("#div_SaleHaveCondition_OL input, #div_SaleHaveCondition_OL button, #div_SaleHaveCondition_OL select, #div_SaleHaveCondition_OL i, #div_SaleHaveCondition_OL textarea, #div_SaleHaveCondition_OL label").addClass("disabledAll_NotFade");
		$("#warranty_term_OL input, #warranty_term_OL button, #warranty_term_OL select, #warranty_term_OL label, #warranty_term_OL textarea").addClass("disabledAll_NotFade");
		$("#tbl_insure_range_OL *, #tbl_modeTerms_OL2 *, #tbl_contractAmount_OL *, #tbl_contractInsure_OL *").addClass("disabledAll_NotFade");
	
	}else if(page == "product_rider.jsp"){
		$("#div_main_menuBasic_Info input, #div_main_menuBasic_Info button, #div_main_menuBasic_Info select, #div_main_menuBasic_Info label, #div_main_menuBasic_Info textarea").addClass("disabledAll_NotFade");
		$("#tb_Additional_contract *").addClass("disabledAll_NotFade");
		$("#div_main_menuCL_3 input, #div_main_menuCL_3 button, #div_main_menuCL_3 select, #div_main_menuCL_3 label, #tb_Calculate_insurance *").addClass("disabledAll_NotFade");
		$("#tb_Calculate_insurance2 *").addClass("disabledAll_NotFade");
		$("#tbl_benefit_sale_ol input, #tbl_benefit_sale_ol button, #tbl_benefit_sale_ol i").addClass("disabledAll_NotFade");
		$("#warranty_term_CL input, #warranty_term_CL button, #warranty_term_CL select, #warranty_term_CL label, #warranty_term_CL textarea").addClass("disabledAll_NotFade");
	}
}


function alertError_Login(message)
{
	$('#txt_alert_login_error').text(message);
	$('#modal_warning_login').modal();
}
