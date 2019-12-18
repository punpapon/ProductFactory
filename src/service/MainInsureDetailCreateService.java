package service;

import java.util.ArrayList;

import layout.bean.productfac.beanset.AgeBandAccessData;
import layout.bean.productfac.beanset.FilingChannelAccessData;
import layout.bean.productfac.beanset.FormulaCatAccesData;
import layout.bean.productfac.beanset.LookupCatAccessData;
import layout.bean.productfac.beanset.LookupCatValueAcessData;
import layout.bean.productfac.beanset.MortalityTliAccessData;
import layout.bean.productfac.beanset.PolicyWordingAccessData;
import layout.bean.productfac.beanset.PremAssumpRateGroupAccessData;
import layout.bean.productfac.beanset.RateCatAccessData;
import layout.bean.productfac.beanset.TpdTiliAccessData;
import layout.bean.productfac.benefit.Benefit;
import layout.bean.productfac.benefit.Benefit_cat;
import layout.bean.productfac.lookup.Document_type;
import layout.bean.productfac.lookup.Mortality_tli;
import service.center.LookupCatValue;
import service.center.MainInsureDetailCreate;
import service.ctrl.LookupCatValueData;
import service.rider.RiderBenefits;
import service.rider.ctrl.BenefitCat;

public class MainInsureDetailCreateService {
	MainInsureDetailCreate mdc = new MainInsureDetailCreate();
	private ArrayList<FilingChannelAccessData> list_filing_Channel;
	private ArrayList<RateCatAccessData> list_RateCatAccessData;
	private ArrayList<RateCatAccessData> list_RateCatAccessDataTab4;
	private ArrayList<LookupCatAccessData> list_Benefits_Lookup;
	
	private ArrayList<MortalityTliAccessData> listMortalityTli;
	private ArrayList<TpdTiliAccessData> listTpdTiliAccessData;
	private ArrayList<RateCatAccessData> listRateCatAgebandPMStandard;
	private ArrayList<RateCatAccessData> listRateCatAgebandRiskStandard;
	private ArrayList<FormulaCatAccesData> listFormulaCatAccesData;
	
