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

import layout.bean.productfac.beanset.ParticipantAccessData;
import layout.bean.productfac.beanset.PremiumAcessData;
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
import layout.bean.productfac.coverage.Participant;
import layout.bean.productfac.coverage.Prem_assump_rate;
import layout.bean.productfac.coverage.Prem_install;
import layout.bean.productfac.coverage.Prem_occ_charge;
import layout.bean.productfac.coverage.Premium_period;
import layout.bean.productfac.coverage.Rate_layout;
import layout.bean.productfac.workflow.Coverage_request;
import layout.bean.productfac.workflow.Coverage_task;
import service.BasePlanCL_SaveData_Service;
import service.FreezePolicyValue;
import service.MainInsuranceService;
import service.RiderCL_SaveData_Service;
import service.baseplan.ctrl.PremOccCharge;
import service.baseplan.merge.BasicInfo;
import service.center.PremAssumpRateData;
import service.center.WorkFlowCoverage;
import service.ctrl.CoverageData;
import service.ctrl.ParticipantData;
import service.ctrl.PolicyWordingControlData;
import service.fnc.ConstantValues;
import service.fnc.PDFFnc;
import service.rider.EndorseData;
import service.rider.RiderAccessData;
import service.rider.RiderBasicInfo;
import service.rider.RiderBasicInfoOL;
import service.rider.RiderCovTerminateData;
import service.rider.RiderPremiumCal;
import service.rider.ctrl.EndorseRiderData;
import service.tab.BasicInfoDataTab;

/**
 * Servlet implementation class RiderCL_SaveData_Servlet
 */
