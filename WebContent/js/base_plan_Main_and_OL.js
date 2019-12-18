
  $('.auto').autoNumeric('init');

function validate(evt) {
  var theEvent = evt || window.event;

  // Handle paste
  if (theEvent.type === 'paste') {
      key = event.clipboardData.getData('text/plain');
  } else {
  // Handle key press
      var key = theEvent.keyCode || theEvent.which;
      key = String.fromCharCode(key);
  }
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}
/*-------------------------------------------------------*/

$("#bt_CreateInsurance").click(function(){
	  document.getElementById("ui-005").style.display = "none";
	  document.getElementById("ui-005_1").style.display = "block";
})

/* Check Radio Create Base Plan */
$("#rd_CreateBasePlan").click(function(){
	document.getElementById("ui-005_1_CreateBasePlan").style.display = "block";
	document.getElementById("ui-005_1_CloneBasePlan").style.display = "none";
	/*เรียก dropdown*/
	var dd_length = $("#main_contract option").length;

	if(dd_length <= 1){
		$.ajax({
	        type: "POST",
	        url : "BasePlanCL_Data_default_Servlet",
	        data: {
	        	method 	: "select_insurance_type",
	        },       
	        success : function(response) {	
	        	var main_contract1 = document.getElementById("main_contract");
		         for (var i = 0; i < response.main_contract1.length; i++) {
		        	 		var option 		= 	document.createElement("option");
		 					option.value 	= 	response.main_contract1[i].pass;
		 					option.text 	= 	response.main_contract1[i].text;
		 					main_contract1.add(option);
		         }
	        },
	        error : function(response) {	
	        	console.log("Baseplan Dropdown error");
	        }
		});
	}
})

/* Check Radio Clone Existing Base Plan */
$("#rd_CloneBasePlan").click(function(){
	  document.getElementById("ui-005_1_CloneBasePlan").style.display = "block";
	  document.getElementById("ui-005_1_CreateBasePlan").style.display = "none";

})

/*ปุ่ม ตกลง CreateNewBasePlan*/
$("#ui_005_1_Confirm").click(function(){

	var main_contract1 = $("#main_contract option:selected").text();	
	var main_contract2 = $("#main_contract2 option:selected").text();	
	var main_contract3 = $("#main_contract3 option:selected").text();	
	
	if(main_contract1 !== "--- กรุณาเลือก ---" && main_contract2 !== "--- กรุณาเลือก ---" && main_contract3 !== "--- กรุณาเลือก ---"){
	
		var ch_ui005_1 = document.getElementById("ch_ui005-1");
		var ch_ui005_2 = document.getElementById("ch_ui005-2");
		var ch_ui005_3 = document.getElementById("ch_ui005-3");
		var ch_ui005_4 = document.getElementById("ch_ui005-4");
		var ch_ui005_5 = document.getElementById("ch_ui005-5");
		var ch_ui005_7 = document.getElementById("ch_ui005-7");
	
	if(main_contract1 == "Group Life"){

		var menu_CL_1 = "";
		var menu_CL_2 = "";
		var menu_CL_3 = "";
		var menu_CL_4 = "";
		var menu_CL_5 = "";
		var menu_CL_6 = "";
		var menu_CL_7 = "";
				
		if (ch_ui005_1.checked == true) {
			document.getElementById("menu_CL_1").style.display = "block";
			menu_CL_1 = true;
		}else  {
			document.getElementById("menu_CL_1").style.display = "none";
			menu_CL_1 = false;
		}
		if (ch_ui005_2.checked == true) {
			document.getElementById("menu_CL_2").style.display = "block";
			menu_CL_2 = true;
		}else  {
			document.getElementById("menu_CL_2").style.display = "none";
			menu_CL_2 = false;
		}
		if (ch_ui005_3.checked == true) {
			document.getElementById("menu_CL_3").style.display = "block";
			menu_CL_3 = true;
		}else  {
			document.getElementById("menu_CL_3").style.display = "none";
			menu_CL_3 = false;
		}
		if (ch_ui005_4.checked == true) {
			document.getElementById("menu_CL_4").style.display = "block";
			menu_CL_4 = true;
		}else  {
			document.getElementById("menu_CL_4").style.display = "none";
			menu_CL_4 = false;
		}
		if (ch_ui005_5.checked == true) {
			document.getElementById("menu_CL_5").style.display = "block";
			menu_CL_5 = true;
		}else  {
			document.getElementById("menu_CL_5").style.display = "none";
			menu_CL_5 = false;
		}
		document.getElementById("menu_CL_6").style.display = "block"; ///เปิดTab อนุมัติเสมอ
		menu_CL_6 = true;
		
		if (ch_ui005_7.checked == true) {
			document.getElementById("menu_CL_7").style.display = "block";
			menu_CL_7 = true;
		}else  {
			document.getElementById("menu_CL_7").style.display = "none";
			menu_CL_7 = false;
		}
		/**************************************/
		
		if (ch_ui005_1.checked == true ){
			 var element = document.getElementById("menu_CL_1");
			 element.classList.add("active");  
			document.getElementById("cl_005_1_1-1").style.display = "block";
		}
		if (ch_ui005_1.checked == false && ch_ui005_7.checked == true){
			var element = document.getElementById("menu_CL_7");
			 element.classList.add("active");  
			document.getElementById("cl_005_1_1-7").style.display = "block";
		}
		if (ch_ui005_1.checked == false && ch_ui005_2.checked == false && ch_ui005_3.checked == false  
				&& ch_ui005_4.checked == true && ch_ui005_7.checked == false ){
			var element = document.getElementById("menu_CL_4");
			 element.classList.add("active");  
			document.getElementById("cl_005_1_1-4").style.display = "block";
		}
		if (ch_ui005_1.checked == false && ch_ui005_2.checked == false && ch_ui005_3.checked == false  
				&& ch_ui005_4.checked == false && ch_ui005_5.checked == true && ch_ui005_7.checked == false){
			var element = document.getElementById("menu_CL_5");
			 element.classList.add("active");  
			document.getElementById("cl_005_1_1-5").style.display = "block";
		}
		if (ch_ui005_1.checked == false && ch_ui005_2.checked == false && ch_ui005_3.checked == false 
				&& ch_ui005_4.checked == false && ch_ui005_5.checked == false && ch_ui005_7.checked == false){
			var element = document.getElementById("menu_CL_6");
			 element.classList.add("active");  
			document.getElementById("cl_005_1_1-6").style.display = "block";
		}
		document.getElementById("ui-005_1").style.display = "none";
		document.getElementById("ui-005").style.display = "none";
		document.getElementById("ui005_Menu").style.display = "block";
		document.getElementById("ui-005_1_CreateBasePlan").style.display = "none";
	}else{
		var menu_OL_1 = "";
		var menu_OL_2 = "";
		var menu_OL_3 = "";
		var menu_OL_4 = "";
		var menu_OL_5 = "";
		var menu_OL_6 = "";
		var menu_OL_7 = "";
		
		if (ch_ui005_1.checked == true) {
			document.getElementById("menu_OL_1").style.display = "block";
			menu_OL_1 = true;
		}else  {
			document.getElementById("menu_OL_1").style.display = "none";
			menu_OL_1 = false;
		}
		if (ch_ui005_2.checked == true) {
			document.getElementById("menu_OL_2").style.display = "block";
			menu_OL_2 = true;
		}else  {
			document.getElementById("menu_OL_2").style.display = "none";
			menu_OL_2 = false;
		}
		if (ch_ui005_3.checked == true) {
			document.getElementById("menu_OL_3").style.display = "block";
			menu_OL_3 = true;
		}else  {
			document.getElementById("menu_OL_3").style.display = "none";
			menu_OL_3 = false;
		}
		if (ch_ui005_4.checked == true) {
			document.getElementById("menu_OL_4").style.display = "block";
			menu_OL_4 = true;
		}else  {
			document.getElementById("menu_OL_4").style.display = "none";
			menu_OL_4 = false;
		}
		if (ch_ui005_5.checked == true) {
			document.getElementById("menu_OL_5").style.display = "block";
			menu_OL_5 = true;
		}else  {
			document.getElementById("menu_OL_5").style.display = "none";
			menu_OL_5 = false;
		}
		document.getElementById("menu_OL_6").style.display = "block"; ///เปิดTab อนุมัติเสมอ
		menu_OL_6 = true;
		
		if (ch_ui005_7.checked == true) {
			document.getElementById("menu_OL_7").style.display = "block";
			menu_OL_7 = true;
		}else  {
			document.getElementById("menu_OL_7").style.display = "none";
			menu_OL_7 = false;
		}
		/**************************************/
		
		if (ch_ui005_1.checked == true ){
			 var element = document.getElementById("menu_OL_1");
			 element.classList.add("active");  
			document.getElementById("ol_005_1_1-1").style.display = "block";
		}
		if (ch_ui005_1.checked == false && ch_ui005_7.checked == true){
			var element = document.getElementById("menu_OL_7");
			 element.classList.add("active");  
			document.getElementById("ol_005_1_1-7").style.display = "block";
		}
		if (ch_ui005_1.checked == false && ch_ui005_2.checked == false && ch_ui005_3.checked == false  
				&& ch_ui005_4.checked == true && ch_ui005_7.checked == false ){
			var element = document.getElementById("menu_OL_4");
			 element.classList.add("active");  
			document.getElementById("ol_005_1_1-4").style.display = "block";
		}
		if (ch_ui005_1.checked == false && ch_ui005_2.checked == false && ch_ui005_3.checked == false  
				&& ch_ui005_4.checked == false && ch_ui005_5.checked == true && ch_ui005_7.checked == false){
			var element = document.getElementById("menu_OL_5");
			 element.classList.add("active");  
			document.getElementById("ol_005_1_1-5").style.display = "block";
		}
		if (ch_ui005_1.checked == false && ch_ui005_2.checked == false && ch_ui005_3.checked == false 
				&& ch_ui005_4.checked == false && ch_ui005_5.checked == false && ch_ui005_7.checked == false){
			var element = document.getElementById("menu_OL_6");
			 element.classList.add("active");  
			document.getElementById("ol_005_1_1-6").style.display = "block";
		}
		document.getElementById("ui-005_1").style.display = "none";
		document.getElementById("ui-005").style.display = "none";
		document.getElementById("ui005_Menu").style.display = "block";
		document.getElementById("ui-005_1_CreateBasePlan").style.display = "none";
		
	}
	
	////Benz Test call Setvlet 17-12-2018
	var main_contract1_val = $("#main_contract option:selected").val();	
	var main_contract2_val = $("#main_contract2 option:selected").val();	
	var main_contract3_val = $("#main_contract3 option:selected").val();	
	
	var ch_ui005_1 = document.getElementById("ch_ui005-1");
	var ch_ui005_2 = document.getElementById("ch_ui005-2");
	var ch_ui005_3 = document.getElementById("ch_ui005-3");
	var ch_ui005_4 = document.getElementById("ch_ui005-4");
	var ch_ui005_5 = document.getElementById("ch_ui005-5");
	var ch_ui005_7 = document.getElementById("ch_ui005-7");
	
	if(main_contract1 == "Group Life"){
    	menu_1 = menu_CL_1;
    	menu_2 = menu_CL_2;
    	menu_3 = menu_CL_3;
    	menu_4 = menu_CL_4;
    	menu_5 = menu_CL_5;
    	menu_6 = menu_CL_6;
    	menu_7 = menu_CL_7;
	 }else{
		menu_1 = menu_OL_1;
    	menu_2 = menu_OL_2;
    	menu_3 = menu_OL_3;
    	menu_4 = menu_OL_4;
    	menu_5 = menu_OL_5;
    	menu_6 = menu_OL_6;
    	menu_7 = menu_OL_7;		 
	 }
	
	var main_contracttype = "1";
	var datajson = "";
	datajson = {
	        	method 				: "create_Base_Plan",
	        	main_contract1 		: main_contract1_val,
	        	main_contract2 		: main_contract2_val,
	        	main_contract3 		: main_contract3_val,
	        	main_contracttype	: main_contracttype,
	        	menu_CL_1			: menu_1,
	        	menu_CL_2 			: menu_2,
	        	menu_CL_3 			: menu_3,
	        	menu_CL_4 			: menu_4,
	        	menu_CL_5 			: menu_5,
	        	menu_CL_6 			: menu_6,
	        	menu_CL_7 			: menu_7,
	        	groupName			: $("#groupName").val(),
	}
	
	if(main_contract1 == "Group Life"){
		console.log("data>>"+datajson);
		$.ajax({
		    type: "POST",
		    url : "BasePlanCL_Data_default_Servlet",
		    data: datajson,       
		    success : function(response) {	
		    	$('#pass_Insurance_coverage_cl').val(response.Tab_Basic_Information[0].passInsurance);
		    	
		    	setting_LookupApproveCL(response);
		    	
		    	if(ch_ui005_1.checked == true){
	        		show_basicInfo_data(response);
	        	}
	        	if(ch_ui005_7.checked == true){
	        		show_policyWording_data(response);
	        	}
	        	if(ch_ui005_2.checked == true){
	        		show_privilege_insurance_data(response);
	        	}
	        	if(ch_ui005_3.checked == true){        		
	        		$("#baseplanCode_CL").val($("#pass_Insurance_coverage_cl").val());
	        		show_cal_premium_data(response);
	        	}
	        	if(ch_ui005_4.checked == true){
	        		show_PolicyValue_data(response);
	        	}
	        	if(ch_ui005_5.checked == true){
	        		show_BenefitValue_data(response);
	        	}
	        	
	        	
	        	/***  CODE FOR PREPARE AND SEND MAIL  ****//*
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
					objEmail["name_TH"] 			="";
					objEmail["name_EN"] 			="";
					
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
				
				
				*//***  END CODE FOR PREPARE AND SEND MAIL  ****//*
	        	*/
	        	
	        	
		    },
		    error : function(response) {	
		    	console.log("Baseplan create Lookup error")
		    }
		});
	}else{
		/*OL*/
		$.ajax({
		    type: "POST",
		    url : "BasePlanOL_Data_default_Servlet",
		    data: datajson,       
		    success : function(response) {	
		    	$('#pass_Insurance_coverage_ol').val(response.Tab_Basic_Information[0].passInsurance);
	        	if (response.check[0].status == true) {	
			    	setting_LookupApproveOL(response);
			    	
			    	if(ch_ui005_1.checked == true){
			    		show_basicInfo_data_OL(response);
		        	}
		        	if(ch_ui005_7.checked == true){
		        		show_policyWording_data_OL(response);
		        	}
		        	if(ch_ui005_2.checked == true){
		        		show_privilege_insurance_data_OL(response);
		        	}
		        	if(ch_ui005_3.checked == true){        		
		        		$("#baseplanCode_OL").val($("#pass_Insurance_coverage_ol").val());
		        		show_cal_premium_data_OL(response);
		        	}
		        	if(ch_ui005_4.checked == true){
		        		show_PolicyValue_data_OL(response);
		        	}
		        	if(ch_ui005_5.checked == true){
		        		show_BenefitValue_data_OL(response);
		        	}
	        	}else {
	        		var message = "เกิดความผิดพลาดในการเชื่อมต่อ กรุณาทำการเข้าสู่ระบบอีกครั้ง !!";
		    		alertError_Login(message);
		    		$("#modal_warning_login .modal-body button.close").click(function(){
		    			window.location.href = 'login.jsp';
		    		});
	        	}	
	        	/***  CODE FOR PREPARE AND SEND MAIL  ****//*
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
					objEmail["name_TH"] 			="";
					objEmail["name_EN"] 			="";
					
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
				*//***  END CODE FOR PREPARE AND SEND MAIL  ****/
					
		    },
		    error : function(response) {	
		    	console.log("Baseplan create Lookup error")
		    }
		});	
	}
	
}else{
	alert("กรุณาเลือกแบบประกัน")
}
})

