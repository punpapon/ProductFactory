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

import org.json.JSONArray;
import org.json.JSONObject;

import layout.bean.productfac.beanset.BenefitAccessData;
import layout.bean.productfac.beanset.DocumentAcessData;
import layout.bean.productfac.beanset.LookupCatValueAcessData;
import layout.bean.productfac.beanset.ParticipantAccessData;
import layout.bean.productfac.beanset.PremAssumpRateAcessData;
import layout.bean.productfac.benefit.Benefit;
import layout.bean.productfac.coverage.Age_calc_meth;
import layout.bean.productfac.coverage.Coverage;
import layout.bean.productfac.lookup.Lookup_value;
import layout.bean.productfac.lookup.Nonforf_rate;
import layout.bean.productfac.lookup.Rate_layout;
import layout.bean.productfac.workflow.Coverage_task;
import service.FreezePolicyValue;
import service.MainInsuranceService;
import service.baseplan.BasePlanAccessData;
import service.baseplan.BasePlanBenefitOLSearchData;
import service.baseplan.BasePlanOLAccessData;
import service.baseplan.ctrl.RateLayoutData;
import service.center.BundleData;
import service.center.CovCatSubCodeData;
import service.center.LookupCatValue;
import service.center.NonforfRateData;
import service.center.WorkFlowCoverage;
import service.ctrl.AppconfigControlData;
import service.ctrl.BundleControlData;
import service.fnc.ConstantValues;
import service.fnc.PDFFnc;

/**
 * Servlet implementation class BasePlanCL_GetData_Servlet
 */
@WebServlet("/BasePlanOL_GetData_Servlet")
public class BasePlanOL_GetData_Servlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public BasePlanOL_GetData_Servlet() {
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
				response.setCharacterEncoding("UTF-8");
				response.setContentType("application/json");
				PrintWriter out 	= response.getWriter();
				String responseText	= "";
				String json 		= "";
				String method 		= request.getParameter("method");
				ArrayList<Coverage> caseAll_return;
				MainInsuranceService mis = new MainInsuranceService();
				String case_type	= "BASE_PLAN";  
				caseAll_return = mis.GetCaseAll(case_type); 
				String groupName			= request.getParameter("groupName");
				ConstantValues.GROUP_NAME 	= groupName;
				
