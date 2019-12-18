package service.baseplan.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.coverage.Nonforf_provision;
import service.fnc.ConstantValues;
import service.fnc.RteResult;

public class NonforfProvisionData  extends RteResult
{
	public ArrayList<Nonforf_provision> searchCoverageNonforfprovision(String cov_code) throws Exception
	{
		setVal(RTE_PATH + ".coverage." + "RteSearchNonforfProvision", new Object[] { "VAL1", cov_code});
		return (ArrayList<Nonforf_provision>)executeResult().value();
	}

	public void insertNonforfprovision(ArrayList<Nonforf_provision> listNonforfProvision) throws Exception
	{
		setVal(RTE_PATH + ".coverage." + "RteNonforfProvision", new Object[] { ConstantValues.COV_CODE, listNonforfProvision });
		saveDataResult();
	}
}
