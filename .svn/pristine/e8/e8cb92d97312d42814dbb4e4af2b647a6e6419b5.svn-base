package service.center;
import myldap.TLdap;
import sun.security.util.Password;
import utility.personnel.personnel.EmployeeInfo;
import utility.rteutility.PublicRte;
/**
 * @author Nara : 24-05-2019
 *
 */
public class AuthenUser 
{
	public AuthenUser (String user,Password password) throws Exception
    {
		PublicRte.setRemote(true);
		//new TLdap(user, password.toString());
	    new TLdap(user);
		printTLdap();
    }
	public String [] getUserData() throws Exception
	{
       return EmployeeInfo.getEmployeePersonAll(getEmployeeID());
	}
	
	/**
	 * Vector<String []> vec = EmployeeInfo.searchEmployee("I".charAt(0), employeeID);
	 * string[0] : employeeID
	 * string[1] : position
	 * string[2] : positionName
	 * string[3] : branch
	 * string[4] : branchName
	 * string[5] : preName
	 * string[6] : firstName
	 * string[7] : lastName
	 * string[8] : retryDate
	 * string[9] : depositNo
	 * string[10]: citizenID
	 * @throws Exception 
	 */
	
	private void printTLdap() throws Exception 
	{
		System.out.println("Ldap --------------------------------------------------");
	   	System.out.println("orgCode	 : "+TLdap.getOrgCode().trim());
	   	System.out.println("empId 	 : "+TLdap.getPid()); 
	   	System.out.println("thaiName : "+TLdap.getThName().trim());
	   	System.out.println("userName : "+TLdap.getUserName().trim());
	   	System.out.println("user detail -------------------------------------------");
	   	//user detail
	   	/*Vector<String []> vec = EmployeeInfo.searchEmployee('I',setEmployeeID());
		for(String  [] ss : vec)
		{
			for(String s : ss)
				System.out.println(s);
		}*/
	}
	private String getEmployeeID() throws Exception 
	{
		String employeeID  = TLdap.getPid();
		if(TLdap.getPid().indexOf("-") < 0)
			throw new Exception(" Employee ID Format Incorrect "+employeeID);
		employeeID  = employeeID.replaceAll("[-]", "");
		System.out.println("USER_ID >>>> "+employeeID);
		return employeeID;
	}
	
	public static void main(String[] args) 
	{
		try {
			AuthenUser aut = new AuthenUser("nara.rah",new Password());
			for(String  s : aut.getUserData())
			{
				System.out.println(s);
				
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