/*Open Modal*/
$("#bt_Clone_0").click(function(){
        $("#clone_Modal").modal();
        document.getElementById("ui-005_1_CloneBasePlan").style.display = "none";
});


/*---------*/

$("#bt_Clone").click(function(){ 
	document.getElementById("menu_CL_1").style.display = "block";
	var element = document.getElementById("menu_CL_1");
	 element.classList.add("active");
	document.getElementById("cl_005_1_1-1").style.display = "block";
	document.getElementById("menu_CL_2").style.display = "block";
	document.getElementById("menu_CL_3").style.display = "block";
	document.getElementById("menu_CL_4").style.display = "block";
	document.getElementById("menu_CL_5").style.display = "block";
	document.getElementById("menu_CL_6").style.display = "block";
	document.getElementById("menu_CL_7").style.display = "block";
	
	document.getElementById("ui-005_1").style.display = "none";
	document.getElementById("ui-005").style.display = "none";
	document.getElementById("ui005_Menu").style.display = "block";
})

/*ปุ่มยกลิก UI-005.1*/
$("#ui_005_1_Cancel").click(function(){
	document.getElementById("ui-005_1").style.display = "none";
	document.getElementById("ui-005_1_CreateBasePlan").style.display = "none";
	document.getElementById("ui-005").style.display = "block";
	/************/
	document.getElementById("rd_CreateBasePlan").checked = false;
	
})
$("#ui_005_2_Cancel").click(function(){
	document.getElementById("ui-005_1").style.display = "none";
	document.getElementById("ui-005_1_CloneBasePlan").style.display = "none";
	document.getElementById("ui-005").style.display = "block";
	/************/
	document.getElementById("rd_CloneBasePlan").checked = false;
})

/*เมนู OL*/
$("#menu_OL_1").click(function(){
	document.getElementById("ol_005_1_1-1").style.display = "block";
	document.getElementById("ol_005_1_1-2").style.display = "none";
	document.getElementById("ol_005_1_1-3").style.display = "none";
	document.getElementById("ol_005_1_1-4").style.display = "none";
	document.getElementById("ol_005_1_1-5").style.display = "none";
	document.getElementById("ol_005_1_1-6").style.display = "none";
})
$("#menu_OL_2").click(function(){
	document.getElementById("ol_005_1_1-2").style.display = "block";
	document.getElementById("ol_005_1_1-1").style.display = "none";
	document.getElementById("ol_005_1_1-3").style.display = "none";
	document.getElementById("ol_005_1_1-4").style.display = "none";
	document.getElementById("ol_005_1_1-5").style.display = "none";
	document.getElementById("ol_005_1_1-6").style.display = "none";
})
$("#menu_OL_3").click(function(){
	document.getElementById("ol_005_1_1-3").style.display = "block";
	document.getElementById("ol_005_1_1-1").style.display = "none";
	document.getElementById("ol_005_1_1-2").style.display = "none";
	document.getElementById("ol_005_1_1-4").style.display = "none";
	document.getElementById("ol_005_1_1-5").style.display = "none";
	document.getElementById("ol_005_1_1-6").style.display = "none";
})
$("#menu_OL_4").click(function(){
	document.getElementById("ol_005_1_1-4").style.display = "block";
	document.getElementById("ol_005_1_1-1").style.display = "none";
	document.getElementById("ol_005_1_1-2").style.display = "none";
	document.getElementById("ol_005_1_1-3").style.display = "none";
	document.getElementById("ol_005_1_1-5").style.display = "none";
	document.getElementById("ol_005_1_1-6").style.display = "none";
})
$("#menu_OL_5").click(function(){
	document.getElementById("ol_005_1_1-5").style.display = "block";
	document.getElementById("ol_005_1_1-1").style.display = "none";
	document.getElementById("ol_005_1_1-2").style.display = "none";
	document.getElementById("ol_005_1_1-3").style.display = "none";
	document.getElementById("ol_005_1_1-4").style.display = "none";
	document.getElementById("ol_005_1_1-6").style.display = "none";
})
$("#menu_OL_6").click(function(){
	document.getElementById("ol_005_1_1-6").style.display = "block";
	document.getElementById("ol_005_1_1-1").style.display = "none";
	document.getElementById("ol_005_1_1-2").style.display = "none";
	document.getElementById("ol_005_1_1-3").style.display = "none";
	document.getElementById("ol_005_1_1-4").style.display = "none";
	document.getElementById("ol_005_1_1-5").style.display = "none";
})
/*************************menu-1  ****************************/
	function checkappStart() {
			var dateto  = $('#appTo_date').val();
			var dateto_split		= dateto.split("/");
			var dateto_day			= dateto_split[0];
			var dateto_month		= dateto_split[1];
			var dateto_year			= dateto_split[2];
			var date_to	= dateto_day + 	dateto_month + dateto_year ;
			var appStart_date  = $('#appStart_date').val();
			var appStart_split		= appStart_date.split("/");
			var appStart_day		= appStart_split[0];
			var appStart_month		= appStart_split[1];
			var appStart_year		= appStart_split[2];
			var date_start = appStart_day + appStart_month + appStart_year ;
							
			if ( date_start >= date_to){
				alert ("กรุณาเลือกวันที่ให้ถูกต้อง");
				$('#appStart_date').val("");
				$("#validate_input4").show();
			}
			if (appStart_date != ""){
				$("#validate_input4").hide();
			}else {
				$("#validate_input4").show();
			}
	}
	function checkappTo() {
		var dateto  = $('#appTo_date').val();
		var dateto_split		= dateto.split("/");
		var dateto_day			= dateto_split[0];
		var dateto_month		= dateto_split[1];
		var dateto_year			= dateto_split[2];
		var date_to	= dateto_day + 	dateto_month + dateto_year ;
		var appStart_date  = $('#appStart_date').val();
		var appStart_split		= appStart_date.split("/");
		var appStart_day		= appStart_split[0];
		var appStart_month		= appStart_split[1];
		var appStart_year		= appStart_split[2];
		var date_start = appStart_day + appStart_month + appStart_year ;
						
		if ( date_to <= date_start){
			alert ("กรุณาเลือกวันที่ให้ถูกต้อง");
			$('#appTo_date').val("");
			$("#validate_input5").show();
		}
		if(dateto != "") {
			$("#validate_input5").hide();
		}else {
			$("#validate_input5").show();
		}
	}

$("#mode0").click(function(){
	var mode0 = document.getElementById("mode0");
	var mode1 = document.getElementById("mode1");
	var mode2 = document.getElementById("mode2");
	var mode4 = document.getElementById("mode4");
	if (mode0.checked == true || mode1.checked == true || mode2.checked == true || mode4.checked == true ) {
		document.getElementById("mode8").disabled = true;
		document.getElementById("mode9").disabled = true;
		$("#validate_input8").hide();
	}else{
		document.getElementById("mode8").disabled = false;
		document.getElementById("mode9").disabled = false;
		$("#validate_input8").show();
	}
	
});

$("#rd_anniversary").click(function(){	
	var rd_anniversary = document.getElementById("rd_anniversary");
	if (rd_anniversary.checked == true) {
		document.getElementById("text_anniversary").disabled = false;
		document.getElementById("dmy_1").disabled = false;
		document.getElementById("text_Time_length").disabled = true;
		$('#text_Time_length').val("");
		$("#validate_input15").show();
		document.getElementById("dmy_2").disabled = true;
	}
});
$("#rd_Time_length").click(function(){	
	var rd_Time_length = document.getElementById("rd_Time_length");
	if (rd_Time_length.checked == true) {
		document.getElementById("text_Time_length").disabled = false;
		document.getElementById("text_anniversary").disabled = true;
		document.getElementById("dmy_2").disabled = false;
		$('#text_anniversary').val("");
		$("#validate_input15").show();
		document.getElementById("dmy_1").disabled = true;
	}
});
$("#rd_insurance_premium").click(function(){	
	var rd_insurance_premium = document.getElementById("rd_insurance_premium");
	if (rd_insurance_premium.checked == true) {
		document.getElementById("text_insurance_premium").disabled = false;
		document.getElementById("text_Time_insurance_premium").disabled = true;
		
		document.getElementById("dmy_3").disabled = false;
		$('#text_Time_insurance_premium').val("");
		$("#validate_input16").show();
		document.getElementById("dmy_4").disabled = true;
	}
});
$("#rd_Time_insurance_premium").click(function(){	
	var rd_Time_insurance_premium = document.getElementById("rd_Time_insurance_premium");
	if (rd_Time_insurance_premium.checked == true) {
		document.getElementById("text_Time_insurance_premium").disabled = false;
		document.getElementById("text_insurance_premium").disabled = true;
		document.getElementById("dmy_4").disabled = false;
		$('#text_insurance_premium').val("");
		$("#validate_input16").show();
		document.getElementById("dmy_3").disabled = true;
	}
});

/**************   Validate  key input data    *********************/ 
function pass_Insurance_coverage() {
	var pass_Insurance_coverage  = $('#pass_Insurance_coverage').val();
	if (pass_Insurance_coverage != "") {
		$("#validate_input1").hide();
	}else{
		$("#validate_input1").show();
	}
}
function thai_Name() {
	var thai_Name  = $('#thai_Name').val();
	if (thai_Name != "") {
		$("#validate_input2").hide();
	}else{
		$("#validate_input2").show();
	}
}
function eng_Name() {
	var eng_Name  = $('#eng_Name').val();
	if (eng_Name != "") {
		$("#validate_input3").hide();
	}else{
		$("#validate_input3").show();
	}
}
function age_Start() {
	var age_Start  = $('#age_Start').val();
	if (age_Start != "") {
		$("#validate_input6").hide();
	}else{
		$("#validate_input6").show();
	}
}
function age_To() {
	var age_To  = $('#age_To').val();
	if (age_To != "") {
		$("#validate_input7").hide();
	}else{
		$("#validate_input7").show();
	}
}
//Filing Channel
var ch_Tied_Agency = document.getElementById("ch_Tied_Agency");
var ch_Bancassurance = document.getElementById("ch_Bancassurance");
var ch_Telemarketing = document.getElementById("ch_Telemarketing");
var ch_Electronic = document.getElementById("ch_Electronic");
var ch_registrar = document.getElementById("ch_registrar");
function filing_Channel() {
	if (ch_Tied_Agency.checked == true || ch_Bancassurance.checked == true || ch_Telemarketing.checked == true
		|| ch_Electronic.checked == true || ch_registrar.checked == true) {
		$("#validate_input9").hide();
	}else {
		$("#validate_input9").show();
	}
}
//Sale Channel
var ch_Agent = document.getElementById("ch_Agent");
var ch_Commercial_Bank = document.getElementById("ch_Commercial_Bank");
var ch_Public_Bank = document.getElementById("ch_Public_Bank");
var ch_Direct = document.getElementById("ch_Direct");
var ch_Group = document.getElementById("ch_Group");
var ch_Consumer = document.getElementById("ch_Consumer");
var ch_Leasing = document.getElementById("ch_Leasing");
var ch_Electronic2 = document.getElementById("ch_Electronic2");
function sale_Channel() {
	if (ch_Agent.checked == true || ch_Commercial_Bank.checked == true || ch_Public_Bank.checked == true || ch_Direct.checked == true
			|| ch_Group.checked == true || ch_Consumer.checked == true || ch_Leasing.checked == true
			|| ch_Electronic2.checked == true) {
		$("#validate_input10").hide();
	}else {
		$("#validate_input10").show();
	}
}

