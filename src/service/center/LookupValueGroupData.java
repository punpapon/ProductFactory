package service.center;

import java.util.ArrayList;

import layout.bean.productfac.beanset.LookupValueGroupAccessData;
import service.ctrl.LookupValueGroupControlData;

public class LookupValueGroupData
{
	ArrayList<LookupValueGroupAccessData> listGroup_CL = new ArrayList<>();;
	ArrayList<LookupValueGroupAccessData> listGroup_CL_P = new ArrayList<>();
	ArrayList<LookupValueGroupAccessData> listGroup_CL_P_benefitFactorSum = new ArrayList<>();
	ArrayList<LookupValueGroupAccessData> listGroup_CL_P_FYP = new ArrayList<>();
	ArrayList<LookupValueGroupAccessData> listGroup_CL_riderBenefitUnit = new ArrayList<>();
	ArrayList<LookupValueGroupAccessData> listGroup_CL_P_benefitFactorSumMin = new ArrayList<>();
	ArrayList<LookupValueGroupAccessData> listGroup_CL_P_benefitUnitSum = new ArrayList<>();
	ArrayList<LookupValueGroupAccessData> listGroup_CL_P_RYP = new ArrayList<>();
	ArrayList<LookupValueGroupAccessData> listGroup_CL_baseBenefitSA = new ArrayList<>();
	ArrayList<LookupValueGroupAccessData> listGroup_CL_riderBenefitFactor = new ArrayList<>();
	ArrayList<LookupValueGroupAccessData> listGroup_CL_riderBenefitScope = new ArrayList<>();
	ArrayList<LookupValueGroupAccessData> listGroup_CL_riderBenefitFactorUnit = new ArrayList<>();
	ArrayList<LookupValueGroupAccessData> listGroup_CL_riderBenefitFactorScope = new ArrayList<>();
	//--OL
	ArrayList<LookupValueGroupAccessData> listGroup_OL = new ArrayList<>();
	ArrayList<LookupValueGroupAccessData> listGroup_OL_baseBenefitSA = new ArrayList<>();
	ArrayList<LookupValueGroupAccessData> listGroup_OL_baseBenefitCVPV = new ArrayList<>();
	ArrayList<LookupValueGroupAccessData> listGroup_OL_BaseBenefitADB = new ArrayList<>();
	ArrayList<LookupValueGroupAccessData> listGroup_OL_BaseBenefitOther = new ArrayList<>();
	ArrayList<LookupValueGroupAccessData> listGroup_benefitFactorUnit = new ArrayList<>();
	ArrayList<LookupValueGroupAccessData> listGroup_baseBenefitFactorScope = new ArrayList<>();
	ArrayList<LookupValueGroupAccessData> listGroup_OL_BaseBenefitDividend = new ArrayList<>();
	//--ProductRiderOL
	ArrayList<LookupValueGroupAccessData> listGroup_OL_Reins_OPT = new ArrayList<>();
	ArrayList<LookupValueGroupAccessData> listGroup_OL_PR_Limit_Factor_Seq1 = new ArrayList<>();
	ArrayList<LookupValueGroupAccessData> listGroup_OL_PR_Limit_Factor_Seq2 = new ArrayList<>();
	
	//--
	ArrayList<LookupValueGroupAccessData> listGroup_Age_Unit = new ArrayList<>();
	ArrayList<LookupValueGroupAccessData> listGroup_Age_Max_Unit = new ArrayList<>();
	ArrayList<LookupValueGroupAccessData> listSenior_Opt = new ArrayList<>();
	//--Product BaseOL
	ArrayList<LookupValueGroupAccessData> listGroupCollectMeth_OL = new ArrayList<>();
	//ArrayList<LookupValueGroupAccessData>  = new ArrayList<>();
	
	public LookupValueGroupData() throws Exception {
		ArrayList<LookupValueGroupAccessData> listData = new LookupValueGroupControlData().searchLookupValueGroup();
		sortLookupValueGroup(listData);
	}
	
