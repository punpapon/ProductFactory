package service.underwrite.ctrl;

import java.util.ArrayList;

import manit.rte.Result;
import service.fnc.RtePath;
import service.fnc.RteResult;
import layout.bean.productfac.beanset.TxnALLAccessData;

public class TxnALLControlData {
	private RteResult rteResult;

	private final String RTE_PATH = RtePath.RTE.getValue();

	public ArrayList<TxnALLAccessData> search(String cov_code, int Version_id) throws Exception {
		Object[] param = new Object[] { "S", new Object[] { cov_code, Version_id } };
		this.rteResult = new RteResult(RTE_PATH + ".unw.RteTxnALLAccessData", param);
		Result result = rteResult.searchValuesResultData();
		return (ArrayList<TxnALLAccessData>) result.value();
	}

	public ArrayList<TxnALLAccessData> searchTxnApprove(String cov_code, int Txn_id) throws Exception {
		Object[] param = new Object[] { "Txn_id", new Object[] { cov_code, Txn_id } };
		this.rteResult = new RteResult(RTE_PATH + ".unw.RteTxnALLAccessData", param);
		Result result = rteResult.searchValuesResultData();
		return (ArrayList<TxnALLAccessData>) result.value();
	}

}
