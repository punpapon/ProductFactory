package servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.math.BigDecimal;
import java.sql.Date;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Calendar;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.poi.hssf.util.HSSFColor.BLACK;
import org.json.JSONArray;
import org.json.JSONObject;

import layout.bean.productfac.product.Flp_fee;
import layout.bean.productfac.product.Formula;
import layout.bean.productfac.product.Limit_cond;
import layout.bean.productfac.product.Limit_cond_amt;
import layout.bean.productfac.product.Limit_cond_serie;
import layout.bean.productfac.product.Mode;
import layout.bean.productfac.product.Occ;
import layout.bean.productfac.product.Participant;
import layout.bean.productfac.product.Prem_collect;
import layout.bean.productfac.product.Product;
import layout.bean.productfac.product.Product_change;
import layout.bean.productfac.product.Rate_layout;
import layout.bean.productfac.product.Rider;
import layout.bean.productfac.product.Sale_compensation_cond;
import layout.bean.productfac.product.Sale_compensation_detail;
import layout.bean.productfac.product.Sale_compensation_serie;
import layout.bean.productfac.product.Underwrite;
import layout.bean.productfac.product.Unw_accum_rule;
import layout.bean.productfac.product.Unw_accum_rule_exclude;
import layout.bean.productfac.product.Unw_hist_exist_prod;
import layout.bean.productfac.product.Unw_hist_rule;
import layout.bean.productfac.product.Unw_pol_issue_unit;
import layout.bean.productfac.product.Unw_rider_limit;
import layout.bean.productfac.product.Unw_sum_range;
import layout.bean.productfac.underwrite.Appendix_product;
import layout.bean.productfac.workflow.Product_request;
import layout.bean.productfac.workflow.Product_task;
import service.FreezePolicyValue;
import service.MainInsuranceService;
import service.ProductOL_SaveData_Service;
import service.center.WorkFlowProduct;
import service.ctrl.ParticipantData;
import service.ctrl.ProductData;
import service.fnc.ConstantValues;
import service.fnc.PDFFnc;
import service.product.PorductProvision;
import service.product.ProductAccesData;
import service.product.ProductBasicinfo;
import service.product.ProductCalPremium;
import service.product.ProductDetract;
import service.product.ProductGrantRightsInsure;
import service.product.SaleCompensationCondData;
import service.product.SaleCompensationDetailData;
import service.product.SaleCompensationSerieData;
import service.product.UnwAccumRuleExcludeData;
import service.product.UnwSumRangeData;
import service.product.ctrl.ParticipantControlData;
import service.product.ctrl.PremCollectControlData;
import service.product.ctrl.ProductControlData;
import service.product.ctrl.UnderwriteControlData;
import utility.support.DateInfo;

/**
 * Servlet implementation class ProductBasePlanOL_SaveData_Servlet
 */
