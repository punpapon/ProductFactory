package service.product.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.product.Rate_layout;
import service.fnc.ConstantValues;
import service.fnc.RteResult;

public class RateLayoutControlData extends RteResult
{
	@SuppressWarnings("unchecked")
	public ArrayList<Rate_layout> searchRateLayout(String cov_code) throws Exception
	{
		setVal(RTE_PATH + ".imp." + "RteProductRateLayoutS", new Object[] { "KEY", new String[] { cov_code } });
		return (ArrayList<Rate_layout>) executeResult().value();
	}

	public void insertRateLayout(String[] rate_cat_id, ArrayList<Rate_layout> listRateLayout) throws Exception
	{
		setVal(RTE_PATH + ".imp." + "RteRateLayoutProduct",	new Object[] { ConstantValues.PRD_CODE, rate_cat_id, listRateLayout });
		saveDataResult();
	}
}
