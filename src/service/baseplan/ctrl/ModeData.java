package service.baseplan.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.coverage.Mode;
import service.fnc.RtePath;
import service.fnc.RteResult;
public class ModeData  extends RteResult
{
	private final String RTE_PATH = RtePath.RTE.getValue();
	@SuppressWarnings("unchecked")
	public  ArrayList<Mode> searchMode(String cov_code) throws Exception 
	{
		setVal(RTE_PATH+".imp."+"RteModeS", new Object [] {"CON",new String [] {cov_code}});
		return (ArrayList<Mode>) executeResult().value();
	}
	
	public void insertMode(ArrayList<Mode> listMode) throws Exception 
	{
		boolean status = true;
		try {
			setVal(RTE_PATH+".imp."+"RteMode", new Object [] {listMode});
			saveData();
		} catch (Exception e) {
			status = false;
			throw e;
		}
		System.out.println("status >>> "+status);
	}
}
