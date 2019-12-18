package service.product.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.beanset.UnwHistRuleAccessData;
import layout.bean.productfac.product.Unw_hist_rule;
import service.fnc.ConstantValues;
import service.fnc.RteResult;

public class UnwHistRuleControlData extends RteResult
{
	@SuppressWarnings("unchecked")
	public ArrayList<UnwHistRuleAccessData> searchProductUnwHistRule(String prd_code) throws Exception
	{
		setVal(RTE_PATH + "." + "RteProductUnwHistRuleAccesData", new Object[] { "VAL1", prd_code });
		return (ArrayList<UnwHistRuleAccessData>) executeResult().value();
	}

	public void insertProductUnwHistRule(ArrayList<Unw_hist_rule> listUnwHistRule) throws Exception
	{
		setVal(RTE_PATH + ".imp." + "RteProductUnwHistRule", new Object[] { ConstantValues.PRD_CODE, listUnwHistRule });
		saveDataResult();
	}
}
