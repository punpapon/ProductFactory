package service.product.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.product.Sale_compensation_detail;
import service.fnc.ConstantValues;
import service.fnc.RteResult;

public class SaleCompensationDetailControlData extends RteResult
{
	@SuppressWarnings("unchecked")
	public ArrayList<Sale_compensation_detail> searchByPrdCode() throws Exception
	{
		setVal(RTE_PATH+".product."+"RteSearchSaleCompensationDetail", new Object [] {"VAL1",ConstantValues.PRD_CODE});
		return (ArrayList<Sale_compensation_detail>)executeResult().value();
	}
	
	public void insertSaleCompensationDetail(ArrayList<Sale_compensation_detail> listData) throws Exception
	{
		setVal(RTE_PATH+".product."+"RteSaleCompensationDetail", new Object [] {"VAL1",ConstantValues.PRD_CODE,listData});
		saveDataResultStatus();
	}
}
