package service.rider;

import java.util.ArrayList;

import layout.bean.productfac.coverage.Participant;
import service.ctrl.ParticipantData;

public class RiderProtectedPerson extends ParticipantData
{
	/**
	 * 
	 * @param ArrayList<coverage.participant> list : coverage.participant
	 * @throws Exception
	 */
     public void doProtectedPersonData(ArrayList<Participant> listParticipant) throws Exception
     {
    	 insertParticipant("NOT_PRIMARY",listParticipant);
     }
}
