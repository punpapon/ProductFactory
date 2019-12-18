package service;

import layout.bean.productfac.workflow.Product_task;
import service.center.WorkFlowProduct;
import service.fnc.ConstantValues;
import service.fnc.PDFFnc;

public class WorkflowProductTask {
	public void insertWorkflowProductTask (String passInsurance,String userId) throws Exception{
	////Benz 11-09-2019 New set Status
		WorkFlowProduct wfd = new WorkFlowProduct();
		//////////////////////////Row1
		Product_task  setprotask = new Product_task();
		setprotask.setPrd_code(passInsurance);
		setprotask.setDepartment(ConstantValues.GROUP_NAME);
		setprotask.setApprove_status("NEW");
		setprotask.setUser_code(userId);
		setprotask.setUpdate_time(PDFFnc.currentTimeStamp());
		wfd.doProductTask(setprotask);
		//////////////////////////Row2
		setprotask = new Product_task();
		setprotask.setPrd_code(passInsurance);
		setprotask.setDepartment("POC (1740)");
		setprotask.setApprove_status("NEW");
		setprotask.setUser_code(userId);
		setprotask.setUpdate_time(PDFFnc.currentTimeStamp());
		wfd.doProductTask(setprotask);
	}
}
