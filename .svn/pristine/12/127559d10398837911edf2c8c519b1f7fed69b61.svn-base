package service.center;

import java.util.ArrayList;

import layout.bean.productfac.lookup.Nonforf_rate;
import service.ctrl.NonforfRateControlData;

public class NonforfRateData extends NonforfRateControlData
{
	/**
	 * 
	 * @return ArrayList >  NonforfRateAccessData
	 * @throws Exception
	 */
	public Object [] searchNonforfRateRPU() throws Exception
	{
		return searchNonforfRate("RPU");
	}
	
	/**
	 * 
	 * @return ArrayList > NonforfRateAccessData
	 * @throws Exception
	 */
	public Object [] searchNonforfRateEIT() throws Exception
	{
		return searchNonforfRate("ETI");
	}
	
	/**
	 * 
	 * @param ArrayList > Nonforf_rate
	 * @throws Exception
	 */
	public ArrayList<Nonforf_rate> insertsearchNonforfRate(ArrayList<Nonforf_rate> listNonforfRate) throws Exception
	{
		return insertNonforfRate(listNonforfRate);
	}
	
	/**
	 * @param  String nonforf_rate_id
	 * @return ArrayList > Nonforf_rate
	 */
	public ArrayList<Nonforf_rate> searchNonforfRateByNonforfRateId(String nonforf_rate_id) throws Exception
	{
		return super.searchNonforfRateByNonforfRateId(nonforf_rate_id);
	}
}
