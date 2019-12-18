package service;
import java.awt.Desktop;
import java.net.URI;
import java.util.Arrays;
//import java.net.URISyntaxExaception;
import java.util.Base64;
import java.util.Calendar;
import java.util.TimeZone;

import manit.M;
import myldap.TLdap;
import utility.personnel.tlhrms.EmployeeInfo;
import utility.productfac.UserAuthen;
import utility.rteutility.PublicRte;

public class BEnzTest {

	public static void main(String[] args) {
		try {
			 TLdap ld = new TLdap("nara.rah","nara159753");
		        String userID = ld.getPid();
		        if(userID.length() == 8)
		            userID = userID.substring(0,3)+userID.substring(4);
		        PublicRte.setRemote(true);
		        EmployeeInfo info = new EmployeeInfo();
		        String[] arr = info.getEmployeePersonAll(userID);
		        System.out.println(Arrays.toString(arr));
			System.out.println(">>>>/"+new UserAuthen().userAuthen(arr[6],userID));
			
		} catch (Exception e) {
			e.printStackTrace();
			
			// TODO: handle exception
		}
//		String a = "CV_CL 13 100K_DTPD_B2_GL_CL_MRT_B_1383.txt";
//		String b = "GL_CL_MRT_B_1383";
//		
	//	System.out.println(a.indexOf(b));
		
		/*// TODO Auto-generated method stub
		Desktop d = Desktop.getDesktop();
		try {
				Calendar cal = Calendar.getInstance(TimeZone.getTimeZone("GMT"));
				System.out.println("-------------Befor/"+cal.getTimeInMillis());	
				
				String originalURL = "POS|poj1|22316157|RE|25600110";
				String encodedUrl = Base64.getUrlEncoder().encodeToString(originalURL.getBytes());
				d.browse(new URI("http://10.102.63.32:8280/alfresco/s/thailife/main?param=+"+encodedUrl+"+"));
				
				Calendar cal2 = Calendar.getInstance(TimeZone.getTimeZone("GMT"));
				System.out.println("-------------After/"+cal2.getTimeInMillis());
			
				
		} catch (Exception e) {
			// TODO: handle exception
		} */
	}

}
