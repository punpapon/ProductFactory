package service.product.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.product.Occ;
import service.fnc.RteResult;

public class OccControlData extends RteResult 
{
	@SuppressWarnings("unchecked")
	public ArrayList<Occ> searchProductOcc(String prd_code) throws Exception
	{
		setVal(RTE_PATH+".imp."+"RteProductOccS", new Object [] {"VAL1",prd_code});
		return (ArrayList<Occ>)executeResult().value();
	}
	
	public void insertProductOcc(ArrayList<Occ> listOcc) throws Exception 
	{
		setVal(RTE_PATH+".imp."+"RteProductOcc", new Object [] {listOcc});
		saveDataResult();
	}
}
