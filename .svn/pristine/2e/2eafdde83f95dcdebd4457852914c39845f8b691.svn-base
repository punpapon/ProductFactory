package service.baseplan.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.beanset.MortalityTliAccessData;
import layout.bean.productfac.lookup.Mortality_file;
import layout.bean.productfac.lookup.Mortality_file_hist;
import layout.bean.productfac.lookup.Mortality_oic;
import layout.bean.productfac.lookup.Mortality_tli;
import manit.rte.Result;
import service.fnc.RtePath;
import service.fnc.RteResult;
import service.fnc.StatusCodeType;

public class MortalityTliiData 
{
	private RteResult rteResult;
	private final String RTE_PATH = RtePath.RTE.getValue();
	public ArrayList<MortalityTliAccessData> searchBenefitDisabilityAccessData() throws Exception
	{
		String rte = RTE_PATH+".RteMortalityAccessData";
		Object [] param = new Object [] {"S",new Object [] {"ALL"}};
		this.rteResult = new RteResult(rte, param);
		Result result = rteResult.searchValuesResultData();
		ArrayList<MortalityTliAccessData> listData = (ArrayList<MortalityTliAccessData>) result.value();
		if(listData.isEmpty())
			throw new Exception(StatusCodeType.NF.getValue());
		return listData;
	}
	
//	public void printData(ArrayList<MortalityTliAccessData> listData)  
//	{
//		System.out.println("printData MortalityTliAccessData >>>>>>>>>>>>>>>>>>>>>>>>> ");
//		try {
//			for(MortalityTliAccessData accessData : listData)
//			{
//				Mortality_tli tli = accessData.getMortalityTli();
//				System.out.println("Mortality_tli : "+tli.getMort_tli_id()+"|"+tli.getName_th());
//				Mortality_oic oic = accessData.getMortalityOic();
//				System.out.println("\tmort_oic : "+oic.getMort_oic_id()+"|"+oic.getName_th());
//				ArrayList<Mortality_file> listMortFile = accessData.getListMortalityFile();
//				for(Mortality_file mortality_file : listMortFile)
//				{
//					System.out.println("\t\tMortality_file : "+mortality_file.getFile_id()+"|"+mortality_file.getGender());
//					System.out.println("--------------------------------------------");
//				}
//				ArrayList<Mortality_file_hist> listMortFileHist = accessData.getListMortalityFileHist();
//				for(Mortality_file_hist mortality_file_hist : listMortFileHist)
//				{
//					System.out.println("\t\tMortality_file_hist : "+mortality_file_hist.getFile_id()+"|"+mortality_file_hist.getGender());
//					System.out.println("--------------------------------------------");
//				}
//			}
//		} catch (Exception e) {
//			System.out.println("printData >>> "+e.getMessage());
//			e.printStackTrace();
//		}
//	}
}
