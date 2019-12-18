package service.clone;

import java.util.ArrayList;

import layout.bean.productfac.coverage.Note;
import service.baseplan.ctrl.NoteData;
import service.fnc.ConstantValues;
import service.fnc.PDFFnc;


public class CloneCoverageNote extends NoteData{

	public void cloneCoverageMode(String cov_code_old,String cov_code_new) {
		try {
			ArrayList<Note> lstNote = searchCoverageNote(cov_code_old);
			ArrayList<Note> lstResultNote = new ArrayList<>();
			for (Note note : lstNote) {
				note.setCov_code(cov_code_new);
				note.setUser_code(ConstantValues.USER_CODE);
				note.setUpdate_time(PDFFnc.currentTimeStamp());
				lstResultNote.add(note);
			}
			if(lstResultNote.size() > 0) {
				insertNote(lstResultNote);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
