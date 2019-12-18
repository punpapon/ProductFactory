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

import service.CloneWorkflowCoverageTask;
import service.CloneWorkflowProductTask;
import service.fnc.ConstantValues;

/**
 * Servlet implementation class CloneServlet
 */
@WebServlet("/CloneServlet")
public class CloneServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private String userId; 
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CloneServlet() {
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
		processRequest(request, response);
	}
	protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
		try {
			System.out.println("===============CloneServlet==============");
			HttpSession session = request.getSession();
			String getuserID = session.getAttribute("userID").toString();
			if (!getuserID.equals("")) {
				userId =  getuserID ;
			}
			response.setCharacterEncoding("UTF-8");
			response.setContentType("application/json");
			PrintWriter out 	= response.getWriter();
			String responseText	= "";
			String json 		= "";
			String method 		= request.getParameter("method");
			if (method.equals("setstatusProductTask")) {
				String prd_code_Clone	=	request.getParameter("prd_code_Clone");
				ConstantValues.PRD_CODE	= 	prd_code_Clone;
				String groupName		=	request.getParameter("groupName");
				new CloneWorkflowProductTask().insertWorkflowProductTask(prd_code_Clone,groupName, userId);
			}else if(method.equals("setstatusCoverageTask")) {
				String cov_code_Clone	=	request.getParameter("cov_code_Clone");
				ConstantValues.COV_CODE	= 	cov_code_Clone;
				String groupName		=	request.getParameter("groupName");
				new CloneWorkflowCoverageTask().insertWorkflowCoverageTask(cov_code_Clone,groupName, userId);
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
}
