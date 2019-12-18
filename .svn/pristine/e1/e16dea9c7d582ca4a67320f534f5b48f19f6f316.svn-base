package servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.math.BigDecimal;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.swing.plaf.synth.SynthScrollBarUI;

import org.json.JSONArray;
import org.json.JSONObject;

import layout.bean.productfac.beanset.AppendixRelationAccessData;
import layout.bean.productfac.beanset.CoverageCatAccessData;
import layout.bean.productfac.beanset.CoverageCovCat;
import layout.bean.productfac.beanset.CoverageMainCovCat;
import layout.bean.productfac.beanset.DistchannelAccessData;
import layout.bean.productfac.beanset.FormulaCatAccesData;
import layout.bean.productfac.beanset.LookupCatAccessData;
import layout.bean.productfac.beanset.LookupValueGroupAccessData;
import layout.bean.productfac.beanset.RateCatAccessData;
import layout.bean.productfac.beanset.RateLayoutAccessData;
import layout.bean.productfac.beanset.SalesChannelAccessData;
import layout.bean.productfac.benefit.Benefit;
import layout.bean.productfac.coverage.Coverage;
import layout.bean.productfac.lookup.Document_type;
import layout.bean.productfac.lookup.Rate_sub_cat;
import layout.bean.productfac.product.Product;
import layout.bean.productfac.workflow.Product_task;
import service.MainInsureDetailCreateProductServiceOL;
import service.MainInsureDetailCreateService;
import service.MainInsureDetailCreateServiceBasePlanOL;
import service.MainInsureTypeService;
import service.baseplan.BasePlanBenefitOLSearchData;
import service.center.DataValuesSeparate;
import service.center.LookupProductData;
import service.center.LookupValueGroupData;
import service.center.MainInsureDetailCreate;
import service.center.MainInsureDetailCreateProduct;
import service.center.ProductCloneData;
import service.center.ProductCreate;
import service.center.SubCatData;
import service.center.WorkFlowProduct;
import service.ctrl.ProductData;
import service.fnc.ConstantValues;
import service.fnc.PDFFnc;
import service.product.DistChanelData;
import service.product.ListProductBaseOLData;
import service.product.ProductBasicinfo;
import utility.adc.ServiceForProductFactory;

/**
 * Servlet implementation class ProductBasePlanOL_Data_default_Servlet
 */
