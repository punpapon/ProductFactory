package servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.math.BigDecimal;
import java.sql.Date;
import java.text.SimpleDateFormat;
//import java.text.DateFormat;
//import java.text.SimpleDateFormat;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONObject;

import layout.bean.productfac.beanset.DocumentAcessData;
import layout.bean.productfac.beanset.ParticipantAccessData;
import layout.bean.productfac.beanset.PremAssumpRateAcessData;
import layout.bean.productfac.benefit.Benefit;
import layout.bean.productfac.coverage.Age_calc_meth;
import layout.bean.productfac.coverage.Benefit_item;
import layout.bean.productfac.coverage.Coverage;
import layout.bean.productfac.lookup.Nonforf_rate;
import layout.bean.productfac.product.Product;
import layout.bean.productfac.workflow.Coverage_task;
import service.FreezePolicyValue;
import service.MainInsuranceService;
import service.MainInsureDetailCreateService;
import service.baseplan.BasePlanOLAccessData;
import service.center.BundleData;
import service.center.CovCatSubCodeData;
import service.center.NonforfRateData;
import service.center.WorkFlowCoverage;
import service.fnc.ConstantValues;
import service.fnc.PDFFnc;
import service.product.ctrl.ProductControlData;
import service.rider.EndorseData;
import service.rider.RiderAccessData;
import service.rider.RiderOLAccessData;

/**
 * Servlet implementation class RiderCL_GetData_Servlet
 */
@WebServlet("/RiderOL_GetData_Servlet")
public class RiderOL_GetData_Servlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public RiderOL_GetData_Servlet() {
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
				// session = request.getSession();
				response.setCharacterEncoding("UTF-8");
				response.setContentType("application/json");
				PrintWriter out 	= response.getWriter();
				String responseText	= "";
				String json 		= "";
				String method 		= request.getParameter("method");
				ArrayList<Coverage> caseAll_return;
				MainInsuranceService mis = new MainInsuranceService();
				String case_type	= "RIDER";  
				caseAll_return = mis.GetCaseAll(case_type); 
				String groupName			= request.getParameter("groupName");
				ConstantValues.GROUP_NAME 	= groupName;
				
				JSONObject responsejson = new JSONObject();
				if (method.equals("getRiderCL")) {
					JSONArray	baseplanCL_data_jsonArray	= new JSONArray();	
					for (int i = 0 ; i < caseAll_return.size(); i++) {
							JSONObject baseplanCL_data_json = new JSONObject();
							baseplanCL_data_json.put("insuranceNo", caseAll_return.get(i).getCov_code());
							baseplanCL_data_json.put("nameTH", caseAll_return.get(i).getName_th());
							baseplanCL_data_json.put("nameEN", caseAll_return.get(i).getName_en());
							baseplanCL_data_json.put("status", caseAll_return.get(i).getStatus()); 
							baseplanCL_data_jsonArray.put(baseplanCL_data_json);
						}
					responsejson.put("RiderCL_Data", baseplanCL_data_jsonArray);
					responseText = responsejson.toString();
				}else if (method.equals("getCaseRiderCL")) {
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
					int 	max_insure_age 			= 0;
					int 	max_insure_year			= 0;
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
					String prem_Rate 		= "";
					String sum_decr_rate 	= "";
					//ตารางลดหย่อนภาษี
					JSONArray	tb_TaxReduce_jsonArray		= new JSONArray();
					//หมายเหตุ
					String note								= "";
					//
					String	rider_code						= "";
					//
					JSONArray	table_Cal1					= new JSONArray();
					JSONArray	table_Cal2					= new JSONArray();
					String 		status						= "";
					boolean is_bundle						= false;
					 String insurance_premium_Code 	= request.getParameter("insurance_premium");
					ConstantValues.COV_CODE = insurance_premium_Code;
					//Benz 29-08-2019
					JSONArray  coverage_jsonArray	= new JSONArray();
					
					String pass_Insurance = request.getParameter("pass_Insurance");
					RiderOLAccessData bpi = null;
					//
					for (int i = 0; i < caseAll_return.size(); i++) {
						if (caseAll_return.get(i).getCov_code().equals(insurance_premium_Code)) {
							bpi = new RiderOLAccessData(caseAll_return.get(i));
						} 
					}
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
							 max_insure_age			=	bpi.getListParticipantData().get(0).getParticipant().getMax_insure_age();
							 max_insure_year		=	bpi.getListParticipantData().get(0).getParticipant().getMax_insure_year();
								
						}
						/// Table Coverage
						passInsurance 	= bpi.getListParticipantData().get(0).getCoverage().getCov_code();
						nameTH			= bpi.getListParticipantData().get(0).getCoverage().getName_th();
						nameEN			= bpi.getListParticipantData().get(0).getCoverage().getName_en();
						cov_cat_id 		= bpi.getListParticipantData().get(0).getCoverage().getCov_cat_id();
						status			= bpi.getListParticipantData().get(0).getCoverage().getStatus();
					
