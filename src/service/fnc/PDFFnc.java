package service.fnc;

import manit.M;

import java.util.Calendar;
import java.util.Date;
import java.math.BigDecimal;
import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.SimpleDateFormat;

public class PDFFnc 
{

	/**
	 * 
	 * @param type 1  : --------- dd.mm.yyyy ------- <br>
	 *  	  type 2  : --------- dd/mm/yyyy ------- <br>
	 *   	  type 3  : --------- dd.mm.yyyy ------- <br>
	 *    	  type 4  :  --------- ddmmyy ---------- <br>
	 *     	  type 5  : ---------- dd.mm.yy -------- <br>
	 *        type 6  : --------- yyyy-mm-dd ------- <br>
	 *        
	 * @param be,type,yyyymmdd
	 * be = true  : year+543 , yyyymmdd=ค.ศ.
	 * be = false : year-543 , yyyymmdd=พ.ศ.
	 * @return
	 */
	public static String formatDate(boolean be,int type, String yyyymmdd) 
	{
		String yy = yyyymmdd.substring(0, 4);
		String mm = yyyymmdd.substring(4, 6);
		String dd = yyyymmdd.substring(6, 8);
		if(be) {
			if(!yy.substring(0,2).equals("25") && !yy.substring(0,4).equals("9999")) {
				int year = Integer.parseInt(yy)+543;
				yy = String.valueOf(year);
			}
		}else {
			int year = Integer.parseInt(yy)-543;
			yy = String.valueOf(year);
		}
		if (yyyymmdd.length() == 8)
			dd = yyyymmdd.substring(6);
		switch (type) 
		{
			case 1 : yyyymmdd = dd + "." + mm + "." + yy; 
					 break;
			case 2 : yyyymmdd = dd + "/" + mm + "/" + yy;
					 break;
			case 3 : yyyymmdd = mm + "." + yy; 
					 break;
			case 4 : yyyymmdd = dd + mm + yy.substring(2); 
					 break;
			case 5 : yyyymmdd = dd + "." + mm + "." + yy.substring(2); 
					 break;
			case 6 : yyyymmdd = yy + "-" + mm + "-" + dd; 
					 break;
			default: break;
		}
		return yyyymmdd;
	}

	/**
	 * 
	 * @param yyyymmdd, -543
	 * @return
	 * @throws Exception
	 */
	public static Date getutilDate(String yyyymmdd) throws Exception 
	{
		String formatDate = formatDate(false,6, yyyymmdd);
		Date dd = new SimpleDateFormat("yyyy-MM-dd").parse(formatDate);
		return dd;
	}
	
	/**
	 * เปลี่ยนจาก ค.ศ. เป็น  พ.ศ. by pun 24/10/2019
	 * @param yyyymmdd  ex.2019/11/20
	 * @return 24/10/2562
	 * @throws Exception 
	 * 
	 */
	public static String changeDateEntoTh(String yyyymmdd) throws Exception {
		return PDFFnc.formatDate(true, 2, PDFFnc.changeToYYYYMMDD(yyyymmdd));
	}

	/**
	 * 
	 * @param yyyymmdd use ปีเป็น คศ.
	 * @return
	 * @throws Exception
	 */
	public static java.sql.Date getSqlDate(String yyyymmdd) throws Exception 
	{
		if (yyyymmdd == null)
			throw new Exception("Format Incorect "); 
		if(yyyymmdd.equals(""))
			return  null;
		Date dd = getutilDate(yyyymmdd);
		java.sql.Date sqlDate = new java.sql.Date(dd.getTime());
		return sqlDate;
	}

