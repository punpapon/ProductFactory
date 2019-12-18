package service.baseplan.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.coverage.Age_calc_meth;
import service.fnc.RtePath;
import service.fnc.RteResult;
public class AgeCalcMethData extends RteResult
{
	private final String RTE_PATH = RtePath.RTE.getValue();
	public void insertAgeCalMeth(ArrayList<Age_calc_meth> listAgeCalMeth) throws Exception 
	{
		boolean status = true;
		try {
			setVal(RTE_PATH+".imp."+"RteAgeCalMeth", new Object [] {listAgeCalMeth});
			status = (boolean) executeResult().value();
		} catch (Exception e) {
			status = false;
			throw e;
		}
		System.out.println("status >>> "+status);
	}
	
	//Pun 13-12-2019
	/**
	 * ค้นหาข้อมูล Age_calc_meth of coverage 
	 * @param cov_code
	 * @return
	 * @throws Exception
	 */
	public ArrayList<Age_calc_meth> searchCoverageAgeCalMeth(String cov_code) throws Exception 
	{
		setVal(RTE_PATH+".imp."+"RteAgeCalMethS", new Object [] {"CON",new String [] {cov_code}});
		return (ArrayList<Age_calc_meth>) executeResult().value();
	}
}
