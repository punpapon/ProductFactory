package service;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;


import layout.bean.productfac.beanset.BenefitAccessData;
import layout.bean.productfac.beanset.ParticipantAccessData;
import layout.bean.productfac.beanset.PremiumAcessData;
import layout.bean.productfac.coverage.Age_calc_meth;
import layout.bean.productfac.coverage.Benefit_amount;
import layout.bean.productfac.coverage.Benefit_item;
import layout.bean.productfac.coverage.Benefit_limit;
import layout.bean.productfac.coverage.Benefit_sched;
import layout.bean.productfac.coverage.Benefit_special_amount;
import layout.bean.productfac.coverage.Coverage;
import layout.bean.productfac.coverage.Filing_channel;
import layout.bean.productfac.coverage.Mode;
import layout.bean.productfac.coverage.Nonforf_provision;
import layout.bean.productfac.coverage.Note;
import layout.bean.productfac.coverage.Participant;
import layout.bean.productfac.coverage.Prem_install;
import layout.bean.productfac.coverage.Premium_period;
import layout.bean.productfac.coverage.Rate_layout;
import service.rider.RiderBasicInfo;
import service.rider.RiderBasicInfoOL;
import service.rider.RiderBenefits;
import service.rider.RiderProtectedPerson;
import service.baseplan.BasePlanBenefits;
import service.baseplan.BasePlanPremiumCal;
import service.baseplan.BasePlanValueInsue;
import service.baseplan.merge.BasicInfo;
import service.fnc.PDFFnc;

/**
 * @author tleuser
 *
 */
public class RiderOL_SaveData_Service {
	private ParticipantAccessData participantAccessData;
	private Coverage coverage;
	private Participant participant;
	private List<Mode> mode;
	private List<Filing_channel> filing_channels;
	private List<Age_calc_meth> age_calc_meths;

	private Nonforf_provision nonforf_provision;
	private List<Benefit_sched> benefit_sched;
	private List<Benefit_amount> benefit_amount;
	private List<Benefit_item> benefit_item;
	private List<Benefit_limit> benefit_limit;
	private List<Benefit_special_amount> benefit_special_amount;
	
	private PremiumAcessData premiumAcessData;
	private List<Rate_layout> lstRate_layout;
	private Note note;
	RiderBasicInfoOL basicInfo;
	RiderProtectedPerson brotectedPerson;
	BasePlanValueInsue valueInsue; 
	BasePlanBenefits bnenefits;
	RiderBenefits riderBenefits;
	BasePlanPremiumCal premiumCal;
	//coverage
	public  String setCoverageObj(Coverage obj) throws Exception
	{ 
		String  datareturn = null;
		try {
			Coverage coverage = new BasicInfo().searchCoverage(obj.getCov_code());
			coverage.setName_th(obj.getName_th());
			coverage.setName_en(obj.getName_en());
			coverage.setSale_eff_date(obj.getSale_eff_date());
			coverage.setSale_exp_date(obj.getSale_exp_date());
			coverage.setCov_unit_type(obj.getCov_unit_type());
			coverage.setContract_term(obj.getContract_term());
			coverage.setPrem_int_rate(obj.getPrem_int_rate());
			coverage.setSum_decr_int_rate(obj.getSum_decr_int_rate());
			coverage.setIs_install(obj.getIs_install());
			coverage.setCov_unit_type(obj.getCov_unit_type());
			coverage.setMale_mort_tli_id(obj.getMale_mort_tli_id());
			coverage.setFemale_mort_tli_id(obj.getFemale_mort_tli_id());
			coverage.setMale_tpd_tli_id(obj.getMale_tpd_tli_id());
			coverage.setFemale_tpd_tli_id(obj.getFemale_tpd_tli_id());
			coverage.setMin_em(obj.getMin_em());
			coverage.setMax_em(obj.getMax_em());
			coverage.setIs_bundle(obj.getIs_bundle());
			// HARD VALUE
			coverage.setStatus(obj.getStatus());
			coverage.setUser_code(obj.getUser_code());
			coverage.setUpdate_time(getCurrentTimestamp());
			coverage.setTax_health_prem_percent(obj.getTax_health_prem_percent());
			
			setCoverage(coverage);
			basicInfo = new RiderBasicInfoOL();
			this.basicInfo.doCoverage(getCoverage());
			
			datareturn = "Success";
		} catch (Exception e) {
			datareturn = "Fail";
			e.printStackTrace();
		}
		return datareturn;
	}
	//participant
	public String setPaticipantAccess(ParticipantAccessData obj) throws Exception 
	{
		String  datareturn = null;
		try {
			this.participantAccessData = new ParticipantAccessData();
			participantAccessData.setParticipant(obj.getParticipant());
			participantAccessData.setListBenefitPeriod(obj.getListBenefitPeriod()); // prove
			participantAccessData.setListBenefitPeriodDet(obj.getListBenefitPeriodDet());
			participantAccessData.setListAgeCalcMeth(obj.getListAgeCalcMeth());
			basicInfo = new RiderBasicInfoOL();
			this.basicInfo.doParticipant(participantAccessData);
			datareturn = "Success";
		} catch (Exception e) {
			e.printStackTrace();
			datareturn = "Fail";
		}
		return datareturn ;
	}
	
