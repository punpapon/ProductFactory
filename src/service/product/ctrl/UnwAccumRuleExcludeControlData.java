package service.product.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.beanset.ProductExcludedAccessData;
import layout.bean.productfac.product.Unw_accum_rule_exclude;
import service.fnc.ConstantValues;
import service.fnc.RteResult;

public class UnwAccumRuleExcludeControlData extends RteResult
{
	@SuppressWarnings("unchecked")
	public ArrayList<Unw_accum_rule_exclude> searchUnwAccumRuleExclude(String prd_code) throws Exception
	{
		setVal(RTE_PATH + ".product." + "RteSearchUnwAccumRuleExclude", new Object[] { "VAL1", prd_code });
		return (ArrayList<Unw_accum_rule_exclude>) executeResult().value();
	}

	@SuppressWarnings("unchecked")
	public ArrayList<ProductExcludedAccessData> searchProductExclude(String prd_code) throws Exception
	{
		setVal(RTE_PATH + ".product." + "RteSearchUnwAccumRuleExclude", new Object[] { "VAL2", prd_code });
		return (ArrayList<ProductExcludedAccessData>) executeResult().value();
	}

	public void insertUnwAccumRuleExclude(ArrayList<Unw_accum_rule_exclude> listUnwAccumRuleExclude, String accum_type)
			throws Exception
	{
		setVal(RTE_PATH + ".product." + "RteUnwAccumRuleExclude",new Object[] { "VAL1", ConstantValues.PRD_CODE, accum_type, listUnwAccumRuleExclude });
		saveDataResult();
	}

	// Benz 04-10-2019 save BP
	public void insertUnwAccumRuleExcludePB(ArrayList<Unw_accum_rule_exclude> listUnwAccumRuleExclude) throws Exception
	{
		setVal(RTE_PATH + ".product." + "RteUnwAccumRuleExclude",new Object[] { "VAL2", ConstantValues.PRD_CODE, listUnwAccumRuleExclude });
		saveDataResult();
	}
}
