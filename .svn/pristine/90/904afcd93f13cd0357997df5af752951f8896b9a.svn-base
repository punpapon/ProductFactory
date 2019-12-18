package service.center;

import java.util.ArrayList;

import layout.bean.productfac.coverage.Coverage;
import layout.bean.productfac.view.View_category;
import service.ctrl.CoverageData;

public class MainInsurance
{
	private ArrayList<Coverage> listCoverage;

	/**
	 * 
	 * @param case_type : BASE_PLAN.RIDER
	 * @throws Exception
	 */
	public MainInsurance(String case_type) throws Exception
	{
		searchMainInsurance(case_type);
	}
	public MainInsurance()
	{
	}

	private void searchMainInsurance(String case_type) throws Exception
	{
		setListCoverage(new CoverageData().searchMainInsurance(case_type));
	}

	private void setListCoverage(ArrayList<Coverage> listCoverage)
	{
		this.listCoverage = listCoverage;
	}
	
	public ArrayList<Coverage> getListCoverage()
	{
		return listCoverage;
	}
	
	public ArrayList<View_category> searchCategory(String cov_code) throws Exception
	{
		return new CoverageData().searchCategory("C",cov_code);
	}
	
	public ArrayList<View_category> searchCategoryProduct(String prd_code) throws Exception
	{
		return new CoverageData().searchCategory("P",prd_code);
	}
}