//เพศ
$("#ch_male").click(function(){
	var ch_male = document.getElementById("ch_male");
	var ch_female = document.getElementById("ch_female");
	if (ch_male.checked == true && ch_female.checked == false 
		|| ch_male.checked == false && ch_female.checked == true 
		|| ch_male.checked == true && ch_female.checked == true) {
		$("#validate_input11").hide();
	}else {
		$("#validate_input11").show();
	}
});
$("#ch_female").click(function(){
	var ch_male = document.getElementById("ch_male");
	var ch_female = document.getElementById("ch_female");
	if (ch_male.checked == true && ch_female.checked == false 
		|| ch_male.checked == false && ch_female.checked == true 
		|| ch_male.checked == true && ch_female.checked == true) {
		$("#validate_input11").hide();
	}else {
		$("#validate_input11").show();
	}
});
//เบี้ยประกัน
function sl_insurance_premium() {
	var sl_insurance_premium  = $('#sl_insurance_premium').val();
	if (sl_insurance_premium != "") {
		$("#validate_input12").hide();
	}else{
		$("#validate_input12").show();
	}
}
function sl_Protection_type() {
	var sl_Protection_type  = $('#sl_Protection_type').val();
	if (sl_Protection_type != "") {
		$("#validate_input13").hide();
	}else{
		$("#validate_input13").show();
	}
}
function sl_promise_type() {
	var sl_promise_type  = $('#sl_promise_type').val();
	if (sl_promise_type != "") {
		$("#validate_input14").hide();
	}else{
		$("#validate_input14").show();
	}
}
//ระยะประกันของสัญญาประกันชีวิต
function text_anniversary() {
	var text_anniversary  = $('#text_anniversary').val();
	if (text_anniversary != "") {
		$("#validate_input15").hide();
	}else{
		$("#validate_input15").show();
	}
}
function text_Time_length() {
	var text_Time_length  = $('#text_Time_length').val();
	if (text_Time_length != "") {
		$("#validate_input15").hide();
	}else{
		$("#validate_input15").show();
	}
}
function text_insurance_premium() {
	var text_insurance_premium  = $('#text_insurance_premium').val();
	if (text_insurance_premium != "") {
		$("#validate_input16").hide();
	}else{
		$("#validate_input16").show();
	}
}
function text_Time_insurance_premium() {
	var text_Time_insurance_premium  = $('#text_Time_insurance_premium').val();
	if (text_Time_insurance_premium != "") {
		$("#validate_input16").hide();
	}else{
		$("#validate_input16").show();
	}
}
//อัตราดอกเบี้ยที่ใช้ในการคำนวนเบี้ยประกัน
function text_Calculate_premiums() {
	var text_Calculate_premiums  = $('#text_Calculate_premiums').val();
	if (text_Calculate_premiums != "") {
		$("#validate_input17").hide();
	}else{
		$("#validate_input17").show();
	}
}
/********************************************************/
/***************บันทึก****************/
function bt_Menu1_Confirm() {
	var message = "";
	var pass_Insurance_coverage = $('#pass_Insurance_coverage').val();
	var thai_Name 				= $('#thai_Name').val();
	var eng_Name 				= $('#eng_Name').val();
	var appStart_date 			= $('#appStart_date').val();
	var appTo_date 				= $('#appTo_date').val();
	var age_Start 				= $('#age_Start').val();
	var age_To 					= $('#age_To').val();
	
	var ch_male = document.getElementById("ch_male");
	var ch_female = document.getElementById("ch_female");
	
	var sl_insurance_premium 			= $('#sl_insurance_premium').val();
	var sl_Protection_type 				= $('#sl_Protection_type').val();
	var sl_promise_type 				= $('#sl_promise_type').val();
	
	var text_anniversary 				= $('#text_anniversary').val();
	var text_Time_length 				= $('#text_Time_length').val();
	
	var text_insurance_premium 			= $('#text_insurance_premium').val();
	var text_Time_insurance_premium 	= $('#text_Time_insurance_premium').val();
	var text_Calculate_premiums 		= $('#text_Calculate_premiums').val();
	var sl_tax_Break 					= $('#sl_tax_Break').val();

	var mode0 = document.getElementById("mode0");
	var mode1 = document.getElementById("mode1");
	var mode2 = document.getElementById("mode2");
	var mode4 = document.getElementById("mode4");
	var mode8 = document.getElementById("mode8");
	var mode9 = document.getElementById("mode9");
	
	var ch_Tied_Agency 		= document.getElementById("ch_Tied_Agency");
	var ch_Bancassurance 	= document.getElementById("ch_Bancassurance");
	var ch_Telemarketing	= document.getElementById("ch_Telemarketing");
	var ch_Electronic 		= document.getElementById("ch_Electronic");
	var ch_registrar		= document.getElementById("ch_registrar");
	
	var ch_Agent = document.getElementById("ch_Agent");
	var ch_Commercial_Bank = document.getElementById("ch_Commercial_Bank");
	var ch_Public_Bank = document.getElementById("ch_Public_Bank");
	var ch_Direct = document.getElementById("ch_Direct");
	var ch_Group = document.getElementById("ch_Group");
	var ch_Leasing = document.getElementById("ch_Leasing");
	var ch_Consumer = document.getElementById("ch_Consumer");
	var ch_Electronic2 = document.getElementById("ch_Electronic2");
	
	
	if (pass_Insurance_coverage == "" || thai_Name  == "" || eng_Name  == "" || appStart_date == "" 
				|| appStart_date == "" || appTo_date == "" || age_Start == "" || age_To == "" || sl_insurance_premium == ""
				|| sl_Protection_type == "" || sl_promise_type == "" 	|| text_anniversary == "" && text_Time_length == ""
				|| text_insurance_premium == "" && text_Time_insurance_premium == "" || text_Calculate_premiums == "" 
				|| sl_tax_Break == "" || ch_male.checked == false && ch_female.checked == false || mode0.checked == false 
				&& mode1.checked == false && mode2.checked == false && mode4.checked == false && mode8.checked == false 
				&& mode9.checked == false || ch_Tied_Agency.checked == false && ch_Bancassurance.checked == false  
				&& ch_Telemarketing.checked == false && ch_Electronic.checked == false && ch_registrar.checked == false
				|| ch_Agent.checked == false && ch_Commercial_Bank.checked == false && ch_Public_Bank.checked == false  
				&& ch_Direct.checked == false && ch_Group.checked == false && ch_Leasing.checked == false 
				&& ch_Consumer.checked == false && ch_Electronic2.checked == false){
		
		//$('#check_addValue').modal('show');
		message = "กรุณาระบุข้อมูลให้ครบ";
		alertError(message);
		
	}else{
		var message = "บันทึกข้อมูลเรียบร้อย";
		 alertSuccess(message);
	}
}
function bt_Menu1_Canceled(status) {
	  window.location = "base_plan.jsp?user="+status;
}
/********************************************************/
/*************************menu-2 ****************************/
/**** ETI ****/
$("#ch_ETI").click(function(){	
	var ch_ETI = document.getElementById("ch_ETI");
	if (ch_ETI.checked == true) {
		document.getElementById("sel_ETI").disabled = false;
		checkPhaseETI();
	}else{
		document.getElementById("sel_ETI").disabled = true;
		checkPhaseETI();
	}
})
$("#ch_AutoETI").click(function(){
	var ch_AutoETI = document.getElementById("ch_AutoETI");
	if (ch_AutoETI.checked == true) {
		document.getElementById("sel_AutoETI").disabled = false;
		checkPhaseETI();
	}else{
		document.getElementById("sel_AutoETI").disabled = true;
		checkPhaseETI();
	}
	
})
function checkPhaseETI() {
	var checketi = document.getElementById("sel_ETI").disabled;
	var checkautoETI = document.getElementById("sel_AutoETI").disabled;
	if (checketi == false ){
		document.getElementById("ch_PhaseETI").disabled = false;
		document.getElementById("sel_PhaseETI").disabled = false;
	}else if (checkautoETI == false){
		document.getElementById("ch_PhaseETI").disabled = false;
		document.getElementById("sel_PhaseETI").disabled = false;
	}else{
		document.getElementById("ch_PhaseETI").disabled = true;
		document.getElementById("sel_PhaseETI").disabled = true;
	}
}
/**** RPU ****/
$("#ch_RPU").click(function(){
	var ch_RPU = document.getElementById("ch_RPU");
	if (ch_RPU.checked == true) {
		document.getElementById("sel_RPU").disabled = false;
		checkPhaseRPU();
		check_APL_Auto ();
	}else{
		document.getElementById("sel_RPU").disabled = true;
		checkPhaseRPU();
		check_APL_Auto();
	}
})
$("#ch_AutoRPU").click(function(){
	var ch_AutoRPU = document.getElementById("ch_AutoRPU");
	if (ch_AutoRPU.checked == true) {
		document.getElementById("sel_AutoRPU").disabled = false;
		checkPhaseRPU();
		check_APL_Auto ();
	}else{
		document.getElementById("sel_AutoRPU").disabled = true;
		checkPhaseRPU();
		check_APL_Auto();
	}
	
})

function checkPhaseRPU() {
	var checkrpu = document.getElementById("sel_RPU").disabled;
	var checkautoRPU = document.getElementById("sel_AutoRPU").disabled;
	if (checkrpu == false){
		document.getElementById("ch_PhaseRPU").disabled = false;
		document.getElementById("sel_PhaseRPU").disabled = false;
	}else if (checkautoRPU == false){
		document.getElementById("ch_PhaseRPU").disabled = false;
		document.getElementById("sel_PhaseRPU").disabled = false;
	}else{
		document.getElementById("ch_PhaseRPU").disabled = true;
		document.getElementById("sel_PhaseRPU").disabled = true;
	}
}

function check_APL_Auto() {
	var ch_RPU = document.getElementById("ch_RPU");
	var ch_AutoRPU = document.getElementById("ch_AutoRPU");
	
	if (ch_RPU.checked == true && ch_AutoRPU.checked == true) {
		document.getElementById("ch_APL_Auto").disabled = false;
		document.getElementById("apl_Auto").disabled = false;
	}else{
		document.getElementById("ch_APL_Auto").disabled = true;
		document.getElementById("apl_Auto").disabled = true;
	}
}

function bt_Menu2_Confirm() {
	var ch_ETI = document.getElementById("ch_ETI");
	var ch_AutoETI = document.getElementById("ch_AutoETI");
	var ch_PhaseETI = document.getElementById("ch_PhaseETI");
	
	var ch_RPU = document.getElementById("ch_RPU");
	var ch_AutoRPU = document.getElementById("ch_AutoRPU");
	var ch_PhaseRPU = document.getElementById("ch_PhaseRPU");
	
	if (ch_RPU.checked == true && ch_PhaseRPU.checked == true && ch_ETI.checked == false && ch_PhaseETI.checked == false ||
		ch_RPU.checked == false && ch_PhaseRPU.checked == false && ch_ETI.checked == true && ch_PhaseETI.checked == true ||	
		ch_RPU.checked == true && ch_PhaseRPU.checked == true && ch_ETI.checked == true && ch_PhaseETI.checked == true) {
		var message = "บันทึกข้อมูลเรียบร้อย";
		alertSuccess(message);
	}else {
		message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
		alertError(message);
	}
}
$("#sel_PhaseETI").click(function(){
	var sel_PhaseETI 	= $('#sel_PhaseETI').val();
	if (sel_PhaseETI == "2"){
		document.getElementById("eti_year").disabled = false;
		document.getElementById("dmy_2_1").disabled = false;
	}else{
		document.getElementById("eti_year").disabled = true;
		document.getElementById("dmy_2_1").disabled = true;
		 $('#eti_year').val("");
	}
});
$("#sel_PhaseRPU").click(function(){
	var sel_PhaseRPU 	= $('#sel_PhaseRPU').val();
	if (sel_PhaseRPU == "2"){
		document.getElementById("rpu_year").disabled = false;
		document.getElementById("dmy_2_2").disabled = false;
	}else{
		document.getElementById("rpu_year").disabled = true;
		document.getElementById("dmy_2_2").disabled = true;
		 $('#rpu_year').val("");
	}
});

function bt_Menu2_Canceled() {
	  window.location = "base_plan.jsp";

}
/**************************menu-3**************************/
//	เบี้ยมาตรฐาน
$("#ch_standard_premium").click(function(){
	var ch_standard_premium = document.getElementById("ch_standard_premium");
	if (ch_standard_premium.checked == true){
		document.getElementById("rd_cal_insurance").disabled = false;
		document.getElementById("rd_cal_capital").disabled = false;
	}else {
		document.getElementById("rd_cal_insurance").disabled = true;
		document.getElementById("rd_cal_capital").disabled = true;
		
		/**เบี้ยมาตรฐาน**/
		document.getElementById("rd_cal_insurance").checked = false;
		document.getElementById("rd_cal_capital").checked = false;
		/**คำนวณเบี้ยจากทุนประกัน**/
		document.getElementById("sl_insurance_premium").disabled = true;
		document.getElementById("menu3_inputfile_1").disabled = true;
		document.getElementById("ch_calInsurance").disabled = true;
		document.getElementById("ch_importInsurance").disabled = true;
		document.getElementById("menu3_inputfile_2").disabled = true;
		document.getElementById("expenses_pension").disabled = true;
		/**คำนวณทุนจากเบี้ยประกัน**/
		document.getElementById("sl_Capital_Insurance").disabled = true;
		document.getElementById("menu3_inputfile_3").disabled = true;
	}
	
});
//	คำนวณเบี้ยจากทุนประกัน
$("#rd_cal_insurance").click(function(){
	var rd_cal_insurance = document.getElementById("rd_cal_insurance");
	if (rd_cal_insurance.checked == true){
		document.getElementById("sl_menu3_insurance_premium").disabled = false;
		document.getElementById("menu3_inputfile_1").disabled = false;
		document.getElementById("ch_calInsurance").disabled = false;
		document.getElementById("ch_importInsurance").disabled = false;
		document.getElementById("menu3_inputfile_2").disabled = false;
		document.getElementById("expenses_pension").disabled = false;
		/****/
		document.getElementById("sl_Capital_Insurance").disabled = true;
		document.getElementById("menu3_inputfile_3").disabled = true;
	}
});
//	คำนวณทุนจากเบี้ยประกัน
$("#rd_cal_capital").click(function(){
	var rd_cal_capital = document.getElementById("rd_cal_capital");
	if (rd_cal_capital.checked == true){
		document.getElementById("sl_Capital_Insurance").disabled = false;
		document.getElementById("menu3_inputfile_3").disabled = false;
		/****/
		document.getElementById("sl_menu3_insurance_premium").disabled = true;
		document.getElementById("menu3_inputfile_1").disabled = true;
		document.getElementById("ch_calInsurance").disabled = true;
		document.getElementById("ch_importInsurance").disabled = true;
		document.getElementById("menu3_inputfile_2").disabled = true;
		document.getElementById("expenses_pension").disabled = true;
	}
});

