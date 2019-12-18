package service.center;

import java.util.ArrayList;

import layout.bean.productfac.lookup.File;
import service.ctrl.PolicyWordingControlData;
import service.fnc.ConstantValues;

public class FileImplement extends PolicyWordingControlData
{

	/** 
	 * @param file_path
	 * @return reference file on alfresco
	 * @throws Exception
	 */
	public String uploadPolcyWording(String file_path) throws Exception
	{
		Uploadfile uploadfile = new Uploadfile(file_path);
		uploadfile.uploadFile("PolicyWording", ConstantValues.COV_CODE);
		return uploadfile.getRefFile();
	}

	public String uploadPolcyWording(byte[] bytes, String file_name) throws Exception
	{
		Uploadfile uploadfile = new Uploadfile(bytes, file_name);
		uploadfile.uploadFile("PolicyWording", ConstantValues.COV_CODE);
		return uploadfile.getRefFile();
	}

	public String uploadTXT(byte[] bytes, String file_name) throws Exception
	{
		Uploadfile uploadfile = new Uploadfile(bytes, file_name);
		uploadfile.uploadFile("TXT", ConstantValues.COV_CODE);
		return uploadfile.getRefFile();
	}
	
	public ArrayList<File> searchPolicyWordingFilePDF() throws Exception
	{
		return searchPolicyWordingFileType(2);
	}
	
	public ArrayList<File> searchPolicyWordingFileDOC() throws Exception
	{
		return searchPolicyWordingFileType(1);
	}
}
