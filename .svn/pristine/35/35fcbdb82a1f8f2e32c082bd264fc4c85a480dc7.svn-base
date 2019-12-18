package servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.math.BigDecimal;
import java.sql.Date;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.JSONArray;
import org.json.JSONObject;

import layout.bean.productfac.beanset.DocumentAcessData;
import layout.bean.productfac.beanset.LookupCatValueAcessData;
import layout.bean.productfac.beanset.ParticipantAccessData;
import layout.bean.productfac.beanset.PremAssumpRateAcessData;
import layout.bean.productfac.beanset.RateCatAccessData;
import layout.bean.productfac.beanset.RateLayoutPremAccessData;
import layout.bean.productfac.benefit.Benefit;
import layout.bean.productfac.coverage.Age_calc_meth;
import layout.bean.productfac.coverage.Benefit_item;
import layout.bean.productfac.coverage.Coverage;
import layout.bean.productfac.coverage.Coverage_cat;
import layout.bean.productfac.coverage.Participant;
import layout.bean.productfac.lookup.File;
import layout.bean.productfac.lookup.Lookup_value;
import layout.bean.productfac.lookup.Sub_cat;
import layout.bean.productfac.product.Product;
import layout.bean.productfac.product.Rider;
import layout.bean.productfac.view.View_category;
import layout.bean.productfac.workflow.Coverage_task;
import layout.bean.productfac.workflow.Product_task;
import service.FreezePolicyValue;
import service.MainInsuranceService;
import service.RiderCL_SaveData_Service;
import service.baseplan.BasePlanAccessData;
import service.baseplan.ctrl.RateLayoutData;
import service.center.CovCatSubCodeData;
import service.center.LookupCatValue;
import service.center.MainInsurance;
import service.center.MainInsureDetailCreate;
import service.center.WorkFlowCoverage;
import service.center.WorkFlowProduct;
import service.ctrl.CoverageCatData;
import service.ctrl.CoverageData;
import service.ctrl.ParticipantData;
import service.ctrl.PolicyWordingControlData;
import service.ctrl.ProductData;
import service.fnc.ConstantValues;
import service.fnc.PDFFnc;
import service.product.ProductRateLayoutPremAccessData;
import service.product.ctrl.ProductControlData;
import service.product.ProductAccesData;
import service.rider.EndorseData;
import service.rider.RiderAccessData;
import service.rider.RiderOLAccessData;
import utility.adc.ServiceForProductFactory;

/**
 * Servlet implementation class ProductCL_GetData_Servlet
 */
