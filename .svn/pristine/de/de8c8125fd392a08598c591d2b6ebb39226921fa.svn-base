package service.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.appconfig.Coverage_benefit_page;
import layout.bean.productfac.beanset.BenefitAccessData;
import layout.bean.productfac.beanset.CoverageBenefitPageAccessData;
import layout.bean.productfac.benefit.Benefit;
import layout.bean.productfac.benefit.Benefit_cat;
import layout.bean.productfac.coverage.Benefit_amount;
import layout.bean.productfac.coverage.Benefit_item;
import layout.bean.productfac.coverage.Benefit_limit;
import layout.bean.productfac.coverage.Benefit_sched;
import layout.bean.productfac.coverage.Benefit_special_amount;
import service.fnc.ConstantValues;
import service.fnc.RteResult;
import utility.productfac.ContantCoverageBenefitPage;
public class BenefitData  extends RteResult
{
	
	/**
	 * TODO เตรียมยกเลิก 
	 * Only Product CL
	 * Type = TPD = BC_01_0006 | D = BC_01_0001 
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public ArrayList<BenefitAccessData> searchBenefitCoverage(String cov_code,String type) throws Exception
	{
		setVal(RTE_PATH+".RteBenefitAccessData", new Object [] {"S",new Object [] {cov_code,type}});
		return (ArrayList<BenefitAccessData>) executeResult().value();		
	}
	
	/**
	 * new Logic
	 * @param bnf_cat_code
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public ArrayList<BenefitAccessData> searchBenefitCoverage(String bnf_cat_code) throws Exception
	{
		setVal(RTE_PATH+".coverage.RteCoveageBenefitAccessData", new Object [] {"VAL1",ConstantValues.COV_CODE,bnf_cat_code});
		return (ArrayList<BenefitAccessData>) executeResult().value();
	}
	
	@SuppressWarnings("unchecked")
	public ArrayList<Benefit_cat> searchBenefitCatRider(String cov_code) throws Exception
	{
		setVal(RTE_PATH+".imp.RteBenefitCatS", new Object [] {"VAL1",cov_code});
		return (ArrayList<Benefit_cat>) executeResult().value();
	}
	

	@SuppressWarnings("unchecked")
	public ArrayList<Benefit> searchCoverageBenefit(String bnf_cat_code) throws Exception
	{
		setVal(RTE_PATH+".coverage.RteSearchCoverageBenefit", new Object [] {"VAL1",ConstantValues.COV_CODE,bnf_cat_code});
		return (ArrayList<Benefit>) executeResult().value();
	}
	
	@SuppressWarnings("unchecked")
	public ArrayList<Benefit> searchBenefitิByBnfCatCode(String bnf_cat_code) throws Exception
	{
		setVal(RTE_PATH+".benefit.RteSearchBenefit", new Object [] {"VAL1",bnf_cat_code});
		return (ArrayList<Benefit>) executeResult().value();
	}
	@SuppressWarnings("unchecked") 
	public ArrayList<Benefit> searchBenefitByBnfCatCode(String bnf_cat_code) throws Exception
	{
		setVal(RTE_PATH+".imp."+"RteBenefitS", new Object [] {"VAL1",bnf_cat_code});
		return (ArrayList<Benefit>) executeResult().value();
	}
	
	
	
	/**
	 * ค้นหาข้อมูล page ของ benefit ว่ามีกี่ tab
	 */
	@SuppressWarnings("unchecked")
	public ArrayList<CoverageBenefitPageAccessData> searchCoverageBenefitPage() throws Exception
	{
		setVal(RTE_PATH+".appconfig.RteSearchCoverageBenefitPage",new Object [] {"VAL1",ConstantValues.COV_CODE});
		return (ArrayList<CoverageBenefitPageAccessData>) executeResult().value();
	}
	
	@SuppressWarnings("unchecked")
	public  ArrayList<BenefitAccessData>  insertBenefitItemRider(String master_Id,String cov_code,ArrayList<Object> listDataSave) throws Exception 
	{
		setVal(RTE_PATH+".imp."+"RteBenefitItemRider", new Object [] {master_Id,cov_code,listDataSave});
		return (ArrayList<BenefitAccessData>) executeResult().value();
	}
	
	public int insertBenefitItem(ArrayList<Benefit_item> lstBenefit_item) throws Exception 
	{
		setVal(RTE_PATH+".imp."+"RteBenefitItemBasePlan", new Object [] {lstBenefit_item});
		return (int) executeResult().value();
	}

	public void insertBenefitItemDeathOL(ArrayList<Benefit_item> listBenefit) throws Exception 
	{
		String bnf_code = new ContantCoverageBenefitPage(1).getPageBnfCatCode();
		setVal(RTE_PATH+".coverage."+"RteCovergeBenefitItemBasePlanOL", new Object [] {"VAL1",ConstantValues.COV_CODE,bnf_code,listBenefit});
		saveDataResultStatus();
	}
	
