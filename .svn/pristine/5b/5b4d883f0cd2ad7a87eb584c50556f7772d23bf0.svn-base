package service.rider;

import java.util.ArrayList;

import layout.bean.productfac.beanset.BenefitAccessData;
import layout.bean.productfac.benefit.Benefit;
import layout.bean.productfac.benefit.Benefit_cat;
import layout.bean.productfac.coverage.Benefit_amount;
import layout.bean.productfac.coverage.Benefit_item;
import layout.bean.productfac.coverage.Benefit_limit;
import layout.bean.productfac.coverage.Benefit_sched;
import layout.bean.productfac.coverage.Benefit_special_amount;
import service.ctrl.BenefitData;

public class RiderBenefits  extends BenefitData
{	
	private ArrayList<BenefitAccessData> listBenefitAccessData;
	/**
	 * ค้นหาข้อมูล benefit.befit ด้วย bnf_cat_code
	 * @param bnf_cat_code
	 * @return
	 * @throws Exception
	 */
	public ArrayList<Benefit> searchBenefitBy_BnfCatCode(String bnf_cat_code) throws Exception
	{
		return super.searchBenefitByBnfCatCode(bnf_cat_code);
	}
	
	public ArrayList<Benefit_cat> searchBenefitByCovCode(String cov_code) throws Exception
	{
		return searchBenefitCatRider(cov_code);
	}
	
    /**
     * Save All Relation Data 
     * @param listObject
     * @throws Exception
     */
	public void doBenefitRiderData(String master_Id,String cov_code, ArrayList<Object>  listObject) throws Exception
	{
		ArrayList<BenefitAccessData> listReturn = insertBenefitItemRider(master_Id,cov_code,listObject);
		setBenefitRiderData(listReturn);
		System.out.println("doBenefitRiderData >>>  "+listReturn.size());
	}
	
	private void setBenefitRiderData(ArrayList<BenefitAccessData> listReturn) 
	{
		this.listBenefitAccessData = listReturn;
	}

	/**
	 * @return the listBenefitAccessData
	 */
	public ArrayList<BenefitAccessData> getListBenefitAccessData() 
	{
		return listBenefitAccessData;
	}

	/**
	 * บันทึกข้อมูล coverage.benefit_item
	 * @param lstBenefit_item
	 * @return  bnf_item_id (int)
	 * @throws Exception
	 */
	public ArrayList<Object []> doฺBenefitItemMasterRider(String cov_code,String [] str_bnf_code,String  user_code) throws Exception 
	{
		return insertBenefitRiderMaster(cov_code,str_bnf_code,user_code);
	}
	
	public ArrayList<Object []> searchBenefitAccessData(String cov_code,String [] str_bnf_code,String  user_code) throws Exception 
	{
		return super.searchBenefitAccessData(cov_code);
	}
	
	public int doฺBenefitItem(ArrayList<Benefit_item> lstBenefit_item) throws Exception 
	{
		return insertBenefitItem(lstBenefit_item);
	}
	
    /**
     * บันทึกข้อมูล coverage.benefit_sched
     * @param lstBenefit_sched
     * @throws Exception
     */
	public void doฺBenefitSched(ArrayList<Benefit_sched> lstBenefit_sched) throws Exception 
	{
		insertBenefitSched(lstBenefit_sched);
	}
	/**
	 * บันทึกข้อมูล coverage.benefit_amount
	 * @param lstBenefit_amount
	 * @throws Exception
	 */
	public void doBenefitAmount(ArrayList<Benefit_amount> lstBenefit_amount) throws Exception 
	{
		insertBenefitAmount(lstBenefit_amount);
	}
	/**
	 * บันทึกข้อมูล coverage.benefit_limit
	 * @param listBenefit_limit
	 * @throws Exception
	 */ 
	public void doBenefitLimit(ArrayList<Benefit_limit> listBenefit_limit) throws Exception 
	{
		insertBenefitLimit(listBenefit_limit);
	}
	/**
	 * บันทึกข้อมูล coverage.benefit_special_amount
	 * @param listBenefit_special_amount
	 * @throws Exception
	 */
	public void doBenefitSpecailAmount(ArrayList<Benefit_special_amount> listBenefit_special_amount) throws Exception 
	{
		insertBenefitSpecailAmount(listBenefit_special_amount);
	}
}