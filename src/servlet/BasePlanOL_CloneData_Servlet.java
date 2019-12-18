package servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.JSONObject;

import layout.bean.productfac.coverage.Coverage;
import service.center.ProductCloneData;
import service.clone.BenefitClone;
import service.clone.CloneCoverageAgeCalcMeth;
import service.clone.CloneCoverageBenefitPage;
import service.clone.CloneCoverageBenefitPeriod;
import service.clone.CloneCoverageBenefitPeriodDet;
import service.clone.CloneCoverageFileUpload;
import service.clone.CloneCoverageFilingChannel;
import service.clone.CloneCoverageMode;
import service.clone.CloneCoverageNonforfProvision;
import service.clone.CloneCoverageNote;
import service.clone.CloneCoverageParticipant;
import service.clone.CloneCoveragePremAssumpRate;
import service.clone.CloneCoveragePremiumPeriod;
import service.fnc.ConstantValues;

/**
 * Servlet implementation class BasePlanCL_CloneData_Servlet
 */
@WebServlet("/BasePlanOL_CloneData_Servlet/Clone")
public class BasePlanOL_CloneData_Servlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private String userId;
    /**
     * @see HttpServlet#HttpServlet()
     */
    public BasePlanOL_CloneData_Servlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
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
		Exception ex = null;
		try {
			HttpSession session = request.getSession();
			ConstantValues.USER_CODE = session.getAttribute("userID").toString();
			String getuserID = session.getAttribute("userID").toString();
			if (!getuserID.equals("")) {
				userId =  getuserID ;
			}else {
				System.out.println("================== NO USER ====================");
			}
			ConstantValues.PRODUCT_TYPE = "CL";
			response.setCharacterEncoding("UTF-8");
			response.setContentType("application/json");
			PrintWriter out 		= response.getWriter();
			String responseText		= "";
			String json 			= "";
			JSONObject responsejson = new JSONObject();
			
			String method 			= request.getParameter("method");
			//if(method.equals("Clone")) {
				String cov_code 						= request.getParameter("cov_code");
				Coverage coverage = new Coverage();
				
				/****Tab basic****/
				//Coverage
				ProductCloneData productCloneData 	= new ProductCloneData();
				coverage = productCloneData.cloneCoverage(cov_code);
				System.out.println("Clone:"+cov_code+"|"+"New:"+coverage.getCov_code());
				//Mode
				CloneCoverageMode cloneCoverageMode = new CloneCoverageMode();
				cloneCoverageMode.cloneCoverageMode(cov_code, coverage.getCov_code());
				//FilingChannel
				CloneCoverageFilingChannel cloneCoverageFilingChannel = new CloneCoverageFilingChannel();
				cloneCoverageFilingChannel.cloneCoverageFilingChannel(cov_code, coverage.getCov_code());
				//Participant
				CloneCoverageParticipant cloneCoverageParticipant = new CloneCoverageParticipant();
				cloneCoverageParticipant.cloneCoverageParticipant(cov_code, coverage.getCov_code());
				//AgeCalMeth
				CloneCoverageAgeCalcMeth cloneCoverageAgeCalcMeth = new CloneCoverageAgeCalcMeth();
				cloneCoverageAgeCalcMeth.cloneCoverageAgeCalcMeth(cov_code, coverage.getCov_code());
				//PremiumPeriod
				CloneCoveragePremiumPeriod cloneCoveragePremiumPeriod = new CloneCoveragePremiumPeriod();
				cloneCoveragePremiumPeriod.cloneCoveragePremiumPeriod(cov_code, coverage.getCov_code());
				//PremAssumpRate 
				CloneCoveragePremAssumpRate cloneCoveragePremAssumpRate = new CloneCoveragePremAssumpRate();
				cloneCoveragePremAssumpRate.cloneCoveragePremAssumpRate(cov_code, coverage.getCov_code());
				//BenefitPeriod
				CloneCoverageBenefitPeriod cloneCoverageBenefitPeriod = new CloneCoverageBenefitPeriod();
				cloneCoverageBenefitPeriod.cloneCoverageBenefitPeriod(cov_code, coverage.getCov_code());
				//BenefitPeriodDet
				CloneCoverageBenefitPeriodDet cloneCoverageBenefitPeriodDet = new CloneCoverageBenefitPeriodDet();
				cloneCoverageBenefitPeriodDet.cloneCoverageBenefitPeriodDet(cov_code, coverage.getCov_code());
				//Note
				CloneCoverageNote cloneCoverageNote = new CloneCoverageNote();
				cloneCoverageNote.cloneCoverageMode(cov_code, coverage.getCov_code());
				
				/****Tab Policy*****/
				/*ClonePolicyWording clonePolicyWording = new ClonePolicyWording();
				clonePolicyWording.clonePolicyWording(cov_code, coverage.getCov_code());*/
				
				/****Tab useRight*****/
				CloneCoverageNonforfProvision cloneCoverageNonforfProvision = new CloneCoverageNonforfProvision();
				cloneCoverageNonforfProvision.cloneCoverageNonforfProvision(cov_code, coverage.getCov_code());
				
				
				//File
				CloneCoverageFileUpload cf = new CloneCoverageFileUpload();
				cf.cloneCoverageRatelayout(cov_code, coverage.getCov_code());
				
				/****Tab Benefit*****/
				//Benefit Page
				CloneCoverageBenefitPage cloneCoverageBenefitPage = new CloneCoverageBenefitPage();
				cloneCoverageBenefitPage.cloneCoverageBenefitPage(cov_code, coverage.getCov_code());
				//Benefit
				BenefitClone benefitClone = new BenefitClone();
				benefitClone.clondBenefit(cov_code, coverage.getCov_code());
				
				String passInsurance = coverage.getCov_code();
				ConstantValues.COV_CODE = passInsurance;
				
				JSONObject new_cov_code = new JSONObject();
				new_cov_code.put("new_cov_code",coverage.getCov_code());
				responsejson.put("new_covCode",new_cov_code);
				//
				responseText = responsejson.toString();
			//}
			json = responseText;
			System.out.println("Clone >>> "+json);
			out.print(json);
		}catch (Exception e) {
			e.printStackTrace();
		}
	}
}
