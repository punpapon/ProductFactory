<% if(session.getAttribute("loginok") == "" 
		|| session.getAttribute("loginok") != "ok"){ 
		out.print("<script>alert('กรุณาล็อกอิน'); window.location=\"login.jsp\";</script>");
}else{ %>
<%@ page pageEncoding="UTF-8"%> 

<a class="logo" style="height:70px;" href="factory_Base_Plan_Main.jsp"> 
	<span class="logo-mini"><b>F</b></span> 
	<span class="navbar-brand"><b><i class="fa fa-th-large" aria-hidden="true"></i> Product Factory</b></span>
</a>

<nav class="navbar navbar-static-top">
	<a href="#" class="sidebar-toggle" data-toggle="push-menu"	role="button"></a> 
		<div class="navbar-custom-menu">
			<input type="hidden" id="empID" 			value="<%=session.getAttribute("userID")%>">
			<input type="hidden" id="groupName" 		value="">
			<input type="hidden" id="departmentID" 		value="<%=session.getAttribute("departmentID")%>">
			<input type="hidden" id="userPermission" 	value="">
			<input type="hidden" id="empNameHide" 		value="<%=session.getAttribute("empName")%>">
			<input type="hidden" id="departmentHide" 	value="<%=session.getAttribute("department")%>">
			<ul class="nav navbar-nav">
				 <li class="dropdown notifications-menu">			 	
					<a href="#" class="dropdown-toggle" data-toggle="dropdown">
						<span class="hidden-xs"><i class="fa fa fa-user-circle-o" aria-hidden="true"></i>&nbsp; ชื่อผู้ใช้งาน : <strong><%=session.getAttribute("empName")%></strong></span>
						<br><span class="hidden-xs"><i class="fa fa-address-card-o" aria-hidden="true"></i>&nbsp; แผนก : <strong><%=session.getAttribute("department")%></strong></span>
					</a>
					<ul class="dropdown-menu">
						<li>
							<!-- inner menu: contains the actual data -->
							<ul class="menu">
								<li><a href="logout.jsp"> <i class="fa fa-sign-out text-aqua"></i>ออกจากระบบ</a></li>
	
							</ul>
						</li>
					</ul>
				</li> 
				<!-- end dropdown notifications-menu -->
	
			</ul>
		</div>
	<!-- end navbar-custom-menu -->

</nav>
<% } %>