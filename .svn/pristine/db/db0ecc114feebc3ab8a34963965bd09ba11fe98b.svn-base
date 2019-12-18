package service.underwrite.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.beanset.AppendixVersionALLAccessData;
import layout.bean.productfac.product.Coop;
import layout.bean.productfac.product.Coop_commission;
import layout.bean.productfac.product.Coop_prem_discount;
import layout.bean.productfac.product.Coop_sum;
import layout.bean.productfac.product.Participant;
import layout.bean.productfac.product.Prem_install;
import layout.bean.productfac.product.Rate_layout;
import layout.bean.productfac.underwrite.Appendix;
import layout.bean.productfac.underwrite.Appendix_age_range;
import layout.bean.productfac.underwrite.Appendix_agent_tier;
import layout.bean.productfac.underwrite.Appendix_exam;
import layout.bean.productfac.underwrite.Appendix_product;
import layout.bean.productfac.underwrite.Appendix_sum_accum;
import layout.bean.productfac.underwrite.Appendix_sum_range;
import layout.bean.productfac.underwrite.Appendix_version;
import layout.bean.productfac.underwrite.Med_exam;
import layout.bean.productfac.underwrite.Med_exam_group;
import layout.bean.productfac.underwrite.Med_exam_rate;
import layout.bean.productfac.underwrite.Policy_status_accum;
import layout.bean.productfac.underwrite.Txn_appendix_product;
import layout.bean.productfac.underwrite.Txn_appendix_sum_accum;
import layout.bean.productfac.underwrite.Txn_appendix_version;
import layout.bean.productfac.underwrite.Txn_approve;
import layout.bean.productfac.underwrite.Txn_med_exam;
import layout.bean.productfac.underwrite.Txn_policy_status_accum;
import layout.bean.productfac.underwrite.Txn_underwrite;
import service.product.ProductBasicinfo;
import service.underwrite.AppendixProductAccessData;
import service.underwrite.AppendixSumAccumAccessData;
import service.underwrite.MedExamAccessData;
import service.underwrite.PolicyStatusAccumAccessData;
import service.underwrite.TxnAppendixProductAccessData;
import service.underwrite.TxnUnderwriteAccessData;

