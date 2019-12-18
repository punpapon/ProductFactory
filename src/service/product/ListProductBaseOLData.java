package service.product;

import java.util.ArrayList;

import layout.bean.productfac.product.Product;
import service.product.ctrl.ListProductBaseOLControlData;

public class ListProductBaseOLData extends ListProductBaseOLControlData{
	
	public ArrayList<Product> searchListProductRiderOLNotBundle() throws Exception
	{
		return super.searchListRider();
	}
	
}
