package service.baseplan.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.coverage.Prem_occ_charge;
import service.fnc.RteResult;

public class PremOccCharge extends RteResult
{
    /**
     * 
     * @param prem_occ_charge
     * @param str : is coverage.prem_occ_charge
     * @return
     * @throws Exception
     */
	public ArrayList<Prem_occ_charge> searchPrem_occ_charge(String cov_code)  throws Exception
	{
		setVal(RTE_PATH+".imp."+"RtePremOccChargeS",new Object [] {"S",new Object [] {cov_code}});
		return (ArrayList<Prem_occ_charge>) executeResult().value();
	}
}
