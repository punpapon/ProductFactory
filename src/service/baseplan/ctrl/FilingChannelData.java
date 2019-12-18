package service.baseplan.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.beanset.FilingChannelAccessData;
import layout.bean.productfac.coverage.Filing_channel;
import service.fnc.RteResult;
import service.fnc.StatusCodeType;
public class FilingChannelData  extends RteResult 	
{
	/**
	 * ค้นหาข้อมูล lookup
	 * @param param
	 * @return
	 * @throws Exception
	 */
	public  ArrayList<FilingChannelAccessData> searchInsuranceType() throws Exception
	{
		setVal(RTE_PATH+".RteFilingChannelAccessData", new Object [] {"S",new Object [] {"ALL",""}});
		ArrayList<FilingChannelAccessData> listFilingChannelAccessData = (ArrayList<FilingChannelAccessData>) executeResult().value();
		if(listFilingChannelAccessData.isEmpty())
			throw new Exception(StatusCodeType.NF.getValue());
		return listFilingChannelAccessData;
	}
	
	/**
	 * ค้นหาข้อมูล Filing_channel of coverage 
	 * @param cov_code
	 * @return
	 * @throws Exception
	 */
	public ArrayList<Filing_channel> searchCoverageFillingChanel(String cov_code) throws Exception 
	{
		setVal(RTE_PATH+".imp."+"RteFillingChanelS", new Object [] {"CON",new String [] {cov_code}});
		return (ArrayList<Filing_channel>) executeResult().value();
	}
	
	public void insertFilingChannel(ArrayList<Filing_channel> listFilingChannel) throws Exception 
	{
		boolean status = true;
		try {
			setVal(RTE_PATH+".imp."+"RteFilingChanel",new Object [] {listFilingChannel});
			saveData();
		} catch (Exception e) {
			status = false;
			throw e;
		}
		System.out.println("status >>> "+status);
	}
}