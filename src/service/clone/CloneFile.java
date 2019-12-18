package service.clone;

import java.nio.file.Files;
import java.util.ArrayList;
import java.util.Base64;

import layout.bean.productfac.lookup.File;
import layout.bean.productfac.product.Rate_layout;
import manit.M;
import service.center.FileImplement;
import service.center.Uploadfile;
import service.ctrl.FileControlData;
import utility.productfac.DateTimeFnc;
import utility.support.DateInfo;

public class CloneFile extends FileControlData
{
	public ArrayList<Object []>  downloadfile(ArrayList<File> listFile) throws Exception
	{
		ArrayList<Object []> listFileRt = new ArrayList<>();
		Uploadfile uploadfile = new Uploadfile();
		for(File file : listFile)
		{
			uploadfile.downloadFile(file.getFile_url());
			String path = uploadfile.getPath();
			java.io.File file_io = new java.io.File(path);
			byte [] encoded = Base64.getEncoder().encode(Files.readAllBytes(file_io.toPath()));
			listFileRt.add(new Object [] {file.getFile_id(),encoded});
		}
		return listFileRt;
	}
	
	public byte [] downloadfile(String file_url) throws Exception
	{
		Uploadfile uploadfile = new Uploadfile();
		uploadfile.downloadFile(file_url);
		String path = uploadfile.getPath();
		java.io.File file_io = new java.io.File(path);
		return Base64.getEncoder().encode(Files.readAllBytes(file_io.toPath()));
	}
	
	public ArrayList<File> searchFileRateLayoutProduct(ArrayList<Rate_layout> listData) throws Exception
	{
		int [] file = new int [listData.size()];
		for (int i = 0; i < listData.size(); i++) 
			file[i] =  listData.get(i).getFile_id();
		return searchFile(file);
	}
	
	public ArrayList<File> searchFileRateLayoutCoverage(ArrayList<layout.bean.productfac.coverage.Rate_layout> listData) throws Exception
	{
		int [] file = new int [listData.size()];
		for (int i = 0; i < listData.size(); i++) 
			file[i] =  listData.get(i).getFile_id();
		return searchFile(file);
	}
	
	public ArrayList<Object []> uploadFile(ArrayList<Object[]> listFile) throws Exception
	{
		ArrayList<Object []> listUp = new ArrayList<>();
		FileImplement fileIm = new FileImplement();
		for(Object [] obj : listFile)
		{
			String file_name = "3_"+getData()+"_"+getTime()+".txt";
			byte [] byte_file = (byte [])obj[1];
			String ref = fileIm.uploadTXT(byte_file, file_name);
			listUp.add(new Object [] {obj[0],ref});
		}		
		return listUp;
	}
	
	public String uploadFile(byte [] byte_file) throws Exception
	{
		FileImplement fileIm = new FileImplement();
		String file_name = "3_"+getData()+"_"+getTime()+".txt";
		return fileIm.uploadTXT(byte_file, file_name);
	}
	private String getData() throws Exception
	{
		String date =  DateTimeFnc.getSqlDate(DateInfo.sysDate()).toString();
		return date.replaceAll(date.substring(0, 4), M.subnum(date.substring(0, 4), "543"));
	}

	private String getTime()
	{
		return M.addnum(DateInfo.sysTime(0),"1");
	}

}
