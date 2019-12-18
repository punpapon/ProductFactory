package service.center;

import java.util.ArrayList;

import layout.bean.productfac.beanset.AgeBandAccessData;
import layout.bean.productfac.beanset.FilingChannelAccessData;
import layout.bean.productfac.beanset.FormulaCatAccesData;
import layout.bean.productfac.beanset.LookupCatAccessData;
import layout.bean.productfac.beanset.MortalityTliAccessData;
import layout.bean.productfac.beanset.PremAssumpRateGroupAccessData;
import layout.bean.productfac.beanset.RateCatAccessData;
import layout.bean.productfac.beanset.TpdTiliAccessData;
import layout.bean.productfac.benefit.Benefit;
import layout.bean.productfac.benefit.Benefit_cat;
import layout.bean.productfac.lookup.Document_type;
import service.baseplan.ctrl.AgeBandData;
import service.rider.ctrl.BenefitCat;
import service.rider.ctrl.EndorseRiderData;
import service.baseplan.ctrl.FilingChannelData;
import service.baseplan.ctrl.MortalityTliiData;
import service.baseplan.ctrl.RateCatData;
import service.baseplan.ctrl.TpdTliData;
import service.ctrl.PolicyWordingControlData;
import service.ctrl.PremAssumpRateControlData;

