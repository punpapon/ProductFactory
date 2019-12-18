	var t3 = "";
	var t4 = "";
	var t2 = "";
	$(document).ready( function() {
		  t2 	= $('#tb_UI-004_1_1').DataTable();
		
		  t3 	= $('#tb_Addibs_Code').DataTable({
		    	"paging": false,
		        "ordering": false,
		        "info": false,
		        "searching": false
		  });
		  t4 	= $('#tb_Editibs_Code').DataTable({
		    	"paging": false,
		        "ordering": false,
		        "info": false,
		        "searching": false
		  });
		
		var data1 = "BC_01,BC_02,BC_03";
		var data2 = "ชีวิตและทุพพลภาพสิ้นเชิงถาวร,สุขภาพกรณีเป็นผู้ป่วยใน / ชดเชยรายวัน / ผู้ป่วยนอก,อุบัติเหตุ";
		var data3 = "Death and Total Permenent,Inpatient / Daily Allowance / Outpatient,Accident";
		var aa = data1.split(",");
		var bb = data2.split(",");
		var cc = data3.split(",");
		var row = "";
		$('#tb_lookup_Benefit').DataTable().destroy();
		$("#tb_lookup_Benefit tbody").find("tr").remove();
		var i 		= 0 ;
		var numrow 	= 0;
		for( i = 0; i < aa.length; i++){
			numrow = 1+i;
			row = 	"<tr  id=\"rowLookupValue_"+numrow+""+"\">" +	
				"<td >"+"<label class=\"col-sm-12 text-center sorting_1"+"\" id=\"pass_text_"+numrow+""+"\">"+aa[i]+"</label>"+"</td>"+
				"<td >"+"<label class=\"col-sm-12 text-left sorting_1"+"\" style=\"text-decoration: underline;color:blue;\" id=\"datatype_text_"+numrow+""+"\"  onclick = 'getDataClickRow1(\""+numrow+"\",\""+aa[i]+"\",\""+bb[i]+"\");'>"+bb[i]+"</label>"+"" +
				"<input type=\"hidden\"  id=\"lookup_NameEN_hidden_"+numrow+"\" value='"+cc[i]+"'>" +
				"</td>"+

			"</tr>";			  
			$("#tb_lookup_Benefit tbody").append(row);
		}
		$('#tb_lookup_Benefit').DataTable({     
		      "aLengthMenu": [[20, 40, 60, -1], [20, 40, 60, "All"]],
		       "iDisplayLength": 20,
		       "scrollY": 570,
		       "language": {
		    	    "search": "ค้นหา:"
		    }
		 });
		
		$('#bt_Save_LookupBenefit1').on( 'click', function () {
			var counter 		= i+1;
		    var t = $('#tb_lookup_Benefit').DataTable();
		    
		    lookup_Pass_Add
		    lookup_NameTH_Add
		    lookup_NameEN_Add
		    
		    var lookup_Pass_Add  		= $('#lookup_Pass_Add').val();
			var lookup_NameTH_Add  		= $('#lookup_NameTH_Add').val();
			var lookup_NameEN_Add  		= $('#lookup_NameEN_Add').val();
		    t.row.add( [
		    	"<label  class=\"col-sm-12 text-center sorting_1"+"\" id=\"pass_text_"+counter+""+"\">"+lookup_Pass_Add+"</label>", 
		        "<label class=\"col-sm-12 text-left sorting_1"+"\" id=\"datatype_text_"+counter+""+"\"    onclick='getDataClickRow1(\""+counter+"\",\""+lookup_Pass_Add+"\",\""+lookup_NameTH_Add+"\",\""+lookup_NameEN_Add+"\");' style='text-decoration: underline;color:blue;'>"+lookup_NameTH_Add+"</label>" 
		        + "<input type='hidden' id=\"lookup_NameEN_hidden_"+counter+""+"\" value='"+lookup_NameEN_Add+"'>",
		    ] ).node().id = 'rowLookupValue_'+counter+'';
		    t.draw( false );
		
		    counter++;
		    i++;
		} );
		/*************************************************************************************/
		var ii	= 0 ;
		var arriBSCode_passAdd 				= [];
		var data_iBSCode_passAdd			= ""; 
		var arriBSCode_ProtectionAdd		= [];
		var data_iBSCode_ProtectionAdd	= ""; 
		$('#bt_Add_Benefit_Detail').on( 'click', function () {
			var counter2 					= ii+1;
		  
			var text_PassProtection_add  	= $('#text_PassProtection_add').val();
			var text_NameTH_add  			= $('#text_NameTH_add').val();
			var text_NameEN_add  			= $('#text_NameEN_add').val();
			var text_GroupPayment_add  		= $('#text_GroupPayment_add').val();
			
			if(arrnumrow.length != 0){
				for (var iii=0;iii<arrnumrow.length;iii++){
					data_iBSCode_passAdd =  document.getElementById('iBSCode_passAdd_'+arrnumrow[iii]).innerHTML;
					arriBSCode_passAdd.push(data_iBSCode_passAdd);
					
					data_iBSCode_ProtectionAdd =  document.getElementById('iBSCode_ProtectionAdd_'+arrnumrow[iii]).innerHTML;
					arriBSCode_ProtectionAdd.push(data_iBSCode_ProtectionAdd);
				}
			}
		    t2.row.add( [
		      	"<label class=\"text-center col-sm-12 sorting_1"+"\" id=\"pass_text2_"+counter2+""+"\">"+text_PassProtection_add+"</label>", 
		        "<label class=\"text-left col-sm-12 sorting_1"+"\" id=\"datatype_text2_"+counter2+""+"\"  onclick='getDataClickRow2(\""+counter2+"\",\""+text_PassProtection_add+"\",\""+text_NameTH_add+"\");' style='text-decoration: underline;color:blue;'>"+text_NameTH_add+"</label>"
		        + "<input type='hidden' id=\"text_NameEN_add_hidden_"+counter2+""+"\" value='"+text_NameEN_add+"'>"
		        + "<input type='hidden' id=\"text_GroupPayment_add_hidden_"+counter2+""+"\" value='"+text_GroupPayment_add+"'>"

		        + "<input type='hidden' id=\"arrIBSCode_passAdd_hidden_"+counter2+""+"\" value='"+arriBSCode_passAdd+"'>"
		        + "<input type='hidden' id=\"arrIBSCode_GroupPayment_add_hidden_"+counter2+""+"\" value='"+arriBSCode_ProtectionAdd+"'>",
		        
		        
		     ] ).node().id = 'row_BenefitDetail_'+counter2+'';
		    t2.draw( false );
		    counter2++;
		    ii++;
			
		});
		
	});
	function getDataClickRow1(numrow,pass,nameTH) {
		  $("#addLookupBenefit_Edit").modal('show');
		  var pass_text  			= document.getElementById('pass_text_'+numrow).innerHTML;
		  var datatype_text  		= document.getElementById('datatype_text_'+numrow).innerHTML;
		  var lookup_NameEN_hidden 	= $('#lookup_NameEN_hidden_'+numrow).val();
		  
		  	$("#rownumber_edit").val(numrow);
		  	$("#lookup_Pass_Edit").val(pass_text);
			$("#lookup_NameTH_Edit").val(datatype_text);
			$("#lookup_NameEN_Edit").val(lookup_NameEN_hidden);
		}
	function save_Edit1() {
		var rownumber_edit  	= $('#rownumber_edit').val();
		var lookup_Pass_Edit  	= $('#lookup_Pass_Edit').val();
		var lookup_NameTH_Edit  = $('#lookup_NameTH_Edit').val();
		var lookup_NameEN_Edit  = $('#lookup_NameEN_Edit').val();
		
		$("#pass_text_"+rownumber_edit).text(lookup_Pass_Edit);
		$("#datatype_text_"+rownumber_edit).text(lookup_NameTH_Edit);
		$("#lookup_NameEN_hidden_"+rownumber_edit).val(lookup_NameEN_Edit);
	}
	function save_Edit2() {

		var text_rownumber2_edit  		= $('#text_rownumber2_edit').val();
		var text_PassProtection_edit  	= $('#text_PassProtection_edit').val();
		var text_NameTH_edit  			= $('#text_NameTH_edit').val();
		var text_NameEN_edit  			= $('#text_NameEN_edit').val();
		var text_GroupPayment_edit  	= $('#text_GroupPayment_edit').val();
		$("#pass_text2_"+text_rownumber2_edit).text(text_PassProtection_edit);
		$("#datatype_text2_"+text_rownumber2_edit).text(text_NameTH_edit);
		$("#text_NameEN_add_hidden_"+text_rownumber2_edit).val(text_NameEN_edit);
		$("#text_GroupPayment_add_hidden_"+text_rownumber2_edit).val(text_GroupPayment_edit);
	}
	function changeDisplayEdit() {
		$("#namePanel004").text("UI-004.1.1 : Benefit");
		$("#main004").css("display", "none");
		$("#subMain004Lv1").css("display", "none");
		$("#subMain004Lv2").css("display", "block");
		$("#subMain004Lv3").css("display", "none");
		var lookup_Pass_Edit  		= $('#lookup_Pass_Edit').val();
		var lookup_NameTH_Edit  	= $('#lookup_NameTH_Edit').val();
		var group_Protection 		= lookup_Pass_Edit+" : "+lookup_NameTH_Edit;
		$("#group_Protection").val(group_Protection);
		
		var lookup_Pass_Edit  		= $('#lookup_Pass_Edit').val();
		var lookup_NameTH_Edit  	= $('#lookup_NameTH_Edit').val();
		$("#lookup_Pass_hidden").val(lookup_Pass_Edit);
		$("#lookup_NameTH_hidden").val(lookup_NameTH_Edit);
	}
	function changeDisplayAdd() {
		$("#namePanel004").text("UI-004.1.1 : Benefit");
		$("#main004").css("display", "none");
		$("#subMain004Lv1").css("display", "none");
		$("#subMain004Lv2").css("display", "block");
		$("#subMain004Lv3").css("display", "none");
		var lookup_Pass_Add  	= $('#lookup_Pass_Add').val();
		var lookup_NameTH_Add  	= $('#lookup_NameTH_Add').val();
		var group_Protection 	= lookup_Pass_Add+" : "+lookup_NameTH_Add;
		$("#group_Protection").val(group_Protection);
		
		var lookup_Pass_Add  	= $('#lookup_Pass_Add').val();
		var lookup_NameTH_Add  	= $('#lookup_NameTH_Add').val();
		$("#lookup_Pass_hidden").val(lookup_Pass_Add);
		$("#lookup_NameTH_hidden").val(lookup_NameTH_Add);
	}
	
	$("#bt_cancel").click(function(){
		$("#main004").css("display", "block");
		$("#subMain004Lv2").css("display", "none");
	})
	$("#bt_addBenefit").click(function(){
		var group_Protection  		= $('#group_Protection').val();
		$("#text_GroupProtection_add").val(group_Protection);
		
		$("#text_PassProtection_add").val("");
		$("#text_NameTH_add").val("");
		$("#text_NameEN_add").val("");
		$("#text_GroupPayment_add").val("");
		/*---set table t3 "" ----*/	
		t3.clear().draw();
		/*---------------------------*/
		arrnumrow = [];
	});
	var numrow2 	= 0;
	function ibs_Code(type) {
		
	var data1 = "A00001,A00002,A00003,A00004,A00005,A00006,A00007,A00008,A00009,A00010";
	var data2 = "ตาย,เงินจ่ายคืนระหว่างสัญญา,อยู่รอด(เงินครบกำหนด),ตายหรือทุพพลภาพสิ้นเชิงถาวร,ตายจากอุบัติเหตุ,ทุกพลภาพสิ้นเชิงถาวร,เงินปันผล,เงินบำนาญ(การันตีจำนวนงวดที่จ่าย),เงินบำนาญ(จ่ายตามการอยู่รอด),สูญเสียอื่นๆที่ไม่เข้าคำนิยาม ตาย หรือทุพพลภาพสิ้นเชิงถาวร";
		
	var aa = data1.split(",");
	var bb = data2.split(",");
	var row2 = "";
	$('#tb_IBSCode').DataTable().destroy();
	$("#tb_IBSCode tbody").find("tr").remove();
	for(var j = 0; j < aa.length; j++){
		numrow2 = 1+j;
		row2 = 	"<tr  id=\"rowLookupValue_"+numrow2+""+"\">" +	
			"<td class=\"col-sm-2 text-center"+"\">"+"<input type=\"checkbox\"id=\"ch_iBSCode_"+numrow2+"\">"+"</td>"+
			"<td class=\"col-sm-4 text-center"+"\">"+"<ul id=\"iBSCode_pass_"+numrow2+""+"\">"+aa[j]+"</ul>"+"" +
			"</td>"+
			"<td class=\"col-sm-4 text-center"+"\">"+"<ul id=\"iBSCode_Protection_"+numrow2+""+"\">"+bb[j]+"</ul>"+"" +
			"</td>"+

		"</tr>";			  
		$("#tb_IBSCode tbody").append(row2);
	}
	$('#tb_IBSCode').DataTable({  
		  	"paging":   false,
	        "ordering": false,
	        "info":     false,
	        "language": {
	    	    "search": "ค้นหา:"
	    }
	 });
			
		 $("#addIBS004").modal('show');
		 if(type == 1){///ปุ่มเลือก ของAdd
				document.getElementById("div_saveAddIBS").style.display = "block";
				document.getElementById("div_saveEditIBS").style.display = "none";
				if(arrnumrow.length != 0){
					for (var iii=0;iii<arrnumrow.length;iii++){
					     $("#ch_iBSCode_"+arrnumrow[iii]).prop("checked", true);
					}
				}
				
		 }else{///ปุ่มเลือก ของEdit
			 	document.getElementById("div_saveEditIBS").style.display = "block";
				document.getElementById("div_saveAddIBS").style.display = "none";
				if(arrnumrow.length != 0){
					for (var iii=0;iii<arrnumrow.length;iii++){
					     $("#ch_iBSCode_"+arrnumrow[iii]).prop("checked", true);
					}
				}
		 }
	}
	var arrnumrow = [];
	/*-------------------bt_saveAddIBS------------------------*/
	function bt_saveAddIBS() {
		$("#addIBS004").modal('hide');
		if (arrnumrow.length == 0) {
				for(var ii= 1; ii <= numrow2; ii++){
					var ch_iBSCode = document.getElementById("ch_iBSCode_"+ii);
					if (ch_iBSCode.checked == true) {
						 arrnumrow.push(ii);
						var iBSCode_pass  		=	document.getElementById('iBSCode_pass_'+ii).innerHTML;
						var iBSCode_Protection  =	document.getElementById('iBSCode_Protection_'+ii).innerHTML;
						/*--Add Row--*/
						    t3.row.add( [
						      	"<label class=\"text-center col-md-12 "+"\" id=\"iBSCode_passAdd_"+ii+""+"\">"+iBSCode_pass+"</label>", 
						    	"<label class=\"text-left col-md-12 "+"\" id=\"iBSCode_ProtectionAdd_"+ii+""+"\">"+iBSCode_Protection+"</label>", 
						     ] ).node().id = 'row_iBSCodeAdd_'+ii+'';
						    t3.draw(false);
					}
				}
		}else {
			arrnumrow = []; //เซตให้ arrnumrow add ค่าใหม่เสมอ ไม่งั้นจะ Add ซ้ำ
			/*---set table t3 "" ----*/	
			t3.clear().draw();
			for(var ii= 1; ii <= numrow2; ii++){
				var ch_iBSCode = document.getElementById("ch_iBSCode_"+ii);
				if (ch_iBSCode.checked == true) {
					 arrnumrow.push(ii);
					var iBSCode_pass  		=	document.getElementById('iBSCode_pass_'+ii).innerHTML;
					var iBSCode_Protection  =	document.getElementById('iBSCode_Protection_'+ii).innerHTML;
					/*--Add Row--*/
					    t3.row.add( [
					      	"<label class=\"text-center col-md-12 "+"\" id=\"iBSCode_passAdd_"+ii+""+"\">"+iBSCode_pass+"</label>", 
					      	"<label class=\"text-left col-md-12 "+"\" id=\"iBSCode_ProtectionAdd_"+ii+""+"\">"+iBSCode_Protection+"</label>", 
					     ] ).node().id = 'row_iBSCodeAdd_'+ii+'';
					    t3.draw(false);
				}
			}
		}
		 $("#addBenefit").modal('show');
	}
	/*-------------------bt_saveEditIBS------------------------*/
	function bt_saveEditIBS() {
		$("#addIBS004").modal('hide');
		if (arrnumrow.length == 0) {
				for(var ii= 1; ii <= numrow2; ii++){
					var ch_iBSCode = document.getElementById("ch_iBSCode_"+ii);
					if (ch_iBSCode.checked == true) {
						 arrnumrow.push(ii);
						var iBSCode_pass  		=	document.getElementById('iBSCode_pass_'+ii).innerHTML;
						var iBSCode_Protection  =	document.getElementById('iBSCode_Protection_'+ii).innerHTML;
						/*--Add Row--*/
						    t4.row.add( [
						      	"<label id=\"iBSCode_passEdit_"+ii+""+"\">"+iBSCode_pass+"</label>", 
						      	"<label id=\"iBSCode_ProtectionEdit_"+ii+""+"\">"+iBSCode_Protection+"</label>", 
						     ] ).node().id = 'row_iBSCodeEdit_'+ii+'';
						    t4.draw(false);
					}
				}
		}else {
			arrnumrow = []; //เซตให้ arrnumrow add ค่าใหม่เสมอ ไม่งั้นจะ Add ซ้ำ
			/*---set table t4 "" ----*/	
			t4.clear().draw();
			for(var ii= 1; ii <= numrow2; ii++){
				var ch_iBSCode = document.getElementById("ch_iBSCode_"+ii);
				if (ch_iBSCode.checked == true) {
					 arrnumrow.push(ii);
					var iBSCode_pass  		=	document.getElementById('iBSCode_pass_'+ii).innerHTML;
					var iBSCode_Protection  =	document.getElementById('iBSCode_Protection_'+ii).innerHTML;
					/*--Add Row--*/
					    t4.row.add( [
					      	"<label id=\"iBSCode_passEdit_"+ii+""+"\">"+iBSCode_pass+"</label>", 
					      	"<label id=\"iBSCode_ProtectionEdit_"+ii+""+"\">"+iBSCode_Protection+"</label>", 
					     ] ).node().id = 'row_iBSCodeEdit_'+ii+'';
					    t4.draw(false);
				}
			}
		}
		 $("#editBenefit").modal('show');
	}
		/*delete*/
	$("#bt_deleteLookupBenefit").click(function(){
		var lookup_Pass_Edit  	= $('#lookup_Pass_Edit').val();
		$("#text_confirmDelete1").text(lookup_Pass_Edit);
		$("#confirmDelete1").modal('show');
	});
	function bt_confirmDelete1() {
		var rownumber_edit  = $('#rownumber_edit').val();
		$('#tb_lookup_Benefit').DataTable().row("#rowLookupValue_"+rownumber_edit).remove().draw();
	}
	
	function getDataClickRow2(numrow,pass,nameTH) {
		$("#editBenefit").modal('show');
		var lookup_Pass_hidden  		= $('#lookup_Pass_hidden').val();
		var lookup_NameTH_hidden  		= $('#lookup_NameTH_hidden').val();
		var group_Protection 			= lookup_Pass_hidden+" : "+lookup_NameTH_hidden;
		$("#text_head_UI-004_1_1_1").text(lookup_Pass_hidden);
		$("#text_GroupProtection_edit").val(group_Protection);
		 $("#text_rownumber2_edit").val(numrow);
		
		var text_NameEN_add_hidden 				= $('#text_NameEN_add_hidden_'+numrow).val();
		var text_GroupPayment_add_hidden  		= $('#text_GroupPayment_add_hidden_'+numrow).val();
		var pass_text2  						= document.getElementById('pass_text2_'+numrow).innerHTML;
		var datatype_text2  					= document.getElementById('datatype_text2_'+numrow).innerHTML;
		
		$("#text_PassProtection_edit").val(pass_text2);
		$("#text_NameTH_edit").val(datatype_text2);
		$("#text_NameEN_edit").val(text_NameEN_add_hidden);
		$("#text_GroupPayment_edit").val(text_GroupPayment_add_hidden);
		
		var ibsCode_passAdd  				= $('#arrIBSCode_passAdd_hidden_'+numrow).val();
		var ibsCode_GroupPaymentAdd  		= $('#arrIBSCode_GroupPayment_add_hidden_'+numrow).val();
		
		var ibsCode_passAdd_Array  			= ibsCode_passAdd.split(",");
		var ibsCode_GroupPaymentAdd_Array  	= ibsCode_GroupPaymentAdd.split(",");
		
		/*------------Show Table iBSCode---------------*/
				t4.clear().draw();
				for(var ii= 0; ii < ibsCode_passAdd_Array.length; ii++){
						    t4.row.add( [
						      	"<label class=\"text-center col-md-12 "+"\" id=\"iBSCode_passEdit_"+ii+""+"\">"+ibsCode_passAdd_Array[ii]+"</label>", 
						      	"<label class=\"text-left col-md-12 "+"\" id=\"iBSCode_ProtectionEdit_"+ii+""+"\">"+ibsCode_GroupPaymentAdd_Array[ii]+"</label>", 
						     ] ).node().id = 'row_iBSCodeEdit_'+ii+'';
						    t4.draw(false);
					}
		/*------------------------------------*/	
	}
	$("#bt_Delete_Edit").click(function(){
		var text_PassProtection_edit  	= $('#text_PassProtection_edit').val();
		$("#text_confirmDelete2").text(text_PassProtection_edit);
		$("#confirmDelete2").modal('show');
	});
	function detail_Delete2_2() {
		var text_rownumber2_edit  = $('#text_rownumber2_edit').val();
		$('#tb_UI-004_1_1').DataTable().row("#row_BenefitDetail_"+text_rownumber2_edit).remove().draw();
	}
	$("#add_LookupBenefitDetail").click(function(){
		$("#lookup_Pass_Add").val("");
		$("#lookup_NameTH_Add").val("");
		$("#lookup_NameEN_Add").val("");
		$("#addLookupBenefit_Add").modal('show');
	});