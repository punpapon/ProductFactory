package service.product.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.product.Coop_sum;
import service.fnc.RteResult;

public class CoopSumControlData extends RteResult 
{
	public void insertCoop(ArrayList<Coop_sum> listCoopSum) throws Exception
	{
		setVal(RTE_PATH+".imp."+"RteCoopSum",new Object [] {listCoopSum});
		saveDataResult();
	}
}
