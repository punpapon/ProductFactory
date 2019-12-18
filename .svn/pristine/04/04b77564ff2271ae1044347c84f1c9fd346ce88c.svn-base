package service.center;

import service.baseplan.ctrl.FilingChannelData;
import service.baseplan.ctrl.FormulaData;
import service.baseplan.ctrl.ModeData;
import service.baseplan.ctrl.NonforfProvisionData;
import service.baseplan.ctrl.NoteData;
import service.baseplan.ctrl.PemiumData;
import service.baseplan.ctrl.PemiumTableData;
import service.baseplan.ctrl.PremOccCharge;
import service.baseplan.ctrl.RateLayoutData;
import service.ctrl.BenefitData;
import service.ctrl.ParticipantData;
import service.ctrl.PolicyWordingControlData;
import service.ctrl.PremAssumpRateControlData;
import service.fnc.ConstantValues;
import service.rider.ctrl.EndorseRiderData;

public class CoverageAccessData extends CoverageDetail
{
	protected void searchMode() throws Exception
	{
		super.setListMode(new ModeData().searchMode(ConstantValues.COV_CODE));
	}

	protected void searchFillingChanel() throws Exception
	{
		super.setListFiling_channel(new FilingChannelData().searchCoverageFillingChanel(ConstantValues.COV_CODE));
	}
	
	/**
	 * 
	 * @return ArrayList<PremiumAcessData> : Bean Set PremiumAcessData <br>
	 *         <br>
	 *         ArrayList<Premium_period> : getListPremiumPeriod() <br>
	 *         ArrayList<Prem_install> : getListPremInstall() <br>
	 * 
	 */
	protected void searchPremium() throws Exception
	{
		super.setListPremiumAcessData(new PemiumData().searchPremium(ConstantValues.COV_CODE));
	}

	/**
	 * Search Relation coverage.formula + coverage.cpverage <br>
	 * 
	 */
	protected void searchFormula() throws Exception
	{
		super.setListFormula(new FormulaData().searchFormula(ConstantValues.COV_CODE));
	}

