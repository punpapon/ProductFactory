<%@ page pageEncoding="UTF-8"%>
<% String doc_type = request.getParameter("type");
   String url = ""; 
if(doc_type.equals("pdf")){ 
	url = "http://gahp.net/wp-content/uploads/2017/09/sample.pdf";
}else{
	url = "http://homepages.inf.ed.ac.uk/neilb/TestWordDoc.doc";
}
%>
<iframe src="https://docs.google.com/gview?url=<%=url%>&embedded=true" frameborder="0" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px" height="100%" width="100%"></iframe>