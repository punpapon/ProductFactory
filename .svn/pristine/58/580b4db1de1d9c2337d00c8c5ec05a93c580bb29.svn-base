package service.product.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.product.Product;
import layout.bean.productfac.product.Rider;
import service.fnc.ConstantValues;
import service.fnc.RteResult;

public class ProductControlData  extends RteResult
{
	@SuppressWarnings("unchecked")
	public  ArrayList<Product> searchProduct(String  prd_code) throws Exception 
	{
		setVal(RTE_PATH+".imp."+"RteProductS", new Object [] {"KEY",prd_code});
		return (ArrayList<Product>)executeResult().value();
	}
	@SuppressWarnings("unchecked")
	public  ArrayList<Rider> searchProductRider(String prd_code) throws Exception 
	{
		setVal(RTE_PATH+".imp."+"RteProductRiderS",new Object [] {"KEY",new String[] {prd_code}});
		return (ArrayList<Rider>)executeResult().value();
	}
	
	@SuppressWarnings("unchecked")
	public  ArrayList<Rider> searchProductRider_Participant(String prd_code) throws Exception 
	{
		setVal(RTE_PATH+".imp."+"RteProductRiderS", new Object [] {"KEY3",new String[] {prd_code}});
		return (ArrayList<Rider>)executeResult().value();
	}
	
	
	@SuppressWarnings("unchecked")
	public  ArrayList<Product> searchRidercode(String ridercode) throws Exception 
	{
		setVal(RTE_PATH+".imp."+"RteProductS", new Object [] {"KEY2",ridercode});
		return (ArrayList<Product>)executeResult().value();
	}
	
	@SuppressWarnings("unchecked")
	public ArrayList<String[]> searchProductData(String[] prd_rider_code) throws Exception 
	{
		setVal(RTE_PATH+".imp."+"RteProductS", new Object [] {"KEY3",prd_rider_code});
		return (ArrayList<String[]>)executeResult().value();
	}
	/**
	 * Support for Coverage Rider
	 * @param prd_code
	 */
	@SuppressWarnings("unchecked")
	public  ArrayList<Product> searchProductByCovCode(String  cov_code) throws Exception 
	{
		setVal(RTE_PATH+".imp."+"RteProductS",new Object [] {"KEY4",cov_code});
		return (ArrayList<Product>)executeResult().value();
	}
	//insertProductRider (PB) Benz 07-10-2019
	public void insertProductRider(ArrayList<Rider> listProductRider) throws Exception
	{
		setVal(RTE_PATH+".imp.RteProductRider", new Object [] {listProductRider});
		saveDataResult();
	}
	//search product.rider by prd_rider_code
	@SuppressWarnings("unchecked")
	public ArrayList<Rider> searchProductRiderByPrdCode(String prd_rider_code ) throws Exception
	{
		setVal(RTE_PATH+".imp."+"RteProductRiderS", new Object [] {"KEY2",new String[] {ConstantValues.PRD_CODE,prd_rider_code}});
		return (ArrayList<Rider>)executeResult().value();
	}
}
