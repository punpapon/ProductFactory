package service.baseplan.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.lookup.Mortality_tli;
import layout.bean.productfac.lookup.Tpd_tli;
import service.fnc.RtePath;
import service.fnc.RteResult;

public class PemiumTableData extends RteResult
{
	private final String RTE_PATH = RtePath.RTE.getValue();
	public ArrayList<Mortality_tli> searchMortalityTli(String cove_code,String male_mort_tli_id,String female_mort_tli_id) throws Exception //"MOR","GL_CL_MRT_B_0001"
	{
		setVal(RTE_PATH+".RtePemiumTableAccessData", new Object [] {"S",new Object [] {"MOR",cove_code,male_mort_tli_id,female_mort_tli_id}});
		return (ArrayList<Mortality_tli>) executeResult().value();
	}
	
	public ArrayList<Tpd_tli> searchTpdTli(String cov_code,String male_tpd_tli_id,String female_tpd_tli_id) throws Exception //GL_CL_MRT_B_0001
	{
		setVal(RTE_PATH+".RtePemiumTableAccessData", new Object [] {"S",new Object [] {"TPD",cov_code,male_tpd_tli_id,female_tpd_tli_id}});
		return (ArrayList<Tpd_tli>) executeResult().value();
	}
	
	public ArrayList<Mortality_tli> searchMortalityTli2(String gender ) throws Exception 
	{
		setVal(RTE_PATH+".RtePemiumTableAccessDataByGender", new Object [] {"S",new Object [] {"MOR",gender,}});
		return (ArrayList<Mortality_tli>) executeResult().value();
	}
	
	public ArrayList<Tpd_tli> searchTpdTli2(String gender ) throws Exception 
	{
		setVal(RTE_PATH+".RtePemiumTableAccessDataByGender", new Object [] {"S",new Object [] {"TPD",gender}});
		return (ArrayList<Tpd_tli>) executeResult().value();
	}
}
