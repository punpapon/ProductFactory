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
import layout.bean.productfac.beanset.LookupCatAccessData;
import layout.bean.productfac.beanset.LookupValueGroupAccessData;
import layout.bean.productfac.beanset.MortalityTliAccessData;
import layout.bean.productfac.beanset.RateCatAccessData;
import layout.bean.productfac.beanset.TpdTiliAccessData;
import layout.bean.productfac.benefit.Benefit;
import layout.bean.productfac.coverage.Coverage;
import layout.bean.productfac.lookup.Document_type;
import layout.bean.productfac.lookup.Prem_assump_rate;
import layout.bean.productfac.workflow.Coverage_task;
import service.MainInsureTypeService;
import service.baseplan.BasePlanCreate;
import service.clone.CloneCoverageFileUpload;
import service.clone.CloneCoverageFilingChannel;
import service.clone.CloneCoverageMode;
import service.clone.CloneCoverageParticipant;
import service.clone.CloneCoveragePremAssumpRate;
import service.clone.CloneCoveragePremiumPeriod;
import service.center.CovCatSubCodeData;
import service.center.DataValuesSeparate;
import service.center.LookupValueGroupData;
import service.center.MainInsureDetailCreate;
import service.center.PremAssumpRateData;
import service.center.ProductCloneData;
import service.center.SubCatData;
import service.center.WorkFlowCoverage;
import service.clone.BenefitClone;
import service.clone.CloneCoverageAgeCalcMeth;
import service.fnc.ConstantRateCatIDValues;
import service.fnc.ConstantSubCatIDValues;
import service.fnc.ConstantValues;
import service.fnc.PDFFnc;


/**
 * Servlet implementation class BasePlanCL_Data_default_Servlet
 */
