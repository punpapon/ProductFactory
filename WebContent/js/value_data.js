$("#btValue_Data").click(function(){
	  $("#type_data_add").val("");
	  $("#explanation_lookup_add").val("");
})
$("#btDetail_Cancel").click(function(){
	  document.getElementById("ui-003_1").style.display = "none";
	  document.getElementById("ui-003").style.display = "block";
})
$("#btDetail_Value_Data_edit").click(function(){
	  document.getElementById("ui-003_1_1").style.display = "block";
	  document.getElementById("ui-003").style.display = "none";
	  $("#addLookupValue").modal('hide');
	  var type_data  		= $('#type_data_edit').val();
	  var explanation  	= $('#explanation_lookup_edit').val();
	  
	  $("#datavalue_type").val(type_data);
	  $("#explanation_value").val(explanation);
})
$("#btDetail_Value_Data_add").click(function(){
	  document.getElementById("ui-003_1_1").style.display = "block";
	  document.getElementById("ui-003").style.display = "none";
	  $("#addLookupValue").modal('hide');
	  var type_data  	= $('#type_data_add').val();
	  var explanation  	= $('#explanation_lookup_add').val();
	  
	  $("#datavalue_type").val(type_data);
	  $("#explanation_value").val(explanation);
})

$("#btValue_Cancel").click(function(){
	  document.getElementById("ui-003").style.display = "block";
	  document.getElementById("ui-003_1_1").style.display = "none";
})
	$("#btValue_Data_003_1_1_add").click(function(){
		$("#pass__003_1_1_1_add").val("");
		$("#explanation_003_1_1_1_add").val("");
		document.getElementById("ui-003").style.display = "none";
		document.getElementById("ui-003_1_1").style.display = "block";
		var datavalue_type  	= $('#datavalue_type').val();
		$("#datavalue_type_003_1_1_1_add").val(datavalue_type);
	})
$("#btDetail_Cancel_003_1_1_1").click(function(){
	  document.getElementById("ui-003_1").style.display = "block";
	  document.getElementById("ui-003_1_1").style.display = "block";
	  document.getElementById("ui-003_1_1_1").style.display = "none";
})

