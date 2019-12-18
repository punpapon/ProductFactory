<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="include/bower_components/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="include/bower_components/Ionicons/css/ionicons.min.css">
    <link rel="stylesheet" href="include/dist/css/AdminLTE.min.css">
    <link rel="stylesheet" href="include/dist/css/skins/_all-skins.min.css">
    <link rel="stylesheet" href="css/bootstrap.min.css">
</head>
<body class="hold-transition skin-blue sidebar-mini" onload="activeMenu();">
<div class="wrapper">
    
      	<!-- Main Header -->
		<header class="main-header"> 			
			<%@include file="main_header.jsp" %>
		</header>

      	<!-- Load Side Menu -->
      	<aside class="main-sidebar">
      		<section class="sidebar"> 
      			<%@include file="sideBarMenu.jsp" %>
      		</section>
		</aside>
		     <div class="content-wrapper">
		     <div class="content" id= "ui-005" >
		     	<div class="panel panel-primary">
						<div class="box-header with-border" align="center">
						<p class="margin0"><B>การค้นหาและดูรายละเอียดแบบประกันกลัก</B></p>
					</div>
					<div class="box-header with-border" align="center">
						<label>รหัสแบบประกันหลัก/ชื่อ(ไทย)/ชื่อ(อังกฤษ)</label>
						<input type="text" placeholder="Search">
						<input type="button" value="ค้นหา">
						<input type="button" class="btn btn-primary" value="ล้างรายการ">
					</div>
					<div class="box-body">		
					<table class="table table-hover">
					  <thead>
					    <tr>
					      <th scope="col">รหัสแบบประกัน</th>
					      <th scope="col">ชื่อ(ไทย)</th>
					      <th scope="col">ชื่อ(อังฤษ)</th>
					    </tr>
					  </thead>
					  <tbody>
					    <tr>
					      <td scope="row"><u>EL</u></td>
					      <td>ทรัพย์ปันผล {มีเงินปันผล}</td>
					      <th></th>
					    </tr>
					  </tbody>
					</table>
					</div>
					<!-- pagination -->
					<div class="col-md-3 col-md-offset-9 text-right" style="float: right;">
                           	 <ul class="pagination">
							    <li class="page-item">
							      <a class="page-link" href="#" aria-label="Previous">
							        <span aria-hidden="true">&laquo;</span>
							        <span class="sr-only">Previous</span>
							      </a>
							    </li>
							    <li class="page-item"><a class="page-link" href="#">1</a></li>
							    <li class="page-item"><a class="page-link" href="#">2</a></li>
							    <li class="page-item"><a class="page-link" href="#">3</a></li>
							    <li class="page-item">
							      <a class="page-link" href="#" aria-label="Next">
							        <span aria-hidden="true">&raquo;</span>
							        <span class="sr-only">Next</span>
							      </a>
							    </li>
							  </ul>
							  <div class="modal-footer">
								<button type="button" class="btn btn-primary" data-dismiss="modal" id="bt_CreateInsurance">สร้างแบบประกัน</button>
							</div>  
                        </div>
				</div>
			</div>
			<!-- UI-005.1 -->
				<div class="content" id= "ui-005_1" style="display: none;">
							<div class="panel panel-primary">
							<div  align="center">
									<p class="p-3 mb-2 bg-primary text-white"><B>สร้างแบบประกัน</B></p>
							</div>
						<div class="box-body">		
						<table class="table">
						  <thead>
						    <tr>
						      <th >สร้างแบบประกันหลัก (Create Base Plan)</th>
						    </tr>
						  </thead>
						  <tbody>
						    <tr>
						      	<td><input type="radio" id = "rd_CreateBasePlan" name="basePlan"> สร้างแบบประกันหลักใหม่ (Create Base Plan)
						     	</td>
						    </tr>
						    <tr>	
						     	<td><input type="radio" id = "rd_CloneBasePlan" name="basePlan"> สร้างแบบประกันหลักใหม่จากแบบประกันหลักเดิม (Clone Existing Base Plan)
						     	</td>
						   </tr>
						  </tbody>
						</table>
						</div>
						<!-- pagination -->
						<!-- <div class="col-md-3 col-md-offset-9 text-right" style="float: right;">
								  <div class="modal-footer">
									<button type="button" class="btn btn-primary" data-dismiss="modal" id="bt_CreateInsurance">สร้างแบบประกัน</button>
								</div>  
	                        </div> -->
					</div>
					
					<!-- แบบประกัน -->
						<div class="content" id= "ui-005_1_CreateBasePlan" style="display: none;">
								<div class="panel panel-striped">
									<div  align="center">
										<!-- <hr> -->
											<p class="p-3 mb-2 bg-primary text-white"><B>แบบประกัน</B></p>
										<!-- <hr> -->
									</div>
								<div class="box-body">		
								<table class="table">
								  <thead>
								    <tr>
								     	 <th >กรุณาเลือกประเภทแบบประกัน</th>
								    </tr>
								  </thead>
								  <tbody >
								    <tr>
								      	<td>
								      		<select>
								      			<option value="">Indlvldual Life</option>
								      		</select>
								      		<select>
								      			<option value="">Ordinary</option>
								      		</select>
								      		<select>
								      			<option value="">Simpal Endowment</option>
								      		</select>
								      	</td>
								    </tr>
								    <tr>
								    	<td>
								    		 <input type="checkbox" name="" value="" checked="checked"> ข้อมูลทั่วไป Basic Information<br>
								    		 <input type="checkbox" name="" value="" checked="checked"> การคำนวณเบี้ยประกัน<br>
								    		 <input type="checkbox" name="" value="" checked="checked"> ตารางมูลค่ากรมธรรม์<br>
								    		 <input type="checkbox" name="" value="" checked="checked"> การใช้สิทธิ์ตามกรมธรรม์ (Non Forfeiture)<br>
								    		 <input type="checkbox" name="" value="" checked="checked"> ผลประโยชน์/ความคุ้มครอง<br>
								    	</td> 
								    </tr>
								  </tbody>
								</table>
								</div>
								<!-- pagination -->
									<div class="col-md-3 col-md-offset-9 text-right" style="float: right;">
										  <div class="modal-footer">
										  	<button type="button" class="btn btn-primary" data-dismiss="modal" id="ui_005_1_Confirm">ตกลง</button>
											<button type="button" class="btn btn-primary" data-dismiss="modal" id="ui_005_1_Cancel">ยกเลิก</button>
										</div>  
			                        </div> 
							</div>	
						</div>
					<!--***END***-->
				</div>
				<!--***Stary***-->
					<div class="content" id= "" style="display: none;">
						<div class="panel-body">
							<ul class="nav nav-tabs">
								<li class="active"><a data-toggle="tab" href="#admin">ผู้ดูแลระบบ</a></li>
								<li><a data-toggle="tab" href="#actuary">ผู้ดูแล Actuary</a></li>
								<li><a data-toggle="tab" href="#underwrite">ผู้ใช้งาน Underwrite</a></li>
								<li><a data-toggle="tab" href="#claim">ผู้ใช้งาน Claim</a></li>
								<li><a data-toggle="tab" href="#pos">ผู้ใช้งาน POS</a></li>
							</ul>
						</div>
					</div>
					<!--**********************-->
		</div>
	</div>
<script src="include/bower_components/jquery/dist/jquery.min.js"></script>
    <script src="include/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="include/bower_components/jquery-slimscroll/jquery.slimscroll.min.js"></script>
    <script src="include/bower_components/fastclick/lib/fastclick.js"></script>
    <script src="include/dist/js/adminlte.min.js"></script>
    <script src="include/dist/js/demo.js"></script>
    <script src="include/plugins/datatables/jquery.dataTables.min.js"></script>
    <!-- New JS -->
	<script src="js/base_plan_Main_and_OL.js"  charset="utf-8"></script>
	<script src="js/base_plan_CL.js"  charset="utf-8"></script>
</body>
</html>