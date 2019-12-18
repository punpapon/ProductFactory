<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>PrimaryInsurance</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="include/bower_components/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="include/bower_components/Ionicons/css/ionicons.min.css">
    <link rel="stylesheet" href="include/dist/css/AdminLTE.min.css">
    <link rel="stylesheet" href="include/dist/css/skins/_all-skins.min.css">
    
  	<script src="include/bower_components/jquery/dist/jquery.min.js"></script>

    
  	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/uiAll.css">
<!-- 	<link rel="stylesheet" href="css/AdminLTE.min.css"> -->
  	<link rel="stylesheet" href="include/datetimepicker/build/jquery.datetimepicker.min.css">
  
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
					<div class="box-header" align="center">
						<p class="margin0">
							<B>การค้นหาและดูรายละเอียดแบบประกันหลัก</B>
						</p>
					</div>
					<!-- <div class="box-header" align="center">
						<label>รหัสแบบประกันหลัก/ชื่อ(ไทย)/ชื่อ(อังกฤษ)</label>
						<input type="text" placeholder="Search">
						<input type="button" value="ค้นหา">
						<input type="button" class="btn btn-primary" value="ล้างรายการ">
					</div> -->
					<div class="box-body">		
					<table id= "table_PrimaryInsurance" class="table table-striped table-bordered" style="width:100%">
					  <thead>
					    <tr>
					      <th scope="col">รหัสแบบประกัน</th>
					      <th scope="col">ชื่อ(ไทย)</th>
					      <th scope="col">ชื่อ(อังฤษ)</th>
					    </tr>
					  </thead>
					  <tbody>
					   <!--  <tr>
					      <td scope="row"><u>EL</u></td>
					      <td>ทรัพย์ปันผล {มีเงินปันผล}</td>
					      <th></th>
					    </tr> -->
					  </tbody>
					</table>
					</div>
								<!-- pagination -->
					<div class="col-md-3 col-md-offset-9 text-right" style="float: right;">
					<div class="text-center" style="padding: 2px 0"></div>
						<div class="modal-footer">
							<button type="button" class="btn btn-primary" data-dismiss="modal" id="bt_CreateInsurance">สร้างแบบประกัน</button>
						</div>  
                    </div>
				</div>
			</div>
			<!-- UI-005.1 -->
				<div class="content2" id= "ui-005_1" style="display: none;">
					<div class="panel panel-primary">
						<div  align="center">
							<p class="p-3 mb-2 bg-primary text-white"><B>สร้างแบบประกัน</B></p>
						</div>
						<div class="box-body">		
						<table class="table borderless">
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
					</div>
				</div>
				<!-- แบบประกัน -->
						<div class="content" id= "ui-005_1_CreateBasePlan" style="display: none;">
								<div class="panel panel-primary">
									<div  align="center">
										<!-- <hr> -->
											<p class="p-3 mb-2 bg-primary text-white"><B>แบบประกัน</B></p>
										<!-- <hr> -->
									</div>
								<div class="box-body">		
								<table class="table borderless">
								  <thead>
								    <tr>
								     	 <th >กรุณาเลือกประเภทแบบประกัน</th>
								    </tr>
								  </thead>
								  <tbody >
								    <tr class="col-sm-12">
								      	<td >
								      		<select class="form-control">
								      			<option value="">Indlvldual Life</option>
								      			<option value="">Group Life</option>
								      		</select>
								      	</td>
								      	<td >
								      		<select class="form-control">
								      			<option value="">Ordinary</option>
								      			<option value="">Industrial</option>
								      			<option value="">PA</option>
								      			
								      		</select>
								      	</td>
								      	<td >
								      		<select class="form-control">
								      			<option value="">Simple Endowment</option>
								      			<option value="">Modify Endowment</option>
								      			<option value="">Term</option>
								      			<option value="">Annuity</option>
								      			<option value="">Senior</option>
								      			<option value="">Unit Linked</option>
								      			<option value="">Universal Life</option>
								      			<option value="">Whole Life</option>
								      			<option value="">MRTA</option>
								      		</select>
								      	</td>
								    </tr>
								    <tr>
								    	<td>
								    		 <input type="checkbox" id="ch_ui005-1" checked="checked"> ข้อมูลทั่วไป Basic Information<br>
								    		 <input type="checkbox" id="ch_ui005-2" checked="checked"> การใช้สิทธิ์ตามกรมธรรม์ (Non Forfeiture)<br>
								    		 <input type="checkbox" id="ch_ui005-3" checked="checked" > การคำนวณเบี้ยประกัน<br>
								    		 <input type="checkbox" id="ch_ui005-4" checked="checked"> ตารางมูลค่ากรมธรรม์<br>
								    		 <input type="checkbox" id="ch_ui005-5" checked="checked" > ผลประโยชน์/ความคุ้มครอง<br>
								    	</td> 
								    </tr>
								  </tbody>
								</table>
								<!-- pagination -->
									<div class="col-md-3 col-md-offset-9 text-right" style="float: right;">
										  <div class="modal-footer" style="border: 0">
										  	<button type="button" class="btn btn-primary" data-dismiss="modal" id="ui_005_1_Confirm">ตกลง</button>
											<button type="button" class="btn btn-primary" data-dismiss="modal" id="ui_005_1_Cancel">ยกเลิก</button>
										</div>  
			                        </div> 
								</div>
							</div>	
						</div>
						<!--********************************************-->
						<div class="content" id= "ui-005_1_CloneBasePlan"  style="display: none;">
							<div class="panel panel-primary">
									<div  align="center">
										<!-- <hr> -->
											<p class="p-3 mb-2 bg-primary text-white"><B>สร้างแบบประกันหลักใหม่จากแบบประกันเดิม Clone Existing Base Plan</B></p>
										<!-- <hr> -->
									</div>
							<div class="box-header" align="center">
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
							      <th scope="col"></th>
							    </tr>
							  </thead>
							  <tbody>
							    <tr>
							      <td scope="row">WG</td>
							      <td>คุ้มธนกิจ 90/20</td>
							      <td>KHUM THANAKIT 90/20</td>
							      <td><button class="btn btn-primary" 
							      		id="bt_Clone_0">Clone
							      		</button>
							      </td>
							    </tr>
							    <tr>
							      <td scope="row">xx</td>
							      <td>xxxxx</td>
							      <td>Example base plan</td>
							      <td><button class="btn btn-primary" 
							      		id="bt_Clone_1">Clone
							      	</button>
							      </td>
							    </tr>
							     <tr>
							      <td scope="row"></td>
							      <td></td>
							      <td></td>
							      <td></td>
							    </tr>
							  </tbody>
							</table>
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
										<button type="button" class="btn btn-primary" data-dismiss="modal" id="bt_CreateInsurance">ยกเลิก</button>
									</div>  
		                        </div>
							</div>
						</div>
					</div>
					<!--***END***-->
					<!-- MODAL clone -->
							<div id="clone_Modal" class="modal fade" role="dialog">
								  <div class="modal-dialog">
								    <!-- Modal content-->
								    <div class="panel panel-primary">
								      <div class="panel-heading text-left">
										<p class="margin0">ยืนยันการ Clone</p>
									  </div>
								      <div class="modal-body" align="center">
								        <p>ต้องการ Clone แบบประกัน WG ใช่หรือไม่?</p>
								        <button type="button" class="btn btn-primary" id="bt_Clone" data-dismiss="modal">ยืนยัน</button>
								      	<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
								      </div>
								    </div>
								  </div>
							</div>
				<!--***Menu***-->
					<div class="content" id= "ui005_Menu" style="display: none;">
					<%@include file="primary_insurance_Menu.jsp" %>
					</div>
					<!--**********************-->
					
		</div>
	</div>
	
    <script src="include/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="include/bower_components/jquery-slimscroll/jquery.slimscroll.min.js"></script>
    <script src="include/bower_components/fastclick/lib/fastclick.js"></script>
    <script src="include/dist/js/adminlte.min.js"></script>
    <script src="include/dist/js/demo.js"></script>
    <script src="include/plugins/datatables/jquery.dataTables.min.js"></script>
	<script src="include/datetimepicker/build/jquery.datetimepicker.full.js"></script>
	
	<!--    Data Talbe  -->
	<link rel="stylesheet" href="include/bower_components/datatables.net-bs/css/dataTables.bootstrap.min.css">
	<script src="include/plugins/datatables/jquery.dataTables.min.js"></script>
	<script src="include/plugins/datatables/dataTables.bootstrap.js"></script>
    <!-- New JS -->
     <script src="js/autoNumeric.js"></script>
	<script src="js/primary_insurance.js"  charset="utf-8"></script>
</body>
</html>