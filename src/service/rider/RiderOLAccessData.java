package service.rider;

import java.util.ArrayList;

import layout.bean.productfac.beanset.DocumentAcessData;
import layout.bean.productfac.beanset.ParticipantAccessData;
import layout.bean.productfac.beanset.PremAssumpRateAcessData;
import layout.bean.productfac.beanset.PremiumAcessData;
import layout.bean.productfac.beanset.RateLayoutPremAccessData;
import layout.bean.productfac.benefit.Benefit_cat;
import layout.bean.productfac.coverage.Coverage;
import layout.bean.productfac.coverage.Filing_channel;
import layout.bean.productfac.coverage.Formula;
import layout.bean.productfac.coverage.Mode;
import layout.bean.productfac.coverage.Nonforf_provision;
import layout.bean.productfac.coverage.Note;
import layout.bean.productfac.coverage.Participant;
import layout.bean.productfac.coverage.Prem_occ_charge;
import layout.bean.productfac.lookup.Mortality_tli;
import layout.bean.productfac.lookup.Tpd_tli;
import service.ctrl.BenefitData;
import service.baseplan.ctrl.FilingChannelData;
import service.baseplan.ctrl.FormulaData;
import service.baseplan.ctrl.ModeData;
import service.baseplan.ctrl.NonforfProvisionData;
import service.baseplan.ctrl.NoteData;
import service.baseplan.ctrl.PemiumData;
import service.baseplan.ctrl.PemiumTableData;
import service.baseplan.ctrl.PremOccCharge;
import service.baseplan.ctrl.RateLayoutData;
import service.ctrl.ParticipantData;
import service.ctrl.PolicyWordingControlData;
import service.ctrl.PremAssumpRateControlData;
import service.fnc.ConstantRateCatIDValues;
import service.fnc.ConstantValues;
import service.rider.ctrl.EndorseRiderData;

public class RiderOLAccessData
{

	private Coverage coverage;
	private ArrayList<ParticipantAccessData> listParticipantData;
	private ArrayList<Formula> listFormula;
	private ArrayList<Mode> listMode;
	private ArrayList<Filing_channel> listFiling_channel;
	private ArrayList<RateLayoutPremAccessData> listRateLayoutTAX;
	private ArrayList<Note> listNote;
	private ArrayList<DocumentAcessData> listDocumentAcessData;
	private ArrayList<PremiumAcessData> listPremiumAcessData;
	private ArrayList<Nonforf_provision> listNonforfProvision;
	private ArrayList<Mortality_tli> listMortalityTli;
	private ArrayList<Tpd_tli> listTpdTli;
	private ArrayList<RateLayoutPremAccessData> listRateLayoutStandard;
	private ArrayList<RateLayoutPremAccessData> listRateLayoutSpecial;
	private ArrayList<RateLayoutPremAccessData> listRateLayoutCapitalDecrease;
	private ArrayList<RateLayoutPremAccessData> listRateLayoutRiskStardard;
	private ArrayList<RateLayoutPremAccessData> listRateLayoutRiskLowStardard;
	private ArrayList<RateLayoutPremAccessData> listRateLayoutBetweenAge;

	private ArrayList<Participant> listParticipant;
	private ArrayList<Prem_occ_charge> listPrem_occ_charge;
	private ArrayList<Benefit_cat> listBenefitCat;
	private ArrayList listEndorseRider;
	private ArrayList<ArrayList<PremAssumpRateAcessData>> listPremAssumpRateAcessData;

	private ArrayList<RateLayoutPremAccessData> listTable_Dis_Sa;
	private ArrayList<RateLayoutPremAccessData> listTable_NAR;
	private ArrayList<RateLayoutPremAccessData> listRateLayoutNAR;
	public RiderOLAccessData(Coverage coverage) throws Exception
	{
		this.coverage = coverage;
		ConstantValues.COV_CODE = coverage.getCov_code();
		prepareAccessData();
	}

	private void prepareAccessData() throws Exception
	{
		setBasicinfo();
		setPolicyWording();
		setProtectedPerson();
		setGrantRightsInsure();
		setPremiumCal();
		setValueInsue();
		setBenefit();
		setEndorse();
		searchTable_Dis_Sa();
		searchTable_NAR();
	}

