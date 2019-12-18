package service.rider;

import java.util.ArrayList;

import layout.bean.productfac.coverage.Prem_occ_charge;
import layout.bean.productfac.coverage.Rate_layout;
import service.rider.ctrl.PremOccChargeData;
import service.tab.PremiumCalDataTab;

public class RiderPremiumCal extends PremiumCalDataTab
{
	/**
	 * * @author Nara : 29-03-2018 For Implement <br>
	 * ---------------------------------------------------<br>
	 * doPMStandard(ArrayList<Rate_layout> listRateLayout); <br>
	 * doPMSpecial(ArrayList<Rate_layout> listRateLayout); <br>
	 * doPMBetweenAge(ArrayList<Rate_layout> listRateLayout); <br>
	 * doCapitalDecrease(ArrayList<Rate_layout> listRateLayout); <br>
	 * 
	 */
	public RiderPremiumCal()
	{
	}

	/**
	 * rate_catid = 1,2
	 * 
	 * @param listRateLayout
	 * @throws Exception
	 */
	public void doPMStandard(ArrayList<Rate_layout> listRateLayout) throws Exception
	{
		super.doPMStandard(listRateLayout);
	}

	/**
	 * rate_cat_id = 3
	 * 
	 * @param listRateLayout
	 * @throws Exception
	 */
	public void doPMSpecial(ArrayList<Rate_layout> listRateLayout) throws Exception
	{
		super.doPMSpecial(listRateLayout);
	}

	/**
	 * rate_cat_id = 4
	 * 
	 * @param listRateLayout
	 * @throws Exception
	 */
	public void doPMBetweenAge(ArrayList<Rate_layout> listRateLayout) throws Exception
	{
		super.doPMBetweenAge(listRateLayout);
	}

	/**
	 * rate_cat_id = 5
	 * 
	 * @param listRateLayout
	 * @throws Exception
	 */
	public void doCapitalDecrease(ArrayList<Rate_layout> listRateLayout) throws Exception
	{
		super.doCapitalDecrease(listRateLayout);
	}

	/**
	 * 
	 * @param listPremOccCharge
	 *            : Prem_occ_charge
	 * @throws Exception
	 */
	public void doPremOccCharge(ArrayList<Prem_occ_charge> listPremOccCharge) throws Exception
	{
		new PremOccChargeData().insertRateLayout(listPremOccCharge);
	}
}
