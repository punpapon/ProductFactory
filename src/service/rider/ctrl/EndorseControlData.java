package service.rider.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.coverage.Coverage;
import layout.bean.productfac.coverage.Endorse;
import service.fnc.ConstantValues;
import service.fnc.RteResult;

public class EndorseControlData extends RteResult
{	
	@SuppressWarnings("unchecked")
	protected ArrayList<Object []> searchEndorseData() throws Exception
	{
	    Object [] param = new Object [] {"VAL1",ConstantValues.COV_CODE};
	    setVal(RTE_PATH+".coverage."+"RteSearchEndorse", param);
	    return (ArrayList<Object []>)executeResult().value();
	}
	
	@SuppressWarnings("unchecked")
	protected ArrayList<Coverage> searchCoverageEndorse(String cov_ind_code) throws Exception
	{
	    Object [] param = new Object [] {"VAL2",cov_ind_code};
	    setVal(RTE_PATH+".coverage."+"RteSearchEndorse", param);
	    return (ArrayList<Coverage>)executeResult().value();
	}
	
	@SuppressWarnings("unchecked")
	protected ArrayList<Coverage> searchEndorseData(String cov_code) throws Exception
	{
	    Object [] param = new Object [] {"VAL3",cov_code};
	    setVal(RTE_PATH+".coverage."+"RteSearchEndorse", param);
	    return (ArrayList<Coverage>)executeResult().value();
	}
	
	protected void insertEndorse(ArrayList<Endorse> listEndorse) throws Exception
	{
		setVal(RTE_PATH+".coverage."+"RteEndorse", new Object [] {"VAL1",ConstantValues.COV_CODE,listEndorse});
		saveDataResultStatus();
	}
}