$(document).ready( function() {
	var t2 	= $('#tb_value_Detail').DataTable();
	var data1 = "1,2,3";
	var data2 = "วิธีชำระเบี้ยประกัน,ประเภทกรมธรรม์ #1,ประเภทกรมธรรม์ #2";
	var data3 = "คำอธิบาย วิธีชำระเบี้ยประกัน,คำอธิบาย ประเภทกรมธรรม์ #1,คำอธิบาย ประเภทกรมธรรม์ #2";
	
	var aa = data1.split(",");
	var bb = data2.split(",");
	var cc = data3.split(",");
	
	var row = "";
	$('#table_ValueData').DataTable().destroy();
	$("#table_ValueData tbody").find("tr").remove();
	var i 		= 0 ;
	var numrow 	= 0;
	for( i = 0; i < aa.length; i++){
		numrow = 1+i;
		row = 	"<tr  id=\"rowLookupValue_"+numrow+""+"\">" +	
			"<td >"+"<label class=\"text-center col-sm-12 sorting_1"+"\"  id=\"data_ID_"+numrow+""+"\">"+aa[i]+"</ul>"+"</label>"+
			"<td >"+"<label  class=\"text-left col-sm-12 sorting_1"+"\" style='text-decoration: underline;color:blue;' id=\"datatype_text_"+numrow+""+"\" onclick = 'getDataClickRow1(\""+numrow+"\",\""+bb[i]+"\",\""+cc[i]+"\");'>"+bb[i]+"</label>"+"" +
			"<input type=\"hidden\" class=\"form-control\" id=\"explanation_hidden_"+i+"\" value\="+cc[i]+">" +
			"</td>"+

		"</tr>";			  
		$("#table_ValueData tbody").append(row);
	}
	$('#table_ValueData').DataTable({     
		"aLengthMenu": [[15, 30, 45, -1], [15, 30, 45, "All"]],
	       "iDisplayLength": 15,
	       "scrollY": 570,
	       "language": {
	    	    "search": "ค้นหา:"
	    }
	 });
	/*-------------------------------------------------------*/
	$('#btDetail_Save_add').on( 'click', function () {
		var counter 		= i+1;
	    var t = $('#table_ValueData').DataTable();
		var type_data  		= $('#type_data_add').val();
		var explanation  	= $('#explanation_lookup_add').val();
	    t.row.add( [
	        "<label  class=\"text-center col-sm-12 sorting_1"+"\"   id=\"data_ID_"+counter+""+"\">"+counter+"</label>", 
	        "<label  class=\"text-left col-sm-12 sorting_1"+"\"   id=\"datatype_text_"+counter+""+"\"    onclick='getDataClickRow1(\""+counter+"\",\""+type_data+"\",\""+explanation+"\");' style='text-decoration: underline;color:blue;'>"+type_data+"</label>" 
	        + "<input type='hidden' id=\"explanation_hidden_"+counter+""+"\" value='"+explanation+"'>",
	    ] ).node().id = 'rowLookupValue_'+counter+'';
	    t.draw( false );
	    counter++;
	    i++;
	    document.getElementById("btDetail_Value_Data_add").disabled = false;
	} );

/*************************************************************************************/
	var ii	= 0 ;
	$('#btDetail_Save2_add').on( 'click', function () {
			var counter2 		= ii+1;
			var pass  			= $('#pass__003_1_1_1_add').val();
			var explanation  	= $('#explanation_003_1_1_1_add').val();
		    t2.row.add( [
		        "<label  class=\"text-center col-sm-12 sorting_1"+"\"  id=\"datapass_text2_"+counter2+""+"\">"+pass+"</label>", 
		        "<label class=\"text-left col-sm-12 sorting_1"+"\" id=\"datatype_text2_"+counter2+""+"\"  onclick='getDataClickRow2(\""+counter2+"\");' style='text-decoration: underline;color:blue;'>"+explanation+"</label>", 
		    ] ).node().id = 'rowDetail_'+counter2+'';
		    t2.draw( false );
		    counter2++;
		    ii++;
	} );
});
	function save_Edit1() {
		 var type_data_edit  			= $('#type_data_edit').val();
		 var rownumber_edit  			= $('#rownumber_edit').val();
		 var explanation_lookup_edit  	= $('#explanation_lookup_edit').val();
		 $("#datatype_text_"+rownumber_edit).text(type_data_edit);
		 $("#explanation_hidden_"+rownumber_edit).val(explanation_lookup_edit);
	}
	function save_Edit2() {
		 var pass__003_1_1_1_edit  			= $('#pass__003_1_1_1_edit').val();
		 var explanation_003_1_1_1_edit  	= $('#explanation_003_1_1_1_edit').val();
		 var rownumber2_edit  				= $('#rownumber2_edit').val();
		 $("#datapass_text2_"+rownumber2_edit).text(pass__003_1_1_1_edit);
		 $("#datatype_text2_"+rownumber2_edit).text(explanation_003_1_1_1_edit);
	}
	function getDataClickRow1(rownumber) {
		var datatype_text  		= document.getElementById('datatype_text_'+rownumber).innerHTML;
		var explanation_hidden  	= $('#explanation_hidden_'+rownumber).val();
		$("#type_data_edit").val(datatype_text);
		$("#explanation_lookup_edit").val(explanation_hidden);
		$("#rownumber_edit").val(rownumber);
		$("#addLookupValue_edit").modal('show');
	}
	function detail_Delete1() {
		var type_data_edit  	= $('#type_data_edit').val();
		$("#datatype1").text(type_data_edit);
		$("#delete_LookupValue").modal('show');
	}
	function detail_Delete1_1() {
		var rownumber_edit  = $('#rownumber_edit').val();
		$('#table_ValueData').DataTable().row("#rowLookupValue_"+rownumber_edit).remove().draw();
	}
	/*-------tb_value_Detail ------*/
	function getDataClickRow2(rownumber2) {
		var datapass_text  			= document.getElementById('datapass_text2_'+rownumber2).innerHTML;
		var datatype_text  	= document.getElementById('datatype_text2_'+rownumber2).innerHTML;
		
		 var datavalue_type  	= $('#datavalue_type').val();
		 $("#datavalue_type_003_1_1_1_edit").val(datavalue_type);
		 $("#pass__003_1_1_1_edit").val(datapass_text);
		 $("#explanation_003_1_1_1_edit").val(datatype_text);
		 $("#rownumber2_edit").val(rownumber2);
		 $("#addvalue_detail_edit").modal('show');
	}
	function detail_Delete2() {
		var explanation_edit  	= $('#explanation_003_1_1_1_edit').val();
		$("#explanation_edit").text(explanation_edit);
		$("#delete_ValueDetail").modal('show');
	}
	function detail_Delete2_2() {
		var rownumber2_edit  = $('#rownumber2_edit').val();
		$('#tb_value_Detail').DataTable().row("#rowDetail_"+rownumber2_edit).remove().draw();
	}