public class MainInsureDetailCreateRiderOL 
{
	private ArrayList<AgeBandAccessData> 		listAgeBandAccessData;
	private ArrayList<Document_type> 	listPolicyWordingAccessData;
	private ArrayList<LookupCatAccessData> 		listLookupCatAccessData;
	private ArrayList<RateCatAccessData> 		listRateCatAccessData;
	private ArrayList<FilingChannelAccessData> 	listFilingChannelAccessData;
	private PolicyWordingControlData 	policyWordingControlData 	= new PolicyWordingControlData();
	private AgeBandData 		ageBanddata 		= new AgeBandData();
	private int doTab;
	private ArrayList<Benefit> listBenefit;
	private ArrayList<FormulaCatAccesData> listFormulaCatAccesData;
	private ArrayList<Benefit_cat> listBenefitCat;
	private ArrayList<MortalityTliAccessData> listMortalityTli;
	private ArrayList<TpdTiliAccessData> listTpdTiliAccessData;
	private ArrayList<RateCatAccessData> listRateCatAgeBandPMStandard;
	private ArrayList<RateCatAccessData> listRateCatAgeBandRiskStandard;
	private ArrayList<PremAssumpRateGroupAccessData> listPremAssumpRateGroup;

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
			case 6 	: setBenefit(); 
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
		setRateCatData(new String[] {"24","25"});
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
	}
	
	private void setCalculatePremium() throws Exception 
	{
		searchAgeBand();
		setRateCatData(new String[] {"26","28","30","31","39"});
		setRateCatAgebandPMStandard(new String [] {"27"});
	}
	
	private void setRateCatAgebandPMStandard(String[] str) throws Exception
	{
		setListRateCatAgeBandPMStandard(searchRateCatAccessData(str));
	}
	
	/**
	 * @param listRateCatAgeBandPMStandard the listRateCatAgeBandPMStandard to set
	 */
	private void setListRateCatAgeBandPMStandard(ArrayList<RateCatAccessData> listRateCatAgeBandPMStandard) 
	{
		this.listRateCatAgeBandPMStandard = listRateCatAgeBandPMStandard;
	}
		
	/**
	 * @return the listRateCatAgeBandPMStandard
	 */
	public ArrayList<RateCatAccessData> getListRateCatAgeBandPMStandard() 
	{
		return listRateCatAgeBandPMStandard;
	}


	private void setPolicyValue() throws Exception 
	{
		searchAgeBand();
		setRateCatData(new String[] {"33","35"});
		setRateCatAgebandRiskStandard(new String [] {"34"});
	}
	
    private void setRateCatAgebandRiskStandard(String[] str) throws Exception 
    {
    	setListRateCatAgeBandRiskStandard(searchRateCatAccessData(str));
	}

	/**
	 * @param listRateCatAgeBandRiskStandard the listRateCatAgeBandRiskStandard to set
	 */
	public void setListRateCatAgeBandRiskStandard(ArrayList<RateCatAccessData> listRateCatAgeBandRiskStandard) 
	{
		this.listRateCatAgeBandRiskStandard = listRateCatAgeBandRiskStandard;
	}

	/**
	 * @return the listRateCatAgeBandRiskStandard
	 */
	public ArrayList<RateCatAccessData> getListRateCatAgeBandRiskStandard() 
	{
		return listRateCatAgeBandRiskStandard;
	}

	//-------------------------------------------------------------------------------------------------------------------------------
	/**
	 * Set Data lookup
	 * @throws Exception
	 */
	private void searchLookupCat() throws Exception 
	{
		setListLookupCatAccessData(new LookupCatData().searchLookupCat());
	}
		
	private void setListLookupCatAccessData(ArrayList<LookupCatAccessData> listLookupCatAccessData) 
	{
		this.listLookupCatAccessData = listLookupCatAccessData;
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
	
	/**
	 * Search for BasicInfo 
	 * @throws Exception
	 */
	private void setRateCatData(String [] str) throws Exception 
	{
		setListRateCatAccessData(searchRateCatAccessData(str));
	}


	private void setListRateCatAccessData(ArrayList<RateCatAccessData> listRateCatAccessData) 
	{
		this.listRateCatAccessData = listRateCatAccessData;
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

	
	private ArrayList<RateCatAccessData> searchRateCatAccessData(String [] str) throws Exception
	{
		return new RateCatData().searchInsuranceType(str);
	}
	private void setFilingChannelData() throws Exception 
	{
		setListFilingChannelAccessData(new FilingChannelData().searchInsuranceType());
	}
	
	private void setListFilingChannelAccessData(ArrayList<FilingChannelAccessData> listFilingChannelAccessData) 
	{
		this.listFilingChannelAccessData = listFilingChannelAccessData;
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
	

	/**
	 * lookup.lookup_cat.lookup_cat_id = 100 : ตารางที่ใช้ในการคำนวณเบี้ย
	 * lookup.rate_layout.rate_cat_id between  18 and 23
	 * @throws Exception
	 */
	private void setLookupPremAssumRate() throws Exception
	{
		PremAssumpRateControlData assumpRateControlData = new PremAssumpRateControlData();
		setListPremAssumpRateGroup(assumpRateControlData.searchLookupPremAssumpRateGroup());
	}
	
	public ArrayList<PremAssumpRateGroupAccessData> getListPremAssumpRateGroup()
	{
		return listPremAssumpRateGroup;
	}

	public void setListPremAssumpRateGroup(ArrayList<PremAssumpRateGroupAccessData> listPremAssumpRateGroup)
	{
		this.listPremAssumpRateGroup = listPremAssumpRateGroup;
	}

	private void setMortalityTlii()  throws Exception
	{
		MortalityTliiData mortalityTliiData = new MortalityTliiData();
		ArrayList<MortalityTliAccessData> listMortalityTli = mortalityTliiData.searchBenefitDisabilityAccessData();
		setListMortalityTli(listMortalityTli); 
	}
	
	
	
	private void setListMortalityTli(ArrayList<MortalityTliAccessData> listMortalityTli) 
	{
		this.listMortalityTli = listMortalityTli;
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

	private void setTpdTli() throws Exception 
	{
		TpdTliData tpdTliData = new TpdTliData();
		ArrayList<TpdTiliAccessData> listTpdTiliAccessData = tpdTliData.searchBenefitDisabilityAccessData();
		setListTpdTiliAccessData(listTpdTiliAccessData);
	}
	
	private void setListTpdTiliAccessData(ArrayList<TpdTiliAccessData> listTpdTiliAccessData) 
	{
		this.listTpdTiliAccessData = listTpdTiliAccessData;
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

	//---------------------------------------------------------------------------------------------------------------------------
	private void searchPolicyWording() throws Exception
	{
		this.policyWordingControlData = new PolicyWordingControlData();
		ArrayList<Document_type> listPolicyWordingAccessData = policyWordingControlData.searchlookupPolicyWordingByCovCode();
		setListPolicyWordingAccessData(listPolicyWordingAccessData);
	}
	
	private void setListPolicyWordingAccessData(ArrayList<Document_type> listPolicyWordingAccessData) 
	{
		this.listPolicyWordingAccessData  = listPolicyWordingAccessData;
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
//-------------------------------------------------------------------------------------------------------------------------------
	private void searchAgeBand() throws Exception 
	{
		ArrayList<AgeBandAccessData> listAgeBandAccessData = ageBanddata.searchAgeBandAccessData();
		setListAgeBandAccessData(listAgeBandAccessData);
	}
	
	private void setListAgeBandAccessData(ArrayList<AgeBandAccessData> listAgeBandAccessData) 
	{
		this.listAgeBandAccessData = listAgeBandAccessData;
	}

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
	
	private void setBenefit() throws Exception 
	{
		searchBenefit_Cat();
	}
	private void setEndorse() throws Exception 
	{
		EndorseRiderData erd = new EndorseRiderData();
		ArrayList<Benefit> listBenefit  = erd.searchBenefitRiderEndorse();
		setListBenefit(listBenefit); 
	}
    //searchBenefit_Cat -------------------------------------------------------------------------------------------------------
	private void searchBenefit_Cat() throws Exception 
	{
		BenefitCat benefitDisability = new BenefitCat(); 
		ArrayList<Benefit_cat> listBenefitcat = benefitDisability.searchBenefitDisabilityAccessData();
		//รอมาเปิดเมื่อข้อมูลพร้อม 
		///ArrayList<Benefit_cat> listBenefitcat = benefitDisability.searchBenefitByCovCatId();
		setListBenefitCat(listBenefitcat); 
	}
	private void setListBenefit(ArrayList<Benefit> listBenefit) 
	{
		this.listBenefit = listBenefit;
		
	}
	/**
     * 
     * @return ArrayList<Benefit>  : list Bean Benefit 
     */
	public ArrayList<Benefit_cat> getListBenefitCat() 
	{
		return listBenefitCat;
	}
	public ArrayList<FormulaCatAccesData> getlookupFormula() 
	{
		return listFormulaCatAccesData;
	}
	
	/////////////////////////////////////////////////
	/**
     * 
     * @return ArrayList<Benefit>  : list Bean Benefit 
     */
	public ArrayList<Benefit> getListBenefit() 
	{
		return listBenefit;
	}
	
	private void setListBenefitCat(ArrayList<Benefit_cat> listBenefitCat) 
	{
		this.listBenefitCat = listBenefitCat;
		
	}
}
