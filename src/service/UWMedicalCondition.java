package service;

import java.util.Vector;

import insure.*;
import insure.PlanSpec;
import insure.PlanType;
import insure.TLPlan;
import insure.UnwCondition;
import manit.M;
import manit.Masic;
import manit.Mrecord;
import utility.address.AddressCode;
import utility.underwrite.BankAssure;

public class UWMedicalCondition {
    static final long serialVersionUID  = 25550720001L ;
	public static final String[] TOP_UP_PERIOD_1 = new String[] {"25590401","25590630"};
	public static final String[] TOP_UP_PERIOD_2 = new String[] {"25591017","25591231"};
	public static final String[] TOP_UP_PERIOD_3 = new String[] {"25600707","25601231"}; // 25601031
	public static final String OL_PARTNER = "25611001";
    public static final String[] HIV_BRANCH    =
                                    {"142", "144", "145", "143", "148",
                                      //เชียงใหม่, เชียงดาว, ฝาง, จอมทอง, สันป่าตอง 
                                     "131", "133", "134", "135", "136", "137", "138",
                                      //เชียงราย, แม่จัน, แม่ขะจาน, พาน, แม่สาย, เทิง, เชียงของ 
                                     "501", "502", "504", "505",
                                      // ลำปาง, เถิน, แจ้ห่ม, งาว
                                     "261", "262", "263", 
                                      // น่าน, ปัว, นาน้อย
                                     "391", "392", "393",    
                                      // แพร่, สอง, อ.ลอง
                                     "421", "422",    
                                      // แม่ฮ่องสอน, แม่สะเรียง
                                     "511", "512", 
                                      // ลำพูน, บ้านโฮ่ง
                                     "321", "132"    
                                      // พะเยา, เชียงคำ
                                    };
    public static final String[] HIV_PROV    =
                                    { M.stou("รย"),    // ระยอง
                                      M.stou("ชม"), // เชียงใหม่
                                      M.stou("ลพ"),    // ลำพูน
                                      M.stou("ลป"),    // ลำปาง
                                      M.stou("พร"), // แพร่
                                      M.stou("นน"),    // น่าน
                                      M.stou("พย"),    // พะเยา
                                      M.stou("ชร"), // เชียงราย 
                                      M.stou("มส")    // แม่ฮ่องสอน
                                     };
    public static final String[][] ZONE    =    
                                {{"M", "05", "06", "11", "15"},        // สายการตลาดนครหลวง 5 6 และ 11
                                 {"01","07"},
                                 {"02","03","04","08","09","10", "12", "13", "14"}};

    public static final String BLOOD = "G1";//"Blood"; G_BLOOD
    public static final String LFT     = "G2";//"LFT";G_LFT
    public static final String TFT     = "G3";//"TFT";G_TFT
    public static final String BLOOD_CL_1 = "G4";//"Blood1";G_BLOOD_CL_1
    public static final String BLOOD_CL_2 = "G5";//"Blood2";G_BLOOD_CL_2
	public static final String BLOOD_57_1 = "G6";//"Blood1";G_BLOOD_57_1
	public static final String BLOOD_57_2 = "G7";//"Blood2";G_BLOOD_57_2
	public static final String BLOOD_TLP_MRTA = "G8";//"Blood1";GB_TLP_MRTA
	public static final String BLOOD_TLP_NON_MRTA = "G9";//"Blood2";GB_TLP_NON_MRTA


    public static final String BLOOD_NAME57_1 = "Blood1";
    public static final String BLOOD_NAME57_2 = "Blood2";
    public static final String BLOOD_NAME = "Blood";
    public static final String BLOOD_CL_1_NAME = "Blood1";
    public static final String BLOOD_CL_2_NAME = "Blood2";
    public static final String LFT_NAME      = "LFT";
    public static final String TFT_NAME      = "TFT";
	public static final String MED_57_DATE   = "25570217";
    public static final String BANC_OL_MED   = "25571101";
	public static final String BAY_CL_MED    = "25590204";
	public static final String ICBC_CL_MED   = "25590308";
	public static final String MLTA_MED_DATE = "25600516";
	 /** 
	    ** allGroup  กลุ่มของการตรวจทั้งหมดประกอบด้วย รหัสชุดตรวจ และชื่อของชุดที่ตรวจ 
	    ** @return String[][]  {GroupCode , GroupName} 
	    **/
	    public static String[][] allGroups()
	    {
	        return new String[][]{{BLOOD, BLOOD_NAME}, 
								  {BLOOD_57_1, BLOOD_NAME57_1},
								  {BLOOD_57_2, BLOOD_NAME57_2},
	                              {LFT, LFT_NAME}, 
	                              {TFT, TFT_NAME}, 
	                              {BLOOD_CL_1, BLOOD_CL_1_NAME}, 
	                              {BLOOD_CL_2, BLOOD_CL_2_NAME},
								  {BLOOD_TLP_MRTA, BLOOD_CL_2_NAME},
								  {BLOOD_TLP_NON_MRTA, BLOOD_CL_2_NAME},
								 };
	    }

	public static final String BLOOD_57 	 = "B1";
    private static String [] G_BLOOD_57_1         = new String[]  {"14", "18", "24", "15"};
    private static String [] G_BLOOD_57_2         = new String[]  {"14", "18", "15", "35", "36", "13", "03", "44", "28", "07", "34","42","04","24","27"};


    private static String[] G_BLOOD      = new String[]{"03", "04", "07", "13", "14", 
                                                        "15", "18", "24", "26", "27", 
                                                        "28", "34", "35", "36", "42", 
                                                        "44"};
/*--- START WAIT FOR EDIT*/
    private static String[] G_BLOOD_CL_1 = new String[]{"18", "24", "08", "15", "13", 
                                                        "42", "35", "36", "34", "03", 
                                                        "41", "02", "21", "27"};
    private static String[] G_BLOOD_CL_2 = new String[]{"18", "24", "08", "15", "13", 
                                                        "42", "28", "14", "35", "36", 
                                                        "34", "03", "41", "02", "21",
                                                        "27", "44"};
/*--- END WAIT FOR EDIT---*/
    private static String[] G_OLD_BLOOD = new String[]{"03", "04", "07", "13", "14", 
                                                       "15", "18", "24", "26", "27", 
                                                       "28", "29", "35", "36", "44"};
    private static String[] G_LFT    = new String[]{"02", "03", "16", "21", "35"
    												, "36", "40", "41"};
    private static String[] G_TFT    = new String[]{"19", "20", "38"};

	private static String[] GB_TLP_MRTA     = new String[]{ "18", "24", "08", "15", "13", "42", "28", "14", "35", "36", "34", "03","02", "21","27","44"};
	private static String[] GB_TLP_NON_MRTA = new String[]{ "18", "24", "08", "15", "44"
															, "13", "42", "28", "14", "35"
															, "36", "34", "03","41","02"
															,"40","16","27","04","26"};
	private static String bankType=null;
	private  static   boolean isRedLevel = false;
	private   static   boolean isBlacklist = false;


    public static void agencyBlacklist(boolean redLevel, boolean blackList )
	{
		isRedLevel = redLevel;
		isBlacklist = blackList;
	}
    /**  
    ** getGroupDetail  หาข้อูลรายการที่ต้องตรวจสุขภาพตามกลุ่มที่กำหนด
    ** @param        payDate    -String วันที่ชำระเบี้ยประกัน หรือวันที่ตรวจสอบ
    ** @param        groupCode  -String กลุ่มที่ต้องการหารายการ
    ** @return       String[] ของรหัสของรายการที่ต้องตรวจสุขภาพ
    **/
    public static String[] getGroupDetail(String payDate, String groupCode)
    {    
        if (groupCode.compareTo(BLOOD) == 0)
            return G_BLOOD;
        else if (groupCode.compareTo(BLOOD_CL_1) == 0)
            return G_BLOOD_CL_1;
        else if (groupCode.compareTo(BLOOD_CL_2) == 0)
            return G_BLOOD_CL_2;
        else if(groupCode.compareTo(LFT) == 0)
            return G_LFT;
        else if (groupCode.compareTo(TFT) == 0)
            return G_TFT;
		else if (groupCode.compareTo(BLOOD_57_2) == 0)
			return G_BLOOD_57_2;
		else if (groupCode.compareTo(BLOOD_57_1) == 0)
			return G_BLOOD_57_1;
		else if (groupCode.compareTo(BLOOD_TLP_MRTA) == 0)
			return GB_TLP_MRTA;
		else if (groupCode.compareTo(BLOOD_TLP_NON_MRTA) == 0)
			return GB_TLP_NON_MRTA;
        return null;
    }
   
    /**  checkHIV  ตรวจสอบว่า ต้องตรวจ HIV หรือไม่
    **@param   province ชื่อจังหวัด
    **@param   plan        แบบประกัน
    **@param   age         อายุผู้เอาประกัน      
    **@param   sum        ทุนตรวจสุขภาพ
    **@param   branch    สาขาเจ้าของเคส
    **@param   checkDate วันที่ทำการตรวจ
    **@param   projectNo   ใช้ตารางใดจากระเบียบ โดยดูจากฝ่ายขาย
    **@return Boolean   true - must check HIV  false - not check HIV
    **/

    public static boolean checkHIV(String province, String plan, String age, 
                                   String sum, String branch, String checkDate, 
                                   int projNo)
    {
		if (PlanType.isNonHIVPlan(plan))
			return (false);
        if (province == null)
            return false;
        if (M.numeric(province)) // tambonCode
            province    = AddressCode.tambonToProvince(province);
        System.out.println("PROVINCE : " + province);
        for (int i = 0; i < HIV_PROV.length; i++)
        {
            if (province.compareTo(HIV_PROV[i]) == 0)
            {
                System.out.println("BY PROVINCE");
                return checkHIV(true, plan, age, sum, branch, checkDate, projNo);
            }
        }
        return checkHIV(false, plan, age, sum, branch, checkDate,projNo);
    }
    /**  checkHIV  ตรวจสอบว่า ต้องตรวจ HIV หรือไม่ 
     **@param   hivArea   อยู่ในพื้นที่ตรวจหรือไม่
     **@param   plan        แบบประกัน
     **@param   age         อายุผู้เอาประกัน      
     **@param   sum        ทุนตรวจสุขภาพ
     **@param   branch    สาขาเจ้าของเคส
     **@param   checkDate วันที่ทำการตรวจ
     **@param   projectNo   ใช้ตารางใดจากระเบียบ โดยดูจากฝ่ายขาย
     **@return Boolean   true - must check HIV  false - not check HIV
     **/                                             
    public static boolean checkHIV(boolean hivArea, String plan, String age, 
                                   String medSum, String branch, String checkDate, 
                                   int projNo)
    {
		System.out.println("CheckHIV");
		if (PlanType.isNonHIVPlan(plan))
			return false;

		System.out.println("check HIV ZA PlanType.isBankMRTA("+plan+")? - "+ PlanType.isBankMRTA( plan ));
        	if (PlanType.isBankMRTA(plan) || PlanType.isTLThanaPitak(plan))  // TTxx use TLPMRTA Table(Passkorn) BANC_MED is Here!!! 
		{
			/* if (PlanType.isBankMLTA(plan) || PlanType.isBankMRTA(plan))
			{
				System.out.println("checkDate : "+checkDate+"  "+MLTA_MED_DATE);
				if (M.cmps(checkDate, MLTA_MED_DATE)>=0)
		        	{
					System.out.println("HIV ---- 0 "+ medSum);
		        		if (M.cmps(medSum, "5000000") <= 0)
		        			return false;
					System.out.println("HIV ----1 ");
			        	if (M.cmps(medSum, "10000000") <= 0 && M.cmps(age, "61")<0)
			        		return false;
					System.out.println("HIV ----2 ");
			        	return true;
		        	}
				return( M.cmps( medSum, "5000000") >0);
			} */ 
			System.out.println("isTLPNonMRTA - "+ PlanType.isTLPNonMRTA(plan));
			if (PlanType.isTLPNonMRTA(plan))
			{
				return( M.cmps( medSum, "7500000") > 0);
			}
			if (PlanType.isTLPMRTA(plan))
			{
				if ( M.cmps( medSum, "10000000") > 0)
					return(true);
				else
				{
					if (M.cmps( medSum, "7500000") > 0)
						return( M.cmps(age, "61") >=0);
					else
					   return(false);	
				}
			}
			if (PlanType.isGOVBankMed(plan))
			      return( M.cmps( medSum, "5000000")>0 && M.ctoi(age)>=18); // 20
			if (PlanType.isCOOPMed(plan))
				  return( M.cmps( medSum, "3000000")>0 && M.ctoi(age)>=18); // By UNW 
        	if (M.cmps( checkDate, "25560101") < 0)
            		return PlanType.isNonHIVPlan(plan) ? false : M.cmps(medSum, "5000000") > 0;
	        else	
        	{
					
					String bankCode = utility.underwrite.BankAssure.bankCodeFromPlan(plan);
					if (bankCode == null)
					{
						System.out.println("banckCode = null");
						return(false);
	
					}
					if (bankCode.compareTo(utility.underwrite.BankAssure.ICBC)==0 && M.cmps( checkDate, ICBC_CL_MED) < 0)
					{
            			if (M.cmps( age , "55") <= 0 )
						{ 
							if (M.cmps( checkDate, "25570501") >= 0)
	                			return PlanType.isNonHIVPlan(plan) ? false : M.cmps(medSum, "7500000") > 0;
							else
        	        			return PlanType.isNonHIVPlan(plan) ? false : M.cmps(medSum, "7000000") > 0;
						}
	            		return PlanType.isNonHIVPlan(plan) ? false : M.cmps(medSum, "5000000") > 0;
					}
					else
					{
						if ( bankCode.compareTo(utility.underwrite.BankAssure.GHB)==0)
						{
							return( M.cmps(medSum, "5000000")>0);
							
						}
						if (M.cmps(age, "55")<=0)
						{
							if (PlanType.isNonHIVPlan(plan))
								return(false);
							else
							{
								if (bankCode.compareTo(utility.underwrite.BankAssure.BAY)==0 || bankCode.compareTo( utility.underwrite.BankAssure.ICBC)==0)
								{
									if ( M.cmps( checkDate, BAY_CL_MED) < 0)
									{
										if ( M.cmps( medSum, "10000000") > 0)
											return(true);
			                			return( M.cmps(age, "45") > 0 && M.cmps(medSum, "7500001")>=0 && M.cmps( medSum, "10000000")<=0);					
									}
									else
									{
										System.out.println("I'm Herer ");
										if ( M.cmps( medSum, "10000000") > 0)
											return(true);
										return( M.cmps( age, "55") > 0 && M.cmps( medSum, "10000000") <=0);
									}
								}
								else
								{
									if ( M.cmps( medSum, "9000000") > 0)
										return(true);
		                			return( M.cmps(age, "45") > 0 && M.cmps(medSum, "7500001")>=0 && M.cmps( medSum, "9000000")<=0);					
								}
							}
						}	
						else
							return(  M.cmps(medSum, "5000001")>=0);
					}
        	}
		}
        if (plan.compareTo("GNV") == 0 || plan.compareTo("GNW") == 0|| plan.compareTo("GE11")==0)
            hivArea = false;
        System.out.println("IS HIV AREA " + hivArea);
        projNo = getMedTable(checkDate, projNo);
        boolean areaOnly = false;
        if (PlanType.isPAPlan(plan))
            return false;
        if (plan.trim().compareTo("SN") == 0 && M.cmps(age, "0") == 0)
            return false;
        if (PlanType.isNonHIVPlan(plan))
        {
            if (plan.trim().compareTo("TR") == 0 ||
                plan.trim().compareTo("NC") == 0 ||
                plan.trim().compareTo("ND") == 0)
                if (hivArea)
                    areaOnly = true;
                else
                    return false;
            else    
                return false;
        }
        System.out.println("HIV Sum = "+medSum+ " AreaOnly = "+areaOnly);
        if (!areaOnly && !PlanType.isIndustrialPlan(plan))
        {
            System.out.println("a-- Project = " + projNo);
            Vector fac = factorByProjectNo(checkDate, projNo);
            
            String[] ageRange = (String[])fac.elementAt(0);
            String[] sumRange = (String[])fac.elementAt(1);
            char[][] check    = (char[][])fac.elementAt(2);

            int xAge = -1;
            int xSum =  -1;
                 //System.out.println("Xage = "+xAge);
            for (int i = 0; xAge < 0 && i < ageRange.length; i++)
            {
                xAge = M.cmps(age, ageRange[i]) <= 0 ? i : -1;
                // System.out.println("h- age " + i + " " + ageRange[i] + " " + xAge);
            }
            for (int i = 0; xSum < 0 && i < sumRange.length; i++)
            {
                xSum = M.cmps(medSum, sumRange[i]) <= 0 ? i : -1;
                // System.out.println("h- sum " + i + " " + sumRange[i] + " " + xSum);
            }
            System.out.println("Xage = "+xAge+ "xSum = "+xSum);
            if (xAge < 0 || xSum < 0)
                return false;
            System.out.println("check == > " + check[xSum][xAge]+ " "+projNo+ " "+checkDate);
            if (check[xSum][xAge] == 'Y')
            {
                if (plan.compareTo("EH") == 0 || 
                    plan.compareTo("EV") == 0 || 
                    plan.compareTo("BEV") == 0)
                {
                    if (M.cmps(medSum, "10000000") <= 0)
                        return( false );
                }
                if (plan.compareTo("EI") == 0 || 
                    plan.compareTo("EU") == 0)
                {
                    if (M.cmps(medSum, "5000000") <= 0)
                        return(false);
                }
				System.out.println("ZA Testiong ");
                 // if (projNo >= 4 && projNo != 6)  // please follow by new medicalCondition 57
                 if (projNo >= 5 && projNo != 6)  // please follow by new medicalCondition 57
                    return(true);
                /* if (M.cmps(age, "65") > 0 && M.cmps( medSum,"3000000") <= 0)
                        return(false); */
                switch( projNo )
                {
                    case 0 :    if (M.cmps(age, "61") >= 0)
                                {
                                    return M.cmps(medSum, "3000000") > 0 && 
                                           M.cmps(medSum, "5000000") <= 0;
                                }
                                if (M.cmps(medSum, "1500000") > 0)
                                    return true;
                                if (M.cmps(medSum, "1000000") > 0)
                                    return M.cmps(age, "5") >= 0;
                                if (M.cmps(checkDate, "25530501") >= 0 && 
                                    M.cmps(age, "16") >= 0) // New UNW 
                                {
                                    //System.out.println("THIS : " + (M.cmps(medSum, "500000") > 0));
                                    return M.cmps(medSum, "500000") > 0;
                                }
                                if (M.cmps(age, "16") >= 0)
                                    return( true );
                                break;
                                
                    case 1 :    if ( M.cmps( age, "60") <= 0)
                                {
                                    if (M.cmps(medSum, "1500000") > 0 && 
                                        M.cmps(medSum, "3000000") <= 0)    
                                        return true;
                                }
                                if (M.cmps(medSum, "3000000") > 0 && 
                                    M.cmps(medSum, "6000000") <=0)
                                {
                                    return true;
                                }
                                if (M.cmps(medSum, "6000000") > 0 && 
                                    M.cmps(medSum, "10000000")<=0)
                                {
                                    if (M.cmps( age, "06") >= 0 && 
                                        M.cmps( age, "60") <=0)
                                        return true;
                                }
                                if (M.cmps(medSum, "10000000") > 0)
                                    return M.cmps( age, "16")>=0 && 
                                           M.cmps( age, "60") <=0;
                                break;
                    case 2 : 	if ( M.cmps( medSum, "2500000") > 0)
									return( M.cmps( age, "16") >=0 );
								return(false);

                    case 3 :    
                    case 6 :    // TOP_UP_PLUS
								if (M.cmps( checkDate, MED_57_DATE) < 0)
								{
									if (M.cmps( age, "05") >=0 && 
                                	    M.cmps( age, "60") <= 0)
	                                {
    	                                if (M.cmps(medSum, "1500000") > 0 && 
        	                                M.cmps(medSum, "3500000") <= 0)
            	                            return true;
                	                }
                    	            if (M.cmps(medSum, "3500000") > 0 &&    
                        	            M.cmps(medSum, "6000000") <=0)
                            	    {
                                	    return true;
                                	}
	                                if (M.cmps(medSum, "6000000") > 0 && 
    	                                M.cmps(medSum, "10000000")<=0)
        	                        {
            	                        if (M.cmps( age, "06") >= 0 && 
                	                        M.cmps( age, "60") <=0)
                    	                    return true;
                        	        }
                            	    if (M.cmps(medSum, "10000000") > 0)
                                	{
                                    	return M.cmps( age, "16")>=0 && 
                                        	   M.cmps( age, "60") <=0;
                                	}
								}
								else
								{
									System.out.println("ZA - "+ projNo + " "+ medSum);
									if (projNo == 2)
									{
										if (  M.cmps( medSum, "2500000") >  0 )
										{
											System.out.println("ZA return "+ age);
											return M.cmps( age, "15") > 0;
										}
									}
								    else
									{		
										if (  M.cmps( medSum, "3000000") > 0 )
											return M.cmps( age, "15") > 0; 
										if (M.cmps( medSum, "4000000")> 0 && M.cmps( medSum, "4500000")<=0  && M.cmps( age, "51") >= 0)
											return true;
									    if (M.cmps( medSum, "4500000")> 0 && M.cmps( medSum, "5500000")<=0  && M.cmps( age, "46") >= 0)
											return true;
									    if (M.cmps( medSum, "5500000")> 0  && M.cmps( age, "16") >= 0)
											return true; 
									}
								}
	                            break;
							
								// Bay only 
					case 4 :    if (M.cmps( medSum, "4000000")> 0 && M.cmps( medSum, "4500000")<=0  && M.cmps( age, "51") >= 0)
									return true;
							    if (M.cmps( medSum, "4500000")> 0 && M.cmps( medSum, "5500000")<=0  && M.cmps( age, "46") >= 0)
									return true;
							    if (M.cmps( medSum, "5500000")> 0  && M.cmps( age, "16") >= 0)
									return true;
								break;
								

                    case 5 :    if (M.cmps(medSum, "4000000") > 0)
                                    return true;
                                if ( M.cmps( medSum, "3000000") > 0 && 
                                     M.cmps( medSum, "4000000") <=0)
                                {
                                    if ( M.cmps( age, "51") > 0)
                                        return true;
                                }
								break;
								// Bay only 
					case 7 :    if (M.cmps( medSum, "4000000")> 0 && M.cmps( medSum, "5500000")<=0  && M.cmps( age, "51") >= 0)
									return true;
							    if (M.cmps( medSum, "5500000")> 0 && M.cmps( medSum, "7500000")<=0  && M.cmps( age, "46") >= 0)
									return true;
							    if (M.cmps( medSum, "7500000")> 0 && M.cmps( age, "15")> 0)
									return true;
							    if (M.cmps( medSum, "4000000")<= 0 && M.cmps( age, "56")>= 0)
									return false;
								break;

                } 

            }
        }
        System.out.println("CheckHIV---- " + plan + " " + medSum + " " + age + " " + hivArea+ " ProJ = "+projNo);
        if ( plan.trim().compareTo("EV") == 0 || 
             plan.trim().compareTo("EH") == 0 || 
             plan.trim().compareTo("BEV") == 0)
            return false;
        if (!hivArea)
            return false;
        System.out.println("by area : " + projNo + " " + age + " " + medSum+ " "+checkDate);
	if ( M.cmps( checkDate, MED_57_DATE) > 0)
		return false; 
        switch( projNo )
        {
            case 0 :    if (M.cmps(age, "61") >= 0)
                            return M.cmps(medSum, "3000000") > 0 && 
                                   M.cmps(medSum, "5000000") <= 0;
                        if (M.cmps(medSum, "1500000") > 0)
                            return true;
                        if (M.cmps(medSum, "1000000") > 0)
                            return M.cmps(age, "5") >= 0;
                        if (M.cmps(checkDate, "25530501") >= 0 && 
                            M.cmps(age, "16") >= 0)
                        {
                            //System.out.println("THIS : " + (M.cmps(medSum, "500000") > 0));
                            return M.cmps(medSum, "500000") > 0;
                        }
                        return M.cmps(age, "16") >= 0;        
            case 1 :    if (M.cmps( age, "05") >=0 && 
                            M.cmps( age, "60") <= 0)
                        {
                            if (M.cmps(medSum, "1000000") >= 0 && 
                                M.cmps(medSum, "1500000") <= 0)
                                return( true );
                        }
                        if (M.cmps( age, "60") <= 0)
                            return M.cmps(medSum, "1500000") > 0;
                        return M.cmps( medSum, "3000000") > 0;
            case 2 : 	if ( M.cmps( medSum, "2500000") > 0)
							return( M.cmps( age, "16") >=0 );
						return(false);
						 
            case 3 :    if (M.cmps( age, "60") <= 0)
                            return M.cmps(medSum, "1500000") > 0;                               
                        return M.cmps( medSum, "3000000") > 0; 
        } 
        return(false);
    }



