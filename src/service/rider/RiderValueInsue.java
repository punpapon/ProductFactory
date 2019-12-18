package service.rider;

import java.util.ArrayList;

import layout.bean.productfac.coverage.Rate_layout;
import service.tab.ValueInsueDataTab;

public class RiderValueInsue 
{
	/**
	 * * @author Nara : 29-03-2018 For Implement <br>
	 * ---------------------------------------------------<br>
	 * doRiskStandard(ArrayList<Rate_layout> listRateLayout) <br>
	 * dosearchRiskLowStandard(ArrayList<Rate_layout> listRateLayout) <br>
	 * 
	 */
	public RiderValueInsue() {}

	public void doRiskStandard(ArrayList<Rate_layout> listRateLayout) throws Exception
	{
		new ValueInsueDataTab().doRiskStandard(listRateLayout);
	}
	
	public void doRiskLowStandard(ArrayList<Rate_layout> listRateLayout) throws Exception
	{
		new ValueInsueDataTab().doRiskLowStandard(listRateLayout);
	}
}
