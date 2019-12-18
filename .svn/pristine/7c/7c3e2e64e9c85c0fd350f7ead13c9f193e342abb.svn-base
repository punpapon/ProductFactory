package service.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.beanset.LookupCatValueAcessData;
import service.fnc.RteResult;

/**
 * 
 * @author Nara : 24-04-2019
 *
 */
public class LookupCatValueData extends RteResult 
{
	@SuppressWarnings("unchecked")
	public ArrayList<LookupCatValueAcessData> searchLookupCatValue(String [] str) throws Exception 
	{
		setVal(RTE_PATH + ".RteLookupCatValueAcessData", new Object[] { "VAL1", str });
		return (ArrayList<LookupCatValueAcessData>) executeResult().value();
	}
}
