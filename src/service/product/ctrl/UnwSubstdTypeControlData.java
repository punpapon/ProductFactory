package service.product.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.product.Unw_substd_type;
import service.fnc.ConstantValues;
import service.fnc.RteResult;

public class UnwSubstdTypeControlData extends RteResult
{
	@SuppressWarnings("unchecked")
	public ArrayList<Unw_substd_type> searchProductUnwSubstdType(String prd_code) throws Exception
	{
		setVal(RTE_PATH + ".imp." + "RteProductUnwSubstdTypeS", new Object[] { "VAL1", prd_code });
		return (ArrayList<Unw_substd_type>) executeResult().value();
	}

	public void insertProductUnwSubstdType(ArrayList<Unw_substd_type> listUnwSubstdType) throws Exception
	{
		setVal(RTE_PATH + ".imp." + "RteProductUnwSubstdType",
				new Object[] { ConstantValues.PRD_CODE, listUnwSubstdType });
		saveDataResult();
	}
}
