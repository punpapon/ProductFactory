package service.clone;

import java.util.ArrayList;

import layout.bean.productfac.coverage.Benefit_period;
import service.baseplan.ctrl.BenefitPeriodData;
import service.fnc.ConstantValues;
import service.fnc.PDFFnc;

public class CloneCoverageBenefitPeriod extends BenefitPeriodData{

	public void cloneCoverageBenefitPeriod(String cov_code_old,String cov_code_new) {
		try {
			ArrayList<Benefit_period> lstBenefitPeriod = searchCoverageBenefitPeriod(cov_code_old);
			ArrayList<Benefit_period> listResultBenefitPeriod = new ArrayList<>();
			for (Benefit_period benefit_period : lstBenefitPeriod) {
				benefit_period.setCov_code(cov_code_new);
				benefit_period.setUser_code(ConstantValues.USER_CODE);
				benefit_period.setUpdate_time(PDFFnc.currentTimeStamp());
				listResultBenefitPeriod.add(benefit_period);
			}
			if(listResultBenefitPeriod.size() > 0) {
				insertBenefitPeriod(listResultBenefitPeriod);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
