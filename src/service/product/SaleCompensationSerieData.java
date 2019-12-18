package service.product;

import java.util.ArrayList;

import layout.bean.productfac.product.Sale_compensation_serie;
import service.product.ctrl.SaleCompensationSerieControlData;

public class SaleCompensationSerieData extends SaleCompensationSerieControlData
{
	public ArrayList<Sale_compensation_serie> searchByPrdCode() throws Exception
	{
		return super.searchByPrdCode();
	}
	
	public ArrayList<String []> searchSalesBenefits() throws Exception
	{
		return super.searchSalesBenefits();
	}
	
	public void doSaleCompensationSerie(ArrayList<Sale_compensation_serie> listData) throws Exception
	{
		insertSaleCompensationSerie(listData);
	}
}
