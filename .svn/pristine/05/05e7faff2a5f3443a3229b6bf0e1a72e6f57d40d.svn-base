package service.underwrite;

import java.util.ArrayList;

import layout.bean.productfac.underwrite.Txn_approve;
import layout.bean.productfac.underwrite.Txn_underwrite;
import service.underwrite.ctrl.AppendixVersionData;
import service.underwrite.ctrl.TxnApproveControlData;
import service.underwrite.ctrl.TxnUnderwriteControlData;

public class TxnApproveAccessData {
	private ArrayList<Txn_approve> listMedExam;
	//private ArrayList<Object> listMedExamST;
	public TxnApproveAccessData() {} 
		public TxnApproveAccessData(String case_type) throws Exception
		{
			searchCase(case_type);
		}
		public TxnApproveAccessData(String case_type,String case2) throws Exception
		{
			searchCaseST(case_type);
		}
		
		
		private void searchCase(String case_type) throws Exception
		{
			//AppendixSumAccumAccessData medExamData = new AppendixSumAccumAccessData();
			//setListMedExam(medExamData.searchMedExam(case_type));
		}

		private void setListMedExam(ArrayList<Txn_approve> listdata) 
		{ 
			this.listMedExam = listdata;	
		}
		
		/**
		 * 
		 * @return ArrayList<Coverage : list Bean set Coverage
		 */
		public ArrayList<Txn_approve> getListMedExam() 
		{
			return listMedExam;
		}
		
		private void searchCaseST(String case_type) throws Exception
		{
			AppendixVersionData medExamData = new AppendixVersionData();
			//setListMedExamST(medExamData.searchAppendixVersionST(case_type));

		}
		public void doTxn_underwrite(ArrayList<Txn_approve> Med_exam) throws Exception
		{
			System.out.println("doTxn_underwrite >>> ");
			TxnApproveControlData noteData = new TxnApproveControlData();
			noteData.insertTxn_approve(Med_exam);
		}
		
	}




