package service.underwrite.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.underwrite.Med_exam;
import layout.bean.productfac.underwrite.Med_exam_group;
import layout.bean.productfac.underwrite.Med_exam_rate;
import layout.bean.productfac.underwrite.Txn_med_exam;
import manit.rte.Result;
import service.fnc.RtePath;
import service.fnc.RteResult;

public class MedExamControlData {
	private RteResult rteResult;
	private final String RTE_PATH = RtePath.RTE.getValue();

	/**
	 * explain : ค้นหาข้อมูลทั้งหมด
	 * 
	 * @return ArrayList<Coverage> : coverage.coverage
	 * @throws Exception
	 */
	public ArrayList<Med_exam> searchMedExam(String case_type) throws Exception {
		// System.out.println("-------------------------/"+case_type);
		Object[] param = new Object[] { "ALL", new String[] { case_type } };
		String rte = RTE_PATH + ".unw.RteUWMedExamS";
		System.out.println(rte);
		this.rteResult = new RteResult(rte, param);
		Result result = rteResult.searchValuesResultData();
		ArrayList<Med_exam> listMedExam = (ArrayList<Med_exam>) result.value();
		return listMedExam;
	}

	public ArrayList<Object> searchMedExamST(String case_type) throws Exception {
		// System.out.println("-------------------------/"+case_type);
		Object[] param = new Object[] { "ALL2", new String[] { case_type } };
		String rte = RTE_PATH + ".unw.RteUWMedExamS";
		System.out.println(rte);
		this.rteResult = new RteResult(rte, param);
		Result result = rteResult.searchValuesResultData();
		ArrayList<Object> li = (ArrayList<Object>) result.value();
		return li;
	}
	public ArrayList<Object> searchMedExamSTKey(String case_type,String key) throws Exception {
		// System.out.println("-------------------------/"+case_type);
		Object[] param = new Object[] { "ALL2Key", new String[] { case_type,key } };
		String rte = RTE_PATH + ".unw.RteUWMedExamS";
		System.out.println(rte);
		this.rteResult = new RteResult(rte, param);
		Result result = rteResult.searchValuesResultData();
		ArrayList<Object> li = (ArrayList<Object>) result.value();
		return li;
	}
	public ArrayList<Med_exam> searchMedExamGroup(String case_type) throws Exception {
		System.out.println("-------------------------/" + case_type);
		Object[] param = new Object[] { "GROUP", new String[] { case_type } };
		String rte = RTE_PATH + ".unw.RteUWMedExamS";
		System.out.println(rte);
		this.rteResult = new RteResult(rte, param);
		Result result = rteResult.searchValuesResultData();
		ArrayList<Med_exam> listMedExam = (ArrayList<Med_exam>) result.value();
		return listMedExam;
	}
	public ArrayList<Med_exam> searchMaxMedExamGroup(String case_type) throws Exception {
		System.out.println("-------------------------/" + case_type);
		Object[] param = new Object[] { "MAX", new String[] { case_type } };
		String rte = RTE_PATH + ".unw.RteUWMedExamS";
		System.out.println(rte);
		this.rteResult = new RteResult(rte, param);
		Result result = rteResult.searchValuesResultData();
		ArrayList<Med_exam> listMedExam = (ArrayList<Med_exam>) result.value();
		return listMedExam;
	}

	public ArrayList<Med_exam> searchMedExamGroupDetail(String case_type) throws Exception {
		System.out.println("-------------------------/" + case_type);
		Object[] param = new Object[] { "DETAIL", new String[] { case_type } };
		String rte = RTE_PATH + ".unw.RteUWMedExamS";
		System.out.println(rte);
		this.rteResult = new RteResult(rte, param);
		Result result = rteResult.searchValuesResultData();
		ArrayList<Med_exam> listMedExam = (ArrayList<Med_exam>) result.value();
		return listMedExam;
	}

	public ArrayList<Med_exam> searchMedExamBlood(String case_type) throws Exception {
		if (case_type == "UW") {
			System.out.println("-------------------------/" + case_type);
			Object[] param = new Object[] { "BLOODUW", new String[] { case_type } };
			String rte = RTE_PATH + ".unw.RteUWMedExamS";
			System.out.println(rte);
			this.rteResult = new RteResult(rte, param);
			Result result = rteResult.searchValuesResultData();
			ArrayList<Med_exam> listMedExam = (ArrayList<Med_exam>) result.value();
			return listMedExam;
		} else {
			System.out.println("-------------------------/" + case_type);
			Object[] param = new Object[] { "BLOOD", new String[] { case_type } };
			String rte = RTE_PATH + ".unw.RteUWMedExamS";
			System.out.println(rte);
			this.rteResult = new RteResult(rte, param);
			Result result = rteResult.searchValuesResultData();
			ArrayList<Med_exam> listMedExam = (ArrayList<Med_exam>) result.value();
			return listMedExam;
		}
	}

