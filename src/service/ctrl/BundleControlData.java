package service.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.coverage.Coverage;
import service.fnc.ConstantValues;
import service.fnc.RteResult;

public class BundleControlData extends  RteResult
{
	
	@SuppressWarnings("unchecked")
	public ArrayList<Coverage> searchBundle() throws Exception
	{
		setVal(RTE_PATH+".coverage.RteSearchBundleData", new Object [] {"VAL1",ConstantValues.COV_CODE});
		return (ArrayList<Coverage>) executeResult().value();
	}
	
	@SuppressWarnings("unchecked")
	public ArrayList<Coverage> searchBundleSelectData() throws Exception
	{
		String cov_ind_code = ConstantValues.COV_IND_CODE.equals("RIDER") ? "BASE_PLAN" : "RIDER"; 
		setVal(RTE_PATH+".coverage.RteSearchBundleData",new Object [] {"VAL2",cov_ind_code});
		return (ArrayList<Coverage>) executeResult().value();
	}
	
	public void insertBundle(String [] cov_code_bundle) throws Exception
	{
		setVal(RTE_PATH+".coverage.RteBundleData",new Object [] {"VAL1",ConstantValues.COV_CODE,cov_code_bundle,ConstantValues.USER_CODE});
		saveDataResultStatus();
	}
}
