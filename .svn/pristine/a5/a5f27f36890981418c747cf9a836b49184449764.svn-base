package servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.JSONException;
import org.json.JSONObject;

import layout.bean.productfac.lookup.File;
import layout.bean.productfac.lookup.Rate_layout;
import service.baseplan.ctrl.FileData;
import service.baseplan.ctrl.RateLayoutData;
import service.center.PremAssumpRateData;
import service.fnc.PDFFnc;

@WebServlet("/BasePlanCL_save_file_Servlet")
public class BasePlanCL_save_file_Servlet extends HttpServlet 
{
	private HttpServletResponse response;
	private HttpServletRequest request;
	private File file;
	private Rate_layout rate_layout;
	private String userId;
	public BasePlanCL_save_file_Servlet() {
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)	throws ServletException, IOException 
	{
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse  response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)	throws ServletException, IOException 
	{
		HttpSession session = request.getSession();
		String getuserID = session.getAttribute("userID").toString();
		if (!getuserID.equals("")) {
			userId =  getuserID ;
		}else {
			System.out.println("================== NO USER ====================");
		}
		System.out.println("======= Save File BasePlanCL ======");
		PrintWriter out = response.getWriter();
		try 
		{
			setResponse(response);
			setRequest(request);
			setFile();
			File file = postFileData();
			setFiflePremAssumpRate(request.getParameter("prem_assum_rate"),file);
			out.print(putResponsejson(file).toString());
		} catch (Exception e) {
			e.printStackTrace();
			try {
				throw e;
			} catch (Exception e1) {
				e1.printStackTrace();
			}
		}
	}
	
	private void setFiflePremAssumpRate(String prem_assum_rate_id,File file)  throws Exception
	{

		if (prem_assum_rate_id != null) 
		{
			PremAssumpRateData prd = new PremAssumpRateData();
			ArrayList<layout.bean.productfac.lookup.Prem_assump_rate>	List_Pren_ass =  prd.searchLookupPremAssumpRateByKey(prem_assum_rate_id );
			layout.bean.productfac.lookup.Prem_assump_rate rt = List_Pren_ass.get(0);
			rt.setFile_id(file.getFile_id());
			prd.doLookupPremAssumpRateOL(rt);
		}
	}

	private JSONObject putResponsejson(File file) throws JSONException 
	{
		JSONObject responsejson = new JSONObject();
		responsejson.put("file_id", file.getFile_id());
		responsejson.put("file_type_id", file.getFile_type_id());
		responsejson.put("file_name", file.getFile_name());
		responsejson.put("file_url", file.getFile_url());
		responsejson.put("rate_layout_id", getRateLayout().getRate_layout_id());
		responsejson.put("user_code", file.getUser_code());
		System.out.println("putResponsejson >>> \n"+responsejson.toString());
		return responsejson;
	}

	private File  postFileData() throws Exception
	{
		return new FileData().saveFile(getFile());
		
	}

	private void setResponse(HttpServletResponse response) 
	{
		this.response = response;
		this.response.setCharacterEncoding("UTF-8");
		this.response.setContentType("application/json");
	}

	private void setRequest(HttpServletRequest request) throws Exception 
	{
		this.request = request;
	}
	private void setFile() throws Exception 
	{
		File file = new File();
		String file_id = request.getParameter("file_id").isEmpty() ? "0" : request.getParameter("file_id"); 
		file.setFile_id(Integer.parseInt(file_id));
		file.setFile_type_id(Integer.parseInt(request.getParameter("file_type_id")));
		file.setFile_name(request.getParameter("file_name"));
		file.setFile_url(request.getParameter("file_url"));
		file.setUser_code(userId);
		file.setUpdate_time(PDFFnc.currentTimeStamp());
		setFile(file);
		searchRateLayout(request.getParameter("rate_cat_id"),request.getParameter("sub_cat_id"),request.getParameter("file_pattern"));
		
	}

	private void setFile(File file) 
	{
		this.file = file;
	}
	/**
	 * @return the file
	 */
	private File getFile() {
		return file;
	}
	
	private void searchRateLayout(String rate_cat_id,String sub_cat_id,String file_pattern) throws Exception 
	{
		System.out.println("searchRateLayout >>> rate_cat_id "+rate_cat_id+" | sub_cat_id"+sub_cat_id+" | file_pattern "+file_pattern );
		RateLayoutData rateLayoutData = new RateLayoutData();
		Rate_layout rate_layout = rateLayoutData.searchRateLayout(rate_cat_id,sub_cat_id,file_pattern);
        setRateLayout(rate_layout);		
	}

	private void setRateLayout(Rate_layout rate_layout) 
	{
		this.rate_layout = rate_layout;
	}

	/**
	 * @return the rate_layout
	 */
	private Rate_layout getRateLayout() 
	{
		return rate_layout;
	}
	
	
}
