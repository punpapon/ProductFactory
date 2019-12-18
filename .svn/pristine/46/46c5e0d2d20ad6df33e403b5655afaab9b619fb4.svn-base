package service.baseplan.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.benefit.Benefit;
import service.fnc.RtePath;
import service.fnc.RteResult;
import service.fnc.StatusCodeType;

public class BenefitDisability extends RteResult
{
	private final String RTE_PATH = RtePath.RTE.getValue();
	public ArrayList<Benefit> searchBenefitDisabilityAccessData() throws Exception
	{
		setVal(RTE_PATH+".RteBenefitDisability", new Object [] {"S",new Object [] {"ALL"}});
		ArrayList<Benefit> listData = (ArrayList<Benefit>) executeResult().value();
		if(listData.isEmpty())
			throw new Exception(StatusCodeType.NF.getValue());
		return listData;
	}
		
	/*public void printData(ArrayList<Benefit> listBenefit) 
	{
		System.out.println("BenefitDisability printData >>> ");
		try {
			for(Benefit benefit : listBenefit)
			{
				System.out.println(benefit.getBnf_code()+" "+benefit.getName_th()+"  "+benefit.getName_en());
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}*/
}
