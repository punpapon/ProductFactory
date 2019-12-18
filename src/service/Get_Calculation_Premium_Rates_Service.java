package service;

import java.util.ArrayList;

import layout.bean.productfac.lookup.Mortality_tli;
import layout.bean.productfac.lookup.Tpd_tli;
import service.baseplan.ctrl.PemiumTableData;

public class Get_Calculation_Premium_Rates_Service {
	private ArrayList<Mortality_tli> listMortalityTli;
	private ArrayList<Tpd_tli> listTpdTli;
	public  String searchMortalityTli(String gender) throws Exception
	{
		String  datareturn = null;
		try {
			PemiumTableData pemiumTableData = new PemiumTableData();
			setListMortalityTli(pemiumTableData.searchMortalityTli2(gender));
			datareturn = "Success";
		} catch (Exception e) {
			datareturn = "Fail";
		}
		return datareturn;
	}
	public  String searchTpdTli(String gender) throws Exception
	{
		String  datareturn = null;
		try {
			PemiumTableData pemiumTableData = new PemiumTableData();
			setListTpdTli(pemiumTableData.searchTpdTli2(gender));
			datareturn = "Success";
		} catch (Exception e) {
			datareturn = "Fail :"+e;
		}
		return datareturn;
	}
	private void setListTpdTli(ArrayList<Tpd_tli> listTpdTli)
	{
		this.listTpdTli = listTpdTli;
	}

	/**
	 * 
	 * @return ArrayList<Tpd_tli> : lookup.Tpd_tli
	 */
	public ArrayList<Tpd_tli> getListTpdTli()
	{
		return listTpdTli;
	}
	private void setListMortalityTli(ArrayList<Mortality_tli> listMortalityTli)
	{
		this.listMortalityTli = listMortalityTli;
	}
	/**
	 * 
	 * @return ArrayList<Mortality_tli> : lookup.Mortality_tli
	 */
	public ArrayList<Mortality_tli> getListMortalityTli()
	{
		return listMortalityTli;
	}
}