	private ArrayList<PremAssumpRateGroupAccessData> listPremAssumpRateGroupAccessData;
	///Tab BasicInfo
	public ArrayList<LookupCatAccessData> BasicInfo_lookup (int tab) {
		ArrayList<LookupCatAccessData> datareturn = null ;
		try {
			mdc.createDetail(tab);
			datareturn = mdc.getListLookupCatAccessData();
			///	
			setfiling_Channel (mdc.getListFilingChannelAccessData()) ;
			setRateCatAccessData (mdc.getListRateCatAccessData());
			///
			setListMortalityTli (mdc.getListMortalityTli());
			setListTpdTiliAccessData(mdc.getListTpdTiliAccessData());
			///OL Benz 23-07-2019*
			setListPremAssumpRateGroupAccessData(mdc.getListPremAssumpRateGroup());
			
			//TabBenefits (6)
			setList_Benefits_Lookup (mdc.getListLookupCatAccessData()) ;
			
			
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return datareturn;
	}
//PremAssumpRateGroupAccessData	
	public ArrayList<PremAssumpRateGroupAccessData> getListPremAssumpRateGroupAccessData() {
		return listPremAssumpRateGroupAccessData;
	}

	public void setListPremAssumpRateGroupAccessData(
			ArrayList<PremAssumpRateGroupAccessData> listPremAssumpRateGroupAccessData) {
		this.listPremAssumpRateGroupAccessData = listPremAssumpRateGroupAccessData;
	}
//////Filing_Channel (1)
	public void setfiling_Channel (ArrayList<FilingChannelAccessData> arrayList)  {
		this.list_filing_Channel = arrayList;
	}
	public  ArrayList<FilingChannelAccessData> getfiling_Channel (){
		return list_filing_Channel ;
	}
//RateCatAccessData
	public void setRateCatAccessData (ArrayList<RateCatAccessData> arrayList)  {
		this.list_RateCatAccessData = arrayList;
	}
	public  ArrayList<RateCatAccessData> getRateCatAccessData (){
		return list_RateCatAccessData ;
	}
	
public ArrayList<MortalityTliAccessData> getListMortalityTli() {
		return listMortalityTli;
	}
	public void setListMortalityTli(ArrayList<MortalityTliAccessData> arrayList) {
		this.listMortalityTli = arrayList;
	}
	public ArrayList<TpdTiliAccessData> getListTpdTiliAccessData() {
		return listTpdTiliAccessData;
	}
	public void setListTpdTiliAccessData(ArrayList<TpdTiliAccessData> listTpdTiliAccessData) {
		this.listTpdTiliAccessData = listTpdTiliAccessData;
	}
	///////////////////////////////////////////////////////////////////////////
	///Tab Policy_Wording (2)
	public ArrayList<Document_type> Policy_Wording (int tab) {
		ArrayList<Document_type> datareturn = null ;
		try {
			mdc.createDetail(tab);
			datareturn = mdc.getListPolicyWordingAccessData();
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return datareturn;
	}
	//////////////////////////////////////////////////////////////////////////
	//Tab exercise_rights_insurance(3)
	public ArrayList<FormulaCatAccesData> exercise_rights_insurance (int tab) {
		ArrayList<FormulaCatAccesData> datareturn = null ;
		try {
			mdc.createDetail(tab);
			//datareturn = mdc.getListPolicyWordingAccessData();
			datareturn = mdc.getlookupFormula();
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return datareturn;
	}
	//////////////////////////////////////////////////////////////////////////
	//Tab Cal_insurance (4)
	public ArrayList<AgeBandAccessData> Cal_insurance (int tab) {
		ArrayList<AgeBandAccessData> datareturn = null ;
		try {
			mdc.createDetail(tab);
			datareturn = mdc.getListAgeBandAccessData();
			setRateCat (mdc.getListRateCatAccessData()) ;
			setRateCatAgebandPMStandard(mdc.getListRateCatAgeBandPMStandard());
			//setListFormula (mdc.getlookupFormula());
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return datareturn;
	}
	//Get lookup Formula
	public void setListFormula(ArrayList<FormulaCatAccesData> list_lookupFormula) {
		this.listFormulaCatAccesData = list_lookupFormula;
	}
	public  ArrayList<FormulaCatAccesData> getListFormula (){
		return listFormulaCatAccesData ;
	}
	//getLookupBenefitdata
	public ArrayList<LookupCatValueAcessData> getLookupBenefitdata (String [] cov_type) {
		ArrayList<LookupCatValueAcessData> datareturn = null ;
		try {
			LookupCatValue lcv = new LookupCatValue();
			datareturn = lcv.searchLookupCatValue(cov_type);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return datareturn;
	}
	
	
//////ListRateCatAccessData 
	public void setRateCat (ArrayList<RateCatAccessData> arrayList)  {
		this.list_RateCatAccessDataTab4 = arrayList;
		
	}
	public  ArrayList<RateCatAccessData> geRateCat (){
		return list_RateCatAccessDataTab4 ;
	}
	//Tab ตารางมูลค่ากรมธรรม์ (5)
		public ArrayList<RateCatAccessData> Table_policy_value (int tab) {
			ArrayList<RateCatAccessData> datareturn = null ;
			try {
				mdc.createDetail(tab);
				datareturn = mdc.getListRateCatAccessData();
				setRateCatAgebandRiskStandard(mdc.getListRateCatAgeBandRiskStandard()) ;
			} catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
			}
			return datareturn;
		}
	//Tab ผลประโยชน์/ความคุ้มครอง (6 BaseplabCL)
		public ArrayList<Benefit> Benefits (int tab) {
			ArrayList<Benefit> datareturn = null ;
			try {
				mdc.createDetail(tab);
				datareturn = mdc.getListBenefit();
			} catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
			}
			return datareturn;
		}
		//Tab ผลประโยชน์/ความคุ้มครอง (6 RiderCL) 
		public ArrayList<Benefit_cat> Benefits_cat (int tab) {
			ArrayList<Benefit_cat> datareturn = null ;
			try {
				mdc.createDetail(tab);
				datareturn = mdc.getListBenefitCat();
			} catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
			}
			return datareturn;
		} 
		//เงินปันผล
		public ArrayList<FormulaCatAccesData> dividend_lookup(int tab) {
			ArrayList<FormulaCatAccesData> datareturn = null ;
			try {
				mdc.createDetail(tab);
				datareturn = mdc.getlookupFormula();
			} catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
			}
			return datareturn;
		}
		//Tab บันทึกสลักหลัง
		public ArrayList<Benefit> getEndorse (int tab) {
			ArrayList<Benefit> datareturn = null ;
			try {
				mdc.createDetail(tab);
				datareturn = mdc.getListBenefit();
			} catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
			}
			return datareturn;
		} 
	//Get BenefitRider	
		public ArrayList<Benefit> get_Benefit (String bnf_cat_code) {
			ArrayList<Benefit> datareturn = null ;
			try {
				RiderBenefits rbf = new RiderBenefits();
				datareturn = rbf.searchBenefitBy_BnfCatCode(bnf_cat_code);
			} catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
			}
			return datareturn;
		} 
		
	//////ListRateCatAccessData 
		public void setList_Benefits_Lookup(ArrayList<LookupCatAccessData> list_Benefits_Lookup) {
			this.list_Benefits_Lookup = list_Benefits_Lookup;
		}
		public  ArrayList<LookupCatAccessData> getBenefits_Lookup (){
			return list_Benefits_Lookup ;
		}
		
		public void setRateCatAgebandPMStandard (ArrayList<RateCatAccessData> arrayList)  {
			this.listRateCatAgebandPMStandard = arrayList;
			
		}
		public  ArrayList<RateCatAccessData> getRateCatAgebandPMStandard (){
			return listRateCatAgebandPMStandard ;
		}
		
		public void setRateCatAgebandRiskStandard (ArrayList<RateCatAccessData> arrayList)  {
			this.listRateCatAgebandRiskStandard = arrayList;
			
		}
		public  ArrayList<RateCatAccessData> getRateCatAgebandRiskStandard (){
			return listRateCatAgebandRiskStandard ;
		}
}
///
