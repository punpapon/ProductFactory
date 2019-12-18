package service.center;

import java.util.ArrayList;

import layout.bean.productfac.workflow.Product_request;
import layout.bean.productfac.workflow.Product_task;
import service.ctrl.WorkflowProductControlData;

public class WorkFlowProduct extends  WorkflowProductControlData
{
	
	////////Product_task
	public  ArrayList<Product_task> searchProductTask() throws Exception
	{
		return super.searchProductTask();
	}
		
	public void doProductTask(Product_task coveragetask) throws Exception
	{
		insertProductTask(coveragetask);
	}
	////////////////Product_request
	public  ArrayList<Product_request> searchProductRequest() throws Exception
	{
		return super.searchProductRequest();
	}
		
	public void doProductRequest(Product_request coveragerequest) throws Exception
	{
		insertProductRequest(coveragerequest);
	}
}
