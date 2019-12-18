package service.clone;

import java.util.ArrayList;

import layout.bean.productfac.coverage.Age_calc_meth;
import service.baseplan.ctrl.AgeCalcMethData;
import service.fnc.ConstantValues;
import service.fnc.PDFFnc;

public class CloneCoverageAgeCalcMeth extends AgeCalcMethData{

	public void cloneCoverageAgeCalcMeth(String cov_code_old,String cov_code_new) {
		try {
			ArrayList<Age_calc_meth> lstAgeCalMeth = searchCoverageAgeCalMeth(cov_code_old);
			ArrayList<Age_calc_meth> lstResultAgeCalMeth = new ArrayList<>();
			for (Age_calc_meth age_calc_meth : lstAgeCalMeth) {
				age_calc_meth.setCov_code(cov_code_new);
				age_calc_meth.setUser_code(ConstantValues.USER_CODE);
				age_calc_meth.setUpdate_time(PDFFnc.currentTimeStamp());
				lstResultAgeCalMeth.add(age_calc_meth);
			}
			if(lstResultAgeCalMeth.size() > 0) {
				insertAgeCalMeth(lstResultAgeCalMeth);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