	/**
	 * 
	 * @param sqlDate
	 * @return
	 * @throws Exception
	 */
	public static String getFormatYYMMDD(java.sql.Date sqlDate) throws Exception // 2018-01-01
	{
		String date = sqlDate == null ? "0000-00-00" : sqlDate.toString();
		String[] ss = date.split("-");
		String yyyy = M.addnum(ss[0], "543");
		String yyyymmdd = yyyy + ss[1] + ss[2];
		return M.dateok(yyyymmdd) ? yyyymmdd : "00000000";
	}
	/**
	 * 
	 * @param be
	 * @param date : 01-01-2562
	 * @return  20190101
	 * @throws Exception
	 */
	public static String changeToYYYYMMDD(String date) throws Exception
	{
		String [] split = date.split("/");
		if(split.length != 3)
			throw new Exception("Format Incorect ");
		return split[2]+split[1]+split[0];
	}
	/**
	 * 
	 * @param be
	 * @param 
	 * @return  yyyy/MM/dd HH:mm:ss
	 * @throws Exception
	 */
	public static Timestamp currentTimeStamp() throws Exception 
	{
		java.util.Date date= new java.util.Date();
	    System.out.println(new Timestamp(date.getTime()));
		return new Timestamp(date.getTime());
	}
	
	/**
	 * 
	 * @param val BigDecimal
	 * @return BigDecimal
	 */
	public static BigDecimal chkNullBigDecimalValues(BigDecimal val) {
		if(val != null) {
			return val;
		}else {
			return new BigDecimal(0);
		}
	}
	
	/**
	 * 
	 */
	public static String compareValuePrdDesignToFix(String prdDesign) throws Exception{
		String select_rule = "";
		if(prdDesign.equals("MANDATORY")) {
			select_rule = "BUNDLE";
		}else if(prdDesign.equals("AUTOMATIC")) {
			select_rule = "PACKAGE";
		}else if(prdDesign.equals("RATE_MAKING")) {
			select_rule = "RATE_MAKING";
		}else if(prdDesign.equals("OPTIONAL")) {
			select_rule = "OPTIONAL";
		}else if (prdDesign.equals("NONE")) {
			select_rule = "NONE";
		}
		return select_rule;
	}
	public static String formatDateUW(boolean be,int type, String yyyymmdd) 
	{
		String yy = yyyymmdd.substring(0, 4);
		String mm = yyyymmdd.substring(4, 6);
		String dd = yyyymmdd.substring(6, 8);
	
			if(!yy.substring(0,2).equals("25")&&!yy.substring(0,4).equals("9999")) {
				int year = Integer.parseInt(yy)+543;
				yy = String.valueOf(year);
			}
			
		
		if (yyyymmdd.length() == 8)
			dd = yyyymmdd.substring(6);
		switch (type) 
		{
			case 1 : yyyymmdd = dd + "." + mm + "." + yy; 
					 break;
			case 2 : yyyymmdd = dd + "/" + mm + "/" + yy;
					 break;
			case 3 : yyyymmdd = mm + "." + yy; 
					 break;
			case 4 : yyyymmdd = dd + mm + yy.substring(2); 
					 break;
			case 5 : yyyymmdd = dd + "." + mm + "." + yy.substring(2); 
					 break;
			case 6 : yyyymmdd = yy + "-" + mm + "-" + dd; 
					 break;
			default: break;
		}
		return yyyymmdd;
	}
	public static Date getutilDateUW(String yyyymmdd) throws Exception 
	{
		String formatDate = formatDateUW(false,6, yyyymmdd);
		Date dd = new SimpleDateFormat("yyyy-MM-dd").parse(formatDate);
		return dd;
	}
	public static String changeDateEntoThUW(String yyyymmdd) throws Exception {
		return PDFFnc.formatDateUW(true, 2, PDFFnc.changeToYYYYMMDD(yyyymmdd));
	}
	public static java.sql.Date getSqlDateUW(String yyyymmdd) throws Exception 
	{
		if (yyyymmdd == null)
			throw new Exception("Format Incorect "); 
		if(yyyymmdd.equals(""))
			return  null;
		Date dd = getutilDateUW(yyyymmdd);
		java.sql.Date sqlDate = new java.sql.Date(dd.getTime());
		return sqlDate;
	}
}
