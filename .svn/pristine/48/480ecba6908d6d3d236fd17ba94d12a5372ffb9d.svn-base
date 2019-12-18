package service.product.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.product.Sale_history;
import service.fnc.RteResult;

public class SaleHistoryControlData extends RteResult
{
	@SuppressWarnings("unchecked")
	public ArrayList<Sale_history> searchProductSaleHistory(String prd_code) throws Exception
	{
		setVal(RTE_PATH + ".imp." + "RteProductSaleHistoryS", new Object[] { "VAL1", prd_code });
		return (ArrayList<Sale_history>) executeResult().value();
	}

	public void insertProductsaleHistory(Sale_history sale_history) throws Exception
	{
		setVal(RTE_PATH + ".imp." + "RteProductSaleHistory", new Object[] { sale_history });
		saveDataResult();
	}
}