@WebServlet("/ProductBasePlanOL_Data_default_Servlet")
public class ProductBasePlanOL_Data_default_Servlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private String userId; 
	private ProductCreate  ProductCreate  ;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ProductBasePlanOL_Data_default_Servlet() {
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
		processRequest(request, response);
	}

	protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
		try {
			System.out.println("===============ProductBaseOL_Data_default_Servlet==============");
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
			String plan_type 	= "B";
			String plan_type2 	= "P";
			String method 		= request.getParameter("method");
			String type_id		= request.getParameter("type");
			String type_lv1		= request.getParameter("type_lv1");
			String type_lv2		= request.getParameter("type_lv2");
			JSONObject responsejson = new JSONObject();
			//GetBasePlanCL
			
			
			if (method.equals("select_insurance_type")) {
				
				ArrayList<CoverageCatAccessData> main_contract1_arr;
				MainInsureTypeService main_contract1 = new MainInsureTypeService();
				main_contract1_arr = main_contract1.getmain_contract1(plan_type);
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
				MainInsureTypeService main_contract2 = new MainInsureTypeService();
				main_contract2_arr = main_contract2.getmain_contract2(plan_type,type_id);
				
				
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
				MainInsureTypeService main_contract3 = new MainInsureTypeService();
				main_contract3_arr = main_contract3.getmain_contract3(plan_type, type_lv1,type_lv2);
				
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
			} else if(method.equals("create_product")) {     
				String groupName			= request.getParameter("groupName");
				ConstantValues.GROUP_NAME 	= groupName;
				
				String main_contract1 		= request.getParameter("main_contract1");
				String main_contract2 		= request.getParameter("main_contract2");
				String main_contract3 		= request.getParameter("main_contract3");
				
				String menu_OL_1 		= request.getParameter("menu_OL_1");
				String menu_OL_2 		= request.getParameter("menu_OL_2");
				String menu_OL_3 		= request.getParameter("menu_OL_3");
				String menu_OL_4 		= request.getParameter("menu_OL_4");
				String menu_OL_5 		= request.getParameter("menu_OL_5");
				String menu_OL_6 		= request.getParameter("menu_OL_6");
				String menu_OL_7 		= request.getParameter("menu_OL_7");
				String main_contracttype 	= request.getParameter("main_contracttype");
				//	
				String passInsurance = "";
				if (main_contracttype.equals("1")) {
					///Step 1//////////////////////Benz///11-07-2019///////////////////////////////////
					DataValuesSeparate dvs = new DataValuesSeparate();
					dvs.doAppPage(main_contract3, plan_type2);	
					
					///Step 2//////////////////////////////////////////////////////////////////	
					  ProductCreate = new ProductCreate(main_contract1, main_contract2, main_contract3,userId);
					 // po = ProductCreate.getProduct();
					  passInsurance = ProductCreate.getProduct().getPrd_code();
					  ConstantValues.PRD_CODE = passInsurance;
					///Step 3//////////////////////////////////////////////////////////////////	
						String[] appPage  		= new String[7]; 
						
							if (menu_OL_1.equals("true")) {
								appPage[0] 		= "1";
							}else {
								appPage[0] 		= "";
							}
							if (menu_OL_2.equals("true")) {
								appPage[1] 		= "2";
							}else {
								appPage[1] 		= "";
							}
							if (menu_OL_3.equals("true")) {
								appPage[2] 		= "3";
							}else {
								appPage[2] 		= "";
							}
							if (menu_OL_4.equals("true")) {
								appPage[3] 		= "4";
							}else {
								appPage[3] 		= "";
							}
							if (menu_OL_5.equals("true")) {
								appPage[4] 		= "5";
							}else {
								appPage[4] 		= "";
							}
							if (menu_OL_6.equals("true")) {
								appPage[5] 		= "6";
							}else {
								appPage[5] 		= "";
							}
							if (menu_OL_7.equals("true")) {
								appPage[6] 		= "7";
							}else {
								appPage[6] 		= "";
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
				}else {
					String prd_code			= request.getParameter("prd_code");
					ConstantValues.PRD_CODE = prd_code;
				}
				
				MainInsureDetailCreateProductServiceOL mdcs = new MainInsureDetailCreateProductServiceOL();
				int tabmaim = 1;
				 ArrayList<LookupCatAccessData> datareturn_LookupCat;
				 datareturn_LookupCat = mdcs.BasicInfo_lookup(tabmaim);
				 LookupValueGroupData lookupValueGroupData = new LookupValueGroupData();
					
				//Tab ข้อมูลทั่วไป Basic Information
				if (menu_OL_1.equals("true")) {
					
					 ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupOL =  lookupValueGroupData.getListGroup_OL();
					 ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupOL_P_FYP = lookupValueGroupData.getListGroup_CL_P_FYP();
					 ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupOL_P_RYP = lookupValueGroupData.getListGroup_CL_P_RYP();
					 ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupOL_P = lookupValueGroupData.getListGroup_CL_P();
					 ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupOL_REINS_OPT = lookupValueGroupData.getListGroup_OL_Reins_OPT();
					 
					//*Loan Type
					JSONArray	loan_Type_jsonArray	= new JSONArray();
					//Distribution Channel
					JSONArray	distribution_Channel_jsonArray	= new JSONArray();
					//mode
					JSONArray	mode_jsonArray	= new JSONArray();
					JSONArray	unit_age_coordinates_jsonArray	= new JSONArray();
					//parProduct
					JSONArray parProduct_jsonArray = new JSONArray();
					//fightingProduct
					JSONArray fightingProduct_jsonArray = new JSONArray();
					
					JSONObject json_rateLayoutTax 					= new JSONObject();
					JSONArray	tb_layoutdet1_jsonArray 			= new JSONArray();
					JSONArray	tb_layoutdet2_jsonArray 			= new JSONArray();
					JSONObject	tb_layoutdet_JSONObject 			= new JSONObject();
					
					MainInsureDetailCreate mdc 						= new MainInsureDetailCreate ();
					ArrayList<RateCatAccessData> 					datareturnTax;
					String[] str_arr_Tax 							= new String[2]; 
					
					/*ประเภทสัญญาเพิ่มเติม */
					JSONArray	additional_Contract_Type_jsonArray	= new JSONArray();
					for (int i = 0; i < datareturn_LookupGroupOL.size(); i++) {
						JSONObject json_additional_Contract_Type = new JSONObject();
						json_additional_Contract_Type.put("pass",  datareturn_LookupGroupOL.get(i).getLookup_enum_value());
						json_additional_Contract_Type.put("text",  datareturn_LookupGroupOL.get(i).getLookup_value_name());
						additional_Contract_Type_jsonArray.put(json_additional_Contract_Type);
					}
					/*การชำระเบี้ยด้วยบัตรเครดิต ปีแรก*/
					JSONArray	CreditCards_firstYear_jsonArray	= new JSONArray();
					for(int i = 0 ; i < datareturn_LookupGroupOL_P_FYP.size(); i++)
					{
						JSONObject json_CreditCards = new JSONObject();
						json_CreditCards.put("pass", datareturn_LookupGroupOL_P_FYP.get(i).getLookup_enum_value());
						json_CreditCards.put("text", datareturn_LookupGroupOL_P_FYP.get(i).getLookup_value_name());
						CreditCards_firstYear_jsonArray.put(json_CreditCards);
					}
					/*การชำระเบี้ยด้วยบัตรเครดิต ปีต่อไป*/
					JSONArray	CreditCards_toYear_jsonArray	= new JSONArray();
					for(int i = 0 ; i < datareturn_LookupGroupOL_P_RYP.size(); i++)
					{
						JSONObject json_CreditCards = new JSONObject();
						json_CreditCards.put("pass", datareturn_LookupGroupOL_P_RYP.get(i).getLookup_enum_value());
						json_CreditCards.put("text", datareturn_LookupGroupOL_P_RYP.get(i).getLookup_value_name());
						CreditCards_toYear_jsonArray.put(json_CreditCards);
					}
					/*Reinsurance Group เปลี่ยนชื่อ underwrite Type*/
					JSONArray	reinsurance_Group_jsonArray	= new JSONArray();
					for(int i = 0 ; i < datareturn_LookupGroupOL_P.size(); i++)
					{
						JSONObject json_reinsurance_Group = new JSONObject();
						json_reinsurance_Group.put("pass", datareturn_LookupGroupOL_P.get(i).getLookup_enum_value());
						json_reinsurance_Group.put("text", datareturn_LookupGroupOL_P.get(i).getLookup_value_name());
						reinsurance_Group_jsonArray.put(json_reinsurance_Group);
					}
					/*Reinsurance Opt */
					JSONArray	reinsurance_opt_jsonArray	= new JSONArray();
					for(int i = 0 ; i < datareturn_LookupGroupOL_REINS_OPT.size(); i++)
					{
						JSONObject json_reinsuranceOpt_jsonObj = new JSONObject();
						json_reinsuranceOpt_jsonObj.put("pass", datareturn_LookupGroupOL_REINS_OPT.get(i).getLookup_enum_value());
						json_reinsuranceOpt_jsonObj.put("text", datareturn_LookupGroupOL_REINS_OPT.get(i).getLookup_value_name());
						reinsurance_opt_jsonArray.put(json_reinsuranceOpt_jsonObj);
					}
					
					/*ตัวแยก Lookup อีกตัว*/
					for (int i = 0 ; i < datareturn_LookupCat.size(); i++) {
						//Loan Type
						if (datareturn_LookupCat.get(i).getLookupCat().getEnum_name().equals("lu_loan_type")) {
							for (int ii = 0; ii < datareturn_LookupCat.get(i).getListLookupValue().size(); ii++) {
								JSONObject json_loan_Type = new JSONObject();
								json_loan_Type.put("pass",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getEnum_value());
								json_loan_Type.put("text",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getName_th());
								loan_Type_jsonArray.put(json_loan_Type);
							}
						}
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
						//พิกัดอายุ -หน่วย
						if (datareturn_LookupCat.get(i).getLookupCat().getEnum_name().equals("lu_period_unit")) {
							for (int ii = 0; ii < datareturn_LookupCat.get(i).getListLookupValue().size(); ii++) {
								JSONObject unit_age_coordinates = new JSONObject();
								unit_age_coordinates.put("pass",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getEnum_value());
								unit_age_coordinates.put("text",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getName_th());
								unit_age_coordinates_jsonArray.put(unit_age_coordinates);
							}
						}
						//Par-Product
						if (datareturn_LookupCat.get(i).getLookupCat().getEnum_name().equals("lu_par_product")) {
							for (int ii = 0; ii < datareturn_LookupCat.get(i).getListLookupValue().size(); ii++) {
								JSONObject parProduct_jsonObj = new JSONObject();
								parProduct_jsonObj.put("pass",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getEnum_value());
								parProduct_jsonObj.put("text",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getName_th());
								parProduct_jsonArray.put(parProduct_jsonObj);
							}
						}
						// Fighting_Product
						if (datareturn_LookupCat.get(i).getLookupCat().getEnum_name().equals("lu_fighting_product")) {
							for (int ii = 0; ii < datareturn_LookupCat.get(i).getListLookupValue().size(); ii++) {
								JSONObject fightingProduct_jsonObj = new JSONObject();
								fightingProduct_jsonObj.put("pass",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getEnum_value());
								fightingProduct_jsonObj.put("text",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getName_th());
								fightingProduct_jsonArray.put(fightingProduct_jsonObj);
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
							JSONObject json_tb_nar 			= new JSONObject();
							JSONArray tb_nar_jsonArray2 	= new JSONArray();
							tb_layoutdet2_jsonArray 		= new JSONArray();
							json_tb_nar.put("text", rate_sub_cat_arr.get(ii).getName_th());
							json_tb_nar.put("pass", rate_sub_cat_arr.get(ii).getRate_cat_id());
							json_tb_nar.put("sub_rate_cat", rate_sub_cat_arr.get(ii).getSub_cat_id());
							/////////////////Benz 29-11-2019 เพิ่ม การดึง lookup เพิ่มเติม RateLaoutDet
							 BigDecimal bd_rate_cat_id 	= new BigDecimal(rate_sub_cat_arr.get(ii).getRate_cat_id());
							 String str_rate_cat_id 	= (bd_rate_cat_id).toString();
							str_arr_Tax[0]		 		= str_rate_cat_id;
							datareturnTax = mdc.searchTax(str_arr_Tax);
								if (datareturnTax.size() > 0) {
									for (int j = 0; j < datareturnTax.size(); j++) {
										for (int jj = 0; jj < datareturnTax.get(j).getListRateLayout().size(); jj++) {
											tb_layoutdet1_jsonArray 	= new JSONArray(); 
											tb_layoutdet_JSONObject 	= new JSONObject();
											for (int jjj = 0; jjj < datareturnTax.get(j).getListRateLayout().get(jj).getListRateLayoutDet().size(); jjj++) {
												json_rateLayoutTax = new JSONObject();
												json_rateLayoutTax.put("rate_layout_id",datareturnTax.get(j).getListRateLayout().get(jj).getListRateLayoutDet().get(jjj).getRate_layout_id());
												json_rateLayoutTax.put("column_name",datareturnTax.get(j).getListRateLayout().get(jj).getListRateLayoutDet().get(jjj).getColumn_name());
												json_rateLayoutTax.put("column_len",datareturnTax.get(j).getListRateLayout().get(jj).getListRateLayoutDet().get(jjj).getColumn_len());
												tb_layoutdet1_jsonArray.put(json_rateLayoutTax);
											}
											tb_layoutdet_JSONObject.put("rate_layout_det",tb_layoutdet1_jsonArray);
											tb_layoutdet2_jsonArray.put(tb_layoutdet_JSONObject);
										};
									}
								}
							///////////////////											
								json_tb_nar.put("ratelayoutdet", tb_layoutdet2_jsonArray);
							
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
							JSONObject json_tb_pm 			= new JSONObject();
							JSONArray tb_pm_jsonArray2 		= new JSONArray();
							tb_layoutdet2_jsonArray 		= new JSONArray();
							json_tb_pm.put("text", rate_sub_cat_arr.get(ii).getName_th());
							json_tb_pm.put("pass", rate_sub_cat_arr.get(ii).getRate_cat_id());
							json_tb_pm.put("sub_rate_cat", rate_sub_cat_arr.get(ii).getSub_cat_id());
							/////////////////Benz 29-11-2019 เพิ่ม การดึง lookup เพิ่มเติม RateLaoutDet
							 BigDecimal bd_rate_cat_id 	= new BigDecimal(rate_sub_cat_arr.get(ii).getRate_cat_id());
							 String str_rate_cat_id 	= (bd_rate_cat_id).toString();
							str_arr_Tax[0]		 		= str_rate_cat_id;
							datareturnTax = mdc.searchTax(str_arr_Tax);
								if (datareturnTax.size() > 0) {
									for (int j = 0; j < datareturnTax.size(); j++) {
										for (int jj = 0; jj < datareturnTax.get(j).getListRateLayout().size(); jj++) {
											tb_layoutdet1_jsonArray 	= new JSONArray(); 
											tb_layoutdet_JSONObject 	= new JSONObject();
											for (int jjj = 0; jjj < datareturnTax.get(j).getListRateLayout().get(jj).getListRateLayoutDet().size(); jjj++) {
												json_rateLayoutTax = new JSONObject();
												json_rateLayoutTax.put("rate_layout_id",datareturnTax.get(j).getListRateLayout().get(jj).getListRateLayoutDet().get(jjj).getRate_layout_id());
												json_rateLayoutTax.put("column_name",datareturnTax.get(j).getListRateLayout().get(jj).getListRateLayoutDet().get(jjj).getColumn_name());
												json_rateLayoutTax.put("column_len",datareturnTax.get(j).getListRateLayout().get(jj).getListRateLayoutDet().get(jjj).getColumn_len());
												tb_layoutdet1_jsonArray.put(json_rateLayoutTax);
											}
											tb_layoutdet_JSONObject.put("rate_layout_det",tb_layoutdet1_jsonArray);
											tb_layoutdet2_jsonArray.put(tb_layoutdet_JSONObject);
										};
									}
								}
							///////////////////											
								json_tb_pm.put("ratelayoutdet", tb_layoutdet2_jsonArray);
							
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
					json_basic_Info.put("reinsurance_opt",reinsurance_opt_jsonArray);
					json_basic_Info.put("distribution_Channel",distribution_Channel_jsonArray);
					json_basic_Info.put("sale_Channel", sales_Channel_jsonArray);
					json_basic_Info.put("parProduct", parProduct_jsonArray);
					json_basic_Info.put("fightingProduct", fightingProduct_jsonArray);
					
					json_basic_Info.put("NAR", nar_jsonArray);
					json_basic_Info.put("PM_Rate", pm_rate_jsonArray);
					
					basic_Info_jsonArray.put(json_basic_Info);
					//
					responsejson.put("Tab_Basic_Information",basic_Info_jsonArray);
					responseText = responsejson.toString();
				}
				//Tab การคำนวนเบี้ยประกัน
				if (menu_OL_2.equals("true")) {
					int tab = 2;
					//หน่วย
					ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupCL_P_Benefit_Unit_Sum =  lookupValueGroupData.getListGroup_CL_P_benefitUnitSum();
					// ของ
					ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupOL_PR_Limit_Factor_Seq1 =  lookupValueGroupData.getListGroup_OL_PR_Limit_Factor_Seq1();
					// ของต่ำ
					ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupOL_PR_Limit_Factor_Seq2 =  lookupValueGroupData.getListGroup_OL_PR_Limit_Factor_Seq2();
					
					//Collect_Meth
					ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupOL_collect_meth = lookupValueGroupData.getListGroupCollectMeth_OL();
					
					//Age Type
					//Unit
					JSONArray	unit_jsonArray	= new JSONArray();
					//OF
					JSONArray	of_jsonArray	= new JSONArray();
					//OF Min
					JSONArray	ofMin_jsonArray	= new JSONArray();
					//FYP
					JSONArray	collect_meth_jsonArray 	= new JSONArray(); 
					
					
					for(int i = 0 ; i < datareturn_LookupGroupCL_P_Benefit_Unit_Sum.size() ; i++) {
						JSONObject json_unit = new JSONObject();
						json_unit.put("pass",  datareturn_LookupGroupCL_P_Benefit_Unit_Sum.get(i).getLookup_enum_value());
						json_unit.put("text",  datareturn_LookupGroupCL_P_Benefit_Unit_Sum.get(i).getLookup_value_name());
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
					
					//FYP
					for(int i = 0; i <datareturn_LookupGroupOL_collect_meth.size() ; i++) {
						JSONObject json_collect_meth = new JSONObject();
						json_collect_meth.put("pass", datareturn_LookupGroupOL_collect_meth.get(i).getLookup_enum_value());
						json_collect_meth.put("text", datareturn_LookupGroupOL_collect_meth.get(i).getLookup_value_name());
						collect_meth_jsonArray.put(json_collect_meth);
					}
					
					ArrayList<FormulaCatAccesData> datareturn_FormulaCatAccesData;
					MainInsureDetailCreateProduct mdc 	= new MainInsureDetailCreateProduct();
					 mdc.createDetail(tab);
					 datareturn_FormulaCatAccesData 	= mdc.getListFormulaCatAccesData();
					 JSONArray	SA_P_jsonArray			= new JSONArray();
					 JSONArray	SMI_jsonArray			= new JSONArray();
					 JSONArray	MI_jsonArray			= new JSONArray();
					 JSONArray	formulaCal_jsonArray	= new JSONArray();
					
					 for (int i = 0; i < datareturn_FormulaCatAccesData.size(); i++) {
						//ทุนในการคำนวณเบี้ย (SA_P)
						 if (datareturn_FormulaCatAccesData.get(i).getFormulaCat().getFormula_cat_id() == 1) {
							 for (int ii = 0; ii < datareturn_FormulaCatAccesData.get(i).getListFormula().size(); ii++) {
										JSONObject json_SA_P = new JSONObject();
										json_SA_P.put("pass", datareturn_FormulaCatAccesData.get(i).getListFormula().get(ii).getFormula_id());
										json_SA_P.put("text", datareturn_FormulaCatAccesData.get(i).getListFormula().get(ii).getName_th());
										SA_P_jsonArray.put(json_SA_P);
							 }
						 }
						//วิธีการคำนวณ SMI
						 if (datareturn_FormulaCatAccesData.get(i).getFormulaCat().getFormula_cat_id() == 2) {
							 for (int ii = 0; ii < datareturn_FormulaCatAccesData.get(i).getListFormula().size(); ii++) {
										JSONObject json_SMI = new JSONObject();
										json_SMI.put("pass", datareturn_FormulaCatAccesData.get(i).getListFormula().get(ii).getFormula_id());
										json_SMI.put("text", datareturn_FormulaCatAccesData.get(i).getListFormula().get(ii).getName_th());
										SMI_jsonArray.put(json_SMI);
							 }
						 }
						//วิธีการคำนวณ MI
						 if (datareturn_FormulaCatAccesData.get(i).getFormulaCat().getFormula_cat_id() == 3) {
							 for (int ii = 0; ii < datareturn_FormulaCatAccesData.get(i).getListFormula().size(); ii++) {
										JSONObject json_MI = new JSONObject();
										json_MI.put("pass", datareturn_FormulaCatAccesData.get(i).getListFormula().get(ii).getFormula_id());
										json_MI.put("text", datareturn_FormulaCatAccesData.get(i).getListFormula().get(ii).getName_th());
										MI_jsonArray.put(json_MI);
							 }
						 }
						//สูตรการคำนวณเบี้ย
						 if (datareturn_FormulaCatAccesData.get(i).getFormulaCat().getFormula_cat_id() == 4) {
							 for (int ii = 0; ii < datareturn_FormulaCatAccesData.get(i).getListFormula().size(); ii++) {
										JSONObject json_formulaCal = new JSONObject();
										json_formulaCal.put("pass", datareturn_FormulaCatAccesData.get(i).getListFormula().get(ii).getFormula_id());
										json_formulaCal.put("text", datareturn_FormulaCatAccesData.get(i).getListFormula().get(ii).getName_th());
										formulaCal_jsonArray.put(json_formulaCal);
							 }
						 }
						 
					 }
					 
					 
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
					//Age Specific
					
					//cal_insurance.put("OF", of_jsonArray);
					//Unit
					cal_insurance.put("Fix_cov_unit", unit_jsonArray);
					//OF
					cal_insurance.put("Fix_cov_factor", of_jsonArray);
					//OF MIN
					cal_insurance.put("Fix_cov_factorMin", ofMin_jsonArray);
					//SA_P
					cal_insurance.put("FormulaCatId1", SA_P_jsonArray);
					//SMI
					cal_insurance.put("FormulaCatId2", SMI_jsonArray);
					//สูตรการคำนวณเบี้ย
					cal_insurance.put("FormulaCatId4", formulaCal_jsonArray);
					//MI
					cal_insurance.put("FormulaCatId3", MI_jsonArray);
					
					// สูตร Premium Rate
					cal_insurance.put("FormulaCatId7", premiumRate_jsonArray);
					// สูตร Extra Rate
					cal_insurance.put("FormulaCatId8", extraRate_jsonArray);
					// สูตร NAR
					cal_insurance.put("FormulaCatId9", NAR_jsonArray);
					
					//CollectMeth
					cal_insurance.put("Collect_Meth", collect_meth_jsonArray);
					
					
					//สูตรการคำนวณเบี้ย
					//cal_insurance.put("cal_Formula_Insurance", cal_Formula_Insurance_jsonArray);
					cal_insurance_jsonArray.put(cal_insurance);
					
					responsejson.put("Tab_cal_insurance",cal_insurance_jsonArray);
					//
					responseText = responsejson.toString();
				}
				//การใช้สิทธิ์ตามกรมธรรม์
				if (menu_OL_3.equals("true")) {
					int tab = 3;
					//Change conditions
					JSONArray	change_conditions_jsonArray	= new JSONArray();
					if (datareturn_LookupCat.size() != 0) {
						for (int i = 0 ; i < datareturn_LookupCat.size(); i++) {
							//Unit
							if (datareturn_LookupCat.get(i).getLookupCat().getEnum_name().equals("lu_prd_chg")) {
								for (int ii = 0; ii < datareturn_LookupCat.get(i).getListLookupValue().size(); ii++) {
									JSONObject json_change_conditions = new JSONObject();
									json_change_conditions.put("pass",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getEnum_value());
									json_change_conditions.put("text",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getName_th());
									change_conditions_jsonArray.put(json_change_conditions);
								}
							}
						}
					}
					ArrayList<FormulaCatAccesData> datareturn_FormulaCatAccesData;
					MainInsureDetailCreateProduct mdc 					= new MainInsureDetailCreateProduct();
					 mdc.createDetail(tab);
					 datareturn_FormulaCatAccesData 					= mdc.getListFormulaCatAccesData();
					 JSONArray  expropriation_formula_jsonArray			= new JSONArray();
					 if (datareturn_FormulaCatAccesData.size() != 0) {
						 for (int i = 0; i < datareturn_FormulaCatAccesData.size(); i++) {
								//ทุนในการคำนวณเบี้ย (SA_P)
								 if (datareturn_FormulaCatAccesData.get(i).getFormulaCat().getFormula_cat_id() == 10) {
									 for (int ii = 0; ii < datareturn_FormulaCatAccesData.get(i).getListFormula().size(); ii++) {
												JSONObject json_expropriation_formula = new JSONObject();
												json_expropriation_formula.put("pass", datareturn_FormulaCatAccesData.get(i).getListFormula().get(ii).getFormula_id());
												json_expropriation_formula.put("text", datareturn_FormulaCatAccesData.get(i).getListFormula().get(ii).getName_th());
												expropriation_formula_jsonArray.put(json_expropriation_formula);
									 }
								 }
						}
					}
					//
					JSONArray  setexpropriation_formula_jsonArray	= new JSONArray();
					JSONObject json_expropriation_formula = new JSONObject();
					json_expropriation_formula.put("change_conditions",change_conditions_jsonArray);
					json_expropriation_formula.put("expropriation_formula",expropriation_formula_jsonArray);
					setexpropriation_formula_jsonArray.put(json_expropriation_formula);
					
					responsejson.put("Tab_Use_Rights",setexpropriation_formula_jsonArray);
					//
					responseText = responsejson.toString();
				}
				//Tab ผลประโยชน์การขาย
				if (menu_OL_4.equals("true")) {
					JSONArray	sales_benefits_jsonArray	= new JSONArray();
					for (int i = 0 ; i < datareturn_LookupCat.size(); i++) {
						//mode
						if (datareturn_LookupCat.get(i).getLookupCat().getLookup_cat_id() == 45) {
							for (int ii = 0; ii < datareturn_LookupCat.get(i).getListLookupValue().size(); ii++) {
								JSONObject  sales_benefits_Contract_Type = new JSONObject();
								if (datareturn_LookupCat.get(i).getListLookupValue().get(ii).getLookup_value_id() == 178) {
									sales_benefits_Contract_Type.put("pass",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getEnum_value());
									sales_benefits_Contract_Type.put("text",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getName_th());
									sales_benefits_jsonArray.put(sales_benefits_Contract_Type);
								}else if (datareturn_LookupCat.get(i).getListLookupValue().get(ii).getLookup_value_id() == 179) {
									sales_benefits_Contract_Type.put("pass",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getEnum_value());
									sales_benefits_Contract_Type.put("text",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getName_th());
									sales_benefits_jsonArray.put(sales_benefits_Contract_Type);
								}else if (datareturn_LookupCat.get(i).getListLookupValue().get(ii).getLookup_value_id() == 180) {
									sales_benefits_Contract_Type.put("pass",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getEnum_value());
									sales_benefits_Contract_Type.put("text",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getName_th());
									sales_benefits_jsonArray.put(sales_benefits_Contract_Type);
								}else if (datareturn_LookupCat.get(i).getListLookupValue().get(ii).getLookup_value_id() == 181) {
									sales_benefits_Contract_Type.put("pass",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getEnum_value());
									sales_benefits_Contract_Type.put("text",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getName_th());
									sales_benefits_jsonArray.put(sales_benefits_Contract_Type);
								}else if (datareturn_LookupCat.get(i).getListLookupValue().get(ii).getLookup_value_id() == 182) {
									sales_benefits_Contract_Type.put("pass",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getEnum_value());
									sales_benefits_Contract_Type.put("text",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getName_th());
									sales_benefits_jsonArray.put(sales_benefits_Contract_Type);
								}
							}	
						}
					}
					
					responsejson.put("Tab_Sales_Benefits",sales_benefits_jsonArray);
					//
					responseText = responsejson.toString();
				}
				//Tab ข้อกำหนดการรับประกัน
				if (menu_OL_5.equals("true")) {
					ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupCL_P_Benefit_Unit_Sum = lookupValueGroupData.getListGroup_CL_P_benefitUnitSum();
					ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupCL_P_Benefit_Factor_Sum = lookupValueGroupData.getListGroup_CL_P_benefitFactorSum();
					ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupCL_P = lookupValueGroupData.getListGroup_CL_P();
					//ข้อกำหนด
					JSONArray	terms_calendar_jsonArray	= new JSONArray();
					//Mode
					JSONArray	mode_jsonArray	= new JSONArray();
					//cal_Age
					JSONArray	cal_Age_jsonArray	= new JSONArray();
					//Underwriting Type
					JSONArray	underwriting_Type_jsonArray	= new JSONArray();
					//Senior
					JSONArray json_senior_jsonArray = new JSONArray();
					//lu_unw_hist_con
					JSONArray	lu_unw_hist_con_jsonArray	= new JSONArray();
					//lu_condition
					JSONArray	lu_condition_jsonArray	= new JSONArray();
					//lu_compare_2
					JSONArray	lu_compare_2_jsonArray	= new JSONArray();
					//lu_cov_unit_type
					JSONArray	fix_cov_unit_jsonArray	= new JSONArray();
					//lu_compare_2
					JSONArray	fix_cov_factor_jsonArray	= new JSONArray();
					//unw_hist_rule
					JSONArray	unw_hist_rule_jsonArray	= new JSONArray();
					//unw_substd_type
					JSONArray	unw_substd_type_jsonArray	= new JSONArray();
					
					// หน่วย
					for(int i=0 ; i < datareturn_LookupGroupCL_P_Benefit_Unit_Sum.size() ; i++) {
						JSONObject json_unit = new JSONObject();
						json_unit.put("pass", datareturn_LookupGroupCL_P_Benefit_Unit_Sum.get(i).getLookup_enum_value());
						json_unit.put("text", datareturn_LookupGroupCL_P_Benefit_Unit_Sum.get(i).getLookup_value_name());
						fix_cov_unit_jsonArray.put(json_unit);
					}
					// ของ
					for(int i=0 ; i < datareturn_LookupGroupCL_P_Benefit_Factor_Sum.size() ; i++) {
						JSONObject json_factor = new JSONObject();
						json_factor.put("pass", datareturn_LookupGroupCL_P_Benefit_Factor_Sum.get(i).getLookup_enum_value());
						json_factor.put("text", datareturn_LookupGroupCL_P_Benefit_Factor_Sum.get(i).getLookup_value_name());
						fix_cov_factor_jsonArray.put(json_factor);
					}
					//เปลี่ยนเป็น Underwriting Type
					for (int i = 0; i < datareturn_LookupGroupCL_P.size(); i++) {
						JSONObject json_underwritingType = new JSONObject();
						json_underwritingType.put("pass",  datareturn_LookupGroupCL_P.get(i).getLookup_enum_value());
						json_underwritingType.put("text",  datareturn_LookupGroupCL_P.get(i).getLookup_value_name());
						underwriting_Type_jsonArray.put(json_underwritingType);
					}
					
					for (int i = 0 ; i < datareturn_LookupCat.size(); i++) {
						//calendar
						if (datareturn_LookupCat.get(i).getLookupCat().getEnum_name().equals("lu_period_unit")) {
							for (int ii = 0; ii < datareturn_LookupCat.get(i).getListLookupValue().size(); ii++) {
								JSONObject json_calendar = new JSONObject();
								json_calendar.put("pass",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getEnum_value());
								json_calendar.put("text",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getName_th());
								terms_calendar_jsonArray.put(json_calendar);
							}
						}
						//Mode
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
						//cal_Age
						if (datareturn_LookupCat.get(i).getLookupCat().getEnum_name().equals("lu_age_calc_meth")) {
							for (int ii = 0 ; ii < datareturn_LookupCat.get(i).getListLookupValue().size(); ii++) {
								JSONObject json_cal_Age = new JSONObject();
								json_cal_Age.put("pass", datareturn_LookupCat.get(i).getListLookupValue().get(ii).getEnum_value());
								json_cal_Age.put("text", datareturn_LookupCat.get(i).getListLookupValue().get(ii).getName_th());
								cal_Age_jsonArray.put(json_cal_Age);
							}
						}
						//Reinsurance Group เปลี่ยนเป็น Underwriting Type
						/*if (datareturn_LookupCat.get(i).getLookupCat().getEnum_name().equals("lu_unw_opt")) {
							//Reinsurance Group
							for (int ii = 0; ii < datareturn_LookupCat.get(i).getListLookupValue().size(); ii++) {
								JSONObject json_reinsurance_Group = new JSONObject();
								json_reinsurance_Group.put("pass",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getEnum_value());
								json_reinsurance_Group.put("text",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getName_th());
								reinsurance_Group_jsonArray.put(json_reinsurance_Group);
							}
						}*/
						//Senior
						if (datareturn_LookupCat.get(i).getLookupCat().getEnum_name().equals("lu_senior_opt")) {
							//Reinsurance Group
							for (int ii = 0; ii < datareturn_LookupCat.get(i).getListLookupValue().size(); ii++) {
								JSONObject json_senior = new JSONObject();
								json_senior.put("pass",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getEnum_value());
								json_senior.put("text",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getName_th());
								json_senior_jsonArray.put(json_senior);
							}
						}
						//lu_unw_hist_con
						if (datareturn_LookupCat.get(i).getLookupCat().getEnum_name().equals("lu_unw_hist_con")) {
							for (int ii = 0; ii < datareturn_LookupCat.get(i).getListLookupValue().size(); ii++) {
								JSONObject json_lu_unw_hist_con = new JSONObject();
								json_lu_unw_hist_con.put("pass",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getEnum_value());
								json_lu_unw_hist_con.put("text",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getName_th());
								lu_unw_hist_con_jsonArray.put(json_lu_unw_hist_con);
							}
						}
						//lu_condition
						if (datareturn_LookupCat.get(i).getLookupCat().getEnum_name().equals("lu_condition")) {
							for (int ii = 0; ii < datareturn_LookupCat.get(i).getListLookupValue().size(); ii++) {
								JSONObject json_lu_condition = new JSONObject();
								json_lu_condition.put("pass",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getEnum_value());
								json_lu_condition.put("text",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getName_th());
								lu_condition_jsonArray.put(json_lu_condition);
							}
						}
						//lu_compare_2
						if (datareturn_LookupCat.get(i).getLookupCat().getEnum_name().equals("lu_compare_2")) {
							for (int ii = 0; ii < datareturn_LookupCat.get(i).getListLookupValue().size(); ii++) {
								JSONObject json_lu_compare_2 = new JSONObject();
								json_lu_compare_2.put("pass",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getEnum_value());
								json_lu_compare_2.put("text",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getName_th());
								lu_compare_2_jsonArray.put(json_lu_compare_2);
							}
						}
						//unw_hist_rule
						if (datareturn_LookupCat.get(i).getLookupCat().getEnum_name().equals("lu_unw_hist_type")) {
							for (int ii = 0; ii < datareturn_LookupCat.get(i).getListLookupValue().size(); ii++) {
								JSONObject json_unw_hist_rule = new JSONObject();
								json_unw_hist_rule.put("pass",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getEnum_value());
								json_unw_hist_rule.put("text",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getName_th());
								unw_hist_rule_jsonArray.put(json_unw_hist_rule);
							}
						}
						//unw_substd_type
						if (datareturn_LookupCat.get(i).getLookupCat().getEnum_name().equals("lu_substd_type")) {
							for (int ii = 0; ii < datareturn_LookupCat.get(i).getListLookupValue().size(); ii++) {
								JSONObject json_unw_substd_type = new JSONObject();
								json_unw_substd_type.put("pass",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getEnum_value());
								json_unw_substd_type.put("text",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getName_th());
								unw_substd_type_jsonArray.put(json_unw_substd_type);
							}
						}
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
					//FilingChannel
					/*ArrayList<FilingChannelAccessData> datareturn_FilingChannel;
					datareturn_FilingChannel = mdcs.getfiling_Channel();
					JSONArray	filling_Channel_jsonArray	= new JSONArray();
					for (int i = 0; i < datareturn_FilingChannel.size(); i++) {
						JSONObject json_filling_Channel = new JSONObject();
						if(!datareturn_FilingChannel.get(i).getFilingChannel().equals(null)) {
							json_filling_Channel.put("pass", datareturn_FilingChannel.get(i).getFilingChannel().getFiling_chan_id());
							json_filling_Channel.put("text", datareturn_FilingChannel.get(i).getFilingChannel().getName_th());
							filling_Channel_jsonArray.put(json_filling_Channel);
						}
					}*/
					DistChanelData dc = new DistChanelData();
					//Distribution Channel
					JSONArray distribution_Channel_jsonArray	= new JSONArray();
					ArrayList<DistchannelAccessData> return_DistchannelAccessData = dc.searchLookupDistChanel();
					if (return_DistchannelAccessData.size() != 0) {
						for (int i = 0; i < return_DistchannelAccessData.size(); i++) {
							JSONObject json_distribution_Channel = new JSONObject();
							json_distribution_Channel.put("pass",  return_DistchannelAccessData.get(i).getDistChannel().getDist_chan_id());
							json_distribution_Channel.put("text",  return_DistchannelAccessData.get(i).getDistChannel().getName_th());
							distribution_Channel_jsonArray.put(json_distribution_Channel);
						}
					}
					//searchAllAppendix
					LookupProductData lpd = new LookupProductData();
					ArrayList<AppendixRelationAccessData>  arr_Appendix =	lpd.searchAppendixRelation();
					JSONArray Jsonarr_Appendix = new JSONArray();
					if (arr_Appendix.size() != 0) {
						for (int i = 0; i < arr_Appendix.size(); i++) {
							JSONObject json_Appendix = new JSONObject();
							//if (arr_Appendix.get(i).getIs_active() == true) {
							json_Appendix.put("Abb_name", arr_Appendix.get(i).getAppendix_version().getAbb_name());
							json_Appendix.put("Appendix_code", arr_Appendix.get(i).getAppendix().getAppendix_code());
							json_Appendix.put("Name_th", arr_Appendix.get(i).getAppendix().getName_th());
							Jsonarr_Appendix.put(json_Appendix);
							//}
						}
					}
					
					//search Product at Rider
					//PorductProvision porductProvision = new PorductProvision();
					//ArrayList<Product> lstProduct = porductProvision.searchProductAtRider();
					
					/*String prd_code = request.getParameter("rCode");
					ConstantValues.PRD_CODE = prd_code;*/
					ListProductBaseOLData listProductBaseOLData = new ListProductBaseOLData();
					ArrayList<Product> listProduct = listProductBaseOLData.searchListProductRiderOLNotBundle();
					JSONArray rider_jsonArr = new JSONArray(); 
					for (Product product : listProduct) {
						JSONObject rider_jsonObj = new JSONObject();
						rider_jsonObj.put("prd_rider_code", product.getPrd_code());
						rider_jsonObj.put("cov_code", product.getCov_code());
						rider_jsonObj.put("name_th", product.getName_th());
						rider_jsonObj.put("biz_code", product.getCore_biz_prd_code());
						rider_jsonObj.put("cov_cat_id", product.getCov_cat_id());
						rider_jsonArr.put(rider_jsonObj);
					}
					
					/*ซื้อคุ่กับแบบ*/
					ProductData pd = new ProductData();
					ArrayList<Product> arrProduct = pd.searchMainInsurance();
					JSONArray	product_jsonArray	= new JSONArray();
					for (int i = 0; i < arrProduct.size(); i++) {
						if(arrProduct.get(i).getStatus().equals("APPROVED")) {
							JSONObject product_json = new JSONObject();
							product_json.put("Prd_code", arrProduct.get(i).getPrd_code());
							product_json.put("Cov_code", arrProduct.get(i).getCov_code());
							product_json.put("Core_biz_prd_code", arrProduct.get(i).getCore_biz_prd_code());
							product_jsonArray.put(product_json);
						}
					}
					
					JSONArray	benefits_jsonArray	= new JSONArray();
					JSONObject json_pbenefits = new JSONObject();
					json_pbenefits.put("calendar",terms_calendar_jsonArray);
					json_pbenefits.put("Fix_cov_unit",fix_cov_unit_jsonArray);
					json_pbenefits.put("Fix_cov_factor",fix_cov_factor_jsonArray);
					json_pbenefits.put("mode",mode_jsonArray);
					json_pbenefits.put("cal_Age",cal_Age_jsonArray);
					json_pbenefits.put("reinsurance_Group",underwriting_Type_jsonArray);
					json_pbenefits.put("senior", json_senior_jsonArray);
					json_pbenefits.put("sale_Channel", sales_Channel_jsonArray);
					json_pbenefits.put("filing_Channel", distribution_Channel_jsonArray);
					json_pbenefits.put("lu_unw_hist_con", lu_unw_hist_con_jsonArray);
					json_pbenefits.put("lu_condition", lu_condition_jsonArray);
					json_pbenefits.put("lu_compare_2", lu_compare_2_jsonArray);
					json_pbenefits.put("unw_hist_rule", unw_hist_rule_jsonArray);
					json_pbenefits.put("Appendix", Jsonarr_Appendix);
					json_pbenefits.put("unw_substd_type", unw_substd_type_jsonArray);
					json_pbenefits.put("list_uwnRider", rider_jsonArr);
					json_pbenefits.put("ProductBuyWith", product_jsonArray);
					benefits_jsonArray.put(json_pbenefits);
					responsejson.put("Tab_Warranty_terms",benefits_jsonArray);
					//
					
				} 
				if (menu_OL_7.equals("true")) {
					
					MainInsureDetailCreateServiceBasePlanOL mdcs2 = new MainInsureDetailCreateServiceBasePlanOL ();
					int tab = 6;
					ArrayList<Benefit> datareturn;
					ArrayList<LookupCatAccessData> datareturn_datalool_up;
					ArrayList<FormulaCatAccesData> datareturn_Formula_Lookup;
					datareturn = mdcs2.Benefits(tab);
					datareturn_datalool_up = mdcs2.getBenefits_Lookup();
					datareturn_Formula_Lookup = mdcs2.dividend_lookup(tab);
					JSONArray	die_calendar_jsonArray		= new JSONArray();
					JSONArray	die_unit_jsonArray			= new JSONArray();
					JSONArray	die_sa_jsonArray			= new JSONArray();
					JSONArray	die_CV_PV_jsonArray			= new JSONArray();
					JSONArray	die_other_jsonArray			= new JSONArray();
					JSONArray	condition_jsonArray			= new JSONArray();
					JSONArray	accident_ADB_jsonArray		= new JSONArray();
					
					//** pun fixed **//
					//เงินคืนทุกระยะ
					JSONArray	unit_type_jsonArray			= new JSONArray();
					JSONArray	cov_benef_scope_jsonArray	= new JSONArray();
					JSONArray	benef_period_jsonArray		= new JSONArray();
					JSONArray	refund_unit_jsonArray		= new JSONArray();
					JSONArray	refund_scope_jsonArray		= new JSONArray();
					JSONArray	benef_factor_jsonArray		= new JSONArray();
					JSONArray	benef_factorPremium_jsonArray		= new JSONArray();
					//FormulaCatAccesData
					JSONArray	formula_jsonArray		= new JSONArray();
					
					ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupOL_OL_BaseBenefitSA = lookupValueGroupData.getListGroup_OL_baseBenefitSA();
					ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupOL_OL_BaseBenefitCVPV = lookupValueGroupData.getListGroup_OL_baseBenefitCVPV();
					ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupOL_OL_BaseBenefitADB = lookupValueGroupData.getListGroup_OL_BaseBenefitADB();
					ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupOL_OL_BaseBenefitOther = lookupValueGroupData.getListGroup_OL_BaseBenefitOther();
					ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupOL_benefitFactorUnit = lookupValueGroupData.getListGroup_benefitFactorUnit();
					ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupOL_baseBenefitFactorScope = lookupValueGroupData.getListGroup_baseBenefitFactorScope();
					ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupOL_BaseBenefitDividend = lookupValueGroupData.getListGroup_OL_BaseBenefitDividend();
					
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
					
					// อุบัติเหตุ ADB และ อุบัติเหตุสาธารณะ PUBLIC_ACC
					for(int i=0; i < datareturn_LookupGroupOL_OL_BaseBenefitADB.size() ; i++) {
						JSONObject json_accident_ADB = new JSONObject();
						json_accident_ADB.put("pass", datareturn_LookupGroupOL_OL_BaseBenefitADB.get(i).getLookup_enum_value());
						json_accident_ADB.put("text", datareturn_LookupGroupOL_OL_BaseBenefitADB.get(i).getLookup_value_name());
						accident_ADB_jsonArray.put(json_accident_ADB);
					}
			
					//--เงินคืนทุกระยะ หน่วย
					for(int i=0; i < datareturn_LookupGroupOL_benefitFactorUnit.size() ; i++) {
						JSONObject json_refund_unit = new JSONObject();
						json_refund_unit.put("pass", datareturn_LookupGroupOL_benefitFactorUnit.get(i).getLookup_enum_value());
						json_refund_unit.put("text", datareturn_LookupGroupOL_benefitFactorUnit.get(i).getLookup_value_name());
						refund_unit_jsonArray.put(json_refund_unit);
					}
					
					//--เงินคืนทุกระยะ ประเภทคำนวณ
					for(int i=0; i < datareturn_LookupGroupOL_baseBenefitFactorScope.size() ; i++) {
						JSONObject json_refund_scope = new JSONObject();
						json_refund_scope.put("pass", datareturn_LookupGroupOL_baseBenefitFactorScope.get(i).getLookup_enum_value());
						json_refund_scope.put("text", datareturn_LookupGroupOL_baseBenefitFactorScope.get(i).getLookup_value_name());
						refund_scope_jsonArray.put(json_refund_scope);
					}
					
					//เงินปันผล - ประเภทเงินปันผล
					for(int i=0; i < datareturn_LookupGroupOL_BaseBenefitDividend.size() ; i++) {
						JSONObject json_benef_dividend = new JSONObject();
						json_benef_dividend.put("pass", datareturn_LookupGroupOL_BaseBenefitDividend.get(i).getLookup_enum_value());
						json_benef_dividend.put("text", datareturn_LookupGroupOL_BaseBenefitDividend.get(i).getLookup_value_name());
						benef_period_jsonArray.put(json_benef_dividend);
					} 
					for(int i=0; i < datareturn_LookupGroupOL_baseBenefitFactorScope.size() ; i++) {
						JSONObject json_benef_scope = new JSONObject();
						json_benef_scope.put("pass", datareturn_LookupGroupOL_baseBenefitFactorScope.get(i).getLookup_enum_value());
						json_benef_scope.put("text", datareturn_LookupGroupOL_baseBenefitFactorScope.get(i).getLookup_value_name());
						cov_benef_scope_jsonArray.put(json_benef_scope);
					} 
					
					//** end pun fixed **//
					for (int i = 0; i < datareturn_datalool_up.size(); i++) {
						if (datareturn_datalool_up.get(i).getLookupCat().getEnum_name().equals("lu_period_unit")) {
							for (int ii = 0; ii < datareturn_datalool_up.get(i).getListLookupValue().size(); ii++) {
								JSONObject json_calendar = new JSONObject();
								json_calendar.put("pass", datareturn_datalool_up.get(i).getListLookupValue().get(ii).getEnum_value());
								json_calendar.put("text",datareturn_datalool_up.get(i).getListLookupValue().get(ii).getName_th());
								die_calendar_jsonArray.put(json_calendar);
							}
						} 
						//unit
						if (datareturn_datalool_up.get(i).getLookupCat().getEnum_name().equals("lu_compare")) {
							for (int ii = 0; ii < datareturn_datalool_up.get(i).getListLookupValue().size(); ii++) {
								JSONObject json_unit = new JSONObject();
								json_unit.put("pass", datareturn_datalool_up.get(i).getListLookupValue().get(ii).getEnum_value());
								json_unit.put("text",datareturn_datalool_up.get(i).getListLookupValue().get(ii).getName_th());
								die_unit_jsonArray.put(json_unit);
							}
						}
						//SA ย้ายไปดึงของปั้น
						if(datareturn_datalool_up.get(i).getLookupCat().getEnum_name().equals("lu_benef_factor")) {
							for (int ii = 0; ii < datareturn_datalool_up.get(i).getListLookupValue().size(); ii++) {
								JSONObject json_sa = new JSONObject();
								json_sa.put("pass", datareturn_datalool_up.get(i).getListLookupValue().get(ii).getEnum_value());
								json_sa.put("text",datareturn_datalool_up.get(i).getListLookupValue().get(ii).getName_th());
								die_sa_jsonArray.put(json_sa);
							}
						}
						
						if(datareturn_datalool_up.get(i).getLookupCat().getEnum_name().equals("lu_limit_amt_type")) {
							for (int ii = 0; ii < datareturn_datalool_up.get(i).getListLookupValue().size(); ii++) {
								JSONObject json_factor = new JSONObject();
								json_factor.put("pass", datareturn_datalool_up.get(i).getListLookupValue().get(ii).getEnum_value());
								json_factor.put("text",datareturn_datalool_up.get(i).getListLookupValue().get(ii).getName_th());
								benef_factor_jsonArray.put(json_factor);
							}
						}
						
						if(datareturn_datalool_up.get(i).getLookupCat().getEnum_name().equals("lu_condition")) {
							for (int ii = 0; ii < datareturn_datalool_up.get(i).getListLookupValue().size(); ii++) {
								JSONObject json_condition = new JSONObject();
								json_condition.put("pass", datareturn_datalool_up.get(i).getListLookupValue().get(ii).getEnum_value());
								json_condition.put("text",datareturn_datalool_up.get(i).getListLookupValue().get(ii).getName_th());
								condition_jsonArray.put(json_condition);
							}
						}
						//เงินคืนทุกระยะ
						if(datareturn_datalool_up.get(i).getLookupCat().getEnum_name().equals("lu_cov_unit_type")) {
							for (int ii = 0; ii < datareturn_datalool_up.get(i).getListLookupValue().size(); ii++) {
								JSONObject json_unit_type = new JSONObject();
								json_unit_type.put("pass", datareturn_datalool_up.get(i).getListLookupValue().get(ii).getEnum_value());
								json_unit_type.put("text",datareturn_datalool_up.get(i).getListLookupValue().get(ii).getName_th());
								unit_type_jsonArray.put(json_unit_type);
							}
						}
						
						//เสียชีวิต Premium
						if(datareturn_datalool_up.get(i).getLookupCat().getEnum_name().equals("lu_benef_factor_premium")) {
							for (int ii = 0; ii < datareturn_datalool_up.get(i).getListLookupValue().size(); ii++) {
								JSONObject json_benefFac_type = new JSONObject();
								json_benefFac_type.put("pass", datareturn_datalool_up.get(i).getListLookupValue().get(ii).getEnum_value());
								json_benefFac_type.put("text",datareturn_datalool_up.get(i).getListLookupValue().get(ii).getName_th());
								benef_factorPremium_jsonArray.put(json_benefFac_type);
							}
						}
						if(datareturn_datalool_up.get(i).getLookupCat().getEnum_name().equals("lu_benef_scope")) {
							for (int ii = 0; ii < datareturn_datalool_up.get(i).getListLookupValue().size(); ii++) {
								JSONObject json_unit_type = new JSONObject();
								json_unit_type.put("pass", datareturn_datalool_up.get(i).getListLookupValue().get(ii).getEnum_value());
								json_unit_type.put("text",datareturn_datalool_up.get(i).getListLookupValue().get(ii).getName_th());
								cov_benef_scope_jsonArray.put(json_unit_type);
							}
						}
						//เงินปันผล FIXME
						if(datareturn_datalool_up.get(i).getLookupCat().getEnum_name().equals("lu_benef_period")) {
							for (int ii = 0; ii < datareturn_datalool_up.get(i).getListLookupValue().size(); ii++) {
								JSONObject json_unit_type = new JSONObject();
								json_unit_type.put("pass", datareturn_datalool_up.get(i).getListLookupValue().get(ii).getEnum_value());
								json_unit_type.put("text",datareturn_datalool_up.get(i).getListLookupValue().get(ii).getName_th());
								benef_period_jsonArray.put(json_unit_type);
							}
						}
						
					}
					///FormulaCatAccesData
					for (int i = 0; i < datareturn_Formula_Lookup.size(); i++) {
						if (datareturn_Formula_Lookup.get(i).getFormulaCat().getFormula_cat_id() == 6) {
							for (int ii = 0 ; ii < datareturn_Formula_Lookup.get(i).getListFormula().size(); ii++) {
								JSONObject json_fomula = new JSONObject();
								json_fomula.put("pass",  datareturn_Formula_Lookup.get(i).getListFormula().get(ii).getFormula_id());
								json_fomula.put("text",  datareturn_Formula_Lookup.get(i).getListFormula().get(ii).getName_th());
								formula_jsonArray.put(json_fomula);
							}
						} 
					}
					//รายการข้อยกเว้นการจ่ายเงินทดแทน
					BasePlanBenefitOLSearchData bad = new BasePlanBenefitOLSearchData();
					ArrayList<Benefit> datareturn_Benefit;
					datareturn_Benefit = bad.searchBenefitิByBnfCatCode();
					JSONArray	benefit_jsonArray	= new JSONArray();
					for (int i = 0; i < datareturn_Benefit.size(); i++) {
						JSONObject json_benefit = new JSONObject();
						json_benefit.put("pass",datareturn_Benefit.get(i).getBnf_code());
						json_benefit.put("text",datareturn_Benefit.get(i).getName_th());
						benefit_jsonArray.put(json_benefit);
					}
					///เสียชีวิต
					JSONArray	die_jsonArray	= new JSONArray();
					JSONObject json_die = new JSONObject();
					json_die.put("die_calendar",die_calendar_jsonArray);
					json_die.put("die_unit",die_unit_jsonArray);
					json_die.put("die_sa",die_sa_jsonArray);
					json_die.put("die_CV_PV", die_CV_PV_jsonArray);
					json_die.put("die_other", die_other_jsonArray);
					json_die.put("accident_ADB", accident_ADB_jsonArray);
					json_die.put("accidentPublic_ACC", accident_ADB_jsonArray);
					json_die.put("condition",condition_jsonArray);
					json_die.put("exception",benefit_jsonArray);
					json_die.put("die_premium", benef_factorPremium_jsonArray);
					die_jsonArray.put(json_die);
					//เงินคืนทุกระยะ
					JSONArray	refund_jsonArray	= new JSONArray();
					JSONObject json_refund			= new JSONObject();
					json_refund.put("benef_unit",refund_unit_jsonArray);
					json_refund.put("benef_factor",benef_factor_jsonArray);
					json_refund.put("benef_scope",refund_scope_jsonArray);
					refund_jsonArray.put(json_refund);
					///เงินปันผล
					////////////////
					JSONArray	look_dividend_jsonArray		= new JSONArray();	
					SubCatData scd = new SubCatData();
					ArrayList<String[]> listDividend 	= new ArrayList<>();//38
					listDividend						= scd.searchdividendOL();
					////////////////////////////////////////////////////////////
					if (listDividend.size() != 0) {
						for (int i = 0; i < listDividend.size(); i++) {
							String text			= "";
							String layout 		= "";
							String sub_rate_cat = "";
							String rate_cat_id	= "";
							String[] listSubCat_Lv2 = listDividend.get(i);
							JSONArray arr_layout_jsonArray	= new JSONArray();
							JSONObject arr_layout_JSONObject = new JSONObject();
							for (int ii = 0; ii < listSubCat_Lv2.length; ii++) {
								JSONObject json_tb_Insurance_premium = new JSONObject();
								if (ii == 0) {
									layout 			= listSubCat_Lv2[ii];
									json_tb_Insurance_premium.put("layout",layout);
								}else if (ii == 1) {
									sub_rate_cat 			= listSubCat_Lv2[ii];	
									json_tb_Insurance_premium.put("sub_rate_cat",sub_rate_cat);
								}else if (ii == 2) {
									text 	= listSubCat_Lv2[ii];
									json_tb_Insurance_premium.put("text",text);
								}else if (ii == 3) {
									rate_cat_id 	= listSubCat_Lv2[ii];
									json_tb_Insurance_premium.put("rate_cat_id",rate_cat_id);
								}
								arr_layout_jsonArray.put(json_tb_Insurance_premium);
							}
							arr_layout_JSONObject.put("pattern", arr_layout_jsonArray);
							look_dividend_jsonArray.put(arr_layout_JSONObject);
						}
					}
					////////////////////////////////////////////////////////////
					
					JSONArray	dividend_jsonArray		= new JSONArray();
					JSONObject json_dividend			= new JSONObject();
					json_dividend.put("filelookup_dividend",look_dividend_jsonArray);
					json_dividend.put("benef_period",benef_period_jsonArray);
					json_dividend.put("cov_benef_scope",cov_benef_scope_jsonArray);
					json_dividend.put("formula",formula_jsonArray);
					dividend_jsonArray.put(json_dividend);
					
					
					//Total permanent disability
					JSONArray	permanent_disability_jsonArray	= new JSONArray();
					for (int i = 0; i < datareturn.size(); i++) {
						JSONObject json_permanent_disability = new JSONObject();
						json_permanent_disability.put("pass", datareturn.get(i).getBnf_code());
						json_permanent_disability.put("text", datareturn.get(i).getName_th());
						permanent_disability_jsonArray.put(json_permanent_disability);
					}
					JSONArray	benefits_jsonArray	= new JSONArray();
					JSONObject json_pbenefits_ = new JSONObject();
					json_pbenefits_.put("die",die_jsonArray);
					json_pbenefits_.put("permanent_disability",permanent_disability_jsonArray);
					json_pbenefits_.put("refund",refund_jsonArray);
					json_pbenefits_.put("dividend", dividend_jsonArray);
					benefits_jsonArray.put(json_pbenefits_);
					responsejson.put("Tab_Benefits_BasePlan",benefits_jsonArray);
////////////////////////////					
					JSONArray	unit_jsonArray	= new JSONArray();
					JSONArray	unitFactor_jsonArray	= new JSONArray();
					JSONArray	frequency_jsonArray	= new JSONArray();
					JSONArray	factorUnit_jsonArray	= new JSONArray();
					JSONArray	factorScope_jsonArray	= new JSONArray();
					
					JSONArray	die_calendar_jsonArray1		= new JSONArray();
					JSONArray	die_unit_jsonArray1			= new JSONArray();
					JSONArray	die_sa_jsonArray1			= new JSONArray();
					JSONArray	die_CV_PV_jsonArray1			= new JSONArray();
					JSONArray	die_other_jsonArray1			= new JSONArray();
					//เงินคืนทุกระยะ
					JSONArray	unit_type_jsonArray1			= new JSONArray();
					JSONArray	benef_factor_jsonArray1		= new JSONArray();
					JSONArray	benef_factorPremium_jsonArray1		= new JSONArray();
					ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupCL_Rider_Benefit_Factor = lookupValueGroupData.getListGroup_CL_riderBenefitFactor();
					ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupCL_Rider_Benefit_Scope = lookupValueGroupData.getListGroup_CL_riderBenefitScope();
					ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupCL_Rider_Benefit_Unit = lookupValueGroupData.getListGroup_CL_riderBenefitUnit();
					ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupCL_Rider_Benefit_Factor_Unit = lookupValueGroupData.getListGroup_CL_riderBenefitFactorUnit();
					ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupCL_Rider_Benefit_Factor_Scope = lookupValueGroupData.getListGroup_CL_riderBenefitFactorScope();
					
					ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupOL_OL_BaseBenefitSA1 = lookupValueGroupData.getListGroup_OL_baseBenefitSA();
					ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupOL_OL_BaseBenefitCVPV1 = lookupValueGroupData.getListGroup_OL_baseBenefitCVPV();
					ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupOL_OL_BaseBenefitOther1 = lookupValueGroupData.getListGroup_OL_BaseBenefitOther();
					// Death_SA
					for(int i=0 ; i < datareturn_LookupGroupOL_OL_BaseBenefitSA1.size() ; i++) {
						JSONObject json_deathSA = new JSONObject();
						json_deathSA.put("pass", datareturn_LookupGroupOL_OL_BaseBenefitSA1.get(i).getLookup_enum_value());
						json_deathSA.put("text", datareturn_LookupGroupOL_OL_BaseBenefitSA1.get(i).getLookup_value_name());
						die_sa_jsonArray1.put(json_deathSA);
					}
					
					// Death_CV/PV
					for(int i=0 ; i < datareturn_LookupGroupOL_OL_BaseBenefitCVPV1.size() ; i++) {
						JSONObject json_death_CVPV = new JSONObject();
						json_death_CVPV.put("pass", datareturn_LookupGroupOL_OL_BaseBenefitCVPV1.get(i).getLookup_enum_value());
						json_death_CVPV.put("text", datareturn_LookupGroupOL_OL_BaseBenefitCVPV1.get(i).getLookup_value_name());
						die_CV_PV_jsonArray1.put(json_death_CVPV);
					}
					
					// Death_Other
					for(int i=0 ; i < datareturn_LookupGroupOL_OL_BaseBenefitOther1.size() ; i++) {
						JSONObject json_death_other = new JSONObject();
						json_death_other.put("pass", datareturn_LookupGroupOL_OL_BaseBenefitOther1.get(i).getLookup_enum_value());
						json_death_other.put("text", datareturn_LookupGroupOL_OL_BaseBenefitOther1.get(i).getLookup_value_name());
						die_other_jsonArray1.put(json_death_other);
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
								die_calendar_jsonArray1.put(json_calendar);
							}
						} 
						//unit
						if (catValueAcessData_arr.get(i).getLookupCat().getEnum_name().equals("lu_compare")) {
							for (int ii = 0; ii < catValueAcessData_arr.get(i).getListLookupValue().size(); ii++) {
								JSONObject json_unit = new JSONObject();
								json_unit.put("pass", catValueAcessData_arr.get(i).getListLookupValue().get(ii).getEnum_value());
								json_unit.put("text",catValueAcessData_arr.get(i).getListLookupValue().get(ii).getName_th());
								die_unit_jsonArray1.put(json_unit);
							}
						}
						//SA ย้ายไปดึงของปั้น
						
						if(catValueAcessData_arr.get(i).getLookupCat().getEnum_name().equals("lu_limit_amt_type")) {
							for (int ii = 0; ii < catValueAcessData_arr.get(i).getListLookupValue().size(); ii++) {
								JSONObject json_factor = new JSONObject();
								json_factor.put("pass", catValueAcessData_arr.get(i).getListLookupValue().get(ii).getEnum_value());
								json_factor.put("text",catValueAcessData_arr.get(i).getListLookupValue().get(ii).getName_th());
								benef_factor_jsonArray1.put(json_factor);
							}
						}
						
						//เงินคืนทุกระยะ
						if(catValueAcessData_arr.get(i).getLookupCat().getEnum_name().equals("lu_cov_unit_type")) {
							for (int ii = 0; ii < catValueAcessData_arr.get(i).getListLookupValue().size(); ii++) {
								JSONObject json_unit_type = new JSONObject();
								json_unit_type.put("pass", catValueAcessData_arr.get(i).getListLookupValue().get(ii).getEnum_value());
								json_unit_type.put("text",catValueAcessData_arr.get(i).getListLookupValue().get(ii).getName_th());
								unit_type_jsonArray1.put(json_unit_type);
							}
						}
						//เสียชีวิต Premium
						if(catValueAcessData_arr.get(i).getLookupCat().getEnum_name().equals("lu_benef_factor_premium")) {
							for (int ii = 0; ii < catValueAcessData_arr.get(i).getListLookupValue().size(); ii++) {
								JSONObject json_benefFac_type = new JSONObject();
								json_benefFac_type.put("pass", catValueAcessData_arr.get(i).getListLookupValue().get(ii).getEnum_value());
								json_benefFac_type.put("text",catValueAcessData_arr.get(i).getListLookupValue().get(ii).getName_th());
								benef_factorPremium_jsonArray1.put(json_benefFac_type);
							}
						}
					}
					///เสียชีวิต
					JSONArray	die_jsonArray1	= new JSONArray();
					JSONObject json_die1 = new JSONObject();
					json_die1.put("die_calendar",die_calendar_jsonArray1);
					json_die1.put("die_unit",die_unit_jsonArray1);
					json_die1.put("die_sa",die_sa_jsonArray1);
					json_die1.put("die_CV_PV", die_CV_PV_jsonArray1);
					json_die1.put("die_other", die_other_jsonArray1);
					//json_die.put("exception",benefit_jsonArray);
					json_die1.put("die_premium", benef_factorPremium_jsonArray1);
					die_jsonArray1.put(json_die1);
					
					JSONArray  select_value_jsonArray	= new JSONArray();
					JSONObject json_select_value = new JSONObject();
					json_select_value.put("unit",unit_jsonArray);
					json_select_value.put("frequency",frequency_jsonArray);
					json_select_value.put("unitFactor",unitFactor_jsonArray);
					json_select_value.put("factor_unit",factorUnit_jsonArray);
					json_select_value.put("factor_scope",factorScope_jsonArray);
					json_select_value.put("die",json_die1);
					select_value_jsonArray.put(json_select_value);
					responsejson.put("Tab_Benefits_Rider",select_value_jsonArray);
				}
				responseText = responsejson.toString();
				//Tab ขออนุมัติ
				/*if (menu_OL_6.equals("menu_CL_6")) {
					//System.out.println("//Tab ขออนุมัติ");
				}*/
				/*if (menu_OL_7.equals("menu_CL_7")) {
					//System.out.println("//Tab ขออนุมัติ");
				}*/
				System.out.println("LookupProductOL//////"+responseText);
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
			}else if(method.equals("getAllBasePlan_OL")) {
				Product product = null;
				ProductData pd = new ProductData();
				String pass_Insurance = request.getParameter("pCode");
				
				product = pd.searchProduct(pass_Insurance);
				 	
				ArrayList<Coverage> arr_Coverage = new ArrayList<>();
				ProductBasicinfo pbf = new ProductBasicinfo(product);
				arr_Coverage = pbf.searchBasePlan();
				JSONArray	basePlanOL_data_jsonArray	= new JSONArray();
				for (int i = 0 ; i < arr_Coverage.size(); i++) {
						JSONObject basePlanOL_data_json = new JSONObject();
						basePlanOL_data_json.put("insuranceNo", arr_Coverage.get(i).getCov_code());
						basePlanOL_data_json.put("nameTH", arr_Coverage.get(i).getName_th());
						basePlanOL_data_json.put("cov_cat_id", arr_Coverage.get(i).getCov_cat_id());
						basePlanOL_data_jsonArray.put(basePlanOL_data_json);
					}
				responsejson.put("BasePlanOL_Data", basePlanOL_data_jsonArray);
				responseText = responsejson.toString();
			}else if(method.equals("getAllRider_OL")) {
				String prd_code = request.getParameter("rCode");
				ConstantValues.PRD_CODE = prd_code;
				ListProductBaseOLData listProductBaseOLData = new ListProductBaseOLData();
				ArrayList<Product> listProduct = listProductBaseOLData.searchListProductRiderOLNotBundle();
				JSONArray	coverageRider_data_jsonArray	= new JSONArray();
				for (Product product : listProduct) {
					JSONObject coverageRider_data_json = new JSONObject();
					coverageRider_data_json.put("insuranceNo", product.getCov_code());
					coverageRider_data_json.put("nameTH", product.getName_th());
					coverageRider_data_json.put("cov_cat_id", product.getCov_cat_id());
					coverageRider_data_json.put("prd_rider_code", product.getPrd_code());
					coverageRider_data_json.put("biz_code", product.getCore_biz_prd_code());
					coverageRider_data_jsonArray.put(coverageRider_data_json);
				}
				
				/*for (int i = 0 ; i < listCoverageRider.size(); i++) {
						JSONObject coverageRider_data_json = new JSONObject();
						Coverage coverage 	= 	listCoverageRider.get(i).getCoverage();
						Product product		= 	listCoverageRider.get(i).getProduct();
						coverageRider_data_json.put("insuranceNo", product.getCov_code());
						coverageRider_data_json.put("nameTH", product.getName_th());
						coverageRider_data_json.put("cov_cat_id", product.getCov_cat_id());
						//coverageRider_data_json.put("insuranceNo", coverage.getCov_code());
						//coverageRider_data_json.put("nameTH", coverage.getName_th());
						//coverageRider_data_json.put("cov_cat_id", coverage.getCov_cat_id());
						coverageRider_data_json.put("prd_rider_code", product.getPrd_code());
						coverageRider_data_json.put("biz_code", product.getCore_biz_prd_code());
						coverageRider_data_jsonArray.put(coverageRider_data_json);
					}*/
				responsejson.put("Rider_OL_Data", coverageRider_data_jsonArray);
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
		
		}//Benz get lookup Clone 20-11-2019
		else if (method.equals("create_ProductOL_Clone")) {
			System.out.println("===============create_ProductOL_Clone=============/");
						String prd_code				= request.getParameter("prd_code");
						String groupName			= request.getParameter("groupName");
						ConstantValues.GROUP_NAME 	= groupName;
						
						String menu_OL_1 		= request.getParameter("menu_OL_1");
						String menu_OL_2 		= request.getParameter("menu_OL_2");
						String menu_OL_3 		= request.getParameter("menu_OL_3");
						String menu_OL_4 		= request.getParameter("menu_OL_4");
						String menu_OL_5 		= request.getParameter("menu_OL_5");
						String menu_OL_6 		= request.getParameter("menu_OL_6");
						String menu_OL_7 		= request.getParameter("menu_OL_7");
						String main_contracttype 	= request.getParameter("main_contracttype");
						//	
						Product getProduct 		= new Product();
						ProductCloneData pcd 	= new ProductCloneData();
						getProduct	= pcd.cloneProduct(prd_code);
						String passInsurance = "";
						if (main_contracttype.equals("2")) {
							 passInsurance = getProduct.getPrd_code();
							 ConstantValues.PRD_CODE = passInsurance;
							///Step 1//////////////////////Benz///11-07-2019///////////////////////////////////
							/*dvs.doAppPage(main_contract3, plan_type2);	
							
							///Step 2//////////////////////////////////////////////////////////////////	
							  ProductCreate = new ProductCreate(main_contract1, main_contract2, main_contract3,userId);
							 // po = ProductCreate.getProduct();
							  passInsurance = ProductCreate.getProduct().getPrd_code();
							  ConstantValues.PRD_CODE = passInsurance;*/
							///Step 3//////////////////////////////////////////////////////////////////	
							DataValuesSeparate dvs = new DataValuesSeparate();
							  String[] appPage  		= new String[7]; 
								
									if (menu_OL_1.equals("true")) {
										appPage[0] 		= "1";
									}else {
										appPage[0] 		= "";
									}
									if (menu_OL_2.equals("true")) {
										appPage[1] 		= "2";
									}else {
										appPage[1] 		= "";
									}
									if (menu_OL_3.equals("true")) {
										appPage[2] 		= "3";
									}else {
										appPage[2] 		= "";
									}
									if (menu_OL_4.equals("true")) {
										appPage[3] 		= "4";
									}else {
										appPage[3] 		= "";
									}
									if (menu_OL_5.equals("true")) {
										appPage[4] 		= "5";
									}else {
										appPage[4] 		= "";
									}
									if (menu_OL_6.equals("true")) {
										appPage[5] 		= "6";
									}else {
										appPage[5] 		= "";
									}
									if (menu_OL_7.equals("true")) {
										appPage[6] 		= "7";
									}else {
										appPage[6] 		= "";
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
						}
						
						MainInsureDetailCreateProductServiceOL mdcs = new MainInsureDetailCreateProductServiceOL();
						int tabmaim = 1;
						 ArrayList<LookupCatAccessData> datareturn_LookupCat;
						 datareturn_LookupCat = mdcs.BasicInfo_lookup(tabmaim);
						 LookupValueGroupData lookupValueGroupData = new LookupValueGroupData();
							
						//Tab ข้อมูลทั่วไป Basic Information
						if (menu_OL_1.equals("true")) {
							
							 ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupOL =  lookupValueGroupData.getListGroup_OL();
							 ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupOL_P_FYP = lookupValueGroupData.getListGroup_CL_P_FYP();
							 ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupOL_P_RYP = lookupValueGroupData.getListGroup_CL_P_RYP();
							 ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupOL_P = lookupValueGroupData.getListGroup_CL_P();
							 ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupOL_REINS_OPT = lookupValueGroupData.getListGroup_OL_Reins_OPT();
							 
							//*Loan Type
							JSONArray	loan_Type_jsonArray	= new JSONArray();
							//Distribution Channel
							JSONArray	distribution_Channel_jsonArray	= new JSONArray();
							//mode
							JSONArray	mode_jsonArray	= new JSONArray();
							JSONArray	unit_age_coordinates_jsonArray	= new JSONArray();
							//parProduct
							JSONArray parProduct_jsonArray = new JSONArray();
							//fightingProduct
							JSONArray fightingProduct_jsonArray = new JSONArray();
							
							JSONObject json_rateLayoutTax 					= new JSONObject();
							JSONArray	tb_layoutdet1_jsonArray 			= new JSONArray();
							JSONArray	tb_layoutdet2_jsonArray 			= new JSONArray();
							JSONObject	tb_layoutdet_JSONObject 			= new JSONObject();
							
							MainInsureDetailCreate mdc 						= new MainInsureDetailCreate ();
							ArrayList<RateCatAccessData> 					datareturnTax;
							String[] str_arr_Tax 							= new String[2]; 
							
							/*ประเภทสัญญาเพิ่มเติม */
							JSONArray	additional_Contract_Type_jsonArray	= new JSONArray();
							for (int i = 0; i < datareturn_LookupGroupOL.size(); i++) {
								JSONObject json_additional_Contract_Type = new JSONObject();
								json_additional_Contract_Type.put("pass",  datareturn_LookupGroupOL.get(i).getLookup_enum_value());
								json_additional_Contract_Type.put("text",  datareturn_LookupGroupOL.get(i).getLookup_value_name());
								additional_Contract_Type_jsonArray.put(json_additional_Contract_Type);
							}
							/*การชำระเบี้ยด้วยบัตรเครดิต ปีแรก*/
							JSONArray	CreditCards_firstYear_jsonArray	= new JSONArray();
							for(int i = 0 ; i < datareturn_LookupGroupOL_P_FYP.size(); i++)
							{
								JSONObject json_CreditCards = new JSONObject();
								json_CreditCards.put("pass", datareturn_LookupGroupOL_P_FYP.get(i).getLookup_enum_value());
								json_CreditCards.put("text", datareturn_LookupGroupOL_P_FYP.get(i).getLookup_value_name());
								CreditCards_firstYear_jsonArray.put(json_CreditCards);
							}
							/*การชำระเบี้ยด้วยบัตรเครดิต ปีต่อไป*/
							JSONArray	CreditCards_toYear_jsonArray	= new JSONArray();
							for(int i = 0 ; i < datareturn_LookupGroupOL_P_RYP.size(); i++)
							{
								JSONObject json_CreditCards = new JSONObject();
								json_CreditCards.put("pass", datareturn_LookupGroupOL_P_RYP.get(i).getLookup_enum_value());
								json_CreditCards.put("text", datareturn_LookupGroupOL_P_RYP.get(i).getLookup_value_name());
								CreditCards_toYear_jsonArray.put(json_CreditCards);
							}
							/*Reinsurance Group เปลี่ยนชื่อ underwrite Type*/
							JSONArray	reinsurance_Group_jsonArray	= new JSONArray();
							for(int i = 0 ; i < datareturn_LookupGroupOL_P.size(); i++)
							{
								JSONObject json_reinsurance_Group = new JSONObject();
								json_reinsurance_Group.put("pass", datareturn_LookupGroupOL_P.get(i).getLookup_enum_value());
								json_reinsurance_Group.put("text", datareturn_LookupGroupOL_P.get(i).getLookup_value_name());
								reinsurance_Group_jsonArray.put(json_reinsurance_Group);
							}
							/*Reinsurance Opt */
							JSONArray	reinsurance_opt_jsonArray	= new JSONArray();
							for(int i = 0 ; i < datareturn_LookupGroupOL_REINS_OPT.size(); i++)
							{
								JSONObject json_reinsuranceOpt_jsonObj = new JSONObject();
								json_reinsuranceOpt_jsonObj.put("pass", datareturn_LookupGroupOL_REINS_OPT.get(i).getLookup_enum_value());
								json_reinsuranceOpt_jsonObj.put("text", datareturn_LookupGroupOL_REINS_OPT.get(i).getLookup_value_name());
								reinsurance_opt_jsonArray.put(json_reinsuranceOpt_jsonObj);
							}
							
							/*ตัวแยก Lookup อีกตัว*/
							for (int i = 0 ; i < datareturn_LookupCat.size(); i++) {
								//Loan Type
								if (datareturn_LookupCat.get(i).getLookupCat().getEnum_name().equals("lu_loan_type")) {
									for (int ii = 0; ii < datareturn_LookupCat.get(i).getListLookupValue().size(); ii++) {
										JSONObject json_loan_Type = new JSONObject();
										json_loan_Type.put("pass",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getEnum_value());
										json_loan_Type.put("text",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getName_th());
										loan_Type_jsonArray.put(json_loan_Type);
									}
								}
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
								//พิกัดอายุ -หน่วย
								if (datareturn_LookupCat.get(i).getLookupCat().getEnum_name().equals("lu_period_unit")) {
									for (int ii = 0; ii < datareturn_LookupCat.get(i).getListLookupValue().size(); ii++) {
										JSONObject unit_age_coordinates = new JSONObject();
										unit_age_coordinates.put("pass",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getEnum_value());
										unit_age_coordinates.put("text",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getName_th());
										unit_age_coordinates_jsonArray.put(unit_age_coordinates);
									}
								}
								//Par-Product
								if (datareturn_LookupCat.get(i).getLookupCat().getEnum_name().equals("lu_par_product")) {
									for (int ii = 0; ii < datareturn_LookupCat.get(i).getListLookupValue().size(); ii++) {
										JSONObject parProduct_jsonObj = new JSONObject();
										parProduct_jsonObj.put("pass",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getEnum_value());
										parProduct_jsonObj.put("text",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getName_th());
										parProduct_jsonArray.put(parProduct_jsonObj);
									}
								}
								// Fighting_Product
								if (datareturn_LookupCat.get(i).getLookupCat().getEnum_name().equals("lu_fighting_product")) {
									for (int ii = 0; ii < datareturn_LookupCat.get(i).getListLookupValue().size(); ii++) {
										JSONObject fightingProduct_jsonObj = new JSONObject();
										fightingProduct_jsonObj.put("pass",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getEnum_value());
										fightingProduct_jsonObj.put("text",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getName_th());
										fightingProduct_jsonArray.put(fightingProduct_jsonObj);
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
									JSONObject json_tb_nar 			= new JSONObject();
									JSONArray tb_nar_jsonArray2 	= new JSONArray();
									tb_layoutdet2_jsonArray 		= new JSONArray();
									json_tb_nar.put("text", rate_sub_cat_arr.get(ii).getName_th());
									json_tb_nar.put("pass", rate_sub_cat_arr.get(ii).getRate_cat_id());
									json_tb_nar.put("sub_rate_cat", rate_sub_cat_arr.get(ii).getSub_cat_id());
									/////////////////Benz 29-11-2019 เพิ่ม การดึง lookup เพิ่มเติม RateLaoutDet
									 BigDecimal bd_rate_cat_id 	= new BigDecimal(rate_sub_cat_arr.get(ii).getRate_cat_id());
									 String str_rate_cat_id 	= (bd_rate_cat_id).toString();
									str_arr_Tax[0]		 		= str_rate_cat_id;
									datareturnTax = mdc.searchTax(str_arr_Tax);
										if (datareturnTax.size() > 0) {
											for (int j = 0; j < datareturnTax.size(); j++) {
												for (int jj = 0; jj < datareturnTax.get(j).getListRateLayout().size(); jj++) {
													tb_layoutdet1_jsonArray 	= new JSONArray(); 
													tb_layoutdet_JSONObject 	= new JSONObject();
													for (int jjj = 0; jjj < datareturnTax.get(j).getListRateLayout().get(jj).getListRateLayoutDet().size(); jjj++) {
														json_rateLayoutTax = new JSONObject();
														json_rateLayoutTax.put("rate_layout_id",datareturnTax.get(j).getListRateLayout().get(jj).getListRateLayoutDet().get(jjj).getRate_layout_id());
														json_rateLayoutTax.put("column_name",datareturnTax.get(j).getListRateLayout().get(jj).getListRateLayoutDet().get(jjj).getColumn_name());
														json_rateLayoutTax.put("column_len",datareturnTax.get(j).getListRateLayout().get(jj).getListRateLayoutDet().get(jjj).getColumn_len());
														tb_layoutdet1_jsonArray.put(json_rateLayoutTax);
													}
													tb_layoutdet_JSONObject.put("rate_layout_det",tb_layoutdet1_jsonArray);
													tb_layoutdet2_jsonArray.put(tb_layoutdet_JSONObject);
												};
											}
										}
									///////////////////											
										json_tb_nar.put("ratelayoutdet", tb_layoutdet2_jsonArray);
									
									for (int iii = 0 ; iii < rateLayout_arr.size(); iii++) {
										JSONObject json_tb_nar2 = new JSONObject();
										if (rate_sub_cat_arr.get(ii).getRate_cat_id() == rateLayout_arr.get(iii).getRateLayout().getRate_cat_id() && rate_sub_cat_arr.get(ii).getSub_cat_id() == rateLayout_arr.get(iii).getRateLayout().getSub_cat_id()) {
											json_tb_nar2.put("file_format", rateLayout_arr.get(iii).getRateLayout().getFile_name_pattern());
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
									JSONObject json_tb_pm 			= new JSONObject();
									JSONArray tb_pm_jsonArray2 		= new JSONArray();
									tb_layoutdet2_jsonArray 		= new JSONArray();
									json_tb_pm.put("text", rate_sub_cat_arr.get(ii).getName_th());
									json_tb_pm.put("pass", rate_sub_cat_arr.get(ii).getRate_cat_id());
									json_tb_pm.put("sub_rate_cat", rate_sub_cat_arr.get(ii).getSub_cat_id());
									/////////////////Benz 29-11-2019 เพิ่ม การดึง lookup เพิ่มเติม RateLaoutDet
									 BigDecimal bd_rate_cat_id 	= new BigDecimal(rate_sub_cat_arr.get(ii).getRate_cat_id());
									 String str_rate_cat_id 	= (bd_rate_cat_id).toString();
									str_arr_Tax[0]		 		= str_rate_cat_id;
									datareturnTax = mdc.searchTax(str_arr_Tax);
										if (datareturnTax.size() > 0) {
											for (int j = 0; j < datareturnTax.size(); j++) {
												for (int jj = 0; jj < datareturnTax.get(j).getListRateLayout().size(); jj++) {
													tb_layoutdet1_jsonArray 	= new JSONArray(); 
													tb_layoutdet_JSONObject 	= new JSONObject();
													for (int jjj = 0; jjj < datareturnTax.get(j).getListRateLayout().get(jj).getListRateLayoutDet().size(); jjj++) {
														json_rateLayoutTax = new JSONObject();
														json_rateLayoutTax.put("rate_layout_id",datareturnTax.get(j).getListRateLayout().get(jj).getListRateLayoutDet().get(jjj).getRate_layout_id());
														json_rateLayoutTax.put("column_name",datareturnTax.get(j).getListRateLayout().get(jj).getListRateLayoutDet().get(jjj).getColumn_name());
														json_rateLayoutTax.put("column_len",datareturnTax.get(j).getListRateLayout().get(jj).getListRateLayoutDet().get(jjj).getColumn_len());
														tb_layoutdet1_jsonArray.put(json_rateLayoutTax);
													}
													tb_layoutdet_JSONObject.put("rate_layout_det",tb_layoutdet1_jsonArray);
													tb_layoutdet2_jsonArray.put(tb_layoutdet_JSONObject);
												};
											}
										}
									///////////////////											
										json_tb_pm.put("ratelayoutdet", tb_layoutdet2_jsonArray);
									
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
							json_basic_Info.put("reinsurance_opt",reinsurance_opt_jsonArray);
							json_basic_Info.put("distribution_Channel",distribution_Channel_jsonArray);
							json_basic_Info.put("sale_Channel", sales_Channel_jsonArray);
							json_basic_Info.put("parProduct", parProduct_jsonArray);
							json_basic_Info.put("fightingProduct", fightingProduct_jsonArray);
							
							json_basic_Info.put("NAR", nar_jsonArray);
							json_basic_Info.put("PM_Rate", pm_rate_jsonArray);
							
							basic_Info_jsonArray.put(json_basic_Info);
							//
							responsejson.put("Tab_Basic_Information",basic_Info_jsonArray);
							responseText = responsejson.toString();
						}
						//Tab การคำนวนเบี้ยประกัน
						if (menu_OL_2.equals("true")) {
							int tab = 2;
							//หน่วย
							ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupCL_P_Benefit_Unit_Sum =  lookupValueGroupData.getListGroup_CL_P_benefitUnitSum();
							// ของ
							ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupCL_P_Benefit_Factor_Sum =  lookupValueGroupData.getListGroup_CL_P_benefitFactorSum();
							// ของต่ำ
							ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupCL_P_Benefit_Factor_Sum_Min =  lookupValueGroupData.getListGroup_CL_P_benefitFactorSumMin();
							
							//Collect_Meth
							ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupOL_collect_meth = lookupValueGroupData.getListGroupCollectMeth_OL();
							
							//Age Type
							//Unit
							JSONArray	unit_jsonArray	= new JSONArray();
							//OF
							JSONArray	of_jsonArray	= new JSONArray();
							//OF Min
							JSONArray	ofMin_jsonArray	= new JSONArray();
							//FYP
							JSONArray	collect_meth_jsonArray 	= new JSONArray(); 
							
							
							for(int i = 0 ; i < datareturn_LookupGroupCL_P_Benefit_Unit_Sum.size() ; i++) {
								JSONObject json_unit = new JSONObject();
								json_unit.put("pass",  datareturn_LookupGroupCL_P_Benefit_Unit_Sum.get(i).getLookup_enum_value());
								json_unit.put("text",  datareturn_LookupGroupCL_P_Benefit_Unit_Sum.get(i).getLookup_value_name());
								unit_jsonArray.put(json_unit);
							}
							for(int i = 0 ; i < datareturn_LookupGroupCL_P_Benefit_Factor_Sum.size() ; i++) {
								JSONObject json_of = new JSONObject();
								json_of.put("pass",  datareturn_LookupGroupCL_P_Benefit_Factor_Sum.get(i).getLookup_enum_value());
								json_of.put("text",  datareturn_LookupGroupCL_P_Benefit_Factor_Sum.get(i).getLookup_value_name());
								of_jsonArray.put(json_of);
							}
							for(int i = 0 ; i < datareturn_LookupGroupCL_P_Benefit_Factor_Sum_Min.size() ; i++) {
								JSONObject json_ofMin = new JSONObject();
								json_ofMin.put("pass",  datareturn_LookupGroupCL_P_Benefit_Factor_Sum_Min.get(i).getLookup_enum_value());
								json_ofMin.put("text",  datareturn_LookupGroupCL_P_Benefit_Factor_Sum_Min.get(i).getLookup_value_name());
								ofMin_jsonArray.put(json_ofMin);
							}
							
							//FYP
							for(int i = 0; i <datareturn_LookupGroupOL_collect_meth.size() ; i++) {
								JSONObject json_collect_meth = new JSONObject();
								json_collect_meth.put("pass", datareturn_LookupGroupOL_collect_meth.get(i).getLookup_enum_value());
								json_collect_meth.put("text", datareturn_LookupGroupOL_collect_meth.get(i).getLookup_value_name());
								collect_meth_jsonArray.put(json_collect_meth);
							}
							
							ArrayList<FormulaCatAccesData> datareturn_FormulaCatAccesData;
							MainInsureDetailCreateProduct mdc 	= new MainInsureDetailCreateProduct();
							 mdc.createDetail(tab);
							 datareturn_FormulaCatAccesData 	= mdc.getListFormulaCatAccesData();
							 JSONArray	SA_P_jsonArray			= new JSONArray();
							 JSONArray	SMI_jsonArray			= new JSONArray();
							 JSONArray	MI_jsonArray			= new JSONArray();
							 JSONArray	formulaCal_jsonArray	= new JSONArray();
							
							 for (int i = 0; i < datareturn_FormulaCatAccesData.size(); i++) {
								//ทุนในการคำนวณเบี้ย (SA_P)
								 if (datareturn_FormulaCatAccesData.get(i).getFormulaCat().getFormula_cat_id() == 1) {
									 for (int ii = 0; ii < datareturn_FormulaCatAccesData.get(i).getListFormula().size(); ii++) {
												JSONObject json_SA_P = new JSONObject();
												json_SA_P.put("pass", datareturn_FormulaCatAccesData.get(i).getListFormula().get(ii).getFormula_id());
												json_SA_P.put("text", datareturn_FormulaCatAccesData.get(i).getListFormula().get(ii).getName_th());
												SA_P_jsonArray.put(json_SA_P);
									 }
								 }
								//วิธีการคำนวณ SMI
								 if (datareturn_FormulaCatAccesData.get(i).getFormulaCat().getFormula_cat_id() == 2) {
									 for (int ii = 0; ii < datareturn_FormulaCatAccesData.get(i).getListFormula().size(); ii++) {
												JSONObject json_SMI = new JSONObject();
												json_SMI.put("pass", datareturn_FormulaCatAccesData.get(i).getListFormula().get(ii).getFormula_id());
												json_SMI.put("text", datareturn_FormulaCatAccesData.get(i).getListFormula().get(ii).getName_th());
												SMI_jsonArray.put(json_SMI);
									 }
								 }
								//วิธีการคำนวณ MI
								 if (datareturn_FormulaCatAccesData.get(i).getFormulaCat().getFormula_cat_id() == 3) {
									 for (int ii = 0; ii < datareturn_FormulaCatAccesData.get(i).getListFormula().size(); ii++) {
												JSONObject json_MI = new JSONObject();
												json_MI.put("pass", datareturn_FormulaCatAccesData.get(i).getListFormula().get(ii).getFormula_id());
												json_MI.put("text", datareturn_FormulaCatAccesData.get(i).getListFormula().get(ii).getName_th());
												MI_jsonArray.put(json_MI);
									 }
								 }
								//สูตรการคำนวณเบี้ย
								 if (datareturn_FormulaCatAccesData.get(i).getFormulaCat().getFormula_cat_id() == 4) {
									 for (int ii = 0; ii < datareturn_FormulaCatAccesData.get(i).getListFormula().size(); ii++) {
												JSONObject json_formulaCal = new JSONObject();
												json_formulaCal.put("pass", datareturn_FormulaCatAccesData.get(i).getListFormula().get(ii).getFormula_id());
												json_formulaCal.put("text", datareturn_FormulaCatAccesData.get(i).getListFormula().get(ii).getName_th());
												formulaCal_jsonArray.put(json_formulaCal);
									 }
								 }
								 
							 }
							 
							 
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
							//Age Specific
							
							//cal_insurance.put("OF", of_jsonArray);
							//Unit
							cal_insurance.put("Fix_cov_unit", unit_jsonArray);
							//OF
							cal_insurance.put("Fix_cov_factor", of_jsonArray);
							//OF MIN
							cal_insurance.put("Fix_cov_factorMin", ofMin_jsonArray);
							//SA_P
							cal_insurance.put("FormulaCatId1", SA_P_jsonArray);
							//SMI
							cal_insurance.put("FormulaCatId2", SMI_jsonArray);
							//สูตรการคำนวณเบี้ย
							cal_insurance.put("FormulaCatId4", formulaCal_jsonArray);
							//MI
							cal_insurance.put("FormulaCatId3", MI_jsonArray);
							
							// สูตร Premium Rate
							cal_insurance.put("FormulaCatId7", premiumRate_jsonArray);
							// สูตร Extra Rate
							cal_insurance.put("FormulaCatId8", extraRate_jsonArray);
							// สูตร NAR
							cal_insurance.put("FormulaCatId9", NAR_jsonArray);
							
							//CollectMeth
							cal_insurance.put("Collect_Meth", collect_meth_jsonArray);
							
							
							//สูตรการคำนวณเบี้ย
							//cal_insurance.put("cal_Formula_Insurance", cal_Formula_Insurance_jsonArray);
							cal_insurance_jsonArray.put(cal_insurance);
							
							responsejson.put("Tab_cal_insurance",cal_insurance_jsonArray);
							//
							responseText = responsejson.toString();
						}
						//การใช้สิทธิ์ตามกรมธรรม์
						if (menu_OL_3.equals("true")) {
							int tab = 3;
							//Change conditions
							JSONArray	change_conditions_jsonArray	= new JSONArray();
							if (datareturn_LookupCat.size() != 0) {
								for (int i = 0 ; i < datareturn_LookupCat.size(); i++) {
									//Unit
									if (datareturn_LookupCat.get(i).getLookupCat().getEnum_name().equals("lu_prd_chg")) {
										for (int ii = 0; ii < datareturn_LookupCat.get(i).getListLookupValue().size(); ii++) {
											JSONObject json_change_conditions = new JSONObject();
											json_change_conditions.put("pass",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getEnum_value());
											json_change_conditions.put("text",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getName_th());
											change_conditions_jsonArray.put(json_change_conditions);
										}
									}
								}
							}
							ArrayList<FormulaCatAccesData> datareturn_FormulaCatAccesData;
							MainInsureDetailCreateProduct mdc 					= new MainInsureDetailCreateProduct();
							 mdc.createDetail(tab);
							 datareturn_FormulaCatAccesData 					= mdc.getListFormulaCatAccesData();
							 JSONArray  expropriation_formula_jsonArray			= new JSONArray();
							 if (datareturn_FormulaCatAccesData.size() != 0) {
								 for (int i = 0; i < datareturn_FormulaCatAccesData.size(); i++) {
										//ทุนในการคำนวณเบี้ย (SA_P)
										 if (datareturn_FormulaCatAccesData.get(i).getFormulaCat().getFormula_cat_id() == 5) {
											 for (int ii = 0; ii < datareturn_FormulaCatAccesData.get(i).getListFormula().size(); ii++) {
														JSONObject json_expropriation_formula = new JSONObject();
														json_expropriation_formula.put("pass", datareturn_FormulaCatAccesData.get(i).getListFormula().get(ii).getFormula_id());
														json_expropriation_formula.put("text", datareturn_FormulaCatAccesData.get(i).getListFormula().get(ii).getName_th());
														expropriation_formula_jsonArray.put(json_expropriation_formula);
											 }
										 }
								}
							}
							//
							JSONArray  setexpropriation_formula_jsonArray	= new JSONArray();
							JSONObject json_expropriation_formula = new JSONObject();
							json_expropriation_formula.put("change_conditions",change_conditions_jsonArray);
							json_expropriation_formula.put("expropriation_formula",expropriation_formula_jsonArray);
							setexpropriation_formula_jsonArray.put(json_expropriation_formula);
							
							responsejson.put("Tab_Use_Rights",setexpropriation_formula_jsonArray);
							//
							responseText = responsejson.toString();
						}
						//Tab ผลประโยชน์การขาย
						if (menu_OL_4.equals("true")) {
							JSONArray	sales_benefits_jsonArray	= new JSONArray();
							for (int i = 0 ; i < datareturn_LookupCat.size(); i++) {
								//mode
								if (datareturn_LookupCat.get(i).getLookupCat().getLookup_cat_id() == 45) {
									for (int ii = 0; ii < datareturn_LookupCat.get(i).getListLookupValue().size(); ii++) {
										JSONObject  sales_benefits_Contract_Type = new JSONObject();
										if (datareturn_LookupCat.get(i).getListLookupValue().get(ii).getLookup_value_id() == 178) {
											sales_benefits_Contract_Type.put("pass",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getEnum_value());
											sales_benefits_Contract_Type.put("text",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getName_th());
											sales_benefits_jsonArray.put(sales_benefits_Contract_Type);
										}else if (datareturn_LookupCat.get(i).getListLookupValue().get(ii).getLookup_value_id() == 179) {
											sales_benefits_Contract_Type.put("pass",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getEnum_value());
											sales_benefits_Contract_Type.put("text",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getName_th());
											sales_benefits_jsonArray.put(sales_benefits_Contract_Type);
										}else if (datareturn_LookupCat.get(i).getListLookupValue().get(ii).getLookup_value_id() == 180) {
											sales_benefits_Contract_Type.put("pass",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getEnum_value());
											sales_benefits_Contract_Type.put("text",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getName_th());
											sales_benefits_jsonArray.put(sales_benefits_Contract_Type);
										}else if (datareturn_LookupCat.get(i).getListLookupValue().get(ii).getLookup_value_id() == 181) {
											sales_benefits_Contract_Type.put("pass",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getEnum_value());
											sales_benefits_Contract_Type.put("text",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getName_th());
											sales_benefits_jsonArray.put(sales_benefits_Contract_Type);
										}else if (datareturn_LookupCat.get(i).getListLookupValue().get(ii).getLookup_value_id() == 182) {
											sales_benefits_Contract_Type.put("pass",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getEnum_value());
											sales_benefits_Contract_Type.put("text",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getName_th());
											sales_benefits_jsonArray.put(sales_benefits_Contract_Type);
										}
									}	
								}
							}
							
							responsejson.put("Tab_Sales_Benefits",sales_benefits_jsonArray);
							//
							responseText = responsejson.toString();
						}
						//Tab ข้อกำหนดการรับประกัน
						if (menu_OL_5.equals("true")) {
							ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupCL_P_Benefit_Unit_Sum = lookupValueGroupData.getListGroup_CL_P_benefitUnitSum();
							ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupCL_P_Benefit_Factor_Sum = lookupValueGroupData.getListGroup_CL_P_benefitFactorSum();
							ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupCL_P = lookupValueGroupData.getListGroup_CL_P();
							//ข้อกำหนด
							JSONArray	terms_calendar_jsonArray	= new JSONArray();
							//Mode
							JSONArray	mode_jsonArray	= new JSONArray();
							//cal_Age
							JSONArray	cal_Age_jsonArray	= new JSONArray();
							//Underwriting Type
							JSONArray	underwriting_Type_jsonArray	= new JSONArray();
							//Senior
							JSONArray json_senior_jsonArray = new JSONArray();
							//lu_unw_hist_con
							JSONArray	lu_unw_hist_con_jsonArray	= new JSONArray();
							//lu_condition
							JSONArray	lu_condition_jsonArray	= new JSONArray();
							//lu_compare_2
							JSONArray	lu_compare_2_jsonArray	= new JSONArray();
							//lu_cov_unit_type
							JSONArray	fix_cov_unit_jsonArray	= new JSONArray();
							//lu_compare_2
							JSONArray	fix_cov_factor_jsonArray	= new JSONArray();
							//unw_hist_rule
							JSONArray	unw_hist_rule_jsonArray	= new JSONArray();
							//unw_substd_type
							JSONArray	unw_substd_type_jsonArray	= new JSONArray();
							
							// หน่วย
							for(int i=0 ; i < datareturn_LookupGroupCL_P_Benefit_Unit_Sum.size() ; i++) {
								JSONObject json_unit = new JSONObject();
								json_unit.put("pass", datareturn_LookupGroupCL_P_Benefit_Unit_Sum.get(i).getLookup_enum_value());
								json_unit.put("text", datareturn_LookupGroupCL_P_Benefit_Unit_Sum.get(i).getLookup_value_name());
								fix_cov_unit_jsonArray.put(json_unit);
							}
							// ของ
							for(int i=0 ; i < datareturn_LookupGroupCL_P_Benefit_Factor_Sum.size() ; i++) {
								JSONObject json_factor = new JSONObject();
								json_factor.put("pass", datareturn_LookupGroupCL_P_Benefit_Factor_Sum.get(i).getLookup_enum_value());
								json_factor.put("text", datareturn_LookupGroupCL_P_Benefit_Factor_Sum.get(i).getLookup_value_name());
								fix_cov_factor_jsonArray.put(json_factor);
							}
							//เปลี่ยนเป็น Underwriting Type
							for (int i = 0; i < datareturn_LookupGroupCL_P.size(); i++) {
								JSONObject json_underwritingType = new JSONObject();
								json_underwritingType.put("pass",  datareturn_LookupGroupCL_P.get(i).getLookup_enum_value());
								json_underwritingType.put("text",  datareturn_LookupGroupCL_P.get(i).getLookup_value_name());
								underwriting_Type_jsonArray.put(json_underwritingType);
							}
							
							for (int i = 0 ; i < datareturn_LookupCat.size(); i++) {
								//calendar
								if (datareturn_LookupCat.get(i).getLookupCat().getEnum_name().equals("lu_period_unit")) {
									for (int ii = 0; ii < datareturn_LookupCat.get(i).getListLookupValue().size(); ii++) {
										JSONObject json_calendar = new JSONObject();
										json_calendar.put("pass",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getEnum_value());
										json_calendar.put("text",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getName_th());
										terms_calendar_jsonArray.put(json_calendar);
									}
								}
								//Mode
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
								//cal_Age
								if (datareturn_LookupCat.get(i).getLookupCat().getEnum_name().equals("lu_age_calc_meth")) {
									for (int ii = 0 ; ii < datareturn_LookupCat.get(i).getListLookupValue().size(); ii++) {
										JSONObject json_cal_Age = new JSONObject();
										json_cal_Age.put("pass", datareturn_LookupCat.get(i).getListLookupValue().get(ii).getEnum_value());
										json_cal_Age.put("text", datareturn_LookupCat.get(i).getListLookupValue().get(ii).getName_th());
										cal_Age_jsonArray.put(json_cal_Age);
									}
								}
								//Reinsurance Group เปลี่ยนเป็น Underwriting Type
								/*if (datareturn_LookupCat.get(i).getLookupCat().getEnum_name().equals("lu_unw_opt")) {
									//Reinsurance Group
									for (int ii = 0; ii < datareturn_LookupCat.get(i).getListLookupValue().size(); ii++) {
										JSONObject json_reinsurance_Group = new JSONObject();
										json_reinsurance_Group.put("pass",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getEnum_value());
										json_reinsurance_Group.put("text",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getName_th());
										reinsurance_Group_jsonArray.put(json_reinsurance_Group);
									}
								}*/
								//Senior
								if (datareturn_LookupCat.get(i).getLookupCat().getEnum_name().equals("lu_senior_opt")) {
									//Reinsurance Group
									for (int ii = 0; ii < datareturn_LookupCat.get(i).getListLookupValue().size(); ii++) {
										JSONObject json_senior = new JSONObject();
										json_senior.put("pass",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getEnum_value());
										json_senior.put("text",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getName_th());
										json_senior_jsonArray.put(json_senior);
									}
								}
								//lu_unw_hist_con
								if (datareturn_LookupCat.get(i).getLookupCat().getEnum_name().equals("lu_unw_hist_con")) {
									for (int ii = 0; ii < datareturn_LookupCat.get(i).getListLookupValue().size(); ii++) {
										JSONObject json_lu_unw_hist_con = new JSONObject();
										json_lu_unw_hist_con.put("pass",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getEnum_value());
										json_lu_unw_hist_con.put("text",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getName_th());
										lu_unw_hist_con_jsonArray.put(json_lu_unw_hist_con);
									}
								}
								//lu_condition
								if (datareturn_LookupCat.get(i).getLookupCat().getEnum_name().equals("lu_condition")) {
									for (int ii = 0; ii < datareturn_LookupCat.get(i).getListLookupValue().size(); ii++) {
										JSONObject json_lu_condition = new JSONObject();
										json_lu_condition.put("pass",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getEnum_value());
										json_lu_condition.put("text",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getName_th());
										lu_condition_jsonArray.put(json_lu_condition);
									}
								}
								//lu_compare_2
								if (datareturn_LookupCat.get(i).getLookupCat().getEnum_name().equals("lu_compare_2")) {
									for (int ii = 0; ii < datareturn_LookupCat.get(i).getListLookupValue().size(); ii++) {
										JSONObject json_lu_compare_2 = new JSONObject();
										json_lu_compare_2.put("pass",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getEnum_value());
										json_lu_compare_2.put("text",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getName_th());
										lu_compare_2_jsonArray.put(json_lu_compare_2);
									}
								}
								//unw_hist_rule
								if (datareturn_LookupCat.get(i).getLookupCat().getEnum_name().equals("lu_unw_hist_type")) {
									for (int ii = 0; ii < datareturn_LookupCat.get(i).getListLookupValue().size(); ii++) {
										JSONObject json_unw_hist_rule = new JSONObject();
										json_unw_hist_rule.put("pass",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getEnum_value());
										json_unw_hist_rule.put("text",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getName_th());
										unw_hist_rule_jsonArray.put(json_unw_hist_rule);
									}
								}
								//unw_substd_type
								if (datareturn_LookupCat.get(i).getLookupCat().getEnum_name().equals("lu_substd_type")) {
									for (int ii = 0; ii < datareturn_LookupCat.get(i).getListLookupValue().size(); ii++) {
										JSONObject json_unw_substd_type = new JSONObject();
										json_unw_substd_type.put("pass",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getEnum_value());
										json_unw_substd_type.put("text",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getName_th());
										unw_substd_type_jsonArray.put(json_unw_substd_type);
									}
								}
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
							//FilingChannel
							/*ArrayList<FilingChannelAccessData> datareturn_FilingChannel;
							datareturn_FilingChannel = mdcs.getfiling_Channel();
							JSONArray	filling_Channel_jsonArray	= new JSONArray();
							for (int i = 0; i < datareturn_FilingChannel.size(); i++) {
								JSONObject json_filling_Channel = new JSONObject();
								if(!datareturn_FilingChannel.get(i).getFilingChannel().equals(null)) {
									json_filling_Channel.put("pass", datareturn_FilingChannel.get(i).getFilingChannel().getFiling_chan_id());
									json_filling_Channel.put("text", datareturn_FilingChannel.get(i).getFilingChannel().getName_th());
									filling_Channel_jsonArray.put(json_filling_Channel);
								}
							}*/
							DistChanelData dc = new DistChanelData();
							//Distribution Channel
							JSONArray distribution_Channel_jsonArray	= new JSONArray();
							ArrayList<DistchannelAccessData> return_DistchannelAccessData = dc.searchLookupDistChanel();
							if (return_DistchannelAccessData.size() != 0) {
								for (int i = 0; i < return_DistchannelAccessData.size(); i++) {
									JSONObject json_distribution_Channel = new JSONObject();
									json_distribution_Channel.put("pass",  return_DistchannelAccessData.get(i).getDistChannel().getDist_chan_id());
									json_distribution_Channel.put("text",  return_DistchannelAccessData.get(i).getDistChannel().getName_th());
									distribution_Channel_jsonArray.put(json_distribution_Channel);
								}
							}
							//searchAllAppendix
							LookupProductData lpd = new LookupProductData();
							ArrayList<AppendixRelationAccessData>  arr_Appendix =	lpd.searchAppendixRelation();
							JSONArray Jsonarr_Appendix = new JSONArray();
							if (arr_Appendix.size() != 0) {
								for (int i = 0; i < arr_Appendix.size(); i++) {
									JSONObject json_Appendix = new JSONObject();
									//if (arr_Appendix.get(i).getIs_active() == true) {
									json_Appendix.put("Abb_name", arr_Appendix.get(i).getAppendix_version().getAbb_name());
									json_Appendix.put("Appendix_code", arr_Appendix.get(i).getAppendix().getAppendix_code());
									json_Appendix.put("Name_th", arr_Appendix.get(i).getAppendix().getName_th());
									Jsonarr_Appendix.put(json_Appendix);
									//}
								}
							}
							
							//search Product at Rider
							//PorductProvision porductProvision = new PorductProvision();
							//ArrayList<Product> lstProduct = porductProvision.searchProductAtRider();
							
							/*String prd_code = request.getParameter("rCode");
							ConstantValues.PRD_CODE = prd_code;*/
							ListProductBaseOLData listProductBaseOLData = new ListProductBaseOLData();
							ArrayList<Product> listProduct = listProductBaseOLData.searchListProductRiderOLNotBundle();
							JSONArray rider_jsonArr = new JSONArray(); 
							for (Product product : listProduct) {
								JSONObject rider_jsonObj = new JSONObject();
								rider_jsonObj.put("prd_rider_code", product.getPrd_code());
								rider_jsonObj.put("cov_code", product.getCov_code());
								rider_jsonObj.put("name_th", product.getName_th());
								rider_jsonObj.put("biz_code", product.getCore_biz_prd_code());
								rider_jsonObj.put("cov_cat_id", product.getCov_cat_id());
								rider_jsonArr.put(rider_jsonObj);
							}
							
							/*ซื้อคุ่กับแบบ*/
							ProductData pd = new ProductData();
							ArrayList<Product> arrProduct = pd.searchMainInsurance();
							JSONArray	product_jsonArray	= new JSONArray();
							for (int i = 0; i < arrProduct.size(); i++) {
								if(arrProduct.get(i).getStatus().equals("APPROVED")) {
									JSONObject product_json = new JSONObject();
									product_json.put("Prd_code", arrProduct.get(i).getPrd_code());
									product_json.put("Cov_code", arrProduct.get(i).getCov_code());
									product_json.put("Core_biz_prd_code", arrProduct.get(i).getCore_biz_prd_code());
									product_jsonArray.put(product_json);
								}
							}
							
							JSONArray	benefits_jsonArray	= new JSONArray();
							JSONObject json_pbenefits = new JSONObject();
							json_pbenefits.put("calendar",terms_calendar_jsonArray);
							json_pbenefits.put("Fix_cov_unit",fix_cov_unit_jsonArray);
							json_pbenefits.put("Fix_cov_factor",fix_cov_factor_jsonArray);
							json_pbenefits.put("mode",mode_jsonArray);
							json_pbenefits.put("cal_Age",cal_Age_jsonArray);
							json_pbenefits.put("reinsurance_Group",underwriting_Type_jsonArray);
							json_pbenefits.put("senior", json_senior_jsonArray);
							json_pbenefits.put("sale_Channel", sales_Channel_jsonArray);
							json_pbenefits.put("filing_Channel", distribution_Channel_jsonArray);
							json_pbenefits.put("lu_unw_hist_con", lu_unw_hist_con_jsonArray);
							json_pbenefits.put("lu_condition", lu_condition_jsonArray);
							json_pbenefits.put("lu_compare_2", lu_compare_2_jsonArray);
							json_pbenefits.put("unw_hist_rule", unw_hist_rule_jsonArray);
							json_pbenefits.put("Appendix", Jsonarr_Appendix);
							json_pbenefits.put("unw_substd_type", unw_substd_type_jsonArray);
							json_pbenefits.put("list_uwnRider", rider_jsonArr);
							json_pbenefits.put("ProductBuyWith", product_jsonArray);
							benefits_jsonArray.put(json_pbenefits);
							responsejson.put("Tab_Warranty_terms",benefits_jsonArray);
							//
							
						} 
						if (menu_OL_7.equals("true")) {
							
							MainInsureDetailCreateServiceBasePlanOL mdcs2 = new MainInsureDetailCreateServiceBasePlanOL ();
							int tab = 6;
							ArrayList<Benefit> datareturn;
							ArrayList<LookupCatAccessData> datareturn_datalool_up;
							ArrayList<FormulaCatAccesData> datareturn_Formula_Lookup;
							datareturn = mdcs2.Benefits(tab);
							datareturn_datalool_up = mdcs2.getBenefits_Lookup();
							datareturn_Formula_Lookup = mdcs2.dividend_lookup(tab);
							JSONArray	die_calendar_jsonArray		= new JSONArray();
							JSONArray	die_unit_jsonArray			= new JSONArray();
							JSONArray	die_sa_jsonArray			= new JSONArray();
							JSONArray	die_CV_PV_jsonArray			= new JSONArray();
							JSONArray	die_other_jsonArray			= new JSONArray();
							JSONArray	condition_jsonArray			= new JSONArray();
							JSONArray	accident_ADB_jsonArray		= new JSONArray();
							
							//** pun fixed **//
							//เงินคืนทุกระยะ
							JSONArray	unit_type_jsonArray			= new JSONArray();
							JSONArray	cov_benef_scope_jsonArray	= new JSONArray();
							JSONArray	benef_period_jsonArray		= new JSONArray();
							JSONArray	refund_unit_jsonArray		= new JSONArray();
							JSONArray	refund_scope_jsonArray		= new JSONArray();
							JSONArray	benef_factor_jsonArray		= new JSONArray();
							JSONArray	benef_factorPremium_jsonArray		= new JSONArray();
							//FormulaCatAccesData
							JSONArray	formula_jsonArray		= new JSONArray();
							
							ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupOL_OL_BaseBenefitSA = lookupValueGroupData.getListGroup_OL_baseBenefitSA();
							ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupOL_OL_BaseBenefitCVPV = lookupValueGroupData.getListGroup_OL_baseBenefitCVPV();
							ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupOL_OL_BaseBenefitADB = lookupValueGroupData.getListGroup_OL_BaseBenefitADB();
							ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupOL_OL_BaseBenefitOther = lookupValueGroupData.getListGroup_OL_BaseBenefitOther();
							ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupOL_benefitFactorUnit = lookupValueGroupData.getListGroup_benefitFactorUnit();
							ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupOL_baseBenefitFactorScope = lookupValueGroupData.getListGroup_baseBenefitFactorScope();
							ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupOL_BaseBenefitDividend = lookupValueGroupData.getListGroup_OL_BaseBenefitDividend();
							
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
							
							// อุบัติเหตุ ADB และ อุบัติเหตุสาธารณะ PUBLIC_ACC
							for(int i=0; i < datareturn_LookupGroupOL_OL_BaseBenefitADB.size() ; i++) {
								JSONObject json_accident_ADB = new JSONObject();
								json_accident_ADB.put("pass", datareturn_LookupGroupOL_OL_BaseBenefitADB.get(i).getLookup_enum_value());
								json_accident_ADB.put("text", datareturn_LookupGroupOL_OL_BaseBenefitADB.get(i).getLookup_value_name());
								accident_ADB_jsonArray.put(json_accident_ADB);
							}
					
							//--เงินคืนทุกระยะ หน่วย
							for(int i=0; i < datareturn_LookupGroupOL_benefitFactorUnit.size() ; i++) {
								JSONObject json_refund_unit = new JSONObject();
								json_refund_unit.put("pass", datareturn_LookupGroupOL_benefitFactorUnit.get(i).getLookup_enum_value());
								json_refund_unit.put("text", datareturn_LookupGroupOL_benefitFactorUnit.get(i).getLookup_value_name());
								refund_unit_jsonArray.put(json_refund_unit);
							}
							
							//--เงินคืนทุกระยะ ประเภทคำนวณ
							for(int i=0; i < datareturn_LookupGroupOL_baseBenefitFactorScope.size() ; i++) {
								JSONObject json_refund_scope = new JSONObject();
								json_refund_scope.put("pass", datareturn_LookupGroupOL_baseBenefitFactorScope.get(i).getLookup_enum_value());
								json_refund_scope.put("text", datareturn_LookupGroupOL_baseBenefitFactorScope.get(i).getLookup_value_name());
								refund_scope_jsonArray.put(json_refund_scope);
							}
							
							//เงินปันผล - ประเภทเงินปันผล
							for(int i=0; i < datareturn_LookupGroupOL_BaseBenefitDividend.size() ; i++) {
								JSONObject json_benef_dividend = new JSONObject();
								json_benef_dividend.put("pass", datareturn_LookupGroupOL_BaseBenefitDividend.get(i).getLookup_enum_value());
								json_benef_dividend.put("text", datareturn_LookupGroupOL_BaseBenefitDividend.get(i).getLookup_value_name());
								benef_period_jsonArray.put(json_benef_dividend);
							} 
							for(int i=0; i < datareturn_LookupGroupOL_baseBenefitFactorScope.size() ; i++) {
								JSONObject json_benef_scope = new JSONObject();
								json_benef_scope.put("pass", datareturn_LookupGroupOL_baseBenefitFactorScope.get(i).getLookup_enum_value());
								json_benef_scope.put("text", datareturn_LookupGroupOL_baseBenefitFactorScope.get(i).getLookup_value_name());
								cov_benef_scope_jsonArray.put(json_benef_scope);
							} 
							
							//** end pun fixed **//
							for (int i = 0; i < datareturn_datalool_up.size(); i++) {
								if (datareturn_datalool_up.get(i).getLookupCat().getEnum_name().equals("lu_period_unit")) {
									for (int ii = 0; ii < datareturn_datalool_up.get(i).getListLookupValue().size(); ii++) {
										JSONObject json_calendar = new JSONObject();
										json_calendar.put("pass", datareturn_datalool_up.get(i).getListLookupValue().get(ii).getEnum_value());
										json_calendar.put("text",datareturn_datalool_up.get(i).getListLookupValue().get(ii).getName_th());
										die_calendar_jsonArray.put(json_calendar);
									}
								} 
								//unit
								if (datareturn_datalool_up.get(i).getLookupCat().getEnum_name().equals("lu_compare")) {
									for (int ii = 0; ii < datareturn_datalool_up.get(i).getListLookupValue().size(); ii++) {
										JSONObject json_unit = new JSONObject();
										json_unit.put("pass", datareturn_datalool_up.get(i).getListLookupValue().get(ii).getEnum_value());
										json_unit.put("text",datareturn_datalool_up.get(i).getListLookupValue().get(ii).getName_th());
										die_unit_jsonArray.put(json_unit);
									}
								}
								//SA ย้ายไปดึงของปั้น
								if(datareturn_datalool_up.get(i).getLookupCat().getEnum_name().equals("lu_benef_factor")) {
									for (int ii = 0; ii < datareturn_datalool_up.get(i).getListLookupValue().size(); ii++) {
										JSONObject json_sa = new JSONObject();
										json_sa.put("pass", datareturn_datalool_up.get(i).getListLookupValue().get(ii).getEnum_value());
										json_sa.put("text",datareturn_datalool_up.get(i).getListLookupValue().get(ii).getName_th());
										die_sa_jsonArray.put(json_sa);
									}
								}
								
								if(datareturn_datalool_up.get(i).getLookupCat().getEnum_name().equals("lu_limit_amt_type")) {
									for (int ii = 0; ii < datareturn_datalool_up.get(i).getListLookupValue().size(); ii++) {
										JSONObject json_factor = new JSONObject();
										json_factor.put("pass", datareturn_datalool_up.get(i).getListLookupValue().get(ii).getEnum_value());
										json_factor.put("text",datareturn_datalool_up.get(i).getListLookupValue().get(ii).getName_th());
										benef_factor_jsonArray.put(json_factor);
									}
								}
								
								if(datareturn_datalool_up.get(i).getLookupCat().getEnum_name().equals("lu_condition")) {
									for (int ii = 0; ii < datareturn_datalool_up.get(i).getListLookupValue().size(); ii++) {
										JSONObject json_condition = new JSONObject();
										json_condition.put("pass", datareturn_datalool_up.get(i).getListLookupValue().get(ii).getEnum_value());
										json_condition.put("text",datareturn_datalool_up.get(i).getListLookupValue().get(ii).getName_th());
										condition_jsonArray.put(json_condition);
									}
								}
								//เงินคืนทุกระยะ
								if(datareturn_datalool_up.get(i).getLookupCat().getEnum_name().equals("lu_cov_unit_type")) {
									for (int ii = 0; ii < datareturn_datalool_up.get(i).getListLookupValue().size(); ii++) {
										JSONObject json_unit_type = new JSONObject();
										json_unit_type.put("pass", datareturn_datalool_up.get(i).getListLookupValue().get(ii).getEnum_value());
										json_unit_type.put("text",datareturn_datalool_up.get(i).getListLookupValue().get(ii).getName_th());
										unit_type_jsonArray.put(json_unit_type);
									}
								}
								
								//เสียชีวิต Premium
								if(datareturn_datalool_up.get(i).getLookupCat().getEnum_name().equals("lu_benef_factor_premium")) {
									for (int ii = 0; ii < datareturn_datalool_up.get(i).getListLookupValue().size(); ii++) {
										JSONObject json_benefFac_type = new JSONObject();
										json_benefFac_type.put("pass", datareturn_datalool_up.get(i).getListLookupValue().get(ii).getEnum_value());
										json_benefFac_type.put("text",datareturn_datalool_up.get(i).getListLookupValue().get(ii).getName_th());
										benef_factorPremium_jsonArray.put(json_benefFac_type);
									}
								}
								if(datareturn_datalool_up.get(i).getLookupCat().getEnum_name().equals("lu_benef_scope")) {
									for (int ii = 0; ii < datareturn_datalool_up.get(i).getListLookupValue().size(); ii++) {
										JSONObject json_unit_type = new JSONObject();
										json_unit_type.put("pass", datareturn_datalool_up.get(i).getListLookupValue().get(ii).getEnum_value());
										json_unit_type.put("text",datareturn_datalool_up.get(i).getListLookupValue().get(ii).getName_th());
										cov_benef_scope_jsonArray.put(json_unit_type);
									}
								}
								//เงินปันผล FIXME
								if(datareturn_datalool_up.get(i).getLookupCat().getEnum_name().equals("lu_benef_period")) {
									for (int ii = 0; ii < datareturn_datalool_up.get(i).getListLookupValue().size(); ii++) {
										JSONObject json_unit_type = new JSONObject();
										json_unit_type.put("pass", datareturn_datalool_up.get(i).getListLookupValue().get(ii).getEnum_value());
										json_unit_type.put("text",datareturn_datalool_up.get(i).getListLookupValue().get(ii).getName_th());
										benef_period_jsonArray.put(json_unit_type);
									}
								}
								
							}
							///FormulaCatAccesData
							for (int i = 0; i < datareturn_Formula_Lookup.size(); i++) {
								if (datareturn_Formula_Lookup.get(i).getFormulaCat().getFormula_cat_id() == 6) {
									for (int ii = 0 ; ii < datareturn_Formula_Lookup.get(i).getListFormula().size(); ii++) {
										JSONObject json_fomula = new JSONObject();
										json_fomula.put("pass",  datareturn_Formula_Lookup.get(i).getListFormula().get(ii).getFormula_id());
										json_fomula.put("text",  datareturn_Formula_Lookup.get(i).getListFormula().get(ii).getName_th());
										formula_jsonArray.put(json_fomula);
									}
								} 
							}
							//รายการข้อยกเว้นการจ่ายเงินทดแทน
							BasePlanBenefitOLSearchData bad = new BasePlanBenefitOLSearchData();
							ArrayList<Benefit> datareturn_Benefit;
							datareturn_Benefit = bad.searchBenefitิByBnfCatCode();
							JSONArray	benefit_jsonArray	= new JSONArray();
							for (int i = 0; i < datareturn_Benefit.size(); i++) {
								JSONObject json_benefit = new JSONObject();
								json_benefit.put("pass",datareturn_Benefit.get(i).getBnf_code());
								json_benefit.put("text",datareturn_Benefit.get(i).getName_th());
								benefit_jsonArray.put(json_benefit);
							}
							///เสียชีวิต
							JSONArray	die_jsonArray	= new JSONArray();
							JSONObject json_die = new JSONObject();
							json_die.put("die_calendar",die_calendar_jsonArray);
							json_die.put("die_unit",die_unit_jsonArray);
							json_die.put("die_sa",die_sa_jsonArray);
							json_die.put("die_CV_PV", die_CV_PV_jsonArray);
							json_die.put("die_other", die_other_jsonArray);
							json_die.put("accident_ADB", accident_ADB_jsonArray);
							json_die.put("accidentPublic_ACC", accident_ADB_jsonArray);
							json_die.put("condition",condition_jsonArray);
							json_die.put("exception",benefit_jsonArray);
							json_die.put("die_premium", benef_factorPremium_jsonArray);
							die_jsonArray.put(json_die);
							//เงินคืนทุกระยะ
							JSONArray	refund_jsonArray	= new JSONArray();
							JSONObject json_refund			= new JSONObject();
							json_refund.put("benef_unit",refund_unit_jsonArray);
							json_refund.put("benef_factor",benef_factor_jsonArray);
							json_refund.put("benef_scope",refund_scope_jsonArray);
							refund_jsonArray.put(json_refund);
							///เงินปันผล
							////////////////
							JSONArray	look_dividend_jsonArray		= new JSONArray();	
							SubCatData scd = new SubCatData();
							ArrayList<String[]> listDividend 	= new ArrayList<>();//38
							listDividend						= scd.searchdividendOL();
							////////////////////////////////////////////////////////////
							if (listDividend.size() != 0) {
								for (int i = 0; i < listDividend.size(); i++) {
									String text			= "";
									String layout 		= "";
									String sub_rate_cat = "";
									String rate_cat_id	= "";
									String[] listSubCat_Lv2 = listDividend.get(i);
									JSONArray arr_layout_jsonArray	= new JSONArray();
									JSONObject arr_layout_JSONObject = new JSONObject();
									for (int ii = 0; ii < listSubCat_Lv2.length; ii++) {
										JSONObject json_tb_Insurance_premium = new JSONObject();
										if (ii == 0) {
											layout 			= listSubCat_Lv2[ii];
											json_tb_Insurance_premium.put("layout",layout);
										}else if (ii == 1) {
											sub_rate_cat 			= listSubCat_Lv2[ii];	
											json_tb_Insurance_premium.put("sub_rate_cat",sub_rate_cat);
										}else if (ii == 2) {
											text 	= listSubCat_Lv2[ii];
											json_tb_Insurance_premium.put("text",text);
										}else if (ii == 3) {
											rate_cat_id 	= listSubCat_Lv2[ii];
											json_tb_Insurance_premium.put("rate_cat_id",rate_cat_id);
										}
										arr_layout_jsonArray.put(json_tb_Insurance_premium);
									}
									arr_layout_JSONObject.put("pattern", arr_layout_jsonArray);
									look_dividend_jsonArray.put(arr_layout_JSONObject);
								}
							}
							////////////////////////////////////////////////////////////
							
							JSONArray	dividend_jsonArray		= new JSONArray();
							JSONObject json_dividend			= new JSONObject();
							json_dividend.put("filelookup_dividend",look_dividend_jsonArray);
							json_dividend.put("benef_period",benef_period_jsonArray);
							json_dividend.put("cov_benef_scope",cov_benef_scope_jsonArray);
							json_dividend.put("formula",formula_jsonArray);
							dividend_jsonArray.put(json_dividend);
							
							
							//Total permanent disability
							JSONArray	permanent_disability_jsonArray	= new JSONArray();
							for (int i = 0; i < datareturn.size(); i++) {
								JSONObject json_permanent_disability = new JSONObject();
								json_permanent_disability.put("pass", datareturn.get(i).getBnf_code());
								json_permanent_disability.put("text", datareturn.get(i).getName_th());
								permanent_disability_jsonArray.put(json_permanent_disability);
							}
							JSONArray	benefits_jsonArray	= new JSONArray();
							JSONObject json_pbenefits_ = new JSONObject();
							json_pbenefits_.put("die",die_jsonArray);
							json_pbenefits_.put("permanent_disability",permanent_disability_jsonArray);
							json_pbenefits_.put("refund",refund_jsonArray);
							json_pbenefits_.put("dividend", dividend_jsonArray);
							benefits_jsonArray.put(json_pbenefits_);
							responsejson.put("Tab_Benefits_BasePlan",benefits_jsonArray);
////////////////////////////							
							JSONArray	unit_jsonArray	= new JSONArray();
							JSONArray	unitFactor_jsonArray	= new JSONArray();
							JSONArray	frequency_jsonArray	= new JSONArray();
							JSONArray	factorUnit_jsonArray	= new JSONArray();
							JSONArray	factorScope_jsonArray	= new JSONArray();
							
							JSONArray	die_calendar_jsonArray1		= new JSONArray();
							JSONArray	die_unit_jsonArray1			= new JSONArray();
							JSONArray	die_sa_jsonArray1			= new JSONArray();
							JSONArray	die_CV_PV_jsonArray1			= new JSONArray();
							JSONArray	die_other_jsonArray1			= new JSONArray();
							//เงินคืนทุกระยะ
							JSONArray	unit_type_jsonArray1			= new JSONArray();
							JSONArray	benef_factor_jsonArray1		= new JSONArray();
							JSONArray	benef_factorPremium_jsonArray1		= new JSONArray();
							ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupCL_Rider_Benefit_Factor = lookupValueGroupData.getListGroup_CL_riderBenefitFactor();
							ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupCL_Rider_Benefit_Scope = lookupValueGroupData.getListGroup_CL_riderBenefitScope();
							ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupCL_Rider_Benefit_Unit = lookupValueGroupData.getListGroup_CL_riderBenefitUnit();
							ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupCL_Rider_Benefit_Factor_Unit = lookupValueGroupData.getListGroup_CL_riderBenefitFactorUnit();
							ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupCL_Rider_Benefit_Factor_Scope = lookupValueGroupData.getListGroup_CL_riderBenefitFactorScope();
							
							ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupOL_OL_BaseBenefitSA1 = lookupValueGroupData.getListGroup_OL_baseBenefitSA();
							ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupOL_OL_BaseBenefitCVPV1 = lookupValueGroupData.getListGroup_OL_baseBenefitCVPV();
							ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupOL_OL_BaseBenefitOther1 = lookupValueGroupData.getListGroup_OL_BaseBenefitOther();
							// Death_SA
							for(int i=0 ; i < datareturn_LookupGroupOL_OL_BaseBenefitSA1.size() ; i++) {
								JSONObject json_deathSA = new JSONObject();
								json_deathSA.put("pass", datareturn_LookupGroupOL_OL_BaseBenefitSA1.get(i).getLookup_enum_value());
								json_deathSA.put("text", datareturn_LookupGroupOL_OL_BaseBenefitSA1.get(i).getLookup_value_name());
								die_sa_jsonArray1.put(json_deathSA);
							}
							
							// Death_CV/PV
							for(int i=0 ; i < datareturn_LookupGroupOL_OL_BaseBenefitCVPV1.size() ; i++) {
								JSONObject json_death_CVPV = new JSONObject();
								json_death_CVPV.put("pass", datareturn_LookupGroupOL_OL_BaseBenefitCVPV1.get(i).getLookup_enum_value());
								json_death_CVPV.put("text", datareturn_LookupGroupOL_OL_BaseBenefitCVPV1.get(i).getLookup_value_name());
								die_CV_PV_jsonArray1.put(json_death_CVPV);
							}
							
							// Death_Other
							for(int i=0 ; i < datareturn_LookupGroupOL_OL_BaseBenefitOther1.size() ; i++) {
								JSONObject json_death_other = new JSONObject();
								json_death_other.put("pass", datareturn_LookupGroupOL_OL_BaseBenefitOther1.get(i).getLookup_enum_value());
								json_death_other.put("text", datareturn_LookupGroupOL_OL_BaseBenefitOther1.get(i).getLookup_value_name());
								die_other_jsonArray1.put(json_death_other);
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
										die_calendar_jsonArray1.put(json_calendar);
									}
								} 
								//unit
								if (catValueAcessData_arr.get(i).getLookupCat().getEnum_name().equals("lu_compare")) {
									for (int ii = 0; ii < catValueAcessData_arr.get(i).getListLookupValue().size(); ii++) {
										JSONObject json_unit = new JSONObject();
										json_unit.put("pass", catValueAcessData_arr.get(i).getListLookupValue().get(ii).getEnum_value());
										json_unit.put("text",catValueAcessData_arr.get(i).getListLookupValue().get(ii).getName_th());
										die_unit_jsonArray1.put(json_unit);
									}
								}
								//SA ย้ายไปดึงของปั้น
								
								if(catValueAcessData_arr.get(i).getLookupCat().getEnum_name().equals("lu_limit_amt_type")) {
									for (int ii = 0; ii < catValueAcessData_arr.get(i).getListLookupValue().size(); ii++) {
										JSONObject json_factor = new JSONObject();
										json_factor.put("pass", catValueAcessData_arr.get(i).getListLookupValue().get(ii).getEnum_value());
										json_factor.put("text",catValueAcessData_arr.get(i).getListLookupValue().get(ii).getName_th());
										benef_factor_jsonArray1.put(json_factor);
									}
								}
								
								//เงินคืนทุกระยะ
								if(catValueAcessData_arr.get(i).getLookupCat().getEnum_name().equals("lu_cov_unit_type")) {
									for (int ii = 0; ii < catValueAcessData_arr.get(i).getListLookupValue().size(); ii++) {
										JSONObject json_unit_type = new JSONObject();
										json_unit_type.put("pass", catValueAcessData_arr.get(i).getListLookupValue().get(ii).getEnum_value());
										json_unit_type.put("text",catValueAcessData_arr.get(i).getListLookupValue().get(ii).getName_th());
										unit_type_jsonArray1.put(json_unit_type);
									}
								}
								//เสียชีวิต Premium
								if(catValueAcessData_arr.get(i).getLookupCat().getEnum_name().equals("lu_benef_factor_premium")) {
									for (int ii = 0; ii < catValueAcessData_arr.get(i).getListLookupValue().size(); ii++) {
										JSONObject json_benefFac_type = new JSONObject();
										json_benefFac_type.put("pass", catValueAcessData_arr.get(i).getListLookupValue().get(ii).getEnum_value());
										json_benefFac_type.put("text",catValueAcessData_arr.get(i).getListLookupValue().get(ii).getName_th());
										benef_factorPremium_jsonArray1.put(json_benefFac_type);
									}
								}
							}
							///เสียชีวิต
							JSONArray	die_jsonArray1	= new JSONArray();
							JSONObject json_die1 = new JSONObject();
							json_die1.put("die_calendar",die_calendar_jsonArray1);
							json_die1.put("die_unit",die_unit_jsonArray1);
							json_die1.put("die_sa",die_sa_jsonArray1);
							json_die1.put("die_CV_PV", die_CV_PV_jsonArray1);
							json_die1.put("die_other", die_other_jsonArray1);
							//json_die.put("exception",benefit_jsonArray);
							json_die1.put("die_premium", benef_factorPremium_jsonArray1);
							die_jsonArray1.put(json_die1);
							
							JSONArray  select_value_jsonArray	= new JSONArray();
							JSONObject json_select_value = new JSONObject();
							json_select_value.put("unit",unit_jsonArray);
							json_select_value.put("frequency",frequency_jsonArray);
							json_select_value.put("unitFactor",unitFactor_jsonArray);
							json_select_value.put("factor_unit",factorUnit_jsonArray);
							json_select_value.put("factor_scope",factorScope_jsonArray);
							json_select_value.put("die",json_die1);
							select_value_jsonArray.put(json_select_value);
							responsejson.put("Tab_Benefits_Rider",select_value_jsonArray);
						}
						responseText = responsejson.toString();	
		}
		
			json = responseText;
			System.out.println("Lookup = /"+json);
			out.print(json);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
