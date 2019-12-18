package service.product;

import java.util.ArrayList;

import layout.bean.productfac.beanset.RateLayoutPremAccessData;
import layout.bean.productfac.beanset.UnwHistRuleAccessData;
import layout.bean.productfac.product.Coop;
import layout.bean.productfac.product.Coop_commission;
import layout.bean.productfac.product.Coop_prem_discount;
import layout.bean.productfac.product.Coop_sum;
import layout.bean.productfac.product.Flp_fee;
import layout.bean.productfac.product.Formula;
import layout.bean.productfac.product.Limit_cond;
import layout.bean.productfac.product.Limit_cond_amt;
import layout.bean.productfac.product.Limit_cond_serie;
import layout.bean.productfac.product.Mode;
import layout.bean.productfac.product.Occ;
import layout.bean.productfac.product.Participant;
import layout.bean.productfac.product.Prem_collect;
import layout.bean.productfac.product.Prem_install;
import layout.bean.productfac.product.Product;
import layout.bean.productfac.product.Product_change;
import layout.bean.productfac.product.Rate_layout;
import layout.bean.productfac.product.Rider;
import layout.bean.productfac.product.Sale_compensation;
import layout.bean.productfac.product.Sale_history;
import layout.bean.productfac.product.Underwrite;
import layout.bean.productfac.product.Unw_accum_rule;
import layout.bean.productfac.product.Unw_cocredit_limit;
import layout.bean.productfac.product.Unw_pol_issue_unit;
import layout.bean.productfac.product.Unw_rider_limit;
import layout.bean.productfac.product.Unw_substd_type;
import layout.bean.productfac.underwrite.Appendix_product;
import service.baseplan.ctrl.RateLayoutData;
import service.fnc.ConstantRateCatIDValues;
import service.fnc.ConstantValues;
import service.product.ctrl.CoopControlData;
import service.product.ctrl.FlpFeeControlData;
import service.product.ctrl.FormulaControlData;
import service.product.ctrl.LimitCondControlData;
import service.product.ctrl.ModeControlData;
import service.product.ctrl.OccControlData;
import service.product.ctrl.ParticipantControlData;
import service.product.ctrl.PremCollectControlData;
import service.product.ctrl.PremInstallControlData;
import service.product.ctrl.ProductChangeControlData;
import service.product.ctrl.ProductControlData;
import service.product.ctrl.RateLayoutControlData;
import service.product.ctrl.SaleCompensationControlData;
import service.product.ctrl.SaleHistoryControlData;
import service.product.ctrl.UnderwriteControlData;
import service.product.ctrl.UnwAccumRuleControlData;
import service.product.ctrl.UnwCocreditLimitControlData;
import service.product.ctrl.UnwHistRuleControlData;
import service.product.ctrl.UnwPolIssueUnitControlData;
import service.product.ctrl.UnwRiderLimitControlData;
import service.product.ctrl.UnwSubstdTypeControlData;
import service.underwrite.ctrl.AppenDixProductControlData;

public class ProductAccesData 
{
	private Product product;
	private ArrayList<Rider> listProductRider;
	private ArrayList<Rider> listProductRider2;
	private ArrayList<Product> listProduct;
	private ArrayList<Rate_layout> listRate_layout;
	private ArrayList<Participant> listParticipant;
	private ArrayList<Coop> listCoop;
	private ArrayList<Coop_commission> listCoop_commission;
	private ArrayList<Coop_sum> listCoop_sum;
	private ArrayList<Coop_prem_discount> listCoop_prem_discount;
	private ArrayList<RateLayoutPremAccessData> listRateLayoutNAR;
	private ArrayList<Limit_cond> listLimit_cond;
	private ArrayList<Limit_cond_serie> listLimitCondSerie;
	private ArrayList<Limit_cond_amt> listLimitCondAmt;
	private ArrayList<Prem_collect> listPrem_collect;
	private ArrayList<Formula> listFormula;
	private ArrayList<Sale_compensation> listSaleCompensation;
	private ArrayList<Product_change> listProductChange;
	private ArrayList<String[]> listProductData;
	private ArrayList<Mode> listProductMode;
	private ArrayList<Occ> listProductOcc;
	private ArrayList<Sale_history> listSaleHistory;
	private ArrayList<Prem_install> ListPremInstall;
	private Underwrite underwrite;
	private ArrayList<Unw_substd_type> listProductUnwSubstdType;
	private ArrayList<Unw_accum_rule> listProductUnwAccumRule;
	private ArrayList<Unw_pol_issue_unit> listProductUnwPolIssueUnit;
	private ArrayList<UnwHistRuleAccessData> listProductUnwHistRule;
	private ArrayList<Flp_fee> listProductFlpFee;
	private ArrayList<Unw_cocredit_limit> listUnwCocreditLimit;
	private ArrayList<Unw_rider_limit> ListUnwRiderLimit;
	private ArrayList<Appendix_product> listAppenDixProduct;
	
