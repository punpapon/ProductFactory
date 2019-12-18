package service.underwrite.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.underwrite.Appendix_product;
import layout.bean.productfac.underwrite.Txn_approve;
import layout.bean.productfac.underwrite.Txn_underwrite;
import manit.rte.Result;
import service.fnc.ConstantValues;
import service.fnc.RtePath;
import service.fnc.RteResult;

public class TxnUnderwriteControlData {

	private RteResult rteResult;
	private Result rrteResult;
	private final String RTE_PATH = RtePath.RTE.getValue();
	
	public ArrayList<Txn_underwrite> search(String prd_code) throws Exception
	{
		Object [] param = new Object [] {"VAL1",prd_code}; 
		this.rteResult = new RteResult(RTE_PATH+".unw."+"RteUWTxnUnderwriteIU", param);
		return (ArrayList<Txn_underwrite>) rteResult.searchValuesResultData().value();
	}
	
	
	public void insertTxn_underwrite(ArrayList<Txn_underwrite> listAppenDixProduct) throws Exception 
	{
		boolean status = true;
		int record_id=0;
		try {
			Object [] param = new Object [] {"INSERT",listAppenDixProduct}; 
			this.rteResult = new RteResult(RTE_PATH+".unw."+"RteUWTxnUnderwriteIU", param);
			rteResult.saveData();
		} catch (Exception e) {
			status = false;
			throw e;
		}
		System.out.println("status >>> "+status);
	}
	public void deleteTxn_underwrite(ArrayList<Txn_underwrite> listAppenDixProduct) throws Exception 
	{
		boolean status = true;
		int record_id=0;
		try {
			Object [] param = new Object [] {"DELETEALL",listAppenDixProduct}; 
			this.rteResult = new RteResult(RTE_PATH+".unw."+"RteUWTxnUnderwriteIU", param);
			rteResult.saveData();
		} catch (Exception e) {
			status = false;
			throw e;
		}
		System.out.println("status >>> "+status);
	}
	public void insertTxn_approve(ArrayList<Txn_approve> listAppenDixProduct) throws Exception 
	{
		boolean status = true;
		int record_id=0;
		try {
			Object [] param = new Object [] {"INSERT",listAppenDixProduct}; 
			this.rteResult = new RteResult(RTE_PATH+".unw."+"RteUWTxnApproveIU", param);
			rteResult.saveData();
		} catch (Exception e) {
			status = false;
			throw e;
		}
		System.out.println("status >>> "+status);
	}
}

