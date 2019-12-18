/**
 * 
 * @returns 2019-8-28_163537
 */
function getCurrentDate(){
	var today = new Date();
	var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	var time = today.getHours() + "" + today.getMinutes() + "" + today.getSeconds();
	var dateTime = date+'_'+time;
	return dateTime
}

/**
 * 
 * @param from_date
 * @param from_dateUnit
 * @param to_date
 * @param to_dateUnit
 * @param message
 * @returns
 */
function validate_date(from_date,from_dateUnit,to_date,to_dateUnit,message){
	
	if( from_date > 0 && to_date > 0){
		
		var start_date = "";
		switch (from_dateUnit) {
		case "DAY":		start_date = from_date
			break;
		case "WEEK":	start_date	= from_date*7
			break;
		case "MONTH":	start_date	= from_date*30
			break;
		case "YEAR":	start_date	= from_date*365	
			break;
		case "AGE":		start_date	= from_date*365	
			break;
		default:
			break;
		}
		
		var end_date = "";
		switch (to_dateUnit) {
		case "DAY":		end_date 	= to_date
			break;
		case "WEEK":	end_date	= to_date*7
			break;
		case "MONTH":	end_date	= to_date*30
			break;
		case "YEAR":	end_date	= to_date*365	
			break;
		case "AGE":		end_date	= to_date*365	
			break;
		default:
			break;
		}
		
		if( start_date >= end_date){
			alertError(message)
		}
		
	}else{
		alertError(message)
	}
}

/**
 * @param e --> this element
 * @param ref 	--> @example workspace://SpacesStore/fc495266-112c-437e-bd1f-31bf89e48c60
 * @param file_type --> 1:doc , 2:pdf
 * @returns open file in browser
 */
function openFile_target(e,ref,file_type){
	var returnTXT = "";
	datajson = {				        	
			"method" : "download",
			"ref" : ref
		}	
		$.ajax({
			 type: "POST",
		    url : "Download_Upload_Servlet",
		    data: datajson,
		    success : function(response) {	
		    	var obj = response.download_path;
		    	var filename = $(e).text();
		    	
		    	if( file_type == "pdf"){
		    		var pdfResult = obj.path;
		    		/*var bin = atob(pdfResult);
		    		console.log('File Size:', Math.round(bin.length / 1024), 'KB');
		    		console.log('PDF Version:', bin.match(/^.PDF-([0-9.]+)/)[1]);
		    		console.log('Create Date:', bin.match(/<xmp:CreateDate>(.+?)<\/xmp:CreateDate>/)[1]);
		    		console.log('Modify Date:', bin.match(/<xmp:ModifyDate>(.+?)<\/xmp:ModifyDate>/)[1]);
		    		console.log('Creator Tool:', bin.match(/<xmp:CreatorTool>(.+?)<\/xmp:CreatorTool>/)[1]);*/
		    		
		    		var blob = base64toBlob(pdfResult, 'application/pdf');
		    		var blobUrl = window.URL.createObjectURL(blob, { oneTimeOnly: true });
		    		
		    		/**********TEST************/
	    		 	var linkSource = blobUrl;
	    		    var downloadLink = document.createElement("a");
	    		    var fileName = filename;
	    		    downloadLink.href = linkSource;
	    		    downloadLink.download = fileName;
	    		    downloadLink.click();
		    		/**********************/
//		    		window.download = 'filetest.pdf'
		    		//window.open(blobUrl)
		    		
		    		//console.log(pdfWindow)
		    	}else if( file_type == "doc"){
		    		var docResult = obj.path;
		    		//var docWindow = window.open("")
			    	//docWindow.document.write("<iframe width='100%' height='100%' src='data:application/msword;base64, " + encodeURI(docResult) + "'></iframe>")
			    	//window.open("data:application/msword;base64,"+docResult)
			    	
			    	var uri = "data:application/msword;base64,"+ docResult 
			    	var downloadLink = document.createElement("a");
			    	downloadLink.href = uri;
			    	if(filename == ""){
			    		filename = $(e).parent().parent().find('td:nth-child(3)').text();
			    	}
			    	downloadLink.download = filename;
			    	document.body.appendChild(downloadLink);
			    	downloadLink.click();
			    	document.body.removeChild(downloadLink);
			    	
		    	}else if(file_type == "txt"){
		    
		    		var txtResult = obj.path;
		    		var url = "data:application/plain;base64,"+txtResult;
		    		var file_data = atob(txtResult);
		    		
		    		returnTXT = file_data;
		    		
		    	}else if(file_type == "txt_download"){
		    		
		    		var txtResult = obj.path;
//		    		var url = "data:application/plain;base64,"+txtResult;
		
			    	var downloadLink = document.createElement("a");
			    	/**/
			    	
			    	var blob = base64toBlob(txtResult, 'text/plain');
			    	var blobUrl = window.URL.createObjectURL(blob, { oneTimeOnly: true });
		    		
			    	downloadLink.href = blobUrl;
			    	
			    	downloadLink.download = e;
			    	document.body.appendChild(downloadLink);
			    	downloadLink.click();
			    	document.body.removeChild(downloadLink);
			    	
			    	
		    		
		    	}
		    	
		    },
		 	error : function(response) {	
		 		alert("fail")
		 	},
		 	async : false
		})
		console.log("datajson",datajson)
		return returnTXT;
}
/**
 * 
 * @param base64Data -> 'base64'
 * @param contentType -> 'application/pdf'
 * @returns blob
 */

