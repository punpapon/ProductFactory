package service.product.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.product.Unw_sum_range;
import service.fnc.ConstantValues;
import service.fnc.RteResult;

public class UnwSumRangeControlData extends RteResult
{
	@SuppressWarnings("unchecked")
	public ArrayList<Unw_sum_range> searchProductUnwHistRule(String prd_code) throws Exception
	{	
		setVal(RTE_PATH+".product."+"RteSearchUnwSumRange",new Object [] {"VAL1",ConstantValues.PRD_CODE});
		return (ArrayList<Unw_sum_range>)executeResult().value();
	}
	
	public void insertProductUnwSumRange(ArrayList<Unw_sum_range> listUnw_Sum_Range) throws Exception 
	{
		setVal(RTE_PATH+".product."+"RteUnwSumRange", new Object [] {"VAL1",ConstantValues.PRD_CODE,listUnw_Sum_Range});
		saveDataResult();
	}
}
