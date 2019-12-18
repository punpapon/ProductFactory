package service.center;

import java.util.ArrayList;

import layout.bean.productfac.beanset.AgeBandAccessData;
import layout.bean.productfac.beanset.FilingChannelAccessData;
import layout.bean.productfac.beanset.FormulaCatAccesData;
import layout.bean.productfac.beanset.LookupCatAccessData;
import layout.bean.productfac.beanset.MortalityTliAccessData;
import layout.bean.productfac.beanset.PremAssumpRateGroupAccessData;
import layout.bean.productfac.beanset.RateCatAccessData;
import layout.bean.productfac.beanset.SalesChannelAccessData;
import layout.bean.productfac.beanset.TpdTiliAccessData;
import layout.bean.productfac.benefit.Benefit;
import layout.bean.productfac.benefit.Benefit_cat;
import layout.bean.productfac.lookup.Document_type;

class CoverageLookupDetail
{
	private ArrayList<AgeBandAccessData> listAgeBandAccessData;
	private ArrayList<Document_type> listPolicyWordingAccessData;
	private ArrayList<LookupCatAccessData> listLookupCatAccessData;
	private ArrayList<RateCatAccessData> listRateCatAccessData;
	private ArrayList<FilingChannelAccessData> listFilingChannelAccessData;
	private ArrayList<Benefit> listBenefit;
	private ArrayList<FormulaCatAccesData> listFormulaCatAccesData;
	private ArrayList<Benefit_cat> listBenefitCat;
	private ArrayList<MortalityTliAccessData> listMortalityTli;
	private ArrayList<TpdTiliAccessData> listTpdTiliAccessData;
	private ArrayList<RateCatAccessData> listRateCatAgeBandPMStandard;
	private ArrayList<RateCatAccessData> listRateCatAgeBandRiskStandard;
	private ArrayList<RateCatAccessData> listRateCatTaxReduce; // Benz 29-11-2019
	private ArrayList<PremAssumpRateGroupAccessData> listPremAssumpRateGroup;
	private ArrayList<SalesChannelAccessData> 	listSaleChannelAccessData;
	private ArrayList<RateCatAccessData> 		listNar;
	private ArrayList<RateCatAccessData> listPMRate;
	/**
	 * 
	 * @return ArrayList<AgeBandAccessData>  : Bean Set AgeBandAccessData  <br>
	 * 		- Age_band  				: getAgeBand() <br>
	 * 		- ArrayList<Age_band_det>   : getListAgeBandDet() <br>
	 * @throws Exception
	 */
	public ArrayList<AgeBandAccessData> getListAgeBandAccessData()
	{
		return listAgeBandAccessData;
	}

	protected void setListAgeBandAccessData(ArrayList<AgeBandAccessData> listAgeBandAccessData)
	{
		this.listAgeBandAccessData = listAgeBandAccessData;
	}
	
	/**
	 * 
	 * @return ArrayList<PolicyWordingAccessData> : list Bean Set PolicyWordingAccessData  <br>
     * 		1 Document_type : getDocumentType() <br>
     *  	2 ArrayList<DocumentHistAccessData> :  getListDocumentHistory() <br>
     *    		Bean set DocumentHistAccessData <br>
     *    			- Document_history 	: getDocumentHistory() <br>
     *      		- Coverage 			: getCoverage()    <br>
	 */
	public ArrayList<Document_type> getListPolicyWordingAccessData()
	{
		return listPolicyWordingAccessData;
	}

	protected void setListPolicyWordingAccessData(ArrayList<Document_type> listPolicyWordingAccessData)
	{
		this.listPolicyWordingAccessData = listPolicyWordingAccessData;
	}
	
	/**
	 * @return ArrayList<LookupCatAccessData> : list  beanSet LookupCatAccessData <br>
	 * 	- Lookup_cat  				: getLookupCat() <br>
	 * 	- ArrayList<Lookup_value>   : getListLookupValue(); <br>
	 */
	public ArrayList<LookupCatAccessData> getListLookupCatAccessData()
	{
		return listLookupCatAccessData;
	}

	protected void setListLookupCatAccessData(ArrayList<LookupCatAccessData> listLookupCatAccessData)
	{
		this.listLookupCatAccessData = listLookupCatAccessData;
	}
		
	/**
	 * 
	 * @return  ArrayList<RateCatAccessData> : Bean Set RateCatAccessData <br>
	 * 		if you get Data from Bean RateCatAccessData Follow this ซ <br> 
	 * 		Rate_cat rateCat				: getRateCat(); <br>
	 * 		ArrayList<RateLayoutAccessData>	: getListRateLayoutDet() <br>
	 * 		 
	 */
	public ArrayList<RateCatAccessData> getListRateCatAccessData()
	{
		return listRateCatAccessData;
	}

	protected void setListRateCatAccessData(ArrayList<RateCatAccessData> listRateCatAccessData)
	{
		this.listRateCatAccessData = listRateCatAccessData;
	}
	
	/**
	 * 
	 * @return ArrayList<FilingChannelAccessData>  : Bean Set FilingChannelAccessData <br>
	 * 		Filing_channel 			: getFilingChannel()
	 * 		ArrayList<Dist_channel> : getListDistChannel()
	 */
	public ArrayList<FilingChannelAccessData> getListFilingChannelAccessData()
	{
		return listFilingChannelAccessData;
	}

	protected void setListFilingChannelAccessData(ArrayList<FilingChannelAccessData> listFilingChannelAccessData)
	{
		this.listFilingChannelAccessData = listFilingChannelAccessData;
	}

