package servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.lang.reflect.Array;
import java.math.BigDecimal;
import java.sql.Date;
import java.sql.Timestamp;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.JSONArray;
import org.json.JSONObject;

import layout.bean.productfac.beanset.BenefitAccessData;

//import com.fasterxml.jackson.databind.ObjectMapper;

import layout.bean.productfac.beanset.ParticipantAccessData;
import layout.bean.productfac.beanset.RateLayoutPremAccessData;
import layout.bean.productfac.benefit.Benefit;
import layout.bean.productfac.coverage.Age_calc_meth;
import layout.bean.productfac.coverage.Benefit_amount;
import layout.bean.productfac.coverage.Benefit_item;
import layout.bean.productfac.coverage.Benefit_period;
import layout.bean.productfac.coverage.Benefit_sched;
import layout.bean.productfac.coverage.Benefit_special_amount;
import layout.bean.productfac.coverage.Benefit_period_det;
import layout.bean.productfac.coverage.Coverage;
import layout.bean.productfac.coverage.Document;
import layout.bean.productfac.coverage.Filing_channel;
import layout.bean.productfac.coverage.Mode;
import layout.bean.productfac.coverage.Nonforf_provision;
import layout.bean.productfac.coverage.Participant;
import layout.bean.productfac.coverage.Prem_assump_rate;
import layout.bean.productfac.coverage.Prem_install;
import layout.bean.productfac.coverage.Premium_period;
import layout.bean.productfac.coverage.Rate_layout;
import layout.bean.productfac.lookup.Nonforf_rate;
import layout.bean.productfac.product.Product;
import layout.bean.productfac.workflow.Coverage_request;
import layout.bean.productfac.workflow.Coverage_task;
import service.BasePlan_SaveData_Service_OL;
import service.FreezePolicyValue;
import service.baseplan.BasePlanBasicInfo;
import service.baseplan.BasePlanBenefitOLSearchData;
import service.baseplan.BasePlanBenefits;
import service.baseplan.BasePlanBenefitsOL;
import service.baseplan.BasePlanGrantRightsInsure;
import service.baseplan.ctrl.NonforfProvisionData;
import service.baseplan.ctrl.RateLayoutData;
import service.baseplan.merge.BasicInfo;
import service.center.BundleData;
import service.center.NonforfRateData;
import service.center.PremAssumpRateData;
import service.center.WorkFlowCoverage;
import service.ctrl.CoverageData;
import service.ctrl.PolicyWordingControlData;
import service.fnc.ConstantValues;
import service.fnc.PDFFnc;
import service.rider.RiderBenefits;
import service.tab.BasicInfoDataTab;

/**
 * Servlet implementation class BasePlanCL_SaveData_Servlet
 */
