package service.product.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.product.Flp_fee;
import service.fnc.ConstantValues;
import service.fnc.RteResult;

public class FlpFeeControlData extends RteResult
{
	@SuppressWarnings("unchecked")
	public ArrayList<Flp_fee> searchProductFlpFee(String prd_code) throws Exception
	{
		setVal(RTE_PATH + ".imp." + "RteProductFlpFeeS", new Object[] { "VAL1", prd_code });
		return (ArrayList<Flp_fee>) executeResult().value();
	}

	public void insertProductFlpFee(ArrayList<Flp_fee> listFlpFee) throws Exception
	{
		setVal(RTE_PATH + ".imp." + "RteProductFlpFee", new Object[] { ConstantValues.PRD_CODE, listFlpFee });
		saveDataResult();
	}
}
