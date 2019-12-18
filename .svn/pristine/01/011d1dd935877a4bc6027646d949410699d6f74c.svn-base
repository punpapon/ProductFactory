package service.clone;

import java.util.ArrayList;

import layout.bean.productfac.coverage.Participant;
import service.ctrl.ParticipantData;
import service.fnc.ConstantValues;
import service.fnc.PDFFnc;

public class CloneCoverageParticipant extends ParticipantData{

	public void cloneCoverageParticipant(String cov_code_old,String cov_code_new) {
		try {
			ArrayList<Participant> lstParticipant = searchCoverageParticipantAll(cov_code_old);
			ArrayList<Participant> lstResultParticipant = new ArrayList<>();
			String partic_type = "";
			for (Participant participant : lstParticipant) {
				participant.setCov_code(cov_code_new);
				participant.setUser_code(ConstantValues.USER_CODE);
				participant.setUpdate_time(PDFFnc.currentTimeStamp());
				partic_type = participant.getPartic_type();
				lstResultParticipant.add(participant);
			}
			insertParticipant(partic_type,lstResultParticipant);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
