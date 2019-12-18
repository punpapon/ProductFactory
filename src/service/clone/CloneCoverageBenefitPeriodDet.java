package service.clone;

import java.util.ArrayList;

import layout.bean.productfac.coverage.Benefit_period_det;
import service.baseplan.ctrl.BenefitPeriodDetData;
import service.fnc.ConstantValues;
import service.fnc.PDFFnc;

public class CloneCoverageBenefitPeriodDet extends BenefitPeriodDetData{

	public void cloneCoverageBenefitPeriodDet(String cov_code_old,String cov_code_new) {
		try {
			ArrayList<Benefit_period_det> lstBenefitPeriodDet = searchCoverageBenefitPeriodDet(cov_code_old);
			ArrayList<Benefit_period_det> lstResultBenefitPeriodDet = new ArrayList<>();
			for (Benefit_period_det benefit_period_det : lstBenefitPeriodDet) {
				benefit_period_det.setCov_code(cov_code_new);
				benefit_period_det.setUser_code(ConstantValues.USER_CODE);
				benefit_period_det.setUpdate_time(PDFFnc.currentTimeStamp());
				lstResultBenefitPeriodDet.add(benefit_period_det);
			}
			if(lstResultBenefitPeriodDet.size() > 0) {
				insertBenefitPeriodDet(lstResultBenefitPeriodDet);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
