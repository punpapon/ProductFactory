<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Product Rider</title>
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
				
		     	<div class="content" id= "ui-007" >
		     	<div class="panel panel-primary">
					<div class="box-header" align="center">
						<p class="margin0">
							<B>การค้นหาและดูรายละเอียดสัญญาเพิ่มเติม</B>
						</p>
					</div>
					<div class="box-body">		
					<table id= "table_PrimaryProduct" class="table table-striped table-bordered text-center" style="width:100%">
					  <thead>
					    <tr>
					      <th scope="col">รหัสสัญญาเพิ่มเติม</th>
					      <th scope="col">ชื่อ(ไทย)</th>
					      <th scope="col">ชื่อทางการตลาด (ไทย)</th>
					      <th scope="col">สถานะ</th>
					    </tr>
					  </thead>
					  <tbody>					   
					  </tbody>
					</table>
					</div>
					<!-- pagination -->
					<div class="col-md-3 col-md-offset-9 text-right" style="float: right;">
					<div class="text-center" style="padding: 2px 0"></div>
						<div class="modal-footer">
							<button type="button" class="btn btn-primary" data-dismiss="modal" id=bt_CreateProduct>สร้างสัญญาเพิ่มเติม</button>
						</div>  
                    </div>
				</div>
			</div>
			<!-- ui-007.1 -->
				<div class="content2" id= "ui-007_1" style="display: none;">
					<div class="panel panel-primary">
						<div  align="center">
							<p class="p-3 mb-2 bg-primary text-white"><B>สร้างสัญญาเพิ่มเติม</B></p>
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
						      	<td><input type="radio" id = "rd_CreateProduct" name="Product"><label for="rd_CreateProduct" class="label_input"> สร้างสัญญาเพิ่มเติมใหม่ (Create New Rider)</label>
						     	</td>
						    </tr>
						    <tr>	
						     	<td><input type="radio" id = "rd_CloneProduct" name="Product"><label for="rd_CloneProduct" class="label_input"> สร้างสัญญาเพิ่มเติมใหม่ จากสัญญาเพิ่มเติมเดิม (Clone Existing Rider)</label>
						     	</td>
						   </tr>
						  </tbody>
						</table>
						</div>
					</div>
				</div>
				<!-- แบบประกัน -->
						<div class="content" id= "ui-007_1_CreateProduct" style="display: none;">
								<div class="panel panel-primary">
									<div  align="center">
										<!-- <hr> -->
											<p class="p-3 mb-2 bg-primary text-white"><B>สัญญาเพิ่มเติม</B></p>
										<!-- <hr> -->
									</div>
								<div class="box-body">		
								<table class="table borderless">
								  <thead>
								    <tr>
								     	 <th>กรุณาเลือก ประเภทสัญญาเพิ่มเติม</th>
								    </tr>
								  </thead>
								  <tbody >
								    <tr class="col-sm-12">
								      	<td >
								      		<select class="form-control" id="main_contract" onchange="main_contract();">
								      			<option value="">---กรุณาเลือก---</option>
								      		</select>
								      	</td>
								      	<td >
								      		<select class="form-control" id="main_contract2" onchange="main_contract2();">
								      			<option value="">---กรุณาเลือก---</option>								      			
								      		</select>
								      	</td>
								      	<td >
								      		<select class="form-control" id="main_contract3">
								      			<option value="">---กรุณาเลือก---</option>								      			
								      		</select>
								      	</td>
								      	<td>
								      		<label style="margin-top: 5px" id="PD_subgroup_OIC">รหัส Product Sub Group (OIC)<p></p></label>
								      	</td>
								    </tr>
								    <tr>
								    	<td>
								    		 <input type="checkbox" id="ch_ui007-1" checked="checked" readonly="readonly"> ข้อมูลทั่วไป Basic Information<br>								    		 
								    		 <input type="checkbox" id="ch_ui007-3" checked="checked"><label for="ch_ui007-3" class="label_input"> การคำนวณเบี้ยประกัน</label><br>
								    		 <input type="checkbox" id="ch_ui007-2" checked="checked"><label for="ch_ui007-2" class="label_input"> ผลประโยชน์ความคุ้มครอง</label><br>
								    		 <input type="checkbox" id="ch_ui007-4" checked="checked"><label for="ch_ui007-4" class="label_input"> ผลประโยชน์การขาย</label><br>
								    		 <input type="checkbox" id="ch_ui007-5" checked="checked"><label for="ch_ui007-5" class="label_input"> ข้อกำหนดการรับประกัน</label><br>
								    		 
								    	</td> 
								    </tr>
								  </tbody>
								</table>
								<!-- pagination -->
									<div class="col-md-3 col-md-offset-9 text-right" style="float: right;">
										  <div class="modal-footer" style="border: 0">
										  	<button type="button" class="btn btn-primary" data-dismiss="modal" id="ui_007_1_Confirm">ตกลง</button>
											<button type="button" class="btn btn-primary" data-dismiss="modal" id="ui_007_1_Cancel">ยกเลิก</button>
										</div>  
			                        </div> 
								</div>
							</div>	
						</div>
						<!--********************************************-->
						<div class="content" id= "ui-007_1_CloneProduct"  style="display: none;">
							<div class="panel panel-primary">
									<div  align="center">
										<!-- <hr> -->
											<p class="p-3 mb-2 bg-primary text-white"><B>สร้างสัญญาเพิ่มเติมใหม่จากแบบสัญญาเพิ่มเติมเดิม Clone Existing Product</B></p>
										<!-- <hr> -->
									</div>
							<div class="box-header" align="center">
								<form class="form-inline" role="form">
									<label>รหัสสัญญาเพิ่มเติม/ชื่อ(ไทย)/ชื่อ(อังกฤษ)</label>
									<input type="search" class="form-control" placeholder="Search">
									<input type="button" class="btn btn-primary" value="ค้นหา">
									<input type="button" class="btn btn-primary" value="ล้างรายการ">
								</form>
							</div>
							<div class="box-body">		
							<table class="table table-hover">
							  <thead>
							    <tr>
							      <th scope="col">รหัสสัญญาเพิ่มเติม</th>
							      <th scope="col">ชื่อ(ไทย)</th>
							      <th scope="col">ชื่อ(อังฤษ)</th>
							      <th scope="col"></th>
							    </tr>
							  </thead>
							  <tbody>
							    <tr>
							      <td scope="row">WG</td>
							      <td>PD01</td>
							      <td>PD01</td>
							      <td><button class="btn btn-primary" 
							      		id="bt_Clone_0">Clone
							      		</button>
							      </td>
							    </tr>
							    <tr>
							      <td scope="row">xx</td>
							      <td>xxxxx</td>
							      <td>Example Product</td>
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
								        <p>ต้องการ Clone สัญญาเพิ่มเติมใช่หรือไม่?</p>
								        <button type="button" class="btn btn-primary" id="bt_Clone" data-dismiss="modal">ยืนยัน</button>
								      	<button type="button" class="btn btn-primary" data-dismiss="modal">ยกเลิก</button>
								      </div>
								    </div>
								  </div>
							</div>
				<!--***Menu***-->
					<div class="content" id= "ui007_Menu" style="display: none;">
					<%@include file="product_rider_Menu.jsp" %>
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
	
	<!--    Data Table  -->
	<link rel="stylesheet" href="include/bower_components/datatables.net-bs/css/dataTables.bootstrap.min.css">
	<script src="include/plugins/datatables/jquery.dataTables.min.js"></script>
	<script src="include/plugins/datatables/dataTables.bootstrap.js"></script>
    <!-- New JS -->
     <script src="js/autoNumeric.js"></script>
	<script src="js/product_Main_rider.js"  charset="utf-8"></script>
	<script src="js/product_rider.js"  charset="utf-8"></script>
	<script src="js/mainFunctionJS.js"  charset="utf-8"></script>
	<script src="js/userPermission.js"></script>
</body>
</html>