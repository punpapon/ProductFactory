package service.product;

import java.util.ArrayList;

import layout.bean.productfac.product.Unw_sum_range;
import service.product.ctrl.UnwSumRangeControlData;

public class UnwSumRangeData extends UnwSumRangeControlData
{
	public ArrayList<Unw_sum_range> searchProductUnwHistRule(String prd_code) throws Exception
	{
		return super.searchProductUnwHistRule(prd_code);
	}
	
	public void doProductUnwSumRange(ArrayList<Unw_sum_range> listUnw_Sum_Range) throws Exception 
	{
		insertProductUnwSumRange(listUnw_Sum_Range);
	}
}
