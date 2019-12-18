package service.rider.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.benefit.Benefit_cat;
import service.fnc.ConstantValues;
import service.fnc.RteResult;
import service.fnc.StatusCodeType;

public class BenefitCat extends RteResult
{
	@SuppressWarnings("unchecked")
	public ArrayList<Benefit_cat> searchBenefitDisabilityAccessData() throws Exception
	{
		setVal(RTE_PATH + ".RteBenefitCatAccessData", new Object[] { "ALL" });
		ArrayList<Benefit_cat> listData = (ArrayList<Benefit_cat>) executeResult().value();
		if (listData.isEmpty())
			throw new Exception(StatusCodeType.NF.getValue());
		return listData;
	}
	
	@SuppressWarnings("unchecked")
	public ArrayList<Benefit_cat> searchBenefitByCovCatId() throws Exception
	{
		setVal(RTE_PATH+".lookup."+"RteSearchBenfit", new Object[] {"VAL1",ConstantValues.COV_CAT_ID });
		ArrayList<Benefit_cat> listData = (ArrayList<Benefit_cat>) executeResult().value();
		if (listData.isEmpty())
			throw new Exception(StatusCodeType.NF.getValue());
		return listData;
	}

	/*public void printData(ArrayList<Benefit_cat> listBenefitcat)
	{
		System.out.println("Benefit printData >>> ");
		try {
			for (Benefit_cat benefitCat : listBenefitcat) {
				System.out.println(benefitCat.getBnf_cat_code() + " " + benefitCat.getName_th());
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}*/
}