//	เบี้ยเพิ่มพิเศษ
$("#ch_insurance_premium_Extra").click(function(){
	var ch_insurance_premium_Extra = document.getElementById("ch_insurance_premium_Extra");
	if (ch_insurance_premium_Extra.checked == true){
		document.getElementById("sl_insurance_premium_Extra").disabled = false;
		document.getElementById("min_EM").disabled = false;
		document.getElementById("max_EM").disabled = false;
		document.getElementById("menu3_inputfile_4").disabled = false;
	}else{
		document.getElementById("sl_insurance_premium_Extra").disabled = true;
		document.getElementById("min_EM").disabled = true;
		document.getElementById("max_EM").disabled = true;
		document.getElementById("menu3_inputfile_4").disabled = true;
	}
});
// 	ทุนคุ้มครองที่ลดลง
$("#ch_Reduced_capital").click(function(){
	var ch_Reduced_capital = document.getElementById("ch_Reduced_capital");
	if (ch_Reduced_capital.checked == true){
		document.getElementById("sl_Reduced_capital").disabled = false;
		document.getElementById("menu3_inputfile_5").disabled = false;
	}else{
		document.getElementById("sl_Reduced_capital").disabled = true;
		document.getElementById("menu3_inputfile_5").disabled = true;
	}
});

function bt_Menu3_Confirm() {
	//เคลียค่า 	เบี้ยมาตรฐาน
	var ch_standard_premium = document.getElementById("ch_standard_premium");
	if (ch_standard_premium.checked == true){
		var rd_cal_insurance = document.getElementById("rd_cal_insurance");
		if (rd_cal_insurance.checked == false){
			  document.getElementById("sl_menu3_insurance_premium").value = "0";
			  $('#text_menu3_inputfile_1').val("");
			  document.getElementById("ch_calInsurance").checked = false;
			  document.getElementById("ch_importInsurance").checked = false;
			  $('#text_menu3_inputfile_2').val("");
			  $('#expenses_pension').val("");
		}
		var rd_cal_capital = document.getElementById("rd_cal_capital");
		if (rd_cal_capital.checked == false){
			  document.getElementById("sl_Capital_Insurance").value = "0";
			  $('#text_menu3_inputfile_3').val("");
		}
	}
	//เคลียค่า 	เบี้ยเพิ่มพิเศษ
	var ch_insurance_premium_Extra = document.getElementById("ch_insurance_premium_Extra");
	if (ch_insurance_premium_Extra.checked == false){
		 document.getElementById("sl_insurance_premium_Extra").value = "0";
		 $('#min_EM').val("");
		 $('#max_EM').val("");
		 $('#text_menu3_inputfile_4').val("");
		
	}
	//เคลียค่า 	ทุนคุ้มครองที่ลดลง
	var ch_Reduced_capital = document.getElementById("ch_Reduced_capital");
	if (ch_Reduced_capital.checked == false){
		 document.getElementById("sl_Reduced_capital").value = "0";
		 $('#text_menu3_inputfile_5').val("");
	}
	
	var message = "บันทึกข้อมูลเรียบร้อย";
	alertSuccess(message);
}

function bt_Menu3_Canceled() {
	  window.location = "base_plan.jsp";

}
/**********************************************************/
/***** UploadFile **********/
$(function() {
	//เลือกไฟล์หน้า ข้อมูลทั่วไป Basic Information
		$("#select_file_1").change(function(){
	    var input = $(this),
	        numFiles = input.get(0).files ? input.get(0).files.length : 1,
	        label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
	        if (label != ""){
	        	$("#validate_input18").hide();
	        }else {
	        	$("#validate_input18").show();
	        }
	        	        
	        input.trigger('fileselect', [numFiles, label]);
	        
	  });
/*---------------------------------------------------*/
	 $(document).on('change', ':file', function() {
		    var input = $(this),
		        numFiles = input.get(0).files ? input.get(0).files.length : 1,
		        label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
		    input.trigger('fileselect', [numFiles, label]);
		  });
	  // We can watch for our custom `fileselect` event like this
	  $(document).ready( function() {
		  $(':file').on('fileselect', function(event, numFiles, label) {
	          var input = $(this).parents('.input-group').find(':text'),
	              log = numFiles > 1 ? numFiles + ' files selected' : label;

	          if( input.length ) {
	              input.val(log);
	          } else {
	              if( log ) ;
	          }

	      });		 		  
	  });
	});
/*****************ดึง baseplan ทั้งหมด*************/
$(document).ready( function() {
	$.ajax({
        type: "POST",
        url : "BasePlanCL_GetData_Servlet",
        data: {
        	method 	: "getBasePlanCL",
        }, 
        beforeSend: function(){
        	jQuery("#status").show();
        	jQuery("#preloader").show();
        },
        success : function(response) {	
        	ShowDataBasePlanCL(response);
        	ShowDataBasePlanCL_Clone(response);
        },
        complete:function(){
            // Hide image container
        	jQuery("#status").fadeOut();
        	jQuery("#preloader").delay(1000).fadeOut("slow");
        },
        error : function(response) {	
        	console.log("Get Baseplan List error");
        }
	});
});

function ShowDataBasePlanCL(value) {
	//Permission
	//SetUserPermission();
	
	var insurance_No = "";
	var nameTH	 	 = "";
	var nameEN		 = "";
	var status		 = "";
	var row = "";
	var cov_type = "";
	var ii = 0;
	$('#table_PrimaryInsurance').DataTable().destroy();
	$("#table_PrimaryInsurance tbody").find("tr").remove();
	for(var i = 0; i < value.BasePlanCL_Data.length; i++){
		/*if(ii%2 == 0){
			cov_type = "O";
		}else{
			cov_type = "O";
		}*/
		ii++;
		
		insurance_No = value.BasePlanCL_Data[i].insuranceNo;
		nameTH		 = value.BasePlanCL_Data[i].nameTH;
		nameEN		 = value.BasePlanCL_Data[i].nameEN;
		status		 = value.BasePlanCL_Data[i].status;
		row = 	"<tr>" +	
			"<td class=\"col-sm-2 text-center"+"\" onclick=\"GetPlan('"+i+"','"+insurance_No+"')"+"\" style=\"text-decoration: underline;color:blue; cursor:pointer;"+"\">"+insurance_No+"</td>"+
			"<td class=\"col-sm-4 text-center"+"\">"+nameTH+"</td>"+
			"<td class=\"col-sm-4 text-center"+"\">"+nameEN+"</td>"+
			"<td class=\"col-sm-2 text-center"+"\">"+status+"</td>"+
			"</tr>";			  
		$("#table_PrimaryInsurance tbody").append(row);
	}
	$('#table_PrimaryInsurance').DataTable({     
	      "aLengthMenu": [[15, 30, 45, -1], [15, 30, 45, "All"]],
	       "iDisplayLength": 15,
	       "scrollY": 560,
	       "language": {
	    	    "search": "รหัสความคุ้มครองสัญญาหลัก/ชื่อ(ไทย)/ชื่อ(อังกฤษ):"
	    	},
	       //"ordering": false,
	       "order": []
	});
	
	$("#table_PrimaryInsurance_wrapper>div:nth-child(1)>div:first-child").css("width","45%");
	/*$("table.dataTable thead th:nth-child(1)").css("width","22%");
	$("table.dataTable tbody td:nth-child(1)").css("width","22%");
	$("table.dataTable thead th:nth-child(1)").removeClass("sorting_asc");*/
}
//Benz set Clone 25-10-2019
function ShowDataBasePlanCL_Clone(value) {
	//Permission
	//SetUserPermission();
	
	var insurance_No = "";
	var nameTH	 	 = "";
	var nameEN		 = "";
	var status		 = "";
	var approved	 = "อนุมัติ";
	var row = "";
	var cov_type = "";
	var ii = 0;
	$('#table_PrimaryInsurance2').DataTable().destroy();
	$("#table_PrimaryInsurance2 tbody").find("tr").remove();
	for(var i = 0; i < value.BasePlanCL_Data.length; i++){
		/*if(ii%2 == 0){
			cov_type = "O";
		}else{
			cov_type = "O";
		}*/
		ii++;
		
		insurance_No = value.BasePlanCL_Data[i].insuranceNo;
		nameTH		 = value.BasePlanCL_Data[i].nameTH;
		nameEN		 = value.BasePlanCL_Data[i].nameEN;
		status		 = value.BasePlanCL_Data[i].status;
		if (status.trim() == approved.trim()) {
			row = 	"<tr>" +	
			"<td class=\"col-sm-2 text-center"+"\">"+insurance_No+"</td>"+
			"<td class=\"col-sm-4 text-center"+"\">"+nameTH+"</td>"+
			"<td class=\"col-sm-4 text-center"+"\">"+nameEN+"</td>"+
			"<td class=\"col-sm-2 text-center"+"\">"+"<button class=\"btn btn-primary"+"\" onclick=\"GetClone('"+i+"','"+insurance_No+"')"+"\">"+"Clone"+"</button>"+"</td>"+
			"</tr>";			  
		$("#table_PrimaryInsurance2 tbody").append(row);
		}
		
	}
	$('#table_PrimaryInsurance2').DataTable({     
	      "aLengthMenu": [[15, 30, 45, -1], [15, 30, 45, "All"]],
	       "iDisplayLength": 15,
	       "scrollY": 550,
	       "language": {
	    	    "search": "รหัสความคุ้มครองสัญญาหลัก/ชื่อ(ไทย)/ชื่อ(อังกฤษ):"
	    	},
	       //"ordering": false,
	       "order": []
	});
	/*$("#table_PrimaryInsurance2_wrapper .dataTables_scrollHeadInner").css({"width":"100%"});
	$("#table_PrimaryInsurance2_wrapper .table").css({"width":"100%"});
	$("#table_PrimaryInsurance2_wrapper .dataTables_filter").find('input[type="search"]').css({"width":"30%"});
	$("#table_PrimaryInsurance2_wrapper .dataTables_scrollHeadInner th").css({"width":""});
	$("#table_PrimaryInsurance_wrapper>div:nth-child(1)>div:first-child").css("width","45%");*/
	/*$("table.dataTable thead th:nth-child(1)").css("width","22%");
	$("table.dataTable tbody td:nth-child(1)").css("width","22%");
	$("table.dataTable thead th:nth-child(1)").removeClass("sorting_asc");*/
	
	$("#table_PrimaryInsurance2_wrapper>div:nth-child(1)>div:first-child").css("width","44%");
	$("#table_PrimaryInsurance2_wrapper .dataTables_scrollHeadInner").css({"width":"100%"});
	$("#table_PrimaryInsurance2_wrapper .table").css({"width":"100%"});
	$("#table_PrimaryInsurance2_wrapper thead th:nth-child(1)").css("width","117px");
	$("#table_PrimaryInsurance2_wrapper thead th:nth-child(2)").css("width","258px");
	$("#table_PrimaryInsurance2_wrapper thead th:nth-child(3)").css("width","259px");
	$("#table_PrimaryInsurance2_wrapper .dataTables_scrollBody").css("margin-bottom", "20px");
	
}
/***********UI-005_1_1-5***********************By Tee*/
var dropdownA = "<select class='form-control width-initial'>"+
					"<option class='active'>None</option>"+
				"</select>";


var dropdownRefund = "<select class='form-control item-i' style='margin: 0; padding: 0;' onchange='ddRefund();'>"+
										"<option value='0'>เงินคืน</option>"+
										"<option value='2'>None</option>"+
									"</select>";


var dropdownUnit = "<select class='form-control' style='margin: 0; padding: 0;' >"+
						"<option value='0'>บาท</option>"+
						"<option value='0'>เปอร์เซ็นต์</option>"+
						"<option value='0'>None</option>"+
				   "</select>";


var dropdownFactor = "<select class='form-control' style='margin: 0; padding: 0;' >"+
						"<option value='0'>ทุนประกัน</option>"+
						"<option value='0'>เบี้ยประกัน</option>"+
						"<option value='0'>None</option>"+
					 "</select>";


var dropdownCaltype = "<select class='form-control' style='margin: 0; padding: 0;' >"+
						"<option value='0'>ปีกรมธรรม์</option>"+
						"<option value='0'>ปีครบชำระเบี้ย</option>"+
						"<option value='0'>ปีที่ครบกำหนดสัญญา</option>"+
						"<option value='0'>อายุผู้เอาประกัน</option>"+
						"<option value='0'>None</option>"+
					 "</select>";

var dropdownMax = "<select class='form-control width-initial'>"+
					"<option>Max</option>"+
					"<option>Sum</option>"+
				  	"<option selected>None</option>"+
				  "</select>";

var dropdownSa = "<select class='form-control width-initial'>"+
					"<option>SA</option>"+
				  	"<option selected>None</option>"+
				  "</select>";

