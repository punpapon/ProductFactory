package servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.math.BigDecimal;
import java.sql.Date;
import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Calendar;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.james.mime4j.dom.datetime.DateTime;
import org.json.JSONArray;
import org.json.JSONObject;

import layout.bean.productfac.beanset.AppendixVersionALLAccessData;
import layout.bean.productfac.underwrite.Appendix;
import layout.bean.productfac.underwrite.Appendix_age_range;
import layout.bean.productfac.underwrite.Appendix_agent_tier;
import layout.bean.productfac.underwrite.Appendix_exam;
import layout.bean.productfac.underwrite.Appendix_product;
import layout.bean.productfac.underwrite.Appendix_sum_accum;
import layout.bean.productfac.underwrite.Appendix_sum_range;
import layout.bean.productfac.underwrite.Appendix_version;
import layout.bean.productfac.underwrite.Med_exam;
import layout.bean.productfac.underwrite.Med_exam_group;
import layout.bean.productfac.underwrite.Med_exam_rate;
import layout.bean.productfac.underwrite.Policy_status_accum;
import layout.bean.productfac.underwrite.Txn_appendix_product;
import layout.bean.productfac.underwrite.Txn_appendix_sum_accum;
import layout.bean.productfac.underwrite.Txn_appendix_version;
import layout.bean.productfac.underwrite.Txn_approve;
import layout.bean.productfac.underwrite.Txn_med_exam;
import layout.bean.productfac.underwrite.Txn_policy_status_accum;
import layout.bean.productfac.underwrite.Txn_underwrite;
import service.BasePlanCL_SaveData_Service;
import service.FreezePolicyValue;
import service.fnc.ConstantValues;
import service.fnc.PDFFnc;
import service.underwrite.MedExamAccessData;
import service.underwrite.ctrl.MainUnderWriteSaveDateService;
import service.underwrite.ctrl.MainUnderWriteService;
import utility.personnel.tlhrms.EmployeeInfo;

