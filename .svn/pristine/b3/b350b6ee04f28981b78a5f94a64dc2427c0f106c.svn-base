package service.underwrite.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.beanset.AppendixRelationAccessData;
import layout.bean.productfac.underwrite.Appendix;
import layout.bean.productfac.underwrite.Appendix_age_range;
import layout.bean.productfac.underwrite.Appendix_agent_tier;
import layout.bean.productfac.underwrite.Appendix_exam;
import layout.bean.productfac.underwrite.Appendix_sum_accum;
import layout.bean.productfac.underwrite.Appendix_sum_range;
import layout.bean.productfac.underwrite.Appendix_version;
import layout.bean.productfac.underwrite.Txn_appendix_sum_accum;
import layout.bean.productfac.underwrite.Txn_appendix_version;
import service.fnc.RtePath;
import service.fnc.RteResult;

public class AppenDixControlData 
{
	private RteResult rteResult;
	private final String RTE_PATH = RtePath.RTE.getValue();
	
	public ArrayList<Appendix> searchAllAppenDix() throws Exception
	{
		Object [] param = new Object [] {"VAL1"}; 
		this.rteResult = new RteResult(RTE_PATH+".unw."+"RteUnderwrteAppenDixS", param);
		return (ArrayList<Appendix>) rteResult.searchValuesResultData().value();
	}
	
	public ArrayList<AppendixRelationAccessData> searchAppendixRelation() throws Exception
	{
		Object [] param = new Object[] {"VAL2"};
		String rte      = RTE_PATH+".unw.RteUnderwrteAppenDixS";
		return (ArrayList<AppendixRelationAccessData>) new RteResult(rte,param).searchValuesResultData().value();
	}
	
