package servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.JSONArray;
import org.json.JSONObject;

import layout.bean.productfac.beanset.AgeBandAccessData;
import layout.bean.productfac.beanset.CoverageCatAccessData;
import layout.bean.productfac.beanset.CoverageCovCat;
import layout.bean.productfac.beanset.CoverageMainCovCat;
import layout.bean.productfac.beanset.FilingChannelAccessData;
import layout.bean.productfac.beanset.FormulaCatAccesData;
import layout.bean.productfac.beanset.LookupCatAccessData;
import layout.bean.productfac.beanset.LookupPremAssumpRateAccessData;
import layout.bean.productfac.beanset.LookupValueGroupAccessData;
import layout.bean.productfac.beanset.MortalityTliAccessData;
import layout.bean.productfac.beanset.NonforfRateAccessData;
import layout.bean.productfac.beanset.PremAssumpRateGroupAccessData;
import layout.bean.productfac.beanset.RateCatAccessData;
import layout.bean.productfac.beanset.TpdTiliAccessData;
import layout.bean.productfac.benefit.Benefit;
import layout.bean.productfac.coverage.Coverage;
import layout.bean.productfac.coverage.Coverage_cat;
import layout.bean.productfac.lookup.Document_type;
import layout.bean.productfac.lookup.Filing_channel;
import layout.bean.productfac.lookup.Formula_cat;
import layout.bean.productfac.lookup.Lookup_value;
import layout.bean.productfac.lookup.Mortality_tli;
import layout.bean.productfac.lookup.Rate_layout;
import layout.bean.productfac.lookup.Tpd_tli;
import layout.bean.productfac.workflow.Coverage_task;
import service.MainInsureTypeService;
import service.baseplan.BasePlanBenefitOLSearchData;
import service.baseplan.BasePlanCreate;
import service.center.BundleData;
import service.center.CovCatSubCodeData;
import service.center.DataValuesSeparate;
import service.center.LookupValueGroupData;
import service.center.MainInsureDetailCreate;
import service.center.MainInsureDetailCreateOL;
import service.center.NonforfRateData;
import service.center.PremAssumpRateData;
import service.center.ProductCloneData;
import service.center.SubCatData;
import service.center.WorkFlowCoverage;
import service.clone.BenefitClone;
import service.fnc.ConstantRateCatIDValues;
import service.fnc.ConstantSubCatIDValues;
import service.fnc.ConstantValues;
import service.fnc.PDFFnc;

/**
 * Servlet implementation class BasePlanOL_Data_default_Servlet
 */