	/**
	 * Set Tab Basic Info
	 * 
	 * @throws Exception
	 */
	private void setBasicinfo() throws Exception
	{
		searchMode();
		searchFormula();
		searchParticipant();
		searchFillingChanel();
		searchPremium();
		searchMortalityTli();
		searchTpdTli();
		searchTaxDiscount();
		searchNote();
		searchPremAssumpRate();
	}

	private void setPolicyWording() throws Exception
	{
		searchDocument();
	}

	private void setProtectedPerson() throws Exception
	{
		searchParticipantAll();
	}

	private void setGrantRightsInsure() throws Exception
	{
		searchNonforfprovision();
	}

	private void setPremiumCal() throws Exception
	{
		searchPMStandard();
		searchPMSpecial();
		searchPMBetweenAge();
		searchCapitalDecrease();
		searchPrem_occ_charge();
		searchNAR();
	}

	private void setValueInsue() throws Exception
	{
		searchRiskStandard();
		searchRiskLowStandard();
	}

	private void setBenefit() throws Exception
	{
		searchBenefitCat();
	}

	private void setEndorse() throws Exception
	{
		EndorseRiderData riderData = new EndorseRiderData();
		setListEndorseRider(riderData.searchBenefitItemEndorse(coverage.getCov_code()));
	}

	private void setListEndorseRider(ArrayList listEndorseRider) throws Exception
	{
		this.listEndorseRider = listEndorseRider;
	}

	/**
	 * @return the listEndorseRider
	 */
	public ArrayList getListEndorseRider()
	{
		return listEndorseRider;
	}
	////////////////////////////นำเข้า ตารางส่วนลดตามทุนประกัน
	private void searchTable_Dis_Sa() throws Exception
	{
	RateLayoutData rateLayoutData = new RateLayoutData();
	setListTable_Dis_Sa(rateLayoutData.searchCoverageRateLayout(coverage.getCov_code(), ConstantRateCatIDValues.getDtiRateCatOl()));
	}
	
	private void setListTable_Dis_Sa(ArrayList<RateLayoutPremAccessData> listTable_Dis_Sa)
	{
	this.listTable_Dis_Sa = listTable_Dis_Sa;
	}
	
	public ArrayList<RateLayoutPremAccessData> getListTable_Dis_Sa()
	{
	return listTable_Dis_Sa;
	}
////////////////////////////นำเข้า NAR
private void searchTable_NAR() throws Exception
{
RateLayoutData rateLayoutData = new RateLayoutData();
setListTable_NAR(rateLayoutData.searchCoverageRateLayout(coverage.getCov_code(), ConstantRateCatIDValues.getNarOl()));
}

private void setListTable_NAR(ArrayList<RateLayoutPremAccessData> listTable_NAR)
{
this.listTable_NAR = listTable_NAR;
}

public ArrayList<RateLayoutPremAccessData> getListTable_NAR()
{
return listTable_NAR;
}

	/*
	 * For Basic info
	 * -----------------------------------------------------------------------------
	 */
	/**
	 * Search Relation coverage.mode + coverage.cpverage <br>
	 * 
	 * @throws Exception
	 */
	private void searchMode() throws Exception
	{
		ModeData coverageData = new ModeData();
		setListMode(coverageData.searchMode(coverage.getCov_code()));
	}

	private void setListMode(ArrayList<Mode> listMode)
	{
		this.listMode = listMode;
	}

	/**
	 * 
	 * @return ArrayList : coverage.mode
	 */
	public ArrayList<Mode> getListMode()
	{
		return listMode;
	}

	/**
	 * Search Relation coverage.formula + coverage.cpverage <br>
	 * 
	 * @throws Exception
	 */
	private void searchFillingChanel() throws Exception
	{
		FilingChannelData filingChannelData = new FilingChannelData();
		setListFiling_channel(filingChannelData.searchCoverageFillingChanel(coverage.getCov_code()));
	}

