package service;

import java.util.ArrayList;

import layout.bean.productfac.beanset.CoverageCatAccessData;
import layout.bean.productfac.beanset.CoverageCovCat;
import layout.bean.productfac.beanset.CoverageMainCovCat;
import layout.bean.productfac.coverage.Coverage_cat;
import service.ctrl.CoverageCatData;

public class MainInsureTypeProductRiderService extends CoverageCatData
{
	/////////////////////////// Product Rider ///////////////////////////////////
	public ArrayList<CoverageCatAccessData> getmainPR_contract1(String cat_group) throws Exception
	{
		System.out.println("getmainPR_contract1 cat_group >>>> " + cat_group);
		return searchInsuranceTypePR(cat_group);
	}

	public ArrayList<CoverageMainCovCat> getmainPR_contract2(String cat_group, String cov_cat_id) throws Exception
	{
		System.out.println("getmainPR_contract2 cat_group >>>> " + cat_group);
		ArrayList<CoverageMainCovCat> data_return = new ArrayList<>();
		ArrayList<CoverageCatAccessData> main_contract2 = searchInsuranceTypePR(cat_group);
		for (int i = 0; i < main_contract2.size(); i++) 
		{
			CoverageCatAccessData cv = main_contract2.get(i);
			Coverage_cat coverage_cat = cv.getCoverageCat();
			if (coverage_cat.getCov_cat_id() == Integer.parseInt(cov_cat_id))
				data_return = cv.getListCoverageMainCovCat();
		}
		return data_return;
	}

	public ArrayList<CoverageCovCat> getmainPR_contract3(String cat_group, String type_lv1, String type_lv2)
			throws Exception
	{
		System.out.println("getmainPR_contract3 cat_group >>>> " + cat_group);
		ArrayList<CoverageCovCat> data_return =  new ArrayList<>();
		ArrayList<CoverageCatAccessData> main_contract3 = searchInsuranceTypePR(cat_group);
		for (CoverageCatAccessData cv : main_contract3) 
		{
			Coverage_cat coverage_cat = cv.getCoverageCat();
			if (coverage_cat.getCov_cat_id() == Integer.parseInt(type_lv1)) 
			{
				ArrayList<CoverageMainCovCat> mainCV = cv.getListCoverageMainCovCat();
				for (CoverageMainCovCat mainCovCat : mainCV) 
				{
					Coverage_cat coverageCat2 = mainCovCat.getCoverageCat();
					if (coverageCat2.getCov_cat_id() == Integer.parseInt(type_lv2)) {
						data_return = mainCovCat.getListCoverageCovCat();
					}
				}
			}
		}
		return data_return;
	}
}
