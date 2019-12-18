package service.underwrite;

import java.util.ArrayList;

import layout.bean.productfac.underwrite.Txn_appendix_product;
import layout.bean.productfac.underwrite.Txn_approve;
import service.underwrite.ctrl.AppendixVersionData;
import service.underwrite.ctrl.TxnAppendixProductControlData;
import service.underwrite.ctrl.TxnApproveControlData;

public class TxnAppendixProductAccessData {
	private ArrayList<Txn_appendix_product> listMedExam;
	//private ArrayList<Object> listMedExamST;
	public TxnAppendixProductAccessData() {} 
		public TxnAppendixProductAccessData(String case_type) throws Exception
		{
			searchCase(case_type);
		}
		public TxnAppendixProductAccessData(String case_type,String case2) throws Exception
		{
			searchCaseST(case_type);
		}
		
		
		private void searchCase(String case_type) throws Exception
		{
			//AppendixSumAccumAccessData medExamData = new AppendixSumAccumAccessData();
			//setListMedExam(medExamData.searchMedExam(case_type));
		}

		private void setListMedExam(ArrayList<Txn_appendix_product> listdata) 
		{ 
			this.listMedExam = listdata;	
		}
		
		/**
		 * 
		 * @return ArrayList<Coverage : list Bean set Coverage
		 */
		public ArrayList<Txn_appendix_product> getListMedExam() 
		{
			return listMedExam;
		}
		
		private void searchCaseST(String case_type) throws Exception
		{
			AppendixVersionData medExamData = new AppendixVersionData();
			//setListMedExamST(medExamData.searchAppendixVersionST(case_type));

		}
		public void doTxn_appendix_product(ArrayList<Txn_appendix_product> Med_exam) throws Exception
		{
			System.out.println("doTxn_appendix_product >>> ");
			TxnAppendixProductControlData noteData = new TxnAppendixProductControlData();
			noteData.insertTxn_approve(Med_exam);
		}
		
	}




