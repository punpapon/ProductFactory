
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

$("#bt_CreateProduct").click(function(){
	  document.getElementById("ui-007").style.display = "none";
	  document.getElementById("ui-007_1").style.display = "block";
})

/* Check Radio Create Base Plan */
$("#rd_CreateProduct").click(function(){
	document.getElementById("ui-007_1_CreateProduct").style.display = "block";
	document.getElementById("ui-007_1_CloneProduct").style.display = "none";
	/*เรียก dropdown*/
	var dd_length = $("#main_contract option").length;
	
	if(dd_length <= 1){
		$.ajax({
	        type: "POST",
	        url : "ProductRider_Data_default_Servlet",
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
	        	console.log("get dropdown level1 product error.")
	        }
		});
	}
})

/* Check Radio Clone Existing Base Plan */
$("#rd_CloneProduct").click(function(){
	  document.getElementById("ui-007_1_CloneProduct").style.display = "block";
	  document.getElementById("ui-007_1_CreateProduct").style.display = "none";
})

/*ปุ่ม ตกลง CreateNewProduct*/
$("#ui_007_1_Confirm").click(function(){
	var main_contract1 = $("#main_contract option:selected").text();	
	var main_contract2 = $("#main_contract2 option:selected").text();	
	var main_contract3 = $("#main_contract3 option:selected").text();	

	if(main_contract1 !== "--- กรุณาเลือก ---" && main_contract2 !== "--- กรุณาเลือก ---" && main_contract3 !== "--- กรุณาเลือก ---"){
		var ch_ui007_1 = document.getElementById("ch_ui007-1");
		var ch_ui007_2 = document.getElementById("ch_ui007-2");
		var ch_ui007_3 = document.getElementById("ch_ui007-3");
		var ch_ui007_4 = document.getElementById("ch_ui007-4");
		var ch_ui007_5 = document.getElementById("ch_ui007-5");
		
	if(main_contract1 == "Group Life"){
			
		///Benz set textmenu to Java///
		var menu_CL_1 = "";
		var menu_CL_2 = "";
		var menu_CL_3 = "";
		var menu_CL_4 = "";
		var menu_CL_5 = "";
		var menu_CL_6 = "";
		
		if (ch_ui007_1.checked == true) {
			document.getElementById("menu_CL_1").style.display = "block";
			menu_CL_1 = true;
		}else  {
			document.getElementById("menu_CL_1").style.display = "none";
			menu_CL_1 = false;
		}
		if (ch_ui007_2.checked == true) {
			document.getElementById("menu_CL_2").style.display = "block";
			menu_CL_3 = true;
		}else  {
			document.getElementById("menu_CL_2").style.display = "none";
			menu_CL_3 = false;
		}
		if (ch_ui007_3.checked == true) {
			document.getElementById("menu_CL_3").style.display = "block";
			menu_CL_2 = true;
		}else  {
			document.getElementById("menu_CL_3").style.display = "none";
			menu_CL_2 = false;
		}
		if (ch_ui007_4.checked == true) {
			document.getElementById("menu_CL_4").style.display = "block";
			menu_CL_4 = true;
		}else  {
			document.getElementById("menu_CL_4").style.display = "none";
			menu_CL_4 = false;
		}
		if (ch_ui007_5.checked == true) {
			document.getElementById("menu_CL_5").style.display = "block";
			menu_CL_5 = true;
		}else  {
			document.getElementById("menu_CL_5").style.display = "none";
			menu_CL_5 = false;
		}
		document.getElementById("menu_CL_6").style.display = "block"; ///เปิดTab อนุมัติเสมอ
		menu_CL_6 = true;
		/**************************************/
		
		if (ch_ui007_1.checked == true ){
			 var element = document.getElementById("menu_CL_1");
			 element.classList.add("active");  
			document.getElementById("cl_007_1_1-1").style.display = "block";
		}
		if (ch_ui007_1.checked == false && ch_ui007_3.checked == true){
			var element = document.getElementById("menu_CL_3");
			 element.classList.add("active");  
			document.getElementById("cl_007_1_1-3").style.display = "block";
		}
		if (ch_ui007_1.checked == false && ch_ui007_3.checked == false && ch_ui007_2.checked == true){
			var element = document.getElementById("menu_CL_2");
			 element.classList.add("active");  
			document.getElementById("cl_007_1_1-2").style.display = "block";
		}
		if (ch_ui007_1.checked == false && ch_ui007_2.checked == false && ch_ui007_3.checked == false  
				&& ch_ui007_4.checked == true && ch_ui007_5.checked == false){
			var element = document.getElementById("menu_CL_4");
			 element.classList.add("active");  
			document.getElementById("cl_007_1_1-4").style.display = "block";
		}
		if (ch_ui007_1.checked == false && ch_ui007_2.checked == false && ch_ui007_3.checked == false  
				&& ch_ui007_4.checked == false && ch_ui007_5.checked == true){
			var element = document.getElementById("menu_CL_5");
			 element.classList.add("active");  
			document.getElementById("cl_007_1_1-5").style.display = "block";
		}
		if (ch_ui007_1.checked == false && ch_ui007_2.checked == false && ch_ui007_3.checked == false 
				&& ch_ui007_4.checked == false && ch_ui007_5.checked == false){
			var element = document.getElementById("menu_CL_6");
			 element.classList.add("active");  
			document.getElementById("cl_007_1_1-6").style.display = "block";
		}
		document.getElementById("ui-007_1").style.display = "none";
		document.getElementById("ui-007").style.display = "none";
		document.getElementById("ui007_Menu").style.display = "block";
		document.getElementById("ui-007_1_CreateProduct").style.display = "none";
	}else{
		var menu_OL_1 = "";
		var menu_OL_2 = "";
		var menu_OL_3 = "";
		var menu_OL_4 = "";
		var menu_OL_5 = "";
		var menu_OL_6 = "";
		
		if (ch_ui007_1.checked == true) {
			document.getElementById("menu_OL_1").style.display = "block";
			menu_OL_1 = true;
		}else  {
			document.getElementById("menu_OL_1").style.display = "none";
			menu_OL_1 = false;
		}
		if (ch_ui007_2.checked == true) {
			document.getElementById("menu_OL_2").style.display = "block";
			menu_OL_2 = true;
		}else  {
			document.getElementById("menu_OL_2").style.display = "none";
			menu_OL_2 = false;
		}
		if (ch_ui007_3.checked == true) {
			document.getElementById("menu_OL_3").style.display = "block";
			menu_OL_3 = true;
		}else  {
			document.getElementById("menu_OL_3").style.display = "none";
			menu_OL_3 = false;
		}
		if (ch_ui007_4.checked == true) {
			document.getElementById("menu_OL_4").style.display = "block";
			menu_OL_4 = true;
		}else  {
			document.getElementById("menu_OL_4").style.display = "none";
			menu_OL_4 = false;
		}
		if (ch_ui007_5.checked == true) {
			document.getElementById("menu_OL_5").style.display = "block";
			menu_OL_5 = true;
		}else  {
			document.getElementById("menu_OL_5").style.display = "none";
			menu_OL_5 = false;
		}
		
		document.getElementById("menu_OL_6").style.display = "block"; ///เปิดTab อนุมัติเสมอ
		menu_OL_6 = true;
		/*--------------------------------------------------------------------------*/
		if (ch_ui007_1.checked == true ){
			 var element = document.getElementById("menu_OL_1");
			 element.classList.add("active");  
			document.getElementById("ol_007_1_1-1").style.display = "block";
		}
		if (ch_ui007_1.checked == false && ch_ui007_2.checked == true){
			var element = document.getElementById("menu_OL_2");
			 element.classList.add("active");  
			document.getElementById("ol_007_1_1-2").style.display = "block";
		}
		if (ch_ui007_1.checked == false && ch_ui007_2.checked == false && ch_ui007_3.checked == true){
			var element = document.getElementById("menu_OL_3");
			 element.classList.add("active");  
			document.getElementById("ol_007_1_1-3").style.display = "block";
		}
		if (ch_ui007_1.checked == false && ch_ui007_2.checked == false && ch_ui007_3.checked == false  && ch_ui007_4.checked == true){
			var element = document.getElementById("menu_OL_4");
			 element.classList.add("active");  
			document.getElementById("ol_007_1_1-4").style.display = "block";
		}
		if (ch_ui007_1.checked == false && ch_ui007_2.checked == false && ch_ui007_3.checked == false  
				&& ch_ui007_4.checked == false && ch_ui007_5.checked == true ){
			var element = document.getElementById("menu_OL_5");
			 element.classList.add("active");  
			document.getElementById("ol_007_1_1-5").style.display = "block";
		}
		if (ch_ui007_1.checked == false && ch_ui007_2.checked == false && ch_ui007_3.checked == false 
				&& ch_ui007_4.checked == false && ch_ui007_5.checked == false && ch_ui007_7.checked == false){
			var element = document.getElementById("menu_OL_6");
			 element.classList.add("active");  
			document.getElementById("ol_007_1_1-6").style.display = "block";
		}
		document.getElementById("ui-007_1").style.display = "none";
		document.getElementById("ui-007").style.display = "none";
		document.getElementById("ui007_Menu").style.display = "block";
		document.getElementById("ui-007_1_CreateProduct").style.display = "none";		
	}	
	////Benz Test call Setvlet 17-12-2018
	var main_contract1_val = $("#main_contract option:selected").val();	
	var main_contract2_val = $("#main_contract2 option:selected").val();	
	var main_contract3_val = $("#main_contract3 option:selected").val();	
	
	var ch_ui007_1 = document.getElementById("ch_ui007-1");
	var ch_ui007_2 = document.getElementById("ch_ui007-2");
	var ch_ui007_3 = document.getElementById("ch_ui007-3");
	var ch_ui007_4 = document.getElementById("ch_ui007-4");
	var ch_ui007_5 = document.getElementById("ch_ui007-5");
	
	if(main_contract1 == "Group Life"){
    	menu_1 = menu_CL_1;
    	menu_2 = menu_CL_2;
    	menu_3 = menu_CL_3;
    	menu_4 = menu_CL_4;
    	menu_5 = menu_CL_5;
    	menu_6 = menu_CL_6;
	 }else{
		menu_1 = menu_OL_1;
    	menu_2 = menu_OL_2;
    	menu_3 = menu_OL_3;
    	menu_4 = menu_OL_4;
    	menu_5 = menu_OL_5;
    	menu_6 = menu_OL_6;
	 }
	var main_contracttype = "1";
	var datajson = "";
		datajson = {
		        	method 				: "create_product",
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
		        	groupName			: $("#groupName").val(),
		        
	 }
	if(main_contract1 == "Group Life"){
		$.ajax({
	        type: "POST",
	        url : "ProductRider_Data_default_Servlet",
	        data: datajson,       
	        success : function(response) {	
	        //	alert (response.Tab_Basic_Information[0].passInsurance);
	        	$('#pass_Insurance_product_cl').val(response.Tab_Basic_Information[0].passInsurance);//รหัสความคุ้มครองแบบประกัน
	        	$("#cov_type").val(response.TypeCategory[0].type);
	        	
	        	setting_LookupApproveCL(response);
	        	
	        	if(ch_ui007_1.checked == true){
	        		show_basicInfo_data(response);
	        	}
	        	if(ch_ui007_3.checked == true){
	        		show_cal_premium(response);
	        	}
	        	if(ch_ui007_2.checked == true){
	        		show_use_Rights(response);
	        	}
	        	if(ch_ui007_4.checked == true){
	        		show_sale_benefits(response);
	        	}
	        	if(ch_ui007_5.checked == true){
	        		show_term_warranty(response);
	        	}
	        	
	        },
	        error : function(response) {	
	        	console.log("get lookup product error.")
	        }
		});
	}else{
		/*OL*/
		$.ajax({
	        type: "POST",
	        url : "ProductRider_Data_default_Servlet",
	        data: datajson,       
	        success : function(response) {	
	        	//alert (response.Tab_Basic_Information[0].passInsurance);
	        	$('#pass_Insurance_product_ol').val(response.Tab_Basic_Information[0].passInsurance);//รหัสความคุ้มครองแบบประกัน
	        	$("#cov_type").val(response.TypeCategory[0].type);
	        	if (response.check[0].status == true) {
		        	setting_LookupApproveOL(response);
		        	
		        	if(ch_ui007_1.checked == true){
		        		show_basicInfo_data_OL(response);
		        	}
		        	if(ch_ui007_3.checked == true){
		        		show_cal_premium_OL(response);
		        	}
		        	if(ch_ui007_2.checked == true){
		        		show_benefit_OL(response);
		        	}
		        	/*ไม่มี lookup*/
		        	/*if(ch_ui007_4.checked == true){
		        		show_sale_benefits_OL(response);
		        	}*/
		        	if(ch_ui007_5.checked == true){
		        		show_term_warranty_OL(response);
		        	}
	        	}else {
		    		var message = "เกิดความผิดพลาดในการเชื่อมต่อ กรุณาทำการเข้าสู่ระบบอีกครั้ง !!";
		    		alertError_Login(message);
		    		$("#modal_warning_login .modal-body button.close").click(function(){
		    			window.location.href = 'login.jsp';
		    		});
		    	}
	        },
	        error : function(response) {	
	        	console.log("get lookup product error.")
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
        document.getElementById("ui-007_1_CloneProduct").style.display = "none";
    });


/*---------*/

$("#bt_Clone").click(function(){ 
	document.getElementById("menu_CL_1").style.display = "block";
	var element = document.getElementById("menu_CL_1");
	 element.classList.add("active");
	document.getElementById("ol_007_1_1-1").style.display = "block";
	document.getElementById("menu_CL_2").style.display = "block";
	document.getElementById("menu_CL_3").style.display = "block";
	document.getElementById("menu_CL_4").style.display = "block";
	document.getElementById("menu_CL_5").style.display = "block";
	document.getElementById("menu_CL_6").style.display = "block";
	
	document.getElementById("ui-007_1").style.display = "none";
	document.getElementById("ui-007").style.display = "none";
	document.getElementById("ui007_Menu").style.display = "block";
})

/*ปุ่มยกลิก ui-007.1*/
$("#ui_007_1_Cancel").click(function(){
	document.getElementById("ui-007_1").style.display = "none";
	document.getElementById("ui-007_1_CreateProduct").style.display = "none";
	document.getElementById("ui-007").style.display = "block";
	/************/
	document.getElementById("rd_CreateProduct").checked = false;
	
})
$("#ui_007_2_Cancel").click(function(){
	document.getElementById("ui-007_1").style.display = "none";
	document.getElementById("ui-007_1_CloneProduct").style.display = "none";
	document.getElementById("ui-007").style.display = "block";
	/************/
	document.getElementById("rd_CloneProduct").checked = false;
})

/*เมนู OL*/
/*$("#menu_OL_1").click(function(){
	document.getElementById("ol_007_1_1-1").style.display = "block";
	document.getElementById("ol_007_1_1-2").style.display = "none";
	document.getElementById("ol_007_1_1-3").style.display = "none";
	document.getElementById("ol_007_1_1-4").style.display = "none";
	document.getElementById("ol_007_1_1-5").style.display = "none";
	document.getElementById("ol_007_1_1-6").style.display = "none";
})
$("#menu_OL_2").click(function(){
	document.getElementById("ol_007_1_1-2").style.display = "block";
	document.getElementById("ol_007_1_1-1").style.display = "none";
	document.getElementById("ol_007_1_1-3").style.display = "none";
	document.getElementById("ol_007_1_1-4").style.display = "none";
	document.getElementById("ol_007_1_1-5").style.display = "none";
	document.getElementById("ol_007_1_1-6").style.display = "none";
})
$("#menu_OL_3").click(function(){
	document.getElementById("ol_007_1_1-3").style.display = "block";
	document.getElementById("ol_007_1_1-1").style.display = "none";
	document.getElementById("ol_007_1_1-2").style.display = "none";
	document.getElementById("ol_007_1_1-4").style.display = "none";
	document.getElementById("ol_007_1_1-5").style.display = "none";
	document.getElementById("ol_007_1_1-6").style.display = "none";
	
	get_rate_value();
})
$("#menu_OL_4").click(function(){
	document.getElementById("ol_007_1_1-4").style.display = "block";
	document.getElementById("ol_007_1_1-1").style.display = "none";
	document.getElementById("ol_007_1_1-2").style.display = "none";
	document.getElementById("ol_007_1_1-3").style.display = "none";
	document.getElementById("ol_007_1_1-5").style.display = "none";
	document.getElementById("ol_007_1_1-6").style.display = "none";
})
$("#menu_OL_5").click(function(){
	document.getElementById("ol_007_1_1-5").style.display = "block";
	document.getElementById("ol_007_1_1-1").style.display = "none";
	document.getElementById("ol_007_1_1-2").style.display = "none";
	document.getElementById("ol_007_1_1-3").style.display = "none";
	document.getElementById("ol_007_1_1-4").style.display = "none";
	document.getElementById("ol_007_1_1-6").style.display = "none";
})
$("#menu_OL_6").click(function(){
	document.getElementById("ol_007_1_1-6").style.display = "block";
	document.getElementById("ol_007_1_1-1").style.display = "none";
	document.getElementById("ol_007_1_1-2").style.display = "none";
	document.getElementById("ol_007_1_1-3").style.display = "none";
	document.getElementById("ol_007_1_1-4").style.display = "none";
	document.getElementById("ol_007_1_1-5").style.display = "none";
})*/

$(document).ready( function() {
	$.ajax({
        type: "POST",
        url : "ProductRider_GetData_Servlet",
        data: {
        	method 	: "getProductRiderOL",
        }, 
        beforeSend: function(){
        	jQuery("#status").show();
        	jQuery("#preloader").show();
        },
        success : function(response) {	
        	ShowDataProduct(response);
        },
        complete:function(){
            // Hide image container
        	jQuery("#status").fadeOut();
        	jQuery("#preloader").delay(1000).fadeOut("slow");
        },
        error : function(response) {	
        	console.log("get product case error.")
        }
	});
});

function ShowDataProduct(value) {
	//Permission
	//SetUserPermission();
	
	var insurance_No = "";
	var nameTH	 	 = "";
	var nameEN		 = "";
	var status		 = "";
	var row = "";
	var cov_type = "";
	var ii = 0;
	$('#table_PrimaryProduct').DataTable().destroy();
	$("#table_PrimaryProduct tbody").find("tr").remove();
	for(var i = 0; i < value.ProductRiderOL_Data.length; i++){
		ii++;
		
		insurance_No 	= value.ProductRiderOL_Data[i].insuranceNo;
		nameTH		 	= value.ProductRiderOL_Data[i].nameTH;
		market_nameTH	= value.ProductRiderOL_Data[i].market_nameTH;
		status		 	= value.ProductRiderOL_Data[i].status;
		row = 	"<tr>" +	
			"<td class=\"col-sm-2 text-center"+"\" onclick=\"GetPlan('"+i+"','"+insurance_No+"')"+"\" style=\"text-decoration: underline;color:blue; cursor:pointer;"+"\">"+insurance_No+"</td>"+
			"<td class=\"col-sm-4 text-center"+"\">"+nameTH+"</td>"+
			"<td class=\"col-sm-4 text-center"+"\">"+market_nameTH+"</td>"+
			"<td class=\"col-sm-2 text-center"+"\">"+status+"</td>"+
			"</tr>";			  
		$("#table_PrimaryProduct tbody").append(row);
	}
	$('#table_PrimaryProduct').DataTable({     
	      "aLengthMenu": [[15, 30, 45, -1], [15, 30, 45, "All"]],
	       "iDisplayLength": 15,
	       "scrollY": 570,
	       "language": {
	    	    "search": "รหัสแบบประกันหลัก/ชื่อ(ไทย)/ชื่อทางการตลาด(ไทย):"
	      },
	      //"ordering": false
	      "order": []
	});
	
	$("#table_PrimaryProduct_wrapper>div:nth-child(1)>div:first-child").css("width","44%");
}
//////เรียก dropdown level2  *24-12-2018
function main_contract() {
	var main_contract = $("#main_contract").val();	
	var type = "";
	
	if(main_contract == 1){
		$("#ch_ui007-7").prop("disabled", false);
		$("#ch_ui007-7").attr("checked", "checked");
	}else{
		$("#ch_ui007-7").prop("disabled", true);
		$("#ch_ui007-7").attr("checked", false);
	}
	
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
	        url : "ProductRider_Data_default_Servlet",
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
	        	console.log("get dropdown level2 product error.")
	        }
		});
	}
}
//////เรียก dropdown level3  *24-12-2018
function main_contract2() {
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
	        url : "ProductRider_Data_default_Servlet",
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
	        	console.log("get dropdown level3 product error.")
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
        },
        error : function(response) {	
        	console.log("get Product Sub Group error");
        }
	});
});


