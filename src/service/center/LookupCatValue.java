package service.center;

import java.util.ArrayList;

import layout.bean.productfac.beanset.LookupCatValueAcessData;
import service.ctrl.LookupCatValueData;
/**
 * 
 * @author Nara : 24*04-2019
 *
 */
public class LookupCatValue extends LookupCatValueData
{
     /**
      * 
      * @param String [] lookup_cat_id ส่งค่า lookup_cat_id 
      * @return ArrayList<LookupCatValueAcessData> : LookupCatValueAcessData <br>
      * Lookup_cat <br>
      * ArrayList<Lookup_value> listLookupValue : Lookup_value
      * @throws Exception
      */
     public ArrayList<LookupCatValueAcessData> searchLookupCatValue(String [] str) throws Exception
     {
    	 return super.searchLookupCatValue(str);
     }
}
