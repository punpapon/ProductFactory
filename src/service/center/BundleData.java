package service.center;

import java.util.ArrayList;

import layout.bean.productfac.coverage.Coverage;
import service.ctrl.BundleControlData;

public class BundleData extends BundleControlData
{
	public ArrayList<Coverage> searchBundle() throws Exception
	{
		return super.searchBundle();
	}
	
	public ArrayList<Coverage> searchBundleSelectData() throws Exception
	{
		return super.searchBundleSelectData();
	}
	
	public void doBundle(String [] cov_code_bundle) throws Exception
	{
		insertBundle(cov_code_bundle);
	}
}
