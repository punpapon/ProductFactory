<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
</head>
<body>
	<div id="mainPolicy" class="row box-body">
		<div class="panel panel-primary">
			<div class="panel-heading text-left">
				<p class="margin0 text-center">ตารางมูลค่ากรมธรรม์</p>
			</div>
			<div class="panel-body">
				<div class="panel panel-primary">
					<div class="row">
						<div class="col-md-12">
							<div class="input-group">
								<span class="input-group-addon"
									style="background-color: #337AB7;"> <input
									type="checkbox" id="cbBox1" onclick="displayPolicyValue(1);">
								</span> <input type="text"
									class="form-control text-center fontColorWhite padding20px"
									style="background-color: #337AB7; border-left: 0;"
									value="ความเสี่ยงมาตราฐาน">
							</div>
						</div>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row">
						<div class="col-md-1"></div>
						<div class="col-md-3">
							<p class="text-left" style="padding-top: 5px;">ตารางมูลค่ากรมธรรม์</p>
						</div>
						<div class="col-md-5">
							<select class="form-control" id="dbBox1" disabled>
								<option>ข้อมูลกรมธรรม์ต่อทุน 10,000 บาท</option>
							</select>
						</div>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row">
						<div class="col-md-1"></div>
						<div class="col-md-6">
							<!-- 										<div class="input-group"> -->
							<!-- 											<input type="text" class="form-control" -->
							<!-- 												placeholder="(LAYOUT)_{BASECODE}.txt"> -->
							<!-- 											<div class="input-group-btn "> -->
							<!-- 												<button class="btn btn-primary" type="submit" -->
							<!-- 													style="padding-top: 7px;">เลือกไฟล์</button> -->
							<!-- <!-- 													<input type="file" hidden> -->
							<!-- 											</div> -->
							<!-- 										</div> -->

							<div class="input-group">
								<input type="text" class="form-control"
									placeholder="(LAYOUT)_{BASECODE}.txt" readonly> <label
									class="input-group-btn"> <span id="spanBox1"
									class="btn btn-primary" disabled> เลือกไฟล์<input
										type="file" style="display: none;" id="">
								</span>
								</label>
							</div>
						</div>
						<div class="col-md-2 text-right">
							<button class="btn btn-primary text-center" id="cv1"
								data-toggle="modal" data-target="#cvStandardRisk"
								 disabled>ดูค่า CV</button>
						</div>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
				</div>

				<!-- group2 -->
				<div class="panel panel-primary">
					<div class="row">
						<div class="col-md-12">
							<div class="input-group">
								<span class="input-group-addon"
									style="background-color: #337AB7;"> <input id="cbBox2"
									onclick="displayPolicyValue(2);" type="checkbox">
								</span> <input type="text"
									class="form-control text-center fontColorWhite padding20px"
									style="background-color: #337AB7; border-left: 0;"
									value="ความเสี่ยงต่ำกว่ามาตราฐาน">
							</div>
						</div>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row">
						<div class="col-md-1"></div>
						<div class="col-md-3">
							<p class="text-left" style="padding-top: 5px;">ตารางมูลค่ากรมธรรม์</p>
						</div>
						<div class="col-md-5">
							<select class="form-control" id="dbBox2" disabled>
								<option>ข้อมูลกรมธรรม์ต่อทุน 10,000 บาท</option>
							</select>
						</div>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row">
						<div class="col-md-1"></div>
						<div class="col-md-6">
							<!-- 										<div class="input-group"> -->
							<!-- 											<input type="text" class="form-control" -->
							<!-- 												placeholder="(LAYOUT)_{BASECODE}.txt"> -->
							<!-- 											<div class="input-group-btn "> -->
							<!-- 												<button class="btn btn-primary" type="submit" -->
							<!-- 													style="padding-top: 7px;">เลือกไฟล์</button> -->
							<!-- 											</div> -->
							<!-- 										</div> -->

							<div class="input-group">
								<input type="text" class="form-control"
									placeholder="(LAYOUT)_{BASECODE}.txt" readonly> <label
									class="input-group-btn"> <span disabled id="spanBox2"
									class="btn btn-primary"> เลือกไฟล์<input type="file"
										style="display: none;">
								</span>
								</label>
							</div>
						</div>
						<div class="col-md-2 text-right">
							<button class="btn btn-primary text-center" id="cv2"
								data-toggle="modal" data-target="#cvNotStandardRisk"
								 disabled>ดูค่า CV</button>
						</div>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
				</div>

				<!------ group3 ------>
				<div class="panel panel-primary">
					<div class="row">
						<div class="col-md-12">
							<div class="input-group">
								<span class="input-group-addon"
									style="background-color: #337AB7;"> <input id="cbBox3"
									type="checkbox" onclick="displayPolicyValue(3);">
								</span> <input type="text"
									class="form-control text-center fontColorWhite padding20px"
									style="background-color: #337AB7; border-left: 0;"
									value="ตารางมรณะสำหรับคำนวณปิดบัญชี(RPU/ETI)">
							</div>
						</div>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row">
						<div class="col-md-1"></div>
						<div class="col-md-3 text-left">
							<input type="radio" name="tablePolicy"
								onclick="changeDisplayBenefit005(3);" checked disabled>&nbsp;ตารางที่มีอยู่แล้ว
						</div>
						<div class="col-md-3 text-left">
							<input type="radio" name="tablePolicy"
								onclick="changeDisplayBenefit005(2);" disabled>&nbsp;ตารางใหม่
						</div>
					</div>

					<div class="text-center" style="padding: 10px 0"></div>
					<div id="oldTable">
						<div>
							<div class="col-md-1"></div>
							<div class="col-md-10" style="border: 1px groove blue;">
								<div class="text-center" style="padding: 10px 0"></div>
								<div class="row">
									<!-- 												<div class="col-md-1"></div> -->
									<div class="col-md-4">
										<h4>แบบ RPU</h4>
									</div>
								</div>
								<div class="row">
									<div class="col-md-1"></div>
									<div class="col-md-4">
										<select class="form-control" id="dbBox3_1" disabled>
											<option>ปี คศ (group by)</option>
										</select>
									</div>
									<div class="col-md-4">
										<select class="form-control" id="dbBox3_2" disabled>
											<option>RPU_MALE</option>
										</select>
									</div>
									<div class="col-md-2">
										<button class="btn btn-primary" id="tmo1" disabled>ดูค่า
											TMO</button>
									</div>
								</div>
								<div class="text-center" style="padding: 10px 0"></div>
								<div class="row" style="padding-bottom: 20px;">
									<div class="col-md-5"></div>
									<div class="col-md-4">
										<select class="form-control" id="dbBox3_3" disabled>
											<option>RPU_FEMALE</option>
										</select>
									</div>
									<div class="col-md-2">
										<button class="btn btn-primary" id="tmo2" disabled>ดูค่า
											TMO</button>
									</div>
								</div>
							</div>


						</div>
						<div class="row"></div>
						<div>
							<div class="col-md-1"></div>
							<div class="col-md-10"
								style="border: 1px groove blue; margin-top: 15px;">
								<div class="text-center" style="padding: 10px 0"></div>
								<div class="row">
									<!-- 												<div class="col-md-1"></div> -->
									<div class="col-md-4">
										<h4>แบบ ETI</h4>
									</div>
								</div>
								<div class="row">
									<div class="col-md-1"></div>
									<div class="col-md-4">
										<select class="form-control" id="dbBox3_4" disabled>
											<option>ปี คศ (group by)</option>
										</select>
									</div>
									<div class="col-md-4">
										<select class="form-control" id="dbBox3_5" disabled>
											<option>ETI_MALE</option>
										</select>
									</div>
									<div class="col-md-2">
										<button class="btn btn-primary" id="tmo3" disabled>ดูค่า
											TMO</button>
									</div>
								</div>
								<div class="text-center" style="padding: 10px 0"></div>
								<div class="row" style="padding-bottom: 20px">
									<div class="col-md-5"></div>
									<div class="col-md-4">
										<select class="form-control" id="dbBox3_6" disabled>
											<option>ETI_FEMALE</option>
										</select>
									</div>
									<div class="col-md-2">
										<button class="btn btn-primary" id="tmo4" disabled>ดูค่า
											TMO</button>
									</div>
								</div>
							</div>
							<div class="text-center" style="padding: 70px 0"></div>
						</div>
						<div class="row"></div>




					</div>
					<div id="newTable" class="displayNone">
						<div>
							<div class="col-md-1"></div>
							<div class="col-md-10" style="border: 1px groove blue;">
								<div class="text-center" style="padding: 10px 0"></div>
								<div class="row">
									<!-- 												<div class="col-md-1"></div> -->
									<div class="col-md-4">
										<h4>แบบ RPU</h4>
									</div>
								</div>
								<!-- 1 -->
								<div class="row">
									<div class="col-md-1"></div>
									<div class="col-md-3" style="padding-top: 5px">
										<p class="text-left">RPU MALE</p>
									</div>
									<div class="col-md-5">
										<!-- 											<div class="input-group"> -->
										<!-- 												<input type="text" class="form-control" -->
										<!-- 													placeholder="RPU{พ.ศ.}{industrial}_{sex}_{ดอกเบี้ย}.txt"> -->
										<!-- 												<div class="input-group-btn "> -->
										<!-- 													<button class="btn btn-primary" type="submit" -->
										<!-- 														style="padding-top: 7px;">เลือกไฟล์</button> -->
										<!-- 												</div> -->
										<!-- 											</div> -->

										<div class="input-group">
											<input type="text" class="form-control"
												placeholder="RPU{พ.ศ.}{industrial}_{sex}_{ดอกเบี้ย}.txt"
												readonly> <label class="input-group-btn"> <span
												class="btn btn-primary" id="spanBox3_1" disabled>
													เลือกไฟล์<input type="file" style="display: none;" id="">
											</span>
											</label>
										</div>

									</div>
									<div class="col-md-2">
										<button class="btn btn-primary" id="tmo5" disabled>ดูค่า
											TMO</button>
									</div>
								</div>
								<!-- 2 -->
								<div class="text-center" style="padding: 10px 0"></div>
								<div class="row" style="padding-bottom: 20px;">
									<div class="col-md-1"></div>
									<div class="col-md-3" style="padding-top: 5px">
										<p class="text-left">RPU FEMALE</p>
									</div>
									<div class="col-md-5">
										<!-- 											<div class="input-group"> -->
										<!-- 												<input type="text" class="form-control" -->
										<!-- 													placeholder="RPU{พ.ศ.}{industrial}_{sex}_{ดอกเบี้ย}.txt"> -->
										<!-- 												<div class="input-group-btn "> -->
										<!-- 													<button class="btn btn-primary" type="submit" -->
										<!-- 														style="padding-top: 7px;">เลือกไฟล์</button> -->
										<!-- 												</div> -->
										<!-- 											</div> -->

										<div class="input-group">
											<input type="text" class="form-control"
												placeholder="RPU{พ.ศ.}{industrial}_{sex}_{ดอกเบี้ย}.txt"
												readonly> <label class="input-group-btn"> <span
												id="spanBox3_2" disabled class="btn btn-primary">
													เลือกไฟล์<input type="file" style="display: none;">
											</span>
											</label>
										</div>

									</div>
									<div class="col-md-2">
										<button class="btn btn-primary" id="tmo6" disabled>ดูค่า
											TMO</button>
									</div>
								</div>
							</div>
						</div>
						<div class="row"></div>
						<div>
							<div class="col-md-1"></div>
							<div class="col-md-10"
								style="border: 1px groove blue; margin-top: 15px;">
								<div class="text-center" style="padding: 10px 0"></div>
								<div class="row">
									<!-- 												<div class="col-md-1"></div> -->
									<div class="col-md-4">
										<h4>แบบ ETI</h4>
									</div>
								</div>
								<!-- 3 -->
								<!-- 									<div class="text-center" style="padding: 10px 0"></div> -->
								<div class="row">
									<div class="col-md-1"></div>
									<div class="col-md-3" style="padding-top: 5px">
										<p class="text-left">ETI MALE</p>
									</div>
									<div class="col-md-5">
										<!-- 											<div class="input-group"> -->
										<!-- 												<input type="text" class="form-control" -->
										<!-- 													placeholder="ETI{พ.ศ.}{industrial}_{sex}_{ดอกเบี้ย}.txt"> -->
										<!-- 												<div class="input-group-btn "> -->
										<!-- 													<button class="btn btn-primary" type="submit" -->
										<!-- 														style="padding-top: 7px;">เลือกไฟล์</button> -->
										<!-- 												</div> -->
										<!-- 											</div> -->

										<div class="input-group">
											<input type="text" class="form-control"
												placeholder="ETI{พ.ศ.}{industrial}_{sex}_{ดอกเบี้ย}.txt"
												readonly> <label class="input-group-btn"> <span
												id="spanBox3_3" disabled class="btn btn-primary">
													เลือกไฟล์<input type="file" style="display: none;" id="">
											</span>
											</label>
										</div>

									</div>
									<div class="col-md-2">
										<button class="btn btn-primary" id="tmo7" disabled>ดูค่า
											TMO</button>
									</div>
								</div>
								<!-- 4 -->
								<div class="text-center" style="padding: 10px 0"></div>
								<div class="row" style="padding-bottom: 20px;">
									<div class="col-md-1"></div>
									<div class="col-md-3" style="padding-top: 5px">
										<p class="text-left">ETI MALE</p>
									</div>
									<div class="col-md-5">
										<!-- 											<div class="input-group"> -->
										<!-- 												<input type="text" class="form-control" -->
										<!-- 													placeholder="ETI{พ.ศ.}{industrial}_{sex}_{ดอกเบี้ย}.txt"> -->
										<!-- 												<div class="input-group-btn "> -->
										<!-- 													<button class="btn btn-primary" type="submit" -->
										<!-- 														style="padding-top: 7px;">เลือกไฟล์</button> -->
										<!-- 												</div> -->
										<!-- 											</div> -->

										<div class="input-group">
											<input type="text" class="form-control"
												placeholder="ETI{พ.ศ.}{industrial}_{sex}_{ดอกเบี้ย}.txt"
												readonly> <label class="input-group-btn"> <span
												id="spanBox3_4" disabled class="btn btn-primary">
													เลือกไฟล์<input type="file" style="display: none;" id="">
											</span>
											</label>
										</div>

									</div>
									<div class="col-md-2">
										<button class="btn btn-primary" id="tmo8" disabled>ดูค่า
											TMO</button>
									</div>
								</div>
							</div>
						</div>
						<div class="row"></div>

					</div>
					<div class="text-center" style="padding: 20px 0"></div>
				</div>


				<!-- Footer -->
				<div class="row">
					<div class="col-md-8"></div>
					<div class="col-md-4">
						<div class="col-md-6">
							<button class="btn btn-primary width100">บันทึก</button>
						</div>
						<div class="col-md-6">
							<button class="btn btn-primary width100">ยกเลิก</button>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>


	<!-- MODAL -->
	<div class="modal fade" id="cvStandardRisk" role="dialog">
		<div class="modal-dialog">

			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">ความเสี่ยงมาตราฐาน : ดูค่า CV</h4>
				</div>
				<div class="modal-body">
					<div class="ex1">
						<table class="table table-bordered">
							<thead>
								<tr style="background-color: #EEEEEE;">
									<th class="text-center">Age</th>
									<th class="text-right">Dx</th>
									<th class="text-right">Nx</th>
									<th class="text-right">Cx</th>
									<th class="text-right">Mx</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td class="text-center">0</td>
									<td class="text-right">1,000,000.00</td>
									<td class="text-right">25,622,409.7839</td>
									<td class="text-right">987.9518</td>
									<td class="text-right">73,888.8030</td>
								</tr>
								<tr>
									<td class="text-center">1</td>
									<td class="text-right">962,867.4699</td>
									<td class="text-right">24,622,409.7839</td>
									<td class="text-right">845.4057</td>
									<td class="text-right">72,900.8512</td>
								</tr>
								<tr>
									<td class="text-center">2</td>
									<td class="text-right">927,219.6255</td>
									<td class="text-right">23,659,542.3140</td>
									<td class="text-right">720.8279</td>
									<td class="text-right">72,055.4455</td>
								</tr>
								<tr>
									<td class="text-center">3</td>
									<td class="text-right">892,984.8353</td>
									<td class="text-right">22,732,322.6885</td>
									<td class="text-right">614.5080</td>
									<td class="text-right">71,334.6176</td>
								</tr>
								<tr>
									<td class="text-center">4</td>
									<td class="text-right">860,093.7669</td>
									<td class="text-right">21,839,337.8533</td>
									<td class="text-right">525.7467</td>
									<td class="text-right">70,720.1096</td>
								</tr>
								<tr>
									<td class="text-center">5</td>
									<td class="text-right">828,480.2937</td>
									<td class="text-right">20,979,244.0864</td>
									<td class="text-right">454.6262</td>
									<td class="text-right">70,194.3629</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row">
						<div class="col-md-4"></div>
						<div class="col-md-4 text-center">

							<button type="button" class="btn btn-primary"
								data-dismiss="modal">ปิด</button>

						</div>
						<div class="col-md-2"></div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- cvNotStandardRisk -->
	<div class="modal fade" id="cvNotStandardRisk" role="dialog">
		<div class="modal-dialog">

			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #337AB7; color: white;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">ความเสี่ยงต่ำกว่ามาตราฐาน : ดูค่า CV</h4>
				</div>
				<div class="modal-body">
					<div class="ex1">
						<table class="table table-bordered">
							<thead>
								<tr style="background-color: #EEEEEE;">
									<th class="text-center">Sex</th>
									<th class="text-center">Age</th>
									<th class="text-center">qx</th>
									<th class="text-center">Blank</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td class="text-center">M</td>
									<td class="text-right">00</td>
									<td class="text-right">000144</td>
									<td></td>
								</tr>
								<tr>
									<td class="text-center">M</td>
									<td class="text-right">01</td>
									<td class="text-right">000145</td>
									<td></td>
								</tr>
								<tr>
									<td class="text-center">M</td>
									<td class="text-right">02</td>
									<td class="text-right">000146</td>
									<td></td>
								</tr>
								<tr>
									<td class="text-center">M</td>
									<td class="text-right">03</td>
									<td class="text-right">000147</td>
									<td></td>
								</tr>
								<tr>
									<td class="text-center">M</td>
									<td class="text-right">04</td>
									<td class="text-right">000148</td>
									<td></td>
								</tr>
								<tr>
									<td class="text-center">M</td>
									<td class="text-right">05</td>
									<td class="text-right">000149</td>
									<td></td>
								</tr>

							</tbody>
						</table>
					</div>
					<div class="text-center" style="padding: 10px 0"></div>
					<div class="row">
						<div class="col-md-4"></div>
						<div class="col-md-4 text-center">

							<button type="button" class="btn btn-primary"
								data-dismiss="modal">ปิด</button>

						</div>
						<div class="col-md-2"></div>
					</div>
				</div>
			</div>
		</div>
	</div>

</body>
</html>