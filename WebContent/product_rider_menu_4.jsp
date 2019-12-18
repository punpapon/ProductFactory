<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Product Rider</title>
</head>
<body>
	<form class="form-horizontal">
		<div class="row box-body" id="benefit_sale_CL">
			<div class="panel panel-primary">
				<div class="panel-heading text-left">
					<p class="margin0 text-center">
						<b>ผลประโยชน์การขาย</b>
					</p>
				</div>
				<div class="text-center" style="padding: 10px 0"></div>
				<div class="form-group" style="width: 98%; margin:auto;">

					<div class="col-sm-10 style_basic_table2">

						<div class="style_cal_table1 content_scroll" style="width: 900px">
							<table class="table table-bordered " style="width: 1500px;"
								id="tbl_benefit_sale_ol">
								<thead>
									<tr>
										<th rowspan="2"
											class="text-center verticalCenter tablecolorhead3 borderBlack"
											width="5%">ตาม Base</th>
										<th rowspan="2"
											class="text-center verticalCenter tablecolorhead3 borderBlack"
											width="9%">ช่วง</th>
										<th rowspan="2"
											class="text-center verticalCenter tablecolorhead3 borderBlack"
											width="3%"></th>
										<th colspan="2"
											class="text-center verticalCenter tablecolorhead3 borderBlack"
											width="25%">วันที่</th>
										<th colspan="2"
											class="text-center verticalCenter tablecolorhead3 borderBlack"
											width="20%">ค่าบำเหน็จ(%)</th>
										<th colspan="3"
											class="text-center verticalCenter tablecolorhead3 borderBlack"
											width="30%">ค่าพาหนะ(%)</th>
										<th rowspan="2"
											class="text-center verticalCenter tablecolorhead3 borderBlack"
											width="10%">เครดิตผลงาน(%)</th>
										<th rowspan="2"
											class="text-center verticalCenter tablecolorhead3 borderBlack"
											width="10%">Overriding(%)</th>
										<th rowspan="2"
											class="text-center verticalCenter tablecolorhead3 borderBlack"
											width="10%">Advance Comm(%)</th>
										<th rowspan="2"
											class="text-center verticalCenter tablecolorhead3 borderBlack"
											width="10%">Marketing Incentive(%)</th>
										<th rowspan="2"
											class="text-center verticalCenter tablecolorhead3 borderBlack"
											width="10%">Sale Volume Bonus(%)</th>
										<th rowspan="2"
											class="text-center verticalCenter tablecolorhead3 borderBlack"
											width="10%">Marketing Expense(%)</th>
									</tr>
									<tr>
										<th
											class="text-center  verticalCenter tablecolorhead3 borderBlack">วันที่เริ่ม</th>
										<th
											class="text-center  verticalCenter tablecolorhead3 borderBlack">วันที่สิ้นสุด</th>
										<th
											class="text-center  verticalCenter tablecolorhead3 borderBlack">ปีที่ 1</th>
										<th
											class="text-center  verticalCenter tablecolorhead3 borderBlack">สูงสุด</th>
										<th
											class="text-center  verticalCenter tablecolorhead3 borderBlack">ปีที่ 2</th>
										<th
											class="text-center  verticalCenter tablecolorhead3 borderBlack">ปีที่ 3</th>
										<th
											class="text-center  verticalCenter tablecolorhead3 borderBlack">ปีที่ 4+</th>
									</tr>
								</thead>
								<tbody>
									<tr id="tr_saleBnf1" data-id="1" data-level="1">
										<td class="verticalCenter text-center"><input
											type="checkbox" id="chk_is_ref_base" onclick="chk_is_base();"></td>
										<td class="verticalCenter text-center">1</td>
										<td class="verticalCenter text-center"><i
											class="glyphicon glyphicon-plus icon-blue-circle"
											id="addrow_rd_1" data-id="1" onclick="add_row_saleBnf_OL(this);"> </i></td>
											
										<td class="verticalCenter text-right">
										<input type="text" class="form-control" id="datefrom_saleBnf1" value=""
											placeholder="dd/mm/yyyy" onclick="start_date(this);"  onblur="checkdateFrom(this.id);"
											onkeyup="" maxlength="10" readonly></td>
											
										<td class="verticalCenter text-right">
											<input type="text" class="form-control" id="dateto_saleBnf1" value="" 
											placeholder="dd/mm/yyyy" onclick="to_date(this);" onblur="checkdateTo(this.id);"
												onkeyup="" maxlength="10" readonly>
										</td>
										
										<td class="verticalCenter text-right"><input id="txb_year1_1"
											type="text" class="auto text-right form-control" value="0.00"
											data-v-min="0.00" data-v-max="999.99" onblur="checkZero(this);"></td>
										<td class="verticalCenter text-right"><input id="txb_Maxyear1_1"
											type="text" class="auto text-right form-control" value="0.00"
											data-v-min="0.00" data-v-max="999.99" onblur="checkZero(this);" disabled></td>
										<td class="verticalCenter text-right"><input id="txb_year2_1"
											type="text" class="auto text-right form-control" value="0.00"
											data-v-min="0.00" data-v-max="999.99" onblur="checkZero(this);"></td>
										<td class="verticalCenter text-right"><input id="txb_year3_1"
											type="text" class="auto text-right form-control" value="0.00"
											data-v-min="0.00" data-v-max="999.99" onblur="checkZero(this);"></td>
										<td class="verticalCenter text-right"><input id="txb_year4_1"
											type="text" class="auto text-right form-control" value="0.00"
											data-v-min="0.00" data-v-max="999.99" onblur="checkZero(this);"></td>
										<td class="verticalCenter text-right"><input id="txb_credit_1"
											type="text" class="auto text-right form-control" value="0.00"
											data-v-min="0.00" data-v-max="999.99" onblur="checkZero(this);"></td>
										<td class="verticalCenter text-center"><input id="txb_override_1"
											type="text" class="auto text-center form-control"
											value="0.00" data-v-min="0.00" data-v-max="999.99" onblur="checkZero(this);"></td>
										<td class="verticalCenter text-center"><input id="txb_comm_1"
											type="text" class="auto text-center form-control"
											value="0.00" data-v-min="0.00" data-v-max="999.99" onblur="checkZero(this);"></td>
										<td class="verticalCenter text-center"><input id="txb_incentive_1"
											type="text" class="auto text-center form-control"
											value="0.00" data-v-min="0.00" data-v-max="999.99" onblur="checkZero(this);"></td>
										<td class="verticalCenter text-center"><input id="txb_bonus_1"
											type="text" class="auto text-center form-control"
											value="0.00" data-v-min="0.00" data-v-max="999.99" onblur="checkZero(this);"></td>
										<td class="verticalCenter text-center"><input id="txb_expense_1"
											type="text" class="auto text-center form-control"
											value="0.00" data-v-min="0.00" data-v-max="999.99" onblur="checkZero(this);"></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

					<div class="text-center" style="padding: 10px 0"></div>

				</div><br clear="all">
				<div class="row pd-bt">
					<div class="col-sm-9"></div>
					<div class="productpadding col-sm-1">
						<button class="btn btn-default btn-primary" type="button" onclick="bt_Menu4_Confirm_ol();">บันทึก</button>
					</div>
					<div class="productpadding col-sm-1">
						<button class="btn btn-default btn-primary" type="button" data-toggle="modal" data-target="#modal_Cancel">ยกเลิก</button>
					</div>
					<div class="col-sm-1"></div>
				</div>
			</div>
		</div>
	</form>

</body>
</html>