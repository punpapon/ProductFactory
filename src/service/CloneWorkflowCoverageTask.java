package service;

import java.util.ArrayList;

import layout.bean.productfac.workflow.Coverage_task;
import service.center.WorkFlowCoverage;
import service.fnc.ConstantValues;
import service.fnc.PDFFnc;

public class CloneWorkflowCoverageTask {
	public void insertWorkflowCoverageTask (String passInsurance,String groupName,String userId) throws Exception{

		////Pun 21-11-2019 New set Status
			WorkFlowCoverage workFlowCoverage = new WorkFlowCoverage();
			ArrayList<Coverage_task> arr_Coverage_task = workFlowCoverage.searchCoverageTask();
			Coverage_task  coverage_task = new Coverage_task();
			for (int i = 0; i < arr_Coverage_task.size(); i++) {
				if (arr_Coverage_task.get(i).getDepartment().equals(groupName)) {
					coverage_task = arr_Coverage_task.get(i);
					coverage_task.setCov_code(passInsurance);
					coverage_task.setDepartment(ConstantValues.GROUP_NAME);
					coverage_task.setApprove_status("NEW");
					coverage_task.setUser_code(userId);
					coverage_task.setUpdate_time(PDFFnc.currentTimeStamp());
					workFlowCoverage.doCoverageTask(coverage_task);
				} 
			}
		}
}
