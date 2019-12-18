package service.center;

import java.util.ArrayList;

import layout.bean.productfac.beanset.AppendixRelationAccessData;
import layout.bean.productfac.underwrite.Appendix;
import service.underwrite.ctrl.AppenDixControlData;

public class LookupProductData extends AppenDixControlData
{
    public ArrayList<Appendix> searchAllAppendix() throws Exception
    {
    	return searchAllAppenDix();
    }
    
    public ArrayList<AppendixRelationAccessData> searchAppendixRelation() throws Exception
    {
    	return super.searchAppendixRelation();
    }
}