						///Benz get Bundle //09-08-2019  
						if (bpi.getListParticipantData().get(0).getCoverage().getIs_bundle() == true) {
							JSONObject json_coverage		= new JSONObject();
							json_coverage.put("cov_code", bpi.getListParticipantData().get(0).getCoverage().getBundle_main_cov_code());
							coverage_jsonArray.put(json_coverage);
						}
						
						if (bpi.getListParticipantData().get(0).getCoverage().getTax_health_prem_percent() != null) {
							BigDecimal tax_health_prem_percent = new BigDecimal(bpi.getListParticipantData().get(0).getCoverage().getTax_health_prem_percent().toString());
							tax_health_prem	= (tax_health_prem_percent).toString();
						}
						//BENZ 22-08-2019
						is_bundle		= bpi.getListParticipantData().get(0).getCoverage().getIs_bundle();
						
						//วันที่ คปภ.อนุมัติ
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
							ArrayList<String> aa = new ArrayList<>();
							 for (int  i = 0;  i < bpi.getListPremAssumpRateAcessData().size();  i++) {
								 ArrayList<PremAssumpRateAcessData> list = bpi.getListPremAssumpRateAcessData().get(i);
								 JSONObject jsonobj_table_Cal1 		= new JSONObject();
								 for (int ii = 0; ii < list.size(); ii++) {
									 PremAssumpRateAcessData data 		= list.get(ii);
									 
									 JSONObject jsonobj_table_Cal2 		= new JSONObject();
									 
									 jsonobj_table_Cal1.put("prem_assump_type", list.get(0).getPrem_assump_type());
									 //
									 jsonobj_table_Cal2.put("prem_assump_type", data.getPrem_assump_type());
									 jsonobj_table_Cal2.put("prem_assump_rate_id", data.getPrem_assump_rate().getPrem_assump_rate_id());
									 if (data.getFile().getFile_name() != null) {
										 jsonobj_table_Cal2.put("file_name", data.getFile().getFile_name());
									 }else {
										 jsonobj_table_Cal2.put("file_name", "");

									 }
									 jsonobj_table_Cal2.put("gender", data.getPrem_assump_rate_lookup().getGender());
									 jsonobj_table_Cal2.put("name", data.getPrem_assump_rate_lookup().getName_th());
									 
									 table_Cal2.put(jsonobj_table_Cal2);
								} 
								 table_Cal1.put(jsonobj_table_Cal1);
							 }
						 
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
					json_basic_Info.put("max_insure_age",Integer.toString(max_insure_age));
					json_basic_Info.put("max_insure_year",Integer.toString(max_insure_year));
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
					//
					json_basic_Info.put("table_Cal1",table_Cal1);
					json_basic_Info.put("table_Cal2",table_Cal2);
					//อัตราดอกเบี้ย
					json_basic_Info.put("prem_Rate",prem_Rate);
					json_basic_Info.put("sum_decr_rate",sum_decr_rate);
					////ลดหย่อนภาษี
					json_basic_Info.put("table_TaxReduce",tb_TaxReduce_jsonArray);
					//หมายเหตุ
					json_basic_Info.put("note",note);
					//Benz 08-07-2019
					json_basic_Info.put("coverage_Bundle",coverage_jsonArray);
					//Benz 16-08-2019
					json_basic_Info.put("status",status);
					json_basic_Info.put("status_RP",status_RP);
					//Benz 27-08-2019
					json_basic_Info.put("tax_health_prem",tax_health_prem);
					//is_bundle 
					json_basic_Info.put("is_bundle",is_bundle);
					
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
										json_tb_Insurance_premium.put("pass", pass2);
										json_tb_Insurance_premium.put("layout", layoutID);
										json_tb_Insurance_premium.put("type", type);
										json_tb_Insurance_premium.put("fileID", fileID);
										json_tb_Insurance_premium.put("file", file_name);
										json_tb_Insurance_premium.put("sub_code", sub_code);
										json_tb_Insurance_premium.put("ref", file_url);
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
								if (bpi.getListRateLayoutSpecial().get(i).getFile().getFile_url() != "") {
									file_url = bpi.getListRateLayoutSpecial().get(i).getFile().getFile_url();
								}
							}
							
							json_extra_Rate.put("pass", pass2);
							json_extra_Rate.put("layout", layoutID);
							json_extra_Rate.put("type", type);
							json_extra_Rate.put("fileID", fileID);
							json_extra_Rate.put("file", file_name);
							json_extra_Rate.put("sub_code", sub_code);
							json_extra_Rate.put("ref", file_url);
							tb_extra_Rate_jsonArray.put(json_extra_Rate);
						}
	///////////////////////นำเข้า ตารางส่วนลดตามทุนประกัน/////////////////////////////////////////////////
						//นำเข้า ตารางช่วงอายุที่รับเบี้ยเพิ่ม  
						JSONArray	table_Dis_Sa_jsonArray	= new JSONArray();
						if (bpi.getListTable_Dis_Sa().size() != 0) {
							JSONObject json_table_Dis_Sa = new JSONObject();
							String type 		= 	"";
							String file_name 	= 	"";
							String file_url 	= 	"";
							int pass2			= 	0;
							int layoutID		= 	0;
							int fileID			= 	0;
							String 	sub_code	=  "";
							if (bpi.getListTable_Dis_Sa().get(0).getRateLayout() != null) {
								if (bpi.getListTable_Dis_Sa().get(0).getRateLayout().getAge_band_code() != "") {
									type = bpi.getListTable_Dis_Sa().get(0).getRateLayout().getAge_band_code();
								}
								if (bpi.getListTable_Dis_Sa().get(0).getRateLayout().getRate_cat_id() != 0) {
									pass2 = bpi.getListTable_Dis_Sa().get(0).getRateLayout().getRate_cat_id();
								}
								if (bpi.getListTable_Dis_Sa().get(0).getRateLayout().getRate_layout_id() != 0) {
									layoutID = bpi.getListTable_Dis_Sa().get(0).getRateLayout().getRate_layout_id();
								}
								if (bpi.getListTable_Dis_Sa().get(0).getRateLayout().getFile_id() != 0) {
									fileID = bpi.getListTable_Dis_Sa().get(0).getRateLayout().getFile_id();
								}
								if (!bpi.getListTable_Dis_Sa().get(0).getRateLayout().getSub_code().equals("") || !!bpi.getListTable_Dis_Sa().get(0).getRateLayout().getSub_code().equals("null")) {
									sub_code = bpi.getListTable_Dis_Sa().get(0).getRateLayout().getSub_code();
								}
							}
							
							if(bpi.getListTable_Dis_Sa().get(0).getFile() != null) {
								if (bpi.getListTable_Dis_Sa().get(0).getFile().getFile_name() != "") {
									file_name = bpi.getListTable_Dis_Sa().get(0).getFile().getFile_name();
								}	
								if (bpi.getListTable_Dis_Sa().get(0).getFile().getFile_url() != "") {
									file_url = bpi.getListTable_Dis_Sa().get(0).getFile().getFile_url();
								}
							}
							
							json_table_Dis_Sa.put("pass", pass2);
							json_table_Dis_Sa.put("layout", layoutID);
							json_table_Dis_Sa.put("type", type);
							json_table_Dis_Sa.put("fileID", fileID);
							json_table_Dis_Sa.put("file", file_name);
							json_table_Dis_Sa.put("sub_code", sub_code);
							json_table_Dis_Sa.put("ref", file_url);
							table_Dis_Sa_jsonArray.put(json_table_Dis_Sa);
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
							String file_url 	= 	"";
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
								if (bpi.getListTable_NAR().get(0).getFile().getFile_url() != "") {
									file_url = bpi.getListTable_NAR().get(0).getFile().getFile_url();
								}
							}
							
							json_table_NAR.put("pass", pass2);
							json_table_NAR.put("layout", layoutID);
							json_table_NAR.put("type", type);
							json_table_NAR.put("fileID", fileID);
							json_table_NAR.put("file", file_name);
							json_table_NAR.put("sub_code", sub_code);
							json_table_NAR.put("ref", file_url);
							table_NAR_jsonArray.put(json_table_NAR);
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
						for (int i = 0; i < bpi.getListParticipantData().size(); i++) {
							if (bpi.getListParticipantData().get(i).getCoverage() != null) {
								//มีส่วนลดเบี้ยประกัน
								prem_disc = bpi.getListParticipantData().get(i).getCoverage().getIs_prem_disc();
								BigDecimal dbprem_min = new BigDecimal(bpi.getListParticipantData().get(i).getCoverage().getMin_prem_disc_rate().toString());
								BigDecimal dbprem_max = new BigDecimal(bpi.getListParticipantData().get(i).getCoverage().getMax_prem_disc_rate().toString());
								prem_min	= (dbprem_min).toString();
								prem_max	= (dbprem_max).toString();
								//
								BigDecimal bd_min = new BigDecimal(0);
								BigDecimal bd_max = new BigDecimal(0);
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
							
							json_em_age.put("pass", pass2);
							json_em_age.put("layout", layoutID);
							json_em_age.put("type", type);
							json_em_age.put("fileID", fileID);
							json_em_age.put("file", file_name);
							json_em_age.put("sub_code", sub_code);
							json_em_age.put("ref", file_url);
							em_age_jsonArray.put(json_em_age);
						}
						//อัตราเบี้ยฯเพิ่มตามชั้นอาชีพ
						JSONArray	Prem_occ_charge_jsonArray	= new JSONArray();
						System.out.println("=======getListPrem_occ_charge==========/"+bpi.getListPrem_occ_charge().size());
						if (bpi.getListPrem_occ_charge() !=  null) {
							for (int i = 0; i < bpi.getListPrem_occ_charge().size(); i++) {
									JSONObject json_Prem_occ_charge = new JSONObject();
									json_Prem_occ_charge.put("lvclass", bpi.getListPrem_occ_charge().get(i).getOcc_class());
									json_Prem_occ_charge.put("start", bpi.getListPrem_occ_charge().get(i).getMin_charge_rate());
									json_Prem_occ_charge.put("to", bpi.getListPrem_occ_charge().get(i).getMax_charge_rate());
									
									if (bpi.getListPrem_occ_charge().get(i).getMax_extra_per_1k() != null ) {
										json_Prem_occ_charge.put("max_extra_per", bpi.getListPrem_occ_charge().get(i).getMax_extra_per_1k());
									}else {
										json_Prem_occ_charge.put("max_extra_per", "0");

									}
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
							listSearchSubCat_premium = cscd.searchSubCatByPmstdRateCatOL(Integer.toString(cov_cat));
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
						json_cal_insurance_premiums.put("table_Dis_Sa",table_Dis_Sa_jsonArray);
						json_cal_insurance_premiums.put("table_NAR",table_NAR_jsonArray);
						json_cal_insurance_premiums.put("select_NAR",select_NAR_jsonArray);
						
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
									if (bpi.getListNonforfProvision().get(i).getMale_nonforf_rate() != 0) {
										nonforf_rate_id = bpi.getListNonforfProvision().get(i).getMale_nonforf_rate();
									}else if (bpi.getListNonforfProvision().get(i).getFemale_nonforf_rate() != 0) {
										nonforf_rate_id = bpi.getListNonforfProvision().get(i).getFemale_nonforf_rate();
									}
									NonforfRateData brd = new NonforfRateData ();
									int year = 0;
									if(nonforf_rate_id > 0) {
										ArrayList<Nonforf_rate> searchNonforfRateByNonforfRateId = brd.searchNonforfRateByNonforfRateId(Integer.toString(nonforf_rate_id));
										year = searchNonforfRateByNonforfRateId.get(0).getStat_year();
									}
									jsonObj_setvalue.put("Year", year);
									jsonarr_ETI_Vl.put(jsonObj_setvalue);
								}else if (bpi.getListNonforfProvision().get(i).getNonforf_prov().equals("RPU")) {
									JSONObject jsonObj_setvalue = new JSONObject();
									jsonObj_setvalue.put("Nonforf_prov", bpi.getListNonforfProvision().get(i).getNonforf_prov());
									jsonObj_setvalue.put("Male_nonforf_rate", bpi.getListNonforfProvision().get(i).getMale_nonforf_rate());
									jsonObj_setvalue.put("Female_nonforf_rate", bpi.getListNonforfProvision().get(i).getFemale_nonforf_rate());
									///get year
									int nonforf_rate_id = 0;
									if (bpi.getListNonforfProvision().get(i).getMale_nonforf_rate() != 0) {
										nonforf_rate_id = bpi.getListNonforfProvision().get(i).getMale_nonforf_rate();
									}else if (bpi.getListNonforfProvision().get(i).getFemale_nonforf_rate() != 0) {
										nonforf_rate_id = bpi.getListNonforfProvision().get(i).getFemale_nonforf_rate();
									}
									NonforfRateData brd = new NonforfRateData ();
									int year = 0;
									if(nonforf_rate_id > 0 ) {
										ArrayList<Nonforf_rate> searchNonforfRateByNonforfRateId = brd.searchNonforfRateByNonforfRateId(Integer.toString(nonforf_rate_id));
										year = searchNonforfRateByNonforfRateId.get(0).getStat_year();
									}
									jsonObj_setvalue.put("Year", year);
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
						
						////////////////////////////////////////////////////////////////////////////
						/////////////////////////////Tab ผลประโยชน์/ความคุ้มครอง//////////////////////
						JSONArray  benefit_jsonArray	= new JSONArray();
						
						for (int i = 0 ; i < bpi.getListBenefitCat().size(); i++) {
							JSONObject json_benefit 		= new JSONObject();
							json_benefit.put("bnf_Code",bpi.getListBenefitCat().get(i).getBnf_cat_code());
							benefit_jsonArray.put(json_benefit);
						}
						//
						responsejson.put("Tab_Benefit_Check",benefit_jsonArray);
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
						
				}else if (method.equals("get_Benefit_RiderCL")) {
					ArrayList<Benefit> benefit_return;
					String bnf_cat_code = request.getParameter("bnf_cat_code");
					MainInsureDetailCreateService mdc = new MainInsureDetailCreateService();
					benefit_return = mdc.get_Benefit(bnf_cat_code);
					
					JSONArray	benefit_return_jsonArray	= new JSONArray();
					for (int i = 0 ; i < benefit_return.size(); i++) {
						JSONObject jsonJSONO_benefit_return = new JSONObject();
						jsonJSONO_benefit_return.put("bnf_code", benefit_return.get(i).getBnf_code());
						jsonJSONO_benefit_return.put("name_TH", benefit_return.get(i).getName_th());
						benefit_return_jsonArray.put(jsonJSONO_benefit_return);
					}
					responsejson.put("add_Protection", benefit_return_jsonArray);
					//
					responseText = responsejson.toString();
				}
				//
				json = responseText;
				System.out.println("Get//"+json);
				out.print(json);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	private String getDateFormat(Date data_f) throws Exception 
	{
		return data_f == null ? "" : PDFFnc.changeDateEntoTh(new SimpleDateFormat("dd/MM/yyyy").format(data_f));
	}
}