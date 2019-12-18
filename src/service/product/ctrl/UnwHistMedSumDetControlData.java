package service.product.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.product.Unw_hist_med_sum_det;
import service.fnc.ConstantValues;
import service.fnc.RteResult;

public class UnwHistMedSumDetControlData extends RteResult
{

	public ArrayList<Unw_hist_med_sum_det> searchProductUnwHistMedSumDet(String prd_code) throws Exception
	{
		// TODO
		return null;
	}

	public void insertProductUnwHistMedSumDet(ArrayList<Unw_hist_med_sum_det> listUnwHistMedSumDet) throws Exception
	{
		setVal(RTE_PATH + ".imp." + "RteProductUnwHistMedSumDet",new Object[] { ConstantValues.PRD_CODE, listUnwHistMedSumDet });
		saveDataResult();
	}
}
