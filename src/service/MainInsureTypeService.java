package service;

import java.util.ArrayList;
import layout.bean.productfac.beanset.CoverageCatAccessData;
import layout.bean.productfac.beanset.CoverageCovCat;
import layout.bean.productfac.beanset.CoverageMainCovCat;
import layout.bean.productfac.coverage.Coverage_cat;
import service.ctrl.CoverageCatData;

public class MainInsureTypeService extends CoverageCatData
{
	public ArrayList<CoverageCatAccessData> getmain_contract1(String cat_group) throws Exception
	{
		System.out.println("getmain_contract1 cat_group >>>> " + cat_group);
		return searchInsuranceTypePR(cat_group);
	}

	public ArrayList<CoverageMainCovCat> getmain_contract2(String cat_group, String cov_cat_id) throws Exception
	{
		System.out.println("getmain_contract2 cat_group >>>> " + cat_group);
		ArrayList<CoverageMainCovCat> data_return = new ArrayList<>();
		ArrayList<CoverageCatAccessData> main_contract = searchInsuranceTypePR(cat_group);
		for(CoverageCatAccessData accessData : main_contract) 
		{
			Coverage_cat coverage_cat = accessData.getCoverageCat();
			if (coverage_cat.getCov_cat_id() == Integer.parseInt(cov_cat_id))
				data_return = accessData.getListCoverageMainCovCat();
		}
		return data_return;
	}

	public ArrayList<CoverageCovCat> getmain_contract3(String cat_group, String type_lv1, String type_lv2)	throws Exception
	{
		System.out.println("getmain_contract3 cat_group >>>> " + cat_group);
		ArrayList<CoverageCovCat> data_return = null;
		ArrayList<CoverageCatAccessData> main_contract = searchInsuranceTypePR(cat_group);				
		for (CoverageCatAccessData cv : main_contract) 
		{
			Coverage_cat coverage_cat = cv.getCoverageCat();
			if (coverage_cat.getCov_cat_id() == Integer.parseInt(type_lv1)) 
			{
				ArrayList<CoverageMainCovCat> mainCV = cv.getListCoverageMainCovCat();
				for (CoverageMainCovCat mainCovCat : mainCV) {
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
