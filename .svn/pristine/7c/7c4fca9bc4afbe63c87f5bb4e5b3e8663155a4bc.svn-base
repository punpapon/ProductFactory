package service.product.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.product.Product_change;
import service.fnc.ConstantValues;
import service.fnc.RteResult;

public class ProductChangeControlData extends RteResult
{
	public void insertProductChange(ArrayList<Product_change> listProductChange) throws Exception
	{
		setVal(RTE_PATH+".imp."+"RteProductChange", new Object [] {ConstantValues.PRD_CODE,listProductChange});
		saveDataResultStatus();
	}
	
	@SuppressWarnings("unchecked")
	public ArrayList<Product_change> searchProductChange(String prd_code) throws Exception
	{
		setVal(RTE_PATH+".imp."+"RteProductChangeS", new Object [] {"VAL1",prd_code});
		return (ArrayList<Product_change>)searchValuesResultData().value();
	}
}
