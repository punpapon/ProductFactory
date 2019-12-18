package service.clone;

import service.ctrl.BenefitData;

public class BenefitClone extends BenefitData
{
	public void cloneBenefitItem(String old_cov_code,String new_cov_code) throws Exception
	{
		clondBenefit(old_cov_code, new_cov_code);
	}

}
