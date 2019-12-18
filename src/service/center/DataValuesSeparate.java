package service.center;

import java.util.ArrayList;

import layout.bean.productfac.appconfig.Coverage_select_page;
import layout.bean.productfac.appconfig.Product_select_page;
import service.ctrl.DataValuesSeparateData;

public class DataValuesSeparate extends DataValuesSeparateData
{
	/**
	 * 
	 * @param cov_cat_id
	 * @param appType : B = BasePlan, P =product
	 * @throws Exception
	 */
     public void doAppPage(String cov_cat_id, String appType) throws Exception
     {
    	insertAppPage(cov_cat_id, appType);
     }
     
     /**
      * 
      * @param cov_code
      * @param appPage [] : tab ที่เลือก
      * @throws Exception
      */
     public void doConstantAppPageBasePlan(String cov_code,String [] appPage) throws Exception
     {
    	 insertConstantAppPage("B", cov_code, appPage);
     }
     
     /**
      * 
      * @param cov_code
      * @param appPage [] : tab ที่เลือก
      * @throws Exception
      */
     public void doConstantAppPageRider(String cov_code,String [] appPage) throws Exception
     {
    	 insertConstantAppPage("R", cov_code, appPage);
     }
     
     /**
      * 
      * @param cov_code
      * @param appPage [] : tab ที่เลือก
      * @throws Exception
      */
     public void doConstantAppPageproduct(String prd_code,String [] appPage) throws Exception
     {
    	 insertConstantAppPage("P", prd_code, appPage);
     }
     
     public ArrayList<Coverage_select_page> searchAppPageBasePlan(String cov_code) throws Exception
     {
    	 return searchAppPage("B", cov_code);
     }
     
     public ArrayList<Coverage_select_page> searchAppPageBaseRider(String cov_code) throws Exception
     {
    	 return  searchAppPage("R", cov_code);
     }
     
     public ArrayList<Product_select_page> searchAppPageproduct(String prd_code) throws Exception
     {
    	 return searchAppPage("P", prd_code);
     }
}
