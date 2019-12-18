package service.center;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.util.Arrays;
import java.util.List;


import com.tlafc.UtilityAfc;

import manit.M;
/**
 * For upload Document ProductFactory to Alfresco System
 * @author Nara 
 *         Create : 17-08-2018
 *
 */
public class Uploadfile
{
	private String	refFile;
	private byte[] byteFile;
	private String fileName;
	private String path;
	
	public Uploadfile() {}
	public Uploadfile(String file_path) throws Exception
	{
		setByteFile(readByteFromFile(new File(file_path)));
	}
	public Uploadfile(byte[] bsFile,String fileName)
	{
		setFileName(fileName);
		setByteFile(bsFile);
	}
	private void setByteFile(byte[] bsFile)
	{
		this.byteFile = bsFile;
	}
	public byte[] getByteFile()
	{
		return byteFile;
	}
	public Uploadfile(File file) throws Exception
	{
		setFileName(file.getName());
		setByteFile(readByteFromFile(file));
	}
	
	/**
	 * UtilityAfcUnW afc = new UtilityAfcUnW();
	 * @parameter for upload : 
	 *            List<String> list = afc.uploadfile("ProductFactory","root_folder", "sub_folder","filename", bsFile);
	 * @param file
	 * @param rootfolder
	 * @param sub_folder if sub_folder.isEmpty so file under root_folder
	 */
	public void uploadFile(String root_folder,String sub_folder) throws Exception
	{
		System.out.println("Start uploadFile >>> .... ");
		try {
			UtilityAfc utilityAfc = new UtilityAfc();
			String[] fileName = getFileName().split("[.]");
			List<String> resutl = utilityAfc.uploadfile("ProductFactory", root_folder , sub_folder, fileName[0] , getByteFile());
			printResult(resutl);
			if(resutl.isEmpty() || resutl.size() < 1)
				throw new Exception("Can not Upload File");
			setRefFile(resutl.get(resutl.size()-1));
			System.out.println("ref file >>> "+getRefFile());
	        if(M.cmps(resutl.get(0), "200") != 0)
	        	throw new Exception("Can not Upload File "+"status "+resutl.get(0)+" Result in :"+resutl.get(resutl.size()-1));
			} catch (Exception e) {
				System.out.println(e.getMessage());
				throw e;
		}
	}

	/**
	 * 
	 * @param value : example name file :  workspace://SpacesStore/2256d537-3d4e-4b2b-9111-bfa5f1c02223
	 * @throws Exception
	 */
	public void downloadFile(String value) throws Exception
	{
		System.out.println("Start downloadFile >>> ... ");
		try
		{
			UtilityAfc utilityAfc = new UtilityAfc();
			String tmp_path = getTmpPath();
			System.out.println("tmp_path >>> "+tmp_path);
			File file = new File(tmp_path);//chooser();
			List<String> resutl = utilityAfc.downloadFileWithNodeRef("ProductFactory",value, file.getPath()+"/");
			printResult(resutl);
			if(resutl.isEmpty() || resutl.size() < 1)
				throw new Exception("Can not Download File");
			setPath(resutl.get(resutl.size()-1));
			 if(M.cmps(resutl.get(0), "200") != 0)
		        throw new Exception("Can not Download File "+"status "+resutl.get(0)+" Result in : "+resutl.get(1));
		} catch (Exception e)
		{
			System.out.println(e.getMessage());
			throw e;
		}
	}
	
	private void printResult(List<String> resutl) throws Exception
	{
		//System.out.println(Arrays.asList(resutl));
		for(String s : resutl)
			System.out.println(Arrays.asList(s));
		
	}
	private void setRefFile(String refFile)
	{
		this.refFile = refFile;
	}
    
	public String getRefFile()
	{
		return refFile;
	}
	
	public byte[] readByteFromFile(File file)  throws Exception
    {
		FileInputStream fileInputStram = null;
	    byte[] bytesArray = null;
	    try {
	    	setFileName(file.getName());
	    	bytesArray = new byte[(int)file.length()];
	    	fileInputStram = new FileInputStream(file);
	    	fileInputStram.read(bytesArray);
	    } catch (Exception e) {
	    	throw e;
	    } finally  {
	    	if (fileInputStram != null)
	    		fileInputStram.close();
	    }
	    return bytesArray;
	}
	
	private void setFileName(String fileName)
	{
		this.fileName = fileName;
	}
	
	public String getFileName()
	{
		return fileName;
	}
	public File convertUsingOutputStream(byte[] fileBytes,String file_name) throws Exception
	{
	    //File f = new File("C:\\Users\\user\\Desktop\\output\\myfile.pdf");
		String tmp_path = getTmpPath();
		System.out.println("tmp_path >>> "+tmp_path);
		File f = new File(tmp_path+file_name);
	    try (FileOutputStream fos = new FileOutputStream(f)) {
	        fos.write(fileBytes);
	    }
	    catch(Exception ex)
	    {
	    	ex.printStackTrace();
	    	throw ex;
	    }
	    return f;
	}

	private void setPath(String path)
	{
		this.path = path;
	}
	
	public String getPath()
	{
		return path;
	}
	
	
	private String getTmpPath()
	{
		 String os = System.getProperty("os.name");;
		 if(os.toLowerCase().startsWith("windows"))
			 return System.getProperty("java.io.tmpdir")+"\\"; /*"C:\\";*/ 
		 return System.getProperty("java.io.tmpdir")+"/";
	}
	
	/*private File chooser() throws Exception
	{
		String filePath = "";
		JFileChooser fileOpen = new JFileChooser();
		FileNameExtensionFilter filter = new FileNameExtensionFilter("only file .pdf,.jpg ,.jpeg, .png", "pdf", "jpg","jpeg","png");
		fileOpen.addChoosableFileFilter(filter);
		fileOpen.setMultiSelectionEnabled(false);
		int ret = fileOpen.showDialog(null, "Choose file");
		if (ret == JFileChooser.APPROVE_OPTION)
			filePath = fileOpen.getSelectedFile().toString();
		File file = new File(filePath);
		
		if(!okFileType(file.getName()))
		{
			Msg.msg(view, "รูปแแบบไฟล์ไม่ถูกต้อง ชื่อไฟล์มีช่องว่าง ");
			return null;
		}
		if(!okFile(file.getName()))
		{
			Msg.msg(view, "รูปแแบบไฟล์ไม่ถูกต้อง เฉพาะไฟล์ .jpg, .jpeg, .png และ .pdf เท่านั้น ");
			return null;
		}
		return file;
	}*/
	
	public static void main(String[] args)
	{
		try {
			//Uploadfile uploadfile = new Uploadfile("/home/tleuser/Pictures/error.png");
			//File file = uploadfile.chooser();//new File("/home/tleuser/Pictures/mbuntu-1.png");
			//uploadfile.uploadFile("PolicyWording", "Test");
			new Uploadfile().downloadFile("workspace://SpacesStore/2ff8747e-4b37-4f6c-8d27-8b4a55044ceb");
            
			//System.out.println(M.cmps("200","200"));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