    private  static boolean indHiv(String age, String province, String branch)
    {
        if (M.numeric(province)) // tambonCode
            province    = AddressCode.tambonToProvince(province);
        for (int i = 0; i < HIV_PROV.length; i++)
        {
            if (province.compareTo(HIV_PROV[i]) == 0)
                return indHiv(true, age, branch);
        }
        return indHiv(false, age, branch);
        
    }
    /**indHIV  ตรวจสอบว่า กรมธรรม์รายเดือนต้องตรวจ HIV หรือไม่
    **@param   hivProvince  เป็นจังหวัดที่ต้องตรวจ HIV หรือไม่
    **@param   age          อายุผู้เอาประกัน
    **@param   branch       สาขา
	**/
    private  static boolean indHiv(boolean hivProvince, String age, String branch)
    {
        // อายุระหว่าง 5-14 ปี ได้รับยกเว้นไม่ต้องตรวจ
        if (M.cmps(age, "5") >= 0 && M.cmps(age, "14") <= 0)
            return (false);
        // ภูมิลำเนา/ที่อยู่ปัจจุบัน อยู่ใน 9 จังหวัดต้องตรวจ
        if (hivProvince)
            return true;
        // เป็นเคสของสาขา HIV_BRANCH ต้องตรวจ
        for (int i = 0; i < HIV_BRANCH.length; i++)
        {
            if (branch.compareTo(HIV_BRANCH[i]) == 0)
                return (true);
        }
        return (false);
    }
    /* ------------------------------------------------
        Explanation : Suwanna | Unw5(17/05/48)
        non-hiv plan -- > false
        age over 65     --- > false
        sum over 750000 -- > true (for every age <= 65)
        geographic condition --> except for age 5-14
    
                Explanation : UNW ( effective 04/07/2554
            Medical & HIV separate into 3 group refer by projNo
            0 : before 04/07/2554
                        1 : after  04/07/2554 = normal agent , Q_UP , TOP_UP
    
        
    */
    /**ordHIV  ตรวจสอบว่า กรมธรรม์รายงวดต้องตรวจ HIV หรือไม่
	 **@param   payDate วันที่ชำระเบี้ยประกัน
     **@param   plan        แบบประกัน
     **@param   age         อายุผู้เอาประกัน
     **@param    province  จังหวัดตามที่อยู่ติดต่อสะดวก หรือ ภูมิลำเนา
     **@param   medsum        ทุนตรวจสุขภาพ
     **@param   projectNo   ใช้ตารางใดจากระเบียบ โดยดูจากฝ่ายขาย
     **@return Boolean   true - must check HIV  false - not check HIV
    **/ 
    public static boolean ordHIV(String payDate,  String plan, String age, 
                                 String province, String medSum, int projNo )
    {
        boolean hivPrv = false;
        //System.out.println("PROVINCE=" + province);
        if (province == null)
            province = "";
        if (M.numeric(province)) // tambonCode
            province    =   AddressCode.tambonToProvince(province);
            //System.out.println("PROVINCE2=" + province);
        for (int i = 0; 
             province != null && province.length() > 0 && 
             !hivPrv && i < HIV_PROV.length; i++)
        {
            hivPrv = province.compareTo(HIV_PROV[i]) == 0;
        }
        return ordHIV(hivPrv, plan, age, medSum, payDate, projNo);
    }
    /**ordHIV  ตรวจสอบว่า กรมธรรม์รายงวดต้องตรวจ HIV หรือไม่
     **@param   hivProvince เป็นจังหวัดที่ต้องตรวจ HIV หรือไม่
     **@param   plan        แบบประกัน
     **@param   age         อายุผู้เอาประกัน
     **@param   medsum        ทุนตรวจสุขภาพ
     **@param   payDate วันที่ชำระเบี้ยประกัน
     **@param   projectNo   ใช้ตารางใดจากระเบียบ โดยดูจากฝ่ายขาย
     **@return Boolean   true - must check HIV  false - not check HIV
    **/

    public static boolean ordHIV(boolean hivProvince, String plan, String age, 
                                 String medSum, String payDate, int projNo)
    {
        if (PlanType.isNonHIVPlan(plan))
        {
            if (plan.trim().compareTo("TR") == 0 ||
                plan.trim().compareTo("NC") == 0 ||
                plan.trim().compareTo("ND") == 0)
                return hivProvince;
            return false;
        }
        if (plan.compareTo("GNV") == 0 || plan.compareTo("GNW") == 0|| plan.compareTo("GE11")==0)
            hivProvince = false;
        if (plan.trim().compareTo("SN") == 0 && M.cmps(age, "0") == 0)
            return false;
            String hivSum = medSum;
            //System.out.println("HIV Sum = "+hivSum);
    
        if ((plan.compareTo("GNZ") == 0 || plan.compareTo("GAG5")==0) && 
            M.cmps( payDate, "25540701") >=0)
            projNo = 3; 

    
        projNo = getMedTable(payDate, projNo);
        
        System.out.println("MEDTABLE = " + projNo);
        Vector fac = factorByProjectNo(payDate, projNo);
        String[] ageRange = (String []) fac.elementAt(0);
        String[] sumRange = (String []) fac.elementAt(1);
        char[][] check =    (char[][]) fac.elementAt(2);

        int xAge = -1;
        int xSum =  -1;
        System.out.println("Xage = "+xAge);
        for (int i = 0; xAge < 0 && i < ageRange.length; i++)
           xAge = M.cmps(age, ageRange[i]) <= 0 ? i : -1;
        for (int i = 0; xSum < 0 && i < sumRange.length; i++)
            xSum = M.cmps(hivSum, sumRange[i]) <= 0 ? i : -1;
        System.out.println("Xage = "+xAge+ "xSum = "+xSum);
        if (xAge < 0 || xSum < 0)
            return false;
        if (check[xSum][xAge] == 'Y') // by sum
        {
            boolean bySum = true;
            if (plan.compareTo("EH") == 0 || 
                plan.compareTo("EV") == 0 || 
                plan.compareTo("BEV") == 0)
            {
                if (M.cmps(medSum, "10000000") <= 0)
                    bySum = false;
            }
            if (plan.compareTo("EI") == 0 || 
                plan.compareTo("EU") == 0)
            {
                if (M.cmps(medSum, "5000000") <= 0)
                    bySum = false;
            }
                        /* if (M.cmps(age, "65") > 0 && M.cmps( hivSum,"3000000") <= 0)
                            return(false); */
            if (bySum)
                return true;
        
            if (projNo == 0) // old condition
            {
                if (M.cmps(age,"5")>=0 && M.cmps(age,"14")<=0)
                    return false;
                if (M.cmps(age,"65") > 0)
                    return (false);
                if (hivProvince)
                    if (plan.trim().compareTo("EV") != 0 && 
                        plan.trim().compareTo("EH") != 0 && 
                        plan.trim().compareTo("BEV") != 0)
                        return(true);
            }
            switch( projNo )
            {
                case 0 :    if (M.cmps(age, "61") >= 0)
                                return M.cmps(medSum, "3000000") > 0 && 
                                       M.cmps(medSum, "5000000") <= 0;
                            if (M.cmps(medSum, "1500000") > 0)
                                return true;
                            if (M.cmps(medSum, "1000000") > 0)
                                return M.cmps(age, "5") >= 0;
                            if (M.cmps(payDate, "25530501") >= 0 && 
                                M.cmps(age, "16") >= 0)
                            {
                                //System.out.println("THIS : " + (M.cmps(medSum, "500000") > 0));
                                return M.cmps(medSum, "500000") > 0;
                            }
                            return M.cmps(age, "16") >= 0;
                case 1 :    if (M.cmps( age, "05") >=0 && 
                                M.cmps( age, "60") <= 0)
                            {
                                if (M.cmps(medSum, "1500000") > 0 && 
                                    M.cmps(medSum, "3000000") <= 0)
                                    return true;
                            }
                            if (M.cmps(medSum, "3000000") > 0 && 
                                M.cmps(medSum, "6000000") <=0)
                                return true;
                            if (M.cmps(medSum, "6000000") > 0 && 
                                M.cmps(medSum, "10000000")<=0)
                            {
                                if (M.cmps( age, "06") >= 0 && 
                                    M.cmps( age, "60") <=0)
                                    return true;
                            }
                            if (M.cmps(medSum, "10000000") > 0) 
                                return M.cmps( age, "16")>=0 && 
                                       M.cmps( age, "60") <=0;
                            break;
                case 2 :
                case 3 :   if (M.cmps( age, "05") >=0 && 
                               M.cmps( age, "60") <= 0)
                            {
                                if (M.cmps(medSum, "1500000") > 0 && 
                                    M.cmps(medSum, "3500000") <= 0)
                                    return true;
                            }
                            if (M.cmps(medSum, "3500000") > 0 && 
                                M.cmps(medSum, "6000000") <=0)
                                return true;
                            if (M.cmps(medSum, "6000000") > 0 &&    
                                M.cmps(medSum, "10000000")<=0)
                            {
                                if (M.cmps( age, "06") >= 0 && 
                                    M.cmps( age, "60") <=0)
                                    return true;
                            }
                            if (M.cmps(medSum, "10000000") > 0)
                                return M.cmps( age, "16")>=0 && 
                                       M.cmps( age, "60") <=0;
                            break;
            }
        }

        if (hivProvince && M.cmps( hivSum, "3000000")  > 0)
            return( true);
        return(false);
    }
   
