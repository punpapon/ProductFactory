package service.product.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.product.Product;
import service.fnc.ConstantValues;
import service.fnc.RtePath;
import service.fnc.RteResult;

public class ListProductBaseOLControlData extends RteResult
{
	@SuppressWarnings("unchecked")
	public ArrayList<Product> searchListRider() throws Exception
	{
		setVal(RTE_PATH+"."+"RteSearchListProductBaseOL", new Object [] {"VAL1",ConstantValues.PRD_CODE});
		return (ArrayList<Product>)executeResult().value();
	}
}
