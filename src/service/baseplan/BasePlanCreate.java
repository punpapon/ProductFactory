package service.baseplan;


import layout.bean.productfac.coverage.Coverage;
import service.center.CoverageCerate;
import service.fnc.ConstantValues;

public class BasePlanCreate 
{
	private Coverage coverage;
	public BasePlanCreate(String cat_code_L1,String cat_code_L2,String cat_code_L3) throws Exception
	{
		ConstantValues.CAT_GROUP    = "B";
		ConstantValues.COV_IND_CODE = "BASE_PLAN";
		CoverageCerate coverageCerate = new CoverageCerate(cat_code_L1, cat_code_L2, cat_code_L3);
		setCoverage(coverageCerate.getCoverage());
	}
	private void setCoverage(Coverage coverage) 
	{
		this.coverage = coverage;
	}

	/**
	 * @return the coverage
	 */
	public Coverage getCoverage() 
	{
		return coverage;
	}
	
//	public static void main(String[] args) 
//	{	
//		try {
//			BasePlanCreate dd = new BasePlanCreate("2","45", "53");
//			Coverage coverage = dd.getCoverage();
//			System.out.println("BasePlanCreate >>> "+coverage == null);
//			if(coverage != null)
//				System.out.println("cov_code next generate >>> "+coverage.getCov_code());
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//	}	
//	
}