	/**getMedTable   ตรวจสอบตารางที่ใช้ตรวจสุขภาพ
     **@param   payDate วันที่ชำระเบี้ยประกัน
     **@param   projectNo  ตารางที่ใช้       
     **@return int  true -   ตารางที่ใช้ในการตรวจสุขภาพ
    **/
    public static int getMedTable(String payDate, int projNo)
    {
        if (M.cmps(payDate, "25540701") < 0)
            return(0);
        else if (M.cmps( payDate, MED_57_DATE) < 0)
		{
            if (projNo == 2 || projNo == 3 || projNo == 4 || projNo == 5)
                return(projNo);
            else
                return(1);
		}else
		{
			 if (projNo <= 2)
			 {
				if ( bankType != null)
				{
					if ( M.cmps( payDate, OL_PARTNER) < 0)
						return(4);
					else
						return(7); // new med table 
					
				}
				else
				   return(2);
			 }
			 else
			 {
				// 
				if ( bankType != null)
				{
					if ( M.cmps( payDate, OL_PARTNER) < 0)
						return(4);
					else
						return(7); // new med table 
						
				}
			
				if (M.cmps( payDate, BANC_OL_MED) < 0)
					return(projNo);
				else
				{
					// if (projNo == 4 || projNo == 5)
					System.out.println("bankType = "+ (bankType==null)); 
					if (projNo == 5)
						return(3); // TOP_UP					
					else if (projNo == 4)
					{
						// if (M.cmps(payDate, "25590401")>=0 && ( bankType!=null && bankType.compareTo(BankAssure.BAY)==0))
					// 	if ( bankType != null)
							if (M.cmps(payDate, "25610901")>=0 && ( bankType!=null && bankType.compareTo(BankAssure.IBANK)==0))
								return(2);
							else 
								return(projNo);
						
					}
					else
					{
						if (bankType != null)
							return(3);
						else
						{
							if ((M.cmps( payDate, TOP_UP_PERIOD_1[0]) >= 0 && M.cmps( payDate, TOP_UP_PERIOD_1[1]) <= 0) ||
							    (M.cmps( payDate, TOP_UP_PERIOD_2[0]) >= 0 && M.cmps( payDate, TOP_UP_PERIOD_2[1]) <= 0) ||
							    (M.cmps( payDate, TOP_UP_PERIOD_3[0]) >= 0 && M.cmps( payDate, TOP_UP_PERIOD_3[1]) <= 0))
							{
								return(6); // for TOP_UP_PLUS (3 months)
							}
							else
								return(3);
						}
					}	
				}
			 }
		}
    }
     /** factorByProjectNo  หา factor ที่ใช้ในการตรวจสุขภาพของแต่ละกลุ่ม
     **@param   projectNo  ตารางที่ใช้       
     **@return Vector - String [][] ของอายุ ทุนประกัน และเกณฑ์การตรวจ
     ** */
	public static Vector factorByProjectNo( int projNo )
	{
		return(factorByProjectNo("",projNo));
	}
    /** newFactorByProjectNo  หา factor ที่ใช้ในการตรวจสุขภาพของแต่ละกลุ่ม
     **@param   payDate วันที่ชำระเบี้ยประกัน
     **@param   projectNo  ตารางที่ใช้       
     **@return Vector - String [][] ของอายุ ทุนประกัน และเกณฑ์การตรวจ
     ** */
	public static Vector newFactorByProjectNo(String payDate, int projNo )
	{
        Vector fac = new Vector();
		if ( projNo <= 2)
			projNo  = 2;
		String[][] ageRange = new String[][]{
                                    {"", "", "", "", "", ""},       // 0 before use 2
                                    {"", "", "", "", "", "", ""}, // 1 normal agent use 2
                                    {"15", "45", "55", "99"}, // 2: Q_UP
                                    {"15", "45", "55", "99"}, // 3: TOP_UP
                                    // {"5", "15", "45", "50", "55", "60", "65","99"}, // 4: BANC since 01/04/2559 change to only BAY another bank follow TOPUP 
                                    {"15", "45", "50", "55","99"}, // 4: BANC since 01/04/2559 change to only BAY another bank follow TOPUP 
                                    {"40","50", "99"}, // TCRB_ONLY_THAITANAPITAK 
                                    {"15", "45", "55","60", "99"}, // 3: TOP_UP_PLUS (3 months )
                                    {"15", "45", "50", "55","99"}, // 7: New OL_PARTNER
                                };
		String[][] sumRange = new String[][] {
                                    {"" ,"" ,""},
                                    {"" ,"" ,""}, 
                                    { "1000000", "2500000",  "3000000",  "4000000","5000000","7000000","10000000","25000000","999999999"},
                                    { "1000000", "3000000",  "3500000",  "5000000","7000000","10000000","25000000","999999999"},
                                    { "1500000", "4000000",  "4500000",  "5500000","7000000","10000000","25000000","999999999"}, // BAY only
                                    { "3000000", "4000000",  "5000000", "10000000",
                                     "15000000", "999999999"},
                                    { "1000000", "1500000","3000000", "3500000", "5000000","5500000","7000000","10000000","25000000","999999999"},
                                    { "1500000", "4000000",  "5500000", "7500000","10000000","25000000","999999999"}}; // OL PARTNER

        char[][][] check = new char[][][] {{  {'N', 'N', 'N', 'N', 'N', 'N','N'}},
                                           {  {'N', 'N', 'N', 'N', 'N', 'N','N'}},

	                                       {  {'N', 'N', 'N', 'N' }, // 0 - 1000000
                                              {'N', 'N', 'N', 'Y',}, // 1,000,001 - 2,500,000
                                              {'N', 'Y', 'Y', 'Y',}, // 2,500,001 - 3,000,000
                                              {'Y', 'Y', 'Y', 'Y',}, // 3,000,001 - 4,000,000
                                              {'Y', 'Y', 'Y', 'Y',}, // 4,000,001 - 5,000,000
                                              {'Y', 'Y', 'Y', 'Y',}, // 5,000,001 - 7,000,000
                                              {'Y', 'Y', 'Y', 'Y',}, // 7,000,001 - 10,000,000
                                              {'Y', 'Y', 'Y', 'Y',}, // 10,000,001 -25,000,000
                                              {'Y', 'Y', 'Y', 'Y',}}, // 25,000,000

	                                   {  {'N', 'N', 'N', 'N' }, // 0 - 1000000
                                              {'N', 'N', 'N', 'N',}, // 1,000,001 - 3,000,000
                                              {'N', 'Y', 'Y', 'Y',}, // 3,000,001 - 3,500,000
                                              {'N', 'Y', 'Y', 'Y',}, // 3,500,001 - 5,000,000
                                              {'N', 'Y', 'Y', 'Y',}, // 5,000,001 - 7,000,000
                                              {'N', 'Y', 'Y', 'Y',}, // 7,000,001 - 10,000,000
                                              {'N', 'Y', 'Y', 'Y',}, // 10,000,001 -25,000,000
                                              {'N', 'Y', 'Y', 'Y',}}, // 25,000,000

                                           {  {'N', 'N', 'N', 'N', 'N'}, // 0 - 1,500,000
                                              {'N', 'N', 'N', 'N', 'Y'}, // 1,500,001 - 4,000,000
                                              {'N', 'N', 'N', 'Y', 'Y'}, // 4,000,001 - 4,500,000
                                              {'N', 'N', 'Y', 'Y', 'Y'}, // 4,500,001-  5,500,000
                                              {'Y', 'Y', 'Y', 'Y', 'Y'}, // 5,500,001 - 7,000,000
                                              {'Y', 'Y', 'Y', 'Y', 'Y'}, // 7,000,001 - 10,000,000
                                              {'Y', 'Y', 'Y', 'Y', 'Y'}, // 10,000,001 -25,000,000
                                              {'Y', 'Y', 'Y', 'Y', 'Y'}},// > 25,000,000

                                           {  {'N', 'N', 'N'}, // 50,000-3,000,000
                                              {'N', 'N', 'Y'}, // 3,000,001-4,000,000
                                              {'Y', 'Y', 'Y'}, // 4,000,001-5,000,000
                                              {'Y', 'Y', 'Y'}, // 5,000,001-10,000,000
                                              {'Y', 'Y', 'Y'}, //10,000,001-15,000,000
                                              {'Y', 'Y', 'Y'}},  // > 15,000,000 

					    { {'N', 'N', 'N', 'N','N' }, // 0 - 1000000
                                              {'N', 'N', 'N', 'N','Y'}, // 1,000,001 - 1,500,000
                                              {'N', 'N', 'N', 'N','Y'}, // 1,500,001 - 3,000,000
                                              {'N', 'Y', 'Y', 'Y','Y'}, // 3,000,001 - 3,500,000
                                              {'N', 'Y', 'Y', 'Y','Y'}, // 3,500,001 - 5,000,000
                                              {'N', 'Y', 'Y', 'Y','Y'}, // 5,000,001 - 5,500,000
                                              {'N', 'Y', 'Y', 'Y','Y'}, // 5,500,001 - 7,000,000
                                              {'N', 'Y', 'Y', 'Y','Y'}, // 7,000,001 -10,000,000
                                              {'N', 'Y', 'Y', 'Y','Y'}, // 10,000,001 -25,000,000
                                              {'N', 'Y', 'Y', 'Y','Y'}}, // `>25,000,000

										   {  {'N', 'N', 'N', 'N', 'N'}, // 0 - 1,500,000
                                              {'N', 'N', 'N', 'N', 'N'}, // 1,500,001 - 4,000,000
                                              {'N', 'N', 'N', 'Y', 'Y'}, // 4,000,001-  5,500,000
                                              {'N', 'N', 'Y', 'Y', 'Y'}, // 5,500,001 - 7,500,000
                                              {'N', 'Y', 'Y', 'Y', 'Y'}, // 7,500,001 - 10,000,000
                                              {'N', 'Y', 'Y', 'Y', 'Y'}, // 10,000,001 -25,000,000
                                              {'N', 'Y', 'Y', 'Y', 'Y'}},// > 25,000,000


                                           };


        fac.add( ageRange[projNo]);
        fac.add( sumRange[projNo]);
        fac.add( check[projNo]);
        return(fac);
	}
	
    /** factorByProjectNo  หา factor ที่ใช้ในการตรวจสุขภาพของแต่ละกลุ่ม
     **@param   payDate    วันที่ชำระเบี้ยประกันหรือวันที่ตรวจสอบ
     **@param   projectNo  ตารางที่ใช้       
     **@return Vector - String [][] ของอายุ ทุนประกัน และเกณฑ์การตรวจ
     ** */
	
