package service.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.lookup.Nonforf_rate;
import service.fnc.RteResult;

public class NonforfRateControlData extends RteResult
{
	public Object [] searchNonforfRate(String nonforf_prov) throws Exception
	{
		setVal(RTE_PATH+".lookup.RteSearchNonforfRate",new Object [] {"VAL1",nonforf_prov});
		return  (Object[])executeResult().value();
	}
	
	public ArrayList<Nonforf_rate> searchNonforfRateByNonforfRateId(String nonforf_rate_id) throws Exception
	{
		setVal(RTE_PATH+".lookup.RteSearchNonforfRate",new Object [] {"VAL2",nonforf_rate_id});
		return  (ArrayList<Nonforf_rate>)executeResult().value();
	}
	
	public ArrayList<Nonforf_rate>  insertNonforfRate(ArrayList<Nonforf_rate> listNonforfRate)  throws Exception
	{
		setVal(RTE_PATH+".lookup.RteNonforfRate", new Object [] {listNonforfRate});
		return (ArrayList<Nonforf_rate>) executeResult().value();
	}
}
