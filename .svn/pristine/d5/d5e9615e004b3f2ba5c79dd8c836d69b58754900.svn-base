package service.product.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.product.Mode;
import service.fnc.RteResult;

public class ModeControlData extends RteResult
{
	@SuppressWarnings("unchecked")
	public ArrayList<Mode> searchProductMode(String prd_code) throws Exception
	{
		setVal(RTE_PATH+".imp."+"RteProductModeS", new Object [] {"VAL1", prd_code});
		return (ArrayList<Mode>)executeResult().value();
	}
	
	public void insertProductMode(ArrayList<Mode> listMode) throws Exception 
	{
		setVal(RTE_PATH+".imp."+"RteProductMode", new Object [] {listMode});
		saveDataResult();
	}
}
