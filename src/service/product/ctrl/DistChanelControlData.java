package service.product.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.beanset.DistchannelAccessData;
import service.fnc.RteResult;
import service.fnc.StatusCodeType;

public class DistChanelControlData extends RteResult
{
	@SuppressWarnings("unchecked")
	public ArrayList<DistchannelAccessData> searchLookupDistChanel() throws Exception
	{
		setVal(RTE_PATH + ".RteDistchannelAccessData", new Object[] { "ALL" });
		ArrayList<DistchannelAccessData> listDistchannelAccesData = (ArrayList<DistchannelAccessData>) executeResult().value();
		if (listDistchannelAccesData.isEmpty())
			throw new Exception(StatusCodeType.NF.getValue());
		return listDistchannelAccesData;
	}
}
