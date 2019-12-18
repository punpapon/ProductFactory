
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
})

/* Check Radio Clone Existing Base Plan */
$("#rd_CloneBasePlan").click(function(){
	  document.getElementById("ui-005_1_CloneBasePlan").style.display = "block";
	  document.getElementById("ui-005_1_CreateBasePlan").style.display = "none";
})

/*ปุ่ม ตกลง CreateNewBasePlan*/
$("#ui_005_1_Confirm").click(function(){
	
	var ch_ui005_1 = document.getElementById("ch_ui005-1");
	var ch_ui005_2 = document.getElementById("ch_ui005-2");
	var ch_ui005_3 = document.getElementById("ch_ui005-3");
	var ch_ui005_4 = document.getElementById("ch_ui005-4");
	var ch_ui005_5 = document.getElementById("ch_ui005-5");
	
	
	if (ch_ui005_1.checked == true) {
		document.getElementById("menu_ui-005_1").style.display = "block";
	}else  {
		document.getElementById("menu_ui-005_1").style.display = "none";
	}
	if (ch_ui005_2.checked == true) {
		document.getElementById("menu_ui-005_2").style.display = "block";
	}else  {
		document.getElementById("menu_ui-005_2").style.display = "none";
	}
	if (ch_ui005_3.checked == true) {
		document.getElementById("menu_ui-005_3").style.display = "block";
	}else  {
		document.getElementById("menu_ui-005_3").style.display = "none";
	}
	if (ch_ui005_4.checked == true) {
		document.getElementById("menu_ui-005_4").style.display = "block";
	}else  {
		document.getElementById("menu_ui-005_4").style.display = "none";
	}
	if (ch_ui005_5.checked == true) {
		document.getElementById("menu_ui-005_5").style.display = "block";
	}else  {
		document.getElementById("menu_ui-005_5").style.display = "none";
	}
	
	if (ch_ui005_1.checked == true ){
		 var element = document.getElementById("menu_ui-005_1");
		 element.classList.add("active");  
		document.getElementById("ui005_1_1-1").style.display = "block";
	}
	if (ch_ui005_1.checked == false && ch_ui005_2.checked == true){
		var element = document.getElementById("menu_ui-005_2");
		 element.classList.add("active");  
		document.getElementById("ui005_1_1-2").style.display = "block";
	}
	if (ch_ui005_1.checked == false && ch_ui005_2.checked == false && ch_ui005_3.checked == true){
		var element = document.getElementById("menu_ui-005_3");
		 element.classList.add("active");  
		document.getElementById("ui005_1_1-3").style.display = "block";
	}
	if (ch_ui005_1.checked == false && ch_ui005_2.checked == false && ch_ui005_3.checked == false  && ch_ui005_4.checked == true){
		var element = document.getElementById("menu_ui-005_4");
		 element.classList.add("active");  
		document.getElementById("ui005_1_1-4").style.display = "block";
	}
	if (ch_ui005_1.checked == false && ch_ui005_2.checked == false && ch_ui005_3.checked == false  
			&& ch_ui005_4.checked == false && ch_ui005_5.checked == true){
		var element = document.getElementById("menu_ui-005_5");
		 element.classList.add("active");  
		document.getElementById("ui005_1_1-5").style.display = "block";
	}
	if (ch_ui005_1.checked == false && ch_ui005_2.checked == false && ch_ui005_3.checked == false 
			&& ch_ui005_4.checked == false && ch_ui005_5.checked == false){
		var element = document.getElementById("menu_ui-005_6");
		 element.classList.add("active");  
		document.getElementById("ui005_1_1-6").style.display = "block";
	}
	document.getElementById("ui-005_1").style.display = "none";
	document.getElementById("ui-005").style.display = "none";
	document.getElementById("ui005_Menu").style.display = "block";
	document.getElementById("ui-005_1_CreateBasePlan").style.display = "none";
})

/*Open Modal*/
$("#bt_Clone_0").click(function(){
        $("#clone_Modal").modal();
        document.getElementById("ui-005_1_CloneBasePlan").style.display = "none";
    });


