package service.baseplan.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.beanset.TpdTiliAccessData;
import layout.bean.productfac.lookup.Mortality_oic;
import layout.bean.productfac.lookup.Tpd_file;
import layout.bean.productfac.lookup.Tpd_file_hist;
import layout.bean.productfac.lookup.Tpd_tli;
import manit.rte.Result;
import service.fnc.RtePath;
import service.fnc.RteResult;
import service.fnc.StatusCodeType;

public class TpdTliData 
{
	private RteResult rteResult;
	private final String RTE_PATH = RtePath.RTE.getValue();
	public ArrayList<TpdTiliAccessData> searchBenefitDisabilityAccessData() throws Exception
	{
		Object [] param = new Object [] {"S",new Object [] {"ALL"}};
		this.rteResult = new RteResult(RTE_PATH+".RteTpdTliAccessData", param);
		Result result = rteResult.searchValuesResultData();
		ArrayList<TpdTiliAccessData> listData = (ArrayList<TpdTiliAccessData>) result.value();
		if(listData.isEmpty())
			throw new Exception(StatusCodeType.NF.getValue());
		return listData;
	}
	
	/*public void printData(ArrayList<TpdTiliAccessData> listData)
	{
		System.out.println("printData TpdTiliAccessData >>>>>>>>>>>>>>>>>>>>>>> ");
		try {
			for(TpdTiliAccessData show : listData)
			{
				Tpd_tli tpd_tli = show.getTpdTli();
				System.out.println(tpd_tli.getTpd_tli_id()+"|"+tpd_tli.getName_th()+"|"+tpd_tli.getMort_oic_id());
				Mortality_oic  mortality_oic = show.getMortalityOic();
				System.out.println(mortality_oic.getMort_oic_id()+"|"+mortality_oic.getName_th());
				ArrayList<Tpd_file> listTpdFile = show.getListTpdFile();
				for(Tpd_file file : listTpdFile)
				{
					System.out.println("\t"+file.getFile_id()+"|"+file.getGender());
					System.out.println("--------------------------------------------");
				}
				ArrayList<Tpd_file_hist> listTpdFilehist = show.getListTpdFileHist();
				for(Tpd_file_hist file_hist : listTpdFilehist)
				{
					System.out.println("\t"+file_hist.getSeq()+"|"+file_hist.getGender());
					System.out.println("--------------------------------------------");
				}
			}
		} catch (Exception e) {
		}
	}*/
}
