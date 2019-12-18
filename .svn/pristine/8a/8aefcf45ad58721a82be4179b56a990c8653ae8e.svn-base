package service;

import java.util.ArrayList;

import layout.bean.productfac.workflow.Product_task;
import service.center.WorkFlowProduct;
import service.fnc.ConstantValues;
import service.fnc.PDFFnc;

public class CloneWorkflowProductTask {
	public void insertWorkflowProductTask (String passInsurance,String groupName,String userId) throws Exception{

		////Benz 11-09-2019 New set Status
			WorkFlowProduct wfd = new WorkFlowProduct();
			ArrayList<Product_task> arr_Product_task = wfd.searchProductTask();
			Product_task  setprotask = new Product_task();
			for (int i = 0; i < arr_Product_task.size(); i++) {
				if (arr_Product_task.get(i).getDepartment().equals(groupName)) {
					setprotask = arr_Product_task.get(i);
					setprotask.setPrd_code(passInsurance);
					setprotask.setDepartment(ConstantValues.GROUP_NAME);
					setprotask.setApprove_status("NEW");
					setprotask.setUser_code(userId);
					setprotask.setUpdate_time(PDFFnc.currentTimeStamp());
					wfd.doProductTask(setprotask);
				} 
			}
		}
}