	public ProductAccesData(Product product) throws Exception 
	{
		this.product = product;
		ConstantValues.PRD_CODE = product.getPrd_code();
		prepareAccessData();
	}

	private void prepareAccessData() throws Exception
	{
		setBasicinfo ();
		setCalinsurancePremiums();
		setGrantRightsInsure();
		setSaleCompensation();
		setPorductProvision();
	}
	
	/**
	 * Set Tab Basic Info
	 * 
	 * @throws Exception
	 */
	private void setBasicinfo() throws Exception
	{
		searchProduct();
		searchProductRider();
		searchProductData();
		searchRateLayout();
		searchParticipant();
		sarchPremInstall();
		searchcoop();
		searchCoopCommission();
		searchCoopSum();
		searchCoopPremDiscount();
	}


	private void setCalinsurancePremiums() throws Exception
	{
		searchLimitCond();
		seardchPremCollect();
		seardchFormula();
	}
	
	/**
     * ข้อมูล การใช้สิทธิ์ตามกรมธรรม์
     * product.product_change
     * product.rate_layout
     * product.formula
     * @throws Exception
     */
	private void setGrantRightsInsure() throws Exception 
	{
		searchProductChange();
	}
	
	/**
	 * ผลประโยชน์การขาย
	 * product.sale_compensation
	 * @throws Exception
	 */
	private void setSaleCompensation() throws Exception 
	{
		searchSaleCompensation();
	}
	/**
	 * ข้อกำหนดการรับประกัน
	 */
	private void setPorductProvision() throws Exception 
	{
		searchMode();
		searchOcc();
		searchSaleHistory();
		searchProductUnderwrite();
		searchUnwRiderLimit();
		searchAppDixProduct();
		searchUnwCocreditLimit();
		searchUnwSubstdType();
		searchUnwAccumRule();
		searchUnwPolIssueUnit();
		searchUnwHistRule();
		searchFlpFee();
	}

	private void searchMode() throws Exception 
	{
		setListProductMode(new ModeControlData().searchProductMode(product.getPrd_code()));
	}
	public ArrayList<Mode> getListProductMode() 
	{
		return listProductMode;
	}
	
	public void setListProductMode(ArrayList<Mode> listProductMode) 
	{
		this.listProductMode = listProductMode;
	}

	private void searchOcc() throws Exception 
	{
		setListProductOcc(new OccControlData().searchProductOcc(product.getPrd_code()));
	}

	private void setListProductOcc(ArrayList<Occ> listProductOcc) 
	{
		this.listProductOcc = listProductOcc;
	}

	public ArrayList<Occ> getListProductOcc() 
	{
		return listProductOcc;
	}

	private void searchSaleHistory() throws Exception
	{
		setListSaleHistory(new SaleHistoryControlData().searchProductSaleHistory(product.getPrd_code()));
	}

	private void setListSaleHistory(ArrayList<Sale_history> listSaleHistory) 
	{
		this.listSaleHistory = listSaleHistory;
	}

	public ArrayList<Sale_history> getListSaleHistory() 
	{
		return listSaleHistory;
	}

	private void searchUnwRiderLimit() throws Exception 
	{
		setListUnwRiderLimit(new UnwRiderLimitControlData().searchProductUnwRiderLimit(product.getPrd_code()));
	}
	
	private void setListUnwRiderLimit(ArrayList<Unw_rider_limit> ListUnwRiderLimit) 
	{
		this.ListUnwRiderLimit = ListUnwRiderLimit;
	}

	public ArrayList<Unw_rider_limit> getListUnwRiderLimit() 
	{
		return ListUnwRiderLimit;
	}
    
	/**
	 * underwrite.appen_dix_product
	 * @throws Exception
	 */
	private void searchAppDixProduct() throws Exception 
	{
		setListAppenDixProduct(new AppenDixProductControlData().searchAppenDixProduct(product.getPrd_code()));
	}	
	
