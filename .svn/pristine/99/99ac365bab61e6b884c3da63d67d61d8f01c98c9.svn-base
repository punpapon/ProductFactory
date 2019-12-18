package service.rider.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.coverage.Prem_occ_charge;
import service.fnc.RteResult;

public class PremOccChargeData extends RteResult 
{
	public void insertRateLayout(ArrayList<Prem_occ_charge> listPremOccCharge) throws Exception 
	{
		setVal(RTE_PATH+".imp."+"RtePremOccCharge",new Object [] {listPremOccCharge});
		saveDataResult();
	}
}