	private void setListFiling_channel(ArrayList<Filing_channel> listFiling_channel)
	{
		this.listFiling_channel = listFiling_channel;
	}

	/**
	 * 
	 * @return ArrayList : coverage.Filing_channel
	 */
	public ArrayList<Filing_channel> getListFiling_channel()
	{
		return listFiling_channel;
	}

	private void searchPremium() throws Exception
	{
		PemiumData pemiumData = new PemiumData();
		setListPremiumAcessData(pemiumData.searchPremium(coverage.getCov_code()));
	}

	private void setListPremiumAcessData(ArrayList<PremiumAcessData> listPremiumAcessData)
	{
		this.listPremiumAcessData = listPremiumAcessData;
	}

	/**
	 * 
	 * @return ArrayList<PremiumAcessData> : Bean Set PremiumAcessData <br>
	 *         <br>
	 *         ArrayList<Premium_period> : getListPremiumPeriod() <br>
	 *         ArrayList<Prem_install> : getListPremInstall() <br>
	 * 
	 */

	public ArrayList<PremiumAcessData> getListPremiumAcessData()
	{
		return listPremiumAcessData;
	}

	private void searchMortalityTli() throws Exception // "MOR","GL_CL_MRT_B_0001"
	{
		String m = Integer.toString(coverage.getMale_mort_tli_id());
		String f = Integer.toString(coverage.getFemale_mort_tli_id());
		PemiumTableData pemiumTableData = new PemiumTableData();
		setListMortalityTli(pemiumTableData.searchMortalityTli(coverage.getCov_code(), m, f));
	}

	private void setListMortalityTli(ArrayList<Mortality_tli> listMortalityTli)
	{
		this.listMortalityTli = listMortalityTli;
	}

	/**
	 * 
	 * @return ArrayList<Mortality_tli> : lookup.Mortality_tli
	 */
	public ArrayList<Mortality_tli> getListMortalityTli()
	{
		return listMortalityTli;
	}

	private void searchTpdTli() throws Exception // GL_CL_MRT_B_0001
	{
		String m = Integer.toString(coverage.getMale_tpd_tli_id());
		String f = Integer.toString(coverage.getFemale_tpd_tli_id());
		PemiumTableData pemiumTableData = new PemiumTableData();
		setListTpdTli(pemiumTableData.searchTpdTli(coverage.getCov_code(), m, f));
	}

	private void setListTpdTli(ArrayList<Tpd_tli> listTpdTli)
	{
		this.listTpdTli = listTpdTli;
	}

	/**
	 * 
	 * @return ArrayList<Tpd_tli> : lookup.Tpd_tli
	 */
	public ArrayList<Tpd_tli> getListTpdTli()
	{
		return listTpdTli;
	}

	/**
	 * Search Relation coverage.formula + coverage.cpverage <br>
	 * 
	 * @throws Exception
	 */
	private void searchFormula() throws Exception
	{
		FormulaData formulaData = new FormulaData();
		setListFormular(formulaData.searchFormula(coverage.getCov_code()));
	}

	/**
	 * 
	 * @return ArrayList : Formula;
	 */
	public ArrayList<Formula> getListFormula()
	{
		return listFormula;
	}

	public void setListFormular(ArrayList<Formula> listFormula)
	{
		this.listFormula = listFormula;
	}

	/*
	 * TODO ParticipantAccessData
	 * -----------------------------------------------------------------------------
	 */
	private void searchParticipant() throws Exception
	{
		ParticipantData participantData = new ParticipantData();
		setListParticipantData(participantData.searchCoverageParticipant(coverage.getCov_code()));
	}

	private void searchParticipantAll() throws Exception
	{
		ParticipantData participantData = new ParticipantData();
		setListParticipantAll(participantData.searchCoverageParticipantAll(coverage.getCov_code()));
	}

	private void setListParticipantAll(ArrayList<Participant> listParticipant)
	{
		this.listParticipant = listParticipant;
	}

	public ArrayList<Participant> getListParticipantAll()
	{
		return listParticipant;
	}

	private void setListParticipantData(ArrayList<ParticipantAccessData> listParticipantData)
	{
		this.listParticipantData = listParticipantData;
	}