var dropdownPremium = "<select class='form-control width-initial'>"+
						"<option>Accu</option>"+
						"<option>YRT</option>"+
					  	"<option selected>None</option>"+
					  "</select>";

var dropdownCvPv = "<select class='form-control width-initial'>"+
						"<option>CV</option>"+
						"<option>PV บำนาญ</option>"+
					  	"<option selected>None</option>"+
					  "</select>";

var dropdownOther = "<select class='form-control width-initial'>"+
						"<option>เงินปันผลสะสม</option>"+
						"<option>กองทุนรักษาพยาบาล</option>"+
						"<option>ทุนลดตามตาราง</option>"+
					  	"<option selected>None</option>"+
					  "</select>";

var dropdownADB1 = "<select class='form-control width-initial'>"+
						"<option>And</option>"+
						"<option>Or</option>"+
					  	"<option selected>None</option>"+
					  "</select>";

var dropdownADB2 = "<select class='form-control width-initial'>"+
						"<option>Accu Premium</option>"+
						"<option>SA</option>"+
						"<option>Fix</option>"+
					  	"<option selected>None</option>"+
					  "</select>";

var dropdownFromTo = "<select class='form-control width-initial' style='margin: 0;width: 100%;'>"+
						"<option selected>None</option>"+
						"<option>วัน</option>"+
						"<option>เดือน</option>"+
						"<option>ปี</option>"+
						"<option>อายุ</option>"+
					  "</select>";

var dropdownDividendType = "<select class='form-control width-initial' style='margin: 0;width: 100%;padding: 0;'>"+
								"<option selected>ครบชำระเบี้ยประกัน</option>"+
								"<option>ครบกำหนดสัญญา</option>"+
								"<option>ระหว่างสัญญา</option>"+
						   "</select>";


function changeDisplayBenefit005(type)
	{
		if(type == 0)
			{
				$('#aDie').css("display", "none");
				$('#aContract').css("display", "none");
				$('#aRefund').css("display", "none");
				$('#aPension').css("display", "none");
				$('#aMedical').css("display", "none");
				$('#aDividend').css("display", "none");
				
				$("#mainBenefit_OL").css("display", "block");
				$("#benefitDetail_OL").css("display", "none");
			}
		if(type == 1)
			{
				controlTabBenefit();
				
			}
		if(type == 2)
			{
				$("#oldTable").css("display", "none");
				$("#newTable").css("display", "block");
			}
		if(type == 3)
			{
				$("#oldTable").css("display", "block");
				$("#newTable").css("display", "none");
			}
	}

function controlTabBenefit()
{
	var cbDie = $('#cbDie').prop('checked');
	var cbContract = $('#cbContract').prop('checked');
	var cbRefund = $('#cbRefund').prop('checked');
	var cbPension = $('#cbPension').prop('checked');
	var cbMedical = $('#cbMedical').prop('checked');
	var cbDividend = $('#cbDividend').prop('checked');
	
	if(cbDie == true)
		{
			$('#tabDie').attr("class","active");
			$('#tabContract').attr("class","");
			$('#tabRefund').attr("class","");
			$('#tabPension').attr("class","");
			$('#tabMedical').attr("class","");
			$('#tabDividend').attr("class","");
		}else if(cbContract == true)
			{
				$('#tabContract').attr("class","active");
			}else if(cbRefund == true)
				{
					$('#tabRefund').attr("class","active");
				}else if(cbPension == true)
					{
						$('#tabPension').attr("class","active");
					}else if(cbMedical == true)
						{
							$('#tabMedical').attr("class","active");
						}else if(cbDividend == true)
							{
								$('#tabDividend').attr("class","active");
							}
	
	if(cbDie == true)$('#aDie').css("display", "block");
	if(cbContract == true)$('#aContract').css("display", "block");
	if(cbRefund == true)$('#aRefund').css("display", "block");
	if(cbPension == true)$('#aPension').css("display", "block");
	if(cbMedical == true)$('#aMedical').css("display", "block");
	if(cbDividend == true)$('#aDividend').css("display", "block");
	
	setTimeout(() => {
		$("#mainBenefit_OL").css("display", "none");
		$("#benefitDetail_OL").css("display", "block");
	}, 30);
}

function addBenefitDie(){
	
	var lastImgOK = $('#benefit_die >tbody>tr:last>td:first').attr("id") || 0;
	var numberImgOK = 0;
	
	if(lastImgOK == 0){
		numberImgOK = 1;
	}else{
		numberImgOK = Number(lastImgOK.replace("imgOK_",""))+1;
	}
	
	var newID = "imgOK_"+numberImgOK;
	var ftOnclick = 'imgCheckbox("'+newID+'");';
	
	var row = "";
	row = "<tr id='tbody_die"+numberImgOK+"'>"+
		  						"<td width='50' class='text-center' id="+"'"+newID+"'"+" onclick='"+ftOnclick+"' style='vertical-align: middle;'><i class='glyphicon glyphicon-edit'></i></td>"+
								"<td width='50'><input id='die_fromYear"+numberImgOK+"' type='text' class='form-control margin-padding0 text-center width-inherit' value='-'></td>"+
								"<td width='50'><input id='die_fromAge"+numberImgOK+"' type='text' class='form-control margin-padding0 text-center width-inherit' value='-'></td>"+
								"<td width='50'><input id='die_toYear"+numberImgOK+"' type='text' class='form-control margin-padding0 text-center width-inherit' value='-'></td>"+
								"<td width='50'><input id='die_toAge"+numberImgOK+"' type='text' class='form-control margin-padding0 text-center width-inherit' value='-'></td>"+
								"<td width='200' class='text-center'>"+dropdownMax+"</td>"+
								"<td width='200'><input id='die_sa"+numberImgOK+"' type='text' class='form-control margin-padding0 text-center width80px' value='-'></td>"+
								"<td width='200' class='text-center'>"+dropdownSa+"</td>"+
								"<td width='200'><input id='die_premium"+numberImgOK+"' type='text' class='form-control margin-padding0 text-center width80px' value='-'></td>"+
								"<td width='200' class='text-center'>"+dropdownPremium+"</td>"+
								"<td width='200' class='verticalCenter text-center'><input id='die_checkbox"+numberImgOK+"' type='checkbox'></td>"+
								"<td width='200'><input id='die_cvpv"+numberImgOK+"' type='text' class='form-control margin-padding0 text-center width80px' value='-'></td>"+
								"<td width='200' class='text-center'>"+dropdownCvPv+"</td>"+
								"<td width='200' class='text-center'>"+dropdownOther+"</td>"+
								"<td width='200' class='text-center'>"+dropdownADB1+"</td>"+
								"<td width='200'><input id='adb"+numberImgOK+"' type='text' class='form-control margin-padding0 text-center width80px' value='-'></td>"+
								"<td width='400' class='text-center'>"+dropdownADB2+"</td>"+
		  "</tr>";
	
	$("#benefit_die tbody").append(row);
}

function addBenefitRefund(){
	
	var typeMoney = $('select.item-i').val() || 0;
	
//	if(Number(typeMoney) != 1)
//		{
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
//										"<td width='200' class='borderBlack'>"+dropdownRefund+"</td>"+
										"<td width='75' class='borderBlack'><input id='refund_fromYear"+numberImgOK+"' class='form-control   text-center' type='text' width='50' value='0'></td>"+
										"<td width='75' class='borderBlack'><input id='refund_fromAge"+numberImgOK+"' class='form-control text-center' type='text' width='50' value='-'></td>"+
										"<td width='75' class='borderBlack'><input id='refund_toYear"+numberImgOK+"' class='form-control text-center' type='text' width='50' value='0'></td>"+
										"<td width='75' class='borderBlack'><input id='refund_toAge"+numberImgOK+"' class='form-control text-center' type='text' width='50' value='-'></td>"+
										"<td width='100' class='borderBlack'><input id='refund_year"+numberImgOK+"' class='form-control text-center' type='text' width='50' value=''></td>"+
										"<td width='200' class='borderBlack'><input id='refund_amount"+numberImgOK+"' class='form-control text-right' type='text' width='50' value='0.00'></td>"+
										"<td width='200' class='text-center borderBlack'>"+dropdownUnit+"</td>"+
										"<td width='200' class='text-center borderBlack'>"+dropdownFactor+"</td>"+
										"<td width='200' class='text-center borderBlack'>"+dropdownCaltype+"</td>"+
				  "</tr>";
			
			$("#benefit_refund tbody").append(row);
			
}

function addBenefitPenSion(){
	
	var lastImgOK = $('#benefit_pension >tbody>tr:last>td:first').attr("id") || 0;
	var numberImgOK = 0;
	
	if(lastImgOK == 0){
		numberImgOK = 1;
	}else{
		numberImgOK = Number(lastImgOK.replace("imgOK_pension",""))+1;
	}
	
	var newID = "imgOK_pension"+numberImgOK;
	var ftOnclick = 'imgCheckbox("'+newID+'");';
	
	var row = "";
	row = "<tr id='tbody_pension"+numberImgOK+"'>"+
			"<td width='50' class='text-center verticalCenter borderBlack' id="+"'"+newID+"'"+" onclick='"+ftOnclick+"' ><i class='glyphicon glyphicon-edit'></i></td>"+
			"<td width='50' class='borderBlack'><input id='pension_fromYear"+numberImgOK+"' class='form-control text-center' type='text' value='-'></td>"+
			"<td width='50' class='borderBlack'><input id='pension_fromAge"+numberImgOK+"' class='form-control text-center' type='text' value='0'></td>"+
			"<td width='50' class='borderBlack'><input id='pension_toYear"+numberImgOK+"' class='form-control text-center' type='text' value='-'></td>"+
			"<td width='50' class='borderBlack'><input id='pension_toAge"+numberImgOK+"' class='form-control text-center' type='text' value='0'></td>"+
			"<td width='100' class='borderBlack'><input id='pension_year"+numberImgOK+"' class='form-control text-right' type='text' value='0'></td>"+
			"<td width='200' class='borderBlack'><input id='pension_amount"+numberImgOK+"' class='form-control text-right' type='text' value='0.00'></td>"+
			"<td width='200' class='text-center borderBlack'>"+dropdownUnit+"</td>"+
			"<td width='300' class='text-center borderBlack'>"+dropdownFactor+"</td>"+
		  "</tr>";
	
	$("#benefit_pension tbody").append(row);
}

function addBenefitMedical(){
	
	var lastImgOK = $('#benefit_medical >tbody>tr:last>td:first').attr("id") || 0;
	var numberImgOK = 0;
	
	if(lastImgOK == 0){
		numberImgOK = 1;
	}else{
		numberImgOK = Number(lastImgOK.replace("imgOK_medical",""))+1;
	}
	
	var newID = "imgOK_medical"+numberImgOK;
	var ftOnclick = 'imgCheckbox("'+newID+'");';
	
	var row = "";
	row = "<tr id='tbody_medical"+numberImgOK+"'>"+
			"<td width='50' class='text-center verticalCenter borderBlack' id="+"'"+newID+"'"+" onclick='"+ftOnclick+"' ><i class='glyphicon glyphicon-edit'></i></td>"+
			"<td width='50' class='borderBlack'><input id='medical_fromYear"+numberImgOK+"' class='form-control text-center' type='text' value='0'></td>"+
			"<td width='50' class='borderBlack'><input id='medical_fromAge"+numberImgOK+"' class='form-control text-center' type='text' value='-'></td>"+
			"<td width='50' class='borderBlack'><input id='medical_toYear"+numberImgOK+"' class='form-control text-center' type='text' value='-'></td>"+
			"<td width='50' class='borderBlack'><input id='medical_toAge"+numberImgOK+"' class='form-control text-center' type='text' value='0'></td>"+
			"<td width='100' class='borderBlack'><input id='medical_year"+numberImgOK+"' class='form-control text-right' type='text' value='0'></td>"+
			"<td width='200' class='borderBlack'><input id='medical_amount"+numberImgOK+"' class='form-control text-right' type='text' value='0.00'></td>"+
			"<td width='200' class='text-center borderBlack'>"+dropdownUnit+"</td>"+
			"<td width='300' class='text-center borderBlack'>"+dropdownFactor+"</td>"+
			"<td width='300' class='text-center borderBlack'>"+dropdownCaltype+"</td>"+
		  "</tr>";
	
	$("#benefit_medical tbody").append(row);
}


function addBenefitDividend(){
	
	var lastImgOK = $('#benefit_dividend >tbody>tr:last>td:first').attr("id") || 0;
	var numberImgOK = 0;
	
	if(lastImgOK == 0){
		numberImgOK = 1;
	}else{
		numberImgOK = Number(lastImgOK.replace("imgOK_dividend",""))+1;
	}
	
	var newID = "imgOK_dividend"+numberImgOK;
	var ftOnclick = 'imgCheckbox("'+newID+'");';
	
	var row = "";
	row = "<tr id='tbody_dividend"+numberImgOK+"'>"+
				"<td class='text-center verticalCenter borderBlack' id="+"'"+newID+"'"+" onclick='"+ftOnclick+"' ><i class='glyphicon glyphicon-edit'></i></td>"+
				"<td class='text-center borderBlack'>"+dropdownDividendType+"</td>"+
				"<td class='verticalCenter borderBlack' style='margin:0;padding: 0;'><input class='from-control text-center' type='text' value='-' style='width: 60px;height: 80%;'></td>"+
				"<td class='verticalCenter borderBlack' style='margin:0;padding: 0;'><input class='from-control text-center' type='text' value='-' style='width: 60px;height: 80%;'></td>"+
				"<td class='text-center borderBlack'>"+dropdownUnit+"</td>"+
				"<td class='text-center borderBlack'>"+dropdownFactor+"</td>"+
				"<td class='text-center borderBlack'>"+dropdownCaltype+"</td>"+
				"</tr>";
	
	$("#benefit_dividend tbody").append(row);
}

