package service.baseplan;

import java.util.ArrayList;

import layout.bean.productfac.coverage.Benefit_amount;
import layout.bean.productfac.coverage.Benefit_item;
import layout.bean.productfac.coverage.Benefit_sched;
import service.ctrl.BenefitData;

public class BasePlanBenefits {
	/**
	 * บันทึกข้อมูล coverage.benefit_item
	 * @param lstBenefit_item
	 * @return  bnf_item_id (int)
	 * @throws Exception
	 */
	public int doฺBenefitItem(ArrayList<Benefit_item> lstBenefit_item) throws Exception 
	{
		return new BenefitData().insertBenefitItem(lstBenefit_item);
	}

	/**
     * บันทึกข้อมูล coverage.benefit_sched
     * @param lstBenefit_sched
     * @throws Exception
     */
	public void doฺBenefitSched(ArrayList<Benefit_sched> lstBenefit_sched) throws Exception 
	{
		new BenefitData().insertBenefitSched(lstBenefit_sched);
	}
	/**
	 * บันทึกข้อมูล coverage.benefit_amount
	 * @param lstBenefit_amount
	 * @throws Exception
	 */
	public void doBenefitAmount(ArrayList<Benefit_amount> lstBenefit_amount) throws Exception 
	{
		new BenefitData().insertBenefitAmount(lstBenefit_amount);
	}
}
