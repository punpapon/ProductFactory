package service.center;

import java.util.ArrayList;

import service.ctrl.AppconfigControlData;
import service.fnc.ConstantRateCatIDValues;

public class CovCatSubCodeData extends AppconfigControlData
{
	/**
	 * ตารางเบี้ยมาตรฐาน PM_Rate (Age Specific) : 1
	 * ตารางเบี้ยมาตรฐาน PM_Rate (Age Band) : 2
	 * @param cov_cat
	 * @return
	 * @throws Exception
	 */
	public ArrayList<String[]> searchSubCatByPmstdRateCat(String cov_cat) throws Exception {
		return searchSubRateCodeByCovCat(cov_cat,ConstantRateCatIDValues.getPmstdRateCat());
	}

	/**  OL OL  BEnz
	 * ตารางเบี้ยมาตรฐาน PM_Rate (Age Specific) : 26
	 * ตารางเบี้ยมาตรฐาน PM_Rate (Age Band) : 27
	 * @param cov_cat
	 * @return
	 * @throws Exception
	 */
	public ArrayList<String[]> searchSubCatByPmstdRateCatOL(String cov_cat) throws Exception {
		return searchSubRateCodeByCovCat(cov_cat,ConstantRateCatIDValues.getPmstdRateCatOl());
	}
	/**
	 * เบี้ยเพิ่มพิเศษ : 3
	 * @param cov_cat
	 * @return
	 * @throws Exception
	 */
	public ArrayList<String[]> searchSubCatByPmstpRateCat(String cov_cat) throws Exception {
		return searchSubRateCodeByCovCat(cov_cat,ConstantRateCatIDValues.getPmstpRateCat());
	}
	/**
	 * ตารางมูลค่ากรมธรรม์ CV ความเสี่ยงมาตรฐาน : 6 
	 * ตารางมูลค่ากรมธรรม์ CV ความเสี่ยงมาตรฐาน (Age Band) : 7
	 * @param cov_cat
	 * @return
	 * @throws Exception
	 */
	public ArrayList<String[]> searchSubCatByRsRateCat(String cov_cat) throws Exception
    {
    	return searchSubRateCodeByCovCat(cov_cat,ConstantRateCatIDValues.getRsRateCat());
    }
}
