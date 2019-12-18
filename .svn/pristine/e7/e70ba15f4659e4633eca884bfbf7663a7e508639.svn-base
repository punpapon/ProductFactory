package service.clone;

import java.util.ArrayList;

import layout.bean.productfac.appconfig.Coverage_benefit_page;
import service.ctrl.BenefitData;


public class CloneCoverageBenefitPage extends BenefitData{

	public void cloneCoverageBenefitPage(String cov_code_old,String cov_code_new) {
		try {
			ArrayList<Coverage_benefit_page> lstBenefitPage = searchBenefitPage(cov_code_old);
			ArrayList<Coverage_benefit_page> lstResultBenefitPage = new ArrayList<>();
			for (Coverage_benefit_page coverage_benefit_page : lstBenefitPage) {
				coverage_benefit_page.setCov_code(cov_code_new);
				lstResultBenefitPage.add(coverage_benefit_page);
			}
			if(lstResultBenefitPage.size() > 0) {
				insertCoverageBenefitPage(lstResultBenefitPage);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
