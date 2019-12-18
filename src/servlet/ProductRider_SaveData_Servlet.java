package servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.math.BigDecimal;
import java.sql.Date;
import java.sql.Timestamp;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.JSONArray;
import org.json.JSONObject;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import layout.bean.productfac.coverage.Benefit_amount;
import layout.bean.productfac.coverage.Benefit_item;
import layout.bean.productfac.coverage.Benefit_limit;
import layout.bean.productfac.coverage.Benefit_sched;
import layout.bean.productfac.coverage.Benefit_special_amount;
import layout.bean.productfac.coverage.Cov_terminate;
import layout.bean.productfac.coverage.Coverage;
import layout.bean.productfac.product.Coop;
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
import layout.bean.productfac.product.Rate_layout;
import layout.bean.productfac.product.Rider;
import layout.bean.productfac.product.Sale_compensation_cond;
import layout.bean.productfac.product.Sale_compensation_detail;
import layout.bean.productfac.product.Sale_compensation_serie;
import layout.bean.productfac.product.Underwrite;
import layout.bean.productfac.product.Unw_accum_rule;
import layout.bean.productfac.product.Unw_accum_rule_exclude;
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
import service.ProductRider_SaveData_Service;
import service.RiderCL_SaveData_Service;
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
import service.product.SaleCompensationCondData;
import service.product.SaleCompensationDetailData;
import service.product.SaleCompensationSerieData;
import service.product.UnwAccumRuleExcludeData;
import service.product.ctrl.CoopControlData;
import service.product.ctrl.ParticipantControlData;
import service.product.ctrl.ProductControlData;
import service.product.ctrl.UnwRiderLimitControlData;
import service.rider.RiderCovTerminateData;
import service.tab.BasicInfoDataTab;
import utility.support.DateInfo;

/**
 * Servlet implementation class ProductRider_SaveData_Servlet
 */


