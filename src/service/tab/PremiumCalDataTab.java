package service.tab;

import java.util.ArrayList;

import layout.bean.productfac.coverage.Rate_layout;
import service.baseplan.ctrl.RateLayoutData;
import service.fnc.ConstantRateCatIDValues;

public class PremiumCalDataTab extends RateLayoutData
{
	public void doPMStandard(ArrayList<Rate_layout> listRateLayout) throws Exception
	{
		insertRateLayout(ConstantRateCatIDValues.getPmstdRateCat(), listRateLayout);
	}

	public void doPMSpecial(ArrayList<Rate_layout> listRateLayout) throws Exception
	{
		insertRateLayout(ConstantRateCatIDValues.getPmstpRateCat(), listRateLayout);
	}

	public void doPMBetweenAge(ArrayList<Rate_layout> listRateLayout) throws Exception
	{
		insertRateLayout(ConstantRateCatIDValues.getPmbtaRateCat(), listRateLayout);
	}

	public void doCapitalDecrease(ArrayList<Rate_layout> listRateLayout) throws Exception
	{
		insertRateLayout(ConstantRateCatIDValues.getCpdRateCat(), listRateLayout);
	}

	/////////////// Benz*02-08-2019//////////OL
	public void doPMStandardOL(ArrayList<Rate_layout> listRateLayout) throws Exception
	{
		insertRateLayout(ConstantRateCatIDValues.getPmstdRateCatOl(), listRateLayout);
	}

	public void doCal_Insurance_PremiumOL(ArrayList<Rate_layout> listRateLayout) throws Exception
	{
		insertRateLayout(ConstantRateCatIDValues.getCipRateCatOl(), listRateLayout);
	}

	public void doPMSpecialOL(ArrayList<Rate_layout> listRateLayout) throws Exception
	{
		insertRateLayout(ConstantRateCatIDValues.getPmstpRateCatOl(), listRateLayout);
	}

	public void doPMBetweenAgeOL(ArrayList<Rate_layout> listRateLayout) throws Exception
	{
		insertRateLayout(ConstantRateCatIDValues.getPmbtaRateCatOl(), listRateLayout);
	}

	public void doCapitalDecreaseOL(ArrayList<Rate_layout> listRateLayout) throws Exception
	{
		insertRateLayout(ConstantRateCatIDValues.getCpdRateCatOl(), listRateLayout);
	}

	public void doNAROL(ArrayList<Rate_layout> listRateLayout) throws Exception
	{
		insertRateLayout(ConstantRateCatIDValues.getNarOl(), listRateLayout);
	}
}
