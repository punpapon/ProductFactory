package servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONObject;

import utility.productfac.UserAuthen;






@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet{

	private static final long serialVersionUID = 1L;
	
	String name 		= "";
    String departmentID	= "";
    String department 	= "";
    String positionID 	= "";
    String position 	= "";
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//doGet(request, response);
		processRequest(request, response);
	}
	
	protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
		try {
			System.out.println("===============Get Status Login==============");
			// session = request.getSession();
			response.setCharacterEncoding("UTF-8");
			response.setContentType("application/json");
			PrintWriter out 	= response.getWriter();
			String responseText = "";
			String json 		= "";
			String method 		= request.getParameter("method");
			String userID		= request.getParameter("userID");
			String departmentID	= request.getParameter("departmentID");
			
			System.out.println("-------------userID-------------------/"+userID);
			System.out.println("------------departmentID--------------/"+departmentID);
			
			JSONObject responsejson = new JSONObject();
				if (method.equals("getUser_Permission")) {
					
					String[] user_Permission = new UserAuthen().userPermission(userID, departmentID);
					if (user_Permission.length > 0) {
						JSONArray type_Permission = new JSONArray();
						JSONObject json_Permission = new JSONObject();
						json_Permission.put("create", user_Permission[0].toString());
						json_Permission.put("download", user_Permission[1].toString());
						json_Permission.put("edit", user_Permission[2].toString());
						json_Permission.put("edit_all", user_Permission[3].toString());
						json_Permission.put("approve", user_Permission[4].toString());
						json_Permission.put("group_name", user_Permission[5].toString());
						type_Permission.put(json_Permission);
						responsejson.put("User_Permission", type_Permission);
					}else {
					responsejson.put("User_Permission", new JSONArray());
					}
				}
				responseText = responsejson.toString();
				json = responseText;
				System.out.println("GetType//" + json);
				out.print(json);
		}catch (Exception e) {
				// TODO: handle exception
			e.printStackTrace();
			}
		}
}
