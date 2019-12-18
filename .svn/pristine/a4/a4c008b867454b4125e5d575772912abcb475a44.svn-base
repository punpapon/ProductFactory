package service.underwrite;

import java.util.ArrayList;

import layout.bean.productfac.underwrite.Appendix_sum_accum;
import layout.bean.productfac.underwrite.Med_exam;
import layout.bean.productfac.underwrite.Policy_status_accum;
import layout.bean.productfac.underwrite.Txn_policy_status_accum;
import service.underwrite.ctrl.AppenDixControlData;
import service.underwrite.ctrl.MedExamControlData;
import service.underwrite.ctrl.PolicyStatusAccumControlData;
import service.underwrite.ctrl.PolicyStatusAccumData;

public class PolicyStatusAccumAccessData {
public PolicyStatusAccumAccessData() {} 
private ArrayList<Policy_status_accum> listThis;
private ArrayList<Txn_policy_status_accum> listThisTxn;
	public PolicyStatusAccumAccessData(String case_type) throws Exception
	{
		searchTable(case_type);
	}
	public PolicyStatusAccumAccessData(String case_type,String a) throws Exception
	{
		searchTableTxn(case_type);
	}
	
	private void searchTable(String case_type) throws Exception
	{
		PolicyStatusAccumData Data = new PolicyStatusAccumData();
		setList(Data.searchGroup(case_type));
	}
	private void searchTableTxn(String case_type) throws Exception
	{
		PolicyStatusAccumData Data = new PolicyStatusAccumData();
		setListTxn(Data.searchGroupTxn(case_type));
	}
	private void setList(ArrayList<Policy_status_accum> listdata) 
	{ 
		this.listThis = listdata;	
	}
	
	private void setListTxn(ArrayList<Txn_policy_status_accum> listdata) 
	{ 
		this.listThisTxn = listdata;	
	}
	/**
	 * 
	 * @return ArrayList<Coverage : list Bean set Coverage
	 */
	public ArrayList<Policy_status_accum> getList() 
	{
		return listThis;
	}
	public ArrayList<Txn_policy_status_accum> getListTxn() 
	{
		return listThisTxn;
	}
	public void doPolicyStatus(ArrayList<Policy_status_accum> Med_exam) throws Exception
	{
		System.out.println("doPolicyStatus >>> ");
		PolicyStatusAccumControlData noteData = new PolicyStatusAccumControlData();
		noteData.insert(Med_exam);
	}
	public void doPolicyStatusTxn(ArrayList<Txn_policy_status_accum> Med_exam) throws Exception
	{
		System.out.println("doPolicyStatusTxn >>> ");
		PolicyStatusAccumControlData noteData = new PolicyStatusAccumControlData();
		noteData.insertTxn(Med_exam);
	}
}