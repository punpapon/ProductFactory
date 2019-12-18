package service.product.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.product.Participant;
import service.fnc.ConstantValues;
import service.fnc.RteResult;

public class ParticipantControlData extends RteResult
{
	@SuppressWarnings("unchecked")
	public  ArrayList<Participant> searchParticipant(String cov_code) throws Exception 
	{
		setVal(RTE_PATH+".imp."+"RteProductParticipantS", new Object [] {"KEY",new String[] {cov_code}});
		return (ArrayList<Participant>)executeResult().value();
	}
	/**
	 * เรียงตาม prd_rider_code
	 * @param prd_rider_code
	 */
	@SuppressWarnings("unchecked")
	public  ArrayList<Participant> searchParticipant(String[] prd_rider_code) throws Exception 
	{
		setVal(RTE_PATH+".imp."+"RteProductParticipantS", new Object [] {"KEY2",ConstantValues.PRD_CODE,prd_rider_code});
		return (ArrayList<Participant>)executeResult().value();
	}
	
	public void insertParticipant(ArrayList<Participant> listParticipant) throws Exception 
	{
		setVal(RTE_PATH+".imp."+"RteProductParticipant", new Object [] {ConstantValues.PRD_CODE,listParticipant});
		saveDataResult();
	}
}
