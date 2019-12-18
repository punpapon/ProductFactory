package service.product.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.beanset.RateLayoutPremAccessData;
import service.fnc.RteResult;

public class ProductRateLayoutControlData extends RteResult
{
	@SuppressWarnings("unchecked")
	public ArrayList<RateLayoutPremAccessData> searchProductRateLayoutPremAccessData(String prd_code,String [] rate_cat_id) throws Exception
	{
		setVal(RTE_PATH+"."+"RteRateLayoutProductAccessData", new Object [] {"VAL1", prd_code,rate_cat_id});
		return (ArrayList<RateLayoutPremAccessData>) executeResult().value();
	}
}
