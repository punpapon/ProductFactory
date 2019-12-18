package servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.math.BigDecimal;
import java.sql.Date;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONObject;

import layout.bean.productfac.beanset.BenefitAccessData;
import layout.bean.productfac.beanset.DocumentAcessData;
import layout.bean.productfac.beanset.FormulaCatAccesData;
import layout.bean.productfac.beanset.LookupCatAccessData;
import layout.bean.productfac.beanset.ParticipantAccessData;
import layout.bean.productfac.beanset.ProductExcludedAccessData;
import layout.bean.productfac.beanset.ProductRiderAccessData;
import layout.bean.productfac.beanset.ProductRiderOLListAccessData;
import layout.bean.productfac.beanset.RateCatAccessData;
import layout.bean.productfac.beanset.RateLayoutPremAccessData;
import layout.bean.productfac.benefit.Benefit;
import layout.bean.productfac.coverage.Age_calc_meth;
import layout.bean.productfac.coverage.Coverage;
import layout.bean.productfac.coverage.Participant;
import layout.bean.productfac.coverage.Coverage_cat;
import layout.bean.productfac.lookup.File;
import layout.bean.productfac.lookup.Lookup_value;
import layout.bean.productfac.lookup.Sub_cat;
import layout.bean.productfac.product.Prem_collect;
import layout.bean.productfac.product.Product;
import layout.bean.productfac.product.Rider;
import layout.bean.productfac.product.Sale_compensation_cond;
import layout.bean.productfac.product.Sale_compensation_detail;
import layout.bean.productfac.product.Sale_compensation_serie;
import layout.bean.productfac.product.Unw_accum_rule_exclude;
import layout.bean.productfac.product.Unw_sum_range;
import layout.bean.productfac.view.View_category;
import layout.bean.productfac.workflow.Product_task;
import service.FreezePolicyValue;
import service.MainInsuranceService;
import service.MainInsureDetailCreateServiceBasePlanOL;
import service.baseplan.BasePlanBenefitOLSearchData;
import service.baseplan.BasePlanOLAccessData;
import service.baseplan.ctrl.RateLayoutData;
import service.center.BundleData;
import service.center.LookupCatData;
import service.center.MainInsurance;
import service.center.MainInsureDetailCreate;
import service.center.WorkFlowProduct;
import service.ctrl.AppconfigControlData;
import service.ctrl.CoverageCatData;
import service.ctrl.CoverageData;
import service.ctrl.ParticipantData;
import service.ctrl.PolicyWordingControlData;
import service.ctrl.ProductData;
import service.fnc.ConstantRateCatIDValues;
import service.fnc.ConstantValues;
import service.fnc.PDFFnc;
import service.product.ListProductRiderOLData;
import service.product.ProductAccesData;
import service.product.ProductBasicinfo;
import service.product.ProductRateLayoutPremAccessData;
import service.product.SaleCompensationDetailData;
import service.product.SaleCompensationSerieData;
import service.product.UnwAccumRuleExcludeData;
import service.product.UnwSumRangeData;
import service.product.ctrl.PremCollectControlData;
import service.product.ctrl.ProductControlData;
import service.product.ctrl.SaleCompensationCondControlData;
import service.rider.RiderBenefits;
import service.rider.RiderOLAccessData;

/**
 * Servlet implementation class ProductBasePlanOL_GetData_Servlet
 */
