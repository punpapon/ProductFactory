package service.product.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.product.Prem_collect;
import service.fnc.RteResult;

public class PremCollectControlData extends RteResult
{
	// seardchPremCollect
	@SuppressWarnings("unchecked")
	public ArrayList<Prem_collect> seardchPremCollect(String prd_code) throws Exception 
	{
		setVal(RTE_PATH + ".imp." + "RtePremCollectS", new Object[] { "KEY1", prd_code});
		return (ArrayList<Prem_collect>) executeResult().value();
	}
	
	public void insertPremCollect(String prd_code,ArrayList<Prem_collect> listPremCollect) throws Exception
	{
		setVal(RTE_PATH+".imp."+"RteProductPremCollect", new Object [] {prd_code,listPremCollect});
		saveDataResult();
	}
}
