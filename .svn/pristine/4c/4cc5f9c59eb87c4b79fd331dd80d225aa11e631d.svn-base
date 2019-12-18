package service.product.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.beanset.FormulaCatAccesData;
import service.fnc.RteResult;
import service.fnc.StatusCodeType;

public class FormulaCatControlData extends RteResult
{
	@SuppressWarnings("unchecked")
	public ArrayList<FormulaCatAccesData> searchInsuranceType() throws Exception
	{
		setVal(RTE_PATH + ".RteFormulaCatAcessData", new Object[] { "S", new Object[] { "ALL", "" } });
		ArrayList<FormulaCatAccesData> listFormulaCatAccesData = (ArrayList<FormulaCatAccesData>) executeResult().value();
		if (listFormulaCatAccesData.isEmpty())
			throw new Exception(StatusCodeType.NF.getValue());
		return listFormulaCatAccesData;
	}
}
