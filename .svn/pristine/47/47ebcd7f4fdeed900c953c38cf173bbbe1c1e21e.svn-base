package service.product.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.product.Coop_prem_discount;
import service.fnc.RteResult;

public class CoopPremDiscountControlData extends RteResult
{
	public void insertCoop(ArrayList<Coop_prem_discount> listCoopPremDiscount) throws Exception
	{
		setVal(RTE_PATH + ".imp." + "RteCoopPremDiscount", new Object[] { listCoopPremDiscount });
		saveDataResult();
	}
}
