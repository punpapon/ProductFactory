package service.tab;

import java.util.ArrayList;

import layout.bean.productfac.coverage.Rate_layout;
import service.baseplan.ctrl.RateLayoutData;
import service.fnc.ConstantRateCatIDValues;

public class ValueInsueDataTab extends RateLayoutData 
{
	/**
	 * * @author Nara : 29-03-2018 For Implement BasicInfo Data<br>
	 * ---------------------------------------------------<br>
	 * 
	 */
	
	/**
	 * rate_catid = 6,7
	 * @param listRateLayout
	 * @throws Exception
	 */
	public void doRiskStandard(ArrayList<Rate_layout> listRateLayout) throws Exception 
	{
		insertRateLayout(ConstantRateCatIDValues.getRsRateCat(),listRateLayout);
		
	}

	/**
	 * rate_catid = 13
	 * @param listRateLayout
	 * @throws Exception
	 */
	public void doRiskLowStandard(ArrayList<Rate_layout> listRateLayout) throws Exception 
	{
		insertRateLayout(ConstantRateCatIDValues.getRlsRateCat(),listRateLayout);
	}
	//////////////////////OL
	public void doRiskStandardOL(ArrayList<Rate_layout> listRateLayout) throws Exception 
	{
		insertRateLayout(ConstantRateCatIDValues.getRsRateCatOl(),listRateLayout);
	}
	public void doTable_dis_sa_OL(ArrayList<Rate_layout> listRateLayout) throws Exception 
	{
		insertRateLayout(ConstantRateCatIDValues.getDtiRateCatOl(),listRateLayout);
	}
	public void doPension_OL(ArrayList<Rate_layout> listRateLayout) throws Exception 
	{
		insertRateLayout(ConstantRateCatIDValues.getDivRateCatOl(),listRateLayout);
	}
	public void doRiskLowStandardOL(ArrayList<Rate_layout> listRateLayout) throws Exception 
	{
		insertRateLayout(ConstantRateCatIDValues.getRlsRateCatOl(),listRateLayout);
	}
}
