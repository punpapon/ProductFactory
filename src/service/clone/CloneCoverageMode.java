package service.clone;

import java.util.ArrayList;

import layout.bean.productfac.coverage.Mode;
import service.baseplan.ctrl.ModeData;
import service.fnc.ConstantValues;
import service.fnc.PDFFnc;


public class CloneCoverageMode extends ModeData{

	public void cloneCoverageMode(String cov_code_old,String cov_code_new) {
		try {
			ArrayList<Mode> lstMode = searchMode(cov_code_old);
			ArrayList<Mode> lstResultMode = new ArrayList<>();
			for (Mode mode : lstMode) {
				mode.setCov_code(cov_code_new);
				mode.setUser_code(ConstantValues.USER_CODE);
				mode.setUpdate_time(PDFFnc.currentTimeStamp());
				lstResultMode.add(mode);
			}
			if(lstResultMode.size() > 0) {
				insertMode(lstResultMode);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
