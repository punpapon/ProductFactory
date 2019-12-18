package service.baseplan.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.coverage.Premium_period;
import service.fnc.ConstantValues;
import service.fnc.RtePath;
import service.fnc.RteResult;

public class PremiumPeriodData extends RteResult
{
	private final String RTE_PATH = RtePath.RTE.getValue();
	public void insertPremiumPeriod(ArrayList<Premium_period> listPremiumPeriod) throws Exception 
	{
		boolean status = true;
		try {
			Object [] param = new Object [] {ConstantValues.COV_CODE,listPremiumPeriod};
			String rte = RTE_PATH+".coverage."+"RtePremiumPeriod";
			setVal(rte, param);;
			status = (boolean) executeResult().value();
		} catch (Exception e) {
			status = false;
			throw e;
		}
		System.out.println("status >>> "+status);
	}
	
	//Pun 13-12-2019
	/**
	 * ค้นหาข้อมูล PremiumPeriod of coverage 
	 * @param cov_code
	 * @return
	 * @throws Exception
	 */
	public ArrayList<Premium_period> searchCoveragePremiumPeriod(String cov_code) throws Exception 
	{
		setVal(RTE_PATH+".coverage."+"RtePremiumPeriodS", new Object [] {"CON",new String [] {cov_code}});
		return (ArrayList<Premium_period>) executeResult().value();
	}
}
