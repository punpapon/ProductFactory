package service.baseplan.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.beanset.PremiumAcessData;
import manit.rte.Result;
import service.fnc.RtePath;
import service.fnc.RteResult;
import service.fnc.StatusCodeType;

public class PemiumData 
{
	private RteResult rteResult;
	private final String RTE_PATH = RtePath.RTE.getValue();
	public ArrayList<PremiumAcessData> searchPremium(String cov_code) throws Exception 
	{
		Object [] param = new Object [] {"S",new Object [] {"KEY",cov_code}}; 
		this.rteResult = new RteResult(RTE_PATH+".RtePemiumAccessData", param);
		Result result = rteResult.searchValuesResultData();
		return (ArrayList<PremiumAcessData>) result.value();
	}
}
