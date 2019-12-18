<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>ผลประโยชน์ความคุ้มครอง</title>
</head>
<body>
	<!-- <form class="form-horizontal"> -->
		<div class="row box-body" id="bnfProduct_CL">
			<div class="panel panel-primary">
				<div class="panel-heading text-left">
					<p class="margin0 text-center">
						<b>ผลประโยชน์ความคุ้มครอง</b>
					</p>
				</div>
			
			<div style="width:95%; margin:30px auto;"  id="bnf_tab_level1_CL">
					<ul class='nav nav-tabs' id='tabBenefitProduct_CL'>
					   <!--  <li class="active"><a data-toggle="tab" href="#menu_ProductBnf1_OL" class="purple">IL_OR_SNB_B_0001</a></li>	 -->				   
					    <!-- <li><a data-toggle="tab" href="#menu_ProductBnf2_OL" class="green">RO_CR_DDR_R_0001</a></li>   -->
					</ul>
				
				<div class="tab-content">
					<div id="menu_ProductBnf1_CL" class="tab-pane fade in active">
					      <jsp:include page="product_menuCL_7_baseplan.jsp" />		  		      
					    </div>
					    
					    <div id="menu_ProductBnf2_CL" class="tab-pane fade">
					      <jsp:include page="product_menuCL_7_rider.jsp" />
					    </div>

				</div>
					</div> 
				</div>						
			</div>			
	<!-- </form> -->

	<!-- ปุ่มยกเลิก -->
	<div id="cancelBoxCL_Benefit" class="modal fade bd-example-modal-sm"
				tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel"
				aria-hidden="true">
				<div class="modal-dialog modal-sm">
					<div class="modal-content">
						<div class="modal-header"
							style="background-color: #337AB7; color: white;">
							<button type="button" class="close" data-dismiss="modal">&times;</button>
							<h4 class="modal-title">แจ้งเตือน</h4>
						</div>
						<div class="modal-body text-center">
							<label>ท่านต้องการยกเลิกการสร้างหรือไม่<br>หากต้องการยกเลิก
								ให้กด ยืนยัน <br> ระบบจะไม่ทำการบันทึกข้อมูลการสร้างนี้
							</label>
						</div>
						<div class="text-center" style="padding: 10px 0"></div>
						<div class="row">
							<div class="col-md-3"></div>
							<div class="col-md-2">
								<button type="button" class="btn btn-primary" onclick="cancelPage('product.jsp');">ยืนยัน</button>
							</div>
							<div class="col-md-1"></div>
							<div class="col-md-2">
								<button type="button" class="btn btn-primary"
									data-dismiss="modal">ยกเลิก</button>
							</div>
							<div class="col-md-4"></div>
						</div>
						<div class="text-center" style="padding: 10px 0"></div>
					</div>
				</div>
			</div>	
</body>
</html>