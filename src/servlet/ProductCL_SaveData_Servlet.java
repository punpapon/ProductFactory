package servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.math.BigDecimal;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.Timestamp;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.JSONArray;
import org.json.JSONObject;


import layout.bean.productfac.product.Participant;
import layout.bean.productfac.product.Prem_collect;
import layout.bean.productfac.product.Prem_install;
import layout.bean.productfac.coverage.Coverage;
import layout.bean.productfac.product.Coop;
import layout.bean.productfac.product.Coop_commission;
import layout.bean.productfac.product.Coop_prem_discount;
import layout.bean.productfac.product.Coop_sum;
import layout.bean.productfac.product.Flp_fee;
import layout.bean.productfac.product.Formula;
import layout.bean.productfac.product.Limit_cond;
import layout.bean.productfac.product.Limit_cond_amt;
import layout.bean.productfac.product.Limit_cond_serie;

import layout.bean.productfac.product.Mode;
import layout.bean.productfac.product.Occ;
import layout.bean.productfac.product.Product;
import layout.bean.productfac.product.Product_change;
import layout.bean.productfac.product.Rate_layout;
import layout.bean.productfac.product.Rider;
import layout.bean.productfac.product.Sale_compensation;
import layout.bean.productfac.product.Underwrite;
import layout.bean.productfac.product.Unw_accum_rule;
import layout.bean.productfac.product.Unw_cocredit_limit;
import layout.bean.productfac.product.Unw_hist_exist_prod;
import layout.bean.productfac.product.Unw_hist_med_sum;
import layout.bean.productfac.product.Unw_hist_med_sum_det;
import layout.bean.productfac.product.Unw_hist_rule;
import layout.bean.productfac.product.Unw_pol_issue_unit;
import layout.bean.productfac.product.Unw_rider_limit;
import layout.bean.productfac.product.Unw_substd_type;
import layout.bean.productfac.underwrite.Appendix_product;
import layout.bean.productfac.workflow.Coverage_request;
import layout.bean.productfac.workflow.Coverage_task;
import layout.bean.productfac.workflow.Product_request;
import layout.bean.productfac.workflow.Product_task;
import service.FreezePolicyValue;
import service.MainInsuranceService;
import service.ProductCL_SaveData_Service;
import service.center.WorkFlowCoverage;
import service.center.WorkFlowProduct;
import service.ctrl.CoverageData;
import service.ctrl.ProductData;
import service.fnc.ConstantValues;
import service.fnc.PDFFnc;
import service.product.PorductProvision;
import service.product.ProductAccesData;
import service.product.ProductBasicinfo;
import service.product.ProductCalPremium;
import service.product.ProductDetract;
import service.product.ProductGrantRightsInsure;
import service.product.ProductSaleCompensation;
import service.product.ctrl.CoopControlData;
import service.product.ctrl.ParticipantControlData;
import service.product.ctrl.ProductControlData;
import service.product.ctrl.UnwRiderLimitControlData;
import service.tab.BasicInfoDataTab;
import utility.support.DateInfo;
import utility.underwrite.uaddr.Fprovince;
import service.fnc.PDFFnc;

/**
 * Servlet implementation class ProductCL_SaveData_Servlet
 */
