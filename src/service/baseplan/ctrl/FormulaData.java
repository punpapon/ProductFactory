package service.baseplan.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.beanset.FormulaCatAccesData;
import layout.bean.productfac.coverage.Formula;
import service.fnc.RtePath;
import service.fnc.RteResult;
import service.fnc.StatusCodeType;
public class FormulaData extends RteResult
{
	private final String RTE_PATH = RtePath.RTE.getValue();
	public ArrayList<Formula> searchFormula(String cov_code) throws Exception 
	{
		setVal(RTE_PATH+".imp."+"RteFormulaS", new Object [] {"CON",new String[] {cov_code}});
		return (ArrayList<Formula>) executeResult().value();		
	} 
	
	public void insertFormula(ArrayList<Formula> listFormula) throws Exception 
	{
		boolean status = true;
		try {
			setVal(RTE_PATH+".imp."+"RteFormula", new Object [] {listFormula});
			saveData();
		} catch (Exception e) {
			status = false;
			throw e;
		}
		System.out.println("status >>> "+status);
	}
	
	//searchFomula Lookup OL //Benz 08-07-2019
	public ArrayList<FormulaCatAccesData> searchFormulaOL() throws Exception
	{
		setVal(RTE_PATH+".RteFormulaCatAcessData", new Object[] { "S", new Object[] { "ALL" } });
		ArrayList<FormulaCatAccesData> listFormulaAccessData = (ArrayList<FormulaCatAccesData>) executeResult().value();
		if(listFormulaAccessData.isEmpty())
			throw new Exception(StatusCodeType.NF.getValue());
		return listFormulaAccessData;
	}
}
