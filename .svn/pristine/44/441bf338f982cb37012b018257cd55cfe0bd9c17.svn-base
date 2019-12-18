package service.product.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.product.Unw_rider_limit;
import service.fnc.ConstantValues;
import service.fnc.RteResult;

public class UnwRiderLimitControlData extends RteResult
{
	@SuppressWarnings("unchecked")
	public ArrayList<Unw_rider_limit> searchProductUnwRiderLimit(String prd_code) throws Exception
	{
		setVal(RTE_PATH + ".imp." + "RteProductUnwRiderLimitS", new Object[] { "VAL1", prd_code });
		return (ArrayList<Unw_rider_limit>) executeResult().value();
	}

	public void insertProductUnwRiderLimit(ArrayList<Unw_rider_limit> listUnwRiderLimit) throws Exception
	{
		setVal(RTE_PATH + ".imp." + "RteProductUnwRiderLimit",new Object[] { ConstantValues.PRD_CODE, listUnwRiderLimit });
		saveDataResult();
	}
}
