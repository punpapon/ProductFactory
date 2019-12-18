package service;

import java.io.File;
import java.io.FileReader;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Vector;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import manit.M;

public class UWProductfacAppendixSumAccum {
	private static final String PATH = "/c/insure/jsonPlan/medicalConditionJson/";

	/**********************************************************************************************************************/
	/**
	 * vAppendix -- for save data
	 * 
	 ** @return Vector - String [] รหัสภาคผนวก, อายุ, ทุนตรวจสุขภาพ
	 **/
	@SuppressWarnings("rawtypes")
	public static Vector vAppendix = new Vector();

	/**
	 * getAppendixSumAccumData() ทำการหาค่าข้อมูล******ไฟล์
	 * "AppendixSumAccumData.json"
	 * 
	 ** @param ประเภทแบบประกัน
	 ** @param สถานะกรรมธรรม์
	 *
	 ** @return Vector - String [] Sub_no, Ic_yes, Ic_no, Sub_yes*********
	 *
	 **/
	@SuppressWarnings({ "unchecked", "rawtypes" })

	public static Vector getAppendixSumAccumData(String hq_med_exam_amt, String age, String input_date,
			String planCode) {
		
		Vector appendix = setAppendixProductUW(hq_med_exam_amt, age, input_date, planCode);
		Vector medlist = getAppendixAllDataList();
		Vector v = new Vector();
		try {

			JSONArray AppendixSumAccum = new JSONArray();
			JSONObject asaData = new JSONObject();
			JSONArray appendixList = new JSONArray();
			JSONObject appenDetail = new JSONObject();

			JSONObject MemberGroup = (JSONObject) new JSONParser()
					.parse(new FileReader(new File(PATH + "AppendixSumAccumData.json")));

			AppendixSumAccum = (JSONArray) MemberGroup.get("AppendixSumAccum_Data");

			for (int i = 0; i < AppendixSumAccum.size(); i++) {
				asaData = (JSONObject) AppendixSumAccum.get(i);

				if (M.cmps(vAppendix.get(0).toString(), asaData.get("Appendix_code").toString()) == 0
						&& vAppendix.get(4).toString().compareTo(asaData.get("Version_id").toString())==0) {

					appendixList = (JSONArray) asaData.get("Member_List");

					for (int j = 0; j < appendixList.size(); j++) {
						appenDetail = (JSONObject) appendixList.get(j);
						System.out.println(
										   "Result Data 'Appendix Code' = " + asaData.get("Appendix_code").toString());
						System.out.println("Result Data    'Version_id' = " + asaData.get("Version_id").toString());
						System.out.println(M.stou("มี   ประวัติIC")+"(Ic_yes) 		: " + appenDetail.get("Ic_yes"));
						System.out.println(M.stou("ไม่มี ประวัติIC")+"(Ic_no)		: " + appenDetail.get("Ic_no"));
						System.out.println(M.stou("มี   Substandard")+"(Sub_yes)	: " + appenDetail.get("Sub_yes"));
						System.out.println(M.stou("ไม่มี Substandard")+"(Sub_no) 	: " + appenDetail.get("Sub_no"));
						v.add(new String[] { appenDetail.get("Ic_yes").toString(), appenDetail.get("Ic_no").toString(),
								appenDetail.get("Sub_yes").toString(), appenDetail.get("Sub_no").toString() });
					}
				}
			}
			return v;
		} catch (Exception e) {
			System.out.println(
					"-----------Error AppendixSumAccum_Data File or Not found Appendix_code in file------------");
			e.printStackTrace();
		}
		return v;

	}

	/**
	 * getAppendixAllDataList() ทำการหาค่าข้อมูลในภาคผนวกจากไฟล์
	 * "AppendixAllData.json"
	 * 
	 ** @return Vector - String [] รหัสการตรวจ
	 *
	 **/
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static Vector getAppendixAllDataList() {
		Vector v = new Vector();
		try {

			JSONArray appendixAllList = new JSONArray();
			JSONObject appendixData = new JSONObject();
			JSONArray appendix = new JSONArray();
			JSONObject apData = new JSONObject();
			Boolean findAppendix = false;

			JSONObject appendixGroup = (JSONObject) new JSONParser()
					.parse(new FileReader(new File(PATH + "AppendixAllData.json")));
			appendixAllList = (JSONArray) appendixGroup.get("AppendixALL_Data");

			for (int i = 0; i < appendixAllList.size(); i++) {

				appendixData = (JSONObject) appendixAllList.get(i);

				appendix = (JSONArray) appendixData.get("AppendixData");
				
				for (int m = 0; m < appendix.size(); m++) {
					apData = (JSONObject) appendix.get(m);
					SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
					SimpleDateFormat sdf2 = new SimpleDateFormat("dd/MM/yyyy");
					Date fromDate = sdf.parse(vAppendix.get(3).toString());
					Date effDate = sdf2.parse(apData.get("Eff_date").toString());
					if (vAppendix.get(0).equals(apData.get("Appendix_code").toString())
							&& (fromDate.equals(effDate) || fromDate.after(effDate))) {
						findAppendix = true;
						vAppendix.add(4, apData.get("Version_id").toString());
					}
				}

			}

			return v;
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("-----------Error AppendixAllData File or Not found Exam_code------------");
		}
		return v;

	}