@WebServlet("/BasePlanOL_Data_default_Servlet")
public class BasePlanOL_Data_default_Servlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private String userId;
	private ArrayList<LookupCatAccessData> listLookupCatAccessData;
	private ArrayList<FormulaCatAccesData> listFormulaCatAccesData;   
    /**
     * @see HttpServlet#HttpServlet()
     */
    public BasePlanOL_Data_default_Servlet() {
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
	
	protected void processRequest(HttpServletRequest request, HttpServletResponse response)  throws ServletException, IOException 
	{
		try {
			HttpSession session = request.getSession();
			ConstantValues.USER_CODE = session.getAttribute("userID").toString();
			String getuserID = session.getAttribute("userID").toString();
			if (!getuserID.equals("")) {
				userId =  getuserID ;
			}else {
				System.out.println("================== NO USER ====================");
			}
			ConstantValues.PRODUCT_TYPE = "OL";
			ConstantValues.COV_IND_CODE = "BASE_PLAN";
			// session = request.getSession();
			response.setCharacterEncoding("UTF-8");
			response.setContentType("application/json");
			PrintWriter out 		= response.getWriter();
			String responseText		= "";
			String json 			= "";
			String method 			= request.getParameter("method");
			JSONObject responsejson = new JSONObject();
			String plan_type = "B";
			String type_id			= request.getParameter("type");
			String type_lv1			= request.getParameter("type_lv1");
			String type_lv2			= request.getParameter("type_lv2");
			JSONArray	pm_Type_premium_jsonArray		= new JSONArray();
			//method 		= "create_Base_Plan"; 	//testpostman
			String groupName			= request.getParameter("groupName");
			ConstantValues.GROUP_NAME 	= groupName;
			if (method.equals("select_insurance_type")) 
			{			
				MainInsureTypeService main_contract1 = new MainInsureTypeService();
				ArrayList<CoverageCatAccessData> main_contract1_arr = main_contract1.getmain_contract1(plan_type);
				//level 1
				JSONArray	main_contract1_jsonArray	= new JSONArray();
				for (int i = 0; i < main_contract1_arr.size(); i++) 
				{
					Coverage_cat coverage_cat = main_contract1_arr.get(i).getCoverageCat();
					JSONObject main_contract1_Channel = new JSONObject();
					main_contract1_Channel.put("pass",coverage_cat.getCov_cat_id());
					main_contract1_Channel.put("text", coverage_cat.getName_th());
					main_contract1_Channel.put("value", coverage_cat.getCat_code());
					main_contract1_jsonArray.put(main_contract1_Channel);
				}
				responsejson.put("main_contract1", main_contract1_jsonArray);
				responseText = responsejson.toString();
			}else if (method.equals("main_contract_level1")) 
			{
				//level 2
				MainInsureTypeService main_contract2 = new MainInsureTypeService();
				ArrayList<CoverageMainCovCat> main_contract2_arr = main_contract2.getmain_contract2(plan_type,type_id);			
				JSONArray	main_contract2_jsonArray	= new JSONArray();
				for (int i = 0; i < main_contract2_arr.size(); i++) 
				{
					Coverage_cat coverage_cat = main_contract2_arr.get(i).getCoverageCat();
					JSONObject main_contract2_Channel = new JSONObject();
					main_contract2_Channel.put("pass",coverage_cat.getCov_cat_id());
					main_contract2_Channel.put("text", coverage_cat.getName_th());
					main_contract2_Channel.put("value", coverage_cat.getCat_code());
					main_contract2_jsonArray.put(main_contract2_Channel);
				}
				responsejson.put("main_contract2", main_contract2_jsonArray);
				responseText = responsejson.toString();
				
			}else if (method.equals("main_contract_level3")) 
			{
				//level 3
				ArrayList<CoverageCovCat> main_contract3_arr;
				MainInsureTypeService main_contract3 = new MainInsureTypeService();
				main_contract3_arr = main_contract3.getmain_contract3(plan_type, type_lv1,type_lv2);
				
				JSONArray	main_contract3_jsonArray	= new JSONArray();
				for (int i = 0; i < main_contract3_arr.size(); i++) 
				{
					Coverage_cat coverage_cat = main_contract3_arr.get(i).getCoverageCat();
					JSONObject main_contract3_Channel = new JSONObject();
					main_contract3_Channel.put("pass",coverage_cat.getCov_cat_id());
					main_contract3_Channel.put("text", coverage_cat.getName_th());
					main_contract3_Channel.put("value", coverage_cat.getCat_code());
					main_contract3_jsonArray.put(main_contract3_Channel);
				}
				responsejson.put("main_contract3", main_contract3_jsonArray);
				responseText = responsejson.toString();
				
			} else if(method.equals("create_Base_Plan")) 
			{
				String menu_CL_1 						= request.getParameter("menu_CL_1");
				String menu_CL_2 						= request.getParameter("menu_CL_2");
				String menu_CL_3 						= request.getParameter("menu_CL_3");
				String menu_CL_4 						= request.getParameter("menu_CL_4");
				String menu_CL_5 						= request.getParameter("menu_CL_5");
    			String menu_CL_6 						= request.getParameter("menu_CL_6");
				String menu_CL_7 						= request.getParameter("menu_CL_7");
				String main_contracttype 				= request.getParameter("main_contracttype");
				JSONArray	calendar_jsonArray			= new JSONArray();
				JSONArray	protection_To_jsonArray		= new JSONArray();
				//TODO
				//MainInsureDetailCreateServiceBasePlanOL mdcs = new MainInsureDetailCreateServiceBasePlanOL ();
				MainInsureDetailCreateOL mdcs = new MainInsureDetailCreateOL();
				LookupValueGroupData lookupValueGroupData = new LookupValueGroupData();
				//Tab ข้อมูลทั่วไป Basic Information
				if (menu_CL_1.equals("true")) 
				{
					int tab = 1;
					String passInsurance = "";
					SubCatData scd = new SubCatData();
					if (main_contracttype.equals("1")) 
					{
						String main_contract1 		= request.getParameter("main_contract1");
						String main_contract2 		= request.getParameter("main_contract2");
						String main_contract3 		= request.getParameter("main_contract3");
						///Step 1//////////////////////Benz///11-07-2019///////////////////////////////////
						DataValuesSeparate dvs = new DataValuesSeparate();
						dvs.doAppPage(main_contract3, plan_type);	
								
						///Step 2//////////////////////////////////////////////////////////////////
								
						BasePlanCreate  basePlanCreate = new BasePlanCreate(main_contract1, main_contract2, main_contract3);
						Coverage co = basePlanCreate.getCoverage();
						passInsurance = co.getCov_code();
							
						ConstantValues.COV_CODE = passInsurance;
						ArrayList<String[]> listSearchSubCat_premium = new ArrayList<>();
						CovCatSubCodeData cscd	= new CovCatSubCodeData();
						listSearchSubCat_premium = cscd.searchSubCatByPmstdRateCatOL(main_contract3);
						JSONArray jsonArr_benefitsCoverage = new JSONArray(listSearchSubCat_premium);
						for (int i = 0; i < jsonArr_benefitsCoverage.length(); i++) 
						{
							JSONObject json_pm_Type_premium = new JSONObject();
							json_pm_Type_premium.put("name", jsonArr_benefitsCoverage.get(i));
							pm_Type_premium_jsonArray.put(json_pm_Type_premium);
						}
						///Step 3//////////////////////////////////////////////////////////////////	
						String[] appPage  		= new String[6]; 
								
						if (menu_CL_1.equals("true")) {
							appPage[0] 		= "1";
						}
						if (menu_CL_7.equals("true")) {
							appPage[1] 		= "2";
						}else {
							appPage[1] 		= "";
						}
						if (menu_CL_2.equals("true")) {
							appPage[2] 		= "3";
						}else {
							appPage[2] 		= "";
						}
						if (menu_CL_3.equals("true")) {
							appPage[3] 		= "4";
						}else {
							appPage[3] 		= "";
						}
						if (menu_CL_4.equals("true")) {
							appPage[4] 		= "5";
						}else {
							appPage[4] 		= "";
						}
						if (menu_CL_5.equals("true")) {
							appPage[5] 		= "6";
						}else {
							appPage[5] 		= "";
						}
						dvs.doConstantAppPageBasePlan(passInsurance, appPage);
						/////////////////////////////////////////////////////////////////////////////////
						////Benz 11-09-2019 New set Status
						WorkFlowCoverage wfc = new WorkFlowCoverage();
						//////////////////////////Row1
						Coverage_task  setcovtask = new Coverage_task();
						setcovtask.setCov_code(passInsurance);
						setcovtask.setDepartment(ConstantValues.GROUP_NAME);
						setcovtask.setApprove_status("NEW");
						setcovtask.setUser_code(userId);
						setcovtask.setUpdate_time(PDFFnc.currentTimeStamp());
						wfc.doCoverageTask(setcovtask);
						//////////////////////////Row2
						setcovtask = new Coverage_task();
						setcovtask.setCov_code(passInsurance);
						setcovtask.setDepartment("RP");
						setcovtask.setApprove_status("NEW");
						setcovtask.setUser_code(userId);
						setcovtask.setUpdate_time(PDFFnc.currentTimeStamp());
						wfc.doCoverageTask(setcovtask);
						//////////////Benz Check Row Task 25-11-2019
								
						JSONArray  basic_Info_jsonArray	= new JSONArray();
						JSONObject json_basic_Info 		= new JSONObject();
						ArrayList<Coverage_task> arr_Cov_Task = wfc.searchCoverageTask();
						if (arr_Cov_Task.size() < 2) {
							json_basic_Info.put("status",false);
							basic_Info_jsonArray.put(json_basic_Info);
						}
						else {
							json_basic_Info.put("status",true);
							basic_Info_jsonArray.put(json_basic_Info);
						}
						responsejson.put("check",basic_Info_jsonArray);
						responseText = responsejson.toString();
					}
					else if(main_contracttype.equals("Clone")) 
					{
						String cov_code 						= request.getParameter("cov_code");
						Coverage coverage = new Coverage();
						ProductCloneData productCloneData 	= new ProductCloneData();
						coverage = productCloneData.cloneCoverage(cov_code);
						//Benefit
						BenefitClone benefitClone = new BenefitClone();
						System.out.println("Clone:"+cov_code+"|"+"New:"+coverage.getCov_code());
						benefitClone.clondBenefit(cov_code, coverage.getCov_code());
						passInsurance = coverage.getCov_code();
						ConstantValues.COV_CODE = passInsurance;
					}
					else 
					{
						///pun 17-10-2019 set cov_code in Policy Wording
						String cov_code			= request.getParameter("cov_code");
						ConstantValues.COV_CODE = cov_code;
					}	
						/////////////////////////////////////////////////////////////////
						//TODO
						/*ArrayList<LookupCatAccessData> datareturn;
						datareturn = mdcs.BasicInfo_lookup(tab);*/
						mdcs.createDetail(tab);
						//ArrayList<LookupCatAccessData> datareturn = mdcs.getListLookupCatAccessData();
						this.listLookupCatAccessData = mdcs.getListLookupCatAccessData();
						
						JSONArray	mode_jsonArray				= new JSONArray();
						JSONArray	cal_Age_jsonArray			= new JSONArray();
						JSONArray	insurance_premium_jsonArray	= new JSONArray();
						JSONArray	protect_Type_jsonArray		= new JSONArray();
						JSONArray	contract_Type_jsonArray		= new JSONArray();
						JSONArray	table_Death_jsonArray		= new JSONArray();
						JSONArray	table_Disability_jsonArray	= new JSONArray();
						JSONArray	table_Death_jsonArray2		= new JSONArray();
						JSONArray	table_Disability_jsonArray2	= new JSONArray();
						JSONArray	table_cal_jsonArray			= new JSONArray();
						
						ArrayList<LookupValueGroupAccessData> datareturn_Lookup_groupAgeUnit =  lookupValueGroupData.getListGroup_Age_Unit();
						//calendar
						for (LookupValueGroupAccessData lookupValueGroupAccessData : datareturn_Lookup_groupAgeUnit) 
						{
							JSONObject json_calendar = new JSONObject();
							json_calendar.put("pass",  lookupValueGroupAccessData.getLookup_enum_value());
							json_calendar.put("text",  lookupValueGroupAccessData.getLookup_value_name());
							calendar_jsonArray.put(json_calendar);
						}
							
						for (int i = 0 ; i < listLookupCatAccessData.size(); i++) 
						{
							//mode
							LookupCatAccessData lookupCatAccessData = listLookupCatAccessData.get(i); 
							if (lookupCatAccessData.getLookupCat().getEnum_name().equals("lu_mode")) 
							{
								ArrayList<Lookup_value> listLookupValue = lookupCatAccessData.getListLookupValue();
								for(int ii = 0 ; ii < listLookupValue.size(); ii++)
								{
									Lookup_value lookup_value = listLookupValue.get(ii);
									JSONObject json_Mode = new JSONObject();
									json_Mode.put("pass", lookup_value.getSystem_code());
									json_Mode.put("text", lookup_value.getName_th());
									json_Mode.put("value",lookup_value.getEnum_value());
									mode_jsonArray.put(json_Mode);
								}
							}
							//เบี้ยประกัน
							else if (lookupCatAccessData.getLookupCat().getEnum_name().equals("lu_prem_rule")) 
							{
								ArrayList<Lookup_value> listLookupValue = lookupCatAccessData.getListLookupValue();
								for(int ii = 0 ; ii < listLookupValue.size(); ii++)
								{
									Lookup_value lookup_value = listLookupValue.get(ii);
									JSONObject json_insurance_premium = new JSONObject();
									json_insurance_premium.put("pass",lookup_value.getEnum_value());
									json_insurance_premium.put("text", lookup_value.getName_th());
									insurance_premium_jsonArray.put(json_insurance_premium);
								}
							}
							//protect_Type	(ประเภทความคุ้มครอง)
							else if (lookupCatAccessData.getLookupCat().getEnum_name().equals("lu_cov_unit_type")) 
							{
								ArrayList<Lookup_value> listLookupValue = lookupCatAccessData.getListLookupValue();
								for(int ii = 0 ; ii < listLookupValue.size(); ii++)
								{
									Lookup_value lookup_value = listLookupValue.get(ii);
									JSONObject json_protect_Type = new JSONObject();
									json_protect_Type.put("pass", lookup_value.getEnum_value());
									json_protect_Type.put("text", lookup_value.getName_th());
									protect_Type_jsonArray.put(json_protect_Type);
								}
							}
							//ประเภทสัญญา
							else if (lookupCatAccessData.getLookupCat().getEnum_name().equals("lu_contract_term")) 
							{
								ArrayList<Lookup_value> listLookupValue = lookupCatAccessData.getListLookupValue();
								for (int ii = 0 ; ii < listLookupValue.size(); ii++) 
								{
									Lookup_value lookup_value = listLookupValue.get(ii);
									JSONObject json_contract_Type = new JSONObject();
									json_contract_Type.put("pass", lookup_value.getEnum_value());
									json_contract_Type.put("text", lookup_value.getName_th());
									contract_Type_jsonArray.put(json_contract_Type);
								}
							}
							//protection_To
							else if (lookupCatAccessData.getLookupCat().getEnum_name().equals("lu_period_cal_meth")) 
							{
								ArrayList<Lookup_value> listLookupValue = lookupCatAccessData.getListLookupValue();
								for (int ii = 0 ; ii < listLookupValue.size(); ii++) 
								{
									Lookup_value lookup_value = listLookupValue.get(ii);
									JSONObject json_calendar = new JSONObject();
									json_calendar.put("pass",  lookup_value.getEnum_value());
									json_calendar.put("text",  lookup_value.getName_th());
									protection_To_jsonArray.put(json_calendar);
								}
							}
							////เพศ
							else if(lookupCatAccessData.getLookupCat().getEnum_name().equals("lu_gender")) 
							{
								String text = "";
								ArrayList<Lookup_value> listLookupValue = lookupCatAccessData.getListLookupValue();
								for(int ii = 0 ; ii < listLookupValue.size(); ii++)
								{
									Lookup_value lookup_value = listLookupValue.get(ii);
									text = lookup_value.getName_th().equals("ชายหรือหญิง") ? "รวม" : lookup_value.getName_th();  
									
									//table_Death (ตารางมรณะที่ใช้ในการคำนวณอัตราเบี้ย)
									JSONObject json_table_Death = new JSONObject();
									json_table_Death.put("pass", lookup_value.getEnum_value());
									json_table_Death.put("text", text);
									table_Death_jsonArray.put(json_table_Death);
										
									//table_Disability (ตารางทุพพลภาพที่ใช้ในการคำนวณอัตราเบี้ย)
									JSONObject json_table_Disability = new JSONObject();
									json_table_Disability.put("pass", lookup_value.getEnum_value());
									json_table_Disability.put("text", text);
									table_Disability_jsonArray.put(json_table_Disability);
								}
							}
							//cal_Age
							else if (lookupCatAccessData.getLookupCat().getEnum_name().equals("lu_age_calc_meth")) 
							{
								ArrayList<Lookup_value> listLookupValue = lookupCatAccessData.getListLookupValue();
								for (int ii = 0 ; ii < listLookupValue.size(); ii++) 
								{
									Lookup_value lookup_value = listLookupValue.get(ii);
									JSONObject json_cal_Age = new JSONObject();
									json_cal_Age.put("pass", lookup_value.getEnum_value());
									json_cal_Age.put("text", lookup_value.getName_th());
									cal_Age_jsonArray.put(json_cal_Age);
								}
							}
							////////รายการตารางที่ใช้ในการคำนวณเบี้ย
							/*if(datareturn.get(i).getLookupCat().getEnum_name().equals("lu_prem_assump_type")) {
								String text = "";
								for(int ii = 0 ; ii < datareturn.get(i).getListLookupValue().size(); ii++)
								{
									JSONObject json_table_cal = new JSONObject();
									json_table_cal.put("pass", datareturn.get(i).getListLookupValue().get(ii).getEnum_value());
									json_table_cal.put("text", datareturn.get(i).getListLookupValue().get(ii).getName_th());
									
									table_cal_jsonArray.put(json_table_cal);
								}
							}*/
						}
							
							ArrayList<MortalityTliAccessData> datareturn2 = mdcs.getListMortalityTli();
							for (int i = 0; i < datareturn2.size(); i++) 
							{
								Mortality_tli mortality_tli = datareturn2.get(i).getMortalityTli();
								JSONObject json_table_Death2 = new JSONObject();
								json_table_Death2.put("pass", mortality_tli.getMort_tli_id());
								json_table_Death2.put("text", mortality_tli.getName_th());
								table_Death_jsonArray2.put(json_table_Death2);
							}
							
							ArrayList<TpdTiliAccessData> datareturn3 = mdcs.getListTpdTiliAccessData();
							for (int i = 0; i < datareturn3.size(); i++) 
							{
								Tpd_tli tpd_tli = datareturn3.get(i).getTpdTli();
								JSONObject json_table_Disability2 = new JSONObject();
								json_table_Disability2.put("pass", tpd_tli.getTpd_tli_id());
								json_table_Disability2.put("text", tpd_tli.getName_th());
								table_Disability_jsonArray2.put(json_table_Disability2);
							}
							//TODO
							//*Filing Channel
							/*ArrayList<FilingChannelAccessData> datareturn4;
							datareturn4 = mdcs.getfiling_Channel();*/
							ArrayList<FilingChannelAccessData> datareturn4 = mdcs.getListFilingChannelAccessData();
							JSONArray	filing_Channel_jsonArray	= new JSONArray();
							for (int i = 0; i < datareturn4.size(); i++) 
							{
								Filing_channel filing_channel = datareturn4.get(i).getFilingChannel();
								JSONObject json_filing_Channel = new JSONObject();
								json_filing_Channel.put("pass", Integer.toString(i+1));
								json_filing_Channel.put("text", filing_channel.getName_th());
								filing_Channel_jsonArray.put(json_filing_Channel);
							}
							
							ArrayList<String[]> listtb_TaxReduce 	= new ArrayList<>();//24,25
							listtb_TaxReduce 						= scd.searchSubCatByTaxRateCatOL();
							JSONArray	tb_TaxReduce_jsonArray1		= new JSONArray();	
							JSONArray	tb_TaxReduce_Type8			= new JSONArray();	
							JSONArray	tb_TaxReduce_Type9			= new JSONArray();	
							JSONArray	tb_layoutType8_jsonArray 	= new JSONArray();
							JSONArray	tb_layoutType9_jsonArray 	= new JSONArray();
							
							JSONArray	tb_layoutdet1_jsonArray 	= new JSONArray();
							JSONArray	tb_layoutdet2_jsonArray 	= new JSONArray();
							JSONObject	tb_layoutdet_JSONObject 	= new JSONObject();
							JSONObject tb_TaxReduceAll_JSONObject 	= new JSONObject();
							JSONObject json_rateLayoutTax 			= new JSONObject();

							String[] rate_Type 						= ConstantRateCatIDValues.getTaxRateCatOl();
							MainInsureDetailCreate mdc 				= new MainInsureDetailCreate ();
							ArrayList<RateCatAccessData> 			datareturnTax;
							String[] str_arr_Tax = new String[2]; 

							
							if (listtb_TaxReduce.size() != 0) 
							{
								int 	check_Duo_type8 	= 1;
								int 	check_Duo_type9 	= 1;
								for (int i = 0; i < listtb_TaxReduce.size(); i++) 
								{
									if(listtb_TaxReduce.get(i)[3].toString().equals(rate_Type[0])) 
									{
										JSONObject json_layout_premium = new JSONObject();
										json_layout_premium.put("layout",listtb_TaxReduce.get(i)[0]);
										json_layout_premium.put("layout_id",listtb_TaxReduce.get(i)[4]);
										tb_layoutType8_jsonArray.put(json_layout_premium);
										tb_layoutdet2_jsonArray 	= new JSONArray();
										if (check_Duo_type8 == 1) 
										{
											JSONObject json_tb_Insurance_premium = new JSONObject();
											json_tb_Insurance_premium.put("sub_rate_cat",listtb_TaxReduce.get(i)[1]);
											json_tb_Insurance_premium.put("text",listtb_TaxReduce.get(i)[2]);
											json_tb_Insurance_premium.put("rate_cat_id",listtb_TaxReduce.get(i)[3]);
											/////////////////Benz 29-11-2019 เพิ่ม การดึง lookup เพิ่มเติม RateLaoutDet
											str_arr_Tax[0]	 = listtb_TaxReduce.get(i)[3];
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
											json_tb_Insurance_premium.put("ratelayoutdet", tb_layoutdet2_jsonArray);
											json_tb_Insurance_premium.put("file",tb_layoutType8_jsonArray);
											tb_TaxReduce_Type8.put(json_tb_Insurance_premium);
										}else {
											tb_TaxReduce_Type8	= new JSONArray();	
											JSONObject json_tb_Insurance_premium = new JSONObject();
											json_tb_Insurance_premium.put("sub_rate_cat",listtb_TaxReduce.get(i)[1]);
											json_tb_Insurance_premium.put("text",listtb_TaxReduce.get(i)[2]);
											json_tb_Insurance_premium.put("rate_cat_id",listtb_TaxReduce.get(i)[3]);
											/////////////////Benz 29-11-2019 เพิ่ม การดึง lookup เพิ่มเติม RateLaoutDet
											str_arr_Tax[0]	 = listtb_TaxReduce.get(i)[3];
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
											json_tb_Insurance_premium.put("ratelayoutdet", tb_layoutdet2_jsonArray);
											json_tb_Insurance_premium.put("file",tb_layoutType8_jsonArray);
											tb_TaxReduce_Type8.put(json_tb_Insurance_premium);
										}
										check_Duo_type8 ++;
									}else if(listtb_TaxReduce.get(i)[3].toString().equals(rate_Type[1])) {
										JSONObject json_layout_premium = new JSONObject();
										json_layout_premium.put("layout",listtb_TaxReduce.get(i)[0]);
										json_layout_premium.put("layout_id",listtb_TaxReduce.get(i)[4]);
										tb_layoutType9_jsonArray.put(json_layout_premium);
										tb_layoutdet2_jsonArray 	= new JSONArray();
										if (check_Duo_type9 == 1) {
											JSONObject json_tb_Insurance_premium = new JSONObject();
											json_tb_Insurance_premium.put("sub_rate_cat",listtb_TaxReduce.get(i)[1]);
											json_tb_Insurance_premium.put("text",listtb_TaxReduce.get(i)[2]);
											json_tb_Insurance_premium.put("rate_cat_id",listtb_TaxReduce.get(i)[3]);
											/////////////////Benz 29-11-2019 เพิ่ม การดึง lookup เพิ่มเติม RateLaoutDet
											str_arr_Tax[0]	 = listtb_TaxReduce.get(i)[3];
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
											json_tb_Insurance_premium.put("ratelayoutdet", tb_layoutdet2_jsonArray);
											json_tb_Insurance_premium.put("file",tb_layoutType9_jsonArray);
											tb_TaxReduce_Type9.put(json_tb_Insurance_premium);
										}else {
											tb_TaxReduce_Type9	= new JSONArray();	
											JSONObject json_tb_Insurance_premium = new JSONObject();
											json_tb_Insurance_premium.put("sub_rate_cat",listtb_TaxReduce.get(i)[1]);
											json_tb_Insurance_premium.put("text",listtb_TaxReduce.get(i)[2]);
											json_tb_Insurance_premium.put("rate_cat_id",listtb_TaxReduce.get(i)[3]);
											/////////////////Benz 29-11-2019 เพิ่ม การดึง lookup เพิ่มเติม RateLaoutDet
													str_arr_Tax[0]	 = listtb_TaxReduce.get(i)[3];
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
											json_tb_Insurance_premium.put("file",tb_layoutType9_jsonArray);
											json_tb_Insurance_premium.put("ratelayoutdet", tb_layoutdet2_jsonArray);
											tb_TaxReduce_Type9.put(json_tb_Insurance_premium);
										}
										check_Duo_type9 ++;
									}
								}
								
								
								
								
								tb_TaxReduceAll_JSONObject.put("type", tb_TaxReduce_Type8);
								tb_TaxReduceAll_JSONObject.put("type2", tb_TaxReduce_Type9);
								tb_TaxReduce_jsonArray1.put(tb_TaxReduceAll_JSONObject);
							}
							//TODO
							/*ArrayList<PremAssumpRateGroupAccessData> datareturn_newOL;
							datareturn_newOL = mdcs.getListPremAssumpRateGroupAccessData();*/
							ArrayList<PremAssumpRateGroupAccessData> datareturn_newOL = mdcs.getListPremAssumpRateGroup();
							JSONArray	rateLayout_jsonArray 	= new JSONArray();
							for (int i = 0; i < datareturn_newOL.size(); i++) {	
								rateLayout_jsonArray 	= new JSONArray();
								JSONObject json_table_cal = new JSONObject();
								json_table_cal.put("pass", datareturn_newOL.get(i).getLookup_value().getEnum_value());
								json_table_cal.put("text", datareturn_newOL.get(i).getLookup_value().getName_th());
								//
								for (int ii = 0; ii < datareturn_newOL.get(i).getListRateLayout().size(); ii++) {
									JSONObject json_RateLayout = new JSONObject();
									json_RateLayout.put("file_name_pattern", datareturn_newOL.get(i).getListRateLayout().get(ii).getFile_name_pattern());
									json_RateLayout.put("rate_cat_id", datareturn_newOL.get(i).getListRateLayout().get(ii).getRate_cat_id());
									json_RateLayout.put("sub_cat_id", datareturn_newOL.get(i).getListRateLayout().get(ii).getSub_cat_id());
									json_RateLayout.put("name_en", datareturn_newOL.get(i).getListRateLayout().get(ii).getName_en());
									json_RateLayout.put("rate_layout_id", datareturn_newOL.get(i).getListRateLayout().get(ii).getRate_layout_id());
									rateLayout_jsonArray.put(json_RateLayout);
								}
								json_table_cal.put("rateLayout", rateLayout_jsonArray);
								
								table_cal_jsonArray.put(json_table_cal);
							}
							///////////////////////////////////////
							JSONArray  basic_Info_jsonArray	= new JSONArray();
							JSONObject json_basic_Info = new JSONObject();
							json_basic_Info.put("passInsurance",passInsurance);
							json_basic_Info.put("mode",mode_jsonArray);
							json_basic_Info.put("filing_Channel",filing_Channel_jsonArray);
							json_basic_Info.put("cal_Age",cal_Age_jsonArray);
							json_basic_Info.put("insurance_premium",insurance_premium_jsonArray);
							json_basic_Info.put("protect_Type",protect_Type_jsonArray);
							json_basic_Info.put("contract_Type",contract_Type_jsonArray);
							json_basic_Info.put("calendar",calendar_jsonArray);
							//json_basic_Info.put("pay_Separately",pay_Separately_jsonArray);
							json_basic_Info.put("table_Death",table_Death_jsonArray);
							json_basic_Info.put("table_Death2",table_Death_jsonArray2);
							json_basic_Info.put("table_Disability",table_Disability_jsonArray);
							json_basic_Info.put("table_Disability2",table_Disability_jsonArray2);
							json_basic_Info.put("table_TaxReduce",tb_TaxReduce_jsonArray1);
							json_basic_Info.put("table_cal",table_cal_jsonArray);
							
							
							basic_Info_jsonArray.put(json_basic_Info);
							//
							responsejson.put("Tab_Basic_Information",basic_Info_jsonArray);
							responseText = responsejson.toString();
						}
						//TODO
						//Policy Wording
						if (menu_CL_7.equals("true")) 
						{
							JSONArray  tb_Policy_Wording_jsonArray	= new JSONArray();
							int tab = 2;
							/*ArrayList<Document_type> datareturn;
							datareturn = mdcs.Policy_Wording(tab);*/
							mdcs.createDetail(tab);
							ArrayList<Document_type> datareturn = mdcs.getListPolicyWordingAccessData();
							for (int i = 0 ; i < datareturn.size(); i++) {
								JSONObject json_tb_Policy_Wording = new JSONObject();
								json_tb_Policy_Wording.put("pass", datareturn.get(i).getDoc_type_id());
								json_tb_Policy_Wording.put("text", datareturn.get(i).getName_th());
								tb_Policy_Wording_jsonArray.put(json_tb_Policy_Wording);
							}
							responsejson.put("Tab_Policy_Wording",tb_Policy_Wording_jsonArray);
							//
							responseText = responsejson.toString();
						}
						//TODO
						//Tab การใช้สิทธิ์ตามกรมธรรม์
						if (menu_CL_2.equals("true")) 
						{
							int tab = 3;
							/*ArrayList<FormulaCatAccesData> listFormulaCatAccesData;
							listFormulaCatAccesData = mdcs.exercise_rights_insurance(tab);*/
							mdcs.createDetail(tab);
							//ArrayList<FormulaCatAccesData> listFormulaCatAccesData = mdcs.getlookupFormula();
							mdcs.searchFomula();
							this.listFormulaCatAccesData = mdcs.getlookupFormula();
							JSONArray	cash_surr_jsonArray = new JSONArray();
							JSONArray	eti_jsonArray 	= new JSONArray();
							JSONArray	rpu_surr_jsonArray 	= new JSONArray();
							
							for (int i = 0; i < listFormulaCatAccesData.size(); i++) 
							{
								Formula_cat formula_cat = listFormulaCatAccesData.get(i).getFormulaCat();
								if (formula_cat.getFormula_cat_id() == 100) 
								{
									for (int ii = 0 ; ii < listFormulaCatAccesData.get(i).getListFormula().size(); ii++)
									{
										JSONObject json_fomula = new JSONObject();
										json_fomula.put("pass",  listFormulaCatAccesData.get(i).getListFormula().get(ii).getFormula_id());
										json_fomula.put("text",  listFormulaCatAccesData.get(i).getListFormula().get(ii).getName_th());
										cash_surr_jsonArray.put(json_fomula);
									}
								} 
								else if (formula_cat.getFormula_cat_id() == 101) 
								{
									for (int ii = 0 ; ii < listFormulaCatAccesData.get(i).getListFormula().size(); ii++) {
										JSONObject json_fomula = new JSONObject();
										json_fomula.put("pass",  listFormulaCatAccesData.get(i).getListFormula().get(ii).getFormula_id());
										json_fomula.put("text",  listFormulaCatAccesData.get(i).getListFormula().get(ii).getName_th());
										eti_jsonArray.put(json_fomula);
									}	
								}
								else if (formula_cat.getFormula_cat_id() == 102) 
								{
									for (int ii = 0 ; ii < listFormulaCatAccesData.get(i).getListFormula().size(); ii++) {
										JSONObject json_fomula = new JSONObject();
										json_fomula.put("pass",  listFormulaCatAccesData.get(i).getListFormula().get(ii).getFormula_id());
										json_fomula.put("text",  listFormulaCatAccesData.get(i).getListFormula().get(ii).getName_th());
										rpu_surr_jsonArray.put(json_fomula);
									}	
								}
							}
							JSONArray exercise_rights_insurance_jsonArray	= new JSONArray();
							JSONObject exercise_rights_insurance = new JSONObject();
							//Casg_Surr
							exercise_rights_insurance.put("CASH_SURR", cash_surr_jsonArray);
							//ETI
							exercise_rights_insurance.put("ETI", eti_jsonArray);
							//RPU
							exercise_rights_insurance.put("RPU", rpu_surr_jsonArray);
							//calendar
							exercise_rights_insurance.put("calendar", calendar_jsonArray);
							//protection_To
							exercise_rights_insurance.put("protection_To", protection_To_jsonArray);
							
							exercise_rights_insurance_jsonArray.put(exercise_rights_insurance);
							
							responsejson.put("Tab_exercise_rights_insurance",exercise_rights_insurance_jsonArray);
							//
							responseText = responsejson.toString();
						}
						//TODO
						//Tab การคำนวนเบี้ยประกัน
						if (menu_CL_3.equals("true")) 
						{
							int tab = 4;
							/*ArrayList<AgeBandAccessData> datareturn1;
							datareturn1 = mdcs.Cal_insurance(tab);*/
							mdcs.createDetail(tab);
							ArrayList<AgeBandAccessData> datareturn1 = mdcs.getListAgeBandAccessData();
							// Age Band
							JSONArray	age_Band_jsonArray	= new JSONArray();						
							for (int i = 0; i < datareturn1.size(); i++) {
								List<String> age_range_arr = new ArrayList<String>();
								JSONObject json_age_Band = new JSONObject();
								json_age_Band.put("pass", Integer.toString(i+1));
								json_age_Band.put("Band", datareturn1.get(i).getAgeBand().getAge_band_code());
								for (int ii = 0; ii < datareturn1.get(i).getListAgeBandDet().size(); ii++) {
									age_range_arr.add(datareturn1.get(i).getListAgeBandDet().get(ii).getMin_age()+"-"+datareturn1.get(i).getListAgeBandDet().get(ii).getMax_age());
								}
								json_age_Band.put("text",age_range_arr);
								age_Band_jsonArray.put(json_age_Band);
							}
							//TODO
							//เบี้ยมาตรฐาน
							//select box ตารางเบี้ยประกัน
							ArrayList<RateCatAccessData> datareturn2 = mdcs.getListRateCatAccessData(); //mdcs.geRateCat();
							ArrayList<RateCatAccessData> datareturn2_1;
							JSONObject json_cal_insurance_premiums = new JSONObject();
							
							for (int i = 0 ; i < datareturn2.size(); i++) { //26,28,29,30,31,32
								JSONArray tb_Insurance_premium_jsonArray	= new JSONArray();
								JSONObject rate_cat_id_JSONObject = new JSONObject();
								int rate_cat_id = 0;
								if (i == 0 ) {
									rate_cat_id = datareturn2.get(i).getRateCat().getRate_cat_id();
									rate_cat_id_JSONObject.put("rate_cat_id_specific", rate_cat_id);
										datareturn2_1 = mdcs.getListRateCatAgeBandPMStandard();//mdcs.getRateCatAgebandPMStandard();//27
										//for (int l = 0 ; l < datareturn2_1.size(); l++) {
											rate_cat_id = datareturn2_1.get(0).getRateCat().getRate_cat_id();
											rate_cat_id_JSONObject.put("rate_cat_id_age_Band", rate_cat_id);
										//}
								}else if (i == 2) {
									rate_cat_id = datareturn2.get(i).getRateCat().getRate_cat_id();
									rate_cat_id_JSONObject.put("rate_cat_id_specific", rate_cat_id);
										datareturn2_1 = mdcs.getListRateCatAgeBandPMStandard();//mdcs.getRateCatAgebandPMStandard();//40
										//for (int l = 0 ; l < datareturn2_1.size(); l++) {
											rate_cat_id = datareturn2_1.get(1).getRateCat().getRate_cat_id();
											rate_cat_id_JSONObject.put("rate_cat_id_age_Band", rate_cat_id);
										//}
								}else if (i == 6) {
									rate_cat_id = datareturn2.get(i).getRateCat().getRate_cat_id();
									rate_cat_id_JSONObject.put("rate_cat_id_specific", rate_cat_id);
										datareturn2_1 = mdcs.getListRateCatAgeBandPMStandard();//mdcs.getRateCatAgebandPMStandard();//40
										//for (int l = 0 ; l < datareturn2_1.size(); l++) {
											rate_cat_id = datareturn2_1.get(2).getRateCat().getRate_cat_id();
											rate_cat_id_JSONObject.put("rate_cat_id_age_Band", rate_cat_id);
										//}
								}else if (i == 7) {
									rate_cat_id = datareturn2.get(i).getRateCat().getRate_cat_id();
									rate_cat_id_JSONObject.put("rate_cat_id_specific", rate_cat_id);
										datareturn2_1 = mdcs.getListRateCatAgeBandPMStandard();//mdcs.getRateCatAgebandPMStandard();//40
										//for (int l = 0 ; l < datareturn2_1.size(); l++) {
											rate_cat_id = datareturn2_1.get(3).getRateCat().getRate_cat_id();
											rate_cat_id_JSONObject.put("rate_cat_id_age_Band", rate_cat_id);
										//}
								}else {
										rate_cat_id = datareturn2.get(i).getRateCat().getRate_cat_id();
										rate_cat_id_JSONObject.put("rate_cat_id_specific", rate_cat_id);
										rate_cat_id_JSONObject.put("rate_cat_id_age_Band", "");
								}
								tb_Insurance_premium_jsonArray.put(rate_cat_id_JSONObject);
								/*for (int ii = 0 ; ii < datareturn2.get(i).getListRateLayout().size(); ii++) {
											JSONObject json_tb_Insurance_premium = new JSONObject();
											
											if (datareturn2.get(i).getRateCat().getRate_cat_id() == datareturn2.get(i).getListRateLayout().get(ii).getRateLayout().getRate_cat_id()) {
												String text		= "";
												String layout 	= "";
												text =	datareturn2.get(i).getListRateLayout().get(ii).getRateLayout().getName_th().replace(datareturn2.get(i).getRateCat().getName_th(), "");
												json_tb_Insurance_premium.put("pass",Integer.toString(ii+1));
												json_tb_Insurance_premium.put("text",text);
												json_tb_Insurance_premium.put("sub_rate_cat", datareturn2.get(i).getListRateLayout().get(ii).getRateLayout().getSub_cat_id());
												layout = datareturn2.get(i).getListRateLayout().get(ii).getRateLayout().getFile_name_pattern();
												json_tb_Insurance_premium.put("layout",layout);
												arr_layout_jsonArray.put(json_tb_Insurance_premium);
												arr_layout_JSONObject.put("pattern", arr_layout_jsonArray);
											}
									}
								tb_Insurance_premium_jsonArray.put(arr_layout_JSONObject);*/
								json_cal_insurance_premiums.put("premiums_cal_layout_"+i,tb_Insurance_premium_jsonArray);
						}
							/////////////////////////////////////GetSubCat//////////
							SubCatData scd = new SubCatData();
							ArrayList<String[]> listSubCat = new ArrayList<>();//26,27
							ArrayList<String[]> listExtra_Premiums = new ArrayList<>();//30
							ArrayList<String[]> listEm_Age = new ArrayList<>();//31
							ArrayList<String[]> listSA_Rate = new ArrayList<>();//32
							//เพิ่มเติมจาก CL
							ArrayList<String[]> listDis_Sa = new ArrayList<>();//28
							ArrayList<String[]> listCal_Sa = new ArrayList<>();//29,40
							
							listSubCat 			= scd.searchSubCatByPmstdRateCatOL();
							listExtra_Premiums	= scd.searchSubCatByPmstpRateCatOL();
							listEm_Age			= scd.searchSubCatByPmbtaRateCatOL();
							listSA_Rate			= scd.searchSubCatByCpdRateCatOL();
							//เพิ่มเติมจาก CL
							listDis_Sa			= scd.searchSubCatByDitRateCatOL();
							listCal_Sa			= scd.searchSubCatByCipRateCatOL();
							
							String[] rate_Type = ConstantRateCatIDValues.getPmstdRateCatOl();
							
							String[] rate_Type_Sa = ConstantRateCatIDValues.getCipRateCatOl();
							
							JSONArray	selectbox_Std_premiums_jsonArray	= new JSONArray();
							JSONArray	tb_specific							= new JSONArray();	
							JSONArray	tb_age_band							= new JSONArray();	
							JSONObject tb_SubCatAll_JSONObject 				= new JSONObject();
							
							JSONObject json_rateLayoutTax 					= new JSONObject();
							JSONArray	tb_layoutdet1_jsonArray 			= new JSONArray();
							JSONArray	tb_layoutdet2_jsonArray 			= new JSONArray();
							JSONObject	tb_layoutdet_JSONObject 			= new JSONObject();
							
							MainInsureDetailCreate mdc 				= new MainInsureDetailCreate ();
							ArrayList<RateCatAccessData> 			datareturnTax;
							String[] str_arr_Tax = new String[2]; 
							
							if (listSubCat.size() != 0) {
								for (int i = 0; i < listSubCat.size(); i++) {
									if(listSubCat.get(i)[3].toString().equals(rate_Type[0])) {
											tb_layoutdet2_jsonArray 	= new JSONArray();
											JSONObject json_tb_Insurance_premium = new JSONObject();
											json_tb_Insurance_premium.put("sub_rate_cat",listSubCat.get(i)[1]);
											json_tb_Insurance_premium.put("text",listSubCat.get(i)[2]);
											json_tb_Insurance_premium.put("rate_cat_id",listSubCat.get(i)[3]);
											/////////////////Benz 29-11-2019 เพิ่ม การดึง lookup เพิ่มเติม RateLaoutDet
											str_arr_Tax[0]	 = listSubCat.get(i)[3];
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
											json_tb_Insurance_premium.put("ratelayoutdet", tb_layoutdet2_jsonArray);
											json_tb_Insurance_premium.put("layout",listSubCat.get(i)[0]);
											json_tb_Insurance_premium.put("layout_id",listSubCat.get(i)[4]);
											tb_specific.put(json_tb_Insurance_premium);
									}else if (listSubCat.get(i)[3].toString().equals(rate_Type[1])) {
											tb_layoutdet2_jsonArray 	= new JSONArray();
											JSONObject json_tb_Insurance_premium = new JSONObject();
											json_tb_Insurance_premium.put("sub_rate_cat",listSubCat.get(i)[1]);
											json_tb_Insurance_premium.put("text",listSubCat.get(i)[2]);
											json_tb_Insurance_premium.put("rate_cat_id",listSubCat.get(i)[3]);
											/////////////////Benz 29-11-2019 เพิ่ม การดึง lookup เพิ่มเติม RateLaoutDet
											str_arr_Tax[0]	 = listSubCat.get(i)[3];
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
											json_tb_Insurance_premium.put("ratelayoutdet", tb_layoutdet2_jsonArray);
											json_tb_Insurance_premium.put("layout",listSubCat.get(i)[0]);
											json_tb_Insurance_premium.put("layout_id",listSubCat.get(i)[4]);
											tb_age_band.put(json_tb_Insurance_premium);
									}
								}
								tb_SubCatAll_JSONObject.put("specific", tb_specific);
								tb_SubCatAll_JSONObject.put("age_band", tb_age_band);
								selectbox_Std_premiums_jsonArray.put(tb_SubCatAll_JSONObject);
							}
							// P
							JSONArray	selectbox_Std_premiums_jsonArray_P		= new JSONArray();
							JSONArray	tb_specific_P							= new JSONArray();	
							JSONArray	tb_age_band_P							= new JSONArray();	
							JSONObject tb_SubCatAll_JSONObject_P 				= new JSONObject();
							if (listSubCat.size() != 0) {
								for (int i = 0; i < listSubCat.size(); i++) {
									if(listSubCat.get(i)[3].toString().equals(rate_Type[2])) {
											tb_layoutdet2_jsonArray 	= new JSONArray();
											JSONObject json_tb_Insurance_premium = new JSONObject();
											json_tb_Insurance_premium.put("sub_rate_cat",listSubCat.get(i)[1]);
											json_tb_Insurance_premium.put("text",listSubCat.get(i)[2]);
											json_tb_Insurance_premium.put("rate_cat_id",listSubCat.get(i)[3]);
											/////////////////Benz 29-11-2019 เพิ่ม การดึง lookup เพิ่มเติม RateLaoutDet
											str_arr_Tax[0]	 = listSubCat.get(i)[3];
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
											json_tb_Insurance_premium.put("ratelayoutdet", tb_layoutdet2_jsonArray);
											json_tb_Insurance_premium.put("layout",listSubCat.get(i)[0]);
											json_tb_Insurance_premium.put("layout_id",listSubCat.get(i)[4]);
											tb_specific_P.put(json_tb_Insurance_premium);
									}else if (listSubCat.get(i)[3].toString().equals(rate_Type[3])) {
											tb_layoutdet2_jsonArray 	= new JSONArray();
											JSONObject json_tb_Insurance_premium = new JSONObject();
											json_tb_Insurance_premium.put("sub_rate_cat",listSubCat.get(i)[1]);
											json_tb_Insurance_premium.put("text",listSubCat.get(i)[2]);
											json_tb_Insurance_premium.put("rate_cat_id",listSubCat.get(i)[3]);
											/////////////////Benz 29-11-2019 เพิ่ม การดึง lookup เพิ่มเติม RateLaoutDet
											str_arr_Tax[0]	 = listSubCat.get(i)[3];
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
											json_tb_Insurance_premium.put("ratelayoutdet", tb_layoutdet2_jsonArray);
											json_tb_Insurance_premium.put("layout",listSubCat.get(i)[0]);
											json_tb_Insurance_premium.put("layout_id",listSubCat.get(i)[4]);
											tb_age_band_P.put(json_tb_Insurance_premium);
									}
								}
								tb_SubCatAll_JSONObject_P.put("specific", tb_specific_P);
								tb_SubCatAll_JSONObject_P.put("age_band", tb_age_band_P);
								selectbox_Std_premiums_jsonArray_P.put(tb_SubCatAll_JSONObject_P);
							}
							//////////////////////////Extra_Premiums//////////////////////////////////////
							JSONArray	selectbox_Extra_Premiums_jsonArray	= new JSONArray();	
							JSONArray	selectbox_Em_Age_jsonArray			= new JSONArray();	
							JSONArray	selectbox_SA_Rate_jsonArray			= new JSONArray();	
							//เพิ่มเติมจากCL
							JSONArray	dis_SA_jsonArray					= new JSONArray();	
							JSONArray	cal_SA_jsonArray					= new JSONArray();
							JSONArray	cal_SA_P_jsonArray					= new JSONArray();
							
							if (listExtra_Premiums.size() != 0) {
								for (int i = 0; i < listExtra_Premiums.size(); i++) {
									String text			= "";
									String layout 		= "";
									String sub_rate_cat = "";
									String rate_cat_id	= "";
									String layout_id	= "";
									String[] listSubCat_Lv2 = listExtra_Premiums.get(i);
									JSONArray arr_layout_jsonArray	= new JSONArray();
									JSONObject arr_layout_JSONObject = new JSONObject();
									for (int ii = 0; ii < listSubCat_Lv2.length; ii++) {
										tb_layoutdet2_jsonArray 	= new JSONArray();
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
											/////////////////Benz 29-11-2019 เพิ่ม การดึง lookup เพิ่มเติม RateLaoutDet
											str_arr_Tax[0]	 = rate_cat_id;
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
											json_tb_Insurance_premium.put("ratelayoutdet", tb_layoutdet2_jsonArray);											
										}else if(ii == 4) {
											layout_id 			= listSubCat_Lv2[ii];
											json_tb_Insurance_premium.put("layout_id",layout_id);
										}
										arr_layout_jsonArray.put(json_tb_Insurance_premium);
									}
									arr_layout_JSONObject.put("pattern", arr_layout_jsonArray);
									selectbox_Extra_Premiums_jsonArray.put(arr_layout_JSONObject);
								}
							}
							////////////////////////////Em_Age///////////////////////////////////////
							if (listEm_Age.size() != 0) {
								for (int i = 0; i < listEm_Age.size(); i++) {
									String text			= "";
									String layout 		= "";
									String sub_rate_cat = "";
									String rate_cat_id	= "";
									String layout_id 		= "";
									String[] listSubCat_Lv2 = listEm_Age.get(i);
									JSONArray arr_layout_jsonArray	= new JSONArray();
									JSONObject arr_layout_JSONObject = new JSONObject();
									for (int ii = 0; ii < listSubCat_Lv2.length; ii++) {
										tb_layoutdet2_jsonArray 	= new JSONArray();
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
											/////////////////Benz 29-11-2019 เพิ่ม การดึง lookup เพิ่มเติม RateLaoutDet
											str_arr_Tax[0]	 = rate_cat_id;
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
											json_tb_Insurance_premium.put("ratelayoutdet", tb_layoutdet2_jsonArray);	
										}else if(ii == 4) {
											layout_id 			= listSubCat_Lv2[ii];
											json_tb_Insurance_premium.put("layout_id",layout_id);
										}
										arr_layout_jsonArray.put(json_tb_Insurance_premium);
									}
									arr_layout_JSONObject.put("pattern", arr_layout_jsonArray);
									selectbox_Em_Age_jsonArray.put(arr_layout_JSONObject);
								}
							}
							////////////////////////////SA_Rate///////////////////////////////////////
							if (listSA_Rate.size() != 0) {
								for (int i = 0; i < listSA_Rate.size(); i++) {
									String text			= "";
									String layout 		= "";
									String sub_rate_cat = "";
									String rate_cat_id	= "";
									String layout_id	= "";
									String[] listSubCat_Lv2 = listSA_Rate.get(i);
									JSONArray arr_layout_jsonArray	= new JSONArray();
									JSONObject arr_layout_JSONObject = new JSONObject();
									for (int ii = 0; ii < listSubCat_Lv2.length; ii++) {
										tb_layoutdet2_jsonArray 	= new JSONArray();
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
											/////////////////Benz 29-11-2019 เพิ่ม การดึง lookup เพิ่มเติม RateLaoutDet
											str_arr_Tax[0]	 = rate_cat_id;
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
											json_tb_Insurance_premium.put("ratelayoutdet", tb_layoutdet2_jsonArray);												
										}else if(ii == 4) {
											layout_id 			= listSubCat_Lv2[ii];
											json_tb_Insurance_premium.put("layout_id",layout_id);
										}
										arr_layout_jsonArray.put(json_tb_Insurance_premium);
									}
									arr_layout_JSONObject.put("pattern", arr_layout_jsonArray);
									selectbox_SA_Rate_jsonArray.put(arr_layout_JSONObject);
								}
							}
							///////////////////////////เพิ่มเติมจาก CL
							////////////////////////////นำเข้า ตารางส่วนลดตามทุนประกัน//DIS_SA/////////////////////////////////////
							if (listDis_Sa.size() != 0) {
								for (int i = 0; i < listDis_Sa.size(); i++) {
									String text			= "";
									String layout 		= "";
									String sub_rate_cat = "";
									String rate_cat_id	= "";
									String layout_id 	= "";
									String[] listSubCat_Lv2 = listDis_Sa.get(i);
									JSONArray arr_layout_jsonArray	= new JSONArray();
									JSONObject arr_layout_JSONObject = new JSONObject();
									for (int ii = 0; ii < listSubCat_Lv2.length; ii++) {
										tb_layoutdet2_jsonArray 				= new JSONArray();
										JSONObject json_tb_Insurance_premium 	= new JSONObject();
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
											/////////////////Benz 29-11-2019 เพิ่ม การดึง lookup เพิ่มเติม RateLaoutDet
											str_arr_Tax[0]	 = rate_cat_id;
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
											json_tb_Insurance_premium.put("ratelayoutdet", tb_layoutdet2_jsonArray);	
										}else if(ii == 4) {
											layout_id 			= listSubCat_Lv2[ii];
											json_tb_Insurance_premium.put("layout_id",layout_id);
										}
										arr_layout_jsonArray.put(json_tb_Insurance_premium);
									}
									arr_layout_JSONObject.put("pattern", arr_layout_jsonArray);
									dis_SA_jsonArray.put(arr_layout_JSONObject);
								}
							}
								////////////////////////////คำนวณทุนจากเบี้ยประกัน//CAL_SA/////////////////////////////////////
							JSONObject arr_layout_JSONObject		= new JSONObject();
							JSONArray	tb_specific_sa				= new JSONArray();	
							JSONArray	tb_age_band_sa				= new JSONArray();	
							if (listCal_Sa.size() != 0) {
								
								for (int i = 0; i < listCal_Sa.size(); i++) {
									if(listCal_Sa.get(i)[3].toString().equals(rate_Type_Sa[0])) {
										tb_layoutdet2_jsonArray 				= new JSONArray();
											JSONObject json_tb_Insurance_premium = new JSONObject();
											json_tb_Insurance_premium.put("sub_rate_cat",listCal_Sa.get(i)[1]);
											json_tb_Insurance_premium.put("text",listCal_Sa.get(i)[2]);
											json_tb_Insurance_premium.put("rate_cat_id",listCal_Sa.get(i)[3]);
											/////////////////Benz 29-11-2019 เพิ่ม การดึง lookup เพิ่มเติม RateLaoutDet
											str_arr_Tax[0]	 = listCal_Sa.get(i)[3];
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
											json_tb_Insurance_premium.put("ratelayoutdet", tb_layoutdet2_jsonArray);
											json_tb_Insurance_premium.put("layout",listCal_Sa.get(i)[0]);
											json_tb_Insurance_premium.put("layout_id",listCal_Sa.get(i)[4]);
											tb_specific_sa.put(json_tb_Insurance_premium);
									}else if (listCal_Sa.get(i)[3].toString().equals(rate_Type_Sa[1])) {
											tb_layoutdet2_jsonArray 				= new JSONArray();
											JSONObject json_tb_Insurance_premium = new JSONObject();
											json_tb_Insurance_premium.put("sub_rate_cat",listCal_Sa.get(i)[1]);
											json_tb_Insurance_premium.put("text",listCal_Sa.get(i)[2]);
											json_tb_Insurance_premium.put("rate_cat_id",listCal_Sa.get(i)[3]);
											/////////////////Benz 29-11-2019 เพิ่ม การดึง lookup เพิ่มเติม RateLaoutDet
											str_arr_Tax[0]	 = listCal_Sa.get(i)[3];
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
											json_tb_Insurance_premium.put("ratelayoutdet", tb_layoutdet2_jsonArray);
											json_tb_Insurance_premium.put("layout",listCal_Sa.get(i)[0]);
											json_tb_Insurance_premium.put("layout_id",listCal_Sa.get(i)[4]);
											tb_age_band_sa.put(json_tb_Insurance_premium);
									}
								}
								arr_layout_JSONObject.put("specific", tb_specific_sa);
								arr_layout_JSONObject.put("age_band", tb_age_band_sa);
								cal_SA_jsonArray.put(arr_layout_JSONObject);
							}
							
////////////////////		////////คำนวณทุนจากเบี้ยประกัน//CAL_SA_P///////////////////////////////////// by Pun 12/12/2019
							JSONObject arr_layout_P_JSONObject			= new JSONObject();
							JSONArray	tb_specific_sa_P				= new JSONArray();	
							JSONArray	tb_age_band_sa_P				= new JSONArray();	
							if (listCal_Sa.size() != 0) {
								
								for (int i = 0; i < listCal_Sa.size(); i++) {
									if(listCal_Sa.get(i)[3].toString().equals(rate_Type_Sa[2])) {
										tb_layoutdet2_jsonArray 				= new JSONArray();
											JSONObject json_tb_Insurance_premium = new JSONObject();
											json_tb_Insurance_premium.put("sub_rate_cat",listCal_Sa.get(i)[1]);
											json_tb_Insurance_premium.put("text",listCal_Sa.get(i)[2]);
											json_tb_Insurance_premium.put("rate_cat_id",listCal_Sa.get(i)[3]);
											/////////////////Benz 29-11-2019 เพิ่ม การดึง lookup เพิ่มเติม RateLaoutDet
											str_arr_Tax[0]	 = listCal_Sa.get(i)[3];
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
											json_tb_Insurance_premium.put("ratelayoutdet", tb_layoutdet2_jsonArray);
											json_tb_Insurance_premium.put("layout",listCal_Sa.get(i)[0]);
											tb_specific_sa_P.put(json_tb_Insurance_premium);
									}else if (listCal_Sa.get(i)[3].toString().equals(rate_Type_Sa[3])) {
											tb_layoutdet2_jsonArray 				= new JSONArray();
											JSONObject json_tb_Insurance_premium = new JSONObject();
											json_tb_Insurance_premium.put("sub_rate_cat",listCal_Sa.get(i)[1]);
											json_tb_Insurance_premium.put("text",listCal_Sa.get(i)[2]);
											json_tb_Insurance_premium.put("rate_cat_id",listCal_Sa.get(i)[3]);
											/////////////////Benz 29-11-2019 เพิ่ม การดึง lookup เพิ่มเติม RateLaoutDet
											str_arr_Tax[0]	 = listCal_Sa.get(i)[3];
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
											json_tb_Insurance_premium.put("ratelayoutdet", tb_layoutdet2_jsonArray);
											json_tb_Insurance_premium.put("layout",listCal_Sa.get(i)[0]);
											json_tb_Insurance_premium.put("layout_id",listCal_Sa.get(i)[4]);
											tb_age_band_sa_P.put(json_tb_Insurance_premium);
									}
								}
								arr_layout_P_JSONObject.put("specific", tb_specific_sa_P);
								arr_layout_P_JSONObject.put("age_band", tb_age_band_sa_P);
								cal_SA_P_jsonArray.put(arr_layout_P_JSONObject);
							}
							
							
							////////////////////////////////////////////////////////////////////////////////
							JSONArray  cal_insurance_premiums_jsonArray	= new JSONArray();
							JSONObject json_cal_insurance_premiums2 = new JSONObject();
							json_cal_insurance_premiums2.put("age_Band",age_Band_jsonArray);
							json_cal_insurance_premiums2.put("tb_premiums",json_cal_insurance_premiums);
							json_cal_insurance_premiums2.put("selectbox_Std_Premiums",selectbox_Std_premiums_jsonArray);
							json_cal_insurance_premiums2.put("selectbox_Std_Premiums_P",selectbox_Std_premiums_jsonArray_P);
							json_cal_insurance_premiums2.put("selectbox_Extra_Premiums",selectbox_Extra_Premiums_jsonArray);
							json_cal_insurance_premiums2.put("em_Age",selectbox_Em_Age_jsonArray);
							json_cal_insurance_premiums2.put("dis_Sa",dis_SA_jsonArray);
							json_cal_insurance_premiums2.put("sa_Rate",selectbox_SA_Rate_jsonArray);
							json_cal_insurance_premiums2.put("cal_Sa",cal_SA_jsonArray);
							json_cal_insurance_premiums2.put("cal_Sa_P",cal_SA_P_jsonArray);
							json_cal_insurance_premiums2.put("PM_Type_premium",pm_Type_premium_jsonArray);
							cal_insurance_premiums_jsonArray.put(json_cal_insurance_premiums2);
							responsejson.put("Tab_cal_insurance_premiums",cal_insurance_premiums_jsonArray);
							//
							responseText = responsejson.toString();
						}
						//TODO
						//Tab ตารางมูลค่ากรมธรรม์
						if (menu_CL_4.equals("true")) {
							int tab = 5;
							////////////////////////////////////////////////
							ArrayList<RateCatAccessData> datareturn1_1;
							/*ArrayList<RateCatAccessData> datareturn1;
							datareturn1 = mdcs.Table_policy_value(tab);*/
							mdcs.createDetail(tab);
							ArrayList<RateCatAccessData> datareturn1 = mdcs.getListRateCatAccessData();
							JSONArray	tb_policy_value_jsonArray	= new JSONArray();
							JSONArray	select_tb_policy_value_low_jsonArray	= new JSONArray();
							for (int i = 0; i < datareturn1.size(); i++) {
								if (datareturn1.size() > 1 ) {
										if (i == 0) {
											JSONObject rate_cat_id_JSONObject = new JSONObject();
												
												int rate_cat_id = 0;
												rate_cat_id = datareturn1.get(i).getRateCat().getRate_cat_id();
												rate_cat_id_JSONObject.put("rate_cat_id_specific", rate_cat_id);
												datareturn1_1 = mdcs.getListRateCatAgeBandRiskStandard();//mdcs.getRateCatAgebandRiskStandard();
													//for (int l = 0 ; l < datareturn1_1.size(); l++) {
														rate_cat_id = datareturn1_1.get(0).getRateCat().getRate_cat_id();
														rate_cat_id_JSONObject.put("rate_cat_id_age_Band", rate_cat_id);
													//}
													tb_policy_value_jsonArray.put(rate_cat_id_JSONObject);
											/*for (int ii = 0 ; ii < sub_tb_policy_value_arr.size(); ii++) {
												JSONObject tb_policy_value_JSONObject = new JSONObject();
												JSONArray tb_policy_value_arr 	= new JSONArray();
												tb_policy_value_JSONObject.put("text", sub_tb_policy_value_arr.get(ii).getName_th());
												for (int iii = 0 ; iii < rateLayout_tb_policy_value_arr.size(); iii++) {
													JSONObject tb_policy_value_JSONObject2 = new JSONObject();
													if (sub_tb_policy_value_arr.get(ii).getRate_cat_id() == rateLayout_tb_policy_value_arr.get(iii).getRateLayout().getRate_cat_id()
															&& sub_tb_policy_value_arr.get(ii).getSub_cat_id() == rateLayout_tb_policy_value_arr.get(iii).getRateLayout().getSub_cat_id()) {
														tb_policy_value_JSONObject2.put("file_format", rateLayout_tb_policy_value_arr.get(iii).getRateLayout().getFile_name_pattern());
														tb_policy_value_JSONObject2.put("sub_rate_cat", rateLayout_tb_policy_value_arr.get(iii).getRateLayout().getSub_cat_id());
														
														tb_policy_value_arr.put(tb_policy_value_JSONObject2);
													}
													tb_policy_value_JSONObject.put("file", tb_policy_value_arr);
												}
												arr_layout_jsonArray.put(tb_policy_value_JSONObject);
												arr_layout_JSONObject.put("pattern", arr_layout_jsonArray);
											}
											tb_policy_value_jsonArray.put(arr_layout_JSONObject);*/
										}else if (i == 1) {
											JSONObject rate_cat_id_JSONObject = new JSONObject();
											int rate_cat_id = datareturn1.get(i).getRateCat().getRate_cat_id();
											rate_cat_id_JSONObject.put("rate_cat_id_specific", rate_cat_id);
											rate_cat_id_JSONObject.put("rate_cat_id_age_Band", "");
											select_tb_policy_value_low_jsonArray.put(rate_cat_id_JSONObject);
											/*for (int ii = 0 ; ii < rateLayout_tb_policy_value_arr.size(); ii++) {
												JSONObject json_select_tb_policy_value_low = new JSONObject();
												json_select_tb_policy_value_low.put("text",sub_tb_policy_value_arr.get(ii).getName_th());
												for (int iii = 0 ; iii < rateLayout_tb_policy_value_arr.size(); iii++) {
													json_select_tb_policy_value_low.put("layout",rateLayout_tb_policy_value_arr.get(iii).getRateLayout().getFile_name_pattern());
													json_select_tb_policy_value_low.put("sub_rate_cat", rateLayout_tb_policy_value_arr.get(iii).getRateLayout().getSub_cat_id());
												}
												arr_layout_jsonArray.put(json_select_tb_policy_value_low);
												arr_layout_JSONObject.put("pattern", arr_layout_jsonArray);	
											}
										select_tb_policy_value_low_jsonArray.put(arr_layout_JSONObject);*/
									}else {
										JSONObject arr_layout_JSONObject = new JSONObject();
										
										int rate_cat_id = 0;
										rate_cat_id = datareturn1.get(i).getRateCat().getRate_cat_id();
										arr_layout_JSONObject.put("rate_cat_id_specific", rate_cat_id);
										datareturn1_1 = mdcs.getListRateCatAgeBandRiskStandard();//mdcs.getRateCatAgebandRiskStandard();
											//for (int l = 0 ; l < datareturn1_1.size(); l++) {
												rate_cat_id = datareturn1_1.get(1).getRateCat().getRate_cat_id();
												arr_layout_JSONObject.put("rate_cat_id_age_Band", rate_cat_id);
											//}
											tb_policy_value_jsonArray.put(arr_layout_JSONObject);
										/*for (int ii = 0 ; ii < sub_tb_policy_value_arr.size(); ii++) {
											JSONObject tb_policy_value_JSONObject = new JSONObject();
											JSONArray tb_policy_value_arr 	= new JSONArray();
											tb_policy_value_JSONObject.put("text", sub_tb_policy_value_arr.get(ii).getName_th());
											tb_policy_value_JSONObject.put("rate_cat_id_specific", sub_tb_policy_value_arr.get(ii).getRate_cat_id());
											tb_policy_value_JSONObject.put("rate_cat_id_age_Band", "");
											for (int iii = 0 ; iii < rateLayout_tb_policy_value_arr.size(); iii++) {
												JSONObject tb_policy_value_JSONObject2 = new JSONObject();
												if (sub_tb_policy_value_arr.get(ii).getRate_cat_id() == rateLayout_tb_policy_value_arr.get(iii).getRateLayout().getRate_cat_id() && sub_tb_policy_value_arr.get(ii).getSub_cat_id() == rateLayout_tb_policy_value_arr.get(iii).getRateLayout().getSub_cat_id()) {
													tb_policy_value_JSONObject2.put("file_format", rateLayout_tb_policy_value_arr.get(iii).getRateLayout().getFile_name_pattern());
													tb_policy_value_JSONObject2.put("sub_rate_cat", rateLayout_tb_policy_value_arr.get(iii).getRateLayout().getSub_cat_id());
													tb_policy_value_arr.put(tb_policy_value_JSONObject2);
												}
												tb_policy_value_JSONObject.put("file", tb_policy_value_arr);
											}
											arr_layout_jsonArray.put(tb_policy_value_JSONObject);
											arr_layout_JSONObject.put("pattern", arr_layout_jsonArray);	
										}
										tb_policy_value_jsonArray.put(arr_layout_JSONObject);*/
									}
								}
							}
							////////////////////////////selectbox_standard_risk///////////////////////////////////////
							JSONArray	selectbox_standard_risk_jsonArray	= new JSONArray();	
							JSONArray	selectbox_standard_risk_jsonArray_P	= new JSONArray();	
							SubCatData scd = new SubCatData();
							ArrayList<String[]> liststandard_risk 	= new ArrayList<>();//33,34
							liststandard_risk 						= scd.searchSubCatByRsRateCatOL();
							JSONArray	age_Band_standard_risk_Array= new JSONArray();	
							JSONArray	specific_standard_risk_Array= new JSONArray();	
							
							JSONArray	tb_SubCatID_Type4_S			= new JSONArray();	
							JSONArray	tb_SubCatID_Type4_B			= new JSONArray();	
							JSONArray	tb_layoutType4_B_jsonArray 		= new JSONArray();
							JSONArray	tb_layoutType4_S_jsonArray 		= new JSONArray();
							
							JSONObject tb_standard_risk_JSONObject_S	= new JSONObject();
							JSONObject tb_standard_risk_JSONObject_B 	= new JSONObject();
							
							JSONObject json_rateLayoutTax 					= new JSONObject();
							JSONArray	tb_layoutdet1_jsonArray 			= new JSONArray();
							JSONArray	tb_layoutdet2_jsonArray 			= new JSONArray();
							JSONObject	tb_layoutdet_JSONObject 			= new JSONObject();
							
							MainInsureDetailCreate mdc 						= new MainInsureDetailCreate ();
							ArrayList<RateCatAccessData> 					datareturnTax;
							String[] str_arr_Tax 							= new String[2]; 
							
							String[] type_SubCatID = ConstantSubCatIDValues.getStandardRisSubCatol();
							String[] type_RateCat = ConstantRateCatIDValues.getRsRateCatOl();
							if (liststandard_risk.size() != 0) {
								String		check_sub_cat 	= "";
								for (int i = 0; i < liststandard_risk.size(); i++) {
								
									if(liststandard_risk.get(i)[3].toString().equals(type_RateCat[0])) { //0 = 33 = AgeBand
										tb_layoutdet2_jsonArray 				= new JSONArray();
										check_sub_cat = liststandard_risk.get(i)[1].toString();
										if (check_sub_cat.equals(type_SubCatID[0].toString())) {
											JSONObject json_layout_premium = new JSONObject();
											json_layout_premium.put("layout",liststandard_risk.get(i)[0]);
											json_layout_premium.put("layout_id",liststandard_risk.get(i)[4]);
											tb_layoutType4_B_jsonArray.put(json_layout_premium);
												tb_SubCatID_Type4_B	= new JSONArray();	
												JSONObject json_tb_Insurance_premium = new JSONObject();
												json_tb_Insurance_premium.put("sub_rate_cat",liststandard_risk.get(i)[1]);
												json_tb_Insurance_premium.put("text",liststandard_risk.get(i)[2]);
												json_tb_Insurance_premium.put("rate_cat_id",liststandard_risk.get(i)[3]);
												/////////////////Benz 29-11-2019 เพิ่ม การดึง lookup เพิ่มเติม RateLaoutDet
												str_arr_Tax[0]	 = liststandard_risk.get(i)[3];
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
												json_tb_Insurance_premium.put("ratelayoutdet", tb_layoutdet2_jsonArray);
												json_tb_Insurance_premium.put("file",tb_layoutType4_B_jsonArray);
												tb_SubCatID_Type4_B.put(json_tb_Insurance_premium);
										}
								}else if(liststandard_risk.get(i)[3].toString().equals(type_RateCat[1])) {//1= 34 = Specific 
										tb_layoutdet2_jsonArray 				= new JSONArray();
										check_sub_cat = liststandard_risk.get(i)[1].toString();
										if (check_sub_cat.equals(type_SubCatID[0].toString())) {
											JSONObject json_layout_premium = new JSONObject();
											json_layout_premium.put("layout",liststandard_risk.get(i)[0]);
											json_layout_premium.put("layout_id",liststandard_risk.get(i)[4]);
											tb_layoutType4_S_jsonArray.put(json_layout_premium);
												tb_SubCatID_Type4_S	= new JSONArray();	
												JSONObject json_tb_Insurance_premium = new JSONObject();
												json_tb_Insurance_premium.put("sub_rate_cat",liststandard_risk.get(i)[1]);
												json_tb_Insurance_premium.put("text",liststandard_risk.get(i)[2]);
												json_tb_Insurance_premium.put("rate_cat_id",liststandard_risk.get(i)[3]);
												/////////////////Benz 29-11-2019 เพิ่ม การดึง lookup เพิ่มเติม RateLaoutDet
												str_arr_Tax[0]	 = liststandard_risk.get(i)[3];
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
												json_tb_Insurance_premium.put("ratelayoutdet", tb_layoutdet2_jsonArray);
												json_tb_Insurance_premium.put("file",tb_layoutType4_S_jsonArray);
												tb_SubCatID_Type4_S.put(json_tb_Insurance_premium);
										}
									}
							}
								///-----age_Band
								tb_standard_risk_JSONObject_S.put("type1", tb_SubCatID_Type4_S);
								//tb_standard_risk_JSONObject_S.put("type2", tb_SubCatID_Type5_S);
								//tb_standard_risk_JSONObject_S.put("type3", tb_SubCatID_Type6_S);
								age_Band_standard_risk_Array.put(tb_standard_risk_JSONObject_S);
								
								///-----specific
								tb_standard_risk_JSONObject_B.put("type1", tb_SubCatID_Type4_B);
								//tb_standard_risk_JSONObject_B.put("type2", tb_SubCatID_Type5_B);
								//tb_standard_risk_JSONObject_B.put("type3", tb_SubCatID_Type6_B);
								specific_standard_risk_Array.put(tb_standard_risk_JSONObject_B);
							///////////////////////////////////////////////////////////////////////
							}
							//P
							JSONArray	age_Band_standard_risk_Array_P		 = new JSONArray();	
							JSONArray	specific_standard_risk_Array_P 		= new JSONArray();	
							JSONObject tb_standard_risk_JSONObject_S_P		= new JSONObject();
							JSONObject tb_standard_risk_JSONObject_B_P		= new JSONObject();
							JSONArray	tb_layoutType4_B_jsonArray_P 		= new JSONArray();
							JSONArray	tb_layoutType4_S_jsonArray_P 		= new JSONArray();
							if (liststandard_risk.size() != 0) {
								String		check_sub_cat 	= "";
								for (int i = 0; i < liststandard_risk.size(); i++) {
								
									if(liststandard_risk.get(i)[3].toString().equals(type_RateCat[2])) { //2 = 46 = AgeBand
										tb_layoutdet2_jsonArray 				= new JSONArray();
										check_sub_cat = liststandard_risk.get(i)[1].toString();
										if (check_sub_cat.equals(type_SubCatID[0].toString())) {
											JSONObject json_layout_premium = new JSONObject();
											json_layout_premium.put("layout",liststandard_risk.get(i)[0]);
											json_layout_premium.put("layout_id",liststandard_risk.get(i)[4]);
											tb_layoutType4_B_jsonArray_P.put(json_layout_premium);
												tb_SubCatID_Type4_B	= new JSONArray();	
												JSONObject json_tb_Insurance_premium = new JSONObject();
												json_tb_Insurance_premium.put("sub_rate_cat",liststandard_risk.get(i)[1]);
												json_tb_Insurance_premium.put("text",liststandard_risk.get(i)[2]);
												json_tb_Insurance_premium.put("rate_cat_id",liststandard_risk.get(i)[3]);
												/////////////////Benz 29-11-2019 เพิ่ม การดึง lookup เพิ่มเติม RateLaoutDet
												str_arr_Tax[0]	 = liststandard_risk.get(i)[3];
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
												json_tb_Insurance_premium.put("ratelayoutdet", tb_layoutdet2_jsonArray);
												json_tb_Insurance_premium.put("file",tb_layoutType4_B_jsonArray_P);
												tb_SubCatID_Type4_B.put(json_tb_Insurance_premium);
										}
								}else if(liststandard_risk.get(i)[3].toString().equals(type_RateCat[3])) {//1= 47 = Specific 
										tb_layoutdet2_jsonArray 				= new JSONArray();
										check_sub_cat = liststandard_risk.get(i)[1].toString();
										if (check_sub_cat.equals(type_SubCatID[0].toString())) {
											JSONObject json_layout_premium = new JSONObject();
											json_layout_premium.put("layout",liststandard_risk.get(i)[0]);
											json_layout_premium.put("layout_id",liststandard_risk.get(i)[4]);
											tb_layoutType4_S_jsonArray_P.put(json_layout_premium);
												tb_SubCatID_Type4_S	= new JSONArray();	
												JSONObject json_tb_Insurance_premium = new JSONObject();
												json_tb_Insurance_premium.put("sub_rate_cat",liststandard_risk.get(i)[1]);
												json_tb_Insurance_premium.put("text",liststandard_risk.get(i)[2]);
												json_tb_Insurance_premium.put("rate_cat_id",liststandard_risk.get(i)[3]);
												/////////////////Benz 29-11-2019 เพิ่ม การดึง lookup เพิ่มเติม RateLaoutDet
												str_arr_Tax[0]	 = liststandard_risk.get(i)[3];
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
												json_tb_Insurance_premium.put("ratelayoutdet", tb_layoutdet2_jsonArray);
												json_tb_Insurance_premium.put("file",tb_layoutType4_S_jsonArray_P);
												tb_SubCatID_Type4_S.put(json_tb_Insurance_premium);
										}
									}
							}
								///-----age_Band
								tb_standard_risk_JSONObject_S_P.put("type1", tb_SubCatID_Type4_S);
								age_Band_standard_risk_Array_P.put(tb_standard_risk_JSONObject_S_P);
								
								///-----specific
								tb_standard_risk_JSONObject_B_P.put("type1", tb_SubCatID_Type4_B);
								specific_standard_risk_Array_P.put(tb_standard_risk_JSONObject_B_P);
							}
							///////////////////////////////////////////////////////////////////////
						
							///////////////////////////////standard_risk_row//////////////////////////
							ArrayList<String[]> liststandard_risk_row 	= new ArrayList<>();//13
							liststandard_risk_row 						= scd.searchSubCatByRlsRateCatOL();
							JSONArray	selectbox_standard_risk_row_jsonArray	= new JSONArray();	
							
							if (liststandard_risk_row.size() != 0) {
								for (int i = 0; i < liststandard_risk_row.size(); i++) {
									String text			= "";
									String layout 		= "";
									String sub_rate_cat = "";
									String rate_cat_id	= "";
									String layout_id	= "";
									String[] listSubCat_Lv2 = liststandard_risk_row.get(i);
									JSONArray arr_layout_jsonArray	= new JSONArray();
									JSONObject arr_layout_JSONObject = new JSONObject();
									for (int ii = 0; ii < listSubCat_Lv2.length; ii++) {
										tb_layoutdet2_jsonArray 				= new JSONArray();
										JSONObject json_tb_Insurance_premium 	= new JSONObject();
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
											/////////////////Benz 29-11-2019 เพิ่ม การดึง lookup เพิ่มเติม RateLaoutDet
											str_arr_Tax[0]	 = rate_cat_id;
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
											json_tb_Insurance_premium.put("ratelayoutdet", tb_layoutdet2_jsonArray);
										}else if(ii == 4) {
											layout_id 			= listSubCat_Lv2[ii];
											json_tb_Insurance_premium.put("layout_id",layout_id);
										}
										arr_layout_jsonArray.put(json_tb_Insurance_premium);
									}
									arr_layout_JSONObject.put("pattern", arr_layout_jsonArray);
									selectbox_standard_risk_row_jsonArray.put(arr_layout_JSONObject);
								}
							}
			//////////////////ตารางมรณะสำหรับคำนวนปิดบัญชี(RPU/ETI)
											JSONArray	jsonarr_Year_RPU		= new JSONArray();	
											JSONArray	jsonarr_Male_RPU		= new JSONArray();	
											JSONArray	jsonarr_Female_RPU		= new JSONArray();
											JSONArray	jsonarr_Year_ETI		= new JSONArray();	
											JSONArray	jsonarr_Male_ETI		= new JSONArray();	
											JSONArray	jsonarr_Female_ETI		= new JSONArray();
											
											JSONArray	jsonarr_Male_pattern_RPU		= new JSONArray();
											JSONArray	jsonarr_Female_pattern_RPU		= new JSONArray();
											JSONArray	jsonarr_Male_pattern_ETI		= new JSONArray();
											JSONArray	jsonarr_Female_pattern_ETI		= new JSONArray();
											NonforfRateData non_rate  = new NonforfRateData();
											Object [] obj_NonforfRate_RPU = non_rate.searchNonforfRateRPU();
											Object [] obj_NonforfRate_ETI = non_rate.searchNonforfRateEIT();
											ArrayList<NonforfRateAccessData> arr_NonforfRate_RPU 	= (ArrayList<NonforfRateAccessData>) obj_NonforfRate_RPU[0];
											ArrayList<NonforfRateAccessData> arr_NonforfRate_ETI 	= (ArrayList<NonforfRateAccessData>) obj_NonforfRate_ETI[0];
											ArrayList<Rate_layout> arr_Rate_layout_RPU					= (ArrayList<Rate_layout>) obj_NonforfRate_RPU[1];
											ArrayList<Rate_layout> arr_Rate_layout_ETI					= (ArrayList<Rate_layout>) obj_NonforfRate_ETI[1];

											/////////////RPU
											for (int i = 0; i < arr_NonforfRate_RPU.size(); i++) {
												JSONObject json_year_RPU = new JSONObject();
												json_year_RPU.put("Start_year", arr_NonforfRate_RPU.get(i).getStart_year());
												jsonarr_Year_RPU.put(json_year_RPU);
												for (int ii = 0; ii < arr_NonforfRate_RPU.get(i).getListNonforfRateSexgroup().size(); ii++) {
													if (arr_NonforfRate_RPU.get(i).getListNonforfRateSexgroup().get(ii).getSex().equals("MALE")) {
														for (int iii = 0; iii < arr_NonforfRate_RPU.get(i).getListNonforfRateSexgroup().get(ii).getListNonforfRateData().size(); iii++) {
															JSONObject json_Male_RPU = new JSONObject();		
															json_Male_RPU.put("nonforf_rate_id", arr_NonforfRate_RPU.get(i).getListNonforfRateSexgroup().get(ii).getListNonforfRateData().get(iii).getNonforf_rate().getNonforf_rate_id());
															json_Male_RPU.put("nonforf_prov", arr_NonforfRate_RPU.get(i).getListNonforfRateSexgroup().get(ii).getListNonforfRateData().get(iii).getNonforf_rate().getNonforf_prov());
															json_Male_RPU.put("year", arr_NonforfRate_RPU.get(i).getListNonforfRateSexgroup().get(ii).getListNonforfRateData().get(iii).getNonforf_rate().getStat_year());
															if (arr_NonforfRate_RPU.get(i).getListNonforfRateSexgroup().get(ii).getListNonforfRateData().get(iii).getFile() != null) {
																json_Male_RPU.put("file_name", arr_NonforfRate_RPU.get(i).getListNonforfRateSexgroup().get(ii).getListNonforfRateData().get(iii).getFile().getFile_name());
																json_Male_RPU.put("file_ref", arr_NonforfRate_RPU.get(i).getListNonforfRateSexgroup().get(ii).getListNonforfRateData().get(iii).getFile().getFile_url());
																if (!arr_NonforfRate_RPU.get(i).getListNonforfRateSexgroup().get(ii).getListNonforfRateData().get(iii).getFile().getFile_url().equals("")) {
																	json_Male_RPU.put("layout_id", arr_NonforfRate_RPU.get(i).getListNonforfRateSexgroup().get(ii).getListNonforfRateData().get(iii).getNonforf_rate().getRate_layout_id());
																}else {
																	json_Male_RPU.put("layout_id", "");
																}
															}else {
																json_Male_RPU.put("file_name", "");
																json_Male_RPU.put("file_ref", "");
															}

															jsonarr_Male_RPU.put(json_Male_RPU);
														}
													}else if (arr_NonforfRate_RPU.get(i).getListNonforfRateSexgroup().get(ii).getSex().equals("FEMALE")) {
														for (int iii = 0; iii < arr_NonforfRate_RPU.get(i).getListNonforfRateSexgroup().get(ii).getListNonforfRateData().size(); iii++) {
															JSONObject json_Female_RPU = new JSONObject();
															json_Female_RPU.put("nonforf_rate_id", arr_NonforfRate_RPU.get(i).getListNonforfRateSexgroup().get(ii).getListNonforfRateData().get(iii).getNonforf_rate().getNonforf_rate_id());
															json_Female_RPU.put("nonforf_prov", arr_NonforfRate_RPU.get(i).getListNonforfRateSexgroup().get(ii).getListNonforfRateData().get(iii).getNonforf_rate().getNonforf_prov());
															json_Female_RPU.put("year", arr_NonforfRate_RPU.get(i).getListNonforfRateSexgroup().get(ii).getListNonforfRateData().get(iii).getNonforf_rate().getStat_year());
															if (arr_NonforfRate_RPU.get(i).getListNonforfRateSexgroup().get(ii).getListNonforfRateData().get(iii).getFile() != null) {
																json_Female_RPU.put("file_name", arr_NonforfRate_RPU.get(i).getListNonforfRateSexgroup().get(ii).getListNonforfRateData().get(iii).getFile().getFile_name());
																json_Female_RPU.put("file_ref", arr_NonforfRate_RPU.get(i).getListNonforfRateSexgroup().get(ii).getListNonforfRateData().get(iii).getFile().getFile_url());
																if (!arr_NonforfRate_RPU.get(i).getListNonforfRateSexgroup().get(ii).getListNonforfRateData().get(iii).getFile().getFile_url().equals("")) {
																	json_Female_RPU.put("layout_id", arr_NonforfRate_RPU.get(i).getListNonforfRateSexgroup().get(ii).getListNonforfRateData().get(iii).getNonforf_rate().getRate_layout_id());
																}else {
																	json_Female_RPU.put("layout_id", "");
																}
															}else {
																json_Female_RPU.put("file_name", "");
																json_Female_RPU.put("file_ref", "");

															}

															jsonarr_Female_RPU.put(json_Female_RPU);
														}
													}
												}
											}
											for (int i = 0; i < arr_Rate_layout_RPU.size(); i++) {
												if (i <= 1) {
													JSONObject json_Male_pattern_RPU = new JSONObject();
													json_Male_pattern_RPU.put("rate_layout_id", arr_Rate_layout_RPU.get(i).getRate_layout_id());
													json_Male_pattern_RPU.put("rate_cat_id", arr_Rate_layout_RPU.get(i).getRate_cat_id());
													json_Male_pattern_RPU.put("sub_cat_id", arr_Rate_layout_RPU.get(i).getSub_cat_id());
													json_Male_pattern_RPU.put("name_th", arr_Rate_layout_RPU.get(i).getName_th());
													json_Male_pattern_RPU.put("name_en", arr_Rate_layout_RPU.get(i).getName_en());
													json_Male_pattern_RPU.put("file_name_pattern", arr_Rate_layout_RPU.get(i).getFile_name_pattern());
													
													/////////////////Benz 16-12-2019 เพิ่ม การดึง lookup เพิ่มเติม RateLaoutDet
													tb_layoutdet2_jsonArray 				= new JSONArray();
													str_arr_Tax[0]	 = Integer.toString(arr_Rate_layout_RPU.get(i).getRate_cat_id());
													datareturnTax = mdc.searchTax(str_arr_Tax);
														if (datareturnTax.size() > 0) {
															for (int j = 0; j < datareturnTax.size(); j++) {
																for (int jj = 0; jj < datareturnTax.get(j).getListRateLayout().size(); jj++) {
																	tb_layoutdet1_jsonArray 	= new JSONArray(); 
																	tb_layoutdet_JSONObject 	= new JSONObject();
																	for (int jjj = 0; jjj < datareturnTax.get(j).getListRateLayout().get(jj).getListRateLayoutDet().size(); jjj++) {
																		json_rateLayoutTax = new JSONObject();
																		if (datareturnTax.get(j).getListRateLayout().get(jj).getListRateLayoutDet().get(jjj).getRate_layout_id() == arr_Rate_layout_RPU.get(i).getRate_layout_id()) {
																			json_rateLayoutTax.put("rate_layout_id",datareturnTax.get(j).getListRateLayout().get(jj).getListRateLayoutDet().get(jjj).getRate_layout_id());
																			json_rateLayoutTax.put("column_name",datareturnTax.get(j).getListRateLayout().get(jj).getListRateLayoutDet().get(jjj).getColumn_name());
																			json_rateLayoutTax.put("column_len",datareturnTax.get(j).getListRateLayout().get(jj).getListRateLayoutDet().get(jjj).getColumn_len());
																			tb_layoutdet1_jsonArray.put(json_rateLayoutTax);
																		}
																	}
																	if (tb_layoutdet1_jsonArray.length() > 0) {
																		tb_layoutdet_JSONObject.put("rate_layout_det",tb_layoutdet1_jsonArray);
																		tb_layoutdet2_jsonArray.put(tb_layoutdet_JSONObject);
																	}
																};
															}
														}
													///////////////////			
													json_Male_pattern_RPU.put("ratelayoutdet", tb_layoutdet2_jsonArray);
													jsonarr_Male_pattern_RPU.put(json_Male_pattern_RPU);

												}else {
													JSONObject json_Female_pattern_RPU = new JSONObject();
													json_Female_pattern_RPU.put("rate_layout_id", arr_Rate_layout_RPU.get(i).getRate_layout_id());
													json_Female_pattern_RPU.put("rate_cat_id", arr_Rate_layout_RPU.get(i).getRate_cat_id());
													json_Female_pattern_RPU.put("sub_cat_id", arr_Rate_layout_RPU.get(i).getSub_cat_id());
													json_Female_pattern_RPU.put("name_th", arr_Rate_layout_RPU.get(i).getName_th());
													json_Female_pattern_RPU.put("name_en", arr_Rate_layout_RPU.get(i).getName_en());
													json_Female_pattern_RPU.put("file_name_pattern", arr_Rate_layout_RPU.get(i).getFile_name_pattern());
													/////////////////Benz 16-12-2019 เพิ่ม การดึง lookup เพิ่มเติม RateLaoutDet
													tb_layoutdet2_jsonArray 				= new JSONArray();
													str_arr_Tax[0]	 = Integer.toString(arr_Rate_layout_RPU.get(i).getRate_cat_id());
													datareturnTax = mdc.searchTax(str_arr_Tax);
														if (datareturnTax.size() > 0) {
															for (int j = 0; j < datareturnTax.size(); j++) {
																for (int jj = 0; jj < datareturnTax.get(j).getListRateLayout().size(); jj++) {
																	tb_layoutdet1_jsonArray 	= new JSONArray(); 
																	tb_layoutdet_JSONObject 	= new JSONObject();
																	for (int jjj = 0; jjj < datareturnTax.get(j).getListRateLayout().get(jj).getListRateLayoutDet().size(); jjj++) {
																		json_rateLayoutTax = new JSONObject();
																		if (datareturnTax.get(j).getListRateLayout().get(jj).getListRateLayoutDet().get(jjj).getRate_layout_id() == arr_Rate_layout_RPU.get(i).getRate_layout_id()) {
																			json_rateLayoutTax.put("rate_layout_id",datareturnTax.get(j).getListRateLayout().get(jj).getListRateLayoutDet().get(jjj).getRate_layout_id());
																			json_rateLayoutTax.put("column_name",datareturnTax.get(j).getListRateLayout().get(jj).getListRateLayoutDet().get(jjj).getColumn_name());
																			json_rateLayoutTax.put("column_len",datareturnTax.get(j).getListRateLayout().get(jj).getListRateLayoutDet().get(jjj).getColumn_len());
																			tb_layoutdet1_jsonArray.put(json_rateLayoutTax);
																		}
																	}
																	if (tb_layoutdet1_jsonArray.length() > 0) {
																		tb_layoutdet_JSONObject.put("rate_layout_det",tb_layoutdet1_jsonArray);
																		tb_layoutdet2_jsonArray.put(tb_layoutdet_JSONObject);
																	}
																};
																
															}
														}
													///////////////////			
													json_Female_pattern_RPU.put("ratelayoutdet", tb_layoutdet2_jsonArray);
													jsonarr_Female_pattern_RPU.put(json_Female_pattern_RPU);
												}
											}
