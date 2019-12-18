package servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.math.BigDecimal;
import java.sql.Date;
import java.text.DateFormat;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONObject;

import layout.bean.productfac.beanset.AppendixSumAccumAccessData;
import layout.bean.productfac.beanset.AppendixVersionALLAccessData;
import layout.bean.productfac.beanset.LookupCatAccessData;
import layout.bean.productfac.beanset.ParticipantAccessData;
import layout.bean.productfac.coverage.Coverage;
import layout.bean.productfac.lookup.View_appendix_product;
import layout.bean.productfac.underwrite.Appendix_version;
import layout.bean.productfac.underwrite.Med_exam;
import layout.bean.productfac.underwrite.Policy_status_accum;
import layout.bean.productfac.underwrite.Txn_policy_status_accum;
import layout.bean.productfac.underwrite.Txn_underwrite;
import service.MainInsureDetailCreateProductService;
import service.center.LookupCatData;
import service.fnc.ConstantValues;
import service.fnc.PDFFnc;
import service.rider.RiderAccessData;
import layout.bean.productfac.beanset.TxnALLAccessData;
import service.underwrite.ctrl.MainUnderWriteSaveDateService;
import service.underwrite.ctrl.MainUnderWriteService;
import utility.adc.ServiceForProductFactory;
import utility.personnel.tlhrms.EmployeeInfo;
import utility.support.StatusPolicy;

