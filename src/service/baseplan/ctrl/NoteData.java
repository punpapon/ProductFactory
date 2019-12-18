package service.baseplan.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.coverage.Note;
import manit.rte.Result;
import service.fnc.RtePath;
import service.fnc.RteResult;
import service.fnc.StatusCodeType;
public class NoteData 
{
	private RteResult rteResult;
    private final String RTE_PATH  = RtePath.RTE.getValue(); 
    
	public ArrayList<Note> searchCoverageNote(String cov_code) throws Exception 
	{
		Object [] param = new Object [] {"CON",new String[] {cov_code}};
		this.rteResult = new RteResult( RTE_PATH+".imp."+"RteNoteS", param);
		Result result = rteResult.searchValuesResultData();
		return (ArrayList<Note>)result.value();
	}
	
	public void insertNote(ArrayList<Note> listNote) throws Exception 
	{
		boolean status = true;
		try {
			Object [] param = new Object [] {listNote}; 
			this.rteResult = new RteResult(RTE_PATH+".imp."+"RteNote", param);
			rteResult.saveData();
		} catch (Exception e) {
			status = false;
			throw e;
		}
		System.out.println("status >>> "+status);
	}
}
