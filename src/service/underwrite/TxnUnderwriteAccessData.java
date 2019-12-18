package service.underwrite;

import java.util.ArrayList;

import layout.bean.productfac.underwrite.Txn_approve;
import layout.bean.productfac.underwrite.Txn_underwrite;
import manit.rte.Result;
import service.fnc.RtePath;
import service.fnc.RteResult;
import service.underwrite.ctrl.TxnUnderwriteControlData;

public class TxnUnderwriteAccessData {
	private ArrayList<Txn_underwrite> listMedExam;
	//private ArrayList<Object> listMedExamST;
	public TxnUnderwriteAccessData() {} 
		public TxnUnderwriteAccessData(String case_type) throws Exception
		{
			searchCase(case_type);
		}
		
		
		private void searchCase(String case_type) throws Exception
		{
			TxnUnderwriteAccessData medExamData = new TxnUnderwriteAccessData();
			setList(medExamData.search(case_type));
		}

		private void setList(ArrayList<Txn_underwrite> listdata) 
		{ 
			this.listMedExam = listdata;	
		}
		
		/**
		 * 
		 * @return ArrayList<Coverage : list Bean set Coverage
		 */
		public ArrayList<Txn_underwrite> getList() 
		{
			return listMedExam;
		}
		
		
		public void doTxn_underwrite(ArrayList<Txn_underwrite> Med_exam) throws Exception
		{
			System.out.println("doTxn_underwrite >>> ");
			TxnUnderwriteControlData noteData = new TxnUnderwriteControlData();
			noteData.insertTxn_underwrite(Med_exam);
		}
		public void deleteTxn_underwrite(ArrayList<Txn_underwrite> Med_exam) throws Exception
		{
			System.out.println("deleteTxn_underwrite >>> ");
			TxnUnderwriteControlData noteData = new TxnUnderwriteControlData();
			noteData.deleteTxn_underwrite(Med_exam);
		}
		public void doTxn_approve(ArrayList<Txn_approve> Med_exam) throws Exception
		{
			System.out.println("doTxn_approve >>> ");
			TxnUnderwriteControlData noteData = new TxnUnderwriteControlData();
			noteData.insertTxn_approve(Med_exam);
		}
		public String doTxn_underwriteString(ArrayList<Txn_underwrite> Med_exam) throws Exception
		{
			System.out.println("doTxn_underwrite >>> ");
			TxnUnderwriteControlData noteData = new TxnUnderwriteControlData();
			noteData.insertTxn_underwrite(Med_exam);
			
			return "";
		}
		private RteResult rteResult;
		private final String RTE_PATH = RtePath.RTE.getValue();

		public ArrayList<Txn_underwrite> search(String cov_code) throws Exception
		{
			Object[] param = new Object[] { "MAX", new Object[] { cov_code } };
			this.rteResult = new RteResult(RTE_PATH + ".unw.RteUWTxnUnderwriteS", param);
			Result result = rteResult.searchValuesResultData();
			return (ArrayList<Txn_underwrite>) result.value();
		}
	}



