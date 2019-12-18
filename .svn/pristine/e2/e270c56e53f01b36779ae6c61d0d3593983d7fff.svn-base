package service.product;

import java.util.ArrayList;

import layout.bean.productfac.product.Formula;
import layout.bean.productfac.product.Limit_cond;
import layout.bean.productfac.product.Limit_cond_amt;
import layout.bean.productfac.product.Limit_cond_serie;
import layout.bean.productfac.product.Prem_collect;
import service.product.ctrl.FormulaControlData;
import service.product.ctrl.LimitCondAmtControlData;
import service.product.ctrl.LimitCondControlData;
import service.product.ctrl.LimitCondSerieControlData;
import service.product.ctrl.PremCollectControlData;

public class ProductCalPremium 
{
	public void doLimitCond(String prd_code,ArrayList<Limit_cond> listLimitCond) throws Exception
	{
		new LimitCondControlData().insertLimitCond(prd_code,listLimitCond);
	}
	
	public void doLimitCondSerie(ArrayList<Limit_cond_serie> listLimitCondSerie) throws Exception
	{
		new LimitCondSerieControlData().insertLimitCond(listLimitCondSerie);
	}
	
	public void doLimitCondAmt(ArrayList<Limit_cond_amt> listLimitCondAmt) throws Exception
	{
		new LimitCondAmtControlData().insertLimitCond(listLimitCondAmt);
	}
	
	public void doPremCollect(String Prd_code,ArrayList<Prem_collect> listPremCollect) throws Exception
    {
   	 	new PremCollectControlData().insertPremCollect(Prd_code,listPremCollect);
    }
	
	public void doFrmula(String formulaCatId, ArrayList<Formula> listFormula) throws Exception
    {
		String [] formula_cat_id = new String [] {formulaCatId};
		new FormulaControlData().insertFormula(formula_cat_id,listFormula);
    }
}
