package service;

import java.util.ArrayList;
import java.util.Arrays;

import layout.bean.productfac.product.Coop;
import layout.bean.productfac.product.Coop_commission;
import layout.bean.productfac.product.Coop_prem_discount;
import layout.bean.productfac.product.Coop_sum;
import layout.bean.productfac.product.Participant;
import layout.bean.productfac.product.Prem_install;
import layout.bean.productfac.product.Product;
import layout.bean.productfac.product.Rate_layout;
import layout.bean.productfac.product.Rider;
import service.product.ProductBasicinfo;

public class ProductCL_SaveData_Service {
	ProductBasicinfo productBasicinfo;
	private String sys_eff_date;
	private String sale_eff_date;
	private String sale_exp_date;
	private String underwrite_opt;
	private String cov_code;
	private String dist_chan_id;
	private String flp_start_date;
	private String sale_chan_id;
	private String prem_disc_rate;
	private String max_commission;
	private String balloon_prd_code;
	private String age_band;
	private String min_period;
	private String min_period_unit;
	private String max_period;
	private String max_period_unit;
	private String max_insure_age;
	private String max_insure_age_unit;
	public String setProductObj(ArrayList<Product> lstProduct,ArrayList<Rider> lstRider) {
		String  datareturn = null;
		try {
			if(lstProduct.size() == lstRider.size()) {
				for (int i = 0; i < lstProduct.size() ; i++) {
					Product product = lstProduct.get(i);
					Rider rider = lstRider.get(i);
					productBasicinfo = new ProductBasicinfo();
					print(product);
					this.productBasicinfo.doProduct(product,rider);
				}
			}
			datareturn = "Success";
		} catch (Exception e) {
			datareturn = "Fail";
			e.printStackTrace();
		}
		return datareturn;
	}
	
