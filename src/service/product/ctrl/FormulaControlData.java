package service.product.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.product.Formula;
import service.fnc.ConstantValues;
import service.fnc.RteResult;

public class FormulaControlData extends RteResult
{
	public void insertFormula(String [] formula_cat_id ,ArrayList<Formula> listFormula) throws Exception
	{
		setVal(RTE_PATH+".imp."+"RteProductFormula", new Object [] {ConstantValues.PRD_CODE,formula_cat_id,listFormula});
		saveDataResult();
	}
	//seardchFormula
	@SuppressWarnings("unchecked")
	public  ArrayList<Formula> seardchFormula(String cov_code) throws Exception 
    {
		setVal(RTE_PATH+".imp."+"RteFormulaS", new Object [] {"KEY1",cov_code});
		return (ArrayList<Formula>)executeResult().value();
	}
}
