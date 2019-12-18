package service.product.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.beanset.ProductRiderAccessData;
import layout.bean.productfac.coverage.Coverage;
import service.fnc.ConstantValues;
import service.fnc.RteResult;

public class BasePlanSynchronous extends RteResult 
{
	@SuppressWarnings("unchecked")
	public ArrayList<Coverage> searchBasePlanSynchronous(String cov_cat_id) throws Exception
	{
		setVal(RTE_PATH+".imp.RtecoverageS",new Object[] {"CAT",cov_cat_id});
		return (ArrayList<Coverage>) executeResult().value();
	}
	
	@SuppressWarnings("unchecked")
	public ArrayList<ProductRiderAccessData> searchRiderGetBundle() throws Exception
	{
		setVal(RTE_PATH+".imp.RtecoverageS",new Object[] {"RID"});
		return (ArrayList<ProductRiderAccessData>) executeResult().value();
	}
	
	@SuppressWarnings("unchecked")
	public ArrayList<ProductRiderAccessData> searchRiderSynchronous() throws Exception
	{
		setVal(RTE_PATH+".imp.RtecoverageS", new Object[] {"RID2",ConstantValues.PRD_CODE});
		return (ArrayList<ProductRiderAccessData>) executeResult().value();
	}
	
	///Benz Get Case Rider Status APPROVED //
	@SuppressWarnings("unchecked")
	public ArrayList<ProductRiderAccessData> searchRiderSynchronousPR() throws Exception
	{
		setVal(RTE_PATH+".imp.RtecoverageS",new Object[] {"RIDAPP",ConstantValues.PRD_CODE});
		return (ArrayList<ProductRiderAccessData>)executeResult().value();
	}	
}
