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
import service.fnc.ConstantValues;
import service.product.AcctCoverageCatData;
@WebServlet("/Center_Servlet")
public class Center_Servlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private String userId;
	String responseText = "";
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Center_Servlet() {
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
		//doGet(request, response);

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
					if (request.getParameter("method").equals("get_Acct_Lv3")) {
						responseText = get_Acct_Lv3(request, response);
					}
					json = responseText;
					System.out.println("Lookup//"+responseText);
					out.print(json);
				} catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
	}
	public String get_Acct_Lv3(HttpServletRequest request, HttpServletResponse response) throws Exception 
	{
		try {
			String cat_id = request.getParameter("cat_id");
			AcctCoverageCatData acc = new AcctCoverageCatData();
			ArrayList<Acct_coverage_cat> arr_acc = acc.searchByCovCatTd(cat_id);
			String [] acc_value ;
			JSONArray	arr_jsonacc  = new JSONArray();

			if (arr_acc.size() != 0) {
				acc_value =  new String[arr_acc.size()];
				for (int i = 0; i < arr_acc.size(); i++) {
					JSONObject json_acc = new JSONObject();
					json_acc.put("value", arr_acc.get(i).getAcct_product_sub_group());
					arr_jsonacc.put(json_acc);
				}
			}
			JSONObject responsejson = new JSONObject();
		       responsejson.put("acct_coverage", arr_jsonacc);
				//
		       responseText = responsejson.toString();
		} catch (Exception e) {
			e.printStackTrace();
		}
	return responseText;
	}
}
