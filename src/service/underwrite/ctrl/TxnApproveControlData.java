package service.underwrite.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.underwrite.Txn_approve;
import layout.bean.productfac.underwrite.Txn_underwrite;
import service.fnc.RtePath;
import service.fnc.RteResult;

public class TxnApproveControlData {

	private RteResult rteResult;
	private final String RTE_PATH = RtePath.RTE.getValue();
	
	public ArrayList<Txn_approve> searchAppenDixProduct(String prd_code) throws Exception
	{
		Object [] param = new Object [] {"VAL1",prd_code}; 
		this.rteResult = new RteResult(RTE_PATH+".unw."+"RteUnderwrteAppenDixProductS", param);
		return (ArrayList<Txn_approve>) rteResult.searchValuesResultData().value();
	}
	
	
	public void insertTxn_approve(ArrayList<Txn_approve> listAppenDixProduct) throws Exception 
	{
		boolean status = true;
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