	public ArrayList<Benefit> getListBenefit()
	{
		return listBenefit;
	}

	protected void setListBenefit(ArrayList<Benefit> listBenefit)
	{
		this.listBenefit = listBenefit;
	}

	public ArrayList<FormulaCatAccesData> getListFormulaCatAccesData()
	{
		return listFormulaCatAccesData;
	}

	protected void setListFormulaCatAccesData(ArrayList<FormulaCatAccesData> listFormulaCatAccesData)
	{
		this.listFormulaCatAccesData = listFormulaCatAccesData;
	}

	protected void setlookupFormula(ArrayList<FormulaCatAccesData> listFormulaCat) 
	{
		this.listFormulaCatAccesData = listFormulaCat;
		
	}
	public ArrayList<FormulaCatAccesData> getlookupFormula() 
	{
		return listFormulaCatAccesData;
	}
	
	public ArrayList<Benefit_cat> getListBenefitCat()
	{
		return listBenefitCat;
	}

	protected void setListBenefitCat(ArrayList<Benefit_cat> listBenefitCat)
	{
		this.listBenefitCat = listBenefitCat;
	}
	
	/**
     * @return ArrayList<MortalityTliAccessData>  : Bean set  MortalityTliAccessData  <br>
     *  <br>
     * Mortality_tli mortalityTli 			: getMortalityTli() <br>
     * private Mortality_oic mortalityOic   : getMortalityOic() <br>
     * ArrayList<Mortality_file> listMortalityFile  		: getListMortalityFile() <br>
     * ArrayList<Mortality_file_hist> listMortalityFileHist : getListMortalityFileHist() <br>
     */
	public ArrayList<MortalityTliAccessData> getListMortalityTli()
	{
		return listMortalityTli;
	}

	protected void setListMortalityTli(ArrayList<MortalityTliAccessData> listMortalityTli)
	{
		this.listMortalityTli = listMortalityTli;
	}
	
	/**
	 * @return ArrayList<TpdTiliAccessData> : list Bean set TpdTiliAccessData   <br>  <br>
	 * Tpd_tli tpdTli      			: getTpdTli(); <br>
	 * Mortality_oic mortalityOic 	: getMortalityOic(); <br>
	 * ArrayList<Tpd_file_hist> listTpdFileHist : getListTpdFileHist() <br>
	 * ArrayList<Tpd_file> listTpdFile 			: getListTpdFile() <br>
	 */
	public ArrayList<TpdTiliAccessData> getListTpdTiliAccessData()
	{
		return listTpdTiliAccessData;
	}

	protected void setListTpdTiliAccessData(ArrayList<TpdTiliAccessData> listTpdTiliAccessData)
	{
		this.listTpdTiliAccessData = listTpdTiliAccessData;
	}

	public ArrayList<RateCatAccessData> getListRateCatAgeBandPMStandard()
	{
		return listRateCatAgeBandPMStandard;
	}

	protected void setListRateCatAgeBandPMStandard(ArrayList<RateCatAccessData> listRateCatAgeBandPMStandard)
	{
		this.listRateCatAgeBandPMStandard = listRateCatAgeBandPMStandard;
	}

	public ArrayList<RateCatAccessData> getListRateCatAgeBandRiskStandard()
	{
		return listRateCatAgeBandRiskStandard;
	}

	public void setListRateCatAgeBandRiskStandard(ArrayList<RateCatAccessData> listRateCatAgeBandRiskStandard)
	{
		this.listRateCatAgeBandRiskStandard = listRateCatAgeBandRiskStandard;
	}

	protected ArrayList<RateCatAccessData> getListRateCatTaxReduce()
	{
		return listRateCatTaxReduce;
	}

	protected void setListRateCatTaxReduce(ArrayList<RateCatAccessData> listRateCatTaxReduce)
	{
		this.listRateCatTaxReduce = listRateCatTaxReduce;
	}

	public ArrayList<PremAssumpRateGroupAccessData> getListPremAssumpRateGroup()
	{
		return listPremAssumpRateGroup;
	}

	protected void setListPremAssumpRateGroup(ArrayList<PremAssumpRateGroupAccessData> listPremAssumpRateGroup)
	{
		this.listPremAssumpRateGroup = listPremAssumpRateGroup;
	}

	public ArrayList<SalesChannelAccessData> getListSaleChannelAccessData()
	{
		return listSaleChannelAccessData;
	}

	public void setListSaleChannelAccessData(ArrayList<SalesChannelAccessData> listSaleChannelAccessData)
	{
		this.listSaleChannelAccessData = listSaleChannelAccessData;
	}

	/**
	 * 
	 * @return  ArrayList<RateCatAccessData> : Bean Set RateCatAccessData <br>
	 * 		if you get Data from Bean RateCatAccessData Follow this ซ <br> 
	 * 		Rate_cat rateCat				: getRateCat(); <br>
	 * 		ArrayList<RateLayoutAccessData>	: getListRateLayoutDet() <br>
	 * 		 
	 */
	public ArrayList<RateCatAccessData> getListNar()
	{
		return listNar;
	}

	public void setListNar(ArrayList<RateCatAccessData> listNar)
	{
		this.listNar = listNar;
	}

	public ArrayList<RateCatAccessData> getListPMRate()
	{
		return listPMRate;
	}

	public void setListPMRate(ArrayList<RateCatAccessData> listPMRate)
	{
		this.listPMRate = listPMRate;
	}
}
