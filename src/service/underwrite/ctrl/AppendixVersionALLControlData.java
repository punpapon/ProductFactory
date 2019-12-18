package service.underwrite.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.beanset.AppendixVersionALLAccessData;
import layout.bean.productfac.coverage.Participant;
import manit.rte.Result;
import service.fnc.RtePath;
import service.fnc.RteResult;

public class AppendixVersionALLControlData 
{
	private RteResult rteResult;
	private final String RTE_PATH = RtePath.RTE.getValue();

	public ArrayList<AppendixVersionALLAccessData> search(String cov_code,int Version_id) throws Exception
	{
		Object[] param = new Object[] { "S", new Object[] { cov_code,Version_id } };
		this.rteResult = new RteResult(RTE_PATH + ".unw.RteAppendixVersionALLAccessData", param);
		Result result = rteResult.searchValuesResultData();
		return (ArrayList<AppendixVersionALLAccessData>) result.value();
	}

	public ArrayList<Participant> searchCoverageParticipantAll(String cov_code) throws Exception
	{
		Object[] param = new Object[] { "COV", new Object[] { cov_code } };
		this.rteResult = new RteResult(RTE_PATH + ".RteParticipantAccessData", param);
		Result result = rteResult.searchValuesResultData();
		return (ArrayList<Participant>) result.value();
	}

	
}
