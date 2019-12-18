package service.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.workflow.Coverage_request;
import layout.bean.productfac.workflow.Coverage_task;
import service.fnc.ConstantValues;
import service.fnc.RteResult;

public class WorkflowCoverageControlData extends RteResult
{
	public ArrayList<Coverage_task> searchCoverageTask() throws Exception
	{
		setVal(RTE_PATH+".workflow."+"RteSearchCoverageTask",new Object [] {"VAL1",ConstantValues.COV_CODE});
		return (ArrayList<Coverage_task>)executeResult().value();
	}
	
	public void insertCoverageTask(Coverage_task coverage_task) throws Exception
	{
		setVal(RTE_PATH+".workflow."+"RteCoverageTask", new Object [] {"VAL1",ConstantValues.COV_CODE,coverage_task});
		saveDataResultStatus();
	}
	
	public ArrayList<Coverage_request> searchCoverageRequest() throws Exception
	{
		setVal(RTE_PATH+".workflow."+"RteSearchCoverageRequest", new Object [] {"VAL1",ConstantValues.COV_CODE});
		return (ArrayList<Coverage_request>)executeResult().value();
	}
	
	public void insertCoverageRequest(Coverage_request coverage_request) throws Exception
	{
		setVal(RTE_PATH+".workflow."+"RteCoverageRequest",new Object [] {"VAL1",ConstantValues.COV_CODE,coverage_request});
		saveDataResultStatus();
	}
}
