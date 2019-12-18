package servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.math.BigDecimal;
import java.sql.Date;
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

import layout.bean.productfac.beanset.BenefitAccessData;
import layout.bean.productfac.beanset.ParticipantAccessData;
import layout.bean.productfac.beanset.PremiumAcessData;
import layout.bean.productfac.benefit.Benefit;
import layout.bean.productfac.coverage.Age_calc_meth;
import layout.bean.productfac.coverage.Benefit_amount;
import layout.bean.productfac.coverage.Benefit_item;
import layout.bean.productfac.coverage.Benefit_limit;
import layout.bean.productfac.coverage.Benefit_period;
import layout.bean.productfac.coverage.Benefit_period_det;
import layout.bean.productfac.coverage.Benefit_sched;
import layout.bean.productfac.coverage.Benefit_special_amount;
import layout.bean.productfac.coverage.Cov_terminate;
import layout.bean.productfac.coverage.Coverage;
import layout.bean.productfac.coverage.Document;
import layout.bean.productfac.coverage.Endorse;
import layout.bean.productfac.coverage.Filing_channel;
import layout.bean.productfac.coverage.Mode;
import layout.bean.productfac.coverage.Nonforf_provision;
import layout.bean.productfac.coverage.Note;
import layout.bean.productfac.coverage.Participant;
import layout.bean.productfac.coverage.Prem_assump_rate;
import layout.bean.productfac.coverage.Prem_install;
import layout.bean.productfac.coverage.Prem_occ_charge;
import layout.bean.productfac.coverage.Premium_period;
import layout.bean.productfac.coverage.Rate_layout;
import layout.bean.productfac.lookup.Nonforf_rate;
import layout.bean.productfac.workflow.Coverage_request;
import layout.bean.productfac.workflow.Coverage_task;
import service.BasePlanCL_SaveData_Service;
import service.BasePlan_SaveData_Service_OL;
import service.FreezePolicyValue;
import service.RiderCL_SaveData_Service;
import service.RiderOL_SaveData_Service;
import service.baseplan.BasePlanBenefitOLSearchData;
import service.baseplan.BasePlanBenefits;
import service.baseplan.BasePlanBenefitsOL;
import service.baseplan.BasePlanGrantRightsInsure;
import service.baseplan.ctrl.NonforfProvisionData;
import service.baseplan.ctrl.PremOccCharge;
import service.baseplan.merge.BasicInfo;
import service.center.BundleData;
import service.center.NonforfRateData;
import service.center.PremAssumpRateData;
import service.center.WorkFlowCoverage;
import service.ctrl.CoverageData;
import service.ctrl.ParticipantData;
import service.ctrl.PolicyWordingControlData;
import service.fnc.ConstantValues;
import service.fnc.PDFFnc;
import service.rider.EndorseData;
import service.rider.RiderBasicInfo;
import service.rider.RiderBasicInfoOL;
import service.rider.RiderBenefitOL;
import service.rider.RiderBenefits;
import service.rider.RiderCovTerminateData;
import service.rider.RiderPremiumCal;
import service.rider.ctrl.EndorseRiderData;
import service.tab.BasicInfoDataTab;
import ucar.nc2.dataset.conv.Suomi;

/**
 * Servlet implementation class RiderOL_SaveData_Servlet
 */
