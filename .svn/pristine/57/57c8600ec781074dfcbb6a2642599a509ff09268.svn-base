package service.rider.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.coverage.Cov_terminate;
import service.fnc.ConstantValues;
import service.fnc.RteResult;

public class CovTerminateControlData extends RteResult
{
	@SuppressWarnings("unchecked")
	public ArrayList<Cov_terminate> searchCovTerminate(int bnf_item_id) throws Exception
	{
		setVal(RTE_PATH+".coverage.RteSearchCovTerminate",new Object [] {"VAL1",bnf_item_id,ConstantValues.COV_CODE});
		return (ArrayList<Cov_terminate>)executeResult().value();
	}
	
	public void insertCovTerminate(Cov_terminate cov_terminate) throws Exception
	{
		setVal(RTE_PATH+".coverage.RteCovTerminate", new Object [] {"VAL1",cov_terminate});
		saveDataResultStatus();
	}
}
