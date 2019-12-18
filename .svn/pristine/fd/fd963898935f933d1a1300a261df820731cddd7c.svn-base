package service.product;

import java.util.ArrayList;

import layout.bean.productfac.beanset.SalesChannelAccessData;
import service.fnc.RteResult;
import service.fnc.StatusCodeType;

public class SalesChannelData extends RteResult
{
	/**
	 * ค้นหาข้อมูล lookup
	 * @param param
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public  ArrayList<SalesChannelAccessData> searchInsuranceType() throws Exception
	{
		setVal(RTE_PATH+".RteSalesChannelAccessData", new Object [] {"S",new Object [] {"ALL",""}});
		ArrayList<SalesChannelAccessData> listSalesChannelAccessData = (ArrayList<SalesChannelAccessData>)executeResult().value();
		if(listSalesChannelAccessData.isEmpty())
			throw new Exception(StatusCodeType.NF.getValue());
		return listSalesChannelAccessData;
	}
	
	/**
	 * ค้นหาข้อมูล Filing_channel of coverage 
	 * @param cov_code
	 * @return
	 * @throws Exception
	 */
	/*public ArrayList<Sale_channel> searchCoverageSalesChanel(String cov_code) throws Exception 
	{
		Object [] param = new Object [] {"CON",new String [] {cov_code}};
		this.rteResult = new RteResult(RTE_PATH+".imp."+"RteFillingChanelS", param);
		Result result = rteResult.searchValuesResultData();
		return (ArrayList<Sale_channel>)result.value();
	}*/
	
	/**
	 * 
	 * @param processType : I is Insert, U is update
	 * @param listFilingChannel
	 * @return boolean
	 * @throws Exception
	 */
/*	public void insertFilingChannel(ArrayList<Filing_channel> listFilingChannel) throws Exception 
	{
		boolean status = true;
		try {
			Object [] param = new Object [] {listFilingChannel}; 
			this.rteResult = new RteResult(RTE_PATH+".imp."+"RteFilingChanel", param);
			rteResult.saveData();
		} catch (Exception e) {
			status = false;
			throw e;
		}
		System.out.println("status >>> "+status);
	}*/

}
