package service.underwrite;

import java.util.ArrayList;

import layout.bean.productfac.underwrite.Appendix_sum_accum;
import layout.bean.productfac.underwrite.Appendix_version;
import layout.bean.productfac.underwrite.Med_exam;
import layout.bean.productfac.underwrite.Txn_appendix_sum_accum;
import service.underwrite.ctrl.AppenDixControlData;
import service.underwrite.ctrl.AppendixVersionData;
import service.underwrite.ctrl.MedExamControlData;

public class AppendixSumAccumAccessData {
private ArrayList<AppendixSumAccumAccessData> listMedExam;
private ArrayList<Object> listMedExamST;
//private ArrayList<Object> listMedExamST;
public AppendixSumAccumAccessData() {} 
	public AppendixSumAccumAccessData(String case_type) throws Exception
	{
		searchCase(case_type);
	}
	public AppendixSumAccumAccessData(String case_type,String case2) throws Exception
	{
		searchCaseST(case_type);
	}
	
	
	private void searchCase(String case_type) throws Exception
	{
		//AppendixSumAccumAccessData medExamData = new AppendixSumAccumAccessData();
		//setListMedExam(medExamData.searchMedExam(case_type));
	}

	private void setListMedExam(ArrayList<AppendixSumAccumAccessData> listdata) 
	{ 
		this.listMedExam = listdata;	
	}
	private void setListMedExamST(ArrayList<Object> listdata) 
	{ 
		this.listMedExamST = listdata;	
	}
	/**
	 * 
	 * @return ArrayList<Coverage : list Bean set Coverage
	 */
	public ArrayList<AppendixSumAccumAccessData> getListMedExam() 
	{
		return listMedExam;
	}
	public ArrayList<Object> getListST() 
	{
		return listMedExamST;
	}
	private void searchCaseST(String case_type) throws Exception
	{
		AppendixVersionData medExamData = new AppendixVersionData();
		setListMedExamST(medExamData.searchAppendixVersionST(case_type));

	}
	public void doAppendixSA(ArrayList<Appendix_sum_accum> Med_exam) throws Exception
	{
		System.out.println("dodoAppendixSA >>> ");
		AppenDixControlData noteData = new AppenDixControlData();
		noteData.insertAppendix(Med_exam);
	}
	public void doAppendixSA_Txn(ArrayList<Txn_appendix_sum_accum> Med_exam) throws Exception
	{
		System.out.println("dodoAppendixSA_Txn >>> ");
		AppenDixControlData noteData = new AppenDixControlData();
		noteData.insertAppendix_Txn(Med_exam);
	}
}


