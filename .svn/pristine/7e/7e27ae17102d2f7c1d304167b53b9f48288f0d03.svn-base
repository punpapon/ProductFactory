package service.baseplan.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.coverage.Prem_install;
import service.fnc.ConstantValues;
import service.fnc.RtePath;
import service.fnc.RteResult;

public class PremInstallData extends RteResult
{
	private final String RTE_PATH = RtePath.RTE.getValue();
	public void insertPremInstall(ArrayList<Prem_install> listPremInstall) throws Exception 
	{
		boolean status = true;
		try {
			Object [] param = new Object [] {ConstantValues.COV_CODE,listPremInstall};
			String rte = RTE_PATH+".coverage."+"RtePremInstall";
			setVal(rte, param);
			status = (boolean) executeResult().value();
		} catch (Exception e) {
			status = false;
			throw e;
		}
		System.out.println("status >>> "+status);
	}
}
