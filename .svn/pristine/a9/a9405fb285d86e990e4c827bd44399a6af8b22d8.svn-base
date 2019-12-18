<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Rider Plan</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="include/bower_components/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="include/bower_components/Ionicons/css/ionicons.min.css">
    <link rel="stylesheet" href="include/dist/css/AdminLTE.min.css">
    <link rel="stylesheet" href="include/dist/css/skins/_all-skins.min.css">
    
  	<script src="include/bower_components/jquery/dist/jquery.min.js"></script>
  	<!-- <script src="include/bower_components/jquery/dist/jquery-3.3.1.js"></script> -->
    
  	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/uiAll.css">
<!-- 	<link rel="stylesheet" href="css/AdminLTE.min.css"> -->
  	<link rel="stylesheet" href="include/datetimepicker/build/jquery.datetimepicker.min.css">
  	<script src="js/menubar.js"></script>
  
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
		     	<div id="preloader">
					<div id="status">&nbsp;</div>
				</div>
				
		     	<div class="content" id= "ui-006" >
		     	<div class="panel panel-primary">
					<div class="box-header" align="center">
						<p class="margin0">
							<B>การค้นหาและดูรายละเอียดความคุ้มครองสัญญาเพิ่มเติม</B>
						</p>
					</div>
					<div class="box-body">		
					<table id= "table_PrimaryInsurance" class="table table-striped table-bordered text-center" style="width:100%">
					  <thead>
					    <tr>
					      <th scope="col">รหัสความคุ้มครองสัญญาเพิ่มเติม</th>
					      <th scope="col">ชื่อ(ไทย)</th>
					      <th scope="col">ชื่อ(อังกฤษ)</th>
					      <th scope="col">สถานะ</th>
					    </tr>
					  </thead>
					  <tbody>					   
					  </tbody>
					</table>
					</div>
					<!-- pagination -->
					<div class="col-md-4 col-md-offset-9 text-right" style="float: right;">
					<div class="text-center" style="padding: 2px 0"></div>
						<div class="modal-footer">
							<button type="button" class="btn btn-primary" data-dismiss="modal" id="bt_CreateInsurance">สร้างความคุ้มครองสัญญาเพิ่มเติม</button>
						</div>  
                    </div>
				</div>
			</div>
			<!-- ui-006.1 -->
				<div class="content2" id= "ui-006_1" style="display: none;">
					<div class="panel panel-primary">
						<div  align="center">
							<p class="p-3 mb-2 bg-primary text-white"><B>สร้างความคุ้มครองสัญญาเพิ่มเติม</B></p>
						</div>
						<div class="box-body">		
						<table class="table borderless">
						  <!-- <thead>
						    <tr>
						      <th>สร้างสัญญาเพิ่มเติม</th>
						    </tr>
						  </thead> -->
						  <tbody>
						    <tr>
						      	<td><input type="radio" id = "rd_CreateRiderPlan" name="RiderPlan"><label for="rd_CreateRiderPlan" class="label_input"> สร้างความคุ้มครองสัญญาเพิ่มเติมใหม่ (Create New Rider)</label>
						     	</td>
						    </tr>
						    <tr>	
						     	<td><input type="radio" id = "rd_CloneRiderPlan" name="RiderPlan"><label for="rd_CloneRiderPlan" class="label_input"> สร้างความคุ้มครองสัญญาเพิ่มเติม จากความคุ้มครองสัญญาเพิ่มเติมที่มีในระบบ (Clone Existing Rider)</label>
						     	</td>
						   </tr>
						  </tbody>
						</table>
						</div>
					</div>
				</div>
				<!-- แบบประกัน -->
						<div class="content" id= "ui-006_1_CreateRiderPlan" style="display: none;">
								<div class="panel panel-primary">
									<div  align="center">
										<!-- <hr> -->
											<p class="p-3 mb-2 bg-primary text-white"><B>ความคุ้มครองสัญญาเพิ่มเติม</B></p>
										<!-- <hr> -->
									</div>
								<div class="box-body">		
								<table class="table borderless">
								  <thead>
								    <tr>
								     	 <th >กรุณาเลือกประเภทความคุ้มครองสัญญาเพิ่มเติม</th>
								    </tr>
								  </thead>
								  <tbody >
								    <tr class="col-sm-12">
								      	<td >
								      		<select class="form-control" id="main_contract" onchange="main_contract();">
								      			<option value="">--- กรุณาเลือก ---</option>
								      		</select>
								      	</td>
								      	<td >
								      		<select class="form-control" id="main_contract2" onchange="main_contract2();">
								      			<option value="">--- กรุณาเลือก ---</option>
								      		</select>
								      	</td>
								      	<td >
								      		<select class="form-control" id="main_contract3">
								      			<option value="">--- กรุณาเลือก ---</option>
								      		</select>
								      	</td>
								      	<td>
								      		<label style="margin-top: 5px" id="PD_subgroup_OIC">รหัส Product Sub Group (OIC)<p></p></label>
								      	</td>
								    </tr>
								    <tr>
								    	<td>
								    		 <input type="checkbox" id="ch_ui006-1" checked="checked" readonly="readonly"> ข้อมูลทั่วไป Basic Information<br>
								    		 <input type="checkbox" id="ch_ui006-7" checked="checked"><label for="ch_ui006-7" class="label_input"> Policy Wording</label><br>
								    		 <input type="checkbox" id="ch_ui006-8" checked="checked"><label for="ch_ui006-8" class="label_input"> ผู้ได้รับความคุ้มครอง</label><br>
								    		 <!-- <input type="checkbox" id="ch_ui006-2" checked="checked"> การใช้สิทธิ์ตามกรมธรรม์ (Non Forfeiture)<br> -->
								    		 <input type="checkbox" id="ch_ui006-3" checked="checked"><label for="ch_ui006-3" class="label_input"> การคำนวณเบี้ยประกัน</label><br>
								    		 <input type="checkbox" id="ch_ui006-4" checked="checked"><label for="ch_ui006-4" class="label_input"> ตารางมูลค่ากรมธรรม์</label><br>
								    		 <input type="checkbox" id="ch_ui006-5" checked="checked"><label for="ch_ui006-5" class="label_input"> ผลประโยชน์/ความคุ้มครอง</label><br>
								    		 <input type="checkbox" id="ch_ui006-9" checked="checked"><label for="ch_ui006-9" class="label_input"> บันทึกสลักหลัง</label><br>
								    	</td> 
								    </tr>
								  </tbody>
								</table>
								<!-- pagination -->
									<div class="col-md-3 col-md-offset-9 text-right" style="float: right;">
										  <div class="modal-footer" style="border: 0">
										  	<button type="button" class="btn btn-primary" data-dismiss="modal" id="ui_006_1_Confirm">ตกลง</button>
											<button type="button" class="btn btn-primary" data-dismiss="modal" id="ui_006_1_Cancel">ยกเลิก</button>
										</div>  
			                        </div> 
								</div>
							</div>	
						</div>
						<!--********************************************-->
						<div class="content" id= "ui-006_1_CloneRiderPlan"  style="display: none;">
							<div class="panel panel-primary">
									<div  align="center">
										<!-- <hr> -->
											<p class="p-3 mb-2 bg-primary text-white"><B>สร้างความคุ้มครองสัญญาหลักใหม่จากความคุ้มครองสัญญาหลักเดิม Clone Existing Base Plan</B></p>
										<!-- <hr> -->
									</div>
							<!-- <div class="box-header" align="center">
								<label>รหัสความคุ้มครองสัญญาหลัก/ชื่อ(ไทย)/ชื่อ(อังกฤษ)</label>
								<input type="text" placeholder="Search">
								<input type="button" value="ค้นหา">
								<input type="button" class="btn btn-primary" value="ล้างรายการ">
							</div> -->
							<div class="box-body">		
							<table id= "table_PrimaryInsurance_Clone" class="table table-striped table-bordered text-center" style="width:100%">
					
							  <thead>
							    <tr>
							      <th scope="col">รหัสความคุ้มครองสัญญาหลัก</th>
							      <th scope="col">ชื่อ(ไทย)</th>
							      <th scope="col">ชื่อ(อังกฤษ)</th>
							      <th scope="col">Clone</th>
							    </tr>
							  </thead>
							  
							</table>
								<!-- pagination -->
							
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
								        <p>ต้องการ Clone ความคุ้มครองสัญญาเพิ่มเติม ใช่หรือไม่?</p>
								        <button type="button" class="btn btn-primary" id="bt_Clone" data-dismiss="modal">ยืนยัน</button>
								      	<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
								      </div>
								    </div>
								  </div>
							</div>
				<!--***Menu***-->
					<div class="content" id= "ui006_Menu" style="display: none;">
						<%@include file="rider_plan_Menu.jsp" %>
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
	
	<!-- Data Table  -->
	<link rel="stylesheet" href="include/bower_components/datatables.net-bs/css/dataTables.bootstrap.min.css">
	<script src="include/plugins/datatables/jquery.dataTables.min.js"></script>
	<script src="include/plugins/datatables/dataTables.bootstrap.js"></script>
    <!-- New JS -->
     <script src="js/autoNumeric.js"></script>
	<script src="js/rider_plan_Main_and_OL.js"  charset="utf-8"></script>
	<script src="js/rider_plan_CL.js"  charset="utf-8"></script>
	<script src="js/rider_plan_OL.js"  charset="utf-8"></script>
	<script src="js/userPermission.js"></script>
	<script src="js/mainFunctionJS.js"></script>
</body>
</html>