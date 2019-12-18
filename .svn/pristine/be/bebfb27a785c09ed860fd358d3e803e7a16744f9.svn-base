/**
 * 
 */
/* Check Radio Create Product */
$("#rd_CreateProduct").click(function(){
	document.getElementById("createProduct_checkbox").style.display = "block";
	  //document.getElementById("ui-005_1_CloneBasePlan").style.display = "none";
})
function createProduct() {
	var ch_Menu_1 = document.getElementById("ch_Menu_1");
	var ch_Menu_2 = document.getElementById("ch_Menu_2");
	var ch_Menu_3 = document.getElementById("ch_Menu_3");
	
	if (ch_Menu_1.checked == true) {
		document.getElementById("menu_createProduct_1").style.display = "block";
	}else  {
		document.getElementById("menu_createProduct_1").style.display = "none";
	}
	if (ch_Menu_2.checked == true) {
		document.getElementById("menu_createProduct_2").style.display = "block";
	}else  {
		document.getElementById("menu_createProduct_2").style.display = "none";
	}
	if (ch_Menu_3.checked == true) {
		document.getElementById("menu_createProduct_3").style.display = "block";
	}else  {
		document.getElementById("menu_createProduct_3").style.display = "none";
	}
	
	if (ch_Menu_1.checked == true ){
		 var element = document.getElementById("menu_createProduct_1");
		 element.classList.add("active");  
		document.getElementById("show_createProduct_Menu_1").style.display = "block";
	}
	if (ch_Menu_1.checked == false && ch_Menu_2.checked == true){
		var element = document.getElementById("menu_createProduct_2");
		 element.classList.add("active");  
		document.getElementById("show_createProduct_Menu_2").style.display = "block";
	}
	if (ch_Menu_1.checked == false && ch_Menu_2.checked == false && ch_Menu_3.checked == true){
		var element = document.getElementById("menu_createProduct_3");
		 element.classList.add("active");  
		document.getElementById("show_createProduct_Menu_3").style.display = "block";
	}
	
	document.getElementById("createProduct_Menu").style.display = "block";
	document.getElementById("product_main").style.display = "none";
	document.getElementById("createProduct_checkbox").style.display = "none";
	
}
/*เมนู*/
$("#menu_createProduct_1").click(function(){
	document.getElementById("show_createProduct_Menu_1").style.display = "block";
	document.getElementById("show_createProduct_Menu_2").style.display = "none";
	document.getElementById("show_createProduct_Menu_3").style.display = "none";
	
})
$("#menu_createProduct_2").click(function(){
	document.getElementById("show_createProduct_Menu_2").style.display = "block";
	document.getElementById("show_createProduct_Menu_1").style.display = "none";
	document.getElementById("show_createProduct_Menu_3").style.display = "none";
	
})
$("#menu_createProduct_3").click(function(){
	document.getElementById("show_createProduct_Menu_3").style.display = "block";
	document.getElementById("show_createProduct_Menu_1").style.display = "none";
	document.getElementById("show_createProduct_Menu_2").style.display = "none";
	
})