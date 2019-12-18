package service.baseplan.merge;

import java.util.ArrayList;

import layout.bean.productfac.beanset.ParticipantAccessData;
import layout.bean.productfac.coverage.Coverage;
import service.ctrl.CoverageData;
import service.ctrl.ParticipantData;

public class BasicInfo 
{	
    public Coverage searchCoverage(String cov_code) throws Exception 
    {
		CoverageData coverageData = new CoverageData();
		Coverage coverage = coverageData.searchCoverage(cov_code);
		if (coverage == null)
			throw new Exception("coverage Data not found");
		return coverage;
	}
    
    public ParticipantAccessData searchParticipant(String cov_code) throws Exception
    {
    	ParticipantData participantData = new ParticipantData();
    	ArrayList<ParticipantAccessData> listParticipant = participantData.searchCoverageParticipant(cov_code);
    	return listParticipant.get(0);
    }
}
