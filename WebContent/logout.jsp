<%@page contentType="text/html" language="java" pageEncoding="UTF-8" session="true" errorPage=""%>
<!DOCTYPE html>

<%
	session.setAttribute("userID", "");
	session.setAttribute("empName", "");
	session.setAttribute("department", "");
	session.setAttribute("departmentID", "");
	session.setAttribute("position", "");
	session.setAttribute("positionID", "");
    session.setAttribute("loginok", "not");
    out.print("<script> window.location=\"login.jsp\";</script>");
%>
