package service.product;

import java.util.ArrayList;

import layout.bean.productfac.product.Coop;
import layout.bean.productfac.product.Flp_fee;
import layout.bean.productfac.product.Mode;
import layout.bean.productfac.product.Occ;
import layout.bean.productfac.product.Participant;
import layout.bean.productfac.product.Product;
import layout.bean.productfac.product.Rider;
import layout.bean.productfac.product.Sale_history;
import layout.bean.productfac.product.Underwrite;
import layout.bean.productfac.product.Unw_accum_rule;
import layout.bean.productfac.product.Unw_cocredit_limit;
import layout.bean.productfac.product.Unw_hist_exist_prod;
import layout.bean.productfac.product.Unw_hist_med_sum;
import layout.bean.productfac.product.Unw_hist_med_sum_det;
import layout.bean.productfac.product.Unw_hist_rule;
import layout.bean.productfac.product.Unw_pol_issue_unit;
import layout.bean.productfac.product.Unw_rider_limit;
import layout.bean.productfac.product.Unw_substd_type;
import layout.bean.productfac.underwrite.Appendix_product;
import service.ctrl.ProductData;
import service.product.ctrl.CoopControlData;
import service.product.ctrl.FlpFeeControlData;
import service.product.ctrl.ModeControlData;
import service.product.ctrl.OccControlData;
import service.product.ctrl.ParticipantControlData;
import service.product.ctrl.SaleHistoryControlData;
import service.product.ctrl.UnderwriteControlData;
import service.product.ctrl.UnwAccumRuleControlData;
import service.product.ctrl.UnwCocreditLimitControlData;
import service.product.ctrl.UnwHistExistProdControlData;
import service.product.ctrl.UnwHistMedSumControlData;
import service.product.ctrl.UnwHistMedSumDetControlData;
import service.product.ctrl.UnwHistRuleControlData;
import service.product.ctrl.UnwPolIssueUnitControlData;
import service.product.ctrl.UnwRiderLimitControlData;
import service.product.ctrl.UnwSubstdTypeControlData;
import service.underwrite.ctrl.AppenDixProductControlData;

public class PorductProvision
{
	/**
	 * ข้อกำหนดการรับประกัน
	 */

	public void doProduct(Product product, Rider rider) throws Exception
	{
		new ProductData().saveProductData("U", product, rider);
	}

	public void doParticipant(ArrayList<Participant> listParticipant) throws Exception
	{
		new ParticipantControlData().insertParticipant(listParticipant);
	}

	public void doMode(ArrayList<Mode> listMode) throws Exception
	{
		new ModeControlData().insertProductMode(listMode);
	}

	public void doOcc(ArrayList<Occ> listOcc) throws Exception
	{
		new OccControlData().insertProductOcc(listOcc);
	}

	public void doSalesHistory(Sale_history sale_history) throws Exception
	{
		new SaleHistoryControlData().insertProductsaleHistory(sale_history);
	}

	public void doUnderwrite(Underwrite underwrite) throws Exception
	{
		new UnderwriteControlData().insertProductUndertrite(underwrite);
	}

	public void doUnwRiderLimit(ArrayList<Unw_rider_limit> listUnwRiderLimit) throws Exception
	{
		new UnwRiderLimitControlData().insertProductUnwRiderLimit(listUnwRiderLimit);
	}

	public void doAppenDixProduct(ArrayList<Appendix_product> listAppendixProduct) throws Exception
	{
		new AppenDixProductControlData().insertAppenDixProduct(listAppendixProduct);
	}

	public void doUnwCocreditLimit(ArrayList<Unw_cocredit_limit> listUnwCocreditLimit) throws Exception
	{
		new UnwCocreditLimitControlData().insertProductUnwCocreditLimit(listUnwCocreditLimit);
	}

	public void doUnwSubstdType(ArrayList<Unw_substd_type> listUnwSubstdType) throws Exception
	{
		new UnwSubstdTypeControlData().insertProductUnwSubstdType(listUnwSubstdType);
	}

	public void doUnwAccountRule(ArrayList<Unw_accum_rule> listUnwAccumRule) throws Exception
	{
		new UnwAccumRuleControlData().insertProductUnwAccumRule(listUnwAccumRule);
	}

	public void doUnwPolIssueUnit(ArrayList<Unw_pol_issue_unit> listUnwUnwPolIssueUnit) throws Exception
	{
		new UnwPolIssueUnitControlData().insertProductUnwPolIssueUnit(listUnwUnwPolIssueUnit);
	}

	public void doUnwHistRule(ArrayList<Unw_hist_rule> listUnwHistRule) throws Exception
	{
		new UnwHistRuleControlData().insertProductUnwHistRule(listUnwHistRule);
	}

	public void doUnwHistMedSum(ArrayList<Unw_hist_med_sum> listUnwHistMedSum) throws Exception
	{
		new UnwHistMedSumControlData().insertProductUnwHistMedSum(listUnwHistMedSum);
	}

	public void doUnwHistMedSumDet(ArrayList<Unw_hist_med_sum_det> listUnwHistMedSumDet) throws Exception
	{
		new UnwHistMedSumDetControlData().insertProductUnwHistMedSumDet(listUnwHistMedSumDet);
	}

	public void doUnwHistExistProd(ArrayList<Unw_hist_exist_prod> listUnwHistExistProd) throws Exception
	{
		new UnwHistExistProdControlData().insertProductUnwHistExistProd(listUnwHistExistProd);
	}

	public void doFlpFee(ArrayList<Flp_fee> listFlpFee) throws Exception
	{
		new FlpFeeControlData().insertProductFlpFee(listFlpFee);
	}

	public void doCoop(ArrayList<Coop> listCoop) throws Exception
	{
		new CoopControlData().insertCoop("U",listCoop);
	}
	 ///Pun Get All Rider //
   public ArrayList<Product> searchProductAtRider() throws Exception
	{
		return new ProductData().searchMainInsurance_byRider();
	}

}
