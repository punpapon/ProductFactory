package service.fnc;

public class ConstantRateCatIDValues 
{	
	private final static String []  TAX_RATE_CAT   		  = new String [] {"8","9"};
	private final static String []  PMSTD_RATE_CAT 		  = new String [] {"1","2"};
	private final static String []  PMSTP_RATE_CAT 		  = new String [] {"3"};
	private final static String []  PMBTA_RATE_CAT 		  = new String [] {"4"};
	private final static String []  CPD_RATE_CAT   		  = new String [] {"5"};
	private final static String []  RS_RATE_CAT    		  = new String [] {"6","7"};
	private final static String []  RLS_RATE_NAR   		  = new String [] {"12"};
	private final static String []  RLS_RATE_CAT   		  = new String [] {"13"};
	private final static String []  PREM_ASSUMP_RATE_OL   = new String [] {"18","19","20","21","22","23"};
	///OL
	private final static String []  TAX_RATE_CAT_OL   		  = new String [] {"24","25"};
	
	private final static String []  PMSTD_RATE_CAT_OL 	  = new String [] {"26","27","41","42"};//
	private final static String []  PMSTP_RATE_CAT_OL 	  = new String [] {"30","45"};
	private final static String []  PMBTA_RATE_CAT_OL 	  = new String [] {"31"};
	private final static String []  CPD_RATE_CAT_OL   	  = new String [] {"32"};
	//เพิ่มเติมจาก CL
	private final static String []  DTI_RATE_CAT_OL   	  = new String [] {"28"};//ส่วนลดตามทุนประกัน
	private final static String []  CIP_RATE_CAT_OL   	  = new String [] {"29","40","43","44"};//คำนวณทุนจากเบี้ยประกัน
	//ตารางมูลค่าOL
	private final static String []  RS_RATE_CAT_OL    		= new String [] {"33","34","46","47"};
	private final static String []  RLS_RATE_CAT_OL    		= new String [] {"35"};
	//เงินปันผล
	private final static String []  DIV_RATE_CAT_OL    		= new String [] {"38"};
	//NAR
	private final static String []  NAR_OL    				= new String [] {"39"};
	// PMRate CL&OL
	private final static String []  PMSTD_RATE_CAT_CLOL 	  = new String [] {"26","27","1","2"};//
	
	public static String[] getNarOl() {
		return NAR_OL;
	}
	public static String[] getPmstdRateCatClol() {
		return PMSTD_RATE_CAT_CLOL;
	}
	public static String[] getTaxRateCatOl() {
		return TAX_RATE_CAT_OL;
	}
	public static String[] getRlsRateCatOl() {
		return RLS_RATE_CAT_OL;
	}
	public static String[] getRsRateCatOl() {
		return RS_RATE_CAT_OL;
	}
	public static String[] getPmstpRateCatOl() {
		return PMSTP_RATE_CAT_OL;
	}
	public static String[] getPmbtaRateCatOl() {
		return PMBTA_RATE_CAT_OL;
	}
	public static String[] getCpdRateCatOl() {
		return CPD_RATE_CAT_OL;
	}
	public static String[] getDtiRateCatOl() {
		return DTI_RATE_CAT_OL;
	}
	public static String[] getCipRateCatOl() {
		return CIP_RATE_CAT_OL;
	}
	
	public static String[] getDivRateCatOl() {
		return DIV_RATE_CAT_OL;
	}
	/**
	 * ตารางลดหย่อนภาษีคุ้มครองชีวิตตั้งแต่ 10 ปีขึ้นไป  : 8 <br>
	 * ตารางลดหย่อนภาษีสุขภาพ 15,000 บาท         :9
	 * @return the taxRateCat
	 */
	public static String[] getTaxRateCat() {
		return TAX_RATE_CAT;
	}
	/**
	 * ตารางเบี้ยมาตรฐาน PM_Rate (Age Specific) : 1 <br>
	 * ตารางเบี้ยมาตรฐาน PM_Rate (Age Band)     : 2
	 * @return the pmstdRateCat
	 */
	public static String[] getPmstdRateCat() {
		return PMSTD_RATE_CAT;
	}
	
	public static String[] getPmstdRateCatOl() {
		return PMSTD_RATE_CAT_OL;
	}
	/**
	 * เบี้ยเพิ่มพิเศษ : 3
	 * @return the pmstpRateCat
	 */
	public static String[] getPmstpRateCat() {
		return PMSTP_RATE_CAT;
	}
	/**
	 * ตารางช่วงอายุที่รับเบี้ยเพิ่ม : 4
	 * @return the pmbtaRateCat
	 */
	public static String[] getPmbtaRateCat() {
		return PMBTA_RATE_CAT;
	}
	/**
	 * ทุนคุ้มครองที่ลดลง : 5 
	 * @return the cpdRateCat
	 */
	public static String[] getCpdRateCat() {
		return CPD_RATE_CAT;
	}
	/**
	 * ตารางมูลค่ากรมธรรม์ CV ความเสี่ยงมาตรฐาน : 6 <br>
	 * ตารางมูลค่ากรมธรรม์ CV ความเสี่ยงมาตรฐาน (Age Band) : 7
	 * @return the rsRateCat
	 */
	public static String[] getRsRateCat() {
		return RS_RATE_CAT;
	}
	
	/**
	 * NAR : 12
	 * @return the cpdRateCat
	 */
	
	public static String[] getRlsRateNar() 
	{
		return RLS_RATE_NAR;
	}
	/**
	 * ตารางมูลค่ากรมธรรม์ CVEM ความเสี่ยงต่ำมาตรฐาน : 13
	 * @return the rlsRateCat
	 */
	public static String[] getRlsRateCat() {
		return RLS_RATE_CAT;
	}
	
	/**
	 * rate_cat_id of prem_assum_rate OL : รายการตารางที่ใช้ในการคำนวณเบี้ย 
	 * @return
	 */
	public static String[] getPremAssumpRateOl()
	{
		return PREM_ASSUMP_RATE_OL;
	}
	
}
