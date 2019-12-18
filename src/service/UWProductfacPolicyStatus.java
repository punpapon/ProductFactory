package service;

import java.io.File;
import java.io.FileReader;
import java.util.Vector;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import manit.M;

public class UWProductfacPolicyStatus {
	private static final String PATH = "/c/insure/jsonPlan/medicalConditionJson/";
	
	/**
	 * getConditionList() ทำการหาค่าข้อมูลการตรวจจากไฟล์ "PolicySumAccumData.json"
	 * 
	 ** @return Vector - String [] รหัสสถานะ
	 *                             , รวมทุนคุ้มครอง(อำนาจรับประกัน)
	 *                             , ราคาการตรวจ
	 *                             , รวมทุนตรวจสุขภาพ
	 *                             , รวมทุนแนบท้ายเดิม(Check Max)
	 *
	 **/
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static Vector getPolicySumAccumData(String poplicy_status) {
		Vector v = new Vector();
		try {

			JSONArray PolicyStatusList = new JSONArray();
			JSONObject PolicyStatus = new JSONObject();
			JSONArray memList = new JSONArray();
			JSONObject memData = new JSONObject();

			JSONObject MemberGroup = (JSONObject) new JSONParser()
					.parse(new FileReader(new File(PATH + "PolicySumAccumData.json")));

			PolicyStatusList = (JSONArray) MemberGroup.get("PolicySumAccum_Data");

			for (int i = 0; i < PolicyStatusList.size(); i++) {
				PolicyStatus = (JSONObject) PolicyStatusList.get(i);

				if(poplicy_status.compareTo(PolicyStatus.get("Policy_status").toString())==0) {
					System.out.println("Result Data 'Status' = " + PolicyStatus.get("Policy_status").toString());
	 				System.out.println(M.stou("รวมทุนคุ้มครอง(อำนาจรับประกัน)")+" (Is_insure_sum) 		: " + PolicyStatus.get("Is_insure_sum").toString());
	 				System.out.println(M.stou("รวมทุนตรวจสุขภาพ           ")+" (Is_med_sum)   	 	: " + PolicyStatus.get("Is_rider_sum").toString());
	 				System.out.println(M.stou("รวมทุนซื้อแนบท้าย            ")+" (Is_rider_sum) 		: " + PolicyStatus.get("Is_med_sum").toString());
	 				System.out.println(M.stou("รวมทุนแนบท้ายเดิม(Check Max)")+" (Is_sum_for_rider)		: " + PolicyStatus.get("Is_sum_for_rider").toString());
	 				
					v.add(new String[] { PolicyStatus.get("Policy_status").toString()
							, PolicyStatus.get("Is_insure_sum").toString()
							, PolicyStatus.get("Is_med_sum").toString()
							, PolicyStatus.get("Is_rider_sum").toString()
							, PolicyStatus.get("Is_sum_for_rider").toString() });
					return v;
				}
				
			}
			
		} catch (Exception e) {

			System.out.println("-----------Error PolicySumAccumData File------------");
			e.printStackTrace();
		}
		return v;

	}
	
	/**
	 * getPolicySumAccumData() ทำการหาค่าข้อมูลภาคผนวกจากไฟล์
	 * "PolicySumAccumData.json"
	 * 
	 ** @param ประเภทแบบประกัน
	 ** @param สถานะกรรมธรรม์
	 *
	 ** @return Vector - String [] Is_rider_sum, Is_med_sum, Is_sum_for_rider,
	 *         Is_insure_sum ****
	 *
	 **/
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static Vector getPolicySumAccumData(String covCatId, String policyStatus) {
		Vector v = new Vector();
		try {

			JSONArray PolicySumAccum = new JSONArray();
			JSONObject psaData = new JSONObject();

			Object obj = new JSONParser().parse(new FileReader(new File(PATH + "PolicySumAccumData.json")));
			JSONObject MemberGroup = (JSONObject) obj;

			PolicySumAccum = (JSONArray) MemberGroup.get("PolicySumAccum_Data");

			for (int i = 0; i < PolicySumAccum.size(); i++) {
				psaData = (JSONObject) PolicySumAccum.get(i);

				if (M.cmps(covCatId, psaData.get("Cov_cat_id").toString()) == 0
						&& M.cmps(policyStatus, psaData.get("Policy_status").toString()) == 0) {

					
					v.add(new String[] { psaData.get("Is_rider_sum").toString(), psaData.get("Is_med_sum").toString(),
							psaData.get("Is_sum_for_rider").toString(), psaData.get("Is_insure_sum").toString() });
				}
			}
			return v;
		} catch (Exception e) {
			System.out.println(
					"-----------Error PolicySumAccum_Data File or Not Match Data(Cov_cat_id,Policy_status)------------");
			e.printStackTrace();
		}
		return v;

	}
	public static void main(String[] args) {
		System.out.println( "*********** START TEST    getPolicySumAccumData   ************ ");
	    int sizee=0;
	    Vector polist = getPolicySumAccumData("R");
//	 	if (polist.size() == 0) {
//	 			System.out.println("Not Found Result Data : " + "");
//	 	} else {
//	 			for (int i = 0; i < polist.size(); i++)
//	 			{
//	 				String[] po = (String[]) polist.get(i);
////	 				System.out.println("Result Data Status is	 		: " + po[0]);
////	 				System.out.println("Is_rider_sum 		: " + po[1]);
////	 				System.out.println("Is_med_sum   	 	: " + po[2]);
////	 				System.out.println("Is_sum_for_rider	: " + po[3]);
////	 				System.out.println("Is_insure_sum 		: " + po[4]);
//	 			}
//	 				
//	 				//
//	 	}
	    System.out.println( "**********  END TEST      getPolicySumAccumData   ************ ");	   	
	    System.out.println("********************************************************");
	}
}
