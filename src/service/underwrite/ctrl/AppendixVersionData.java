package service.underwrite.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.lookup.View_appendix_product;
import layout.bean.productfac.underwrite.Appendix_version;
import layout.bean.productfac.underwrite.Txn_appendix_version;
import manit.rte.Result;
import service.fnc.RtePath;
import service.fnc.RteResult;
import service.underwrite.AppendixSumAccumAccessDataService;

public class AppendixVersionData {
	private RteResult rteResult;
	private final String RTE_PATH = RtePath.RTE.getValue();
	/**
	 * explain : ค้นหาข้อมูลทั้งหมด 
	 * @return ArrayList<Coverage> : coverage.coverage
	 * @throws Exception
	 */
	public ArrayList<Appendix_version>  searchMedExam(String case_type) throws Exception
	{
		//System.out.println("-------------------------/"+case_type);
		Object [] param = new Object[] {"ALL", new String[] {case_type}};
		String rte      = RTE_PATH+".unw.RteUWAppendixVersion";
		System.out.println(rte);
		this.rteResult = new RteResult(rte,param);
		Result result = rteResult.searchValuesResultData();
		ArrayList<Appendix_version> list = (ArrayList<Appendix_version>) result.value();
		return list;
	}
	
	
	public ArrayList<Object>  searchAppendixVersionST(String case_type) throws Exception
	{
		//System.out.println("-------------------------/"+case_type);
		Object [] param = new Object[] {"ALL2", new String[] {case_type}};
		String rte      = RTE_PATH+".unw.RteUWAppendixVersion";
		System.out.println(rte);
		this.rteResult = new RteResult(rte,param);
		Result result = rteResult.searchValuesResultData();
		ArrayList<Object> list = (ArrayList<Object>) result.value();
		return list;
	}
	public ArrayList<Object>  searchAppendixVersionST2(String app_code,String Ver_id) throws Exception
	{
		//System.out.println("-------------------------/"+case_type);
		Object [] param = new Object[] {"ALL4", new String[] {app_code,Ver_id}};
		String rte      = RTE_PATH+".unw.RteUWAppendixVersion";
		System.out.println(rte);
		this.rteResult = new RteResult(rte,param);
		Result result = rteResult.searchValuesResultData();
		ArrayList<Object> list = (ArrayList<Object>) result.value();
		return list;
	}
	public ArrayList<Appendix_version>  searchAppendixVersionST2BEAN(String app_code,String Ver_id) throws Exception
	{
		//System.out.println("-------------------------/"+case_type);
		Object [] param = new Object[] {"ALL4BEAN", new String[] {app_code,Ver_id}};
		String rte      = RTE_PATH+".unw.RteUWAppendixVersion";
		System.out.println(rte);
		this.rteResult = new RteResult(rte,param);
		Result result = rteResult.searchValuesResultData();
		ArrayList<Appendix_version> list = (ArrayList<Appendix_version>) result.value();
		return list;
	}
	public ArrayList<Txn_appendix_version>  searchAppendixVersionST2BEANTxn(String app_code,String Ver_id) throws Exception
	{
		//System.out.println("-------------------------/"+case_type);
		Object [] param = new Object[] {"ALL4BEANTxn", new String[] {app_code,Ver_id}};
		String rte      = RTE_PATH+".unw.RteUWAppendixVersion";
		System.out.println(rte);
		this.rteResult = new RteResult(rte,param);
		Result result = rteResult.searchValuesResultData();
		ArrayList<Txn_appendix_version> list = (ArrayList<Txn_appendix_version>) result.value();
		return list;
	}
	public ArrayList<Object>  searchAppendixVersionST2KEY(String app_code,String Ver_id) throws Exception
	{
		//System.out.println("-------------------------/"+case_type);
		Object [] param = new Object[] {"ALL4KEY", new String[] {app_code,Ver_id}};
		String rte      = RTE_PATH+".unw.RteUWAppendixVersion";
		System.out.println(rte);
		this.rteResult = new RteResult(rte,param);
		Result result = rteResult.searchValuesResultData();
		ArrayList<Object> list = (ArrayList<Object>) result.value();
		return list;
	}
	public ArrayList<Object>  searchAppendixVersionST2MAX(String app_code,String Ver_id) throws Exception
	{
		//System.out.println("-------------------------/"+case_type);
		Object [] param = new Object[] {"MAX", new String[] {app_code,Ver_id}};
		String rte      = RTE_PATH+".unw.RteUWAppendixVersion";
		System.out.println(rte);
		this.rteResult = new RteResult(rte,param);
		Result result = rteResult.searchValuesResultData();
		ArrayList<Object> list = (ArrayList<Object>) result.value();
		return list;
	}
	public ArrayList<Object>  searchAppendixVersionST2MAX() throws Exception
	{
		//System.out.println("-------------------------/"+case_type);
		Object [] param = new Object[] {"MaxExamGroupCode", new String[] {"",""}};
		String rte      = RTE_PATH+".unw.RteUWAppendixVersion";
		System.out.println(rte);
		this.rteResult = new RteResult(rte,param);
		Result result = rteResult.searchValuesResultData();
		ArrayList<Object> list = (ArrayList<Object>) result.value();
		return list;
	}
	public ArrayList<View_appendix_product>  searchAppendixVersionProductST(String[] arr) throws Exception
	{
		//System.out.println("-------------------------/"+case_type);
		Object [] param = new Object[] {"PRODUCT", arr};
		String rte      = RTE_PATH+".view.RteView_appendix_product";
		System.out.println(rte);
		this.rteResult = new RteResult(rte,param);
		Result result = rteResult.searchValuesResultData();
		ArrayList<View_appendix_product> list = (ArrayList<View_appendix_product>) result.value();
		return list;
	}
	public ArrayList<View_appendix_product>  searchAppendixVersionProductTxn_id(String[] arr) throws Exception
	{
		//System.out.println("-------------------------/"+case_type);
		Object [] param = new Object[] {"Txn_id", arr};
		String rte      = RTE_PATH+".view.RteView_appendix_product";
		System.out.println(rte);
		this.rteResult = new RteResult(rte,param);
		Result result = rteResult.searchValuesResultData();
		ArrayList<View_appendix_product> list = (ArrayList<View_appendix_product>) result.value();
		return list;
	}
	public ArrayList<Object>  searchFilterST(String case_type,String Appendix_code) throws Exception
	{
		//System.out.println("-------------------------/"+case_type);
		Object [] param = new Object[] {"S", new String[] {Appendix_code}};
		String rte      = RTE_PATH+".unw.RteView_appendix_product";
		System.out.println(rte);
		this.rteResult = new RteResult(rte,param);
		Result result = rteResult.searchValuesResultData();
		ArrayList<Object> list = (ArrayList<Object>) result.value();
		return list;
	}
	public ArrayList<View_appendix_product>  searchFilterST2(String case_type,String Appendix_code,String Version_id) throws Exception
	{
		//System.out.println("-------------------------/"+case_type);
		Object [] param = new Object[] {"S", new String[] {Appendix_code,Version_id}};
		String rte      = RTE_PATH+".view.RteView_appendix_product";
		System.out.println(rte);
		this.rteResult = new RteResult(rte,param);
		Result result = rteResult.searchValuesResultData();
		ArrayList<View_appendix_product> list = (ArrayList<View_appendix_product>) result.value();
		return list;
	}
	public ArrayList<View_appendix_product>  searchFilterST3(String case_type,String Appendix_code,String Version_id,String Txn_id) throws Exception
	{
		//System.out.println("-------------------------/"+case_type);
		Object [] param = new Object[] {"STXN", new String[] {Appendix_code,Version_id,Txn_id}};
		String rte      = RTE_PATH+".view.RteView_appendix_product";
		System.out.println(rte);
		this.rteResult = new RteResult(rte,param);
		Result result = rteResult.searchValuesResultData();
		ArrayList<View_appendix_product> list = (ArrayList<View_appendix_product>) result.value();
		return list;
	}
	public ArrayList<Appendix_version>  searchAppendixVersionPD(String case_type) throws Exception
	{
		//System.out.println("-------------------------/"+case_type);
		Object [] param = new Object[] {"PRODUCT", new String[] {case_type}};
		String rte      = RTE_PATH+".unw.RteUWAppendixVersion";
		System.out.println(rte);
		this.rteResult = new RteResult(rte,param);
		Result result = rteResult.searchValuesResultData();
		ArrayList<Appendix_version> list = (ArrayList<Appendix_version>) result.value();
		return list;
	}
	public ArrayList<Appendix_version>  searchAppendixVersionPDV02(String case_type) throws Exception
	{
		//System.out.println("-------------------------/"+case_type);
		Object [] param = new Object[] {"PRODUCT2", new String[] {case_type}};
		String rte      = RTE_PATH+".unw.RteUWAppendixVersion";
		System.out.println(rte);
		this.rteResult = new RteResult(rte,param);
		Result result = rteResult.searchValuesResultData();
		ArrayList<Appendix_version> list = (ArrayList<Appendix_version>) result.value();
		return list;
	}
	public ArrayList<Appendix_version>  searchAppendixVersionMax(String case_type) throws Exception
	{
		//System.out.println("-------------------------/"+case_type);
		Object [] param = new Object[] {"MAX", new String[] {case_type}};
		String rte      = RTE_PATH+".unw.RteUWAppendixVersion";
		System.out.println(rte);
		this.rteResult = new RteResult(rte,param);
		Result result = rteResult.searchValuesResultData();
		ArrayList<Appendix_version> list = (ArrayList<Appendix_version>) result.value();
		return list;
	}
	public ArrayList<AppendixSumAccumAccessDataService>  searchAppendixSumAccum(String case_type) throws Exception
	{
		//System.out.println("-------------------------/"+case_type);
		Object [] param = new Object[] {"ALL3", new String[] {case_type}};
		String rte      = RTE_PATH+".unw.RteUWAppendixVersion";
		System.out.println(rte);
		this.rteResult = new RteResult(rte,param);
		Result result = rteResult.searchValuesResultData();
		ArrayList<AppendixSumAccumAccessDataService> list = (ArrayList<AppendixSumAccumAccessDataService>) result.value();
		return list;
	}
	public ArrayList<Appendix_version>  searchMedExamGroup(String case_type) throws Exception
	{
		System.out.println("-------------------------/"+case_type);
		Object [] param = new Object[] {"GROUP", new String[] {case_type}};
		String rte      = RTE_PATH+".unw.RteUWAppendixVersion";
		System.out.println(rte);
		this.rteResult = new RteResult(rte,param);
		Result result = rteResult.searchValuesResultData();
		ArrayList<Appendix_version> list = (ArrayList<Appendix_version>) result.value();
		return list;
	}
	public ArrayList<Appendix_version>  searchMedExamGroupDetail(String case_type) throws Exception
	{
		System.out.println("-------------------------/"+case_type);
		Object [] param = new Object[] {"DETAIL", new String[] {case_type}};
		String rte      = RTE_PATH+".unw.RteUWAppendixVersion";
		System.out.println(rte);
		this.rteResult = new RteResult(rte,param);
		Result result = rteResult.searchValuesResultData();
		ArrayList<Appendix_version> list = (ArrayList<Appendix_version>) result.value();
		return list;
	}
	public ArrayList<Appendix_version>  searchMedExamBlood(String case_type) throws Exception
	{
		System.out.println("-------------------------/"+case_type);
		Object [] param = new Object[] {"BLOOD", new String[] {case_type}};
		String rte      = RTE_PATH+".unw.RteUWAppendixVersion";
		System.out.println(rte);
		this.rteResult = new RteResult(rte,param);
		Result result = rteResult.searchValuesResultData();
		ArrayList<Appendix_version> list = (ArrayList<Appendix_version>) result.value();
		return list;
	}
	
	
}