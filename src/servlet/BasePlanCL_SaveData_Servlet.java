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

//import com.fasterxml.jackson.databind.ObjectMapper;

import layout.bean.productfac.beanset.ParticipantAccessData;
import layout.bean.productfac.coverage.Age_calc_meth;
import layout.bean.productfac.coverage.Benefit_amount;
import layout.bean.productfac.coverage.Benefit_item;
import layout.bean.productfac.coverage.Benefit_period;
import layout.bean.productfac.coverage.Benefit_sched;
import layout.bean.productfac.coverage.Benefit_period_det;
import layout.bean.productfac.coverage.Coverage;
import layout.bean.productfac.coverage.Document;
import layout.bean.productfac.coverage.Filing_channel;
import layout.bean.productfac.coverage.Mode;
import layout.bean.productfac.coverage.Participant;
import layout.bean.productfac.coverage.Prem_assump_rate;
import layout.bean.productfac.coverage.Prem_install;
import layout.bean.productfac.coverage.Premium_period;
import layout.bean.productfac.coverage.Rate_layout;
import layout.bean.productfac.product.Product;
import layout.bean.productfac.workflow.Coverage_request;
import layout.bean.productfac.workflow.Coverage_task;
import service.BasePlanCL_SaveData_Service;
import service.FreezePolicyValue;
import service.center.PremAssumpRateData;
import service.center.WorkFlowCoverage;
import service.ctrl.CoverageData;
import service.ctrl.PolicyWordingControlData;
import service.fnc.ConstantValues;
import service.fnc.PDFFnc;
import service.tab.BasicInfoDataTab;

/**
 * Servlet implementation class BasePlanCL_SaveData_Servlet
 */
