package service.product.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.product.Limit_cond;
import layout.bean.productfac.product.Limit_cond_amt;
import layout.bean.productfac.product.Limit_cond_serie;
import service.fnc.RteResult;

public class LimitCondControlData extends RteResult 
{
	
	public void insertLimitCond(String prd_code,ArrayList<Limit_cond> listLimitCond) throws Exception
	{
	    setVal(RTE_PATH+".imp."+"RteProductLimitCond",new Object [] {prd_code,listLimitCond});
	    saveDataResult();
	}
	//searchLimitCond
	@SuppressWarnings("unchecked")
	public  ArrayList<Limit_cond> searchLimitCond(String cov_code) throws Exception 
	{
		setVal(RTE_PATH+".imp."+"RteLimitCondS", new Object [] {"KEY1",cov_code});
		return (ArrayList<Limit_cond>)executeResult().value();
	}
	//searchLimitCondSerie
	@SuppressWarnings("unchecked")
	public  ArrayList<Limit_cond_serie> searchLimitCondSerie(String cov_code) throws Exception 
	{
		setVal(RTE_PATH+".imp."+"RteLimitCondS", new Object [] {"KEY2",cov_code});
		return (ArrayList<Limit_cond_serie>)executeResult().value();
	}
	//searchLimitCondAmt
	@SuppressWarnings("unchecked")
	public  ArrayList<Limit_cond_amt> searchLimitCondAmt(String cov_code) throws Exception 
	{
		setVal(RTE_PATH+".imp."+"RteLimitCondS", new Object [] {"KEY3",cov_code});
		return (ArrayList<Limit_cond_amt>)executeResult().value();
	}		
}
