package service.clone;

import java.util.ArrayList;

import layout.bean.productfac.coverage.Nonforf_provision;
import service.baseplan.ctrl.NonforfProvisionData;
import service.fnc.ConstantValues;
import service.fnc.PDFFnc;


public class CloneCoverageNonforfProvision extends NonforfProvisionData{

	public void cloneCoverageNonforfProvision(String cov_code_old,String cov_code_new) {
		try {
			ArrayList<Nonforf_provision> lstNonforfProvision = searchCoverageNonforfprovision(cov_code_old);
			System.out.println("SAFAFASFAF : "+lstNonforfProvision.size());
			ArrayList<Nonforf_provision> lstResultlstNonforfProvision = new ArrayList<>();
			for (Nonforf_provision nonforf_provision : lstNonforfProvision) {
				nonforf_provision.setCov_code(cov_code_new);
				nonforf_provision.setUser_code(ConstantValues.USER_CODE);
				nonforf_provision.setUpdate_time(PDFFnc.currentTimeStamp());
				lstResultlstNonforfProvision.add(nonforf_provision);
			}
			if(lstResultlstNonforfProvision.size() > 0) {
				insertNonforfprovision(lstResultlstNonforfProvision);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
