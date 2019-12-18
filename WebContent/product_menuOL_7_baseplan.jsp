<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<div class="panel panel-default panel-bordertop">		
				  <div id="tab_benefitBaseplan_in">
					  <div class="term_boxpanel">					 
						<div style="width:95%; margin:10px auto;">
							<ul class="nav nav-tabs" id="tabBenefitBasePlan_OL">
							    <!--  <li class="active"><a data-toggle="tab" href="#prd_bnf_OL1">เสียชีวิต</a></li>
							    <li><a data-toggle="tab" href="#prd_bnf_OL2">เงินครบกำหนดสัญญา</a></li>	 -->			    
							</ul>
						
							<div class="tab-content">	
							<div class="text-center" style="padding: 20px 0"></div>	
								<!-- เสียชีวิต -->		    
						 	<div class="tab-pane fade in active" id="prd_bnf_OL1">
								
						 	</div>
							
							<!-- เงินครบกำหนดสัญญา -->
							<div id="prd_bnf_OL2" class="tab-pane fade">
							</div>
							
							<!-- เงินคืนทุกระยะ/เงินจ่ายคืนตามเงื่อนไข -->
							<div id="prd_bnf_OL3" class="tab-pane fade">
							</div>
							
							<!-- เงินบำนาญ -->
							<div id="prd_bnf_OL4" class="tab-pane fade">
							</div>
							
							<!-- กองทุนค่ารักษาพยาบาล -->
							<div id="prd_bnf_OL5" class="tab-pane fade">
							</div>
							
							<!-- เงินปันผล -->
							<div id="prd_bnf_OL6" class="tab-pane fade">
							</div>

							 </div>
						 </div>
					  </div>
					  <!-- end panel1 -->				  
				  </div>
				  <!-- end tab In house -->

				  <br clear="all">
					<div class="col-md-8 col-md-offset-7 text-right">
						<div class="col-md-7">
							<!-- <div class="col-md-6">
								<button type="button" class="btn btn-primary width80px" id="bt_ui005_2_Confirm_cl">บันทึก</button>
							</div> -->
							<div class="col-md-12">
								<button type="button" class="btn btn-primary width80px" data-dismiss="modal" data-toggle="modal" data-target="#cancelBoxOL_Benefit">ยกเลิก</button>
							</div>
						</div>
					</div>
					<br clear="all">
</div>	
				
	<div class="modal fade" id="modal_DVSee_OL" role="dialog">
				<div class="modal-dialog">

					<!-- Modal content-->
					<div class="modal-content">
						<div class="modal-header"
							style="background-color: #337AB7; color: white;">
							<button type="button" class="close" data-dismiss="modal">&times;</button>
							<h4 class="modal-title">ดูค่า : <span></span></h4>
						</div>
						<div class="modal-body">
							<div class="ex1">
								<table class="table table-bordered" id="tb_DVSee_OL">
									<thead>
										<tr class="borderBlack">
											<th class="text-center bg-primary borderBlack">Plan</th>
											<th class="text-center bg-primary borderBlack">Age</th>
											<th class="text-center bg-primary borderBlack">t</th>
											<th class="text-center bg-primary borderBlack">Dividend</th>
										</tr>
									</thead>
									<tbody>
									</tbody>
								</table>
							</div>
							<div class="text-center" style="padding: 10px 0"></div>
							<div class="row">
								<div class="col-md-4">
									<button type="button" class="btn btn-primary" id="download_tb_DVSee_OL">ดาวน์โหลด</button></div>
								<div class="col-md-8 text-right">
									<button type="button" class="btn btn-primary" data-dismiss="modal" id="btn_cancel_DVAuto_OL">&nbsp;&nbsp;ยกเลิก&nbsp;&nbsp;</button>
								</div>
								<div class="col-md-2"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
<input type="hidden" id="die_condition_lookup"> 
<input type="hidden" id="die_ACC_lookup"> 
<input type="hidden" id="die_ADB_lookup"> 
<input type="hidden" id="unit_refund_lookup"> 
<input type="hidden" id="factor_refund_lookup"> 
<input type="hidden" id="scope_refund_lookup"> 
<input type="hidden" id="dividend_type_lookup"> 
<input type="hidden" id="insur_year_lookup"> 
<input type="hidden" id="formula_lookup"> 
<input type="hidden" id="bnf_pattern_dividend">