@WebServlet("/BasePlanCL_SaveData_Servlet")
public class BasePlanCL_SaveData_Servlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private String userId;
    
	/**
     * @see HttpServlet#HttpServlet()
     */
    public BasePlanCL_SaveData_Servlet() {
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
		System.out.println("======= Save BasePlanCL ======"); 
		String responseText = "";
		 String passInsurance 		= request.getParameter("passInsurance");
		 ConstantValues.COV_CODE 	= passInsurance;
		 String groupName 			=  ConstantValues.GROUP_NAME;
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
			BasePlanCL_SaveData_Service settoService = new BasePlanCL_SaveData_Service ();
			String passInsurance    	= request.getParameter("passInsurance");
			
			String groupName 		= request.getParameter("groupName");
			ConstantValues.GROUP_NAME = groupName;
			
			//coverage
				CoverageData cd 		= new CoverageData();
				Coverage coverage 	=	cd.searchCoverage(passInsurance);
				//Coverage coverage = new Coverage();
				coverage.setCov_code(request.getParameter("passInsurance"));
				coverage.setName_th(request.getParameter("name_th"));
				coverage.setName_en(request.getParameter("name_en"));
				//coverage.setMin_em(new BigDecimal(0));
				//coverage.setMax_em(new BigDecimal(0));
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
		        coverage.setStatus("UPDATE");//*Benz 30-08-2019
		        coverage.setUpdate_time(PDFFnc.currentTimeStamp());
			 	settoService.setCoverageObj(coverage);
			 	
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
				
				/*
				//////////////////////////Row1
				Coverage_task  setcovtask = new Coverage_task();
				setcovtask.setCov_code(passInsurance);
				setcovtask.setDepartment(ConstantValues.GROUP_NAME);
				setcovtask.setApprove_status("NEW");
				setcovtask.setUser_code(userId);
				setcovtask.setUpdate_time(PDFFnc.currentTimeStamp());
				arr_Coverage_task.add(setcovtask);
				//////////////////////////Row2
				setcovtask = new Coverage_task();
				setcovtask.setCov_code(passInsurance);
				setcovtask.setDepartment("RP");
				setcovtask.setApprove_status("NEW");
				setcovtask.setUser_code(userId);
				setcovtask.setUpdate_time(PDFFnc.currentTimeStamp());
				arr_Coverage_task.add(setcovtask);*/
				
			 	
			 	
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
				JSONArray jsonArr_taxReduce = new JSONArray();
				if(taxReduce_str != null) {
					jsonArr_taxReduce = new JSONArray(taxReduce_str);
				}
			  	//JSONArray jsonArr_taxReduce = new JSONArray(taxReduce_str);
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
			  
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "success";
	}
	public String save_PolicyWording(HttpServletRequest request, HttpServletResponse response) throws Exception{
		try {
			String passInsurance = request.getParameter("passInsurance");
			String groupName 		= request.getParameter("groupName");
			ConstantValues.GROUP_NAME = groupName;
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
			
		/*	//set Status //*Benz 30-08-2019
			CoverageData cd 		= new CoverageData();
			Coverage setCoverage 	=	cd.searchCoverage(passInsurance);
			setCoverage.setStatus("UPDATE");
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
	
	public String save_Tab_rights_insurance(HttpServletRequest request, HttpServletResponse response) throws Exception 
	{
		try {
			BasePlanCL_SaveData_Service settoService = new BasePlanCL_SaveData_Service ();
			String surrender_check 	= request.getParameter("surrender_check");
			String passInsurance	= request.getParameter("passInsurance");
			String groupName 		= request.getParameter("groupName");
			ConstantValues.GROUP_NAME = groupName;
			
			boolean setsurrender_check = Boolean.parseBoolean(surrender_check);
			settoService.set_Nonforf_provision(setsurrender_check,passInsurance,userId);
			 
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
			BasePlanCL_SaveData_Service settoService = new BasePlanCL_SaveData_Service ();
			String passInsurance = request.getParameter("passInsurance");
			String groupName 		= request.getParameter("groupName");
			ConstantValues.GROUP_NAME = groupName;
			
			Coverage coverage = new Coverage();
			
	        //table_insurance_premium
	        String table_insurance_premium	= request.getParameter("table_insurance_premium");
	        System.out.println("NNNNNNNNNNNNNNNN///"+table_insurance_premium);
	        JSONArray jsonArr_table_insurance_premium = new JSONArray() ;
	        if(table_insurance_premium != null) {
	        	jsonArr_table_insurance_premium = new JSONArray(table_insurance_premium);
	        }
	        //JSONArray jsonArr_table_insurance_premium = new JSONArray(table_insurance_premium);
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
		        	
		        	// FIX VALUE
		        	rate_layout.setUser_code(userId);
		        	rate_layout.setUpdate_time(getCurrentTimestamp());
		        	///New
		        	rate_layout.setSub_code(jsonObj_table_insurance_premium.getString("rate_type"));
		        	lsRate_layouts_stardard.add(rate_layout);
	        }
	        settoService.setRate_layout_Standard(lsRate_layouts_stardard);
	        Boolean is_substd = Boolean.valueOf(request.getParameter("is_substd"));
	        if (is_substd == true) {
	        	//table_extra_Rate
	        	coverage.setIs_substd(is_substd);
		        String table_extra_Rate	= request.getParameter("table_extra_Rate");
		        JSONArray jsonArr_table_extra_Rate = new JSONArray();
		        if(table_extra_Rate != null) {
		        	jsonArr_table_extra_Rate = new JSONArray(table_extra_Rate);
		        }
		        //JSONArray jsonArr_table_extra_Rate = new JSONArray(table_extra_Rate);
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
	        coverage.setPrem_calc_meth("PREM_ONLY");
	        coverage.setStatus("UPDATE");
	        coverage.setUser_code(userId);
	        coverage.setUpdate_time(getCurrentTimestamp());
	        // Service 
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
			 BasePlanCL_SaveData_Service bss = new BasePlanCL_SaveData_Service();
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
	        
	     /////////////////////////////////////////END///////////////////////////////////////   
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	public String save_table_policy_value(HttpServletRequest request, HttpServletResponse response) throws Exception 
	{
		try {
			String passInsurance = request.getParameter("passInsurance");
			String groupName 		= request.getParameter("groupName");
			ConstantValues.GROUP_NAME = groupName;
			//standard_risk
				String standard_risk = request.getParameter("standard_risk");
				Boolean is_standard_risk = Boolean.valueOf(request.getParameter("is_standard_risk"));
				Boolean is_standard_risk_row = Boolean.valueOf(request.getParameter("is_standard_risk_row"));
				
				JSONArray jsonArr_standard_risk = new JSONArray();
				if(!standard_risk.equals(null)) {
					jsonArr_standard_risk = new JSONArray(standard_risk);
				}
			 //JSONArray jsonArr_standard_risk = new JSONArray(standard_risk);
			 ArrayList<Rate_layout> lstRateLayout_standard_risk = new ArrayList<>();
			 BasePlanCL_SaveData_Service bss = new BasePlanCL_SaveData_Service();
			 
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
	public String save_Tab_coverageBenefits(HttpServletRequest request, HttpServletResponse response) throws Exception 
	{
		try {
			String passInsurance = request.getParameter("passInsurance");
			//Group_dead
			String group_dead = request.getParameter("Group_dead");
					JSONArray jsonArr_group_dead = new JSONArray(group_dead);
			        for (int i = 0; i < jsonArr_group_dead.length(); i++)
			        {
				        	 JSONObject jsonObj_group_dead = jsonArr_group_dead.getJSONObject(i);
				        	 	//System.out.println(jsonObj_group_dead.get("dead"));
				        	 	//System.out.println(jsonObj_group_dead.get("insured_member"));
			        }
			//Group_disability
			String group_disability = request.getParameter("Group_disability");
			JSONArray jsonArr_group_disability = new JSONArray(group_disability);
	        for (int i = 0; i < jsonArr_group_disability.length(); i++)
	        {
		        	 JSONObject jsonObj_group_disability = jsonArr_group_disability.getJSONObject(i);
		        	 	//System.out.println(jsonObj_group_disability.get("disability"));
		        	 	//System.out.println(jsonObj_group_disability.get("insured_member"));
	        }
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	public String save_benefitsCoverage_dead(HttpServletRequest request, HttpServletResponse response) throws Exception 
	{
		try {
			String passInsurance 	= request.getParameter("passInsurance");
			String die  			= request.getParameter("die");
			JSONArray jsonArr_die = new JSONArray(die);
			ArrayList<Benefit_sched> lstBenefit_sched = new ArrayList<>();
			ArrayList<Benefit_amount> lstBenefit_amount = new ArrayList<>();
			 BasePlanCL_SaveData_Service bss = new BasePlanCL_SaveData_Service();
			 String bnf_item_id = request.getParameter("bnf_item_id").trim().isEmpty() ? "0" : request.getParameter("bnf_item_id");
			 int bnf_item_id_in = 0; 
			 //seve Benefit_item
		        ArrayList<Benefit_item> lstBenefit_item = new ArrayList<>();
		        Benefit_item benefit_item = new Benefit_item();
		        benefit_item.setCov_code(passInsurance);
		        benefit_item.setBnf_item_id(Integer.parseInt(bnf_item_id));
		        benefit_item.setBnf_code("BC_01_0001");//รอดึงจากหน้าบ้านใหม่
		        benefit_item.setPartic_type("PRIMARY");
		        benefit_item.setWaiting_period_unit("NONE");
		        benefit_item.setUser_code(userId);
		        benefit_item.setUpdate_time(PDFFnc.currentTimeStamp());
		        lstBenefit_item.add(benefit_item);;
		        bnf_item_id_in =  bss.doCoverageBenefitItem(lstBenefit_item);
			 
			 for (int i = 0; i < jsonArr_die.length(); i++)
	        {
		        	 JSONObject jsonObj_die = jsonArr_die.getJSONObject(i);
		        	 Benefit_sched benefit_sched = new Benefit_sched();
		        	 Benefit_amount benefit_amount = new Benefit_amount();
		        	 //benefit_sched
		        	 benefit_sched.setBnf_item_id(bnf_item_id_in);
		        	 benefit_amount.setBnf_item_id(bnf_item_id_in);
		        	 if (jsonObj_die.get("distance") != "") {
		        		 int  distance    = (Integer.parseInt((String) jsonObj_die.get("distance")));
		        		  benefit_sched.setSched_seq(distance);
		        		  benefit_amount.setSched_seq(distance);
		        		  benefit_amount.setAmt_seq(distance);
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
		        	 lstBenefit_sched.add(benefit_sched);
		        	 	
		        	 //benefit_amount
		        	 if (jsonObj_die.get("sa") != "") {
					 	BigDecimal sa    = covertStringtoBigDecimal(jsonObj_die.get("sa").toString());
		        	 	benefit_amount.setBenef_amt(sa);
		        	 }
		        	 	benefit_amount.setBenef_factor((String) jsonObj_die.get("sa_type"));
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
	public String save_benefitsCoverage_disability(HttpServletRequest request, HttpServletResponse response) throws Exception 
	{
		try {
			String passInsurance = request.getParameter("passInsurance");
			String permanent_disability = request.getParameter("permanent_disability");
			JSONArray jsonArr_permanent_disability = new JSONArray(permanent_disability);
			ArrayList<Benefit_sched> lstBenefit_sched = new ArrayList<>();
			ArrayList<Benefit_amount> lstBenefit_amount = new ArrayList<>();
			BasePlanCL_SaveData_Service bss = new BasePlanCL_SaveData_Service();
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
