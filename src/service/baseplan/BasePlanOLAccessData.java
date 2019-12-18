package service.baseplan;


import layout.bean.productfac.coverage.Coverage;

import service.center.CoverageAccessData;
import service.fnc.ConstantRateCatIDValues;
import service.fnc.ConstantValues;

public class BasePlanOLAccessData  extends CoverageAccessData
{
	private Coverage coverage;
	
	public BasePlanOLAccessData(Coverage coverage) throws Exception 
	{
		this.coverage = coverage;
		ConstantValues.COV_CODE = this.coverage.getCov_code();
		prepareAccessData();
	}

	private void prepareAccessData() throws Exception
	{
		setBasicinfo();
		setPolicyWording();
		setGrantRightsInsure();
		setPremiumCal();
		setValueInsue();
		setBenefit();
	}

	private void setBasicinfo() throws Exception
	{
		searchMode();
		searchFormula();
		searchParticipant();
		searchFillingChanel();
		searchPremium();
		searchPremAssumpRate();
		searchTaxDiscount(ConstantRateCatIDValues.getTaxRateCatOl());
		searchNote();
	}

	private void setPolicyWording() throws Exception
	{
		searchDocument();
	}

	private void setGrantRightsInsure() throws Exception
	{
		searchNonforfprovision();
	}

	private void setPremiumCal() throws Exception
	{
		searchPMStandard();
		searchCal_Premiums(ConstantRateCatIDValues.getCipRateCatOl());
		searchTable_Dis_Sa(ConstantRateCatIDValues.getDtiRateCatOl());
		searchPMSpecial(ConstantRateCatIDValues.getPmstpRateCatOl());
		searchPMBetweenAge(ConstantRateCatIDValues.getPmbtaRateCatOl());
		searchCapitalDecrease(ConstantRateCatIDValues.getCpdRateCatOl());
	}

	private void setValueInsue() throws Exception
	{
		searchRiskStandard(ConstantRateCatIDValues.getRsRateCatOl());
		searchRiskLowStandard( ConstantRateCatIDValues.getRlsRateCatOl());
	}

	/*
	 * Search PM  -----------------------------------------------------------------------------
	 */

	private void searchPMStandard() throws Exception
	{
		super.searchPMStandard(ConstantRateCatIDValues.getPmstdRateCatOl());
		super.searchPMStandard2(ConstantRateCatIDValues.getCipRateCatOl());	
	}

	/*
	 *  Benefit -----------------------------------------------------------------------------
	 */
	
	private void setBenefit() throws Exception
	{
		super.searchCoverageBenefitPage();
		super.searchDividend(ConstantRateCatIDValues.getDivRateCatOl());
	}
}