@WebServlet("/ProductBasePlanOL_GetData_Servlet")
public class ProductBasePlanOL_GetData_Servlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	ProductAccesData pim;
	String responseText = "";
	String json = "";
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ProductBasePlanOL_GetData_Servlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		processRequest(request, response);
	}

	protected void processRequest(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		try {
			System.out.println("===============ProductBadse_GetData_Servlet==============");
			// session = request.getSession();
			response.setCharacterEncoding("UTF-8");
			response.setContentType("application/json");
			PrintWriter out = response.getWriter();
			String method 				= request.getParameter("method");
			switch (method) {
			case "getProductBasePlanOL" : responseText = getProductBasePlanOL(request,response);
				break;
			case "getCaseBasePlan" : getCaseBasePlan(request,response);
				break;	
			case "getCaseRider" : getCaseRider(request,response);
				break;
			case "GetlookupRM_Rate" : getlookupRM_Rate(request,response);
				break;
			case "Getrate_layout_ByCovCode" : getrate_layout_ByCovCode(request,response);
				break;
			case "GetViewListProduct" : getViewListProduct(request,response);
				break;
			case "getSalesBenefits" : getTab_SalesBenefits(request,response);
				break;
			case "getBasicInfo_PR"	: getTab_BasicInfo_PR(request,response);
				break;
			default: 
				break;
			}
			json = responseText;
			//System.out.println("GetListProductBasePlan//" + json);
			out.print(json);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	public String getProductBasePlanOL(HttpServletRequest request, HttpServletResponse response) throws Exception
	{
		try {
			String groupName					= request.getParameter("groupName");
			ConstantValues.GROUP_NAME 			= groupName;
			String pass_Insurance 				= request.getParameter("pass_Insurance");
			ConstantValues.PRD_CODE 			= pass_Insurance;

			FreezePolicyValue fpv = new FreezePolicyValue();
			fpv.set_product_value(pass_Insurance);
			
			MainInsuranceService mis 	= new MainInsuranceService();
			ArrayList<Product> caseAll_return;
			caseAll_return = mis.GetCaseProduct();
			
			String prd_code1 		= request.getParameter("prd_code");
			//Benz
			for (int i = 0; i < caseAll_return.size(); i++) {
				if (caseAll_return.get(i).getPrd_code().equals(prd_code1)) {
				
					pim = new ProductAccesData(caseAll_return.get(i));
				} 
			}
			
			//find lookup layout file 
			MainInsureDetailCreate mdc 				= new MainInsureDetailCreate ();
			ArrayList<RateCatAccessData> 			datareturnDet;
			
			JSONObject responsejson = new JSONObject();
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
			String reinsurance_opt = "";// Product
			String parProduct = "";// Product
			String fightingProduct = "";// Product
			String sex 				= "";
			String status 			= "";
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
					reinsurance_opt = pim.getListProduct().get(i).getReinsurance_opt();
					parProduct = pim.getListProduct().get(i).getPar_product();
					fightingProduct = pim.getListProduct().get(i).getFighting_product();
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
			JSONArray endose_jsonArray 				= new JSONArray();
			ArrayList<Product> ListProductd 		= new ArrayList<>();
			 ArrayList<Rider> ListProductdRider 	= new ArrayList<>();
			String ridercode 						= "";
			JSONArray	type_jsonArray	= new JSONArray();	
			String typeEndose 						= "";
			if (pim.getListParticipant().size() != 0) {
				String[] listCov_cat_id = new String[pim.getListParticipant().size()]; // 10 is the length of the
				for (int i = 0; i < pim.getListParticipant().size(); i++) {
					JSONObject age_coordinates_json = new JSONObject();
						layout.bean.productfac.product.Participant participant_product = pim.getListParticipant().get(i);
						if(participant_product == null) 
							continue;
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
						if (pim.getListParticipant().get(i).getMax_insure_age() != 0) {
							age_coordinates_json.put("max_insure_age",Integer.toString(pim.getListParticipant().get(i).getMax_insure_age()));
							age_coordinates_json.put("max_insure_age_unit",pim.getListParticipant().get(i).getMax_insure_age_unit());
						}else {
							age_coordinates_json.put("max_insure_age",Integer.toString(pim.getListParticipant().get(i).getMax_insure_year()));
							age_coordinates_json.put("max_insure_age_unit",pim.getListParticipant().get(i).getMax_insure_year_unit());
						}
						if (pim.getListParticipant().get(i).getPartic_type().equals("NONE")) {
							typeEndose = "E";
							age_coordinates_json.put("type",typeEndose);
						}else {
							age_coordinates_json.put("type","");
						}
					/// get cov_code
					//prd_rider_code = pim.getListParticipant().get(i).getPrd_rider_code();
					//listPrd_code[i] = prd_rider_code;
					//
					age_coordinates_jsonArray.put(age_coordinates_json);
					if (pim.getListParticipant().get(i).getPrd_code().equals(pim.getListParticipant().get(i).getPrd_rider_code())) {
						sex	= pim.getListParticipant().get(i).getGender();
					}
				}
/////////////////////////////Endose ///////////////////////////////////////////////				
				for (int i = 0; i < pim.getListParticipant().size(); i++) {
					JSONObject endose_json = new JSONObject();
					if (pim.getListParticipant().get(i).getPartic_type().equals("NONE")) {
						layout.bean.productfac.product.Participant participant_product = pim.getListParticipant().get(i);
						if(participant_product == null) 
							continue;
						
						endose_json.put("prd_code", pim.getListParticipant().get(i).getPrd_code());
						endose_json.put("prd_rider_code",pim.getListParticipant().get(i).getPrd_rider_code());
						
						if (pim.getListParticipant().get(i).getPrd_code().equals(pim.getListParticipant().get(i).getPrd_rider_code())) {
							for (int ii = 0; ii < pim.getListProduct().size(); ii++) {
								if (pim.getListProduct().get(ii).getPrd_code().equals(pim.getListParticipant().get(i).getPrd_rider_code())) {
									endose_json.put("cov_code",pim.getListProduct().get(ii).getCov_code());
									listCov_cat_id[i] = Integer.toString(pim.getListProduct().get(ii).getCov_cat_id());
								}
							}
						}else {
							ridercode = pim.getListParticipant().get(i).getPrd_rider_code();
							ProductControlData pcd = new ProductControlData();
							ListProductd = pcd.searchRidercode(ridercode);
							for (int j = 0; j < ListProductd.size(); j++) {
								endose_json.put("cov_code",ListProductd.get(j).getCov_code());
								listCov_cat_id[i] = Integer.toString(ListProductd.get(j).getCov_cat_id());
							}
							///Benz search ProductRider 05-11-2019
							ListProductdRider =	pcd.searchProductRiderByPrdCode(pim.getListParticipant().get(i).getPrd_rider_code());
							for (int j = 0; j < ListProductdRider.size(); j++) {
								if (ListProductdRider.get(j).getMain_rider_code() != null) {
									endose_json.put("main_rider_code",ListProductdRider.get(j).getMain_rider_code());

								}else {
									endose_json.put("main_rider_code","");

								}
							}
						}
						//listPrd_code[i] = ListProductd.get(j).getCov_code();
						
						endose_json.put("min_issue_age",
								Integer.toString(pim.getListParticipant().get(i).getMin_issue_age()));
						endose_json.put("min_issue_age_unit",
								pim.getListParticipant().get(i).getMin_issue_age_unit());
						endose_json.put("max_issue_age",
								Integer.toString(pim.getListParticipant().get(i).getMax_issue_age()));
						endose_json.put("max_issue_age_unit",
								pim.getListParticipant().get(i).getMax_issue_age_unit());
						if (pim.getListParticipant().get(i).getMax_insure_age() != 0) {
							endose_json.put("max_insure_age",Integer.toString(pim.getListParticipant().get(i).getMax_insure_age()));
							endose_json.put("max_insure_age_unit",pim.getListParticipant().get(i).getMax_insure_age_unit());
						}else {
							endose_json.put("max_insure_age",Integer.toString(pim.getListParticipant().get(i).getMax_insure_year()));
							endose_json.put("max_insure_age_unit",pim.getListParticipant().get(i).getMax_insure_year_unit());
						}
						if (pim.getListParticipant().get(i).getPartic_type().equals("NONE")) {
							typeEndose = "E";
							endose_json.put("type",typeEndose);
						}else {
							endose_json.put("type","");
						}
						endose_jsonArray.put(endose_json);
					}
					/// get cov_code
					//prd_rider_code = pim.getListParticipant().get(i).getPrd_rider_code();
					//listPrd_code[i] = prd_rider_code;
					//
				}
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				//======================================================================///
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
				
				
				
//				CoverageCatData cd = new CoverageCatData();
//				ArrayList<String[]> arr_Lv3 =  new ArrayList<>(); 
//				arr_Lv3 					= cd.searchCoverageCatLv3_ByCov_Code(listCov_cat_id);
//				if (arr_Lv3.size() != 0) {
//					for (int i = 0; i < arr_Lv3.size(); i++) {
//						String cov_cat_id	= "";
//						String cov_code 	= "";
//						String cat_code 	= "";
//						String[] listarr_Lv3 		= arr_Lv3.get(i);
//						JSONObject arr_type_JSONObject 	= new JSONObject();
//						JSONArray type2_jsonArray = new JSONArray();
//						for (int ii = 0; ii < listarr_Lv3.length; ii++) {
//							JSONObject type_coverage_json = new JSONObject();
//							if (ii == 0) {
//								cov_cat_id 			= listarr_Lv3[ii];
//								type_coverage_json.put("cov_cat_id",cov_cat_id);
//							}else if (ii == 1) {
//								cov_code 			= listarr_Lv3[ii];	
//								type_coverage_json.put("cov_code",cov_code);
//							}else if (ii == 2) {
//								cat_code 	= listarr_Lv3[ii];
//								type_coverage_json.put("text",cat_code);
//							}
//							type2_jsonArray.put(type_coverage_json);
//						}
//						arr_type_JSONObject.put("type", type2_jsonArray);
//						type_jsonArray.put(arr_type_JSONObject);
//					}
//				}
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
					if (pim.getListProductRider().get(i).getFix_sa_amt() != null) {
						basePlan_json.put("fix_sa_amt", pim.getListProductRider().get(i).getFix_sa_amt());
					}else {
						basePlan_json.put("fix_sa_amt", "");
					}
					basePlan_json.put("flag_type", pim.getListProductRider().get(i).getFlag_type());
					basePlan_json.put("prd_design", pim.getListProductRider().get(i).getSelect_rule());
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
						cov_code_json.put("biz_code", ListProduct.get(ii).getCore_biz_prd_code());
						cov_code_json.put("nameTH", ListProduct.get(ii).getName_th());
/*/////////Benz Get tab Benefits////////////////////
						ConstantValues.COV_CODE = ListProduct.get(ii).getCov_code();
//Get  Benefits BasePlan/////////////////////
						if (ii == 0) {
							
						}else {
							
						}
						String pass_Insurance1 = ListProduct.get(ii).getCov_code();
						Coverage coverage = new CoverageData().searchCoverage(pass_Insurance1);
						RiderOLAccessData bpi = new RiderOLAccessData(coverage);
						//
						for (int i = 0 ; i < bpi.getListBenefitCat().size(); i++) {
							JSONObject json_benefit 		= new JSONObject();
							json_benefit.put("bnf_Code",bpi.getListBenefitCat().get(i).getBnf_cat_code());
							json_benefit.put("name_th",bpi.getListBenefitCat().get(i).getName_th());
							benefit2_jsonArray.put(json_benefit);
						}
						////////////////////////////////////////Benz set Rider OL 17-09-2019/////////////////////////////////////////////
						String pass_Insurance2 = pass_Insurance1;
						RiderBenefits rb = new RiderBenefits ();
						ArrayList<Object []> arr_RiderBenefit= rb.searchBenefitAccessData(pass_Insurance2);
						JSONObject json_benefit2 		= new JSONObject();
						json_benefit2.put("cov_code", pass_Insurance1);
						json_benefit2.put("benefit",arr_RiderBenefit);
						json_benefit2.put("topic",benefit2_jsonArray);
						benefit_jsonArray.put(json_benefit2);*/
						
						//=========================================================================
						cov_code_json.put("prd_code", ListProduct.get(ii).getPrd_code());
						cov_code_json.put("cov_cat_id", ListProduct.get(ii).getCov_cat_id());
						cov_code_jsonArray.put(cov_code_json);
						listcov_code[ii] = ListProduct.get(ii).getCov_code();// Cov_Code
					}
				//	responsejson.put("Tab_benefit", benefit_jsonArray);
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
					json_BasePlan_jsonArray.put("prd_design", PDFFnc.compareValuePrdDesignToFix(String.valueOf(json_fix.get("prd_design"))));
					json_BasePlan_jsonArray.put("fix_sa_amt", String.valueOf(json_fix.get("fix_sa_amt")));
					json_BasePlan_jsonArray.put("cov_cat_id", String.valueOf(json_cov_code.get("cov_cat_id")));
					
					for (int j = 0; j < rate_lyout_jsonArray.length(); j++) {
						 json_rate_lyout2 				= rate_lyout_jsonArray.getJSONObject(j);
						if (json_rate_lyout2.get("prd_code").equals(json_rate_lyout2.get("prd_rider_code")) && json_cov_code.get("prd_code").equals(json_rate_lyout2.get("prd_rider_code"))) {
							if (Integer.parseInt(json_rate_lyout2.getString("rate_cat_id")) == 26 || Integer.parseInt(json_rate_lyout2.getString("rate_cat_id")) == 27
									|| Integer.parseInt(json_rate_lyout2.getString("rate_cat_id")) == 41 || Integer.parseInt(json_rate_lyout2.getString("rate_cat_id")) == 42) {
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
							if (Integer.parseInt(json_rate_lyout2.getString("rate_cat_id")) == 39) {	
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
					json_BaseRider_json.put("biz_code", String.valueOf(json_cov_code.get("biz_code")));
					json_BaseRider_json.put("prd_code", String.valueOf(json_cov_code.get("prd_code")));
				//	json_BaseRider_json.put("fix_sa_amt", String.valueOf(json_fix.get("fix_sa_amt")));
					json_BaseRider_json.put("nameTH", String.valueOf(json_cov_code.get("nameTH")));
					json_BaseRider_json.put("nameTH_coverage", String.valueOf(json_nameTH.get("nameTH")));
					json_BaseRider_json.put("prd_design", PDFFnc.compareValuePrdDesignToFix(String.valueOf(json_fix.get("prd_design"))));
					for (int j = 0; j < rate_lyout_jsonArray.length(); j++) {
						 json_rate_lyout2 				= rate_lyout_jsonArray.getJSONObject(j);
						if (!json_rate_lyout2.get("prd_code").equals(json_rate_lyout2.get("prd_rider_code")) && json_cov_code.get("prd_code").equals(json_rate_lyout2.get("prd_rider_code"))) {
							if (Integer.parseInt(json_rate_lyout2.getString("rate_cat_id")) == 26 || Integer.parseInt(json_rate_lyout2.getString("rate_cat_id")) == 27 
									|| Integer.parseInt(json_rate_lyout2.getString("rate_cat_id")) == 15 || Integer.parseInt(json_rate_lyout2.getString("rate_cat_id")) == 16
										|| Integer.parseInt(json_rate_lyout2.getString("rate_cat_id")) == 1 || Integer.parseInt(json_rate_lyout2.getString("rate_cat_id")) == 2 ) {
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
			json_basic_Info.put("reinsurance_opt", reinsurance_opt);
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
			json_basic_Info.put("par_product", parProduct);
			json_basic_Info.put("figting_product", fightingProduct);
			//Benz 16-08-2019
			json_basic_Info.put("status",status);
			json_basic_Info.put("status_PD",status_PD);
			//Benz เพิ่ม Endose 15-11-2019
			json_basic_Info.put("endose",endose_jsonArray);
			basic_Info_jsonArray.put(json_basic_Info);
			responsejson.put("Tab_Basic_Information", basic_Info_jsonArray);
			///////////////////////////////////END///////////////////////////////////////
			/////////////////////////////// การคำนวนเบี้ยประกัน/////////////////////////
			String age_band = "";
			JSONArray  limitCond_jsonArray		= new JSONArray();
			JSONArray  limitCondSerie_jsonArray	= new JSONArray();
			JSONArray  limit_seq1_jsonArray		= new JSONArray();
			JSONArray  limit_seq2_jsonArray		= new JSONArray();
			JSONArray  limit_seq3_jsonArray		= new JSONArray();
			JSONArray  formula_jsonArray		= new JSONArray();
			
			
			if (pim.getListProduct().size() != 0) {
				for (int i = 0; i < pim.getListProduct().size(); i++) {
					age_band = pim.getListProduct().get(i).getAge_band();
				}
			}
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
					}else if (pim.getListLimitCondAmt().get(i).getLimit_seq() == 3) {
						json_limit_cond_amt = new JSONObject();
						json_limit_cond_amt.put("Serie_no", pim.getListLimitCondAmt().get(i).getSerie_no());
						json_limit_cond_amt.put("Limit_amt_type", pim.getListLimitCondAmt().get(i).getLimit_amt_type());
						json_limit_cond_amt.put("Limit_seq", pim.getListLimitCondAmt().get(i).getLimit_seq());
						json_limit_cond_amt.put("Limit_amt", pim.getListLimitCondAmt().get(i).getLimit_amt());
						json_limit_cond_amt.put("Limit_unit", pim.getListLimitCondAmt().get(i).getLimit_unit());
						json_limit_cond_amt.put("Limit_factor", pim.getListLimitCondAmt().get(i).getLimit_factor());
						json_limit_cond_amt.put("Prd_rider_code", pim.getListLimitCondAmt().get(i).getPrd_rider_code());
						limit_seq3_jsonArray.put(json_limit_cond_amt);
					}
				}
			}
			if (pim.getListFormula().size() != 0) {
				for (int i = 0; i < pim.getListFormula().size(); i++) {
					if (pim.getListFormula().get(i).getFormula_cat_id() == 7 || pim.getListFormula().get(i).getFormula_cat_id() == 8 
							|| pim.getListFormula().get(i).getFormula_cat_id() == 9) {
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
			json_cal_insurance_premiums.put("limitCond",limitCond_jsonArray);
			json_cal_insurance_premiums.put("limitCondSerie",limitCondSerie_jsonArray);
			json_cal_insurance_premiums.put("limit_seq1",limit_seq1_jsonArray);
			json_cal_insurance_premiums.put("limit_seq2",limit_seq2_jsonArray);
			json_cal_insurance_premiums.put("limit_seq3",limit_seq3_jsonArray);
			json_cal_insurance_premiums.put("formula",formula_jsonArray);
			cal_insurance_premiums_jsonArray.put(json_cal_insurance_premiums);
			responsejson.put("Tab_cal_insurance_premiums",cal_insurance_premiums_jsonArray);
			////////////////////////////////// END///////////////////////////////////	
			////////////////////////////// การใช้สิทธิ์ตามกรมธรรม์/////////////////////////
//////////////////////////////การใช้สิทธิ์ตามกรมธรรม์/////////////////////////
	JSONArray  change_Type_jsonArray		= new JSONArray();		
	if (pim.getListProductChange().size() != 0) {
		
		for (int i = 0; i < pim.getListProductChange().size(); i++) {
			JSONObject json_change_Type = new JSONObject();
			json_change_Type.put("type", pim.getListProductChange().get(i).getChange_type());
			change_Type_jsonArray.put(json_change_Type);
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
	json_grantRightsInsure.put("change_Type",change_Type_jsonArray);
	json_grantRightsInsure.put("formula",formula_grantRightsInsure_jsonArray);
	json_grantRightsInsure.put("basePlan", tableBasePlan_jsonArray);
	json_grantRightsInsure.put("rider", tableRider_jsonArray);
	grantRightsInsure_jsonArray.put(json_grantRightsInsure);
	responsejson.put("Tab_GrantRightsInsure",grantRightsInsure_jsonArray);
	
	////////////////////////////////// END///////////////////////////////////
			//////////////////////////////ผลประโยชน์การขาย////////////////////////////
			SaleCompensationSerieData scs = new SaleCompensationSerieData ();
			ArrayList<Sale_compensation_serie> arr_sale_com_serie = scs.searchByPrdCode();
			SaleCompensationCondControlData scc = new SaleCompensationCondControlData();
			ArrayList<Sale_compensation_cond> arr_sale_com_cond = scc.searchByPrdCode();
			SaleCompensationDetailData scd	= new SaleCompensationDetailData () ;
			ArrayList<Sale_compensation_detail> arr_sale_com_detail = scd.searchByPrdCode();

			JSONArray salesBenefits1_jsonArray = new JSONArray();
			JSONArray salesBenefits2_jsonArray = new JSONArray();
			//Date 	eff_date;
			//Date 	exp_date ;
			String str_eff_date = "";
			String str_exp_date = "";
			String year1 		= "";
			String year2 		= "";
			String year3	 	= "";
			String year4	 	= "";
			String credit 		= "";
			String overrid 		= "";
			String advance 		= "";
			String mkt_Inc 		= "";
			String saleValume 	= "";
			String mkt_Exp 		= "";
			ProductData pd 		= new ProductData();
			String	cov_code	= "";
			
			if (arr_sale_com_serie.size() != 0) {

				if (!arr_sale_com_serie.get(0).getGender().equals("NONE") || 
							!arr_sale_com_serie.get(0).getMode().equals("NONE") ||
							arr_sale_com_serie.get(0).getMin_age() != 0	 || 
							arr_sale_com_serie.get(0).getMax_age() != 0	 ||
							arr_sale_com_serie.get(0).getMin_period() != 0 ||	 
							arr_sale_com_serie.get(0).getMax_period() != 0) 
					{
						///set sel_benefits1
						for (int i = 0; i < arr_sale_com_serie.size(); i++) {
							JSONObject json_salesBenefits1 = new JSONObject();
							//serie lv1
								 if (arr_sale_com_serie.get(i).getPrd_code().equals(arr_sale_com_serie.get(i).getPrd_rider_code())) {
									 json_salesBenefits1.put("serie_no", Integer.toString(arr_sale_com_serie.get(i).getSerie_no()));
									 json_salesBenefits1.put("gender", arr_sale_com_serie.get(i).getGender());
									 json_salesBenefits1.put("mode", arr_sale_com_serie.get(i).getMode());
									 json_salesBenefits1.put("min_age", Integer.toString(arr_sale_com_serie.get(i).getMin_age()));
									 json_salesBenefits1.put("max_age", Integer.toString(arr_sale_com_serie.get(i).getMax_age()));
									//
									 //BigDecimal bd_Min_sum = new BigDecimal(getBg(arr_sale_com_serie.get(i).getMin_sum()));
									 String str_Min_sum = getBg(arr_sale_com_serie.get(i).getMin_sum());//(bd_Min_sum).toString();
									 //BigDecimal bd_Max_sum = new BigDecimal(getBg(arr_sale_com_serie.get(i).getMax_sum()));
									 String str_Max_sum = getBg(arr_sale_com_serie.get(i).getMax_sum());//(bd_Max_sum).toString();
									 //
									 json_salesBenefits1.put("min_sum", str_Min_sum);
									 json_salesBenefits1.put("max_sum", str_Max_sum);
									 json_salesBenefits1.put("min_period", Integer.toString(arr_sale_com_serie.get(i).getMin_period()));
									 json_salesBenefits1.put("max_period", Integer.toString(arr_sale_com_serie.get(i).getMax_period()));
									 salesBenefits1_jsonArray.put(json_salesBenefits1); 
								 }
						}
						///set sel_benefits2
						//cond lv2
						if (arr_sale_com_cond.size() != 0)  {
							for (int ii = 0; ii < arr_sale_com_cond.size(); ii++) {
								JSONObject json_salesBenefits = new JSONObject();
									//serie lv1
									json_salesBenefits.put("prd_code", arr_sale_com_cond.get(ii).getPrd_rider_code());
									if (arr_sale_com_cond.get(ii).getPrd_code().equals(arr_sale_com_cond.get(ii).getPrd_rider_code())) {
										Product setproduct =	pd.searchProduct(arr_sale_com_cond.get(ii).getPrd_code());
										cov_code = setproduct.getCov_code();
										json_salesBenefits.put("cov_code", cov_code);
									}else {
										json_salesBenefits.put("cov_code", arr_sale_com_cond.get(ii).getPrd_rider_code());
									}
									
									if (arr_sale_com_cond.get(ii).getSeq() == 1) {
										json_salesBenefits.put("serie_no", arr_sale_com_cond.get(ii).getSerie_no());
									}else {
										json_salesBenefits.put("serie_no", "");

									}
									//cond lv2
									//Date
									str_eff_date 	= getDateFormat(arr_sale_com_cond.get(ii).getEff_date());
									str_exp_date 	= getDateFormat(arr_sale_com_cond.get(ii).getExp_date());
									
									json_salesBenefits.put("eff_data", str_eff_date);
									json_salesBenefits.put("exp_data", str_exp_date);
									json_salesBenefits.put("is_ref_base", arr_sale_com_cond.get(ii).getIs_ref_base());
									json_salesBenefits.put("seq", arr_sale_com_cond.get(ii).getSeq());
									//detail lv3
									if (arr_sale_com_detail.size() != 0) {
										for (int iii = 0; iii < arr_sale_com_detail.size(); iii++) {
											/*เช็ค seq  cond == seq  Detail*/		
											if (arr_sale_com_cond.get(ii).getPrd_rider_code().equals(arr_sale_com_detail.get(iii).getPrd_rider_code()) && 
													arr_sale_com_cond.get(ii).getSeq() == arr_sale_com_detail.get(iii).getSeq() && 
													arr_sale_com_cond.get(ii).getSerie_no() == arr_sale_com_detail.get(iii).getSerie_no()) 
											{
												//year1
												if (arr_sale_com_detail.get(iii).getCompen_type().equals("MAX_COM") && 
														arr_sale_com_detail.get(iii).getCompen_year() == 1 ||
														arr_sale_com_detail.get(iii).getCompen_type().equals("COMMISSION") && 
														arr_sale_com_detail.get(iii).getCompen_year() == 1) 
												{
													if (arr_sale_com_detail.get(iii).getCompen_rate() != null) {
														 year1 = arr_sale_com_detail.get(iii).getCompen_rate().toString();
													}
												}
												//year2
												if (arr_sale_com_detail.get(iii).getCompen_type().equals("COMMISSION") && 
														arr_sale_com_detail.get(iii).getCompen_year() == 2) 
												{
													if (arr_sale_com_detail.get(iii).getCompen_rate() != null) {
														 year2 = arr_sale_com_detail.get(iii).getCompen_rate().toString();
													}
												}
												//year3
												if (arr_sale_com_detail.get(iii).getCompen_type().equals("COMMISSION") && 
														arr_sale_com_detail.get(iii).getCompen_year() == 3) 
												{
													if (arr_sale_com_detail.get(iii).getCompen_rate() != null) {
														 year3 = arr_sale_com_detail.get(iii).getCompen_rate().toString();
													}
												}
												//year4
												if (arr_sale_com_detail.get(iii).getCompen_type().equals("COMMISSION") && 
														arr_sale_com_detail.get(iii).getCompen_year() == 4) 
												{
													if (arr_sale_com_detail.get(iii).getCompen_rate() != null) {
														 year4 = arr_sale_com_detail.get(iii).getCompen_rate().toString();
													}
												}
												//Check credit
												if (arr_sale_com_detail.get(iii).getCompen_type().equals("PERF_CREDIT")) 
												{
													if (arr_sale_com_detail.get(iii).getCompen_rate() != null) {
														credit = arr_sale_com_detail.get(iii).getCompen_rate().toString();
													}
												}
												//Check overrid
												if (arr_sale_com_detail.get(iii).getCompen_type().equals("OVERRIDE")) 
												{
													if (arr_sale_com_detail.get(iii).getCompen_rate() != null) {
														overrid = arr_sale_com_detail.get(iii).getCompen_rate().toString();
													}
												}
												//Check advance
												if (arr_sale_com_detail.get(iii).getCompen_type().equals("ADV_COMM")) 
												{
													if (arr_sale_com_detail.get(iii).getCompen_rate() != null) {
														advance = arr_sale_com_detail.get(iii).getCompen_rate().toString();
													}
												}
												//Check mkt_Inc
												if (arr_sale_com_detail.get(iii).getCompen_type().equals("MKTG_INCENTIVE")) 
												{
													if (arr_sale_com_detail.get(iii).getCompen_rate() != null) {
														mkt_Inc = arr_sale_com_detail.get(iii).getCompen_rate().toString();
													}
												}
												//Check saleValume
												if (arr_sale_com_detail.get(iii).getCompen_type().equals("SALE_VOLUME_BONUS")) 
												{
													if (arr_sale_com_detail.get(iii).getCompen_rate() != null) {
														saleValume = arr_sale_com_detail.get(iii).getCompen_rate().toString();
													}
												}
												//Check mkt_Exp
												if (arr_sale_com_detail.get(iii).getCompen_type().equals("MKTG_EXP")) 
												{
													if (arr_sale_com_detail.get(iii).getCompen_rate() != null) {
														mkt_Exp = arr_sale_com_detail.get(iii).getCompen_rate().toString();
													}
												}
											}
										}
									}
									json_salesBenefits.put("year1", year1);
									json_salesBenefits.put("year2", year2);
									json_salesBenefits.put("year3", year3);
									json_salesBenefits.put("year4", year4);
									json_salesBenefits.put("credit", credit);
									json_salesBenefits.put("overrid", overrid);
									json_salesBenefits.put("advance", advance);
									json_salesBenefits.put("mkt_Inc", mkt_Inc);
									json_salesBenefits.put("saleValume", saleValume);
									json_salesBenefits.put("mkt_Exp", mkt_Exp);
									//
								salesBenefits2_jsonArray.put(json_salesBenefits);
							}
						}
					}else {
						///set sel_benefits2
						//cond lv2
						if (arr_sale_com_cond.size() != 0)  {
							for (int ii = 0; ii < arr_sale_com_cond.size(); ii++) {
								JSONObject json_salesBenefits = new JSONObject();
									/*for (int i = 0; i < arr_sale_com_serie.size(); i++) {
										//serie lv1
											 prd_code 		= arr_sale_com_serie.get(i).getPrd_code();
											 prd_rider_code = arr_sale_com_serie.get(i).getPrd_rider_code();
											 serie_no 		= Integer.toString( arr_sale_com_serie.get(i).getSerie_no()); 

									}*/
									//serie lv1
									json_salesBenefits.put("prd_code", arr_sale_com_cond.get(ii).getPrd_rider_code());
									if (arr_sale_com_cond.get(ii).getPrd_code().equals(arr_sale_com_cond.get(ii).getPrd_rider_code())) {
										Product setproduct =	pd.searchProduct(arr_sale_com_cond.get(ii).getPrd_code());
										cov_code = setproduct.getCov_code();
										json_salesBenefits.put("cov_code", cov_code);
									}else {
										json_salesBenefits.put("cov_code", arr_sale_com_cond.get(ii).getPrd_rider_code());
									}
									
									if (arr_sale_com_cond.get(ii).getSeq() == 1) {
										json_salesBenefits.put("serie_no", arr_sale_com_cond.get(ii).getSerie_no());
									}else {
										json_salesBenefits.put("serie_no", "");

									}
									//cond lv2
									//Date
									if (arr_sale_com_cond.get(ii).getEff_date() != null) {
										str_eff_date 	= getDateFormat(arr_sale_com_cond.get(ii).getEff_date());
									}
									if (arr_sale_com_cond.get(ii).getExp_date() != null) {
										str_exp_date 	= getDateFormat(arr_sale_com_cond.get(ii).getExp_date());
									}
									json_salesBenefits.put("eff_data", str_eff_date);
									json_salesBenefits.put("exp_data", str_exp_date);
									json_salesBenefits.put("is_ref_base", arr_sale_com_cond.get(ii).getIs_ref_base());
									json_salesBenefits.put("seq", arr_sale_com_cond.get(ii).getSeq());
									//detail lv3

									if (arr_sale_com_detail.size() != 0) {
										for (int iii = 0; iii < arr_sale_com_detail.size(); iii++) {
											/*เช็ค seq  cond == seq  Detail*/		
											
											
											if (arr_sale_com_cond.get(ii).getPrd_rider_code().equals(arr_sale_com_detail.get(iii).getPrd_rider_code()) && 
													arr_sale_com_cond.get(ii).getSeq() == arr_sale_com_detail.get(iii).getSeq() && 
													arr_sale_com_cond.get(ii).getSerie_no() == arr_sale_com_detail.get(iii).getSerie_no()) 
											{
												
												//year1
												if (arr_sale_com_detail.get(iii).getCompen_type().equals("MAX_COM") && 
														arr_sale_com_detail.get(iii).getCompen_year() == 1 ||
														arr_sale_com_detail.get(iii).getCompen_type().equals("COMMISSION") && 
														arr_sale_com_detail.get(iii).getCompen_year() == 1) 
												{
													if (arr_sale_com_detail.get(iii).getCompen_rate() != null) {
														 year1 = arr_sale_com_detail.get(iii).getCompen_rate().toString();
													}
												}
												//year2
												if (arr_sale_com_detail.get(iii).getCompen_type().equals("COMMISSION") && 
														arr_sale_com_detail.get(iii).getCompen_year() == 2) 
												{
													if (arr_sale_com_detail.get(iii).getCompen_rate() != null) {
														 year2 = arr_sale_com_detail.get(iii).getCompen_rate().toString();
													}
												}
												//year3
												if (arr_sale_com_detail.get(iii).getCompen_type().equals("COMMISSION") && 
														arr_sale_com_detail.get(iii).getCompen_year() == 3) 
												{
													if (arr_sale_com_detail.get(iii).getCompen_rate() != null) {
														 year3 = arr_sale_com_detail.get(iii).getCompen_rate().toString();
													}
												}
												//year4
												if (arr_sale_com_detail.get(iii).getCompen_type().equals("COMMISSION") && 
														arr_sale_com_detail.get(iii).getCompen_year() == 4) 
												{
													if (arr_sale_com_detail.get(iii).getCompen_rate() != null) {
														 year4 = arr_sale_com_detail.get(iii).getCompen_rate().toString();
													}
												}
												//Check credit
												if (arr_sale_com_detail.get(iii).getCompen_type().equals("PERF_CREDIT")) 
												{
													if (arr_sale_com_detail.get(iii).getCompen_rate() != null) {
														credit = arr_sale_com_detail.get(iii).getCompen_rate().toString();
													}
												}
												//Check overrid
												if (arr_sale_com_detail.get(iii).getCompen_type().equals("OVERRIDE")) 
												{
													if (arr_sale_com_detail.get(iii).getCompen_rate() != null) {
														overrid = arr_sale_com_detail.get(iii).getCompen_rate().toString();
													}
												}
												//Check advance
												if (arr_sale_com_detail.get(iii).getCompen_type().equals("ADV_COMM")) 
												{
													if (arr_sale_com_detail.get(iii).getCompen_rate() != null) {
														advance = arr_sale_com_detail.get(iii).getCompen_rate().toString();
													}
												}
												//Check mkt_Inc
												if (arr_sale_com_detail.get(iii).getCompen_type().equals("MKTG_INCENTIVE")) 
												{
													if (arr_sale_com_detail.get(iii).getCompen_rate() != null) {
														mkt_Inc = arr_sale_com_detail.get(iii).getCompen_rate().toString();
													}
												}
												//Check saleValume
												if (arr_sale_com_detail.get(iii).getCompen_type().equals("SALE_VOLUME_BONUS")) 
												{
													if (arr_sale_com_detail.get(iii).getCompen_rate() != null) {
														saleValume = arr_sale_com_detail.get(iii).getCompen_rate().toString();
													}
												}
												//Check mkt_Exp
												if (arr_sale_com_detail.get(iii).getCompen_type().equals("MKTG_EXP")) 
												{
													if (arr_sale_com_detail.get(iii).getCompen_rate() != null) {
														mkt_Exp = arr_sale_com_detail.get(iii).getCompen_rate().toString();
													}
												}
											}
										}
									}
									json_salesBenefits.put("year1", year1);
									json_salesBenefits.put("year2", year2);
									json_salesBenefits.put("year3", year3);
									json_salesBenefits.put("year4", year4);
									json_salesBenefits.put("credit", credit);
									json_salesBenefits.put("overrid", overrid);
									json_salesBenefits.put("advance", advance);
									json_salesBenefits.put("mkt_Inc", mkt_Inc);
									json_salesBenefits.put("saleValume", saleValume);
									json_salesBenefits.put("mkt_Exp", mkt_Exp);
									//
								salesBenefits2_jsonArray.put(json_salesBenefits);
							}
						}	
					}
			}
			
			ArrayList<String[]> arr_sale_com_serie2 = scs.searchSalesBenefits();			
			
			JSONArray salesBenefits3_jsonArray = new JSONArray();
			salesBenefits3_jsonArray.put(arr_sale_com_serie2);
			
			/*ArrayList<String[]> array1 = arr_sale_com_serie2.get(0);
			ArrayList<String[]> array2 = arr_sale_com_serie2.get(1);
			ArrayList<String[]> array3 = arr_sale_com_serie2.get(2);
			System.out.println("--------1---------/"+array1.size());
			System.out.println("--------2---------/"+array2.size());
			System.out.println("--------3---------/"+array3.size());
			
			if (array1.size() >= array2.size() || array1.size() >= array3.size()) {
				for (int i = 0; i < array1.size(); i++) {
					
					
					
					
					JSONObject json_product = new JSONObject();
					json_product.put("min_age", array1.get(0));
					json_product.put("max_age", value);
					json_product.put("min_sum", value);
					json_product.put("max_sum", value);
					json_product.put("min_period", value);
					json_product.put("max_period", value);
				}
			}else if (array2.size() > array1.size() || array2.size() > array3.size()) {
				
			}else if (array3.size() > array1.size() || array3.size() > array2.size()) {
				
			}*/
			
			JSONArray  sales_benefits_jsonArray	= new JSONArray();
			JSONObject json_sales_benefits 		= new JSONObject();
			json_sales_benefits.put("sel_benefits1",salesBenefits1_jsonArray);
			json_sales_benefits.put("sel_benefits2",salesBenefits2_jsonArray);
			json_sales_benefits.put("sel_benefits3",salesBenefits3_jsonArray);
			sales_benefits_jsonArray.put(json_sales_benefits);
			responsejson.put("Tab_SalesBenefits",sales_benefits_jsonArray);
			
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
					json_Mode.put("prem_cal_meth", pim.getListProductMode().get(i).getPrem_calc_meth());
					mode_jsonArray2.put(json_Mode);
				}
			}
			//Participant
			if (pim.getListParticipant().size() != 0) {
				for (int i = 0; i < pim.getListParticipant().size(); i++) {
					if(pim.getListParticipant().get(i) == null)
						continue;
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
					json_saleHistory.put("sale_eff_date", getDateFormat(pim.getListSaleHistory().get(i).getSale_eff_date()));
					json_saleHistory.put("sale_exp_date", getDateFormat(pim.getListSaleHistory().get(i).getSale_exp_date()));
					json_saleHistory.put("sys_eff_date", getDateFormat(pim.getListSaleHistory().get(i).getSys_eff_date()));
					json_saleHistory.put("user_code", pim.getListSaleHistory().get(i).getUser_code());
					json_saleHistory.put("update_time", getDateFormatTimeStamp(pim.getListSaleHistory().get(i).getUpdate_time()));
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
				//**PB
				json_underwrite.put("is_prd_max_policy", pim.getUnderwrite().getIs_prd_max_policy());
				json_underwrite.put("is_pax_max_policy", pim.getUnderwrite().getIs_pax_max_policy());
				json_underwrite.put("is_sum_range", pim.getUnderwrite().getIs_sum_range());
				json_underwrite.put("rider_buy_meth", pim.getUnderwrite().getRider_buy_meth());
				json_underwrite.put("prd_max_policy", pim.getUnderwrite().getPrd_max_policy());
				json_underwrite.put("pax_max_policy", pim.getUnderwrite().getPax_max_policy());
				json_underwrite.put("pax_max_sa", pim.getUnderwrite().getPax_max_sa());
				json_underwrite.put("pax_max_unit", pim.getUnderwrite().getPax_max_unit());
				json_underwrite.put("pol_print_at", pim.getUnderwrite().getPol_print_at());
				
				if (pim.getUnderwrite().getMed_sum_factor() != null) {
					json_underwrite.put("med_sum_factor", pim.getUnderwrite().getMed_sum_factor());
				}else {
					json_underwrite.put("med_sum_factor", 0);
				}
				
				if (pim.getUnderwrite().getInsure_sum_factor() != null) {
					json_underwrite.put("insure_sum_factor", pim.getUnderwrite().getInsure_sum_factor());
				}else {
					json_underwrite.put("insure_sum_factor", 0);
				}

				
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
								sale_eff_date 	= getDateFormat( pim.getListProductUnwHistRule().get(i).getListUnwHistMedSumAcessData().get(ii).getUnwHistMedSum().getEff_date());
							}else {
								sale_eff_date = "";
							}
							if ( pim.getListProductUnwHistRule().get(i).getListUnwHistMedSumAcessData().get(ii).getUnwHistMedSum().getExp_date() != null) {
								sale_exp_date 	= getDateFormat(pim.getListProductUnwHistRule().get(i).getListUnwHistMedSumAcessData().get(ii).getUnwHistMedSum().getExp_date());
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
			///PB
			UnwSumRangeData usr 			= new UnwSumRangeData();
			JSONArray unw_sum_range_Array 	= new JSONArray();
			ArrayList<Unw_sum_range> arr_Unw_sum_range = usr.searchProductUnwHistRule(ConstantValues.PRD_CODE);
			if (arr_Unw_sum_range.size() != 0) {
				for (int i = 0; i < arr_Unw_sum_range.size(); i++) {
					JSONObject json_unw_sum_range = new JSONObject();
					json_unw_sum_range.put("prd_code", arr_Unw_sum_range.get(i).getPrd_code());
					json_unw_sum_range.put("amt_type", arr_Unw_sum_range.get(i).getAmt_type());
					json_unw_sum_range.put("seq", arr_Unw_sum_range.get(i).getSeq());
					if(arr_Unw_sum_range.get(i).getMin_sa() != null) {
						json_unw_sum_range.put("min_sa", arr_Unw_sum_range.get(i).getMin_sa());
					}else {
						json_unw_sum_range.put("min_sa", "");
					}
					if(arr_Unw_sum_range.get(i).getMax_sa() != null) {
						json_unw_sum_range.put("max_sa", arr_Unw_sum_range.get(i).getMax_sa());
					}else {
						json_unw_sum_range.put("max_sa", "");
					}
					if(arr_Unw_sum_range.get(i).getIncrease_range() != null) {
						json_unw_sum_range.put("increase_range", arr_Unw_sum_range.get(i).getIncrease_range());
					}else {
						json_unw_sum_range.put("increase_range", "");
					}
					unw_sum_range_Array.put(json_unw_sum_range);
				}
			}
			
			PremCollectControlData pcc 					= new PremCollectControlData();
			JSONArray premCollectControl_Array 			= new JSONArray();
			ArrayList<Prem_collect> arr_Prem_collect 	= pcc.seardchPremCollect(ConstantValues.PRD_CODE);
			if (arr_Prem_collect.size() != 0) {
				for (int i = 0; i < arr_Prem_collect.size(); i++) {
					JSONObject json_Prem_collect = new JSONObject();
					json_Prem_collect.put("prd_code", arr_Prem_collect.get(i).getPrd_code());
					json_Prem_collect.put("prem_flag", arr_Prem_collect.get(i).getPrem_flag());
					json_Prem_collect.put("collect_meth", arr_Prem_collect.get(i).getCollect_meth());
					premCollectControl_Array.put(json_Prem_collect);
				}
			}
			
			UnwAccumRuleExcludeData uar				 = new UnwAccumRuleExcludeData ();
			ArrayList<Unw_accum_rule_exclude>  arr_UnwAccumRuleExclude = uar.searchUnwAccumRuleExclude(ConstantValues.PRD_CODE);
			JSONArray unwAccumRuleExclude_Array 	= new JSONArray();
			if (arr_UnwAccumRuleExclude.size() != 0) {
				for (int i = 0; i < arr_UnwAccumRuleExclude.size(); i++) {
					JSONObject json_UnwAccumRuleExclude = new JSONObject();
					json_UnwAccumRuleExclude.put("prd_code", arr_UnwAccumRuleExclude.get(i).getPrd_code());
					json_UnwAccumRuleExclude.put("accum_type", arr_UnwAccumRuleExclude.get(i).getAccum_type());
					json_UnwAccumRuleExclude.put("exclude_prd_code", arr_UnwAccumRuleExclude.get(i).getExclude_prd_code());
					unwAccumRuleExclude_Array.put(json_UnwAccumRuleExclude);
				}
			}
			
			ProductControlData pcd 			= new ProductControlData(); 
			ArrayList<Rider> arr_rider 		= pcd.searchProductRider(ConstantValues.PRD_CODE);
			JSONArray productRider_arr		= new JSONArray();
			if (arr_rider.size() != 0) {
				for (int i = 0; i < arr_rider.size(); i++) {
					JSONObject json_arr_rider = new JSONObject();
					json_arr_rider.put("prd_code", arr_rider.get(i).getPrd_code());
					json_arr_rider.put("prd_rider_code", arr_rider.get(i).getPrd_rider_code());
					json_arr_rider.put("flag_type", arr_rider.get(i).getFlag_type());
					json_arr_rider.put("select_rule", arr_rider.get(i).getSelect_rule());
					if(arr_rider.get(i).getPrem_calc_meth() == null) {
						json_arr_rider.put("prem_calc_meth","");
					}else {
						json_arr_rider.put("prem_calc_meth", arr_rider.get(i).getPrem_calc_meth());
					}
					productRider_arr.put(json_arr_rider);
				}
			}
			////////////////////////////////////////////////////////////////////////////////
			
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
			json_provision.put("unwsumrange",unw_sum_range_Array);
			json_provision.put("premCollect",premCollectControl_Array);
			json_provision.put("productRider",productRider_arr);
			json_provision.put("unwAccumRuleExclude",unwAccumRuleExclude_Array);
			
			provision_jsonArray.put(json_provision);
			responsejson.put("Tab_Provision",provision_jsonArray);
			responseText = responsejson.toString();
			System.out.println("GetListProductBasePlan//" + responseText);
			/////////////////////////////////END/////////////////////////////////////
		}catch (Exception e) {
			e.printStackTrace();
		}
		return responseText;
	}
	
	private String getDateFormat(Date data_f) throws Exception 
	{
		return data_f == null ? "" : PDFFnc.changeDateEntoTh(new SimpleDateFormat("dd/MM/yyyy").format(data_f));
	}
	
	private String getDateFormatTimeStamp(Timestamp time_stamp) throws Exception 
	{
		return time_stamp == null ? "" : new SimpleDateFormat("dd/MM/yyyy").format(time_stamp);
	}

	private String getBg(BigDecimal bd) throws Exception 
	{
		
		return bd == null ? "" : bd.toString();
	}

	public String getCaseBasePlan(HttpServletRequest request, HttpServletResponse response) throws Exception
	{
		try {
			System.out.println("BBBBBBBBBBBBBB");
			JSONObject responsejson = new JSONObject();
			String passInsurance 	= "";
			String nameTH 			= "";
			String nameEN 			= "";
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
			boolean is_bundle					= false;
			//
			String insurance_premium_Code = request.getParameter("insurance_premium");
			ConstantValues.COV_CODE = insurance_premium_Code;
			//find lookup layout file 
			MainInsureDetailCreate mdc 				= new MainInsureDetailCreate ();
			ArrayList<RateCatAccessData> 			datareturnDet;

			String pass_Insurance = request.getParameter("bCode");
			Coverage coverage = new CoverageData().searchCoverage(pass_Insurance);
			BasePlanOLAccessData bpi = new BasePlanOLAccessData(coverage);
			
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

				sale_eff_date = getDateFormat(bpi.getListParticipantData().get(0).getCoverage().getSale_eff_date());
				sale_exp_date = getDateFormat(bpi.getListParticipantData().get(0).getCoverage().getSale_exp_date());
				
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
			
			ProductBasicinfo pbf = new ProductBasicinfo();
			ArrayList<ProductRiderAccessData> listCoverageRider = pbf.searchRiderGetBundle();
			is_bundle		= bpi.getListParticipantData().get(0).getCoverage().getIs_bundle();
			///get Bundle //30-09-2019  
			BundleData bd = new BundleData () ;
			ArrayList<Coverage> searchBundle	= bd.searchBundle();
			JSONArray  coverage_jsonArray	= new JSONArray();
			for (int i = 0; i < searchBundle.size(); i++) {
				JSONObject json_coverage		= new JSONObject();
				String cov_code = searchBundle.get(i).getCov_code();
				for (int ii = 0 ; ii < listCoverageRider.size(); ii++) {
					if(cov_code.equals(listCoverageRider.get(ii).getCoverage().getCov_code()) 
							&& cov_code.equals(listCoverageRider.get(ii).getProduct().getCov_code())) {
						
						Coverage coverageObj 	= 	listCoverageRider.get(ii).getCoverage();
						Product productObj		= 	listCoverageRider.get(ii).getProduct();
						json_coverage.put("cov_code", coverageObj.getCov_code());
						json_coverage.put("name_th", coverageObj.getName_th());
						
						//--
						String cov_code_type = coverageObj.getCov_code();
						String[] listPrd_code  = new String[] {cov_code_type};
						CoverageCatData cd = new CoverageCatData();
						ArrayList<String[]> arr_Lv3 		=  new ArrayList<>();  
				        arr_Lv3 							= cd.searchCoverageCatLv3_ByCov_Code(listPrd_code);
				        
				        if (arr_Lv3.size() != 0) {
				        	for (int j = 0; j < arr_Lv3.size(); j++) {
								String cat_code 	= "";
								String[] listarr_Lv3 		= arr_Lv3.get(j);
								for (int jj = 0; jj < listarr_Lv3.length; jj++) {
									if (jj == 2) {
										cat_code 	= listarr_Lv3[jj];
									}
									json_coverage.put("cat_code",cat_code);
								}
							}
				        }
						//--
						json_coverage.put("cov_cat_id", coverageObj.getCov_cat_id());
						json_coverage.put("prd_rider_code", productObj.getPrd_code());
						json_coverage.put("biz_code", productObj.getCore_biz_prd_code());
						coverage_jsonArray.put(json_coverage);
					}
				}
				
//				json_coverage.put("cov_code", searchBundle.get(i).getCov_code());
//				json_coverage.put("name_th", searchBundle.get(i).getName_th());
//				json_coverage.put("cov_cat_id", searchBundle.get(i).getCov_cat_id());
//				coverage_jsonArray.put(json_coverage);
			}
		        
			String[] listPrd_code  = new String[] {pass_Insurance}; 
			 CoverageCatData cd = new CoverageCatData();
		        ArrayList<String[]> arr_Lv3 		=  new ArrayList<>();  
		        arr_Lv3 							= cd.searchCoverageCatLv3_ByCov_Code(listPrd_code);
				JSONArray	type_jsonArray	= new JSONArray();	
				if (arr_Lv3.size() != 0) {
					for (int i = 0; i < arr_Lv3.size(); i++) {
						String cov_cat_id	= "";
						String cov_code 	= "";
						String cat_code 	= "";
						String cat_name 	= "";
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
							}else if (ii == 3) {
								cat_name 	= listarr_Lv3[ii];
								type_coverage_json.put("cat_name",cat_name);
							}
							type2_jsonArray.put(type_coverage_json);
						}
						arr_type_JSONObject.put("type", type2_jsonArray);
						type_jsonArray.put(arr_type_JSONObject);
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
			json_basic_Info.put("type_coverage", type_jsonArray);
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
			json_basic_Info.put("is_bundle",is_bundle);
			json_basic_Info.put("coverage_Bundle",coverage_jsonArray);
			basic_Info_jsonArray.put(json_basic_Info);
			responsejson.put("Tab_Basic_Information", basic_Info_jsonArray);
			////////////////////////////// Policy Wording/////////////////////////
			JSONArray  tb_Policy_Wording_jsonArray	= new JSONArray();
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
			
			JSONArray	jsonarr_POLICY_LOAN		= new JSONArray();
			JSONArray	jsonarr_CASH_SURR		= new JSONArray();
			JSONArray	jsonarr_APL				= new JSONArray();
			JSONArray	jsonarr_ETI				= new JSONArray();
			JSONArray	jsonarr_AUTO_ETI		= new JSONArray();
			JSONArray	jsonarr_RPU				= new JSONArray();
			JSONArray	jsonarr_AUTO_RPU		= new JSONArray();
			
			int tab = 3;
			ArrayList<FormulaCatAccesData> datareturnlookupfomula;
			MainInsureDetailCreateServiceBasePlanOL mdcs = new MainInsureDetailCreateServiceBasePlanOL ();
			datareturnlookupfomula = mdcs.exercise_rights_insurance(tab);
			
			if (bpi.getListNonforfProvision().size() != 0) {
				for (int i = 0; i < bpi.getListNonforfProvision().size(); i++) {
					if (bpi.getListNonforfProvision().get(i).getNonforf_prov().equals("POLICY_LOAN")) {
						JSONObject jsonObj_setvalue = new JSONObject();
						jsonObj_setvalue.put("Nonforf_prov", bpi.getListNonforfProvision().get(i).getNonforf_prov());
						jsonObj_setvalue.put("Is_default", bpi.getListNonforfProvision().get(i).getIs_default());
						jsonObj_setvalue.put("Formula_id", bpi.getListNonforfProvision().get(i).getFormula_id());
						jsonObj_setvalue.put("Interest_rate", bpi.getListNonforfProvision().get(i).getInterest_rate());
						jsonObj_setvalue.put("Rpu_sa_type", bpi.getListNonforfProvision().get(i).getRpu_sa_type());
						jsonObj_setvalue.put("Period_calc_meth", bpi.getListNonforfProvision().get(i).getPeriod_calc_meth());
						jsonObj_setvalue.put("Period_unit", bpi.getListNonforfProvision().get(i).getPeriod_unit());
						jsonObj_setvalue.put("Benefit_period", bpi.getListNonforfProvision().get(i).getBenefit_period());
						jsonarr_POLICY_LOAN.put(jsonObj_setvalue);
					}else if (bpi.getListNonforfProvision().get(i).getNonforf_prov().equals("CASH_SURR")) {
						JSONObject jsonObj_setvalue = new JSONObject();
						jsonObj_setvalue.put("Nonforf_prov", bpi.getListNonforfProvision().get(i).getNonforf_prov());
						jsonObj_setvalue.put("Is_default", bpi.getListNonforfProvision().get(i).getIs_default());
						
						for (int ii = 0; ii < datareturnlookupfomula.size(); ii++) {
							if (datareturnlookupfomula.get(ii).getFormulaCat().getFormula_cat_id() == 100) {
								for (int iii = 0 ; iii < datareturnlookupfomula.get(ii).getListFormula().size(); iii++) {
									if (datareturnlookupfomula.get(ii).getListFormula().get(iii).getFormula_id() == bpi.getListNonforfProvision().get(i).getFormula_id()) {
										jsonObj_setvalue.put("Formula_id", datareturnlookupfomula.get(ii).getListFormula().get(iii).getName_th());
									}
								}
							}
						}
						
						jsonObj_setvalue.put("Interest_rate", bpi.getListNonforfProvision().get(i).getInterest_rate());
						jsonObj_setvalue.put("Rpu_sa_type", bpi.getListNonforfProvision().get(i).getRpu_sa_type());
						jsonObj_setvalue.put("Period_calc_meth", bpi.getListNonforfProvision().get(i).getPeriod_calc_meth());
						jsonObj_setvalue.put("Period_unit", bpi.getListNonforfProvision().get(i).getPeriod_unit());
						jsonObj_setvalue.put("Benefit_period", bpi.getListNonforfProvision().get(i).getBenefit_period());
						jsonObj_setvalue.put("Is_claim_deduct", bpi.getListNonforfProvision().get(i).getIs_claim_deduct());
						jsonarr_CASH_SURR.put(jsonObj_setvalue);
					}else if (bpi.getListNonforfProvision().get(i).getNonforf_prov().equals("APL")) {
						JSONObject jsonObj_setvalue = new JSONObject();
						jsonObj_setvalue.put("Nonforf_prov", bpi.getListNonforfProvision().get(i).getNonforf_prov());
						jsonObj_setvalue.put("Is_default", bpi.getListNonforfProvision().get(i).getIs_default());
						jsonObj_setvalue.put("Formula_id", bpi.getListNonforfProvision().get(i).getFormula_id());
						jsonObj_setvalue.put("Interest_rate", bpi.getListNonforfProvision().get(i).getInterest_rate());
						jsonObj_setvalue.put("Rpu_sa_type", bpi.getListNonforfProvision().get(i).getRpu_sa_type());
						jsonObj_setvalue.put("Period_calc_meth", bpi.getListNonforfProvision().get(i).getPeriod_calc_meth());
						jsonObj_setvalue.put("Period_unit", bpi.getListNonforfProvision().get(i).getPeriod_unit());
						jsonObj_setvalue.put("Benefit_period", bpi.getListNonforfProvision().get(i).getBenefit_period());
						jsonarr_APL.put(jsonObj_setvalue);
					}else if (bpi.getListNonforfProvision().get(i).getNonforf_prov().equals("ETI")) {
						JSONObject jsonObj_setvalue = new JSONObject();
						jsonObj_setvalue.put("Nonforf_prov", bpi.getListNonforfProvision().get(i).getNonforf_prov());
						jsonObj_setvalue.put("Is_default", bpi.getListNonforfProvision().get(i).getIs_default());
						
						for (int ii = 0; ii < datareturnlookupfomula.size(); ii++) {
							if (datareturnlookupfomula.get(ii).getFormulaCat().getFormula_cat_id() == 101) {
								for (int iii = 0 ; iii < datareturnlookupfomula.get(ii).getListFormula().size(); iii++) {
									if (datareturnlookupfomula.get(ii).getListFormula().get(iii).getFormula_id() == bpi.getListNonforfProvision().get(i).getFormula_id()) {
										jsonObj_setvalue.put("Formula_id", datareturnlookupfomula.get(ii).getListFormula().get(iii).getName_th());
									}
								}
							}
						}
						
						jsonObj_setvalue.put("Interest_rate", bpi.getListNonforfProvision().get(i).getInterest_rate());
						jsonObj_setvalue.put("Rpu_sa_type", bpi.getListNonforfProvision().get(i).getRpu_sa_type());
						jsonObj_setvalue.put("Period_calc_meth", bpi.getListNonforfProvision().get(i).getPeriod_calc_meth());
						jsonObj_setvalue.put("Period_unit", bpi.getListNonforfProvision().get(i).getPeriod_unit());
						jsonObj_setvalue.put("Benefit_period", bpi.getListNonforfProvision().get(i).getBenefit_period());
						jsonarr_ETI.put(jsonObj_setvalue);
					}else if (bpi.getListNonforfProvision().get(i).getNonforf_prov().equals("AUTO_ETI")) {
						JSONObject jsonObj_setvalue = new JSONObject();
						jsonObj_setvalue.put("Nonforf_prov", bpi.getListNonforfProvision().get(i).getNonforf_prov());
						jsonObj_setvalue.put("Is_default", bpi.getListNonforfProvision().get(i).getIs_default());
						for (int ii = 0; ii < datareturnlookupfomula.size(); ii++) {
							if (datareturnlookupfomula.get(ii).getFormulaCat().getFormula_cat_id() == 101) {
								for (int iii = 0 ; iii < datareturnlookupfomula.get(ii).getListFormula().size(); iii++) {
									if (datareturnlookupfomula.get(ii).getListFormula().get(iii).getFormula_id() == bpi.getListNonforfProvision().get(i).getFormula_id()) {
										jsonObj_setvalue.put("Formula_id", datareturnlookupfomula.get(ii).getListFormula().get(iii).getName_th());
									}
								}
							}
						}
						
						jsonObj_setvalue.put("Interest_rate", bpi.getListNonforfProvision().get(i).getInterest_rate());
						jsonObj_setvalue.put("Rpu_sa_type", bpi.getListNonforfProvision().get(i).getRpu_sa_type());
						jsonObj_setvalue.put("Period_calc_meth", bpi.getListNonforfProvision().get(i).getPeriod_calc_meth());
						jsonObj_setvalue.put("Period_unit", bpi.getListNonforfProvision().get(i).getPeriod_unit());
						jsonObj_setvalue.put("Benefit_period", bpi.getListNonforfProvision().get(i).getBenefit_period());
						jsonarr_AUTO_ETI.put(jsonObj_setvalue);
					}else if (bpi.getListNonforfProvision().get(i).getNonforf_prov().equals("RPU")) {
						JSONObject jsonObj_setvalue = new JSONObject();
						jsonObj_setvalue.put("Nonforf_prov", bpi.getListNonforfProvision().get(i).getNonforf_prov());
						jsonObj_setvalue.put("Is_default", bpi.getListNonforfProvision().get(i).getIs_default());
						
						for (int ii = 0; ii < datareturnlookupfomula.size(); ii++) {
							if (datareturnlookupfomula.get(ii).getFormulaCat().getFormula_cat_id() == 102) {
								for (int iii = 0 ; iii < datareturnlookupfomula.get(ii).getListFormula().size(); iii++) {
									if (datareturnlookupfomula.get(ii).getListFormula().get(iii).getFormula_id() == bpi.getListNonforfProvision().get(i).getFormula_id()) {
										jsonObj_setvalue.put("Formula_id", datareturnlookupfomula.get(ii).getListFormula().get(iii).getName_th());
									}
								}
							}
						}
						
						jsonObj_setvalue.put("Interest_rate", bpi.getListNonforfProvision().get(i).getInterest_rate());
						jsonObj_setvalue.put("Rpu_sa_type", bpi.getListNonforfProvision().get(i).getRpu_sa_type());
						jsonObj_setvalue.put("Period_calc_meth", bpi.getListNonforfProvision().get(i).getPeriod_calc_meth());
						jsonObj_setvalue.put("Period_unit", bpi.getListNonforfProvision().get(i).getPeriod_unit());
						jsonObj_setvalue.put("Benefit_period", bpi.getListNonforfProvision().get(i).getBenefit_period());
						jsonObj_setvalue.put("Is_debt_deduct", bpi.getListNonforfProvision().get(i).getIs_debt_deduct());
						
						jsonarr_RPU.put(jsonObj_setvalue);
					}else if (bpi.getListNonforfProvision().get(i).getNonforf_prov().equals("AUTO_RPU")) {
						JSONObject jsonObj_setvalue = new JSONObject();
						jsonObj_setvalue.put("Nonforf_prov", bpi.getListNonforfProvision().get(i).getNonforf_prov());
						jsonObj_setvalue.put("Is_default", bpi.getListNonforfProvision().get(i).getIs_default());
						
						for (int ii = 0; ii < datareturnlookupfomula.size(); ii++) {
							if (datareturnlookupfomula.get(ii).getFormulaCat().getFormula_cat_id() == 102) {
								for (int iii = 0 ; iii < datareturnlookupfomula.get(ii).getListFormula().size(); iii++) {
									if (datareturnlookupfomula.get(ii).getListFormula().get(iii).getFormula_id() == bpi.getListNonforfProvision().get(i).getFormula_id()) {
										jsonObj_setvalue.put("Formula_id", datareturnlookupfomula.get(ii).getListFormula().get(iii).getName_th());
									}
								}
							}
						}
						
						jsonObj_setvalue.put("Interest_rate", bpi.getListNonforfProvision().get(i).getInterest_rate());
						jsonObj_setvalue.put("Rpu_sa_type", bpi.getListNonforfProvision().get(i).getRpu_sa_type());
						jsonObj_setvalue.put("Period_calc_meth", bpi.getListNonforfProvision().get(i).getPeriod_calc_meth());
						jsonObj_setvalue.put("Period_unit", bpi.getListNonforfProvision().get(i).getPeriod_unit());
						jsonObj_setvalue.put("Benefit_period", bpi.getListNonforfProvision().get(i).getBenefit_period());
						jsonObj_setvalue.put("Is_debt_deduct", bpi.getListNonforfProvision().get(i).getIs_debt_deduct());

						jsonarr_AUTO_RPU.put(jsonObj_setvalue);
					}
				}
			}
			JSONArray exercise_rights_insurance_jsonArray	= new JSONArray();
			JSONObject exercise_rights_insurance = new JSONObject();
			exercise_rights_insurance.put("POLICY_LOAN", jsonarr_POLICY_LOAN);
			exercise_rights_insurance.put("CASH_SURR", jsonarr_CASH_SURR);
			exercise_rights_insurance.put("APL", jsonarr_APL);
			exercise_rights_insurance.put("ETI", jsonarr_ETI);
			exercise_rights_insurance.put("AUTO_ETI", jsonarr_AUTO_ETI);
			exercise_rights_insurance.put("RPU", jsonarr_RPU);
			exercise_rights_insurance.put("AUTO_RPU", jsonarr_AUTO_RPU);
			
			exercise_rights_insurance_jsonArray.put(exercise_rights_insurance);
			responsejson.put("Tab_exercise_rights_insurance",exercise_rights_insurance_jsonArray);
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
				String file_url = "";
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
					if (bpi.getListRateLayoutStandard().get(i).getFile().getFile_url() != "") {
						file_url = bpi.getListRateLayoutStandard().get(i).getFile().getFile_url();
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
				json_tb_Insurance_premium.put("ref", file_url);
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
				json_extra_Rate.put("rate_layout_det", tb_layoutdet2_jsonArray);
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
			String prem_cal_meth = "";
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
					if(bpi.getListParticipantData().get(i).getCoverage().getPrem_calc_meth() != null) {
						prem_cal_meth = bpi.getListParticipantData().get(i).getCoverage().getPrem_calc_meth().toString();
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
				json_em_age.put("rate_layout_det", tb_layoutdet2_jsonArray);
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
					}
					if (bpi.getListRateLayoutCapitalDecrease().get(i).getFile().getFile_url() != "") {
						file_url = bpi.getListRateLayoutCapitalDecrease().get(i).getFile().getFile_url();
					}
				}

				json_tbcapital_decrease.put("pass", pass2);
				json_tbcapital_decrease.put("layout", layoutID);
				json_tbcapital_decrease.put("type", type);
				json_tbcapital_decrease.put("fileID", fileID);
				json_tbcapital_decrease.put("file", file_name);
				json_tbcapital_decrease.put("ref", file_url);
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
			json_cal_insurance_premiums.put("prem_cal_meth", prem_cal_meth);
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
/*			JSONArray	select_policy_value_jsonArray	= new JSONArray();
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
			//////////
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
			
			///////////////////RPU/////////////////////ETI
			JSONArray	jsonarr_RPU_Vl				= new JSONArray();
			JSONArray	jsonarr_ETI_Vl				= new JSONArray();
			
			if (bpi.getListNonforfProvision().size() != 0) {
				for (int i = 0; i < bpi.getListNonforfProvision().size(); i++) {
				 if (bpi.getListNonforfProvision().get(i).getNonforf_prov().equals("ETI")) {
						JSONObject jsonObj_setvalue = new JSONObject();
						jsonObj_setvalue.put("Nonforf_prov", bpi.getListNonforfProvision().get(i).getNonforf_prov());
						jsonObj_setvalue.put("Male_nonforf_rate", bpi.getListNonforfProvision().get(i).getMale_nonforf_rate());
						jsonObj_setvalue.put("Female_nonforf_rate", bpi.getListNonforfProvision().get(i).getFemale_nonforf_rate());
						///get year
						int nonforf_rate_id = 0;
						nonforf_rate_id = bpi.getListNonforfProvision().get(i).getMale_nonforf_rate() ;
						NonforfRateData brd = new NonforfRateData ();
						ArrayList<Nonforf_rate> searchNonforfRateByNonforfRateId = brd.searchNonforfRateByNonforfRateId(Integer.toString(nonforf_rate_id));
						
						jsonObj_setvalue.put("Year", searchNonforfRateByNonforfRateId.get(0).getStat_year());
						jsonarr_ETI_Vl.put(jsonObj_setvalue);
					}else if (bpi.getListNonforfProvision().get(i).getNonforf_prov().equals("RPU")) {
						JSONObject jsonObj_setvalue = new JSONObject();
						jsonObj_setvalue.put("Nonforf_prov", bpi.getListNonforfProvision().get(i).getNonforf_prov());
						jsonObj_setvalue.put("Male_nonforf_rate", bpi.getListNonforfProvision().get(i).getMale_nonforf_rate());
						jsonObj_setvalue.put("Female_nonforf_rate", bpi.getListNonforfProvision().get(i).getFemale_nonforf_rate());
						///get year
						int nonforf_rate_id = 0;
						nonforf_rate_id = bpi.getListNonforfProvision().get(i).getMale_nonforf_rate() ;
						NonforfRateData brd = new NonforfRateData ();
						ArrayList<Nonforf_rate> searchNonforfRateByNonforfRateId = brd.searchNonforfRateByNonforfRateId(Integer.toString(nonforf_rate_id));
						jsonObj_setvalue.put("Year", searchNonforfRateByNonforfRateId.get(0).getStat_year());
						jsonarr_RPU_Vl.put(jsonObj_setvalue);
					}
				}
			}
			JSONArray  policy_value_jsonArray	= new JSONArray();
			JSONObject json_policy_value = new JSONObject();
			json_policy_value.put("select_policy_value",select_policy_value_jsonArray);
			json_policy_value.put("table_policy_value",tb_policy_value_jsonArray);
			json_policy_value.put("select_Low_Risk",select_Low_Risk_jsonArray);
			json_policy_value.put("table_Low_Risk",tb_Low_Risk_jsonArray);
			json_policy_value.put("RPU", jsonarr_RPU_Vl);
			json_policy_value.put("ETI", jsonarr_ETI_Vl);
			policy_value_jsonArray.put(json_policy_value);
			//
			responsejson.put("Tab_table_policy_value",policy_value_jsonArray);
			//
			responseText = responsejson.toString();							*/
			/////////////////////////////////////////////////////////////////////
/////////////////////////////Tab ผลประโยชน์/ความคุ้มครอง//////////////////////
	//เสียชีวิต
	JSONArray	benefits_jsonArray				= new JSONArray();
	JSONArray	getpage_jsonArray				= new JSONArray();
	//เสียชีวิต
	JSONArray	die_jsonArray					= new JSONArray();
	JSONArray	jsonArray_exceptionAccidentPay	= new JSONArray();
	JSONArray	jsonArray_die_Amt				= new JSONArray();
	JSONObject  json_data						= new JSONObject();
	JSONArray	jsonArray_dara					= new JSONArray();
	JSONArray	jsonArray_die_Spc_Amt			= new JSONArray();
	//เงินครยกำหนด
	JSONArray	jsonArray_RefundMaturity_sched	= new JSONArray();
	JSONArray	jsonArray_RefundMaturity_Amt	= new JSONArray();
	//เิงนคืนทุกระยะ
	JSONArray	jsonArray_Refund_sched			= new JSONArray();
	JSONArray	jsonArray_Refund_Amt			= new JSONArray();
	//เงินบำนาญ
	JSONArray	jsonArray_Pension_sched			= new JSONArray();
	JSONArray	jsonArray_Pension_Amt			= new JSONArray();
	////กองทุนรักษาพยาบาล
	JSONArray	jsonArray_MedicalFund_sched		= new JSONArray();
	JSONArray	jsonArray_MedicalFund_Amt		= new JSONArray();
	//เงินปันผล
	JSONArray	jsonArray_Dividend_sched_01		= new JSONArray();
	JSONArray	jsonArray_Dividend_Amt_01		= new JSONArray();
	
	JSONArray	jsonArray_Dividend_item_02		= new JSONArray();
	JSONArray	jsonArray_Dividend_sched_02		= new JSONArray();
	JSONArray	jsonArray_Dividend_Amt_02		= new JSONArray();
	///Set to Show////////////////////////////////////////////////
	//เสียชีวิต
	JSONArray	jsonArray_die					= new JSONArray();
	//เงินครบกำหนดสัญญา
	JSONArray	jsonArray_RefundMaturity		= new JSONArray();
	//เงินคืนทุกระยะ
	JSONArray	jsonArray_Refund				= new JSONArray();
	//เงินบำนาญ
	JSONArray	jsonArray_Pension				= new JSONArray();
	////กองทุนรักษาพยาบาล
	JSONArray	jsonArray_MedicalFund			= new JSONArray();
	//เงินปันผล
	JSONArray	jsonArray_Dividend				= new JSONArray();
	
	BasePlanBenefitOLSearchData bad 			= new BasePlanBenefitOLSearchData();
	
	if (bpi.getLiistBenefitPage().size() > 0) {
		
		for (int i = 0; i < bpi.getLiistBenefitPage().size(); i++) {
			JSONObject json_getpage = new JSONObject();
			json_getpage.put("pass", bpi.getLiistBenefitPage().get(i).getCoverage_benefit_page().getPage_no());
			json_getpage.put("value", bpi.getLiistBenefitPage().get(i).getCoverage_benefit_page().getBnf_cat_code());
			getpage_jsonArray.put(json_getpage);
			/////////////////////////////////////////////////////////////////////////////////////
			//get---page by key
			//เสียชีวิต
			if (bpi.getLiistBenefitPage().get(i).getCoverage_benefit_page().getPage_no() == 1) {
			     bad.searchBenefitsOL(new String [] {"1"});
			    
			     ArrayList<BenefitAccessData> arr_Benefit_item 		= bad.getListBenefitDAccessData();
			     ArrayList<Benefit> arr_ExceptionAccidentPay 		= bad.getListExceptionAccidentPay();
			     //เสียชีวิต
			     if (arr_Benefit_item.size() > 0) {
			    	 if (arr_Benefit_item.size() > 0) {
			    		 for (int iii = 0; iii < arr_Benefit_item.get(0).getListBenefitSched().size(); iii++) {
			    			 JSONObject json_die 	= new JSONObject();
			    			 jsonArray_die_Amt  	= new JSONArray();
			    			 jsonArray_die_Spc_Amt	= new JSONArray();
			    			 json_die.put("bnf_item_id", arr_Benefit_item.get(0).getBenefitItem().getBnf_item_id());
			    			//
				    		 json_die.put("sched_seq", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getBenefit_sched().getSched_seq());
			    			 json_die.put("beg_period", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getBenefit_sched().getBeg_period());
			    			 json_die.put("beg_period_unit", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getBenefit_sched().getBeg_period_unit());
			    			 json_die.put("end_period", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getBenefit_sched().getEnd_period());
			    			 json_die.put("end_period_unit", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getBenefit_sched().getEnd_period_unit());
			    			 json_die.put("amt_compare", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getBenefit_sched().getAmt_compare());
			    			 //////////////Amount
			    			 if (arr_Benefit_item.get(0).getListBenefitSched().get(0).getListBenefitAmountAccessData().size() > 0 ) {
				    				 for (int iiii = 0; iiii < arr_Benefit_item.get(0).getListBenefitSched().get(iii).getListBenefitAmountAccessData().size(); iiii++) {
				    					 	JSONObject json_die_amt = new JSONObject();
				    					 	json_die_amt.put("amt_seq", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getListBenefitAmountAccessData().get(iiii).getBenefit_amount().getAmt_seq());
				    					 	json_die_amt.put("sched_seq", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getListBenefitAmountAccessData().get(iiii).getBenefit_amount().getSched_seq());
				    					 	if (arr_Benefit_item.get(0).getListBenefitSched().get(iii).getListBenefitAmountAccessData().get(iiii).getBenefit_amount().getBenef_amt() == null) {
				    					 		json_die_amt.put("benef_amt", 0);
				    					 	}else {
				    					 		json_die_amt.put("benef_amt", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getListBenefitAmountAccessData().get(iiii).getBenefit_amount().getBenef_amt());
				    					 	}
				    					 	json_die_amt.put("benef_factor", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getListBenefitAmountAccessData().get(iiii).getBenefit_amount().getBenef_factor());
				    					 	json_die_amt.put("benef_unit", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getListBenefitAmountAccessData().get(iiii).getBenefit_amount().getBenef_unit());
				    					 	jsonArray_die_Amt.put(json_die_amt); 	
				    					 	/////////////Special_Amt
				    						if (arr_Benefit_item.get(0).getListBenefitSched().get(iii).getListBenefitAmountAccessData().get(iiii).getListBenefitSpecialAmount().size() > 0) {
						    					for (int iiiii = 0; iiiii < arr_Benefit_item.get(0).getListBenefitSched().get(iii).getListBenefitAmountAccessData().get(iiii).getListBenefitSpecialAmount().size(); iiiii++) {
						    					 	JSONObject json_die_Special_Amt = new JSONObject();
						    					 	json_die_Special_Amt.put("sched_seq", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getListBenefitAmountAccessData().get(iiii).getListBenefitSpecialAmount().get(iiiii).getSched_seq());
						    					 	json_die_Special_Amt.put("amt_seq", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getListBenefitAmountAccessData().get(iiii).getListBenefitSpecialAmount().get(iiiii).getAmt_seq());
						    					 	json_die_Special_Amt.put("special_type", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getListBenefitAmountAccessData().get(iiii).getListBenefitSpecialAmount().get(iiiii).getSpecial_type());
						    					 	
						    					 	if (arr_Benefit_item.get(0).getListBenefitSched().get(iii).getListBenefitAmountAccessData().get(iiii).getListBenefitSpecialAmount().get(iiiii).getBenef_amt() == null) {
							    					 	json_die_Special_Amt.put("benef_amt", "");
						    					 	}else {
							    					 	json_die_Special_Amt.put("benef_amt", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getListBenefitAmountAccessData().get(iiii).getListBenefitSpecialAmount().get(iiiii).getBenef_amt());
						    					 	}
						    					 	
						    					 	json_die_Special_Amt.put("benef_factor", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getListBenefitAmountAccessData().get(iiii).getListBenefitSpecialAmount().get(iiiii).getBenef_factor());
						    					 	json_die_Special_Amt.put("benef_cond", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getListBenefitAmountAccessData().get(iiii).getListBenefitSpecialAmount().get(iiiii).getBenef_cond());

						    					 	jsonArray_die_Spc_Amt.put(json_die_Special_Amt);
												}
						    				} 
				    			}
				    			 json_die.put("amount", jsonArray_die_Amt);
				    			 json_die.put("special_Amt", jsonArray_die_Spc_Amt);

			    			 }
			    			 die_jsonArray.put(json_die);
			    		 }
		    				json_data.put("sched", die_jsonArray);
					     	//json_data.put("amount", jsonArray_die_Amt);
			    	 }
			     }
			     //รายการข้อยกเว้นการจ่ายเงินทดแทนในกรณีอุบัติเหตุ
			     if (arr_ExceptionAccidentPay.size() > 0) {
			    	 for (int j = 0; j < arr_ExceptionAccidentPay.size(); j++) {
			    		 JSONObject json_ExceptionAccidentPay = new JSONObject();
			    		 json_ExceptionAccidentPay.put("bnf_cat_code", arr_ExceptionAccidentPay.get(j).getBnf_code());
			    		 json_ExceptionAccidentPay.put("name_th", arr_ExceptionAccidentPay.get(j).getName_th());
			    		 jsonArray_exceptionAccidentPay.put(json_ExceptionAccidentPay);
			    	 }
			     }
			     //set to show
			     	JSONObject json_die 			= new JSONObject();
			     	jsonArray_dara.put(json_data);
					json_die.put("base_table", jsonArray_dara);
					json_die.put("exceptionAccidentPay", jsonArray_exceptionAccidentPay);
					jsonArray_die.put(json_die);
			}
			//เงินครบกำหนดสัญญา
			else if (bpi.getLiistBenefitPage().get(i).getCoverage_benefit_page().getPage_no() == 2) {
			    String type 	= "";
			    String period 	= "";
				bad.searchBenefitsOL(new String [] {"2"});
			    ArrayList<BenefitAccessData> arr_Benefit_item 		= bad.getListBenefitDAccessData();
			    if (arr_Benefit_item.size() > 0) {
			    	 if (arr_Benefit_item.size() > 0) {
			    		 for (int iii = 0; iii < arr_Benefit_item.get(0).getListBenefitSched().size(); iii++) {
			    			 JSONObject json_RefundMaturity_sched = new JSONObject();
			    			 json_RefundMaturity_sched.put("bnf_item_id", arr_Benefit_item.get(0).getBenefitItem().getBnf_item_id());
			    			//
			    			 json_RefundMaturity_sched.put("sched_seq", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getBenefit_sched().getSched_seq());
			    			 json_RefundMaturity_sched.put("beg_period", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getBenefit_sched().getBeg_period());
			    			 json_RefundMaturity_sched.put("beg_period_unit", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getBenefit_sched().getBeg_period_unit());
			    			 json_RefundMaturity_sched.put("end_period", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getBenefit_sched().getEnd_period());
			    			 json_RefundMaturity_sched.put("end_period_unit", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getBenefit_sched().getEnd_period_unit());
			    			 json_RefundMaturity_sched.put("amt_compare", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getBenefit_sched().getAmt_compare());
			    			 jsonArray_RefundMaturity_sched.put(json_RefundMaturity_sched);	
			    			 //////////////Amount
			    			 if(arr_Benefit_item.get(0).getListBenefitSched().get(iii).getListBenefitAmount().size() > 0) {
			    				 for (int iiii = 0; iiii < arr_Benefit_item.get(0).getListBenefitSched().get(iii).getListBenefitAmount().size(); iiii++) {
			    					 	JSONObject json_RefundMaturity_amt = new JSONObject();
			    					 	json_RefundMaturity_amt.put("amt_seq", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getListBenefitAmount().get(iiii).getAmt_seq());
			    					 	json_RefundMaturity_amt.put("sched_seq", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getListBenefitAmount().get(iiii).getSched_seq());
			    					 	if (arr_Benefit_item.get(0).getListBenefitSched().get(iii).getListBenefitAmount().get(iiii).getBenef_amt() == null) {
				    					 	json_RefundMaturity_amt.put("benef_amt", 0);
			    					 	}else {
				    					 	json_RefundMaturity_amt.put("benef_amt", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getListBenefitAmount().get(iiii).getBenef_amt());
			    					 	}
			    					 	json_RefundMaturity_amt.put("benef_factor", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getListBenefitAmount().get(iiii).getBenef_factor());
			    					 	json_RefundMaturity_amt.put("benef_unit", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getListBenefitAmount().get(iiii).getBenef_unit());
						    			jsonArray_RefundMaturity_Amt.put(json_RefundMaturity_amt);
			    				 }
			    			 }
			    		 }
			    	 }
			     }
			    //ระยะประกันของสัญญาประกันชีวิต
				if (bpi.getListParticipantData().get(0).getListBenefitPeriodDet() != null && bpi.getListParticipantData().get(0).getListBenefitPeriodDet().size() != 0 ) {
					insurance_period_radio	=	bpi.getListParticipantData().get(0).getListBenefitPeriodDet().get(0).getPeriod_calc_meth();
					if (insurance_period_radio.equals("TO_AGE")) {
						 if(bpi.getListParticipantData().get(0).getListBenefitPeriodDet().size() != 0) {
							type 	= "อายุ";
							period 	= Integer.toString(bpi.getListParticipantData().get(0).getListBenefitPeriodDet().get(0).getMax_period());
						 }
					}else if (insurance_period_radio.equals("TO_YEAR")) {
						 int lastrow 	= bpi.getListParticipantData().get(0).getListBenefitPeriodDet().size();
						 type 			= "ปี";
						 period 		= Integer.toString(bpi.getListParticipantData().get(0).getListBenefitPeriodDet().get(lastrow-1).getMax_period());
					}
				}
			    //set to show
			    JSONObject json_RefundMaturity = new JSONObject();
			    json_RefundMaturity.put("type", type);
			    json_RefundMaturity.put("period", period);
				json_RefundMaturity.put("sched", jsonArray_RefundMaturity_sched);
				json_RefundMaturity.put("amount", jsonArray_RefundMaturity_Amt);
				jsonArray_RefundMaturity.put(json_RefundMaturity);
			}
			//เงินคืนทุกระยะ
			else if (bpi.getLiistBenefitPage().get(i).getCoverage_benefit_page().getPage_no() == 3) {
				bad.searchBenefitsOL(new String [] {"3"});
			    ArrayList<BenefitAccessData> arr_Benefit_item 		= bad.getListBenefitDAccessData();
			    if (arr_Benefit_item.size() > 0) {
			    	 if (arr_Benefit_item.size() > 0) {
			    		 for (int iii = 0; iii < arr_Benefit_item.get(0).getListBenefitSched().size(); iii++) {
			    			 JSONObject json_Refund_sched = new JSONObject();
			    			 json_Refund_sched.put("bnf_item_id", arr_Benefit_item.get(0).getBenefitItem().getBnf_item_id());
			    			//
			    			 json_Refund_sched.put("sched_seq", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getBenefit_sched().getSched_seq());
			    			 json_Refund_sched.put("beg_period", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getBenefit_sched().getBeg_period());
			    			 json_Refund_sched.put("beg_period_unit", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getBenefit_sched().getBeg_period_unit());
			    			 json_Refund_sched.put("beg_period_type", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getBenefit_sched().getBeg_period_type());
			    			 json_Refund_sched.put("end_period", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getBenefit_sched().getEnd_period());
			    			 json_Refund_sched.put("end_period_unit", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getBenefit_sched().getEnd_period_unit());
			    			 json_Refund_sched.put("end_period_type", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getBenefit_sched().getEnd_period_type());
			    			 json_Refund_sched.put("amt_compare", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getBenefit_sched().getAmt_compare());
			    			 json_Refund_sched.put("freq_period", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getBenefit_sched().getFreq_period());
			    			 json_Refund_sched.put("freq_period_unit", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getBenefit_sched().getFreq_period_unit());
			    			 
			    			 jsonArray_Refund_sched.put(json_Refund_sched);	
			    			 //////////////Amount
			    			 if(arr_Benefit_item.get(0).getListBenefitSched().get(iii).getListBenefitAmount().size() > 0) {
			    				 for (int iiii = 0; iiii < arr_Benefit_item.get(0).getListBenefitSched().get(iii).getListBenefitAmount().size(); iiii++) {
			    					 	JSONObject json_Refund_Amt = new JSONObject();
			    					 	json_Refund_Amt.put("amt_seq", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getListBenefitAmount().get(iiii).getAmt_seq());
			    					 	json_Refund_Amt.put("sched_seq", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getListBenefitAmount().get(iiii).getSched_seq());
			    					 	if (arr_Benefit_item.get(0).getListBenefitSched().get(iii).getListBenefitAmount().get(iiii).getBenef_amt() == null) {
			    					 		json_Refund_Amt.put("benef_amt", 0);
			    					 	}else {
			    					 		json_Refund_Amt.put("benef_amt", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getListBenefitAmount().get(iiii).getBenef_amt());
			    					 	}
			    					 	json_Refund_Amt.put("benef_factor", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getListBenefitAmount().get(iiii).getBenef_factor());
			    					 	json_Refund_Amt.put("benef_unit", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getListBenefitAmount().get(iiii).getBenef_unit());
			    					 	json_Refund_Amt.put("benef_scope", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getListBenefitAmount().get(iiii).getBenef_scope());
			    					 	jsonArray_Refund_Amt.put(json_Refund_Amt);
			    				 }
			    			 }
			    		 }
			    	 }
			     }
			    //set to show
			    JSONObject json_Refund = new JSONObject();
				json_Refund.put("sched", jsonArray_Refund_sched);
				json_Refund.put("amount", jsonArray_Refund_Amt);
				jsonArray_Refund.put(json_Refund);
			}
			//เงินบำนาญ
			else if (bpi.getLiistBenefitPage().get(i).getCoverage_benefit_page().getPage_no() == 4) {
				bad.searchBenefitsOL(new String [] {"4"});
			    ArrayList<BenefitAccessData> arr_Benefit_item 		= bad.getListBenefitDAccessData();
			    if (arr_Benefit_item.size() > 0) {
			    	 if (arr_Benefit_item.size() > 0) {
			    		 for (int iii = 0; iii < arr_Benefit_item.get(0).getListBenefitSched().size(); iii++) {
			    			 JSONObject json_Pension_sched = new JSONObject();
			    			 json_Pension_sched.put("bnf_item_id", arr_Benefit_item.get(0).getBenefitItem().getBnf_item_id());
			    			//
			    			 json_Pension_sched.put("sched_seq", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getBenefit_sched().getSched_seq());
			    			 json_Pension_sched.put("beg_period", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getBenefit_sched().getBeg_period());
			    			 json_Pension_sched.put("beg_period_unit", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getBenefit_sched().getBeg_period_unit());
			    			 json_Pension_sched.put("beg_period_type", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getBenefit_sched().getBeg_period_type());
			    			 json_Pension_sched.put("end_period", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getBenefit_sched().getEnd_period());
			    			 json_Pension_sched.put("end_period_unit", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getBenefit_sched().getEnd_period_unit());
			    			 json_Pension_sched.put("end_period_type", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getBenefit_sched().getEnd_period_type());
			    			 json_Pension_sched.put("amt_compare", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getBenefit_sched().getAmt_compare());
			    			 json_Pension_sched.put("freq_period", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getBenefit_sched().getFreq_period());
			    			 json_Pension_sched.put("freq_period_unit", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getBenefit_sched().getFreq_period_unit());
			    			 
			    			 jsonArray_Pension_sched.put(json_Pension_sched);	
			    			 //////////////Amount
			    			 if(arr_Benefit_item.get(0).getListBenefitSched().get(iii).getListBenefitAmount().size() > 0) {
			    				 for (int iiii = 0; iiii < arr_Benefit_item.get(0).getListBenefitSched().get(iii).getListBenefitAmount().size(); iiii++) {
			    					 	JSONObject json_Pension_Amt = new JSONObject();
			    					 	json_Pension_Amt.put("amt_seq", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getListBenefitAmount().get(iiii).getAmt_seq());
			    					 	json_Pension_Amt.put("sched_seq", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getListBenefitAmount().get(iiii).getSched_seq());
			    					 	if (arr_Benefit_item.get(0).getListBenefitSched().get(iii).getListBenefitAmount().get(iiii).getBenef_amt() == null) {
			    					 		json_Pension_Amt.put("benef_amt", 0);
			    					 	}else {
			    					 		json_Pension_Amt.put("benef_amt", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getListBenefitAmount().get(iiii).getBenef_amt());
			    					 	}
			    					 	json_Pension_Amt.put("benef_factor", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getListBenefitAmount().get(iiii).getBenef_factor());
			    					 	json_Pension_Amt.put("benef_unit", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getListBenefitAmount().get(iiii).getBenef_unit());
			    					 	json_Pension_Amt.put("benef_scope", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getListBenefitAmount().get(iiii).getBenef_scope());
			    					 	jsonArray_Pension_Amt.put(json_Pension_Amt);
			    				 }
			    			 }
			    		 }
			    	 }
			     }
			    int beg_age 		= 0;
			    int benefit_sched 	= 0;
				if (bpi.getListParticipantData().size() != 0) {
					/// Table Coverage
					beg_age 		= bpi.getListParticipantData().get(0).getCoverage().getAnnuity_payout_age();
					benefit_sched	= bpi.getListParticipantData().get(0).getCoverage().getGuar_annuity_period();
				}
			    //set to show
			    JSONObject json_Pension = new JSONObject();
			    json_Pension.put("beg_age", beg_age);
				json_Pension.put("benefit_sched", benefit_sched);
				json_Pension.put("sched", jsonArray_Pension_sched);
				json_Pension.put("amount", jsonArray_Pension_Amt);
				jsonArray_Pension.put(json_Pension);
			} 
			//กองทุนรักษาพยาบาล
			else if (bpi.getLiistBenefitPage().get(i).getCoverage_benefit_page().getPage_no() == 5) {
				bad.searchBenefitsOL(new String [] {"5"});
			    ArrayList<BenefitAccessData> arr_Benefit_item 		= bad.getListBenefitDAccessData();
			    if (arr_Benefit_item.size() > 0) {
			    	 if (arr_Benefit_item.size() > 0) {
			    		 for (int iii = 0; iii < arr_Benefit_item.get(0).getListBenefitSched().size(); iii++) {
			    			 JSONObject json_MedicalFund_sched = new JSONObject();
			    			 json_MedicalFund_sched.put("bnf_item_id", arr_Benefit_item.get(0).getBenefitItem().getBnf_item_id());
			    			//
			    			 json_MedicalFund_sched.put("sched_seq", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getBenefit_sched().getSched_seq());
			    			 json_MedicalFund_sched.put("beg_period", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getBenefit_sched().getBeg_period());
			    			 json_MedicalFund_sched.put("beg_period_unit", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getBenefit_sched().getBeg_period_unit());
			    			 json_MedicalFund_sched.put("beg_period_type", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getBenefit_sched().getBeg_period_type());
			    			 json_MedicalFund_sched.put("end_period", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getBenefit_sched().getEnd_period());
			    			 json_MedicalFund_sched.put("end_period_unit", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getBenefit_sched().getEnd_period_unit());
			    			 json_MedicalFund_sched.put("end_period_type", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getBenefit_sched().getEnd_period_type());
			    			 json_MedicalFund_sched.put("amt_compare", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getBenefit_sched().getAmt_compare());
			    			 json_MedicalFund_sched.put("freq_period", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getBenefit_sched().getFreq_period());
			    			 json_MedicalFund_sched.put("freq_period_unit", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getBenefit_sched().getFreq_period_unit());
			    			 
			    			 jsonArray_MedicalFund_sched.put(json_MedicalFund_sched);	
			    			 //////////////Amount
			    			 if(arr_Benefit_item.get(0).getListBenefitSched().get(iii).getListBenefitAmount().size() > 0) {
			    				 for (int iiii = 0; iiii < arr_Benefit_item.get(0).getListBenefitSched().get(iii).getListBenefitAmount().size(); iiii++) {
			    					 	JSONObject json_MedicalFund_Amt = new JSONObject();
			    					 	json_MedicalFund_Amt.put("amt_seq", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getListBenefitAmount().get(iiii).getAmt_seq());
			    					 	json_MedicalFund_Amt.put("sched_seq", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getListBenefitAmount().get(iiii).getSched_seq());
			    					 	if (arr_Benefit_item.get(0).getListBenefitSched().get(iii).getListBenefitAmount().get(iiii).getBenef_amt() == null) {
			    					 		json_MedicalFund_Amt.put("benef_amt", 0);
			    					 	}else {
			    					 		json_MedicalFund_Amt.put("benef_amt", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getListBenefitAmount().get(iiii).getBenef_amt());
			    					 	}
			    					 	json_MedicalFund_Amt.put("benef_factor", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getListBenefitAmount().get(iiii).getBenef_factor());
			    					 	json_MedicalFund_Amt.put("benef_unit", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getListBenefitAmount().get(iiii).getBenef_unit());
			    					 	json_MedicalFund_Amt.put("benef_scope", arr_Benefit_item.get(0).getListBenefitSched().get(iii).getListBenefitAmount().get(iiii).getBenef_scope());
			    					 	jsonArray_MedicalFund_Amt.put(json_MedicalFund_Amt);
			    				 }
			    			 }
			    		 }
			    	 }
			     }
			    //set to show
			    JSONObject json_MedicalFund = new JSONObject();
				json_MedicalFund.put("sched", jsonArray_MedicalFund_sched);
				json_MedicalFund.put("amount", jsonArray_MedicalFund_Amt);
				jsonArray_MedicalFund.put(json_MedicalFund);
			}
			//เงินปันผล
			else if (bpi.getLiistBenefitPage().get(i).getCoverage_benefit_page().getPage_no() == 6) {
				bad.searchBenefitsOL(new String [] {"6"});
			    ArrayList<BenefitAccessData> arr_Benefit_item 		= bad.getListBenefitDAccessData();
			    if (arr_Benefit_item.size() > 0) {
			    	 if (arr_Benefit_item.size() > 0) {
			    		for (int ii = 0; ii < arr_Benefit_item.size(); ii++) {
			    			 if(arr_Benefit_item.get(ii).getBenefitItem().getBnf_code().equals("BC_OL_DIV_0001")) {
			    				 for (int iii = 0; iii < arr_Benefit_item.get(ii).getListBenefitSched().size(); iii++) {
					    			 JSONObject json_Dividend_sched = new JSONObject();
					    			 json_Dividend_sched.put("bnf_item_id", arr_Benefit_item.get(ii).getBenefitItem().getBnf_item_id());
					    			//
					    			 json_Dividend_sched.put("sched_seq", arr_Benefit_item.get(ii).getListBenefitSched().get(iii).getBenefit_sched().getSched_seq());
					    			 json_Dividend_sched.put("beg_period", arr_Benefit_item.get(ii).getListBenefitSched().get(iii).getBenefit_sched().getBeg_period());
					    			 json_Dividend_sched.put("beg_period_unit", arr_Benefit_item.get(ii).getListBenefitSched().get(iii).getBenefit_sched().getBeg_period_unit());
					    			 json_Dividend_sched.put("beg_period_type", arr_Benefit_item.get(ii).getListBenefitSched().get(iii).getBenefit_sched().getBeg_period_type());
					    			 json_Dividend_sched.put("end_period", arr_Benefit_item.get(ii).getListBenefitSched().get(iii).getBenefit_sched().getEnd_period());
					    			 json_Dividend_sched.put("end_period_unit", arr_Benefit_item.get(ii).getListBenefitSched().get(iii).getBenefit_sched().getEnd_period_unit());
					    			 json_Dividend_sched.put("end_period_type", arr_Benefit_item.get(ii).getListBenefitSched().get(iii).getBenefit_sched().getEnd_period_type());
					    			 json_Dividend_sched.put("amt_compare", arr_Benefit_item.get(ii).getListBenefitSched().get(iii).getBenefit_sched().getAmt_compare());
					    			 json_Dividend_sched.put("freq_period", arr_Benefit_item.get(ii).getListBenefitSched().get(iii).getBenefit_sched().getFreq_period());
					    			 json_Dividend_sched.put("freq_period_unit", arr_Benefit_item.get(ii).getListBenefitSched().get(iii).getBenefit_sched().getFreq_period_unit());
					    			 json_Dividend_sched.put("formula_id", arr_Benefit_item.get(ii).getListBenefitSched().get(iii).getBenefit_sched().getFormula_id());
					    			 
					    			 jsonArray_Dividend_sched_01.put(json_Dividend_sched);	
					    			 //////////////Amount
					    			 if(arr_Benefit_item.get(ii).getListBenefitSched().get(iii).getListBenefitAmount().size() > 0) {
					    				 for (int iiii = 0; iiii < arr_Benefit_item.get(ii).getListBenefitSched().get(iii).getListBenefitAmount().size(); iiii++) {
					    					 	JSONObject json_Dividend_Amt = new JSONObject();
					    					 	json_Dividend_Amt.put("amt_seq", arr_Benefit_item.get(ii).getListBenefitSched().get(iii).getListBenefitAmount().get(iiii).getAmt_seq());
					    					 	json_Dividend_Amt.put("sched_seq", arr_Benefit_item.get(ii).getListBenefitSched().get(iii).getListBenefitAmount().get(iiii).getSched_seq());
					    					 	if (arr_Benefit_item.get(ii).getListBenefitSched().get(iii).getListBenefitAmount().get(iiii).getBenef_amt() == null) {
					    					 		json_Dividend_Amt.put("benef_amt", 0);
					    					 	}else {
					    					 		json_Dividend_Amt.put("benef_amt", arr_Benefit_item.get(ii).getListBenefitSched().get(iii).getListBenefitAmount().get(iiii).getBenef_amt());
					    					 	}
					    					 	json_Dividend_Amt.put("benef_factor", arr_Benefit_item.get(ii).getListBenefitSched().get(iii).getListBenefitAmount().get(iiii).getBenef_factor());
					    					 	json_Dividend_Amt.put("benef_unit", arr_Benefit_item.get(ii).getListBenefitSched().get(iii).getListBenefitAmount().get(iiii).getBenef_unit());
					    					 	json_Dividend_Amt.put("benef_scope", arr_Benefit_item.get(ii).getListBenefitSched().get(iii).getListBenefitAmount().get(iiii).getBenef_scope());
					    					 	jsonArray_Dividend_Amt_01.put(json_Dividend_Amt);
					    				 }
					    			 }
					    		 }
			    			 
			    			 }else {
			    				 ////////item/////////////////////
			    				 JSONObject json_Dividend_item = new JSONObject();
		    					 json_Dividend_item.put("is_from_file", arr_Benefit_item.get(ii).getBenefitItem().getIs_from_file());
		    					 jsonArray_Dividend_item_02.put(json_Dividend_item);
		    					 /////////////////////////////////////
			    				 for (int iii = 0; iii < arr_Benefit_item.get(ii).getListBenefitSched().size(); iii++) {
//				    				//////////////sched
					    			 JSONObject json_Dividend_sched = new JSONObject();
					    			 json_Dividend_sched.put("bnf_item_id", arr_Benefit_item.get(ii).getBenefitItem().getBnf_item_id());
					    			//
					    			 json_Dividend_sched.put("sched_seq", arr_Benefit_item.get(ii).getListBenefitSched().get(iii).getBenefit_sched().getSched_seq());
					    			 json_Dividend_sched.put("beg_period", arr_Benefit_item.get(ii).getListBenefitSched().get(iii).getBenefit_sched().getBeg_period());
					    			 json_Dividend_sched.put("beg_period_unit", arr_Benefit_item.get(ii).getListBenefitSched().get(iii).getBenefit_sched().getBeg_period_unit());
					    			 json_Dividend_sched.put("beg_period_type", arr_Benefit_item.get(ii).getListBenefitSched().get(iii).getBenefit_sched().getBeg_period_type());
					    			 json_Dividend_sched.put("end_period", arr_Benefit_item.get(ii).getListBenefitSched().get(iii).getBenefit_sched().getEnd_period());
					    			 json_Dividend_sched.put("end_period_unit", arr_Benefit_item.get(ii).getListBenefitSched().get(iii).getBenefit_sched().getEnd_period_unit());
					    			 json_Dividend_sched.put("end_period_type", arr_Benefit_item.get(ii).getListBenefitSched().get(iii).getBenefit_sched().getEnd_period_type());
					    			 json_Dividend_sched.put("amt_compare", arr_Benefit_item.get(ii).getListBenefitSched().get(iii).getBenefit_sched().getAmt_compare());
					    			 json_Dividend_sched.put("freq_period", arr_Benefit_item.get(ii).getListBenefitSched().get(iii).getBenefit_sched().getFreq_period());
					    			 json_Dividend_sched.put("freq_period_unit", arr_Benefit_item.get(ii).getListBenefitSched().get(iii).getBenefit_sched().getFreq_period_unit());
					    			 
					    			 jsonArray_Dividend_sched_02.put(json_Dividend_sched);	
					    			 //////////////Amount
					    			 if(arr_Benefit_item.get(ii).getListBenefitSched().get(iii).getListBenefitAmount().size() > 0) {
					    				 for (int iiii = 0; iiii < arr_Benefit_item.get(ii).getListBenefitSched().get(iii).getListBenefitAmount().size(); iiii++) {
					    					 	JSONObject json_Dividend_Amt = new JSONObject();
					    					 	json_Dividend_Amt.put("amt_seq", arr_Benefit_item.get(ii).getListBenefitSched().get(iii).getListBenefitAmount().get(iiii).getAmt_seq());
					    					 	json_Dividend_Amt.put("sched_seq", arr_Benefit_item.get(ii).getListBenefitSched().get(iii).getListBenefitAmount().get(iiii).getSched_seq());
					    					 	if (arr_Benefit_item.get(ii).getListBenefitSched().get(iii).getListBenefitAmount().get(iiii).getBenef_amt() == null) {
					    					 		json_Dividend_Amt.put("benef_amt", 0);
					    					 	}else {
					    					 		json_Dividend_Amt.put("benef_amt", arr_Benefit_item.get(ii).getListBenefitSched().get(iii).getListBenefitAmount().get(iiii).getBenef_amt());
					    					 	}
					    					 	json_Dividend_Amt.put("benef_factor", arr_Benefit_item.get(ii).getListBenefitSched().get(iii).getListBenefitAmount().get(iiii).getBenef_factor());
					    					 	json_Dividend_Amt.put("benef_unit", arr_Benefit_item.get(ii).getListBenefitSched().get(iii).getListBenefitAmount().get(iiii).getBenef_unit());
					    					 	json_Dividend_Amt.put("benef_scope", arr_Benefit_item.get(ii).getListBenefitSched().get(iii).getListBenefitAmount().get(iiii).getBenef_scope());
					    					 	jsonArray_Dividend_Amt_02.put(json_Dividend_Amt);
					    				 }
					    			 }
					    		 }
			    			 }
						}
			    		
			    		
			    	 }
			     }
			    ////////////////////////////////////////////////////
				JSONArray	file_dividend_jsonArray	= new JSONArray();
				if (bpi.getLiistDividend().size() != 0) {
					JSONObject json_file_dividend = new JSONObject();
					String type 		= 	"";
					String file_name 	= 	"";
					String file_url 	= 	"";
					int pass2			= 	0;
					int layoutID		= 	0;
					int fileID			= 	0;
					String 	sub_code	=  "";
					if (bpi.getLiistDividend().get(0).getRateLayout() != null) {
						if (bpi.getLiistDividend().get(0).getRateLayout().getAge_band_code() != "") {
							type = bpi.getLiistDividend().get(0).getRateLayout().getAge_band_code();
						}
						if (bpi.getLiistDividend().get(0).getRateLayout().getRate_cat_id() != 0) {
							pass2 = bpi.getLiistDividend().get(0).getRateLayout().getRate_cat_id();
						}
						if (bpi.getLiistDividend().get(0).getRateLayout().getRate_layout_id() != 0) {
							layoutID = bpi.getLiistDividend().get(0).getRateLayout().getRate_layout_id();
						}
						if (bpi.getLiistDividend().get(0).getRateLayout().getFile_id() != 0) {
							fileID = bpi.getLiistDividend().get(0).getRateLayout().getFile_id();
						}
						if (!bpi.getLiistDividend().get(0).getRateLayout().getSub_code().equals("") || !!bpi.getLiistDividend().get(0).getRateLayout().getSub_code().equals("null")) {
							sub_code = bpi.getLiistDividend().get(0).getRateLayout().getSub_code();
						}
					}
					
					if(bpi.getLiistDividend().get(0).getFile() != null) {
						if (bpi.getLiistDividend().get(0).getFile().getFile_name() != "") {
							file_name = bpi.getLiistDividend().get(0).getFile().getFile_name();
						}	
						if (bpi.getLiistDividend().get(0).getFile().getFile_url() != "") {
							file_url = bpi.getLiistDividend().get(0).getFile().getFile_url();
						}
					}
					
					json_file_dividend.put("pass", pass2);
					json_file_dividend.put("layout", layoutID);
					json_file_dividend.put("type", type);
					json_file_dividend.put("fileID", fileID);
					json_file_dividend.put("file", file_name);
					json_file_dividend.put("sub_code", sub_code);
					json_file_dividend.put("ref", file_url);
					file_dividend_jsonArray.put(json_file_dividend);
				}
			    ////////////////////////////////////////////////////
			    //set to show
			    JSONObject json_Dividend = new JSONObject();
			    json_Dividend.put("sched_01", jsonArray_Dividend_sched_01);
			    json_Dividend.put("amount_01", jsonArray_Dividend_Amt_01);
			    json_Dividend.put("sched_02", jsonArray_Dividend_sched_02);
			    json_Dividend.put("amount_02", jsonArray_Dividend_Amt_02);
			    json_Dividend.put("file_dividend", file_dividend_jsonArray);
			    json_Dividend.put("item_02", jsonArray_Dividend_item_02);
			    
			    
				jsonArray_Dividend.put(json_Dividend);
			}
		}
	}
	////
	JSONObject json_pbenefits = new JSONObject();
	json_pbenefits.put("page", getpage_jsonArray);
	json_pbenefits.put("die", jsonArray_die);
	json_pbenefits.put("refundMaturity", jsonArray_RefundMaturity);
	json_pbenefits.put("refund", jsonArray_Refund);
	json_pbenefits.put("pension", jsonArray_Pension);
	json_pbenefits.put("medicalFund", jsonArray_MedicalFund);
	json_pbenefits.put("dividend", jsonArray_Dividend);
	
	benefits_jsonArray.put(json_pbenefits);
	responsejson.put("Tab_Benefits",benefits_jsonArray);
	//
		responseText = responsejson.toString();
			json = responseText;
			System.out.println("GetCaseBasePlan/"+responseText);
		
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	
	public String getCaseRider(HttpServletRequest request, HttpServletResponse response) throws Exception
	{
		try {
			System.out.println("RRRRRRRRRRRRRRRRRRRRRRRR");
			JSONObject responsejson = new JSONObject();
			String passInsurance 	= "";
			String biz_code 		= "";
			String nameTH 			= "";
			String nameEN 			= "";
			String sale_eff_date 	= "";
			String sale_exp_date 	= "";
			int age_Start		 	= 0;
			String age_Start_Unit 	= "";
			int age_To 				= 0;
			String age_To_Unit 		= "";
			int maximum_Protection_To = 0;
			String maximum_Protection_Unit = "";
			int maximum_insure_year = 0;
			int maximum_insure_age = 0;
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
			String premium_preiod_unit_text = "";
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
			JSONArray type_jsonArray = new JSONArray();
			//
			String insurance_premium_Code = request.getParameter("insurance_premium");
			ConstantValues.COV_CODE = insurance_premium_Code;
			//find lookup layout file 
			MainInsureDetailCreate mdc 				= new MainInsureDetailCreate ();
			ArrayList<RateCatAccessData> 			datareturnDet;
			
			//Benz Get sale_benefit
			ConstantValues.PRD_CODE 					= insurance_premium_Code;
			
			//
			boolean is_bundle	= false;
			
			String pass_Insurance = request.getParameter("rCode");
			Coverage coverage = new CoverageData().searchCoverage(pass_Insurance);
			RiderOLAccessData bpi = new RiderOLAccessData(coverage);
			bpi.searchPMStandard_CLOL();
			ProductControlData productControlData = new ProductControlData();
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
					//maximum_insure_year_Unit = bpi.getListParticipantData().get(0).getParticipant().getMax_insure_year_unit();
				}
				/// Table Coverage
				passInsurance = bpi.getListParticipantData().get(0).getCoverage().getCov_code();
				nameTH = bpi.getListParticipantData().get(0).getCoverage().getName_th();
				nameEN = bpi.getListParticipantData().get(0).getCoverage().getName_en();
				
				ArrayList<Product> lstProduct = productControlData.searchProductByCovCode(pass_Insurance);
				if(lstProduct.size() > 0) {
					biz_code = lstProduct.get(0).getCore_biz_prd_code();
				}
				// วันที่ คปภ.อนุมัติ
				sale_eff_date = getDateFormat(bpi.getListParticipantData().get(0).getCoverage().getSale_eff_date());
				sale_exp_date = getDateFormat(bpi.getListParticipantData().get(0).getCoverage().getSale_exp_date());
				
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
					LookupCatData lookupCatData = new LookupCatData();
					ArrayList<LookupCatAccessData> lstLookupCatAccessData = lookupCatData.searchLookupCat();
					for (LookupCatAccessData lookupCatAccessData : lstLookupCatAccessData) {
						for(Lookup_value lookup_value : lookupCatAccessData.getListLookupValue()) {
							if(bpi.getListPremiumAcessData().get(0).getListPremiumPeriod().get(0).getPeriod_unit()
									.equals(lookup_value.getEnum_value())) {
								premium_preiod_unit_text = lookup_value.getName_th();
							}
						}
					}
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
				//BENZ 16-10-2019
				is_bundle		= bpi.getListParticipantData().get(0).getCoverage().getIs_bundle();
				
		
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
				/*if (bpi.getListRateLayoutTAX().size() != 0) {
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
							tb_TaxReduce_json.put("layout",bpi.getListRateLayoutTAX().get(i).getFile().getFile_name());
						}
						tb_TaxReduce_jsonArray.put(tb_TaxReduce_json);
					}
		
				}*/
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
			
			String[] listPrd_code  = new String[] {pass_Insurance}; 
			 CoverageCatData cd = new CoverageCatData();
		        ArrayList<String[]> arr_Lv3 		=  new ArrayList<>();  
		        arr_Lv3 							= cd.searchCoverageCatLv3_ByCov_Code(listPrd_code);
				//JSONArray	type_jsonArray	= new JSONArray();	
				if (arr_Lv3.size() != 0) {
					for (int i = 0; i < arr_Lv3.size(); i++) {
						String cov_cat_id	= "";
						String cov_code 	= "";
						String cat_code 	= "";
						String cat_name 	= "";
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
							}else if (ii == 3) {
								cat_name 	= listarr_Lv3[ii];
								type_coverage_json.put("cat_name",cat_name);
							}
							type2_jsonArray.put(type_coverage_json);
						}
						arr_type_JSONObject.put("type", type2_jsonArray);
						type_jsonArray.put(arr_type_JSONObject);
					}
				}
			
			JSONArray basic_Info_jsonArray = new JSONArray();
			JSONObject json_basic_Info = new JSONObject();
			json_basic_Info.put("passInsurance", passInsurance);
			json_basic_Info.put("biz_code", biz_code);
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
			
			maximum_insure_year = bpi.getListParticipantData().get(0).getParticipant().getMax_insure_year();
			maximum_insure_age = bpi.getListParticipantData().get(0).getParticipant().getMax_insure_age();
			
			json_basic_Info.put("age_Start", Integer.toString(age_Start));
			json_basic_Info.put("age_Start_Unit", age_Start_Unit);
			json_basic_Info.put("age_To", Integer.toString(age_To));
			json_basic_Info.put("age_To_Unit", age_To_Unit);
			json_basic_Info.put("maximum_Protection_To", Integer.toString(maximum_Protection_To));
			json_basic_Info.put("maximum_Protection_Unit", maximum_Protection_Unit);
			json_basic_Info.put("maximum_Insure_year", maximum_insure_year);
			json_basic_Info.put("maximum_Insure_age", maximum_insure_age);
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
			json_basic_Info.put("premium_preiod_unit_text", premium_preiod_unit_text);
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
			// ประเภท cov_code
			json_basic_Info.put("type_coverage", type_jsonArray);
			//is_bundle 
			json_basic_Info.put("is_bundle",is_bundle);
			basic_Info_jsonArray.put(json_basic_Info);
			responsejson.put("Tab_Basic_Information", basic_Info_jsonArray);
			////////////////////////////// Policy Wording/////////////////////////
			JSONArray  tb_Policy_Wording_jsonArray	= new JSONArray();
			String cov_code = request.getParameter("rCode");
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
				String file_url	= "";
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
						file_url  = bpi.getListRateLayoutStandard().get(i).getFile().getFile_url();
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
				json_tb_Insurance_premium.put("rate_cat_id", rate_cat_id);
				json_tb_Insurance_premium.put("ref", file_url);
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
				json_extra_Rate.put("rate_layout_det", tb_layoutdet2_jsonArray);
				tb_extra_Rate_jsonArray.put(json_extra_Rate);
			}
			//////////////////////////////////////////////
			//นำเข้า NAR
			///select
			//เบี้ยเพิ่มพิเศษ
			JSONArray	select_NAR_jsonArray	= new JSONArray();
			for (int i = 0 ; i < bpi.getListRateLayoutNAR().size(); i++) {
			JSONObject json_select_NAR = new JSONObject();
			String text = "";
			
			if (bpi.getListRateLayoutNAR().get(i).getRateLayoutLookup() != null) {
				if (bpi.getListRateLayoutNAR().get(i).getRateLayoutLookup().getName_th() != "") {
					//text = bpi.getListRateLayoutSpecial().get(i).getRateLayoutLookup().getName_th();
					text = bpi.getListRateLayoutNAR().get(i).getSubCat().getName_th();
				}							
				
			}
			json_select_NAR.put("pass",Integer.toString(i+1));
			json_select_NAR.put("text",text);
			select_NAR_jsonArray.put(json_select_NAR);
			}
			///table
			JSONArray	table_NAR_jsonArray	= new JSONArray();
			if (bpi.getListTable_NAR().size() != 0) {
			JSONObject json_table_NAR = new JSONObject();
			String type 		= 	"";
			String file_name 	= 	"";
			int pass2			= 	0;
			int layoutID		= 	0;
			int fileID			= 	0;
			String 	sub_code	=  "";
			if (bpi.getListTable_NAR().get(0).getRateLayout() != null) {
				if (bpi.getListTable_NAR().get(0).getRateLayout().getAge_band_code() != "") {
					type = bpi.getListTable_NAR().get(0).getRateLayout().getAge_band_code();
				}
				if (bpi.getListTable_NAR().get(0).getRateLayout().getRate_cat_id() != 0) {
					pass2 = bpi.getListTable_NAR().get(0).getRateLayout().getRate_cat_id();
				}
				if (bpi.getListTable_NAR().get(0).getRateLayout().getRate_layout_id() != 0) {
					layoutID = bpi.getListTable_NAR().get(0).getRateLayout().getRate_layout_id();
				}
				if (bpi.getListTable_NAR().get(0).getRateLayout().getFile_id() != 0) {
					fileID = bpi.getListTable_NAR().get(0).getRateLayout().getFile_id();
				}
				if (!bpi.getListTable_NAR().get(0).getRateLayout().getSub_code().equals("") || !!bpi.getListTable_NAR().get(0).getRateLayout().getSub_code().equals("null")) {
					sub_code = bpi.getListTable_NAR().get(0).getRateLayout().getSub_code();
				}
			}
			
			if(bpi.getListTable_NAR().get(0).getFile() != null) {
				if (bpi.getListTable_NAR().get(0).getFile().getFile_name() != "") {
					file_name = bpi.getListTable_NAR().get(0).getFile().getFile_name();
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
			
			json_table_NAR.put("rate_cat_id", pass2);
			json_table_NAR.put("layout", layoutID);
			json_table_NAR.put("type", type);
			json_table_NAR.put("fileID", fileID);
			json_table_NAR.put("file", file_name);
			json_table_NAR.put("sub_code", sub_code);
			json_table_NAR.put("rate_layout_det", tb_layoutdet2_jsonArray);
			table_NAR_jsonArray.put(json_table_NAR);
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
		
				json_em_age.put("rate_cat_id", pass2);
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
					}
		
				}
		
				json_tbcapital_decrease.put("pass", pass2);
				json_tbcapital_decrease.put("layout", layoutID);
				json_tbcapital_decrease.put("type", type);
				json_tbcapital_decrease.put("fileID", fileID);
				json_tbcapital_decrease.put("file", file_name);
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
			json_cal_insurance_premiums.put("table_NAR",table_NAR_jsonArray);
			json_cal_insurance_premiums.put("select_NAR",select_NAR_jsonArray);
			cal_insurance_premiums_jsonArray.put(json_cal_insurance_premiums);
			responsejson.put("Tab_cal_insurance_premiums", cal_insurance_premiums_jsonArray);
			//
			responseText = responsejson.toString();
			/////////////////////////////////////////////////////////////////////
			///////////////////////////// Tab ตารางมูลค่ากรมธรรม์//////////////////////
/*			JSONArray select_policy_value_jsonArray = new JSONArray();
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
				int layoutid = 0;
				int fileid = 0;
				int pass = 0;
				if (bpi.getListRateLayoutRiskStardard().get(i).getRateLayout() != null) {
					if (bpi.getListRateLayoutRiskStardard().get(i).getRateLayout().getAge_band_code() != "") {
						type = bpi.getListRateLayoutRiskStardard().get(i).getRateLayout().getAge_band_code();
						layoutid = bpi.getListRateLayoutRiskStardard().get(i).getRateLayout().getRate_layout_id();
						pass = bpi.getListRateLayoutRiskStardard().get(i).getRateLayout().getRate_cat_id();
						fileid = bpi.getListRateLayoutRiskStardard().get(i).getRateLayout().getFile_id();
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
			responseText = responsejson.toString();												*/
			/////////////////////////////////////////////////////////////////////
			///////////////////////////// Tab ผลประโยชน์/ความคุ้มครอง//////////////////////
			// get bnf_Code
			
			JSONArray  benefit_jsonArray	= new JSONArray();
			JSONArray  benefit2_jsonArray	= new JSONArray();
			for (int i = 0 ; i < bpi.getListBenefitCat().size(); i++) {
				JSONObject json_benefit 		= new JSONObject();
				json_benefit.put("bnf_Code",bpi.getListBenefitCat().get(i).getBnf_cat_code());
				json_benefit.put("name_th",bpi.getListBenefitCat().get(i).getName_th());
				benefit2_jsonArray.put(json_benefit);
			}
	
			////////////////////////////////////////Benz set Rider OL 17-09-2019/////////////////////////////////////////////
			String pass_Insurance2 = request.getParameter("rCode");	
			RiderBenefits rb = new RiderBenefits ();
			ArrayList<Object []> arr_RiderBenefit= rb.searchBenefitAccessData(pass_Insurance2);
			JSONObject json_benefit2 		= new JSONObject();
			json_benefit2.put("benefit",arr_RiderBenefit);
			json_benefit2.put("topic",benefit2_jsonArray);
			benefit_jsonArray.put(json_benefit2);
			responsejson.put("Tab_benefit", benefit_jsonArray);
			//////////////////////////////////////////////////////////////////////////////////////
			//Benz 30-09-2019
			////////////////////////////////// END///////////////////////////////////
			////////////////////////////// ผลประโยชน์การขาย/////////////////////////
			SaleCompensationSerieData scs = new SaleCompensationSerieData ();
			ArrayList<Sale_compensation_serie> arr_sale_com_serie = scs.searchByPrdCode();
			
			SaleCompensationCondControlData scc = new SaleCompensationCondControlData();
			ArrayList<Sale_compensation_cond> arr_sale_com_cond = scc.searchByPrdCode();
			
			SaleCompensationDetailData scd	= new SaleCompensationDetailData () ;
			ArrayList<Sale_compensation_detail> arr_sale_com_detail = scd.searchByPrdCode();

			
			JSONArray salesBenefits_jsonArray = new JSONArray();
			String serie_no 		= "" ;
			String prd_code 		= "";
			String prd_rider_code 	= "";
			String str_eff_date = "";
			String str_exp_date = "";
			String year1 		= "";
			String year2 		= "";
			String year3	 	= "";
			String year4	 	= "";
			String credit 		= "";
			String overrid 		= "";
			String advance 		= "";
			String mkt_Inc 		= "";
			String saleValume 	= "";
			String mkt_Exp 		= "";
			
			if (arr_sale_com_serie.size() != 0) {
					//cond lv2
						if (arr_sale_com_cond.size() != 0)  {
							for (int ii = 0; ii < arr_sale_com_cond.size(); ii++) {
								JSONObject json_salesBenefits = new JSONObject();
									for (int i = 0; i < arr_sale_com_serie.size(); i++) {
										//serie lv1
											 prd_code 		= arr_sale_com_serie.get(i).getPrd_code();
											 prd_rider_code = arr_sale_com_serie.get(i).getPrd_rider_code();
											 serie_no 		= Integer.toString( arr_sale_com_serie.get(i).getSerie_no()); 

									}
									//serie lv1
									json_salesBenefits.put("prd_code", prd_code);
									json_salesBenefits.put("prd_rider_code", prd_rider_code);
									if (ii == 0) {
										json_salesBenefits.put("serie_no", serie_no);
									}else {
										json_salesBenefits.put("serie_no", "");

									}
									//cond lv2
									//Date
									if (arr_sale_com_cond.get(ii).getEff_date() != null) {
										str_eff_date 	= getDateFormat(arr_sale_com_cond.get(ii).getEff_date());
									}
									if (arr_sale_com_cond.get(ii).getExp_date() != null) {
										str_exp_date 	= getDateFormat(arr_sale_com_cond.get(ii).getExp_date());
									}
									json_salesBenefits.put("eff_data", str_eff_date);
									json_salesBenefits.put("exp_data", str_exp_date);
									json_salesBenefits.put("is_ref_base", arr_sale_com_cond.get(ii).getIs_ref_base());
									json_salesBenefits.put("seq", arr_sale_com_cond.get(ii).getSeq());
									//detail lv3
									if (arr_sale_com_detail.size() != 0) {
										for (int iii = 0; iii < arr_sale_com_detail.size(); iii++) {
											/*เช็ค seq  cond == seq  Detail*/		
											if (arr_sale_com_cond.get(ii).getSeq() == arr_sale_com_detail.get(iii).getSeq()) {
												//year1
												if (arr_sale_com_detail.get(iii).getCompen_type().equals("MAX_COM") && 
														arr_sale_com_detail.get(iii).getCompen_year() == 1 ||
														arr_sale_com_detail.get(iii).getCompen_type().equals("COMMISSION") && 
														arr_sale_com_detail.get(iii).getCompen_year() == 1) 
												{
													if (arr_sale_com_detail.get(iii).getCompen_rate() != null) {
														 year1 = arr_sale_com_detail.get(iii).getCompen_rate().toString();
													}
												}
												//year2
												if (arr_sale_com_detail.get(iii).getCompen_type().equals("COMMISSION") && 
														arr_sale_com_detail.get(iii).getCompen_year() == 2) 
												{
													if (arr_sale_com_detail.get(iii).getCompen_rate() != null) {
														 year2 = arr_sale_com_detail.get(iii).getCompen_rate().toString();
													}
												}
												//year3
												if (arr_sale_com_detail.get(iii).getCompen_type().equals("COMMISSION") && 
														arr_sale_com_detail.get(iii).getCompen_year() == 3) 
												{
													if (arr_sale_com_detail.get(iii).getCompen_rate() != null) {
														 year3 = arr_sale_com_detail.get(iii).getCompen_rate().toString();
													}
												}
												//year4
												if (arr_sale_com_detail.get(iii).getCompen_type().equals("COMMISSION") && 
														arr_sale_com_detail.get(iii).getCompen_year() == 4) 
												{
													if (arr_sale_com_detail.get(iii).getCompen_rate() != null) {
														 year4 = arr_sale_com_detail.get(iii).getCompen_rate().toString();
													}
												}
												//Check credit
												if (arr_sale_com_detail.get(iii).getCompen_type().equals("PERF_CREDIT")) 
												{
													if (arr_sale_com_detail.get(iii).getCompen_rate() != null) {
														credit = arr_sale_com_detail.get(iii).getCompen_rate().toString();
													}
												}
												//Check overrid
												if (arr_sale_com_detail.get(iii).getCompen_type().equals("OVERRIDE")) 
												{
													if (arr_sale_com_detail.get(iii).getCompen_rate() != null) {
														overrid = arr_sale_com_detail.get(iii).getCompen_rate().toString();
													}
												}
												//Check advance
												if (arr_sale_com_detail.get(iii).getCompen_type().equals("ADV_COMM")) 
												{
													if (arr_sale_com_detail.get(iii).getCompen_rate() != null) {
														advance = arr_sale_com_detail.get(iii).getCompen_rate().toString();
													}
												}
												//Check mkt_Inc
												if (arr_sale_com_detail.get(iii).getCompen_type().equals("MKTG_INCENTIVE")) 
												{
													if (arr_sale_com_detail.get(iii).getCompen_rate() != null) {
														mkt_Inc = arr_sale_com_detail.get(iii).getCompen_rate().toString();
													}
												}
												//Check saleValume
												if (arr_sale_com_detail.get(iii).getCompen_type().equals("SALE_VOLUME_BONUS")) 
												{
													if (arr_sale_com_detail.get(iii).getCompen_rate() != null) {
														saleValume = arr_sale_com_detail.get(iii).getCompen_rate().toString();
													}
												}
												//Check mkt_Exp
												if (arr_sale_com_detail.get(iii).getCompen_type().equals("MKTG_EXP")) 
												{
													if (arr_sale_com_detail.get(iii).getCompen_rate() != null) {
														mkt_Exp = arr_sale_com_detail.get(iii).getCompen_rate().toString();
													}
												}
											}
										}
									}
									json_salesBenefits.put("year1", year1);
									json_salesBenefits.put("year2", year2);
									json_salesBenefits.put("year3", year3);
									json_salesBenefits.put("year4", year4);
									json_salesBenefits.put("credit", credit);
									json_salesBenefits.put("overrid", overrid);
									json_salesBenefits.put("advance", advance);
									json_salesBenefits.put("mkt_Inc", mkt_Inc);
									json_salesBenefits.put("saleValume", saleValume);
									json_salesBenefits.put("mkt_Exp", mkt_Exp);
									//
								salesBenefits_jsonArray.put(json_salesBenefits);
							}
						}
			}
			JSONArray  sales_benefits_jsonArray	= new JSONArray();
			JSONObject json_sales_benefits 		= new JSONObject();
			json_sales_benefits.put("SalesBenefits",salesBenefits_jsonArray);
			sales_benefits_jsonArray.put(json_sales_benefits);
			responsejson.put("Tab_SalesBenefits",sales_benefits_jsonArray);
			
			
			//
			responseText = responsejson.toString();
			json = responseText;
			System.out.println("GetCaseRider//" + json);
		
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	
	public String getlookupRM_Rate(HttpServletRequest request, HttpServletResponse response) throws Exception
	{
		try {
			JSONObject responsejson = new JSONObject();
			RateLayoutData rld = new  RateLayoutData();
			String cov_code	 	= request.getParameter("cov_code");
			String cov_cat		= request.getParameter("cov_cat");
			
			
			String rate_cat_id	[] = null;
			MainInsurance mi = new MainInsurance ();
			ArrayList<View_category> Listcategorys  = mi.searchCategory(cov_code);
			//////////////////Get type 
			if (Listcategorys.size() > 0 ) {
				if (Listcategorys.get(0).getCat_code1().equals("RO") || Listcategorys.get(0).getCat_code1().equals("IL")
						|| Listcategorys.get(0).getCat_code2().equals("OL") || Listcategorys.get(0).getCat_code2().equals("OR")) {
					//OL
					rate_cat_id = ConstantRateCatIDValues.getPmstdRateCatOl();
					
				}else if (Listcategorys.get(0).getCat_code1().equals("RC") || Listcategorys.get(0).getCat_code2().equals("CL")) {
					//CL
					rate_cat_id = ConstantRateCatIDValues.getPmstdRateCat();
				}
			}
			
			/*process*/
			ArrayList<String[]> arr_str = new ArrayList<>();
			AppconfigControlData appconfigControlData = new AppconfigControlData();
			arr_str = appconfigControlData.searchSubRateCodeByCovCat(cov_cat, ConstantRateCatIDValues.getPmstdRateCatOl());
			
			ArrayList<RateLayoutPremAccessData> arr_Rate_layout = rld.searchCoverageRateLayout(cov_code, rate_cat_id);
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
		
		JSONArray pm_typeArray = new JSONArray();
		for (String[] str : arr_str) {
			JSONObject pm_typeObj = new JSONObject();
			pm_typeObj.put("type", str);
			pm_typeArray.put(pm_typeObj);
		}
		
			responsejson.put("Pm_Rate",pm_Array);
			responsejson.put("type", pm_typeArray);
			//
			responseText = responsejson.toString();
			json = responseText;
			System.out.println("GetlookupRM_Rate//" + responseText);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	
	public String getrate_layout_ByCovCode(HttpServletRequest request, HttpServletResponse response) throws Exception
	{
		try {
			JSONObject responsejson = new JSONObject();
			String cov_code = request.getParameter("cov_code");
		  	JSONArray jsonArr_cov_code = new JSONArray(cov_code);
			String[] listcov_code  		= new String[jsonArr_cov_code.length()]; 
			RateLayoutData rld = new RateLayoutData();
	        for (int i = 0; i < jsonArr_cov_code.length(); i++)
	        {	
	            listcov_code[i] 		= jsonArr_cov_code.get(i).toString();
	        }
	      ArrayList<RateLayoutPremAccessData> datareturn  = rld.searchRateLayoutByCovCode(listcov_code, new String[] {"33"});
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
			rl_Json.put("min_issue_age", arr_partici.get(i).getMin_issue_age());
			rl_Json.put("min_issue_age_unit", arr_partici.get(i).getMin_issue_age_unit());
			rl_Json.put("max_issue_age", arr_partici.get(i).getMax_issue_age());
			rl_Json.put("max_issue_age_unit", arr_partici.get(i).getMax_issue_age_unit());
			rl_Json.put("max_insure_age", arr_partici.get(i).getMax_insure_age());
			rl_Json.put("max_insure_age_unit", arr_partici.get(i).getMax_insure_age_unit());
			rl_Json.put("cov_code", arr_partici.get(i).getCov_code());
			rateLayout_Array.put(rl_Json);
		}
			responsejson.put("rateLayout_Type",rateLayout_Array);
			//
			responseText = responsejson.toString();
			json = responseText;
		
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	
	public String getViewListProduct(HttpServletRequest request, HttpServletResponse response) throws Exception
	{
		try {
			JSONObject responsejson = new JSONObject();
			String criteria = request.getParameter("criteria");
			ArrayList<String[]> listCriteria_product = new ArrayList<>();
			JSONArray criteria_jsonArr = new JSONArray(criteria);
			for (int i = 0; i < criteria_jsonArr.length(); i++) {
				JSONObject criteria_jsonObj = criteria_jsonArr.getJSONObject(i);
				String main_contract1		= criteria_jsonObj.getString("main_contract1");
				String main_contract2 		= criteria_jsonObj.getString("main_contract2");
				String main_contract3 		= criteria_jsonObj.getString("main_contract3");
				String underwrting_type	    = criteria_jsonObj.getString("underwrting_type");
				String senior				= criteria_jsonObj.getString("senior");
				String sale_chanel			= criteria_jsonObj.getString("sale_chanel");
				String partner  			= criteria_jsonObj.getString("partner");
				String[] criteria_listProduct = new String[] { main_contract1 ,main_contract2 ,main_contract3 ,senior ,underwrting_type ,sale_chanel ,partner};
				if(!main_contract1.equals("")) {
					listCriteria_product.add(criteria_listProduct);
				}
			}
			/**Table Product**/
			ListProductRiderOLData listProductRiderOLData = new ListProductRiderOLData();
			ArrayList<ProductRiderOLListAccessData> lstProductRiderOLList = listProductRiderOLData.searchListProductRiderOL(listCriteria_product);
			//System.out.println("SIZEEEEEE_Table Product/"+lstProductRiderOLList.size());
			
			/**Table accum rule exclude**/
			UnwAccumRuleExcludeData unwAccumRuleExcludeData = new UnwAccumRuleExcludeData();
//			ArrayList<Unw_accum_rule_exclude> lstUnwAccumRuleExclude = unwAccumRuleExcludeData.searchUnwAccumRuleExclude(request.getParameter("prd_code"));
			//System.out.println("SIZEEEEEE_Table accum rule exclude/"+lstUnwAccumRuleExclude.size());
			
			/**Table accum rule exclude**/
			ArrayList<ProductExcludedAccessData> lstProductExcludeAccessData = unwAccumRuleExcludeData.searchProductExclude(request.getParameter("prd_code"));
			//System.out.println("SIZEEEEEE_Table P&E accum rule exclude/"+lstProductExcludeAccessData.size());
			
			/**Result Table Product**/
		/*	for(int i=0 ; i<lstProductRiderOLList.size() ; i++) {
				if(lstUnwAccumRuleExclude.size() > 0) {
					for (Unw_accum_rule_exclude unw_accum_rule_exclude : lstUnwAccumRuleExclude) {
						if(lstProductRiderOLList.get(i).getPrd_code().equals(unw_accum_rule_exclude.getExclude_prd_code())) {
							lstProductRiderOLList.remove(i);
						}
					}
				}
			}*/
			JSONArray listProduct_jsonArr = new JSONArray();
			for (ProductRiderOLListAccessData productRiderOLListAccessData : lstProductRiderOLList) {
				JSONObject listProduct_jsonObj = new JSONObject();
				listProduct_jsonObj.put("prd_code", productRiderOLListAccessData.getPrd_code());
				listProduct_jsonObj.put("nameTH", productRiderOLListAccessData.getName_th());
				listProduct_jsonArr.put(listProduct_jsonObj);
			}
			
			/**Result Table accum rule exclude**/
			JSONArray listUnwAccumRuleExclude_jsonArr = new JSONArray();
			for (ProductExcludedAccessData pxad : lstProductExcludeAccessData) {
				if(pxad.getAccum_rule_exclude().getExclude_prd_code().equals(pxad.getProduct().getPrd_code())) {
					JSONObject listUnwAccumRuleExclude_jsonObj = new JSONObject();
					listUnwAccumRuleExclude_jsonObj.put("prd_code", pxad.getAccum_rule_exclude().getExclude_prd_code());
					listUnwAccumRuleExclude_jsonObj.put("accum_type", pxad.getAccum_rule_exclude().getAccum_type());
					listUnwAccumRuleExclude_jsonObj.put("nameTH", pxad.getProduct().getName_th());
					listUnwAccumRuleExclude_jsonArr.put(listUnwAccumRuleExclude_jsonObj);
				}
			}
		
			
			responsejson.put("table_product",listProduct_jsonArr);
			responsejson.put("table_unwAccumRuleExclude",listUnwAccumRuleExclude_jsonArr);
			responseText = responsejson.toString();
			json = responseText;
			System.out.println("ViewListProduct//" + responseText);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	public String getTab_SalesBenefits(HttpServletRequest request, HttpServletResponse response) throws Exception
	{
		try {
			JSONObject responsejson = new JSONObject();
			String pass_Insurance 				= request.getParameter("pass_Insurance");
			ConstantValues.PRD_CODE 			= pass_Insurance;
			
			FreezePolicyValue fpv = new FreezePolicyValue();
			fpv.set_product_value(pass_Insurance);
			
				//////////////////////////////ผลประโยชน์การขาย////////////////////////////
				SaleCompensationSerieData scs = new SaleCompensationSerieData ();
				ArrayList<Sale_compensation_serie> arr_sale_com_serie = scs.searchByPrdCode();
				SaleCompensationCondControlData scc = new SaleCompensationCondControlData();
				ArrayList<Sale_compensation_cond> arr_sale_com_cond = scc.searchByPrdCode();
				
				SaleCompensationDetailData scd	= new SaleCompensationDetailData () ;
				ArrayList<Sale_compensation_detail> arr_sale_com_detail = scd.searchByPrdCode();
				
				JSONArray salesBenefits1_jsonArray = new JSONArray();
				JSONArray salesBenefits2_jsonArray = new JSONArray();
				String str_eff_date = "";
				String str_exp_date = "";
				String year1 		= "";
				String year2 		= "";
				String year3	 	= "";
				String year4	 	= "";
				String credit 		= "";
				String overrid 		= "";
				String advance 		= "";
				String mkt_Inc 		= "";
				String saleValume 	= "";
				String mkt_Exp 		= "";
				ProductData pd 		= new ProductData();
				String	cov_code	= "";
				
				if (arr_sale_com_serie.size() != 0) {
					if (!arr_sale_com_serie.get(0).getGender().equals("NONE") && 
							!arr_sale_com_serie.get(0).getMode().equals("NONE") &&	
							arr_sale_com_serie.get(0).getMin_age() != 0	&& 
							arr_sale_com_serie.get(0).getMax_age() != 0	&& 
							arr_sale_com_serie.get(0).getMin_period() != 0	&& 
							arr_sale_com_serie.get(0).getMax_period() != 0) 
					{
						///set sel_benefits1
						for (int i = 0; i < arr_sale_com_serie.size(); i++) {
							JSONObject json_salesBenefits1 = new JSONObject();
							//serie lv1
								 if (arr_sale_com_serie.get(i).getPrd_code().equals(arr_sale_com_serie.get(i).getPrd_rider_code())) {
									 json_salesBenefits1.put("serie_no", Integer.toString(arr_sale_com_serie.get(i).getSerie_no()));
									 json_salesBenefits1.put("gender", arr_sale_com_serie.get(i).getGender());
									 json_salesBenefits1.put("mode", arr_sale_com_serie.get(i).getMode());
									 json_salesBenefits1.put("min_age", Integer.toString(arr_sale_com_serie.get(i).getMin_age()));
									 json_salesBenefits1.put("max_age", Integer.toString(arr_sale_com_serie.get(i).getMax_age()));
									//
									 BigDecimal bd_Min_sum = new BigDecimal(arr_sale_com_serie.get(i).getMin_sum().toString());
									 String str_Min_sum = (bd_Min_sum).toString();
									 BigDecimal bd_Max_sum = new BigDecimal(arr_sale_com_serie.get(i).getMax_sum().toString());
									 String str_Max_sum = (bd_Max_sum).toString();
									 //
									 json_salesBenefits1.put("min_sum", str_Min_sum);
									 json_salesBenefits1.put("max_sum", str_Max_sum);
									 json_salesBenefits1.put("min_period", Integer.toString(arr_sale_com_serie.get(i).getMin_period()));
									 json_salesBenefits1.put("max_period", Integer.toString(arr_sale_com_serie.get(i).getMax_period()));
									 salesBenefits1_jsonArray.put(json_salesBenefits1); 
								 }
						}
						///set sel_benefits2
						//cond lv2
						if (arr_sale_com_cond.size() != 0)  {
							for (int ii = 0; ii < arr_sale_com_cond.size(); ii++) {
								JSONObject json_salesBenefits = new JSONObject();
									//serie lv1
									json_salesBenefits.put("prd_code", arr_sale_com_cond.get(ii).getPrd_code());
									if (arr_sale_com_cond.get(ii).getPrd_code().equals(arr_sale_com_cond.get(ii).getPrd_rider_code())) {
										Product setproduct =	pd.searchProduct(arr_sale_com_cond.get(ii).getPrd_code());
										cov_code = setproduct.getCov_code();
										json_salesBenefits.put("cov_code", cov_code);
									}else {
										json_salesBenefits.put("cov_code", arr_sale_com_cond.get(ii).getPrd_rider_code());
									}
									
									if (arr_sale_com_cond.get(ii).getSeq() == 1) {
										json_salesBenefits.put("serie_no", arr_sale_com_cond.get(ii).getSerie_no());
									}else {
										json_salesBenefits.put("serie_no", "");
				
									}
									//cond lv2
									//Date
									str_eff_date 	= getDateFormat(arr_sale_com_cond.get(ii).getEff_date());
									str_exp_date 	= getDateFormat(arr_sale_com_cond.get(ii).getExp_date());
									
									json_salesBenefits.put("eff_data", str_eff_date);
									json_salesBenefits.put("exp_data", str_exp_date);
									json_salesBenefits.put("is_ref_base", arr_sale_com_cond.get(ii).getIs_ref_base());
									json_salesBenefits.put("seq", arr_sale_com_cond.get(ii).getSeq());
									//detail lv3
									if (arr_sale_com_detail.size() != 0) {
										for (int iii = 0; iii < arr_sale_com_detail.size(); iii++) {
											/*เช็ค seq  cond == seq  Detail*/		
											if (arr_sale_com_cond.get(ii).getPrd_rider_code().equals(arr_sale_com_detail.get(iii).getPrd_rider_code()) && 
													arr_sale_com_cond.get(ii).getSeq() == arr_sale_com_detail.get(iii).getSeq() && 
													arr_sale_com_cond.get(ii).getSerie_no() == arr_sale_com_detail.get(iii).getSerie_no()) 
											{
												//year1
												if (arr_sale_com_detail.get(iii).getCompen_type().equals("MAX_COM") && 
														arr_sale_com_detail.get(iii).getCompen_year() == 1 ||
														arr_sale_com_detail.get(iii).getCompen_type().equals("COMMISSION") && 
														arr_sale_com_detail.get(iii).getCompen_year() == 1) 
												{
													if (arr_sale_com_detail.get(iii).getCompen_rate() != null) {
														 year1 = arr_sale_com_detail.get(iii).getCompen_rate().toString();
													}
												}
												//year2
												if (arr_sale_com_detail.get(iii).getCompen_type().equals("COMMISSION") && 
														arr_sale_com_detail.get(iii).getCompen_year() == 2) 
												{
													if (arr_sale_com_detail.get(iii).getCompen_rate() != null) {
														 year2 = arr_sale_com_detail.get(iii).getCompen_rate().toString();
													}
												}
												//year3
												if (arr_sale_com_detail.get(iii).getCompen_type().equals("COMMISSION") && 
														arr_sale_com_detail.get(iii).getCompen_year() == 3) 
												{
													if (arr_sale_com_detail.get(iii).getCompen_rate() != null) {
														 year3 = arr_sale_com_detail.get(iii).getCompen_rate().toString();
													}
												}
												//year4
												if (arr_sale_com_detail.get(iii).getCompen_type().equals("COMMISSION") && 
														arr_sale_com_detail.get(iii).getCompen_year() == 4) 
												{
													if (arr_sale_com_detail.get(iii).getCompen_rate() != null) {
														 year4 = arr_sale_com_detail.get(iii).getCompen_rate().toString();
													}
												}
												//Check credit
												if (arr_sale_com_detail.get(iii).getCompen_type().equals("PERF_CREDIT")) 
												{
													if (arr_sale_com_detail.get(iii).getCompen_rate() != null) {
														credit = arr_sale_com_detail.get(iii).getCompen_rate().toString();
													}
												}
												//Check overrid
												if (arr_sale_com_detail.get(iii).getCompen_type().equals("OVERRIDE")) 
												{
													if (arr_sale_com_detail.get(iii).getCompen_rate() != null) {
														overrid = arr_sale_com_detail.get(iii).getCompen_rate().toString();
													}
												}
												//Check advance
												if (arr_sale_com_detail.get(iii).getCompen_type().equals("ADV_COMM")) 
												{
													if (arr_sale_com_detail.get(iii).getCompen_rate() != null) {
														advance = arr_sale_com_detail.get(iii).getCompen_rate().toString();
													}
												}
												//Check mkt_Inc
												if (arr_sale_com_detail.get(iii).getCompen_type().equals("MKTG_INCENTIVE")) 
												{
													if (arr_sale_com_detail.get(iii).getCompen_rate() != null) {
														mkt_Inc = arr_sale_com_detail.get(iii).getCompen_rate().toString();
													}
												}
												//Check saleValume
												if (arr_sale_com_detail.get(iii).getCompen_type().equals("SALE_VOLUME_BONUS")) 
												{
													if (arr_sale_com_detail.get(iii).getCompen_rate() != null) {
														saleValume = arr_sale_com_detail.get(iii).getCompen_rate().toString();
													}
												}
												//Check mkt_Exp
												if (arr_sale_com_detail.get(iii).getCompen_type().equals("MKTG_EXP")) 
												{
													if (arr_sale_com_detail.get(iii).getCompen_rate() != null) {
														mkt_Exp = arr_sale_com_detail.get(iii).getCompen_rate().toString();
													}
												}
											}
										}
									}
									json_salesBenefits.put("year1", year1);
									json_salesBenefits.put("year2", year2);
									json_salesBenefits.put("year3", year3);
									json_salesBenefits.put("year4", year4);
									json_salesBenefits.put("credit", credit);
									json_salesBenefits.put("overrid", overrid);
									json_salesBenefits.put("advance", advance);
									json_salesBenefits.put("mkt_Inc", mkt_Inc);
									json_salesBenefits.put("saleValume", saleValume);
									json_salesBenefits.put("mkt_Exp", mkt_Exp);
									//
								salesBenefits2_jsonArray.put(json_salesBenefits);
							}
						}
					}else {
						///set sel_benefits2
						//cond lv2
						if (arr_sale_com_cond.size() != 0)  {
							for (int ii = 0; ii < arr_sale_com_cond.size(); ii++) {
								JSONObject json_salesBenefits = new JSONObject();
									//serie lv1
									json_salesBenefits.put("prd_code", arr_sale_com_cond.get(ii).getPrd_code());
									if (arr_sale_com_cond.get(ii).getPrd_code().equals(arr_sale_com_cond.get(ii).getPrd_rider_code())) {
										Product setproduct =	pd.searchProduct(arr_sale_com_cond.get(ii).getPrd_code());
										cov_code = setproduct.getCov_code();
										json_salesBenefits.put("cov_code", cov_code);
									}else {
										json_salesBenefits.put("cov_code", arr_sale_com_cond.get(ii).getPrd_rider_code());
									}
									
									if (arr_sale_com_cond.get(ii).getSeq() == 1) {
										json_salesBenefits.put("serie_no", arr_sale_com_cond.get(ii).getSerie_no());
									}else {
										json_salesBenefits.put("serie_no", "");
				
									}
									//cond lv2
									//Date
									if (arr_sale_com_cond.get(ii).getEff_date() != null) {
										str_eff_date 	= getDateFormat(arr_sale_com_cond.get(ii).getEff_date());
									}
									if (arr_sale_com_cond.get(ii).getExp_date() != null) {
										str_exp_date 	= getDateFormat(arr_sale_com_cond.get(ii).getExp_date());
									}
									json_salesBenefits.put("eff_data", str_eff_date);
									json_salesBenefits.put("exp_data", str_exp_date);
									json_salesBenefits.put("is_ref_base", arr_sale_com_cond.get(ii).getIs_ref_base());
									json_salesBenefits.put("seq", arr_sale_com_cond.get(ii).getSeq());
									//detail lv3
				
									if (arr_sale_com_detail.size() != 0) {
										for (int iii = 0; iii < arr_sale_com_detail.size(); iii++) {
											/*เช็ค seq  cond == seq  Detail*/		
											
											
											if (arr_sale_com_cond.get(ii).getPrd_rider_code().equals(arr_sale_com_detail.get(iii).getPrd_rider_code()) && 
													arr_sale_com_cond.get(ii).getSeq() == arr_sale_com_detail.get(iii).getSeq() && 
													arr_sale_com_cond.get(ii).getSerie_no() == arr_sale_com_detail.get(iii).getSerie_no()) 
											{
												
												//year1
												if (arr_sale_com_detail.get(iii).getCompen_type().equals("MAX_COM") && 
														arr_sale_com_detail.get(iii).getCompen_year() == 1 ||
														arr_sale_com_detail.get(iii).getCompen_type().equals("COMMISSION") && 
														arr_sale_com_detail.get(iii).getCompen_year() == 1) 
												{
													if (arr_sale_com_detail.get(iii).getCompen_rate() != null) {
														 year1 = arr_sale_com_detail.get(iii).getCompen_rate().toString();
													}
												}
												//year2
												if (arr_sale_com_detail.get(iii).getCompen_type().equals("COMMISSION") && 
														arr_sale_com_detail.get(iii).getCompen_year() == 2) 
												{
													if (arr_sale_com_detail.get(iii).getCompen_rate() != null) {
														 year2 = arr_sale_com_detail.get(iii).getCompen_rate().toString();
													}
												}
												//year3
												if (arr_sale_com_detail.get(iii).getCompen_type().equals("COMMISSION") && 
														arr_sale_com_detail.get(iii).getCompen_year() == 3) 
												{
													if (arr_sale_com_detail.get(iii).getCompen_rate() != null) {
														 year3 = arr_sale_com_detail.get(iii).getCompen_rate().toString();
													}
												}
												//year4
												if (arr_sale_com_detail.get(iii).getCompen_type().equals("COMMISSION") && 
														arr_sale_com_detail.get(iii).getCompen_year() == 4) 
												{
													if (arr_sale_com_detail.get(iii).getCompen_rate() != null) {
														 year4 = arr_sale_com_detail.get(iii).getCompen_rate().toString();
													}
												}
												//Check credit
												if (arr_sale_com_detail.get(iii).getCompen_type().equals("PERF_CREDIT")) 
												{
													if (arr_sale_com_detail.get(iii).getCompen_rate() != null) {
														credit = arr_sale_com_detail.get(iii).getCompen_rate().toString();
													}
												}
												//Check overrid
												if (arr_sale_com_detail.get(iii).getCompen_type().equals("OVERRIDE")) 
												{
													if (arr_sale_com_detail.get(iii).getCompen_rate() != null) {
														overrid = arr_sale_com_detail.get(iii).getCompen_rate().toString();
													}
												}
												//Check advance
												if (arr_sale_com_detail.get(iii).getCompen_type().equals("ADV_COMM")) 
												{
													if (arr_sale_com_detail.get(iii).getCompen_rate() != null) {
														advance = arr_sale_com_detail.get(iii).getCompen_rate().toString();
													}
												}
												//Check mkt_Inc
												if (arr_sale_com_detail.get(iii).getCompen_type().equals("MKTG_INCENTIVE")) 
												{
													if (arr_sale_com_detail.get(iii).getCompen_rate() != null) {
														mkt_Inc = arr_sale_com_detail.get(iii).getCompen_rate().toString();
													}
												}
												//Check saleValume
												if (arr_sale_com_detail.get(iii).getCompen_type().equals("SALE_VOLUME_BONUS")) 
												{
													if (arr_sale_com_detail.get(iii).getCompen_rate() != null) {
														saleValume = arr_sale_com_detail.get(iii).getCompen_rate().toString();
													}
												}
												//Check mkt_Exp
												if (arr_sale_com_detail.get(iii).getCompen_type().equals("MKTG_EXP")) 
												{
													if (arr_sale_com_detail.get(iii).getCompen_rate() != null) {
														mkt_Exp = arr_sale_com_detail.get(iii).getCompen_rate().toString();
													}
												}
											}
										}
									}
									json_salesBenefits.put("year1", year1);
									json_salesBenefits.put("year2", year2);
									json_salesBenefits.put("year3", year3);
									json_salesBenefits.put("year4", year4);
									json_salesBenefits.put("credit", credit);
									json_salesBenefits.put("overrid", overrid);
									json_salesBenefits.put("advance", advance);
									json_salesBenefits.put("mkt_Inc", mkt_Inc);
									json_salesBenefits.put("saleValume", saleValume);
									json_salesBenefits.put("mkt_Exp", mkt_Exp);
									//
								salesBenefits2_jsonArray.put(json_salesBenefits);
							}
						}	
					}
				}
				JSONArray  sales_benefits_jsonArray	= new JSONArray();
				JSONObject json_sales_benefits 		= new JSONObject();
				json_sales_benefits.put("sel_benefits1",salesBenefits1_jsonArray);
				json_sales_benefits.put("sel_benefits2",salesBenefits2_jsonArray);
				sales_benefits_jsonArray.put(json_sales_benefits);
				responsejson.put("GetSalesBenefits",sales_benefits_jsonArray);
				responseText = responsejson.toString();

		} catch (Exception e) {
			// TODO: handle exception
		}
		return null;
	}
	
	public String getTab_BasicInfo_PR(HttpServletRequest request, HttpServletResponse response) throws Exception {
		try {
			JSONObject responsejson = new JSONObject();
			/// Table Product
			String productCode = "";// Product
			String coreBiz = "";// Product
			String nameTH = "";// Product
			String nameEN = "";// Product
			String marketing_nameTH = "";// Product
			String marketing_nameEN = "";// Product
			int distribution_Channel = 0;// Product
			int sale_channel = 0;// Product
			String partner = "";// Product
			String reinsurance_opt = "";// Product
			
			String status 			= "";

			String cov_code2 		= "";
			
			MainInsuranceService mis = new MainInsuranceService();
			ArrayList<Product> caseAll_return;
			caseAll_return = mis.GetCaseProductRider();
			String prd_code1 		= request.getParameter("prd_code");
			for (int i = 0; i < caseAll_return.size(); i++) {
				if (caseAll_return.get(i).getPrd_code().equals(prd_code1)) {
					pim = new ProductAccesData(caseAll_return.get(i));
				} 
			}
			
			/////////////////////////// ข้อมูลทั่วไป Basic Information////////////////////
			if (pim.getListProduct().size() != 0) {
				for (int i = 0; i < pim.getListProduct().size(); i++) {
					productCode 	= pim.getListProduct().get(i).getPrd_code();
					coreBiz 		= pim.getListProduct().get(i).getCore_biz_prd_code();
					nameTH 			= pim.getListProduct().get(i).getName_th();
					nameEN 			= pim.getListProduct().get(i).getName_en();
					if (pim.getListProduct().get(i).getCov_code() != null) {
						cov_code2		= pim.getListProduct().get(i).getCov_code();
					}

					
					//Benz 16-08-2019 /////
					status = pim.getListProduct().get(i).getStatus();
					marketing_nameTH 		= pim.getListProduct().get(i).getMarket_name_th();
					marketing_nameEN 		= pim.getListProduct().get(i).getMarket_name_en();
					reinsurance_opt  		= pim.getListProduct().get(i).getReinsurance_opt();
					distribution_Channel 	= pim.getListProduct().get(i).getDist_chan_id();
					sale_channel 			= pim.getListProduct().get(i).getSale_chan_id();
					partner 				= pim.getListProduct().get(i).getSale_partner_code();
				}
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
					json_BasePlan_jsonArray.put("cov_cat_id",String.valueOf(json_lv3.get("cov_cat_id")));
					json_BasePlan_jsonArray.put("cov_code", String.valueOf(json_cov_code.get("cov_code")));
					json_BasePlan_jsonArray.put("prd_code", String.valueOf(json_cov_code.get("prd_code")));
					json_BasePlan_jsonArray.put("nameTH", String.valueOf(json_nameTH.get("nameTH")));
					json_BasePlan_jsonArray.put("fix_sa_amt", String.valueOf(json_fix.get("fix_sa_amt")));
					
					for (int j = 0; j < rate_lyout_jsonArray.length(); j++) {
						 json_rate_lyout2 				= rate_lyout_jsonArray.getJSONObject(j);
						if (json_rate_lyout2.get("prd_code").equals(json_rate_lyout2.get("prd_rider_code")) && json_cov_code.get("prd_code").equals(json_rate_lyout2.get("prd_rider_code"))) {
							if (Integer.parseInt(json_rate_lyout2.getString("rate_cat_id")) == 26 || Integer.parseInt(json_rate_lyout2.getString("rate_cat_id")) == 27) {
								//setFile
								for (int jj = 0; jj < file_jsonArray.length(); jj++) {
									json_pm_Rate = new JSONObject();
									JSONObject json_file2		 	= file_jsonArray.getJSONObject(jj);
									if (json_rate_lyout2.getInt("File_Id") == json_file2.getInt("fileID")) {
										json_pm_Rate.put("rate_cat_id", String.valueOf(json_rate_lyout2.get("rate_cat_id")));
										json_pm_Rate.put("rate_layout_id",String.valueOf(json_rate_lyout2.get("Rate_layout_id")));
										json_pm_Rate.put("filename", String.valueOf(json_file2.get("filename")));
										json_pm_Rate.put("fileID", String.valueOf(json_file2.get("fileID")));
										json_pm_Rate.put("ref", String.valueOf(json_file2.get("fileUrl")));
										arr_add_pm_Rate.put(json_pm_Rate);
									}
								}
							} 
							if (Integer.parseInt(json_rate_lyout2.getString("rate_cat_id")) == 39) {	
								for (int jj = 0; jj < file_jsonArray.length(); jj++) {
										json_nar = new JSONObject();
										JSONObject json_file2		 	= file_jsonArray.getJSONObject(jj);
										if (json_rate_lyout2.getInt("File_Id") == json_file2.getInt("fileID")) {
											json_nar.put("rate_cat_id", String.valueOf(json_rate_lyout2.get("rate_cat_id")));
											json_nar.put("rate_layout_id", String.valueOf(json_rate_lyout2.get("Rate_layout_id")));
											json_nar.put("filename", String.valueOf(json_file2.get("filename")));
											json_nar.put("fileID", String.valueOf(json_file2.get("fileID")));
											json_nar.put("ref", String.valueOf(json_file2.get("fileUrl")));
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
					json_BaseRider_json.put("cov_cat_id",String.valueOf(json_lv3.get("cov_cat_id")));
					json_BaseRider_json.put("flag_type", String.valueOf(json_fix.get("flag_type")));
					json_BaseRider_json.put("cov_code", String.valueOf(json_cov_code.get("cov_code")));
					json_BaseRider_json.put("prd_code", String.valueOf(json_cov_code.get("prd_code")));
					json_BaseRider_json.put("fix_sa_amt", String.valueOf(json_fix.get("fix_sa_amt")));
					json_BaseRider_json.put("nameTH", String.valueOf(json_nameTH.get("nameTH")));
					
					for (int j = 0; j < rate_lyout_jsonArray.length(); j++) {
						 json_rate_lyout2 				= rate_lyout_jsonArray.getJSONObject(j);
						if (!json_rate_lyout2.get("prd_code").equals(json_rate_lyout2.get("prd_rider_code")) && json_cov_code.get("prd_code").equals(json_rate_lyout2.get("prd_rider_code"))) {

							if (Integer.parseInt(json_rate_lyout2.getString("rate_cat_id")) == 26 || Integer.parseInt(json_rate_lyout2.getString("rate_cat_id")) == 27) {

								//setFile
								for (int jj = 0; jj < file_jsonArray.length(); jj++) {
									json_pm_Rate = new JSONObject();
									JSONObject json_file2		 	= file_jsonArray.getJSONObject(jj);
									if (json_rate_lyout2.getInt("File_Id") == json_file2.getInt("fileID")) {
										json_pm_Rate.put("rate_cat_id", String.valueOf(json_rate_lyout2.get("rate_cat_id")));
										json_pm_Rate.put("rate_layout_id",String.valueOf(json_rate_lyout2.get("Rate_layout_id")));
										json_pm_Rate.put("filename", String.valueOf(json_file2.get("filename")));
										json_pm_Rate.put("fileID", String.valueOf(json_file2.get("fileID")));
										json_pm_Rate.put("ref", String.valueOf(json_file2.get("fileUrl")));
										arr_add_pm_Rate.put(json_pm_Rate);
									}
								}
							} 
							if (Integer.parseInt(json_rate_lyout2.getString("rate_cat_id")) == 39) {

								for (int jj = 0; jj < file_jsonArray.length(); jj++) {
										json_nar = new JSONObject();
										JSONObject json_file2		 	= file_jsonArray.getJSONObject(jj);
										if (json_rate_lyout2.getInt("File_Id") == json_file2.getInt("fileID")) {
											json_nar.put("rate_cat_id", String.valueOf(json_rate_lyout2.get("rate_cat_id")));
											json_nar.put("rate_layout_id", String.valueOf(json_rate_lyout2.get("Rate_layout_id")));
											json_nar.put("filename", String.valueOf(json_file2.get("filename")));
											json_nar.put("fileID", String.valueOf(json_file2.get("fileID")));
											json_nar.put("ref", String.valueOf(json_file2.get("fileUrl")));
											arr_add_nar.put(json_nar);
										}	
								}
							}
						}else {
							if (Integer.parseInt(json_rate_lyout2.getString("rate_cat_id")) == 26 || Integer.parseInt(json_rate_lyout2.getString("rate_cat_id")) == 27) {

								//setFile
								for (int jj = 0; jj < file_jsonArray.length(); jj++) {
									json_pm_Rate = new JSONObject();
									JSONObject json_file2		 	= file_jsonArray.getJSONObject(jj);
									if (json_rate_lyout2.getInt("File_Id") == json_file2.getInt("fileID")) {
										json_pm_Rate.put("rate_cat_id", String.valueOf(json_rate_lyout2.get("rate_cat_id")));
										json_pm_Rate.put("rate_layout_id",String.valueOf(json_rate_lyout2.get("Rate_layout_id")));
										json_pm_Rate.put("filename", String.valueOf(json_file2.get("filename")));
										json_pm_Rate.put("fileID", String.valueOf(json_file2.get("fileID")));
										json_pm_Rate.put("ref", String.valueOf(json_file2.get("fileUrl")));
										arr_add_pm_Rate.put(json_pm_Rate);
									}
								}
							} 
							if (Integer.parseInt(json_rate_lyout2.getString("rate_cat_id")) == 39) {

								for (int jj = 0; jj < file_jsonArray.length(); jj++) {
										json_nar = new JSONObject();
										JSONObject json_file2		 	= file_jsonArray.getJSONObject(jj);
										if (json_rate_lyout2.getInt("File_Id") == json_file2.getInt("fileID")) {
											json_nar.put("rate_cat_id", String.valueOf(json_rate_lyout2.get("rate_cat_id")));
											json_nar.put("rate_layout_id", String.valueOf(json_rate_lyout2.get("Rate_layout_id")));
											json_nar.put("filename", String.valueOf(json_file2.get("filename")));
											json_nar.put("fileID", String.valueOf(json_file2.get("fileID")));
											json_nar.put("ref", String.valueOf(json_file2.get("fileUrl")));
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
//=================Benz//18-09-2019=============Get Case RiderOL==========================================
			int age_Start		 	= 0;
			String age_Start_Unit 	= "";
			int age_To 				= 0;
			String age_To_Unit 		= "";
			int maximum_Protection_To = 0;
			String maximum_Protection_Unit = "";
			int maximum_insure_year = 0;
			int maximum_insure_age = 0;
			///
			JSONArray mode_jsonArray = new JSONArray();
			///
			String sex = "";
			ConstantValues.COV_CODE = cov_code2;
			//

			String pass_Insurance1 = cov_code2;
			Coverage coverage = new CoverageData().searchCoverage(pass_Insurance1);
			RiderOLAccessData bpi = new RiderOLAccessData(coverage);
			if (pass_Insurance1 != "") {
				// mode
				if (bpi.getListMode().size() != 0) {
					for (int i = 0; i < bpi.getListMode().size(); i++) {
						JSONObject json_Mode = new JSONObject();
						json_Mode.put("value", bpi.getListMode().get(i).getMode());
						mode_jsonArray.put(json_Mode);
					}
				}
				age_Start 				= bpi.getListParticipantData().get(0).getParticipant().getMin_issue_age();
				age_Start_Unit 			= bpi.getListParticipantData().get(0).getParticipant().getMin_issue_age_unit();
				age_To 					= bpi.getListParticipantData().get(0).getParticipant().getMax_issue_age();
				age_To_Unit 			= bpi.getListParticipantData().get(0).getParticipant().getMax_issue_age_unit();
				maximum_Protection_To 	= bpi.getListParticipantData().get(0).getParticipant().getMax_insure_age();
				maximum_Protection_Unit = bpi.getListParticipantData().get(0).getParticipant().getMax_insure_age_unit();
				
				maximum_insure_year 	= bpi.getListParticipantData().get(0).getParticipant().getMax_insure_year();
				maximum_insure_age 		= bpi.getListParticipantData().get(0).getParticipant().getMax_insure_age();
				sex = 					bpi.getListParticipantData().get(0).getParticipant().getIssue_gender();
		
			}
//=========================================================================
			
			///////////////////////////////////////////////////////////
			JSONArray basic_Info_jsonArray = new JSONArray();
			JSONObject json_basic_Info = new JSONObject();
			json_basic_Info.put("passInsurance", productCode);
			json_basic_Info.put("coreBiz", coreBiz);
			json_basic_Info.put("nameTH", nameTH);
			json_basic_Info.put("nameEN", nameEN);
			json_basic_Info.put("marketing_nameTH", marketing_nameTH);
			json_basic_Info.put("marketing_nameEN", marketing_nameEN);
			json_basic_Info.put("reinsurance_opt", reinsurance_opt);
			json_basic_Info.put("distribution_Channel", Integer.toString(distribution_Channel));
			json_basic_Info.put("sale_channel", Integer.toString(sale_channel));
			json_basic_Info.put("partner", partner);
			json_basic_Info.put("rider", tableRider_jsonArray);
			json_basic_Info.put("age_Start", Integer.toString(age_Start));
			json_basic_Info.put("age_Start_Unit", age_Start_Unit);
			json_basic_Info.put("age_To", Integer.toString(age_To));
			json_basic_Info.put("age_To_Unit", age_To_Unit);
			json_basic_Info.put("maximum_Protection_To", Integer.toString(maximum_Protection_To));
			json_basic_Info.put("maximum_Protection_Unit", maximum_Protection_Unit);
			json_basic_Info.put("maximum_Insure_year", maximum_insure_year);
			json_basic_Info.put("maximum_insure_age", maximum_insure_age);
			json_basic_Info.put("mode", mode_jsonArray);
			json_basic_Info.put("sex", sex);
			//Benz 16-08-2019
			json_basic_Info.put("status",status);
			json_basic_Info.put("status_PD",status_PD);
			basic_Info_jsonArray.put(json_basic_Info);
			responsejson.put("Tab_Basic_Information", basic_Info_jsonArray);
			responseText = responsejson.toString();
			System.out.println("GetCasePR/"+responseText);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	
}