package service.underwrite;

import java.util.ArrayList;

import layout.bean.productfac.underwrite.Appendix_product;
import service.underwrite.ctrl.AppenDixProductControlData;
import service.underwrite.ctrl.AppendixVersionData;

public class AppendixProductAccessData {
	private ArrayList<Appendix_product> listMedExam;
	//private ArrayList<Object> listMedExamST;
	public AppendixProductAccessData() {} 
		public AppendixProductAccessData(String case_type) throws Exception
		{
			searchCase(case_type);
		}
		public AppendixProductAccessData(String case_type,String case2) throws Exception
		{
			searchCaseST(case_type);
		}
		
		
		private void searchCase(String case_type) throws Exception
		{
			//AppendixSumAccumAccessData medExamData = new AppendixSumAccumAccessData();
			//setListMedExam(medExamData.searchMedExam(case_type));
		}

		private void setListMedExam(ArrayList<Appendix_product> listdata) 
		{ 
			this.listMedExam = listdata;	
		}
		
		/**
		 * 
		 * @return ArrayList<Coverage : list Bean set Coverage
		 */
		public ArrayList<Appendix_product> getListMedExam() 
		{
			return listMedExam;
		}
		
		private void searchCaseST(String case_type) throws Exception
		{
			AppendixVersionData medExamData = new AppendixVersionData();
			//setListMedExamST(medExamData.searchAppendixVersionST(case_type));

		}
		public void doAppendix_product(ArrayList<Appendix_product> Med_exam) throws Exception
		{
			System.out.println("doAppendix_product >>> ");
			AppenDixProductControlData noteData = new AppenDixProductControlData();
			noteData.insertAppenDixProduct2(Med_exam);
		}
		
	}



