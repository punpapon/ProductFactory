package service.rider;

import java.util.ArrayList;

import layout.bean.productfac.coverage.Cov_terminate;
import service.rider.ctrl.CovTerminateControlData;

public class RiderCovTerminateData
{
	public ArrayList<Cov_terminate> searchCovTerminate(int bnf_item_id) throws Exception
	{
		return new CovTerminateControlData().searchCovTerminate(bnf_item_id);
	}
	
	public void doTerminate(Cov_terminate cov_terminate) throws Exception
	{
		System.out.println("-----1--/"+cov_terminate.getBnf_item_id());
		System.out.println("-----2--/"+cov_terminate.getTerm_cov_code());
		new CovTerminateControlData().insertCovTerminate(cov_terminate);
	}
}
