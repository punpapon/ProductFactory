package service.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.lookup.File;
import service.fnc.RtePath;
import service.fnc.RteResult;

public class FileControlData extends RteResult
{
	private final String RTE_PATH = RtePath.RTE.getValue();
	
	public File searchFileValue(String file_id) throws Exception
	{
		setVal(RTE_PATH+".lookup.RteSearchFile", new Object [] {"VAL1",file_id});
		return (File) executeResult().value();
	}
	
	public ArrayList<File> searchALLFile() throws Exception
	{
		setVal( RTE_PATH+".lookup.RteSearchFile", new Object [] {"VAL2",new Object[] {}});
		return (ArrayList<File>)executeResult().value();
	}
	
	public ArrayList<File> searchFile(int [] file_id) throws Exception
	{
		setVal(RTE_PATH+".lookup.RteSearchFile", new Object [] {"VAL3",file_id});
		return (ArrayList<File>) executeResult().value();
	}
	
	public File saveFile(File file) throws Exception
	{
		setVal(RTE_PATH+".lookup.RteFile",new Object [] {file});
		File fileR =  (File) executeResult().value();
		System.out.println("return id >>> "+fileR.getFile_id());
		return fileR;
	}
}
