package servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.math.BigDecimal;
import java.sql.Date;
import java.sql.Timestamp;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.JSONArray;
import org.json.JSONObject;

import layout.bean.productfac.beanset.ParticipantAccessData;
import layout.bean.productfac.coverage.Age_calc_meth;
import layout.bean.productfac.coverage.Benefit_amount;
import layout.bean.productfac.coverage.Benefit_item;
import layout.bean.productfac.coverage.Benefit_period;
import layout.bean.productfac.coverage.Benefit_period_det;
import layout.bean.productfac.coverage.Benefit_sched;
import layout.bean.productfac.coverage.Coverage;
import layout.bean.productfac.coverage.Participant;
import layout.bean.productfac.coverage.Rate_layout;
import layout.bean.productfac.underwrite.Med_exam;
import layout.bean.productfac.underwrite.Med_exam_rate;
import service.BasePlanCL_SaveData_Service;
import service.FreezePolicyValue;
import service.fnc.ConstantValues;
import service.fnc.PDFFnc;
import service.underwrite.ctrl.MainUnderWriteSaveDateService;

@WebServlet("/UW_DeleteData_Servlet")
public class UW_DeleteData_Servlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private String userId;
    
	/**
     * @see HttpServlet#HttpServlet()
     */
    public UW_DeleteData_Servlet() {
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
	protected void doPost(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
//======================================================
		HttpSession session = request.getSession();
		String getuserID = session.getAttribute("userID").toString();
		if (!getuserID.equals("")) {
			userId =  getuserID ;
		}else {
			System.out.println("================== NO USER ====================");
		}
		
		response.setCharacterEncoding("UTF-8");	
		PrintWriter out 	= response.getWriter();
		System.out.println("======= Save BasePlanCL ======"); 
		String responseText = "";
		 String passInsurance 	= request.getParameter("passInsurance");
		 ConstantValues.COV_CODE = passInsurance;
		try {
			if (request.getParameter("method").equals("Tab_MedExam")) {
				responseText = delete_MedExam(request, response);
			}
			out.print(responseText);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public String delete_MedExam(HttpServletRequest request, HttpServletResponse response) throws Exception 
	{	//mortality_Tli
		MainUnderWriteSaveDateService settoService = new MainUnderWriteSaveDateService ();
		String medexam_str = request.getParameter("medexam_data");
	  	JSONArray jsonArr_medexam = new JSONArray(medexam_str);
	  	ArrayList<Med_exam> listmedexam = new ArrayList<>();
	  	ArrayList<String> listmedexamCode = new ArrayList<>();
	  	ArrayList<Med_exam_rate> listmedexamRate = new ArrayList<>();
        for (int i = 0; i < jsonArr_medexam.length(); i++)
        {	
            JSONObject jsonObj_med= jsonArr_medexam.getJSONObject(i);
            Med_exam med = new Med_exam();
            Med_exam_rate medr = new Med_exam_rate();
            if(true)
            {
            	//MEDEXAM
            	med.setExam_code(jsonObj_med.getString("Exam_code"));

            	
            	//MEDEXAMRATE
            	medr.setExam_code(jsonObj_med.getString("Exam_code"));

            	
            	//SET TIME DATE
            	medr.setUpdate_time(getCurrentTimestamp());
            	Timestamp ts=new Timestamp(System.currentTimeMillis());
            	Date date=new Date(ts.getTime());
            	medr.setEff_date(date);
            	String str="9999-12-31";
            	Date date3=Date.valueOf(str);
            	medr.setExp_date(date3);
            	
            }
            listmedexam.add(med);
            listmedexamRate.add(medr);
        }
        
        settoService.deleteMedExamALL(listmedexam,listmedexamRate);
		return "Test Save ";
	}
	
	
	
	private Date getData(String date)  throws Exception
	{
		return PDFFnc.getSqlDate(PDFFnc.changeToYYYYMMDD(date));
	}
	
	private Timestamp getCurrentTimestamp() throws Exception
	{
		return PDFFnc.currentTimeStamp();
	}
	
	private BigDecimal covertStringtoBigDecimal(String in) {
		in = new java.math.BigDecimal(in).stripTrailingZeros().toPlainString();
		BigDecimal bigDecimalCurrency = null;
		in = in.trim();
		if(!in.equalsIgnoreCase("NULL")) {
			bigDecimalCurrency = new BigDecimal(in);
		}else {
			bigDecimalCurrency = new BigDecimal(0);
		}
		return bigDecimalCurrency;
	}
}

