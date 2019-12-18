package service.baseplan;

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
import service.tab.BasicInfoDataTab;


public class BasePlanBasicInfo 
{
	/**
	 * @author Nara : 15-03-2018 For Implement BasicInfo Data<br>
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
    public BasePlanBasicInfo() {}
	
	public void doCoverage(Coverage coverage) throws Exception
	{
		new BasicInfoDataTab().doCoverage(coverage);
	}
	
	/**
	 * บันทึกข้อมูลผู้ได้รับ ความคุ้มครอง <br>
	 * ส่ง ค่า bean set ParticipantAccessData <br>
	 * Coverage 	coverage <br>
	 * Participant participant <br>
	 * ArrayList<Benefit_period> Benefit_period<br>
	 * ArrayList<Benefit_period_det> Benefit_period_det <br>
	 * ArrayList<Age_calc_meth> Age_calc_meth <br>
	 * ArrayList<Benefit_item> Benefit_itembr 
	 * @throws Exception
	 */
	public void doParticipant(ParticipantAccessData participantAccessData) throws Exception
	{	
		BasicInfoDataTab dataTab = new BasicInfoDataTab();
		dataTab.doParticipant(participantAccessData.getParticipant());
		dataTab.doAgeCalMeth(participantAccessData.getListAgeCalcMeth());
		dataTab.doBenefitPeriod(participantAccessData.getListBenefitPeriod());
		dataTab.doBenefitPeriodDet(participantAccessData.getListBenefitPeriodDet());
	}
	public void doMode(ArrayList<Mode> listMode) throws Exception
	{
		new BasicInfoDataTab().doMode(listMode);
	}

	public void doFillingChannel(ArrayList<Filing_channel> listFilingChannel) throws Exception
	{
		new BasicInfoDataTab().doFillingChannel(listFilingChannel);
	}

	public void doPremium(PremiumAcessData premiumAcessData) throws Exception
	{
		new BasicInfoDataTab().doPremium(premiumAcessData);
	}
	
	public void doRateLayoutTAX(ArrayList<Rate_layout> listRateLayout) throws Exception
	{
		new BasicInfoDataTab().doRateLayoutTAX(listRateLayout);
	}
	//OL
	public void doRateLayoutTAX_OL(ArrayList<Rate_layout> listRateLayout) throws Exception
	{
		new BasicInfoDataTab().doRateLayoutTAX_OL(listRateLayout);
	}

	public void doNote(ArrayList<Note> listNote) throws Exception
	{
		new BasicInfoDataTab().doNote(listNote);
	}
}
