package service.ctrl;

import manit.rte.Result;
import service.fnc.RtePath;
import service.fnc.RteResult;

public class JSONImplementControlData {
	private final String RTE_PATH = RtePath.RTE.getValue();
	public void genJSON(String [] arr_email)  throws Exception
	{
		System.out.println("==============================================");
		try {
			//Result result = new RteResult(RTE_PATH+".RteSendMail", arr_email).executeResult();
			Result result = new RteResult(RTE_PATH+".RteJsonProduct", arr_email).executeResult();
			System.out.println("result value "+result.value());
		} catch (Exception e) {
			throw e;
		}
		// "";
	}
	
	public static void main(String[] args) throws Exception
	{	

		//new JSONImplementControlData().genJSON(new String [] {"GL_CL_MRT_P_1305","GL_CL_MRT_B_1117","5"});
		
		new JSONImplementControlData().genJSON(new String [] {"GL_CL_MRT_P_1150","GL_CL_MRT_B_0857","5"});
	}
}
