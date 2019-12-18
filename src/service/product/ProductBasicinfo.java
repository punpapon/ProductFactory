package service.product;

import java.util.ArrayList;

import layout.bean.productfac.beanset.ProductRiderAccessData;
import layout.bean.productfac.coverage.Coverage;
import layout.bean.productfac.product.Coop;
import layout.bean.productfac.product.Coop_commission;
import layout.bean.productfac.product.Coop_prem_discount;
import layout.bean.productfac.product.Coop_sum;
import layout.bean.productfac.product.Participant;
import layout.bean.productfac.product.Prem_install;
import layout.bean.productfac.product.Product;
import layout.bean.productfac.product.Rate_layout;
import layout.bean.productfac.product.Rider;
import service.ctrl.ProductData;
import service.product.ctrl.BasePlanSynchronous;
import service.product.ctrl.CoopCommissionControlData;
import service.product.ctrl.CoopControlData;
import service.product.ctrl.CoopPremDiscountControlData;
import service.product.ctrl.CoopSumControlData;
import service.product.ctrl.ParticipantControlData;
import service.product.ctrl.PremInstallControlData;
import service.product.ctrl.RateLayoutControlData;

public class ProductBasicinfo 
{
	private Product product;
	public ProductBasicinfo() {} 
	public ProductBasicinfo(Product product) throws Exception
	{
		this.product = product;
	}

	public ArrayList<Coverage> searchBasePlan() throws Exception 
	{
		return new BasePlanSynchronous().searchBasePlanSynchronous(Integer.toString(product.getCov_cat_id()));
	}
	
	public ArrayList<ProductRiderAccessData> searchRider() throws Exception
	{
		return new BasePlanSynchronous().searchRiderSynchronous();
	}
	
	////////////////////////////BEnz 17-10-2019 ///searchRiderGetBundle
	public ArrayList<ProductRiderAccessData> searchRiderGetBundle() throws Exception
	{
		return new BasePlanSynchronous().searchRiderGetBundle();
	}
	////////////////////////////
	
   public Product doProduct(Product product,Rider rider) throws Exception
   {
	   return new ProductData().saveProductData("U", product, rider);
   }
   
   public void doRateLayout(String rateCatId,ArrayList<Rate_layout> listRateLayout) throws Exception
   {
	   String [] rate_cat_id = new String [] {rateCatId};  
	   new RateLayoutControlData().insertRateLayout(rate_cat_id, listRateLayout);
   }
   
   public void doParticipant(ArrayList<Participant> listPartivipant) throws Exception
   {
	   new ParticipantControlData().insertParticipant(listPartivipant);
   }
   
   public void doPremInstall(String prd_code,ArrayList<Prem_install> listPremInstall) throws Exception
   {
	   new PremInstallControlData().insertPremInstall(prd_code, listPremInstall);
   }
   
   // Coop
   public void doCoop(ArrayList<Coop> listCoop) throws Exception
   {
	   new CoopControlData().insertCoop("I",listCoop);
   }
   
   public void doCoopCommission(ArrayList<Coop_commission> listCoopCommission) throws Exception
   {
	   new CoopCommissionControlData().insertCoop(listCoopCommission);
   }
   
   public void doCoopSum(ArrayList<Coop_sum> listCoopSum) throws Exception
   {
	   new CoopSumControlData().insertCoop(listCoopSum);
   }
   
   public void doCoopPremDiscount(ArrayList<Coop_prem_discount> listCoopPremDiscount) throws Exception
   {
	   new CoopPremDiscountControlData().insertCoop(listCoopPremDiscount);
   }
   ///Benz Get Case Rider Status APPROVED //
   public ArrayList<ProductRiderAccessData> searchRiderPR() throws Exception
	{
		return new BasePlanSynchronous().searchRiderSynchronousPR();
	}
	
   
}
