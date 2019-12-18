package service.product.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.beanset.ProductRiderOLListAccessData;
import service.fnc.RteResult;

public class ListProductRiderOLControlData extends RteResult
{
	
	@SuppressWarnings("unchecked")
	public ArrayList<ProductRiderOLListAccessData> searchListProductRiderOL(ArrayList<String[]> listVal) throws Exception
	{
		setVal(RTE_PATH+"."+"RteSearchListProductRiderOL", new Object [] {"VAL1",listVal});
		return (ArrayList<ProductRiderOLListAccessData>)executeResult().value();
	}
	
}