	private void print(Product product) throws Exception
	{
		setValuesNULL(product);
		String sql= "update product.product set  core_biz_prd_code = '"+product.getCore_biz_prd_code()+"'"+
		    	  ", cov_code = "+cov_code+""+
		          ", cov_cat_id = "+product.getCov_cat_id()+""+
		          ", status = '"+product.getStatus()+"'"+
		          ", name_th = '"+product.getName_th()+"'"+
		          ", name_en = '"+product.getName_en()+"'"+
		          ", market_name_th = '"+product.getMarket_name_th()+"'"+
		          ", market_name_en = '"+product.getMarket_name_en()+"'"+
		          ", prd_design = '"+product.getPrd_design()+"'"+
		          ", acct_dist_code = '"+product.getAcct_dist_code()+"'"+
		          ", dist_chan_id = "+dist_chan_id+""+
		          ", sale_chan_id = "+sale_chan_id+""+
		          ", sale_partner_code = '"+product.getSale_partner_code()+"'"+
		          ", is_flp = "+product.getIs_flp()+""+
		          ", is_flp_fee = "+product.getIs_flp_fee()+""+
		          ", flp_day = "+product.getFlp_day()+""+
		          ", flp_start_date = "+flp_start_date+""+
		          ", is_fin_acc = "+product.getIs_fin_acc()+""+
		          ", is_insurance = "+product.getIs_insurance()+""+
		          ", score_aml = '"+product.getScore_aml()+"'"+
		          ", sys_eff_date = "+sys_eff_date+""+
		          ", sale_eff_date = "+sale_eff_date+""+
		          ", sale_exp_date = "+sale_exp_date+""+
		          ", prem_disc_rate = "+prem_disc_rate+""+
		          ", balloon_prd_code = "+balloon_prd_code+""+
		          ", age_band = "+age_band+""+
		          ", fyp_credit_card = '"+product.getFyp_credit_card()+"'"+
		          ", ryp_credit_card = '"+product.getRyp_credit_card()+"'"+
		          ", underwrite_opt = "+underwrite_opt+""+
		          ", reinsurance_opt = '"+product.getReinsurance_opt()+"'"+
		          ", loan_type = '"+product.getLoan_type()+"'"+
		          ", is_prem_install = "+product.getIs_prem_install()+""+
		          ", max_commission = "+max_commission+""+
		          ", first_beneficiary = '"+product.getFirst_beneficiary()+"'"+
		          ", master_policy = '"+product.getMaster_policy()+"'"+
		          ", user_code = '"+product.getUser_code()+"'"+
		          ", update_time = '"+product.getUpdate_time()+"'"+
		          ", min_period = "+min_period+""+
		          ", min_period_unit = "+min_period_unit+""+
		          ", max_period = "+max_period+""+
		          ", max_period_unit = "+max_period_unit+""+
		          ", max_insure_age = "+max_insure_age+""+
		          ", max_insure_age_unit = "+max_insure_age_unit+" where prd_code = '" +product.getPrd_code()+"'";
	System.out.println(sql);
	}
	private void setValuesNULL(Product product) 
	   {
		   this.sys_eff_date  = "NULL";
	       if (product.getSys_eff_date()  != null)
	          sys_eff_date = "\'"+product.getSys_eff_date().toString()+"\'";
	       this.sale_eff_date  = "NULL";
	       if (product.getSale_eff_date()  != null)
	          sale_eff_date = "\'"+product.getSale_eff_date().toString()+"\'";
	       this.sale_exp_date  = "NULL";
	       if (product.getSale_exp_date()  != null)
	          sale_exp_date = "\'"+product.getSale_exp_date().toString()+"\'";
	       this.underwrite_opt = "NULL";
	       if(product.getUnderwrite_opt() != null)
	    	   underwrite_opt = "\'"+product.getUnderwrite_opt()+"\'";
	       this.cov_code = "NULL";
	       if(product.getCov_code() != null)
	    	   cov_code = "\'"+product.getCov_code()+"\'";
	       this.dist_chan_id = "NULL";
	       if(product.getDist_chan_id() > 0)
	    	   dist_chan_id = "\'"+product.getDist_chan_id()+"\'";
	       this.sale_chan_id = "NULL";
	       if(product.getSale_chan_id() > 0)
	    	   sale_chan_id = "\'"+product.getSale_chan_id()+"\'";
	       this.flp_start_date = "NULL";
	       if(product.getDist_chan_id() > 0)
	    	   flp_start_date = "\'"+product.getFlp_start_date()+"\'";
	       this.prem_disc_rate = "NULL";
	       if(product.getPrem_disc_rate() != null)
	    	   prem_disc_rate = "\'"+product.getPrem_disc_rate()+"\'";
	       this.max_commission = "NULL";
	       if(product.getMax_commission() != null)
	    	   max_commission = "\'"+product.getMax_commission()+"\'";
	       this.balloon_prd_code = "NULL";
	       if(product.getBalloon_prd_code() != null)
	    	   balloon_prd_code = "\'"+product.getBalloon_prd_code()+"\'";
	       this.age_band = "NULL";
	       if(product.getAge_band() != null)
	    	   age_band = "\'"+product.getAge_band()+"\'";
	       this.min_period = "NULL";
	       if(product.getMin_period() > 0)
	    	   min_period = "\'"+product.getMin_period()+"\'";
	       this.min_period_unit = "NULL"; 
	       if(product.getMin_period_unit() != null)
	    	   min_period_unit = "\'"+product.getMin_period_unit()+"\'";
	       this.max_period = "NULL";
	       if(product.getMax_period() > 0)
	    	   max_period = "\'"+product.getMax_period()+"\'";
	       this.max_period_unit = "NULL"; 
	       if(product.getMax_period_unit() != null)
	    	   max_period_unit = "\'"+product.getMax_period_unit()+"\'";
	       this.max_insure_age = "NULL";
	       if(product.getMax_insure_age() > 0)
	    	   max_insure_age = "\'"+product.getMax_insure_age()+"\'";
	       this.max_insure_age_unit = "NULL"; 
	       if(product.getMax_insure_age_unit() != null)
	    	   max_insure_age_unit = "\'"+product.getMax_insure_age_unit()+"\'";
	   }
	public String setParticipant(ArrayList<Participant> lstParticipant) {
		String  datareturn = null;
		try {
			productBasicinfo = new ProductBasicinfo();
			this.productBasicinfo.doParticipant(lstParticipant);
			
			datareturn = "Success";
		} catch (Exception e) {
			datareturn = "Fail";
			e.printStackTrace();
		}
		return datareturn;
	}
	