	public ArrayList<Med_exam> searchMedExamNotBlood(String case_type) throws Exception {
		if (case_type == "UW") {
			System.out.println("-------------------------/" + case_type);
			Object[] param = new Object[] { "NOTBLOODUW", new String[] { case_type } };
			String rte = RTE_PATH + ".unw.RteUWMedExamS";
			System.out.println(rte);
			this.rteResult = new RteResult(rte, param);
			Result result = rteResult.searchValuesResultData();
			ArrayList<Med_exam> listMedExam = (ArrayList<Med_exam>) result.value();
			return listMedExam;
		} else {
			System.out.println("-------------------------/" + case_type);
			Object[] param = new Object[] { "NOTBLOOD", new String[] { case_type } };
			String rte = RTE_PATH + ".unw.RteUWMedExamS";
			System.out.println(rte);
			this.rteResult = new RteResult(rte, param);
			Result result = rteResult.searchValuesResultData();
			ArrayList<Med_exam> listMedExam = (ArrayList<Med_exam>) result.value();
			return listMedExam;
		}

	}

	public void insertMedexam(ArrayList<Med_exam> listProduct) throws Exception {
		boolean status = true;
		try {
			Object[] param = new Object[] { "INSERT", listProduct };
			this.rteResult = new RteResult(RTE_PATH + ".unw." + "RteUWMedExam", param);
			rteResult.saveData();
		} catch (Exception e) {
			status = false;
			throw e;
		}
		System.out.println("status >>> " + status);
	}

	public void insertTxnMedexam(ArrayList<Txn_med_exam> listProduct) throws Exception {
		boolean status = true;
		try {
			Object[] param = new Object[] { "INSERT", listProduct };
			this.rteResult = new RteResult(RTE_PATH + ".unw." + "RteUWTxnMedExamIU", param);
			rteResult.saveData();
		} catch (Exception e) {
			status = false;
			throw e;
		}
		System.out.println("status >>> " + status);
	}

	// HAVE ONLY ONE CASE THEN PUT CODE FROM ANOTHER TABLE IN HERE
	public void insertMedexamRate(ArrayList<Med_exam_rate> listProduct) throws Exception {
		boolean status = true;
		try {
			Object[] param = new Object[] { "INSERT", listProduct };
			this.rteResult = new RteResult(RTE_PATH + ".unw." + "RteUWMedExamRate", param);
			rteResult.saveData();
		} catch (Exception e) {
			status = false;
			throw e;
		}
		System.out.println("status >>> " + status);
	}

	public void insertMedexamGroup(ArrayList<Med_exam_group> listProduct) throws Exception {
		boolean status = true;
		try {
			Object[] param = new Object[] { "INSERT", listProduct };
			this.rteResult = new RteResult(RTE_PATH + ".unw." + "RteUWMedExamGroup", param);
			rteResult.saveData();
		} catch (Exception e) {
			status = false;
			throw e;
		}
		System.out.println("status >>> " + status);
	}

	public void deleteMedexam(ArrayList<Med_exam> listProduct) throws Exception {
		boolean status = true;
		try {
			Object[] param = new Object[] { "DELETE", listProduct };
			this.rteResult = new RteResult(RTE_PATH + ".unw." + "RteUWMedExam", param);
			rteResult.saveData();
		} catch (Exception e) {
			status = false;
			throw e;
		}
		System.out.println("status >>> " + status);
	}

	// HAVE ONLY ONE CASE THEN PUT CODE FROM ANOTHER TABLE IN HERE
	public void deleteMedexamRate(ArrayList<Med_exam_rate> listProduct) throws Exception {
		boolean status = true;
		try {
			Object[] param = new Object[] { "DELETE", listProduct };
			this.rteResult = new RteResult(RTE_PATH + ".unw." + "RteUWMedExamRate", param);
			rteResult.saveData();
		} catch (Exception e) {
			status = false;
			throw e;
		}
		System.out.println("status >>> " + status);
	}

}