@WebServlet("/UW_GetData_Servlet")
public class UW_GetData_Servlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public UW_GetData_Servlet() {
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
		// TODO Auto-generated method stub
		// doGet(request, response);
		processRequest(request, response);
	}

	protected void processRequest(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		try {
			// session = request.getSession();
			response.setCharacterEncoding("UTF-8");
			response.setContentType("application/json");
			PrintWriter out = response.getWriter();
			String responseText = "";
			String json = "";
			String method = request.getParameter("method");
			String GroupCode = request.getParameter("groupcode");
			ArrayList<Coverage> caseAll_return = null;
			ArrayList<Med_exam> medExams = null;
			ArrayList<Policy_status_accum> policyaccumIndividualLifes = null;
			ArrayList<Policy_status_accum> policyaccumGroupLifes = null;
			ArrayList<Txn_policy_status_accum> policyaccumIndividualLifesTxn = null;
			ArrayList<Txn_policy_status_accum> policyaccumGroupLifesTxn = null;
			ArrayList<Policy_status_accum> policyaccumIndividualLifesAdd = null;
			ArrayList<Policy_status_accum> policyaccumGroupLifesAdd = null;
			Policy_status_accum policyaccumAdd = null;
			ArrayList<Object[]> medExamsST = null;
			ArrayList<Object[]> appendixVersionsST = null;
			ArrayList<View_appendix_product> list_view_appendix_product = null;
			ArrayList<View_appendix_product> products = null;
			ArrayList<Appendix_version> appendixVersions = null;
			ArrayList<AppendixSumAccumAccessData> appendixSumAccums = null;
			ArrayList<AppendixVersionALLAccessData> appendixVersoinALL = null;
			ArrayList<TxnALLAccessData> txnALL = null;
			String[][] statuspolicy = StatusPolicy.status;
			DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");

			MainUnderWriteService mis = new MainUnderWriteService();
			String case_type = "";

			MainInsureDetailCreateProductService mdcs = new MainInsureDetailCreateProductService();
			int tabmaim = 1;

			ArrayList<LookupCatAccessData> datareturn_LookupCat;
			//datareturn_LookupCat = mdcs.BasicInfo_lookup(tabmaim);
			
			ArrayList<LookupCatAccessData> datareturn_LookupCat2;
			 LookupCatData lookkk = new LookupCatData();
			 datareturn_LookupCat = lookkk.searchLookupCat();

			JSONObject responsejson = new JSONObject();
			if (method.equals("getMedExam")) {
				medExamsST = mis.getCaseMedExamST(case_type);

				JSONArray medExam_data_jsonArray = new JSONArray();
				System.out.println("medExamsST = " + medExamsST.size());
				for (int i = 0; i < medExamsST.size(); i++) {
					Object obj[] = medExamsST.get(i);
					// System.out.println("medExamsST.get(i) = "+medExamsST.get(i).length);
					int jj = 0;
					// for (int j = 0; j < obj.length; j++) {

					JSONObject medExam_data_json = new JSONObject();
					String Exam_code = obj[jj].toString();
					medExam_data_json.put("Exam_code", obj[jj]);
					medExam_data_json.put("Name_abb", obj[++jj]);
					medExam_data_json.put("Name_th", obj[++jj]);
					medExam_data_json.put("Exam_type", obj[++jj]);
					medExam_data_json.put("Rate_amt", obj[++jj]);
					medExam_data_json.put("Is_Active", obj[++jj]);
					medExam_data_json.put("Is_Approved", obj[++jj]);
					// String uw =obj[++j].toString();
					medExam_data_json.put("Is_UW", obj[++jj]);
					// System.out.println("Is_UW = "+Exam_code+uw);
					medExam_data_json.put("Status", obj[++jj]);

					for (int j = 0; j < datareturn_LookupCat.size(); j++) {
						// ประเภทการตรวจเลือด
						if (datareturn_LookupCat.get(j).getLookupCat().getEnum_name().equals("lu_unw_txn_status")) {

							for (int ii = 0; ii < datareturn_LookupCat.get(j).getListLookupValue().size(); ii++) {
								if (datareturn_LookupCat.get(j).getListLookupValue().get(ii).getEnum_value()
										.equals(obj[jj])) {
									medExam_data_json.put("Txn_status",
											datareturn_LookupCat.get(j).getListLookupValue().get(ii).getName_th());

									ii = datareturn_LookupCat.get(j).getListLookupValue().size();
								}

							}
							j = datareturn_LookupCat.size();
						}

					}

					medExam_data_json.put("Txn_id", obj[++jj]);

					medExam_data_jsonArray.put(medExam_data_json);
					// }
				}
				responsejson.put("MedExam_Data", medExam_data_jsonArray);
				responseText = responsejson.toString();
			} else if (method.equals("getMedExamKey")) {
				String exam_key = request.getParameter("exam_key");
				
				medExamsST = mis.getCaseMedExamSTKey(case_type,exam_key);

				JSONArray medExam_data_jsonArray = new JSONArray();
				System.out.println("medExamsST = " + medExamsST.size());
				for (int i = 0; i < medExamsST.size(); i++) {
					Object obj[] = medExamsST.get(i);
					// System.out.println("medExamsST.get(i) = "+medExamsST.get(i).length);
					int jj = 0;
					// for (int j = 0; j < obj.length; j++) {

					JSONObject medExam_data_json = new JSONObject();
					String Exam_code = obj[jj].toString();
					medExam_data_json.put("Exam_code", obj[jj]);
					medExam_data_json.put("Name_abb", obj[++jj]);
					medExam_data_json.put("Name_th", obj[++jj]);
					medExam_data_json.put("Exam_type", obj[++jj]);
					medExam_data_json.put("Rate_amt", obj[++jj]);
					medExam_data_json.put("Is_Active", obj[++jj]);
					medExam_data_json.put("Is_Approved", obj[++jj]);
					// String uw =obj[++j].toString();
					medExam_data_json.put("Is_UW", obj[++jj]);
					// System.out.println("Is_UW = "+Exam_code+uw);
					medExam_data_json.put("Status", obj[++jj]);

					for (int j = 0; j < datareturn_LookupCat.size(); j++) {
						// ประเภทการตรวจเลือด
						if (datareturn_LookupCat.get(j).getLookupCat().getEnum_name().equals("lu_unw_txn_status")) {

							for (int ii = 0; ii < datareturn_LookupCat.get(j).getListLookupValue().size(); ii++) {
								if (datareturn_LookupCat.get(j).getListLookupValue().get(ii).getEnum_value()
										.equals(obj[jj])) {
									medExam_data_json.put("Txn_status",
											datareturn_LookupCat.get(j).getListLookupValue().get(ii).getName_th());

									ii = datareturn_LookupCat.get(j).getListLookupValue().size();
								}

							}
							j = datareturn_LookupCat.size();
						}

					}

					medExam_data_json.put("Txn_id", obj[++jj]);

					medExam_data_jsonArray.put(medExam_data_json);
					// }
				}
				responsejson.put("MedExam_Data", medExam_data_jsonArray);
				responseText = responsejson.toString();
			} else if (method.equals("getMedExamGroup")) {
				medExams = mis.getCaseMedExamGroup(case_type);

				JSONArray medExam_data_jsonArray = new JSONArray();
				for (int i = 0; i < medExams.size(); i++) {

					JSONObject medExam_data_json = new JSONObject();
					medExam_data_json.put("Exam_code", medExams.get(i).getExam_code());
					medExam_data_json.put("Name_abb", medExams.get(i).getName_abb());
					medExam_data_json.put("Name_th", medExams.get(i).getName_th());

					medExam_data_jsonArray.put(medExam_data_json);
					// }
				}
				responsejson.put("MedExamGroup_Data", medExam_data_jsonArray);
				responseText = responsejson.toString();
			} else if (method.equals("getMaxMedExamGroup")) {                 
				medExams = mis.getCaseMaxMedExamGroup(case_type);

				JSONArray medExam_data_jsonArray = new JSONArray();
				for (int i = 0; i < medExams.size(); i++) {

					JSONObject medExam_data_json = new JSONObject();
					medExam_data_json.put("Exam_code", medExams.get(i).getExam_code());
					medExam_data_json.put("Name_abb", medExams.get(i).getName_abb());
					medExam_data_json.put("Name_th", medExams.get(i).getName_th());

					medExam_data_jsonArray.put(medExam_data_json);
					// }
				}
				responsejson.put("MedExamGroup_Data", medExam_data_jsonArray);
				responseText = responsejson.toString();
			} else if (method.equals("getMedExamGroupDetail")) {
				medExams = mis.getCaseMedExamGroupDetail(GroupCode);

				JSONArray medExam_data_jsonArray = new JSONArray();
				for (int i = 0; i < medExams.size(); i++) {

					JSONObject medExam_data_json = new JSONObject();
					medExam_data_json.put("Exam_code", medExams.get(i).getExam_code());
					medExam_data_json.put("Name_abb", medExams.get(i).getName_abb());
					medExam_data_json.put("Name_th", medExams.get(i).getName_th());

					medExam_data_jsonArray.put(medExam_data_json);
					// }
				}
				responsejson.put("MedExamGroupDetail_Data", medExam_data_jsonArray);
				responseText = responsejson.toString();
			} else if (method.equals("getMedExamBlood")) {
				medExams = mis.getCaseMedExamBlood("UW");

				JSONArray medExam_data_jsonArray = new JSONArray();
				for (int i = 0; i < medExams.size(); i++) {

					JSONObject medExam_data_json = new JSONObject();
					medExam_data_json.put("Exam_code", medExams.get(i).getExam_code());
					medExam_data_json.put("Name_abb", medExams.get(i).getName_abb());
					medExam_data_json.put("Name_th", medExams.get(i).getName_th());

					medExam_data_jsonArray.put(medExam_data_json);
					// }
				}
				responsejson.put("MedExamBlood_Data", medExam_data_jsonArray);
				responseText = responsejson.toString();
			} else if (method.equals("getMedExamBloodAndNotBlood")) {
				medExams = mis.getCaseMedExamGroup("");

				// THIS IS SHOW DATA GROUP MED
				JSONArray medExam_data_jsonArray = new JSONArray();
				for (int i = 0; i < medExams.size(); i++) {

					JSONObject medExam_data_json = new JSONObject();
					medExam_data_json.put("Exam_code", medExams.get(i).getExam_code());
					medExam_data_json.put("Name_abb", medExams.get(i).getName_abb());
					medExam_data_json.put("Name_th", medExams.get(i).getName_th());

					medExam_data_jsonArray.put(medExam_data_json);
					// }
				}
				responsejson.put("MedExamBlood_Data", medExam_data_jsonArray);

				// THIS IS SHOW DATA ALONE MED
				medExams = mis.getCaseMedExamNotBlood("UW");
				medExam_data_jsonArray = new JSONArray();

				for (int i = 0; i < medExams.size(); i++) {
					JSONObject medExam_data_json = new JSONObject();
					medExam_data_json.put("Exam_code", medExams.get(i).getExam_code());
					medExam_data_json.put("Name_abb", medExams.get(i).getName_abb());
					medExam_data_json.put("Name_th", medExams.get(i).getName_th());
					medExam_data_json.put("Exam_type", medExams.get(i).getExam_type());

					medExam_data_jsonArray.put(medExam_data_json);
					// }
				}
				medExams = mis.getCaseMedExamBlood("UW");
				// medExam_data_jsonArray = new JSONArray();

				for (int i = 0; i < medExams.size(); i++) {
					JSONObject medExam_data_json = new JSONObject();
					medExam_data_json.put("Exam_code", medExams.get(i).getExam_code());
					medExam_data_json.put("Name_abb", medExams.get(i).getName_abb());
					medExam_data_json.put("Name_th", medExams.get(i).getName_th());
					medExam_data_json.put("Exam_type", medExams.get(i).getExam_type());

					medExam_data_jsonArray.put(medExam_data_json);
					// }
				}
				responsejson.put("MedExamNotBlood_Data", medExam_data_jsonArray);
				responseText = responsejson.toString();

			} else if (method.equals("getAppendixVersion")) {
				appendixVersionsST = mis.getAppendixVersionST(case_type, "");
				JSONArray medExam_data_jsonArray = new JSONArray();
				int position_of_lu_unw_txn_status = 0;
				for (int j = 0; j < datareturn_LookupCat.size(); j++) {
					// ประเภทการตรวจเลือด
					if (datareturn_LookupCat.get(j).getLookupCat().getEnum_name().equals("lu_unw_txn_status")) {
						position_of_lu_unw_txn_status = j;
					}
				}

				for (int i = 0; i < appendixVersionsST.size(); i++) {
					Object obj[] = appendixVersionsST.get(i);
					// int j = 0;
					// for (int j = 0; j < obj.length; j++) {
					int jj = 0;
					JSONObject data_json = new JSONObject();
					data_json.put("Appendix_code", obj[jj]);
					data_json.put("Version_name", obj[++jj]);
					data_json.put("Version_id", obj[++jj]);
					
					java.sql.Date temp_date	= getData2((String)obj[++jj]);
					String stemp_date 		= getDateFormatUW(temp_date);
					data_json.put("Eff_date",stemp_date );
					
					temp_date	= getData2((String)obj[++jj]);
				    stemp_date = getDateFormatUW(temp_date);
					data_json.put("Exp_date",stemp_date);
					
					data_json.put("Is_Active", obj[++jj]);
					data_json.put("Is_Approved", obj[++jj]);
					data_json.put("Appendix_name", obj[++jj]);
					data_json.put("Txn_id", obj[++jj]);
					
					int tmpjj = ++jj;

					// ประเภทการตรวจเลือด

					for (int ii = 0; ii < datareturn_LookupCat.get(position_of_lu_unw_txn_status).getListLookupValue()
							.size(); ii++) {
						if (datareturn_LookupCat.get(position_of_lu_unw_txn_status).getListLookupValue().get(ii)
								.getEnum_value().equals(obj[tmpjj])) {
							data_json.put("Txn_status", datareturn_LookupCat.get(position_of_lu_unw_txn_status)
									.getListLookupValue().get(ii).getName_th());

							ii = datareturn_LookupCat.get(position_of_lu_unw_txn_status).getListLookupValue().size();
						}

					}

					data_json.put("Abb_name", obj[++jj]);
					data_json.put("Sale_chan_id", obj[++jj]);
	
					medExam_data_jsonArray.put(data_json);
					
				}
				responsejson.put("AppendixVersion_Data", medExam_data_jsonArray);
				responseText = responsejson.toString();
			} else if (method.equals("getMaxAppendixVersion")) {
				String Appendix_code = request.getParameter("Appendix_code");
				String Version_id = request.getParameter("Version_id");
				String appendixValueName = request.getParameter("appendixValueName");
				
				appendixVersionsST = mis.getAppendixVersionST("MAX", Appendix_code, Version_id);

				JSONArray medExam_data_jsonArray = new JSONArray();
				for (int i = 0; i < appendixVersionsST.size(); i++) {
					Object obj[] = appendixVersionsST.get(i);
					int j = 0;
					// for (int j = 0; j < obj.length; j++) {

					JSONObject data_json = new JSONObject();
					data_json.put("Appendix_code", obj[j]);
					data_json.put("Version_name", obj[++j]);
					data_json.put("Version_id", obj[++j]);
					
					java.sql.Date temp_date	= getData2((String)obj[++j]);
					String stemp_date 		= getDateFormatUW(temp_date);
					data_json.put("Eff_date",stemp_date );
					
					temp_date	= getData2((String)obj[++j]);
				    stemp_date = getDateFormatUW(temp_date);
					data_json.put("Exp_date",stemp_date);
					
					data_json.put("Is_Active", obj[++j]);
					data_json.put("Is_Approved", obj[++j]);
					data_json.put("Appendix_name", obj[++j]);
					data_json.put("Abb_name", obj[++j]);
					medExam_data_jsonArray.put(data_json);
					// }
				}
				responsejson.put("AppendixVersion_Data", medExam_data_jsonArray);
				responseText = responsejson.toString();
			} else if (method.equals("getMaxExamGroupCode")) {
				String Appendix_code = request.getParameter("Appendix_code");
				String Version_id = request.getParameter("Version_id");

				appendixVersionsST = mis.getAppendixVersionST("MaxExamGroupCode", "", "");

				JSONArray medExam_data_jsonArray = new JSONArray();
				for (int i = 0; i < appendixVersionsST.size(); i++) {
					Object obj[] = appendixVersionsST.get(i);
					int j = 0;
					// for (int j = 0; j < obj.length; j++) {

					JSONObject data_json = new JSONObject();
					data_json.put("MaxExam_code", obj[j]);
					
					medExam_data_jsonArray.put(data_json);
					// }
				}
				responsejson.put("MaxExam_code_Data", medExam_data_jsonArray);
				responseText = responsejson.toString();
			} else if (method.equals("getAppendixVersionTo")) {
				String Appendix_code = request.getParameter("Appendix_code");
				String Version_id = request.getParameter("Version_id");

				appendixVersionsST = mis.getAppendixVersionST("APPENDIX", Appendix_code, Version_id);

				JSONArray medExam_data_jsonArray = new JSONArray();
				for (int i = 0; i < appendixVersionsST.size(); i++) {
					Object obj[] = appendixVersionsST.get(i);
					int j = 0;
					// for (int j = 0; j < obj.length; j++) {

					JSONObject data_json = new JSONObject();
					data_json.put("Appendix_code", obj[j]);
					data_json.put("Version_name", obj[++j]);
					data_json.put("Version_id", obj[++j]);
					
					java.sql.Date temp_date	= getData2((String)obj[++j]);
					String stemp_date 		= getDateFormatUW(temp_date);
					data_json.put("Eff_date",stemp_date );
					
					temp_date	= getData2((String)obj[++j]);
				    stemp_date = getDateFormatUW(temp_date);
					data_json.put("Exp_date",stemp_date);
					
					data_json.put("Is_Active", obj[++j]);
					data_json.put("Is_Approved", obj[++j]);
					data_json.put("Appendix_name", obj[++j]);
					data_json.put("Abb_name", obj[++j]);
					medExam_data_jsonArray.put(data_json);
					// }
				}
				responsejson.put("AppendixVersion_Data", medExam_data_jsonArray);
				responseText = responsejson.toString();
			} else if (method.equals("getAppendixVersionFromProductOLD")) {
				appendixVersions = mis.getAppendixProduct("P");
				JSONArray medExam_data_jsonArray = new JSONArray();
				for (int i = 0; i < appendixVersions.size(); i++) {

					JSONObject medExam_data_json = new JSONObject();
					medExam_data_json.put("Appendix_code", appendixVersions.get(i).getAppendix_code());
					medExam_data_json.put("Appendix_name", appendixVersions.get(i).getAppendix_name());
					medExam_data_json.put("Version_name", appendixVersions.get(i).getVersion_name());
					medExam_data_json.put("Version_id", appendixVersions.get(i).getVersion_id());
					SimpleDateFormat format = new SimpleDateFormat("dd/MM/yyyy");

					if (appendixVersions.get(i).getEff_date() == null) {

					} else {
						String dateStringEFF = getDateFormat(appendixVersions.get(i).getEff_date());
						medExam_data_json.put("Eff_date", dateStringEFF);
					}
					if (appendixVersions.get(i).getExp_date() == null) {

					} else {
						String dateStringEXR = getDateFormat(appendixVersions.get(i).getExp_date());
						medExam_data_json.put("Exp_date", dateStringEXR);
					}
					medExam_data_jsonArray.put(medExam_data_json);

				}
				responsejson.put("AppendixVersionProduct_Data", medExam_data_jsonArray);
				responseText = responsejson.toString();
			} else if (method.equals("getAppendixVersionFromProduct")) {
				appendixVersions = mis.getAppendixProduct("P_V02");
				JSONArray medExam_data_jsonArray = new JSONArray();
				for (int i = 0; i < appendixVersions.size(); i++) {

					JSONObject medExam_data_json = new JSONObject();
					medExam_data_json.put("Appendix_code", appendixVersions.get(i).getAppendix_code());
					medExam_data_json.put("Appendix_name", appendixVersions.get(i).getAppendix_name());
					medExam_data_json.put("Version_name", appendixVersions.get(i).getVersion_name());
					medExam_data_json.put("Version_id", appendixVersions.get(i).getVersion_id());
					medExam_data_json.put("Abb_name", appendixVersions.get(i).getAbb_name());
					SimpleDateFormat format = new SimpleDateFormat("dd/MM/yyyy");

					if (appendixVersions.get(i).getEff_date() == null) {

					} else {
						String dateStringEFF = getDateFormat(appendixVersions.get(i).getEff_date());
						medExam_data_json.put("Eff_date", dateStringEFF);
					}
					if (appendixVersions.get(i).getExp_date() == null) {

					} else {
						String dateStringEXR = getDateFormat(appendixVersions.get(i).getExp_date());
						medExam_data_json.put("Exp_date", dateStringEXR);
					}
					medExam_data_jsonArray.put(medExam_data_json);

				}
				responsejson.put("AppendixVersionProduct_Data", medExam_data_jsonArray);
				responseText = responsejson.toString();
			} else if (method.equals("getAppendixVersionToProduct")) {
				appendixVersions = mis.getAppendixProduct("P");
				JSONArray medExam_data_jsonArray = new JSONArray();
				for (int i = 0; i < appendixVersions.size(); i++) {

					JSONObject medExam_data_json = new JSONObject();
					medExam_data_json.put("Appendix_code", appendixVersions.get(i).getAppendix_code());
					medExam_data_json.put("Appendix_name", appendixVersions.get(i).getAppendix_name());
					medExam_data_json.put("Version_name", appendixVersions.get(i).getVersion_name());
					medExam_data_json.put("Version_id", appendixVersions.get(i).getVersion_id());
					SimpleDateFormat format = new SimpleDateFormat("dd/MM/yyyy");

					if (appendixVersions.get(i).getEff_date() == null) {

					} else {
						String dateStringEFF = getDateFormat(appendixVersions.get(i).getEff_date());
						medExam_data_json.put("Eff_date", dateStringEFF);
					}
					if (appendixVersions.get(i).getExp_date() == null) {

					} else {
						String dateStringEXR = getDateFormat(appendixVersions.get(i).getExp_date());
						medExam_data_json.put("Exp_date", dateStringEXR);
					}
					medExam_data_jsonArray.put(medExam_data_json);
					// }
				}
				responsejson.put("AppendixVersionProduct_Data", medExam_data_jsonArray);
				responseText = responsejson.toString();
			} else if (method.equals("getAppendixVersionPrepareProduct")) {

				String Appendix_code = request.getParameter("Appendix_code");
				String Version_id = request.getParameter("Version_id");
				String Channal_code = request.getParameter("Channal_code");
				String Partner_code = request.getParameter("Partner_code");
				String Cov_cat_id = request.getParameter("Cov_cat_id");
				String Txn_id = request.getParameter("Txn_id");

				list_view_appendix_product = mis.getView_appendix_product_not_Txn_id(Appendix_code, Version_id,
						Channal_code, Partner_code, Cov_cat_id, Txn_id);

				JSONArray medExam_data_jsonArray = new JSONArray();
				for (int i = 0; i < list_view_appendix_product.size(); i++) {

					JSONObject medExam_data_json = new JSONObject();
					medExam_data_json.put("Prd_code", list_view_appendix_product.get(i).getPrd_code());
					medExam_data_json.put("Prd_name", list_view_appendix_product.get(i).getPrd_name());
					medExam_data_json.put("Prd_name_market", list_view_appendix_product.get(i).getPrd_name_market());
					// System.out.println(list_view_appendix_product.get(i).getEff_date());
					medExam_data_json.put("Eff_date", list_view_appendix_product.get(i).getEff_date());

					medExam_data_jsonArray.put(medExam_data_json);
					// }
				}
				responsejson.put("ViewAppendixProduct_Data", medExam_data_jsonArray);
				responseText = responsejson.toString();
			} else if (method.equals("getAppendixVersionPrepareProductBYTxn_ID")) {

				String Appendix_code = request.getParameter("Appendix_code");
				String Version_id = request.getParameter("Version_id");
				String Channal_code = request.getParameter("Channal_code");
				String Partner_code = request.getParameter("Partner_code");
				String Cov_cat_id = request.getParameter("Cov_cat_id");
				String Txn_id = request.getParameter("Txn_id");

				list_view_appendix_product = mis.getView_appendix_product(Appendix_code, Version_id, Channal_code,
						Partner_code, Cov_cat_id, Txn_id);

				JSONArray medExam_data_jsonArray = new JSONArray();
				for (int i = 0; i < list_view_appendix_product.size(); i++) {

					JSONObject medExam_data_json = new JSONObject();
					medExam_data_json.put("Prd_code", list_view_appendix_product.get(i).getPrd_code());
					medExam_data_json.put("Prd_name", list_view_appendix_product.get(i).getPrd_name());
					medExam_data_json.put("Prd_name_market", list_view_appendix_product.get(i).getPrd_name_market());
					// System.out.println(list_view_appendix_product.get(i).getEff_date());
					medExam_data_json.put("Eff_date", list_view_appendix_product.get(i).getEff_date());

					medExam_data_jsonArray.put(medExam_data_json);
					// }
				}
				responsejson.put("ViewAppendixProduct_Data", medExam_data_jsonArray);
				responseText = responsejson.toString();
			} else if (method.equals("getAppendixSumAccum")) {
				appendixSumAccums = mis.getAppendixSumAccum(case_type);
				JSONArray data_jsonArray = new JSONArray();

				int position_of_lu_unw_txn_status = 0;
				for (int j = 0; j < datareturn_LookupCat.size(); j++) {
					// ประเภทการตรวจเลือด
					if (datareturn_LookupCat.get(j).getLookupCat().getEnum_name().equals("lu_unw_txn_status")) {
						position_of_lu_unw_txn_status = j;
					}
				}

				for (AppendixSumAccumAccessData appsc : appendixSumAccums) {

					JSONObject data_json = new JSONObject();
					data_json.put("Appendix_code", appsc.getAppendix_version().getAppendix_code());
					data_json.put("Appendix_name", appsc.getAppendix_version().getAppendix_name());
					data_json.put("Version_name", appsc.getAppendix_version().getVersion_name());
					data_json.put("Version_ID", appsc.getAppendix_version().getVersion_id());
					data_json.put("Abb_name", appsc.getAppendix_version().getAbb_name());
					data_json.put("Eff_date", getDateFormat(appsc.getAppendix_version().getEff_date()));
					data_json.put("Exp_date", getDateFormat(appsc.getAppendix_version().getExp_date()));
					if (appsc.getTxn_appendix_sum_accum() != null) {
						// if(appsc.getTxn_appendix_sum_accum().size()>0) {
						data_json.put("IC_Yes", appsc.getTxn_appendix_sum_accum().getIc_yes());
						data_json.put("IC_No", appsc.getTxn_appendix_sum_accum().getIc_no());
						data_json.put("Sub_Yes", appsc.getTxn_appendix_sum_accum().getSub_yes());
						data_json.put("Sub_No", appsc.getTxn_appendix_sum_accum().getSub_no());
						data_json.put("Txn_id", appsc.getTxn_appendix_sum_accum().getTxn_id());
						txnALL = null;
						txnALL = mis.searchTxnApproveALL("", appsc.getTxn_appendix_sum_accum().getTxn_id());

						if (txnALL==null?false:txnALL.size()==0?false:txnALL.get(0).getListTxn_underwrite() != null) {

							for (int i = 0; i < txnALL.get(0).getListTxn_underwrite().size(); i++) {
								if (txnALL.get(0).getListTxn_underwrite().get(i) != null) {
									data_json.put("Txn_status",
											txnALL.get(0).getListTxn_underwrite().get(i).getTxn_status());
									for (int j = 0; j < datareturn_LookupCat.size(); j++) {
										// ประเภทการตรวจเลือด
										if (datareturn_LookupCat.get(position_of_lu_unw_txn_status).getLookupCat()
												.getEnum_name().equals("lu_unw_txn_status")) {

											for (int ii = 0; ii < datareturn_LookupCat.get(position_of_lu_unw_txn_status).getListLookupValue()
													.size(); ii++) {
												if (datareturn_LookupCat.get(position_of_lu_unw_txn_status).getListLookupValue().get(ii)
														.getEnum_value().equals(txnALL.get(0).getListTxn_underwrite().get(i).getTxn_status())) {
													data_json.put("Txn_status", datareturn_LookupCat.get(position_of_lu_unw_txn_status)
															.getListLookupValue().get(ii).getName_th());

													ii = datareturn_LookupCat.get(position_of_lu_unw_txn_status).getListLookupValue().size();
												}

											}
											j = datareturn_LookupCat.size();
										}

									}
								}

							}

						} else {
							System.out.println("Nooooooooooooooage");
						}
						// }
					}else if (appsc.getListAppendix_sum_accum() != null) {
						if (appsc.getListAppendix_sum_accum().size() > 0) {
							data_json.put("IC_Yes", appsc.getListAppendix_sum_accum().get(0).getIc_yes());
							data_json.put("IC_No", appsc.getListAppendix_sum_accum().get(0).getIc_no());
							data_json.put("Sub_Yes", appsc.getListAppendix_sum_accum().get(0).getSub_yes());
							data_json.put("Sub_No", appsc.getListAppendix_sum_accum().get(0).getSub_no());
							data_json.put("Txn_id", 0);
							data_json.put("Txn_status", "สร้างใหม่");
						}else {
							data_json.put("IC_Yes", 0);
							data_json.put("IC_No", 0);
							data_json.put("Sub_Yes", 0);
							data_json.put("Sub_No", 0);
							data_json.put("Txn_id", 0);
							data_json.put("Txn_status", "สร้างใหม่");
						}
					} else {
						data_json.put("Txn_id", 0);
						data_json.put("Txn_status", "อนุมัติแล้ว");
					}

					String Eff_date = getDateFormat(appsc.getAppendix_version().getEff_date());
					data_json.put("Eff_date", Eff_date);
					
					data_json.put("Exp_date", appsc.getAppendix_version().getExp_date() == null ? null
							: getDateFormat(appsc.getAppendix_version().getExp_date()));
					data_jsonArray.put(data_json);
					
				}
				responsejson.put("AppendixSumAccum_Data", data_jsonArray);
				responseText = responsejson.toString();
			} else if (method.equals("getStatusPolicy_OLD")) {
				
				int lenSS = statuspolicy.length;

				policyaccumIndividualLifes = mis.getPolicyStatusAccum("1");
				policyaccumGroupLifes = mis.getPolicyStatusAccum("2");

				JSONArray data_jsonArray = new JSONArray();
				JSONArray data_jsonArray2 = new JSONArray();
				
				for (int i = 0; i < policyaccumIndividualLifes.size(); i++) {

					JSONObject data_json = new JSONObject();
					data_json.put("Policy_code", policyaccumIndividualLifes.get(i).getPolicy_status());
					for (int ii = 0; ii < lenSS; ii++) {
						System.out.println("statuspolicy = " + statuspolicy[ii][0] + " is " + statuspolicy[ii][1]);
						if (statuspolicy[ii][0].equals(policyaccumIndividualLifes.get(i).getPolicy_status())) {
							data_json.put("statusname", statuspolicy[ii][1]);
						}
					}
					data_json.put("Is_insure_sum", policyaccumIndividualLifes.get(i).getIs_insure_sum());
					data_json.put("Is_med_sum", policyaccumIndividualLifes.get(i).getIs_med_sum());
					data_json.put("Is_rider_sum", policyaccumIndividualLifes.get(i).getIs_rider_sum());
					data_json.put("Is_sum_for_rider", policyaccumIndividualLifes.get(i).getIs_sum_for_rider());
					

					data_jsonArray.put(data_json);
					
				}
				for (int i = 0; i < policyaccumGroupLifes.size(); i++) {

					JSONObject data_json = new JSONObject();
					data_json.put("Policy_code", policyaccumGroupLifes.get(i).getPolicy_status());
					for (int ii = 0; ii < lenSS; ii++) {
						System.out.println("statuspolicy = " + statuspolicy[ii][0] + " is " + statuspolicy[ii][1]);
						if (statuspolicy[ii][0].equals(policyaccumGroupLifes.get(i).getPolicy_status())) {
							data_json.put("statusname", statuspolicy[ii][1]);
						}
					}
					data_json.put("Is_insure_sum", policyaccumGroupLifes.get(i).getIs_insure_sum());
					data_json.put("Is_med_sum", policyaccumGroupLifes.get(i).getIs_med_sum());
					data_json.put("Is_rider_sum", policyaccumGroupLifes.get(i).getIs_rider_sum());
					data_json.put("Is_sum_for_rider", policyaccumGroupLifes.get(i).getIs_sum_for_rider());

					data_jsonArray2.put(data_json);
					// }
				}
				responsejson.put("PolicyAccumStatusIndividualLifes_Data", data_jsonArray);
				responsejson.put("PolicyAccumStatusGroupLifes_Data", data_jsonArray2);
				responseText = responsejson.toString();
			} else if (method.equals("getStatusPolicy")) {
				MainUnderWriteSaveDateService settoService = new MainUnderWriteSaveDateService();

				
				int lenSS = statuspolicy.length;

				//
				int position_of_lu_unw_txn_status = 0;
				for (int j = 0; j < datareturn_LookupCat.size(); j++) {
					// ประเภทการตรวจเลือด
					if (datareturn_LookupCat.get(j).getLookupCat().getEnum_name().equals("lu_unw_txn_status")) {
						position_of_lu_unw_txn_status = j;
					}
				}
				// LOOP FOR CREATE NEW DATA FROM FILE UTILITY
				policyaccumIndividualLifes = mis.getPolicyStatusAccum("1");
				policyaccumGroupLifes = mis.getPolicyStatusAccum("2");

				JSONArray data_jsonArray = new JSONArray();
				JSONArray data_jsonArray2 = new JSONArray();
				policyaccumIndividualLifesAdd = new ArrayList<>();
				int checkSame = 0;
				int policyaccumIndividualLifes_size = policyaccumIndividualLifes == null ? 0
						: policyaccumIndividualLifes.size();
				if (lenSS != policyaccumIndividualLifes_size) {
					for (int ii = 0; ii < lenSS; ii++) {
						checkSame = 0;
						for (int i = 0; i < policyaccumIndividualLifes.size(); i++) {
							if (statuspolicy[ii][0].equals(policyaccumIndividualLifes.get(i).getPolicy_status())) {
								checkSame = 1;
								continue;
							}
						}
						if (checkSame == 0) {
							checkSame = 0;
							policyaccumAdd = null;

							policyaccumAdd = new Policy_status_accum();
							policyaccumAdd.setCov_cat_id(1);
							policyaccumAdd.setIs_insure_sum(false);
							policyaccumAdd.setIs_med_sum(false);
							policyaccumAdd.setIs_rider_sum(false);
							policyaccumAdd.setIs_sum_for_rider(false);
							policyaccumAdd.setPolicy_status(statuspolicy[ii][0]);
							policyaccumIndividualLifesAdd.add(policyaccumAdd);

						}
					}

				}

				if (policyaccumIndividualLifesAdd == null ? false : policyaccumIndividualLifesAdd.size() > 0) {
					settoService.setPolicyStatus(policyaccumIndividualLifesAdd);
				}
				policyaccumIndividualLifesAdd = new ArrayList<>();
				int checkSame2 = 0;
				int policyaccumgroupLifes_size = policyaccumGroupLifes == null ? 0 : policyaccumGroupLifes.size();
				if (lenSS != policyaccumgroupLifes_size) {
					for (int ii = 0; ii < lenSS; ii++) {
						checkSame2 = 0;
						for (int i = 0; i < policyaccumGroupLifes.size(); i++) {
							if (statuspolicy[ii][0].equals(policyaccumGroupLifes.get(i).getPolicy_status())) {
								checkSame2 = 1;
								continue;
							}
						}
						if (checkSame2 == 0) {
							checkSame2 = 0;
							policyaccumAdd = null;

							policyaccumAdd = new Policy_status_accum();
							policyaccumAdd.setCov_cat_id(2);
							policyaccumAdd.setIs_insure_sum(false);
							policyaccumAdd.setIs_med_sum(false);
							policyaccumAdd.setIs_rider_sum(false);
							policyaccumAdd.setIs_sum_for_rider(false);
							policyaccumAdd.setPolicy_status(statuspolicy[ii][0]);
							policyaccumIndividualLifesAdd.add(policyaccumAdd);

						}
					}

				}

				if (policyaccumIndividualLifesAdd == null ? false : policyaccumIndividualLifesAdd.size() > 0) {
					settoService.setPolicyStatus(policyaccumIndividualLifesAdd);
				}

				// END LOOP FOR CREATE NEW DATA FROM FILE UTILITY

				// LOOP FOR CREATE GET DATA TO SHOW
				policyaccumIndividualLifes = mis.getPolicyStatusAccum("1");
				policyaccumGroupLifes = mis.getPolicyStatusAccum("2");
				policyaccumIndividualLifesTxn = mis.getPolicyStatusAccumTxn("1");
				policyaccumGroupLifesTxn = mis.getPolicyStatusAccumTxn("2");

				for (int i = 0; i < policyaccumIndividualLifesTxn.size(); i++) {

					JSONObject data_json = new JSONObject();
					data_json.put("Policy_code", policyaccumIndividualLifesTxn.get(i).getPolicy_status());
					for (int ii = 0; ii < lenSS; ii++) {
						if (statuspolicy[ii][0].equals(policyaccumIndividualLifesTxn.get(i).getPolicy_status())) {
							data_json.put("statusname", statuspolicy[ii][1]);
						}
					}
					data_json.put("Is_insure_sum", policyaccumIndividualLifesTxn.get(i).getIs_insure_sum());
					data_json.put("Is_med_sum", policyaccumIndividualLifesTxn.get(i).getIs_med_sum());
					data_json.put("Is_rider_sum", policyaccumIndividualLifesTxn.get(i).getIs_rider_sum());
					data_json.put("Is_sum_for_rider", policyaccumIndividualLifesTxn.get(i).getIs_sum_for_rider());
					data_json.put("Txn_id", policyaccumIndividualLifesTxn.get(i).getTxn_id());

					txnALL = mis.searchTxnApproveALL("", policyaccumIndividualLifesTxn.get(i).getTxn_id());

					if (txnALL==null?false:txnALL.size()==0?false:txnALL.get(0).getListTxn_underwrite() != null) {
						if (txnALL.get(0).getListTxn_underwrite().size() > 0) {
							for (int ii = 0; ii < datareturn_LookupCat.get(position_of_lu_unw_txn_status)
									.getListLookupValue().size(); ii++) {
								if (datareturn_LookupCat.get(position_of_lu_unw_txn_status).getListLookupValue().get(ii)
										.getEnum_value()
										.equals(txnALL.get(0).getListTxn_underwrite().get(0).getTxn_status())) {
									data_json.put("Txn_status", datareturn_LookupCat.get(position_of_lu_unw_txn_status)
											.getListLookupValue().get(ii).getName_th());

									ii = datareturn_LookupCat.get(position_of_lu_unw_txn_status).getListLookupValue()
											.size();
								}

							}
						}
					} else {
						System.out.println("NooooooooooooooSum");
					}
					// ประเภทการตรวจเลือด

					data_jsonArray.put(data_json);
					// }
				}
				for (int i = 0; i < policyaccumIndividualLifes.size(); i++) {

					JSONObject data_json = new JSONObject();
					data_json.put("Policy_code", policyaccumIndividualLifes.get(i).getPolicy_status());
					for (int ii = 0; ii < lenSS; ii++) {
						if (statuspolicy[ii][0].equals(policyaccumIndividualLifes.get(i).getPolicy_status())) {
							data_json.put("statusname", statuspolicy[ii][1]);
						}
					}
					data_json.put("Is_insure_sum", policyaccumIndividualLifes.get(i).getIs_insure_sum());
					data_json.put("Is_med_sum", policyaccumIndividualLifes.get(i).getIs_med_sum());
					data_json.put("Is_rider_sum", policyaccumIndividualLifes.get(i).getIs_rider_sum());
					data_json.put("Is_sum_for_rider", policyaccumIndividualLifes.get(i).getIs_sum_for_rider());
					data_json.put("Txn_id", 0);
					data_json.put("Txn_status", "อนุมัติแล้ว");
					data_jsonArray.put(data_json);
					// }
				}

				for (int i = 0; i < policyaccumGroupLifesTxn.size(); i++) {

					JSONObject data_json = new JSONObject();
					data_json.put("Policy_code", policyaccumGroupLifesTxn.get(i).getPolicy_status());
					for (int ii = 0; ii < lenSS; ii++) {
						if (statuspolicy[ii][0].equals(policyaccumGroupLifesTxn.get(i).getPolicy_status())) {
							data_json.put("statusname", statuspolicy[ii][1]);
						}
					}
					data_json.put("Is_insure_sum", policyaccumGroupLifesTxn.get(i).getIs_insure_sum());
					data_json.put("Is_med_sum", policyaccumGroupLifesTxn.get(i).getIs_med_sum());
					data_json.put("Is_rider_sum", policyaccumGroupLifesTxn.get(i).getIs_rider_sum());
					data_json.put("Is_sum_for_rider", policyaccumGroupLifesTxn.get(i).getIs_sum_for_rider());
					data_json.put("Txn_id", policyaccumGroupLifesTxn.get(i).getTxn_id());
					txnALL = mis.searchTxnApproveALL("", policyaccumGroupLifesTxn.get(i).getTxn_id());

					if (txnALL==null?false:txnALL.size()==0?false:txnALL.get(0).getListTxn_underwrite() != null) {
						if (txnALL.get(0).getListTxn_underwrite().size() > 0) {
							for (int ii = 0; ii < datareturn_LookupCat.get(position_of_lu_unw_txn_status)
									.getListLookupValue().size(); ii++) {
								if (datareturn_LookupCat.get(position_of_lu_unw_txn_status).getListLookupValue().get(ii)
										.getEnum_value()
										.equals(txnALL.get(0).getListTxn_underwrite().get(0).getTxn_status())) {
									data_json.put("Txn_status", datareturn_LookupCat.get(position_of_lu_unw_txn_status)
											.getListLookupValue().get(ii).getName_th());

									ii = datareturn_LookupCat.get(position_of_lu_unw_txn_status).getListLookupValue()
											.size();
								}

							}
						}
					} else {
						System.out.println("NooooooooooooooSum");
					}
					data_jsonArray2.put(data_json);
					// }
				}
				for (int i = 0; i < policyaccumGroupLifes.size(); i++) {

					JSONObject data_json = new JSONObject();
					data_json.put("Policy_code", policyaccumGroupLifes.get(i).getPolicy_status());
					for (int ii = 0; ii < lenSS; ii++) {
						if (statuspolicy[ii][0].equals(policyaccumGroupLifes.get(i).getPolicy_status())) {
							data_json.put("statusname", statuspolicy[ii][1]);
						}
					}
					data_json.put("Is_insure_sum", policyaccumGroupLifes.get(i).getIs_insure_sum());
					data_json.put("Is_med_sum", policyaccumGroupLifes.get(i).getIs_med_sum());
					data_json.put("Is_rider_sum", policyaccumGroupLifes.get(i).getIs_rider_sum());
					data_json.put("Is_sum_for_rider", policyaccumGroupLifes.get(i).getIs_sum_for_rider());
					data_json.put("Txn_id", 0);
					data_json.put("Txn_status", "อนุมัติแล้ว");
					data_jsonArray2.put(data_json);
					// }
				}
				// END LOOP FOR CREATE GET DATA TO SHOW

				responsejson.put("PolicyAccumStatusIndividualLifes_Data", data_jsonArray);
				responsejson.put("PolicyAccumStatusGroupLifes_Data", data_jsonArray2);
				responseText = responsejson.toString();

			} else if (method.equals("getAppendixVersionDetail")) {
				String Appendix_code = request.getParameter("Appendix_Code");
				String Version_id = request.getParameter("Version_ID");
				appendixVersoinALL = mis.searchAppendixVersionALL(Appendix_code, Integer.parseInt(Version_id));
				appendixVersionsST = mis.getAppendixVersionST("KEY", Appendix_code, Version_id);
				
				JSONArray appendixVersion_data_jsonArray = new JSONArray();
				JSONArray age_jsonArray = new JSONArray();
				JSONArray sum_jsonArray = new JSONArray();
				JSONArray med_jsonArray = new JSONArray();
				JSONArray meddesc_jsonArray = new JSONArray();
				DecimalFormat df = new DecimalFormat("#,###,##0");
				if (appendixVersoinALL.size() != 0) {
					if (appendixVersoinALL.get(0).getAppendix_version() != null) {
						JSONObject data_json = new JSONObject();
						data_json.put("Appendix_code",
								appendixVersoinALL.get(0).getAppendix_version().getAppendix_code());
						data_json.put("Appendix_name",
								appendixVersoinALL.get(0).getAppendix_version().getAppendix_name());
						data_json.put("Version_name",
								appendixVersoinALL.get(0).getAppendix_version().getVersion_name());
						data_json.put("Version_id", appendixVersoinALL.get(0).getAppendix_version().getVersion_id());
						
						String Eff_date = getDateFormat(appendixVersoinALL.get(0).getAppendix_version().getEff_date());
						data_json.put("Exp_date", appendixVersoinALL.get(0).getAppendix_version().getExp_date() == null
								? null
								: getDateFormat(appendixVersoinALL.get(0).getAppendix_version().getExp_date()));

						data_json.put("Eff_date", Eff_date);
						data_json.put("Hq_med_exam_amt",
								df.format(appendixVersoinALL.get(0).getAppendix_version().getHq_med_exam_amt()));
						data_json.put("Abb_name", appendixVersoinALL.get(0).getAppendix_version().getAbb_name());

						for (int i = 0; i < appendixVersionsST.size(); i++) {
							Object obj[] = appendixVersionsST.get(i);
							
							if(obj[9].equals("0")) {
								data_json.put("Sale_chan_id"	, "NONE");
							}else {
								data_json.put("Sale_chan_id"	, obj[9]);
							}
							
							
							ArrayList<String> agent = new ArrayList<String>();
							agent= (ArrayList<String>) obj[10];
							//ArrayList<String> agents = agent.;
							for(String ag : agent) {
								if(ag.compareTo("NORMAL")==0) {
									data_json.put("NORMAL"	, ag);
								}else if(ag.compareTo("QUP")==0) {
									data_json.put("QUP"		, ag);
								}else if(ag.compareTo("TOP_UP")==0) {
									data_json.put("TOP_UP"	, ag);
								}else if(ag.compareTo("TOP_UP_PLUS")==0) {
									data_json.put("TOP_UP_PLUS", ag);
								}else if(ag.compareTo("RED_LEVEL")==0) {
									data_json.put("RED_LEVEL", 	ag);
								}
							}
						}	
						
						appendixVersion_data_jsonArray.put(data_json);

					}
					if (appendixVersoinALL.get(0).getListAppendix_age_range() != null) {
						for (int i = 0; i < appendixVersoinALL.get(0).getListAppendix_age_range().size(); i++) {
							JSONObject data_json = new JSONObject();
							data_json.put("Max_age",
									appendixVersoinALL.get(0).getListAppendix_age_range().get(i).getMax_age());
							data_json.put("Min_age",
									appendixVersoinALL.get(0).getListAppendix_age_range().get(i).getMin_age());
							data_json.put("Age_index",
									appendixVersoinALL.get(0).getListAppendix_age_range().get(i).getAge_index());
							age_jsonArray.put(data_json);
						}
					} else {
						System.out.println("Nooooooooooooooage");
					}
					if (appendixVersoinALL.get(0).getListAppendix_sum_range() != null) {
						for (int i = 0; i < appendixVersoinALL.get(0).getListAppendix_sum_range().size(); i++) {
							JSONObject data_json = new JSONObject();
							data_json.put("Max_sum",
									df.format(appendixVersoinALL.get(0).getListAppendix_sum_range().get(i).getMax_sum()));
							data_json.put("Min_sum",
									df.format(appendixVersoinALL.get(0).getListAppendix_sum_range().get(i).getMin_sum()));
							data_json.put("Sum_index",
									appendixVersoinALL.get(0).getListAppendix_sum_range().get(i).getSum_index());
							sum_jsonArray.put(data_json);
						}
					} else {
						System.out.println("Nohavesum");
					}

					if (appendixVersoinALL.get(0).getListAppendix_exam() != null) {
						for (int i = 0; i < appendixVersoinALL.get(0).getListAppendix_exam().size(); i++) {
							JSONObject data_json = new JSONObject();
							data_json.put("Appendix_code",
									appendixVersoinALL.get(0).getListAppendix_exam().get(i).getAppendix_code());
							data_json.put("Version_id",
									appendixVersoinALL.get(0).getListAppendix_exam().get(i).getVersion_id());
							String exam_code = "";
							exam_code = appendixVersoinALL.get(0).getListAppendix_exam().get(i).getExam_code();
							data_json.put("Exam_code",
									appendixVersoinALL.get(0).getListAppendix_exam().get(i).getExam_code());
							data_json.put("Age_index",
									appendixVersoinALL.get(0).getListAppendix_exam().get(i).getAge_index());
							data_json.put("Sum_index",
									appendixVersoinALL.get(0).getListAppendix_exam().get(i).getSum_index());
							for (int j = 0; j < appendixVersoinALL.get(0).getListMed_exam().size(); j++) {
								if (appendixVersoinALL.get(0).getListMed_exam().get(j).getExam_code().equals(exam_code)) {
									data_json.put("Name_abb",
											appendixVersoinALL.get(0).getListMed_exam().get(j).getName_abb());
								}

							}

							med_jsonArray.put(data_json);
						}
					} else {
						System.out.println("Nohaveexam");
					}

					if (appendixVersoinALL.get(0).getListMed_exam() != null) {
						for (int i = 0; i < appendixVersoinALL.get(0).getListMed_exam().size(); i++) {
							JSONObject data_json = new JSONObject();
							data_json.put("Exam_code", appendixVersoinALL.get(0).getListMed_exam().get(i).getExam_code());
							data_json.put("Name_abb", appendixVersoinALL.get(0).getListMed_exam().get(i).getName_abb());
							data_json.put("Name_th", appendixVersoinALL.get(0).getListMed_exam().get(i).getName_th());

							meddesc_jsonArray.put(data_json);
						}
					} else {
						System.out.println("NohaveexamDesc");
					}
				}
				
				responsejson.put("AppendixVersionALL_Data", appendixVersion_data_jsonArray);
				responsejson.put("Age_Data", age_jsonArray);
				responsejson.put("Sum_Data", sum_jsonArray);
				responsejson.put("Med_Data", med_jsonArray);
				responsejson.put("Meddesc_Data", meddesc_jsonArray);

				responseText = responsejson.toString();

			} else if (method.equals("getMaxAgeIndex")) {
				String Appendix_code = request.getParameter("Appendix_Code");
				String Version_id = request.getParameter("Version_ID");
				
				JSONArray appendixVersion_data_jsonArray = new JSONArray();
				JSONArray age_jsonArray = new JSONArray();
				JSONArray sum_jsonArray = new JSONArray();
				JSONArray med_jsonArray = new JSONArray();
				JSONArray meddesc_jsonArray = new JSONArray();
				DecimalFormat df = new DecimalFormat("#,###,##0");
				int MaxAge_Index = 0;
				int MaxSum_Index = 0;
				if (appendixVersoinALL==null?false:appendixVersoinALL.size() != 0) {
					if (appendixVersoinALL.get(0).getListAppendix_age_range() != null) {
						int i = appendixVersoinALL.get(0).getListAppendix_age_range().size() - 1;
						JSONObject data_json = new JSONObject();
						data_json.put("Max_age", appendixVersoinALL.get(0).getListAppendix_age_range().get(i).getMax_age());
						data_json.put("Min_age", appendixVersoinALL.get(0).getListAppendix_age_range().get(i).getMin_age());
						data_json.put("Age_index",
								appendixVersoinALL.get(0).getListAppendix_age_range().get(i).getAge_index());
						age_jsonArray.put(data_json);
						
					} else {
						System.out.println("Nooooooooooooooage");
					}
					if (appendixVersoinALL.get(0).getListAppendix_sum_range() != null) {
						int i = appendixVersoinALL.get(0).getListAppendix_sum_range().size() - 1;
						JSONObject data_json = new JSONObject();
						data_json.put("Max_sum",
								df.format(appendixVersoinALL.get(0).getListAppendix_sum_range().get(i).getMax_sum()));
						data_json.put("Min_sum",
								df.format(appendixVersoinALL.get(0).getListAppendix_sum_range().get(i).getMin_sum()));
						data_json.put("Sum_index",
								appendixVersoinALL.get(0).getListAppendix_sum_range().get(i).getSum_index());
						sum_jsonArray.put(data_json);
						
					} else {
						System.out.println("Nohavesum");
					}
				}
				

				responsejson.put("MaxAge_Data", age_jsonArray);
				responsejson.put("MaxSum_Data", sum_jsonArray);

				responseText = responsejson.toString();

			} else if (method.equals("getTxnAppendixProduct")) {
				String Appendix_code = request.getParameter("Appendix_code");
				String Version_id = request.getParameter("Version_id");
				// appendixVersoinALL = mis.searchAppendixVersionALL(Appendix_code,
				// Integer.parseInt(Version_id));
				txnALL = mis.searchTxnALL(Appendix_code, Integer.parseInt(Version_id));

				JSONArray appendixVersion_data_jsonArray = new JSONArray();
				JSONArray age_jsonArray = new JSONArray();
				JSONArray sum_jsonArray = new JSONArray();
				JSONArray med_jsonArray = new JSONArray();
				JSONArray meddesc_jsonArray = new JSONArray();
				DecimalFormat df = new DecimalFormat("#,###,##0");

				// MainInsureDetailCreateProductService mdcs = new
				// MainInsureDetailCreateProductService ();
				// int tabmaim = 1;
				//
				// ArrayList<LookupCatAccessData> datareturn_LookupCat;
				// datareturn_LookupCat = mdcs.BasicInfo_lookup(tabmaim);
				if (txnALL == null) {

				} else {
					if (txnALL == null ? false : txnALL.size() != 0) {
						if (txnALL.get(0).getAppendix_version() != null) {
							
							JSONObject data_json = new JSONObject();
							data_json.put("Appendix_code", txnALL.get(0).getAppendix_version().getAppendix_code());
							data_json.put("Version_name", txnALL.get(0).getAppendix_version().getVersion_name());
							data_json.put("Version_id", txnALL.get(0).getAppendix_version().getVersion_id());

							String Eff_date = getDateFormat(txnALL.get(0).getAppendix_version().getEff_date());
							data_json.put("Exp_date", txnALL.get(0).getAppendix_version().getExp_date() == null ? null
									: getDateFormat(txnALL.get(0).getAppendix_version().getExp_date()));

							data_json.put("Eff_date", Eff_date);
							data_json.put("Hq_med_exam_amt",
									df.format(txnALL.get(0).getAppendix_version().getHq_med_exam_amt()));

							data_json.put("Abb_name", txnALL.get(0).getAppendix_version().getAbb_name());
							appendixVersion_data_jsonArray.put(data_json);

						}
						
						
					
						if (txnALL.get(0).getListTxn_underwrite() != null) {
							for (int i = 0; i < txnALL.get(0).getListTxn_underwrite().size(); i++) {
								JSONObject data_json = new JSONObject();
								data_json.put("Txn_id", txnALL.get(0).getListTxn_underwrite().get(i).getTxn_id());
								data_json.put("Txn_status", txnALL.get(0).getListTxn_underwrite().get(i).getTxn_status());
								for (int j = 0; j < datareturn_LookupCat.size(); j++) {
									// ประเภทการตรวจเลือด
									//System.out.println(j+" "+datareturn_LookupCat.get(j).getLookupCat().getEnum_name());
									if (datareturn_LookupCat.get(j).getLookupCat().getEnum_name()
											.equals("lu_unw_txn_status")) {
	
										for (int ii = 0; ii < datareturn_LookupCat.get(j).getListLookupValue()
												.size(); ii++) {
											if (datareturn_LookupCat.get(j).getListLookupValue().get(ii).getEnum_value()
													.equals(txnALL.get(0).getListTxn_underwrite().get(i).getTxn_status())) {
												data_json.put("Txn_status", datareturn_LookupCat.get(j).getListLookupValue()
														.get(ii).getName_th());
	
												ii = datareturn_LookupCat.get(j).getListLookupValue().size();
											}
	
										}
										j = datareturn_LookupCat.size();
									}
	
								}
								age_jsonArray.put(data_json);
							}
						} else {
							System.out.println("Nooooooooooooooage");
						}
						if (txnALL.get(0).getListTxn_approve() != null) {
							for (int i = 0; i < txnALL.get(0).getListTxn_approve().size(); i++) {
								JSONObject data_json = new JSONObject();
								data_json.put("Txn_id", txnALL.get(0).getListTxn_approve().get(i).getTxn_id());
								data_json.put("Txn_status", txnALL.get(0).getListTxn_approve().get(i).getTxn_status());
								data_json.put("Rqst_time", txnALL.get(0).getListTxn_approve().get(i).getRqst_time());
								data_json.put("Rqst_user_code",
										txnALL.get(0).getListTxn_approve().get(i).getRqst_user_code());
								data_json.put("Rqst_note", txnALL.get(0).getListTxn_approve().get(i).getRqst_note());
								data_json.put("Apprv_time", txnALL.get(0).getListTxn_approve().get(i).getRqst_time());
								data_json.put("Apprv_user_code",
										txnALL.get(0).getListTxn_approve().get(i).getRqst_user_code());
								data_json.put("Apprv_note", txnALL.get(0).getListTxn_approve().get(i).getRqst_note());
	
								sum_jsonArray.put(data_json);
							}
						} else {
							System.out.println("NooooooooooooooSum");
						}

						if (txnALL.get(0).getListTxn_appendix_product() != null) {
							for (int i = 0; i < txnALL.get(0).getListTxn_appendix_product().size(); i++) {
								JSONObject data_jsonn = new JSONObject();
								data_jsonn.put("Txn_id", txnALL.get(0).getListTxn_appendix_product().get(i).getTxn_id());
								data_jsonn.put("Prd_code",
										txnALL.get(0).getListTxn_appendix_product().get(i).getPrd_code());
								data_jsonn.put("Eff_date",
										getDateFormat(txnALL.get(0).getListTxn_appendix_product().get(i).getEff_date()));
								data_jsonn.put("Exp_date",
										getDateFormat(txnALL.get(0).getListTxn_appendix_product().get(i).getExp_date()));
								data_jsonn.put("Appendix_code_old",
										txnALL.get(0).getListTxn_appendix_product().get(i).getAppendix_code_old());
								data_jsonn.put("Appendix_code_new",
										txnALL.get(0).getListTxn_appendix_product().get(i).getAppendix_code_new());
								data_jsonn.put("Appendix_version_old",
										txnALL.get(0).getListTxn_appendix_product().get(i).getAppendix_version_old());
								data_jsonn.put("Appendix_version_new",
										txnALL.get(0).getListTxn_appendix_product().get(i).getAppendix_version_new());
	
								String Eff_date = getDateFormat(txnALL.get(0).getListTxn_appendix_product().get(i).getEff_date());
								data_jsonn.put("Exp_date",
										txnALL.get(0).getListTxn_appendix_product().get(i).getExp_date() == null ? null
												: getDateFormat(
														txnALL.get(0).getListTxn_appendix_product().get(i).getExp_date()));
	
								data_jsonn.put("Eff_date", Eff_date);
	
								appendixVersoinALL = mis.searchAppendixVersionALL(
										txnALL.get(0).getListTxn_appendix_product().get(i).getAppendix_code_new(),
										txnALL.get(0).getListTxn_appendix_product().get(i).getAppendix_version_new());
	
								if (appendixVersoinALL==null?false:appendixVersoinALL.size() != 0) {
									if (appendixVersoinALL.get(0).getAppendix_version() != null) {
										data_jsonn.put("Version_name",
												appendixVersoinALL.get(0).getAppendix_version().getVersion_name());
										data_jsonn.put("Abb_name_new",
												appendixVersoinALL.get(0).getAppendix_version().getAbb_name());
										data_jsonn.put("Eff_date_new",
												appendixVersoinALL.get(0).getAppendix_version().getEff_date());
									}
								}
	
								// appendixVersoinALL = mis.searchAppendixVersionALL(Appendix_code,
								// Integer.parseInt(Version_id));
	
								med_jsonArray.put(data_jsonn);
							}
						} else {
							System.out.println("NooooooooooooooAppendixProduct");
						}
					}
					responsejson.put("AppendixVersionALL_Data", appendixVersion_data_jsonArray);
					responsejson.put("Txn_underwrite_Data", age_jsonArray);
					responsejson.put("Txn_approve_Data", sum_jsonArray);
					responsejson.put("Txn_appendix_product_Data", med_jsonArray);
					// responsejson.put("Meddesc_Data", meddesc_jsonArray);

					responseText = responsejson.toString();
				}

			} else if (method.equals("getTxnHistory")) {
				String Txn_id = request.getParameter("Txn_id");
				String Version_id = request.getParameter("Version_id");
				// appendixVersoinALL = mis.searchAppendixVersionALL(Appendix_code,
				// Integer.parseInt(Version_id));
				txnALL = mis.searchTxnApproveALL("", Integer.parseInt(Txn_id));

				JSONArray appendixVersion_data_jsonArray = new JSONArray();
				JSONArray age_jsonArray = new JSONArray();
				JSONArray sum_jsonArray = new JSONArray();
				JSONArray med_jsonArray = new JSONArray();
				JSONArray meddesc_jsonArray = new JSONArray();
				DecimalFormat df = new DecimalFormat("#,###,##0");
				// MainInsureDetailCreateProductService mdcs = new
				// MainInsureDetailCreateProductService ();
				if (txnALL == null ? false : txnALL.size() != 0) {
					if (txnALL.get(0).getListTxn_approve() != null) {
						for (int i = 0; i < txnALL.get(0).getListTxn_approve().size(); i++) {
							JSONObject data_json = new JSONObject();
							data_json.put("Txn_id"			, txnALL.get(0).getListTxn_approve().get(i).getTxn_id());
							data_json.put("Txn_status"		, txnALL.get(0).getListTxn_approve().get(i).getTxn_status());
							
							String Rqst_time_date ="";
							String Rqst_time_time ="";
							String Rqst_time_All ="";
							Date r_date=new Date(txnALL.get(0).getListTxn_approve().get(i).getRqst_time().getTime());  
							Rqst_time_date=getDateFormat(r_date);
							Rqst_time_time=new SimpleDateFormat("HH:mm").format(r_date);
							Rqst_time_All = Rqst_time_date+" "+Rqst_time_time+" น.";
							data_json.put("Rqst_time"		, Rqst_time_All);
							data_json.put("Rqst_user_code"	, txnALL.get(0).getListTxn_approve().get(i).getRqst_user_code());
							String Rqst_user_name = EmployeeInfo.getEmployeeFullName(txnALL.get(0).getListTxn_approve().get(i).getRqst_user_code());
							data_json.put("Rqst_user_name"	, Rqst_user_name);
							data_json.put("Rqst_note"		, txnALL.get(0).getListTxn_approve().get(i).getRqst_note());
							
							String Apprv_time_date ="";
							String Apprv_time_time ="";
							String Apprv_time_All ="";
							Date a_date=new Date(txnALL.get(0).getListTxn_approve().get(i).getRqst_time().getTime());  
							Apprv_time_date=getDateFormat(a_date);
							Apprv_time_time=new SimpleDateFormat("HH:mm").format(a_date);
							Apprv_time_All = Apprv_time_date+"  "+Apprv_time_time+" น.";
							
							
							data_json.put("Apprv_time"		, Apprv_time_All);
							data_json.put("Apprv_user_code"	, txnALL.get(0).getListTxn_approve().get(i).getRqst_user_code());
							String Apprv_user_name = EmployeeInfo.getEmployeeFullName(txnALL.get(0).getListTxn_approve().get(i).getRqst_user_code());
							data_json.put("Apprv_user_name"	, Apprv_user_name);
							data_json.put("Apprv_note"		, txnALL.get(0).getListTxn_approve().get(i).getApprv_note());
							data_json.put("Txn_status_en"	, txnALL.get(0).getListTxn_approve().get(i).getTxn_status());

							for (int j = 0; j < datareturn_LookupCat.size(); j++) {
								// ประเภทการตรวจเลือด
								if (datareturn_LookupCat.get(j).getLookupCat().getEnum_name().equals("lu_unw_txn_status")) {

									for (int ii = 0; ii < datareturn_LookupCat.get(j).getListLookupValue().size(); ii++) {
										if (datareturn_LookupCat.get(j).getListLookupValue().get(ii).getEnum_value()
												.equals(txnALL.get(0).getListTxn_approve().get(i).getTxn_status())) {
											data_json.put("Txn_status",
													datareturn_LookupCat.get(j).getListLookupValue().get(ii).getName_th());

											ii = datareturn_LookupCat.get(j).getListLookupValue().size();
										}

									}
									j = datareturn_LookupCat.size();
								}

							}

							sum_jsonArray.put(data_json);
						}
					} else {
						System.out.println("NooooooooooooooSum");
					}
				}
				

				responsejson.put("Txn_approve_Data", sum_jsonArray);

				responseText = responsejson.toString();

			} else if (method.equals("getLookUpFilter")) {

				String Appendix_code = request.getParameter("Appendix_code");
				String Version_id = request.getParameter("Version_id");

				list_view_appendix_product = mis.getFilter("F", Appendix_code, Version_id);

				JSONArray medExam_data_jsonArray = new JSONArray();
				JSONArray partner_jsonArray = new JSONArray();
				for (View_appendix_product appsc : list_view_appendix_product) {
					JSONObject data_json = new JSONObject();

					data_json.put("value", appsc.getSale_chan_id());
					// data_json.put("pass", appsc.getSale_chan_code());
					data_json.put("text", appsc.getSale_chan_name());
					medExam_data_jsonArray.put(data_json);

					String systemCode = appsc.getSale_chan_code();
					ServiceForProductFactory spf = new ServiceForProductFactory();
					// partner_jsonArray = new JSONArray();
					ArrayList<String[]> arr_Partner = new ArrayList<>();
					if(systemCode==null?false:systemCode.compareTo("None")==0) {
						JSONObject partner_Json = new JSONObject();
						partner_Json.put("pass", "None");
						partner_Json.put("text", "None");
						partner_Json.put("key", "NONE");
						partner_jsonArray.put(partner_Json);
					}else if (systemCode != null) {
						arr_Partner = spf.getPartnerByChannel(systemCode);
						for (int i = 0; i < arr_Partner.size(); i++) {
							if (arr_Partner.get(i)[0].compareTo(appsc.getSale_partner_code()) == 0) {
								JSONObject partner_Json = new JSONObject();
								partner_Json.put("pass", arr_Partner.get(i)[0]);
								partner_Json.put("text", arr_Partner.get(i)[1]);
								partner_Json.put("key", arr_Partner.get(i)[2]);

								partner_jsonArray.put(partner_Json);
								i = arr_Partner.size();
							}
						}
					}

				}
				responsejson.put("Lookup_sale_Data", partner_jsonArray);
				responsejson.put("Lookup_channal_Data", medExam_data_jsonArray);

				medExam_data_jsonArray = new JSONArray();
				for (View_appendix_product appsc : list_view_appendix_product) {
					JSONObject data_json = new JSONObject();

					data_json.put("value", appsc.getCov_cat_id());
					data_json.put("pass", appsc.getCat_code3());
					data_json.put("text", appsc.getCat_name3());

					medExam_data_jsonArray.put(data_json);
				}
				responsejson.put("Lookup_cov_cat_Data", medExam_data_jsonArray);

				responseText = responsejson.toString();

			}else if (method.equals("getLookUpFilterTxn")) {

				String Appendix_code 	= request.getParameter("Appendix_code");
				String Version_id 		= request.getParameter("Version_id");
				String Txn_id 			= request.getParameter("Txn_id");
				list_view_appendix_product = mis.getFilter("F", Appendix_code, Version_id,Txn_id);

				JSONArray medExam_data_jsonArray = new JSONArray();
				JSONArray partner_jsonArray = new JSONArray();
				for (View_appendix_product appsc : list_view_appendix_product) {
					JSONObject data_json = new JSONObject();

					data_json.put("value", appsc.getSale_chan_id());
					// data_json.put("pass", appsc.getSale_chan_code());
					data_json.put("text", appsc.getSale_chan_name());
					medExam_data_jsonArray.put(data_json);

					String systemCode = appsc.getSale_chan_code();
					ServiceForProductFactory spf = new ServiceForProductFactory();
					// partner_jsonArray = new JSONArray();
					ArrayList<String[]> arr_Partner = new ArrayList<>();
					if (systemCode != null) {
						if(systemCode.compareTo("None")==0) {
							JSONObject partner_Json = new JSONObject();
							partner_Json.put("pass", 0);
							partner_Json.put("text", "None");
							partner_Json.put("key", "None");

							partner_jsonArray.put(partner_Json);
						}else {
							arr_Partner = spf.getPartnerByChannel(systemCode);
							for (int i = 0; i < arr_Partner.size(); i++) {
								if (arr_Partner.get(i)[0].compareTo(appsc.getSale_partner_code()) == 0) {
									JSONObject partner_Json = new JSONObject();
									partner_Json.put("pass", arr_Partner.get(i)[0]);
									partner_Json.put("text", arr_Partner.get(i)[1]);
									partner_Json.put("key", arr_Partner.get(i)[2]);

									partner_jsonArray.put(partner_Json);
									i = arr_Partner.size();
								}
							}
						}
						
					}

				}
				responsejson.put("Lookup_sale_Data", partner_jsonArray);
				responsejson.put("Lookup_channal_Data", medExam_data_jsonArray);

				medExam_data_jsonArray = new JSONArray();
				for (View_appendix_product appsc : list_view_appendix_product) {
					JSONObject data_json = new JSONObject();

					data_json.put("value", appsc.getCov_cat_id());
					data_json.put("pass", appsc.getCat_code3());
					data_json.put("text", appsc.getCat_name3());

					medExam_data_jsonArray.put(data_json);
				}
				responsejson.put("Lookup_cov_cat_Data", medExam_data_jsonArray);

				responseText = responsejson.toString();

			}
			//
			json = responseText;
			System.out.println("Get//" + json);
			out.print(json);
		} catch (Exception e) {
			e.printStackTrace();
		}

	}
	private Date getData(String date)  throws Exception
	{
		return PDFFnc.getSqlDate(PDFFnc.changeToYYYYMMDD(date));
	}
	private Date getData2(String date)  throws Exception
	{
		return PDFFnc.getSqlDateUW(PDFFnc.changeToYYYYMMDD(date));
	}
	private String getDateFormatUW(Date data_f) throws Exception 
	{
		return data_f == null ? "" : PDFFnc.changeDateEntoThUW(new SimpleDateFormat("dd/MM/yyyy").format(data_f));
	}
	private String getDateFormat(Date data_f) throws Exception 
	{
		return data_f == null ? "" : PDFFnc.changeDateEntoTh(new SimpleDateFormat("dd/MM/yyyy").format(data_f));
	}
	
}