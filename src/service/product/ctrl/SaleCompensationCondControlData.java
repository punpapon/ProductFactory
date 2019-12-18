package service.product.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.product.Sale_compensation_cond;
import service.fnc.ConstantValues;
import service.fnc.RteResult;

public class SaleCompensationCondControlData extends RteResult
{
	@SuppressWarnings("unchecked")
	public ArrayList<Sale_compensation_cond> searchByPrdCode() throws Exception
	{
		setVal(RTE_PATH + ".product." + "RteSearchSaleCompensationCond",new Object[] { "VAL1", ConstantValues.PRD_CODE });
		return (ArrayList<Sale_compensation_cond>) executeResult().value();
	}

	public void insertSaleCompensationCond(ArrayList<Sale_compensation_cond> listData) throws Exception
	{
		setVal(RTE_PATH + ".product." + "RteSaleCompensationCond",new Object[] { "VAL1", ConstantValues.PRD_CODE, listData });
		saveDataResultStatus();
	}
}