	public ArrayList<Appendix_product> getListAppenDixProduct() 
	{
		return listAppenDixProduct;
	}

	public void setListAppenDixProduct(ArrayList<Appendix_product> listAppenDixProduct) 
	{
		this.listAppenDixProduct = listAppenDixProduct;
	}

	private void searchProductUnderwrite() throws Exception 
	{
		setUnderwrite(new UnderwriteControlData().searchProductUnderwrite(product.getPrd_code()));	
	}
	
	private void setUnderwrite(Underwrite underwrite) 
	{
		this.underwrite = underwrite;
	}
	
	public Underwrite getUnderwrite() {
		return underwrite;
	}

	private void searchUnwSubstdType()  throws Exception
	{
		setListProductUnwSubstdType(new UnwSubstdTypeControlData().searchProductUnwSubstdType(product.getPrd_code()));
	}


	private void searchUnwCocreditLimit() throws Exception 
	{
		setListUnwCocreditLimit(new UnwCocreditLimitControlData().searchProductUnwCocreditLimit(product.getPrd_code()));
	}

	private void setListUnwCocreditLimit(ArrayList<Unw_cocredit_limit> listUnwCocreditLimit) 
	{
		this.listUnwCocreditLimit = listUnwCocreditLimit;
	}

	public ArrayList<Unw_cocredit_limit> getListUnwCocreditLimit() 
	{
		return listUnwCocreditLimit;
	}

	public ArrayList<Unw_substd_type> getListProductUnwSubstdType() 
	{
		return listProductUnwSubstdType;
	}

	public void setListProductUnwSubstdType(ArrayList<Unw_substd_type> listProductUnwSubstdType) 
	{
		this.listProductUnwSubstdType = listProductUnwSubstdType;
	}


	private void searchUnwAccumRule() throws Exception 
	{
		setListProductUnwAccumRule(new UnwAccumRuleControlData().searchProductUnwAccumRule(product.getPrd_code()));
	}
	
	private void setListProductUnwAccumRule(ArrayList<Unw_accum_rule> listProductUnwAccumRule) 
	{
		this.listProductUnwAccumRule = listProductUnwAccumRule;
	}

	public ArrayList<Unw_accum_rule> getListProductUnwAccumRule() 
	{
		return listProductUnwAccumRule;
	}

	private void searchUnwPolIssueUnit() throws Exception 
	{
		setListProductUnwPolIssueUnit(new UnwPolIssueUnitControlData().searchProductUnwPolIssueUnit(product.getPrd_code()));
	}

	public ArrayList<Unw_pol_issue_unit> getListProductUnwPolIssueUnit() 
	{
		return listProductUnwPolIssueUnit;
	}

	public void setListProductUnwPolIssueUnit(ArrayList<Unw_pol_issue_unit> listProductUnwPolIssueUnit) 
	{
		this.listProductUnwPolIssueUnit = listProductUnwPolIssueUnit;
	}
	
	private void searchUnwHistRule() throws Exception 
	{
		setListProductUnwHistRule(new UnwHistRuleControlData().searchProductUnwHistRule(product.getPrd_code()));
	}
    
	public ArrayList<UnwHistRuleAccessData> getListProductUnwHistRule() {
		return listProductUnwHistRule;
	}

	public void setListProductUnwHistRule(ArrayList<UnwHistRuleAccessData> listProductUnwHistRule) 
	{
		this.listProductUnwHistRule = listProductUnwHistRule;
	}
	private void searchFlpFee() throws Exception 
	{
		setListProductFlpFee(new FlpFeeControlData().searchProductFlpFee(product.getPrd_code()));
	}

	public ArrayList<Flp_fee> getListProductFlpFee() 
	{
		return listProductFlpFee;
	}

	public void setListProductFlpFee(ArrayList<Flp_fee> listProductFlpFee) 
	{
		this.listProductFlpFee = listProductFlpFee;
	}

