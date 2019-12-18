package service.product.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.product.Unw_accum_rule;
import service.fnc.ConstantValues;
import service.fnc.RteResult;

public class UnwAccumRuleControlData extends RteResult
{
	@SuppressWarnings("unchecked")
	public ArrayList<Unw_accum_rule> searchProductUnwAccumRule(String prd_code) throws Exception
	{
		setVal(RTE_PATH+".imp."+"RteProductUnwAccumRuleS",new Object [] {"VAL1",prd_code});
		return (ArrayList<Unw_accum_rule>)executeResult().value();
	}
	
	public void insertProductUnwAccumRule(ArrayList<Unw_accum_rule> listUnwAccumRule) throws Exception 
	{
		setVal(RTE_PATH+".imp."+"RteProductUnwAccumRule", new Object [] {ConstantValues.PRD_CODE,listUnwAccumRule});
		saveDataResult();
	}
}
