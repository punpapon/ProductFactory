package service.clone;

import java.util.ArrayList;

import layout.bean.productfac.coverage.Prem_assump_rate;
import service.center.PremAssumpRateData;
import service.fnc.ConstantValues;
import service.fnc.PDFFnc;

public class CloneCoveragePremAssumpRate extends PremAssumpRateData{

	public void cloneCoveragePremAssumpRate(String cov_code_old,String cov_code_new) {
		try {
			ArrayList<Prem_assump_rate> lstPremAssumpRate = searchCoveragePremAssumpRate(cov_code_old);
			ArrayList<Prem_assump_rate> lstResultPremAssumpRate = new ArrayList<>();
			for (Prem_assump_rate prem_assump_rate : lstPremAssumpRate) {
				prem_assump_rate.setCov_code(cov_code_new);
				prem_assump_rate.setUser_code(ConstantValues.USER_CODE);
				prem_assump_rate.setUpdate_time(PDFFnc.currentTimeStamp());
				lstResultPremAssumpRate.add(prem_assump_rate);
			}
			if(lstResultPremAssumpRate.size() > 0) {
				insertremAssumpRate(lstResultPremAssumpRate);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