	private void searchLimitCond() throws Exception
	{
		LimitCondControlData  limitCondControlData = new LimitCondControlData ();
		setListLimitCond(limitCondControlData.searchLimitCond(product.getPrd_code()));
		setListLimitCondSerie(limitCondControlData.searchLimitCondSerie(product.getPrd_code()));
		setListLimitCondAmt(limitCondControlData.searchLimitCondAmt(product.getPrd_code()));
	}
	private void seardchPremCollect() throws Exception
	{
		PremCollectControlData  premCollectControlData = new PremCollectControlData ();
		setListPrem_collect(premCollectControlData.seardchPremCollect(product.getPrd_code()));
	}
	private void seardchFormula() throws Exception
	{
		FormulaControlData  formulaControlData = new FormulaControlData ();
		setListFormula(formulaControlData.seardchFormula(product.getPrd_code()));
	}
	
	private void searchProductChange() throws Exception  
	{
		ProductChangeControlData data = new ProductChangeControlData();
		setListProductChange(data.searchProductChange(product.getPrd_code()));
	}
	
	private void searchSaleCompensation() throws Exception 
	{
		SaleCompensationControlData data = new SaleCompensationControlData();
		setListSaleCompensation(data.searchProductChange(product.getPrd_code()));
		
	}
	
	public ArrayList<Product_change> getListProductChange() 
	{
		return listProductChange;
	}

	private void setListProductChange(ArrayList<Product_change> listProductChange) 
	{
		this.listProductChange = listProductChange;
	}

	private void setListSaleCompensation(ArrayList<Sale_compensation> listSaleCompensation) 
	{
		this.listSaleCompensation = listSaleCompensation;
	}

	public ArrayList<Sale_compensation> getListSaleCompensation() 
	{
		return listSaleCompensation;
	}
	
	private void setListFormula(ArrayList<Formula> listFormula)
	{
		this.listFormula = listFormula;
	}

	public ArrayList<Formula> getListFormula()
	{
		return listFormula;
	}
	
	private void setListPrem_collect(ArrayList<Prem_collect> listPrem_collect)
	{
		this.listPrem_collect = listPrem_collect;
	}

	public ArrayList<Prem_collect> getListPrem_collect()
	{
		return listPrem_collect;
	}
	private void setListLimitCondAmt(ArrayList<Limit_cond_amt> listLimitCondAmt)
	{
		this.listLimitCondAmt = listLimitCondAmt;
	}

	public ArrayList<Limit_cond_amt> getListLimitCondAmt()
	{
		return listLimitCondAmt;
	}
	
	private void setListLimitCondSerie(ArrayList<Limit_cond_serie> listLimitCondSerie)
	{
		this.listLimitCondSerie = listLimitCondSerie;
	}

	public ArrayList<Limit_cond_serie> getListLimitCondSerie()
	{
		return listLimitCondSerie;
	}
	
	private void setListLimitCond(ArrayList<Limit_cond> listLimit_cond)
	{
		this.listLimit_cond = listLimit_cond;
	}

	public ArrayList<Limit_cond> getListLimitCond()
	{
		return listLimit_cond;
	}
	
	
	private void searchCoopPremDiscount() throws Exception
	{
		CoopControlData  coopControlData = new CoopControlData ();
		setListCoop_prem_discount(coopControlData.searchCoop_prem_discount(product.getPrd_code()));
	}
	private void setListCoop_prem_discount(ArrayList<Coop_prem_discount> listCoop_prem_discount)
	{
		this.listCoop_prem_discount = listCoop_prem_discount;
	}
	public ArrayList<Coop_prem_discount> getListCoop_prem_discount()
	{
		return listCoop_prem_discount;
	}
	private void searchCoopSum() throws Exception
	{
		CoopControlData  coopControlData = new CoopControlData ();
		setListCoop_Sum(coopControlData.searchCoopSum(product.getPrd_code()));
	}
	private void setListCoop_Sum(ArrayList<Coop_sum> listCoop_sum)
	{
		this.listCoop_sum = listCoop_sum;
	}

	public ArrayList<Coop_sum> getListCoop_Sum()
	{
		return listCoop_sum;
	}
	private void searchCoopCommission() throws Exception
	{
		CoopControlData  coopControlData = new CoopControlData ();
		setListCoop_Commission(coopControlData.searchCoopCommission(product.getPrd_code()));
	}
	private void setListCoop_Commission(ArrayList<Coop_commission> listCoop_commission)
	{
		this.listCoop_commission = listCoop_commission;
	}

	public ArrayList<Coop_commission> getListCoop_Commission()
	{
		return listCoop_commission;
	}
	
	private void searchcoop() throws Exception
	{
		CoopControlData  coopControlData = new CoopControlData ();
		setListCoop(coopControlData.searchCoop(product.getPrd_code()));
	}
	private void setListCoop(ArrayList<Coop> listCoop)
	{
		this.listCoop = listCoop;
	}