@WebServlet("/ProductCL_SaveData_Servlet")
public class ProductCL_SaveData_Servlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	ProductAccesData pim;
	private String userId;
	String responseText = "";
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ProductCL_SaveData_Servlet() {
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
		//======================================================
				HttpSession session = request.getSession();
				String getuserID = session.getAttribute("userID").toString();
				if (!getuserID.equals("")) {
					userId =  getuserID ;
				}else {
					System.out.println("================== NO USER ====================");
				}
				
						response.setCharacterEncoding("UTF-8");
						//response.setContentType("application/json");
						PrintWriter out 	= response.getWriter();
						System.out.println("======= Save ProductCL ======"); 
						String groupName 			=  ConstantValues.GROUP_NAME;
						try {
							if (request.getParameter("method").equals("Tab_Basic_Information")) {
								responseText = save_Basic_Info(request, response);
							}else if (request.getParameter("method").equals("Tab_CalInsurance_Premium")) {
								responseText = save_Tab_Cal_insurance(request, response);
							}else if (request.getParameter("method").equals("Tab_Grant_Rights")) {
								responseText = save_Tab_Grant_Rights(request, response);
							}else if (request.getParameter("method").equals("Tab_Sales_Benefits")) {
								responseText = save_Tab_Sales_Benefits(request, response);
							}else if (request.getParameter("method").equals("Tab_Provision")) {
								responseText = save_Tab_Provision(request, response);
							}else if (request.getParameter("method").equals("detract")) {
								responseText = detract(request, response);
							}else if (request.getParameter("method").equals("check_Approved")) {
								responseText = check_Approved(request, response);
							}
							/*else if (request.getParameter("method").equals("Tab_CalInsurance_Premium")) {
								responseText = save_cal_insurance_premiums(request, response);
							}else if (request.getParameter("method").equals("Tab_table_policy_value")) {
								responseText = save_table_policy_value(request, response);
							}else if (request.getParameter("method").equals("Tab_Benefits_Coverage_Checker")) {
								responseText = save_Tab_Benefits_Coverage_Checker(request, response);
							}else if (request.getParameter("method").equals("Tab_Benefits")) {
								responseText = save_Tab_Benefits(request, response);
							}else if (request.getParameter("method").equals("Tab_Endorse")) {
								responseText = save_tab_Endorse(request, response);
							}else if (request.getParameter("method").equals("save_benefitsCoverage_disability")) {
								responseText = save_benefitsCoverage_disability(request, response);
							}*/
							out.print(responseText);
						} catch (Exception e) {
							// TODO Auto-generated catch block
							e.printStackTrace();
						}
	}
	public String save_Basic_Info(HttpServletRequest request, HttpServletResponse response) throws Exception 
	{
		ProductCL_SaveData_Service settoService = new ProductCL_SaveData_Service ();
		String prd_code    		= request.getParameter("prd_code");
		ConstantValues.PRD_CODE	= prd_code;
		String groupName    	= request.getParameter("groupName");
		ArrayList<Product> lstProduct = new ArrayList<>();
		ConstantValues.GROUP_NAME 	= groupName;
		
		String select_rule = "";
		if(request.getParameter("prd_design").equals("RATE_MAKING")) {
			select_rule = "RATE_MAKING";
		}else if(request.getParameter("prd_design").equals("OIC_RATE")) {
			select_rule = "OIC_RATE";
		}else if(request.getParameter("prd_design").equals("PACKAGE")) {
			select_rule = "AUTOMATIC";
		}else if(request.getParameter("prd_design").equals("OPTIONAL")) {
			select_rule = "OPTIONAL";
		}else if (request.getParameter("prd_design").equals("NONE")) {
			select_rule = "NONE";
		}
		
		ArrayList<Rider> lstRider = new ArrayList<>();
		ArrayList<Rate_layout> lstRateLayout = new ArrayList<>();
		String baseplan_str = request.getParameter("base_plan");
		JSONArray jsonArr_baseplan = new JSONArray(baseplan_str);
		ProductControlData getpcd 		= new ProductControlData();
		ArrayList<Product> arr_Product 	= getpcd.searchProduct(prd_code);
		 for (int i = 0; i < jsonArr_baseplan.length(); i++) {
			 JSONObject jsonObj_baseplan = jsonArr_baseplan.getJSONObject(i);
			 Rider rider = new Rider();
			 rider.setPrd_code(prd_code);
			 rider.setPrd_rider_code(jsonObj_baseplan.getString("prd_rider_code"));		
			 rider.setMain_rider_code(null);
			 rider.setFlag_type("B");
			 rider.setSelect_rule(select_rule);
			if (!jsonObj_baseplan.getString("fix_amt").equals("")) {
				rider.setFix_sa_amt(covertStringtoBigDecimal(jsonObj_baseplan.getString("fix_amt")));
			}else {
				rider.setFix_sa_amt(covertStringtoBigDecimal("0"));
			}
			
			 
			 rider.setUser_code(userId);
			 rider.setUpdate_time(getCurrentTimestamp());
			 lstRider.add(rider); 
			 
			 if(!String.valueOf(jsonObj_baseplan.get("pm_rate_fileId")).equals("")) {
				 Rate_layout rate_layoutPM = new Rate_layout();
				 rate_layoutPM.setPrd_code(prd_code);
				 rate_layoutPM.setPrd_rider_code(jsonObj_baseplan.getString("prd_rider_code"));		
				 rate_layoutPM.setFile_id(jsonObj_baseplan.getInt("pm_rate_fileId"));			
				 rate_layoutPM.setRate_cat_id(jsonObj_baseplan.getInt("pm_rate_cat_id")); 			
				 rate_layoutPM.setRate_layout_id(jsonObj_baseplan.getInt("pm_rate_layout_id")); 		
				 rate_layoutPM.setUser_code(userId);
				 rate_layoutPM.setUpdate_time(getCurrentTimestamp());
				 lstRateLayout.add(rate_layoutPM);
			 }
			
			 if(!String.valueOf(jsonObj_baseplan.get("nar_fileId")).equals("") ) {
				 Rate_layout rate_layoutNAR = new Rate_layout();
				 rate_layoutNAR.setPrd_code(prd_code);
				 rate_layoutNAR.setPrd_rider_code(jsonObj_baseplan.getString("prd_rider_code"));		
				 rate_layoutNAR.setFile_id(jsonObj_baseplan.getInt("nar_fileId"));		
				 rate_layoutNAR.setRate_cat_id(jsonObj_baseplan.getInt("nar_cat_id")); 			
				 rate_layoutNAR.setRate_layout_id(jsonObj_baseplan.getInt("nar_layout_id")); 		
				 rate_layoutNAR.setUser_code(userId);
				 rate_layoutNAR.setUpdate_time(getCurrentTimestamp());
				 lstRateLayout.add(rate_layoutNAR);
			 }
			 
			Product product = arr_Product.get(i);
			product.setCore_biz_prd_code(request.getParameter("core_biz_prd_code"));
			product.setPrd_code(prd_code);
			product.setCov_code(jsonObj_baseplan.getString("cov_code"));
			product.setCov_cat_id(jsonObj_baseplan.getInt("cov_cat_id"));
			product.setName_th(request.getParameter("name_th"));
			product.setName_en(request.getParameter("name_en"));
			product.setMarket_name_th(request.getParameter("market_name_th"));
			product.setMarket_name_en(request.getParameter("market_name_en"));
			product.setFyp_credit_card(request.getParameter("fyp_credit_card"));
			product.setRyp_credit_card(request.getParameter("ryp_credit_card"));
			product.setUnderwrite_opt(request.getParameter("reinsure_group"));
			product.setFirst_beneficiary(request.getParameter("first_beneficiary"));
			product.setMax_commission(covertStringtoBigDecimal(request.getParameter("max_commission").toString()));
			product.setReinsurance_opt("NONE");		//FIXME PUN
			
			if (!request.getParameter("distribution_channel").equals("NONE")) {
				product.setDist_chan_id(Integer.parseInt(request.getParameter("distribution_channel")));
			}else {
				product.setDist_chan_id(0);
			}
			
			if (!request.getParameter("sale_channel").equals("NONE")) {
				product.setSale_chan_id(Integer.parseInt(request.getParameter("sale_channel")));
			}else {
				product.setSale_chan_id(0);
			}
			product.setSale_partner_code(request.getParameter("sale_partner_code"));
			product.setIs_fin_acc(Boolean.parseBoolean(request.getParameter("is_fin_acc")));
			product.setIs_insurance(Boolean.parseBoolean(request.getParameter("is_insurance")));
			if (!request.getParameter("score_aml").equals("NONE")) {
				product.setScore_aml(request.getParameter("score_aml"));
			}
			product.setLoan_type(request.getParameter("loan_type"));
			product.setIs_prem_install(Boolean.parseBoolean(request.getParameter("is_prem_install")));
			product.setPrd_design(request.getParameter("prd_design"));
			product.setUser_code(userId);
			product.setUpdate_time(getCurrentTimestamp());
			product.setFlp_start_date("CERT_DATE");
			if (groupName.equals("POC (1740)") || groupName.equals("POC") || groupName.equals("POC_Test")) {
				product.setStatus("UPDATE");//Benz 16-08-2019
			}
			lstProduct.add(product);
		 }
		 
		 
		 String rider_str = request.getParameter("rider");
			JSONArray jsonArr_rider = new JSONArray(rider_str);
			 for (int i = 0; i < jsonArr_rider.length(); i++) {
				 JSONObject jsonObj_rider = jsonArr_rider.getJSONObject(i);
				if(jsonObj_rider.getString("cov_code").length() != 0) {
					 Rider rider = new Rider();
					 rider.setPrd_code(prd_code);
					 rider.setPrd_rider_code(jsonObj_rider.getString("prd_rider_code"));		
					 rider.setMain_rider_code(null);
					 rider.setFlag_type("R");
					 rider.setSelect_rule(select_rule);
						if (!jsonObj_rider.getString("fix_amt").equals("")) {
							 rider.setFix_sa_amt(covertStringtoBigDecimal(jsonObj_rider.getString("fix_amt")));
						}else {
							rider.setFix_sa_amt(covertStringtoBigDecimal("0"));
						}
					 rider.setUser_code(userId);
					 rider.setUpdate_time(getCurrentTimestamp());
					 lstRider.add(rider); 
				 }
				 
				 if(!String.valueOf(jsonObj_rider.get("pm_fileId")).equals("")) {
					 Rate_layout rate_layoutPM = new Rate_layout();
					 rate_layoutPM.setPrd_code(prd_code);
					 rate_layoutPM.setPrd_rider_code(jsonObj_rider.getString("prd_rider_code"));		
					 rate_layoutPM.setFile_id(jsonObj_rider.getInt("pm_fileId"));		
					 rate_layoutPM.setRate_cat_id(jsonObj_rider.getInt("pm_rate_cat_id")); 			
					 rate_layoutPM.setRate_layout_id(jsonObj_rider.getInt("pm_rate_layout_id")); 		
					 rate_layoutPM.setUser_code(userId);
					 rate_layoutPM.setUpdate_time(getCurrentTimestamp());
					 lstRateLayout.add(rate_layoutPM);
				 }
				 
				 if(jsonObj_rider.getString("cov_code").length() != 0 && !String.valueOf(jsonObj_rider.get("nar_fileId")).equals("")) {
					 Rate_layout rate_layoutNAR = new Rate_layout();
					 rate_layoutNAR.setPrd_code(prd_code);
					 rate_layoutNAR.setPrd_rider_code(jsonObj_rider.getString("prd_rider_code"));	
					 rate_layoutNAR.setFile_id(jsonObj_rider.getInt("nar_fileId"));		
					 rate_layoutNAR.setRate_cat_id(jsonObj_rider.getInt("nar_cat_id")); 			
					 rate_layoutNAR.setRate_layout_id(jsonObj_rider.getInt("nar_layout_id")); 		
					 rate_layoutNAR.setUser_code(userId);
					 rate_layoutNAR.setUpdate_time(getCurrentTimestamp());
					 lstRateLayout.add(rate_layoutNAR);
				 }
				 				 		
				if(jsonObj_rider.getString("cov_code").length() != 0) {
					ArrayList<Product> arr_Product_rider 	= getpcd.searchProduct(jsonObj_rider.getString("prd_rider_code"));
					Product product = arr_Product_rider.get(0);  //new Product();
					/*Product product = new Product();
					product.setCore_biz_prd_code(request.getParameter("core_biz_prd_code"));
					product.setPrd_code(jsonObj_rider.getString("prd_rider_code"));
					product.setCov_code(jsonObj_rider.getString("cov_code"));
					product.setCov_cat_id(Integer.parseInt(jsonObj_rider.getString("cov_cat_id")));
					product.setName_th(request.getParameter("name_th"));
					product.setName_en(request.getParameter("name_en"));
					product.setMarket_name_th(request.getParameter("market_name_th"));
					product.setMarket_name_en(request.getParameter("market_name_en"));
					product.setFyp_credit_card(request.getParameter("fyp_credit_card"));
					product.setRyp_credit_card(request.getParameter("ryp_credit_card"));
					product.setUnderwrite_opt(request.getParameter("reinsure_group"));
					product.setFirst_beneficiary(request.getParameter("first_beneficiary"));
					product.setMax_commission(covertStringtoBigDecimal(request.getParameter("max_commission").toString()));
					product.setReinsurance_opt("NONE");		//FIXME PUN
					
					if(!request.getParameter("distribution_channel").equals("NONE")) {
						product.setDist_chan_id(Integer.parseInt(request.getParameter("distribution_channel")));
					}else {
						product.setDist_chan_id(0);
					}
					if (!request.getParameter("sale_channel").equals("NONE")) {
						product.setSale_chan_id(Integer.parseInt(request.getParameter("sale_channel")));
					}else {
						product.setSale_chan_id(0);
					}
					product.setSale_partner_code(request.getParameter("sale_partner_code"));
					product.setIs_fin_acc(Boolean.parseBoolean(request.getParameter("is_fin_acc")));
					product.setIs_insurance(Boolean.parseBoolean(request.getParameter("is_insurance")));
					if (!request.getParameter("score_aml").equals("NONE")) {
						product.setScore_aml(request.getParameter("score_aml"));
					}
					product.setLoan_type(request.getParameter("loan_type"));
					product.setIs_prem_install(Boolean.parseBoolean(request.getParameter("is_prem_install")));
					product.setPrd_design(request.getParameter("prd_design"));
					product.setUser_code(userId);
					product.setUpdate_time(getCurrentTimestamp());
					product.setFlp_start_date("CERT_DATE");
					product.setStatus("UPDATE");*/
					lstProduct.add(product);
				}
				
			 }
	    
		settoService.setProductObj(lstProduct, lstRider);
		settoService.setRateLayout(lstRateLayout);
			 
		/*พิกัดอายุ*/
		String endorse_str = request.getParameter("define_endorse");	
		ParticipantControlData pcd = new ParticipantControlData();
		ArrayList<Participant> lstResultParticipant = new ArrayList<>();
		ArrayList<Participant> lstParticipant = pcd.searchParticipant(prd_code);
		ArrayList<Participant> set_lstParticipant = new ArrayList<>();
		
		ArrayList<Rider> searchProductRider = getpcd.searchProductRider(prd_code);
		ArrayList<Rider> listProductRider = new ArrayList<>();

		JSONArray jsonArr_endorse = new JSONArray(endorse_str);
		if ( lstParticipant.size() > 0) {
			for (int i=0; i < jsonArr_endorse.length() ; i++) {
				JSONObject jsonObj_endorse 	= jsonArr_endorse.getJSONObject(i);
				Participant participant 	= new Participant();
					participant.setPrd_code(request.getParameter("prd_code"));
					participant.setPrd_rider_code(jsonObj_endorse.getString("prd_rider_code"));
					participant.setMin_issue_age(jsonObj_endorse.getInt("min_issue_age"));
					participant.setMin_issue_age_unit(jsonObj_endorse.getString("min_issue_age_unit"));
					participant.setMax_issue_age(jsonObj_endorse.getInt("max_issue_age"));
					participant.setMax_issue_age_unit(jsonObj_endorse.getString("max_issue_age_unit"));
					participant.setMax_insure_age(jsonObj_endorse.getInt("max_insure_age"));
					participant.setMax_insure_age_unit(jsonObj_endorse.getString("max_insure_age_unit"));
					participant.setGender(request.getParameter("gender"));
					if (jsonObj_endorse.get("flag_endorse").toString().equals("true")) {
						participant.setPartic_type("NONE");
					}else {
						participant.setPartic_type("PRIMARY");
					}
					participant.setAge_calc_meth("NONE");
					participant.setPrem_rule("EACH");
					participant.setUser_code(userId);
					participant.setUpdate_time(getCurrentTimestamp());
					set_lstParticipant.add(participant);
					
					////Benz setProductRider Endose ////05-11-2019
					if (jsonObj_endorse.get("flag_endorse").toString().equals("true")) {
								Rider rider = new Rider();
								rider.setPrd_code(request.getParameter("prd_code"));
								rider.setPrd_rider_code(jsonObj_endorse.getString("prd_rider_code"));
								rider.setMain_rider_code(jsonObj_endorse.getString("cov_code"));
								rider.setFlag_type("E");
								rider.setSelect_rule("NONE");
								rider.setUser_code(userId);
								rider.setUpdate_time(getCurrentTimestamp());
								lstRider.add(rider);
					}
			}
			
		}else {
			for (int i=0; i < jsonArr_endorse.length() ; i++) {
				JSONObject jsonObj_endorse 		= jsonArr_endorse.getJSONObject(i);
				Participant participant 		= new Participant();
				participant.setAge_calc_meth("NONE");
				participant.setPrd_code(request.getParameter("prd_code"));
				participant.setPrd_rider_code(jsonObj_endorse.getString("prd_rider_code"));
				participant.setMin_issue_age(jsonObj_endorse.getInt("min_issue_age"));
				participant.setMin_issue_age_unit(jsonObj_endorse.getString("min_issue_age_unit"));
				participant.setMax_issue_age(jsonObj_endorse.getInt("max_issue_age"));
				participant.setMax_issue_age_unit(jsonObj_endorse.getString("max_issue_age_unit"));
				participant.setMax_insure_age(jsonObj_endorse.getInt("max_insure_age"));
				participant.setMax_insure_age_unit(jsonObj_endorse.getString("max_insure_age_unit"));
				participant.setGender(request.getParameter("gender"));
				if (jsonObj_endorse.get("flag_endorse").toString().equals("true")) {
					participant.setPartic_type("NONE");
				}else {
					participant.setPartic_type("PRIMARY");
				}
				participant.setPrem_rule("EACH");
				participant.setUser_code(userId);
				participant.setUpdate_time(getCurrentTimestamp());
				set_lstParticipant.add(participant);
				
				////Benz setProductRider Endose ////05-11-2019
				if (jsonObj_endorse.get("flag_endorse").toString().equals("true")) {
					Rider rider = new Rider();
					rider.setPrd_code(request.getParameter("prd_code"));
					rider.setPrd_rider_code(jsonObj_endorse.getString("prd_rider_code"));
					rider.setMain_rider_code(jsonObj_endorse.getString("cov_code"));
					rider.setFlag_type("E");
					rider.setSelect_rule("NONE");
					rider.setUser_code(userId);
					rider.setUpdate_time(getCurrentTimestamp());
					lstRider.add(rider);
				}
			}
		}
		settoService.setParticipant(set_lstParticipant);
		///Benz save ProductRider Endose 05-11-2019
		getpcd.insertProductRider(lstRider);
		
		ArrayList<Prem_install> lstPrem_install = new ArrayList<>();
		if(request.getParameter("payment_period") != "") {
			String prem_install_str = request.getParameter("payment_period");
			JSONArray jsonArr_prem_install = new JSONArray(prem_install_str);
			for (int i=0; i < jsonArr_prem_install.length() ; i++) {
				JSONObject jsonObj_prem_install = jsonArr_prem_install.getJSONObject(i);
				Prem_install prem_install = new Prem_install();
				prem_install.setPrd_code(prd_code);
				prem_install.setPeriod(Integer.parseInt(jsonObj_prem_install.getString("seq_count")));
				prem_install.setInstall_rate(covertStringtoBigDecimal(jsonObj_prem_install.getString("rate_multiply")));
				prem_install.setUser_code(userId);
				prem_install.setUpdate_time(getCurrentTimestamp());
				lstPrem_install.add(prem_install);
			}
		}
		settoService.setPremInstall(prd_code,lstPrem_install);
		
		
		String coop_str = request.getParameter("COOP");
		CoopControlData controlData = new CoopControlData();
		ArrayList<Coop> searchCoop = controlData.searchCoop(prd_code);
		JSONArray jsonArr_coop = new JSONArray(coop_str);
		if(jsonArr_coop.length() != 0) {
			ArrayList<Coop> lstCoop = new ArrayList<>();
			ArrayList<Coop_commission> lstCoop_commission = new ArrayList<>();
			ArrayList<Coop_sum> lstCoopSum = new ArrayList<>();
			ArrayList<Coop_prem_discount> lstCoopPremDiscount = new ArrayList<>();
			for(int i=0 ; i<jsonArr_coop.length() ; i++) {
				JSONObject jsonObj_coop = jsonArr_coop.getJSONObject(i);
				String tb1_coop = String.valueOf(jsonObj_coop.get("tb1"));
				JSONArray jsonArr_tb1_coop = new JSONArray(tb1_coop);
				
				if(jsonArr_tb1_coop.length() > 0) {
					for(int ii=0 ; ii<jsonArr_tb1_coop.length() ; ii++) {
						JSONObject jsonObj_tb1_coop = jsonArr_tb1_coop.getJSONObject(ii);
						if(!jsonObj_tb1_coop.getString("coop_code").equals("")) {
							Coop coop =  new Coop();
							if ( ii < searchCoop.size()) {
								if( searchCoop.get(ii).getCoop_code().equals(jsonObj_tb1_coop.getString("coop_code"))) {
									coop = searchCoop.get(ii);
								}
							}
							coop.setPrd_code(prd_code);
							coop.setSeq(jsonObj_tb1_coop.getInt("seq"));
							coop.setCoop_code(jsonObj_tb1_coop.getString("coop_code"));
							coop.setEff_date(getData(jsonObj_tb1_coop.getString("eff_date")));
							coop.setExp_date(getData(jsonObj_tb1_coop.getString("exp_date")));
							coop.setUser_code(userId);
							coop.setUpdate_time(getCurrentTimestamp());
							lstCoop.add(coop);
						}
						Coop_commission coop_commission = new Coop_commission();
						coop_commission.setPrd_code(prd_code);
						coop_commission.setSeq(jsonObj_tb1_coop.getInt("seq_com"));
						coop_commission.setMin_age(Integer.parseInt(jsonObj_tb1_coop.getString("min_age")));
						coop_commission.setMax_age(Integer.parseInt(jsonObj_tb1_coop.getString("max_age")));
						coop_commission.setCommission_rate(covertStringtoBigDecimal(jsonObj_tb1_coop.getString("commission_rate")));	//FIXME PUN
						coop_commission.setUser_code(userId);
						coop_commission.setUpdate_time(getCurrentTimestamp());
						lstCoop_commission.add(coop_commission);
					}
				}
				String tb2_coop = String.valueOf(jsonObj_coop.get("tb2"));
				JSONArray jsonArr_tb2_coop = new JSONArray(tb2_coop);
				if(jsonArr_tb2_coop.length() > 0) {
					for(int ii=0 ; ii<jsonArr_tb2_coop.length() ; ii++) {
						JSONObject jsonObj_tb2_coop = jsonArr_tb2_coop.getJSONObject(ii);
						Coop_sum coop_sum = new Coop_sum();
						coop_sum.setPrd_code(prd_code);
						coop_sum.setSeq(jsonObj_tb2_coop.getInt("seq"));
						coop_sum.setMin_age(jsonObj_tb2_coop.getInt("min_age"));
						coop_sum.setMax_age(jsonObj_tb2_coop.getInt("max_age"));
						coop_sum.setMin_sa(covertStringtoBigDecimal(jsonObj_tb2_coop.getString("min_sa")));
						coop_sum.setUser_code(userId);
						coop_sum.setUpdate_time(getCurrentTimestamp());
						lstCoopSum.add(coop_sum);
					}
				}
				String tb3_coop = String.valueOf(jsonObj_coop.get("tb3"));
				JSONArray jsonArr_tb3_coop = new JSONArray(tb3_coop);
				if(jsonArr_tb3_coop.length() > 0) {
					for(int ii=0 ; ii<jsonArr_tb3_coop.length() ; ii++) {
						JSONObject jsonObj_tb3_coop = jsonArr_tb3_coop.getJSONObject(ii);
						Coop_prem_discount coop_prem_discount = new Coop_prem_discount();
						coop_prem_discount.setPrd_code(prd_code);
						coop_prem_discount.setSeq(jsonObj_tb3_coop.getInt("seq"));
						coop_prem_discount.setMin_age(jsonObj_tb3_coop.getInt("min_age"));
						coop_prem_discount.setMax_age(jsonObj_tb3_coop.getInt("max_age"));
						coop_prem_discount.setPrem_disc_rate(covertStringtoBigDecimal(jsonObj_tb3_coop.getString("prem_disc_rate")));
						coop_prem_discount.setUser_code(userId);
						coop_prem_discount.setUpdate_time(getCurrentTimestamp());
						lstCoopPremDiscount.add(coop_prem_discount);
					}
				}
			}
			if(lstCoop.size() > 0) {
				settoService.setCoop(lstCoop);
			}else {
				settoService.setCoop(new ArrayList<Coop>());
			}
			if(lstCoop_commission.size() > 0) {
				settoService.setCoopCommission(lstCoop_commission);
			}
			if(lstCoopSum.size() > 0) {
				settoService.setCoopSum(lstCoopSum);
			}
			if(lstCoopPremDiscount.size() > 0) {
				settoService.setCoopPremDiscount(lstCoopPremDiscount);
			}			
			
		}
	////Benz 11-09-2019 New set Status
				WorkFlowProduct wfd = new WorkFlowProduct();
				ArrayList<Product_task> arr_getProduct_task = wfd.searchProductTask();
				Product_task  setprotask = new Product_task();
				if (groupName.equals("POC (1740)") || 
						groupName.equals("POC_Test")) 
				{
					for (int i = 0; i < arr_getProduct_task.size(); i++) {
						if ((arr_getProduct_task.get(i).getDepartment().equals("POC (1740)") || 
								arr_getProduct_task.get(i).getDepartment().equals("POC_Test")) && 
								(!arr_getProduct_task.get(i).getApprove_status().equals("APPROVE"))) {
							setprotask =   arr_getProduct_task.get(i);
							setprotask.setPrd_code(prd_code);
							setprotask.setApprove_status("UPDATE");
							setprotask.setUser_code(userId);
							setprotask.setUpdate_time(PDFFnc.currentTimeStamp());
							wfd.doProductTask(setprotask);
						}
					}
				}else {
					for (int i = 0; i < arr_getProduct_task.size(); i++) {
						if ((arr_getProduct_task.get(i).getDepartment().equals("PD") || 
								arr_getProduct_task.get(i).getDepartment().equals("PD_Test") ||
								arr_getProduct_task.get(i).getDepartment().equals("PD2")) && 
								(!arr_getProduct_task.get(i).getApprove_status().equals("APPROVE"))) {
							setprotask =   arr_getProduct_task.get(i);
							setprotask.setPrd_code(prd_code);
							setprotask.setApprove_status("UPDATE");
							setprotask.setUser_code(userId);
							setprotask.setUpdate_time(PDFFnc.currentTimeStamp());
							wfd.doProductTask(setprotask);
						}
					}
				}
		return "success";	
	}
	
	public String save_Tab_Cal_insurance(HttpServletRequest request, HttpServletResponse response) throws Exception 
	{
		try {
			ProductCalPremium pcp 			= new ProductCalPremium();
			String prd_code    				= request.getParameter("prd_code");
			ConstantValues.PRD_CODE			= prd_code;
			MainInsuranceService mis 		= new MainInsuranceService();
			ArrayList<Product> caseAll_return;
			caseAll_return 					= mis.GetCaseProduct();
			String lv3_code					= "";
			FreezePolicyValue fpv 			= new FreezePolicyValue();
			String groupName 			= request.getParameter("groupName");
			ConstantValues.GROUP_NAME 	= groupName;
			//lv3_code = fpv.getProduct();
			//System.out.println("=======================/"+lv3_code);
			//pim = new ProductAccesData(caseAll_return.get(Integer.parseInt(lv3_code)));
			ArrayList<Product> returnPro = new ProductControlData().searchProduct(prd_code);
			String age_band    				= request.getParameter("age_band");
			String chk_balloon    			= request.getParameter("chk_balloon");
			String txt_ballon				= "";
			boolean bl_chk_balloon 			= Boolean.parseBoolean(chk_balloon);
			ProductBasicinfo pbf = new ProductBasicinfo ();

			for (int i = 0; i < returnPro.size(); i++) {
				Product product = returnPro.get(i);
				if (bl_chk_balloon == true) {
					txt_ballon    			= request.getParameter("txt_ballon");
					product.setBalloon_prd_code(txt_ballon);
				}else {
					product.setBalloon_prd_code("");
				}
				if (!age_band.equals("undefined")) {
					product.setAge_band(age_band);
				}
				product.setUser_code(userId);
				product.setUpdate_time(PDFFnc.currentTimeStamp());
				//
				pbf.doProduct(product, null);
			}
			
			
			////////////////////////////////////////////////////////////////////////////////
			String coverage_limit 	= request.getParameter("coverage_limit");
			ArrayList<Limit_cond> limit_cond_arr 				= new ArrayList<>();
			ArrayList<Limit_cond_serie> limit_cond_serie_arr 	= new ArrayList<>();
			ArrayList<Limit_cond_amt> limit_cond_amt_arr 		= new ArrayList<>();
			JSONArray jsonArr_coverage_limit					= new JSONArray(coverage_limit);
			Limit_cond_amt		limit_cond_amt		= new Limit_cond_amt();
	        for (int i = 0; i < jsonArr_coverage_limit.length(); i++)
	        {		
	        	Limit_cond_serie	limit_cond_serie 	= new Limit_cond_serie();
	        	JSONObject jsonObj_coverage_limit = jsonArr_coverage_limit.getJSONObject(i);
	        	//set limit_cond_serie
	        	if (jsonObj_coverage_limit.getString("seq").equals("1")) {
	        		Limit_cond 	limit_cond 	= new Limit_cond();
	        		limit_cond.setPrd_code(prd_code);
	        		limit_cond.setPrd_rider_code((String) jsonObj_coverage_limit.getString("prd_rider_code"));
	        		limit_cond.setCond_seq(Integer.parseInt(jsonObj_coverage_limit.getString("seq")));
	        		limit_cond.setEff_date(PDFFnc.getSqlDate(DateInfo.sysDate()));
	        		limit_cond.setExp_date(PDFFnc.getSqlDate(DateInfo.sysDate()));
	        		limit_cond.setUser_code(userId);
	        		limit_cond.setUpdate_time(PDFFnc.currentTimeStamp());
	        		limit_cond_arr.add(limit_cond);
	        		//set limit_cond_serie
	        		
	        		if (jsonObj_coverage_limit.getInt("serie_no") == 1) {
	        			limit_cond_amt		= new Limit_cond_amt();
	        			limit_cond_serie.setPrd_code(prd_code);
	        			limit_cond_serie.setPrd_rider_code((String) jsonObj_coverage_limit.getString("prd_rider_code"));
	        			limit_cond_serie.setCond_seq(jsonObj_coverage_limit.getInt("seq"));
	        			limit_cond_serie.setSerie_no(jsonObj_coverage_limit.getInt("serie_no"));
	        			limit_cond_serie.setMin_age(0);
	        			limit_cond_serie.setMax_age(99);
	        			if  (!jsonObj_coverage_limit.get("capital_to").equals("")) {
	            			limit_cond_serie.setMin_base_amt(covertStringtoBigDecimal((String) jsonObj_coverage_limit.get("capital_to")));
	        			}else {
	            			limit_cond_serie.setMin_base_amt(covertStringtoBigDecimal("0"));
	        			}
	        			if  (!jsonObj_coverage_limit.get("capital_from").equals("")) {
	            			limit_cond_serie.setMax_base_amt(covertStringtoBigDecimal((String) jsonObj_coverage_limit.get("capital_from")));
	        			}else {
	            			limit_cond_serie.setMax_base_amt(covertStringtoBigDecimal("0"));
	        			}
	        			limit_cond_serie.setSa_fix_compare("NONE");
	        			limit_cond_serie.setSa_min_compare("NONE");
	        			limit_cond_serie.setSa_max_compare("NONE");
	        			limit_cond_serie.setPrem_fix_compare("NONE");
	        			limit_cond_serie.setPrem_min_compare("NONE");
	        			limit_cond_serie.setPrem_max_compare("NONE");
	        			limit_cond_serie.setUser_code(userId);
	        			limit_cond_serie.setUpdate_time(PDFFnc.currentTimeStamp());
	        			limit_cond_serie_arr.add(limit_cond_serie);
		        			// limit_cond_amt
	        			int row = 1;
		        			for (int j = 0; j < 2; j++) {
		        				row = row + j ;
//		        				0 = limit_seq = 1 && 1 = limit_seq = 2
		        				if (j == 0) {
		        					limit_cond_amt.setPrd_code(prd_code);
			        				limit_cond_amt.setPrd_rider_code((String) jsonObj_coverage_limit.getString("prd_rider_code"));
			        				limit_cond_amt.setCond_seq(1);
			        				limit_cond_amt.setSerie_no(jsonObj_coverage_limit.getInt("serie_no"));
			        				limit_cond_amt.setLimit_seq(row);
			        				limit_cond_amt.setLimit_amt_type("SA"); //CL=SA 
			        				
			        				if  (!jsonObj_coverage_limit.get("cash_insurance_no").equals("")) {
				        				limit_cond_amt.setLimit_amt(covertStringtoBigDecimal((String) jsonObj_coverage_limit.getString("cash_insurance_no")));
			            			}else {
			            				limit_cond_amt.setLimit_amt(covertStringtoBigDecimal("0"));
			            			}
			        				
			        				limit_cond_amt.setLimit_unit((String) jsonObj_coverage_limit.getString("cash_insurance_unit"));
			        				limit_cond_amt.setLimit_factor((String) jsonObj_coverage_limit.getString("cash_insurance_factor"));
			        				limit_cond_amt.setUser_code(userId);
			        				limit_cond_amt.setUpdate_time(PDFFnc.currentTimeStamp());
		        				}else if (j == 1){
		        					limit_cond_amt		= new Limit_cond_amt();
		        					limit_cond_amt.setPrd_code(prd_code);
			        				limit_cond_amt.setPrd_rider_code((String) jsonObj_coverage_limit.getString("prd_rider_code"));
			        				limit_cond_amt.setCond_seq(1);
			        				limit_cond_amt.setSerie_no(jsonObj_coverage_limit.getInt("serie_no"));
			        				limit_cond_amt.setLimit_seq(row);
			        				limit_cond_amt.setLimit_amt_type("SA"); //CL=SA 
			        				
			        				if  (!jsonObj_coverage_limit.get("cash_low_val").equals("")) {
				        				limit_cond_amt.setLimit_amt(covertStringtoBigDecimal((String) jsonObj_coverage_limit.getString("cash_low_val")));
			            			}else {
			            				limit_cond_amt.setLimit_amt(covertStringtoBigDecimal("0"));
			            			}
			        				
			        				limit_cond_amt.setLimit_unit("CURRENCY");//
			        				limit_cond_amt.setLimit_factor((String) jsonObj_coverage_limit.getString("cash_low_unit"));
			        				limit_cond_amt.setUser_code(userId);
			        				limit_cond_amt.setUpdate_time(PDFFnc.currentTimeStamp());
		        				}
		        				limit_cond_amt_arr.add(limit_cond_amt);
							}
	        		}else {
	        			limit_cond_amt		= new Limit_cond_amt();
	        			limit_cond_serie.setPrd_code(prd_code);
	        			limit_cond_serie.setPrd_rider_code((String) jsonObj_coverage_limit.getString("prd_rider_code"));
	        			limit_cond_serie.setCond_seq(jsonObj_coverage_limit.getInt("seq"));
	        			limit_cond_serie.setSerie_no(jsonObj_coverage_limit.getInt("serie_no"));
	        			limit_cond_serie.setMin_age(0);
	        			limit_cond_serie.setMax_age(99);
	        			limit_cond_serie.setMin_base_amt(covertStringtoBigDecimal((String) jsonObj_coverage_limit.get("capital_to")));
	        			limit_cond_serie.setMax_base_amt(covertStringtoBigDecimal((String) jsonObj_coverage_limit.get("capital_from")));
	        			limit_cond_serie.setSa_fix_compare("NONE");
	        			limit_cond_serie.setSa_min_compare("NONE");
	        			limit_cond_serie.setSa_max_compare("NONE");
	        			limit_cond_serie.setPrem_fix_compare("NONE");
	        			limit_cond_serie.setPrem_min_compare("NONE");
	        			limit_cond_serie.setPrem_max_compare("NONE");
	        			limit_cond_serie.setUser_code(userId);
	        			limit_cond_serie.setUpdate_time(PDFFnc.currentTimeStamp());
	        			limit_cond_serie_arr.add(limit_cond_serie);
	        			// limit_cond_amt
	        			int row = 1;
	        			for (int j = 0; j < 2; j++) {
	        				row = row + j ;
//	        				0 = limit_seq = 1 && 1 = limit_seq = 2
	        				if (j == 0) {
	        					limit_cond_amt.setPrd_code(prd_code);
		        				limit_cond_amt.setPrd_rider_code((String) jsonObj_coverage_limit.getString("prd_rider_code"));
		        				limit_cond_amt.setCond_seq(1);
		        				limit_cond_amt.setSerie_no(jsonObj_coverage_limit.getInt("serie_no"));
		        				limit_cond_amt.setLimit_seq(row);
		        				limit_cond_amt.setLimit_amt_type("SA"); //CL=SA 
		        				limit_cond_amt.setLimit_amt(covertStringtoBigDecimal((String) jsonObj_coverage_limit.getString("cash_insurance_no")));
		        				limit_cond_amt.setLimit_unit((String) jsonObj_coverage_limit.getString("cash_insurance_unit"));
		        				limit_cond_amt.setLimit_factor((String) jsonObj_coverage_limit.getString("cash_insurance_factor"));
		        				limit_cond_amt.setUser_code(userId);
		        				limit_cond_amt.setUpdate_time(PDFFnc.currentTimeStamp());
	        				}else if (j == 1){
	        					limit_cond_amt		= new Limit_cond_amt();
	        					limit_cond_amt.setPrd_code(prd_code);
		        				limit_cond_amt.setPrd_rider_code((String) jsonObj_coverage_limit.getString("prd_rider_code"));
		        				limit_cond_amt.setCond_seq(1);
		        				limit_cond_amt.setSerie_no(jsonObj_coverage_limit.getInt("serie_no"));
		        				limit_cond_amt.setLimit_seq(row);
		        				limit_cond_amt.setLimit_amt_type("SA"); //CL=SA 
		        				limit_cond_amt.setLimit_amt(covertStringtoBigDecimal((String) jsonObj_coverage_limit.getString("cash_low_val")));
		        				limit_cond_amt.setLimit_unit("CURRENCY");//
		        				limit_cond_amt.setLimit_factor((String) jsonObj_coverage_limit.getString("cash_low_unit"));
		        				limit_cond_amt.setUser_code(userId);
		        				limit_cond_amt.setUpdate_time(PDFFnc.currentTimeStamp());
	        				}
	        				limit_cond_amt_arr.add(limit_cond_amt);
						}
	        		}
	        	}else {
	        		//set limit_cond_serie
	        		if (jsonObj_coverage_limit.getInt("serie_no") == 1) {
	        			limit_cond_amt		= new Limit_cond_amt();
	        			limit_cond_serie.setPrd_code(prd_code);
	        			limit_cond_serie.setPrd_rider_code((String) jsonObj_coverage_limit.getString("prd_rider_code"));
	        			limit_cond_serie.setCond_seq(jsonObj_coverage_limit.getInt("seq"));
	        			limit_cond_serie.setSerie_no(jsonObj_coverage_limit.getInt("serie_no"));
	        			limit_cond_serie.setMin_age(0);
	        			limit_cond_serie.setMax_age(99);
	        			limit_cond_serie.setMin_base_amt(covertStringtoBigDecimal((String) jsonObj_coverage_limit.get("capital_to")));
	        			limit_cond_serie.setMax_base_amt(covertStringtoBigDecimal((String) jsonObj_coverage_limit.get("capital_from")));
	        			limit_cond_serie.setSa_fix_compare("NONE");
	        			limit_cond_serie.setSa_min_compare("NONE");
	        			limit_cond_serie.setSa_max_compare("NONE");
	        			limit_cond_serie.setPrem_fix_compare("NONE");
	        			limit_cond_serie.setPrem_min_compare("NONE");
	        			limit_cond_serie.setPrem_max_compare("NONE");
	        			limit_cond_serie.setUser_code(userId);
	        			limit_cond_serie.setUpdate_time(PDFFnc.currentTimeStamp());
	        			limit_cond_serie_arr.add(limit_cond_serie);
	        			// limit_cond_amt
	        			int row = 1;
	        			for (int j = 0; j < 2; j++) {
	        				row = row + j ;
//	        				0 = limit_seq = 1 && 1 = limit_seq = 2
	        				if (j == 0) {
	        					limit_cond_amt.setPrd_code(prd_code);
		        				limit_cond_amt.setPrd_rider_code((String) jsonObj_coverage_limit.getString("prd_rider_code"));
		        				limit_cond_amt.setCond_seq(1);
		        				limit_cond_amt.setSerie_no(jsonObj_coverage_limit.getInt("serie_no"));
		        				limit_cond_amt.setLimit_seq(row);
		        				limit_cond_amt.setLimit_amt_type("SA"); //CL=SA 
		        				limit_cond_amt.setLimit_amt(covertStringtoBigDecimal((String) jsonObj_coverage_limit.getString("cash_insurance_no")));
		        				limit_cond_amt.setLimit_unit((String) jsonObj_coverage_limit.getString("cash_insurance_unit"));
		        				limit_cond_amt.setLimit_factor((String) jsonObj_coverage_limit.getString("cash_insurance_factor"));
		        				limit_cond_amt.setUser_code(userId);
		        				limit_cond_amt.setUpdate_time(PDFFnc.currentTimeStamp());
	        				}else if (j == 1){
	        					limit_cond_amt		= new Limit_cond_amt();
	        					limit_cond_amt.setPrd_code(prd_code);
		        				limit_cond_amt.setPrd_rider_code((String) jsonObj_coverage_limit.getString("prd_rider_code"));
		        				limit_cond_amt.setCond_seq(1);
		        				limit_cond_amt.setSerie_no(jsonObj_coverage_limit.getInt("serie_no"));
		        				limit_cond_amt.setLimit_seq(row);
		        				limit_cond_amt.setLimit_amt_type("SA"); //CL=SA 
		        				limit_cond_amt.setLimit_amt(covertStringtoBigDecimal((String) jsonObj_coverage_limit.getString("cash_low_val")));
		        				limit_cond_amt.setLimit_unit("CURRENCY");//
		        				limit_cond_amt.setLimit_factor((String) jsonObj_coverage_limit.getString("cash_low_unit"));
		        				limit_cond_amt.setUser_code(userId);
		        				limit_cond_amt.setUpdate_time(PDFFnc.currentTimeStamp());
	        				}
	        				limit_cond_amt_arr.add(limit_cond_amt);
						}
	        		}else {
	        			limit_cond_amt		= new Limit_cond_amt();
	        			limit_cond_serie.setPrd_code(prd_code);
	        			limit_cond_serie.setPrd_rider_code((String) jsonObj_coverage_limit.getString("prd_rider_code"));
	        			limit_cond_serie.setCond_seq(1);
	        			limit_cond_serie.setSerie_no(jsonObj_coverage_limit.getInt("serie_no"));
	        			limit_cond_serie.setMin_age(0);
	        			limit_cond_serie.setMax_age(99);
	        			limit_cond_serie.setMin_base_amt(covertStringtoBigDecimal((String) jsonObj_coverage_limit.get("capital_to")));
	        			limit_cond_serie.setMax_base_amt(covertStringtoBigDecimal((String) jsonObj_coverage_limit.get("capital_from")));
	        			limit_cond_serie.setSa_fix_compare("NONE");
	        			limit_cond_serie.setSa_min_compare("NONE");
	        			limit_cond_serie.setSa_max_compare("NONE");
	        			limit_cond_serie.setPrem_fix_compare("NONE");
	        			limit_cond_serie.setPrem_min_compare("NONE");
	        			limit_cond_serie.setPrem_max_compare("NONE");
	        			limit_cond_serie.setUser_code(userId);
	        			limit_cond_serie.setUpdate_time(PDFFnc.currentTimeStamp());
	        			limit_cond_serie_arr.add(limit_cond_serie);
	        			// limit_cond_amt
	        			int row = 1;
	        			for (int j = 0; j < 2; j++) {
	        				row = row + j ;
//	        				0 = limit_seq = 1 && 1 = limit_seq = 2
	        				if (j == 0) {
	        					limit_cond_amt.setPrd_code(prd_code);
		        				limit_cond_amt.setPrd_rider_code((String) jsonObj_coverage_limit.getString("prd_rider_code"));
		        				limit_cond_amt.setCond_seq(1);
		        				limit_cond_amt.setSerie_no(jsonObj_coverage_limit.getInt("serie_no"));
		        				limit_cond_amt.setLimit_seq(row);
		        				limit_cond_amt.setLimit_amt_type("SA"); //CL=SA 
		        				limit_cond_amt.setLimit_amt(covertStringtoBigDecimal((String) jsonObj_coverage_limit.getString("cash_insurance_no")));
		        				limit_cond_amt.setLimit_unit((String) jsonObj_coverage_limit.getString("cash_insurance_unit"));
		        				limit_cond_amt.setLimit_factor((String) jsonObj_coverage_limit.getString("cash_insurance_factor"));
		        				limit_cond_amt.setUser_code(userId);
		        				limit_cond_amt.setUpdate_time(PDFFnc.currentTimeStamp());
	        				}else if (j == 1){
	        					limit_cond_amt		= new Limit_cond_amt();
	        					limit_cond_amt.setPrd_code(prd_code);
		        				limit_cond_amt.setPrd_rider_code((String) jsonObj_coverage_limit.getString("prd_rider_code"));
		        				limit_cond_amt.setCond_seq(1);
		        				limit_cond_amt.setSerie_no(jsonObj_coverage_limit.getInt("serie_no"));
		        				limit_cond_amt.setLimit_seq(row);
		        				limit_cond_amt.setLimit_amt_type("SA"); //CL=SA 
		        				limit_cond_amt.setLimit_amt(covertStringtoBigDecimal((String) jsonObj_coverage_limit.getString("cash_low_val")));
		        				limit_cond_amt.setLimit_unit("CURRENCY");//
		        				limit_cond_amt.setLimit_factor((String) jsonObj_coverage_limit.getString("cash_low_unit"));
		        				limit_cond_amt.setUser_code(userId);
		        				limit_cond_amt.setUpdate_time(PDFFnc.currentTimeStamp());
	        				}
	        				limit_cond_amt_arr.add(limit_cond_amt);
						}
	        		}
	        	}
	        }
	       /*for (int i = 0; i < limit_cond_serie_arr.size(); i++) {
			System.out.println("==============/"+limit_cond_serie_arr.get(i).getMin_age());
	       }*/
	       
	       pcp.doLimitCond(prd_code,limit_cond_arr);
	       pcp.doLimitCondSerie(limit_cond_serie_arr);
	       pcp.doLimitCondAmt(limit_cond_amt_arr);
////////////////////////////////////////////////////////////////////////////	       
			String cal_insurance 	= request.getParameter("cal_insurance");
		
			//cal_insurance = "[{\"cov_code\":\"GL_CL_MRT_B_0193\",\"type\":\"MRT\",\"formula\":\"6\",\"prd_rider_code\":\"GL_CL_MRT_P_0002\"},{\"cov_code\":\"RC_AC_ADD_R_0001\",\"type\":\"ADD\",\"formula\":\"7\",\"prd_rider_code\":\"RC_AC_ADD_PR_0001\"},{\"cov_code\":\"RC_TD_TPD_R_0002\",\"type\":\"TPD\",\"formula\":\"8\",\"prd_rider_code\":\"RC_TD_TPD_PR_0002\"}]";
			JSONArray jsonArr_cal_insurance					= new JSONArray(cal_insurance);
			//  Formula_cat_id = 1	
			String cal_SAP 	= request.getParameter("cal_SAP");
			if (!cal_SAP.equals("NONE")) {
				ArrayList<Formula> formulaData_arr = new ArrayList<>();
				Formula formula = new Formula(); 
				formula.setPrd_code(prd_code);
	    	   	formula.setPrd_rider_code(prd_code);
	    	   	formula.setFormula_cat_id(1);//Product///CL  Formula_cat_id = 1
				formula.setFormula_id(Integer.valueOf(cal_SAP));
				formula.setUser_code(userId);
				formula.setUpdate_time(PDFFnc.currentTimeStamp());
				formulaData_arr.add(formula);
				
				 pcp.doFrmula("1",formulaData_arr);
			}else {
				pcp.doFrmula("1",new ArrayList<Formula>());
			}
			//  Formula_cat_id = 2	
			String cal_SMI 	= request.getParameter("cal_SMI");
			if (!cal_SMI.equals("NONE")) {
				ArrayList<Formula> formulaData_arr = new ArrayList<>();
				Formula formula = new Formula(); 
				formula.setPrd_code(prd_code);
	    	   	formula.setPrd_rider_code(prd_code);
	    	   	formula.setFormula_cat_id(2);//Product///CL  Formula_cat_id = 2
				formula.setFormula_id(Integer.valueOf(cal_SMI));
				formula.setUser_code(userId);
				formula.setUpdate_time(PDFFnc.currentTimeStamp());
				formulaData_arr.add(formula);
				
				 pcp.doFrmula("2",formulaData_arr);
			}else {
				pcp.doFrmula("2",new ArrayList<Formula>());
			}
			//  Formula_cat_id = 3	
			String cal_MI 	= request.getParameter("cal_MI");
			if (!cal_MI.equals("NONE")) {
				ArrayList<Formula> formulaData_arr = new ArrayList<>();
				Formula formula = new Formula(); 
				formula.setPrd_code(prd_code);
	    	   	formula.setPrd_rider_code(prd_code);
	    	   	formula.setFormula_cat_id(3);//Product///CL  Formula_cat_id = 3
				formula.setFormula_id(Integer.valueOf(cal_MI));
				formula.setUser_code(userId);
				formula.setUpdate_time(PDFFnc.currentTimeStamp());
				formulaData_arr.add(formula);
				
				 pcp.doFrmula("3",formulaData_arr);
			}else {
				pcp.doFrmula("3",new ArrayList<Formula>());
			}
			//  Formula_cat_id = 4	
			if (jsonArr_cal_insurance.length() != 0) {
				ArrayList<Formula> formulaData_arr = new ArrayList<>();
				for (int i = 0; i < jsonArr_cal_insurance.length(); i++)
			       {		
					JSONObject jsonObj_cal_insurance = jsonArr_cal_insurance.getJSONObject(i);
					Formula formula = new Formula(); 
			    	   	formula.setPrd_code(prd_code);
			    	   	formula.setPrd_rider_code((String) jsonObj_cal_insurance.getString("prd_rider_code"));
			    	   	formula.setFormula_cat_id(4);//Product///CL  Formula_cat_id = 4
			    	   	formula.setFormula_id(jsonObj_cal_insurance.getInt("formula"));
						formula.setUser_code(userId);
						formula.setUpdate_time(PDFFnc.currentTimeStamp());
						formulaData_arr.add(formula);
						
			       }
				 pcp.doFrmula("4",formulaData_arr);
			}else {
				pcp.doFrmula("4",new ArrayList<Formula>());
			}				
		
	///////////////////////////////////////////////////////////////////////////////////
			String payPremiun_loan 	= request.getParameter("payPremiun_loan");
			String payPremiun_cash 	= request.getParameter("payPremiun_cash");
			ArrayList<Prem_collect> prem_collect_arr = new ArrayList<>();
			boolean bl_payPremiun_loan = Boolean.parseBoolean(payPremiun_loan);
			boolean bl_payPremiun_cash = Boolean.parseBoolean(payPremiun_cash);
			
			if (bl_payPremiun_loan == true) {
				Prem_collect prem_collect = new Prem_collect(); 
				prem_collect.setPrd_code(prd_code);
				prem_collect.setPrem_flag("FYP");
				prem_collect.setCollect_meth("LOAN");
				prem_collect.setUser_code(userId);
				prem_collect.setUpdate_time(PDFFnc.currentTimeStamp());
				prem_collect_arr.add(prem_collect);
			} 
			if (bl_payPremiun_cash ==true) {
				Prem_collect prem_collect = new Prem_collect(); 
				prem_collect.setPrd_code(prd_code);
				prem_collect.setPrem_flag("FYP");
				prem_collect.setCollect_meth("CASH");
				prem_collect.setUser_code(userId);
				prem_collect.setUpdate_time(PDFFnc.currentTimeStamp());
				prem_collect_arr.add(prem_collect);
			} 
			pcp.doPremCollect(prd_code, prem_collect_arr);
			//set Status //*Benz 30-08-2019
			ProductData pd 		= new ProductData();
			Product setProduct 	=	pd.searchProduct(prd_code);
			if (groupName.equals("POC (1740)") || groupName.equals("POC") || groupName.equals("POC_Test")) {
				setProduct.setStatus("UPDATE");//Benz 16-08-2019
			}
			setProduct.setUser_code(userId);
			setProduct.setUpdate_time(getCurrentTimestamp());
			
			ProductBasicinfo setProductData = new ProductBasicinfo ();
			setProductData.doProduct(setProduct, null);
		////Benz 11-09-2019 New set Status
						WorkFlowProduct wfd = new WorkFlowProduct();
						ArrayList<Product_task> arr_getProduct_task = wfd.searchProductTask();
						Product_task  setprotask = new Product_task();
						if (groupName.equals("POC (1740)") || 
								groupName.equals("POC_Test")) 
						{
							for (int i = 0; i < arr_getProduct_task.size(); i++) {
								if ((arr_getProduct_task.get(i).getDepartment().equals("POC (1740)") || 
										arr_getProduct_task.get(i).getDepartment().equals("POC_Test")) && 
										(!arr_getProduct_task.get(i).getApprove_status().equals("APPROVE"))) {
									setprotask =   arr_getProduct_task.get(i);
									setprotask.setPrd_code(prd_code);
									setprotask.setApprove_status("UPDATE");
									setprotask.setUser_code(userId);
									setprotask.setUpdate_time(PDFFnc.currentTimeStamp());
									wfd.doProductTask(setprotask);
								}
							}
						}else {
							for (int i = 0; i < arr_getProduct_task.size(); i++) {
								if ((arr_getProduct_task.get(i).getDepartment().equals("PD") || 
										arr_getProduct_task.get(i).getDepartment().equals("PD_Test") ||
										arr_getProduct_task.get(i).getDepartment().equals("PD2")) && 
										(!arr_getProduct_task.get(i).getApprove_status().equals("APPROVE"))) {
									setprotask =   arr_getProduct_task.get(i);
									setprotask.setPrd_code(prd_code);
									setprotask.setApprove_status("UPDATE");
									setprotask.setUser_code(userId);
									setprotask.setUpdate_time(PDFFnc.currentTimeStamp());
									wfd.doProductTask(setprotask);
								}
							}
						}
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return "save_Tab_Cal_insurance";
	}
	//
	public String save_Tab_Grant_Rights(HttpServletRequest request, HttpServletResponse response) throws Exception 
	{
		try {
			ProductGrantRightsInsure pgri 			= new ProductGrantRightsInsure ();
			String prd_code    						= request.getParameter("prd_code");
			ConstantValues.PRD_CODE					= prd_code;
			String change_type    					= request.getParameter("change_type");
			String groupName 						= request.getParameter("groupName");
			ConstantValues.GROUP_NAME 				= groupName;
			
			ArrayList<Product_change> product_change_arr 	= new ArrayList<>();
			JSONArray jsonArr_policy_changeType		= new JSONArray(change_type);
			for (int i = 0; i < jsonArr_policy_changeType.length(); i++) {
				JSONObject jsonObj_policy_changeType = jsonArr_policy_changeType.getJSONObject(i);
				Product_change product_change		= new Product_change ();
				product_change.setPrd_code(prd_code);
				product_change.setChange_type(jsonObj_policy_changeType.getString("change_condition"));
				product_change.setUser_code(userId);
				product_change.setUpdate_time(PDFFnc.currentTimeStamp());
				product_change_arr.add(product_change);
			}
			
		/*	if  (!change_type.equals("")) {
				Product_change product_change		= new Product_change ();
				product_change.setPrd_code(prd_code);
				product_change.setChange_type(change_type);
				product_change.setUser_code(userId);
				product_change.setUpdate_time(PDFFnc.currentTimeStamp());
				product_change_arr.add(product_change);
			}*/
			////////////////////////////////////////////////////////////////
			String policy_surrender 				= request.getParameter("Policy_surrender");
			ArrayList<Formula> formulaData_arr = new ArrayList<>();
			ArrayList<Rate_layout> rate_layout_arr = new ArrayList<>();
			//policy_surrender = "[{\"cov_code\":\"GL_CL_MRT_B_0193\",\"prd_rider_code\":\"GL_CL_MRT_P_0002\",\"type_cov\":\"MRT\",\"tb_policyValue\":\"ต่อทุนรายปี 100,000 บาท\",\"tb_CV\":\"CV_CL 13 1 L_CL_MRT_B_0193.txt\",\"rate_cat_id\":\"6\",\"rate_layout_id\":\"13\",\"file_id\":\"933\",\"formula\":\"9\"},{\"cov_code\":\"RC_AC_ADD_R_0001\",\"prd_rider_code\":\"RC_AC_ADD_PR_0001\",\"type_cov\":\"ADD\",\"tb_policyValue\":\"ต่อทุนรายปี 100,000 บาท\",\"tb_CV\":\"CV_CL 13 1 C_AC_ADD_R_0001.txt\",\"rate_cat_id\":\"6\",\"rate_layout_id\":\"13\",\"file_id\":\"167\",\"formula\":\"10\"},{\"cov_code\":\"RC_TD_TPD_R_0002\",\"prd_rider_code\":\"RC_TD_TPD_PR_0002\",\"type_cov\":\"TPD\",\"tb_policyValue\":\"ต่อทุนรายปี 100,000 บาท\",\"tb_CV\":\"CV_CL 13 1 _TD_TPD_R_0002.txt\",\"rate_cat_id\":\"6\",\"rate_layout_id\":\"13\",\"file_id\":\"945\",\"formula\":\"9\"}]";
			JSONArray jsonArr_policy_surrender		= new JSONArray(policy_surrender);
			for (int i = 0; i < jsonArr_policy_surrender.length(); i++) {
				JSONObject jsonObj_policy_surrender = jsonArr_policy_surrender.getJSONObject(i);

				Formula formula = new Formula(); 
				Rate_layout rate_layout = new Rate_layout(); 
		    	   	formula.setPrd_code(prd_code);
		    	   	formula.setPrd_rider_code((String) jsonObj_policy_surrender.getString("prd_rider_code"));
		    	   	formula.setFormula_cat_id(5);//Product///CL  Formula_cat_id = 5
		    	   	if (!jsonObj_policy_surrender.get("formula").equals("NONE")) {
		    	   		formula.setFormula_id(jsonObj_policy_surrender.getInt("formula"));
		    	   	}
					formula.setUser_code(userId);
					formula.setUpdate_time(PDFFnc.currentTimeStamp());
					formulaData_arr.add(formula);
					//Set Rate_layout
					rate_layout.setPrd_code(prd_code);
					rate_layout.setPrd_rider_code((String) jsonObj_policy_surrender.getString("prd_rider_code"));
					if (jsonObj_policy_surrender.get("rate_cat_id").equals("")) {
						rate_layout.setRate_cat_id(6);
					}else {
						rate_layout.setRate_cat_id(jsonObj_policy_surrender.getInt("rate_cat_id"));
					}
					if (!jsonObj_policy_surrender.get("rate_layout_id").equals("")) {
						rate_layout.setRate_layout_id(jsonObj_policy_surrender.getInt("rate_layout_id"));
					}
					if (!jsonObj_policy_surrender.get("file_id").equals("")) {
						rate_layout.setFile_id(jsonObj_policy_surrender.getInt("file_id"));
					}
					rate_layout.setUser_code(userId);
					rate_layout.setUpdate_time(PDFFnc.currentTimeStamp());
					rate_layout_arr.add(rate_layout);
			}
			
			pgri.doProductChange(product_change_arr);
			pgri.doFormula(formulaData_arr);
			pgri.doRateLayout(rate_layout_arr);
			
			//set Status //*Benz 30-08-2019
			ProductData pd 		= new ProductData();
			Product setProduct 	=	pd.searchProduct(prd_code);
			if (groupName.equals("POC (1740)") || groupName.equals("POC") || groupName.equals("POC_Test")) {
				setProduct.setStatus("UPDATE");//Benz 16-08-2019
			}
			setProduct.setUser_code(userId);
			setProduct.setUpdate_time(getCurrentTimestamp());
			
			ProductBasicinfo setProductData = new ProductBasicinfo ();
			setProductData.doProduct(setProduct, null);
			
		////Benz 11-09-2019 New set Status
						WorkFlowProduct wfd = new WorkFlowProduct();
						ArrayList<Product_task> arr_getProduct_task = wfd.searchProductTask();
						Product_task  setprotask = new Product_task();
						if (groupName.equals("POC (1740)") || 
								groupName.equals("POC_Test")) 
						{
							for (int i = 0; i < arr_getProduct_task.size(); i++) {
								if ((arr_getProduct_task.get(i).getDepartment().equals("POC (1740)") || 
										arr_getProduct_task.get(i).getDepartment().equals("POC_Test")) && 
										(!arr_getProduct_task.get(i).getApprove_status().equals("APPROVE"))) {
									setprotask =   arr_getProduct_task.get(i);
									setprotask.setPrd_code(prd_code);
									setprotask.setApprove_status("UPDATE");
									setprotask.setUser_code(userId);
									setprotask.setUpdate_time(PDFFnc.currentTimeStamp());
									wfd.doProductTask(setprotask);
								}
							}
						}else {
							for (int i = 0; i < arr_getProduct_task.size(); i++) {
								if ((arr_getProduct_task.get(i).getDepartment().equals("PD") || 
										arr_getProduct_task.get(i).getDepartment().equals("PD_Test") ||
										arr_getProduct_task.get(i).getDepartment().equals("PD2")) && 
										(!arr_getProduct_task.get(i).getApprove_status().equals("APPROVE"))) {
									setprotask =   arr_getProduct_task.get(i);
									setprotask.setPrd_code(prd_code);
									setprotask.setApprove_status("UPDATE");
									setprotask.setUser_code(userId);
									setprotask.setUpdate_time(PDFFnc.currentTimeStamp());
									wfd.doProductTask(setprotask);
								}
							}
						}
	
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "save_Tab_Grant_Rights";
	}
	//
	public String save_Tab_Sales_Benefits(HttpServletRequest request, HttpServletResponse response) throws Exception 
	{
		try {
			ProductSaleCompensation ps 							= new ProductSaleCompensation(); 
			ArrayList<Sale_compensation> Sale_compensation_arr 	= new ArrayList<>();
			String prd_code    									= request.getParameter("prd_code");
			ConstantValues.PRD_CODE								= prd_code;
			String salesBenefits    							= request.getParameter("salesBenefits");
			String groupName 							= request.getParameter("groupName");
			ConstantValues.GROUP_NAME 					= groupName;
			///salesBenefits			= "[{\"compen_type\":\"BROKER_FEE\",\"compen_rate\":\"0.14\",\"fee\":true,\"vat\":false},{\"compen_type\":\"MKTG_EXP\",\"compen_rate\":\"10.00\"},{\"compen_type\":\"SALE_VOLUME_BONUS\",\"compen_rate\":\"20.00\"},{\"compen_type\":\"SALE_INCENTIVE\",\"compen_rate\":\"30.00\"},{\"compen_type\":\"COMMISSION_RATE\",\"compen_rate\":\"40.00\"}]";
			
			JSONArray jsonarr_salesBenefits		= new JSONArray(salesBenefits);
			if (jsonarr_salesBenefits.length() != 0) {
				for (int i = 0; i < jsonarr_salesBenefits.length(); i++)
		        {	
					JSONObject jsonObj_salesBenefits = jsonarr_salesBenefits.getJSONObject(i);
					Sale_compensation	sale_compensation 	= new Sale_compensation();
					if (i == 0 ) {
						if (jsonObj_salesBenefits.getBoolean("fee") == true) {
							sale_compensation.setIs_include_fee(true);

						}else {
							sale_compensation.setIs_include_fee(false);
						}
						if (jsonObj_salesBenefits.getBoolean("vat") == true) {
							sale_compensation.setIs_include_vat(true);
						}else {
							sale_compensation.setIs_include_vat(false);
						}
					}else {
						sale_compensation.setIs_include_fee(false);
						sale_compensation.setIs_include_vat(false);
					}
					sale_compensation.setPrd_code(prd_code);
					sale_compensation.setCompen_type(jsonObj_salesBenefits.getString("compen_type"));
					sale_compensation.setCompen_rate(covertStringtoBigDecimal(jsonObj_salesBenefits.getString("compen_rate")));
					sale_compensation.setCompen_factor("ANN_STD_PREM");
					sale_compensation.setUser_code(userId);
					sale_compensation.setUpdate_time(PDFFnc.currentTimeStamp());
		        	Sale_compensation_arr.add(sale_compensation);
		        }
				 ps.doSalesCompensation(Sale_compensation_arr);
			}else {
				 ps.doSalesCompensation(new ArrayList<Sale_compensation>());
			}
			
			//set Status //*Benz 30-08-2019
			ProductData pd 		= new ProductData();
			Product setProduct 	=	pd.searchProduct(prd_code);
			if (groupName.equals("POC (1740)") || groupName.equals("POC") || groupName.equals("POC_Test")) {
				setProduct.setStatus("UPDATE");//Benz 16-08-2019
			}
			setProduct.setUser_code(userId);
			setProduct.setUpdate_time(getCurrentTimestamp());
			
			ProductBasicinfo setProductData = new ProductBasicinfo ();
			setProductData.doProduct(setProduct, null);
		////Benz 11-09-2019 New set Status
						WorkFlowProduct wfd = new WorkFlowProduct();
						ArrayList<Product_task> arr_getProduct_task = wfd.searchProductTask();
						Product_task  setprotask = new Product_task();
						if (groupName.equals("POC (1740)") || 
								groupName.equals("POC_Test")) 
						{
							for (int i = 0; i < arr_getProduct_task.size(); i++) {
								if ((arr_getProduct_task.get(i).getDepartment().equals("POC (1740)") || 
										arr_getProduct_task.get(i).getDepartment().equals("POC_Test")) && 
										(!arr_getProduct_task.get(i).getApprove_status().equals("APPROVE"))) {
									setprotask =   arr_getProduct_task.get(i);
									setprotask.setPrd_code(prd_code);
									setprotask.setApprove_status("UPDATE");
									setprotask.setUser_code(userId);
									setprotask.setUpdate_time(PDFFnc.currentTimeStamp());
									wfd.doProductTask(setprotask);
								}
							}
						}else {
							for (int i = 0; i < arr_getProduct_task.size(); i++) {
								if ((arr_getProduct_task.get(i).getDepartment().equals("PD") || 
										arr_getProduct_task.get(i).getDepartment().equals("PD_Test") ||
										arr_getProduct_task.get(i).getDepartment().equals("PD2")) && 
										(!arr_getProduct_task.get(i).getApprove_status().equals("APPROVE"))) {
									setprotask =   arr_getProduct_task.get(i);
									setprotask.setPrd_code(prd_code);
									setprotask.setApprove_status("UPDATE");
									setprotask.setUser_code(userId);
									setprotask.setUpdate_time(PDFFnc.currentTimeStamp());
									wfd.doProductTask(setprotask);
								}
							}
						}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "save_Tab_Sales_Benefits";
	}
	/////////////////////////////
	public String save_Tab_Provision(HttpServletRequest request, HttpServletResponse response) throws Exception 
	{
		PorductProvision  pd = new PorductProvision();
		//prd_code
		String prd_code 				= request.getParameter("prd_code");
		ConstantValues.PRD_CODE			= prd_code;
		//Product
		//searchProduct
		String product 					= request.getParameter("product");
		String groupName 				= request.getParameter("groupName");
		ConstantValues.GROUP_NAME 		= groupName;
	//	product 						= "[{\"first_beneficiary\":\"PARTNER\",\"min_period\":\"17\",\"min_period_unit\":\"YEAR\",\"max_period\":\"70\",\"max_period_unit\":\"YEAR\",\"max_insure_age\":\"70\",\"max_insure_age_unit\":\"YEAR\",\"sale_eff_date\":\"21/06/2019\",\"sale_exp_date\":\"30/06/2019\",\"sys_eff_date\":\"06/01/2019\",\"master_policy\":\"null\",\"is_flp_fee\":false,\"flp_day\":\"0\",\"is_flp\":false}]";
		ProductControlData getpcd 		= new ProductControlData();
		ArrayList<Product> arr_Product 	= getpcd.searchProduct(prd_code);
		//ArrayList<Rider> arr_Rider 		= getpcd.searchProductRider(prd_code);
		Product setProduct 				=  new Product();
		JSONArray jsonarr_product		= new JSONArray(product);
		for (int i = 0; i < jsonarr_product.length(); i++) {
			JSONObject jsonObj_product 	= jsonarr_product.getJSONObject(i);
			 setProduct 			=  arr_Product.get(i);
			setProduct.setFirst_beneficiary(jsonObj_product.getString("first_beneficiary").toUpperCase());
			if (!jsonObj_product.getString("min_period").equals("")) {
				setProduct.setMin_period(Integer.parseInt(jsonObj_product.getString("min_period")));
			}
			setProduct.setMin_period_unit(jsonObj_product.getString("min_period_unit"));
			if (!jsonObj_product.getString("max_period").equals("")) {
				setProduct.setMax_period(Integer.parseInt(jsonObj_product.getString("max_period")));
			}
			setProduct.setMax_period_unit(jsonObj_product.getString("max_period_unit"));
			if (!jsonObj_product.getString("max_insure_age").equals("")) {
				setProduct.setMax_insure_age(Integer.parseInt(jsonObj_product.getString("max_insure_age")));
			}
			
			setProduct.setMax_insure_age_unit(jsonObj_product.getString("max_insure_age_unit"));
			if (!jsonObj_product.getString("sale_eff_date").equals("")) {
				setProduct.setSale_eff_date(getData(jsonObj_product.getString("sale_eff_date")));
			}
			if (!jsonObj_product.getString("sale_exp_date").equals("")) {
				setProduct.setSale_exp_date(getData(jsonObj_product.getString("sale_exp_date")));

			}
			if (!jsonObj_product.getString("sys_eff_date").equals("")) {
				setProduct.setSys_eff_date(getData(jsonObj_product.getString("sys_eff_date")));
			}
			
			
			if (!jsonObj_product.getString("master_policy").equals("null")) {
				setProduct.setMaster_policy(jsonObj_product.getString("master_policy"));
			}
			setProduct.setIs_flp_fee(jsonObj_product.getBoolean("is_flp_fee"));
			if (jsonObj_product.getInt("flp_day") != 0) {
				setProduct.setFlp_day(jsonObj_product.getInt("flp_day"));
			}
			setProduct.setIs_flp(jsonObj_product.getBoolean("is_flp"));
			
			setProduct.setUser_code(userId);
			setProduct.setUpdate_time(PDFFnc.currentTimeStamp());
			if (groupName.equals("POC (1740)") || groupName.equals("POC") || groupName.equals("POC_Test")) {
				setProduct.setStatus("UPDATE");//Benz 16-08-2019
			}
			break;
			
		}
		//Mode
		String mode 				= request.getParameter("mode");
		ArrayList<Mode> mode_arr = new ArrayList<>();
	//	mode = "[{\"key\":\"ANNUAL\",\"text\":\"ราย 12 เดือน\"},{\"key\":\"MONTH\",\"text\":\"ราย 1 เดือน\"}]";
		JSONArray json_mode		= new JSONArray(mode);
		for (int i = 0; i < json_mode.length(); i++) {
			JSONObject jsonObj_mode = json_mode.getJSONObject(i);
			Mode setmode = new Mode(); 
			setmode.setPrd_code(prd_code);
			setmode.setMode(jsonObj_mode.getString("key"));
			setmode.setUser_code(userId);
			setmode.setUpdate_time(PDFFnc.currentTimeStamp());
			setmode.setPrem_calc_meth("SA_ONLY");	//HARD CODE
			mode_arr.add(setmode);
		}
		//
		String ageRange_from 				= request.getParameter("ageRange_from");
		String ageRange_from_type 			= request.getParameter("ageRange_from_type");
		String ageRange_to 					= request.getParameter("ageRange_to");
		String ageRange_to_type 			= request.getParameter("ageRange_to_type");
		String ageRange_max 				= request.getParameter("ageRange_max");
		
		
		String participant 				= request.getParameter("participant");
		
		 //participant 					= "[{\"min_issue_age\":\"17\",\"min_issue_age_unit\":\"YEAR\",\"max_issue_age\":\"70\",\"max_issue_age_unit\":\"YEAR\",\"max_insure_age\":\"70\",\"max_insure_age_unit\":\"YEAR\",\"age_calc_meth\":\"\"}]";
		
		String age_formula 					= request.getParameter("age_formula");
		//age_formula 	= "[{\"key\":\"LAST_BIRTHDAY\",\"text\":\"Last Birthday\"},{\"key\":\"NEAR_IN_DAYS\",\"text\":\"Nearest Birthday (in days)\"},{\"key\":\"NEAR_IN_MONTHS\",\"text\":\"Nearest Birthday\"},{\"key\":\"NEXT_BIRTHDAY\",\"text\":\"Next Birthday\"},{\"key\":\"YEAR_SUBTRACT\",\"text\":\"ปีขาย - ปีเกิด\"";
		
		ArrayList<Participant> participant_arr = new ArrayList<>();
		
		ParticipantControlData pcd = new ParticipantControlData();
				
		ArrayList<Participant> getparticipant_arr = pcd.searchParticipant(prd_code);

		JSONArray participant_JSONarr		= new JSONArray(participant);
		for (int i = 0; i < participant_JSONarr.length(); i++) {
			JSONObject jsonObj_participant = participant_JSONarr.getJSONObject(i);
				for (int ii = 0; ii < getparticipant_arr.size(); ii++) {
					Participant setParticipant = getparticipant_arr.get(ii);
					if (getparticipant_arr.get(ii).getPrd_code().equals(getparticipant_arr.get(ii).getPrd_rider_code())) 
					{
						//ที่คอมเม้นรอดึงข้อมูลมาเดิมแมฟ
						setParticipant.setPrd_code(prd_code);
						setParticipant.setPrd_rider_code(prd_code);
						//setParticipant.setPartic_type("PRIMARY");
						//setParticipant.setPrem_rule("NONE");
						//setParticipant.setAge_calc_meth("NONE");//รอปั้นส่งมาให้จากหน้าบ้าน ****************
						//setParticipant.setGender(gender);
						if (!jsonObj_participant.getString("min_issue_age").equals("")) {
							setParticipant.setMin_issue_age(Integer.parseInt(jsonObj_participant.getString("min_issue_age")));
						}
						setParticipant.setMin_issue_age_unit(jsonObj_participant.getString("min_issue_age_unit"));
						if (!jsonObj_participant.getString("max_issue_age").equals("")) {
							setParticipant.setMax_issue_age(Integer.parseInt(jsonObj_participant.getString("max_issue_age")));

						}
						setParticipant.setMax_issue_age_unit(jsonObj_participant.getString("max_issue_age_unit"));
						if (!jsonObj_participant.getString("max_insure_age").equals("")) {
							setParticipant.setMax_insure_age(Integer.parseInt(jsonObj_participant.getString("max_insure_age")));
						}
						setParticipant.setMax_insure_age_unit(jsonObj_participant.getString("max_insure_age_unit"));
						if (jsonObj_participant.getString("age_calc_meth").equals("")) {
							setParticipant.setAge_calc_meth("NONE");
						}else {
							setParticipant.setAge_calc_meth(jsonObj_participant.getString("age_calc_meth"));
						} 
						setParticipant.setUser_code(userId);
						setParticipant.setUpdate_time(PDFFnc.currentTimeStamp());
					}
					participant_arr.add(setParticipant);
				}
		}
		//FlpFee
		String flpFee				= request.getParameter("flpFee_arr");
		//flpFee						= "[{\"Fee_type\":\"POLICY_ISSUE\"}]";
		ArrayList<Flp_fee> flp_fee_arr 		= new ArrayList<>();
		JSONArray tb_deduct_cost_arr		= new JSONArray(flpFee);
		for (int i = 0; i < tb_deduct_cost_arr.length(); i++) {
			JSONObject jsonObj_tb_deduct_cost = tb_deduct_cost_arr.getJSONObject(i);
			Flp_fee set_Flp_fee = new Flp_fee(); 
			set_Flp_fee.setPrd_code(prd_code);
			set_Flp_fee.setFee_type(jsonObj_tb_deduct_cost.getString("Fee_type"));
			set_Flp_fee.setUser_code(userId);
			set_Flp_fee.setUpdate_time(PDFFnc.currentTimeStamp());
			flp_fee_arr.add(set_Flp_fee);
		}
		//Appendix_product
		//Appendix_product
		
		String anti_HIV 									= request.getParameter("appenDixProduct");
		//anti_HIV											= "[{\"key\":\"5\",\"prd_code\":\"GL_CL_MRT_P_0002\",\"eff_date\":\"21/06/2019\",\"exp_date\":\"30/06/2019\"}]";
		ArrayList<Appendix_product> Appendix_product_arr	= new ArrayList<>();
		JSONArray Appendix_jsonarr						= new JSONArray(anti_HIV);
		for (int i = 0; i < Appendix_jsonarr.length(); i++) {
			JSONObject jsonObj_Appendix = Appendix_jsonarr.getJSONObject(i);
			Appendix_product setAP = new Appendix_product();
			setAP.setPrd_code(prd_code);
			if (!jsonObj_Appendix.getString("eff_date").equals("")) {
				setAP.setEff_date(getData(jsonObj_Appendix.getString("eff_date")));

			}
			if (!jsonObj_Appendix.getString("exp_date").equals("")) {
				setAP.setExp_date(getData(jsonObj_Appendix.getString("exp_date")));
			}
			setAP.setAppendix_code(jsonObj_Appendix.getString("key"));
			setAP.setUser_code(userId);
			setAP.setUpdate_time(PDFFnc.currentTimeStamp());
			Appendix_product_arr.add(setAP);
		}
		//unwAccumRule
		String unwAccumRule 									= request.getParameter("unwAccumRule");
		//unwAccumRule											= "[{\"seq\":1,\"cov_cat_lv_1\":\"2\",\"cov_cat_lv_2\":\"45\",\"cov_cat_lv_3\":\"52\",\"is_gio\":\"GIO-A\",\"is_senior\":\"NONE\",\"filing_chan_id\":\"2\",\"sale_chan_id\":\"\",\"sale_partner_code\":\"NONE\",\"accum_type\":\"MED_SUM\"},{\"seq\":1,\"cov_cat_lv_1\":\"2\",\"cov_cat_lv_2\":\"45\",\"cov_cat_lv_3\":\"53\",\"is_gio\":\"GIO-B\",\"is_senior\":\"NONE\",\"filing_chan_id\":\"1\",\"sale_chan_id\":\"\",\"sale_partner_code\":\"NONE\",\"accum_type\":\"EXIST_POLICY\"},{\"seq\":1,\"cov_cat_lv_1\":\"2\",\"cov_cat_lv_2\":\"45\",\"cov_cat_lv_3\":\"52\",\"is_gio\":\"GIO-B\",\"is_senior\":\"NONE\",\"filing_chan_id\":\"1\",\"sale_chan_id\":\"\",\"sale_partner_code\":\"NONE\",\"accum_type\":\"INSURED_SUM\"}]";
		ArrayList<Unw_accum_rule> unwAccumRule_arr				= new ArrayList<>();
		JSONArray Unw_accum_rule_jsonarr						= new JSONArray(unwAccumRule);
		for (int i = 0; i < Unw_accum_rule_jsonarr.length(); i++) {
			JSONObject jsonObj_Unw_accum_rule = Unw_accum_rule_jsonarr.getJSONObject(i);
			Unw_accum_rule setuar = new Unw_accum_rule();
			setuar.setPrd_code(prd_code);
			setuar.setAccum_type(jsonObj_Unw_accum_rule.getString("accum_type"));
			setuar.setSeq(jsonObj_Unw_accum_rule.getInt("seq"));
			setuar.setCov_cat_lv_1(Integer.parseInt(jsonObj_Unw_accum_rule.getString("cov_cat_lv_1")));
			if(!jsonObj_Unw_accum_rule.getString("cov_cat_lv_2").equals("") && jsonObj_Unw_accum_rule.getString("cov_cat_lv_2") != "0") {
				setuar.setCov_cat_lv_2(Integer.parseInt(jsonObj_Unw_accum_rule.getString("cov_cat_lv_2")));
			}
			if(!jsonObj_Unw_accum_rule.getString("cov_cat_lv_3").equals("") && jsonObj_Unw_accum_rule.getString("cov_cat_lv_3") != "0") {
				setuar.setCov_cat_lv_3(Integer.parseInt(jsonObj_Unw_accum_rule.getString("cov_cat_lv_3")));
			}
			setuar.setUnderwrite_opt(jsonObj_Unw_accum_rule.getString("is_gio"));        //**เก็บ
			setuar.setIs_senior(jsonObj_Unw_accum_rule.getString("is_senior")); //** เก็บ
			///***Benz 01-07-2562
			if (jsonObj_Unw_accum_rule.getString("filing_chan_id").equals("NONE")) {
				
			}else {
				setuar.setFiling_chan_id(Integer.parseInt(jsonObj_Unw_accum_rule.getString("filing_chan_id")));
			}
			if(!jsonObj_Unw_accum_rule.get("sale_chan_id").toString().equals("0")){
				setuar.setSale_chan_id(Integer.parseInt(jsonObj_Unw_accum_rule.get("sale_chan_id").toString())); //**เก็บ
			}else {
				setuar.setSale_chan_id(0); //**เก็บ
			}	
			if (!jsonObj_Unw_accum_rule.get("sale_partner_code").toString().equals("0")) {
				setuar.setSale_partner_code(jsonObj_Unw_accum_rule.get("sale_partner_code").toString());
			}else {
				setuar.setSale_partner_code("NONE");
			}
			setuar.setUser_code(userId);
			setuar.setUpdate_time(PDFFnc.currentTimeStamp());
			unwAccumRule_arr.add(setuar);
		}
		//Unw_pol_issue_unit รอหน้าบ้านปรับแก้ตอนส่งมานิสนึง
		String pol_issue_unit 									= request.getParameter("pol_issue_unit");
		//pol_issue_unit											= "[{\"NBI\":true,\"headquarters\":false}]";
		//[{"NBI":"true"},{"headquarters":"false"}]
		ArrayList<Unw_pol_issue_unit> pol_issue_unit_arr			= new ArrayList<>();
		JSONArray pol_issue_unit_jsonarr						= new JSONArray(pol_issue_unit);
		
		for (int i = 0; i < pol_issue_unit_jsonarr.length(); i++) {
			JSONObject jsonObj_pol_issue_unit = pol_issue_unit_jsonarr.getJSONObject(0);
			Unw_pol_issue_unit setUnw_pol_issue_unit = new Unw_pol_issue_unit();
			if (jsonObj_pol_issue_unit.getBoolean("NBI") == true) {
				 setUnw_pol_issue_unit = new Unw_pol_issue_unit();
				setUnw_pol_issue_unit.setPrd_code(prd_code);
				setUnw_pol_issue_unit.setPol_issue_unit("NBI");	
				setUnw_pol_issue_unit.setUser_code(userId);
				setUnw_pol_issue_unit.setUpdate_time(PDFFnc.currentTimeStamp());
				pol_issue_unit_arr.add(setUnw_pol_issue_unit);
			}
			if (jsonObj_pol_issue_unit.getBoolean("headquarters") == true) {
				 setUnw_pol_issue_unit = new Unw_pol_issue_unit();
				setUnw_pol_issue_unit.setPrd_code(prd_code);
				setUnw_pol_issue_unit.setPol_issue_unit("UNW");	
				setUnw_pol_issue_unit.setUser_code(userId);
				setUnw_pol_issue_unit.setUpdate_time(PDFFnc.currentTimeStamp());
				pol_issue_unit_arr.add(setUnw_pol_issue_unit);
			}
		}
		//Occ
		String doOcc 							= request.getParameter("occ");
		//doOcc									= "[{\"key\":\"0\",\"text\":\"ทุกชั้นอาชีพ\",\"check\":true},{\"key\":\"1\",\"text\":\"ชั้นอาชีพ 1\",\"check\":true},{\"key\":\"2\",\"text\":\"ชั้นอาชีพ 2\",\"check\":true},{\"key\":\"3\",\"text\":\"ชั้นอาชีพ 3\",\"check\":false},{\"key\":\"4\",\"text\":\"ชั้นอาชีพ 4\",\"check\":false}]";
		ArrayList<Occ> doOcc_arr				= new ArrayList<>();
		JSONArray doOcc_jsonarr					= new JSONArray(doOcc);
		for (int i = 0; i < doOcc_jsonarr.length(); i++) {
			JSONObject jsonObj_doOcc = doOcc_jsonarr.getJSONObject(i);
			Occ setOcc = new Occ();
			if (jsonObj_doOcc.getBoolean("check") == true) {
				setOcc.setPrd_code(prd_code);
				setOcc.setOcc_class(jsonObj_doOcc.getString("key"));
				setOcc.setUser_code(userId);
				setOcc.setUpdate_time(PDFFnc.currentTimeStamp());
				doOcc_arr.add(setOcc);
			}
		}
		
		//unw_hist_rule
		String unw_hist_rule 							= request.getParameter("unwHistrule");
		//unw_hist_rule									= "[{\"Hist_type\":\"CLAIM\",\"Is_check\":true,\"Is_restrict\":true,\"Restrict_type_1\":\"MED_SUM\",\"Condition_1\":\"OR\",\"Restrict_type_2\":\"PRODUCT\",\"Condition_2\":\"OR\",\"Restrict_type_3\":\"NEW_SA\",\"New_sa_compare\":\"GT\",\"New_sa_amt\":\"10000\"},{\"Hist_type\":\"IC\",\"Is_check\":true,\"Is_restrict\":true,\"Restrict_type_1\":\"MED_SUM\",\"Condition_1\":\"OR\",\"Restrict_type_2\":\"PRODUCT\",\"Condition_2\":\"OR\",\"Restrict_type_3\":\"NEW_SA\",\"New_sa_compare\":\"GT\",\"New_sa_amt\":\"10000\"},{\"Hist_type\":\"SUBSTD\",\"Is_check\":true,\"Is_restrict\":true,\"Restrict_type_1\":\"MED_SUM\",\"Condition_1\":\"OR\",\"Restrict_type_2\":\"PRODUCT\",\"Condition_2\":\"OR\",\"Restrict_type_3\":\"NEW_SA\",\"New_sa_compare\":\"GT\",\"New_sa_amt\":\"10000\"}]";
		ArrayList<Unw_hist_rule> unw_hist_rule_arr		= new ArrayList<>();
		JSONArray unw_hist_rule_jsonarr					= new JSONArray(unw_hist_rule);
		for (int i = 0; i < unw_hist_rule_jsonarr.length(); i++) {
			JSONObject jsonObj_unw_hist_rule = unw_hist_rule_jsonarr.getJSONObject(i);
			Unw_hist_rule setUnw_hist_rule = new Unw_hist_rule();
			
			setUnw_hist_rule.setPrd_code(prd_code);
			setUnw_hist_rule.setHist_type(jsonObj_unw_hist_rule.getString("Hist_type"));
			setUnw_hist_rule.setIs_check(jsonObj_unw_hist_rule.getBoolean("Is_check"));
			setUnw_hist_rule.setIs_restrict(jsonObj_unw_hist_rule.getBoolean("Is_restrict"));
			
			setUnw_hist_rule.setRestrict_type_1(jsonObj_unw_hist_rule.getString("Restrict_type_1"));
			setUnw_hist_rule.setCondition_1(jsonObj_unw_hist_rule.getString("Condition_1"));
			setUnw_hist_rule.setRestrict_type_2(jsonObj_unw_hist_rule.getString("Restrict_type_2"));
			setUnw_hist_rule.setCondition_2(jsonObj_unw_hist_rule.getString("Condition_2"));
			setUnw_hist_rule.setRestrict_type_3(jsonObj_unw_hist_rule.getString("Restrict_type_3"));
			if (!jsonObj_unw_hist_rule.getString("New_sa_amt").equals("")) {
				setUnw_hist_rule.setNew_sa_amt(covertStringtoBigDecimal(jsonObj_unw_hist_rule.getString("New_sa_amt")));
			}			
			setUnw_hist_rule.setNew_sa_compare(jsonObj_unw_hist_rule.getString("New_sa_compare"));
			
			/*setUnw_hist_rule.setRestrict_type_1("NONE");
			setUnw_hist_rule.setCondition_1("NONE");
			setUnw_hist_rule.setRestrict_type_2("NONE");
			setUnw_hist_rule.setCondition_2("NONE");
			setUnw_hist_rule.setRestrict_type_3("NONE");
			if (!jsonObj_unw_hist_rule.getString("New_sa_amt").equals("None")) {
				setUnw_hist_rule.setNew_sa_amt(covertStringtoBigDecimal(jsonObj_unw_hist_rule.getString("New_sa_amt")));
			}
			setUnw_hist_rule.setNew_sa_compare("NONE");*/
			
			setUnw_hist_rule.setUser_code(userId);
			setUnw_hist_rule.setUpdate_time(PDFFnc.currentTimeStamp());
			unw_hist_rule_arr.add(setUnw_hist_rule);
		}
		//unwHistMedSum 
		String unw_hist_med_sum 							= request.getParameter("unwHistMedSum");
		//unw_hist_med_sum									= "[{\"Hist_type\":\"CLAIM\",\"Seq\":1,\"sale_eff_date\":\"19/06/2019\",\"sale_exp_date\":\"30/06/2019\"},{\"Hist_type\":\"IC\",\"Seq\":1,\"sale_eff_date\":\"19/06/2019\",\"sale_exp_date\":\"30/06/2019\"},{\"Hist_type\":\"SUBSTD\",\"Seq\":1,\"sale_eff_date\":\"19/06/2019\",\"sale_exp_date\":\"30/06/2019\"}]";
		ArrayList<Unw_hist_med_sum> unw_hist_med_sum_arr	= new ArrayList<>();
		JSONArray unw_hist_med_sum_jsonarr					= new JSONArray(unw_hist_med_sum);
		for (int i = 0; i < unw_hist_med_sum_jsonarr.length(); i++) {
			JSONObject jsonObj_unw_hist_med_sum 			= unw_hist_med_sum_jsonarr.getJSONObject(i);
			Unw_hist_med_sum setunw_hist_med_sum 			= new Unw_hist_med_sum();
			
			setunw_hist_med_sum.setPrd_code(prd_code);
			setunw_hist_med_sum.setHist_type(jsonObj_unw_hist_med_sum.getString("Hist_type"));
			setunw_hist_med_sum.setSeq(jsonObj_unw_hist_med_sum.getInt("Seq"));
			if (!jsonObj_unw_hist_med_sum.getString("sale_eff_date").equals("")) {
				setunw_hist_med_sum.setEff_date(getData(jsonObj_unw_hist_med_sum.getString("sale_eff_date")));
			}
			if (!jsonObj_unw_hist_med_sum.getString("sale_exp_date").equals("")) {
				setunw_hist_med_sum.setExp_date(getData(jsonObj_unw_hist_med_sum.getString("sale_exp_date")));
			}
			setunw_hist_med_sum.setUser_code(userId);
			setunw_hist_med_sum.setUpdate_time(PDFFnc.currentTimeStamp());
			unw_hist_med_sum_arr.add(setunw_hist_med_sum);
		}	
		//UnwHistMedSumDet
		String unw_hist_med_sum_det 								= request.getParameter("unwHistMedSumDet");
		//unw_hist_med_sum_det										= "[{\"Hist_type\":\"CLAIM\",\"Seq\":1,\"Min_age\":\"20\",\"Max_age\":\"70\",\"Min_sum_amt\":\"1000000\"},{\"Hist_type\":\"IC\",\"Seq\":1,\"Min_age\":\"20\",\"Max_age\":\"70\",\"Min_sum_amt\":\"1000000\"},{\"Hist_type\":\"SUBSTD\",\"Seq\":1,\"Min_age\":\"20\",\"Max_age\":\"70\",\"Min_sum_amt\":\"1000000\"}]";
		ArrayList<Unw_hist_med_sum_det> unw_hist_med_sum_det_arr	= new ArrayList<>();
		JSONArray unw_hist_med_sum_det_jsonarr						= new JSONArray(unw_hist_med_sum_det);
		for (int i = 0; i < unw_hist_med_sum_det_jsonarr.length(); i++) {
			JSONObject jsonObj_unw_hist_med_sum_det					=unw_hist_med_sum_det_jsonarr.getJSONObject(i);
			Unw_hist_med_sum_det setunw_hist_med_sum_det 			= new Unw_hist_med_sum_det();
			
			setunw_hist_med_sum_det.setPrd_code(prd_code);
			setunw_hist_med_sum_det.setHist_type(jsonObj_unw_hist_med_sum_det.getString("Hist_type"));
			setunw_hist_med_sum_det.setSeq(jsonObj_unw_hist_med_sum_det.getInt("Seq"));
			if (!jsonObj_unw_hist_med_sum_det.getString("Min_age").equals("")) {
				setunw_hist_med_sum_det.setMin_age(Integer.parseInt(jsonObj_unw_hist_med_sum_det.getString("Min_age")));
			}
			if (!jsonObj_unw_hist_med_sum_det.getString("Max_age").equals("")) {
				setunw_hist_med_sum_det.setMax_age(Integer.parseInt(jsonObj_unw_hist_med_sum_det.getString("Max_age")));
			}
			if (!jsonObj_unw_hist_med_sum_det.getString("Min_sum_amt").equals("")) {
				setunw_hist_med_sum_det.setMin_sum_amt(covertStringtoBigDecimal(jsonObj_unw_hist_med_sum_det.getString("Min_sum_amt")));

			}
			setunw_hist_med_sum_det.setUser_code(userId);
			setunw_hist_med_sum_det.setUpdate_time(PDFFnc.currentTimeStamp());
			unw_hist_med_sum_det_arr.add(setunw_hist_med_sum_det);
		}
		//doUnwHistExistProd
		String unwHistExistProd 							= request.getParameter("unwHistExitProd");
		//unwHistExistProd									= "[{\"Hist_type\":\"CLAIM\",\"Exist_prd_code\":\"GL_CL_MRT_P_0001\"},{\"Hist_type\":\"IC\",\"Exist_prd_code\":\"GL_CL_MRT_P_0001\"},{\"Hist_type\":\"SUBSTD\",\"Exist_prd_code\":\"GL_CL_MRT_P_0001\"}]";
		ArrayList<Unw_hist_exist_prod> unwHistExistProd_arr	= new ArrayList<>();
		JSONArray unwHistExistProd_jsonarr					= new JSONArray(unwHistExistProd);
		for (int i = 0; i < unwHistExistProd_jsonarr.length(); i++) {
			JSONObject jsonObj_unwHistExistProd				=unwHistExistProd_jsonarr.getJSONObject(i);
			Unw_hist_exist_prod setunwHistExistProd 		= new Unw_hist_exist_prod();

			setunwHistExistProd.setPrd_code(prd_code);
			setunwHistExistProd.setHist_type(jsonObj_unwHistExistProd.getString("Hist_type"));
			setunwHistExistProd.setExist_prd_code(jsonObj_unwHistExistProd.getString("Exist_prd_code"));
			unwHistExistProd_arr.add(setunwHistExistProd);
		}
		//doUnderwrite
		String underwrite 							= request.getParameter("underwrite");
		//underwrite									= "[{\"prd_max_sa\":\"100\",\"prd_max_sa_unit\":\"PERCENT\",\"prd_max_sa_factor\":\"SMI\",\"is_med_req\":true,\"is_med_sum_accum\":true,\"is_exist_policy\":true,\"is_insure_sum_accum\":true,\"is_substandard\":true,\"is_rider_allow\":false,\"is_rider_sum_accum\":false,\"is_check_ic_ba\":false,\"is_check_ic_fi_cft\":false,\"is_check_sale_blacklist\":false,\"is_fax_app\":false}]";
		JSONArray underwrite_jsonarr				= new JSONArray(underwrite);
			JSONObject jsonObj_underwrite			=underwrite_jsonarr.getJSONObject(0);
			Underwrite setunderwrite 				= new Underwrite();
		
			setunderwrite.setPrd_code(prd_code);
			if (!jsonObj_underwrite.getString("prd_max_sa").equals("")) {
				setunderwrite.setPrd_max_sa(covertStringtoBigDecimal(jsonObj_underwrite.getString("prd_max_sa")));
			}
			setunderwrite.setPrd_max_sa_unit(jsonObj_underwrite.getString("prd_max_sa_unit"));
			setunderwrite.setPrd_max_sa_factor(jsonObj_underwrite.getString("prd_max_sa_factor"));
			
			setunderwrite.setIs_med_req(jsonObj_underwrite.getBoolean("is_med_req"));
			setunderwrite.setIs_med_sum_accum(jsonObj_underwrite.getBoolean("is_med_sum_accum"));
			setunderwrite.setIs_exist_policy(jsonObj_underwrite.getBoolean("is_exist_policy"));
			setunderwrite.setIs_insure_sum_accum(jsonObj_underwrite.getBoolean("is_insure_sum_accum"));
			setunderwrite.setIs_substandard(jsonObj_underwrite.getBoolean("is_substandard"));
			
			setunderwrite.setIs_rider_allow(jsonObj_underwrite.getBoolean("is_rider_allow"));
			setunderwrite.setIs_rider_sum_accum(jsonObj_underwrite.getBoolean("is_rider_sum_accum"));
			
			setunderwrite.setIs_check_ic_ba(jsonObj_underwrite.getBoolean("is_check_ic_ba"));
			setunderwrite.setIs_check_ic_fi_cft(jsonObj_underwrite.getBoolean("is_check_ic_fi_cft"));
			setunderwrite.setIs_check_sale_blacklist(jsonObj_underwrite.getBoolean("is_check_sale_blacklist"));
			setunderwrite.setIs_reins_alert(jsonObj_underwrite.getBoolean("is_reins_alert"));
			
			setunderwrite.setIs_fax_app(jsonObj_underwrite.getBoolean("is_fax_app"));
			setunderwrite.setPol_print_at("IN_HOUSE");///ไปก่อน
			setunderwrite.setUser_code(userId);
			setunderwrite.setUpdate_time(PDFFnc.currentTimeStamp());
		
		//	Unw_rider_limit
		String 	unw_rider_limit							= request.getParameter("unwRiderLimit");
		//unw_rider_limit 								= "[{\"type\":\"MRT\",\"Pax_max_sa_amt\":\"150000000\"},{\"type\":\"ADD\",\"Pax_max_sa_amt\":\"150000000\"},{\"type\":\"TPD\",\"Pax_max_sa_amt\":\"20000000\"}]";
		JSONArray unw_rider_limit_jsonarr				= new JSONArray(unw_rider_limit);
			
		UnwRiderLimitControlData urlcd 					= new UnwRiderLimitControlData();
		ArrayList<Unw_rider_limit> getunw_rider_limit_coop 	= urlcd.searchProductUnwRiderLimit(prd_code);
		ArrayList<Unw_rider_limit> arr_unw_rider_limit 	= new ArrayList<>();
		for (int i = 0; i < unw_rider_limit_jsonarr.length(); i++) {
			JSONObject jsonunw_rider_limit 					= unw_rider_limit_jsonarr.getJSONObject(i);
			Unw_rider_limit setunw_rider_limit 				=  new Unw_rider_limit();//getunw_rider_limit_coop.get(i);		
			setunw_rider_limit.setPrd_code(prd_code);
			setunw_rider_limit.setPrd_rider_code(jsonunw_rider_limit.getString("prd_rider_code"));
			setunw_rider_limit.setPax_max_sa_amt(covertStringtoBigDecimal(jsonunw_rider_limit.getString("Pax_max_sa_amt")));
			setunw_rider_limit.setPax_max_sa_unit("CURRENCY");
			setunw_rider_limit.setPax_max_sa_factor("NONE");
			
			setunw_rider_limit.setMax_em(covertStringtoBigDecimal(jsonunw_rider_limit.get("max_em").toString()));
			setunw_rider_limit.setUser_code(userId);
			setunw_rider_limit.setUpdate_time(PDFFnc.currentTimeStamp());
			arr_unw_rider_limit.add(setunw_rider_limit);
		}
		///	
		//Unw_cocredit_limit
		String unw_cocredit_limit 								= request.getParameter("unwCocreditLimit");
		//unw_cocredit_limit										= "[{\"seq\":\"1\",\"amount_from\":\"1\",\"amount_to\":\"9999999\",\"TopAlone_count\":\"100\",\"TopAlone_unit\":\"PERCENT\",\"TopAlone_of\":\"SMI\",\"TopTogether_count\":\"200\",\"TopTogether_unit\":\"PERCENT\",\"TopTogether_of\":\"SMI\"}]";
		ArrayList<Unw_cocredit_limit> unw_cocredit_limit_arr	= new ArrayList<>();
		JSONArray unw_cocredit_limit_jsonarr					= new JSONArray(unw_cocredit_limit);
		for (int i = 0; i < unw_cocredit_limit_jsonarr.length(); i++) {
			JSONObject jsonObj_unw_cocredit_limit				=unw_cocredit_limit_jsonarr.getJSONObject(i);
			Unw_cocredit_limit setunw_cocredit_limit 			= new Unw_cocredit_limit();
			
			setunw_cocredit_limit.setPrd_code(prd_code);
			setunw_cocredit_limit.setSeq(Integer.parseInt(jsonObj_unw_cocredit_limit.getString("seq")));
			setunw_cocredit_limit.setMin_loan_amt(covertStringtoBigDecimal(jsonObj_unw_cocredit_limit.getString("amount_from")));
			setunw_cocredit_limit.setMax_loan_amt(covertStringtoBigDecimal(jsonObj_unw_cocredit_limit.getString("amount_to")));
			setunw_cocredit_limit.setPax_max_sa_amt(covertStringtoBigDecimal(jsonObj_unw_cocredit_limit.getString("TopAlone_count")));
			setunw_cocredit_limit.setPax_max_sa_unit(jsonObj_unw_cocredit_limit.getString("TopAlone_unit"));
			setunw_cocredit_limit.setPax_max_sa_factor(jsonObj_unw_cocredit_limit.getString("TopAlone_of"));
			
			setunw_cocredit_limit.setTot_max_sa_amt(covertStringtoBigDecimal(jsonObj_unw_cocredit_limit.getString("TopTogether_count")));
			setunw_cocredit_limit.setTot_max_sa_unit(jsonObj_unw_cocredit_limit.getString("TopTogether_unit"));
			setunw_cocredit_limit.setTot_max_sa_factor(jsonObj_unw_cocredit_limit.getString("TopTogether_of"));
			setunw_cocredit_limit.setUser_code(userId);
			setunw_cocredit_limit.setUpdate_time(PDFFnc.currentTimeStamp());
			unw_cocredit_limit_arr.add(setunw_cocredit_limit);
		}	
		//	Unw_substd_type
		String unw_substd_type 								= request.getParameter("unwSubstdType");
		//unw_substd_type										= "[{\"substd_type\":\"EXTRA_PREM\"},{\"substd_type\":\"SUM_DECR\"},{\"substd_type\":\"PERIOD_DECR\"},{\"substd_type\":\"ADD_PLAN\"}]";
		ArrayList<Unw_substd_type> unw_substd_type_arr	= new ArrayList<>();
		JSONArray unw_substd_type_jsonarr					= new JSONArray(unw_substd_type);
		for (int i = 0; i < unw_substd_type_jsonarr.length(); i++) {
			JSONObject jsonObj_unw_substd_type				=	unw_substd_type_jsonarr.getJSONObject(i);
			Unw_substd_type setunw_substd_type 				= new Unw_substd_type();
			
			setunw_substd_type.setPrd_code(prd_code);
			setunw_substd_type.setSubstd_type(jsonObj_unw_substd_type.getString("substd_type"));
			setunw_substd_type.setLink_prd_code(null);
			setunw_substd_type.setUser_code(userId);
			setunw_substd_type.setUpdate_time(PDFFnc.currentTimeStamp());
			unw_substd_type_arr.add(setunw_substd_type);
		}
		//coop
		String 	coop							= request.getParameter("Coop");
		//coop 									= "[{\"seq\":\"1\",\"coop_code\":\"00001\",\"Master_policy\":\"\",\"Max_em\":\"0.00\"},{\"seq\":\"2\",\"coop_code\":\"00002\",\"Master_policy\":\"\",\"Max_em\":\"0.00\"},{\"seq\":\"3\",\"coop_code\":\"00004\",\"Master_policy\":\"\",\"Max_em\":\"0.00\"}]";
		JSONArray coop_jsonarr					= new JSONArray(coop);
		
		CoopControlData ccd 					= new CoopControlData();
		ArrayList<Coop> getarr_coop 			= ccd.searchCoop(prd_code);
		ArrayList<Coop> arr_coop 				= new ArrayList<>();
		if (coop_jsonarr.length() != 0) {
			for (int i = 0; i < getarr_coop.size(); i++) {
				JSONObject jsonObj_coop 			= coop_jsonarr.getJSONObject(i);
				Coop setcoop 						=  getarr_coop.get(i);
				if (getarr_coop.get(i).getSeq() == Integer.parseInt(jsonObj_coop.getString("seq"))) {
					setcoop.setCoop_code(jsonObj_coop.getString("coop_code"));
					setcoop.setMax_em(covertStringtoBigDecimal(jsonObj_coop.getString("Max_em")));
					setcoop.setMaster_policy(jsonObj_coop.getString("Master_policy"));
					setcoop.setUser_code(userId);
					setcoop.setUpdate_time(PDFFnc.currentTimeStamp());
					arr_coop.add(setcoop);
				}else {
					setcoop = new Coop();
					arr_coop.add(setcoop);
				}
			}
			pd.doCoop(arr_coop); 
		}
		
		
		pd.doProduct(setProduct,null); 
		pd.doMode(mode_arr); 
		pd.doAppenDixProduct(Appendix_product_arr);
		pd.doUnwHistRule(unw_hist_rule_arr); 
		pd.doUnwHistMedSum(unw_hist_med_sum_arr); 
		pd.doUnwHistMedSumDet(unw_hist_med_sum_det_arr); 
		pd.doUnwHistExistProd(unwHistExistProd_arr); 
		pd.doUnderwrite(setunderwrite); 
		pd.doUnwRiderLimit(arr_unw_rider_limit); 
		if (unw_cocredit_limit_jsonarr.length() > 0) {
			pd.doUnwCocreditLimit(unw_cocredit_limit_arr); 
		}
		pd.doUnwSubstdType(unw_substd_type_arr); 
		pd.doFlpFee(flp_fee_arr); 	
		pd.doParticipant(participant_arr); 
		pd.doUnwPolIssueUnit(pol_issue_unit_arr);  
		pd.doOcc(doOcc_arr); 
		
		pd.doUnwAccountRule(unwAccumRule_arr); //ลงได้แต่ต้องแก้ไข 3ฟิว
	
	////Benz 11-09-2019 New set Status
					WorkFlowProduct wfd = new WorkFlowProduct();
					ArrayList<Product_task> arr_getProduct_task = wfd.searchProductTask();
					Product_task  setprotask = new Product_task();
					if (groupName.equals("POC (1740)") || 
							groupName.equals("POC_Test")) 
					{
						for (int i = 0; i < arr_getProduct_task.size(); i++) {
							if ((arr_getProduct_task.get(i).getDepartment().equals("POC (1740)") || 
									arr_getProduct_task.get(i).getDepartment().equals("POC_Test")) && 
									(!arr_getProduct_task.get(i).getApprove_status().equals("APPROVE"))) {
								setprotask =   arr_getProduct_task.get(i);
								setprotask.setPrd_code(prd_code);
								setprotask.setApprove_status("UPDATE");
								setprotask.setUser_code(userId);
								setprotask.setUpdate_time(PDFFnc.currentTimeStamp());
								wfd.doProductTask(setprotask);
							}
						}
					}else {
						for (int i = 0; i < arr_getProduct_task.size(); i++) {
							if ((arr_getProduct_task.get(i).getDepartment().equals("PD") || 
									arr_getProduct_task.get(i).getDepartment().equals("PD_Test") ||
									arr_getProduct_task.get(i).getDepartment().equals("PD2")) && 
									(!arr_getProduct_task.get(i).getApprove_status().equals("APPROVE"))) {
								setprotask =   arr_getProduct_task.get(i);
								setprotask.setPrd_code(prd_code);
								setprotask.setApprove_status("UPDATE");
								setprotask.setUser_code(userId);
								setprotask.setUpdate_time(PDFFnc.currentTimeStamp());
								wfd.doProductTask(setprotask);
							}
						}
					}
		return "save_Tab_Provision";
	}
	////////////////////////////////
	/////////////////////////////
	public String detract(HttpServletRequest request, HttpServletResponse response) throws Exception 
	{
		try {
			String prd_rider_code = request.getParameter("prd_rider_code");
			JSONArray jsonArr_policy_changeType		= new JSONArray(prd_rider_code);
			String[] arr_str = new String[jsonArr_policy_changeType.length()]; 
			for (int i = 0; i < jsonArr_policy_changeType.length(); i++) {
				JSONObject jsonObj_policy_changeType = jsonArr_policy_changeType.getJSONObject(i);
				arr_str[i] = jsonObj_policy_changeType.getString("prd_rider_code");
				
			}
			ProductDetract pd = new ProductDetract();
			pd.detract(arr_str);
			
			/*String[] listprd_rider_code 		= new String[arr_str.length]; 
			for (int i = 0; i < arr_str.length; i++)
	        {	
				listprd_rider_code[i] 		= arr_str[i].toString();
				System.out.println("------------/"+arr_str[i].toString());
	        }*/
			
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return  "delete";
	}
	/////////////////////////////
	public String check_Approved(HttpServletRequest request, HttpServletResponse response) throws Exception 
	{
		String passInsurance = request.getParameter("passInsurance");
		String remark_noApproved = request.getParameter("remark_noApproved");
		String remark_update = request.getParameter("remark_update");
		ProductData cd = new ProductData();
		Product setProduct = cd.searchProduct(passInsurance);
		String status = request.getParameter("status");
		String setstatus = "";
		String groupName 			= request.getParameter("groupName");
		ConstantValues.GROUP_NAME 	= groupName;
		ConstantValues.PRD_CODE			= passInsurance;

		if (status.equals("request_for_approve")) {
			setstatus = "REQUEST_FOR_APPROVE";
			//// Benz 11-09-2019
			if (groupName.equals("POC (1740)") || groupName.equals("POC_Test")) 
			{
				WorkFlowProduct		wfp	= new WorkFlowProduct();
				ArrayList<Product_task> arr_getProduct_task = wfp.searchProductTask();
				Product_task setprotask = new Product_task();
				for (int i = 0; i < arr_getProduct_task.size(); i++) {
					if (arr_getProduct_task.get(i).getDepartment().equals("POC (1740)") || 
						arr_getProduct_task.get(i).getDepartment().equals("POC_Test")) {
						setprotask = arr_getProduct_task.get(i);
						setprotask.setPrd_code(passInsurance);
						setprotask.setDepartment(groupName);
						setprotask.setApprove_status(setstatus);
						setprotask.setUser_code(userId);
						setprotask.setUpdate_time(PDFFnc.currentTimeStamp());
					}
				}
				wfp.doProductTask(setprotask);
				///////////// set Status TO coverage.coverage
				setProduct.setStatus(setstatus);
				setProduct.setUser_code(userId);
				setProduct.setUpdate_time(PDFFnc.currentTimeStamp());

				ProductBasicinfo setProductData = new ProductBasicinfo ();
				setProductData.doProduct(setProduct, null);
				///////////// set Status TO coverage_request
				ArrayList<Product_request> arr_getProduct_request = wfp.searchProductRequest();
				int row = arr_getProduct_request.size();
				if (row == 0) {
					row = 1;
				} else {
					row = row + 1;
				}
				Product_request setprorequest = new Product_request();
				setprorequest.setPrd_code(passInsurance);
				setprorequest.setSeq(row);
				setprorequest.setRequest_status("REQUEST");
				setprorequest.setRequest_type("A");
				setprorequest.setRequest_user_code(userId);
				setprorequest.setRequest_time(PDFFnc.currentTimeStamp());
				wfp.doProductRequest(setprorequest);
			} else {
				///////////// set Status TO Coverage_task
					WorkFlowProduct		wfp	= new WorkFlowProduct();
					ArrayList<Product_task> arr_getProduct_task = wfp.searchProductTask();
					Product_task setprotask = null;
					for (int i = 0; i < arr_getProduct_task.size(); i++) {
						if (arr_getProduct_task.get(i).getDepartment().equals("PD") || 
								arr_getProduct_task.get(i).getDepartment().equals("PD_Test") ||
								arr_getProduct_task.get(i).getDepartment().equals("PD2")) {
							setprotask = arr_getProduct_task.get(i);
							setprotask.setPrd_code(passInsurance);
							setprotask.setDepartment(groupName);
							setprotask.setApprove_status(setstatus);
							setprotask.setUser_code(userId);
							setprotask.setUpdate_time(PDFFnc.currentTimeStamp());
						}
					}
					wfp.doProductTask(setprotask);
					///////////// set Status TO coverage_request
					ArrayList<Product_request> arr_getProduct_request = wfp.searchProductRequest();
					int row = arr_getProduct_request.size();
					if (row == 0) {
						row = 1;
					} else {
						row = row + 1;
					}
					Product_request setprorequest = new Product_request();
					setprorequest.setPrd_code(passInsurance);
					setprorequest.setSeq(row);
					setprorequest.setRequest_status("REQUEST");
					setprorequest.setRequest_type("A");
					setprorequest.setRequest_user_code(userId);
					setprorequest.setRequest_time(PDFFnc.currentTimeStamp());
					wfp.doProductRequest(setprorequest);
			}

		} else if (status.equals("approved")) {
			setstatus = "APPROVED";
			//// Benz 11-09-2019v
			if (groupName.equals("POC (1740)") || groupName.equals("POC_Test")) 
			{

				WorkFlowProduct		wfp	= new WorkFlowProduct();
				ArrayList<Product_task> arr_getProduct_task = wfp.searchProductTask();
				Product_task setprotask = new Product_task();
				
				
				for (int i = 0; i < arr_getProduct_task.size(); i++) {
					if ((arr_getProduct_task.get(i).getDepartment().equals("POC (1740)") || 
							arr_getProduct_task.get(i).getDepartment().equals("POC_Test"))
							&& arr_getProduct_task.get(i).getApprove_status().equals("REQUEST_UPDATE")) {
						setprotask = arr_getProduct_task.get(i);
						setprotask.setPrd_code(passInsurance);
						setprotask.setDepartment(groupName);
						setprotask.setApprove_status("UPDATE");
						setprotask.setUser_code(userId);
						setprotask.setUpdate_time(PDFFnc.currentTimeStamp());
					} else if ((arr_getProduct_task.get(i).getDepartment().equals("POC (1740)") || 
							arr_getProduct_task.get(i).getDepartment().equals("POC_Test"))
							&& !arr_getProduct_task.get(i).getApprove_status().equals("REQUEST_UPDATE")) {
						setprotask = arr_getProduct_task.get(i);
						setprotask.setPrd_code(passInsurance);
						setprotask.setDepartment(groupName);
						setprotask.setApprove_status(setstatus);
						setprotask.setUser_code(userId);
						setprotask.setUpdate_time(PDFFnc.currentTimeStamp());
					}
				}
				wfp.doProductTask(setprotask);
				///////////// set Status TO coverage.coverage
				setProduct.setStatus(setstatus);
				setProduct.setUser_code(userId);
				setProduct.setUpdate_time(PDFFnc.currentTimeStamp());

				ProductBasicinfo setProductData = new ProductBasicinfo ();
				setProductData.doProduct(setProduct, null);
				///////////// set Status TO coverage_request
				ArrayList<Product_request> arr_getProduct_request = wfp.searchProductRequest();
				Product_request setprorequest = null;
				for (int i = 0; i < arr_getProduct_request.size(); i++) {
					if (arr_getProduct_request.get(i).getRequest_status().equals("REQUEST")
							&& arr_getProduct_request.get(i).getRequest_type().equals("A")) {
						setprorequest = arr_getProduct_request.get(i);
						setprorequest.setSeq(arr_getProduct_request.get(i).getSeq());
						setprorequest.setRequest_status("APPROVE");
						setprorequest.setRequest_type("A");
						setprorequest.setResponse_user_code(userId);
						setprorequest.setResponse_time(PDFFnc.currentTimeStamp());
						setprorequest.setRequest_user_code(arr_getProduct_request.get(i).getRequest_user_code());
						setprorequest.setRequest_time(arr_getProduct_request.get(i).getRequest_time());
					} else if (arr_getProduct_request.get(i).getRequest_status().equals("REQUEST")
							&& arr_getProduct_request.get(i).getRequest_type().equals("E")) {
						setprorequest = arr_getProduct_request.get(i);
						setprorequest.setSeq(arr_getProduct_request.get(i).getSeq());
						setprorequest.setRequest_status("APPROVE");
						setprorequest.setRequest_type("E");
						setprorequest.setResponse_user_code(userId);
						setprorequest.setResponse_time(PDFFnc.currentTimeStamp());
						setprorequest.setRequest_user_code(arr_getProduct_request.get(i).getRequest_user_code());
						setprorequest.setRequest_time(arr_getProduct_request.get(i).getRequest_time());
					}
				}
				wfp.doProductRequest(setprorequest);
			} else {
	///////////// set Status TO Coverage_task
					WorkFlowProduct		wfp	= new WorkFlowProduct();
					ArrayList<Product_task> arr_getProduct_task = wfp.searchProductTask();
					Product_task setprotask = null;
					for (int i = 0; i < arr_getProduct_task.size(); i++) {
						if ((arr_getProduct_task.get(i).getDepartment().equals("PD") || 
								arr_getProduct_task.get(i).getDepartment().equals("PD_Test") ||
								arr_getProduct_task.get(i).getDepartment().equals("PD2"))
								&& arr_getProduct_task.get(i).getApprove_status().equals("REQUEST_UPDATE")) {
							setprotask = arr_getProduct_task.get(i);
							setprotask.setPrd_code(passInsurance);
							setprotask.setDepartment(groupName);
							setprotask.setApprove_status("UPDATE");
							setprotask.setUser_code(userId);
							setprotask.setUpdate_time(PDFFnc.currentTimeStamp());
						} else if ((arr_getProduct_task.get(i).getDepartment().equals("PD") || 
								arr_getProduct_task.get(i).getDepartment().equals("PD_Test") ||
								arr_getProduct_task.get(i).getDepartment().equals("PD2"))
								&& !arr_getProduct_task.get(i).getApprove_status().equals("REQUEST_UPDATE")) {
							setprotask = arr_getProduct_task.get(i);
							setprotask.setPrd_code(passInsurance);
							setprotask.setDepartment(groupName);
							setprotask.setApprove_status(setstatus);
							setprotask.setUser_code(userId);
							setprotask.setUpdate_time(PDFFnc.currentTimeStamp());
						}
					}
					wfp.doProductTask(setprotask);
					///////////// set Status TO coverage_request
					ArrayList<Product_request> arr_getProduct_request = wfp.searchProductRequest();
					Product_request setprorequest = null;
					for (int i = 0; i < arr_getProduct_request.size(); i++) {
						if (arr_getProduct_request.get(i).getRequest_status().equals("REQUEST")
								&& arr_getProduct_request.get(i).getRequest_type().equals("A")) {
							setprorequest = arr_getProduct_request.get(i);
							setprorequest.setSeq(arr_getProduct_request.get(i).getSeq());
							setprorequest.setRequest_status("APPROVE");
							setprorequest.setRequest_type("A");
							setprorequest.setResponse_user_code(userId);
							setprorequest.setResponse_time(PDFFnc.currentTimeStamp());
							setprorequest.setRequest_user_code(arr_getProduct_request.get(i).getRequest_user_code());
							setprorequest.setRequest_time(arr_getProduct_request.get(i).getRequest_time());
						} else if (arr_getProduct_request.get(i).getRequest_status().equals("REQUEST")
								&& arr_getProduct_request.get(i).getRequest_type().equals("E")) {
							setprorequest = arr_getProduct_request.get(i);
							setprorequest.setSeq(arr_getProduct_request.get(i).getSeq());
							setprorequest.setRequest_status("APPROVE");
							setprorequest.setRequest_type("E");
							setprorequest.setResponse_user_code(userId);
							setprorequest.setResponse_time(PDFFnc.currentTimeStamp());
							setprorequest.setRequest_user_code(arr_getProduct_request.get(i).getRequest_user_code());
							setprorequest.setRequest_time(arr_getProduct_request.get(i).getRequest_time());
						}
					}
					wfp.doProductRequest(setprorequest);
			}
		} else if (status.equals("approved_update")) {
			setstatus = "APPROVED";
			//// Benz 11-09-2019v
			if (groupName.equals("POC (1740)") || groupName.equals("POC_Test")) 
			{
				WorkFlowProduct		wfp	= new WorkFlowProduct();
				ArrayList<Product_task> arr_getProduct_task = wfp.searchProductTask();
				Product_task setprotask = new Product_task();
				
				
				for (int i = 0; i < arr_getProduct_task.size(); i++) {
					if ((arr_getProduct_task.get(i).getDepartment().equals("POC (1740)") || 
							arr_getProduct_task.get(i).getDepartment().equals("POC_Test"))
							&& arr_getProduct_task.get(i).getApprove_status().equals("REQUEST_UPDATE")) {
						setprotask = arr_getProduct_task.get(i);
						setprotask.setPrd_code(passInsurance);
						setprotask.setDepartment(groupName);
						setprotask.setApprove_status(setstatus);
						setprotask.setUser_code(userId);
						setprotask.setUpdate_time(PDFFnc.currentTimeStamp());
					} else if ((arr_getProduct_task.get(i).getDepartment().equals("POC (1740)") || 
							arr_getProduct_task.get(i).getDepartment().equals("POC_Test"))
							&& !arr_getProduct_task.get(i).getApprove_status().equals("REQUEST_UPDATE")) {
						setprotask = arr_getProduct_task.get(i);
						setprotask.setPrd_code(passInsurance);
						setprotask.setDepartment(groupName);
						setprotask.setApprove_status(setstatus);
						setprotask.setUser_code(userId);
						setprotask.setUpdate_time(PDFFnc.currentTimeStamp());
					}
				}
				wfp.doProductTask(setprotask);
				///////////// set Status TO coverage.coverage
				setProduct.setStatus(setstatus);
				setProduct.setUser_code(userId);
				setProduct.setUpdate_time(PDFFnc.currentTimeStamp());

				ProductBasicinfo setProductData = new ProductBasicinfo ();
				setProductData.doProduct(setProduct, null);
				///////////// set Status TO coverage_request
				ArrayList<Product_request> arr_getProduct_request = wfp.searchProductRequest();
				Product_request setprorequest = null;
				for (int i = 0; i < arr_getProduct_request.size(); i++) {
					if (arr_getProduct_request.get(i).getRequest_status().equals("REQUEST")
							&& arr_getProduct_request.get(i).getRequest_type().equals("A")) {
						setprorequest = arr_getProduct_request.get(i);
						setprorequest.setSeq(arr_getProduct_request.get(i).getSeq());
						setprorequest.setRequest_status("REJECT");
						setprorequest.setRequest_type("A");
						setprorequest.setResponse_user_code(userId);
						setprorequest.setResponse_time(PDFFnc.currentTimeStamp());
						setprorequest.setRequest_user_code(arr_getProduct_request.get(i).getRequest_user_code());
						setprorequest.setRequest_time(arr_getProduct_request.get(i).getRequest_time());
						setprorequest.setResponse_note(remark_noApproved);

					} else if (arr_getProduct_request.get(i).getRequest_status().equals("REQUEST")
							&& arr_getProduct_request.get(i).getRequest_type().equals("E")) {
						setprorequest = arr_getProduct_request.get(i);
						setprorequest.setSeq(arr_getProduct_request.get(i).getSeq());
						setprorequest.setRequest_status("REJECT");
						setprorequest.setRequest_type("E");
						setprorequest.setResponse_user_code(userId);
						setprorequest.setResponse_time(PDFFnc.currentTimeStamp());
						setprorequest.setRequest_user_code(arr_getProduct_request.get(i).getRequest_user_code());
						setprorequest.setRequest_time(arr_getProduct_request.get(i).getRequest_time());
						setprorequest.setResponse_note(remark_noApproved);

					}
				}
				wfp.doProductRequest(setprorequest);
			} else {

				///////////// set Status TO Coverage_task
				WorkFlowProduct		wfp	= new WorkFlowProduct();
				ArrayList<Product_task> arr_getProduct_task = wfp.searchProductTask();
				Product_task setprotask = null;
				for (int i = 0; i < arr_getProduct_task.size(); i++) {
					if ((arr_getProduct_task.get(i).getDepartment().equals("PD") || 
							arr_getProduct_task.get(i).getDepartment().equals("PD_Test") ||
							arr_getProduct_task.get(i).getDepartment().equals("PD2"))
							&& arr_getProduct_task.get(i).getApprove_status().equals("REQUEST_UPDATE")) {
						setprotask = arr_getProduct_task.get(i);
						setprotask.setPrd_code(passInsurance);
						setprotask.setDepartment(groupName);
						setprotask.setApprove_status(setstatus);
						setprotask.setUser_code(userId);
						setprotask.setUpdate_time(PDFFnc.currentTimeStamp());
					} else if ((arr_getProduct_task.get(i).getDepartment().equals("PD") || 
							arr_getProduct_task.get(i).getDepartment().equals("PD_Test") ||
							arr_getProduct_task.get(i).getDepartment().equals("PD2"))
							&& !arr_getProduct_task.get(i).getApprove_status().equals("REQUEST_UPDATE")) {
						setprotask = arr_getProduct_task.get(i);
						setprotask.setPrd_code(passInsurance);
						setprotask.setDepartment(groupName);
						setprotask.setApprove_status(setstatus);
						setprotask.setUser_code(userId);
						setprotask.setUpdate_time(PDFFnc.currentTimeStamp());
					}
				}
				wfp.doProductTask(setprotask);
				
				///////////// set Status TO coverage_request
				ArrayList<Product_request> arr_getProduct_request = wfp.searchProductRequest();
				Product_request setprorequest = null;
				for (int i = 0; i < arr_getProduct_request.size(); i++) {
					if (arr_getProduct_request.get(i).getRequest_status().equals("REQUEST")
							&& arr_getProduct_request.get(i).getRequest_type().equals("A")) {
						setprorequest = arr_getProduct_request.get(i);
						setprorequest.setSeq(arr_getProduct_request.get(i).getSeq());
						setprorequest.setRequest_status("REJECT");
						setprorequest.setRequest_type("A");
						setprorequest.setResponse_user_code(userId);
						setprorequest.setResponse_time(PDFFnc.currentTimeStamp());
						setprorequest.setRequest_user_code(arr_getProduct_request.get(i).getRequest_user_code());
						setprorequest.setRequest_time(arr_getProduct_request.get(i).getRequest_time());
						setprorequest.setResponse_note(remark_noApproved);

					} else if (arr_getProduct_request.get(i).getRequest_status().equals("REQUEST")
							&& arr_getProduct_request.get(i).getRequest_type().equals("E")) {
						setprorequest = arr_getProduct_request.get(i);
						setprorequest.setSeq(arr_getProduct_request.get(i).getSeq());
						setprorequest.setRequest_status("REJECT");
						setprorequest.setRequest_type("E");
						setprorequest.setResponse_user_code(userId);
						setprorequest.setResponse_time(PDFFnc.currentTimeStamp());
						setprorequest.setRequest_user_code(arr_getProduct_request.get(i).getRequest_user_code());
						setprorequest.setRequest_time(arr_getProduct_request.get(i).getRequest_time());
						setprorequest.setResponse_note(remark_noApproved);
					}
				}
				wfp.doProductRequest(setprorequest);
			}
		} else if (status.equals("rejected")) {
			setstatus = "REJECTED";
			//// Benz 11-09-2019
			if (groupName.equals("POC (1740)") || groupName.equals("POC_Test")) 
			{
				WorkFlowProduct		wfp	= new WorkFlowProduct();
				ArrayList<Product_task> arr_getProduct_task = wfp.searchProductTask();
				Product_task setprotask = null;
				
				for (int i = 0; i < arr_getProduct_task.size(); i++) {
					if (arr_getProduct_task.get(i).getDepartment().equals("POC (1740)") || 
							arr_getProduct_task.get(i).getDepartment().equals("POC_Test")) {
						setprotask = arr_getProduct_task.get(i);
						setprotask.setPrd_code(passInsurance);
						setprotask.setDepartment(groupName);
						setprotask.setApprove_status(setstatus);
						setprotask.setUser_code(userId);
						setprotask.setUpdate_time(PDFFnc.currentTimeStamp());
					}
				}
				wfp.doProductTask(setprotask);
				///////////// set Status TO coverage.coverage
				setProduct.setStatus(setstatus);
				setProduct.setUser_code(userId);
				setProduct.setUpdate_time(PDFFnc.currentTimeStamp());

				ProductBasicinfo setProductData = new ProductBasicinfo ();
				setProductData.doProduct(setProduct, null);
				///////////// set Status TO coverage_request
				ArrayList<Product_request> arr_getProduct_request = wfp.searchProductRequest();
				Product_request setprorequest = null;
				
				for (int i = 0; i < arr_getProduct_request.size(); i++) {
					if (arr_getProduct_request.get(i).getRequest_status().equals("REQUEST")) {
						setprorequest = arr_getProduct_request.get(i);
						setprorequest.setSeq(arr_getProduct_request.get(i).getSeq());
						setprorequest.setRequest_status("REJECT");
						setprorequest.setRequest_type("A");
						setprorequest.setResponse_user_code(userId);
						setprorequest.setResponse_time(PDFFnc.currentTimeStamp());
						setprorequest.setRequest_user_code(arr_getProduct_request.get(i).getRequest_user_code());
						setprorequest.setRequest_time(arr_getProduct_request.get(i).getRequest_time());
						setprorequest.setResponse_note(remark_noApproved);
					}
				}
				wfp.doProductRequest(setprorequest);
			} else {

				///////////// set Status TO Coverage_task
				WorkFlowProduct		wfp	= new WorkFlowProduct();
				ArrayList<Product_task> arr_getProduct_task = wfp.searchProductTask();
				Product_task setprotask = null;
				for (int i = 0; i < arr_getProduct_task.size(); i++) {
					if (arr_getProduct_task.get(i).getDepartment().equals("PD") || 
							arr_getProduct_task.get(i).getDepartment().equals("PD_Test") ||
							arr_getProduct_task.get(i).getDepartment().equals("PD2")) {
						setprotask = arr_getProduct_task.get(i);
						setprotask.setPrd_code(passInsurance);
						setprotask.setDepartment(groupName);
						setprotask.setApprove_status(setstatus);
						setprotask.setUser_code(userId);
						setprotask.setUpdate_time(PDFFnc.currentTimeStamp());
					}
				}
				wfp.doProductTask(setprotask);
				///////////// set Status TO coverage_request
				ArrayList<Product_request> arr_getProduct_request = wfp.searchProductRequest();
				Product_request setprorequest = null;
				
				for (int i = 0; i < arr_getProduct_request.size(); i++) {
					if (arr_getProduct_request.get(i).getRequest_status().equals("REQUEST")) {
						setprorequest = arr_getProduct_request.get(i);
						setprorequest.setSeq(arr_getProduct_request.get(i).getSeq());
						setprorequest.setRequest_status("REJECT");
						setprorequest.setRequest_type("A");
						setprorequest.setResponse_user_code(userId);
						setprorequest.setResponse_time(PDFFnc.currentTimeStamp());
						setprorequest.setRequest_user_code(arr_getProduct_request.get(i).getRequest_user_code());
						setprorequest.setRequest_time(arr_getProduct_request.get(i).getRequest_time());
						setprorequest.setResponse_note(remark_noApproved);
					}
				}

				wfp.doProductRequest(setprorequest);
			}

		} else if (status.equals("request_update")) {
			setstatus = "REQUEST_UPDATE";

			//// Benz 11-09-2019
			if (groupName.equals("POC (1740)") || groupName.equals("POC_Test")) 
			{

				WorkFlowProduct		wfp	= new WorkFlowProduct();
				ArrayList<Product_task> arr_getProduct_task = wfp.searchProductTask();
				Product_task setprotask = null;
				
				for (int i = 0; i < arr_getProduct_task.size(); i++) {
					if (arr_getProduct_task.get(i).getDepartment().equals("POC (1740)") || 
							arr_getProduct_task.get(i).getDepartment().equals("POC_Test")) {
						setprotask = arr_getProduct_task.get(i);
						setprotask.setPrd_code(passInsurance);
						setprotask.setDepartment(groupName);
						setprotask.setApprove_status(setstatus);
						setprotask.setUser_code(userId);
						setprotask.setUpdate_time(PDFFnc.currentTimeStamp());
					}
				}
				wfp.doProductTask(setprotask);
				///////////// set Status TO coverage.coverage
				setProduct.setStatus(setstatus);
				setProduct.setUser_code(userId);
				setProduct.setUpdate_time(PDFFnc.currentTimeStamp());

				ProductBasicinfo setProductData = new ProductBasicinfo ();
				setProductData.doProduct(setProduct, null);
				///////////// set Status TO coverage_request
				ArrayList<Product_request> arr_getProduct_request = wfp.searchProductRequest();
				int row = arr_getProduct_request.size();
				if (row == 0) {
					row = 1;
				} else {
					row = row + 1;
				}
				Product_request setprorequest = new Product_request();
				setprorequest.setPrd_code(passInsurance);
				setprorequest.setSeq(row);
				setprorequest.setRequest_status("REJECT");
				setprorequest.setRequest_type("E");
				setprorequest.setRequest_user_code(userId);
				setprorequest.setRequest_time(PDFFnc.currentTimeStamp());
				setprorequest.setRequest_note(remark_update);
				wfp.doProductRequest(setprorequest);
			} else {

				///////////// set Status TO Coverage_task
				WorkFlowProduct		wfp	= new WorkFlowProduct();
				ArrayList<Product_task> arr_getProduct_task = wfp.searchProductTask();
				Product_task setprotask = null;
				
				for (int i = 0; i < arr_getProduct_task.size(); i++) {
					if (arr_getProduct_task.get(i).getDepartment().equals("PD") || 
							arr_getProduct_task.get(i).getDepartment().equals("PD_Test") ||
							arr_getProduct_task.get(i).getDepartment().equals("PD2")) {
						setprotask = arr_getProduct_task.get(i);
						setprotask.setPrd_code(passInsurance);
						setprotask.setDepartment(groupName);
						setprotask.setApprove_status(setstatus);
						setprotask.setUser_code(userId);
						setprotask.setUpdate_time(PDFFnc.currentTimeStamp());
					}
				}
				wfp.doProductTask(setprotask);
				///////////// set Status TO coverage_request
				ArrayList<Product_request> arr_getProduct_request = wfp.searchProductRequest();
				int row = arr_getProduct_request.size();
				if (row == 0) {
					row = 1;
				} else {
					row = row + 1;
				}
				Product_request setprorequest = new Product_request();
				setprorequest.setPrd_code(passInsurance);
				setprorequest.setSeq(row);
				setprorequest.setRequest_status("REJECT");
				setprorequest.setRequest_type("E");
				setprorequest.setRequest_user_code(userId);
				setprorequest.setRequest_time(PDFFnc.currentTimeStamp());
				setprorequest.setRequest_note(remark_update);
				wfp.doProductRequest(setprorequest);
			}
		} else if (status.equals("update")) {
			setstatus = "UPDATE";

			//// Benz 11-09-2019
			if (groupName.equals("POC (1740)") || groupName.equals("POC_Test")) 
			{
				WorkFlowProduct		wfp	= new WorkFlowProduct();
				ArrayList<Product_task> arr_getProduct_task = wfp.searchProductTask();
				Product_task setprotask = null;
				for (int i = 0; i < arr_getProduct_task.size(); i++) {
					if (arr_getProduct_task.get(i).getDepartment().equals("POC (1740)") || 
							arr_getProduct_task.get(i).getDepartment().equals("POC_Test")) {
						setprotask = arr_getProduct_task.get(i);
						setprotask.setPrd_code(passInsurance);
						setprotask.setDepartment(groupName);
						setprotask.setApprove_status(setstatus);
						setprotask.setUser_code(userId);
						setprotask.setUpdate_time(PDFFnc.currentTimeStamp());
					}
				}
				wfp.doProductTask(setprotask);
				///////////// set Status TO coverage.coverage
				setProduct.setStatus(setstatus);
				setProduct.setUser_code(userId);
				setProduct.setUpdate_time(PDFFnc.currentTimeStamp());

				ProductBasicinfo setProductData = new ProductBasicinfo ();
				setProductData.doProduct(setProduct, null);
				///////////// set Status TO coverage_request
				ArrayList<Product_request> arr_getProduct_request = wfp.searchProductRequest();
				Product_request setprorequest = null;
				for (int i = 0; i < arr_getProduct_request.size(); i++) {
					if (arr_getProduct_request.get(i).getRequest_status().equals("REQUEST")
							&& arr_getProduct_request.get(i).getRequest_type().equals("E")) {
						setprorequest = arr_getProduct_request.get(i);
						setprorequest.setSeq(arr_getProduct_request.get(i).getSeq());
						setprorequest.setRequest_status("APPROVE");
						setprorequest.setRequest_type("E");
						setprorequest.setResponse_user_code(userId);
						setprorequest.setResponse_time(PDFFnc.currentTimeStamp());
						setprorequest.setRequest_user_code(arr_getProduct_request.get(i).getRequest_user_code());
						setprorequest.setRequest_time(arr_getProduct_request.get(i).getRequest_time());
					}
				}
				wfp.doProductRequest(setprorequest);
			} else {

				///////////// set Status TO Coverage_task
				WorkFlowProduct		wfp	= new WorkFlowProduct();
				ArrayList<Product_task> arr_getProduct_task = wfp.searchProductTask();
				Product_task setprotask = null;
				for (int i = 0; i < arr_getProduct_task.size(); i++) {
					if (arr_getProduct_task.get(i).getDepartment().equals("PD") || 
							arr_getProduct_task.get(i).getDepartment().equals("PD_Test") ||
							arr_getProduct_task.get(i).getDepartment().equals("PD2")) {
						setprotask = arr_getProduct_task.get(i);
						setprotask.setPrd_code(passInsurance);
						setprotask.setDepartment(groupName);
						setprotask.setApprove_status(setstatus);
						setprotask.setUser_code(userId);
						setprotask.setUpdate_time(PDFFnc.currentTimeStamp());
					}
				}
				wfp.doProductTask(setprotask);
				///////////// set Status TO coverage_request
				ArrayList<Product_request> arr_getProduct_request = wfp.searchProductRequest();
				Product_request setprorequest = null;
				
				for (int i = 0; i < arr_getProduct_request.size(); i++) {
					if (arr_getProduct_request.get(i).getRequest_status().equals("REQUEST")
							&& arr_getProduct_request.get(i).getRequest_type().equals("E")) {
						setprorequest = arr_getProduct_request.get(i);
						setprorequest.setSeq(arr_getProduct_request.get(i).getSeq());
						setprorequest.setRequest_status("APPROVE");
						setprorequest.setRequest_type("E");
						setprorequest.setResponse_user_code(userId);
						setprorequest.setResponse_time(PDFFnc.currentTimeStamp());
						setprorequest.setRequest_user_code(arr_getProduct_request.get(i).getRequest_user_code());
						setprorequest.setRequest_time(arr_getProduct_request.get(i).getRequest_time());
					}
				}
				wfp.doProductRequest(setprorequest);
			}
		}
		return "check_Approved";
	}
	
	
	private Date getData(String date)  throws Exception
	{
		if(date.isEmpty())
			return null;
		return PDFFnc.getSqlDate(PDFFnc.changeToYYYYMMDD(date));
	}
	
	private Timestamp getCurrentTimestamp() throws Exception
	{
		return PDFFnc.currentTimeStamp();
	}
	
	private BigDecimal covertStringtoBigDecimal(String in) {
		in = new java.math.BigDecimal(in).stripTrailingZeros().toPlainString();
		BigDecimal bigDecimalCurrency = null;
		in = in.trim();
		if(!in.equalsIgnoreCase("NULL")) {
			bigDecimalCurrency = new BigDecimal(in);
		}else {
			bigDecimalCurrency = new BigDecimal(0);
		}
		return bigDecimalCurrency;
	}
	
}