@WebServlet("/UW_SaveData_Servlet")
public class UW_SaveData_Servlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private String userId;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public UW_SaveData_Servlet() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// ======================================================
		HttpSession session = request.getSession();
		String getuserID = session.getAttribute("userID").toString();
		if (!getuserID.equals("")) {
			userId = getuserID;
		} else {
			System.out.println("================== NO USER ====================");
		}

		response.setCharacterEncoding("UTF-8");
		PrintWriter out = response.getWriter();
		System.out.println("======= Save BasePlanCL ======");
		String responseText = "";
		String passInsurance = request.getParameter("passInsurance");
		ConstantValues.COV_CODE = passInsurance;
		try {

			if (request.getParameter("method").equals("Tab_MedExam")) {
				responseText = save_MedExamTab1(request, response);
			} else if (request.getParameter("method").equals("Tab_DraftMedExam")) {
				responseText = save_DraftMedExamTab1(request, response);
			} else if (request.getParameter("method").equals("Tab_MedExamReqApprove")) {
				responseText = save_ReqMedExamTab1(request, response);
			} else if (request.getParameter("method").equals("Tab_MedExamReqEdit")) {
				responseText = save_ReqEditMedExamTab1(request, response);
			} else if (request.getParameter("method").equals("Tab_MedExamApprove")) {
				responseText = save_ApproveMedExamTab1(request, response);
			} else if (request.getParameter("method").equals("Tab_MedExamApproveEdit")) {
				responseText = save_ApproveEditMedExamTab1(request, response);
			} else if (request.getParameter("method").equals("Tab_MedExamNotApprove")) {
				responseText = save_NotApproveMedExamTab1(request, response);
			} else if (request.getParameter("method").equals("Tab_MedExamNotApproveEdit")) {
				responseText = save_ApproveMedExamTab1(request, response);
			} else if (request.getParameter("method").equals("Tab_MedExamGroup")) {
				responseText = save_MedExamTab2(request, response);
			} else if (request.getParameter("method").equals("Tab_Appendix_SA")) {
				responseText = save_Appendix_Sum_Accum_Tab1(request, response);
			} else if (request.getParameter("method").equals("Tab_DraftAppendix_SA")) {
				responseText = save_DraftAppendix_Sum_Accum_Tab1(request, response);
			} else if (request.getParameter("method").equals("Tab_ReqAppendix_SA")) {
				responseText = save_ReqAppendix_Sum_Accum_Tab1(request, response);
			} else if (request.getParameter("method").equals("Tab_ReqEditAppendix_SA")) {
				responseText = save_ReqEditAppendix_Sum_Accum_Tab1(request, response);
			} else if (request.getParameter("method").equals("Tab_ApproveAppendix_SA")) {
				responseText = save_ApproveAppendix_Sum_Accum_Tab1(request, response);
			} else if (request.getParameter("method").equals("Tab_ApproveEditAppendix_SA")) {
				responseText = save_ApproveEditAppendix_Sum_Accum_Tab1(request, response);
			} else if (request.getParameter("method").equals("Tab_NotApproveAppendix_SA")) {
				responseText = save_NotApproveAppendix_Sum_Accum_Tab1(request, response);
			} else if (request.getParameter("method").equals("Tab_NotApproveEditAppendix_SA")) {
				responseText = save_ApproveAppendix_Sum_Accum_Tab1(request, response);
			} else if (request.getParameter("method").equals("Tab_PolicyStatus")) {
				responseText = save_PolicyStaus_G(request, response);
			} else if (request.getParameter("method").equals("Tab_PolicyStatusNew")) {
				responseText = save_PolicyStausNew_G(request, response);
			} else if (request.getParameter("method").equals("Tab_PolicyStatusReq")) {
				responseText = save_PolicyStausReq_G(request, response);
			} else if (request.getParameter("method").equals("Tab_PolicyStatusReqEdit")) {
				responseText = save_PolicyStausReqEdit_G(request, response);
			} else if (request.getParameter("method").equals("Tab_PolicyStatusApprove")) {
				responseText = save_PolicyStausApprove_G(request, response);
			} else if (request.getParameter("method").equals("Tab_PolicyStatusApproveEdit")) {
				responseText = save_PolicyStausApproveEdit_G(request, response);
			} else if (request.getParameter("method").equals("Tab_PolicyStatusNotApprove")) {
				responseText = save_PolicyStausNotApprove_G(request, response);
			} else if (request.getParameter("method").equals("Tab_PolicyStatusNotApproveEdit")) {
				responseText = save_PolicyStausApprove_G(request, response);
			} else if (request.getParameter("method").equals("Tab_SettingAppendix_Version1")) {
				responseText = save_Tab_SettingAppendix1(request, response);
			} else if (request.getParameter("method").equals("Tab_DraftSettingAppendix_Version1")) {
				responseText = save_Tab_DraftSettingAppendix1(request, response);
			} else if (request.getParameter("method").equals("Tab_ReqSettingAppendix_Version1")) {
				responseText = save_Tab_ReqSettingAppendix1(request, response);
			} else if (request.getParameter("method").equals("Tab_ReqEditSettingAppendix_Version1")) {
				responseText = save_Tab_ReqEditSettingAppendix1(request, response);
			} else if (request.getParameter("method").equals("Tab_ApproveSettingAppendix_Version1")) {
				responseText = save_Tab_ApproveSettingAppendix1(request, response);
			} else if (request.getParameter("method").equals("Tab_ApproveEditSettingAppendix_Version1")) {
				responseText = save_Tab_ApproveEditSettingAppendix1(request, response);
			} else if (request.getParameter("method").equals("Tab_NotApproveSettingAppendix_Version1")) {
				responseText = save_Tab_NotApproveSettingAppendix1(request, response);
			} else if (request.getParameter("method").equals("Tab_NotApproveEditSettingAppendix_Version1")) {
				responseText = save_Tab_NotApproveEditSettingAppendix1(request, response);
			} else if (request.getParameter("method").equals("Tab_MoveAppendix_Version2")) {
				responseText = save_ApenddixProductTab2_V02(request, response);
			} else if (request.getParameter("method").equals("Tab_Delete_All_Txn")) {
				responseText = delete_ApenddixProductTab2_V02(request, response);
			} else if (request.getParameter("method").equals("Tab_RequestMoveAppendix_Version2")) {
				responseText = save_RequestApenddixProductTab2(request, response);
			} else if (request.getParameter("method").equals("Tab_ApproveMoveAppendix_Version2")) {
				responseText = save_ApproveApenddixProductTab2(request, response);
			} else if (request.getParameter("method").equals("Tab_NotApproveMoveAppendix_Version2")) {
				responseText = save_NotApproveApenddixProductTab2(request, response);
			}
			out.print(responseText);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	public String save_MedExamTab1(HttpServletRequest request, HttpServletResponse response) throws Exception { // mortality_Tli
		MainUnderWriteSaveDateService settoService = new MainUnderWriteSaveDateService();

		String medexam_str = request.getParameter("medexam_data");
		JSONArray jsonArr_medexam = new JSONArray(medexam_str);
		ArrayList<Med_exam> listmedexam = new ArrayList<>();
		ArrayList<Med_exam_rate> listmedexamRate = new ArrayList<>();
		ArrayList<Txn_med_exam> listmedexamTxn = new ArrayList<>();
		
		ArrayList<Txn_underwrite> listtxnuw = new ArrayList<>();
		ArrayList<Txn_underwrite> maxlisttxnuw = new ArrayList<>();
		ArrayList<Txn_approve> listtxnappr = new ArrayList<>();
		MainUnderWriteService mis = new MainUnderWriteService();
		int new_id = 0;
		//int new_id = 0;
		new_id = Integer.parseInt(request.getParameter("Txn_id").length() == 0 ? "0" : request.getParameter("Txn_id"));
		if (jsonArr_medexam.length() > 0 && new_id == 0) {
			for (int i = 0; i < jsonArr_medexam.length(); i++) {
				JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
				new_id = Integer.parseInt(
						jsonObj_med.getString("Txn_id").length() == 0 ? "0" : jsonObj_med.getString("Txn_id"));

			}
		}
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			Med_exam med = new Med_exam();
			Med_exam_rate medr = new Med_exam_rate();
			if (true) {
				// MEDEXAM
				med.setExam_code(jsonObj_med.getString("Exam_code"));
				med.setName_abb(jsonObj_med.getString("Name_abb"));
				med.setName_th(jsonObj_med.getString("Name_th"));
				med.setExam_type(jsonObj_med.getString("Exam_type"));
				med.setIs_active(jsonObj_med.getBoolean("Is_active"));
				med.setIs_approved(jsonObj_med.getBoolean("Is_approved"));
				med.setIs_uw(jsonObj_med.getBoolean("Is_UW"));
				med.setUser_code(userId);
				med.setUpdate_time(getCurrentTimestamp());

				// MEDEXAMRATE
				medr.setExam_code(jsonObj_med.getString("Exam_code"));
				// medr.setRate_amt(new BigDecimal(jsonObj_med.getString("Rate_amt")));
				medr.setRate_amt(new BigDecimal(jsonObj_med.getString("Rate_amt").toString().replace(",", "")));

				medr.setUser_code(userId);

				// SET TIME DATE
				medr.setUpdate_time(getCurrentTimestamp());
				Timestamp ts = new Timestamp(System.currentTimeMillis());
				Date date = new Date(ts.getTime());
				medr.setEff_date(date);
				String str = "9456-12-31";
				Date date3 = Date.valueOf(str);
				medr.setExp_date(date3);

			}
			listmedexam.add(med);
			listmedexamRate.add(medr);
			System.out.println(medr);
		}
		
//		for (int i = 0; i < jsonArr_medexam.length(); i++) {
//			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
//			// Med_exam med = new Med_exam();
//			Txn_med_exam medTxn = new Txn_med_exam();
//			Med_exam_rate medr = new Med_exam_rate();
//			if (true) {
//				// MEDEXAM
//				medTxn.setTxn_id(new_id);
//				medTxn.setExam_code(jsonObj_med.getString("Exam_code"));
//				medTxn.setName_abb(jsonObj_med.getString("Name_abb"));
//				medTxn.setName_th(jsonObj_med.getString("Name_th"));
//				medTxn.setExam_type(jsonObj_med.getString("Exam_type"));
//				medTxn.setIs_active(true);
//				medTxn.setIs_approved(jsonObj_med.getBoolean("Is_approved"));
//				medTxn.setIs_uw(jsonObj_med.getBoolean("Is_UW"));
//				medTxn.setUser_code(userId);
//				medTxn.setUpdate_time(getCurrentTimestamp());
//
//				Timestamp ts = new Timestamp(System.currentTimeMillis());
//				Date date = new Date(ts.getTime());
//
//				Calendar c = Calendar.getInstance();
//				c.setTime(date);
//				c.add(Calendar.YEAR, 543);
//				java.util.Date newDate = c.getTime();
//				java.sql.Date sqlDate = new java.sql.Date(newDate.getTime());
//				medTxn.setEff_date(sqlDate);
//				medTxn.setRate_amt(new BigDecimal(jsonObj_med.getString("Rate_amt").toString().replace(",", "")));
//				String str = "9999-12-31";
//				Date date3 = Date.valueOf(str);
//				medTxn.setExp_date(date3);
//
//				// MEDEXAMRATE
//				medr.setExam_code(jsonObj_med.getString("Exam_code"));
//				medr.setUser_code(userId);
//				// SET TIME DATE
//				medr.setUpdate_time(getCurrentTimestamp());
//				medr.setEff_date(date);
//
//			}
//			listmedexamTxn.add(medTxn);
//		}
		settoService.setMedExamALL(listmedexam, listmedexamRate);
		//settoService.setMedExamALLTxn(listmedexamTxn, listmedexamRate);
		return String.valueOf(new_id);
	}

	public String save_DraftMedExamTab1(HttpServletRequest request, HttpServletResponse response) throws Exception { // mortality_Tli
		MainUnderWriteSaveDateService settoService = new MainUnderWriteSaveDateService();

		String medexam_str = request.getParameter("medexam_data");
		JSONArray jsonArr_medexam = new JSONArray(medexam_str);
		ArrayList<Med_exam> listmedexam = new ArrayList<>();
		ArrayList<Txn_med_exam> listmedexamTxn = new ArrayList<>();
		ArrayList<Med_exam_rate> listmedexamRate = new ArrayList<>();

		JSONObject responsejson = new JSONObject();
		ArrayList<Txn_underwrite> listtxnuw = new ArrayList<>();
		ArrayList<Txn_underwrite> maxlisttxnuw = new ArrayList<>();
		ArrayList<Txn_approve> listtxnappr = new ArrayList<>();
		MainUnderWriteService mis = new MainUnderWriteService();
		int new_id = 0;
		new_id = Integer.parseInt(request.getParameter("Txn_id").length() == 0 ? "0" : request.getParameter("Txn_id"));
		if (jsonArr_medexam.length() > 0 && new_id == 0) {
			for (int i = 0; i < jsonArr_medexam.length(); i++) {
				JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
				new_id = Integer.parseInt(
						jsonObj_med.getString("Txn_id").length() == 0 ? "0" : jsonObj_med.getString("Txn_id"));

			}
		}
		if (jsonArr_medexam.length() > 0 && new_id == 0) {
			maxlisttxnuw = mis.getTxn_underwrite("");
			if (maxlisttxnuw.size()> 0) {
				new_id = maxlisttxnuw.get(0).getTxn_id() + 1;
			}else {
				new_id = 1;
			}
			// GEN HEADER TXN
			Txn_underwrite txn = new Txn_underwrite();
			txn.setTxn_type("MED_EXAM");
			txn.setTxn_id(new_id);
			txn.setTxn_status("NEW");
			txn.setUser_code(userId);
			txn.setUpdate_time(getCurrentTimestamp());
			listtxnuw.add(txn);
			settoService.genTxnUnderwrite(listtxnuw);
			responsejson.put("Txn_Data", new_id);
			// responseText = responsejson.toString();

			// GEN TXN Approve
			Txn_approve txna = new Txn_approve();
			txna.setTxn_id(new_id);
			txna.setTxn_status("NEW");
			txna.setUser_code(userId);
			txna.setUpdate_time(getCurrentTimestamp());
			txna.setRqst_time(getCurrentTimestamp());
			txna.setRqst_user_code(userId);
			listtxnappr.add(txna);
			settoService.genTxnApprove(listtxnappr);
		}

		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			// Med_exam med = new Med_exam();
			Txn_med_exam medTxn = new Txn_med_exam();
			Med_exam_rate medr = new Med_exam_rate();
			if (true) {
				// MEDEXAM
				medTxn.setTxn_id(new_id);
				medTxn.setExam_code(jsonObj_med.getString("Exam_code"));
				medTxn.setName_abb(jsonObj_med.getString("Name_abb"));
				medTxn.setName_th(jsonObj_med.getString("Name_th"));
				medTxn.setExam_type(jsonObj_med.getString("Exam_type"));
				medTxn.setIs_active(jsonObj_med.getBoolean("Is_active"));
				medTxn.setIs_approved(jsonObj_med.getBoolean("Is_approved"));
				medTxn.setIs_uw(jsonObj_med.getBoolean("Is_UW"));
				medTxn.setUser_code(userId);
				medTxn.setUpdate_time(getCurrentTimestamp());

				Timestamp ts = new Timestamp(System.currentTimeMillis());
				Date date = new Date(ts.getTime());

				Calendar c = Calendar.getInstance();
				c.setTime(date);
				c.add(Calendar.YEAR, 0);
				java.util.Date newDate = c.getTime();
				java.sql.Date sqlDate = new java.sql.Date(newDate.getTime());
				medTxn.setEff_date(sqlDate);
				medTxn.setRate_amt(new BigDecimal(jsonObj_med.getString("Rate_amt").toString().replace(",", "")));
				String str = "9456-12-31";
				Date date3 = Date.valueOf(str);
				medTxn.setExp_date(date3);

				// MEDEXAMRATE
				medr.setExam_code(jsonObj_med.getString("Exam_code"));
				medr.setUser_code(userId);
				// SET TIME DATE
				medr.setUpdate_time(getCurrentTimestamp());
				medr.setEff_date(date);

			}
			listmedexamTxn.add(medTxn);
			// listmedexamRate.add(medr);
			System.out.println(medr);
		}

		settoService.setMedExamALLTxn(listmedexamTxn, listmedexamRate);
		return String.valueOf(new_id);
	}

	public String save_ReqMedExamTab1(HttpServletRequest request, HttpServletResponse response) throws Exception { // mortality_Tli
		MainUnderWriteSaveDateService settoService = new MainUnderWriteSaveDateService();

		String medexam_str = request.getParameter("medexam_data");
		JSONArray jsonArr_medexam = new JSONArray(medexam_str);
		ArrayList<Med_exam> listmedexam = new ArrayList<>();
		ArrayList<Txn_med_exam> listmedexamTxn = new ArrayList<>();
		ArrayList<Med_exam_rate> listmedexamRate = new ArrayList<>();

		JSONObject responsejson = new JSONObject();
		ArrayList<Txn_underwrite> listtxnuw = new ArrayList<>();
		ArrayList<Txn_underwrite> maxlisttxnuw = new ArrayList<>();
		ArrayList<Txn_approve> listtxnappr = new ArrayList<>();
		MainUnderWriteService mis = new MainUnderWriteService();
		int new_id = 0;
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			new_id = Integer
					.parseInt(jsonObj_med.getString("Txn_id").length() == 0 ? "0" : jsonObj_med.getString("Txn_id"));
		}

		if (jsonArr_medexam.length() > 0) {

			// GEN HEADER TXN
			Txn_underwrite txn = new Txn_underwrite();
			txn.setTxn_type("MED_EXAM");
			txn.setTxn_id(new_id);
			txn.setTxn_status("REQUEST_FOR_APPROVE");
			txn.setUser_code(userId);
			txn.setUpdate_time(getCurrentTimestamp());
			listtxnuw.add(txn);
			settoService.genTxnUnderwrite(listtxnuw);
			responsejson.put("Txn_Data", new_id);
			// responseText = responsejson.toString();
		}
		if (jsonArr_medexam.length() > 0) {

			// GEN TXN Approve
			Txn_approve txna = new Txn_approve();
			txna.setTxn_id(new_id);
			txna.setTxn_status("REQUEST_FOR_APPROVE");
			txna.setUser_code(userId);
			txna.setUpdate_time(getCurrentTimestamp());
			txna.setRqst_time(getCurrentTimestamp());
			txna.setRqst_user_code(userId);
			listtxnappr.add(txna);
			settoService.genTxnApprove(listtxnappr);

		}

		return String.valueOf(new_id);
	}
	public String save_ReqEditMedExamTab1(HttpServletRequest request, HttpServletResponse response) throws Exception { // mortality_Tli
		MainUnderWriteSaveDateService settoService = new MainUnderWriteSaveDateService();

		String medexam_str = request.getParameter("medexam_data");
		JSONArray jsonArr_medexam = new JSONArray(medexam_str);
		ArrayList<Med_exam> listmedexam = new ArrayList<>();
		ArrayList<Txn_med_exam> listmedexamTxn = new ArrayList<>();
		ArrayList<Med_exam_rate> listmedexamRate = new ArrayList<>();

		JSONObject responsejson = new JSONObject();
		ArrayList<Txn_underwrite> listtxnuw = new ArrayList<>();
		ArrayList<Txn_underwrite> maxlisttxnuw = new ArrayList<>();
		ArrayList<Txn_approve> listtxnappr = new ArrayList<>();
		MainUnderWriteService mis = new MainUnderWriteService();
		int new_id = 0;
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			new_id = Integer
					.parseInt(jsonObj_med.getString("Txn_id").length() == 0 ? "0" : jsonObj_med.getString("Txn_id"));
		}

		
		
		if (jsonArr_medexam.length() > 0 && new_id == 0) {
			maxlisttxnuw = mis.getTxn_underwrite("");
			if (maxlisttxnuw.size()> 0) {
				new_id = maxlisttxnuw.get(0).getTxn_id() + 1;
			}else {
				new_id = 1;
			}
			// GEN HEADER TXN
			Txn_underwrite txn = new Txn_underwrite();
			txn.setTxn_type("MED_EXAM");
			txn.setTxn_id(new_id);
			txn.setTxn_status("REQUEST_UPDATE");
			txn.setUser_code(userId);
			txn.setUpdate_time(getCurrentTimestamp());
			listtxnuw.add(txn);
			settoService.genTxnUnderwrite(listtxnuw);
			responsejson.put("Txn_Data", new_id);
			// responseText = responsejson.toString();

			// GEN TXN Approve
			Txn_approve txna = new Txn_approve();
			txna.setTxn_id(new_id);
			txna.setTxn_status("REQUEST_UPDATE");
			txna.setUser_code(userId);
			txna.setUpdate_time(getCurrentTimestamp());
			txna.setRqst_time(getCurrentTimestamp());
			txna.setRqst_user_code(userId);
			listtxnappr.add(txna);
			settoService.genTxnApprove(listtxnappr);
		}else {
			if (jsonArr_medexam.length() > 0) {

				// GEN HEADER TXN
				Txn_underwrite txn = new Txn_underwrite();
				txn.setTxn_type("MED_EXAM");
				txn.setTxn_id(new_id);
				txn.setTxn_status("REQUEST_UPDATE");
				txn.setUser_code(userId);
				txn.setUpdate_time(getCurrentTimestamp());
				listtxnuw.add(txn);
				settoService.genTxnUnderwrite(listtxnuw);
				responsejson.put("Txn_Data", new_id);
				// responseText = responsejson.toString();
			}
			if (jsonArr_medexam.length() > 0) {

				// GEN TXN Approve
				Txn_approve txna = new Txn_approve();
				txna.setTxn_id(new_id);
				txna.setTxn_status("REQUEST_UPDATE");
				txna.setUser_code(userId);
				txna.setUpdate_time(getCurrentTimestamp());
				txna.setRqst_time(getCurrentTimestamp());
				txna.setRqst_user_code(userId);
				listtxnappr.add(txna);
				settoService.genTxnApprove(listtxnappr);

			}
		}
		
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			// Med_exam med = new Med_exam();
			Txn_med_exam medTxn = new Txn_med_exam();
			Med_exam_rate medr = new Med_exam_rate();
			if (true) {
				// MEDEXAM
				medTxn.setTxn_id(new_id);
				medTxn.setExam_code(jsonObj_med.getString("Exam_code"));
				medTxn.setName_abb(jsonObj_med.getString("Name_abb"));
				medTxn.setName_th(jsonObj_med.getString("Name_th"));
				medTxn.setExam_type(jsonObj_med.getString("Exam_type"));
				medTxn.setIs_active(jsonObj_med.getBoolean("Is_active"));
				medTxn.setIs_approved(jsonObj_med.getBoolean("Is_approved"));
				medTxn.setIs_uw(jsonObj_med.getBoolean("Is_UW"));
				medTxn.setUser_code(userId);
				medTxn.setUpdate_time(getCurrentTimestamp());

				Timestamp ts = new Timestamp(System.currentTimeMillis());
				Date date = new Date(ts.getTime());

				Calendar c = Calendar.getInstance();
				c.setTime(date);
				c.add(Calendar.YEAR, 0);
				java.util.Date newDate = c.getTime();
				java.sql.Date sqlDate = new java.sql.Date(newDate.getTime());
				medTxn.setEff_date(sqlDate);
				medTxn.setRate_amt(new BigDecimal(jsonObj_med.getString("Rate_amt").toString().replace(",", "")));
				String str = "9456-12-31";
				Date date3 = Date.valueOf(str);
				medTxn.setExp_date(date3);

				// MEDEXAMRATE
				medr.setExam_code(jsonObj_med.getString("Exam_code"));
				medr.setUser_code(userId);
				// SET TIME DATE
				medr.setUpdate_time(getCurrentTimestamp());
				medr.setEff_date(date);

			}
			listmedexamTxn.add(medTxn);
			System.out.println(medr);
		}

		settoService.setMedExamALLTxn(listmedexamTxn, listmedexamRate);

		return String.valueOf(new_id);
	}
	public String save_ApproveMedExamTab1(HttpServletRequest request, HttpServletResponse response) throws Exception { // mortality_Tli
		MainUnderWriteSaveDateService settoService = new MainUnderWriteSaveDateService();

		String medexam_str = request.getParameter("medexam_data");
		JSONArray jsonArr_medexam = new JSONArray(medexam_str);
		ArrayList<Med_exam> listmedexam = new ArrayList<>();
		ArrayList<Txn_med_exam> listmedexamTxn = new ArrayList<>();
		ArrayList<Med_exam_rate> listmedexamRate = new ArrayList<>();
		String approve_note = request.getParameter("approve_note");
		
		JSONObject responsejson = new JSONObject();
		ArrayList<Txn_underwrite> listtxnuw = new ArrayList<>();
		ArrayList<Txn_underwrite> maxlisttxnuw = new ArrayList<>();
		ArrayList<Txn_approve> listtxnappr = new ArrayList<>();
		MainUnderWriteService mis = new MainUnderWriteService();
		int new_id = 0;
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			new_id = Integer
					.parseInt(jsonObj_med.getString("Txn_id").length() == 0 ? "0" : jsonObj_med.getString("Txn_id"));
		}
		if (jsonArr_medexam.length() > 0) {

			// GEN HEADER TXN
			Txn_underwrite txn = new Txn_underwrite();
			txn.setTxn_type("MED_EXAM");
			txn.setTxn_id(new_id);
			txn.setTxn_status("APPROVED");
			txn.setUser_code(userId);
			txn.setUpdate_time(getCurrentTimestamp());
			listtxnuw.add(txn);
			settoService.genTxnUnderwrite(listtxnuw);
			responsejson.put("Txn_Data", new_id);
			// responseText = responsejson.toString();
		}
		if (jsonArr_medexam.length() > 0) {

			// GEN TXN Approve
			Txn_approve txna = new Txn_approve();
			txna.setTxn_id(new_id);
			txna.setTxn_status("APPROVED");
			txna.setRqst_time(getCurrentTimestamp());
			txna.setUser_code(userId);
			txna.setApprv_note(approve_note==null?"":approve_note);
			txna.setUpdate_time(getCurrentTimestamp());
			txna.setRqst_user_code(userId);
			txna.setApprv_time(getCurrentTimestamp());
			txna.setApprv_user_code(userId);

			listtxnappr.add(txna);
			settoService.genTxnApprove(listtxnappr);

		}

		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			// Med_exam med = new Med_exam();
			Txn_med_exam medTxn = new Txn_med_exam();
			Med_exam_rate medr = new Med_exam_rate();
			if (true) {
				// MEDEXAM
				medTxn.setTxn_id(new_id);
				medTxn.setExam_code(jsonObj_med.getString("Exam_code"));
				medTxn.setName_abb(jsonObj_med.getString("Name_abb"));
				medTxn.setName_th(jsonObj_med.getString("Name_th"));
				medTxn.setExam_type(jsonObj_med.getString("Exam_type"));
				medTxn.setIs_active(true);
				medTxn.setIs_approved(true);
				medTxn.setIs_uw(jsonObj_med.getBoolean("Is_UW"));
				medTxn.setUser_code(userId);
				medTxn.setUpdate_time(getCurrentTimestamp());

				Timestamp ts = new Timestamp(System.currentTimeMillis());
				Date date = new Date(ts.getTime());

				Calendar c = Calendar.getInstance();
				c.setTime(date);
				c.add(Calendar.YEAR, 0);
				java.util.Date newDate = c.getTime();
				java.sql.Date sqlDate = new java.sql.Date(newDate.getTime());
				medTxn.setEff_date(sqlDate);
				medTxn.setRate_amt(new BigDecimal(jsonObj_med.getString("Rate_amt").toString().replace(",", "")));
				String str = "9456-12-31";
				Date date3 = Date.valueOf(str);
				medTxn.setExp_date(date3);

				// MEDEXAMRATE
				medr.setExam_code(jsonObj_med.getString("Exam_code"));
				medr.setUser_code(userId);
				// SET TIME DATE
				medr.setUpdate_time(getCurrentTimestamp());
				medr.setEff_date(date);

			}
			listmedexamTxn.add(medTxn);
			// listmedexamRate.add(medr);
			System.out.println(medr);
		}

		settoService.setMedExamALLTxn(listmedexamTxn, listmedexamRate);

		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			Med_exam med = new Med_exam();
			Med_exam_rate medr = new Med_exam_rate();
			if (true) {
				// MEDEXAM
				med.setExam_code(jsonObj_med.getString("Exam_code"));
				med.setName_abb(jsonObj_med.getString("Name_abb"));
				med.setName_th(jsonObj_med.getString("Name_th"));
				med.setExam_type(jsonObj_med.getString("Exam_type"));
				med.setIs_active(true);
				med.setIs_approved(true);
				med.setIs_uw(jsonObj_med.getBoolean("Is_UW"));
				med.setUser_code(userId);
				med.setUpdate_time(getCurrentTimestamp());

				// MEDEXAMRATE
				medr.setExam_code(jsonObj_med.getString("Exam_code"));
				// medr.setRate_amt(new BigDecimal(jsonObj_med.getString("Rate_amt")));
				medr.setRate_amt(new BigDecimal(jsonObj_med.getString("Rate_amt").toString().replace(",", "")));

				medr.setUser_code(userId);

				// SET TIME DATE
				medr.setUpdate_time(getCurrentTimestamp());
				Timestamp ts = new Timestamp(System.currentTimeMillis());
				Date date = new Date(ts.getTime());
				medr.setEff_date(date);
				String str = "9456-12-31";
				Date date3 = Date.valueOf(str);
				medr.setExp_date(date3);

			}
			listmedexam.add(med);
			listmedexamRate.add(medr);
			System.out.println(medr);
		}

		settoService.setMedExamALL(listmedexam, listmedexamRate);

		return String.valueOf(new_id);
	}
	
	public String save_ApproveEditMedExamTab1(HttpServletRequest request, HttpServletResponse response) throws Exception { // mortality_Tli
		MainUnderWriteSaveDateService settoService = new MainUnderWriteSaveDateService();

		String medexam_str = request.getParameter("medexam_data");
		JSONArray jsonArr_medexam = new JSONArray(medexam_str);
		ArrayList<Med_exam> listmedexam = new ArrayList<>();
		ArrayList<Txn_med_exam> listmedexamTxn = new ArrayList<>();
		ArrayList<Med_exam_rate> listmedexamRate = new ArrayList<>();

		JSONObject responsejson = new JSONObject();
		ArrayList<Txn_underwrite> listtxnuw = new ArrayList<>();
		ArrayList<Txn_underwrite> maxlisttxnuw = new ArrayList<>();
		ArrayList<Txn_approve> listtxnappr = new ArrayList<>();
		MainUnderWriteService mis = new MainUnderWriteService();
		int new_id = 0;
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			new_id = Integer
					.parseInt(jsonObj_med.getString("Txn_id").length() == 0 ? "0" : jsonObj_med.getString("Txn_id"));
		}
		if (jsonArr_medexam.length() > 0) {

			// GEN HEADER TXN
			Txn_underwrite txn = new Txn_underwrite();
			txn.setTxn_type("MED_EXAM");
			txn.setTxn_id(new_id);
			txn.setTxn_status("UPDATE");
			txn.setUser_code(userId);
			txn.setUpdate_time(getCurrentTimestamp());
			listtxnuw.add(txn);
			settoService.genTxnUnderwrite(listtxnuw);
			responsejson.put("Txn_Data", new_id);
			// responseText = responsejson.toString();
		}
		if (jsonArr_medexam.length() > 0) {

			// GEN TXN Approve
			Txn_approve txna = new Txn_approve();
			txna.setTxn_id(new_id);
			txna.setTxn_status("UPDATE");
			txna.setRqst_time(getCurrentTimestamp());
			txna.setUser_code(userId);
			txna.setUpdate_time(getCurrentTimestamp());
			txna.setRqst_user_code(userId);
			txna.setApprv_time(getCurrentTimestamp());
			txna.setApprv_user_code(userId);

			listtxnappr.add(txna);
			settoService.genTxnApprove(listtxnappr);

		}

		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			// Med_exam med = new Med_exam();
			Txn_med_exam medTxn = new Txn_med_exam();
			Med_exam_rate medr = new Med_exam_rate();
			if (true) {
				// MEDEXAM
				medTxn.setTxn_id(new_id);
				medTxn.setExam_code(jsonObj_med.getString("Exam_code"));
				medTxn.setName_abb(jsonObj_med.getString("Name_abb"));
				medTxn.setName_th(jsonObj_med.getString("Name_th"));
				medTxn.setExam_type(jsonObj_med.getString("Exam_type"));
				medTxn.setIs_active(false);
				medTxn.setIs_approved(false);
				medTxn.setIs_uw(jsonObj_med.getBoolean("Is_UW"));
				medTxn.setUser_code(userId);
				medTxn.setUpdate_time(getCurrentTimestamp());

				Timestamp ts = new Timestamp(System.currentTimeMillis());
				Date date = new Date(ts.getTime());

				Calendar c = Calendar.getInstance();
				c.setTime(date);
				c.add(Calendar.YEAR, 0);
				java.util.Date newDate = c.getTime();
				java.sql.Date sqlDate = new java.sql.Date(newDate.getTime());
				medTxn.setEff_date(sqlDate);
				medTxn.setRate_amt(new BigDecimal(jsonObj_med.getString("Rate_amt").toString().replace(",", "")));
				String str = "9456-12-31";
				Date date3 = Date.valueOf(str);
				medTxn.setExp_date(date3);

				// MEDEXAMRATE
				medr.setExam_code(jsonObj_med.getString("Exam_code"));
				medr.setUser_code(userId);
				// SET TIME DATE
				medr.setUpdate_time(getCurrentTimestamp());
				medr.setEff_date(date);

			}
			listmedexamTxn.add(medTxn);
			System.out.println(medr);
		}

		settoService.setMedExamALLTxn(listmedexamTxn, listmedexamRate);

		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			Med_exam med = new Med_exam();
			Med_exam_rate medr = new Med_exam_rate();
			if (true) {
				// MEDEXAM
				med.setExam_code(jsonObj_med.getString("Exam_code"));
				med.setName_abb(jsonObj_med.getString("Name_abb"));
				med.setName_th(jsonObj_med.getString("Name_th"));
				med.setExam_type(jsonObj_med.getString("Exam_type"));
				med.setIs_active(false);
				med.setIs_approved(false);
				med.setIs_uw(jsonObj_med.getBoolean("Is_UW"));
				med.setUser_code(userId);
				med.setUpdate_time(getCurrentTimestamp());

				// MEDEXAMRATE
				medr.setExam_code(jsonObj_med.getString("Exam_code"));
				// medr.setRate_amt(new BigDecimal(jsonObj_med.getString("Rate_amt")));
				medr.setRate_amt(new BigDecimal(jsonObj_med.getString("Rate_amt").toString().replace(",", "")));

				medr.setUser_code(userId);

				// SET TIME DATE
				medr.setUpdate_time(getCurrentTimestamp());
				Timestamp ts = new Timestamp(System.currentTimeMillis());
				Date date = new Date(ts.getTime());
				medr.setEff_date(date);
				String str = "9456-12-31";
				Date date3 = Date.valueOf(str);
				medr.setExp_date(date3);

			}
			listmedexam.add(med);
			listmedexamRate.add(medr);
			System.out.println(medr);
		}

		settoService.setMedExamALL(listmedexam, listmedexamRate);

		return String.valueOf(new_id);
	}

	public String save_NotApproveMedExamTab1(HttpServletRequest request, HttpServletResponse response)
			throws Exception { // mortality_Tli
		MainUnderWriteSaveDateService settoService = new MainUnderWriteSaveDateService();

		String medexam_str = request.getParameter("medexam_data");
		JSONArray jsonArr_medexam = new JSONArray(medexam_str);
		String approve_note = request.getParameter("approve_note");
		ArrayList<Med_exam> listmedexam = new ArrayList<>();
		ArrayList<Txn_med_exam> listmedexamTxn = new ArrayList<>();
		ArrayList<Med_exam_rate> listmedexamRate = new ArrayList<>();

		JSONObject responsejson = new JSONObject();
		ArrayList<Txn_underwrite> listtxnuw = new ArrayList<>();
		ArrayList<Txn_underwrite> maxlisttxnuw = new ArrayList<>();
		ArrayList<Txn_approve> listtxnappr = new ArrayList<>();
		MainUnderWriteService mis = new MainUnderWriteService();
		int new_id = 0;
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			new_id = Integer
					.parseInt(jsonObj_med.getString("Txn_id").length() == 0 ? "0" : jsonObj_med.getString("Txn_id"));
		}
		if (jsonArr_medexam.length() > 0) {

			// GEN HEADER TXN
			Txn_underwrite txn = new Txn_underwrite();
			txn.setTxn_type("MED_EXAM");
			txn.setTxn_id(new_id);
			txn.setTxn_status("REJECTED");
			txn.setUser_code(userId);
			txn.setUpdate_time(getCurrentTimestamp());
			listtxnuw.add(txn);
			settoService.genTxnUnderwrite(listtxnuw);
			responsejson.put("Txn_Data", new_id);
			// responseText = responsejson.toString();
		}
		if (jsonArr_medexam.length() > 0) {

			// GEN TXN Approve
			Txn_approve txna = new Txn_approve();

			txna.setTxn_id(new_id);
			txna.setTxn_status("REJECTED");
			txna.setRqst_time(getCurrentTimestamp());
			txna.setUser_code(userId);
			txna.setRqst_user_code(userId);
			txna.setUpdate_time(getCurrentTimestamp());
			txna.setApprv_note(approve_note);
			txna.setApprv_time(getCurrentTimestamp());
			txna.setApprv_user_code(userId);

			listtxnappr.add(txna);
			settoService.genTxnApprove(listtxnappr);

		}

		// for (int i = 0; i < jsonArr_medexam.length(); i++) {
		// JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
		// //Med_exam med = new Med_exam();
		// Txn_med_exam medTxn = new Txn_med_exam();
		// Med_exam_rate medr = new Med_exam_rate();
		// if (true) {
		// // MEDEXAM
		// medTxn.setTxn_id(new_id);
		// medTxn.setExam_code(jsonObj_med.getString("Exam_code"));
		// medTxn.setName_abb(jsonObj_med.getString("Name_abb"));
		// medTxn.setName_th(jsonObj_med.getString("Name_th"));
		// medTxn.setExam_type(jsonObj_med.getString("Exam_type"));
		// medTxn.setIs_active(jsonObj_med.getBoolean("Is_active"));
		// medTxn.setIs_approved(jsonObj_med.getBoolean("Is_approved"));
		// medTxn.setIs_uw(jsonObj_med.getBoolean("Is_UW"));
		// medTxn.setUser_code(userId);
		// medTxn.setUpdate_time(getCurrentTimestamp());
		//
		// Timestamp ts = new Timestamp(System.currentTimeMillis());
		// Date date = new Date(ts.getTime());
		//
		//
		// Calendar c = Calendar.getInstance();
		// c.setTime(date);
		// c.add(Calendar.YEAR, 543);
		// java.util.Date newDate = c.getTime();
		// java.sql.Date sqlDate = new java.sql.Date(newDate.getTime());
		// medTxn.setEff_date(sqlDate);
		// medTxn.setRate_amt(new
		// BigDecimal(jsonObj_med.getString("Rate_amt").toString().replace(",", "")));
		// String str = "9999-12-31";
		// Date date3 = Date.valueOf(str);
		// medTxn.setExp_date(date3);
		//
		// // MEDEXAMRATE
		// medr.setExam_code(jsonObj_med.getString("Exam_code"));
		// medr.setUser_code(userId);
		// // SET TIME DATE
		// medr.setUpdate_time(getCurrentTimestamp());
		// medr.setEff_date(date);
		//
		//
		// }
		// listmedexamTxn.add(medTxn);
		// //listmedexamRate.add(medr);
		// System.out.println(medr);
		// }
		//
		// settoService.setMedExamALLTxn(listmedexamTxn, listmedexamRate);
		return String.valueOf(new_id);
	}

	public String save_MedExamTab2(HttpServletRequest request, HttpServletResponse response) throws Exception { // mortality_Tli
		MainUnderWriteSaveDateService settoService = new MainUnderWriteSaveDateService();
		String medexam_str = request.getParameter("medexam_data");
		String medexamg_str = request.getParameter("medexamgroup_data");
		JSONArray jsonArr_medexam = new JSONArray(medexam_str);
		JSONArray jsonArr_medexamg = new JSONArray(medexamg_str);
		ArrayList<Med_exam> listmedexam = new ArrayList<>();
		ArrayList<Med_exam_group> listmedexamgroup = new ArrayList<>();
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			Med_exam med = new Med_exam();
			if (true) {
				// MEDEXAM
				med.setExam_code(jsonObj_med.getString("Exam_code"));
				med.setName_abb(jsonObj_med.getString("Name_abb"));
				
				if(jsonObj_med.getString("Name_th")==null?false:jsonObj_med.getString("Name_th").length()>200) {
					String namecut = jsonObj_med.getString("Name_th").substring(0, 199);
					med.setName_th(namecut);
				}else {
					med.setName_th(jsonObj_med.getString("Name_th"));
				}
				
				
				med.setExam_type(jsonObj_med.getString("Exam_type"));
				med.setIs_active(jsonObj_med.getBoolean("Is_active"));
				med.setIs_approved(jsonObj_med.getBoolean("Is_approved"));
				med.setIs_uw(jsonObj_med.getBoolean("Is_UW"));
				med.setIs_group(true);
				med.setUser_code(userId);
				med.setUpdate_time(getCurrentTimestamp());

			}
			listmedexam.add(med);

		}
		for (int i = 0; i < jsonArr_medexamg.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexamg.getJSONObject(i);
			Med_exam_group medg = new Med_exam_group();
			if (true) {
				// MEDEXAMRATE
				medg.setGroup_exam_code(jsonObj_med.getString("Group_exam_code"));
				medg.setMember_exam_code(jsonObj_med.getString("Member_exam_code"));
				medg.setUser_code(userId);
				medg.setUpdate_time(getCurrentTimestamp());
			}

			listmedexamgroup.add(medg);
		}

		settoService.setMedExamGroupALL(listmedexam, listmedexamgroup);
		return "Test Save ";
	}

	public String save_ApenddixProductTab2_V02(HttpServletRequest request, HttpServletResponse response)
			throws Exception { // mortality_Tli

		MainUnderWriteSaveDateService settoService = new MainUnderWriteSaveDateService();
		MainUnderWriteService mis = new MainUnderWriteService();
		String medexamFrom_str = request.getParameter("appendix_productFrom_data");
		String medexamg_str = request.getParameter("appendix_productTo_data");
		JSONArray jsonArr_medexamFrom = new JSONArray(medexamFrom_str);
		JSONArray jsonArr_medexamgTo = new JSONArray(medexamg_str);
		ArrayList<Appendix_product> listmedexam = new ArrayList<>();
		ArrayList<Txn_appendix_product> listmedexamgroup = new ArrayList<>();
		ArrayList<Txn_appendix_product> listtxnapp = new ArrayList<>();
		ArrayList<Txn_underwrite> listtxnuw = new ArrayList<>();
		ArrayList<Txn_underwrite> maxlisttxnuw = new ArrayList<>();
		ArrayList<Txn_approve> listtxnappr = new ArrayList<>();
		ArrayList<AppendixVersionALLAccessData> appendixVersoinALL = null;
		int new_id = 0;
		JSONObject responsejson = new JSONObject();
		for (int i = 0; i < jsonArr_medexamgTo.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexamgTo.getJSONObject(i);
			new_id = Integer
					.parseInt(jsonObj_med.getString("Txn_id").length() == 0 ? "0" : jsonObj_med.getString("Txn_id"));
		}
		if (jsonArr_medexamgTo.length() > 0 && new_id == 0) {
			maxlisttxnuw = mis.getTxn_underwrite("");
			if (maxlisttxnuw.size()> 0) {
				new_id = maxlisttxnuw.get(0).getTxn_id() + 1;
			}else {
				new_id = 1;
			}
			// GEN HEADER TXN
			Txn_underwrite txn = new Txn_underwrite();
			txn.setTxn_type("APPENDIX_PRODUCT");
			txn.setTxn_id(new_id);
			txn.setTxn_status("NEW");
			txn.setUser_code(userId);
			txn.setUpdate_time(getCurrentTimestamp());
			listtxnuw.add(txn);
			settoService.genTxnUnderwrite(listtxnuw);
			responsejson.put("Txn_Data", new_id);
			// responseText = responsejson.toString();

			// GEN TXN Approve
			Txn_approve txna = new Txn_approve();
			txna.setTxn_id(new_id);
			txna.setTxn_status("NEW");
			txna.setUser_code(userId);
			txna.setUpdate_time(getCurrentTimestamp());
			txna.setRqst_time(getCurrentTimestamp());
			txna.setRqst_user_code(userId);
			listtxnappr.add(txna);
			settoService.genTxnApprove(listtxnappr);
		}
		for (int i = 0; i < jsonArr_medexamgTo.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexamgTo.getJSONObject(i);
			Txn_appendix_product appendix_product2 = new Txn_appendix_product();
			if (true) {
				// MEDEXAM
				appendix_product2.setTxn_id(new_id);
				appendix_product2.setAppendix_code_new(jsonObj_med.getString("Appendix_code"));
				appendix_product2.setAppendix_version_new(Integer.parseInt(jsonObj_med.getString("Version_id")));
				appendix_product2.setAppendix_code_old(jsonObj_med.getString("ori_Appendix_code"));
				appendix_product2.setAppendix_version_old(Integer.parseInt(jsonObj_med.getString("ori_Version_id")));

				appendix_product2.setPrd_code(jsonObj_med.getString("Prd_code"));

				
				String str = "9456-12-31";
				if (jsonObj_med.getString("Eff_date") != "") {
					System.out.println(jsonObj_med.getString("Eff_date"));
					System.out.println(getData(jsonObj_med.getString("Eff_date")));
					appendix_product2.setEff_date(getData(jsonObj_med.getString("Eff_date")));
				} else {
					java.util.Date date2 = (java.util.Date) new SimpleDateFormat("yyyy/mm/dd").parse(str);
					java.sql.Date sd = new java.sql.Date(date2.getTime());
					appendix_product2.setEff_date(sd);
				}
				if (jsonObj_med.getString("Exp_date") != "") {
					appendix_product2.setExp_date(getData(jsonObj_med.getString("Exp_date")));
				} else {
					java.util.Date date2 = (java.util.Date) new SimpleDateFormat("yyyy/mm/dd").parse(str);
					java.sql.Date sd = new java.sql.Date(date2.getTime());
					appendix_product2.setExp_date(sd);

				}

				appendix_product2.setUser_code(userId);
				appendix_product2.setUpdate_time(getCurrentTimestamp());

			}
			listmedexamgroup.add(appendix_product2);
		}

		settoService.setTxnAppendixProduct(listmedexamgroup);
		return String.valueOf(new_id);
	}

	public String delete_ApenddixProductTab2_V02(HttpServletRequest request, HttpServletResponse response)
			throws Exception { // mortality_Tli

		MainUnderWriteSaveDateService settoService = new MainUnderWriteSaveDateService();
		MainUnderWriteService mis = new MainUnderWriteService();
		String medexamFrom_str = request.getParameter("appendix_productFrom_data");
		String medexamg_str = request.getParameter("appendix_productTo_data");
		String Txn_id = request.getParameter("Txn_id");
		ArrayList<Txn_underwrite> listtxnuw = new ArrayList<>();
		int new_id = Integer.parseInt(Txn_id.length() == 0 ? "0" : Txn_id);
		JSONObject responsejson = new JSONObject();

		// JSONObject jsonObj_med = jsonArr_medexamgTo.getJSONObject(0);
		// new_id=Integer.parseInt(jsonObj_med.getString("Txn_id").length()==0?"0":jsonObj_med.getString("Txn_id"));

		Txn_underwrite txn = new Txn_underwrite();
		txn.setTxn_type("APPENDIX_PRODUCT");
		txn.setTxn_id(new_id);
		txn.setTxn_status("NEW");
		txn.setUser_code(userId);
		txn.setUpdate_time(getCurrentTimestamp());
		listtxnuw.add(txn);
		settoService.deleteTxnUnderwrite(listtxnuw);

		// settoService.setTxnAppendixProduct( listmedexamgroup);
		return String.valueOf(new_id);
	}

	public String save_RequestApenddixProductTab2(HttpServletRequest request, HttpServletResponse response)
			throws Exception { // mortality_Tli

		MainUnderWriteSaveDateService settoService = new MainUnderWriteSaveDateService();
		MainUnderWriteService mis = new MainUnderWriteService();
		String medexamFrom_str = request.getParameter("appendix_productFrom_data");
		String medexamg_str = request.getParameter("appendix_productTo_data");
		JSONArray jsonArr_medexamFrom = new JSONArray(medexamFrom_str);
		JSONArray jsonArr_medexamgTo = new JSONArray(medexamg_str);
		
		ArrayList<Appendix_product> listmedexam = new ArrayList<>();
		ArrayList<Txn_appendix_product> listmedexamgroup = new ArrayList<>();
		ArrayList<Txn_appendix_product> listtxnapp = new ArrayList<>();
		ArrayList<Txn_underwrite> listtxnuw = new ArrayList<>();
		ArrayList<Txn_approve> listtxnappr = new ArrayList<>();
		int new_id = 0;
		JSONObject responsejson = new JSONObject();
		for (int i = 0; i < jsonArr_medexamgTo.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexamgTo.getJSONObject(i);
			new_id = Integer
					.parseInt(jsonObj_med.getString("Txn_id").length() == 0 ? "0" : jsonObj_med.getString("Txn_id"));
		}
		if (jsonArr_medexamgTo.length() > 0) {

			// GEN HEADER TXN
			Txn_underwrite txn = new Txn_underwrite();
			txn.setTxn_type("APPENDIX_PRODUCT");
			txn.setTxn_id(new_id);
			txn.setTxn_status("REQUEST_FOR_APPROVE");
			txn.setUser_code(userId);
			txn.setUpdate_time(getCurrentTimestamp());
			listtxnuw.add(txn);
			settoService.genTxnUnderwrite(listtxnuw);
			responsejson.put("Txn_Data", new_id);
			// responseText = responsejson.toString();
		}
		if (jsonArr_medexamgTo.length() > 0) {

			// GEN TXN Approve
			Txn_approve txna = new Txn_approve();
			txna.setTxn_id(new_id);
			txna.setTxn_status("REQUEST_FOR_APPROVE");
			txna.setUser_code(userId);
			txna.setUpdate_time(getCurrentTimestamp());
			txna.setRqst_time(getCurrentTimestamp());
			txna.setRqst_user_code(userId);
			listtxnappr.add(txna);
			settoService.genTxnApprove(listtxnappr);

		}
		for (int i = 0; i < jsonArr_medexamgTo.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexamgTo.getJSONObject(i);
			Txn_appendix_product appendix_product2 = new Txn_appendix_product();
			if (true) {
				// MEDEXAM
				appendix_product2.setTxn_id(new_id);
				appendix_product2.setAppendix_code_new(jsonObj_med.getString("Appendix_code"));
				appendix_product2.setAppendix_version_new(Integer.parseInt(jsonObj_med.getString("Version_id")));
				appendix_product2.setAppendix_code_old(jsonObj_med.getString("ori_Appendix_code"));
				appendix_product2.setAppendix_version_old(Integer.parseInt(jsonObj_med.getString("ori_Version_id")));

				appendix_product2.setPrd_code(jsonObj_med.getString("Prd_code"));

//				if (jsonObj_med.getString("Eff_date") == null ? true
//						: jsonObj_med.getString("Eff_date").length() == 0) {
//					Timestamp ts = new Timestamp(System.currentTimeMillis());
//					Date date = new Date(ts.getTime());
//
//					Calendar c = Calendar.getInstance();
//					c.setTime(date);
//					c.add(Calendar.YEAR, 0);
//					java.util.Date newDate = c.getTime();
//					java.sql.Date sqlDate = new java.sql.Date(newDate.getTime());
//
//					appendix_product2.setEff_date(sqlDate);
//				} else {
//					String t = jsonObj_med.getString("Eff_date").replace("-", "/");
//					java.util.Date date1 = (java.util.Date) new SimpleDateFormat("dd/MM/yyyy").parse(t);
//					java.sql.Date sd = new java.sql.Date(date1.getTime());
//					appendix_product2.setEff_date(sd);
//				}
//				if (jsonObj_med.getString("Exp_date") == null ? true
//						: jsonObj_med.getString("Exp_date").length() == 0) {
//					String str = "9999-12-31";
//					Date date3 = Date.valueOf(str);
//					appendix_product2.setExp_date(date3);
//				} else {
//					String t = jsonObj_med.getString("Exp_date").replace("-", "/");
//					java.util.Date date1 = (java.util.Date) new SimpleDateFormat("dd/MM/yyyy").parse(t);
//					java.sql.Date sd = new java.sql.Date(date1.getTime());
//					appendix_product2.setExp_date(sd);
//				}
				
				String str = "9456-12-31";
				if (jsonObj_med.getString("Eff_date") != "") {
					System.out.println(jsonObj_med.getString("Eff_date"));
					System.out.println(getData(jsonObj_med.getString("Eff_date")));
					appendix_product2.setEff_date(getData(jsonObj_med.getString("Eff_date")));
				} else {
					java.util.Date date2 = (java.util.Date) new SimpleDateFormat("yyyy/mm/dd").parse(str);
					java.sql.Date sd = new java.sql.Date(date2.getTime());
					appendix_product2.setEff_date(sd);
				}
				if (jsonObj_med.getString("Exp_date") != "") {
					appendix_product2.setExp_date(getData(jsonObj_med.getString("Exp_date")));
				} else {
					java.util.Date date2 = (java.util.Date) new SimpleDateFormat("yyyy/mm/dd").parse(str);
					java.sql.Date sd = new java.sql.Date(date2.getTime());
					appendix_product2.setExp_date(sd);

				}

				

				appendix_product2.setUser_code(userId);
				appendix_product2.setUpdate_time(getCurrentTimestamp());

			}
			listmedexamgroup.add(appendix_product2);
		}

		settoService.setTxnAppendixProduct(listmedexamgroup);
		return String.valueOf(new_id);
	}

	public String save_ApproveApenddixProductTab2(HttpServletRequest request, HttpServletResponse response)
			throws Exception { // mortality_Tli

		MainUnderWriteSaveDateService settoService = new MainUnderWriteSaveDateService();
		MainUnderWriteService mis = new MainUnderWriteService();
		String medexamFrom_str = request.getParameter("appendix_productFrom_data");
		String medexamg_str = request.getParameter("appendix_productTo_data");
		JSONArray jsonArr_medexamFrom = new JSONArray(medexamFrom_str);
		JSONArray jsonArr_medexamgTo = new JSONArray(medexamg_str);
		ArrayList<Appendix_product> listmedexam = new ArrayList<>();
		ArrayList<Txn_appendix_product> listmedexamgroup = new ArrayList<>();
		ArrayList<Txn_appendix_product> listtxnapp = new ArrayList<>();
		ArrayList<Txn_underwrite> listtxnuw = new ArrayList<>();
		ArrayList<Txn_underwrite> maxlisttxnuw = new ArrayList<>();
		ArrayList<Txn_approve> listtxnappr = new ArrayList<>();
		ArrayList<AppendixVersionALLAccessData> appendixVersoinALL = null;
		int new_id = 0;
		JSONObject responsejson = new JSONObject();
		for (int i = 0; i < jsonArr_medexamgTo.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexamgTo.getJSONObject(i);
			new_id = Integer
					.parseInt(jsonObj_med.getString("Txn_id").length() == 0 ? "0" : jsonObj_med.getString("Txn_id"));
		}
		if (jsonArr_medexamgTo.length() > 0) {

			// GEN HEADER TXN
			Txn_underwrite txn = new Txn_underwrite();
			txn.setTxn_type("APPENDIX_PRODUCT");
			txn.setTxn_id(new_id);
			txn.setTxn_status("APPROVED");
			txn.setUser_code(userId);
			txn.setUpdate_time(getCurrentTimestamp());
			listtxnuw.add(txn);
			settoService.genTxnUnderwrite(listtxnuw);
			responsejson.put("Txn_Data", new_id);
			// responseText = responsejson.toString();
		}
		if (jsonArr_medexamgTo.length() > 0) {

			// GEN TXN Approve
			Txn_approve txna = new Txn_approve();
			txna.setTxn_id(new_id);
			txna.setTxn_status("APPROVED");
			txna.setRqst_time(getCurrentTimestamp());
			txna.setUser_code(userId);
			txna.setUpdate_time(getCurrentTimestamp());
			txna.setRqst_user_code(userId);
			txna.setApprv_time(getCurrentTimestamp());
			txna.setApprv_user_code(userId);

			listtxnappr.add(txna);
			settoService.genTxnApprove(listtxnappr);

		}
		for (int i = 0; i < jsonArr_medexamgTo.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexamgTo.getJSONObject(i);
			Txn_appendix_product appendix_product2 = new Txn_appendix_product();
			Appendix_product appendix_product = new Appendix_product();
			if (true) {
				// Txn_appendix_product
				appendix_product2.setTxn_id(new_id);
				appendix_product2.setAppendix_code_new(jsonObj_med.getString("Appendix_code"));
				appendix_product2.setAppendix_version_new(Integer.parseInt(jsonObj_med.getString("Version_id")));
				appendix_product2.setAppendix_code_old(jsonObj_med.getString("ori_Appendix_code"));
				appendix_product2.setAppendix_version_old(Integer.parseInt(jsonObj_med.getString("ori_Version_id")));

				appendix_product2.setPrd_code(jsonObj_med.getString("Prd_code"));

//				if (jsonObj_med.getString("Eff_date") == null ? true
//						: jsonObj_med.getString("Eff_date").length() == 0) {
//					Timestamp ts = new Timestamp(System.currentTimeMillis());
//					Date date = new Date(ts.getTime());
//
//					Calendar c = Calendar.getInstance();
//					c.setTime(date);
//					c.add(Calendar.YEAR, 0);
//					java.util.Date newDate = c.getTime();
//					java.sql.Date sqlDate = new java.sql.Date(newDate.getTime());
//
//					appendix_product2.setEff_date(sqlDate);
//				} else {
//					String t = jsonObj_med.getString("Eff_date").replace("-", "/");
//					java.util.Date date1 = (java.util.Date) new SimpleDateFormat("dd/MM/yyyy").parse(t);
//					java.sql.Date sd = new java.sql.Date(date1.getTime());
//					appendix_product2.setEff_date(sd);
//				}
//				if (jsonObj_med.getString("Exp_date") == null ? true
//						: jsonObj_med.getString("Exp_date").length() == 0) {
//					String str = "9999-12-31";
//					Date date3 = Date.valueOf(str);
//					appendix_product2.setExp_date(date3);
//				} else {
//					String t = jsonObj_med.getString("Exp_date").replace("-", "/");
//					java.util.Date date1 = (java.util.Date) new SimpleDateFormat("dd/MM/yyyy").parse(t);
//					java.sql.Date sd = new java.sql.Date(date1.getTime());
//					appendix_product2.setExp_date(sd);
//				}
				
				String str = "9456-12-31";
				if (jsonObj_med.getString("Eff_date") != "") {
					System.out.println(jsonObj_med.getString("Eff_date"));
					System.out.println(getData(jsonObj_med.getString("Eff_date")));
					appendix_product2.setEff_date(getData(jsonObj_med.getString("Eff_date")));
				} else {
					java.util.Date date2 = (java.util.Date) new SimpleDateFormat("yyyy/mm/dd").parse(str);
					java.sql.Date sd = new java.sql.Date(date2.getTime());
					appendix_product2.setEff_date(sd);
				}
				if (jsonObj_med.getString("Exp_date") != "") {
					appendix_product2.setExp_date(getData(jsonObj_med.getString("Exp_date")));
				} else {
					java.util.Date date2 = (java.util.Date) new SimpleDateFormat("yyyy/mm/dd").parse(str);
					java.sql.Date sd = new java.sql.Date(date2.getTime());
					appendix_product2.setExp_date(sd);

				}


				appendix_product2.setUser_code(userId);
				appendix_product2.setUpdate_time(getCurrentTimestamp());

				
				
				// CREATTING Appendix_product
				appendix_product.setAppendix_code(jsonObj_med.getString("Appendix_code"));
				appendix_product.setPrd_code(jsonObj_med.getString("Prd_code"));

//				if (jsonObj_med.getString("Eff_date") == null ? true
//						: jsonObj_med.getString("Eff_date").length() == 0) {
//					Timestamp ts = new Timestamp(System.currentTimeMillis());
//					Date date = new Date(ts.getTime());
//
//					Calendar c = Calendar.getInstance();
//					c.setTime(date);
//					c.add(Calendar.YEAR, 0);
//					java.util.Date newDate = c.getTime();
//					java.sql.Date sqlDate = new java.sql.Date(newDate.getTime());
//
//					appendix_product.setEff_date(sqlDate);
//				} else {
//					String t = jsonObj_med.getString("Eff_date").replace("-", "/");
//					java.util.Date date1 = (java.util.Date) new SimpleDateFormat("dd/MM/yyyy").parse(t);
//					java.sql.Date sd = new java.sql.Date(date1.getTime());
//					appendix_product.setEff_date(sd);
//				}
//				if (jsonObj_med.getString("Exp_date") == null ? true
//						: jsonObj_med.getString("Exp_date").length() == 0) {
//					String str = "9999-12-31";
//					Date date3 = Date.valueOf(str);
//					appendix_product.setExp_date(date3);
//				} else {
//					String t = jsonObj_med.getString("Exp_date").replace("-", "/");
//					java.util.Date date1 = (java.util.Date) new SimpleDateFormat("dd/MM/yyyy").parse(t);
//					java.sql.Date sd = new java.sql.Date(date1.getTime());
//					appendix_product.setExp_date(sd);
//				}
				
				str = "9456-12-31";
				if (jsonObj_med.getString("Eff_date") != "") {
					System.out.println(jsonObj_med.getString("Eff_date"));
					System.out.println(getData(jsonObj_med.getString("Eff_date")));
					appendix_product.setEff_date(getData(jsonObj_med.getString("Eff_date")));
				} else {
					java.util.Date date2 = (java.util.Date) new SimpleDateFormat("yyyy/mm/dd").parse(str);
					java.sql.Date sd = new java.sql.Date(date2.getTime());
					appendix_product.setEff_date(sd);
				}
				if (jsonObj_med.getString("Exp_date") != "") {
					appendix_product.setExp_date(getData(jsonObj_med.getString("Exp_date")));
				} else {
					java.util.Date date2 = (java.util.Date) new SimpleDateFormat("yyyy/mm/dd").parse(str);
					java.sql.Date sd = new java.sql.Date(date2.getTime());
					appendix_product.setExp_date(sd);

				}


				appendix_product.setUser_code(userId);
				appendix_product.setUpdate_time(getCurrentTimestamp());

			}
			listmedexam.add(appendix_product);
			listmedexamgroup.add(appendix_product2);
		}

		settoService.setTxnAppendixProduct(listmedexamgroup);
		settoService.setAppendixProduct(listmedexam);
		return String.valueOf(new_id);
	}

	public String save_NotApproveApenddixProductTab2(HttpServletRequest request, HttpServletResponse response)
			throws Exception { // mortality_Tli

		MainUnderWriteSaveDateService settoService = new MainUnderWriteSaveDateService();
		MainUnderWriteService mis = new MainUnderWriteService();
		String medexamFrom_str = request.getParameter("appendix_productFrom_data");
		String medexamg_str = request.getParameter("appendix_productTo_data");
		String approve_note = request.getParameter("approve_note");
		JSONArray jsonArr_medexamFrom = new JSONArray(medexamFrom_str);
		JSONArray jsonArr_medexamgTo = new JSONArray(medexamg_str);
		ArrayList<Appendix_product> listmedexam = new ArrayList<>();
		ArrayList<Txn_appendix_product> listmedexamgroup = new ArrayList<>();
		ArrayList<Txn_appendix_product> listtxnapp = new ArrayList<>();
		ArrayList<Txn_underwrite> listtxnuw = new ArrayList<>();
		ArrayList<Txn_underwrite> maxlisttxnuw = new ArrayList<>();
		ArrayList<Txn_approve> listtxnappr = new ArrayList<>();
		ArrayList<AppendixVersionALLAccessData> appendixVersoinALL = null;
		int new_id = 0;
		JSONObject responsejson = new JSONObject();
		for (int i = 0; i < jsonArr_medexamgTo.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexamgTo.getJSONObject(i);
			new_id = Integer
					.parseInt(jsonObj_med.getString("Txn_id").length() == 0 ? "0" : jsonObj_med.getString("Txn_id"));
		}
		if (jsonArr_medexamgTo.length() > 0) {

			// GEN HEADER TXN
			Txn_underwrite txn = new Txn_underwrite();
			txn.setTxn_type("APPENDIX_PRODUCT");
			txn.setTxn_id(new_id);
			txn.setTxn_status("REJECTED");
			txn.setUser_code(userId);
			txn.setUpdate_time(getCurrentTimestamp());
			listtxnuw.add(txn);
			settoService.genTxnUnderwrite(listtxnuw);
			responsejson.put("Txn_Data", new_id);
			// responseText = responsejson.toString();
		}
		if (jsonArr_medexamgTo.length() > 0) {

			// GEN TXN Approve
			Txn_approve txna = new Txn_approve();

			txna.setTxn_id(new_id);
			txna.setTxn_status("REJECTED");
			txna.setRqst_time(getCurrentTimestamp());
			txna.setUser_code(userId);
			txna.setRqst_user_code(userId);
			txna.setUpdate_time(getCurrentTimestamp());
			txna.setApprv_note(approve_note);
			txna.setApprv_time(getCurrentTimestamp());
			txna.setApprv_user_code(userId);

			listtxnappr.add(txna);
			settoService.genTxnApprove(listtxnappr);

		}
//		for (int i = 0; i < jsonArr_medexamgTo.length(); i++) {
//			JSONObject jsonObj_med = jsonArr_medexamgTo.getJSONObject(i);
//			Txn_appendix_product appendix_product2 = new Txn_appendix_product();
//			if (true) {
//				// MEDEXAM
//				if (jsonObj_med.getString("Eff_date") == null ? true
//						: jsonObj_med.getString("Eff_date").length() == 0) {
//					Timestamp ts = new Timestamp(System.currentTimeMillis());
//					Date date = new Date(ts.getTime());
//
//					Calendar c = Calendar.getInstance();
//					c.setTime(date);
//					c.add(Calendar.YEAR, 543);
//					java.util.Date newDate = c.getTime();
//					java.sql.Date sqlDate = new java.sql.Date(newDate.getTime());
//
//					appendix_product2.setEff_date(sqlDate);
//				} else {
//					String t = jsonObj_med.getString("Eff_date").replace("-", "/");
//					java.util.Date date1 = (java.util.Date) new SimpleDateFormat("dd/MM/yyyy").parse(t);
//					java.sql.Date sd = new java.sql.Date(date1.getTime());
//					appendix_product2.setEff_date(sd);
//				}
//				if (jsonObj_med.getString("Exp_date") == null ? true
//						: jsonObj_med.getString("Exp_date").length() == 0) {
//					String str = "9999-12-31";
//					Date date3 = Date.valueOf(str);
//					appendix_product2.setExp_date(date3);
//				} else {
//					String t = jsonObj_med.getString("Exp_date").replace("-", "/");
//					java.util.Date date1 = (java.util.Date) new SimpleDateFormat("dd/MM/yyyy").parse(t);
//					java.sql.Date sd = new java.sql.Date(date1.getTime());
//					appendix_product2.setExp_date(sd);
//				}
//
//				appendix_product2.setUser_code(userId);
//				appendix_product2.setUpdate_time(getCurrentTimestamp());
//
//			}
//			listmedexamgroup.add(appendix_product2);
//		}
//
//		settoService.setTxnAppendixProduct(listmedexamgroup);
		return String.valueOf(new_id);
	}

