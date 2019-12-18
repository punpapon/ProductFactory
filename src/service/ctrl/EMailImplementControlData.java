package service.ctrl;


import java.util.ArrayList;

import manit.rte.Result;
import service.fnc.RtePath;
import service.fnc.RteResult;

public class EMailImplementControlData
{
	private final String RTE_PATH = RtePath.RTE.getValue();
	public void SendMail(ArrayList<Object> listObject)  throws Exception
	{
		try {
			Result result = new RteResult(RTE_PATH+".RteSendMail",listObject).executeResult();
			//Result result = new RteResult(RTE_PATH+".CallRunTime", new Object [] {listObject}).executeResult();
			System.out.println("SendMail result value "+result.value());
		} catch (Exception e) {
			throw e;
		}
	}
}
