package service.underwrite;

import java.util.ArrayList;

import service.underwrite.ctrl.AppendixVersionData;

public class AppendixSumAccumAccessDataService {
private ArrayList<AppendixSumAccumAccessDataService> listThis;
private ArrayList<Object> listThisST;
//private ArrayList<Object> listThisST;
	
	public AppendixSumAccumAccessDataService(String case_type) throws Exception
	{
		searchCase(case_type);
	}
	public AppendixSumAccumAccessDataService(String case_type,String case2) throws Exception
	{
		searchCaseST(case_type);
	}
	
	
	private void searchCase(String case_type) throws Exception
	{
		//ยืมคลาส คนอื่นในการค้นหา เพราะ ต้องอิง ดาต้าหลักจากคลาสนี้
		AppendixVersionData Data = new AppendixVersionData();
		setListMedExam(Data.searchAppendixSumAccum(case_type));
	}

	private void setListMedExam(ArrayList<AppendixSumAccumAccessDataService> listdata) 
	{ 
		this.listThis = listdata;	
	}
	private void setListMedExamST(ArrayList<Object> listdata) 
	{ 
		this.listThisST = listdata;	
	}
	/**
	 * 
	 * @return ArrayList<Coverage : list Bean set Coverage
	 */
	public ArrayList<AppendixSumAccumAccessDataService> getListThis() 
	{
		return listThis;
	}
	public ArrayList<Object> getListST() 
	{
		return listThisST;
	}
	private void searchCaseST(String case_type) throws Exception
	{
		AppendixVersionData medExamData = new AppendixVersionData();
		setListMedExamST(medExamData.searchAppendixVersionST(case_type));

	}
	
}

