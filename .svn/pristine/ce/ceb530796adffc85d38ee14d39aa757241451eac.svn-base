package service.baseplan;

import java.util.ArrayList;

import layout.bean.productfac.coverage.Nonforf_provision;
import service.baseplan.ctrl.NonforfProvisionData;

public class BasePlanGrantRightsInsure 
{
     public void doNonforfProvisionData(Nonforf_provision nonforf_provision) throws Exception
     {
    	 ArrayList<Nonforf_provision> list = new ArrayList<>();
    	 list.add(nonforf_provision);
    	 new NonforfProvisionData().insertNonforfprovision(list);
     }
     
     public void doNonforfProvisionOLData(ArrayList<Nonforf_provision> listNonforfProvision) throws Exception
     {
    	 new NonforfProvisionData().insertNonforfprovision(listNonforfProvision);
     }
}