function base64toBlob(base64Data, contentType) {
    contentType = contentType || '';
    var sliceSize = 1024;
    var byteCharacters = atob(base64Data);
    var bytesLength = byteCharacters.length;
    var slicesCount = Math.ceil(bytesLength / sliceSize);
    var byteArrays = new Array(slicesCount);

    for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
        var begin = sliceIndex * sliceSize;
        var end = Math.min(begin + sliceSize, bytesLength);

        var bytes = new Array(end - begin);
        for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
            bytes[i] = byteCharacters[offset].charCodeAt(0);
        }
        byteArrays[sliceIndex] = new Uint8Array(bytes);
    }
    return new Blob(byteArrays, { type: contentType });
}

/**
 * param ประเภทไฟล์,ชื่อไฟล์,ที่อยู่ไฟล์,ID element ของfile ที่จะ return ไป
 * return fileId
 * 
 * */
function saveFile(file_type_id,file_name,file_url,hidden_fileId){
	
	datajson = {				        	
			file_id 		: "",
			file_type_id 	: file_type_id,
			file_name 		: file_name,
			file_url		: file_url
	}	
	console.log("datajson",datajson)
	$.ajax({
	    type: "POST",
	    url : "Save_LookupFile_Servlet",
	    data: datajson,    
	    async: false,
	    success : function(response) {		
	    	
	    	var fileId_policy = response.file_id;
	    		
	    	$("#"+hidden_fileId).val(fileId_policy)
	    	$("#modal_waiting").modal('hide');
	    	$("body").addClass("body_nopadding");
	    },
	    error : function(response) {	
	    	message = "ไม่สามารถบันทึกไฟล์ได้";
			alertError(message);
	    	//$("#input_fileCal_"+select_file+"_CL").val("");
	    }
	});	
	
}

