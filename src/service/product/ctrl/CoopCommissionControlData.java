package service.product.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.product.Coop_commission;
import service.fnc.RteResult;

public class CoopCommissionControlData extends RteResult
{
	public void insertCoop(ArrayList<Coop_commission> listCoopCommission) throws Exception
	{
		setVal(RTE_PATH + ".imp." + "RteCoopCommission", new Object[] { listCoopCommission });
		saveDataResult();
	}
}
