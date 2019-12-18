package service.rider;

import java.util.ArrayList;

import layout.bean.productfac.coverage.Benefit_item;
import layout.bean.productfac.coverage.Benefit_sched;
import service.ctrl.BenefitData;

public class RiderBenefitOL extends BenefitData
{	
	/**
	 * บันทึก รายกานข้อยกเว้นจ่ายเงินทดแทนกรณีโรคร้ายแรง
	 * ฺBC_OL_DDR_01
	 */
	public void doSeriousIllness(int main_bnf_item_id,ArrayList<Benefit_item> listBenefit) throws Exception
	{
		insertBenefitItemSeriousIllness(main_bnf_item_id,listBenefit);
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
}