package service.clone;

import java.util.ArrayList;

import layout.bean.productfac.coverage.Premium_period;
import service.baseplan.ctrl.PremiumPeriodData;
import service.fnc.ConstantValues;
import service.fnc.PDFFnc;

public class CloneCoveragePremiumPeriod extends PremiumPeriodData{

	public void cloneCoveragePremiumPeriod(String cov_code_old,String cov_code_new) {
		try {
			ArrayList<Premium_period> lstPremiumPeriod = searchCoveragePremiumPeriod(cov_code_old);
			ArrayList<Premium_period> lstResultPremiumPeriod = new ArrayList<>();
			for (Premium_period premium_period : lstPremiumPeriod) {
				premium_period.setCov_code(cov_code_new);
				premium_period.setUser_code(ConstantValues.USER_CODE);
				premium_period.setUpdate_time(PDFFnc.currentTimeStamp());
				lstResultPremiumPeriod.add(premium_period);
			}
			if(lstResultPremiumPeriod.size() > 0) {
				insertPremiumPeriod(lstResultPremiumPeriod);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
