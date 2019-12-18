package service.center;

import java.math.BigDecimal;

import layout.bean.productfac.coverage.Coverage;
import manit.rte.Result;
import service.fnc.ConstantValues;
import service.fnc.PDFFnc;
import service.fnc.RtePath;
import service.fnc.RteResult;

public class CoverageCerate 
{
	private Coverage coverage;
	private String cat_code_L1;
	private String cat_code_L2;
	private String cat_code_L3;

    public CoverageCerate(String cat_code_L1,String cat_code_L2,String cat_code_L3) throws Exception 
	{
    	this.cat_code_L1 = cat_code_L1;
    	this.cat_code_L2 = cat_code_L2;
    	this.cat_code_L3 = cat_code_L3;
		searchNextSequence();
	}

	private void searchNextSequence() throws Exception 
	{
		String [] str = new String [] {cat_code_L1,cat_code_L2,cat_code_L3,ConstantValues.CAT_GROUP};
		Object [] param = new Object [] {"I",setPrepareCoverage(cat_code_L3),str};
		Result result = new RteResult(RtePath.RTE.getValue()+".imp."+"RteCoverageCreate", param).saveValuesResultData();
		setCoverage((Coverage)result.value());
	}
	
	private Coverage setPrepareCoverage(String cat_code_L3) throws Exception
	{
		int df = 0 ;
		Coverage coverage = new Coverage();
		coverage.setName_th("-");
		coverage.setName_en("-");
		coverage.setPrem_calc_meth("PREM_ONLY");
		coverage.setCov_cat_id(Integer.parseInt(cat_code_L3));
		coverage.setCov_ind_code(ConstantValues.COV_IND_CODE);
		coverage.setStatus("NEW");
		coverage.setContract_term("NONE");
		coverage.setCov_unit_type("NONE");
		coverage.setPrem_period_comp("NONE");
		coverage.setPrem_int_rate(new BigDecimal("0"));
		coverage.setMat_int_rate(new BigDecimal("0"));
		coverage.setSum_decr_int_rate(new BigDecimal("0"));
		coverage.setPer_policy_prem(new BigDecimal("0"));
		coverage.setMin_em(new BigDecimal("0"));
		coverage.setMax_em(new BigDecimal("0"));
		coverage.setMin_prem_disc_rate(new BigDecimal("0"));
		coverage.setMax_prem_disc_rate(new BigDecimal("0"));
		coverage.setUser_code(ConstantValues.USER_CODE);
		coverage.setMale_mort_tli_id(df);
		coverage.setFemale_mort_tli_id(df);
		coverage.setMale_tpd_tli_id(df);
		coverage.setFemale_tpd_tli_id(df);
		coverage.setIs_prem_disc(false);
		coverage.setIs_substd(false);
		//coverage.setSale_eff_date(PDFFnc.getSqlDate(DateInfo.sysDate()));
		//coverage.setSale_exp_date(PDFFnc.getSqlDate(DateInfo.sysDate()));
		coverage.setUpdate_time(PDFFnc.currentTimeStamp());
		coverage.setCreate_time(PDFFnc.currentTimeStamp());
		return coverage;
	}

	private void setCoverage(Coverage coverage) 
	{
		this.coverage = coverage;
	}

	public Coverage getCoverage() 
	{
		return coverage;
	}

}