	//mode
	public String set_Mode(ArrayList<Mode> lstMode) throws Exception{
		String  datareturn = null;
		try {
			 setMode(lstMode);
			 basicInfo = new RiderBasicInfoOL();
			 this.basicInfo.doMode(lstMode);
			 datareturn = "Success"; 
		} catch (Exception e) {
			e.printStackTrace();
			datareturn = "Fail";
		}
		return datareturn;
	}
	//filing_chanel
	public String set_FilingChanel(ArrayList<Filing_channel> lstFilingChanel) throws Exception{
		String  datareturn = null;
		try {
			setFiling_channels(lstFilingChanel);
			 basicInfo = new RiderBasicInfoOL();
			 this.basicInfo.doFillingChannel(lstFilingChanel);
			 
			 datareturn = "Success"; 
		} catch (Exception e) {
			e.printStackTrace();
			 datareturn = "Fail";
		}
		return datareturn;
	}

	//PaymentContract
	public String setPremiumAcessData(Premium_period premium_period,ArrayList<Prem_install> list) {
		String datareturn = null;
		try {
			ArrayList<Premium_period> lstPremium_periods = new ArrayList<>();
			lstPremium_periods.add(premium_period);
			premiumAcessData = new PremiumAcessData();
			premiumAcessData.setListPremiumPeriod(lstPremium_periods);
			premiumAcessData.setListPremInstall(list);
			setPremiumAcessData(premiumAcessData);
			basicInfo = new RiderBasicInfoOL();
			this.basicInfo.doPremium(premiumAcessData);
			 datareturn = "Success"; 
		} catch (Exception e) {
			e.printStackTrace();
			datareturn = "Fail";
		}
		return datareturn;
	}
	
