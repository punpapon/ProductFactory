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

$(document).ready( function() {
		/*jQuery(
			'#system_date_ol,#datefrom_ol_menu5,#dateto_ol_menu5')
			.datetimepicker({
				timepicker : false,
				format : 'd/m/Y',
				yearOffset:543 
						
		});
		
		jQuery('#tbl_benefit_sale_ol tbody').find("td:nth-child(4) input, td:nth-child(5) input")
		.datetimepicker({
			timepicker : false,
			format : 'd/m/Y',
			yearOffset:543 
					
		});*/
	
		$("#tbl_menu_2 *").attr("disabled", "disabled").off('click');
		$("#tbl_mode *").attr("disabled", "disabled").off('click')
		$("#tbl_pm_rate *").attr("disabled", "disabled").off('click');
		$("#tbl_pm_rate_em *").attr("disabled", "disabled").off('click');
		$("#tbl_pm_rate_nar *").attr("disabled", "disabled").off('click');
		
		$('#tbl_benefit_and_protect *').attr("disabled", "disabled").off('click');
		
		/*Basic info*/
		$("#select_input_pmRate").click(function(){
			$("#tb_input_modal_pmRate").addClass("disabledbutton");
			$("#tb_input_modal_pmRate input:radio").prop("checked", false);
			$("#spanRate1_OL").attr("disabled", false);
			$("#spanRate1_OL").parent().css("pointer-events","");
		});
		$("#select_input_pmRateOriginal").click(function(){
			$("#tb_input_modal_pmRate").removeClass("disabledbutton");
			$("#spanRate1_OL").attr("disabled", true);
			$("#spanRate1_OL").parent().css("pointer-events","none");
		});	
		
		$("#tbl_benefit_sale_ol .auto").autoNumeric('init');

	});

/*เมนู OL*/
var Statuesave = "Y";
var nameTab	= "";
$("#div_main_menuBasic_Info *").change(function(event){
	 nameTab 	= "menu_OL_1";
	 Statuesave = "N";
});
$("#benefit_sale_OL *").change(function(event){
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
$("#approve_OL *").change(function(event){
	 nameTab 	= "menu_OL_6";
	 Statuesave = "N";
});
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
		document.getElementById("ol_007_1_1-6").style.display = "none";
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
		document.getElementById("ol_007_1_1-6").style.display = "block";
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
		document.getElementById("ol_007_1_1-6").style.display = "none";
	}else if (data == "menu_OL_2") {
		document.getElementById("ol_007_1_1-1").style.display = "none";
		document.getElementById("ol_007_1_1-3").style.display = "none";
		document.getElementById("ol_007_1_1-2").style.display = "block";
		document.getElementById("ol_007_1_1-4").style.display = "none";
		document.getElementById("ol_007_1_1-5").style.display = "none";
		document.getElementById("ol_007_1_1-6").style.display = "none";
	}else if (data == "menu_OL_3") {
		document.getElementById("ol_007_1_1-1").style.display = "none";
		document.getElementById("ol_007_1_1-3").style.display = "block";
		document.getElementById("ol_007_1_1-2").style.display = "none";
		document.getElementById("ol_007_1_1-4").style.display = "none";
		document.getElementById("ol_007_1_1-5").style.display = "none";
		document.getElementById("ol_007_1_1-6").style.display = "none";
	}else if (data == "menu_OL_4") {
		document.getElementById("ol_007_1_1-1").style.display = "none";
		document.getElementById("ol_007_1_1-3").style.display = "none";
		document.getElementById("ol_007_1_1-2").style.display = "none";
		document.getElementById("ol_007_1_1-4").style.display = "block";
		document.getElementById("ol_007_1_1-5").style.display = "none";
		document.getElementById("ol_007_1_1-6").style.display = "none";
	}else if (data == "menu_OL_5") {
		document.getElementById("ol_007_1_1-1").style.display = "none";
		document.getElementById("ol_007_1_1-3").style.display = "none";
		document.getElementById("ol_007_1_1-2").style.display = "none";
		document.getElementById("ol_007_1_1-4").style.display = "none";
		document.getElementById("ol_007_1_1-5").style.display = "block";
		document.getElementById("ol_007_1_1-6").style.display = "none";
	}else if (data == "menu_OL_6") {
		document.getElementById("ol_007_1_1-1").style.display = "none";
		document.getElementById("ol_007_1_1-3").style.display = "none";
		document.getElementById("ol_007_1_1-2").style.display = "none";
		document.getElementById("ol_007_1_1-4").style.display = "none";
		document.getElementById("ol_007_1_1-5").style.display = "none";
		document.getElementById("ol_007_1_1-6").style.display = "block";
	}
	else if (data == "menu_OL_7") {
		document.getElementById("ol_007_1_1-1").style.display = "none";
		document.getElementById("ol_007_1_1-3").style.display = "none";
		document.getElementById("ol_007_1_1-2").style.display = "none";
		document.getElementById("ol_007_1_1-4").style.display = "none";
		document.getElementById("ol_007_1_1-5").style.display = "none";
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

/*************************Other Function**********************************/
function cancelPage(url){
	location.href = url;	
}
function parseDate(str) {
    var mdy = str.split('/')
    return new Date(mdy[2], mdy[1] - 1, mdy[0]);
}
function replaceComma(value){
	var result = value.replace(/,/g, "");
	return result;
}
function replaceDot(e){
	var value = $(e).val();
	var result = value.replace(/./g,'');
	$(e).val(result)
}
function replaceSpecialSymbol(e){
	var value = $(e).val();
	var result = value.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,'');
	$(e).val(result)
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function checkZero(e){
	var value = $(e).val();
	if(value == ""){
		$(e).val("0.00");
	}
}

/**************************** Validate **************************************/

function checkdateTo_fixSale_OL() {
	var startDate = $("#datefrom_ol_menu5").val();
	var endDate = $("#dateto_ol_menu5").val();
	
	if (startDate != "" && endDate != "") {
		var startDate_parse = parseDate($("#datefrom_ol_menu5").val());
	    var endDate_parse = parseDate($("#dateto_ol_menu5").val());
	    if(startDate_parse > endDate_parse){
	    	
	    	nameTab 	= "menu_OL_5";
	    	Statuesave = "N";
	    	message = "วันที่เริ่มต้นต้องน้อยกว่าวันที่สิ้นสุดเสมอ";
			alertError(message);
	    }
	}
}

function check_age_validate_OL(){
	
	var age_Start_ol = $('#start_age_insure_ol').val();
	var age_unitStart_ol = $('#start_age_insure_unit_ol option:selected').text();
	var age_To_ol = $('#end_age_insure_ol').val();
	var age_unitTo_ol = $('#end_age_insure_unit_ol option:selected').text();
	
	$("#start_age_insure_ol").on("keyup", function(){
		if(age_Start_ol != "" && age_unitStart_ol != "None" && age_To_ol != "" && age_unitTo_ol != "None"){
			//$("#validate_input6_1ol").hide();
			check_fromto_age_OL();
		}else{
			//$("#validate_input6_1ol").show();
		}
	});
	
	$("#start_age_insure_unit_ol").on("change", function(){
		if(age_Start_ol != "" && age_unitStart_ol != "None" && age_To_ol != "" && age_unitTo_ol != "None"){
			//$("#validate_input6_1ol").hide();
			check_fromtoUnit_age_OL($(this).val());
		}else{
			//$("#validate_input6_1ol").show();
		}
	});
	
	$("#end_age_insure_ol").on("keyup", function(){
		if(age_Start_ol != "" && age_unitStart_ol != "None" && age_To_ol != "" && age_unitTo_ol != "None"){
			//$("#validate_input6_1ol").hide();
			check_fromto_age_OL();
		}else{
			//$("#validate_input6_1ol").show();
		}
	});
	
	$("#end_age_insure_unit_ol").on("change", function(){
		if(age_Start_ol != "" && age_unitStart_ol != "None" && age_To_ol != "" && age_unitTo_ol != "None"){
			//$("#validate_input6_1ol").hide();
			check_fromtoUnit_age_OL($(this).val());
		}else{
			//$("#validate_input6_1ol").show();
		}
	});	
}
$("#end_age_insure_unit_ol").on("change", function(){
	if(age_Start_ol != "" && age_unitStart_ol != "None" && age_To_ol != "" && age_unitTo_ol != "None"){
		var age_Start_ol = $('#start_age_insure_ol').val();
		var age_unitStart_ol = $('#start_age_insure_unit_ol option:selected').text();
		var age_To_ol = $('#end_age_insure_ol').val();
		var age_unitTo_ol = $('#end_age_insure_unit_ol option:selected').text();
		check_fromtoUnit_age_OL($(this).val());
	}
});	
function check_fromtoUnit_age_OL(value){
	if($("#start_age_insure_unit_ol option:selected").text() != "None" && $("#end_age_insure_unit_ol option:selected").text() != "None"){
		//$("#dmy_5_ol").change(function(){
		
		if(value != "NONE"){

			var from_unit_text = $("#start_age_insure_unit_ol option:selected").val();
			var to_unit_text = $("#end_age_insure_unit_ol option:selected").val();	
			
			//alert(from_unit_text);

			var from_value = Number($('#start_age_insure_ol').val());
			var to_value = Number($('#end_age_insure_ol').val());
			
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
					$('#start_age_insure_ol').val("").focus();
				}
			}else if(from_unit_text == "DAY" && to_unit_text == "MONTH"){				 
					if(from_value_toMonth > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#start_age_insure_ol').val("").focus();
					}
			 }else if(from_unit_text == "MONTH" && to_unit_text == "DAY"){	
					if(to_value_toMonth < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#start_age_insure_ol').val("").focus();
				    }
		    }else if(from_unit_text == "DAY" && to_unit_text == "YEAR"){				 
					if(from_value_toYear > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#start_age_insure_ol').val("").focus();
					}
			 }else if(from_unit_text == "YEAR" && to_unit_text == "DAY"){		
					if(to_value_toYear < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#end_age_insure_ol').val("").focus();
				    }
		    }else if(from_unit_text == "MONTH" && to_unit_text == "YEAR"){				 
					if(from_value_MonthtoYear > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#start_age_insure_ol').val("").focus();
					}
			 }else if(from_unit_text == "YEAR" && to_unit_text == "MONTH"){				
					if(to_value_MonthtoYear < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#start_age_insure_ol').val("").focus();
					}
			 }
			
		//});	
		}	
		
	}
	
	if(value != "NONE"){
	//$("#dmy_6_ol").change(function(){	
		
		var from_unit_text = $("#start_age_insure_unit_ol option:selected").val();
		var to_unit_text = $("#end_age_insure_unit_ol option:selected").val();	
		
		var from_value = Number($('#start_age_insure_ol').val());
		var to_value = Number($('#end_age_insure_ol').val());
		
		var from_value_toMonth = Number(from_value/30);
		var to_value_toMonth = Number(to_value/30);	
		var from_value_toYear = Number(from_value/365);
		var from_value_MonthtoYear = Number(from_value/12);
		var to_value_MonthtoYear = Number(to_value/12);
		
		if(from_unit_text == to_unit_text){
			if(from_value > to_value){
				message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
				alertError(message);
				$('#end_age_insure_ol').val("").focus();
			}
		}else if(from_unit_text == "DAY" && to_unit_text == "MONTH"){				
				if(from_value_toMonth > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#end_age_insure_ol').val("").focus();
				}
		 }else if(from_unit_text == "MONTH" && to_unit_text == "DAY"){					
				if(to_value_toMonth < from_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#end_age_insure_ol').val("").focus();
				}
		}else if(from_unit_text == "DAY" && to_unit_text == "YEAR"){				 
				if(from_value_toYear > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#end_age_insure_ol').val("").focus();
				}
		 }else if(from_unit_text == "YEAR" && to_unit_text == "DAY"){
				var to_value_toYear = to_value/365;		
				if(to_value_toYear < from_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#end_age_insure_ol').val("").focus();
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
					$('#end_age_insure_ol').val("").focus();
				}
		 }
		
	//});	
	}
}

/*พิกัดอายุ ข้อกำหนด*/
function check_fromto_age_OL(){
	
	if($("#start_age_insure_unit_ol option:selected").text() != "None" && $("#end_age_insure_unit_ol option:selected").text() != "None"){
		$("#start_age_insure_ol").on('blur', function () {
			
		  var from_unit_text = $("#start_age_insure_unit_ol option:selected").val();
		  var to_unit_text = $("#end_age_insure_unit_ol option:selected").val();
			
		  var from_value = Number($('#start_age_insure_ol').val());
		  var to_value = Number($('#end_age_insure_ol').val());	
		  
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
					$('#start_age_insure_ol').val("").focus();
				}
			}else if(from_unit_text == "DAY" && to_unit_text == "MONTH"){				 
					if(from_value_toMonth > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#start_age_insure_ol').val("").focus();
					}
			 }else if(from_unit_text == "MONTH" && to_unit_text == "DAY"){	
					if(to_value_toMonth < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#end_age_insure_ol').val("").focus();
				    }
		    }else if(from_unit_text == "DAY" && to_unit_text == "YEAR"){				 
					if(from_value_toYear > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#start_age_insure_ol').val("").focus();
					}
			 }else if(from_unit_text == "YEAR" && to_unit_text == "DAY"){				 
					if(to_value_toYear < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#end_age_insure_ol').val("").focus();
				    }
		    }else if(from_unit_text == "MONTH" && to_unit_text == "YEAR"){				 
					if(from_value_MonthtoYear > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#start_age_insure_ol').val("").focus();
					}
			 }else if(from_unit_text == "YEAR" && to_unit_text == "MONTH"){				
					if(to_value_MonthtoYear < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#start_age_insure_ol').val("").focus();
					}
			 }
		});
	
	   $("#end_age_insure_ol").on('blur', function () {		
		 var from_unit_text = $("#start_age_insure_unit_ol option:selected").val();
		 var to_unit_text = $("#end_age_insure_unit_ol option:selected").val();
		 
		 var from_value = Number($('#start_age_insure_ol').val());
		 var to_value = Number($('#end_age_insure_ol').val());	
		 
		 var from_value_toMonth = Number(from_value/30);
		 var to_value_toMonth = Number(to_value/30);
		 var from_value_toYear = Number(from_value/365);
		 var to_value_toYear = Number(to_value/365);
		 var from_value_MonthtoYear = Number(from_value/12);
		 var to_value_MonthtoYear = Number(to_value/12);
		 
		 var from_value = Number($('#start_age_insure_ol').val());
		 var to_value = Number($('#end_age_insure_ol').val());
		 
		 if(from_unit_text == to_unit_text){
				if(from_value > to_value){
					message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
					alertError(message);
					$('#end_age_insure_ol').val("").focus();
				}
		  }else if(from_unit_text == "DAY" && to_unit_text == "MONTH"){				 
					if(from_value_toMonth > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#end_age_insure_ol').val("").focus();
					}
		  }else if(from_unit_text == "MONTH" && to_unit_text == "DAY"){				 
					if(to_value_toMonth < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#end_age_insure_ol').val("").focus();
					}
		  }else if(from_unit_text == "DAY" && to_unit_text == "YEAR"){				 
					if(from_value_toYear > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#end_age_insure_ol').val("").focus();
					}
		  }else if(from_unit_text == "YEAR" && to_unit_text == "DAY"){				
					if(to_value_toYear < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#end_age_insure_ol').val("").focus();
					}
		  }else if(from_unit_text == "MONTH" && to_unit_text == "YEAR"){				 
					if(from_value_MonthtoYear > to_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#end_age_insure_ol').val("").focus();
					}
		  }else if(from_unit_text == "YEAR" && to_unit_text == "MONTH"){
					if(to_value_MonthtoYear < from_value){
						message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
						alertError(message);
						$('#end_age_insure_ol').val("").focus();
					}
			 }
		
		});
	}
}

function checkMaxProtectionAge_OL() {
	
	var from_unit = $("#end_age_insure_unit_ol option:selected").val();
	var from_value = $("#end_age_insure_ol").val();
	var from_value_convert = "";
	var to_unit = "YEAR";
	var to_value = $("#max_insure_ol").val();

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
			  $("#max_insure_ol").focus();
			  $("#max_insure_ol").val("");
		  }			
	}				
}

function chk_reinsure_OL(value){
	if(value == 1){
		$("#panel_reinsure_OL").show();
		$("#rd_filing_rs_OL1").prop('checked',true)
	}else{
		$("#panel_reinsure_OL").hide();
		$("#rd_filing_rs_OL2").prop('checked',true)
	}
}