	public void insertBenefitItemOLEAP(int main_bnf_item_id,ArrayList<Benefit_item> listBenefit) throws Exception 
	{
		setVal(RTE_PATH+".coverage."+"RteCovergeBenefitItemBasePlanOL",new Object [] {"VAL2",ConstantValues.COV_CODE,main_bnf_item_id,listBenefit});
		saveDataResultStatus();
	}
	
	
	protected void insertBenefitItemSeriousIllness(int main_bnf_item_id,ArrayList<Benefit_item> listBenefit) throws Exception 
	{
		setVal(RTE_PATH+".coverage."+"RteBenefitItemRiderOL", new Object [] {"VAL1",ConstantValues.COV_CODE,main_bnf_item_id,listBenefit});
		saveDataResultStatus();
	}
	
	public void insertBenefitSched(int bnf_item_id,ArrayList<Benefit_sched> listBenefit_sched) throws Exception 
	{
		setVal(RTE_PATH+".coverage."+"RteBenefitSched", new Object [] {bnf_item_id,listBenefit_sched});
		saveDataResult();
	}
	
	/*
	 * Prepare Change
	 */
	public void insertBenefitSched(ArrayList<Benefit_sched> lstBenefit_sched) throws Exception 
	{
		setVal(RTE_PATH+".imp."+"RteBenefitSched",new Object [] {lstBenefit_sched});
		saveDataResult();
	}
	
	/*
	 * Prepare Change
	 */
	public void insertBenefitAmount(ArrayList<Benefit_amount> lstBenefit_amount) throws Exception 
	{
		setVal(RTE_PATH+".imp."+"RteBenefitAmount", new Object [] {lstBenefit_amount});
		saveDataResult();
	}

	public void insertBenefitLimit(ArrayList<Benefit_limit> insertBenefitLimit) throws Exception 
	{
		setVal(RTE_PATH+".imp."+"RteBenefitLimit", new Object [] {insertBenefitLimit});
		saveDataResult();
	}

	public void insertBenefitSpecailAmount(ArrayList<Benefit_special_amount> listBenefit_special_amount)   throws Exception 
	{
		setVal(RTE_PATH+".imp."+"RteBenefitSpecialAmount", new Object [] {listBenefit_special_amount});
		saveDataResult();
	}
	
	/**
	 * ผลประโยชน์และความคุ้มครอง
	 * @param cov_code
	 * @param str_bnf_code
	 * @param user_code
	 * @return Object []  : [0] BenefitMasterAccessData Master of tap
	 *                      [1] ArrayList<BenefitAccessDats if empty is new Data 
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public ArrayList<Object []> insertBenefitRiderMaster(String cov_code,String [] str_bnf_code,String  user_code) throws Exception
	{
		setVal(RTE_PATH+"."+"RteBenefitRider", new Object [] {cov_code,str_bnf_code,user_code});
		return (ArrayList<Object[]>) executeResult().value();
	}
	
	@SuppressWarnings("unchecked")
	public ArrayList<Object []> searchBenefitAccessData(String cov_code) throws Exception
	{
		setVal(RTE_PATH+".benefit."+"RteSearchBenefitAccessData", new Object [] {"VAL1",cov_code});
		return (ArrayList<Object[]>) executeResult().value();
	}
	
	public void insertCoverageBenefitPage(String [] bnf_cat_code) throws Exception
	{
		setVal(RTE_PATH+".appconfig."+"RteCoverageBenefitPage",new Object [] {"VAL1",ConstantValues.COV_CODE,bnf_cat_code,ConstantValues.USER_CODE});
		saveDataResultStatus();
	}
	
	public void clondBenefit(String old_cov_code,String new_cov_code) throws Exception 
	{
		setVal(RTE_PATH+".coverage."+"RteBenefitClone",new Object [] {old_cov_code,new_cov_code,ConstantValues.USER_CODE});
		saveDataResult();
	}
	
	
	/** Pun add 17-12-2019 (for Clone)
	 * searchByCovCode Table appconfig.coverage_benefit_page
	 * @throws Exception 
	 */
	@SuppressWarnings("unchecked")
	public ArrayList<Coverage_benefit_page> searchBenefitPage(String cov_code) throws Exception{
		setVal(RTE_PATH+".appconfig."+"RteSearchCoverageBenefitPage", new Object [] {"VAL2", cov_code});
		return (ArrayList<Coverage_benefit_page>)executeResult().value();
	}
	
	public void insertCoverageBenefitPage(ArrayList<Coverage_benefit_page> lstcoverage_benefit_pages) throws Exception {
		setVal(RTE_PATH+".appconfig."+"RteCoverageBenefitPage",new Object [] {"VAL2", lstcoverage_benefit_pages});
		saveDataResultStatus();
	}
}