public class MainUnderWriteSaveDateService {
ProductBasicinfo productBasicinfo;
MedExamAccessData mma;
AppendixSumAccumAccessData mmp;
PolicyStatusAccumAccessData mms;
public String setMedExam(ArrayList<Med_exam> lstProduct) {
	String  datareturn = null;
	try {
				mma = new MedExamAccessData();
				this.mma.doMedExam(lstProduct);
		
		datareturn = "Success";
	} catch (Exception e) {
		datareturn = "Fail";
		e.printStackTrace();
	}
	return datareturn;
}
public String setMedExamALL(ArrayList<Med_exam> lstmed,ArrayList<Med_exam_rate> listmedexamRate) {
	String  datareturn = null;
	try {
				mma = new MedExamAccessData();
				this.mma.doMedExamAll(lstmed,listmedexamRate);
		
		datareturn = "Success";
	} catch (Exception e) {
		datareturn = "Fail";
		e.printStackTrace();
	}
	return datareturn;
}
public String setMedExamALLTxn(ArrayList<Txn_med_exam> lstmed,ArrayList<Med_exam_rate> listmedexamRate) {
	String  datareturn = null;
	try {
				mma = new MedExamAccessData();
				this.mma.doMedExamAllTxn(lstmed,listmedexamRate);
		
		datareturn = "Success";
	} catch (Exception e) {
		datareturn = "Fail";
		e.printStackTrace();
	}
	return datareturn;
}
public String deleteMedExamALL(ArrayList<Med_exam> lstmed,ArrayList<Med_exam_rate> listmedexamRate) {
	String  datareturn = null;
	try {
				mma = new MedExamAccessData();
				this.mma.deleteMedExamAll(lstmed,listmedexamRate);
		
		datareturn = "Success";
	} catch (Exception e) {
		datareturn = "Fail";
		e.printStackTrace();
	}
	return datareturn;
}

public String setMedExamGroupALL(ArrayList<Med_exam> lstmed,ArrayList<Med_exam_group> listmedexamRate) {
	String  datareturn = null;
	try {
				mma = new MedExamAccessData();
				this.mma.doMedExamGroupAll(lstmed,listmedexamRate);
		
		datareturn = "Success";
	} catch (Exception e) {
		datareturn = "Fail";
		e.printStackTrace();
	}
	return datareturn;
}
public String setAppendixProduct(ArrayList<Appendix_product> lstmed,ArrayList<Appendix_product> listmedexamRate) {
	String  datareturn = null;
	try {
		AppendixProductAccessData mmaa = new AppendixProductAccessData();
				mmaa.doAppendix_product(lstmed);
				mmaa.doAppendix_product(listmedexamRate);
		
		datareturn = "Success";
	} catch (Exception e) {
		datareturn = "Fail";
		e.printStackTrace();
	}
	return datareturn;
}
public String setAppendixProduct(ArrayList<Appendix_product> lstmed) {
	String  datareturn = null;
	try {
		AppendixProductAccessData mmaa = new AppendixProductAccessData();
				mmaa.doAppendix_product(lstmed);
				
		
		datareturn = "Success";
	} catch (Exception e) {
		datareturn = "Fail";
		e.printStackTrace();
	}
	return datareturn;
}
public String genTxnUnderwrite(ArrayList<Txn_underwrite> lstmed) {
	String  datareturn = null;
	try {
		TxnUnderwriteAccessData mmaa = new TxnUnderwriteAccessData();
				mmaa.doTxn_underwrite(lstmed);
		
		datareturn = "Success";
	} catch (Exception e) {
		datareturn = "Fail";
		e.printStackTrace();
	}
	return datareturn;
}
public String deleteTxnUnderwrite(ArrayList<Txn_underwrite> lstmed) {
	String  datareturn = null;
	try {
		TxnUnderwriteAccessData mmaa = new TxnUnderwriteAccessData();
				mmaa.deleteTxn_underwrite(lstmed);
		
		datareturn = "Success";
	} catch (Exception e) {
		datareturn = "Fail";
		e.printStackTrace();
	}
	return datareturn;
}
public String genTxnApprove(ArrayList<Txn_approve> lstmed) {
	String  datareturn = null;
	try {
		TxnUnderwriteAccessData mmaa = new TxnUnderwriteAccessData();
				mmaa.doTxn_approve(lstmed);
		
		datareturn = "Success";
	} catch (Exception e) {
		datareturn = "Fail";
		e.printStackTrace();
	}
	return datareturn;
}
public String setTxnAppendixProduct(ArrayList<Txn_appendix_product> lstmed) {
	String  datareturn = null;
	try {
		TxnAppendixProductAccessData mmaa = new TxnAppendixProductAccessData();
				mmaa.doTxn_appendix_product(lstmed);
		
		datareturn = "Success";
	} catch (Exception e) {
		datareturn = "Fail";
		e.printStackTrace();
	}
	return datareturn;
}
public String setAppendixVersion(
		ArrayList<Appendix_version> lstappi
		,ArrayList<Appendix> listapp
		,ArrayList<Appendix_age_range> listage
		,ArrayList<Appendix_sum_range> listsum
		,ArrayList<Appendix_exam> listmed
		) {
	String  datareturn = null;
	try {
				mma = new MedExamAccessData();
				this.mma.doAppendixVersionAll(lstappi,listapp,listage,listsum,listmed);
		
		datareturn = "Success";
	} catch (Exception e) {
		datareturn = "Fail";
		e.printStackTrace();
	}
	return datareturn;
}
public String setAppendixVersionV02(
		ArrayList<Appendix_version> lstappi
		,ArrayList<Appendix> listapp
		,ArrayList<Appendix_age_range> listage
		,ArrayList<Appendix_sum_range> listsum
		,ArrayList<Appendix_exam> listmed
		,ArrayList<Appendix_agent_tier> listag
		) {
	String  datareturn = null;
	try {
				mma = new MedExamAccessData();
				//this.mma.doAppendixVersionAll(lstappi,listapp,listage,listsum,listmed);
				this.mma.doAppendixVersionAllV02(lstappi,listapp,listage,listsum,listmed,listag);
		
		datareturn = "Success";
	} catch (Exception e) {
		datareturn = "Fail";
		e.printStackTrace();
	}
	return datareturn;
}
public String setTxnAppendixVersion(
		ArrayList<Txn_appendix_version> lstappi
		
		) {
	String  datareturn = null;
	try {
				mma = new MedExamAccessData();
				this.mma.doTxnAppendixVersionAll(lstappi);
		
		datareturn = "Success";
	} catch (Exception e) {
		datareturn = "Fail";
		e.printStackTrace();
	}
	return datareturn;
}
public String deleteAppendixVersion(
		ArrayList<Appendix_version> lstappi
		,ArrayList<Appendix> listapp
		,ArrayList<Appendix_age_range> listage
		,ArrayList<Appendix_sum_range> listsum
		,ArrayList<Appendix_exam> listmed
		
		) {
	String  datareturn = null;
	try {
				mma = new MedExamAccessData();
				this.mma.deleteAppendixVersionAll(lstappi,listapp,listage,listsum,listmed);
		
		datareturn = "Success";
	} catch (Exception e) {
		datareturn = "Fail";
		e.printStackTrace();
	}
	return datareturn;
}
public String deleteAppendixVersionV02(
		ArrayList<Appendix_version> lstappi
		,ArrayList<Appendix> listapp
		,ArrayList<Appendix_age_range> listage
		,ArrayList<Appendix_sum_range> listsum
		,ArrayList<Appendix_exam> listmed
		,ArrayList<Appendix_agent_tier> listagentD
		) {
	String  datareturn = null;
	try {
				mma = new MedExamAccessData();
				this.mma.deleteAppendixVersionAllV02(lstappi,listapp,listage,listsum,listmed,listagentD);
		
		datareturn = "Success";
	} catch (Exception e) {
		datareturn = "Fail";
		e.printStackTrace();
	}
	return datareturn;
}
public String setAppendixSA(ArrayList<Appendix_sum_accum> lstmed) {
	String  datareturn = null;
	try {
		mmp = new AppendixSumAccumAccessData();
	    this.mmp.doAppendixSA(lstmed);
		
		datareturn = "Success";
	} catch (Exception e) {
		datareturn = "Fail";
		e.printStackTrace();
	}
	return datareturn;
}
public String setAppendixSA_2(ArrayList<Appendix_sum_accum> lstmed,ArrayList<Txn_appendix_sum_accum> lstmed2) {
	String  datareturn = null;
	try {
		mmp = new AppendixSumAccumAccessData();
		this.mmp.doAppendixSA(lstmed);
	    this.mmp.doAppendixSA_Txn(lstmed2);
		
		datareturn = "Success";
	} catch (Exception e) {
		datareturn = "Fail";
		e.printStackTrace();
	}
	return datareturn;
}
public String setPolicyStatus(ArrayList<Policy_status_accum> lstmed) {
	String  datareturn = null;
	try {
		mms = new PolicyStatusAccumAccessData();
	    this.mms.doPolicyStatus(lstmed);
		
		datareturn = "Success";
	} catch (Exception e) {
		datareturn = "Fail";
		e.printStackTrace();
	}
	return datareturn;
}
public String setPolicyStatusTxn(ArrayList<Txn_policy_status_accum> lstmed) {
	String  datareturn = null;
	try {
		mms = new PolicyStatusAccumAccessData();
	    this.mms.doPolicyStatusTxn(lstmed);
		
		datareturn = "Success";
	} catch (Exception e) {
		datareturn = "Fail";
		e.printStackTrace();
	}
	return datareturn;
}





/********************END COOP*********************/

}