	/**
	 * @return ArrayList<ParticipantAccessData> : Bean Set > ParticipantAccessData
	 *         <br>
	 * 
	 *         <pre Vspace="100">
	 *         ParticipantAccessData Coverage : getParticipant() Participant
	 *         participant : getListBenefitPeriod() ArrayList<Benefit_period> :
	 *         getListBenefitPeriodDet() ArrayList<Age_calc_meth> :
	 *         getListAgeCalcNeth() ArrayList<Benefit_item> : getListBenefitItem()
	 *         ArrayList<Benefit_period_det> : getListBenefitPeriodDet()<br>
	 **/
	public ArrayList<ParticipantAccessData> getListParticipantData()
	{
		return listParticipantData;
	}

	private void searchTaxDiscount() throws Exception // "GL_CL_MRT_B_0001"
	{
		RateLayoutData rateLayoutData = new RateLayoutData();
		setListRateLayoutTAX(rateLayoutData.searchCoverageRateLayout(coverage.getCov_code(),
				ConstantRateCatIDValues.getTaxRateCatOl()));
	}

	private void setListRateLayoutTAX(ArrayList<RateLayoutPremAccessData> listRateLayoutTAX)
	{
		this.listRateLayoutTAX = listRateLayoutTAX;
	}

	/**
	 * 
	 * @return ArrayList<RateLayoutPremAccessData> : Bean Set
	 *         RateLayoutPremAccessData
	 * 
	 *         <pre>
	Rate_layout rateLayout 	 : getRateLayout()
	Rate_cat rateCat		 : getRateCat()
	File file				 : getFile()
	layout.bean.productfac.lookup.Rate_layout rateLayoutLookup : getRateLayoutLookup()
	 *         </pre>
	 */
	public ArrayList<RateLayoutPremAccessData> getListRateLayoutTAX()
	{
		return listRateLayoutTAX;
	}

	private void searchNote() throws Exception
	{
		NoteData noteData = new NoteData();
		setListNote(noteData.searchCoverageNote(coverage.getCov_code()));
	}

	private void setListNote(ArrayList<Note> listNote)
	{
		this.listNote = listNote;
	}

	/**
	 * 
	 * @return ArrayList<Note> : Bean Set coverage.note
	 */
	public ArrayList<Note> getListNote()
	{
		return listNote;
	}

	/*
	 * For Policy Wording
	 * -----------------------------------------------------------------------------
	 */

	private void searchDocument() throws Exception
	{
		setListDocumentAcessData(new PolicyWordingControlData().searchPolicyWording());
	}

	private void setListDocumentAcessData(ArrayList<DocumentAcessData> listDocumentAcessData)
	{
		this.listDocumentAcessData = listDocumentAcessData;
	}

	/**
	 * 
	 * @return ArrayList<DocumentAcessData> : Bean Set of DocumentAcessData <br>
	 *         Document document = getDocument() <br>
	 *         ArrayList<Document_history> = getListDocumentHistory()
	 */
	public ArrayList<DocumentAcessData> getListDocumentAcessData()
	{
		return listDocumentAcessData;
	}

	/*
	 * For GrantRightsInsure
	 * -----------------------------------------------------------------------------
	 */
	private void searchNonforfprovision() throws Exception
	{
		NonforfProvisionData provisionData = new NonforfProvisionData();
		setListNonforfProvision(provisionData.searchCoverageNonforfprovision(coverage.getCov_code()));
	}

	private void setListNonforfProvision(ArrayList<Nonforf_provision> listNonforfProvision)
	{
		this.listNonforfProvision = listNonforfProvision;
	}

	/**
	 * 
	 * @return ArrayList<Nonforf_provision> : Bean Set Nonforf_provision
	 */
	public ArrayList<Nonforf_provision> getListNonforfProvision()
	{
		return listNonforfProvision;
	}

	/*
	 * TODO For Searc PM
	 * -----------------------------------------------------------------------------
	 */
	/**
	 * เบี้ยมาตาฐาน
	 * 
	 * @throws Exception
	 */
	private void searchPMStandard() throws Exception
	{
		RateLayoutData rateLayoutData = new RateLayoutData();
		setListRateLayoutStandard(rateLayoutData.searchCoverageRateLayout(coverage.getCov_code(),
				ConstantRateCatIDValues.getPmstdRateCatOl()));
	}

