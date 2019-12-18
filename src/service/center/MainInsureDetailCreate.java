package service.center;

import java.util.ArrayList;

import layout.bean.productfac.beanset.RateCatAccessData;
import service.baseplan.ctrl.AgeBandData;
import service.rider.ctrl.BenefitCat;
import service.rider.ctrl.EndorseRiderData;
import utility.support.DateInfo;
import service.baseplan.ctrl.BenefitDisability;
import service.baseplan.ctrl.FilingChannelData;
import service.baseplan.ctrl.FormulaData;
import service.baseplan.ctrl.MortalityTliiData;
import service.baseplan.ctrl.RateCatData;
import service.baseplan.ctrl.TpdTliData;
import service.ctrl.PolicyWordingControlData;
import service.ctrl.PremAssumpRateControlData;

public class MainInsureDetailCreate extends CoverageLookupDetail
{
	private int doTab;

	public void createDetail(int tab) throws Exception
	{
		setDoTab(tab);
		switch (tab) {
			case 1 	: setBasicInfo();
					  break;
			case 2 	: setPolicyWording();
			  		  break;
			case 3 	: setNonForfeiture(); 
			  		  break;
			case 4 	: setCalculatePremium(); 
			  		  break;
			case 5 	: setPolicyValue(); 
			  		  break;
			case 6 	: setBenefits(); 
					  break;
			case 7 	: setEndorse(); 
			  break;
			default : break;
		}
	}

	public int getDoTab() 
	{
		return doTab;
	}

	public void setDoTab(int doTab) 
	{
		this.doTab = doTab;
	}

	private void setBasicInfo() throws Exception 
	{
		searchLookupCat();
		setRateCatData(new String[] {"8","9"});
		setFilingChannelData();
		setMortalityTlii();
		setTpdTli();
		setLookupPremAssumRate();
	}

	private void setPolicyWording() throws Exception 
	{
		searchPolicyWording();		
	}
	
	private void setNonForfeiture() throws Exception 
	{
		searchLookupCat();
		searchFomula();
	}
	
	private void setCalculatePremium() throws Exception 
	{
		searchAgeBand();
		setRateCatData(new String[] {"1","3","4","5"});
		setRateCatAgebandPMStandard(new String [] {"2"});
	}
	
	private void setRateCatAgebandPMStandard(String[] str) throws Exception
	{
		super.setListRateCatAgeBandPMStandard(searchRateCatAccessData(str));
	}

	private void setPolicyValue() throws Exception 
	{
		searchAgeBand();
		setRateCatData(new String[] {"6","13"});
		setRateCatAgebandRiskStandard(new String [] {"7"});
	}
	
    private void setRateCatAgebandRiskStandard(String[] str) throws Exception 
    {
    	super.setListRateCatAgeBandRiskStandard(searchRateCatAccessData(str));
	}

	//-------------------------------------------------------------------------------------------------------------------------------
	/**
	 * Set Data lookup
	 * @throws Exception
	 */
	private void searchLookupCat() throws Exception 
	{
		super.setListLookupCatAccessData(new LookupCatData().searchLookupCat());
	}
	
	/**
	 * Search for BasicInfo 
	 * @throws Exception
	 */
	private void setRateCatData(String [] str) throws Exception 
	{
		super.setListRateCatAccessData(searchRateCatAccessData(str));
	}
	
	private ArrayList<RateCatAccessData> searchRateCatAccessData(String [] str) throws Exception
	{
		return new RateCatData().searchInsuranceType(str);
	}
	private void setFilingChannelData() throws Exception 
	{
		super.setListFilingChannelAccessData(new FilingChannelData().searchInsuranceType());
	}
	
	/**
	 * lookup.lookup_cat.lookup_cat_id = 100 : ตารางที่ใช้ในการคำนวณเบี้ย
	 * lookup.rate_layout.rate_cat_id between  18 and 23
	 * @throws Exception
	 */
	private void setLookupPremAssumRate() throws Exception
	{
		super.setListPremAssumpRateGroup(new PremAssumpRateControlData().searchLookupPremAssumpRateGroup());
	}

	private void setMortalityTlii()  throws Exception
	{
		super.setListMortalityTli(new MortalityTliiData().searchBenefitDisabilityAccessData()); 
		//mortalityTliiData.printData(listMortalityTli);
	}
	
	private void setTpdTli() throws Exception 
	{
		super.setListTpdTiliAccessData(new TpdTliData().searchBenefitDisabilityAccessData());
	}

	//---------------------------------------------------------------------------------------------------------------------------
	private void searchPolicyWording() throws Exception
	{
		super.setListPolicyWordingAccessData(new PolicyWordingControlData().searchlookupPolicyWordingByCovCode());
	}
	
//-------------------------------------------------------------------------------------------------------------------------------
	private void searchAgeBand() throws Exception 
	{
		super.setListAgeBandAccessData(new AgeBandData().searchAgeBandAccessData());
	}
	
	private void setBenefits() throws Exception 
	{
		searchBenefitDisability();
		searchBenefit_Cat();
		searchFomula();
	}
	private void setEndorse() throws Exception 
	{
		super.setListBenefit(new EndorseRiderData().searchBenefitRiderEndorse()); 
	}
	//searchBenefitDisability -------------------------------------------------------------------------------------------------------
	private void searchBenefitDisability() throws Exception 
	{
		setListBenefit(new BenefitDisability().searchBenefitDisabilityAccessData()); 
	}
	//searchBenefit_Cat -------------------------------------------------------------------------------------------------------
	private void searchBenefit_Cat() throws Exception 
	{
		super.setListBenefitCat(new BenefitCat().searchBenefitDisabilityAccessData()); 
	}
	
	///////////////////////////////////////////////
	private void searchFomula() throws Exception 
	{
		super.setlookupFormula(new FormulaData().searchFormulaOL()); 
	}

	//Benz 29-11-2019 
	public ArrayList<RateCatAccessData> searchTax(String[] str_arr_Tax) throws Exception 
	{
		super.setListRateCatTaxReduce(searchRateCatAccessData(str_arr_Tax));
		return getListRateCatTaxReduce();
	}
	
	public static void main(String[] args) throws Exception {
		System.out.println(DateInfo.sysTime(0));
		new MainInsureDetailCreate().createDetail(1);
		System.out.println(DateInfo.sysTime(0));
	}
}
