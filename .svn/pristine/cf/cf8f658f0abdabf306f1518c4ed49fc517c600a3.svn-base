package service.product.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.product.Coop;
import layout.bean.productfac.product.Coop_commission;
import layout.bean.productfac.product.Coop_prem_discount;
import layout.bean.productfac.product.Coop_sum;
import service.fnc.ConstantValues;
import service.fnc.RteResult;

public class CoopControlData extends RteResult
{

	public void insertCoop(String process, ArrayList<Coop> listCoop) throws Exception
	{
		setVal(RTE_PATH + ".imp." + "RteCoop", new Object[] { ConstantValues.PRD_CODE, process, listCoop });
		saveDataResult();
	}

	// searchCoop
	@SuppressWarnings("unchecked")
	public ArrayList<Coop> searchCoop(String cov_code) throws Exception
	{
		setVal(RTE_PATH + ".imp." + "RteCoopS", new Object[] { "KEY1", cov_code });
		return (ArrayList<Coop>) executeResult().value();

	}

	// searchCoopCommission
	@SuppressWarnings("unchecked")
	public ArrayList<Coop_commission> searchCoopCommission(String cov_code) throws Exception
	{
		setVal(RTE_PATH + ".imp." + "RteCoopS", new Object[] { "KEY2", cov_code });
		return (ArrayList<Coop_commission>) executeResult().value();
	}

	// searchCoopSum
	@SuppressWarnings("unchecked")
	public ArrayList<Coop_sum> searchCoopSum(String cov_code) throws Exception
	{
		setVal(RTE_PATH + ".imp." + "RteCoopS", new Object[] { "KEY3", cov_code });
		return (ArrayList<Coop_sum>) executeResult().value();
	}

	//// searchCoop_prem_discount
	@SuppressWarnings("unchecked")
	public ArrayList<Coop_prem_discount> searchCoop_prem_discount(String cov_code) throws Exception
	{
		setVal(RTE_PATH + ".imp." + "RteCoopS", new Object[] { "KEY4", cov_code });
		return (ArrayList<Coop_prem_discount>) executeResult().value();
	}
}
