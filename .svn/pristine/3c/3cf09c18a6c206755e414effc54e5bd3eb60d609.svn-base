package servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Date;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONObject;

import layout.bean.productfac.beanset.DocumentHisAcessData;
import layout.bean.productfac.lookup.File;
import service.ctrl.PolicyWordingControlData;
import service.fnc.ConstantValues;
import service.fnc.PDFFnc;

/**
 * Servlet implementation class PolicyWording_Data_Servlet
 */
@WebServlet("/PolicyWording_Data_Servlet")
public class PolicyWording_Data_Servlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public PolicyWording_Data_Servlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		processRequest(request, response);
	}
	
	protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
		try {
			response.setCharacterEncoding("UTF-8");
			response.setContentType("application/json");
			PrintWriter out 	= response.getWriter();
			String responseText	= "";
			String json 		= "";
			String method 		= request.getParameter("method");
			JSONObject responsejson = new JSONObject();
			
			ConstantValues.COV_CODE = request.getParameter("cov_code");
			
			PolicyWordingControlData policyWordingControlData = new PolicyWordingControlData();
			if(method.equals("getLookupOldFilePolicy")) {
				JSONObject json_oldFile_policy = new JSONObject();
				
				int doc_type_id = Integer.parseInt(request.getParameter("doc_type_id"));
				int file_type = Integer.parseInt(request.getParameter("file_type"));
				
				ArrayList<File> lstFile = policyWordingControlData.searchPolicyWordingHistoryFile(doc_type_id, file_type);
				
				JSONArray oldFile_jsonArray = new JSONArray();
				for (File file : lstFile) {
					JSONObject oldFile_obj = new JSONObject();
					oldFile_obj.put("file_id", file.getFile_id());
					oldFile_obj.put("file_name", file.getFile_name());
					oldFile_obj.put("file_ref", file.getFile_url());
					oldFile_obj.put("file_type", file.getFile_type_id());
					oldFile_jsonArray.put(oldFile_obj);
				}
				json_oldFile_policy.put("old_file",oldFile_jsonArray);
				responseText = json_oldFile_policy.toString();
			}else if(method.equals("getHistoryPolicy")) {
				
				int doc_type_id = Integer.parseInt(request.getParameter("doc_type_id"));
				ArrayList<DocumentHisAcessData> lstdocumentHisAcessData = policyWordingControlData.searchPolicyWordingHistory(doc_type_id);
				JSONArray historyPolicy_jsonArray = new JSONArray();
				for (DocumentHisAcessData documentHisAcessData : lstdocumentHisAcessData) {
					JSONObject documentHis_object = new JSONObject();
					documentHis_object.put("seq", documentHisAcessData.getDocument_history().getSeq());
					Date date = new Date(documentHisAcessData.getDocument_history().getUpdate_time().getTime());
					String dateyyyymmdd = PDFFnc.getFormatYYMMDD(date);
					documentHis_object.put("date", PDFFnc.formatDate(true,2,dateyyyymmdd));
					documentHis_object.put("userId", documentHisAcessData.getDocument_history().getUser_code());
					JSONArray file_jsonArray = new JSONArray();
					for (File file : documentHisAcessData.getListFile()) {
						JSONObject file_jsonObject = new JSONObject();
						file_jsonObject.put("type", file.getFile_type_id());
						file_jsonObject.put("file_id", file.getFile_id());
						file_jsonObject.put("file_name", file.getFile_name());
						file_jsonObject.put("file_ref", file.getFile_url());
						file_jsonArray.put(file_jsonObject);
					}
					documentHis_object.put("file", file_jsonArray);
					historyPolicy_jsonArray.put(documentHis_object);
				}
				
				responsejson.put("history_policy", historyPolicy_jsonArray);
				responseText = responsejson.toString();
			}
			
			json = responseText;
			//System.out.println("GetPolicy/////"+json);
			out.print(json);
		}catch (Exception e) {
			e.printStackTrace();
		}
	}

}
