package service.baseplan.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.beanset.RateCatAccessData;
import service.fnc.RtePath;
import service.fnc.RteResult;
import service.fnc.StatusCodeType;

public class RateCatData extends RteResult
{
	private final String RTE_PATH = RtePath.RTE.getValue();

	public ArrayList<RateCatAccessData> searchInsuranceType(String [] str) throws Exception
	{
		setVal(RTE_PATH+".RteRateCatAcessData", new Object [] {"S",new Object [] {"VAL1",str}});
		ArrayList<RateCatAccessData> listRateCatAccessData  = (ArrayList<RateCatAccessData>) executeResult().value();
		if (listRateCatAccessData.isEmpty())
			throw new Exception(StatusCodeType.NF.getValue());
		return listRateCatAccessData;
	}

	/*private void printTest(ArrayList<RateCatAccessData> listRateCatAccessData) throws Exception
	{
		for (RateCatAccessData accessData : listRateCatAccessData) {
			for (Rate_sub_cat rate_sub_cat : accessData.getListRateSubCat()) {
				System.out.println("rate_sub_cat " + rate_sub_cat.getRate_cat_id() + " " + rate_sub_cat.getName_th());
			}
		}
	}*/
}