/*************************************************/
/*********************KHWAN edit*****************/
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

function deleteTableRow(id)
{
	$(id).remove();
}
/*------------------Benz-22-01-2019---------------------*/
function GetPlan(row,prd_code){
////Benz Get type OL/CL
	$.ajax({
        type: "POST",
        url : "GetCategory",
        data: {
        	method 			: "GetTypeCategoryProduct",
        	prd_code		: prd_code
        },       
        success : function(response) {
        	var cov_type = response.TypeCategory[0].type;
        	$("#cov_type").val(cov_type);
        	console.log(cov_type)
        	
        	//get lookup & get case when success
        	var ch_ui007_1 = false;
			var ch_ui007_2 = false;
			var ch_ui007_3 = false;
			var ch_ui007_4 = false;
			var ch_ui007_5 = false;

        	if (response.TypeCategory[0].page.length != 0) {
        		for (var i = 0; i < response.TypeCategory[0].page.length; i++) {
            		if (response.TypeCategory[0].page[i].tab == 1) {
            			ch_ui007_1 = true;
            		}else if (response.TypeCategory[0].page[i].tab == 2){
            			ch_ui007_2 = true;
            		}else if (response.TypeCategory[0].page[i].tab == 3){
            			ch_ui007_3 = true;
            		}else if (response.TypeCategory[0].page[i].tab == 4){
            			ch_ui007_4 = true;
            		}else if (response.TypeCategory[0].page[i].tab == 5){
            			ch_ui007_5 = true;
            		}
            	}
        	}else{
        		 ch_ui007_1 = true;
    			 ch_ui007_2 = true;
    			 ch_ui007_3 = true;
    			 ch_ui007_4 = true;
    			 ch_ui007_5 = true;
        	}
	
	///Benz set textmenu to Java///
	var menu_CL_1 = "";
	var menu_CL_2 = "";
	var menu_CL_3 = "";
	var menu_CL_4 = "";
	var menu_CL_5 = "";
	var menu_CL_6 = "";
	

		if (ch_ui007_1 == true) {
			document.getElementById("menu_OL_1").style.display = "block";
			menu_OL_1 = true;
		}else  {
			document.getElementById("menu_OL_1").style.display = "none";
			menu_OL_1 = false;
		}
		if (ch_ui007_2 == true) {
			document.getElementById("menu_OL_2").style.display = "block";
			menu_OL_3 = true;
		}else  {
			document.getElementById("menu_OL_2").style.display = "none";
			menu_OL_3 = false;
		}
		if (ch_ui007_3 == true) {
			document.getElementById("menu_OL_3").style.display = "block";
			menu_OL_2 = true;
		}else  {
			document.getElementById("menu_OL_3").style.display = "none";
			menu_OL_2 = false;
		}
		if (ch_ui007_4 == true) {
			document.getElementById("menu_OL_4").style.display = "block";
			menu_OL_4 = true;
		}else  {
			document.getElementById("menu_OL_4").style.display = "none";
			menu_OL_4 = false;
		}
		if (ch_ui007_5 == true) {
			document.getElementById("menu_OL_5").style.display = "block";
			menu_OL_5 = true;
		}else  {
			document.getElementById("menu_OL_5").style.display = "none";
			menu_OL_5 = false;
		}
		
		document.getElementById("menu_OL_6").style.display = "block"; ///เปิดTab อนุมัติเสมอ
		menu_OL_6 = true;
		/**************************************/
		
		if (ch_ui007_1 == true ){
			 var element = document.getElementById("menu_OL_1");
			 element.classList.add("active");  
			document.getElementById("ol_007_1_1-1").style.display = "block";
		}
		if (ch_ui007_1 == false && ch_ui007_3.checked == true){
			var element = document.getElementById("menu_OL_3");
			 element.classList.add("active");  
			document.getElementById("ol_007_1_1-3").style.display = "block";
		}
		if (ch_ui007_1 == false && ch_ui007_3.checked == false && ch_ui007_2.checked == true){
			var element = document.getElementById("menu_OL_2");
			 element.classList.add("active");  
			document.getElementById("ol_007_1_1-2").style.display = "block";
		}
		if (ch_ui007_1 == false && ch_ui007_2.checked == false && ch_ui007_3.checked == false  
				&& ch_ui007_4.checked == true && ch_ui007_5.checked == false){
			var element = document.getElementById("menu_OL_4");
			 element.classList.add("active");  
			document.getElementById("ol_007_1_1-4").style.display = "block";
		}
		if (ch_ui007_1 == false && ch_ui007_2.checked == false && ch_ui007_3.checked == false  
				&& ch_ui007_4.checked == false && ch_ui007_5.checked == true){
			var element = document.getElementById("menu_OL_5");
			 element.classList.add("active");  
			document.getElementById("ol_007_1_1-5").style.display = "block";
		}
		if (ch_ui007_1 == false && ch_ui007_2.checked == false && ch_ui007_3.checked == false 
				&& ch_ui007_4.checked == false && ch_ui007_5.checked == false){
			var element = document.getElementById("menu_OL_6");
			 element.classList.add("active");  
			document.getElementById("ol_007_1_1-6").style.display = "block";
		}
		document.getElementById("ui-007_1").style.display = "none";
		document.getElementById("ui-007").style.display = "none";
		document.getElementById("ui007_Menu").style.display = "block";
		document.getElementById("ui-007_1_CreateProduct").style.display = "none";
	
		
		menu_1 = menu_OL_1;
    	menu_2 = menu_OL_2;
    	menu_3 = menu_OL_3;
    	menu_4 = menu_OL_4;
    	menu_5 = menu_OL_5;
    	menu_6 = menu_OL_6;	
	
	/*เรียก dropdown main_contract*/
	$.ajax({
        type: "POST",
        url : "ProductRider_Data_default_Servlet",
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
        	console.log("get dropdown level1 product error.")
        }
	});
	
	///GetdataLook_up
	var main_contracttype = "2";
	var datajson = "";
	datajson = {
	        	method 				: "create_product",
	        	main_contracttype	: main_contracttype,
	        	menu_CL_1			: menu_1,
	        	menu_CL_2 			: menu_2,
	        	menu_CL_3 			: menu_3,
	        	menu_CL_4 			: menu_4,
	        	menu_CL_5 			: menu_5,
	        	menu_CL_6 			: menu_6
	        
	        }
	
		/*OL*/
		$.ajax({
	        type: "POST",
	        url : "ProductRider_Data_default_Servlet",
	        data: datajson, 
	        beforeSend: function(){
            	jQuery("#status").show();
            	jQuery("#preloader").show();
            },
	        success : function(response) {	
	        //	alert (response.Tab_Basic_Information[0].passInsurance);
	        	$('#pass_Insurance_product_ol').val(prd_code);//รหัสความคุ้มครองแบบประกัน
	        	
	        	if(ch_ui007_1 == true){
	        		show_basicInfo_data_OL(response);
	        	}
	        	if(ch_ui007_3 == true){
	        		show_cal_premium_OL(response);
	        	}
	        	if(ch_ui007_2 == true){
	        		show_benefit_OL(response);
        		}
	        	/*ไม่มี lookup*/
	        	/*if(ch_ui007_4 == true){
	        		show_sale_benefits_OL(response);
	        	}*/
	        	if(ch_ui007_5 == true){
	        		show_term_warranty_OL(response);
	        	}
	        	
	        	///////////////////get data when lookup success
	        	var pass_Insurance = row ;
	        	$.ajax({
	                type: "POST",
	                url : "ProductRider_GetData_Servlet",
	                data: {
	                	method 			: "getCaseProductRiderOL",
	                	pass_Insurance	: pass_Insurance,
	                	prd_code		: prd_code
	                },       
	                success : function(response) {	
	                	if(ch_ui007_1 == true){
	                		showcase_basicInfo_OL(response)
	                	}
	                	if(ch_ui007_3 == true){
	                		showcase_cal_premium_OL(response);
	                	}
	                	if(ch_ui007_2 == true){
	                		showcase_benefit_OL(response,"");
	                	}
	                	if(ch_ui007_4 == true){
	                		showcase_sale_benefits_OL(response);
	                	}
	                	if(ch_ui007_5 == true){
	                		showcase_term_warranty_OL(response);
	                	}
	                	
	                	setting_ApproveOL(response);
	                	/*Permission*/
	                	SetUserPermission();
	                	
	                },
	                error : function(response) {	
	                	console.log("get case product with PRD_code error.")
	                }
	        	});
	        },
	        complete:function(){
                // Hide image container
            	jQuery("#status").fadeOut();
            	jQuery("#preloader").delay(1000).fadeOut("slow");
            },
	        error : function(response) {	
	        	console.log("get lookup product error.")
	        }
		});
       },
        error : function(response) {	
        	console.log("Get Type Baseplan error");
        }
	});
}
function alertError_Login(message)
{
	$('#txt_alert_login_error').text(message);
	$('#modal_warning_login').modal();
}