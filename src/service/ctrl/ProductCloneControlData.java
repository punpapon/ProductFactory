package service.ctrl;


import java.util.ArrayList;

import layout.bean.productfac.coverage.Coverage;
import layout.bean.productfac.lookup.File;
import layout.bean.productfac.product.Product;
import layout.bean.productfac.product.Rate_layout;
import service.fnc.ConstantValues;
import service.fnc.RtePath;
import service.fnc.RteResult;

public class ProductCloneControlData extends RteResult
{
	protected Product cloneProduct(String prd_code) throws Exception
	{
		setVal(RTE_PATH+".product.RteProductClone", new Object [] {prd_code});
		return (Product) executeResult().value();
	}
	
	protected Coverage cloneCoverage(String prd_code) throws Exception
	{
		setVal(RTE_PATH+".product.RteCoverageClone", new Object [] {prd_code});
		return (Coverage) executeResult().value();
	}
	
	protected ArrayList<Rate_layout> searchRateLayout(String prd_code) throws Exception
	{
		setVal(RTE_PATH+".product.RteSearchRateLayout", new Object [] {prd_code});
		return (ArrayList<Rate_layout>) executeResult().value();
	}
	
	protected boolean cloneProductRatelayout(ArrayList<File> listFileUp,ArrayList<Rate_layout> listRateLay) throws Exception
	{
		setVal(RTE_PATH+".product.RteCloneProductRatelayout", new Object [] {listFileUp,listRateLay,ConstantValues.USER_CODE});
		return (boolean) executeResult().value();
	}
	
	protected ArrayList<layout.bean.productfac.coverage.Rate_layout> searchRateLayoutCoverage(String cov_code) throws Exception
	{
		setVal(RTE_PATH+".coverage.RteSearchRateLayout", new Object [] {"VAL1",cov_code});
		return (ArrayList<layout.bean.productfac.coverage.Rate_layout>) executeResult().value();
	}
	
	protected boolean cloneCoverageRatelayout(ArrayList<File> listFileUp,ArrayList<layout.bean.productfac.coverage.Rate_layout> listRateLay) throws Exception
	{
		setVal(RTE_PATH+".coverage.RteCloneCoverageRatelayout", new Object [] {listFileUp,listRateLay,ConstantValues.USER_CODE});
		return (boolean) executeResult().value();
	}
}
