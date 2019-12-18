package service.rider;


import layout.bean.productfac.coverage.Coverage;
import service.center.CoverageCerate;
import service.fnc.ConstantValues;

public class RiderCreate 
{
	private Coverage coverage;
	public RiderCreate(String cat_code_L1,String cat_code_L2,String cat_code_L3) throws Exception
	{
		if (cat_code_L1.equals("6")) {
			ConstantValues.CAT_GROUP    = "E";
			ConstantValues.COV_IND_CODE = "ENDORSE";
		}else {
			ConstantValues.CAT_GROUP    = "R";
			ConstantValues.COV_IND_CODE = "RIDER";
		}
		
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
	
	/*public static void main(String[] args) 
	{	
		try {
			RiderCreate dd = new RiderCreate("2","45", "53","");
			Coverage coverage = dd.getCoverage();
			System.out.println("BasePlanCreate >>> "+coverage == null);
			if(coverage != null)
				System.out.println("cov_code next generate >>> "+coverage.getCov_code());
		} catch (Exception e) {
			e.printStackTrace();
		}
	}*/	
	
}
