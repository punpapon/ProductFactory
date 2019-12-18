package service;

import java.io.BufferedReader;
import java.io.FileReader;
import org.json.JSONObject;

public class ReadCSVFile {
	
	public static void main(String[] args) {
		 String result = "";
        try {
        	BufferedReader br = new BufferedReader(new FileReader("/home/tleuser/Desktop/aaa.json"));
  	        StringBuilder sb = new StringBuilder();
  	        String line = br.readLine();
  	        while (line != null) {
  	            sb.append(line);
  	            line = br.readLine();
  	        }
  	        result = sb.toString();
        	JSONObject job = new JSONObject(result);
          
            System.out.println("name: " + job.getString("name"));
            
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
