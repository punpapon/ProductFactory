package service.baseplan;


import layout.bean.productfac.coverage.Coverage;

import service.center.CoverageAccessData;
import service.fnc.ConstantRateCatIDValues;
import service.fnc.ConstantValues;

public class BasePlanAccessData extends CoverageAccessData
{
	private Coverage coverage;

	public BasePlanAccessData(Coverage coverage) throws Exception 
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

	/*
	 * For Basic info
	 * -----------------------------------------------------------------------------
	 */
	private void setBasicinfo() throws Exception
	{
		searchMode();
		searchFormula();
		searchParticipant();
		searchFillingChanel();
		searchPremium();
		searchPremAssumpRate();
		searchTaxDiscount(ConstantRateCatIDValues.getTaxRateCat());
		searchNote();
	}
	
	/*
	 * For Policy Wording
	 * -----------------------------------------------------------------------------
	 */
	private void setPolicyWording() throws Exception
	{
		searchDocument();
	}
	
	/*
	 * For GrantRightsInsure
	 * -----------------------------------------------------------------------------
	 */
	private void setGrantRightsInsure() throws Exception
	{
		searchNonforfprovision();
	}
	
	/*
	 * For Search PM
	 * -----------------------------------------------------------------------------
	 */
	private void setPremiumCal() throws Exception
	{
		searchPMStandard(ConstantRateCatIDValues.getPmstdRateCat());
		searchPMSpecial(ConstantRateCatIDValues.getPmstpRateCat());
		searchPMBetweenAge(ConstantRateCatIDValues.getPmbtaRateCat());
		searchCapitalDecrease(ConstantRateCatIDValues.getCpdRateCat());
	}
	
	/*
	 * Risk Standard
	 * -----------------------------------------------------------------------------
	 */
	private void setValueInsue() throws Exception
	{
		searchRiskStandard(ConstantRateCatIDValues.getRsRateCat());
		searchRiskLowStandard(ConstantRateCatIDValues.getRlsRateCat());
	}
	
	/*
	 * Benefit : BasePlan
	 * -----------------------------------------------------------------------------
	 */
	private void setBenefit() throws Exception
	{
		searchBenefitD(); // Benefit_cat > BC_CL_D สียชีวิต
		searchBenefitTPD(); // Benefit_cat > BC_CL_TPD ทุพพลภาพถาวรสิ้นเชิง
	}
}
