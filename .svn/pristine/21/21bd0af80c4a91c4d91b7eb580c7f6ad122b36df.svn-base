package service.clone;

import java.util.ArrayList;

import layout.bean.productfac.coverage.Rate_layout;
import layout.bean.productfac.lookup.File;
import service.ctrl.ProductCloneControlData;
import service.fnc.ConstantValues;

public class CloneCoverageFileUpload extends ProductCloneControlData
{
	private String cov_code_old;
	private String cov_code_new;

	public void cloneCoverageRatelayout(String cov_code_old,String cov_code_new) throws Exception
	{
		this.cov_code_old = cov_code_old;
		this.cov_code_new = cov_code_new;
		ArrayList<Rate_layout>  listData = searchRateLayoutCoverage(cov_code_old);
		if(listData.isEmpty())
		{
			System.out.println("file not upload of baseplan/rider");
		    return;
		}		
		boolean status = cloneCoverageRatelayout(setFileInsert(listData),setRareLayout(listData));
		System.out.println("cloneProductRatelayout >>> "+(status));
	}

	private ArrayList<Rate_layout> setRareLayout(ArrayList<Rate_layout> listData) throws Exception
	{
		System.out.println("setRareLayout >>> ");
		ArrayList<Rate_layout>  listRateLIns = new ArrayList<>();
		for(Rate_layout rate_layout : listData)
		{
			rate_layout.setCov_code(cov_code_new);
			listRateLIns.add(rate_layout);
		}
		return listRateLIns;
	}

	private ArrayList<File> setFileInsert(ArrayList<Rate_layout>  listData) throws Exception
	{
		System.out.println("setFileInsert >>> ");
		CloneFile cloneFile = new CloneFile();
		ArrayList<File> listFile = cloneFile.searchFileRateLayoutCoverage(listData);		
		ConstantValues.COV_CODE = cov_code_new;
		ArrayList<Object []> listFileUp = cloneFile.uploadFile(cloneFile.downloadfile(listFile));
		
		ArrayList<File> listFileIns = new ArrayList<>();
		for(File file : listFile)
		{
			for(Object [] obj : listFileUp)
			{
				if(file.getFile_id() == (int)obj[0])
				{
					if(file.getFile_name().indexOf(cov_code_old) >= 0)
					{
						file.setFile_name(file.getFile_name().replaceAll(cov_code_old, cov_code_new));
					}
					file.setFile_url((String)obj[1]);
					listFileIns.add(file);
					break;
				}
			}
		}
		return listFileIns;
	}
}
