package servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Timestamp;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import layout.bean.productfac.product.Product;
import layout.bean.productfac.workflow.Product_request;
import layout.bean.productfac.workflow.Product_task;
import service.center.JSONImplement;
import service.ctrl.ProductData;
import service.ctrl.WorkflowProductControlData;
import service.fnc.ConstantValues;
import service.fnc.PDFFnc;

/**
 * Servlet implementation class Center_GenJSON_Product_Servlet
 */
@WebServlet("/Center_GenJSON_Product_Servlet")
public class Center_GenJSON_Product_Servlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private String userId;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public Center_GenJSON_Product_Servlet() {
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

			if (request.getParameter("method").equals("GenJsonProduct")) {
				responseText = GenJsonProduct(request, response);
			} 
			out.print(responseText);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	public String GenJsonProduct(HttpServletRequest request, HttpServletResponse response) throws Exception { // mortality_Tli
		
		String explainStatusGenJSON="";
		try {
			String Prd_code 		= request.getParameter("Prd_code")		==null?"":request.getParameter("Prd_code");
			String Cov_code 		= request.getParameter("Cov_code")		==null?"":request.getParameter("Cov_code");
			String Appendix_code 	= request.getParameter("Appendix_code")	==null?"":request.getParameter("Appendix_code");
			String[] str_para		=new String[] {};
			
			System.out.println("--------1--------/"+Prd_code);
			System.out.println("--------2--------/"+Cov_code);
			System.out.println("--------3--------/"+Appendix_code);

			str_para = new String[] {Prd_code,Cov_code,Appendix_code};
			
			System.out.println("============/"+str_para.length);
			
			//USE FNC FROM NARA ADMIN
			
			Boolean isAllApprove = false;
			
			ConstantValues.PRD_CODE =Prd_code;
			
//			WorkflowProductControlData cont = new WorkflowProductControlData();
//			ArrayList<Product_task> tasks = cont.searchProductTask();
//			for(Product_task task : tasks ) {
//				if(task.getApprove_status().compareTo("APPROVED")==0) {
//					isAllApprove=true;
//				}else {
//					isAllApprove=false;
//				}
//			}
//			ArrayList<Product_request> reqs = cont.searchProductRequest();
//			for(Product_request req : reqs ) {
//				if(req.getRequest_status().compareTo("APPROVE")==0) {
//					isAllApprove=true;
//				}else {
//					isAllApprove=false;
//				}
//			}
			ProductData pd = new ProductData();
			Product prd = pd.searchProduct(Prd_code);
			
				if(prd.getStatus().compareTo("APPROVED")==0) {
					isAllApprove=true;
				}else {
					isAllApprove=false;
				}
				
				
			JSONImplement jsonSer = new JSONImplement();
			
			if(isAllApprove) {
				jsonSer.genJSON(str_para);
				explainStatusGenJSON="JSON Product was Generated";
			}else {
				explainStatusGenJSON="";
			}
			
			
		} catch (Exception e) {
			e.printStackTrace();
			// TODO: handle exception
		}
		
		
		

		return explainStatusGenJSON;
	}
	private Timestamp getCurrentTimestamp() throws Exception {
		return PDFFnc.currentTimeStamp();
	}
}