@WebServlet("/BasePlanCL_Data_default_Servlet")
public class BasePlanCL_Data_default_Servlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    private String userId;
	private ArrayList<LookupCatAccessData> listLookupCatAccessData;
    /**
     * @see HttpServlet#HttpServlet()
     */
    public BasePlanCL_Data_default_Servlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at:").append(request.getContextPath());
		//processRequest(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//doGet(request, response);
		processRequest(request, response);
	}
	
	protected void processRequest(HttpServletRequest request, HttpServletResponse response)  throws ServletException, IOException {
		try {
			HttpSession session = request.getSession();
			ConstantValues.USER_CODE = session.getAttribute("userID").toString();
			String getuserID = session.getAttribute("userID").toString();
			if (!getuserID.equals("")) {
				userId =  getuserID ;
			}else {
				System.out.println("================== NO USER ====================");
			}
			ConstantValues.PRODUCT_TYPE = "CL";
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
			
			String groupName			= request.getParameter("groupName");
			ConstantValues.GROUP_NAME 	= groupName;
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
				
			} else if(method.equals("create_Base_Plan")) {
				
				String menu_CL_1 			= request.getParameter("menu_CL_1");
				String menu_CL_2 			= request.getParameter("menu_CL_2");
				String menu_CL_3 			= request.getParameter("menu_CL_3");
				String menu_CL_4 			= request.getParameter("menu_CL_4");
				String menu_CL_5 			= request.getParameter("menu_CL_5");
				String menu_CL_6 			= request.getParameter("menu_CL_6");
				String menu_CL_7 			= request.getParameter("menu_CL_7");
				String main_contracttype 	= request.getParameter("main_contracttype");
				
				SubCatData scd = new SubCatData();
				String passInsurance = "";
				if (main_contracttype.equals("1")) {
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
								listSearchSubCat_premium = cscd.searchSubCatByPmstdRateCat(main_contract3);
								JSONArray jsonArr_benefitsCoverage = new JSONArray(listSearchSubCat_premium);
								for (int i = 0; i < jsonArr_benefitsCoverage.length(); i++) {
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
				}else if(main_contracttype.equals("Clone")) {
					String cov_code 						= request.getParameter("cov_code");
					Coverage coverage = new Coverage();
					
					//Coverage
					ProductCloneData productCloneData 	= new ProductCloneData();
					coverage = productCloneData.cloneCoverage(cov_code);
					System.out.println("Clone:"+cov_code+"|"+"New:"+coverage.getCov_code());
					//Mode
					CloneCoverageMode cloneCoverageMode = new CloneCoverageMode();
					cloneCoverageMode.cloneCoverageMode(cov_code, coverage.getCov_code());
					//FilingChannel
					CloneCoverageFilingChannel cloneCoverageFilingChannel = new CloneCoverageFilingChannel();
					cloneCoverageFilingChannel.cloneCoverageFilingChannel(cov_code, coverage.getCov_code());
					//Participant
					CloneCoverageParticipant cloneCoverageParticipant = new CloneCoverageParticipant();
					cloneCoverageParticipant.cloneCoverageParticipant(cov_code, coverage.getCov_code());
					//AgeCalMeth
					CloneCoverageAgeCalcMeth cloneCoverageAgeCalcMeth = new CloneCoverageAgeCalcMeth();
					cloneCoverageAgeCalcMeth.cloneCoverageAgeCalcMeth(cov_code, coverage.getCov_code());
					//PremiumPeriod
					CloneCoveragePremiumPeriod cloneCoveragePremiumPeriod = new CloneCoveragePremiumPeriod();
					cloneCoveragePremiumPeriod.cloneCoveragePremiumPeriod(cov_code, coverage.getCov_code());
					//PremAssumpRate 
					CloneCoveragePremAssumpRate cloneCoveragePremAssumpRate = new CloneCoveragePremAssumpRate();
					cloneCoveragePremAssumpRate.cloneCoveragePremAssumpRate(cov_code, coverage.getCov_code());
					
					//Policy
					/*ClonePolicyWording clonePolicyWording = new ClonePolicyWording();
					clonePolicyWording.clonePolicyWording(cov_code, coverage.getCov_code());*/
					//File
					CloneCoverageFileUpload cf = new CloneCoverageFileUpload();
					cf.cloneCoverageRatelayout(cov_code, coverage.getCov_code());
					//Benefit
					BenefitClone benefitClone = new BenefitClone();
					benefitClone.clondBenefit(cov_code, coverage.getCov_code());
					
					passInsurance = coverage.getCov_code();
					ConstantValues.COV_CODE = passInsurance;
				}
				else {
					///BEnz 17-10-2019 set cov_code in Policy Wording
					String cov_code			= request.getParameter("cov_code");
					ConstantValues.COV_CODE = cov_code;
				}
				 //TODO
				//MainInsureDetailCreateService mdcs = new MainInsureDetailCreateService ();
				MainInsureDetailCreate mdcs = new MainInsureDetailCreate();
				LookupValueGroupData lookupValueGroupData = new LookupValueGroupData();
						//Tab ข้อมูลทั่วไป Basic Information
						if (menu_CL_1.equals("true")) {
							int tab = 1;
							/////////////////////////////////////////////////////////////////
							//ArrayList<LookupCatAccessData> datareturn;
							//datareturn = mdcs.BasicInfo_lookup(tab);
							mdcs.createDetail(tab);
							//ArrayList<LookupCatAccessData> datareturn = mdcs.getListLookupCatAccessData();
							this.listLookupCatAccessData  = mdcs.getListLookupCatAccessData();
							JSONArray	mode_jsonArray	= new JSONArray();
							JSONArray	cal_Age_jsonArray	= new JSONArray();
							JSONArray	insurance_premium_jsonArray	= new JSONArray();
							JSONArray	protect_Type_jsonArray	= new JSONArray();
							JSONArray	contract_Type_jsonArray	= new JSONArray();
							JSONArray	calendar_jsonArray	= new JSONArray();
							JSONArray	table_Death_jsonArray	= new JSONArray();
							JSONArray	table_Disability_jsonArray	= new JSONArray();
							JSONArray	table_Death_jsonArray2	= new JSONArray();
							JSONArray	table_Disability_jsonArray2	= new JSONArray();
							
							ArrayList<LookupValueGroupAccessData> datareturn_Lookup_groupAgeUnit =  lookupValueGroupData.getListGroup_Age_Unit();
							//calendar
							for (LookupValueGroupAccessData lookupValueGroupAccessData : datareturn_Lookup_groupAgeUnit) {
								JSONObject json_calendar = new JSONObject();
								json_calendar.put("pass",  lookupValueGroupAccessData.getLookup_enum_value());
								json_calendar.put("text",  lookupValueGroupAccessData.getLookup_value_name());
								calendar_jsonArray.put(json_calendar);
							}
							
							for (int i = 0 ; i < listLookupCatAccessData.size(); i++) {
								//mode
								if (listLookupCatAccessData.get(i).getLookupCat().getEnum_name().equals("lu_mode")) {
									for(int ii = 0 ; ii < listLookupCatAccessData.get(i).getListLookupValue().size(); ii++)
									{
										JSONObject json_Mode = new JSONObject();
										json_Mode.put("pass", listLookupCatAccessData.get(i).getListLookupValue().get(ii).getSystem_code());
										json_Mode.put("text", listLookupCatAccessData.get(i).getListLookupValue().get(ii).getName_th());
										json_Mode.put("value",listLookupCatAccessData.get(i).getListLookupValue().get(ii).getEnum_value());
										mode_jsonArray.put(json_Mode);
									}
								}
								//เบี้ยประกัน
								if (listLookupCatAccessData.get(i).getLookupCat().getEnum_name().equals("lu_prem_rule")) {
									for(int ii = 0 ; ii < listLookupCatAccessData.get(i).getListLookupValue().size(); ii++)
									{
										JSONObject json_insurance_premium = new JSONObject();
										json_insurance_premium.put("pass", listLookupCatAccessData.get(i).getListLookupValue().get(ii).getEnum_value());
										json_insurance_premium.put("text", listLookupCatAccessData.get(i).getListLookupValue().get(ii).getName_th());
										insurance_premium_jsonArray.put(json_insurance_premium);
									}
								}
								//protect_Type	(ประเภทความคุ้มครอง)
								if (listLookupCatAccessData.get(i).getLookupCat().getEnum_name().equals("lu_cov_unit_type")) {
									for(int ii = 0 ; ii < listLookupCatAccessData.get(i).getListLookupValue().size(); ii++)
									{
										JSONObject json_protect_Type = new JSONObject();
										json_protect_Type.put("pass", listLookupCatAccessData.get(i).getListLookupValue().get(ii).getEnum_value());
										json_protect_Type.put("text", listLookupCatAccessData.get(i).getListLookupValue().get(ii).getName_th());
										protect_Type_jsonArray.put(json_protect_Type);
									}
								}
								//ประเภทสัญญา
								if (listLookupCatAccessData.get(i).getLookupCat().getEnum_name().equals("lu_contract_term")) {
									for (int ii = 0 ; ii < listLookupCatAccessData.get(i).getListLookupValue().size(); ii++) {
										JSONObject json_contract_Type = new JSONObject();
										json_contract_Type.put("pass", listLookupCatAccessData.get(i).getListLookupValue().get(ii).getEnum_value());
										json_contract_Type.put("text", listLookupCatAccessData.get(i).getListLookupValue().get(ii).getName_th());
										contract_Type_jsonArray.put(json_contract_Type);
									}
								}
								
								////เพศ
								if(listLookupCatAccessData.get(i).getLookupCat().getEnum_name().equals("lu_gender")) {
									String text = "";
									for(int ii = 0 ; ii < listLookupCatAccessData.get(i).getListLookupValue().size(); ii++)
									{
										if (listLookupCatAccessData.get(i).getListLookupValue().get(ii).getName_th().equals("ชายหรือหญิง")) {
											text = "รวม";
										}else {
											text = listLookupCatAccessData.get(i).getListLookupValue().get(ii).getName_th();
										}
										//table_Death (ตารางมรณะที่ใช้ในการคำนวณอัตราเบี้ย)
										JSONObject json_table_Death = new JSONObject();
										json_table_Death.put("pass", listLookupCatAccessData.get(i).getListLookupValue().get(ii).getEnum_value());
										json_table_Death.put("text", text);
										table_Death_jsonArray.put(json_table_Death);
										
										//table_Disability (ตารางทุพพลภาพที่ใช้ในการคำนวณอัตราเบี้ย)
										JSONObject json_table_Disability = new JSONObject();
										json_table_Disability.put("pass", listLookupCatAccessData.get(i).getListLookupValue().get(ii).getEnum_value());
										json_table_Disability.put("text", text);
										table_Disability_jsonArray.put(json_table_Disability);
									}
								}
								//cal_Age
								if (listLookupCatAccessData.get(i).getLookupCat().getEnum_name().equals("lu_age_calc_meth")) {
									for (int ii = 0 ; ii < listLookupCatAccessData.get(i).getListLookupValue().size(); ii++) {
										JSONObject json_cal_Age = new JSONObject();
										json_cal_Age.put("pass", listLookupCatAccessData.get(i).getListLookupValue().get(ii).getEnum_value());
										json_cal_Age.put("text", listLookupCatAccessData.get(i).getListLookupValue().get(ii).getName_th());
										cal_Age_jsonArray.put(json_cal_Age);
									}
								}
							}
							ArrayList<MortalityTliAccessData> datareturn2;
							datareturn2 = mdcs.getListMortalityTli();
							for (int i = 0; i < datareturn2.size(); i++) {
								JSONObject json_table_Death2 = new JSONObject();
								json_table_Death2.put("pass", datareturn2.get(i).getMortalityTli().getMort_tli_id());
								json_table_Death2.put("text", datareturn2.get(i).getMortalityTli().getName_th());
								table_Death_jsonArray2.put(json_table_Death2);
							}
							
							ArrayList<TpdTiliAccessData> datareturn3;
							datareturn3 = mdcs.getListTpdTiliAccessData();
							for (int i = 0; i < datareturn3.size(); i++) {
								JSONObject json_table_Disability2 = new JSONObject();
								json_table_Disability2.put("pass", datareturn3.get(i).getTpdTli().getTpd_tli_id());
								json_table_Disability2.put("text", datareturn3.get(i).getTpdTli().getName_th());
								table_Disability_jsonArray2.put(json_table_Disability2);
							}
							//TODO
							//*Filing Channel
							/*ArrayList<FilingChannelAccessData> datareturn4;
							datareturn4 = mdcs.getfiling_Channel();*/
							
							ArrayList<FilingChannelAccessData> datareturn4 = mdcs.getListFilingChannelAccessData();
							JSONArray	filing_Channel_jsonArray	= new JSONArray();
							for (int i = 0; i < datareturn4.size(); i++) {
								datareturn4.get(i).getFilingChannel().getName_th();
								JSONObject json_filing_Channel = new JSONObject();
								json_filing_Channel.put("pass", Integer.toString(i+1));
								json_filing_Channel.put("text", datareturn4.get(i).getFilingChannel().getName_th());
								filing_Channel_jsonArray.put(json_filing_Channel);
							}
							
							/*//tb_TaxReduce
							ArrayList<RateCatAccessData> datareturn5;
							datareturn5 = mdcs.getRateCatAccessData();
							JSONArray	tb_TaxReduce_jsonArray	= new JSONArray();
							for (int i = 0; i < datareturn5.size(); i++) {
								ArrayList<Rate_sub_cat> rate_sub_cat_arr = datareturn5.get(i).getListRateSubCat();
								ArrayList<RateLayoutAccessData> rateLayout_arr = datareturn5.get(i).getListRateLayout();
								
								for(RateLayoutAccessData rate : rateLayout_arr) {
									System.out.println("============rate======= : " + rate.getRateLayout().getName_th());
								}
								for (int ii = 0 ; ii < rate_sub_cat_arr.size(); ii++) {
									JSONObject json_tb_TaxReduce1 = new JSONObject();
									JSONArray tb_TaxReduce_jsonArray2 	= new JSONArray();
									json_tb_TaxReduce1.put("text", rate_sub_cat_arr.get(ii).getName_th());
									json_tb_TaxReduce1.put("pass", rate_sub_cat_arr.get(ii).getRate_cat_id());
									json_tb_TaxReduce1.put("sub_rate_cat", rate_sub_cat_arr.get(ii).getSub_cat_id());
									
									for (int iii = 0 ; iii < rateLayout_arr.size(); iii++) {
										
										System.out.println("--/"+rateLayout_arr.get(iii).getRateLayout().getFile_name_pattern());
										
										
										System.out.println("----------------------------------------------");
										JSONObject json_tb_TaxReduce2 = new JSONObject();
										if (rate_sub_cat_arr.get(ii).getRate_cat_id() == rateLayout_arr.get(iii).getRateLayout().getRate_cat_id() && rate_sub_cat_arr.get(ii).getSub_cat_id() == rateLayout_arr.get(iii).getRateLayout().getSub_cat_id()) {
											json_tb_TaxReduce2.put("file_format", rateLayout_arr.get(iii).getRateLayout().getFile_name_pattern());
											tb_TaxReduce_jsonArray2.put(json_tb_TaxReduce2);
											
										}
										json_tb_TaxReduce1.put("file", tb_TaxReduce_jsonArray2);
										 
									}
										tb_TaxReduce_jsonArray.put(json_tb_TaxReduce1);
								}
							}*/
							
							ArrayList<String[]> listtb_TaxReduce 	= new ArrayList<>();//8,9
							listtb_TaxReduce 						= scd.searchSubCatByTaxRateCat();
							JSONArray	tb_TaxReduce_jsonArray1		= new JSONArray();	
							JSONArray	tb_TaxReduce_Type8			= new JSONArray();	
							JSONArray	tb_TaxReduce_Type9			= new JSONArray();	
							JSONArray	tb_layoutType8_jsonArray 	= new JSONArray();
							JSONArray	tb_layoutType9_jsonArray 	= new JSONArray();
							JSONObject tb_TaxReduceAll_JSONObject 	= new JSONObject();
							
							String[] rate_Type = ConstantRateCatIDValues.getTaxRateCat();

							if (listtb_TaxReduce.size() != 0) {
								
								int 	check_Duo_type8 	= 1;
								int 	check_Duo_type9 	= 1;
								for (int i = 0; i < listtb_TaxReduce.size(); i++) {
									if(listtb_TaxReduce.get(i)[3].toString().equals(rate_Type[0])) {
										JSONObject json_layout_premium = new JSONObject();
										json_layout_premium.put("layout",listtb_TaxReduce.get(i)[0]);
										tb_layoutType8_jsonArray.put(json_layout_premium);
										
										if (check_Duo_type8 == 1) {
											JSONObject json_tb_Insurance_premium = new JSONObject();
											json_tb_Insurance_premium.put("sub_rate_cat",listtb_TaxReduce.get(i)[1]);
											json_tb_Insurance_premium.put("text",listtb_TaxReduce.get(i)[2]);
											json_tb_Insurance_premium.put("rate_cat_id",listtb_TaxReduce.get(i)[3]);
											json_tb_Insurance_premium.put("file",tb_layoutType8_jsonArray);
											tb_TaxReduce_Type8.put(json_tb_Insurance_premium);
										}else {
											tb_TaxReduce_Type8	= new JSONArray();	
											JSONObject json_tb_Insurance_premium = new JSONObject();
											json_tb_Insurance_premium.put("sub_rate_cat",listtb_TaxReduce.get(i)[1]);
											json_tb_Insurance_premium.put("text",listtb_TaxReduce.get(i)[2]);
											json_tb_Insurance_premium.put("rate_cat_id",listtb_TaxReduce.get(i)[3]);
											json_tb_Insurance_premium.put("file",tb_layoutType8_jsonArray);
											tb_TaxReduce_Type8.put(json_tb_Insurance_premium);
										}
										check_Duo_type8 ++;
									}else if(listtb_TaxReduce.get(i)[3].toString().equals(rate_Type[1])) {
										JSONObject json_layout_premium = new JSONObject();
										json_layout_premium.put("layout",listtb_TaxReduce.get(i)[0]);
										tb_layoutType9_jsonArray.put(json_layout_premium);
										
										if (check_Duo_type9 == 1) {
											JSONObject json_tb_Insurance_premium = new JSONObject();
											json_tb_Insurance_premium.put("sub_rate_cat",listtb_TaxReduce.get(i)[1]);
											json_tb_Insurance_premium.put("text",listtb_TaxReduce.get(i)[2]);
											json_tb_Insurance_premium.put("rate_cat_id",listtb_TaxReduce.get(i)[3]);
											json_tb_Insurance_premium.put("file",tb_layoutType9_jsonArray);
											tb_TaxReduce_Type9.put(json_tb_Insurance_premium);
										}else {
											tb_TaxReduce_Type9	= new JSONArray();	
											JSONObject json_tb_Insurance_premium = new JSONObject();
											json_tb_Insurance_premium.put("sub_rate_cat",listtb_TaxReduce.get(i)[1]);
											json_tb_Insurance_premium.put("text",listtb_TaxReduce.get(i)[2]);
											json_tb_Insurance_premium.put("rate_cat_id",listtb_TaxReduce.get(i)[3]);
											json_tb_Insurance_premium.put("file",tb_layoutType9_jsonArray);
											tb_TaxReduce_Type9.put(json_tb_Insurance_premium);
										}
										check_Duo_type9 ++;
									}
								}
								tb_TaxReduceAll_JSONObject.put("type", tb_TaxReduce_Type8);
								tb_TaxReduceAll_JSONObject.put("type2", tb_TaxReduce_Type9);
								tb_TaxReduce_jsonArray1.put(tb_TaxReduceAll_JSONObject);
							}
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
							basic_Info_jsonArray.put(json_basic_Info);
							//
							responsejson.put("Tab_Basic_Information",basic_Info_jsonArray);
							responseText = responsejson.toString();
						}
						//TODO
						//Policy Wording
						if (menu_CL_7.equals("true")) {
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
						//Tab การใช้สิทธิ์ตามกรมธรรม์
						if (menu_CL_2.equals("true")) {
							//select ปิดบัญชีขยายเวลา (ETI)
							JSONArray	ETI_jsonArray	= new JSONArray();
							String []	ETI_pass = {""};
							String []	ETI_text = {"None"};
							for (int i = 0; i < ETI_pass.length; i++) {
								JSONObject json_ETI = new JSONObject();
								json_ETI.put("pass",ETI_pass[i]);
								json_ETI.put("text",ETI_text[i]);
								ETI_jsonArray.put(json_ETI);
							}
							//ปิดบัญชีขยายเวลาอัตโนมัติ (Auto ETI)
							JSONArray	auto_ETI_jsonArray	= new JSONArray();
							String []	auto_ETI_pass = {""};
							String []	auto_ETI_text = {"None"};
							for (int i = 0; i < auto_ETI_pass.length; i++) {
								JSONObject json_auto_ETI = new JSONObject();
								json_auto_ETI.put("pass",auto_ETI_pass[i]);
								json_auto_ETI.put("text",auto_ETI_text[i]);
								auto_ETI_jsonArray.put(json_auto_ETI);
							}
							//ETI คุ้มครองถึง
							JSONArray	ETI_TO_jsonArray	= new JSONArray();
							String []	ETI_TO_pass = {""};
							String []	ETI_TO_text = {"None"};
							for (int i = 0; i < ETI_TO_pass.length; i++) {
								JSONObject json_ETI_TO = new JSONObject();
								json_ETI_TO.put("pass",ETI_TO_pass[i]);
								json_ETI_TO.put("text",ETI_TO_text[i]);
								ETI_TO_jsonArray.put(json_ETI_TO);
							}
							//select  ปิดบัญชีมูลค่าเงินสำเร็จ (RPU)
							JSONArray	RPU_jsonArray	= new JSONArray();
							String []	RPU_pass = {""};
							String []	RPU_text = {"None"};
							for (int i = 0; i < RPU_pass.length; i++) {
								JSONObject json_RPU = new JSONObject();
								json_RPU.put("pass",RPU_pass[i]);
								json_RPU.put("text",RPU_text[i]);
								RPU_jsonArray.put(json_RPU);
							}
							//ปิดบัญชีมูลค่าเงินสำเร็จอัตโนมัติ (Auto RPU)
							JSONArray	auto_RPU_jsonArray	= new JSONArray();
							String []	auto_RPU_pass = {""};
							String []	auto_RPU_text = {"None"};
							for (int i = 0; i < auto_RPU_pass.length; i++) {
								JSONObject json_auto_RPU = new JSONObject();
								json_auto_RPU.put("pass",auto_RPU_pass[i]);
								json_auto_RPU.put("text",auto_RPU_text[i]);
								auto_RPU_jsonArray.put(json_auto_RPU);
							}
							//RPU คุ้มครองถึง
							JSONArray	RPU_TO_jsonArray	= new JSONArray();
							String []	RPU_TO_pass = {""};
							String []	RPU_TO_text = {"None"};
							for (int i = 0; i < RPU_TO_pass.length; i++) {
								JSONObject json_RPU_TO = new JSONObject();
								json_RPU_TO.put("pass",RPU_TO_pass[i]);
								json_RPU_TO.put("text",RPU_TO_text[i]);
								RPU_TO_jsonArray.put(json_RPU_TO);
							}
							//calendar
							JSONArray	calendar_jsonArray	= new JSONArray();
							String []	calendar_pass = {"","1","2","3"};
							String []	calendar_text = {"None","วัน","เดือน","ปี"};
							for (int i = 0; i < calendar_pass.length; i++) {
								JSONObject json_calendar = new JSONObject();
								json_calendar.put("pass",calendar_pass[i]);
								json_calendar.put("text",calendar_text[i]);
								calendar_jsonArray.put(json_calendar);
							}
							
							JSONArray exercise_rights_insurance_jsonArray	= new JSONArray();
							JSONObject exercise_rights_insurance = new JSONObject();
							//ETI
							exercise_rights_insurance.put("ETI", ETI_jsonArray);
							exercise_rights_insurance.put("Auto_ETI", auto_ETI_jsonArray);
							exercise_rights_insurance.put("ETI_To", ETI_TO_jsonArray);
							//RPU
							exercise_rights_insurance.put("RPU", RPU_jsonArray);
							exercise_rights_insurance.put("Auto_RPU", auto_RPU_jsonArray);
							exercise_rights_insurance.put("RPU_To", RPU_TO_jsonArray);
							//calendar
							exercise_rights_insurance.put("calendar", calendar_jsonArray);
							exercise_rights_insurance_jsonArray.put(exercise_rights_insurance);
							
							responsejson.put("Tab_exercise_rights_insurance",exercise_rights_insurance_jsonArray);
							//
							responseText = responsejson.toString();
						}
						//TODO
						//Tab การคำนวนเบี้ยประกัน
						if (menu_CL_3.equals("true")) {
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
							ArrayList<RateCatAccessData> datareturn2;
							ArrayList<RateCatAccessData> datareturn2_1;
							datareturn2 = mdcs.getListRateCatAccessData();//mdcs.geRateCat();
							JSONObject json_cal_insurance_premiums = new JSONObject();
							for (int i = 0 ; i < datareturn2.size(); i++) { //1,3,4,5
								JSONArray tb_Insurance_premium_jsonArray	= new JSONArray();
								JSONObject rate_cat_id_JSONObject = new JSONObject();
								int rate_cat_id = 0;
								if (i == 0 ) {
									rate_cat_id = datareturn2.get(i).getRateCat().getRate_cat_id();
									rate_cat_id_JSONObject.put("rate_cat_id_specific", rate_cat_id);
										datareturn2_1 = mdcs.getListRateCatAgeBandPMStandard();//mdcs.getRateCatAgebandPMStandard();
										for (int l = 0 ; l < datareturn2_1.size(); l++) {
											rate_cat_id = datareturn2_1.get(l).getRateCat().getRate_cat_id();
											rate_cat_id_JSONObject.put("rate_cat_id_age_Band", rate_cat_id);
										}
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
							ArrayList<String[]> listSubCat = new ArrayList<>();//1,2
							ArrayList<String[]> listExtra_Premiums = new ArrayList<>();//3
							ArrayList<String[]> listEm_Age = new ArrayList<>();//4
							ArrayList<String[]> listSA_Rate = new ArrayList<>();//5
							
							listSubCat 			= scd.searchSubCatByPmstdRateCat();
							listExtra_Premiums	= scd.searchSubCatByPmstpRateCat();
							listEm_Age			= scd.searchSubCatByPmbtaRateCat();
							listSA_Rate			= scd.searchSubCatByCpdRateCat();
							
							String[] rate_Type = ConstantRateCatIDValues.getPmstdRateCat();
							
							JSONArray	selectbox_Std_premiums_jsonArray	= new JSONArray();
							JSONArray	tb_specific							= new JSONArray();	
							JSONArray	tb_age_band							= new JSONArray();	
							JSONObject tb_SubCatAll_JSONObject 				= new JSONObject();
							if (listSubCat.size() != 0) {
								for (int i = 0; i < listSubCat.size(); i++) {
									if(listSubCat.get(i)[3].toString().equals(rate_Type[0])) {
											JSONObject json_tb_Insurance_premium = new JSONObject();
											json_tb_Insurance_premium.put("sub_rate_cat",listSubCat.get(i)[1]);
											json_tb_Insurance_premium.put("text",listSubCat.get(i)[2]);
											json_tb_Insurance_premium.put("rate_cat_id",listSubCat.get(i)[3]);
											json_tb_Insurance_premium.put("layout",listSubCat.get(i)[0]);
											tb_specific.put(json_tb_Insurance_premium);
									}else if (listSubCat.get(i)[3].toString().equals(rate_Type[1])) {
											JSONObject json_tb_Insurance_premium = new JSONObject();
											json_tb_Insurance_premium.put("sub_rate_cat",listSubCat.get(i)[1]);
											json_tb_Insurance_premium.put("text",listSubCat.get(i)[2]);
											json_tb_Insurance_premium.put("rate_cat_id",listSubCat.get(i)[3]);
											json_tb_Insurance_premium.put("layout",listSubCat.get(i)[0]);
											tb_age_band.put(json_tb_Insurance_premium);
									}
								}
								tb_SubCatAll_JSONObject.put("specific", tb_specific);
								tb_SubCatAll_JSONObject.put("age_band", tb_age_band);
								selectbox_Std_premiums_jsonArray.put(tb_SubCatAll_JSONObject);
							}
							
							//////////////////////////Extra_Premiums//////////////////////////////////////
							JSONArray	selectbox_Extra_Premiums_jsonArray	= new JSONArray();	
							JSONArray	selectbox_Em_Age_jsonArray			= new JSONArray();	
							JSONArray	selectbox_SA_Rate_jsonArray			= new JSONArray();	
							if (listExtra_Premiums.size() != 0) {
								for (int i = 0; i < listExtra_Premiums.size(); i++) {
									String text			= "";
									String layout 		= "";
									String sub_rate_cat = "";
									String rate_cat_id	= "";
									String[] listSubCat_Lv2 = listExtra_Premiums.get(i);
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
									String[] listSubCat_Lv2 = listEm_Age.get(i);
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
									String[] listSubCat_Lv2 = listSA_Rate.get(i);
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
									selectbox_SA_Rate_jsonArray.put(arr_layout_JSONObject);
								}
							}
							////////////////////////////////////////////////////////////////////////////////
							JSONArray  cal_insurance_premiums_jsonArray	= new JSONArray();
							JSONObject json_cal_insurance_premiums2 = new JSONObject();
							json_cal_insurance_premiums2.put("age_Band",age_Band_jsonArray);
							json_cal_insurance_premiums2.put("tb_premiums",json_cal_insurance_premiums);
							json_cal_insurance_premiums2.put("selectbox_Std_Premiums",selectbox_Std_premiums_jsonArray);
							json_cal_insurance_premiums2.put("selectbox_Extra_Premiums",selectbox_Extra_Premiums_jsonArray);
							json_cal_insurance_premiums2.put("em_Age",selectbox_Em_Age_jsonArray);
							json_cal_insurance_premiums2.put("sa_Rate",selectbox_SA_Rate_jsonArray);
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
							ArrayList<RateCatAccessData> datareturn1;
							ArrayList<RateCatAccessData> datareturn1_1;							
							//datareturn1 = mdcs.Table_policy_value(tab);
							mdcs.createDetail(tab);
							datareturn1 = mdcs.getListRateCatAccessData();
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
													for (int l = 0 ; l < datareturn1_1.size(); l++) {
														rate_cat_id = datareturn1_1.get(l).getRateCat().getRate_cat_id();
														rate_cat_id_JSONObject.put("rate_cat_id_age_Band", rate_cat_id);
													}
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
									}
								}
							}
							////////////////////////////selectbox_standard_risk///////////////////////////////////////
							JSONArray	selectbox_standard_risk_jsonArray	= new JSONArray();	
							ArrayList<String[]> liststandard_risk 	= new ArrayList<>();//6,7
							liststandard_risk 						= scd.searchSubCatByRsRateCat();
							JSONArray	age_Band_standard_risk_Array= new JSONArray();	
							JSONArray	specific_standard_risk_Array= new JSONArray();	
							
							JSONArray	tb_SubCatID_Type4_S			= new JSONArray();	
							JSONArray	tb_SubCatID_Type5_S			= new JSONArray();	
							JSONArray	tb_SubCatID_Type6_S			= new JSONArray();
							
							JSONArray	tb_SubCatID_Type4_B			= new JSONArray();	
							JSONArray	tb_SubCatID_Type5_B			= new JSONArray();	
							JSONArray	tb_SubCatID_Type6_B			= new JSONArray();
							
							JSONArray	tb_layoutType4_B_jsonArray 		= new JSONArray();
							JSONArray	tb_layoutType4_S_jsonArray 		= new JSONArray();
							
							JSONArray	tb_layoutType5_B_jsonArray 		= new JSONArray();
							JSONArray	tb_layoutType5_S_jsonArray 		= new JSONArray();
							
							JSONArray	tb_layoutType6_B_jsonArray 		= new JSONArray();
							JSONArray	tb_layoutType6_S_jsonArray 		= new JSONArray();
							
							JSONObject tb_standard_risk_JSONObject_S	= new JSONObject();
							JSONObject tb_standard_risk_JSONObject_B 	= new JSONObject();
							
							String[] type_SubCatID = ConstantSubCatIDValues.getStandard_Ris_SUB_CAT();
							String[] type_RateCat = ConstantRateCatIDValues.getRsRateCat();

							if (liststandard_risk.size() != 0) {
								int 		check_row1		= 1;
								int 		check_row2		= 1;
								int 		check_row3		= 1;
								String		check_sub_cat 	= "";
								for (int i = 0; i < liststandard_risk.size(); i++) {
									if(liststandard_risk.get(i)[3].toString().equals(type_RateCat[0])) { //0 = 6 = AgeBand
										check_sub_cat = liststandard_risk.get(i)[1].toString();
										
										if (check_sub_cat.equals(type_SubCatID[0].toString())) {
											JSONObject json_layout_premium = new JSONObject();
											json_layout_premium.put("layout",liststandard_risk.get(i)[0]);
											tb_layoutType4_B_jsonArray.put(json_layout_premium);
											
											if (check_row1 == 1) {
												JSONObject json_tb_Insurance_premium = new JSONObject();
												json_tb_Insurance_premium.put("sub_rate_cat",liststandard_risk.get(i)[1]);
												json_tb_Insurance_premium.put("text",liststandard_risk.get(i)[2]);
												json_tb_Insurance_premium.put("rate_cat_id",liststandard_risk.get(i)[3]);
												json_tb_Insurance_premium.put("file",tb_layoutType4_B_jsonArray);
												tb_SubCatID_Type4_B.put(json_tb_Insurance_premium);
											}else {
												tb_SubCatID_Type4_B	= new JSONArray();	
												JSONObject json_tb_Insurance_premium = new JSONObject();
												json_tb_Insurance_premium.put("sub_rate_cat",liststandard_risk.get(i)[1]);
												json_tb_Insurance_premium.put("text",liststandard_risk.get(i)[2]);
												json_tb_Insurance_premium.put("rate_cat_id",liststandard_risk.get(i)[3]);
												json_tb_Insurance_premium.put("file",tb_layoutType4_B_jsonArray);
												tb_SubCatID_Type4_B.put(json_tb_Insurance_premium);
											}
											check_row1 ++;
										}else if(check_sub_cat.equals(type_SubCatID[1].toString())) {
											
											JSONObject json_layout_premium = new JSONObject();
											json_layout_premium.put("layout",liststandard_risk.get(i)[0]);
											tb_layoutType5_B_jsonArray.put(json_layout_premium);
											
											if (check_row2 == 1) {
												JSONObject json_tb_Insurance_premium = new JSONObject();
												json_tb_Insurance_premium.put("sub_rate_cat",liststandard_risk.get(i)[1]);
												json_tb_Insurance_premium.put("text",liststandard_risk.get(i)[2]);
												json_tb_Insurance_premium.put("rate_cat_id",liststandard_risk.get(i)[3]);
												json_tb_Insurance_premium.put("file",tb_layoutType5_B_jsonArray);
												tb_SubCatID_Type5_B.put(json_tb_Insurance_premium);
											}else {
												tb_SubCatID_Type5_B	= new JSONArray();	
												JSONObject json_tb_Insurance_premium = new JSONObject();
												json_tb_Insurance_premium.put("sub_rate_cat",liststandard_risk.get(i)[1]);
												json_tb_Insurance_premium.put("text",liststandard_risk.get(i)[2]);
												json_tb_Insurance_premium.put("rate_cat_id",liststandard_risk.get(i)[3]);
												json_tb_Insurance_premium.put("file",tb_layoutType5_B_jsonArray);
												tb_SubCatID_Type5_B.put(json_tb_Insurance_premium);
											}
											check_row2 ++;
										}else if(check_sub_cat.equals(type_SubCatID[2].toString())) {

											JSONObject json_layout_premium = new JSONObject();
											json_layout_premium.put("layout",liststandard_risk.get(i)[0]);
											tb_layoutType6_B_jsonArray.put(json_layout_premium);
											
											if (check_row3 == 1) {
												JSONObject json_tb_Insurance_premium = new JSONObject();
												json_tb_Insurance_premium.put("sub_rate_cat",liststandard_risk.get(i)[1]);
												json_tb_Insurance_premium.put("text",liststandard_risk.get(i)[2]);
												json_tb_Insurance_premium.put("rate_cat_id",liststandard_risk.get(i)[3]);
												json_tb_Insurance_premium.put("file",tb_layoutType6_B_jsonArray);
												tb_SubCatID_Type6_B.put(json_tb_Insurance_premium);
											}else {
												tb_SubCatID_Type6_B	= new JSONArray();	
												JSONObject json_tb_Insurance_premium = new JSONObject();
												json_tb_Insurance_premium.put("sub_rate_cat",liststandard_risk.get(i)[1]);
												json_tb_Insurance_premium.put("text",liststandard_risk.get(i)[2]);
												json_tb_Insurance_premium.put("rate_cat_id",liststandard_risk.get(i)[3]);
												json_tb_Insurance_premium.put("file",tb_layoutType6_B_jsonArray);
												tb_SubCatID_Type6_B.put(json_tb_Insurance_premium);
											}
											check_row3 ++;
									}
								}else if(liststandard_risk.get(i)[3].toString().equals(type_RateCat[1])) {//1=7 = Specific 

										check_sub_cat = liststandard_risk.get(i)[1].toString();
										
										if (check_sub_cat.equals(type_SubCatID[0].toString())) {
											JSONObject json_layout_premium = new JSONObject();
											json_layout_premium.put("layout",liststandard_risk.get(i)[0]);
											tb_layoutType4_S_jsonArray.put(json_layout_premium);
											
											if (check_row1 == 1) {
												JSONObject json_tb_Insurance_premium = new JSONObject();
												json_tb_Insurance_premium.put("sub_rate_cat",liststandard_risk.get(i)[1]);
												json_tb_Insurance_premium.put("text",liststandard_risk.get(i)[2]);
												json_tb_Insurance_premium.put("rate_cat_id",liststandard_risk.get(i)[3]);
												json_tb_Insurance_premium.put("file",tb_layoutType4_S_jsonArray);
												tb_SubCatID_Type4_S.put(json_tb_Insurance_premium);
											}else {
												tb_SubCatID_Type4_S	= new JSONArray();	
												JSONObject json_tb_Insurance_premium = new JSONObject();
												json_tb_Insurance_premium.put("sub_rate_cat",liststandard_risk.get(i)[1]);
												json_tb_Insurance_premium.put("text",liststandard_risk.get(i)[2]);
												json_tb_Insurance_premium.put("rate_cat_id",liststandard_risk.get(i)[3]);
												json_tb_Insurance_premium.put("file",tb_layoutType4_S_jsonArray);
												tb_SubCatID_Type4_S.put(json_tb_Insurance_premium);
											}
											check_row1 ++;
										}else if(check_sub_cat.equals(type_SubCatID[1].toString())) {
											
											JSONObject json_layout_premium = new JSONObject();
											json_layout_premium.put("layout",liststandard_risk.get(i)[0]);
											tb_layoutType5_S_jsonArray.put(json_layout_premium);
											
											if (check_row2 == 1) {
												JSONObject json_tb_Insurance_premium = new JSONObject();
												json_tb_Insurance_premium.put("sub_rate_cat",liststandard_risk.get(i)[1]);
												json_tb_Insurance_premium.put("text",liststandard_risk.get(i)[2]);
												json_tb_Insurance_premium.put("rate_cat_id",liststandard_risk.get(i)[3]);
												json_tb_Insurance_premium.put("file",tb_layoutType5_S_jsonArray);
												tb_SubCatID_Type5_S.put(json_tb_Insurance_premium);
											}else {
												tb_SubCatID_Type5_S	= new JSONArray();	
												JSONObject json_tb_Insurance_premium = new JSONObject();
												json_tb_Insurance_premium.put("sub_rate_cat",liststandard_risk.get(i)[1]);
												json_tb_Insurance_premium.put("text",liststandard_risk.get(i)[2]);
												json_tb_Insurance_premium.put("rate_cat_id",liststandard_risk.get(i)[3]);
												json_tb_Insurance_premium.put("file",tb_layoutType5_S_jsonArray);
												tb_SubCatID_Type5_S.put(json_tb_Insurance_premium);
											}
											check_row2 ++;
										}else if(check_sub_cat.equals(type_SubCatID[2].toString())) {
											JSONObject json_layout_premium = new JSONObject();
											json_layout_premium.put("layout",liststandard_risk.get(i)[0]);
											tb_layoutType6_S_jsonArray.put(json_layout_premium);
											if (check_row3 == 1) {
												JSONObject json_tb_Insurance_premium = new JSONObject();
												json_tb_Insurance_premium.put("sub_rate_cat",liststandard_risk.get(i)[1]);
												json_tb_Insurance_premium.put("text",liststandard_risk.get(i)[2]);
												json_tb_Insurance_premium.put("rate_cat_id",liststandard_risk.get(i)[3]);
												json_tb_Insurance_premium.put("file",tb_layoutType6_S_jsonArray);
												tb_SubCatID_Type6_S.put(json_tb_Insurance_premium);

											}else {
												tb_SubCatID_Type6_S	= new JSONArray();	
												JSONObject json_tb_Insurance_premium = new JSONObject();
												json_tb_Insurance_premium.put("sub_rate_cat",liststandard_risk.get(i)[1]);
												json_tb_Insurance_premium.put("text",liststandard_risk.get(i)[2]);
												json_tb_Insurance_premium.put("rate_cat_id",liststandard_risk.get(i)[3]);
												json_tb_Insurance_premium.put("file",tb_layoutType6_S_jsonArray);
												tb_SubCatID_Type6_S.put(json_tb_Insurance_premium);
											}
											check_row3 ++;
										}
									}
							}
								///-----age_Band
								tb_standard_risk_JSONObject_S.put("type1", tb_SubCatID_Type4_S);
								tb_standard_risk_JSONObject_S.put("type2", tb_SubCatID_Type5_S);
								tb_standard_risk_JSONObject_S.put("type3", tb_SubCatID_Type6_S);
								age_Band_standard_risk_Array.put(tb_standard_risk_JSONObject_S);
								
								///-----specific
								tb_standard_risk_JSONObject_B.put("type1", tb_SubCatID_Type4_B);
								tb_standard_risk_JSONObject_B.put("type2", tb_SubCatID_Type5_B);
								tb_standard_risk_JSONObject_B.put("type3", tb_SubCatID_Type6_B);
								specific_standard_risk_Array.put(tb_standard_risk_JSONObject_B);
							///////////////////////////////////////////////////////////////////////
							}
							///////////////////////////////standard_risk_row//////////////////////////
							ArrayList<String[]> liststandard_risk_row 	= new ArrayList<>();//13
							liststandard_risk_row 						= scd.searchSubCatByRlsRateCat();
							JSONArray	selectbox_standard_risk_row_jsonArray	= new JSONArray();	
							
							if (liststandard_risk_row.size() != 0) {
								for (int i = 0; i < liststandard_risk_row.size(); i++) {
									String text			= "";
									String layout 		= "";
									String sub_rate_cat = "";
									String rate_cat_id	= "";
									String[] listSubCat_Lv2 = liststandard_risk_row.get(i);
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
									selectbox_standard_risk_row_jsonArray.put(arr_layout_JSONObject);
								}
							}
							///////////////////////////////////////////////////
							JSONArray  policy_value_jsonArray	= new JSONArray();
							JSONObject json_policy_value = new JSONObject();
							JSONObject selectbox_standard_risk_value = new JSONObject();
							selectbox_standard_risk_value.put("age_Band",age_Band_standard_risk_Array);
							selectbox_standard_risk_value.put("specific",specific_standard_risk_Array);
							selectbox_standard_risk_jsonArray.put(selectbox_standard_risk_value);
							json_policy_value.put("standard_risk",tb_policy_value_jsonArray);
							json_policy_value.put("standard_risk_row",select_tb_policy_value_low_jsonArray);
							json_policy_value.put("selectbox_standard_risk",selectbox_standard_risk_jsonArray);
							json_policy_value.put("selectbox_standard_risk_row",selectbox_standard_risk_row_jsonArray);
							
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
							//ArrayList<Benefit> datareturn;
							//ArrayList<LookupCatAccessData> datareturn_datalool_up;
							/*datareturn = mdcs.Benefits(tab);
							datareturn_datalool_up = mdcs.getBenefits_Lookup();*/
							mdcs.createDetail(tab);
							ArrayList<Benefit> datareturn = mdcs.getListBenefit();
							//datareturn_datalool_up = mdcs.getListLookupCatAccessData();
							ArrayList<LookupValueGroupAccessData> datareturn_LookupGroupCL_Base_Benefit_SA = lookupValueGroupData.getListGroup_CL_baseBenefitSA();
							
							JSONArray	die_calendar_jsonArray	= new JSONArray();
							JSONArray	die_unit_jsonArray	= new JSONArray();
							JSONArray	die_sa_jsonArray	= new JSONArray();
							
							//SA pun fixed
							for(int i=0 ; i < datareturn_LookupGroupCL_Base_Benefit_SA.size() ; i++) {
								JSONObject json_sa = new JSONObject();
								json_sa.put("pass",  datareturn_LookupGroupCL_Base_Benefit_SA.get(i).getLookup_enum_value());
								json_sa.put("text",  datareturn_LookupGroupCL_Base_Benefit_SA.get(i).getLookup_value_name());
								die_sa_jsonArray.put(json_sa);
							}
							
							for (int i = 0; i < listLookupCatAccessData.size(); i++) {
								if (listLookupCatAccessData.get(i).getLookupCat().getEnum_name().equals("lu_period_unit")) {
									for (int ii = 0; ii < listLookupCatAccessData.get(i).getListLookupValue().size(); ii++) {
										JSONObject json_calendar = new JSONObject();
										json_calendar.put("pass", listLookupCatAccessData.get(i).getListLookupValue().get(ii).getEnum_value());
										json_calendar.put("text",listLookupCatAccessData.get(i).getListLookupValue().get(ii).getName_th());
										die_calendar_jsonArray.put(json_calendar);
									}
								} 
								//unit
								if (listLookupCatAccessData.get(i).getLookupCat().getEnum_name().equals("lu_compare")) {
									for (int ii = 0; ii < listLookupCatAccessData.get(i).getListLookupValue().size(); ii++) {
										JSONObject json_unit = new JSONObject();
										json_unit.put("pass", listLookupCatAccessData.get(i).getListLookupValue().get(ii).getEnum_value());
										json_unit.put("text",listLookupCatAccessData.get(i).getListLookupValue().get(ii).getName_th());
										die_unit_jsonArray.put(json_unit);
									}
								}
								//SA
								/*if(datareturn_datalool_up.get(i).getLookupCat().getEnum_name().equals("lu_benef_factor")) {
									for (int ii = 0; ii < datareturn_datalool_up.get(i).getListLookupValue().size(); ii++) {
										JSONObject json_sa = new JSONObject();
										json_sa.put("pass", datareturn_datalool_up.get(i).getListLookupValue().get(ii).getEnum_value());
										json_sa.put("text",datareturn_datalool_up.get(i).getListLookupValue().get(ii).getName_th());
										die_sa_jsonArray.put(json_sa);
									}
								}*/
							}
							
							JSONArray	die_jsonArray	= new JSONArray();
							JSONObject json_die = new JSONObject();
							json_die.put("die_calendar",die_calendar_jsonArray);
							json_die.put("die_unit",die_unit_jsonArray);
							json_die.put("die_sa",die_sa_jsonArray);
							die_jsonArray.put(json_die);
							
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
			}else if (method.equals("calculation_premium_rates")) {
				try {
					//String status_return = "";
					JSONArray	mortalityTli_jsonArray	= new JSONArray();
					JSONArray	tpd_tli_jsonArray	= new JSONArray();
					JSONArray  calculation_premium_rates_jsonArray	= new JSONArray();
					JSONObject json_calculation_premium_rates = new JSONObject();
					PremAssumpRateData par = new PremAssumpRateData();
					
					String calculation_premium_rates_type  		= request.getParameter("type");
					if (calculation_premium_rates_type.equals("D")) {
						String gender   = request.getParameter("gender");
						
						ArrayList<Prem_assump_rate> status_return = par.searchLookupPremAssumpRate(gender,"MORTALITY");
								for (int i = 0; i < status_return.size(); i++) {
									JSONObject json_mortalityTli = new JSONObject();
									json_mortalityTli.put("pass", status_return.get(i).getPrem_assump_rate_id());
									json_mortalityTli.put("text", status_return.get(i).getName_th());
									mortalityTli_jsonArray.put(json_mortalityTli);
									json_calculation_premium_rates.put("calculation_premium",mortalityTli_jsonArray);
								}
						//}
					}else if (calculation_premium_rates_type.equals("TPD")) {
						String gender   = request.getParameter("gender");
						
						ArrayList<Prem_assump_rate> status_return = par.searchLookupPremAssumpRate(gender,"DISABILITY");

							for (int i = 0; i < status_return.size(); i++) {
								JSONObject json_Tli_tli = new JSONObject();
								json_Tli_tli.put("pass", status_return.get(i).getPrem_assump_rate_id());
								json_Tli_tli.put("text", status_return.get(i).getName_th());
								tpd_tli_jsonArray.put(json_Tli_tli);
								json_calculation_premium_rates.put("calculation_premium",tpd_tli_jsonArray);
							}
					}
					calculation_premium_rates_jsonArray.put(json_calculation_premium_rates);
					responsejson.put("List_calculation_premium_rates",calculation_premium_rates_jsonArray);
					responseText = responsejson.toString();
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
			
			json = responseText;
			System.out.println("Lookup////"+json);
			out.print(json);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}