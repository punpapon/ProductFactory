package service.product.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.product.Prem_install;
import service.fnc.RteResult;

public class PremInstallControlData extends RteResult
{
	@SuppressWarnings("unchecked")
	public ArrayList<Prem_install> seardchPremInstall(String prd_code) throws Exception 
	{
		setVal(RTE_PATH + ".imp." + "RteProductPremInstallS", new Object[] { "VAL1", prd_code });
		return (ArrayList<Prem_install>) executeResult().value();
	}
	
	public void insertPremInstall(String prd_code,ArrayList<Prem_install> listPremInstall) throws Exception
	{
		setVal(RTE_PATH+".imp."+"RteProductPremInstall",new Object [] {prd_code,listPremInstall});
		saveDataResult();
	}
}
