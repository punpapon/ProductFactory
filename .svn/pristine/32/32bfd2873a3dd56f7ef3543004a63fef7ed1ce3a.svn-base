package service;

import java.util.ArrayList;
import layout.bean.productfac.coverage.Coverage;
import layout.bean.productfac.product.Product;
import service.ctrl.CoverageData;
import service.ctrl.ProductData;

public class MainInsuranceService
{
	// Coverage
	public ArrayList<Coverage> GetCaseAll(String case_type) throws Exception
	{
		return new CoverageData().searchMainInsurance(case_type);
	}

	//Prodct
	public ArrayList<Product> GetCaseProduct() throws Exception
	{
		return new ProductData().searchMainInsurance();
	}

	// Product Rider
	public ArrayList<Product> GetCaseProductRider() throws Exception
	{
		return new ProductData().searchMainInsurance_riderAll();	
	}
}
