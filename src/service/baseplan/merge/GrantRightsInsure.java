package service.baseplan.merge;

import java.util.ArrayList;

import layout.bean.productfac.coverage.Nonforf_provision;
import service.baseplan.ctrl.NonforfProvisionData;

public class GrantRightsInsure 
{
	/**
	 * 
	 * @param cov_code
	 * @return Nonforf_provision
	 * @throws Exception
	 */
	public Nonforf_provision searchNonforfProvisions(String cov_code) throws Exception
	{
		NonforfProvisionData nonforfProvisionData = new NonforfProvisionData();
		ArrayList<Nonforf_provision> list =  nonforfProvisionData.searchCoverageNonforfprovision(cov_code);
		return list.isEmpty() ? null : list.get(0);
	}
}
