package service;

import java.util.ArrayList;

import layout.bean.productfac.beanset.FilingChannelAccessData;
import layout.bean.productfac.beanset.LookupCatAccessData;
import layout.bean.productfac.beanset.RateCatAccessData;
import layout.bean.productfac.beanset.SalesChannelAccessData;
import service.center.MainInsureDetailCreateProduct;
import service.center.MainInsureDetailCreateProductRider;

public class MainInsureDetailCreateProductRiderService {
	MainInsureDetailCreateProductRider mdc = new MainInsureDetailCreateProductRider();
	private ArrayList<SalesChannelAccessData> list_Sales_Channel;
	private ArrayList<FilingChannelAccessData> list_filingChannel;
	private ArrayList<RateCatAccessData> list_RateCatAccessData_NAR;
	private ArrayList<RateCatAccessData> list_RateCatAccessData_PM;
	///Tab BasicInfo
		public ArrayList<LookupCatAccessData> BasicInfo_lookup (int tab) {
			ArrayList<LookupCatAccessData> datareturn = null ;
			try {
				mdc.createDetail(tab);
				datareturn = mdc.getListLookupCatAccessData();
				///	
				setsales_Channel (mdc.getListSaleChannelAccessData()) ;
				setfiling_Channel (mdc.getListFilingChannelAccessData()) ;
				setRateNAR (mdc.getListNar());
				setPM_Rate(mdc.getListPM_Rate());

			} catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
			}
			return datareturn;
		}
		//PM_Rate
		public void setPM_Rate (ArrayList<RateCatAccessData> arrayList)  {
			this.list_RateCatAccessData_PM = arrayList;
		}
		public  ArrayList<RateCatAccessData> getPM_Rate (){
			return list_RateCatAccessData_PM ;
		}
		//NAR
		public void setRateNAR (ArrayList<RateCatAccessData> arrayList)  {
			this.list_RateCatAccessData_NAR = arrayList;
		}
		public  ArrayList<RateCatAccessData> getRateNAR (){
			return list_RateCatAccessData_NAR ;
		}
		//
		public void setfiling_Channel (ArrayList<FilingChannelAccessData> arrayList)  {
			this.list_filingChannel = arrayList;
		}
		public  ArrayList<FilingChannelAccessData> getfiling_Channel (){
			return list_filingChannel ;
		}
	//////Salse_Channel (1)
		public void setsales_Channel (ArrayList<SalesChannelAccessData> arrayList)  {
			this.list_Sales_Channel = arrayList;
		}
		public  ArrayList<SalesChannelAccessData> getsales_Channel (){
			return list_Sales_Channel ;
		}
}
