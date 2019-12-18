package service.ctrl;

import java.util.ArrayList;

import service.fnc.RteResult;

public class AppconfigControlData extends RteResult
{
	public ArrayList<String []> searchSubRateCodeByCovCat(String cov_cat,String [] rate_cat_id) throws Exception 
	{
		setVal(RTE_PATH + ".imp.RteAppconfigCovCatSubCodeS", new Object[] { "VAL1", cov_cat,rate_cat_id});
		return (ArrayList<String[]>) executeResult().value();
	}
	
	public ArrayList<String[]> searchRateCatByAgeType(String type, String[] ageSpeci, String[] ageBand, String[] ageSum) throws Exception
	{
		setVal(RTE_PATH + ".appconfig.RteSearchRateCat", new Object[] { "VAL1", type,ageSpeci,ageBand,ageSum});
		return (ArrayList<String[]>) executeResult().value();
	}
}
