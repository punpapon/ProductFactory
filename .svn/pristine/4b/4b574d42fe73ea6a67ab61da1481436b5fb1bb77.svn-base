package service.underwrite;

import java.util.ArrayList;

import layout.bean.productfac.underwrite.Appendix;
import layout.bean.productfac.underwrite.Appendix_age_range;
import layout.bean.productfac.underwrite.Appendix_agent_tier;
import layout.bean.productfac.underwrite.Appendix_exam;
import layout.bean.productfac.underwrite.Appendix_sum_range;
import layout.bean.productfac.underwrite.Appendix_version;
import layout.bean.productfac.underwrite.Med_exam;
import layout.bean.productfac.underwrite.Med_exam_group;
import layout.bean.productfac.underwrite.Med_exam_rate;
import layout.bean.productfac.underwrite.Txn_appendix_version;
import layout.bean.productfac.underwrite.Txn_med_exam;
import service.underwrite.ctrl.AppenDixControlData;
import service.underwrite.ctrl.MedExamControlData;

public class MedExamAccessData {
	private ArrayList<Med_exam> listMedExam;
	private ArrayList<Object> listMedExamST;
	public MedExamAccessData() {} 
		public MedExamAccessData(String case_type) throws Exception
		{
			searchCaseMedExam(case_type);
		}
		public MedExamAccessData(String case_type,String case2) throws Exception
		{
			if(case2==null?false:case2.length()>0) {
				searchCaseMedExamSTKey(case_type,case2);
			}else {
				searchCaseMedExamST(case_type);
			}
			
		}
		public MedExamAccessData(String case_type,String case2,String case3) throws Exception
		{	if(case_type=="MAX") {
				searchCaseMaxMedExamGroup(case_type);	
			}else {
				searchCaseMedExamGroup(case_type);
			}
			
		}
		public MedExamAccessData(String case_type,String case2,String case3,String case4) throws Exception
		{
			searchCaseMedExamGroupDetail(case_type);
		}
		public MedExamAccessData(String case_type,String case2,String case3,String case4,String case5) throws Exception
		{
			searchCaseMedExamBlood(case_type);
		}
		public MedExamAccessData(String case_type,String case2,String case3,String case4,String case5,String s6) throws Exception
		{
			searchCaseMedExamNotBlood(case_type);
		}
		private void searchCaseMedExam(String case_type) throws Exception
		{
			MedExamControlData medExamData = new MedExamControlData();
			setListMedExam(medExamData.searchMedExam(case_type));
		}