	/*
	 * ParticipantAccessData
	 * -----------------------------------------------------------------------------
	 */
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
	protected void searchParticipant() throws Exception
	{
		super.setListParticipantData(new ParticipantData().searchCoverageParticipant(ConstantValues.COV_CODE));
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

	protected void searchTaxDiscount(String [] rateCatID) throws Exception // "GL_CL_MRT_B_0001"
	{
		super.setListRateLayoutTAX(new RateLayoutData().searchCoverageRateLayout(ConstantValues.COV_CODE,rateCatID));
	}
	
	protected void searchNote() throws Exception
	{
		super.setListNote(new NoteData().searchCoverageNote(ConstantValues.COV_CODE));
	}

	/*
	 * For Policy Wording
	 * -----------------------------------------------------------------------------
	 */

	/**
	 * 
	 * @return ArrayList<DocumentAcessData> : Bean Set of DocumentAcessData <br>
	 *         Document document = getDocument() <br>
	 *         ArrayList<Document_history> = getListDocumentHistory()
	 */
	
	/*
	 * For GrantRightsInsure
	 * -----------------------------------------------------------------------------
	 */
	protected void searchDocument() throws Exception
	{
		super.setListDocumentAcessData(new PolicyWordingControlData().searchPolicyWording());
	}

	/**
	 * 
	 * @return ArrayList<Nonforf_provision> : Bean Set Nonforf_provision
	 */
	protected void searchNonforfprovision() throws Exception
	{
		super.setListNonforfProvision(new NonforfProvisionData().searchCoverageNonforfprovision(ConstantValues.COV_CODE));
	}

	/*
	 * For Search PM
	 * -----------------------------------------------------------------------------
	 */
	
	//เบี้ยมาตาฐาน
	protected void searchPMStandard(String [] pmstdRateCat) throws Exception
	{
		super.setListRateLayoutStandard(new RateLayoutData().searchCoverageRateLayout(ConstantValues.COV_CODE,pmstdRateCat));
	}
	
	protected void searchPMStandard2(String [] pmstdRateCat) throws Exception
	{
		super.setListRateLayoutStandard2(new RateLayoutData().searchCoverageRateLayout(ConstantValues.COV_CODE,pmstdRateCat));
	}

	//เบี้ยเพิ่มพิเศษ
	protected void searchPMSpecial(String [] pmstpRateCat) throws Exception
	{
		RateLayoutData rateLayoutData = new RateLayoutData();
		super.setListRateLayoutSpecial(rateLayoutData.searchCoverageRateLayout(ConstantValues.COV_CODE, pmstpRateCat));
	}

	//ตารางช่วงอายุที่รับเบี้ยเพิ่ม
	protected void searchPMBetweenAge(String [] pmbtaRateCat )  throws Exception
	{
		super.setListRateLayoutBetweenAge(new RateLayoutData().searchCoverageRateLayout(ConstantValues.COV_CODE,pmbtaRateCat));	
	}

	//ทุนค้มครองที่ลดลง
	protected void searchCapitalDecrease(String [] cpdRateCat) throws Exception
	{
		super.setListRateLayoutCapitalDecrease(new RateLayoutData().searchCoverageRateLayout(ConstantValues.COV_CODE, cpdRateCat));
	}
	
	/*
	 * Risk Standard
	 * -----------------------------------------------------------------------------
	 */
	
	//ความเสี่ยงมาตราฐาน
	protected void searchRiskStandard(String [] rsRateCat) throws Exception
	{
		super.setListRateLayoutRiskStardard(new RateLayoutData().searchCoverageRateLayout(ConstantValues.COV_CODE, rsRateCat));
	}

	//ความเสี่ยงต่ำกว่ามาตราฐาน
	protected void searchRiskLowStandard(String [] rlRateCat) throws Exception 
	{
		super.setListRateLayoutRiskLowStardard(new RateLayoutData().searchCoverageRateLayout(ConstantValues.COV_CODE, rlRateCat));
		
	}
	
	//Preem_assump_rate
	protected void searchPremAssumpRate() throws Exception
	{
		super.setListPremAssumpRateAcessData(new PremAssumpRateControlData().searchLookupPremAssumpRate());
	}
	
	// ค้นหาข้อมูล Benefit Coverage Data
	/*
	 * Benefit  เสียชีวิต BC_CL_D
	 * -----------------------------------------------------------------------------
	 */
	protected void searchBenefitD() throws Exception
	{

		super.setListBenefitDAccessData(new BenefitData().searchBenefitCoverage(ConstantValues.COV_CODE, "BC_01_0001"));
	}

	/**
	 * ผลประโยชน์/ความคุ้มครอง เสียชีวิต, ผลประโยชน์/ความคุ้มครอง ทุพพลภาพถาวรสิ้นเชิง
	 * 
	 * @return ArrayList<BenefitAccessData> : Bean Set - BenefitAccessData <br>
	 *         Benefit_item benefitItem : getBenefitItem() <br>
	 *         ----------------------------------------------------------------------------------<br>
	 *         ArrayList<BenefitSchedAccessData> listBenefitSched : Bean Set -
	 *         BenefitSchedAccessData <br>
	 *         Benefit_sched benefit_sched : getBenefit_sched() <br>
	 *         ArrayList<Benefit_amount> listBenefitSmount : getListBenefitSmount()
	 *         <br>
	 */
	//ทุพพลภาพถาวรสิ้นเชิง BC_CL_TPD
	
	protected void searchBenefitTPD() throws Exception
	{
		super.setListBenefitTPDAccessData(new BenefitData().searchBenefitCoverage(ConstantValues.COV_CODE, "BC_01_0006"));
	}

	protected void searchBenefitCat() throws Exception
	{
		super.setListBenefitCat(new BenefitData().searchBenefitCatRider(ConstantValues.COV_CODE));
	}
	
	//อัตราเบี้ยฯเพิ่มตามชั้นอาชีพ
	protected void searchPrem_occ_charge() throws Exception
	{
		super.setListPrem_occ_charge(new PremOccCharge().searchPrem_occ_charge(ConstantValues.COV_CODE));
	}
	
	protected void searchMortalityTli(int m_mort_tli_id,int f_mort_tli_id) throws Exception // "MOR","GL_CL_MRT_B_0001"
	{
		super.setListMortalityTli(new PemiumTableData().searchMortalityTli(ConstantValues.COV_CODE, Integer.toString(m_mort_tli_id),Integer.toString(f_mort_tli_id)));
	}
	
	protected void searchTpdTli(int m_tpd_tli_id,int f_tpd_tli_id) throws Exception // GL_CL_MRT_B_0001
	{
		super.setListTpdTli(new PemiumTableData().searchTpdTli(ConstantValues.COV_CODE, Integer.toString(m_tpd_tli_id),Integer.toString(f_tpd_tli_id)));
	}
	
	protected void searchParticipantAll() throws Exception
	{
		super.setListParticipantAll(new ParticipantData().searchCoverageParticipantAll(ConstantValues.COV_CODE));
	}

	protected void searchEndorse() throws Exception
	{
		super.setListEndorseRider(new EndorseRiderData().searchBenefitItemEndorse(ConstantValues.COV_CODE));
	}
	
	//นำเข้า ตารางส่วนลดตามทุนประกัน
	protected void searchTable_Dis_Sa(String [] dtiRateCatOl) throws Exception
	{
		super.setListTable_Dis_Sa(new RateLayoutData().searchCoverageRateLayout(ConstantValues.COV_CODE, dtiRateCatOl));
	}
	
	//งินปันผล
	protected void searchDividend(String [] divRateCatOl) throws Exception
	{
		super.setLiistDividend(new RateLayoutData().searchCoverageRateLayout(ConstantValues.COV_CODE, divRateCatOl));
	}
	
	//คำนวณทุนจากเบี้ย/
	protected void searchCal_Premiums(String [] cipRateCatOl) throws Exception
	{
		super.setListCal_Premiums(new RateLayoutData().searchCoverageRateLayout(ConstantValues.COV_CODE, cipRateCatOl));
	}
	
	protected void searchCoverageBenefitPage() throws Exception
	{
		super.setLiistBenefitPage(new BenefitData().searchCoverageBenefitPage());
	}
}
