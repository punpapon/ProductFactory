package service.clone;

import java.util.ArrayList;

import layout.bean.productfac.lookup.File;
import layout.bean.productfac.product.Rate_layout;
import service.ctrl.ProductCloneControlData;
import service.fnc.ConstantValues;

public class CloneProductFileUpload extends ProductCloneControlData 
{
	private String prd_code_old;
	private String prd_code_new;

	public void cloneProductRatelayout(String prd_code_old,String prd_code_new) throws Exception
	{
		this.prd_code_old = prd_code_old;
		this.prd_code_new = prd_code_new;
		ArrayList<Rate_layout>  listData = searchRateLayout(prd_code_old);
		if(listData.isEmpty())
		{
			System.out.println("file not upload of baseplan/rider");
		    return;
		}
		
		boolean status = cloneProductRatelayout(setFileInsert(listData),setRareLayout(listData));
		System.out.println("cloneProductRatelayout >>> "+(status));
	}
	
	private ArrayList<Rate_layout> setRareLayout(ArrayList<Rate_layout> listData) throws Exception
	{
		System.out.println("setRareLayout >>> ");
		ArrayList<Rate_layout>  listRateLIns = new ArrayList<>();
		for(Rate_layout rate_layout : listData)
		{
			rate_layout.setPrd_code(prd_code_new);
			listRateLIns.add(rate_layout);
		}
		return listRateLIns;
	}

	private ArrayList<File> setFileInsert(ArrayList<Rate_layout>  listData) throws Exception
	{
		System.out.println("setFileInsert >>> ");
		CloneFile cloneFile = new CloneFile();
		ArrayList<File> listFile = cloneFile.searchFileRateLayoutProduct(listData);		
		ConstantValues.COV_CODE = prd_code_new;
		ArrayList<Object []> listFileUp = cloneFile.uploadFile(cloneFile.downloadfile(listFile));
		
		ArrayList<File> listFileIns = new ArrayList<>();
		for(File file : listFile)
		{
			for(Object [] obj : listFileUp)
			{
				if(file.getFile_id() == (int)obj[0])
				{
					if(file.getFile_name().indexOf(prd_code_old) >= 0)
					{
						file.setFile_name(file.getFile_name().replaceAll(prd_code_old, prd_code_new));
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
