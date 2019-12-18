package servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.JSONArray;
import org.json.JSONObject;

import layout.bean.productfac.appconfig.Product_select_page;
import layout.bean.productfac.beanset.CoverageCatAccessData;
import layout.bean.productfac.beanset.CoverageCovCat;
import layout.bean.productfac.beanset.CoverageMainCovCat;
import layout.bean.productfac.beanset.DistchannelAccessData;
import layout.bean.productfac.beanset.FormulaCatAccesData;
import layout.bean.productfac.beanset.LookupCatAccessData;
import layout.bean.productfac.beanset.LookupValueGroupAccessData;
import layout.bean.productfac.beanset.ProductRiderAccessData;
import layout.bean.productfac.beanset.RateCatAccessData;
import layout.bean.productfac.beanset.RateLayoutAccessData;
import layout.bean.productfac.beanset.SalesChannelAccessData;
import layout.bean.productfac.coverage.Coverage;
import layout.bean.productfac.lookup.Document_type;
import layout.bean.productfac.lookup.Rate_sub_cat;
import layout.bean.productfac.product.Product;
import layout.bean.productfac.underwrite.Appendix;
import layout.bean.productfac.view.View_category;
import layout.bean.productfac.workflow.Coverage_task;
import layout.bean.productfac.workflow.Product_task;
import service.MainInsureDetailCreateProductRiderService;
import service.MainInsureDetailCreateProductService;
import service.MainInsureDetailCreateService;
import service.MainInsureTypeProductRiderService;
import service.MainInsureTypeService;
import service.center.DataValuesSeparate;
import service.center.LookupProductData;
import service.center.LookupValueGroupData;
import service.center.MainInsurance;
import service.center.MainInsureDetailCreateProduct;
import service.center.ProductCreate;
import service.center.WorkFlowProduct;
import service.ctrl.ProductData;
import service.fnc.ConstantValues;
import service.fnc.PDFFnc;
import service.product.DistChanelData;
import service.product.ProductBasicinfo;
import utility.adc.ServiceForProductFactory;

/**
 * Servlet implementation class ProductRider_Data_default_Servlet
 */