	public void sortLookupValueGroup(ArrayList<LookupValueGroupAccessData> listResult) {
		
		for (LookupValueGroupAccessData lookupValueGroupAccessData : listResult) {
			
			if(lookupValueGroupAccessData.getSub_group_name() != null) {
				switch ( lookupValueGroupAccessData.getSub_group_name()) {
					case "CL":		  	if(lookupValueGroupAccessData.getLookup_cat_enum_name().equals("lu_prd_design")) {
											listGroup_CL.add(lookupValueGroupAccessData);
										}
										break;
				case "CL_P": 	listGroup_CL_P.add(lookupValueGroupAccessData);
					break;		
				case "CL_P_Benefit_Factor_Sum": 	listGroup_CL_P_benefitFactorSum.add(lookupValueGroupAccessData);
					break;
				case "CL_P_FYP": 	listGroup_CL_P_FYP.add(lookupValueGroupAccessData);
					break;
				case "CL_Rider_Benefit_Unit": 	listGroup_CL_riderBenefitUnit.add(lookupValueGroupAccessData);
					break;
				case "CL_P_Benefit_Factor_Sum_Min": 	listGroup_CL_P_benefitFactorSumMin.add(lookupValueGroupAccessData);
					break;
				case "CL_P_Benefit_Unit_Sum": 	listGroup_CL_P_benefitUnitSum.add(lookupValueGroupAccessData);
					break;
				case "CL_P_RYP": 	listGroup_CL_P_RYP.add(lookupValueGroupAccessData);
					break;
				case "OL":				if(lookupValueGroupAccessData.getLookup_cat_enum_name().equals("lu_prd_design")) {
											listGroup_OL.add(lookupValueGroupAccessData);
										}
										if(lookupValueGroupAccessData.getLookup_cat_enum_name().equals("lu_collect_meth")) {
											listGroupCollectMeth_OL.add(lookupValueGroupAccessData);
										}
										
										break;
				case "CL_Base_Benefit_SA": 	listGroup_CL_baseBenefitSA.add(lookupValueGroupAccessData);
					break;
				case "CL_Rider_Benefit_Factor": 	listGroup_CL_riderBenefitFactor.add(lookupValueGroupAccessData);
					break;
				case "CL_Rider_Benefit_Scope": 	listGroup_CL_riderBenefitScope.add(lookupValueGroupAccessData);
					break;
				case "CL_Rider_Benefit_Factor_Unit" : listGroup_CL_riderBenefitFactorUnit.add(lookupValueGroupAccessData);
					break;
				case "CL_Rider_Benefit_Factor_Scope" : listGroup_CL_riderBenefitFactorScope.add(lookupValueGroupAccessData);
					break;	
				case "OL_Base_Benefit_SA" : listGroup_OL_baseBenefitSA.add(lookupValueGroupAccessData);
					break;
				case "Base_Benefit_CVPV" : listGroup_OL_baseBenefitCVPV.add(lookupValueGroupAccessData);
					break;
				case "OL_Base_Benefit_ADB" : listGroup_OL_BaseBenefitADB.add(lookupValueGroupAccessData);
					break;
				case "OL_Base_Benefit_Other" : listGroup_OL_BaseBenefitOther.add(lookupValueGroupAccessData);
					break;
				case "Benefit_Factor_Unit" : listGroup_benefitFactorUnit.add(lookupValueGroupAccessData);
					break;
				case "Base_Benefit_Factor_Scope" : listGroup_baseBenefitFactorScope.add(lookupValueGroupAccessData);
					break;
				case "OL_Base_Benefit_Dividend" : listGroup_OL_BaseBenefitDividend.add(lookupValueGroupAccessData);
					break;
				case "OL_REINS_OPT" : listGroup_OL_Reins_OPT.add(lookupValueGroupAccessData);
					break;
				case "OL_PR_Limit_Factor_Seq1" : listGroup_OL_PR_Limit_Factor_Seq1.add(lookupValueGroupAccessData);
					break;	
				case "OL_PR_Limit_Factor_Seq2" : listGroup_OL_PR_Limit_Factor_Seq2.add(lookupValueGroupAccessData);
					break;	
				case "Age_Unit" : listGroup_Age_Unit.add(lookupValueGroupAccessData);
					break;
				case "Age_Max_Unit" : listGroup_Age_Max_Unit.add(lookupValueGroupAccessData);
					break;
				case "Senior_Opt" : listSenior_Opt.add(lookupValueGroupAccessData);
					break;
				/*case "" : .add(lookupValueGroupAccessData);
					break;*/
					
				default:	
					break;
				}
			}
			
		}
	}

	public ArrayList<LookupValueGroupAccessData> getListGroup_CL() {
		return listGroup_CL;
	}

