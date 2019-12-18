package servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Date;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.JSONArray;
import org.json.JSONObject;

import layout.bean.productfac.product.Product;
import rte.bl.productfac.CreateJsonFileUW;
import service.center.EMailImplement;
import service.ctrl.JSONImplementControlDataUW;
import service.ctrl.ProductData;
import service.fnc.ConstantValues;
import service.fnc.PDFFnc;
import service.product.ctrl.ProductControlData;

@WebServlet("/UW_JSON_Servlet")
public class UW_JSON_Servlet extends HttpServlet{
	private static final long serialVersionUID = 1L;
	private String userId;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public UW_JSON_Servlet() {
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
		System.out.println("======= Save UW_Email_Servlet ======");
		String responseText = "";
		String passInsurance = request.getParameter("passInsurance");
		ConstantValues.COV_CODE = passInsurance;
		try {

			if (request.getParameter("method").equals("Gen_JSON_MedExam")) {
				responseText = Gen_JSON_MedExam(request, response);
			} else if (request.getParameter("method").equals("Gen_JSON_MedExamG")) {
				responseText = Gen_JSON_MedExamG(request, response);
			} else if (request.getParameter("method").equals("Gen_JSON_Appendix_Sum_Accum")) {
				responseText = Gen_JSON_Appendix_Sum_Accum(request, response);
			} else if (request.getParameter("method").equals("Gen_JSON_Policy_Status")) {
				responseText = Gen_JSON_Policy_Status(request, response);
			} else if (request.getParameter("method").equals("Gen_JSON_Appendix_All")) {
				responseText = Gen_JSON_Appendix_All(request, response);
			} else if (request.getParameter("method").equals("Gen_JSON_Appendix_Product")) {
				responseText = Gen_JSON_Appendix_Product(request, response);
			} 
			out.print(responseText);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	public String Gen_JSON_Appendix_Product(HttpServletRequest request, HttpServletResponse response) throws Exception { // mortality_Tli
		
		try
		{
			JSONImplementControlDataUW cr = new JSONImplementControlDataUW();
			cr.genJSON_UW(new String [] {"P"});
			cr.genJSON_UW(new String [] {"A"});
				
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		
		return "";
	}
	public String Gen_JSON_Appendix_All(HttpServletRequest request, HttpServletResponse response) throws Exception { // mortality_Tli
		
		try
		{
			JSONImplementControlDataUW cr = new JSONImplementControlDataUW();
			cr.genJSON_UW(new String [] {"A"});
				
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		
		return "";
	}
	public String Gen_JSON_Policy_Status(HttpServletRequest request, HttpServletResponse response) throws Exception { // mortality_Tli
		
		try
		{
			JSONImplementControlDataUW cr = new JSONImplementControlDataUW();
			cr.genJSON_UW(new String [] {"T"});
				
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		
		return "";
	}
public String Gen_JSON_MedExam(HttpServletRequest request, HttpServletResponse response) throws Exception { // mortality_Tli
		
		try
		{
			JSONImplementControlDataUW cr = new JSONImplementControlDataUW();
			cr.genJSON_UW(new String [] {"M"});
				
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		
		return "";
	}
public String Gen_JSON_MedExamG(HttpServletRequest request, HttpServletResponse response) throws Exception { // mortality_Tli
		
		try
		{
			JSONImplementControlDataUW cr = new JSONImplementControlDataUW();
			cr.genJSON_UW(new String [] {"M"});
			cr.genJSON_UW(new String [] {"G"});
				
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		
		return "";
	}
public String Gen_JSON_Appendix_Sum_Accum(HttpServletRequest request, HttpServletResponse response) throws Exception { // mortality_Tli
	
	try
	{
		JSONImplementControlDataUW cr = new JSONImplementControlDataUW();
		cr.genJSON_UW(new String [] {"C"});
			
	}
	catch(Exception e)
	{
		e.printStackTrace();
	}
	
	return "";
}
	private Timestamp getCurrentTimestamp() throws Exception {
		return PDFFnc.currentTimeStamp();
	}
}
