package service.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.beanset.DocumentAcessData;
import layout.bean.productfac.beanset.DocumentHisAcessData;
import layout.bean.productfac.coverage.Document;
import layout.bean.productfac.lookup.Document_type;
import layout.bean.productfac.lookup.File;
import service.fnc.ConstantValues;
import service.fnc.RteResult;
/**
 * 
 * @author Nara : 26-02-2019
 *          mod : 07-08-2019
 *
 */
public class PolicyWordingControlData extends RteResult
{	
	public ArrayList<Document_type> searchlookupPolicyWording() throws Exception
	{
		setVal(RTE_PATH+".lookup.RteSearchPolicyWording", new Object[] {"VAL1"});
		return  (ArrayList<Document_type>)executeResult().value();
	}
	
	public ArrayList<Document_type> searchlookupPolicyWordingByCovCode() throws Exception
	{
		setVal(RTE_PATH+".lookup.RteSearchPolicyWording", new Object[] {"VAL3",ConstantValues.COV_CODE});
		return  (ArrayList<Document_type>)executeResult().value();
	}
	
	public ArrayList<File> searchPolicyWordingFileType(int file_type_id) throws Exception
	{
		setVal(RTE_PATH+".lookup.RteSearchPolicyWording",new Object[] {"VAL2",ConstantValues.COV_CODE,file_type_id});
		return  (ArrayList<File>)executeResult().value();
	}
	
	public ArrayList<DocumentAcessData> searchPolicyWording() throws Exception
	{
		setVal(RTE_PATH+".coverage.RteDocumentAccessData",new Object[] { "VAL1",ConstantValues.COV_CODE});;
		return (ArrayList<DocumentAcessData>)executeResult().value();
	}
	///BEnz 29-08-2019 --product
	public ArrayList<DocumentAcessData> searchPolicyWordingByCovCode(String cov_code) throws Exception
	{
		setVal(RTE_PATH+".coverage.RteDocumentAccessData", new Object[] { "VAL1", cov_code});
		return (ArrayList<DocumentAcessData>)executeResult().value();
	}
	/**
	 * 
	 * @param doc_type_id : Type of PolcyWoding
	 * @param file_type : 1 = DOC, 2 = PDF, 3 = TXT
	 * @return ArrayList<lookup.File>
	 * @throws Exception
	 */
	public ArrayList<File> searchPolicyWordingHistoryFile(int doc_type_id,int file_type) throws Exception
	{
		setVal(RTE_PATH+".coverage.RteSearchPolicyWording",new Object[] { "VAL1",ConstantValues.COV_CODE,doc_type_id,file_type});
		return (ArrayList<File>)executeResult().value();
	}
	
	public ArrayList<DocumentHisAcessData> searchPolicyWordingHistory(int doc_type_id) throws Exception
	{
		setVal(RTE_PATH+".coverage.RteSearchPolicyWording",new Object[] { "VAL2",ConstantValues.COV_CODE,doc_type_id});
		return (ArrayList<DocumentHisAcessData>)executeResult().value();
	}
	
	public void doPolcyWording(ArrayList<Document> listDocument) throws Exception
	{
		setVal(RTE_PATH+".coverage.RtePolicyWording", new Object[] { "VAL1",ConstantValues.COV_CODE,ConstantValues.USER_CODE,listDocument});
		saveDataResult();
	}
	
	public void clonePolcyWording(ArrayList<DocumentAcessData> listClone) throws Exception
	{
		setVal(RTE_PATH+".coverage.RteClonePolicyWording", new Object[] {listClone});
		saveDataResult();
	}
}
