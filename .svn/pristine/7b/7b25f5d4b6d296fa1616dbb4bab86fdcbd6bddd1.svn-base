package service.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.product.Product;
import layout.bean.productfac.product.Rider;
import service.fnc.ConstantValues;
import service.fnc.RteResult;

public class ProductData extends RteResult
{
	/**
	 * explain : ค้นหาข้อมูลทั้งหมด 
	 * @return ArrayList<Product> : product.product
	 * @throws Exception
	 */
	public ArrayList<Product> searchMainInsurance() throws Exception
	{
		setVal(RTE_PATH+".imp.RteProductS", new Object[] {"ALL"});
		return (ArrayList<Product>)searchValuesResultData().value();
	}
	
	@SuppressWarnings("unchecked")
	public Product searchProduct(String cov_code) throws Exception
	{
		setVal(RTE_PATH+".imp.RteProductS", new Object [] {"KEY",cov_code});
		ArrayList<Product> listCoverage = (ArrayList<Product>)searchValuesResultData().value();
		return listCoverage.size() > 0 ? listCoverage.get(0) : null;
	}
	
	public Product saveProductData(String process,Product product,Rider rider) throws Exception
	{
		setVal(RTE_PATH+".imp.RteProductCreate", new Object [] {process,product,rider});
		return  (Product)saveValuesResultData().value();
	}
	
	public void productDetract(String [] prd_rider_code) throws Exception
	{
		System.out.println("productDetract >>> ");
		setVal(RTE_PATH+".imp.RteProductDetract", new Object [] {ConstantValues.PRD_CODE,prd_rider_code});
		saveDataResultStatus();
	}
	
	public ArrayList<Product> searchAllProduct() throws Exception
	{
		setVal(RTE_PATH+".imp.RteProductS", new Object[] {"KEY5"});
		return (ArrayList<Product>)searchValuesResultData().value();
	}
	
	public void insertProduct(Product product) throws Exception
	{
		System.out.println("insertProduct >>> ");
		setVal(RTE_PATH+".product.RteProduct", new Object [] {"VAL1",product});
		saveDataResultStatus();
	}
	
	// PUN FIX 6/9/2019
	public ArrayList<Product> searchMainInsurance_riderAll() throws Exception
	{
		setVal(RTE_PATH+".product.RteSearchProductRider", new Object[] {"ALL"});
		return (ArrayList<Product>)searchValuesResultData().value();
	}
	// PUN FIX 4/10/2019
	public ArrayList<Product> searchMainInsurance_byRider() throws Exception
	{
		setVal(RTE_PATH+".imp.RteProductS", new Object[] {"ALL_RIDER"});
		return (ArrayList<Product>)searchValuesResultData().value();
	}
	// Benz searchProductByCovCode 04-11-2019
	public Product searchProductByCovCode(String cov_code) throws Exception
	{
		setVal(RTE_PATH+".imp.RteProductS", new Object [] {"KEY4",cov_code});
		ArrayList<Product> listCoverage = (ArrayList<Product>)searchValuesResultData().value();
		return listCoverage.size() > 0 ? listCoverage.get(0) : null;
	}
	//Benz searchProduct 08-11-2019
	public Product searchRidercodeByKey(String prdcode) throws Exception
	{
		setVal(RTE_PATH+".imp.RteProductS", new Object [] {"KEY2",prdcode});
		ArrayList<Product> listCoverage = (ArrayList<Product>)searchValuesResultData().value();
		return listCoverage.size() > 0 ? listCoverage.get(0) : null;
	}
}
