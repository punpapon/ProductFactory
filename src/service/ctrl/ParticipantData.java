package service.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.beanset.ParticipantAccessData;
import layout.bean.productfac.coverage.Participant;
import service.fnc.ConstantValues;
import service.fnc.RteResult;

public class ParticipantData extends RteResult
{

	@SuppressWarnings("unchecked")
	public ArrayList<ParticipantAccessData> searchCoverageParticipant(String cov_code) throws Exception
	{
		setVal(RTE_PATH + ".RteParticipantAccessData", new Object[] { "S",cov_code});
		return (ArrayList<ParticipantAccessData>) executeResult().value();
	}

	/**
	 * search all partic_type
	 * @param cov_code
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public ArrayList<Participant> searchCoverageParticipantAll(String cov_code) throws Exception
	{
		setVal(RTE_PATH + ".RteParticipantAccessData", new Object[] { "VAL1",cov_code});
		return (ArrayList<Participant>)executeResult().value();
	}
	/**
	 * search partic_type = PRIMARY 
	 * @param cov_code
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public ArrayList<Participant> searchCoverageParticipant(String [] cov_code) throws Exception
	{
		setVal(RTE_PATH + ".RteParticipantAccessData",new Object[] { "VAL2",cov_code});
		return (ArrayList<Participant>)executeResult().value();
	}

	public void insertParticipant(String partic_type, ArrayList<Participant> listParticipant) throws Exception
	{
		setVal(RTE_PATH + ".imp." + "RteParticipant", new Object[] { ConstantValues.COV_CODE, partic_type, listParticipant });
		saveDataResult();
	}
}