@WebServlet("/RiderCL_SaveData_Servlet")
public class RiderCL_SaveData_Servlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private static final int ArrayList = 0;
	private PremiumAcessData premiumAcessData;
	RiderBasicInfoOL basicInfo;
	private String userId;
	String responseText = "";
    /**
     * @see HttpServlet#HttpServlet()
     */
    public RiderCL_SaveData_Servlet() {
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
				System.out.println("======= Save RiderCL ======"); 
				 String passInsurance 		= request.getParameter("passInsurance");
				 ConstantValues.COV_CODE 	= passInsurance;
				 String groupName 			=  ConstantValues.GROUP_NAME;
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
			RiderCL_SaveData_Service settoService = new RiderCL_SaveData_Service ();
			String passInsurance    	= request.getParameter("passInsurance");
			String groupName 			= request.getParameter("groupName");
			ConstantValues.GROUP_NAME 	= groupName;
			//coverage
			CoverageData cd 		= new CoverageData();
			Coverage coverage 	=	cd.searchCoverage(passInsurance);
			
				//Coverage coverage = new Coverage();
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
				
				coverage.setSum_decr_int_rate(covertStringtoBigDecimal(request.getParameter("sum_decr_rate")));
				coverage.setIs_install(Boolean.parseBoolean(request.getParameter("ch_separate_pay")));
				coverage.setUser_code(userId);
				///coverage.setMin_em(new BigDecimal(0));
				//coverage.setMax_em(new BigDecimal(0));
				
				//mortality_Tli
				String mortality_str = request.getParameter("mortality_Tli");
			  	JSONArray jsonArr_mortality = new JSONArray(mortality_str);
			  	ArrayList<Prem_assump_rate> list_Prem_assump_rate = new ArrayList<>(); 
			  	ArrayList<Prem_assump_rate> list_Prem_assump_rate_tli = new ArrayList<>(); 
			  	 PremAssumpRateData par = new PremAssumpRateData();
			  
		        for (int i = 0; i < jsonArr_mortality.length(); i++)
		        {	
		        	Prem_assump_rate setprem = new Prem_assump_rate();
		            JSONObject jsonObj_mortality = jsonArr_mortality.getJSONObject(i);
		            if(jsonObj_mortality.get("mort_tli_id").toString().trim().equals(""))
		            {
		            	coverage.setMale_mort_tli_id(0);
		            	coverage.setFemale_mort_tli_id(0);
		            }else {
		            	 if(jsonObj_mortality.getString("sex").equals("MALE")) {
				            	coverage.setMale_mort_tli_id(jsonObj_mortality.getInt("mort_tli_id"));
				            }else if(jsonObj_mortality.getString("sex").equals("")) {
				            	coverage.setFemale_mort_tli_id(jsonObj_mortality.getInt("mort_tli_id"));
				            }else {
				            	coverage.setMale_mort_tli_id(jsonObj_mortality.getInt("mort_tli_id"));
				            	coverage.setFemale_mort_tli_id(jsonObj_mortality.getInt("mort_tli_id"));
				         }
		            	  /////////////database disi ใหม่
		            	 if(!jsonObj_mortality.get("mort_tli_id").toString().trim().equals(""))
				            {
			            	 setprem.setCov_code(passInsurance);
			            	 setprem.setPrem_assump_type("MORTALITY");
			            	 if(jsonObj_mortality.getString("sex").equals("MALE")) {
			            		 setprem.setGender("MALE");
			            	 }else if (jsonObj_mortality.getString("sex").equals("FEMALE")) {
			            		 setprem.setGender("FEMALE");
			            	 }else if (jsonObj_mortality.getString("sex").equals("EITHER")) {
			            		 setprem.setGender("EITHER");
			            	 }else {
			            		 setprem.setGender("NONE");
			            	 }
			            	 setprem.setPrem_assump_rate_id(Integer.parseInt(jsonObj_mortality.getString("mort_tli_id")));
			            	 setprem.setUser_code(userId);
			            	 setprem.setUpdate_time(PDFFnc.currentTimeStamp());
			            	 list_Prem_assump_rate.add(setprem);
				            }
		 		        /////////////////////////////////
		            }
		        }
		        ///
		        //tpd_Tli
				String tpd_Tli_str = request.getParameter("tpd_Tli");
			  	JSONArray jsonArr_tpd_Tli = new JSONArray(tpd_Tli_str);
		        for (int i = 0; i < jsonArr_tpd_Tli.length(); i++)
		        {	
		        	Prem_assump_rate setprem = new Prem_assump_rate();
		            JSONObject jsonObj_tpdTli = jsonArr_tpd_Tli.getJSONObject(i);
		            if(jsonObj_tpdTli.get("tpd_tli_id").toString().trim().equals(""))
		            {
		            	coverage.setMale_tpd_tli_id(0);
		            	coverage.setFemale_tpd_tli_id(0);
		            }else {
		            	if(jsonObj_tpdTli.getString("sex").equals("MALE")) {
			            	coverage.setMale_tpd_tli_id(jsonObj_tpdTli.getInt("tpd_tli_id"));
			            }else if(jsonObj_tpdTli.getString("sex").equals("FEMALE")) {
			            	coverage.setFemale_tpd_tli_id(jsonObj_tpdTli.getInt("tpd_tli_id"));
			            }else {
			            	coverage.setMale_tpd_tli_id(jsonObj_tpdTli.getInt("tpd_tli_id"));
			            	coverage.setFemale_tpd_tli_id(jsonObj_tpdTli.getInt("tpd_tli_id"));
			            }
		            	 /////////////database disi ใหม่
		            	 if(!jsonObj_tpdTli.get("tpd_tli_id").toString().trim().equals(""))
				            {
			            	 setprem.setCov_code(passInsurance);
			            	 setprem.setPrem_assump_type("DISABILITY");
			            	 if(jsonObj_tpdTli.getString("sex").equals("MALE")) {
			            		 setprem.setGender("MALE");
			            	 }else if (jsonObj_tpdTli.getString("sex").equals("FEMALE")) {
			            		 setprem.setGender("FEMALE");
			            	 }else if (jsonObj_tpdTli.getString("sex").equals("EITHER")) {
			            		 setprem.setGender("EITHER");
			            	 }else {
			            		 setprem.setGender("NONE");
			            	 }
			            	 setprem.setPrem_assump_rate_id(Integer.parseInt(jsonObj_tpdTli.getString("tpd_tli_id")));
			            	 setprem.setUser_code(userId);
			            	 setprem.setUpdate_time(PDFFnc.currentTimeStamp());
			            	 list_Prem_assump_rate.add(setprem);
				            }
		            }
		        }
		        /////
		        par.doPremAssumpRate(list_Prem_assump_rate); //ไป Database ตัวใหม่
		        ////
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
			 	
			 	//Benz 27-08-2019
			 	if (!request.getParameter("max_insure_age").equals("")) {
			 		participant.setMax_insure_age(Integer.parseInt(request.getParameter("max_insure_age")));
					participant.setMax_insure_age_unit("YEAR");// prove

			 	}
			 /*	if (!request.getParameter("max_insure_year").equals("")) {
			 		participant.setMax_insure_y(Integer.parseInt(request.getParameter("max_insure_age")));
			 	}*/
			 
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
									System.out.println("PREM_INSTALL : "+prem_install.getPeriod());
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
			basicInfo.doCoverage(setCoverage);*/
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
			        		participant.setMax_insure_age(Integer.parseInt(max_insure_age));
			        		participant.setMax_insure_age_unit("YEAR");
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
			        		 participant.setMax_insure_age_unit("YEAR");
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
			String passInsurance 		= request.getParameter("passInsurance");
			////////////////////////////Benz///////////////////////////////////////////
			ArrayList<Coverage> caseAll_return;
			MainInsuranceService mis = new MainInsuranceService();
			String case_type	= "RIDER";  
			caseAll_return = mis.GetCaseAll(case_type); 
			
			RiderAccessData bpi = null;
			//
			for (int i = 0; i < caseAll_return.size(); i++) {
				if (caseAll_return.get(i).getCov_code().equals(passInsurance)) {
					bpi = new RiderAccessData(caseAll_return.get(i));
				} 
			}
			
			
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
			//////////////////////////////////////////////////////////////////////
			
			
			
			
			
			RiderCL_SaveData_Service settoService = new RiderCL_SaveData_Service ();
			RiderPremiumCal	rpc = new RiderPremiumCal();
			 ConstantValues.COV_CODE 	= passInsurance;
			Coverage coverage 			= new Coverage();
			String groupName 			= request.getParameter("groupName");
			ConstantValues.GROUP_NAME 	= groupName;
			
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
		        	rate_layout.setSub_code(jsonObj_table_insurance_premium.getString("rate_type"));
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
	        
	        coverage.setCov_code(passInsurance);
	        coverage.setIs_prem_disc(bo_prem_dis);
	        coverage.setMin_prem_disc_rate(min_prem_dis_rate);
	        coverage.setMax_prem_disc_rate(max_prem_dis_rate);
	        coverage.setPrem_calc_meth("PREM_ONLY");
	        coverage.setStatus("UPDATE");
	        coverage.setUser_code(userId);
	        coverage.setUpdate_time(getCurrentTimestamp());
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
	        JSONArray jsonArr_standard_risk = new JSONArray();
	        
	        jsonArr_standard_risk = FreezePolicyValue.policy_value;
	        ArrayList<Rate_layout> lstRateLayout_standard_risk = new ArrayList<>();
			 BasePlanCL_SaveData_Service bss = new BasePlanCL_SaveData_Service();
			 if (jsonArr_standard_risk != null && jsonArr_standard_risk.length() != 0) {
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
	        
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "save_cal_insurance_premiums";
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
			RiderCL_SaveData_Service rss = new RiderCL_SaveData_Service();
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
		return "save_table_policy_value";
	}
	ArrayList<Object []> returnBenefitItemMaster = new ArrayList<>();
	public String save_Tab_Benefits_Coverage_Checker(HttpServletRequest request, HttpServletResponse response) throws Exception 
	{
		try {
			String groupName 			= request.getParameter("groupName");
			ConstantValues.GROUP_NAME 	= groupName;
			RiderCL_SaveData_Service settoService = new RiderCL_SaveData_Service ();
			String passInsurance = request.getParameter("passInsurance");
			String benefitsCoverage = request.getParameter("benefitsCoverage");
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
				System.out.println("Get//"+json);
			}
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
			Benefit_item 	benefit_item  					= new Benefit_item();
			Benefit_sched 	benefit_sched 					= new Benefit_sched();
  			Benefit_amount 	benefit_amount 					= new Benefit_amount();
  			Benefit_limit 	benefit_limit 					= new Benefit_limit();
  			Benefit_special_amount 	benefit_special_amount 	= new Benefit_special_amount();
  			int bnf_item_id = 0;
  			ArrayList listToRTE = new ArrayList<>();
			  for (int i = 0; i < jsonArr_benefitsCoverage.length(); i++)
		        {
				  JSONObject jsonObj__benefitsCoverage = jsonArr_benefitsCoverage.getJSONObject(i);
		        	//tab
				  String tab 	=  String.valueOf(jsonObj__benefitsCoverage.get("tab"));
				  bnf_item_id 	= Integer.parseInt(tab);	
				  
				  String value =  String.valueOf(jsonObj__benefitsCoverage.get("value"));
				  JSONArray jsonArr_value = new JSONArray(value);
				  if (jsonArr_value.length() != 0) {
					  ArrayList<Object> 	listBenf			= new ArrayList<>();
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
		          			 	
		          				JSONObject jsonObj__value = jsonObj_value.getJSONObject(iii);
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
						          			benefit_amount.setBenef_factor("NONE");
						          			benefit_amount.setSubseq_benef_factor("NONE");
						          			BigDecimal  count    = covertStringtoBigDecimal(jsonObj__value.get("count").toString());
						          			benefit_amount.setBenef_amt(count);
						          			benefit_amount.setBenef_unit(jsonObj__value.getString("unit"));
						          			benefit_amount.setBenef_factor(jsonObj__value.getString("by_capital"));
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
									        BigDecimal factor_min    = covertStringtoBigDecimal(jsonObj__value.get("factor_min").toString());
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
						          			benefit_amount.setBenef_factor("NONE");
						          			benefit_amount.setSubseq_benef_factor("NONE");
						          			BigDecimal  count    = covertStringtoBigDecimal(jsonObj__value.get("count").toString());
						          			benefit_amount.setBenef_amt(count);
						          			benefit_amount.setBenef_unit(jsonObj__value.getString("unit"));
						          			benefit_amount.setBenef_factor(jsonObj__value.getString("by_capital"));
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
						          			BigDecimal factor_min    = covertStringtoBigDecimal(jsonObj__value.get("factor_min").toString());
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
		          				}
		                    listToRTE.add(alltable_jsonArray);
		          		}
				  }
	          		settoService.set_benefit(tab,passInsurance,listToRTE);
	          		
	          		 /////คืนค่า CV ////////// Benz 26-08-2019
	          	  RiderCovTerminateData rt 					= new RiderCovTerminateData ();
      			  ArrayList<Cov_terminate> arr_cov 			=  rt.searchCovTerminate(bnf_item_id);
	      			  Cov_terminate cov_term = new Cov_terminate ();
	      			  if (arr_cov.size() == 0) {
	      				  cov_term.setBnf_item_id(bnf_item_id);
	      				  cov_term.setTerm_cov_code(passInsurance);
	      				  String cv 			=   request.getParameter("cv");
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
			      				String cv 			=   request.getParameter("cv");
			      				Boolean boolean_cv 	= Boolean.valueOf(cv);
			      				cov_term.setReturn_cash_surr(boolean_cv);
			      				cov_term.setUser_code(userId);
			      				cov_term.setUpdate_time(getCurrentTimestamp());
			      				rt.doTerminate(cov_term);
							}else {
								 cov_term.setBnf_item_id(bnf_item_id);
			      				  cov_term.setTerm_cov_code(passInsurance);
			      				  String cv 			=   request.getParameter("cv");
			      				  Boolean boolean_cv 	= Boolean.valueOf(cv);
			      				  cov_term.setReturn_cash_surr(boolean_cv);
			      				  cov_term.setUser_code(userId);
			      				  cov_term.setUpdate_time(getCurrentTimestamp());
			      				  rt.doTerminate(cov_term);
							}
						}
	      			  }
		        }
				String groupName 			= request.getParameter("groupName");
				ConstantValues.GROUP_NAME 	= groupName;
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
		return "save_Tab_Benefits";
	}
	public String save_tab_Endorse(HttpServletRequest request, HttpServletResponse response) throws Exception 
	{
		try {
			String groupName 			= request.getParameter("groupName");
			ConstantValues.GROUP_NAME 	= groupName;
			String passInsurance = request.getParameter("passInsurance");
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
			String expand_coverage = request.getParameter("expand_coverage");
			JSONArray jsonArr_expand_coverage = null;
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
			////////////Rider 
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
	public void setPremiumAcessData(PremiumAcessData premiumAcessData) {
		this.premiumAcessData = premiumAcessData;
	}
}