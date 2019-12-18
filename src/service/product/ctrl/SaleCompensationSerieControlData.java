package service.product.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.product.Sale_compensation_serie;
import service.fnc.ConstantValues;
import service.fnc.RteResult;

public class SaleCompensationSerieControlData extends RteResult
{

	@SuppressWarnings("unchecked")
	public ArrayList<Sale_compensation_serie> searchByPrdCode() throws Exception
	{
		setVal(RTE_PATH + ".product." + "RteSearchSaleCompensationSerie", new Object[] { "VAL1", ConstantValues.PRD_CODE });
		return (ArrayList<Sale_compensation_serie>) searchValuesResultData().value();
	}

	@SuppressWarnings("unchecked")
	public ArrayList<String[]> searchSalesBenefits() throws Exception
	{
		setVal(RTE_PATH + ".product." + "RteSearchSaleCompensationSerie", new Object[] { "VAL2", ConstantValues.PRD_CODE });
		return (ArrayList<String[]>) searchValuesResultData().value();
	}

	public void insertSaleCompensationSerie(ArrayList<Sale_compensation_serie> listData) throws Exception
	{
		setVal(RTE_PATH + ".product." + "RteSaleCompensationSerie",new Object[] { "VAL1", ConstantValues.PRD_CODE, listData });
		saveDataResultStatus();
	}
}