/*---------*/

$("#bt_Clone").click(function(){ 
	document.getElementById("menu_ui-005_1").style.display = "block";
	var element = document.getElementById("menu_ui-005_1");
	 element.classList.add("active");
	document.getElementById("ui005_1_1-1").style.display = "block";
	document.getElementById("menu_ui-005_2").style.display = "block";
	document.getElementById("menu_ui-005_3").style.display = "block";
	document.getElementById("menu_ui-005_4").style.display = "block";
	document.getElementById("menu_ui-005_5").style.display = "block";
	document.getElementById("menu_ui-005_6").style.display = "block";
	
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

/*เมนู*/
$("#menu_ui-005_1").click(function(){
	document.getElementById("ui005_1_1-1").style.display = "block";
	document.getElementById("ui005_1_1-2").style.display = "none";
	document.getElementById("ui005_1_1-3").style.display = "none";
	document.getElementById("ui005_1_1-4").style.display = "none";
	document.getElementById("ui005_1_1-5").style.display = "none";
	document.getElementById("ui005_1_1-6").style.display = "none";
})
$("#menu_ui-005_2").click(function(){
	document.getElementById("ui005_1_1-2").style.display = "block";
	document.getElementById("ui005_1_1-1").style.display = "none";
	document.getElementById("ui005_1_1-3").style.display = "none";
	document.getElementById("ui005_1_1-4").style.display = "none";
	document.getElementById("ui005_1_1-5").style.display = "none";
	document.getElementById("ui005_1_1-6").style.display = "none";
})
$("#menu_ui-005_3").click(function(){
	document.getElementById("ui005_1_1-3").style.display = "block";
	document.getElementById("ui005_1_1-1").style.display = "none";
	document.getElementById("ui005_1_1-2").style.display = "none";
	document.getElementById("ui005_1_1-4").style.display = "none";
	document.getElementById("ui005_1_1-5").style.display = "none";
	document.getElementById("ui005_1_1-6").style.display = "none";
})
$("#menu_ui-005_4").click(function(){
	document.getElementById("ui005_1_1-4").style.display = "block";
	document.getElementById("ui005_1_1-1").style.display = "none";
	document.getElementById("ui005_1_1-2").style.display = "none";
	document.getElementById("ui005_1_1-3").style.display = "none";
	document.getElementById("ui005_1_1-5").style.display = "none";
	document.getElementById("ui005_1_1-6").style.display = "none";
})
$("#menu_ui-005_5").click(function(){
	document.getElementById("ui005_1_1-5").style.display = "block";
	document.getElementById("ui005_1_1-1").style.display = "none";
	document.getElementById("ui005_1_1-2").style.display = "none";
	document.getElementById("ui005_1_1-3").style.display = "none";
	document.getElementById("ui005_1_1-4").style.display = "none";
	document.getElementById("ui005_1_1-6").style.display = "none";
})
$("#menu_ui-005_6").click(function(){
	document.getElementById("ui005_1_1-6").style.display = "block";
	document.getElementById("ui005_1_1-1").style.display = "none";
	document.getElementById("ui005_1_1-2").style.display = "none";
	document.getElementById("ui005_1_1-3").style.display = "none";
	document.getElementById("ui005_1_1-4").style.display = "none";
	document.getElementById("ui005_1_1-5").style.display = "none";
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
$("#mode1").click(function(){
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
$("#mode2").click(function(){
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
$("#mode4").click(function(){
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

$("#mode8").click(function(){
	var mode8	 = document.getElementById("mode8");
	if (mode8.checked == true) {
		document.getElementById("mode0").disabled = true;
		document.getElementById("mode1").disabled = true;
		document.getElementById("mode2").disabled = true;
		document.getElementById("mode4").disabled = true;
		document.getElementById("mode9").disabled = true;
		$("#validate_input8").hide();
	}else{
		document.getElementById("mode0").disabled = false;
		document.getElementById("mode1").disabled = false;
		document.getElementById("mode2").disabled = false;
		document.getElementById("mode4").disabled = false;
		document.getElementById("mode9").disabled = false;
		$("#validate_input8").show();
	}
});
$("#mode9").click(function(){
	var mode9 = document.getElementById("mode9");
	if (mode9.checked == true) {
		document.getElementById("mode0").disabled = true;
		document.getElementById("mode1").disabled = true;
		document.getElementById("mode2").disabled = true;
		document.getElementById("mode4").disabled = true;
		document.getElementById("mode8").disabled = true;
		$("#validate_input8").hide();
	}else{
		document.getElementById("mode0").disabled = false;
		document.getElementById("mode1").disabled = false;
		document.getElementById("mode2").disabled = false;
		document.getElementById("mode4").disabled = false;
		document.getElementById("mode8").disabled = false;
		$("#validate_input8").show();
	}
});

$("#sl_tax_Break").click(function(){	
	var sl_tax_Break 	= $('#sl_tax_Break').val();
	if(sl_tax_Break == "3"){
		document.getElementById("select_file_1").disabled = true;
		$('#span_uploadFile_1').attr("disabled", true);
		$("#validate_input18").hide();
	}else{
		document.getElementById("select_file_1").disabled = false;
		$('#span_uploadFile_1').attr("disabled", false);
		$("#validate_input18").show();
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

function bt_Menu1_Canceled() {
	  window.location = "primary_insurance.jsp";

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
	  window.location = "primary_insurance.jsp";

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
	  window.location = "primary_insurance.jsp";

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
	              if( log ) alert(log);
	          }

	      });
		  
 		  
	  });
	});
/********************************************************************************/

$(document).ready( function() {
	var data1 = "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52";
	var data2 = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
	var data3 = "AA,BB,CC,DD,EE,FF,GG,HH,II,JJ,KK,LL,MM,NN,OO,PP,QQ,RR,SS,TT,UU,VV,WW,XX,YY,ZZ,aa,bb,cc,dd,ee,ff,gg,hh,ii,jj,kk,ll,mm,nn,oo,pp,qq,rr,ss,tt,uu,vv,ww,xx,yy,zz";
	
	var aa = data1.split(",");
	var bb = data2.split(",");
	var cc = data3.split(",");
	
	var row = "";
	$('#table_PrimaryInsurance').DataTable().destroy();
	$("#table_PrimaryInsurance tbody").find("tr").remove();
	for(var i = 0; i < aa.length; i++){
		row = 	"<tr>" +	
			"<td class=\"col-sm-2 text-center"+"\">"+aa[i]+"</td>"+
			"<td class=\"col-sm-4 text-center"+"\">"+bb[i]+"</td>"+
			"<td class=\"col-sm-4 text-center"+"\">"+cc[i]+"</td>"+
		"</tr>";			  
		$("#table_PrimaryInsurance tbody").append(row);
	}
	$('#table_PrimaryInsurance').DataTable({     
	      "aLengthMenu": [[15, 30, 45, -1], [15, 30, 45, "All"]],
	       "iDisplayLength": 15,
	       "scrollY": 570,
	       "language": {
	    	    "search": "รหัสแบบประกันหลัก/ชื่อ(ไทย)/ชื่อ(อังกฤษ):"
	    	  }
	       });
});


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
				
				$("#mainBenefit").css("display", "block");
				$("#benefitDetail").css("display", "none");
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
		$("#mainBenefit").css("display", "none");
		$("#benefitDetail").css("display", "block");
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
										"<td width='75' class='borderBlack'><input id='refund_fromYear"+numberImgOK+"' class='form-control margin-padding0 text-center' type='text' width='50' value='21'></td>"+
										"<td width='75' class='borderBlack'><input id='refund_fromAge"+numberImgOK+"' class='form-control margin-padding0 text-center' type='text' width='50' value='-'></td>"+
										"<td width='75' class='borderBlack'><input id='refund_toYear"+numberImgOK+"' class='form-control margin-padding0 text-center' type='text' width='50' value='21'></td>"+
										"<td width='75' class='borderBlack'><input id='refund_toAge"+numberImgOK+"' class='form-control margin-padding0 text-center' type='text' width='50' value='-'></td>"+
										"<td width='100' class='borderBlack'><input id='refund_year"+numberImgOK+"' class='form-control margin-padding0 text-center' type='text' width='50' value='2'></td>"+
										"<td width='200' class='borderBlack'><input id='refund_amount"+numberImgOK+"' class='form-control margin-padding0 text-right' type='text' width='50' value='100.00'></td>"+
										"<td width='200' class='text-center borderBlack'>"+dropdownUnit+"</td>"+
										"<td width='200' class='text-center borderBlack'>"+dropdownFactor+"</td>"+
										"<td width='200' class='text-center borderBlack'>"+dropdownCaltype+"</td>"+
				  "</tr>";
			
			$("#benefit_refund tbody").append(row);
			
//			if($('#benefit_refund >tbody>tr').length == 1)
//				{
//					$("select.item-i").append("<option value='1'>เงินปันผล</option>");
//				}else
//					{
//						$('select.item-i option[value="1"]').remove()
//					}
//		}else if(Number(typeMoney) == 1)
//			{
//				alert("เงินปันผลไม่สามารถเพิ่มรายการได้");
//			}
	
	
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
								"<td width='50' class='borderBlack'><input id='pension_fromYear"+numberImgOK+"' class='form-control text-center margin-padding0' type='text' value='-'></td>"+
								"<td width='50' class='borderBlack'><input id='pension_fromAge"+numberImgOK+"' class='form-control text-center margin-padding0' type='text' value='60'></td>"+
								"<td width='50' class='borderBlack'><input id='pension_toYear"+numberImgOK+"' class='form-control text-center margin-padding0' type='text' value='-'></td>"+
								"<td width='50' class='borderBlack'><input id='pension_toAge"+numberImgOK+"' class='form-control text-center margin-padding0' type='text' value='64'></td>"+
								"<td width='100' class='borderBlack'><input id='pension_year"+numberImgOK+"' class='form-control text-right margin-padding0' type='text' value='1'></td>"+
								"<td width='200' class='borderBlack'><input id='pension_amount"+numberImgOK+"' class='form-control text-right margin-padding0' type='text' value='10.00'></td>"+
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
								"<td width='50' class='borderBlack'><input id='medical_fromYear"+numberImgOK+"' class='form-control text-center margin-padding0' type='text' value='1'></td>"+
								"<td width='50' class='borderBlack'><input id='medical_fromAge"+numberImgOK+"' class='form-control text-center margin-padding0' type='text' value='-'></td>"+
								"<td width='50' class='borderBlack'><input id='medical_toYear"+numberImgOK+"' class='form-control text-center margin-padding0' type='text' value='-'></td>"+
								"<td width='50' class='borderBlack'><input id='medical_toAge"+numberImgOK+"' class='form-control text-center margin-padding0' type='text' value='20'></td>"+
								"<td width='100' class='borderBlack'><input id='medical_year"+numberImgOK+"' class='form-control text-right margin-padding0' type='text' value='2'></td>"+
								"<td width='200' class='borderBlack'><input id='medical_amount"+numberImgOK+"' class='form-control text-right margin-padding0' type='text' value='10.00'></td>"+
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
		
//		if($('#benefit_refund >tbody>tr').length == 1)
//			{
////				$("ul.item-i").append("<li><a href='#'>เงินปันผล</a></li>");
//				$("select.item-i").append("<option value='1'>เงินปันผล</option>");
//			}
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

/*
 * type 0 = table Die
 * type 1 = table contract
 */
function saveAllBenefit()
	{
		var thisTab = $('#tabBenefit005 li.active').attr('id');
		
		var rowLength = 0;
		if(thisTab == "tabDie")
			{
				var status = 1;
			 	rowLength = $('#benefit_die >tbody>tr').length;
			 	for(var i = 1;i<=rowLength;i++)
			 		{
			 			var fromYear 	= isEmpty($('#die_fromYear'+i).val());
			 			var fromAge 	= isEmpty($('#die_fromAge'+i).val());
			 			var toYear 		= isEmpty($('#die_toYear'+i).val());
			 			var toAge 		= isEmpty($('#die_toAge'+i).val());
			 			var sa 			= isEmpty($('#die_sa'+i).val());
			 			var premium 	= isEmpty($('#die_premium'+i).val());
			 			//var checkbox 	= isEmpty($('#die_checkbox'+i).val());
			 			var cvpv 		= isEmpty($('#die_cvpv'+i).val());
			 			var adb 		= isEmpty($('#adb'+i).val());
			 			
			 			if(fromYear == true)
			 				{
			 					alertError("Year ไม่ถูกต้อง "+i);
			 					status = 0;
			 				}else if(fromAge == true)
			 					{
			 						alertError("Age ไม่ถูกต้อง "+i);
			 						status = 0;
			 					}else if(toYear == true)
			 						{
			 							alertError("Year ไม่ถูกต้อง "+i);
			 							status = 0;
			 						}else if(toAge == true)
			 							{
			 								alertError("Age ไม่ถูกต้อง "+i);
			 								status = 0;
			 							}else if(sa == true)
			 								{
			 									alertError("SA ไม่ถูกต้อง "+i);
			 									status = 0;
			 								}else if(premium == true)
			 									{
			 										alertError("Premium ไม่ถูกต้อง "+i);
			 										status = 0;
			 									}else if(cvpv == true)
			 										{
			 											alertError("CV/PV ไม่ถูกต้อง "+i);
			 											status = 0;
			 										}else if(adb == true)
			 											{
			 												alertError("ADB ไม่ถูกต้อง "+i);
			 												status = 0;
			 											}
			 		}
			 	if(status == 1)
			 		{
			 			alertSuccess("บันทึก เสียชีวิต เรียบร้อย");
						changeDisplayBenefit005(0);
			 		}
			}
		if(thisTab == "tabContract")
			{
				var yearCal = isEmpty($('#yearCal').val());
				var cbContract = $('#cbContract').prop('checked');
				var percent = isEmpty($('#percentContract').val());
				var saContract = isEmpty($('#saContract').val());
				var premiumContract = isEmpty($('#premiumContract').val());
				
				if(yearCal == true || percent == true || saContract == true || premiumContract == true)
					{
						alertError("ข้อมูล ไม่ถูกต้อง");
					}else
						{
							alertSuccess("บันทึก เงินครบกำหนดสัญญา เรียบร้อย");
							changeDisplayBenefit005(0);
						}
			}
		if(thisTab == "tabRefund")
			{
				var status = 1;
			 	rowLength = $('#benefit_refund >tbody>tr').length;
			 	for(var i = 1;i<=rowLength;i++)
			 		{
			 			var fromYear 	= isEmpty($('#refund_fromYear'+i).val());
			 			var fromAge 	= isEmpty($('#refund_fromAge'+i).val());
			 			var toYear 		= isEmpty($('#refund_toYear'+i).val());
			 			var toAge 		= isEmpty($('#refund_toAge'+i).val());
			 			var year		= isEmpty($('#refund_year'+i).val());
			 			var amount		= isEmpty($('#refund_amount'+i).val());
			 			
			 			if(fromYear == true)
		 				{
		 					alertError("Year ไม่ถูกต้อง "+i);
		 					status = 0;
		 				}else if(fromAge == true)
		 					{
		 						alertError("Age ไม่ถูกต้อง "+i);
		 						status = 0;
		 					}else if(toYear == true)
		 						{
		 							alertError("Year ไม่ถูกต้อง "+i);
		 							status = 0;
		 						}else if(toAge == true)
		 							{
		 								alertError("Age ไม่ถูกต้อง "+i);
		 								status = 0;
		 							}else if(year == true)
		 								{
			 								alertError("ปี ไม่ถูกต้อง "+i);
			 								status = 0;
		 								}else if(amount == true)
		 									{
			 									alertError("จำนวน ไม่ถูกต้อง "+i);
				 								status = 0;
		 									}
			 		}
			 	if(status == 1)
		 		{
		 			alertSuccess("บันทึก เงินคืนทุกระยะ/เงินจ่ายคืนตามเงื่อนไข เรียบร้อย");
					changeDisplayBenefit005(0);
		 		}
			}
		
		if(thisTab == "tabPension")
			{
				var status = 1;
			 	rowLength = $('#benefit_pension >tbody>tr').length;
			 	for(var i = 1;i<=rowLength;i++)
			 		{
			 			var startAge	= isEmpty($('#pension_startAge').val());
			 			var confirmPay	= isEmpty($('#pension_confirmPay').val());
			 			var fromYear 	= isEmpty($('#pension_fromYear'+i).val());
			 			var fromAge 	= isEmpty($('#pension_fromAge'+i).val());
			 			var toYear 		= isEmpty($('#pension_toYear'+i).val());
			 			var toAge 		= isEmpty($('#pension_toAge'+i).val());
			 			var year		= isEmpty($('#pension_year'+i).val());
			 			var amount		= isEmpty($('#pension_amount'+i).val());
			 			
			 			if(startAge == true)
			 				{
				 				alertError("อายุที่เริ่มบำนาญ ไม่ถูกต้อง");
			 					status = 0;
			 				}else if(confirmPay == true)
			 					{
				 					alertError("รับรองการจ่าย ไม่ถูกต้อง");
				 					status = 0;
			 					}else if(fromYear == true)
					 				{
					 					alertError("Year ไม่ถูกต้อง "+i);
					 					status = 0;
					 				}else if(fromAge == true)
					 					{
					 						alertError("Age ไม่ถูกต้อง "+i);
					 						status = 0;
					 					}else if(toYear == true)
					 						{
					 							alertError("Year ไม่ถูกต้อง "+i);
					 							status = 0;
					 						}else if(toAge == true)
					 							{
					 								alertError("Age ไม่ถูกต้อง "+i);
					 								status = 0;
					 							}else if(year == true)
					 								{
						 								alertError("ปี ไม่ถูกต้อง "+i);
						 								status = 0;
					 								}else if(amount == true)
					 									{
						 									alertError("จำนวน ไม่ถูกต้อง "+i);
							 								status = 0;
					 									}
			 		}
			 	if(status == 1)
		 		{
		 			alertSuccess("บันทึก เงินบำนาญ เรียบร้อย");
					changeDisplayBenefit005(0);
		 		}
			}
		
		if(thisTab == "tabMedical")
			{
				var status = 1;
			 	rowLength = $('#benefit_medical >tbody>tr').length;
			 	for(var i = 1;i<=rowLength;i++)
			 		{
			 			var fromYear 	= isEmpty($('#medical_fromYear'+i).val());
			 			var fromAge 	= isEmpty($('#medical_fromAge'+i).val());
			 			var toYear 		= isEmpty($('#medical_toYear'+i).val());
			 			var toAge 		= isEmpty($('#medical_toAge'+i).val());
			 			var year		= isEmpty($('#medical_year'+i).val());
			 			var amount		= isEmpty($('#medical_amount'+i).val());
			 			
			 			if(fromYear == true)
		 				{
		 					alertError("Year ไม่ถูกต้อง "+i);
		 					status = 0;
		 				}else if(fromAge == true)
		 					{
		 						alertError("Age ไม่ถูกต้อง "+i);
		 						status = 0;
		 					}else if(toYear == true)
		 						{
		 							alertError("Year ไม่ถูกต้อง "+i);
		 							status = 0;
		 						}else if(toAge == true)
		 							{
		 								alertError("Age ไม่ถูกต้อง "+i);
		 								status = 0;
		 							}else if(year == true)
		 								{
			 								alertError("ปี ไม่ถูกต้อง "+i);
			 								status = 0;
		 								}else if(amount == true)
		 									{
			 									alertError("จำนวน ไม่ถูกต้อง "+i);
				 								status = 0;
		 									}
			 		}
			 	if(status == 1)
		 		{
		 			alertSuccess("บันทึก กองทุนค่ารักษาพยาบาล เรียบร้อย");
					changeDisplayBenefit005(0);
		 		}
			}
	}

/*
 * true = empty
 */
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

/*************************************************/