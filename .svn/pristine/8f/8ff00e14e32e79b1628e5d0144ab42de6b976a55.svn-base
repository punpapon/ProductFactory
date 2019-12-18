package service.rider;

import java.util.ArrayList;

import layout.bean.productfac.beanset.ParticipantAccessData;
import layout.bean.productfac.beanset.PremiumAcessData;
import layout.bean.productfac.coverage.Coverage;
import layout.bean.productfac.coverage.Filing_channel;
import layout.bean.productfac.coverage.Mode;
import layout.bean.productfac.coverage.Note;
import layout.bean.productfac.coverage.Rate_layout;
import layout.bean.productfac.product.Product;
import service.center.ProductCreate;
import service.tab.BasicInfoDataTab;


public class RiderBasicInfoOL 
{
	/**
	 * บันทึกข้อมูลผู้ได้รับ ความคุ้มครอง <br>
	 * ส่ง ค่า bean set ParticipantAccessData <br>
	 * Coverage 	coverage <br>
	 * Participant participant <br>
	 * ArrayList<Benefit_period> Benefit_period<br>
	 * ArrayList<Benefit_period_det> Benefit_period_det <br>
	 * ArrayList<Benefit_item> Benefit_itembr 
	 * @throws Exception
	 */
    public RiderBasicInfoOL() {}
	public void doCoverage(Coverage coverage) throws Exception
	{
		new BasicInfoDataTab().doCoverage(coverage);
	}
	
	public void doParticipant(ParticipantAccessData participantAccessData) throws Exception
	{
		BasicInfoDataTab dataTab = new BasicInfoDataTab();
		dataTab.doParticipant(participantAccessData.getParticipant());
		dataTab.doBenefitPeriod(participantAccessData.getListBenefitPeriod());
		dataTab.doBenefitPeriodDet(participantAccessData.getListBenefitPeriodDet());
	}
	
	public void doMode(ArrayList<Mode> listMode) throws Exception
	{
		new BasicInfoDataTab().doMode(listMode);
	}

	public void doFillingChannel(ArrayList<Filing_channel> listFilingChannel) throws Exception
	{
		new BasicInfoDataTab().doFillingChannel(listFilingChannel);
	}

	public void doPremium(PremiumAcessData premiumAcessData) throws Exception
	{
		new BasicInfoDataTab().doPremium(premiumAcessData);
	}
	
	public void doRateLayoutTAXOL(ArrayList<Rate_layout> listRateLayout) throws Exception
	{
		new BasicInfoDataTab().doRateLayoutTAX_OL(listRateLayout);
	}

	public void doNote(ArrayList<Note> listNote) throws Exception
	{
		new BasicInfoDataTab().doNote(listNote);
	}
	/**
	 * 
	 * @param core_biz_prd_code
	 * @param cov_code
	 * @param cov_cat_id user level 3
	 * @throws Exception
	 */
	public void doProduct(String cov_cat_id,String cov_code,String core_biz_prd_code) throws Exception
	{
		ProductCreate productCreate = new ProductCreate(cov_cat_id, cov_code, core_biz_prd_code);
		Product product = productCreate.getProduct();
		System.out.println("product prd_code "+product.getPrd_code());
	}
}
