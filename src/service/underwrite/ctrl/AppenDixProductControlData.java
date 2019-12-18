package service.underwrite.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.product.Occ;
import layout.bean.productfac.product.Unw_cocredit_limit;
import layout.bean.productfac.underwrite.Appendix;
import layout.bean.productfac.underwrite.Appendix_product;
import service.fnc.ConstantValues;
import service.fnc.RtePath;
import service.fnc.RteResult;

public class AppenDixProductControlData 
{
	private RteResult rteResult;
	private final String RTE_PATH = RtePath.RTE.getValue();
	
	public ArrayList<Appendix_product> searchAppenDixProduct(String prd_code) throws Exception
	{
		Object [] param = new Object [] {"VAL1",prd_code}; 
		this.rteResult = new RteResult(RTE_PATH+".unw."+"RteUnderwrteAppenDixProductS", param);
		return (ArrayList<Appendix_product>) rteResult.searchValuesResultData().value();
	}
	
	public void insertAppenDixProduct(ArrayList<Appendix_product> listAppenDixProduct) throws Exception 
	{
		boolean status = true;
		try {
			Object [] param = new Object [] {ConstantValues.PRD_CODE,listAppenDixProduct}; 
			this.rteResult = new RteResult(RTE_PATH+".unw."+"RteUnderwrteAppenDixProduct", param);
			rteResult.saveData();
		} catch (Exception e) {
			status = false;
			throw e;
		}
		System.out.println("status >>> "+status);
	}
	public void insertAppenDixProduct2(ArrayList<Appendix_product> listAppenDixProduct) throws Exception 
	{
		boolean status = true;
		try {
			Object [] param = new Object [] {"INSERT",listAppenDixProduct}; 
			this.rteResult = new RteResult(RTE_PATH+".unw."+"RteUnderwrteAppenDixProductIU", param);
			rteResult.saveData();
		} catch (Exception e) {
			status = false;
			throw e;
		}
		System.out.println("status >>> "+status);
	}
}