				JSONObject responsejson = new JSONObject();
				if (method.equals("getBasePlanCL")) {
					JSONArray	baseplanCL_data_jsonArray	= new JSONArray();	
					ArrayList<LookupCatValueAcessData> listStatus	= new LookupCatValue().searchLookupCatValue(new String []{"26"});
					for (int i = 0 ; i < caseAll_return.size(); i++) {
							JSONObject baseplanCL_data_json = new JSONObject();
							baseplanCL_data_json.put("insuranceNo", caseAll_return.get(i).getCov_code());
							baseplanCL_data_json.put("nameTH", caseAll_return.get(i).getName_th());
							baseplanCL_data_json.put("nameEN", caseAll_return.get(i).getName_en());
							baseplanCL_data_json.put("status", getStatus(listStatus,caseAll_return.get(i).getStatus()));
							//baseplanCL_data_json.put("status", caseAll_return.get(i).getStatus()); 
							baseplanCL_data_jsonArray.put(baseplanCL_data_json);
						}
					responsejson.put("BasePlanCL_Data", baseplanCL_data_jsonArray);
					responseText = responsejson.toString();
				}else if (method.equals("getCaseBasePlanOL")) {
				
					String passInsurance 			= "";
					String 	nameTH					= "";
					String 	nameEN					= "";
					Date 	appStart_date;
					Date 	appTo_date ;
					String 	sale_eff_date 			= "";
					String 	sale_exp_date 			= "";
					int		age_Start 				= 0;
					int 	age_To 					= 0;
					int 	maximum_Protection_To 	= 0;
					///
					JSONArray	mode_jsonArray				= new JSONArray();
					JSONArray	filing_Channel_jsonArray	= new JSONArray();
					JSONArray	cal_Age_jsonArray			= new JSONArray();
					///
					String 	sex							= "";
					String	insurance_premium			= "";
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
					JSONArray	table_Cal1				= new JSONArray();
					JSONArray	table_Cal2				= new JSONArray();
					//อัตราดอกเบี้ย
					String prem_Rate 					= "";
					String sum_decr_rate 				= "";
					//ตารางลดหย่อนภาษี
					JSONArray	tb_TaxReduce_jsonArray	= new JSONArray();
					//หมายเหตุ
					String note							= "";
					//
					String status						= "";
					
					boolean is_bundle					= false;
					 String insurance_premium_Code 	= request.getParameter("insurance_premium");
					ConstantValues.COV_CODE = insurance_premium_Code;
					//
					String pass_Insurance = request.getParameter("pass_Insurance");
					
					BasePlanOLAccessData bpi = null;
					//
					for (int i = 0; i < caseAll_return.size(); i++) {
						if (caseAll_return.get(i).getCov_code().equals(insurance_premium_Code)) {
							bpi = new BasePlanOLAccessData(caseAll_return.get(i));
						} 
					}
					
					//setvalue Basic_Information
					/// Table Participant
					if (bpi.getListParticipantData().size() != 0) {
						if (bpi.getListParticipantData().get(0).getParticipant() != null) {
							sex					= bpi.getListParticipantData().get(0).getParticipant().getIssue_gender();
							insurance_premium	= bpi.getListParticipantData().get(0).getParticipant().getPrem_rule();
							
							//อายุที่ขออนุมัติ
							 age_Start				=	bpi.getListParticipantData().get(0).getParticipant().getMin_issue_age();
							 age_To					=	bpi.getListParticipantData().get(0).getParticipant().getMax_issue_age();
							 maximum_Protection_To	=	bpi.getListParticipantData().get(0).getParticipant().getMax_insure_age();
						}
						/// Table Coverage
						passInsurance 	= bpi.getListParticipantData().get(0).getCoverage().getCov_code();
						nameTH			= bpi.getListParticipantData().get(0).getCoverage().getName_th();
						nameEN			= bpi.getListParticipantData().get(0).getCoverage().getName_en();
						status			= bpi.getListParticipantData().get(0).getCoverage().getStatus();
						//BENZ 22-08-2019
						is_bundle		= bpi.getListParticipantData().get(0).getCoverage().getIs_bundle();
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
						if (bpi.getListParticipantData().get(0).getListBenefitPeriodDet() != null && bpi.getListParticipantData().get(0).getListBenefitPeriodDet().size() != 0 ) {
							insurance_period_radio	=	bpi.getListParticipantData().get(0).getListBenefitPeriodDet().get(0).getPeriod_calc_meth();
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
					///Benz get Bundle //09-08-2019  
					BundleData bd = new BundleData () ;
					ArrayList<Coverage> searchBundle	= bd.searchBundle();
					JSONArray  coverage_jsonArray	= new JSONArray();
					for (int i = 0; i < searchBundle.size(); i++) {
						JSONObject json_coverage		= new JSONObject();
						json_coverage.put("cov_code", searchBundle.get(i).getCov_code());
						json_coverage.put("name_th", searchBundle.get(i).getName_th());
						coverage_jsonArray.put(json_coverage);
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
					json_basic_Info.put("nameTH",nameTH);
					json_basic_Info.put("nameEN",nameEN);
					json_basic_Info.put("sale_eff_date",sale_eff_date);
					json_basic_Info.put("sale_exp_date",sale_exp_date);
					json_basic_Info.put("age_Start",Integer.toString(age_Start));
					json_basic_Info.put("age_To",Integer.toString(age_To));
					json_basic_Info.put("maximum_Protection_To",Integer.toString(maximum_Protection_To));
					///
					json_basic_Info.put("mode",mode_jsonArray);
					json_basic_Info.put("filing_Channel",filing_Channel_jsonArray);
					json_basic_Info.put("cal_Age",cal_Age_jsonArray);
					//
					json_basic_Info.put("sex",sex);
					json_basic_Info.put("insurance_premium",insurance_premium);
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
					json_basic_Info.put("table_Cal1",table_Cal1);
					json_basic_Info.put("table_Cal2",table_Cal2);
					//อัตราดอกเบี้ย
					json_basic_Info.put("prem_Rate",prem_Rate);
					json_basic_Info.put("sum_decr_rate",sum_decr_rate);
					////ลดหย่อนภาษี
					json_basic_Info.put("table_TaxReduce",tb_TaxReduce_jsonArray);
					//หมายเหตุ
					json_basic_Info.put("note",note);
					//is_bundle
					json_basic_Info.put("is_bundle",is_bundle);
					 
					//Benz 08-07-2019
					json_basic_Info.put("coverage_Bundle",coverage_jsonArray);
					//Benz 16-08-2019
					json_basic_Info.put("status",status);
					json_basic_Info.put("status_RP",status_RP);
					basic_Info_jsonArray.put(json_basic_Info);
					responsejson.put("Tab_Basic_Information",basic_Info_jsonArray);
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
					/////////////////////////////การใช้สิทธิ์ตามกรมธรรม์//////////////////////
					//เวนคืนกรมธรรม์(Surrender)
					boolean surrender_check	= true;
					JSONArray	jsonarr_POLICY_LOAN		= new JSONArray();
					JSONArray	jsonarr_CASH_SURR		= new JSONArray();
					JSONArray	jsonarr_APL				= new JSONArray();
					JSONArray	jsonarr_ETI				= new JSONArray();
					JSONArray	jsonarr_AUTO_ETI		= new JSONArray();
					JSONArray	jsonarr_RPU				= new JSONArray();
					JSONArray	jsonarr_AUTO_RPU		= new JSONArray();
					
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
								jsonObj_setvalue.put("Formula_id", bpi.getListNonforfProvision().get(i).getFormula_id());
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
								jsonObj_setvalue.put("Formula_id", bpi.getListNonforfProvision().get(i).getFormula_id());
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
								jsonObj_setvalue.put("Formula_id", bpi.getListNonforfProvision().get(i).getFormula_id());
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
								jsonObj_setvalue.put("Formula_id", bpi.getListNonforfProvision().get(i).getFormula_id());
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
								jsonObj_setvalue.put("Formula_id", bpi.getListNonforfProvision().get(i).getFormula_id());
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
					/////////////////////////////Tab การคำนวนเบี้ยประกัน//////////////////////
					JSONArray	age_Band_jsonArray	= new JSONArray();
					if (bpi.getListRateLayoutStandard().size() != 0) {
						for (int i = 0 ; i < bpi.getListRateLayoutStandard().size(); i++) {
							JSONObject json_age_Band = new JSONObject();
							if(!bpi.getListRateLayoutStandard().get(i).getRateLayout().getAge_band_code().equals("")) {
								json_age_Band.put("value", bpi.getListRateLayoutStandard().get(i).getRateLayout().getAge_band_code());
								age_Band_jsonArray.put(json_age_Band);
							}
						}
					}else if (bpi.getListRateLayoutStandard2().size() != 0) {
						for (int i = 0 ; i < bpi.getListRateLayoutStandard2().size(); i++) {
							JSONObject json_age_Band = new JSONObject();
							if(!bpi.getListRateLayoutStandard2().get(i).getRateLayout().getAge_band_code().equals("")) {
								json_age_Band.put("value", bpi.getListRateLayoutStandard2().get(i).getRateLayout().getAge_band_code());
								age_Band_jsonArray.put(json_age_Band);
							}
						}
					}
					
					//เบี้ยมาตรฐาน
					//select box ตารางเบี้ยประกัน
					JSONArray	select_Insurance_premium_jsonArray	= new JSONArray();
					JSONArray	select_cal_Premiums_jsonArray		= new JSONArray();
					JSONArray	tb_Insurance_premium_jsonArray		= new JSONArray();

					if (bpi.getListRateLayoutStandard().size() > 0) {
						for (int i = 0 ; i < bpi.getListRateLayoutStandard().size(); i++) {
							String text = "";
							int pass 	= 0;
							int subcat 	= 0;
							JSONObject json_select_Insurance_premium = new JSONObject();
							if (bpi.getListRateLayoutStandard().get(i).getRateLayoutLookup() != null) {
								if (bpi.getListRateLayoutStandard().get(i).getRateLayoutLookup().getName_th() != "") {
									text = bpi.getListRateLayoutStandard().get(i).getSubCat().getName_th();
								}
								if (bpi.getListRateLayoutStandard().get(i).getRateLayoutLookup().getRate_cat_id() != 0) {
									pass = bpi.getListRateLayoutStandard().get(i).getRateLayoutLookup().getRate_cat_id();
								}
							}
							if (bpi.getListCal_Premiums().size() != 0) {
								subcat = bpi.getListCal_Premiums().get(i).getSubCat().getSub_cat_id();
							}
							json_select_Insurance_premium.put("subcat",subcat);
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
					}
					/////////////////คำนวณทุนจากเบี้ย//////////////////////////////////////////
					else if (bpi.getListCal_Premiums().size() > 0) {
						for (int i = 0 ; i < bpi.getListCal_Premiums().size(); i++) {
							String text = "";
							int pass 	= 0;
							int subcat 	= 0;
							JSONObject json_select_cal_Premiums = new JSONObject();
							if (bpi.getListCal_Premiums().get(i).getRateLayoutLookup() != null) {
								if (bpi.getListCal_Premiums().get(i).getRateLayoutLookup().getName_th() != "") {
									text = bpi.getListCal_Premiums().get(i).getSubCat().getName_th();
								}
								if (bpi.getListCal_Premiums().get(i).getRateLayoutLookup().getRate_cat_id() != 0) {
									pass = bpi.getListCal_Premiums().get(i).getRateLayoutLookup().getRate_cat_id();
								}
							}
							if (bpi.getListCal_Premiums().size() != 0) {
								subcat = bpi.getListCal_Premiums().get(i).getSubCat().getSub_cat_id();
							}

							json_select_cal_Premiums.put("subcat",subcat);
							json_select_cal_Premiums.put("pass",pass);
							json_select_cal_Premiums.put("text",text);
							select_cal_Premiums_jsonArray.put(json_select_cal_Premiums);
							/////Table
							JSONObject json_tb_select_cal_Premiums = new JSONObject();
							String type 		= 	"";
							String file_name 	= 	""; 
							String file_url 	= 	""; 
							int pass2			= 	0;
							int layoutID		= 	0;
							int fileID			= 	0;
							String 	sub_code	=  "";	
							if (bpi.getListCal_Premiums().get(i).getRateLayout() != null) {
								if (bpi.getListCal_Premiums().get(i).getRateLayout().getAge_band_code() != "") {
									type = bpi.getListCal_Premiums().get(i).getRateLayout().getAge_band_code();
								}
								if (bpi.getListCal_Premiums().get(i).getRateLayout().getRate_cat_id() != 0) {
									pass2 = bpi.getListCal_Premiums().get(i).getRateLayout().getRate_cat_id();
								}
								if (bpi.getListCal_Premiums().get(i).getRateLayout().getRate_layout_id() != 0) {
									layoutID = bpi.getListCal_Premiums().get(i).getRateLayout().getRate_layout_id();
								}
								if (bpi.getListCal_Premiums().get(i).getRateLayout().getFile_id() != 0) {
									fileID = bpi.getListCal_Premiums().get(i).getRateLayout().getFile_id();
								}
								if (!bpi.getListCal_Premiums().get(i).getRateLayout().getSub_code().equals("") || !!bpi.getListCal_Premiums().get(i).getRateLayout().getSub_code().equals("null")) {
									sub_code = bpi.getListCal_Premiums().get(i).getRateLayout().getSub_code();
								}
							}
							if(bpi.getListCal_Premiums().get(i).getFile() != null) {
								if (bpi.getListCal_Premiums().get(i).getFile().getFile_name() != "") {
									file_name = bpi.getListCal_Premiums().get(i).getFile().getFile_name();
								}	
								if (bpi.getListCal_Premiums().get(i).getFile().getFile_url() != "") {
									file_url = bpi.getListCal_Premiums().get(i).getFile().getFile_url();
								}
							}
							json_tb_select_cal_Premiums.put("pass", pass2);
							json_tb_select_cal_Premiums.put("layout", layoutID);
							json_tb_select_cal_Premiums.put("type", type);
							json_tb_select_cal_Premiums.put("fileID", fileID);
							json_tb_select_cal_Premiums.put("file", file_name);
							json_tb_select_cal_Premiums.put("sub_code", sub_code);
							json_tb_select_cal_Premiums.put("ref", file_url);
							tb_Insurance_premium_jsonArray.put(json_tb_select_cal_Premiums);
						}
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
					////////////////////////////////////////////////////////////////////////
					//
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
					///
					//MIN MAX EM
					String min_EM 		= "";
					String max_EM 		= "";
					boolean is_substd	= false;
					boolean is_sa_decr	= false;
					//
					boolean prem_disc   = false;
					String prem_min				= "";
					String prem_max				= "";
					String per_policy_prem		= "";
					String prem_calc_meth	= "";
					for (int i = 0; i < bpi.getListParticipantData().size(); i++) {
						if (bpi.getListParticipantData().get(i).getCoverage() != null) {
							//มีส่วนลดเบี้ยประกัน
							prem_disc = bpi.getListParticipantData().get(i).getCoverage().getIs_prem_disc();
							BigDecimal dbprem_min 		= new BigDecimal(bpi.getListParticipantData().get(i).getCoverage().getMin_prem_disc_rate().toString());
							BigDecimal dbprem_max 		= new BigDecimal(bpi.getListParticipantData().get(i).getCoverage().getMax_prem_disc_rate().toString());
							BigDecimal dbper_policy_prem = new BigDecimal(bpi.getListParticipantData().get(i).getCoverage().getPer_policy_prem().toString());

							prem_min		= (dbprem_min).toString();
							prem_max		= (dbprem_max).toString();
							per_policy_prem	= (dbper_policy_prem).toString();
							
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
							
							prem_calc_meth = bpi.getListParticipantData().get(i).getCoverage().getPrem_calc_meth();
							
						}
					}
					//นำเข้า ตารางช่วงอายุที่รับเบี้ยเพิ่ม  
					JSONArray	em_age_jsonArray	= new JSONArray();
					if (bpi.getListRateLayoutBetweenAge().size() != 0) {
						JSONObject json_em_age = new JSONObject();
						String type 		= 	"";
						String file_name 	= 	"";
						String file_url	= 	"";
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
					//ทุนคุ้มครองที่ลดลง
					JSONArray	select_capital_decrease_jsonArray	= new JSONArray();
					JSONArray	tb_capital_decrease_jsonArray		= new JSONArray();
					for (int i = 0 ; i < bpi.getListRateLayoutCapitalDecrease().size(); i++) {
						JSONObject json_capital_decrease = new JSONObject();
						String text = "";
						if (bpi.getListRateLayoutCapitalDecrease().get(i).getRateLayoutLookup() != null) {
							if (bpi.getListRateLayoutCapitalDecrease().get(i).getRateLayoutLookup().getName_th() != "") {
								text = bpi.getListRateLayoutCapitalDecrease().get(i).getSubCat().getName_th();
							}
						}
						json_capital_decrease.put("pass",Integer.toString(i+1));
						json_capital_decrease.put("text",text);
						select_capital_decrease_jsonArray.put(json_capital_decrease);
					/////Table
						JSONObject json_tbcapital_decrease = new JSONObject();
						String type 		= 	"";
						String file_name 	= 	""; 
						String file_url	= 	""; 
						int pass2			= 	0;
						int layoutID		= 	0;
						int fileID			= 	0;
						String 	sub_code	=  "";
						if (bpi.getListRateLayoutCapitalDecrease().get(i).getRateLayout() != null) {
							if (bpi.getListRateLayoutCapitalDecrease().get(i).getRateLayout().getAge_band_code() != "") {
								type = bpi.getListRateLayoutCapitalDecrease().get(i).getRateLayout().getAge_band_code();
							}
							if (bpi.getListRateLayoutCapitalDecrease().get(i).getRateLayout().getRate_cat_id() != 0) {
								pass2 = bpi.getListRateLayoutCapitalDecrease().get(i).getRateLayout().getRate_cat_id();
							}
							if (bpi.getListRateLayoutCapitalDecrease().get(i).getRateLayout().getRate_layout_id() != 0) {
								layoutID = bpi.getListRateLayoutCapitalDecrease().get(i).getRateLayout().getRate_layout_id();
							}
							if (bpi.getListRateLayoutCapitalDecrease().get(i).getRateLayout().getFile_id() != 0) {
								fileID = bpi.getListRateLayoutCapitalDecrease().get(i).getRateLayout().getFile_id();
							}
							if (!bpi.getListRateLayoutCapitalDecrease().get(i).getRateLayout().getSub_code().equals("") || !!bpi.getListRateLayoutCapitalDecrease().get(i).getRateLayout().getSub_code().equals("null")) {
								sub_code = bpi.getListRateLayoutCapitalDecrease().get(i).getRateLayout().getSub_code();
							}
						}
						if(bpi.getListRateLayoutCapitalDecrease().get(i).getFile() != null) {
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
						json_tbcapital_decrease.put("sub_code", sub_code);
						json_tbcapital_decrease.put("ref", file_url);
						tb_capital_decrease_jsonArray.put(json_tbcapital_decrease);
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
					////////////////////////////////////////////////////////////////////////////////////
					JSONArray  cal_insurance_premiums_jsonArray	= new JSONArray();
					JSONObject json_cal_insurance_premiums = new JSONObject();
					json_cal_insurance_premiums.put("age_Band",age_Band_jsonArray);
					json_cal_insurance_premiums.put("select_insurance_premium",select_Insurance_premium_jsonArray);
					json_cal_insurance_premiums.put("table_insurance_premium",tb_Insurance_premium_jsonArray);
					json_cal_insurance_premiums.put("select_cal_Premiums",select_cal_Premiums_jsonArray);
					//json_cal_insurance_premiums.put("tb_cal_Premiums",tb_cal_Premiums_jsonArray);
					json_cal_insurance_premiums.put("select_extra_Rate",select_extra_Rate_jsonArray);
					json_cal_insurance_premiums.put("table_extra_Rate",tb_extra_Rate_jsonArray);
					json_cal_insurance_premiums.put("table_Dis_Sa",table_Dis_Sa_jsonArray);
					json_cal_insurance_premiums.put("prem_disc",prem_disc);
					json_cal_insurance_premiums.put("prem_min",prem_min);
					json_cal_insurance_premiums.put("prem_max",prem_max);
					json_cal_insurance_premiums.put("per_policy_prem",per_policy_prem);
					json_cal_insurance_premiums.put("prem_calc_meth",prem_calc_meth);
					
					json_cal_insurance_premiums.put("is_substd",is_substd);
					json_cal_insurance_premiums.put("min_EM",min_EM);
					json_cal_insurance_premiums.put("max_EM",max_EM);
					json_cal_insurance_premiums.put("is_sa_decr",is_sa_decr);
					json_cal_insurance_premiums.put("em_Age",em_age_jsonArray);
					json_cal_insurance_premiums.put("PM_Type_premium",pm_Type_premium_jsonArray);
					json_cal_insurance_premiums.put("select_capital_decrease",select_capital_decrease_jsonArray);
					json_cal_insurance_premiums.put("table_capital_decrease",tb_capital_decrease_jsonArray);
					cal_insurance_premiums_jsonArray.put(json_cal_insurance_premiums);
					responsejson.put("Tab_cal_insurance_premiums",cal_insurance_premiums_jsonArray);
					//
					responseText = responsejson.toString();
					/////////////////////////////////////////////////////////////////////
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
					//
					responseText = responsejson.toString();
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
//								    				//////////////sched
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
				}else if(method.equals("searchRateCatByAgeType")) {
					
					/*criteria*/
					String type = request.getParameter("type");
					
					String ageSpeci_str = request.getParameter("age_speci");
					JSONArray	jsonArray_ageSpeci		= new JSONArray(ageSpeci_str);
					String[] ageSpeci = new String[jsonArray_ageSpeci.length()];
					for (int i = 0; i < jsonArray_ageSpeci.length() ; i++) {
						JSONObject   jsonObj_ageSpeci = jsonArray_ageSpeci.getJSONObject(i);
						ageSpeci[i] = jsonObj_ageSpeci.getString("rate_cat");
					}
					String ageBand_str = request.getParameter("age_Band");
					JSONArray	jsonArray_ageBand		= new JSONArray(ageBand_str);
					String[] ageBand = new String[jsonArray_ageBand.length()];
					for (int i = 0; i < jsonArray_ageBand.length() ; i++) {
						JSONObject   jsonObj_ageBand = jsonArray_ageBand.getJSONObject(i);
						ageBand[i] = jsonObj_ageBand.getString("rate_cat");
					}
					String ageSum_str = request.getParameter("age_Sum");
					JSONArray	jsonArray_ageSum		= new JSONArray(ageSum_str);
					String[] ageSum = new String[jsonArray_ageSum.length()];
					for (int i = 0; i < jsonArray_ageSum.length() ; i++) {
						JSONObject   jsonObj_ageSum = jsonArray_ageSum.getJSONObject(i);
						ageSum[i] = jsonObj_ageSum.getString("rate_cat");
					}
					
					/*process*/
					ArrayList<String[]> arr_str = new ArrayList<>();
					AppconfigControlData appconfigControlData = new AppconfigControlData();
					arr_str = appconfigControlData.searchRateCatByAgeType(type, ageSpeci, ageBand, ageSum);
					
					/*result*/
					String rate_cat_id = "";
					RateLayoutData rld = new RateLayoutData ();

					JSONArray  rate_cat_jsonArray	= new JSONArray();
					for (String[] strings : arr_str) {
						JSONObject rateCat_obj = new JSONObject();
						rateCat_obj.put("rate_cat_id",strings[0]);
						rateCat_obj.put("sub_code",strings[1]);
						rateCat_obj.put("type_rate",strings[2]);
						
						///Benz 12-12-2019 search lookup.rate_layout
						String sub_cat = request.getParameter("sub_cat");
						rate_cat_id	= strings[0];
						ArrayList<Rate_layout> arr_Rate_layout = rld.searchRateLayoutVal6(Integer.parseInt(rate_cat_id), Integer.parseInt(sub_cat));
						if (arr_Rate_layout.size() > 0) {
							rateCat_obj.put("rate_layout_id",arr_Rate_layout.get(0).getRate_layout_id());
						}else {
							rateCat_obj.put("rate_layout_id","");
						}
						rate_cat_jsonArray.put(rateCat_obj);
					}
					responsejson.put("RateCat_result",rate_cat_jsonArray);
					responseText = responsejson.toString();
				}
				//
				json = responseText;
				System.out.println("Get/////"+json);
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