function login(){ 
  $("#form_login").submit(function(event){
	$("#form_login").unbind();
    var username = $("#lg_username").val();
	var password = $("#lg_password").val();
	if(username != "" && password != ""){	
		$('#form_login').attr('action','check_login.jsp');
		$('#form_login').submit();
	}else{
		event.preventDefault();
		message = "กรุณาระบุชื่อบัญชีผู้ใช้และรหัสผ่าน";
		alertError(message);
	}		
  });
}

/*function login(){ 
  $("#form_login").submit(function(event){
	$("#form_login").unbind();
    var username = $("#lg_username").val();
	var password = $("#lg_password").val();

	datajson = {				        	
			username 	: username,
			password 	: password 
	}	
	
	if(username != "" && password != ""){	
		console.log(datajson);
		$.ajax({
		    type: "POST",
		    url : "Login_Servlet",
		    data: datajson,       
		    success : function(response) {					    	
		    					    	
		    },
		    error : function(response) {	
		    	console.log("save file error");
		    }
		});	
	}else{
		event.preventDefault();
		message = "กรุณาระบุชื่อบัญชีผู้ใช้และรหัสผ่าน";
		alertError(message);
	}		
  });
}*/

//function login(){
//	var username = $("#lg_username").val();
//	var password = $("#lg_password").val();
//	datajson = {	
//			method 		: "Login",
//			username 	: username,
//			password 	: password 
//	}	
//	debugger;
//	if(username != "" && password != ""){			
//		$.ajax({
//		    type: "POST",
//		    url : "Login_Servlet",
//		    data: datajson,       
//		    success : function(response) {
//		    	alert ("11");
//		    },
//		    error : function(response) {	
//		    	alert (response.response.length);
//		    }
//		});	
//		
//	}else{
//		event.preventDefault();
//		message = "กรุณาระบุชื่อบัญชีผู้ใช้และรหัสผ่าน";
//		alertError(message);
//	}		
//}

function page_login(){
	window.location.href='login.jsp';
}

function alertError(message)
{
    $('#txt_alert_error').text(message);
    $('#modal_warning').modal();
}