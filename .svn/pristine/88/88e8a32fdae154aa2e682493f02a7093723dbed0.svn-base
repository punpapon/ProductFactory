package service.underwrite.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.beanset.AppendixSumAccumAccessData;
import layout.bean.productfac.beanset.AppendixVersionALLAccessData;
import layout.bean.productfac.beanset.ParticipantAccessData;
import layout.bean.productfac.lookup.View_appendix_product;
import layout.bean.productfac.underwrite.Appendix_version;
import layout.bean.productfac.underwrite.Med_exam;
import layout.bean.productfac.underwrite.Policy_status_accum;
import layout.bean.productfac.underwrite.Txn_appendix_version;
import layout.bean.productfac.underwrite.Txn_policy_status_accum;
import layout.bean.productfac.underwrite.Txn_underwrite;
import service.ctrl.ParticipantData;
import service.underwrite.AppendixSumAccumAccessDataService;
import service.underwrite.AppendixVersionAccessData;
import service.underwrite.MedExamAccessData;
import service.underwrite.PolicyStatusAccumAccessData;
import layout.bean.productfac.beanset.TxnALLAccessData;
import service.underwrite.TxnUnderwriteAccessData;

public class MainUnderWriteService 
{
	
	///UW MedExam
		public ArrayList<Med_exam> getCaseMedExam (String case_type) throws Exception {
			
			MedExamAccessData mir = new MedExamAccessData(case_type);
			ArrayList<Med_exam> datareturn = null ;
			try {
				datareturn = mir.getListMedExam();
			} catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
			}
			System.out.println(datareturn);
			return datareturn;
		}
		
		public ArrayList getCaseMedExamST (String case_type) throws Exception {
			MedExamAccessData mir = new MedExamAccessData(case_type,"");
			ArrayList<Object> datareturn = null ;
			try {
				datareturn = mir.getListMedExamST();
			} catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
			}
			return datareturn;
		}
		public ArrayList getCaseMedExamSTKey (String case_type,String key) throws Exception {
			MedExamAccessData mir = new MedExamAccessData(case_type,key);
			ArrayList<Object> datareturn = null ;
			try {
				datareturn = mir.getListMedExamST();
			} catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
			}
			return datareturn;
		}
		public ArrayList<Med_exam> getCaseMedExamGroup (String case_type) throws Exception {
			MedExamAccessData mir = new MedExamAccessData(case_type,"","");
			ArrayList<Med_exam> datareturn = null ;
			try {
				datareturn = mir.getListMedExam();
			} catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
			}
			return datareturn;
		}
		public ArrayList<Med_exam> getCaseMaxMedExamGroup (String case_type) throws Exception {
			MedExamAccessData mir = new MedExamAccessData("MAX","","");
			ArrayList<Med_exam> datareturn = null ;
			try {
				datareturn = mir.getListMedExam();
			} catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
			}
			return datareturn;
		}
		public ArrayList<Med_exam> getCaseMedExamGroupDetail (String case_type) throws Exception {
			MedExamAccessData mir = new MedExamAccessData(case_type,"","","");
			ArrayList<Med_exam> datareturn = null ;
			try {
				datareturn = mir.getListMedExam();
			} catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
			}
			return datareturn;
		}
		public ArrayList<Med_exam> getCaseMedExamBlood (String case_type) throws Exception {
			MedExamAccessData mir = new MedExamAccessData(case_type,"","","","");
			ArrayList<Med_exam> datareturn = null ;
			try {
				datareturn = mir.getListMedExam();
			} catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
			}
			return datareturn;
		}
		public ArrayList<Med_exam> getCaseMedExamNotBlood (String case_type) throws Exception {
			MedExamAccessData mir = new MedExamAccessData(case_type,"","","","","");
			ArrayList<Med_exam> datareturn = null ;
			try {
				datareturn = mir.getListMedExam();
			} catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
			}
			return datareturn;
		}
		public ArrayList getAppendixVersionST (String case_type,String Appendix_code) throws Exception {
			AppendixVersionAccessData mir = new AppendixVersionAccessData(case_type,Appendix_code);
			ArrayList<Object> datareturn = null ;
			
			try {
				
				datareturn = mir.getListST();
				
			} catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
			}
			return datareturn;
		}
		
		public ArrayList getAppendixVersionST (String case_type,String Appendix_code,String Version_id) throws Exception {
			AppendixVersionAccessData mir = new AppendixVersionAccessData(case_type,Appendix_code,Version_id);
			ArrayList<Object> datareturn = null ;
			
			try {
				
				datareturn = mir.getListST();
				
			} catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
			}
			return datareturn;
		}
		public ArrayList getAppendixVersionSTBEAN (String case_type,String Appendix_code,String Version_id) throws Exception {
			AppendixVersionAccessData mir = new AppendixVersionAccessData(case_type,Appendix_code,Version_id);
			ArrayList<Appendix_version> datareturn = null ;
			
			try {
				
				datareturn = mir.getListMedExam();
				
			} catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
			}
			return datareturn;
		}
		public ArrayList getAppendixVersionSTBEANTxn (String case_type,String Appendix_code,String Version_id) throws Exception {
			AppendixVersionAccessData mir = new AppendixVersionAccessData(case_type,Appendix_code,Version_id);
			ArrayList<Txn_appendix_version> datareturn = null ;
			
			try {
				
				datareturn = mir.getListMedExamTxn();
				
			} catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
			}
			return datareturn;
		}
		public ArrayList getFilter (String case_type,String Appendix_code,String Version_id) throws Exception {
			AppendixVersionAccessData mir = new AppendixVersionAccessData(case_type,Appendix_code,Version_id);
			
			ArrayList<View_appendix_product> datareturn = null ;
			try {
				
					datareturn=mir.getListFilter();
				
			} catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
			}
			return datareturn;
		}
		public ArrayList getFilter (String case_type,String Appendix_code,String Version_id,String Txn_id) throws Exception {
			AppendixVersionAccessData mir = new AppendixVersionAccessData(case_type,Appendix_code,Version_id,Txn_id);
			
			ArrayList<View_appendix_product> datareturn = null ;
			try {
				
					datareturn=mir.getListFilter();
				
			} catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
			}
			return datareturn;
		}
		public ArrayList getAppendixProduct (String case_type) throws Exception {
			AppendixVersionAccessData mir = new AppendixVersionAccessData(case_type,"");
			ArrayList<Appendix_version> datareturn = null ;
			try {
				datareturn = mir.getListMedExam();
			} catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
			}
			return datareturn;
		}
		public ArrayList getView_appendix_product (String Appendix_code
				,String Version_id
				,String channal_code
				,String partner_code
				,String cov_cat_id
				,String txn_id
				) throws Exception {
			AppendixVersionAccessData mir = new AppendixVersionAccessData("",Appendix_code,Version_id,channal_code,partner_code,cov_cat_id,txn_id);
			ArrayList<View_appendix_product> datareturn = null ;
			try {
				datareturn = mir.getListFilter();
			} catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
			}
			return datareturn;
		}
		public ArrayList getView_appendix_product (String Appendix_code
				,String Version_id
				,String channal_code
				,String partner_code
				,String cov_cat_id
			
				) throws Exception {
			AppendixVersionAccessData mir = new AppendixVersionAccessData("",Appendix_code,Version_id,channal_code,partner_code,cov_cat_id);
			ArrayList<View_appendix_product> datareturn = null ;
			try {
				datareturn = mir.getListFilter();
			} catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
			}
			return datareturn;
		}
		public ArrayList getView_appendix_product_not_Txn_id (String Appendix_code
				,String Version_id
				,String channal_code
				,String partner_code
				,String cov_cat_id
				,String txn_id
				) throws Exception {
			AppendixVersionAccessData mir = new AppendixVersionAccessData(txn_id,Appendix_code,Version_id,channal_code,partner_code,cov_cat_id);
			ArrayList<View_appendix_product> datareturn = null ;
			try {
				datareturn = mir.getListFilter();
			} catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
			}
			return datareturn;
		}
		public ArrayList getAppendixSumAccum (String case_type) throws Exception {
			AppendixSumAccumAccessDataService mir = new AppendixSumAccumAccessDataService(case_type);
			ArrayList<AppendixSumAccumAccessDataService> datareturn = null ;
			try {
				datareturn = mir.getListThis();
			} catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
			}
			return datareturn;
		}

		public ArrayList<Policy_status_accum> getPolicyStatusAccum(String case_type) throws Exception {
			PolicyStatusAccumAccessData mir = new PolicyStatusAccumAccessData(case_type);
			ArrayList<Policy_status_accum> datareturn = null ;
			try {
				datareturn = mir.getList();
			} catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
			}
			return datareturn;
		}
		public ArrayList<Txn_policy_status_accum> getPolicyStatusAccumTxn(String case_type) throws Exception {
			PolicyStatusAccumAccessData mir = new PolicyStatusAccumAccessData(case_type,"");
			ArrayList<Txn_policy_status_accum> datareturn = null ;
			try {
				datareturn = mir.getListTxn();
			} catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
			}
			return datareturn;
		}
		public ArrayList<AppendixVersionALLAccessData> searchAppendixVersionALL(String Appendix_code,int Version_id) throws Exception
		{
			
			AppendixVersionALLControlData mir2 = new AppendixVersionALLControlData();
			ArrayList<AppendixVersionALLAccessData> datareturn = null ;
			try {
				datareturn = mir2.search(Appendix_code,Version_id);
			} catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
			}
			return datareturn;
		}
		public ArrayList<TxnALLAccessData> searchTxnALL(String Appendix_code,int Version_id) throws Exception
		{
			
			TxnALLControlData mir2 = new TxnALLControlData();
			ArrayList<TxnALLAccessData> datareturn = null ;
			try {
				datareturn = mir2.search(Appendix_code,Version_id);
			} catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
			}
			return datareturn;
		}
		public ArrayList<TxnALLAccessData> searchTxnApproveALL(String a,int Txn_id) throws Exception
		{
			
			TxnALLControlData mir2 = new TxnALLControlData();
			ArrayList<TxnALLAccessData> datareturn = null ;
			try {
				datareturn = mir2.searchTxnApprove("",Txn_id);
			} catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
			}
			return datareturn;
		}
		public ArrayList<Txn_underwrite> getTxn_underwrite(String case_type) throws Exception {
			TxnUnderwriteAccessData mir = new TxnUnderwriteAccessData(case_type);
			ArrayList<Txn_underwrite> datareturn = null ;
			try {
				datareturn = mir.getList();
			} catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
			}
			return datareturn;
		}
		public ArrayList<Txn_underwrite> getTxn_underwrite(String case_type,int Txn_id) throws Exception {
			TxnUnderwriteAccessData mir = new TxnUnderwriteAccessData(case_type);
			ArrayList<Txn_underwrite> datareturn = null ;
			try {
				datareturn = mir.getList();
			} catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
			}
			return datareturn;
		}
		private void setListAppendixVersionALLAccessData(ArrayList<AppendixSumAccumAccessData> search) {
			this.listParticipantData= search;
			// TODO Auto-generated method stub
			
		}

		private ArrayList<AppendixSumAccumAccessData> listParticipantData;
		public ArrayList<AppendixSumAccumAccessData> getListAppendixVersionALLAccessData()
		{
			return listParticipantData;
		}
		
}