package service.center;

import java.util.ArrayList;

import layout.bean.productfac.beanset.NonforfRateAccessData;
import layout.bean.productfac.coverage.Prem_assump_rate;
import layout.bean.productfac.workflow.Coverage_request;
import layout.bean.productfac.workflow.Coverage_task;
import service.ctrl.CoverageData;
import service.ctrl.NonforfRateControlData;
import service.ctrl.PremAssumpRateControlData;
import service.ctrl.WorkflowCoverageControlData;

public class WorkFlowCoverage {
	
	////////Coverage_task
	public  ArrayList<Coverage_task> searchCoverageTask() throws Exception
	{
		return new WorkflowCoverageControlData().searchCoverageTask();
	}
		
	public void doCoverageTask(Coverage_task coveragetask) throws Exception
	{
		new WorkflowCoverageControlData().insertCoverageTask(coveragetask);
	}
	////////////////Coverage_request
	public  ArrayList<Coverage_request> searchCoverageRequest() throws Exception
	{
		return new WorkflowCoverageControlData().searchCoverageRequest();
	}
		
	public void doCoverageRequest(Coverage_request coveragerequest) throws Exception
	{
		new WorkflowCoverageControlData().insertCoverageRequest(coveragerequest);
	}
}