	public String setRateLayout(ArrayList<Rate_layout> lstRateLayout) {
		String datareturn = null;
		try {
			ArrayList<Rate_layout> myArray_cat_1 = new ArrayList<>();
			ArrayList<Rate_layout> myArray_cat_2 = new ArrayList<>();
			ArrayList<Rate_layout> myArray_cat_12 = new ArrayList<>();
			ArrayList<Rate_layout> myArray_cat_15 = new ArrayList<>();
			ArrayList<Rate_layout> myArray_cat_16 = new ArrayList<>();
			for(Rate_layout rate_layout : lstRateLayout) {
				String rate_cat_id = Integer.toString(rate_layout.getRate_cat_id());
				if(rate_cat_id.equals("1")) {
					myArray_cat_1.add(rate_layout);
				}else if(rate_cat_id.equals("2")) {
					myArray_cat_2.add(rate_layout);
				}else if(rate_cat_id.equals("12")) {
					myArray_cat_12.add(rate_layout);
				}else if(rate_cat_id.equals("15")) {
					myArray_cat_15.add(rate_layout);
				}else if(rate_cat_id.equals("16")) {
					myArray_cat_16.add(rate_layout);
				}
			}
			
			//if(myArray_cat_1.size() != 0) {
				productBasicinfo = new ProductBasicinfo();
				this.productBasicinfo.doRateLayout("1",myArray_cat_1);
			//}
			
			//if(myArray_cat_2.size() != 0) {
				productBasicinfo = new ProductBasicinfo();
				this.productBasicinfo.doRateLayout("2",myArray_cat_2);
			//}
			
			//if(myArray_cat_12.size() != 0) {
				productBasicinfo = new ProductBasicinfo();
				this.productBasicinfo.doRateLayout("12",myArray_cat_12);
			//}
			
			//if(myArray_cat_15.size() != 0) {
				productBasicinfo = new ProductBasicinfo();
				this.productBasicinfo.doRateLayout("15",myArray_cat_15);
			//}
			
			//if(myArray_cat_16.size() != 0) {
				productBasicinfo = new ProductBasicinfo();
				this.productBasicinfo.doRateLayout("16",myArray_cat_16);
			//}
			
			datareturn = "Success";
		} catch (Exception e) {
			datareturn = "Fail";
			e.printStackTrace();
		}
		return datareturn;
	}
	
	public String setPremInstall(String prd_code, ArrayList<Prem_install> lstPremInstall) {
		String datareturn = null;
		try {
			
			productBasicinfo = new ProductBasicinfo();
			this.productBasicinfo.doPremInstall(prd_code, lstPremInstall);;
			
			datareturn = "Success";
		} catch (Exception e) {
			datareturn = "Fail";
			e.printStackTrace();
		}
		return datareturn;
	}
	
	/***********************COOP*********************/
	public String setCoop(ArrayList<Coop> lstCoop) {
		String  datareturn = null;
		try {
			productBasicinfo = new ProductBasicinfo();
			this.productBasicinfo.doCoop(lstCoop);
			
			datareturn = "Success";
		} catch (Exception e) {
			datareturn = "Fail";
			e.printStackTrace();
		}
		return datareturn;
	}
	
	public String setCoopCommission(ArrayList<Coop_commission> lstCoopCommission) {
		String  datareturn = null;
		try {
			productBasicinfo = new ProductBasicinfo();
			this.productBasicinfo.doCoopCommission(lstCoopCommission);
			
			datareturn = "Success";
		} catch (Exception e) {
			datareturn = "Fail";
			e.printStackTrace();
		}
		return datareturn;
	}
	
	public String setCoopSum(ArrayList<Coop_sum> lstCoopSum) {
		String  datareturn = null;
		try {
			productBasicinfo = new ProductBasicinfo();
			this.productBasicinfo.doCoopSum(lstCoopSum);
			
			datareturn = "Success";
		} catch (Exception e) {
			datareturn = "Fail";
			e.printStackTrace();
		}
		return datareturn;
	}
	
	public String setCoopPremDiscount(ArrayList<Coop_prem_discount> lstCoopPremDiscount) {
		String  datareturn = null;
		try {
			productBasicinfo = new ProductBasicinfo();
			this.productBasicinfo.doCoopPremDiscount(lstCoopPremDiscount);
			
			datareturn = "Success";
		} catch (Exception e) {
			datareturn = "Fail";
			e.printStackTrace();
		}
		return datareturn;
	}
	/********************END COOP*********************/
	
}
