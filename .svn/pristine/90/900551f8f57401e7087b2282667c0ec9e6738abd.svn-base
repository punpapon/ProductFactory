package service.underwrite;

import java.util.ArrayList;

import layout.bean.productfac.lookup.View_appendix_product;
import layout.bean.productfac.underwrite.Appendix_version;
import layout.bean.productfac.underwrite.Med_exam;
import layout.bean.productfac.underwrite.Txn_appendix_version;
import service.underwrite.ctrl.AppendixVersionData;
import service.underwrite.ctrl.MedExamData;

public class AppendixVersionAccessData {
	private ArrayList<Appendix_version> listMedExam;
	private ArrayList<Txn_appendix_version> listMedExamTxn;
	private ArrayList<Object> listMedExamST;
	private ArrayList<View_appendix_product> listFilterST;

	public AppendixVersionAccessData(String case_type) throws Exception {
		searchCaseMedExam(case_type);
	}

	public AppendixVersionAccessData(String case_type, String Appendix_code) throws Exception {
		if (case_type.equals("P")) {
			searchCaseST2(case_type);
		} else if (case_type.equals("P_V02")) {
			searchCaseST3(case_type);
		} else if (case_type.equals("MAX")) {
			searchCaseST4(case_type);
		} else if (case_type.equals("F")) {
			searchCaseFilterST(case_type, Appendix_code,"");
		} else if (case_type.compareTo("GetProduct")==0) {
			//searchProductST(case_type);
		} else {
			searchCaseST(case_type);
		}
	}
	public AppendixVersionAccessData(String case_type
			, String Appendix_code
			, String Version_id
			, String channal_code
			, String partner_code
			, String cov_cat_id
			) throws Exception {
		
		AppendixVersionData medExamData = new AppendixVersionData();
		setListFilterST(medExamData.searchAppendixVersionProductST(new String[] {Appendix_code,Version_id,channal_code,partner_code,cov_cat_id,case_type}));
		
	}
	public AppendixVersionAccessData(String case_type
			, String Appendix_code
			, String Version_id
			, String channal_code
			, String partner_code
			, String cov_cat_id
			,String Txn_id
			) throws Exception {
		
		AppendixVersionData medExamData = new AppendixVersionData();
		setListFilterST(medExamData.searchAppendixVersionProductTxn_id(new String[] {Appendix_code,Version_id,channal_code,partner_code,cov_cat_id,Txn_id}));
		
	}
	public AppendixVersionAccessData(String case_type, String case2, String case3) throws Exception {
		if (case_type.equals("F")) {
			searchCaseFilterST(case_type, case2,case3);
		} else if (case_type.equals("APPENDIX")) {
			searchCaseST(case2,case3);
		} else if (case_type.equals("APPENDIXBEAN")) {
			searchCaseSTBEAN(case2,case3);
		} else if (case_type.equals("APPENDIXBEANTxn")) {
			searchCaseSTBEANTxn(case2,case3);
		} else if (case_type.equals("KEY")) {
			searchCaseSTKEY(case2,case3);
		} else if (case_type.equals("MAX")) {
			searchCaseSTMAX(case2,case3);
		} else if (case_type.equals("MaxExamGroupCode")) {
			searchCaseSTMAX();
		} else {
			searchCaseMedExamGroup(case_type);
		}

	}

	public AppendixVersionAccessData(String case_type, String case2, String case3, String case4) throws Exception {
		if (case_type.equals("F")) {
			searchCaseFilterST2(case_type, case2,case3,case4);
		}else {
			searchCaseMedExamGroupDetail(case_type);
		}
	}

	public AppendixVersionAccessData(String case_type, String case2, String case3, String case4, String case5)
			throws Exception {
		searchCaseMedExamBlood(case_type);
	}

	private void searchCaseMedExam(String case_type) throws Exception {
		AppendixVersionData medExamData = new AppendixVersionData();
		setListMedExam(medExamData.searchMedExam(case_type));
	}

	private void setListMedExam(ArrayList<Appendix_version> listdata) {
		this.listMedExam = listdata;
	}
	private void setListMedExamTxn(ArrayList<Txn_appendix_version> listdata) {
		this.listMedExamTxn = listdata;
	}
	private void setListMedExamST(ArrayList<Object> listdata) {
		this.listMedExamST = listdata;
	}