    public static Vector factorByProjectNo(String payDate,  int projNo)
    {
        Vector fac = new Vector();
		if ( payDate.trim().length()!=0)
			return ( newFactorByProjectNo(payDate, projNo));
    
        String[][] ageRange = new String[][]{
                                    {"5", "15", "40", "50", "60", "70"},     // 0: BEFORE 01/07/2554
                                    {"5", "15", "45", "50", "55", "60", "99"}, // 1: AGENT
                                    {"5", "15", "45", "50", "55", "60", "99"}, // 2: Q_UP
                                    {"5", "15", "45", "50", "55", "60", "99"}, // 3: TOP_UP
                                    {"5", "15", "45", "50", "55", "60", "65","99"}, // 4: BANC 
                                    {"40","50", "99"} // TCRB_ONLY_THAITANAPITAK 
                                };
                            
        String[][] sumRange = new String[][] {
                                    {  "500000",    "750000",  "1000000",  "1500000",
                                      "2000000",   "3000000",  "5000000", "10000000", 
                                     "15000000", "999999999"},
                                    {  "600000",   "1000000",  "1500000",  "2000000",
                                      "3000000",   "6000000", "10000000", "15000000", 
                                    "999999999"},
                                    {  "600000",   "1000000",  "1500000",  "2000000",
                                      "2500000",   "3500000",  "6000000", "10000000", 
                                     "15000000", "999999999"},
                                    {  "600000",   "1000000",  "1500000",  "2000000",
                                      "2500000",   "4000000",  "6000000", "10000000", 
                                     "15000000", "999999999"},
                                    {  "300000",    "600000",  "1000000",  "1500000", 
                                      "2000000",   "2500000",  "4000000",  "6000000", 
                                     "10000000",  "15000000","999999999"},
                                    { "3000000",   "4000000",  "5000000", "10000000",
                                     "15000000", "999999999"}};

            char[][][] check = new char[][][] {{  {'N', 'N', 'N', 'N', 'N', 'N'}, //    50,000 -   500,000
                                                  {'N', 'N', 'N', 'N', 'N', 'N'}, //   500,001 -   750,000
                                                  {'N', 'N', 'N', 'N', 'N', 'N'}, //   750,001 - 1,000,000 
                                                  {'N', 'N', 'N', 'N', 'N', 'N'}, // 1,000,001 - 1,500,000
                                                  {'Y', 'Y', 'Y', 'Y', 'Y', 'N'}, // 1,500,001 - 2,000,000
                                                  {'Y', 'Y', 'Y', 'Y', 'Y', 'N'}, // 2,000,001 - 3,000,000
                                                  {'Y', 'Y', 'Y', 'Y', 'Y', 'Y'}, // 3,000,001 - 5,000,000
                                                  {'N', 'Y', 'Y', 'Y', 'Y', 'N'}, // 5,000,001 -10,000,000
                                                  {'N', 'N', 'Y', 'Y', 'Y', 'N'}, //10,000,001 -15,000,000
                                                  {'N', 'N', 'Y', 'Y', 'Y', 'N'}}, //15,000,00 -->
                        
                                                { {'N', 'N', 'N', 'N', 'N', 'N', 'N'}, // 0 - 600000
                                                  {'N', 'N', 'N', 'N', 'N', 'N', 'N'}, // 600,001 - 1,000,000
                                                  {'N', 'N', 'N', 'N', 'N', 'N', 'N'}, // 1,000,001 - 1,500,000
                                                  {'N', 'Y', 'Y', 'Y', 'Y', 'Y', 'N'}, // 1,500,001 - 2,000,000
                                                  {'N', 'Y', 'Y', 'Y', 'Y', 'Y', 'N'}, // 2,000,001 - 3,000,000
                                                  {'N', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y'}, // 3,000,001 - 6,000,000
                                                  {'N', 'Y', 'Y', 'Y', 'Y', 'Y', 'N'}, // 6,000,001 - 10,000,000
                                                  {'N', 'N', 'Y', 'Y', 'Y', 'Y', 'N'}, // 10,000,001 - 15,000,000
                                                  {'N', 'N', 'Y', 'Y', 'Y', 'Y', 'N'}},// > 15,000,000

                                                { {'N', 'N', 'N', 'N', 'N', 'N','N'}, // 0 - 600000
                                                  {'N', 'N', 'N', 'N', 'N', 'N','N'}, // 600,001 - 1,000,000
                                                  {'N', 'N', 'N', 'N', 'N', 'N','N'}, // 1,000,001 - 1,500,000
                                                  {'N', 'Y', 'Y', 'Y', 'Y', 'Y','N'}, // 1,500,001 - 2,000,000
                                                  {'N', 'Y', 'Y', 'Y', 'Y', 'Y','N'}, // 2,000,001 - 2,500,000
                                                  {'N', 'Y', 'Y', 'Y', 'Y', 'Y','N'}, // 2,500,001 - 3,500,000
                                                  {'N', 'Y', 'Y', 'Y', 'Y', 'Y','Y'}, // 3,5000,001 - 6,000,000
                                                  {'N', 'Y', 'Y', 'Y', 'Y', 'Y','N'}, // 6,000,001 - 10,000,000
                                                  {'N', 'N', 'Y', 'Y', 'Y', 'Y','N'}, // 10,000,001 - 15,000,000
                                                  {'N', 'N', 'Y', 'Y', 'Y', 'Y','N'}},// > 15,000,000

                                                { {'N', 'N', 'N', 'N', 'N', 'N','N'}, // 0 - 600000
                                                  {'N', 'N', 'N', 'N', 'N', 'N','N'}, // 600,001 - 1,000,000
                                                  {'N', 'N', 'N', 'N', 'N', 'N','N'}, // 1,000,001 - 1,500,000
                                                  {'Y', 'Y', 'Y', 'Y', 'Y', 'Y','N'}, // 1,500,001 - 2,000,000
                                                  {'Y', 'Y', 'Y', 'Y', 'Y', 'Y','N'}, // 2,000,001 - 2,500,000
                                                  {'Y', 'Y', 'Y', 'Y', 'Y', 'Y','N'}, // 2,500,001 - 4,000,000
                                                  {'Y', 'Y', 'Y', 'Y', 'Y', 'Y','Y'}, // 4,000,001 - 6,000,000
                                                  {'N', 'Y', 'Y', 'Y', 'Y', 'Y','N'}, // 6,000,001 - 10,000,000
                                                  {'N', 'N', 'Y', 'Y', 'Y', 'Y','N'}, // 10,000,001 - 15,000,000
                                                  {'N', 'N', 'Y', 'Y', 'Y', 'Y','N'}},// > 15,000,000
    
                                                { {'N', 'N', 'N', 'N', 'N', 'N','N','N'}, // 0 - 300,000
                                                  {'N', 'N', 'N', 'N', 'N', 'N','N','N'}, // 300,001 - 600,000
                                                  {'N', 'N', 'N', 'N', 'N', 'N','N','N'}, // 600,001 - 1,000,000
                                                  {'N', 'N', 'N', 'N', 'N', 'N','N','N'}, // 1,000,001- 1,500,000
                                                  {'Y', 'Y', 'Y', 'Y', 'Y', 'Y','N','N'}, // 1,500,001 - 2,000,000
                                                  {'Y', 'Y', 'Y', 'Y', 'Y', 'Y','N','N'}, // 2,000,001 - 2,500,000
                                                  {'Y', 'Y', 'Y', 'Y', 'Y', 'Y','N','N'}, // 2,500,001 - 4,000,000
                                                  {'Y', 'Y', 'Y', 'Y', 'Y', 'Y','Y','Y'}, // 4,000,001 - 6,000,000
                                                  {'N', 'Y', 'Y', 'Y', 'Y', 'Y','N','N'}, // 6,000,001 - 10,000,000
                                                  {'N', 'N', 'Y', 'Y', 'Y', 'Y','N','N'}, // 10,000,001 - 15,000,000
                                                  {'N', 'N', 'Y', 'Y', 'Y', 'Y','N','N'}},// > 15,000,000
                                                { {'N', 'N', 'N'}, // 50,000-3,000,000
                                                  {'N', 'N', 'Y'}, // 3,000,001-4,000,000
                                                  {'Y', 'Y', 'Y'}, // 4,000,001-5,000,000
                                                  {'Y', 'Y', 'Y'}, // 5,000,001-10,000,000
                                                  {'Y', 'Y', 'Y'}, //10,000,001-15,000,000
                                                  {'Y', 'Y', 'Y'}  // > 15,000,000 
                                                }
                                 };
        fac.add( ageRange[projNo]);
        fac.add( sumRange[projNo]);
        fac.add( check[projNo]);
        return(fac);
    }
    /**getZone   หาพิ้นที่ของจังหวัดที่ใช้ในการตรวจ HIV
    **@param  province  จังหวัด  
    **@return int  
    ** */ 
    public  static int getZone(String province)
    {
        String    line    =    "00";
        //System.out.println("get zone for " + province);
        if (M.numeric(province))
            province = AddressCode.tambonToProvince(province);
        if (province.compareTo(M.stou("ปข")) == 0)
            return (1);
        line    =    getMarketLine(province);
        for (int i = 0; i < ZONE.length; i++)
        {
            for (int j = 0; j < ZONE[i].length; j++)
                if (line.compareTo(ZONE[i][j]) == 0)
                    return (i + 1);
        }
        return (0);
    }
     /**decreaseAge คำนวณการลดอายุ  
    **@param  plan แบบประกัน
    **@param  age  อายุ
    **@return String อายุที่ลด
    **/

    public static String decreaseAge(String plan, String age)
    {
        if (M.cmps(age, "66") >= 0 && (plan.compareTo("EI") == 0 || plan.compareTo("EU") == 0))
            return ("56");
        return (age);
    }
    // --------------
    // UW1-3 เม.ย. 46
    // --------------
    /**exemptMedica  ได้รับการยกเว้นการตรวจสุขภาพ
     **@param  plan  แบบประกัน
     **@param  age   อายุ
     **@param   medSum  ทุนตรวจสุขภาพ
     **@param  forDate  วันที่ตรวจสอบ
     **@param  projNo   กลุ่มที่ตรวจ
     **@param  purchaseHealthRider  มีการซื้อสัญญาแนบท้ายหรือไม่
     **@return Boolean true ได้รับการยกเว้นการตรวจสุขภาพ false ไม่ได้รับการยกเว้นตรวจสุขภาพ
     **/

    public static boolean exemptMedical(String plan, String age, String medSum, 
                                        String forDate, int projNo, 
                                        boolean purchaseHealthRider)
    {
        if (projNo    !=    M.ctoi(UnwCondition.Q_UP54) && projNo != M.ctoi(UnwCondition.TOP_UP54))
            return false;
            if (M.cmps(age, "61") < 0 || M.cmps(age, "65") > 0)
            return    false;
        if (M.cmps(medSum, "300000") > 0)
            return false;
        if (purchaseHealthRider)
            return false;
        String exempt = "ENS";
       if (exempt.indexOf(plan.charAt(0)) < 0)
            return false;
        TLPlan tlp = PlanSpec.getPlan(plan);
        String pyear = tlp.payYear(age);
        return M.cmps(pyear, "20") <= 0;
    }
   /**checkMedical  ตรวจสุขภาพหรือไม่
    **@param  plan  แบบประกัน
    **@param  age   อายุ
    **@param  province จังหวัด
    **@param   medSum  ทุนตรวจสุขภาพ
    **@param  forDate  วันที่ตรวจสอบ
    **@param  projNo   กลุ่มที่ตรวจ
    **@return Boolean true ต้องตรวจสุขภาพ false ไม่ตรวจสุขภาพ
    **/
    public static boolean checkMedical(String plan, String age, String province, 
                                       String medSum, String forDate, int projNo)
    {
		if (PlanType.isNonMedPlan(plan))
			return(false);
		System.out.println("PLAN - "+ PlanType.isBankMLTA(plan));
		/*if (PlanType.isBankMLTA(plan))
			return mltaMedical(forDate, plan, age, medSum); */
		if (PlanType.isTLPMRTA(plan))
			return tlpMRTAMedical(forDate, plan, age, medSum);
		if (PlanType.isTLPNonMRTA(plan))
			return tlpNonMRTAMedical(forDate, plan, age, medSum);
        if (PlanType.isBankMRTA(plan) || PlanType.isBankMLTA(plan))
            return mrtaMedical(forDate, plan, age, medSum);
        return ordMedical(forDate, plan, age, province, medSum, projNo);
    }
   /**mrtaMedical  ตรวจสุขภาพเคส Credit Life หรือไม่
    **@param  plan  แบบประกัน
    **@param  age   อายุ
    **@param  province จังหวัด
    **@param   medSum  ทุนตรวจสุขภาพ
    **@return Boolean true ต้องตรวจสุขภาพ false ไม่ตรวจสุขภาพ
    **/
    public static boolean mrtaMedical(String forDate, String plan, 
                                      String age, String medSum) 
    {
		System.out.println( "mrtaMedical ** ");
		if (PlanType.isNonMedPlan(plan))
			return( false);
        if (!PlanType.isBankMRTA(plan))
            return false;
      
        if (M.cmps( forDate, "25560101") < 0)
            return M.cmps(medSum, "5000000") > 0;
        else
		{
			if (M.cmps( forDate, "25570501") < 0)
			{
           	 	if (M.cmps( age, "55") <= 0 && M.cmps( medSum, "7000000") <= 0)
            	    return( false);
           		else
                	return( M.cmps(medSum, "5000000") > 0 );
			}
			else
			{
  				String bankCode = utility.underwrite.BankAssure.bankCodeFromPlan( plan);
				System.out.println("bankCode = "+ bankCode );
				if (bankCode == null)
				{
					System.out.println("BankCode in checkMedical == null");
					return(false);
				}
				if (bankCode.compareTo(utility.underwrite.BankAssure.TCRB)==0)
				{
               		if (M.cmps( age, "55") <= 0 && M.cmps( medSum, "7500000") <= 0)
                    	return( false);
                	else
                    	return( M.cmps(medSum, "5000000") > 0 );
				}
				if (bankCode.compareTo(utility.underwrite.BankAssure.GHB)==0 || bankCode.compareTo(utility.underwrite.BankAssure.IBANK)==0)
				{
               		if (M.cmps(  medSum, "5000000") <= 0)
                    	return( false);
					return( M.cmps( age, "18")>=0); // 20
				}
				if (bankCode.compareTo(utility.underwrite.BankAssure.BAAC)==0 || bankCode.compareTo(utility.underwrite.BankAssure.COOP_TLI)==0)
				{
					
					System.out.println(" ZZ 555 " + medSum + " "+  age +" "+ ( M.cmps(  medSum, "3000000") <= 0) + " "+ ( M.cmps( age, "18")>=0)); 
	               			if (M.cmps(  medSum, "3000000") <= 0)
        		        	    	return( false);
					return( M.cmps( age, "18")>=0); // old age 20
				}
				else // BAY && ICBC
				{
					    if (M.cmps(age, "55")<=0)
                        {
                            if (PlanType.isNonHIVPlan(plan))
                                return(false);
                            else
							{
								if (bankCode.compareTo(utility.underwrite.BankAssure.BAY)  ==0  || 
								   (bankCode.compareTo(utility.underwrite.BankAssure.ICBC) ==0 && M.cmps( forDate, ICBC_CL_MED) >=0)) // UW1-3/05 Jan 58
								{
									if ( M.cmps( forDate, BAY_CL_MED) < 0)
									{
										if (M.cmps( medSum, "10000000") > 0)
											return(true);
	        	                        return( M.cmps(age, "45") > 0 && M.cmps(medSum, "7500001")>=0 && M.cmps( medSum, "10000000")<=0);
									}
									else
									{
										if (M.cmps( medSum, "10000000") > 0)
											return(true);
	        	                        return( M.cmps(age, "55") > 0 && M.cmps( medSum, "10000000")<=0);
									}
								}
								else
								{
									if (M.cmps( medSum, "9000000") > 0)
										return(true);
	                                return( M.cmps(age, "45") > 0 && M.cmps(medSum, "7500001")>=0 && M.cmps( medSum, "9000000")<=0);
								}
							}

                        }
                        else
                            return(  M.cmps(medSum, "5000001")>=0);

				}
			}
		}
    }
   /**mrtaMedical  ตรวจสุขภาพเคส Credit Life หรือไม่
	***@param  plan  แบบประกัน
 	***@param  age   อายุ
 	***@param  province จังหวัด
 	***@param   medSum  ทุนตรวจสุขภาพ
 	***@return Boolean true ต้องตรวจสุขภาพ false ไม่ตรวจสุขภาพ
 	***/

	public static boolean mltaMedical(String forDate, String plan,  String age, String medSum)
    {
		System.out.println("mltaMedical Medsum - "+medSum);
        if (!PlanType.isBankMLTA(plan))
            return false;
        
        System.out.println("forDate : "+forDate);
        if (M.cmps(forDate, MLTA_MED_DATE)>=0)
        {
        	if (M.cmps(medSum, "5000000") <= 0)
        		return false;
        	if (M.cmps(medSum, "10000000") <= 0 && M.cmps(age, "61")<0) //56
        		return false;
        	return true;
        }
        return M.cmps(medSum, "5000000") > 0;
    }

    public static boolean tlpMRTAMedical(String forDate, String plan,  String age, String medSum)
    {
        System.out.println("TLP MRTA Medsum - "+medSum);
        if (!PlanType.isTLPMRTA(plan))
            return false;
        return (M.cmps(medSum, "10000000") > 0 || (M.cmps( medSum, "5000000") > 0 && M.cmps( medSum, "10000000") <=0 && M.ctoi(age)>=61));

    }
    public static boolean tlpNonMRTAMedical(String forDate, String plan,  String age, String medSum)
    {
        System.out.println("TLP NON MRTA Medsum - "+medSum);
        if (!PlanType.isTLPNonMRTA(plan))
            return false;

        return (M.cmps(medSum, "7500000") > 0 || (M.cmps( medSum, "5000000") > 0 && M.cmps( medSum, "7500000") <=0 && M.ctoi(age)>=61));
    }


    /* P'Za change BANCA Medical */
    /**ordMedical  ตรวจสุขภาพเคสรายงวดหรือไม่
     **@param  forDate  วันที่ตรวจสอบ
     **@param  plan  แบบประกัน
     **@param  age   อายุ
     **@param  province จังหวัด
     **@param   medSum  ทุนตรวจสุขภาพ
     **@param  projNo   กลุ่มที่ตรวจ
     **@return Boolean true ต้องตรวจสุขภาพ false ไม่ตรวจสุขภาพ
     **/
    public static boolean ordMedical(String forDate, String plan, String age, 
                                     String province, String medSum, int projNo)
    {
	System.out.println("medSum : "+medSum);
        if (PlanType.isNonMedPlan(plan) || M.itis( medSum, '0'))
            return (false);

        String bankCode =   BankAssure.bankCodeFromPlan(plan);
	bankType = bankCode ; // for other bank
        int iage = M.ctoi(age);
	System.out.println("iage : "+iage+ " "+ (bankType == null));
        if (plan.compareTo("SN") == 0 && M.cmps(age, "0") == 0)
            return false;
		if (plan.compareTo("GW03")==0 && M.cmps(age, "56") >=0 && M.cmps(age,"65") <=0 && M.cmps(medSum,"2000000") <=0)
			return false;
        int isum        =       M.ctoi(medSum);
        //**** Edit 30/06/54 Excepted plan within UW1-3/02 07/54
        if (plan.compareTo("EH") == 0 || 
            plan.compareTo("EV") == 0 || 
            plan.compareTo("BEV") == 0)
        {
            if (M.cmps(medSum, "10000000") <= 0)
                return false;
            return true;
        }
        if (plan.compareTo("EI") == 0 || 
            plan.compareTo("EU") == 0)
        {
            if (M.cmps(medSum, "5000000") <= 0)
                return false;
            return true;
        }
        //**** End Edit 30/06/54 Excepted plan within UW1-3/02 07/54
        System.out.println(" ordMedical - " + projNo);
        projNo = getMedTable(forDate, projNo);
        System.out.println("isum - "+isum+ "iage - "+ iage+ " proj =" +projNo+ " "+forDate);
        switch (projNo)
        {
            case    0   :    
                    if (iage <= 5) return (isum > 1000000);
                    if ( iage >= 6 && iage <= 50) 
                        return( isum > 2000000);
                    if (iage >= 6 && iage <= 40) 
                    {
                        if (iage >= 16 && iage <= 40) // 1/52
                            return (isum > 2000000);
                        return (isum > 1500000);
                    }
                    if (iage >=51 && iage <= 60)    return (isum > 500000);
                        return (iage >= 61 && isum >=50000);
/* ================ Edited By Manisa 23/06/54 =================*/
            case    1   :      
                    if (iage >= 0 && iage <= 5)
                        return isum > 2000000 ;
                    if (iage >= 6 && iage <= 15)
                        return isum > 2000000 ;
                    if (iage >= 16 && iage <= 45)
                        return isum > 3000000;
                    if (iage >= 46 && iage <= 50)
                        return isum > 2000000;
                    if (iage >= 51 && iage <= 55)
                        return isum > 1500000;
                    if (iage >= 56 && iage <= 60)
                        return isum > 600000;
                    return true;
            case    2   :     
					if (M.cmps( forDate , MED_57_DATE) < 0)
					{
                   	 	if (iage >= 0 && iage <= 5)
                    	    return isum > 2000000 ;
	                    if (iage >= 6 && iage <= 15)
    	                    return isum > 2500000 ;
        	            if (iage >= 16 && iage <= 45)
            	            return isum > 3500000;
                	    if (iage >= 46 && iage <= 50)
                    	    return isum > 2500000;
	                    if (iage >= 51 && iage <= 55)
    	                    return isum > 2000000;
        	            if (iage >= 56 && iage <= 60)
            	            return isum > 600000;
                	    return true;
					}	
					else
					{
						System.out.println("QUPPPP !! redLeve - "+ isRedLevel + " Black - "+ isBlacklist);
						if (isum <= 2500000)
						{
							if ( isRedLevel || isBlacklist)
							    return( iage >= 46 );
							else
								if ( iage <= 45)
								  return false;
						}
        	            if (  isum > 2500000 && isum < 4000000 )
						{
        	                if ( iage >= 16 && iage <= 45) 
            	               return ( isRedLevel || isBlacklist ) ; // return( false );
						}
						else
						{
						System.out.println("QUPPPP 2!!");
							if (isum > 2500000 && isum <= 3000000)
							{
							    if (isRedLevel || isBlacklist)
									return(true);
								return( iage > 45 );
							}
						}
						System.out.println("QUPPPP 3!!");
						if (isum <= 1000000 )
							return(false);
						else if (  isum >= 1000001 && isum <= 2500000 && iage < 56)
					    	return( false);
						else if (  isum >= 2500001 && isum <= 3000000 && iage < 15)
							return( false); 
						return(true);
					}
					
            case    3   :      
			    if (M.cmps( forDate , MED_57_DATE) < 0)
				{
	                    if (iage >= 0 && iage <= 5)
    	                    return isum > 2000000 ;
        	            if (iage >= 6 && iage <= 15)
            	            return isum > 2500000 ;
                	    if (iage >= 16 && iage <= 45)
                    	    return isum > 4000000;
	                    if (iage >= 46 && iage <= 50)
    	                    return isum > 2500000;
        	            if (iage >= 51 && iage <= 55)
            	            return isum > 2000000;
                	    if (iage >= 56 && iage <= 60)
                    	    return isum > 600000;
	                    return true;
					}
					else
					{
                        if (isum <= 1000000)
                            return false;
                        else
                        {
                            if (isum > 1000000 && isum <= 3500000)
                                return( iage >= 56);
                            if (isum > 3500000 && isum <= 5000000)
                                return( iage >= 46);
							if (isum > 5000000)
								return (true);
                        }
					}
            case    4   : // OL BAY 01042559 , change new MedTable 03/06/2560
                    if (iage >= 0 && iage <= 45)
                        return isum > 5500000 ;
                    if (iage >= 46 && iage <= 50)
                        return isum > 4500000;
                    if (iage >= 51 && iage <= 55)
                        return isum > 4000000;
                    if (iage >= 56 )
                        return isum > 1500000;
                   // return true;
            case  5    :    
                    if (iage >= 51)
                        return isum > 3000000;
                    return isum > 4000000 ;
			case 6     :
					if (isum <= 1000000)
                    	return false;
                    else
                    {
                            if (isum > 1000000 && isum <= 1500000)
								return( iage >= 61);
                            if (isum > 1500000 && isum <= 3500000)
                                return( iage >= 56);
                            if (isum > 3500000 && isum <= 5500000)
                                return( iage >= 46);
							return true;
                    }
            case   7   : // OL Partner 05/10/2561
                    if (iage >= 0 && iage <= 45)
                        return isum >7500000 ;
                    if (iage >= 46 && iage <= 50)
                        return isum > 5500000;
                    if (iage >= 51 && iage <= 55)
                        return isum > 4000000;
                    if (iage >= 56 )
                        return isum > 1500000;
        }
        return (false);
    }
   /** getMarketLine   หาสายงานหารตลาด
    **@param  จังหว้ด
    **@return String สายการตลาดตามจังหวัด
    **/

    public static String getMarketLine(String province)
    {
    //    System.out.println("get market line for " + province);
        if (province == null)
            return null;
        for (int i = 0; i < marketLine.length; i++)
        {
            if (province.compareTo(marketLine[i][0]) == 0)
                return (marketLine[i][2]);
        }
        return (null);
    }

    public static String[][] marketLine = {{M.stou("กจ"), M.stou("กาญจนบุรี"), "01"},
                        {M.stou("กท"), M.stou("กรุงเทพมหานคร"), "M"},
                        {M.stou("กบ"), M.stou("กระบี่"), "11"},
                        {M.stou("กพ"), M.stou("กำแพงเพชร"), "08"},
                        {M.stou("กส"), M.stou("กาฬสินธุ์"), "12"},
                        {M.stou("ขก"), M.stou("ขอนแก่น"), "04"},
                        {M.stou("จบ"), M.stou("จันทบุรี"), "15"},
                        {M.stou("ฉช"), M.stou("ฉะเชิงเทรา"), "05"},
                        {M.stou("ชน"), M.stou("ชัยนาท"), "07"},
                        {M.stou("ชบ"), M.stou("ชลบุรี"), "05"},
                        {M.stou("ชพ"), M.stou("ชุมพร"), "11"},
                        {M.stou("ชม"), M.stou("เชียงใหม่"), "02"},
                        {M.stou("ชย"), M.stou("ชัยภูมิ"), "03"},
                        {M.stou("ชร"), M.stou("เชียงราย"), "02"},
                        {M.stou("ตก"), M.stou("ตาก"), "08"},
                        {M.stou("ตง"), M.stou("ตรัง"), "06"},
                        {M.stou("ตร"), M.stou("ตราด"), "15"},
                        {M.stou("นค"), M.stou("หนองคาย"), "10"},
                        {M.stou("นฐ"), M.stou("นครปฐม"), "01"},
                        {M.stou("นธ"), M.stou("นราธิวาส"), "06"},
                        {M.stou("นน"), M.stou("น่าน"), "14"},
                        {M.stou("นบ"), M.stou("นนทบุรี"), "M"},
                        {M.stou("นพ"), M.stou("นครพนม"), "10"},
                        {M.stou("นภ"), M.stou("หนองบัวลำภู"), "10"},
                        {M.stou("นม"), M.stou("นครราชสีมา"), "03"},
                        {M.stou("นย"), M.stou("นครนายก"), "05"},
                        {M.stou("นว"), M.stou("นครสวรรค์"), "07"},
                        {M.stou("นศ"), M.stou("นครศรีธรรมราช"), "11"},
                        {M.stou("บร"), M.stou("บุรีรัมย์"), "13"},
                        {M.stou("ปข"), M.stou("ประจวบคีรีขันธ์"), "01"},
                        {M.stou("ปจ"), M.stou("ปราจีนบุรี"), "05"},
                        {M.stou("ปท"), M.stou("ปทุมธานี"), "M"},
                        {M.stou("ปน"), M.stou("ปัตตานี"), "06"},
                        {M.stou("พง"), M.stou("พังงา"), "11"},
                        {M.stou("พจ"), M.stou("พิจิตร"), "07"},
                        {M.stou("พช"), M.stou("เพชรบูรณ์"), "08"},
                        {M.stou("พท"), M.stou("พัทลุง"), "06"},
                        {M.stou("พบ"), M.stou("เพชรบุรี"), "01"},
                        {M.stou("พย"), M.stou("พะเยา"), "02"},
                        {M.stou("พร"), M.stou("แพร่"), "14"},
                        {M.stou("พล"), M.stou("พิษณุโลก"), "08"},
                        {M.stou("ภก"), M.stou("ภูเก็ต"), "11"},
                        {M.stou("มค"), M.stou("มหาสารคาม"), "12"},
                        {M.stou("มส"), M.stou("แม่ฮ่องสอน"), "02"},
                        {M.stou("มห"), M.stou("มุกดาหาร"), "10"},
                        {M.stou("ยล"), M.stou("ยะลา"), "06"},
                        {M.stou("ยส"), M.stou("ยโสธร"), "09"},
                        {M.stou("รน"), M.stou("ระนอง"), "11"},
                        {M.stou("รบ"), M.stou("ราชบุรี"), "01"},
                        {M.stou("รย"), M.stou("ระยอง"), "15"},
                        {M.stou("รอ"), M.stou("ร้อยเอ็ด"), "12"},
                        {M.stou("ลบ"), M.stou("ลพบุรี"), "07"},
                        {M.stou("ลป"), M.stou("ลำปาง"), "02"},
                        {M.stou("ลพ"), M.stou("ลำพูน"), "02"},
                        {M.stou("ลย"), M.stou("เลย"), "04"},
                        {M.stou("ศก"), M.stou("ศรีสะเกษ"), "13"},
                        {M.stou("สก"), M.stou("สระแก้ว"), "05"},
                        {M.stou("สข"), M.stou("สงขลา"), "06"},
                        {M.stou("สค"), M.stou("สมุทรสาคร"), "M"},
                        {M.stou("สฎ"), M.stou("สุราษฎร์ธานี"), "11"},
                        {M.stou("สต"), M.stou("สตูล"), "06"},
                        {M.stou("สท"), M.stou("สุโขทัย"), "14"},
                        {M.stou("สน"), M.stou("สกลนคร"), "10"},
                        {M.stou("สบ"), M.stou("สระบุรี"), "07"},
                        {M.stou("สป"), M.stou("สมุทรปราการ"), "M"},
                        {M.stou("สพ"), M.stou("สุพรรณบุรี"), "01"},
                        {M.stou("สร"), M.stou("สุรินทร์"), "13"},
                        {M.stou("สส"), M.stou("สมุทรสงคราม"), "01"},
                        {M.stou("สห"), M.stou("สิงห์บุรี"), "07"},
                        {M.stou("อจ"), M.stou("อำนาจเจริญ"), "09"},
                        {M.stou("อด"), M.stou("อุดรธานี"), "10"},
                        {M.stou("อต"), M.stou("อุตรดิตถ์"), "14"},
                        {M.stou("อท"), M.stou("อ่างทอง"), "07"},
                        {M.stou("อน"), M.stou("อุทัยธานี"), "07"},
                        {M.stou("อบ"), M.stou("อุบลราชธานี"), "09"},
                        {M.stou("อย"), M.stou("พระนครศรีอยุธยา"), "07"}};

    public static String degrade (String planCode, String age)
    {
        if (M.cmps(age, "66") >=0 &&  
            (planCode.compareTo("EI")==0 || planCode.compareTo("EU")==0))
            return ("56");
        return (age);
    }
    /** getMedicalList   หารายการตรวจสุขภาพ
    **@param medSum ทุนตรวจสุขภาพ
    **@param  age   อายุ
    **@param  province จังหวัด
    **@param  tdate  วันที่ตรวจสอบ
    **@param  projNo   กลุ่มที่ตรวจ
    **@param inDetail   ต้องการรายละเอียดกรุ้ปเลือดหรือไม่
    **@return Vector ของรายการตรวจสุขภาพ
    **/
    public static Vector getMedicalList (String medSum, String age, 
                                         String province, String tdate, 
                                         int projNo, String planCode)
    {
        return getMedicalList(medSum,age, province,tdate,true, projNo, planCode);
    }
    /** getMedicalList   หารายการตรวจสุขภาพ
    **@param medSum ทุนตรวจสุขภาพ
    **@param  age   อายุ
    **@param  province จังหวัด
    **@param  tdate  วันที่ตรวจสอบ
    **@param  planCode  แบบประกัน
    **@param  projNo   กลุ่มที่ตรวจ
    **@param inDetail   ต้องการรายละเอียดกรุ้ปเลือดหรือไม่
    **@return Vector ของรายการตรวจสุขภาพ
    **/

    public static Vector getMedicalList (String medSum, String age, 
                                         String province, String tdate, 
                                         String planCode,boolean inDetail, 
                                         int projNo)
    {
        age = degrade (planCode,age);
        return (getMedicalList (medSum, age, province, tdate, inDetail, projNo, planCode));
    }

    /** newFactorMedByProjectNo  หา factor ที่ใช้ในการตรวจสุขภาพของแต่ละกลุ่ม
    **@param payDate      วันที่ชำระเบี้ยหรือวันที่ตรวจสอบ
    **@param   projectNo  ตารางที่ใช้       
    **@return Vector - String [][] ของอายุ ทุนประกัน และเกณฑ์การตรวจ
    **/
		
    public static Vector newFactorMedByProjectNo(String payDate, int projNo)
	{
        Vector v = new Vector();
        final  String sum[][][] = { {{"0000050000", "0000500000"},
                                    },
                                    {{"0000000000", "0000600000"},
                                    },
                                    {{"0000000000", "0001000000"},
                                     {"0001000001", "0002500000"},
                                     {"0002500001", "0003000000"},
                                     {"0003000001", "0004000000"},
                                     {"0004000001", "0005000000"},
                                     {"0005000001", "0007000000"},
                                     {"0007000001", "0010000000"},
                                     {"0010000001", "0025000000"},
                                     {"0025000001", "9999999999"}
                                    },
                                    {{"0000000000", "0001000000"},
                                     {"0001000001", "0003000000"},
                                     {"0003000001", "0003500000"},
                                     {"0003500001", "0005000000"},
                                     {"0005000001", "0007000000"},
                                     {"0007000001", "0010000000"},
                                     {"0010000001", "0025000000"},
                                     {"0025000001", "9999999999"}
                                    },
                                    {{"0000000000", "0001500000"},
                                     {"0001500001", "0004000000"},
                                     {"0004000001", "0004500000"},
                                     {"0004500001", "0005500000"},
                                     {"0005500001", "0007000000"},
                                     {"0007000001", "0010000000"},
                                     {"0010000001", "0025000000"},
                                     {"0025000001", "9999999999"}
                                   },
                                   { {"0000050000", "0003000000"},
                                     {"0003000001", "0004000000"},
                                     {"0004000001", "0005000000"},
                                     {"0005000001", "0010000000"},
                                     {"0010000001", "0015000000"},
                                     {"0015000001", "9999999999"},
                                   },
				   { {"0000000000", "0001000000"},
                                     {"0001000001", "0001500000"},
                                     {"0001500001", "0003000000"},
                                     {"0003000001", "0003500000"},
                                     {"0003500001", "0005000000"},
                                     {"0005000001", "0005500000"},
                                     {"0005500001", "0007000000"},
                                     {"0007000001", "0010000000"},
                                     {"0010000001", "0025000000"},
                                     {"0025000001", "9999999999"}
                                    },
			    	    {{"0000000000", "0001500000"},
                                     {"0001500001", "0004000000"},
                                     {"0004000001", "0005500000"},
                                     {"0005500001", "0007500000"},
                                     {"0007500001", "0010000000"},
                                     {"0010000001", "0025000000"},
                                     {"0025000001", "9999999999"}},
				  };
        final String range[][][]  = new String [][][] {{{"99","99","99","99","99","00"},
                                                       },
                                                       {{"99","99","99","99","99","99","00"},
                                                       },
                                                       {{"99","99","99","99"},
                                                        {"99","99","99","00"},
                                                        {"99","99","00","02"},
                                                        {"00","99","00","02"},
                                                        {"00","00","00","02"},
                                                        {"00","00","02","02"},
                                                        {"00","01","02","02"},
                                                        {"00","02","02","02"},
                                                        {"00","03","03","03"},
                                                       },

                                                       {{"99","99","99","99"},
                                                        {"99","99","99","00"},
                                                        {"99","99","99","02"},
                                                        {"99","99","00","02"},
                                                        {"00","00","02","02"},
                                                        {"00","01","02","02"},
                                                        {"00","02","02","02"},
                                                        {"00","03","03","03"},
                                                       },


                                                       {{"99","99","99","99","99"},
                                                        {"99","99","99","99","00"},
                                                        {"99","99","99","00","02"},
                                                        {"99","99","00","00","02"},
                                                        {"00","00","02","02","02"},
                                                        {"00","01","02","02","02"},
                                                        {"00","02","02","02","02"},
                                                        {"00","03","03","03","03"},
                                                       },
                                                       {{"99","99","99"},
                                                        {"99","99","03"},
                                                        {"00","06","03"},
                                                        {"06","03","04"},
                                                        {"03","07","07"},
                                                        {"07","07","07"}
                                                       },
							{{"99","99","99","99","99"},
                                                        {"99","99","99","99","00"},
                                                        {"99","99","99","00","00"},
                                                        {"99","99","99","02","02"},
                                                        {"99","99","00","02","02"},
                                                        {"99","99","02","02","02"},
                                                        {"00","00","02","02","02"},
                                                        {"00","01","02","02","02"},
                                                        {"00","02","02","02","02"},
                                                        {"00","03","03","03","03"},
                                                       },
						       {{"99","99","99","99","99"},
                                                        {"99","99","99","99","00"},
                                                        {"99","99","99","00","06"},
                                                        {"99","99","06","06","06"},
                                                        {"00","01","06","06","06"},
                                                        {"00","06","06","06","06"},
                                                        {"00","07","07","07","07"}},

                                                  };
        final String rage[][][] = new String [][][] {
                                  {{"00","05"}, {"06","15"}, {"16","40"},{"41","50"},{"51","60"},{"61","70"}}, // use index 2
                                  {{"00","05"}, {"06","15"}, {"16","45"},{"46","50"},{"51","55"},{"56","60"}, {"61","99"}}, // use index 2
                                  {{"00","15"}, {"16","45"}, {"46","55"},{"56","99"}},
                                  {{"00","15"}, {"16","45"}, {"46","55"},{"56","99"}},
                                 //  {{"00","05"}, {"06","15"}, {"16","45"},{"46","50"},{"51","55"},{"56","60"}, {"61","65"},{"66","99"}},
                                  {{"00","15"}, {"16","45"}, {"46","50"},{"51","55"},{"56","99"}},
                                  {{"00","40"}, {"41","50"}, {"51","99"}},
                                  {{"00","15"}, {"16","45"}, {"46","55"},{"56","60"},{"61","99"}},
                                  {{"00","15"}, {"16","45"}, {"46","50"},{"51","55"},{"56","99"}},
                                    };




        v.add(sum[projNo]);
        v.add(range[projNo]);
        v.add(rage[projNo]);
		return(v);		
	}
    /** factorMedByProjectNo  หา factor ที่ใช้ในการตรวจสุขภาพของแต่ละกลุ่ม
     **@param payDate      วันที่ชำระเบี้ยหรือวันที่ตรวจสอบ
     **@param   projectNo  ตารางที่ใช้       
     **@return Vector - String [][] ของอายุ ทุนประกัน และเกณฑ์การตรวจ
     **/
    public static Vector factorMedByProjectNo(String payDate, int projNo)
    {
		if (M.cmps( payDate, MED_57_DATE) >= 0)
			return( newFactorMedByProjectNo(payDate, projNo));
        Vector v = new Vector();
        final  String sum[][][] = { {{"0000050000", "0000500000"},
                                     {"0000500001", "0000750000"},
                                     {"0000750001", "0001000000"},
                                     {"0001000001", "0001500000"},
                                     {"0001500001", "0002000000"}, // ******
                                     {"0002000001", "0003000000"},
                                     {"0003000001", "0005000000"},
                                     {"0005000001", "0010000000"},
                                     {"0010000001", "0015000000"},
                                     {"0015000001", "9999999999"}
                                    },
                                    {{"0000000000", "0000600000"},
                                     {"0000600001", "0001000000"},
                                     {"0001000001", "0001500000"},
                                     {"0001500001", "0002000000"},
                                     {"0002000001", "0003000000"},
                                     {"0003000001", "0006000000"},
                                     {"0006000001", "0010000000"},
                                     {"0010000001", "0015000000"},
                                     {"0015000001", "9999999999"}
                                    },
                                    {{"0000000000", "0000600000"},
                                     {"0000600001", "0001000000"},
                                     {"0001000001", "0001500000"},
                                     {"0001500001", "0002000000"},
                                     {"0002000001", "0002500000"},
                                     {"0002500001", "0003500000"},
                                     {"0003500001", "0006000000"},
                                     {"0006000001", "0010000000"},
                                     {"0010000001", "0015000000"},
                                     {"0015000001", "9999999999"}
                                    },
                                    {{"0000000000", "0000600000"},
                                     {"0000600001", "0001000000"},
                                     {"0001000001", "0001500000"},
                                     {"0001500001", "0002000000"},
                                     {"0002000001", "0002500000"},
                                     {"0002500001", "0004000000"},
                                     {"0004000001", "0006000000"},
                                     {"0006000001", "0010000000"},
                                     {"0010000001", "0015000000"},
                                     {"0015000001", "9999999999"}
                                    },
                                    {{"0000000000", "0000300000"},
                                     {"0000300001", "0000600000"},
                                     {"0000600001", "0001000000"},
                                     {"0001000001", "0001500000"},
                                     {"0001500001", "0002000000"},
                                     {"0002000001", "0002500000"},
                                     {"0002500001", "0004000000"},
                                     {"0004000001", "0006000000"},
                                     {"0006000001", "0010000000"},
                                     {"0010000001", "0015000000"},
                                     {"0015000001", "9999999999"}
                                   },
                                   { {"0000050000", "0003000000"},
                                     {"0003000001", "0004000000"},
                                     {"0004000001", "0005000000"},
                                     {"0005000001", "0010000000"},
                                     {"0010000001", "0015000000"},
                                     {"0015000001", "9999999999"},
                                   }
                        
                      };
    
        final String range[][][]  = new String [][][] {{{"99","99","99","99","99","00"},
                                                        {"99","99","99","99","01","01"},
                                                        {"99","99","99","99","01","01"},
                                                        {"00","99","99","99","02","02"},
                                                        {"00","99","99","99","02","02"},
                                                        {"00","00","00","00","02","02"},
                                                        {"00","00","00","06","03","04"},
                                                        {"55","00","06","03","04","88"},
                                                        {"55","55","03","07","07","88"},
                                                        {"55","55","07","07","07","88"}
                                                       },
                                                       {{"99","99","99","99","99","99","00"},
                                                        {"99","99","99","99","99","01","01"},
                                                        {"99","99","99","99","99","02","02"},
                                                        {"99","99","99","99","00","02","02"},
                                                        {"00","00","99","00","00","02","02"},
                                                        {"00","00","00","06","06","03","04"},
                                                        {"55","00","06","03","04","04","88"},
                                                        {"55","55","03","07","07","07","88"},
                                                        {"55","55","07","07","07","07","88"},
                                                       },
                                                       {{"99","99","99","99","99","99","00"},
                                                        {"99","99","99","99","99","01","01"},
                                                        {"99","99","99","99","99","02","02"},
                                                        {"99","99","99","99","99","02","02"},
                                                        {"00","99","99","99","00","02","02"},
                                                        {"00","00","99","00","00","02","02"},
                                                        {"00","00","00","06","06","03","04"},
                                                        {"55","00","06","03","04","04","88"},
                                                        {"55","55","03","07","07","07","88"},
                                                        {"55","55","07","07","07","07","88"},                
                                                       },
                                                       {{"99","99","99","99","99","99","00"},
                                                        {"99","99","99","99","99","01","01"},
                                                        {"99","99","99","99","99","02","02"},
                                                        {"99","99","99","99","99","02","02"},
                                                        {"00","99","99","99","00","02","02"},
                                                        {"00","00","99","00","00","02","02"},
                                                        {"00","00","00","06","06","03","04"},
                                                        {"55","00","06","03","04","04","88"},
                                                        {"55","55","03","07","07","07","88"},
                                                        {"55","55","07","07","07","07","88"},
                                                       },
                                                       {{"99","99","99","99","99","99","99","00"},
                                                        {"99","99","99","99","99","99","00","00"},
                                                        {"99","99","99","99","99","01","01","01"},
                                                        {"99","99","99","99","99","02","02","02"},
                                                        {"99","99","99","99","99","02","02","02"},
                                                        {"00","99","99","99","00","02","02","02"},
                                                        {"00","00","99","00","00","02","02","02"},
                                                        {"00","00","00","06","06","03","04","04"},
                                                        {"55","00","06","03","04","04","88","88"},
                                                        {"55","55","03","07","07","07","88","88"},
                                                        {"55","55","07","07","07","07","88","88"},
                                                       },
                                                       {{"99","99","99"},
                                                        {"99","99","03"},
                                                        {"00","06","03"}, 
                                                        {"06","03","04"},
                                                        {"03","07","07"}, 
                                                        {"07","07","07"} 
                                                     }
                                                  };
                            


        final String rage[][][] = new String [][][] {
                                  {{"00","05"}, {"06","15"}, {"16","40"},{"41","50"},{"51","60"},{"61","70"}},
                                  {{"00","05"}, {"06","15"}, {"16","45"},{"46","50"},{"51","55"},{"56","60"}, {"61","99"}}, 
                                  {{"00","05"}, {"06","15"}, {"16","45"},{"46","50"},{"51","55"},{"56","60"}, {"61","99"}},
                                  {{"00","05"}, {"06","15"}, {"16","45"},{"46","50"},{"51","55"},{"56","60"}, {"61","99"}}, 
                                  {{"00","05"}, {"06","15"}, {"16","45"},{"46","50"},{"51","55"},{"56","60"}, {"61","65"},{"66","99"}},                                  {{"00","40"}, {"41","50"}, {"51","99"}}
                                    };
                
        v.add(sum[projNo]);
        v.add(range[projNo]);
        v.add(rage[projNo]);
        return(v);
    }
    /**getNewMedical   รายการที่ต้องตรวจสุขภาพ ตามอายุและทุนประกัน
    **@param Insure_sum ทุนตรวจสุขภาพ
    **@param age อายุ
    **@param payDate      วันที่ชำระเบี้ยหรือวันที่ตรวจสอบ
    **@param   projNo  ตารางที่ใช้       
    **@return int  code ที่กำหนดในตารางตรวจสุขภาพในแต่ละprojNo
    **/
    public static int  getNewMedical(String Insure_sum, String age, 
                                     String payDate, int projNo)
    {
           // code0152={ "01","47","48","51","14","18","15","35","36","13","03","44","28","07","34","42","04","23","27","26","49"};
	System.out.println("getNewMedical - "+ age + " "+Insure_sum);
        if (M.ctoi(age) > 80 || M.cmps(Insure_sum, "0") <= 0)
            return(99);
        System.out.println("BF PROJECT = " + projNo+ " "+payDate);
        projNo = getMedTable(payDate, projNo);
        System.out.println("PROJECT = " + projNo+ " "+payDate);
        Vector v = factorMedByProjectNo(payDate, projNo);
        System.out.println("V SIZE = " + v.size());
        
        final String sum[][] =  (String[][])v.elementAt(0);
        final String range[][]  =(String[][])v.elementAt(1);
        final String rage[][] = (String[][])v.elementAt(2);
        System.out.println(" Check Sum");
        int i,j;
        for (i=0; i<=sum.length-1; i++)
        {
            if (M.cmps( Insure_sum, sum[i][0] ) >= 0 &&
                M.cmps( Insure_sum, sum[i][1] ) <= 0)
                break;
        }
        System.out.println(" Check Age" + age);
        for (j=0; j<=rage.length-1; j++)
        {
             if (M.cmps( age, rage[j][0] ) >= 0 &&
                 M.cmps(  age, rage[j][1] ) <= 0)
                 break;
         }
         System.out.println("zxi="+i +" xj="+j + " Red "+ isRedLevel+ " Black - "+ isBlacklist+ " "+ Insure_sum);
         if (j > rage.length-1 || i > sum.length-1)
		return(99);
	else {
		if ( isRedLevel || isBlacklist)
		{	    
			if ( (M.cmps( Insure_sum, "2500000") <= 0 && M.cmps( age, "46") >=0) ||
		     	     (( M.cmps( Insure_sum,"2500001")>= 0 && M.cmps( Insure_sum, "3000000") <=0 ) && M.cmps( age, "45") <= 0) ||
		             (( M.cmps( Insure_sum,"3000001")>= 0 && M.cmps( Insure_sum, "4000000") <=0 ) && M.cmps( age, "16") >=0 && M.cmps( age,"45")<=0) ) 		
			return(0);
		}
        	return( M.ctoi(range[i][j]));
	    }		
    }
    /** getCLMedical   รายการที่ต้องตรวจสุขภาพของแบบประกันของCredit Life  ตามอายุและทุนประกัน
    **@param planCode   แบบประกัน
    **@param Insure_sum ทุนตรวจสุขภาพ
    **@param age อายุ
    **@param payDate      วันที่ชำระเบี้ยหรือวันที่ตรวจสอบ
    **@param   projNo  ตารางที่ใช้       
    **@return int  code ที่กำหนดในตารางตรวจสุขภาพในแต่ละprojNo
    **/
    public static int  getCLMedical(String planCode, String Insure_sum, 
                                    String age, String payDate, int projNo)
    {
		System.out.println("GetCLMedical -- " + planCode );	
		if (PlanType.isTLPNonMRTA( planCode))
		{
        	int x = UWMedicalCondition.getTLPNonMRTAMedical(planCode, Insure_sum, age, payDate, projNo);
			return(x);
		}
        /*else if ( PlanType.isBankMLTA( planCode))
		{
            int x = MedicalCondition.getMLTAMedical(planCode, Insure_sum, age, payDate, projNo);
			return(x);
		} */

		String bankCode = utility.underwrite.BankAssure.bankCodeFromPlan( planCode);
		if ( M.cmps( payDate, "25570501") >=0)
		{
			if ( bankCode != null && ( bankCode.compareTo(utility.underwrite.BankAssure.BAY)==0  ||
									   (bankCode.compareTo(utility.underwrite.BankAssure.ICBC)==0 && M.cmps( payDate, ICBC_CL_MED) >=0)))
			{
				if ( M.cmps( payDate, BAY_CL_MED) < 0)	
				{
					int cage = M.ctoi(age);
    	    		if (M.cmps(Insure_sum, "5000000") <= 0 )
	        	        return(99);
    	        	if (cage <= 55  &&  M.cmps( Insure_sum, "7500000") <= 0 )
        	            return(99);
					if ( (cage >= 20 && cage <= 45) && ( M.cmps( Insure_sum, "7500001") >= 0 && M.cmps( Insure_sum, "10000000") <= 0))
					   return(99);
				}
				else
				{
					System.out.println( "CAGE = "+age+ " "+ Insure_sum);
					int cage = M.ctoi(age);
    	    		if (M.cmps(Insure_sum, "5000000") <= 0 )
	        	        return(99);
    	        	if (cage <= 55  &&  M.cmps( Insure_sum, "10000000") <= 0 )
        	            return(99);
					
				}
			}
			else
			{
				System.out.println("MED GOV - "+  PlanType.isGOVBankMed(planCode) + " "+ Insure_sum);
				if ( PlanType.isGOVBankMed(planCode))
				{
					if ( M.cmps( Insure_sum, "5000000")<=0)
					   return(99);
				} 
				else if ( PlanType.isCOOPMed(planCode))
				{
					if ( M.cmps( Insure_sum, "3000000") <=0)
						return(99);
				}
				else 
				{
					int cage = M.ctoi(age);
        			if (cage > 60 || M.cmps(Insure_sum, "0") <= 0 || M.cmps( Insure_sum, "5000000") <= 0 )
            	    	return(99);
	           	 	if (cage <= 55  &&  M.cmps( Insure_sum, "7500000") <= 0 )
    	                return(99);
					if ( (cage >= 20 && cage <= 45) && ( M.cmps( Insure_sum, "7500001") >= 0 && M.cmps( Insure_sum, "9000000") <= 0))
				   		return(99);
				}
			}
		}
		else
		{
			int cage = M.ctoi(age);
           	if (cage > 60 || M.cmps(Insure_sum, "0") <= 0 || M.cmps( Insure_sum, "5000000") <= 0 )
                return(99);
            if (cage <= 55  &&  M.cmps( Insure_sum, "7000000") <= 0 )
               	return(99);
		}
System.out.println("ABC ProjectNo = "+ projNo);
        projNo = getMedTable(payDate, projNo);

        String sum[][] = null;
		String range[][] = null;
		String rage[][] = null;
		if (bankCode == null)
		{
			System.out.println("BANKCODE = NULL ");
			return(99);
		}
        System.out.println("PROJECT = " + projNo+ " "+payDate+ " "+ bankCode);
		if (bankCode.compareTo(utility.underwrite.BankAssure.ICBC)==0)
		{
			sum = new String [][] { {"00000500001","0007500000"},
								    {"00007500001","0010000000"},
                                    {"00010000001","0015000000"},
                                    {"00015000001","9999999999"},
								  };	
		                                
        	range = new String [][] {{"00","00","00","00","04"},
        									{"01","02","03","03","04"},
                                            {"03","03","05","05","05"},
                                            {"05","05","05","05","05"}
                                           };
         	rage= new String [][] {{"20","40"}, {"41","45"}, {"46","50"},
                                            {"51","55"},{"56","60"}};
		}
		else
		{
			System.out.println("PAYDATE - "+ payDate);
			if ( M.cmps( payDate, BAY_CL_MED) < 0)
			{
				sum = new String [][] { {"00000500001","0007500000"},
                                    {"00007500001","0009000000"},
                                    {"00009000001","0010000000"},
                                    {"00010000001","0015000000"},
                                    {"00015000001","9999999999"},
                                  };

            	range = new String [][] {{"00","00","00","00","04"},
                                         {"00","00","03","03","04"},
                                         {"01","02","03","03","04"},
                                         {"03","03","05","05","05"},
                                         {"05","05","05","05","05"}
                                           };
           		rage = new String [][] {{"20","40"}, {"41","45"}, {"46","50"},
                                        {"51","55"},{"56","60"}};
			}
			else
			{
				// UNW1-3/05
				System.out.println("GOV -- + "+ ( PlanType.isGOVBankMed(planCode) || PlanType.isCOOPMed(planCode)));
				if ( PlanType.isGOVBankMed(planCode) || PlanType.isCOOPMed(planCode))
				{
					String minSum = "0005000001";
					if (PlanType.isCOOPMed(planCode))
						minSum = "0003000001";
					sum = new String [][] { {minSum,"0010000000"},
									{"00010000001","0015000000"},
									{"00015000001","9999999999"},
									  };

					range = new String [][] {{"01","03","04","04","05","06"},
								             {"04","04","06","06","06","06"},
								             {"06","06","06","06","06","07"}
									   };
					String range1[][] = new String [][] {{"18","40"}, {"41","45"}, {"46","50"},{"51","55"},{"56","60"},{"61","70"}}; //  GOV
					String range2[][] = new String [][] {{"18","40"}, {"41","45"}, {"46","50"},{"51","55"},{"56","60"},{"61","70"}}; //  BAAC &  COOP
				    rage = range1;
					if ( PlanType.isCOOPMed(planCode))
						rage = range2;
				    System.out.println(" GOV Finish ");		
				}
				else
				{
					sum = new String [][] { {"00005000001","0010000000"},
                    	                	{"00010000001","0015000000"},
                        	            	{"00015000001","9999999999"},
                            	      	  };

                	range = new String [][] {{"00","00","00","00","04"},
                                         	 {"03","03","05","05","05"},
                                         	 {"05","05","05","05","05"}
                                           };
                	rage = new String [][]   {{"20","40"}, {"41","45"}, {"46","50"},
                                        	  {"51","55"},{"56","60"}};
				}
			}
		}



        System.out.println(" Check Sum "+ Insure_sum);
        int i,j;
        for (i=0; i<=sum.length; i++)
        {
            if (M.cmps( Insure_sum, sum[i][0] ) >= 0 &&
                M.cmps( Insure_sum, sum[i][1] ) <= 0)
                break;
        }
        System.out.println(" Check Age "+ range.length);
        for (j=0; j<rage.length; j++)
        {
            if (M.cmps( age, rage[j][0] ) >= 0 &&
                M.cmps(  age, rage[j][1] ) <= 0)
                break;
        }
        System.out.println("xi="+i +" xj="+j);
        if (j >= rage.length || i > sum.length)
             return(99);
        return( M.ctoi(range[i][j]));
    }

	public static int  getMLTAMedical(String planCode, String Insure_sum, String age, String payDate, int projNo)
    {
        if (M.cmps(Insure_sum, "0") <= 0 || M.cmps( Insure_sum, "5000000") <=0)
                    return(99);

        String sum[][] = null;
        String range[][] = null;
        String rage[][] = null;
        //         UNW1-3/05 
        sum = new String [][] { {"00005000001","0007500000"},
                                {"00007500001","0010000000"},
                                {"00010000001","0015000000"},
                                {"00015000001","9999999999"},
                              };
        System.out.println("payDate : "+payDate);
        if(M.cmps(payDate, MLTA_MED_DATE)>=0)   
        	range = new String [][] {{"99","99","99","99","04"},
                    {"99","99","99","99","05"},
                    {"03","03","05","05","06"},
                    {"05","05","05","05","06"}};
        else
        	range = new String [][] {{"01","02","03","03","04"},
        			{"03","03","05","05","05"},
        			{"05","05","05","05","05"}};
        
        rage = new String [][] {{"20","40"}, {"41","45"}, {"46","50"},
                                {"51","55"},{"56","60"}, {"61","65"}};
		
		System.out.println(" Check Sum");
		int i, j;
        for (i=0; i<=sum.length; i++)
        {
            if (M.cmps( Insure_sum, sum[i][0] ) >= 0 &&
                M.cmps( Insure_sum, sum[i][1] ) <= 0)
                break;
        }
        System.out.println(" Check Age");
        for (j=0; j<=range.length; j++)
        {
            if (M.cmps( age, rage[j][0] ) >= 0 &&
                M.cmps(  age, rage[j][1] ) <= 0)
                break;
        }
        System.out.println("xi="+i +" xj="+j);
        if (j > rage.length || i > sum.length)
             return(99);
        return( M.ctoi(range[i][j]));
	}
	public static String tlp_MRTAList[][]= {
            {"01","47","18", "24", "08", "15", "13", "42", "28", "14", "35", "36", "34", "03","02", "21","27","44"},
            {"01","47","18", "24", "08", "15", "13", "42", "28", "14", "35", "36", "34", "03","02", "21","27","44","48"},
            {"01","47","18", "24", "08", "15", "13", "42", "28", "14", "35", "36", "34", "03","02", "21","27","44","49"},
            {"01","47","18", "24", "08", "15", "13", "42", "28", "14", "35", "36", "34", "03","02", "21","27","44","48","51"},
            {"01","47","18", "24", "08", "15", "13", "42", "28", "14", "35", "36", "34", "03","02", "21","27","44","49","51"},
            {"01","47","18", "24", "08", "15", "13", "42", "28", "14", "35", "36", "34", "03","02", "21","27","44","49","51","11"},
    };

	static int  getTLPMRTAMedical(String planCode, String Insure_sum, String age, String payDate, int projNo)
    {
		if ( M.cmps( Insure_sum, "5000000") <=0)
            return(99);

        String sum[][] = null;
        String range[][] = null;
        String rage[][] = null;
        System.out.println("TLP MRTA  = " + projNo+ " "+payDate);
        // TLP 01/10/2559
        sum = new String [][] { {"00005000001","0007500000"},
                                {"00007500001","0010000000"},
                                {"00010000001","0015000000"},
                                {"00015000001","9999999999"},
                              };
        range = new String [][] {{"99","99","99","01"},
                                 {"99","99","99","06"},
                                 {"03","03","06","07"},
                                 {"06","06","06","07"}
                                };
        rage = new String [][] {{"00","40"}, {"41","45"}, {"46","60"},{"61","65"}};

        System.out.println(" Check Sum");
        int i, j;
        for (i=0; i<=sum.length; i++)
        {
            if (M.cmps( Insure_sum, sum[i][0] ) >= 0 &&
                M.cmps( Insure_sum, sum[i][1] ) <= 0)
                break;
        }
        System.out.println(" Check Age");
        for (j=0; j<=range.length; j++)
        {
            if (M.cmps( age, rage[j][0] ) >= 0 &&
                M.cmps(  age, rage[j][1] ) <= 0)
                break;
        }
        System.out.println("xi="+i +" xj="+j);
        if (j > rage.length || i > sum.length)
             return(99);
        return( M.ctoi(range[i][j]));

	}
    public static String tlp_NonMRTAList[][]= {
            {"01","47","18", "24", "08", "15", "44", "13", "42", "28", "14", "35", "36", "34", "03","41","02","40","16","27","04","26"},
            {"01","47","18", "24", "08", "15", "44", "13", "42", "28", "14", "35", "36", "34", "03","41","02","40","16","27","04","26","48"},
            {"01","47","18", "24", "08", "15", "44", "13", "42", "28", "14", "35", "36", "34", "03","41","02","40","16","27","04","26","49"},
            {"01","47","18", "24", "08", "15", "44", "13", "42", "28", "14", "35", "36", "34", "03","41","02","40","16","27","04","26","48","51"},
            {"01","47","18", "24", "08", "15", "44", "13", "42", "28", "14", "35", "36", "34", "03","41","02","40","16","27","04","26","49","51"},
            {"01","47","18", "24", "08", "15", "44", "13", "42", "28", "14", "35", "36", "34", "03","41","02","40","16","27","04","26","49","51","11"},
    };
    
    static int  getTLPNonMRTAMedical(String planCode, String Insure_sum, String age, String payDate, int projNo)
    {
        if (M.cmps( Insure_sum, "5000000") <=0)
            return(99);

        String sum[][] = null;
        String range[][] = null;
        String rage[][] = null;
        System.out.println("TLP Non MRTA  = " + projNo+ " "+payDate);
        //         UNW1-3/05  
        sum = new String [][] { {"00005000001","0007500000"},
                                {"00007500001","0010000000"},
                                {"00010000001","9999999999"},
                              };
        range = new String [][] {{"99","99","01"},
                                 {"04","05","05"},
                                 {"05","06","06"},
                                };
        rage = new String [][] {{"00","35"}, {"36","60"},{"61","65"}};

        System.out.println(" Check Sum");
        int i, j;
        for (i=0; i<=sum.length; i++)
        {
            if (M.cmps( Insure_sum, sum[i][0] ) >= 0 &&
                M.cmps( Insure_sum, sum[i][1] ) <= 0)
                break;
        }
        System.out.println(" Check Age");
        for (j=0; j<=range.length; j++)
        {
            if (M.cmps( age, rage[j][0] ) >= 0 &&
                M.cmps(  age, rage[j][1] ) <= 0)
                break;
        }
        System.out.println("xi="+i +" xj="+j);
        if (j > rage.length || i > sum.length)
             return(99);
        return( M.ctoi(range[i][j]));
    }

    public static  String tlist[][]={
                {"01","47","48","14","18","15","35","36","13","03","44","28","07","34","42","04","24","27","26"},
                {"01","47","48","14","18","15","35","36","13","03","44","28","07","34","42","04","24","27","26","51"},
                {"01","14","18","15","35","36","13","03","44","28","07","34","42","04","24","27","26"},
                {"01","47","14","18","15","35","36","13","03","44","28","07","34","42","04","24","27","26"},
                {"01","47","14","18","15","35","36","13","03","44","28","07","34","42","04","24","27","26","51","49"},
        };
    public static  String bancaList[][]={
     		{"01","48","14", "18", "15","24"}, 
                {"01","47","49","14","18","15","35","36","13","03","44","28","07","34","42","04","24","27","26"},
        };
    public static  String clList[][]= {
            {"01","47","18", "24", "08", "15", "13", "42", "35", "36", "34", "03", "41", "02", "21", "27"},
            {"01","47","18", "24", "08", "15", "13", "42", "28", "24", "35", "36", "34", "03","41","02","21","27","44","48"},
            {"01","47","18", "24", "08", "15", "13", "42", "28", "24", "35", "36", "34", "03","41","02","21","27","44","48","51"},
            {"01","47","18", "24", "08", "15", "13", "42", "28", "24", "35", "36", "34", "03","41","02","21","27","44","49","51"},
    };
	public static  String med57 [][] = 
	{
     		{"01","48","14", "18", "15","24"}, 
            {"01","47","49", "14", "18", "15", "35", "36", "13", "03", "44", "28", "07", "34","42","04","24","27"},
						
	};
    /** getList    รายการที่ต้องตรวจสุขภาพตาม Code
   **@param payDate  วันที่ชำระเบี้ยประกันหรือวันที่ตรวจ
   **@param  n          ค่าที่ได้จาก method getNewMedical
   **@return String[] รายการที่ต้องตรวจ
   **/
    public static  String [] getList(String payDate, int n)
    {
            // this method for unsequence
            if (M.cmps(payDate, MED_57_DATE) >= 0)
			{
                if (n < 2)
                {
                        String [] t  = {"01","48"};
                        String [] s = new String[n+1];
                        for (int i=0;i<n+1; i++)
                                s[i] = t[i];
                        return(s);
                }
                else
                {
                    System.out.println("getList n="+n);
                    System.out.println("med57[2][0]="+ med57[0][2]);
                    System.out.println("med57[2][0]="+ med57[1][0]);
                    System.out.println("med57[0]="+ med57[0]);
                    System.out.println("med57[n-2]="+med57[n-2] );
					return( med57[n-2]);
                
                }
			    
			} 
			else
			{
           	 	if (n < 3)
                {
                        String [] t  = {"01","47","48"};
                        String [] s = new String[n+1];
                        for (int i=0;i<n+1; i++)
                                s[i] = t[i];
                        return(s);
                }
                else
                    return(tlist[n-3]); /*     3: PE MicroUA EKG BLOOD
                                               4: PE MicroUA EKG BLOOD CXR
                                           5: PE BLOOD
                                           6: PE MicroUA BLOOD
                                           7: PE MicroUA BLOOD CXR EST */
			}
    
    }
    /** getListBanca    รายการที่ต้องตรวจสุขภาพของช่องทางตาม Code 
    **@param payDate  วันที่ชำระเบี้ยประกันหรือวันที่ตรวจ
    **@param  n          ค่าที่ได้จาก method getNewMedical
    **@return String[] รายการที่ต้องตรวจ
    **/

    public static  String [] getListBanca(String payDate, int n)
    {
		System.out.println("getListBanca - "+ n);
	        if (n < 3)
                {
                        // String [] t  = {"01","47","48"};
                        String [] t  = {"01","48"};
                        String [] s = new String[n+1];
                        for (int i=0;i<n+1; i++)
                                s[i] = t[i];
                        return(s);
                }
                else
                    return(bancaList[n-6]); /*     3: PE MicroUA EKG BLOOD
                                               4: PE MicroUA EKG BLOOD CXR
                                           5: PE BLOOD
                                           6: PE MicroUA BLOOD
                                           7: PE MicroUA BLOOD CXR EST */

	}
    /** 
    *
    * getCLList    รายการที่ต้องตรวจสุขภาพตาม Code
    **@param  n          ค่าที่ได้จาก method getNewMedical
    **@return String[] รายการที่ต้องตรวจ
    **/
    public static String [] getCLList(int n)
        {
              // this method for unsequence
				System.out.println(" GetClList - "+n);
                if (n < 2)
                {
                        String [] t  = {"01","47"};
                        String [] s = new String[n+1];
                        for (int i=0;i<n+1; i++)
                                s[i] = t[i];
                        return(s);
                }
                else
                        return( clList[n-2]); /* 3: PE MU BLOOD1
                                                4: PE MU BLOOD2 EKG
                                                5: PE MU BLOOD2 EKG
                                                6: PE MU BLOOD2 EKG CXR
                                                7: PE MU BLOOD2 EST CXR */

        }
    public static String govList[][]= {
            {"01","47","18", "24", "08", "15", "13", "42","14", "35", "36", "34", "03", "41", "02", "21", "27"},
            {"01","47","18", "24", "08", "15", "44","13", "42","00", "14", "35", "36", "34", "03", "41", "02", "21", "27","48"},
            {"01","47","18", "24", "08", "15", "44","13", "42","00", "14", "35", "36", "34", "03", "41", "02", "21", "27","48","51"},
            {"01","47","18", "24", "08", "15", "44","13", "42","00", "14", "35", "36", "34", "03", "41", "02", "21", "27","49","51"},
            {"01","47","18", "24", "08", "15", "44","13", "42","00", "14", "35", "36", "34", "03", "41", "02", "21", "27","49","51","11"}};
    public static String [] getGOVList(int n)
        {
              // this method for unsequence
				System.out.println(" Get GOV List - "+n);
                if (n < 2)
                {
                        String [] t  = {"01","47"};
                        String [] s = new String[n+1];
                        for (int i=0;i<n+1; i++)
                                s[i] = t[i];
                        return(s);
                }
                else
                        return( govList[n-3]); /* 3: PE MU BLOOD1
                                                4: PE MU BLOOD2 EKG
                                                5: PE MU BLOOD2 EKG CXR
                                                6: PE MU BLOOD2 EST CXR
                                                7: PE MU BLOOD2 EST CXR CEA*/

        }
    public static String [] getTLPMRTAList(int n)
        {
               //  method for unsequence
				System.out.println(" Get MRTA List - "+n);
                if (n < 2)
                {
                        String [] t  = {"01","47"};
                        String [] s = new String[n+1];
                        for (int i=0;i<n+1; i++)
                                s[i] = t[i];
                        return(s);
                }
                else
                        return( tlp_MRTAList[n-2]); /*
                                                3: PE MU BLOOD2 EKG
                                                4: PE MU BLOOD2 EKG CXR
                                                5: PE MU BLOOD2 EST
                                                6: PE MU BLOOD2 EST CXR
                                                7: PE MU BLOOD2 EST CXR CEA*/

        }
    public static String [] getTLPNonMRTAList(int n)
        {
                // this method for unsequenc
				System.out.println(" GetNonMRTA List - "+n);
                if (n < 2)
                {
                        String [] t  = {"01","47"};
                        String [] s = new String[n+1];
                        for (int i=0;i<n+1; i++)
                                s[i] = t[i];
                        return(s);
                }
                else
                        return( tlp_NonMRTAList[n-1]); /*
                                                3: PE MU BLOOD2 EKG
                                                4: PE MU BLOOD2 EKG CXR
                                                5: PE MU BLOOD2 EST
                                                6: PE MU BLOOD2 EST CXR
                                                7: PE MU BLOOD2 EST CXR CEA*/

        }

		

    /** changeDetail   รายการที่ต้องตรวจสุขภาพตาม Code
      **@param date  วันที่ชำระเบี้ยประกันหรือวันที่ตรวจ
      **@param  n          ค่าที่ได้จาก method getNewMedical
      **@param  showGroup    แสดงกรุ้ปเลือดหรือไม่
      **@param projNo         กลุ่มตารางตรวจ
      **@return Vector of String[] รายการที่ต้องตรวจ testCode testName testRate
      **/
    public static Vector changeDetail(String date, int n, boolean showGroup, int projNo)
    {
        Vector v = new Vector();
        if (n==55 || n==88 || n==99)
            return(v);
        System.out.println("test No === " + n+  " "+projNo);
	    projNo = getMedTable(date, projNo);
		String [] dl = null;
		if ( projNo <= 3 || projNo == 6 || projNo == 4 ) // 6:TOP_UP_PLUS 4: only BAY since 01/04/2559 
	        dl = getList(date,n);
		else
		{
			dl = getListBanca(date, n);
			System.out.println("dl banc - "+dl);
		}	
        Mrecord tps = Masic.opens("testpcs0550@commontable");
        int j = 0;
        int bloodRate = 0;
        for (int i=0; i<dl.length; i++)
        {
            System.out.println("testCode=" + dl[i]+ " i - "+ i+ " j = "+ j+ " "+showGroup+ " dl length - "+  dl.length);
            if (dl[i].compareTo("14")!= 0 && j==0)
            {
                if (tps.equal(dl[i]))
                {
                    if (showGroup)
                        v.add(new String[]{tps.get("testNo"), tps.get("testName"), tps.get("rate")});
                    else
                        v.add(tps.get("testName"));
                }
                else;
            }
            else
            {
                j++;
                if (tps.equal(dl[i]))
                {
                    bloodRate = bloodRate+M.ctoi(tps.get("rate"));
					System.out.println("test fee - "+ tps.get("rate"));
					if (M.cmps( date, MED_57_DATE) < 0 || (projNo > 3 && projNo != 6 && projNo != 4 && projNo != 7))  // 6 is TOPUPS, 4 is BAY
					{
                    	if ( j==16)
                    	{
                        	if (showGroup)
                            	v.add(new String[] {BLOOD,BLOOD_NAME, M.itoc(bloodRate)});
                        	else
							{
                            	v.add(BLOOD_NAME);
							}
	                        j = 0; // other test
						}
                    }
					else
					{
						if (j == 15 ||( dl.length== 6 && j==4) )
						{
						    if (showGroup)
							{
								if ( j == 15)
	                                v.add(new String[] {BLOOD_57_2,BLOOD_NAME57_2, M.itoc(bloodRate)});
								else
	                                v.add(new String[] {BLOOD_57_1,BLOOD_NAME57_1, M.itoc(bloodRate)});
							}
                            else
							{
                              //  v.add(BLOOD_NAME57_2);
                                v.add(tps.get("testName"));
							    System.out.println(" Show group false ");
							}
                            j = 0; // other test

						}
						else
							if (!showGroup) 
								v.add(tps.get("testName"));
					}
                }
            }
        }
        tps.close();
        return(v);
    }
    /** changeCLDetail   รายการที่ต้องตรวจสุขภาพตาม Code
     **@param  n                 ค่าที่ได้จาก method getNewMedical
     **@param  showGroup    แสดงกรุ้ปเลือดหรือไม่
     **@param age               อายุ
     **@return Vector of String[] รายการที่ต้องตรวจ testCode testName testRate
     **/
    public static Vector changeCLDetail(int n, boolean showGroup, int age)
        {
                Vector v = new Vector();
       			if (n==99)
           			 return(v);
                System.out.println("test No === " + n + " showGroup - "+ showGroup);
                String[] dl = getCLList(n);
                Mrecord tps = Masic.opens("testpcs0550@commontable");
                int j = 0;
                int bloodRate = 0;
                for (int i=0; i<dl.length; i++)
                {
						tps.equal(dl[i]);
                        System.out.println("testCode=" + dl[i]+ " "+tps.get("testName"));
                        if (dl[i].compareTo("18")!= 0 && j==0)
                        {
                                if (tps.equal(dl[i]))
                                {
                                        if (showGroup)
                                                v.add(new String[]{tps.get("testNo"), tps.get("testName"), tps.get("rate")});
                                        else
                                                v.add(tps.get("testName"));
                                }
                                else;
                        }
                        else
                        {
                                j++;
                                if (tps.equal(dl[i]))
                                {
                                        bloodRate += bloodRate+M.ctoi(tps.get("rate"));
                    					if (n == 2 && j == 14 && age >=41 && age <= 45)
                    					{
                                        	if (showGroup)
                                               v.add(new String[] {BLOOD_CL_1 ,BLOOD_CL_1_NAME, M.itoc(bloodRate)});
                                            else
                                               v.add(BLOOD_CL_1_NAME);
                                            j = 0; // other test
                    					}
			                  			else if (j == 17)
                    					{
                                     		if (showGroup)
		                                        v.add(new String[] {BLOOD_CL_2 ,BLOOD_CL_2_NAME, M.itoc(bloodRate)});
        		                             else
                		            			v.add(BLOOD_CL_2_NAME);
                        	             	j = 0; // other test
                    					}
                                }
                        }
                }
                tps.close();
                return(v);
        }
        //     {"01","47","18", "24", "08", "15", "13", "42","14", "35", "36", "34", "03", "41", "02", "21", "27"},
    public static Vector changeGOVDetail(int n, boolean showGroup, int age)
        {
                Vector v = new Vector();
       			if (n==99)
           			 return(v);
                System.out.println("GOV test No === " + n);
                String[] dl = getGOVList(n);
                Mrecord tps = Masic.opens("testpcs0550@commontable");
                int j = 0;
                int bloodRate = 0;
                for (int i=0; i<dl.length; i++)
                {
                	tps.equal(dl[i]);
                        System.out.println("testCode=" + dl[i]+ " "+tps.get("testName"));
                        if (dl[i].compareTo("18")!= 0 && j==0)
                        {
                                if (tps.equal(dl[i]))
                                {
                                        if (showGroup)
                                                v.add(new String[]{tps.get("testNo"), tps.get("testName"), tps.get("rate")});
                                        else
                                                v.add(tps.get("testName"));
                                }
                                else;
                        }
                        else
                        {
                                j++;
                                if (tps.equal(dl[i]))
                                {
                                        bloodRate += bloodRate+M.ctoi(tps.get("rate"));
                    					if (n == 3 && j == 15 && age >=41 && age <= 45)
                    					{
                                        	if (showGroup)
                                               v.add(new String[] {BLOOD_CL_1 ,BLOOD_CL_1_NAME, M.itoc(bloodRate)});
                                            else
                                               v.add(BLOOD_CL_1_NAME);
                                            j = 0; // other test
                    					}
			                  			else if (j == 17)
                    					{
                                     		if (showGroup)
		                                        v.add(new String[] {BLOOD_CL_2 ,BLOOD_CL_2_NAME, M.itoc(bloodRate)});
        		                             else
                		            			v.add(BLOOD_CL_2_NAME);
                        	             	j = 0; // other test
                    					}
                                }
                        }
                }
                tps.close();
                return(v);
        }
    public static Vector changeTLPMRTADetail(int n, boolean showGroup, int age)
        {
        		Vector v = new Vector();
				System.out.println("TLPMRTA n = "+n);
	        	if (n==99)
    	        	return(v);
	            System.out.println("test No === " + n);
    	        String[] dl = getTLPMRTAList(n);
        	    Mrecord tps = Masic.opens("testpcs0550@commontable");
                int j = 0;
                int bloodRate = 0;
                for (int i=0; i<dl.length; i++)
                {
                        System.out.println("testCode=" + dl[i]);
                        if (dl[i].compareTo("18")!= 0 && j==0)
                        {
                                if (tps.equal(dl[i]))
                                {
                                        if (showGroup) 
                                                v.add(new String[]{tps.get("testNo"), tps.get("testName"), tps.get("rate")});
                                        else
                                                v.add(tps.get("testName"));
                                }
                                else;
                        }
                        else
                        {
                                j++;
                                if (tps.equal(dl[i]))
                                {
                                        bloodRate += bloodRate+M.ctoi(tps.get("rate"));
                                        if (n == 2 && j == 14 && age >=41 && age <= 45)
                                        {
											
                                        }
                                        else if (j == 16) // sum of test blood
                                        {
                                            if (showGroup)
                                                v.add(new String[] {BLOOD_CL_2 ,BLOOD_CL_2_NAME, M.itoc(bloodRate)});
                                             else
                                                v.add(BLOOD_CL_2_NAME);
                                            j = 0; // other test
                                        }
                                }
                        }
                }
                tps.close();
                return(v);
        }
    public static Vector changeTLPNonMRTADetail(int n, boolean showGroup, int age)
        {
                Vector v = new Vector();
                if (n==99)
                    return(v);
                System.out.println("test No === " + n);
                String[] dl = getTLPNonMRTAList(n);
                Mrecord tps = Masic.opens("testpcs0550@commontable");
                int j = 0;
                int bloodRate = 0;
                for (int i=0; i<dl.length; i++)
                {
                        System.out.println("testCode=" + dl[i]);
                        if (dl[i].compareTo("18")!= 0 && j==0)
                        {
                                if (tps.equal(dl[i]))
                                {
                                        if (showGroup) 
                                                v.add(new String[]{tps.get("testNo"), tps.get("testName"), tps.get("rate")});
                                        else
                                                v.add(tps.get("testName"));
                                }
                                else;
                        }
                        else
                        {
                                j++;
                                if (tps.equal(dl[i]))
                                {
                                        bloodRate += bloodRate+M.ctoi(tps.get("rate"));
                                        if (n == 2 && j == 14 && age >=41 && age <= 45)
                                        {
                                 
                                        }
                                        else if (j == 20)
                                        {
                                            if (showGroup)                                                                                                                                                                          v.add(new String[] { BLOOD_TLP_NON_MRTA ,BLOOD_CL_2_NAME, M.itoc(bloodRate)});                                                                                                            else
                                                v.add(BLOOD_CL_2_NAME);
                                            j = 0; // other test
                                        }
                                }
                        }
                }
                tps.close();
                return(v);
        }


	/** getMedForInform รายการที่ต้องตรวจสุขภาพที่ต้องแสดงในหนังสือแจ้งดำเนินการ
     **@param medSum  ทุนตรวจสุขภาพ
     **@param age   อายุ
     **@param  province    จังหวัด
     **@param  tdate   วันที่ตรวจสอบ
     **@param planCode  แบบประกัน
     **@param inDetail   ต้องการรายละเอียดของกรุ้ปเลือดหรือไม่
     **@param  projNo    การใช้ตารางการตรวจสุขภาพ
     **@return Vector of String[] รายการที่ต้องตรวจ testCode testName testRate
     **/

    public static Vector getMedForInform( String medSum, String age, String province, String tdate, String planCode,boolean inDetail,int projNo)
    {
        String []code0550 ={"01","51","47","48","14","18","15","44","13","28","35","36","27","07","06","04","03","24",
                                "29","26","49"};
        Vector v = new Vector();
        String bankCode =   BankAssure.bankCodeFromPlan(planCode);
	    bankType = bankCode;
       /*  if (projNo == 3 && M.cmps( tdate,"25590401")>=0 && bankCode != null && bankCode.compareTo(BankAssure.BAY)==0)
            projNo = 4; */

        Mrecord tps = Masic.opens("testpcs0550@commontable");
        int x = 99;
        if (M.cmps( tdate, "25520101") < 0)
        {
        }
        else
        {
            if (!PlanType.isBankMRTA( planCode ) && !PlanType.isBankMLTA( planCode))
            {
				if ( bankCode != null )
					projNo =  getMedTable(tdate, projNo); 
                x = UWMedicalCondition.getNewMedical(medSum, age, tdate, projNo);
                v = changeDetail(tdate,x,true, projNo);
            }
            else
            {
				if ( PlanType.isTLPMRTA( planCode))
				{
               	 	x = UWMedicalCondition.getTLPMRTAMedical(planCode, medSum, age, tdate, projNo);
                	v = changeTLPMRTADetail(x,true,M.ctoi(age));
					
				}
				else if (PlanType.isTLPNonMRTA( planCode))
				{
               	 	x = UWMedicalCondition.getTLPNonMRTAMedical(planCode, medSum, age, tdate, projNo);
                	v = changeTLPNonMRTADetail(x,true,M.ctoi(age));
				}
				/* else if ( PlanType.isBankMLTA( planCode))
				{
               	 	x = MedicalCondition.getMLTAMedical(planCode, medSum, age, tdate, projNo);
                	v = changeCLDetail(x,true,M.ctoi(age));
				} */
				else
				{	
                	x = UWMedicalCondition.getCLMedical(planCode, medSum, age, tdate, projNo);
					System.out.println(" COOP getCLmedical "+ x);
                	System.out.println( "Check Plan is Gov Coop  - "+ ( PlanType.isGOVBankMed(planCode) || PlanType.isCOOPMed(planCode)));
					if ( PlanType.isGOVBankMed(planCode) || PlanType.isCOOPMed(planCode))
						return(changeGOVDetail(x,true,M.ctoi(age)));
					else
                		return(changeCLDetail(x,true,M.ctoi(age)));
				}
            }
            
        }
        tps.close();
        return(v);
    }
	/** getCLMedicalList รายการที่ต้องตรวจสุขภาพตามตารางตรวจของCredit Life
     **@param medSum  ทุนตรวจสุขภาพ
     **@param age   อายุ
     **@param planCode  แบบประกัน
     **@param  tdate   วันที่ตรวจสอบ
     **@param inDetail   ต้องการรายละเอียดของกรุ้ปเลือดหรือไม่
     **@param  projNo    การใช้ตารางการตรวจสุขภาพ
     **@return Vector of String[] รายการที่ต้องตรวจ testCode testName testRate 
     **/

    public static Vector getCLMedicalList (String medSum, String age, String planCode, String tdate, boolean inDetail, int projNo)
    {
               System.out.println("Start CLmedicalList");
                Vector vc = new Vector();
                int zone = 0;
              System.out.println("ZONE = " + zone + " " + medSum + " " + age + "  " + tdate+ " "+projNo);
				int x = 0;
				if ( PlanType.isTLPNonMRTA( planCode ))
                	x = UWMedicalCondition.getTLPNonMRTAMedical(planCode, medSum, age, tdate, projNo);
				else if ( PlanType.isTLPMRTA( planCode ))
                	x = UWMedicalCondition.getTLPMRTAMedical(planCode, medSum, age, tdate, projNo);
				else if ( PlanType.isBankMLTA( planCode ))
                	x = UWMedicalCondition.getMLTAMedical(planCode, medSum, age, tdate, projNo);
				else
				{
                	x = UWMedicalCondition.getCLMedical(planCode, medSum, age, tdate, projNo);
					System.out.println(" COOP getCLmedical "+ x);
				}
				System.out.println("AAAA ");	
                if ( PlanType.isTLPMRTA(planCode))
					return(changeTLPMRTADetail(x, false , M.ctoi(age)));
				else if ( PlanType.isTLPNonMRTA(planCode))
					return(changeTLPNonMRTADetail(x, false, M.ctoi(age)));
				else
				{
					System.out.println( "Check Plan - "+ ( PlanType.isGOVBankMed(planCode) || PlanType.isCOOPMed(planCode)));
					if ( PlanType.isGOVBankMed(planCode) || PlanType.isCOOPMed(planCode))
						return(changeGOVDetail(x,false,M.ctoi(age)));
					else
                		return(changeCLDetail(x,false,M.ctoi(age)));
				}


    }
    /** getMedicalList รายการที่ต้องตรวจสุขภาพตามตารางตรวจของรายบุคคล
    **@param medSum  ทุนตรวจสุขภาพ
    **@param age   อายุ
    **@param  province  จังหวัด
    **@param  tdate   วันที่ตรวจสอบ
    **@param inDetail   ต้องการรายละเอียดของกรุ้ปเลือดหรือไม่
    **@param  projNo    การใช้ตารางการตรวจสุขภาพ
    **@param  planCode   แบบประกัน
    **@return Vector of String[] รายการที่ต้องตรวจ testCode testName testRate 
    **/
    public static Vector getMedicalList (String medSum, String age, String province, String tdate, boolean inDetail, int projNo, String planCode)
        {
        System.out.println("Start medicalList " + planCode);
        String bankCode =   BankAssure.bankCodeFromPlan(planCode);
		projNo = getMedTable(tdate, projNo);
		bankType = bankCode ; // for other bank
		System.out.println("bankCode - "+ bankCode + " proj - " + projNo);
        Vector vc = new Vector();
        /* if (M.cmps( tdate,"25590401") >= 0 && bankCode  != null && bankCode.compareTo(BankAssure.BAY)==0 )
            projNo = 4; */
	
		
        int zone = 0;
        System.out.println("ZONE = " + zone + " " + medSum + " " + age + " " + province + " " + tdate);
        int x = 99;
        if (M.cmps( tdate, "25520101") > 0)
        {
            x = MedicalCondition.getNewMedical(medSum, age, tdate, projNo);
            System.out.println("NO OF TEST ==" + x);
            return(changeDetail(tdate, x,false, projNo)); // before 2557
        }
        System.out.println("end medical");
        return vc;
    }
    /**isConsiderate เป็นเคสที่ส่งพิจารณาเป็นรายๆ ไป
    **@param  sum   ทุนประกันตรวจสุขภาพ
    **@param  age   อายุเริ่มทำประกัน
    **@param  payDate  วันที่ชำระเบี้ยประกัน
    **@param  projectNo  กลุ่มที่ต้องใช้ในการตรวจ
    **@return Boolean true เป็นจังหวัดที่ต้องตรวจ HIV , false ไม่เป็นจังหวัดที่ต้องตรวจ HIV  
    **/

    public static boolean isConsiderate(String sum, String age, String payDate, int projectNo)
    {
		if (M.cmps( payDate, MED_57_DATE) >= 0)
			return(false);
        projectNo = getMedTable(payDate, projectNo);
        if (projectNo == 0)
        {
            int testNo = getNewMedical(sum, age, payDate, projectNo);
            return testNo == 88;
        }
        else if (projectNo == 1)
        {
            if (M.cmps(age, "0") >= 0 && M.cmps(age, "5") <= 0)
                return M.cmps(sum, "3000000") > 0 && M.cmps(sum, "6000000") <= 0;
            else if (M.cmps(age, "6") >= 0 && M.cmps(age, "15") <= 0)
                return M.cmps(sum, "6000000") > 0 && M.cmps(sum, "10000000") <= 0;
            else if (M.cmps(age, "61") >= 0)
                return M.cmps(sum, "6000000") > 0;
            return false;
        }
        else if (projectNo == 2)
        {
            if (M.cmps(age, "0") >= 0 && M.cmps(age, "5") <= 0)
                return M.cmps(sum, "3500000") > 0 && M.cmps(sum, "6000000") <= 0;
            else if (M.cmps(age, "6") >=0 && M.cmps(age, "15") <= 0)
                return M.cmps(sum, "6000000") > 0 && M.cmps(sum, "10000000") <= 0;
            else if (M.cmps(age, "61") >= 0)
                return M.cmps(sum, "6000000") > 0;
        }
        else if (projectNo == 3)
        {
            if (M.cmps(age, "0") >= 0 && M.cmps(age, "5") <= 0)
                return M.cmps(sum, "4000000") > 0 && M.cmps(sum, "6000000") <= 0;
            else if (M.cmps(age, "6") >=0 && M.cmps(age, "15") <= 0)
                return M.cmps(sum, "6000000") > 0 && M.cmps(sum, "10000000") <= 0;
            else if (M.cmps(age, "61") >= 0)
                return M.cmps(sum, "6000000") > 0;
        }
        return false;
    }

    /** isHIVProvince  เป็นจังหวัดที่ต้องตรวจ HIV หรือไม่
     **@param medSum  ทุนตรวจสุขภาพ
     **@return Boolean true เป็นจังหวัดที่ต้องตรวจ HIV , false ไม่เป็นจังหวัดที่ต้องตรวจ HIV  
     **/
    public static boolean isHIVProvince(String tambon)
    {
		return( false);
        /* String    province    =    tambon;
        if (M.numeric(province))
            province = AddressCode.tambonToProvince(tambon);
        if(province==null)
            return false;
        for (int i = 0; i < HIV_PROV.length; i++)
            if (province.compareTo(HIV_PROV[i]) == 0)
                return (true);
        return false; */
    }
    public static void main(String[] args)
    {
    	String[] argss= {"1000000","35"};
    	//String args[0]="35";
    	
    System.out.println( "*********** START TEST    getMedTable    OLD ************ ");
    System.out.println("Testing with date = 25540701 --> " + getMedTable("25540701",1));
    System.out.println("Testing with date = 25570101 --> " + getMedTable("25570101",2));
    System.out.println("Testing wiht date = 25621111 --> " + getMedTable("25621010",3));
    System.out.println( "**********  END TEST      getMedTable   OLD ************ ");	   	
    System.out.println("********************************************************");
    	
    	
    System.out.println( "*********** START TEST    getZone    OLD ************ ");
    System.out.println("Testing with province = กจ --> " + getZone("กจ"));
    System.out.println("Testing with province = กท --> " + getZone("กท"));
    System.out.println("Testing with province = รย --> " + getZone("รย"));
    System.out.println( "**********  END TEST      getZone    OLD ************ ");	   	
    System.out.println("********************************************************");
    	
    System.out.println( "*********** START TEST    decreaseAge    OLD ************ ");
    System.out.println("Testing with age = 55 --> " + decreaseAge("EI","55"));
    System.out.println("Testing with age = 66 --> " + decreaseAge("EI","66"));
    System.out.println( "**********  END TEST      decreaseAge    OLD ************ ");	   	
    System.out.println("********************************************************");	
    	
    System.out.println( "*********** START TEST    degrade    OLD ************ ");
    System.out.println("Testing with age = 55 --> " + degrade("EI","55"));
    System.out.println("Testing with age = 66 --> " + degrade("EI","66"));
    System.out.println( "**********  END TEST      degrade    OLD ************ ");	   	
    System.out.println("********************************************************");		
    	
    System.out.println( "*********** START TEST    checkHIV    OLD ************ ");
    System.out.println("Testing --> " + checkHIV(M.stou("กท"), "PL71", "45", "4000000", "007", "25621010", 0));
    System.out.println("Testing --> " + checkHIV(M.stou("รย"), "PL71", "18", "1000000", "007", "25621010", 0));
    //System.out.println("Testing --> " + checkHIV(M.stou("ชม"), "PL71", "18", "1000000", "007", "25621010", 0));
    System.out.println( "**********  END TEST      checkHIV    OLD ************ ");	   	
    System.out.println("********************************************************");			
    
    System.out.println( "*********** START TEST    indHiv    OLD ************ ");
    System.out.println("Testing --> " + indHiv("45",M.stou("กท"), "142"));
    System.out.println("Testing --> " + indHiv("18",M.stou("รย"), "142"));
    System.out.println("Testing --> " + indHiv("5",M.stou("รย"), "142"));
    System.out.println( "**********  END TEST      indHiv    OLD ************ ");	   	
    System.out.println("********************************************************");			
   
    System.out.println( "*********** START TEST    ordHIV    OLD ************ ");
    System.out.println("Testing --> " + ordHIV("25621010","PL71","45",M.stou("กท"),"4000000", 0));
    System.out.println("Testing --> " + ordHIV("25621010","PL71","18",M.stou("รย"),"4000000", 0));
    System.out.println("Testing --> " + ordHIV("25621010","PL71","5" ,M.stou("รย"),"1000000", 0));
    System.out.println( "**********  END TEST      ordHIV    OLD ************ ");	   	
    System.out.println("********************************************************");	
	
    System.out.println( "*********** START TEST    checkMedical    OLD ************ ");
    System.out.println("Testing --> " + checkMedical("PL71","45",M.stou("กท"),"4000000","25621010", 0));
    System.out.println("Testing --> " + checkMedical("PL71","18",M.stou("รย"),"4000000","25621010", 0));
    System.out.println("Testing --> " + checkMedical("PL71","5" ,M.stou("รย"),"1000000","25621010", 0));
    System.out.println( "**********  END TEST      checkMedical    OLD ************ ");	   	
    System.out.println("************************************************************");	
	
    System.out.println( "*********** START TEST    isConsiderate    OLD ************ ");
    // System.out.println("Testing --> " + isConsiderate("4000000","45","25621010", 0));
    //System.out.println("Testing --> " + isConsiderate("4000000","18","25621010", 0));
    //System.out.println("Testing --> " + isConsiderate("1000000","5" ,"25621010", 0));
    System.out.println("Testing --> " + isConsiderate("7000000","65","25570216", 2));
    System.out.println("Testing --> " + isConsiderate("4000000","18","25570216", 2));
    System.out.println("Testing --> " + isConsiderate("1000000","5" ,"25570216", 3));
    System.out.println( "**********  END TEST      isConsiderate    OLD ************ ");	   	
    System.out.println("************************************************************");	
	
    System.out.println( "*********** START TEST    getGroupDetail    OLD ************ ");
    int sizee=0;
    for(String st : getGroupDetail("","G5")) {
    	System.out.println("Testing with code = G5 --> " + st);
    	sizee++;
    }
    System.out.println("Testing with code = G5 size --> " + sizee);
    System.out.println( "**********  END TEST      getGroupDetail   OLD ************ ");	   	
    System.out.println("************************************************************ ");
    
    
    System.out.println( "*********** START TEST    getMedForInform    OLD ************ ");
    Vector v = getMedForInform( "4000000", "51", "ลป", "25621004","PL71", true , 2);
	for (int i=0; i<v.size(); i++)
	{
		if ( v.elementAt(i) instanceof String )
			System.out.println("LName - "+  (String)v.elementAt(i));
		else
		{
			if ( v.elementAt(i) instanceof String[])
			{
				String [] aa = (String[])v.elementAt(i);
				for (int j=0; j<aa.length; j++) {
					System.out.print("" + "   "+ aa[j]+" " );
				}
				System.out.println();
			}
		}
	
    } 
	System.out.println("Testing checkHIV --> " + checkHIV(M.stou("ภก"), "PL71", "51", "4000000", "007", "25621010", 0));
    System.out.println("***********************************************************");	
    System.out.println("*********** END TEST    getMedForInform    OLD ************ ");
    
    
    
    
    
    
    
    
    //System.out.println( "************ 25570217*******  Test SUM = "+ argss[1]+ " at Age = "+ argss[0]+ "************ ");
    //System.out.println( "*******************  Test SUM = "+ argss[1]+ " at Age = "+ argss[0]+ "************ ");
//	String[] group_med = getGroupDetail("","G7");
//	for(int i = 0 ; i<group_med.length;i++) {
//		System.out.println("getGroupDetail G7 (G_BLOOD_57_2)" + i + " = "+group_med[i]);
//	}
	//System.out.println("getGroupDetail" + getGroupDetail("","G_BLOOD_57_2"));
	//System.out.println( "is MedSingle  - "+  PlanType.isMedSingle("ML89"));
	//System.out.println("");
	//System.out.println( "is NonHIV - "+  PlanType.isNonHIVPlan("ML89"));
	//System.out.println("");
	
 	
//        System.out.println("Methoddddd mrtaMedical GHB   is - "+ mrtaMedical("25610601","ML89", argss[1], argss[0]));
//        System.out.println("Methoddddd mrtaMedical IBANK is - "+ mrtaMedical("25610601","ML86", argss[1], argss[0]));
//        System.out.println("Methoddddd mrtaMedical BAAC  is - "+ mrtaMedical("25610601","ML85", argss[1], argss[0]));
//        System.out.println("Methoddddd mrtaMedical COOP  is - "+ mrtaMedical("25610601","PL25", argss[1], argss[0]));
//        System.out.println("");
//        System.out.println("");
//    	  System.out.println("checkkkkk HIV ORICO  is "+ checkHIV(true, "L038", argss[1], argss[0], "998", "25610601", 2));
//        System.out.println("checkkkkk HIV GHB    is "+ checkHIV(true, "ML90", argss[1], argss[0], "998", "25610601", 2));
//        System.out.println("checkkkkk HIV IBANK  is "+ checkHIV(true, "ML86", argss[0], argss[1], "998", "25610601", 2));
//        System.out.println("checkkkkk HIV BAAC   is "+ checkHIV(true, "ML85", argss[0], argss[1], "998", "25610601", 2));
//        System.out.println("checkkkkk HIV COOP   is "+ checkHIV(true, "PL25", argss[0], argss[1], "998", "25610601", 2));
//        System.out.println("");
//	int projectno = getMedTable("25621010",0);
//    System.out.println("Testing getMedTable old with date = 25540701 --> " + getMedTable("25540701",1));
//    System.out.println("Testing getMedTable old with date = 25570101 --> " + getMedTable("25570101",2));
//    System.out.println("Testing getMedTable old with date = 25621111 --> " + getMedTable("25621010",3));
//    
 	//System.out.println("START getCLMedicalList ");
    //Vector vx = getCLMedicalList (argss[0], argss[1], "PL71","25621010", true, projectno);
        //for (int i = 0; i < vx.size(); i++)
            //System.out.println("GetMedcalList : " + vx.get(i).toString());
   // System.out.println("checkHIV ="+ checkHIV(M.stou("กท"), "PL71", argss[1], argss[0], "007", "25621010", projectno));
        //System.out.println("isConsiderate ="+ isConsiderate(argss[0], argss[1], "25621010", 0));
//        isConsiderate(String sum, String age, String payDate, int projectNo)
//{
		
/* System.out.println("-----------------");
        System.out.println( "checkHIV(false, GW16, 51, 4000000, 007, 25611004, 0");
        boolean hiv = checkHIV(false, "GW16", "51", "4000000", "007", "25611004", 0);
        System.out.println("HIV = " + hiv);
        System.out.println( "checkHIV(false, BE02, 56, 4000000, 007, OL_PARTNER, 0");
        hiv = checkHIV(false, "BE02", "16", "7500001", "007", "25611006", 0);
        System.out.println("HIV i2= " + hiv);
System.out.println("--------------inform old ---");
 Vector v = getMedForInform( "4000000", "51", "ลป", "25611004","BE02", true , 2);
	for (int i=0; i<v.size(); i++)
	{
		if ( v.elementAt(i) instanceof String )
			System.out.println("LName - "+ (String)v.elementAt(i));
		else
		{
			if ( v.elementAt(i) instanceof String[])
			{
				String [] aa = (String[])v.elementAt(i);
				for (int j=0; j<aa.length; j++)
					System.out.println(j + " "+ aa[j]);
			}
		}
	
       } 

    System.out.println("--------------inform new  ---");
  v = getMedForInform( "5500001", "46", "ลป", "25611006","BE02", true , 2);
        for (int i=0; i<v.size(); i++)
        {
                if ( v.elementAt(i) instanceof String )
                        System.out.println("LName - "+ (String)v.elementAt(i));
                else
                {
                        if ( v.elementAt(i) instanceof String[])
                        {
                                String [] aa = (String[])v.elementAt(i);
                                for (int j=0; j<aa.length; j++)
                                        System.out.println(j + " "+ aa[j]);
                        }
                }

       }
    System.out.println("CheckMedical = "+ checkMedical("PL24", "45","กท","12000000", "25611101",2));
    Vector vc = getMedicalList ("12000000","45"," กท", "25611115", true, 2, "PL24");
	System.out.println("vc = "+vc.size());
   //System.out.println("--------------get Medical List  ---");
	Vector  vv = getMedicalList ("5500001", "46", "กก", "25611004", true, 2, "BE02"); */
   
    // 
    
    }


}

