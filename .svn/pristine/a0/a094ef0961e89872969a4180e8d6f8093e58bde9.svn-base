package servlet;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.Base64;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.JSONArray;
import org.json.JSONObject;

import service.center.FileImplement;
import service.center.Uploadfile;
import service.fnc.ConstantValues;

/**
 * Servlet implementation class Download_Upload_Servlet
 */
@WebServlet("/Download_Upload_Servlet")
public class Download_Upload_Servlet extends HttpServlet 
{
	private static final long serialVersionUID = 1L;
	//private final long  MEGABYTE = 1024L * 1024L;
	//private final long  BYTE_20 = 20000000;
	private final long  BYTE_30 = 30000000;
	//private final long  BYTE_50 = 50000000;
	//private final long  MAXIMUM_MB = 20;
	private String userId;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Download_Upload_Servlet() {
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
		processRequest(request, response);
	}
	
	
	protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
		try {

			HttpSession session = request.getSession();
			String getuserID = session.getAttribute("userID").toString();
			if (!getuserID.equals("")) {
				this.userId =  getuserID ;
			}else {
				System.out.println("================== NO USER ====================");
			}
			System.out.println("======= Save File Download_Upload_Servlet ======");
			String passInsurance 	= request.getParameter("passInsurance");
			ConstantValues.COV_CODE = passInsurance;
			response.setCharacterEncoding("UTF-8");
			response.setContentType("application/json");
			
			PrintWriter out 	= response.getWriter();
			String responseText	= "";
			String json 		= "";
			String method 		= request.getParameter("method");
			JSONObject responsejson = new JSONObject();
			
			
			if(method.equals("uploadFile")) {
				String file_name 		= request.getParameter("file_name");
				String byte_file 		= request.getParameter("byte_file");
				String file_name_update = request.getParameter("file_name_update");
				
				String[] parts = byte_file.split(",");
				String base64 = parts[1]; 
				
				
				  //System.out.println("------2------/"+base64);
				   
				   String encodedString =  new String(base64);
				   
				  // System.out.println("------3------/"+encodedString.toString());
				   
				   byte[] decodedBytes = Base64.getDecoder().decode(encodedString.getBytes());
				   //double fileSizeInBytes = (decodedBytes.length/MEGABYTE)+1;
				   //System.out.println("-------BYTE--------/"+decodedBytes.length);
				if (decodedBytes.length <= BYTE_30) {
					   FileImplement fileIm = new FileImplement();
				          String ref = fileIm.uploadPolcyWording(decodedBytes, file_name_update);
				          //  System.out.println("---------------/"+ref);
		          		  //System.out.println("------4------/"+file_name_update);
					      JSONObject json_object = new JSONObject();
					      json_object.put("ref", ref);
					      responsejson.put("upload_ref", ref);
					      
						responseText = responsejson.toString();
				   }else {
					   throw new java.lang.Error("file is over 30 mb.");
				   }
			}else if(method.equals("uploadFile_txt")) {
				String byte_file 		= request.getParameter("byte_file");
				String file_name_update = request.getParameter("file_name_update");
				String[] parts = byte_file.split(",");
				String base64 = "";
				if(parts.length == 1) {
					// ถ้าใส่ไฟล์ว่างมา
					base64 = "ICAgICAK"; 
				}else {
					base64 = parts[1]; 
				}
			    String encodedString =  new String(base64);
			    byte[] decodedBytes = Base64.getDecoder().decode(encodedString.getBytes());
	            FileImplement fileIm = new FileImplement();
	            String ref = fileIm.uploadTXT(decodedBytes, file_name_update);
			        //  System.out.println("---------------/"+ref);
		       JSONObject json_object = new JSONObject();
		       json_object.put("ref", ref);
		       responsejson.put("upload_ref", ref);
			      
				responseText = responsejson.toString();
			
			}else if(method.equals("download")) {
				String ref = request.getParameter("ref");
				
				Uploadfile uploadfile = new Uploadfile();
				uploadfile.downloadFile(ref);
				String path = uploadfile.getPath();
		
				File file = new File(path);
			    byte[] encoded = Base64.getEncoder().encode(Files.readAllBytes(file.toPath()));
			    String decodedString = new String(encoded);
				JSONObject json_object = new JSONObject();
			    json_object.put("locale_path", path);
				json_object.put("path", decodedString);
			    responsejson.put("download_path", json_object);
			    responseText = responsejson.toString();
			}else if( method.equals("getFilenameByDocTypeID")) {
				String doc_type_id = request.getParameter("doc_type_id").toString();
				
				FileImplement fileIm = new FileImplement();
				ArrayList<layout.bean.productfac.lookup.File> lstFile = new ArrayList<>();
				if( doc_type_id.equals("1")) {
					lstFile = fileIm.searchPolicyWordingFileDOC();	//doc file
				}else if( doc_type_id.equals("2")) {
					lstFile = fileIm.searchPolicyWordingFilePDF();	//pdf file
				}
				
				JSONArray  filename_arrayJson	= new JSONArray();
				for (layout.bean.productfac.lookup.File file : lstFile) {
					JSONObject filename_objJson = new JSONObject();
					filename_objJson.put("filename", file.getFile_name());
					filename_arrayJson.put(filename_objJson);
				}
				
			    responsejson.put("fileNameAll", filename_arrayJson);
			    responseText = responsejson.toString();
			}
			
			json = responseText;
			//System.out.println("GetPolicy/////"+json);
			out.print(json);
		}catch (Exception e) {
			e.printStackTrace();
		}
	}

}