function deleteAll()
	{
		findTableDieDeleteNew();
		findTableRefundDelete();
		findTablePensionDelete();
		findTableMedicalDelete();
		findTableDividendDelete();
	}

function findTableDieDelete()
	{
		var lastImgOK = $('#benefit_die >tbody>tr:last>td:first').attr("id");
		var numberImgOK = Number(lastImgOK.replace("imgOK_",""))+1;
		
		for(var i = 1;i<=numberImgOK;i++)
			{
				var checked = $('#tbody_die'+i+' >td:first>i').attr("class");
				if(checked == "glyphicon glyphicon-ok")
					{
						deleteTableRow('#tbody_die'+i);
					}
			}
	}

function findTableDieDeleteNew()
{
	var lastImgOK = $('#tbody_dieL >tbody>tr:last>td:first').attr("id");
	var numberImgOK = Number(lastImgOK.replace("imgOK_",""));
	
	for(var i = 1;i<=numberImgOK;i++)
		{
			var checked = $('#tbody_dieL'+i+' >td:first>i').attr("class");
			if(checked == "glyphicon glyphicon-ok")
				{
					deleteTableRow('#tbody_dieL'+i);
					deleteTableRow('#tbody_dieR'+i);
				}
		}
}

function findTableRefundDelete()
	{
		var lastImgOK = $('#benefit_refund >tbody>tr:last>td:first').attr("id");
		var numberImgOK = Number(lastImgOK.replace("imgOK_refund",""))+1;
		
		for(var i = 1;i<=numberImgOK;i++)
			{
				var checked = $('#tbody_refund'+i+' >td:first>i').attr("class");
				if(checked == "glyphicon glyphicon-ok")
					{
						deleteTableRow('#tbody_refund'+i);
					}
			}
	}

function findTablePensionDelete()
	{
		var lastImgOK = $('#benefit_pension >tbody>tr:last>td:first').attr("id");
		var numberImgOK = Number(lastImgOK.replace("imgOK_pension",""))+1;
		
		for(var i = 1;i<=numberImgOK;i++)
			{
				var checked = $('#tbody_pension'+i+' >td:first>i').attr("class");
				if(checked == "glyphicon glyphicon-ok")
					{
						deleteTableRow('#tbody_pension'+i);
					}
			}
	}

function findTableMedicalDelete()
	{
		var lastImgOK = $('#benefit_medical >tbody>tr:last>td:first').attr("id");
		var numberImgOK = Number(lastImgOK.replace("imgOK_medical",""))+1;
		
		for(var i = 1;i<=numberImgOK;i++)
			{
				var checked = $('#tbody_medical'+i+' >td:first>i').attr("class");
				if(checked == "glyphicon glyphicon-ok")
					{
						deleteTableRow('#tbody_medical'+i);
					}
			}
	}

function findTableDividendDelete()
	{
		var lastImgOK = $('#benefit_dividend >tbody>tr:last>td:first').attr("id");
		var numberImgOK = Number(lastImgOK.replace("imgOK_dividend",""))+1;
		
		for(var i = 1;i<=numberImgOK;i++)
			{
				var checked = $('#tbody_dividend'+i+' >td:first>i').attr("class");
				if(checked == "glyphicon glyphicon-ok")
					{
						deleteTableRow('#tbody_dividend'+i);
					}
			}
	}

function deleteTableRow(id)
{
	$(id).remove();
}

function controlSubmitBenefit()
{
		var cbDie = $('#cbDie').prop('checked');
		var cbContract = $('#cbContract').prop('checked');
		var cbRefund = $('#cbRefund').prop('checked');
		var cbPension = $('#cbPension').prop('checked');
		var cbMedical = $('#cbMedical').prop('checked');
		var cbDividend = $('#cbDividend').prop('checked');
		
		if(cbDie == true)
		{
			$('#benefitSubmit').prop("disabled",false);
		}else if(cbContract == true)
			{
				$('#benefitSubmit').prop("disabled",false);
			}else if(cbRefund == true)
				{
					$('#benefitSubmit').prop("disabled",false);
				}else if(cbPension == true)
					{
						$('#benefitSubmit').prop("disabled",false);
					}else if(cbMedical == true)
						{
							$('#benefitSubmit').prop("disabled",false);
						}else if(cbDividend == true)
							{
								$('#benefitSubmit').prop("disabled",false);
							}else
								{
									$('#benefitSubmit').prop("disabled",true);
								}
}

function hideDiv(id)
{
	$("#"+id).css("display","none");
}

function showDiv(id)
{
	$("#"+id).css("display","block");
}

function ddRefund()
{
		var value = Number($('select.item-i').val()) || 0;
		if(value == 0)
			{
				hideDiv('tableDividend');
			}else if(value == 1)
				{
					showDiv('tableDividend');
				}else if(value == 2)
					{
						hideDiv('tableDividend');
					}
}

function backDropClear()
{
		setTimeout(() => {
			$('.modal-backdrop').remove();
		}, 30);
		
}

function cancleBenefit()
{
		changeDisplayBenefit005(0);
}

