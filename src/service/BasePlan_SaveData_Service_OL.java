package service;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import layout.bean.productfac.beanset.ParticipantAccessData;
import layout.bean.productfac.beanset.PremiumAcessData;
import layout.bean.productfac.coverage.Age_calc_meth;
import layout.bean.productfac.coverage.Benefit_period;
import layout.bean.productfac.coverage.Coverage;
import layout.bean.productfac.coverage.Filing_channel;
import layout.bean.productfac.coverage.Mode;
import layout.bean.productfac.coverage.Nonforf_provision;
import layout.bean.productfac.coverage.Note;
import layout.bean.productfac.coverage.Participant;

import layout.bean.productfac.coverage.Benefit_sched;
import layout.bean.productfac.coverage.Benefit_amount;
import layout.bean.productfac.coverage.Benefit_item;
import layout.bean.productfac.coverage.Prem_install;
import layout.bean.productfac.coverage.Premium_period;
import layout.bean.productfac.coverage.Rate_layout;

import service.baseplan.BasePlanBasicInfo;
import service.baseplan.BasePlanBenefits;
import service.baseplan.BasePlanGrantRightsInsure;
import service.baseplan.BasePlanPremiumCal;
import service.baseplan.BasePlanValueInsue;
import service.baseplan.merge.BasicInfo;
import service.baseplan.merge.GrantRightsInsure;
import service.fnc.PDFFnc;

public class BasePlan_SaveData_Service_OL {
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
	
	private PremiumAcessData premiumAcessData;
	private List<Rate_layout> lstRate_layout;
	private Note note;
	BasePlanBasicInfo basicInfo;
	BasePlanValueInsue valueInsue; 
	BasePlanBenefits bnenefits;
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
			// HARD VALUE
			coverage.setUser_code(obj.getUser_code());
			coverage.setUpdate_time(getCurrentTimestamp());
			setCoverage(coverage);
			basicInfo = new BasePlanBasicInfo();
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
			basicInfo = new BasePlanBasicInfo();
			this.basicInfo.doParticipant(participantAccessData);
			datareturn = "Success";
		} catch (Exception e) {
			datareturn = "Fail";
		}
		return datareturn ;
	}
	
	//mode
	public String set_Mode(ArrayList<Mode> lstMode) throws Exception{
		String  datareturn = null;
		try {
			 setMode(lstMode);
			 basicInfo = new BasePlanBasicInfo();
			 this.basicInfo.doMode(lstMode);
			 datareturn = "Success"; 
		} catch (Exception e) {
			datareturn = "Fail :"+e;
		}
		return datareturn;
	}
	//filing_chanel
	public String set_FilingChanel(ArrayList<Filing_channel> lstFilingChanel) throws Exception{
		String  datareturn = null;
		try {
			setFiling_channels(lstFilingChanel);
			 basicInfo = new BasePlanBasicInfo();
			 this.basicInfo.doFillingChannel(lstFilingChanel);
			 
			 datareturn = "Success"; 
		} catch (Exception e) {
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
			basicInfo = new BasePlanBasicInfo();
			this.basicInfo.doPremium(premiumAcessData);
			 datareturn = "Success"; 
		} catch (Exception e) {
			datareturn = "Fail";
		}
		return datareturn;
	}
	
	//table_TaxReduce
	public String setRate_layout(ArrayList<Rate_layout> list) {
		String datareturn = null;
		try {
			setLstRate_layout(list);
			basicInfo = new BasePlanBasicInfo();
			this.basicInfo.doRateLayoutTAX_OL(list);
			 datareturn = "Success"; 
				for(Rate_layout rate : list) {
					System.out.println("NAME_th : " + rate.get());
				}
			 
		} catch (Exception e) {
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
			basicInfo = new BasePlanBasicInfo();
			this.basicInfo.doNote(lstNote);
			 datareturn = "Success"; 
		} catch (Exception e) {
			datareturn = "Fail";
		}
		return datareturn;
	}
	//Nonforf_provision
	public String set_Nonforf_provision(boolean setsurrender_check,String passInsurance,String userId) throws Exception{
		String  datareturn = null;
		try {
			Nonforf_provision nonforf_provision = new GrantRightsInsure().searchNonforfProvisions(passInsurance);
			if (nonforf_provision == null) {
				nonforf_provision = new Nonforf_provision ();
				nonforf_provision.setCov_code(passInsurance);
				nonforf_provision.setNonforf_prov("CASH_SURR");
				nonforf_provision.setIs_default(setsurrender_check);
				nonforf_provision.setUser_code(userId);
				nonforf_provision.setUpdate_time(PDFFnc.currentTimeStamp());
				setNonforf_provision(nonforf_provision);
			}else {
				nonforf_provision.setIs_default(setsurrender_check);
				nonforf_provision.setUser_code(userId);
				nonforf_provision.setUpdate_time(PDFFnc.currentTimeStamp());
				setNonforf_provision(nonforf_provision);
			}
			new BasePlanGrantRightsInsure().doNonforfProvisionData(getNonforf_provision());
			 datareturn = "Success"; 
		} catch (Exception e) {
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
				coverage.setMin_em(obj.getMin_em());
				coverage.setMax_em(obj.getMax_em());
				coverage.setIs_sa_decr(obj.getIs_sa_decr());
				coverage.setUser_code(obj.getUser_code());
				coverage.setUpdate_time(getCurrentTimestamp());
				setCoverage(coverage);
				basicInfo = new BasePlanBasicInfo();
				this.basicInfo.doCoverage(getCoverage());
				datareturn = "Success";
			} catch (Exception e) {
				datareturn = "Fail";
				e.printStackTrace();
			}
			return datareturn;
		}
		public  String setCoverage_premiumCal_OL(Coverage obj) throws Exception
		{ 
			String  datareturn = null;
			try {
				Coverage coverage = new BasicInfo().searchCoverage(obj.getCov_code());
				coverage.setPrem_calc_meth(obj.getPrem_calc_meth());
				coverage.setIs_prem_disc(obj.getIs_prem_disc());
				coverage.setMin_prem_disc_rate(obj.getMin_prem_disc_rate());
				coverage.setMax_prem_disc_rate(obj.getMax_prem_disc_rate());
				coverage.setIs_substd(obj.getIs_substd());
				coverage.setMin_em(obj.getMin_em());
				coverage.setMax_em(obj.getMax_em());
				coverage.setPer_policy_prem(obj.getPer_policy_prem());
				coverage.setIs_sa_decr(obj.getIs_sa_decr());
				coverage.setUser_code(obj.getUser_code());
				coverage.setUpdate_time(getCurrentTimestamp());
				setCoverage(coverage);
				basicInfo = new BasePlanBasicInfo();
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
			datareturn = "Fail";
		}
		return datareturn;
	}
	public String setCal_Insurance_Premium(ArrayList<Rate_layout> list) {
		String datareturn = null;
		try {
			setLstRate_layout(list);
			premiumCal = new BasePlanPremiumCal();
			this.premiumCal.doCal_Insurance_PremiumOL(list);
			 datareturn = "Success"; 
		} catch (Exception e) {
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
			datareturn = "Fail";
		}
		return datareturn;
	}
	public String setRate_layout_CapitalDecrease(ArrayList<Rate_layout> list) {
		String datareturn = null;
		try {
			setLstRate_layout(list);
			premiumCal = new BasePlanPremiumCal();
			this.premiumCal.doCapitalDecreaseOL(list);
			 datareturn = "Success"; 
		} catch (Exception e) {
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
				datareturn = "Fail";
			}
			return datareturn;
		}
