package service.fnc;

public enum StatusCodeType 
{
	E("Error"), S("Success"), NF("Data not found.");
	
	private String value;
	
	private StatusCodeType(String status) {
		this.value = status;
	}
	
	public String getValue() {
		return value;
	}	
}
