package service.product.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.product.Acct_coverage_cat;
import service.fnc.RteResult;

public class AcctCoverageCatControlData extends RteResult
{
	protected ArrayList<Acct_coverage_cat> searchByCovCatTd(String cov_cat_id) throws Exception
	{
		setVal(RTE_PATH+".product.RteSearchAcctCoverageCat", new Object[] { "VAL1", cov_cat_id });
		return (ArrayList<Acct_coverage_cat>)executeResult().value();
	}
}