function openFileTextProduct(file_name,file_ref,tableCol,tb_name,modal_name){
	var file_data = "";
	file_data = openFile_target(file_name, file_ref, 'txt');

	/*console.log("FileName --- > "+file_name)
	console.log("file_ref --- > "+file_ref)
	console.log("tableCol --- > "+tableCol)
	console.log("tb_name --- > "+tb_name)
	console.log("modal_name --- > "+modal_name)
	
	console.log(file_data)*/
	var tableName = tb_name;
	$("#"+tableName+" tbody>tr").remove();
	  var textRow = file_data.split('\n');
      var textLength = textRow.length - 1;
      
      if(textLength > 50){
    	  textLength = 50;
      }else{
    	  textLength = textLength;
      }
  
      var col1 = "";
	  var col2 = "";
	  var col3 = "";
	  var col4 = "";
	  var col5 = "";
	  var col6 = "";
	  var tableRow = "";
      for(var i=0; i<textLength; i++ ) {

    	  if(tableCol == 3){
    		  col1 = textRow[i].substr(0,3);
    		  col2 = textRow[i].substr(3,2);
    		  col3 = textRow[i].substr(5,2);

    		  tableRow += "<tr>"+
				"<td class='text-center'>"+col1+"</td>"+
				"<td class='text-center'>"+col2+"</td>"+
				"<td class='text-center'>"+col3+"</td>"+
				"</tr>";
 
    	  }else if(tableCol == 5){
    		  col1 = textRow[i].substr(0,2);
    		  col2 = textRow[i].substr(2,1);
    		  col3 = textRow[i].substr(3,2);
    		  col4 = textRow[i].substr(5,2);
    		  col5 = textRow[i].substr(7,6);
    		  
    		  tableRow += "<tr>"+
				"<td class='text-center'>"+col1+"</td>"+
				"<td class='text-center'>"+col2+"</td>"+
				"<td class='text-right'>"+col3+"</td>"+
				"<td class='text-right'>"+col4+"</td>"+
				"<td class='text-right'>"+col5+"</td>"+
				"</tr>";
     		  
    	  }else if(tableCol == 6){
    		   col1 = textRow[i].substr(0,3);
    		   col2 = textRow[i].substr(3,2);
    		   col3 = textRow[i].substr(5,1);
    		   col4 = textRow[i].substr(6,2);
    		   col5 = textRow[i].substr(8,2);
    		   col6 = textRow[i].substr(10,6);
    		  
    		   tableRow += "<tr>"+
				"<td class='text-center'>"+col1+"</td>"+
				"<td class='text-center'>"+col2+"</td>"+
				"<td class='text-right'>"+col3+"</td>"+
				"<td class='text-right'>"+col4+"</td>"+
				"<td class='text-right'>"+col5+"</td>"+
				"<td class='text-right'>"+col6+"</td>"+
				"</tr>";  
    	   /*การคำนวณเบี้ยประกัน*/
    	  }else if(tableCol == 61){
   		   col1 = textRow[i].substr(0,14);
		   col2 = textRow[i].substr(14,1);
		   col3 = textRow[i].substr(15,1);
		   col4 = textRow[i].substr(16,2);
		   col5 = textRow[i].substr(18,1);
		   col6 = textRow[i].substr(19,5);
		  
		   tableRow += "<tr>"+
			"<td class='text-center'>"+col1+"</td>"+
			"<td class='text-center'>"+col2+"</td>"+
			"<td class='text-right'>"+col3+"</td>"+
			"<td class='text-right'>"+col4+"</td>"+
			"<td class='text-right'>"+col5+"</td>"+
			"<td class='text-right'>"+col6+"</td>"+
			"</tr>";    		  
    	  }else if(tableCol == 41){
   		   col1 = textRow[i].substr(0,2);
		   col2 = textRow[i].substr(2,1);
		   col3 = textRow[i].substr(3,2);
		   col4 = textRow[i].substr(5,6);
		  
		   tableRow += "<tr>"+
			"<td class='text-center'>"+col1+"</td>"+
			"<td class='text-center'>"+col2+"</td>"+
			"<td class='text-right'>"+col3+"</td>"+
			"<td class='text-right'>"+col4+"</td>"+
			"</tr>";    
		  
    	  }else if(tableCol == 51){
      		   col1 = textRow[i].substr(0,3);
    		   col2 = textRow[i].substr(3,2);
    		   col3 = textRow[i].substr(5,1);
    		   col4 = textRow[i].substr(6,2);
    		   col5 = textRow[i].substr(8,6);
    		  
    		   tableRow += "<tr>"+
    			"<td class='text-center'>"+col1+"</td>"+
    			"<td class='text-center'>"+col2+"</td>"+
    			"<td class='text-center'>"+col3+"</td>"+
    			"<td class='text-right'>"+col4+"</td>"+
    			"<td class='text-right'>"+col5+"</td>"+
    			"</tr>";    		  
          }else if(tableCol == 31){
    		  col1 = textRow[i].substr(0,2);
    		  col2 = textRow[i].substr(2,3);
    		  col3 = textRow[i].substr(5,7);

    		  tableRow += "<tr>"+
				"<td class='text-center'>"+col1+"</td>"+
				"<td class='text-center'>"+col2+"</td>"+
				"<td class='text-center'>"+col3+"</td>"+
				"</tr>";
 
    	  }else if(tableCol == 42){
      		   col1 = textRow[i].substr(0,5);
    		   col2 = textRow[i].substr(5,1);
    		   col3 = textRow[i].substr(6,2);
    		   col4 = textRow[i].substr(8,8);
    		  
    		   tableRow += "<tr>"+
    			"<td class='text-center'>"+col1+"</td>"+
    			"<td class='text-center'>"+col2+"</td>"+
    			"<td class='text-right'>"+col3+"</td>"+
    			"<td class='text-right'>"+col4+"</td>"+
    			"</tr>";    		  
          }else if(tableCol == 52){
      		   col1 = textRow[i].substr(0,4);
    		   col2 = textRow[i].substr(4,8);
    		   col3 = textRow[i].substr(12,2);
    		   col4 = textRow[i].substr(14,1);
    		   col5 = textRow[i].substr(15,5);
    		  
    		   tableRow += "<tr>"+
    			"<td class='text-center'>"+col1+"</td>"+
    			"<td class='text-center'>"+col2+"</td>"+
    			"<td class='text-center'>"+col3+"</td>"+
    			"<td class='text-right'>"+col4+"</td>"+
    			"<td class='text-right'>"+col5+"</td>"+
    			"</tr>";    		  
          }else if(tableCol == 62){
      		   col1 = textRow[i].substr(0,4);
    		   col2 = textRow[i].substr(4,1);
    		   col3 = textRow[i].substr(5,4);
    		   col4 = textRow[i].substr(9,2);
    		   col5 = textRow[i].substr(11,6);
    		   col6 = textRow[i].substr(17,1);
    		  
    		   tableRow += "<tr>"+
    			"<td class='text-center'>"+col1+"</td>"+
    			"<td class='text-center'>"+col2+"</td>"+
    			"<td class='text-center'>"+col3+"</td>"+
    			"<td class='text-center'>"+col4+"</td>"+
    			"<td class='text-center'>"+col5+"</td>"+
    			"<td class='text-center'>"+col6+"</td>"+
    			"</tr>";    		  
          }else if(tableCol == 53){
      		   col1 = textRow[i].substr(0,4);
    		   col2 = textRow[i].substr(4,1);
    		   col3 = textRow[i].substr(5,5);
    		   col4 = textRow[i].substr(10,2);
    		   col5 = textRow[i].substr(12,6);
    		  
    		   tableRow += "<tr>"+
    			"<td class='text-center'>"+col1+"</td>"+
    			"<td class='text-center'>"+col2+"</td>"+
    			"<td class='text-center'>"+col3+"</td>"+
    			"<td class='text-center'>"+col4+"</td>"+
    			"<td class='text-center'>"+col5+"</td>"+
    			"</tr>";    		  
          }else if(tableCol == 12){
      		   col1 = textRow[i].substr(0,4);
    		   col2 = textRow[i].substr(4,1);
    		   col3 = textRow[i].substr(5,2);
    		   col4 = textRow[i].substr(7,2);
    		   col5 = textRow[i].substr(9,5);
    		   col6 = textRow[i].substr(14,5);
    		   col7 = textRow[i].substr(19,5);
    		   col8 = textRow[i].substr(24,5);
    		   col9 = textRow[i].substr(29,2);
    		   col10 = textRow[i].substr(31,3);
    		   col11 = textRow[i].substr(34,5);
    		   col12 = textRow[i].substr(39,1);
    		  
    		   tableRow += "<tr>"+
    			"<td class='text-center'>"+col1+"</td>"+
    			"<td class='text-center'>"+col2+"</td>"+
    			"<td class='text-center'>"+col3+"</td>"+
    			"<td class='text-center'>"+col4+"</td>"+
    			"<td class='text-center'>"+col5+"</td>"+
    			"<td class='text-center'>"+col6+"</td>"+
    			"<td class='text-center'>"+col7+"</td>"+
    			"<td class='text-center'>"+col8+"</td>"+
    			"<td class='text-center'>"+col9+"</td>"+
    			"<td class='text-center'>"+col10+"</td>"+
    			"<td class='text-center'>"+col11+"</td>"+
    			"<td class='text-center'>"+col12+"</td>"+
    			"</tr>";    		  
          }else if(tableCol == 13){
      		   col1 = textRow[i].substr(0,4);
    		   col2 = textRow[i].substr(4,3);
    		   col3 = textRow[i].substr(7,1);
    		   col4 = textRow[i].substr(8,2);
    		   col5 = textRow[i].substr(10,2);
    		   col6 = textRow[i].substr(12,5);
    		   col7 = textRow[i].substr(17,5);
    		   col8 = textRow[i].substr(22,5);
    		   col9 = textRow[i].substr(27,5);
    		   col10 = textRow[i].substr(32,2);
    		   col11 = textRow[i].substr(34,3);
    		   col12 = textRow[i].substr(37,5);
    		   col13 = textRow[i].substr(42,1);
    		  
    		   tableRow += "<tr>"+
    			"<td class='text-center'>"+col1+"</td>"+
    			"<td class='text-center'>"+col2+"</td>"+
    			"<td class='text-center'>"+col3+"</td>"+
    			"<td class='text-center'>"+col4+"</td>"+
    			"<td class='text-center'>"+col5+"</td>"+
    			"<td class='text-center'>"+col6+"</td>"+
    			"<td class='text-center'>"+col7+"</td>"+
    			"<td class='text-center'>"+col8+"</td>"+
    			"<td class='text-center'>"+col9+"</td>"+
    			"<td class='text-center'>"+col10+"</td>"+
    			"<td class='text-center'>"+col11+"</td>"+
    			"<td class='text-center'>"+col12+"</td>"+
    			"<td class='text-center'>"+col13+"</td>"+
    			"</tr>";    		  
          }

        
      }
      $("#"+tableName+">tbody").append(tableRow);	    	    	  	
      
      if ($.fn.dataTable.isDataTable( "#"+tableName ) ) {   	  
    		 	
      }else{      
    	 
    	  $("#"+tableName).DataTable({"ordering": false,"paging": false,"bInfo" : false, 
			  "oLanguage": {
		      "sSearch": "ค้นหา: "
		    }
		  });
      }
      
      $("#"+modal_name+" .modal-header>h4>span").html(file_name);
      $("#"+modal_name).modal("show");
      /**/
	
}

