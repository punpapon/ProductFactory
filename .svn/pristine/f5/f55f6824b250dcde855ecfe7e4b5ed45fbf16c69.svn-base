package service.rider;

import java.util.ArrayList;

import layout.bean.productfac.coverage.Coverage;
import layout.bean.productfac.coverage.Endorse;
import service.rider.ctrl.EndorseControlData;

public class EndorseData extends EndorseControlData
{
	/**
	 * 
	 * @return Object [0] :  BASE_PLAN/Rider
	 *         Object [1] :  ArrayList for set to table from type [0]  
	 * @throws Exception
	 */
	public ArrayList<Object[]> searchEndorseData() throws Exception
	{
		return super.searchEndorseData();
	}
	
	/**
	 * Include Endorse of Product
	 */
	public ArrayList<Coverage> searchEndorseData(String cov_code) throws Exception
	{
		return super.searchEndorseData(cov_code);
	}
	
	public ArrayList<Coverage> searchBasePlanEndorse() throws Exception
	{
		return searchCoverageEndorse("BASE_PLAN");
	}
	
	public ArrayList<Coverage> searchRiderEndorse() throws Exception
	{
		return searchCoverageEndorse("Rider");
	}
	
	public void doEndorse(ArrayList<Endorse> listEndorse) throws Exception
	{
		insertEndorse(listEndorse);
	}
}