//	public String save_ApenddixProductTab2(HttpServletRequest request, HttpServletResponse response) throws Exception { // mortality_Tli
//		MainUnderWriteSaveDateService settoService = new MainUnderWriteSaveDateService();
//		MainUnderWriteService mis = new MainUnderWriteService();
//		String medexamFrom_str = request.getParameter("appendix_productFrom_data");
//		String medexamg_str = request.getParameter("appendix_productTo_data");
//		JSONArray jsonArr_medexamFrom = new JSONArray(medexamFrom_str);
//		JSONArray jsonArr_medexamgTo = new JSONArray(medexamg_str);
//		ArrayList<Appendix_product> listmedexam = new ArrayList<>();
//		ArrayList<Appendix_product> listmedexamgroup = new ArrayList<>();
//		ArrayList<Txn_appendix_product> listtxnapp = new ArrayList<>();
//		ArrayList<Txn_underwrite> listtxnuw = new ArrayList<>();
//		ArrayList<Txn_approve> listtxnappr = new ArrayList<>();
//		ArrayList<AppendixVersionALLAccessData> appendixVersoinALL = null;
//
//		for (int i = 0; i < jsonArr_medexamFrom.length(); i++) {
//			JSONObject jsonObj_med = jsonArr_medexamFrom.getJSONObject(i);
//			Appendix_product appendix_product = new Appendix_product();
//			if (true) {
//				// MEDEXAM
//				appendix_product.setAppendix_code(jsonObj_med.getString("Appendix_code"));
//				appendix_product.setPrd_code(jsonObj_med.getString("Prd_code"));
//
//				appendixVersoinALL = mis.searchAppendixVersionALL(jsonObj_med.getString("Appendix_code"),
//						(Integer) jsonObj_med.getInt("Version_id"));
//
//				if (appendixVersoinALL.size() != 0) {
//					if (appendixVersoinALL.get(0).getAppendix_version() != null) {
//						JSONObject data_json = new JSONObject();
//						//System.out.println(appendixVersoinALL.get(0).getAppendix_version().getEff_date());
//						// appendix_product.setEff_date(appendixVersoinALL.get(0).getAppendix_version().getEff_date());
//						// appendix_product.setExp_date(appendixVersoinALL.get(0).getAppendix_version().getExp_date());
//
//						String t = jsonObj_med.getString("Eff_date").replace("-", "/");
//						java.util.Date date1 = (java.util.Date) new SimpleDateFormat("yyyy/MM/dd").parse(t);
//						java.sql.Date sd = new java.sql.Date(date1.getTime());
//						appendix_product.setEff_date(sd);
//
//						Timestamp ts = new Timestamp(System.currentTimeMillis());
//						Date date = new Date(ts.getTime());
//
//						Calendar c = Calendar.getInstance();
//						c.setTime(date);
//						c.add(Calendar.YEAR, 0);
//						java.util.Date newDate = c.getTime();
//						java.sql.Date sqlDate = new java.sql.Date(newDate.getTime());
//						appendix_product.setExp_date(sqlDate);
//
//					}
//				}
//
//				appendix_product.setUser_code(userId);
//				appendix_product.setUpdate_time(getCurrentTimestamp());
//
//			}
//			listmedexam.add(appendix_product);
//
//		}
//		for (int i = 0; i < jsonArr_medexamgTo.length(); i++) {
//			JSONObject jsonObj_med = jsonArr_medexamgTo.getJSONObject(i);
//			Appendix_product appendix_product2 = new Appendix_product();
//			if (true) {
//				// MEDEXAM
//				appendix_product2.setAppendix_code(jsonObj_med.getString("Appendix_code"));
//				appendix_product2.setPrd_code(jsonObj_med.getString("Prd_code"));
//
//				if (jsonObj_med.getString("Eff_date") == null ? true
//						: jsonObj_med.getString("Eff_date").length() == 0) {
//					Timestamp ts = new Timestamp(System.currentTimeMillis());
//					Date date = new Date(ts.getTime());
//
//					Calendar c = Calendar.getInstance();
//					c.setTime(date);
//					c.add(Calendar.YEAR, 543);
//					java.util.Date newDate = c.getTime();
//					java.sql.Date sqlDate = new java.sql.Date(newDate.getTime());
//
//					// java.util.Date date1=(java.util.Date) new
//					// SimpleDateFormat("yyyy/mm/dd").parse(newDate.toString());
//					// java.sql.Date sd = new java.sql.Date(sqlDate);
//
//					appendix_product2.setEff_date(sqlDate);
//				} else {
//					String t = jsonObj_med.getString("Eff_date").replace("-", "/");
//					java.util.Date date1 = (java.util.Date) new SimpleDateFormat("yyyy/MM/dd").parse(t);
//					java.sql.Date sd = new java.sql.Date(date1.getTime());
//					appendix_product2.setEff_date(sd);
//				}
//				if (jsonObj_med.getString("Exp_date") == null ? true
//						: jsonObj_med.getString("Exp_date").length() == 0) {
//					String str = "9999-12-31";
//					Date date3 = Date.valueOf(str);
//					appendix_product2.setExp_date(date3);
//				} else {
//					String t = jsonObj_med.getString("Exp_date").replace("-", "/");
//					java.util.Date date1 = (java.util.Date) new SimpleDateFormat("yyyy/MM/dd").parse(t);
//					java.sql.Date sd = new java.sql.Date(date1.getTime());
//					appendix_product2.setExp_date(sd);
//				}
//
//				appendix_product2.setUser_code(userId);
//				appendix_product2.setUpdate_time(getCurrentTimestamp());
//
//			}
//			listmedexamgroup.add(appendix_product2);
//		}
//
//		settoService.setAppendixProduct(listmedexam, listmedexamgroup);
//		return "Test Save ";
//	}

	public String save_Appendix_Sum_Accum_Tab1(HttpServletRequest request, HttpServletResponse response)
			throws Exception { // mortality_Tli
		MainUnderWriteSaveDateService settoService = new MainUnderWriteSaveDateService();
		String medexam_str = request.getParameter("appendix_sa_data");
		JSONArray jsonArr_medexam = new JSONArray(medexam_str);
		ArrayList<Appendix_sum_accum> listmedexam = new ArrayList<>();
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			Appendix_sum_accum med = new Appendix_sum_accum();
			if (true) {
				// MEDEXAM
				med.setAppendix_code(jsonObj_med.getString("Appendix_code"));
				med.setVersion_id(Integer.parseInt(jsonObj_med.getString("Version_ID")));
				med.setIc_yes(Integer.parseInt(jsonObj_med.getString("IC_Yes")));
				med.setIc_no(Integer.parseInt(jsonObj_med.getString("IC_No")));
				med.setSub_yes(Integer.parseInt(jsonObj_med.getString("Sub_Yes")));
				med.setSub_no(Integer.parseInt(jsonObj_med.getString("Sub_No")));

				med.setUser_code(userId);
				med.setUpdate_time(getCurrentTimestamp());

			}
			listmedexam.add(med);
		}

		settoService.setAppendixSA(listmedexam);
		return "Test Save ";
	}
	
	public String save_DraftAppendix_Sum_Accum_Tab1(HttpServletRequest request, HttpServletResponse response)
			throws Exception { // mortality_Tli
		MainUnderWriteSaveDateService settoService = new MainUnderWriteSaveDateService();
		String medexam_str = request.getParameter("appendix_sa_data");
		JSONArray jsonArr_medexam = new JSONArray(medexam_str);
		
		ArrayList<Txn_underwrite> maxlisttxnuw = new ArrayList<>();
		MainUnderWriteService mis = new MainUnderWriteService();
		ArrayList<Txn_appendix_sum_accum> listmedexamgroup = new ArrayList<>();
		ArrayList<Txn_underwrite> listtxnuw = new ArrayList<>();
		ArrayList<Txn_approve> listtxnappr = new ArrayList<>();
		int new_id = 0;
		JSONObject responsejson = new JSONObject();
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			new_id = Integer
					.parseInt(jsonObj_med.getString("Txn_id").length() == 0 ? "0" : jsonObj_med.getString("Txn_id"));
		}
		if (jsonArr_medexam.length() > 0 && new_id == 0) {
			maxlisttxnuw = mis.getTxn_underwrite("");
			if (maxlisttxnuw.size()> 0) {
				new_id = maxlisttxnuw.get(0).getTxn_id() + 1;
			}else {
				new_id = 1;
			}
			// GEN HEADER TXN
			Txn_underwrite txn = new Txn_underwrite();
			txn.setTxn_type("APPENDIX_PRODUCT");
			txn.setTxn_id(new_id);
			txn.setTxn_status("NEW");
			txn.setUser_code(userId);
			txn.setUpdate_time(getCurrentTimestamp());
			listtxnuw.add(txn);
			settoService.genTxnUnderwrite(listtxnuw);
			responsejson.put("Txn_Data", new_id);
			// responseText = responsejson.toString();

			// GEN TXN Approve
			Txn_approve txna = new Txn_approve();
			txna.setTxn_id(new_id);
			txna.setTxn_status("NEW");
			txna.setUser_code(userId);
			txna.setUpdate_time(getCurrentTimestamp());
			txna.setRqst_time(getCurrentTimestamp());
			txna.setRqst_user_code(userId);
			listtxnappr.add(txna);
			settoService.genTxnApprove(listtxnappr);
		}
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			Txn_appendix_sum_accum appendix_product2 = new Txn_appendix_sum_accum();
			if (true) {
				// MEDEXAM
				appendix_product2.setTxn_id(new_id);
				appendix_product2.setAppendix_code(jsonObj_med.getString("Appendix_code"));
				appendix_product2.setVersion_id(Integer.parseInt(jsonObj_med.getString("Version_ID")));
				appendix_product2.setIc_yes(Integer.parseInt(jsonObj_med.getString("IC_Yes")));
				appendix_product2.setIc_no(Integer.parseInt(jsonObj_med.getString("IC_No")));
				appendix_product2.setSub_yes(Integer.parseInt(jsonObj_med.getString("Sub_Yes")));
				appendix_product2.setSub_no(Integer.parseInt(jsonObj_med.getString("Sub_No")));

				appendix_product2.setUser_code(userId);
				appendix_product2.setUpdate_time(getCurrentTimestamp());

			}
			listmedexamgroup.add(appendix_product2);
		}

		settoService.setAppendixSA_2(null, listmedexamgroup);
		//return String.valueOf(new_id);
		

		return String.valueOf(new_id);
	}
	public String save_ReqAppendix_Sum_Accum_Tab1(HttpServletRequest request, HttpServletResponse response)
			throws Exception { // mortality_Tli
		MainUnderWriteSaveDateService settoService = new MainUnderWriteSaveDateService();
		MainUnderWriteService mis = new MainUnderWriteService();
		ArrayList<Txn_underwrite> maxlisttxnuw = new ArrayList<>();
		String medexam_str = request.getParameter("appendix_sa_data");
		JSONArray jsonArr_medexam = new JSONArray(medexam_str);
		ArrayList<Appendix_sum_accum> listmedexam = new ArrayList<>();
		
		ArrayList<Txn_appendix_sum_accum> listmedexamgroup = new ArrayList<>();
		ArrayList<Txn_underwrite> listtxnuw = new ArrayList<>();
		ArrayList<Txn_approve> listtxnappr = new ArrayList<>();
		int new_id = 0;
		JSONObject responsejson = new JSONObject();
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			new_id = Integer
					.parseInt(jsonObj_med.getString("Txn_id").length() == 0 ? "0" : jsonObj_med.getString("Txn_id"));
		}
		
		if (jsonArr_medexam.length() > 0 && new_id == 0) {
			maxlisttxnuw = mis.getTxn_underwrite("");
			if (maxlisttxnuw.size()> 0) {
				new_id = maxlisttxnuw.get(0).getTxn_id() + 1;
			}else {
				new_id = 1;
			}
			// GEN HEADER TXN
			Txn_underwrite txn = new Txn_underwrite();
			txn.setTxn_type("SUM_ACCUM");
			txn.setTxn_id(new_id);
			txn.setTxn_status("REQUEST_FOR_APPROVE");
			txn.setUser_code(userId);
			txn.setUpdate_time(getCurrentTimestamp());
			listtxnuw.add(txn);
			settoService.genTxnUnderwrite(listtxnuw);
			responsejson.put("Txn_Data", new_id);
			// responseText = responsejson.toString();

			// GEN TXN Approve
			Txn_approve txna = new Txn_approve();
			txna.setTxn_id(new_id);
			txna.setTxn_status("REQUEST_FOR_APPROVE");
			txna.setUser_code(userId);
			txna.setUpdate_time(getCurrentTimestamp());
			txna.setRqst_time(getCurrentTimestamp());
			txna.setRqst_user_code(userId);
			listtxnappr.add(txna);
			settoService.genTxnApprove(listtxnappr);
		}else {
		
			if (jsonArr_medexam.length() > 0) {
	
				// GEN HEADER TXN
				Txn_underwrite txn = new Txn_underwrite();
				txn.setTxn_type("SUM_ACCUM");
				txn.setTxn_id(new_id);
				txn.setTxn_status("REQUEST_FOR_APPROVE");
				txn.setUser_code(userId);
				txn.setUpdate_time(getCurrentTimestamp());
				listtxnuw.add(txn);
				settoService.genTxnUnderwrite(listtxnuw);
				responsejson.put("Txn_Data", new_id);
				// responseText = responsejson.toString();
			}
			if (jsonArr_medexam.length() > 0) {
	
				// GEN TXN Approve
				Txn_approve txna = new Txn_approve();
				txna.setTxn_id(new_id);
				txna.setTxn_status("REQUEST_FOR_APPROVE");
				txna.setUser_code(userId);
				txna.setUpdate_time(getCurrentTimestamp());
				txna.setRqst_time(getCurrentTimestamp());
				txna.setRqst_user_code(userId);
				listtxnappr.add(txna);
				settoService.genTxnApprove(listtxnappr);
	
			}
		}
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			Txn_appendix_sum_accum appendix_product2 = new Txn_appendix_sum_accum();
			if (true) {
				// MEDEXAM
				appendix_product2.setTxn_id(new_id);
				appendix_product2.setAppendix_code(jsonObj_med.getString("Appendix_code"));
				appendix_product2.setVersion_id(Integer.parseInt(jsonObj_med.getString("Version_ID")));
				appendix_product2.setIc_yes(Integer.parseInt(jsonObj_med.getString("IC_Yes")));
				appendix_product2.setIc_no(Integer.parseInt(jsonObj_med.getString("IC_No")));
				appendix_product2.setSub_yes(Integer.parseInt(jsonObj_med.getString("Sub_Yes")));
				appendix_product2.setSub_no(Integer.parseInt(jsonObj_med.getString("Sub_No")));

				appendix_product2.setUser_code(userId);
				appendix_product2.setUpdate_time(getCurrentTimestamp());

			}
			listmedexamgroup.add(appendix_product2);
		}

		settoService.setAppendixSA_2(null, listmedexamgroup);
		//return String.valueOf(new_id);
		

		return String.valueOf(new_id);
	}
	public String save_ReqEditAppendix_Sum_Accum_Tab1(HttpServletRequest request, HttpServletResponse response)
			throws Exception { // mortality_Tli
		MainUnderWriteSaveDateService settoService = new MainUnderWriteSaveDateService();
		String medexam_str = request.getParameter("appendix_sa_data");
		JSONArray jsonArr_medexam = new JSONArray(medexam_str);
		ArrayList<Appendix_sum_accum> listmedexam = new ArrayList<>();
		
		ArrayList<Txn_appendix_sum_accum> listmedexamgroup = new ArrayList<>();
		ArrayList<Txn_underwrite> listtxnuw = new ArrayList<>();
		ArrayList<Txn_approve> listtxnappr = new ArrayList<>();
		int new_id = 0;
		JSONObject responsejson = new JSONObject();
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			new_id = Integer
					.parseInt(jsonObj_med.getString("Txn_id").length() == 0 ? "0" : jsonObj_med.getString("Txn_id"));
		}
		if (jsonArr_medexam.length() > 0) {

			// GEN HEADER TXN
			Txn_underwrite txn = new Txn_underwrite();
			txn.setTxn_type("SUM_ACCUM");
			txn.setTxn_id(new_id);
			txn.setTxn_status("REQUEST_UPDATE");
			txn.setUser_code(userId);
			txn.setUpdate_time(getCurrentTimestamp());
			listtxnuw.add(txn);
			settoService.genTxnUnderwrite(listtxnuw);
			responsejson.put("Txn_Data", new_id);
			// responseText = responsejson.toString();
		}
		if (jsonArr_medexam.length() > 0) {

			// GEN TXN Approve
			Txn_approve txna = new Txn_approve();
			txna.setTxn_id(new_id);
			txna.setTxn_status("REQUEST_UPDATE");
			txna.setUser_code(userId);
			txna.setUpdate_time(getCurrentTimestamp());
			txna.setRqst_time(getCurrentTimestamp());
			txna.setRqst_user_code(userId);
			listtxnappr.add(txna);
			settoService.genTxnApprove(listtxnappr);

		}
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			Txn_appendix_sum_accum appendix_product2 = new Txn_appendix_sum_accum();
			if (true) {
				// MEDEXAM
				appendix_product2.setTxn_id(new_id);
				appendix_product2.setAppendix_code(jsonObj_med.getString("Appendix_code"));
				appendix_product2.setVersion_id(Integer.parseInt(jsonObj_med.getString("Version_ID")));
				appendix_product2.setIc_yes(Integer.parseInt(jsonObj_med.getString("IC_Yes")));
				appendix_product2.setIc_no(Integer.parseInt(jsonObj_med.getString("IC_No")));
				appendix_product2.setSub_yes(Integer.parseInt(jsonObj_med.getString("Sub_Yes")));
				appendix_product2.setSub_no(Integer.parseInt(jsonObj_med.getString("Sub_No")));

				appendix_product2.setUser_code(userId);
				appendix_product2.setUpdate_time(getCurrentTimestamp());

			}
			listmedexamgroup.add(appendix_product2);
		}

		settoService.setAppendixSA_2(null, listmedexamgroup);
		//return String.valueOf(new_id);
		

		return String.valueOf(new_id);
	}
	public String save_ApproveAppendix_Sum_Accum_Tab1(HttpServletRequest request, HttpServletResponse response)
			throws Exception { // mortality_Tli
		MainUnderWriteSaveDateService settoService = new MainUnderWriteSaveDateService();
		String medexam_str = request.getParameter("appendix_sa_data");
		String approve_note = request.getParameter("approve_note");
		JSONArray jsonArr_medexam = new JSONArray(medexam_str);
		ArrayList<Appendix_sum_accum> listmedexam = new ArrayList<>();
		
		ArrayList<Txn_appendix_sum_accum> listmedexamgroup = new ArrayList<>();
		ArrayList<Txn_underwrite> listtxnuw = new ArrayList<>();
		ArrayList<Txn_approve> listtxnappr = new ArrayList<>();
		int new_id = 0;
		JSONObject responsejson = new JSONObject();
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			new_id = Integer
					.parseInt(jsonObj_med.getString("Txn_id").length() == 0 ? "0" : jsonObj_med.getString("Txn_id"));
		}
		if (jsonArr_medexam.length() > 0) {

			// GEN HEADER TXN
			Txn_underwrite txn = new Txn_underwrite();
			txn.setTxn_type("SUM_ACCUM");
			txn.setTxn_id(new_id);
			txn.setTxn_status("APPROVED");
			txn.setUser_code(userId);
			txn.setUpdate_time(getCurrentTimestamp());
			listtxnuw.add(txn);
			settoService.genTxnUnderwrite(listtxnuw);
			responsejson.put("Txn_Data", new_id);
			// responseText = responsejson.toString();
		}
		if (jsonArr_medexam.length() > 0) {

			// GEN TXN Approve
			Txn_approve txna = new Txn_approve();
			txna.setTxn_id(new_id);
			txna.setTxn_status("APPROVED");
			txna.setApprv_note(approve_note==null?"":approve_note);
			txna.setRqst_time(getCurrentTimestamp());
			txna.setUser_code(userId);
			txna.setUpdate_time(getCurrentTimestamp());
			txna.setRqst_user_code(userId);
			txna.setApprv_time(getCurrentTimestamp());
			txna.setApprv_user_code(userId);

			listtxnappr.add(txna);
			settoService.genTxnApprove(listtxnappr);

		}
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			Txn_appendix_sum_accum appendix_product2 = new Txn_appendix_sum_accum();
			if (true) {
				// MEDEXAM
				appendix_product2.setTxn_id(new_id);
				appendix_product2.setAppendix_code(jsonObj_med.getString("Appendix_code"));
				appendix_product2.setVersion_id(Integer.parseInt(jsonObj_med.getString("Version_ID")));
				appendix_product2.setIc_yes(Integer.parseInt(jsonObj_med.getString("IC_Yes")));
				appendix_product2.setIc_no(Integer.parseInt(jsonObj_med.getString("IC_No")));
				appendix_product2.setSub_yes(Integer.parseInt(jsonObj_med.getString("Sub_Yes")));
				appendix_product2.setSub_no(Integer.parseInt(jsonObj_med.getString("Sub_No")));

				appendix_product2.setUser_code(userId);
				appendix_product2.setUpdate_time(getCurrentTimestamp());

			}
			listmedexamgroup.add(appendix_product2);
		}

		settoService.setAppendixSA_2(null, listmedexamgroup);
		//return String.valueOf(new_id);
		
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			Appendix_sum_accum med = new Appendix_sum_accum();
			if (true) {
				// MEDEXAM
				med.setAppendix_code(jsonObj_med.getString("Appendix_code"));
				med.setVersion_id(Integer.parseInt(jsonObj_med.getString("Version_ID")));
				med.setIc_yes(Integer.parseInt(jsonObj_med.getString("IC_Yes")));
				med.setIc_no(Integer.parseInt(jsonObj_med.getString("IC_No")));
				med.setSub_yes(Integer.parseInt(jsonObj_med.getString("Sub_Yes")));
				med.setSub_no(Integer.parseInt(jsonObj_med.getString("Sub_No")));

				med.setUser_code(userId);
				med.setUpdate_time(getCurrentTimestamp());

			}
			listmedexam.add(med);
		}

		settoService.setAppendixSA(listmedexam);
		return String.valueOf(new_id);
	}
	public String save_ApproveEditAppendix_Sum_Accum_Tab1(HttpServletRequest request, HttpServletResponse response)
			throws Exception { // mortality_Tli
		MainUnderWriteSaveDateService settoService = new MainUnderWriteSaveDateService();
		String medexam_str = request.getParameter("appendix_sa_data");
		JSONArray jsonArr_medexam = new JSONArray(medexam_str);
		ArrayList<Appendix_sum_accum> listmedexam = new ArrayList<>();
		
		ArrayList<Txn_appendix_sum_accum> listmedexamgroup = new ArrayList<>();
		ArrayList<Txn_underwrite> listtxnuw = new ArrayList<>();
		ArrayList<Txn_approve> listtxnappr = new ArrayList<>();
		int new_id = 0;
		JSONObject responsejson = new JSONObject();
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			new_id = Integer
					.parseInt(jsonObj_med.getString("Txn_id").length() == 0 ? "0" : jsonObj_med.getString("Txn_id"));
		}
		if (jsonArr_medexam.length() > 0) {

			// GEN HEADER TXN
			Txn_underwrite txn = new Txn_underwrite();
			txn.setTxn_type("SUM_ACCUM");
			txn.setTxn_id(new_id);
			txn.setTxn_status("UPDATE");
			txn.setUser_code(userId);
			txn.setUpdate_time(getCurrentTimestamp());
			listtxnuw.add(txn);
			settoService.genTxnUnderwrite(listtxnuw);
			responsejson.put("Txn_Data", new_id);
			// responseText = responsejson.toString();
		}
		if (jsonArr_medexam.length() > 0) {

			// GEN TXN Approve
			Txn_approve txna = new Txn_approve();
			txna.setTxn_id(new_id);
			txna.setTxn_status("UPDATE");
			txna.setRqst_time(getCurrentTimestamp());
			txna.setUser_code(userId);
			txna.setUpdate_time(getCurrentTimestamp());
			txna.setRqst_user_code(userId);
			txna.setApprv_time(getCurrentTimestamp());
			txna.setApprv_user_code(userId);

			listtxnappr.add(txna);
			settoService.genTxnApprove(listtxnappr);

		}
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			Txn_appendix_sum_accum appendix_product2 = new Txn_appendix_sum_accum();
			if (true) {
				// MEDEXAM
				appendix_product2.setTxn_id(new_id);
				appendix_product2.setAppendix_code(jsonObj_med.getString("Appendix_code"));
				appendix_product2.setVersion_id(Integer.parseInt(jsonObj_med.getString("Version_ID")));
				appendix_product2.setIc_yes(Integer.parseInt(jsonObj_med.getString("IC_Yes")));
				appendix_product2.setIc_no(Integer.parseInt(jsonObj_med.getString("IC_No")));
				appendix_product2.setSub_yes(Integer.parseInt(jsonObj_med.getString("Sub_Yes")));
				appendix_product2.setSub_no(Integer.parseInt(jsonObj_med.getString("Sub_No")));

				appendix_product2.setUser_code(userId);
				appendix_product2.setUpdate_time(getCurrentTimestamp());

			}
			listmedexamgroup.add(appendix_product2);
		}

		settoService.setAppendixSA_2(null, listmedexamgroup);
		//return String.valueOf(new_id);
		
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			Appendix_sum_accum med = new Appendix_sum_accum();
			if (true) {
				// MEDEXAM
				med.setAppendix_code(jsonObj_med.getString("Appendix_code"));
				med.setVersion_id(Integer.parseInt(jsonObj_med.getString("Version_ID")));
				med.setIc_yes(Integer.parseInt(jsonObj_med.getString("IC_Yes")));
				med.setIc_no(Integer.parseInt(jsonObj_med.getString("IC_No")));
				med.setSub_yes(Integer.parseInt(jsonObj_med.getString("Sub_Yes")));
				med.setSub_no(Integer.parseInt(jsonObj_med.getString("Sub_No")));

				med.setUser_code(userId);
				med.setUpdate_time(getCurrentTimestamp());

			}
			listmedexam.add(med);
		}

		settoService.setAppendixSA(listmedexam);
		return String.valueOf(new_id);
	}
	public String save_NotApproveAppendix_Sum_Accum_Tab1(HttpServletRequest request, HttpServletResponse response)
			throws Exception { // mortality_Tli
		MainUnderWriteSaveDateService settoService = new MainUnderWriteSaveDateService();
		String medexam_str = request.getParameter("appendix_sa_data");
		JSONArray jsonArr_medexam = new JSONArray(medexam_str);
		ArrayList<Appendix_sum_accum> listmedexam = new ArrayList<>();
		
		ArrayList<Txn_appendix_sum_accum> listmedexamgroup = new ArrayList<>();
		ArrayList<Txn_underwrite> listtxnuw = new ArrayList<>();
		ArrayList<Txn_approve> listtxnappr = new ArrayList<>();
		int new_id = 0;
		String approve_note = request.getParameter("approve_note");
		JSONObject responsejson = new JSONObject();
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			new_id = Integer
					.parseInt(jsonObj_med.getString("Txn_id").length() == 0 ? "0" : jsonObj_med.getString("Txn_id"));
		}
		if (jsonArr_medexam.length() > 0) {

			// GEN HEADER TXN
			Txn_underwrite txn = new Txn_underwrite();
			txn.setTxn_type("APPENDIX_PRODUCT");
			txn.setTxn_id(new_id);
			txn.setTxn_status("REJECTED");
			txn.setUser_code(userId);
			txn.setUpdate_time(getCurrentTimestamp());
			listtxnuw.add(txn);
			settoService.genTxnUnderwrite(listtxnuw);
			responsejson.put("Txn_Data", new_id);
			// responseText = responsejson.toString();
		}
		if (jsonArr_medexam.length() > 0) {

			// GEN TXN Approve
			Txn_approve txna = new Txn_approve();

			txna.setTxn_id(new_id);
			txna.setTxn_status("REJECTED");
			txna.setRqst_time(getCurrentTimestamp());
			txna.setUser_code(userId);
			txna.setRqst_user_code(userId);
			txna.setUpdate_time(getCurrentTimestamp());
			txna.setApprv_note(approve_note);
			txna.setApprv_time(getCurrentTimestamp());
			txna.setApprv_user_code(userId);

			listtxnappr.add(txna);
			settoService.genTxnApprove(listtxnappr);

		}

		return String.valueOf(new_id);
	}
	public String save_PolicyStaus_G(HttpServletRequest request, HttpServletResponse response) throws Exception { // mortality_Tli
		MainUnderWriteSaveDateService settoService = new MainUnderWriteSaveDateService();
		String medexam_str = request.getParameter("policyG_data");
		JSONArray jsonArr_medexam = new JSONArray(medexam_str);
		ArrayList<Policy_status_accum> listmedexam = new ArrayList<>();
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			Policy_status_accum med = new Policy_status_accum();
			if (true) {
				// MEDEXAM
				med.setCov_cat_id(jsonObj_med.getInt("Cov_cat_id"));
				med.setPolicy_status(jsonObj_med.getString("Policy_code"));
				med.setIs_insure_sum(jsonObj_med.getBoolean("Is_insure_sum"));
				med.setIs_med_sum(jsonObj_med.getBoolean("Is_med_sum"));
				med.setIs_rider_sum(jsonObj_med.getBoolean("Is_rider_sum"));
				med.setIs_sum_for_rider(jsonObj_med.getBoolean("Is_sum_for_rider"));

			}
			listmedexam.add(med);
		}

		settoService.setPolicyStatus(listmedexam);
		return "Test Save ";
	}
	public String save_PolicyStausNew_G(HttpServletRequest request, HttpServletResponse response) throws Exception { // mortality_Tli
		MainUnderWriteSaveDateService settoService = new MainUnderWriteSaveDateService();
		String medexam_str = request.getParameter("policyG_data");
		JSONArray jsonArr_medexam = new JSONArray(medexam_str);
		ArrayList<Policy_status_accum> listmedexam = new ArrayList<>();
		
		ArrayList<Txn_underwrite> maxlisttxnuw = new ArrayList<>();
		MainUnderWriteService mis = new MainUnderWriteService();
		ArrayList<Txn_policy_status_accum> listmedexamgroup = new ArrayList<>();
		ArrayList<Txn_underwrite> listtxnuw = new ArrayList<>();
		ArrayList<Txn_approve> listtxnappr = new ArrayList<>();
		int new_id = 0;
		JSONObject responsejson = new JSONObject();
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			new_id = Integer
					.parseInt(jsonObj_med.getString("Txn_id").length() == 0 ? "0" : jsonObj_med.getString("Txn_id"));
		}
		if (jsonArr_medexam.length() > 0 && new_id == 0) {
			maxlisttxnuw = mis.getTxn_underwrite("");
			if (maxlisttxnuw.size()> 0) {
				new_id = maxlisttxnuw.get(0).getTxn_id() + 1;
			}else {
				new_id = 1;
			}
			// GEN HEADER TXN
			Txn_underwrite txn = new Txn_underwrite();
			txn.setTxn_type("POL_STATUS");
			txn.setTxn_id(new_id);
			txn.setTxn_status("NEW");
			txn.setUser_code(userId);
			txn.setUpdate_time(getCurrentTimestamp());
			listtxnuw.add(txn);
			settoService.genTxnUnderwrite(listtxnuw);
			responsejson.put("Txn_Data", new_id);
			// responseText = responsejson.toString();

			// GEN TXN Approve
			Txn_approve txna = new Txn_approve();
			txna.setTxn_id(new_id);
			txna.setTxn_status("NEW");
			txna.setUser_code(userId);
			txna.setUpdate_time(getCurrentTimestamp());
			txna.setRqst_time(getCurrentTimestamp());
			txna.setRqst_user_code(userId);
			listtxnappr.add(txna);
			settoService.genTxnApprove(listtxnappr);
		}
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			Txn_policy_status_accum appendix_product2 = new Txn_policy_status_accum();
			if (true) {
				// MEDEXAM
				appendix_product2.setTxn_id(new_id);
				appendix_product2.setCov_cat_id(jsonObj_med.getInt("Cov_cat_id"));
				appendix_product2.setPolicy_status(jsonObj_med.getString("Policy_code"));
				appendix_product2.setIs_insure_sum(jsonObj_med.getBoolean("Is_insure_sum"));
				appendix_product2.setIs_med_sum(jsonObj_med.getBoolean("Is_med_sum"));
				appendix_product2.setIs_rider_sum(jsonObj_med.getBoolean("Is_rider_sum"));
				appendix_product2.setIs_sum_for_rider(jsonObj_med.getBoolean("Is_sum_for_rider"));
				
				appendix_product2.setUser_code(userId);
				appendix_product2.setUpdate_time(getCurrentTimestamp());

			}
			listmedexamgroup.add(appendix_product2);
		}
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			Policy_status_accum med = new Policy_status_accum();
			if (true) {
				// MEDEXAM
				med.setCov_cat_id(jsonObj_med.getInt("Cov_cat_id"));
				med.setPolicy_status(jsonObj_med.getString("Policy_code"));
				med.setIs_insure_sum(jsonObj_med.getBoolean("Is_insure_sum"));
				med.setIs_med_sum(jsonObj_med.getBoolean("Is_med_sum"));
				med.setIs_rider_sum(jsonObj_med.getBoolean("Is_rider_sum"));
				med.setIs_sum_for_rider(jsonObj_med.getBoolean("Is_sum_for_rider"));

			}
			listmedexam.add(med);
		}
		settoService.setPolicyStatusTxn(listmedexamgroup);
		//settoService.setPolicyStatus(listmedexam);
		return String.valueOf(new_id);
	}
	public String save_PolicyStausReq_G(HttpServletRequest request, HttpServletResponse response) throws Exception { // mortality_Tli
		MainUnderWriteSaveDateService settoService = new MainUnderWriteSaveDateService();
		String medexam_str = request.getParameter("policyG_data");
		JSONArray jsonArr_medexam = new JSONArray(medexam_str);
		ArrayList<Policy_status_accum> listmedexam = new ArrayList<>();
		
		ArrayList<Txn_underwrite> maxlisttxnuw = new ArrayList<>();
		MainUnderWriteService mis = new MainUnderWriteService();
		ArrayList<Txn_policy_status_accum> listmedexamgroup = new ArrayList<>();
		ArrayList<Txn_underwrite> listtxnuw = new ArrayList<>();
		ArrayList<Txn_approve> listtxnappr = new ArrayList<>();
		int new_id = 0;
		JSONObject responsejson = new JSONObject();
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			new_id = Integer
					.parseInt(jsonObj_med.getString("Txn_id").length() == 0 ? "0" : jsonObj_med.getString("Txn_id"));
		}
		if (jsonArr_medexam.length() > 0 ) {
			
			// GEN HEADER TXN
			Txn_underwrite txn = new Txn_underwrite();
			txn.setTxn_type("POL_STATUS");
			txn.setTxn_id(new_id);
			txn.setTxn_status("REQUEST_FOR_APPROVE");
			txn.setUser_code(userId);
			txn.setUpdate_time(getCurrentTimestamp());
			listtxnuw.add(txn);
			settoService.genTxnUnderwrite(listtxnuw);
			responsejson.put("Txn_Data", new_id);
			// responseText = responsejson.toString();

			// GEN TXN Approve
			Txn_approve txna = new Txn_approve();
			txna.setTxn_id(new_id);
			txna.setTxn_status("REQUEST_FOR_APPROVE");
			txna.setUser_code(userId);
			txna.setUpdate_time(getCurrentTimestamp());
			txna.setRqst_time(getCurrentTimestamp());
			txna.setRqst_user_code(userId);
			listtxnappr.add(txna);
			settoService.genTxnApprove(listtxnappr);
		}
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			Txn_policy_status_accum appendix_product2 = new Txn_policy_status_accum();
			if (true) {
				// MEDEXAM
				appendix_product2.setTxn_id(new_id);
				appendix_product2.setCov_cat_id(jsonObj_med.getInt("Cov_cat_id"));
				appendix_product2.setPolicy_status(jsonObj_med.getString("Policy_code"));
				appendix_product2.setIs_insure_sum(jsonObj_med.getBoolean("Is_insure_sum"));
				appendix_product2.setIs_med_sum(jsonObj_med.getBoolean("Is_med_sum"));
				appendix_product2.setIs_rider_sum(jsonObj_med.getBoolean("Is_rider_sum"));
				appendix_product2.setIs_sum_for_rider(jsonObj_med.getBoolean("Is_sum_for_rider"));
				
				appendix_product2.setUser_code(userId);
				appendix_product2.setUpdate_time(getCurrentTimestamp());

			}
			listmedexamgroup.add(appendix_product2);
		}
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			Policy_status_accum med = new Policy_status_accum();
			if (true) {
				// MEDEXAM
				med.setCov_cat_id(jsonObj_med.getInt("Cov_cat_id"));
				med.setPolicy_status(jsonObj_med.getString("Policy_code"));
				med.setIs_insure_sum(jsonObj_med.getBoolean("Is_insure_sum"));
				med.setIs_med_sum(jsonObj_med.getBoolean("Is_med_sum"));
				med.setIs_rider_sum(jsonObj_med.getBoolean("Is_rider_sum"));
				med.setIs_sum_for_rider(jsonObj_med.getBoolean("Is_sum_for_rider"));

			}
			listmedexam.add(med);
		}
		settoService.setPolicyStatusTxn(listmedexamgroup);
		//settoService.setPolicyStatus(listmedexam);
		return String.valueOf(new_id);
	}
	
	public String save_PolicyStausReqEdit_G(HttpServletRequest request, HttpServletResponse response) throws Exception { // mortality_Tli
		MainUnderWriteSaveDateService settoService = new MainUnderWriteSaveDateService();
		String medexam_str = request.getParameter("policyG_data");
		JSONArray jsonArr_medexam = new JSONArray(medexam_str);
		ArrayList<Policy_status_accum> listmedexam = new ArrayList<>();
		
		ArrayList<Txn_underwrite> maxlisttxnuw = new ArrayList<>();
		MainUnderWriteService mis = new MainUnderWriteService();
		ArrayList<Txn_policy_status_accum> listmedexamgroup = new ArrayList<>();
		ArrayList<Txn_underwrite> listtxnuw = new ArrayList<>();
		ArrayList<Txn_approve> listtxnappr = new ArrayList<>();
		int new_id = 0;
		JSONObject responsejson = new JSONObject();
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			new_id = Integer
					.parseInt(jsonObj_med.getString("Txn_id").length() == 0 ? "0" : jsonObj_med.getString("Txn_id"));
		}
		if (jsonArr_medexam.length() > 0 && new_id == 0) {
			maxlisttxnuw = mis.getTxn_underwrite("");
			if (maxlisttxnuw.size()> 0) {
				new_id = maxlisttxnuw.get(0).getTxn_id() + 1;
			}else {
				new_id = 1;
			}
			// GEN HEADER TXN
			Txn_underwrite txn = new Txn_underwrite();
			txn.setTxn_type("POL_STATUS");
			txn.setTxn_id(new_id);
			txn.setTxn_status("REQUEST_UPDATE");
			txn.setUser_code(userId);
			txn.setUpdate_time(getCurrentTimestamp());
			listtxnuw.add(txn);
			settoService.genTxnUnderwrite(listtxnuw);
			responsejson.put("Txn_Data", new_id);
			// responseText = responsejson.toString();

			// GEN TXN Approve
			Txn_approve txna = new Txn_approve();
			txna.setTxn_id(new_id);
			txna.setTxn_status("REQUEST_UPDATE");
			txna.setUser_code(userId);
			txna.setUpdate_time(getCurrentTimestamp());
			txna.setRqst_time(getCurrentTimestamp());
			txna.setRqst_user_code(userId);
			listtxnappr.add(txna);
			settoService.genTxnApprove(listtxnappr);
		}else {
			if (jsonArr_medexam.length() >0) {
				
				// GEN HEADER TXN
				Txn_underwrite txn = new Txn_underwrite();
				txn.setTxn_type("POL_STATUS");
				txn.setTxn_id(new_id);
				txn.setTxn_status("REQUEST_UPDATE");
				txn.setUser_code(userId);
				txn.setUpdate_time(getCurrentTimestamp());
				listtxnuw.add(txn);
				settoService.genTxnUnderwrite(listtxnuw);
				responsejson.put("Txn_Data", new_id);
				// responseText = responsejson.toString();

				// GEN TXN Approve
				Txn_approve txna = new Txn_approve();
				txna.setTxn_id(new_id);
				txna.setTxn_status("REQUEST_UPDATE");
				txna.setUser_code(userId);
				txna.setUpdate_time(getCurrentTimestamp());
				txna.setRqst_time(getCurrentTimestamp());
				txna.setRqst_user_code(userId);
				listtxnappr.add(txna);
				settoService.genTxnApprove(listtxnappr);
			}
		}
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			Txn_policy_status_accum appendix_product2 = new Txn_policy_status_accum();
			if (true) {
				// MEDEXAM
				appendix_product2.setTxn_id(new_id);
				appendix_product2.setCov_cat_id(jsonObj_med.getInt("Cov_cat_id"));
				appendix_product2.setPolicy_status(jsonObj_med.getString("Policy_code"));
				appendix_product2.setIs_insure_sum(jsonObj_med.getBoolean("Is_insure_sum"));
				appendix_product2.setIs_med_sum(jsonObj_med.getBoolean("Is_med_sum"));
				appendix_product2.setIs_rider_sum(jsonObj_med.getBoolean("Is_rider_sum"));
				appendix_product2.setIs_sum_for_rider(jsonObj_med.getBoolean("Is_sum_for_rider"));
				
				appendix_product2.setUser_code(userId);
				appendix_product2.setUpdate_time(getCurrentTimestamp());

			}
			listmedexamgroup.add(appendix_product2);
		}
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			Policy_status_accum med = new Policy_status_accum();
			if (true) {
				// MEDEXAM
				med.setCov_cat_id(jsonObj_med.getInt("Cov_cat_id"));
				med.setPolicy_status(jsonObj_med.getString("Policy_code"));
				med.setIs_insure_sum(jsonObj_med.getBoolean("Is_insure_sum"));
				med.setIs_med_sum(jsonObj_med.getBoolean("Is_med_sum"));
				med.setIs_rider_sum(jsonObj_med.getBoolean("Is_rider_sum"));
				med.setIs_sum_for_rider(jsonObj_med.getBoolean("Is_sum_for_rider"));

			}
			listmedexam.add(med);
		}
		settoService.setPolicyStatusTxn(listmedexamgroup);
		//settoService.setPolicyStatus(listmedexam);
		return String.valueOf(new_id);
	}
	public String save_PolicyStausApprove_G(HttpServletRequest request, HttpServletResponse response) throws Exception { // mortality_Tli
		MainUnderWriteSaveDateService settoService = new MainUnderWriteSaveDateService();
		String medexam_str = request.getParameter("policyG_data");
		String approve_note = request.getParameter("approve_note");
		JSONArray jsonArr_medexam = new JSONArray(medexam_str);
		ArrayList<Policy_status_accum> listmedexam = new ArrayList<>();
		
		ArrayList<Txn_underwrite> maxlisttxnuw = new ArrayList<>();
		MainUnderWriteService mis = new MainUnderWriteService();
		ArrayList<Txn_policy_status_accum> listmedexamgroup = new ArrayList<>();
		ArrayList<Txn_underwrite> listtxnuw = new ArrayList<>();
		ArrayList<Txn_approve> listtxnappr = new ArrayList<>();
		int new_id = 0;
		JSONObject responsejson = new JSONObject();
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			new_id = Integer
					.parseInt(jsonObj_med.getString("Txn_id").length() == 0 ? "0" : jsonObj_med.getString("Txn_id"));
		}
		if (jsonArr_medexam.length() > 0 ) {
			
			// GEN HEADER TXN
			Txn_underwrite txn = new Txn_underwrite();
			txn.setTxn_type("POL_STATUS");
			txn.setTxn_id(new_id);
			txn.setTxn_status("APPROVED");
			txn.setUser_code(userId);
			txn.setUpdate_time(getCurrentTimestamp());
			listtxnuw.add(txn);
			settoService.genTxnUnderwrite(listtxnuw);
			responsejson.put("Txn_Data", new_id);
			// responseText = responsejson.toString();

			// GEN TXN Approve
			Txn_approve txna = new Txn_approve();
			txna.setTxn_id(new_id);
			txna.setTxn_status("APPROVED");
			txna.setRqst_time(getCurrentTimestamp());
			txna.setApprv_note(approve_note==null?"":approve_note);
			txna.setUser_code(userId);
			txna.setUpdate_time(getCurrentTimestamp());
			txna.setRqst_user_code(userId);
			txna.setApprv_time(getCurrentTimestamp());
			txna.setApprv_user_code(userId);

			listtxnappr.add(txna);
			settoService.genTxnApprove(listtxnappr);
		}
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			Txn_policy_status_accum appendix_product2 = new Txn_policy_status_accum();
			if (true) {
				// MEDEXAM
				appendix_product2.setTxn_id(new_id);
				appendix_product2.setCov_cat_id(jsonObj_med.getInt("Cov_cat_id"));
				appendix_product2.setPolicy_status(jsonObj_med.getString("Policy_code"));
				appendix_product2.setIs_insure_sum(jsonObj_med.getBoolean("Is_insure_sum"));
				appendix_product2.setIs_med_sum(jsonObj_med.getBoolean("Is_med_sum"));
				appendix_product2.setIs_rider_sum(jsonObj_med.getBoolean("Is_rider_sum"));
				appendix_product2.setIs_sum_for_rider(jsonObj_med.getBoolean("Is_sum_for_rider"));
				
				appendix_product2.setUser_code(userId);
				appendix_product2.setUpdate_time(getCurrentTimestamp());

			}
			listmedexamgroup.add(appendix_product2);
		}
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			Policy_status_accum med = new Policy_status_accum();
			if (true) {
				// MEDEXAM
				med.setCov_cat_id(jsonObj_med.getInt("Cov_cat_id"));
				med.setPolicy_status(jsonObj_med.getString("Policy_code"));
				med.setIs_insure_sum(jsonObj_med.getBoolean("Is_insure_sum"));
				med.setIs_med_sum(jsonObj_med.getBoolean("Is_med_sum"));
				med.setIs_rider_sum(jsonObj_med.getBoolean("Is_rider_sum"));
				med.setIs_sum_for_rider(jsonObj_med.getBoolean("Is_sum_for_rider"));

			}
			listmedexam.add(med);
		}
		settoService.setPolicyStatusTxn(listmedexamgroup);
		settoService.setPolicyStatus(listmedexam);
		return String.valueOf(new_id);
	}
	
	public String save_PolicyStausApproveEdit_G(HttpServletRequest request, HttpServletResponse response) throws Exception { // mortality_Tli
		MainUnderWriteSaveDateService settoService = new MainUnderWriteSaveDateService();
		String medexam_str = request.getParameter("policyG_data");
		JSONArray jsonArr_medexam = new JSONArray(medexam_str);
		ArrayList<Policy_status_accum> listmedexam = new ArrayList<>();
		
		ArrayList<Txn_underwrite> maxlisttxnuw = new ArrayList<>();
		MainUnderWriteService mis = new MainUnderWriteService();
		ArrayList<Txn_policy_status_accum> listmedexamgroup = new ArrayList<>();
		ArrayList<Txn_underwrite> listtxnuw = new ArrayList<>();
		ArrayList<Txn_approve> listtxnappr = new ArrayList<>();
		int new_id = 0;
		JSONObject responsejson = new JSONObject();
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			new_id = Integer
					.parseInt(jsonObj_med.getString("Txn_id").length() == 0 ? "0" : jsonObj_med.getString("Txn_id"));
		}
		if (jsonArr_medexam.length() > 0 ) {
			
			// GEN HEADER TXN
			Txn_underwrite txn = new Txn_underwrite();
			txn.setTxn_type("POL_STATUS");
			txn.setTxn_id(new_id);
			txn.setTxn_status("UPDATE");
			txn.setUser_code(userId);
			txn.setUpdate_time(getCurrentTimestamp());
			listtxnuw.add(txn);
			settoService.genTxnUnderwrite(listtxnuw);
			responsejson.put("Txn_Data", new_id);
			// responseText = responsejson.toString();

			// GEN TXN Approve
			Txn_approve txna = new Txn_approve();
			txna.setTxn_id(new_id);
			txna.setTxn_status("UPDATE");
			txna.setRqst_time(getCurrentTimestamp());
			txna.setUser_code(userId);
			txna.setUpdate_time(getCurrentTimestamp());
			txna.setRqst_user_code(userId);
			txna.setApprv_time(getCurrentTimestamp());
			txna.setApprv_user_code(userId);

			listtxnappr.add(txna);
			settoService.genTxnApprove(listtxnappr);
		}
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			Txn_policy_status_accum appendix_product2 = new Txn_policy_status_accum();
			if (true) {
				// MEDEXAM
				appendix_product2.setTxn_id(new_id);
				appendix_product2.setCov_cat_id(jsonObj_med.getInt("Cov_cat_id"));
				appendix_product2.setPolicy_status(jsonObj_med.getString("Policy_code"));
				appendix_product2.setIs_insure_sum(jsonObj_med.getBoolean("Is_insure_sum"));
				appendix_product2.setIs_med_sum(jsonObj_med.getBoolean("Is_med_sum"));
				appendix_product2.setIs_rider_sum(jsonObj_med.getBoolean("Is_rider_sum"));
				appendix_product2.setIs_sum_for_rider(jsonObj_med.getBoolean("Is_sum_for_rider"));
				
				appendix_product2.setUser_code(userId);
				appendix_product2.setUpdate_time(getCurrentTimestamp());

			}
			listmedexamgroup.add(appendix_product2);
		}
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			Policy_status_accum med = new Policy_status_accum();
			if (true) {
				// MEDEXAM
				med.setCov_cat_id(jsonObj_med.getInt("Cov_cat_id"));
				med.setPolicy_status(jsonObj_med.getString("Policy_code"));
				med.setIs_insure_sum(jsonObj_med.getBoolean("Is_insure_sum"));
				med.setIs_med_sum(jsonObj_med.getBoolean("Is_med_sum"));
				med.setIs_rider_sum(jsonObj_med.getBoolean("Is_rider_sum"));
				med.setIs_sum_for_rider(jsonObj_med.getBoolean("Is_sum_for_rider"));

			}
			listmedexam.add(med);
		}
		settoService.setPolicyStatusTxn(listmedexamgroup);
		settoService.setPolicyStatus(listmedexam);
		return String.valueOf(new_id);
	}
	public String save_PolicyStausNotApprove_G(HttpServletRequest request, HttpServletResponse response) throws Exception { // mortality_Tli
		MainUnderWriteSaveDateService settoService = new MainUnderWriteSaveDateService();
		String medexam_str = request.getParameter("policyG_data");
		JSONArray jsonArr_medexam = new JSONArray(medexam_str);
		ArrayList<Policy_status_accum> listmedexam = new ArrayList<>();
		String approve_note = request.getParameter("approve_note");
		ArrayList<Txn_underwrite> maxlisttxnuw = new ArrayList<>();
		MainUnderWriteService mis = new MainUnderWriteService();
		ArrayList<Txn_policy_status_accum> listmedexamgroup = new ArrayList<>();
		ArrayList<Txn_underwrite> listtxnuw = new ArrayList<>();
		ArrayList<Txn_approve> listtxnappr = new ArrayList<>();
		int new_id = 0;
		JSONObject responsejson = new JSONObject();
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			new_id = Integer
					.parseInt(jsonObj_med.getString("Txn_id").length() == 0 ? "0" : jsonObj_med.getString("Txn_id"));
		}
		if (jsonArr_medexam.length() > 0 ) {
			
			// GEN HEADER TXN
			Txn_underwrite txn = new Txn_underwrite();
			txn.setTxn_type("POL_STATUS");
			txn.setTxn_id(new_id);
			txn.setTxn_status("REJECTED");
			txn.setUser_code(userId);
			txn.setUpdate_time(getCurrentTimestamp());
			listtxnuw.add(txn);
			settoService.genTxnUnderwrite(listtxnuw);
			responsejson.put("Txn_Data", new_id);
			// responseText = responsejson.toString();

			// GEN TXN Approve
			Txn_approve txna = new Txn_approve();

			txna.setTxn_id(new_id);
			txna.setTxn_status("REJECTED");
			txna.setRqst_time(getCurrentTimestamp());
			txna.setUser_code(userId);
			txna.setRqst_user_code(userId);
			txna.setUpdate_time(getCurrentTimestamp());
			txna.setApprv_note(approve_note);
			txna.setApprv_time(getCurrentTimestamp());
			txna.setApprv_user_code(userId);

			listtxnappr.add(txna);
			settoService.genTxnApprove(listtxnappr);

			
		}
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			Txn_policy_status_accum appendix_product2 = new Txn_policy_status_accum();
			if (true) {
				// MEDEXAM
				appendix_product2.setTxn_id(new_id);
				appendix_product2.setCov_cat_id(jsonObj_med.getInt("Cov_cat_id"));
				appendix_product2.setPolicy_status(jsonObj_med.getString("Policy_code"));
				appendix_product2.setIs_insure_sum(jsonObj_med.getBoolean("Is_insure_sum"));
				appendix_product2.setIs_med_sum(jsonObj_med.getBoolean("Is_med_sum"));
				appendix_product2.setIs_rider_sum(jsonObj_med.getBoolean("Is_rider_sum"));
				appendix_product2.setIs_sum_for_rider(jsonObj_med.getBoolean("Is_sum_for_rider"));
				
				appendix_product2.setUser_code(userId);
				appendix_product2.setUpdate_time(getCurrentTimestamp());

			}
			listmedexamgroup.add(appendix_product2);
		}
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			Policy_status_accum med = new Policy_status_accum();
			if (true) {
				// MEDEXAM
				med.setCov_cat_id(jsonObj_med.getInt("Cov_cat_id"));
				med.setPolicy_status(jsonObj_med.getString("Policy_code"));
				med.setIs_insure_sum(jsonObj_med.getBoolean("Is_insure_sum"));
				med.setIs_med_sum(jsonObj_med.getBoolean("Is_med_sum"));
				med.setIs_rider_sum(jsonObj_med.getBoolean("Is_rider_sum"));
				med.setIs_sum_for_rider(jsonObj_med.getBoolean("Is_sum_for_rider"));

			}
			listmedexam.add(med);
		}
		settoService.setPolicyStatusTxn(listmedexamgroup);
		//settoService.setPolicyStatus(listmedexam);
		return String.valueOf(new_id);
	}
	public String save_Tab_SettingAppendix1(HttpServletRequest request, HttpServletResponse response) throws Exception { // mortality_Tli

		MainUnderWriteSaveDateService settoService = new MainUnderWriteSaveDateService();

		String medexam_str = request.getParameter("appendixversion_data");
		String medexama_str = request.getParameter("age_data");
		String medexams_str = request.getParameter("sum_data");
		String medexamm_str = request.getParameter("med_data");

		String medexama_strD = request.getParameter("age_delete_data");
		String medexama_strS = request.getParameter("age_delete_data");

		JSONArray jsonArr_medexam = new JSONArray(medexam_str);
		JSONArray jsonArr_medexama = new JSONArray(medexama_str);
		JSONArray jsonArr_medexams = new JSONArray(medexams_str);
		JSONArray jsonArr_medexamm = new JSONArray(medexamm_str);
		JSONArray jsonArr_medexamaD = new JSONArray(medexama_strD);
		JSONArray jsonArr_medexamsD = new JSONArray(medexama_strS);

		ArrayList<Appendix_version> listmedexam = new ArrayList<>();
		ArrayList<Appendix> listapp = new ArrayList<>();
		ArrayList<Appendix_age_range> listage = new ArrayList<>();
		ArrayList<Appendix_age_range> listageD = new ArrayList<>();
		ArrayList<Appendix_sum_range> listsum = new ArrayList<>();
		ArrayList<Appendix_sum_range> listsumD = new ArrayList<>();
		ArrayList<Appendix_exam> listmed = new ArrayList<>();

		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			Appendix_version med = new Appendix_version();
			Appendix med2 = new Appendix();
			if (true) {
				med.setAppendix_code(jsonObj_med.getString("Appendix_code"));
				med.setAppendix_name(jsonObj_med.getString("Appendix_name"));
				med.setVersion_name(jsonObj_med.getString("Version_name"));
				med.setVersion_id(jsonObj_med.getInt("Version_id"));
				med.setIs_approve(jsonObj_med.getBoolean("Is_approved"));
				med.setHq_med_exam_amt(
						new BigDecimal(jsonObj_med.getString("Hq_med_exam_amt").toString().replace(",", "")));
				// med.setEff_date(getData(jsonObj_med.getString("Eff_date")));
				// med.setExp_date(getData(jsonObj_med.getString("Exp_date")));
				med.setUser_code(userId);
				med.setUpdate_time(getCurrentTimestamp());

				Timestamp ts = new Timestamp(System.currentTimeMillis());
				Date date = new Date(ts.getTime());

				String str = "9999/12/31";

				if (jsonObj_med.getString("Eff_date") != "") {
					System.out.println(jsonObj_med.getString("Eff_date"));
					System.out.println(getData(jsonObj_med.getString("Eff_date")));
					med.setEff_date(getData(jsonObj_med.getString("Eff_date")));
				} else {
					java.util.Date date2 = (java.util.Date) new SimpleDateFormat("yyyy/mm/dd").parse(str);
					java.sql.Date sd = new java.sql.Date(date2.getTime());
					med.setEff_date(sd);
				}
				if (jsonObj_med.getString("Exp_date") != "") {
					med.setExp_date(getData(jsonObj_med.getString("Exp_date")));
				} else {
					java.util.Date date2 = (java.util.Date) new SimpleDateFormat("yyyy/mm/dd").parse(str);
					java.sql.Date sd = new java.sql.Date(date2.getTime());
					med.setExp_date(sd);

				}
				med2.setAppendix_code(jsonObj_med.getString("Appendix_code"));
				med2.setName_th(jsonObj_med.getString("Appendix_name"));
				med2.setIs_active(true);
				med2.setUser_code(userId);
				med2.setUpdate_time(getCurrentTimestamp());

			}

			listmedexam.add(med);

			if (jsonObj_med.getInt("Version_id") == 0) {
				listapp.add(med2);
			}
			for (int ii = 0; ii < jsonArr_medexama.length(); ii++) {
				JSONObject jsonObj_med3 = jsonArr_medexama.getJSONObject(ii);
				Appendix_age_range medg = new Appendix_age_range();

				medg.setAppendix_code(jsonObj_med.getString("Appendix_code"));
				medg.setVersion_id(jsonObj_med.getInt("Version_id"));

				medg.setAge_index(jsonObj_med3.getInt("Age_index"));
				medg.setMin_age(jsonObj_med3.getString("Min_age").length() == 0 ? 0 : jsonObj_med3.getInt("Min_age"));
				medg.setMax_age(jsonObj_med3.getString("Max_age").length() == 0 ? 0 : jsonObj_med3.getInt("Max_age"));
				medg.setUser_code(userId);
				medg.setUpdate_time(getCurrentTimestamp());

				listage.add(medg);
			}
			for (int ii = 0; ii < jsonArr_medexamaD.length(); ii++) {
				JSONObject jsonObj_med3 = jsonArr_medexamaD.getJSONObject(ii);
				Appendix_age_range medg = new Appendix_age_range();

				medg.setAppendix_code(jsonObj_med.getString("Appendix_code"));
				medg.setVersion_id(jsonObj_med.getInt("Version_id"));

				medg.setAge_index(jsonObj_med3.getInt("Age_index"));
				medg.setMin_age(0);
				medg.setMax_age(0);
				medg.setUser_code(userId);
				medg.setUpdate_time(getCurrentTimestamp());

				listageD.add(medg);
			}
			for (int ii = 0; ii < jsonArr_medexams.length(); ii++) {
				JSONObject jsonObj_med4 = jsonArr_medexams.getJSONObject(ii);
				Appendix_sum_range medg = new Appendix_sum_range();

				medg.setAppendix_code(jsonObj_med.getString("Appendix_code"));
				medg.setVersion_id(jsonObj_med.getInt("Version_id"));

				medg.setSum_index(jsonObj_med4.getInt("Sum_index"));
				medg.setMin_sum(new BigDecimal(jsonObj_med4.getString("Min_sum").length() == 0 ? "0"
						: jsonObj_med4.getString("Min_sum").toString().replace(",", "")));
				medg.setMax_sum(new BigDecimal(jsonObj_med4.getString("Max_sum").length() == 0 ? "0"
						: jsonObj_med4.getString("Max_sum").toString().replace(",", "")));
				medg.setUser_code(userId);
				medg.setUpdate_time(getCurrentTimestamp());

				listsum.add(medg);
			}
			for (int ii = 0; ii < jsonArr_medexamsD.length(); ii++) {
				JSONObject jsonObj_med4 = jsonArr_medexamsD.getJSONObject(ii);
				Appendix_sum_range medg = new Appendix_sum_range();

				medg.setAppendix_code(jsonObj_med.getString("Appendix_code"));
				medg.setVersion_id(jsonObj_med.getInt("Version_id"));

				medg.setSum_index(jsonObj_med4.getInt("Sum_index"));
				medg.setMin_sum(new BigDecimal(jsonObj_med4.getString("Min_sum").length() == 0 ? "0"
						: jsonObj_med4.getString("Min_sum").toString().replace(",", "")));
				medg.setMax_sum(new BigDecimal(jsonObj_med4.getString("Max_sum").length() == 0 ? "0"
						: jsonObj_med4.getString("Max_sum").toString().replace(",", "")));
				medg.setUser_code(userId);
				medg.setUpdate_time(getCurrentTimestamp());

				listsumD.add(medg);
			}
			for (int ii = 0; ii < jsonArr_medexamm.length(); ii++) {
				JSONObject jsonObj_med4 = jsonArr_medexamm.getJSONObject(ii);
				Appendix_exam medg = new Appendix_exam();

				medg.setAppendix_code(jsonObj_med4.getString("Appendix_code"));
				medg.setVersion_id(jsonObj_med4.getInt("Version_id"));

				medg.setSum_index(jsonObj_med4.getInt("Sum_index"));
				medg.setAge_index(jsonObj_med4.getInt("Age_index"));
				medg.setExam_code(jsonObj_med4.getString("Exam_code"));
				medg.setUser_code(userId);
				medg.setUpdate_time(getCurrentTimestamp());

				listmed.add(medg);
			}

		}
		settoService.deleteAppendixVersion(listmedexam, listapp, listageD, listsumD, listmed);
		settoService.setAppendixVersion(listmedexam, listapp, listage, listsum, listmed);
		return "Test Save ";
	}

	private static final String ALPHA_NUMERIC_STRING = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

	public static String randomAlphaNumeric(int count) {
		StringBuilder builder = new StringBuilder();
		while (count-- != 0) {
			int character = (int) (Math.random() * ALPHA_NUMERIC_STRING.length());
			builder.append(ALPHA_NUMERIC_STRING.charAt(character));
		}
		return builder.toString();
	}

	public String save_Tab_DraftSettingAppendix1(HttpServletRequest request, HttpServletResponse response)
			throws Exception { // mortality_Tli

		MainUnderWriteSaveDateService settoService = new MainUnderWriteSaveDateService();

		String medexam_str = request.getParameter("appendixversion_data");
		String medexama_str = request.getParameter("age_data");
		String medexams_str = request.getParameter("sum_data");
		String medexamm_str = request.getParameter("med_data");
		String medexamag_str = request.getParameter("agent_data");
		String medexamago_str = request.getParameter("agent_old_data");

		
		
		String medexama_strD = request.getParameter("age_delete_data");
		String medexama_strS = request.getParameter("age_delete_data");

		JSONArray jsonArr_medexam = new JSONArray(medexam_str);
		JSONArray jsonArr_medexama = new JSONArray(medexama_str);
		JSONArray jsonArr_medexams = new JSONArray(medexams_str);
		JSONArray jsonArr_medexamm = new JSONArray(medexamm_str);
		JSONArray jsonArr_medexamag = new JSONArray(medexamag_str);
		JSONArray jsonArr_medexamago = new JSONArray(medexamago_str);
		JSONArray jsonArr_medexamaD = new JSONArray(medexama_strD);
		JSONArray jsonArr_medexamsD = new JSONArray(medexama_strS);

		ArrayList<Appendix_version> listmedexam = new ArrayList<>();
		ArrayList<Txn_appendix_version> listmedexamTxn = new ArrayList<>();
		ArrayList<Appendix> listapp = new ArrayList<>();
		ArrayList<Appendix_age_range> listage = new ArrayList<>();
		ArrayList<Appendix_age_range> listageD = new ArrayList<>();
		ArrayList<Appendix_sum_range> listsum = new ArrayList<>();
		ArrayList<Appendix_sum_range> listsumD = new ArrayList<>();
		ArrayList<Appendix_agent_tier> listagent = new ArrayList<>();
		ArrayList<Appendix_agent_tier> listagentD = new ArrayList<>();
		ArrayList<Appendix_exam> listmed = new ArrayList<>();

		JSONObject responsejson = new JSONObject();
		ArrayList<Txn_underwrite> listtxnuw = new ArrayList<>();
		ArrayList<Txn_underwrite> maxlisttxnuw = new ArrayList<>();
		ArrayList<Txn_approve> listtxnappr = new ArrayList<>();
		MainUnderWriteService mis = new MainUnderWriteService();
		
		String random_Appendix_code = "";
		String new_Appendix_code = null;
		boolean isnewRecord=false; 		
		
		int new_id = 0;
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			// new_id=Integer.parseInt(jsonObj_med.getString("Txn_id").length()==0?"0":jsonObj_med.getString("Txn_id"));
			new_id = (Integer.parseInt(jsonObj_med.get("Txn_id").toString()));
		}
		if (jsonArr_medexam.length() > 0 && new_id == 0) {
			maxlisttxnuw = mis.getTxn_underwrite("");
			if (maxlisttxnuw.size()> 0) {
				new_id = maxlisttxnuw.get(0).getTxn_id() + 1;
			}else {
				new_id = 1;
			}
			
			// GEN HEADER TXN
			Txn_underwrite txn = new Txn_underwrite();
			txn.setTxn_type("APPENDIX_VERSION");
			txn.setTxn_id(new_id);
			txn.setTxn_status("NEW");
			txn.setUser_code(userId);
			txn.setUpdate_time(getCurrentTimestamp());
			listtxnuw.add(txn);
			settoService.genTxnUnderwrite(listtxnuw);
			responsejson.put("Txn_Data", new_id);
			// responseText = responsejson.toString();

			// GEN TXN Approve
			Txn_approve txna = new Txn_approve();
			txna.setTxn_id(new_id);
			txna.setTxn_status("NEW");
			txna.setUser_code(userId);
			txna.setUpdate_time(getCurrentTimestamp());
			txna.setRqst_time(getCurrentTimestamp());
			txna.setRqst_user_code(userId);
			listtxnappr.add(txna);
			settoService.genTxnApprove(listtxnappr);
			
			for (int i = 0; i < jsonArr_medexam.length(); i++) {
				JSONObject jsonObj_medT = jsonArr_medexam.getJSONObject(i);
				Txn_appendix_version medTxn = new Txn_appendix_version();
				if(new_Appendix_code==null) {
					new_Appendix_code=jsonObj_medT.getString("Appendix_code");
				}
			}	
			while(new_Appendix_code==null?true:new_Appendix_code.length()==0) {
				random_Appendix_code = randomAlphaNumeric(3);
				MainUnderWriteService miss = new MainUnderWriteService();
				ArrayList<AppendixVersionALLAccessData> appendixVersoinALL = null;
				appendixVersoinALL = mis.searchAppendixVersionALL(random_Appendix_code, 999);

				if(appendixVersoinALL.size()>0) {
					if(appendixVersoinALL.get(0).getAppendix_version() == null) {
						new_Appendix_code=random_Appendix_code;
						isnewRecord=true;
					}
				}
				
			}
		}
		
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_medT = jsonArr_medexam.getJSONObject(i);
			Txn_appendix_version medTxn = new Txn_appendix_version();
			Appendix med22 = new Appendix();
			if (true) {
				medTxn.setTxn_id(new_id);
				if(new_Appendix_code==null) {
					new_Appendix_code=jsonObj_medT.getString("Appendix_code");
				}
				medTxn.setAppendix_code(new_Appendix_code);
				medTxn.setAbb_name(jsonObj_medT.getString("Abb_name"));
				medTxn.setAppendix_name(jsonObj_medT.getString("Appendix_name"));
				medTxn.setVersion_name(jsonObj_medT.getString("Version_name"));
				medTxn.setVersion_id(jsonObj_medT.getInt("Version_id"));
				medTxn.setIs_approve(jsonObj_medT.getBoolean("Is_approved"));
				medTxn.setSale_chan_id(jsonObj_medT.getInt("sale_channel"));
				medTxn.setHq_med_exam_amt(
						new BigDecimal(jsonObj_medT.getString("Hq_med_exam_amt").toString().replace(",", "")));
				medTxn.setUser_code(userId);
				medTxn.setUpdate_time(getCurrentTimestamp());

				Timestamp ts = new Timestamp(System.currentTimeMillis());
				Date date = new Date(ts.getTime());

				String str = "9999/12/31";

				if (jsonObj_medT.getString("Eff_date") != "") {
					System.out.println(jsonObj_medT.getString("Eff_date"));
					System.out.println(getData(jsonObj_medT.getString("Eff_date")));
					medTxn.setEff_date(getData(jsonObj_medT.getString("Eff_date")));
				} else {
					java.util.Date date2 = (java.util.Date) new SimpleDateFormat("yyyy/mm/dd").parse(str);
					java.sql.Date sd = new java.sql.Date(date2.getTime());
					medTxn.setEff_date(sd);
				}
				if (jsonObj_medT.getString("Exp_date").length()==0?false:jsonObj_medT.getString("Exp_date") != "") {
					medTxn.setExp_date(getData(jsonObj_medT.getString("Exp_date")));
				} else {
					java.util.Date date2 = (java.util.Date) new SimpleDateFormat("yyyy/mm/dd").parse(str);
					java.sql.Date sd = new java.sql.Date(date2.getTime());
					medTxn.setExp_date(sd);

				}
				

			}

			listmedexamTxn.add(medTxn);
		}

		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			Appendix_version med = new Appendix_version();
			Appendix med2 = new Appendix();
			if (true) {
				med.setAppendix_code(new_Appendix_code);
				med.setAbb_name(jsonObj_med.getString("Abb_name"));
				med.setAppendix_name(jsonObj_med.getString("Appendix_name"));
				med.setVersion_name(jsonObj_med.getString("Version_name"));
				med.setVersion_id(jsonObj_med.getInt("Version_id"));
				med.setIs_approve(jsonObj_med.getBoolean("Is_approved"));
				med.setSale_chan_id(jsonObj_med.getInt("sale_channel"));
				med.setHq_med_exam_amt(
						new BigDecimal(jsonObj_med.getString("Hq_med_exam_amt").toString().replace(",", "")));
				med.setUser_code(userId);
				med.setUpdate_time(getCurrentTimestamp());

				Timestamp ts = new Timestamp(System.currentTimeMillis());
				Date date = new Date(ts.getTime());

				String str = "9999/12/31";

				if (jsonObj_med.getString("Eff_date") != "") {
					System.out.println(jsonObj_med.getString("Eff_date"));
					System.out.println(getData(jsonObj_med.getString("Eff_date")));
					med.setEff_date(getData(jsonObj_med.getString("Eff_date")));
				} else {
					java.util.Date date2 = (java.util.Date) new SimpleDateFormat("yyyy/mm/dd").parse(str);
					java.sql.Date sd = new java.sql.Date(date2.getTime());
					med.setEff_date(sd);
				}
				if (jsonObj_med.getString("Exp_date").length()==0?false:jsonObj_med.getString("Exp_date") != "") {
						med.setExp_date(getData(jsonObj_med.getString("Exp_date")));
				} else {
					java.util.Date date2 = (java.util.Date) new SimpleDateFormat("yyyy/mm/dd").parse(str);
					java.sql.Date sd = new java.sql.Date(date2.getTime());
					med.setExp_date(sd);

				}
				med2.setAppendix_code(new_Appendix_code);
				med2.setName_th(jsonObj_med.getString("Appendix_name"));
				med2.setIs_active(false);
				med2.setUser_code(userId);
				med2.setUpdate_time(getCurrentTimestamp());
				
				for (int ii = 0; ii < jsonArr_medexamag.length(); ii++) {
					JSONObject jsonObj_med3 = jsonArr_medexamag.getJSONObject(ii);
					Appendix_agent_tier medg = new Appendix_agent_tier();

					medg.setAppendix_code(new_Appendix_code);
					medg.setAgent_tier(jsonObj_med3.getString("Agent_tier"));

					if (jsonObj_med3.getString("Eff_date") != "") {
						System.out.println(jsonObj_med3.getString("Eff_date"));
						System.out.println(getData(jsonObj_med3.getString("Eff_date")));
						medg.setEff_date(getData(jsonObj_med3.getString("Eff_date")));
					} else {
						java.util.Date date2 = (java.util.Date) new SimpleDateFormat("yyyy/mm/dd").parse(str);
						java.sql.Date sd = new java.sql.Date(date2.getTime());
						medg.setEff_date(sd);
					}
					if (jsonObj_med3.getString("Exp_date").length()==0?false:jsonObj_med3.getString("Exp_date") != "") {
						medg.setExp_date(getData(jsonObj_med3.getString("Exp_date")));
					} else {
						java.util.Date date2 = (java.util.Date) new SimpleDateFormat("yyyy/mm/dd").parse(str);
						java.sql.Date sd = new java.sql.Date(date2.getTime());
						medg.setExp_date(sd);

					}

					listagent.add(medg);
				}
				for (int ii = 0; ii < jsonArr_medexamago.length(); ii++) {
					JSONObject jsonObj_med3 = jsonArr_medexamago.getJSONObject(ii);
					Appendix_agent_tier medg = new Appendix_agent_tier();

					medg.setAppendix_code(new_Appendix_code);
					medg.setAgent_tier(jsonObj_med3.getString("Agent_tier"));

					if (jsonObj_med3.getString("Eff_date") != "") {
						System.out.println(jsonObj_med3.getString("Eff_date"));
						System.out.println(getData(jsonObj_med3.getString("Eff_date")));
						medg.setEff_date(getData(jsonObj_med3.getString("Eff_date")));
					} else {
						java.util.Date date2 = (java.util.Date) new SimpleDateFormat("yyyy/mm/dd").parse(str);
						java.sql.Date sd = new java.sql.Date(date2.getTime());
						medg.setEff_date(sd);
					}
					if (jsonObj_med3.getString("Exp_date").length()==0?false:jsonObj_med3.getString("Exp_date") != "") {
						medg.setExp_date(getData(jsonObj_med3.getString("Exp_date")));
					} else {
						java.util.Date date2 = (java.util.Date) new SimpleDateFormat("yyyy/mm/dd").parse(str);
						java.sql.Date sd = new java.sql.Date(date2.getTime());
						medg.setExp_date(sd);

					}

					listagentD.add(medg);
				}

			}

			listmedexam.add(med);

			if (isnewRecord) {
				listapp.add(med2);
			}
			for (int ii = 0; ii < jsonArr_medexama.length(); ii++) {
				JSONObject jsonObj_med3 = jsonArr_medexama.getJSONObject(ii);
				Appendix_age_range medg = new Appendix_age_range();

				medg.setAppendix_code(new_Appendix_code);
				medg.setVersion_id(jsonObj_med.getInt("Version_id"));

				medg.setAge_index(jsonObj_med3.getInt("Age_index"));
				medg.setMin_age(jsonObj_med3.getString("Min_age").length() == 0 ? 0 : jsonObj_med3.getInt("Min_age"));
				medg.setMax_age(jsonObj_med3.getString("Max_age").length() == 0 ? 0 : jsonObj_med3.getInt("Max_age"));
				medg.setUser_code(userId);
				medg.setUpdate_time(getCurrentTimestamp());

				listage.add(medg);
			}
			for (int ii = 0; ii < jsonArr_medexamaD.length(); ii++) {
				JSONObject jsonObj_med3 = jsonArr_medexamaD.getJSONObject(ii);
				Appendix_age_range medg = new Appendix_age_range();

				medg.setAppendix_code(new_Appendix_code);
				medg.setVersion_id(jsonObj_med.getInt("Version_id"));

				medg.setAge_index(jsonObj_med3.getInt("Age_index"));
				medg.setMin_age(0);
				medg.setMax_age(0);
				medg.setUser_code(userId);
				medg.setUpdate_time(getCurrentTimestamp());

				listageD.add(medg);
			}
			for (int ii = 0; ii < jsonArr_medexams.length(); ii++) {
				JSONObject jsonObj_med4 = jsonArr_medexams.getJSONObject(ii);
				Appendix_sum_range medg = new Appendix_sum_range();

				medg.setAppendix_code(new_Appendix_code);
				medg.setVersion_id(jsonObj_med.getInt("Version_id"));

				medg.setSum_index(jsonObj_med4.getInt("Sum_index"));
				medg.setMin_sum(new BigDecimal(jsonObj_med4.getString("Min_sum").length() == 0 ? "0"
						: jsonObj_med4.getString("Min_sum").toString().replace(",", "")));
				medg.setMax_sum(new BigDecimal(jsonObj_med4.getString("Max_sum").length() == 0 ? "0"
						: jsonObj_med4.getString("Max_sum").toString().replace(",", "")));
				medg.setUser_code(userId);
				medg.setUpdate_time(getCurrentTimestamp());

				listsum.add(medg);
			}
			
			for (int ii = 0; ii < jsonArr_medexamm.length(); ii++) {
				JSONObject jsonObj_med4 = jsonArr_medexamm.getJSONObject(ii);
				Appendix_exam medg = new Appendix_exam();

				medg.setAppendix_code(new_Appendix_code);
				medg.setVersion_id(jsonObj_med4.getInt("Version_id"));

				medg.setSum_index(jsonObj_med4.getInt("Sum_index"));
				medg.setAge_index(jsonObj_med4.getInt("Age_index"));
				medg.setExam_code(jsonObj_med4.getString("Exam_code"));
				medg.setUser_code(userId);
				medg.setUpdate_time(getCurrentTimestamp());

				listmed.add(medg);
			}

		}
		
		settoService.deleteAppendixVersionV02(listmedexam, listapp, listageD, listsumD, listmed,listagentD);
		//settoService.setAppendixVersion(listmedexam, listapp, listage, listsum, listmed);
		settoService.setAppendixVersionV02(listmedexam, listapp, listage, listsum, listmed,listagent);
		settoService.setTxnAppendixVersion(listmedexamTxn);
		
		
		
		return String.valueOf(new_id)+","+new_Appendix_code;
	}

	public String save_Tab_ReqSettingAppendix1(HttpServletRequest request, HttpServletResponse response)
			throws Exception { // mortality_Tli

		MainUnderWriteSaveDateService settoService = new MainUnderWriteSaveDateService();

		String medexam_str = request.getParameter("appendixversion_data");
		String medexama_str = request.getParameter("age_data");
		String medexams_str = request.getParameter("sum_data");
		String medexamm_str = request.getParameter("med_data");

		String medexama_strD = request.getParameter("age_delete_data");
		String medexama_strS = request.getParameter("age_delete_data");

		JSONArray jsonArr_medexam = new JSONArray(medexam_str);
		JSONArray jsonArr_medexama = new JSONArray(medexama_str);
		JSONArray jsonArr_medexams = new JSONArray(medexams_str);
		JSONArray jsonArr_medexamm = new JSONArray(medexamm_str);
		JSONArray jsonArr_medexamaD = new JSONArray(medexama_strD);
		JSONArray jsonArr_medexamsD = new JSONArray(medexama_strS);

		ArrayList<Appendix_version> listmedexam = new ArrayList<>();
		ArrayList<Txn_appendix_version> listmedexamTxn = new ArrayList<>();
		ArrayList<Appendix> listapp = new ArrayList<>();
		ArrayList<Appendix_age_range> listage = new ArrayList<>();
		ArrayList<Appendix_age_range> listageD = new ArrayList<>();
		ArrayList<Appendix_sum_range> listsum = new ArrayList<>();
		ArrayList<Appendix_sum_range> listsumD = new ArrayList<>();
		ArrayList<Appendix_exam> listmed = new ArrayList<>();

		JSONObject responsejson = new JSONObject();
		ArrayList<Txn_underwrite> listtxnuw = new ArrayList<>();
		ArrayList<Txn_underwrite> maxlisttxnuw = new ArrayList<>();
		ArrayList<Txn_approve> listtxnappr = new ArrayList<>();
		MainUnderWriteService mis = new MainUnderWriteService();
		int new_id = 0;
		String new_Appendix_code = "";
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			// new_id=Integer.parseInt(jsonObj_med.getString("Txn_id").length()==0?"0":jsonObj_med.getString("Txn_id"));
			new_id = jsonObj_med.getInt("Txn_id");
		}
		
		
		if (jsonArr_medexam.length() > 0) {

			// GEN HEADER TXN
			Txn_underwrite txn = new Txn_underwrite();
			txn.setTxn_type("APPENDIX_VERSION");
			txn.setTxn_id(new_id);
			txn.setTxn_status("REQUEST_FOR_APPROVE");
			txn.setUser_code(userId);
			txn.setUpdate_time(getCurrentTimestamp());
			listtxnuw.add(txn);
			settoService.genTxnUnderwrite(listtxnuw);
			responsejson.put("Txn_Data", new_id);
			// responseText = responsejson.toString();
		}
		if (jsonArr_medexam.length() > 0) {

			// GEN TXN Approve
			Txn_approve txna = new Txn_approve();
			txna.setTxn_id(new_id);
			txna.setTxn_status("REQUEST_FOR_APPROVE");
			txna.setUser_code(userId);
			txna.setUpdate_time(getCurrentTimestamp());
			txna.setRqst_time(getCurrentTimestamp());
			txna.setRqst_user_code(userId);
			listtxnappr.add(txna);
			settoService.genTxnApprove(listtxnappr);

		}
		
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_medT = jsonArr_medexam.getJSONObject(i);
			Txn_appendix_version medTxn = new Txn_appendix_version();
			Appendix med22 = new Appendix();
			if (true) {
				medTxn.setTxn_id(new_id);
				medTxn.setAppendix_code(jsonObj_medT.getString("Appendix_code"));
				new_Appendix_code=jsonObj_medT.getString("Appendix_code");
				medTxn.setAppendix_name(jsonObj_medT.getString("Appendix_name"));
				medTxn.setAbb_name(jsonObj_medT.getString("Abb_name"));
				medTxn.setVersion_name(jsonObj_medT.getString("Version_name"));
				medTxn.setVersion_id(jsonObj_medT.getInt("Version_id"));
				medTxn.setIs_approve(jsonObj_medT.getBoolean("Is_approved"));
				medTxn.setSale_chan_id(jsonObj_medT.getInt("sale_channel"));
				medTxn.setHq_med_exam_amt(
						new BigDecimal(jsonObj_medT.getString("Hq_med_exam_amt").toString().replace(",", "")));
				// med.setEff_date(getData(jsonObj_med.getString("Eff_date")));
				// med.setExp_date(getData(jsonObj_med.getString("Exp_date")));
				medTxn.setUser_code(userId);
				medTxn.setUpdate_time(getCurrentTimestamp());

				Timestamp ts = new Timestamp(System.currentTimeMillis());
				Date date = new Date(ts.getTime());

				String str = "9999/12/31";

				if (jsonObj_medT.getString("Eff_date") != "") {
					System.out.println(jsonObj_medT.getString("Eff_date"));
					System.out.println(getData(jsonObj_medT.getString("Eff_date")));
					medTxn.setEff_date(getData(jsonObj_medT.getString("Eff_date")));
				} else {
					java.util.Date date2 = (java.util.Date) new SimpleDateFormat("yyyy/mm/dd").parse(str);
					java.sql.Date sd = new java.sql.Date(date2.getTime());
					medTxn.setEff_date(sd);
				}
				if (jsonObj_medT.getString("Exp_date") != "") {
					medTxn.setExp_date(getData(jsonObj_medT.getString("Exp_date")));
				} else {
					java.util.Date date2 = (java.util.Date) new SimpleDateFormat("yyyy/mm/dd").parse(str);
					java.sql.Date sd = new java.sql.Date(date2.getTime());
					medTxn.setExp_date(sd);

				}
				med22.setAppendix_code(jsonObj_medT.getString("Appendix_code"));
				med22.setName_th(jsonObj_medT.getString("Appendix_name"));
				med22.setIs_active(false);
				med22.setUser_code(userId);
				med22.setUpdate_time(getCurrentTimestamp());

			}

			listmedexamTxn.add(medTxn);
		}

		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			Appendix_version med = new Appendix_version();
			Appendix med2 = new Appendix();
			if (true) {
				med.setAppendix_code(jsonObj_med.getString("Appendix_code"));
				med.setAppendix_name(jsonObj_med.getString("Appendix_name"));
				med.setAbb_name(jsonObj_med.getString("Abb_name"));
				med.setVersion_name(jsonObj_med.getString("Version_name"));
				med.setVersion_id(jsonObj_med.getInt("Version_id"));
				med.setIs_approve(jsonObj_med.getBoolean("Is_approved"));
				med.setSale_chan_id(jsonObj_med.getInt("sale_channel"));
				med.setHq_med_exam_amt(
						new BigDecimal(jsonObj_med.getString("Hq_med_exam_amt").toString().replace(",", "")));
				// med.setEff_date(getData(jsonObj_med.getString("Eff_date")));
				// med.setExp_date(getData(jsonObj_med.getString("Exp_date")));
				med.setUser_code(userId);
				med.setUpdate_time(getCurrentTimestamp());

				Timestamp ts = new Timestamp(System.currentTimeMillis());
				Date date = new Date(ts.getTime());

				String str = "9999/12/31";

				if (jsonObj_med.getString("Eff_date") != "") {
					System.out.println(jsonObj_med.getString("Eff_date"));
					System.out.println(getData(jsonObj_med.getString("Eff_date")));
					med.setEff_date(getData(jsonObj_med.getString("Eff_date")));
				} else {
					java.util.Date date2 = (java.util.Date) new SimpleDateFormat("yyyy/mm/dd").parse(str);
					java.sql.Date sd = new java.sql.Date(date2.getTime());
					med.setEff_date(sd);
				}
				if (jsonObj_med.getString("Exp_date") != "") {
					med.setExp_date(getData(jsonObj_med.getString("Exp_date")));
				} else {
					java.util.Date date2 = (java.util.Date) new SimpleDateFormat("yyyy/mm/dd").parse(str);
					java.sql.Date sd = new java.sql.Date(date2.getTime());
					med.setExp_date(sd);

				}
				med2.setAppendix_code(jsonObj_med.getString("Appendix_code"));
				med2.setName_th(jsonObj_med.getString("Appendix_name"));
				med2.setIs_active(false);
				med2.setUser_code(userId);
				med2.setUpdate_time(getCurrentTimestamp());

			}

			listmedexam.add(med);