/************************* onclick date menu-5  ****************************/
function checkDateSaleTo_OL() {
	var startDate = $("#datefrom_ol_menu5").val();
	var endDate = $("#dateto_ol_menu5").val();
	
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

function rd_CreateClone(){
	var chk_create = $('#chk_rd_CreateProductRider').prop('checked');
	var chk_clone = $('#chk_rd_CloneProductRider').prop('checked');
	if(chk_create){
		$('#rd_CreateProductRider').show();
		$('#rd_CloneProductRider').hide();
	}else{
		$('#rd_CloneProductRider').show();
		$('#rd_CreateProductRider').hide();
	}
}

//tbl move data menu5
function moveRows(fromTable, toTable){
	var $row= fromTable.find(".checked");
	$.each($row, function(k, v){
		if(this !== null){
			addRow = fromTable.fnGetData(this);
			toTable.fnAddData(addRow);
			fromTable.fnDeleteRow(this);
		}
	});
}


function selectReinsurance(){
	var sendReinsurance = $('#selectSendReinsurance1').prop('checked');
	var NoneSendReinsurance = $('#selectSendReinsurance2').prop('checked');
	element = document.getElementById('label_send_re');
	if(sendReinsurance){
		element.style.opacity = "1";
		$('#lb_reinsurance').prop("disabled", false);
	}else if(NoneSendReinsurance){
		element.style.opacity = "0.5";
		$('#lb_reinsurance').prop("disabled", true);
	}
}

function selectPlan(){
	var groupPlan = document.getElementById("select_group_plan");
	var onePlan = document.getElementById("select_one_plan");
	if(groupPlan.checked == true){
		$('#selected_group_plan').show();
		$('#selected_one_plan').hide();
		$('#txt_area').show();
		
	}else{
		$('#selected_one_plan').show();
		$('#selected_group_plan').hide();
		$('#txt_area').hide();
		
	}
}
function checkLimitPlan(){
	var limitPlan = document.getElementById("limit_per_plan");
	var noneLimitPlan = document.getElementById("none_limit_per_plan");
	var checkedLimitPlanHidden1 = document.getElementById("limit_per_plan_hidden1");
	var checkedLimitPlanHidden2 = document.getElementById("limit_per_plan_hidden2"); 
	
	
	if(limitPlan.checked == true){
			$('#limit_per_plan_hidden').show();
			if(checkedLimitPlanHidden1.checked == true){
				
				$('#input_limit_per_plan_hidden1').prop("disabled", false);
			}else{
				
				$('#input_limit_per_plan_hidden1').prop("disabled", true);
			}
			
			if(checkedLimitPlanHidden2.checked == true){
			
				$('#input_limit_per_plan_hidden2').prop("disabled", false);
			}else{
			
				$('#input_limit_per_plan_hidden2').prop("disabled", true);
			}
			
			
	}else if(noneLimitPlan.checked == true){
		$('#limit_per_plan_hidden').hide();
	}
}
function checkLimitPerson(){
	var limitPers = document.getElementById("limit_per_person");
	var noneLimitPers = document.getElementById("none_limit_per_person");
	var lbl_limit_per_person1 = document.getElementById('label_limit_per_person1');
	var chk_limit_per_person1 = document.getElementById('limit_per_person1')
	
	var lbl_limit_per_person2 = document.getElementById('label_limit_per_person2');
	var chk_limit_per_person2 = document.getElementById('limit_per_person2')
	
	if(limitPers.checked == true){
		$('#limit_per_person_hidden').show();
		
		if(chk_limit_per_person1.checked == true){
			$('#input_limit_per_person1').prop("disabled", false);
			$('#tbl_limit_per_person1').show();
				
		}else{
			$('#input_limit_per_person1').prop("disabled", true);
			$('#tbl_limit_per_person1').hide();

		}
		
		if(chk_limit_per_person2.checked == true){
			$('#input_limit_per_person2').prop("disabled", false);
			$('#tbl_limit_per_person2').show();
				
		}else{
			$('#input_limit_per_person2').prop("disabled", true);
			$('#tbl_limit_per_person2').hide();

		}
	}else if(noneLimitPers.checked == true){
		$('#limit_per_person_hidden').hide();
	}
	
	
}

function checkSpecialPlan(){
	var specialPlan = document.getElementById("special_plan");
	if(specialPlan.checked == true){
		$('#table_special_plan').show();
		$('#check_special_plan').show();
	}else{
		$('#table_special_plan').hide();
		$('#check_special_plan').hide();
	}
}

function inputPMRate_modal(){	
	var upload1_rate = $('#upload1_pm_rate').prop('checked');
	var upload2_rate = $('#upload2_pm_rate').prop('checked');
	
	var upload1_nar_rate = $('#upload1_nar_rate').prop('checked');
	var upload2_nar_rate = $('#upload2_nar_rate').prop('checked');
	
	if(upload1_rate){	
		$('#spanRate1_ol').attr('disabled', false);
		$('#validate_rate1_ol').prop('disabled', false);
		$('#fileuploads_PMRate1_ol').prop('disabled', false);
		$('#fileuploads_PMRateText1_ol').prop('disabled', false);
			$("#tbl_pm_rate *").attr("disabled", "disabled").off('click');
			
	}else if(upload2_rate){
		$('#spanRate1_ol').attr('disabled', true);
		$('#validate_rate1_ol').prop('disabled', true);
		$('#fileuploads_PMRate1_ol').prop('disabled', true);
		$('#fileuploads_PMRateText1_ol').prop('disabled', true);
		$("#tbl_pm_rate *").prop("disabled", false);
			
	}
	
}

function add_row_tbl_money_count(){
	
	var lastImgOK = $('#tbl_money_count >tbody>tr:last>td:first').attr("id") || 0;
	var numberImgOK = 0;
	if(lastImgOK == 0){
		numberImgOK = 1;
	}else{
		numberImgOK = Number(lastImgOK.replace("name_money_count",""))+1;
	}

	var row_menu_3 = 1;
	var name_tr = "tbl_money_count_"+numberImgOK;
	
	
	var new_row = "<tr id='tbl_money_count_"+numberImgOK+"'>"+
	"<td class=\'text-center verticalCenter\'  class=\'text-center verticalCenter\' id='name_money_count"+numberImgOK+"'></td>"+
	"<td class=\"text-center verticalCenter\">"+
	"<i class=\"glyphicon glyphicon-minus icon-blue-circle icon_active \"  data-type=\'2\' id=\"removerow_"+numberImgOK+"\" onclick='removeRow(this);'></i>"+
"</td>"+
	"<td class=\'text-right verticalCenter\'  class=\'text-right verticalCenter\'>"+
	"<input type='text' class='auto text-right form-control' value='0.00' data-v-min='0.00' data-v-max='999.99'>" +
	"</td>"+
	"<td class=\'text-right verticalCenter\'  class=\'text-right verticalCenter\'>"+
	"<input type='text' class='auto text-right form-control' value='0.00' data-v-min='0.00' data-v-max='999.99'>" +
	"</td>"+
	"<td class=\'text-right verticalCenter\'  class=\'text-right verticalCenter\'>"+
	"<input type='text' class='auto text-right form-control' value='0.00' data-v-min='0.00' data-v-max='999.99'>" +
	"</td>"+
	"<td class=\'text-center verticalCenter\'  class=\'text-center verticalCenter\'>"+
	"<select class='form-control group_credit' id='cal_fix_cov_unit_"+numberImgOK+"'>"+
	"<option value='NONE'>None</option>"+
	/*"<option value=''>เปอร์เซ็นต์</option>"+
	"<option value=''>บาท</option>"+*/
	"</select>"+
	 "</td>"+
	 "<td class=\'text-center verticalCenter\'  class=\'text-center verticalCenter\'>"+
		"<select class='form-control group_credit' id='cal_fix_cov_factor_"+numberImgOK+"'>"+
		"<option value='NONE'>None</option>"+
		/*"<option value=''>SMI</option>"+
		"<option value=''>MI</option>"+
		"<option value=''>SA</option>"+
		"<option value=''>SA_DTPD</option>"+*/
		"</select>"+
		 "</td>"+
		 "<td class=\'text-right verticalCenter\'  class=\'text-right verticalCenter\'>"+
			"<input type='text' class='auto text-right form-control' value='0.00' data-v-min='0.00' data-v-max='999.99'>" +
			"</td>"+
	"<td class=\'text-center verticalCenter\'  class=\'text-center verticalCenter\'>"+
	"<select class='form-control group_credit' id='cal_fix_cov_factorMin_"+numberImgOK+"'>"+
	"<option value='NONE'>None</option>"+
	/*"<option value=''>SA_DTPD</option>"+*/
	"</select>"+
	 "</td>"+
	 "</tr>";	

	$("#tbl_money_count tbody").append(new_row);
	$('.auto').autoNumeric('init');
	
	/*get lookup*/
	var lookup_unit = $("#cal_fix_cov_unit_lookup").val();
	lookup_unit = lookup_unit.split(",");
	var pass = 0;
	var text = 1;
	for(a = 0 ; a < lookup_unit.length/2 ; a++){
		var opt_unit = "<option value='"+lookup_unit[pass]+"'>"+lookup_unit[text]+"</option>";
		pass = Number(parseInt(pass) + parseInt(2));
		text = Number(parseInt(text) + parseInt(2));
		$("#cal_fix_cov_unit_"+numberImgOK).append(opt_unit);
	}
	
	var lookup_factor = $("#cal_fix_cov_factor_lookup").val();
	lookup_factor = lookup_factor.split(",");
	var pass = 0;
	var text = 1;
	for(a = 0; a < lookup_factor.length/2; a++){
		var opt_factor =  "<option value='"+lookup_factor[pass]+"'>"+lookup_factor[text]+"</option>";
		pass = Number(parseInt(pass) + parseInt(2));
		text = Number(parseInt(text) + parseInt(2));
		$("#cal_fix_cov_factor_"+numberImgOK).append(opt_factor);
		
	}
	
	var lookup_factorMin = $("#cal_fix_cov_factorMin_lookup").val();
	lookup_factorMin = lookup_factorMin.split(",");
	var pass = 0;
	var text = 1;
	for(a = 0; a < lookup_factorMin.length/2; a++){
		var opt_factorMin =  "<option value='"+lookup_factorMin[pass]+"'>"+lookup_factorMin[text]+"</option>";
		pass = Number(parseInt(pass) + parseInt(2));
		text = Number(parseInt(text) + parseInt(2));
		$("#cal_fix_cov_factorMin_"+numberImgOK).append(opt_factorMin);
	}
	
	
	
}



function add_tbl_money_count_menu5(row){
	var row_menu_5 = 1;
	var name_tr_5 = "tbl_money_count_menu5"+row+"_"+row_menu_5;
	
	new_row = "<tr id=\"tbl_money_count_menu5"+row+"_"+row_menu_5+"\" data-id=\""+row+""+"_"+""+row_menu_5+"\" data-parent=\""+row+"\" data-level='2' data-group='"+row+"'>"+
	"<td class=\'text-center verticalCenter\'  class=\'text-center verticalCenter\'></td>"+
	"<td class=\'text-center verticalCenter\'  class=\'text-center verticalCenter\'></td>"+
	"<td class=\"text-center verticalCenter\">"+
		"<i class=\"glyphicon glyphicon-minus icon-blue-circle icon_active \"  data-id=\'"+row_menu_5+"\' data-topic=\'"+row_menu_5+"\' data-type=\'2\' id=\"removerow_"+row_menu_5+"\" onclick='removeRow(this);'></i>"+
	"</td>"+
	"<td class=\'text-center verticalCenter\'  class=\'text-center verticalCenter\'></td>"+
	"<td class=\'text-center verticalCenter\'  class=\'text-center verticalCenter\'></td>"+
	"<td class=\'text-center verticalCenter\'  class=\'text-center verticalCenter\'></td>"+
	"<td class=\'text-center verticalCenter\'  class=\'text-center verticalCenter\'></td>"+
	"<td class=\'text-center verticalCenter\'  class=\'text-center verticalCenter\'></td>"+
	"<td class=\'text-center verticalCenter\'  class=\'text-center verticalCenter\'></td>"+
	"</tr>";	
	$(new_row).insertAfter($("#tbl_money_count_menu5"+">tbody>tr[data-id=1]").closest('tr'));
}

function removeRow(e){
	$(e).parent().parent().remove();
}

function addRowLimitPerPerson(row){
	
	var length_tb1 = $("#tbl_limit_per_person tbody>tr").length;
	length_tb1++;
	
		var row_add_plan = 1;
		var name_tr = "tbl_limit_per_person"+row+"_"+row_add_plan;

		new_row = "<tr id=\"tbl_limit_per_person"+row+"_"+row_add_plan+"\" data-id=\""+row+""+"_"+""+row_add_plan+"\" data-parent=\""+row+"\" data-level='2' data-group='"+row+"'>"+
		"<td class=\'text-center verticalCenter\'  class=\'text-center verticalCenter\' id='imgOKPlan_"+length_tb1+"' onclick='imgCheckbox(this.id);'><i class='glyphicon glyphicon-edit'></i></td>"+
		"<td class=\'text-center verticalCenter\'>"+
		"<select class='form-control'>"+
		"<option>Individual Life</option>"+
		"</select>"+
		"</td>"+
		
		"<td class=\'text-center verticalCenter\'>"+
		"<select class='form-control'>"+
		"<option>Ordinary</option>"+
		"</select>"+
		"</td>"+
		
		"<td class=\'text-center verticalCenter\'>"+
		"<select class='form-control'>"+
		"<option>All</option>"+
		"</select>"+
		"</td>"+
		
		"<td class=\'text-center verticalCenter\'>"+
		"<select class='form-control'>"+
		"<option>NON-GIO-SIQ</option>"+
		"</select>"+
		"</td>"+
		
		"<td class=\'text-center verticalCenter\'>"+
		"<select class='form-control'>"+
		"<option>All</option>"+
		"</select>"+
		"</td>"+
		
		"<td class=\'text-center verticalCenter\'>"+
		"<select class='form-control'>"+
		"<option>Commercial Bank</option>"+
		"</select>"+
		"</td>"+
		
		"<td class=\'text-center verticalCenter\'>"+
		"<select class='form-control'>"+
		"<option>All</option>"+
		"</select>"+
		"</td>"+
		
		"</tr>";	
		
	 	$("#tbl_limit_per_person tbody").append(new_row);
	
}

function addRowLimitPerPerson2(row){
	var length_tb2 = $('#tbl_limit_per_person_most_cost tbody>tr').length;
	length_tb2++;
	var row_add_plan2 = 1;
	var name_tr2 = "tbl_limit_per_person_most_cost"+row+"_"+row_add_plan2;

	new_row = "<tr id=\"tbl_limit_per_person_most_cost"+row+"_"+row_add_plan2+"\" data-id=\""+row+""+"_"+""+row_add_plan2+"\" data-parent=\""+row+"\" data-level='2' data-group='"+row+"'>"+
	"<td class=\'text-center verticalCenter\'  class=\'text-center verticalCenter\' id='imgOKPlan_"+length_tb2+"' onclick='imgCheckbox(this.id);'><i class='glyphicon glyphicon-edit'></td>"+
	"<td class=\'text-center verticalCenter\'>"+
	"<select class='form-control'>"+
	"<option>Individual Life</option>"+
	"</select>"+
	"</td>"+
	
	"<td class=\'text-center verticalCenter\'>"+
	"<select class='form-control'>"+
	"<option>Ordinary</option>"+
	"</select>"+
	"</td>"+
	
	"<td class=\'text-center verticalCenter\'>"+
	"<select class='form-control'>"+
	"<option>All</option>"+
	"</select>"+
	"</td>"+
	
	"<td class=\'text-center verticalCenter\'>"+
	"<select class='form-control'>"+
	"<option>NON-GIO-SIQ</option>"+
	"</select>"+
	"</td>"+
	
	"<td class=\'text-center verticalCenter\'>"+
	"<select class='form-control'>"+
	"<option>All</option>"+
	"</select>"+
	"</td>"+
	
	"<td class=\'text-center verticalCenter\'>"+
	"<select class='form-control'>"+
	"<option>Commercial Bank</option>"+
	"</select>"+
	"</td>"+
	
	"<td class=\'text-center verticalCenter\'>"+
	"<select class='form-control'>"+
	"<option>All</option>"+
	"</select>"+
	"</td>"+
	"</tr>";	
	
	$("#tbl_limit_per_person_most_cost tbody").append(new_row);
}

function imgCheckbox(id){
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

//mockup data 2 row
function bt_choose_additional_contract(row) {
	
	 var checkrow_additional_contract = document.getElementById("tbl_additional_contract").rows.length;
	 var checked_additional_cntract1 = document.getElementById("cb_addtional_contract1");
	 var id_additional_cntract1 = $('#id_additional_contract1').text();
	 var name_additional_cntract1 = $("#name_additional_contract1").text();
	 var checked_additional_cntract2 = document.getElementById("cb_addtional_contract2");
	 var id_additional_cntract2 = $('#id_additional_contract2').text();
	 var name_additional_cntract2 = $("#name_additional_contract2").text();
	 
	

	 if(checked_additional_cntract1.checked == true){
	
		 if (checkrow_additional_contract <= 1) {

			 var row_add = 1;
			 var name_tr = "tbl_additional_contract"+row+"_"+row_add;
			 var new_row = "<tr id=\"tbl_additional_contract"+row+"_"+row_add+"\" data-id=\""+row+""+"_"+""+row_add+"\" data-parent=\""+row+"\" data-level='1' data-group='"+row+"'>"+
				
			 			" <td class='verticalCenter'>"+id_additional_cntract1+"</td>"+
			 			"<td class='verticalCenter font-term-green'>"+name_additional_cntract1+"</td>" +
			 			"<td class='verticalCenter'><div class='col-ms-3 input-group'>"+
			 			"<input type='text' class='form-control' id='' readonly> <span class='input-group-btn'>"+
			 			"<button class='btn btn-default btn-primary' type='button' id='' data-toggle='modal' data-target='#modal_upload_pm_rate'>...</button></span> </div></td>"+
			 			"<td class='verticalCenter'><span style='margin: 30%;' class='glyphicon glyphicon-eye-open activecolorgray'></span></td>"+
			 			"<td class='verticalCenter'><span style='margin: 30%;' class='glyphicon glyphicon-download-alt activecolorgray'></span></td>"+
			 			"<td class='verticalCenter'><div class='col-ms-3 input-group'>"+
			 			"<input type='text' class='form-control' id='' readonly> <span class='input-group-btn'>"+
			 			"<button class='btn btn-default btn-primary' type='button' id='' disabled='disabled'>...</button></span></div></td>"+
			 			"<td class='verticalCenter'><span style='margin: 30%;' class='glyphicon glyphicon-eye-open activecolorgray'></span></td>"+
			 			"<td class='verticalCenter'><span style='margin: 30%;' class='glyphicon glyphicon-download-alt activecolorgray'></span></td>"+
			 			"<td class='verticalCenter'>"+
			 			"<div id='form_input_file' class='input-group'>"+
						"<input type='hidden' id='fileId_nar' value=''> <input type='hidden' id='rate_cat_nar' > "+
						"<input type='hidden' id='rate_layout_nar' value=''> <input type='hidden' id='sub_cat_nar' > "+
						"<input type='text' class='form-control' id='fileuploads_NarText1_ol' readonly>"	+
						"<label class='input-group-btn'> <span id='spanRate1_nar_ol' class='btn btn-primary'> "+
						"<font id='validate_rate1_nar_ol' style='color: red;''>*</font><b> ..</b> "+
						"<input id='fileuploads_NarRate1_ol' type='file' accept='text/plain' style='display: none;'>"+
						"</span> "+
						"</label>"+
						" </div> "+
						"</td>"+
						"<td class='verticalCenter'><span style='margin: 30% ;' class='glyphicon glyphicon-eye-open activecolorgray'></span></td>"+
						"<td class='verticalCenter'><span style='margin: 30%;' class='glyphicon glyphicon-download-alt activecolorgray'></span></td>"+
				"</tr>";
					 	if($("#tbl_additional_contract tbody>tr").length == 0 ){
							$("#tbl_additional_contract tbody").append(new_row)
						}else{
							$(new_row).insertAfter($("#tbl_additional_contract"+">tbody>tr[data-id=1]").closest('tr'));
						}
						
		 }else {
				alert("มีข้อมูลอยู่แล้ว");
				
				
		 }
		 
	 }else if(checked_additional_cntract2.checked == true){
		 
		 if (checkrow_additional_contract <= 1) {
			 
			 var row_add = 1;
			 var name_tr = "tbl_additional_contract"+row+"_"+row_add;
			 var new_row = "<tr id=\"tbl_additional_contract"+row+"_"+row_add+"\" data-id=\""+row+""+"_"+""+row_add+"\" data-parent=\""+row+"\" data-level='1' data-group='"+row+"'>"+
				
			 			"<td class='verticalCenter'>"+id_additional_cntract2+"</td>"+
			 			"<td class='verticalCenter font-term-green'>"+name_additional_cntract2+"</td>" +
			 			"<td class='verticalCenter'><div class='col-ms-3 input-group'>"+
			 			"<input type='text' class='form-control' id='' readonly> <span class='input-group-btn'>"+
			 			"<button class='btn btn-default btn-primary' type='button' id='' data-toggle='modal' data-target='#modal_upload_pm_rate'>...</button></span> </div></td>"+
			 			"<td class='verticalCenter'><span style='margin: 30%;' class='glyphicon glyphicon-eye-open activecolorgray'></span></td>"+
			 			"<td class='verticalCenter'><span style='margin: 30%;' class='glyphicon glyphicon-download-alt activecolorgray'></span></td>"+
			 			"<td class='verticalCenter'><div class='col-ms-3 input-group'>"+
			 			"<input type='text' class='form-control' id='' readonly> <span class='input-group-btn'>"+
			 			"<button class='btn btn-default btn-primary' type='button' id='' disabled='disabled'>...</button></span></div></td>"+
			 			"<td class='verticalCenter'><span style='margin: 30%;' class='glyphicon glyphicon-eye-open activecolorgray'></span></td>"+
			 			"<td class='verticalCenter'><span style='margin: 30%;' class='glyphicon glyphicon-download-alt activecolorgray'></span></td>"+
			 			"<td class='verticalCenter'>"+
			 			"<div id='form_input_file' class='input-group'>"+
						"<input type='hidden' id='fileId_nar' value=''> <input type='hidden' id='rate_cat_nar' > "+
						"<input type='hidden' id='rate_layout_nar' value=''> <input type='hidden' id='sub_cat_nar' > "+
						"<input type='text' class='form-control' id='fileuploads_NarText1_ol' readonly>"	+
						"<label class='input-group-btn'> <span id='spanRate1_nar_ol' class='btn btn-primary'> "+
						"<font id='validate_rate1_nar_ol' style='color: red;''>*</font><b> ..</b> "+
						"<input id='fileuploads_NarRate1_ol' type='file' accept='text/plain' style='display: none;'>"+
						"</span> "+
						"</label>"+
						" </div> "+
						"</td>"+
						"<td class='verticalCenter'><span style='margin: 30% ;' class='glyphicon glyphicon-eye-open activecolorgray'></span></td>"+
						"<td class='verticalCenter'><span style='margin: 30%;' class='glyphicon glyphicon-download-alt activecolorgray'></span></td>"+
				"</tr>";	
			 
			 				if($("#tbl_additional_contract tbody>tr").length == 0 ){
			 					$("#tbl_additional_contract tbody").append(new_row)
			 				}else{
			 					$(new_row).insertAfter($("#tbl_additional_contract"+">tbody>tr[data-id=1]").closest('tr'));
			 				}

				 		

			
		 }else {

				alert("มีข้อมูลอยู่แล้ว");
				
		 }
		 
	 }else{
		
			alert("กรุณาเลือกความคุ้มครองสัญญาเพิ่มเติม");
			
	 }
	 
}

function deleteAdditionContract() {
	/* tbl menu1 */
	
	$("#tbl_additional_contract tbody>tr").each(function(){
		
		$(this).remove();
	});
	
	/* tbl menu5 */
		$("#tbl_limit_per_person tbody>tr").each(function() {

			if ($(this).find('td:nth-child(1) i').hasClass('glyphicon-ok')) {
				$(this).remove();
			}/*else{
				message = "กรุณาเลือกรายการที่ต้องลบ";
				alertError(message);
			}*/

	});

		$("#tbl_limit_per_person_most_cost tbody>tr").each(function() {

			if ($(this).find('td:nth-child(1) i').hasClass('glyphicon-ok')) {
				$(this).remove();
			}/*else {
				message = "กรุณาเลือกรายการที่ต้องลบ";
				alertError(message);
			}*/
		});
}

/*********************KHWAN Edit*******************/
/*validate*/
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

////*modal เลือกสัญญาเพิ่มเติม/////	
$(document).on("click", "#addrowAdditional_contract", function () {
	
		var json_data = {
				"method": "getAllRider_CL",
				"rCode": $("#pass_Insurance_product_ol").val()
			}
			
			$.ajax({
				url: 'ProductRider_Data_default_Servlet',
				type: "POST",
				data: json_data,
				success: function (response) {
					$('#tb_Additional_contract_modal').DataTable().destroy();
					$("#tb_Additional_contract_modal tbody").find("tr").remove();
					
					var row = "";
					var row2 = "";
					var id = 1;
					for(i in response.Rider_CL_Data){
						var obj = response.Rider_CL_Data[i];
						row2 += 	"<tr  id=\"row2_"+id+""+"\">" +	
								"<td class=\"col-sm-1 text-center"+"\">"+
									"<input type='hidden' id='rider_cov_cat_id"+id+"' value='"+obj.cov_cat_id+"' >"+
									/*"<input type='hidden' id='prd_code_rider_"+id+"' value='"+obj.prd_rider_code+"'>"+*/
									"<input type=\"radio\" name= 'ch_Additional_contract[]' id=\"ch_Additional_contract_"+id+"\" value='"+obj.insuranceNo+"'>"+
								"</td>"+
								"<td class=\"verticalCenter col-sm-2 text-left"+"\">"+"<label style=\"text-decoration: underline; color: blue;\" for='ch_Additional_contract_"+id+"' id=\"additional_contract_pass_"+id+""+"\">"+obj.insuranceNo+"</label>"+"" +
								"</td>"+
								"<td class=\"col-sm-5 text-left"+"\">"+"<label id=\"additional_contract_Name_"+id+""+"\" for='ch_Additional_contract_"+id+"'>"+obj.nameTH+"</label>"+"" +
								"</td>"+
							"</tr>";			  
						
						check_row_modal2 = id;
						id++;
					}
					$("#tb_Additional_contract_modal tbody").append(row2);
					$("#tb_Additional_contract_modal").DataTable({"ordering": false,"paging": false,"bInfo" : false, scrollY: '236px',scrollCollapse: true, "autoWidth": false, 
						fixedHeader: {header: true},"oLanguage": {"sSearch": "ค้นหา: "}
					});
					$("#tb_Additional_contract_modal_wrapper .dataTables_scrollHeadInner").css({"width":"100%"});
					$("#tb_Additional_contract_modal_wrapper .table").css({"width":"100%"});
					$('#tb_Additional_contract_modal_wrapper .sorting_asc').removeClass('sorting_asc');

					/*เลือกสัญญาเพิ่มเติมที่มีอยู่แล้ว*/
					var numrow_rider = $("#tb_Additional_contract>tbody>tr").length;
					var arr_rider = [];
					if(numrow_rider > 0){
						$("#tb_Additional_contract>tbody>tr").each(function(){
							var rider_number = $(this).find("td:nth-child(2)>label").text();
							arr_rider.push(rider_number);
						});
					}
					var save_arr_rider = arr_rider.join(",");
					var split_arr_rider = save_arr_rider.split(",");
					
					for(var a=0; a<split_arr_rider.length; a++){
						$("#tb_Additional_contract_modal tbody>tr").each(function(){
							if(split_arr_rider[a] == $(this).find("td:nth-child(2)").text()){
								$(this).find("input[type='checkbox']").prop("checked",true);
							}
						});
					}
					
					$('#modal_Additional_contract').modal('show');
				},
				error : function(){
					alert("Fail")
				}
			});
			console.log("data",json_data);
			

});

//ยืนยันการเลือกข้อมูลจาก modal สัญญาเพิ่มเติม
var numAdditional_contract = "";
function bt_save_Additional_contract() {
	
	var checkrowTB_tb_Rider = document.getElementById("tb_Additional_contract").rows.length;//check row
	
	var numberImgOK = $("#tb_Additional_contract_modal tbody input:radio:checked").attr("id");
		numberImgOK = numberImgOK.replace("ch_Additional_contract_","");
	
	var ftOnclick = 'imgCheckbox(id);';	
	var rider_id = $("#additional_contract_pass_"+numberImgOK).text();
	var rider_name = $("#additional_contract_Name_"+numberImgOK).text();
	var rider_cov_cat_id = $("#rider_cov_cat_id"+numberImgOK).val();
	//var prd_code_rider = $("#prd_code_rider_"+numberImgOK).val();
	var rider_type = "";
	var id = 1;
	var changeFileModal = 'modalGet_selectFile("'+rider_id+'","fileuploads_PMRate1_OL","ip_fileuploads_OL_Additional_contract_Show_'+id+'","span_Additional_contractopen_'+id+'","validate_Additional_OL_'+id+'_OL","span_Additional_contractdownload_'+id+'")';
	
	if (checkrowTB_tb_Rider <= 1) {

		    var newID = "imgOK_"+id;
		    var rate_cat_NAR = $("#rate_cat_NAR").val();
		    var addrowChild = 'addrowChild("'+id+'","'+rider_name+'","'+rider_type+'");';
		   		    	   		       		    	 
			    row2 = 	"<tr id=\"tr_Additional_contract_"+id+"\" data-id=\""+id+"\" data-level=\"1\">"+
				"<td class=\"text-left verticalCenter borderBlack\">"+
					"<input type='hidden' id='rider_cov_cat_id"+id+"' value='"+rider_cov_cat_id+"'>"+
					/*"<input type='hidden' id='prd_code_rider_"+id+"' value='"+prd_code_rider+"'>"+*/
					"<label style=\"text-decoration: underline; color: blue;\">"+rider_id+"</label>"+
				"</td>"+
				"<td class=\"text-left verticalCenter fontcolortable2 borderBlack\">"+
					"<label>"+rider_name+"</label>"+
				"</td>"+
				/*PM*/
				"<td class=\"verticalCenter borderBlack\">"+
					"<div class=\"input-group col-xs-12\">"+
						"<input type='hidden' id='fileId_rider_PM"+id+"' value='' />"+
						"<input type='hidden' id='rate_cat_id_rider_PM"+id+"' value='' />"+
						"<input type='hidden' id='rate_layout_id_rider_PM"+id+"' value='' />"+
						"<input type=\"file\" accept=\".txt\" id=\"ip_fileuploads_Additional_contract"+id+"\" style=\"display: none\">"+
						"<input type=\"text\" class=\"form-control clear_val\" id=\"ip_fileuploads_OL_Additional_contract_Show_"+id+"\" readonly> " +
						"<span class=\"input-group-btn\"><button class=\"btn btn-default btn-primary\" type=\"button\" id=\"bt_uploadfileAdditional_contract"+id+"\"  onclick='"+changeFileModal+"' data-toggle=\"modal\" data-target=\"#modal_input_PMRate\">" +
								/*"<font id='validate_Additional_CL_"+numberImgOK+"_CL' class='require_file' style='color: red;'>*</font>" +*/
								"...</button>"+
						"</span>"+
					"</div>"+
				"</td>"+
				"<td class='text-center verticalCenter borderBlack'>"+
					"<a id='span_Additional_contractopen_"+id+"' class='active_grey'>"+
						"<span class='glyphicon glyphicon-eye-open activecolorgray'></span>"+
					"</a>"+
				"</td>"+
				"<td class='text-center verticalCenter borderBlack'>"+
					"<a id='span_Additional_contractdownload_"+id+"' data-id='span_Additional_contractdownload_"+id+"' class='active_grey'>"+
						"<span class='glyphicon glyphicon-download-alt activecolorgray'></span>"+
					"</a>"+
				"</td>"+
				/*EM*/
				"<td class=\"verticalCenter borderBlack\">"+
				"<div class=\"input-group col-xs-12\">"+
					"<input type='hidden' id='fileId_rider_EM"+id+"' value=''/>"+
					"<input type='hidden' id='rate_cat_id_rider_EM"+id+"' value=''/>"+
					"<input type='hidden' id='rate_layout_id_rider_EM"+id+"' value='' />"+
					"<input type='text' class='form-control clear_val' id='ip_fileuploads_AdditionalEM_contract_"+id+"' readonly=''>"+ 
				"<label class='input-group-btn'> "+
					"<span id='spanAdditionalEM_OL_"+id+"' class='btn btn-primary' disabled>"+
							"<b>...</b>"+
						"<input id='ip_fileuploads_OL_AdditionalEM_contract_Show_"+id+"' type='file' accept=\".txt\" style='display: none;' disabled>"+
					"</span>"+
				"</label>"+
				"</div>"+
				"</td>"+
			"<td class='text-center verticalCenter borderBlack'>"+
				"<a id='span_Additional_contractopen_EM_"+id+"' class='active_grey'>"+
					"<span class='glyphicon glyphicon-eye-open activecolorgray'></span>"+
				"</a>"+
			"</td>"+
			"<td class='text-center verticalCenter borderBlack'>"+
				"<a id='span_Additional_contractdownload_EM_"+id+"' data-id='span_Additional_contractdownload_EM_"+id+"' class='active_grey'>"+
					"<span class='glyphicon glyphicon-download-alt activecolorgray'></span>"+
				"</a>"+
			"</td>"+
				/*NAR*/
				"<td class=\"verticalCenter borderBlack\">"+
				"<div class=\"input-group col-xs-12\">"+
					"<input type='hidden' id='fileId_rider_NAR"+id+"' value=''/>"+
					"<input type='hidden' id='rate_cat_id_rider_NAR"+id+"' value='"+rate_cat_NAR+"'/>"+
					"<input type='hidden' id='rate_layout_id_rider_NAR"+id+"' value='' />"+
					"<input type='text' class='form-control clear_val' id='ip_fileuploads_AdditionalNAR_contract_"+id+"' readonly=''>"+ 
				"<label class='input-group-btn'> "+
					"<span id='spanAdditionalNAR_OL_"+id+"' class='btn btn-primary' >"+
					/*"<font id='validate_AdditionalNAR_CL_"+numberImgOK+"' class='require_file' style='color: red;'>*</font>" +*/
							"<b>...</b>"+
						"<input id='ip_fileuploads_OL_AdditionalNAR_contract_Show_"+id+"' type='file' accept=\".txt\" style='display: none;'>"+
					"</span>"+
				"</label>"+
				"</div>"+
				"</td>"+
				"<td class=\"text-center verticalCenter borderBlack\">"+
					"<a id='span_Additional_contractopenNAR_"+id+"' class='active_grey'>"+
						"<span class='glyphicon glyphicon-eye-open activecolorgray'></span>"+
					"</a>"+
				"</td>"+
				"<td class=\"text-center verticalCenter borderBlack\">" +
					"<a id='span_Additional_contractdownloadNAR_"+id+"' data-id='span_Additional_contractdownloadNAR_"+id+"' class='active_grey'>"+
						"<span class='glyphicon glyphicon-download-alt activecolorgray'></span>"+
					"</a>"+
				"</td>"+
			    "</tr>";
				
				$("#tb_Additional_contract tbody").append(row2);
				$(".autoComma").autoNumeric('init',{vMin: '0.00', vMax: '999999999.99'});
			    
				// เพิ่ม onchange placeholder ของไฟล์ที่เลือกมา
				var layout_name1 = $("#layout_NAR1").val();
				var product_code_main = $("#pass_Insurance_product_ol").val();
				var layout1 = layout_name1+rider_id+"_"+product_code_main;
				var placehoder_text = layout1+".txt";
				//$("#ip_fileuploads_Additional_contract_"+numberImgOK).attr("placeholder",placehoder_text);
				$("#ip_fileuploads_AdditionalNAR_contract_"+id).attr("placeholder",placehoder_text);
								
				/**************************/
				// NAR
				var uploadfile2 = "selectFileRate_OL(22,'ip_fileuploads_OL_AdditionalNAR_contract_Show_"+id+"','"+layout1+"','','','span_Additional_contractopenNAR_"+id+"')";
				$("#ip_fileuploads_OL_AdditionalNAR_contract_Show_"+id).attr("onchange",uploadfile2);
				
				
				/*Get Case*/
				get_case_rider(rider_id);			
		
	}else{
		alert("มีข้อมูลแล้ว");
	}

}

/*Get case ตอนเลือก rider*/
function get_case_rider(cov_code){

	var json_data = {
			"method" : "getCaseRider",
			"rCode" : cov_code
	}
	$.ajax({
		url: 'ProductRider_GetData_Servlet',
		type: "POST",
		data: json_data,
		async: false,
		success: function (response) {
			var obj = response.Tab_Basic_Information[0];
			var obj_calPrem = response.Tab_cal_insurance_premiums[0];
			
			/****Tab Basic****/
			getData_TabBasicInfo(cov_code, response);
			/*ปิดปุ่ม PM rate กรณีไม่มีการเลือกมาใน rider*/
			if(obj_calPrem.table_insurance_premium.length <= 0){
				$("#bt_uploadfileAdditional_contract1").attr("disabled", true);
			}
			
			/****Tab Cal Prem****/
			getData_TabCalPrem(cov_code, response);
			
			/****Tab Benefit****/
			showcase_benefit_OL("",cov_code);
			get_dataBenefit_OL(response);
			/****Tab Term******/
			getData_Term_OL(response);
			/****Tab Policy****/
			var row_policy = "";
			row_policy = " <li>" +
							"<a data-toggle='tab' href='#policy_in_"+cov_code+"' class='green'>"+cov_code+"</a>" +
						"</li>"
			$("#tab_policy_panel").prepend(row_policy)
			getLookup_policyWording_data(cov_code,response);

		}
	});
	console.log("data",json_data);
}

/*Get data ตาม tab*/
function getData_TabBasicInfo(cov_code, response){
	var obj = response.Tab_Basic_Information[0];
	var obj_calPrem = response.Tab_cal_insurance_premiums[0];
	var cov_code = cov_code;
	
	/*EM Rate*/
	if(obj_calPrem.em_Age.length > 0){
		var EM_fileid = obj_calPrem.em_Age[0].fileID;
		var EM_ratecat = obj_calPrem.em_Age[0].rate_cat_id;
		var EM_layoutid = obj_calPrem.em_Age[0].layout;
		var EM_value = obj_calPrem.em_Age[0].file;

		$("#fileId_rider_EM1").val(EM_fileid);
		$("#rate_cat_id_rider_EM1").val(EM_ratecat);
		$("#rate_layout_id_rider_EM1").val(EM_layoutid);
		$("#ip_fileuploads_AdditionalEM_contract_1").val(EM_value);
		
		$("#span_Additional_contractopen_EM_1 span").removeClass("activecolorgray").addClass("activecolorblue").attr("onclick", "openFileTextProductRider('"+EM_value+"', '"+obj_calPrem.em_Age[0].ref+"', 3, 'tb_inputExtra_RateView_OL', 'modal_inputExtra_RateView_OL')");
		
		$("#span_Additional_contractdownload_EM_1 span").removeClass("activecolorgray").addClass("activecolorblue").attr("onclick", "openFile_target('"+EM_value+"','"+obj_calPrem.em_Age[0].ref+"','txt_download')");
	}
	
	/*NAR*/
	if(obj_calPrem.table_NAR.length > 0){
		var NAR_fileid = obj_calPrem.table_NAR[0].fileID;
		var NAR_layoutid = obj_calPrem.table_NAR[0].layout;
		var NAR_value = obj_calPrem.table_NAR[0].file;				
		$("#fileId_rider_NAR1").val(NAR_fileid);
		$("#rate_layout_id_rider_NAR1").val(NAR_layoutid);
		$("#ip_fileuploads_AdditionalNAR_contract_1").val(NAR_value);

		$("#span_Additional_contractopenNAR_1 span").removeClass("activecolorgray").addClass("activecolorblue").attr("onclick", "openFileTextProductRider('"+NAR_value+"', '"+obj_calPrem.table_NAR[0].ref+"', 63, 'tb_input_fileSee_modal_NAR', 'modal_input_fileSee_NAR')");
		$("#span_Additional_contractdownloadNAR_1 span").removeClass("activecolorgray").addClass("activecolorblue").attr("onclick", "openFile_target('"+NAR_value+"','"+obj_calPrem.table_NAR[0].ref+"','txt_download')");

	}
	
	/*พิกัดอายุ*/
	//คุ้มครองสูงสุด
	var maximum_insure = "";
	var maximum_Insure_unit = "";
	if(obj.maximum_Insure_year != 0){
		maximum_insure = obj.maximum_Insure_year;
		maximum_Insure_unit = "ปี";
	}else{
		maximum_insure = obj.maximum_Insure_age;
		maximum_Insure_unit = "ถึงอายุ";
	}

	var row_age = "<tr>"+
				"<td class='verticalCenter text-center font-term-green borderBlack'><label>"+cov_code+"</label></td>"+
				"<td class='verticalCenter text-right backgroundColorGray borderBlack'>"+obj.age_Start+"</td>"+
				"<td class='verticalCenter text-right borderBlack'>"+obj.age_To+"</td>"+
				"<td class='verticalCenter text-right borderBlack'>"+maximum_insure+"</td>"+
				"<td class='verticalCenter text-center borderBlack'>"+maximum_Insure_unit+"</td>"+
				"</tr>";
	$("#tb_ageRange_OL tbody").append(row_age);
	
	/*เพศ*/
	if(obj.sex == "MALE"){
		$("#male_gender").prop("checked", true);
	}else if(obj.sex == "FEMALE"){
		$("#female_gender").prop("checked", true);
	}else{
		$("#male_gender").prop("checked", true);
		$("#female_gender").prop("checked", true);
	}
	
	/*Mode*/
	if(obj.mode.length > 0){
		for(i in obj.mode){
			var mode = obj.mode[i].value;
			$("#tbl_mode_ol input:checkbox").each(function(){
				if($(this).val() == mode){
					$(this).prop("checked", true);
				}
			});
		}
	}
				
	/*ระยะชำระเบี้ย*/
	if(obj.premium_preiod_radio == "TO_AGE"){
		$("#lb_paymentTerm_OL").text("ชำระถึงอายุ");
	}else{
		$("#lb_paymentTerm_OL").text("ระยะชำระเบี้ย");
	}
	
	var premFrom_unit = "";
	var premTo_unit = "";
	if(obj.premium_preiod_unit == "AGE"){
		premFrom_unit = "ปี";
		premTo_unit = "ถึงอายุ";
	}else{
		premFrom_unit = obj.premium_preiod_unit_text;
		premTo_unit = obj.premium_preiod_unit_text;
	}

	var row_PaymentTerm = "";
	if(obj.premium_preiod_radio != ""){
		row_PaymentTerm = "<tr>"+
			"<td class='text-center verticalCenter fontcolortable2 borderBlack' width='60'><label>1</label></td>"+
			"<td class='text-center verticalCenter fontcolortable2 borderBlack' width='60'><label>"+premFrom_unit+"</label></td>"+
			"<td class='text-center verticalCenter fontcolortable2 borderBlack' width='60'><label>"+obj.premium_num+"</label></td>"+
			"<td class='text-center verticalCenter fontcolortable2 borderBlack' width='60'><label>"+premTo_unit+"</label></td>"+
		"</tr>";
	}else{
		row_PaymentTerm = "<tr>"+
			"<td class='text-center verticalCenter fontcolortable2 borderBlack' width='60'><label></label></td>"+
			"<td class='text-center verticalCenter fontcolortable2 borderBlack' width='60'><label></label></td>"+
			"<td class='text-center verticalCenter fontcolortable2 borderBlack' width='60'><label></label></td>"+
			"<td class='text-center verticalCenter fontcolortable2 borderBlack' width='60'><label></label></td>"+
		"</tr>";
	}
		
		$("#tbl_paymentTerm_OL tbody").append(row_PaymentTerm);
}

function getData_TabCalPrem(cov_code, response){
	var obj = response.Tab_Basic_Information[0];
	var obj_calPrem = response.Tab_cal_insurance_premiums[0];
	var cov_code = cov_code;
	var prd_code = $("#pass_Insurance_product_ol").val();
	var type_coverage = "";
	if(response.Tab_Basic_Information[0].type_coverage[0]){
		type_coverage = response.Tab_Basic_Information[0].type_coverage[0].type[4].cat_name;
	}
	
	/*Age Type*/
	var list_age_type = "";
	if(obj_calPrem.age_Band.length > 0){
		for(i in obj_calPrem.age_Band){
			list_age_type += "<option value='"+obj_calPrem.age_Band[i].value+"'>"+obj_calPrem.age_Band[i].value+"</option>";
		}
		$("#lb_age_specific_OL").append(list_age_type);
	}

	/*การคำนวณจำนวนเงินเอาประกันภัย*/
	var num_row_cal = $("#tb_Calculate_insurance tbody tr").length;
	if(num_row_cal > 0){
		$("#tb_Calculate_insurance tbody tr").remove();
	}
	
	var row_cal = "";
	var numrow_cal = 1;
	var dropdownUnit = $("#cal_fix_cov_unit_lookup").val();
	var dropdownOF1 = $("#cal_fix_cov_factor_lookup").val();
	var dropdownOF2 = $("#cal_fix_cov_factorMin_lookup").val();
	row_cal = "<tr id=\"tr_Calculate_insurance_"+numrow_cal+"\" data-id=\""+numrow_cal+"\" data-group='"+numrow_cal+"' data-parent=\"0\" data-level=\"1\" data-key='"+cov_code+"' >"+
					"<td width=\"14%\" class=\"text-center verticalCenter fontcolortable2 borderBlack\">"+
						"<label>"+cov_code+"</label>"+
						"<input type='hidden' id='prd_rider_code' value='"+prd_code+"'>"+
						"<input type='hidden' id='seq' value='1'>"+
						"<input type='hidden' id='serie_no' value='1'>"+
						"<input type='hidden' id='type_coverage' value='"+type_coverage+"'>"+
					"</td>"+
					"<td width=\"3%\" class=\"text-center verticalCenter borderBlack\">"+
						"<i class=\"glyphicon glyphicon-plus icon-blue-circle\"  data-id=\'"+numrow_cal+"\' data-topic=\'"+numrow_cal+"\' data-type=\'"+numrow_cal+"\' id=\"addrowMenu3_"+numrow_cal+"\" onclick=\"addrowMenu3("+numrow_cal+");\"></i>"+
					"</td>"+	
					"<td width=\"7%\"class=\"text-right verticalCenter borderBlack\">"+
					"<input type='text' class='autoComma form-control text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999999999.99' onblur='chkBlank_tbCal(this);'>"+
					"</td>"+
					"<td width=\"7%\" class=\"text-right verticalCenter borderBlack\">"+
					"<input type='text' class='autoComma form-control margin-padding0 text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999999999.99' onblur='validateMax_tbCal(this); chkBlank_tbCal(this);'>"+
					"</td>"+
					"<td width=\"10%\"class=\"text-right verticalCenter borderBlack\">"+
					"<input type='text' class='auto autoComma form-control margin-padding0 text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999999999.99' onblur='chkBlank_tbCal(this); check_value_format(1,this);'>"+
					"</td>"+
					"<td width=\"14%\" class=\"text-right verticalCenter borderBlack\">"+
						"<select class=\"form-control\" onchange='check_value_format(2,this);'>"+dropdownUnit+"</select></td>"+
					"<td width=\"14%\" class=\"text-right verticalCenter borderBlack\">"+
						"<select class=\"form-control\">"+dropdownOF1+"</select></td>"+
					"<td width=\"10%\" class=\"text-right verticalCenter borderBlack\">"+
					"<input type='text' class='autoComma form-control margin-padding0 text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999999999.99' onblur='chkBlank_tbCal(this);'>"+
					"<td width=\"14%\" class=\"text-right verticalCenter borderBlack\">"+
						"<select class=\"form-control\">"+dropdownOF2+"</select></td>"+
				"</tr>";
		if($("#tb_Calculate_insurance tbody>tr").length == 0){
			$("#tb_Calculate_insurance tbody").append(row_cal);
		}else{
			$(row_cal).insertBefore("#tb_Calculate_insurance tbody>tr:first");
		}
		$(".autoComma").autoNumeric('init',{vMin: '0.00', vMax: '999999999.99'});
		
		
		/*การคำนวณเบี้ยประกันภัย*/
		var num_row_cal2 = $("#tb_Calculate_insurance2 tbody tr").length;
		if(num_row_cal2 > 0){
			$("#tb_Calculate_insurance2 tbody tr").remove();
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
				input_file = "ip_fileuploads_OL_Additional_contract_Show_1";
			}else if(i == 2){
				text_prem = "Extra Rate";
				rate_cat = 8
				sl_calculus = sl_formula8;
				input_file = "ip_fileuploads_AdditionalEM_contract_1";
			}else if(i == 3){
				text_prem = "NAR";
				rate_cat = 9
				sl_calculus = sl_formula9;
				input_file = "ip_fileuploads_AdditionalNAR_contract_1";
			}
			
				row_cal2 = 	"<tr id=\"tb_Calculate_insurance2_"+i+"\">"+
				"<td width=\"30%\" class=\"text-center verticalCenter fontcolortable2 borderBlack\">"+
				/*"<input type='hidden' id='cov_code' value='"+cov_code+"'>";*/
				"<input type='hidden' id='prd_rider_code' value='"+prd_code+"'>";
			if(i == 1){
				row_cal2  += "<label>"+cov_code+"</label>";
			}else{
				row_cal2  += "";
			}
				row_cal2  += "</td>"+
				"<td width=\"20%\" class=\"text-center verticalCenter borderBlack\">"+
					"<label>"+text_prem+"</label>"+	
					"<input type='hidden' id='rate_cat_formula' value='"+rate_cat+"'/>"+
				"</td>"+	
				"<td width=\"50%\"class=\"text-center verticalCenter borderBlack\">"+
				"<select class=\"form-control\">"+sl_calculus+"</select></td>"+
			"</tr>";
				
			$("#tb_Calculate_insurance2 tbody").append(row_cal2);
			
			/*if($("#"+input_file).val() == ""){
				$("#tb_Calculate_insurance2_"+i).find("select").prop("disabled", true);
			}*/
		}
	
		var formula_PreimumRate = response.Tab_cal_insurance_premiums[0].table_insurance_premium.length;
		var formula_ExtraRate = response.Tab_cal_insurance_premiums[0].table_extra_Rate.length;
		var formula_NAR = response.Tab_cal_insurance_premiums[0].table_NAR.length;
		if(formula_PreimumRate == 0){
			$("#tb_Calculate_insurance2_1").find("select").prop("disabled", true);
		}
		if(formula_ExtraRate == 0){
			$("#tb_Calculate_insurance2_2").find("select").prop("disabled", true);
		}
		if(formula_NAR == 0){
			$("#tb_Calculate_insurance2_3").find("select").prop("disabled", true);
		}
}

function getData_Term_OL(response){
	var obj = response.Tab_Basic_Information[0];
	
	/*พิกัดอายุ*/
	$("#start_age_insure_ol").val(obj.age_Start)
	$("#start_age_insure_unit_ol option[value='"+obj.age_Start_Unit+"']").attr("selected",true);
	$("#end_age_insure_ol").val(obj.age_To)
	$("#end_age_insure_unit_ol option[value='"+obj.age_To_Unit+"']").attr("selected",true);
	if(obj.maximum_Insure_year_unit != "NONE"){
		$("#end_age_maxInsure_unit_ol option[value='"+obj.maximum_Insure_year_unit+"']").attr("selected",true);
		$("#max_insure_ol").val(obj.maximum_Insure_year)
	}
	if(obj.maximum_Insure_age_unit != "NONE"){
		$("#end_age_maxInsure_unit_ol option[value='"+obj.maximum_Insure_age_unit+"']").attr("selected",true);
		$("#max_insure_ol").val(obj.maximum_Insure_age)
	}
	
	/*****ข้อกำหนด - สร้างตาราง การรับแบบเพิ่มเบี้ยพิเศษ/รับแบบมีเงื่อนไข ****/
	var cat_name = response.Tab_Basic_Information[0].type_coverage[0].type[4].cat_name
	var cat_code = response.Tab_Basic_Information[0].type_coverage[0].type[3].cat_code
	var max_em 	=  (response.Tab_cal_insurance_premiums[0].max_EM*100).toFixed(2)
	var row_unwEM = "<tr>"+
						"<td class='verticalCenter text-center'>" +
							"<input type='hidden' id='hdcat_code' value='"+cat_code+"'/>"+ 
							"<label class='font-term-green'>"+cat_name+"</label>" +
						"</td>"+
						"<td class='verticalCenter text-center'><input type='text' class='autoPercent3 form-control text-right' value='"+max_em+"' data-v-min='0.00' data-v-max='999.99' disabled></td>"+
						"<td class='verticalCenter text-center'><input type='text' id='unw_maxEM' class='autoPercent3 form-control text-right' value='0.00' data-v-min='0.00' data-v-max='999.99' onblur='validate_maxEM_OL(this);'></td>"+
					"</tr>";
	$("#tbl_UNW_EM tbody").append(row_unwEM)
	$(".autoPercent3").autoNumeric('init',{vMin: '0.00', vMax: '999.99'});
	
}

/* modalGet_selectFile */
function modalGet_selectFile(id,id_row,textVal,spanfile,validate,spanDownload){
	
	//check base or rider
	var chk_type ;
	if( id == $("#tb_PM_Rate tbody>tr").eq(0).find('td:nth-child(1) label').text()){
		chk_type = true;
	}else{
		chk_type = false;
	}
	
	// clear old data
	$("#fileuploads_PMRateText1_OL").val("");
	$("#validate_rate1_OL").css("display","inline-block");
	
	/*if($("#cov_type").val() == "CL"){
		var rate_cat = "1,2";
		rate_cat[0] = 1;
		rate_cat[1] = 2;
	}else{
		var rate_cat = "26,27";
		rate_cat[0] = 26;
		rate_cat[1] = 27
	}*/
	
	var json_data = {
			"method" : "GetlookupRM_Rate",
			"cov_code" : id,
			//"rate_cat" : rate_cat
			"cov_type" : $("#cov_type").val()
	}
	
	console.log(json_data);
	$.ajax({
		url: 'ProductRider_GetData_Servlet',
		type: "POST",
		data: json_data,
		success: function (response) {
			// pm Rate
			if(response.Pm_Rate[0]){
				// placeholder ของไฟล์ที่เลือกมา
				var obj = response.Pm_Rate[0];
				var layout_name = obj.pattern;
				var product_code_main = $("#pass_Insurance_product_ol").val();
				
				var layout = layout_name+id+"_"+product_code_main;
				$("#fileuploads_PMRateText1_OL").attr("placeholder",layout+".txt");
				
				$("#form_input_file #rate_cat_pm").val(obj.rate_cat_id);
				$("#form_input_file #rate_layout_pm").val(obj.rate_layout_id);
				$("#form_input_file #sub_cat_pm").val(obj.sub_cat_id);
				
			
				if(chk_type){
					var uploadfile = "selectFileRate_OL(1,'"+id_row+"','"+layout+"','','','"+spanfile+"')";
				}else{
					var uploadfile = "selectFileRate_OL(11,'"+id_row+"','"+layout+"','','','"+spanfile+"')";
				}
			
				$("#fileuploads_PMRate1_OL").attr("onchange",uploadfile);
				
				//ดึงข้อมูล base plan ที่ มาลง pm rate
				var row = "";
				$("#tb_input_modal_pmRate tbody>tr*").remove();
				var flag_textVal = false;
				for(i in response.Pm_Rate){
					var obj = response.Pm_Rate[i];
					row = "<tr>"+
							"<td class='text-center'>" 
							if($("#"+textVal).val() == obj.file_name){
								flag_textVal = true;
								$("#select_input_pmRateOriginal").prop("checked",true)
								$("#select_input_pmRate").prop("checked",false)
								$("#tb_input_modal_pmRate").removeClass('disabledbutton')
								row += "<input type='radio' name='select_fileOriginal' value='"+obj.file_id+"' checked/>"
							}else if(flag_textVal == false){
								$("#select_input_pmRate").prop("checked",true)
								$("#select_input_pmRateOriginal").prop("checked",false)
								$("#tb_input_modal_pmRate").addClass('disabledbutton')
								row += "<input type='radio' name='select_fileOriginal' value='"+obj.file_id+"'/>"
							}else{
								row += "<input type='radio' name='select_fileOriginal' value='"+obj.file_id+"'/>"
							}
						row +=	"<input type='hidden' id='hd_rateCatId"+i+"' value='"+obj.rate_cat_id+"'/>"+
								"<input type='hidden' id='hd_fileId"+i+"' value='"+obj.file_id+"'/>"+
								"<input type='hidden' id='hd_fileLayout"+i+"' value='"+obj.rate_layout_id+"'/>"+
								"<input type='hidden' id='hd_fileRef"+i+"' value='"+obj.ref+"'/>"+
							"</td>"+
							"<td class='text-center'><a id='span_PM_Rateopen_oldFile_"+i+"' class='active_grey'><span data-id='' class='glyphicon glyphicon-eye-open activecolorblue'></span></a></td>"+
							"<td class='text-left'><label>"+obj.file_name+"</label></td>"+
						"</tr>"
						$("#tb_input_modal_pmRate tbody").append(row);
						$("#span_PM_Rateopen_oldFile_"+i).attr("onclick", "openFileTextProductRider('"+obj.file_name+"', '"+obj.ref+"',41,'tb_input_fileSee_modal_pmRate', 'modal_input_fileSee_PMRate')");
				}
			}else{
				$("#fileuploads_PMRateText1_OL").attr("placeholder","");
				$("#tb_input_modal_pmRate tbody>tr*").remove();
			}
			var saveFile = "choose_file_pmRate('"+textVal+"','"+validate+"','"+spanfile+"','"+spanDownload+"');"
			$("#bt_contirm_saveFilePMRate").attr("onclick",saveFile)
		}
	});
	console.log("data",json_data)	
}

function choose_file_pmRate(textfile,validate,span_open,span_download){
	var file_ref = "";
	var file_name = "";
	if($("#select_input_pmRate").is(':checked')){
		file_name = $("#fileuploads_PMRateText1_OL").val();
	}
	if($("#select_input_pmRateOriginal").is(':checked')){
		$("#tb_input_modal_pmRate tbody>tr").each(function(i){
			if($(this).find("td:nth-child(1) input[type='radio']").is(":checked")){
				file_name = $(this).find("td:nth-child(3) label").text();
				file_ref = $(this).find("td:nth-child(1) #hd_fileRef"+i+"").val();
			}
		});
		$("#"+span_download+">span").removeClass("activecolorgray").addClass("activecolorblue");
		$("#"+span_download+">span").attr("onclick", "openFile_target('"+file_name+"','"+file_ref+"','txt_download')")
		
		$("#"+span_open+">span").removeClass("activecolorgray").addClass("activecolorblue");
		$("#"+span_open+">span").attr("onclick","openFileTextProductRider('"+file_name+"', '"+file_ref+"', 41, 'tb_input_fileSee_modal_pmRate', 'modal_input_fileSee_PMRate')");
		
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
	if($("#select_input_pmRateOriginal").is(':checked')){
		$("#tb_input_modal_pmRate tbody>tr").each(function(i){
			if($(this).find('td:nth-child(1) input[type="radio"]').is(':checked')){
				rateCatId = $(this).find("td:nth-child(1) #hd_rateCatId"+i+"").val();
				fileId = $(this).find("td:nth-child(1) #hd_fileId"+i+"").val();
				layoutId = $(this).find("td:nth-child(1) #hd_fileLayout"+i+"").val();
			}
		})
	}else if($("#select_input_pmRate").is(':checked')){
		rateCatId = $("#rate_cat_pm").val();
		fileId = $("#fileId_pm").val();
		layoutId = $("#rate_layout_pm").val();
	}

	
	var id = textfile;
		id = id.replace("ip_fileuploads_OL_Additional_contract_Show_","");
	
		$("#"+textfile).parent().find("#fileId_rider_PM"+id+"").val(fileId)
		$("#"+textfile).parent().find("#rate_layout_id_rider_PM"+id+"").val(layoutId)
		$("#"+textfile).parent().find("#rate_cat_id_rider_PM"+id+"").val(rateCatId)
		$("#span_Additional_contractopen_"+id+">span").removeClass("activecolorgray").addClass("activecolorblue");
		$("#span_Additional_contractdownload_"+id+">span").removeClass("activecolorgray").addClass("activecolorblue");
	
	$("#modal_input_PMRate").modal("hide");
}

function deleteRowAdditional_contract() {
	
	if( $("#tb_Additional_contract tbody>tr").length > 0){
		message = "ต้องการลบความคุ้มครองสัญญาเพิ่มเติมใช่หรือไม่";
		alertDeleteError(message);
		
		$("#btn_confirm_del").click(function(){
			
			$("#tb_Additional_contract tbody>tr").remove();
			
			/*ลบตารางพิกัดอายุ*/
			$("#tb_ageRange_OL tbody>tr").remove();
			
			/*เพศ*/
			$("input[name='gender[]']").prop("checked",false);
			
			/*ลบตาราง mode*/
			$("#tbl_mode_ol input:checkbox").prop("checked",false);
						
			/*ลบระยะชำระเบี้ย*/
			$("#tbl_paymentTerm_OL tbody>tr").remove();
			
			/********การคำนวณเบี้ยประกัน*******/
			$("#tb_Calculate_insurance tbody>tr").remove();
			$("#tb_Calculate_insurance2 tbody>tr").remove();
			$("#lb_age_specific_OL option").remove();
			
			$("#lb_age_specific_OL").append("<option value=''>Age Specific</option>");
			
			/* ข้อกำหนด term*/
			$("#tbl_UNW_EM tbody>tr").remove()  
			
			/* ข้อกำหนด Policy*/
			$("#tab_policy_panel li").remove();
			$("#policy_panel_tab_OL").find('div').remove();
			/**************************/
			$("#benefitDetail_OL #tabBenefitRider_OL").html("");
			$("#benefitDetail_OL>div").remove();
			$("#benefitDetail_OL .tab-content").html("");
			
			/*ผลประโยชน์การขาย*/
			$("#tbl_benefit_sale_ol tbody>tr[data-level='1']").find("td:nth-child(4) input").val("");
			$("#tbl_benefit_sale_ol tbody>tr[data-level='1']").find("td:nth-child(5) input").val("");
			$("#tbl_benefit_sale_ol tbody>tr[data-level='1']").find("td:nth-child(6) input").val("0.00");
			$("#tbl_benefit_sale_ol tbody>tr[data-level='1']").find("td:nth-child(7) input").val("0.00");
			$("#tbl_benefit_sale_ol tbody>tr[data-level='1']").find("td:nth-child(8) input").val("0.00");
			$("#tbl_benefit_sale_ol tbody>tr[data-level='1']").find("td:nth-child(9) input").val("0.00");
			$("#tbl_benefit_sale_ol tbody>tr[data-level='1']").find("td:nth-child(10) input").val("0.00");
			$("#tbl_benefit_sale_ol tbody>tr[data-level='1']").find("td:nth-child(11) input").val("0.00");
			$("#tbl_benefit_sale_ol tbody>tr[data-level='1']").find("td:nth-child(12) input").val("0.00");
			$("#tbl_benefit_sale_ol tbody>tr[data-level='1']").find("td:nth-child(13) input").val("0.00");
			$("#tbl_benefit_sale_ol tbody>tr[data-level='1']").find("td:nth-child(14) input").val("0.00");
			$("#tbl_benefit_sale_ol tbody>tr[data-level='1']").find("td:nth-child(15) input").val("0.00");
			$("#tbl_benefit_sale_ol tbody>tr[data-level='1']").find("td:nth-child(16) input").val("0.00");			
			$("#tbl_benefit_sale_ol tbody>tr[data-level='1']").find("td:nth-child(6) input").prop("disabled", false);
			$("#tbl_benefit_sale_ol tbody>tr[data-level='1']").find("td:nth-child(7) input").prop("disabled", true);
			
			$("#tbl_benefit_sale_ol tbody>tr[data-level='2']").remove();
			
		})
	}else{
		
	}
	
}

/*******************คำนวณเบี้ย*****************/
function addrowMenu3(row) {
	var rowChild3 = 0;
	var rowChild_count = $("#tb_Calculate_insurance tbody>tr[data-parent='"+row+"']").length || 0;
	var end_sa = $("#tb_Calculate_insurance tbody>tr[data-group='"+row+"']:last").find('td:nth-child(4) input').val();
	var cov_code = 	$("#tb_Calculate_insurance tbody>tr[data-group='"+row+"']:first").find('td:nth-child(1) label').text();
	
	if(rowChild_count < 0){
		rowChild3 = 1;
	}else{
		rowChild3 = rowChild_count+1;
	}
	
	if( Number(replaceComma(end_sa)) >= 1 && Number(replaceComma(end_sa)) < 999999999.99){
		end_sa = Number(replaceComma(end_sa)) + 1
		///หน่วย
		var dropdownUnit = $("#cal_fix_cov_unit_lookup").val();
		///	ของ1
		var dropdownOF1 = $("#cal_fix_cov_factor_lookup").val();
		///	ของ2
		var dropdownOF2 = $("#cal_fix_cov_factorMin_lookup").val();
	
		var prd_rider_code = $("#tb_Calculate_insurance tbody>tr[data-id="+row+"]").find('td:nth-child(1) #prd_rider_code').val();
		var name_tr 		= "tr_Calculate_insurance"+row+"_"+rowChild3;
		var removerowChild = 'removerowChild3("'+name_tr+'");';
		var serie_no = Number(rowChild3) + Number(1);
		var new_row 		=  "<tr id=\"tr_Calculate_insurance"+row+"_"+rowChild3+"\" data-id=\""+row+"_"+rowChild3+"\" data-group='"+row+"' data-parent=\""+row+"\" data-level=\"2\">"+
						"<td width=\"14%\" class=\"text-center verticalCenter fontcolortable1 borderBlack\">"+
							"<input type='hidden' id='cov_code' value='"+cov_code+"' >"+
							"<input type='hidden' id='prd_rider_code' value='"+prd_rider_code+"' >"+
							"<input type='hidden' id='serie_no' value='"+serie_no+"'>"+
							"<input type='hidden' id='seq' value=''>"+
							"<label>"+"</label>"+
						"</td>"+
						"<td width=\"3%\" class=\"text-center verticalCenter borderBlack\">"+
							//"<i class=\"glyphicon glyphicon-plus-sign\"  data-id=\'"+numrow3+"\' data-topic=\'"+numrow3+"\' data-type=\'"+numrow3+"\' id=\"addrowMenu3_"+numrow3+"\" onclick=\"addrowMenu3("+numrow3+");\"></i>"+
							"<i class=\"glyphicon icon-blue-circle glyphicon-minus icon_active\"  data-id=\'"+rowChild3+"\' data-topic=\'"+rowChild3+"\' data-type=\'"+rowChild3+"\' id=\"removerow_"+rowChild3+"\" onclick='"+removerowChild+"'></i>"+
							"</td>"+	
						"<td width=\"7%\"class=\"text-right verticalCenter borderBlack\">"+
						"<input type='text' class='autoComma form-control margin-padding0 text-center width40px' value='"+end_sa+"' data-v-min='0.00' data-v-max='999999999.99' disabled>"+
						"</td>"+
						"<td width=\"7%\" class=\"text-right verticalCenter borderBlack\">"+
						"<input type='text' class='autoComma form-control margin-padding0 text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999999999.99' onblur='validateMax_tbCal(this); chkBlank_tbCal(this);'>"+
						"</td>"+
						"<td width=\"10%\"class=\"text-right verticalCenter borderBlack\">"+
						"<input type='text' class='autoComma form-control margin-padding0 text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999999999.99' onblur='chkBlank_tbCal(this); check_value_format(1,this);'>"+
						"</td>"+
						"<td width=\"14%\" class=\"text-right verticalCenter borderBlack\">"+
							"<select class=\"form-control\" onchange='check_value_format(2,this);'>"+dropdownUnit+"</select></td>"+
						"<td width=\"14%\" class=\"text-right verticalCenter borderBlack\">"+
							"<select class=\"form-control\">"+dropdownOF1+"</select></td>"+
						"<td width=\"10%\" class=\"text-right verticalCenter borderBlack\">"+
						"<input type='text' class='autoComma form-control margin-padding0 text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999999999.99' onblur='chkBlank_tbCal(this);'>"+
						"<td width=\"14%\" class=\"text-right verticalCenter borderBlack\">"+
							"<select class=\"form-control\">"+dropdownOF2+"</select></td>"+
					"</tr>";			  
		
		if(rowChild_count > 0){
			$(new_row).insertAfter($("#tb_Calculate_insurance"+">tbody>tr[data-parent="+row+"]:last").closest('tr'));
		}else{
			$(new_row).insertAfter($("#tb_Calculate_insurance"+">tbody>tr[data-id="+row+"]").closest('tr'));
		}
		$(".autoComma").autoNumeric('init',{vMin: '0.00', vMax: '999999999.99'});
		
	}else{
		message = "กรุณาใส่ค่าทุนชีวิตอ้างอิง (SA Life) สิ้นสุด";
		alertError(message);
	}
}

function removerowChild3(value) {
	$('#'+value).remove(); 
}

function validateMax_tbCal(e){
	var value = replaceComma($(e).val());
	var min_value = replaceComma($(e).parent().parent().find('td:nth-child(3) input').val());
	
	//validate
	var next_value = $(e).closest('tr').next('tr').find("td:nth-child(3) input").val();
	
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

function check_value_format(type,e){
	//input key value
	if(type == 1){
		var value = replaceComma($(e).val());
		var dd_value = $(e).parent().parent().find("td:nth-child(6) select").val();
		
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
		var input_value = replaceComma($(e).parent().parent().find("td:nth-child(5) input").val());
		
		if(value == "CURRENCY"){
			if(Number(input_value) > 999999999.99){
				message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
				alertError(message);
				$(e).parent().parent().find("td:nth-child(5) input").val("0.00");
			}
		}else if(value == "PERCENT"){
			if(Number(input_value) > 999.99){
				message = "กรุณาตรวจสอบการระบุข้อมูลอีกครั้ง";
				alertError(message);
				$(e).parent().parent().find("td:nth-child(5) input").val("0.00");
			}
		}
	}
	
}

function validate_levelJob(){
	var flag = $("#mode_career_term0_ol").is(':checked');
	
	if(flag){
		$("#tbl_saleDegreeTerm tbody>tr").each(function(i){
			if(i!=0){
				$(this).find('td:nth-child(1) input').prop("checked",false).attr("disabled",true)
			}
		})
	}else{
		$("#tbl_saleDegreeTerm tbody>tr").each(function(i){
			if(i!=0){
				$(this).find('td:nth-child(1) input').attr("disabled",false)
			}
		})
	}
}
function validate_input10_ol(){
	var flag = false;
	$("#tbl_saleDegreeTerm tbody>tr").each(function(){
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

function chkBlank_tbCal(e){
	var value = replaceComma($(e).val());
	if(value == ""){
		$(e).val("0.00");
	}

}

function get_rate_value(){

	for(var i=1; i<=3; i++){		
		if(i == 1){
			input_file = "ip_fileuploads_OL_Additional_contract_Show_1";
		}else if(i == 2){
			input_file = "ip_fileuploads_AdditionalEM_contract_1";
		}else if(i == 3){
			input_file = "ip_fileuploads_AdditionalNAR_contract_1";
		}
		
		if($("#"+input_file).val() == ""){
			$("#tb_Calculate_insurance2_"+i).find("select").prop("disabled", true);
		}else{
			$("#tb_Calculate_insurance2_"+i).find("select").prop("disabled", false);
		}
	}
}

/********4. ผลประโยชน์การขาย******/
function start_date(e){		
	/*date from*/
	
	var date_from 			= $(e).val();
		date_from			= date_from.split("/");
	var appStart_day			= date_from[0];
	var appStart_month			= date_from[1];
	var appStart_year			= date_from[2];
	var date_start = new Date(appStart_year + "/" + appStart_month + "/" + appStart_day) ;
	
	var start_day = date_start.getDate();
	var start_month = date_start.getMonth()+1;
	var start_year = date_start.getFullYear();
	
	var start_fulldate = start_year+"/"+start_month+"/"+start_day;
	
	/*jQuery(e).datetimepicker({
		timepicker : false,
		format : 'd/m/Y',
		yearOffset:543 
			
	});*/
	
}

function to_date(e){
	/*date from*/
	var date_from 			= $(e).val();
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
	var date_to = $(e).val();		
		date_to			= date_to.split("/");
	var dateto_day			= date_to[0];
	var dateto_month		= date_to[1];
	var dateto_year			= date_to[2];
	var date_end	= new Date(dateto_year + "/" + dateto_month + "/" + dateto_day) ;
	
	var to_day = date_end.getDate();
	var to_month = date_end.getMonth()+1;
	var to_year = date_end.getFullYear();	
	var to_fulldate = to_year+"/"+to_month+"/"+to_day;

	
	/*jQuery(e).datetimepicker({
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

function checkdateFrom(e) {
	   var id = e.replace("datefrom_saleBnf","");
	   var startDate = $("#"+e).val();
	   var endDate = $("#dateto_saleBnf"+id).val();
	   
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
function checkdateTo(e) {
	   var id = e.replace("dateto_saleBnf","");
	   var startDate = $("#datefrom_saleBnf"+id).val();
	   var endDate = $("#"+e).val();
	   
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

function add_row_saleBnf_OL(row){
	var dataId = $(row).data('id');
	var is_ref_base = $("#tbl_benefit_sale_ol tbody>tr[data-id='"+dataId+"'] input:checkbox").prop("checked");
	var num_child = $("#tbl_benefit_sale_ol tbody>tr[data-parent='"+dataId+"']").length;
	var last_row = "";
	
	if(num_child > 0){
		last_row = $("#tbl_benefit_sale_ol tbody>tr[data-parent='"+dataId+"']:last-child").data("id") || 0;
		last_row = Number(last_row.replace(dataId+"_",""))+1;
	}else{
		last_row = 1;
	}
	
	var new_row_id = dataId+"_"+last_row;
	
	var end_date = $('#tbl_benefit_sale_ol tbody>tr:last-child').find('td:nth-child(5) input').val(); 
	var start_date = $('#tbl_benefit_sale_ol tbody>tr:last-child').find('td:nth-child(4) input').val(); 
	//var last_end_date = $('#tbl_benefit_sale_ol tbody>tr:last-child').find("td:nth-child(5) input").val();
	
	str_end_date = end_date;
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
		 new_row = "<tr id='tr_saleBnf"+new_row_id+"' data-id='"+new_row_id+"' data-parent='"+dataId+"' data-level='2' data-group='"+dataId+"'>"+
		 	"<td class=\'text-center verticalCenter\'  class=\'text-center verticalCenter\'></td>"+
			"<td class=\'text-center verticalCenter\'  class=\'text-center verticalCenter\'></td>"+
			"<td class=\"text-center verticalCenter\">"+
			"<i class=\"glyphicon glyphicon-minus icon-blue-circle icon_active \"  data-id=\'"+new_row_id+"\' id=\"removerow_"+new_row_id+"\" onclick='removeRow(this);'></i>"+
			"</td>"+
			"<td class='text-center'><input type='text' class='form-control format_date disabledAll' id='datefrom_saleBnf"+new_row_id+"' onblur='' placeholder='dd/mm/yyyy' value='"+today+"' maxlength='10' disabled></td>"+
			"<td class='text-center'><input type='text' class='form-control format_date' id='dateto_saleBnf"+new_row_id+"' onblur='checkdateTo(this.id);' placeholder='dd/mm/yyyy' maxlength='10' readonly></td>"+	
			"<td class=\'text-right verticalCenter\'>"+
			"<input type='text' class='auto text-right form-control' id='txb_year1_"+new_row_id+"' onblur='checkZero(this);' value='0.00' data-v-min='0.00' data-v-max=999.99>" +
			"</td>"+
			"<td class=\'text-right verticalCenter\'>"+
			"<input type='text' class='auto text-right form-control' id='txb_Maxyear1_"+new_row_id+"' onblur='checkZero(this);' value='0.00' data-v-min='0.00' data-v-max='999.99'>" +
			"</td>"+
			"<td class=\'text-right verticalCenter\'>"+
			"<input type='text' class='auto text-right form-control' id='txb_year2_"+new_row_id+"' onblur='checkZero(this);' value='0.00' data-v-min='0.00' data-v-max='999.99'>" +
			"</td>"+
			"<td class=\'text-right verticalCenter\'>"+
			"<input type='text' class='auto text-right form-control'  id='txb_year3_"+new_row_id+"' onblur='checkZero(this);' value='0.00' data-v-min='0.00' data-v-max='999.99'>" +
			"</td>"+
			"<td class=\'text-right verticalCenter\'>"+
			"<input type='text' class='auto text-right form-control' id='txb_year4_"+new_row_id+"' onblur='checkZero(this);' value='0.00' data-v-min='0.00' data-v-max='999.99'>" +
			"</td>"+
			"<td class=\'text-right verticalCenter\'>"+
			"<input type='text' class='auto text-right form-control' id='txb_credit_"+new_row_id+"' onblur='checkZero(this);' value='0.00' data-v-min='0.00' data-v-max='999.99'>" +
			"</td>"+
			"<td class=\'text-right verticalCenter\'>"+
			"<input type='text' class='auto text-center form-control' id='txb_override_"+new_row_id+"' onblur='checkZero(this);' value='0.00' data-v-min='0.00' data-v-max='999.99'>" +
			"</td>"+
			"<td class=\'text-right verticalCenter\'>"+
			"<input type='text' class='auto text-center form-control' id='txb_comm_"+new_row_id+"' onblur='checkZero(this);' value='0.00' data-v-min='0.00' data-v-max='999.99'>" +
			"</td>"+
			"<td class=\'text-right verticalCenter\'>"+
			"<input type='text' class='auto text-center form-control' id='txb_incentive_"+new_row_id+"' onblur='checkZero(this);' value='0.00' data-v-min='0.00' data-v-max='999.99'>" +
			"</td>"+
			"<td class=\'text-right verticalCenter\'>"+
			"<input type='text' class='auto text-center form-control' id='txb_bonus_"+new_row_id+"' onblur='checkZero(this);' value='0.00' data-v-min='0.00' data-v-max='999.99'>" +
			"</td>"+
			"<td class=\'text-right verticalCenter\'>"+
			"<input type='text' class='auto text-center form-control' id='txb_expense_"+new_row_id+"' onblur='checkZero(this);' value='0.00' data-v-min='0.00' data-v-max='999.99'>" +
			"</td>"+
			"</tr>";	
		
		 
		 if(end_date == ""){
				message = "กรุณาใส่วันที่เริ่มต้น และวันที่สิ้นสุด";
				alertError(message);
		 }else if(str_end_date == "31/12/9999"){
			 	message = "กรุณาเปลี่ยนวันที่สิ้นสุด";
				alertError(message);
		 }else{
			if(num_child > 0){
				$(new_row).insertAfter($("#tbl_benefit_sale_ol"+">tbody>tr[data-parent="+dataId+"]:last").closest('tr'));
			}else{
				$(new_row).insertAfter($("#tbl_benefit_sale_ol"+">tbody>tr[data-id="+dataId+"]:last").closest('tr'));
			}
			
			$('.auto').autoNumeric('init');
		 }
		 
		 if(is_ref_base == true){
			 $("#tr_saleBnf"+new_row_id).find("td:nth-child(6) input").prop("disabled", true);
			 $("#tr_saleBnf"+new_row_id).find("td:nth-child(7) input").prop("disabled", false);
		 }else{
			 $("#tr_saleBnf"+new_row_id).find("td:nth-child(6) input").prop("disabled", false);
			 $("#tr_saleBnf"+new_row_id).find("td:nth-child(7) input").prop("disabled", true);
		 }
		
	}else{
		message = "กรุณาใส่วันที่เริ่มต้น และวันที่สิ้นสุด";
		alertError(message);
	}
	
		var year_end = new Date().getFullYear();
//		year_end = year_end + 9999
		year_end = 9999 - 543;
		
		console.log("end>> "+year_end);

		jQuery("#tr_saleBnf"+new_row_id+" td:nth-child(4) input,#tr_saleBnf"+new_row_id+" td:nth-child(5) input").datetimepicker({
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
		
		jQuery("#tr_saleBnf"+new_row_id+" td:nth-child(4) input,#tr_saleBnf"+new_row_id+" td:nth-child(5) input").on("mouseenter mouseleave", function(e){
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
	
	/*jQuery(".format_date").datetimepicker({
		  timepicker:false,
		  format:'d/m/Y',
		  yearOffset:543 
		  

	}); */
}

function chk_is_base(){
	if($("#chk_is_ref_base").prop("checked") == true){
		$("#tbl_benefit_sale_ol tbody").find("td:nth-child(6) input").prop("disabled", true).val("0.00");
		$("#tbl_benefit_sale_ol tbody").find("td:nth-child(7) input").prop("disabled", false);
	}else{
		$("#tbl_benefit_sale_ol tbody").find("td:nth-child(6) input").prop("disabled", false);
		$("#tbl_benefit_sale_ol tbody").find("td:nth-child(7) input").prop("disabled", true).val("0.00");
	}	
}

/**********************Function File**************************/

function selectFileRate_OL(type,select_file,file_format,file_format2,dd_opt,cv_btn){	
	var tbl_name = "";
	var tbl_col = "";
	var dd_opt = dd_opt;
	var cv_button = cv_btn;
	var select_file_name = "";
	var validateFile = "";
	var downloadFile = "";
	var prd_code = $("#pass_Insurance_product_ol").val();
	var cov_code = "";
	
	/*file*/
	var file_id = 0;
	var file_type_id = 3;
	var file_path = "";
	var file_pattern = "";
	var user_code = "0000000";	
	
	/* แบบประกันเสริม - PMRate Rider */
	if(type == 11){
		
		tbl_name = "tb_input_fileSee_modal_pmRate";
		tblAuto_name = "tb_input_file_modal_pmRate"; // ใส่ไฟล์
		modal_name = "modal_input_file_PMRate";  //ใส่ไฟล์
		modal_cv = "modal_input_fileSee_PMRate";
		tbl_col = 41;		
		file_button1 = "bt_submit_pmRate";
		file_button2 = "bt_cancel_pmRate";
		select_file_name = select_file.replace("fileuploads_PMRate","");
		select_file_name = select_file_name.replace("_OL","");
		selectFile = "fileuploads_PMRate"+select_file_name+"_OL";
		textFile = "fileuploads_PMRateText"+select_file_name+"_OL";
		
		validateFile = "validate_rate"+select_file_name+"_OL";
		downloadFile = "span_Additional_contractdownload_"+select_file_name;
		
		rate_cat_id = $("#rate_cat_pm").val();
		sub_cat_id = $("#form_input_file #sub_cat_pm").val();
	}
	/* แบบประกันเสริม - NAR Rider */
	if(type == 22){
	
		tbl_name = "tb_input_fileSee_modal_NAR";
		tblAuto_name = "tb_input_file_modal_NAR"; // ใส่ไฟล์
		modal_name = "modal_input_file_NAR";  //ใส่ไฟล์
		modal_cv = "modal_input_fileSee_NAR";
		tbl_col = 63;		
		file_button1 = "bt_submit_BaseNAR";
		file_button2 = "bt_cancel_BaseNAR";
		
		select_file_name = select_file.replace("ip_fileuploads_OL_AdditionalNAR_contract_Show_","");
		selectFile = "ip_fileuploads_OL_AdditionalNAR_contract_Show_"+select_file_name;
		textFile = "ip_fileuploads_AdditionalNAR_contract_"+select_file_name;

		validateFile = "";
		downloadFile = "span_Additional_contractdownloadNAR_"+select_file_name;
		
		rate_cat_id = $("#rate_cat_id_rider_NAR"+select_file_name).val();
		sub_cat_id = $("#sub_cat_NAR").val();
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
	}
	
	$("#"+modal_name+" .modal-header>h4>span").html(file_name);
	$("#"+file_button1).unbind();
	//$("#"+modal_cv+" .modal-header>h4>span").html(" ("+dd_text+")");
	
	/*file pattern*/
	if(type == 1){
		
		file_pattern = file_name.replace(cov_code, "{ประเภท}");
		file_pattern = file_pattern.replace(prd_code, "{Code}");
		
	}else if(type == 11){
		var flag_chk = false;
		var cov_code = $("#tb_Additional_contract tbody>tr").find('td:nth-child(1) label').text();
		if(cov_code != ""){
			if(file_name.includes(cov_code) && flag_chk == false){
				file_pattern = file_name.replace(cov_code, "{ประเภท}");
				flag_chk = true;
			}
		}
		file_pattern = file_pattern.replace(prd_code, "{Code}");
		
	}else if(type == 2 || type == 22){	
		cov_code = $("#tb_Additional_contract tbody>tr").find('td:nth-child(1) label').text();
		file_pattern = file_name.replace(prd_code, "{P Code}");
		file_pattern = file_pattern.replace("_"+cov_code, "");
	}
	
	
	if(file_format2 != ""){
		if(check_filenameNAR(selectFile, file_format, file_format2) == false){
			//$("#"+validateFile).css("display", "inline-block");
			$("#"+textFile).val("");
			$("#"+selectFile).val("");
			$('#'+cv_button).prop('disabled', true);		
			$('#'+cv_button+">span").removeClass("activecolorblue").addClass("activecolorgray");
			$('#'+downloadFile+">span").removeClass("activecolorblue").addClass("activecolorgray");
		}else{
			//openFile(event,selectFile,tbl_name,tbl_col);
			openFile(event,selectFile,tblAuto_name,tbl_col);
			
			$("#base64_fileTXT_OL").val("");
			$("#"+modal_name).modal("show");	
			
			convertToBase64_OL(selectFile,file_type_id)
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
					 	    	
					 	    	/*save file*/				
								set_Filevalue(type,select_file_name,file_id,file_type_id,file_name,obj_ref,file_pattern,rate_cat_id,sub_cat_id,user_code,cv_button);		
								/*end save file*/
							$("#"+cv_button+">span").attr("onclick", "openFileTextProductRider('"+file_name+"', '"+obj_ref+"', "+tbl_col+", '"+tbl_name+"', '"+modal_cv+"')");
							$("#"+downloadFile+">span").attr("onclick","openFile_target('"+file_name+"','"+obj_ref+"','txt_download')");
							$("#modal_waiting").modal('hide');
							$("body").addClass("body_nopadding");
					 	    }
					    })
					    
				 }
				
				
				$("#"+textFile).val(file_name);
				if(validateFile != ""){
					$("#"+validateFile).css("display", "none");			
				}
					
				$('#'+cv_button+">span").removeClass("activecolorgray").addClass("activecolorblue");
				/*$('#'+cv_button).attr("onclick","open_modalCV("+type+",this.id)");*/
				$('#'+downloadFile+">span").removeClass("activecolorgray").addClass("activecolorblue");
				
				/*$('#'+cv_button).click(function(){
					$("#"+modal_cv).modal('show');
				})	*/			
			});
			
			$("#"+file_button2).click(function() {
				$("#"+textFile).val("");				
				$('#'+cv_button).prop('disabled', true);
				$('#'+cv_button+">span").removeClass("activecolorblue").addClass("activecolorgray");
				$('#'+downloadFile).prop('disabled', true);
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
			//openFile(event,selectFile,tbl_name,tbl_col);
			openFile(event,selectFile,tblAuto_name,tbl_col);
			
			$("#base64_fileTXT_OL").val("");
			
			$("#"+modal_name).modal("show");	
			
			convertToBase64_OL(selectFile,file_type_id)
			
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
				
				
				/*save file*/				
				set_Filevalue(type,select_file_name,file_id,file_type_id,file_name,obj_ref,file_pattern,rate_cat_id,sub_cat_id,user_code,cv_button);		
				/*end save file*/
					 	    	$("#"+cv_button+">span").attr("onclick", "openFileTextProductRider('"+file_name+"', '"+obj_ref+"', "+tbl_col+", '"+tbl_name+"', '"+modal_cv+"')");
					 	    	$("#"+downloadFile+">span").attr("onclick","openFile_target('"+file_name+"','"+obj_ref+"','txt_download')");
								$("#modal_waiting").modal('hide');
								$("body").addClass("body_nopadding");
					 	    }
					    })
					    
				 }
				
			
				$("#"+textFile).val(file_name);
				if(validateFile != ""){
					$("#"+validateFile).css("display", "none");	
				}
							
				$('#'+cv_button+">span").removeClass("activecolorgray").addClass("activecolorblue");
				/*$('#'+cv_button).attr("onclick","open_modalCV("+type+",this.id)");*/
				$('#'+downloadFile+">span").removeClass("activecolorgray").addClass("activecolorblue");
				
				/*$('#'+cv_button).click(function(){
					$("#"+modal_cv).modal('show');
				})*/
				
			});
			
			$("#"+file_button2).click(function() {
				$("#"+textFile).val("");
				$('#'+cv_button).prop('disabled', true);
				$('#'+cv_button+">span").removeClass("activecolorblue").addClass("activecolorgray");
				$('#'+downloadFile).prop('disabled', true);
				$('#'+downloadFile+">span").removeClass("activecolorblue").addClass("activecolorgray");
			});
		}
	}
}