	public ArrayList<LookupValueGroupAccessData> getListGroup_CL_P() {
		return listGroup_CL_P;
	}

	public ArrayList<LookupValueGroupAccessData> getListGroup_CL_P_benefitFactorSum() {
		return listGroup_CL_P_benefitFactorSum;
	}

	public ArrayList<LookupValueGroupAccessData> getListGroup_CL_P_FYP() {
		return listGroup_CL_P_FYP;
	}

	public ArrayList<LookupValueGroupAccessData> getListGroup_CL_riderBenefitUnit() {
		return listGroup_CL_riderBenefitUnit;
	}

	public ArrayList<LookupValueGroupAccessData> getListGroup_CL_P_benefitFactorSumMin() {
		return listGroup_CL_P_benefitFactorSumMin;
	}

	public ArrayList<LookupValueGroupAccessData> getListGroup_CL_P_benefitUnitSum() {
		return listGroup_CL_P_benefitUnitSum;
	}

	public ArrayList<LookupValueGroupAccessData> getListGroup_CL_P_RYP() {
		return listGroup_CL_P_RYP;
	}

	public ArrayList<LookupValueGroupAccessData> getListGroup_OL() {
		return listGroup_OL;
	}

	public ArrayList<LookupValueGroupAccessData> getListGroup_CL_baseBenefitSA() {
		return listGroup_CL_baseBenefitSA;
	}

	public ArrayList<LookupValueGroupAccessData> getListGroup_CL_riderBenefitFactor() {
		return listGroup_CL_riderBenefitFactor;
	}

	public ArrayList<LookupValueGroupAccessData> getListGroup_CL_riderBenefitScope() {
		return listGroup_CL_riderBenefitScope;
	}

	public ArrayList<LookupValueGroupAccessData> getListGroup_CL_riderBenefitFactorUnit() {
		return listGroup_CL_riderBenefitFactorUnit;
	}

	public ArrayList<LookupValueGroupAccessData> getListGroup_CL_riderBenefitFactorScope() {
		return listGroup_CL_riderBenefitFactorScope;
	}

	public ArrayList<LookupValueGroupAccessData> getListGroup_OL_baseBenefitSA() {
		return listGroup_OL_baseBenefitSA;
	}

	public ArrayList<LookupValueGroupAccessData> getListGroup_OL_baseBenefitCVPV() {
		return listGroup_OL_baseBenefitCVPV;
	}

	public ArrayList<LookupValueGroupAccessData> getListGroup_OL_BaseBenefitADB() {
		return listGroup_OL_BaseBenefitADB;
	}

	public ArrayList<LookupValueGroupAccessData> getListGroup_OL_BaseBenefitOther() {
		return listGroup_OL_BaseBenefitOther;
	}

	public ArrayList<LookupValueGroupAccessData> getListGroup_benefitFactorUnit() {
		return listGroup_benefitFactorUnit;
	}

	public ArrayList<LookupValueGroupAccessData> getListGroup_baseBenefitFactorScope() {
		return listGroup_baseBenefitFactorScope;
	}

	public ArrayList<LookupValueGroupAccessData> getListGroup_OL_BaseBenefitDividend() {
		return listGroup_OL_BaseBenefitDividend;
	}

	public ArrayList<LookupValueGroupAccessData> getListGroup_OL_Reins_OPT() {
		return listGroup_OL_Reins_OPT;
	}

	public ArrayList<LookupValueGroupAccessData> getListGroup_OL_PR_Limit_Factor_Seq1() {
		return listGroup_OL_PR_Limit_Factor_Seq1;
	}

	public ArrayList<LookupValueGroupAccessData> getListGroup_OL_PR_Limit_Factor_Seq2() {
		return listGroup_OL_PR_Limit_Factor_Seq2;
	}

	public ArrayList<LookupValueGroupAccessData> getListGroup_Age_Unit() {
		return listGroup_Age_Unit;
	}

	public ArrayList<LookupValueGroupAccessData> getListGroup_Age_Max_Unit() {
		return listGroup_Age_Max_Unit;
	}

	public ArrayList<LookupValueGroupAccessData> getListSenior_Opt() {
		return listSenior_Opt;
	}

	public ArrayList<LookupValueGroupAccessData> getListGroupCollectMeth_OL() {
		return listGroupCollectMeth_OL;
	}

	
	
	
}