	private void setListFilterST(ArrayList<View_appendix_product> listdata) {
		this.listFilterST = listdata;
	}

	/**
	 * 
	 * @return ArrayList<Coverage : list Bean set Coverage
	 */
	public ArrayList<Appendix_version> getListMedExam() {
		return listMedExam;
	}
	public ArrayList<Txn_appendix_version> getListMedExamTxn() {
		return listMedExamTxn;
	}
	public ArrayList<Object> getListST() {
		return listMedExamST;
	}

	public ArrayList<View_appendix_product> getListFilter() {
		return listFilterST;
	}

	private void searchCaseST(String case_type) throws Exception {
		AppendixVersionData medExamData = new AppendixVersionData();
		setListMedExamST(medExamData.searchAppendixVersionST(case_type));

	}
	private void searchCaseST(String ap_code,String Ver_id) throws Exception {
		AppendixVersionData medExamData = new AppendixVersionData();
		setListMedExamST(medExamData.searchAppendixVersionST2(ap_code,Ver_id));

	}
	private void searchCaseSTBEAN(String ap_code,String Ver_id) throws Exception {
		AppendixVersionData medExamData = new AppendixVersionData();
		setListMedExam(medExamData.searchAppendixVersionST2BEAN(ap_code,Ver_id));

	}
	private void searchCaseSTBEANTxn(String ap_code,String Ver_id) throws Exception {
		AppendixVersionData medExamData = new AppendixVersionData();
		setListMedExamTxn(medExamData.searchAppendixVersionST2BEANTxn(ap_code,Ver_id));

	}
	private void searchCaseSTKEY(String ap_code,String Ver_id) throws Exception {
		AppendixVersionData medExamData = new AppendixVersionData();
		setListMedExamST(medExamData.searchAppendixVersionST2KEY(ap_code,Ver_id));

	}
	private void searchCaseSTMAX(String ap_code,String Ver_id) throws Exception {
		AppendixVersionData medExamData = new AppendixVersionData();
		setListMedExamST(medExamData.searchAppendixVersionST2MAX(ap_code,Ver_id));

	}
	private void searchCaseSTMAX() throws Exception {
		AppendixVersionData medExamData = new AppendixVersionData();
		setListMedExamST(medExamData.searchAppendixVersionST2MAX());

	}
	private void searchCaseFilterST(String case_type, String Appendix_code,String Version_id) throws Exception {
		AppendixVersionData medExamData = new AppendixVersionData();
		setListFilterST(medExamData.searchFilterST2(case_type, Appendix_code,Version_id));

	}
	private void searchCaseFilterST2(String case_type, String Appendix_code,String Version_id,String Txn_id) throws Exception {
		AppendixVersionData medExamData = new AppendixVersionData();
		setListFilterST(medExamData.searchFilterST3(case_type, Appendix_code,Version_id,Txn_id));

	}
	private void searchProductST(String case_type, String Appendix_code,String Version_id) throws Exception {
		AppendixVersionData medExamData = new AppendixVersionData();
		setListFilterST(medExamData.searchFilterST2(case_type, Appendix_code,Version_id));

	}
	private void searchCaseST2(String case_type) throws Exception {
		AppendixVersionData medExamData = new AppendixVersionData();
		setListMedExam(medExamData.searchAppendixVersionPD(case_type));

	}
	private void searchCaseST3(String case_type) throws Exception {
		AppendixVersionData medExamData = new AppendixVersionData();
		setListMedExam(medExamData.searchAppendixVersionPDV02(case_type));

	}
	private void searchCaseST4(String case_type) throws Exception {
		AppendixVersionData medExamData = new AppendixVersionData();
		setListMedExam(medExamData.searchAppendixVersionMax(case_type));

	}
	private void searchCaseMedExamGroup(String case_type) throws Exception {
		AppendixVersionData medExamData = new AppendixVersionData();
		setListMedExam(medExamData.searchMedExamGroup(case_type));

	}

	private void searchCaseMedExamGroupDetail(String case_type) throws Exception {
		AppendixVersionData medExamData = new AppendixVersionData();
		setListMedExam(medExamData.searchMedExamGroupDetail(case_type));

	}

	private void searchCaseMedExamBlood(String case_type) throws Exception {
		AppendixVersionData medExamData = new AppendixVersionData();
		setListMedExam(medExamData.searchMedExamBlood(case_type));

	}
}
