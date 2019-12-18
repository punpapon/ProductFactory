package service.ctrl;

import java.util.ArrayList;

import service.fnc.ConstantAppPage;
import service.fnc.RteResult;

public class DataValuesSeparateData extends RteResult
{
	public void insertAppPage(String cov_cat_id, String appType) throws Exception
	{
		setVal(RTE_PATH +".appconfig."+"RteConstantAppPage", new Object[] {"VAL1",cov_cat_id, appType, new ConstantAppPage().getConstantAppPage(appType)});
		saveDataResult();
	}
	
	/**
	 * 
	 * @param appType : B = BasePlan, R = Rider, P = Product
	 * @return
	 * @throws Exception
	 */
	public void insertConstantAppPage(String appType,String code,String [] appPage) throws Exception
	{
		String val = appType.equals("P") ? "VAL3" : "VAL2";
		setVal(RTE_PATH +".appconfig."+"RteConstantAppPage", new Object[] {val, code,appPage});
		saveDataResult();
	}
	
	/**
	 * 
	 * @param appType : B = BasePlan, R = Rider, P = Product
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public ArrayList searchAppPage(String appType,String code) throws Exception
	{
		String val = appType.equals("P") ? "VAL2" : "VAL1";
		setVal(RTE_PATH+".appconfig."+"RteSearchConstantAppPage", new Object [] {val,code});
		return (ArrayList)executeResult().value();
	}
}
