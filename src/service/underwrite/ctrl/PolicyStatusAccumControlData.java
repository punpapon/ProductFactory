package service.underwrite.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.underwrite.Policy_status_accum;
import layout.bean.productfac.underwrite.Txn_policy_status_accum;
import service.fnc.RtePath;
import service.fnc.RteResult;

public class PolicyStatusAccumControlData 
{
	private RteResult rteResult;
	private final String RTE_PATH = RtePath.RTE.getValue();
	
	public ArrayList<Policy_status_accum> searchAllAppenDix() throws Exception
	{
		Object [] param = new Object [] {"VAL1"}; 
		this.rteResult = new RteResult(RTE_PATH+".unw."+"RteUnderwrteAppenDixS", param);
		return (ArrayList<Policy_status_accum>) rteResult.searchValuesResultData().value();
	}
	//TODO
	
	public void insert(ArrayList<Policy_status_accum> listProduct) throws Exception 
	{
		boolean status = true;
		try {
			Object [] param = new Object [] {"INSERT",listProduct}; 
			this.rteResult = new RteResult(RTE_PATH+".unw."+"RteUWPolicyStatusAccum", param);
			rteResult.saveData();
		} catch (Exception e) {
			status = false;
			throw e;
		}
		System.out.println("status >>> "+status);
	}
	public void insertTxn(ArrayList<Txn_policy_status_accum> listProduct) throws Exception 
	{
		boolean status = true;
		try {
			Object [] param = new Object [] {"INSERT",listProduct}; 
			this.rteResult = new RteResult(RTE_PATH+".unw."+"RteUWTxnPolicyStatusAccum", param);
			rteResult.saveData();
		} catch (Exception e) {
			status = false;
			throw e;
		}
		System.out.println("status >>> "+status);
	}
}
