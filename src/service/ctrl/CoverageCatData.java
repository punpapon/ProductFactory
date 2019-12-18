package service.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.beanset.CoverageCatAccessData;
import layout.bean.productfac.coverage.Coverage;
import layout.bean.productfac.coverage.Coverage_cat;
import layout.bean.productfac.lookup.File;
import layout.bean.productfac.product.Product;
import service.fnc.RteResult;
public class CoverageCatData extends RteResult
{
    /**
     *  search all data and group data lv1 > lv2 > lv3 
     * @return ArrayList<CoverageCatAccessData>  : list beanSet CoverageCatAccessData
     * @throws Exception
     */
	@SuppressWarnings("unchecked")
	public  ArrayList<CoverageCatAccessData> searchInsuranceType(String cat_group) throws Exception
	{
		setVal(RTE_PATH+".RteCoverageCatAccessData",new Object [] {"VAL1",cat_group});
		return (ArrayList<CoverageCatAccessData>) searchValuesResultData().value();	
	}
	
	@SuppressWarnings("unchecked")
	public ArrayList<String[]> searchCoverageCatLv3_ByCov_Code(String [] cat_group) throws Exception
	{
		setVal(RTE_PATH+".imp.RteCoverageCatS",new Object [] {"VAL0",cat_group});
		return (ArrayList<String[]>) searchValuesResultData().value();
	}
	
	@SuppressWarnings("unchecked")
	public ArrayList<Coverage_cat> searchCoverageCatLv3_ByPrd_Code(String [] cat_group) throws Exception
	{
		setVal(RTE_PATH+".imp.RteCoverageCatS",new Object [] {"VAL1",cat_group});
		return (ArrayList<Coverage_cat>) executeResult().value();
	}
	//Benz Get Cov_code
	@SuppressWarnings("unchecked")
	public ArrayList<Product> searchCov_code(String [] cat_group) throws Exception
	{
		setVal(RTE_PATH+".imp.RteCoverageCatS", new Object [] {"VAL2",cat_group});
		return (ArrayList<Product>) searchValuesResultData().value();
	}
	//Benz Get nameTH
	@SuppressWarnings("unchecked")
	public ArrayList<Coverage> searchnameTH(String [] cat_group) throws Exception
	{
		setVal(RTE_PATH+".imp.RteCoverageCatS", new Object [] {"VAL3",cat_group});
		return (ArrayList<Coverage>) searchValuesResultData().value();
	}
	
	
	//Benz Get File
	@SuppressWarnings("unchecked")
	public ArrayList<File> searchFile(String [] cat_group) throws Exception
	{
		setVal(RTE_PATH+".imp.RteCoverageCatS", new Object [] {"VAL4",cat_group});
		return (ArrayList<File>) searchValuesResultData().value();
	}
	/**
	 * Nara 13-06-2019
	 * @param cat_group
	 * @return
	 * @throws Exception
	 */
	public ArrayList<String []> searchCovCatId(String [] cat_group) throws Exception
	{
		setVal(RTE_PATH+".imp.RteCoverageCatS", new Object [] {"VAL5",cat_group});
		ArrayList<Coverage_cat> listCoverageCat = (ArrayList<Coverage_cat>) executeResult().value();
		ArrayList<String []> listData = new ArrayList<>();
		for(Coverage_cat coverage_cat  : listCoverageCat)
		{
			String cov_cat_id = Integer.toString(coverage_cat.getCov_cat_id());
			listData.add(new String [] {cov_cat_id,coverage_cat.getCat_code()});
		}
		return listData; 
	}
	////BEnz 09-09-2019 เพิ่ม Get Lv 1-3 ProductRider
	@SuppressWarnings("unchecked")
	public  ArrayList<CoverageCatAccessData> searchInsuranceTypePR(String cat_group) throws Exception
	{
		//Benz 17-10-2019
		setVal(RTE_PATH+".RteCoverageCatAccessData",new Object [] {"VAL1",cat_group});
		return (ArrayList<CoverageCatAccessData>) searchValuesResultData().value();	
	}
	///Benz Get Cat_Code 1-11-2019
	@SuppressWarnings("unchecked")
	public Coverage_cat searchCoverage_cat(String cov_cat_id) throws Exception
	{
		setVal(RTE_PATH+".imp.RteCoverageCatS", new Object [] {"VAL6",cov_cat_id});
		ArrayList<Coverage_cat> listCoverage_cat = (ArrayList<Coverage_cat>)executeResult().value();
		return listCoverage_cat.size() > 0 ? listCoverage_cat.get(0) : null;
		
	}
}
