package service.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.workflow.Product_request;
import layout.bean.productfac.workflow.Product_task;
import service.fnc.ConstantValues;
import service.fnc.RtePath;
import service.fnc.RteResult;

public class WorkflowProductControlData 
{
	private final String RTE_PATH = RtePath.RTE.getValue();
	public ArrayList<Product_task> searchProductTask() throws Exception
	{
		Object [] param = new Object [] {"VAL1",ConstantValues.PRD_CODE};
		return (ArrayList<Product_task>) new RteResult(RTE_PATH+".workflow."+"RteSearchProductTask",param).executeResult().value();
	}
	
	public void insertProductTask(Product_task product_task) throws Exception
	{
		boolean status = false;
		try {
			Object [] param = new Object [] {"VAL1",ConstantValues.PRD_CODE,product_task};
			status = (boolean) new RteResult(RTE_PATH+".workflow."+"RteProductTask",param).executeResult().value();
		} catch (Exception e) {
			status = false;
			throw e;
		}
		System.out.println("status "+status);
	}
	
	public ArrayList<Product_request> searchProductRequest() throws Exception
	{
		Object [] param = new Object [] {"VAL1",ConstantValues.PRD_CODE};
		return (ArrayList<Product_request>) new RteResult(RTE_PATH+".workflow."+"RteSearchProductRequest",param).executeResult().value();
	}
	
	public void insertProductRequest(Product_request product_request) throws Exception
	{
		boolean status = false;
		try {
			Object [] param = new Object [] {"VAL1",ConstantValues.PRD_CODE,product_request};
			status = (boolean) new RteResult(RTE_PATH+".workflow."+"RteProductRequest",param).executeResult().value();
		} catch (Exception e) {
			status = false;
			throw e;
		}
		System.out.println("status "+status);
	}
}
