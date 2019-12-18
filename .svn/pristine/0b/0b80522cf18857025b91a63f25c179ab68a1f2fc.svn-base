package service.product;

import java.util.ArrayList;

import layout.bean.productfac.beanset.RateLayoutPremAccessData;
import service.fnc.ConstantRateCatIDValues;
import service.product.ctrl.ProductRateLayoutControlData;

public class ProductRateLayoutPremAccessData {
	private ArrayList<RateLayoutPremAccessData> listRateLayoutStandard;
	

	/**
	 * เบี้ยมาตาฐาน
	 * 
	 * @throws Exception
	 */
	public ArrayList<RateLayoutPremAccessData> searchRateLayoutPremAccessData(String cov_code)
	{
		try {
			ProductRateLayoutControlData productRateLayoutControlData = new ProductRateLayoutControlData();
			setListRateLayoutStandard(productRateLayoutControlData.searchProductRateLayoutPremAccessData(cov_code, ConstantRateCatIDValues.getPmstdRateCat()));
		} catch (Exception e) {
			e.printStackTrace();
		}
		return getListRateLayoutStandard();
	}

	private void setListRateLayoutStandard(ArrayList<RateLayoutPremAccessData> listRateLayoutStandard)
	{
		this.listRateLayoutStandard = listRateLayoutStandard;
	}

	public ArrayList<RateLayoutPremAccessData> getListRateLayoutStandard()
	{
		return listRateLayoutStandard;
	}
}
