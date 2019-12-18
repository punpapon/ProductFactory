package service.baseplan;

import java.util.ArrayList;

import layout.bean.productfac.coverage.Benefit_amount;
import layout.bean.productfac.coverage.Benefit_item;
import layout.bean.productfac.coverage.Benefit_sched;
import layout.bean.productfac.coverage.Benefit_special_amount;
import service.ctrl.BenefitData;
import utility.productfac.ContantCoverageBenefitPage;

public class BasePlanBenefitsOL
{
	/**
	 * บันทึก Tab ผลประโยชน์ที่เลือก และ ลบข้อมูลกรณี check box ออก
	 * bnf_cat_code : เลข  tap ที่เลือก มี 1-6 check box ไหนไม่เลือก ไม่ต้องส่งมา   
	 * @param bnf_cat_code 
	 * @throws Exception
	 */
	public void doCoverageBenefitPage(String [] bnf_cat_code) throws Exception 
	{
		new BenefitData().insertCoverageBenefitPage(setBnfCatCode(bnf_cat_code));
	}
	
	private String[] setBnfCatCode(String [] bnf_cat_code)
	{
		String [] str = new String[bnf_cat_code.length];
		for (int i = 0; i < bnf_cat_code.length; i++) {
			str[i] = new ContantCoverageBenefitPage(Integer.parseInt(bnf_cat_code[i])).getPageBnfCatCode();
	}
		return str;
	}

	/**
	 * บันทึกข้อมูล coverage.benefit_item
	 * 
	 * @param lstBenefit_item
	 * @return bnf_item_id (int)
	 * @throws Exception
	 */
	public void doฺBenefitItem(ArrayList<Benefit_item> listBenefit_item) throws Exception
	{
		new BenefitData().insertBenefitItemDeathOL(listBenefit_item);
	}

	/**
	 * บันทึกข้อมูล coverage.benefit_sched
	 * 
	 * @param lstBenefit_sched
	 * @throws Exception
	 */
	public void doฺBenefitSched(int bnf_item_id,ArrayList<Benefit_sched> listBenefit_sched) throws Exception
	{
		new BenefitData().insertBenefitSched(bnf_item_id,listBenefit_sched);
	}

	/**
	 * บันทึกข้อมูล coverage.benefit_amount
	 * 
	 * @param lstBenefit_amount
	 * @throws Exception
	 */
	public void doBenefitAmount(ArrayList<Benefit_amount> lstBenefit_amount) throws Exception
	{
		new BenefitData().insertBenefitAmount(lstBenefit_amount);
	}
	
	/**
	 * บันทึกข้อมูล coverage.benefit_specail_amount
	 * @param listBenefit_special_amount
	 * @throws Exception
	 */
	public void doBenefitSpecailAmount(ArrayList<Benefit_special_amount> listBenefit_special_amount) throws Exception
	{
		new BenefitData().insertBenefitSpecailAmount(listBenefit_special_amount);
	}
	
	/**
	 * บันทึก รายกานข้อยกเว้นจ่ายเงินทดแทน
	 * @param benefit_item
	 * main_bnf_item_id : bnf_item_id of Death 
	 * @param listBenefit
	 * @throws Exception
	 */
	public void doExceptionAccidentPay(int main_bnf_item_id,ArrayList<Benefit_item> listBenefit) throws Exception
	{
		new BenefitData().insertBenefitItemOLEAP(main_bnf_item_id,listBenefit);
	}
}
