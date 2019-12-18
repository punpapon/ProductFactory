package service.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.beanset.LookupValueGroupAccessData;
import service.fnc.RteResult;

public class LookupValueGroupControlData extends RteResult
{
	@SuppressWarnings("unchecked")
	public ArrayList<LookupValueGroupAccessData> searchLookupValueGroup() throws Exception
	{
		setVal(RTE_PATH+".lookup.RteSearchLookupValueGroup",new Object[] { "VAL1"});
		return (ArrayList<LookupValueGroupAccessData>)executeResult().value();
	}
}
