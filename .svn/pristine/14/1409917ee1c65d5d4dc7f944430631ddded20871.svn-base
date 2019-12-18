package service.baseplan.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.coverage.Benefit_period;
import service.fnc.RtePath;
import service.fnc.RteResult;
public class BenefitPeriodData extends RteResult
{
	private RteResult rteResult;
	private final String RTE_PATH = RtePath.RTE.getValue();
	public void insertBenefitPeriod(ArrayList<Benefit_period> listBenefitPeriod) throws Exception 
	{
		boolean status = true;
		try {
			Object [] param = new Object [] {listBenefitPeriod}; 
			this.rteResult = new RteResult(RTE_PATH+".imp."+"RteBenefitPeriod", param);
			rteResult.saveData();
		} catch (Exception e) {
			status = false;
			throw e;
		}
		System.out.println("status >>> "+status);
	}
	
	//Pun 13-12-2019
	/**
	 * ค้นหาข้อมูล Benefit_period of coverage 
	 * @param cov_code
	 * @return
	 * @throws Exception
	 */
	public ArrayList<Benefit_period> searchCoverageBenefitPeriod(String cov_code) throws Exception 
	{
		setVal(RTE_PATH+".imp."+"RteBenefitPeriodS", new Object [] {"CON",new String [] {cov_code}});
		return (ArrayList<Benefit_period>) executeResult().value();
	}
}
