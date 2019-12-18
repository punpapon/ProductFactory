
	function appendTable012(page, id, name, email, phoneNumber)
		{
			var row = "";
			row = "<tr>"+
				  "<td>"+id+"</td>"+
				  "<td>"+name+"</td>"+
				  "<td>"+email+"</td>"+
				  "<td>"+phoneNumber+"</td>"+
				  "</tr>";
			
			$("#"+page+" tbody").append(row);
		}
	
	function addPerson()
		{
		
		var page = $("#tab012 .active a").data("key");
		page = page || 0;
		
		if(page != 0)
			{
			$("#"+page+" tbody").empty();
			
			for (var i = 1; i <= 5; i++) 
				{
					if ($('#cbPerson' + i).prop('checked')) 
						{
							appendTable012(page, $('#idPerson'+i).text(), 
									$('#namePerson'+i).text(), $('#emailPerson'+i).text(), $('#phonePerson'+i).text());
						}
				}
			}
		
		}
		
		