//			if (jsonObj_med.getInt("Version_id") == 1) {
//				listapp.add(med2);
//			}
			for (int ii = 0; ii < jsonArr_medexama.length(); ii++) {
				JSONObject jsonObj_med3 = jsonArr_medexama.getJSONObject(ii);
				Appendix_age_range medg = new Appendix_age_range();

				medg.setAppendix_code(jsonObj_med.getString("Appendix_code"));
				medg.setVersion_id(jsonObj_med.getInt("Version_id"));

				medg.setAge_index(jsonObj_med3.getInt("Age_index"));
				medg.setMin_age(jsonObj_med3.getString("Min_age").length() == 0 ? 0 : jsonObj_med3.getInt("Min_age"));
				medg.setMax_age(jsonObj_med3.getString("Max_age").length() == 0 ? 0 : jsonObj_med3.getInt("Max_age"));
				medg.setUser_code(userId);
				medg.setUpdate_time(getCurrentTimestamp());

				listage.add(medg);
			}
			for (int ii = 0; ii < jsonArr_medexamaD.length(); ii++) {
				JSONObject jsonObj_med3 = jsonArr_medexamaD.getJSONObject(ii);
				Appendix_age_range medg = new Appendix_age_range();

				medg.setAppendix_code(jsonObj_med.getString("Appendix_code"));
				medg.setVersion_id(jsonObj_med.getInt("Version_id"));

				medg.setAge_index(jsonObj_med3.getInt("Age_index"));
				medg.setMin_age(0);
				medg.setMax_age(0);
				medg.setUser_code(userId);
				medg.setUpdate_time(getCurrentTimestamp());

				listageD.add(medg);
			}
			for (int ii = 0; ii < jsonArr_medexams.length(); ii++) {
				JSONObject jsonObj_med4 = jsonArr_medexams.getJSONObject(ii);
				Appendix_sum_range medg = new Appendix_sum_range();

				medg.setAppendix_code(jsonObj_med.getString("Appendix_code"));
				medg.setVersion_id(jsonObj_med.getInt("Version_id"));

				medg.setSum_index(jsonObj_med4.getInt("Sum_index"));
				medg.setMin_sum(new BigDecimal(jsonObj_med4.getString("Min_sum").length() == 0 ? "0"
						: jsonObj_med4.getString("Min_sum").toString().replace(",", "")));
				medg.setMax_sum(new BigDecimal(jsonObj_med4.getString("Max_sum").length() == 0 ? "0"
						: jsonObj_med4.getString("Max_sum").toString().replace(",", "")));
				medg.setUser_code(userId);
				medg.setUpdate_time(getCurrentTimestamp());

				listsum.add(medg);
			}
			for (int ii = 0; ii < jsonArr_medexamsD.length(); ii++) {
				JSONObject jsonObj_med4 = jsonArr_medexamsD.getJSONObject(ii);
				Appendix_sum_range medg = new Appendix_sum_range();

				medg.setAppendix_code(jsonObj_med.getString("Appendix_code"));
				medg.setVersion_id(jsonObj_med.getInt("Version_id"));

				medg.setSum_index(jsonObj_med4.getInt("Sum_index"));
				medg.setMin_sum(new BigDecimal(jsonObj_med4.getString("Min_sum").length() == 0 ? "0"
						: jsonObj_med4.getString("Min_sum").toString().replace(",", "")));
				medg.setMax_sum(new BigDecimal(jsonObj_med4.getString("Max_sum").length() == 0 ? "0"
						: jsonObj_med4.getString("Max_sum").toString().replace(",", "")));
				medg.setUser_code(userId);
				medg.setUpdate_time(getCurrentTimestamp());

				listsumD.add(medg);
			}
			for (int ii = 0; ii < jsonArr_medexamm.length(); ii++) {
				JSONObject jsonObj_med4 = jsonArr_medexamm.getJSONObject(ii);
				Appendix_exam medg = new Appendix_exam();

				medg.setAppendix_code(jsonObj_med4.getString("Appendix_code"));
				medg.setVersion_id(jsonObj_med4.getInt("Version_id"));

				medg.setSum_index(jsonObj_med4.getInt("Sum_index"));
				medg.setAge_index(jsonObj_med4.getInt("Age_index"));
				medg.setExam_code(jsonObj_med4.getString("Exam_code"));
				medg.setUser_code(userId);
				medg.setUpdate_time(getCurrentTimestamp());

				listmed.add(medg);
			}

		}
		settoService.deleteAppendixVersion(listmedexam, listapp, listageD, listsumD, listmed);
		settoService.setAppendixVersion(listmedexam, listapp, listage, listsum, listmed);
		settoService.setTxnAppendixVersion(listmedexamTxn);
		return String.valueOf(new_id)+","+new_Appendix_code;
	}
	
	public String save_Tab_ReqEditSettingAppendix1(HttpServletRequest request, HttpServletResponse response)
			throws Exception { // mortality_Tli

		MainUnderWriteSaveDateService settoService = new MainUnderWriteSaveDateService();

		String medexam_str = request.getParameter("appendixversion_data");
		String medexama_str = request.getParameter("age_data");
		String medexams_str = request.getParameter("sum_data");
		String medexamm_str = request.getParameter("med_data");

		String medexama_strD = request.getParameter("age_delete_data");
		String medexama_strS = request.getParameter("age_delete_data");

		JSONArray jsonArr_medexam = new JSONArray(medexam_str);
		JSONArray jsonArr_medexama = new JSONArray(medexama_str);
		JSONArray jsonArr_medexams = new JSONArray(medexams_str);
		JSONArray jsonArr_medexamm = new JSONArray(medexamm_str);
		JSONArray jsonArr_medexamaD = new JSONArray(medexama_strD);
		JSONArray jsonArr_medexamsD = new JSONArray(medexama_strS);

		ArrayList<Appendix_version> listmedexam = new ArrayList<>();
		ArrayList<Txn_appendix_version> listmedexamTxn = new ArrayList<>();
		ArrayList<Appendix> listapp = new ArrayList<>();
		ArrayList<Appendix_age_range> listage = new ArrayList<>();
		ArrayList<Appendix_age_range> listageD = new ArrayList<>();
		ArrayList<Appendix_sum_range> listsum = new ArrayList<>();
		ArrayList<Appendix_sum_range> listsumD = new ArrayList<>();
		ArrayList<Appendix_exam> listmed = new ArrayList<>();

		JSONObject responsejson = new JSONObject();
		ArrayList<Txn_underwrite> listtxnuw = new ArrayList<>();
		ArrayList<Txn_underwrite> maxlisttxnuw = new ArrayList<>();
		ArrayList<Txn_approve> listtxnappr = new ArrayList<>();
		MainUnderWriteService mis = new MainUnderWriteService();
		int new_id = 0;
		String new_Appendix_code = "";
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			// new_id=Integer.parseInt(jsonObj_med.getString("Txn_id").length()==0?"0":jsonObj_med.getString("Txn_id"));
			new_id = jsonObj_med.getInt("Txn_id");
		}
		if (jsonArr_medexam.length() > 0 && new_id == 0) {
			maxlisttxnuw = mis.getTxn_underwrite("");
			if (maxlisttxnuw.size()> 0) {
				new_id = maxlisttxnuw.get(0).getTxn_id() + 1;
			}else {
				new_id = 1;
			}
			// GEN HEADER TXN
			Txn_underwrite txn = new Txn_underwrite();
			txn.setTxn_type("APPENDIX_VERSION");
			txn.setTxn_id(new_id);
			txn.setTxn_status("REQUEST_UPDATE");
			txn.setUser_code(userId);
			txn.setUpdate_time(getCurrentTimestamp());
			listtxnuw.add(txn);
			settoService.genTxnUnderwrite(listtxnuw);
			responsejson.put("Txn_Data", new_id);
			// responseText = responsejson.toString();

			// GEN TXN Approve
			Txn_approve txna = new Txn_approve();
			txna.setTxn_id(new_id);
			txna.setTxn_status("REQUEST_UPDATE");
			txna.setUser_code(userId);
			txna.setUpdate_time(getCurrentTimestamp());
			txna.setRqst_time(getCurrentTimestamp());
			txna.setRqst_user_code(userId);
			listtxnappr.add(txna);
			settoService.genTxnApprove(listtxnappr);
		}else {
			if (jsonArr_medexam.length() > 0) {

				// GEN HEADER TXN
				Txn_underwrite txn = new Txn_underwrite();
				txn.setTxn_type("APPENDIX_VERSION");
				txn.setTxn_id(new_id);
				txn.setTxn_status("REQUEST_UPDATE");
				txn.setUser_code(userId);
				txn.setUpdate_time(getCurrentTimestamp());
				listtxnuw.add(txn);
				settoService.genTxnUnderwrite(listtxnuw);
				responsejson.put("Txn_Data", new_id);
				// responseText = responsejson.toString();
			}
			if (jsonArr_medexam.length() > 0) {

				// GEN TXN Approve
				Txn_approve txna = new Txn_approve();
				txna.setTxn_id(new_id);
				txna.setTxn_status("REQUEST_UPDATE");
				txna.setUser_code(userId);
				txna.setUpdate_time(getCurrentTimestamp());
				txna.setRqst_time(getCurrentTimestamp());
				txna.setRqst_user_code(userId);
				listtxnappr.add(txna);
				settoService.genTxnApprove(listtxnappr);

			}
		}
		
		
		
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_medT = jsonArr_medexam.getJSONObject(i);
			Txn_appendix_version medTxn = new Txn_appendix_version();
			Appendix med22 = new Appendix();
			if (true) {
				medTxn.setTxn_id(new_id);
				medTxn.setAppendix_code(jsonObj_medT.getString("Appendix_code"));
				new_Appendix_code=jsonObj_medT.getString("Appendix_code");
				medTxn.setAppendix_name(jsonObj_medT.getString("Appendix_name"));
				medTxn.setAbb_name(jsonObj_medT.getString("Abb_name"));
				medTxn.setVersion_name(jsonObj_medT.getString("Version_name"));
				medTxn.setVersion_id(jsonObj_medT.getInt("Version_id"));
				medTxn.setIs_approve(jsonObj_medT.getBoolean("Is_approved"));
				medTxn.setSale_chan_id(jsonObj_medT.getInt("sale_channel"));
				medTxn.setHq_med_exam_amt(
						new BigDecimal(jsonObj_medT.getString("Hq_med_exam_amt").toString().replace(",", "")));
				// med.setEff_date(getData(jsonObj_med.getString("Eff_date")));
				// med.setExp_date(getData(jsonObj_med.getString("Exp_date")));
				medTxn.setUser_code(userId);
				medTxn.setUpdate_time(getCurrentTimestamp());

				Timestamp ts = new Timestamp(System.currentTimeMillis());
				Date date = new Date(ts.getTime());

				String str = "9999/12/31";

				if (jsonObj_medT.getString("Eff_date") != "") {
					System.out.println(jsonObj_medT.getString("Eff_date"));
					System.out.println(getData(jsonObj_medT.getString("Eff_date")));
					medTxn.setEff_date(getData(jsonObj_medT.getString("Eff_date")));
				} else {
					java.util.Date date2 = (java.util.Date) new SimpleDateFormat("yyyy/mm/dd").parse(str);
					java.sql.Date sd = new java.sql.Date(date2.getTime());
					medTxn.setEff_date(sd);
				}
				if (jsonObj_medT.getString("Exp_date") != "") {
					medTxn.setExp_date(getData(jsonObj_medT.getString("Exp_date")));
				} else {
					java.util.Date date2 = (java.util.Date) new SimpleDateFormat("yyyy/mm/dd").parse(str);
					java.sql.Date sd = new java.sql.Date(date2.getTime());
					medTxn.setExp_date(sd);

				}
				med22.setAppendix_code(jsonObj_medT.getString("Appendix_code"));
				med22.setName_th(jsonObj_medT.getString("Appendix_name"));
				med22.setIs_active(false);
				med22.setUser_code(userId);
				med22.setUpdate_time(getCurrentTimestamp());

			}

			listmedexamTxn.add(medTxn);
		}

		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			Appendix_version med = new Appendix_version();
			Appendix med2 = new Appendix();
			if (true) {
				med.setAppendix_code(jsonObj_med.getString("Appendix_code"));
				med.setAppendix_name(jsonObj_med.getString("Appendix_name"));
				med.setAbb_name(jsonObj_med.getString("Abb_name"));
				med.setVersion_name(jsonObj_med.getString("Version_name"));
				med.setVersion_id(jsonObj_med.getInt("Version_id"));
				med.setIs_approve(jsonObj_med.getBoolean("Is_approved"));
				med.setSale_chan_id(jsonObj_med.getInt("sale_channel"));
				med.setHq_med_exam_amt(
						new BigDecimal(jsonObj_med.getString("Hq_med_exam_amt").toString().replace(",", "")));
				// med.setEff_date(getData(jsonObj_med.getString("Eff_date")));
				// med.setExp_date(getData(jsonObj_med.getString("Exp_date")));
				med.setUser_code(userId);
				med.setUpdate_time(getCurrentTimestamp());

				Timestamp ts = new Timestamp(System.currentTimeMillis());
				Date date = new Date(ts.getTime());

				String str = "9999/12/31";

				if (jsonObj_med.getString("Eff_date") != "") {
					System.out.println(jsonObj_med.getString("Eff_date"));
					System.out.println(getData(jsonObj_med.getString("Eff_date")));
					med.setEff_date(getData(jsonObj_med.getString("Eff_date")));
				} else {
					java.util.Date date2 = (java.util.Date) new SimpleDateFormat("yyyy/mm/dd").parse(str);
					java.sql.Date sd = new java.sql.Date(date2.getTime());
					med.setEff_date(sd);
				}
				if (jsonObj_med.getString("Exp_date") != "") {
					med.setExp_date(getData(jsonObj_med.getString("Exp_date")));
				} else {
					java.util.Date date2 = (java.util.Date) new SimpleDateFormat("yyyy/mm/dd").parse(str);
					java.sql.Date sd = new java.sql.Date(date2.getTime());
					med.setExp_date(sd);

				}
				med2.setAppendix_code(jsonObj_med.getString("Appendix_code"));
				med2.setName_th(jsonObj_med.getString("Appendix_name"));
				med2.setIs_active(false);
				med2.setUser_code(userId);
				med2.setUpdate_time(getCurrentTimestamp());

			}

			listmedexam.add(med);

