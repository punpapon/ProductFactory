package service.clone;

import java.util.ArrayList;

import layout.bean.productfac.beanset.DocumentAcessData;
import layout.bean.productfac.coverage.Document;
import layout.bean.productfac.lookup.File;
import service.ctrl.PolicyWordingControlData;
import service.fnc.ConstantValues;
import utility.productfac.DateTimeFnc;

public class ClonePolicyWording extends PolicyWordingControlData
{
	public void clonePolicyWording(String cov_code_old,String cov_code_new) throws Exception
	{
		ArrayList<DocumentAcessData> listClone = new ArrayList<>();
		for(DocumentAcessData acessData : searchPolicyWordingByCovCode(cov_code_old))
		{
			listClone.add(setDataClone(cov_code_new,acessData.getDocument(),acessData.getListFile()));
		}
		super.clonePolcyWording(listClone);
	}

	private DocumentAcessData setDataClone(String cov_code_new,Document document, ArrayList<File> listFile) throws Exception
	{
		DocumentAcessData acessData = new DocumentAcessData();
		boolean isExirsFile = true;
		document.setCov_code(cov_code_new);
		//document.setPdf_file_id(pdf_file_id);
		//document.setDoc_file_id(doc_file_id);
		document.setUpdate_time(DateTimeFnc.currentTimeStamp());
		document.setUser_code(ConstantValues.USER_CODE);
		acessData.setDocument(document);
		
		if(listFile.isEmpty())
		{
			isExirsFile = false;
			acessData.setListFile(listFile);
		}
		if(isExirsFile)
		{
			int [] file_id = new int[listFile.size()];
			int i =0;
			for(File file : listFile)
			{
				file_id[i] = file.getFile_id();
				i++;
			}
			acessData.setListFile(setFileInsert(file_id,document));
		}
        return acessData;
	}

	private ArrayList<File> setFileInsert(int [] file_id,Document document) throws Exception
	{
		CloneFile cloneFile = new CloneFile();
		ArrayList<File> list = new ArrayList<>();
		ArrayList<File> listFile = cloneFile.searchFile(file_id);
		for(File file : listFile)
		{
			if(document.getDoc_file_id() == file.getFile_id()) //1
			{
				byte [] f = cloneFile.downloadfile(file.getFile_url());
				String ref = cloneFile.uploadFile(f);
				file.setFile_url(ref);
				list.add(file);
			}
			else if(document.getPdf_file_id() == file.getFile_id()) //2
			{
				byte [] f = cloneFile.downloadfile(file.getFile_url());
				String ref = cloneFile.uploadFile(f);
				file.setFile_url(ref);
				list.add(file);
			}
			
		}
		return list;
	}

}