/** Coverage
 *  เปลี่ยน status เป็น NEW
 * @param cov_code
 * @param group_name
 * @returns
 */
function set_status_clone_Coverage(cov_code, group_name){
	if(cov_code != "" && group_name != ""){
		$.ajax({
	        type: "POST",
	        url : "CloneServlet",
	        async: false,
	        data: {
	        	method 			: "setstatusCoverageTask",
	        	cov_code_Clone	: cov_code,
	        	groupName		: group_name
	        },       
	        success : function(response) {
	        	console.log("success");
	        	
	        },
	        error : function(response) {}
		});
	}
	
}

/** Product
 *  เปลี่ยน status เป็น NEW
 * @param prd_code
 * @param group_name
 * @returns
 */
function set_status_clone(prd_code, group_name){
	if(prd_code != "" && group_name != ""){
		$.ajax({
	        type: "POST",
	        url : "CloneServlet",
	        async: false,
	        data: {
	        	method 			: "setstatusProductTask",
	        	prd_code_Clone	: prd_code,
	        	groupName		: group_name
	        },       
	        success : function(response) {
	        	console.log("success");
	        	
	        },
	        error : function(response) {}
		});
	}
	
}
/** Underwrite
 *  ทุกครั้งที่กดบันทึกหน้าข้อกำหนดการรับประกันและมีการผูกภาคผนวก ต้อง Gen ข้อมูลการจับคู่จาก ตาราง AppendixProduct 
 * @returns
 */
function gen_JSON_UW_AppendixProduct(){
	/** GEN JSON SETTING CHECKLIST  **/
	var json_data3 = {
        	"method": "Gen_JSON_Appendix_Product",	
	}
	$.ajax({
		url: 'UW_JSON_Servlet',
		type: "POST",
		data: json_data3,
		success: function (response) {
			
		}
	});
	/** GEN JSON SETTING CHECKLIST  **/
}
