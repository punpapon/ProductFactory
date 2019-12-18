package service.baseplan;

import java.util.ArrayList;

import layout.bean.productfac.beanset.BenefitAccessData;
import layout.bean.productfac.benefit.Benefit;
import service.ctrl.BenefitData;
import utility.productfac.ContantCoverageBenefitPage;

public class BasePlanBenefitOLSearchData
{
	private ArrayList<BenefitAccessData> listBenefitDAccessData;
	private ArrayList<Benefit> listExceptionAccidentPay;
	private String bnf_code;

	/**
	 * ข้อยกเว้นการจ่ายเงิยทดแทนกรณีอบัติเหตุ bnf_cat_code = BC_OR_D
	 * @param bnf_cat_code
	 * @return
	 * @throws Exception
	 */
	public ArrayList<Benefit> searchBenefitิByBnfCatCode() throws Exception
	{
		return new BenefitData().searchBenefitิByBnfCatCode(new ContantCoverageBenefitPage().getException_Accident_Pay());
	}
	/*
	 * หมวดความคุ้มครองโรคร้ายแรง bnf_cat_code = BC_OL_DDR_01
	 */
	public ArrayList<Benefit> searchBenefitSeriousIllness() throws Exception
	{
		return new BenefitData().searchBenefitิByBnfCatCode("BC_OL_DDR");
	}
	
	public void searchBenefitsOL(String [] bnf_code) throws Exception
	{
		for(String s : bnf_code)
		{
			setBnf_code(new ContantCoverageBenefitPage(Integer.parseInt(s)).getPageBnfCatCode());
			searchOLData();
		}
	}
	
	private void searchOLData() throws Exception
	{
		switch (getBnf_code())
		{
			case "BC_OL_D"   : seatchDeath();	//เสียชีวิต	
				break;
			case "BC_OL_MAT" : searchRefundMaturity(); //เงินครบกำหนดสัญญา
				break; 
			case "BC_OL_PAY" : searchRefund(); //เงินคืนทุกระยะ/เงินจ่ายคืนตามเงื่อนไข
				break; 
			case "BC_OL_PEN" : searchPension(); //เงินบำนาญ
				break; 
			case "BC_OL_MED" : searchMedicalFund(); //กองทุนค่ารักษาพยาบาล
				break; 
			case "BC_OL_DIV" : searchDividend(); //เงินปัญผล
				break; 
			default : break;
		}
		
	}

	public String getBnf_code()
	{
		return bnf_code;
	}

	public void setBnf_code(String bnf_code)
	{
		this.bnf_code = bnf_code;
	}
	
   /*
    * Tab เสียชีวิต -------------------------------------------------------------------------------
    */
	private void seatchDeath() throws Exception
	{
		searchBenefitD();
		searchExceptionAccidentPay();
		
	}
	
	private void searchBenefitD() throws Exception
	{
		setListBenefitDAccessData(new BenefitData().searchBenefitCoverage(getBnf_code()));
	}

	private void setListBenefitDAccessData(ArrayList<BenefitAccessData> listBenefitAccessData)
	{
		this.listBenefitDAccessData = listBenefitAccessData;
	}
	
	public ArrayList<BenefitAccessData> getListBenefitDAccessData()
	{
		return listBenefitDAccessData;
	}

	/**
	 * รายกายการข้อยกเว้นการจ่ายเงินทดแทนใยกรณีอุบัติเหตุ
	 * bnf_cat_ code = BC_OR_D 
	 * @throws Exception
	 */
	private void searchExceptionAccidentPay() throws Exception
	{
		String bnf_cod = new ContantCoverageBenefitPage().getException_Accident_Pay();
		setListExceptionAccidentPay(new BenefitData().searchCoverageBenefit(bnf_cod));
	}

	private void setListExceptionAccidentPay(ArrayList<Benefit> listExceptionAccidentPay)
	{
		this.listExceptionAccidentPay = listExceptionAccidentPay;
	}

	public ArrayList<Benefit> getListExceptionAccidentPay()
	{
		return listExceptionAccidentPay;
	}
	
	/*
	 * เงินครบกำหนดสัญญา BC_OL_MAT -----------------------------------------------------------------------------------------------
	 *  
	 */
	private void searchRefundMaturity() throws Exception
	{	
		setListBenefitDAccessData(new BenefitData().searchBenefitCoverage(getBnf_code()));
	}

	/*
	 * เงินคืนทุกระยะ/เงินคืนตามเงื่อนไข BC_OL_PAY ------------------------------------------------------------------------------------
	 *  
	 */
	
	private void searchRefund() throws Exception
	{
		setListBenefitDAccessData(new BenefitData().searchBenefitCoverage(getBnf_code()));
	}

	/*
	 * เงินบำนาญ BC_OL_PEN ------------------------------------------------------------------------------------------------------
	 *  
	 */
	private void searchPension() throws Exception
	{
		setListBenefitDAccessData(new BenefitData().searchBenefitCoverage(getBnf_code()));
	}

	/*
	 * กองทุนรักษาพยาบาล BC_OL_MED -----------------------------------------------------------------------------------------------
	 *  
	 */
	private void searchMedicalFund() throws Exception
	{
		setListBenefitDAccessData(new BenefitData().searchBenefitCoverage(getBnf_code()));
	}

	/*
	 * เงินปันผล BC_OL_DIV -------------------------------------------------------------------------------------------------------
	 *  
	 */
	private void searchDividend() throws Exception
	{
		setListBenefitDAccessData(new BenefitData().searchBenefitCoverage(getBnf_code()));	
	}
	
}
