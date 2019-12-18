<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>BasePlan</title>
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
		     	
		     	<div class="content" id= "ui-005" >
		     	<div class="panel panel-primary">
					<div class="box-header" align="center">
						<p class="margin0">
							<B>การค้นหาและดูรายละเอียดความคุ้มครองสัญญาหลัก</B>
						</p>
					</div>
					<div class="box-body">		
					<table id= "table_PrimaryInsurance" class="table table-striped table-bordered text-center" style="width:100%">
					  <thead>
					    <tr>
					      <th scope="col">รหัสความคุ้มครองสัญญาหลัก</th>
					      <th scope="col">ชื่อ(ไทย)</th>
					      <th scope="col">ชื่อ(อังกฤษ)</th>
					      <th scope="col">สถานะ</th>
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
							<button type="button" class="btn btn-primary" data-dismiss="modal" id="bt_CreateInsurance">สร้างความคุ้มครองสัญญาหลัก</button>
						</div>  
                    </div>
				</div>
			</div>
			<!-- UI-005.1 -->
				<div class="content2" id= "ui-005_1" style="display: none;">
					<div class="panel panel-primary">
						<div  align="center">
							<p class="p-3 mb-2 bg-primary text-white"><B>สร้างความคุ้มครองสัญญาหลัก</B></p>
						</div>
						<div class="box-body">		
						<table class="table borderless">
						  <thead>
						    <tr>
						      <th >สร้างความคุ้มครองสัญญาหลัก (Create Base Plan)</th>
						    </tr>
						  </thead>
						  <tbody>
						    <tr>
						      	<td><input type="radio" id = "rd_CreateBasePlan" name="basePlan"><label for="rd_CreateBasePlan" class="label_input"> สร้างความคุ้มครองสัญญาหลักใหม่ (Create Base Plan)</label>
						     	</td>
						    </tr>
						    <tr>	
						     	<td><input type="radio" id = "rd_CloneBasePlan" name="basePlan"><label for="rd_CloneBasePlan" class="label_input"> สร้างความคุ้มครองสัญญาหลักใหม่จากความคุ้มครองสัญญาหลักเดิม (Clone Existing Base Plan)</label>
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
											<p class="p-3 mb-2 bg-primary text-white"><B>ความคุ้มครองสัญญาหลัก</B></p>
										<!-- <hr> -->
									</div>
								<div class="box-body">		
								<table class="table borderless">
								  <thead>
								    <tr>
								     	 <th >กรุณาเลือกประเภทความคุ้มครองสัญญาหลัก</th>
								    </tr>
								  </thead>
								  <tbody >
								    <tr class="col-sm-12">
								      	<td >
								      		<select class="form-control" id="main_contract" onchange="getmain_contract();">
								      			<option value="">--- กรุณาเลือก ---</option> 
								      		<!-- 	<option value="1">Indlvldual Life</option>
								      			<option value="2">Group Life</option> -->
								      		</select>
								      	</td>
								      	<td >
								      		<select class="form-control" id="main_contract2" onchange="getmain_contract2();">
								      			<option value="">--- กรุณาเลือก ---</option>
								      			<!-- <option value="Ordinary">Ordinary</option>
								      			<option value="Industrial">Industrial</option>
								      			<option value="PA">PA</option>
								      			<option value="creditLife" selected>Credit Life</option> -->
								      			
								      		</select>
								      	</td>
								      	<td >
								      		<select class="form-control" id="main_contract3">
								      			<option value="">--- กรุณาเลือก ---</option>
								      			<!-- <option value="SimpleEndowment">Simple Endowment</option>
								      			<option value="ModifyEndowment">Modify Endowment</option>
								      			<option value="Term">Term</option>
								      			<option value="Annuity">Annuity</option>
								      			<option value="Senior">Senior</option>
								      			<option value="UnitLinked">Unit Linked</option>
								      			<option value="UniversalLife">Universal Life</option>
								      			<option value="WholeLife">Whole Life</option>
								      			<option value="MRTA">MRTA</option> -->
								      		</select>
								      	</td>
								      	<td>
								      		<label style="margin-top: 5px" id="PD_subgroup_OIC">รหัส Product Sub Group (OIC)<p></p></label>
								      	</td>
								    </tr>
								    <tr>
								    	<td>
								    		 <input type="checkbox" id="ch_ui005-1" checked="checked" readonly> ข้อมูลทั่วไป Basic Information<br>
								    		 <input type="checkbox" id="ch_ui005-7" checked="checked"><label for="ch_ui005-7" class="label_input"> Policy Wording</label><br>
								    		 <input type="checkbox" id="ch_ui005-2" checked="checked"><label for="ch_ui005-2" class="label_input"> การใช้สิทธิ์ตามกรมธรรม์ (Non Forfeiture)</label><br>
								    		 <input type="checkbox" id="ch_ui005-3" checked="checked"><label for="ch_ui005-3" class="label_input"> การคำนวณเบี้ยประกัน</label><br>
								    		 <input type="checkbox" id="ch_ui005-4" checked="checked"><label for="ch_ui005-4" class="label_input"> ตารางมูลค่ากรมธรรม์</label><br>
								    		 <input type="checkbox" id="ch_ui005-5" checked="checked" ><label for="ch_ui005-5" class="label_input"> ผลประโยชน์/ความคุ้มครอง</label><br>
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
							<table id= "table_PrimaryInsurance2" class="table table-striped table-bordered text-center" style="width:100%">
					
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
								        <p>ต้องการ Clone ความคุ้มครองสัญญาหลัก ใช่หรือไม่?</p>
								        <button type="button" class="btn btn-primary" id="bt_Clone" data-dismiss="modal">ยืนยัน</button>
								      	<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
								      </div>
								    </div>
								  </div>
							</div>
				<!--***Menu***-->
					<div class="content" id= "ui005_Menu" style="display: none;">
					<%@include file="base_plan_Menu.jsp" %>
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
	<script src="js/base_plan_Main_and_OL.js"  charset="utf-8"></script>
	<script src="js/base_plan_CL.js"  charset="utf-8"></script>
	<script src="js/base_plan_OL.js"  charset="utf-8"></script>
	<script src="js/userPermission.js"></script>
	<script src="js/mainFunctionJS.js"></script>
</body>
</html>