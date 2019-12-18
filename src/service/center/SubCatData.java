package service.center;

import java.util.ArrayList;

import service.baseplan.ctrl.RateLayoutData;
import service.fnc.ConstantRateCatIDValues;

public class SubCatData extends RateLayoutData
{
	public ArrayList<String[]> searchSubCatByTaxRateCat() throws Exception
	{
		return searchSubCat(ConstantRateCatIDValues.getTaxRateCat());
	}

	public ArrayList<String[]> searchSubCatByPmstdRateCat() throws Exception
	{
		return searchSubCat(ConstantRateCatIDValues.getPmstdRateCat());
	}

	public ArrayList<String[]> searchSubCatByPmstpRateCat() throws Exception
	{
		return searchSubCat(ConstantRateCatIDValues.getPmstpRateCat());
	}

	public ArrayList<String[]> searchSubCatByPmbtaRateCat() throws Exception
	{
		return searchSubCat(ConstantRateCatIDValues.getPmbtaRateCat());
	}

	public ArrayList<String[]> searchSubCatByCpdRateCat() throws Exception
	{
		return searchSubCat(ConstantRateCatIDValues.getCpdRateCat());
	}

	public ArrayList<String[]> searchSubCatByRsRateCat() throws Exception
	{
		return searchSubCat(ConstantRateCatIDValues.getRsRateCat());
	}

	public ArrayList<String[]> searchSubCatByRlsRateNar() throws Exception
	{
		return searchSubCat(ConstantRateCatIDValues.getRlsRateNar());
	}

	public ArrayList<String[]> searchSubCatByRlsRateCat() throws Exception
	{
		return searchSubCat(ConstantRateCatIDValues.getRlsRateCat());
	}

	////////// OL
	public ArrayList<String[]> searchSubCatByPmstdRateCatOL() throws Exception
	{
		return searchSubCat(ConstantRateCatIDValues.getPmstdRateCatOl());
	}

	public ArrayList<String[]> searchSubCatByPmstpRateCatOL() throws Exception
	{
		return searchSubCat(ConstantRateCatIDValues.getPmstpRateCatOl());
	}

	public ArrayList<String[]> searchSubCatByPmbtaRateCatOL() throws Exception
	{
		return searchSubCat(ConstantRateCatIDValues.getPmbtaRateCatOl());
	}

	public ArrayList<String[]> searchSubCatByCpdRateCatOL() throws Exception
	{
		return searchSubCat(ConstantRateCatIDValues.getCpdRateCatOl());
	}

	// เพิ่มเติมจาก CL
	public ArrayList<String[]> searchSubCatByDitRateCatOL() throws Exception
	{
		return searchSubCat(ConstantRateCatIDValues.getDtiRateCatOl());
	}

	public ArrayList<String[]> searchSubCatByCipRateCatOL() throws Exception
	{
		return searchSubCat(ConstantRateCatIDValues.getCipRateCatOl());
	}

	// ตารางมูลค่า OC
	public ArrayList<String[]> searchSubCatByRsRateCatOL() throws Exception
	{
		return searchSubCat(ConstantRateCatIDValues.getRsRateCatOl());
	}

	public ArrayList<String[]> searchSubCatByRlsRateCatOL() throws Exception
	{
		return searchSubCat(ConstantRateCatIDValues.getRlsRateCatOl());
	}

	// เงินปันผล
	public ArrayList<String[]> searchdividendOL() throws Exception
	{
		return searchSubCat(ConstantRateCatIDValues.getDivRateCatOl());
	}

	// ตารางลดหย่อนภาษี
	public ArrayList<String[]> searchSubCatByTaxRateCatOL() throws Exception
	{
		return searchSubCat(ConstantRateCatIDValues.getTaxRateCatOl());
	}

	/// NAR///////////////////////
	public ArrayList<String[]> searchNAROL() throws Exception
	{
		return searchSubCat(ConstantRateCatIDValues.getNarOl());
	}
}