@WebServlet("/ProductRider_SaveData_Servlet")
public class ProductRider_SaveData_Servlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	ProductAccesData pim;
	private String userId;
	String responseText = "";
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ProductRider_SaveData_Servlet() {
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
				System.out.println("======= Save ProductRiderOL ======"); 
				System.out.println("/////"+request.getParameter("method")); 
				try {
					if (request.getParameter("method").equals("Tab_Basic_Information")) {
						responseText = save_Basic_Info(request, response);
					}else if (request.getParameter("method").equals("Tab_CalInsurance_Premium")) {
						responseText = save_Tab_Cal_insurance(request, response);
					}/*else if (request.getParameter("method").equals("Tab_Coverage_Benefits")) {
						responseText = save_Tab_Coverage_Benefits(request, response);
					}*/else if (request.getParameter("method").equals("Tab_Sales_Benefits")) {
						responseText = save_Tab_Sales_Benefits(request, response);
					}else if (request.getParameter("method").equals("Tab_Provision")) {
						responseText = save_Tab_Provision(request, response);
					}//else if (request.getParameter("method").equals("detract")) {
//						responseText = detract(request, response);
					else if (request.getParameter("method").equals("check_Approved")) {
						responseText = check_Approved(request, response);
					}
					out.print(responseText);
				} catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
	}
	
	public String save_Basic_Info(HttpServletRequest request, HttpServletResponse response) throws Exception
	{

		ProductRider_SaveData_Service settoService  = new ProductRider_SaveData_Service ();
		String prd_code    							= request.getParameter("prd_code");
		String groupName    						= request.getParameter("groupName");
		
		ConstantValues.GROUP_NAME 					= groupName;
		ArrayList<Product> lstProduct 				= new ArrayList<>();
		ConstantValues.PRD_CODE 					= prd_code;
		ArrayList<Rider> lstRider 					= new ArrayList<>();
		ArrayList<Rate_layout> lstRateLayout 		= new ArrayList<>();
		ProductControlData getpcd 					= new ProductControlData();
		ArrayList<Product> arr_Product 				= getpcd.searchProduct(prd_code);
		Product product = new Product();
		 String rider_str = request.getParameter("rider");
			JSONArray jsonArr_rider = new JSONArray(rider_str);
			 for (int i = 0; i < jsonArr_rider.length(); i++) {
				 JSONObject jsonObj_rider = jsonArr_rider.getJSONObject(i);
				if(jsonObj_rider.getString("cov_code").length() != 0) {
					 Rider rider = new Rider();
					 rider.setPrd_code(prd_code);
					 rider.setPrd_rider_code(prd_code);		
					 rider.setMain_rider_code(null);
					 rider.setFlag_type("R");
					 rider.setFix_sa_amt(covertStringtoBigDecimal("0"));
					 rider.setUser_code(userId);
					 rider.setUpdate_time(getCurrentTimestamp());
					 rider.setSelect_rule("NONE");
					 rider.setPrem_calc_meth("NONE");
					 lstRider.add(rider); 
				 }
				 
				 if(!String.valueOf(jsonObj_rider.get("pm_rate_fileId")).equals("")) {
					 Rate_layout rate_layoutPM = new Rate_layout();
					 rate_layoutPM.setPrd_code(prd_code);
					 rate_layoutPM.setPrd_rider_code(jsonObj_rider.getString("prd_rider_code"));		
					 rate_layoutPM.setFile_id(jsonObj_rider.getInt("pm_rate_fileId"));		
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
					product = arr_Product.get(i);
					product.setCore_biz_prd_code(request.getParameter("core_biz_prd_code"));
					product.setPrd_code(prd_code);
					product.setCov_code(jsonObj_rider.getString("cov_code"));
					product.setCov_cat_id(Integer.parseInt(jsonObj_rider.getString("cov_cat_id")));
					product.setName_th(request.getParameter("name_th"));
					product.setName_en(request.getParameter("name_en"));
					product.setMarket_name_th(request.getParameter("market_name_th"));
					product.setMarket_name_en(request.getParameter("market_name_en"));
					product.setPrd_design("NONE");
					product.setFyp_credit_card("NONE");
					product.setRyp_credit_card("NONE");
					product.setReinsurance_opt(request.getParameter("reinsure_group"));
					//product.setFirst_beneficiary(request.getParameter("first_beneficiary"));
					//product.setMax_commission(covertStringtoBigDecimal(request.getParameter("max_commission").toString()));
					//product.setReinsurance_opt(request.getParameter("reinsurance_opt"));		//FIXME PUN
					product.setLoan_type("NONE");
					product.setFirst_beneficiary("NONE");
					
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
					product.setUser_code(userId);
					product.setUpdate_time(getCurrentTimestamp());
					product.setFlp_start_date("CERT_DATE");
					if (groupName.equals("POC (1740)") || groupName.equals("POC") || groupName.equals("POC_Test")) {
						product.setStatus("UPDATE");//Benz 16-08-2019
					}
					lstProduct.add(product);
				}
				
			 }
		settoService.setProductObj(lstProduct, lstRider);
		settoService.setRateLayout(lstRateLayout);
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
	
	
	public String save_Tab_Cal_insurance(HttpServletRequest request, HttpServletResponse response) throws Exception {

		try {
			ProductCalPremium pcp 			= new ProductCalPremium();
			String prd_code    				= request.getParameter("prd_code");
			MainInsuranceService mis 		= new MainInsuranceService();
			ArrayList<Product> caseAll_return;
			caseAll_return 					= mis.GetCaseProduct();
			String lv3_code					= "";
			FreezePolicyValue fpv 			= new FreezePolicyValue();
			String groupName 				= request.getParameter("groupName");
			ConstantValues.GROUP_NAME 		= groupName;
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
					}else if(jsonObj_cal_insurance.getString("type").equals("NAR")) {
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
	
	public String save_Tab_Sales_Benefits(HttpServletRequest request, HttpServletResponse response) throws Exception
	{

		try {
			ArrayList<Sale_compensation_serie>	arr_sale_com_serie 	= new ArrayList<Sale_compensation_serie>();
			ArrayList<Sale_compensation_cond>	arr_sale_com_cond 	= new ArrayList<Sale_compensation_cond>();
			ArrayList<Sale_compensation_detail>	arr_sale_com_detail = new ArrayList<Sale_compensation_detail>();

			String prd_code 				= request.getParameter("prd_code");
			String sale_benefit 			= request.getParameter("sale_benefit");
			String groupName 				= request.getParameter("groupName");
			ConstantValues.GROUP_NAME 		= groupName;
			
		//	sale_Com 						= "[{\"is_ref_base\":true,\"seq\":\"1\",\"eff_data\":\"01/01/2562\",\"exp_data\":\"31/01/2562\",\"serie_no\":\"1\",\"year1\":\"10\",\"year2\":\"20\",\"year3\":\"30\",\"year4\":\"40\",\"credit\":\"10.00\",\"overrid\":\"10.00\",\"advance\":\"10.00\",\"mkt_Inc\":\"10.00\",\"saleValume\":\"10.00\",\"mkt_Exp\":\"10.00\"},{\"is_ref_base\":false,\"seq\":\"2\",\"eff_data\":\"01/04/2562\",\"exp_data\":\"31/04/2562\",\"serie_no\":\"\",\"year1\":\"90\",\"year2\":\"80\",\"year3\":\"60\",\"year4\":\"50\",\"credit\":\"40.00\",\"overrid\":\"30.00\",\"advance\":\"20.00\",\"mkt_Inc\":\"10.00\",\"saleValume\":\"10.00\",\"mkt_Exp\":\"10.00\"}]";
			JSONArray arr_sale_Com		= new JSONArray(sale_benefit);
			//searchSale_compensation_serie
			SaleCompensationSerieData scs = new SaleCompensationSerieData();
			ArrayList<Sale_compensation_serie> arr_compensation_serie 	= scs.searchByPrdCode();
			//searchSale_compensation_cond
			SaleCompensationCondData scc = new SaleCompensationCondData();
			//SaleCompensationDetailData
			SaleCompensationDetailData scd = new SaleCompensationDetailData();
			
			Sale_compensation_serie setSale_Com_Serie 	= new Sale_compensation_serie ();
			Sale_compensation_cond setSale_Com_Con 		= new Sale_compensation_cond ();
			Sale_compensation_detail setSale_Com_Detail	 = new Sale_compensation_detail ();
			boolean is_ref_base = false ;
			
			for (int i = 0; i < arr_sale_Com.length(); i++) {
				JSONObject jsonObj_product 	= arr_sale_Com.getJSONObject(i);
				//set Row Master
				if (!jsonObj_product.get("serie_no").toString().equals("")) {
				//Sale_compensation_serie -------------------------------------
					if (arr_compensation_serie.size() == 0) {
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
					}else {
						setSale_Com_Serie 	=  arr_compensation_serie.get(i);
						setSale_Com_Serie.setSerie_no(Integer.parseInt(jsonObj_product.get("serie_no").toString()));
						setSale_Com_Serie.setUser_code(userId);
						setSale_Com_Serie.setUpdate_time(PDFFnc.currentTimeStamp());
						arr_sale_com_serie.add(setSale_Com_Serie);
					}
					
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
			}	
			scs.doSaleCompensationSerie(arr_sale_com_serie);///
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
	
	public String save_Tab_Provision(HttpServletRequest request, HttpServletResponse response) throws Exception{

		PorductProvision  pd = new PorductProvision();
		UnwAccumRuleExcludeData unwExclude = new UnwAccumRuleExcludeData();
		//prd_code
		String prd_code 				= request.getParameter("prd_code");
		ConstantValues.PRD_CODE = prd_code;
		//Product searchProduct
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
			
			if (!jsonObj_product.getString("sale_eff_date").equals("")) {
				setProduct.setSale_eff_date(getData(jsonObj_product.getString("sale_eff_date")));
			}
			if (!jsonObj_product.getString("sale_exp_date").equals("")) {
				setProduct.setSale_exp_date(getData(jsonObj_product.getString("sale_exp_date")));
			} 
			if (!jsonObj_product.getString("sys_eff_date").equals("")) {
				setProduct.setSys_eff_date(getData(jsonObj_product.getString("sys_eff_date")));
			}
			setProduct.setUser_code(userId);
			setProduct.setUpdate_time(PDFFnc.currentTimeStamp());
			if (groupName.equals("POC (1740)") || groupName.equals("POC") || groupName.equals("POC_Test")) {
				setProduct.setStatus("UPDATE");//Benz 16-08-2019
			}
			break;
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
		//Participant
		String ageRange_from 				= request.getParameter("ageRange_from");
		String ageRange_from_type 			= request.getParameter("ageRange_from_type");
		String ageRange_to 					= request.getParameter("ageRange_to");
		String ageRange_to_type 			= request.getParameter("ageRange_to_type");
		String ageRange_max 				= request.getParameter("ageRange_max");
		String ageRange_max_type 			= request.getParameter("ageRange_max_type");
		
		String participant 				= request.getParameter("participant");
		
		 //participant 					= "[{\"min_issue_age\":\"17\",\"min_issue_age_unit\":\"YEAR\",\"max_issue_age\":\"70\",\"max_issue_age_unit\":\"YEAR\",\"max_insure_age\":\"70\",\"max_insure_age_unit\":\"YEAR\",\"age_calc_meth\":\"\"}]";
		
		//String age_formula 					= request.getParameter("age_formula");
		//age_formula 	= "[{\"key\":\"LAST_BIRTHDAY\",\"text\":\"Last Birthday\"},{\"key\":\"NEAR_IN_DAYS\",\"text\":\"Nearest Birthday (in days)\"},{\"key\":\"NEAR_IN_MONTHS\",\"text\":\"Nearest Birthday\"},{\"key\":\"NEXT_BIRTHDAY\",\"text\":\"Next Birthday\"},{\"key\":\"YEAR_SUBTRACT\",\"text\":\"ปีขาย - ปีเกิด\"";
		
		ArrayList<Participant> participant_arr = new ArrayList<>();
		
		ParticipantControlData pcd = new ParticipantControlData();
				
		ArrayList<Participant> getparticipant_arr = pcd.searchParticipant(prd_code);
		JSONArray participant_JSONarr		= new JSONArray(participant);
		for (int i = 0; i < participant_JSONarr.length(); i++) {
			JSONObject jsonObj_participant = participant_JSONarr.getJSONObject(i);
			if(getparticipant_arr.size() > 0) {
				for (int ii = 0; ii < getparticipant_arr.size(); ii++) {
					if (getparticipant_arr.get(ii).getPrd_code().equals(getparticipant_arr.get(ii).getPrd_rider_code())) {
						//ที่คอมเม้นรอดึงข้อมูลมาเดิมแมฟ
						Participant setParticipant = getparticipant_arr.get(ii);
						setParticipant.setPrd_code(prd_code);
						setParticipant.setPrd_rider_code(prd_code);
						if (!jsonObj_participant.getString("min_issue_age").equals("")) {
							setParticipant.setMin_issue_age(Integer.parseInt(jsonObj_participant.getString("min_issue_age")));
						}
						setParticipant.setMin_issue_age_unit(jsonObj_participant.getString("min_issue_age_unit"));
						if (!jsonObj_participant.getString("max_issue_age").equals("")) {
							setParticipant.setMax_issue_age(Integer.parseInt(jsonObj_participant.getString("max_issue_age")));
						}
						setParticipant.setMax_issue_age_unit(jsonObj_participant.getString("max_issue_age_unit"));
						if (!jsonObj_participant.getString("max_insure").equals("")) {
							if(jsonObj_participant.getString("max_insure_unit").equals("YEAR")) {
								setParticipant.setMax_insure_year(Integer.parseInt(jsonObj_participant.getString("max_insure")));
							}else if(jsonObj_participant.getString("max_insure_unit").equals("AGE")) {
								setParticipant.setMax_insure_age(Integer.parseInt(jsonObj_participant.getString("max_insure")));
							}
						}
						setParticipant.setMax_insure_age_unit(jsonObj_participant.getString("max_insure_unit"));
						/*if (jsonObj_participant.getString("age_calc_meth").equals("")) {
							setParticipant.setAge_calc_meth("NONE");
						}else {
							setParticipant.setAge_calc_meth(jsonObj_participant.getString("age_calc_meth"));
						} */
						setParticipant.setUser_code(userId);
						setParticipant.setUpdate_time(PDFFnc.currentTimeStamp());
						participant_arr.add(setParticipant);
						break;
					}
				}
			}else {
				Participant participant2 = new Participant();
				participant2.setPrd_code(prd_code);
				participant2.setPrd_rider_code(prd_code);
				if (!jsonObj_participant.getString("min_issue_age").equals("")) {
					participant2.setMin_issue_age(Integer.parseInt(jsonObj_participant.getString("min_issue_age")));
				}
				participant2.setMin_issue_age_unit(jsonObj_participant.getString("min_issue_age_unit"));
				if (!jsonObj_participant.getString("max_issue_age").equals("")) {
					participant2.setMax_issue_age(Integer.parseInt(jsonObj_participant.getString("max_issue_age")));
				}
				participant2.setMax_issue_age_unit(jsonObj_participant.getString("max_issue_age_unit"));
				if (!jsonObj_participant.getString("max_insure").equals("")) {
					if(jsonObj_participant.getString("max_insure_unit").equals("YEAR")) {
						participant2.setMax_insure_year(Integer.parseInt(jsonObj_participant.getString("max_insure")));
					}else if(jsonObj_participant.getString("max_insure_unit").equals("AGE")) {
						participant2.setMax_insure_age(Integer.parseInt(jsonObj_participant.getString("max_insure")));
					}
				}
				participant2.setPartic_type("PRIMARY");
				participant2.setPrem_rule("EACH");
				participant2.setAge_calc_meth("NONE");
				participant2.setGender("NONE");
				participant2.setMax_insure_age_unit(jsonObj_participant.getString("max_insure_unit"));
				participant2.setUser_code(userId);
				participant2.setUpdate_time(PDFFnc.currentTimeStamp());
				participant_arr.add(participant2);
				break;
			}
				
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
			if (!jsonObj_Unw_accum_rule.getString("cov_cat_lv_1").equals("NONE")) {
				setuar.setCov_cat_lv_1(Integer.parseInt(jsonObj_Unw_accum_rule.getString("cov_cat_lv_1")));
			}
			if(!jsonObj_Unw_accum_rule.getString("cov_cat_lv_2").equals("") && jsonObj_Unw_accum_rule.getString("cov_cat_lv_2") != "0") {
				setuar.setCov_cat_lv_2(Integer.parseInt(jsonObj_Unw_accum_rule.getString("cov_cat_lv_2")));
			}
			if(!jsonObj_Unw_accum_rule.getString("cov_cat_lv_3").equals("") && jsonObj_Unw_accum_rule.getString("cov_cat_lv_3") != "0") {
				setuar.setCov_cat_lv_3(Integer.parseInt(jsonObj_Unw_accum_rule.getString("cov_cat_lv_3")));
			}
			setuar.setUnderwrite_opt(jsonObj_Unw_accum_rule.getString("is_gio"));        //**เก็บ
			setuar.setIs_senior("NONE"); //** เก็บ
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
			if (!jsonObj_Unw_accum_rule.getString("sale_partner_code").equals("undefined")) {
				setuar.setSale_partner_code(jsonObj_Unw_accum_rule.get("sale_partner_code").toString());
			}else {
				setuar.setSale_partner_code("NONE");
			}
			setuar.setUser_code(userId);
			setuar.setUpdate_time(PDFFnc.currentTimeStamp());
			
			/*END FIX*/
			unwAccumRule_arr.add(setuar);
		}
		
		//Unw_accum_rule_exclude
		ArrayList<Unw_accum_rule_exclude> lstUnw_accum_rule_excludes_POLICY = new ArrayList<>();
		ArrayList<Unw_accum_rule_exclude> lstUnw_accum_rule_excludes_SA = new ArrayList<>();
		String unw_accum_rule_exclude_str 									= request.getParameter("unwAccumRuleExclude");
		JSONArray unw_accum_rule_exclude_jsonarr						= new JSONArray(unw_accum_rule_exclude_str);
		for (int i = 0; i < unw_accum_rule_exclude_jsonarr.length(); i++) {
			JSONObject unw_accum_rule_exclude_jsonObj = unw_accum_rule_exclude_jsonarr.getJSONObject(i);
			if(!unw_accum_rule_exclude_jsonObj.get("exclude_prd_code").equals("") && unw_accum_rule_exclude_jsonObj.get("exclude_prd_code") != null) {
				Unw_accum_rule_exclude unw_accum_rule_exclude = new Unw_accum_rule_exclude();
				unw_accum_rule_exclude.setPrd_code(prd_code);
				unw_accum_rule_exclude.setAccum_type(unw_accum_rule_exclude_jsonObj.getString("accum_type"));
				unw_accum_rule_exclude.setExclude_prd_code(unw_accum_rule_exclude_jsonObj.getString("exclude_prd_code"));
				unw_accum_rule_exclude.setUser_code(userId);
				unw_accum_rule_exclude.setUpdate_time(PDFFnc.currentTimeStamp());
				if(unw_accum_rule_exclude_jsonObj.getString("accum_type").equals("POLICY")) {
					lstUnw_accum_rule_excludes_POLICY.add(unw_accum_rule_exclude);
				}else if(unw_accum_rule_exclude_jsonObj.getString("accum_type").equals("SA")) {
					lstUnw_accum_rule_excludes_SA.add(unw_accum_rule_exclude);
				}
			}
		}
		
		
		//Unw_pol_issue_unit รอหน้าบ้านปรับแก้ตอนส่งมานิสนึง
		String pol_issue_unit 									= request.getParameter("pol_issue_unit");
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
		
		//doUnderwrite
		String underwrite 							= request.getParameter("underwrite");
		//underwrite									= "[{\"prd_max_sa\":\"100\",\"prd_max_sa_unit\":\"PERCENT\",\"prd_max_sa_factor\":\"SMI\",\"is_med_req\":true,\"is_med_sum_accum\":true,\"is_exist_policy\":true,\"is_insure_sum_accum\":true,\"is_substandard\":true,\"is_rider_allow\":false,\"is_rider_sum_accum\":false,\"is_check_ic_ba\":false,\"is_check_ic_fi_cft\":false,\"is_check_sale_blacklist\":false,\"is_fax_app\":false}]";
		JSONArray underwrite_jsonarr				= new JSONArray(underwrite);
			JSONObject jsonObj_underwrite			=underwrite_jsonarr.getJSONObject(0);
			Underwrite setunderwrite 				= new Underwrite();
		
			setunderwrite.setPrd_code(prd_code);
			setunderwrite.setIs_prd_max_policy(jsonObj_underwrite.getBoolean("is_prd_max_policy"));
			if(!jsonObj_underwrite.get("prd_max_policy").toString().equals("")) {
				setunderwrite.setPrd_max_policy(jsonObj_underwrite.getInt("prd_max_policy"));
			}
			if (!jsonObj_underwrite.getString("prd_max_sa").equals("")) {
				setunderwrite.setPrd_max_sa(covertStringtoBigDecimal(jsonObj_underwrite.getString("prd_max_sa")));
				setunderwrite.setPrd_max_sa_unit("CURRENCY");
			}else {
				setunderwrite.setPrd_max_sa_unit("NONE");
			}
			setunderwrite.setIs_pax_max_policy(jsonObj_underwrite.getBoolean("is_pax_max_policy"));
			if(!jsonObj_underwrite.get("pax_max_policy").toString().equals("")) {
				setunderwrite.setPax_max_policy(jsonObj_underwrite.getInt("pax_max_policy"));
			}
			if (!jsonObj_underwrite.getString("pax_max_sa").equals("")) {
				setunderwrite.setPax_max_sa(covertStringtoBigDecimal(jsonObj_underwrite.getString("pax_max_sa")));
				setunderwrite.setPax_max_unit("CURRENCY");
			}else {
				setunderwrite.setPax_max_unit("NONE");
			}
			
			if (!jsonObj_underwrite.getString("min_sa_amt").equals("")) {
				setunderwrite.setMin_sa_amt(covertStringtoBigDecimal(jsonObj_underwrite.getString("min_sa_amt")));
			}
			if(!jsonObj_underwrite.getString("unw_rider_sa").equals("")) {
				setunderwrite.setUnw_rider_sa(jsonObj_underwrite.getString("unw_rider_sa"));
			}
			setunderwrite.setIs_sum_range(jsonObj_underwrite.getBoolean("is_sum_range"));
			setunderwrite.setIs_med_sum_accum(jsonObj_underwrite.getBoolean("is_med_sum_accum"));
			setunderwrite.setIs_substandard(jsonObj_underwrite.getBoolean("is_substandard"));
			setunderwrite.setIs_reins_alert(jsonObj_underwrite.getBoolean("is_reins_alert"));
			setunderwrite.setPol_print_at("IN_HOUSE");///ไปก่อน
			setunderwrite.setUser_code(userId);
			setunderwrite.setUpdate_time(PDFFnc.currentTimeStamp());
			
			/*FIX*/
			setunderwrite.setPrd_max_sa_factor("NONE");
			/*END FIX*/
		
		//	Unw_rider_limit
		String 	unw_rider_limit							= request.getParameter("unwRiderLimit");
		//unw_rider_limit 								= "[{\"type\":\"MRT\",\"Pax_max_sa_amt\":\"150000000\"},{\"type\":\"ADD\",\"Pax_max_sa_amt\":\"150000000\"},{\"type\":\"TPD\",\"Pax_max_sa_amt\":\"20000000\"}]";
		JSONArray unw_rider_limit_jsonarr				= new JSONArray(unw_rider_limit);
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
		
		
		pd.doProduct(setProduct,null); 
		pd.doUnderwrite(setunderwrite); 
		pd.doUnwRiderLimit(arr_unw_rider_limit); 
		pd.doUnwSubstdType(unw_substd_type_arr); 
		pd.doParticipant(participant_arr); 
		pd.doUnwPolIssueUnit(pol_issue_unit_arr);  
		pd.doOcc(doOcc_arr); 
		pd.doUnwAccountRule(unwAccumRule_arr); //ลงได้แต่ต้องแก้ไข 3ฟิว
		unwExclude.doUnwAccumRuleExclude(lstUnw_accum_rule_excludes_POLICY,"POLICY");
		unwExclude.doUnwAccumRuleExclude(lstUnw_accum_rule_excludes_SA,"SA");
	
		return "save_Tab_Provision";
	
	}

	/////////////////////////////
	public String check_Approved(HttpServletRequest request, HttpServletResponse response) throws Exception 
	{
		String passInsurance 			= request.getParameter("passInsurance");
		String remark_noApproved 		= request.getParameter("remark_noApproved");
		String remark_update 			= request.getParameter("remark_update");
		ProductData cd 					= new ProductData();
		Product setProduct 				= cd.searchProduct(passInsurance);
		String status 					= request.getParameter("status");
		String setstatus 				= "";
		String groupName 				= request.getParameter("groupName");
		ConstantValues.GROUP_NAME 		= groupName;
		
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

