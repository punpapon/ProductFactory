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

import layout.bean.productfac.beanset.CoverageCatAccessData;
import layout.bean.productfac.beanset.CoverageCovCat;
import layout.bean.productfac.beanset.CoverageMainCovCat;
import layout.bean.productfac.beanset.DistchannelAccessData;
import layout.bean.productfac.beanset.FilingChannelAccessData;
import layout.bean.productfac.beanset.FormulaCatAccesData;
import layout.bean.productfac.beanset.LookupCatAccessData;
import layout.bean.productfac.beanset.RateCatAccessData;
import layout.bean.productfac.beanset.RateLayoutAccessData;
import layout.bean.productfac.beanset.SalesChannelAccessData;
import layout.bean.productfac.coverage.Coverage;
import layout.bean.productfac.lookup.Rate_sub_cat;
import layout.bean.productfac.product.Product;
import service.MainInsureDetailCreateProductService;
import service.MainInsureTypeService;
import service.center.LookupCatData;
import service.center.MainInsureDetailCreateProduct;
import service.center.ProductCreate;
import service.ctrl.ProductData;
import service.product.DistChanelData;
import service.product.ProductBasicinfo;
import service.product.SalesChannelData;
import utility.adc.ServiceForProductFactory;

@WebServlet("/UW_Data_Default_Servlet")
public class UW_Data_Default_Servlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private String userId; 
	private ProductCreate  ProductCreate  ;
	private Product po  ;
    /**
     * @see HttpServlet#HttpServlet()
     */
    public UW_Data_Default_Servlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at:").append(request.getContextPath());
		//processRequest(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//doGet(request, response);
		processRequest(request, response);
	}
	
	protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
		try {
			System.out.println("===============ProductCL_Data_default_Servlet==============");
			HttpSession session = request.getSession();
			String getuserID = session.getAttribute("userID").toString();
			if (!getuserID.equals("")) {
				userId =  getuserID ;
			}else {
				System.out.println("================== NO USER ====================");
			}
			// session = request.getSession();
			response.setCharacterEncoding("UTF-8");
			response.setContentType("application/json");
			PrintWriter out 	= response.getWriter();
			String responseText	= "";
			String json 		= "";
			String plan_type 	= "B";
			String method 		= request.getParameter("method");
			String type_id		= request.getParameter("type");
			String type_lv1		= request.getParameter("type_lv1");
			String type_lv2		= request.getParameter("type_lv2");
			JSONObject responsejson = new JSONObject();
			//GetBasePlanCL
			
			
			if(method.equals("getAllLookUp")) {     
				System.out.println("=============getAllLookUp");
				String menu_CL_1 		= request.getParameter("menu_CL_1");
				String main_contracttype 	= request.getParameter("main_contracttype");
					
				MainInsureDetailCreateProductService mdcs = new MainInsureDetailCreateProductService ();
				//LookupCatData datareturn_LookupCat2 = new LookupCatData.seasearchLookupCat();
				int tabmaim = 1;
				 ArrayList<LookupCatAccessData> datareturn_LookupCat;
				 //ArrayList<LookupCatAccessData> datareturn_LookupCat2;
				 
				 //datareturn_LookupCat = mdcs.BasicInfo_lookup(tabmaim);
				 
				 ArrayList<LookupCatAccessData> datareturn_LookupCat2;
				 LookupCatData lookkk = new LookupCatData();
				 datareturn_LookupCat = lookkk.searchLookupCat();
				//Tab ข้อมูลทั่วไป Basic Information
				if (true) {
					String passInsurance = "";
					
					
					//ประเภทการตรวจเลือด
					JSONArray	exam_type_jsonArray	= new JSONArray();
					//*เงื่อนไชการตรวจกรมธรรม์ย้อนหลัง เช่น 12เดือน 24 เดือน
					JSONArray	sumpolicy_jsonArray	= new JSONArray();
					
					System.out.println("=============getAllLookUp"+datareturn_LookupCat.size());
					for (int i = 0 ; i < datareturn_LookupCat.size(); i++) {
						//ประเภทการตรวจเลือด
						if (datareturn_LookupCat.get(i).getLookupCat().getEnum_name().equals("lu_exam_type")) {
						
							for (int ii = 0; ii < datareturn_LookupCat.get(i).getListLookupValue().size(); ii++) {
								JSONObject json_ob = new JSONObject();
								json_ob.put("pass",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getEnum_value());
								json_ob.put("text",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getEnum_value());
								exam_type_jsonArray.put(json_ob);
							}	
						}
						if (datareturn_LookupCat.get(i).getLookupCat().getEnum_name().equals("lu_sum_policy")) {
							//*Loan Type
							for (int ii = 0; ii < datareturn_LookupCat.get(i).getListLookupValue().size(); ii++) {
								JSONObject json_sumpolicy_Type = new JSONObject();
								json_sumpolicy_Type.put("pass",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getSystem_code());
								json_sumpolicy_Type.put("text",  datareturn_LookupCat.get(i).getListLookupValue().get(ii).getEnum_value());
								sumpolicy_jsonArray.put(json_sumpolicy_Type);
							}
						}
						
						
					}
					
					JSONArray  basic_Info_jsonArray	= new JSONArray();
					JSONObject json_basic_Info = new JSONObject();
					
					json_basic_Info.put("exam_type_lookup",exam_type_jsonArray);
					json_basic_Info.put("sumpolicy_lookup",sumpolicy_jsonArray);
					
					ArrayList<SalesChannelAccessData> datareturn_Sale_Channel;
					SalesChannelData salesChannelData	= new SalesChannelData();
					//ArrayList<SalesChannelAccessData> 
					datareturn_Sale_Channel = salesChannelData.searchInsuranceType();
					//datareturn_Sale_Channel = mdcs.getsales_Channel();
					
					JSONArray	sales_Channel_jsonArray	= new JSONArray();
					for (int i = 0; i < datareturn_Sale_Channel.size(); i++) {
						datareturn_Sale_Channel.get(i).getFilingChannel().getName_th();
						JSONObject json_sales_Channel = new JSONObject();
						if  (datareturn_Sale_Channel.get(i).getSaleChannel().getSystem_code() == null) {
							json_sales_Channel.put("pass", "");
						}else {
							json_sales_Channel.put("pass", datareturn_Sale_Channel.get(i).getSaleChannel().getSystem_code());
						}
						json_sales_Channel.put("text", datareturn_Sale_Channel.get(i).getSaleChannel().getName_th());
						json_sales_Channel.put("value", datareturn_Sale_Channel.get(i).getSaleChannel().getSale_chan_id());
						sales_Channel_jsonArray.put(json_sales_Channel);
					}
					
					json_basic_Info.put("salesChannel_lookup",sales_Channel_jsonArray);
					
					basic_Info_jsonArray.put(json_basic_Info);
					//
					responsejson.put("Tab_Basic_Information",basic_Info_jsonArray);
					responseText = responsejson.toString();
				}
				
			}else if(method.equals("GetPartner")) {
				String systemCode 					= request.getParameter("systemCode");
				ServiceForProductFactory  spf		= new ServiceForProductFactory();
				JSONArray	partner_jsonArray		= new JSONArray();
				ArrayList<String[]> arr_Partner  = new ArrayList<>();
				arr_Partner = spf.getPartnerByChannel(systemCode);
				for (int i = 0; i < arr_Partner.size(); i++) {
					JSONObject partner_Json = new JSONObject();
					partner_Json.put("pass", arr_Partner.get(i)[0]);
					partner_Json.put("text", arr_Partner.get(i)[1]);
					partner_Json.put("key", arr_Partner.get(i)[2]);
					
					partner_jsonArray.put(partner_Json);
				}
				responsejson.put("partner",partner_jsonArray);
				//
				responseText = responsejson.toString();
			}else if(method.equals("GetCoop")) {
				ServiceForProductFactory  spf		= new ServiceForProductFactory();
				JSONArray	cooperative_jsonArray	= new JSONArray();
				ArrayList<String[]> arr_cooperative  = new ArrayList<>();
				arr_cooperative = spf.getAllCoopTLI();
				for (int i = 0; i < arr_cooperative.size(); i++) {
					JSONObject cooperative_Json = new JSONObject();
					cooperative_Json.put("pass", arr_cooperative.get(i)[0]);
					cooperative_Json.put("text", arr_cooperative.get(i)[1]);
					cooperative_jsonArray.put(cooperative_Json);
				}
				responsejson.put("coop",cooperative_jsonArray);
				//
				responseText = responsejson.toString();
			}else if(method.equals("getAllBasePlan_CL")) {
				Product product = null;
				ProductData pd = new ProductData();
				String pass_Insurance = request.getParameter("pCode");
				
				product = pd.searchProduct(pass_Insurance);
				 	
				ArrayList<Coverage> arr_Coverage = new ArrayList<>();
				ProductBasicinfo pbf = new ProductBasicinfo(product);
				arr_Coverage = pbf.searchBasePlan();
				JSONArray	basePlanCL_data_jsonArray	= new JSONArray();
				for (int i = 0 ; i < arr_Coverage.size(); i++) {
						JSONObject basePlanCL_data_json = new JSONObject();
						basePlanCL_data_json.put("insuranceNo", arr_Coverage.get(i).getCov_code());
						basePlanCL_data_json.put("nameTH", arr_Coverage.get(i).getName_th());
						basePlanCL_data_jsonArray.put(basePlanCL_data_json);
					}
				responsejson.put("BasePlanCL_Data", basePlanCL_data_jsonArray);
				responseText = responsejson.toString();
			}else if(method.equals("getAllRider_CL")) {
			/*	ProductBasicinfo pbf = new ProductBasicinfo();
				//String pass_Insurance = request.getParameter("rCode");
				ArrayList<Coverage> listCoverageRider = pbf.searchRider();
				JSONArray	coverageRider_data_jsonArray	= new JSONArray();
				for (int i = 0 ; i < listCoverageRider.size(); i++) {
						JSONObject coverageRider_data_json = new JSONObject();
						coverageRider_data_json.put("insuranceNo", listCoverageRider.get(i).getCov_code());
						coverageRider_data_json.put("nameTH", listCoverageRider.get(i).getName_th());
						coverageRider_data_jsonArray.put(coverageRider_data_json);
					}
				responsejson.put("Rider_CL_Data", coverageRider_data_jsonArray);
				responseText = responsejson.toString();*/
				
			}    
			json = responseText;
			System.out.println("Lookup = /"+json);
			out.print(json);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}