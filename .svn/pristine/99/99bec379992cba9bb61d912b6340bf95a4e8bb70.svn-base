package service.product.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.product.Limit_cond_serie;
import service.fnc.RteResult;

public class LimitCondSerieControlData extends RteResult
{
	public void insertLimitCond(ArrayList<Limit_cond_serie> listLimitCondSerie) throws Exception
	{
		setVal(RTE_PATH+".imp."+"RteProductLimitCondSerie", new Object [] {listLimitCondSerie});
		saveDataResult();
	}
}
