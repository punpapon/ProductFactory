package service.fnc;

public class ConstantAppPage 
{	
	private final String []  BASE_PLAN_PAGE  = new String [] {"ข้อมูลทั่วไป Basic Information"
	                                                                 ,"Policy Wording"
	                                                                 ,"การใช้สิทธิ์ตามกรมธรรม์"
	                                                                 ,"การคำนวณเบี้ยประกัน"
	                                                                 ,"การคำนวณเบี้ยประกัน"
	                                                                 ,"ผลประโยชน์/ความคุ้มครอง"};
    private final String []  RIDER_PAGE      = new String [] {"ข้อมูลทั่วไป Basic Information"
	                                                                 ,"Policy Wording"
	                                                                 ,"ผู้ได้รับความคุ้มครอง"
	                                                                 ,"การคำนวณเบี้ยประกัน"
	                                                                 ,"ตารางมูลค่ากรมธรรม์"
	                                                                 ,"ผลประโยชน์/ความคุ้มคอง"
	                                                                 ,"บันทึกสลักหลัง"};
	private final String []  PRODUCT_PAGE    = new String [] {"ข้อมูลทั่วไป Basic Information"
	                                                                 ,"การคำนวณเบี้ยประกัน"
	                                                                 ,"การใช้สิทธิ์ตามกรมธรรม์"
	                                                                 ,"ผลประโยชน์การขาย"
	                                                                 ,"ข้อกำหนดการรับประกัน"};
	/**
	 * 
	 * @param appType : B = BasePlan,R = Rider,P = Product
	 * @return
	 */
	public String[] getConstantAppPage(String appType)
	{
		if(appType.equals("B"))
			return BASE_PLAN_PAGE;
		else if(appType.equals("R"))
			return RIDER_PAGE;
		return PRODUCT_PAGE;
	}
}