	private void setListRateLayoutStandard(ArrayList<RateLayoutPremAccessData> listRateLayoutStandard)
	{
		this.listRateLayoutStandard = listRateLayoutStandard;
	}

	public ArrayList<RateLayoutPremAccessData> getListRateLayoutStandard()
	{
		return listRateLayoutStandard;
	}
	
	/*pun เพิ่มเบี้ยมาตรฐานที่ไว้ค้นหาทั้ง RateCat 1,2,26,27*/
	public void searchPMStandard_CLOL() throws Exception
	{
		RateLayoutData rateLayoutData = new RateLayoutData();
		setListRateLayoutStandard(rateLayoutData.searchCoverageRateLayout(coverage.getCov_code(),
				ConstantRateCatIDValues.getPmstdRateCatClol()));
	}

	/**
	 * เบี้ยเพิ่มพิเศษ
	 * 
	 * @throws Exception
	 */
	private void searchPMSpecial() throws Exception
	{
		RateLayoutData rateLayoutData = new RateLayoutData();
		setListRateLayoutSpecial(rateLayoutData.searchCoverageRateLayout(coverage.getCov_code(),
				ConstantRateCatIDValues.getPmstpRateCatOl()));
	}

	private void setListRateLayoutSpecial(ArrayList<RateLayoutPremAccessData> listRateLayoutSpecial)
	{
		this.listRateLayoutSpecial = listRateLayoutSpecial;
	}

	public ArrayList<RateLayoutPremAccessData> getListRateLayoutSpecial()
	{
		return listRateLayoutSpecial;
	}
	///////////////////////////////////////////////////////////////////
	private void searchNAR() throws Exception
	{
		RateLayoutData rateLayoutData = new RateLayoutData();
		setListRateLayoutNAR(rateLayoutData.searchCoverageRateLayout(coverage.getCov_code(),
				ConstantRateCatIDValues.getNarOl()));
	}

	private void setListRateLayoutNAR(ArrayList<RateLayoutPremAccessData> listRateLayoutNAR)
	{
		this.listRateLayoutNAR = listRateLayoutNAR;
	}

	public ArrayList<RateLayoutPremAccessData> getListRateLayoutNAR()
	{
		return listRateLayoutNAR;
	}
	
	

	/**
	 * ตารางช่วงอายุที่รับเบี้ยเพิ่ม
	 */
	private void searchPMBetweenAge() throws Exception
	{
		RateLayoutData rateLayoutData = new RateLayoutData();
		setListRateLayoutBetweenAge(rateLayoutData.searchCoverageRateLayout(coverage.getCov_code(),
				ConstantRateCatIDValues.getPmbtaRateCatOl()));
	}

	private void setListRateLayoutBetweenAge(ArrayList<RateLayoutPremAccessData> listRateLayoutBetweenAge)
	{
		this.listRateLayoutBetweenAge = listRateLayoutBetweenAge;
	}

	/**
	 * @return the listRateLayoutBetweenAge
	 */
	public ArrayList<RateLayoutPremAccessData> getListRateLayoutBetweenAge()
	{
		return listRateLayoutBetweenAge;
	}

	/**
	 * ทุนค้มครองที่ลดลง
	 * 
	 * @throws Exception
	 */
	private void searchCapitalDecrease() throws Exception
	{
		RateLayoutData rateLayoutData = new RateLayoutData();
		setListRateLayoutCapitalDecrease(rateLayoutData.searchCoverageRateLayout(coverage.getCov_code(),
				ConstantRateCatIDValues.getCpdRateCatOl()));
	}

	private void setListRateLayoutCapitalDecrease(ArrayList<RateLayoutPremAccessData> listRateLayoutCapitalDecrease)
	{
		this.listRateLayoutCapitalDecrease = listRateLayoutCapitalDecrease;
	}

