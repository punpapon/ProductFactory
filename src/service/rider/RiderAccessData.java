package service.rider;


import layout.bean.productfac.coverage.Coverage;
import service.center.CoverageAccessData;
import service.fnc.ConstantRateCatIDValues;
import service.fnc.ConstantValues;

public class RiderAccessData extends CoverageAccessData
{

	private Coverage coverage;

	public RiderAccessData(Coverage coverage) throws Exception
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
		searchMortalityTli(coverage.getMale_tpd_tli_id(),coverage.getFemale_tpd_tli_id());
		searchTpdTli(coverage.getMale_tpd_tli_id(),coverage.getFemale_tpd_tli_id());
		searchTaxDiscount(ConstantRateCatIDValues.getTaxRateCatOl());
		searchNote();
		searchPremAssumpRate();
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
	 * ParticipantAccessData
	 * -----------------------------------------------------------------------------
	 */
	private void setProtectedPerson() throws Exception
	{
		searchParticipantAll();
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
	 * Search PM
	 * -----------------------------------------------------------------------------
	 */
	private void setPremiumCal() throws Exception
	{
		searchPMStandard(ConstantRateCatIDValues.getPmstdRateCat());
		searchPMSpecial(ConstantRateCatIDValues.getPmstpRateCat());
		searchPMBetweenAge(ConstantRateCatIDValues.getPmbtaRateCat());
		searchCapitalDecrease(ConstantRateCatIDValues.getCpdRateCat());
		searchPrem_occ_charge();
	}

	private void setValueInsue() throws Exception
	{
		searchRiskStandard(ConstantRateCatIDValues.getRsRateCat());
		searchRiskLowStandard(ConstantRateCatIDValues.getRlsRateCat());
	}

	/*
	 * Benefit
	 * -----------------------------------------------------------------------------
	 */
	private void setBenefit() throws Exception
	{
		searchBenefitCat();
	}

	/*
	 * Endorse
	 * -----------------------------------------------------------------------------
	 */
	private void setEndorse() throws Exception
	{
		searchEndorse();
	}
}