//											/////////////ETI
											for (int i = 0; i < arr_NonforfRate_ETI.size(); i++) {
												JSONObject json_year_ETI = new JSONObject();
												json_year_ETI.put("Start_year", arr_NonforfRate_ETI.get(i).getStart_year());
												jsonarr_Year_ETI.put(json_year_ETI);
												for (int ii = 0; ii < arr_NonforfRate_ETI.get(i).getListNonforfRateSexgroup().size(); ii++) {
													if (arr_NonforfRate_ETI.get(i).getListNonforfRateSexgroup().get(ii).getSex().equals("MALE")) {
														for (int iii = 0; iii < arr_NonforfRate_ETI.get(i).getListNonforfRateSexgroup().get(ii).getListNonforfRateData().size(); iii++) {
															JSONObject json_Male_ETI 	= new JSONObject();
															json_Male_ETI.put("nonforf_rate_id", arr_NonforfRate_ETI.get(i).getListNonforfRateSexgroup().get(ii).getListNonforfRateData().get(iii).getNonforf_rate().getNonforf_rate_id());
															json_Male_ETI.put("nonforf_prov", arr_NonforfRate_ETI.get(i).getListNonforfRateSexgroup().get(ii).getListNonforfRateData().get(iii).getNonforf_rate().getNonforf_prov());
															json_Male_ETI.put("year", arr_NonforfRate_ETI.get(i).getListNonforfRateSexgroup().get(ii).getListNonforfRateData().get(iii).getNonforf_rate().getStat_year());
															if (arr_NonforfRate_ETI.get(i).getListNonforfRateSexgroup().get(ii).getListNonforfRateData().get(iii).getFile() != null) {
																json_Male_ETI.put("file_name", arr_NonforfRate_ETI.get(i).getListNonforfRateSexgroup().get(ii).getListNonforfRateData().get(iii).getFile().getFile_name());
																json_Male_ETI.put("file_ref", arr_NonforfRate_ETI.get(i).getListNonforfRateSexgroup().get(ii).getListNonforfRateData().get(iii).getFile().getFile_url());
																if (!arr_NonforfRate_ETI.get(i).getListNonforfRateSexgroup().get(ii).getListNonforfRateData().get(iii).getFile().getFile_url().equals("")) {
																	json_Male_ETI.put("layout_id", arr_NonforfRate_ETI.get(i).getListNonforfRateSexgroup().get(ii).getListNonforfRateData().get(iii).getNonforf_rate().getRate_layout_id());
																}else {
																	json_Male_ETI.put("layout_id", "");
																}
															}else {
																json_Male_ETI.put("file_name", "");
																json_Male_ETI.put("file_ref", "");
															}
															jsonarr_Male_ETI.put(json_Male_ETI);
														}
													}else if (arr_NonforfRate_ETI.get(i).getListNonforfRateSexgroup().get(ii).getSex().equals("FEMALE")) {
														for (int iii = 0; iii < arr_NonforfRate_ETI.get(i).getListNonforfRateSexgroup().get(ii).getListNonforfRateData().size(); iii++) {
															JSONObject json_Female_ETI 	= new JSONObject();
															json_Female_ETI.put("nonforf_rate_id", arr_NonforfRate_ETI.get(i).getListNonforfRateSexgroup().get(ii).getListNonforfRateData().get(iii).getNonforf_rate().getNonforf_rate_id());
															json_Female_ETI.put("nonforf_prov", arr_NonforfRate_ETI.get(i).getListNonforfRateSexgroup().get(ii).getListNonforfRateData().get(iii).getNonforf_rate().getNonforf_prov());
															json_Female_ETI.put("year", arr_NonforfRate_ETI.get(i).getListNonforfRateSexgroup().get(ii).getListNonforfRateData().get(iii).getNonforf_rate().getStat_year());
															if (arr_NonforfRate_ETI.get(i).getListNonforfRateSexgroup().get(ii).getListNonforfRateData().get(iii).getFile() != null) {
																json_Female_ETI.put("file_name", arr_NonforfRate_ETI.get(i).getListNonforfRateSexgroup().get(ii).getListNonforfRateData().get(iii).getFile().getFile_name());
																json_Female_ETI.put("file_ref", arr_NonforfRate_ETI.get(i).getListNonforfRateSexgroup().get(ii).getListNonforfRateData().get(iii).getFile().getFile_url());
																if (!arr_NonforfRate_ETI.get(i).getListNonforfRateSexgroup().get(ii).getListNonforfRateData().get(iii).getFile().getFile_url().equals("")) {
																	json_Female_ETI.put("layout_id", arr_NonforfRate_ETI.get(i).getListNonforfRateSexgroup().get(ii).getListNonforfRateData().get(iii).getNonforf_rate().getRate_layout_id());
																}else {
																	json_Female_ETI.put("layout_id", "");
																}
															}else {
																json_Female_ETI.put("file_name", "");
																json_Female_ETI.put("file_ref", "");
															}
															jsonarr_Female_ETI.put(json_Female_ETI);
														}
													}
												}
											}
											for (int i = 0; i < arr_Rate_layout_ETI.size(); i++) {
												if (i <= 1) {
													JSONObject json_Male_pattern_EIT = new JSONObject();
													json_Male_pattern_EIT.put("rate_layout_id", arr_Rate_layout_ETI.get(i).getRate_layout_id());
													json_Male_pattern_EIT.put("rate_cat_id", arr_Rate_layout_ETI.get(i).getRate_cat_id());
													json_Male_pattern_EIT.put("sub_cat_id", arr_Rate_layout_ETI.get(i).getSub_cat_id());
													json_Male_pattern_EIT.put("name_th", arr_Rate_layout_ETI.get(i).getName_th());
													json_Male_pattern_EIT.put("name_en", arr_Rate_layout_ETI.get(i).getName_en());
													json_Male_pattern_EIT.put("file_name_pattern", arr_Rate_layout_ETI.get(i).getFile_name_pattern());
													/////////////////Benz 16-12-2019 เพิ่ม การดึง lookup เพิ่มเติม RateLaoutDet
													tb_layoutdet2_jsonArray 				= new JSONArray();
													str_arr_Tax[0]	 = Integer.toString(arr_Rate_layout_ETI.get(i).getRate_cat_id());
													datareturnTax = mdc.searchTax(str_arr_Tax);
														if (datareturnTax.size() > 0) {
															for (int j = 0; j < datareturnTax.size(); j++) {
																for (int jj = 0; jj < datareturnTax.get(j).getListRateLayout().size(); jj++) {
																	tb_layoutdet1_jsonArray 	= new JSONArray(); 
																	tb_layoutdet_JSONObject 	= new JSONObject();
																	for (int jjj = 0; jjj < datareturnTax.get(j).getListRateLayout().get(jj).getListRateLayoutDet().size(); jjj++) {
																		json_rateLayoutTax = new JSONObject();
																		if (datareturnTax.get(j).getListRateLayout().get(jj).getListRateLayoutDet().get(jjj).getRate_layout_id() == arr_Rate_layout_ETI.get(i).getRate_layout_id()) {
																			json_rateLayoutTax.put("rate_layout_id",datareturnTax.get(j).getListRateLayout().get(jj).getListRateLayoutDet().get(jjj).getRate_layout_id());
																			json_rateLayoutTax.put("column_name",datareturnTax.get(j).getListRateLayout().get(jj).getListRateLayoutDet().get(jjj).getColumn_name());
																			json_rateLayoutTax.put("column_len",datareturnTax.get(j).getListRateLayout().get(jj).getListRateLayoutDet().get(jjj).getColumn_len());
																			tb_layoutdet1_jsonArray.put(json_rateLayoutTax);
																		}
																	}
																	if (tb_layoutdet1_jsonArray.length() > 0) {
																		tb_layoutdet_JSONObject.put("rate_layout_det",tb_layoutdet1_jsonArray);
																		tb_layoutdet2_jsonArray.put(tb_layoutdet_JSONObject);
																	}
																};
															}
														}
													///////////////////			
													json_Male_pattern_EIT.put("ratelayoutdet", tb_layoutdet2_jsonArray);
													jsonarr_Male_pattern_ETI.put(json_Male_pattern_EIT);
												}else {
													JSONObject json_Female_pattern_ETI = new JSONObject();
													json_Female_pattern_ETI.put("rate_layout_id", arr_Rate_layout_ETI.get(i).getRate_layout_id());
													json_Female_pattern_ETI.put("rate_cat_id", arr_Rate_layout_ETI.get(i).getRate_cat_id());
													json_Female_pattern_ETI.put("sub_cat_id", arr_Rate_layout_ETI.get(i).getSub_cat_id());
													json_Female_pattern_ETI.put("name_th", arr_Rate_layout_ETI.get(i).getName_th());
													json_Female_pattern_ETI.put("name_en", arr_Rate_layout_ETI.get(i).getName_en());
													json_Female_pattern_ETI.put("file_name_pattern", arr_Rate_layout_ETI.get(i).getFile_name_pattern());
													/////////////////Benz 16-12-2019 เพิ่ม การดึง lookup เพิ่มเติม RateLaoutDet
													tb_layoutdet2_jsonArray 				= new JSONArray();
													str_arr_Tax[0]	 = Integer.toString(arr_Rate_layout_ETI.get(i).getRate_cat_id());
													datareturnTax = mdc.searchTax(str_arr_Tax);
														if (datareturnTax.size() > 0) {
															for (int j = 0; j < datareturnTax.size(); j++) {
																for (int jj = 0; jj < datareturnTax.get(j).getListRateLayout().size(); jj++) {
																	tb_layoutdet1_jsonArray 	= new JSONArray(); 
																	tb_layoutdet_JSONObject 	= new JSONObject();
																	for (int jjj = 0; jjj < datareturnTax.get(j).getListRateLayout().get(jj).getListRateLayoutDet().size(); jjj++) {
																		json_rateLayoutTax = new JSONObject();
																		if (datareturnTax.get(j).getListRateLayout().get(jj).getListRateLayoutDet().get(jjj).getRate_layout_id() == arr_Rate_layout_ETI.get(i).getRate_layout_id()) {
																			json_rateLayoutTax.put("rate_layout_id",datareturnTax.get(j).getListRateLayout().get(jj).getListRateLayoutDet().get(jjj).getRate_layout_id());
																			json_rateLayoutTax.put("column_name",datareturnTax.get(j).getListRateLayout().get(jj).getListRateLayoutDet().get(jjj).getColumn_name());
																			json_rateLayoutTax.put("column_len",datareturnTax.get(j).getListRateLayout().get(jj).getListRateLayoutDet().get(jjj).getColumn_len());
																			tb_layoutdet1_jsonArray.put(json_rateLayoutTax);
																		}
																	}
																	if (tb_layoutdet1_jsonArray.length() > 0) {
																		tb_layoutdet_JSONObject.put("rate_layout_det",tb_layoutdet1_jsonArray);
																		tb_layoutdet2_jsonArray.put(tb_layoutdet_JSONObject);
																	}
																};
																
															}
														}
													///////////////////			
													json_Female_pattern_ETI.put("ratelayoutdet", tb_layoutdet2_jsonArray);
													jsonarr_Female_pattern_ETI.put(json_Female_pattern_ETI);
												}
											}
								////setRPU			
								JSONArray  rpu_jsonArray	= new JSONArray();
								JSONObject json_rpu = new JSONObject();
								json_rpu.put("year", jsonarr_Year_RPU);
								json_rpu.put("male", jsonarr_Male_RPU);
								json_rpu.put("female", jsonarr_Female_RPU);
								rpu_jsonArray.put(json_rpu);
								////setETI
								JSONArray  eti_jsonArray	= new JSONArray();
								JSONObject json_eti = new JSONObject();
								json_eti.put("year", jsonarr_Year_ETI);
								json_eti.put("male", jsonarr_Male_ETI);
								json_eti.put("female", jsonarr_Female_ETI);
								eti_jsonArray.put(json_eti);
								//set rpu_pattern
								JSONArray  rpu_pattern_jsonArray	= new JSONArray();
								JSONObject json_rpu_pattern = new JSONObject();
								json_rpu_pattern.put("male", jsonarr_Male_pattern_RPU);
								json_rpu_pattern.put("female", jsonarr_Female_pattern_RPU);
								rpu_pattern_jsonArray.put(json_rpu_pattern);
								//set eti_pattern
								JSONArray  eti_pattern_jsonArray	= new JSONArray();
								JSONObject json_eti_pattern = new JSONObject();
								json_eti_pattern.put("male", jsonarr_Male_pattern_ETI);
								json_eti_pattern.put("female", jsonarr_Female_pattern_ETI);
								eti_pattern_jsonArray.put(json_eti_pattern);
								///////////////////////////////////////////////////
								JSONArray  policy_value_jsonArray	= new JSONArray();
								JSONObject json_policy_value = new JSONObject();
								JSONObject selectbox_standard_risk_value = new JSONObject();
								selectbox_standard_risk_value.put("age_Band",age_Band_standard_risk_Array);
								selectbox_standard_risk_value.put("specific",specific_standard_risk_Array);
								selectbox_standard_risk_jsonArray.put(selectbox_standard_risk_value);
								JSONObject selectbox_standard_risk_value_P = new JSONObject();	//P
								selectbox_standard_risk_value_P.put("age_Band",age_Band_standard_risk_Array_P);
								selectbox_standard_risk_value_P.put("specific",specific_standard_risk_Array_P);
								selectbox_standard_risk_jsonArray_P.put(selectbox_standard_risk_value_P);
								json_policy_value.put("standard_risk",tb_policy_value_jsonArray);
								json_policy_value.put("standard_risk_row",select_tb_policy_value_low_jsonArray);
								json_policy_value.put("selectbox_standard_risk",selectbox_standard_risk_jsonArray);
								json_policy_value.put("selectbox_standard_risk_P",selectbox_standard_risk_jsonArray_P);
								json_policy_value.put("selectbox_standard_risk_row",selectbox_standard_risk_row_jsonArray);
								json_policy_value.put("rpu",rpu_jsonArray);
								json_policy_value.put("eti",eti_jsonArray);
								json_policy_value.put("rpu_pattern",rpu_pattern_jsonArray);
								json_policy_value.put("eti_pattern",eti_pattern_jsonArray);

							policy_value_jsonArray.put(json_policy_value);
							//
							responsejson.put("Tab_table_policy_value",policy_value_jsonArray);
							//
							responseText = responsejson.toString();
						}
						//TODO
						//Tab ผลประโยชน์/ความคุ้มครอง
						if (menu_CL_5.equals("true")) {
							int tab = 6;
							/*ArrayList<Benefit> datareturn;
							ArrayList<LookupCatAccessData> datareturn_datalool_up;
							ArrayList<FormulaCatAccesData> listFormulaCatAccesData;
							datareturn = mdcs.Benefits(tab);
							datareturn_datalool_up = mdcs.getBenefits_Lookup();
							listFormulaCatAccesData = mdcs.dividend_lookup(tab);*/
							
							mdcs.createDetail(tab);
							ArrayList<Benefit> datareturn = mdcs.getListBenefit();
							//ArrayList<LookupCatAccessData> datareturn_datalool_up =  mdcs.getListLookupCatAccessData();
							//ArrayList<FormulaCatAccesData> listFormulaCatAccesData =  mdcs.getlookupFormula();
							ArrayList<LookupCatAccessData> datareturn_datalool_up = this.listLookupCatAccessData;
							if(listFormulaCatAccesData == null )
							{
								mdcs.searchFomula();
								this.listFormulaCatAccesData = mdcs.getlookupFormula();
							}
							JSONArray	die_calendar_jsonArray		= new JSONArray();
							JSONArray	die_unit_jsonArray			= new JSONArray();
							JSONArray	die_sa_jsonArray			= new JSONArray();
							JSONArray	die_CV_PV_jsonArray			= new JSONArray();
							JSONArray	die_other_jsonArray			= new JSONArray();
							JSONArray	condition_jsonArray			= new JSONArray();
							JSONArray	accident_ADB_jsonArray		= new JSONArray();
							
							/** pun fixed **/
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
							
							/** end pun fixed **/
							for (int i = 0; i < datareturn_datalool_up.size(); i++) 
							{
								if (datareturn_datalool_up.get(i).getLookupCat().getEnum_name().equals("lu_period_unit")) {
									for (int ii = 0; ii < datareturn_datalool_up.get(i).getListLookupValue().size(); ii++) {
										JSONObject json_calendar = new JSONObject();
										json_calendar.put("pass", datareturn_datalool_up.get(i).getListLookupValue().get(ii).getEnum_value());
										json_calendar.put("text",datareturn_datalool_up.get(i).getListLookupValue().get(ii).getName_th());
										die_calendar_jsonArray.put(json_calendar);
									}
								} 
								//unit
								else if (datareturn_datalool_up.get(i).getLookupCat().getEnum_name().equals("lu_compare")) {
									for (int ii = 0; ii < datareturn_datalool_up.get(i).getListLookupValue().size(); ii++) {
										JSONObject json_unit = new JSONObject();
										json_unit.put("pass", datareturn_datalool_up.get(i).getListLookupValue().get(ii).getEnum_value());
										json_unit.put("text",datareturn_datalool_up.get(i).getListLookupValue().get(ii).getName_th());
										die_unit_jsonArray.put(json_unit);
									}
								}
								//SA ย้ายไปดึงของปั้น
							/*	else if(datareturn_datalool_up.get(i).getLookupCat().getEnum_name().equals("lu_benef_factor")) {
									for (int ii = 0; ii < datareturn_datalool_up.get(i).getListLookupValue().size(); ii++) {
										JSONObject json_sa = new JSONObject();
										json_sa.put("pass", datareturn_datalool_up.get(i).getListLookupValue().get(ii).getEnum_value());
										json_sa.put("text",datareturn_datalool_up.get(i).getListLookupValue().get(ii).getName_th());
										die_sa_jsonArray.put(json_sa);
									}
								}*/
								
								else if(datareturn_datalool_up.get(i).getLookupCat().getEnum_name().equals("lu_limit_amt_type")) {
									for (int ii = 0; ii < datareturn_datalool_up.get(i).getListLookupValue().size(); ii++) {
										JSONObject json_factor = new JSONObject();
										json_factor.put("pass", datareturn_datalool_up.get(i).getListLookupValue().get(ii).getEnum_value());
										json_factor.put("text",datareturn_datalool_up.get(i).getListLookupValue().get(ii).getName_th());
										benef_factor_jsonArray.put(json_factor);
									}
								}
								
								else if(datareturn_datalool_up.get(i).getLookupCat().getEnum_name().equals("lu_condition")) {
									for (int ii = 0; ii < datareturn_datalool_up.get(i).getListLookupValue().size(); ii++) {
										JSONObject json_condition = new JSONObject();
										json_condition.put("pass", datareturn_datalool_up.get(i).getListLookupValue().get(ii).getEnum_value());
										json_condition.put("text",datareturn_datalool_up.get(i).getListLookupValue().get(ii).getName_th());
										condition_jsonArray.put(json_condition);
									}
								}
								//เงินคืนทุกระยะ
								else if(datareturn_datalool_up.get(i).getLookupCat().getEnum_name().equals("lu_cov_unit_type")) {
									for (int ii = 0; ii < datareturn_datalool_up.get(i).getListLookupValue().size(); ii++) {
										JSONObject json_unit_type = new JSONObject();
										json_unit_type.put("pass", datareturn_datalool_up.get(i).getListLookupValue().get(ii).getEnum_value());
										json_unit_type.put("text",datareturn_datalool_up.get(i).getListLookupValue().get(ii).getName_th());
										unit_type_jsonArray.put(json_unit_type);
									}
								}
								
								//เสียชีวิต Premium
								else if(datareturn_datalool_up.get(i).getLookupCat().getEnum_name().equals("lu_benef_factor_premium")) {
									for (int ii = 0; ii < datareturn_datalool_up.get(i).getListLookupValue().size(); ii++) {
										JSONObject json_benefFac_type = new JSONObject();
										json_benefFac_type.put("pass", datareturn_datalool_up.get(i).getListLookupValue().get(ii).getEnum_value());
										json_benefFac_type.put("text",datareturn_datalool_up.get(i).getListLookupValue().get(ii).getName_th());
										benef_factorPremium_jsonArray.put(json_benefFac_type);
									}
								}
							/*	if(datareturn_datalool_up.get(i).getLookupCat().getEnum_name().equals("lu_benef_scope")) {
									for (int ii = 0; ii < datareturn_datalool_up.get(i).getListLookupValue().size(); ii++) {
										JSONObject json_unit_type = new JSONObject();
										json_unit_type.put("pass", datareturn_datalool_up.get(i).getListLookupValue().get(ii).getEnum_value());
										json_unit_type.put("text",datareturn_datalool_up.get(i).getListLookupValue().get(ii).getName_th());
										cov_benef_scope_jsonArray.put(json_unit_type);
									}
								}*/
								//เงินปันผล FIXME
								/*if(datareturn_datalool_up.get(i).getLookupCat().getEnum_name().equals("lu_benef_period")) {
									for (int ii = 0; ii < datareturn_datalool_up.get(i).getListLookupValue().size(); ii++) {
										JSONObject json_unit_type = new JSONObject();
										json_unit_type.put("pass", datareturn_datalool_up.get(i).getListLookupValue().get(ii).getEnum_value());
										json_unit_type.put("text",datareturn_datalool_up.get(i).getListLookupValue().get(ii).getName_th());
										benef_period_jsonArray.put(json_unit_type);
									}
								}*/
								
							}
							///FormulaCatAccesData
							for (int i = 0; i < listFormulaCatAccesData.size(); i++) 
							{
								if (listFormulaCatAccesData.get(i).getFormulaCat().getFormula_cat_id() == 6) {
									for (int ii = 0 ; ii < listFormulaCatAccesData.get(i).getListFormula().size(); ii++) {
										JSONObject json_fomula = new JSONObject();
										json_fomula.put("pass",  listFormulaCatAccesData.get(i).getListFormula().get(ii).getFormula_id());
										json_fomula.put("text",  listFormulaCatAccesData.get(i).getListFormula().get(ii).getName_th());
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
							responsejson.put("Tab_Benefits",benefits_jsonArray);
							//
							responseText = responsejson.toString();
						}
						//Tab ขออนุมัติ
						if (menu_CL_6.equals("true")) {
							//System.out.println("//Tab ขออนุมัติ");
						}
			////End///////////////////////////////////////////////////////////////////					
			}else if (method.equals("calculation_premium_rates")) 
			{
				try {
					PremAssumpRateData par = new PremAssumpRateData();
					JSONArray  calculation_premium_rates_jsonArray	= new JSONArray();
					String calculation_premium_rates_type  			= request.getParameter("type");
					String gender   								= request.getParameter("gender");
					
					ArrayList<LookupPremAssumpRateAccessData> status_return1 = par.searchLookupPremAssumpRateOL(gender,calculation_premium_rates_type);
					for (int i = 0; i < status_return1.size(); i++) {
						JSONObject json_mortalityTli = new JSONObject();
						json_mortalityTli.put("pass", status_return1.get(i).getPrem_assump_rate().getPrem_assump_rate_id());
						json_mortalityTli.put("text", status_return1.get(i).getPrem_assump_rate().getName_th());
						json_mortalityTli.put("stat_year", status_return1.get(i).getMortality_oic().getStat_year());
						json_mortalityTli.put("file_id", status_return1.get(i).getPrem_assump_rate().getFile_id());
						if (status_return1.get(i).getPrem_assump_rate().getFile_id() != 0) {
							json_mortalityTli.put("file_name", status_return1.get(i).getFile().getFile_name());
						}else {
							json_mortalityTli.put("file_name", "");
						}
						calculation_premium_rates_jsonArray.put(json_mortalityTli);
						/////////////
						
						//mortalityTli_jsonArray.put(json_mortalityTli);
						//json_calculation_premium_rates.put("calculation_premium",mortalityTli_jsonArray);
					}
					/*if (calculation_premium_rates_type.equals("D")) {
						
						status_return = getdata.searchMortalityTli(gender);
						 if (status_return.equals("Success")) {
							 datareturn_listMortality_tli = (getdata.getListMortalityTli());
								for (int i = 0; i < datareturn_listMortality_tli.size(); i++) {
									JSONObject json_mortalityTli = new JSONObject();
									json_mortalityTli.put("pass", datareturn_listMortality_tli.get(i).getMort_tli_id());
									json_mortalityTli.put("text", datareturn_listMortality_tli.get(i).getName_th());

									mortalityTli_jsonArray.put(json_mortalityTli);
									json_calculation_premium_rates.put("calculation_premium",mortalityTli_jsonArray);
								}
						}
					}else if (calculation_premium_rates_type.equals("TPD")) {
						String gender   = request.getParameter("gender");
						status_return = getdata.searchTpdTli(gender);
						if (status_return.equals("Success")) {
							datareturn_listTpd_tli = (getdata.getListTpdTli());
							for (int i = 0; i < datareturn_listTpd_tli.size(); i++) {
								JSONObject json_Tli_tli = new JSONObject();
								json_Tli_tli.put("pass", datareturn_listTpd_tli.get(i).getTpd_tli_id());
								json_Tli_tli.put("text", datareturn_listTpd_tli.get(i).getName_th());
								tpd_tli_jsonArray.put(json_Tli_tli);
								json_calculation_premium_rates.put("calculation_premium",tpd_tli_jsonArray);
							}
						}
					}*/
					
					responsejson.put("List_calculation_premium_rates",calculation_premium_rates_jsonArray);
					responseText = responsejson.toString();
				} catch (Exception e) {
					e.printStackTrace();
				}
			}else if (method.equals("searchBundleSelect")) 
			{
				BundleData bd = new BundleData ();
				ArrayList<Coverage> searchBundleSelectData = bd.searchBundleSelectData();
				JSONArray  coverage_jsonArray	= new JSONArray();
				for (int i = 0; i < searchBundleSelectData.size(); i++) {
					JSONObject json_coverage		= new JSONObject();
					json_coverage.put("cov_code", searchBundleSelectData.get(i).getCov_code());
					json_coverage.put("name_th", searchBundleSelectData.get(i).getName_th());
					coverage_jsonArray.put(json_coverage);
				}
				responsejson.put("additional_Contract_Coverage",coverage_jsonArray);
				responseText = responsejson.toString();
			}
			json = responseText;
			System.out.println("Lookup////"+json);
			out.print(json);
			
		}catch (Exception e) {
			e.printStackTrace();
		}
	}
}