	public ArrayList<Coop> getListCoop()
	{
		return listCoop;
	}
	private void searchParticipant() throws Exception
	{
		ParticipantControlData  participantData = new ParticipantControlData ();
		String [] str = new String [getListProductRider2().size()];
		for (int i = 0; i < getListProductRider2().size(); i++) {
			str[i] = getListProductRider2().get(i).getPrd_rider_code();
		}
		setListParticipant(participantData.searchParticipant(str));
	}
	
	private void setListParticipant(ArrayList<Participant> listParticipant)
	{
		this.listParticipant = listParticipant;
	}

	public ArrayList<Participant> getListParticipant()
	{
		return listParticipant;
	}
	
	private void sarchPremInstall() throws Exception 
	{
	     setListPremInstall(new PremInstallControlData().seardchPremInstall(product.getPrd_code()));
	}
	
	private void setListPremInstall(ArrayList<Prem_install> ListPremInstall) 
	{
		this.ListPremInstall = ListPremInstall;
	}

	public ArrayList<Prem_install> getListPremInstall() 
	{
		return ListPremInstall;
	}

	private void searchRateLayout() throws Exception
	{
		RateLayoutControlData  rateLayoutData = new RateLayoutControlData ();
		setListRateLayout(rateLayoutData.searchRateLayout(product.getPrd_code()));
	}
	
	private void setListRateLayout(ArrayList<Rate_layout> listRate_layout)
	{
		this.listRate_layout = listRate_layout;
	}

	public ArrayList<Rate_layout> getListRateLayout()
	{
		return listRate_layout;
	}
	
	private void searchProduct() throws Exception
	{
		ProductControlData  productControlData = new ProductControlData ();
		setListProduct(productControlData.searchProduct(product.getPrd_code()));
	}
	
	private void setListProduct(ArrayList<Product> listProduct)
	{
		this.listProduct = listProduct;
	}

	public ArrayList<Product> getListProduct()
	{
		return listProduct;
	}
	
	
	private void searchProductRider() throws Exception
	{
		ProductControlData  productControlData = new ProductControlData ();
		setListProductRider(productControlData.searchProductRider(product.getPrd_code()));
		setListProductRider2(productControlData.searchProductRider_Participant(product.getPrd_code()));
		
	}
	private void setListProductRider(ArrayList<Rider> listProductRider)
	{
		this.listProductRider = listProductRider;
	}

	public ArrayList<Rider> getListProductRider()
	{
		return listProductRider;
	}
	
	
	private ArrayList<Rider> getListProductRider2() {
		return listProductRider2;
	}

	private void setListProductRider2(ArrayList<Rider> listProductRider2) {
		this.listProductRider2 = listProductRider2;
	}

	/**
	 * ค้นหาข้อมูล Product ทั้งหมด ของ prd_code
	 * @throws Exception 
	 */
	private void searchProductData() throws Exception 
	{
		String [] prd_code = new String [getListProductRider2().size()];
		for(int i = 0;i<prd_code.length;i++)
		{
			prd_code[i] =  getListProductRider2().get(i).getPrd_rider_code();
		}
		if (prd_code.length == 0) {
			setListProductData(new ArrayList<String[]>());
		}else {
			ProductControlData  productControlData = new ProductControlData ();
			setListProductData(productControlData.searchProductData(prd_code));
		}
		
		
	}
	public ArrayList<String[]> getListProductData() {
		return listProductData;
	}

	public void setListProductData(ArrayList<String[]> listProductData) {
		this.listProductData = listProductData;
	}

	/**
	 * ทุนค้มครองที่ลดลง
	 * 
	 * @throws Exception
	 */
	private void searchNAR() throws Exception
	{
		RateLayoutData rateLayoutData = new RateLayoutData();
		setListRateLayoutNAR(rateLayoutData.searchCoverageRateLayout(product.getPrd_code(), ConstantRateCatIDValues.getRlsRateNar()));
	}

	private void setListRateLayoutNAR(ArrayList<RateLayoutPremAccessData> listRateLayoutNAR)
	{
		this.listRateLayoutNAR= listRateLayoutNAR;
	}

	public ArrayList<RateLayoutPremAccessData> getListRateLayoutNAR()
	{
		return listRateLayoutNAR;
	}
	
}
