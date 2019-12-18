package service.fnc;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.RandomAccessFile;
import java.util.ArrayList;

import utility.support.DateInfo;

public class LogsTrack
{
	public static void main(String[] args) throws Exception
	{
		new LogsTrack("A0001").filesTrack();
	}

	private String cov_code;

	public LogsTrack(String cov_code)
	{
		this.cov_code = cov_code;
	}

	private final String PATH = "/home/tleuser/Desktop/";//System.getProperty("user.home") + "/";

	private void filesTrack() throws Exception 
	{
		try {
			String filePath = PATH+"test.properties"; //+ cov_code + ".csv";
			File file = new File(filePath);
			if (file.isFile())
				setTrack(file);
			else
				createFileTrack();
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
	}

	private void setTrack(File file) throws Exception
	{
		ArrayList<String> listReadStr = readFile(file);
		FileWriter fw = new FileWriter(file);
		BufferedWriter bw = new BufferedWriter(fw);
		for(String w : listReadStr)
		{
			bw.write(w);
			bw.newLine();
		}
		for (int i = 0; i < 10; i++) {
			bw.write("value"+i+"="+DateInfo.sysDate()+":"+DateInfo.sysTime(0));
			//bw.write(Math.random()+",NEW,"+DateInfo.sysDate()+":"+DateInfo.sysTime(0));
			bw.newLine();			
		}
		bw.close();
		fw.close();
		System.out.println(file.getPath());
		System.out.println("-------------------------------------------");
		readFile(file);

	}

	private ArrayList<String> readFile(File file) throws Exception
	{
		ArrayList<String> list = new ArrayList<>();
		RandomAccessFile reader = new RandomAccessFile(file, "r");
		String currentLine = "";
		while ((currentLine = reader.readLine()) != null) {
			System.out.println(currentLine);
			list.add(currentLine);
		}
		reader.close();
		return list;
	}

	private void createFileTrack() throws Exception
	{
		int list = 1;
		try {
			File file = new File(PATH,"test.properties");
			FileWriter fw = new FileWriter(file);
			BufferedWriter bw = new BufferedWriter(fw);
			bw.write("USER,INPROCESS,TIMESTAMP");
			bw.newLine();
			bw.close();
			fw.close();

		} catch (Exception e) {
			System.out.println("createFileTrack Exception " + e.getMessage());
		}
	}

}
