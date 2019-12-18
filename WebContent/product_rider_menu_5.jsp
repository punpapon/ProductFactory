<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>ข้อกำหนดการรับประกัน</title>

</head>
<body>
		<!-- <form class="form-horizontal"> -->
		<div class="row box-body" id="warranty_term_CL">
			<div class="panel panel-primary">
				<div class="panel-heading text-left">
					<p class="margin0 text-center">
						<b>ข้อกำหนดการรับประกัน</b>
					</p>
				</div>
				<div style="width:95%; margin:30px auto;"  id="warranty_term_tab_level1_CL">
					<ul class="nav nav-tabs">
					    <li class="active"><a data-toggle="tab" href="#menu_term5">ข้อกำหนด</a></li>
					    <li><a data-toggle="tab" href="#menu_term6">Policy Wording</a></li>					    
					</ul>
					
					
					<div class="tab-content">
					    
					    <div id="menu_term5" class="tab-pane fade in active">
					     <%@include file="product_rider_menu_5_term.jsp" %>					      		      
					    </div>
					    
					    <div id="menu_term6" class="tab-pane fade">
					      <%@include file="product_rider_menu_5_policy.jsp" %>
					    </div>	
					    				    
					  </div>
					</div>
				</div>						
			</div>	
			
	<!-- </form> -->

</body>
</html>