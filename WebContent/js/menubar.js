$(document).ready( function() {
	  /*Date Picker*/
	  $(function(){
		  	/* ----------OL 1------------*/
			    // กรณีใช้แบบ input
			    $("#appStart_date").datetimepicker({
			        timepicker:false,
			        format:'d/m/Y',          
			        lang:'en',  
			        onSelectDate:function(dp,$input){
			            var yearT=new Date(dp).getFullYear()-0;  
			            var yearEN=yearT;
			            var fulldate=$input.val();
			            var fulldateEN=fulldate.replace(yearT,yearEN);
						
						
						var dateto  = $('#appTo_date').val();
							var dateto_split		= dateto.split("/");
							var dateto_day			= dateto_split[0];
							var dateto_month		= dateto_split[1];
							var dateto_year			= dateto_split[2];
							
							var date_to	= dateto_day + 	dateto_month + dateto_year ;
							
							var appStart_date		= 	fulldateEN; 
							var appStart_split		= appStart_date.split("/");
							var appStart_day		= appStart_split[0];
							var appStart_month		= appStart_split[1];
							var appStart_year		= appStart_split[2];
							var date_start = appStart_day + appStart_month + appStart_year ;
							
							
							if (date_to > date_start){
								 $input.val(fulldateEN);
								$("#validate_input4").hide();
							}else{
								 alert ("กรุณาเลือกวันที่ให้ถูกต้อง");
								 $input.val("");
								$("#validate_input4").show();
							}
			        },
			    });   
			 
				 $("#appTo_date").datetimepicker({
					        timepicker:false,
					        format:'d/m/Y',          
					        lang:'en',  
					        onSelectDate:function(dp,$input){
					            var yearT=new Date(dp).getFullYear()-0;  
					            var yearEN=yearT;
					            var fulldate=$input.val();
					            var fulldateEN=fulldate.replace(yearT,yearEN);
					
								var appStart_date 	= $('#appStart_date').val();
								var appStart_split			= appStart_date.split("/");
								var appStart_day			= appStart_split[0];
								var appStart_month			= appStart_split[1];
								var appStart_year			= appStart_split[2];
								var date_start = appStart_day + appStart_month + appStart_year ;
								
								var dateto =  fulldateEN;
								var dateto_split		= dateto.split("/");
								var dateto_day			= dateto_split[0];
								var dateto_month		= dateto_split[1];
								var dateto_year			= dateto_split[2];
								
								var date_to	= dateto_day + 	dateto_month + dateto_year ;
								
								if (date_start < date_to){
									 $input.val(fulldateEN);
									$("#validate_input5").hide();
								}else{
									 alert ("กรุณาเลือกวันที่ให้ถูกต้อง");
									 $input.val("");
									$("#validate_input5").show();

								}
					           
					        },
				});   
				/*----------end-----------*/
				
				//set calendar
				/*Coverage*/
				$.datetimepicker.setLocale('th');
				var year_end = new Date().getFullYear();
				year_end = 9999 - 543;
				
				console.log("end>> "+year_end);
				
				jQuery('#appStart_date_cl,#appTo_date_cl,#appStart_date_ol,#appTo_date_ol').datetimepicker({
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
				
				jQuery('#appStart_date_cl,#appTo_date_cl,#appStart_date_ol,#appTo_date_ol').on("mouseenter mouseleave", function(e){
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
				
				/*Product Rider*/
				jQuery('#datefrom_ol_menu5,#dateto_ol_menu5,#tbl_benefit_sale_ol tbody>tr>td:nth-child(4) input, #tbl_benefit_sale_ol tbody>tr>td:nth-child(5) input').datetimepicker({
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
					
					jQuery('#datefrom_ol_menu5,#dateto_ol_menu5,#tbl_benefit_sale_ol tbody>tr>td:nth-child(4) input, #tbl_benefit_sale_ol tbody>tr>td:nth-child(5) input').on("mouseenter mouseleave", function(e){
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
					
				
					/*Product*/
					jQuery('#menu_term1_datefrom_cl,#menu_term1_dateto_cl,#system_date_cl').datetimepicker({
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
						
					jQuery('#menu_term1_datefrom_cl,#menu_term1_dateto_cl,#system_date_cl').on("mouseenter mouseleave", function(e){
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
					
					/*Product OL*/
					jQuery('.datepicker_ol,#menu_term1_datefrom_ol, #menu_term1_dateto_ol').datetimepicker({
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
						
					jQuery('.datepicker_ol,#menu_term1_datefrom_ol, #menu_term1_dateto_ol').on("mouseenter mouseleave", function(e){
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
					
					/*ข้อกำหนด*/
					jQuery('#system_date_ol').datetimepicker({
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
						
					jQuery('#system_date_ol').on("mouseenter mouseleave", function(e){
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
					
				/*----------end-----------*/          
			});
 });

/*--------------Benz---------------*/	
// กรอกข้อความได้เฉพาะภาษาไทย
function isThaichar(str,obj){
    var orgi_text="ๅภถุึคตจขชๆไำพะัีรนยบลฃฟหกดเ้่าสวงผปแอิืทมใฝ๑๒๓๔ู฿๕๖๗๘๙๐ฎฑธํ๊ณฯญฐฅฤฆฏโฌ็๋ษศซฉฮฺ์ฒฬฦ";
    var str_length=str.length;
    var str_length_end=str_length-1;
    var isThai=true;
    var Char_At="";
    for(i=0;i<str_length;i++){
        Char_At=str.charAt(i);
        if(orgi_text.indexOf(Char_At)==-1){
            isThai=false;
        }   
    }
    if(str_length>=1){
        if(isThai==false){
            obj.value=str.substr(0,str_length_end);
        }
    }
    return isThai; // ถ้าเป็น true แสดงว่าเป็นภาษาไทยทั้งหมด
}
/*----------------------------------------------------------*/
function isEnglishchar(str,obj){
    var orgi_text="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var str_length=str.length;
    var str_length_end=str_length-1;
    var isEng=true;
    var Char_At="";
    for(i=0;i<str_length;i++){
        Char_At=str.charAt(i);
        if(orgi_text.indexOf(Char_At)==-1){
        	isEng=false;
        }   
    }
    if(str_length>=1){
        if(isEng==false){
            obj.value=str.substr(0,str_length_end);
        }
    }
    return isEng; // ถ้าเป็น true แสดงว่าเป็นภาษาอังกฤษทั้งหมด
}
/*----------------------------------------------------------*/
function activeMenu(){
	var path = window.location.pathname;
    path = path.replace(/\/$/, "");
    path = decodeURIComponent(path);
    
    var filename = path.substring(path.lastIndexOf('/')+1);

    $("#menuBar li>a").each(function () {
        var href = $(this).attr('href');        
        var href_filename = href.split("?");

        if (filename === href_filename[0]) {
            $(this).closest('li').addClass('active');
        }
    });
	
}
function isMenuActive(link) 
{ 
	var loc = window.location;
	var re = new RegExp(link);	
	return re.test(loc) ;	
}
