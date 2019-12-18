<%@page contentType="text/html" language="java" pageEncoding="TIS-620" session="true" errorPage=""%>
<%@page import="myldap.TLdap"%>
<%@page import="utility.rteutility.PublicRte"%>
<%@page import="utility.personnel.tlhrms.EmployeeInfo"%>
<%@page import="utility.productfac.UserAuthen"%>
 <%
    String sessionName = "";
    String userID = "";
    String empName = "";
    
    String name 		= "";
    String departmentID	= "";
    String department 	= "";
    String positionID 	= "";
    String position 	= "";
    String username 	= "";
    String password 	= ""; 
    
    Object check_user = session.getAttribute("username");
    Object check_pass = session.getAttribute("password");
    
    try
    {
        username = (String)request.getParameter("lg_username");
        password = (String)request.getParameter("lg_password");
        
        
        if(check_user != null && check_user.toString().length() != 0 && username.equals(check_user.toString()))
        {
        	if(check_pass == null || check_user.toString().length() == 0 || !password.equals(check_pass.toString()))
        		throw new Exception("password wrong!!!");
        }
        
        sessionName = username;
        System.out.println("username : " + username );
        TLdap ld = new TLdap(username, password);
        userID = ld.getPid();
        if(userID.length() == 8)
            userID = userID.substring(0,3)+userID.substring(4);
        PublicRte.setRemote(true);
        EmployeeInfo info = new EmployeeInfo();
        String[] arr = info.getEmployeePersonAll(userID);
        
        if(arr != null && arr.length != 0)
        {
        	name 			= (arr[3] + arr[4] + " " + arr[5]);
	        departmentID	= arr[6];
	        department 		= arr[7];
	        positionID 		= arr[8];
	        position 		= arr[9];
	        
        }
        else {
        	name = username;
        	
        }       
        empName = arr[6].trim()+" "+arr[7].trim();
        
        session.setAttribute("username", username);
        session.setAttribute("password", password);
        session.setAttribute("userID", userID);
        session.setAttribute("empName", name);
        session.setAttribute("department", department);
        session.setAttribute("departmentID", departmentID);
        session.setAttribute("position", position);
        session.setAttribute("positionID", positionID);
        session.setAttribute("auth", "user");
        session.setAttribute("loginok", "ok");

        System.out.println("userAuthen  "+"department "+departmentID+"| userID"+userID);
         if(new UserAuthen().userAuthen(departmentID, userID))
        	out.print("<script> window.location=\"factory_Base_Plan_Main.jsp\";</script>");
        else
        	throw new Exception("ไม่มีสิทธิ์เข้าใช้งาน"); 
    }
    catch(Exception e)
    {
        System.out.println("Error : " + e.getMessage());
        out.print("<script>alert('"+e.getMessage()+"'); window.location=\"login.jsp\";</script>");
        //out.print("<script>alert('ชื่อบัญชีผู้ใช้หรือรหัสผ่านไม่ถูกต้อง'); window.location=\"login.jsp\";</script>");  
    }
  ///  out.print("<script> window.location=\"factory_Base_Plan_Main.jsp\";</script>");
    
    
%> 