	//table_TaxReduce
	public String setRate_layout(ArrayList<Rate_layout> list) {
		String datareturn = null;
		try {
			setLstRate_layout(list);
			basicInfo = new RiderBasicInfoOL();
			this.basicInfo.doRateLayoutTAXOL(list);
			 datareturn = "Success"; 
				for(Rate_layout rate : list) {
					System.out.println("NAME_th : " + rate.get());
				}
			 
		} catch (Exception e) {
			e.printStackTrace();
			datareturn = "Fail";
		}
		return datareturn;
	}
	//note
	public String setNote(String nn,String CovCode) {
		String datareturn = null;
		try {
			ArrayList<Note> lstNote = new ArrayList<>();
			Note note = new Note();
			note.setNote(nn);
			note.setCov_code(CovCode);
			note.setSeq(1);
			note.setUpdate_time(getCurrentTimestamp());
			setNote(note);
			lstNote.add(note);
			basicInfo = new RiderBasicInfoOL();
			this.basicInfo.doNote(lstNote);
			 datareturn = "Success"; 
		} catch (Exception e) {
			e.printStackTrace();
			datareturn = "Fail";
		}
		return datareturn;
	}
	//ProtectedPerson
	public String setParticipant(ArrayList<Participant> list) throws Exception{
		String  datareturn = null;
		try {
			//System.out.println("-************/"+list.size());
			//setParticipant(list);
			brotectedPerson = new RiderProtectedPerson();
			 this.brotectedPerson.doProtectedPersonData(list);
			 datareturn = "Success"; 
		} catch (Exception e) {
			e.printStackTrace();
			datareturn = "Fail";
		}
		return datareturn ;
	}
	/********Tab Premium Cal*******/
	//coverage
		public  String setCoverage_premiumCal(Coverage obj) throws Exception
		{ 
			String  datareturn = null;
			try {
				Coverage coverage = new BasicInfo().searchCoverage(obj.getCov_code());
				coverage.setPrem_calc_meth(obj.getPrem_calc_meth());
				coverage.setIs_prem_disc(obj.getIs_prem_disc());
				coverage.setMin_prem_disc_rate(obj.getMin_prem_disc_rate());
				coverage.setMax_prem_disc_rate(obj.getMax_prem_disc_rate());
				coverage.setIs_substd(obj.getIs_substd());
				//coverage.setIs_sa_decr(obj.getIs_sa_decr());
				coverage.setMin_em(obj.getMin_em());
				coverage.setMax_em(obj.getMax_em());
				coverage.setUser_code(obj.getUser_code());
				coverage.setUpdate_time(getCurrentTimestamp());
				coverage.setStatus(obj.getStatus());
				setCoverage(coverage);
				basicInfo = new RiderBasicInfoOL();
				this.basicInfo.doCoverage(getCoverage());
				datareturn = "Success";
			} catch (Exception e) {
				datareturn = "Fail";
				e.printStackTrace();
			}
			return datareturn;
		}
	public String setRate_layout_Standard(ArrayList<Rate_layout> list) {
		String datareturn = null;
		try {
			setLstRate_layout(list);
			premiumCal = new BasePlanPremiumCal();
			this.premiumCal.doPMStandardOL(list);
			 datareturn = "Success"; 
		} catch (Exception e) {
			e.printStackTrace();
			datareturn = "Fail";
		}
		return datareturn;
	}
	public String setRate_layout_Special(ArrayList<Rate_layout> list) {
		String datareturn = null;
		try {
			setLstRate_layout(list);
			premiumCal = new BasePlanPremiumCal();
			this.premiumCal.doPMSpecialOL(list);
			 datareturn = "Success"; 
		} catch (Exception e) {
			e.printStackTrace();
			datareturn = "Fail";
		}
		return datareturn;
	}
	public String setRate_layout_BetweenAge(ArrayList<Rate_layout> list) {
		String datareturn = null;
		try {
			setLstRate_layout(list);
			premiumCal = new BasePlanPremiumCal();
			this.premiumCal.doPMBetweenAgeOL(list);
			 datareturn = "Success"; 
		} catch (Exception e) {
			e.printStackTrace();
			datareturn = "Fail";
		}
		return datareturn;
	}
	public String setRate_layout_CapitalDecrease(ArrayList<Rate_layout> list) {
		String datareturn = null;
		try {
			setLstRate_layout(list);
			premiumCal = new BasePlanPremiumCal();
			this.premiumCal.doCapitalDecrease(list);
			 datareturn = "Success"; 
		} catch (Exception e) {
			e.printStackTrace();
			datareturn = "Fail";
		}
		return datareturn;
	}
	public String setRate_layout_NAR(ArrayList<Rate_layout> list) {
		String datareturn = null;
		try {
			setLstRate_layout(list);
			premiumCal = new BasePlanPremiumCal();
			this.premiumCal.doNAROL(list);
			 datareturn = "Success"; 
		} catch (Exception e) {
			e.printStackTrace();
			datareturn = "Fail";
		}
		return datareturn;
	}
	/*************************************/
	//table_policy_value
		public String setRate_layout_standard_risk(ArrayList<Rate_layout> list) {
			String datareturn = null;
			try {
				setLstRate_layout(list);
				valueInsue = new BasePlanValueInsue();
				this.valueInsue.doRiskStandardOL(list);
				datareturn = "Success"; 
			} catch (Exception e) {
				e.printStackTrace();
				datareturn = "Fail";
			}
			return datareturn;
		}
		public String setRate_layout_standard_risk_row(ArrayList<Rate_layout> list) {
			String datareturn = null;
			try {
				setLstRate_layout(list);
				valueInsue = new BasePlanValueInsue();
				this.valueInsue.doRiskLowStandardOL(list);
				datareturn = "Success"; 
			} catch (Exception e) {
				e.printStackTrace();
				datareturn = "Fail";
			}
			return datareturn;
		}
		