	/**
	 * getAppendixProductUW() ทำการหาค่าข้อมูลภาคผนวกจากไฟล์ "AppendixProduct.json"
	 * 
	 ** @param ทุนการตรวจ
	 ** @param อายุ
	 ** @param วันที่ภาคผวกเปิดใช้งาน
	 ** @param แบบประกัน
	 *
	 ** @return Vector - String [] รหัสภาคผนวก, อายุ, ทุนตรวจสุขภาพ
	 *
	 **/
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static Vector setAppendixProductUW(String hq_med_exam_amt, String age, String input_date, String planCode) {

		try {
			vAppendix = new Vector();

			JSONObject appendixProductGroup = (JSONObject) new JSONParser()
					.parse(new FileReader(new File(PATH + "AppendixProduct.json")));

			JSONArray appendixProductData = (JSONArray) appendixProductGroup.get("AppendixProduct_Data");
			JSONArray appendixProductList = new JSONArray();
			JSONObject appenDetail = new JSONObject();

			for (int i = 0; i < appendixProductData.size(); i++) {
				JSONObject appendixData = (JSONObject) appendixProductData.get(i);

				if (planCode.equals(appendixData.get("Prd_code"))) {

					appendixProductList = (JSONArray) appendixData.get("Appendix_List");

					for (int j = 0; j < appendixProductList.size(); j++) {
						appenDetail = (JSONObject) appendixProductList.get(j);

						/** Check date **/
						SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
						SimpleDateFormat sdf2 = new SimpleDateFormat("yyyy-MM-dd");
						Date effDate = sdf2.parse(appenDetail.get("Eff_date").toString());
						Date expDate = sdf2.parse(appenDetail.get("Exp_date").toString());
						Date inputDate = sdf.parse(input_date);

						Calendar c = Calendar.getInstance();
						c.setTime(inputDate);
						c.add(Calendar.YEAR, -543);
						java.util.Date newDate = c.getTime();
						// java.sql.Date sqlDate = new java.sql.Date(newDate.getTime());

						if ((newDate.equals(effDate) || newDate.after(effDate))
								) {

							/*
							 * checkHIV(province, appendixData.get("Prd_code").toString(), age,
							 * hq_med_exam_amt, appenDetail.get("Eff_date").toString());
							 */
							vAppendix.add(0, appenDetail.get("Appendix_code"));
							vAppendix.add(1, age);
							vAppendix.add(2, hq_med_exam_amt);
							vAppendix.add(3, appenDetail.get("Eff_date").toString());
							System.out.println("Prd_code = " + planCode + " have appendix_code = "
									+ appenDetail.get("Appendix_code"));
							System.out.println("PremiumAmount = " + hq_med_exam_amt);
							System.out.println("Age           = " + age);
							System.out.println("PromisedDate  = " + input_date);
							return vAppendix;
						}
					}
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
			// System.out.println("-----------Error AppendixProduct File or Not Found
			// Appendix_code in file------------");
		}
		return vAppendix;
	}

	public static void main(String[] args) {
		System.out.println("*********** START TEST  getAppendixSumAccumData   ************ ");
		int sizee = 0;
		//Vector polist = getAppendixSumAccumData("PL71");
		Vector polist = getAppendixSumAccumData("3000000", "40", "25621125", "GL_CL_MRT_P_1150");
		if (polist.size() == 0) {
			System.out.println("Not Found Result Data : " + "");
		} else {
			for (int i = 0; i < polist.size(); i++) {
				String[] po = (String[]) polist.get(i);
				// System.out.println("Result Data Status is : " + po[0]);
				// System.out.println("Is_rider_sum : " + po[1]);
				// System.out.println("Is_med_sum : " + po[2]);
				// System.out.println("Is_sum_for_rider : " + po[3]);
				// System.out.println("Is_insure_sum : " + po[4]);
			}

			//
		}
		System.out.println("**********  END TEST  getAppendixSumAccumData   ************ ");
		System.out.println("********************************************************");
	}
}
