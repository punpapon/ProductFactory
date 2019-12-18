package service.baseplan;

import java.util.ArrayList;

import layout.bean.productfac.coverage.Rate_layout;
import service.tab.ValueInsueDataTab;

public class BasePlanValueInsue extends ValueInsueDataTab
{
	/**
	 * * @author Nara : 29-03-2018 For Implement <br>
	 * ---------------------------------------------------<br>
	 * doRiskStandard(ArrayList<Rate_layout> listRateLayout) <br>
	 * dosearchRiskLowStandard(ArrayList<Rate_layout> listRateLayout) <br>
	 * 
	 */

	public void doRiskStandard(ArrayList<Rate_layout> listRateLayout) throws Exception
	{
		super.doRiskStandard(listRateLayout);
	}

	public void doRiskLowStandard(ArrayList<Rate_layout> listRateLayout) throws Exception
	{
		super.doRiskLowStandard(listRateLayout);
	}
	////////////////////////////
	public void doRiskStandardOL(ArrayList<Rate_layout> listRateLayout) throws Exception
	{
		super.doRiskStandardOL(listRateLayout);
	}
	public void doTable_dis_sa(ArrayList<Rate_layout> listRateLayout) throws Exception
	{
		super.doTable_dis_sa_OL(listRateLayout);
	}
	public void doPension(ArrayList<Rate_layout> listRateLayout) throws Exception
	{
		super.doPension_OL(listRateLayout);
	}
	public void doRiskLowStandardOL(ArrayList<Rate_layout> listRateLayout) throws Exception
	{
		super.doRiskLowStandardOL(listRateLayout);
	}
}