	///benefitMaster
		public ArrayList<Object []> doCoverageBenefitItemMaster(String cov_code,String [] str_bnf_code,String  user_code) throws Exception
		{
			riderBenefits = new RiderBenefits();
			return this.riderBenefits.doฺBenefitItemMasterRider(cov_code,str_bnf_code,user_code);
		}
	///benefitRider
	public String set_benefit(String master_ID,String cov_code,ArrayList listToRTE) throws Exception
	{
		String  datareturn = "Success";
		try {
			//printData(listToRTE);
			RiderBenefits riderBenefits = new RiderBenefits();
			riderBenefits.doBenefitRiderData(master_ID,cov_code,listToRTE);
			ArrayList<BenefitAccessData> listDataReturn = riderBenefits.getListBenefitAccessData();
		} catch (Exception e) {
			e.printStackTrace();
			datareturn = " Fail \n"+e.getMessage();
		}
		return datareturn;
	}

	/////////////////////////////////// BENZ
	/////////////////////////////////// 05-08-2019/////////////////////////////////////////////////////////////
	public String setRate_layout_table_dis_sa(ArrayList<Rate_layout> list) {
		String datareturn = null;
		try {
			setLstRate_layout(list);
			valueInsue = new BasePlanValueInsue();
			this.valueInsue.doTable_dis_sa(list);
			datareturn = "Success";
		} catch (Exception e) {
			datareturn = "Fail";
		}
		return datareturn;
	}
	public List<Benefit_limit> getBenefit_limit() {
		return benefit_limit;
	}
	public void setBenefit_limit(List<Benefit_limit> benefit_limit) {
		this.benefit_limit = benefit_limit;
	}
	public List<Benefit_special_amount> getBenefit_special_amount() {
		return benefit_special_amount;
	}
	public void setBenefit_special_amount(List<Benefit_special_amount> benefit_special_amount) {
		this.benefit_special_amount = benefit_special_amount;
	}
	public List<Benefit_amount> getBenefit_amount() {
		return benefit_amount;
	}

	public void setBenefit_amount(List<Benefit_amount> benefit_amount) {
		this.benefit_amount = benefit_amount;
	}
	
	public List<Benefit_sched> getBenefit_sched() {
		return benefit_sched;
	}

	public void setBenefit_sched(List<Benefit_sched> benefit_sched) {
		this.benefit_sched = benefit_sched;
	}
	public List<Benefit_item> getBenefit_item() {
		return benefit_item;
	}

	public void setBenefit_item(List<Benefit_item> benefit_item) {
		this.benefit_item = benefit_item;
	}
	private void setNonforf_provision(Nonforf_provision nonforf_provision) 
	{
		this.nonforf_provision = nonforf_provision;
	}
	
	public Nonforf_provision getNonforf_provision() 
	{
		return nonforf_provision;
	}
	
	public List<Age_calc_meth> getAge_calc_meths() {
		return age_calc_meths;
	}

	public void setAge_calc_meths(List<Age_calc_meth> age_calc_meths) {
		this.age_calc_meths = age_calc_meths;
	}
	public List<Filing_channel> getFiling_channels() {
		return filing_channels;
	}

	public void setFiling_channels(List<Filing_channel> filing_channels) {
		this.filing_channels = filing_channels;
	}
	
	 public List<Mode> getMode() {
			return mode;
		}

	public void setMode(List<Mode> mode) {
			this.mode = mode;
	}
	private void setCoverage(Coverage coverage) 
	{
		this.coverage = coverage;
	}
	
	public Coverage getCoverage() 
	{
		return coverage;
	}
	private void setParticipant(Participant participant) 
	{
		this.participant = participant;
	}
	public Participant getParticipant() {
		return participant;
	}
	public PremiumAcessData getPremiumAcessData() {
		return premiumAcessData;
	}
	public void setPremiumAcessData(PremiumAcessData premiumAcessData) {
		this.premiumAcessData = premiumAcessData;
	}
	public List<Rate_layout> getLstRate_layout() {
		return lstRate_layout;
	}
	public void setLstRate_layout(List<Rate_layout> lstRate_layout) {
		this.lstRate_layout = lstRate_layout;
	}
	public Note getNote() {
		return note;
	}
	public void setNote(Note note) {
		this.note = note;
	}
	
	private Timestamp getCurrentTimestamp() throws Exception
	{
		return PDFFnc.currentTimeStamp();
	}
	
}