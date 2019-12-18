package service.ctrl;

import manit.rte.Result;
import service.fnc.RtePath;
import service.fnc.RteResult;

public class JSONImplementControlDataUW {
	private final String RTE_PATH = RtePath.RTE.getValue();
	public void genJSON_UW(String[]  arr_para)  throws Exception
	{
		System.out.println("==============================================");
		try {
			Result result = new RteResult(RTE_PATH+".RteGetUWMedExamJSON", arr_para).executeResult();
			System.out.println("result value "+result.value());
		} catch (Exception e) {
			throw e;
		}
		// "";
	}
	
	public static void main(String[] args) throws Exception
	{	
		new JSONImplementControlDataUW().genJSON_UW(new String [] {"M"});
	}
}