@WebServlet("/ProductCL_GetData_Servlet")
public class ProductCL_GetData_Servlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	ProductAccesData pim;
	private String userId;
	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public ProductCL_GetData_Servlet() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		// doGet(request, response);
		HttpSession session = request.getSession();
		String getuserID = session.getAttribute("userID").toString();
		if (!getuserID.equals("")) {
			userId =  getuserID ;
		}else {
			System.out.println("================== NO USER ====================");
		}
		processRequest(request, response);
	}

	protected void processRequest(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		try {
			System.out.println("===============ProductCL_GetData_Servlet==============");
			// session = request.getSession();
			response.setCharacterEncoding("UTF-8");
			response.setContentType("application/json");
			PrintWriter out = response.getWriter();
			String responseText = "";
			String json = "";
			String method = request.getParameter("method");
			JSONObject responsejson = new JSONObject();
			MainInsuranceService mis = new MainInsuranceService();
			ArrayList<Product> caseAll_return;
			caseAll_return = mis.GetCaseProduct();
			
			String groupName			= request.getParameter("groupName");
			ConstantValues.GROUP_NAME 	= groupName;
			
			if (method.equals("getProductCL")) {
				JSONArray productCL_data_jsonArray = new JSONArray();
				ArrayList<LookupCatValueAcessData> listStatus	= new LookupCatValue().searchLookupCatValue(new String []{"26"});
				for (int i = 0; i < caseAll_return.size(); i++) {
					JSONObject productCL_data_json = new JSONObject();
					productCL_data_json.put("insuranceNo", caseAll_return.get(i).getPrd_code());
					productCL_data_json.put("nameTH", caseAll_return.get(i).getName_th());
					productCL_data_json.put("market_nameTH", caseAll_return.get(i).getMarket_name_th());
					productCL_data_json.put("status", getStatus(listStatus,caseAll_return.get(i).getStatus()));
					//productCL_data_json.put("status", caseAll_return.get(i).getStatus());
					productCL_data_jsonArray.put(productCL_data_json);
				}
				responsejson.put("ProductCL_Data", productCL_data_jsonArray);
				responseText = responsejson.toString();
			} else if (method.equals("getCaseProductCL")) {
				try {
					String pass_Insurance 	= request.getParameter("pass_Insurance");
					String prd_code1 		= request.getParameter("prd_code");
					//Benz
					FreezePolicyValue fpv = new FreezePolicyValue();
					fpv.set_product_value(pass_Insurance);
					//
					for (int i = 0; i < caseAll_return.size(); i++) {
						if (caseAll_return.get(i).getPrd_code().equals(prd_code1)) {
						
							pim = new ProductAccesData(caseAll_return.get(i));
						} 
					}
					//find lookup layout file 
					MainInsureDetailCreate mdc 				= new MainInsureDetailCreate ();
					ArrayList<RateCatAccessData> 			datareturnDet;
					
					/// Table Product
					String productCode = "";// Product
					String coreBiz = "";// Product
					String nameTH = "";// Product
					String nameEN = "";// Product
					String marketing_nameTH = "";// Product
					String marketing_nameEN = "";// Product
					String additional_contract_types = "";// Product
					String prd_design = "";// Product
					boolean fin_acc = false;// Product
					boolean insurance = false;// Product
					boolean is_premInstall = false;
					String score_aml = "";// Product
					String loan_type = "";// Product
					String fyp_credit = "";// Product
					String ryp_credit = "";// Product
					String underwrite_opt = "";// Product
					int distribution_Channel = 0;// Product
					int sale_channel = 0;// Product
					String partner = "";// Product
					String first_beneficiary = "";// Product
					String max_commission = "";// Product

					/// Table Participant
					String prd_rider_code 	= "";
					String partic_type 		= "";
					int min_issue_age 		= 0;
					int max_issue_age 		= 0;
					int max_insure_age 		= 0;
					String max_insure_age_unit = "";
					String sex 				= "";
					String status 			= "";
					JSONArray mode_jsonArray = new JSONArray();

					/////////////////////////// ข้อมูลทั่วไป Basic Information////////////////////
					if (pim.getListProduct().size() != 0) {
						for (int i = 0; i < pim.getListProduct().size(); i++) {
							productCode = pim.getListProduct().get(i).getPrd_code();
							coreBiz = pim.getListProduct().get(i).getCore_biz_prd_code();
							nameTH = pim.getListProduct().get(i).getName_th();
							nameEN = pim.getListProduct().get(i).getName_en();
							//Benz 16-08-2019 /////
							status = pim.getListProduct().get(i).getStatus();
							marketing_nameTH = pim.getListProduct().get(i).getMarket_name_th();
							marketing_nameEN = pim.getListProduct().get(i).getMarket_name_en();
							additional_contract_types = pim.getListProduct().get(i).getPrd_design();
							if (pim.getListProduct().get(i).getIs_fin_acc() == true) {
								fin_acc = true;
							}
							if (pim.getListProduct().get(i).getIs_insurance() == true) {
								insurance = true;
							}
							if( pim.getListProduct().get(i).getIs_prem_install() == true) {
								is_premInstall = true;
							}
							if (pim.getListProduct().get(i).getScore_aml().equals("")) {
								score_aml = "NONE";
							}else {
								score_aml = pim.getListProduct().get(i).getScore_aml();
							}
							loan_type = pim.getListProduct().get(i).getLoan_type();
							fyp_credit = pim.getListProduct().get(i).getFyp_credit_card();
							ryp_credit = pim.getListProduct().get(i).getRyp_credit_card();
							underwrite_opt = pim.getListProduct().get(i).getUnderwrite_opt();
							distribution_Channel = pim.getListProduct().get(i).getDist_chan_id();
							sale_channel = pim.getListProduct().get(i).getSale_chan_id();
							partner = pim.getListProduct().get(i).getSale_partner_code();
							first_beneficiary = pim.getListProduct().get(i).getFirst_beneficiary();
							if (pim.getListProduct().get(i).getMax_commission() != null) {
								BigDecimal bd_max_commission = new BigDecimal(
										pim.getListProduct().get(i).getMax_commission().toString());
								max_commission = (bd_max_commission).toString();
							}
							prd_design = pim.getListProduct().get(i).getPrd_design();
						}
					}
					/////////////////////////////////////////////////////////////////////////////

					JSONArray age_coordinates_jsonArray 	= new JSONArray();
					ArrayList<Coverage_cat> ListCoverage_cat = new ArrayList<>();
					ArrayList<Product> ListProductd 		= new ArrayList<>();
					 ArrayList<Rider> ListProductdRider 	= new ArrayList<>();
					JSONArray type_coverage_jsonArray 		= new JSONArray();
					String ridercode 						= "";
					JSONArray	type_jsonArray				= new JSONArray();
					String typeEndose 						= "";
					if (pim.getListParticipant().size() != 0) {
						String[] listCov_cat_id = new String[pim.getListParticipant().size()]; // 10 is the length of the
						for (int i = 0; i < pim.getListParticipant().size(); i++) {
							JSONObject age_coordinates_json = new JSONObject();
							age_coordinates_json.put("prd_code", pim.getListParticipant().get(i).getPrd_code());
							age_coordinates_json.put("prd_rider_code",pim.getListParticipant().get(i).getPrd_rider_code());
							
							if (pim.getListParticipant().get(i).getPrd_code().equals(pim.getListParticipant().get(i).getPrd_rider_code())) {
								for (int ii = 0; ii < pim.getListProduct().size(); ii++) {
									if (pim.getListProduct().get(ii).getPrd_code().equals(pim.getListParticipant().get(i).getPrd_rider_code())) {
										age_coordinates_json.put("cov_code",pim.getListProduct().get(ii).getCov_code());
										listCov_cat_id[i] = Integer.toString(pim.getListProduct().get(ii).getCov_cat_id());
									}
								}
							}else {
								ridercode = pim.getListParticipant().get(i).getPrd_rider_code();
								ProductControlData pcd = new ProductControlData();
								ListProductd = pcd.searchRidercode(ridercode);
								for (int j = 0; j < ListProductd.size(); j++) {
									age_coordinates_json.put("cov_code",ListProductd.get(j).getCov_code());
									listCov_cat_id[i] = Integer.toString(ListProductd.get(j).getCov_cat_id());
								}
								///Benz search ProductRider 05-11-2019
								ListProductdRider =	pcd.searchProductRiderByPrdCode(pim.getListParticipant().get(i).getPrd_rider_code());
								for (int j = 0; j < ListProductdRider.size(); j++) {
									if (ListProductdRider.get(j).getMain_rider_code() != null) {
										age_coordinates_json.put("main_rider_code",ListProductdRider.get(j).getMain_rider_code());

									}else {
										age_coordinates_json.put("main_rider_code","");

									}
								}
							}
							//listPrd_code[i] = ListProductd.get(j).getCov_code();
							
							age_coordinates_json.put("min_issue_age",
									Integer.toString(pim.getListParticipant().get(i).getMin_issue_age()));
							age_coordinates_json.put("min_issue_age_unit",
									pim.getListParticipant().get(i).getMin_issue_age_unit());
							age_coordinates_json.put("max_issue_age",
									Integer.toString(pim.getListParticipant().get(i).getMax_issue_age()));
							age_coordinates_json.put("max_issue_age_unit",
									pim.getListParticipant().get(i).getMax_issue_age_unit());
							age_coordinates_json.put("max_insure_age",
									Integer.toString(pim.getListParticipant().get(i).getMax_insure_age()));
							age_coordinates_json.put("max_insure_age_unit",
									pim.getListParticipant().get(i).getMax_insure_age_unit());
							
							if (pim.getListParticipant().get(i).getPartic_type().equals("NONE")) {
								typeEndose = "E";
								age_coordinates_json.put("type",typeEndose);
							}else {
								age_coordinates_json.put("type","");
							}
							/// get cov_code
							prd_rider_code = pim.getListParticipant().get(i).getPrd_rider_code();
							//listPrd_code[i] = prd_rider_code;
							//
							age_coordinates_jsonArray.put(age_coordinates_json);
							if (pim.getListParticipant().get(i).getPrd_code().equals(pim.getListParticipant().get(i).getPrd_rider_code())) {
								sex	= pim.getListParticipant().get(i).getGender();
							}
						}
						//**********************************************************
						ArrayList<String[]> arr_Lv3 = new ArrayList<>();
						arr_Lv3 = pim.getListProductData();	
						if (arr_Lv3.size() != 0) {
							for(int i=0; i<arr_Lv3.size() ; i++) {
								String prd_code = "";
								String cov_code = "";
								String cov_cat_id = "";
								String cat_code = "";
								String[] listarr_Lv3 		= arr_Lv3.get(i);
								JSONObject arr_type_JSONObject 	= new JSONObject();
								JSONArray type2_jsonArray = new JSONArray();
								for (int ii = 0; ii < listarr_Lv3.length; ii++) {
									JSONObject type_coverage_json = new JSONObject();
									if(ii == 0 ) {
										prd_code 			= listarr_Lv3[ii];
										type_coverage_json.put("prd_code",prd_code);
									}
									else if (ii == 1) {
										cov_code			= listarr_Lv3[ii];
										type_coverage_json.put("cov_code",cov_code);
									}else if (ii == 2) {
										 cov_cat_id			= listarr_Lv3[ii];	
										type_coverage_json.put("cov_cat_id",cov_cat_id);
									}else if (ii == 3) {
										cat_code 	= listarr_Lv3[ii];
										type_coverage_json.put("cat_code",cat_code);
									}
									type2_jsonArray.put(type_coverage_json);
								}
								arr_type_JSONObject.put("type", type2_jsonArray);
								type_jsonArray.put(arr_type_JSONObject);
							}
						}
						
						
					//	JSONArray jsonArr_benefitsCoverage = new JSONArray(aa);
					//	System.out.println("------------------------/"+jsonArr_benefitsCoverage.toString());
						
						
						
//						CoverageCatData cd = new CoverageCatData();
//						ArrayList<String[]> arr_Lv3 =  new ArrayList<>(); 
//						arr_Lv3 					= cd.searchCoverageCatLv3_ByCov_Code(listCov_cat_id);
//						if (arr_Lv3.size() != 0) {
//							for (int i = 0; i < arr_Lv3.size(); i++) {
//								String cov_cat_id	= "";
//								String cov_code 	= "";
//								String cat_code 	= "";
//								String[] listarr_Lv3 		= arr_Lv3.get(i);
//								JSONObject arr_type_JSONObject 	= new JSONObject();
//								JSONArray type2_jsonArray = new JSONArray();
//								for (int ii = 0; ii < listarr_Lv3.length; ii++) {
//									JSONObject type_coverage_json = new JSONObject();
//									if (ii == 0) {
//										cov_cat_id 			= listarr_Lv3[ii];
//										type_coverage_json.put("cov_cat_id",cov_cat_id);
//									}else if (ii == 1) {
//										cov_code 			= listarr_Lv3[ii];	
//										type_coverage_json.put("cov_code",cov_code);
//									}else if (ii == 2) {
//										cat_code 	= listarr_Lv3[ii];
//										type_coverage_json.put("text",cat_code);
//									}
//									type2_jsonArray.put(type_coverage_json);
//								}
//								arr_type_JSONObject.put("type", type2_jsonArray);
//								type_jsonArray.put(arr_type_JSONObject);
//							}
//						}
						/*ListCoverage_cat = cd.searchCoverageCatLv3_ByCov_Code(listPrd_code);
						if (ListCoverage_cat.size() != 0) {
							for (int i = 0; i < ListCoverage_cat.size(); i++) {
								JSONObject type_coverage_json = new JSONObject();
								type_coverage_json.put("text", ListCoverage_cat.get(i).getCat_code());
								type_coverage_json.put("Cov_cat_id", String.valueOf(ListCoverage_cat.get(i).getCov_cat_id()));
								type_coverage_jsonArray.put(type_coverage_json);
							}
						}*/
					}

					/////////////////////////////////////////////////////////////////////////////
					//
					JSONArray tableBasePlan_jsonArray = new JSONArray();
					JSONArray tableRider_jsonArray = new JSONArray();
					JSONArray fix_jsonArray = new JSONArray();
					JSONArray cov_code_jsonArray = new JSONArray();
					JSONArray nameTH_jsonArray = new JSONArray();
					JSONArray file_jsonArray = new JSONArray();
					JSONArray lv3_jsonArray = new JSONArray();
					JSONArray rate_lyout_jsonArray = new JSONArray();

					if (pim.getListProductRider().size() != 0) {
						String[] listPrd_code = new String[pim.getListProductRider().size()];
						String[] listcov_code = new String[pim.getListProductRider().size()];
						CoverageCatData cd = new CoverageCatData();
						// check type
						for (int i = 0; i < pim.getListProductRider().size(); i++) {
							JSONObject basePlan_json = new JSONObject();
							listPrd_code[i] = pim.getListProductRider().get(i).getPrd_rider_code(); // Prd_Rider_Code
							basePlan_json.put("fix_sa_amt", pim.getListProductRider().get(i).getFix_sa_amt());
							basePlan_json.put("flag_type", pim.getListProductRider().get(i).getFlag_type());
							fix_jsonArray.put(basePlan_json);

						}
						// Lv3
						ArrayList<Coverage_cat> ListCoverage_cat1 =  new ArrayList<>(); 
						ListCoverage_cat1 = cd.searchCoverageCatLv3_ByPrd_Code(listPrd_code);
						if (ListCoverage_cat1.size() != 0) {
							for (int ii = 0; ii < ListCoverage_cat1.size(); ii++) {
								JSONObject type_coverage_json = new JSONObject();
								type_coverage_json.put("type_coverage", ListCoverage_cat1.get(ii).getCat_code());
								type_coverage_json.put("cov_cat_id",String.valueOf( ListCoverage_cat1.get(ii).getCov_cat_id()));
								lv3_jsonArray.put(type_coverage_json);
							}
						}
						// get cov_Code
						ArrayList<Product> ListProduct = cd.searchCov_code(listPrd_code);
						if (ListProduct.size() != 0) {
							for (int ii = 0; ii < ListProduct.size(); ii++) {
								JSONObject cov_code_json = new JSONObject();
								cov_code_json.put("cov_code", ListProduct.get(ii).getCov_code());
								cov_code_json.put("prd_code", ListProduct.get(ii).getPrd_code());
								cov_code_jsonArray.put(cov_code_json);
								listcov_code[ii] = ListProduct.get(ii).getCov_code();// Cov_Code
							}
						}
						// get name
						ArrayList<Coverage> ListCoverage = cd.searchnameTH(listcov_code);
						
						
						if (ListCoverage.size() != 0) {
							for (int ii = 0; ii < ListCoverage.size(); ii++) {
								JSONObject nameTH_json = new JSONObject();
								nameTH_json.put("nameTH", ListCoverage.get(ii).getName_th());
								nameTH_jsonArray.put(nameTH_json);
							}
						}
					}
					////////////////// product.product.rate_layout
					if (pim.getListRateLayout().size() != 0) {
						String[] listFile_Id = new String[pim.getListRateLayout().size()]; // 10 is the length of the
																							// array.
						for (int i = 0; i < pim.getListRateLayout().size(); i++) {
							JSONObject rate_lyout_json = new JSONObject();
							listFile_Id[i] = Integer.toString(pim.getListRateLayout().get(i).getFile_id());// File_Id
							rate_lyout_json.put("prd_code", pim.getListRateLayout().get(i).getPrd_code());
							rate_lyout_json.put("prd_rider_code", pim.getListRateLayout().get(i).getPrd_rider_code());
							rate_lyout_json.put("rate_cat_id", Integer.toString(pim.getListRateLayout().get(i).getRate_cat_id()));
							rate_lyout_json.put("Rate_layout_id", Integer.toString(pim.getListRateLayout().get(i).getRate_layout_id()));
							rate_lyout_json.put("File_Id", Integer.toString(pim.getListRateLayout().get(i).getFile_id()));
							rate_lyout_jsonArray.put(rate_lyout_json);
						}
						// Get File
						CoverageCatData cd = new CoverageCatData();
						ArrayList<File> ListFile = cd.searchFile(listFile_Id);
						for (int ii = 0; ii < ListFile.size(); ii++) {
							JSONObject file_json = new JSONObject();
							file_json.put("filename", ListFile.get(ii).getFile_name());
							file_json.put("fileID", ListFile.get(ii).getFile_id());
							file_json.put("fileUrl", ListFile.get(ii).getFile_url());
							file_jsonArray.put(file_json);
						}
					}
					
					JSONArray pm_Rate_BasePlab_Array 	= new JSONArray();
					JSONArray pm_Rate_Rider_Array 		= new JSONArray();
					JSONObject json_nar 				= new JSONObject();
					JSONArray nar_BasePlab_Array 		= new JSONArray();
					JSONArray nar_Rider_Array 			= new JSONArray();
					JSONObject json_pm_Rate 			= new JSONObject();
					JSONObject json_BasePlan_jsonArray 	= new JSONObject();
					JSONObject json_BaseRider_json 		= new JSONObject();
					
					JSONArray arr_add_pm_Rate 			= new JSONArray();
					JSONArray arr_add_nar	 			= new JSONArray();
					///////////
					String type = "";
					for (int i = 0; i < fix_jsonArray.length(); i++) {
						JSONObject json_fix 				= fix_jsonArray.getJSONObject(i);
						JSONObject json_lv3 				= lv3_jsonArray.getJSONObject(i);
						JSONObject json_cov_code 			= cov_code_jsonArray.getJSONObject(i);
						JSONObject json_nameTH 				= nameTH_jsonArray.getJSONObject(i);
						JSONObject json_rate_lyout2			= new JSONObject();
						
						type = String.valueOf(json_fix.get("flag_type"));
						if (type.equals("B")) {
							pm_Rate_BasePlab_Array 	= new JSONArray();
							arr_add_pm_Rate 		= new JSONArray();
							nar_BasePlab_Array		= new JSONArray();
							arr_add_nar				= new JSONArray();
							
							json_BasePlan_jsonArray.put("flag_type", String.valueOf(json_fix.get("flag_type")));
							json_BasePlan_jsonArray.put("cov_code", String.valueOf(json_cov_code.get("cov_code")));
							json_BasePlan_jsonArray.put("prd_code", String.valueOf(json_cov_code.get("prd_code")));
							json_BasePlan_jsonArray.put("nameTH", String.valueOf(json_nameTH.get("nameTH")));
							json_BasePlan_jsonArray.put("fix_sa_amt", String.valueOf(json_fix.get("fix_sa_amt")));
							
							for (int j = 0; j < rate_lyout_jsonArray.length(); j++) {
								 json_rate_lyout2 				= rate_lyout_jsonArray.getJSONObject(j);
								if (json_rate_lyout2.get("prd_code").equals(json_rate_lyout2.get("prd_rider_code")) && json_cov_code.get("prd_code").equals(json_rate_lyout2.get("prd_rider_code"))) {
									if (Integer.parseInt(json_rate_lyout2.getString("rate_cat_id")) == 1 || Integer.parseInt(json_rate_lyout2.getString("rate_cat_id")) == 2) {
										//setFile
										for (int jj = 0; jj < file_jsonArray.length(); jj++) {
											json_pm_Rate = new JSONObject();
											JSONObject json_file2		 	= file_jsonArray.getJSONObject(jj);
											if (json_rate_lyout2.getInt("File_Id") == json_file2.getInt("fileID")) {
												
												//Pun add Lookup layoutDet 18-12-2019
												JSONArray tb_layoutdet1_jsonArray 	= new JSONArray(); 
												JSONArray tb_layoutdet2_jsonArray 	= new JSONArray(); 
												String[] arrRateCat = new String[1]; 
												arrRateCat[0] = String.valueOf(json_rate_lyout2.get("rate_cat_id"));
												datareturnDet = mdc.searchTax(arrRateCat);
												if (datareturnDet.size() > 0) {
													for (int js = 0; js < datareturnDet.size(); js++) {
														for (int jjs = 0; jjs < datareturnDet.get(js).getListRateLayout().size(); jjs++) {
															tb_layoutdet1_jsonArray 	= new JSONArray(); 
															JSONObject tb_layoutdet_JSONObject 	= new JSONObject();
															for (int jjj = 0; jjj < datareturnDet.get(js).getListRateLayout().get(jjs).getListRateLayoutDet().size(); jjj++) {
																JSONObject json_rateLayoutDet = new JSONObject();
																json_rateLayoutDet.put("rate_layout_id",datareturnDet.get(js).getListRateLayout().get(jjs).getListRateLayoutDet().get(jjj).getRate_layout_id());
																json_rateLayoutDet.put("column_name",datareturnDet.get(js).getListRateLayout().get(jjs).getListRateLayoutDet().get(jjj).getColumn_name());
																json_rateLayoutDet.put("column_len",datareturnDet.get(js).getListRateLayout().get(jjs).getListRateLayoutDet().get(jjj).getColumn_len());
																tb_layoutdet1_jsonArray.put(json_rateLayoutDet);
															}
															tb_layoutdet_JSONObject.put("rate_layout_det",tb_layoutdet1_jsonArray);
															tb_layoutdet2_jsonArray.put(tb_layoutdet_JSONObject);
														};
													}
												}
												
												json_pm_Rate.put("rate_cat_id", String.valueOf(json_rate_lyout2.get("rate_cat_id")));
												json_pm_Rate.put("rate_layout_id",String.valueOf(json_rate_lyout2.get("Rate_layout_id")));
												json_pm_Rate.put("filename", String.valueOf(json_file2.get("filename")));
												json_pm_Rate.put("fileID", String.valueOf(json_file2.get("fileID")));
												json_pm_Rate.put("ref", String.valueOf(json_file2.get("fileUrl")));
												json_pm_Rate.put("rate_layout_det", tb_layoutdet2_jsonArray);
												arr_add_pm_Rate.put(json_pm_Rate);
											}
										}
									} 
									if (Integer.parseInt(json_rate_lyout2.getString("rate_cat_id")) == 12) {	
										for (int jj = 0; jj < file_jsonArray.length(); jj++) {
												json_nar = new JSONObject();
												JSONObject json_file2		 	= file_jsonArray.getJSONObject(jj);
												if (json_rate_lyout2.getInt("File_Id") == json_file2.getInt("fileID")) {
													
													//Pun add Lookup layoutDet 18-12-2019
													JSONArray tb_layoutdet1_jsonArray 	= new JSONArray(); 
													JSONArray tb_layoutdet2_jsonArray 	= new JSONArray(); 
													String[] arrRateCat = new String[1]; 
													arrRateCat[0] = String.valueOf(json_rate_lyout2.get("rate_cat_id"));
													datareturnDet = mdc.searchTax(arrRateCat);
													if (datareturnDet.size() > 0) {
														for (int js = 0; js < datareturnDet.size(); js++) {
															for (int jjs = 0; jjs < datareturnDet.get(js).getListRateLayout().size(); jjs++) {
																tb_layoutdet1_jsonArray 	= new JSONArray(); 
																JSONObject tb_layoutdet_JSONObject 	= new JSONObject();
																for (int jjj = 0; jjj < datareturnDet.get(js).getListRateLayout().get(jjs).getListRateLayoutDet().size(); jjj++) {
																	JSONObject json_rateLayoutDet = new JSONObject();
																	json_rateLayoutDet.put("rate_layout_id",datareturnDet.get(js).getListRateLayout().get(jjs).getListRateLayoutDet().get(jjj).getRate_layout_id());
																	json_rateLayoutDet.put("column_name",datareturnDet.get(js).getListRateLayout().get(jjs).getListRateLayoutDet().get(jjj).getColumn_name());
																	json_rateLayoutDet.put("column_len",datareturnDet.get(js).getListRateLayout().get(jjs).getListRateLayoutDet().get(jjj).getColumn_len());
																	tb_layoutdet1_jsonArray.put(json_rateLayoutDet);
																}
																tb_layoutdet_JSONObject.put("rate_layout_det",tb_layoutdet1_jsonArray);
																tb_layoutdet2_jsonArray.put(tb_layoutdet_JSONObject);
															};
														}
													}
													
													json_nar.put("rate_cat_id", String.valueOf(json_rate_lyout2.get("rate_cat_id")));
													json_nar.put("rate_layout_id", String.valueOf(json_rate_lyout2.get("Rate_layout_id")));
													json_nar.put("filename", String.valueOf(json_file2.get("filename")));
													json_nar.put("fileID", String.valueOf(json_file2.get("fileID")));
													json_nar.put("ref", String.valueOf(json_file2.get("fileUrl")));
													json_nar.put("rate_layout_det", tb_layoutdet2_jsonArray);
													arr_add_nar.put(json_nar);
												}	
										}
									}
								}
							}	
							pm_Rate_BasePlab_Array.put(arr_add_pm_Rate);
							nar_BasePlab_Array.put(arr_add_nar);
							//Base Plan
							json_BasePlan_jsonArray.put("pm_rate", pm_Rate_BasePlab_Array);
							json_BasePlan_jsonArray.put("nar", nar_BasePlab_Array);
							tableBasePlan_jsonArray.put(json_BasePlan_jsonArray);
						} else if (type.equals("R")) {
							pm_Rate_Rider_Array = new JSONArray();
							arr_add_pm_Rate 	= new JSONArray();
							nar_Rider_Array		= new JSONArray();
							arr_add_nar			= new JSONArray();
							
							json_BaseRider_json = new JSONObject();
							json_BaseRider_json.put("type_coverage",String.valueOf(json_lv3.get("type_coverage")));
							json_BaseRider_json.put("flag_type", String.valueOf(json_fix.get("flag_type")));
							json_BaseRider_json.put("cov_code", String.valueOf(json_cov_code.get("cov_code")));
							json_BaseRider_json.put("prd_code", String.valueOf(json_cov_code.get("prd_code")));
							json_BaseRider_json.put("fix_sa_amt", String.valueOf(json_fix.get("fix_sa_amt")));
							json_BaseRider_json.put("nameTH", String.valueOf(json_nameTH.get("nameTH")));
							
							for (int j = 0; j < rate_lyout_jsonArray.length(); j++) {
								 json_rate_lyout2 				= rate_lyout_jsonArray.getJSONObject(j);
								if (!json_rate_lyout2.get("prd_code").equals(json_rate_lyout2.get("prd_rider_code")) && json_cov_code.get("prd_code").equals(json_rate_lyout2.get("prd_rider_code"))) {
									if (Integer.parseInt(json_rate_lyout2.getString("rate_cat_id")) == 1 || Integer.parseInt(json_rate_lyout2.getString("rate_cat_id")) == 2 || Integer.parseInt(json_rate_lyout2.getString("rate_cat_id")) == 15 || Integer.parseInt(json_rate_lyout2.getString("rate_cat_id")) == 16) {
										//setFile
										for (int jj = 0; jj < file_jsonArray.length(); jj++) {
											json_pm_Rate = new JSONObject();
											JSONObject json_file2		 	= file_jsonArray.getJSONObject(jj);
											if (json_rate_lyout2.getInt("File_Id") == json_file2.getInt("fileID")) {
												
												//Pun add Lookup layoutDet 18-12-2019
												JSONArray tb_layoutdet1_jsonArray 	= new JSONArray(); 
												JSONArray tb_layoutdet2_jsonArray 	= new JSONArray(); 
												String[] arrRateCat = new String[1]; 
												arrRateCat[0] = String.valueOf(json_rate_lyout2.get("rate_cat_id"));
												datareturnDet = mdc.searchTax(arrRateCat);
												if (datareturnDet.size() > 0) {
													for (int js = 0; js < datareturnDet.size(); js++) {
														for (int jjs = 0; jjs < datareturnDet.get(js).getListRateLayout().size(); jjs++) {
															tb_layoutdet1_jsonArray 	= new JSONArray(); 
															JSONObject tb_layoutdet_JSONObject 	= new JSONObject();
															for (int jjj = 0; jjj < datareturnDet.get(js).getListRateLayout().get(jjs).getListRateLayoutDet().size(); jjj++) {
																JSONObject json_rateLayoutDet = new JSONObject();
																json_rateLayoutDet.put("rate_layout_id",datareturnDet.get(js).getListRateLayout().get(jjs).getListRateLayoutDet().get(jjj).getRate_layout_id());
																json_rateLayoutDet.put("column_name",datareturnDet.get(js).getListRateLayout().get(jjs).getListRateLayoutDet().get(jjj).getColumn_name());
																json_rateLayoutDet.put("column_len",datareturnDet.get(js).getListRateLayout().get(jjs).getListRateLayoutDet().get(jjj).getColumn_len());
																tb_layoutdet1_jsonArray.put(json_rateLayoutDet);
															}
															tb_layoutdet_JSONObject.put("rate_layout_det",tb_layoutdet1_jsonArray);
															tb_layoutdet2_jsonArray.put(tb_layoutdet_JSONObject);
														};
													}
												}
												
												json_pm_Rate.put("rate_cat_id", String.valueOf(json_rate_lyout2.get("rate_cat_id")));
												json_pm_Rate.put("rate_layout_id",String.valueOf(json_rate_lyout2.get("Rate_layout_id")));
												json_pm_Rate.put("filename", String.valueOf(json_file2.get("filename")));
												json_pm_Rate.put("fileID", String.valueOf(json_file2.get("fileID")));
												json_pm_Rate.put("ref", String.valueOf(json_file2.get("fileUrl")));
												json_pm_Rate.put("rate_layout_det", tb_layoutdet2_jsonArray);
												arr_add_pm_Rate.put(json_pm_Rate);
											}
										}
									} 
									if (Integer.parseInt(json_rate_lyout2.getString("rate_cat_id")) == 12) {	
										for (int jj = 0; jj < file_jsonArray.length(); jj++) {
												json_nar = new JSONObject();
												JSONObject json_file2		 	= file_jsonArray.getJSONObject(jj);
												if (json_rate_lyout2.getInt("File_Id") == json_file2.getInt("fileID")) {
													
													//Pun add Lookup layoutDet 18-12-2019
													JSONArray tb_layoutdet1_jsonArray 	= new JSONArray(); 
													JSONArray tb_layoutdet2_jsonArray 	= new JSONArray(); 
													String[] arrRateCat = new String[1]; 
													arrRateCat[0] = String.valueOf(json_rate_lyout2.get("rate_cat_id"));
													datareturnDet = mdc.searchTax(arrRateCat);
													if (datareturnDet.size() > 0) {
														for (int js = 0; js < datareturnDet.size(); js++) {
															for (int jjs = 0; jjs < datareturnDet.get(js).getListRateLayout().size(); jjs++) {
																tb_layoutdet1_jsonArray 	= new JSONArray(); 
																JSONObject tb_layoutdet_JSONObject 	= new JSONObject();
																for (int jjj = 0; jjj < datareturnDet.get(js).getListRateLayout().get(jjs).getListRateLayoutDet().size(); jjj++) {
																	JSONObject json_rateLayoutDet = new JSONObject();
																	json_rateLayoutDet.put("rate_layout_id",datareturnDet.get(js).getListRateLayout().get(jjs).getListRateLayoutDet().get(jjj).getRate_layout_id());
																	json_rateLayoutDet.put("column_name",datareturnDet.get(js).getListRateLayout().get(jjs).getListRateLayoutDet().get(jjj).getColumn_name());
																	json_rateLayoutDet.put("column_len",datareturnDet.get(js).getListRateLayout().get(jjs).getListRateLayoutDet().get(jjj).getColumn_len());
																	tb_layoutdet1_jsonArray.put(json_rateLayoutDet);
																}
																tb_layoutdet_JSONObject.put("rate_layout_det",tb_layoutdet1_jsonArray);
																tb_layoutdet2_jsonArray.put(tb_layoutdet_JSONObject);
															};
														}
													}
													
													json_nar.put("rate_cat_id", String.valueOf(json_rate_lyout2.get("rate_cat_id")));
													json_nar.put("rate_layout_id", String.valueOf(json_rate_lyout2.get("Rate_layout_id")));
													json_nar.put("filename", String.valueOf(json_file2.get("filename")));
													json_nar.put("fileID", String.valueOf(json_file2.get("fileID")));
													json_nar.put("ref", String.valueOf(json_file2.get("fileUrl")));
													json_nar.put("rate_layout_det", tb_layoutdet2_jsonArray);
													arr_add_nar.put(json_nar);
												}	
										}
									}
								}
							}	
							pm_Rate_Rider_Array.put(arr_add_pm_Rate);
							nar_Rider_Array.put(arr_add_nar);
							//Rider
							json_BaseRider_json.put("pm_rate", arr_add_pm_Rate);
							json_BaseRider_json.put("nar", arr_add_nar);
							tableRider_jsonArray.put(json_BaseRider_json);
						}
					}
					///แบ่งจ่าย 
					JSONArray premInstall_jsonArray = new JSONArray();
					if (pim.getListPremInstall().size() != 0) {
						for (int i = 0; i < pim.getListPremInstall().size(); i++) {
							JSONObject json_premInstall = new JSONObject();
							json_premInstall.put("period", pim.getListPremInstall().get(i).getPeriod());
							json_premInstall.put("install_rate", pim.getListPremInstall().get(i).getInstall_rate());
							premInstall_jsonArray.put(json_premInstall);
						}
					}
				////Benz 12-09-2019 get new Status
					String status_PD = "";
					WorkFlowProduct wfd = new WorkFlowProduct();
					ArrayList<Product_task> arr_getProduct_task = wfd.searchProductTask();
					for (int i = 0; i < arr_getProduct_task.size(); i++) {
						if (arr_getProduct_task.get(i).getDepartment().equals("PD_Test") || 
								arr_getProduct_task.get(i).getDepartment().equals("PD1") ||
								arr_getProduct_task.get(i).getDepartment().equals("PD2") ||
								arr_getProduct_task.get(i).getDepartment().equals("PD3")) {
							status_PD = arr_getProduct_task.get(i).getApprove_status();
						}
					}
					///////////////////////////////////////////////////////////
					JSONArray basic_Info_jsonArray = new JSONArray();
					JSONObject json_basic_Info = new JSONObject();
					json_basic_Info.put("passInsurance", productCode);
					json_basic_Info.put("coreBiz", coreBiz);
					json_basic_Info.put("nameTH", nameTH);
					json_basic_Info.put("nameEN", nameEN);
					json_basic_Info.put("marketing_nameTH", marketing_nameTH);
					json_basic_Info.put("marketing_nameEN", marketing_nameEN);
					json_basic_Info.put("additional_contract_types", additional_contract_types);
					json_basic_Info.put("fin_acc", fin_acc);
					json_basic_Info.put("insurance", insurance);
					json_basic_Info.put("score_aml", score_aml);
					json_basic_Info.put("loan_type", loan_type);
					json_basic_Info.put("fyp_credit", fyp_credit);
					json_basic_Info.put("ryp_credit", ryp_credit);
					json_basic_Info.put("underwrite_opt", underwrite_opt);
					json_basic_Info.put("distribution_Channel", Integer.toString(distribution_Channel));
					json_basic_Info.put("sale_channel", Integer.toString(sale_channel));
					json_basic_Info.put("partner", partner);
					json_basic_Info.put("first_beneficiary", first_beneficiary);
					json_basic_Info.put("max_commission", max_commission);
					json_basic_Info.put("age_coordinates", age_coordinates_jsonArray);
					json_basic_Info.put("gender", sex);
					json_basic_Info.put("type_coverage", type_jsonArray);
					json_basic_Info.put("prd_design", prd_design);
					json_basic_Info.put("basePlan", tableBasePlan_jsonArray);
					json_basic_Info.put("rider", tableRider_jsonArray);
					json_basic_Info.put("premInstall", premInstall_jsonArray);
					json_basic_Info.put("is_premInstall", is_premInstall); //by pun 6/8/2019
					//Benz 16-08-2019
					json_basic_Info.put("status",status);
					json_basic_Info.put("status_PD",status_PD);
					basic_Info_jsonArray.put(json_basic_Info);
					responsejson.put("Tab_Basic_Information", basic_Info_jsonArray);

					////////////////////////////////// END///////////////////////////////////
					////////////////////////////// การคำนวนเบี้ยประกัน/////////////////////////
					String age_band = "";
					String balloon_prd_code = "";
					if (pim.getListProduct().size() != 0) {
						for (int i = 0; i < pim.getListProduct().size(); i++) {
							age_band = pim.getListProduct().get(i).getAge_band();
							if (pim.getListProduct().get(i).getBalloon_prd_code() != null) {
								balloon_prd_code = pim.getListProduct().get(i).getBalloon_prd_code();
							}else{
								balloon_prd_code = "";
							}
						}
					}
					JSONArray  limitCond_jsonArray		= new JSONArray();
					JSONArray  limitCondSerie_jsonArray	= new JSONArray();
					JSONArray  limit_seq1_jsonArray		= new JSONArray();
					JSONArray  limit_seq2_jsonArray		= new JSONArray();
					JSONArray  prem_collect_jsonArray	= new JSONArray();
					JSONArray  formula_jsonArray		= new JSONArray();
					
					JSONArray  SA_P_jsonArray			= new JSONArray();
					JSONArray  SMI_jsonArray			= new JSONArray();
					JSONArray  MI_jsonArray				= new JSONArray();
					
					
					if (pim.getListLimitCond().size() != 0) {
						for (int i = 0; i < pim.getListLimitCond().size(); i++) {
							JSONObject json_limitCond = new JSONObject();
							
							json_limitCond.put("Cond_seq", pim.getListLimitCond().get(i).getCond_seq());
							
							if (pim.getListLimitCond().get(i).getPrd_code().equals(pim.getListLimitCond().get(i).getPrd_rider_code())) {
								for (int ii = 0; ii < pim.getListProduct().size(); ii++) {
									if (pim.getListProduct().get(ii).getPrd_code().equals(pim.getListLimitCond().get(i).getPrd_rider_code())) {
										json_limitCond.put("Prd_rider_code", pim.getListProduct().get(ii).getCov_code());
									}
								}
							}else {
								json_limitCond.put("Prd_rider_code",pim.getListLimitCond().get(i).getPrd_rider_code());
							}
							limitCond_jsonArray.put(json_limitCond);
						}
					}
					if (pim.getListLimitCondSerie().size() != 0) {
						for (int i = 0; i < pim.getListLimitCondSerie().size(); i++) {
							JSONObject json_limitCondSerie = new JSONObject();
							json_limitCondSerie.put("Serie_no", pim.getListLimitCondSerie().get(i).getSerie_no());
							json_limitCondSerie.put("Cond_seq", pim.getListLimitCondSerie().get(i).getCond_seq());
							json_limitCondSerie.put("Min_base_amt", pim.getListLimitCondSerie().get(i).getMin_base_amt());
							json_limitCondSerie.put("Max_base_amt", pim.getListLimitCondSerie().get(i).getMax_base_amt());
							json_limitCondSerie.put("Sa_fix_compare", pim.getListLimitCondSerie().get(i).getSa_fix_compare());
							json_limitCondSerie.put("Sa_min_compare", pim.getListLimitCondSerie().get(i).getSa_min_compare());
							json_limitCondSerie.put("Sa_max_compare", pim.getListLimitCondSerie().get(i).getSa_max_compare());
							json_limitCondSerie.put("Prd_rider_code", pim.getListLimitCondSerie().get(i).getPrd_rider_code());
							limitCondSerie_jsonArray.put(json_limitCondSerie);
						}
					}
					if(pim.getListLimitCondAmt().size() != 0) {
						for (int i = 0; i < pim.getListLimitCondAmt().size(); i++) {
							JSONObject json_limit_cond_amt = new JSONObject();
							if (pim.getListLimitCondAmt().get(i).getLimit_seq() == 1) {
								json_limit_cond_amt.put("Serie_no", pim.getListLimitCondAmt().get(i).getSerie_no());
								json_limit_cond_amt.put("Limit_amt_type", pim.getListLimitCondAmt().get(i).getLimit_amt_type());
								json_limit_cond_amt.put("Limit_seq", pim.getListLimitCondAmt().get(i).getLimit_seq());
								json_limit_cond_amt.put("Limit_amt", pim.getListLimitCondAmt().get(i).getLimit_amt());
								json_limit_cond_amt.put("Limit_unit", pim.getListLimitCondAmt().get(i).getLimit_unit());
								json_limit_cond_amt.put("Limit_factor", pim.getListLimitCondAmt().get(i).getLimit_factor());
								json_limit_cond_amt.put("Prd_rider_code", pim.getListLimitCondAmt().get(i).getPrd_rider_code());
								limit_seq1_jsonArray.put(json_limit_cond_amt);
							}else if (pim.getListLimitCondAmt().get(i).getLimit_seq() == 2) {
								json_limit_cond_amt.put("Serie_no", pim.getListLimitCondAmt().get(i).getSerie_no());
								json_limit_cond_amt.put("Limit_amt_type", pim.getListLimitCondAmt().get(i).getLimit_amt_type());
								json_limit_cond_amt.put("Limit_seq", pim.getListLimitCondAmt().get(i).getLimit_seq());
								json_limit_cond_amt.put("Limit_amt", pim.getListLimitCondAmt().get(i).getLimit_amt());
								json_limit_cond_amt.put("Limit_unit", pim.getListLimitCondAmt().get(i).getLimit_unit());
								json_limit_cond_amt.put("Limit_factor", pim.getListLimitCondAmt().get(i).getLimit_factor());
								json_limit_cond_amt.put("Prd_rider_code", pim.getListLimitCondAmt().get(i).getPrd_rider_code());
								limit_seq2_jsonArray.put(json_limit_cond_amt);
							}
						}
					}
					if(pim.getListPrem_collect().size() != 0) {
						for (int i = 0; i < pim.getListPrem_collect().size(); i++) {
							JSONObject json_prem_collect = new JSONObject();
							json_prem_collect.put("Prem_flag", pim.getListPrem_collect().get(i).getPrem_flag());
							json_prem_collect.put("Collect_meth", pim.getListPrem_collect().get(i).getCollect_meth());
							prem_collect_jsonArray.put(json_prem_collect);
						}
					}
					if (pim.getListFormula().size() != 0) {
						for (int i = 0; i < pim.getListFormula().size(); i++) {
							
							if (pim.getListFormula().get(i).getFormula_cat_id() == 1) {
								JSONObject json_sa_p = new JSONObject();
								json_sa_p.put("Prd_rider_code", pim.getListFormula().get(i).getPrd_rider_code());
								json_sa_p.put("Formula_cat_id", pim.getListFormula().get(i).getFormula_cat_id());
								json_sa_p.put("Formula_id", pim.getListFormula().get(i).getFormula_id());
								SA_P_jsonArray.put(json_sa_p);
							}else if (pim.getListFormula().get(i).getFormula_cat_id() == 2) {
								JSONObject json_smi = new JSONObject();
								json_smi.put("Prd_rider_code", pim.getListFormula().get(i).getPrd_rider_code());
								json_smi.put("Formula_cat_id", pim.getListFormula().get(i).getFormula_cat_id());
								json_smi.put("Formula_id", pim.getListFormula().get(i).getFormula_id());
								SMI_jsonArray.put(json_smi);
							}else if (pim.getListFormula().get(i).getFormula_cat_id() == 3) {
								JSONObject json_mi = new JSONObject();
								json_mi.put("Prd_rider_code", pim.getListFormula().get(i).getPrd_rider_code());
								json_mi.put("Formula_cat_id", pim.getListFormula().get(i).getFormula_cat_id());
								json_mi.put("Formula_id", pim.getListFormula().get(i).getFormula_id());
								MI_jsonArray.put(json_mi);
							}else if (pim.getListFormula().get(i).getFormula_cat_id() == 4) {
								JSONObject json_formula = new JSONObject();
								json_formula.put("Prd_rider_code", pim.getListFormula().get(i).getPrd_rider_code());
								json_formula.put("Formula_cat_id", pim.getListFormula().get(i).getFormula_cat_id());
								json_formula.put("Formula_id", pim.getListFormula().get(i).getFormula_id());
								formula_jsonArray.put(json_formula);
							}
						}
					}
					
					JSONArray  cal_insurance_premiums_jsonArray	= new JSONArray();
					JSONObject json_cal_insurance_premiums = new JSONObject();
					json_cal_insurance_premiums.put("age_Band",age_band);
					json_cal_insurance_premiums.put("balloon_prd_code",balloon_prd_code);
					json_cal_insurance_premiums.put("limitCond",limitCond_jsonArray);
					json_cal_insurance_premiums.put("limitCondSerie",limitCondSerie_jsonArray);
					json_cal_insurance_premiums.put("limit_seq1",limit_seq1_jsonArray);
					json_cal_insurance_premiums.put("limit_seq2",limit_seq2_jsonArray);
					json_cal_insurance_premiums.put("prem_collect",prem_collect_jsonArray);
					json_cal_insurance_premiums.put("formula",formula_jsonArray);
					json_cal_insurance_premiums.put("SA_P",SA_P_jsonArray);
					json_cal_insurance_premiums.put("SMI",SMI_jsonArray);
					json_cal_insurance_premiums.put("MI",MI_jsonArray);
					cal_insurance_premiums_jsonArray.put(json_cal_insurance_premiums);
					responsejson.put("Tab_cal_insurance_premiums",cal_insurance_premiums_jsonArray);
					//
					////////////////////////////////// END///////////////////////////////////
					////////////////////////////// การใช้สิทธิ์ตามกรมธรรม์/////////////////////////
					
					String change_Type = "";
					if (pim.getListProductChange().size() != 0) {
						for (int i = 0; i < pim.getListProductChange().size(); i++) {
							change_Type = pim.getListProductChange().get(i).getChange_type();
						}
					}		
					JSONArray  formula_grantRightsInsure_jsonArray		= new JSONArray();
					
					if (pim.getListFormula().size() != 0) {
						for (int i = 0; i < pim.getListFormula().size(); i++) {
							JSONObject json_formula = new JSONObject();
							if (pim.getListFormula().get(i).getFormula_cat_id() == 5) {
								json_formula.put("Prd_rider_code", pim.getListFormula().get(i).getPrd_rider_code());
								json_formula.put("Formula_cat_id", pim.getListFormula().get(i).getFormula_cat_id());
								json_formula.put("Formula_id", pim.getListFormula().get(i).getFormula_id());
								formula_grantRightsInsure_jsonArray.put(json_formula);
							}
						}
					}
					////////////////////////////////star
					 pm_Rate_BasePlab_Array 	= new JSONArray();
					 pm_Rate_Rider_Array 		= new JSONArray();
					 json_nar 				= new JSONObject();
					 nar_BasePlab_Array 		= new JSONArray();
					 nar_Rider_Array 			= new JSONArray();
					 json_pm_Rate 			= new JSONObject();
					 json_BasePlan_jsonArray 	= new JSONObject();
					 json_BaseRider_json 		= new JSONObject();
					
					 arr_add_pm_Rate 			= new JSONArray();
					 arr_add_nar	 			= new JSONArray();
					 
					 tableBasePlan_jsonArray 	= new JSONArray();
					 tableRider_jsonArray		= new JSONArray();
					 ArrayList<Sub_cat> sub_cat_arr			= new ArrayList<>();
					 JSONArray  	name_arr	= new JSONArray();
					 
					////////////
					//String type = "";
					for (int i = 0; i < fix_jsonArray.length(); i++) {
						JSONObject json_fix 				= fix_jsonArray.getJSONObject(i);
						JSONObject json_lv3 				= lv3_jsonArray.getJSONObject(i);
						JSONObject json_cov_code 			= cov_code_jsonArray.getJSONObject(i);
						JSONObject json_nameTH 				= nameTH_jsonArray.getJSONObject(i);
						JSONObject json_rate_lyout2			= new JSONObject();
						
						type = String.valueOf(json_fix.get("flag_type"));
						if (type.equals("B")) {
							pm_Rate_BasePlab_Array 	= new JSONArray();
							arr_add_pm_Rate 		= new JSONArray();
							nar_BasePlab_Array		= new JSONArray();
							arr_add_nar				= new JSONArray();
							
							json_BasePlan_jsonArray.put("flag_type", String.valueOf(json_fix.get("flag_type")));
							json_BasePlan_jsonArray.put("cov_code", String.valueOf(json_cov_code.get("cov_code")));
							json_BasePlan_jsonArray.put("prd_code", String.valueOf(json_cov_code.get("prd_code")));
							//json_BasePlan_jsonArray.put("nameTH", String.valueOf(json_nameTH.get("nameTH")));
							json_BasePlan_jsonArray.put("fix_sa_amt", String.valueOf(json_fix.get("fix_sa_amt")));
							
							for (int j = 0; j < rate_lyout_jsonArray.length(); j++) {
								 json_rate_lyout2 				= rate_lyout_jsonArray.getJSONObject(j);
								if (json_rate_lyout2.get("prd_code").equals(json_rate_lyout2.get("prd_rider_code")) && json_cov_code.get("prd_code").equals(json_rate_lyout2.get("prd_rider_code"))) {
									if (Integer.parseInt(json_rate_lyout2.getString("rate_cat_id")) == 6) {
										//setFile
										for (int jj = 0; jj < file_jsonArray.length(); jj++) {
											json_pm_Rate = new JSONObject();
											JSONObject json_file2		 	= file_jsonArray.getJSONObject(jj);
											if (json_rate_lyout2.getInt("File_Id") == json_file2.getInt("fileID")) {
												json_pm_Rate.put("rate_cat_id", String.valueOf(json_rate_lyout2.get("rate_cat_id")));
												json_pm_Rate.put("rate_layout_id",String.valueOf(json_rate_lyout2.get("Rate_layout_id")));
												json_pm_Rate.put("filename", String.valueOf(json_file2.get("filename")));
												json_pm_Rate.put("fileID", String.valueOf(json_file2.get("fileID")));
												///
												RateLayoutData rd = new RateLayoutData();
												sub_cat_arr = rd.searchRate_layout(json_rate_lyout2.getString("rate_cat_id"),json_rate_lyout2.getString("Rate_layout_id"));
												if (sub_cat_arr.size() != 0) {
													name_arr	= new JSONArray();
													for (int jjj =0; jjj < sub_cat_arr.size(); jjj++) {
														JSONObject name_json = new JSONObject();
														name_json.put("name",sub_cat_arr.get(jjj).getName_th());
														name_arr.put(name_json);
													}
													json_pm_Rate.put("name_th", name_arr);
												}else {
													name_arr	= new JSONArray();
													json_pm_Rate.put("name_th",name_arr);
												}
												//
												arr_add_pm_Rate.put(json_pm_Rate);
											}
										}
									} 
								}
							}	
							pm_Rate_BasePlab_Array.put(arr_add_pm_Rate);
							nar_BasePlab_Array.put(arr_add_nar);
							//Base Plan
							json_BasePlan_jsonArray.put("pm_rate", pm_Rate_BasePlab_Array);
							//json_BasePlan_jsonArray.put("nar", nar_BasePlab_Array);
							tableBasePlan_jsonArray.put(json_BasePlan_jsonArray);
						} else if (type.equals("R")) {
							pm_Rate_Rider_Array = new JSONArray();
							arr_add_pm_Rate 	= new JSONArray();
							nar_Rider_Array		= new JSONArray();
							arr_add_nar			= new JSONArray();
							
							json_BaseRider_json = new JSONObject();
							json_BaseRider_json.put("type_coverage",String.valueOf(json_lv3.get("type_coverage")));
							json_BaseRider_json.put("flag_type", String.valueOf(json_fix.get("flag_type")));
							json_BaseRider_json.put("cov_code", String.valueOf(json_cov_code.get("cov_code")));
							json_BaseRider_json.put("prd_code", String.valueOf(json_cov_code.get("prd_code")));
							json_BaseRider_json.put("fix_sa_amt", String.valueOf(json_fix.get("fix_sa_amt")));
							json_BaseRider_json.put("nameTH", String.valueOf(json_nameTH.get("nameTH")));
							
							for (int j = 0; j < rate_lyout_jsonArray.length(); j++) {
								 json_rate_lyout2 				= rate_lyout_jsonArray.getJSONObject(j);
								if (!json_rate_lyout2.get("prd_code").equals(json_rate_lyout2.get("prd_rider_code")) && json_cov_code.get("prd_code").equals(json_rate_lyout2.get("prd_rider_code"))) {
									if (Integer.parseInt(json_rate_lyout2.getString("rate_cat_id")) == 6 ) {
										//setFile
										for (int jj = 0; jj < file_jsonArray.length(); jj++) {
											json_pm_Rate = new JSONObject();
											JSONObject json_file2		 	= file_jsonArray.getJSONObject(jj);
											if (json_rate_lyout2.getInt("File_Id") == json_file2.getInt("fileID")) {
												json_pm_Rate.put("rate_cat_id", String.valueOf(json_rate_lyout2.get("rate_cat_id")));
												json_pm_Rate.put("rate_layout_id",String.valueOf(json_rate_lyout2.get("Rate_layout_id")));
												json_pm_Rate.put("filename", String.valueOf(json_file2.get("filename")));
												json_pm_Rate.put("fileID", String.valueOf(json_file2.get("fileID")));
												///
												RateLayoutData rd = new RateLayoutData();
												sub_cat_arr = rd.searchRate_layout(json_rate_lyout2.getString("rate_cat_id"),json_rate_lyout2.getString("Rate_layout_id"));
												if (sub_cat_arr.size() != 0) {
													name_arr	= new JSONArray();
													for (int jjj =0; jjj < sub_cat_arr.size(); jjj++) {
														JSONObject name_json = new JSONObject();
														name_json.put("name",sub_cat_arr.get(jjj).getName_th());
														name_arr.put(name_json);
													}
													json_pm_Rate.put("name_th", name_arr);
												}else {
													name_arr	= new JSONArray();
													json_pm_Rate.put("name_th",name_arr);
												}
												//
												arr_add_pm_Rate.put(json_pm_Rate);
											}
										}
									} 
								}
							}	
							pm_Rate_Rider_Array.put(arr_add_pm_Rate);
							nar_Rider_Array.put(arr_add_nar);
							//Rider
							json_BaseRider_json.put("pm_rate", arr_add_pm_Rate);
							//json_BaseRider_json.put("nar", arr_add_nar);
							tableRider_jsonArray.put(json_BaseRider_json);
						}
					}
					/////////////////////////////////////////////////////
					JSONArray  grantRightsInsure_jsonArray	= new JSONArray();
					JSONObject json_grantRightsInsure = new JSONObject();
					json_grantRightsInsure.put("change_Type",change_Type);
					json_grantRightsInsure.put("formula",formula_grantRightsInsure_jsonArray);
					json_grantRightsInsure.put("basePlan", tableBasePlan_jsonArray);
					json_grantRightsInsure.put("rider", tableRider_jsonArray);
					grantRightsInsure_jsonArray.put(json_grantRightsInsure);
					responsejson.put("Tab_GrantRightsInsure",grantRightsInsure_jsonArray);
					
					////////////////////////////////// END///////////////////////////////////
					////////////////////////////// ผลประโยชน์การขาย/////////////////////////
					JSONArray salesBenefits_jsonArray = new JSONArray();
					if (pim.getListSaleCompensation().size() != 0) {
						for (int i = 0; i < pim.getListSaleCompensation().size(); i++) {
							JSONObject json_salesBenefits = new JSONObject();
							json_salesBenefits.put("compen_type", pim.getListSaleCompensation().get(i).getCompen_type());
							json_salesBenefits.put("compen_rate", pim.getListSaleCompensation().get(i).getCompen_rate());
							json_salesBenefits.put("compen_factor", pim.getListSaleCompensation().get(i).getCompen_factor());
							json_salesBenefits.put("fee",  pim.getListSaleCompensation().get(i).getIs_include_fee());
							json_salesBenefits.put("vat", pim.getListSaleCompensation().get(i).getIs_include_vat());
							salesBenefits_jsonArray.put(json_salesBenefits);
						}
					}
					JSONArray  sales_benefits_jsonArray	= new JSONArray();
					JSONObject json_sales_benefits 		= new JSONObject();
					json_sales_benefits.put("SalesBenefits",salesBenefits_jsonArray);
					sales_benefits_jsonArray.put(json_sales_benefits);
					responsejson.put("Tab_SalesBenefits",sales_benefits_jsonArray);
					////////////////////////////////// END///////////////////////////////////
					////////////////////////////// ข้อกำหนดการรับประกัน/////////////////////////
					String sale_eff_date 	= "";
					String sale_exp_date 	= "";
					String sys_eff_date 	= "";
				/*
					String
					String 
					String
					String
					*/
					JSONArray mode_jsonArray2 				= new JSONArray();
					JSONArray product_jsonArray2			= new JSONArray();
					JSONArray occ_jsonArray 				= new JSONArray();
					JSONArray participant_jsonArray 		= new JSONArray();
					JSONArray saleHistory_jsonArray 		= new JSONArray();
					JSONArray underwrite_jsonArray 			= new JSONArray();
					JSONArray unwSubstdType_jsonArray 		= new JSONArray();
					JSONArray unwAccumRule_jsonArray 		= new JSONArray();
					
					DateFormat dateFormat 	= new SimpleDateFormat("dd/MM/yyyy");
					
					if (pim.getListProduct().size() != 0) {
						
						for (int i = 0; i < pim.getListProduct().size(); i++) {
							JSONObject json_product = new JSONObject();
							if (pim.getListProduct().get(i).getSale_eff_date() != null) {
								sale_eff_date 	= getDateFormat(pim.getListProduct().get(i).getSale_eff_date());
							}else {
								sale_eff_date = "";
							}
							if (pim.getListProduct().get(i).getSale_exp_date() != null) {
								sale_exp_date 	= getDateFormat(pim.getListProduct().get(i).getSale_exp_date());
							}else {
								sale_exp_date = "";
							}if (pim.getListProduct().get(i).getSys_eff_date() != null) {
								sys_eff_date = getDateFormat(pim.getListProduct().get(i).getSys_eff_date());
							}else {
								sys_eff_date = "";
							}
							json_product.put("sale_eff_date", sale_eff_date);
							json_product.put("sale_exp_date", sale_exp_date);
							json_product.put("min_period", pim.getListProduct().get(i).getMin_period());
							json_product.put("min_period_unit", pim.getListProduct().get(i).getMin_period_unit());
							json_product.put("max_period", pim.getListProduct().get(i).getMax_period());
							json_product.put("max_period_unit", pim.getListProduct().get(i).getMax_period_unit());
							json_product.put("max_insure_age", pim.getListProduct().get(i).getMax_insure_age());
							json_product.put("max_insure_age_unit", pim.getListProduct().get(i).getMax_insure_age_unit());
							//
							json_product.put("sys_eff_date", sys_eff_date);
							json_product.put("master_policy", pim.getListProduct().get(i).getMaster_policy());
							json_product.put("first_beneficiary", pim.getListProduct().get(i).getFirst_beneficiary());
							json_product.put("is_flp", pim.getListProduct().get(i).getIs_flp());
							json_product.put("is_flp_fee", pim.getListProduct().get(i).getIs_flp_fee());
							json_product.put("flp_day", pim.getListProduct().get(i).getFlp_day());
							json_product.put("flp_start_date()", pim.getListProduct().get(i).getFlp_start_date());
						
							product_jsonArray2.put(json_product);
						}
					}
					//Mode
					if (pim.getListProductMode().size() != 0) {
						for (int i = 0; i < pim.getListProductMode().size(); i++) {
							JSONObject json_Mode = new JSONObject();
							json_Mode.put("value", pim.getListProductMode().get(i).getMode());
							mode_jsonArray2.put(json_Mode);
						}
					}
					//Participant
					if (pim.getListParticipant().size() != 0) {
						for (int i = 0; i < pim.getListParticipant().size(); i++) {
							if (pim.getListParticipant().get(i).getPrd_code().equals(pim.getListParticipant().get(i).getPrd_rider_code())) {
								JSONObject json_participant = new JSONObject();
								json_participant.put("min_issue_age", pim.getListParticipant().get(i).getMin_issue_age());
								json_participant.put("max_issue_age", pim.getListParticipant().get(i).getMax_issue_age());
								json_participant.put("min_issue_age_unit", pim.getListParticipant().get(i).getMin_issue_age_unit());
								json_participant.put("max_issue_age_unit", pim.getListParticipant().get(i).getMax_issue_age_unit());
								json_participant.put("max_insure_age", pim.getListParticipant().get(i).getMax_insure_age());
								json_participant.put("max_insure_age_unit", pim.getListParticipant().get(i).getMax_insure_age_unit());
								json_participant.put("age_calc_meth", pim.getListParticipant().get(i).getAge_calc_meth());
								participant_jsonArray.put(json_participant);
							}
						}
					}
					//occ
					if (pim.getListProductOcc().size() != 0) {
						for (int i = 0; i < pim.getListProductOcc().size(); i++) {
							JSONObject json_Occ = new JSONObject();
							json_Occ.put("value", pim.getListProductOcc().get(i).getOcc_class());
							occ_jsonArray.put(json_Occ);
						}
					}
					//SaleHistory
					if (pim.getListSaleHistory().size() != 0) {
						for (int i = 0; i < pim.getListSaleHistory().size(); i++) {
							JSONObject json_saleHistory = new JSONObject();
							json_saleHistory.put("seq", pim.getListSaleHistory().get(i).getSeq());
							json_saleHistory.put("sale_eff_date", dateFormat.format(pim.getListSaleHistory().get(i).getSale_eff_date()));
							json_saleHistory.put("sale_exp_date", dateFormat.format(pim.getListSaleHistory().get(i).getSale_exp_date()));
							json_saleHistory.put("sys_eff_date", dateFormat.format(pim.getListSaleHistory().get(i).getSys_eff_date()));
							json_saleHistory.put("user_code", pim.getListSaleHistory().get(i).getUser_code());
							json_saleHistory.put("update_time", dateFormat.format(pim.getListSaleHistory().get(i).getUpdate_time()));
							saleHistory_jsonArray.put(json_saleHistory);
						}
					}
					//Underwrite
					if (pim.getUnderwrite() != null) {
						JSONObject json_underwrite = new JSONObject();
						json_underwrite.put("prd_max_sa", pim.getUnderwrite().getPrd_max_sa());
						json_underwrite.put("prd_max_sa_unit", pim.getUnderwrite().getPrd_max_sa_unit());
						json_underwrite.put("prd_max_sa_factor", pim.getUnderwrite().getPrd_max_sa_factor());
						json_underwrite.put("is_med_req", pim.getUnderwrite().getIs_med_req());
						json_underwrite.put("is_med_sum_accum", pim.getUnderwrite().getIs_med_sum_accum());
						json_underwrite.put("is_exist_policy", pim.getUnderwrite().getIs_exist_policy());
						json_underwrite.put("is_insure_sum_accum", pim.getUnderwrite().getIs_insure_sum_accum());
						json_underwrite.put("is_substandard", pim.getUnderwrite().getIs_substandard());
						json_underwrite.put("is_rider_allow", pim.getUnderwrite().getIs_rider_allow());
						json_underwrite.put("is_rider_sum_accum", pim.getUnderwrite().getIs_rider_sum_accum());
						json_underwrite.put("is_check_ic_ba", pim.getUnderwrite().getIs_check_ic_ba());
						json_underwrite.put("is_check_ic_fi_cft", pim.getUnderwrite().getIs_check_ic_fi_cft());
						json_underwrite.put("is_check_sale_blacklist", pim.getUnderwrite().getIs_check_sale_blacklist());
						json_underwrite.put("is_fax_app", pim.getUnderwrite().getIs_fax_app());
						json_underwrite.put("is_reins_alert", pim.getUnderwrite().getIs_reins_alert());
						underwrite_jsonArray.put(json_underwrite);
					}
					//UnwSubstdType
					if (pim.getListProductUnwSubstdType().size() != 0) {
						for (int i = 0; i < pim.getListProductUnwSubstdType().size(); i++) {
							JSONObject unw_substd_type = new JSONObject();
							unw_substd_type.put("substd_type", pim.getListProductUnwSubstdType().get(i).getSubstd_type());
							unwSubstdType_jsonArray.put(unw_substd_type);
						}
					}
					//UnwAccumRule
					if (pim.getListProductUnwAccumRule().size() != 0) {
						for (int i = 0; i < pim.getListProductUnwAccumRule().size(); i++) {
							JSONObject unwAccumRule = new JSONObject();
							unwAccumRule.put("accum_type", pim.getListProductUnwAccumRule().get(i).getAccum_type());
							unwAccumRule.put("seq", pim.getListProductUnwAccumRule().get(i).getSeq());
							unwAccumRule.put("cov_cat_lv_1", pim.getListProductUnwAccumRule().get(i).getCov_cat_lv_1());
							////Benz check null 10-09-2019
							if  (pim.getListProductUnwAccumRule().get(i).getCov_cat_lv_2() != 0) {
								unwAccumRule.put("cov_cat_lv_2", pim.getListProductUnwAccumRule().get(i).getCov_cat_lv_2());
							}else {
								unwAccumRule.put("cov_cat_lv_2", "0");
							}
							if (pim.getListProductUnwAccumRule().get(i).getCov_cat_lv_3() != 0) {
								unwAccumRule.put("cov_cat_lv_3", pim.getListProductUnwAccumRule().get(i).getCov_cat_lv_3());
							}else {
								unwAccumRule.put("cov_cat_lv_3", "0");
							}
							unwAccumRule.put("is_gio", pim.getListProductUnwAccumRule().get(i).getUnderwrite_opt());
							unwAccumRule.put("is_senior", pim.getListProductUnwAccumRule().get(i).getIs_senior());
							unwAccumRule.put("filing_chan_id", pim.getListProductUnwAccumRule().get(i).getFiling_chan_id());
							unwAccumRule.put("sale_chan_id", pim.getListProductUnwAccumRule().get(i).getSale_chan_id());
							unwAccumRule.put("sale_partner_code", pim.getListProductUnwAccumRule().get(i).getSale_partner_code());
							unwAccumRule_jsonArray.put(unwAccumRule);
						}
					}
					//UnwHistRuleAccessData
					JSONArray unw_Hist_rule_arr 		= new JSONArray();
					JSONArray unw_HistExitProd_arr		= new JSONArray();
					JSONArray unw_HistMedSum_arr 		= new JSONArray();
					JSONArray unw_HistMedSumDet_arr 	= new JSONArray();
					
					if (pim.getListProductUnwHistRule().size() != 0) {
						for (int i = 0; i < pim.getListProductUnwHistRule().size(); i++) {
							JSONObject hist_rule_JSONObject = new JSONObject();
							hist_rule_JSONObject.put("Hist_type", pim.getListProductUnwHistRule().get(i).getHist_rule().getHist_type());
							hist_rule_JSONObject.put("Is_check", pim.getListProductUnwHistRule().get(i).getHist_rule().getIs_check());
							hist_rule_JSONObject.put("Is_restrict", pim.getListProductUnwHistRule().get(i).getHist_rule().getIs_restrict());
							hist_rule_JSONObject.put("Restrict_type_1", pim.getListProductUnwHistRule().get(i).getHist_rule().getRestrict_type_1());
							hist_rule_JSONObject.put("Condition_1", pim.getListProductUnwHistRule().get(i).getHist_rule().getCondition_1());
							hist_rule_JSONObject.put("Restrict_type_2", pim.getListProductUnwHistRule().get(i).getHist_rule().getRestrict_type_2());
							hist_rule_JSONObject.put("Condition_2", pim.getListProductUnwHistRule().get(i).getHist_rule().getCondition_2());
							hist_rule_JSONObject.put("Restrict_type_3", pim.getListProductUnwHistRule().get(i).getHist_rule().getRestrict_type_3());
							if (pim.getListProductUnwHistRule().get(i).getHist_rule().getNew_sa_amt() == null) {
								hist_rule_JSONObject.put("New_sa_amt", "");

							}else {
								hist_rule_JSONObject.put("New_sa_amt", pim.getListProductUnwHistRule().get(i).getHist_rule().getNew_sa_amt());
							}
							hist_rule_JSONObject.put("New_sa_compare", pim.getListProductUnwHistRule().get(i).getHist_rule().getNew_sa_compare());
							unw_Hist_rule_arr.put(hist_rule_JSONObject);
							///////////UnwHistExitProd
							if (pim.getListProductUnwHistRule().get(i).getListUnwHistExitProd().size() != 0) {
								for (int ii = 0; ii < pim.getListProductUnwHistRule().get(i).getListUnwHistExitProd().size(); ii++) {
									JSONObject histExitProd_JSONObject = new JSONObject();
									histExitProd_JSONObject.put("Hist_type", pim.getListProductUnwHistRule().get(i).getListUnwHistExitProd().get(ii).getHist_type());
									histExitProd_JSONObject.put("Exist_prd_code", pim.getListProductUnwHistRule().get(i).getListUnwHistExitProd().get(ii).getExist_prd_code());
									unw_HistExitProd_arr.put(histExitProd_JSONObject);
								}
							}
							//UnwHistMedSumAcessData
							if (pim.getListProductUnwHistRule().get(i).getListUnwHistMedSumAcessData().size() != 0) {
								for (int ii = 0; ii < pim.getListProductUnwHistRule().get(i).getListUnwHistMedSumAcessData().size(); ii++) {
									JSONObject histMedSum_JSONObject = new JSONObject();
									histMedSum_JSONObject.put("Hist_type", pim.getListProductUnwHistRule().get(i).getListUnwHistMedSumAcessData().get(ii).getUnwHistMedSum().getHist_type());
									histMedSum_JSONObject.put("Seq", pim.getListProductUnwHistRule().get(i).getListUnwHistMedSumAcessData().get(ii).getUnwHistMedSum().getSeq());
								
									if ( pim.getListProductUnwHistRule().get(i).getListUnwHistMedSumAcessData().get(ii).getUnwHistMedSum().getEff_date() != null) {
										sale_eff_date 	= dateFormat.format( pim.getListProductUnwHistRule().get(i).getListUnwHistMedSumAcessData().get(ii).getUnwHistMedSum().getEff_date());
									}else {
										sale_eff_date = "";
									}
									if ( pim.getListProductUnwHistRule().get(i).getListUnwHistMedSumAcessData().get(ii).getUnwHistMedSum().getExp_date() != null) {
										sale_exp_date 	= dateFormat.format(pim.getListProductUnwHistRule().get(i).getListUnwHistMedSumAcessData().get(ii).getUnwHistMedSum().getExp_date());
									}else {
										sale_exp_date = "";
									}
									histMedSum_JSONObject.put("sale_eff_date", sale_eff_date);
									histMedSum_JSONObject.put("sale_exp_date", sale_exp_date);
									unw_HistMedSum_arr.put(histMedSum_JSONObject);
									//////////////UnwHistMedSumDet
									if (pim.getListProductUnwHistRule().get(i).getListUnwHistMedSumAcessData().get(ii).getListUnwHistMedSumDet().size() != 0){
										for (int iii = 0; iii < pim.getListProductUnwHistRule().get(i).getListUnwHistMedSumAcessData().get(ii).getListUnwHistMedSumDet().size(); iii++) {
											JSONObject histMedSumDet_JSONObject = new JSONObject();
											histMedSumDet_JSONObject.put("Hist_type", pim.getListProductUnwHistRule().get(i).getListUnwHistMedSumAcessData().get(ii).getListUnwHistMedSumDet().get(iii).getHist_type());
											histMedSumDet_JSONObject.put("Seq", pim.getListProductUnwHistRule().get(i).getListUnwHistMedSumAcessData().get(ii).getListUnwHistMedSumDet().get(iii).getSeq());
											histMedSumDet_JSONObject.put("Min_age", pim.getListProductUnwHistRule().get(i).getListUnwHistMedSumAcessData().get(ii).getListUnwHistMedSumDet().get(iii).getMin_age());
											histMedSumDet_JSONObject.put("Max_age", pim.getListProductUnwHistRule().get(i).getListUnwHistMedSumAcessData().get(ii).getListUnwHistMedSumDet().get(iii).getMax_age());
											histMedSumDet_JSONObject.put("Min_sum_amt", pim.getListProductUnwHistRule().get(i).getListUnwHistMedSumAcessData().get(ii).getListUnwHistMedSumDet().get(iii).getMin_sum_amt());
											unw_HistMedSumDet_arr.put(histMedSumDet_JSONObject);
										}
									}
								}
							}
						}
					}
					///////////FlpFee
					JSONArray flpFee_arr 	= new JSONArray();
					if (pim.getListProductFlpFee().size() != 0) {
						for (int i = 0; i < pim.getListProductFlpFee().size(); i++) {
							JSONObject flpFee_JSONObject = new JSONObject();
							flpFee_JSONObject.put("Fee_type",  pim.getListProductFlpFee().get(i).getFee_type());
							flpFee_arr.put(flpFee_JSONObject);
						}
					}
					//unwRiderLimit
					JSONArray unwRiderLimit_arr 	= new JSONArray();
					if (pim.getListUnwRiderLimit().size() != 0) {
						for (int i = 0; i < pim.getListUnwRiderLimit().size(); i++) {
							JSONObject unwRiderLimit_JSONObject = new JSONObject();
							unwRiderLimit_JSONObject.put("prd_rider_code", pim.getListUnwRiderLimit().get(i).getPrd_rider_code());
							unwRiderLimit_JSONObject.put("Pax_max_sa_amt", pim.getListUnwRiderLimit().get(i).getPax_max_sa_amt());
							unwRiderLimit_JSONObject.put("Pax_max_sa_unit", pim.getListUnwRiderLimit().get(i).getPax_max_sa_unit());
							unwRiderLimit_JSONObject.put("Max_em", pim.getListUnwRiderLimit().get(i).getMax_em());

							
							unwRiderLimit_arr.put(unwRiderLimit_JSONObject);
						}
					}
					//UnwCocreditLimit
					JSONArray unwCocreditLimit_arr 	= new JSONArray();
					if(pim.getListUnwCocreditLimit().size() != 0) {
						for (int i = 0; i < pim.getListUnwCocreditLimit().size(); i++) {
							JSONObject unwCocreditLimit_JSONObject = new JSONObject();
							unwCocreditLimit_JSONObject.put("seq",  pim.getListUnwCocreditLimit().get(i).getSeq());
							unwCocreditLimit_JSONObject.put("Min_loan_amt", pim.getListUnwCocreditLimit().get(i).getMin_loan_amt());
							unwCocreditLimit_JSONObject.put("Max_loan_amt", pim.getListUnwCocreditLimit().get(i).getMax_loan_amt());
							unwCocreditLimit_JSONObject.put("Pax_max_sa_amt", pim.getListUnwCocreditLimit().get(i).getPax_max_sa_amt());
							unwCocreditLimit_JSONObject.put("Pax_max_sa_unit", pim.getListUnwCocreditLimit().get(i).getPax_max_sa_unit());
							unwCocreditLimit_JSONObject.put("Pax_max_sa_factor", pim.getListUnwCocreditLimit().get(i).getPax_max_sa_factor());
							unwCocreditLimit_JSONObject.put("Tot_max_sa_amt", pim.getListUnwCocreditLimit().get(i).getTot_max_sa_amt());
							unwCocreditLimit_JSONObject.put("Tot_max_sa_unit", pim.getListUnwCocreditLimit().get(i).getTot_max_sa_unit());
							unwCocreditLimit_JSONObject.put("Tot_max_sa_factor", pim.getListUnwCocreditLimit().get(i).getTot_max_sa_factor());
							unwCocreditLimit_arr.put(unwCocreditLimit_JSONObject);
						}
					}
					//Coop
					JSONArray tableCoop_Array 	= new JSONArray();
					String max_em				= "";
					String master_policy		= "";
					if (pim.getListCoop().size() != 0) {
						for (int i = 0; i < pim.getListCoop().size(); i++) {
							JSONObject json_tableCoop = new JSONObject();
							if (pim.getListCoop().get(i).getMax_em() != null) {
								BigDecimal bd_max_em = new BigDecimal(pim.getListCoop().get(i).getMax_em().toString());
								max_em = (bd_max_em).toString();
							}
							json_tableCoop.put("Max_em", max_em);
							json_tableCoop.put("Master_policy", pim.getListCoop().get(i).getMaster_policy());
							tableCoop_Array.put(json_tableCoop);
						}
					}
					//getListAppenDixProduct
					JSONArray appenDixProduct_Array 	= new JSONArray();
					if (pim.getListAppenDixProduct().size() != 0) {
						for (int i = 0; i < pim.getListAppenDixProduct().size(); i++) {
							JSONObject json_appenDixProduct = new JSONObject();
							json_appenDixProduct.put("Appendix_code", pim.getListAppenDixProduct().get(i).getAppendix_code());
							appenDixProduct_Array.put(json_appenDixProduct);
						}
					}
					//Benz-11-07-2019
					//getListProductUnwPolIssueUnit
					JSONArray unwPolIssueUnit_Array 	= new JSONArray();
					if (pim.getListProductUnwPolIssueUnit().size() != 0) {
						for (int i = 0; i < pim.getListProductUnwPolIssueUnit().size(); i++) {
							JSONObject json_unwPolIssueUnit = new JSONObject();
							json_unwPolIssueUnit.put("Pol_issue_unit", pim.getListProductUnwPolIssueUnit().get(i).getPol_issue_unit());
							unwPolIssueUnit_Array.put(json_unwPolIssueUnit);
						}
					}
					
					
					JSONArray  provision_jsonArray	= new JSONArray();
					JSONObject json_provision 		= new JSONObject();
					json_provision.put("product",product_jsonArray2);
					json_provision.put("mode",mode_jsonArray2);
					json_provision.put("participant",participant_jsonArray);
					json_provision.put("occ",occ_jsonArray);
					json_provision.put("saleHistory",saleHistory_jsonArray);
					json_provision.put("underwrite",underwrite_jsonArray);
					json_provision.put("unwSubstdType",unwSubstdType_jsonArray);
					json_provision.put("unwAccumRule",unwAccumRule_jsonArray);
					json_provision.put("unwHistrule",unw_Hist_rule_arr);
					json_provision.put("unwHistExitProd",unw_HistExitProd_arr);
					json_provision.put("unwHistMedSum",unw_HistMedSum_arr);
					json_provision.put("unwHistMedSumDet",unw_HistMedSumDet_arr);
					json_provision.put("flpFee_arr",flpFee_arr);
					json_provision.put("unwRiderLimit",unwRiderLimit_arr);
					json_provision.put("unwCocreditLimit",unwCocreditLimit_arr);
					json_provision.put("Coop",tableCoop_Array);
					json_provision.put("appenDixProduct",appenDixProduct_Array);
					json_provision.put("unwPolIssueUnit",unwPolIssueUnit_Array);
					
					provision_jsonArray.put(json_provision);
					responsejson.put("Tab_Provision",provision_jsonArray);
					////////////////////////////////// END///////////////////////////////////
					////////
					responseText = responsejson.toString();
				} catch (Exception e) {
					e.printStackTrace();
				}
				///////////////////////////////////////////////////////////////////////////////////////////////////////
			} else if (method.equals("getCaseBasePlan")) {
				String passInsurance 	= "";
				String nameTH 			= "";
				String nameEN 			= "";
				Date appStart_date;
				Date appTo_date;
				String sale_eff_date 	= "";
				String sale_exp_date 	= "";
				int age_Start		 	= 0;
				String age_Start_Unit 	= "";
				int age_To 				= 0;
				String age_To_Unit 		= "";
				int maximum_Protection_To = 0;
				String maximum_Protection_Unit = "";
				///
				JSONArray mode_jsonArray = new JSONArray();
				JSONArray filing_Channel_jsonArray = new JSONArray();
				JSONArray cal_Age_jsonArray = new JSONArray();
				///
				String sex = "";
				String insurance_premium = "";
				String coverage_type = "";
				String contract_type = "";
				// ระยะประกันของสัญญาประกันชีวิต
				String insurance_period_radio = "";
				JSONArray insurance_period_Det = new JSONArray();
				// ระยะชำระเบี้ยของสัญญาประกันชีวิต
				String premium_preiod_radio = "";
				String premium_preiod_unit = "";
				int premium_num = 0;
				// แบ่งจ่ายได้
				boolean pay_separately_checkbox = false;
				JSONArray pay_separately_jsonArray = new JSONArray();
				//
				JSONArray mortality_Tli_jsonArray = new JSONArray();
				JSONArray tpd_Tli_jsonArray = new JSONArray();
				// อัตราดอกเบี้ย
				String prem_Rate = "";
				String sum_decr_rate = "";
				// ตารางลดหย่อนภาษี
				JSONArray tb_TaxReduce_jsonArray = new JSONArray();
				// หมายเหตุ
				String note = "";
				//
				String insurance_premium_Code = request.getParameter("insurance_premium");
				ConstantValues.COV_CODE = insurance_premium_Code;
				//find lookup layout file 
				MainInsureDetailCreate mdc 				= new MainInsureDetailCreate ();
				ArrayList<RateCatAccessData> 			datareturnDet;

				String pass_Insurance = request.getParameter("bCode");
				Coverage coverage = new CoverageData().searchCoverage(pass_Insurance);
				BasePlanAccessData bpi = new BasePlanAccessData(coverage);

				// setvalue Basic_Information
				/// Table Participant
				if (bpi.getListParticipantData().size() != 0) {
					if (bpi.getListParticipantData().get(0).getParticipant() != null) {
						sex = bpi.getListParticipantData().get(0).getParticipant().getIssue_gender();
						insurance_premium = bpi.getListParticipantData().get(0).getParticipant().getPrem_rule();

						// อายุที่ขออนุมัติ
						age_Start 				= bpi.getListParticipantData().get(0).getParticipant().getMin_issue_age();
						age_Start_Unit 			= bpi.getListParticipantData().get(0).getParticipant().getMin_issue_age_unit();
						age_To 					= bpi.getListParticipantData().get(0).getParticipant().getMax_issue_age();
						age_To_Unit 			= bpi.getListParticipantData().get(0).getParticipant().getMax_issue_age_unit();
						maximum_Protection_To 	= bpi.getListParticipantData().get(0).getParticipant().getMax_insure_age();
						maximum_Protection_Unit = bpi.getListParticipantData().get(0).getParticipant().getMax_insure_age_unit();
					}
					/// Table Coverage
					passInsurance = bpi.getListParticipantData().get(0).getCoverage().getCov_code();
					nameTH = bpi.getListParticipantData().get(0).getCoverage().getName_th();
					nameEN = bpi.getListParticipantData().get(0).getCoverage().getName_en();
					// วันที่ คปภ.อนุมัติ
					DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");

					if (bpi.getListParticipantData().get(0).getCoverage().getSale_eff_date() != null) {
						appStart_date = bpi.getListParticipantData().get(0).getCoverage().getSale_eff_date();
						sale_eff_date = dateFormat.format(appStart_date);
					} else {
						sale_eff_date = "";
					}
					if (bpi.getListParticipantData().get(0).getCoverage().getSale_exp_date() != null) {
						appTo_date = bpi.getListParticipantData().get(0).getCoverage().getSale_exp_date();
						sale_exp_date = dateFormat.format(appTo_date);
					} else {
						sale_exp_date = "";
					}
					coverage_type = bpi.getListParticipantData().get(0).getCoverage().getCov_unit_type();
					contract_type = bpi.getListParticipantData().get(0).getCoverage().getContract_term();

					// ระยะประกันของสัญญาประกันชีวิต
					if (bpi.getListParticipantData().get(0).getListBenefitPeriodDet() != null
							&& bpi.getListParticipantData().get(0).getListBenefitPeriodDet().size() != 0) {
						insurance_period_radio = bpi.getListParticipantData().get(0).getListBenefitPeriodDet().get(0)
								.getPeriod_calc_meth();
						if (bpi.getListParticipantData().get(0).getListBenefitPeriodDet().size() != 0) {
							for (int i = 0; i < bpi.getListParticipantData().get(0).getListBenefitPeriodDet()
									.size(); i++) {
								JSONObject insurance_period = new JSONObject();
								insurance_period.put("from", Integer.toString(bpi.getListParticipantData().get(0)
										.getListBenefitPeriodDet().get(i).getMin_period()));
								insurance_period.put("to", Integer.toString(bpi.getListParticipantData().get(0)
										.getListBenefitPeriodDet().get(i).getMax_period()));
								insurance_period.put("from_unit", bpi.getListParticipantData().get(0)
										.getListBenefitPeriodDet().get(i).getMin_period_unit());
								insurance_period.put("to_unit", bpi.getListParticipantData().get(0)
										.getListBenefitPeriodDet().get(i).getMax_period_unit());
								insurance_period_Det.put(insurance_period);
							}
						}
					}
					if (bpi.getListPremiumAcessData().get(0).getListPremiumPeriod().size() != 0) {
						// ระยะชำระเบี้ยของสัญญาประกันชีวิต
						premium_preiod_radio = bpi.getListPremiumAcessData().get(0).getListPremiumPeriod().get(0)
								.getPeriod_calc_meth();
						premium_preiod_unit = bpi.getListPremiumAcessData().get(0).getListPremiumPeriod().get(0)
								.getPeriod_unit();
						premium_num = bpi.getListPremiumAcessData().get(0).getListPremiumPeriod().get(0)
								.getPeriod_num();
					}
					// แบ่งจ่ายได้
					if (bpi.getListParticipantData().get(0).getCoverage().getIs_install() == true) {
						pay_separately_checkbox = true;
					}

					if (bpi.getListPremiumAcessData().size() != 0) {
						if (bpi.getListPremiumAcessData().get(0).getListPremInstall() != null) {
							for (int i = 0; i < bpi.getListPremiumAcessData().get(0).getListPremInstall().size(); i++) {
								JSONObject pay_separately_json = new JSONObject();
								pay_separately_json.put("period", Integer.toString(
										bpi.getListPremiumAcessData().get(0).getListPremInstall().get(i).getPeriod()));
								pay_separately_json.put("rate", bpi.getListPremiumAcessData().get(0)
										.getListPremInstall().get(i).getInstall_rate());
								pay_separately_jsonArray.put(pay_separately_json);

							}
						}
					}
					int morta_Male = 0;
					int morta_Female = 0;
					int tpd_Male = 0;
					int tpd_Female = 0;
					if (bpi.getListParticipantData().size() != 0) {
						///// MortalityTli
						for (int i = 0; i < bpi.getListParticipantData().size(); i++) {
							morta_Male = bpi.getListParticipantData().get(i).getCoverage().getMale_mort_tli_id();
							morta_Female = bpi.getListParticipantData().get(i).getCoverage().getFemale_mort_tli_id();
							//
							tpd_Male = bpi.getListParticipantData().get(i).getCoverage().getMale_tpd_tli_id();
							tpd_Female = bpi.getListParticipantData().get(i).getCoverage().getFemale_tpd_tli_id();
							//
							/*for (int ii = 0; ii < bpi.getListMortalityTli().size(); ii++) {
								JSONObject mortality_Tli_Male_json = new JSONObject();
								JSONObject mortality_Tli_Female_json = new JSONObject();

								// ถ้าไม่มีข้อมูลจะไม่ไห้มัน put ข้อมูลลง array
								if (!bpi.getListMortalityTli().get(ii).getGender().equals("NONE")) {
									if (morta_Male == morta_Female) {
										if (morta_Male == bpi.getListMortalityTli().get(ii).getMort_tli_id()) {
											mortality_Tli_Male_json.put("mort_tli_id",
													bpi.getListMortalityTli().get(ii).getMort_tli_id());
											mortality_Tli_Male_json.put("name_TH",
													bpi.getListMortalityTli().get(ii).getName_th());
											mortality_Tli_Male_json.put("name_EN",
													bpi.getListMortalityTli().get(ii).getName_en());
											mortality_Tli_Male_json.put("apply_rate",
													bpi.getListMortalityTli().get(ii).getApply_rate());
											mortality_Tli_Male_json.put("margin_rate",
													bpi.getListMortalityTli().get(ii).getMargin_rate());
											mortality_Tli_Male_json.put("sex",
													bpi.getListMortalityTli().get(ii).getGender());
											mortality_Tli_jsonArray.put(mortality_Tli_Male_json);
										}
									} else {
										if (morta_Male == bpi.getListMortalityTli().get(ii).getMort_tli_id()) {
											mortality_Tli_Male_json.put("mort_tli_id",
													bpi.getListMortalityTli().get(ii).getMort_tli_id());
											mortality_Tli_Male_json.put("name_TH",
													bpi.getListMortalityTli().get(ii).getName_th());
											mortality_Tli_Male_json.put("name_EN",
													bpi.getListMortalityTli().get(ii).getName_en());
											mortality_Tli_Male_json.put("apply_rate",
													bpi.getListMortalityTli().get(ii).getApply_rate());
											mortality_Tli_Male_json.put("margin_rate",
													bpi.getListMortalityTli().get(ii).getMargin_rate());
											mortality_Tli_Male_json.put("sex",
													bpi.getListMortalityTli().get(ii).getGender());
											mortality_Tli_jsonArray.put(mortality_Tli_Male_json);
										} else if (morta_Female == bpi.getListMortalityTli().get(ii).getMort_tli_id()) {
											mortality_Tli_Female_json.put("mort_tli_id",
													bpi.getListMortalityTli().get(ii).getMort_tli_id());
											mortality_Tli_Female_json.put("name_TH",
													bpi.getListMortalityTli().get(ii).getName_th());
											mortality_Tli_Female_json.put("name_EN",
													bpi.getListMortalityTli().get(ii).getName_en());
											mortality_Tli_Female_json.put("apply_rate",
													bpi.getListMortalityTli().get(ii).getApply_rate());
											mortality_Tli_Female_json.put("margin_rate",
													bpi.getListMortalityTli().get(ii).getMargin_rate());
											mortality_Tli_Female_json.put("sex",
													bpi.getListMortalityTli().get(ii).getGender());
											mortality_Tli_jsonArray.put(mortality_Tli_Female_json);
										}
									}
								}
							}
							//
							for (int ii = 0; ii < bpi.getListTpdTli().size(); ii++) {
								JSONObject tpd_Tli_Male_json = new JSONObject();
								JSONObject tpd_Tli_Female_json = new JSONObject();

								if (!bpi.getListTpdTli().get(ii).getGender().equals("NONE")) {
									if (tpd_Male == tpd_Female) {
										if (tpd_Male == bpi.getListTpdTli().get(ii).getTpd_tli_id()) {
											tpd_Tli_Male_json.put("tpd_tli_id",
													bpi.getListTpdTli().get(ii).getTpd_tli_id());
											tpd_Tli_Male_json.put("name_TH", bpi.getListTpdTli().get(ii).getName_th());
											tpd_Tli_Male_json.put("name_EN", bpi.getListTpdTli().get(ii).getName_en());
											tpd_Tli_Male_json.put("apply_rate",
													bpi.getListTpdTli().get(ii).getApply_rate());
											tpd_Tli_Male_json.put("margin_rate",
													bpi.getListTpdTli().get(ii).getMargin_rate());
											tpd_Tli_Male_json.put("sex", bpi.getListTpdTli().get(ii).getGender());
											tpd_Tli_jsonArray.put(tpd_Tli_Male_json);
										}
									} else {
										if (tpd_Male == bpi.getListTpdTli().get(ii).getTpd_tli_id()) {
											tpd_Tli_Male_json.put("tpd_tli_id",
													bpi.getListTpdTli().get(ii).getTpd_tli_id());
											tpd_Tli_Male_json.put("name_TH", bpi.getListTpdTli().get(ii).getName_th());
											tpd_Tli_Male_json.put("name_EN", bpi.getListTpdTli().get(ii).getName_en());
											tpd_Tli_Male_json.put("apply_rate",
													bpi.getListTpdTli().get(ii).getApply_rate());
											tpd_Tli_Male_json.put("margin_rate",
													bpi.getListTpdTli().get(ii).getMargin_rate());
											tpd_Tli_Male_json.put("sex", bpi.getListTpdTli().get(ii).getGender());
											tpd_Tli_jsonArray.put(tpd_Tli_Male_json);
										} else if (tpd_Female == bpi.getListTpdTli().get(ii).getTpd_tli_id()) {
											tpd_Tli_Female_json.put("tpd_tli_id",
													bpi.getListTpdTli().get(ii).getTpd_tli_id());
											tpd_Tli_Female_json.put("name_TH",
													bpi.getListTpdTli().get(ii).getName_th());
											tpd_Tli_Female_json.put("name_EN",
													bpi.getListTpdTli().get(ii).getName_en());
											tpd_Tli_Female_json.put("apply_rate",
													bpi.getListTpdTli().get(ii).getApply_rate());
											tpd_Tli_Female_json.put("margin_rate",
													bpi.getListTpdTli().get(ii).getMargin_rate());
											tpd_Tli_Female_json.put("sex", bpi.getListTpdTli().get(ii).getGender());
											tpd_Tli_jsonArray.put(tpd_Tli_Female_json);
										}
									}
								}
							}*/
						}
					}

					// อัตราดอกเบี้ย
					if (bpi.getListParticipantData().size() != 0) {
						for (int i = 0; i < bpi.getListParticipantData().size(); i++) {
							// อัตราดอกเบี้ยที่ใช้ในการคำนวนเบี้ยประกัน
							BigDecimal bd_prem_Rate = new BigDecimal(
									bpi.getListParticipantData().get(i).getCoverage().getPrem_int_rate().toString());
							prem_Rate = (bd_prem_Rate).toString();
							// อัตราดอกเบี้ยที่ใช้ในการคำนวนทุน
							BigDecimal bd_sum_decr_rate = new BigDecimal(bpi.getListParticipantData().get(i)
									.getCoverage().getSum_decr_int_rate().toString());
							sum_decr_rate = (bd_sum_decr_rate).toString();
						}
					}
					// ลดหย่อนภาษี
					if (bpi.getListRateLayoutTAX().size() != 0) {
						for (int i = 0; i < bpi.getListRateLayoutTAX().size(); i++) {
							JSONObject tb_TaxReduce_json = new JSONObject();
							tb_TaxReduce_json.put("id",
									bpi.getListRateLayoutTAX().get(i).getRateLayout().getRate_layout_id());
							tb_TaxReduce_json.put("pass", Integer.toString(
									bpi.getListRateLayoutTAX().get(i).getRateLayoutLookup().getRate_cat_id()));
							tb_TaxReduce_json.put("text",
									bpi.getListRateLayoutTAX().get(i).getRateLayoutLookup().getName_th());
							tb_TaxReduce_json.put("fileID",
									bpi.getListRateLayoutTAX().get(i).getRateLayout().getFile_id());
							if (bpi.getListRateLayoutTAX().get(i).getFile().getFile_name() != null) {
								tb_TaxReduce_json.put("layout",
										bpi.getListRateLayoutTAX().get(i).getFile().getFile_name());
							}
							tb_TaxReduce_jsonArray.put(tb_TaxReduce_json);
						}

					}
					// หมายเหตุ
					if (bpi.getListNote().size() != 0) {
						note = bpi.getListNote().get(0).getNote();
					}
				}
				// mode
				if (bpi.getListMode().size() != 0) {
					for (int i = 0; i < bpi.getListMode().size(); i++) {
						JSONObject json_Mode = new JSONObject();
						json_Mode.put("value", bpi.getListMode().get(i).getMode());
						mode_jsonArray.put(json_Mode);
					}
				}
				// Filing_channel
				if (bpi.getListFiling_channel().size() != 0) {
					for (int i = 0; i < bpi.getListFiling_channel().size(); i++) {
						JSONObject json_filing_Channel = new JSONObject();
						json_filing_Channel.put("value", bpi.getListFiling_channel().get(i).getFiling_chan_id());
						filing_Channel_jsonArray.put(json_filing_Channel);
					}
				}
				// cal_Age
				ParticipantAccessData cc = bpi.getListParticipantData().get(0);
				if (cc.getListAgeCalcMeth() != null) {
					for (int i = 0; i < bpi.getListParticipantData().size(); i++) {
						ArrayList<Age_calc_meth> ls = cc.getListAgeCalcMeth();
						for (Age_calc_meth age_calc_meth : ls) {
							JSONObject json_cal_Age = new JSONObject();
							json_cal_Age.put("value", age_calc_meth.getAge_calc_meth());
							cal_Age_jsonArray.put(json_cal_Age);
						}
					}
				}
				JSONArray basic_Info_jsonArray = new JSONArray();
				JSONObject json_basic_Info = new JSONObject();
				json_basic_Info.put("passInsurance", passInsurance);
				json_basic_Info.put("nameTH", nameTH);
				json_basic_Info.put("nameEN", nameEN);
				json_basic_Info.put("sale_eff_date", sale_eff_date);
				json_basic_Info.put("sale_exp_date", sale_exp_date);
				
				age_Start 				= bpi.getListParticipantData().get(0).getParticipant().getMin_issue_age();
				age_Start_Unit 			= bpi.getListParticipantData().get(0).getParticipant().getMin_issue_age_unit();
				age_To 					= bpi.getListParticipantData().get(0).getParticipant().getMax_issue_age();
				age_To_Unit 			= bpi.getListParticipantData().get(0).getParticipant().getMax_issue_age_unit();
				maximum_Protection_To 	= bpi.getListParticipantData().get(0).getParticipant().getMax_insure_age();
				maximum_Protection_Unit = bpi.getListParticipantData().get(0).getParticipant().getMax_insure_age_unit();
				
				json_basic_Info.put("age_Start", Integer.toString(age_Start));
				json_basic_Info.put("age_Start_Unit", age_Start_Unit);
				json_basic_Info.put("age_To", Integer.toString(age_To));
				json_basic_Info.put("age_To_Unit", age_To_Unit);
				json_basic_Info.put("maximum_Protection_To", Integer.toString(maximum_Protection_To));
				json_basic_Info.put("maximum_Protection_Unit", maximum_Protection_Unit);
				///
				json_basic_Info.put("mode", mode_jsonArray);
				json_basic_Info.put("filing_Channel", filing_Channel_jsonArray);
				json_basic_Info.put("cal_Age", cal_Age_jsonArray);
				//
				json_basic_Info.put("sex", sex);
				json_basic_Info.put("insurance_premium", insurance_premium);
				json_basic_Info.put("coverage_type", coverage_type);
				json_basic_Info.put("contract_type", contract_type);
				// ระยะประกันของสัญญาประกันชีวิต
				json_basic_Info.put("insurance_period_radio", insurance_period_radio);
				json_basic_Info.put("insurance_period", insurance_period_Det);
				// ระยะชำระเบี้ยของสัญญาประกันชีวิต
				json_basic_Info.put("premium_preiod_radio", premium_preiod_radio);
				json_basic_Info.put("premium_preiod_unit", premium_preiod_unit);
				json_basic_Info.put("premium_num", Integer.toString(premium_num));
				// แบ่งชำระ
				json_basic_Info.put("pay_separately_checkbox", pay_separately_checkbox);
				json_basic_Info.put("pay_separately", pay_separately_jsonArray);
				//
				json_basic_Info.put("mortality_Tli", mortality_Tli_jsonArray);
				json_basic_Info.put("tpd_Tli", tpd_Tli_jsonArray);
				// อัตราดอกเบี้ย
				json_basic_Info.put("prem_Rate", prem_Rate);
				json_basic_Info.put("sum_decr_rate", sum_decr_rate);
				//// ลดหย่อนภาษี
				json_basic_Info.put("table_TaxReduce", tb_TaxReduce_jsonArray);
				// หมายเหตุ
				json_basic_Info.put("note", note);
				basic_Info_jsonArray.put(json_basic_Info);
				responsejson.put("Tab_Basic_Information", basic_Info_jsonArray);
				////////////////////////////// Policy Wording/////////////////////////
				JSONArray  tb_Policy_Wording_jsonArray	= new JSONArray();
				int tab = 2;
				String cov_code = request.getParameter("bCode");
				PolicyWordingControlData policyWordingControlData = new PolicyWordingControlData();
				
				ArrayList<DocumentAcessData> datareturn;
				//datareturn = bpi.getListDocumentAcessData();
				datareturn = policyWordingControlData.searchPolicyWordingByCovCode(cov_code);
				
				for (int i = 0 ; i < datareturn.size(); i++) {
					JSONObject json_tb_Policy_Wording = new JSONObject();
					json_tb_Policy_Wording.put("doc_type_id", datareturn.get(i).getDocument().getDoc_type_id());
					JSONArray file_policyWording_jsonArray = new JSONArray();
					for(int ii=0 ; ii < datareturn.get(i).getListFile().size() ; ii++) {
						JSONObject json_file_Policy_Wording = new JSONObject();
						json_file_Policy_Wording.put("file_id", datareturn.get(i).getListFile().get(ii).getFile_id());
						json_file_Policy_Wording.put("file_type", datareturn.get(i).getListFile().get(ii).getFile_type_id());
						json_file_Policy_Wording.put("file_ref", datareturn.get(i).getListFile().get(ii).getFile_url());
						json_file_Policy_Wording.put("file_name", datareturn.get(i).getListFile().get(ii).getFile_name());
						file_policyWording_jsonArray.put(json_file_Policy_Wording);
					}
					json_tb_Policy_Wording.put("file", file_policyWording_jsonArray);
					tb_Policy_Wording_jsonArray.put(json_tb_Policy_Wording);
				}
				responsejson.put("Tab_Policy_Wording",tb_Policy_Wording_jsonArray);
				
				//
				/////////////////////////////////////////////////////////////////////
				///////////////////////////// การใช้สิทธิ์ตามกรมธรรม์//////////////////////
				// เวนคืนกรมธรรม์(Surrender)
				boolean surrender_check = true;
				if (bpi.getListNonforfProvision().size() != 0) {
					surrender_check = bpi.getListNonforfProvision().get(0).getIs_default();
				}
				JSONArray exercise_rights_insurance_jsonArray = new JSONArray();
				JSONObject exercise_rights_insurance = new JSONObject();
				exercise_rights_insurance.put("surrender_check", surrender_check);
				exercise_rights_insurance_jsonArray.put(exercise_rights_insurance);
				responsejson.put("Tab_exercise_rights_insurance", exercise_rights_insurance_jsonArray);
				//
				responseText = responsejson.toString();
				/////////////////////////////////////////////////////////////////////
				///////////////////////////// Tab การคำนวนเบี้ยประกัน//////////////////////
				JSONArray age_Band_jsonArray = new JSONArray();
				for (int i = 0; i < bpi.getListRateLayoutStandard().size(); i++) {
					JSONObject json_age_Band = new JSONObject();
					if (!bpi.getListRateLayoutStandard().get(i).getRateLayout().getAge_band_code().equals("")) {
						json_age_Band.put("value",
								bpi.getListRateLayoutStandard().get(i).getRateLayout().getAge_band_code());
						age_Band_jsonArray.put(json_age_Band);
					}
				}
				// เบี้ยมาตรฐาน
				// age band lookup
				ProductRateLayoutPremAccessData pdRateAccData = new ProductRateLayoutPremAccessData();
				ArrayList<RateLayoutPremAccessData> lstRateLayoutPremAccessData = pdRateAccData.searchRateLayoutPremAccessData(pass_Insurance);
				JSONArray age_band_CalLookup = new JSONArray();
				for (RateLayoutPremAccessData rateLayoutPremAccessData : lstRateLayoutPremAccessData) {
					JSONObject json_age_band = new JSONObject();
					json_age_band.put("text", rateLayoutPremAccessData.getRateLayout().getAge_band_code());
					json_age_band.put("pass", rateLayoutPremAccessData.getRateLayout().getAge_band_code());
					age_band_CalLookup.put(json_age_band);
				}
				
				// select box ตารางเบี้ยประกัน
				JSONArray select_Insurance_premium_jsonArray = new JSONArray();
				JSONArray tb_Insurance_premium_jsonArray = new JSONArray();
				
				for (int i = 0; i < bpi.getListRateLayoutStandard().size(); i++) {
					String text = "";
					int pass = 0;
					JSONObject json_select_Insurance_premium = new JSONObject();
					if (bpi.getListRateLayoutStandard().get(i).getRateLayoutLookup() != null) {
						if (bpi.getListRateLayoutStandard().get(i).getRateLayoutLookup().getName_th() != "") {
							text = bpi.getListRateLayoutStandard().get(i).getSubCat().getName_th();
						}
						if (bpi.getListRateLayoutStandard().get(i).getRateLayoutLookup().getRate_cat_id() != 0) {
							pass = bpi.getListRateLayoutStandard().get(i).getRateLayoutLookup().getRate_cat_id();
						}
					}
					json_select_Insurance_premium.put("pass", pass);
					json_select_Insurance_premium.put("text", text);
					select_Insurance_premium_jsonArray.put(json_select_Insurance_premium);
					///// Table
					JSONObject json_tb_Insurance_premium = new JSONObject();
					String type = "";
					String file_name = "";
					int pass2 = 0;
					int layoutID = 0;
					int fileID = 0;
					int rate_cat_id = 0;
					if (bpi.getListRateLayoutStandard().get(i).getRateLayout() != null) {
						if (bpi.getListRateLayoutStandard().get(i).getRateLayout().getAge_band_code() != "") {
							type = bpi.getListRateLayoutStandard().get(i).getRateLayout().getAge_band_code();
						}
						if (bpi.getListRateLayoutStandard().get(i).getRateLayout().getRate_cat_id() != 0) {
							pass2 = bpi.getListRateLayoutStandard().get(i).getRateLayout().getRate_cat_id();
						}
						if (bpi.getListRateLayoutStandard().get(i).getRateLayout().getRate_layout_id() != 0) {
							layoutID = bpi.getListRateLayoutStandard().get(i).getRateLayout().getRate_layout_id();
						}
						if (bpi.getListRateLayoutStandard().get(i).getRateLayout().getFile_id() != 0) {
							fileID = bpi.getListRateLayoutStandard().get(i).getRateLayout().getFile_id();
						}

					}
					if (bpi.getListRateLayoutStandard().get(i).getFile() != null) {
						if (bpi.getListRateLayoutStandard().get(i).getFile().getFile_name() != "") {
							file_name = bpi.getListRateLayoutStandard().get(i).getFile().getFile_name();
						}
					}
					if (bpi.getListRateLayoutStandard().get(i).getFile() != null) {
						if (bpi.getListRateLayoutStandard().get(i).getFile().getFile_name() != "") {
							rate_cat_id = bpi.getListRateLayoutStandard().get(i).getRateCat().getRate_cat_id();
						}
					}
					
					//Pun add Lookup layoutDet 18-12-2019
					JSONArray tb_layoutdet1_jsonArray 	= new JSONArray(); 
					JSONArray tb_layoutdet2_jsonArray 	= new JSONArray(); 
					String[] arrRateCat = new String[1]; 
					arrRateCat[0] = String.valueOf(rate_cat_id);
					datareturnDet = mdc.searchTax(arrRateCat);
					if (datareturnDet.size() > 0) {
						for (int j = 0; j < datareturnDet.size(); j++) {
							for (int jj = 0; jj < datareturnDet.get(j).getListRateLayout().size(); jj++) {
								tb_layoutdet1_jsonArray 	= new JSONArray(); 
								JSONObject tb_layoutdet_JSONObject 	= new JSONObject();
								for (int jjj = 0; jjj < datareturnDet.get(j).getListRateLayout().get(jj).getListRateLayoutDet().size(); jjj++) {
									if(layoutID == datareturnDet.get(j).getListRateLayout().get(jj).getListRateLayoutDet().get(jjj).getRate_layout_id()) {
										JSONObject json_rateLayoutDet = new JSONObject();
										json_rateLayoutDet.put("rate_layout_id",datareturnDet.get(j).getListRateLayout().get(jj).getListRateLayoutDet().get(jjj).getRate_layout_id());
										json_rateLayoutDet.put("column_name",datareturnDet.get(j).getListRateLayout().get(jj).getListRateLayoutDet().get(jjj).getColumn_name());
										json_rateLayoutDet.put("column_len",datareturnDet.get(j).getListRateLayout().get(jj).getListRateLayoutDet().get(jjj).getColumn_len());
										tb_layoutdet1_jsonArray.put(json_rateLayoutDet);
									}
								}
								if(tb_layoutdet1_jsonArray.length() != 0) {
									tb_layoutdet_JSONObject.put("rate_layout_det",tb_layoutdet1_jsonArray);
									tb_layoutdet2_jsonArray.put(tb_layoutdet_JSONObject);
								}
							};
						}
					}
					
					json_tb_Insurance_premium.put("pass", pass2);
					json_tb_Insurance_premium.put("layout", layoutID);
					json_tb_Insurance_premium.put("type", type);
					json_tb_Insurance_premium.put("fileID", fileID);
					json_tb_Insurance_premium.put("file", file_name);
					json_tb_Insurance_premium.put("rate_cat_id", rate_cat_id);
					json_tb_Insurance_premium.put("rate_layout_det", tb_layoutdet2_jsonArray);
					tb_Insurance_premium_jsonArray.put(json_tb_Insurance_premium);
				}
				//
				JSONArray select_extra_Rate_jsonArray = new JSONArray();
				JSONArray tb_extra_Rate_jsonArray = new JSONArray();
				for (int i = 0; i < bpi.getListRateLayoutSpecial().size(); i++) {
					JSONObject json_select_extra_Rate = new JSONObject();
					String text = "";

					if (bpi.getListRateLayoutSpecial().get(i).getRateLayoutLookup() != null) {
						if (bpi.getListRateLayoutSpecial().get(i).getRateLayoutLookup().getName_th() != "") {
							// text =
							// bpi.getListRateLayoutSpecial().get(i).getRateLayoutLookup().getName_th();
							//text = bpi.getListRateLayoutSpecial().get(i).getRateSubCat().getName_th();
						}

					}
					json_select_extra_Rate.put("pass", Integer.toString(i + 1));
					json_select_extra_Rate.put("text", text);
					select_extra_Rate_jsonArray.put(json_select_extra_Rate);
					///// Table
					JSONObject json_extra_Rate = new JSONObject();
					String type = "";
					String file_name = "";
					int pass2 = 0;
					int layoutID = 0;
					int fileID = 0;
					if (bpi.getListRateLayoutSpecial().get(i).getRateLayout() != null) {
						if (bpi.getListRateLayoutSpecial().get(i).getRateLayout().getAge_band_code() != "") {
							type = bpi.getListRateLayoutSpecial().get(i).getRateLayout().getAge_band_code();
						}
						if (bpi.getListRateLayoutSpecial().get(i).getRateLayout().getRate_cat_id() != 0) {
							pass2 = bpi.getListRateLayoutSpecial().get(i).getRateLayout().getRate_cat_id();
						}
						if (bpi.getListRateLayoutSpecial().get(i).getRateLayout().getRate_layout_id() != 0) {
							layoutID = bpi.getListRateLayoutSpecial().get(i).getRateLayout().getRate_layout_id();
						}
						if (bpi.getListRateLayoutSpecial().get(i).getRateLayout().getFile_id() != 0) {
							fileID = bpi.getListRateLayoutSpecial().get(i).getRateLayout().getFile_id();
						}

					}
					if (bpi.getListRateLayoutSpecial().get(i).getFile() != null) {
						if (bpi.getListRateLayoutSpecial().get(i).getFile().getFile_name() != "") {
							file_name = bpi.getListRateLayoutSpecial().get(i).getFile().getFile_name();
						}

					}

					json_extra_Rate.put("pass", pass2);
					json_extra_Rate.put("layout", layoutID);
					json_extra_Rate.put("type", type);
					json_extra_Rate.put("fileID", fileID);
					json_extra_Rate.put("file", file_name);
					tb_extra_Rate_jsonArray.put(json_extra_Rate);
				}
				///
				// MIN MAX EM
				String min_EM = "";
				String max_EM = "";
				boolean is_substd = false;
				boolean is_sa_decr = false;
				//
				boolean prem_disc = false;
				String prem_min = "";
				String prem_max = "";
				for (int i = 0; i < bpi.getListParticipantData().size(); i++) {
					if (bpi.getListParticipantData().get(i).getCoverage() != null) {
						// มีส่วนลดเบี้ยประกัน
						prem_disc = bpi.getListParticipantData().get(i).getCoverage().getIs_prem_disc();
						BigDecimal dbprem_min = new BigDecimal(
								bpi.getListParticipantData().get(i).getCoverage().getMin_prem_disc_rate().toString());
						BigDecimal dbprem_max = new BigDecimal(
								bpi.getListParticipantData().get(i).getCoverage().getMax_prem_disc_rate().toString());
						prem_min = (dbprem_min).toString();
						prem_max = (dbprem_max).toString();
						//
						BigDecimal bd_min = new BigDecimal(0);
						BigDecimal bd_max = new BigDecimal(0);
						if (bpi.getListParticipantData().get(i).getCoverage().getMin_em() != null) {
							bd_min = new BigDecimal(
									bpi.getListParticipantData().get(i).getCoverage().getMin_em().toString());

						}
						if (bpi.getListParticipantData().get(i).getCoverage().getMax_em() != null) {
							bd_max = new BigDecimal(
									bpi.getListParticipantData().get(i).getCoverage().getMax_em().toString());
						}
						min_EM = (bd_min).toString();
						max_EM = (bd_max).toString();

						is_substd = bpi.getListParticipantData().get(i).getCoverage().getIs_substd();
						is_sa_decr = bpi.getListParticipantData().get(i).getCoverage().getIs_sa_decr();
					}
				}
				// นำเข้า ตารางช่วงอายุที่รับเบี้ยเพิ่ม
				JSONArray em_age_jsonArray = new JSONArray();
				if (bpi.getListRateLayoutBetweenAge().size() != 0) {
					JSONObject json_em_age = new JSONObject();
					String type = "";
					String file_name = "";
					int pass2 = 0;
					int layoutID = 0;
					int fileID = 0;

					if (bpi.getListRateLayoutBetweenAge().get(0).getRateLayout() != null) {
						if (bpi.getListRateLayoutBetweenAge().get(0).getRateLayout().getAge_band_code() != "") {
							type = bpi.getListRateLayoutBetweenAge().get(0).getRateLayout().getAge_band_code();
						}
						if (bpi.getListRateLayoutBetweenAge().get(0).getRateLayout().getRate_cat_id() != 0) {
							pass2 = bpi.getListRateLayoutBetweenAge().get(0).getRateLayout().getRate_cat_id();
						}
						if (bpi.getListRateLayoutBetweenAge().get(0).getRateLayout().getRate_layout_id() != 0) {
							layoutID = bpi.getListRateLayoutBetweenAge().get(0).getRateLayout().getRate_layout_id();
						}
						if (bpi.getListRateLayoutBetweenAge().get(0).getRateLayout().getFile_id() != 0) {
							fileID = bpi.getListRateLayoutBetweenAge().get(0).getRateLayout().getFile_id();
						}

					}

					if (bpi.getListRateLayoutBetweenAge().get(0).getFile() != null) {
						if (bpi.getListRateLayoutBetweenAge().get(0).getFile().getFile_name() != "") {
							file_name = bpi.getListRateLayoutBetweenAge().get(0).getFile().getFile_name();
						}
					}

					json_em_age.put("pass", pass2);
					json_em_age.put("layout", layoutID);
					json_em_age.put("type", type);
					json_em_age.put("fileID", fileID);
					json_em_age.put("file", file_name);

					em_age_jsonArray.put(json_em_age);
				}
				// ทุนคุ้มครองที่ลดลง
				JSONArray select_capital_decrease_jsonArray = new JSONArray();
				JSONArray tb_capital_decrease_jsonArray = new JSONArray();
				for (int i = 0; i < bpi.getListRateLayoutCapitalDecrease().size(); i++) {
					JSONObject json_capital_decrease = new JSONObject();
					String text = "";
					if (bpi.getListRateLayoutCapitalDecrease().get(i).getRateLayoutLookup() != null) {
						if (bpi.getListRateLayoutCapitalDecrease().get(i).getRateLayoutLookup().getName_th() != "") {
							//text = bpi.getListRateLayoutCapitalDecrease().get(i).getRateSubCat().getName_th();
						}
					}
					json_capital_decrease.put("pass", Integer.toString(i + 1));
					json_capital_decrease.put("text", text);
					select_capital_decrease_jsonArray.put(json_capital_decrease);
					///// Table
					JSONObject json_tbcapital_decrease = new JSONObject();
					String type = "";
					String file_name = "";
					String file_url = "";
					int pass2 = 0;
					int layoutID = 0;
					int fileID = 0;
					if (bpi.getListRateLayoutCapitalDecrease().get(i).getRateLayout() != null) {
						if (bpi.getListRateLayoutCapitalDecrease().get(i).getRateLayout().getAge_band_code() != "") {
							type = bpi.getListRateLayoutCapitalDecrease().get(i).getRateLayout().getAge_band_code();
						}
						if (bpi.getListRateLayoutCapitalDecrease().get(i).getRateLayout().getRate_cat_id() != 0) {
							pass2 = bpi.getListRateLayoutCapitalDecrease().get(i).getRateLayout().getRate_cat_id();
						}
						if (bpi.getListRateLayoutCapitalDecrease().get(i).getRateLayout().getRate_layout_id() != 0) {
							layoutID = bpi.getListRateLayoutCapitalDecrease().get(i).getRateLayout()
									.getRate_layout_id();
						}
						if (bpi.getListRateLayoutCapitalDecrease().get(i).getRateLayout().getFile_id() != 0) {
							fileID = bpi.getListRateLayoutCapitalDecrease().get(i).getRateLayout().getFile_id();
						}

					}
					if (bpi.getListRateLayoutCapitalDecrease().get(i).getFile() != null) {
						if (bpi.getListRateLayoutCapitalDecrease().get(i).getFile().getFile_name() != "") {
							file_name = bpi.getListRateLayoutCapitalDecrease().get(i).getFile().getFile_name();
							file_url = bpi.getListRateLayoutCapitalDecrease().get(i).getFile().getFile_url();
						}

					}
					
					//Pun add Lookup layoutDet 18-12-2019
					JSONArray tb_layoutdet1_jsonArray 	= new JSONArray(); 
					JSONArray tb_layoutdet2_jsonArray 	= new JSONArray(); 
					String[] arrRateCat = new String[1]; 
					arrRateCat[0] = String.valueOf(pass2);
					datareturnDet = mdc.searchTax(arrRateCat);
					if (datareturnDet.size() > 0) {
						for (int j = 0; j < datareturnDet.size(); j++) {
							for (int jj = 0; jj < datareturnDet.get(j).getListRateLayout().size(); jj++) {
								tb_layoutdet1_jsonArray 	= new JSONArray(); 
								JSONObject tb_layoutdet_JSONObject 	= new JSONObject();
								for (int jjj = 0; jjj < datareturnDet.get(j).getListRateLayout().get(jj).getListRateLayoutDet().size(); jjj++) {
									if(layoutID == datareturnDet.get(j).getListRateLayout().get(jj).getListRateLayoutDet().get(jjj).getRate_layout_id()) {
										JSONObject json_rateLayoutDet = new JSONObject();
										json_rateLayoutDet.put("rate_layout_id",datareturnDet.get(j).getListRateLayout().get(jj).getListRateLayoutDet().get(jjj).getRate_layout_id());
										json_rateLayoutDet.put("column_name",datareturnDet.get(j).getListRateLayout().get(jj).getListRateLayoutDet().get(jjj).getColumn_name());
										json_rateLayoutDet.put("column_len",datareturnDet.get(j).getListRateLayout().get(jj).getListRateLayoutDet().get(jjj).getColumn_len());
										tb_layoutdet1_jsonArray.put(json_rateLayoutDet);
									}
								}
								if(tb_layoutdet1_jsonArray.length() != 0) {
									tb_layoutdet_JSONObject.put("rate_layout_det",tb_layoutdet1_jsonArray);
									tb_layoutdet2_jsonArray.put(tb_layoutdet_JSONObject);
								}
							};
						}
					}

					json_tbcapital_decrease.put("pass", pass2);
					json_tbcapital_decrease.put("layout", layoutID);
					json_tbcapital_decrease.put("type", type);
					json_tbcapital_decrease.put("fileID", fileID);
					json_tbcapital_decrease.put("file", file_name);
					json_tbcapital_decrease.put("ref", file_url);
					json_tbcapital_decrease.put("rate_layout_det", tb_layoutdet2_jsonArray);
					tb_capital_decrease_jsonArray.put(json_tbcapital_decrease);
				}
				// PM_Rate
				// select นำเข้า PM_Rate
				/*
				 * JSONArray pm_Rate_jsonArray = new JSONArray(); String [] pm_Rate_pass =
				 * {"1","2","3"}; String [] pm_Rate_text = {"DTPD","D","TPD"}; for (int i = 0; i
				 * < pm_Rate_pass.length; i++) { JSONObject json_pm_Rate = new JSONObject();
				 * json_pm_Rate.put("pass",pm_Rate_pass[i]);
				 * json_pm_Rate.put("text",pm_Rate_text[i]);
				 * pm_Rate_jsonArray.put(json_pm_Rate); }
				 */
				//
				JSONArray cal_insurance_premiums_jsonArray = new JSONArray();
				JSONObject json_cal_insurance_premiums = new JSONObject();
				json_cal_insurance_premiums.put("age_Band", age_Band_jsonArray);
				json_cal_insurance_premiums.put("age_type",age_band_CalLookup);
				json_cal_insurance_premiums.put("select_insurance_premium", select_Insurance_premium_jsonArray);
				json_cal_insurance_premiums.put("table_insurance_premium", tb_Insurance_premium_jsonArray);
				json_cal_insurance_premiums.put("select_extra_Rate", select_extra_Rate_jsonArray);
				json_cal_insurance_premiums.put("table_extra_Rate", tb_extra_Rate_jsonArray);
				json_cal_insurance_premiums.put("prem_disc", prem_disc);
				json_cal_insurance_premiums.put("prem_min", prem_min);
				json_cal_insurance_premiums.put("prem_max", prem_max);
				json_cal_insurance_premiums.put("is_substd", is_substd);
				json_cal_insurance_premiums.put("min_EM", min_EM);
				json_cal_insurance_premiums.put("max_EM", max_EM);
				json_cal_insurance_premiums.put("is_sa_decr", is_sa_decr);
				json_cal_insurance_premiums.put("em_Age", em_age_jsonArray);
				json_cal_insurance_premiums.put("select_capital_decrease", select_capital_decrease_jsonArray);
				json_cal_insurance_premiums.put("table_capital_decrease", tb_capital_decrease_jsonArray);
				cal_insurance_premiums_jsonArray.put(json_cal_insurance_premiums);
				responsejson.put("Tab_cal_insurance_premiums", cal_insurance_premiums_jsonArray);
				//
				responseText = responsejson.toString();
				/////////////////////////////////////////////////////////////////////
				///////////////////////////// Tab ตารางมูลค่ากรมธรรม์//////////////////////
				JSONArray select_policy_value_jsonArray = new JSONArray();
				JSONArray tb_policy_value_jsonArray = new JSONArray();
				for (int i = 0; i < bpi.getListRateLayoutRiskStardard().size(); i++) {
					//
					JSONObject json_policy_value = new JSONObject();
					String text = "";
					if (bpi.getListRateLayoutRiskStardard().get(i).getRateLayoutLookup() != null) {
						if (bpi.getListRateLayoutRiskStardard().get(i).getRateLayoutLookup().getName_th() != "") {
							// text =
							// bpi.getListRateLayoutRiskStardard().get(i).getRateLayoutLookup().getName_th();
							//text = bpi.getListRateLayoutRiskStardard().get(i).getRateSubCat().getName_th();
						}
					}
					json_policy_value.put("pass", Integer.toString(i + 1));
					json_policy_value.put("text", text);
					select_policy_value_jsonArray.put(json_policy_value);
					///// Table
					JSONObject json_tb_policy_value = new JSONObject();
					String type = "";
					String file_name = "";
					String sub_code = "";
					int layoutid = 0;
					int fileid = 0;
					int pass = 0;
					if (bpi.getListRateLayoutRiskStardard().get(i).getRateLayout() != null) {
						if (bpi.getListRateLayoutRiskStardard().get(i).getRateLayout().getAge_band_code() != "") {
							type = bpi.getListRateLayoutRiskStardard().get(i).getRateLayout().getAge_band_code();
							layoutid = bpi.getListRateLayoutRiskStardard().get(i).getRateLayout().getRate_layout_id();
							pass = bpi.getListRateLayoutRiskStardard().get(i).getRateLayout().getRate_cat_id();
							fileid = bpi.getListRateLayoutRiskStardard().get(i).getRateLayout().getFile_id();
							sub_code = bpi.getListRateLayoutRiskStardard().get(i).getRateLayout().getSub_code();
							json_tb_policy_value.put("sub_code", sub_code);
							json_tb_policy_value.put("type", type);
							json_tb_policy_value.put("layout", Integer.toString(layoutid));
							json_tb_policy_value.put("pass", Integer.toString(pass));
							json_tb_policy_value.put("fileID", Integer.toString(fileid));
						}
					}
					if (bpi.getListRateLayoutRiskStardard().get(i).getFile() != null) {
						if (bpi.getListRateLayoutRiskStardard().get(i).getFile().getFile_name() != "") {
							file_name = bpi.getListRateLayoutRiskStardard().get(i).getFile().getFile_name();
							json_tb_policy_value.put("file", file_name);
						}
					}

					tb_policy_value_jsonArray.put(json_tb_policy_value);
				}
				JSONArray select_Low_Risk_jsonArray = new JSONArray();
				JSONArray tb_Low_Risk_jsonArray = new JSONArray();
				for (int i = 0 ; i < bpi.getListRateLayoutRiskLowStardard().size(); i++) {
					JSONObject json_Low_Risk = new JSONObject();
					String text = "";
					if (bpi.getListRateLayoutRiskLowStardard().get(i).getRateLayoutLookup() != null) {
						if (bpi.getListRateLayoutRiskLowStardard().get(i).getRateLayoutLookup().getName_th() != "") {
							text = bpi.getListRateLayoutRiskLowStardard().get(i).getSubCat().getName_th();
						}
					}
					json_Low_Risk.put("pass", Integer.toString(i + 1));
					json_Low_Risk.put("text", text);
					select_Low_Risk_jsonArray.put(json_Low_Risk);
					///// Table
					JSONObject json_tb_Low_Risk = new JSONObject();
					String type = "";
					String file_name = "";
					int layoutid = 0;
					int fileid = 0;
					int pass = 0;
					if (bpi.getListRateLayoutRiskLowStardard().get(i).getRateLayout() != null) {
						if (bpi.getListRateLayoutRiskLowStardard().get(i).getRateLayout().getAge_band_code() != "") {
							type = bpi.getListRateLayoutRiskLowStardard().get(i).getRateLayout().getAge_band_code();
							layoutid = bpi.getListRateLayoutRiskLowStardard().get(i).getRateLayout()
									.getRate_layout_id();
							pass = bpi.getListRateLayoutRiskLowStardard().get(i).getRateLayout().getRate_cat_id();
							fileid = bpi.getListRateLayoutRiskLowStardard().get(i).getRateLayout().getFile_id();
							json_tb_Low_Risk.put("type", type);
							json_tb_Low_Risk.put("layout", Integer.toString(layoutid));
							json_tb_Low_Risk.put("pass", Integer.toString(pass));
							json_tb_Low_Risk.put("fileID", Integer.toString(fileid));
						}
					}
					if (bpi.getListRateLayoutRiskLowStardard().get(i).getFile() != null) {
						if (bpi.getListRateLayoutRiskLowStardard().get(i).getFile().getFile_name() != "") {
							file_name = bpi.getListRateLayoutRiskLowStardard().get(i).getFile().getFile_name();
							json_tb_Low_Risk.put("file", file_name);
						}
					}
					tb_Low_Risk_jsonArray.put(json_tb_Low_Risk);
				}

				JSONArray policy_value_jsonArray = new JSONArray();
				JSONObject json_policy_value = new JSONObject();

				json_policy_value.put("select_policy_value", select_policy_value_jsonArray);
				json_policy_value.put("table_policy_value", tb_policy_value_jsonArray);
				json_policy_value.put("select_Low_Risk", select_Low_Risk_jsonArray);
				json_policy_value.put("table_Low_Risk", tb_Low_Risk_jsonArray);
				policy_value_jsonArray.put(json_policy_value);
				//
				responsejson.put("Tab_table_policy_value", policy_value_jsonArray);
				//
				responseText = responsejson.toString();
				/////////////////////////////////////////////////////////////////////
				///////////////////////////// Tab ผลประโยชน์/ความคุ้มครอง//////////////////////
				// เสียชีวิต
				JSONArray benefits_jsonArray = new JSONArray();
				JSONObject json_pbenefits = new JSONObject();
				JSONArray die_jsonArray = new JSONArray();

				if (bpi.getListBenefitDAccessData().size() != 0) {
					for (int i = 0; i < bpi.getListBenefitDAccessData().size(); i++) {
						JSONObject json_BenefitItem_ID = new JSONObject();
						// json_BenefitItem_ID.put("Bnf_item_id",
						// bpi.getListBenefitDAccessData().get(i).getBenefitItem().getBnf_item_id());
						json_pbenefits.put("benefitItem_ID",
								bpi.getListBenefitDAccessData().get(i).getBenefitItem().getBnf_item_id());

						if (bpi.getListBenefitDAccessData().get(i).getListBenefitSched().size() != 0) {
							for (int ii = 0; ii < bpi.getListBenefitDAccessData().get(i).getListBenefitSched()
									.size(); ii++) {
								JSONArray die_calendar_jsonArray = new JSONArray();
								JSONArray die_unit_jsonArray = new JSONArray();
								JSONArray die_sa_jsonArray = new JSONArray();
								JSONObject json_calendar = new JSONObject();
								json_calendar.put("pass", Integer.toString(ii + 1));
								json_calendar.put("order", bpi.getListBenefitDAccessData().get(i).getListBenefitSched()
										.get(ii).getBenefit_sched().getSched_seq());
								json_calendar.put("dateFrom", bpi.getListBenefitDAccessData().get(i)
										.getListBenefitSched().get(ii).getBenefit_sched().getBeg_period());
								json_calendar.put("dateTO", bpi.getListBenefitDAccessData().get(i).getListBenefitSched()
										.get(ii).getBenefit_sched().getEnd_period());
								json_calendar.put("compare", bpi.getListBenefitDAccessData().get(i)
										.getListBenefitSched().get(ii).getBenefit_sched().getAmt_compare());
								die_calendar_jsonArray.put(json_calendar);
								// unit
								JSONObject json_unit = new JSONObject();
								json_unit.put("pass", Integer.toString(ii + 1));
								json_unit.put("unit_From", bpi.getListBenefitDAccessData().get(i).getListBenefitSched()
										.get(ii).getBenefit_sched().getBeg_period_unit());
								json_unit.put("unit_To", bpi.getListBenefitDAccessData().get(i).getListBenefitSched()
										.get(ii).getBenefit_sched().getEnd_period_unit());
								die_unit_jsonArray.put(json_unit);
								// SA
								if (bpi.getListBenefitDAccessData().get(i).getListBenefitSched().get(ii)
										.getListBenefitAmount().size() != 0) {
									for (int iii = 0; iii < bpi.getListBenefitDAccessData().get(i).getListBenefitSched()
											.get(ii).getListBenefitAmount().size(); iii++) {
										JSONObject json_sa = new JSONObject();
										json_sa.put("pass", Integer.toString(iii + 1));

										json_sa.put("value",
												bpi.getListBenefitDAccessData().get(i).getListBenefitSched().get(ii)
														.getListBenefitAmount().get(iii).getBenef_amt());
										json_sa.put("unit", bpi.getListBenefitDAccessData().get(i).getListBenefitSched()
												.get(ii).getListBenefitAmount().get(iii).getBenef_unit());
										json_sa.put("factor",
												bpi.getListBenefitDAccessData().get(i).getListBenefitSched().get(ii)
														.getListBenefitAmount().get(iii).getBenef_factor());
										die_sa_jsonArray.put(json_sa);
									}
								}
								JSONObject json_die = new JSONObject();

								json_die.put("die_calendar", die_calendar_jsonArray);
								json_die.put("die_unit", die_unit_jsonArray);
								json_die.put("die_sa", die_sa_jsonArray);
								die_jsonArray.put(json_die);
							}
						}
					}
				}
				JSONArray permanent_disability_jsonArray = new JSONArray();
				if (bpi.getListBenefitTPDAccessData().size() != 0) {
					// ทุพพลภาพถาวรสิ้นเชิง
					for (int i = 0; i < bpi.getListBenefitTPDAccessData().size(); i++) {

						for (int ii = 0; ii < bpi.getListBenefitTPDAccessData().get(i).getListBenefitSched()
								.size(); ii++) {
							JSONObject json_permanent_disability = new JSONObject();

							json_permanent_disability.put("bnf_Item_ID",
									bpi.getListBenefitTPDAccessData().get(i).getBenefitItem().getBnf_item_id());
							json_permanent_disability.put("pass",
									bpi.getListBenefitTPDAccessData().get(i).getBenefitItem().getBnf_code());

							json_permanent_disability.put("bnf_Item_ID",
									bpi.getListBenefitTPDAccessData().get(i).getBenefitItem().getBnf_item_id());
							json_permanent_disability.put("pass",
									bpi.getListBenefitTPDAccessData().get(i).getBenefitItem().getBnf_code());

							for (int iii = 0; iii < bpi.getListBenefitTPDAccessData().get(i).getListBenefitSched()
									.get(ii).getListBenefitAmount().size(); iii++) {
								if (bpi.getListBenefitTPDAccessData().get(i).getListBenefitSched().get(ii)
										.getListBenefitAmount().get(iii).getBenef_amt() != null) {
									json_permanent_disability.put("text",
											bpi.getListBenefitTPDAccessData().get(i).getListBenefitSched().get(ii)
													.getListBenefitAmount().get(iii).getBenef_amt());
								} else {
									json_permanent_disability.put("text", "");
								}

								permanent_disability_jsonArray.put(json_permanent_disability);
							}
						}
					}
					/*
					 * for (int i = 0; i < datareturn.size(); i++) {
					 * 
					 * json_permanent_disability.put("pass", datareturn.get(i).getBnf_code());
					 * json_permanent_disability.put("text", datareturn.get(i).getName_th());
					 * permanent_disability_jsonArray.put(json_permanent_disability); }
					 */
				}
				json_pbenefits.put("die", die_jsonArray);
				json_pbenefits.put("permanent_disability", permanent_disability_jsonArray);
				benefits_jsonArray.put(json_pbenefits);
				responsejson.put("Tab_Benefits", benefits_jsonArray);
				//
				responseText = responsejson.toString();
				System.out.println("GetCaseBsae>>"+responseText);
			} else if (method.equals("getCaseRider")) {
				String passInsurance 			= "";
				String 	nameTH					= "";
				String 	nameEN					= "";
				int   cov_cat_id				= 0;
				Date 	appStart_date;
				Date 	appTo_date ;
				String 	sale_eff_date 			= "";
				String 	sale_exp_date 			= "";
				int		age_Start 				= 0;
				String  age_Start_Unil			= "";
				int 	age_To 					= 0;
				String  age_To_Unil				= "";
				int 	maximum_Protection_To 	= 0;
				String 		tax_health_prem		= "";

				///
				JSONArray	mode_jsonArray				= new JSONArray();
				JSONArray	filing_Channel_jsonArray	= new JSONArray();
				JSONArray	cal_Age_jsonArray			= new JSONArray();
				///
				String 	sex							= "";
				///String	insurance_premium			= "";
				String	coverage_type 				= "";
				String	contract_type			 	= "";
				//ระยะประกันของสัญญาประกันชีวิต
				String	insurance_period_radio 		= "";
				JSONArray	insurance_period_Det	= new JSONArray();
				//ระยะชำระเบี้ยของสัญญาประกันชีวิต
				String 	premium_preiod_radio		= "";
				String	premium_preiod_unit			= "";
				int		premium_num 				= 0	;
				//แบ่งจ่ายได้ 
				boolean pay_separately_checkbox 		= false;
				JSONArray	pay_separately_jsonArray	= new JSONArray();
				//
				JSONArray	mortality_Tli_jsonArray		= new JSONArray();
				JSONArray	tpd_Tli_jsonArray			= new JSONArray();
				//อัตราดอกเบี้ย
				String prem_Rate 						= "";
				String sum_decr_rate 					= "";
				//ตารางลดหย่อนภาษี
				JSONArray	tb_TaxReduce_jsonArray		= new JSONArray();
				//หมายเหตุ
				String note								= "";
				//
				String	rider_code						= "";
				//
				String status							= "";
				
				 String insurance_premium_Code 	= request.getParameter("insurance_premium");
				ConstantValues.COV_CODE = insurance_premium_Code;
				//
				String pass_Insurance = request.getParameter("rCode");
				Coverage coverage = new CoverageData().searchCoverage(pass_Insurance);
				RiderOLAccessData bpi = new RiderOLAccessData(coverage);
				
				//find lookup layout file 
				MainInsureDetailCreate mdc 				= new MainInsureDetailCreate ();
				ArrayList<RateCatAccessData> 			datareturnDet;
				
				//setvalue Basic_Information
				/// Table Participant
				if (bpi.getListParticipantData().size() != 0) {
					if (bpi.getListParticipantData().get(0).getParticipant() != null) {
						sex					= bpi.getListParticipantData().get(0).getParticipant().getIssue_gender();
						//insurance_premium	= bpi.getListParticipantData().get(0).getParticipant().getPrem_rule();
						//อายุที่ขออนุมัติ
						 age_Start				=	bpi.getListParticipantData().get(0).getParticipant().getMin_issue_age();
						 age_Start_Unil			=   bpi.getListParticipantData().get(0).getParticipant().getMin_issue_age_unit();
						 age_To					=	bpi.getListParticipantData().get(0).getParticipant().getMax_issue_age();
						 age_To_Unil			=   bpi.getListParticipantData().get(0).getParticipant().getMax_issue_age_unit();
						 maximum_Protection_To	=	bpi.getListParticipantData().get(0).getParticipant().getMax_insure_age();
					}
					/// Table Coverage
					passInsurance 	= bpi.getListParticipantData().get(0).getCoverage().getCov_code();
					nameTH			= bpi.getListParticipantData().get(0).getCoverage().getName_th();
					nameEN			= bpi.getListParticipantData().get(0).getCoverage().getName_en();
					cov_cat_id 		= bpi.getListParticipantData().get(0).getCoverage().getCov_cat_id();
					status			= bpi.getListParticipantData().get(0).getCoverage().getStatus();
					//วันที่ คปภ.อนุมัติ
					DateFormat dateFormat 	= new SimpleDateFormat("dd/MM/yyyy");
					if (bpi.getListParticipantData().get(0).getCoverage().getSale_eff_date() != null) {
						appStart_date	= bpi.getListParticipantData().get(0).getCoverage().getSale_eff_date();
						sale_eff_date 	= getDateFormat(appStart_date);
					}else {
						sale_eff_date = "";
					}
					if (bpi.getListParticipantData().get(0).getCoverage().getSale_exp_date() != null) {
						appTo_date		= bpi.getListParticipantData().get(0).getCoverage().getSale_exp_date();
						 sale_exp_date 	= getDateFormat(appTo_date);
					}else {
						sale_exp_date = "";
					}
					coverage_type	= bpi.getListParticipantData().get(0).getCoverage().getCov_unit_type();
					contract_type	= bpi.getListParticipantData().get(0).getCoverage().getContract_term();
					
					 //ระยะประกันของสัญญาประกันชีวิต
					if (bpi.getListParticipantData().get(0).getListBenefitPeriodDet() != null) {
						if (bpi.getListParticipantData().get(0).getListBenefitPeriodDet().size() != 0) {
							insurance_period_radio	=	bpi.getListParticipantData().get(0).getListBenefitPeriodDet().get(0).getPeriod_calc_meth();
						}
						 if(bpi.getListParticipantData().get(0).getListBenefitPeriodDet().size() != 0) {
							 for (int i = 0 ; i < bpi.getListParticipantData().get(0).getListBenefitPeriodDet().size(); i++) {
								 JSONObject insurance_period = new JSONObject();
								 insurance_period.put("from", Integer.toString(bpi.getListParticipantData().get(0).getListBenefitPeriodDet().get(i).getMin_period()));
								 insurance_period.put("to", Integer.toString(bpi.getListParticipantData().get(0).getListBenefitPeriodDet().get(i).getMax_period()));
								 insurance_period.put("from_unit", bpi.getListParticipantData().get(0).getListBenefitPeriodDet().get(i).getMin_period_unit());
								 insurance_period.put("to_unit", bpi.getListParticipantData().get(0).getListBenefitPeriodDet().get(i).getMax_period_unit());
								 insurance_period_Det.put(insurance_period);
							 }
						}
					}
					
					if (bpi.getListParticipantData().get(0).getCoverage().getTax_health_prem_percent() != null) {
						BigDecimal tax_health_prem_percent = new BigDecimal(bpi.getListParticipantData().get(0).getCoverage().getTax_health_prem_percent().toString());
						tax_health_prem	= (tax_health_prem_percent).toString();
					}
					
					 if (bpi.getListPremiumAcessData().get(0).getListPremiumPeriod().size() != 0) {
						//ระยะชำระเบี้ยของสัญญาประกันชีวิต 
							premium_preiod_radio		= bpi.getListPremiumAcessData().get(0).getListPremiumPeriod().get(0).getPeriod_calc_meth();
							premium_preiod_unit			= bpi.getListPremiumAcessData().get(0).getListPremiumPeriod().get(0).getPeriod_unit();
							premium_num 				= bpi.getListPremiumAcessData().get(0).getListPremiumPeriod().get(0).getPeriod_num();
					 }
					//แบ่งจ่ายได้ 
					 if (bpi.getListParticipantData().get(0).getCoverage().getIs_install() == true) {
						 pay_separately_checkbox = true;
					 }
					 if (bpi.getListPremiumAcessData().size() != 0) {
						 if (bpi.getListPremiumAcessData().get(0).getListPremInstall() != null) {
							 for (int i = 0; i < bpi.getListPremiumAcessData().get(0).getListPremInstall().size(); i++) {
							 JSONObject pay_separately_json = new JSONObject();
							 pay_separately_json.put("period", Integer.toString(bpi.getListPremiumAcessData().get(0).getListPremInstall().get(i).getPeriod()));
							 pay_separately_json.put("rate", bpi.getListPremiumAcessData().get(0).getListPremInstall().get(i).getInstall_rate());
							 pay_separately_jsonArray.put(pay_separately_json);
						
							 }
						 }
					 }
					
					 ///Benz 12-07-2019 แก้ไขการดึงข้อมูลเนื่องจาก database Re design//
					 for (int  i = 0;  i < bpi.getListPremAssumpRateAcessData().size();  i++) {
						 ArrayList<PremAssumpRateAcessData> list = bpi.getListPremAssumpRateAcessData().get(i);
						 for (int ii = 0; ii < list.size(); ii++) {
							
							 PremAssumpRateAcessData data = list.get(ii);
							 JSONObject mortality_Tli_Male_json = new JSONObject();
							 JSONObject tpd_Tli_Male_json 	= new JSONObject();
							 if (data.getPrem_assump_type().equals("DISABILITY")) {
								 if (data.getPrem_assump_rate_lookup().getGender().equals("EITHER")) {
									tpd_Tli_Male_json.put("tpd_tli_id", data.getPrem_assump_rate().getPrem_assump_rate_id());
									tpd_Tli_Male_json.put("name_TH", data.getPrem_assump_rate_lookup().getName_th());
									tpd_Tli_Male_json.put("name_EN", data.getPrem_assump_rate_lookup().getName_en());
									tpd_Tli_Male_json.put("apply_rate", data.getPrem_assump_rate_lookup().getApply_rate());
									tpd_Tli_Male_json.put("margin_rate", data.getPrem_assump_rate_lookup().getMargin_rate());
									tpd_Tli_Male_json.put("sex", data.getPrem_assump_rate_lookup().getGender());
									tpd_Tli_jsonArray.put(tpd_Tli_Male_json);
									break;
								 }else {
									 tpd_Tli_Male_json.put("tpd_tli_id", data.getPrem_assump_rate().getPrem_assump_rate_id());
									 tpd_Tli_Male_json.put("name_TH", data.getPrem_assump_rate_lookup().getName_th());
									 tpd_Tli_Male_json.put("name_EN", data.getPrem_assump_rate_lookup().getName_en());
									 tpd_Tli_Male_json.put("apply_rate", data.getPrem_assump_rate_lookup().getApply_rate());
									  tpd_Tli_Male_json.put("margin_rate", data.getPrem_assump_rate_lookup().getMargin_rate());
									 tpd_Tli_Male_json.put("sex", data.getPrem_assump_rate_lookup().getGender());
									 tpd_Tli_jsonArray.put(tpd_Tli_Male_json);
								 }
								 	
							 }else if (data.getPrem_assump_type().equals("MORTALITY")) {
								 if (data.getPrem_assump_rate_lookup().getGender().equals("EITHER")) {
									 mortality_Tli_Male_json.put("mort_tli_id", data.getPrem_assump_rate().getPrem_assump_rate_id());
									 mortality_Tli_Male_json.put("name_TH", data.getPrem_assump_rate_lookup().getName_th());
									 mortality_Tli_Male_json.put("name_EN", data.getPrem_assump_rate_lookup().getName_en());
									 mortality_Tli_Male_json.put("apply_rate", data.getPrem_assump_rate_lookup().getApply_rate());
									 mortality_Tli_Male_json.put("sex", data.getPrem_assump_rate_lookup().getGender());
									 mortality_Tli_jsonArray.put(mortality_Tli_Male_json);
									 break;
								 }else {
									 mortality_Tli_Male_json.put("mort_tli_id", data.getPrem_assump_rate().getPrem_assump_rate_id());
									 mortality_Tli_Male_json.put("name_TH", data.getPrem_assump_rate_lookup().getName_th());
									 mortality_Tli_Male_json.put("name_EN", data.getPrem_assump_rate_lookup().getName_en());
									 mortality_Tli_Male_json.put("apply_rate", data.getPrem_assump_rate_lookup().getApply_rate());
									 mortality_Tli_Male_json.put("sex", data.getPrem_assump_rate_lookup().getGender());
									 mortality_Tli_jsonArray.put(mortality_Tli_Male_json);
								 }
							 }
						} 
					 }
					 
					/* int morta_Male 	= 0; 
					 int morta_Female 	= 0; 
					 int tpd_Male		= 0;
					 int tpd_Female		= 0;
					 if (bpi.getListParticipantData().size() != 0) {
						 /////MortalityTli
						 for (int i = 0;i < bpi.getListParticipantData().size(); i++) {
							 morta_Male 	=  	bpi.getListParticipantData().get(i).getCoverage().getMale_mort_tli_id();
							 morta_Female 	=	bpi.getListParticipantData().get(i).getCoverage().getFemale_mort_tli_id();
							 //
							 tpd_Male		= 	bpi.getListParticipantData().get(i).getCoverage().getMale_tpd_tli_id();
							 tpd_Female		= 	bpi.getListParticipantData().get(i).getCoverage().getFemale_tpd_tli_id();
							 //
							 for (int ii = 0; ii < bpi.getListMortalityTli().size(); ii++) {
								 JSONObject mortality_Tli_Male_json = new JSONObject();
								 JSONObject mortality_Tli_Female_json = new JSONObject();
								 
								// ถ้าไม่มีข้อมูลจะไม่ไห้มัน put ข้อมูลลง array
								 if(!bpi.getListMortalityTli().get(ii).getGender().equals("NONE")){
									 if (morta_Male == morta_Female) {
										if (morta_Male == bpi.getListMortalityTli().get(ii).getMort_tli_id()) {		
												 mortality_Tli_Male_json.put("mort_tli_id", bpi.getListMortalityTli().get(ii).getMort_tli_id());
												 mortality_Tli_Male_json.put("name_TH", bpi.getListMortalityTli().get(ii).getName_th());
												 mortality_Tli_Male_json.put("name_EN", bpi.getListMortalityTli().get(ii).getName_en());
												 mortality_Tli_Male_json.put("apply_rate", bpi.getListMortalityTli().get(ii).getApply_rate());
												 mortality_Tli_Male_json.put("margin_rate", bpi.getListMortalityTli().get(ii).getMargin_rate());
												 mortality_Tli_Male_json.put("sex", bpi.getListMortalityTli().get(ii).getGender());
												 mortality_Tli_jsonArray.put(mortality_Tli_Male_json);
										 }
									 }else {
										 if (morta_Male == bpi.getListMortalityTli().get(ii).getMort_tli_id()) {
									     mortality_Tli_Male_json.put("mort_tli_id", bpi.getListMortalityTli().get(ii).getMort_tli_id());
										 mortality_Tli_Male_json.put("name_TH", bpi.getListMortalityTli().get(ii).getName_th());
										 mortality_Tli_Male_json.put("name_EN", bpi.getListMortalityTli().get(ii).getName_en());
										 mortality_Tli_Male_json.put("apply_rate", bpi.getListMortalityTli().get(ii).getApply_rate());
										 mortality_Tli_Male_json.put("margin_rate", bpi.getListMortalityTli().get(ii).getMargin_rate());
										 mortality_Tli_Male_json.put("sex", bpi.getListMortalityTli().get(ii).getGender());
										 mortality_Tli_jsonArray.put(mortality_Tli_Male_json);
										 }else if (morta_Female == bpi.getListMortalityTli().get(ii).getMort_tli_id()) {
											 mortality_Tli_Female_json.put("mort_tli_id", bpi.getListMortalityTli().get(ii).getMort_tli_id());
											 mortality_Tli_Female_json.put("name_TH", bpi.getListMortalityTli().get(ii).getName_th());
											 mortality_Tli_Female_json.put("name_EN", bpi.getListMortalityTli().get(ii).getName_en());
											 mortality_Tli_Female_json.put("apply_rate", bpi.getListMortalityTli().get(ii).getApply_rate());
											 mortality_Tli_Female_json.put("margin_rate", bpi.getListMortalityTli().get(ii).getMargin_rate());
											 mortality_Tli_Female_json.put("sex", bpi.getListMortalityTli().get(ii).getGender());
											 mortality_Tli_jsonArray.put(mortality_Tli_Female_json);
										 }
									 }
								 }
							 }
							 //
							 for (int ii = 0; ii < bpi.getListTpdTli().size(); ii++) {
								 JSONObject tpd_Tli_Male_json 	= new JSONObject();
								 JSONObject tpd_Tli_Female_json = new JSONObject();
								 
								 if(!bpi.getListTpdTli().get(ii).getGender().equals("NONE")) {
									 if (tpd_Male == tpd_Female) {
										if (tpd_Male == bpi.getListTpdTli().get(ii).getTpd_tli_id()) {		
												tpd_Tli_Male_json.put("tpd_tli_id", bpi.getListTpdTli().get(ii).getTpd_tli_id());
												tpd_Tli_Male_json.put("name_TH", bpi.getListTpdTli().get(ii).getName_th());
												tpd_Tli_Male_json.put("name_EN", bpi.getListTpdTli().get(ii).getName_en());
												tpd_Tli_Male_json.put("apply_rate", bpi.getListTpdTli().get(ii).getApply_rate());
												tpd_Tli_Male_json.put("margin_rate", bpi.getListTpdTli().get(ii).getMargin_rate());
												tpd_Tli_Male_json.put("sex", bpi.getListTpdTli().get(ii).getGender());
												tpd_Tli_jsonArray.put(tpd_Tli_Male_json);
										 }
									 }else {
										 if (tpd_Male == bpi.getListTpdTli().get(ii).getTpd_tli_id()) {		
											 tpd_Tli_Male_json.put("tpd_tli_id", bpi.getListTpdTli().get(ii).getTpd_tli_id());
											 tpd_Tli_Male_json.put("name_TH", bpi.getListTpdTli().get(ii).getName_th());
											 tpd_Tli_Male_json.put("name_EN", bpi.getListTpdTli().get(ii).getName_en());
											 tpd_Tli_Male_json.put("apply_rate", bpi.getListTpdTli().get(ii).getApply_rate());
											 tpd_Tli_Male_json.put("margin_rate", bpi.getListTpdTli().get(ii).getMargin_rate());
											 tpd_Tli_Male_json.put("sex", bpi.getListTpdTli().get(ii).getGender());
											 tpd_Tli_jsonArray.put(tpd_Tli_Male_json);
										 }else if (tpd_Female == bpi.getListTpdTli().get(ii).getTpd_tli_id()) {
											 tpd_Tli_Female_json.put("tpd_tli_id", bpi.getListTpdTli().get(ii).getTpd_tli_id());
											 tpd_Tli_Female_json.put("name_TH", bpi.getListTpdTli().get(ii).getName_th());
											 tpd_Tli_Female_json.put("name_EN", bpi.getListTpdTli().get(ii).getName_en());
											 tpd_Tli_Female_json.put("apply_rate", bpi.getListTpdTli().get(ii).getApply_rate());
											 tpd_Tli_Female_json.put("margin_rate", bpi.getListTpdTli().get(ii).getMargin_rate());
											 tpd_Tli_Female_json.put("sex", bpi.getListTpdTli().get(ii).getGender());
											 tpd_Tli_jsonArray.put(tpd_Tli_Female_json);
										 }
									 }
							 	}
							 }
						 }
					 }*/
					 
					 //อัตราดอกเบี้ย
					 if (bpi.getListParticipantData().size() != 0) {
						 for (int i = 0;i < bpi.getListParticipantData().size(); i++) {
							 //อัตราดอกเบี้ยที่ใช้ในการคำนวนเบี้ยประกัน
							 BigDecimal bd_prem_Rate = new BigDecimal(bpi.getListParticipantData().get(i).getCoverage().getPrem_int_rate().toString());
							 prem_Rate = (bd_prem_Rate).toString();
							// อัตราดอกเบี้ยที่ใช้ในการคำนวนทุน
							 BigDecimal bd_sum_decr_rate = new BigDecimal(bpi.getListParticipantData().get(i).getCoverage().getSum_decr_int_rate().toString());
							 sum_decr_rate = (bd_sum_decr_rate).toString();
						 }
					 }
					 //ลดหย่อนภาษี
					 if (bpi.getListRateLayoutTAX().size() != 0) {
						 for (int i = 0; i < bpi.getListRateLayoutTAX().size(); i++) {
							 JSONObject tb_TaxReduce_json = new JSONObject();
							 tb_TaxReduce_json.put("id", bpi.getListRateLayoutTAX().get(i).getRateLayout().getRate_layout_id());
							 tb_TaxReduce_json.put("pass", Integer.toString(bpi.getListRateLayoutTAX().get(i).getRateLayoutLookup().getRate_cat_id()));
							 tb_TaxReduce_json.put("text", bpi.getListRateLayoutTAX().get(i).getRateLayoutLookup().getName_th());
							 tb_TaxReduce_json.put("fileID", bpi.getListRateLayoutTAX().get(i).getRateLayout().getFile_id());
							 if (bpi.getListRateLayoutTAX().get(i).getFile().getFile_name() != null) {
								 tb_TaxReduce_json.put("layout", bpi.getListRateLayoutTAX().get(i).getFile().getFile_name());
								 tb_TaxReduce_json.put("ref", bpi.getListRateLayoutTAX().get(i).getFile().getFile_url());
							 }
							 tb_TaxReduce_jsonArray.put(tb_TaxReduce_json);
						 }
						
					 }
					 //หมายเหตุ
					 if (bpi.getListNote().size() != 0) {
						 note  = bpi.getListNote().get(0).getNote();
					 } 
				}
				//mode
				if(bpi.getListMode().size() != 0) {
					for(int i = 0 ; i < bpi.getListMode().size(); i++)
					{
						JSONObject json_Mode = new JSONObject();
						json_Mode.put("value",bpi.getListMode().get(i).getMode());
						mode_jsonArray.put(json_Mode);
					}
				}
				//Filing_channel
				if (bpi.getListFiling_channel().size() != 0) {
					for(int i = 0 ; i < bpi.getListFiling_channel().size(); i++)
					{
						JSONObject json_filing_Channel = new JSONObject();
						json_filing_Channel.put("value", bpi.getListFiling_channel().get(i).getFiling_chan_id());
						filing_Channel_jsonArray.put(json_filing_Channel);
					}
				}
				//cal_Age
				ParticipantAccessData cc = bpi.getListParticipantData().get(0);
				if (cc.getListAgeCalcMeth() != null) {
					for (int i = 0 ; i < bpi.getListParticipantData().size(); i++) {
						ArrayList<Age_calc_meth> ls = cc.getListAgeCalcMeth();
						for(Age_calc_meth age_calc_meth : ls)
						{
							JSONObject json_cal_Age = new JSONObject();
							json_cal_Age.put("value", age_calc_meth.getAge_calc_meth());
							cal_Age_jsonArray.put(json_cal_Age);								
						}
					}
				}
				//rider_code
				ProductControlData pcd 			= new ProductControlData();
				ArrayList<Product> arr_Product 	= pcd.searchProductByCovCode(insurance_premium_Code);
				if(arr_Product.size() != 0) {
					rider_code					= arr_Product.get(0).getCore_biz_prd_code();
				}else {
					rider_code = "";
				}
				////Benz 12-09-2019 get new Status
				String status_RP = "";
				WorkFlowCoverage wfc = new WorkFlowCoverage();
				ArrayList<Coverage_task> arr_getCoverage_task = wfc.searchCoverageTask();
				for (int i = 0; i < arr_getCoverage_task.size(); i++) {
					if (arr_getCoverage_task.get(i).getDepartment().equals("P03") || 
							arr_getCoverage_task.get(i).getDepartment().equals("RP") ||
							arr_getCoverage_task.get(i).getDepartment().equals("RP_Test")) 
					{
						status_RP = arr_getCoverage_task.get(i).getApprove_status();
					}
				}
				
				JSONArray  basic_Info_jsonArray	= new JSONArray();
				JSONObject json_basic_Info = new JSONObject();
				json_basic_Info.put("passInsurance",passInsurance);
				json_basic_Info.put("rider_code",rider_code);
				json_basic_Info.put("nameTH",nameTH);
				json_basic_Info.put("nameEN",nameEN);
				json_basic_Info.put("cov_cat_id",cov_cat_id);
				json_basic_Info.put("sale_eff_date",sale_eff_date);
				json_basic_Info.put("sale_exp_date",sale_exp_date);
				json_basic_Info.put("age_Start",Integer.toString(age_Start));
				json_basic_Info.put("age_Start_unit",age_Start_Unil);
				json_basic_Info.put("age_To",Integer.toString(age_To));
				json_basic_Info.put("age_To_unit",age_To_Unil);
				json_basic_Info.put("maximum_Protection_To",Integer.toString(maximum_Protection_To));
				///
				json_basic_Info.put("mode",mode_jsonArray);
				json_basic_Info.put("filing_Channel",filing_Channel_jsonArray);
				json_basic_Info.put("cal_Age",cal_Age_jsonArray);
				//
				json_basic_Info.put("sex",sex);
				//json_basic_Info.put("insurance_premium",insurance_premium);
				json_basic_Info.put("coverage_type",coverage_type);
				json_basic_Info.put("contract_type",contract_type);
				//ระยะประกันของสัญญาประกันชีวิต
				json_basic_Info.put("insurance_period_radio",insurance_period_radio);
				json_basic_Info.put("insurance_period",insurance_period_Det);
				//ระยะชำระเบี้ยของสัญญาประกันชีวิต
				json_basic_Info.put("premium_preiod_radio",premium_preiod_radio);
				json_basic_Info.put("premium_preiod_unit",premium_preiod_unit);
				json_basic_Info.put("premium_num",Integer.toString(premium_num));
				//แบ่งชำระ
				json_basic_Info.put("pay_separately_checkbox",pay_separately_checkbox);
				json_basic_Info.put("pay_separately",pay_separately_jsonArray);
				//
				json_basic_Info.put("mortality_Tli",mortality_Tli_jsonArray);
				json_basic_Info.put("tpd_Tli",tpd_Tli_jsonArray);
				//อัตราดอกเบี้ย
				json_basic_Info.put("prem_Rate",prem_Rate);
				json_basic_Info.put("sum_decr_rate",sum_decr_rate);
				////ลดหย่อนภาษี
				json_basic_Info.put("table_TaxReduce",tb_TaxReduce_jsonArray);
				//หมายเหตุ
				json_basic_Info.put("note",note);
				//Benz 16-08-2019
				json_basic_Info.put("status",status);
				json_basic_Info.put("status_RP",status_RP);
				//Benz 27-08-2019
				json_basic_Info.put("tax_health_prem",tax_health_prem);
				basic_Info_jsonArray.put(json_basic_Info);
				responsejson.put("Tab_Basic_Information",basic_Info_jsonArray);
				
				//////////////////////////////////END///////////////////////////////////
				//////////////////////////////Policy Wording/////////////////////////
				JSONArray  tb_Policy_Wording_jsonArray	= new JSONArray();
				int tab = 2;
				ArrayList<DocumentAcessData> datareturn;
				datareturn = bpi.getListDocumentAcessData();
				for (int i = 0 ; i < datareturn.size(); i++) {
					JSONObject json_tb_Policy_Wording = new JSONObject();
					json_tb_Policy_Wording.put("doc_type_id", datareturn.get(i).getDocument().getDoc_type_id());
					JSONArray file_policyWording_jsonArray = new JSONArray();
					for(int ii=0 ; ii < datareturn.get(i).getListFile().size() ; ii++) {
						JSONObject json_file_Policy_Wording = new JSONObject();
						json_file_Policy_Wording.put("file_id", datareturn.get(i).getListFile().get(ii).getFile_id());
						json_file_Policy_Wording.put("file_type", datareturn.get(i).getListFile().get(ii).getFile_type_id());
						json_file_Policy_Wording.put("file_ref", datareturn.get(i).getListFile().get(ii).getFile_url());
						json_file_Policy_Wording.put("file_name", datareturn.get(i).getListFile().get(ii).getFile_name());
						file_policyWording_jsonArray.put(json_file_Policy_Wording);
					}
					json_tb_Policy_Wording.put("file", file_policyWording_jsonArray);
					tb_Policy_Wording_jsonArray.put(json_tb_Policy_Wording);
				}
				responsejson.put("Tab_Policy_Wording",tb_Policy_Wording_jsonArray);
				
				//
				/////////////////////////////////////////////////////////////////////
				/////////////////////////////ผู้ได้รับความคุ้มครอง//////////////////////
				//if (bpi.getListParticipantAll() != null && bpi.getListParticipantAll().size() != 0) {
					JSONArray  protected_person_jsonArray	= new JSONArray();
					for (int i = 0; i <  bpi.getListParticipantAll().size(); i++) {
						JSONObject json_protected_person = new JSONObject();
							json_protected_person.put("type", bpi.getListParticipantAll().get(i).getPartic_type());
							json_protected_person.put("min_age", bpi.getListParticipantAll().get(i).getMin_issue_age());
							json_protected_person.put("min_age_unit", bpi.getListParticipantAll().get(i).getMin_issue_age_unit());
							json_protected_person.put("max_age", bpi.getListParticipantAll().get(i).getMax_issue_age());
							json_protected_person.put("max_age_unit", bpi.getListParticipantAll().get(i).getMax_issue_age_unit());
							json_protected_person.put("prem", bpi.getListParticipantAll().get(i).getPrem_rule());
							protected_person_jsonArray.put(json_protected_person);
					}
					JSONArray exercise_rights_insurance_jsonArray	= new JSONArray();
					JSONObject exercise_rights_insurance = new JSONObject();
					exercise_rights_insurance.put("protected_person", protected_person_jsonArray);
					exercise_rights_insurance_jsonArray.put(exercise_rights_insurance);
					responsejson.put("Tab_protected_person",exercise_rights_insurance_jsonArray);
					
					/////////////////////////////////////////////////////////////////////
					
					/////////////////////////////Tab การคำนวนเบี้ยประกัน//////////////////////
					JSONArray	age_Band_jsonArray	= new JSONArray();
					for (int i = 0 ; i < bpi.getListRateLayoutStandard().size(); i++) {
						JSONObject json_age_Band = new JSONObject();
						if(!bpi.getListRateLayoutStandard().get(i).getRateLayout().getAge_band_code().equals("")) {
							json_age_Band.put("value", bpi.getListRateLayoutStandard().get(i).getRateLayout().getAge_band_code());
							age_Band_jsonArray.put(json_age_Band);
						}
					}
					//เบี้ยมาตรฐาน
					//select box ตารางเบี้ยประกัน
					JSONArray	select_Insurance_premium_jsonArray	= new JSONArray();
					JSONArray	tb_Insurance_premium_jsonArray	= new JSONArray();
					
					for (int i = 0 ; i < bpi.getListRateLayoutStandard().size(); i++) {
									String text = "";
									int pass = 0;
									JSONObject json_select_Insurance_premium = new JSONObject();
									if (bpi.getListRateLayoutStandard().get(i).getRateLayoutLookup() != null) {
										if (bpi.getListRateLayoutStandard().get(i).getRateLayoutLookup().getName_th() != "") {
											text = bpi.getListRateLayoutStandard().get(i).getSubCat().getName_th();
										}
										if (bpi.getListRateLayoutStandard().get(i).getRateLayoutLookup().getRate_cat_id() != 0) {
											pass = bpi.getListRateLayoutStandard().get(i).getRateLayoutLookup().getRate_cat_id();
										}
									}
									json_select_Insurance_premium.put("pass",pass);
									json_select_Insurance_premium.put("text",text);
									select_Insurance_premium_jsonArray.put(json_select_Insurance_premium);
									/////Table
									JSONObject json_tb_Insurance_premium = new JSONObject();
									String type 		= 	"";
									String file_name 	= 	"";
									String file_url 	= 	""; 
									int pass2			= 	0;
									int layoutID		= 	0;
									int fileID			= 	0;
									String 	sub_code	=  "";	
									if (bpi.getListRateLayoutStandard().get(i).getRateLayout() != null) {
										if (bpi.getListRateLayoutStandard().get(i).getRateLayout().getAge_band_code() != "") {
											type = bpi.getListRateLayoutStandard().get(i).getRateLayout().getAge_band_code();
										}
										if (bpi.getListRateLayoutStandard().get(i).getRateLayout().getRate_cat_id() != 0) {
											pass2 = bpi.getListRateLayoutStandard().get(i).getRateLayout().getRate_cat_id();
										}
										if (bpi.getListRateLayoutStandard().get(i).getRateLayout().getRate_layout_id() != 0) {
											layoutID = bpi.getListRateLayoutStandard().get(i).getRateLayout().getRate_layout_id();
										}
										if (bpi.getListRateLayoutStandard().get(i).getRateLayout().getFile_id() != 0) {
											fileID = bpi.getListRateLayoutStandard().get(i).getRateLayout().getFile_id();
										}
										if (!bpi.getListRateLayoutStandard().get(i).getRateLayout().getSub_code().equals("") || !!bpi.getListRateLayoutStandard().get(i).getRateLayout().getSub_code().equals("null")) {
											sub_code = bpi.getListRateLayoutStandard().get(i).getRateLayout().getSub_code();
										}
										
									}
									if(bpi.getListRateLayoutStandard().get(i).getFile() != null) {
										if (bpi.getListRateLayoutStandard().get(i).getFile().getFile_name() != "") {
											file_name = bpi.getListRateLayoutStandard().get(i).getFile().getFile_name();
										}	
										if (bpi.getListRateLayoutStandard().get(i).getFile().getFile_url() != "") {
											file_url = bpi.getListRateLayoutStandard().get(i).getFile().getFile_url();
										}
									}
									
									//Pun add Lookup layoutDet 18-12-2019
									JSONArray tb_layoutdet1_jsonArray 	= new JSONArray(); 
									JSONArray tb_layoutdet2_jsonArray 	= new JSONArray(); 
									String[] arrRateCat = new String[1]; 
									arrRateCat[0] = String.valueOf(pass2);
									datareturnDet = mdc.searchTax(arrRateCat);
									if (datareturnDet.size() > 0) {
										for (int j = 0; j < datareturnDet.size(); j++) {
											for (int jj = 0; jj < datareturnDet.get(j).getListRateLayout().size(); jj++) {
												tb_layoutdet1_jsonArray 	= new JSONArray(); 
												JSONObject tb_layoutdet_JSONObject 	= new JSONObject();
												for (int jjj = 0; jjj < datareturnDet.get(j).getListRateLayout().get(jj).getListRateLayoutDet().size(); jjj++) {
													if(layoutID == datareturnDet.get(j).getListRateLayout().get(jj).getListRateLayoutDet().get(jjj).getRate_layout_id()) {
														JSONObject json_rateLayoutDet = new JSONObject();
														json_rateLayoutDet.put("rate_layout_id",datareturnDet.get(j).getListRateLayout().get(jj).getListRateLayoutDet().get(jjj).getRate_layout_id());
														json_rateLayoutDet.put("column_name",datareturnDet.get(j).getListRateLayout().get(jj).getListRateLayoutDet().get(jjj).getColumn_name());
														json_rateLayoutDet.put("column_len",datareturnDet.get(j).getListRateLayout().get(jj).getListRateLayoutDet().get(jjj).getColumn_len());
														tb_layoutdet1_jsonArray.put(json_rateLayoutDet);
													}
												}
												if(tb_layoutdet1_jsonArray.length() != 0) {
													tb_layoutdet_JSONObject.put("rate_layout_det",tb_layoutdet1_jsonArray);
													tb_layoutdet2_jsonArray.put(tb_layoutdet_JSONObject);
												}
											};
										}
									}
									
									json_tb_Insurance_premium.put("pass", pass2);
									json_tb_Insurance_premium.put("layout", layoutID);
									json_tb_Insurance_premium.put("type", type);
									json_tb_Insurance_premium.put("fileID", fileID);
									json_tb_Insurance_premium.put("file", file_name);
									json_tb_Insurance_premium.put("sub_code", sub_code);
									json_tb_Insurance_premium.put("ref", file_url);
									json_tb_Insurance_premium.put("rate_layout_det", tb_layoutdet2_jsonArray);
									tb_Insurance_premium_jsonArray.put(json_tb_Insurance_premium);
					}
					//เบี้ยเพิ่มพิเศษ
					JSONArray	select_extra_Rate_jsonArray	= new JSONArray();
					JSONArray	tb_extra_Rate_jsonArray	= new JSONArray();
					for (int i = 0 ; i < bpi.getListRateLayoutSpecial().size(); i++) {
						JSONObject json_select_extra_Rate = new JSONObject();
						String text = "";
						
						if (bpi.getListRateLayoutSpecial().get(i).getRateLayoutLookup() != null) {
							if (bpi.getListRateLayoutSpecial().get(i).getRateLayoutLookup().getName_th() != "") {
								//text = bpi.getListRateLayoutSpecial().get(i).getRateLayoutLookup().getName_th();
								text = bpi.getListRateLayoutSpecial().get(i).getSubCat().getName_th();
							}							
							
						}
						json_select_extra_Rate.put("pass",Integer.toString(i+1));
						json_select_extra_Rate.put("text",text);
						select_extra_Rate_jsonArray.put(json_select_extra_Rate);
					/////Table
						JSONObject json_extra_Rate = new JSONObject();						
						String type 		= 	"";
						String file_name 	= 	""; 
						String file_url 	= 	""; 
						int pass2			= 	0;
						int layoutID		= 	0;
						int fileID			= 	0;
						String 	sub_code	=  "";	
						if (bpi.getListRateLayoutSpecial().get(i).getRateLayout() != null) {
							if (bpi.getListRateLayoutSpecial().get(i).getRateLayout().getAge_band_code() != "") {
								type = bpi.getListRateLayoutSpecial().get(i).getRateLayout().getAge_band_code();
							}
							if (bpi.getListRateLayoutSpecial().get(i).getRateLayout().getRate_cat_id() != 0) {
								pass2 = bpi.getListRateLayoutSpecial().get(i).getRateLayout().getRate_cat_id();
							}
							if (bpi.getListRateLayoutSpecial().get(i).getRateLayout().getRate_layout_id() != 0) {
								layoutID = bpi.getListRateLayoutSpecial().get(i).getRateLayout().getRate_layout_id();
							}
							if (bpi.getListRateLayoutSpecial().get(i).getRateLayout().getFile_id() != 0) {
								fileID = bpi.getListRateLayoutSpecial().get(i).getRateLayout().getFile_id();
							}
							if (!bpi.getListRateLayoutSpecial().get(i).getRateLayout().getSub_code().equals("") || !!bpi.getListRateLayoutSpecial().get(i).getRateLayout().getSub_code().equals("null")) {
								sub_code = bpi.getListRateLayoutSpecial().get(i).getRateLayout().getSub_code();
							}
						}
						if(bpi.getListRateLayoutSpecial().get(i).getFile() != null) {
							if (bpi.getListRateLayoutSpecial().get(i).getFile().getFile_name() != "") {
								file_name = bpi.getListRateLayoutSpecial().get(i).getFile().getFile_name();
							}	
							if (bpi.getListRateLayoutStandard().get(i).getFile().getFile_url() != "") {
								file_url = bpi.getListRateLayoutStandard().get(i).getFile().getFile_url();
							}
						}
						
						//Pun add Lookup layoutDet 18-12-2019
						JSONArray tb_layoutdet1_jsonArray 	= new JSONArray(); 
						JSONArray tb_layoutdet2_jsonArray 	= new JSONArray(); 
						String[] arrRateCat = new String[1]; 
						arrRateCat[0] = String.valueOf(pass2);
						datareturnDet = mdc.searchTax(arrRateCat);
						if (datareturnDet.size() > 0) {
							for (int j = 0; j < datareturnDet.size(); j++) {
								for (int jj = 0; jj < datareturnDet.get(j).getListRateLayout().size(); jj++) {
									tb_layoutdet1_jsonArray 	= new JSONArray(); 
									JSONObject tb_layoutdet_JSONObject 	= new JSONObject();
									for (int jjj = 0; jjj < datareturnDet.get(j).getListRateLayout().get(jj).getListRateLayoutDet().size(); jjj++) {
										if(layoutID == datareturnDet.get(j).getListRateLayout().get(jj).getListRateLayoutDet().get(jjj).getRate_layout_id()) {
											JSONObject json_rateLayoutDet = new JSONObject();
											json_rateLayoutDet.put("rate_layout_id",datareturnDet.get(j).getListRateLayout().get(jj).getListRateLayoutDet().get(jjj).getRate_layout_id());
											json_rateLayoutDet.put("column_name",datareturnDet.get(j).getListRateLayout().get(jj).getListRateLayoutDet().get(jjj).getColumn_name());
											json_rateLayoutDet.put("column_len",datareturnDet.get(j).getListRateLayout().get(jj).getListRateLayoutDet().get(jjj).getColumn_len());
											tb_layoutdet1_jsonArray.put(json_rateLayoutDet);
										}
									}
									if(tb_layoutdet1_jsonArray.length() != 0) {
										tb_layoutdet_JSONObject.put("rate_layout_det",tb_layoutdet1_jsonArray);
										tb_layoutdet2_jsonArray.put(tb_layoutdet_JSONObject);
									}
								};
							}
						}
						
						json_extra_Rate.put("pass", pass2);
						json_extra_Rate.put("layout", layoutID);
						json_extra_Rate.put("type", type);
						json_extra_Rate.put("fileID", fileID);
						json_extra_Rate.put("file", file_name);
						json_extra_Rate.put("sub_code", sub_code);
						json_extra_Rate.put("ref", file_url);
						json_extra_Rate.put("rate_layout_det", tb_layoutdet2_jsonArray);
						tb_extra_Rate_jsonArray.put(json_extra_Rate);
					}
					//MIN MAX EM
					String min_EM = "";
					String max_EM = "";
					boolean is_substd	= false;
					boolean is_sa_decr	= false;
					//
					boolean prem_disc   = false;
					String prem_min		= "";
					String prem_max		= "";
					BigDecimal bd_min 	= new BigDecimal(0);
					BigDecimal bd_max 	= new BigDecimal(0);
					for (int i = 0; i < bpi.getListParticipantData().size(); i++) {
						if (bpi.getListParticipantData().get(i).getCoverage() != null) {
							//มีส่วนลดเบี้ยประกัน
							prem_disc = bpi.getListParticipantData().get(i).getCoverage().getIs_prem_disc();
							BigDecimal dbprem_min = new BigDecimal(bpi.getListParticipantData().get(i).getCoverage().getMin_prem_disc_rate().toString());
							BigDecimal dbprem_max = new BigDecimal(bpi.getListParticipantData().get(i).getCoverage().getMax_prem_disc_rate().toString());
							prem_min	= (dbprem_min).toString();
							prem_max	= (dbprem_max).toString();
							//
						
							if (bpi.getListParticipantData().get(i).getCoverage().getMin_em() != null) {
								 bd_min = new BigDecimal(bpi.getListParticipantData().get(i).getCoverage().getMin_em().toString());

							}
							if (bpi.getListParticipantData().get(i).getCoverage().getMax_em() != null) {
								 bd_max = new BigDecimal(bpi.getListParticipantData().get(i).getCoverage().getMax_em().toString());
							}
							min_EM = (bd_min).toString();
							max_EM = (bd_max).toString();
							
							is_substd  = bpi.getListParticipantData().get(i).getCoverage().getIs_substd();
							is_sa_decr = bpi.getListParticipantData().get(i).getCoverage().getIs_sa_decr();
						
						}
					}
					//นำเข้า ตารางช่วงอายุที่รับเบี้ยเพิ่ม  
					JSONArray	em_age_jsonArray	= new JSONArray();
					if (bpi.getListRateLayoutBetweenAge().size() != 0) {
						JSONObject json_em_age = new JSONObject();
						String type 		= 	"";
						String file_name 	= 	"";
						String file_url 	= 	"";
						int pass2			= 	0;
						int layoutID		= 	0;
						int fileID			= 	0;
						String 	sub_code	=  "";
						if (bpi.getListRateLayoutBetweenAge().get(0).getRateLayout() != null) {
							if (bpi.getListRateLayoutBetweenAge().get(0).getRateLayout().getAge_band_code() != "") {
								type = bpi.getListRateLayoutBetweenAge().get(0).getRateLayout().getAge_band_code();
							}
							if (bpi.getListRateLayoutBetweenAge().get(0).getRateLayout().getRate_cat_id() != 0) {
								pass2 = bpi.getListRateLayoutBetweenAge().get(0).getRateLayout().getRate_cat_id();
							}
							if (bpi.getListRateLayoutBetweenAge().get(0).getRateLayout().getRate_layout_id() != 0) {
								layoutID = bpi.getListRateLayoutBetweenAge().get(0).getRateLayout().getRate_layout_id();
							}
							if (bpi.getListRateLayoutBetweenAge().get(0).getRateLayout().getFile_id() != 0) {
								fileID = bpi.getListRateLayoutBetweenAge().get(0).getRateLayout().getFile_id();
							}
							if (!bpi.getListRateLayoutBetweenAge().get(0).getRateLayout().getSub_code().equals("") || !!bpi.getListRateLayoutBetweenAge().get(0).getRateLayout().getSub_code().equals("null")) {
								sub_code = bpi.getListRateLayoutBetweenAge().get(0).getRateLayout().getSub_code();
							}
						}
						
						if(bpi.getListRateLayoutBetweenAge().get(0).getFile() != null) {
							if (bpi.getListRateLayoutBetweenAge().get(0).getFile().getFile_name() != "") {
								file_name = bpi.getListRateLayoutBetweenAge().get(0).getFile().getFile_name();
							}
							if (bpi.getListRateLayoutBetweenAge().get(0).getFile().getFile_url() != "") {
								file_url = bpi.getListRateLayoutBetweenAge().get(0).getFile().getFile_url();
							}
						}
						
						//Pun add Lookup layoutDet 18-12-2019
						JSONArray tb_layoutdet1_jsonArray 	= new JSONArray(); 
						JSONArray tb_layoutdet2_jsonArray 	= new JSONArray(); 
						String[] arrRateCat = new String[1]; 
						arrRateCat[0] = String.valueOf(pass2);
						datareturnDet = mdc.searchTax(arrRateCat);
						if (datareturnDet.size() > 0) {
							for (int j = 0; j < datareturnDet.size(); j++) {
								for (int jj = 0; jj < datareturnDet.get(j).getListRateLayout().size(); jj++) {
									tb_layoutdet1_jsonArray 	= new JSONArray(); 
									JSONObject tb_layoutdet_JSONObject 	= new JSONObject();
									for (int jjj = 0; jjj < datareturnDet.get(j).getListRateLayout().get(jj).getListRateLayoutDet().size(); jjj++) {
										if(layoutID == datareturnDet.get(j).getListRateLayout().get(jj).getListRateLayoutDet().get(jjj).getRate_layout_id()) {
											JSONObject json_rateLayoutDet = new JSONObject();
											json_rateLayoutDet.put("rate_layout_id",datareturnDet.get(j).getListRateLayout().get(jj).getListRateLayoutDet().get(jjj).getRate_layout_id());
											json_rateLayoutDet.put("column_name",datareturnDet.get(j).getListRateLayout().get(jj).getListRateLayoutDet().get(jjj).getColumn_name());
											json_rateLayoutDet.put("column_len",datareturnDet.get(j).getListRateLayout().get(jj).getListRateLayoutDet().get(jjj).getColumn_len());
											tb_layoutdet1_jsonArray.put(json_rateLayoutDet);
										}
									}
									if(tb_layoutdet1_jsonArray.length() != 0) {
										tb_layoutdet_JSONObject.put("rate_layout_det",tb_layoutdet1_jsonArray);
										tb_layoutdet2_jsonArray.put(tb_layoutdet_JSONObject);
									}
								};
							}
						}
						
						json_em_age.put("pass", pass2);
						json_em_age.put("layout", layoutID);
						json_em_age.put("type", type);
						json_em_age.put("fileID", fileID);
						json_em_age.put("file", file_name);
						json_em_age.put("sub_code", sub_code);
						json_em_age.put("ref", file_url);
						json_em_age.put("rate_layout_det", tb_layoutdet2_jsonArray);
						em_age_jsonArray.put(json_em_age);
					}
					//อัตราเบี้ยฯเพิ่มตามชั้นอาชีพ
					JSONArray	Prem_occ_charge_jsonArray	= new JSONArray();
					if (bpi.getListPrem_occ_charge() !=  null) {
						for (int i = 0; i < bpi.getListPrem_occ_charge().size(); i++) {
								JSONObject json_Prem_occ_charge = new JSONObject();
								json_Prem_occ_charge.put("lvclass", bpi.getListPrem_occ_charge().get(i).getOcc_class());
								json_Prem_occ_charge.put("start", bpi.getListPrem_occ_charge().get(i).getMin_charge_rate());
								json_Prem_occ_charge.put("to", bpi.getListPrem_occ_charge().get(i).getMax_charge_rate());
								Prem_occ_charge_jsonArray.put(json_Prem_occ_charge);
						}
					}
				////-----------------------GetLookup selectbox premiumrate---------------------/////
					JSONArray	pm_Type_premium_jsonArray		= new JSONArray();
					int cov_cat = 0;
				
					if (bpi.getListParticipantData().size() != 0) {
						ArrayList<String[]> listSearchSubCat_premium = new ArrayList<>();
						if (bpi.getListParticipantData().get(0).getCoverage() != null) {
							cov_cat					= bpi.getListParticipantData().get(0).getCoverage().getCov_cat_id();
						}
						CovCatSubCodeData cscd	= new CovCatSubCodeData();
						listSearchSubCat_premium = cscd.searchSubCatByPmstdRateCat(Integer.toString(cov_cat));
						JSONArray jsonArr_benefitsCoverage = new JSONArray(listSearchSubCat_premium);
						for (int i = 0; i < jsonArr_benefitsCoverage.length(); i++) {
							JSONObject json_pm_Type_premium = new JSONObject();
							json_pm_Type_premium.put("name", jsonArr_benefitsCoverage.get(i));
							pm_Type_premium_jsonArray.put(json_pm_Type_premium);
						}
					}
					
					JSONArray  cal_insurance_premiums_jsonArray	= new JSONArray();
					JSONObject json_cal_insurance_premiums = new JSONObject();
					json_cal_insurance_premiums.put("age_Band",age_Band_jsonArray);
					json_cal_insurance_premiums.put("select_insurance_premium",select_Insurance_premium_jsonArray);
					json_cal_insurance_premiums.put("table_insurance_premium",tb_Insurance_premium_jsonArray);
					json_cal_insurance_premiums.put("select_extra_Rate",select_extra_Rate_jsonArray);
					json_cal_insurance_premiums.put("table_extra_Rate",tb_extra_Rate_jsonArray);
					json_cal_insurance_premiums.put("prem_disc",prem_disc);
					json_cal_insurance_premiums.put("prem_min",prem_min);
					json_cal_insurance_premiums.put("prem_max",prem_max);
					json_cal_insurance_premiums.put("min_EM",min_EM);
					json_cal_insurance_premiums.put("max_EM",max_EM);
					json_cal_insurance_premiums.put("is_substd",is_substd);
					json_cal_insurance_premiums.put("is_sa_decr",is_sa_decr);
					json_cal_insurance_premiums.put("em_Age",em_age_jsonArray);
					json_cal_insurance_premiums.put("PM_Type_premium",pm_Type_premium_jsonArray);
					json_cal_insurance_premiums.put("Prem_occ_charge",Prem_occ_charge_jsonArray);
					cal_insurance_premiums_jsonArray.put(json_cal_insurance_premiums);
					responsejson.put("Tab_cal_insurance_premiums",cal_insurance_premiums_jsonArray);
					////////////////////////////////////////////////////////////////////////////////////////////////
					/////////////////////////////Tab ตารางมูลค่ากรมธรรม์//////////////////////
					JSONArray	select_policy_value_jsonArray	= new JSONArray();
					JSONArray	tb_policy_value_jsonArray		= new JSONArray();
					JSONArray	freezevalue_jsonArray			= new JSONArray();
					for (int i = 0 ; i < bpi.getListRateLayoutRiskStardard().size(); i++) {
						//
						JSONObject json_policy_value = new JSONObject();
						String text = "";
						if (bpi.getListRateLayoutRiskStardard().get(i).getRateLayoutLookup() != null) {
							if (bpi.getListRateLayoutRiskStardard().get(i).getRateLayoutLookup().getName_th() != "") {
								//text = bpi.getListRateLayoutRiskStardard().get(i).getRateLayoutLookup().getName_th();
								text = bpi.getListRateLayoutRiskStardard().get(i).getSubCat().getName_th();
							}
						}
						json_policy_value.put("pass",Integer.toString(i+1));
						json_policy_value.put("text",text);
						select_policy_value_jsonArray.put(json_policy_value);
					/////Table
						JSONObject json_tb_policy_value = new JSONObject();
						String type 		= 	"";
						String file_name 	= 	""; 
						String file_url 	= 	""; 
						int layoutid 		= 	0 ;
						int fileid 			= 	0;
						int pass			=   0;
						String 	sub_code	=  "";
						if (bpi.getListRateLayoutRiskStardard().get(i).getRateLayout() != null) {
							if (bpi.getListRateLayoutRiskStardard().get(i).getRateLayout().getAge_band_code() != "") {
								type 		= bpi.getListRateLayoutRiskStardard().get(i).getRateLayout().getAge_band_code();
								layoutid	= bpi.getListRateLayoutRiskStardard().get(i).getRateLayout().getRate_layout_id();
								pass		= bpi.getListRateLayoutRiskStardard().get(i).getRateLayout().getRate_cat_id();
								fileid		= bpi.getListRateLayoutRiskStardard().get(i).getRateLayout().getFile_id();
								if (!bpi.getListRateLayoutRiskStardard().get(i).getRateLayout().getSub_code().equals("") || !!bpi.getListRateLayoutRiskStardard().get(i).getRateLayout().getSub_code().equals("null")) {
									sub_code = bpi.getListRateLayoutRiskStardard().get(i).getRateLayout().getSub_code();
								}
								
								json_tb_policy_value.put("type", type);
								json_tb_policy_value.put("layout", Integer.toString(layoutid));
								json_tb_policy_value.put("pass", Integer.toString(pass));
								json_tb_policy_value.put("fileID", Integer.toString(fileid));
								json_tb_policy_value.put("sub_code", sub_code);
							}
						}
						if(bpi.getListRateLayoutRiskStardard().get(i).getFile() != null) {
							if (bpi.getListRateLayoutRiskStardard().get(i).getFile().getFile_name() != "") {
								file_name = bpi.getListRateLayoutRiskStardard().get(i).getFile().getFile_name();
								json_tb_policy_value.put("file", file_name);
							}	
							if (bpi.getListRateLayoutRiskStardard().get(i).getFile().getFile_url() != "") {
								file_url = bpi.getListRateLayoutRiskStardard().get(i).getFile().getFile_url();
								json_tb_policy_value.put("ref", file_url);
							}
						}
					
						tb_policy_value_jsonArray.put(json_tb_policy_value);
						freezevalue_jsonArray = tb_policy_value_jsonArray;
					}
					FreezePolicyValue fpv = new FreezePolicyValue();
					fpv.set_policy_value(freezevalue_jsonArray);
					
					JSONArray	select_Low_Risk_jsonArray	= new JSONArray();
					JSONArray	tb_Low_Risk_jsonArray		= new JSONArray();
					for (int i = 0 ; i < bpi.getListRateLayoutRiskLowStardard().size(); i++) {
						JSONObject json_Low_Risk = new JSONObject();
						String text = "";
						if (bpi.getListRateLayoutRiskLowStardard().get(i).getRateLayoutLookup() != null) {
							if (bpi.getListRateLayoutRiskLowStardard().get(i).getRateLayoutLookup().getName_th() != "") {
								text = bpi.getListRateLayoutRiskLowStardard().get(i).getSubCat().getName_th();
							}
						}
						json_Low_Risk.put("pass",Integer.toString(i+1));
						json_Low_Risk.put("text",text);
						select_Low_Risk_jsonArray.put(json_Low_Risk);
					/////Table
						JSONObject json_tb_Low_Risk = new JSONObject();
						String type 		= 	"";
						String file_name 	= 	""; 
						String file_url 	= 	""; 
						int layoutid 		= 	0 ;
						int fileid 			= 	0;
						int pass			=   0;
						String 	sub_code	=  "";
						if (bpi.getListRateLayoutRiskLowStardard().get(i).getRateLayout() != null) {
							if (bpi.getListRateLayoutRiskLowStardard().get(i).getRateLayout().getAge_band_code() != "") {
								type 		= bpi.getListRateLayoutRiskLowStardard().get(i).getRateLayout().getAge_band_code();
								layoutid	= bpi.getListRateLayoutRiskLowStardard().get(i).getRateLayout().getRate_layout_id();
								pass		= bpi.getListRateLayoutRiskLowStardard().get(i).getRateLayout().getRate_cat_id();
								fileid		= bpi.getListRateLayoutRiskLowStardard().get(i).getRateLayout().getFile_id();
								if (!bpi.getListRateLayoutRiskLowStardard().get(i).getRateLayout().getSub_code().equals("") || !!bpi.getListRateLayoutRiskLowStardard().get(i).getRateLayout().getSub_code().equals("null")) {
									sub_code = bpi.getListRateLayoutRiskLowStardard().get(i).getRateLayout().getSub_code();
								}
								
								json_tb_Low_Risk.put("type", type);
								json_tb_Low_Risk.put("layout", Integer.toString(layoutid));
								json_tb_Low_Risk.put("pass", Integer.toString(pass));
								json_tb_Low_Risk.put("fileID", Integer.toString(fileid));
								json_tb_Low_Risk.put("sub_code", sub_code);
							}
						}
						if(bpi.getListRateLayoutRiskLowStardard().get(i).getFile() != null) {
							if (bpi.getListRateLayoutRiskLowStardard().get(i).getFile().getFile_name() != "") {
								file_name = bpi.getListRateLayoutRiskLowStardard().get(i).getFile().getFile_name();
								json_tb_Low_Risk.put("file", file_name);
							}	
							if (bpi.getListRateLayoutRiskLowStardard().get(i).getFile().getFile_url() != "") {
								file_url = bpi.getListRateLayoutRiskLowStardard().get(i).getFile().getFile_url();
								json_tb_Low_Risk.put("ref", file_url);
							}
						}
						tb_Low_Risk_jsonArray.put(json_tb_Low_Risk);
					}
					
					JSONArray  policy_value_jsonArray	= new JSONArray();
					JSONObject json_policy_value = new JSONObject();
					
					json_policy_value.put("select_policy_value",select_policy_value_jsonArray);
					json_policy_value.put("table_policy_value",tb_policy_value_jsonArray);
					json_policy_value.put("select_Low_Risk",select_Low_Risk_jsonArray);
					json_policy_value.put("table_Low_Risk",tb_Low_Risk_jsonArray);
					policy_value_jsonArray.put(json_policy_value);
					//
					responsejson.put("Tab_table_policy_value",policy_value_jsonArray);
					
					////////////////////////////////////////////////////////////////////////////
					/////////////////////////////Tab ผลประโยชน์/ความคุ้มครอง//////////////////////
					JSONArray  benefit_jsonArray	= new JSONArray();
					
					for (int i = 0 ; i < bpi.getListBenefitCat().size(); i++) {
						JSONObject json_benefit 		= new JSONObject();
						json_benefit.put("bnf_Code",bpi.getListBenefitCat().get(i).getBnf_cat_code());
						json_benefit.put("name_th",bpi.getListBenefitCat().get(i).getName_th());
						
						benefit_jsonArray.put(json_benefit);
					}
					//
					responsejson.put("Tab_Benefit_Check",benefit_jsonArray);
					
					ArrayList<Object []> returnBenefitItemMaster = new ArrayList<>();
					RiderCL_SaveData_Service settoService = new RiderCL_SaveData_Service ();
					String[]  lstBenefit_itemMaster = new String[benefit_jsonArray.length()];
			        for (int i = 0; i < benefit_jsonArray.length(); i++)
			        {
			        	JSONObject jsonObj_layout = benefit_jsonArray.getJSONObject(i);
			        	lstBenefit_itemMaster[i] = jsonObj_layout.getString("bnf_Code");
			        }
					returnBenefitItemMaster = settoService.doCoverageBenefitItemMaster(passInsurance,lstBenefit_itemMaster,userId);
					responsejson.put("Tab_Benefit",returnBenefitItemMaster);
					////////////////////////////////////////////////////////////////////////////
					/////////////////////////////Tab ผลประโยชน์/ความคุ้มครอง//////////////////////
					JSONArray  endorse_jsonArray	= new JSONArray();
					JSONArray	arr_endrse			= new JSONArray();
					if (!bpi.getListEndorseRider().isEmpty()) {
						Benefit_item benefit_item = (Benefit_item) bpi.getListEndorseRider().get(0);
						JSONObject bnf_code_Master = new JSONObject();
						bnf_code_Master.put("bnf_item_id_Master", benefit_item.getBnf_item_id());
						endorse_jsonArray.put(bnf_code_Master);
						if (bpi.getListEndorseRider().size() != 0) {
							JSONObject json_endorse = new JSONObject();
							for (int i = 1 ; i < bpi.getListEndorseRider().size(); i++) {
								Benefit benefit = (Benefit) bpi.getListEndorseRider().get(i);
								JSONObject json_endorse2 = new JSONObject();
								json_endorse2.put("pass",benefit.getBnf_code());
								json_endorse2.put("text",benefit.getName_th());
								arr_endrse.put(json_endorse2);
							}
							json_endorse.put("Endorse",arr_endrse);
							endorse_jsonArray.put(json_endorse);
							//
						}else {
							endorse_jsonArray.put(new JSONArray());
						}
					}else {
						JSONObject bnf_code_Master = new JSONObject();
						bnf_code_Master.put("bnf_item_id_Master", "");
						endorse_jsonArray.put(bnf_code_Master);
						if (bpi.getListEndorseRider().size() != 0) {
							JSONObject json_endorse = new JSONObject();
							for (int i = 1 ; i < bpi.getListEndorseRider().size(); i++) {
								JSONObject json_endorse2 = new JSONObject();
								json_endorse2.put("pass","");
								json_endorse2.put("text","");
								arr_endrse.put(json_endorse2);
							}
							json_endorse.put("Endorse",arr_endrse);
							endorse_jsonArray.put(json_endorse);
							//
						}else {
							endorse_jsonArray.put(new JSONArray());
						}
					}
					
					EndorseData ed = new EndorseData();
					 ArrayList<Object[]> arr_Endorse = null;
					 arr_Endorse = ed.searchEndorseData();
					for (int i = 0; i < arr_Endorse.size(); i++) {
						if  (i == 0) {
							JSONObject json_endorse = new JSONObject();
							json_endorse.put("BasePlan",arr_Endorse.get(i)[1]);
							endorse_jsonArray.put(json_endorse);
						}else if (i == 1) {
							JSONObject json_endorse = new JSONObject();
							json_endorse.put("Rider",arr_Endorse.get(i)[1]);
							endorse_jsonArray.put(json_endorse);
						}
					}
					responsejson.put("Tab_Endorse",endorse_jsonArray);
					//
					responseText = responsejson.toString();
					System.out.println("getCaseRider : " + responseText);
			} else if (method.equals("GetCoop")) {
				////////////////////////////// coop//////////////////////////
				JSONArray tableCoop_Array = new JSONArray();
				JSONArray tableCoop_Commission_Array = new JSONArray();
				JSONArray tableCoop_Sum_Array = new JSONArray();
				JSONArray tableCoop_Prem_Discount_Array = new JSONArray();

				ArrayList<String[]> arr_cooperative = new ArrayList<>();
				ServiceForProductFactory spf = new ServiceForProductFactory();
				JSONArray cooperative_jsonArray = new JSONArray();
				arr_cooperative = spf.getAllCoopTLI();
				for (int i = 0; i < arr_cooperative.size(); i++) {
					JSONObject cooperative_Json = new JSONObject();
					cooperative_Json.put("pass", arr_cooperative.get(i)[0]);
					cooperative_Json.put("text", arr_cooperative.get(i)[1]);
					cooperative_jsonArray.put(cooperative_Json);
				}
				
				String   eff_date = "";
				String	 exp_date = "";
				//// Coop
				if (pim.getListCoop().size() != 0) {
					for (int i = 0; i < pim.getListCoop().size(); i++) {
						JSONObject json_tableCoop = new JSONObject();
						json_tableCoop.put("coop_code", pim.getListCoop().get(i).getCoop_code());
						for (int ii = 0; ii < arr_cooperative.size(); ii++) {
							if (arr_cooperative.get(ii)[0].equals(pim.getListCoop().get(i).getCoop_code())) {
								json_tableCoop.put("name", arr_cooperative.get(ii)[1]);
							}
						}
						eff_date = getDateFormat(pim.getListCoop().get(i).getEff_date());
						exp_date = getDateFormat(pim.getListCoop().get(i).getExp_date());
						json_tableCoop.put("eff_date", eff_date);
						json_tableCoop.put("exp_date", exp_date);
						json_tableCoop.put("seq", pim.getListCoop().get(i).getSeq());
						json_tableCoop.put("max_em", pim.getListCoop().get(i).getMax_em());
						json_tableCoop.put("master_policy", pim.getListCoop().get(i).getMaster_policy());

						tableCoop_Array.put(json_tableCoop);
					}
				}if (pim.getListCoop_Commission().size() != 0) {
					for (int i = 0; i < pim.getListCoop_Commission().size(); i++) {
						JSONObject json_tableCoop_Commission = new JSONObject();
						json_tableCoop_Commission.put("min_age", pim.getListCoop_Commission().get(i).getMin_age());
						json_tableCoop_Commission.put("max_age", pim.getListCoop_Commission().get(i).getMax_age());
						json_tableCoop_Commission.put("commission_rate", pim.getListCoop_Commission().get(i).getCommission_rate());
						json_tableCoop_Commission.put("seq", pim.getListCoop_Commission().get(i).getSeq());

						tableCoop_Commission_Array.put(json_tableCoop_Commission);
					}
				}if (pim.getListCoop_Sum().size() != 0) {
					for (int i = 0; i < pim.getListCoop_Sum().size(); i++) {
						JSONObject json_tableCoop_Sum = new JSONObject();
						json_tableCoop_Sum.put("min_age", pim.getListCoop_Sum().get(i).getMin_age());
						json_tableCoop_Sum.put("max_age", pim.getListCoop_Sum().get(i).getMax_age());
						json_tableCoop_Sum.put("min_sa", pim.getListCoop_Sum().get(i).getMin_sa());
						json_tableCoop_Sum.put("seq", pim.getListCoop_Sum().get(i).getSeq());
						tableCoop_Sum_Array.put(json_tableCoop_Sum);
					}
				}if (pim.getListCoop_prem_discount().size() != 0) {
					for (int i = 0; i < pim.getListCoop_prem_discount().size(); i++) {
						JSONObject json_tableCoop_prem_discount = new JSONObject();
						json_tableCoop_prem_discount.put("min_age", pim.getListCoop_prem_discount().get(i).getMin_age());
						json_tableCoop_prem_discount.put("max_age", pim.getListCoop_prem_discount().get(i).getMax_age());
						json_tableCoop_prem_discount.put("prem_disc_rate", pim.getListCoop_prem_discount().get(i).getPrem_disc_rate());
						json_tableCoop_prem_discount.put("seq", pim.getListCoop_prem_discount().get(i).getSeq());
						tableCoop_Prem_Discount_Array.put(json_tableCoop_prem_discount);
					}
				}	
				JSONArray coop_Array = new JSONArray();
				JSONObject cooperative_Json = new JSONObject();
				cooperative_Json.put("coop", tableCoop_Array);
				cooperative_Json.put("coop_Commission", tableCoop_Commission_Array);
				cooperative_Json.put("coop_Sum", tableCoop_Sum_Array);
				cooperative_Json.put("coop_Prem_Discount", tableCoop_Prem_Discount_Array);
				coop_Array.put(cooperative_Json);
				
				responsejson.put("coopAll",coop_Array);
				//
				 responseText = responsejson.toString();
			} else if (method.equals("GetlookupRM_Rate")) {
				
				RateLayoutData rld = new  RateLayoutData();
				String cov_code	 	= request.getParameter("cov_code");
				String rate_cat_id	= "";//request.getParameter("rate_cat");
				
				MainInsurance mi = new MainInsurance ();
				ArrayList<View_category> Listcategorys  = mi.searchCategory(cov_code);
				//////////////////Get type 
				if (Listcategorys.size() > 0 ) {
					if (Listcategorys.get(0).getCat_code1().equals("RO") || Listcategorys.get(0).getCat_code2().equals("OL")) {
						//OL
						rate_cat_id = "26,27";
					}else if (Listcategorys.get(0).getCat_code1().equals("RC") || Listcategorys.get(0).getCat_code2().equals("CL")) {
						//CL
						rate_cat_id = "1,2";
					}
				}
				
				String[] ary_rate_cat_id = rate_cat_id.split(",");
				ArrayList<RateLayoutPremAccessData> arr_Rate_layout = rld.searchCoverageRateLayout(cov_code, ary_rate_cat_id);
				JSONArray pm_Array = new JSONArray();
			for (int i = 0; i < arr_Rate_layout.size(); i++) {
				JSONObject pm_Json = new JSONObject();
				pm_Json.put("pattern", arr_Rate_layout.get(i).getRateLayoutLookup().getFile_name_pattern());
				pm_Json.put("rate_cat_id", arr_Rate_layout.get(i).getRateLayout().getRate_cat_id());
				pm_Json.put("rate_layout_id", arr_Rate_layout.get(i).getRateLayout().getRate_layout_id());
				pm_Json.put("sub_cat_id", arr_Rate_layout.get(i).getRateLayoutLookup().getSub_cat_id());
				pm_Json.put("file_name", arr_Rate_layout.get(i).getFile().getFile_name());
				pm_Json.put("file_id", arr_Rate_layout.get(i).getRateLayout().getFile_id());
				pm_Json.put("ref", arr_Rate_layout.get(i).getFile().getFile_url());
				pm_Array.put(pm_Json);
			}
				responsejson.put("Pm_Rate",pm_Array);
				//
				responseText = responsejson.toString();
			}else if (method.equals("searchByCovCatIdLv3")) {
				//pass
				String pass = request.getParameter("pass");
			  	JSONArray jsonArr_pass = new JSONArray(pass);
			  	String[] listPrd_code  = new String[jsonArr_pass.length()]; 
			  
		        for (int i = 0; i < jsonArr_pass.length(); i++)
		        {	
		            JSONObject jsonObj_pass = jsonArr_pass.getJSONObject(i);
		            listPrd_code[i] = (String) jsonObj_pass.get("pass");
		        }
		        ///
		        CoverageCatData cd = new CoverageCatData();
		        ArrayList<String[]> arr_Lv3 		=  new ArrayList<>();  
		        arr_Lv3 							= cd.searchCoverageCatLv3_ByCov_Code(listPrd_code);
				JSONArray	type_jsonArray	= new JSONArray();	
				if (arr_Lv3.size() != 0) {
					for (int i = 0; i < arr_Lv3.size(); i++) {
						String cov_cat_id	= "";
						String cov_code 	= "";
						String cat_code 	= "";
						String[] listarr_Lv3 		= arr_Lv3.get(i);
						JSONObject arr_type_JSONObject 	= new JSONObject();
						JSONArray type2_jsonArray = new JSONArray();
						for (int ii = 0; ii < listarr_Lv3.length; ii++) {
							JSONObject type_coverage_json = new JSONObject();
							if (ii == 0) {
								cov_cat_id 			= listarr_Lv3[ii];
								type_coverage_json.put("cov_cat_id",cov_cat_id);
							}else if (ii == 1) {
								cov_code 			= listarr_Lv3[ii];	
								type_coverage_json.put("cov_code",cov_code);
							}else if (ii == 2) {
								cat_code 	= listarr_Lv3[ii];
								type_coverage_json.put("text",cat_code);
							}
							type2_jsonArray.put(type_coverage_json);
						}
						arr_type_JSONObject.put("type", type2_jsonArray);
						type_jsonArray.put(arr_type_JSONObject);
					}
				}
		       /* CoverageCatData cd = new CoverageCatData();
				ListCoverage_cat = cd.searchCoverageCatLv3_ByCov_Code(listPrd_code);
				if (ListCoverage_cat.size() != 0) {
					for (int i = 0; i < ListCoverage_cat.size(); i++) {
						JSONObject type_coverage_json = new JSONObject();
						type_coverage_json.put("text", ListCoverage_cat.get(i).getCat_code());
						type_coverage_json.put("cov_cat_id",String.valueOf( ListCoverage_cat.get(i).getCov_cat_id()));
						type_coverage_json.put("cov_code",listPrd_code[i]);
						type_coverage_jsonArray.put(type_coverage_json);
					}
				}*/
				///////////////////////////////////////////////////////////
				JSONArray basic_Info_jsonArray = new JSONArray();
				JSONObject json_basic_Info = new JSONObject();
				json_basic_Info.put("type_coverage", type_jsonArray);
				basic_Info_jsonArray.put(json_basic_Info);
				responsejson.put("Tab_Basic_Information", basic_Info_jsonArray);
				//
				responseText = responsejson.toString();
			}else if (method.equals("GetCaseProductToBalloon")) {
				String prd_code = request.getParameter("prd_code");
				ProductData pd = new  ProductData();
				ArrayList<Product> arr_Product = pd.searchMainInsurance();
				JSONArray	product_jsonArray	= new JSONArray();	
				if (arr_Product.size() != 0) {
					for (int i = 0; i < arr_Product.size(); i++) {
						JSONObject pd_Json = new JSONObject();
						if (!prd_code.equals(arr_Product.get(i).getPrd_code())) {
							pd_Json.put("text", arr_Product.get(i).getName_th());
							pd_Json.put("prd_code", arr_Product.get(i).getPrd_code());
						}
						product_jsonArray.put(pd_Json);
					}
						responsejson.put("caseProduct",product_jsonArray);
						//
						responseText = responsejson.toString();
				}
			}else if (method.equals("Getrate_layout_ByCovCode")) {
				String cov_code = request.getParameter("cov_code");
			  	JSONArray jsonArr_cov_code = new JSONArray(cov_code);
			  	
				String[] listcov_code  		= new String[jsonArr_cov_code.length()]; 
				
				RateLayoutData rld = new RateLayoutData();
		        for (int i = 0; i < jsonArr_cov_code.length(); i++)
		        {	
		            listcov_code[i] 		= jsonArr_cov_code.get(i).toString();
		            
		        }
		      ArrayList<RateLayoutPremAccessData> datareturn  = rld.searchRateLayoutByCovCode(listcov_code, new String[] {"6"});
		    
		      
		      ParticipantData pcd = new ParticipantData();
		      
		      
		      ArrayList<Participant> arr_partici = pcd.searchCoverageParticipant(listcov_code);
		      JSONArray rateLayout_Array = new JSONArray();
		      for (int i = 0; i < datareturn.size(); i++) {
				JSONObject rl_Json = new JSONObject();
				
				rl_Json.put("file_id", datareturn.get(i).getRateLayout().getFile_id());
				rl_Json.put("rate_cat_id", datareturn.get(i).getRateLayout().getRate_cat_id());
				rl_Json.put("rate_layout_id", datareturn.get(i).getRateLayout().getRate_layout_id());
				rl_Json.put("file_name", datareturn.get(i).getFile().getFile_name());
				rl_Json.put("cov_code", datareturn.get(i).getRateLayout().getCov_code());
				rl_Json.put("nameTH", datareturn.get(i).getSubCat().getName_th());
				/*rl_Json.put("min_issue_age", arr_partici.get(i).getMin_issue_age());
				rl_Json.put("min_issue_age_unit", arr_partici.get(i).getMin_issue_age_unit());
				rl_Json.put("max_issue_age", arr_partici.get(i).getMax_issue_age());
				rl_Json.put("max_issue_age_unit", arr_partici.get(i).getMax_issue_age_unit());
				rl_Json.put("max_insure_age", arr_partici.get(i).getMax_insure_age());
				rl_Json.put("max_insure_age_unit", arr_partici.get(i).getMax_insure_age_unit());
				rl_Json.put("cov_code", arr_partici.get(i).getCov_code());*/
				rateLayout_Array.put(rl_Json);
			}
				responsejson.put("rateLayout_Type",rateLayout_Array);
				//
				responseText = responsejson.toString();
		      
			}else if (method.equals("getEndorse_CL")) {
				String cov_code 					= request.getParameter("cov_code");
				EndorseData ed 						= new EndorseData ();
				ArrayList<Coverage> arr_Coverage 	= new ArrayList<>();
				arr_Coverage 						= ed.searchEndorseData(cov_code);
			    JSONArray coverage_Array 			= new JSONArray();
				ParticipantData pd 					= new ParticipantData ();

				  for (int i = 0; i < arr_Coverage.size(); i++) {
						JSONObject coverage_Json = new JSONObject();
						coverage_Json.put("cov_code", arr_Coverage.get(i).getCov_code());
						coverage_Json.put("name_th", arr_Coverage.get(i).getName_th());
						coverage_Json.put("cov_cat_id", arr_Coverage.get(i).getCov_cat_id());
						//////////////Cov_Code///////////////////
						CoverageCatData cd = new CoverageCatData();
						Coverage_cat getCoverage_cat =  cd.searchCoverage_cat(Integer.toString(arr_Coverage.get(i).getCov_cat_id()));
						coverage_Json.put("cat_code", getCoverage_cat.getCat_code());
						////////////////
						ArrayList<Participant> arr_pa =  pd.searchCoverageParticipantAll(arr_Coverage.get(i).getCov_code());
						if (arr_pa.size() != 0) {
							for (int j = 0; j < arr_pa.size(); j++) {
								coverage_Json.put("min_issue_age", arr_pa.get(j).getMin_issue_age());
								coverage_Json.put("min_issue_age_unit", arr_pa.get(j).getMin_issue_age_unit());
								coverage_Json.put("max_issue_age", arr_pa.get(j).getMax_issue_age());
								coverage_Json.put("max_issue_age_unit", arr_pa.get(j).getMax_issue_age_unit());
								coverage_Json.put("max_insure_age", arr_pa.get(j).getMax_insure_age());
								coverage_Json.put("max_insure_age_unit", arr_pa.get(j).getMax_insure_age_unit());
							}
						}else {
							coverage_Json.put("min_issue_age", "");
							coverage_Json.put("min_issue_age_unit", "");
							coverage_Json.put("max_issue_age", "");
							coverage_Json.put("max_issue_age_unit", "");
							coverage_Json.put("max_insure_age", "");
							coverage_Json.put("max_insure_age_unit", "");
						}
						//prd_code Endorse
						ProductData pdd 	= new ProductData();
						Product getProduct 	= new Product();
						getProduct 			= pdd.searchProductByCovCode(arr_Coverage.get(i).getCov_code());
						coverage_Json.put("prd_rider_code", getProduct.getPrd_code());

						
						
						coverage_Array.put(coverage_Json);
					}
						responsejson.put("Endorse_CL",coverage_Array);
						//
						responseText = responsejson.toString();
			}
			//
			json = responseText;
			System.out.println("GetProduct//" + json);
			out.print(json);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	private String getDateFormat(Date data_f) throws Exception 
	{
		return data_f == null ? "" : PDFFnc.changeDateEntoTh(new SimpleDateFormat("dd/MM/yyyy").format(data_f));
	}
	
	private String getStatus(ArrayList<LookupCatValueAcessData> listStatus,String status_value) throws Exception
	{
		for(LookupCatValueAcessData acessData : listStatus)
		{
			for(Lookup_value lookup_value : acessData.getListLookupValue())
			{
				if(lookup_value.getEnum_value().equals(status_value))
					return lookup_value.getName_th();
			}
		}
		return "N/A";
	}
}
