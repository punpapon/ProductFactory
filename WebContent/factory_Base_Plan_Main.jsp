<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>
   <title>Factory</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    
    <link rel="stylesheet" href="include/bower_components/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="include/bower_components/Ionicons/css/ionicons.min.css">
    <link rel="stylesheet" href="include/dist/css/AdminLTE.min.css">
    <link rel="stylesheet" href="include/dist/css/skins/_all-skins.min.css">
    <link rel="stylesheet" href="css/uiAll.css">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <script src="js/login.js"></script>
    
  </head>
  <body class="hold-transition skin-blue sidebar-mini">
	    <div class="wrapper">
	      	<!-- Main Header -->
			<header class="main-header"> 			
				<%@include file="main_header.jsp" %>
			</header>
	
	      	<!-- Load Side Menu -->
	      	<aside class="main-sidebar">
	      		<section class="sidebar"> <%@include file="sideBarMenu.jsp" %></section>
			</aside>
	
	      <div class="content-wrapper">
	        <section class="content-header">
	          <h1></h1>
	        </section>
	      </div>
	      <footer class="main-footer">
	      </footer>
    	</div>
    	
    <%@include file="modal_warning.jsp"%>
    	
    <script src="include/bower_components/jquery/dist/jquery.min.js"></script>
    <script src="include/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="include/bower_components/jquery-slimscroll/jquery.slimscroll.min.js"></script>
    <script src="include/bower_components/fastclick/lib/fastclick.js"></script>
    <script src="include/dist/js/adminlte.min.js"></script>
    <script src="include/dist/js/demo.js"></script>
    <script src="js/userPermission.js"></script>
  </body>
</html>