@WebServlet("/BasePlanOL_SaveData_Servlet")
public class BasePlanOL_SaveData_Servlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private String userId;
    
	/**
     * @see HttpServlet#HttpServlet()
     */
    public BasePlanOL_SaveData_Servlet() {
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
	protected void doPost(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
//======================================================
		HttpSession session = request.getSession();
		String getuserID = session.getAttribute("userID").toString();
		if (!getuserID.equals("")) {
			userId =  getuserID ;
		}else {
			System.out.println("================== NO USER ====================");
		}
		
		response.setCharacterEncoding("UTF-8");	
		PrintWriter out 	= response.getWriter();
		System.out.println("======= Save BasePlanOL ======"); 
		String responseText = "";
		 String passInsurance 	= request.getParameter("passInsurance");
		 ConstantValues.COV_CODE = passInsurance;
		try {
			if (request.getParameter("method").equals("Tab_Basic_Information")) {
				responseText = save_Basic_Info(request, response);
			}else if (request.getParameter("method").equals("Tab_Policy_Wording")) {
				responseText = save_PolicyWording(request, response);
			}else if (request.getParameter("method").equals("Tab_rights_insurance")) {
				responseText = save_Tab_rights_insurance(request, response);
			}else if (request.getParameter("method").equals("Tab_cal_insurance_premiums")) {
				responseText = save_cal_insurance_premiums(request, response);
			}else if (request.getParameter("method").equals("Tab_table_policy_value")) {
				responseText = save_table_policy_value(request, response);
			}else if (request.getParameter("method").equals("Tab_coverageBenefits")) {
				responseText = save_Tab_coverageBenefits(request, response);
			}else if (request.getParameter("method").equals("save_benefitsCoverage_dead")) {
				responseText = save_benefitsCoverage_dead(request, response);
			}else if (request.getParameter("method").equals("save_benefitsCoverage_disability")) {
				responseText = save_benefitsCoverage_disability(request, response);
			}else if (request.getParameter("method").equals("save_RefundMaturity")) {
				responseText = save_RefundMaturity(request, response);
			}else if (request.getParameter("method").equals("save_Refund")) {
				responseText = save_Refund(request, response);
			}else if (request.getParameter("method").equals("save_Pension")) {
				responseText = save_Pension(request, response);
			}else if (request.getParameter("method").equals("save_MedicalFund")) {
				responseText = save_MedicalFund(request, response);
			}else if (request.getParameter("method").equals("save_MedicalFund")) {
				responseText = save_MedicalFund(request, response);
			}else if (request.getParameter("method").equals("save_Dividend")) {
				responseText = save_Dividend(request, response);
			}else if (request.getParameter("method").equals("check_Approved")) {
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
		try {
			BasePlan_SaveData_Service_OL settoService = new BasePlan_SaveData_Service_OL ();
			String passInsurance    	= request.getParameter("passInsurance");
			String groupName 			= request.getParameter("groupName");
			ConstantValues.GROUP_NAME 	= groupName;
			//coverage
//				Coverage coverage = new Coverage();
				Coverage coverage = new BasicInfo().searchCoverage(passInsurance);
				coverage.setCov_code(request.getParameter("passInsurance"));
				coverage.setName_th(request.getParameter("name_th"));
				coverage.setName_en(request.getParameter("name_en"));
				//coverage.setMin_em(new BigDecimal(0));
				//coverage.setMax_em(new BigDecimal(0));
				//OL
				Boolean bundle = Boolean.valueOf(request.getParameter("is_bundle"));
				coverage.setIs_bundle(bundle);
				
				
				if (request.getParameter("sale_eff_date") != "") {
					coverage.setSale_eff_date(getData(request.getParameter("sale_eff_date")));
				}else {
					coverage.setSale_eff_date(null);
				}
				if (request.getParameter("sale_exp_date") != "") {
					coverage.setSale_exp_date(getData(request.getParameter("sale_exp_date")));
				}else {
					coverage.setSale_exp_date(null);
				}
				coverage.setCov_unit_type(request.getParameter("protect_Type"));
				coverage.setContract_term(request.getParameter("contract_Type"));
				if (request.getParameter("prem_Rate") != "") {
					coverage.setPrem_int_rate(covertStringtoBigDecimal(request.getParameter("prem_Rate")));
				}
				if(request.getParameter("sum_decr_rate") != "") {
					coverage.setSum_decr_int_rate(covertStringtoBigDecimal(request.getParameter("sum_decr_rate")));
				}
				coverage.setIs_install(Boolean.parseBoolean(request.getParameter("ch_separate_pay")));
				coverage.setUser_code(userId);
				
				///
				ArrayList<Prem_assump_rate> list_Prem_assump_rate 	= new ArrayList<>(); 
				String mortality_str 								= request.getParameter("prem_assump_rate");
			  	JSONArray jsonArr_Prem_assump_rate 					= new JSONArray(mortality_str);
			  	PremAssumpRateData par								= new PremAssumpRateData();
			  	
		        for (int i = 0; i < jsonArr_Prem_assump_rate.length(); i++)
		        {	
		        	Prem_assump_rate setprem = new Prem_assump_rate();
		            JSONObject jsonObj_Prem_assump_rate = jsonArr_Prem_assump_rate.getJSONObject(i);
		            setprem.setCov_code(passInsurance);
		            setprem.setPrem_assump_type(jsonObj_Prem_assump_rate.getString("prem_assump_type"));
		            setprem.setGender(jsonObj_Prem_assump_rate.getString("gender"));
		            setprem.setPrem_assump_rate_id(jsonObj_Prem_assump_rate.getInt("prem_assum_rate_id"));
		            setprem.setUser_code(userId);
		            setprem.setUpdate_time(PDFFnc.currentTimeStamp());
		            list_Prem_assump_rate.add(setprem);
		        }
				
		        par.doPremAssumpRate(list_Prem_assump_rate); //ไป Database ตัวใหม่
		        coverage.setStatus("UPDATE");//*Benz 19-08-2019
		        coverage.setUpdate_time(PDFFnc.currentTimeStamp());
		        new BasePlanBasicInfo().doCoverage(coverage);
		        
		    ////Benz 11-09-2019 New set Status
		        WorkFlowCoverage wfc = new WorkFlowCoverage();
				ArrayList<Coverage_task> arr_getCoverage_task = wfc.searchCoverageTask();
				Coverage_task  setcovtask = new Coverage_task();
				for (int i = 0; i < arr_getCoverage_task.size(); i++) {
					if ((arr_getCoverage_task.get(i).getDepartment().equals("PD") || 
							arr_getCoverage_task.get(i).getDepartment().equals("PD_Test") || 
							arr_getCoverage_task.get(i).getDepartment().equals("PD2")) && !arr_getCoverage_task.get(i).getApprove_status().equals("APPROVE")) {
						setcovtask =   arr_getCoverage_task.get(i);
						setcovtask.setCov_code(passInsurance);
						setcovtask.setDepartment(ConstantValues.GROUP_NAME);
						setcovtask.setApprove_status("UPDATE");
						setcovtask.setUser_code(userId);
						setcovtask.setUpdate_time(PDFFnc.currentTimeStamp());
						wfc.doCoverageTask(setcovtask);
					}
				}
		    				
		    				
			  	//participant
			 	ParticipantAccessData participantAccessData = new ParticipantAccessData();
			 	Participant participant = new Participant();
			 	participant.setCov_code(passInsurance);
			 	participant.setIssue_gender(request.getParameter("gender"));
			 	if (request.getParameter("min_age") != "") {
			 		participant.setMin_issue_age(Integer.parseInt(request.getParameter("min_age")));
			 	}
			 	if (request.getParameter("max_age") != "") {
			 		participant.setMax_issue_age(Integer.parseInt(request.getParameter("max_age")));
			 	}
			 	if (request.getParameter("max_insure_age") != "") {
			 		participant.setMax_insure_age(Integer.parseInt(request.getParameter("max_insure_age")));
			 	}
			 	participant.setPrem_rule(request.getParameter("insurance_premium"));
			 	participant.setMin_issue_age_unit("YEAR"); // prove
				participant.setMax_issue_age_unit("YEAR"); // prove
				participant.setMax_insure_age_unit("YEAR");// prove
				participant.setUser_code(userId);
				participant.setPartic_type("PRIMARY"); // prove
				participant.setUpdate_time(PDFFnc.currentTimeStamp());
			 	
			    	//term contract ระยะประกันของสัญญาประกันชีวิต
					ArrayList<Benefit_period_det> lstBenefitVal = new ArrayList<>();
					ArrayList<Benefit_period> lstBenefit_period = new ArrayList<>();
					String benefitPeriodDets_str = request.getParameter("term_contract");
					JSONArray jsonArr_benefitPeriodDets = new JSONArray(benefitPeriodDets_str);
					for(int i=0; i<jsonArr_benefitPeriodDets.length(); i++) {
						JSONObject jsonObj_benefitPeriodDet = jsonArr_benefitPeriodDets.getJSONObject(i);
						if(jsonObj_benefitPeriodDet.get("radio").equals("TO_AGE"))
						{
							//benefit_period
							Benefit_period benefit_period = new Benefit_period();
							benefit_period.setCov_code(request.getParameter("passInsurance")); 
							benefit_period.setPartic_type("PRIMARY");
							benefit_period.setSeq(i+1);
							benefit_period.setBnf_period_comp("NONE");
							benefit_period.setUser_code(userId);
							benefit_period.setUpdate_time(PDFFnc.currentTimeStamp());
							lstBenefit_period.add(benefit_period);
							
							///Benefit_period_det
							String term_contract_value =  String.valueOf(jsonObj_benefitPeriodDet.get("value"));	
							JSONArray jsonArr_term_contract_value = new JSONArray(term_contract_value);
							JSONObject jsonObj_benefitPeriodDet1 = jsonArr_term_contract_value.getJSONObject(i);
							Benefit_period_det benefit_period_det2 = new Benefit_period_det();
							benefit_period_det2.setPeriod_calc_meth((String)jsonObj_benefitPeriodDet.get("radio"));//
							benefit_period_det2.setMin_period(0); //prove //
							benefit_period_det2.setMax_period(Integer.parseInt(jsonObj_benefitPeriodDet1.getString("max_age"))); //prove//
							benefit_period_det2.setMin_period_unit("NONE");//prove//
							benefit_period_det2.setMax_period_unit(jsonObj_benefitPeriodDet1.getString("unit_age")); //prove//
							
							benefit_period_det2.setCov_code(request.getParameter("passInsurance")); // prove
							benefit_period_det2.setPartic_type("PRIMARY"); // prove//
							benefit_period_det2.setSeq(i+1); // prove//
							benefit_period_det2.setAge_partic_type("PRIMARY"); // prove//
							benefit_period_det2.setUpdate_time(PDFFnc.currentTimeStamp()); // prove//
							benefit_period_det2.setUser_code(userId);//
							
							lstBenefitVal.add(benefit_period_det2);
						}
						else if(jsonObj_benefitPeriodDet.get("radio").equals("TO_YEAR"))
						{
							String term_contract_value =  String.valueOf(jsonObj_benefitPeriodDet.get("value"));	
							JSONArray jsonArr_term_contract_value = new JSONArray(term_contract_value);
							
							for (int ii = 0; ii < jsonArr_term_contract_value.length(); ii++) {
								
								//benefit_period
								Benefit_period benefit_period = new Benefit_period();
								benefit_period.setCov_code(request.getParameter("passInsurance")); 
								benefit_period.setPartic_type("PRIMARY");
								benefit_period.setSeq(ii+1);
								benefit_period.setBnf_period_comp("NONE");
								benefit_period.setUser_code(userId);
								benefit_period.setUpdate_time(PDFFnc.currentTimeStamp());
								lstBenefit_period.add(benefit_period);
								
								//Benefit_period_det
								JSONObject jsonObj_benefitPeriodDet2 = jsonArr_term_contract_value.getJSONObject(ii);
								Benefit_period_det benefit_period_det2 = new Benefit_period_det();
								benefit_period_det2.setPeriod_calc_meth((String)jsonObj_benefitPeriodDet.get("radio"));
								benefit_period_det2.setMin_period(Integer.parseInt(jsonObj_benefitPeriodDet2.getString("min_age")));
								benefit_period_det2.setMax_period(Integer.parseInt(jsonObj_benefitPeriodDet2.getString("max_age")));
								benefit_period_det2.setMin_period_unit(jsonObj_benefitPeriodDet2.getString("unit_age"));
								benefit_period_det2.setMax_period_unit(jsonObj_benefitPeriodDet2.getString("unit_age"));
								
								benefit_period_det2.setCov_code(request.getParameter("passInsurance")); // prove
								benefit_period_det2.setPartic_type("PRIMARY"); //prove
								benefit_period_det2.setSeq(ii	+1); // prove
								benefit_period_det2.setAge_partic_type("PRIMARY"); // prove
								benefit_period_det2.setUpdate_time(PDFFnc.currentTimeStamp()); // prove
								benefit_period_det2.setUser_code(userId);
								lstBenefitVal.add(benefit_period_det2);
							}
						}
					}
					
					//AgeCal
					ArrayList<Age_calc_meth> lstAgeCalMeth = new ArrayList<>();
					String ageCalMeth_str = request.getParameter("cal_Age");
					JSONArray jsonArr_ageCalMeth = new JSONArray(ageCalMeth_str);
					for(int i=0 ; i<jsonArr_ageCalMeth.length() ; i++) 
					{
						Age_calc_meth age_calc_meth = new Age_calc_meth();
						 JSONObject jsonObj_ageCalMeth = jsonArr_ageCalMeth.getJSONObject(i);
						 age_calc_meth.setCov_code(request.getParameter("passInsurance")); //prove
						 age_calc_meth.setPartic_type("PRIMARY"); //prove
						 age_calc_meth.setAge_calc_meth(jsonObj_ageCalMeth.get("value").toString());
						 age_calc_meth.setUpdate_time(getCurrentTimestamp());
						 lstAgeCalMeth.add(age_calc_meth);
					}
					participantAccessData.setParticipant(participant);
					participantAccessData.setListBenefitPeriod(lstBenefit_period);
					participantAccessData.setListBenefitPeriodDet(lstBenefitVal);
					participantAccessData.setListAgeCalcMeth(lstAgeCalMeth);
					settoService.setPaticipantAccess(participantAccessData);
			    
			    //Mode
				String mode_str = request.getParameter("mode");
			  	JSONArray jsonArr_mode = new JSONArray(mode_str);
				ArrayList<Mode> lstMode = new ArrayList<>();
		        for (int i = 0; i < jsonArr_mode.length(); i++)
		        {	
			        Mode mode = new Mode();
		            JSONObject jsonObj_mode = jsonArr_mode.getJSONObject(i);
		            mode.setCov_code(request.getParameter("passInsurance"));
		            mode.setMode(jsonObj_mode.get("value").toString());
		            mode.setUser_code(userId);
		            mode.setUpdate_time(getCurrentTimestamp());
		            lstMode.add(mode);
		        }
		        settoService.set_Mode(lstMode);
		        
		       //FilingChanel 
		        ArrayList<Filing_channel> lstFilingChanel = new ArrayList<>();
				String filing_chanel_str = request.getParameter("filing_Channel");
				JSONArray jsonArr_filing_Channel = new JSONArray(filing_chanel_str);
				for(int i=0 ; i<jsonArr_filing_Channel.length() ; i++) {
					Filing_channel filing_channel = new Filing_channel();
					 JSONObject jsonObj_filingChanel = jsonArr_filing_Channel.getJSONObject(i);
					 filing_channel.setUpdate_time(getCurrentTimestamp());
					 filing_channel.setFiling_chan_id(Integer.parseInt((String) jsonObj_filingChanel.get("value")));
					 String covCode = request.getParameter("passInsurance");
					 filing_channel.setCov_code(covCode);
					 filing_channel.setUser_code(userId);
					 lstFilingChanel.add(filing_channel);
				}
				settoService.set_FilingChanel(lstFilingChanel);
			    	
				//payment_contract ระยะชำระเบี้ยของสัญญาประกันชีวิต
				ArrayList<Prem_install> lstPrem_installs = new ArrayList<>();
				Premium_period premium_period = new Premium_period();
				String payment_contract = request.getParameter("payment_contract");
				JSONArray jsonArr_paymentContract = new JSONArray(payment_contract);
				for(int i=0; i<jsonArr_paymentContract.length(); i++) {
					JSONObject jsonObj_paymentContract = jsonArr_paymentContract.getJSONObject(i);
					
					if(jsonObj_paymentContract.get("radio").equals("TO_AGE"))
					{	
						premium_period.setCov_code(passInsurance);
						premium_period.setSeq(i+1);
						premium_period.setPeriod_calc_meth(jsonObj_paymentContract.getString("radio"));
						premium_period.setPeriod_unit(jsonObj_paymentContract.getString("unit_age"));
						premium_period.setPeriod_num(Integer.parseInt(jsonObj_paymentContract.getString("age")));
						premium_period.setUpdate_time(getCurrentTimestamp());
						premium_period.setAge_partic_type("PRIMARY");
						premium_period.setUser_code(userId);
					}
					else if(jsonObj_paymentContract.get("radio").equals("TO_YEAR"))
					{
						premium_period.setCov_code(passInsurance);
						premium_period.setSeq(i+1);
						premium_period.setPeriod_calc_meth(jsonObj_paymentContract.getString("radio"));
						premium_period.setPeriod_unit(jsonObj_paymentContract.getString("unit_age"));
						premium_period.setPeriod_num(Integer.parseInt(jsonObj_paymentContract.getString("age")));
						premium_period.setUpdate_time(getCurrentTimestamp());
						premium_period.setAge_partic_type("PRIMARY");
						premium_period.setUser_code(userId);
						
						String prem_install_str =  String.valueOf(jsonObj_paymentContract.get("separate_pay"));
						if(!prem_install_str.equals("")) {
							JSONArray jsonArr_install = new JSONArray(prem_install_str);
						
							for (int ii = 0; ii < jsonArr_install.length(); ii++) {
								JSONObject jsonObj_install = jsonArr_install.getJSONObject(ii);
								Prem_install prem_install = new Prem_install();
								prem_install.setCov_code(passInsurance);
								prem_install.setUser_code(userId);
								prem_install.setPeriod(Integer.parseInt(jsonObj_install.get("period").toString()));
								prem_install.setInstall_rate(covertStringtoBigDecimal(jsonObj_install.get("rate").toString()));
								prem_install.setUpdate_time(getCurrentTimestamp());
								lstPrem_installs.add(prem_install);
							}
						}
					}
				}
				
				settoService.setPremiumAcessData(premium_period,lstPrem_installs);
				
		        //table_TaxReduce
				String taxReduce_str = request.getParameter("table_TaxReduce");
			  	JSONArray jsonArr_taxReduce = new JSONArray(taxReduce_str);
				ArrayList<Rate_layout> lstRateLayout = new ArrayList<>();
		        for (int i = 0; i < jsonArr_taxReduce.length(); i++)
		        {	
			        Rate_layout rate_layout = new Rate_layout();
		            JSONObject jsonObj_taxReduce= jsonArr_taxReduce.getJSONObject(i);
		            rate_layout.setCov_code(passInsurance);
		            rate_layout.setRate_cat_id(Integer.parseInt(jsonObj_taxReduce.getString("rate_cat_id")));
		            rate_layout.setRate_layout_id(Integer.parseInt(jsonObj_taxReduce.getString("rate_layout_id")));
		            rate_layout.setFile_id(Integer.parseInt(jsonObj_taxReduce.getString("file_id")));
		            rate_layout.setAge_band_code("");
		            rate_layout.setUpdate_time(getCurrentTimestamp());
		            rate_layout.setUser_code(userId);
		            rate_layout.setSub_code("");
		            lstRateLayout.add(rate_layout);
		        }
		        settoService.setRate_layout(lstRateLayout);
		        
			  //note
			  String note = request.getParameter("note");
			  String covCode = request.getParameter("passInsurance");
			  settoService.setNote(note,covCode);
			  
			  ///Benzเพิ่ม Save Bundle //09-08-2019
			/*String key_coverageExtra = request.getParameter("key_coverageExtra");
			JSONArray jsonArr_key_coverageExtra = new JSONArray(key_coverageExtra);
			String[] listcov_code  		= new String[jsonArr_key_coverageExtra.length()]; 
		    for (int i = 0; i < jsonArr_key_coverageExtra.length(); i++)
		    {	
		    	 JSONObject jsonObj_key_coverageExtra	= jsonArr_key_coverageExtra.getJSONObject(i);
		    	 listcov_code[i] 		= (String) jsonObj_key_coverageExtra.get("value".toString());
		    }
		    BundleData bd = new BundleData ();
		    bd.doBundle(listcov_code);*/
			  
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "success";
	}
	public String save_PolicyWording(HttpServletRequest request, HttpServletResponse response) throws Exception{
		try {
			String passInsurance 		= request.getParameter("passInsurance");
			String groupName 			= request.getParameter("groupName");
			ConstantValues.GROUP_NAME 	= groupName;
			
			String table_policyWording = request.getParameter("policyWording");
			JSONArray jsonArr_table_policyWording = new JSONArray(table_policyWording);
			ArrayList<Document> lstDocument = new ArrayList<>();
			for(int i=0 ; i<jsonArr_table_policyWording.length() ; i++) {
				Document document = new Document();
				JSONObject jsonObj_table_policyWording = jsonArr_table_policyWording.getJSONObject(i);
				document.setCov_code(passInsurance);
				document.setDoc_type_id(jsonObj_table_policyWording.getInt("doc_type_id"));
				if( !jsonObj_table_policyWording.get("pdf_file_id").toString().equals("") ) {
					document.setPdf_file_id(jsonObj_table_policyWording.getInt("pdf_file_id"));
				}
				if( !jsonObj_table_policyWording.get("doc_file_id").toString().equals("")) {
					document.setDoc_file_id(jsonObj_table_policyWording.getInt("doc_file_id"));
				}
				document.setUpdate_time(getCurrentTimestamp());
				document.setUser_code(userId);
				lstDocument.add(document);
			}
			PolicyWordingControlData policyWordingControlData = new PolicyWordingControlData();
			policyWordingControlData.doPolcyWording(lstDocument);
			
		////Benz 11-09-2019 New set Status
			WorkFlowCoverage wfc = new WorkFlowCoverage();
			ArrayList<Coverage_task> arr_getCoverage_task = wfc.searchCoverageTask();
			Coverage_task  setcovtask = new Coverage_task();
			for (int i = 0; i < arr_getCoverage_task.size(); i++) {
				if ((arr_getCoverage_task.get(i).getDepartment().equals("RP") || 
						arr_getCoverage_task.get(i).getDepartment().equals("RP_Test")) 
						&& !arr_getCoverage_task.get(i).getApprove_status().equals("APPROVE"))
				{
					setcovtask =   arr_getCoverage_task.get(i);
					setcovtask.setCov_code(passInsurance);
					setcovtask.setDepartment(ConstantValues.GROUP_NAME);
					setcovtask.setApprove_status("UPDATE");
					setcovtask.setUser_code(userId);
					setcovtask.setUpdate_time(PDFFnc.currentTimeStamp());
					wfc.doCoverageTask(setcovtask);
				}
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	
	public String save_Tab_rights_insurance(HttpServletRequest request, HttpServletResponse response) throws Exception 
	{
		try {
			String groupName 			= request.getParameter("groupName");
			ConstantValues.GROUP_NAME 	= groupName;
			
			ArrayList<Nonforf_provision> arr_Nonforf = new ArrayList<>();
			BasePlan_SaveData_Service_OL settoService = new BasePlan_SaveData_Service_OL ();
			//String surrender_check 				= request.getParameter("surrender_check");
			String passInsurance					= request.getParameter("passInsurance");
			String check_POLICY_LOAN				= request.getParameter("POLICY_LOAN");
			String check_CASH_SURR					= request.getParameter("CASH_SURR");
			String check_APL_AUTO					= request.getParameter("APL_AUTO");
			String str_str_txb_Policy_Loan			=  request.getParameter("txb_Policy_Loan");
			String str_txb_APL_AUTO					=  request.getParameter("txb_APL_AUTO");
			String check_CV_Claim					=  request.getParameter("CV_Claim");
			String check_ETI						=  request.getParameter("ETI");
			String check_AUTO_ETI					=  request.getParameter("AUTO_ETI");
			String check_ETI_TO						=  request.getParameter("ETI_TO");
			String check_RPU						=  request.getParameter("RPU");
			String check_AUTO_RPU					=  request.getParameter("AUTO_RPU");
			String check_PRU_TO						=  request.getParameter("PRU_TO");
			
			//boolean setsurrender_check 			= Boolean.parseBoolean(surrender_check);
			//settoService.set_Nonforf_provision(setsurrender_check,passInsurance,userId);
			//
			///Nonforf_provision nonforf_provision = new GrantRightsInsure().searchNonforfProvisions(passInsurance);
			//Nonforf_provision nonforf_provision = new Nonforf_provision();
      		NonforfProvisionData setNP = new NonforfProvisionData();
		    ArrayList<Nonforf_provision> arr_Product 	= setNP.searchCoverageNonforfprovision(passInsurance);
		    if (arr_Product.size() > 0) {
					//POLICY_LOAN
					if (check_POLICY_LOAN.equals("true")) {
				    	for (int i = 0; i < arr_Product.size(); i++) {
							if (arr_Product.get(i).getNonforf_prov().equals("POLICY_LOAN")) {
								Nonforf_provision nonforf_provision = arr_Product.get(i);
								nonforf_provision.setCov_code(passInsurance);
								nonforf_provision.setNonforf_prov("POLICY_LOAN");
								if (!str_str_txb_Policy_Loan.equals("")) {
									nonforf_provision.setInterest_rate(covertStringtoBigDecimal(str_str_txb_Policy_Loan));
								}
								nonforf_provision.setIs_default(true);
								nonforf_provision.setPeriod_calc_meth("NONE");
								nonforf_provision.setPeriod_unit("NONE");
								nonforf_provision.setUser_code(userId);
								nonforf_provision.setUpdate_time(PDFFnc.currentTimeStamp());
								arr_Nonforf.add(nonforf_provision);
								break;
							}else {
								Nonforf_provision nonforf_provision = new Nonforf_provision();
								nonforf_provision.setCov_code(passInsurance);
								nonforf_provision.setNonforf_prov("POLICY_LOAN");
								if (!str_str_txb_Policy_Loan.equals("")) {
									nonforf_provision.setInterest_rate(covertStringtoBigDecimal(str_str_txb_Policy_Loan));
								}
								nonforf_provision.setIs_default(true);
								nonforf_provision.setPeriod_calc_meth("NONE");
								nonforf_provision.setPeriod_unit("NONE");
								nonforf_provision.setUser_code(userId);
								nonforf_provision.setUpdate_time(PDFFnc.currentTimeStamp());
								arr_Nonforf.add(nonforf_provision);
								break;
							}
				    	}	
					}
					//CASH_SURR
					if (check_CASH_SURR.equals("true")) {
				    	for (int i = 0; i < arr_Product.size(); i++) {
							if (arr_Product.get(i).getNonforf_prov().equals("CASH_SURR")) {
								Nonforf_provision nonforf_provision = arr_Product.get(i);
								nonforf_provision.setCov_code(passInsurance);
								nonforf_provision.setNonforf_prov("CASH_SURR");
								nonforf_provision.setIs_default(true);
								
								//CV_Claim
								String str_CV_Claim  = request.getParameter("CV_Claim");
								if (str_CV_Claim.equals("true")) {
									nonforf_provision.setIs_claim_deduct(true);
								}else {
									nonforf_provision.setIs_claim_deduct(false);
								} 
								
								nonforf_provision.setFormula_id(Integer.parseInt(request.getParameter("formula_id_CASH_SURR")));
		
								if (check_CV_Claim.equals("true")) {
									nonforf_provision.setIs_claim_deduct(true);
								}else {
									nonforf_provision.setIs_claim_deduct(false);
								}
								nonforf_provision.setPeriod_calc_meth("NONE");
								nonforf_provision.setPeriod_unit("NONE");
								nonforf_provision.setUser_code(userId);
								nonforf_provision.setUpdate_time(PDFFnc.currentTimeStamp());
								arr_Nonforf.add(nonforf_provision);
								break;
							}else {
								Nonforf_provision nonforf_provision = new Nonforf_provision();
								nonforf_provision.setCov_code(passInsurance);
								nonforf_provision.setNonforf_prov("CASH_SURR");
								nonforf_provision.setIs_default(true);
								
								//CV_Claim
								String str_CV_Claim  = request.getParameter("CV_Claim");
								if (str_CV_Claim.equals("true")) {
									nonforf_provision.setIs_claim_deduct(true);
								}else {
									nonforf_provision.setIs_claim_deduct(false);
								} 
								
								nonforf_provision.setFormula_id(Integer.parseInt(request.getParameter("formula_id_CASH_SURR")));
		
								if (check_CV_Claim.equals("true")) {
									nonforf_provision.setIs_claim_deduct(true);
								}else {
									nonforf_provision.setIs_claim_deduct(false);
								}
								nonforf_provision.setPeriod_calc_meth("NONE");
								nonforf_provision.setPeriod_unit("NONE");
								nonforf_provision.setUser_code(userId);
								nonforf_provision.setUpdate_time(PDFFnc.currentTimeStamp());
								arr_Nonforf.add(nonforf_provision);
								break;
							}
				    	}
					}
					//APL
					if (check_APL_AUTO.equals("true")) {
				    	for (int i = 0; i < arr_Product.size(); i++) {
							if (arr_Product.get(i).getNonforf_prov().equals("APL")) {
								Nonforf_provision nonforf_provision = arr_Product.get(i);
								nonforf_provision.setCov_code(passInsurance);
								nonforf_provision.setNonforf_prov("APL");
								nonforf_provision.setIs_default(true);
								
								if (!str_txb_APL_AUTO.equals("")) {
									nonforf_provision.setInterest_rate(covertStringtoBigDecimal(str_txb_APL_AUTO));
								}
								nonforf_provision.setPeriod_calc_meth("NONE");
								nonforf_provision.setPeriod_unit("NONE");
								nonforf_provision.setUser_code(userId);
								nonforf_provision.setUpdate_time(PDFFnc.currentTimeStamp());
								arr_Nonforf.add(nonforf_provision);
								break;
							}else {
								Nonforf_provision nonforf_provision = new Nonforf_provision();
								nonforf_provision.setCov_code(passInsurance);
								nonforf_provision.setNonforf_prov("APL");
								nonforf_provision.setIs_default(true);
								
								if (!str_txb_APL_AUTO.equals("")) {
									nonforf_provision.setInterest_rate(covertStringtoBigDecimal(str_txb_APL_AUTO));
								}
								nonforf_provision.setPeriod_calc_meth("NONE");
								nonforf_provision.setPeriod_unit("NONE");
								nonforf_provision.setUser_code(userId);
								nonforf_provision.setUpdate_time(PDFFnc.currentTimeStamp());
								arr_Nonforf.add(nonforf_provision);
								break;
							}
				    	}
					}
					//ETI
					if (check_ETI.equals("true")) {
				    	for (int i = 0; i < arr_Product.size(); i++) {
							if (arr_Product.get(i).getNonforf_prov().equals("ETI")) {
								Nonforf_provision nonforf_provision = arr_Product.get(i);
								nonforf_provision.setCov_code(passInsurance);
								nonforf_provision.setNonforf_prov("ETI");
								nonforf_provision.setIs_default(true);
								nonforf_provision.setFormula_id(Integer.parseInt(request.getParameter("formula_id_ETI")));
								//ETI_TO
								if (check_ETI_TO.equals("true")) {
									nonforf_provision.setPeriod_calc_meth(request.getParameter("period_calc_meth_ETI"));
									
									String benefit_period_ETI 	 = request.getParameter("benefit_period_ETI");
									if (!benefit_period_ETI.equals("")) {
										nonforf_provision.setBenefit_period(Integer.parseInt(benefit_period_ETI));
									}
									
									String period_unit_ETI  = request.getParameter("period_unit_ETI");
									nonforf_provision.setPeriod_unit(period_unit_ETI);
								}else {
									nonforf_provision.setPeriod_calc_meth("NONE");
									nonforf_provision.setPeriod_unit("NONE");
								}
								
								nonforf_provision.setUser_code(userId);
								nonforf_provision.setUpdate_time(PDFFnc.currentTimeStamp());
								arr_Nonforf.add(nonforf_provision);
								break;
							}else {
								Nonforf_provision nonforf_provision = new Nonforf_provision();
								nonforf_provision.setCov_code(passInsurance);
								nonforf_provision.setNonforf_prov("ETI");
								nonforf_provision.setIs_default(true);
								nonforf_provision.setFormula_id(Integer.parseInt(request.getParameter("formula_id_ETI")));
								//ETI_TO
								if (check_ETI_TO.equals("true")) {
									nonforf_provision.setPeriod_calc_meth(request.getParameter("period_calc_meth_ETI"));
									
									String benefit_period_ETI 	 = request.getParameter("benefit_period_ETI");
									if (!benefit_period_ETI.equals("")) {
										nonforf_provision.setBenefit_period(Integer.parseInt(benefit_period_ETI));
									}
									
									String period_unit_ETI  = request.getParameter("period_unit_ETI");
									nonforf_provision.setPeriod_unit(period_unit_ETI);
								}else {
									nonforf_provision.setPeriod_calc_meth("NONE");
									nonforf_provision.setPeriod_unit("NONE");
								}
								
								nonforf_provision.setUser_code(userId);
								nonforf_provision.setUpdate_time(PDFFnc.currentTimeStamp());
								arr_Nonforf.add(nonforf_provision);
								break;
							}
				    	}
					}
					//AUTO ETI
					if (check_AUTO_ETI.equals("true")) {
				    	for (int i = 0; i < arr_Product.size(); i++) {
							if (arr_Product.get(i).getNonforf_prov().equals("AUTO_ETI")) {
								Nonforf_provision nonforf_provision = arr_Product.get(i);
								nonforf_provision.setCov_code(passInsurance);
								nonforf_provision.setNonforf_prov("AUTO_ETI");
								nonforf_provision.setIs_default(true);
								nonforf_provision.setFormula_id(Integer.parseInt(request.getParameter("formula_id_AUTO_ETI")));
		
								//ETI_TO
								if (check_ETI_TO.equals("true")) {
									nonforf_provision.setPeriod_calc_meth(request.getParameter("period_calc_meth_ETI"));
									
									String benefit_period_ETI 	 = request.getParameter("benefit_period_ETI");
									if (!benefit_period_ETI.equals("")) {
										nonforf_provision.setBenefit_period(Integer.parseInt(benefit_period_ETI));
									}
									
									String period_unit_ETI  = request.getParameter("period_unit_ETI");
									nonforf_provision.setPeriod_unit(period_unit_ETI);
									
								}else {
									nonforf_provision.setPeriod_calc_meth("NONE");
									nonforf_provision.setPeriod_unit("NONE");
								}
								nonforf_provision.setUser_code(userId);
								nonforf_provision.setUpdate_time(PDFFnc.currentTimeStamp());
								arr_Nonforf.add(nonforf_provision);
								break;
							}else {
								Nonforf_provision nonforf_provision = new Nonforf_provision();
								nonforf_provision.setCov_code(passInsurance);
								nonforf_provision.setNonforf_prov("AUTO_ETI");
								nonforf_provision.setIs_default(true);
								nonforf_provision.setFormula_id(Integer.parseInt(request.getParameter("formula_id_AUTO_ETI")));
		
								//ETI_TO
								if (check_ETI_TO.equals("true")) {
									nonforf_provision.setPeriod_calc_meth(request.getParameter("period_calc_meth_ETI"));
									
									String benefit_period_ETI 	 = request.getParameter("benefit_period_ETI");
									if (!benefit_period_ETI.equals("")) {
										nonforf_provision.setBenefit_period(Integer.parseInt(benefit_period_ETI));
									}
									
									String period_unit_ETI  = request.getParameter("period_unit_ETI");
									nonforf_provision.setPeriod_unit(period_unit_ETI);
									
								}else {
									nonforf_provision.setPeriod_calc_meth("NONE");
									nonforf_provision.setPeriod_unit("NONE");
								}
								nonforf_provision.setUser_code(userId);
								nonforf_provision.setUpdate_time(PDFFnc.currentTimeStamp());
								arr_Nonforf.add(nonforf_provision);
								break;
							}	
				    	}
					}
					//RPU
					if (check_RPU.equals("true")) {
				    	for (int i = 0; i < arr_Product.size(); i++) {
							if (arr_Product.get(i).getNonforf_prov().equals("RPU")) {
								Nonforf_provision nonforf_provision = arr_Product.get(i);
								nonforf_provision.setCov_code(passInsurance);
								nonforf_provision.setNonforf_prov("RPU");
								nonforf_provision.setIs_default(true);
								nonforf_provision.setFormula_id(Integer.parseInt(request.getParameter("formula_id_RPU")));
		
								String check_is_debt_deduct_PRU			=  request.getParameter("is_debt_deduct_PRU");
								
								if (check_is_debt_deduct_PRU.equals("true")) {
									nonforf_provision.setIs_debt_deduct(true);
								}else {
									nonforf_provision.setIs_debt_deduct(false);
								}
								
								String check_rpu_sa_type			=  request.getParameter("rpu_sa_type"); 
								if (check_rpu_sa_type.equals("APPLY_SA")) {
									nonforf_provision.setRpu_sa_type("APPLY_SA");
								}else if (check_rpu_sa_type.equals("DEATH_BENEFIT ")) {
									nonforf_provision.setRpu_sa_type("DEATH_BENEFIT");
								}
								//PRU_TO 
								if (check_PRU_TO.equals("true")) {
									nonforf_provision.setPeriod_calc_meth(request.getParameter("period_calc_meth_RPU"));
									
									String benefit_period_ETI 	 = request.getParameter("benefit_period_RPU");
									if (!benefit_period_ETI.equals("")) {
										nonforf_provision.setBenefit_period(Integer.parseInt(benefit_period_ETI));
									}
									
									String period_unit_ETI  = request.getParameter("period_unit_RPU");
									nonforf_provision.setPeriod_unit(period_unit_ETI);
								}else {
									nonforf_provision.setPeriod_calc_meth("NONE");
									nonforf_provision.setPeriod_unit("NONE");
								}
								nonforf_provision.setUser_code(userId);
								nonforf_provision.setUpdate_time(PDFFnc.currentTimeStamp());
								arr_Nonforf.add(nonforf_provision);
								break;
							}else {
								Nonforf_provision nonforf_provision = new Nonforf_provision();
								nonforf_provision.setCov_code(passInsurance);
								nonforf_provision.setNonforf_prov("RPU");
								nonforf_provision.setIs_default(true);
								nonforf_provision.setFormula_id(Integer.parseInt(request.getParameter("formula_id_RPU")));
		
								String check_is_debt_deduct_PRU			=  request.getParameter("is_debt_deduct_PRU");
								
								if (check_is_debt_deduct_PRU.equals("true")) {
									nonforf_provision.setIs_debt_deduct(true);
								}else {
									nonforf_provision.setIs_debt_deduct(false);
								}
								
								String check_rpu_sa_type			=  request.getParameter("rpu_sa_type"); 
								if (check_rpu_sa_type.equals("APPLY_SA")) {
									nonforf_provision.setRpu_sa_type("APPLY_SA");
								}else if (check_rpu_sa_type.equals("DEATH_BENEFIT ")) {
									nonforf_provision.setRpu_sa_type("DEATH_BENEFIT");
								}
								//PRU_TO 
								if (check_PRU_TO.equals("true")) {
									nonforf_provision.setPeriod_calc_meth(request.getParameter("period_calc_meth_RPU"));
									
									String benefit_period_ETI 	 = request.getParameter("benefit_period_RPU");
									if (!benefit_period_ETI.equals("")) {
										nonforf_provision.setBenefit_period(Integer.parseInt(benefit_period_ETI));
									}
									
									String period_unit_ETI  = request.getParameter("period_unit_RPU");
									nonforf_provision.setPeriod_unit(period_unit_ETI);
								}else {
									nonforf_provision.setPeriod_calc_meth("NONE");
									nonforf_provision.setPeriod_unit("NONE");
								}
								nonforf_provision.setUser_code(userId);
								nonforf_provision.setUpdate_time(PDFFnc.currentTimeStamp());
								arr_Nonforf.add(nonforf_provision);
								break;
							}
				    	}
					}
					//AUTO_RPU
					if (check_AUTO_RPU.equals("true")) {
				    	for (int i = 0; i < arr_Product.size(); i++) {
							if (arr_Product.get(i).getNonforf_prov().equals("AUTO_RPU")) {
								Nonforf_provision nonforf_provision = arr_Product.get(i);
								nonforf_provision.setCov_code(passInsurance);
								nonforf_provision.setNonforf_prov("AUTO_RPU");
								nonforf_provision.setIs_default(true);
								nonforf_provision.setFormula_id(Integer.parseInt(request.getParameter("formula_id_AUTO_RPU")));
		
								String check_is_debt_deduct_AUTO_PRU			=  request.getParameter("is_debt_deduct_AUTO_PRU");
								
								if (check_is_debt_deduct_AUTO_PRU.equals("true")) {
									nonforf_provision.setIs_debt_deduct(true);
								}else {
									nonforf_provision.setIs_debt_deduct(false);
								}
								
								String check_rpu_sa_type			=  request.getParameter("rpu_sa_type"); 
								if (check_rpu_sa_type.equals("APPLY_SA")) {
									nonforf_provision.setRpu_sa_type("APPLY_SA");
								}else if (check_rpu_sa_type.equals("DEATH_BENEFIT")) {
									nonforf_provision.setRpu_sa_type("DEATH_BENEFIT");
								}
								//PRU_TO
								if (check_PRU_TO.equals("true")) {
									nonforf_provision.setPeriod_calc_meth(request.getParameter("period_calc_meth_RPU"));
									
									String benefit_period_ETI 	 = request.getParameter("benefit_period_RPU");
									if (!benefit_period_ETI.equals("")) {
										nonforf_provision.setBenefit_period(Integer.parseInt(benefit_period_ETI));
									}
									
									String period_unit_ETI  = request.getParameter("period_unit_RPU");
									nonforf_provision.setPeriod_unit(period_unit_ETI);
								}else {
									nonforf_provision.setPeriod_calc_meth("NONE");
									nonforf_provision.setPeriod_unit("NONE");
								}
								nonforf_provision.setUser_code(userId);
								nonforf_provision.setUpdate_time(PDFFnc.currentTimeStamp());
								arr_Nonforf.add(nonforf_provision);
								break;
							}else {
	
								Nonforf_provision nonforf_provision = new Nonforf_provision ();
								nonforf_provision.setCov_code(passInsurance);
								nonforf_provision.setNonforf_prov("AUTO_RPU");
								nonforf_provision.setIs_default(true);
								nonforf_provision.setFormula_id(Integer.parseInt(request.getParameter("formula_id_AUTO_RPU")));
		
								String check_is_debt_deduct_AUTO_PRU			=  request.getParameter("is_debt_deduct_AUTO_PRU");
								
								if (check_is_debt_deduct_AUTO_PRU.equals("true")) {
									nonforf_provision.setIs_debt_deduct(true);
								}else {
									nonforf_provision.setIs_debt_deduct(false);
								}
								
								String check_rpu_sa_type			=  request.getParameter("rpu_sa_type"); 
								if (check_rpu_sa_type.equals("APPLY_SA")) {
									nonforf_provision.setRpu_sa_type("APPLY_SA");
								}else if (check_rpu_sa_type.equals("DEATH_BENEFIT")) {
									nonforf_provision.setRpu_sa_type("DEATH_BENEFIT");
								}
								//PRU_TO
								if (check_PRU_TO.equals("true")) {
									nonforf_provision.setPeriod_calc_meth(request.getParameter("period_calc_meth_RPU"));
									
									String benefit_period_ETI 	 = request.getParameter("benefit_period_RPU");
									if (!benefit_period_ETI.equals("")) {
										nonforf_provision.setBenefit_period(Integer.parseInt(benefit_period_ETI));
									}
									
									String period_unit_ETI  = request.getParameter("period_unit_RPU");
									nonforf_provision.setPeriod_unit(period_unit_ETI);
								}else {
									nonforf_provision.setPeriod_calc_meth("NONE");
									nonforf_provision.setPeriod_unit("NONE");
								}
								nonforf_provision.setUser_code(userId);
								nonforf_provision.setUpdate_time(PDFFnc.currentTimeStamp());
								arr_Nonforf.add(nonforf_provision);
								break;
							}
				    	}
					}
				
		    }else {
		    	//POLICY_LOAN
				if (check_POLICY_LOAN.equals("true")) {
					Nonforf_provision nonforf_provision = new Nonforf_provision();
					nonforf_provision.setCov_code(passInsurance);
					nonforf_provision.setNonforf_prov("POLICY_LOAN");
					if (!str_str_txb_Policy_Loan.equals("")) {
						nonforf_provision.setInterest_rate(covertStringtoBigDecimal(str_str_txb_Policy_Loan));
					}
					nonforf_provision.setIs_default(true);
					nonforf_provision.setPeriod_calc_meth("NONE");
					nonforf_provision.setPeriod_unit("NONE");
					nonforf_provision.setUser_code(userId);
					nonforf_provision.setUpdate_time(PDFFnc.currentTimeStamp());
					arr_Nonforf.add(nonforf_provision);
				}
				//CASH_SURR
				if (check_CASH_SURR.equals("true")) {
					Nonforf_provision nonforf_provision = new Nonforf_provision();
					nonforf_provision.setCov_code(passInsurance);
					nonforf_provision.setNonforf_prov("CASH_SURR");
					nonforf_provision.setIs_default(true);
					
					//CV_Claim
					String str_CV_Claim  = request.getParameter("CV_Claim");
					if (str_CV_Claim.equals("true")) {
						nonforf_provision.setIs_claim_deduct(true);
					}else {
						nonforf_provision.setIs_claim_deduct(false);
					} 
					
					nonforf_provision.setFormula_id(Integer.parseInt(request.getParameter("formula_id_CASH_SURR")));

					if (check_CV_Claim.equals("true")) {
						nonforf_provision.setIs_claim_deduct(true);
					}else {
						nonforf_provision.setIs_claim_deduct(false);
					}
					nonforf_provision.setPeriod_calc_meth("NONE");
					nonforf_provision.setPeriod_unit("NONE");
					nonforf_provision.setUser_code(userId);
					nonforf_provision.setUpdate_time(PDFFnc.currentTimeStamp());
					arr_Nonforf.add(nonforf_provision);
				}
				//APL
				if (check_APL_AUTO.equals("true")) {
					Nonforf_provision nonforf_provision = new Nonforf_provision();
					nonforf_provision.setCov_code(passInsurance);
					nonforf_provision.setNonforf_prov("APL");
					nonforf_provision.setIs_default(true);
					
					if (!str_txb_APL_AUTO.equals("")) {
						nonforf_provision.setInterest_rate(covertStringtoBigDecimal(str_txb_APL_AUTO));
					}
					nonforf_provision.setPeriod_calc_meth("NONE");
					nonforf_provision.setPeriod_unit("NONE");
					nonforf_provision.setUser_code(userId);
					nonforf_provision.setUpdate_time(PDFFnc.currentTimeStamp());
					arr_Nonforf.add(nonforf_provision);
				}
				//ETI
				if (check_ETI.equals("true")) {
					Nonforf_provision nonforf_provision = new Nonforf_provision();
					nonforf_provision.setCov_code(passInsurance);
					nonforf_provision.setNonforf_prov("ETI");
					nonforf_provision.setIs_default(true);
					nonforf_provision.setFormula_id(Integer.parseInt(request.getParameter("formula_id_ETI")));
					//ETI_TO
					if (check_ETI_TO.equals("true")) {
						nonforf_provision.setPeriod_calc_meth(request.getParameter("period_calc_meth_ETI"));
						
						String benefit_period_ETI 	 = request.getParameter("benefit_period_ETI");
						if (!benefit_period_ETI.equals("")) {
							nonforf_provision.setBenefit_period(Integer.parseInt(benefit_period_ETI));
						}
						
						String period_unit_ETI  = request.getParameter("period_unit_ETI");
						nonforf_provision.setPeriod_unit(period_unit_ETI);
					}else {
						nonforf_provision.setPeriod_calc_meth("NONE");
						nonforf_provision.setPeriod_unit("NONE");
					}
					
					nonforf_provision.setUser_code(userId);
					nonforf_provision.setUpdate_time(PDFFnc.currentTimeStamp());
					arr_Nonforf.add(nonforf_provision);
				}
				//AUTO ETI
				if (check_AUTO_ETI.equals("true")) {
					Nonforf_provision nonforf_provision = new Nonforf_provision();
					nonforf_provision.setCov_code(passInsurance);
					nonforf_provision.setNonforf_prov("AUTO_ETI");
					nonforf_provision.setIs_default(true);
					nonforf_provision.setFormula_id(Integer.parseInt(request.getParameter("formula_id_AUTO_ETI")));

					//ETI_TO
					if (check_ETI_TO.equals("true")) {
						nonforf_provision.setPeriod_calc_meth(request.getParameter("period_calc_meth_ETI"));
						
						String benefit_period_ETI 	 = request.getParameter("benefit_period_ETI");
						if (!benefit_period_ETI.equals("")) {
							nonforf_provision.setBenefit_period(Integer.parseInt(benefit_period_ETI));
						}
						
						String period_unit_ETI  = request.getParameter("period_unit_ETI");
						nonforf_provision.setPeriod_unit(period_unit_ETI);
						
					}else {
						nonforf_provision.setPeriod_calc_meth("NONE");
						nonforf_provision.setPeriod_unit("NONE");
					}
					nonforf_provision.setUser_code(userId);
					nonforf_provision.setUpdate_time(PDFFnc.currentTimeStamp());
					arr_Nonforf.add(nonforf_provision);
				}
				//RPU
				if (check_RPU.equals("true")) {
					Nonforf_provision nonforf_provision = new Nonforf_provision();
					nonforf_provision.setCov_code(passInsurance);
					nonforf_provision.setNonforf_prov("RPU");
					nonforf_provision.setIs_default(true);
					nonforf_provision.setFormula_id(Integer.parseInt(request.getParameter("formula_id_RPU")));

					String check_is_debt_deduct_PRU			=  request.getParameter("is_debt_deduct_PRU");
					
					if (check_is_debt_deduct_PRU.equals("true")) {
						nonforf_provision.setIs_debt_deduct(true);
					}else {
						nonforf_provision.setIs_debt_deduct(false);
					}
					
					String check_rpu_sa_type			=  request.getParameter("rpu_sa_type"); 
					if (check_rpu_sa_type.equals("APPLY_SA")) {
						nonforf_provision.setRpu_sa_type("APPLY_SA");
					}else if (check_rpu_sa_type.equals("DEATH_BENEFIT ")) {
						nonforf_provision.setRpu_sa_type("DEATH_BENEFIT");
					}
					//PRU_TO 
					if (check_PRU_TO.equals("true")) {
						nonforf_provision.setPeriod_calc_meth(request.getParameter("period_calc_meth_RPU"));
						
						String benefit_period_ETI 	 = request.getParameter("benefit_period_RPU");
						if (!benefit_period_ETI.equals("")) {
							nonforf_provision.setBenefit_period(Integer.parseInt(benefit_period_ETI));
						}
						
						String period_unit_ETI  = request.getParameter("period_unit_RPU");
						nonforf_provision.setPeriod_unit(period_unit_ETI);
					}else {
						nonforf_provision.setPeriod_calc_meth("NONE");
						nonforf_provision.setPeriod_unit("NONE");
					}
					nonforf_provision.setUser_code(userId);
					nonforf_provision.setUpdate_time(PDFFnc.currentTimeStamp());
					arr_Nonforf.add(nonforf_provision);
				}
				//AUTO_RPU
				if (check_AUTO_RPU.equals("true")) {
					Nonforf_provision nonforf_provision = new Nonforf_provision();
					nonforf_provision.setCov_code(passInsurance);
					nonforf_provision.setNonforf_prov("AUTO_RPU");
					nonforf_provision.setIs_default(true);
					nonforf_provision.setFormula_id(Integer.parseInt(request.getParameter("formula_id_AUTO_RPU")));

					String check_is_debt_deduct_AUTO_PRU			=  request.getParameter("is_debt_deduct_AUTO_PRU");
					
					if (check_is_debt_deduct_AUTO_PRU.equals("true")) {
						nonforf_provision.setIs_debt_deduct(true);
					}else {
						nonforf_provision.setIs_debt_deduct(false);
					}
					
					String check_rpu_sa_type			=  request.getParameter("rpu_sa_type"); 
					if (check_rpu_sa_type.equals("APPLY_SA")) {
						nonforf_provision.setRpu_sa_type("APPLY_SA");
					}else if (check_rpu_sa_type.equals("DEATH_BENEFIT")) {
						nonforf_provision.setRpu_sa_type("DEATH_BENEFIT");
					}
					//PRU_TO
					if (check_PRU_TO.equals("true")) {
						nonforf_provision.setPeriod_calc_meth(request.getParameter("period_calc_meth_RPU"));
						
						String benefit_period_ETI 	 = request.getParameter("benefit_period_RPU");
						if (!benefit_period_ETI.equals("")) {
							nonforf_provision.setBenefit_period(Integer.parseInt(benefit_period_ETI));
						}
						
						String period_unit_ETI  = request.getParameter("period_unit_RPU");
						nonforf_provision.setPeriod_unit(period_unit_ETI);
					}else {
						nonforf_provision.setPeriod_calc_meth("NONE");
						nonforf_provision.setPeriod_unit("NONE");
					}
					nonforf_provision.setUser_code(userId);
					nonforf_provision.setUpdate_time(PDFFnc.currentTimeStamp());
					arr_Nonforf.add(nonforf_provision);
				}
		    }
			new BasePlanGrantRightsInsure().doNonforfProvisionOLData(arr_Nonforf);
			//set Status //*Benz 30-08-2019
			CoverageData cd 		= new CoverageData();
			Coverage setCoverage 	=	cd.searchCoverage(passInsurance);
			setCoverage.setStatus("UPDATE");
			setCoverage.setUser_code(userId);
			setCoverage.setUpdate_time(getCurrentTimestamp());
			BasicInfoDataTab basicInfo = new BasicInfoDataTab();
			basicInfo.doCoverage(setCoverage);
		////Benz 11-09-2019 New set Status
			WorkFlowCoverage wfc = new WorkFlowCoverage();
			ArrayList<Coverage_task> arr_getCoverage_task = wfc.searchCoverageTask();
			Coverage_task  setcovtask = new Coverage_task();
			for (int i = 0; i < arr_getCoverage_task.size(); i++) {
				if ((arr_getCoverage_task.get(i).getDepartment().equals("PD") || 
						arr_getCoverage_task.get(i).getDepartment().equals("PD_Test") || 
						arr_getCoverage_task.get(i).getDepartment().equals("PD2")) && !arr_getCoverage_task.get(i).getApprove_status().equals("APPROVE")) {
					setcovtask =   arr_getCoverage_task.get(i);
					setcovtask.setCov_code(passInsurance);
					setcovtask.setDepartment(ConstantValues.GROUP_NAME);
					setcovtask.setApprove_status("UPDATE");
					setcovtask.setUser_code(userId);
					setcovtask.setUpdate_time(PDFFnc.currentTimeStamp());
					wfc.doCoverageTask(setcovtask);
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null; 
	}
	public String save_cal_insurance_premiums(HttpServletRequest request, HttpServletResponse response) throws Exception 
	{
		try {
			String groupName 			= request.getParameter("groupName");
			ConstantValues.GROUP_NAME 	= groupName;
			
			BasePlan_SaveData_Service_OL settoService = new BasePlan_SaveData_Service_OL ();
			String passInsurance = request.getParameter("passInsurance");
			
			Coverage coverage = new Coverage();
			
	        //table_insurance_premium
	        String table_insurance_premium	= request.getParameter("table_insurance_premium");
	        JSONArray jsonArr_table_insurance_premium = new JSONArray(table_insurance_premium);
	        ArrayList<Rate_layout> lsRate_layouts_stardard = new ArrayList<>();
	        for (int i = 0; i < jsonArr_table_insurance_premium.length(); i++)
	        {
	        		Rate_layout rate_layout = new Rate_layout();
		        	JSONObject jsonObj_table_insurance_premium = jsonArr_table_insurance_premium.getJSONObject(i);
		        	rate_layout.setCov_code(passInsurance);
		        	rate_layout.setRate_cat_id(jsonObj_table_insurance_premium.getInt("rate_cat_id"));
		        	rate_layout.setAge_band_code(jsonObj_table_insurance_premium.getString("age_band_code"));
		        	if (jsonObj_table_insurance_premium.get("rate_layout_id").toString().equals("")) {
			        	rate_layout.setRate_layout_id(0);
		        	}else {
			        	rate_layout.setRate_layout_id(Integer.parseInt(jsonObj_table_insurance_premium.get("rate_layout_id").toString()));
		        	}
		        	
		        	if (jsonObj_table_insurance_premium.get("file_id").toString().equals("")) {
			        	rate_layout.setFile_id(0);
		        	}else {
			        	rate_layout.setFile_id(Integer.parseInt(jsonObj_table_insurance_premium.get("file_id").toString()));
		        	}
		        	
		        	
		        	// FIX VALUE
		        	rate_layout.setUser_code(userId);
		        	rate_layout.setUpdate_time(getCurrentTimestamp());
		        	///New
		        	rate_layout.setSub_code(jsonObj_table_insurance_premium.getString("rate_type"));
		        	lsRate_layouts_stardard.add(rate_layout);
	        }
	        if (request.getParameter("prem_calc_meth").equals("SA_ONLY")) {
	        	 settoService.setRate_layout_Standard(new ArrayList<Rate_layout>());
		        settoService.setCal_Insurance_Premium(lsRate_layouts_stardard);
	        }else if (request.getParameter("prem_calc_meth").equals("PREM_ONLY")){
		        settoService.setRate_layout_Standard(lsRate_layouts_stardard);
		        settoService.setCal_Insurance_Premium(new ArrayList<Rate_layout>());
	        }else if (request.getParameter("prem_calc_meth").equals("EITHER")) {
	        	 settoService.setRate_layout_Standard(new ArrayList<Rate_layout>());
			      settoService.setCal_Insurance_Premium(lsRate_layouts_stardard);
	        }else {
	        	settoService.setRate_layout_Standard(new ArrayList<Rate_layout>());
		        settoService.setCal_Insurance_Premium(new ArrayList<Rate_layout>());
	        }   
	        
	        Boolean is_substd = Boolean.valueOf(request.getParameter("is_substd"));
	        if (is_substd == true) {
	        	//table_extra_Rate
	        	coverage.setIs_substd(is_substd);
		        String table_extra_Rate	= request.getParameter("table_extra_Rate");
		        JSONArray jsonArr_table_extra_Rate = new JSONArray(table_extra_Rate);
		        ArrayList<Rate_layout> lsRate_layouts_special = new ArrayList<>();
		        for (int i = 0; i < jsonArr_table_extra_Rate.length(); i++)
		        {
		        	 JSONObject jsonObj_select_extra_Rate = jsonArr_table_extra_Rate.getJSONObject(i);
		        	 Rate_layout rate_layout = new Rate_layout();
			        	rate_layout.setCov_code(passInsurance);
			        	rate_layout.setRate_cat_id(jsonObj_select_extra_Rate.getInt("rate_cat_id"));
			        	rate_layout.setAge_band_code(jsonObj_select_extra_Rate.getString("age_band_code"));
			        	rate_layout.setRate_layout_id(jsonObj_select_extra_Rate.getInt("rate_layout_id"));
			        	rate_layout.setFile_id(jsonObj_select_extra_Rate.getInt("file_id"));
			        	
			        	// FIX VALUE
			        	rate_layout.setUser_code(userId);
			        	rate_layout.setUpdate_time(getCurrentTimestamp());
			        	///New
			        	rate_layout.setSub_code(jsonObj_select_extra_Rate.getString("rate_type"));
			        	lsRate_layouts_special.add(rate_layout);
		        }
		        settoService.setRate_layout_Special(lsRate_layouts_special);
		      //EM_file
		        String EM_file	= request.getParameter("EM_file");
		        JSONArray jsonArr_EMFile = new JSONArray(EM_file);
		        ArrayList<Rate_layout> lsRate_layouts_EMFile = new ArrayList<>();
		        for (int i = 0; i < jsonArr_EMFile.length(); i++)
		        {
			        	 JSONObject jsonObj_EMFile = jsonArr_EMFile.getJSONObject(i);
			        	 Rate_layout rate_layout = new Rate_layout();
				        	rate_layout.setCov_code(passInsurance);
				        	rate_layout.setRate_cat_id(jsonObj_EMFile.getInt("rate_cat_id"));
				        	rate_layout.setAge_band_code(jsonObj_EMFile.getString("age_band_code"));
				        	rate_layout.setRate_layout_id(jsonObj_EMFile.getInt("rate_layout_id"));
				        	rate_layout.setFile_id(jsonObj_EMFile.getInt("file_id"));
				        	
				        	// FIX VALUE
				        	rate_layout.setUser_code(userId);
				        	rate_layout.setUpdate_time(getCurrentTimestamp());
				        	///New
				        	rate_layout.setSub_code(jsonObj_EMFile.getString("rate_type"));
				        	lsRate_layouts_EMFile.add(rate_layout);
		        }
		        settoService.setRate_layout_BetweenAge(lsRate_layouts_EMFile);
		        
	        	 //min_EM
		        String min_EM	= request.getParameter("min_EM");
		        //max_EM
		        String max_EM	= request.getParameter("max_EM");
		        if (!min_EM.equals("0") && !max_EM.equals("0")) {
		        	coverage.setMin_em(covertStringtoBigDecimal(min_EM));
		  	        coverage.setMax_em(covertStringtoBigDecimal(max_EM));
		        }else {
		        	coverage.setMin_em(covertStringtoBigDecimal(min_EM));
		  	        coverage.setMax_em(covertStringtoBigDecimal(max_EM));
		        }
	        }else {
	        	coverage.setIs_substd(is_substd);
	        	coverage.setMin_em(covertStringtoBigDecimal("0"));
	  	        coverage.setMax_em(covertStringtoBigDecimal("0"));	
	  	      settoService.setRate_layout_Special(new ArrayList<Rate_layout>());
	  	      settoService.setRate_layout_BetweenAge(new ArrayList<Rate_layout>());
	        }
	        
	      //ส่วนลดเบี้ยประกัน
			String discount_prem = request.getParameter("prem_dis");
		  	JSONArray jsonArr_discountPrem = new JSONArray(discount_prem);
		  	JSONObject jsonObj_discountPrem = jsonArr_discountPrem.getJSONObject(0);
		  	Boolean is_prem = (Boolean) jsonObj_discountPrem.get("is_prem_dis");
		  	String min_prem_dis = jsonObj_discountPrem.get("min_prem_dis_rate").toString();
			//String d = Double.parseDouble(min_prem_dis); // re
			//System.out.println("=====================/"+d);
		  	String max_prem_dis = jsonObj_discountPrem.get("max_prem_dis_rate").toString();
	        
	        //table_capital_decrease
		  	 Boolean is_sa_decr = Boolean.valueOf(request.getParameter("is_sa_decr"));
		    if (is_sa_decr == true) {
		    	coverage.setIs_sa_decr(is_sa_decr);
		        String table_capital_decrease	= request.getParameter("table_capital_decrease");
		        JSONArray jsonArr_capitalDecrease = new JSONArray(table_capital_decrease);
		        ArrayList<Rate_layout> lsRate_layouts_capitalDecrease = new ArrayList<>();
		        for (int i = 0; i < jsonArr_capitalDecrease.length(); i++)
		        {
			        	 JSONObject jsonObj_capitalDecrease = jsonArr_capitalDecrease.getJSONObject(i);
			        	 Rate_layout rate_layout = new Rate_layout();
				        	rate_layout.setCov_code(passInsurance);
				        	rate_layout.setRate_cat_id(jsonObj_capitalDecrease.getInt("rate_cat_id"));
				        	rate_layout.setAge_band_code(jsonObj_capitalDecrease.getString("age_band_code"));
				        	if(!jsonObj_capitalDecrease.get("rate_layout_id").equals("")) {
				        		rate_layout.setRate_layout_id(jsonObj_capitalDecrease.getInt("rate_layout_id"));
				        	}
				        	if(!jsonObj_capitalDecrease.get("file_id").equals("")) {
				        		rate_layout.setFile_id(jsonObj_capitalDecrease.getInt("file_id"));
				        	}
				        	
				        	
				        	// FIX VALUE
				        	rate_layout.setUser_code(userId);
				        	rate_layout.setUpdate_time(getCurrentTimestamp());
				        	///New
				        	rate_layout.setSub_code(jsonObj_capitalDecrease.getString("rate_type"));
				        	lsRate_layouts_capitalDecrease.add(rate_layout);
		        }
	        settoService.setRate_layout_CapitalDecrease(lsRate_layouts_capitalDecrease);
		    }else {
		    	coverage.setIs_sa_decr(is_sa_decr);
		    	settoService.setRate_layout_CapitalDecrease(new ArrayList<Rate_layout>());
		    }
	        coverage.setCov_code(passInsurance);
	        coverage.setIs_prem_disc(is_prem);
	      
	        coverage.setMin_prem_disc_rate(covertStringtoBigDecimal(min_prem_dis));
	     
	        coverage.setMax_prem_disc_rate(covertStringtoBigDecimal(max_prem_dis));
	       
	        if (!request.getParameter("prem_calc_meth").toString().equals("")) {
	        	 coverage.setPrem_calc_meth(request.getParameter("prem_calc_meth").toString());
	        }else {
	        	 coverage.setPrem_calc_meth("NONE");
	        }
	        if (!request.getParameter("per_policy_prem").toString().equals("")) {
		        coverage.setPer_policy_prem(covertStringtoBigDecimal(request.getParameter("per_policy_prem").toString()));
	        }
	        // Service 
	        coverage.setStatus("UPDATE");
	        coverage.setUser_code(userId);
	        coverage.setUpdate_time(getCurrentTimestamp());
	        settoService.setCoverage_premiumCal_OL(coverage);
	        
	        ////Benz 11-09-2019 New set Status
	        WorkFlowCoverage wfc = new WorkFlowCoverage();
			ArrayList<Coverage_task> arr_getCoverage_task = wfc.searchCoverageTask();
			Coverage_task  setcovtask = new Coverage_task();
			for (int i = 0; i < arr_getCoverage_task.size(); i++) {
				if ((arr_getCoverage_task.get(i).getDepartment().equals("PD") || 
						arr_getCoverage_task.get(i).getDepartment().equals("PD_Test") || 
						arr_getCoverage_task.get(i).getDepartment().equals("PD2")) && !arr_getCoverage_task.get(i).getApprove_status().equals("APPROVE")) {
					setcovtask =   arr_getCoverage_task.get(i);
					setcovtask.setCov_code(passInsurance);
					setcovtask.setDepartment(ConstantValues.GROUP_NAME);
					setcovtask.setApprove_status("UPDATE");
					setcovtask.setUser_code(userId);
					setcovtask.setUpdate_time(PDFFnc.currentTimeStamp());
					wfc.doCoverageTask(setcovtask);
				}
			}
			
	      ////////////////////////////////////////////////////////////////////////////////// 
	        if (!request.getParameter("prem_calc_meth").equals("SA_ONLY")) {
	        	String is_standard_risk	= request.getParameter("is_standard_risk");
				boolean bl_is_standard_risk = Boolean.parseBoolean(is_standard_risk);
		        FreezePolicyValue fpv = new FreezePolicyValue();
		        JSONArray jsonArr_standard_risk = new JSONArray();
		        
		        jsonArr_standard_risk = FreezePolicyValue.policy_value;
		        ArrayList<Rate_layout> lstRateLayout_standard_risk = new ArrayList<>();
		        BasePlan_SaveData_Service_OL bss = new BasePlan_SaveData_Service_OL();
				 if (jsonArr_standard_risk.length() != 0) {
				        for (int i = 0; i < jsonArr_standard_risk.length(); i++)
				        {			
				        		//select
					        	 JSONObject jsonObj_standard_risk = jsonArr_standard_risk.getJSONObject(i);
					        	//table
					          			Rate_layout rate_layout = new Rate_layout();
					          			rate_layout.setCov_code(passInsurance);
					        	        rate_layout.setRate_cat_id(Integer.parseInt(jsonObj_standard_risk.getString("pass")));
					        	        rate_layout.setRate_layout_id(Integer.parseInt(jsonObj_standard_risk.getString("layout")));
					        	        rate_layout.setFile_id(Integer.parseInt(jsonObj_standard_risk.getString("fileID")));
					          			rate_layout.setAge_band_code(jsonObj_standard_risk.getString("type"));
					        	        rate_layout.setUpdate_time(getCurrentTimestamp());
					        	        rate_layout.setUser_code(userId);
					        	        //New
					        	        rate_layout.setSub_code(jsonObj_standard_risk.getString("sub_code"));
					        	        lstRateLayout_standard_risk.add(rate_layout);
				        }
				 }
				 if (bl_is_standard_risk == true) {
					bss.setRate_layout_standard_risk(new ArrayList<Rate_layout>());
				}else {

					bss.setRate_layout_standard_risk(lstRateLayout_standard_risk);
				} 
	        }
	        //////////////////////Benz05-08-2019 ///////////////////////
			 String table_dis_sa			= request.getParameter("table_dis_sa");
		     JSONArray jsonArr_table_dis_sa = new JSONArray(table_dis_sa);
		     ArrayList<Rate_layout> lsRate_table_dis_sa = new ArrayList<>();
			 for (int i = 0; i < jsonArr_table_dis_sa.length(); i++)
		        {
		        	 JSONObject jsonObj_select_extra_Rate = jsonArr_table_dis_sa.getJSONObject(i);
		        	 Rate_layout rate_layout = new Rate_layout();
			        	rate_layout.setCov_code(passInsurance);
			        	rate_layout.setRate_cat_id(jsonObj_select_extra_Rate.getInt("rate_cat_id"));
			        	rate_layout.setAge_band_code(jsonObj_select_extra_Rate.getString("age_band_code"));
			        	rate_layout.setRate_layout_id(jsonObj_select_extra_Rate.getInt("rate_layout_id"));
			        	rate_layout.setFile_id(jsonObj_select_extra_Rate.getInt("file_id"));
			        	
			        	// FIX VALUE
			        	rate_layout.setUser_code(userId);
			        	rate_layout.setUpdate_time(getCurrentTimestamp());
			        	///New
			        	rate_layout.setSub_code(jsonObj_select_extra_Rate.getString("rate_type"));
			        	lsRate_table_dis_sa.add(rate_layout);
		        }
		     settoService.setRate_layout_table_dis_sa(lsRate_table_dis_sa);
	     /////////////////////////////////////////END///////////////////////////////////////   
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	public String save_table_policy_value(HttpServletRequest request, HttpServletResponse response) throws Exception 
	{
		try {
			String groupName 			= request.getParameter("groupName");
			ConstantValues.GROUP_NAME 	= groupName;
			String passInsurance = request.getParameter("passInsurance");
			//standard_risk
				String standard_risk = request.getParameter("standard_risk");
				Boolean is_standard_risk = Boolean.valueOf(request.getParameter("is_standard_risk"));
				Boolean is_standard_risk_row = Boolean.valueOf(request.getParameter("is_standard_risk_row"));
				
			 JSONArray jsonArr_standard_risk = new JSONArray(standard_risk);
			 ArrayList<Rate_layout> lstRateLayout_standard_risk = new ArrayList<>();
			 BasePlan_SaveData_Service_OL bss = new BasePlan_SaveData_Service_OL();
			 
			 if (is_standard_risk == true) {
			        for (int i = 0; i < jsonArr_standard_risk.length(); i++)
			        {			
			        		//select
				        	 JSONObject jsonObj_standard_risk = jsonArr_standard_risk.getJSONObject(i);
				        	//table
				        	 	String layout =  String.valueOf(jsonObj_standard_risk.get("layout"));
				          		JSONArray jsonArr_layout = new JSONArray(layout);
				          		for (int ii = 0; ii < jsonArr_layout.length(); ii++)
						        {	
				          			Rate_layout rate_layout = new Rate_layout();
				          			JSONObject jsonObj_layout = jsonArr_layout.getJSONObject(ii);
				          			rate_layout.setCov_code(passInsurance);
				        	        rate_layout.setRate_cat_id(Integer.parseInt(jsonObj_layout.getString("rate_cat_id")));
				        	        rate_layout.setRate_layout_id(Integer.parseInt(jsonObj_layout.getString("rate_layout_id")));
				        	        rate_layout.setFile_id(Integer.parseInt(jsonObj_layout.getString("file_id")));
				          			rate_layout.setAge_band_code(jsonObj_layout.getString("age_band_code"));
				        	        rate_layout.setUpdate_time(getCurrentTimestamp());
				        	        rate_layout.setUser_code(userId);
				        	        //New
				        	        rate_layout.setSub_code(jsonObj_layout.getString("rate_type"));
				        	        lstRateLayout_standard_risk.add(rate_layout);
						        }
			        }
			 }
	        bss.setRate_layout_standard_risk(lstRateLayout_standard_risk);
	        //standard_risk_row
	    	String standard_risk_row = request.getParameter("standard_risk_row");
	    	JSONArray jsonArr_standard_risk_row = new JSONArray(standard_risk_row);
	    	 ArrayList<Rate_layout> lstRateLayout_standard_risk_row = new ArrayList<>();
	    	 if (is_standard_risk_row == true) {
		        for (int i = 0; i < jsonArr_standard_risk_row.length(); i++)
		        {
		        	//select
		        	 JSONObject jsonObj_standard_risk_row = jsonArr_standard_risk_row.getJSONObject(i);
		        	//table
	        	 	String layout =  String.valueOf(jsonObj_standard_risk_row.get("layout"));
	          		JSONArray jsonArr_layout = new JSONArray(layout);
	          		for (int ii = 0; ii < jsonArr_layout.length(); ii++)
			        {	
	          			Rate_layout rate_layout = new Rate_layout();
	          			JSONObject jsonObj_layout = jsonArr_layout.getJSONObject(ii);
	          			rate_layout.setCov_code(passInsurance);
	        	        rate_layout.setRate_cat_id(Integer.parseInt(jsonObj_layout.getString("rate_cat_id")));
	        	        rate_layout.setRate_layout_id(Integer.parseInt(jsonObj_layout.getString("rate_layout_id")));
	        	        rate_layout.setFile_id(Integer.parseInt(jsonObj_layout.getString("file_id")));
	          			rate_layout.setAge_band_code(jsonObj_layout.getString("age_band_code"));
	        	        rate_layout.setUpdate_time(getCurrentTimestamp());
	        	        rate_layout.setUser_code(userId);
	        	        //New
	        	        rate_layout.setSub_code(jsonObj_layout.getString("rate_type"));
	        	        lstRateLayout_standard_risk_row.add(rate_layout);
			        }
		        }
	    	}
	        bss.setRate_layout_standard_risk_row(lstRateLayout_standard_risk_row) ;
	        ////////////RPU////ETI///////////////////////
	      	String cov_code				= request.getParameter("passInsurance");
	      	String str_is_RPU_ETI_Table	= request.getParameter("is_RPU_ETI_Table");
	      	boolean is_RPU_ETI_Table	= Boolean.parseBoolean(str_is_RPU_ETI_Table);
	      	if (is_RPU_ETI_Table == false) { 	//ตารางที่มีอยู่แล้ว
	      		NonforfProvisionData setNP = new NonforfProvisionData();
		    	Boolean is_RPU_ETI = Boolean.valueOf(request.getParameter("is_RPU_ETI"));
		    	ArrayList<Nonforf_provision> arr_Product 	= setNP.searchCoverageNonforfprovision(cov_code);
		    	String str_RPU 								= request.getParameter("RPU");
		    	String str_ETI 								= request.getParameter("ETI");
		    	JSONArray jsonArr_RPU 						= new JSONArray(str_RPU);
		    	JSONArray jsonArr_ETI 						= new JSONArray(str_ETI);
		    	ArrayList<Nonforf_provision> arr_Product_Set = new ArrayList<>();
		    	if (is_RPU_ETI == true) {
		    		for (int i = 0; i < arr_Product.size(); i++) {
			    		if (arr_Product.get(i).getNonforf_prov().equals("RPU")) {
			    			if (jsonArr_RPU.length() != 0) {
			    				for (int ii = 0; ii < jsonArr_RPU.length(); ii++) {
			    					Nonforf_provision set_Nonforf_provision 	= arr_Product.get(i);
				          			JSONObject jsonObj_RPU = jsonArr_RPU.getJSONObject(ii);
				          			set_Nonforf_provision.setMale_nonforf_rate(Integer.parseInt(jsonObj_RPU.get("male_nonforf_rate").toString()));
				          			set_Nonforf_provision.setFemale_nonforf_rate(Integer.parseInt(jsonObj_RPU.get("female_nonforf_rate").toString()));
				          			set_Nonforf_provision.setUser_code(userId);
				          			set_Nonforf_provision.setUpdate_time(getCurrentTimestamp());
				          			arr_Product_Set.add(set_Nonforf_provision);
				    			}
			    			}
			    		}else if (arr_Product.get(i).getNonforf_prov().equals("ETI")) {
			    			if (jsonArr_ETI.length() != 0) {
			    				for (int ii = 0; ii < jsonArr_ETI.length(); ii++) {
			    					Nonforf_provision set_Nonforf_provision  = arr_Product.get(i);
				          			JSONObject jsonObj_ETI 	= jsonArr_ETI.getJSONObject(ii);
				          			set_Nonforf_provision.setMale_nonforf_rate(Integer.parseInt(jsonObj_ETI.get("male_nonforf_rate").toString()));
				          			set_Nonforf_provision.setFemale_nonforf_rate(Integer.parseInt(jsonObj_ETI.get("female_nonforf_rate").toString()));
				          			set_Nonforf_provision.setUser_code(userId);
				          			set_Nonforf_provision.setUpdate_time(getCurrentTimestamp());
				          			arr_Product_Set.add(set_Nonforf_provision);
				    			}
			    			}
			    		}else {
			    			Nonforf_provision set_Nonforf_provision  = arr_Product.get(i);
			    			arr_Product_Set.add(set_Nonforf_provision);
			    		}
					}
			    	BasePlanGrantRightsInsure bgr = new BasePlanGrantRightsInsure();
			    	bgr.doNonforfProvisionOLData(arr_Product_Set);
		    	}else{
		    		for (int i = 0; i < arr_Product.size(); i++) {
			    		if (arr_Product.get(i).getNonforf_prov().equals("RPU")) {
			    					Nonforf_provision set_Nonforf_provision 	= arr_Product.get(i);
			    					set_Nonforf_provision.setMale_nonforf_rate(0);
			    					set_Nonforf_provision.setFemale_nonforf_rate(0);
				          			set_Nonforf_provision.setUser_code(userId);
				          			set_Nonforf_provision.setUpdate_time(getCurrentTimestamp());
				          			arr_Product_Set.add(set_Nonforf_provision);
			    		}else if (arr_Product.get(i).getNonforf_prov().equals("ETI")) {
			    					Nonforf_provision set_Nonforf_provision  = arr_Product.get(i);
			    					set_Nonforf_provision.setMale_nonforf_rate(0);
			    					set_Nonforf_provision.setFemale_nonforf_rate(0);
				          			set_Nonforf_provision.setUser_code(userId);
				          			set_Nonforf_provision.setUpdate_time(getCurrentTimestamp());
				          			arr_Product_Set.add(set_Nonforf_provision);
			    		}else {
			    			Nonforf_provision set_Nonforf_provision  = arr_Product.get(i);
			    			arr_Product_Set.add(set_Nonforf_provision);
			    		}
					}
			    	BasePlanGrantRightsInsure bgr = new BasePlanGrantRightsInsure();
			    	bgr.doNonforfProvisionOLData(arr_Product_Set);
		    	}
	      	}else {	//ตารางใหม่
		    	ArrayList<Nonforf_provision> arr_Product_Set 	= new ArrayList<>();
	      		String str_RPU 								= request.getParameter("RPU_Table");
		    	String str_ETI 								= request.getParameter("ETI_Table");
		    	NonforfRateData nrd 						= new NonforfRateData();
	      		NonforfProvisionData setNP 					= new NonforfProvisionData();
			    ArrayList<Nonforf_provision> arr_Product 	= setNP.searchCoverageNonforfprovision(cov_code);
		    	
		    	JSONArray jsonArr_RPU 						= new JSONArray(str_RPU);
		    	JSONArray jsonArr_ETI 						= new JSONArray(str_ETI);
		    	 ArrayList<Nonforf_rate> lstNonforf_rate_rpu 	= new ArrayList<>();
		    	 ArrayList<Nonforf_rate> lstNonforf_rate_eti 	= new ArrayList<>();
		    	 
		    	 ArrayList<Nonforf_rate>   arrNonforfRPU_rate 	= new ArrayList<>();
		    	 ArrayList<Nonforf_rate>   arrNonforfETI_rate	= new ArrayList<>();
			    	////RPU///
		    	 boolean checkRPUMale 	= false;
		    	 boolean checkRPUFeMale = false;
		    	 boolean checkETIMale 	= false;
		    	 boolean checkETIFeMale = false;
		    	 if (jsonArr_RPU.length() > 0) {
		    			for (int i = 0; i < jsonArr_RPU.length(); i++) {
							//rpu_male/////////////////
					    	JSONObject jsonObj_RPU 					= jsonArr_RPU.getJSONObject(i);
						    JSONArray jsonArr_rpu_male 				= new JSONArray(jsonObj_RPU.get("male").toString());
						    if (jsonArr_rpu_male.length() > 0) {
						    	JSONObject jsonObj_rpu_male 		= jsonArr_rpu_male.getJSONObject(i);
						    	for (int ii = 0; ii < arr_Product.size(); ii++) {
			        				if (arr_Product.get(ii).getNonforf_prov().equals("RPU")) {
			        					if (arr_Product.get(ii).getMale_nonforf_rate() == 0 || jsonObj_rpu_male.getString("flag").equals("true")) {
									    	Nonforf_rate setNonforf_rate = new Nonforf_rate();
									    	setNonforf_rate.setFile_id(Integer.parseInt(jsonObj_rpu_male.getString("file_id")));
									    	setNonforf_rate.setRate_layout_id(Integer.parseInt(jsonObj_rpu_male.getString("rate_layout_id")));
									    	setNonforf_rate.setStat_year(Integer.parseInt(jsonObj_rpu_male.getString("year")));
									    	setNonforf_rate.setGender((jsonObj_rpu_male.getString("gender")));
									    	setNonforf_rate.setNonforf_prov("RPU");
									    	lstNonforf_rate_rpu.add(setNonforf_rate);
									    	checkRPUMale = true;
			        					}
			        				}
			    				}
						    	
					    	}
				    		//rpu_female////////////////////
					    	JSONArray jsonArr_rpu_female 			= new JSONArray(jsonObj_RPU.get("female").toString());
					    	if (jsonArr_rpu_female.length() > 0) {
					    		JSONObject jsonObj_rpu_female 		= jsonArr_rpu_female.getJSONObject(i);
					    		for (int ii = 0; ii < arr_Product.size(); ii++) {
			        				if (arr_Product.get(ii).getNonforf_prov().equals("RPU")) {
			        					if (arr_Product.get(ii).getFemale_nonforf_rate() == 0 || jsonObj_rpu_female.getString("flag").equals("true")) {
								    		Nonforf_rate setNonforf_rate = new Nonforf_rate();
								    		setNonforf_rate.setFile_id(Integer.parseInt(jsonObj_rpu_female.getString("file_id")));
								    		setNonforf_rate.setRate_layout_id(Integer.parseInt(jsonObj_rpu_female.getString("rate_layout_id")));
								    		setNonforf_rate.setStat_year(Integer.parseInt(jsonObj_rpu_female.getString("year")));
								    		setNonforf_rate.setGender((jsonObj_rpu_female.getString("gender")));
								    		setNonforf_rate.setNonforf_prov("RPU");
								    		lstNonforf_rate_rpu.add(setNonforf_rate);
								    		checkRPUFeMale = true;
			        					}
			        				}
			    				}
					    	}
						}
		    			if (checkRPUMale == true || checkRPUFeMale == true) {
					         arrNonforfRPU_rate 	= nrd.insertsearchNonforfRate(lstNonforf_rate_rpu);
				    	}
		    	 }
			    ////Get Nonforf_rate
	    		Nonforf_provision set_NonforfRPU_provision 		= new Nonforf_provision();
		     //////////////////////////////////RPU////END///////////////////////////  
	    		 if (jsonArr_ETI.length() > 0) {
			    	for (int i = 0; i < jsonArr_ETI.length(); i++) {
						//eti_male/////////////////
			    		JSONObject jsonObj_ETI 					= jsonArr_ETI.getJSONObject(i);
				    	JSONArray jsonArr_eti_male 				= new JSONArray(jsonObj_ETI.get("male").toString());
				    	if (jsonArr_eti_male.length() > 0) {
				    		JSONObject jsonObj_eti_male 		= jsonArr_eti_male.getJSONObject(i);
				    		for (int ii = 0; ii < arr_Product.size(); ii++) {
		        				if (arr_Product.get(ii).getNonforf_prov().equals("ETI")) {
		        					if (arr_Product.get(ii).getMale_nonforf_rate() == 0 || jsonObj_eti_male.getString("flag").equals("true")) {
		    				    		Nonforf_rate setNonforf_rate = new Nonforf_rate();
		    				    		setNonforf_rate.setFile_id(Integer.parseInt(jsonObj_eti_male.getString("file_id")));
		    				    		setNonforf_rate.setRate_layout_id(Integer.parseInt(jsonObj_eti_male.getString("rate_layout_id")));
		    				    		setNonforf_rate.setStat_year(Integer.parseInt(jsonObj_eti_male.getString("year")));
		    				    		setNonforf_rate.setGender((jsonObj_eti_male.getString("gender")));
		    				    		setNonforf_rate.setNonforf_prov("ETI");
		    				    		lstNonforf_rate_eti.add(setNonforf_rate);
		    				    		checkETIMale = true;
		        					}
		        				}
				    		}
				    	}
			    		//eti_female////////////////////
				    	JSONArray jsonArr_eti_female 			= new JSONArray(jsonObj_ETI.get("female").toString());
				    	if (jsonArr_eti_female.length() > 0) {
				    		JSONObject jsonObj_eti_female 		= jsonArr_eti_female.getJSONObject(i);
				    		for (int ii = 0; ii < arr_Product.size(); ii++) {
		        				if (arr_Product.get(ii).getNonforf_prov().equals("ETI")) {
		        					if (arr_Product.get(ii).getFemale_nonforf_rate() == 0 || jsonObj_eti_female.getString("flag").equals("true")) {
		    				    		Nonforf_rate setNonforf_rate = new Nonforf_rate();
		    				    		setNonforf_rate.setFile_id(Integer.parseInt(jsonObj_eti_female.getString("file_id")));
		    				    		setNonforf_rate.setRate_layout_id(Integer.parseInt(jsonObj_eti_female.getString("rate_layout_id")));
		    				    		setNonforf_rate.setStat_year(Integer.parseInt(jsonObj_eti_female.getString("year")));
		    				    		setNonforf_rate.setGender((jsonObj_eti_female.getString("gender")));
		    				    		setNonforf_rate.setNonforf_prov("ETI");
		    				    		lstNonforf_rate_eti.add(setNonforf_rate);
		    				    		checkETIFeMale = true;
		        					}
		        				}
				    		}
				    	}
					}
			    	if (checkETIMale == true || checkETIFeMale == true) {
				          arrNonforfETI_rate  = nrd.insertsearchNonforfRate(lstNonforf_rate_eti);
			    	}
	    		 }
		    	///////////////////////////
	    		boolean checkNull = false;
	    		Nonforf_provision set_NonforfETI_provision 		= new Nonforf_provision();
		        if (arrNonforfETI_rate.size() > 0 || arrNonforfRPU_rate.size() > 0) { //check Nonforf_rate
		        	if (arr_Product.size() > 0) { //check Nonforf_provision
		        			if (jsonArr_RPU.length() > 0 && jsonArr_ETI.length() > 0) {
				        		for (int ii = 0; ii < arr_Product.size(); ii++) {
			        				if (arr_Product.get(ii).getNonforf_prov().equals("RPU")) {
			        					checkNull = false;
					        			set_NonforfRPU_provision 	= arr_Product.get(ii);
						    			for (int iii = 0; iii < arrNonforfRPU_rate.size(); iii++) {
						    				if ( arrNonforfRPU_rate.get(iii).getGender().equals("MALE")) {
						    					set_NonforfRPU_provision.setMale_nonforf_rate((arrNonforfRPU_rate.get(iii).getNonforf_rate_id()));
						    					checkNull = false;
						    					break;
						    				}else {
						    					checkNull = true;
						    				}
						    				if (checkNull = true) {
						    					set_NonforfRPU_provision.setMale_nonforf_rate(0);
						    				}
										}
						    			for (int iii = 0; iii < arrNonforfRPU_rate.size(); iii++) {
						    				if ( arrNonforfRPU_rate.get(iii).getGender().equals("FEMALE")) {
						    					set_NonforfRPU_provision.setFemale_nonforf_rate((arrNonforfRPU_rate.get(iii).getNonforf_rate_id()));
						    					checkNull = false;
						    					break;
						    				}else {
						    					checkNull = true;
						    				}
						    				if (checkNull = true) {
						    					set_NonforfRPU_provision.setFemale_nonforf_rate(0);
						    				}
										}
						    			set_NonforfRPU_provision.setUser_code(userId);
						    			set_NonforfRPU_provision.setUpdate_time(getCurrentTimestamp());
						    			arr_Product_Set.add(set_NonforfRPU_provision);
						    		}else if (arr_Product.get(ii).getNonforf_prov().equals("ETI")){
			        					checkNull = false;
					        			set_NonforfETI_provision 	= arr_Product.get(ii);
						    			for (int iii = 0; iii < arrNonforfETI_rate.size(); iii++) {
						    				if (arrNonforfETI_rate.get(iii).getGender().equals("MALE")) {
						    					set_NonforfETI_provision.setMale_nonforf_rate((arrNonforfETI_rate.get(iii).getNonforf_rate_id()));
						    					checkNull = false;
						    					break;
						    				}else {
						    					checkNull = true;
						    				}
						    				if (checkNull = true) {
						    					set_NonforfETI_provision.setMale_nonforf_rate(0);
						    				}
										}
						    			for (int iii = 0; iii < arrNonforfETI_rate.size(); iii++) {
						    				if ( arrNonforfETI_rate.get(iii).getGender().equals("FEMALE")) {
						    					set_NonforfETI_provision.setFemale_nonforf_rate((arrNonforfETI_rate.get(iii).getNonforf_rate_id()));
						    					checkNull = false;
						    					break;
						    				}else {
						    					checkNull = true;
						    				}
						    				if (checkNull = true) {
						    					set_NonforfETI_provision.setFemale_nonforf_rate(0);
						    				}
										}
						    			set_NonforfETI_provision.setUser_code(userId);
						    			set_NonforfETI_provision.setUpdate_time(getCurrentTimestamp());
						    			arr_Product_Set.add(set_NonforfETI_provision);
						    		
						    		}else {
						    			Nonforf_provision set_Nonforf_provision  = arr_Product.get(ii);
						    			arr_Product_Set.add(set_Nonforf_provision);
						    		} 
				        		}
		        			}else if (jsonArr_RPU.length() > 0 && jsonArr_ETI.length() == 0) {
		        				for (int ii = 0; ii < arr_Product.size(); ii++) {
			        				if (arr_Product.get(ii).getNonforf_prov().equals("RPU")) {
					        			set_NonforfRPU_provision 	= arr_Product.get(ii);
						    			for (int iii = 0; iii < arrNonforfRPU_rate.size(); iii++) {
				        					checkNull = false;
						    				if ( arrNonforfRPU_rate.get(iii).getGender().equals("MALE")) {
						    					set_NonforfRPU_provision.setMale_nonforf_rate((arrNonforfRPU_rate.get(iii).getNonforf_rate_id()));
						    					checkNull = false;
						    					break;
						    				}else {
						    					checkNull = true;
						    				}
						    				if (checkNull = true) {
						    					set_NonforfRPU_provision.setMale_nonforf_rate(0);
						    				}
										}
						    			
						    			for (int iii = 0; iii < arrNonforfRPU_rate.size(); iii++) {
				        					checkNull = false;
						    				if ( arrNonforfRPU_rate.get(iii).getGender().equals("FEMALE")) {
						    					set_NonforfRPU_provision.setFemale_nonforf_rate((arrNonforfRPU_rate.get(iii).getNonforf_rate_id()));
						    					checkNull = false;
						    					break;
						    				}else {
						    					checkNull = true;
						    				}
						    				if (checkNull = true) {
						    					set_NonforfRPU_provision.setFemale_nonforf_rate(0);
						    				}
										}
						    			
						    			set_NonforfRPU_provision.setUser_code(userId);
						    			set_NonforfRPU_provision.setUpdate_time(getCurrentTimestamp());
						    			arr_Product_Set.add(set_NonforfRPU_provision);
						    		}else {
						    			Nonforf_provision set_Nonforf_provision  = arr_Product.get(ii);
						    			set_Nonforf_provision.setMale_nonforf_rate(0);
						    			set_Nonforf_provision.setFemale_nonforf_rate(0);
						    			arr_Product_Set.add(set_Nonforf_provision);
						    		}
			        				
				        		}
		        			}else if (jsonArr_RPU.length() == 0 && jsonArr_ETI.length() > 0) {
				        		for (int ii = 0; ii < arr_Product.size(); ii++) {
			        				 if (arr_Product.get(ii).getNonforf_prov().equals("ETI")){
			        					 checkNull = false;
					        			set_NonforfETI_provision 	= arr_Product.get(ii);
						    			for (int iii = 0; iii < arrNonforfETI_rate.size(); iii++) {
						    				if (arrNonforfETI_rate.get(iii).getGender().equals("MALE")) {
						    					set_NonforfETI_provision.setMale_nonforf_rate((arrNonforfETI_rate.get(iii).getNonforf_rate_id()));
						    					checkNull = false;
						    					break;
						    				}else {
						    					checkNull = true;
						    				}
						    				if (checkNull = true) {
						    					set_NonforfETI_provision.setMale_nonforf_rate(0);
						    				}
										}
						    			for (int iii = 0; iii < arrNonforfETI_rate.size(); iii++) {
						    				if ( arrNonforfETI_rate.get(iii).getGender().equals("FEMALE")) {
						    					set_NonforfETI_provision.setFemale_nonforf_rate((arrNonforfETI_rate.get(iii).getNonforf_rate_id()));
						    					checkNull = false;
						    					break;
						    				}else {
						    					checkNull = true;
						    				}
						    				if (checkNull = true) {
						    					set_NonforfETI_provision.setFemale_nonforf_rate(0);
						    				}
										}
						    			set_NonforfETI_provision.setUser_code(userId);
						    			set_NonforfETI_provision.setUpdate_time(getCurrentTimestamp());
						    			arr_Product_Set.add(set_NonforfETI_provision);
						    		
						    		}else {
						    			Nonforf_provision set_Nonforf_provision  = arr_Product.get(ii);
						    			set_Nonforf_provision.setMale_nonforf_rate(0);
						    			set_Nonforf_provision.setFemale_nonforf_rate(0);
						    			arr_Product_Set.add(set_Nonforf_provision);
						    		} 
				        		}
		        			
		        			}
		        			
		        	}else {
		        		if (jsonArr_RPU.length() > 0) {
			        		set_NonforfRPU_provision 	= new Nonforf_provision();
				    		for (int iii = 0; iii < arrNonforfRPU_rate.size(); iii++) {
				    			checkNull = false;
				    			if ( arrNonforfRPU_rate.get(iii).getGender().equals("MALE")) {
				    				set_NonforfRPU_provision.setMale_nonforf_rate((arrNonforfRPU_rate.get(iii).getNonforf_rate_id()));
				    				checkNull = false;
				    				break;
			    				}else {
			    					checkNull = true;
			    				}
			    				if (checkNull = true) {
			    					set_NonforfRPU_provision.setMale_nonforf_rate(0);
			    				}
							}
				    		for (int iii = 0; iii < arrNonforfRPU_rate.size(); iii++) {
				    			checkNull = false;
				    			if ( arrNonforfRPU_rate.get(iii).getGender().equals("FEMALE")) {
				    				set_NonforfRPU_provision.setFemale_nonforf_rate((arrNonforfRPU_rate.get(iii).getNonforf_rate_id()));
				    				checkNull = false;
				    				break;
			    				}else {
			    					checkNull = true;
			    				}
			    				if (checkNull = true) {
			    					set_NonforfRPU_provision.setFemale_nonforf_rate(0);
			    				}
							}
				    			set_NonforfRPU_provision.setNonforf_prov("RPU");
				    			set_NonforfRPU_provision.setUser_code(userId);
				    			set_NonforfRPU_provision.setUpdate_time(getCurrentTimestamp());
				    			arr_Product_Set.add(set_NonforfRPU_provision);
		        		}
			    			////////////ETI///////////////////
			    		if (jsonArr_ETI.length() > 0) {
			    			set_NonforfETI_provision 	= new Nonforf_provision();
				    		for (int iii = 0; iii < arrNonforfETI_rate.size(); iii++) {
				    			checkNull = false;
				    			if ( arrNonforfETI_rate.get(iii).getGender().equals("MALE")) {
				    				set_NonforfETI_provision.setMale_nonforf_rate((arrNonforfETI_rate.get(iii).getNonforf_rate_id()));
				    				checkNull = false;
				    				break;
			    				}else {
			    					checkNull = true;
			    				}
			    				if (checkNull = true) {
			    					set_NonforfETI_provision.setMale_nonforf_rate(0);
			    				}
							}
				    		for (int iii = 0; iii < arrNonforfETI_rate.size(); iii++) {
				    			checkNull = false;
				    			if ( arrNonforfETI_rate.get(iii).getGender().equals("FEMALE")) {
				    				set_NonforfETI_provision.setFemale_nonforf_rate((arrNonforfETI_rate.get(iii).getNonforf_rate_id()));
				    				checkNull = false;
				    				break;
			    				}else {
			    					checkNull = true;
			    				}
			    				if (checkNull = true) {
			    					set_NonforfETI_provision.setFemale_nonforf_rate(0);
			    				}
							}
				    			set_NonforfETI_provision.setNonforf_prov("ETI");
				    			set_NonforfETI_provision.setUser_code(userId);
				    			set_NonforfETI_provision.setUpdate_time(getCurrentTimestamp());
				    			arr_Product_Set.add(set_NonforfETI_provision);
			    		}
		        	}
		        	BasePlanGrantRightsInsure bgr = new BasePlanGrantRightsInsure();
				    bgr.doNonforfProvisionOLData(arr_Product_Set);
		        }
		     //////////////////////////////////ETI////END/////////////////////////// 
	      	}
	    	//set Status //*Benz 30-08-2019
			CoverageData cd 		= new CoverageData();
			Coverage setCoverage 	=	cd.searchCoverage(passInsurance);
			setCoverage.setStatus("UPDATE");
			setCoverage.setUser_code(userId);
			setCoverage.setUpdate_time(getCurrentTimestamp());
			BasicInfoDataTab basicInfo = new BasicInfoDataTab();
			basicInfo.doCoverage(setCoverage);
		////Benz 11-09-2019 New set Status
			WorkFlowCoverage wfc = new WorkFlowCoverage();
			ArrayList<Coverage_task> arr_getCoverage_task = wfc.searchCoverageTask();
			Coverage_task  setcovtask = new Coverage_task();
			for (int i = 0; i < arr_getCoverage_task.size(); i++) {
				if ((arr_getCoverage_task.get(i).getDepartment().equals("PD") || 
						arr_getCoverage_task.get(i).getDepartment().equals("PD_Test") || 
						arr_getCoverage_task.get(i).getDepartment().equals("PD2")) && !arr_getCoverage_task.get(i).getApprove_status().equals("APPROVE")) {
					setcovtask =   arr_getCoverage_task.get(i);
					setcovtask.setCov_code(passInsurance);
					setcovtask.setDepartment(ConstantValues.GROUP_NAME);
					setcovtask.setApprove_status("UPDATE");
					setcovtask.setUser_code(userId);
					setcovtask.setUpdate_time(PDFFnc.currentTimeStamp());
					wfc.doCoverageTask(setcovtask);
				}
			}	
	        //////////////////////////////////////////////
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	public String save_Tab_coverageBenefits(HttpServletRequest request, HttpServletResponse response) throws Exception 
	{
		try {
			String groupName 			= request.getParameter("groupName");
			ConstantValues.GROUP_NAME 	= groupName;
			String passInsurance = request.getParameter("passInsurance");
			
			String tab_benefit = request.getParameter("tab_benefit");
	    	JSONArray jsonArr_tab_benefit = new JSONArray(tab_benefit);
	    	
		    int check_true = 0;
		    for (int i = 0; i < jsonArr_tab_benefit.length(); i++)
	        {
	        JSONObject jsonObj_tab_benefit = jsonArr_tab_benefit.getJSONObject(i);
	        	if (i == 0) {
	        		if (jsonObj_tab_benefit.getBoolean("group_dead") == true) {
	        			check_true++;
					}
	        	}
	        	if (i == 1) {
	        		 if (jsonObj_tab_benefit.getBoolean("group_contract") == true) {
	        			 check_true++;
	        		 }
	        	}
		         if (i == 2) {
		        	 if (jsonObj_tab_benefit.getBoolean("group_refund") == true) {
		        		 check_true++;
		        	 }
		         }
				if (i == 3) {
					 if (jsonObj_tab_benefit.getBoolean("group_pension") == true) {
						 check_true++;
					 }
				}
				if (i == 4) {
					if (jsonObj_tab_benefit.getBoolean("group_medical") == true) {
						check_true++;
					}
				}
				if (i == 5) {
					if (jsonObj_tab_benefit.getBoolean("group_dividend") == true) {
						check_true++;
					}
				}
			}
		    ////////////////////////////////////////////////////////////////
		    int row  = 0;
		    String[] list_Tab_Benefits  =   new String[check_true];
	    	
	    		for (int i = 0; i < jsonArr_tab_benefit.length(); i++)
		        {
		        JSONObject jsonObj_tab_benefit = jsonArr_tab_benefit.getJSONObject(i);
		        	if (i == 0) {
		        		if (jsonObj_tab_benefit.getBoolean("group_dead") == true) {
			            	list_Tab_Benefits[row] = "1";
			            	row++;
						}
		        	}
		        	if (i == 1) {
		        		 if (jsonObj_tab_benefit.getBoolean("group_contract") == true) {
								list_Tab_Benefits[row] = "2";
								row++;
		        		 }
		        	}
			         if (i == 2) {
			        	 if (jsonObj_tab_benefit.getBoolean("group_refund") == true) {
								list_Tab_Benefits[row] = "3";
								row++;
			        	 }
			         }
					if (i == 3) {
						 if (jsonObj_tab_benefit.getBoolean("group_pension") == true) {
								list_Tab_Benefits[row] = "4"; 
								row++;
						 }
					}
					if (i == 4) {
						if (jsonObj_tab_benefit.getBoolean("group_medical") == true) {
							list_Tab_Benefits[row] = "5";
							row++;
						}
					}
					if (i == 5) {
						if (jsonObj_tab_benefit.getBoolean("group_dividend") == true) {
							list_Tab_Benefits[row] = "6";
							row++;
						}
					}
				}
			
	       BasePlanBenefitsOL  bpb = new BasePlanBenefitsOL();
	       bpb.doCoverageBenefitPage(list_Tab_Benefits);
	    
	       //set Status //*Benz 30-08-2019
			CoverageData cd 		= new CoverageData();
			Coverage setCoverage 	=	cd.searchCoverage(passInsurance);
			//setCoverage.setStatus("UPDATE");
			setCoverage.setUser_code(userId);
			setCoverage.setUpdate_time(getCurrentTimestamp());
			BasicInfoDataTab basicInfo = new BasicInfoDataTab();
			basicInfo.doCoverage(setCoverage);
		////Benz 11-09-2019 New set Status
			/*WorkFlowCoverage wfc = new WorkFlowCoverage();
			ArrayList<Coverage_task> arr_getCoverage_task = wfc.searchCoverageTask();
			Coverage_task  setcovtask = new Coverage_task();
			for (int i = 0; i < arr_getCoverage_task.size(); i++) {
				if ((arr_getCoverage_task.get(i).getDepartment().equals("PD") || 
						arr_getCoverage_task.get(i).getDepartment().equals("PD_Test") || 
						arr_getCoverage_task.get(i).getDepartment().equals("PD2")) && !arr_getCoverage_task.get(i).getApprove_status().equals("APPROVE")) {
					setcovtask =   arr_getCoverage_task.get(i);
					setcovtask.setCov_code(passInsurance);
					setcovtask.setDepartment(ConstantValues.GROUP_NAME);
					setcovtask.setApprove_status("UPDATE");
					setcovtask.setUser_code(userId);
					setcovtask.setUpdate_time(PDFFnc.currentTimeStamp());
					wfc.doCoverageTask(setcovtask);
				}
			}*/
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	public String save_benefitsCoverage_dead(HttpServletRequest request, HttpServletResponse response) throws Exception 
	{
		try {
			 ///
			BasePlanBenefitOLSearchData bad = new BasePlanBenefitOLSearchData();
		     bad.searchBenefitsOL(new String [] {"1"});
		    
		     ArrayList<BenefitAccessData> arr_Benefit_item 	= bad.getListBenefitDAccessData();
		     ArrayList<Benefit> arr_Benefit 				= bad.getListExceptionAccidentPay();
		    
			 int bnf_item_id 	= 0;
			 String bnf_code 	= "";
		     if (arr_Benefit_item.size() > 0) {
		    	 bnf_item_id 	=  	arr_Benefit_item.get(0).getBenefitItem().getBnf_item_id();
		    	 bnf_code		=	arr_Benefit_item.get(0).getBenefitItem().getBnf_code(); 
		     }
		     int  distance = 0;
			ArrayList<Benefit_sched> listBenefit_sched 						= new ArrayList<>();
			ArrayList<Benefit_special_amount> listBenefit_special_amount 	= new ArrayList<>();
			String passInsurance 		= request.getParameter("passInsurance");
			String die  				= request.getParameter("die");
			JSONArray jsonArr_die	 	= new JSONArray(die);
			BasePlan_SaveData_Service_OL bss = new BasePlan_SaveData_Service_OL();
			 int bnf_item_id_in = bnf_item_id;
			 //seve Benefit_item
		        ArrayList<Benefit_item> lstBenefit_item = new ArrayList<>();
		        Benefit_item benefit_item = new Benefit_item();
		        benefit_item.setCov_code(passInsurance);
		        benefit_item.setBnf_item_id(bnf_item_id);
		        benefit_item.setBnf_code(bnf_code);//
		        benefit_item.setPartic_type("PRIMARY");
		        benefit_item.setWaiting_period_unit("NONE");
		        benefit_item.setUser_code(userId);
		        benefit_item.setUpdate_time(PDFFnc.currentTimeStamp());
		        lstBenefit_item.add(benefit_item);
		        new BasePlanBenefitsOL().doฺBenefitItem(lstBenefit_item);
		        
			ArrayList<Benefit_amount> listBenefit_amount = new ArrayList<>();
			for (int i = 0; i < jsonArr_die.length(); i++) {
				 JSONObject jsonObj_die = jsonArr_die.getJSONObject(i);
	        	 Benefit_sched benefit_sched 					= new Benefit_sched();
	        	 //benefit_sched
	        	 benefit_sched.setBnf_item_id(bnf_item_id_in);
	        	 if (jsonObj_die.get("distance") != "") {
	        		  distance    = (Integer.parseInt((String) jsonObj_die.get("distance")));
	        		  benefit_sched.setSched_seq(distance);
	        	 }
	        	 if (jsonObj_die.get("duration_from") != "") {
	        		 int duration_from    = (Integer.parseInt((String) jsonObj_die.get("duration_from")));
	        		 benefit_sched.setBeg_period(duration_from);
	        	 }
	        	 if (jsonObj_die.get("duration_to") != "") {
	        		 int duration_to    = (Integer.parseInt((String) jsonObj_die.get("duration_to")));
	        		 benefit_sched.setEnd_period(duration_to);
	        	 }
	        	 benefit_sched.setBeg_period_type("POLICY_YEAR_BEG");
	        	 benefit_sched.setEnd_period_type("POLICY_YEAR_BEG");
	        	 benefit_sched.setBeg_period_unit((String) jsonObj_die.get("duration_from_type"));
	        	 benefit_sched.setEnd_period_unit((String) jsonObj_die.get("duration_to_type"));
	        	 benefit_sched.setAmt_compare((String) jsonObj_die.get("select"));
	        	 benefit_sched.setUser_code(userId);
	        	 benefit_sched.setUpdate_time(PDFFnc.currentTimeStamp());
	        	 listBenefit_sched.add(benefit_sched);
	        	 ////////////////////////////////////////////////////////////////////
	        	 //benefit_amount
	        	 String death = jsonObj_die.get("death").toString();
	        	 JSONArray jsonArr_death = new JSONArray(death);
	        	 	for (int ii = 0; ii < jsonArr_death.length(); ii++) {
	        	 		 Benefit_amount benefit_amount 		= new Benefit_amount();
	        	 		 JSONObject jsonObj_death = jsonArr_death.getJSONObject(ii);
	        	 		 
	        	 		  benefit_amount.setSched_seq(distance);
	        	 		  benefit_amount.setBnf_item_id(bnf_item_id_in);
	        	 			benefit_amount.setAmt_seq(1);	
				        	 if (jsonObj_death.get("sa") != "") {
							 	BigDecimal sa    = covertStringtoBigDecimal(jsonObj_death.get("sa").toString());
				        	 	benefit_amount.setBenef_amt(sa);
				        	 }
			        	 	benefit_amount.setBenef_factor((String) jsonObj_death.get("sa_type"));
			        	 	benefit_amount.setSubseq_benef_factor("NONE");
			        	 	benefit_amount.setBenef_unit("PERCENT");
			        	 	benefit_amount.setBenef_scope("POLICY_LIFE");
			        	 	benefit_amount.setUser_code(userId);
			        	 	benefit_amount.setUpdate_time(PDFFnc.currentTimeStamp());
			        	 	listBenefit_amount.add(benefit_amount);
			        	 	///seq 2
			        	 	benefit_amount 		= new Benefit_amount();
			        		benefit_amount.setSched_seq(distance);
			        	 	benefit_amount.setBnf_item_id(bnf_item_id_in);
			        	 	benefit_amount.setAmt_seq(2);
			        	 	 if (jsonObj_death.get("premium") != "") {
								 	BigDecimal premium    = covertStringtoBigDecimal(jsonObj_death.get("premium").toString());
					        	 	benefit_amount.setBenef_amt(premium);
			        	 	 }
			        	 	if (jsonObj_death.get("premium_type").equals("ACCU")) {
			        	 		String include_EM = jsonObj_death.get("include_EM").toString() ;
			        	 		Boolean bl_include_EM = Boolean.valueOf(include_EM);
			        	 		if (bl_include_EM == true) {
			        	 			benefit_amount.setBenef_factor("ACC_TOT_PREM");
			        	 		}else {
			        	 			benefit_amount.setBenef_factor("ACC_STD_PREM");
			        	 		}
			        	 	}else if (jsonObj_death.get("premium_type").equals("YRT")) {
			        	 		String include_EM = jsonObj_death.get("include_EM").toString() ;
			        	 		Boolean bl_include_EM = Boolean.valueOf(include_EM);
			        	 		if (bl_include_EM == true) {
			        	 			benefit_amount.setBenef_factor("ANN_TOT_PREM");
			        	 		}else {
			        	 			benefit_amount.setBenef_factor("ANN_STD_PREM");
			        	 		}
			        	 	}else if (jsonObj_death.get("premium_type").equals("ACCU_COUPON")) {
			        	 		String include_EM = jsonObj_death.get("include_EM").toString() ;
			        	 		Boolean bl_include_EM = Boolean.valueOf(include_EM);
			        	 		if (bl_include_EM == true) {
			        	 			benefit_amount.setBenef_factor("ACC_COUPON_TOT_PREM");
			        	 		}else {
			        	 			benefit_amount.setBenef_factor("ACC_COUPON_STD_PREM");
			        	 		}
			        	 	}else if (jsonObj_death.get("premium_type").equals("ACCU_ANNUITY")) {
			        	 		String include_EM = jsonObj_death.get("include_EM").toString() ;
			        	 		Boolean bl_include_EM = Boolean.valueOf(include_EM);
			        	 		if (bl_include_EM == true) {
			        	 			benefit_amount.setBenef_factor("ACC_ANNUITY_TOT_PREM");
			        	 		}else {
			        	 			benefit_amount.setBenef_factor("ACC_ANNUITY_STD_PREM");
			        	 		}
			        	 	} 
			        	 	benefit_amount.setSubseq_benef_factor("NONE");
			        	 	benefit_amount.setBenef_unit("PERCENT");
			        	 	benefit_amount.setBenef_scope("POLICY_LIFE");
			        	 	benefit_amount.setUser_code(userId);
			        	 	benefit_amount.setUpdate_time(PDFFnc.currentTimeStamp());
			        	 	listBenefit_amount.add(benefit_amount); 
			        	 	///seq 3
			        	 	benefit_amount 		= new Benefit_amount();
			        		benefit_amount.setSched_seq(distance);
			        	 	benefit_amount.setBnf_item_id(bnf_item_id_in);
			        	 	benefit_amount.setAmt_seq(3);
			        	 	if (jsonObj_death.get("CV_PV") != "") {
							 	BigDecimal cv    = covertStringtoBigDecimal(jsonObj_death.get("CV_PV").toString());
				        	 	benefit_amount.setBenef_amt(cv);
			        	 	}
				        	benefit_amount.setBenef_factor(jsonObj_death.get("CV_PV_type").toString());
			        	 	benefit_amount.setSubseq_benef_factor("NONE");
			        	 	benefit_amount.setBenef_unit("PERCENT");
			        	 	benefit_amount.setBenef_scope("POLICY_LIFE");
			        	 	benefit_amount.setUser_code(userId);
			        	 	benefit_amount.setUpdate_time(PDFFnc.currentTimeStamp());
			        	 	listBenefit_amount.add(benefit_amount);
			        	 	//seq4
			        	 	benefit_amount 		= new Benefit_amount();
			        		benefit_amount.setSched_seq(distance);
			        	 	benefit_amount.setBnf_item_id(bnf_item_id_in);
			        	 	benefit_amount.setAmt_seq(4);
							BigDecimal other    = covertStringtoBigDecimal("0");
				        	benefit_amount.setBenef_amt(other);
				        	benefit_amount.setBenef_factor(jsonObj_death.get("other").toString());
			        	 	benefit_amount.setSubseq_benef_factor("NONE");
			        	 	benefit_amount.setBenef_unit("PERCENT");
			        	 	benefit_amount.setBenef_scope("POLICY_LIFE");
			        	 	benefit_amount.setUser_code(userId);
			        	 	benefit_amount.setUpdate_time(PDFFnc.currentTimeStamp());
			        	 	listBenefit_amount.add(benefit_amount);
			        	 	////////////////////////////////////////////////////
					}
						////////////////////////////////////////////////////
						//benefit_special_amount * ADB
						String adb = jsonObj_die.get("ADB").toString();
						JSONArray jsonArr_ADB = new JSONArray(adb);
						 	for (int iii = 0; iii < jsonArr_ADB.length(); iii++) {
						 		Benefit_special_amount benefit_special_amount 	= new Benefit_special_amount();
						 		JSONObject jsonObj_ADB = jsonArr_ADB.getJSONObject(iii);
						    	benefit_special_amount.setBnf_item_id(bnf_item_id_in);
						    	benefit_special_amount.setSched_seq(distance);
						    	benefit_special_amount.setAmt_seq(1);
						 		benefit_special_amount.setSpecial_type("ADB");
						 		
						 		if (!jsonObj_ADB.get("ADB_2").equals("")) {
									 	BigDecimal adb_2    = covertStringtoBigDecimal(jsonObj_ADB.get("ADB_2").toString());
									 	benefit_special_amount.setBenef_amt(adb_2);
						  	 	}
						 		benefit_special_amount.setBenef_factor(jsonObj_ADB.get("ADB_3").toString());
						 		benefit_special_amount.setBenef_unit("NONE");
						 		benefit_special_amount.setBenef_scope("NONE");
						 		benefit_special_amount.setUser_code(userId);
						 		benefit_special_amount.setUpdate_time(PDFFnc.currentTimeStamp());
						 		benefit_special_amount.setBenef_cond((String) jsonObj_ADB.get("ADB_1"));
						  	 	listBenefit_special_amount.add(benefit_special_amount);
								} 	
						//benefit_special_amount * PUBLIC_ACC  
						String acc = jsonObj_die.get("PUBLIC_ACC").toString();
						JSONArray jsonArr_ACC = new JSONArray(acc);
						     	for (int iii = 0; iii < jsonArr_ACC.length(); iii++) {
						     		JSONObject jsonObj_ACC 						= jsonArr_ACC.getJSONObject(iii);
						      Benefit_special_amount benefit_special_amount 	= new Benefit_special_amount();
						       benefit_special_amount.setBnf_item_id(bnf_item_id_in);
						       benefit_special_amount.setSched_seq(distance);
						      	benefit_special_amount.setAmt_seq(1);
						      	benefit_special_amount.setSpecial_type("PUBLIC_ACC");
						      	 //ADB_1 ฟิวแรกรอเพิ่ม
						      	 if (!jsonObj_ACC.get("ADB_public_2").equals("")) {
									BigDecimal adb_2    = covertStringtoBigDecimal(jsonObj_ACC.get("ADB_public_2").toString());
									benefit_special_amount.setBenef_amt(adb_2);
							       }
						      	benefit_special_amount.setBenef_factor(jsonObj_ACC.get("ADB_public_3").toString());
						      	benefit_special_amount.setBenef_unit("NONE");
						      	benefit_special_amount.setBenef_scope("NONE");
						      	benefit_special_amount.setUser_code(userId);
						      	benefit_special_amount.setUpdate_time(PDFFnc.currentTimeStamp());
						      	benefit_special_amount.setBenef_cond((String) jsonObj_ACC.get("ADB_public_1"));
							        listBenefit_special_amount.add(benefit_special_amount);
						     	}
			}
			 BasePlanBenefits bnenefits = new BasePlanBenefits();
  			 bnenefits.doฺBenefitSched(listBenefit_sched);
  			 bnenefits.doBenefitAmount(listBenefit_amount);
  			 RiderBenefits rb = new RiderBenefits();
  			 rb.doBenefitSpecailAmount(listBenefit_special_amount);
  			 //////////////////except//////////////////////
  			 String except  								= request.getParameter("except");
			 JSONArray jsonArr_except	 					= new JSONArray(except);
			 BasePlanBenefitsOL bpb 						= new BasePlanBenefitsOL ();
		     ArrayList<Benefit_item> lstBenefit_item_except = new ArrayList<>();
			 for (int i = 0; i < jsonArr_except.length(); i++) {
				 JSONObject jsonObj_except = jsonArr_except.getJSONObject(i);
				 //seve Benefit_item
			        Benefit_item lstBenefit_item_except1 = new Benefit_item();
			        lstBenefit_item_except1.setCov_code(passInsurance);
			        lstBenefit_item_except1.setBnf_item_id(0);
			        lstBenefit_item_except1.setMain_bnf_item_id(bnf_item_id);
			        
			        lstBenefit_item_except1.setBnf_code(jsonObj_except.get("except_val").toString());
			        lstBenefit_item_except1.setPartic_type("PRIMARY");
			        lstBenefit_item_except1.setWaiting_period_unit("NONE");
			        lstBenefit_item_except1.setUser_code(userId);
			        lstBenefit_item_except1.setUpdate_time(PDFFnc.currentTimeStamp());
			        lstBenefit_item_except.add(lstBenefit_item_except1);
			}
			 bpb.doExceptionAccidentPay(bnf_item_id,lstBenefit_item_except);
			//set Status //*Benz 30-08-2019
				CoverageData cd 		= new CoverageData();
				Coverage setCoverage 	=	cd.searchCoverage(passInsurance);
				setCoverage.setStatus("UPDATE");
				setCoverage.setUser_code(userId);
				setCoverage.setUpdate_time(getCurrentTimestamp());
				BasicInfoDataTab basicInfo = new BasicInfoDataTab();
				basicInfo.doCoverage(setCoverage);
			////Benz 11-09-2019 New set Status
				WorkFlowCoverage wfc = new WorkFlowCoverage();
				ArrayList<Coverage_task> arr_getCoverage_task = wfc.searchCoverageTask();
				Coverage_task  setcovtask = new Coverage_task();
				for (int i = 0; i < arr_getCoverage_task.size(); i++) {
					if ((arr_getCoverage_task.get(i).getDepartment().equals("PD") || 
							arr_getCoverage_task.get(i).getDepartment().equals("PD_Test") || 
							arr_getCoverage_task.get(i).getDepartment().equals("PD2")) && !arr_getCoverage_task.get(i).getApprove_status().equals("APPROVE")) {
						setcovtask =   arr_getCoverage_task.get(i);
						setcovtask.setCov_code(passInsurance);
						setcovtask.setDepartment(ConstantValues.GROUP_NAME);
						setcovtask.setApprove_status("UPDATE");
						setcovtask.setUser_code(userId);
						setcovtask.setUpdate_time(PDFFnc.currentTimeStamp());
						wfc.doCoverageTask(setcovtask);
					}
				}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null ;
	}
	public String save_benefitsCoverage_disability(HttpServletRequest request, HttpServletResponse response) throws Exception 
	{
		try {
			String passInsurance = request.getParameter("passInsurance");
			String permanent_disability = request.getParameter("permanent_disability");
			JSONArray jsonArr_permanent_disability = new JSONArray(permanent_disability);
			ArrayList<Benefit_sched> lstBenefit_sched = new ArrayList<>();
			ArrayList<Benefit_amount> lstBenefit_amount = new ArrayList<>();
			BasePlan_SaveData_Service_OL bss = new BasePlan_SaveData_Service_OL();
			int bnf_item_id_in = 0; 
			   ArrayList<Benefit_item> lstBenefit_item = new ArrayList<>();
	        for (int i = 0; i < jsonArr_permanent_disability.length(); i++)
	        {
	        	JSONObject jsonObj_permanent_disability = jsonArr_permanent_disability.getJSONObject(i);
				
	        	String bnf_item_id = jsonObj_permanent_disability.get("bnf_id").toString().trim().isEmpty() ? "0" : jsonObj_permanent_disability.get("bnf_id").toString();
	        	//seve Benefit_item
		     
		        Benefit_item benefit_item = new Benefit_item();
		        benefit_item.setCov_code(passInsurance);
		        benefit_item.setBnf_item_id(Integer.parseInt(bnf_item_id));
		        benefit_item.setBnf_code((String) jsonObj_permanent_disability.get("pass"));//รอดึงจากหน้าบ้านใหม่
		        benefit_item.setPartic_type("PRIMARY");
		        benefit_item.setWaiting_period_unit("NONE");
		        benefit_item.setUser_code(userId);
		        benefit_item.setUpdate_time(PDFFnc.currentTimeStamp());
		        lstBenefit_item.add(benefit_item);
		        
		        bnf_item_id_in =  bss.doCoverageBenefitItem(lstBenefit_item);
		        
	        	Benefit_sched benefit_sched = new Benefit_sched();
	        	Benefit_amount benefit_amount = new Benefit_amount();	 
	        		//sched
	        		benefit_sched.setBnf_item_id(bnf_item_id_in);
	        		benefit_sched.setSched_seq(1);
	        		benefit_sched.setBeg_period_type("NONE");
	        		benefit_sched.setBeg_period(0);
	        		benefit_sched.setBeg_period_unit("NONE");
	        		benefit_sched.setEnd_period_type("NONE");
	        		benefit_sched.setEnd_period(0);
	        		benefit_sched.setEnd_period_unit("NONE");
	        		benefit_sched.setAmt_compare("NONE");
	        		benefit_sched.setUser_code(userId);
	        		benefit_sched.setUpdate_time(PDFFnc.currentTimeStamp());
	        		lstBenefit_sched.add(benefit_sched);
	        		//amount
	        		if (jsonObj_permanent_disability.get("count") != "") {
		        		BigDecimal count    = covertStringtoBigDecimal(jsonObj_permanent_disability.get("count").toString());
		        		benefit_amount.setBenef_amt(count);
		        	}
	        		benefit_amount.setBnf_item_id(bnf_item_id_in);
	        		benefit_amount.setSched_seq(1);
	        		benefit_amount.setAmt_seq(1);
	        		benefit_amount.setBenef_factor("NONE"); 
	        		benefit_amount.setSubseq_benef_factor("NONE");
	        		benefit_amount.setBenef_unit("PERCENT");
	        		benefit_amount.setBenef_scope("POLICY_LIFE");
	        	 	benefit_amount.setUser_code(userId);
	        	 	benefit_amount.setUpdate_time(PDFFnc.currentTimeStamp());
		        	lstBenefit_amount.add(benefit_amount);
	        }
	        bss.set_benefit(passInsurance,lstBenefit_sched, lstBenefit_amount);
	      //set Status //*Benz 30-08-2019
			CoverageData cd 		= new CoverageData();
			Coverage setCoverage 	=	cd.searchCoverage(passInsurance);
			setCoverage.setStatus("UPDATE");
			setCoverage.setUser_code(userId);
			setCoverage.setUpdate_time(getCurrentTimestamp());
			BasicInfoDataTab basicInfo = new BasicInfoDataTab();
			basicInfo.doCoverage(setCoverage);
		////Benz 11-09-2019 New set Status
			WorkFlowCoverage wfc = new WorkFlowCoverage();
			ArrayList<Coverage_task> arr_getCoverage_task = wfc.searchCoverageTask();
			Coverage_task  setcovtask = new Coverage_task();
			for (int i = 0; i < arr_getCoverage_task.size(); i++) {
				if ((arr_getCoverage_task.get(i).getDepartment().equals("PD") || 
						arr_getCoverage_task.get(i).getDepartment().equals("PD_Test") || 
						arr_getCoverage_task.get(i).getDepartment().equals("PD2")) && !arr_getCoverage_task.get(i).getApprove_status().equals("APPROVE")) {
					setcovtask =   arr_getCoverage_task.get(i);
					setcovtask.setCov_code(passInsurance);
					setcovtask.setDepartment(ConstantValues.GROUP_NAME);
					setcovtask.setApprove_status("UPDATE");
					setcovtask.setUser_code(userId);
					setcovtask.setUpdate_time(PDFFnc.currentTimeStamp());
					wfc.doCoverageTask(setcovtask);
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null ;
	}
	//เงินครบกำหนดสัญญา
	public String save_RefundMaturity(HttpServletRequest request, HttpServletResponse response) throws Exception 
	{
		try {
			 ///
			BasePlanBenefitOLSearchData bad = new BasePlanBenefitOLSearchData();
		     bad.searchBenefitsOL(new String [] {"2"});
		    
		     ArrayList<BenefitAccessData> arr_Benefit_item 	= bad.getListBenefitDAccessData();
		     ArrayList<Benefit> arr_Benefit 				= bad.getListExceptionAccidentPay();
		    
			 int bnf_item_id 	= 0;
			 String bnf_code 	= "";
		     if (arr_Benefit_item.size() > 0) {
		    	 bnf_item_id 	=  	arr_Benefit_item.get(0).getBenefitItem().getBnf_item_id();
		    	 bnf_code		=	arr_Benefit_item.get(0).getBenefitItem().getBnf_code(); 
		     }
		     int  distance = 0;
			ArrayList<Benefit_sched> listBenefit_sched 						= new ArrayList<>();
			ArrayList<Benefit_special_amount> listBenefit_special_amount 	= new ArrayList<>();
			String passInsurance 		= request.getParameter("passInsurance");
			String table_contrac_ol  				= request.getParameter("table_contrac_ol");
			JSONArray jsonArr_table_contrac_ol	 	= new JSONArray(table_contrac_ol);
			BasePlan_SaveData_Service_OL bss = new BasePlan_SaveData_Service_OL();
			 int bnf_item_id_in = bnf_item_id;
			 //seve Benefit_item
		        ArrayList<Benefit_item> lstBenefit_item = new ArrayList<>();
		        Benefit_item benefit_item = new Benefit_item();
		        benefit_item.setCov_code(passInsurance);
		        benefit_item.setBnf_item_id(bnf_item_id);
		        benefit_item.setBnf_code(bnf_code);//
		        benefit_item.setPartic_type("PRIMARY");
		        benefit_item.setWaiting_period_unit("NONE");
		        benefit_item.setUser_code(userId);
		        benefit_item.setUpdate_time(PDFFnc.currentTimeStamp());
		        lstBenefit_item.add(benefit_item);
		        new BasePlanBenefitsOL().doฺBenefitItem(lstBenefit_item);
		        
			ArrayList<Benefit_amount> listBenefit_amount = new ArrayList<>();
			for (int i = 0; i < jsonArr_table_contrac_ol.length(); i++) {
				 JSONObject jsonObj_table_contrac_ol = jsonArr_table_contrac_ol.getJSONObject(i);
	        	 Benefit_sched benefit_sched 					= new Benefit_sched();
	        	 //benefit_sched
	        	 benefit_sched.setBnf_item_id(bnf_item_id_in);
	        	 benefit_sched.setSched_seq(1);
	        	 benefit_sched.setBeg_period_type("NONE");
	        	 benefit_sched.setBeg_period_unit("NONE");
	        	 benefit_sched.setEnd_period_type("NONE");
	        	 benefit_sched.setEnd_period_unit("NONE");
	        	 benefit_sched.setBeg_period(0);
	        	 benefit_sched.setAmt_compare((String) jsonObj_table_contrac_ol.get("sl_max_val"));
	        	 benefit_sched.setUser_code(userId);
	        	 benefit_sched.setUpdate_time(PDFFnc.currentTimeStamp());
	        	 listBenefit_sched.add(benefit_sched);
	        	 ////////////////////////////////////////////////////////////////////
	        	 //benefit_amount
	        	 String group_contract = jsonObj_table_contrac_ol.get("group_contract").toString();
	        	 JSONArray jsonArr_group_contract = new JSONArray(group_contract);
	        	 	for (int ii = 0; ii < jsonArr_group_contract.length(); ii++) {
	        	 		 Benefit_amount benefit_amount 		= new Benefit_amount();
	        	 		 JSONObject jsonObj_group_contract = jsonArr_group_contract.getJSONObject(ii);
	        	 		 
	        	 		  benefit_amount.setSched_seq(1);
	        	 		  benefit_amount.setBnf_item_id(bnf_item_id_in);
	        	 			benefit_amount.setAmt_seq(1);	
				        	 if (jsonObj_group_contract.get("sa") != "") {
							 	BigDecimal sa    = covertStringtoBigDecimal(jsonObj_group_contract.get("sa").toString());
				        	 	benefit_amount.setBenef_amt(sa);
				        	 }
			        	 	benefit_amount.setBenef_factor((String) jsonObj_group_contract.get("sa_type"));
			        	 	benefit_amount.setSubseq_benef_factor("NONE");
			        	 	benefit_amount.setBenef_unit("PERCENT");
			        	 	benefit_amount.setBenef_scope("POLICY_LIFE");
			        	 	benefit_amount.setUser_code(userId);
			        	 	benefit_amount.setUpdate_time(PDFFnc.currentTimeStamp());
			        	 	listBenefit_amount.add(benefit_amount);
			        	 	///seq 2
			        	 	benefit_amount 		= new Benefit_amount();
			        		benefit_amount.setSched_seq(1);
			        	 	benefit_amount.setBnf_item_id(bnf_item_id_in);
			        	 	benefit_amount.setSched_seq(1);
			        	 	benefit_amount.setAmt_seq(2);
			        	 	 if (jsonObj_group_contract.get("premium") != "") {
								 	BigDecimal premium    = covertStringtoBigDecimal(jsonObj_group_contract.get("premium").toString());
					        	 	benefit_amount.setBenef_amt(premium);
			        	 	 }
			        		if (jsonObj_group_contract.get("premium_type").equals("ACCU")) {
			        	 		String include_EM = jsonObj_group_contract.get("include_EM").toString() ;
			        	 		Boolean bl_include_EM = Boolean.valueOf(include_EM);
			        	 		if (bl_include_EM == true) {
			        	 			benefit_amount.setBenef_factor("ACC_TOT_PREM");
			        	 		}else {
			        	 			benefit_amount.setBenef_factor("ACC_STD_PREM");
			        	 		}
			        	 	}else if (jsonObj_group_contract.get("premium_type").equals("YRT")) {
			        	 		String include_EM = jsonObj_group_contract.get("include_EM").toString() ;
			        	 		Boolean bl_include_EM = Boolean.valueOf(include_EM);
			        	 		if (bl_include_EM == true) {
			        	 			benefit_amount.setBenef_factor("ANN_TOT_PREM");
			        	 		}else {
			        	 			benefit_amount.setBenef_factor("ANN_STD_PREM");
			        	 		}
			        	 	}else if (jsonObj_group_contract.get("premium_type").equals("ACCU_COUPON")) {
			        	 		String include_EM = jsonObj_group_contract.get("include_EM").toString() ;
			        	 		Boolean bl_include_EM = Boolean.valueOf(include_EM);
			        	 		if (bl_include_EM == true) {
			        	 			benefit_amount.setBenef_factor("ACC_COUPON_TOT_PREM");
			        	 		}else {
			        	 			benefit_amount.setBenef_factor("ACC_COUPON_STD_PREM");
			        	 		}
			        	 	}else if (jsonObj_group_contract.get("premium_type").equals("ACCU_ANNUITY")) {
			        	 		String include_EM = jsonObj_group_contract.get("include_EM").toString() ;
			        	 		Boolean bl_include_EM = Boolean.valueOf(include_EM);
			        	 		if (bl_include_EM == true) {
			        	 			benefit_amount.setBenef_factor("ACC_ANNUITY_TOT_PREM");
			        	 		}else {
			        	 			benefit_amount.setBenef_factor("ACC_ANNUITY_STD_PREM");
			        	 		}
			        	 	}  
			        	 	benefit_amount.setSubseq_benef_factor("NONE");
			        	 	benefit_amount.setBenef_unit("PERCENT");
			        	 	benefit_amount.setBenef_scope("POLICY_LIFE");
			        	 	benefit_amount.setUser_code(userId);
			        	 	benefit_amount.setUpdate_time(PDFFnc.currentTimeStamp());
			        	 	listBenefit_amount.add(benefit_amount); 
			        	 	////////////////////////////////////////////////////
			        	 	///seq 3
			        	 	benefit_amount 		= new Benefit_amount();
			        		benefit_amount.setSched_seq(1);
			        	 	benefit_amount.setBnf_item_id(bnf_item_id_in);
			        	 	benefit_amount.setAmt_seq(3);
			        	 	if (jsonObj_group_contract.get("CV_PV") != "") {
							 	BigDecimal cv    = covertStringtoBigDecimal(jsonObj_group_contract.get("CV_PV").toString());
				        	 	benefit_amount.setBenef_amt(cv);
			        	 	}
				        	benefit_amount.setBenef_factor(jsonObj_group_contract.get("CV_PV_type").toString());
			        	 	benefit_amount.setSubseq_benef_factor("NONE");
			        	 	benefit_amount.setBenef_unit("PERCENT");
			        	 	benefit_amount.setBenef_scope("POLICY_LIFE");
			        	 	benefit_amount.setUser_code(userId);
			        	 	benefit_amount.setUpdate_time(PDFFnc.currentTimeStamp());
			        	 	listBenefit_amount.add(benefit_amount);
			        	 	//seq4
			        	 	benefit_amount 		= new Benefit_amount();
			        		benefit_amount.setSched_seq(1);
			        	 	benefit_amount.setBnf_item_id(bnf_item_id_in);
			        	 	benefit_amount.setAmt_seq(4);
							BigDecimal other    = covertStringtoBigDecimal("0");
				        	benefit_amount.setBenef_amt(other);
				        	benefit_amount.setBenef_factor(jsonObj_group_contract.get("other").toString());
			        	 	benefit_amount.setSubseq_benef_factor("NONE");
			        	 	benefit_amount.setBenef_unit("PERCENT");
			        	 	benefit_amount.setBenef_scope("POLICY_LIFE");
			        	 	benefit_amount.setUser_code(userId);
			        	 	benefit_amount.setUpdate_time(PDFFnc.currentTimeStamp());
			        		listBenefit_amount.add(benefit_amount);
					}
			}
			 BasePlanBenefits bnenefits = new BasePlanBenefits();
 			 bnenefits.doฺBenefitSched(listBenefit_sched);
 			 bnenefits.doBenefitAmount(listBenefit_amount);
 			//set Status //*Benz 30-08-2019
 			CoverageData cd 		= new CoverageData();
 			Coverage setCoverage 	=	cd.searchCoverage(passInsurance);
 			setCoverage.setStatus("UPDATE");
 			setCoverage.setUser_code(userId);
 			setCoverage.setUpdate_time(getCurrentTimestamp());
 			BasicInfoDataTab basicInfo = new BasicInfoDataTab();
 			basicInfo.doCoverage(setCoverage);
 		////Benz 11-09-2019 New set Status
 			WorkFlowCoverage wfc = new WorkFlowCoverage();
			ArrayList<Coverage_task> arr_getCoverage_task = wfc.searchCoverageTask();
			Coverage_task  setcovtask = new Coverage_task();
			for (int i = 0; i < arr_getCoverage_task.size(); i++) {
				if ((arr_getCoverage_task.get(i).getDepartment().equals("PD") || 
						arr_getCoverage_task.get(i).getDepartment().equals("PD_Test") || 
						arr_getCoverage_task.get(i).getDepartment().equals("PD2")) && !arr_getCoverage_task.get(i).getApprove_status().equals("APPROVE")) {
					setcovtask =   arr_getCoverage_task.get(i);
					setcovtask.setCov_code(passInsurance);
					setcovtask.setDepartment(ConstantValues.GROUP_NAME);
					setcovtask.setApprove_status("UPDATE");
					setcovtask.setUser_code(userId);
					setcovtask.setUpdate_time(PDFFnc.currentTimeStamp());
					wfc.doCoverageTask(setcovtask);
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null ;
	}
	//เงินคืนทุกระยะ
	public String save_Refund(HttpServletRequest request, HttpServletResponse response) throws Exception 
	{
		try {
			 ///
			BasePlanBenefitOLSearchData bad = new BasePlanBenefitOLSearchData();
		     bad.searchBenefitsOL(new String [] {"3"});
		    
		     ArrayList<BenefitAccessData> arr_Benefit_item 	= bad.getListBenefitDAccessData();
		     ArrayList<Benefit> arr_Benefit 				= bad.getListExceptionAccidentPay();
		    
			 int bnf_item_id 	= 0;
			 String bnf_code 	= "";
		     if (arr_Benefit_item.size() > 0) {
		    	 bnf_item_id 	=  	arr_Benefit_item.get(0).getBenefitItem().getBnf_item_id();
		    	 bnf_code		=	arr_Benefit_item.get(0).getBenefitItem().getBnf_code(); 
		     }
		     int  seq = 1;
		     
			ArrayList<Benefit_sched> listBenefit_sched 						= new ArrayList<>();
			ArrayList<Benefit_amount> listBenefit_amount 					= new ArrayList<>();
			ArrayList<Benefit_special_amount> listBenefit_special_amount 	= new ArrayList<>();
			String passInsurance 											= request.getParameter("passInsurance");
			String table_benefit_refund  									= request.getParameter("table_benefit_refund");
			JSONArray jsonArr_table_benefit_refund	 						= new JSONArray(table_benefit_refund);
			BasePlan_SaveData_Service_OL bss = new BasePlan_SaveData_Service_OL();
			 int bnf_item_id_in = bnf_item_id;
			 //seve Benefit_item
		        ArrayList<Benefit_item> lstBenefit_item = new ArrayList<>();
		        Benefit_item benefit_item = new Benefit_item();
		        benefit_item.setCov_code(passInsurance);
		        benefit_item.setBnf_item_id(bnf_item_id);
		        benefit_item.setBnf_code(bnf_code);//
		        benefit_item.setPartic_type("PRIMARY");
		        benefit_item.setWaiting_period_unit("NONE");
		        benefit_item.setUser_code(userId);
		        benefit_item.setUpdate_time(PDFFnc.currentTimeStamp());
		        lstBenefit_item.add(benefit_item);
		        new BasePlanBenefitsOL().doฺBenefitItem(lstBenefit_item);
		     for (int i = 0; i < jsonArr_table_benefit_refund.length(); i++) {
				 JSONObject jsonObj_table_benefit_refund 	= jsonArr_table_benefit_refund.getJSONObject(i);
				 //
				 String  benefit_sched   					= jsonObj_table_benefit_refund.get("benefit_sched").toString();
				 JSONArray jsonArr_benefit_sched	 		= new JSONArray(benefit_sched);
				 for (int ii = 0; ii < jsonArr_benefit_sched.length(); ii++) {
					 JSONObject jsonObj_benefit_sched 		= jsonArr_benefit_sched.getJSONObject(ii);
		        	 Benefit_sched benefit_sched1 			= new Benefit_sched();
		        	 //benefit_sched
		        	 benefit_sched1.setBnf_item_id(bnf_item_id_in);
		        	 
		        	 benefit_sched1.setSched_seq(seq+i);
		        	 
		        	 if (jsonObj_benefit_sched.get("type_from").toString().equals("Year")) {
		        		 benefit_sched1.setBeg_period(Integer.parseInt(jsonObj_benefit_sched.get("value_from").toString()));
		        		 benefit_sched1.setBeg_period_type("POLICY_YEAR_BEG");
		        	 }else if (jsonObj_benefit_sched.get("type_from").toString().equals("Age")){
		        		 benefit_sched1.setBeg_period(Integer.parseInt(jsonObj_benefit_sched.get("value_from").toString()));
		        		 benefit_sched1.setBeg_period_type("ATT_AGE_BEG");
		        	 } 
		        	 if (jsonObj_benefit_sched.get("type_to").toString().equals("Year")) {
		        		 benefit_sched1.setEnd_period(Integer.parseInt(jsonObj_benefit_sched.get("value_to").toString()));
		        		 benefit_sched1.setEnd_period_type("POLICY_YEAR_END");
		        	 }else if (jsonObj_benefit_sched.get("type_to").toString().equals("Age")){
		        		 benefit_sched1.setEnd_period(Integer.parseInt(jsonObj_benefit_sched.get("value_to").toString()));
		        		 benefit_sched1.setEnd_period_type("ATT_AGE_END");
		        	 } 
		        	 if (!jsonObj_benefit_sched.get("every_year").toString().equals("")) {
		        		 benefit_sched1.setFreq_period(Integer.parseInt(jsonObj_benefit_sched.get("every_year").toString()));
		        		 benefit_sched1.setFreq_period_unit("YEAR");
		        	 }
		        	 
		        	 benefit_sched1.setBeg_period_unit("NONE");
		        	 benefit_sched1.setEnd_period_unit("NONE");
		        	 benefit_sched1.setAmt_compare("NONE");
		        	 benefit_sched1.setUser_code(userId);
		        	 benefit_sched1.setUpdate_time(PDFFnc.currentTimeStamp());
		        	 listBenefit_sched.add(benefit_sched1);
				}
				 //
				 String  benefit_amount   				= jsonObj_table_benefit_refund.get("benefit_amount").toString();
				 JSONArray jsonArr_benefit_amount	 	= new JSONArray(benefit_amount);
				 for (int ii = 0; ii < jsonArr_benefit_amount.length(); ii++) {
        	 		 Benefit_amount benefit_amount1 	= new Benefit_amount();
        	 		 JSONObject jsonObj_benefit_amount 	= jsonArr_benefit_amount.getJSONObject(ii);
        	 		 	benefit_amount1.setBnf_item_id(bnf_item_id_in);
        	 		  	benefit_amount1.setSched_seq(seq+i);
        	 			benefit_amount1.setAmt_seq(seq+i);	
			        	 if (!jsonObj_benefit_amount.get("benef_amt").toString().equals("")) {
						 	BigDecimal benef_amt    = covertStringtoBigDecimal(jsonObj_benefit_amount.get("benef_amt").toString());
			        	 	benefit_amount1.setBenef_amt(benef_amt);
			        	 }
		        	 	benefit_amount1.setBenef_unit(jsonObj_benefit_amount.get("benef_unit").toString());
		        	 	benefit_amount1.setBenef_factor(jsonObj_benefit_amount.get("benef_factor").toString());
		        	 	benefit_amount1.setBenef_scope(jsonObj_benefit_amount.get("benef_scope").toString());
		        	 	benefit_amount1.setUser_code(userId);
		        	 	benefit_amount1.setUpdate_time(PDFFnc.currentTimeStamp());
		        	 	listBenefit_amount.add(benefit_amount1);
		        	 	////////////////////////////////////////////////////
				 }
			}
			 BasePlanBenefits bnenefits = new BasePlanBenefits();
 			 bnenefits.doฺBenefitSched(listBenefit_sched);
 			 bnenefits.doBenefitAmount(listBenefit_amount);
 			//set Status //*Benz 30-08-2019
 			CoverageData cd 		= new CoverageData();
 			Coverage setCoverage 	=	cd.searchCoverage(passInsurance);
 			setCoverage.setStatus("UPDATE");
 			setCoverage.setUser_code(userId);
 			setCoverage.setUpdate_time(getCurrentTimestamp());
 			BasicInfoDataTab basicInfo = new BasicInfoDataTab();
 			basicInfo.doCoverage(setCoverage);
 		////Benz 11-09-2019 New set Status
 			WorkFlowCoverage wfc = new WorkFlowCoverage();
			ArrayList<Coverage_task> arr_getCoverage_task = wfc.searchCoverageTask();
			Coverage_task  setcovtask = new Coverage_task();
			for (int i = 0; i < arr_getCoverage_task.size(); i++) {
				if ((arr_getCoverage_task.get(i).getDepartment().equals("PD") || 
						arr_getCoverage_task.get(i).getDepartment().equals("PD_Test") || 
						arr_getCoverage_task.get(i).getDepartment().equals("PD2")) && !arr_getCoverage_task.get(i).getApprove_status().equals("APPROVE")) {
					setcovtask =   arr_getCoverage_task.get(i);
					setcovtask.setCov_code(passInsurance);
					setcovtask.setDepartment(ConstantValues.GROUP_NAME);
					setcovtask.setApprove_status("UPDATE");
					setcovtask.setUser_code(userId);
					setcovtask.setUpdate_time(PDFFnc.currentTimeStamp());
					wfc.doCoverageTask(setcovtask);
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null ;
	}
	//เงินบำนาญ
		public String save_Pension(HttpServletRequest request, HttpServletResponse response) throws Exception 
		{
			try {
				 ///
				BasePlanBenefitOLSearchData bad = new BasePlanBenefitOLSearchData();
			     bad.searchBenefitsOL(new String [] {"4"});
			    
			     ArrayList<BenefitAccessData> arr_Benefit_item 	= bad.getListBenefitDAccessData();
			     ArrayList<Benefit> arr_Benefit 				= bad.getListExceptionAccidentPay();
			    
				 int bnf_item_id 	= 0;
				 String bnf_code 	= "";
			     if (arr_Benefit_item.size() > 0) {
			    	 bnf_item_id 	=  	arr_Benefit_item.get(0).getBenefitItem().getBnf_item_id();
			    	 bnf_code		=	arr_Benefit_item.get(0).getBenefitItem().getBnf_code(); 
			     }
			     int  seq = 1;
			     
				ArrayList<Benefit_sched> listBenefit_sched 						= new ArrayList<>();
				ArrayList<Benefit_amount> listBenefit_amount 					= new ArrayList<>();
				ArrayList<Benefit_special_amount> listBenefit_special_amount 	= new ArrayList<>();
				String passInsurance 											= request.getParameter("passInsurance");
				
				
/////////////////////////////////////////////////
				Coverage coverage = new BasicInfo().searchCoverage(passInsurance);
				if (!request.getParameter("beg_age").equals("")) {
					coverage.setAnnuity_payout_age(Integer.parseInt(request.getParameter("beg_age")));
				}
				if (!request.getParameter("benefit_sched").equals("")) {
					coverage.setGuar_annuity_period(Integer.parseInt(request.getParameter("benefit_sched")));
				}
				if (coverage.getMin_em() == null) {
					coverage.setMin_em(covertStringtoBigDecimal("0"));
				}
				if (coverage.getMax_em() == null) {
					coverage.setMax_em(covertStringtoBigDecimal("0"));
				}
				coverage.setUser_code(userId);
				coverage.setUpdate_time(PDFFnc.currentTimeStamp());
		          
		        new BasePlanBasicInfo().doCoverage(coverage);
/////////////////////////////////////////////////
				String table_tbl_coverage_pension  									= request.getParameter("tbl_coverage_pension");
				
				JSONArray jsonArr_tbl_coverage_pension	 						= new JSONArray(table_tbl_coverage_pension);
				BasePlan_SaveData_Service_OL bss = new BasePlan_SaveData_Service_OL();
				 int bnf_item_id_in = bnf_item_id;
				 //seve Benefit_item
			        ArrayList<Benefit_item> lstBenefit_item = new ArrayList<>();
			        Benefit_item benefit_item = new Benefit_item();
			        benefit_item.setCov_code(passInsurance);
			        benefit_item.setBnf_item_id(bnf_item_id);
			        benefit_item.setBnf_code(bnf_code);//
			        benefit_item.setPartic_type("PRIMARY");
			        benefit_item.setWaiting_period_unit("NONE");
			        benefit_item.setUser_code(userId);
			        benefit_item.setUpdate_time(PDFFnc.currentTimeStamp());
			        lstBenefit_item.add(benefit_item);
			        new BasePlanBenefitsOL().doฺBenefitItem(lstBenefit_item);
			        
			        if (jsonArr_tbl_coverage_pension.length() > 0) {
			        	for (int i = 0; i < jsonArr_tbl_coverage_pension.length(); i++) {
							 JSONObject jsonObj_tbl_coverage_pension	= jsonArr_tbl_coverage_pension.getJSONObject(i);
							 //
							 String  benefit_sched   					= jsonObj_tbl_coverage_pension.get("benefit_sched").toString();
							 JSONArray jsonArr_benefit_sched	 		= new JSONArray(benefit_sched);
							 for (int ii = 0; ii < jsonArr_benefit_sched.length(); ii++) {
								 JSONObject jsonObj_benefit_sched 		= jsonArr_benefit_sched.getJSONObject(ii);
					        	 Benefit_sched benefit_sched1 			= new Benefit_sched();
					        	 //benefit_sched
					        	 benefit_sched1.setBnf_item_id(bnf_item_id_in);
					        	 
					        	 benefit_sched1.setSched_seq(seq+i);
					        	 
					        	 if (jsonObj_benefit_sched.get("type_from").toString().equals("Year")) {
					        		 benefit_sched1.setBeg_period(Integer.parseInt(jsonObj_benefit_sched.get("value_from").toString()));
					        		 benefit_sched1.setBeg_period_type("POLICY_YEAR_BEG");
					        	 }else if (jsonObj_benefit_sched.get("type_from").toString().equals("Age")){
					        		 benefit_sched1.setBeg_period(Integer.parseInt(jsonObj_benefit_sched.get("value_from").toString()));
					        		 benefit_sched1.setBeg_period_type("ATT_AGE_BEG");
					        	 } 
					        	 if (jsonObj_benefit_sched.get("type_to").toString().equals("Year")) {
					        		 benefit_sched1.setEnd_period(Integer.parseInt(jsonObj_benefit_sched.get("value_to").toString()));
					        		 benefit_sched1.setEnd_period_type("POLICY_YEAR_END");
					        	 }else if (jsonObj_benefit_sched.get("type_to").toString().equals("Age")){
					        		 benefit_sched1.setEnd_period(Integer.parseInt(jsonObj_benefit_sched.get("value_to").toString()));
					        		 benefit_sched1.setEnd_period_type("ATT_AGE_END");
					        	 } 
					        	 if (!jsonObj_benefit_sched.get("every_year").toString().equals("")) {
					        		 benefit_sched1.setFreq_period(Integer.parseInt(jsonObj_benefit_sched.get("every_year").toString()));
					        		 benefit_sched1.setFreq_period_unit("YEAR");
					        	 }
					        	 
					        	 benefit_sched1.setBeg_period_unit("NONE");
					        	 benefit_sched1.setEnd_period_unit("NONE");
					        	 benefit_sched1.setAmt_compare("NONE");
					        	 benefit_sched1.setUser_code(userId);
					        	 benefit_sched1.setUpdate_time(PDFFnc.currentTimeStamp());
					        	 listBenefit_sched.add(benefit_sched1);
							}
							 //
							 String  benefit_amount   				= jsonObj_tbl_coverage_pension.get("benefit_amount").toString();
							 JSONArray jsonArr_benefit_amount	 	= new JSONArray(benefit_amount);
							 for (int ii = 0; ii < jsonArr_benefit_amount.length(); ii++) {
			        	 		 Benefit_amount benefit_amount1 	= new Benefit_amount();
			        	 		 JSONObject jsonObj_benefit_amount 	= jsonArr_benefit_amount.getJSONObject(ii);
			        	 		 	benefit_amount1.setBnf_item_id(bnf_item_id_in);
			        	 		  	benefit_amount1.setSched_seq(seq+i);
			        	 			benefit_amount1.setAmt_seq(seq+i);	
						        	 if (!jsonObj_benefit_amount.get("benef_amt").toString().equals("")) {
									 	BigDecimal benef_amt    = covertStringtoBigDecimal(jsonObj_benefit_amount.get("benef_amt").toString());
						        	 	benefit_amount1.setBenef_amt(benef_amt);
						        	 }
					        	 	benefit_amount1.setBenef_unit(jsonObj_benefit_amount.get("benef_unit").toString());
					        	 	benefit_amount1.setBenef_factor(jsonObj_benefit_amount.get("benef_factor").toString());
					        	 	benefit_amount1.setBenef_scope("NONE");
					        	 	benefit_amount1.setUser_code(userId);
					        	 	benefit_amount1.setUpdate_time(PDFFnc.currentTimeStamp());
					        	 	listBenefit_amount.add(benefit_amount1);
					        	 	////////////////////////////////////////////////////
							 }
						}
			        }else {
			        	 listBenefit_sched 						= new ArrayList<>();
						 listBenefit_amount 					= new ArrayList<>();
						
			        }
				 BasePlanBenefits bnenefits = new BasePlanBenefits();
	 			 bnenefits.doฺBenefitSched(listBenefit_sched);
	 			 bnenefits.doBenefitAmount(listBenefit_amount);
	 			//set Status //*Benz 30-08-2019
	 			CoverageData cd 		= new CoverageData();
	 			Coverage setCoverage 	=	cd.searchCoverage(passInsurance);
	 			setCoverage.setStatus("UPDATE");
	 			setCoverage.setUser_code(userId);
	 			setCoverage.setUpdate_time(getCurrentTimestamp());
	 			BasicInfoDataTab basicInfo = new BasicInfoDataTab();
	 			basicInfo.doCoverage(setCoverage);
	 		////Benz 11-09-2019 New set Status
	 			WorkFlowCoverage wfc = new WorkFlowCoverage();
				ArrayList<Coverage_task> arr_getCoverage_task = wfc.searchCoverageTask();
				Coverage_task  setcovtask = new Coverage_task();
				for (int i = 0; i < arr_getCoverage_task.size(); i++) {
					if ((arr_getCoverage_task.get(i).getDepartment().equals("PD") || 
							arr_getCoverage_task.get(i).getDepartment().equals("PD_Test") || 
							arr_getCoverage_task.get(i).getDepartment().equals("PD2")) && !arr_getCoverage_task.get(i).getApprove_status().equals("APPROVE")) {
						setcovtask =   arr_getCoverage_task.get(i);
						setcovtask.setCov_code(passInsurance);
						setcovtask.setDepartment(ConstantValues.GROUP_NAME);
						setcovtask.setApprove_status("UPDATE");
						setcovtask.setUser_code(userId);
						setcovtask.setUpdate_time(PDFFnc.currentTimeStamp());
						wfc.doCoverageTask(setcovtask);
					}
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
			return null ;
		}
		//กองทุนรักษาพยาบาล
		public String save_MedicalFund(HttpServletRequest request, HttpServletResponse response) throws Exception 
		{
			try {
				 ///
				BasePlanBenefitOLSearchData bad = new BasePlanBenefitOLSearchData();
			     bad.searchBenefitsOL(new String [] {"5"});
			    
			     ArrayList<BenefitAccessData> arr_Benefit_item 	= bad.getListBenefitDAccessData();
			     ArrayList<Benefit> arr_Benefit 				= bad.getListExceptionAccidentPay();
			    
				 int bnf_item_id 	= 0;
				 String bnf_code 	= "";
			     if (arr_Benefit_item.size() > 0) {
			    	 bnf_item_id 	=  	arr_Benefit_item.get(0).getBenefitItem().getBnf_item_id();
			    	 bnf_code		=	arr_Benefit_item.get(0).getBenefitItem().getBnf_code(); 
			     }
			     int  seq = 1;
			     
				ArrayList<Benefit_sched> listBenefit_sched 						= new ArrayList<>();
				ArrayList<Benefit_amount> listBenefit_amount 					= new ArrayList<>();
				ArrayList<Benefit_special_amount> listBenefit_special_amount 	= new ArrayList<>();
				String passInsurance 											= request.getParameter("passInsurance");
				String medical  									= request.getParameter("medical");
				JSONArray jsonArr_medical	 						= new JSONArray(medical);
				BasePlan_SaveData_Service_OL bss = new BasePlan_SaveData_Service_OL();
				 int bnf_item_id_in = bnf_item_id;
				 //seve Benefit_item
			        ArrayList<Benefit_item> lstBenefit_item = new ArrayList<>();
			        Benefit_item benefit_item = new Benefit_item();
			        benefit_item.setCov_code(passInsurance);
			        benefit_item.setBnf_item_id(bnf_item_id);
			        benefit_item.setBnf_code(bnf_code);//
			        benefit_item.setPartic_type("PRIMARY");
			        benefit_item.setWaiting_period_unit("NONE");
			        benefit_item.setUser_code(userId);
			        benefit_item.setUpdate_time(PDFFnc.currentTimeStamp());
			        lstBenefit_item.add(benefit_item);
			        new BasePlanBenefitsOL().doฺBenefitItem(lstBenefit_item);
			        
			     for (int i = 0; i < jsonArr_medical.length(); i++) {
					 JSONObject jsonObj_medical 				= jsonArr_medical.getJSONObject(i);
					 //
					 String  benefit_sched   					= jsonObj_medical.get("benefit_sched").toString();
					 JSONArray jsonArr_benefit_sched	 		= new JSONArray(benefit_sched);
					 for (int ii = 0; ii < jsonArr_benefit_sched.length(); ii++) {
						 JSONObject jsonObj_benefit_sched 		= jsonArr_benefit_sched.getJSONObject(ii);
			        	 Benefit_sched benefit_sched1 			= new Benefit_sched();
			        	 //benefit_sched
			        	 benefit_sched1.setBnf_item_id(bnf_item_id_in);
			        	 
			        	 benefit_sched1.setSched_seq(seq+i);
			        	 
			        	 if (jsonObj_benefit_sched.get("type_from").toString().equals("Year")) {
			        		 benefit_sched1.setBeg_period(Integer.parseInt(jsonObj_benefit_sched.get("value_from").toString()));
			        		 benefit_sched1.setBeg_period_type("POLICY_YEAR_BEG");
			        	 }else if (jsonObj_benefit_sched.get("type_from").toString().equals("Age")){
			        		 benefit_sched1.setBeg_period(Integer.parseInt(jsonObj_benefit_sched.get("value_from").toString()));
			        		 benefit_sched1.setBeg_period_type("ATT_AGE_BEG");
			        	 } 
			        	 if (jsonObj_benefit_sched.get("type_to").toString().equals("Year")) {
			        		 benefit_sched1.setEnd_period(Integer.parseInt(jsonObj_benefit_sched.get("value_to").toString()));
			        		 benefit_sched1.setEnd_period_type("POLICY_YEAR_END");
			        	 }else if (jsonObj_benefit_sched.get("type_to").toString().equals("Age")){
			        		 benefit_sched1.setEnd_period(Integer.parseInt(jsonObj_benefit_sched.get("value_to").toString()));
			        		 benefit_sched1.setEnd_period_type("ATT_AGE_END");
			        	 } 
			        	 if (!jsonObj_benefit_sched.get("every_year").toString().equals("")) {
			        		 benefit_sched1.setFreq_period(Integer.parseInt(jsonObj_benefit_sched.get("every_year").toString()));
			        		 benefit_sched1.setFreq_period_unit("YEAR");
			        	 }
			        	 
			        	 benefit_sched1.setBeg_period_unit("NONE");
			        	 benefit_sched1.setEnd_period_unit("NONE");
			        	 benefit_sched1.setAmt_compare("NONE");
			        	 benefit_sched1.setUser_code(userId);
			        	 benefit_sched1.setUpdate_time(PDFFnc.currentTimeStamp());
			        	 listBenefit_sched.add(benefit_sched1);
					}
					 //
					 String  benefit_amount   				= jsonObj_medical.get("benefit_amount").toString();
					 JSONArray jsonArr_benefit_amount	 	= new JSONArray(benefit_amount);
					 for (int ii = 0; ii < jsonArr_benefit_amount.length(); ii++) {
	        	 		 Benefit_amount benefit_amount1 	= new Benefit_amount();
	        	 		 JSONObject jsonObj_benefit_amount 	= jsonArr_benefit_amount.getJSONObject(ii);
	        	 		 	benefit_amount1.setBnf_item_id(bnf_item_id_in);
	        	 		  	benefit_amount1.setSched_seq(seq+i);
	        	 			benefit_amount1.setAmt_seq(seq+i);	
				        	 if (!jsonObj_benefit_amount.get("benef_amt").toString().equals("")) {
							 	BigDecimal benef_amt    = covertStringtoBigDecimal(jsonObj_benefit_amount.get("benef_amt").toString());
				        	 	benefit_amount1.setBenef_amt(benef_amt);
				        	 }
			        	 	benefit_amount1.setBenef_unit(jsonObj_benefit_amount.get("benef_unit").toString());
			        	 	benefit_amount1.setBenef_factor(jsonObj_benefit_amount.get("benef_factor").toString());
			        	 	benefit_amount1.setBenef_scope(jsonObj_benefit_amount.get("benef_scope").toString());
			        	 	benefit_amount1.setUser_code(userId);
			        	 	benefit_amount1.setUpdate_time(PDFFnc.currentTimeStamp());
			        	 	listBenefit_amount.add(benefit_amount1);
			        	 	////////////////////////////////////////////////////
					 }
				}
				 BasePlanBenefits bnenefits = new BasePlanBenefits();
	 			 bnenefits.doฺBenefitSched(listBenefit_sched);
	 			 bnenefits.doBenefitAmount(listBenefit_amount);
	 			//set Status //*Benz 30-08-2019
	 			CoverageData cd 		= new CoverageData();
	 			Coverage setCoverage 	=	cd.searchCoverage(passInsurance);
	 			setCoverage.setStatus("UPDATE");
	 			setCoverage.setUser_code(userId);
	 			setCoverage.setUpdate_time(getCurrentTimestamp());
	 			BasicInfoDataTab basicInfo = new BasicInfoDataTab();
	 			basicInfo.doCoverage(setCoverage);
	 		////Benz 11-09-2019 New set Status
	 			WorkFlowCoverage wfc = new WorkFlowCoverage();
				ArrayList<Coverage_task> arr_getCoverage_task = wfc.searchCoverageTask();
				Coverage_task  setcovtask = new Coverage_task();
				for (int i = 0; i < arr_getCoverage_task.size(); i++) {
					if ((arr_getCoverage_task.get(i).getDepartment().equals("PD") || 
							arr_getCoverage_task.get(i).getDepartment().equals("PD_Test") || 
							arr_getCoverage_task.get(i).getDepartment().equals("PD2")) && !arr_getCoverage_task.get(i).getApprove_status().equals("APPROVE")) {
						setcovtask =   arr_getCoverage_task.get(i);
						setcovtask.setCov_code(passInsurance);
						setcovtask.setDepartment(ConstantValues.GROUP_NAME);
						setcovtask.setApprove_status("UPDATE");
						setcovtask.setUser_code(userId);
						setcovtask.setUpdate_time(PDFFnc.currentTimeStamp());
						wfc.doCoverageTask(setcovtask);
					}
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
			return "save_MedicalFund >> Success";
		}
	//เงินปันผล
		public String save_Dividend(HttpServletRequest request, HttpServletResponse response) throws Exception 
		{
			try {
				BasePlanBenefitOLSearchData bad = new BasePlanBenefitOLSearchData();
				bad.searchBenefitsOL(new String [] {"6"});
					    
				ArrayList<BenefitAccessData> arr_Benefit_item 	= bad.getListBenefitDAccessData();
				ArrayList<Benefit> arr_Benefit 				= bad.getListExceptionAccidentPay();
					    
				int bnf_item_id_01 	= 0;
				String bnf_code_01 	= "";
				int bnf_item_id_02 	= 0;
				String bnf_code_02	= "";
					if (arr_Benefit_item.size() > 0) {
						for (int i = 0; i < arr_Benefit_item.size(); i++) {
							if (i == 0) {
								bnf_item_id_01 	=  	arr_Benefit_item.get(i).getBenefitItem().getBnf_item_id();
								bnf_code_01		=	arr_Benefit_item.get(i).getBenefitItem().getBnf_code(); 
							}else {
								bnf_item_id_02 	=  	arr_Benefit_item.get(i).getBenefitItem().getBnf_item_id();
								bnf_code_02		=	arr_Benefit_item.get(i).getBenefitItem().getBnf_code(); 
							}
						}
					}
				int  seq = 1;
					     
				ArrayList<Benefit_sched> listBenefit_sched_1 						= new ArrayList<>();
				ArrayList<Benefit_amount> listBenefit_amount_1 					= new ArrayList<>();
				ArrayList<Benefit_sched> listBenefit_sched_2 						= new ArrayList<>();
				ArrayList<Benefit_amount> listBenefit_amount_2 					= new ArrayList<>();
				ArrayList<Benefit_special_amount> listBenefit_special_amount 	= new ArrayList<>();
				String passInsurance 											= request.getParameter("passInsurance");
				String tbl_guarantee  											= request.getParameter("tbl_guarantee");
				JSONArray jsonArr_tbl_guarantee	 								= new JSONArray(tbl_guarantee);
				//////เงินปันผลจำนวนหนึ่ง/////////////////////////
				String chk_non_guarantee  			= request.getParameter("chk_non_guarantee");
				Boolean boolean_chk_non_guarantee 	= Boolean.valueOf(chk_non_guarantee);
				String chk_guarantee  				= request.getParameter("chk_guarantee");
				Boolean boolean_chk_guarantee 		= Boolean.valueOf(chk_guarantee);
				
				if (boolean_chk_non_guarantee == true) {
					String dividend_type  				= request.getParameter("dividend_type");
					String insurance_age  				= request.getParameter("insurance_age");
					String formular_count  				= request.getParameter("formular_count");
					String insurance_age_amt  			= request.getParameter("insurance_age_amt");
					
					int bnf_item_id_in = bnf_item_id_01;
					//seve Benefit_item
					ArrayList<Benefit_item> lstBenefit_item = new ArrayList<>();
					Benefit_item benefit_item = new Benefit_item();
					benefit_item.setCov_code(passInsurance);
					benefit_item.setBnf_item_id(bnf_item_id_01);
					benefit_item.setBnf_code(bnf_code_01);//
					benefit_item.setPartic_type("PRIMARY");
					benefit_item.setWaiting_period_unit("NONE");
					benefit_item.setUser_code(userId);
					benefit_item.setUpdate_time(PDFFnc.currentTimeStamp());
					lstBenefit_item.add(benefit_item);
					new BasePlanBenefitsOL().doฺBenefitItem(lstBenefit_item);
					
					Benefit_sched benefit_sched1 			= new Benefit_sched();
		        	 //benefit_sched
		        	 benefit_sched1.setBnf_item_id(bnf_item_id_in);
		        	 
		        	 benefit_sched1.setSched_seq(1);
		        	 benefit_sched1.setBeg_period_type(dividend_type);
		        	 benefit_sched1.setFormula_id(Integer.parseInt(formular_count));
		        	 benefit_sched1.setBeg_period(Integer.parseInt(insurance_age_amt));
		        	 benefit_sched1.setBeg_period_unit("YEAR");
		        	 benefit_sched1.setEnd_period_type("NONE");
		        	 benefit_sched1.setEnd_period_unit("NONE");
		        	 benefit_sched1.setAmt_compare("NONE");
		        	 benefit_sched1.setUser_code(userId);
		        	 benefit_sched1.setUpdate_time(PDFFnc.currentTimeStamp());
		        	 listBenefit_sched_1.add(benefit_sched1);
		        	 /////////benefit_amount
		        	 Benefit_amount benefit_amount1 	= new Benefit_amount();
        	 		 	benefit_amount1.setBnf_item_id(bnf_item_id_in);
        	 		  	benefit_amount1.setSched_seq(1);
        	 			benefit_amount1.setAmt_seq(1);	
		        	 	benefit_amount1.setBenef_unit("NONE");
		        	 	benefit_amount1.setBenef_factor("NONE");
		        	 	benefit_amount1.setBenef_scope(insurance_age);
		        	 	benefit_amount1.setUser_code(userId);
		        	 	benefit_amount1.setUpdate_time(PDFFnc.currentTimeStamp());
		        	 	listBenefit_amount_1.add(benefit_amount1);
				}
				BasePlanBenefitsOL bnenefits = new BasePlanBenefitsOL();
	 			 bnenefits.doฺBenefitSched(bnf_item_id_01,listBenefit_sched_1);
	 			 bnenefits.doBenefitAmount(listBenefit_amount_1);
				////////////////////////////////เงินปันผลที่รับรองการจ่าย (Guarantee)
				if (boolean_chk_guarantee == true) {
					String  is_from_file   						= request.getParameter("is_from_file");
					Boolean boolean_is_from_file 				= Boolean.valueOf(is_from_file);
					 
					int bnf_item_id_in = bnf_item_id_02;
					//seve Benefit_item
					ArrayList<Benefit_item> lstBenefit_item = new ArrayList<>();
					Benefit_item benefit_item = new Benefit_item();
					benefit_item.setCov_code(passInsurance);
					benefit_item.setBnf_item_id(bnf_item_id_02);
					benefit_item.setBnf_code(bnf_code_02);//
					benefit_item.setIs_from_file(boolean_is_from_file);
					benefit_item.setPartic_type("PRIMARY");
					benefit_item.setWaiting_period_unit("NONE");
					benefit_item.setUser_code(userId);
					benefit_item.setUpdate_time(PDFFnc.currentTimeStamp());
					lstBenefit_item.add(benefit_item);
					new BasePlanBenefitsOL().doฺBenefitItem(lstBenefit_item);
					if (jsonArr_tbl_guarantee.length() > 0) {
						for (int i = 0; i < jsonArr_tbl_guarantee.length(); i++) {
							 JSONObject jsonObj_tbl_guarantee 			= jsonArr_tbl_guarantee.getJSONObject(i);
							 String  benefit_sched   					= jsonObj_tbl_guarantee.get("benefit_sched").toString();
							 JSONArray jsonArr_benefit_sched	 		= new JSONArray(benefit_sched);
							 for (int ii = 0; ii < jsonArr_benefit_sched.length(); ii++) {
								 JSONObject jsonObj_benefit_sched 		= jsonArr_benefit_sched.getJSONObject(ii);
					        	 Benefit_sched benefit_sched1 			= new Benefit_sched();
					        	 //benefit_sched
					        	 benefit_sched1.setBnf_item_id(bnf_item_id_in);
					        	 
					        	 benefit_sched1.setSched_seq(seq+i);
					        	 benefit_sched1.setBeg_period_type(jsonObj_benefit_sched.get("dividend_type_tbl").toString());
					        	 if (!jsonObj_benefit_sched.get("year").toString().equals("")) {
						        	 benefit_sched1.setBeg_period(Integer.parseInt(jsonObj_benefit_sched.get("year").toString()));
					        	 }
					        	 benefit_sched1.setBeg_period_unit("NONE");
					        	 benefit_sched1.setEnd_period_type("NONE");
					        	 benefit_sched1.setEnd_period_unit("NONE");
					        	 benefit_sched1.setAmt_compare("NONE");
					        	 benefit_sched1.setUser_code(userId);
					        	 benefit_sched1.setUpdate_time(PDFFnc.currentTimeStamp());
					        	 listBenefit_sched_2.add(benefit_sched1);
							}
							 //
							 String  benefit_amount   				= jsonObj_tbl_guarantee.get("benefit_amount").toString();
							 JSONArray jsonArr_benefit_amount	 	= new JSONArray(benefit_amount);
							 for (int ii = 0; ii < jsonArr_benefit_amount.length(); ii++) {
			        	 		 Benefit_amount benefit_amount1 	= new Benefit_amount();
			        	 		 JSONObject jsonObj_benefit_amount 	= jsonArr_benefit_amount.getJSONObject(ii);
			        	 		 	benefit_amount1.setBnf_item_id(bnf_item_id_in);
			        	 		  	benefit_amount1.setSched_seq(seq+i);
			        	 			benefit_amount1.setAmt_seq(seq+i);	
						        	 if (!jsonObj_benefit_amount.get("benef_amt").toString().equals("")) {
									 	BigDecimal benef_amt    = covertStringtoBigDecimal(jsonObj_benefit_amount.get("benef_amt").toString());
						        	 	benefit_amount1.setBenef_amt(benef_amt);
						        	 }
					        	 	benefit_amount1.setBenef_unit(jsonObj_benefit_amount.get("benef_unit").toString());
					        	 	benefit_amount1.setBenef_factor(jsonObj_benefit_amount.get("benef_factor").toString());
					        	 	benefit_amount1.setBenef_scope(jsonObj_benefit_amount.get("benef_scope").toString());
					        	 	benefit_amount1.setUser_code(userId);
					        	 	benefit_amount1.setUpdate_time(PDFFnc.currentTimeStamp());
					        	 	listBenefit_amount_2.add(benefit_amount1);
					        	 	////////////////////////////////////////////////////
							 }
						}
					}
				}
	 			 		bnenefits.doฺBenefitSched(bnf_item_id_02,listBenefit_sched_2);
			 			 bnenefits.doBenefitAmount(listBenefit_amount_2);
			 	//////save////File/////
	//////////////////////Benz06-08-2019 ///////////////////////
			BasePlan_SaveData_Service_OL settoService 	= new BasePlan_SaveData_Service_OL ();
						 String choose_file				= request.getParameter("choose_file");
					     JSONArray jsonArr_choose_file 	= new JSONArray(choose_file);
					     ArrayList<Rate_layout> lsRate_pension = new ArrayList<>();
						 for (int i = 0; i < jsonArr_choose_file.length(); i++)
					        {
					        	 JSONObject jsonObj_choose_file = jsonArr_choose_file.getJSONObject(i);
					        	 Rate_layout rate_layout = new Rate_layout();
						        	rate_layout.setCov_code(passInsurance);
						        	rate_layout.setRate_cat_id(jsonObj_choose_file.getInt("rate_cat_id"));
						        
						        	rate_layout.setAge_band_code(jsonObj_choose_file.getString("age_band_code"));
						        	rate_layout.setRate_layout_id(jsonObj_choose_file.getInt("rate_layout_id"));
						        	rate_layout.setFile_id(jsonObj_choose_file.getInt("file_id"));
						        	
						        	// FIX VALUE
						        	rate_layout.setUser_code(userId);
						        	rate_layout.setUpdate_time(getCurrentTimestamp());
						        	///New
						        	rate_layout.setSub_code(jsonObj_choose_file.getString("rate_type"));
						        	lsRate_pension.add(rate_layout);
					        }
					     settoService.setRate_layout_pension(lsRate_pension);
					   //set Status //*Benz 30-08-2019
							CoverageData cd 		= new CoverageData();
							Coverage setCoverage 	=	cd.searchCoverage(passInsurance);
							setCoverage.setStatus("UPDATE");
							setCoverage.setUser_code(userId);
							setCoverage.setUpdate_time(getCurrentTimestamp());
							BasicInfoDataTab basicInfo = new BasicInfoDataTab();
							basicInfo.doCoverage(setCoverage);
						////Benz 11-09-2019 New set Status
							WorkFlowCoverage wfc = new WorkFlowCoverage();
							ArrayList<Coverage_task> arr_getCoverage_task = wfc.searchCoverageTask();
							Coverage_task  setcovtask = new Coverage_task();
							for (int i = 0; i < arr_getCoverage_task.size(); i++) {
								if ((arr_getCoverage_task.get(i).getDepartment().equals("PD") || 
										arr_getCoverage_task.get(i).getDepartment().equals("PD_Test") || 
										arr_getCoverage_task.get(i).getDepartment().equals("PD2")) && !arr_getCoverage_task.get(i).getApprove_status().equals("APPROVE")) {
									setcovtask =   arr_getCoverage_task.get(i);
									setcovtask.setCov_code(passInsurance);
									setcovtask.setDepartment(ConstantValues.GROUP_NAME);
									setcovtask.setApprove_status("UPDATE");
									setcovtask.setUser_code(userId);
									setcovtask.setUpdate_time(PDFFnc.currentTimeStamp());
									wfc.doCoverageTask(setcovtask);
								}
							}
					} catch (Exception e) {
						e.printStackTrace();
					}
					return "save_Dividend >> Success";
				}
		public String check_Approved(HttpServletRequest request, HttpServletResponse response) throws Exception 
		{
			String passInsurance 		= request.getParameter("passInsurance");
			String remark_noApproved 	= request.getParameter("remark_noApproved");
			String remark_update 		= request.getParameter("remark_update");
			CoverageData cd 	 		= new CoverageData();
			Coverage setCoverage 		= cd.searchCoverage(passInsurance);
			String status				= request.getParameter("status");
			String setstatus			= "";
			String groupName 			= request.getParameter("groupName");
			ConstantValues.GROUP_NAME 	= groupName;
			
			if (status.equals("request_for_approve")) {
				setstatus	= "REQUEST_FOR_APPROVE";
			////Benz 11-09-2019
				if (ConstantValues.GROUP_NAME.equals("P03") || 
						ConstantValues.GROUP_NAME.equals("RP") || 
						ConstantValues.GROUP_NAME.equals("RP_Test")) 
				{
					WorkFlowCoverage wfc = new WorkFlowCoverage();
					ArrayList<Coverage_task> arr_getCoverage_task = wfc.searchCoverageTask();
					ArrayList<Coverage_task> arr_Coverage_task = new ArrayList<>();
					Coverage_task  setcovtask = new Coverage_task();
					for (int i = 0; i < arr_getCoverage_task.size(); i++) {
						if (arr_getCoverage_task.get(i).getDepartment().equals("P03") || 
								arr_getCoverage_task.get(i).getDepartment().equals("RP") || 
								arr_getCoverage_task.get(i).getDepartment().equals("RP_Test")) {
							setcovtask =   arr_getCoverage_task.get(i);
							setcovtask.setCov_code(passInsurance);
							setcovtask.setDepartment(ConstantValues.GROUP_NAME);
							setcovtask.setApprove_status(setstatus);
							setcovtask.setUser_code(userId);
							setcovtask.setUpdate_time(PDFFnc.currentTimeStamp());
						}
					}
					wfc.doCoverageTask(setcovtask);		
					/////////////  set Status TO coverage_request
					ArrayList<Coverage_request> arr_getCoverage_request = wfc.searchCoverageRequest();
					int row = arr_getCoverage_request.size();
					if (row == 0) {
						row = 1;
					}else{
						row = row+1;
					} 
					Coverage_request setcovrequest = new Coverage_request();
					setcovrequest.setCov_code(passInsurance);
					setcovrequest.setSeq(row);
					setcovrequest.setRequest_status("REQUEST");
					setcovrequest.setRequest_type("A");
					setcovrequest.setRequest_user_code(userId);
					setcovrequest.setRequest_time(PDFFnc.currentTimeStamp());			
					wfc.doCoverageRequest(setcovrequest);
				}else {

					/////////////set Status TO Coverage_task
					WorkFlowCoverage wfc = new WorkFlowCoverage();
					ArrayList<Coverage_task> arr_getCoverage_task = wfc.searchCoverageTask();
					Coverage_task  setcovtask = null;
					for (int i = 0; i < arr_getCoverage_task.size(); i++) {
						if (arr_getCoverage_task.get(i).getDepartment().equals("PD") || 
								arr_getCoverage_task.get(i).getDepartment().equals("PD_Test") || 
								arr_getCoverage_task.get(i).getDepartment().equals("PD2")) {
							setcovtask =   arr_getCoverage_task.get(i);
							setcovtask.setCov_code(passInsurance);
							setcovtask.setDepartment(ConstantValues.GROUP_NAME);
							setcovtask.setApprove_status(setstatus);
							setcovtask.setUser_code(userId);
							setcovtask.setUpdate_time(PDFFnc.currentTimeStamp());
						}
					}
					wfc.doCoverageTask(setcovtask);		
					/////////////set Status TO coverage.coverage
					setCoverage.setStatus(setstatus);
					setCoverage.setUser_code(userId);
					setCoverage.setUpdate_time(PDFFnc.currentTimeStamp());
					
					BasicInfoDataTab bd = new BasicInfoDataTab();
					bd.doCoverage(setCoverage);
					/////////////  set Status TO coverage_request
					ArrayList<Coverage_request> arr_getCoverage_request = wfc.searchCoverageRequest();
					int row = arr_getCoverage_request.size();
					if (row == 0) {
						row = 1;
					}else{
						row = row+1;
					} 
					Coverage_request setcovrequest = new Coverage_request();
					setcovrequest.setCov_code(passInsurance);
					setcovrequest.setSeq(row);
					setcovrequest.setRequest_status("REQUEST");
					setcovrequest.setRequest_type("A");
					setcovrequest.setRequest_user_code(userId);
					setcovrequest.setRequest_time(PDFFnc.currentTimeStamp());			
					wfc.doCoverageRequest(setcovrequest);
				}
				
			}else if (status.equals("approved")) {
				setstatus	= "APPROVED";
			////Benz 11-09-2019v
				if (ConstantValues.GROUP_NAME.equals("P03") || 
						ConstantValues.GROUP_NAME.equals("RP") || 
						ConstantValues.GROUP_NAME.equals("RP_Test")) 
				{
					WorkFlowCoverage wfc = new WorkFlowCoverage();
					ArrayList<Coverage_task> arr_getCoverage_task = wfc.searchCoverageTask();
					Coverage_task  setcovtask = new Coverage_task();
					for (int i = 0; i < arr_getCoverage_task.size(); i++) {
						if ((arr_getCoverage_task.get(i).getDepartment().equals("P03") || 
								arr_getCoverage_task.get(i).getDepartment().equals("RP") || 
								arr_getCoverage_task.get(i).getDepartment().equals("RP_Test")) && arr_getCoverage_task.get(i).getApprove_status().equals("REQUEST_UPDATE")) 
						{
								setcovtask =   arr_getCoverage_task.get(i);
								setcovtask.setCov_code(passInsurance);
								setcovtask.setDepartment(ConstantValues.GROUP_NAME);
								setcovtask.setApprove_status("UPDATE");
								setcovtask.setUser_code(userId);
								setcovtask.setUpdate_time(PDFFnc.currentTimeStamp());
						}else if ((arr_getCoverage_task.get(i).getDepartment().equals("P03") || 
								arr_getCoverage_task.get(i).getDepartment().equals("RP") || 
								arr_getCoverage_task.get(i).getDepartment().equals("RP_Test"))
								&& !arr_getCoverage_task.get(i).getApprove_status().equals("REQUEST_UPDATE")) 
						{
							setcovtask =   arr_getCoverage_task.get(i);
							setcovtask.setCov_code(passInsurance);
							setcovtask.setDepartment(ConstantValues.GROUP_NAME);
							setcovtask.setApprove_status(setstatus);
							setcovtask.setUser_code(userId);
							setcovtask.setUpdate_time(PDFFnc.currentTimeStamp());
						}
					}
					wfc.doCoverageTask(setcovtask);		
					/////////////  set Status TO coverage_request
					ArrayList<Coverage_request> arr_getCoverage_request = wfc.searchCoverageRequest();
					Coverage_request setcovrequest = null;
					for (int i = 0; i < arr_getCoverage_request.size(); i++) {
						if (arr_getCoverage_request.get(i).getRequest_status().equals("REQUEST") && arr_getCoverage_request.get(i).getRequest_type().equals("A")) 
						{
							setcovrequest  = arr_getCoverage_request.get(i);
							setcovrequest.setSeq(arr_getCoverage_request.get(i).getSeq());
							setcovrequest.setRequest_status("APPROVE");
							setcovrequest.setRequest_type("A");
							setcovrequest.setResponse_user_code(userId);
							setcovrequest.setResponse_time(PDFFnc.currentTimeStamp());	
							setcovrequest.setRequest_user_code(arr_getCoverage_request.get(i).getRequest_user_code());
							setcovrequest.setRequest_time(arr_getCoverage_request.get(i).getRequest_time());
							setcovrequest.setResponse_note(remark_noApproved);

						}else if (arr_getCoverage_request.get(i).getRequest_status().equals("REQUEST") && arr_getCoverage_request.get(i).getRequest_type().equals("E")) 
						{
							setcovrequest  = arr_getCoverage_request.get(i);
							setcovrequest.setSeq(arr_getCoverage_request.get(i).getSeq());
							setcovrequest.setRequest_status("APPROVE");
							setcovrequest.setRequest_type("E");
							setcovrequest.setResponse_user_code(userId);
							setcovrequest.setResponse_time(PDFFnc.currentTimeStamp());	
							setcovrequest.setRequest_user_code(arr_getCoverage_request.get(i).getRequest_user_code());
							setcovrequest.setRequest_time(arr_getCoverage_request.get(i).getRequest_time());
							setcovrequest.setResponse_note(remark_noApproved);
						}
					}
					wfc.doCoverageRequest(setcovrequest);
				}else {

					/////////////set Status TO Coverage_task
					WorkFlowCoverage wfc = new WorkFlowCoverage();
					ArrayList<Coverage_task> arr_getCoverage_task = wfc.searchCoverageTask();
					Coverage_task  setcovtask = null;
					for (int i = 0; i < arr_getCoverage_task.size(); i++) {
						if ((arr_getCoverage_task.get(i).getDepartment().equals("PD") || 
								arr_getCoverage_task.get(i).getDepartment().equals("PD_Test") || 
								arr_getCoverage_task.get(i).getDepartment().equals("PD2")) && arr_getCoverage_task.get(i).getApprove_status().equals("REQUEST_UPDATE")) {
							setcovtask =   arr_getCoverage_task.get(i);
							setcovtask.setCov_code(passInsurance);
							setcovtask.setDepartment(ConstantValues.GROUP_NAME);
							setcovtask.setApprove_status("UPDATE");
							setcovtask.setUser_code(userId);
							setcovtask.setUpdate_time(PDFFnc.currentTimeStamp());
					}else if ((arr_getCoverage_task.get(i).getDepartment().equals("PD") || 
							arr_getCoverage_task.get(i).getDepartment().equals("PD_Test") || 
							arr_getCoverage_task.get(i).getDepartment().equals("PD2")) && !arr_getCoverage_task.get(i).getApprove_status().equals("REQUEST_UPDATE")) {
						setcovtask =   arr_getCoverage_task.get(i);
						setcovtask.setCov_code(passInsurance);
						setcovtask.setDepartment(ConstantValues.GROUP_NAME);
						setcovtask.setApprove_status(setstatus);
						setcovtask.setUser_code(userId);
						setcovtask.setUpdate_time(PDFFnc.currentTimeStamp());
					}
				}
					wfc.doCoverageTask(setcovtask);		
					/////////////set Status TO coverage.coverage
					setCoverage.setStatus(setstatus);
					setCoverage.setUser_code(userId);
					setCoverage.setUpdate_time(PDFFnc.currentTimeStamp());
					
					BasicInfoDataTab bd = new BasicInfoDataTab();
					bd.doCoverage(setCoverage);
					/////////////  set Status TO coverage_request
					ArrayList<Coverage_request> arr_getCoverage_request = wfc.searchCoverageRequest();
					Coverage_request setcovrequest = null;
					for (int i = 0; i < arr_getCoverage_request.size(); i++) {
						if (arr_getCoverage_request.get(i).getRequest_status().equals("REQUEST") && arr_getCoverage_request.get(i).getRequest_type().equals("A")) 
						{
							setcovrequest  = arr_getCoverage_request.get(i);
							setcovrequest.setSeq(arr_getCoverage_request.get(i).getSeq());
							setcovrequest.setRequest_status("APPROVE");
							setcovrequest.setRequest_type("A");
							setcovrequest.setResponse_user_code(userId);
							setcovrequest.setResponse_time(PDFFnc.currentTimeStamp());	
							setcovrequest.setRequest_user_code(arr_getCoverage_request.get(i).getRequest_user_code());
							setcovrequest.setRequest_time(arr_getCoverage_request.get(i).getRequest_time());
							setcovrequest.setResponse_note(remark_noApproved);

						}else if (arr_getCoverage_request.get(i).getRequest_status().equals("REQUEST") && arr_getCoverage_request.get(i).getRequest_type().equals("E")) 
						{
							setcovrequest  = arr_getCoverage_request.get(i);
							setcovrequest.setSeq(arr_getCoverage_request.get(i).getSeq());
							setcovrequest.setRequest_status("APPROVE");
							setcovrequest.setRequest_type("E");
							setcovrequest.setResponse_user_code(userId);
							setcovrequest.setResponse_time(PDFFnc.currentTimeStamp());	
							setcovrequest.setRequest_user_code(arr_getCoverage_request.get(i).getRequest_user_code());
							setcovrequest.setRequest_time(arr_getCoverage_request.get(i).getRequest_time());
							setcovrequest.setResponse_note(remark_noApproved);

						}
					}
					wfc.doCoverageRequest(setcovrequest);
					}
			}else if (status.equals("approved_update")) {
				setstatus	= "APPROVED";
			////Benz 11-09-2019v
				if (ConstantValues.GROUP_NAME.equals("P03") || 
						ConstantValues.GROUP_NAME.equals("RP") || 
						ConstantValues.GROUP_NAME.equals("RP_Test")) 
				{
					WorkFlowCoverage wfc = new WorkFlowCoverage();
					ArrayList<Coverage_task> arr_getCoverage_task = wfc.searchCoverageTask();
					Coverage_task  setcovtask = new Coverage_task();
					for (int i = 0; i < arr_getCoverage_task.size(); i++) {
						if ((arr_getCoverage_task.get(i).getDepartment().equals("P03") || 
								arr_getCoverage_task.get(i).getDepartment().equals("RP") || 
								arr_getCoverage_task.get(i).getDepartment().equals("RP_Test")) && arr_getCoverage_task.get(i).getApprove_status().equals("REQUEST_UPDATE")) {
								setcovtask =   arr_getCoverage_task.get(i);
								setcovtask.setCov_code(passInsurance);
								setcovtask.setDepartment(ConstantValues.GROUP_NAME);
								setcovtask.setApprove_status(setstatus);
								setcovtask.setUser_code(userId);
								setcovtask.setUpdate_time(PDFFnc.currentTimeStamp());
						}else if ((arr_getCoverage_task.get(i).getDepartment().equals("P03") || 
								arr_getCoverage_task.get(i).getDepartment().equals("RP") || 
								arr_getCoverage_task.get(i).getDepartment().equals("RP_Test")) && !arr_getCoverage_task.get(i).getApprove_status().equals("REQUEST_UPDATE")) {
							setcovtask =   arr_getCoverage_task.get(i);
							setcovtask.setCov_code(passInsurance);
							setcovtask.setDepartment(ConstantValues.GROUP_NAME);
							setcovtask.setApprove_status(setstatus);
							setcovtask.setUser_code(userId);
							setcovtask.setUpdate_time(PDFFnc.currentTimeStamp());
						}
					}
					wfc.doCoverageTask(setcovtask);		
					/////////////  set Status TO coverage_request
					ArrayList<Coverage_request> arr_getCoverage_request = wfc.searchCoverageRequest();
					Coverage_request setcovrequest = null;
					for (int i = 0; i < arr_getCoverage_request.size(); i++) {
						if (arr_getCoverage_request.get(i).getRequest_status().equals("REQUEST") && arr_getCoverage_request.get(i).getRequest_type().equals("A")) 
						{
							setcovrequest  = arr_getCoverage_request.get(i);
							setcovrequest.setSeq(arr_getCoverage_request.get(i).getSeq());
							setcovrequest.setRequest_status("REJECT");
							setcovrequest.setRequest_type("A");
							setcovrequest.setResponse_user_code(userId);
							setcovrequest.setResponse_time(PDFFnc.currentTimeStamp());	
							setcovrequest.setRequest_user_code(arr_getCoverage_request.get(i).getRequest_user_code());
							setcovrequest.setRequest_time(arr_getCoverage_request.get(i).getRequest_time());
						}else if (arr_getCoverage_request.get(i).getRequest_status().equals("REQUEST") && arr_getCoverage_request.get(i).getRequest_type().equals("E")) 
						{
							setcovrequest  = arr_getCoverage_request.get(i);
							setcovrequest.setSeq(arr_getCoverage_request.get(i).getSeq());
							setcovrequest.setRequest_status("REJECT");
							setcovrequest.setRequest_type("E");
							setcovrequest.setResponse_user_code(userId);
							setcovrequest.setResponse_time(PDFFnc.currentTimeStamp());	
							setcovrequest.setRequest_user_code(arr_getCoverage_request.get(i).getRequest_user_code());
							setcovrequest.setRequest_time(arr_getCoverage_request.get(i).getRequest_time());
						}
					}
					wfc.doCoverageRequest(setcovrequest);
				}else {

					/////////////set Status TO Coverage_task
					WorkFlowCoverage wfc = new WorkFlowCoverage();
					ArrayList<Coverage_task> arr_getCoverage_task = wfc.searchCoverageTask();
					Coverage_task  setcovtask = null;
					for (int i = 0; i < arr_getCoverage_task.size(); i++) {
						if ((arr_getCoverage_task.get(i).getDepartment().equals("PD") || 
								arr_getCoverage_task.get(i).getDepartment().equals("PD_Test") || 
								arr_getCoverage_task.get(i).getDepartment().equals("PD2")) && arr_getCoverage_task.get(i).getApprove_status().equals("REQUEST_UPDATE")) {
							setcovtask =   arr_getCoverage_task.get(i);
							setcovtask.setCov_code(passInsurance);
							setcovtask.setDepartment(ConstantValues.GROUP_NAME);
							setcovtask.setApprove_status(setstatus);
							setcovtask.setUser_code(userId);
							setcovtask.setUpdate_time(PDFFnc.currentTimeStamp());
					}else if ((arr_getCoverage_task.get(i).getDepartment().equals("PD") || 
							arr_getCoverage_task.get(i).getDepartment().equals("PD_Test") || 
							arr_getCoverage_task.get(i).getDepartment().equals("PD2")) && !arr_getCoverage_task.get(i).getApprove_status().equals("REQUEST_UPDATE")) {
						setcovtask =   arr_getCoverage_task.get(i);
						setcovtask.setCov_code(passInsurance);
						setcovtask.setDepartment(ConstantValues.GROUP_NAME);
						setcovtask.setApprove_status(setstatus);
						setcovtask.setUser_code(userId);
						setcovtask.setUpdate_time(PDFFnc.currentTimeStamp());
					}
				}
					wfc.doCoverageTask(setcovtask);		
					/////////////set Status TO coverage.coverage
					setCoverage.setStatus(setstatus);
					setCoverage.setUser_code(userId);
					setCoverage.setUpdate_time(PDFFnc.currentTimeStamp());
					
					BasicInfoDataTab bd = new BasicInfoDataTab();
					bd.doCoverage(setCoverage);
					/////////////  set Status TO coverage_request
					ArrayList<Coverage_request> arr_getCoverage_request = wfc.searchCoverageRequest();
					Coverage_request setcovrequest = null;
					for (int i = 0; i < arr_getCoverage_request.size(); i++) {
						if (arr_getCoverage_request.get(i).getRequest_status().equals("REQUEST") && arr_getCoverage_request.get(i).getRequest_type().equals("A")) 
						{
							setcovrequest  = arr_getCoverage_request.get(i);
							setcovrequest.setSeq(arr_getCoverage_request.get(i).getSeq());
							setcovrequest.setRequest_status("REJECT");
							setcovrequest.setRequest_type("A");
							setcovrequest.setResponse_user_code(userId);
							setcovrequest.setResponse_time(PDFFnc.currentTimeStamp());	
							setcovrequest.setRequest_user_code(arr_getCoverage_request.get(i).getRequest_user_code());
							setcovrequest.setRequest_time(arr_getCoverage_request.get(i).getRequest_time());
						}else if (arr_getCoverage_request.get(i).getRequest_status().equals("REQUEST") && arr_getCoverage_request.get(i).getRequest_type().equals("E")) 
						{
							setcovrequest  = arr_getCoverage_request.get(i);
							setcovrequest.setSeq(arr_getCoverage_request.get(i).getSeq());
							setcovrequest.setRequest_status("REJECT");
							setcovrequest.setRequest_type("E");
							setcovrequest.setResponse_user_code(userId);
							setcovrequest.setResponse_time(PDFFnc.currentTimeStamp());	
							setcovrequest.setRequest_user_code(arr_getCoverage_request.get(i).getRequest_user_code());
							setcovrequest.setRequest_time(arr_getCoverage_request.get(i).getRequest_time());
						}
					}
					wfc.doCoverageRequest(setcovrequest);
					}
			}else if (status.equals("rejected")) {
				setstatus	= "REJECTED";
				////Benz 11-09-2019
				if (ConstantValues.GROUP_NAME.equals("P03") || 
						ConstantValues.GROUP_NAME.equals("RP") || 
						ConstantValues.GROUP_NAME.equals("RP_Test")) 
				{

					WorkFlowCoverage wfc = new WorkFlowCoverage();
					ArrayList<Coverage_task> arr_getCoverage_task = wfc.searchCoverageTask();
					Coverage_task  setcovtask = null;
					for (int i = 0; i < arr_getCoverage_task.size(); i++) {
						if (arr_getCoverage_task.get(i).getDepartment().equals("P03") || 
								arr_getCoverage_task.get(i).getDepartment().equals("RP") || 
								arr_getCoverage_task.get(i).getDepartment().equals("RP_Test")) {
							setcovtask =   arr_getCoverage_task.get(i);
							setcovtask.setCov_code(passInsurance);
							setcovtask.setDepartment(ConstantValues.GROUP_NAME);
							setcovtask.setApprove_status(setstatus);
							setcovtask.setUser_code(userId);
							setcovtask.setUpdate_time(PDFFnc.currentTimeStamp());
						}
					}
					wfc.doCoverageTask(setcovtask);		
					/////////////  set Status TO coverage_request
					ArrayList<Coverage_request> arr_getCoverage_request = wfc.searchCoverageRequest();
					Coverage_request setcovrequest = null;
					for (int i = 0; i < arr_getCoverage_request.size(); i++) {
						if (arr_getCoverage_request.get(i).getRequest_status().equals("REQUEST")) {
							setcovrequest  = arr_getCoverage_request.get(i);
							setcovrequest.setSeq(arr_getCoverage_request.get(i).getSeq());
							setcovrequest.setRequest_status("REJECT");
							setcovrequest.setRequest_type("A");
							setcovrequest.setResponse_user_code(userId);
							setcovrequest.setResponse_time(PDFFnc.currentTimeStamp());	
							setcovrequest.setRequest_user_code(arr_getCoverage_request.get(i).getRequest_user_code());
							setcovrequest.setRequest_time(arr_getCoverage_request.get(i).getRequest_time());
							setcovrequest.setResponse_note(remark_noApproved);
						}
					}
				wfc.doCoverageRequest(setcovrequest);
				}else {

					/////////////set Status TO Coverage_task
					WorkFlowCoverage wfc = new WorkFlowCoverage();
					ArrayList<Coverage_task> arr_getCoverage_task = wfc.searchCoverageTask();
					Coverage_task  setcovtask = null;
					for (int i = 0; i < arr_getCoverage_task.size(); i++) {
						if (arr_getCoverage_task.get(i).getDepartment().equals("PD") || 
								arr_getCoverage_task.get(i).getDepartment().equals("PD_Test") || 
								arr_getCoverage_task.get(i).getDepartment().equals("PD2")) {
							setcovtask =   arr_getCoverage_task.get(i);
							setcovtask.setCov_code(passInsurance);
							setcovtask.setDepartment(ConstantValues.GROUP_NAME);
							setcovtask.setApprove_status(setstatus);
							setcovtask.setUser_code(userId);
							setcovtask.setUpdate_time(PDFFnc.currentTimeStamp());
						}
					}
					wfc.doCoverageTask(setcovtask);		
					/////////////set Status TO coverage.coverage
					setCoverage.setStatus(setstatus);
					setCoverage.setUser_code(userId);
					setCoverage.setUpdate_time(PDFFnc.currentTimeStamp());
					
					BasicInfoDataTab bd = new BasicInfoDataTab();
					bd.doCoverage(setCoverage);
					/////////////  set Status TO coverage_request
					ArrayList<Coverage_request> arr_getCoverage_request = wfc.searchCoverageRequest();
					Coverage_request setcovrequest = null;
					for (int i = 0; i < arr_getCoverage_request.size(); i++) {
						if (arr_getCoverage_request.get(i).getRequest_status().equals("REQUEST")) {
							setcovrequest  = arr_getCoverage_request.get(i);
							setcovrequest.setSeq(arr_getCoverage_request.get(i).getSeq());
							setcovrequest.setRequest_status("REJECT");
							setcovrequest.setRequest_type("A");
							setcovrequest.setResponse_user_code(userId);
							setcovrequest.setResponse_time(PDFFnc.currentTimeStamp());	
							setcovrequest.setRequest_user_code(arr_getCoverage_request.get(i).getRequest_user_code());
							setcovrequest.setRequest_time(arr_getCoverage_request.get(i).getRequest_time());
							setcovrequest.setResponse_note(remark_noApproved);
						}
					}
					
					wfc.doCoverageRequest(setcovrequest);
					}
				
			}else if (status.equals("request_update")) {
				setstatus	= "REQUEST_UPDATE";

				////Benz 11-09-2019
				if (ConstantValues.GROUP_NAME.equals("P03") || 
						ConstantValues.GROUP_NAME.equals("RP") || 
						ConstantValues.GROUP_NAME.equals("RP_Test")) 
				{

					WorkFlowCoverage wfc = new WorkFlowCoverage();
					ArrayList<Coverage_task> arr_getCoverage_task = wfc.searchCoverageTask();
					Coverage_task  setcovtask = null;
					for (int i = 0; i < arr_getCoverage_task.size(); i++) {
						if (arr_getCoverage_task.get(i).getDepartment().equals("P03") || 
								arr_getCoverage_task.get(i).getDepartment().equals("RP") || 
								arr_getCoverage_task.get(i).getDepartment().equals("RP_Test")) {
							setcovtask =   arr_getCoverage_task.get(i);
							setcovtask.setCov_code(passInsurance);
							setcovtask.setDepartment(ConstantValues.GROUP_NAME);
							setcovtask.setApprove_status(setstatus);
							setcovtask.setUser_code(userId);
							setcovtask.setUpdate_time(PDFFnc.currentTimeStamp());
						}
					}
					wfc.doCoverageTask(setcovtask);		
					/////////////  set Status TO coverage_request
					ArrayList<Coverage_request> arr_getCoverage_request = wfc.searchCoverageRequest();
					int row = arr_getCoverage_request.size();
					if (row == 0) {
						row = 1;
					}else{
						row = row+1;
					} 
					Coverage_request setcovrequest = new Coverage_request();
					setcovrequest.setCov_code(passInsurance);
					setcovrequest.setSeq(row);
					setcovrequest.setRequest_status("REQUEST");
					setcovrequest.setRequest_type("E");
					setcovrequest.setRequest_user_code(userId);
					setcovrequest.setRequest_time(PDFFnc.currentTimeStamp());	
					setcovrequest.setRequest_note(remark_update);
					wfc.doCoverageRequest(setcovrequest);
				}else {

					/////////////set Status TO Coverage_task
					WorkFlowCoverage wfc = new WorkFlowCoverage();
					ArrayList<Coverage_task> arr_getCoverage_task = wfc.searchCoverageTask();
					Coverage_task  setcovtask = null;
					for (int i = 0; i < arr_getCoverage_task.size(); i++) {
						if (arr_getCoverage_task.get(i).getDepartment().equals("PD") || 
								arr_getCoverage_task.get(i).getDepartment().equals("PD_Test") || 
								arr_getCoverage_task.get(i).getDepartment().equals("PD2")) {
							setcovtask =   arr_getCoverage_task.get(i);
							setcovtask.setCov_code(passInsurance);
							setcovtask.setDepartment(ConstantValues.GROUP_NAME);
							setcovtask.setApprove_status(setstatus);
							setcovtask.setUser_code(userId);
							setcovtask.setUpdate_time(PDFFnc.currentTimeStamp());
						}
					}
					wfc.doCoverageTask(setcovtask);		
					/////////////set Status TO coverage.coverage
					setCoverage.setStatus(setstatus);
					setCoverage.setUser_code(userId);
					setCoverage.setUpdate_time(PDFFnc.currentTimeStamp());
					
					BasicInfoDataTab bd = new BasicInfoDataTab();
					bd.doCoverage(setCoverage);
					/////////////  set Status TO coverage_request
								ArrayList<Coverage_request> arr_getCoverage_request = wfc.searchCoverageRequest();
								int row = arr_getCoverage_request.size();
								if (row == 0) {
									row = 1;
								}else{
									row = row+1;
								} 
								Coverage_request setcovrequest = new Coverage_request();
								setcovrequest.setCov_code(passInsurance);
								setcovrequest.setSeq(row);
								setcovrequest.setRequest_status("REQUEST");
								setcovrequest.setRequest_type("E");
								setcovrequest.setRequest_user_code(userId);
								setcovrequest.setRequest_time(PDFFnc.currentTimeStamp());	
								setcovrequest.setRequest_note(remark_update);
								wfc.doCoverageRequest(setcovrequest);
						}
			}else if (status.equals("update")) {
				setstatus	= "UPDATE";

				////Benz 11-09-2019
				if (ConstantValues.GROUP_NAME.equals("P03") || 
						ConstantValues.GROUP_NAME.equals("RP") || 
						ConstantValues.GROUP_NAME.equals("RP_Test")) 
				{
					WorkFlowCoverage wfc = new WorkFlowCoverage();
					ArrayList<Coverage_task> arr_getCoverage_task = wfc.searchCoverageTask();
					Coverage_task  setcovtask = null;
					for (int i = 0; i < arr_getCoverage_task.size(); i++) {
						if (arr_getCoverage_task.get(i).getDepartment().equals("P03") || 
								arr_getCoverage_task.get(i).getDepartment().equals("RP") || 
								arr_getCoverage_task.get(i).getDepartment().equals("RP_Test")) {
							setcovtask =   arr_getCoverage_task.get(i);
							setcovtask.setCov_code(passInsurance);
							setcovtask.setDepartment(ConstantValues.GROUP_NAME);
							setcovtask.setApprove_status(setstatus);
							setcovtask.setUser_code(userId);
							setcovtask.setUpdate_time(PDFFnc.currentTimeStamp());
						}
					}
					wfc.doCoverageTask(setcovtask);	
					/////////////  set Status TO coverage_request
					ArrayList<Coverage_request> arr_getCoverage_request = wfc.searchCoverageRequest();
					Coverage_request setcovrequest = null;
					for (int i = 0; i < arr_getCoverage_request.size(); i++) {
						 if (arr_getCoverage_request.get(i).getRequest_status().equals("REQUEST") && arr_getCoverage_request.get(i).getRequest_type().equals("E")) 
						{
							setcovrequest  = arr_getCoverage_request.get(i);
							setcovrequest.setSeq(arr_getCoverage_request.get(i).getSeq());
							setcovrequest.setRequest_status("APPROVE");
							setcovrequest.setRequest_type("E");
							setcovrequest.setResponse_user_code(userId);
							setcovrequest.setResponse_time(PDFFnc.currentTimeStamp());	
							setcovrequest.setRequest_user_code(arr_getCoverage_request.get(i).getRequest_user_code());
							setcovrequest.setRequest_time(arr_getCoverage_request.get(i).getRequest_time());
						}
					}
					wfc.doCoverageRequest(setcovrequest);
				}else {
					/////////////set Status TO Coverage_task
					WorkFlowCoverage wfc = new WorkFlowCoverage();
					ArrayList<Coverage_task> arr_getCoverage_task = wfc.searchCoverageTask();
					Coverage_task  setcovtask = null;
					for (int i = 0; i < arr_getCoverage_task.size(); i++) {
						if (arr_getCoverage_task.get(i).getDepartment().equals("PD") || 
								arr_getCoverage_task.get(i).getDepartment().equals("PD_Test") || 
								arr_getCoverage_task.get(i).getDepartment().equals("PD2")) {
							setcovtask =   arr_getCoverage_task.get(i);
							setcovtask.setCov_code(passInsurance);
							setcovtask.setDepartment(ConstantValues.GROUP_NAME);
							setcovtask.setApprove_status(setstatus);
							setcovtask.setUser_code(userId);
							setcovtask.setUpdate_time(PDFFnc.currentTimeStamp());
						}
					}
					wfc.doCoverageTask(setcovtask);		
					/////////////set Status TO coverage.coverage
					setCoverage.setStatus(setstatus);
					setCoverage.setUser_code(userId);
					setCoverage.setUpdate_time(PDFFnc.currentTimeStamp());
					
					BasicInfoDataTab bd = new BasicInfoDataTab();
					bd.doCoverage(setCoverage);
					/////////////  set Status TO coverage_request
					ArrayList<Coverage_request> arr_getCoverage_request = wfc.searchCoverageRequest();
					Coverage_request setcovrequest = null;
					for (int i = 0; i < arr_getCoverage_request.size(); i++) {
						 if (arr_getCoverage_request.get(i).getRequest_status().equals("REQUEST") && arr_getCoverage_request.get(i).getRequest_type().equals("E")) 
						{
							setcovrequest  = arr_getCoverage_request.get(i);
							setcovrequest.setSeq(arr_getCoverage_request.get(i).getSeq());
							setcovrequest.setRequest_status("APPROVE");
							setcovrequest.setRequest_type("E");
							setcovrequest.setResponse_user_code(userId);
							setcovrequest.setResponse_time(PDFFnc.currentTimeStamp());	
							setcovrequest.setRequest_user_code(arr_getCoverage_request.get(i).getRequest_user_code());
							setcovrequest.setRequest_time(arr_getCoverage_request.get(i).getRequest_time());
						}
					}
					wfc.doCoverageRequest(setcovrequest);
					}
			}
			return "check_Approved";
		}
		
	private Date getData(String date)  throws Exception
	{
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