	public ArrayList<RateLayoutPremAccessData> getListRateLayoutCapitalDecrease()
	{
		return listRateLayoutCapitalDecrease;
	}

	/**
	 * อัตราเบี้ยฯเพิ่มตามชั้นอาชีพ
	 * 
	 * @throws Exception
	 */
	private void searchPrem_occ_charge() throws Exception
	{
		PremOccCharge premOccChargeData = new PremOccCharge();
		setListPrem_occ_charge(premOccChargeData.searchPrem_occ_charge(coverage.getCov_code()));
	}

	private void setListPrem_occ_charge(ArrayList<Prem_occ_charge> listPrem_occ_charge)
	{
		this.listPrem_occ_charge = listPrem_occ_charge;
	}

	public ArrayList<Prem_occ_charge> getListPrem_occ_charge()
	{
		return listPrem_occ_charge;
	}

	/*
	 * TODO Risk Standard
	 * -----------------------------------------------------------------------------
	 * ---------------------------
	 */
	/**
	 * ความเสี่ยงมาตราฐาน
	 * 
	 * @throws Exception
	 */
	private void searchRiskStandard() throws Exception
	{
		RateLayoutData rateLayoutData = new RateLayoutData();
		setListRateLayoutRiskStardard(rateLayoutData.searchCoverageRateLayout(coverage.getCov_code(),
				ConstantRateCatIDValues.getRsRateCatOl()));
	}

	private void setListRateLayoutRiskStardard(ArrayList<RateLayoutPremAccessData> listRateLayoutRiskStardard)
	{
		this.listRateLayoutRiskStardard = listRateLayoutRiskStardard;
	}

	public ArrayList<RateLayoutPremAccessData> getListRateLayoutRiskStardard()
	{
		return listRateLayoutRiskStardard;
	}

	/**
	 * ความเสี่ยงต่ำกว่ามาตราฐาน
	 * 
	 * @throws Exception
	 */
	private void searchRiskLowStandard() throws Exception
	{
		RateLayoutData rateLayoutData = new RateLayoutData();
		setListRateLayoutRiskLowStardard(rateLayoutData.searchCoverageRateLayout(coverage.getCov_code(),
				ConstantRateCatIDValues.getRlsRateCatOl()));

	}

	private void setListRateLayoutRiskLowStardard(ArrayList<RateLayoutPremAccessData> listRateLayoutRiskLowStardard)
	{
		this.listRateLayoutRiskLowStardard = listRateLayoutRiskLowStardard;
	}

	/**
	 * @return the listRateLayoutRiskLowStardard
	 */
	public ArrayList<RateLayoutPremAccessData> getListRateLayoutRiskLowStardard()
	{
		return listRateLayoutRiskLowStardard;
	}

	/*
	 * TODO Benefit
	 * -----------------------------------------------------------------------------
	 */

	private void searchBenefitCat() throws Exception
	{
		BenefitData benefitData = new BenefitData();
		setListBenefitCat(benefitData.searchBenefitCatRider(coverage.getCov_code()));
	}

	private void setListBenefitCat(ArrayList<Benefit_cat> listBenefitCat)
	{
		this.listBenefitCat = listBenefitCat;
	}

	/**
	 * @return the listBenefitCat
	 */
	public ArrayList<Benefit_cat> getListBenefitCat()
	{
		return listBenefitCat;
	}

	/*public static void main(String[] args)
	{
		try {
			RiderAccessData s = new RiderAccessData(null);
			s.searchNote();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}*/
/////Preem_assump_rate
	private void searchPremAssumpRate() throws Exception
	{
		PremAssumpRateControlData controlData = new PremAssumpRateControlData();
		setListPremAssumpRateAcessData(controlData.searchLookupPremAssumpRate());
	}

	public ArrayList<ArrayList<PremAssumpRateAcessData>> getListPremAssumpRateAcessData()
	{
		return listPremAssumpRateAcessData;
	}

	public void setListPremAssumpRateAcessData(ArrayList<ArrayList<PremAssumpRateAcessData>> listPremAssumpRateAcessData)
	{
		this.listPremAssumpRateAcessData = listPremAssumpRateAcessData;
	}
}
