package service.underwrite.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.coverage.Coverage;
import layout.bean.productfac.underwrite.Med_exam;
import manit.rte.Result;
import service.fnc.RtePath;
import service.fnc.RteResult;

public class MedExamData {
	private RteResult rteResult;
	private final String RTE_PATH = RtePath.RTE.getValue();
	/**
	 * explain : ค้นหาข้อมูลทั้งหมด 
	 * @return ArrayList<Coverage> : coverage.coverage
	 * @throws Exception
	 */
	public ArrayList<Med_exam>  searchMedExam(String case_type) throws Exception
	{
		//System.out.println("-------------------------/"+case_type);
		Object [] param = new Object[] {"ALL", new String[] {case_type}};
		String rte      = RTE_PATH+".unw.RteUWMedExam";
		System.out.println(rte);
		this.rteResult = new RteResult(rte,param);
		Result result = rteResult.searchValuesResultData();
		ArrayList<Med_exam> listMedExam = (ArrayList<Med_exam>) result.value();
		return listMedExam;
	}
	
	public ArrayList<Object>  searchMedExamST(String case_type) throws Exception
	{
		//System.out.println("-------------------------/"+case_type);
		Object [] param = new Object[] {"ALL2", new String[] {case_type}};
		String rte      = RTE_PATH+".unw.RteUWMedExam";
		System.out.println(rte);
		this.rteResult = new RteResult(rte,param);
		Result result = rteResult.searchValuesResultData();
		ArrayList<Object> listMedExam = (ArrayList<Object>) result.value();
		return listMedExam;
	}
	public ArrayList<Med_exam>  searchMedExamGroup(String case_type) throws Exception
	{
		System.out.println("-------------------------/"+case_type);
		Object [] param = new Object[] {"GROUP", new String[] {case_type}};
		String rte      = RTE_PATH+".unw.RteUWMedExam";
		System.out.println(rte);
		this.rteResult = new RteResult(rte,param);
		Result result = rteResult.searchValuesResultData();
		ArrayList<Med_exam> listMedExam = (ArrayList<Med_exam>) result.value();
		return listMedExam;
	}
	public ArrayList<Med_exam>  searchMedExamGroupDetail(String case_type) throws Exception
	{
		System.out.println("-------------------------/"+case_type);
		Object [] param = new Object[] {"DETAIL", new String[] {case_type}};
		String rte      = RTE_PATH+".unw.RteUWMedExam";
		System.out.println(rte);
		this.rteResult = new RteResult(rte,param);
		Result result = rteResult.searchValuesResultData();
		ArrayList<Med_exam> listMedExam = (ArrayList<Med_exam>) result.value();
		return listMedExam;
	}
	public ArrayList<Med_exam>  searchMedExamBlood(String case_type) throws Exception
	{
		System.out.println("-------------------------/"+case_type);
		Object [] param = new Object[] {"BLOOD", new String[] {case_type}};
		String rte      = RTE_PATH+".unw.RteUWMedExam";
		System.out.println(rte);
		this.rteResult = new RteResult(rte,param);
		Result result = rteResult.searchValuesResultData();
		ArrayList<Med_exam> listMedExam = (ArrayList<Med_exam>) result.value();
		return listMedExam;
	}
	
	
}