//			if (jsonObj_med.getInt("Version_id") == 1) {
//				listapp.add(med2);
//			}
			for (int ii = 0; ii < jsonArr_medexama.length(); ii++) {
				JSONObject jsonObj_med3 = jsonArr_medexama.getJSONObject(ii);
				Appendix_age_range medg = new Appendix_age_range();

				medg.setAppendix_code(jsonObj_med.getString("Appendix_code"));
				medg.setVersion_id(jsonObj_med.getInt("Version_id"));

				medg.setAge_index(jsonObj_med3.getInt("Age_index"));
				medg.setMin_age(jsonObj_med3.getString("Min_age").length() == 0 ? 0 : jsonObj_med3.getInt("Min_age"));
				medg.setMax_age(jsonObj_med3.getString("Max_age").length() == 0 ? 0 : jsonObj_med3.getInt("Max_age"));
				medg.setUser_code(userId);
				medg.setUpdate_time(getCurrentTimestamp());

				listage.add(medg);
			}
			for (int ii = 0; ii < jsonArr_medexamaD.length(); ii++) {
				JSONObject jsonObj_med3 = jsonArr_medexamaD.getJSONObject(ii);
				Appendix_age_range medg = new Appendix_age_range();

				medg.setAppendix_code(jsonObj_med.getString("Appendix_code"));
				medg.setVersion_id(jsonObj_med.getInt("Version_id"));

				medg.setAge_index(jsonObj_med3.getInt("Age_index"));
				medg.setMin_age(0);
				medg.setMax_age(0);
				medg.setUser_code(userId);
				medg.setUpdate_time(getCurrentTimestamp());

				listageD.add(medg);
			}
			for (int ii = 0; ii < jsonArr_medexams.length(); ii++) {
				JSONObject jsonObj_med4 = jsonArr_medexams.getJSONObject(ii);
				Appendix_sum_range medg = new Appendix_sum_range();

				medg.setAppendix_code(jsonObj_med.getString("Appendix_code"));
				medg.setVersion_id(jsonObj_med.getInt("Version_id"));

				medg.setSum_index(jsonObj_med4.getInt("Sum_index"));
				medg.setMin_sum(new BigDecimal(jsonObj_med4.getString("Min_sum").length() == 0 ? "0"
						: jsonObj_med4.getString("Min_sum").toString().replace(",", "")));
				medg.setMax_sum(new BigDecimal(jsonObj_med4.getString("Max_sum").length() == 0 ? "0"
						: jsonObj_med4.getString("Max_sum").toString().replace(",", "")));
				medg.setUser_code(userId);
				medg.setUpdate_time(getCurrentTimestamp());

				listsum.add(medg);
			}
			for (int ii = 0; ii < jsonArr_medexamsD.length(); ii++) {
				JSONObject jsonObj_med4 = jsonArr_medexamsD.getJSONObject(ii);
				Appendix_sum_range medg = new Appendix_sum_range();

				medg.setAppendix_code(jsonObj_med.getString("Appendix_code"));
				medg.setVersion_id(jsonObj_med.getInt("Version_id"));

				medg.setSum_index(jsonObj_med4.getInt("Sum_index"));
				medg.setMin_sum(new BigDecimal(jsonObj_med4.getString("Min_sum").length() == 0 ? "0"
						: jsonObj_med4.getString("Min_sum").toString().replace(",", "")));
				medg.setMax_sum(new BigDecimal(jsonObj_med4.getString("Max_sum").length() == 0 ? "0"
						: jsonObj_med4.getString("Max_sum").toString().replace(",", "")));
				medg.setUser_code(userId);
				medg.setUpdate_time(getCurrentTimestamp());

				listsumD.add(medg);
			}
			for (int ii = 0; ii < jsonArr_medexamm.length(); ii++) {
				JSONObject jsonObj_med4 = jsonArr_medexamm.getJSONObject(ii);
				Appendix_exam medg = new Appendix_exam();

				medg.setAppendix_code(jsonObj_med4.getString("Appendix_code"));
				medg.setVersion_id(jsonObj_med4.getInt("Version_id"));

				medg.setSum_index(jsonObj_med4.getInt("Sum_index"));
				medg.setAge_index(jsonObj_med4.getInt("Age_index"));
				medg.setExam_code(jsonObj_med4.getString("Exam_code"));
				medg.setUser_code(userId);
				medg.setUpdate_time(getCurrentTimestamp());

				listmed.add(medg);
			}

		}
		settoService.deleteAppendixVersion(listmedexam, listapp, listageD, listsumD, listmed);
		settoService.setAppendixVersion(listmedexam, listapp, listage, listsum, listmed);
		settoService.setTxnAppendixVersion(listmedexamTxn);
		return String.valueOf(new_id)+","+new_Appendix_code;
	}
	
	

	public String save_Tab_ApproveSettingAppendix1(HttpServletRequest request, HttpServletResponse response)
			throws Exception { // mortality_Tli

		MainUnderWriteSaveDateService settoService = new MainUnderWriteSaveDateService();

		String medexam_str = request.getParameter("appendixversion_data");
		String medexama_str = request.getParameter("age_data");
		String medexams_str = request.getParameter("sum_data");
		String medexamm_str = request.getParameter("med_data");

		String medexama_strD = request.getParameter("age_delete_data");
		String medexama_strS = request.getParameter("age_delete_data");

		JSONArray jsonArr_medexam = new JSONArray(medexam_str);
		JSONArray jsonArr_medexama = new JSONArray(medexama_str);
		JSONArray jsonArr_medexams = new JSONArray(medexams_str);
		JSONArray jsonArr_medexamm = new JSONArray(medexamm_str);
		JSONArray jsonArr_medexamaD = new JSONArray(medexama_strD);
		JSONArray jsonArr_medexamsD = new JSONArray(medexama_strS);

		ArrayList<Appendix_version> listmedexam = new ArrayList<>();
		ArrayList<Txn_appendix_version> listmedexamTxn = new ArrayList<>();
		ArrayList<Appendix_version> listmedexamBefore = new ArrayList<>();
		ArrayList<Appendix_version> listmedexamUpdateOld = new ArrayList<>();
		ArrayList<Txn_appendix_version> listmedexamTxnBefore = new ArrayList<>();
		ArrayList<Txn_appendix_version> listmedexamTxnUpdateOld = new ArrayList<>();
		ArrayList<Appendix> listapp = new ArrayList<>();
		ArrayList<Appendix_age_range> listage = new ArrayList<>();
		ArrayList<Appendix_age_range> listageD = new ArrayList<>();
		ArrayList<Appendix_sum_range> listsum = new ArrayList<>();
		ArrayList<Appendix_sum_range> listsumD = new ArrayList<>();
		ArrayList<Appendix_exam> listmed = new ArrayList<>();

		JSONObject responsejson = new JSONObject();
		ArrayList<Txn_underwrite> listtxnuw = new ArrayList<>();
		ArrayList<Txn_underwrite> maxlisttxnuw = new ArrayList<>();
		ArrayList<Txn_approve> listtxnappr = new ArrayList<>();
		MainUnderWriteService mis = new MainUnderWriteService();
		int new_id = 0;
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			// new_id=Integer.parseInt(jsonObj_med.getString("Txn_id").length()==0?"0":jsonObj_med.getString("Txn_id"));
			new_id = jsonObj_med.getInt("Txn_id");
		}
		if (jsonArr_medexam.length() > 0) {

			// GEN HEADER TXN
			Txn_underwrite txn = new Txn_underwrite();
			txn.setTxn_type("APPENDIX_VERSION");
			txn.setTxn_id(new_id);
			txn.setTxn_status("APPROVED");
			txn.setUser_code(userId);
			txn.setUpdate_time(getCurrentTimestamp());
			listtxnuw.add(txn);
			settoService.genTxnUnderwrite(listtxnuw);
			responsejson.put("Txn_Data", new_id);
			// responseText = responsejson.toString();
		}
		if (jsonArr_medexam.length() > 0) {

			// GEN TXN Approve
			Txn_approve txna = new Txn_approve();
			txna.setTxn_id(new_id);
			txna.setTxn_status("APPROVED");
			txna.setRqst_time(getCurrentTimestamp());
			txna.setUser_code(userId);
			txna.setUpdate_time(getCurrentTimestamp());
			txna.setRqst_user_code(userId);
			txna.setApprv_time(getCurrentTimestamp());
			txna.setApprv_user_code(userId);

			listtxnappr.add(txna);
			settoService.genTxnApprove(listtxnappr);

		}
		String new_Appendix_code="";
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_medT = jsonArr_medexam.getJSONObject(i);
			Txn_appendix_version medTxn = new Txn_appendix_version();
			Appendix med22 = new Appendix();
			if (true) {
				medTxn.setTxn_id(new_id);
				medTxn.setAppendix_code(jsonObj_medT.getString("Appendix_code"));
				new_Appendix_code=jsonObj_medT.getString("Appendix_code");
				medTxn.setAppendix_name(jsonObj_medT.getString("Appendix_name"));
				medTxn.setVersion_name(jsonObj_medT.getString("Version_name"));
				medTxn.setVersion_id(jsonObj_medT.getInt("Version_id"));
				medTxn.setAbb_name(jsonObj_medT.getString("Abb_name"));
				medTxn.setIs_approve(true);
				medTxn.setSale_chan_id(jsonObj_medT.getInt("sale_channel"));
				medTxn.setHq_med_exam_amt(
						new BigDecimal(jsonObj_medT.getString("Hq_med_exam_amt").toString().replace(",", "")));
				// med.setEff_date(getData(jsonObj_med.getString("Eff_date")));
				// med.setExp_date(getData(jsonObj_med.getString("Exp_date")));
				medTxn.setUser_code(userId);
				medTxn.setUpdate_time(getCurrentTimestamp());

				Timestamp ts = new Timestamp(System.currentTimeMillis());
				Date date = new Date(ts.getTime());

				String str = "9999/12/31";

				if (jsonObj_medT.getString("Eff_date") != "") {
					System.out.println(jsonObj_medT.getString("Eff_date"));
					System.out.println(getData(jsonObj_medT.getString("Eff_date")));
					medTxn.setEff_date(getData(jsonObj_medT.getString("Eff_date")));
				} else {
					java.util.Date date2 = (java.util.Date) new SimpleDateFormat("yyyy/mm/dd").parse(str);
					java.sql.Date sd = new java.sql.Date(date2.getTime());
					medTxn.setEff_date(sd);
				}
				if (jsonObj_medT.getString("Exp_date") != "") {
					medTxn.setExp_date(getData(jsonObj_medT.getString("Exp_date")));
				} else {
					java.util.Date date2 = (java.util.Date) new SimpleDateFormat("yyyy/mm/dd").parse(str);
					java.sql.Date sd = new java.sql.Date(date2.getTime());
					medTxn.setExp_date(sd);

				}
				med22.setAppendix_code(jsonObj_medT.getString("Appendix_code"));
				med22.setName_th(jsonObj_medT.getString("Appendix_name"));
				med22.setIs_active(true);
				med22.setUser_code(userId);
				med22.setUpdate_time(getCurrentTimestamp());

			}
			//String name = EmployeeInfo.getEmployeeFullName("9005104");
			listmedexamTxn.add(medTxn);
			
			/***************UPDATE EXPIRE DATE TO LAST VERSION*****************/
			if(medTxn.getVersion_id()>0) {
				listmedexamBefore=mis.getAppendixVersionSTBEAN("APPENDIXBEAN", medTxn.getAppendix_code(),String.valueOf(medTxn.getVersion_id()-1));
				if(listmedexamBefore==null?false:listmedexamBefore.size()>0) {
					for(int k=0 ;k< listmedexamBefore.size(); k++ ) {
						Appendix_version app = new Appendix_version();
							app = (Appendix_version)listmedexamBefore.get(k);
						Calendar c = Calendar.getInstance(); 
						System.out.println(medTxn.getEff_date());
						c.setTime(medTxn.getEff_date()); 
						c.add(Calendar.DATE, -1);
						System.out.println( c.getTime());
						app.setExp_date(convertUtilToSql( c.getTime()));
						//System.out.println("55555555555555555555555555 "+app.getExp_date());	
						listmedexamUpdateOld.add(app);
						
					}
					settoService.setAppendixVersion(listmedexamUpdateOld, listapp, listage, listsum, listmed);
					
				}
				listmedexamTxnBefore=mis.getAppendixVersionSTBEANTxn("APPENDIXBEANTxn", medTxn.getAppendix_code(),String.valueOf(medTxn.getVersion_id()-1));
				if(listmedexamTxnBefore==null?false:listmedexamTxnBefore.size()>0) {
					for(int k=0 ;k< listmedexamTxnBefore.size(); k++ ) {
						Txn_appendix_version app = new Txn_appendix_version();
							app = (Txn_appendix_version)listmedexamTxnBefore.get(k);
						Calendar c = Calendar.getInstance(); 
						System.out.println(medTxn.getEff_date());
						c.setTime(medTxn.getEff_date()); 
						c.add(Calendar.DATE, -1);
						System.out.println( c.getTime());
						app.setExp_date(convertUtilToSql( c.getTime()));
						//System.out.println("55555555555555555555555555 "+app.getExp_date());	
						listmedexamTxnUpdateOld.add(app);
						
					}
					settoService.setTxnAppendixVersion(listmedexamTxnUpdateOld);
				}
			}
			/*************** END UPDATE EXPIRE DATE TO LAST VERSION*****************/
			

		}
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			Appendix_version med = new Appendix_version();
			Appendix med2 = new Appendix();
			if (true) {
				med.setAppendix_code(jsonObj_med.getString("Appendix_code"));
				med.setAppendix_name(jsonObj_med.getString("Appendix_name"));
				med.setVersion_name(jsonObj_med.getString("Version_name"));
				med.setVersion_id(jsonObj_med.getInt("Version_id"));
				med.setAbb_name(jsonObj_med.getString("Abb_name"));
				med.setIs_approve(true);
				med.setSale_chan_id(jsonObj_med.getInt("sale_channel"));
				med.setHq_med_exam_amt(
						new BigDecimal(jsonObj_med.getString("Hq_med_exam_amt").toString().replace(",", "")));
				med.setUser_code(userId);
				med.setUpdate_time(getCurrentTimestamp());

				Timestamp ts = new Timestamp(System.currentTimeMillis());
				Date date = new Date(ts.getTime());

				String str = "9999/12/31";

				if (jsonObj_med.getString("Eff_date") != "") {
					System.out.println(jsonObj_med.getString("Eff_date"));
					System.out.println(getData(jsonObj_med.getString("Eff_date")));
					med.setEff_date(getData(jsonObj_med.getString("Eff_date")));
				} else {
					java.util.Date date2 = (java.util.Date) new SimpleDateFormat("yyyy/mm/dd").parse(str);
					java.sql.Date sd = new java.sql.Date(date2.getTime());
					med.setEff_date(sd);
				}
				if (jsonObj_med.getString("Exp_date") != "") {
					med.setExp_date(getData(jsonObj_med.getString("Exp_date")));
				} else {
					java.util.Date date2 = (java.util.Date) new SimpleDateFormat("yyyy/mm/dd").parse(str);
					java.sql.Date sd = new java.sql.Date(date2.getTime());
					med.setExp_date(sd);

				}
				med2.setAppendix_code(jsonObj_med.getString("Appendix_code"));
				med2.setName_th(jsonObj_med.getString("Appendix_name"));
				med2.setIs_active(true);
				med2.setUser_code(userId);
				med2.setUpdate_time(getCurrentTimestamp());

			}

			listmedexam.add(med);
			if (jsonObj_med.getInt("Version_id") == 0) {
				listapp.add(med2);
			}
		}

		// settoService.deleteAppendixVersion(listmedexam,
		// listapp,listageD,listsumD,listmed);
		settoService.setAppendixVersion(listmedexam, listapp, listage, listsum, listmed);
		settoService.setTxnAppendixVersion(listmedexamTxn);
		
		
		return String.valueOf(new_id)+","+new_Appendix_code;
	}
	private static java.sql.Date convertUtilToSql(java.util.Date uDate) {
		java.sql.Date sDate = new java.sql.Date(uDate.getTime());
		return sDate;
	}
	public String save_Tab_ApproveEditSettingAppendix1(HttpServletRequest request, HttpServletResponse response)
			throws Exception { // mortality_Tli

		MainUnderWriteSaveDateService settoService = new MainUnderWriteSaveDateService();

		String medexam_str = request.getParameter("appendixversion_data");
		String medexama_str = request.getParameter("age_data");
		String medexams_str = request.getParameter("sum_data");
		String medexamm_str = request.getParameter("med_data");

		String medexama_strD = request.getParameter("age_delete_data");
		String medexama_strS = request.getParameter("age_delete_data");

		JSONArray jsonArr_medexam = new JSONArray(medexam_str);
		JSONArray jsonArr_medexama = new JSONArray(medexama_str);
		JSONArray jsonArr_medexams = new JSONArray(medexams_str);
		JSONArray jsonArr_medexamm = new JSONArray(medexamm_str);
		JSONArray jsonArr_medexamaD = new JSONArray(medexama_strD);
		JSONArray jsonArr_medexamsD = new JSONArray(medexama_strS);

		ArrayList<Appendix_version> listmedexam = new ArrayList<>();
		ArrayList<Txn_appendix_version> listmedexamTxn = new ArrayList<>();
		ArrayList<Appendix> listapp = new ArrayList<>();
		ArrayList<Appendix_age_range> listage = new ArrayList<>();
		ArrayList<Appendix_age_range> listageD = new ArrayList<>();
		ArrayList<Appendix_sum_range> listsum = new ArrayList<>();
		ArrayList<Appendix_sum_range> listsumD = new ArrayList<>();
		ArrayList<Appendix_exam> listmed = new ArrayList<>();

		JSONObject responsejson = new JSONObject();
		ArrayList<Txn_underwrite> listtxnuw = new ArrayList<>();
		ArrayList<Txn_underwrite> maxlisttxnuw = new ArrayList<>();
		ArrayList<Txn_approve> listtxnappr = new ArrayList<>();
		MainUnderWriteService mis = new MainUnderWriteService();
		int new_id = 0;
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			// new_id=Integer.parseInt(jsonObj_med.getString("Txn_id").length()==0?"0":jsonObj_med.getString("Txn_id"));
			new_id = jsonObj_med.getInt("Txn_id");
		}
		if (jsonArr_medexam.length() > 0) {

			// GEN HEADER TXN
			Txn_underwrite txn = new Txn_underwrite();
			txn.setTxn_type("APPENDIX_VERSION");
			txn.setTxn_id(new_id);
			txn.setTxn_status("UPDATE");
			txn.setUser_code(userId);
			txn.setUpdate_time(getCurrentTimestamp());
			listtxnuw.add(txn);
			settoService.genTxnUnderwrite(listtxnuw);
			responsejson.put("Txn_Data", new_id);
			// responseText = responsejson.toString();
		}
		if (jsonArr_medexam.length() > 0) {

			// GEN TXN Approve
			Txn_approve txna = new Txn_approve();
			txna.setTxn_id(new_id);
			txna.setTxn_status("UPDATE");
			txna.setRqst_time(getCurrentTimestamp());
			txna.setUser_code(userId);
			txna.setUpdate_time(getCurrentTimestamp());
			txna.setRqst_user_code(userId);
			txna.setApprv_time(getCurrentTimestamp());
			txna.setApprv_user_code(userId);

			listtxnappr.add(txna);
			settoService.genTxnApprove(listtxnappr);

		}
		String new_Appendix_code="";
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_medT = jsonArr_medexam.getJSONObject(i);
			Txn_appendix_version medTxn = new Txn_appendix_version();
			Appendix med22 = new Appendix();
			if (true) {
				medTxn.setTxn_id(new_id);
				medTxn.setAppendix_code(jsonObj_medT.getString("Appendix_code"));
				new_Appendix_code=jsonObj_medT.getString("Appendix_code");
				medTxn.setAppendix_name(jsonObj_medT.getString("Appendix_name"));
				medTxn.setVersion_name(jsonObj_medT.getString("Version_name"));
				medTxn.setVersion_id(jsonObj_medT.getInt("Version_id"));
				medTxn.setAbb_name(jsonObj_medT.getString("Abb_name"));
				medTxn.setIs_approve(false);
				medTxn.setSale_chan_id(jsonObj_medT.getInt("sale_channel"));
				medTxn.setHq_med_exam_amt(
						new BigDecimal(jsonObj_medT.getString("Hq_med_exam_amt").toString().replace(",", "")));
				medTxn.setUser_code(userId);
				medTxn.setUpdate_time(getCurrentTimestamp());

				Timestamp ts = new Timestamp(System.currentTimeMillis());
				Date date = new Date(ts.getTime());

				String str = "9999/12/31";

				if (jsonObj_medT.getString("Eff_date") != "") {
					System.out.println(jsonObj_medT.getString("Eff_date"));
					System.out.println(getData(jsonObj_medT.getString("Eff_date")));
					medTxn.setEff_date(getData(jsonObj_medT.getString("Eff_date")));
				} else {
					java.util.Date date2 = (java.util.Date) new SimpleDateFormat("yyyy/mm/dd").parse(str);
					java.sql.Date sd = new java.sql.Date(date2.getTime());
					medTxn.setEff_date(sd);
				}
				if (jsonObj_medT.getString("Exp_date") != "") {
					medTxn.setExp_date(getData(jsonObj_medT.getString("Exp_date")));
				} else {
					java.util.Date date2 = (java.util.Date) new SimpleDateFormat("yyyy/mm/dd").parse(str);
					java.sql.Date sd = new java.sql.Date(date2.getTime());
					medTxn.setExp_date(sd);

				}
				med22.setAppendix_code(jsonObj_medT.getString("Appendix_code"));
				med22.setName_th(jsonObj_medT.getString("Appendix_name"));
				med22.setIs_active(true);
				med22.setUser_code(userId);
				med22.setUpdate_time(getCurrentTimestamp());

			}

			listmedexamTxn.add(medTxn);

		}
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			Appendix_version med = new Appendix_version();
			Appendix med2 = new Appendix();
			if (true) {
				med.setAppendix_code(jsonObj_med.getString("Appendix_code"));
				med.setAppendix_name(jsonObj_med.getString("Appendix_name"));
				med.setVersion_name(jsonObj_med.getString("Version_name"));
				med.setVersion_id(jsonObj_med.getInt("Version_id"));
				med.setAbb_name(jsonObj_med.getString("Abb_name"));
				med.setIs_approve(false);
				med.setSale_chan_id(jsonObj_med.getInt("sale_channel"));
				med.setHq_med_exam_amt(
						new BigDecimal(jsonObj_med.getString("Hq_med_exam_amt").toString().replace(",", "")));
				med.setUser_code(userId);
				med.setUpdate_time(getCurrentTimestamp());

				Timestamp ts = new Timestamp(System.currentTimeMillis());
				Date date = new Date(ts.getTime());

				String str = "9999/12/31";

				if (jsonObj_med.getString("Eff_date") != "") {
					System.out.println(jsonObj_med.getString("Eff_date"));
					System.out.println(getData(jsonObj_med.getString("Eff_date")));
					med.setEff_date(getData(jsonObj_med.getString("Eff_date")));
				} else {
					java.util.Date date2 = (java.util.Date) new SimpleDateFormat("yyyy/mm/dd").parse(str);
					java.sql.Date sd = new java.sql.Date(date2.getTime());
					med.setEff_date(sd);
				}
				if (jsonObj_med.getString("Exp_date") != "") {
					med.setExp_date(getData(jsonObj_med.getString("Exp_date")));
				} else {
					java.util.Date date2 = (java.util.Date) new SimpleDateFormat("yyyy/mm/dd").parse(str);
					java.sql.Date sd = new java.sql.Date(date2.getTime());
					med.setExp_date(sd);

				}
				med2.setAppendix_code(jsonObj_med.getString("Appendix_code"));
				med2.setName_th(jsonObj_med.getString("Appendix_name"));
				med2.setIs_active(true);
				med2.setUser_code(userId);
				med2.setUpdate_time(getCurrentTimestamp());

			}

			listmedexam.add(med);
			//if (jsonObj_med.getInt("Version_id") == 1) {
			//	listapp.add(med2);
			//}
		}

		// settoService.deleteAppendixVersion(listmedexam,
		// listapp,listageD,listsumD,listmed);
		settoService.setAppendixVersion(listmedexam, listapp, listage, listsum, listmed);
		settoService.setTxnAppendixVersion(listmedexamTxn);
		return String.valueOf(new_id)+","+new_Appendix_code;
	}

	public String save_Tab_NotApproveSettingAppendix1(HttpServletRequest request, HttpServletResponse response)
			throws Exception { // mortality_Tli

		MainUnderWriteSaveDateService settoService = new MainUnderWriteSaveDateService();

		String approve_note = request.getParameter("approve_note");
		String medexam_str = request.getParameter("appendixversion_data");
		String medexama_str = request.getParameter("age_data");
		String medexams_str = request.getParameter("sum_data");
		String medexamm_str = request.getParameter("med_data");

		String medexama_strD = request.getParameter("age_delete_data");
		String medexama_strS = request.getParameter("age_delete_data");

		JSONArray jsonArr_medexam = new JSONArray(medexam_str);
		JSONArray jsonArr_medexama = new JSONArray(medexama_str);
		JSONArray jsonArr_medexams = new JSONArray(medexams_str);
		JSONArray jsonArr_medexamm = new JSONArray(medexamm_str);
		JSONArray jsonArr_medexamaD = new JSONArray(medexama_strD);
		JSONArray jsonArr_medexamsD = new JSONArray(medexama_strS);

		ArrayList<Appendix_version> listmedexam = new ArrayList<>();
		ArrayList<Txn_appendix_version> listmedexamTxn = new ArrayList<>();
		ArrayList<Appendix> listapp = new ArrayList<>();
		ArrayList<Appendix_age_range> listage = new ArrayList<>();
		ArrayList<Appendix_age_range> listageD = new ArrayList<>();
		ArrayList<Appendix_sum_range> listsum = new ArrayList<>();
		ArrayList<Appendix_sum_range> listsumD = new ArrayList<>();
		ArrayList<Appendix_exam> listmed = new ArrayList<>();

		JSONObject responsejson = new JSONObject();
		ArrayList<Txn_underwrite> listtxnuw = new ArrayList<>();
		ArrayList<Txn_underwrite> maxlisttxnuw = new ArrayList<>();
		ArrayList<Txn_approve> listtxnappr = new ArrayList<>();
		MainUnderWriteService mis = new MainUnderWriteService();
		int new_id = 0;
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			// new_id=Integer.parseInt(jsonObj_med.getString("Txn_id").length()==0?"0":jsonObj_med.getString("Txn_id"));
			new_id = jsonObj_med.getInt("Txn_id");
		}
		if (jsonArr_medexam.length() > 0) {

			// GEN HEADER TXN
			Txn_underwrite txn = new Txn_underwrite();
			txn.setTxn_type("APPENDIX_VERSION");
			txn.setTxn_id(new_id);
			txn.setTxn_status("REJECTED");
			txn.setUser_code(userId);
			txn.setUpdate_time(getCurrentTimestamp());
			listtxnuw.add(txn);
			settoService.genTxnUnderwrite(listtxnuw);
			responsejson.put("Txn_Data", new_id);
			// responseText = responsejson.toString();
		}
		if (jsonArr_medexam.length() > 0) {

			// GEN TXN Approve
			Txn_approve txna = new Txn_approve();

			txna.setTxn_id(new_id);
			txna.setTxn_status("REJECTED");
			txna.setRqst_time(getCurrentTimestamp());
			txna.setUser_code(userId);
			txna.setRqst_user_code(userId);
			txna.setUpdate_time(getCurrentTimestamp());
			txna.setApprv_note(approve_note);
			txna.setApprv_time(getCurrentTimestamp());
			txna.setApprv_user_code(userId);

			listtxnappr.add(txna);
			settoService.genTxnApprove(listtxnappr);

		}

		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_medT = jsonArr_medexam.getJSONObject(i);
			Txn_appendix_version medTxn = new Txn_appendix_version();
			Appendix med22 = new Appendix();
			if (true) {
				medTxn.setTxn_id(new_id);
				medTxn.setAppendix_code(jsonObj_medT.getString("Appendix_code"));
				medTxn.setAppendix_name(jsonObj_medT.getString("Appendix_name"));
				medTxn.setVersion_name(jsonObj_medT.getString("Version_name"));
				medTxn.setVersion_id(jsonObj_medT.getInt("Version_id"));
				medTxn.setIs_approve(jsonObj_medT.getBoolean("Is_approved"));
				medTxn.setAbb_name(jsonObj_medT.getString("Abb_name"));
				medTxn.setSale_chan_id(jsonObj_medT.getInt("sale_channel"));
				medTxn.setHq_med_exam_amt(
						new BigDecimal(jsonObj_medT.getString("Hq_med_exam_amt").toString().replace(",", "")));
				medTxn.setUser_code(userId);
				medTxn.setUpdate_time(getCurrentTimestamp());

				Timestamp ts = new Timestamp(System.currentTimeMillis());
				Date date = new Date(ts.getTime());

				String str = "9999/12/31";

				if (jsonObj_medT.getString("Eff_date") != "") {
					System.out.println(jsonObj_medT.getString("Eff_date"));
					System.out.println(getData(jsonObj_medT.getString("Eff_date")));
					medTxn.setEff_date(getData(jsonObj_medT.getString("Eff_date")));
				} else {
					java.util.Date date2 = (java.util.Date) new SimpleDateFormat("yyyy/mm/dd").parse(str);
					java.sql.Date sd = new java.sql.Date(date2.getTime());
					medTxn.setEff_date(sd);
				}
				if (jsonObj_medT.getString("Exp_date") != "") {
					medTxn.setExp_date(getData(jsonObj_medT.getString("Exp_date")));
				} else {
					java.util.Date date2 = (java.util.Date) new SimpleDateFormat("yyyy/mm/dd").parse(str);
					java.sql.Date sd = new java.sql.Date(date2.getTime());
					medTxn.setExp_date(sd);

				}
				med22.setAppendix_code(jsonObj_medT.getString("Appendix_code"));
				med22.setName_th(jsonObj_medT.getString("Appendix_name"));
				med22.setIs_active(false);
				med22.setUser_code(userId);
				med22.setUpdate_time(getCurrentTimestamp());

			}

			listmedexamTxn.add(medTxn);
		}
		String new_Appendix_code="";
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			Appendix_version med = new Appendix_version();
			Appendix med2 = new Appendix();
			if (true) {
				med.setAppendix_code(jsonObj_med.getString("Appendix_code"));
				new_Appendix_code=jsonObj_med.getString("Appendix_code");
				med.setAppendix_name(jsonObj_med.getString("Appendix_name"));
				med.setVersion_name(jsonObj_med.getString("Version_name"));
				med.setVersion_id(jsonObj_med.getInt("Version_id"));
				med.setIs_approve(jsonObj_med.getBoolean("Is_approved"));
				med.setAbb_name(jsonObj_med.getString("Abb_name"));
				med.setSale_chan_id(jsonObj_med.getInt("sale_channel"));
				med.setHq_med_exam_amt(
						new BigDecimal(jsonObj_med.getString("Hq_med_exam_amt").toString().replace(",", "")));
				med.setUser_code(userId);
				med.setUpdate_time(getCurrentTimestamp());

				Timestamp ts = new Timestamp(System.currentTimeMillis());
				Date date = new Date(ts.getTime());

				String str = "9999/12/31";

				if (jsonObj_med.getString("Eff_date") != "") {
					System.out.println(jsonObj_med.getString("Eff_date"));
					System.out.println(getData(jsonObj_med.getString("Eff_date")));
					med.setEff_date(getData(jsonObj_med.getString("Eff_date")));
				} else {
					java.util.Date date2 = (java.util.Date) new SimpleDateFormat("yyyy/mm/dd").parse(str);
					java.sql.Date sd = new java.sql.Date(date2.getTime());
					med.setEff_date(sd);
				}
				if (jsonObj_med.getString("Exp_date") != "") {
					med.setExp_date(getData(jsonObj_med.getString("Exp_date")));
				} else {
					java.util.Date date2 = (java.util.Date) new SimpleDateFormat("yyyy/mm/dd").parse(str);
					java.sql.Date sd = new java.sql.Date(date2.getTime());
					med.setExp_date(sd);

				}
				med2.setAppendix_code(jsonObj_med.getString("Appendix_code"));
				med2.setName_th(jsonObj_med.getString("Appendix_name"));
				med2.setIs_active(false);
				med2.setUser_code(userId);
				med2.setUpdate_time(getCurrentTimestamp());

			}

			listmedexam.add(med);

