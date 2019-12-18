package servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.math.BigDecimal;
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
import layout.bean.productfac.underwrite.Med_exam;
import layout.bean.productfac.underwrite.Med_exam_rate;
import service.center.EMailImplement;
import service.center.JSONImplement;
import service.ctrl.ProductData;
import service.fnc.ConstantValues;
import service.fnc.PDFFnc;
import service.product.ctrl.ProductControlData;
import service.underwrite.ctrl.MainUnderWriteSaveDateService;
import service.underwrite.ctrl.MainUnderWriteService;


@WebServlet("/UW_Email_Servlet")
public class UW_Email_Servlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private String userId;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public UW_Email_Servlet() {
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

			if (request.getParameter("method").equals("send_Email")) {
				responseText = sand_Email(request, response);
			} else if (request.getParameter("method").equals("send_Email_Only_Product")) {
				responseText = send_Email_Only_Product(request, response);
			} 
			out.print(responseText);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	public String send_Email_Only_Product(HttpServletRequest request, HttpServletResponse response) throws Exception { // mortality_Tli
		String email_str = request.getParameter("prepareEmail_data");
		String OptionEmail = request.getParameter("OptionEmail");
		JSONArray jsonArr_email = new JSONArray(email_str);
		String[] str_mail=new String[] {};
		Object[] strOb_mail=new Object[] {};
		String allApprove = "0";
		ArrayList<Object> listObject = new ArrayList<>();
		
		
		
		
		
		for (int i = 0; i < jsonArr_email.length(); i++) {
			
			JSONObject jsonObj_mail = jsonArr_email.getJSONObject(i);
			
			//FIND CURRENT DATE
			Timestamp ts = new Timestamp(System.currentTimeMillis());
			Date date = new Date(ts.getTime());
			Calendar c = Calendar.getInstance();
			c.setTime(date);
			c.add(Calendar.YEAR, 543);
			java.util.Date newDate = c.getTime();
			java.sql.Date sqlDate = new java.sql.Date(newDate.getTime());
			String pattern = "yyyy-MM-dd HH:mm";
			SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
			String current_date = simpleDateFormat.format(sqlDate);
			
			if (OptionEmail.toString().compareTo("1")==0) {
				
				//DEFINE PARA FOR EMAIL OPTION 2
				//SET HEADER
				String option 		=OptionEmail;
				String status		=jsonObj_mail.getString("requestApprove")==null?"":jsonObj_mail.getString("requestApprove");
				String menuName		=jsonObj_mail.getString("manuName")==null?"":jsonObj_mail.getString("manuName");
				//String menuNameEng	=jsonObj_mail.getString("manuNameEng")==null?"":jsonObj_mail.getString("manuNameEng");
				String topic 		=status+" "+menuName;
				
				//SET DETAIL
				String Detail1		=jsonObj_mail.getString("cov_code");
				String Detail2		=jsonObj_mail.getString("name_TH");
				String Detail3		=jsonObj_mail.getString("name_EN");
				
				//FOOTER
				String empNameHide		=jsonObj_mail.getString("empNameHide");
				String empID			=jsonObj_mail.getString("empID");
				String departmentHide	=jsonObj_mail.getString("departmentHide")==null?"ไม่ได้ระบุแผนก":jsonObj_mail.getString("departmentHide");
				String departmentID  	=jsonObj_mail.getString("departmentID")==null?"ไม่ได้ระบุรหัสแผนก":jsonObj_mail.getString("departmentID");
				String concatDep		=departmentHide+" ("+departmentID+")";
				String concatDate		=current_date+" น.";
				
				String empFirstNameHide		=empNameHide.substring(0, empNameHide.indexOf(" "));
				String empLastNameHide		=empNameHide.substring(empNameHide.indexOf(" "), empNameHide.length());

				//ADD STRING ARRAY
//				str_mail = new String[] {option,menuName,Detail1,status
//						,menuName,Detail1,Detail2,Detail3
//						,empFirstNameHide,empLastNameHide,departmentHide,departmentID
//						,concatDate};
				str_mail = new String[] {option,status,menuName,Detail1
						,Detail2,Detail3
						,empFirstNameHide,empLastNameHide,departmentHide,departmentID
						,concatDate};
				
				
					ProductData pd = new ProductData();
					Product prd = pd.searchProduct(Detail1);
					if(prd==null?false:prd.getStatus()==null?false:true) {
						if(prd.getStatus().compareTo("APPROVED")==0)
							allApprove = "1";
					}
				
				
				
				listObject.add(empID);
				listObject.add(str_mail);
				listObject.add(allApprove);

			}
		}

		//USE FNC FROM NARA ADMIN
		EMailImplement mailSer = new EMailImplement();
		if(OptionEmail.toString().compareTo("4")==0) {
			//mailSer.sendEmail(str_mail2);
		}else {
			mailSer.sendEmail(listObject);
		}
		

		return "";
	}
	public String sand_Email(HttpServletRequest request, HttpServletResponse response) throws Exception { // mortality_Tli
		String email_str = request.getParameter("prepareEmail_data");
		String OptionEmail = request.getParameter("OptionEmail");
		JSONArray jsonArr_email = new JSONArray(email_str);
		String[] str_mail=new String[] {};
		Object[] strOb_mail=new Object[] {};
		String allApprove = "0";
		ArrayList<Object> listObject = new ArrayList<>();
		
		
		
		
		
		for (int i = 0; i < jsonArr_email.length(); i++) {
			
			JSONObject jsonObj_mail = jsonArr_email.getJSONObject(i);
			
			//FIND CURRENT DATE
			Timestamp ts = new Timestamp(System.currentTimeMillis());
			Date date = new Date(ts.getTime());
			Calendar c = Calendar.getInstance();
			c.setTime(date);
			c.add(Calendar.YEAR, 543);
			java.util.Date newDate = c.getTime();
			java.sql.Date sqlDate = new java.sql.Date(newDate.getTime());
			String pattern = "yyyy-MM-dd HH:mm";
			SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
			String current_date = simpleDateFormat.format(sqlDate);
			
			if (OptionEmail.toString().compareTo("1")==0) {
				
				//DEFINE PARA FOR EMAIL OPTION 2
				//SET HEADER
				String option 		=OptionEmail;
				String status		=jsonObj_mail.getString("requestApprove")==null?"":jsonObj_mail.getString("requestApprove");
				String menuName		=jsonObj_mail.getString("manuName")==null?"":jsonObj_mail.getString("manuName");
				//String menuNameEng	=jsonObj_mail.getString("manuNameEng")==null?"":jsonObj_mail.getString("manuNameEng");
				String topic 		=status+" "+menuName;
				
				//SET DETAIL
				String Detail1		=jsonObj_mail.getString("cov_code");
				String Detail2		=jsonObj_mail.getString("name_TH");
				String Detail3		=jsonObj_mail.getString("name_EN");
				
				//FOOTER
				String empNameHide		=jsonObj_mail.getString("empNameHide");
				String empID			=jsonObj_mail.getString("empID");
				String departmentHide	=jsonObj_mail.getString("departmentHide")==null?"ไม่ได้ระบุแผนก":jsonObj_mail.getString("departmentHide");
				String departmentID  	=jsonObj_mail.getString("departmentID")==null?"ไม่ได้ระบุรหัสแผนก":jsonObj_mail.getString("departmentID");
				String concatDep		=departmentHide+" ("+departmentID+")";
				String concatDate		=current_date+" น.";
				
				String empFirstNameHide		=empNameHide.substring(0, empNameHide.indexOf(" "));
				String empLastNameHide		=empNameHide.substring(empNameHide.indexOf(" "), empNameHide.length());

				//ADD STRING ARRAY
//				str_mail = new String[] {option,menuName,Detail1,status
//						,menuName,Detail1,Detail2,Detail3
//						,empFirstNameHide,empLastNameHide,departmentHide,departmentID
//						,concatDate};
				str_mail = new String[] {option,status,menuName,Detail1
						,Detail2,Detail3
						,empFirstNameHide,empLastNameHide,departmentHide,departmentID
						,concatDate};
				
				
				listObject.add(empID);
				listObject.add(str_mail);
				listObject.add(allApprove);

			}else if (OptionEmail.toString().compareTo("2")==0) {
				
				//DEFINE PARA FOR EMAIL OPTION 2
				//SET HEADER
				String option 		=OptionEmail;
				String status		=jsonObj_mail.getString("requestApprove")==null?"":jsonObj_mail.getString("requestApprove");
				String menuName		=jsonObj_mail.getString("manuName")==null?"":jsonObj_mail.getString("manuName");
				String topic 		=status+" "+menuName;
				
				//SET DETAIL
				String Detail1		=jsonObj_mail.getString("Exam_code");
				String Detail2		=jsonObj_mail.getString("Name_abb");
				String Detail3		=jsonObj_mail.getString("Name_th");
				String Detail4		=jsonObj_mail.getString("Exam_type");
				String Detail5		=jsonObj_mail.getString("Rate_amt");;
				
				//FOOTER
				String empNameHide		=jsonObj_mail.getString("empNameHide");
				String empID			=jsonObj_mail.getString("empID");
				String departmentHide	=jsonObj_mail.getString("departmentHide")==null?"ไม่ได้ระบุแผนก":jsonObj_mail.getString("departmentHide");
				String departmentID  	=jsonObj_mail.getString("departmentID")==null?"ไม่ได้ระบุรหัสแผนก":jsonObj_mail.getString("departmentID");
				String concatDep		=departmentHide+" ("+departmentID+")";
				String concatDate		=current_date+" น.";

				//ADD STRING ARRAY
				str_mail = new String[] {option,topic,menuName,Detail1,Detail2,Detail3
						,Detail4,Detail5,empNameHide,concatDep,concatDate};
				listObject.add(empID);
				listObject.add(str_mail);
				listObject.add(allApprove);
			}else if (OptionEmail.toString().compareTo("3")==0) {
				
				//DEFINE PARA FOR EMAIL OPTION 2
				//SET HEADER
				String option 		=OptionEmail;
				String status		=jsonObj_mail.getString("requestApprove")==null?"":jsonObj_mail.getString("requestApprove");
				String menuName		=jsonObj_mail.getString("manuName")==null?"":jsonObj_mail.getString("manuName");
				String topic 		=status+" "+menuName;
				
				//SET DETAIL
				String Detail1		=jsonObj_mail.getString("appendixValueName");
				String Detail2		=jsonObj_mail.getString("appendixName");
				String Detail3		=jsonObj_mail.getString("Start_date");
				String Detail4		=jsonObj_mail.getString("End_date");
				
				//FOOTER
				String empNameHide		=jsonObj_mail.getString("empNameHide");
				String empID			=jsonObj_mail.getString("empID");
				String departmentHide	=jsonObj_mail.getString("departmentHide")==null?"ไม่ได้ระบุแผนก":jsonObj_mail.getString("departmentHide");
				String departmentID  	=jsonObj_mail.getString("departmentID")==null?"ไม่ได้ระบุรหัสแผนก":jsonObj_mail.getString("departmentID");
				String concatDep		=departmentHide+" ("+departmentID+")";
				String concatDate		=current_date+" น.";

				//ADD STRING ARRAY
				str_mail = new String[] {option,topic,menuName,Detail1,Detail2,Detail3
						,Detail4,empNameHide,concatDep,concatDate};
				listObject.add(empID);
				listObject.add(str_mail);
				listObject.add(allApprove);
			}else if (OptionEmail.toString().compareTo("4")==0) {
				
				//DEFINE PARA FOR EMAIL OPTION 2
				//SET HEADER
				String option 		=OptionEmail;
				String status		=jsonObj_mail.getString("requestApprove")==null?"":jsonObj_mail.getString("requestApprove");
				String menuName		=jsonObj_mail.getString("manuName")==null?"":jsonObj_mail.getString("manuName");
				String topic 		=status+" "+menuName;
				
				//SET DETAIL
				String Detail1		=jsonObj_mail.getString("ori_Appendix_code");
				
				
				String app_pro_str 			= request.getParameter("appendix_productTo_data");
				JSONArray jsonArr_app_pro 	= new JSONArray(app_pro_str);
				int templ = 10+(jsonArr_app_pro.length());
				String[] str_mail2=new String[templ];
				
				
				int k = 0;
				str_mail2[k]=option;
				str_mail2[++k]=topic;
				str_mail2[++k]=menuName;
				str_mail2[++k]=Detail1;
				
				
				for (int ii = 0; ii < jsonArr_app_pro.length(); ii++) {
					
					JSONObject jsonObj_app = jsonArr_app_pro.getJSONObject(ii);
					//str_mail2[++k]="test";
					String Prd_name = "ไม่ได้ระบุ";
					ArrayList<Product>  mp = new ProductControlData().searchProduct(jsonObj_app.getString("Prd_code"));
					for(Product mpp : mp) {
						Prd_name=mpp.getName_th();
					}
					str_mail2[++k]=jsonObj_app.getString("Prd_code")+";"+Prd_name;
					
				}
				
				//FOOTER
				String empNameHide		=jsonObj_mail.getString("empNameHide");
				String empID			=jsonObj_mail.getString("empID");
				String departmentHide	=jsonObj_mail.getString("departmentHide")==null?"ไม่ได้ระบุแผนก":jsonObj_mail.getString("departmentHide");
				String departmentID  	=jsonObj_mail.getString("departmentID")==null?"ไม่ได้ระบุรหัสแผนก":jsonObj_mail.getString("departmentID");
				String concatDep		=departmentHide+" ("+departmentID+")";
				String concatDate		=current_date+" น.";

				//ADD STRING ARRAY
				//str_mail = new String[] {option,topic,menuName,Detail1,Detail2,Detail3
				//		,Detail4,empNameHide,concatDep,concatDate};
				String Detail2		=jsonObj_mail.getString("target_Appendix_code");
				String Detail3		=jsonObj_mail.getString("Start_date");
				String Detail4		=jsonObj_mail.getString("End_date");
				str_mail2[++k]=Detail2;
				str_mail2[++k]=Detail3;
				str_mail2[++k]=Detail4;
				str_mail2[++k]=empNameHide;
				str_mail2[++k]=concatDep;
				str_mail2[++k]=concatDate;
				
				int temp = str_mail2.length;
				
				EMailImplement mailSer2 = new EMailImplement();
				listObject.add(empID);
				listObject.add(str_mail2);
				listObject.add(allApprove);
				mailSer2.sendEmail(listObject);
				

			}else if (OptionEmail.toString().compareTo("5")==0) {
				
				//DEFINE PARA FOR EMAIL OPTION 2
				//SET HEADER
				String option 		=OptionEmail;
				String status		=jsonObj_mail.getString("requestApprove")==null?"":jsonObj_mail.getString("requestApprove");
				String menuName		=jsonObj_mail.getString("manuName")==null?"":jsonObj_mail.getString("manuName");
				String topic 		=status+" "+menuName;
				
				//SET DETAIL
				String Detail1		=jsonObj_mail.getString("appendixValueName");
				String Detail2		=jsonObj_mail.getString("appendixName");
				String Detail3		=jsonObj_mail.getString("Version_name");
				String Detail4		=jsonObj_mail.getString("Start_date");
				String Detail5		=jsonObj_mail.getString("End_date");
				String Detail6		=jsonObj_mail.getString("IC_Yes");
				String Detail7		=jsonObj_mail.getString("IC_No");
				String Detail8		=jsonObj_mail.getString("Sub_Yes");
				String Detail9		=jsonObj_mail.getString("Sub_No");
				String Detail10		=jsonObj_mail.getString("IC_YesStr");
				String Detail11		=jsonObj_mail.getString("IC_NoStr");
				String Detail12		=jsonObj_mail.getString("Sub_YesStr");
				String Detail13		=jsonObj_mail.getString("Sub_NoStr");
				
				
				//FOOTER
				String empNameHide		=jsonObj_mail.getString("empNameHide");
				String empID			=jsonObj_mail.getString("empID");
				String departmentHide	=jsonObj_mail.getString("departmentHide")==null?"ไม่ได้ระบุแผนก":jsonObj_mail.getString("departmentHide");
				String departmentID  	=jsonObj_mail.getString("departmentID")==null?"ไม่ได้ระบุรหัสแผนก":jsonObj_mail.getString("departmentID");
				String concatDep		=departmentHide+" ("+departmentID+")";
				String concatDate		=current_date+" น.";

				//ADD STRING ARRAY
				str_mail = new String[] {option,topic,menuName,Detail1,Detail2,Detail3
						,Detail4,Detail5
						,Detail10,Detail6
						,Detail11,Detail7
						,Detail12,Detail8
						,Detail13,Detail9,empNameHide,concatDep,concatDate};
				listObject.add(empID);
				listObject.add(str_mail);
				listObject.add(allApprove);
			}else if (OptionEmail.toString().compareTo("6")==0) {
				
				//DEFINE PARA FOR EMAIL OPTION 2
				//SET HEADER
				String option 		=OptionEmail;
				String status		=jsonObj_mail.getString("requestApprove")==null?"":jsonObj_mail.getString("requestApprove");
				String menuName		=jsonObj_mail.getString("manuName")==null?"":jsonObj_mail.getString("manuName");
				String topic 		=status+" "+menuName;
				
				//SET DETAIL
				String Detail1		=jsonObj_mail.getString("Cov_cat_name");
				String Detail2		=jsonObj_mail.getString("Policy_code");
				String Detail3		=jsonObj_mail.getString("Policy_name");
				String Detail4		=jsonObj_mail.getString("Is_insure_sum");
				String Detail5		=jsonObj_mail.getString("Is_med_sum");
				String Detail6		=jsonObj_mail.getString("Is_rider_sum");
				String Detail7		=jsonObj_mail.getString("Is_sum_for_rider");
				String Detail8		=Detail4+(Detail4.length()>0?", ":"")
						+""+Detail5+(Detail5.length()>0?", ":"")
						+""+Detail6+(Detail6.length()>0?", ":"")
						+""+Detail7;
				
				
				//FOOTER
				String empNameHide		=jsonObj_mail.getString("empNameHide");
				String empID			=jsonObj_mail.getString("empID");
				String departmentHide	=jsonObj_mail.getString("departmentHide")==null?"ไม่ได้ระบุแผนก":jsonObj_mail.getString("departmentHide");
				String departmentID  	=jsonObj_mail.getString("departmentID")==null?"ไม่ได้ระบุรหัสแผนก":jsonObj_mail.getString("departmentID");
				String concatDep		=departmentHide+" ("+departmentID+")";
				String concatDate		=current_date+" น.";

				//ADD STRING ARRAY
				str_mail = new String[] {option,topic,menuName,Detail1,Detail2,Detail3
						,Detail8,empNameHide,concatDep,concatDate};
				listObject.add(empID);
				listObject.add(str_mail);
				listObject.add(allApprove);
			}
		}

		//USE FNC FROM NARA ADMIN
		EMailImplement mailSer = new EMailImplement();
		if(OptionEmail.toString().compareTo("4")==0) {
			//mailSer.sendEmail(str_mail2);
		}else {
			mailSer.sendEmail(listObject);
		}
		

		return "";
	}
	private Timestamp getCurrentTimestamp() throws Exception {
		return PDFFnc.currentTimeStamp();
	}
}