function isEmpty(str) {
    return (!str.trim() || 0 === str.trim().length);
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


function newAddBenefitDie(){
	
	var lastImgOK = $('#tbody_dieL >tbody>tr:last>td:first').attr("id") || 0;
	var numberImgOK = 0;
	
	if(lastImgOK == 0){
		numberImgOK = 1;
	}else{
		numberImgOK = Number(lastImgOK.replace("imgOK_",""))+1;
	}
	
	var newID = "imgOK_"+numberImgOK;
	var ftOnclick = 'imgCheckbox("'+newID+'");';
	
	var row1 = "";
	row1 = "<tr id='tbody_dieL"+numberImgOK+"'>"+
								"<td width='65px' class='text-center borderBlack' id="+"'"+newID+"'"+" onclick='"+ftOnclick+"' style='vertical-align: middle;'><i class='glyphicon glyphicon-edit'></i></td>"+
								"<td width='56px' class='borderBlack'><input id='die_fromYear"+numberImgOK+"' type='text' class='form-control margin-padding0 text-center' value='-'></td>"+
								"<td width='100px' class='text-center borderBlack'>"+dropdownFromTo+"</td>"+
								"<td width='56px' class='borderBlack'><input id='die_toYear"+numberImgOK+"' type='text' class='form-control margin-padding0 text-center' value='-'></td>"+
								"<td width='100px' class='text-center borderBlack'>"+dropdownFromTo+"</td>"+
			"</tr>";
	
	var row2 = "";
	row2 = "<tr id='tbody_dieR"+numberImgOK+"'>"+
								"<td width='70px' class='text-center borderBlack'>"+dropdownMax+"</td>"+
								"<td width='70px' class='borderBlack'><input id='die_sa"+numberImgOK+"' type='text' class='form-control margin-padding0 text-center width70px' value='-'></td>"+
								"<td width='70px' class='text-center borderBlack'>"+dropdownSa+"</td>"+
								"<td width='70px' class='borderBlack'><input id='die_premium"+numberImgOK+"' type='text' class='form-control margin-padding0 text-center width70px' value='-'></td>"+
								"<td width='70px' class='text-center borderBlack'>"+dropdownPremium+"</td>"+
								"<td width='70px' class='verticalCenter text-center borderBlack'><input id='die_checkbox"+numberImgOK+"' type='checkbox'></td>"+
								"<td width='70px' class='borderBlack'><input id='die_cvpv"+numberImgOK+"' type='text' class='form-control margin-padding0 text-center width70px' value='-'></td>"+
								"<td width='70px' class='text-center borderBlack'>"+dropdownCvPv+"</td>"+
								"<td width='70px' class='text-center borderBlack'>"+dropdownOther+"</td>"+
								"<td width='70px' class='text-center borderBlack'>"+dropdownADB1+"</td>"+
								"<td width='70px' class='borderBlack'><input id='adb"+numberImgOK+"' type='text' class='form-control margin-padding0 text-center width70px' value='-'></td>"+
								"<td width='160px' class='text-center borderBlack'>"+dropdownADB2+"</td>"+
								"<td width='70px' class='text-center borderBlack'>"+dropdownADB1+"</td>"+
								"<td width='70px' class='borderBlack'><input id='adb"+numberImgOK+"' type='text' class='form-control margin-padding0 text-center width70px' value='-'></td>"+
								"<td width='160px' class='text-center borderBlack'>"+dropdownADB2+"</td>"+
			"</tr>";
	
	$("#tbody_dieL tbody").append(row1);
	$("#tbody_dieR tbody").append(row2);
}

function displayPolicyValue(type){
		if(type == 1)
			{
				var cbBox1 = $('#cbBox1').prop('checked');
				if(cbBox1)
					{
						$('#dbBox1').prop('disabled', false);
						$('#spanBox1').attr("disabled", false);
						$('#cv1').prop('disabled', false);
					}else
						{
							$('#dbBox1').prop('disabled', true);
							$('#spanBox1').attr("disabled", true);
							$('#cv1').prop('disabled', true);
						}
			}
		
		if(type == 2)
		{
			var cbBox2 = $('#cbBox2').prop('checked');
			if(cbBox2)
				{
					$('#dbBox2').prop('disabled', false);
					$('#spanBox2').attr("disabled", false);
					$('#cv2').prop('disabled', false);
				}else
					{
						$('#dbBox2').prop('disabled', true);
						$('#spanBox2').attr("disabled", true);
						$('#cv2').prop('disabled', true);
					}
		}
		
		if(type == 3)
		{
			var cbBox3 = $('#cbBox3').prop('checked');
			if(cbBox3)
				{
					$("input[name=tablePolicy]").prop('disabled', false);
					$('#dbBox3_1').prop('disabled', false);
					$('#dbBox3_2').prop('disabled', false);
					$('#dbBox3_3').prop('disabled', false);
					$('#dbBox3_4').prop('disabled', false);
					$('#dbBox3_5').prop('disabled', false);
					$('#dbBox3_6').prop('disabled', false);
					
					$('#tmo1').prop("disabled", false);
					$('#tmo2').prop('disabled', false);
					$('#tmo3').prop("disabled", false);
					$('#tmo4').prop('disabled', false);
					
					$('#spanBox3_1').attr("disabled", false);
					$('#spanBox3_2').attr("disabled", false);
					$('#spanBox3_3').attr("disabled", false);
					$('#spanBox3_4').attr("disabled", false);
					
					$('#tmo5').prop('disabled', false);
					$('#tmo6').prop('disabled', false);
					$('#tmo7').prop('disabled', false);
					$('#tmo8').prop('disabled', false);
				}else
					{
						$("input[name=tablePolicy]").prop('disabled', true);
						$('#dbBox3_1').prop('disabled', true);
						$('#dbBox3_2').prop('disabled', true);
						$('#dbBox3_3').prop('disabled', true);
						$('#dbBox3_4').prop('disabled', true);
						$('#dbBox3_5').prop('disabled', true);
						$('#dbBox3_6').prop('disabled', true);
						
						$('#tmo1').prop("disabled", true);
						$('#tmo2').prop('disabled', true);
						$('#tmo3').prop("disabled", false);
						$('#tmo4').prop('disabled', false);
						
						$('#spanBox3_1').attr("disabled", true);
						$('#spanBox3_2').attr("disabled", true);
						$('#spanBox3_3').attr("disabled", true);
						$('#spanBox3_4').attr("disabled", true);
						
						$('#tmo5').prop('disabled', true);
						$('#tmo6').prop('disabled', true);
						$('#tmo7').prop('disabled', true);
						$('#tmo8').prop('disabled', true);
					}
		}
}
//////เรียก dropdown level2  *24-12-2018
function getmain_contract() {
	var main_contract = $("#main_contract").val();	
	var type = "";
	if (main_contract == "") {
		var main_contract2 = document.getElementById("main_contract2");
	       $("#main_contract2 option").remove();
	        	 var option 		= 	document.createElement("option");
	 			option.value 		= 	"";
	 			option.text 		= 	"--- กรุณาเลือก ---";
	 			main_contract2.add(option);
	 			
	 	var main_contract3 = document.getElementById("main_contract3");
	 	       $("#main_contract3 option").remove();
	 	        	 var option 		= 	document.createElement("option");
	 	 			option.value 		= 	"";
	 	 			option.text 		= 	"--- กรุณาเลือก ---";
	 	 			main_contract3.add(option);
	}
	/*เรียก dropdown*/
	if (main_contract != "") {
		$.ajax({
	        type: "POST",
	        url : "BasePlanCL_Data_default_Servlet",
	        data: {
	        	method 	: "main_contract_level1",
	        	type	: main_contract
	        },       
	        success : function(response) {	
		         ///level2
			       var main_contract2 = document.getElementById("main_contract2");
			       $("#main_contract2 option").remove();
			         for (var i = 0; i < response.main_contract2.length; i++) {
			        	 		var option 		= 	document.createElement("option");
			        	 		
			 					option.value 	= 	response.main_contract2[i].pass;
			 					option.text 	= 	response.main_contract2[i].text;
			 					main_contract2.add(option);
			         }			        	       
			         $("#main_contract2").prepend(new Option("--- กรุณาเลือก ---", ""));
			         $("#main_contract2 option:contains('--- กรุณาเลือก ---')").attr('selected', 'selected');
	        },
	        error : function(response) {	
	        	console.log("getmain_contract error")
	        }
		});
	}
}
//////เรียก dropdown level3  *24-12-2018
function getmain_contract2() {
	var main_contract2 = $("#main_contract2").val();	 
	if (main_contract2 == "") {
	 	var main_contract3 = document.getElementById("main_contract3");
	 	       $("#main_contract3 option").remove();
	 	        	 var option 		= 	document.createElement("option");
	 	 			option.value 		= 	"";
	 	 			option.text 		= 	"--- กรุณาเลือก ---";
	 	 			main_contract3.add(option);
	}
	if (main_contract2 != "") {
	var type_lv1  	= $("#main_contract").val();	
	var type_lv2 	= $("#main_contract2").val();	
		$.ajax({
	        type: "POST",
	        url : "BasePlanCL_Data_default_Servlet",
	        data: {
	        	method 		: "main_contract_level3",
	        	type_lv1	: type_lv1,
	        	type_lv2	: type_lv2
	        },       
	        success : function(response) {	
		         ///level3
			       var main_contract3 = document.getElementById("main_contract3");
			       $("#main_contract3 option").remove();
			         for (var i = 0; i < response.main_contract3.length; i++) {
			        	 		var option 		= 	document.createElement("option");
			 					option.value 	= 	response.main_contract3[i].pass;
			 					option.text 	= 	response.main_contract3[i].text;
			 				
			 					main_contract3.add(option);
			         }
			         
			         $("#main_contract3").prepend(new Option("--- กรุณาเลือก ---", ""));
			         $("#main_contract3 option:contains('--- กรุณาเลือก ---')").attr('selected', 'selected');
	        },
	        error : function(response) {	
	        	console.log("getmain_contract2 error");
	        }
		});
	}
}

/*ส่งค่าไปเรียก Product Sub Group*/
$("#main_contract3").change(function(){
	var cat_id = $("#main_contract3 option:selected").val();
	//alert(cat_id);
	$.ajax({
        type: "POST",
        url : "Center_Servlet",
        data: {
        	method 	: "get_Acct_Lv3",
        	cat_id : cat_id
        },       
        success : function(response) {	
        	console.log(response) ;
        	var list_acct = [];
        	
        	if(response.acct_coverage.length > 0){
        		for (i in response.acct_coverage) {
        			list_acct.push(response.acct_coverage[i].value);
    			}
        	}
        	$("#PD_subgroup_OIC p").text(list_acct);
        },
        error : function(response) {	
        	console.log("get Product Sub Group error");
        }
	});
});


/*************************************************/
/*********************KHWAN edit*****************/
/***************บันทึก****************/
function bt_Menu4_Confirm() {
	var message = "";
	var error = 0;
	
	var cbBox1					= $('#cbBox1').prop('checked');
	var dbBox1 					= $('#dbBox1').val();
	var input1					= document.getElementById("input_file_1_OL").value;
	
	var cbBox2					= $('#cbBox2').prop('checked');
	var dbBox2					= $('#dbBox2').val();
	var input2					= document.getElementById("input_file_2_OL").value;
	
	var cbBox3					= $('#cbBox3').prop('checked');
	
	var tablePolicy1				= $('#tablePolicy1_OL').prop('checked');
	var tablePolicy2				= $('#tablePolicy2_OL').prop('checked');
	
	/*****ตารางที่มีอยู่แล้ว*****/
	/*RPU*/
	var dbBox3_1 				= $('#dbBox3_1').val();
	var dbBox3_2 				= $('#dbBox3_2').val();
	var dbBox3_3 				= $('#dbBox3_3').val();
	
	/*ETI*/
	var dbBox3_4 				= $('#dbBox3_4').val();
	var dbBox3_5 				= $('#dbBox3_5').val();
	var dbBox3_6 				= $('#dbBox3_6').val();
	
	/*****ตารางใหม่*****/
	var input_file_3					= document.getElementById("input_file_3_OL").value;
	var input_file_4					= document.getElementById("input_file_4_OL").value;
	var input_file_5					= document.getElementById("input_file_5_OL").value;
	var input_file_6					= document.getElementById("input_file_6_OL").value;
		
	if(cbBox1){
		//alert(input1);
		
		if(dbBox1 == ""){
			message = "กรุณาระบุข้อมูลให้ครบ";
			alertError(message);
			error++;
		}else{			
			if(input1 == ""){			
				message = "กรุณาระบุข้อมูลให้ครบ";
				alertError(message);
				error++;
			 }
		}		
	}
	if (cbBox2){	
		if(dbBox2 == ""){
			message = "กรุณาระบุข้อมูลให้ครบ";
			alertError(message);
			error++;
		}else{			
			if(input2 == ""){			
				message = "กรุณาระบุข้อมูลให้ครบ";
				alertError(message);
				error++;					
			}
		}		
	}	
	if (cbBox3){	
			if(tablePolicy1){
				if(dbBox3_1 != ""){
				 if((dbBox3_2 == "") && (dbBox3_3 == "")){
					message = "กรุณาระบุข้อมูลให้ครบ";
					alertError(message);
					error++;
				 }
				}
				if(dbBox3_4 != ""){
				    if((dbBox3_5 == "") && (dbBox3_6 == "")){
						message = "กรุณาระบุข้อมูลให้ครบ";
						alertError(message);
						error++;
					 }
				}
			}
			if(tablePolicy2){
				if(input_file_3 == "" || input_file_4 == "" || input_file_5 == "" || input_file_6 == ""){
					message = "กรุณาระบุข้อมูลให้ครบ";
					alertError(message);
					error++;
				}
			}
	}
	
	//alert(error);
	if((cbBox1 || cbBox2 || cbBox3) && error == 0){
		var message = "บันทึกข้อมูลเรียบร้อย";
		 alertSuccess(message);
	}
}



$(document).ready( function() {
	$("#select_file_1_OL").change(function(){
		$("#validate_input1_OL").hide();	
	});	
	$("#select_file_2_OL").change(function(){
		$("#validate_input2_OL").hide();	
	});
	$("#select_file_3_OL").change(function(){
		$("#validate_input3_OL").hide();	
	});
	$("#select_file_4_OL").change(function(){
		$("#validate_input4_OL").hide();	
	});
	$("#select_file_5_OL").change(function(){
		$("#validate_input5_OL").hide();	
	});
	$("#select_file_6_OL").change(function(){
		$("#validate_input6_OL").hide();	
	});
});

/*Upload & Read txt file*/
/*var openFile = function(event,fileID,tableName,tableCol) {	
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
    		  tableRow = "<tr>"+
				"<td class='text-center'>"+textRow_split[0]+"</td>"+
				"<td class='text-center'>"+textRow_split[1]+"</td>"+
				"<td class='text-right'>"+textRow_split[2]+"</td>"+
				"<td class='text-right'>"+textRow_split[3]+"</td>"+
				"</tr>";
    	  }else if(tableCol == 3){
    		  col1 = textRow[i].substr(0,3);
    		  col2 = textRow[i].substr(3,2);
    		  col3 = textRow[i].substr(5,2);

    		  tableRow = "<tr>"+
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
    		  
    		  tableRow = "<tr>"+
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
    		  
    		   tableRow = "<tr>"+
				"<td class='text-center'>"+col1+"</td>"+
				"<td class='text-center'>"+col2+"</td>"+
				"<td class='text-right'>"+col3+"</td>"+
				"<td class='text-right'>"+col4+"</td>"+
				"<td class='text-right'>"+col5+"</td>"+
				"<td class='text-right'>"+col6+"</td>"+
				"</tr>";  
    	   การคำนวณเบี้ยประกัน
    	  }else if(tableCol == 61){
   		   col1 = textRow[i].substr(0,14);
		   col2 = textRow[i].substr(14,1);
		   col3 = textRow[i].substr(15,1);
		   col4 = textRow[i].substr(16,2);
		   col5 = textRow[i].substr(18,1);
		   col6 = textRow[i].substr(19,5);
		  
		   tableRow = "<tr>"+
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
		  
		   tableRow = "<tr>"+
			"<td class='text-center'>"+col1+"</td>"+
			"<td class='text-center'>"+col2+"</td>"+
			"<td class='text-right'>"+col3+"</td>"+
			"<td class='text-right'>"+col4+"</td>"+
			"</tr>";    		  
    	  }else if(tableCol == 51){
      		   col1 = textRow[i].substr(0,3);
    		   col2 = textRow[i].substr(3,2);
    		   col3 = textRow[i].substr(5,1);
    		   col4 = textRow[i].substr(6,2);
    		   col5 = textRow[i].substr(8,6);
    		  
    		   tableRow = "<tr>"+
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

    		  tableRow = "<tr>"+
				"<td class='text-center'>"+col1+"</td>"+
				"<td class='text-center'>"+col2+"</td>"+
				"<td class='text-center'>"+col3+"</td>"+
				"</tr>";
 
    	  }
    	    	    	  
    	  $("#"+tableName+">tbody").append(tableRow);	
      }
      
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
    reader.readAsText(input.files[0]);      
    setTimeout(function(){
   	 reader.readAsText(document.getElementById(fileID).files[0]);     
    }, 5000);
    
  }*/
var openFile = function(event,fileID,tableName,tableCol) {	
    var input = event.target;        
    var reader = new FileReader();
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
		   col2 = textRow[i].substr(2,1);
		   col3 = textRow[i].substr(3,2);
		   col4 = textRow[i].substr(5,6);
		  
		   tableRow += "<tr>"+
			"<td class='text-center'>"+col1+"</td>"+
			"<td class='text-center'>"+col2+"</td>"+
			"<td class='text-right'>"+col3+"</td>"+
			"<td class='text-right'>"+col4+"</td>"+
			"</tr>";    		  
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
          }
    	    	    	  
    	  
      }
      
      $("#"+tableName+">tbody").append(tableRow);	
      
      if ($.fn.dataTable.isDataTable( "#"+tableName ) ) {   	  
    		  //$("#"+tableName).destroy();   	
      }else{      
    	  /*$("#"+tableName).DataTable({"ordering": false,"paging": true,"bInfo" : false, "deferRender" : true, 
    		  "processing": true,
    	      "serverSide": true,
    		  "oLanguage": {
    	      "sSearch": "ค้นหา: "
    	    }
    	  });*/
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

function check_filename(fileID, fileFormat, fileFormat2){
	var filename = document.getElementById(fileID).files[0].name.split('.');	
	if(fileFormat2 != ""){
		if(filename[0] != fileFormat && filename[0] != fileFormat2){
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

function check_filename_OL(fileID, fileFormat, fileFormat2, fileFormat3){
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

function check_character(ch){
	var len, digit;
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

function GetPlan(row,cov_code){
	////Benz Get type OL/CL
	$.ajax({
        type: "POST",
        url : "GetCategory",
        data: {
        	method 			: "GetTypeCategoryBasePlan",
        	cov_code		: cov_code
        },       
        success : function(response) {
        	var cov_type = response.TypeCategory[0].type;
        	console.log(cov_type)
        	//get lookup & get case when success
        	var ch_ui005_1 = false;
        	var ch_ui005_2 = false;
        	var ch_ui005_3 = false;
        	var ch_ui005_4 = false;
        	var ch_ui005_5 = false;
        	var ch_ui005_7 = false;
        	if (response.TypeCategory[0].page.length != 0) {
        		for (var i = 0; i < response.TypeCategory[0].page.length; i++) {
            		if (response.TypeCategory[0].page[i].tab == 1) {
            			ch_ui005_1 = true;
            		}else if (response.TypeCategory[0].page[i].tab == 2){
            			ch_ui005_7 = true;
            		}else if (response.TypeCategory[0].page[i].tab == 3){
            			ch_ui005_2 = true;
            		}else if (response.TypeCategory[0].page[i].tab == 4){
            			ch_ui005_3 = true;
            		}else if (response.TypeCategory[0].page[i].tab == 5){
            			ch_ui005_4 = true;
            		}else if (response.TypeCategory[0].page[i].tab == 6){
            			ch_ui005_5 = true;
            		}
            	}
        	}else{
        		 ch_ui005_1 = true;
            	 ch_ui005_2 = true;
            	 ch_ui005_3 = true;
            	 ch_ui005_4 = true;
            	 ch_ui005_5 = true;
            	 ch_ui005_7 = true;
        	}
        
        	var menu_1 = false;
        	var menu_2 = false;
        	var menu_3 = false;
        	var menu_4 = false;
        	var menu_5 = false;
        	var menu_6 = false;
        	var menu_7 = false;

        	if(cov_type == 'CL'){	
        		if (ch_ui005_1 == true) {
        			document.getElementById("menu_CL_1").style.display = "block";
        			menu_CL_1 = true;        			
        		}else  {
        			document.getElementById("menu_CL_1").style.display = "none";
        			menu_CL_1 = false;
        		}
        		if (ch_ui005_2 == true) {
        			document.getElementById("menu_CL_2").style.display = "block";
        			menu_CL_2 = true;
        		}else  {
        			document.getElementById("menu_CL_2").style.display = "none";
        			menu_CL_2 = false;
        		}
        		if (ch_ui005_3 == true) {
        			document.getElementById("menu_CL_3").style.display = "block";
        			menu_CL_3 = true;
        		}else  {
        			document.getElementById("menu_CL_3").style.display = "none";
        			menu_CL_3 = false;
        		}
        		if (ch_ui005_4 == true) {
        			document.getElementById("menu_CL_4").style.display = "block";
        			menu_CL_4 = true;
        		}else  {
        			document.getElementById("menu_CL_4").style.display = "none";
        			menu_CL_4 = false;
        		}
        		if (ch_ui005_5 == true) {
        			document.getElementById("menu_CL_5").style.display = "block";
        			menu_CL_5 = true;
        		}else  {
        			document.getElementById("menu_CL_5").style.display = "none";
        			menu_CL_5 = false;
        		}
        		document.getElementById("menu_CL_6").style.display = "block"; ///เปิดTab อนุมัติเสมอ
        		menu_CL_6 = true;
        		
        		if (ch_ui005_7 == true) {
        			document.getElementById("menu_CL_7").style.display = "block";
        			menu_CL_7 = true;
        		}else  {
        			document.getElementById("menu_CL_7").style.display = "none";
        			menu_CL_7 = false;
        		}
        		/**************************************/
        		
        		if (ch_ui005_1 == true ){
        			 var element = document.getElementById("menu_CL_1");
        			 element.classList.add("active");  
        			document.getElementById("cl_005_1_1-1").style.display = "block";
        		}
        		if (ch_ui005_1 == false && ch_ui005_7 == true){
        			var element = document.getElementById("menu_CL_7");
        			 element.classList.add("active");  
        			document.getElementById("cl_005_1_1-7").style.display = "block";
        		}
        		if (ch_ui005_1 == false && ch_ui005_2 == false && ch_ui005_3== false  
        				&& ch_ui005_4.checked == true && ch_ui005_7.checked == false ){
        			var element = document.getElementById("menu_CL_4");
        			 element.classList.add("active");  
        			document.getElementById("cl_005_1_1-4").style.display = "block";
        		}
        		if (ch_ui005_1 == false && ch_ui005_2 == false && ch_ui005_3 == false  
        				&& ch_ui005_4 == false && ch_ui005_5 == true && ch_ui005_7 == false){
        			var element = document.getElementById("menu_CL_5");
        			 element.classList.add("active");  
        			document.getElementById("cl_005_1_1-5").style.display = "block";
        		}
        		if (ch_ui005_1 == false && ch_ui005_2 == false && ch_ui005_3 == false 
        				&& ch_ui005_4 == false && ch_ui005_5 == false && ch_ui005_7 == false){
        			var element = document.getElementById("menu_CL_6");
        			 element.classList.add("active");  
        			document.getElementById("cl_005_1_1-6").style.display = "block";
        		}
        		document.getElementById("ui-005_1").style.display = "none";
        		document.getElementById("ui-005").style.display = "none";
        		document.getElementById("ui005_Menu").style.display = "block";
        		document.getElementById("ui-005_1_CreateBasePlan").style.display = "none";
        		document.getElementById("ui-005_1_CloneBasePlan").style.display = "none";
        		
        	}else{
        		/*OL*/
        		if (ch_ui005_1 == true) {
        			document.getElementById("menu_OL_1").style.display = "block";
        			menu_OL_1 = true;
        		}else  {
        			document.getElementById("menu_OL_1").style.display = "none";
        			menu_OL_1 = false;
        		}
        		if (ch_ui005_2 == true) {
        			document.getElementById("menu_OL_2").style.display = "block";
        			menu_OL_2 = true;
        		}else  {
        			document.getElementById("menu_OL_2").style.display = "none";
        			menu_OL_2 = false;
        		}
        		if (ch_ui005_3 == true) {
        			document.getElementById("menu_OL_3").style.display = "block";
        			menu_OL_3 = true;
        		}else  {
        			document.getElementById("menu_OL_3").style.display = "none";
        			menu_OL_3 = false;
        		}
        		if (ch_ui005_4 == true) {
        			document.getElementById("menu_OL_4").style.display = "block";
        			menu_OL_4 = true;
        		}else  {
        			document.getElementById("menu_OL_4").style.display = "none";
        			menu_OL_4 = false;
        		}
        		if (ch_ui005_5 == true) {
        			document.getElementById("menu_OL_5").style.display = "block";
        			menu_OL_5 = true;
        		}else  {
        			document.getElementById("menu_OL_5").style.display = "none";
        			menu_OL_5 = false;
        		}
        		document.getElementById("menu_OL_6").style.display = "block"; ///เปิดTab อนุมัติเสมอ
        		menu_OL_6 = true;
        		
        		if (ch_ui005_7 == true) {
        			document.getElementById("menu_OL_7").style.display = "block";
        			menu_OL_7 = true;
        		}else  {
        			document.getElementById("menu_OL_7").style.display = "none";
        			menu_OL_7 = false;
        		}
        		/**************************************/
        		
        		if (ch_ui005_1 == true ){
        			 var element = document.getElementById("menu_OL_1");
        			 element.classList.add("active");  
        			document.getElementById("ol_005_1_1-1").style.display = "block";
        		}
        		if (ch_ui005_1 == false && ch_ui005_7 == true){
        			var element = document.getElementById("menu_OL_7");
        			 element.classList.add("active");  
        			document.getElementById("ol_005_1_1-7").style.display = "block";
        		}
        		if (ch_ui005_1 == false && ch_ui005_2 == false && ch_ui005_3== false  
        				&& ch_ui005_4.checked == true && ch_ui005_7.checked == false ){
        			var element = document.getElementById("menu_OL_4");
        			 element.classList.add("active");  
        			document.getElementById("ol_005_1_1-4").style.display = "block";
        		}
        		if (ch_ui005_1 == false && ch_ui005_2 == false && ch_ui005_3 == false  
        				&& ch_ui005_4 == false && ch_ui005_5 == true && ch_ui005_7 == false){
        			var element = document.getElementById("menu_OL_5");
        			 element.classList.add("active");  
        			document.getElementById("ol_005_1_1-5").style.display = "block";
        		}
        		if (ch_ui005_1 == false && ch_ui005_2 == false && ch_ui005_3 == false 
        				&& ch_ui005_4 == false && ch_ui005_5 == false && ch_ui005_7 == false){
        			var element = document.getElementById("menu_OL_6");
        			 element.classList.add("active");  
        			document.getElementById("ol_005_1_1-6").style.display = "block";
        		}
        		document.getElementById("ui-005_1").style.display = "none";
        		document.getElementById("ui-005").style.display = "none";
        		document.getElementById("ui005_Menu").style.display = "block";
        		document.getElementById("ui-005_1_CreateBasePlan").style.display = "none";
        		document.getElementById("ui-005_1_CloneBasePlan").style.display = "none";
        	}
        	
        	if(cov_type == "CL"){
            	menu_1 = menu_CL_1;
            	menu_2 = menu_CL_2;
            	menu_3 = menu_CL_3;
            	menu_4 = menu_CL_4;
            	menu_5 = menu_CL_5;
            	menu_6 = menu_CL_6;
            	menu_7 = menu_CL_7;
        	 }else{
        		menu_1 = menu_OL_1;
            	menu_2 = menu_OL_2;
            	menu_3 = menu_OL_3;
            	menu_4 = menu_OL_4;
            	menu_5 = menu_OL_5;
            	menu_6 = menu_OL_6;
            	menu_7 = menu_OL_7;		 
        	 }
        	///GetdataLook_up
        	var main_contracttype = "2";
        	var datajson = "";
        	datajson = {
        	        	main_contracttype	: main_contracttype,
        	        	method 				: "create_Base_Plan",	        	
        	        	menu_CL_1			: menu_1,
        	        	menu_CL_2 			: menu_2,
        	        	menu_CL_3 			: menu_3,
        	        	menu_CL_4 			: menu_4,
        	        	menu_CL_5 			: menu_5,
        	        	menu_CL_6 			: menu_6,
        	        	menu_CL_7 			: menu_7,
        	        	cov_code			: cov_code
        	        }
        	if(cov_type == 'CL'){
        		$.ajax({
        		    type: "POST",
        		    url : "BasePlanCL_Data_default_Servlet",
        		    data: datajson, 
        		    beforeSend: function(){
	                	jQuery("#status").show();
	                	jQuery("#preloader").show();
	                },
        		    success : function(response) {	
        		    	$('#pass_Insurance_coverage_cl').val(cov_code);
        		    	if(ch_ui005_1 == true){
        	        		show_basicInfo_data(response);
        	        	}
        	        	if(ch_ui005_7 == true){
        	        		show_policyWording_data(response);
        	        	}
        	        	if(ch_ui005_2 == true){
        	        		show_privilege_insurance_data(response);
        	        	}
        	        	if(ch_ui005_3 == true){        		
        	        		$("#baseplanCode_CL").val($("#pass_Insurance_coverage_cl").val());
        	        		show_cal_premium_data(response);
        	        	}
        	        	if(ch_ui005_4 == true){
        	        		show_PolicyValue_data(response);
        	        	}
        	        	if(ch_ui005_5 == true){
        	        		show_BenefitValue_data(response);
        	        	}
        	            	        	
        	        	///////////////////get data when lookup success
        	        	var pass_Insurance 		= row ;
        	        	var insurance_premium 	= cov_code;
        	        	$.ajax({
        	                type: "POST",
        	                url : "BasePlanCL_GetData_Servlet",
        	                data: {
        	                	method 				: "getCaseBasePlanCL",
        	                	pass_Insurance		: pass_Insurance,
        	                	insurance_premium	: insurance_premium,
        	                	groupName			: $("#groupName").val(),
        	                },
        	                success : function(response) {	
        	                	if(ch_ui005_1 == true){
        	                		showcase_basicInfo(response);
        	                	} 
        	                	if(ch_ui005_7 == true){
                	        		showcase_policyWording_data(response);
                	        	}
        	                	if(ch_ui005_2 == true){
        	                		showcase_privilege_insurance(response);
        	                	}
        	                	if(ch_ui005_3 == true){
        	                		showcase_cal_premium(response);
        	                	}
        	                	if(ch_ui005_4 == true){     
        	                		showcase_PolicyValue(response);
        	                	}
        	                	if(ch_ui005_5 == true){                 		
        	                		showcase_Benefit(response);
        	                	}
        	                	setting_ApproveCL(response);
        	                	/*Permission*/
        	                	SetUserPermission();
        	                },
        	                error : function(response) {	
        	                	console.log("Get Baseplan case error");
        	                }
        	        	});
        	        	
        		    },
        		    complete:function(){
	                    // Hide image container
	                	jQuery("#status").fadeOut();
	                	jQuery("#preloader").delay(1000).fadeOut("slow");
	                },
        		    error : function(response) {	
        		    	console.log("Baseplan create Lookup error")
        		    }
        		});
        	}else{
        		/*OL*/
        		$.ajax({
        		    type: "POST",
        		    url : "BasePlanOL_Data_default_Servlet",
        		    data: datajson,   
        		    beforeSend: function(){
        	        	jQuery("#status").show();
        	        	jQuery("#preloader").show();
        	        },
        		    success : function(response) {	
        		    	$('#pass_Insurance_coverage_ol').val(cov_code);
        		    	if(ch_ui005_1 == true){
        		    		show_basicInfo_data_OL(response);
        	        	}
        	        	if(ch_ui005_7 == true){
        	        		show_policyWording_data_OL(response);
        	        	}
        	        	if(ch_ui005_2 == true){
        	        		show_privilege_insurance_data_OL(response);
        	        	}
        	        	if(ch_ui005_3 == true){        		
        	        		$("#baseplanCode_OL").val($("#pass_Insurance_coverage_ol").val());
        	        		show_cal_premium_data_OL(response);
        	        	}
        	        	if(ch_ui005_4 == true){
        	        		show_PolicyValue_data_OL(response);
        	        	}
        	        	if(ch_ui005_5 == true){
        	        		show_BenefitValue_data_OL(response);
        	        	}
        	        	
        	        	///////////////////get data when lookup success
        	        	var pass_Insurance 		= row ;
        	        	var insurance_premium 	= cov_code;
        	        	$.ajax({
        	                type: "POST",
        	                url : "BasePlanOL_GetData_Servlet",
        	                data: {
        	                	method 				: "getCaseBasePlanOL",
        	                	pass_Insurance		: pass_Insurance,
        	                	insurance_premium	: insurance_premium,
        	                	groupName			: $("#groupName").val(),
        	                },       
        	                success : function(response) {	

        	                	if(ch_ui005_1 == true){
        	                		showcase_basicInfo_OL(response);
        	                	} 
        	                	if(ch_ui005_7 == true){
                	        		showcase_policyWording_OL(response);
                	        	}
        	                	if(ch_ui005_2 == true){
        	                		showcase_privilege_insurance_OL(response);
        	                	}
        	                	if(ch_ui005_3 == true){
        	                		showcase_cal_premium_OL(response);
        	                	}
        	                	if(ch_ui005_4 == true){     
        	                		showcase_PolicyValue_OL(response);
        	                	}
        	                	if(ch_ui005_5 == true){                 		
        	                		showcase_Benefit_OL(response);
        	                	}
        	                	setting_ApproveOL(response);
        	                	/*Permission*/
        	                	SetUserPermission();	
        	                },
        	                error : function(response) {	
        	                	alert("Get Baseplan case error");
        	                }
        	        	});
        		    },
        	        complete:function(){
        	            // Hide image container
        	        	jQuery("#status").fadeOut();
        	        	jQuery("#preloader").delay(1000).fadeOut("slow");
        	        },
        		    error : function(response) {	
        		    	console.log("Baseplan create Lookup error")
        		    }
        		});	
        	}

	    },
        error : function(response) {	
        	console.log("Get Type Baseplan error");
        }
	});

}
///Pun set GetClone 13-12-2019
function GetClone(row,cov_code){
	
	$.ajax({
        type: "POST",
        url : "GetCategory",
        data: {
        	method 			: "GetTypeCategoryBasePlan",
        	cov_code		: cov_code
        },       
        success : function(response) {
        	var cov_type = response.TypeCategory[0].type;
        	var url		 = "";
        	var data_json = {
        			"method": "Clone",
        			"cov_code": cov_code
             }
        	
        	/*แยก type ก่อน*/
        	if(cov_type == "CL"){
        		url = "BasePlanCL_CloneData_Servlet/Clone";
        	}else if(cov_type == "OL"){
        		url = "BasePlanOL_CloneData_Servlet/Clone";
        	}else{
        		alert("error")
        	}
        	
        	/*clone*/
        	if(url != ""){
        		$.ajax({
            		url: url,
            		type: "POST",
            		data: data_json,
            		 success: function (response) {
            			 console.log("NEW_COV_CLONE",response.new_covCode.new_cov_code)
            			 var new_cov_code = response.new_covCode.new_cov_code
            			 GetPlan("",new_cov_code)
            		 }
            	});
            	console.log("data",data_json);
        	}
        	
        }
	});
	
	
	

}