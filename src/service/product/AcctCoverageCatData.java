package service.product;

import java.util.ArrayList;

import layout.bean.productfac.product.Acct_coverage_cat;
import service.product.ctrl.AcctCoverageCatControlData;

public class AcctCoverageCatData extends AcctCoverageCatControlData
{
	public ArrayList<Acct_coverage_cat> searchByCovCatTd(String cov_cat_id) throws Exception
	{
		return super.searchByCovCatTd(cov_cat_id);
	}
}
