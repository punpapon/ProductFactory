package service.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.coverage.Coverage;
import layout.bean.productfac.view.View_category;
import service.fnc.RteResult;
public class CoverageData  extends RteResult
{
	/**
	 * explain : ค้นหาข้อมูลทั้งหมด 
	 * @return ArrayList<Coverage> : coverage.coverage
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public ArrayList<Coverage>  searchMainInsurance(String case_type) throws Exception
	{
		String case_type2 = case_type.equals("RIDER") ? "ENDORSE" : "";
		setVal(RTE_PATH+".imp.RtecoverageS", new Object[] {"IND", new String[] {case_type,case_type2}});
		return (ArrayList<Coverage>) executeResult().value();
	}
	
	@SuppressWarnings("unchecked")
	public Coverage searchCoverage(String cov_code) throws Exception
	{
		setVal(RTE_PATH+".imp.RtecoverageS", new Object [] {"KEY",cov_code});
		ArrayList<Coverage> listCoverage = (ArrayList<Coverage>)executeResult().value();
		return listCoverage.size() > 0 ? listCoverage.get(0) : null; 
	}
	
	public Coverage saveCoverage(String doProcess, Coverage coverage) throws Exception
	{
		setVal(RTE_PATH+".imp.RteCoverageCreate", new Object [] {doProcess,coverage});
		return (Coverage)executeResult().value();
	}
	
	/**
	 * process : C = coverage,P = product
	 * สำหรับ set OL/CL 
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public ArrayList<View_category> searchCategory(String process,String code) throws Exception
	{
		String val = process.equals("C") ? "VAL1" : "VAL2"; 
		setVal(RTE_PATH+".view.RteViewCategory", new Object [] {val,code});
		return (ArrayList<View_category>)executeResult().value();
	}
}
