package service.product.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.product.Unw_hist_exist_prod;
import service.fnc.ConstantValues;
import service.fnc.RteResult;

public class UnwHistExistProdControlData extends RteResult
{
	public ArrayList<Unw_hist_exist_prod> searchProductUnwHistExistProd(String prd_code) throws Exception
	{
		// TODO
		return null;
	}

	public void insertProductUnwHistExistProd(ArrayList<Unw_hist_exist_prod> listUnwHistExistProd) throws Exception
	{
		setVal(RTE_PATH + ".imp." + "RteProductUnwHistExistProd",new Object[] { ConstantValues.PRD_CODE, listUnwHistExistProd });
		saveDataResult();
	}
}
