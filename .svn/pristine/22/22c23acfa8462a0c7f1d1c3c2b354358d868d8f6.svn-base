package service.center;

import service.fnc.ConstantValues;
import service.fnc.PDFFnc;
import service.fnc.RtePath;
import service.fnc.RteResult;

import layout.bean.productfac.product.Product;

public class ProductCreate
{
	private String cat_code_L1;
	private String cat_code_L2;
	private String cat_code_L3;
	private String user_code;
	private Product product;
	private String cov_code;
	private String core_biz_prd_code;

	public ProductCreate(String cat_code_L1, String cat_code_L2, String cat_code_L3, String user_code) throws Exception
	{
		this.cat_code_L1 = cat_code_L1;
		this.cat_code_L2 = cat_code_L2;
		this.cat_code_L3 = cat_code_L3;
		this.user_code = user_code;
		generateProduct();
	}

	public ProductCreate(String cov_cat_id, String cov_code, String core_biz_prd_code) throws Exception
	{
		this.cat_code_L3 = cov_cat_id;
		this.cov_code = cov_code;
		this.core_biz_prd_code = core_biz_prd_code;
		insertRiderProduct();
	}

	public ProductCreate(String [] cov_cat_id_Level) throws Exception
	{
		this.cat_code_L1 = cov_cat_id_Level[0];
		this.cat_code_L2 = cov_cat_id_Level[1];
		this.cat_code_L3 = cov_cat_id_Level[2];
		generateProductRiderOL();
	}

	private void generateProduct() throws Exception
	{
		System.out.println("generateProduct >>> ");
		prepareProduct();
		Object[] param = new Object[] { "I", getProduct(), cat_code_L1, cat_code_L2, cat_code_L3 };
		rteResult(RtePath.RTE.getValue() + ".product." + "RteProductCreate", param);
	}

	private void insertRiderProduct() throws Exception
	{
		System.out.println("insertRiderProduct >>>");
		prepareProduct();
		Product product = getProduct();
		product.setCore_biz_prd_code(core_biz_prd_code);
		product.setCov_code(cov_code);
		product.setUser_code(ConstantValues.USER_CODE);
		Object[] param = new Object[] { "IR", product, cat_code_L3 };
		rteResult(RtePath.RTE.getValue() + ".product." + "RteProductCreate", param);
	}

	private void generateProductRiderOL() throws Exception
	{
		System.out.println("generateProductRiderOL >>> ");
		prepareProduct();
		Product product = getProduct();
		product.setUser_code(ConstantValues.USER_CODE);
		Object[] param = new Object[] { "PR", product, cat_code_L1, cat_code_L2, cat_code_L3 };
		rteResult(RtePath.RTE.getValue() + ".product." + "RteProductCreate",param);
	}

	private void rteResult(String rte, Object[] param) throws Exception
	{
		setProduct((Product) new RteResult(rte, param).saveValuesResultData().value());
	}

	public void prepareProduct() throws Exception
	{
		Product product = new Product();
		product.setPrd_code("");
		product.setCore_biz_prd_code("");
		product.setCov_cat_id(Integer.parseInt(cat_code_L3));
		product.setStatus("NEW");
		product.setName_th("-");
		product.setName_en("-");
		product.setMarket_name_th("-");
		product.setMarket_name_en("-");
		product.setPrd_design("NONE");
		product.setSale_partner_code("");
		product.setIs_flp(false);
		product.setIs_flp_fee(false);
		product.setFlp_day(0);
		product.setFlp_start_date("CERT_DATE");
		product.setIs_fin_acc(false);
		product.setIs_insurance(false);
		product.setScore_aml("");
		// product.setSys_eff_date(null);
		// product.setSale_eff_date(null);
		// product.setSale_exp_date(null);
		product.setPrem_disc_rate(null);
		product.setBalloon_prd_code(null);
		product.setAge_band("");
		product.setFyp_credit_card("NONE");
		product.setRyp_credit_card("NONE");
		product.setLoan_type("NONE");
		product.setMax_commission(null);
		product.setFirst_beneficiary("NONE");
		// product.setMaster_policy(null);
		product.setUser_code(user_code);
		product.setReinsurance_opt("NONE");
		product.setUpdate_time(PDFFnc.currentTimeStamp());
		setProduct(product);
	}

	private void setProduct(Product product)
	{
		this.product = product;
	}

	public Product getProduct()
	{
		return product;
	}
}
