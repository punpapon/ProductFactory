package service.product.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.product.Sale_compensation;
import service.fnc.ConstantValues;
import service.fnc.RteResult;

public class SaleCompensationControlData extends RteResult
{
	public void insertSalesCompensatio(ArrayList<Sale_compensation> listSaleCompensation) throws Exception
	{
		setVal(RTE_PATH + ".imp." + "RteSalesCompensation",	new Object[] { ConstantValues.PRD_CODE, listSaleCompensation });
		saveDataResult();
	}

	@SuppressWarnings("unchecked")
	public ArrayList<Sale_compensation> searchProductChange(String prd_code) throws Exception
	{
		setVal(RTE_PATH + ".imp." + "RteProductSaleCompensationS", new Object[] { "VAL1", prd_code });
		return (ArrayList<Sale_compensation>) executeResult().value();
	}
}