	public void insertAppenDix() throws Exception 
	{
		boolean status = true;
		try {
			Object [] param = new Object [] {}; 
			this.rteResult = new RteResult(RTE_PATH+".unw."+"RteUnderwrteAppenDix", param);
			rteResult.saveData();
		} catch (Exception e) {
			status = false;
			throw e;
		}
		System.out.println("status >>> "+status);
	}
	public void insertAppendix(ArrayList<Appendix_sum_accum> listProduct) throws Exception 
	{
		boolean status = true;
		try {
			Object [] param = new Object [] {"INSERT",listProduct}; 
			this.rteResult = new RteResult(RTE_PATH+".unw."+"RteUWAppendixSumAccum", param);
			rteResult.saveData();
		} catch (Exception e) {
			status = false;
			throw e;
		}
		System.out.println("status >>> "+status);
	}
	public void insertAppendix_Txn(ArrayList<Txn_appendix_sum_accum> listProduct) throws Exception 
	{
		boolean status = true;
		try {
			Object [] param = new Object [] {"INSERT",listProduct}; 
			this.rteResult = new RteResult(RTE_PATH+".unw."+"RteUWTxnAppendixSumAccumIU", param);
			rteResult.saveData();
		} catch (Exception e) {
			status = false;
			throw e;
		}
		System.out.println("status >>> "+status);
	}
	public void insertAppendixMaster(ArrayList<Appendix> listProduct) throws Exception 
	{
		boolean status = true;
		try {
			Object [] param = new Object [] {"INSERT",listProduct}; 
			this.rteResult = new RteResult(RTE_PATH+".unw."+"RteUWAppendixIU", param);
			rteResult.saveData();
		} catch (Exception e) {
			status = false;
			throw e;
		}
		System.out.println("status >>> "+status);
	}
	public void insertAppendixAgeRange(ArrayList<Appendix_age_range> listProduct) throws Exception 
	{
		boolean status = true;
		try {
			Object [] param = new Object [] {"INSERT",listProduct}; 
			this.rteResult = new RteResult(RTE_PATH+".unw."+"RteUWAppendixVersionAgeRangeIU", param);
			rteResult.saveData();
		} catch (Exception e) {
			status = false;
			throw e;
		}
		System.out.println("status >>> "+status);
	}
	public void deleteAppendixAgeRange(ArrayList<Appendix_age_range> listProduct) throws Exception 
	{
		boolean status = true;
		try {
			Object [] param = new Object [] {"DELETE2",listProduct}; 
			this.rteResult = new RteResult(RTE_PATH+".unw."+"RteUWAppendixVersionAgeRangeIU", param);
			rteResult.saveData();
		} catch (Exception e) {
			status = false;
			throw e;
		}
		System.out.println("status >>> "+status);
	}
	public void insertAppendixSumRange(ArrayList<Appendix_sum_range> listProduct) throws Exception 
	{
		boolean status = true;
		try {
			Object [] param = new Object [] {"INSERT",listProduct}; 
			this.rteResult = new RteResult(RTE_PATH+".unw."+"RteUWAppendixVersionSumRangeIU", param);
			rteResult.saveData();
		} catch (Exception e) {
			status = false;
			throw e;
		}
		System.out.println("status >>> "+status);
	}
	public void deleteAppendixSumRange(ArrayList<Appendix_sum_range> listProduct) throws Exception 
	{
		boolean status = true;
		try {
			Object [] param = new Object [] {"DELETE2",listProduct}; 
			this.rteResult = new RteResult(RTE_PATH+".unw."+"RteUWAppendixVersionSumRangeIU", param);
			rteResult.saveData();
		} catch (Exception e) {
			status = false;
			throw e;
		}
		System.out.println("status >>> "+status);
	}
	public void deleteAppendixAgentTier(ArrayList<Appendix_agent_tier> listProduct) throws Exception 
	{
		boolean status = true;
		try {
			Object [] param = new Object [] {"DELETE2",listProduct}; 
			this.rteResult = new RteResult(RTE_PATH+".unw."+"RteUWAppendixAgentTierIU", param);
			rteResult.saveData();
		} catch (Exception e) {
			status = false;
			throw e;
		}
		System.out.println("status >>> "+status);
	}
	public void insertAppendixMed(ArrayList<Appendix_exam> listProduct) throws Exception 
	{
		boolean status = true;
		try {
			Object [] param = new Object [] {"INSERT",listProduct}; 
			this.rteResult = new RteResult(RTE_PATH+".unw."+"RteUWAppendixVersionExamIU", param);
			rteResult.saveData();
		} catch (Exception e) {
			status = false;
			throw e;
		}
		System.out.println("status >>> "+status);
	}
	public void insertAppendixAgent(ArrayList<Appendix_agent_tier> listProduct) throws Exception 
	{
		boolean status = true;
		try {
			Object [] param = new Object [] {"INSERT",listProduct}; 
			this.rteResult = new RteResult(RTE_PATH+".unw."+"RteUWAppendixAgentTierIU", param);
			rteResult.saveData();
		} catch (Exception e) {
			status = false;
			throw e;
		}
		System.out.println("status >>> "+status);
	}
	public void insertAppendixExam(ArrayList<Appendix_exam> listProduct) throws Exception 
	{
		boolean status = true;
		try {
			Object [] param = new Object [] {"INSERT",listProduct}; 
			this.rteResult = new RteResult(RTE_PATH+".unw."+"RteUWAppendixVersionExamIU", param);
			rteResult.saveData();
		} catch (Exception e) {
			status = false;
			throw e;
		}
		System.out.println("status >>> "+status);
	}
	public void insertAppendixVersion(ArrayList<Appendix_version> listProduct) throws Exception 
	{
		boolean status = true;
		try {
			Object [] param = new Object [] {"INSERT",listProduct}; 
			this.rteResult = new RteResult(RTE_PATH+".unw."+"RteUWAppendixVersionIU", param);
			rteResult.saveData();
		} catch (Exception e) {
			status = false;
			throw e;
		}
		System.out.println("status >>> "+status);
	}
	public void insertTxnAppendixVersion(ArrayList<Txn_appendix_version> listProduct) throws Exception 
	{
		boolean status = true;
		try {
			Object [] param = new Object [] {"INSERT",listProduct}; 
			this.rteResult = new RteResult(RTE_PATH+".unw."+"RteUWTxnAppendixVersionIU", param);
			rteResult.saveData();
		} catch (Exception e) {
			status = false;
			throw e;
		}
		System.out.println("status >>> "+status);
	}
}