@WebServlet("/RiderOL_SaveData_Servlet")
public class RiderOL_SaveData_Servlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private static final int ArrayList = 0;
	private PremiumAcessData premiumAcessData;
	RiderBasicInfoOL basicInfo;
	private String userId;
	String responseText = "";
    /**
     * @see HttpServlet#HttpServlet()
     */
    public RiderOL_SaveData_Servlet() {
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
				PrintWriter out 	= response.getWriter();
				System.out.println("======= Save RiderOL ======"); 
				 String passInsurance 	= request.getParameter("passInsurance");
				 ConstantValues.COV_CODE = passInsurance;
				try {
					if (request.getParameter("method").equals("Tab_Basic_Information")) {
						responseText = save_Basic_Info(request, response);
					}else if (request.getParameter("method").equals("Tab_Policy_Wording")) {
						responseText = save_PolicyWording(request, response);
					}else if (request.getParameter("method").equals("Tab_ProtectedPerson")) {
						responseText = save_Tab_ProtectedPerson(request, response);
					}else if (request.getParameter("method").equals("Tab_CalInsurance_Premium")) {
						responseText = save_cal_insurance_premiums(request, response);
					}else if (request.getParameter("method").equals("Tab_table_policy_value")) {
						responseText = save_table_policy_value(request, response);
					}else if (request.getParameter("method").equals("Tab_Benefits_Coverage_Checker")) {
						response.setContentType("application/json");
						responseText = save_Tab_Benefits_Coverage_Checker(request, response);
					}else if (request.getParameter("method").equals("Tab_Benefits")) {
						responseText = save_Tab_Benefits(request, response);
					}else if (request.getParameter("method").equals("Tab_Endorse")) {
						responseText = save_tab_Endorse(request, response);
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
			RiderOL_SaveData_Service settoService = new RiderOL_SaveData_Service ();
			String passInsurance    	= request.getParameter("passInsurance");
			String groupName 			= request.getParameter("groupName");
			ConstantValues.GROUP_NAME 	= groupName;
			//coverage
				Coverage coverage = new Coverage();
				coverage.setCov_code(request.getParameter("passInsurance"));
				coverage.setName_th(request.getParameter("name_th"));
				coverage.setName_en(request.getParameter("name_en"));
				if  (request.getParameter("sale_eff_date") != "") {
					coverage.setSale_eff_date(getData(request.getParameter("sale_eff_date")));
				}else {
					coverage.setSale_eff_date(null);
				}
				if  (request.getParameter("sale_exp_date") != "") {
					coverage.setSale_exp_date(getData(request.getParameter("sale_exp_date")));
				}else {
					coverage.setSale_exp_date(null);
				}
				coverage.setCov_unit_type(request.getParameter("protect_Type"));
				coverage.setContract_term(request.getParameter("contract_Type"));
				if (request.getParameter("prem_Rate") != "") {
					coverage.setPrem_int_rate(covertStringtoBigDecimal(request.getParameter("prem_Rate")));
				}
				
				//coverage.setSum_decr_int_rate(covertStringtoBigDecimal(request.getParameter("sum_decr_rate")));
				coverage.setIs_install(Boolean.parseBoolean(request.getParameter("ch_separate_pay")));
				coverage.setUser_code(userId);
				coverage.setMin_em(new BigDecimal(0));
				coverage.setMax_em(new BigDecimal(0));
				//OL
				Boolean bundle = Boolean.valueOf(request.getParameter("is_bundle"));
				coverage.setIs_bundle(bundle);
				//mortality_Tli
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
		        //Benz 27-08-2019
		        String taxreduce_healthy = request.getParameter("Taxreduce_healthy");
		        if (!taxreduce_healthy.equals("")) {
		        	coverage.setTax_health_prem_percent(covertStringtoBigDecimal(taxreduce_healthy));
		        }
			 	settoService.setCoverageObj(coverage);
			 	/////Set to Product
			 	//RiderCL_SaveData_Service settoService = new RiderCL_SaveData_Service ();
			 	//core_biz_prd_code
			 	//sonObj_tpdTli.getInt("core_biz_prd_code")
			 	
			  	//participant
			 	ParticipantAccessData participantAccessData = new ParticipantAccessData();
			 	Participant participant = new Participant();
			 	ParticipantData pd = new ParticipantData ();
        		ArrayList<Participant> getlstParticipant = pd.searchCoverageParticipantAll(passInsurance);
        		for (int ii = 0; ii < getlstParticipant.size(); ii++) {
        			if (getlstParticipant.get(ii).getPartic_type().equals("PRIMARY")) {
        				participant = getlstParticipant.get(ii);
        				break;
        			}
				}
			 	participant.setCov_code(passInsurance);
			 	participant.setIssue_gender(request.getParameter("gender"));
			 	if (request.getParameter("min_age") != "") {
			 		participant.setMin_issue_age(Integer.parseInt(request.getParameter("min_age")));
			 	}
			 	if (request.getParameter("max_age") != "") {
			 		participant.setMax_issue_age(Integer.parseInt(request.getParameter("max_age")));
			 	}
			 	participant.setMin_issue_age_unit(request.getParameter("min_age_unit"));
			 	participant.setMax_issue_age_unit(request.getParameter("max_age_unit"));
			 	
			 	if (!request.getParameter("max_insure_age").equals("")) {
			 		participant.setMax_insure_age(Integer.parseInt(request.getParameter("max_insure_age")));
			 		participant.setMax_insure_age_unit("YEAR");// prove
			 	}else { 
			 		participant.setMax_insure_age(0);
			 		participant.setMax_insure_age_unit("NONE");// prove
			 	}
			 	if (!request.getParameter("max_insure_year").equals("")) {
				 	participant.setMax_insure_year(Integer.parseInt(request.getParameter("max_insure_year")));
				 	participant.setMax_insure_year_unit("YEAR");// prove
				 }else {
					participant.setMax_insure_year(0);
				 	participant.setMax_insure_year_unit("NONE");// prove
				 }
			 	
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
					//AgeCal
					ArrayList<Age_calc_meth> lstAgeCalMeth = new ArrayList<>();
					/*String ageCalMeth_str = request.getParameter("cal_Age");
					JSONArray jsonArr_ageCalMeth = new JSONArray(ageCalMeth_str);
					for(int i=0 ; i<jsonArr_ageCalMeth.length() ; i++) 
					{
						Age_calc_meth age_calc_meth = new Age_calc_meth();
						 JSONObject jsonObj_ageCalMeth = jsonArr_ageCalMeth.getJSONObject(i);
						 age_calc_meth.setCov_code(request.getParameter("passInsurance")); //prove
						 age_calc_meth.setPartic_type("PRIMARY"); //prove
						 age_calc_meth.setAge_calc_meth("NONE");
						 age_calc_meth.setUser_code("5555555");
						 age_calc_meth.setUpdate_time(getCurrentTimestamp());
						 lstAgeCalMeth.add(age_calc_meth);
					}*/
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
				if (jsonArr_paymentContract.length() != 0) {
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
				}else {
					premiumAcessData = new PremiumAcessData();
					premiumAcessData.setListPremiumPeriod(new ArrayList<Premium_period>());
					premiumAcessData.setListPremInstall(new ArrayList<Prem_install>());
					setPremiumAcessData(premiumAcessData);
					basicInfo = new RiderBasicInfoOL();
					this.basicInfo.doPremium(premiumAcessData);
				}
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
			  
			  /////////////////////save core_biz_prd_code//////////////////
			  ConstantValues.USER_CODE = userId;
			  String cov_cat_id = request.getParameter("cov_cat_id");
			  String core_biz_prd_code = request.getParameter("core_biz_prd_code");
			  
			  RiderBasicInfo rbi = new RiderBasicInfo();
			  rbi.doProduct(cov_cat_id, covCode, core_biz_prd_code);
			  
			  
			  
			 ///Benzเพิ่ม Save Bundle //27-08-2019
			 if (bundle == true) {
				 String key_coverageExtra 	= request.getParameter("bundle_cov_code");
					String[] listcov_code  		= new String[1]; 
				    	 listcov_code[0] 		= key_coverageExtra;
				    BundleData bd = new BundleData ();
				    bd.doBundle(listcov_code);
			 }
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
		return "success";
	}
	public String save_PolicyWording(HttpServletRequest request, HttpServletResponse response) throws Exception{
		try {
			String passInsurance = request.getParameter("passInsurance");
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
			/*//set Status //*Benz 30-08-2019
			CoverageData cd 		= new CoverageData();
			Coverage setCoverage 	=	cd.searchCoverage(passInsurance);
			setCoverage.setStatus("UPDATE_RP");
			setCoverage.setUser_code(userId);
			setCoverage.setUpdate_time(getCurrentTimestamp());
			BasicInfoDataTab basicInfo = new BasicInfoDataTab();
			basicInfo.doCoverage(setCoverage);
			*/
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
	
	public String save_Tab_ProtectedPerson(HttpServletRequest request, HttpServletResponse response) throws Exception 
	{
		try {
			RiderCL_SaveData_Service settoService = new RiderCL_SaveData_Service ();
			String protectedPerson 	= request.getParameter("protectedPerson");
			String passInsurance	= request.getParameter("passInsurance");
			String gender			= request.getParameter("gender");
			String max_insure_age	= request.getParameter("max_insure_age");
			String groupName 			= request.getParameter("groupName");
			ConstantValues.GROUP_NAME 	= groupName;
			
			if (protectedPerson.length() != 0) {
				ArrayList<Participant> lstParticipant2 = new ArrayList<>();
				
				 JSONArray jsonArr_protectedPerson = new JSONArray(protectedPerson);
			        for (int i = 0; i < jsonArr_protectedPerson.length(); i++)
			        {	 
			        	Participant participant = new Participant ();
			        	 JSONObject jsonObj_protectedPerson = jsonArr_protectedPerson.getJSONObject(i);
			        	if (i == 0) {
			        		ParticipantData pd = new ParticipantData ();
			        		ArrayList<Participant> getlstParticipant = pd.searchCoverageParticipantAll(passInsurance);
			        		for (int ii = 0; ii < getlstParticipant.size(); ii++) {
			        			if (getlstParticipant.get(ii).getPartic_type().equals("PRIMARY")) {
			        				participant = getlstParticipant.get(ii);
			        				break;
			        			}
							}
			        		participant.setIssue_gender(gender);
			        		participant.setIssue_gender(gender);
			        		 participant.setCov_code(passInsurance);
				        	 participant.setPartic_type(jsonObj_protectedPerson.getString("type"));
				        	 participant.setMin_issue_age(jsonObj_protectedPerson.getInt("min_age"));
				        	 participant.setMin_issue_age_unit(jsonObj_protectedPerson.getString("min_age_unit"));
				        	 participant.setMax_issue_age(jsonObj_protectedPerson.getInt("max_age"));
				        	 participant.setMax_issue_age_unit(jsonObj_protectedPerson.getString("max_age_unit"));
				        	 participant.setPrem_rule(jsonObj_protectedPerson.getString("insurance_premium"));
			        	}else {
			        		ParticipantData pd = new ParticipantData ();
			        		ArrayList<Participant> getlstParticipant = pd.searchCoverageParticipantAll(passInsurance);
			        		for (int ii = 0; ii < getlstParticipant.size(); ii++) {
			        			if (getlstParticipant.get(ii).getPartic_type().equals("PRIMARY")) {
			        				participant = getlstParticipant.get(ii);
			        				break;
			        			}
							}
			        		
			        		 participant.setCov_code(passInsurance);
				        	 participant.setPartic_type(jsonObj_protectedPerson.getString("type"));
				        	 participant.setMin_issue_age(jsonObj_protectedPerson.getInt("min_age"));
				        	 participant.setMin_issue_age_unit(jsonObj_protectedPerson.getString("min_age_unit"));
				        	 participant.setMax_issue_age(jsonObj_protectedPerson.getInt("max_age"));
				        	 participant.setMax_issue_age_unit(jsonObj_protectedPerson.getString("max_age_unit"));
				        	 participant.setPrem_rule(jsonObj_protectedPerson.getString("insurance_premium"));
				        	 participant.setIssue_gender("NONE");
			        	}
			        	
			        	 participant.setUser_code(userId);
			        	 participant.setUpdate_time(getCurrentTimestamp());
			        	 lstParticipant2.add(participant);
			        }
			        
			     settoService.setParticipant(lstParticipant2);
			}else {
				ArrayList<Participant> lstParticipant2 = new ArrayList<>();
				 Participant participant = new Participant ();
				 participant.setCov_code(passInsurance);
				 lstParticipant2.add(participant);
				 settoService.setParticipant(lstParticipant2);
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
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "save_Tab_ProtectedPerson"; 
	}
	public String save_cal_insurance_premiums(HttpServletRequest request, HttpServletResponse response) throws Exception 
	{
		try {
			RiderOL_SaveData_Service settoService = new RiderOL_SaveData_Service ();
			RiderPremiumCal	rpc = new RiderPremiumCal();
			String passInsurance = request.getParameter("passInsurance");
			String groupName 			= request.getParameter("groupName");
			ConstantValues.GROUP_NAME 	= groupName;
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
		        	rate_layout.setRate_layout_id(jsonObj_table_insurance_premium.getInt("rate_layout_id"));
		        	rate_layout.setFile_id(jsonObj_table_insurance_premium.getInt("file_id"));
		        	rate_layout.setUser_code(userId);
		        	rate_layout.setUpdate_time(getCurrentTimestamp());
		        	///New
		        	String rate_type = jsonObj_table_insurance_premium.getString("rate_type");
		        	rate_layout.setSub_code(rate_type);
		        	lsRate_layouts_stardard.add(rate_layout);
	        }
	      settoService.setRate_layout_Standard(lsRate_layouts_stardard);
	        
	        //อัตราเบี้ยฯเพิ่มตามชั้นอาชีพ
	        ArrayList<Prem_occ_charge> lsPremOccCharge= new ArrayList<>();
	        String table_rate_job	= request.getParameter("table_rate_job");
	        if (table_rate_job.length() != 0) {
	        	 JSONArray jsonArr_table_rate_job = new JSONArray(table_rate_job);
	        	 for (int i = 0; i < jsonArr_table_rate_job.length(); i++) {
	        		 Prem_occ_charge poc = new Prem_occ_charge();
			        JSONObject jsonPremOccCharge = jsonArr_table_rate_job.getJSONObject(i);
			        poc.setCov_code(passInsurance);
			        poc.setOcc_class(jsonPremOccCharge.getString("level"));
			        BigDecimal rate_from    = covertStringtoBigDecimal(jsonPremOccCharge.get("rate_from").toString());
			        poc.setMin_charge_rate(rate_from);
			        BigDecimal rate_to    = covertStringtoBigDecimal(jsonPremOccCharge.get("rate_to").toString());
			        poc.setMax_charge_rate(rate_to);
			        BigDecimal max_perSA    = covertStringtoBigDecimal(jsonPremOccCharge.get("max_perSA").toString());
			        poc.setMax_extra_per_1k(max_perSA);
			        
			        poc.setUser_code(userId);
			        poc.setUpdate_time(getCurrentTimestamp());
			        lsPremOccCharge.add(poc);
	        	 }
	        	 rpc.doPremOccCharge(lsPremOccCharge);
	        }
	        // มีส่วนลดเบี้ยประกัน
	        String prem_dis	= request.getParameter("prem_dis");
	        JSONArray jsonArr_prem_dis = new JSONArray(prem_dis);
	        boolean  bo_prem_dis = false;
	        BigDecimal min_prem_dis_rate = null ;
	        BigDecimal max_prem_dis_rate = null ;

	        for (int i = 0; i < jsonArr_prem_dis.length(); i++)
	        {
	        	 JSONObject json_Coverage = jsonArr_prem_dis.getJSONObject(i);
	        	  bo_prem_dis = Boolean.parseBoolean(json_Coverage.get("prem_dis").toString());
			      min_prem_dis_rate    = covertStringtoBigDecimal(json_Coverage.get("min_prem_dis_rate").toString());
			      max_prem_dis_rate    = covertStringtoBigDecimal(json_Coverage.get("max_prem_dis_rate").toString());
	        }
	        
	        //khwan
	        Boolean is_substd = Boolean.valueOf(request.getParameter("is_substd"));
	        ArrayList<Rate_layout> lsRate_layouts_special = new ArrayList<>();
	       	ArrayList<Rate_layout> lsRate_layouts_EMFile = new ArrayList<>();
	        if (is_substd == true) {
	        	//table_extra_Rate
	        	coverage.setIs_substd(is_substd);
		        String table_extra_Rate	= request.getParameter("table_extra_Rate");
		        JSONArray jsonArr_table_extra_Rate = new JSONArray(table_extra_Rate);
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
		        
		      //EM_file
		        String EM_file	= request.getParameter("EM_file");
		        JSONArray jsonArr_EMFile = new JSONArray(EM_file);
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
	        }
	        settoService.setRate_layout_Special(lsRate_layouts_special);
	        settoService.setRate_layout_BetweenAge(lsRate_layouts_EMFile);
	        
	        /*-----NAR---------Benz 27-08-2019*/
	       // Boolean is_substd = Boolean.valueOf(request.getParameter("is_substd"));
	        ArrayList<Rate_layout> lsRate_layouts_NAR = new ArrayList<>();
	        //if (is_substd == true) {
	        	//table_extra_Rate
	        	//coverage.setIs_substd(is_substd);
		        String table_NAR	= request.getParameter("table_NAR");
		        JSONArray jsonArr_table_NAR = new JSONArray(table_NAR);
		        for (int i = 0; i < jsonArr_table_NAR.length(); i++)
		        {
		        	 JSONObject jsonObj_table_NAR = jsonArr_table_NAR.getJSONObject(i);
		        	 Rate_layout rate_layout = new Rate_layout();
			        	rate_layout.setCov_code(passInsurance);
			        	rate_layout.setRate_cat_id(jsonObj_table_NAR.getInt("rate_cat_id"));
			        	rate_layout.setAge_band_code(jsonObj_table_NAR.getString("age_band_code"));
			        	rate_layout.setRate_layout_id(jsonObj_table_NAR.getInt("rate_layout_id"));
			        	rate_layout.setFile_id(jsonObj_table_NAR.getInt("file_id"));
			        	
			        	// FIX VALUE
			        	rate_layout.setUser_code(userId);
			        	rate_layout.setUpdate_time(getCurrentTimestamp());
			        	///New
			        	rate_layout.setSub_code(jsonObj_table_NAR.getString("rate_type"));
			        	lsRate_layouts_NAR.add(rate_layout);
		        }
	        /*}else {
	        	coverage.setIs_substd(is_substd);
	        	coverage.setMin_em(covertStringtoBigDecimal("0"));
	  	        coverage.setMax_em(covertStringtoBigDecimal("0"));	
	        }*/
	        
	        
	        //
	        settoService.setRate_layout_NAR(lsRate_layouts_NAR);
	        //settoService.setRate_layout_BetweenAge(lsRate_layouts_EMFile);
	        
	        coverage.setCov_code(passInsurance);
	        coverage.setIs_prem_disc(bo_prem_dis);
	        coverage.setMin_prem_disc_rate(min_prem_dis_rate);
	        coverage.setMax_prem_disc_rate(max_prem_dis_rate);
	        coverage.setPrem_calc_meth("PREM_ONLY");
	        coverage.setStatus("UPDATE");
	        settoService.setCoverage_premiumCal(coverage);
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
		return "save_cal_insurance_premiums";
	}
	public String save_table_policy_value(HttpServletRequest request, HttpServletResponse response) throws Exception 
	{
		try {
			String passInsurance = request.getParameter("passInsurance");
			String groupName 			= request.getParameter("groupName");
			ConstantValues.GROUP_NAME 	= groupName;
			//standard_risk
				String standard_risk = request.getParameter("standard_risk");
		    	Boolean is_standard_risk = Boolean.valueOf(request.getParameter("is_standard_risk"));
		    	Boolean is_standard_risk_row = Boolean.valueOf(request.getParameter("is_standard_risk_row"));
				JSONArray jsonArr_standard_risk = new JSONArray(standard_risk);
			ArrayList<Rate_layout> lstRateLayout_standard_risk = new ArrayList<>();
			RiderOL_SaveData_Service rss = new RiderOL_SaveData_Service();
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
	        rss.setRate_layout_standard_risk(lstRateLayout_standard_risk);
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
		        	        if (!jsonObj_layout.getString("rate_layout_id").equals("")) {
		            	        rate_layout.setRate_layout_id(Integer.parseInt(jsonObj_layout.getString("rate_layout_id")));
		        	        }
		        	        if (!jsonObj_layout.getString("file_id").equals("")) {
		        	        	rate_layout.setFile_id(Integer.parseInt(jsonObj_layout.getString("file_id")));
		        	        }
		        	        
		          			rate_layout.setAge_band_code(jsonObj_layout.getString("age_band_code"));
		        	        rate_layout.setUpdate_time(getCurrentTimestamp());
		        	        rate_layout.setUser_code(userId);
		        	        //New 
		        	        rate_layout.setSub_code(jsonObj_layout.getString("rate_type"));
		        	        lstRateLayout_standard_risk_row.add(rate_layout);
				        }
			        }
		     } 
	        rss.setRate_layout_standard_risk_row(lstRateLayout_standard_risk_row) ;
	        ////////////RPU////ETI///////////////////////
	      	String cov_code	= request.getParameter("passInsurance");
	      	String str_is_RPU_ETI_Table	= request.getParameter("is_RPU_ETI_Table");
	      	boolean is_RPU_ETI_Table	= Boolean.parseBoolean(str_is_RPU_ETI_Table);
	      	if (is_RPU_ETI_Table == false) {
		    	NonforfProvisionData setNP = new NonforfProvisionData();
		    	Boolean is_RPU_ETI = Boolean.valueOf(request.getParameter("is_RPU_ETI"));
		    	ArrayList<Nonforf_provision> arr_Product 	= setNP.searchCoverageNonforfprovision(cov_code);
		    	String str_RPU 								= request.getParameter("RPU");
		    	String str_ETI 								= request.getParameter("ETI");
		    	JSONArray jsonArr_RPU 						= new JSONArray(str_RPU);
		    	JSONArray jsonArr_ETI 						= new JSONArray(str_ETI);
		    	ArrayList<Nonforf_provision> arr_Product_Set = new ArrayList<>();
		    	if (is_RPU_ETI == true) {
		    		if (arr_Product.size() != 0) {
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
			    	}else {
				    		for (int ii = 0; ii < jsonArr_RPU.length(); ii++) {
				    			Nonforf_provision set_Nonforf_provision = new Nonforf_provision();
					          	JSONObject jsonObj_RPU = jsonArr_RPU.getJSONObject(ii);
					           	set_Nonforf_provision.setCov_code(cov_code);
					          	set_Nonforf_provision.setNonforf_prov("RPU");
					        	set_Nonforf_provision.setIs_default(true);
					          	set_Nonforf_provision.setMale_nonforf_rate(Integer.parseInt(jsonObj_RPU.get("male_nonforf_rate").toString()));
					          	set_Nonforf_provision.setFemale_nonforf_rate(Integer.parseInt(jsonObj_RPU.get("female_nonforf_rate").toString()));
					          	set_Nonforf_provision.setUser_code(userId);
					          	set_Nonforf_provision.setPeriod_calc_meth("NONE");
					          	set_Nonforf_provision.setPeriod_unit("NONE");
					          	set_Nonforf_provision.setUpdate_time(getCurrentTimestamp());
					          	arr_Product_Set.add(set_Nonforf_provision);
					    	}
				    		for (int ii = 0; ii < jsonArr_ETI.length(); ii++) {
				    			Nonforf_provision set_Nonforf_provision = new Nonforf_provision();
					          	JSONObject jsonObj_ETI 	= jsonArr_ETI.getJSONObject(ii);
					          	set_Nonforf_provision.setCov_code(cov_code);
					          	set_Nonforf_provision.setIs_default(true);
					        	set_Nonforf_provision.setNonforf_prov("ETI");
					          	set_Nonforf_provision.setMale_nonforf_rate(Integer.parseInt(jsonObj_ETI.get("male_nonforf_rate").toString()));
					          	set_Nonforf_provision.setFemale_nonforf_rate(Integer.parseInt(jsonObj_ETI.get("female_nonforf_rate").toString()));
					          	set_Nonforf_provision.setUser_code(userId);
					          	set_Nonforf_provision.setPeriod_calc_meth("NONE");
					          	set_Nonforf_provision.setPeriod_unit("NONE");
					          	set_Nonforf_provision.setUpdate_time(getCurrentTimestamp());
					          	arr_Product_Set.add(set_Nonforf_provision);
					    	}
			    	}
		    		BasePlanGrantRightsInsure bgr = new BasePlanGrantRightsInsure();
			    	bgr.doNonforfProvisionOLData(arr_Product_Set);
		    	}else {
		    		BasePlanGrantRightsInsure bgr = new BasePlanGrantRightsInsure();
			    	bgr.doNonforfProvisionOLData(new ArrayList<Nonforf_provision>());
		    	}
	    	
	      	}else {
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
						    	if (arr_Product.size() > 0) {
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
						    	}else {
						    		//JSONObject jsonObj_rpu_male 		= jsonArr_rpu_male.getJSONObject(i);
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
				    		//rpu_female////////////////////
					    	JSONArray jsonArr_rpu_female 			= new JSONArray(jsonObj_RPU.get("female").toString());
					    	if (jsonArr_rpu_female.length() > 0) {
					    		JSONObject jsonObj_rpu_female 		= jsonArr_rpu_female.getJSONObject(i);
					    		if (arr_Product.size() > 0) {
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
					    		}else {
						    			//JSONObject jsonObj_rpu_female 		= jsonArr_rpu_female.getJSONObject(i);
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
				    		if (arr_Product.size() > 0) {
					    		for (int ii = 0; ii < arr_Product.size(); ii++) {
			        				if (arr_Product.get(ii).getNonforf_prov().equals("ETI") || jsonObj_eti_male.getString("flag").equals("true")) {
			        					if (arr_Product.get(ii).getMale_nonforf_rate() == 0) {
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
				    		}else {
				    			//JSONObject jsonObj_eti_male 		= jsonArr_eti_male.getJSONObject(i);
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
			    		//eti_female////////////////////
				    	JSONArray jsonArr_eti_female 			= new JSONArray(jsonObj_ETI.get("female").toString());
				    	if (jsonArr_eti_female.length() > 0) {
				    		JSONObject jsonObj_eti_female 		= jsonArr_eti_female.getJSONObject(i);
				    		if (arr_Product.size() > 0) {
				    			for (int ii = 0; ii < arr_Product.size(); ii++) {
			        				if (arr_Product.get(ii).getNonforf_prov().equals("ETI")) {
			        					if (arr_Product.get(ii).getFemale_nonforf_rate() == 0 || jsonObj_eti_female.getString("flag").equals("true") ) {
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
				    		}else {
			        					//JSONObject jsonObj_eti_female 		= jsonArr_eti_female.getJSONObject(i);
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
			    	if (checkETIMale == true || checkETIFeMale == true) {
				          arrNonforfETI_rate  = nrd.insertsearchNonforfRate(lstNonforf_rate_eti);
			    	}
	    		 }
		    	///////////////////////////
	    		Nonforf_provision set_NonforfETI_provision 		= new Nonforf_provision();
		        if (arrNonforfETI_rate.size() > 0 || arrNonforfRPU_rate.size() > 0) { //check Nonforf_rate
		        	if (arr_Product.size() > 0) { //check Nonforf_provision
		        			if (jsonArr_RPU.length() > 0 || jsonArr_ETI.length() > 0) {
				        		for (int ii = 0; ii < arr_Product.size(); ii++) {
			        				if (arr_Product.get(ii).getNonforf_prov().equals("RPU")) {
					        			set_NonforfRPU_provision 	= arr_Product.get(ii);
						    			for (int iii = 0; iii < arrNonforfRPU_rate.size(); iii++) {
						    				if ( arrNonforfRPU_rate.get(iii).getGender().equals("MALE")) {
						    					set_NonforfRPU_provision.setMale_nonforf_rate((arrNonforfRPU_rate.get(iii).getNonforf_rate_id()));
						    				}
										}
						    			for (int iii = 0; iii < arrNonforfRPU_rate.size(); iii++) {
						    				if ( arrNonforfRPU_rate.get(iii).getGender().equals("FEMALE")) {
						    					set_NonforfRPU_provision.setFemale_nonforf_rate((arrNonforfRPU_rate.get(iii).getNonforf_rate_id()));
						    				}
										}
						    			set_NonforfRPU_provision.setUser_code(userId);
						    			set_NonforfRPU_provision.setUpdate_time(getCurrentTimestamp());
						    			arr_Product_Set.add(set_NonforfRPU_provision);
						    		}else if (arr_Product.get(ii).getNonforf_prov().equals("ETI")){
					        			set_NonforfETI_provision 	= arr_Product.get(ii);
						    			for (int iii = 0; iii < arrNonforfETI_rate.size(); iii++) {
						    				if (arrNonforfETI_rate.get(iii).getGender().equals("MALE")) {
						    					set_NonforfETI_provision.setMale_nonforf_rate((arrNonforfETI_rate.get(iii).getNonforf_rate_id()));
						    				}
										}
						    			for (int iii = 0; iii < arrNonforfETI_rate.size(); iii++) {
						    				if ( arrNonforfETI_rate.get(iii).getGender().equals("FEMALE")) {
						    					set_NonforfETI_provision.setFemale_nonforf_rate((arrNonforfETI_rate.get(iii).getNonforf_rate_id()));
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
		        			}else if (jsonArr_RPU.length() > 0 || jsonArr_ETI.length() == 0) {
		        				for (int ii = 0; ii < arr_Product.size(); ii++) {
			        				if (arr_Product.get(ii).getNonforf_prov().equals("RPU")) {
					        			set_NonforfRPU_provision 	= arr_Product.get(ii);
						    			for (int iii = 0; iii < arrNonforfRPU_rate.size(); iii++) {
						    				if ( arrNonforfRPU_rate.get(iii).getGender().equals("MALE")) {
						    					set_NonforfRPU_provision.setMale_nonforf_rate((arrNonforfRPU_rate.get(iii).getNonforf_rate_id()));
						    				}
										}
						    			for (int iii = 0; iii < arrNonforfRPU_rate.size(); iii++) {
						    				if ( arrNonforfRPU_rate.get(iii).getGender().equals("FEMALE")) {
						    					set_NonforfRPU_provision.setFemale_nonforf_rate((arrNonforfRPU_rate.get(iii).getNonforf_rate_id()));
						    				}
										}
						    			set_NonforfRPU_provision.setUser_code(userId);
						    			set_NonforfRPU_provision.setUpdate_time(getCurrentTimestamp());
						    			arr_Product_Set.add(set_NonforfRPU_provision);
						    		}else {
						    			Nonforf_provision set_Nonforf_provision  = arr_Product.get(ii);
						    			arr_Product_Set.add(set_Nonforf_provision);
						    		} 
				        		}
		        			}else if (jsonArr_RPU.length() == 0 || jsonArr_ETI.length() > 0) {
				        		for (int ii = 0; ii < arr_Product.size(); ii++) {
			        				 if (arr_Product.get(ii).getNonforf_prov().equals("ETI")){
					        			set_NonforfETI_provision 	= arr_Product.get(ii);
						    			for (int iii = 0; iii < arrNonforfETI_rate.size(); iii++) {
						    				if (arrNonforfETI_rate.get(iii).getGender().equals("MALE")) {
						    					set_NonforfETI_provision.setMale_nonforf_rate((arrNonforfETI_rate.get(iii).getNonforf_rate_id()));
						    				}
										}
						    			for (int iii = 0; iii < arrNonforfETI_rate.size(); iii++) {
						    				if ( arrNonforfETI_rate.get(iii).getGender().equals("FEMALE")) {
						    					set_NonforfETI_provision.setFemale_nonforf_rate((arrNonforfETI_rate.get(iii).getNonforf_rate_id()));
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
		        			
		        			}
		        			
		        	}else {
		        		if (jsonArr_RPU.length() > 0) {
			        		set_NonforfRPU_provision 	= new Nonforf_provision();
				    		for (int iii = 0; iii < arrNonforfRPU_rate.size(); iii++) {
				    			set_NonforfRPU_provision.setCov_code(cov_code);
				    			if ( arrNonforfRPU_rate.get(iii).getGender().equals("MALE")) {
				    				set_NonforfRPU_provision.setMale_nonforf_rate((arrNonforfRPU_rate.get(iii).getNonforf_rate_id()));
				    			}
							}
				    		for (int iii = 0; iii < arrNonforfRPU_rate.size(); iii++) {
				    			if ( arrNonforfRPU_rate.get(iii).getGender().equals("FEMALE")) {
				    				set_NonforfRPU_provision.setFemale_nonforf_rate((arrNonforfRPU_rate.get(iii).getNonforf_rate_id()));
				    			}
							}
				    			set_NonforfRPU_provision.setIs_default(true);
				    			set_NonforfRPU_provision.setPeriod_calc_meth("NONE");
				    			set_NonforfRPU_provision.setPeriod_unit("NONE");
				    			set_NonforfRPU_provision.setNonforf_prov("RPU");
				    			set_NonforfRPU_provision.setUser_code(userId);
				    			set_NonforfRPU_provision.setUpdate_time(getCurrentTimestamp());
				    			arr_Product_Set.add(set_NonforfRPU_provision);
		        		}
			    			////////////ETI///////////////////
			    		if (jsonArr_ETI.length() > 0) {
			    			set_NonforfETI_provision 	= new Nonforf_provision();
			    			set_NonforfETI_provision.setCov_code(cov_code);
				    		for (int iii = 0; iii < arrNonforfETI_rate.size(); iii++) {
				    			if ( arrNonforfETI_rate.get(iii).getGender().equals("MALE")) {
				    				set_NonforfETI_provision.setMale_nonforf_rate((arrNonforfETI_rate.get(iii).getNonforf_rate_id()));
				    			}
							}
				    		for (int iii = 0; iii < arrNonforfETI_rate.size(); iii++) {
				    			if ( arrNonforfETI_rate.get(iii).getGender().equals("FEMALE")) {
				    				set_NonforfETI_provision.setFemale_nonforf_rate((arrNonforfETI_rate.get(iii).getNonforf_rate_id()));
				    			}
							}
				    			set_NonforfETI_provision.setIs_default(true);
				    			set_NonforfETI_provision.setPeriod_calc_meth("NONE");
				    			set_NonforfETI_provision.setPeriod_unit("NONE");
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
		return "save_table_policy_value";
	}
	ArrayList<Object []> returnBenefitItemMaster = new ArrayList<>();
	public String save_Tab_Benefits_Coverage_Checker(HttpServletRequest request, HttpServletResponse response) throws Exception 
	{
		try {
			RiderOL_SaveData_Service settoService = new RiderOL_SaveData_Service ();
			String passInsurance = request.getParameter("passInsurance");
			String benefitsCoverage = request.getParameter("benefitsCoverage");
			String groupName 			= request.getParameter("groupName");
			ConstantValues.GROUP_NAME 	= groupName;
			JSONArray	jsonArray_exceptionAccidentPay	= new JSONArray();
			if (benefitsCoverage != null) {
				JSONArray jsonArr_benefitsCoverage = new JSONArray(benefitsCoverage);
				String[]  lstBenefit_itemMaster = new String[jsonArr_benefitsCoverage.length()];
		        for (int i = 0; i < jsonArr_benefitsCoverage.length(); i++)
		        {
		        	JSONObject jsonObj_layout = jsonArr_benefitsCoverage.getJSONObject(i);
		        	lstBenefit_itemMaster[i] = jsonObj_layout.getString("pass");
		        }
		        returnBenefitItemMaster = settoService.doCoverageBenefitItemMaster(passInsurance,lstBenefit_itemMaster,userId);
		        JSONObject responsejson = new JSONObject();
		        String 	json		=  "";
		       responsejson.put("Tab_Benefit_Check",returnBenefitItemMaster);
				//
		       responseText = responsejson.toString();
				json = responseText;
				//System.out.println("EX//"+json);
				System.out.println("Get//"+json);
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
					}	*/
		        //////////////////////////////////////////////
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return responseText;
	}
	public String save_Tab_Benefits(HttpServletRequest request, HttpServletResponse response) throws Exception 
	{
		try {
			RiderCL_SaveData_Service settoService = new RiderCL_SaveData_Service ();
			String passInsurance = request.getParameter("passInsurance");
			String benefitsCoverage = request.getParameter("benefitsCoverage");
			
			JSONArray jsonArr_benefitsCoverage = new JSONArray(benefitsCoverage);
			ArrayList<Object> alltable_jsonArray = new ArrayList<>();
			//JSONArray	alltable_jsonArray									= new JSONArray();
			//เลือกบน
			Benefit_item	benefit_item  					= new Benefit_item();
			Benefit_sched 	benefit_sched 					= new Benefit_sched();
  			Benefit_amount 	benefit_amount 					= new Benefit_amount();
  			Benefit_limit 	benefit_limit 					= new Benefit_limit();
  			Benefit_special_amount 	benefit_special_amount 	= new Benefit_special_amount();
  			ArrayList listToRTE = new ArrayList<>();
  			ArrayList<Note> listNote = new ArrayList<>();
  			int bnf_item_id 	= 0;
  			 String bnf_code 	= "";
			  for (int i = 0; i < jsonArr_benefitsCoverage.length(); i++)
		        {
				  JSONObject jsonObj__benefitsCoverage = jsonArr_benefitsCoverage.getJSONObject(i);
		        	//tab
				  String tab 		=  String.valueOf(jsonObj__benefitsCoverage.get("tab"));
				  bnf_item_id 		=	Integer.parseInt(tab) ;
				  String value	 	=  String.valueOf(jsonObj__benefitsCoverage.get("value"));
				  
				  JSONArray jsonArr_value = null;
				  if (!value.equals("[]")) {
					  jsonArr_value = new JSONArray(value);
				  }
				  if (jsonArr_value != null) {
					  ArrayList<Object> 		listBenf						= new ArrayList<>();
		          		for (int ii = 0; ii < jsonArr_value.length(); ii++) 
		          		{
		          			alltable_jsonArray									= new ArrayList<>();
		          			JSONArray jsonObj_value = jsonArr_value.getJSONArray(ii);
		          			
		          			for (int iii = 0; iii < jsonObj_value.length(); iii++){
		          				listBenf						= new ArrayList<>();
		          				benefit_item  					= new Benefit_item();
	          				 	benefit_sched 					= new Benefit_sched();
		          			 	benefit_amount 					= new Benefit_amount();
		          			 	benefit_limit 					= new Benefit_limit();
		          			 	benefit_special_amount 			= new Benefit_special_amount();
		          				//Note note = new Note();
		          				
		          				JSONObject jsonObj__value 	= jsonObj_value.getJSONObject(iii);
		          				bnf_code 					=jsonObj__value.getString("key_coverage");
		          				if (jsonObj__value.getBoolean("main") == true) {
			          				///เลือกบน
		          					if (jsonObj__value.getString("key_coverage").equals("Group")) {
		          						benefit_item.setItem_name(jsonObj__value.getString("coverage"));
		          					}
		          					else {
		          			           	  benefit_item.setBnf_code(jsonObj__value.getString("key_coverage"));
		          					}
		          					benefit_item.setCov_code(passInsurance);
		          					benefit_item.setMain_bnf_item_id(Integer.parseInt(tab));
		          					benefit_item.setBnf_item_id(0);
		          					benefit_item.setPartic_type("PRIMARY");
		          					benefit_item.setWaiting_period_unit("NONE");
		          					benefit_item.setUser_code(userId);
		          					benefit_item.setUpdate_time(getCurrentTimestamp());
		          					//Benz 03-09-2019 มีเพิ่มฟิว ///
		          					benefit_item.setIs_terminate(jsonObj__value.getBoolean("is_terminate"));
		          					benefit_item.setIs_deduct_cash_value(jsonObj__value.getBoolean("is_deduct_cash_value"));
		          					benefit_item.setNote(jsonObj__value.getString("remark"));
		          					listBenf.add(benefit_item);
		          					/////////////////////////////////
							          		//benefit_sched
						          			benefit_sched.setBnf_item_id(0);
						          			benefit_sched.setSched_seq(1);
						          			benefit_sched.setBeg_period_type("NONE");
						          			benefit_sched.setBeg_period(0);
						          			benefit_sched.setBeg_period_unit("NONE");
						          			benefit_sched.setEnd_period_type("NONE");
						          			benefit_sched.setEnd_period(0);
						          			benefit_sched.setEnd_period_unit("NONE");
						          			benefit_sched.setAmt_compare("NONE");
						          			benefit_sched.setUser_code(userId);
						          			benefit_sched.setUpdate_time(getCurrentTimestamp());
						          			
						          			listBenf.add(benefit_sched);
						          			
			//			          			////////////////////////////////
			//			          			//lstBenefit_amount
						          			benefit_amount.setBnf_item_id(0);
						          			benefit_amount.setSched_seq(0);
						          			benefit_amount.setAmt_seq(1);
						          			benefit_amount.setBenef_factor(jsonObj__value.getString("by_capital"));
						          			benefit_amount.setSubseq_benef_factor("NONE");
						          			BigDecimal  count    = covertStringtoBigDecimal(jsonObj__value.get("count").toString());
						          			benefit_amount.setBenef_amt(count);
						          			benefit_amount.setBenef_unit(jsonObj__value.getString("unit"));
						          			benefit_amount.setBenef_scope(jsonObj__value.getString("frequency"));
						          			benefit_amount.setUser_code(userId);
						          			benefit_amount.setUpdate_time(getCurrentTimestamp());
						          			
						          			listBenf.add(benefit_amount);
						          			
						          			//benefit_limit
						          			benefit_limit.setBnf_item_id(0);
						          			benefit_limit.setSched_seq(0);
						          			benefit_limit.setLimit_seq(1);
						          			BigDecimal  factor_max    = covertStringtoBigDecimal(jsonObj__value.get("factor_max").toString());
						          			benefit_limit.setLimit_amt(factor_max);
						          			benefit_limit.setLimit_unit(jsonObj__value.getString("factor_unit"));
						          			benefit_limit.setLimit_scope(jsonObj__value.getString("factor_per"));
						          			benefit_limit.setLimit_factor("NONE");
						          			benefit_limit.setUser_code(userId);
						          			benefit_limit.setUpdate_time(getCurrentTimestamp());
						          			//เพิ่มฟิว
						          			BigDecimal factor_min = covertStringtoBigDecimal(jsonObj__value.get("factor_min").toString());
						          			benefit_limit.setMin_limit_amt(factor_min);
						          			listBenf.add(benefit_limit);
						          			
						          			//////////////////////////////////
						          			//benefit_special_amount
						          			benefit_special_amount.setBnf_item_id(0);
						          			benefit_special_amount.setSched_seq(0);
						          			benefit_special_amount.setAmt_seq(1);
						          			benefit_special_amount.setSpecial_type("PUBLIC_ACC");
						          			benefit_special_amount.setBenef_factor("NONE");
						          			benefit_special_amount.setBenef_unit(jsonObj__value.get("accident_unit").toString());
						          			BigDecimal accident_count = covertStringtoBigDecimal(jsonObj__value.get("accident_count").toString());
						          			benefit_special_amount.setBenef_amt(accident_count);
						          			benefit_special_amount.setBenef_scope("NONE");
						          			benefit_special_amount.setUser_code(userId);
						          			benefit_special_amount.setUpdate_time(getCurrentTimestamp());
						          			
						          			listBenf.add(benefit_special_amount);
						          			alltable_jsonArray.add(listBenf);
						          			///alltable_jsonArray.put(benefitItemC_jsonArray);
			          				}else {
			          					
			          					if (jsonObj__value.getString("key_coverage").equals("Group")) {
			          						benefit_item.setItem_name(jsonObj__value.getString("coverage"));
			          					}
			          					else {
			          			           	  benefit_item.setBnf_code(jsonObj__value.getString("key_coverage"));
			          					}
			          					benefit_item.setCov_code(passInsurance);
			          					benefit_item.setMain_bnf_item_id(Integer.parseInt(tab));
			          					benefit_item.setBnf_item_id(0);
			          					benefit_item.setPartic_type("PRIMARY");
			          					benefit_item.setWaiting_period_unit("NONE");
			          					benefit_item.setUser_code(userId);
			          					benefit_item.setUpdate_time(getCurrentTimestamp());
			          					//Benz 03-09-2019 มีเพิ่มฟิว ///
			          					benefit_item.setIs_terminate(jsonObj__value.getBoolean("is_terminate"));
			          					benefit_item.setIs_deduct_cash_value(jsonObj__value.getBoolean("is_deduct_cash_value"));
			          					benefit_item.setNote(jsonObj__value.getString("remark"));
			          					listBenf.add(benefit_item);
			          					
							          		 /////////////////////////////////
							          		//benefit_sched
						          			benefit_sched.setBnf_item_id(0);
						          			benefit_sched.setSched_seq(1);
						          			benefit_sched.setBeg_period_type("NONE");
						          			benefit_sched.setBeg_period(0);
						          			benefit_sched.setBeg_period_unit("NONE");
						          			benefit_sched.setEnd_period_type("NONE");
						          			benefit_sched.setEnd_period(0);
						          			benefit_sched.setEnd_period_unit("NONE");
						          			benefit_sched.setAmt_compare("NONE");
						          			benefit_sched.setUser_code(userId);
						          			benefit_sched.setUpdate_time(getCurrentTimestamp());
						          			
						          			listBenf.add(benefit_sched);
						          			
			//			          			////////////////////////////////
			//			          			//lstBenefit_amount
						          			benefit_amount.setBnf_item_id(0);
						          			benefit_amount.setSched_seq(0);
						          			benefit_amount.setAmt_seq(1);
						          			benefit_amount.setBenef_factor(jsonObj__value.getString("by_capital"));
						          			benefit_amount.setSubseq_benef_factor("NONE");
						          			BigDecimal  count    = covertStringtoBigDecimal(jsonObj__value.get("count").toString());
						          			benefit_amount.setBenef_amt(count);
						          			benefit_amount.setBenef_unit(jsonObj__value.getString("unit"));
						          			benefit_amount.setBenef_scope(jsonObj__value.getString("frequency"));
						          			benefit_amount.setUser_code(userId);
						          			benefit_amount.setUpdate_time(getCurrentTimestamp());
						          			
						          			listBenf.add(benefit_amount);
						          			
						          			//benefit_limit
						          			benefit_limit.setBnf_item_id(0);
						          			benefit_limit.setSched_seq(0);
						          			benefit_limit.setLimit_seq(1);
						          			BigDecimal  factor_max    = covertStringtoBigDecimal(jsonObj__value.get("factor_max").toString());
						          			benefit_limit.setLimit_amt(factor_max);
						          			benefit_limit.setLimit_unit(jsonObj__value.getString("factor_unit"));
						          			benefit_limit.setLimit_scope(jsonObj__value.getString("factor_per"));
						          			benefit_limit.setLimit_factor("NONE");
						          			benefit_limit.setUser_code(userId);
						          			benefit_limit.setUpdate_time(getCurrentTimestamp());
						          		    //เพิ่มฟิว
						          			BigDecimal factor_min = covertStringtoBigDecimal(jsonObj__value.get("factor_min").toString());
						          			benefit_limit.setMin_limit_amt(factor_min);
						          			listBenf.add(benefit_limit);
						          			
						          			//////////////////////////////////
						          			//benefit_special_amount
						          			benefit_special_amount.setBnf_item_id(0);
						          			benefit_special_amount.setSched_seq(0);
						          			benefit_special_amount.setAmt_seq(1);
						          			benefit_special_amount.setSpecial_type("PUBLIC_ACC");
						          			benefit_special_amount.setBenef_factor("NONE");
						          			benefit_special_amount.setBenef_unit(jsonObj__value.get("accident_unit").toString());
						          			BigDecimal accident_count = covertStringtoBigDecimal(jsonObj__value.get("accident_count").toString());
						          			benefit_special_amount.setBenef_amt(accident_count);
						          			benefit_special_amount.setBenef_scope("NONE");
						          			benefit_special_amount.setUser_code(userId);
						          			benefit_special_amount.setUpdate_time(getCurrentTimestamp());
						          			
						          			listBenf.add(benefit_special_amount);
						          			
						          			alltable_jsonArray.add(listBenf);
			          				}
		          				
		          				///NOTE
		          				/*note.setNote(jsonObj__value.getString("remark"));
		          				note.setCov_code(passInsurance);
		          				note.setSeq(iii+1);
		          				note.setUser_code(userId);
		          				note.setUpdate_time(getCurrentTimestamp());
		          				listNote.add(note);*/
		          				
		          				}
		                    listToRTE.add(alltable_jsonArray);
		          		}
				  }
				  /////////////////////////////////////////////////////////////////////
	          		settoService.set_benefit(tab,passInsurance,listToRTE);
	          		//NOTE
	          		RiderBasicInfo rb = new RiderBasicInfo();
	          		rb.doNote(listNote);
	          		 /////คืนค่า CV ////////// Benz 26-08-2019
		          	  RiderCovTerminateData rt 					= new RiderCovTerminateData ();
	      			  ArrayList<Cov_terminate> arr_cov 			=  rt.searchCovTerminate(bnf_item_id);
		      			  Cov_terminate cov_term = new Cov_terminate ();
		      			  if (arr_cov.size() == 0) {
		      				  cov_term.setBnf_item_id(bnf_item_id);
		      				  cov_term.setTerm_cov_code(passInsurance);
		      				  String cv 			=   request.getParameter("return_cv");
		      				  Boolean boolean_cv 	= Boolean.valueOf(cv);
		      				  cov_term.setReturn_cash_surr(boolean_cv);
		      				  cov_term.setUser_code(userId);
		      				  cov_term.setUpdate_time(getCurrentTimestamp());
		      				  rt.doTerminate(cov_term);
		      			  }else {
		      				  for (int j = 0; j < arr_cov.size(); j++) {
								if (bnf_item_id == arr_cov.get(j).getBnf_item_id()) {
									cov_term.setBnf_item_id(arr_cov.get(i).getBnf_item_id());
				      				cov_term.setTerm_cov_code(arr_cov.get(i).getTerm_cov_code());
				      				String cv 			=   request.getParameter("return_cv");
				      				Boolean boolean_cv 	= Boolean.valueOf(cv);
				      				cov_term.setReturn_cash_surr(boolean_cv);
				      				cov_term.setUser_code(userId);
				      				cov_term.setUpdate_time(getCurrentTimestamp());
				      				rt.doTerminate(cov_term);
								}else {
									 cov_term.setBnf_item_id(bnf_item_id);
				      				  cov_term.setTerm_cov_code(passInsurance);
				      				  String cv 			=   request.getParameter("return_cv");
				      				  Boolean boolean_cv 	= Boolean.valueOf(cv);
				      				  cov_term.setReturn_cash_surr(boolean_cv);
				      				  cov_term.setUser_code(userId);
				      				  cov_term.setUpdate_time(getCurrentTimestamp());
				      				  rt.doTerminate(cov_term);
								}
							}
		      			 }
		        }
			  ///////////////////////////////////////////////////////////////////////////////////////////////////////
			  String table_disease	 			= request.getParameter("table_disease");
			  JSONArray jsonArr_table_disease 	= new JSONArray(table_disease);
				  for (int i = 0; i < jsonArr_table_disease.length(); i++)
			        {
					  JSONObject jsonObj__table_disease = jsonArr_table_disease.getJSONObject(i);
			        	//tab
					  String item_name 	=  String.valueOf(jsonObj__table_disease.get("item_name"));
					  String value	 	=  String.valueOf(jsonObj__table_disease.get("value"));
					  	int  distance = 0;
						ArrayList<Benefit_sched> listBenefit_sched 						= new ArrayList<>();
						ArrayList<Benefit_special_amount> listBenefit_special_amount 	= new ArrayList<>();
						JSONArray jsonArr_table_disease1 = null;
						if (!value.equals("[]")) {
							 jsonArr_table_disease1	 							= new JSONArray(value);
						}
						if (jsonArr_table_disease1 != null) {
							BasePlan_SaveData_Service_OL bss = new BasePlan_SaveData_Service_OL();
							 int bnf_item_id_in = bnf_item_id;
							 //seve Benefit_item
						        ArrayList<Benefit_item> lstBenefit_item = new ArrayList<>();
						        Benefit_item benefit_item1 = new Benefit_item();
						        benefit_item1.setCov_code(passInsurance);
						        benefit_item1.setBnf_item_id(bnf_item_id);
						       // benefit_item1.setBnf_code(bnf_code);
						        benefit_item1.setItem_name(item_name);
						        benefit_item1.setPartic_type("PRIMARY");
						        benefit_item1.setWaiting_period_unit("NONE");
						        benefit_item1.setUser_code(userId);
						        benefit_item1.setUpdate_time(PDFFnc.currentTimeStamp());
						        lstBenefit_item.add(benefit_item1);
						        new BasePlanBenefitsOL().doฺBenefitItem(lstBenefit_item);
						        
							ArrayList<Benefit_amount> listBenefit_amount = new ArrayList<>();
							for (int i1 = 0; i1 < jsonArr_table_disease1.length(); i1++) {
								 JSONObject jsonObj_die = jsonArr_table_disease1.getJSONObject(i1);
					        	 Benefit_sched benefit_sched1 					= new Benefit_sched();
					        	 //benefit_sched
					        	 benefit_sched1.setBnf_item_id(bnf_item_id_in);
					        	 if (jsonObj_die.get("distance") != "") {
					        		  distance    = (Integer.parseInt((String) jsonObj_die.get("distance")));
					        		  benefit_sched1.setSched_seq(distance);
					        	 }
					        	 if (jsonObj_die.get("duration_from") != "") {
					        		 int duration_from    = (Integer.parseInt((String) jsonObj_die.get("duration_from")));
					        		 benefit_sched1.setBeg_period(duration_from);
					        	 }
					        	 if (jsonObj_die.get("duration_to") != "") {
					        		 int duration_to    = (Integer.parseInt((String) jsonObj_die.get("duration_to")));
					        		 benefit_sched1.setEnd_period(duration_to);
					        	 }
					        	 benefit_sched1.setBeg_period_type("POLICY_YEAR_BEG");
					        	 benefit_sched1.setEnd_period_type("POLICY_YEAR_BEG");
					        	 benefit_sched1.setBeg_period_unit((String) jsonObj_die.get("duration_from_type"));
					        	 benefit_sched1.setEnd_period_unit((String) jsonObj_die.get("duration_to_type"));
					        	 benefit_sched1.setAmt_compare((String) jsonObj_die.get("select"));
					        	 benefit_sched1.setUser_code(userId);
					        	 benefit_sched1.setUpdate_time(PDFFnc.currentTimeStamp());
					        	 listBenefit_sched.add(benefit_sched1);
					        	 ////////////////////////////////////////////////////////////////////
					        	 //benefit_amount
					        	 String death = jsonObj_die.get("death").toString();
					        	 JSONArray jsonArr_death = new JSONArray(death);
					        	 	for (int ii = 0; ii < jsonArr_death.length(); ii++) {
					        	 		 Benefit_amount benefit_amount1 		= new Benefit_amount();
					        	 		 JSONObject jsonObj_death = jsonArr_death.getJSONObject(ii);
					        	 		 
					        	 		  benefit_amount1.setSched_seq(distance);
					        	 		  benefit_amount1.setBnf_item_id(bnf_item_id_in);
					        	 			benefit_amount1.setAmt_seq(1);	
								        	 if (jsonObj_death.get("sa") != "") {
											 	BigDecimal sa    = covertStringtoBigDecimal(jsonObj_death.get("sa").toString());
								        	 	benefit_amount1.setBenef_amt(sa);
								        	 }
							        	 	benefit_amount1.setBenef_factor((String) jsonObj_death.get("sa_type"));
							        	 	benefit_amount1.setSubseq_benef_factor("NONE");
							        	 	benefit_amount1.setBenef_unit("PERCENT");
							        	 	benefit_amount1.setBenef_scope("POLICY_LIFE");
							        	 	benefit_amount1.setUser_code(userId);
							        	 	benefit_amount1.setUpdate_time(PDFFnc.currentTimeStamp());
							        	 	listBenefit_amount.add(benefit_amount1);
							        	 	///seq 2
							        	 	benefit_amount1 		= new Benefit_amount();
							        		benefit_amount1.setSched_seq(distance);
							        	 	benefit_amount1.setBnf_item_id(bnf_item_id_in);
							        	 	benefit_amount1.setAmt_seq(2);
							        	 	 if (jsonObj_death.get("premium") != "") {
												 	BigDecimal premium    = covertStringtoBigDecimal(jsonObj_death.get("premium").toString());
									        	 	benefit_amount1.setBenef_amt(premium);
							        	 	 }
							        	 	if (jsonObj_death.get("premium_type").equals("ACCU")) {
							        	 		String include_EM = jsonObj_death.get("include_EM").toString() ;
							        	 		Boolean bl_include_EM = Boolean.valueOf(include_EM);
							        	 		if (bl_include_EM == true) {
							        	 			benefit_amount1.setBenef_factor("ACC_TOT_PREM");
							        	 		}else {
							        	 			benefit_amount1.setBenef_factor("ACC_STD_PREM");
							        	 		}
							        	 	}else if (jsonObj_death.get("premium_type").equals("YRT")) {
							        	 		String include_EM = jsonObj_death.get("include_EM").toString() ;
							        	 		Boolean bl_include_EM = Boolean.valueOf(include_EM);
							        	 		if (bl_include_EM == true) {
							        	 			benefit_amount1.setBenef_factor("ANN_TOT_PREM");
							        	 		}else {
							        	 			benefit_amount1.setBenef_factor("ANN_STD_PREM");
							        	 		}
							        	 	}else if (jsonObj_death.get("premium_type").equals("ACCU_COUPON")) {
							        	 		String include_EM = jsonObj_death.get("include_EM").toString() ;
							        	 		Boolean bl_include_EM = Boolean.valueOf(include_EM);
							        	 		if (bl_include_EM == true) {
							        	 			benefit_amount1.setBenef_factor("ACC_COUPON_TOT_PREM");
							        	 		}else {
							        	 			benefit_amount1.setBenef_factor("ACC_COUPON_STD_PREM");
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
							        	 	benefit_amount1.setSubseq_benef_factor("NONE");
							        	 	benefit_amount1.setBenef_unit("PERCENT");
							        	 	benefit_amount1.setBenef_scope("POLICY_LIFE");
							        	 	benefit_amount1.setUser_code(userId);
							        	 	benefit_amount1.setUpdate_time(PDFFnc.currentTimeStamp());
							        	 	listBenefit_amount.add(benefit_amount1); 
							        	 	///seq 3
							        	 	benefit_amount1 		= new Benefit_amount();
							        		benefit_amount1.setSched_seq(distance);
							        	 	benefit_amount1.setBnf_item_id(bnf_item_id_in);
							        	 	benefit_amount1.setAmt_seq(3);
							        	 	if (jsonObj_death.get("CV_PV") != "") {
											 	BigDecimal cv    = covertStringtoBigDecimal(jsonObj_death.get("CV_PV").toString());
								        	 	benefit_amount1.setBenef_amt(cv);
							        	 	}
								        	benefit_amount1.setBenef_factor(jsonObj_death.get("CV_PV_type").toString());
							        	 	benefit_amount1.setSubseq_benef_factor("NONE");
							        	 	benefit_amount1.setBenef_unit("PERCENT");
							        	 	benefit_amount1.setBenef_scope("POLICY_LIFE");
							        	 	benefit_amount1.setUser_code(userId);
							        	 	benefit_amount1.setUpdate_time(PDFFnc.currentTimeStamp());
							        	 	listBenefit_amount.add(benefit_amount1);
							        	 	//seq4
							        	 	benefit_amount1 		= new Benefit_amount();
							        		benefit_amount1.setSched_seq(distance);
							        	 	benefit_amount1.setBnf_item_id(bnf_item_id_in);
							        	 	benefit_amount1.setAmt_seq(4);
											BigDecimal other    = covertStringtoBigDecimal("0");
								        	benefit_amount1.setBenef_amt(other);
								        	benefit_amount1.setBenef_factor(jsonObj_death.get("other").toString());
							        	 	benefit_amount1.setSubseq_benef_factor("NONE");
							        	 	benefit_amount1.setBenef_unit("PERCENT");
							        	 	benefit_amount1.setBenef_scope("POLICY_LIFE");
							        	 	benefit_amount1.setUser_code(userId);
							        	 	benefit_amount1.setUpdate_time(PDFFnc.currentTimeStamp());
							        	 	listBenefit_amount.add(benefit_amount1);
							        	 	////////////////////////////////////////////////////
									}
							}
							 BasePlanBenefits bnenefits = new BasePlanBenefits();
							 RiderBenefitOL rb = new RiderBenefitOL ();
							 rb.doฺBenefitSched(bnf_item_id,listBenefit_sched);
				  			 bnenefits.doBenefitAmount(listBenefit_amount);
						}else {
							 BasePlanBenefits bnenefits = new BasePlanBenefits();
							 RiderBenefitOL rb = new RiderBenefitOL ();
							 rb.doฺBenefitSched(bnf_item_id,new ArrayList<Benefit_sched>());
				  			 bnenefits.doBenefitAmount(new ArrayList<Benefit_amount>());
						}
					  
			        }
			  ////////////////////////////////////////////////////////////////////////////////////////////////////////
				  //////////////////except//////////////////////
				  String except	 			= request.getParameter("table_exception");
				  JSONArray jsonArr_except 	= new JSONArray(except);
					  for (int i = 0; i < jsonArr_except.length(); i++)
				        {
						  JSONObject jsonObj__except 		= jsonArr_except.getJSONObject(i);
				        	//tab
						  String item_name 					=  String.valueOf(jsonObj__except.get("item_name"));
						  String value	 					=  String.valueOf(jsonObj__except.get("value"));
						  JSONArray jsonArr_value 			= null;
						  if (!value.equals("[]")) {
								  jsonArr_value	 			= new JSONArray(value);
							}
							if (jsonArr_value != null) {
								RiderBenefitOL rb 		= new RiderBenefitOL ();
							     ArrayList<Benefit_item> lstBenefit_item_except = new ArrayList<>();
								 for (int ii = 0; ii < jsonArr_value.length(); ii++) {
									 JSONObject jsonObj_except = jsonArr_value.getJSONObject(ii);
									 //seve Benefit_item
								        Benefit_item lstBenefit_item_except1 = new Benefit_item();
								        lstBenefit_item_except1.setCov_code(passInsurance);
								        lstBenefit_item_except1.setBnf_item_id(0);
								        lstBenefit_item_except1.setMain_bnf_item_id(bnf_item_id);
								        
								        lstBenefit_item_except1.setBnf_code(jsonObj_except.get("except_val").toString());
								        lstBenefit_item_except1.setPartic_type("NONE");
								        lstBenefit_item_except1.setWaiting_period_unit("NONE");
								        lstBenefit_item_except1.setUser_code(userId);
								        lstBenefit_item_except1.setUpdate_time(PDFFnc.currentTimeStamp());
								        lstBenefit_item_except.add(lstBenefit_item_except1);
								}
								 rb.doSeriousIllness(bnf_item_id,lstBenefit_item_except);
							}
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
		return "save_Tab_Benefits";
	}
	public String save_tab_Endorse(HttpServletRequest request, HttpServletResponse response) throws Exception 
	{
		try {
			String passInsurance = request.getParameter("passInsurance");
			String groupName 			= request.getParameter("groupName");
			ConstantValues.GROUP_NAME 	= groupName;
			//Master
		//	ArrayList<Benefit_item> lstBenefit_itemMaster 	= new ArrayList<>();
			Benefit_item 	benefit_itemmster  					= new Benefit_item();
			benefit_itemmster.setBnf_item_id(0);
			benefit_itemmster.setItem_name("ENDORSE");
			benefit_itemmster.setCov_code(passInsurance);
			benefit_itemmster.setPartic_type("PRIMARY");
			benefit_itemmster.setUser_code(userId);
			benefit_itemmster.setWaiting_period_unit("NONE");
			benefit_itemmster.setUpdate_time(getCurrentTimestamp());
			//lstBenefit_itemMaster.add(benefit_itemmster);
			//expand_coverage
			ArrayList<Benefit_item> lstBenefit_item= new ArrayList<>();
			JSONArray jsonArr_expand_coverage = null;
			 String expand_coverage = request.getParameter("expand_coverage");
			 if (!expand_coverage.equals("[]")) {
					 jsonArr_expand_coverage = new JSONArray(expand_coverage);
			 }
			 if (jsonArr_expand_coverage != null) {
				if (jsonArr_expand_coverage.length() != 0) {
			        for (int i = 0; i < jsonArr_expand_coverage.length(); i++)
			        {
			        	Benefit_item 	benefit_item  	= new Benefit_item();
			        	JSONObject jsonObj_expand_coverage = jsonArr_expand_coverage.getJSONObject(i);
			        	benefit_item.setBnf_item_id(0);
			        	benefit_item.setCov_code(passInsurance);
			        	benefit_item.setBnf_code(jsonObj_expand_coverage.getString("key"));
			        	benefit_item.setUser_code(userId);
			        	benefit_item.setPartic_type("PRIMARY");
			        	benefit_item.setWaiting_period_unit("NONE");
			        	benefit_item.setUpdate_time(getCurrentTimestamp());
			        	lstBenefit_item.add(benefit_item);
			        }
				}
				EndorseRiderData erd = new EndorseRiderData();
				erd.insertEndorseRider(benefit_itemmster, lstBenefit_item);
			 }else {
					EndorseRiderData erd = new EndorseRiderData();
					erd.insertEndorseRider(benefit_itemmster,new  ArrayList<Benefit_item>());
			 }
////////////////////////แบบระบุ/////////////////////////////		
			 EndorseData ed = new EndorseData();
			 JSONArray jsonArr_basePlan = null;
			 String basePlan = request.getParameter("basePlan");
			 ArrayList<Endorse> arrList_Endorse = new ArrayList<>();
			// Endorse
			 if (!basePlan.equals("[]")) {
				 jsonArr_basePlan= new JSONArray(basePlan);
			 }
			 if (jsonArr_basePlan != null) {
				 for (int i = 0; i < jsonArr_basePlan.length(); i++){
					Endorse setEndorse = new Endorse ();
			        JSONObject jsonObj_basePlan = jsonArr_basePlan.getJSONObject(i);
			        setEndorse.setEndorse_cov_code(passInsurance);
			        setEndorse.setMain_cov_code(jsonObj_basePlan.get("key_insurance").toString());
			        setEndorse.setUser_code(userId);
			        setEndorse.setUpdate_time(getCurrentTimestamp());
			        arrList_Endorse.add(setEndorse);
			        }
			 }
//////////// Rider 
			 JSONArray jsonArr_rider = null;
			 String rider = request.getParameter("rider");
			// Endorse
			 if (!rider.equals("[]")) {
				 jsonArr_rider= new JSONArray(rider);
			 }
			 if (jsonArr_rider != null) {
				 for (int i = 0; i < jsonArr_rider.length(); i++){
					Endorse setEndorse = new Endorse ();
			        JSONObject jsonObj_rider = jsonArr_rider.getJSONObject(i);
			        setEndorse.setEndorse_cov_code(passInsurance);
			        setEndorse.setMain_cov_code(jsonObj_rider.get("key_insurance").toString());
			        setEndorse.setUser_code(userId);
			        setEndorse.setUpdate_time(getCurrentTimestamp());
			        arrList_Endorse.add(setEndorse);
			        }
			 }
			 if (basePlan.equals("[]") && rider.equals("[]")) {
				 ed.doEndorse(new ArrayList<Endorse>());
			 }else {
				 ed.doEndorse(arrList_Endorse);
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
		return "save_tab_Endorse";
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
						break;
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
						break;
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
	public void setPremiumAcessData(PremiumAcessData premiumAcessData) {
		this.premiumAcessData = premiumAcessData;
	}
}