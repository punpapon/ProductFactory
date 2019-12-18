package service.clone;

import java.util.ArrayList;

import layout.bean.productfac.coverage.Filing_channel;
import service.baseplan.ctrl.FilingChannelData;
import service.fnc.ConstantValues;
import service.fnc.PDFFnc;

public class CloneCoverageFilingChannel extends FilingChannelData{

	public void cloneCoverageFilingChannel(String cov_code_old,String cov_code_new) {
		try {
			ArrayList<Filing_channel> lstFilingChannel = searchCoverageFillingChanel(cov_code_old);
			ArrayList<Filing_channel> lstResultFilingChannel = new ArrayList<>();
			for (Filing_channel filing_channel : lstFilingChannel) {
				filing_channel.setCov_code(cov_code_new);
				filing_channel.setUser_code(ConstantValues.USER_CODE);
				filing_channel.setUpdate_time(PDFFnc.currentTimeStamp());
				lstResultFilingChannel.add(filing_channel);
			}
			insertFilingChannel(lstResultFilingChannel);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
