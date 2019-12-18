package service.underwrite.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.underwrite.Med_exam;
import layout.bean.productfac.underwrite.Policy_status_accum;
import layout.bean.productfac.underwrite.Txn_policy_status_accum;
import manit.rte.Result;
import service.fnc.RtePath;
import service.fnc.RteResult;

public class PolicyStatusAccumData {
	private RteResult rteResult;
	private final String RTE_PATH = RtePath.RTE.getValue();
	/**
	 * explain : ค้นหาข้อมูลทั้งหมด 
	 * @return ArrayList<Coverage> : coverage.coverage
	 * @throws Exception
	 */
	public ArrayList<Policy_status_accum>  searchALL(String case_type) throws Exception
	{
		//System.out.println("-------------------------/"+case_type);
		Object [] param = new Object[] {"ALL", new String[] {case_type}};
		String rte      = RTE_PATH+".unw.RteUWPolicyStatusAccumS";
		System.out.println(rte);
		this.rteResult = new RteResult(rte,param);
		Result result = rteResult.searchValuesResultData();
		ArrayList<Policy_status_accum> thislist = (ArrayList<Policy_status_accum>) result.value();
		return thislist;
	}
	
	
	public ArrayList<Policy_status_accum>  searchGroup(String case_type) throws Exception
	{
		System.out.println("-------------------------/"+case_type);
		Object [] param = new Object[] {"BYGROUP", new String[] {case_type}};
		String rte      = RTE_PATH+".unw.RteUWPolicyStatusAccumS";
		System.out.println(rte);
		this.rteResult = new RteResult(rte,param);
		Result result = rteResult.searchValuesResultData();
		ArrayList<Policy_status_accum> thislist = (ArrayList<Policy_status_accum>) result.value();
		return thislist;
	}
	public ArrayList<Txn_policy_status_accum>  searchGroupTxn(String case_type) throws Exception
	{
		System.out.println("-------------------------/"+case_type);
		Object [] param = new Object[] {"BYGROUP", new String[] {case_type}};
		String rte      = RTE_PATH+".unw.RteUWTxnPolicyStatusAccumS";
		System.out.println(rte);
		this.rteResult = new RteResult(rte,param);
		Result result = rteResult.searchValuesResultData();
		ArrayList<Txn_policy_status_accum> thislist = (ArrayList<Txn_policy_status_accum>) result.value();
		return thislist;
	}
	
	
}