@WebServlet("/ProductBasePlanOL_SaveData_Servlet")
public class ProductBasePlanOL_SaveData_Servlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	ProductAccesData pim;
	private String userId;
	String responseText = "";   
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ProductBasePlanOL_SaveData_Servlet() {
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
		// TODO Auto-generated method stub

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
				System.out.println("======= Save ProductBasePlan ======"); 
				
				try {
					//***Benz Test Postman
					//responseText = save_Tab_Provision(request, response);
					
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
					}else if (request.getParameter("method").equals("Tab_Policy")) {
						responseText = save_Tab_Policy(request, response);
					}else if (request.getParameter("method").equals("check_Approved")) {
						responseText = check_Approved(request, response);
					}else if (request.getParameter("method").equals("detract")) {
						responseText = detract(request, response);
					}
					out.print(responseText);
				} catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
	}
	
	public String save_Basic_Info(HttpServletRequest request, HttpServletResponse response) throws Exception {
		try {
			ProductOL_SaveData_Service settoService = new ProductOL_SaveData_Service ();
			String prd_code    			= request.getParameter("prd_code");
			String groupName    		= request.getParameter("groupName");
			ConstantValues.GROUP_NAME 	= groupName;
			ArrayList<Product> lstProduct = new ArrayList<>();
			ConstantValues.PRD_CODE = prd_code;
			ArrayList<Rider> lstRider = new ArrayList<>();
			ArrayList<Rate_layout> lstRateLayout = new ArrayList<>();
			String baseplan_str = request.getParameter("base_plan");
			JSONArray jsonArr_baseplan = new JSONArray(baseplan_str);
			ProductControlData getpcd 		= new ProductControlData();
			ArrayList<Product> arr_Product 	= getpcd.searchProduct(prd_code);
			 for (int i = 0; i < jsonArr_baseplan.length(); i++) {
				 JSONObject jsonObj_baseplan = jsonArr_baseplan.getJSONObject(i);
				 if(jsonObj_baseplan.getBoolean("primary") == true) {
					 Rider rider = new Rider();
					 rider.setPrd_code(prd_code);
					 rider.setPrd_rider_code(jsonObj_baseplan.getString("prd_rider_code"));		
					 rider.setMain_rider_code(null);
					 rider.setFlag_type("B");
					 rider.setSelect_rule("NONE");
					if (!jsonObj_baseplan.getString("fix_amt").equals("")) {
						rider.setFix_sa_amt(covertStringtoBigDecimal(jsonObj_baseplan.getString("fix_amt")));
					}else {
						rider.setFix_sa_amt(covertStringtoBigDecimal("0"));
					}
					 rider.setUser_code(userId);
					 rider.setUpdate_time(getCurrentTimestamp());
					 lstRider.add(rider); 
					 
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
						//product.setFirst_beneficiary(request.getParameter("first_beneficiary"));
						//product.setMax_commission(covertStringtoBigDecimal(request.getParameter("max_commission").toString()));
						product.setReinsurance_opt(request.getParameter("reinsurance_opt"));		
						product.setPar_product(request.getParameter("par_product"));
						product.setFighting_product(request.getParameter("fighting_product"));
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
						//product.setLoan_type(request.getParameter("loan_type"));
						//product.setIs_prem_install(Boolean.parseBoolean(request.getParameter("is_prem_install")));
						product.setPrd_design("NONE");
						product.setUser_code(userId);
						product.setUpdate_time(getCurrentTimestamp());
						product.setFlp_start_date("CERT_DATE");
						if (groupName.equals("POC (1740)") || groupName.equals("POC") || groupName.equals("POC_Test")) {
							product.setStatus("UPDATE");//Benz 16-08-2019
						}
						lstProduct.add(product);
				 }
				 
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
				 
			 }
			 
			 ProductControlData productControlData 		= new ProductControlData();
			 String rider_str = request.getParameter("rider");
				JSONArray jsonArr_rider = new JSONArray(rider_str);
				 for (int i = 0; i < jsonArr_rider.length(); i++) {
					 JSONObject jsonObj_rider = jsonArr_rider.getJSONObject(i);
					if(jsonObj_rider.getString("cov_code").length() != 0) {
						Rider rider = new Rider();
						if(jsonObj_rider.getString("prd_design").equals("OPTIONAL")) {
							ArrayList<Rider>  lstRiderByPrd = productControlData.searchProductRiderByPrdCode(jsonObj_rider.getString("prd_rider_code").toString());
							if (lstRiderByPrd.size() > 0) {
								rider = lstRiderByPrd.get(0);
							}else {
								rider = new Rider();
							}
						}
						 rider.setPrd_code(prd_code);
						 rider.setPrd_rider_code(jsonObj_rider.getString("prd_rider_code"));		
						 rider.setMain_rider_code(null);
						 rider.setFlag_type("R");
						 rider.setSelect_rule(compareValuePrdDesign(jsonObj_rider.getString("prd_design")));
							/*if (!jsonObj_rider.getString("fix_amt").equals("")) {
								 rider.setFix_sa_amt(covertStringtoBigDecimal(jsonObj_rider.getString("fix_amt")));
							}else {
								rider.setFix_sa_amt(covertStringtoBigDecimal("0"));
							}*/
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
					 
					/* if(jsonObj_rider.getString("cov_code").length() != 0 && !String.valueOf(jsonObj_rider.get("nar_fileId")).equals("")) {
						 Rate_layout rate_layoutNAR = new Rate_layout();
						 rate_layoutNAR.setPrd_code(prd_code);
						 rate_layoutNAR.setPrd_rider_code(jsonObj_rider.getString("prd_rider_code"));	
						 rate_layoutNAR.setFile_id(jsonObj_rider.getInt("nar_fileId"));		
						 rate_layoutNAR.setRate_cat_id(jsonObj_rider.getInt("nar_cat_id")); 			
						 rate_layoutNAR.setRate_layout_id(jsonObj_rider.getInt("nar_layout_id")); 		
						 rate_layoutNAR.setUser_code(userId);
						 rate_layoutNAR.setUpdate_time(getCurrentTimestamp());
						 lstRateLayout.add(rate_layoutNAR);
					 }*/
					 				 		
					if(jsonObj_rider.getString("cov_code").length() != 0) {
						ArrayList<Product> arr_Product_rider 	= getpcd.searchProduct(jsonObj_rider.getString("prd_rider_code"));
						Product product = arr_Product_rider.get(0);  //new Product();
						/*product.setCore_biz_prd_code(request.getParameter("core_biz_prd_code"));
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
						product.setFirst_beneficiary("NONE");
						product.setReinsurance_opt(request.getParameter("reinsurance_opt"));	
						product.setPar_product(request.getParameter("par_product"));
						product.setFighting_product(request.getParameter("fighting_product"));
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
						product.setLoan_type("NONE");
						product.setIs_prem_install(false);
						product.setPrd_design("NONE");
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
			ArrayList<Participant> lstParticipant = pcd.searchParticipant(prd_code);
			ArrayList<Participant> lstParti_new	= new ArrayList<>();
			JSONArray jsonArr_endorse = new JSONArray(endorse_str);
			Boolean  check_duplicate = false ;
			if ( lstParticipant.size() > 0) {
				for (int i=0; i < jsonArr_endorse.length() ; i++) {
					Participant participant 	= new Participant();
					JSONObject jsonObj_endorse 	= jsonArr_endorse.getJSONObject(i);
					check_duplicate 			= false ;
					
					for (int ii = 0; ii < lstParticipant.size(); ii++) {
						if (i == 0) {
							if (jsonObj_endorse.getString("prd_rider_code").equals(lstParticipant.get(ii).getPrd_rider_code())) {
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
								check_duplicate = false ;
								break;
							}
						}else {
							if (jsonObj_endorse.getString("prd_rider_code").equals(lstParticipant.get(ii).getPrd_rider_code())) {
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
								check_duplicate = false ;
								break;
							}else {
								check_duplicate = true;
							}
						}
					}
					if (check_duplicate == true) {
						participant = new Participant();
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
					}
					lstParti_new.add(participant);
				} 
			}else {
				for (int i=0; i < jsonArr_endorse.length() ; i++) {
					JSONObject jsonObj_endorse = jsonArr_endorse.getJSONObject(i);
					Participant participant = new Participant();
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
					lstParti_new.add(participant);
				}
			}
		////////////////////////Add Product.Rider Benz 19-11-2019//////////////////////////
			for (int i = 0; i < jsonArr_endorse.length() ; i++) {
				JSONObject jsonObj_endorse = jsonArr_endorse.getJSONObject(i);
				if (jsonObj_endorse.get("flag_endorse").toString().equals("true")) {
					////Benz setProductRider Endose ////05-11-2019
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
			////////////////////////////////////////////////////////////////////////////
			settoService.setParticipant(lstParti_new);
			///Benz save ProductRider Endose 05-11-2019
			getpcd.insertProductRider(lstRider);
			
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
		return "success";
	}
	
	public String save_Tab_Cal_insurance(HttpServletRequest request, HttpServletResponse response) throws Exception {

		try {
			ProductCalPremium pcp 			= new ProductCalPremium();
			String prd_code    				= request.getParameter("prd_code");
			ConstantValues.PRD_CODE 		= prd_code;
			String groupName 				= request.getParameter("groupName");
			ConstantValues.GROUP_NAME 		= groupName;
			
			MainInsuranceService mis 		= new MainInsuranceService();
			ArrayList<Product> caseAll_return;
			caseAll_return 					= mis.GetCaseProduct();
			String lv3_code					= "";
			FreezePolicyValue fpv 			= new FreezePolicyValue();
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
			//coverage_limit = "[{\"seq\":\"1\",\"cov_code\":\"IL_OR_MRT_B_0095\",\"prd_rider_code\":\"IL_OR_MRT_P_0002\",\"serie_no\":\"1\",\"type\":\"B\",\"capital_to\":\"10.00\",\"capital_from\":\"20.00\",\"cash_insurance_no\":\"20.00\",\"cash_insurance_unit\":\"CURRENCY\",\"cash_insurance_factor\":\"SMI\",\"cash_low_val\":\"40.00\",\"cash_low_unit\":\"SA_DTPD\",\"insure_low_val\":\"50.00\",\"insure_low_unit\":\"SA_DTPD\"},{\"seq\":\"\",\"type\":\"B\",\"cov_code\":\"IL_OR_MRT_B_0095\",\"prd_rider_code\":\"IL_OR_MRT_P_0002\",\"serie_no\":\"2\",\"capital_to\":\"21.00\",\"capital_from\":\"60.00\",\"cash_insurance_no\":\"60.00\",\"cash_insurance_unit\":\"CURRENCY\",\"cash_insurance_factor\":\"SMI\",\"cash_low_val\":\"80.00\",\"cash_low_unit\":\"SA_DTPD\",\"insure_low_val\":\"90.00\",\"insure_low_unit\":\"SA_DTPD\"},{\"seq\":\"1\",\"cov_code\":\"RC_TD_TPD_R_0002\",\"prd_rider_code\":\"RC_TD_TPD_PR_0002\",\"serie_no\":\"1\",\"type\":\"R\",\"capital_to\":\"110.00\",\"capital_from\":\"220.00\",\"cash_insurance_no\":\"220.00\",\"cash_insurance_unit\":\"NONE\",\"cash_insurance_factor\":\"NONE\",\"cash_low_val\":\"0.00\",\"cash_low_unit\":\"NONE\",\"insure_low_val\":\"0.00\",\"insure_low_unit\":\"NONE\"}]";
			
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
	        		
	        			if (jsonObj_coverage_limit.get("type").toString().equals("B")) {
	        				int row = 0;
		        			for (int j = 0; j < 3; j++) {
		        				row = j;
		        				row = row + 1 ;
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
		        				}else if (j == 2){
		        					limit_cond_amt		= new Limit_cond_amt();
		        					limit_cond_amt.setPrd_code(prd_code);
			        				limit_cond_amt.setPrd_rider_code((String) jsonObj_coverage_limit.getString("prd_rider_code"));
			        				limit_cond_amt.setCond_seq(1);
			        				limit_cond_amt.setSerie_no(jsonObj_coverage_limit.getInt("serie_no"));
			        				limit_cond_amt.setLimit_seq(row);
			        				limit_cond_amt.setLimit_amt_type("PREM"); //CL=PREM 
			        				
			        				if  (!jsonObj_coverage_limit.get("cash_low_val").equals("")) {
				        				limit_cond_amt.setLimit_amt(covertStringtoBigDecimal((String) jsonObj_coverage_limit.getString("insure_low_val")));
			            			}else {
			            				limit_cond_amt.setLimit_amt(covertStringtoBigDecimal("0"));
			            			}
			        				
			        				limit_cond_amt.setLimit_unit("CURRENCY");//
			        				limit_cond_amt.setLimit_factor((String) jsonObj_coverage_limit.getString("insure_low_unit"));
			        				limit_cond_amt.setUser_code(userId);
			        				limit_cond_amt.setUpdate_time(PDFFnc.currentTimeStamp());
		        				}
		        				limit_cond_amt_arr.add(limit_cond_amt);
							}
	        			}else {
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
	        			// limit_cond_amt
		        		
	        			if (jsonObj_coverage_limit.get("type").toString().equals("B")) {
	        				int row = 0;
		        			for (int j = 0; j < 3; j++) {
		        				row = j;
		        				row = row + 1 ;
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
		        				}else if (j == 2){
		        					limit_cond_amt		= new Limit_cond_amt();
		        					limit_cond_amt.setPrd_code(prd_code);
			        				limit_cond_amt.setPrd_rider_code((String) jsonObj_coverage_limit.getString("prd_rider_code"));
			        				limit_cond_amt.setCond_seq(1);
			        				limit_cond_amt.setSerie_no(jsonObj_coverage_limit.getInt("serie_no"));
			        				limit_cond_amt.setLimit_seq(row);
			        				limit_cond_amt.setLimit_amt_type("PREM"); //CL=PREM 
			        				
			        				if  (!jsonObj_coverage_limit.get("cash_low_val").equals("")) {
				        				limit_cond_amt.setLimit_amt(covertStringtoBigDecimal((String) jsonObj_coverage_limit.getString("insure_low_val")));
			            			}else {
			            				limit_cond_amt.setLimit_amt(covertStringtoBigDecimal("0"));
			            			}
			        				
			        				limit_cond_amt.setLimit_unit("CURRENCY");//
			        				limit_cond_amt.setLimit_factor((String) jsonObj_coverage_limit.getString("insure_low_unit"));
			        				limit_cond_amt.setUser_code(userId);
			        				limit_cond_amt.setUpdate_time(PDFFnc.currentTimeStamp());
		        				}
		        				limit_cond_amt_arr.add(limit_cond_amt);
							}
	        			}else {
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
	        			if (jsonObj_coverage_limit.get("type").toString().equals("B")) {
	        				int row = 0;
		        			for (int j = 0; j < 3; j++) {
		        				row = j;
		        				row = row + 1 ;
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
		        				}else if (j == 2){
		        					limit_cond_amt		= new Limit_cond_amt();
		        					limit_cond_amt.setPrd_code(prd_code);
			        				limit_cond_amt.setPrd_rider_code((String) jsonObj_coverage_limit.getString("prd_rider_code"));
			        				limit_cond_amt.setCond_seq(1);
			        				limit_cond_amt.setSerie_no(jsonObj_coverage_limit.getInt("serie_no"));
			        				limit_cond_amt.setLimit_seq(row);
			        				limit_cond_amt.setLimit_amt_type("PREM"); //CL=PREM 
			        				
			        				if  (!jsonObj_coverage_limit.get("cash_low_val").equals("")) {
				        				limit_cond_amt.setLimit_amt(covertStringtoBigDecimal((String) jsonObj_coverage_limit.getString("insure_low_val")));
			            			}else {
			            				limit_cond_amt.setLimit_amt(covertStringtoBigDecimal("0"));
			            			}
			        				
			        				limit_cond_amt.setLimit_unit("CURRENCY");//
			        				limit_cond_amt.setLimit_factor((String) jsonObj_coverage_limit.getString("insure_low_unit"));
			        				limit_cond_amt.setUser_code(userId);
			        				limit_cond_amt.setUpdate_time(PDFFnc.currentTimeStamp());
		        				}
		        				limit_cond_amt_arr.add(limit_cond_amt);
							}
	        			}else {
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
	        			if (jsonObj_coverage_limit.get("type").toString().equals("B")) {
	        				int row = 0;
		        			for (int j = 0; j < 3; j++) {
		        				row = j;
		        				row = row + 1 ;
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
		        				}else if (j == 2){
		        					limit_cond_amt		= new Limit_cond_amt();
		        					limit_cond_amt.setPrd_code(prd_code);
			        				limit_cond_amt.setPrd_rider_code((String) jsonObj_coverage_limit.getString("prd_rider_code"));
			        				limit_cond_amt.setCond_seq(1);
			        				limit_cond_amt.setSerie_no(jsonObj_coverage_limit.getInt("serie_no"));
			        				limit_cond_amt.setLimit_seq(row);
			        				limit_cond_amt.setLimit_amt_type("PREM"); //CL=PREM 
			        				
			        				if  (!jsonObj_coverage_limit.get("cash_low_val").equals("")) {
				        				limit_cond_amt.setLimit_amt(covertStringtoBigDecimal((String) jsonObj_coverage_limit.getString("insure_low_val")));
			            			}else {
			            				limit_cond_amt.setLimit_amt(covertStringtoBigDecimal("0"));
			            			}
			        				
			        				limit_cond_amt.setLimit_unit("CURRENCY");//
			        				limit_cond_amt.setLimit_factor((String) jsonObj_coverage_limit.getString("insure_low_unit"));
			        				limit_cond_amt.setUser_code(userId);
			        				limit_cond_amt.setUpdate_time(PDFFnc.currentTimeStamp());
		        				}
		        				limit_cond_amt_arr.add(limit_cond_amt);
							}
	        			}else {
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
			//cal_insurance = "[{\"prd_code\":\"IL_OR_MRT_P_0002\",\"type\":\"Premium Rate\",\"formula\":\"0\",\"prd_rider_code\":\"IL_OR_MRT_P_0002\"},{\"prd_code\":\"IL_OR_MRT_P_0002\",\"type\":\"Extra Rate\",\"formula\":\"0\",\"prd_rider_code\":\"IL_OR_MRT_P_0002\"},{\"prd_code\":\"IL_OR_MRT_P_0002\",\"type\":\"SA_Rate\",\"formula\":\"0\",\"prd_rider_code\":\"IL_OR_MRT_P_0002\"}]";
			JSONArray jsonArr_cal_insurance					= new JSONArray(cal_insurance);
			
			//  Formula_cat_id = 7,8,9	
			if (jsonArr_cal_insurance.length() != 0) {
				ArrayList<Formula> formulaData_arr7 = new ArrayList<>();
				ArrayList<Formula> formulaData_arr8 = new ArrayList<>();
				ArrayList<Formula> formulaData_arr9 = new ArrayList<>();
				for (int i = 0; i < jsonArr_cal_insurance.length(); i++){		
					int formula_cat_id = 0;
					JSONObject jsonObj_cal_insurance = jsonArr_cal_insurance.getJSONObject(i);
					Formula formula = new Formula(); 
					formula.setPrd_code(prd_code);
		    	   	formula.setPrd_rider_code(prd_code);
		    	   	formula.setFormula_id(jsonObj_cal_insurance.getInt("formula"));
					formula.setUser_code(userId);
					formula.setUpdate_time(PDFFnc.currentTimeStamp());
					if(jsonObj_cal_insurance.getString("type").equals("Premium Rate")) {
						formula_cat_id = 7;
						formula.setFormula_cat_id(formula_cat_id);
						formulaData_arr7.add(formula);
					}else if(jsonObj_cal_insurance.getString("type").equals("Extra Rate")) {
						formula_cat_id = 8;
						formula.setFormula_cat_id(formula_cat_id);
						formulaData_arr8.add(formula);
					}else if(jsonObj_cal_insurance.getString("type").equals("SA_Rate")) {
						formula_cat_id = 9;
						formula.setFormula_cat_id(formula_cat_id);
						formulaData_arr9.add(formula);
					}
			    }
				 pcp.doFrmula("7",formulaData_arr7);
				 pcp.doFrmula("8",formulaData_arr8);
				 pcp.doFrmula("9",formulaData_arr9);
			}else {
				pcp.doFrmula("7",new ArrayList<Formula>());
				pcp.doFrmula("8",new ArrayList<Formula>());
				pcp.doFrmula("9",new ArrayList<Formula>());
			}				
		
	///////////////////////////////////////////////////////////////////////////////////
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
	
	public String save_Tab_Grant_Rights(HttpServletRequest request, HttpServletResponse response) throws Exception 
	{
		try {
			ProductGrantRightsInsure pgri 			= new ProductGrantRightsInsure ();
			String prd_code    						= request.getParameter("prd_code");
			//prd_code 								= "IL_OR_MRT_P_0002";
			ConstantValues.PRD_CODE 				= prd_code;
			String change_type    					= request.getParameter("change_type");
			String groupName 						= request.getParameter("groupName");
			ConstantValues.GROUP_NAME 				= groupName;
			//change_type  							= "[{\"type\":\"PACKAGE_DECREASE\"},{\"type\":\"INCREASE\"},{\"type\":\"PRODUCT\"},{\"type\":\"DECREASE\"}]";
			
			JSONArray jsonArr_change_type		= new JSONArray(change_type);
			ArrayList<Product_change> product_change_arr 	= new ArrayList<>();
			for (int i = 0; i < jsonArr_change_type.length(); i++) {
				JSONObject jsonObj_change_type = jsonArr_change_type.getJSONObject(i);
				if  (!jsonObj_change_type.get("type").toString().equals("")) {
					Product_change product_change		= new Product_change ();
					product_change.setPrd_code(prd_code);
					product_change.setChange_type(jsonObj_change_type.get("type").toString());
					product_change.setUser_code(userId);
					product_change.setUpdate_time(PDFFnc.currentTimeStamp());
					product_change_arr.add(product_change);
				}
			}
			
			////////////////////////////////////////////////////////////////
			String policy_surrender 				= request.getParameter("Policy_surrender");
			ArrayList<Formula> formulaData_arr = new ArrayList<>();
			ArrayList<Rate_layout> rate_layout_arr = new ArrayList<>();
		//	policy_surrender = "[{\"cov_code\":\"GL_CL_MRT_B_0682\",\"prd_rider_code\":\"IL_OR_MRT_P_0002\",\"type_cov\":\"MRT\",\"tb_policyValue\":\"ต่อทุนรายปี 100,000 บาท\",\"tb_CV\":\"CV_CL 13 100K_DTPD_GL_CL_MRT_B_0682.txt\",\"rate_cat_id\":\"6\",\"rate_layout_id\":\"13\",\"file_id\":\"3164\",\"formula\":\"9\"},{\"cov_code\":\"RC_AC_ADB_R_1410\",\"prd_rider_code\":\"RC_AC_ADB_PR_1411\",\"type_cov\":\"ADB\",\"tb_policyValue\":\"ต่อทุนรายปี 100,000 บาท\",\"tb_CV\":\"CV_CL 13 100K_ADB_RC_AC_ADB_R_1410.txt\",\"rate_cat_id\":\"6\",\"rate_layout_id\":\"13\",\"file_id\":\"3186\",\"formula\":\"10\"},{\"cov_code\":\"RC_AC_AME_R_0051\",\"prd_rider_code\":\"RC_AC_AME_PR_0052\",\"type_cov\":\"AME\",\"tb_policyValue\":\"ต่อทุนรายปี 100,000 บาท\",\"tb_CV\":\"CV_CL 13 100K_AME 1K_RC_AC_AME_R_0051.txt\",\"rate_cat_id\":\"6\",\"rate_layout_id\":\"13\",\"file_id\":\"3685\",\"formula\":\"10\"}]";
			JSONArray jsonArr_policy_surrender		= new JSONArray(policy_surrender);
			for (int i = 0; i < jsonArr_policy_surrender.length(); i++) {
				JSONObject jsonObj_policy_surrender = jsonArr_policy_surrender.getJSONObject(i);

				Formula formula = new Formula(); 
				Rate_layout rate_layout = new Rate_layout(); 
		    	   	formula.setPrd_code(prd_code);
		    	   	formula.setPrd_rider_code((String) jsonObj_policy_surrender.getString("prd_rider_code"));
		    	   	formula.setFormula_cat_id(10);//Product///CL  Formula_cat_id = 10
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
			pgri.doFormula_OL(formulaData_arr);
			//pgri.doRateLayout(rate_layout_arr);
			
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
	
	public String save_Tab_Sales_Benefits(HttpServletRequest request, HttpServletResponse response) throws Exception
	{
		try {
			ArrayList<Sale_compensation_serie>	arr_sale_com_serie 	= new ArrayList<Sale_compensation_serie>();
			ArrayList<Sale_compensation_cond>	arr_sale_com_cond 	= new ArrayList<Sale_compensation_cond>();
			ArrayList<Sale_compensation_detail>	arr_sale_com_detail = new ArrayList<Sale_compensation_detail>();
			String prd_code 				= request.getParameter("prd_code");
			ConstantValues.PRD_CODE 		= prd_code;
			String str_model 				 = request.getParameter("model");
			String groupName 				= request.getParameter("groupName");
			ConstantValues.GROUP_NAME 		= groupName;
			
			boolean model = Boolean.parseBoolean(str_model);
			//searchSale_compensation_serie
			SaleCompensationSerieData scs 	= new SaleCompensationSerieData();
			//searchSale_compensation_cond
			SaleCompensationCondData scc = new SaleCompensationCondData();
			//SaleCompensationDetailData
			SaleCompensationDetailData scd = new SaleCompensationDetailData();
			
			/*model = true = แบบปกติ || model = false = แบบมีเงื่อนไข*/
			if (model == true) {
			//	JSONArray arr_sale_Com2		= new JSONArray(sale_benefit2);
				String sale_benefit2 				= request.getParameter("sale_benefit2");
				//sale_benefit2 						= "[{\"is_ref_base\":false,\"cov_code\":\"IL_OR_MRT_P_0004\",\"seq\":1,\"eff_data\":\"21/10/2562\",\"exp_data\":\"22/10/2562\",\"serie_no\":1,\"year1\":\"0.00\",\"year2\":\"0.00\",\"year3\":\"0.00\",\"year4\":\"0.00\",\"credit\":\"0.00\",\"overrid\":\"0.00\",\"advance\":\"0.00\",\"mkt_Inc\":\"0.00\",\"saleValume\":\"0.00\",\"mkt_Exp\":\"0.00\"},{\"is_ref_base\":false,\"cov_code\":\"IL_OR_MRT_P_0004\",\"seq\":2,\"eff_data\":\"23/10/2562\",\"exp_data\":\"24/10/2562\",\"serie_no\":\"\",\"year1\":\"0.00\",\"year2\":\"0.00\",\"year3\":\"0.00\",\"year4\":\"0.00\",\"credit\":\"0.00\",\"overrid\":\"0.00\",\"advance\":\"0.00\",\"mkt_Inc\":\"0.00\",\"saleValume\":\"0.00\",\"mkt_Exp\":\"0.00\"},{\"is_ref_base\":false,\"cov_code\":\"RO_AC_ADB_PR_0689\",\"seq\":1,\"eff_data\":\"\",\"exp_data\":\"\",\"serie_no\":1,\"year1\":\"0.00\",\"year2\":\"0.00\",\"year3\":\"0.00\",\"year4\":\"0.00\",\"credit\":\"0.00\",\"overrid\":\"0.00\",\"advance\":\"0.00\",\"mkt_Inc\":\"0.00\",\"saleValume\":\"0.00\",\"mkt_Exp\":\"0.00\"},{\"is_ref_base\":true,\"cov_code\":\"RO_AC_ADB_PR_0788\",\"seq\":1,\"eff_data\":\"01/10/2562\",\"exp_data\":\"31/10/2562\",\"serie_no\":1,\"year1\":\"20.00\",\"year2\":\"20.00\",\"year3\":\"20.00\",\"year4\":\"20.00\",\"credit\":\"20.00\",\"overrid\":\"20.00\",\"advance\":\"20.00\",\"mkt_Inc\":\"20.00\",\"saleValume\":\"20.00\",\"mkt_Exp\":\"20.00\"},{\"is_ref_base\":true,\"cov_code\":\"RO_AC_ADB_PR_0788\",\"seq\":2,\"eff_data\":\"01/11/2562\",\"exp_data\":\"21/11/2562\",\"serie_no\":\"\",\"year1\":\"20.00\",\"year2\":\"20.00\",\"year3\":\"20.00\",\"year4\":\"20.00\",\"credit\":\"20.00\",\"overrid\":\"20.00\",\"advance\":\"20.00\",\"mkt_Inc\":\"20.00\",\"saleValume\":\"20.00\",\"mkt_Exp\":\"20.00\"},{\"is_ref_base\":true,\"cov_code\":\"RO_AC_ADB_PR_0788\",\"seq\":3,\"eff_data\":\"22/11/2562\",\"exp_data\":\"30/11/2562\",\"serie_no\":\"\",\"year1\":\"20.00\",\"year2\":\"20.00\",\"year3\":\"20.00\",\"year4\":\"20.00\",\"credit\":\"20.00\",\"overrid\":\"20.00\",\"advance\":\"20.00\",\"mkt_Inc\":\"20.00\",\"saleValume\":\"20.00\",\"mkt_Exp\":\"20.00\"}]";
				JSONArray arr_sale_Com2				= new JSONArray(sale_benefit2);
				
				ArrayList<Sale_compensation_serie> arr_compensation_serie 	= scs.searchByPrdCode();
				Sale_compensation_serie setSale_Com_Serie 		= new Sale_compensation_serie ();
				Sale_compensation_cond setSale_Com_Con 			= new Sale_compensation_cond ();
				Sale_compensation_detail setSale_Com_Detail	 	= new Sale_compensation_detail ();
				
				boolean is_ref_base = false ;
				
				String checkBasePlan = "";
				if (arr_sale_Com2.length() > 0) {
					JSONObject jsonObj_product 	= arr_sale_Com2.getJSONObject(0);
					checkBasePlan = jsonObj_product.get("cov_code").toString();
				}
				for (int i = 0; i < arr_sale_Com2.length(); i++) {
					JSONObject jsonObj_product 	= arr_sale_Com2.getJSONObject(i);
					//check Base and Rider
					if (!checkBasePlan.equals("")) {
						if (jsonObj_product.get("cov_code").toString().equals(checkBasePlan)) {
							//set Row Master
							if (!jsonObj_product.get("serie_no").toString().equals("")) {

										setSale_Com_Serie 	= new Sale_compensation_serie ();
										setSale_Com_Serie.setPrd_code(prd_code);
										setSale_Com_Serie.setPrd_rider_code(prd_code);
										setSale_Com_Serie.setSerie_no(Integer.parseInt(jsonObj_product.get("serie_no").toString()));
										setSale_Com_Serie.setGender("NONE");
										setSale_Com_Serie.setMode("NONE");
										//setSale_Com_Serie.setMin_age(0);
										//setSale_Com_Serie.setMax_age(0);
										//setSale_Com_Serie.setMin_sum(covertStringtoBigDecimal("0"));
										//setSale_Com_Serie.setMax_sum(covertStringtoBigDecimal("0"));
										//setSale_Com_Serie.setMin_period(0);
										//setSale_Com_Serie.setMax_period(0);
										setSale_Com_Serie.setUser_code(userId);
										setSale_Com_Serie.setUpdate_time(PDFFnc.currentTimeStamp());
										arr_sale_com_serie.add(setSale_Com_Serie);
							//Sale_compensation_cond --------------------------------------------
									setSale_Com_Con = new Sale_compensation_cond ();
									setSale_Com_Con.setPrd_code(prd_code);
									setSale_Com_Con.setPrd_rider_code(prd_code);
									setSale_Com_Con.setSerie_no(Integer.parseInt(jsonObj_product.get("serie_no").toString()));
									setSale_Com_Con.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));	
									setSale_Com_Con.setEff_date(getData(jsonObj_product.get("eff_data").toString()));
									setSale_Com_Con.setExp_date(getData(jsonObj_product.get("exp_data").toString()));
									setSale_Com_Con.setIs_ref_base(Boolean.valueOf(jsonObj_product.get("is_ref_base").toString()));
									setSale_Com_Con.setUser_code(userId);
									setSale_Com_Con.setUpdate_time(PDFFnc.currentTimeStamp());
									arr_sale_com_cond.add(setSale_Com_Con);
									
							//Sale_compensation_detail ---------------------------------------
								//Check year1
									if (!jsonObj_product.get("year1").toString().equals("")) {
										setSale_Com_Detail = new Sale_compensation_detail ();
										setSale_Com_Detail.setPrd_code(prd_code);
										setSale_Com_Detail.setPrd_rider_code(prd_code);
										setSale_Com_Detail.setSerie_no(Integer.parseInt(jsonObj_product.get("serie_no").toString()));
										setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
										is_ref_base = jsonObj_product.getBoolean("is_ref_base");
										if (is_ref_base == true) {
											setSale_Com_Detail.setCompen_type("MAX_COM");
										}else {
											setSale_Com_Detail.setCompen_type("COMMISSION");
										}
										setSale_Com_Detail.setCompen_year(1);
										setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("year1").toString()));
										setSale_Com_Detail.setCompen_factor("NONE");
										setSale_Com_Detail.setUser_code(userId);
										setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
										arr_sale_com_detail.add(setSale_Com_Detail);
									}
								//Check year2
									if (!jsonObj_product.get("year2").toString().equals("")) {
										setSale_Com_Detail = new Sale_compensation_detail ();
										setSale_Com_Detail.setPrd_code(prd_code);
										setSale_Com_Detail.setPrd_rider_code(prd_code);
										setSale_Com_Detail.setSerie_no(Integer.parseInt(jsonObj_product.get("serie_no").toString()));
										setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
										setSale_Com_Detail.setCompen_type("COMMISSION");
										setSale_Com_Detail.setCompen_year(2);
										setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("year2").toString()));
										setSale_Com_Detail.setCompen_factor("NONE");
										setSale_Com_Detail.setUser_code(userId);
										setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
										arr_sale_com_detail.add(setSale_Com_Detail);
									}
								//Check year3
									if (!jsonObj_product.get("year3").toString().equals("")) {
										setSale_Com_Detail = new Sale_compensation_detail ();
										setSale_Com_Detail.setPrd_code(prd_code);
										setSale_Com_Detail.setPrd_rider_code(prd_code);
										setSale_Com_Detail.setSerie_no(Integer.parseInt(jsonObj_product.get("serie_no").toString()));
										setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
										setSale_Com_Detail.setCompen_type("COMMISSION");
										setSale_Com_Detail.setCompen_year(3);
										setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("year3").toString()));
										setSale_Com_Detail.setCompen_factor("NONE");
										setSale_Com_Detail.setUser_code(userId);
										setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
										arr_sale_com_detail.add(setSale_Com_Detail);
									}
	
								//Check year4
									if (!jsonObj_product.get("year4").toString().equals("")) {
										setSale_Com_Detail = new Sale_compensation_detail ();
										setSale_Com_Detail.setPrd_code(prd_code);
										setSale_Com_Detail.setPrd_rider_code(prd_code);
										setSale_Com_Detail.setSerie_no(Integer.parseInt(jsonObj_product.get("serie_no").toString()));
										setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
										setSale_Com_Detail.setCompen_type("COMMISSION");
										setSale_Com_Detail.setCompen_year(4);
										setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("year4").toString()));
										setSale_Com_Detail.setCompen_factor("NONE");
										setSale_Com_Detail.setUser_code(userId);
										setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
										arr_sale_com_detail.add(setSale_Com_Detail);
									}
	
								//Check credit
									if (!jsonObj_product.get("credit").toString().equals("")) {
										setSale_Com_Detail = new Sale_compensation_detail ();
										setSale_Com_Detail.setPrd_code(prd_code);
										setSale_Com_Detail.setPrd_rider_code(prd_code);
										setSale_Com_Detail.setSerie_no(Integer.parseInt(jsonObj_product.get("serie_no").toString()));
										setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
										setSale_Com_Detail.setCompen_type("PERF_CREDIT");
										setSale_Com_Detail.setCompen_year(1);
										setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("credit").toString()));
										setSale_Com_Detail.setCompen_factor("NONE");
										setSale_Com_Detail.setUser_code(userId);
										setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
										arr_sale_com_detail.add(setSale_Com_Detail);
									}
	
								//Check overrid
									if (!jsonObj_product.get("overrid").toString().equals("")) {
										setSale_Com_Detail = new Sale_compensation_detail ();
										setSale_Com_Detail.setPrd_code(prd_code);
										setSale_Com_Detail.setPrd_rider_code(prd_code);
										setSale_Com_Detail.setSerie_no(Integer.parseInt(jsonObj_product.get("serie_no").toString()));
										setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
										setSale_Com_Detail.setCompen_type("OVERRIDE");
										setSale_Com_Detail.setCompen_year(1);
										setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("overrid").toString()));
										setSale_Com_Detail.setCompen_factor("NONE");
										setSale_Com_Detail.setUser_code(userId);
										setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
										arr_sale_com_detail.add(setSale_Com_Detail);
									}
	
								//Check advance
									if (!jsonObj_product.get("advance").toString().equals("")) {
										setSale_Com_Detail = new Sale_compensation_detail ();
										setSale_Com_Detail.setPrd_code(prd_code);
										setSale_Com_Detail.setPrd_rider_code(prd_code);
										setSale_Com_Detail.setSerie_no(Integer.parseInt(jsonObj_product.get("serie_no").toString()));
										setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
										setSale_Com_Detail.setCompen_type("ADV_COMM");
										setSale_Com_Detail.setCompen_year(1);
										setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("advance").toString()));
										setSale_Com_Detail.setCompen_factor("NONE");
										setSale_Com_Detail.setUser_code(userId);
										setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
										arr_sale_com_detail.add(setSale_Com_Detail);
									}
	
								//Check mkt_Inc
									if (!jsonObj_product.get("mkt_Inc").toString().equals("")) {
										setSale_Com_Detail = new Sale_compensation_detail ();
										setSale_Com_Detail.setPrd_code(prd_code);
										setSale_Com_Detail.setPrd_rider_code(prd_code);
										setSale_Com_Detail.setSerie_no(Integer.parseInt(jsonObj_product.get("serie_no").toString()));
										setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
										setSale_Com_Detail.setCompen_type("MKTG_INCENTIVE");
										setSale_Com_Detail.setCompen_year(1);
										setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("mkt_Inc").toString()));
										setSale_Com_Detail.setCompen_factor("NONE");
										setSale_Com_Detail.setUser_code(userId);
										setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
										arr_sale_com_detail.add(setSale_Com_Detail);
									}
	
								//Check saleValume
									if (!jsonObj_product.get("saleValume").toString().equals("")) {
										setSale_Com_Detail = new Sale_compensation_detail ();
										setSale_Com_Detail.setPrd_code(prd_code);
										setSale_Com_Detail.setPrd_rider_code(prd_code);
										setSale_Com_Detail.setSerie_no(Integer.parseInt(jsonObj_product.get("serie_no").toString()));
										setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
										setSale_Com_Detail.setCompen_type("SALE_VOLUME_BONUS");
										setSale_Com_Detail.setCompen_year(1);
										setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("saleValume").toString()));
										setSale_Com_Detail.setCompen_factor("NONE");
										setSale_Com_Detail.setUser_code(userId);
										setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
										arr_sale_com_detail.add(setSale_Com_Detail);
									}	
	
								//Check saleValume
									if (!jsonObj_product.get("mkt_Exp").toString().equals("")) {
										setSale_Com_Detail = new Sale_compensation_detail ();
										setSale_Com_Detail.setPrd_code(prd_code);
										setSale_Com_Detail.setPrd_rider_code(prd_code);
										setSale_Com_Detail.setSerie_no(Integer.parseInt(jsonObj_product.get("serie_no").toString()));
										setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));	
										setSale_Com_Detail.setCompen_type("MKTG_EXP");
										setSale_Com_Detail.setCompen_year(1);
										setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("mkt_Exp").toString()));
										setSale_Com_Detail.setCompen_factor("NONE");
										setSale_Com_Detail.setUser_code(userId);
										setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
										arr_sale_com_detail.add(setSale_Com_Detail);
									}	
							}else {
								//Sale_compensation_cond --------------------------------------------
									setSale_Com_Con = new Sale_compensation_cond ();
									setSale_Com_Con.setPrd_code(prd_code);
									setSale_Com_Con.setPrd_rider_code(prd_code);
									setSale_Com_Con.setSerie_no(1);
									setSale_Com_Con.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));	
									setSale_Com_Con.setEff_date(getData(jsonObj_product.get("eff_data").toString()));
									setSale_Com_Con.setExp_date(getData(jsonObj_product.get("exp_data").toString()));
									setSale_Com_Con.setIs_ref_base(Boolean.valueOf(jsonObj_product.get("is_ref_base").toString()));
									setSale_Com_Con.setUser_code(userId);
									setSale_Com_Con.setUpdate_time(PDFFnc.currentTimeStamp());
									arr_sale_com_cond.add(setSale_Com_Con);
								//Sale_compensation_detail ---------------------------------------
									//Check year1
										if (!jsonObj_product.get("year1").toString().equals("")) {
											setSale_Com_Detail = new Sale_compensation_detail ();
											setSale_Com_Detail.setPrd_code(prd_code);
											setSale_Com_Detail.setPrd_rider_code(prd_code);
											setSale_Com_Detail.setSerie_no(1);
											setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
											if (is_ref_base == true) {
												setSale_Com_Detail.setCompen_type("MAX_COM");
											}else {
												setSale_Com_Detail.setCompen_type("COMMISSION");
											}
											setSale_Com_Detail.setCompen_year(1);
											setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("year1").toString()));
											setSale_Com_Detail.setCompen_factor("NONE");
											setSale_Com_Detail.setUser_code(userId);
											setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
											arr_sale_com_detail.add(setSale_Com_Detail);
										}
									//Check year2
										if (!jsonObj_product.get("year2").toString().equals("")) {
											setSale_Com_Detail = new Sale_compensation_detail ();
											setSale_Com_Detail.setPrd_code(prd_code);
											setSale_Com_Detail.setPrd_rider_code(prd_code);
											setSale_Com_Detail.setSerie_no(1);
											setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
											setSale_Com_Detail.setCompen_type("COMMISSION");
											setSale_Com_Detail.setCompen_year(2);
											setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("year2").toString()));
											setSale_Com_Detail.setCompen_factor("NONE");
											setSale_Com_Detail.setUser_code(userId);
											setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
											arr_sale_com_detail.add(setSale_Com_Detail);
										}
									//Check year3
										if (!jsonObj_product.get("year3").toString().equals("")) {
											setSale_Com_Detail = new Sale_compensation_detail ();
											setSale_Com_Detail.setPrd_code(prd_code);
											setSale_Com_Detail.setPrd_rider_code(prd_code);
											setSale_Com_Detail.setSerie_no(1);
											setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
											setSale_Com_Detail.setCompen_type("COMMISSION");
											setSale_Com_Detail.setCompen_year(3);
											setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("year3").toString()));
											setSale_Com_Detail.setCompen_factor("NONE");
											setSale_Com_Detail.setUser_code(userId);
											setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
											arr_sale_com_detail.add(setSale_Com_Detail);
										}
	
									//Check year4
										if (!jsonObj_product.get("year4").toString().equals("")) {
											setSale_Com_Detail = new Sale_compensation_detail ();
											setSale_Com_Detail.setPrd_code(prd_code);
											setSale_Com_Detail.setPrd_rider_code(prd_code);
											setSale_Com_Detail.setSerie_no(1);
											setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
											setSale_Com_Detail.setCompen_type("COMMISSION");
											setSale_Com_Detail.setCompen_year(4);
											setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("year4").toString()));
											setSale_Com_Detail.setCompen_factor("NONE");
											setSale_Com_Detail.setUser_code(userId);
											setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
											arr_sale_com_detail.add(setSale_Com_Detail);
										}
	
									//Check credit
										if (!jsonObj_product.get("credit").toString().equals("")) {
											setSale_Com_Detail = new Sale_compensation_detail ();
											setSale_Com_Detail.setPrd_code(prd_code);
											setSale_Com_Detail.setPrd_rider_code(prd_code);
											setSale_Com_Detail.setSerie_no(1);
											setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
											setSale_Com_Detail.setCompen_type("PERF_CREDIT");
											setSale_Com_Detail.setCompen_year(1);
											setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("credit").toString()));
											setSale_Com_Detail.setCompen_factor("NONE");
											setSale_Com_Detail.setUser_code(userId);
											setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
											arr_sale_com_detail.add(setSale_Com_Detail);
										}
	
									//Check overrid
										if (!jsonObj_product.get("overrid").toString().equals("")) {
											setSale_Com_Detail = new Sale_compensation_detail ();
											setSale_Com_Detail.setPrd_code(prd_code);
											setSale_Com_Detail.setPrd_rider_code(prd_code);
											setSale_Com_Detail.setSerie_no(1);
											setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
											setSale_Com_Detail.setCompen_type("OVERRIDE");
											setSale_Com_Detail.setCompen_year(1);
											setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("overrid").toString()));
											setSale_Com_Detail.setCompen_factor("NONE");
											setSale_Com_Detail.setUser_code(userId);
											setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
											arr_sale_com_detail.add(setSale_Com_Detail);
										}
	
									//Check advance
										if (!jsonObj_product.get("advance").toString().equals("")) {
											setSale_Com_Detail = new Sale_compensation_detail ();
											setSale_Com_Detail.setPrd_code(prd_code);
											setSale_Com_Detail.setPrd_rider_code(prd_code);
											setSale_Com_Detail.setSerie_no(1);
											setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
											setSale_Com_Detail.setCompen_type("ADV_COMM");
											setSale_Com_Detail.setCompen_year(1);
											setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("advance").toString()));
											setSale_Com_Detail.setCompen_factor("NONE");
											setSale_Com_Detail.setUser_code(userId);
											setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
											arr_sale_com_detail.add(setSale_Com_Detail);
										}
	
									//Check mkt_Inc
										if (!jsonObj_product.get("mkt_Inc").toString().equals("")) {
											setSale_Com_Detail = new Sale_compensation_detail ();
											setSale_Com_Detail.setPrd_code(prd_code);
											setSale_Com_Detail.setPrd_rider_code(prd_code);
											setSale_Com_Detail.setSerie_no(1);
											setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
											setSale_Com_Detail.setCompen_type("MKTG_INCENTIVE");
											setSale_Com_Detail.setCompen_year(1);
											setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("mkt_Inc").toString()));
											setSale_Com_Detail.setCompen_factor("NONE");
											setSale_Com_Detail.setUser_code(userId);
											setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
											arr_sale_com_detail.add(setSale_Com_Detail);
										}
	
									//Check saleValume
										if (!jsonObj_product.get("saleValume").toString().equals("")) {
											setSale_Com_Detail = new Sale_compensation_detail ();
											setSale_Com_Detail.setPrd_code(prd_code);
											setSale_Com_Detail.setPrd_rider_code(prd_code);
											setSale_Com_Detail.setSerie_no(1);
											setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
											setSale_Com_Detail.setCompen_type("SALE_VOLUME_BONUS");
											setSale_Com_Detail.setCompen_year(1);
											setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("saleValume").toString()));
											setSale_Com_Detail.setCompen_factor("NONE");
											setSale_Com_Detail.setUser_code(userId);
											setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
											arr_sale_com_detail.add(setSale_Com_Detail);
										}	
	
									//Check saleValume
										if (!jsonObj_product.get("mkt_Exp").toString().equals("")) {
											setSale_Com_Detail = new Sale_compensation_detail ();
											setSale_Com_Detail.setPrd_code(prd_code);
											setSale_Com_Detail.setPrd_rider_code(prd_code);
											setSale_Com_Detail.setSerie_no(1);
											setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));	
											setSale_Com_Detail.setCompen_type("MKTG_EXP");
											setSale_Com_Detail.setCompen_year(1);
											setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("mkt_Exp").toString()));
											setSale_Com_Detail.setCompen_factor("NONE");
											setSale_Com_Detail.setUser_code(userId);
											setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
											arr_sale_com_detail.add(setSale_Com_Detail);
										}	
							}
						}else {
							//set Row Master
							if (!jsonObj_product.get("serie_no").toString().equals("")) {
							//Sale_compensation_serie -------------------------------------
									setSale_Com_Serie 	= new Sale_compensation_serie ();
									setSale_Com_Serie.setPrd_code(prd_code);
									setSale_Com_Serie.setPrd_rider_code(jsonObj_product.get("cov_code").toString());
									setSale_Com_Serie.setSerie_no(Integer.parseInt(jsonObj_product.get("serie_no").toString()));
									setSale_Com_Serie.setGender("NONE");
									setSale_Com_Serie.setMode("NONE");
									//setSale_Com_Serie.setMin_age(0);
									//setSale_Com_Serie.setMax_age(0);
									//setSale_Com_Serie.setMin_sum(covertStringtoBigDecimal("0"));
									//setSale_Com_Serie.setMax_sum(covertStringtoBigDecimal("0"));
									//setSale_Com_Serie.setMin_period(0);
									//setSale_Com_Serie.setMax_period(0);
									setSale_Com_Serie.setUser_code(userId);
									setSale_Com_Serie.setUpdate_time(PDFFnc.currentTimeStamp());
									arr_sale_com_serie.add(setSale_Com_Serie);
							//Sale_compensation_cond --------------------------------------------
									setSale_Com_Con = new Sale_compensation_cond ();
									setSale_Com_Con.setPrd_code(prd_code);
									setSale_Com_Con.setPrd_rider_code(jsonObj_product.get("cov_code").toString());
									setSale_Com_Con.setSerie_no(Integer.parseInt(jsonObj_product.get("serie_no").toString()));
									setSale_Com_Con.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));	
									setSale_Com_Con.setEff_date(getData(jsonObj_product.get("eff_data").toString()));
									setSale_Com_Con.setExp_date(getData(jsonObj_product.get("exp_data").toString()));
									setSale_Com_Con.setIs_ref_base(Boolean.valueOf(jsonObj_product.get("is_ref_base").toString()));
									setSale_Com_Con.setUser_code(userId);
									setSale_Com_Con.setUpdate_time(PDFFnc.currentTimeStamp());
									arr_sale_com_cond.add(setSale_Com_Con);
									
							//Sale_compensation_detail ---------------------------------------
								//Check year1
									if (!jsonObj_product.get("year1").toString().equals("")) {
										setSale_Com_Detail = new Sale_compensation_detail ();
										setSale_Com_Detail.setPrd_code(prd_code);
										setSale_Com_Detail.setPrd_rider_code(jsonObj_product.get("cov_code").toString());
										setSale_Com_Detail.setSerie_no(Integer.parseInt(jsonObj_product.get("serie_no").toString()));
										setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
										is_ref_base = jsonObj_product.getBoolean("is_ref_base");
										if (is_ref_base == true) {
											setSale_Com_Detail.setCompen_type("MAX_COM");
										}else {
											setSale_Com_Detail.setCompen_type("COMMISSION");
										}
										setSale_Com_Detail.setCompen_year(1);
										setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("year1").toString()));
										setSale_Com_Detail.setCompen_factor("NONE");
										setSale_Com_Detail.setUser_code(userId);
										setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
										arr_sale_com_detail.add(setSale_Com_Detail);
									}
								//Check year2
									if (!jsonObj_product.get("year2").toString().equals("")) {
										setSale_Com_Detail = new Sale_compensation_detail ();
										setSale_Com_Detail.setPrd_code(prd_code);
										setSale_Com_Detail.setPrd_rider_code(jsonObj_product.get("cov_code").toString());
										setSale_Com_Detail.setSerie_no(Integer.parseInt(jsonObj_product.get("serie_no").toString()));
										setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
										setSale_Com_Detail.setCompen_type("COMMISSION");
										setSale_Com_Detail.setCompen_year(2);
										setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("year2").toString()));
										setSale_Com_Detail.setCompen_factor("NONE");
										setSale_Com_Detail.setUser_code(userId);
										setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
										arr_sale_com_detail.add(setSale_Com_Detail);
									}
								//Check year3
									if (!jsonObj_product.get("year3").toString().equals("")) {
										setSale_Com_Detail = new Sale_compensation_detail ();
										setSale_Com_Detail.setPrd_code(prd_code);
										setSale_Com_Detail.setPrd_rider_code(jsonObj_product.get("cov_code").toString());
										setSale_Com_Detail.setSerie_no(Integer.parseInt(jsonObj_product.get("serie_no").toString()));
										setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
										setSale_Com_Detail.setCompen_type("COMMISSION");
										setSale_Com_Detail.setCompen_year(3);
										setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("year3").toString()));
										setSale_Com_Detail.setCompen_factor("NONE");
										setSale_Com_Detail.setUser_code(userId);
										setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
										arr_sale_com_detail.add(setSale_Com_Detail);
									}
	
								//Check year4
									if (!jsonObj_product.get("year4").toString().equals("")) {
										setSale_Com_Detail = new Sale_compensation_detail ();
										setSale_Com_Detail.setPrd_code(prd_code);
										setSale_Com_Detail.setPrd_rider_code(jsonObj_product.get("cov_code").toString());
										setSale_Com_Detail.setSerie_no(Integer.parseInt(jsonObj_product.get("serie_no").toString()));
										setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
										setSale_Com_Detail.setCompen_type("COMMISSION");
										setSale_Com_Detail.setCompen_year(4);
										setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("year4").toString()));
										setSale_Com_Detail.setCompen_factor("NONE");
										setSale_Com_Detail.setUser_code(userId);
										setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
										arr_sale_com_detail.add(setSale_Com_Detail);
									}
	
								//Check credit
									if (!jsonObj_product.get("credit").toString().equals("")) {
										setSale_Com_Detail = new Sale_compensation_detail ();
										setSale_Com_Detail.setPrd_code(prd_code);
										setSale_Com_Detail.setPrd_rider_code(jsonObj_product.get("cov_code").toString());
										setSale_Com_Detail.setSerie_no(Integer.parseInt(jsonObj_product.get("serie_no").toString()));
										setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
										setSale_Com_Detail.setCompen_type("PERF_CREDIT");
										setSale_Com_Detail.setCompen_year(1);
										setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("credit").toString()));
										setSale_Com_Detail.setCompen_factor("NONE");
										setSale_Com_Detail.setUser_code(userId);
										setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
										arr_sale_com_detail.add(setSale_Com_Detail);
									}
	
								//Check overrid
									if (!jsonObj_product.get("overrid").toString().equals("")) {
										setSale_Com_Detail = new Sale_compensation_detail ();
										setSale_Com_Detail.setPrd_code(prd_code);
										setSale_Com_Detail.setPrd_rider_code(jsonObj_product.get("cov_code").toString());
										setSale_Com_Detail.setSerie_no(Integer.parseInt(jsonObj_product.get("serie_no").toString()));
										setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
										setSale_Com_Detail.setCompen_type("OVERRIDE");
										setSale_Com_Detail.setCompen_year(1);
										setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("overrid").toString()));
										setSale_Com_Detail.setCompen_factor("NONE");
										setSale_Com_Detail.setUser_code(userId);
										setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
										arr_sale_com_detail.add(setSale_Com_Detail);
									}
	
								//Check advance
									if (!jsonObj_product.get("advance").toString().equals("")) {
										setSale_Com_Detail = new Sale_compensation_detail ();
										setSale_Com_Detail.setPrd_code(prd_code);
										setSale_Com_Detail.setPrd_rider_code(jsonObj_product.get("cov_code").toString());
										setSale_Com_Detail.setSerie_no(Integer.parseInt(jsonObj_product.get("serie_no").toString()));
										setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
										setSale_Com_Detail.setCompen_type("ADV_COMM");
										setSale_Com_Detail.setCompen_year(1);
										setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("advance").toString()));
										setSale_Com_Detail.setCompen_factor("NONE");
										setSale_Com_Detail.setUser_code(userId);
										setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
										arr_sale_com_detail.add(setSale_Com_Detail);
									}
	
								//Check mkt_Inc
									if (!jsonObj_product.get("mkt_Inc").toString().equals("")) {
										setSale_Com_Detail = new Sale_compensation_detail ();
										setSale_Com_Detail.setPrd_code(prd_code);
										setSale_Com_Detail.setPrd_rider_code(jsonObj_product.get("cov_code").toString());
										setSale_Com_Detail.setSerie_no(Integer.parseInt(jsonObj_product.get("serie_no").toString()));
										setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
										setSale_Com_Detail.setCompen_type("MKTG_INCENTIVE");
										setSale_Com_Detail.setCompen_year(1);
										setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("mkt_Inc").toString()));
										setSale_Com_Detail.setCompen_factor("NONE");
										setSale_Com_Detail.setUser_code(userId);
										setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
										arr_sale_com_detail.add(setSale_Com_Detail);
									}
	
								//Check saleValume
									if (!jsonObj_product.get("saleValume").toString().equals("")) {
										setSale_Com_Detail = new Sale_compensation_detail ();
										setSale_Com_Detail.setPrd_code(prd_code);
										setSale_Com_Detail.setPrd_rider_code(jsonObj_product.get("cov_code").toString());
										setSale_Com_Detail.setSerie_no(Integer.parseInt(jsonObj_product.get("serie_no").toString()));
										setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
										setSale_Com_Detail.setCompen_type("SALE_VOLUME_BONUS");
										setSale_Com_Detail.setCompen_year(1);
										setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("saleValume").toString()));
										setSale_Com_Detail.setCompen_factor("NONE");
										setSale_Com_Detail.setUser_code(userId);
										setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
										arr_sale_com_detail.add(setSale_Com_Detail);
									}	
	
								//Check saleValume
									if (!jsonObj_product.get("mkt_Exp").toString().equals("")) {
										setSale_Com_Detail = new Sale_compensation_detail ();
										setSale_Com_Detail.setPrd_code(prd_code);
										setSale_Com_Detail.setPrd_rider_code(jsonObj_product.get("cov_code").toString());
										setSale_Com_Detail.setSerie_no(Integer.parseInt(jsonObj_product.get("serie_no").toString()));
										setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));	
										setSale_Com_Detail.setCompen_type("MKTG_EXP");
										setSale_Com_Detail.setCompen_year(1);
										setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("mkt_Exp").toString()));
										setSale_Com_Detail.setCompen_factor("NONE");
										setSale_Com_Detail.setUser_code(userId);
										setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
										arr_sale_com_detail.add(setSale_Com_Detail);
									}	
							}else {
								//Sale_compensation_cond --------------------------------------------
									setSale_Com_Con = new Sale_compensation_cond ();
									setSale_Com_Con.setPrd_code(prd_code);
									setSale_Com_Con.setPrd_rider_code(jsonObj_product.get("cov_code").toString());
									setSale_Com_Con.setSerie_no(1);
									setSale_Com_Con.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));	
									setSale_Com_Con.setEff_date(getData(jsonObj_product.get("eff_data").toString()));
									setSale_Com_Con.setExp_date(getData(jsonObj_product.get("exp_data").toString()));
									setSale_Com_Con.setIs_ref_base(Boolean.valueOf(jsonObj_product.get("is_ref_base").toString()));
									setSale_Com_Con.setUser_code(userId);
									setSale_Com_Con.setUpdate_time(PDFFnc.currentTimeStamp());
									arr_sale_com_cond.add(setSale_Com_Con);
								//Sale_compensation_detail ---------------------------------------
									//Check year1
										if (!jsonObj_product.get("year1").toString().equals("")) {
											setSale_Com_Detail = new Sale_compensation_detail ();
											setSale_Com_Detail.setPrd_code(prd_code);
											setSale_Com_Detail.setPrd_rider_code(jsonObj_product.get("cov_code").toString());
											setSale_Com_Detail.setSerie_no(1);
											setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
											if (is_ref_base == true) {
												setSale_Com_Detail.setCompen_type("MAX_COM");
											}else {
												setSale_Com_Detail.setCompen_type("COMMISSION");
											}
											setSale_Com_Detail.setCompen_year(1);
											setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("year1").toString()));
											setSale_Com_Detail.setCompen_factor("NONE");
											setSale_Com_Detail.setUser_code(userId);
											setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
											arr_sale_com_detail.add(setSale_Com_Detail);
										}
									//Check year2
										if (!jsonObj_product.get("year2").toString().equals("")) {
											setSale_Com_Detail = new Sale_compensation_detail ();
											setSale_Com_Detail.setPrd_code(prd_code);
											setSale_Com_Detail.setPrd_rider_code(jsonObj_product.get("cov_code").toString());
											setSale_Com_Detail.setSerie_no(1);
											setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
											setSale_Com_Detail.setCompen_type("COMMISSION");
											setSale_Com_Detail.setCompen_year(2);
											setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("year2").toString()));
											setSale_Com_Detail.setCompen_factor("NONE");
											setSale_Com_Detail.setUser_code(userId);
											setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
											arr_sale_com_detail.add(setSale_Com_Detail);
										}
									//Check year3
										if (!jsonObj_product.get("year3").toString().equals("")) {
											setSale_Com_Detail = new Sale_compensation_detail ();
											setSale_Com_Detail.setPrd_code(prd_code);
											setSale_Com_Detail.setPrd_rider_code(jsonObj_product.get("cov_code").toString());
											setSale_Com_Detail.setSerie_no(1);
											setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
											setSale_Com_Detail.setCompen_type("COMMISSION");
											setSale_Com_Detail.setCompen_year(3);
											setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("year3").toString()));
											setSale_Com_Detail.setCompen_factor("NONE");
											setSale_Com_Detail.setUser_code(userId);
											setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
											arr_sale_com_detail.add(setSale_Com_Detail);
										}
	
									//Check year4
										if (!jsonObj_product.get("year4").toString().equals("")) {
											setSale_Com_Detail = new Sale_compensation_detail ();
											setSale_Com_Detail.setPrd_code(prd_code);
											setSale_Com_Detail.setPrd_rider_code(jsonObj_product.get("cov_code").toString());
											setSale_Com_Detail.setSerie_no(1);
											setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
											setSale_Com_Detail.setCompen_type("COMMISSION");
											setSale_Com_Detail.setCompen_year(4);
											setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("year4").toString()));
											setSale_Com_Detail.setCompen_factor("NONE");
											setSale_Com_Detail.setUser_code(userId);
											setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
											arr_sale_com_detail.add(setSale_Com_Detail);
										}
	
									//Check credit
										if (!jsonObj_product.get("credit").toString().equals("")) {
											setSale_Com_Detail = new Sale_compensation_detail ();
											setSale_Com_Detail.setPrd_code(prd_code);
											setSale_Com_Detail.setPrd_rider_code(jsonObj_product.get("cov_code").toString());
											setSale_Com_Detail.setSerie_no(1);
											setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
											setSale_Com_Detail.setCompen_type("PERF_CREDIT");
											setSale_Com_Detail.setCompen_year(1);
											setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("credit").toString()));
											setSale_Com_Detail.setCompen_factor("NONE");
											setSale_Com_Detail.setUser_code(userId);
											setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
											arr_sale_com_detail.add(setSale_Com_Detail);
										}
	
									//Check overrid
										if (!jsonObj_product.get("overrid").toString().equals("")) {
											setSale_Com_Detail = new Sale_compensation_detail ();
											setSale_Com_Detail.setPrd_code(prd_code);
											setSale_Com_Detail.setPrd_rider_code(jsonObj_product.get("cov_code").toString());
											setSale_Com_Detail.setSerie_no(1);
											setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
											setSale_Com_Detail.setCompen_type("OVERRIDE");
											setSale_Com_Detail.setCompen_year(1);
											setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("overrid").toString()));
											setSale_Com_Detail.setCompen_factor("NONE");
											setSale_Com_Detail.setUser_code(userId);
											setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
											arr_sale_com_detail.add(setSale_Com_Detail);
										}
	
									//Check advance
										if (!jsonObj_product.get("advance").toString().equals("")) {
											setSale_Com_Detail = new Sale_compensation_detail ();
											setSale_Com_Detail.setPrd_code(prd_code);
											setSale_Com_Detail.setPrd_rider_code(jsonObj_product.get("cov_code").toString());
											setSale_Com_Detail.setSerie_no(1);
											setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
											setSale_Com_Detail.setCompen_type("ADV_COMM");
											setSale_Com_Detail.setCompen_year(1);
											setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("advance").toString()));
											setSale_Com_Detail.setCompen_factor("NONE");
											setSale_Com_Detail.setUser_code(userId);
											setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
											arr_sale_com_detail.add(setSale_Com_Detail);
										}
	
									//Check mkt_Inc
										if (!jsonObj_product.get("mkt_Inc").toString().equals("")) {
											setSale_Com_Detail = new Sale_compensation_detail ();
											setSale_Com_Detail.setPrd_code(prd_code);
											setSale_Com_Detail.setPrd_rider_code(jsonObj_product.get("cov_code").toString());
											setSale_Com_Detail.setSerie_no(1);
											setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
											setSale_Com_Detail.setCompen_type("MKTG_INCENTIVE");
											setSale_Com_Detail.setCompen_year(1);
											setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("mkt_Inc").toString()));
											setSale_Com_Detail.setCompen_factor("NONE");
											setSale_Com_Detail.setUser_code(userId);
											setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
											arr_sale_com_detail.add(setSale_Com_Detail);
										}
	
									//Check saleValume
										if (!jsonObj_product.get("saleValume").toString().equals("")) {
											setSale_Com_Detail = new Sale_compensation_detail ();
											setSale_Com_Detail.setPrd_code(prd_code);
											setSale_Com_Detail.setPrd_rider_code(jsonObj_product.get("cov_code").toString());
											setSale_Com_Detail.setSerie_no(1);
											setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
											setSale_Com_Detail.setCompen_type("SALE_VOLUME_BONUS");
											setSale_Com_Detail.setCompen_year(1);
											setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("saleValume").toString()));
											setSale_Com_Detail.setCompen_factor("NONE");
											setSale_Com_Detail.setUser_code(userId);
											setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
											arr_sale_com_detail.add(setSale_Com_Detail);
										}	
	
									//Check saleValume
										if (!jsonObj_product.get("mkt_Exp").toString().equals("")) {
											setSale_Com_Detail = new Sale_compensation_detail ();
											setSale_Com_Detail.setPrd_code(prd_code);
											setSale_Com_Detail.setPrd_rider_code(jsonObj_product.get("cov_code").toString());
											setSale_Com_Detail.setSerie_no(1);
											setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));	
											setSale_Com_Detail.setCompen_type("MKTG_EXP");
											setSale_Com_Detail.setCompen_year(1);
											setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("mkt_Exp").toString()));
											setSale_Com_Detail.setCompen_factor("NONE");
											setSale_Com_Detail.setUser_code(userId);
											setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
											arr_sale_com_detail.add(setSale_Com_Detail);
										}	
							}
						
						}
					}
					
				}
				scs.doSaleCompensationSerie(arr_sale_com_serie);
			}else {
				
				String sale_benefit1 				= request.getParameter("sale_benefit1");
				//sale_benefit1 						= "[{\"serie_no\":\"1\",\"gender\":\"MALE\",\"mode\":\"ANNUAL\",\"min_age\":\"1\",\"max_age\":\"10\",\"min_sum\":\"50000\",\"max_sum\":\"100000\",\"min_period\":\"1\",\"max_period\":\"8\"},{\"serie_no\":\"2\",\"gender\":\"MALE\",\"mode\":\"SEMIANNUAL\",\"min_age\":\"1\",\"max_age\":\"20\",\"min_sum\":\"100000\",\"max_sum\":\"1000000\",\"min_period\":\"1\",\"max_period\":\"10\"}]";
				String sale_benefit2 				= request.getParameter("sale_benefit2");
				//sale_benefit2 						= "[{\"is_ref_base\":false,\"cov_code\":\"IL_OR_MED_B_0001\",\"seq\":\"1\",\"eff_data\":\"01/01/2562\",\"exp_data\":\"31/01/2562\",\"serie_no\":\"1\",\"year1\":\"1\",\"year2\":\"11\",\"year3\":\"111\",\"year4\":\"111\",\"credit\":\"11.11\",\"overrid\":\"11.11\",\"advance\":\"10.00\",\"mkt_Inc\":\"10.00\",\"saleValume\":\"10.00\",\"mkt_Exp\":\"10.00\"},{\"is_ref_base\":false,\"cov_code\":\"IL_OR_MED_B_0001\",\"seq\":\"2\",\"eff_data\":\"01/03/2562\",\"exp_data\":\"31/03/2562\",\"serie_no\":\"\",\"year1\":\"2\",\"year2\":\"22\",\"year3\":\"222\",\"year4\":\"222\",\"credit\":\"22.22\",\"overrid\":\"10.00\",\"advance\":\"10.00\",\"mkt_Inc\":\"10.00\",\"saleValume\":\"10.00\",\"mkt_Exp\":\"10.00\"},{\"is_ref_base\":false,\"cov_code\":\"IL_OR_MED_B_0001\",\"seq\":\"1\",\"eff_data\":\"01/04/2562\",\"exp_data\":\"31/04/2562\",\"serie_no\":\"2\",\"year1\":\"3\",\"year2\":\"33\",\"year3\":\"333\",\"year4\":\"333\",\"credit\":\"33.33\",\"overrid\":\"10.00\",\"advance\":\"10.00\",\"mkt_Inc\":\"10.00\",\"saleValume\":\"10.00\",\"mkt_Exp\":\"10.00\"},{\"is_ref_base\":true,\"cov_code\":\"RO_AC_ADB_PR_0665\",\"seq\":\"1\",\"eff_data\":\"01/05/2562\",\"exp_data\":\"31/05/2562\",\"serie_no\":\"1\",\"year1\":\"4\",\"year2\":\"44\",\"year3\":\"444\",\"year4\":\"444\",\"credit\":\"44.44\",\"overrid\":\"10.00\",\"advance\":\"10.00\",\"mkt_Inc\":\"10.00\",\"saleValume\":\"10.00\",\"mkt_Exp\":\"10.00\"}]";
				
				JSONArray arr_sale_Com1				= new JSONArray(sale_benefit1);
				JSONArray arr_sale_Com2				= new JSONArray(sale_benefit2);
				
				
				ArrayList<Sale_compensation_serie> arr_compensation_serie 	= scs.searchByPrdCode();
				
				Sale_compensation_serie setSale_Com_Serie 	= new Sale_compensation_serie ();
				Sale_compensation_cond setSale_Com_Con 		= new Sale_compensation_cond ();
				Sale_compensation_detail setSale_Com_Detail	 = new Sale_compensation_detail ();
				
				boolean is_ref_base = false ;
				///SET sale_benefit1 ***************************************************************
				for (int i = 0; i < arr_sale_Com1.length(); i++) {
					JSONObject jsonObj_product 	= arr_sale_Com1.getJSONObject(i);
					//set Row Master
					//Sale_compensation_serie -------------------------------------
						if (arr_compensation_serie.size() == 0) {
							setSale_Com_Serie 	= new Sale_compensation_serie ();
							setSale_Com_Serie.setPrd_code(prd_code);
							setSale_Com_Serie.setPrd_rider_code(prd_code);
							if (!jsonObj_product.get("serie_no").toString().equals("")) {
								setSale_Com_Serie.setSerie_no(Integer.parseInt(jsonObj_product.get("serie_no").toString()));
							}
							if (!jsonObj_product.get("gender").toString().equals("")) {
								setSale_Com_Serie.setGender(jsonObj_product.get("gender").toString());
							}else {
								setSale_Com_Serie.setGender("NONE");
							}
							if (!jsonObj_product.get("mode").toString().equals("")) {
								setSale_Com_Serie.setMode(jsonObj_product.get("mode").toString());
							}else {
								setSale_Com_Serie.setMode("NONE");
							}
							
							if (!jsonObj_product.get("min_age").toString().equals("")) {
								setSale_Com_Serie.setMin_age(Integer.parseInt(jsonObj_product.get("min_age").toString()));
							}
							if (!jsonObj_product.get("max_age").toString().equals("")) {
								setSale_Com_Serie.setMax_age(Integer.parseInt(jsonObj_product.get("max_age").toString()));
							}
							if (!jsonObj_product.get("min_sum").toString().equals("")) {
								setSale_Com_Serie.setMin_sum(covertStringtoBigDecimal(jsonObj_product.get("min_sum").toString()));
							}
							if (!jsonObj_product.get("max_sum").toString().equals("")) {
								setSale_Com_Serie.setMax_sum(covertStringtoBigDecimal(jsonObj_product.get("max_sum").toString()));
							}
							if (!jsonObj_product.get("min_period").toString().equals("")) {
								setSale_Com_Serie.setMin_period(Integer.parseInt(jsonObj_product.get("min_period").toString()));
							}
							if (!jsonObj_product.get("max_period").toString().equals("")) {
								setSale_Com_Serie.setMax_period(Integer.parseInt(jsonObj_product.get("max_period").toString()));
							}
							setSale_Com_Serie.setUser_code(userId);
							setSale_Com_Serie.setUpdate_time(PDFFnc.currentTimeStamp());
							arr_sale_com_serie.add(setSale_Com_Serie);
						}else {
							//setSale_Com_Serie 	=  arr_compensation_serie.get(i);
							setSale_Com_Serie 	= new Sale_compensation_serie ();
							setSale_Com_Serie.setPrd_code(prd_code);
							setSale_Com_Serie.setPrd_rider_code(prd_code);
							if (!jsonObj_product.get("serie_no").toString().equals("")) {
								setSale_Com_Serie.setSerie_no(Integer.parseInt(jsonObj_product.get("serie_no").toString()));
							}
							if (!jsonObj_product.get("gender").toString().equals("")) {
								setSale_Com_Serie.setGender(jsonObj_product.get("gender").toString());
							}else {
								setSale_Com_Serie.setGender("NONE");
							}
							if (!jsonObj_product.get("mode").toString().equals("")) {
								setSale_Com_Serie.setMode(jsonObj_product.get("mode").toString());
							}else {
								setSale_Com_Serie.setMode("NONE");
							}
							if (!jsonObj_product.get("min_age").toString().equals("")) {
								setSale_Com_Serie.setMin_age(Integer.parseInt(jsonObj_product.get("min_age").toString()));
							}
							if (!jsonObj_product.get("max_age").toString().equals("")) {
								setSale_Com_Serie.setMax_age(Integer.parseInt(jsonObj_product.get("max_age").toString()));
							}
							if (!jsonObj_product.get("min_sum").toString().equals("")) {
								setSale_Com_Serie.setMin_sum(covertStringtoBigDecimal(jsonObj_product.get("min_sum").toString()));
							}
							if (!jsonObj_product.get("max_sum").toString().equals("")) {
								setSale_Com_Serie.setMax_sum(covertStringtoBigDecimal(jsonObj_product.get("max_sum").toString()));
							}
							if (!jsonObj_product.get("min_period").toString().equals("")) {
								setSale_Com_Serie.setMin_period(Integer.parseInt(jsonObj_product.get("min_period").toString()));
							}
							if (!jsonObj_product.get("max_period").toString().equals("")) {
								setSale_Com_Serie.setMax_period(Integer.parseInt(jsonObj_product.get("max_period").toString()));
							}
							setSale_Com_Serie.setUser_code(userId);
							setSale_Com_Serie.setUpdate_time(PDFFnc.currentTimeStamp());
							arr_sale_com_serie.add(setSale_Com_Serie);
						}
				}	
				scs.doSaleCompensationSerie(arr_sale_com_serie);

				///SET sale_benefit2 ********************************************************************
				String checkBasePlan = "";
				if (arr_sale_Com2.length() > 0) {
					JSONObject jsonObj_product 	= arr_sale_Com2.getJSONObject(0);
					checkBasePlan = jsonObj_product.get("cov_code").toString();
				}
				for (int i = 0; i < arr_sale_Com2.length(); i++) {
					JSONObject jsonObj_product 	= arr_sale_Com2.getJSONObject(i);
					//check Base and Rider
					if (!checkBasePlan.equals("")) {
						if (jsonObj_product.get("cov_code").toString().equals(checkBasePlan)) {
							//set Row Master
							if (!jsonObj_product.get("serie_no").toString().equals("")) {
							//Sale_compensation_cond --------------------------------------------
									setSale_Com_Con = new Sale_compensation_cond ();
									setSale_Com_Con.setPrd_code(prd_code);
									setSale_Com_Con.setPrd_rider_code(prd_code);
									setSale_Com_Con.setSerie_no(Integer.parseInt(jsonObj_product.get("serie_no").toString()));
									setSale_Com_Con.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));	
									setSale_Com_Con.setEff_date(getData(jsonObj_product.get("eff_data").toString()));
									setSale_Com_Con.setExp_date(getData(jsonObj_product.get("exp_data").toString()));
									setSale_Com_Con.setIs_ref_base(Boolean.valueOf(jsonObj_product.get("is_ref_base").toString()));
									setSale_Com_Con.setUser_code(userId);
									setSale_Com_Con.setUpdate_time(PDFFnc.currentTimeStamp());
									arr_sale_com_cond.add(setSale_Com_Con);
									
							//Sale_compensation_detail ---------------------------------------
								//Check year1
									if (!jsonObj_product.get("year1").toString().equals("")) {
										setSale_Com_Detail = new Sale_compensation_detail ();
										setSale_Com_Detail.setPrd_code(prd_code);
										setSale_Com_Detail.setPrd_rider_code(prd_code);
										setSale_Com_Detail.setSerie_no(Integer.parseInt(jsonObj_product.get("serie_no").toString()));
										setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
										is_ref_base = jsonObj_product.getBoolean("is_ref_base");
										if (is_ref_base == true) {
											setSale_Com_Detail.setCompen_type("MAX_COM");
										}else {
											setSale_Com_Detail.setCompen_type("COMMISSION");
										}
										setSale_Com_Detail.setCompen_year(1);
										setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("year1").toString()));
										setSale_Com_Detail.setCompen_factor("NONE");
										setSale_Com_Detail.setUser_code(userId);
										setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
										arr_sale_com_detail.add(setSale_Com_Detail);
									}
								//Check year2
									if (!jsonObj_product.get("year2").toString().equals("")) {
										setSale_Com_Detail = new Sale_compensation_detail ();
										setSale_Com_Detail.setPrd_code(prd_code);
										setSale_Com_Detail.setPrd_rider_code(prd_code);
										setSale_Com_Detail.setSerie_no(Integer.parseInt(jsonObj_product.get("serie_no").toString()));
										setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
										setSale_Com_Detail.setCompen_type("COMMISSION");
										setSale_Com_Detail.setCompen_year(2);
										setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("year2").toString()));
										setSale_Com_Detail.setCompen_factor("NONE");
										setSale_Com_Detail.setUser_code(userId);
										setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
										arr_sale_com_detail.add(setSale_Com_Detail);
									}
								//Check year3
									if (!jsonObj_product.get("year3").toString().equals("")) {
										setSale_Com_Detail = new Sale_compensation_detail ();
										setSale_Com_Detail.setPrd_code(prd_code);
										setSale_Com_Detail.setPrd_rider_code(prd_code);
										setSale_Com_Detail.setSerie_no(Integer.parseInt(jsonObj_product.get("serie_no").toString()));
										setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
										setSale_Com_Detail.setCompen_type("COMMISSION");
										setSale_Com_Detail.setCompen_year(3);
										setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("year3").toString()));
										setSale_Com_Detail.setCompen_factor("NONE");
										setSale_Com_Detail.setUser_code(userId);
										setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
										arr_sale_com_detail.add(setSale_Com_Detail);
									}
	
								//Check year4
									if (!jsonObj_product.get("year4").toString().equals("")) {
										setSale_Com_Detail = new Sale_compensation_detail ();
										setSale_Com_Detail.setPrd_code(prd_code);
										setSale_Com_Detail.setPrd_rider_code(prd_code);
										setSale_Com_Detail.setSerie_no(Integer.parseInt(jsonObj_product.get("serie_no").toString()));
										setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
										setSale_Com_Detail.setCompen_type("COMMISSION");
										setSale_Com_Detail.setCompen_year(4);
										setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("year4").toString()));
										setSale_Com_Detail.setCompen_factor("NONE");
										setSale_Com_Detail.setUser_code(userId);
										setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
										arr_sale_com_detail.add(setSale_Com_Detail);
									}
	
								//Check credit
									if (!jsonObj_product.get("credit").toString().equals("")) {
										setSale_Com_Detail = new Sale_compensation_detail ();
										setSale_Com_Detail.setPrd_code(prd_code);
										setSale_Com_Detail.setPrd_rider_code(prd_code);
										setSale_Com_Detail.setSerie_no(Integer.parseInt(jsonObj_product.get("serie_no").toString()));
										setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
										setSale_Com_Detail.setCompen_type("PERF_CREDIT");
										setSale_Com_Detail.setCompen_year(1);
										setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("credit").toString()));
										setSale_Com_Detail.setCompen_factor("NONE");
										setSale_Com_Detail.setUser_code(userId);
										setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
										arr_sale_com_detail.add(setSale_Com_Detail);
									}
	
								//Check overrid
									if (!jsonObj_product.get("overrid").toString().equals("")) {
										setSale_Com_Detail = new Sale_compensation_detail ();
										setSale_Com_Detail.setPrd_code(prd_code);
										setSale_Com_Detail.setPrd_rider_code(prd_code);
										setSale_Com_Detail.setSerie_no(Integer.parseInt(jsonObj_product.get("serie_no").toString()));
										setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
										setSale_Com_Detail.setCompen_type("OVERRIDE");
										setSale_Com_Detail.setCompen_year(1);
										setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("overrid").toString()));
										setSale_Com_Detail.setCompen_factor("NONE");
										setSale_Com_Detail.setUser_code(userId);
										setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
										arr_sale_com_detail.add(setSale_Com_Detail);
									}
	
								//Check advance
									if (!jsonObj_product.get("advance").toString().equals("")) {
										setSale_Com_Detail = new Sale_compensation_detail ();
										setSale_Com_Detail.setPrd_code(prd_code);
										setSale_Com_Detail.setPrd_rider_code(prd_code);
										setSale_Com_Detail.setSerie_no(Integer.parseInt(jsonObj_product.get("serie_no").toString()));
										setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
										setSale_Com_Detail.setCompen_type("ADV_COMM");
										setSale_Com_Detail.setCompen_year(1);
										setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("advance").toString()));
										setSale_Com_Detail.setCompen_factor("NONE");
										setSale_Com_Detail.setUser_code(userId);
										setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
										arr_sale_com_detail.add(setSale_Com_Detail);
									}
	
								//Check mkt_Inc
									if (!jsonObj_product.get("mkt_Inc").toString().equals("")) {
										setSale_Com_Detail = new Sale_compensation_detail ();
										setSale_Com_Detail.setPrd_code(prd_code);
										setSale_Com_Detail.setPrd_rider_code(prd_code);
										setSale_Com_Detail.setSerie_no(Integer.parseInt(jsonObj_product.get("serie_no").toString()));
										setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
										setSale_Com_Detail.setCompen_type("MKTG_INCENTIVE");
										setSale_Com_Detail.setCompen_year(1);
										setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("mkt_Inc").toString()));
										setSale_Com_Detail.setCompen_factor("NONE");
										setSale_Com_Detail.setUser_code(userId);
										setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
										arr_sale_com_detail.add(setSale_Com_Detail);
									}
	
								//Check saleValume
									if (!jsonObj_product.get("saleValume").toString().equals("")) {
										setSale_Com_Detail = new Sale_compensation_detail ();
										setSale_Com_Detail.setPrd_code(prd_code);
										setSale_Com_Detail.setPrd_rider_code(prd_code);
										setSale_Com_Detail.setSerie_no(Integer.parseInt(jsonObj_product.get("serie_no").toString()));
										setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
										setSale_Com_Detail.setCompen_type("SALE_VOLUME_BONUS");
										setSale_Com_Detail.setCompen_year(1);
										setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("saleValume").toString()));
										setSale_Com_Detail.setCompen_factor("NONE");
										setSale_Com_Detail.setUser_code(userId);
										setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
										arr_sale_com_detail.add(setSale_Com_Detail);
									}	
	
								//Check saleValume
									if (!jsonObj_product.get("mkt_Exp").toString().equals("")) {
										setSale_Com_Detail = new Sale_compensation_detail ();
										setSale_Com_Detail.setPrd_code(prd_code);
										setSale_Com_Detail.setPrd_rider_code(prd_code);
										setSale_Com_Detail.setSerie_no(Integer.parseInt(jsonObj_product.get("serie_no").toString()));
										setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));	
										setSale_Com_Detail.setCompen_type("MKTG_EXP");
										setSale_Com_Detail.setCompen_year(1);
										setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("mkt_Exp").toString()));
										setSale_Com_Detail.setCompen_factor("NONE");
										setSale_Com_Detail.setUser_code(userId);
										setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
										arr_sale_com_detail.add(setSale_Com_Detail);
									}	
							}else {
								//Sale_compensation_cond --------------------------------------------
									setSale_Com_Con = new Sale_compensation_cond ();
									setSale_Com_Con.setPrd_code(prd_code);
									setSale_Com_Con.setPrd_rider_code(prd_code);
									setSale_Com_Con.setSerie_no(1);
									setSale_Com_Con.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));	
									setSale_Com_Con.setEff_date(getData(jsonObj_product.get("eff_data").toString()));
									setSale_Com_Con.setExp_date(getData(jsonObj_product.get("exp_data").toString()));
									setSale_Com_Con.setIs_ref_base(Boolean.valueOf(jsonObj_product.get("is_ref_base").toString()));
									setSale_Com_Con.setUser_code(userId);
									setSale_Com_Con.setUpdate_time(PDFFnc.currentTimeStamp());
									arr_sale_com_cond.add(setSale_Com_Con);
								//Sale_compensation_detail ---------------------------------------
									//Check year1
										if (!jsonObj_product.get("year1").toString().equals("")) {
											setSale_Com_Detail = new Sale_compensation_detail ();
											setSale_Com_Detail.setPrd_code(prd_code);
											setSale_Com_Detail.setPrd_rider_code(prd_code);
											setSale_Com_Detail.setSerie_no(1);
											setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
											if (is_ref_base == true) {
												setSale_Com_Detail.setCompen_type("MAX_COM");
											}else {
												setSale_Com_Detail.setCompen_type("COMMISSION");
											}
											setSale_Com_Detail.setCompen_year(1);
											setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("year1").toString()));
											setSale_Com_Detail.setCompen_factor("NONE");
											setSale_Com_Detail.setUser_code(userId);
											setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
											arr_sale_com_detail.add(setSale_Com_Detail);
										}
									//Check year2
										if (!jsonObj_product.get("year2").toString().equals("")) {
											setSale_Com_Detail = new Sale_compensation_detail ();
											setSale_Com_Detail.setPrd_code(prd_code);
											setSale_Com_Detail.setPrd_rider_code(prd_code);
											setSale_Com_Detail.setSerie_no(1);
											setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
											setSale_Com_Detail.setCompen_type("COMMISSION");
											setSale_Com_Detail.setCompen_year(2);
											setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("year2").toString()));
											setSale_Com_Detail.setCompen_factor("NONE");
											setSale_Com_Detail.setUser_code(userId);
											setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
											arr_sale_com_detail.add(setSale_Com_Detail);
										}
									//Check year3
										if (!jsonObj_product.get("year3").toString().equals("")) {
											setSale_Com_Detail = new Sale_compensation_detail ();
											setSale_Com_Detail.setPrd_code(prd_code);
											setSale_Com_Detail.setPrd_rider_code(prd_code);
											setSale_Com_Detail.setSerie_no(1);
											setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
											setSale_Com_Detail.setCompen_type("COMMISSION");
											setSale_Com_Detail.setCompen_year(3);
											setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("year3").toString()));
											setSale_Com_Detail.setCompen_factor("NONE");
											setSale_Com_Detail.setUser_code(userId);
											setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
											arr_sale_com_detail.add(setSale_Com_Detail);
										}
	
									//Check year4
										if (!jsonObj_product.get("year4").toString().equals("")) {
											setSale_Com_Detail = new Sale_compensation_detail ();
											setSale_Com_Detail.setPrd_code(prd_code);
											setSale_Com_Detail.setPrd_rider_code(prd_code);
											setSale_Com_Detail.setSerie_no(1);
											setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
											setSale_Com_Detail.setCompen_type("COMMISSION");
											setSale_Com_Detail.setCompen_year(4);
											setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("year4").toString()));
											setSale_Com_Detail.setCompen_factor("NONE");
											setSale_Com_Detail.setUser_code(userId);
											setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
											arr_sale_com_detail.add(setSale_Com_Detail);
										}
	
									//Check credit
										if (!jsonObj_product.get("credit").toString().equals("")) {
											setSale_Com_Detail = new Sale_compensation_detail ();
											setSale_Com_Detail.setPrd_code(prd_code);
											setSale_Com_Detail.setPrd_rider_code(prd_code);
											setSale_Com_Detail.setSerie_no(1);
											setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
											setSale_Com_Detail.setCompen_type("PERF_CREDIT");
											setSale_Com_Detail.setCompen_year(1);
											setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("credit").toString()));
											setSale_Com_Detail.setCompen_factor("NONE");
											setSale_Com_Detail.setUser_code(userId);
											setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
											arr_sale_com_detail.add(setSale_Com_Detail);
										}
	
									//Check overrid
										if (!jsonObj_product.get("overrid").toString().equals("")) {
											setSale_Com_Detail = new Sale_compensation_detail ();
											setSale_Com_Detail.setPrd_code(prd_code);
											setSale_Com_Detail.setPrd_rider_code(prd_code);
											setSale_Com_Detail.setSerie_no(1);
											setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
											setSale_Com_Detail.setCompen_type("OVERRIDE");
											setSale_Com_Detail.setCompen_year(1);
											setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("overrid").toString()));
											setSale_Com_Detail.setCompen_factor("NONE");
											setSale_Com_Detail.setUser_code(userId);
											setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
											arr_sale_com_detail.add(setSale_Com_Detail);
										}
	
									//Check advance
										if (!jsonObj_product.get("advance").toString().equals("")) {
											setSale_Com_Detail = new Sale_compensation_detail ();
											setSale_Com_Detail.setPrd_code(prd_code);
											setSale_Com_Detail.setPrd_rider_code(prd_code);
											setSale_Com_Detail.setSerie_no(1);
											setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
											setSale_Com_Detail.setCompen_type("ADV_COMM");
											setSale_Com_Detail.setCompen_year(1);
											setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("advance").toString()));
											setSale_Com_Detail.setCompen_factor("NONE");
											setSale_Com_Detail.setUser_code(userId);
											setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
											arr_sale_com_detail.add(setSale_Com_Detail);
										}
	
									//Check mkt_Inc
										if (!jsonObj_product.get("mkt_Inc").toString().equals("")) {
											setSale_Com_Detail = new Sale_compensation_detail ();
											setSale_Com_Detail.setPrd_code(prd_code);
											setSale_Com_Detail.setPrd_rider_code(prd_code);
											setSale_Com_Detail.setSerie_no(1);
											setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
											setSale_Com_Detail.setCompen_type("MKTG_INCENTIVE");
											setSale_Com_Detail.setCompen_year(1);
											setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("mkt_Inc").toString()));
											setSale_Com_Detail.setCompen_factor("NONE");
											setSale_Com_Detail.setUser_code(userId);
											setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
											arr_sale_com_detail.add(setSale_Com_Detail);
										}
	
									//Check saleValume
										if (!jsonObj_product.get("saleValume").toString().equals("")) {
											setSale_Com_Detail = new Sale_compensation_detail ();
											setSale_Com_Detail.setPrd_code(prd_code);
											setSale_Com_Detail.setPrd_rider_code(prd_code);
											setSale_Com_Detail.setSerie_no(1);
											setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
											setSale_Com_Detail.setCompen_type("SALE_VOLUME_BONUS");
											setSale_Com_Detail.setCompen_year(1);
											setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("saleValume").toString()));
											setSale_Com_Detail.setCompen_factor("NONE");
											setSale_Com_Detail.setUser_code(userId);
											setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
											arr_sale_com_detail.add(setSale_Com_Detail);
										}	
	
									//Check saleValume
										if (!jsonObj_product.get("mkt_Exp").toString().equals("")) {
											setSale_Com_Detail = new Sale_compensation_detail ();
											setSale_Com_Detail.setPrd_code(prd_code);
											setSale_Com_Detail.setPrd_rider_code(prd_code);
											setSale_Com_Detail.setSerie_no(1);
											setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));	
											setSale_Com_Detail.setCompen_type("MKTG_EXP");
											setSale_Com_Detail.setCompen_year(1);
											setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("mkt_Exp").toString()));
											setSale_Com_Detail.setCompen_factor("NONE");
											setSale_Com_Detail.setUser_code(userId);
											setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
											arr_sale_com_detail.add(setSale_Com_Detail);
										}	
							}
						}else {
							//set Row Master
							if (!jsonObj_product.get("serie_no").toString().equals("")) {
							//Sale_compensation_serie -------------------------------------
								if (arr_compensation_serie.size() == 0) {
									setSale_Com_Serie 	= new Sale_compensation_serie ();
									setSale_Com_Serie.setPrd_code(prd_code);
									setSale_Com_Serie.setPrd_rider_code(jsonObj_product.get("cov_code").toString());
									setSale_Com_Serie.setSerie_no(Integer.parseInt(jsonObj_product.get("serie_no").toString()));
									setSale_Com_Serie.setGender("NONE");
									setSale_Com_Serie.setMode("NONE");
									//setSale_Com_Serie.setMin_age(0);
									//setSale_Com_Serie.setMax_age(0);
									//setSale_Com_Serie.setMin_sum(covertStringtoBigDecimal("0"));
									//setSale_Com_Serie.setMax_sum(covertStringtoBigDecimal("0"));
									//setSale_Com_Serie.setMin_period(0);
									//setSale_Com_Serie.setMax_period(0);
									setSale_Com_Serie.setUser_code(userId);
									setSale_Com_Serie.setUpdate_time(PDFFnc.currentTimeStamp());
									arr_sale_com_serie.add(setSale_Com_Serie);
								}else {
									for (int j = 0; j < arr_compensation_serie.size(); j++) {
										if (jsonObj_product.get("cov_code").toString().equals(arr_compensation_serie.get(j).getPrd_rider_code())) {
											setSale_Com_Serie 	=  arr_compensation_serie.get(j);
											setSale_Com_Serie.setSerie_no(Integer.parseInt(jsonObj_product.get("serie_no").toString()));
											setSale_Com_Serie.setUser_code(userId);
											setSale_Com_Serie.setUpdate_time(PDFFnc.currentTimeStamp());
											arr_sale_com_serie.add(setSale_Com_Serie);
										}
									}
								}
								
							//Sale_compensation_cond --------------------------------------------
									setSale_Com_Con = new Sale_compensation_cond ();
									setSale_Com_Con.setPrd_code(prd_code);
									setSale_Com_Con.setPrd_rider_code(jsonObj_product.get("cov_code").toString());
									setSale_Com_Con.setSerie_no(Integer.parseInt(jsonObj_product.get("serie_no").toString()));
									setSale_Com_Con.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));	
									setSale_Com_Con.setEff_date(getData(jsonObj_product.get("eff_data").toString()));
									setSale_Com_Con.setExp_date(getData(jsonObj_product.get("exp_data").toString()));
									setSale_Com_Con.setIs_ref_base(Boolean.valueOf(jsonObj_product.get("is_ref_base").toString()));
									setSale_Com_Con.setUser_code(userId);
									setSale_Com_Con.setUpdate_time(PDFFnc.currentTimeStamp());
									arr_sale_com_cond.add(setSale_Com_Con);
									
							//Sale_compensation_detail ---------------------------------------
								//Check year1
									if (!jsonObj_product.get("year1").toString().equals("")) {
										setSale_Com_Detail = new Sale_compensation_detail ();
										setSale_Com_Detail.setPrd_code(prd_code);
										setSale_Com_Detail.setPrd_rider_code(jsonObj_product.get("cov_code").toString());
										setSale_Com_Detail.setSerie_no(Integer.parseInt(jsonObj_product.get("serie_no").toString()));
										setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
										is_ref_base = jsonObj_product.getBoolean("is_ref_base");
										if (is_ref_base == true) {
											setSale_Com_Detail.setCompen_type("MAX_COM");
										}else {
											setSale_Com_Detail.setCompen_type("COMMISSION");
										}
										setSale_Com_Detail.setCompen_year(1);
										setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("year1").toString()));
										setSale_Com_Detail.setCompen_factor("NONE");
										setSale_Com_Detail.setUser_code(userId);
										setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
										arr_sale_com_detail.add(setSale_Com_Detail);
									}
								//Check year2
									if (!jsonObj_product.get("year2").toString().equals("")) {
										setSale_Com_Detail = new Sale_compensation_detail ();
										setSale_Com_Detail.setPrd_code(prd_code);
										setSale_Com_Detail.setPrd_rider_code(jsonObj_product.get("cov_code").toString());
										setSale_Com_Detail.setSerie_no(Integer.parseInt(jsonObj_product.get("serie_no").toString()));
										setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
										setSale_Com_Detail.setCompen_type("COMMISSION");
										setSale_Com_Detail.setCompen_year(2);
										setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("year2").toString()));
										setSale_Com_Detail.setCompen_factor("NONE");
										setSale_Com_Detail.setUser_code(userId);
										setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
										arr_sale_com_detail.add(setSale_Com_Detail);
									}
								//Check year3
									if (!jsonObj_product.get("year3").toString().equals("")) {
										setSale_Com_Detail = new Sale_compensation_detail ();
										setSale_Com_Detail.setPrd_code(prd_code);
										setSale_Com_Detail.setPrd_rider_code(jsonObj_product.get("cov_code").toString());
										setSale_Com_Detail.setSerie_no(Integer.parseInt(jsonObj_product.get("serie_no").toString()));
										setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
										setSale_Com_Detail.setCompen_type("COMMISSION");
										setSale_Com_Detail.setCompen_year(3);
										setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("year3").toString()));
										setSale_Com_Detail.setCompen_factor("NONE");
										setSale_Com_Detail.setUser_code(userId);
										setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
										arr_sale_com_detail.add(setSale_Com_Detail);
									}
	
								//Check year4
									if (!jsonObj_product.get("year4").toString().equals("")) {
										setSale_Com_Detail = new Sale_compensation_detail ();
										setSale_Com_Detail.setPrd_code(prd_code);
										setSale_Com_Detail.setPrd_rider_code(jsonObj_product.get("cov_code").toString());
										setSale_Com_Detail.setSerie_no(Integer.parseInt(jsonObj_product.get("serie_no").toString()));
										setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
										setSale_Com_Detail.setCompen_type("COMMISSION");
										setSale_Com_Detail.setCompen_year(4);
										setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("year4").toString()));
										setSale_Com_Detail.setCompen_factor("NONE");
										setSale_Com_Detail.setUser_code(userId);
										setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
										arr_sale_com_detail.add(setSale_Com_Detail);
									}
	
								//Check credit
									if (!jsonObj_product.get("credit").toString().equals("")) {
										setSale_Com_Detail = new Sale_compensation_detail ();
										setSale_Com_Detail.setPrd_code(prd_code);
										setSale_Com_Detail.setPrd_rider_code(jsonObj_product.get("cov_code").toString());
										setSale_Com_Detail.setSerie_no(Integer.parseInt(jsonObj_product.get("serie_no").toString()));
										setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
										setSale_Com_Detail.setCompen_type("PERF_CREDIT");
										setSale_Com_Detail.setCompen_year(1);
										setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("credit").toString()));
										setSale_Com_Detail.setCompen_factor("NONE");
										setSale_Com_Detail.setUser_code(userId);
										setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
										arr_sale_com_detail.add(setSale_Com_Detail);
									}
	
								//Check overrid
									if (!jsonObj_product.get("overrid").toString().equals("")) {
										setSale_Com_Detail = new Sale_compensation_detail ();
										setSale_Com_Detail.setPrd_code(prd_code);
										setSale_Com_Detail.setPrd_rider_code(jsonObj_product.get("cov_code").toString());
										setSale_Com_Detail.setSerie_no(Integer.parseInt(jsonObj_product.get("serie_no").toString()));
										setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
										setSale_Com_Detail.setCompen_type("OVERRIDE");
										setSale_Com_Detail.setCompen_year(1);
										setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("overrid").toString()));
										setSale_Com_Detail.setCompen_factor("NONE");
										setSale_Com_Detail.setUser_code(userId);
										setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
										arr_sale_com_detail.add(setSale_Com_Detail);
									}
	
								//Check advance
									if (!jsonObj_product.get("advance").toString().equals("")) {
										setSale_Com_Detail = new Sale_compensation_detail ();
										setSale_Com_Detail.setPrd_code(prd_code);
										setSale_Com_Detail.setPrd_rider_code(jsonObj_product.get("cov_code").toString());
										setSale_Com_Detail.setSerie_no(Integer.parseInt(jsonObj_product.get("serie_no").toString()));
										setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
										setSale_Com_Detail.setCompen_type("ADV_COMM");
										setSale_Com_Detail.setCompen_year(1);
										setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("advance").toString()));
										setSale_Com_Detail.setCompen_factor("NONE");
										setSale_Com_Detail.setUser_code(userId);
										setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
										arr_sale_com_detail.add(setSale_Com_Detail);
									}
	
								//Check mkt_Inc
									if (!jsonObj_product.get("mkt_Inc").toString().equals("")) {
										setSale_Com_Detail = new Sale_compensation_detail ();
										setSale_Com_Detail.setPrd_code(prd_code);
										setSale_Com_Detail.setPrd_rider_code(jsonObj_product.get("cov_code").toString());
										setSale_Com_Detail.setSerie_no(Integer.parseInt(jsonObj_product.get("serie_no").toString()));
										setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
										setSale_Com_Detail.setCompen_type("MKTG_INCENTIVE");
										setSale_Com_Detail.setCompen_year(1);
										setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("mkt_Inc").toString()));
										setSale_Com_Detail.setCompen_factor("NONE");
										setSale_Com_Detail.setUser_code(userId);
										setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
										arr_sale_com_detail.add(setSale_Com_Detail);
									}
	
								//Check saleValume
									if (!jsonObj_product.get("saleValume").toString().equals("")) {
										setSale_Com_Detail = new Sale_compensation_detail ();
										setSale_Com_Detail.setPrd_code(prd_code);
										setSale_Com_Detail.setPrd_rider_code(jsonObj_product.get("cov_code").toString());
										setSale_Com_Detail.setSerie_no(Integer.parseInt(jsonObj_product.get("serie_no").toString()));
										setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
										setSale_Com_Detail.setCompen_type("SALE_VOLUME_BONUS");
										setSale_Com_Detail.setCompen_year(1);
										setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("saleValume").toString()));
										setSale_Com_Detail.setCompen_factor("NONE");
										setSale_Com_Detail.setUser_code(userId);
										setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
										arr_sale_com_detail.add(setSale_Com_Detail);
									}	
	
								//Check saleValume
									if (!jsonObj_product.get("mkt_Exp").toString().equals("")) {
										setSale_Com_Detail = new Sale_compensation_detail ();
										setSale_Com_Detail.setPrd_code(prd_code);
										setSale_Com_Detail.setPrd_rider_code(jsonObj_product.get("cov_code").toString());
										setSale_Com_Detail.setSerie_no(Integer.parseInt(jsonObj_product.get("serie_no").toString()));
										setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));	
										setSale_Com_Detail.setCompen_type("MKTG_EXP");
										setSale_Com_Detail.setCompen_year(1);
										setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("mkt_Exp").toString()));
										setSale_Com_Detail.setCompen_factor("NONE");
										setSale_Com_Detail.setUser_code(userId);
										setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
										arr_sale_com_detail.add(setSale_Com_Detail);
									}	
							}else {
								//Sale_compensation_cond --------------------------------------------
									setSale_Com_Con = new Sale_compensation_cond ();
									setSale_Com_Con.setPrd_code(prd_code);
									setSale_Com_Con.setPrd_rider_code(jsonObj_product.get("cov_code").toString());
									setSale_Com_Con.setSerie_no(1);
									setSale_Com_Con.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));	
									setSale_Com_Con.setEff_date(getData(jsonObj_product.get("eff_data").toString()));
									setSale_Com_Con.setExp_date(getData(jsonObj_product.get("exp_data").toString()));
									setSale_Com_Con.setIs_ref_base(Boolean.valueOf(jsonObj_product.get("is_ref_base").toString()));
									setSale_Com_Con.setUser_code(userId);
									setSale_Com_Con.setUpdate_time(PDFFnc.currentTimeStamp());
									arr_sale_com_cond.add(setSale_Com_Con);
								//Sale_compensation_detail ---------------------------------------
									//Check year1
										if (!jsonObj_product.get("year1").toString().equals("")) {
											setSale_Com_Detail = new Sale_compensation_detail ();
											setSale_Com_Detail.setPrd_code(prd_code);
											setSale_Com_Detail.setPrd_rider_code(jsonObj_product.get("cov_code").toString());
											setSale_Com_Detail.setSerie_no(1);
											setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
											if (is_ref_base == true) {
												setSale_Com_Detail.setCompen_type("MAX_COM");
											}else {
												setSale_Com_Detail.setCompen_type("COMMISSION");
											}
											setSale_Com_Detail.setCompen_year(1);
											setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("year1").toString()));
											setSale_Com_Detail.setCompen_factor("NONE");
											setSale_Com_Detail.setUser_code(userId);
											setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
											arr_sale_com_detail.add(setSale_Com_Detail);
										}
									//Check year2
										if (!jsonObj_product.get("year2").toString().equals("")) {
											setSale_Com_Detail = new Sale_compensation_detail ();
											setSale_Com_Detail.setPrd_code(prd_code);
											setSale_Com_Detail.setPrd_rider_code(jsonObj_product.get("cov_code").toString());
											setSale_Com_Detail.setSerie_no(1);
											setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
											setSale_Com_Detail.setCompen_type("COMMISSION");
											setSale_Com_Detail.setCompen_year(2);
											setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("year2").toString()));
											setSale_Com_Detail.setCompen_factor("NONE");
											setSale_Com_Detail.setUser_code(userId);
											setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
											arr_sale_com_detail.add(setSale_Com_Detail);
										}
									//Check year3
										if (!jsonObj_product.get("year3").toString().equals("")) {
											setSale_Com_Detail = new Sale_compensation_detail ();
											setSale_Com_Detail.setPrd_code(prd_code);
											setSale_Com_Detail.setPrd_rider_code(jsonObj_product.get("cov_code").toString());
											setSale_Com_Detail.setSerie_no(1);
											setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
											setSale_Com_Detail.setCompen_type("COMMISSION");
											setSale_Com_Detail.setCompen_year(3);
											setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("year3").toString()));
											setSale_Com_Detail.setCompen_factor("NONE");
											setSale_Com_Detail.setUser_code(userId);
											setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
											arr_sale_com_detail.add(setSale_Com_Detail);
										}
	
									//Check year4
										if (!jsonObj_product.get("year4").toString().equals("")) {
											setSale_Com_Detail = new Sale_compensation_detail ();
											setSale_Com_Detail.setPrd_code(prd_code);
											setSale_Com_Detail.setPrd_rider_code(jsonObj_product.get("cov_code").toString());
											setSale_Com_Detail.setSerie_no(1);
											setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
											setSale_Com_Detail.setCompen_type("COMMISSION");
											setSale_Com_Detail.setCompen_year(4);
											setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("year4").toString()));
											setSale_Com_Detail.setCompen_factor("NONE");
											setSale_Com_Detail.setUser_code(userId);
											setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
											arr_sale_com_detail.add(setSale_Com_Detail);
										}
	
									//Check credit
										if (!jsonObj_product.get("credit").toString().equals("")) {
											setSale_Com_Detail = new Sale_compensation_detail ();
											setSale_Com_Detail.setPrd_code(prd_code);
											setSale_Com_Detail.setPrd_rider_code(jsonObj_product.get("cov_code").toString());
											setSale_Com_Detail.setSerie_no(1);
											setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
											setSale_Com_Detail.setCompen_type("PERF_CREDIT");
											setSale_Com_Detail.setCompen_year(1);
											setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("credit").toString()));
											setSale_Com_Detail.setCompen_factor("NONE");
											setSale_Com_Detail.setUser_code(userId);
											setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
											arr_sale_com_detail.add(setSale_Com_Detail);
										}
	
									//Check overrid
										if (!jsonObj_product.get("overrid").toString().equals("")) {
											setSale_Com_Detail = new Sale_compensation_detail ();
											setSale_Com_Detail.setPrd_code(prd_code);
											setSale_Com_Detail.setPrd_rider_code(jsonObj_product.get("cov_code").toString());
											setSale_Com_Detail.setSerie_no(1);
											setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
											setSale_Com_Detail.setCompen_type("OVERRIDE");
											setSale_Com_Detail.setCompen_year(1);
											setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("overrid").toString()));
											setSale_Com_Detail.setCompen_factor("NONE");
											setSale_Com_Detail.setUser_code(userId);
											setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
											arr_sale_com_detail.add(setSale_Com_Detail);
										}
	
									//Check advance
										if (!jsonObj_product.get("advance").toString().equals("")) {
											setSale_Com_Detail = new Sale_compensation_detail ();
											setSale_Com_Detail.setPrd_code(prd_code);
											setSale_Com_Detail.setPrd_rider_code(jsonObj_product.get("cov_code").toString());
											setSale_Com_Detail.setSerie_no(1);
											setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
											setSale_Com_Detail.setCompen_type("ADV_COMM");
											setSale_Com_Detail.setCompen_year(1);
											setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("advance").toString()));
											setSale_Com_Detail.setCompen_factor("NONE");
											setSale_Com_Detail.setUser_code(userId);
											setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
											arr_sale_com_detail.add(setSale_Com_Detail);
										}
	
									//Check mkt_Inc
										if (!jsonObj_product.get("mkt_Inc").toString().equals("")) {
											setSale_Com_Detail = new Sale_compensation_detail ();
											setSale_Com_Detail.setPrd_code(prd_code);
											setSale_Com_Detail.setPrd_rider_code(jsonObj_product.get("cov_code").toString());
											setSale_Com_Detail.setSerie_no(1);
											setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
											setSale_Com_Detail.setCompen_type("MKTG_INCENTIVE");
											setSale_Com_Detail.setCompen_year(1);
											setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("mkt_Inc").toString()));
											setSale_Com_Detail.setCompen_factor("NONE");
											setSale_Com_Detail.setUser_code(userId);
											setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
											arr_sale_com_detail.add(setSale_Com_Detail);
										}
	
									//Check saleValume
										if (!jsonObj_product.get("saleValume").toString().equals("")) {
											setSale_Com_Detail = new Sale_compensation_detail ();
											setSale_Com_Detail.setPrd_code(prd_code);
											setSale_Com_Detail.setPrd_rider_code(jsonObj_product.get("cov_code").toString());
											setSale_Com_Detail.setSerie_no(1);
											setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));
											setSale_Com_Detail.setCompen_type("SALE_VOLUME_BONUS");
											setSale_Com_Detail.setCompen_year(1);
											setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("saleValume").toString()));
											setSale_Com_Detail.setCompen_factor("NONE");
											setSale_Com_Detail.setUser_code(userId);
											setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
											arr_sale_com_detail.add(setSale_Com_Detail);
										}	
	
									//Check saleValume
										if (!jsonObj_product.get("mkt_Exp").toString().equals("")) {
											setSale_Com_Detail = new Sale_compensation_detail ();
											setSale_Com_Detail.setPrd_code(prd_code);
											setSale_Com_Detail.setPrd_rider_code(jsonObj_product.get("cov_code").toString());
											setSale_Com_Detail.setSerie_no(1);
											setSale_Com_Detail.setSeq(Integer.parseInt(jsonObj_product.get("seq").toString()));	
											setSale_Com_Detail.setCompen_type("MKTG_EXP");
											setSale_Com_Detail.setCompen_year(1);
											setSale_Com_Detail.setCompen_rate(covertStringtoBigDecimal(jsonObj_product.get("mkt_Exp").toString()));
											setSale_Com_Detail.setCompen_factor("NONE");
											setSale_Com_Detail.setUser_code(userId);
											setSale_Com_Detail.setUpdate_time(PDFFnc.currentTimeStamp());
											arr_sale_com_detail.add(setSale_Com_Detail);
										}	
							}
						}
					}
					
				}
			}
			scc.doSaleCompensationCond(arr_sale_com_cond);
			scd.doSaleCompensationDetail(arr_sale_com_detail);	
			///////////////////////////////////////////////////////////////////////////////////
			// set Status //*Benz 30-08-2019
						ProductData pd = new ProductData();
						Product setProduct = pd.searchProduct(prd_code);
						if (groupName.equals("POC (1740)") || groupName.equals("POC") || groupName.equals("POC_Test")) {
							setProduct.setStatus("UPDATE");//Benz 16-08-2019
						}
						setProduct.setUser_code(userId);
						setProduct.setUpdate_time(getCurrentTimestamp());

						ProductBasicinfo setProductData = new ProductBasicinfo();
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
		return "save_Tab_Benefits";
	
	}
	
	public String save_Tab_Provision(HttpServletRequest request, HttpServletResponse response) throws Exception 
	{
		try {
			PorductProvision  pd = new PorductProvision();
			//prd_code
			String prd_code 				= request.getParameter("prd_code");
			ConstantValues.PRD_CODE 		= prd_code;
			//Product
			String product 					= request.getParameter("product");
			String groupName 				= request.getParameter("groupName");
			ConstantValues.GROUP_NAME 		= groupName;
			
		//CL	product 					= "[{\"first_beneficiary\":\"PARTNER\",\"min_period\":\"17\",\"min_period_unit\":\"YEAR\",\"max_period\":\"70\",\"max_period_unit\":\"YEAR\",\"max_insure_age\":\"70\",\"max_insure_age_unit\":\"YEAR\",\"sale_eff_date\":\"21/06/2019\",\"sale_exp_date\":\"30/06/2019\",\"sys_eff_date\":\"06/01/2019\",\"master_policy\":\"null\",\"is_flp_fee\":false,\"flp_day\":\"0\",\"is_flp\":false}]";
			//	product 					= "[{\"sale_eff_date\":\"21/06/2019\",\"sale_exp_date\":\"30/06/2019\",\"sys_eff_date\":\"06/01/2019\",\"master_policy\":\"null\",\"is_flp_fee\":false,\"flp_day\":\"0\",\"is_flp\":false}]";

			ProductControlData getpcd 		= new ProductControlData();
			ArrayList<Product> arr_Product 	= getpcd.searchProduct(prd_code);
			//ArrayList<Rider> arr_Rider 		= getpcd.searchProductRider(prd_code);
			Product setProduct 				=  new Product();
			JSONArray jsonarr_product		= new JSONArray(product);
			for (int i = 0; i < jsonarr_product.length(); i++) {
				JSONObject jsonObj_product 	= jsonarr_product.getJSONObject(i);
				 setProduct 			=  arr_Product.get(i);
				
				if (!jsonObj_product.getString("sale_eff_date").equals("")) {
					setProduct.setSale_eff_date(getData(jsonObj_product.getString("sale_eff_date")));
				}
				if (!jsonObj_product.getString("sale_exp_date").equals("")) {
					setProduct.setSale_exp_date(getData(jsonObj_product.getString("sale_exp_date")));
				}
				if (!jsonObj_product.getString("sys_eff_date").equals("")) {
					setProduct.setSys_eff_date(getData(jsonObj_product.getString("sys_eff_date")));
				}
				
				setProduct.setIs_flp_fee(jsonObj_product.getBoolean("is_flp_fee"));
				if (jsonObj_product.getInt("flp_day") != 0) {
					setProduct.setFlp_day(jsonObj_product.getInt("flp_day"));
					setProduct.setFlp_start_date("POL_RECEIVE_DATE");
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
				setmode.setPrem_calc_meth(jsonObj_mode.getString("prem_cal_meth"));	
				mode_arr.add(setmode);
			}
			//Participant
			String ageRange_from 				= request.getParameter("ageRange_from");
			String ageRange_from_type 			= request.getParameter("ageRange_from_type");
			String ageRange_to 					= request.getParameter("ageRange_to");
			String ageRange_to_type 			= request.getParameter("ageRange_to_type");
			String ageRange_max 				= request.getParameter("ageRange_max");
			
			
			String participant 				= request.getParameter("participant");
			
		//	 participant 					= "[{\"min_issue_age\":\"17\",\"min_issue_age_unit\":\"YEAR\",\"max_issue_age\":\"70\",\"max_issue_age_unit\":\"YEAR\",\"max_insure_age\":\"70\",\"max_insure_age_unit\":\"YEAR\",\"age_calc_meth\":\"\"}]";
			
			String age_formula 					= request.getParameter("age_formula");
			//age_formula 	= "[{\"key\":\"LAST_BIRTHDAY\",\"text\":\"Last Birthday\"},{\"key\":\"NEAR_IN_DAYS\",\"text\":\"Nearest Birthday (in days)\"},{\"key\":\"NEAR_IN_MONTHS\",\"text\":\"Nearest Birthday\"},{\"key\":\"NEXT_BIRTHDAY\",\"text\":\"Next Birthday\"},{\"key\":\"YEAR_SUBTRACT\",\"text\":\"ปีขาย - ปีเกิด\"";
			
			ArrayList<Participant> participant_arr = new ArrayList<>();
			
			ParticipantControlData pcd = new ParticipantControlData();
					
			ArrayList<Participant> getparticipant_arr = pcd.searchParticipant(prd_code);
			for (Participant participant_data : getparticipant_arr) {
				JSONArray participant_JSONarr		= new JSONArray(participant);
				for (int i = 0; i < participant_JSONarr.length(); i++) {
				JSONObject jsonObj_participant = participant_JSONarr.getJSONObject(i);
						
						if (participant_data.getPrd_rider_code().equals(prd_code)) 
						{
							//Participant setParticipant = participant_data;
							//ที่คอมเม้นรอดึงข้อมูลมาเดิมแมฟ
							participant_data.setPrd_code(prd_code);
							participant_data.setPrd_rider_code(prd_code);
							if (!jsonObj_participant.getString("min_issue_age").equals("")) {
								participant_data.setMin_issue_age(Integer.parseInt(jsonObj_participant.getString("min_issue_age")));
							}
							participant_data.setMin_issue_age_unit(jsonObj_participant.getString("min_issue_age_unit"));
							if (!jsonObj_participant.getString("max_issue_age").equals("")) {
								participant_data.setMax_issue_age(Integer.parseInt(jsonObj_participant.getString("max_issue_age")));

							}
							participant_data.setMax_issue_age_unit(jsonObj_participant.getString("max_issue_age_unit"));
							if (jsonObj_participant.getString("age_calc_meth").equals("")) {
								participant_data.setAge_calc_meth("NONE");
							}else {
								participant_data.setAge_calc_meth(jsonObj_participant.getString("age_calc_meth"));
							} 
							participant_data.setUser_code(userId);
							participant_data.setUpdate_time(PDFFnc.currentTimeStamp());
						}
				}
				participant_arr.add(participant_data);
			}
		 	pd.doParticipant(participant_arr); 
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
		//	anti_HIV											= "[{\"key\":\"5\",\"prd_code\":\"IL_OR_MRT_P_0002\",\"eff_date\":\"21/06/2019\",\"exp_date\":\"30/06/2019\"}]";
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
				
				if(!jsonObj_Unw_accum_rule.getString("cov_cat_lv_1").equals("")) {
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
					if(jsonObj_Unw_accum_rule.getString("sale_chan_id").equals("0") || jsonObj_Unw_accum_rule.getString("sale_chan_id").equals("")){
						setuar.setSale_chan_id(0); //**เก็บ
					}else {
						setuar.setSale_chan_id(Integer.parseInt(jsonObj_Unw_accum_rule.getString("sale_chan_id"))); //**เก็บ
					}	
					if (!jsonObj_Unw_accum_rule.getString("sale_partner_code").equals("undefined")) {
						setuar.setSale_partner_code(jsonObj_Unw_accum_rule.get("sale_partner_code").toString());
					}else {
						setuar.setSale_partner_code("NONE");

					}
					setuar.setUser_code(userId);
					setuar.setUpdate_time(PDFFnc.currentTimeStamp());
					unwAccumRule_arr.add(setuar);
				}
				
			}
			//Unw_pol_issue_unit รอหน้าบ้านปรับแก้ตอนส่งมานิสนึง
			String pol_issue_unit 									= request.getParameter("pol_issue_unit");
		//	pol_issue_unit											= "[{\"NBI\":true,\"headquarters\":false}]";
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
		//	doOcc									= "[{\"key\":\"0\",\"text\":\"ทุกชั้นอาชีพ\",\"check\":true},{\"key\":\"1\",\"text\":\"ชั้นอาชีพ 1\",\"check\":true},{\"key\":\"2\",\"text\":\"ชั้นอาชีพ 2\",\"check\":true},{\"key\":\"3\",\"text\":\"ชั้นอาชีพ 3\",\"check\":false},{\"key\":\"4\",\"text\":\"ชั้นอาชีพ 4\",\"check\":false}]";
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
		//	unw_hist_rule									= "[{\"Hist_type\":\"CLAIM\",\"Is_check\":true,\"Is_restrict\":true,\"Restrict_type_1\":\"MED_SUM\",\"Condition_1\":\"OR\",\"Restrict_type_2\":\"PRODUCT\",\"Condition_2\":\"OR\",\"Restrict_type_3\":\"NEW_SA\",\"New_sa_compare\":\"GT\",\"New_sa_amt\":\"10000\"},{\"Hist_type\":\"IC\",\"Is_check\":true,\"Is_restrict\":true,\"Restrict_type_1\":\"MED_SUM\",\"Condition_1\":\"OR\",\"Restrict_type_2\":\"PRODUCT\",\"Condition_2\":\"OR\",\"Restrict_type_3\":\"NEW_SA\",\"New_sa_compare\":\"GT\",\"New_sa_amt\":\"10000\"},{\"Hist_type\":\"SUBSTD\",\"Is_check\":true,\"Is_restrict\":true,\"Restrict_type_1\":\"MED_SUM\",\"Condition_1\":\"OR\",\"Restrict_type_2\":\"PRODUCT\",\"Condition_2\":\"OR\",\"Restrict_type_3\":\"NEW_SA\",\"New_sa_compare\":\"GT\",\"New_sa_amt\":\"10000\"}]";
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

				if ((!jsonObj_unw_hist_rule.getString("New_sa_amt").equals(""))) {
					setUnw_hist_rule.setNew_sa_amt(covertStringtoBigDecimal(jsonObj_unw_hist_rule.getString("New_sa_amt")));
				}			
				setUnw_hist_rule.setNew_sa_compare(jsonObj_unw_hist_rule.getString("New_sa_compare"));
				
			/*	setUnw_hist_rule.setRestrict_type_1("NONE");
				setUnw_hist_rule.setCondition_1("NONE");
				setUnw_hist_rule.setRestrict_type_2("NONE");
				setUnw_hist_rule.setCondition_2("NONE");
				setUnw_hist_rule.setRestrict_type_3("NONE");
				setUnw_hist_rule.setNew_sa_compare("NONE");*/
				
				setUnw_hist_rule.setUser_code(userId);
				setUnw_hist_rule.setUpdate_time(PDFFnc.currentTimeStamp());
				unw_hist_rule_arr.add(setUnw_hist_rule);
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
		//	underwrite									= "[{\"is_prd_max_policy\":true,\"prd_max_policy\":\"100\",\"prd_max_sa\":\"100\",\"prd_max_sa_unit\":\"CURRENCY\",\"is_pax_max_policy\":true,\"pax_max_policy\":\"300\",\"pax_max_sa\":\"400\",\"pax_max_sa_unit\":\"CURRENCY\",\"is_sum_range\":true,\"is_med_req\":true,\"is_med_sum_accum\":true,\"med_sum_factor\":\"88\",\"is_exist_policy\":true,\"is_insure_sum_accum\":true,\"insure_sum_factor\":\"99\",\"is_substandard\":true,\"is_rider_allow\":true,\"rider_buy_meth\":\"SA_ONLY\",\"is_rider_sum_accum\":false,\"is_check_ic_ba\":false,\"is_check_ic_fi_cft\":false,\"is_check_sale_blacklist\":false,\"is_reins_alert\":false,\"is_fax_app\":false}]";
			
			JSONArray underwrite_jsonarr				= new JSONArray(underwrite);
				JSONObject jsonObj_underwrite			=underwrite_jsonarr.getJSONObject(0);
				Underwrite setunderwrite 				= new Underwrite();
			
				setunderwrite.setPrd_code(prd_code);
				if (jsonObj_underwrite.getBoolean("is_prd_max_policy") == true) {
					setunderwrite.setIs_prd_max_policy(true);
					if  (!jsonObj_underwrite.getString("prd_max_policy").equals("")) {
						setunderwrite.setPrd_max_policy(Integer.parseInt(jsonObj_underwrite.getString("prd_max_policy")));
					}
					if  (!jsonObj_underwrite.getString("prd_max_sa").equals("")) {
						setunderwrite.setPrd_max_sa(covertStringtoBigDecimal((jsonObj_underwrite.getString("prd_max_sa"))));
					}
					setunderwrite.setPrd_max_sa_unit("CURRENCY");
				}
				
				if (jsonObj_underwrite.getBoolean("is_pax_max_policy") == true) {
					setunderwrite.setIs_pax_max_policy(true);
					if  (!jsonObj_underwrite.getString("pax_max_policy").equals("")) {
						setunderwrite.setPax_max_policy(Integer.parseInt(jsonObj_underwrite.getString("pax_max_policy")));
					}
					if  (!jsonObj_underwrite.getString("pax_max_sa").equals("")) {
						setunderwrite.setPax_max_sa(covertStringtoBigDecimal((jsonObj_underwrite.getString("pax_max_sa"))));
					}
					setunderwrite.setPax_max_unit("CURRENCY");
				}
					setunderwrite.setIs_sum_range(jsonObj_underwrite.getBoolean("is_sum_range"));
					setunderwrite.setIs_med_req(jsonObj_underwrite.getBoolean("is_med_req"));
				if (jsonObj_underwrite.getBoolean("is_med_sum_accum") == true) {
					setunderwrite.setIs_med_sum_accum(jsonObj_underwrite.getBoolean("is_med_sum_accum"));
					setunderwrite.setMed_sum_factor(covertStringtoBigDecimal(jsonObj_underwrite.getString("med_sum_factor")));
				}
					setunderwrite.setIs_exist_policy(jsonObj_underwrite.getBoolean("is_exist_policy"));
				if (jsonObj_underwrite.getBoolean("is_insure_sum_accum") == true) {
					setunderwrite.setIs_insure_sum_accum(jsonObj_underwrite.getBoolean("is_insure_sum_accum"));
					setunderwrite.setInsure_sum_factor(covertStringtoBigDecimal(jsonObj_underwrite.getString("insure_sum_factor")));
				}
				setunderwrite.setIs_substandard(jsonObj_underwrite.getBoolean("is_substandard"));
				
				
				if (!jsonObj_underwrite.getString("prd_max_sa").equals("")) {
					setunderwrite.setPrd_max_sa(covertStringtoBigDecimal(jsonObj_underwrite.getString("prd_max_sa")));
				}
					setunderwrite.setPrd_max_sa_unit(jsonObj_underwrite.getString("prd_max_sa_unit"));
					setunderwrite.setPrd_max_sa_factor("NONE");
					setunderwrite.setIs_med_req(jsonObj_underwrite.getBoolean("is_med_req"));
				
				if (jsonObj_underwrite.getBoolean("is_rider_allow") == true) {
					setunderwrite.setIs_rider_allow(jsonObj_underwrite.getBoolean("is_rider_allow"));
				}
					setunderwrite.setRider_buy_meth(jsonObj_underwrite.getString("rider_buy_meth")); // pun ย้ายออกมาจาก if ข้างบน
					setunderwrite.setIs_rider_sum_accum(jsonObj_underwrite.getBoolean("is_rider_sum_accum"));
					setunderwrite.setIs_check_ic_ba(jsonObj_underwrite.getBoolean("is_check_ic_ba"));
					setunderwrite.setIs_check_ic_fi_cft(jsonObj_underwrite.getBoolean("is_check_ic_fi_cft"));
					setunderwrite.setIs_check_sale_blacklist(jsonObj_underwrite.getBoolean("is_check_sale_blacklist"));
					//setunderwrite.setIs_reins_alert(jsonObj_underwrite.getBoolean("is_reins_alert"));
					setunderwrite.setIs_fax_app(jsonObj_underwrite.getBoolean("is_fax_app"));
					setunderwrite.setPol_print_at("IN_HOUSE");///ไปก่อน
					setunderwrite.setUser_code(userId);
					setunderwrite.setUpdate_time(PDFFnc.currentTimeStamp());
					
					////Unw_rider_limit
					String 	unw_rider_limit							= request.getParameter("unwRiderLimit");
					JSONArray unw_rider_limit_jsonarr				= new JSONArray(unw_rider_limit);
					ArrayList<Unw_rider_limit> arr_unw_rider_limit 	= new ArrayList<>();
					for (int i = 0; i < unw_rider_limit_jsonarr.length(); i++) {
						JSONObject jsonunw_rider_limit 					= unw_rider_limit_jsonarr.getJSONObject(i);
						Unw_rider_limit setunw_rider_limit 				=  new Unw_rider_limit();//getunw_rider_limit_coop.get(i);		
						setunw_rider_limit.setPrd_code(prd_code);
						setunw_rider_limit.setPrd_rider_code(jsonunw_rider_limit.getString("prd_rider_code"));
						//setunw_rider_limit.setPax_max_sa_amt();
						setunw_rider_limit.setPax_max_sa_unit("CURRENCY");
						setunw_rider_limit.setPax_max_sa_factor("NONE");
						setunw_rider_limit.setMax_em(covertStringtoBigDecimal(jsonunw_rider_limit.get("max_em").toString()));
						setunw_rider_limit.setUser_code(userId);
						setunw_rider_limit.setUpdate_time(PDFFnc.currentTimeStamp());
						arr_unw_rider_limit.add(setunw_rider_limit);
					}
//**********************************************************************************************			
///Benz set unwSumRange 
					UnwSumRangeData usr = new UnwSumRangeData();
					String unwSumRange 							= request.getParameter("unwSumRange");
					///unwSumRange									= "[{\"seq\":1,\"amt_type\":\"SA\",\"min_sa\":\"0.11\",\"max_sa\":\"0.22\",\"increase_range\":\"0.33\"}]";
					ArrayList<Unw_sum_range> unwSumRange_arr				= new ArrayList<>();
					JSONArray unwSumRange_jsonarr					= new JSONArray(unwSumRange);
					for (int i = 0; i < unwSumRange_jsonarr.length(); i++) {
						JSONObject jsonObj_doOcc = unwSumRange_jsonarr.getJSONObject(i);
						Unw_sum_range setUnw_sum_range = new Unw_sum_range();
						setUnw_sum_range.setPrd_code(prd_code);
						setUnw_sum_range.setPrd_rider_code(prd_code);
						setUnw_sum_range.setSeq(Integer.parseInt(jsonObj_doOcc.get("seq").toString()));
						setUnw_sum_range.setAmt_type(jsonObj_doOcc.getString("amt_type"));
						if (!jsonObj_doOcc.get("min_sa").toString().equals("")) {
							setUnw_sum_range.setMin_sa(covertStringtoBigDecimal(jsonObj_doOcc.get("min_sa").toString()));
						}
						if (!jsonObj_doOcc.get("max_sa").toString().equals("")) {
							setUnw_sum_range.setMax_sa(covertStringtoBigDecimal(jsonObj_doOcc.get("max_sa").toString()));
						}
						if (!jsonObj_doOcc.get("increase_range").toString().equals("")) {
							setUnw_sum_range.setIncrease_range(covertStringtoBigDecimal(jsonObj_doOcc.get("increase_range").toString()));
						}
						setUnw_sum_range.setUser_code(userId);
						setUnw_sum_range.setUpdate_time(PDFFnc.currentTimeStamp());
						unwSumRange_arr.add(setUnw_sum_range);
					}
					//Collect
					String premCollect 						= request.getParameter("premCollect");
					//premCollect								= "[{\"prem_flag\":\"FYP\",\"collect_meth\":\"CASH\"},{\"prem_flag\":\"FYP\",\"collect_meth\":\"CREDIT_CARD\"},{\"prem_flag\":\"FYP\",\"collect_meth\":\"CHEQUE\"},{\"prem_flag\":\"FYP\",\"collect_meth\":\"DEBIT_CARD\"},{\"prem_flag\":\"FYP\",\"collect_meth\":\"DIRECT_DEBIT\"},{\"prem_flag\":\"RYP\",\"collect_meth\":\"CASH\"},{\"prem_flag\":\"RYP\",\"collect_meth\":\"CREDIT_CARD\"},{\"prem_flag\":\"RYP\",\"collect_meth\":\"CHEQUE\"},{\"prem_flag\":\"RYP\",\"collect_meth\":\"DEBIT_CARD\"},{\"prem_flag\":\"RYP\",\"collect_meth\":\"DIRECT_DEBIT\"}]";
					ArrayList<Prem_collect> premCollect_arr				= new ArrayList<>();
					JSONArray premCollect_jsonarr					= new JSONArray(premCollect);
					for (int i = 0; i < premCollect_jsonarr.length(); i++) {
						JSONObject jsonObj_doOcc = premCollect_jsonarr.getJSONObject(i);
						Prem_collect setPrem_collect = new Prem_collect();
							setPrem_collect.setPrd_code(prd_code);
							setPrem_collect.setPrem_flag(jsonObj_doOcc.getString("prem_flag"));
							setPrem_collect.setCollect_meth(jsonObj_doOcc.getString("collect_meth"));
							setPrem_collect.setUser_code(userId);
							setPrem_collect.setUpdate_time(PDFFnc.currentTimeStamp());
							premCollect_arr.add(setPrem_collect);
					}
					PremCollectControlData pcc 	= new PremCollectControlData();
			////Unw_accum_rule_exclude
					ArrayList<Unw_accum_rule_exclude> lstUnw_accum_rule_excludes_SA = new ArrayList<>();
					String unw_accum_rule_exclude_str 									= request.getParameter("unwAccumRuleExclude");
					//unw_accum_rule_exclude_str								= "[{\"accum_type\":\"MED_SUM\",\"exclude_prd_code\":\"GL_CL_MRT_P_1317\"},{\"accum_type\":\"EXIST_POLICY\",\"exclude_prd_code\":\"\"},{\"accum_type\":\"INSURED_SUM\",\"exclude_prd_code\":\"IL_OR_MRT_P_0002\"}]";
					JSONArray unw_accum_rule_exclude_jsonarr						= new JSONArray(unw_accum_rule_exclude_str);
					if (unw_accum_rule_exclude_str.length() != 0) {
						for (int i = 0; i < unw_accum_rule_exclude_jsonarr.length(); i++) {
							JSONObject unw_accum_rule_exclude_jsonObj = unw_accum_rule_exclude_jsonarr.getJSONObject(i);
							if(!unw_accum_rule_exclude_jsonObj.get("exclude_prd_code").equals("") && unw_accum_rule_exclude_jsonObj.get("exclude_prd_code") != null) {
								Unw_accum_rule_exclude unw_accum_rule_exclude = new Unw_accum_rule_exclude();
								unw_accum_rule_exclude.setPrd_code(prd_code);
								unw_accum_rule_exclude.setAccum_type(unw_accum_rule_exclude_jsonObj.getString("accum_type"));
								unw_accum_rule_exclude.setExclude_prd_code(unw_accum_rule_exclude_jsonObj.getString("exclude_prd_code"));
								unw_accum_rule_exclude.setUser_code(userId);
								unw_accum_rule_exclude.setUpdate_time(PDFFnc.currentTimeStamp());
								lstUnw_accum_rule_excludes_SA.add(unw_accum_rule_exclude);
								/*if(unw_accum_rule_exclude_jsonObj.getString("accum_type").equals("POLICY")) {
									lstUnw_accum_rule_excludes_POLICY.add(unw_accum_rule_exclude);
								}else if(unw_accum_rule_exclude_jsonObj.getString("accum_type").equals("SA")) {
									lstUnw_accum_rule_excludes_SA.add(unw_accum_rule_exclude);
								}*/
							}
						}
					}
			UnwAccumRuleExcludeData unwExclude = new UnwAccumRuleExcludeData();
			unwExclude.insertUnwAccumRuleExcludePB(lstUnw_accum_rule_excludes_SA);
			
			//ProductRider 
			ProductControlData pc 	= new ProductControlData(); 
			ArrayList<Rider> arr_rider = pc.searchProductRider_Participant(prd_code);
			String productRider						= request.getParameter("rider");
			//productRider								= "[{\"prd_rider_code\":\"RO_AC_ADB_PR_1146\",\"flag_type\":\"R\",\"select_rule\":\"OPTIONAL\",\"prem_cal_meth\":\"SA_ONLY\"},{\"prd_rider_code\":\"RO_AC_ADB_PR_1145\",\"flag_type\":\"R\",\"select_rule\":\"OPTIONAL\",\"prem_cal_meth\":\"SA_ONLY\"},{\"prd_rider_code\":\"RO_AC_ADB_PR_1125\",\"flag_type\":\"R\",\"select_rule\":\"OPTIONAL\",\"prem_cal_meth\":\"PREM_ONLY\"}]";
			ArrayList<Rider> productRider_arr				= new ArrayList<>();
			JSONArray productRider_jsonarr					= new JSONArray(productRider);
			ProductData pr 	= new ProductData();
			Product setpd 	= new Product(); 
			ParticipantData ppd = new ParticipantData();
			ArrayList<layout.bean.productfac.coverage.Participant> arr_ppd  = new ArrayList<>();
			
			ArrayList<Participant> participant_arr2 = new ArrayList<>();
			ArrayList<Participant> getparticipant_arr2 = pcd.searchParticipant(prd_code);
			boolean check_duplicate = false;
			if (productRider_jsonarr.length() > 0) {
				for (int i = 0; i < productRider_jsonarr.length(); i++) {
					participant_arr2	= new ArrayList<>();
					Rider setRider 		= new Rider();
					JSONObject jsonObj_productRider = productRider_jsonarr.getJSONObject(i);
					
					for (int ii = 0; ii < arr_rider.size(); ii++) {
						if (!jsonObj_productRider.getString("prd_rider_code").equals( arr_rider.get(ii).getPrd_rider_code())) 
						{
							setRider.setPrd_code(prd_code);
							setRider.setPrd_rider_code(jsonObj_productRider.getString("prd_rider_code"));
							setRider.setFlag_type(jsonObj_productRider.getString("flag_type"));
							setRider.setSelect_rule(jsonObj_productRider.getString("select_rule"));
							setRider.setPrem_calc_meth(jsonObj_productRider.getString("prem_cal_meth"));
							setRider.setUser_code(userId);
							int sec = 1 * (ii + 1) ;
							setRider.setUpdate_time(addSecondTime(sec));
							productRider_arr.add(setRider);
						}else {
							setRider = arr_rider.get(ii);
							setRider = arr_rider.remove(ii);
							setRider.setPrd_code(prd_code);
							setRider.setPrd_rider_code(jsonObj_productRider.getString("prd_rider_code"));
							setRider.setFlag_type(jsonObj_productRider.getString("flag_type"));
							setRider.setSelect_rule(jsonObj_productRider.getString("select_rule"));
							setRider.setPrem_calc_meth(jsonObj_productRider.getString("prem_cal_meth"));
							setRider.setUser_code(userId);
							int sec = 1 * (ii + 1) ;
							setRider.setUpdate_time(addSecondTime(sec));
							productRider_arr.add(setRider);
						}
					}
					///Benz 08-11-2019 Add rider to PB
					setpd 				=	pr.searchRidercodeByKey(jsonObj_productRider.getString("prd_rider_code"));
					arr_ppd 			= 	ppd.searchCoverageParticipantAll(setpd.getCov_code());
					Participant setppd 	= 	new  Participant();
					check_duplicate 	= false;
					for (int iii = 0; iii < getparticipant_arr2.size(); iii++) {
						setppd  = getparticipant_arr2.get(iii);
						if (getparticipant_arr2.get(iii).getPrd_rider_code().equals(jsonObj_productRider.getString("prd_rider_code"))) 
						{
							if (jsonObj_productRider.getBoolean("save_rider") == true) {
								setppd.setPrd_code(prd_code);
								setppd.setPrd_rider_code(jsonObj_productRider.getString("prd_rider_code"));
								setppd.setPartic_type(arr_ppd.get(0).getPartic_type());
								setppd.setPrem_rule(arr_ppd.get(0).getPrem_rule());
								setppd.setAge_calc_meth("NONE");
								setppd.setGender(arr_ppd.get(0).getIssue_gender());
								setppd.setMin_issue_age(arr_ppd.get(0).getMin_issue_age());
								setppd.setMin_issue_age_unit(arr_ppd.get(0).getMin_issue_age_unit());
								
								setppd.setMax_issue_age(arr_ppd.get(0).getMax_issue_age());
								setppd.setMax_issue_age_unit(arr_ppd.get(0).getMax_issue_age_unit());
								
								
								setppd.setMax_insure_age(arr_ppd.get(0).getMax_insure_age());
								setppd.setMax_insure_age_unit(arr_ppd.get(0).getMax_insure_age_unit());
								
								setppd.setMax_insure_year(arr_ppd.get(0).getMax_insure_year());
								setppd.setMax_insure_year_unit(arr_ppd.get(0).getMax_insure_year_unit());
								
								setppd.setUser_code(userId);
								int sec = 1 * (iii + 1) ;
								setppd.setUpdate_time(addSecondTime(sec));
							}
						}
						participant_arr2.add(setppd);
					}
					////////////////////////////////////////////
					arr_rider.add(setRider);
				}
				
				//Benz 08-11-2019 Add rider เพิ่มข้อมูลใหม่ ในกรณีไม่มีข้อมูลเดิมอยู่ใน DB ////////////////////////
				for (int i = 0; i < productRider_jsonarr.length(); i++) {
					JSONObject jsonObj_productRider = productRider_jsonarr.getJSONObject(i);
					 for (int jj = 0; jj < participant_arr2.size(); jj++) {
						if (participant_arr2.get(jj).getPrd_rider_code().equals(jsonObj_productRider.getString("prd_rider_code"))) {
							check_duplicate = false;
							break;
						}else {
							check_duplicate = true;
						}
					}
					if (check_duplicate == true) {
						setpd 				=	pr.searchRidercodeByKey(jsonObj_productRider.getString("prd_rider_code"));
						arr_ppd 			= 	ppd.searchCoverageParticipantAll(setpd.getCov_code());
						Participant	setppd = new Participant();
							if (arr_ppd.get(0).getPartic_type().equals("PRIMARY")) {
								setppd.setPrd_code(prd_code);
								setppd.setPrd_rider_code(jsonObj_productRider.getString("prd_rider_code"));
								setppd.setPartic_type(arr_ppd.get(0).getPartic_type());
								setppd.setPrem_rule(arr_ppd.get(0).getPrem_rule());
								setppd.setAge_calc_meth("NONE");
								setppd.setGender(arr_ppd.get(0).getIssue_gender());
								setppd.setMin_issue_age(arr_ppd.get(0).getMin_issue_age());
								setppd.setMin_issue_age_unit(arr_ppd.get(0).getMin_issue_age_unit());
								
								setppd.setMax_issue_age(arr_ppd.get(0).getMax_issue_age());
								setppd.setMax_issue_age_unit(arr_ppd.get(0).getMax_issue_age_unit());
								
								
								setppd.setMax_insure_age(arr_ppd.get(0).getMax_insure_age());
								setppd.setMax_insure_age_unit(arr_ppd.get(0).getMax_insure_age_unit());
								
								setppd.setMax_insure_year(arr_ppd.get(0).getMax_insure_year());
								setppd.setMax_insure_year_unit(arr_ppd.get(0).getMax_insure_year_unit());
								
								setppd.setUser_code(userId);
								setppd.setUpdate_time(PDFFnc.currentTimeStamp());
								participant_arr2.add(setppd);
							}
					}
				}
			////////////////////Benz 08-11-2019 Add participant////ลบ ข้อมูล ในกรณีที่หน้าบ้านเอาCheckBox ออก//////////////////////////////////////////
				for (int i = 0; i < productRider_jsonarr.length(); i++) {
					for (int l = 0; l < participant_arr2.size(); l++) {
						JSONObject jsonObj_productRider = productRider_jsonarr.getJSONObject(i);
						if (participant_arr2.get(l).getPrd_rider_code().equals(jsonObj_productRider.getString("prd_rider_code"))) {
							if (jsonObj_productRider.getBoolean("save_rider") == false) {
								participant_arr2.remove(l);
							}
						}
					}
				}	
			////////////////////Benz 08-11-2019 Add rider////ลบ ข้อมูล ในกรณีที่หน้าบ้านเอาCheckBox ออก//////////////////////////////////////////
				for (int i = 0; i < productRider_jsonarr.length(); i++) {
					for (int l = 0; l < arr_rider.size(); l++) {
						JSONObject jsonObj_productRider = productRider_jsonarr.getJSONObject(i);
						if (arr_rider.get(l).getPrd_rider_code().equals(jsonObj_productRider.getString("prd_rider_code"))) {
							if (jsonObj_productRider.getBoolean("save_rider") == false) {
								arr_rider.remove(l);
							}
						}
					}
				}
				pd.doParticipant(participant_arr2); 
				pc.insertProductRider(arr_rider);
			}
			//////////////////////////////////////////////////
			usr.doProductUnwSumRange(unwSumRange_arr);
			pcc.insertPremCollect(prd_code, premCollect_arr);
			pd.doProduct(setProduct,null); 
			pd.doMode(mode_arr); 
			pd.doAppenDixProduct(Appendix_product_arr);
			pd.doUnwHistRule(unw_hist_rule_arr); 
			//pd.doUnwHistMedSum(unw_hist_med_sum_arr);  ไม่มีใน PB
			//pd.doUnwHistMedSumDet(unw_hist_med_sum_det_arr);  ไม่มีใน PB
			pd.doUnwHistExistProd(unwHistExistProd_arr);  
			pd.doUnderwrite(setunderwrite); 
			pd.doUnwRiderLimit(arr_unw_rider_limit);
			/*if (unw_cocredit_limit_jsonarr.length() > 0) {
				pd.doUnwCocreditLimit(unw_cocredit_limit_arr); 
			}  ไม่มีใน PB */ 
			
			//pd.doUnwSubstdType(unw_substd_type_arr);  ********ไม่มีใน PB
			pd.doFlpFee(flp_fee_arr); 	
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
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "save_Tab_Provision";
	}
	
	public String save_Tab_Policy(HttpServletRequest request, HttpServletResponse response) throws Exception{
		try {
			String prd_code    			= request.getParameter("prd_code");
			String groupName    		= request.getParameter("groupName");
			String pol_print_at			= request.getParameter("pol_point_at");
			ConstantValues.GROUP_NAME 	= groupName;
			ConstantValues.PRD_CODE = prd_code;
			
			PorductProvision  pd = new PorductProvision();
			UnderwriteControlData underwriteControlData = new UnderwriteControlData();
			Underwrite underwrite 				= underwriteControlData.searchProductUnderwrite(prd_code);
			underwrite.setPol_print_at(pol_print_at);
			
			pd.doUnderwrite(underwrite); 
			
			//set Status //*Benz 30-08-2019
			ProductData pd1 		= new ProductData();
			Product setProduct 	=	pd1.searchProduct(prd_code);
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
		return "save_Tab_Policy";
	}
	
	
	public String check_Approved(HttpServletRequest request, HttpServletResponse response) throws Exception 
	{
		String passInsurance 			= request.getParameter("passInsurance");
		String remark_noApproved 		= request.getParameter("remark_noApproved");
		String remark_update 			= request.getParameter("remark_update");
		ProductData cd 					= new ProductData();
		Product setProduct 				= cd.searchProduct(passInsurance);
		String status			 		= request.getParameter("status");
		String setstatus 				= "";
		String groupName 				= request.getParameter("groupName");
		ConstantValues.GROUP_NAME 		= groupName;
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
	
	public String detract(HttpServletRequest request, HttpServletResponse response) throws Exception 
	{
		try {
		/*	String prd_rider_code = request.getParameter("prd_rider_code");
			if (!prd_rider_code.equals("")) {
				String[] jsonArr_prd_rider_code = prd_rider_code.split(",");
				ProductDetract pd = new ProductDetract();

				pd.detract(jsonArr_prd_rider_code);
			}*/
			
			String prd_rider_code = request.getParameter("prd_rider_code");
			if(prd_rider_code != "") {
				JSONArray jsonArr_policy_changeType		= new JSONArray(prd_rider_code);
				String[] arr_str = new String[jsonArr_policy_changeType.length()]; 
				for (int i = 0; i < jsonArr_policy_changeType.length(); i++) {
					JSONObject jsonObj_policy_changeType = jsonArr_policy_changeType.getJSONObject(i);
					arr_str[i] = jsonObj_policy_changeType.getString("prd_rider_code");
					
				}
				ProductDetract pd = new ProductDetract();
				pd.detract(arr_str);
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return  "delete";
	}
	
	// func..
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
		private String compareValuePrdDesign(String prdDesign) throws Exception{
			String select_rule = "";
			if(prdDesign.equals("RATE_MAKING")) {
				select_rule = "RATE_MAKING";
			}else if(prdDesign.equals("OIC_RATE")) {
				select_rule = "OIC_RATE";
			}else if(prdDesign.equals("BUNDLE")) {
				select_rule = "MANDATORY";
			}else if(prdDesign.equals("PACKAGE_SA") || prdDesign.equals("PACKAGE")) {
				select_rule = "AUTOMATIC";
			}else if(prdDesign.equals("OPTIONAL")) {
				select_rule = "OPTIONAL";
			}else if (prdDesign.equals("NONE")) {
				select_rule = "NONE";
			}
			return select_rule;
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
		// Pun โกงเพิ่มเวลา เพื่อการ sort data ที่ถูกต้อง
		private Timestamp addSecondTime(int sec) throws Exception {
			Calendar cal = Calendar.getInstance();
			cal.setTimeInMillis(PDFFnc.currentTimeStamp().getTime());
			cal.add(Calendar.SECOND,sec);
			Timestamp ts_new_date_ws = new Timestamp(cal.getTime().getTime());
			return ts_new_date_ws;
		}
}