@WebServlet("/ProductRider_Data_default_Servlet")
public class ProductRider_Data_default_Servlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private String userId; 
	private ProductCreate  ProductCreate  ;
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ProductRider_Data_default_Servlet() {
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
		//doGet(request, response);
		processRequest(request, response);
	}
	protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
		try {
			System.out.println("===============ProductRider_Data_default_Servlet==============");
			HttpSession session = request.getSession();
			String getuserID = session.getAttribute("userID").toString();
			if (!getuserID.equals("")) {
				userId =  getuserID ;
			}else {
				System.out.println("================== NO USER ====================");
			}
			// session = request.getSession();
			response.setCharacterEncoding("UTF-8");
			response.setContentType("application/json");
			PrintWriter out 	= response.getWriter();
			String responseText	= "";
			String json 		= "";
			String plan_type 	= "R";
			String plan_type2 	= "PR";
			String method 		= request.getParameter("method");
			String type_id		= request.getParameter("type");
			String type_lv1		= request.getParameter("type_lv1");
			String type_lv2		= request.getParameter("type_lv2");
			JSONObject responsejson = new JSONObject();
			//GetBasePlanCL
			
			
			if (method.equals("select_insurance_type")) {
				ArrayList<CoverageCatAccessData> main_contract1_arr;
				MainInsureTypeProductRiderService main_contract1 = new MainInsureTypeProductRiderService();
				main_contract1_arr = main_contract1.getmainPR_contract1(plan_type);
				//level 1
				JSONArray	main_contract1_jsonArray	= new JSONArray();
				for (int i = 0; i < main_contract1_arr.size(); i++) {
					
					JSONObject main_contract1_Channel = new JSONObject();
					main_contract1_Channel.put("pass",main_contract1_arr.get(i).getCoverageCat().getCov_cat_id());
					main_contract1_Channel.put("text", main_contract1_arr.get(i).getCoverageCat().getName_th());
					main_contract1_Channel.put("value", main_contract1_arr.get(i).getCoverageCat().getCat_code());
					main_contract1_jsonArray.put(main_contract1_Channel);
				}
				responsejson.put("main_contract1", main_contract1_jsonArray);
				responseText = responsejson.toString();
			}else if (method.equals("main_contract_level1")) {
				//level 2
				ArrayList<CoverageMainCovCat> main_contract2_arr;
				MainInsureTypeProductRiderService main_contract2 = new MainInsureTypeProductRiderService();
				main_contract2_arr = main_contract2.getmainPR_contract2(plan_type,type_id);
				
				
				JSONArray	main_contract2_jsonArray	= new JSONArray();
				for (int i = 0; i < main_contract2_arr.size(); i++) {
					JSONObject main_contract2_Channel = new JSONObject();
					main_contract2_Channel.put("pass",main_contract2_arr.get(i).getCoverageCat().getCov_cat_id());
					main_contract2_Channel.put("text", main_contract2_arr.get(i).getCoverageCat().getName_th());
					main_contract2_Channel.put("value", main_contract2_arr.get(i).getCoverageCat().getCat_code());
					main_contract2_jsonArray.put(main_contract2_Channel);
				}
				responsejson.put("main_contract2", main_contract2_jsonArray);
				responseText = responsejson.toString();
				
			}else if (method.equals("main_contract_level3")) {
				//level 3
				ArrayList<CoverageCovCat> main_contract3_arr;
				MainInsureTypeProductRiderService main_contract3 = new MainInsureTypeProductRiderService();
				main_contract3_arr = main_contract3.getmainPR_contract3(plan_type, type_lv1,type_lv2);
				
				JSONArray	main_contract3_jsonArray	= new JSONArray();
				for (int i = 0; i < main_contract3_arr.size(); i++) {
					JSONObject main_contract3_Channel = new JSONObject();
					main_contract3_Channel.put("pass",main_contract3_arr.get(i).getCoverageCat().getCov_cat_id());
					main_contract3_Channel.put("text", main_contract3_arr.get(i).getCoverageCat().getName_th());
					main_contract3_Channel.put("value", main_contract3_arr.get(i).getCoverageCat().getCat_code());
					main_contract3_jsonArray.put(main_contract3_Channel);
				}
				responsejson.put("main_contract3", main_contract3_jsonArray);
				responseText = responsejson.toString();
			
			
			}
			else if(method.equals("create_product")) {     
				String groupName			= request.getParameter("groupName");
				ConstantValues.GROUP_NAME 	= groupName;
				
				String main_contract1 		= request.getParameter("main_contract1");
				String main_contract2 		= request.getParameter("main_contract2");
				String main_contract3 		= request.getParameter("main_contract3");
				
				String menu_CL_1 			= request.getParameter("menu_CL_1");
				String menu_CL_2 			= request.getParameter("menu_CL_2");
				String menu_CL_3 			= request.getParameter("menu_CL_3");
				String menu_CL_4 			= request.getParameter("menu_CL_4");
				String menu_CL_5 			= request.getParameter("menu_CL_5");
				String menu_CL_6 			= request.getParameter("menu_CL_6");
				String main_contracttype 	= request.getParameter("main_contracttype");
				//	
				String passInsurance = "";
				if (main_contracttype.equals("1")) {
					
					///Step 1//////////////////////Benz///11-07-2019///////////////////////////////////
					DataValuesSeparate dvs = new DataValuesSeparate();
					dvs.doAppPage(main_contract3, plan_type2);	
					
					///Step 2//////////////////////////////////////////////////////////////////	
					ConstantValues.USER_CODE = userId;
					String [] cov_cat_id_arr = new String []{main_contract1,main_contract2,main_contract3};
					  ProductCreate = new ProductCreate(cov_cat_id_arr);
					 // po = ProductCreate.getProduct();
					  passInsurance = ProductCreate.getProduct().getPrd_code();
					  ConstantValues.PRD_CODE = passInsurance;
					  
					  ///Benz get type PR
					  String prd_code = ProductCreate.getProduct().getPrd_code();
						MainInsurance mi = new MainInsurance ();
						String type = "";
						ArrayList<View_category> Listcategorys  = mi.searchCategoryProduct(prd_code);
						//////////////////Get type 
						if (Listcategorys.size() > 0 ) {
							if (Listcategorys.get(0).getCat_id1() == 1) {
								type = "OL";
							}else if (Listcategorys.get(0).getCat_id1() == 2) {
								type = "CL";
							}else if(Listcategorys.get(0).getCat_id1() == 3) {
								type = "PR";
							}
						}
						
						JSONArray type_jsonArray = new JSONArray();
						JSONObject json_type = new JSONObject();
						
						json_type.put("type", type);
						type_jsonArray.put(json_type);
						responsejson.put("TypeCategory", type_jsonArray);
						//
						responseText = responsejson.toString();
					
					
					json = responseText;
					System.out.println("GetType//" + json);
					///Step 3//////////////////////////////////////////////////////////////////	
						String[] appPage  		= new String[6]; 
						
							if (menu_CL_1.equals("true")) {
								appPage[0] 		= "1";
							}else {
								appPage[0] 		= "";
							}
							if (menu_CL_2.equals("true")) {
								appPage[1] 		= "2";
							}else {
								appPage[1] 		= "";
							}
							if (menu_CL_3.equals("true")) {
								appPage[2] 		= "3";
							}else {
								appPage[2] 		= "";
							}
							if (menu_CL_4.equals("true")) {
								appPage[3] 		= "4";
							}else {
								appPage[3] 		= "";
							}
							if (menu_CL_5.equals("true")) {
								appPage[4] 		= "5";
							}else {
								appPage[4] 		= "";
							}
							if (menu_CL_6.equals("true")) {
								appPage[5] 		= "6";
							}else {
								appPage[5] 		= "";
							}
							
							dvs.doConstantAppPageproduct(passInsurance, appPage);
						/////////////////////////////////////////////////////////////////////////////////
						////Benz 11-09-2019 New set Status
							WorkFlowProduct wfd = new WorkFlowProduct();
							//////////////////////////Row1
							Product_task  setprotask = new Product_task();
							setprotask.setPrd_code(passInsurance);
							setprotask.setDepartment(ConstantValues.GROUP_NAME);
							setprotask.setApprove_status("NEW");
							setprotask.setUser_code(userId);
							setprotask.setUpdate_time(PDFFnc.currentTimeStamp());
							wfd.doProductTask(setprotask);
							//////////////////////////Row2
							setprotask = new Product_task();
							setprotask.setPrd_code(passInsurance);
							setprotask.setDepartment("POC (1740)");
							setprotask.setApprove_status("NEW");
							setprotask.setUser_code(userId);
							setprotask.setUpdate_time(PDFFnc.currentTimeStamp());
							wfd.doProductTask(setprotask);
							//////////////Benz Check Row Task 25-11-2019
							
							JSONArray  basic_Info_jsonArray	= new JSONArray();
							JSONObject json_basic_Info 		= new JSONObject();
							ArrayList<Product_task> arr_pro_Task = wfd.searchProductTask();
							if (arr_pro_Task.size() < 2) {
								json_basic_Info.put("status",false);
								basic_Info_jsonArray.put(json_basic_Info);
							}else {
								json_basic_Info.put("status",true);
								basic_Info_jsonArray.put(json_basic_Info);
							}
							responsejson.put("check",basic_Info_jsonArray);
							responseText = responsejson.toString();
							
				}
				
				MainInsureDetailCreateProductRiderService mdcs = new MainInsureDetailCreateProductRiderService ();
				int tabmaim = 1;
				 ArrayList<LookupCatAccessData> datareturn_LookupCat;
				 datareturn_LookupCat = mdcs.BasicInfo_lookup(tabmaim);
				 LookupValueGroupData lookupValueGroupData = new LookupValueGroupData();
					
				//Tab ข้อมูลทั่วไป Basic Information
				if (menu_CL_1.equals("true")) {
					
					 ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupCL =  lookupValueGroupData.getListGroup_CL();
					 ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupCL_P_FYP = lookupValueGroupData.getListGroup_CL_P_FYP();
					 ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupCL_P_RYP = lookupValueGroupData.getListGroup_CL_P_RYP();
					 ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupCL_P = lookupValueGroupData.getListGroup_CL_P();
					 ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupOL_Reins_OPT = lookupValueGroupData.getListGroup_OL_Reins_OPT();
					//ประเภทสัญญาเพิ่มเติม 
					JSONArray	additional_Contract_Type_jsonArray	= new JSONArray();
					//*Loan Type
					JSONArray	loan_Type_jsonArray	= new JSONArray();
					//Reinsurance Group
					JSONArray	reinsurance_Group_jsonArray	= new JSONArray();
					//Distribution Channel
					JSONArray	distribution_Channel_jsonArray	= new JSONArray();
					//mode
					JSONArray	mode_jsonArray	= new JSONArray();
					//ปี แรก- ปี ต่อไป
					JSONArray	CreditCards_firstYear_jsonArray	= new JSONArray();
					JSONArray	CreditCards_toYear_jsonArray	= new JSONArray();
					JSONArray	unit_age_coordinates_jsonArray	= new JSONArray();
					//
					JSONArray	reins_jsonArray	= new JSONArray();
					//pun fixed 7/8/2019
					for (int i = 0; i < datareturn_LookupGroupCL.size(); i++) {
						JSONObject json_additional_Contract_Type = new JSONObject();
						json_additional_Contract_Type.put("pass",  datareturn_LookupGroupCL.get(i).getLookup_enum_value());
						json_additional_Contract_Type.put("text",  datareturn_LookupGroupCL.get(i).getLookup_value_name());
						additional_Contract_Type_jsonArray.put(json_additional_Contract_Type);
					}
					
					for(int i = 0 ; i < datareturn_LookupGroupCL_P_FYP.size(); i++)
					{
						JSONObject json_CreditCards = new JSONObject();
						json_CreditCards.put("pass", datareturn_LookupGroupCL_P_FYP.get(i).getLookup_enum_value());
						json_CreditCards.put("text", datareturn_LookupGroupCL_P_FYP.get(i).getLookup_value_name());
						CreditCards_firstYear_jsonArray.put(json_CreditCards);
					}
					for(int i = 0 ; i < datareturn_LookupGroupCL_P_RYP.size(); i++)
					{
						JSONObject json_CreditCards = new JSONObject();
						json_CreditCards.put("pass", datareturn_LookupGroupCL_P_RYP.get(i).getLookup_enum_value());
						json_CreditCards.put("text", datareturn_LookupGroupCL_P_RYP.get(i).getLookup_value_name());
						CreditCards_toYear_jsonArray.put(json_CreditCards);
					}
					for(int i = 0 ; i < datareturn_LookupGroupCL_P.size(); i++)
					{
						JSONObject json_reinsurance_Group = new JSONObject();
						json_reinsurance_Group.put("pass", datareturn_LookupGroupCL_P.get(i).getLookup_enum_value());
						json_reinsurance_Group.put("text", datareturn_LookupGroupCL_P.get(i).getLookup_value_name());
						reinsurance_Group_jsonArray.put(json_reinsurance_Group);
					}
					for(int i = 0 ; i < datareturn_LookupGroupOL_Reins_OPT.size(); i++)
					{
						JSONObject unit_reins = new JSONObject();
						unit_reins.put("pass",  datareturn_LookupGroupOL_Reins_OPT.get(i).getLookup_enum_value());
						unit_reins.put("text",  datareturn_LookupGroupOL_Reins_OPT.get(i).getLookup_value_name());
						reins_jsonArray.put(unit_reins);
					}
					
					
					for (int i = 0 ; i < datareturn_LookupCat.size(); i++) {
						//mode
					/*	if (datareturn_LookupCat.get(i).getLookupCat().getEnum_name().equals("lu_prd_design")) {
						
							for (int ii = 0; ii < datareturn_LookupCat.get(i).getListLookupValue().size(); ii++) {
								JSONObject json_additional_Contract_Type = new JSONObject();
								json_additional_Contract_Type.put("pass",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getEnum_value());
								json_additional_Contract_Type.put("text",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getName_th());
								additional_Contract_Type_jsonArray.put(json_additional_Contract_Type);
							}	
						}*/
						if (datareturn_LookupCat.get(i).getLookupCat().getEnum_name().equals("lu_loan_type")) {
							//*Loan Type
							for (int ii = 0; ii < datareturn_LookupCat.get(i).getListLookupValue().size(); ii++) {
								JSONObject json_loan_Type = new JSONObject();
								json_loan_Type.put("pass",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getEnum_value());
								json_loan_Type.put("text",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getName_th());
								loan_Type_jsonArray.put(json_loan_Type);
							}
						}
						/*if (datareturn_LookupCat.get(i).getLookupCat().getEnum_name().equals("lu_reinsure_group")) {
							//Reinsurance Group
							for (int ii = 0; ii < datareturn_LookupCat.get(i).getListLookupValue().size(); ii++) {
								JSONObject json_reinsurance_Group = new JSONObject();
								json_reinsurance_Group.put("pass",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getEnum_value());
								json_reinsurance_Group.put("text",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getName_th());
								reinsurance_Group_jsonArray.put(json_reinsurance_Group);
							}
						}*/
						//mode
						if (datareturn_LookupCat.get(i).getLookupCat().getEnum_name().equals("lu_mode")) {
							for(int ii = 0 ; ii < datareturn_LookupCat.get(i).getListLookupValue().size(); ii++)
							{
								JSONObject json_Mode = new JSONObject();
								json_Mode.put("pass", datareturn_LookupCat.get(i).getListLookupValue().get(ii).getSystem_code());
								json_Mode.put("text", datareturn_LookupCat.get(i).getListLookupValue().get(ii).getName_th());
								json_Mode.put("value",datareturn_LookupCat.get(i).getListLookupValue().get(ii).getEnum_value());
								mode_jsonArray.put(json_Mode);
							}
						}
						//*การชำระเบี้ยด้วยบัตรเครดิต
						/*if (datareturn_LookupCat.get(i).getLookupCat().getEnum_name().equals("lu_credit_use")) {
							for(int ii = 0 ; ii < datareturn_LookupCat.get(i).getListLookupValue().size(); ii++)
							{
								JSONObject json_CreditCards = new JSONObject();
								json_CreditCards.put("pass", datareturn_LookupCat.get(i).getListLookupValue().get(ii).getEnum_value());
								json_CreditCards.put("text", datareturn_LookupCat.get(i).getListLookupValue().get(ii).getName_th());
								CreditCards_jsonArray.put(json_CreditCards);
							}
						}*/
						//พิกัดอายุ -หน่วย
						if (datareturn_LookupCat.get(i).getLookupCat().getEnum_name().equals("lu_period_unit")) {
							for (int ii = 0; ii < datareturn_LookupCat.get(i).getListLookupValue().size(); ii++) {
								JSONObject unit_age_coordinates = new JSONObject();
								unit_age_coordinates.put("pass",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getEnum_value());
								unit_age_coordinates.put("text",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getName_th());
								unit_age_coordinates_jsonArray.put(unit_age_coordinates);
							}
						}
						
					}
					//*AML/CFT Scoring
					JSONArray	scoring_AML_CFT_jsonArray	= new JSONArray();
					String [] scoring_AML_CFT_pass = {"1","2","3"};
					String [] scoring_AML_CFT_text = {"L","M","H"};
				
					for (int i = 0; i < scoring_AML_CFT_pass.length; i++) {
						JSONObject json_scoring_AML_CFT = new JSONObject();
						json_scoring_AML_CFT.put("pass", scoring_AML_CFT_pass[i]);
						json_scoring_AML_CFT.put("text", scoring_AML_CFT_text[i]);
						scoring_AML_CFT_jsonArray.put(json_scoring_AML_CFT);
					}
				
					DistChanelData dc = new DistChanelData();
					//Distribution Channel
					ArrayList<DistchannelAccessData> return_DistchannelAccessData = dc.searchLookupDistChanel();
					if (return_DistchannelAccessData.size() != 0) {
						for (int i = 0; i < return_DistchannelAccessData.size(); i++) {
							JSONObject json_distribution_Channel = new JSONObject();
							json_distribution_Channel.put("pass",  return_DistchannelAccessData.get(i).getDistChannel().getDist_chan_id());
							json_distribution_Channel.put("text",  return_DistchannelAccessData.get(i).getDistChannel().getName_th());
							distribution_Channel_jsonArray.put(json_distribution_Channel);
						}
					}
					//Sale Channel
					ArrayList<SalesChannelAccessData> datareturn_Sale_Channel;
					datareturn_Sale_Channel = mdcs.getsales_Channel();
					
					JSONArray	sales_Channel_jsonArray	= new JSONArray();
					for (int i = 0; i < datareturn_Sale_Channel.size(); i++) {
						datareturn_Sale_Channel.get(i).getFilingChannel().getName_th();
						JSONObject json_sales_Channel = new JSONObject();
						if  (datareturn_Sale_Channel.get(i).getSaleChannel().getSystem_code() == null) {
							json_sales_Channel.put("pass", "");
						}else {
							json_sales_Channel.put("pass", datareturn_Sale_Channel.get(i).getSaleChannel().getSystem_code());
						}
						json_sales_Channel.put("text", datareturn_Sale_Channel.get(i).getSaleChannel().getName_th());
						json_sales_Channel.put("value", datareturn_Sale_Channel.get(i).getSaleChannel().getSale_chan_id());
						sales_Channel_jsonArray.put(json_sales_Channel);
					}
					//NAR
					ArrayList<RateCatAccessData> datareturn;
					datareturn = mdcs.getRateNAR();
					JSONArray	nar_jsonArray	= new JSONArray();
					for (int i = 0; i < datareturn.size(); i++) {
						ArrayList<Rate_sub_cat> rate_sub_cat_arr = datareturn.get(i).getListRateSubCat();
						ArrayList<RateLayoutAccessData> rateLayout_arr = datareturn.get(i).getListRateLayout();
						/*for(RateLayoutAccessData rate : rateLayout_arr) {
							System.out.println("============rate======= : " + rate.getRateLayout().getName_th());
						}*/
						for (int ii = 0 ; ii < rate_sub_cat_arr.size(); ii++) {
							JSONObject json_tb_nar = new JSONObject();
							JSONArray tb_nar_jsonArray2 	= new JSONArray();
							json_tb_nar.put("text", rate_sub_cat_arr.get(ii).getName_th());
							json_tb_nar.put("pass", rate_sub_cat_arr.get(ii).getRate_cat_id());
							json_tb_nar.put("sub_rate_cat", rate_sub_cat_arr.get(ii).getSub_cat_id());
							
							for (int iii = 0 ; iii < rateLayout_arr.size(); iii++) {
								JSONObject json_tb_nar2 = new JSONObject();
								if (rate_sub_cat_arr.get(ii).getRate_cat_id() == rateLayout_arr.get(iii).getRateLayout().getRate_cat_id() && rate_sub_cat_arr.get(ii).getSub_cat_id() == rateLayout_arr.get(iii).getRateLayout().getSub_cat_id()) {
									json_tb_nar2.put("file_format", rateLayout_arr.get(iii).getRateLayout().getFile_name_pattern());
									json_tb_nar2.put("layout_id", rateLayout_arr.get(iii).getRateLayout().getRate_layout_id());
									tb_nar_jsonArray2.put(json_tb_nar2);
									
								}
								json_tb_nar.put("file", tb_nar_jsonArray2);
								
							}
							nar_jsonArray.put(json_tb_nar);
						}
					}
					//PMRate
					ArrayList<RateCatAccessData> datareturn2;
					datareturn2 = mdcs.getPM_Rate();
					JSONArray	pm_rate_jsonArray	= new JSONArray();
					for (int i = 0; i < datareturn2.size(); i++) {
						ArrayList<Rate_sub_cat> rate_sub_cat_arr = datareturn2.get(i).getListRateSubCat();
						ArrayList<RateLayoutAccessData> rateLayout_arr = datareturn2.get(i).getListRateLayout();
						
						for (int ii = 0 ; ii < rate_sub_cat_arr.size(); ii++) {
							JSONObject json_tb_pm = new JSONObject();
							JSONArray tb_pm_jsonArray2 	= new JSONArray();
							json_tb_pm.put("text", rate_sub_cat_arr.get(ii).getName_th());
							json_tb_pm.put("pass", rate_sub_cat_arr.get(ii).getRate_cat_id());
							json_tb_pm.put("sub_rate_cat", rate_sub_cat_arr.get(ii).getSub_cat_id());
							
							for (int iii = 0 ; iii < rateLayout_arr.size(); iii++) {
								JSONObject json_tb_nar2 = new JSONObject();
								if (rate_sub_cat_arr.get(ii).getRate_cat_id() == rateLayout_arr.get(iii).getRateLayout().getRate_cat_id() && rate_sub_cat_arr.get(ii).getSub_cat_id() == rateLayout_arr.get(iii).getRateLayout().getSub_cat_id()) {
									json_tb_nar2.put("file_format", rateLayout_arr.get(iii).getRateLayout().getFile_name_pattern());
									tb_pm_jsonArray2.put(json_tb_nar2);
									
								}
								json_tb_pm.put("file", tb_pm_jsonArray2);
								
							}
							pm_rate_jsonArray.put(json_tb_pm);
						}
					}
					
					////
					JSONArray  basic_Info_jsonArray	= new JSONArray();
					JSONObject json_basic_Info = new JSONObject();
					json_basic_Info.put("passInsurance",passInsurance);
					json_basic_Info.put("additional_Contract_Type",additional_Contract_Type_jsonArray);
					json_basic_Info.put("unit_age_coordinates",unit_age_coordinates_jsonArray);
					json_basic_Info.put("mode",mode_jsonArray);
					json_basic_Info.put("scoring_AML_CFT",scoring_AML_CFT_jsonArray);
					json_basic_Info.put("loan_Type",loan_Type_jsonArray);
					json_basic_Info.put("creditCards_firstYear",CreditCards_firstYear_jsonArray);
					json_basic_Info.put("creditCards_toYear",CreditCards_toYear_jsonArray);
					json_basic_Info.put("reinsurance_Group",reinsurance_Group_jsonArray);
					json_basic_Info.put("distribution_Channel",distribution_Channel_jsonArray);
					json_basic_Info.put("sale_Channel", sales_Channel_jsonArray);
				
					json_basic_Info.put("NAR", nar_jsonArray);
					json_basic_Info.put("PM_Rate", pm_rate_jsonArray);
					
					json_basic_Info.put("reinsuranct", reins_jsonArray);
					
					basic_Info_jsonArray.put(json_basic_Info);
					//
					responsejson.put("Tab_Basic_Information",basic_Info_jsonArray);
					responseText = responsejson.toString();
				}
				//Tab การคำนวนเบี้ยประกัน
				if (menu_CL_3.equals("true")) {
					int tab = 2;
					//หน่วย
					ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupCL_P_Benefit_Factor_Unit =  lookupValueGroupData.getListGroup_benefitFactorUnit();
					// ของ
					ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupOL_PR_Limit_Factor_Seq1 =  lookupValueGroupData.getListGroup_OL_PR_Limit_Factor_Seq1();
					// ของต่ำ
					ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupOL_PR_Limit_Factor_Seq2 =  lookupValueGroupData.getListGroup_OL_PR_Limit_Factor_Seq2();
				
					
					//Age Type
					//Unit
					JSONArray	unit_jsonArray	= new JSONArray();
					//OF
					JSONArray	of_jsonArray	= new JSONArray();
					//OF Min
					JSONArray	ofMin_jsonArray	= new JSONArray();
					for(int i = 0 ; i < datareturn_LookupGroupCL_P_Benefit_Factor_Unit.size() ; i++) {
						JSONObject json_unit = new JSONObject();
						json_unit.put("pass",  datareturn_LookupGroupCL_P_Benefit_Factor_Unit.get(i).getLookup_enum_value());
						json_unit.put("text",  datareturn_LookupGroupCL_P_Benefit_Factor_Unit.get(i).getLookup_value_name());
						unit_jsonArray.put(json_unit);
					}
					for(int i = 0 ; i < datareturn_LookupGroupOL_PR_Limit_Factor_Seq1.size() ; i++) {
						JSONObject json_of = new JSONObject();
						json_of.put("pass",  datareturn_LookupGroupOL_PR_Limit_Factor_Seq1.get(i).getLookup_enum_value());
						json_of.put("text",  datareturn_LookupGroupOL_PR_Limit_Factor_Seq1.get(i).getLookup_value_name());
						of_jsonArray.put(json_of);
					}
					for(int i = 0 ; i < datareturn_LookupGroupOL_PR_Limit_Factor_Seq2.size() ; i++) {
						JSONObject json_ofMin = new JSONObject();
						json_ofMin.put("pass",  datareturn_LookupGroupOL_PR_Limit_Factor_Seq2.get(i).getLookup_enum_value());
						json_ofMin.put("text",  datareturn_LookupGroupOL_PR_Limit_Factor_Seq2.get(i).getLookup_value_name());
						ofMin_jsonArray.put(json_ofMin);
					}
				
					/** Lookup cat id**/
					JSONArray rate_jsonArray	= new JSONArray();
					for (int i = 0 ; i < datareturn_LookupCat.size(); i++) {
						//
						if (datareturn_LookupCat.get(i).getLookupCat().getEnum_name().equals("lu_prem_calc_formula_ol")) {
							for(int ii = 0 ; ii < datareturn_LookupCat.get(i).getListLookupValue().size(); ii++)
							{
								JSONObject json_rate = new JSONObject();
								json_rate.put("pass", datareturn_LookupCat.get(i).getListLookupValue().get(ii).getEnum_value());
								json_rate.put("text", datareturn_LookupCat.get(i).getListLookupValue().get(ii).getName_th());
								rate_jsonArray.put(json_rate);
							}
						}
					}
					/** end Look up cat id**/
					
					ArrayList<FormulaCatAccesData> datareturn_FormulaCatAccesData;
					MainInsureDetailCreateProduct mdc 	= new MainInsureDetailCreateProduct();
					 mdc.createDetail(tab);
					 datareturn_FormulaCatAccesData 	= mdc.getListFormulaCatAccesData();
					 JSONArray	premiumRate_jsonArray			= new JSONArray();
					 JSONArray	extraRate_jsonArray			= new JSONArray();
					 JSONArray	NAR_jsonArray			= new JSONArray();
					 for (int i = 0; i < datareturn_FormulaCatAccesData.size(); i++) {
						// สูตร Premium Rate
						 if (datareturn_FormulaCatAccesData.get(i).getFormulaCat().getFormula_cat_id() == 7) {
							 for (int ii = 0; ii < datareturn_FormulaCatAccesData.get(i).getListFormula().size(); ii++) {
										JSONObject premiumRate_jsonObj = new JSONObject();
										premiumRate_jsonObj.put("formula_cat_id", datareturn_FormulaCatAccesData.get(i).getListFormula().get(ii).getFormula_cat_id());
										premiumRate_jsonObj.put("pass", datareturn_FormulaCatAccesData.get(i).getListFormula().get(ii).getFormula_id());
										premiumRate_jsonObj.put("text", datareturn_FormulaCatAccesData.get(i).getListFormula().get(ii).getName_th());
										premiumRate_jsonArray.put(premiumRate_jsonObj);
							 }
						 }
						// สูตร Extra Rate
						 if (datareturn_FormulaCatAccesData.get(i).getFormulaCat().getFormula_cat_id() == 8) {
							 for (int ii = 0; ii < datareturn_FormulaCatAccesData.get(i).getListFormula().size(); ii++) {
										JSONObject extraRate_jsonObj = new JSONObject();
										extraRate_jsonObj.put("formula_cat_id", datareturn_FormulaCatAccesData.get(i).getListFormula().get(ii).getFormula_cat_id());
										extraRate_jsonObj.put("pass", datareturn_FormulaCatAccesData.get(i).getListFormula().get(ii).getFormula_id());
										extraRate_jsonObj.put("text", datareturn_FormulaCatAccesData.get(i).getListFormula().get(ii).getName_th());
										extraRate_jsonArray.put(extraRate_jsonObj);
							 }
						 }
						// สูตร NAR
						 if (datareturn_FormulaCatAccesData.get(i).getFormulaCat().getFormula_cat_id() == 9) {
							 for (int ii = 0; ii < datareturn_FormulaCatAccesData.get(i).getListFormula().size(); ii++) {
										JSONObject nar_jsonObj = new JSONObject();
										nar_jsonObj.put("formula_cat_id", datareturn_FormulaCatAccesData.get(i).getListFormula().get(ii).getFormula_cat_id());
										nar_jsonObj.put("pass", datareturn_FormulaCatAccesData.get(i).getListFormula().get(ii).getFormula_id());
										nar_jsonObj.put("text", datareturn_FormulaCatAccesData.get(i).getListFormula().get(ii).getName_th());
										NAR_jsonArray.put(nar_jsonObj);
							 }
						 }
					 }
				
					JSONArray cal_insurance_jsonArray	= new JSONArray();
					JSONObject cal_insurance 		= new JSONObject();
					
					//Unit
					cal_insurance.put("Fix_cov_unit", unit_jsonArray);
					//OF
					cal_insurance.put("Fix_cov_factor", of_jsonArray);
					//OF MIN
					cal_insurance.put("Fix_cov_factorMin", ofMin_jsonArray);
					// rate
					cal_insurance.put("rate", rate_jsonArray);
					// สูตร Premium Rate
					cal_insurance.put("FormulaCatId7", premiumRate_jsonArray);
					// สูตร Extra Rate
					cal_insurance.put("FormulaCatId8", extraRate_jsonArray);
					// สูตร NAR
					cal_insurance.put("FormulaCatId9", NAR_jsonArray);
					cal_insurance_jsonArray.put(cal_insurance);
					
					responsejson.put("Tab_cal_insurance",cal_insurance_jsonArray);
					//
					responseText = responsejson.toString();
				}
				// ผลประโยชน์ความคุ้มครอง
				if (menu_CL_2.equals("true")) {
					JSONArray	unit_jsonArray	= new JSONArray();
					JSONArray	unitFactor_jsonArray	= new JSONArray();
					JSONArray	frequency_jsonArray	= new JSONArray();
					JSONArray	factorUnit_jsonArray	= new JSONArray();
					JSONArray	factorScope_jsonArray	= new JSONArray();
					
					JSONArray	die_calendar_jsonArray		= new JSONArray();
					JSONArray	die_unit_jsonArray			= new JSONArray();
					JSONArray	die_sa_jsonArray			= new JSONArray();
					JSONArray	die_CV_PV_jsonArray			= new JSONArray();
					JSONArray	die_other_jsonArray			= new JSONArray();
					//เงินคืนทุกระยะ
					JSONArray	unit_type_jsonArray			= new JSONArray();
					JSONArray	benef_factor_jsonArray		= new JSONArray();
					JSONArray	benef_factorPremium_jsonArray		= new JSONArray();
					ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupCL_Rider_Benefit_Factor = lookupValueGroupData.getListGroup_CL_riderBenefitFactor();
					ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupCL_Rider_Benefit_Scope = lookupValueGroupData.getListGroup_CL_riderBenefitScope();
					ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupCL_Rider_Benefit_Unit = lookupValueGroupData.getListGroup_CL_riderBenefitUnit();
					ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupCL_Rider_Benefit_Factor_Unit = lookupValueGroupData.getListGroup_CL_riderBenefitFactorUnit();
					ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupCL_Rider_Benefit_Factor_Scope = lookupValueGroupData.getListGroup_CL_riderBenefitFactorScope();
					
					ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupOL_OL_BaseBenefitSA = lookupValueGroupData.getListGroup_OL_baseBenefitSA();
					ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupOL_OL_BaseBenefitCVPV = lookupValueGroupData.getListGroup_OL_baseBenefitCVPV();
					ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupOL_OL_BaseBenefitADB = lookupValueGroupData.getListGroup_OL_BaseBenefitADB();
					ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupOL_OL_BaseBenefitOther = lookupValueGroupData.getListGroup_OL_BaseBenefitOther();
					// Death_SA
					for(int i=0 ; i < datareturn_LookupGroupOL_OL_BaseBenefitSA.size() ; i++) {
						JSONObject json_deathSA = new JSONObject();
						json_deathSA.put("pass", datareturn_LookupGroupOL_OL_BaseBenefitSA.get(i).getLookup_enum_value());
						json_deathSA.put("text", datareturn_LookupGroupOL_OL_BaseBenefitSA.get(i).getLookup_value_name());
						die_sa_jsonArray.put(json_deathSA);
					}
					
					// Death_CV/PV
					for(int i=0 ; i < datareturn_LookupGroupOL_OL_BaseBenefitCVPV.size() ; i++) {
						JSONObject json_death_CVPV = new JSONObject();
						json_death_CVPV.put("pass", datareturn_LookupGroupOL_OL_BaseBenefitCVPV.get(i).getLookup_enum_value());
						json_death_CVPV.put("text", datareturn_LookupGroupOL_OL_BaseBenefitCVPV.get(i).getLookup_value_name());
						die_CV_PV_jsonArray.put(json_death_CVPV);
					}
					
					// Death_Other
					for(int i=0 ; i < datareturn_LookupGroupOL_OL_BaseBenefitOther.size() ; i++) {
						JSONObject json_death_other = new JSONObject();
						json_death_other.put("pass", datareturn_LookupGroupOL_OL_BaseBenefitOther.get(i).getLookup_enum_value());
						json_death_other.put("text", datareturn_LookupGroupOL_OL_BaseBenefitOther.get(i).getLookup_value_name());
						die_other_jsonArray.put(json_death_other);
					}
					
					//pun FIXME หน่วย
					for(int i=0 ; i < datareturn_LookupGroupCL_Rider_Benefit_Unit.size() ; i++) {
						JSONObject json_unit = new JSONObject();
						json_unit.put("pass", datareturn_LookupGroupCL_Rider_Benefit_Unit.get(i).getLookup_enum_value());
						json_unit.put("text", datareturn_LookupGroupCL_Rider_Benefit_Unit.get(i).getLookup_value_name());
						unit_jsonArray.put(json_unit);
					}
					// ความถี่
					for(int i=0 ; i < datareturn_LookupGroupCL_Rider_Benefit_Scope.size() ; i++) {
						JSONObject json_frequency = new JSONObject();
						json_frequency.put("pass", datareturn_LookupGroupCL_Rider_Benefit_Scope.get(i).getLookup_enum_value());
						json_frequency.put("text", datareturn_LookupGroupCL_Rider_Benefit_Scope.get(i).getLookup_value_name());
						frequency_jsonArray.put(json_frequency);
					}
					// ต่อ
					for(int i=0 ; i < datareturn_LookupGroupCL_Rider_Benefit_Factor.size() ; i++) {
						JSONObject json_unitFactor = new JSONObject();
						json_unitFactor.put("pass", datareturn_LookupGroupCL_Rider_Benefit_Factor.get(i).getLookup_enum_value());
						json_unitFactor.put("text", datareturn_LookupGroupCL_Rider_Benefit_Factor.get(i).getLookup_value_name());
						unitFactor_jsonArray.put(json_unitFactor);
					}
					// Factor หน่วย
					for(int i=0 ; i < datareturn_LookupGroupCL_Rider_Benefit_Factor_Unit.size() ; i++) {
						JSONObject json_unitFactor = new JSONObject();
						json_unitFactor.put("pass", datareturn_LookupGroupCL_Rider_Benefit_Factor_Unit.get(i).getLookup_enum_value());
						json_unitFactor.put("text", datareturn_LookupGroupCL_Rider_Benefit_Factor_Unit.get(i).getLookup_value_name());
						factorUnit_jsonArray.put(json_unitFactor);
					}
					// Factor ต่อ
					for(int i=0 ; i < datareturn_LookupGroupCL_Rider_Benefit_Factor_Scope.size() ; i++) {
						JSONObject json_scopeFactor = new JSONObject();
						json_scopeFactor.put("pass", datareturn_LookupGroupCL_Rider_Benefit_Factor_Scope.get(i).getLookup_enum_value());
						json_scopeFactor.put("text", datareturn_LookupGroupCL_Rider_Benefit_Factor_Scope.get(i).getLookup_value_name());
						factorScope_jsonArray.put(json_scopeFactor);
					}
					
					ArrayList<LookupCatAccessData> catValueAcessData_arr;
					catValueAcessData_arr 			= mdcs.BasicInfo_lookup(1);
					for (int i = 0; i < catValueAcessData_arr.size(); i++) {
						

						if (catValueAcessData_arr.get(i).getLookupCat().getEnum_name().equals("lu_period_unit")) {
							for (int ii = 0; ii < catValueAcessData_arr.get(i).getListLookupValue().size(); ii++) {
								JSONObject json_calendar = new JSONObject();
								json_calendar.put("pass", catValueAcessData_arr.get(i).getListLookupValue().get(ii).getEnum_value());
								json_calendar.put("text",catValueAcessData_arr.get(i).getListLookupValue().get(ii).getName_th());
								die_calendar_jsonArray.put(json_calendar);
							}
						} 
						//unit
						if (catValueAcessData_arr.get(i).getLookupCat().getEnum_name().equals("lu_compare")) {
							for (int ii = 0; ii < catValueAcessData_arr.get(i).getListLookupValue().size(); ii++) {
								JSONObject json_unit = new JSONObject();
								json_unit.put("pass", catValueAcessData_arr.get(i).getListLookupValue().get(ii).getEnum_value());
								json_unit.put("text",catValueAcessData_arr.get(i).getListLookupValue().get(ii).getName_th());
								die_unit_jsonArray.put(json_unit);
							}
						}
						//SA ย้ายไปดึงของปั้น
						
						if(catValueAcessData_arr.get(i).getLookupCat().getEnum_name().equals("lu_limit_amt_type")) {
							for (int ii = 0; ii < catValueAcessData_arr.get(i).getListLookupValue().size(); ii++) {
								JSONObject json_factor = new JSONObject();
								json_factor.put("pass", catValueAcessData_arr.get(i).getListLookupValue().get(ii).getEnum_value());
								json_factor.put("text",catValueAcessData_arr.get(i).getListLookupValue().get(ii).getName_th());
								benef_factor_jsonArray.put(json_factor);
							}
						}
						
						//เงินคืนทุกระยะ
						if(catValueAcessData_arr.get(i).getLookupCat().getEnum_name().equals("lu_cov_unit_type")) {
							for (int ii = 0; ii < catValueAcessData_arr.get(i).getListLookupValue().size(); ii++) {
								JSONObject json_unit_type = new JSONObject();
								json_unit_type.put("pass", catValueAcessData_arr.get(i).getListLookupValue().get(ii).getEnum_value());
								json_unit_type.put("text",catValueAcessData_arr.get(i).getListLookupValue().get(ii).getName_th());
								unit_type_jsonArray.put(json_unit_type);
							}
						}
						//เสียชีวิต Premium
						if(catValueAcessData_arr.get(i).getLookupCat().getEnum_name().equals("lu_benef_factor_premium")) {
							for (int ii = 0; ii < catValueAcessData_arr.get(i).getListLookupValue().size(); ii++) {
								JSONObject json_benefFac_type = new JSONObject();
								json_benefFac_type.put("pass", catValueAcessData_arr.get(i).getListLookupValue().get(ii).getEnum_value());
								json_benefFac_type.put("text",catValueAcessData_arr.get(i).getListLookupValue().get(ii).getName_th());
								benef_factorPremium_jsonArray.put(json_benefFac_type);
							}
						}
					}
					///เสียชีวิต
					JSONArray	die_jsonArray	= new JSONArray();
					JSONObject json_die = new JSONObject();
					json_die.put("die_calendar",die_calendar_jsonArray);
					json_die.put("die_unit",die_unit_jsonArray);
					json_die.put("die_sa",die_sa_jsonArray);
					json_die.put("die_CV_PV", die_CV_PV_jsonArray);
					json_die.put("die_other", die_other_jsonArray);
					//json_die.put("exception",benefit_jsonArray);
					json_die.put("die_premium", benef_factorPremium_jsonArray);
					die_jsonArray.put(json_die);
					
					JSONArray  select_value_jsonArray	= new JSONArray();
					JSONObject json_select_value = new JSONObject();
					json_select_value.put("unit",unit_jsonArray);
					json_select_value.put("frequency",frequency_jsonArray);
					json_select_value.put("unitFactor",unitFactor_jsonArray);
					json_select_value.put("factor_unit",factorUnit_jsonArray);
					json_select_value.put("factor_scope",factorScope_jsonArray);
					json_select_value.put("die",json_die);
					select_value_jsonArray.put(json_select_value);
					responsejson.put("Tab_Benefits",select_value_jsonArray);
				}
				//Tab ผลประโยชน์การขาย
				if (menu_CL_4.equals("true")) {
					
				}
				//Tab ข้อกำหนดการรับประกัน
				if (menu_CL_5.equals("true")) {
					
					ArrayList<LookupValueGroupAccessData> datareturn_LookupGroup_Age_Unit = lookupValueGroupData.getListGroup_Age_Unit();
					ArrayList<LookupValueGroupAccessData> datareturn_LookupGroup_Age_Max_Unit = lookupValueGroupData.getListGroup_Age_Max_Unit();
					ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupCL_P = lookupValueGroupData.getListGroup_CL_P();
					ArrayList<LookupValueGroupAccessData> datareturn_LookupGroup_Senior_Opt = lookupValueGroupData.getListSenior_Opt();
					
					/********ข้อกำหนด*******/
					// พิกัดอายุ
					JSONArray	terms_calendar_jsonArray	= new JSONArray();
					// คุ้มครองสูงสุด
					JSONArray	 terms_calendarMax_jsonArray	= new JSONArray();
					// ข้อกำหนดจำนวนเงินเอาประกันภัยสัญญาเพิ่มเติม
					JSONArray	 terms_AdditionalContract_jsonArray	= new JSONArray();
					//Underwriting Type
					JSONArray	underwriting_Type_jsonArray	= new JSONArray();
					//Senior
					JSONArray json_senior_jsonArray = new JSONArray();
					
					// พิกัดอายุ
					for(int i=0 ; i < datareturn_LookupGroup_Age_Unit.size() ; i++) {
						JSONObject ageRange_jsonObj = new JSONObject();
						ageRange_jsonObj.put("pass", datareturn_LookupGroup_Age_Unit.get(i).getLookup_enum_value());
						ageRange_jsonObj.put("text", datareturn_LookupGroup_Age_Unit.get(i).getLookup_value_name());
						terms_calendar_jsonArray.put(ageRange_jsonObj);
					}
					// คุ้มครองสูงสุด
					for(int i=0 ; i < datareturn_LookupGroup_Age_Max_Unit.size() ; i++) {
						JSONObject ageRange_jsonObj = new JSONObject();
						ageRange_jsonObj.put("pass", datareturn_LookupGroup_Age_Max_Unit.get(i).getLookup_enum_value());
						ageRange_jsonObj.put("text", datareturn_LookupGroup_Age_Max_Unit.get(i).getLookup_value_name());
						terms_calendarMax_jsonArray.put(ageRange_jsonObj);
					}
					
					// Underwriting Type
					for (int i = 0; i < datareturn_LookupGroupCL_P.size(); i++) {
						JSONObject json_underwritingType = new JSONObject();
						json_underwritingType.put("pass",  datareturn_LookupGroupCL_P.get(i).getLookup_enum_value());
						json_underwritingType.put("text",  datareturn_LookupGroupCL_P.get(i).getLookup_value_name());
						underwriting_Type_jsonArray.put(json_underwritingType);
					}
					
					//Senior
					for (int i = 0; i < datareturn_LookupGroup_Senior_Opt.size(); i++) {
						JSONObject senior_jsonObj = new JSONObject();
						senior_jsonObj.put("pass",  datareturn_LookupGroup_Senior_Opt.get(i).getLookup_enum_value());
						senior_jsonObj.put("text",  datareturn_LookupGroup_Senior_Opt.get(i).getLookup_value_name());
						json_senior_jsonArray.put(senior_jsonObj);
					}
					
					for (int i = 0 ; i < datareturn_LookupCat.size(); i++) {
						// ข้อกำหนดจำนวนเงินเอาประกันภัยสัญญาเพิ่มเติม
						if (datareturn_LookupCat.get(i).getLookupCat().getEnum_name().equals("lu_unw_rider_sa")) {
							for (int ii = 0; ii < datareturn_LookupCat.get(i).getListLookupValue().size(); ii++) {
								JSONObject terms_AdditionalContract_jsonObj = new JSONObject();
								terms_AdditionalContract_jsonObj.put("pass",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getEnum_value());
								terms_AdditionalContract_jsonObj.put("text",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getName_th());
								terms_AdditionalContract_jsonArray.put(terms_AdditionalContract_jsonObj);
							}
						}
					}
					
					// ประเภทสัญญา
					ArrayList<CoverageCatAccessData> lstMainContract1_arr;
					MainInsureTypeService mainInsureTypeService = new MainInsureTypeService();
					lstMainContract1_arr = mainInsureTypeService.getmain_contract1("B");
					//level 1
					JSONArray	main_contract11_jsonArray	= new JSONArray();
					for (int i = 0; i < lstMainContract1_arr.size(); i++) {
						JSONObject main_contract1_jsonObj = new JSONObject();
						main_contract1_jsonObj.put("pass",lstMainContract1_arr.get(i).getCoverageCat().getCov_cat_id());
						main_contract1_jsonObj.put("text", lstMainContract1_arr.get(i).getCoverageCat().getName_th());
						main_contract1_jsonObj.put("value", lstMainContract1_arr.get(i).getCoverageCat().getCat_code());
						main_contract11_jsonArray.put(main_contract1_jsonObj);
					}
					
					//Sale Channel
					ArrayList<SalesChannelAccessData> datareturn_Sale_Channel;
					datareturn_Sale_Channel = mdcs.getsales_Channel();
					JSONArray	sales_Channel_jsonArray	= new JSONArray();
					for (int i = 0; i < datareturn_Sale_Channel.size(); i++) {
						JSONObject json_sales_Channel = new JSONObject();
						if(!datareturn_Sale_Channel.get(i).getSaleChannel().equals(null)) {
							if  (datareturn_Sale_Channel.get(i).getSaleChannel().getSystem_code() == null) {
								json_sales_Channel.put("pass", "");
							}else {
								json_sales_Channel.put("pass", datareturn_Sale_Channel.get(i).getSaleChannel().getSystem_code());
							}
							json_sales_Channel.put("text", datareturn_Sale_Channel.get(i).getSaleChannel().getName_th());
							json_sales_Channel.put("value", datareturn_Sale_Channel.get(i).getSaleChannel().getSale_chan_id());
							sales_Channel_jsonArray.put(json_sales_Channel);
						}	
					}
					
					
					JSONArray	benefits_jsonArray	= new JSONArray();
					JSONObject json_pbenefits = new JSONObject();
					json_pbenefits.put("calendar",terms_calendar_jsonArray);
					json_pbenefits.put("calendarMax",terms_calendarMax_jsonArray);
					json_pbenefits.put("contract_type", main_contract11_jsonArray);
					json_pbenefits.put("reinsurance_Group",underwriting_Type_jsonArray);
					json_pbenefits.put("senior", json_senior_jsonArray);
					json_pbenefits.put("sale_Channel", sales_Channel_jsonArray);
					benefits_jsonArray.put(json_pbenefits);
					responsejson.put("Tab_Warranty_terms",benefits_jsonArray);
					//
					responseText = responsejson.toString();
				}      
				//Tab ขออนุมัติ
				/*if (menu_CL_6.equals("menu_CL_6")) {
					//System.out.println("//Tab ขออนุมัติ");
				}*/
				json = responseText;
				System.out.println("LookupAll = /"+json);
			}else if(method.equals("GetPartner")) {
				String systemCode 					= request.getParameter("systemCode");
				ServiceForProductFactory  spf		= new ServiceForProductFactory();
				JSONArray	partner_jsonArray		= new JSONArray();
				ArrayList<String[]> arr_Partner  = new ArrayList<>();
				arr_Partner = spf.getPartnerByChannel(systemCode);
				for (int i = 0; i < arr_Partner.size(); i++) {
					JSONObject partner_Json = new JSONObject();
					partner_Json.put("pass", arr_Partner.get(i)[0]);
					partner_Json.put("text", arr_Partner.get(i)[1]);
					partner_Json.put("key", arr_Partner.get(i)[2]);
					
					partner_jsonArray.put(partner_Json);
				}
				responsejson.put("partner",partner_jsonArray);
				//
				responseText = responsejson.toString();
			}else if(method.equals("GetCoop")) {
				ServiceForProductFactory  spf		= new ServiceForProductFactory();
				JSONArray	cooperative_jsonArray	= new JSONArray();
				ArrayList<String[]> arr_cooperative  = new ArrayList<>();
				arr_cooperative = spf.getAllCoopTLI();
				for (int i = 0; i < arr_cooperative.size(); i++) {
					JSONObject cooperative_Json = new JSONObject();
					cooperative_Json.put("pass", arr_cooperative.get(i)[0]);
					cooperative_Json.put("text", arr_cooperative.get(i)[1]);
					cooperative_jsonArray.put(cooperative_Json);
				}
				responsejson.put("coop",cooperative_jsonArray);
				//
				responseText = responsejson.toString();
			}else if(method.equals("getAllBasePlan_CL")) {
				Product product = null;
				ProductData pd = new ProductData();
				String pass_Insurance = request.getParameter("pCode");
				
				product = pd.searchProduct(pass_Insurance);
				 	
				ArrayList<Coverage> arr_Coverage = new ArrayList<>();
				ProductBasicinfo pbf = new ProductBasicinfo(product);
				arr_Coverage = pbf.searchBasePlan();
				JSONArray	basePlanCL_data_jsonArray	= new JSONArray();
				for (int i = 0 ; i < arr_Coverage.size(); i++) {
						JSONObject basePlanCL_data_json = new JSONObject();
						basePlanCL_data_json.put("insuranceNo", arr_Coverage.get(i).getCov_code());
						basePlanCL_data_json.put("nameTH", arr_Coverage.get(i).getName_th());
						basePlanCL_data_json.put("cov_cat_id", arr_Coverage.get(i).getCov_cat_id());
						basePlanCL_data_jsonArray.put(basePlanCL_data_json);
					}
				responsejson.put("BasePlanCL_Data", basePlanCL_data_jsonArray);
				responseText = responsejson.toString();
			}else if(method.equals("getAllRider_CL")) {
				ProductBasicinfo pbf = new ProductBasicinfo();
				String pass_Insurance = request.getParameter("rCode");
				ConstantValues.PRD_CODE = pass_Insurance;
				ArrayList<ProductRiderAccessData> listCoverageRider = pbf.searchRiderPR();
				JSONArray	coverageRider_data_jsonArray	= new JSONArray();
				
				for (int i = 0 ; i < listCoverageRider.size(); i++) {
						JSONObject coverageRider_data_json = new JSONObject();
						
						
						Coverage coverage 	= 	listCoverageRider.get(i).getCoverage();
						//Product product		= 	listCoverageRider.get(i).getProduct();
						coverageRider_data_json.put("insuranceNo", coverage.getCov_code());
						coverageRider_data_json.put("nameTH", coverage.getName_th());
						coverageRider_data_json.put("cov_cat_id", coverage.getCov_cat_id());
						//coverageRider_data_json.put("prd_rider_code", product.getPrd_code());
						
						coverageRider_data_jsonArray.put(coverageRider_data_json);
					}
				responsejson.put("Rider_CL_Data", coverageRider_data_jsonArray);
				responseText = responsejson.toString();
				
			}else if(method.equals("getProducyBuyWith")) {
				ProductData pd = new ProductData();
				
				ArrayList<Product> arrProduct = pd.searchMainInsurance();
				JSONArray	product_jsonArray	= new JSONArray();
				for (int i = 0; i < arrProduct.size(); i++) {
					JSONObject product_json = new JSONObject();
					product_json.put("Prd_code", arrProduct.get(i).getPrd_code());
					product_json.put("Cov_code", arrProduct.get(i).getCov_code());
					product_json.put("Core_biz_prd_code", arrProduct.get(i).getCore_biz_prd_code());
					product_jsonArray.put(product_json);
				}
				responsejson.put("Product", product_jsonArray);
				responseText = responsejson.toString();
		}else if(method.equals("getLookup_Policy")) {

			JSONArray  tb_Policy_Wording_jsonArray	= new JSONArray();
			int tab = 2;
			MainInsureDetailCreateService mdcs = new MainInsureDetailCreateService ();	
			
			ArrayList<Document_type> datareturn;
			datareturn = mdcs.Policy_Wording(tab);
			for (int i = 0 ; i < datareturn.size(); i++) {
				JSONObject json_tb_Policy_Wording = new JSONObject();
				json_tb_Policy_Wording.put("pass", datareturn.get(i).getDoc_type_id());
				json_tb_Policy_Wording.put("text", datareturn.get(i).getName_th());
				tb_Policy_Wording_jsonArray.put(json_tb_Policy_Wording);
			}
			responsejson.put("Tab_Policy_Wording",tb_Policy_Wording_jsonArray);
			//
			responseText = responsejson.toString();
		
		}else if (method.equals("main_contract_level1_base")) {
				//level 2
				ArrayList<CoverageMainCovCat> main_contract2_arr = new ArrayList<>();
				MainInsureTypeService main_contract2 = new MainInsureTypeService();
				main_contract2_arr = main_contract2.getmain_contract2("B",type_id);
				
				
				JSONArray	main_contract2_jsonArray	= new JSONArray();
				for (int i = 0; i < main_contract2_arr.size(); i++) {
					JSONObject main_contract2_Channel = new JSONObject();
					main_contract2_Channel.put("pass",main_contract2_arr.get(i).getCoverageCat().getCov_cat_id());
					main_contract2_Channel.put("text", main_contract2_arr.get(i).getCoverageCat().getName_th());
					main_contract2_Channel.put("value", main_contract2_arr.get(i).getCoverageCat().getCat_code());
					main_contract2_jsonArray.put(main_contract2_Channel);
				}
				responsejson.put("main_contract2", main_contract2_jsonArray);
				responseText = responsejson.toString();
				
			}else if (method.equals("main_contract_level2_base")) {
				//level 3
				ArrayList<CoverageCovCat> main_contract3_arr = new ArrayList<>();
				MainInsureTypeService main_contract3 = new MainInsureTypeService();
				main_contract3_arr = main_contract3.getmain_contract3("B", type_lv1,type_lv2);
				
				JSONArray	main_contract3_jsonArray	= new JSONArray();
				for (int i = 0; i < main_contract3_arr.size(); i++) {
					JSONObject main_contract3_Channel = new JSONObject();
					main_contract3_Channel.put("pass",main_contract3_arr.get(i).getCoverageCat().getCov_cat_id());
					main_contract3_Channel.put("text", main_contract3_arr.get(i).getCoverageCat().getName_th());
					main_contract3_Channel.put("value", main_contract3_arr.get(i).getCoverageCat().getCat_code());
					main_contract3_jsonArray.put(main_contract3_Channel);
				}
				responsejson.put("main_contract3", main_contract3_jsonArray);
				responseText = responsejson.toString();
				
			}
			/****/
			json = responseText;
			//System.out.println("Lookup = /"+json);
			out.print(json);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
