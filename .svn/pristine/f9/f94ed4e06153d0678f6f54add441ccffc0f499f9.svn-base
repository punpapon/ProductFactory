package service.product.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.product.Unw_cocredit_limit;
import service.fnc.ConstantValues;
import service.fnc.RteResult;

public class UnwCocreditLimitControlData extends RteResult
{	
	@SuppressWarnings("unchecked")
	public ArrayList<Unw_cocredit_limit> searchProductUnwCocreditLimit(String prd_code) throws Exception
	{
		setVal(RTE_PATH+".imp."+"RteProductUnwCocreditLimitS",new Object [] {"VAL1",prd_code});
		return (ArrayList<Unw_cocredit_limit>) executeResult().value();
	}
	
	public void insertProductUnwCocreditLimit(ArrayList<Unw_cocredit_limit> listUnwCocreditLimit) throws Exception 
	{
		setVal(RTE_PATH+".imp."+"RteProductUnwCocreditLimit",new Object [] {ConstantValues.PRD_CODE,listUnwCocreditLimit});
		saveDataResult();
	}
}
