package service.fnc;
import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;

import org.json.JSONArray;
import org.json.JSONObject;

import manit.M;
import service.center.SubCatData;
import utility.adc.ServiceForProductFactory;
import utility.support.DateInfo;

public class Test {

	public static void main(String[] args) throws Exception {
		// TODO Auto-generated method stub
		System.out.println(DateInfo.sysTime(0));
		ServiceForProductFactory  spf		= new ServiceForProductFactory();
		JSONArray	cooperative_jsonArray	= new JSONArray();
		ArrayList<String[]> arr_cooperative  = new ArrayList<>();
		arr_cooperative = spf.getAllCoopTLI();
		for (int i = 0; i < arr_cooperative.size(); i++) {
			System.out.println(i);
			/*JSONObject cooperative_Json = new JSONObject();
			cooperative_Json.put("pass", arr_cooperative.get(i)[0]);
			cooperative_Json.put("text", arr_cooperative.get(i)[1]);
			cooperative_jsonArray.put(cooperative_Json);*/
		}
		System.out.println(DateInfo.sysTime(0));
		
		/*SubCatData scd = new SubCatData();
		ArrayList<String[]> listSubCat = new ArrayList<>();//26,27
		listSubCat 			= scd.searchSubCatByPmstdRateCatOL();
		for (String[] strings : listSubCat) {
			System.out.println("1:" + strings[0] +"|2:" + strings[1] +"|3:" + strings[2] +"|4:" + strings[3]);
		}
		
		String[] rate_Type = ConstantRateCatIDValues.getPmstdRateCatOl();
		System.out.println(rate_Type[0]+"|"+rate_Type[1]);*/
		
	/*	int sec = 1;
		Calendar cal = Calendar.getInstance();
		cal.setTimeInMillis(PDFFnc.currentTimeStamp().getTime());
		cal.add(Calendar.SECOND,sec);
		Timestamp ts_new_date_ws = new Timestamp(cal.getTime().getTime());
		System.out.println("TIME >> "+ts_new_date_ws);
		*/
		//PublicRte.setRemote(false);
	/*	String strDate = "20/05/2019";
		int year=0,month=0,day=0;
		//DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
		DateFormat df = new SimpleDateFormat("dd/MM/yyyy");
		Date date = df.parse(strDate);*/
		
		
		
	/*	String strDate = "20/05/2019";
		System.out.println("000000/"+strDate);
		String changeDate = changeToYYYYMMDD(strDate);
		System.out.println("111111/"+changeDate);
		String formatDate = formatDate(true,2, changeDate);
		System.out.println("222222/"+formatDate);*/
		
		//2562-11-20
		/*if (strDate == null)
			throw new Exception("Format Incorect "); 
		if(strDate.equals(""))
			System.out.println("0");
		int year=0,month=0,day=0;
		
		DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
		Date dd = df.parse(formatDate);
		//Date result = new SimpleDateFormat("yyyy-MM-dd").format(dd);
		System.out.println(new SimpleDateFormat("yyyy-MM-dd").format(dd));
		Calendar c = Calendar.getInstance();
		c.setTime(dd); 
		year = c.get(Calendar.YEAR);
		month = c.get(Calendar.MONTH);
		day = c.get(Calendar.DATE);
		
		
				
		String dated = String.format("%s"+"-"+"%s"+"-"+"%s", year,month,day);
		System.out.println("DATE//"+dated);
		Date vv = getSqlDate(dated);
		System.out.println("BBBB/"+vv);*/
	}

	public static Date getutilDate(String yyyymmdd) throws Exception 
	{
		String formatDate = formatDate(false,6, yyyymmdd);
		Date dd = new SimpleDateFormat("yyyy-MM-dd").parse(formatDate);
		return dd;
	}
	
	public static String formatDate(boolean be,int type, String yyyymmdd) 
	{
		String yy = yyyymmdd.substring(0, 4);
		String mm = yyyymmdd.substring(4, 6);
		String dd = yyyymmdd.substring(6, 8);
		if(be) {
			int year = Integer.parseInt(yy)+543;
			yy = String.valueOf(year);
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
	
	public static String changeToYYYYMMDD(String date) throws Exception
	{
		String [] split = date.split("/");
		if(split.length != 3)
			throw new Exception("Format Incorect ");
		return split[2]+split[1]+split[0];
	}
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
}
