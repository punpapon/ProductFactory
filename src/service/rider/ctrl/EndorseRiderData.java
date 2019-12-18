package service.rider.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.benefit.Benefit;
import layout.bean.productfac.coverage.Benefit_item;
import manit.rte.Result;
import service.fnc.RteResult;
import service.fnc.StatusCodeType;

public class EndorseRiderData  extends RteResult
{
	
	/**
	 * เลือรายการบันทึก สลักหลัง
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public ArrayList<Benefit> searchBenefitRiderEndorse() throws Exception
	{
		setVal(RTE_PATH+".imp.RteBenefitS", new Object [] {"VAL2"});
		ArrayList<Benefit> listData = (ArrayList<Benefit>) executeResult().value();
		if(listData.isEmpty())
			throw new Exception(StatusCodeType.NF.getValue());
		return listData;
	}
	/**
	 * 
	 * @param cov_code
	 * @return ArrayList : (0) = coverage.benefit_item,(1)...(n) = benefit.benefit
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public ArrayList searchBenefitItemEndorse(String cov_code) throws Exception
	{
		setVal(RTE_PATH+".imp.RteBenefitItemEndorseS", new Object [] {"VAL1",cov_code});
		ArrayList listData = (ArrayList) executeResult().value();
//		if(listData.isEmpty())
//			throw new Exception(StatusCodeType.NF.getValue());
		return listData;
	}
	
	/**
	 * Endorse of Rider 
	 * @param BenefitItem ,listBenefitItem
	 * @throws Exception
	 */
	public void insertEndorseRider(Benefit_item benefitItem,ArrayList<Benefit_item> listBenefitItem) throws Exception
	{
		setVal(RTE_PATH+".imp.RteBenefitRiderEndorse", new Object [] {benefitItem,listBenefitItem});
		Result result = executeResult();
		if(result.status() > 0)
			throw new Exception((String)result.value());
		if(result.status()  < 0)
			throw (Exception)result.value();
	}
}