		private void setListMedExam(ArrayList<Med_exam> listdata) 
		{ 
			this.listMedExam = listdata;	
		}
		private void setListMedExamST(ArrayList<Object> listdata) 
		{ 
			this.listMedExamST = listdata;	
			for (int i = 0; i < listdata.size(); i++) {
//				Object[] obj = (Object[]) listdata.get(i);
//				int j=0;
//				System.out.println("-------listdata/"+obj[j]);
//				System.out.println("-------listdata/"+obj[7]);
//				System.out.println("-------listdata/"+obj[8]);
//				System.out.println("-------listdata/"+obj[9]);
			}
		}
		/**
		 * 
		 * @return ArrayList<Coverage : list Bean set Coverage
		 */
		public ArrayList<Med_exam> getListMedExam() 
		{
			return listMedExam;
		}
		public ArrayList<Object> getListMedExamST() 
		{
			return listMedExamST;
		}
		private void searchCaseMedExamST(String case_type) throws Exception
		{
			MedExamControlData medExamData = new MedExamControlData();
			setListMedExamST(medExamData.searchMedExamST(case_type));

		}
		private void searchCaseMedExamSTKey(String case_type,String key) throws Exception
		{
			MedExamControlData medExamData = new MedExamControlData();
			if(key==null?false:key.length()>0) {
				setListMedExamST(medExamData.searchMedExamSTKey(case_type,key));
			}else {
				setListMedExamST(medExamData.searchMedExamST(case_type));
			}
			

		}
		private void searchCaseMedExamGroup(String case_type) throws Exception
		{
			MedExamControlData medExamData = new MedExamControlData();
			setListMedExam(medExamData.searchMedExamGroup(case_type));

		}
		private void searchCaseMaxMedExamGroup(String case_type) throws Exception
		{
			MedExamControlData medExamData = new MedExamControlData();
			setListMedExam(medExamData.searchMaxMedExamGroup(case_type));

		}
		private void searchCaseMedExamGroupDetail(String case_type) throws Exception
		{
			MedExamControlData medExamData = new MedExamControlData();
			setListMedExam(medExamData.searchMedExamGroupDetail(case_type));

		}
		private void searchCaseMedExamBlood(String case_type) throws Exception
		{
			MedExamControlData medExamData = new MedExamControlData();
			setListMedExam(medExamData.searchMedExamBlood(case_type));

		}
		private void searchCaseMedExamNotBlood(String case_type) throws Exception
		{
			MedExamControlData medExamData = new MedExamControlData();
			setListMedExam(medExamData.searchMedExamNotBlood(case_type));

		}
		public void doMedExam(ArrayList<Med_exam> Med_exam) throws Exception
		{
			System.out.println("doMed_exam >>> ");
			MedExamControlData noteData = new MedExamControlData();
			noteData.insertMedexam(Med_exam);
		}
		public void doMedExamAll(ArrayList<Med_exam> Med_exam,ArrayList<Med_exam_rate> Med_exam_rate) throws Exception
		{
			System.out.println("doMed_exam ALL>>> ");
			MedExamControlData noteData = new MedExamControlData();
			noteData.insertMedexam(Med_exam);
			noteData.insertMedexamRate(Med_exam_rate);
		}
		public void doMedExamAllTxn(ArrayList<Txn_med_exam> Med_exam,ArrayList<Med_exam_rate> Med_exam_rate) throws Exception
		{
			System.out.println("doTxn_med_exam ALL>>> ");
			MedExamControlData noteData = new MedExamControlData();
			noteData.insertTxnMedexam(Med_exam);
			noteData.insertMedexamRate(Med_exam_rate);
		}
		public void deleteMedExamAll(ArrayList<Med_exam> Med_exam,ArrayList<Med_exam_rate> Med_exam_rate) throws Exception
		{
			System.out.println("doMed_exam ALL>>> ");
			MedExamControlData noteData = new MedExamControlData();
			noteData.deleteMedexam(Med_exam);
			noteData.deleteMedexamRate(Med_exam_rate);
		}
		public void doMedExamGroupAll(ArrayList<Med_exam> Med_exam,ArrayList<Med_exam_group> Med_exam_rate) throws Exception
		{
			System.out.println("doMed_exam group ALL>>> ");
			MedExamControlData noteData = new MedExamControlData();
			//if(noteData.insertMedexamboolean(Med_exam)==true) {
			noteData.insertMedexam(Med_exam);
		    noteData.insertMedexamGroup(Med_exam_rate);
			//}
			
		}
		public void doAppendixVersionAll(ArrayList<Appendix_version> lstappi
				,ArrayList<Appendix> listapp
				,ArrayList<Appendix_age_range> listage
				,ArrayList<Appendix_sum_range> listsum
				,ArrayList<Appendix_exam> listmed
				) throws Exception
		{
			System.out.println("doAppendixVersionAll >>> ");
			AppenDixControlData noteData = new AppenDixControlData();
			noteData.insertAppendixMaster(listapp);
			noteData.insertAppendixVersion(lstappi);
			
			noteData.insertAppendixAgeRange(listage);
		    noteData.insertAppendixSumRange(listsum);
		    
		    noteData.insertAppendixMed(listmed);
		    
			//}
			
		}
		public void doAppendixVersionAllV02(ArrayList<Appendix_version> lstappi
				,ArrayList<Appendix> listapp
				,ArrayList<Appendix_age_range> listage
				,ArrayList<Appendix_sum_range> listsum
				,ArrayList<Appendix_exam> listmed
				,ArrayList<Appendix_agent_tier> listag
				) throws Exception
		{
			System.out.println("doAppendixVersionAll >>> ");
			AppenDixControlData noteData = new AppenDixControlData();
			noteData.insertAppendixMaster(listapp);
			noteData.insertAppendixVersion(lstappi);
			
			noteData.insertAppendixAgeRange(listage);
		    noteData.insertAppendixSumRange(listsum);
		    
		    noteData.insertAppendixMed(listmed);
		    noteData.insertAppendixAgent(listag);
		    
			//}
			
		}
		public void doTxnAppendixVersionAll(ArrayList<Txn_appendix_version> lstappi
				
				) throws Exception
		{
			System.out.println("doAppendixVersionAll >>> ");
			AppenDixControlData noteData = new AppenDixControlData();
			
			noteData.insertTxnAppendixVersion(lstappi);
		
		    
			//}
			
		}
		public void deleteAppendixVersionAll(
				 ArrayList<Appendix_version> 	lstappi
				,ArrayList<Appendix> 			listapp
				,ArrayList<Appendix_age_range> 	listage
				,ArrayList<Appendix_sum_range> 	listsum
				,ArrayList<Appendix_exam> 		listmed
				//,ArrayList<Appendix_agent_tier> listagentD
				) throws Exception
		{
			System.out.println("doAppendixVersionAll >>> ");
			AppenDixControlData noteData = new AppenDixControlData();
			//noteData.insertAppendixMaster(listapp);
			//noteData.insertAppendixVersion(lstappi);
			
			noteData.deleteAppendixAgeRange(listage);
		    noteData.deleteAppendixSumRange(listsum);
		   // noteData.deleteAppendixAgentTier(listagentD);
		    //noteData.insertAppendixMed(listmed);
		    
			//}
			
		}
		public void deleteAppendixVersionAllV02(
				 ArrayList<Appendix_version> 	lstappi
				,ArrayList<Appendix> 			listapp
				,ArrayList<Appendix_age_range> 	listage
				,ArrayList<Appendix_sum_range> 	listsum
				,ArrayList<Appendix_exam> 		listmed
				,ArrayList<Appendix_agent_tier> listagentD
				) throws Exception
		{
			System.out.println("doAppendixVersionAll >>> ");
			AppenDixControlData noteData = new AppenDixControlData();
			//noteData.insertAppendixMaster(listapp);
			//noteData.insertAppendixVersion(lstappi);
			
			noteData.deleteAppendixAgeRange(listage);
		    noteData.deleteAppendixSumRange(listsum);
		    noteData.deleteAppendixAgentTier(listagentD);
		    //noteData.insertAppendixMed(listmed);
		    
			//}
			
		}
	}