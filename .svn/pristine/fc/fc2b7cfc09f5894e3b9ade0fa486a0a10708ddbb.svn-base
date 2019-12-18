package service.product.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.product.Limit_cond_amt;
import service.fnc.RteResult;

public class LimitCondAmtControlData extends RteResult
{
	public void insertLimitCond(ArrayList<Limit_cond_amt> listLimitCondAmt) throws Exception
	{
		setVal(RTE_PATH+".imp."+"RteProductLimitCondAmt", new Object [] {listLimitCondAmt});
		saveDataResult();
	}
}
