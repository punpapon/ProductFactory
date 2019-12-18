package service.center;

import java.util.ArrayList;

import layout.bean.productfac.beanset.RateCatAccessData;
import service.baseplan.ctrl.AgeBandData;
import service.baseplan.ctrl.BenefitDisability;
import service.baseplan.ctrl.FilingChannelData;
import service.baseplan.ctrl.RateCatData;
import service.fnc.ConstantRateCatIDValues;
import service.product.FormulaCatData;
import service.product.SalesChannelData;
import service.rider.ctrl.BenefitCat;
import service.rider.ctrl.EndorseRiderData;

public class MainInsureDetailCreateProduct extends CoverageLookupDetail 
{
	public void createDetail(int tab) throws Exception
	{
		switch (tab) {
			case 1 	: setBasicInfo();
					  break;
			case 2 	: setCalculatePremium();
			  		  break;
			case 3 	: setUse_of_rights(); 
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
	private void setBasicInfo() throws Exception 
	{
		searchLookupCat();
		searchRateCatData(ConstantRateCatIDValues.getRlsRateNar());
		searchPMRate(ConstantRateCatIDValues.getPmstdRateCat());
		searchSaleChannelData();
		searchFilingChannelData();
	}

	private void searchPMRate(String[] pmstdRateCat) throws Exception
	{
		super.setListPMRate(searchRateCatAccessData(pmstdRateCat));	
	}
	
	private void setCalculatePremium() throws Exception 
	{
		searchFormulaCat();
	}
	private void setUse_of_rights() throws Exception 
	{
		searchFormulaCat();
	}
	
	private void searchFormulaCat() throws Exception 
	{
		super.setListFormulaCatAccesData(new FormulaCatData().searchInsuranceType());
	}
	
	private void setPolicyValue() throws Exception 
	{
		searchAgeBand();
		searchRateCatData(new String[] {"6","13"});
	}

	private void searchLookupCat() throws Exception 
	{
		super.setListLookupCatAccessData(new LookupCatData().searchLookupCat());
	}

	private void searchRateCatData(String [] str) throws Exception 
	{
		super.setListNar(searchRateCatAccessData(str));
	}
	
	private ArrayList<RateCatAccessData> searchRateCatAccessData(String [] str) throws Exception
	{
		return new RateCatData().searchInsuranceType(str);
	}
	private void searchFilingChannelData() throws Exception 
	{
		super.setListFilingChannelAccessData(new FilingChannelData().searchInsuranceType());
	}
	
	private void searchSaleChannelData() throws Exception 
	{
		super.setListSaleChannelAccessData(new SalesChannelData().searchInsuranceType());
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
	}
	private void setEndorse() throws Exception 
	{
		super.setListBenefit(new EndorseRiderData().searchBenefitRiderEndorse()); 
	}
   //searchBenefitDisability -------------------------------------------------------------------------------------------------------
	private void searchBenefitDisability() throws Exception 
	{
		super.setListBenefit(new BenefitDisability().searchBenefitDisabilityAccessData()); 
	}
   //searchBenefit_Cat -------------------------------------------------------------------------------------------------------
	private void searchBenefit_Cat() throws Exception 
	{
		super.setListBenefitCat(new BenefitCat().searchBenefitDisabilityAccessData()); 
	}
}
