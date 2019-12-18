package service.product.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.product.Unw_pol_issue_unit;
import service.fnc.ConstantValues;
import service.fnc.RteResult;

public class UnwPolIssueUnitControlData extends RteResult
{
	@SuppressWarnings("unchecked")
	public ArrayList<Unw_pol_issue_unit> searchProductUnwPolIssueUnit(String prd_code) throws Exception
	{
		setVal(RTE_PATH + ".imp." + "RteProductUnwPolIssueUnitS", new Object[] { "VAL1", prd_code });
		return (ArrayList<Unw_pol_issue_unit>) executeResult().value();
	}

	public void insertProductUnwPolIssueUnit(ArrayList<Unw_pol_issue_unit> listUnwUnwPolIssueUnit) throws Exception
	{
		setVal(RTE_PATH + ".imp." + "RteProductUnwPolIssueUnit",new Object[] { ConstantValues.PRD_CODE, listUnwUnwPolIssueUnit });
		saveDataResult();
	}
}
