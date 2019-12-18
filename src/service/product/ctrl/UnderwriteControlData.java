package service.product.ctrl;

import java.util.ArrayList;

import layout.bean.productfac.product.Underwrite;
import service.fnc.RteResult;

public class UnderwriteControlData extends RteResult
{
	@SuppressWarnings("unchecked")
	public Underwrite searchProductUnderwrite(String prd_code) throws Exception
	{
		setVal(RTE_PATH + ".imp." + "RteProductUnderwriteS", new Object[] { "VAL1", prd_code });
		ArrayList<Underwrite> list = ((ArrayList<Underwrite>) executeResult().value());
		return list.size() == 0 ? null : list.get(0);
	}

	public void insertProductUndertrite(Underwrite underwrite) throws Exception
	{
		setVal(RTE_PATH + ".imp." + "RteProductUnderwrite", new Object[] { underwrite });
		saveDataResult();
	}
}
