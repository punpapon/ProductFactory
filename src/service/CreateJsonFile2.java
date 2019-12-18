package service;

import java.io.BufferedReader;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.RandomAccessFile;
import java.util.ArrayList;
import java.util.List;

import org.json.JSONArray;
import org.json.JSONObject;



import manit.M;

public class CreateJsonFile2 {
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		CreateJsonFile2 callmethod = new CreateJsonFile2();
		String filename  = "C:\\Users\\PC-Suttipong\\Desktop\\CSVFile\\fixedBranch\\fixedBranch_PL66.csv";
		String code = "PL66";
		callmethod.fixedBranch(filename, code);
		/*if(args[0].charAt(0) == '1') {
			callmethod.baseplan(args[1], args[2]);
		}
		if (args[0].charAt(0) == '2') {
			callmethod.riderPlan(args[1], args[2]);
		}
		if (args[0].charAt(0) == '3') {
			callmethod.step_increment(args[1], args[2]);
		}
		if (args[0].charAt(0) == '4') {
			callmethod.coop_Branch(args[1], args[2]);
		}
		if (args[0].charAt(0) == '5') {
			callmethod.coop_Min_Loan(args[1], args[2]);
		}
		if (args[0].charAt(0) == '6') {
			callmethod.coop_PolicyCL(args[1], args[2]);
		}
		if (args[0].charAt(0) == '7') {
			callmethod.volumn_Condition(args[1], args[2]);
		}*/
	}
	//PRODUCT & BASE PLAN
	private void baseplan(String fileName, String code) {
		String csvFile = fileName;
		BufferedReader br = null;
		String line = "";
		String cvsSplitBy = "!";
		String[] valueCSV = null;
		try {
			br = new BufferedReader(new FileReader(csvFile));
			while ((line = br.readLine()) != null) {
				valueCSV = line.split(cvsSplitBy);
			}
			JSONObject obj = new JSONObject();
			for (int i = 0; i < valueCSV.length; i++) {
				obj.put("planCode", M.stou(valueCSV[0]));
				obj.put("planName", M.stou(valueCSV[1]));
				obj.put("planName2", M.stou(valueCSV[2]));
				obj.put("isFixedBranch","");
				obj.put("policyCL","");
				obj.put("mainBeneficiary","");
				obj.put("pPayYear", M.stou(valueCSV[3]));
				obj.put("pEndowmentYear", M.stou(valueCSV[4]));
				obj.put("minEndowmentYear","");
				obj.put("maxEndowmentYear","");
				obj.put("payType",M.stou(valueCSV[5]));
				obj.put("endowmentType",M.stou(valueCSV[6]));
				obj.put("accident",M.stou(valueCSV[7]));
				obj.put("disable",M.stou(valueCSV[8]));
				obj.put("discount",M.stou(valueCSV[9]));
				obj.put("matureAmount",M.stou(valueCSV[10]));
				obj.put("minAge",M.stou(valueCSV[11]));
				obj.put("maxAge",M.stou(valueCSV[12]));
				obj.put("hasMaxCoverage","");
				obj.put("maxInsureAge","");
				obj.put("ageCalFormula","");
				obj.put("minLoanAmount","");
				obj.put("maxLoanAmount","");
				obj.put("minLoanInterestRate","");
				obj.put("maxLoadInterestRate","");
				obj.put("minSum",M.stou(valueCSV[13]));
				obj.put("maxSumType","");
				obj.put("maxSum",M.stou(valueCSV[14]));
				obj.put("maxSumFactor","");
				obj.put("maxSumUnit","");
				obj.put("maxSumVolumn","");
				obj.put("lifePay",M.stou(valueCSV[15]));
				obj.put("accPay",M.stou(valueCSV[16]));
				obj.put("dividend",M.stou(valueCSV[17]));
				obj.put("surrender",M.stou(valueCSV[18]));
				obj.put("apl",M.stou(valueCSV[19]));
				obj.put("canAPL","");
				obj.put("canSurrender","");
				obj.put("canExpandTime","");
				obj.put("canCloseAccount","");
				obj.put("minPremium",M.stou(valueCSV[20]));
				obj.put("maxPremium",M.stou(valueCSV[21]));
				obj.put("hasEM","");
				obj.put("minEM","");
				obj.put("maxEM","");
				obj.put("emStepIncrement","");
				obj.put("interestRate",M.stou(valueCSV[22]));
				obj.put("matureInterest",M.stou(valueCSV[23]));
				obj.put("loanInterest",M.stou(valueCSV[24]));
				obj.put("deVoid", M.stou(valueCSV[25]));
				obj.put("policyType",M.stou(valueCSV[26]));
				obj.put("approvedBy", M.stou(valueCSV[27]));
				obj.put("issueDate", M.stou(valueCSV[28]));
				obj.put("endDate", M.stou(valueCSV[29]));
				obj.put("modeAvailable", M.stou(valueCSV[30]));
				obj.put("taxDeductible", M.stou(valueCSV[31]));
				obj.put("maxSumTaxDeductible", M.stou(valueCSV[22]));
				obj.put("canCalSumFromPrem", "");
				obj.put("canCalPremFromSum","");
				obj.put("sumStepIncrement", "");
				obj.put("premStepIncrement","");
				obj.put("calSumFromPremMode","");
				obj.put("calPremFromSumMode","");
				//obj.put("modeAvailable","");
				obj.put("occupationClass","");
			//	obj.put("taxDeductible","");
			//	obj.put("maxSumTaxDeductible","");
				obj.put("taxDeductibleCondition","");
				obj.put("stepCode", M.stou(valueCSV[33]));
				obj.put("isPackagePlan", M.stou(valueCSV[34]));
				obj.put("calType", M.stou(valueCSV[35]));
				obj.put("sex", M.stou(valueCSV[36]));
				obj.put("amtOfCoverage", M.stou(valueCSV[37]));
				obj.put("pensionAge",M.stou(valueCSV[38]));
				obj.put("riderType", M.stou(valueCSV[39]));
				obj.put("medAppendix","");
				obj.put("gatherSumToCheckHealth","");
				obj.put("showOldPolicy","");
				obj.put("gatherSumToCheckUNWAuthority","");
				obj.put("verifyClaim","");
				obj.put("verifyIC","");
				obj.put("verifyICBA","");
				obj.put("verifyICFI","");
				obj.put("verifyBlacklist","");
				obj.put("verifyVolumnInPerson","");
				obj.put("volumnInPersonCondition","");
				obj.put("verifyVolumnInCo","");
				obj.put("volumnInCoCondition","");
				obj.put("canFreelook","");
				obj.put("freelookDateType","");
				obj.put("freelookDay","");
				obj.put("freelookPolicyFee","");
				obj.put("freelookCreditFee","");
				obj.put("freelookMedFee","");
				obj.put("freelookOtherFee","");
				obj.put("canChangeSum","");
				obj.put("changeSumCondition","");
				obj.put("canChangePlan","");
				obj.put("changePlanCondition","");
				obj.put("canChangePackage","");
				obj.put("changePackageCondition","");
				obj.put("canChangeMode","");
				obj.put("changeModeCondition","");
				obj.put("canPolicyLoan","");
				obj.put("policyLoanInterestRate","");
				obj.put("hasSaleCommission","");
				obj.put("saleCommissionCondition","");
				obj.put("hasSaleOverride","");
				obj.put("saleOverrideCondition","");
				obj.put("hasSaleIncentive","");
				obj.put("saleIncentiveCondition","");
				obj.put("hasSaleVolumn","");
				obj.put("saleVolumnCondition","");
				obj.put("hasMarketExpense","");
				obj.put("marketingExpenseCondition","");
				obj.put("policyPrintingBy","");
				
				obj.put("fixedBranch",M.stou(valueCSV[40]));
				obj.put("branchPolicyCL",M.stou(valueCSV[41]));
				obj.put("disCountRateCondition",M.stou(valueCSV[42]));
				obj.put("minLoanAmountCondition",M.stou(valueCSV[43]));
				obj.put("maxLoanCondition",M.stou(valueCSV[44]));
				obj.put("emStepIncrement",M.stou(valueCSV[45]));
				obj.put("sumStepIncrement",M.stou(valueCSV[46]));
				obj.put("premStepIncrement",M.stou(valueCSV[47]));
				obj.put("volumnInPersonCondition",M.stou(valueCSV[48]));
			}
			
			FileWriter file = new FileWriter("C:\\Users\\PC-Suttipong\\Desktop\\JsonFile\\Plan"+code+".json");
			file.write(obj.toString());
			file.close();
			CreateJsonFile2 callmethod = new CreateJsonFile2();
			String fileNameJson = "C:\\Users\\PC-Suttipong\\Desktop\\JsonFile\\Plan"+code+".json";
			callmethod.setPrettyJson(fileNameJson,code);
		// TODO Auto-generated method stub
		}catch (Exception e) {
			// TODO: handle exception
		}
	}
	/////////////////////////////////////////////////////////////////////////////////////////////////
	//fixedBranch
	private void fixedBranch(String fileName, String code) {
		String csvFile = fileName;
		BufferedReader br = null;
		String line = "";
		String cvsSplitBy = "!";
		String[] valueCSV = null;
		try {
			JSONArray jsonArray = new JSONArray();
			JSONObject mainObj = new JSONObject();
			br = new BufferedReader(new FileReader(csvFile));
			while ((line = br.readLine()) != null) {
					JSONObject obj = new JSONObject();
					valueCSV = line.split(cvsSplitBy);
					obj.put("branchCode", M.stou(valueCSV[0]));
					obj.put("branchName", M.stou(valueCSV[1]));
					jsonArray.put(obj);
			}
			
			mainObj.put("fixedBranch", jsonArray);
			FileWriter file = new FileWriter("C:\\Users\\PC-Suttipong\\Desktop\\JsonFile\\fixedBranch\\Plan"+code+".json");
			file.write(mainObj.toString());
			file.close();
			
			CreateJsonFile2 callmethod = new CreateJsonFile2();
			String fileNameJson = "C:\\Users\\PC-Suttipong\\Desktop\\JsonFile\\fixedBranch\\Plan"+code+".json";
			callmethod.setPrettyJson(fileNameJson,code);
		// TODO Auto-generated method stub
		}catch (Exception e) {
			// TODO: handle exception
		}
	}
	
	/////////////////////////////////////////////////////////////////////////////////////////////////
	//RIDER PLAN
	private void riderPlan(String fileName, String code) {
		String csvFile = fileName;
		BufferedReader br = null;
		String line = "";
		String cvsSplitBy = "!";
		String[] valueCSV = null;
		try {
			br = new BufferedReader(new FileReader(csvFile));
			while ((line = br.readLine()) != null) {
				valueCSV = line.split(cvsSplitBy);
			}
			JSONObject obj = new JSONObject();
			for (int i = 0; i < valueCSV.length; i++) {
				obj.put("ridercode", M.stou(valueCSV[0]));
				obj.put("ridertype", M.stou(valueCSV[1]));
				obj.put("ridername", M.stou(valueCSV[2]));
				obj.put("fullname", M.stou(valueCSV[3]));
				obj.put("minage", M.stou(valueCSV[4]));
				obj.put("maxage",M.stou(valueCSV[5]));
				obj.put("minsum",M.stou(valueCSV[6]));
				obj.put("maxsum",M.stou(valueCSV[7]));
				obj.put("riderminsum",M.stou(valueCSV[8]));
				obj.put("ridermaxsum",M.stou(valueCSV[9]));
				obj.put("riderstep",M.stou(valueCSV[10]));
				obj.put("status",M.stou(valueCSV[11]));
				obj.put("gender",M.stou(valueCSV[12]));
				obj.put("issuedate",M.stou(valueCSV[13]));
				obj.put("endDate",M.stou(valueCSV[14]));
				obj.put("minParentAge",M.stou(valueCSV[15]));
				obj.put("maxParentAge",M.stou(valueCSV[16]));
				obj.put("adjustPrem",M.stou(valueCSV[17]));
				obj.put("validRiderSum",M.stou(valueCSV[18]));
				obj.put("validSales",M.stou(valueCSV[19]));
				obj.put("canVoid",M.stou(valueCSV[20]));
				obj.put("canCancel",M.stou(valueCSV[21]));
			}
			FileWriter file = new FileWriter("/home/tleuser/Desktop/JsonFile/Plan"+code+".json");
			file.write(obj.toString());
			file.close();
			
			CreateJsonFile2 callmethod = new CreateJsonFile2();
			String fileNameJson = "/home/tleuser/Desktop/JsonFile/Plan"+code+".json";
			callmethod.setPrettyJson(fileNameJson,code);
		// TODO Auto-generated method stub
		}catch (Exception e) {
			// TODO: handle exception
		}
	}
	//STEP INCREMENT
	private void step_increment(String fileName, String code) {
		String csvFile = fileName;
		BufferedReader br = null;
		String line = "";
		String cvsSplitBy = "!";
		String[] valueCSV = null;
		try {
			br = new BufferedReader(new FileReader(csvFile));
			while ((line = br.readLine()) != null) {
				valueCSV = line.split(cvsSplitBy);
			}
			JSONObject obj = new JSONObject();
			for (int i = 0; i < valueCSV.length; i++) {
				obj.put("factor", M.stou(valueCSV[0]));
				obj.put("lowerBound", M.stou(valueCSV[1]));
				obj.put("upperBound", M.stou(valueCSV[2]));
				obj.put("volumn", M.stou(valueCSV[3]));
				obj.put("unit", M.stou(valueCSV[4]));
			}
			FileWriter file = new FileWriter("/home/tleuser/Desktop/JsonFile/Plan"+code+".json");
			file.write(obj.toString());
			file.close();
			
			CreateJsonFile2 callmethod = new CreateJsonFile2();
			String fileNameJson = "/home/tleuser/Desktop/JsonFile/Plan"+code+".json";
			callmethod.setPrettyJson(fileNameJson,code);
		// TODO Auto-generated method stub
		}catch (Exception e) {
			// TODO: handle exception
		}
	}
	//COOP BRANCH
	private void coop_Branch(String fileName, String code) {
		String csvFile = fileName;
		BufferedReader br = null;
		String line = "";
		String cvsSplitBy = "!";
		String[] valueCSV = null;
		try {
			br = new BufferedReader(new FileReader(csvFile));
			while ((line = br.readLine()) != null) {
				valueCSV = line.split(cvsSplitBy);
			}
			JSONObject obj = new JSONObject();
			for (int i = 0; i < valueCSV.length; i++) {
				obj.put("branchCode", M.stou(valueCSV[0]));
				obj.put("branchName", M.stou(valueCSV[1]));
			}
			FileWriter file = new FileWriter("/home/tleuser/Desktop/JsonFile/Plan"+code+".json");
			file.write(obj.toString());
			file.close();
			
			CreateJsonFile2 callmethod = new CreateJsonFile2();
			String fileNameJson = "/home/tleuser/Desktop/JsonFile/Plan"+code+".json";
			callmethod.setPrettyJson(fileNameJson,code);
		// TODO Auto-generated method stub
		}catch (Exception e) {
			// TODO: handle exception
		}
	}
	//COOP MIN LOAN
	private void coop_Min_Loan(String fileName, String code) {
		String csvFile = fileName;
		BufferedReader br = null;
		String line = "";
		String cvsSplitBy = "!";
		String[] valueCSV = null;
		try {
			br = new BufferedReader(new FileReader(csvFile));
			while ((line = br.readLine()) != null) {
				valueCSV = line.split(cvsSplitBy);
			}
			JSONObject obj = new JSONObject();
			for (int i = 0; i < valueCSV.length; i++) {
				obj.put("branchCode", M.stou(valueCSV[0]));
				obj.put("minLoanAmount", M.stou(valueCSV[1]));
			}
			FileWriter file = new FileWriter("/home/tleuser/Desktop/JsonFile/Plan"+code+".json");
			file.write(obj.toString());
			file.close();
			
			CreateJsonFile2 callmethod = new CreateJsonFile2();
			String fileNameJson = "/home/tleuser/Desktop/JsonFile/Plan"+code+".json";
			callmethod.setPrettyJson(fileNameJson,code);
		// TODO Auto-generated method stub
		}catch (Exception e) {
			// TODO: handle exception
		}
	}
	
	//COOP POLICYCL
	private void coop_PolicyCL(String fileName, String code) {
		String csvFile = fileName;
		BufferedReader br = null;
		String line = "";
		String cvsSplitBy = "!";
		String[] valueCSV = null;
		try {
			br = new BufferedReader(new FileReader(csvFile));
			while ((line = br.readLine()) != null) {
				valueCSV = line.split(cvsSplitBy);
			}
			JSONObject obj = new JSONObject();
			for (int i = 0; i < valueCSV.length; i++) {
				obj.put("branchCode", M.stou(valueCSV[0]));
				obj.put("policyCL", M.stou(valueCSV[1]));
			}
			FileWriter file = new FileWriter("/home/tleuser/Desktop/JsonFile/Plan"+code+".json");
			file.write(obj.toString());
			file.close();
			
			CreateJsonFile2 callmethod = new CreateJsonFile2();
			String fileNameJson = "/home/tleuser/Desktop/JsonFile/Plan"+code+".json";
			callmethod.setPrettyJson(fileNameJson,code);
		// TODO Auto-generated method stub
		}catch (Exception e) {
			// TODO: handle exception
		}
	}
	//VOLUMN CONDITION
	private void volumn_Condition(String fileName, String code) {
		String csvFile = fileName;
		BufferedReader br = null;
		String line = "";
		String cvsSplitBy = "!";
		String[] valueCSV = null;
		try {
			br = new BufferedReader(new FileReader(csvFile));
			while ((line = br.readLine()) != null) {
				valueCSV = line.split(cvsSplitBy);
			}
			JSONObject obj = new JSONObject();
			for (int i = 0; i < valueCSV.length; i++) {
				obj.put("factorCode", M.stou(valueCSV[0]));
				obj.put("maxVolumn", M.stou(valueCSV[1]));
				obj.put("unit", M.stou(valueCSV[2]));
				obj.put("policyType", M.stou(valueCSV[3]));
				obj.put("channel", M.stou(valueCSV[4]));
			}
			FileWriter file = new FileWriter("/home/tleuser/Desktop/JsonFile/Plan"+code+".json");
			file.write(obj.toString());
			file.close();
			
			CreateJsonFile2 callmethod = new CreateJsonFile2();
			String fileNameJson = "/home/tleuser/Desktop/JsonFile/Plan"+code+".json";
			callmethod.setPrettyJson(fileNameJson,code);
		// TODO Auto-generated method stub
		}catch (Exception e) {
			// TODO: handle exception
		}
	}
	//setPrettyJson
	private void setPrettyJson(String fileName, String code) {
		
		try {
			String write2 = "";
			RandomAccessFile txt = new RandomAccessFile(fileName, "r");
			for(String s = txt.readLine();s != null;s = txt.readLine())
			{
				String text = s.substring(1, s.trim().length()-1);
				String[] arr = text.split(",");
				write2 = "{\n";
				for(String t : arr)
					write2 += t+",\n";
				write2 += "}";
				
			}
			FileOutputStream out = new FileOutputStream(fileName);
			out.write(M.utos(write2));
		} catch (Exception e) {
			// TODO: handle exception
		}
	}
}