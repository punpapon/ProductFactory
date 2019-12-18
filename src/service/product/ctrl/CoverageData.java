package service.product.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.product.Coverage;
import service.fnc.RteResult;

public class CoverageData extends RteResult
{
	@SuppressWarnings("unchecked")
	public ArrayList<Coverage> searchCoverage(String cov_code) throws Exception
	{
		setVal(RTE_PATH + ".imp." + "RteProductcoverageS", new Object[] { "KEY", new String[] { cov_code } });
		return (ArrayList<Coverage>) executeResult().value();
	}
}
