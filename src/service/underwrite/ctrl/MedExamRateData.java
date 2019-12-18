package service.underwrite.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.coverage.Coverage;
import layout.bean.productfac.underwrite.Med_exam;
import layout.bean.productfac.underwrite.Med_exam_rate;
import manit.rte.Result;
import service.fnc.RtePath;
import service.fnc.RteResult;

public class MedExamRateData {
private RteResult rteResult;
private final String RTE_PATH = RtePath.RTE.getValue();
/**
 * explain : ค้นหาข้อมูลทั้งหมด 
 * @return ArrayList<Coverage> : coverage.coverage
 * @throws Exception
 */
public ArrayList<Med_exam_rate>  searchMedExam(String case_type) throws Exception
{
	System.out.println("-------------------------/"+case_type);
	Object [] param = new Object[] {"CON", new String[] {case_type}};
	String rte      = RTE_PATH+".imp.RteUWMedExam";
	System.out.println(rte);
	this.rteResult = new RteResult(rte,param);
	Result result = rteResult.searchValuesResultData();
	ArrayList<Med_exam_rate> listMedExam = (ArrayList<Med_exam_rate>) result.value();
	return listMedExam;
}

public Med_exam_rate  searchMedExamOne(String case_type) throws Exception
{
	System.out.println("-------------------------/"+case_type);
	Object [] param = new Object[] {"CON", new String[] {case_type}};
	String rte      = RTE_PATH+".imp.RteUWMedExamRate";
	System.out.println(rte);
	this.rteResult = new RteResult(rte,param);
	Result result = rteResult.searchValuesResultData();
	Med_exam_rate listMedExam = (Med_exam_rate) result.value();
	return listMedExam;
}

public Coverage searchCoverage(String cov_code) throws Exception
{
	Object [] param = new Object [] {"KEY",cov_code};
	String rte      = RTE_PATH+".imp.RtecoverageS";
	this.rteResult = new RteResult(rte,param);
	Result result = rteResult.searchValuesResultData();
	ArrayList<Coverage> listCoverage = (ArrayList<Coverage>) result.value();
	return listCoverage.get(0);
}

public Coverage saveCoverage(String doProcess, Coverage coverage) throws Exception
{
	try {
		Object [] param = new Object [] {doProcess,coverage};
		String rte      = RTE_PATH+".imp.RteCoverageCreate";
		this.rteResult = new RteResult(rte,param);
		Result result =  rteResult.saveValuesResultData();
		coverage = (Coverage) result.value();
	} catch (Exception e) {
		throw e;
	}
	return coverage;
}
}