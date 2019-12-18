package service.baseplan.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.coverage.Benefit_period_det;
import service.fnc.RtePath;
import service.fnc.RteResult;

public class BenefitPeriodDetData extends RteResult
{
	private RteResult rteResult;
	private final String RTE_PATH = RtePath.RTE.getValue();
	public void insertBenefitPeriodDet(ArrayList<Benefit_period_det> listBenefitPeriodDet) throws Exception 
	{
		boolean status = true;
		try {
			Object [] param = new Object [] {listBenefitPeriodDet}; 
			this.rteResult = new RteResult(RTE_PATH+".imp."+"RteBenefitPeriodDet", param);
			rteResult.saveData();
		} catch (Exception e) {
			status = false;
			throw e;
		}
		System.out.println("status >>> "+status);
	}
	
	//Pun 13-12-2019
	/**
	 * ค้นหาข้อมูล Benefit_period_det of coverage 
	 * @param cov_code
	 * @return
	 * @throws Exception
	 */
	public ArrayList<Benefit_period_det> searchCoverageBenefitPeriodDet(String cov_code) throws Exception 
	{
		setVal(RTE_PATH+".imp."+"RteBenefitPeriodDetS", new Object [] {"CON",new String [] {cov_code}});
		return (ArrayList<Benefit_period_det>) executeResult().value();
	}
}