///////////////////////////////////BENZ 05-08-2019/////////////////////////////////////////////////////////////
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
		///////////////////////////////////BENZ 06-08-2019/////////////////////////////////////////////////////////////
		public String setRate_layout_pension(ArrayList<Rate_layout> list) {
		String datareturn = null;
		try {
		setLstRate_layout(list);
		valueInsue = new BasePlanValueInsue();
		this.valueInsue.doPension(list);
		datareturn = "Success"; 
		} catch (Exception e) {
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
				datareturn = "Fail";
			}
			return datareturn;
		}
	///benefit
		public int doCoverageBenefitItem(ArrayList<Benefit_item> lstBenefit_item) throws Exception
		{
			setBenefit_item(lstBenefit_item);
			bnenefits = new BasePlanBenefits();
			return this.bnenefits.doฺBenefitItem(lstBenefit_item);
		}
	public String set_benefit(String passInsurance,ArrayList<Benefit_sched> lstBenefit_sched,ArrayList<Benefit_amount> lstBenefit_amount) throws Exception{
		String  datareturn = null;
		try {
				//sched
				 setBenefit_sched(lstBenefit_sched);
				 bnenefits = new BasePlanBenefits();
				 this.bnenefits.doฺBenefitSched(lstBenefit_sched);
				//amount
				 setBenefit_amount(lstBenefit_amount);
				 this.bnenefits.doBenefitAmount(lstBenefit_amount);
				 datareturn = "Success";
		} catch (Exception e) {
			// TODO: handle exception
			datareturn = "Fail";
		}
		return datareturn;
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