var openFile = function(event,fileID,tableName,tableCol) {	
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
     /* if ( $.fn.dataTable.isDataTable( "#"+tableName ) ) {
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
function check_filename(fileID, fileFormat){
	var filename = document.getElementById(fileID).files[0].name.split('.');			
		if(filename[0] != fileFormat){
	    	message = "กรุณานำเข้าไฟล์ที่ถูกต้อง";
	    	$("#fileId_pm").val("")
	    	$("#rate_layout_pm").val("")
			alertError(message);
			return false;
	 }	
}
function check_filenameNAR(fileID, fileFormat , fileFormat2){
	var filename = document.getElementById(fileID).files[0].name.split('.');			
		if(filename[0] != fileFormat && filename[0] != fileFormat2){
	    	message = "กรุณานำเข้าไฟล์ที่ถูกต้อง";
	    	$("#fileId_base_NAR").val("")
	    	$("#rate_layout_id_base_NAR").val("")
			alertError(message);
			return false;
	 }	
}

function set_Filevalue(type,id,file_id,file_type_id,file_name,file_path,file_pattern,rate_cat_id,sub_cat_id,user_code,cv_button){
	
	if(type == 1 || type == 11){
		var input_id = "fileuploads_PMRateText1_OL"
		var input_fileId = "fileId_pm"
		var input_layoutId = "rate_layout_pm"
	}else if(type == 2){
		var input_id = "fileuploads_NARText1_OL"
		var input_fileId = "fileId_base_NAR"
		var input_layoutId = "rate_layout_id_base_NAR"
	}else if(type == 22){
		var input_id = "ip_fileuploads_AdditionalNAR_contract_"+id
		var input_fileId = "fileId_rider_NAR"+id
		var input_layoutId = "rate_layout_id_rider_NAR"+id
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
	    		$("#rate_layout_pm").val(response.rate_layout_id);
	    		$("#fileId_pm").val(response.file_id);
	    	}else if(type == 2){
	    		$("#fileId_base_NAR").val(response.file_id);
	    		$("#rate_layout_id_base_NAR").val(response.rate_layout_id);
	    	}else if(type == 22){
	    		$("#fileId_rider_NAR"+id).val(response.file_id);
	    		$("#rate_layout_id_rider_NAR"+id).val(response.rate_layout_id);
	    	}
				    	
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

function open_modalCV(type,id){
	var tbl_name = "";
	var rowID = "";
	var head_modal = "";
	var head_modal_text = "";

	if(type == 1 || type == 3){	
		tbl_name = "tb_input_fileSee_modal_pmRate";
		modal_cv = "modal_input_fileSee_PMRate";
		rowID = id.replace("span_PM_Rateopen_","");
		head_modal = $("#"+tbl_name).find("#tbody_PM_Rate"+rowID+" td:nth-child(3) input[type='text']").val();
	}else if(type == 2 || type == 4){
		tbl_name = "tb_input_fileSee_modal_NAR";
		modal_cv = "modal_input_fileSee_NAR";
		rowID = id.replace("span_PM_RateopenNAR_","");
		head_modal = $("#"+tbl_name).find("#tbody_PM_Rate"+rowID+" td:nth-child(3) input[type='text']").val();
	}
	
	$("#"+modal_cv+" .modal-header>h4>span").html(head_modal);
	$("#"+modal_cv).modal('show');
}

/*partner*/
$("#lb_saleChannel_OL").on('change', function(){
	var systemCode = $('#lb_saleChannel_OL :selected').val();
	//$("#div_COOP_masterPolicy_CL").hide();
	if (systemCode != "" && systemCode != "NONE") {
		$("#lb_partner_OL option").remove();
		var opt_none = "<option value='NONE' selected>None</option>";
		$("#lb_partner_OL").append(opt_none);
		searchPartner(0);
	}
	else{
		$("#lb_partner_OL option").remove();
		var opt_none = "<option value='NONE' selected>None</option>";
		$("#lb_partner_OL").append(opt_none);
	}
});

function searchPartner(key){
	var systemCode = $('#lb_saleChannel_OL :selected').val();
	var json_data = {
			"method": "GetPartner",
	        "systemCode": systemCode
	}

	$.ajax({
		url: 'ProductRider_Data_default_Servlet',
		type: "POST",
		data: json_data,
		success: function (response) {
			var row_PDPartner = "";	
			for (i in response.partner) {
				var obj_PDPartner = response.partner[i];
					row_PDPartner += "<option data-id='"+obj_PDPartner.pass+"' value='"+obj_PDPartner.key+"'>"+obj_PDPartner.text+"</option>";
			}
			$("#lb_partner_OL").append(row_PDPartner);
			if(key != 0){
				$("#lb_partner_OL option[data-id='"+key+"']").attr("selected", true);
			}
		}
	})
}
/***************************ข้อกำหนดการรับประกัน************************/
/*จำนวนเอาเงินประกันภัยสูงสุด(ต่อแบบ)*/
function chk_max_amount_insure_OL(key){
	if(key == 1){
		$("#div_max_amount_limit_OL").show();
	}else{
		$("#div_max_amount_limit_OL").hide();
	}
}

/*จำนวนเอาเงินประกันภัยสูงสุด(ต่อราย)*/
function chk_single_max_amount_insure_OL(key){
	if(key == 1){
		$("#div_single_max_amount_limit_OL").show();
		$("#validate_input12_ol").show();
		validate_input12_ol();
	}else{
		$("#div_single_max_amount_limit_OL").hide();
		$("#validate_input12_ol").hide();
	}
}

/*จำนวนเอาเงินประกันภัยสูงสุด(ต่อแบบ+ต่อราย)*/
function chk_max_amount_limit_OL(type, key){
	if(type == 1){
		var chk_max = $("#chk_max_amount_limit_OL"+key);
		var txb_max = $("#txb_max_amount_limit_OL"+key);	
	}else{ //type 2
		var chk_max = $("#chk_single_max_amount_limit_OL"+key);
		var txb_max = $("#txb_single_max_amount_limit_OL"+key);	
		
		if(key == 1){
			if($("#chk_single_max_amount_limit_OL1").is(':checked')){
				$("#divMain_insuranceIssue_OL").removeClass('disabledAll')
			}else{
				$("#divMain_insuranceIssue_OL").addClass('disabledAll')
			}
		}else{
			if($("#chk_single_max_amount_limit_OL2").is(':checked')){
				$("#divMain_insuranceMax_OL").removeClass('disabledAll')
			}else{
				$("#txb_single_max_amount_limit_OL2").attr("disabled",true)
				$("#divMain_insuranceMax_OL").addClass('disabledAll')
			}
		}
	}
	
	if($(chk_max).prop("checked") == true){
		$(txb_max).prop("disabled", false);
	}else{
		$(txb_max).prop("disabled", true);
		$(txb_max).val("");
	}
	validate_input12_ol()
}

function unProp_specRD(e){
	if($(e).is(':checked')){
		$("#spec_rd1").prop("checked",true)
		$("input[type='radio'][name='rd']").attr("disabled",false)
	}else{
		$("input[type='radio'][name='rd']").prop("checked",false)
		$("input[type='radio'][name='rd']").attr("disabled",true)
	}
}

$("#menu_OL_5").click(function(){	
	
	/*validate tab ข้อกำหนด*/
//	validate_input6_cl();
//	validate_input7_cl();
//	validate_input8_cl();
//	validate_input9_cl();
//	validate_input10_cl();
//	
	
	
	/*เพิ่ม row ของ Tab-ข้อกำหนดการรับประกัน || Lookup ตาราง-การคำนวณจำนวนเงินเอาประกันภัย*/
	var dropdownUnit = $("#cal_fix_cov_unit_lookup").val();
	var dropdownOF1 = $("#cal_fix_cov_factor_lookup").val();
	var dropdownOF2 = $("#cal_fix_cov_factorMin_lookup").val();
	$("#tbl_cal_amount_OL tbody>tr").remove();
	var row_appned = 0;
	$("#tb_Calculate_insurance tbody>tr").each(function(i){
		var level = $(this).data('level');
		if(level == 1){
			var cov_code = $(this).find('td:nth-child(1) label').text();
			var type = $(this).find('td:nth-child(1) #type_coverage').val();
			var from_sa = $(this).find('td:nth-child(3) input').val();
			var to_sa = $(this).find('td:nth-child(4) input').val();
			var count_money = $(this).find('td:nth-child(5) input').val();
			var unit_money = $(this).find('td:nth-child(6) select').val();
			var factor_money = $(this).find('td:nth-child(7) select').val();
			var bath = $(this).find('td:nth-child(8) input').val();
			var factory_bath = $(this).find('td:nth-child(9) select').val();
			var row_cal = "<tr id=\"tr_cal_amount_"+i+"\" data-id=\""+i+"\" data-parent=\"0\" data-level=\"1\" data-key='' >"+
			"<td width=\"14%\" class=\"text-center verticalCenter fontcolortable1\">"
			 if(i == 0){
				 row_cal += "<label class='font-term-green font-bold'>"+cov_code+"</label>"+
				 				"<input type='hidden' id='prd_rider_code' value=''>"+
				 				"<input type='hidden' id='serie_no' value=''>"+
				 				"<input type='hidden' id='seq' value=''>"
			 }else{
				 row_cal += "<label class='font-term-green font-bold'>"+cov_code+"</label>"+
				 				"<input type='hidden' id='prd_rider_code' value=''>"+
				 				"<input type='hidden' id='serie_no' value=''>"+
				 				"<input type='hidden' id='seq' value=''>"
			 }
			row_cal += "</td>"+
					"<td class=\"text-center verticalCenter font-bold fontcolortable2\">"+type+"</td>"+
					"<td width=\"7%\"class=\"text-right verticalCenter \">"+
					"<input type='text' class='auto form-control text-center width40px' value='"+from_sa+"' data-v-min='0.00' data-v-max='999.99' disabled>"+
					"</td>"+
					"<td width=\"7%\" class=\"text-right verticalCenter \">"+
					"<input type='text' class='auto form-control margin-padding0 text-center width40px' value='"+to_sa+"' data-v-min='0.00' data-v-max='999.99' disabled>"+
					"</td>"+
					"<td width=\"10%\"class=\"text-right verticalCenter \">"+
					"<input type='text' class='auto form-control margin-padding0 text-center width40px' value='"+count_money+"' data-v-min='0.00' data-v-max='999999999.99' disabled>"+
					"</td>"+
					"<td width=\"14%\" class=\"text-right verticalCenter \">"+
						"<select class=\"form-control\" disabled><option value='NONE' >None</option>"+dropdownUnit+"</select></td>"+
					"<td width=\"14%\" class=\"text-right verticalCenter \">"+
						"<select class=\"form-control\" disabled><option value='NONE' >None</option>"+dropdownOF1+"</select></td>"+
					"<td width=\"10%\" class=\"text-right verticalCenter \">"+
					"<input type='text' class='auto form-control margin-padding0 text-center width40px' value='"+bath+"' data-v-min='0.00' data-v-max='999999999.99' disabled>"+
					"<td width=\"14%\" class=\"text-right verticalCenter \">"+
					"<select class=\"form-control\" disabled><option value='NONE' >None</option>"+dropdownOF1+"</select></td>"+
				"</tr>";		
			$("#tbl_cal_amount_OL tbody").append(row_cal);
			$("#tbl_cal_amount_OL tbody>tr").eq(row_appned).find("td:nth-child(6) option[value="+unit_money+"]").attr("selected",true);
			$("#tbl_cal_amount_OL tbody>tr").eq(row_appned).find("td:nth-child(7) option[value="+factor_money+"]").attr("selected",true);
			$("#tbl_cal_amount_OL tbody>tr").eq(row_appned).find("td:nth-child(9) option[value="+factory_bath+"]").attr("selected",true);
			row_appned++;
		}else{
			//var cov_code = $(this).find('td:nth-child(1) label').text();
			//var type = $(this).find('td:nth-child(2) label').text();
			var from_sa = $(this).find('td:nth-child(3) input').val();
			var to_sa = $(this).find('td:nth-child(4) input').val();
			var count_money = $(this).find('td:nth-child(5) input').val();
			var unit_money = $(this).find('td:nth-child(6) select').val();
			var factor_money = $(this).find('td:nth-child(7) select').val();
			var bath = $(this).find('td:nth-child(8) input').val();
			var factory_bath = $(this).find('td:nth-child(9) select').val();
			
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
				"</tr>";		
			$("#tbl_cal_amount_OL tbody").append(row_cal);
			$("#tbl_cal_amount_OL tbody>tr").eq(row_appned).find("td:nth-child(6) option[value="+unit_money+"]").attr("selected",true);
			$("#tbl_cal_amount_OL tbody>tr").eq(row_appned).find("td:nth-child(7) option[value="+factor_money+"]").attr("selected",true);
			$("#tbl_cal_amount_OL tbody>tr").eq(row_appned).find("td:nth-child(9) option[value="+factory_bath+"]").attr("selected",true);
			row_appned++;
		}
	});

});

/*View List Product*/
function viewListProduct(type){
	var table = "";
	var prd_code_sel = "";
	if(type == 1){
		table = "tbl_insuranceIssue_OL";
		$("#bt_confirmProduct_OL").attr("onclick","bt_confirmProduct_OL('POLICY')")
		prd_code_sel = $("#hd_accumRuleExclude_Policy").val()
	}else if(type == 2){
		table = "tbl_insuranceMax_OL";
		$("#bt_confirmProduct_OL").attr("onclick","bt_confirmProduct_OL('SA')")
		prd_code_sel = $("#hd_accumRuleExclude_SA").val()
	}
	var prd_code_arr		= prd_code_sel.split(",");
	
	var criteria = new Array();
	$("#"+table).find("tbody>tr").each(function(){
		obj = {};
		obj["main_contract1"] = $(this).find('td:nth-child(2) option:selected').val()
		obj["main_contract2"] = $(this).find('td:nth-child(3) option:selected').val()
		obj["main_contract3"] = $(this).find('td:nth-child(4) option:selected').val()
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
		if($(this).find('td:nth-child(7) option:selected').attr('data-id') == 0){
			obj["sale_chanel"] = "";
		}else{
			obj["sale_chanel"] = String($(this).find('td:nth-child(7) option:selected').data('id'));
		}
		if($(this).find('td:nth-child(8) option:selected').attr('data-id') == 0){
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
        url : "ProductRider_GetData_Servlet",
        data: data_json,    
        success : function(response) {	
        	var row = "";
        	$("#tb_viewListPDLeft_OL tbody>tr").remove();
        	for(i in response.table_product){
        		var obj = response.table_product[i];
        			row += 	"<tr id='tr_viewListPDLeft_OL"+i+"'>"+
								"<td class='text-center'><input id='chk_viewListPDLeft_OL"+i+"' type='checkbox' value=''></td>"+
								"<td><label for='chk_viewListPDLeft_OL"+i+"'>"+obj.prd_code+"</label></td>"+
								"<td>"+obj.nameTH+"</td>"+
							"</tr>";
        	}
        	$("#tb_viewListPDLeft_OL tbody").append(row)
        	
        	$("#tb_viewListPDRight_OL tbody>tr*").remove();
        	
        	if(prd_code_arr.length > 0){
        		$("#tb_viewListPDLeft_OL tbody>tr").each(function(){
        			for(i = 0 ; i < prd_code_arr.length ; i++){
        				if($(this).find('td:nth-child(2) label').text() == prd_code_arr[i]){
        					$(this).find('td:nth-child(1) input[type="checkbox"]').prop("checked",true)
        					$('#RightMove').click()
        				}
        			}
        		})
        	}
        	
        	//$("#tb_viewListPDRight_OL tbody>tr").remove();
        	for(i in response.table_unwAccumRuleExclude){
        		var obj = response.table_unwAccumRuleExclude[i];
        			if(type == 1 && obj.accum_type == "POLICY"){
        				var row = "<tr id='tr_viewListPDRight_OL"+i+"'>"+
								"<td class='text-center'><input type='checkbox' id='chk_viewListPDRight_OL"+i+"'</td>"+
								"<td><label for='chk_viewListPDRight_OL"+i+"'>"+obj.prd_code+"</label></td>"+
								"<td>"+obj.nameTH+"</td>"+
							"</tr>"
						$("#tb_viewListPDRight_OL tbody").append(row)
        			}else if(type == 2 && obj.accum_type == "SA"){
        				var row = "<tr id='tr_viewListPDRight_OL"+i+"'>"+
								"<td class='text-center'><input type='checkbox' id='chk_viewListPDRight_OL"+i+"'</td>"+
								"<td><label for='chk_viewListPDRight_OL"+i+"'>"+obj.prd_code+"</label></td>"+
								"<td>"+obj.nameTH+"</td>"+
							"</tr>"
						$("#tb_viewListPDRight_OL tbody").append(row)
        			}
        		
        	}
        },
        error : function(response) {	
        	console.log("get view list product error.")
        }
	});
	console.log("data",data_json)
}

function bt_confirmProduct_OL(accum_type){
	
	var prd_code = [];
	$("#tb_viewListPDRight_OL tbody>tr").each(function(){
		if($(this).find('td:nth-child(2) label').text() != ""){
			prd_code.push($(this).find('td:nth-child(2) label').text());
		}
	})
	
	if( accum_type == 'POLICY'){
		$("#hd_accumRuleExclude_Policy").val(prd_code)
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

/*จำนวนเอาเงินประกันภัยสูงสุด*/
function ddHeath1_select(id) {
	
	if(id.includes("sl_contractType_insuranceIssue")){
		var ddID = Number(id.replace("sl_contractType_insuranceIssue",""));
		var main_contract11 = "sl_contractType_insuranceIssue";
		var main_contract22 = "sl_policyType_insuranceIssue";
		var main_contract33 = "sl_productType_insuranceIssue";
	}else if(id.includes("sl_contractType_insuranceMax")){
		var ddID = Number(id.replace("sl_contractType_insuranceMax",""));
		var main_contract11 = "sl_contractType_insuranceMax";
		var main_contract22 = "sl_policyType_insuranceMax";
		var main_contract33 = "sl_productType_insuranceMax";
	}
	
	var value = $("#"+id).val();
	//if (value == "") {
		var main_contract2 = document.getElementById(""+main_contract22+ddID);
	       $("#"+main_contract22+ddID).find('option').remove();
	        	 var option 		= 	document.createElement("option");
	 			option.value 		= 	"";
	 			option.text 		= 	"All";
	 			main_contract2.add(option);

	//}
	/*เรียก dropdown*/
	if (main_contract != "" && value != "") {
		$.ajax({
	        type: "POST",
	        url : "ProductRider_Data_default_Servlet",
	        data: {
	        	method 	: "main_contract_level1_base",
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
	validate_input12_ol();
}

function ddHeath2_select(id) {
	
	if(id.includes("sl_policyType_insuranceIssue")){
		var ddID = Number(id.replace("sl_policyType_insuranceIssue",""));
		var main_contract11 = "sl_contractType_insuranceIssue";
		var main_contract22 = "sl_policyType_insuranceIssue";
		var main_contract33 = "sl_productType_insuranceIssue";
	}else if(id.includes("sl_policyType_insuranceMax")){
		var ddID = Number(id.replace("sl_policyType_insuranceMax",""));
		var main_contract11 = "sl_contractType_insuranceMax";
		var main_contract22 = "sl_policyType_insuranceMax";
		var main_contract33 = "sl_productType_insuranceMax";
	}
	
	var value = $("#"+id).val();
	//if (value == "") {
	 	var main_contract3 = document.getElementById(""+main_contract33+ddID);
	 	       $("#"+main_contract33+ddID).find('option').remove();
	 	        	 var option 		= 	document.createElement("option");
	 	 			option.value 		= 	"";
	 	 			option.text 		= 	"All";
	 	 			main_contract3.add(option);
	//}
	if (value != "" && value != "0") {
		
		var type_lv1  	= $("#"+main_contract11+ddID).val();	
		var type_lv2 	= $("#"+main_contract22+ddID).val();
		if(type_lv1 != "" && type_lv2 != ""){
			$.ajax({
		        type: "POST",
		        url : "ProductRider_Data_default_Servlet",
		        data: {
		        	method 		: "main_contract_level2_base",
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
}

/*Tab ข้อกำหนด หาประเภทกรมธรรม์*/
function search_covCat2(id,obj,tbl,sl_contract,sl_policy,sl_product){
	
	var value = $("#"+id).val();
	var ddID = Number(id.replace(sl_contract,""));
	var index = Number(ddID) - 1;
	
	if (value == "") {
		var main_contract2 = document.getElementById(sl_policy+ddID);
	       $("#"+sl_policy+ddID+ "option").remove();
	        	 var option 		= 	document.createElement("option");
	 			option.value 		= 	"";
	 			option.text 		= 	"All";
	 			main_contract2.add(option);
	 			
	 	var main_contract3 = document.getElementById(sl_product+ddID);
	 	       $("#"+sl_product+ddID+ "option").remove();
	 	        	 var option 		= 	document.createElement("option");
	 	 			option.value 		= 	"";
	 	 			option.text 		= 	"All";
	 	 			main_contract3.add(option);
	}
	
	/*เรียก dropdown*/
	if (value != "") {
		$.ajax({
	        type: "POST",
	        url : "ProductRider_Data_default_Servlet",
	        data: {
	        	method 	: "main_contract_level1_base",
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
			        		if (type_lv1 != "" && type_lv2 != "") {
			        			$.ajax({
			        		        type: "POST",
			        		        url : "ProductRider_Data_default_Servlet",
			        		        data: {
			        		        	method 		: "main_contract_level2_base",
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
function searchPartnerAccumRule(condition,result,selectPartner){
	//var systemCode = $('#'+condition+ ':selected').val();
	var systemCode = condition;
	
	if(systemCode != ""){
		var json_data = {
				"method": "GetPartner",
		        "systemCode": systemCode
			}
		$.ajax({
			url: 'ProductRider_Data_default_Servlet',
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

/*filter partner*/
function filter_partner(e){
	var systemCode = $(e).parent().parent().find('td:nth-child(7) :selected').val();
	
	if (systemCode != "" && systemCode != "NONE") {
		$(e).parent().parent().find('td:nth-child(8) option').remove();
		var opt_none = "<option value='NONE' selected>All</option>";
		$(e).parent().parent().find('td:nth-child(8) select').append(opt_none);
		var json_data = {
				"method": "GetPartner",
		        "systemCode": systemCode
			}
		$.ajax({
			url: 'ProductRider_Data_default_Servlet',
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
function getLookup_policyWording_data(tbl,res){
	//console.log("RESSSSSS:/",res)
	json_data = {
			"method" : "getLookup_Policy",
			"cov_code" : tbl
	}
	$.ajax({
		url: 'ProductRider_Data_default_Servlet',
		type: "POST",
		data: json_data,
		success: function (response) {
			var baseplan_covCode = $("#tb_Additional_contract tbody>tr").eq(0).find('td:nth-child(1) label').text();
			
			var row_main = "";
			if( baseplan_covCode == tbl){
				row_main += "<div id='policy_in_"+tbl+"' class='tab-pane fade active in'>"
			}else{
				row_main += "<div id='policy_in_"+tbl+"' class='tab-pane fade'>"
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
			
		
		for(w in response.Tab_Policy_Wording){
				var obj_policy = response.Tab_Policy_Wording[w];
				var row_child =	"<tr id='tbody_policy"+obj_policy.pass+"' data-id='"+obj_policy.pass+"'>"+											
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
				$("#policy_in_"+tbl).find('tbody').append(row_child)
				
			}
			
		//--Get case by cov_code
		for(i in res.Tab_Policy_Wording){
			var obj = res.Tab_Policy_Wording[i]
			$("#policy_in_"+tbl).find('table>tbody>tr').each(function(){
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
		//$("#tab_policy_panel").find('li').removeClass('active')
		//$("#tab_policy_panel").find('li:first').addClass('active')
		//$("#policy_panel_tab_OL").find('div').removeClass('active in')
		
		$("#policy_in_"+baseplan_covCode).addClass("active in")
		
		}
	})
	console.log("data",json_data);
	
}

/*add 1*/
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
	  "<td class='verticalCenter text-center'><select class='form-control' id='sl_policyType_insuranceIssue"+numberImgOK+"' onchange='ddHeath2_select(this.id)'><option value=''>All</option></select></td>"+
	  "<td class='verticalCenter text-center'><select class='form-control' id='sl_productType_insuranceIssue"+numberImgOK+"'><option value=''>All</option></select></td>"+
	  "<td class='verticalCenter text-center'></td>"+
	  "<td class='verticalCenter text-center'></td>"+
	  "<td class='verticalCenter text-center'></td>"+
	  "<td class='verticalCenter text-center'><select class='form-control' id='sl_partner_insuranceIssue"+numberImgOK+"'><option data-id='0' value='NONE'>All</option></select></td>"+
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
	$('#tbl_insuranceIssue_OL>tbody>tr:first-child>td:nth-child(7)>select').clone().attr("id","sl_saleChannel_insuranceIssue"+numberImgOK).appendTo("#tr_insuranceIssue"+numberImgOK+">td:nth-child(7)");

	$("#sl_Reinsurance_insuranceIssue"+numberImgOK).find("option").removeAttr( "selected" )
	$("#sl_Reinsurance_insuranceIssue"+numberImgOK).find("option[value='NONE']").attr("selected",true)
	$("#sl_senior_insuranceIssue"+numberImgOK).find("option").removeAttr( "selected" )
	$("#sl_senior_insuranceIssue"+numberImgOK).find("option[value='NONE']").attr("selected",true)
	$("#sl_saleChannel_insuranceIssue"+numberImgOK).find("option").removeAttr( "selected" )
	$("#sl_saleChannel_insuranceIssue"+numberImgOK).find("option[value='NONE']").attr("selected",true)
	validate_input12_ol();
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
		
		validate_tbl_insuranceIssue_OL();
		});			
	
	}
}

function validate_tbl_insuranceIssue_OL(){
	$("#tbl_insuranceIssue_OL tbody>tr").each(function(){
		var td2 = $(this).find('td:nth-child(2) select>option:selected').val();
		if( td2 != "NONE"){
			$("#validate_input12_ol").hide();
		}else{
			$("#validate_input12_ol").show();
		}
	})
}

/*add 2*/
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
	  "<td class='verticalCenter text-center'><select class='form-control' id='sl_policyType_insuranceMax"+numberImgOK+"' onchange='ddHeath2_select(this.id)'><option value=''>All</option></select></td>"+
	  "<td class='verticalCenter text-center'><select class='form-control' id='sl_productType_insuranceMax"+numberImgOK+"'><option value=''>All</option></select></td>"+
	  "<td class='verticalCenter text-center'></td>"+
	  "<td class='verticalCenter text-center'></td>"+
	  "<td class='verticalCenter text-center'></td>"+
	  "<td class='verticalCenter text-center'><select class='form-control' id='sl_partner_insuranceMax"+numberImgOK+"'><option data-id='0' value='NONE'>All</option></select></td>"+
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
	$('#tbl_insuranceMax_OL>tbody>tr:first-child>td:nth-child(7)>select').clone().attr("id","sl_saleChannel_insuranceMax"+numberImgOK).appendTo("#tr_insuranceMax"+numberImgOK+">td:nth-child(7)");

	$("#sl_Reinsurance_insuranceMax"+numberImgOK).find("option").removeAttr( "selected" )
	$("#sl_Reinsurance_insuranceMax"+numberImgOK).find("option[value='NONE']").attr("selected",true)
	$("#sl_senior_insuranceMax"+numberImgOK).find("option").removeAttr( "selected" )
	$("#sl_senior_insuranceMax"+numberImgOK).find("option[value='NONE']").attr("selected",true)
	$("#sl_saleChannel_insuranceMax"+numberImgOK).find("option").removeAttr( "selected" )
	$("#sl_saleChannel_insuranceMax"+numberImgOK).find("option[value='NONE']").attr("selected",true)
	//$("#validate_input12_ol").show();
	validate_input12_ol();
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
		
		validate_tbl_insuranceMax_OL();
		});			
	
	}
}


function validate_tbl_insuranceMax_OL(){
	$("#tbl_insuranceMax_OL tbody>tr").each(function(){
		var td2 = $(this).find('td:nth-child(2) select>option:selected').val();
		var td3 = $(this).find('td:nth-child(3) select').val();
		var td4 = $(this).find('td:nth-child(4) select').val();
		if( td2 != "NONE"){
			$("#validate_input12_ol").hide();
		}else{
			$("#validate_input12_ol").show();
		}
	})
}

/*3. ผลประโยชน์ความคุ้มครอง*/
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

/******************************alert*********************************/
function deleteTableRow(id)
{
	$(id).remove();
}

/*ยืนยันการลบ*/
function alertDeleteError(message)
{
    $('#txt_alert_delete_error').text(message);
    $('#modal_warning_delete').modal();
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

/************************** Validate ********************************/
function validate_input12_ol(){
	//var flag_rd = $("#rd_single_max_amount_insure_OL1").is(':checked')
	/*ตารางบน*/
	var flag_tb1 = false;
	if($("#chk_single_max_amount_limit_OL1").is(':checked')){
		$("#tbl_insuranceIssue_OL tbody>tr").each(function(){
			if($(this).find('td:nth-child(2) option:selected').val() == "NONE" || $(this).find('td:nth-child(2) option:selected').val() == ""){
				flag_tb1 = true;
			}
		})
	}
	/*ตารางล่าง*/
	var flag_tb2 = false;
	if($("#chk_single_max_amount_limit_OL2").is(':checked')){
		$("#tbl_insuranceMax_OL tbody>tr").each(function(){
			if($(this).find('td:nth-child(2) option:selected').val() == "NONE" || $(this).find('td:nth-child(2) option:selected').val() == ""){
				flag_tb2 = true;
			}
		})
	}
	
	
	
	if(flag_tb1 || flag_tb2){
		$("#validate_input12_ol").show();
	}else{
		$("#validate_input12_ol").hide();
	}
	
}
function validate_maxEM_OL(e){
	var max = $(e).parent().parent().find('td:nth-child(2) input').val();
	var value_current = $(e).val();
	if( Number(value_current) > Number(max)){
		$(e).val(max)
	}
	
}
/*Basic Information*/
function bt_Menu1_Confirm_ol(){
	//ตรวจ Validate ก่อนไป save ด้วย
	var message = "";
	var error = 0;
	var error_rider = 0;
	
	var key_Insurance_product = $("#key_Insurance_product_ol").val();
	var name_th = $("#th_Name_ol").val();
	var market_name_th = $("#th_marketingName_ol").val();
	
	/*base plan*/
	if($("#tb_Additional_contract tbody>tr").length == 0){
		error_rider++;
	}	
	
	if(key_Insurance_product == "" || name_th == "" || market_name_th == ""){
		error++;
	}
	
	if(error > 0 && error_rider <= 0){
		message = "กรุณาระบุข้อมูลให้ครบ";
		alertError(message);
		nameTab 	= "menu_OL_1";
		Statuesave = "N";
	}else if(error <= 0 && error_rider > 0){
		message = "กรุณาเลือกความคุ้มครองสัญญาเพิ่มเติม";
		alertError(message);
		nameTab 	= "menu_OL_1";
		Statuesave = "N";
	}else if(error > 0 && error_rider > 0){
		message = "กรุณาระบุข้อมูลให้ครบ";
		alertError(message);
		nameTab 	= "menu_OL_1";
		Statuesave = "N";
	}else{
		nameTab 	= "menu_OL_1";
		Statuesave = "Y";
		datasave_BasicInformation();
		var message = "บันทึกข้อมูลเรียบร้อย";
		 alertSuccess(message);
	}
}

/*การคำนวณเบี้ยประกัน*/
function bt_Menu3_Confirm(){
	var message = "";
	var error = 0;
	
	$("#tb_Calculate_insurance tbody tr").each(function(){
		//ทุนชีวิตอ้างอิง (SA Life)
		var from = Number(replaceComma($(this).find("td:nth-child(3) input").val()));
		var to =  Number(replaceComma($(this).find("td:nth-child(4) input").val()));
		var next = $(this).closest('tr').next('tr').find("td:nth-child(3) input").val();
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
		var amount1 = Number(replaceComma($(this).find("td:nth-child(5) input").val()));
		var unit1 = $(this).find("td:nth-child(6) select").val();
		var ofunit1 = $(this).find("td:nth-child(7) select").val();
		
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
		var amount2 = Number(replaceComma($(this).find("td:nth-child(8) input").val()));
		var unit2 = $(this).find("td:nth-child(9) select").val();
		
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
		
	});
	
	
	if(error > 0){
		message = "กรุณาระบุข้อมูลให้ครบ";
		alertError(message);
		nameTab 	= "menu_OL_3";
		Statuesave = "N";
	}else{
		datasave_calInsurance();
		message = "บันทึกข้อมูลเรียบร้อย";
		alertSuccess(message);
		nameTab 	= "menu_OL_3";
		Statuesave = "Y";
	}	
}

function bt_Menu5_Confirm_ol(){
	var message = "";
	var error = 0;
	
	if($("#validate_input12_ol").css('display') != "none"){
		error++;
	}
	
	if(error > 0){
		message = "กรุณาระบุข้อมูลให้ครบ";
		alertError(message);
		nameTab 	= "";
		Statuesave = "N";
	
	}else{
		nameTab 	= "";
		Statuesave = "Y";
		datasave_warrantyTerms();
		var message = "บันทึกข้อมูลเรียบร้อย";
		 alertSuccess(message);
	}
}

function bt_Menu4_Confirm_ol(){
	var message = "";
	var error = 0;
	
	$("#tbl_benefit_sale_ol tbody tr").each(function(){
		var startDate = $(this).find("td:nth-child(4) input").val();
		var endDate =  $(this).find("td:nth-child(5) input").val();
		if(startDate == "" || endDate == ""){
			error++;
		}
		
		if (startDate != "" && endDate != "") {
		   var startDate_parse = parseDate(startDate);
		   var endDate_parse = parseDate(endDate);
	       if(startDate_parse > endDate_parse){
	    	   $(this).find("td:nth-child(5) input").val("");
	   		error++;
	       }
	     }
	});
	
	
	if(error > 0){
		message = "กรุณาระบุข้อมูลให้ครบ";
		alertError(message);
		nameTab 	= "menu_OL_4";
		Statuesave = "N";
	}else{
		datasave_saleBenefit();
		message = "บันทึกข้อมูลเรียบร้อย";
		alertSuccess(message);
		nameTab 	= "menu_OL_4";
		Statuesave = "Y";
	}	
}

/**************************** Save **********************************/
/*1. Basic Information*/
function datasave_BasicInformation(){
	
	/*rider*/
	var rider = [];
	$("#tb_Additional_contract tbody>tr").each(function(){
		obj = {};
		obj["cov_code"] = $(this).find('td:nth-child(1) label').text();
		obj["cov_cat_id"] = $(this).find('td:nth-child(1) #rider_cov_cat_id1').val();
		obj["prd_rider_code"] = $(this).find('td:nth-child(1) label').text();
		obj["name_th"] = $(this).find('td:nth-child(2) label').text();
		obj["pm_rate_fileId"] = $(this).find('td:nth-child(3) #fileId_rider_PM1').val();
		obj["pm_rate_cat_id"] = $(this).find('td:nth-child(3) #rate_cat_id_rider_PM1').val();
		obj["pm_rate_layout_id"] = $(this).find('td:nth-child(3) #rate_layout_id_rider_PM1').val();
		obj["pm_rate"] = $(this).find('td:nth-child(3) input[type="text"]').val();
		obj["nar_fileId"] = $(this).find('td:nth-child(9) #fileId_rider_NAR1').val();
		obj["nar_cat_id"] = $(this).find('td:nth-child(9) #rate_cat_id_rider_NAR1').val();
		obj["nar_layout_id"] = $(this).find('td:nth-child(9) #rate_layout_id_rider_NAR1').val();
		obj["nar"] = $(this).find('td:nth-child(9) input[type="text"]').val();
		
		rider.push(obj);
	});	
	
	/*การส่ง Reinsurance*/
	var reins_opt = "";
	if($("#selectSendReinsurance1").prop("checked") == true){
		reins_opt = $("#lb_reinsurance option:selected").val();		
	}else if($("#selectSendReinsurance2").prop("checked") == true){
		reins_opt = $("#selectSendReinsurance2").val();
	}
	
	var sale_channel = "";
	if($("#lb_saleChannel_OL option:selected").val() == "NONE"){
		sale_channel = "NONE";
	}else{
		sale_channel = $("#lb_saleChannel_OL option:selected").data("id");
	}
	
	var sale_partner_code = "";
	if($("#lb_partner_OL option:selected").val() == "NONE"){
		sale_partner_code = "NONE";
	}else{
		sale_partner_code = $("#lb_partner_OL option:selected").data("id");
	}
	
	var json_data_BasicInfo = {
        	"method": "Tab_Basic_Information",
            "prd_code": $("#pass_Insurance_product_ol").val(),
            "core_biz_prd_code": $("#key_Insurance_product_ol").val(),
            "name_th": $("#th_Name_ol").val(),
            "name_en": $("#en_Name_ol").val(),
            "market_name_th": $("#th_marketingName_ol").val(),
            "market_name_en": $("#en_marketingName_ol").val(),
            "rider": JSON.stringify(rider),
            "reinsure_group": reins_opt,
            "distribution_channel": $("#lb_distribution_OL").val(),
            "sale_channel": sale_channel,
            "sale_partner_code": sale_partner_code,
            "groupName" : $("#groupName").val()	
	} 
	
	$("#code_Coverage_OL").val($("#pass_Insurance_product_ol").val());
	$("#approve_nameTH_OL").val($("#th_Name_ol").val());
	$("#approve_nameEN_OL").val($("#th_marketingName_ol").val());
	
	$.ajax({
		url: 'ProductRider_SaveData_Servlet',
		type: "POST",
		data: json_data_BasicInfo,
		success: function (response) {
			var cov_status_PD = $("#cov_status_PD").val();
			var cov_status_UW = $("#cov_status").val();
			
			if (response == "success"){
				
				//enable tab
	    		 $("#menu_OL_3").removeClass("disabledAll");
	    		 $("#menu_OL_2").removeClass("disabledAll");
	    		 $("#menu_OL_4").removeClass("disabledAll");
	    		 $("#menu_OL_5").removeClass("disabledAll");
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
						objEmail["manuName"] 			="สัญญาเพิ่มเติม";
						objEmail["manuNameEng"] 		="";
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
function datasave_calInsurance(){
	
	/*การคำนวณจำนวนเงินเอาประกันภัย*/
	var coverage_limit = [];
	$("#tb_Calculate_insurance tbody>tr").each(function(i){		
		var level = $(this).attr("data-level");
		obj = {};
		obj["seq"] = $(this).find("td:nth-child(1) #seq").val();

		if(level == 1){
			obj["cov_code"] = $(this).find("td:nth-child(1) label").text();
		}else if(level == 2){
			obj["cov_code"] = $(this).find("td:nth-child(1) #cov_code").val();
		}
		
		obj["prd_rider_code"] = $(this).find("td:nth-child(1) #prd_rider_code").val();
		obj["serie_no"] = $(this).find("td:nth-child(1) #serie_no").val();
		obj["capital_to"] = replaceComma($(this).find('td:nth-child(3) input').val());
		obj["capital_from"] = replaceComma($(this).find('td:nth-child(4) input').val());
		obj["cash_insurance_no"] = replaceComma($(this).find('td:nth-child(5) input').val());
		obj["cash_insurance_unit"] = $(this).find('td:nth-child(6) select').val();
		obj["cash_insurance_factor"] = $(this).find('td:nth-child(7) select').val();
		obj["cash_low_val"] = replaceComma($(this).find('td:nth-child(8) input').val());
		obj["cash_low_unit"] = $(this).find('td:nth-child(9) select').val();
		
		coverage_limit.push(obj);
	});
	
	/*การคำนวณเบี้ยประกันภัย*/
	var cal_insurance = [];
	$("#tb_Calculate_insurance2 tbody>tr").each(function(){
		obj = {};
		obj["cov_code"] = $(this).find("td:nth-child(1) #cov_code").val();
		obj["prd_code"] = $(this).find("td:nth-child(1) #prd_rider_code").val();
		obj["type"] = $(this).find("td:nth-child(2) label").text();
		obj["formula"] = $(this).find('td:nth-child(3) select').val();
		obj["prd_rider_code"] = $(this).find("td:nth-child(1) #prd_rider_code").val();
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
			url: 'ProductRider_SaveData_Servlet',
			type: "POST",
			data: json_data,
			success: function (response) {
			
			}
		});
		console.log("data",json_data);
}

/*3. ข้อกำหนดการรับประกัน*/
function datasave_warrantyTerms(){
	
	/*product*/
	var product = [];
	obj = {};
	obj["sale_eff_date"] = $("#datefrom_ol_menu5").val();
	obj["sale_exp_date"] = $("#dateto_ol_menu5").val();
	obj["sys_eff_date"] = $("#system_date_ol").val();
	product.push(obj)
	
	/*participant*/
	var participant = [];
	obj = {};
	obj["min_issue_age"] = $("#start_age_insure_ol").val();
	obj["min_issue_age_unit"] = $("#start_age_insure_unit_ol option:selected").val();
	obj["max_issue_age"] = $("#end_age_insure_ol").val();
	obj["max_issue_age_unit"] = $("#end_age_insure_unit_ol option:selected").val();
	obj["max_insure"] = $("#max_insure_ol").val();
	obj["max_insure_unit"] = $("#end_age_maxInsure_unit_ol option:selected").val();	
	participant.push(obj)
	
	/*occ_degree*/
	var occ_degree = [];
	$("#tbl_saleDegreeTerm tbody>tr").each(function(){
		obj = {};
		obj["key"] = $(this).find('td:nth-child(1) input[type="checkbox"]').val();
		obj["text"] = $(this).find('td:nth-child(2)').text();
		obj["check"] = $(this).find('td:nth-child(1) input[type="checkbox"]').is(':checked')
		occ_degree.push(obj);
	});
	
	var underwrite = [];
	obj = {};
	obj["min_sa_amt"] = replaceComma($("#minimum_insuranceCost").val());
	//ข้อกำหนดจำนวนเงินเอาประกันภัยสัญญาเพิ่มเติม
	if($("#spec_rd").is(':checked')){
		obj["unw_rider_sa"] = $('input[name="rd"]:checked').val();
	}else{
		obj["unw_rider_sa"] = "";
	}
	//จำนวนเงินเอาประกันภัยสูงสุด(ต่อแบบ)
	var chk_is_prd_max_policy = $("#rd_max_amount_insure_OL1").is(':checked');
	obj["is_prd_max_policy"] = chk_is_prd_max_policy
	if(chk_is_prd_max_policy){
		obj["prd_max_policy"] = replaceComma($("#txb_max_amount_limit_OL1").val());
		obj["prd_max_sa"] = replaceComma($("#txb_max_amount_limit_OL2").val());
	}else{
		obj["prd_max_policy"] = "";
		obj["prd_max_sa"] = "";
	}
	//จำนวนเงินเอาประกันภัยสูงสุด(ต่อราย)
	var chk_is_pax_max_policy = $("#rd_single_max_amount_insure_OL1").is(':checked');
	obj["is_pax_max_policy"] = chk_is_pax_max_policy;
	if($("#chk_single_max_amount_limit_OL1").is(':checked')){
		obj["pax_max_policy"] = replaceComma($("#txb_single_max_amount_limit_OL1").val());
	}else{
		obj["pax_max_policy"] = "";
	}
	if($("#chk_single_max_amount_limit_OL2").is(':checked')){
		obj["pax_max_sa"] = replaceComma($("#txb_single_max_amount_limit_OL2").val());
	}else{
		obj["pax_max_sa"] = "";
	}
	obj["is_sum_range"] = $("#insure_period1").is(':checked');
	obj["is_med_sum_accum"] = $("#insure_combine1").is(':checked');
	obj["is_substandard"] = $("#special_plan").is(':checked');
	obj["is_reins_alert"] = $("#rd_filing_rs_OL1").is(':checked');
	underwrite.push(obj)
	
	var unwAccumRule = [];
	if($("#rd_single_max_amount_insure_OL1").is(":checked")){
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
				obj["sale_chan_id"] = $(this).find('td:nth-child(7) option:selected').data('id');
				obj["sale_partner_code"] = ""+$(this).find('td:nth-child(8) option:selected').data('id');
				obj["accum_type"] = "POLICY";
				unwAccumRule.push(obj);
			});
		}
	}
	if($("#rd_single_max_amount_insure_OL1").is(":checked")){
		if($("#chk_single_max_amount_limit_OL2").is(":checked")){
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
				obj["sale_chan_id"] = $(this).find('td:nth-child(7) option:selected').data('id');
				obj["sale_partner_code"] = ""+$(this).find('td:nth-child(8) option:selected').data('id');
				obj["accum_type"] = "SA";
				unwAccumRule.push(obj);
			});
		}
	}
	var unwAccumRule_exclude = [];
	var exclude_prd_code_policy = $("#hd_accumRuleExclude_Policy").val();
	var accumRule_exclude_policy = [];
	accumRule_exclude_policy = exclude_prd_code_policy.split(",");
	for(var i=0; i < accumRule_exclude_policy.length; i++){	
		var obj = {};
		obj["accum_type"] = "POLICY" 
		obj["exclude_prd_code"] = accumRule_exclude_policy[i];
		unwAccumRule_exclude.push(obj);	 
	}
	var exclude_prd_code_SA = $("#hd_accumRuleExclude_SA").val();
	var accumRule_exclude_SA = [];
		accumRule_exclude_SA = exclude_prd_code_SA.split(",");
	for(var i=0; i < accumRule_exclude_SA.length; i++){	
		var obj = {};
		obj["accum_type"] = "SA" 
		obj["exclude_prd_code"] = accumRule_exclude_SA[i];
		unwAccumRule_exclude.push(obj);	 
	}
	//
	console.log("split_arr_rider",unwAccumRule_exclude)
	
	/*การรับแบบเพิ่มเบี้ยพิเศษรับแบบมีเงื่อนไข*/
	var unwSubstdType = [];
	$("#check_special_plan div>div").each(function(){
		if($(this).find('input[type="checkbox"]').is(':checked')){
			obj = {};
			obj["substd_type"] = $(this).find('input[type="checkbox"]').val();
			unwSubstdType.push(obj)
		}
	})
	var unw_rider_limit = [];
	if($("#special_plan").is(':checked')){
		$("#tbl_UNW_EM tbody>tr").each(function(i){
			obj = {};
			obj["prd_rider_code"] = $("#pass_Insurance_product_ol").val();
			obj["type"] = $(this).find('td:nth-child(2) #hdcat_code').val();
			obj["Pax_max_sa_amt"] = "0"
			obj["max_em"] = ""+Math.round10($(this).find('td:nth-child(3) input').val()/100 , -4);
			unw_rider_limit.push(obj);
		});
	}
	
	
	/*อำนาจการอนุมัติของสาขาจุดออก กธ./์ฺณ*/
	var pol_issue_unit = [];
	obj = {};
	obj["NBI"] = $("#rd_approval_branch_OL1").is(":checked");
	obj["headquarters"] = $("#rd_approval_branch_OL2").is(":checked");
	pol_issue_unit.push(obj);
	
	
	var json_data = {
			"method" : "Tab_Provision",
			"prd_code": $("#pass_Insurance_product_ol").val(),
			"product" : JSON.stringify(product),
			"participant" : JSON.stringify(participant),
			"occ" : JSON.stringify(occ_degree),
			"underwrite" : JSON.stringify(underwrite),
			"pol_issue_unit" : JSON.stringify(pol_issue_unit),
			"unwRiderLimit" : JSON.stringify(unw_rider_limit),
			"unwSubstdType" : JSON.stringify(unwSubstdType),
			"unwAccumRule" : JSON.stringify(unwAccumRule),
			"unwAccumRuleExclude" : JSON.stringify(unwAccumRule_exclude),
			"groupName" : $("#groupName").val()
	}
	
		$.ajax({
		url: 'ProductRider_SaveData_Servlet',
		type: "POST",
		data: json_data,
		success: function (response) {
		
			}
		});
	console.log("data",json_data);
}

/*4. ผลประโยชน์การขาย*/
function datasave_saleBenefit(){
	
	var sale_benefit = [];
	var seq = 1;
	$("#tbl_benefit_sale_ol tbody>tr").each(function(i){		
		var level = $(this).attr("data-level");
		var is_base = false;
	    var is_base_main = $("#tbl_benefit_sale_ol tbody>tr:first-child").find("td:nth-child(1) input:checkbox").prop("checked");
		var serie = "";
		
		obj = {};
		
		if(level == 1){
			if($(this).find("td:nth-child(1) input:checkbox").prop("checked") == true){
				is_base = true;
			}else{
				is_base = false;
			}
			
			serie = $(this).find("td:nth-child(2)").text();
		}else{
			is_base = false;
			serie = "";
		}
		
		obj["is_ref_base"] = is_base;
		obj["seq"] = seq;
		obj["eff_data"] = $(this).find("td:nth-child(4) input").val();
		obj["exp_data"] = $(this).find("td:nth-child(5) input").val();
		obj["serie_no"] = serie;
		
		if(is_base_main == true){
			obj["year1"] = $(this).find('td:nth-child(7) input').val();
		}else{
			obj["year1"] = $(this).find('td:nth-child(6) input').val();
		}
		
		obj["year2"] = $(this).find('td:nth-child(8) input').val();
		obj["year3"] = $(this).find('td:nth-child(9) input').val();
		obj["year4"] = $(this).find('td:nth-child(10) input').val();
		obj["credit"] = $(this).find('td:nth-child(11) input').val();
		obj["overrid"] = $(this).find('td:nth-child(12) input').val();
		obj["advance"] = $(this).find('td:nth-child(13) input').val();
		obj["mkt_Inc"] = $(this).find('td:nth-child(14) input').val();
		obj["saleValume"] = $(this).find('td:nth-child(15) input').val();
		obj["mkt_Exp"] = $(this).find('td:nth-child(16) input').val();
		
		sale_benefit.push(obj);
		seq++;
	});

	var json_data = {
			"method": "Tab_Sales_Benefits",
			"prd_code": $("#pass_Insurance_product_ol").val(),
			"sale_benefit" : JSON.stringify(sale_benefit),
			"groupName" : $("#groupName").val()	
		}
		
		$.ajax({
			url: 'ProductRider_SaveData_Servlet',
			type: "POST",
			data: json_data,
			success: function (response) {
			
			}
		});
		console.log("data",json_data);
}

/*******************Lookup*************************/
function show_basicInfo_data_OL(response){
	
	/*วิธีการชำระเบี้ย*/
	var row_PDMode = "";	
	for (i in response.Tab_Basic_Information[0].mode) {
		var obj_PDMode = response.Tab_Basic_Information[0].mode[i];
			row_PDMode = "<tr>"+
					 "<td class='text-center verticalCenter fontcolortable2 borderBlack' width='10%'>"+
						"<input id='mode"+i+"_ol' class='' type='checkbox' value='"+obj_PDMode.value+"' disabled>"+
					 "</td>"+
					 "<td class='text-center verticalCenter fontcolortable2 borderBlack' width='10%'>"+
						"<label for='mode"+i+"_ol'>"+obj_PDMode.pass+"</label>"+
					 "</td>"+
					 "<td class='text-left verticalCenter fontcolortable2 borderBlack' width='80%'>"+
						"<label for='mode"+i+"_ol''>"+obj_PDMode.text+"</label>"+
					 "</td>"+
					 "</tr>";
					  
			$("#tbl_mode_ol tbody").append(row_PDMode);
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
	
	/*การส่ง Reinsurance*/
	var row_Reins  = "";	
	for (i in response.Tab_Basic_Information[0].reinsuranct) {
		var obj_Reins = response.Tab_Basic_Information[0].reinsuranct[i];
		row_Reins = "<option value='"+obj_Reins.pass+"'>"+obj_Reins.text+"</option>";
					  
			$("#lb_reinsurance").append(row_Reins);
	}
	
	var obj_nar = response.Tab_Basic_Information[0].NAR[0];
	$("#rate_cat_NAR").val(obj_nar.pass);
	$("#layout_NAR1").val(obj_nar.file[0].file_format);
	$("#sub_cat_NAR").val(obj_nar.sub_rate_cat)
}

/*Lookup cal_insurance*/
function show_cal_premium_OL(response){
	var lookup_cal_insurance = response.Tab_cal_insurance[0];
	
	/*Age Type*/
	var list_age_type = "<option value=''>Age Specific</option>";
	$("#lb_age_specific_OL").append(list_age_type);
	
	/*การคำนวณจำนวนเงินเอาประกันภัย*/
	var list_cov_unit = "";
	list_cov_unit = "<option value='NONE'>None</option>";
	for(i in response.Tab_cal_insurance[0].Fix_cov_unit){
		var obj = response.Tab_cal_insurance[0].Fix_cov_unit[i];
		list_cov_unit += "<option value='"+obj.pass+"'>"+obj.text+"</option>";
	}
	$("#cal_fix_cov_unit_lookup").val(list_cov_unit);
	
	var list_cov_factor = "";
	list_cov_factor = "<option value='NONE'>None</option>";
	for(i in response.Tab_cal_insurance[0].Fix_cov_factor){
		var obj = response.Tab_cal_insurance[0].Fix_cov_factor[i];
		list_cov_factor += "<option value='"+obj.pass+"'>"+obj.text+"</option>";
	}
	$("#cal_fix_cov_factor_lookup").val(list_cov_factor);
	
	var list_cov_factorMin = "";
	list_cov_factorMin = "<option value='NONE'>None</option>";
	for(i in response.Tab_cal_insurance[0].Fix_cov_factorMin){
		var obj = response.Tab_cal_insurance[0].Fix_cov_factorMin[i];
		list_cov_factorMin += "<option value='"+obj.pass+"'>"+obj.text+"</option>";
	}
	$("#cal_fix_cov_factorMin_lookup").val(list_cov_factorMin);
	
/*	var Fix_cov_unit = [];
	for(i in response.Tab_cal_insurance[0].Fix_cov_unit){
		var obj = response.Tab_cal_insurance[0].Fix_cov_unit[i];
		Fix_cov_unit.push(obj.pass);
		Fix_cov_unit.push(obj.text);
	}
	$("#cal_fix_cov_unit_lookup").val(Fix_cov_unit);
	
	
	var Fix_cov_factor = new Array();
	for(i in response.Tab_cal_insurance[0].Fix_cov_factor){
		var obj = response.Tab_cal_insurance[0].Fix_cov_factor[i];
		Fix_cov_factor.push(obj.pass);
		Fix_cov_factor.push(obj.text);
	}
	$("#cal_fix_cov_factor_lookup").val(Fix_cov_factor);
	
	var Fix_cov_factorMin = new Array();
	for(i in response.Tab_cal_insurance[0].Fix_cov_factorMin){
		var obj = response.Tab_cal_insurance[0].Fix_cov_factorMin[i];
		Fix_cov_factorMin.push(obj.pass);
		Fix_cov_factorMin.push(obj.text);
	}
	$("#cal_fix_cov_factorMin_lookup").val(Fix_cov_factorMin);*/
	
	
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
/*lookup Tab term_warranty*/
function show_term_warranty_OL(response){

	// พิกัดอายุ
	var sl_calendar = "";
	for(i in response.Tab_Warranty_terms[0].calendar){
		var obj = response.Tab_Warranty_terms[0].calendar[i];
			sl_calendar = "<option value='"+obj.pass+"'>"+obj.text+"</option>"
			$("#start_age_insure_unit_ol").append(sl_calendar);
			$("#end_age_insure_unit_ol").append(sl_calendar);
	}
	
	// พิกัดอายุ คุ้มครองสูงสุด
	var sl_calendarMax = "";
	for(i in response.Tab_Warranty_terms[0].calendarMax){
		var obj = response.Tab_Warranty_terms[0].calendarMax[i];
			sl_calendarMax = "<option value='"+obj.pass+"'>"+obj.text+"</option>"
			$("#end_age_maxInsure_unit_ol").append(sl_calendarMax);
	}
	
	
	// จำนวนเอาเงินประกันภัยสูงสุด
	
		//ประเภทสัญญา
		var sl_contract = ""
		var lookup_contract = "";
		for(i in response.Tab_Warranty_terms[0].contract_type){
			var obj = response.Tab_Warranty_terms[0].contract_type[i];
			sl_contract = "<option value='"+obj.pass+"' data-value='"+obj.value+"'>"+obj.text+"</option>";
			$("#tbl_insuranceIssue_OL #sl_contractType_insuranceIssue1").append(sl_contract);
			$("#tbl_insuranceMax_OL #sl_contractType_insuranceMax1").append(sl_contract);
			lookup_contract += "<option value='"+obj.pass+"' data-value='"+obj.value+"'>"+obj.text+"</option>"
		}
		$("#lookup_contractType").val(lookup_contract);
		
		//Senior
	    var sl_senior = ""
		var lookup_senior = "";
	    sl_senior = "<option value='NONE'>All</option>";
		$("#tbl_insuranceIssue_OL #sl_senior_insuranceIssue1").append(sl_senior);
		$("#tbl_insuranceMax_OL #sl_senior_insuranceMax1").append(sl_senior);
		lookup_senior += sl_senior
		for(i in response.Tab_Warranty_terms[0].senior){
			var obj = response.Tab_Warranty_terms[0].senior[i];
			if( obj.text == "None"){
				var text = "All";
			}else{
				var text = obj.text;
			}
			sl_senior = "<option value='"+obj.pass+"'>"+text+"</option>";
			$("#tbl_insuranceIssue_OL #sl_senior_insuranceIssue1").append(sl_senior);
			$("#tbl_insuranceMax_OL #sl_senior_insuranceMax1").append(sl_senior);
			lookup_senior += "<option value='"+obj.pass+"'>"+text+"</option>"
		}
		$("#lookup_slSenior").val(lookup_senior);
		
		//Reinsurance Group
		var sl_reInsuranceGroup = "";
		var lookup_reInsuranceGroup = "";
		for(i in response.Tab_Warranty_terms[0].reinsurance_Group){
			var obj = response.Tab_Warranty_terms[0].reinsurance_Group[i];
			if( i == 0){
				sl_reInsuranceGroup = "<option value='NONE' selected>All</option>";
				$("#tbl_insuranceIssue_OL #sl_Reinsurance_insuranceIssue1").append(sl_reInsuranceGroup);
				$("#tbl_insuranceMax_OL #sl_Reinsurance_insuranceMax1").append(sl_reInsuranceGroup);
				lookup_reInsuranceGroup += "<option value='NONE'>All</option>"
			}
			var text = obj.text;
			sl_reInsuranceGroup = "<option value='"+obj.pass+"'>"+text+"</option>";
			$("#tbl_insuranceIssue_OL #sl_Reinsurance_insuranceIssue1").append(sl_reInsuranceGroup);
			$("#tbl_insuranceMax_OL #sl_Reinsurance_insuranceMax1").append(sl_reInsuranceGroup);
			lookup_reInsuranceGroup += "<option value='"+obj.pass+"'>"+text+"</option>"
		}
		$("#lookup_reinsurance_Group").val(lookup_reInsuranceGroup);
		
		//Sale Channel
		var sl_saleChannel = "";
		var lookup_saleChannel = "";
		for(i in response.Tab_Warranty_terms[0].sale_Channel){
			var obj = response.Tab_Warranty_terms[0].sale_Channel[i];
			sl_saleChannel = "<option data-id='"+obj.value+"' value='"+obj.pass+"'>"+obj.text+"</option>";
			$("#tbl_insuranceIssue_OL #sl_saleChannel_insuranceIssue1").append(sl_saleChannel);
			$("#tbl_insuranceMax_OL #sl_saleChannel_insuranceMax1").append(sl_saleChannel);
			lookup_saleChannel += "<option data-id='"+obj.value+"' value='"+obj.pass+"'>"+obj.text+"</option>"
		}
		$("#lookup_sale_Channel").val(lookup_saleChannel);
	
}

function show_benefit_OL(response){
	var obj_bnf = response.Tab_Benefits[0];
	
	var list_unit = "";
	//list_unit = "<option value='NONE'>None</option>";
	for(i in obj_bnf.unit){
		var obj = obj_bnf.unit[i];
		list_unit += "<option value='"+obj.pass+"'>"+obj.text+"</option>";
	}
	$("#bnf_unit_lookup").val(list_unit);
		
	var list_factor_unit = "";
	//list_factor_unit = "<option value='NONE'>None</option>";
	for(i in obj_bnf.factor_unit){
		var obj = obj_bnf.factor_unit[i];
		list_factor_unit += "<option value='"+obj.pass+"'>"+obj.text+"</option>";
	}
	$("#bnf_factor_unit_lookup").val(list_factor_unit);
	
	var list_factor_scope = "";
	//list_factor_scope = "<option value='NONE'>None</option>";
	for(i in obj_bnf.factor_scope){
		var obj = obj_bnf.factor_scope[i];
		list_factor_scope += "<option value='"+obj.pass+"'>"+obj.text+"</option>";
	}
	$("#bnf_factor_scope_lookup").val(list_factor_scope);
	
	var list_unitFactor = "";
	//list_unitFactor = "<option value='NONE'>None</option>";
	for(i in obj_bnf.unitFactor){
		var obj = obj_bnf.unitFactor[i];
		list_unitFactor += "<option value='"+obj.pass+"'>"+obj.text+"</option>";
	}
	$("#bnf_unitFactor_lookup").val(list_unitFactor);
	
	var list_frequency = "";
	//list_frequency = "<option value='NONE'>None</option>";
	for(i in obj_bnf.frequency){
		var obj = obj_bnf.frequency[i];
		list_frequency += "<option value='"+obj.pass+"'>"+obj.text+"</option>";
	}
	$("#bnf_frequency_lookup").val(list_frequency);
	
	/*โรคร้ายแรง*/
	var list_die_premium = "";
	//list_die_premium = "<option value='NONE'>None</option>";
	for(i in obj_bnf.die.die_premium){
		var obj = obj_bnf.die.die_premium[i];
		list_die_premium += "<option value='"+obj.pass+"'>"+obj.text+"</option>";
	}
	$("#die_premium_lookup").val(list_die_premium);
	
	var list_die_calendar = "";
	//list_die_calendar = "<option value='NONE'>None</option>";
	for(i in obj_bnf.die.die_calendar){
		var obj = obj_bnf.die.die_calendar[i];
		list_die_calendar += "<option value='"+obj.pass+"'>"+obj.text+"</option>";
	}
	$("#die_calendar_lookup").val(list_die_calendar);
	
	var list_die_CV_PV = "";
	//list_die_CV_PV = "<option value='NONE'>None</option>";
	for(i in obj_bnf.die.die_CV_PV){
		var obj = obj_bnf.die.die_CV_PV[i];
		list_die_CV_PV += "<option value='"+obj.pass+"'>"+obj.text+"</option>";
	}
	$("#die_CV_PV_lookup").val(list_die_CV_PV);
	
	var list_die_sa = "";
	//list_die_sa = "<option value='NONE'>None</option>";
	for(i in obj_bnf.die.die_sa){
		var obj = obj_bnf.die.die_sa[i];
		list_die_sa += "<option value='"+obj.pass+"'>"+obj.text+"</option>";
	}
	$("#die_sa_lookup").val(list_die_sa);
	
	var list_die_other = "";
	//list_die_other = "<option value='NONE'>None</option>";
	for(i in obj_bnf.die.die_other){
		var obj = obj_bnf.die.die_other[i];
		list_die_other += "<option value='"+obj.pass+"'>"+obj.text+"</option>";
	}
	$("#die_other_lookup").val(list_die_other);
	
	var list_die_unit = "";
	//list_die_other = "<option value='NONE'>None</option>";
	for(i in obj_bnf.die.die_unit){
		var obj = obj_bnf.die.die_unit[i];
		list_die_unit += "<option value='"+obj.pass+"'>"+obj.text+"</option>";
	}
	$("#die_unit_lookup").val(list_die_unit);
	
}

/****************Approve****************/
//setting Approve Lookup
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
function setting_ApproveOL(response){
	var obj_BI = response.Tab_Basic_Information[0];
	/*NEW , UPDATE = แก้ไข, REQUEST_FOR_APPROVE = รออนุมัติ, APPROVED = อนุมัติ, REJECTED = ไม่อนุมัติ*/
	//var status = "REJECTED";
	var status = obj_BI.status;
	var status_PD = obj_BI.status_PD;
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
		 $("#menu_OL_6").removeClass("disabledAll");
	}
}

function bt_approved(claim){
	var cov_code = $("#code_Coverage_OL").val();
	var name_TH = $("#approve_nameTH_OL").val();
	var name_EN = $("#approve_nameEN_OL").val();
	var status_policy = $("#status_policy").val();
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
		 url: "ProductRider_SaveData_Servlet", 
		 data: data_json,
		 success: function(response){
			console.log(response);
			
			/***  CODE FOR PREPARE AND SEND MAIL  ****/
			//debugger;
			
				var prepareEmail_data = [];
				objEmail = {};
				objEmail["requestApprove"] 		=status_th;
				objEmail["manuName"] 			="สัญญาเพิ่มเติม";
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

/**************Get case****************/
function showcase_basicInfo_OL(response){
	var obj_basic = response.Tab_Basic_Information[0];
	var obj_cal = response.Tab_cal_insurance_premiums[0];
	
	if(obj_basic.coreBiz != ""){
		$("#key_Insurance_product_ol").val(obj_basic.coreBiz);
		$("#validate_input1_ol").hide();
	}
	
	if(obj_basic.nameTH != ""){
		$("#th_Name_ol").val(obj_basic.nameTH);
		$("#validate_input2_ol").hide();
	}
	
	$("#en_Name_ol").val(obj_basic.nameEN);
	
	if(obj_basic.marketing_nameTH != ""){
		$("#th_marketingName_ol").val(obj_basic.marketing_nameTH);
		$("#validate_input3_ol").hide();
	}
	
	$("#en_marketingName_ol").val(obj_basic.marketing_nameEN);

	/*ความคุ้มครองสัญญาเพิ่มเติม*/
	if(obj_basic.rider.length > 0){
		/*Get Case*/
		
		var obj_rider = obj_basic.rider[0];
		var cov_code = obj_rider.cov_code;
		
		var json_data = {
				"method" : "getCaseRider",
				"rCode" : cov_code
		}
		$.ajax({
			url: 'ProductRider_GetData_Servlet',
			type: "POST",
			data: json_data,
			async : false,
			success: function (response) {
				var obj = response.Tab_Basic_Information[0];
				var obj_calPrem = response.Tab_cal_insurance_premiums[0];
				
				/****Tab Basic****/
				
				var ftOnclick = 'imgCheckbox(id);';	
				var rider_id = obj.passInsurance;
				var rider_name = obj.nameTH;
				var rider_cov_cat_id = obj_rider.cov_cat_id;
				//var prd_code_rider = $("#prd_code_rider_"+numberImgOK).val();
				var rider_type = "";
				var id = 1;
				var changeFileModal = 'modalGet_selectFile("'+rider_id+'","fileuploads_PMRate1_OL","ip_fileuploads_OL_Additional_contract_Show_'+id+'","span_Additional_contractopen_'+id+'","validate_Additional_OL_'+id+'_OL","span_Additional_contractdownload_'+id+'")';
				
			    var newID = "imgOK_"+id;
			    var rate_cat_NAR = $("#rate_cat_NAR").val();
			    var addrowChild = 'addrowChild("'+id+'","'+rider_name+'","'+rider_type+'");';
			   		    	   		       		    	 
				    row2 = 	"<tr id=\"tr_Additional_contract_"+id+"\" data-id=\""+id+"\" data-level=\"1\">"+
					"<td class=\"text-left verticalCenter borderBlack\">"+
						"<input type='hidden' id='rider_cov_cat_id"+id+"' value='"+rider_cov_cat_id+"'>"+
						/*"<input type='hidden' id='prd_code_rider_"+id+"' value='"+prd_code_rider+"'>"+*/
						"<label style=\"text-decoration: underline; color: blue;\">"+rider_id+"</label>"+
					"</td>"+
					"<td class=\"text-left verticalCenter fontcolortable2 borderBlack\">"+
						"<label>"+rider_name+"</label>"+
					"</td>"+
					/*PM*/
					"<td class=\"verticalCenter borderBlack\">"+
						"<div class=\"input-group col-xs-12\">"+
							"<input type='hidden' id='fileId_rider_PM"+id+"' value='' />"+
							"<input type='hidden' id='rate_cat_id_rider_PM"+id+"' value='' />"+
							"<input type='hidden' id='rate_layout_id_rider_PM"+id+"' value='' />"+
							"<input type=\"file\" accept=\".txt\" id=\"ip_fileuploads_Additional_contract"+id+"\" style=\"display: none\">"+
							"<input type=\"text\" class=\"form-control clear_val\" id=\"ip_fileuploads_OL_Additional_contract_Show_"+id+"\" readonly> " +
							"<span class=\"input-group-btn\"><button class=\"btn btn-default btn-primary\" type=\"button\" id=\"bt_uploadfileAdditional_contract"+id+"\"  onclick='"+changeFileModal+"' data-toggle=\"modal\" data-target=\"#modal_input_PMRate\">" +
									/*"<font id='validate_Additional_CL_"+numberImgOK+"_CL' class='require_file' style='color: red;'>*</font>" +*/
									"...</button>"+
							"</span>"+
						"</div>"+
					"</td>"+
					"<td class='text-center verticalCenter borderBlack'>"+
						"<a id='span_Additional_contractopen_"+id+"' class='active_grey'>"+
							"<span class='glyphicon glyphicon-eye-open activecolorgray'></span>"+
						"</a>"+
					"</td>"+
					"<td class='text-center verticalCenter borderBlack'>"+
						"<a id='span_Additional_contractdownload_"+id+"' data-id='span_Additional_contractdownload_"+id+"' class='active_grey'>"+
							"<span class='glyphicon glyphicon-download-alt activecolorgray'></span>"+
						"</a>"+
					"</td>"+
					/*EM*/
					"<td class=\"verticalCenter borderBlack\">"+
					"<div class=\"input-group col-xs-12\">"+
						"<input type='hidden' id='fileId_rider_EM"+id+"' value=''/>"+
						"<input type='hidden' id='rate_cat_id_rider_EM"+id+"' value=''/>"+
						"<input type='hidden' id='rate_layout_id_rider_EM"+id+"' value='' />"+
						"<input type='text' class='form-control clear_val' id='ip_fileuploads_AdditionalEM_contract_"+id+"' readonly=''>"+ 
					"<label class='input-group-btn'> "+
						"<span id='spanAdditionalEM_OL_"+id+"' class='btn btn-primary' disabled>"+
								"<b>...</b>"+
							"<input id='ip_fileuploads_OL_AdditionalEM_contract_Show_"+id+"' type='file' accept=\".txt\" style='display: none;' disabled>"+
						"</span>"+
					"</label>"+
					"</div>"+
					"</td>"+
				"<td class='text-center verticalCenter borderBlack'>"+
					"<a id='span_Additional_contractopen_EM_"+id+"' class='active_grey'>"+
						"<span class='glyphicon glyphicon-eye-open activecolorgray'></span>"+
					"</a>"+
				"</td>"+
				"<td class='text-center verticalCenter borderBlack'>"+
					"<a id='span_Additional_contractdownload_EM_"+id+"' data-id='span_Additional_contractdownload_EM_"+id+"' class='active_grey'>"+
						"<span class='glyphicon glyphicon-download-alt activecolorgray'></span>"+
					"</a>"+
				"</td>"+
					/*NAR*/
					"<td class=\"verticalCenter borderBlack\">"+
					"<div class=\"input-group col-xs-12\">"+
						"<input type='hidden' id='fileId_rider_NAR"+id+"' value=''/>"+
						"<input type='hidden' id='rate_cat_id_rider_NAR"+id+"' value='"+rate_cat_NAR+"'/>"+
						"<input type='hidden' id='rate_layout_id_rider_NAR"+id+"' value='' />"+
						"<input type='text' class='form-control clear_val' id='ip_fileuploads_AdditionalNAR_contract_"+id+"' readonly=''>"+ 
					"<label class='input-group-btn'> "+
						"<span id='spanAdditionalNAR_OL_"+id+"' class='btn btn-primary' >"+
						/*"<font id='validate_AdditionalNAR_CL_"+numberImgOK+"' class='require_file' style='color: red;'>*</font>" +*/
								"<b>...</b>"+
							"<input id='ip_fileuploads_OL_AdditionalNAR_contract_Show_"+id+"' type='file' accept=\".txt\" style='display: none;'>"+
						"</span>"+
					"</label>"+
					"</div>"+
					"</td>"+
					"<td class=\"text-center verticalCenter borderBlack\">"+
						"<a id='span_Additional_contractopenNAR_"+id+"' class='active_grey'>"+
							"<span class='glyphicon glyphicon-eye-open activecolorgray'></span>"+
						"</a>"+
					"</td>"+
					"<td class=\"text-center verticalCenter borderBlack\">" +
						"<a id='span_Additional_contractdownloadNAR_"+id+"' data-id='span_Additional_contractdownloadNAR_"+id+"' class='active_grey'>"+
							"<span class='glyphicon glyphicon-download-alt activecolorgray'></span>"+
						"</a>"+
					"</td>"+
				    "</tr>";
					
					$("#tb_Additional_contract tbody").append(row2);
					$(".autoComma").autoNumeric('init',{vMin: '0.00', vMax: '999999999.99'});
				    
					// เพิ่ม onchange placeholder ของไฟล์ที่เลือกมา
					var layout_name1 = $("#layout_NAR1").val();
					var product_code_main = $("#pass_Insurance_product_ol").val();
					var layout1 = layout_name1+rider_id+"_"+product_code_main;
					var placehoder_text = layout1+".txt";
					//$("#ip_fileuploads_Additional_contract_"+numberImgOK).attr("placeholder",placehoder_text);
					$("#ip_fileuploads_AdditionalNAR_contract_"+id).attr("placeholder",placehoder_text);
									
					/**************************/
					// NAR
					var uploadfile2 = "selectFileRate_OL(22,'ip_fileuploads_OL_AdditionalNAR_contract_Show_"+id+"','"+layout1+"','','','span_Additional_contractopenNAR_"+id+"')";
					$("#ip_fileuploads_OL_AdditionalNAR_contract_Show_"+id).attr("onchange",uploadfile2);
					
					
					/******************PM_Rate******************/
					if(obj_rider.pm_rate.length > 0){
						var PM_fileid = obj_rider.pm_rate[0].fileID;
						var PM_ratecat = obj_rider.pm_rate[0].rate_cat_id;
						var PM_layoutid = obj_rider.pm_rate[0].rate_layout_id;
						var PM_value = obj_rider.pm_rate[0].filename;

						$("#fileId_rider_PM1").val(PM_fileid);
						$("#rate_cat_id_rider_PM1").val(PM_ratecat);
						$("#rate_layout_id_rider_PM1").val(PM_layoutid);
						$("#ip_fileuploads_Additional_contract1").attr("value", PM_value);
						$("#ip_fileuploads_OL_Additional_contract_Show_1").val(PM_value);
						
						$("#span_Additional_contractopen_1 span").removeClass("activecolorgray").addClass("activecolorblue").attr("onclick", "openFileTextProductRider('"+PM_value+"', '"+obj_rider.pm_rate[0].ref+"', 41, 'tb_input_fileSee_modal_pmRate', 'modal_input_fileSee_PMRate')");
						$("#span_Additional_contractdownload_1 span").removeClass("activecolorgray").addClass("activecolorblue").attr("onclick", "openFile_target('"+PM_value+"','"+obj_rider.pm_rate[0].ref+"','txt_download')");

					}
					/******************EM_Rate******************/
					if(obj_calPrem.em_Age.length > 0){
						var EM_fileid = obj_calPrem.em_Age[0].fileID;
						var EM_ratecat = obj_calPrem.em_Age[0].rate_cat_id;
						var EM_layoutid = obj_calPrem.em_Age[0].layout;
						var EM_value = obj_calPrem.em_Age[0].file;

						$("#fileId_rider_EM1").val(EM_fileid);
						$("#rate_cat_id_rider_EM1").val(EM_ratecat);
						$("#rate_layout_id_rider_EM1").val(EM_layoutid);
						$("#ip_fileuploads_AdditionalEM_contract_1").val(EM_value);
						
						$("#span_Additional_contractopen_EM_1 span").removeClass("activecolorgray").addClass("activecolorblue").attr("onclick", "openFileTextProductRider('"+EM_value+"', '"+obj_calPrem.em_Age[0].ref+"', 3, 'tb_inputExtra_RateView_OL', 'modal_inputExtra_RateView_OL')");
						$("#span_Additional_contractdownload_EM_1 span").removeClass("activecolorgray").addClass("activecolorblue").attr("onclick", "openFile_target('"+EM_value+"','"+obj_calPrem.em_Age[0].ref+"','txt_download')");
					}
					
					/******************NAR******************/
					if(obj_rider.nar.length > 0){
						var NAR_fileid = obj_rider.nar[0].fileID;
						var NAR_layoutid = obj_rider.nar[0].rate_layout_id;
						var NAR_value = obj_rider.nar[0].filename;				
						$("#fileId_rider_NAR1").val(NAR_fileid);
						$("#rate_layout_id_rider_NAR1").val(NAR_layoutid);
						$("#ip_fileuploads_AdditionalNAR_contract_1").val(NAR_value);
						
						$("#span_Additional_contractopenNAR_1 span").removeClass("activecolorgray").addClass("activecolorblue").attr("onclick", "openFileTextProductRider('"+NAR_value+"', '"+obj_rider.nar[0].ref+"', 63, 'tb_input_fileSee_modal_NAR', 'modal_input_fileSee_NAR')");
						$("#span_Additional_contractdownloadNAR_1 span").removeClass("activecolorgray").addClass("activecolorblue").attr("onclick", "openFile_target('"+NAR_value+"','"+obj_rider.nar[0].ref+"','txt_download')");
					}
					
					/******************พิกัดอายุ******************/
					//คุ้มครองสูงสุด
					var maximum_insure = "";
					var maximum_Insure_unit = "";
					if(obj.maximum_Insure_year != 0){
						maximum_insure = obj.maximum_Insure_year;
						maximum_Insure_unit = "ปี";
					}else{
						maximum_insure = obj.maximum_Insure_age;
						maximum_Insure_unit = "ถึงอายุ";
					}

					var row_age = "<tr>"+
								"<td class='verticalCenter text-center font-term-green borderBlack'><label>"+rider_id+"</label></td>"+
								"<td class='verticalCenter text-right backgroundColorGray borderBlack'>"+obj.age_Start+"</td>"+
								"<td class='verticalCenter text-right borderBlack'>"+obj.age_To+"</td>"+
								"<td class='verticalCenter text-right borderBlack'>"+maximum_insure+"</td>"+
								"<td class='verticalCenter text-center borderBlack'>"+maximum_Insure_unit+"</td>"+
								"</tr>";
					$("#tb_ageRange_OL tbody").append(row_age);
					
					/******************เพศ******************/
					if(obj.sex == "MALE"){
						$("#male_gender").prop("checked", true);
					}else if(obj.sex == "FEMALE"){
						$("#female_gender").prop("checked", true);
					}else{
						$("#male_gender").prop("checked", true);
						$("#female_gender").prop("checked", true);
					}
					
					/******************Mode******************/
					if(obj.mode.length > 0){
						for(i in obj.mode){
							var mode = obj.mode[i].value;
							$("#tbl_mode_ol input:checkbox").each(function(){
								if($(this).val() == mode){
									$(this).prop("checked", true);
								}
							});
						}
					}
					
					/****************ระยะชำระเบี้ย***************/
					var premFrom_unit = "";
					var premTo_unit = "";
					
					if(obj.premium_preiod_radio == "TO_AGE"){
						$("#lb_paymentTerm_OL").text("ชำระถึงอายุ");
					}else{
						$("#lb_paymentTerm_OL").text("ระยะชำระเบี้ย");
					}
					
					if(obj.premium_preiod_unit == "AGE"){
						premFrom_unit = "ปี";
						premTo_unit = "ถึงอายุ";
					}else{
						premFrom_unit = obj.premium_preiod_unit_text;
						premTo_unit = obj.premium_preiod_unit_text;
					}

					var row_PaymentTerm = "";
					if(obj.premium_preiod_radio != ""){
						row_PaymentTerm = "<tr>"+
							"<td class='text-center verticalCenter fontcolortable2 borderBlack' width='60'><label>1</label></td>"+
							"<td class='text-center verticalCenter fontcolortable2 borderBlack' width='60'><label>"+premFrom_unit+"</label></td>"+
							"<td class='text-center verticalCenter fontcolortable2 borderBlack' width='60'><label>"+obj.premium_num+"</label></td>"+
							"<td class='text-center verticalCenter fontcolortable2 borderBlack' width='60'><label>"+premTo_unit+"</label></td>"+
						"</tr>";
					}else{
						row_PaymentTerm = "<tr>"+
							"<td class='text-center verticalCenter fontcolortable2 borderBlack' width='60'><label></label></td>"+
							"<td class='text-center verticalCenter fontcolortable2 borderBlack' width='60'><label></label></td>"+
							"<td class='text-center verticalCenter fontcolortable2 borderBlack' width='60'><label></label></td>"+
							"<td class='text-center verticalCenter fontcolortable2 borderBlack' width='60'><label></label></td>"+
						"</tr>";
					}
						
					$("#tbl_paymentTerm_OL tbody").append(row_PaymentTerm);
					
				
				
				/*ปิดปุ่ม PM rate กรณีไม่มีการเลือกมาใน rider*/
				if(obj_calPrem.table_insurance_premium.length <= 0){
					$("#bt_uploadfileAdditional_contract1").prop("disabled", true);
				}
				
				/****Tab คำนวนเบี้ย****/
				getData_TabCalPrem(rider_id, response);
				/****Tab ข้อกำหนด - สร้าง tab policy*****/
				var cov_code = response.Tab_Basic_Information[0].passInsurance
				var row_policy = "";
				row_policy = " <li>" +
								"<a data-toggle='tab' href='#policy_in_"+cov_code+"' class='green'>"+cov_code+"</a>" +
							"</li>"
				$("#tab_policy_panel").prepend(row_policy)
				getLookup_policyWording_data(cov_code,response)
				
				
				getData_Term_OL(response);
			},
		});

			/****************การส่ง Reinsurance***************/
			var reinsurance_opt = obj_basic.reinsurance_opt;
			if(reinsurance_opt == "NONE"){
				$("#selectSendReinsurance2").prop("checked", true);
				$("#rd_filing_rs_OL2").prop("checked",true)
			}else{
				$("#selectSendReinsurance1").prop("checked", true);
				$("#label_send_re").css("opacity", "1");
				$("#lb_reinsurance").prop("disabled", false);
				$("#lb_reinsurance option[value='"+reinsurance_opt+"']").attr("selected", true);
				$("#rd_filing_rs_OL1").prop("checked",true)
			}
			
			/****************Distribution Channel***************/
			$("#lb_distribution_OL option[value='"+obj_basic.distribution_Channel+"']").attr("selected",true);
			
			/****************Sale Channel***************/
			$("#lb_saleChannel_OL option[data-id='"+obj_basic.sale_channel+"']").attr("selected",true);
			
			/****************Partner***************/
			var systemCode = $('#lb_saleChannel_OL :selected').val();
			if (systemCode != "" && systemCode != "NONE") {
				$("#lb_partner_OL option").remove();
				var opt_none = "<option value='NONE' selected>None</option>";
				$("#lb_partner_OL").append(opt_none);
				searchPartner(obj_basic.partner);
			}else{
				$("#lb_partner_OL option").remove();
				var opt_none = "<option value='NONE' selected>None</option>";
				$("#lb_partner_OL").append(opt_none);
			}			
	}		
}

function showcase_cal_premium_OL(response){
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
	for(i in response.Tab_cal_insurance_premiums[0].limitCondSerie){
		var obj_limitCond = response.Tab_cal_insurance_premiums[0].limitCond[round_parent];
		var obj_limitCondSerie = response.Tab_cal_insurance_premiums[0].limitCondSerie[i];
		var obj_limit_seq1 = response.Tab_cal_insurance_premiums[0].limit_seq1[i];
		var obj_limit_seq2 = response.Tab_cal_insurance_premiums[0].limit_seq2[i];
		if(obj_limitCondSerie.Serie_no == 1){
			round_parent++;
		}
		var flag_tb = false;
		$("#tb_Calculate_insurance tbody>tr").each(function(i){
			if(obj_limitCondSerie.Prd_rider_code == $(this).find('td:nth-child(1) input').val() && obj_limitCondSerie.Serie_no == 1){
				id_parent = $(this).attr('data-id');
				
				if(obj_limitCond.Cond_seq == null){
					$(this).find('td:nth-child(1) #seq').val(1)
				}else{
					$(this).find('td:nth-child(1) #seq').val(obj_limitCond.Cond_seq)
				}
				if(obj_limitCondSerie.Serie_no == null){
					$(this).find('td:nth-child(1) #serie_no').val(1)
				}else{
					$(this).find('td:nth-child(1) #serie_no').val(obj_limitCondSerie.Serie_no)
				}
				$(this).find('td:nth-child(3) input').val(numberWithCommas(parseFloat(obj_limitCondSerie.Min_base_amt).toFixed(2)));
				$(this).find('td:nth-child(4) input').val(numberWithCommas(parseFloat(obj_limitCondSerie.Max_base_amt).toFixed(2)));
				$(this).find('td:nth-child(5) input').val(numberWithCommas(parseFloat(obj_limit_seq1.Limit_amt).toFixed(2)));
				$(this).find("td:nth-child(6) select>option[value="+obj_limit_seq1.Limit_unit+"]").attr("selected", true);
				$(this).find("td:nth-child(7) select>option[value="+obj_limit_seq1.Limit_factor+"]").attr("selected", true);
				$(this).find('td:nth-child(8) input').val(numberWithCommas(parseFloat(obj_limit_seq2.Limit_amt).toFixed(2)));
				$(this).find("td:nth-child(9) select>option[value="+obj_limit_seq2.Limit_factor+"]").attr("selected", true);
				$(".autoComma").autoNumeric('init',{vMin: '0.00', vMax: '999999999.99'});
				rowChild3 = 1;
				
			}
			else if(obj_limitCondSerie.Serie_no != 1 && flag_tb == false){//*flag_tb == false*/
				flag_tb = true;
				///หน่วย
				var dropdownUnit = $("#tb_Calculate_insurance tbody>tr").eq(0).find('td:nth-child(6) select').html();
				var dropdownOF1 = $("#tb_Calculate_insurance tbody>tr").eq(0).find('td:nth-child(7) select').html();
				var dropdownOF2 = $("#tb_Calculate_insurance tbody>tr").eq(0).find('td:nth-child(9) select').html();
				
				var name_tr 		= "tr_Calculate_insurance"+id_parent+"_"+rowChild3;
				var removerowChild = 'removerowChild3("'+name_tr+'");';
				var new_row 		=  "<tr id=\"tr_Calculate_insurance"+id_parent+"_"+rowChild3+"\" data-id=\""+id_parent+"_"+rowChild3+"\" data-group='"+id_parent+"' data-parent=\""+id_parent+"\" data-level=\"2\">"+
						"<td width=\"14%\" class=\"text-center verticalCenter fontcolortable1 borderBlack\">"+
							"<label></label>"+
							"<input type='hidden' id='prd_rider_code' value='"+obj_limitCondSerie.Prd_rider_code+"' >"
							
							if(obj_limitCondSerie.Serie_no == null){
								new_row += "<input type='hidden' id='serie_no' value='2' >"
							}else{
								new_row += "<input type='hidden' id='serie_no' value='"+obj_limitCondSerie.Serie_no+"' >"
							}
							
						new_row += "<input type='hidden' id='seq' value=''>"+
						"</td>"+
						"<td width=\"7%\" class=\"text-center verticalCenter borderBlack\">"+
							"<i class=\"glyphicon icon-blue-circle glyphicon-minus icon_active\"  data-id=\'"+rowChild3+"\' data-topic=\'"+rowChild3+"\' data-type=\'"+rowChild3+"\' id=\"removerow_"+rowChild3+"\" onclick='"+removerowChild+"'></i>"+
						"</td>"+	
						"<td width=\"3%\"class=\"text-right verticalCenter borderBlack\">"+
						"<input type='text' class='autoComma form-control margin-padding0 text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999999999.99' disabled> "+
						"</td>"+
						"<td width=\"7%\" class=\"text-right verticalCenter borderBlack\">"+
						"<input type='text' class='autoComma form-control margin-padding0 text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999999999.99' onblur='validateMax_tbCal(this); chkBlank_tbCal(this);'>"+
						"</td>"+
						"<td width=\"10%\"class=\"text-right verticalCenter borderBlack\">"+
						"<input type='text' class='autoComma form-control margin-padding0 text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999999999.99' onblur='chkBlank_tbCal(this); check_value_format(1,this);'>"+
						"</td>"+
						"<td width=\"14%\" class=\"text-right verticalCenter borderBlack\">"+
							"<select class=\"form-control\" onchange='check_value_format(2,this);'>"+dropdownUnit+"</select></td>"+
						"<td width=\"14%\" class=\"text-right verticalCenter borderBlack\">"+
							"<select class=\"form-control\">"+dropdownOF1+"</select></td>"+
						"<td width=\"10%\" class=\"text-right verticalCenter borderBlack\">"+
						"<input type='text' class='autoComma form-control margin-padding0 text-center width40px' value='0.00' data-v-min='0.00' data-v-max='999999999.99' onblur='chkBlank_tbCal(this);'>"+
						"<td width=\"14%\" class=\"text-right verticalCenter borderBlack\">"+
							"<select class=\"form-control\">"+dropdownOF2+"</select></td>"+
					"</tr>";	
				$(new_row).insertAfter($("#tb_Calculate_insurance"+">tbody>tr[data-group="+id_parent+"]:last").closest('tr'));
				$("#tr_Calculate_insurance"+id_parent+"_"+rowChild3).find('td:nth-child(3) input').val(numberWithCommas(obj_limitCondSerie.Min_base_amt));
				$("#tr_Calculate_insurance"+id_parent+"_"+rowChild3).find('td:nth-child(4) input').val(numberWithCommas(obj_limitCondSerie.Max_base_amt));
				$("#tr_Calculate_insurance"+id_parent+"_"+rowChild3).find('td:nth-child(5) input').val(numberWithCommas(obj_limit_seq1.Limit_amt));
				$("#tr_Calculate_insurance"+id_parent+"_"+rowChild3).find("td:nth-child(6) select>option[value="+obj_limit_seq1.Limit_unit+"]").attr("selected", true);
				$("#tr_Calculate_insurance"+id_parent+"_"+rowChild3).find("td:nth-child(7) select>option[value="+obj_limit_seq1.Limit_factor+"]").attr("selected", true);
				$("#tr_Calculate_insurance"+id_parent+"_"+rowChild3).find('td:nth-child(8) input').val(numberWithCommas(obj_limit_seq2.Limit_amt));
				$("#tr_Calculate_insurance"+id_parent+"_"+rowChild3).find("td:nth-child(9) select>option[value="+obj_limit_seq2.Limit_factor+"]").attr("selected", true);
				rowChild3++;
				$(".autoComma").autoNumeric('init',{vMin: '0.00', vMax: '999999999.99'});
			}
		})
	}
	
	/*formula*/
	for(i in response.Tab_cal_insurance_premiums[0].formula){
		var obj_formula = response.Tab_cal_insurance_premiums[0].formula[i];
		$("#tb_Calculate_insurance2 tbody>tr").each(function(){
			if(obj_formula.Prd_rider_code == $(this).find('td:nth-child(1) #prd_rider_code').val()
					&& obj_formula.Formula_cat_id == $(this).find('td:nth-child(2) #rate_cat_formula').val()){
				$(this).find("td:nth-child(3) select>option[value="+obj_formula.Formula_id+"]").attr('selected', true);
			}
		});
	}
}

function showcase_benefit_OL(response,cov_code){
	var numberImgOK = "";
	var html = "";
	var j = 0;
	
	//console.log(cov_code)
	if(cov_code == ""){
	//if(response.Tab_Basic_Information[0].rider[0]){
		var cov_code = response.Tab_Basic_Information[0].rider[0].cov_code;
	}else{
		var cov_code = cov_code;
	}
	
	
	var json_data = {
			"method" : "getCaseRider",
			"rCode" : cov_code
	}
	$.ajax({
		url: 'ProductRider_GetData_Servlet',
		type: "POST",
		data: json_data,
		success: function (response) {
			/*put data*/
			var obj_bnf = response.Tab_benefit[0];
			
			if(obj_bnf.benefit.length > 0){
				for(i in obj_bnf.benefit){
					var obj = response.Tab_benefit[0].benefit[i];
					var bnf_id = obj[0].benefit_item.item_name;
					
						html += "<li id='tabBC_0"+i+"_OL'><a data-toggle='tab' onclick=\"show_bnf_content_OL('BC"+i+"_OL');\""+
						"style='display: block' id='aBC"+i+"_OL'>"+bnf_id+"</a></li>";
						j++;
				}
				
				$("#tabBenefitRider_OL").append(html);
				$("#tabBC_00_OL").addClass("active in");
				
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
			
			row = "<div class='tab-content' id='tab_content_BC_0"+i+"_OL' data-name='"+bnf_id+"' data-flag='"+flag+"' data-id='BC_0"+i+"_OL'>"+
			"<div id='BC"+i+"_OL' class='tab-pane'>"+
			"<input type='hidden' id='hidden_BC_0"+i+"_OL' value='"+bnf_item_id+"'>"+
			"<input type='hidden' id='flag_BC_0"+i+"_OL' value='"+bnf_item_id+"'>"+
			"<div class='heading1'>"+bnf_id+" - "+bnf_name+"</div>"+
			"<div class='text-center' style='padding: 20px 0'></div>";
				
			/*โรคร้ายแรง*/
			if(flag == true){
			 row += "<table class='tbl_DDR1'>"+
					"<tr>"+
						"<td>"+
							"<div style='padding-bottom: 64px'>"+
								"<input type='hidden' id='bnf_itemID' value=''>"+
								"<table class='table table-bordered' width='250' id='tbody_bnfL_BC_0"+i+"_OL' style='width: 400px;'>"+
									"<thead>"+
									"<tr>"+
										/*"<td width='64px' rowspan='2' style='vertical-align: middle;height: 74px;' class='text-center borderBlack bg-primary'>เลือก</td>"+*/
										/*"<td width='64px' rowspan='2' style='vertical-align: middle;height: 74px;' class='text-center borderBlack bg-primary'>ระยะ</td>"+*/
										"<td width='165px' colspan='2' rowspan='2' style='vertical-align: middle; height: 74px;' class='text-center borderBlack bg-primary'>From</td>"+
										"<td width='165px' colspan='2' rowspan='2' style='vertical-align: middle; height: 74px;' class='text-center borderBlack bg-primary'>To</td>"+
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
								"<table class='table table-bordered' id='tbody_bnfR_BC_0"+i+"_OL' style='width: 1320px;'>"+
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
			"</table>";
			 
			/* "<div class='row'>"+					
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
			"</div>";*/
			 
			}

			row += "<div class='text-center' style='padding: 30px 0'></div>"+
					"<div class='scroll_benefitTab_rider'>"+
					"<table class='table table-bordered borderBlack' id='tbl_BC_0"+i+"_OL' style='width:2500px;'>"+							
						"<thead>"+
							"<tr>"+									
								/*"<th rowspan='2' class='text-center bg-primary borderBlack' width='25' style='vertical-align: middle; height:74px;'>เลือก</th>"+*/
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
					/*"<div class='col-md-4'>"+
						"<div class='col-md-6' style='padding-left: 0;'>"+
							"<a class='open-SelectBenefitDialog_OL' data-toggle='modal' href='#modal_selectCoverage_OL'><button class='btn btn-primary width100' onclick=\"addBenefitRider_OL('BC_0"+i+"_OL');\">เพิ่มรายการ</button></a>"+
						"</div>"+
						"<div class='col-md-6'>"+
							"<button class='btn btn-primary width100' onclick=\"confirmDeleteBenefitRaider_OL('BC_0"+i+"');\">ลบรายการ</button>"+
						"</div>"+
					"</div>"+*/
					"<div class='col-md-4'></div>"+
					"<div class='col-md-4'>";
					
					/*if(flag == true){		
					row += "<div class='col-md-6'>"+
							"<button class='btn btn-primary width100' onclick=\"bt_benefit_OL_Confirm('BC_0"+i+"_OL');\">บันทึก</button>"+
						"</div>"+
						"<div class='col-md-6' style='padding-right: 0'>"+
							"<button class='btn btn-primary width100' data-dismiss='modal' data-toggle='modal'"+
									"data-target='#cancelBoxOL_Benefit'>ยกเลิก</button>"+
						"</div>";
					}*/
					
					row += "</div>"+
				"</div>";
				
			/*รายการข้อยกเว้นการจ่ายเงินทดแทนในกรณีโรคร้ายแรง*/
			if(flag == true){
			row += "<div id='exception_OL'>"+
					"<div class='text-center' style='padding: 30px 0'></div>"+
					"<div id='div_exceptionOL'>"+
					"<input type='hidden' id='exception_bnf_id_OL' value=''>"+
					"<table class='table table-bordered borderBlack' id='exception_Table_BC_0"+i+"_OL' style='width:100%;'>"+
						"<thead>"+
							"<tr>"+
								/*"<th class='text-center bg-primary borderBlack' width='5' style='vertical-align: middle;'></th>"+*/	
								"<th class='text-center bg-primary borderBlack' width='5' style='vertical-align: middle;'>ลำดับ</th>"+							
								"<th class='text-center verticalCenter bg-primary borderBlack' width='400'>รายการข้อยกเว้นการจ่ายเงินทดแทนในกรณีโรคร้ายแรง</th>"+							
							"</tr>"+
						"</thead>"+
						"<tbody>"+
						"</tbody>"+							
					"</table>"+
					"</div>"+

					"<div class='text-center' style='padding: 20px 0'></div>"+
					/*"<div class='row'>"+
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
					"</div>"+*/
				"</div>";
			}
				num++;
				$("#benefitDetail_OL").append(row);
				
				if(i == 0){
					show_bnf_content_OL("BC"+i+"_OL");
				}
			}
			
			get_dataBenefit_OL(response);
			
			/**/
			}	
		},
        error : function(response) {	
        	console.log("Get Rider case error");
        }
	});	
}

function get_dataBenefit_OL(response){
	 
	/********tab************/	
	//var Tab_Benefit_Check = response.Tab_benefit[0].benefit;
	
	for (i in response.Tab_benefit[0].benefit) {
		//alert(response.Tab_benefit[0].benefit[i].length);
		for(j in response.Tab_benefit[0].benefit[i]){
			if(j == 0){
				
				var obj_bnf = response.Tab_benefit[0].benefit[i][j];		
				var bnf_id = obj_bnf.benefit_item.bnf_item_id;
				var bnf_name = obj_bnf.benefit_item.item_name;
				
				/*CV*/
				var bnf_cv = obj_bnf.cov_terminate.return_cash_surr;
				
				/************get master***********/
				
				$("#benefitDetail_OL .tab-content").each(function(){
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
										$("#bnf_fromYearUnit"+no+"_OL").append(lookup_unit_calendar);
										$("#bnf_toYearUnit"+no+"_OL").append(lookup_unit_calendar);
	
										var lookup_unit = $("#die_unit_lookup").val();
										$("#bnf_sa_max"+no+"_OL").append(lookup_unit);

										var lookup_sa_unit = $("#die_sa_lookup").val();
										$("#bnf_sa_unit"+no+"_OL").append(lookup_sa_unit);

										var lookup_premium = $("#die_premium_lookup").val();
									    $("#bnf_premium_unit"+no+"_OL").append(lookup_premium);
			
										var lookup_cvpv_unit = $("#die_CV_PV_lookup").val();
										$("#bnf_cv_unit"+no+"_OL").append(lookup_cvpv_unit);
					
										var lookup_other_unit = $("#die_other_lookup").val();
										$("#bnf_other_unit"+no+"_OL").append(lookup_other_unit);
										
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

					
					/*get ตารางข้อยกเว้นโรคร้ายแรง*/
//					if(bnf_name == "BC_OL_DDR_01"){
						if(response.Tab_benefit[0].benefit[i][j].listBenefit.length > 0){
							for(jj in response.Tab_benefit[0].benefit[i][0].listBenefit) {
								var list_exception_disease = response.Tab_benefit[0].benefit[i][j].listBenefit[jj];
								var bnf_code = list_exception_disease.bnf_code;
								var name_th = list_exception_disease.name_th;
								var no = Number(jj)+1;
								var row = "";
								row = "<tr id='tbody_exception"+no+"'>"+					    								
								  /*"<td id='imgOK_exception"+no+"' class='text-center borderBlack'"+
								  "onclick='imgCheckbox_exception_OL("+no+");' data-key='"+bnf_code+"' style='vertical-align: middle;'>" +
								  "<i class='glyphicon glyphicon-edit'></i></td>"+*/	
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
						
						var BCID = "BC_0"+tabID+"_OL";
						
						/************get table***********/			
						var numberImgOK = 0;
						var iii = 0;	
						
						for(ii in response.Tab_benefit[0].benefit[i][j]){
							
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
											/*"<td id="+newID_Del+" class='text-center borderBlack vertical-middle'"+
											"onclick=\"imgCheckboxDel_benefit_OL('"+imgDel+"');\""+
											"style='vertical-align: middle;'><i "+
											"class='glyphicon glyphicon-edit'></i></td>"+ */  	
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
									   /*"<td class='text-center borderBlack'></td>"+*/
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
	
	/*disabled*/
	$("#benefitDetail_OL .tab-content>.tab-pane .scroll_benefitTab_rider>table>tbody").addClass("disabledAll_NotFade");
	$("#benefitDetail_OL .tab-content>.tab-pane .benefit_cv_box input:checkbox").addClass("disabledAll_NotFade");
	$("#benefitDetail_OL .tab-content>.tab-pane table>tbody input:text, #benefitDetail_OL .tab-content>.tab-pane table>tbody select, #benefitDetail_OL .tab-content>.tab-pane table>tbody input:checkbox").addClass("disabledAll_NotFade")
	
}

function showcase_sale_benefits_OL(response){
	var obj = response.Tab_SalesBenefits[0];

	if(obj.SalesBenefits.length > 0){
		$("#tbl_benefit_sale_ol tbody>tr").remove();
		
		var j = 0;
		for(i in obj.SalesBenefits){
			var new_row = "";
			var obj_bnf = obj.SalesBenefits[i];
			var is_ref_base_main = obj.SalesBenefits[0].is_ref_base;
			var is_ref_base = obj_bnf.is_ref_base;
			var eff_data = obj_bnf.eff_data;
			var exp_data = obj_bnf.exp_data;
			var serie_no = obj_bnf.serie_no;
			var serie_no_first = obj.SalesBenefits[0].serie_no;
			var year1 = obj_bnf.year1;
			var year2 = obj_bnf.year2;
			var year3 = obj_bnf.year3;
			var year4 = obj_bnf.year4;
			var credit = obj_bnf.credit;
			var overrid = obj_bnf.overrid;
			var advance = obj_bnf.advance;
			var mkt_Inc = obj_bnf.mkt_Inc;
			var saleValume = obj_bnf.saleValume;
			var mkt_Exp = obj_bnf.mkt_Exp;
			
			var level = "";
			var new_row_id = "";
			var enable_date = "";
			var readonly_date = "";
			var checked_isBase = "";
			var disabledAll = "";
			
			
			var num_child = $("#tbl_benefit_sale_ol tbody>tr[data-parent='"+serie_no+"']").length;
			var last_child = "";
			
			if(num_child > 0){
				last_child = $("#tbl_benefit_sale_ol tbody>tr:last[data-parent='"+serie_no+"']").data("id");
				last_child = Number(last_child.replace(serie_no+"_",""))+1;
			}else{
				last_child = 1;
			}
			
			if(serie_no != ""){
				enable_date = "";
				readonly_date = "readonly"
				new_row_id = serie_no;
				disabledAll = "";
				new_row += "<tr id='tr_saleBnf"+new_row_id+"' data-id='"+serie_no+"' data-level='1'>"+
						   "<td class='verticalCenter text-center'>"+
						   		"<input type='checkbox' id='chk_is_ref_base' onclick='chk_is_base();'></td>"+
						   "<td class='verticalCenter text-center'>1</td>"+
						   "<td class='verticalCenter text-center'>" +
						   "<i class='glyphicon glyphicon-plus icon-blue-circle' id='addrow_rd_1' data-id='1' onclick='add_row_saleBnf_OL(this);'> </i>"+
						   "</td>";
			}else{
				j++;
				enable_date = "disabled";
				readonly_date = "";
				new_row_id = serie_no_first+"_"+j;
				disabledAll = "disabledAll";
				new_row += "<tr id='tr_saleBnf"+new_row_id+"' data-id='"+new_row_id+"' data-parent='"+serie_no_first+"' data-level='2' data-group='"+serie_no_first+"'>"+
						"<td class=\'text-center verticalCenter\'  class=\'text-center verticalCenter\'></td>"+
						"<td class=\'text-center verticalCenter\'  class=\'text-center verticalCenter\'></td>"+
						"<td class=\"text-center verticalCenter\">"+
						"<i class=\"glyphicon glyphicon-minus icon-blue-circle icon_active \"  data-id=\'"+new_row_id+"\' id=\"removerow_"+new_row_id+"\" onclick='removeRow(this);'></i>"+
						"</td>";
			}

			
			new_row += "<td class='text-center'><input type='text' class='form-control format_date "+disabledAll+"' id='datefrom_saleBnf"+new_row_id+"' onblur='' placeholder='dd/mm/yyyy' value='"+eff_data+"' maxlength='10' "+enable_date+" "+readonly_date+"></td>"+
				"<td class='text-center'><input type='text' class='form-control format_date' id='dateto_saleBnf"+new_row_id+"' onblur='checkdateTo(this.id);' placeholder='dd/mm/yyyy' value='"+exp_data+"' maxlength='10' readonly></td>"+	
				"<td class=\'text-right verticalCenter\'>";
			 
			 if(is_ref_base_main == true){
				 new_row +=	"<input type='text' class='auto text-right form-control' id='txb_year1_"+new_row_id+"' onblur='checkZero(this);' value='0.00' data-v-min='0.00' data-v-max='999.99' disabled>" +
					"</td>"+
					"<td class=\'text-right verticalCenter\'>"+
					"<input type='text' class='auto text-right form-control' id='txb_Maxyear1_"+new_row_id+"' onblur='checkZero(this);' value='"+year1+"' data-v-min='0.00' data-v-max='999.99'>" +
					"</td>";
			 }else{
				 new_row +=	"<input type='text' class='auto text-right form-control' id='txb_year1_"+new_row_id+"' onblur='checkZero(this);' value='"+year1+"' data-v-min='0.00' data-v-max='999.99'>" +
					"</td>"+
					"<td class=\'text-right verticalCenter\'>"+
					"<input type='text' class='auto text-right form-control' id='txb_Maxyear1_"+new_row_id+"' onblur='checkZero(this);' value='0.00' data-v-min='0.00' data-v-max='999.99' disabled>" +
					"</td>";
			 }	
			 
			 new_row +=	"<td class=\'text-right verticalCenter\'>"+
				"<input type='text' class='auto text-right form-control' id='txb_year2_"+new_row_id+"' onblur='checkZero(this);' value='"+year2+"' data-v-min='0.00' data-v-max='999.99'>" +
				"</td>"+
				"<td class=\'text-right verticalCenter\'>"+
				"<input type='text' class='auto text-right form-control'  id='txb_year3_"+new_row_id+"' onblur='checkZero(this);' value='"+year3+"' data-v-min='0.00' data-v-max='999.99'>" +
				"</td>"+
				"<td class=\'text-right verticalCenter\'>"+
				"<input type='text' class='auto text-right form-control' id='txb_year4_"+new_row_id+"' onblur='checkZero(this);' value='"+year4+"' data-v-min='0.00' data-v-max='999.99'>" +
				"</td>"+
				"<td class=\'text-right verticalCenter\'>"+
				"<input type='text' class='auto text-right form-control' id='txb_credit_"+new_row_id+"' onblur='checkZero(this);' value='"+credit+"' data-v-min='0.00' data-v-max='999.99'>" +
				"</td>"+
				"<td class=\'text-right verticalCenter\'>"+
				"<input type='text' class='auto text-center form-control' id='txb_override_"+new_row_id+"' onblur='checkZero(this);' value='"+overrid+"' data-v-min='0.00' data-v-max='999.99'>" +
				"</td>"+
				"<td class=\'text-right verticalCenter\'>"+
				"<input type='text' class='auto text-center form-control' id='txb_comm_"+new_row_id+"' onblur='checkZero(this);' value='"+advance+"' data-v-min='0.00' data-v-max='999.99'>" +
				"</td>"+
				"<td class=\'text-right verticalCenter\'>"+
				"<input type='text' class='auto text-center form-control' id='txb_incentive_"+new_row_id+"' onblur='checkZero(this);' value='"+mkt_Inc+"' data-v-min='0.00' data-v-max='999.99'>" +
				"</td>"+
				"<td class=\'text-right verticalCenter\'>"+
				"<input type='text' class='auto text-center form-control' id='txb_bonus_"+new_row_id+"' onblur='checkZero(this);' value='"+saleValume+"' data-v-min='0.00' data-v-max='999.99'>" +
				"</td>"+
				"<td class=\'text-right verticalCenter\'>"+
				"<input type='text' class='auto text-center form-control' id='txb_expense_"+new_row_id+"' onblur='checkZero(this);' value='"+mkt_Exp+"' data-v-min='0.00' data-v-max='999.99'>" +
				"</td>"+
				"</tr>";
			 
			 $("#tbl_benefit_sale_ol tbody").append(new_row);

			 if(is_ref_base_main == true){
				$("#chk_is_ref_base").prop("checked", true);
			 }else{
				$("#chk_is_ref_base").prop("checked", false);
			 }
			
		}
		/*jQuery(".format_date").datetimepicker({
			  timepicker:false,
			  format:'d/m/Y',
			  yearOffset:543 
		});*/
		
		var year_end = new Date().getFullYear();
//		year_end = year_end + 9999
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
	
}

function showcase_term_warranty_OL(response){
	var obj = response.Tab_Provision[0];
	
	/*product*/
	var obj_product = obj.product[0]
	$("#datefrom_ol_menu5").val(obj_product.sale_eff_date);
	$("#dateto_ol_menu5").val(obj_product.sale_exp_date);
	$("#system_date_ol").val(obj_product.sys_eff_date);
	
	/*participant*/
	var obj_participant = obj.participant[0];
	if(obj_participant){
		$("#start_age_insure_ol").val(obj_participant.min_issue_age);
		$("#start_age_insure_unit_ol option[value="+obj_participant.min_issue_age_unit+"]").attr("selected","selected");
		$("#end_age_insure_ol").val(obj_participant.max_issue_age);
		$("#end_age_insure_unit_ol option[value="+obj_participant.max_issue_age_unit+"]").attr("selected","selected");
		if(obj_participant.max_insure_year != 0){
			$("#end_age_maxInsure_unit_ol option[value="+obj_participant.max_insure_year_unit+"]").attr("selected","selected");
			$("#max_insure_ol").val(obj_participant.max_insure_year)
		}else{
			$("#end_age_maxInsure_unit_ol option[value="+obj_participant.max_insure_age_unit+"]").attr("selected","selected");
			$("#max_insure_ol").val(obj_participant.max_insure_age)
		}
	}
	
	/*occ*/
	for(i in obj.occ){
		var obj_occ = obj.occ[i];
		$("#tbl_saleDegreeTerm tbody>tr").each(function(){
			if(obj_occ.value == $(this).find("td:nth-child(1) input[type='checkbox']").val()){
				$(this).find("td:nth-child(1) input[type='checkbox']").prop("checked",true);
			}
		});
	}
	
	/*underwrite*/
	var obj_underwrite = obj.underwrite[0]
	$("#minimum_insuranceCost").val(numberWithCommas(parseFloat(obj_underwrite.min_sa_amt).toFixed(2)));
	if(obj_underwrite.unw_rider_sa != ""){
		$("input[type='radio'][name='rd'][value='"+obj_underwrite.unw_rider_sa+"']").prop("checked",true);
	}else{
		$("#spec_rd").prop("checked",false)
		$("input[type='radio'][name='rd']").prop("checked",false)
		$("input[type='radio'][name='rd']").attr("disabled",true)		
	}
	if(obj_underwrite.is_prd_max_policy){
		$("#rd_max_amount_insure_OL1").prop("checked",true)
		chk_max_amount_insure_OL(1);
		if(obj_underwrite.prd_max_policy != 0){
			$("#chk_max_amount_limit_OL1").prop("checked",true)
			if(obj_underwrite.prd_max_policy != null){
				$("#txb_max_amount_limit_OL1").val(obj_underwrite.prd_max_policy)
			}
			chk_max_amount_limit_OL(1,1);
		}
		if(obj_underwrite.prd_max_sa != 0){
			$("#chk_max_amount_limit_OL2").prop("checked",true)
			if(obj_underwrite.prd_max_sa != null){
				$("#txb_max_amount_limit_OL2").val(numberWithCommas(parseFloat(obj_underwrite.prd_max_sa).toFixed(2)))
			}
			chk_max_amount_limit_OL(1,2);
		}
	}
	if(obj_underwrite.is_pax_max_policy){
		$("#rd_single_max_amount_insure_OL1").prop("checked",true)
		chk_single_max_amount_insure_OL(1);
		if(obj_underwrite.pax_max_policy != 0){
			//$("#chk_single_max_amount_limit_OL1").prop("checked",true)
			if(obj_underwrite.pax_max_policy != null){
				$("#txb_single_max_amount_limit_OL1").val(obj_underwrite.pax_max_policy)
				$("#chk_single_max_amount_limit_OL1").prop("checked",true)
			}
			chk_max_amount_limit_OL(2,1);
		}
		if(obj_underwrite.pax_max_sa != 0){
			//$("#chk_single_max_amount_limit_OL2").prop("checked",true)
			if(obj_underwrite.pax_max_sa != null){ 
				$("#txb_single_max_amount_limit_OL2").val(numberWithCommas(parseFloat(obj_underwrite.pax_max_sa).toFixed(2)))
				$("#chk_single_max_amount_limit_OL2").prop("checked",true)
			}
			chk_max_amount_limit_OL(2,2);
		}
	}
	if(obj_underwrite.is_sum_range){
		$("#insure_period1").prop("checked",true)
	}
	if(obj_underwrite.is_med_sum_accum){
		$("#insure_combine1").prop("checked",true)
	}
	if(obj_underwrite.is_substandard){
		$("#special_plan").prop("checked",true)
		checkSpecialPlan();
	}
	/*if(obj_underwrite.is_reins_alert){
		$("#rd_filing_rs_OL1").prop("checked",true)
	}*/
	
	
	/*unw_accum_rule*/
	for(i in obj.unwAccumRule){
		var obj_unwAccumRule = obj.unwAccumRule[i];
		if( obj_unwAccumRule.accum_type == "POLICY"){
			$("#tbl_insuranceIssue_OL tbody>tr").remove();
		}else if( obj_unwAccumRule.accum_type == "SA"){
			$("#tbl_insuranceMax_OL tbody>tr").remove();
		}
	}
	var row = "";
	var row_id = 0;
	var row_id_policy = 1;
	var row_id_sa = 1;
	var main_contract = $("#lookup_contractType").val();
	var lookup_senior = $("#lookup_slSenior").val();
	var lookup_reinsurance_Group = $("#lookup_reinsurance_Group").val();
	var lookup_filing_Channel = $("#lookup_filing_Channel").val();
	var lookup_sale_Channel = $("#lookup_sale_Channel").val();
	for(i in obj.unwAccumRule){
		var obj_unwAccumRule = obj.unwAccumRule[i];
		if( obj_unwAccumRule.accum_type == "POLICY"){	
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
		}else if( obj_unwAccumRule.accum_type == "SA"){	
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
			"<select class='form-control' id='"+sl_contract+""+row_id+"' onchange='ddHeath1_select(this.id);'>"+main_contract+
			"</select>"+
		"</td>"+
		"<td class='verticalCenter text-center'>"+
			"<select class='form-control' id='"+sl_policy+""+row_id+"' onchange='ddHeath2_select(this.id);'>"+
				"<option value='' selected=''>All</option>"+
			"</select>"+
		"</td>"+
		"<td class='verticalCenter text-center'>"+
			"<select class='form-control' id='"+sl_product+""+row_id+"'>"+
				"<option value='' selected=''>All</option>"+
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
		if( obj_unwAccumRule.accum_type == "POLICY"){
			$("#tbl_insuranceIssue_OL tbody").append(row);
			
			var index = row_id_policy - 1;
			
			var tbl = "tbl_insuranceIssue_OL";
			$("#tbl_insuranceIssue_OL tbody>tr").eq(index).find("td:nth-child(2) select>option[value="+obj_unwAccumRule.cov_cat_lv_1+"]").attr("selected",true);
			var id = $("#tbl_insuranceIssue_OL tbody>tr").eq(index).find("td:nth-child(2) select").attr('id');
		
			search_covCat2(id,obj_unwAccumRule,tbl,sl_contract,sl_policy,sl_product);
			$("#tbl_insuranceIssue_OL tbody>tr").eq(index).find("td:nth-child(3) select>option[value="+obj_unwAccumRule.cov_cat_lv_2+"]").attr("selected",true);
			$("#tbl_insuranceIssue_OL tbody>tr").eq(index).find("td:nth-child(4) select>option[value="+obj_unwAccumRule.cov_cat_lv_3+"]").attr("selected",true);
			$("#tbl_insuranceIssue_OL tbody>tr").eq(index).find("td:nth-child(5) select>option[value="+obj_unwAccumRule.is_gio+"]").attr("selected",true);
			$("#tbl_insuranceIssue_OL tbody>tr").eq(index).find("td:nth-child(6) select>option[value='"+obj_unwAccumRule.is_senior+"']").attr("selected",true);
			$("#tbl_insuranceIssue_OL tbody>tr").eq(index).find("td:nth-child(7) select>option[data-id="+obj_unwAccumRule.sale_chan_id+"]").attr("selected",true);
			var sale_chan_id = $("#tbl_insuranceIssue_OL tbody>tr").eq(index).find("td:nth-child(7) select>option[data-id="+obj_unwAccumRule.sale_chan_id+"]").val();
			searchPartnerAccumRule(sale_chan_id,$("#tbl_insuranceIssue_OL tbody>tr").eq(index).find("td:nth-child(8) select"),obj_unwAccumRule.sale_partner_code)
			row_id_policy++;
		}else if( obj_unwAccumRule.accum_type == "SA"){
			$("#tbl_insuranceMax_OL tbody").append(row);
			
			var index = row_id_sa - 1;
			var tbl = "tbl_insuranceMax_OL";
			$("#tbl_insuranceMax_OL tbody>tr").eq(index).find("td:nth-child(2) select>option[value="+obj_unwAccumRule.cov_cat_lv_1+"]").attr("selected",true);
			var id = $("#tbl_insuranceMax_OL tbody>tr").eq(index).find("td:nth-child(2) select").attr('id');
			search_covCat2(id,obj_unwAccumRule,tbl,sl_contract,sl_policy,sl_product)
			
			$("#tbl_insuranceMax_OL tbody>tr").eq(index).find("td:nth-child(3) select>option[value="+obj_unwAccumRule.cov_cat_lv_2+"]").attr("selected",true);
			$("#tbl_insuranceMax_OL tbody>tr").eq(index).find("td:nth-child(4) select>option[value="+obj_unwAccumRule.cov_cat_lv_3+"]").attr("selected",true);
			$("#tbl_insuranceMax_OL tbody>tr").eq(index).find("td:nth-child(5) select>option[value="+obj_unwAccumRule.is_gio+"]").attr("selected",true);
			$("#tbl_insuranceMax_OL tbody>tr").eq(index).find("td:nth-child(6) select>option[value='"+obj_unwAccumRule.is_senior+"']").attr("selected",true);
			$("#tbl_insuranceMax_OL tbody>tr").eq(index).find("td:nth-child(7) select>option[data-id="+obj_unwAccumRule.sale_chan_id+"]").attr("selected",true);
			var sale_chan_id = $("#tbl_insuranceMax_OL tbody>tr").eq(index).find("td:nth-child(7) select>option[data-id="+obj_unwAccumRule.sale_chan_id+"]").val();
			searchPartnerAccumRule(sale_chan_id,$("#tbl_insuranceMax_OL tbody>tr").eq(index).find("td:nth-child(8) select"),obj_unwAccumRule.sale_partner_code)
			row_id_sa++;
		}
			row_id++;
	}
	
	/*unwAccumRuleExclude*/
	var arr_accum_Policy = [];
	var arr_accum_Sa = [];
	for(i in response.Tab_Provision[0].unwAccumRuleExclude){
		var obj = response.Tab_Provision[0].unwAccumRuleExclude[i];
		if( obj.accum_type == "POLICY"){
			arr_accum_Policy.push(obj.exclude_prd_code)
		}else if( obj.accum_type == "SA"){
			arr_accum_Sa.push(obj.exclude_prd_code)
		}
	}
	$("#hd_accumRuleExclude_Policy").val(arr_accum_Policy)
	$("#hd_accumRuleExclude_SA").val(arr_accum_Sa)
	
	
	/*pol_issue_unit*/
	$("#rd_approval_branch_OL1").prop("checked",false)
	$("#rd_approval_branch_OL2").prop("checked",false)
	for(i in obj.unwPolIssueUnit){
		var obj_unwPolIssueUnit = obj.unwPolIssueUnit[i];
		if(obj_unwPolIssueUnit.Pol_issue_unit == $("#rd_approval_branch_OL1").val()){
			$("#rd_approval_branch_OL1").prop("checked",true)
		}else if(obj_unwPolIssueUnit.Pol_issue_unit == $("#rd_approval_branch_OL2").val()){
			$("#rd_approval_branch_OL2").prop("checked",true)
		}
	}
	
	/*unw_substd_type*/
	$("#check_special_plan div>input[type='checkbox']").prop("checked",false);
	for(i in obj.unwSubstdType){
		var obj_unwSubstdType = obj.unwSubstdType[i];
		$("#check_special_plan div>div").each(function(){
			if( obj_unwSubstdType.substd_type == $(this).find('input').val()){
				//$("#rd_increase_premium_CL1").prop("checked",true)
				$(this).find('input').prop("checked",true)
			}
		})
	}
	
	/*การรับแบบเพิ่มเบี้ยพิเศษ/รับแบบเงื่อนไข*/
	if(obj.unwRiderLimit && obj.unwRiderLimit.length > 0){
		$("#unw_maxEM").val((obj.unwRiderLimit[0].Max_em*100).toFixed(2))
	}
	
	$(".autoComma").autoNumeric('init',{vMin: '0.00', vMax: '999999999.99'});
	
	/* Validate */
	validate_levelJob();
	validate_input12_ol();
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
            
            if(type_file == "3"){
            	$("#base64_fileTXT_OL").val(base64)
            }
           
        };
        // Convert data to base64
        fileReader.readAsDataURL(fileToLoad);
    }
  
}

function openFileTextProductRider(file_name,file_ref,tableCol,tb_name,modal_name){

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
    
    	  if(tableCol == 41){
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
    
    		 /* $("#"+tableName+">tbody").append(tableRow);	*/
    		  
    		  $("#download_tb_input_fileSee_modal_pmRate").attr("onclick", "openFile_target('"+file_name+"','"+file_ref+"','txt_download')");
    		  
    		  
    	  }else if(tableCol == 5){
    		  	col1 = textRow[i].substr(0,3);
    		  	col2 = textRow[i].substr(3,2);
    		  	col3 = textRow[i].substr(5,1);
    		  	col4 = textRow[i].substr(6,2);
    		  	col5 = textRow[i].substr(8,6);
    		  	tableRow += "<tr>"+
    		  	"<td class='text-center'>"+col1+"</td>"+
				"<td class='text-center'>"+col2+"</td>"+
				"<td class='text-right'>"+col3+"</td>"+
				"<td class='text-right'>"+col4+"</td>"+
				"<td class='text-right'>"+col5+"</td>"+
				"</tr>";
			/*$("#"+tableName+">tbody").append(tableRow);	*/
    	  }else if(tableCol == 6){
    		   	col1 = textRow[i].substr(0,4);
    		   	col2 = textRow[i].substr(4,1);
    		   	col3 = textRow[i].substr(5,1);
    		   	col4 = textRow[i].substr(6,2);
    		   	col5 = textRow[i].substr(7,1);
    		   	col6 = textRow[i].substr(8,5);
    		   	tableRow += "<tr>"+
    		  	"<td class='text-center'>"+col1+"</td>"+
				"<td class='text-center'>"+col2+"</td>"+
				"<td class='text-right'>"+col3+"</td>"+
				"<td class='text-right'>"+col4+"</td>"+
				"<td class='text-right'>"+col5+"</td>"+
				"<td class='text-right'>"+col6+"</td>"+
				"</tr>";   
    		/*$("#"+tableName+">tbody").append(tableRow);*/
    	  }else if(tableCol == 3){
    		  col1 = textRow[i].substr(0,3);
    		  col2 = textRow[i].substr(3,2);
    		  col3 = textRow[i].substr(5,2);

    		  	tableRow += "<tr>"+
				"<td class='text-center'>"+col1+"</td>"+
				"<td class='text-center'>"+col2+"</td>"+
				"<td class='text-center'>"+col3+"</td>"+
				"</tr>";
    		/*$("#"+tableName+">tbody").append(tableRow);	*/
    		  $("#download_tb_inputExtra_RateView_OL").attr("onclick", "openFile_target('"+file_name+"','"+file_ref+"','txt_download')");
    		  
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
    		   
    		  /* $("#"+tableName+">tbody").append(tableRow);	*/
    		   
    		   $("#download_tb_input_fileSee_modal_NAR").attr("onclick", "openFile_target('"+file_name+"','"+file_ref+"','txt_download')");
     		  
    		  
          }
    	
      }
     
     $("#"+tableName+">tbody").append(tableRow);
      
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
      
}

