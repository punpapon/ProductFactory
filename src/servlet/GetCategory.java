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

import layout.bean.productfac.appconfig.Coverage_select_page;
import layout.bean.productfac.appconfig.Product_select_page;
import layout.bean.productfac.view.View_category;
import service.center.DataValuesSeparate;
import service.center.MainInsurance;
import service.product.ProductDetract;

/**
 * Servlet implementation class GetCategory
 */
@WebServlet("/GetCategory")
public class GetCategory extends HttpServlet {
	private static final long serialVersionUID = 1L;
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetCategory() {
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
		processRequest(request, response);		
	}	
	
	protected void processRequest(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		try {
			System.out.println("===============Get Type==============");
			// session = request.getSession();
			response.setCharacterEncoding("UTF-8");
			response.setContentType("application/json");
			PrintWriter out = response.getWriter();
			String responseText = "";
			String json = "";
			String method = request.getParameter("method");
			JSONObject responsejson = new JSONObject();
				if (method.equals("GetTypeCategoryBasePlan")) {
					String cov_code = request.getParameter("cov_code");
					MainInsurance mi = new MainInsurance ();
					String type = "";
					ArrayList<View_category> Listcategorys  = mi.searchCategory(cov_code);
					JSONArray jsonarr_appPage 				= new JSONArray();
				 //////////////////////Get Tab	
					DataValuesSeparate dvs = new DataValuesSeparate();
					ArrayList<Coverage_select_page> listappPage = dvs.searchAppPageBasePlan(cov_code);
					for (int i = 0; i < listappPage.size(); i++) {
						JSONObject json_pappPage = new JSONObject();
						json_pappPage.put("tab", listappPage.get(i).getPage_seq());
						jsonarr_appPage.put(json_pappPage);
					}
					//////////////////Get type 
					if (Listcategorys.size() > 0 ) {
						if (Listcategorys.get(0).getCat_code2().equals("OR")) {
							type = "OL";
						}else if (Listcategorys.get(0).getCat_code2().equals("CL")) {
							type = "CL";
						}
					}
					JSONArray type_jsonArray = new JSONArray();
					JSONObject json_type = new JSONObject();
					
					json_type.put("type", type);
					json_type.put("page", jsonarr_appPage);
					type_jsonArray.put(json_type);
					responsejson.put("TypeCategory", type_jsonArray);
					//
					responseText = responsejson.toString();
				}else if (method.equals("GetTypeCategoryRider")) {
					String cov_code = request.getParameter("cov_code");
					MainInsurance mi = new MainInsurance ();
					String type = "";
					ArrayList<View_category> Listcategorys  = mi.searchCategory(cov_code);
					JSONArray jsonarr_appPage 				= new JSONArray();
				 //////////////////////Get Tab	
					DataValuesSeparate dvs = new DataValuesSeparate();
					ArrayList<Coverage_select_page> listappPage = dvs.searchAppPageBasePlan(cov_code);
					for (int i = 0; i < listappPage.size(); i++) {
						JSONObject json_pappPage = new JSONObject();
						json_pappPage.put("tab", listappPage.get(i).getPage_seq());
						jsonarr_appPage.put(json_pappPage);
					}
					//////////////////Get type 
					if (Listcategorys.size() > 0 ) {
						if (Listcategorys.get(0).getCat_code1().equals("RO")) {
							type = "OL";
						}else if (Listcategorys.get(0).getCat_code1().equals("RC")) {
							type = "CL";
						}
					}
					JSONArray type_jsonArray = new JSONArray();
					JSONObject json_type = new JSONObject();
					
					json_type.put("type", type);
					json_type.put("page", jsonarr_appPage);
					type_jsonArray.put(json_type);
					responsejson.put("TypeCategory", type_jsonArray);
					//
					responseText = responsejson.toString();
				}else if (method.equals("GetTypeCategoryProduct")) {
					String prd_code = request.getParameter("prd_code");
					MainInsurance mi = new MainInsurance ();
					String type = "";
					ArrayList<View_category> Listcategorys  = mi.searchCategoryProduct(prd_code);
					JSONArray jsonarr_appPage 				= new JSONArray();
				 //////////////////////Get Tab	
					DataValuesSeparate dvs = new DataValuesSeparate();
					ArrayList<Product_select_page> listappPage = dvs.searchAppPageproduct(prd_code);
					for (int i = 0; i < listappPage.size(); i++) {
						JSONObject json_pappPage = new JSONObject();
						json_pappPage.put("tab", listappPage.get(i).getPage_seq());
						jsonarr_appPage.put(json_pappPage);
					}
					//////////////////Get type 
					if (Listcategorys.size() > 0 ) {
						if (Listcategorys.get(0).getCat_id1() == 1) {
							type = "OL";
						}else if (Listcategorys.get(0).getCat_id1() == 2) {
							type = "CL";
						}else if(Listcategorys.get(0).getCat_id1() == 3) {
							type = "PR";
						}
					}
					
					JSONArray type_jsonArray = new JSONArray();
					JSONObject json_type = new JSONObject();
					
					json_type.put("type", type);
					json_type.put("page", jsonarr_appPage);
					type_jsonArray.put(json_type);
					responsejson.put("TypeCategory", type_jsonArray);
					//
					responseText = responsejson.toString();
				}
				
				json = responseText;
				System.out.println("GetType//" + json);
				out.print(json);
		}catch (Exception e) {
				// TODO: handle exception
			e.printStackTrace();
			}
		}
}
