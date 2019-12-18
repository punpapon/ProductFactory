package service.baseplan.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.beanset.AgeBandAccessData;
import service.fnc.RtePath;
import service.fnc.RteResult;
import service.fnc.StatusCodeType;


public class AgeBandData extends RteResult
{
	private final String RTE_PATH = RtePath.RTE.getValue();
	public ArrayList<AgeBandAccessData> searchAgeBandAccessData() throws Exception
	{
		setVal(RTE_PATH+".RteAgeBandAccessData", new Object [] {"S",new Object [] {"ALL"}});
		ArrayList<AgeBandAccessData> listData = (ArrayList<AgeBandAccessData>) executeResult().value();
		if(listData.isEmpty())
			throw new Exception(StatusCodeType.NF.getValue());
		return listData;
	}
	
	/**
	 * For Print Data : AgeBandAccessData  : Bean Set
	 * @param AgeBandAccessData : Bean Set 
	 * 		- Age_band  				: getAgeBand()
	 * 		- ArrayList<Age_band_det>   : getListAgeBandDet()
	 * @throws Exception
	 */
	/*public void printData(ArrayList<AgeBandAccessData> datas) throws Exception
	{
		for(AgeBandAccessData accessData : datas)
		{
			Age_band ageBand 					= accessData.getAgeBand();
			System.out.println("Age_band "+ageBand.getAge_band_code());
			ArrayList<Age_band_det> listAgeBand = accessData.getListAgeBandDet();
			for(Age_band_det ageBandDet : listAgeBand)
			{
				System.out.println("\tmin_age "+ageBandDet.getMin_age()+" max_age "+ageBandDet.getMax_age());
			}
		}
	}*/
}
