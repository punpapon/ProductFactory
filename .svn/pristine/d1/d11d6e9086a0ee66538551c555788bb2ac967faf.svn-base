package service.tab;

import java.util.ArrayList;

import layout.bean.productfac.beanset.ParticipantAccessData;
import layout.bean.productfac.beanset.PremiumAcessData;
import layout.bean.productfac.coverage.Age_calc_meth;
import layout.bean.productfac.coverage.Benefit_period;
import layout.bean.productfac.coverage.Benefit_period_det;
import layout.bean.productfac.coverage.Coverage;
import layout.bean.productfac.coverage.Filing_channel;
import layout.bean.productfac.coverage.Formula;
import layout.bean.productfac.coverage.Mode;
import layout.bean.productfac.coverage.Note;
import layout.bean.productfac.coverage.Participant;
import layout.bean.productfac.coverage.Prem_install;
import layout.bean.productfac.coverage.Premium_period;
import layout.bean.productfac.coverage.Rate_layout;
import service.baseplan.ctrl.AgeCalcMethData;
import service.baseplan.ctrl.BenefitPeriodData;
import service.baseplan.ctrl.BenefitPeriodDetData;
import service.baseplan.ctrl.FilingChannelData;
import service.baseplan.ctrl.FormulaData;
import service.baseplan.ctrl.ModeData;
import service.baseplan.ctrl.NoteData;
import service.baseplan.ctrl.PremInstallData;
import service.baseplan.ctrl.PremiumPeriodData;
import service.baseplan.ctrl.RateLayoutData;
import service.ctrl.CoverageData;
import service.ctrl.ParticipantData;
import service.fnc.ConstantRateCatIDValues;


public class BasicInfoDataTab 
{
	/**
	 * บันทึกข้อมูล Rider
	 * @author Nara : 04-04-2018 For Implement BasicInfo Data<br>
	 * ---------------------------------------------------<br>
		doCoverage(basicInfoBeanset.getCoverage());
		doParticipant(basicInfoBeanset.getParticipantAccessData());
		doMode(basicInfoBeanset.getListMode());
		doFillingChannel(basicInfoBeanset.getListFilingChannel());
		doFormula(basicInfoBeanset.getListFormula());
		doPremium(basicInfoBeanset.getPremiumAcessData());
		doRateLayoutTAX(basicInfoBeanset.getListRateLayout());
		doNote(basicInfoBeanset.getListNote());
	 **/
    public BasicInfoDataTab() {}
	public void doCoverage(Coverage coverage) throws Exception
	{
		System.out.println("doCoverage >>> ");
		CoverageData coverageData = new CoverageData();
		coverage = coverageData.saveCoverage("U",coverage);
	}

	public void doParticipant(Participant participant) throws Exception
	{
		System.out.println("saveParticipant >>>");
		ParticipantData participantData = new ParticipantData();
		ArrayList<Participant> listParticipant = new ArrayList<>();
		listParticipant.add(participant);
		participantData.insertParticipant("PRIMARY",listParticipant);
	}

	public void doAgeCalMeth(ArrayList<Age_calc_meth> listAgeCalMeth) throws Exception
	{
		System.out.println("saveAgeCalMeth >>>");
		AgeCalcMethData ageCalcMethData = new AgeCalcMethData();
		ageCalcMethData.insertAgeCalMeth(listAgeCalMeth);
	}

	public void doBenefitPeriod(ArrayList<Benefit_period> listBenefitPeriod) throws Exception
	{
		System.out.println("saveBenefitPeriod >>> ");
		BenefitPeriodData benefitPeriodData = new BenefitPeriodData();
		benefitPeriodData.insertBenefitPeriod(listBenefitPeriod);
	}

	public void doBenefitPeriodDet(ArrayList<Benefit_period_det> listBenefitPeriodDet) throws Exception
	{
		System.out.println("saveBenefitPeriodDet >>> ");
		BenefitPeriodDetData benefitPeriodDetData = new BenefitPeriodDetData();
		benefitPeriodDetData.insertBenefitPeriodDet(listBenefitPeriodDet);
	}
	
	public void doMode(ArrayList<Mode> listMode) throws Exception
	{
		System.out.println("doMode >>> ");
		ModeData modeData = new ModeData();
		modeData.insertMode(listMode);
	}

	public void doFillingChannel(ArrayList<Filing_channel> listFilingChannel) throws Exception
	{
		System.out.println("doFillingChannel >>> ");
		FilingChannelData filingChannelData = new FilingChannelData();
		filingChannelData.insertFilingChannel(listFilingChannel);
	}

	public void doFormula(ArrayList<Formula> listFormula) throws Exception
	{
		System.out.println("doFormula >>> ");
		FormulaData formulaData = new FormulaData();
		formulaData.insertFormula(listFormula);
	}

	public void doPremium(PremiumAcessData premiumAcessData) throws Exception
	{
		savePremiumPeriod(premiumAcessData.getListPremiumPeriod());
		savePremInstall(premiumAcessData.getListPremInstall());
	}

	private void savePremiumPeriod(ArrayList<Premium_period> listPremiumPeriod) throws Exception
	{
		System.out.println("savePremiumPeriod >>> ");
		new PremiumPeriodData().insertPremiumPeriod(listPremiumPeriod);
	}

	private void savePremInstall(ArrayList<Prem_install> listPremInstall) throws Exception
	{
		System.out.println("savePremiumInstall >>> ");
		new PremInstallData().insertPremInstall(listPremInstall);
	}

	/**
	 * save data tax rate_cat_id 8,9
	 * 
	 * @throws Exception
	 */
	public void doRateLayoutTAX(ArrayList<Rate_layout> listRateLayout) throws Exception
	{
		System.out.println("doRateLayoutTAX >>> ");
		RateLayoutData rateLayoutData = new RateLayoutData();
		rateLayoutData.insertRateLayout(ConstantRateCatIDValues.getTaxRateCat(),listRateLayout);
	}
	//OL
	public void doRateLayoutTAX_OL(ArrayList<Rate_layout> listRateLayout) throws Exception
	{
		System.out.println("doRateLayoutTAX >>> ");
		RateLayoutData rateLayoutData = new RateLayoutData();
		rateLayoutData.insertRateLayout(ConstantRateCatIDValues.getTaxRateCatOl(),listRateLayout);
	}

	public void doNote(ArrayList<Note> listNote) throws Exception
	{
		System.out.println("doNote >>> ");
		NoteData noteData = new NoteData();
		noteData.insertNote(listNote);
	}
}