//			if (jsonObj_med.getInt("Version_id") == 1) {
//				listapp.add(med2);
//			}
			for (int ii = 0; ii < jsonArr_medexama.length(); ii++) {
				JSONObject jsonObj_med3 = jsonArr_medexama.getJSONObject(ii);
				Appendix_age_range medg = new Appendix_age_range();

				medg.setAppendix_code(jsonObj_med.getString("Appendix_code"));
				medg.setVersion_id(jsonObj_med.getInt("Version_id"));

				medg.setAge_index(jsonObj_med3.getInt("Age_index"));
				medg.setMin_age(jsonObj_med3.getString("Min_age").length() == 0 ? 0 : jsonObj_med3.getInt("Min_age"));
				medg.setMax_age(jsonObj_med3.getString("Max_age").length() == 0 ? 0 : jsonObj_med3.getInt("Max_age"));
				medg.setUser_code(userId);
				medg.setUpdate_time(getCurrentTimestamp());

				listage.add(medg);
			}
			for (int ii = 0; ii < jsonArr_medexamaD.length(); ii++) {
				JSONObject jsonObj_med3 = jsonArr_medexamaD.getJSONObject(ii);
				Appendix_age_range medg = new Appendix_age_range();

				medg.setAppendix_code(jsonObj_med.getString("Appendix_code"));
				medg.setVersion_id(jsonObj_med.getInt("Version_id"));

				medg.setAge_index(jsonObj_med3.getInt("Age_index"));
				medg.setMin_age(0);
				medg.setMax_age(0);
				medg.setUser_code(userId);
				medg.setUpdate_time(getCurrentTimestamp());

				listageD.add(medg);
			}
			for (int ii = 0; ii < jsonArr_medexams.length(); ii++) {
				JSONObject jsonObj_med4 = jsonArr_medexams.getJSONObject(ii);
				Appendix_sum_range medg = new Appendix_sum_range();

				medg.setAppendix_code(jsonObj_med.getString("Appendix_code"));
				medg.setVersion_id(jsonObj_med.getInt("Version_id"));

				medg.setSum_index(jsonObj_med4.getInt("Sum_index"));
				medg.setMin_sum(new BigDecimal(jsonObj_med4.getString("Min_sum").length() == 0 ? "0"
						: jsonObj_med4.getString("Min_sum").toString().replace(",", "")));
				medg.setMax_sum(new BigDecimal(jsonObj_med4.getString("Max_sum").length() == 0 ? "0"
						: jsonObj_med4.getString("Max_sum").toString().replace(",", "")));
				medg.setUser_code(userId);
				medg.setUpdate_time(getCurrentTimestamp());

				listsum.add(medg);
			}
			for (int ii = 0; ii < jsonArr_medexamsD.length(); ii++) {
				JSONObject jsonObj_med4 = jsonArr_medexamsD.getJSONObject(ii);
				Appendix_sum_range medg = new Appendix_sum_range();

				medg.setAppendix_code(jsonObj_med.getString("Appendix_code"));
				medg.setVersion_id(jsonObj_med.getInt("Version_id"));

				medg.setSum_index(jsonObj_med4.getInt("Sum_index"));
				medg.setMin_sum(new BigDecimal(jsonObj_med4.getString("Min_sum").length() == 0 ? "0"
						: jsonObj_med4.getString("Min_sum").toString().replace(",", "")));
				medg.setMax_sum(new BigDecimal(jsonObj_med4.getString("Max_sum").length() == 0 ? "0"
						: jsonObj_med4.getString("Max_sum").toString().replace(",", "")));
				medg.setUser_code(userId);
				medg.setUpdate_time(getCurrentTimestamp());

				listsumD.add(medg);
			}
			for (int ii = 0; ii < jsonArr_medexamm.length(); ii++) {
				JSONObject jsonObj_med4 = jsonArr_medexamm.getJSONObject(ii);
				Appendix_exam medg = new Appendix_exam();

				medg.setAppendix_code(jsonObj_med4.getString("Appendix_code"));
				medg.setVersion_id(jsonObj_med4.getInt("Version_id"));

				medg.setSum_index(jsonObj_med4.getInt("Sum_index"));
				medg.setAge_index(jsonObj_med4.getInt("Age_index"));
				medg.setExam_code(jsonObj_med4.getString("Exam_code"));
				medg.setUser_code(userId);
				medg.setUpdate_time(getCurrentTimestamp());

				listmed.add(medg);
			}

		}
		settoService.deleteAppendixVersion(listmedexam, listapp, listageD, listsumD, listmed);
		settoService.setAppendixVersion(listmedexam, listapp, listage, listsum, listmed);
		settoService.setTxnAppendixVersion(listmedexamTxn);
		return String.valueOf(new_id)+","+new_Appendix_code;
	}
	public String save_Tab_NotApproveEditSettingAppendix1(HttpServletRequest request, HttpServletResponse response)
			throws Exception { // mortality_Tli

		MainUnderWriteSaveDateService settoService = new MainUnderWriteSaveDateService();

		String approve_note = request.getParameter("approve_note");
		String medexam_str = request.getParameter("appendixversion_data");
		String medexama_str = request.getParameter("age_data");
		String medexams_str = request.getParameter("sum_data");
		String medexamm_str = request.getParameter("med_data");

		String medexama_strD = request.getParameter("age_delete_data");
		String medexama_strS = request.getParameter("age_delete_data");

		JSONArray jsonArr_medexam = new JSONArray(medexam_str);
		JSONArray jsonArr_medexama = new JSONArray(medexama_str);
		JSONArray jsonArr_medexams = new JSONArray(medexams_str);
		JSONArray jsonArr_medexamm = new JSONArray(medexamm_str);
		JSONArray jsonArr_medexamaD = new JSONArray(medexama_strD);
		JSONArray jsonArr_medexamsD = new JSONArray(medexama_strS);

		ArrayList<Appendix_version> listmedexam = new ArrayList<>();
		ArrayList<Txn_appendix_version> listmedexamTxn = new ArrayList<>();
		ArrayList<Appendix> listapp = new ArrayList<>();
		ArrayList<Appendix_age_range> listage = new ArrayList<>();
		ArrayList<Appendix_age_range> listageD = new ArrayList<>();
		ArrayList<Appendix_sum_range> listsum = new ArrayList<>();
		ArrayList<Appendix_sum_range> listsumD = new ArrayList<>();
		ArrayList<Appendix_exam> listmed = new ArrayList<>();

		JSONObject responsejson = new JSONObject();
		ArrayList<Txn_underwrite> listtxnuw = new ArrayList<>();
		ArrayList<Txn_underwrite> maxlisttxnuw = new ArrayList<>();
		ArrayList<Txn_approve> listtxnappr = new ArrayList<>();
		MainUnderWriteService mis = new MainUnderWriteService();
		int new_id = 0;
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			// new_id=Integer.parseInt(jsonObj_med.getString("Txn_id").length()==0?"0":jsonObj_med.getString("Txn_id"));
			new_id = jsonObj_med.getInt("Txn_id");
		}
		if (jsonArr_medexam.length() > 0) {

			// GEN HEADER TXN
			Txn_underwrite txn = new Txn_underwrite();
			txn.setTxn_type("APPENDIX_VERSION");
			txn.setTxn_id(new_id);
			txn.setTxn_status("APPROVED");
			txn.setUser_code(userId);
			txn.setUpdate_time(getCurrentTimestamp());
			listtxnuw.add(txn);
			settoService.genTxnUnderwrite(listtxnuw);
			responsejson.put("Txn_Data", new_id);
			// responseText = responsejson.toString();
		}
		if (jsonArr_medexam.length() > 0) {

			// GEN TXN Approve
			Txn_approve txna = new Txn_approve();

			txna.setTxn_id(new_id);
			txna.setTxn_status("APPROVED");
			txna.setRqst_time(getCurrentTimestamp());
			txna.setUser_code(userId);
			txna.setRqst_user_code(userId);
			txna.setUpdate_time(getCurrentTimestamp());
			txna.setApprv_note(approve_note==null?"":approve_note);
			txna.setApprv_time(getCurrentTimestamp());
			txna.setApprv_user_code(userId);

			listtxnappr.add(txna);
			settoService.genTxnApprove(listtxnappr);

		}

		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_medT = jsonArr_medexam.getJSONObject(i);
			Txn_appendix_version medTxn = new Txn_appendix_version();
			Appendix med22 = new Appendix();
			if (true) {
				medTxn.setTxn_id(new_id);
				medTxn.setAppendix_code(jsonObj_medT.getString("Appendix_code"));
				medTxn.setAppendix_name(jsonObj_medT.getString("Appendix_name"));
				medTxn.setVersion_name(jsonObj_medT.getString("Version_name"));
				medTxn.setVersion_id(jsonObj_medT.getInt("Version_id"));
				medTxn.setIs_approve(jsonObj_medT.getBoolean("Is_approved"));
				medTxn.setSale_chan_id(jsonObj_medT.getInt("sale_channel"));
				medTxn.setAbb_name(jsonObj_medT.getString("Abb_name"));
				medTxn.setHq_med_exam_amt(
						new BigDecimal(jsonObj_medT.getString("Hq_med_exam_amt").toString().replace(",", "")));
				medTxn.setUser_code(userId);
				medTxn.setUpdate_time(getCurrentTimestamp());

				Timestamp ts = new Timestamp(System.currentTimeMillis());
				Date date = new Date(ts.getTime());

				String str = "9999/12/31";

				if (jsonObj_medT.getString("Eff_date") != "") {
					System.out.println(jsonObj_medT.getString("Eff_date"));
					System.out.println(getData(jsonObj_medT.getString("Eff_date")));
					medTxn.setEff_date(getData(jsonObj_medT.getString("Eff_date")));
				} else {
					java.util.Date date2 = (java.util.Date) new SimpleDateFormat("yyyy/mm/dd").parse(str);
					java.sql.Date sd = new java.sql.Date(date2.getTime());
					medTxn.setEff_date(sd);
				}
				if (jsonObj_medT.getString("Exp_date") != "") {
					medTxn.setExp_date(getData(jsonObj_medT.getString("Exp_date")));
				} else {
					java.util.Date date2 = (java.util.Date) new SimpleDateFormat("yyyy/mm/dd").parse(str);
					java.sql.Date sd = new java.sql.Date(date2.getTime());
					medTxn.setExp_date(sd);

				}
				med22.setAppendix_code(jsonObj_medT.getString("Appendix_code"));
				med22.setName_th(jsonObj_medT.getString("Appendix_name"));
				med22.setIs_active(false);
				med22.setUser_code(userId);
				med22.setUpdate_time(getCurrentTimestamp());

			}

			listmedexamTxn.add(medTxn);
		}
		String new_Appendix_code="";
		for (int i = 0; i < jsonArr_medexam.length(); i++) {
			JSONObject jsonObj_med = jsonArr_medexam.getJSONObject(i);
			Appendix_version med = new Appendix_version();
			Appendix med2 = new Appendix();
			if (true) {
				med.setAppendix_code(jsonObj_med.getString("Appendix_code"));
				new_Appendix_code=jsonObj_med.getString("Appendix_code");
				med.setAppendix_name(jsonObj_med.getString("Appendix_name"));
				med.setVersion_name(jsonObj_med.getString("Version_name"));
				med.setVersion_id(jsonObj_med.getInt("Version_id"));
				med.setIs_approve(jsonObj_med.getBoolean("Is_approved"));
				med.setSale_chan_id(jsonObj_med.getInt("sale_channel"));
				med.setAbb_name(jsonObj_med.getString("Abb_name"));
				med.setHq_med_exam_amt(
						new BigDecimal(jsonObj_med.getString("Hq_med_exam_amt").toString().replace(",", "")));
				med.setUser_code(userId);
				med.setUpdate_time(getCurrentTimestamp());

				Timestamp ts = new Timestamp(System.currentTimeMillis());
				Date date = new Date(ts.getTime());

				String str = "9999/12/31";

				if (jsonObj_med.getString("Eff_date") != "") {
					System.out.println(jsonObj_med.getString("Eff_date"));
					System.out.println(getData(jsonObj_med.getString("Eff_date")));
					med.setEff_date(getData(jsonObj_med.getString("Eff_date")));
				} else {
					java.util.Date date2 = (java.util.Date) new SimpleDateFormat("yyyy/mm/dd").parse(str);
					java.sql.Date sd = new java.sql.Date(date2.getTime());
					med.setEff_date(sd);
				}
				if (jsonObj_med.getString("Exp_date") != "") {
					med.setExp_date(getData(jsonObj_med.getString("Exp_date")));
				} else {
					java.util.Date date2 = (java.util.Date) new SimpleDateFormat("yyyy/mm/dd").parse(str);
					java.sql.Date sd = new java.sql.Date(date2.getTime());
					med.setExp_date(sd);

				}
				med2.setAppendix_code(jsonObj_med.getString("Appendix_code"));
				med2.setName_th(jsonObj_med.getString("Appendix_name"));
				med2.setIs_active(false);
				med2.setUser_code(userId);
				med2.setUpdate_time(getCurrentTimestamp());

			}

			listmedexam.add(med);

//			if (jsonObj_med.getInt("Version_id") == 1) {
//				listapp.add(med2);
//			}
			for (int ii = 0; ii < jsonArr_medexama.length(); ii++) {
				JSONObject jsonObj_med3 = jsonArr_medexama.getJSONObject(ii);
				Appendix_age_range medg = new Appendix_age_range();

				medg.setAppendix_code(jsonObj_med.getString("Appendix_code"));
				medg.setVersion_id(jsonObj_med.getInt("Version_id"));

				medg.setAge_index(jsonObj_med3.getInt("Age_index"));
				medg.setMin_age(jsonObj_med3.getString("Min_age").length() == 0 ? 0 : jsonObj_med3.getInt("Min_age"));
				medg.setMax_age(jsonObj_med3.getString("Max_age").length() == 0 ? 0 : jsonObj_med3.getInt("Max_age"));
				medg.setUser_code(userId);
				medg.setUpdate_time(getCurrentTimestamp());

				listage.add(medg);
			}
			for (int ii = 0; ii < jsonArr_medexamaD.length(); ii++) {
				JSONObject jsonObj_med3 = jsonArr_medexamaD.getJSONObject(ii);
				Appendix_age_range medg = new Appendix_age_range();

				medg.setAppendix_code(jsonObj_med.getString("Appendix_code"));
				medg.setVersion_id(jsonObj_med.getInt("Version_id"));

				medg.setAge_index(jsonObj_med3.getInt("Age_index"));
				medg.setMin_age(0);
				medg.setMax_age(0);
				medg.setUser_code(userId);
				medg.setUpdate_time(getCurrentTimestamp());

				listageD.add(medg);
			}
			for (int ii = 0; ii < jsonArr_medexams.length(); ii++) {
				JSONObject jsonObj_med4 = jsonArr_medexams.getJSONObject(ii);
				Appendix_sum_range medg = new Appendix_sum_range();

				medg.setAppendix_code(jsonObj_med.getString("Appendix_code"));
				medg.setVersion_id(jsonObj_med.getInt("Version_id"));

				medg.setSum_index(jsonObj_med4.getInt("Sum_index"));
				medg.setMin_sum(new BigDecimal(jsonObj_med4.getString("Min_sum").length() == 0 ? "0"
						: jsonObj_med4.getString("Min_sum").toString().replace(",", "")));
				medg.setMax_sum(new BigDecimal(jsonObj_med4.getString("Max_sum").length() == 0 ? "0"
						: jsonObj_med4.getString("Max_sum").toString().replace(",", "")));
				medg.setUser_code(userId);
				medg.setUpdate_time(getCurrentTimestamp());

				listsum.add(medg);
			}
			for (int ii = 0; ii < jsonArr_medexamsD.length(); ii++) {
				JSONObject jsonObj_med4 = jsonArr_medexamsD.getJSONObject(ii);
				Appendix_sum_range medg = new Appendix_sum_range();

				medg.setAppendix_code(jsonObj_med.getString("Appendix_code"));
				medg.setVersion_id(jsonObj_med.getInt("Version_id"));

				medg.setSum_index(jsonObj_med4.getInt("Sum_index"));
				medg.setMin_sum(new BigDecimal(jsonObj_med4.getString("Min_sum").length() == 0 ? "0"
						: jsonObj_med4.getString("Min_sum").toString().replace(",", "")));
				medg.setMax_sum(new BigDecimal(jsonObj_med4.getString("Max_sum").length() == 0 ? "0"
						: jsonObj_med4.getString("Max_sum").toString().replace(",", "")));
				medg.setUser_code(userId);
				medg.setUpdate_time(getCurrentTimestamp());

				listsumD.add(medg);
			}
			for (int ii = 0; ii < jsonArr_medexamm.length(); ii++) {
				JSONObject jsonObj_med4 = jsonArr_medexamm.getJSONObject(ii);
				Appendix_exam medg = new Appendix_exam();

				medg.setAppendix_code(jsonObj_med4.getString("Appendix_code"));
				medg.setVersion_id(jsonObj_med4.getInt("Version_id"));

				medg.setSum_index(jsonObj_med4.getInt("Sum_index"));
				medg.setAge_index(jsonObj_med4.getInt("Age_index"));
				medg.setExam_code(jsonObj_med4.getString("Exam_code"));
				medg.setUser_code(userId);
				medg.setUpdate_time(getCurrentTimestamp());

				listmed.add(medg);
			}

		}
		settoService.deleteAppendixVersion(listmedexam, listapp, listageD, listsumD, listmed);
		settoService.setAppendixVersion(listmedexam, listapp, listage, listsum, listmed);
		settoService.setTxnAppendixVersion(listmedexamTxn);
		return String.valueOf(new_id)+","+new_Appendix_code;
	}
	private Date getData(String date) throws Exception {
		return PDFFnc.getSqlDate(PDFFnc.changeToYYYYMMDD(date));
	}
	
//	private Date getData(String date)  throws Exception
//	{
//		return PDFFnc.getSqlDate(PDFFnc.changeToYYYYMMDD(date));
//	}

	private Timestamp getCurrentTimestamp() throws Exception {
		return PDFFnc.currentTimeStamp();
	}

	private BigDecimal covertStringtoBigDecimal(String in) {
		in = new java.math.BigDecimal(in).stripTrailingZeros().toPlainString();
		BigDecimal bigDecimalCurrency = null;
		in = in.trim();
		if (!in.equalsIgnoreCase("NULL")) {
			bigDecimalCurrency = new BigDecimal(in);
		} else {
			bigDecimalCurrency = new BigDecimal(0);
		}
		return bigDecimalCurrency;
	}
}
