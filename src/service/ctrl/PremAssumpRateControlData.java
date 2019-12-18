package service.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.beanset.LookupPremAssumpRateAccessData;
import layout.bean.productfac.beanset.PremAssumpRateAcessData;
import layout.bean.productfac.beanset.PremAssumpRateGroupAccessData;
import layout.bean.productfac.coverage.Prem_assump_rate;
import service.fnc.ConstantRateCatIDValues;
import service.fnc.ConstantValues;
import service.fnc.RteResult;

public class PremAssumpRateControlData extends RteResult
{
	public void insertremAssumpRate(ArrayList<Prem_assump_rate> listPremAssumpRate) throws Exception
	{
		setVal(RTE_PATH+".coverage.RtePremAssumpRate", new Object [] {ConstantValues.COV_CODE,listPremAssumpRate});
		saveDataResult();
	}
	
	//Pun 13-12-2019
	/**
	 * ค้นหาข้อมูล Prem_assump_rate of coverage 
	 * @param cov_code
	 * @return
	 * @throws Exception
	 */
	public ArrayList<Prem_assump_rate> searchCoveragePremAssumpRate(String cov_code) throws Exception 
	{
		setVal(RTE_PATH+".coverage."+"RteSearchPremAssumpRate", new Object [] {"VAL2",new String [] {cov_code}});
		return (ArrayList<Prem_assump_rate>) executeResult().value();
	}
	/**
	 * 
	 * @param gender : use from lu_gender
	 * @param prem_assump_type : lu_prem_assump_type
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public ArrayList<layout.bean.productfac.lookup.Prem_assump_rate> searchLookupPremAssumpRate(String gender, String prem_assump_type) throws Exception
	{
		setVal(RTE_PATH+".lookup.RtePremAssumpRate", new Object [] {gender,prem_assump_type});
		return  (ArrayList<layout.bean.productfac.lookup.Prem_assump_rate>) executeResult().value();
	}

	/**
	 * prem_assump_type of CL : "MORTALITY","DISABILITY" (only)
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public ArrayList<ArrayList<PremAssumpRateAcessData>> searchLookupPremAssumpRate() throws Exception
	{
		setVal(RTE_PATH+".RtePremAssumpRateAccessData", new Object [] {ConstantValues.COV_CODE});
		return  (ArrayList<ArrayList<PremAssumpRateAcessData>>)executeResult().value();  
	}
	
	@SuppressWarnings("unchecked")
	public ArrayList<LookupPremAssumpRateAccessData> searchLookupPremAssumpRateOL(String gender, String prem_assump_type) throws Exception
	{
		setVal(RTE_PATH+".lookup.RteSearchPremAssumpRateOL",new Object [] {gender,prem_assump_type});
		return  (ArrayList<LookupPremAssumpRateAccessData>)executeResult().value();
	}

	public void insertLookupPremAssumpRateOL(layout.bean.productfac.lookup.Prem_assump_rate prem_assump_rate) throws Exception
	{
		setVal(RTE_PATH+".lookup.RtePremAssumpRateOL", new Object [] {prem_assump_rate});
		saveDataResultStatus();
	}
	
	@SuppressWarnings("unchecked")
	public ArrayList<layout.bean.productfac.lookup.Prem_assump_rate> searchLookupPremAssumpRateByKey(String prem_assump_id) throws Exception
	{
		setVal(RTE_PATH+".lookup.RteSearchPremAssumpRate", new Object [] {"VAL1",prem_assump_id});
		return  (ArrayList<layout.bean.productfac.lookup.Prem_assump_rate>)executeResult().value();
	}
	
	@SuppressWarnings("unchecked")
	public ArrayList<PremAssumpRateGroupAccessData> searchLookupPremAssumpRateGroup() throws Exception
	{
		setVal(RTE_PATH+".lookup.RtePremAssumpRateGroup",new Object [] {"VAL1",ConstantRateCatIDValues.getPremAssumpRateOl()});
		return  (ArrayList<PremAssumpRateGroupAccessData>)executeResult().value();
	}
}
