package service.center;

import java.util.ArrayList;

import layout.bean.productfac.beanset.LookupPremAssumpRateAccessData;
import layout.bean.productfac.beanset.PremAssumpRateAcessData;
import layout.bean.productfac.coverage.Prem_assump_rate;
import service.ctrl.PremAssumpRateControlData;

public class PremAssumpRateData extends PremAssumpRateControlData
{
	/**
	 * 
	 * @param listPremAssumpRate : ArrayList > Prem_assump_rate 
	 * @throws Exception
	 */
	public void doPremAssumpRate(ArrayList<Prem_assump_rate> listPremAssumpRate) throws Exception
	{
		insertremAssumpRate(listPremAssumpRate);
	}
	
	/**
	 * 
	 * @param cov_code
	 * @throws Exception
	 */
	public ArrayList<Prem_assump_rate> searchPremAssumpRate(String cov_code) throws Exception {
		return super.searchCoveragePremAssumpRate(cov_code);
	}
	
	/**
	 * 
	 * @param lookup.prem_assump_rate
	 * @throws Exception
	 */
	public void doLookupPremAssumpRateOL(layout.bean.productfac.lookup.Prem_assump_rate prem_assump_rate) throws Exception
	{
		insertLookupPremAssumpRateOL(prem_assump_rate);
	}

	/**
	 * @param gender : use from lu_gender
	 * @param prem_assump_type : lu_prem_assump_type
	 * @throws Exception
	 */
	public ArrayList<layout.bean.productfac.lookup.Prem_assump_rate> searchLookupPremAssumpRate(String gender, String prem_assump_type) throws Exception
	{
		return super.searchLookupPremAssumpRate(gender, prem_assump_type);
	}
	
	/**
	 * @param  : String prem_assump_rate_id
	 * @return : ArrayList > layout.bean.productfac.lookup.Prem_assump_rate
	 */
	public ArrayList<layout.bean.productfac.lookup.Prem_assump_rate> searchLookupPremAssumpRateByKey(String prem_assump_rate_id) throws Exception
	{
		return super.searchLookupPremAssumpRateByKey(prem_assump_rate_id);
	}
	
	/**
	 * @return : ArrayList > PremAssumpRateAcessData
	 */
	public ArrayList<ArrayList<PremAssumpRateAcessData>> searchLookupPremAssumpRate() throws Exception
	{
		return super.searchLookupPremAssumpRate();
	}
	
	/**
	 * @param   : String gender, String prem_assump_type
	 * @return  : ArrayList<LookupPremAssumpRateAccessData>  > LookupPremAssumpRateAccessData
	 * 
	 */
	public ArrayList<LookupPremAssumpRateAccessData> searchLookupPremAssumpRateOL(String gender, String prem_assump_type) throws Exception
	{
		return super.searchLookupPremAssumpRateOL(gender, prem_assump_type);
	}
}
