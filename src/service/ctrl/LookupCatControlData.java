package service.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.beanset.LookupCatAccessData;
import service.fnc.RteResult;
import service.fnc.StatusCodeType;
public class LookupCatControlData extends RteResult
{
	@SuppressWarnings("unchecked")
	public ArrayList<LookupCatAccessData> searchLookupCat() throws Exception
	{
		setVal(RTE_PATH+".RteLookupCatAccessData", new Object[] { "S", new Object[] { "ALL" } });
		ArrayList<LookupCatAccessData> listLookupCatAccessData = (ArrayList<LookupCatAccessData>) executeResult().value();
		if(listLookupCatAccessData.isEmpty())
			throw new Exception(StatusCodeType.NF.getValue());
		//printData(listLookupCatAccessData);
		return listLookupCatAccessData;
	}
	
	/*private void printData(ArrayList<LookupCatAccessData> listLookupCatAccessData) throws Exception 
	{
		for (LookupCatAccessData data :listLookupCatAccessData) 
		{
			Lookup_cat lookup_cat = data.getLookupCat();
			System.out.println("-------------------------- " + lookup_cat.getLookup_cat_id() + "|"+ lookup_cat.getName_th() + "|" + lookup_cat.getEnum_name());
			ArrayList<Lookup_value> listValue = data.getListLookupValue();
			for (Lookup_value value : listValue) {
				System.out.println(">>> " + value.getName_th() + "|" + value.getName_en());
			}
		}	
	}*/
}
