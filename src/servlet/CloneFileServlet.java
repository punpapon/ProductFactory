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

import org.json.JSONArray;
import org.json.JSONObject;

import layout.bean.productfac.product.Acct_coverage_cat;
import service.clone.CloneProductFileUpload;
import service.fnc.ConstantValues;
import service.product.AcctCoverageCatData;

/**
 * Servlet implementation class CloneFileServlet
 */
@WebServlet("/CloneFileServlet")
public class CloneFileServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private String userId;
	String responseText = "";
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CloneFileServlet() {
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
			doGet(request, response);
			//======================================================
			HttpSession session = request.getSession();
			String getuserID = session.getAttribute("userID").toString();
			if (!getuserID.equals("")) {
				userId =  getuserID ;
			}else {
				//System.out.println("================== NO USER ====================");
			}
			String json = "";
			response.setCharacterEncoding("UTF-8");
			response.setContentType("application/json");
			PrintWriter out = response.getWriter();
			
			System.out.println("======= Center_Servlet ======"); 
			 String passInsurance 	= request.getParameter("passInsurance");
			 ConstantValues.COV_CODE = passInsurance;
			try {
				if (request.getParameter("method").equals("setCloneFile")) {
					responseText = setCloneFile(request, response);
				}
				json = responseText;
				System.out.println("Lookup//"+responseText);
				out.print(json);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	}
	public String setCloneFile(HttpServletRequest request, HttpServletResponse response) throws Exception 
	{
	try {
		String prd_code = request.getParameter("prd_code");
		String new_prd_code = request.getParameter("new_prd_code");
		
		System.out.println("----------------prd_code---------------/"+prd_code);
		System.out.println("--------------new_prd_code-------------/"+new_prd_code);
		CloneProductFileUpload cf = new CloneProductFileUpload ();
		cf.cloneProductRatelayout(prd_code, new_prd_code);
		
	} catch (Exception e) {
		e.printStackTrace();
	}
	return null;
	}

}
