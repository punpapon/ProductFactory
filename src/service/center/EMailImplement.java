package service.center;

import java.util.ArrayList;

import service.ctrl.EMailImplementControlData;

public class EMailImplement extends EMailImplementControlData
{
	public void sendEmail(ArrayList<Object> listObject) throws Exception
	{
		
		
		super.SendMail(listObject); 
	}
}
