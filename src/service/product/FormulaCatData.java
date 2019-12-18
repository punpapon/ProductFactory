package service.product;

import java.util.ArrayList;

import layout.bean.productfac.beanset.FormulaCatAccesData;
import service.product.ctrl.FormulaCatControlData;

public class FormulaCatData
{

	/**
	 * ค้นหาข้อมูล lookup
	 * @param param
	 * @return
	 * @throws Exception
	 */
	public ArrayList<FormulaCatAccesData> searchInsuranceType() throws Exception
	{
		return new FormulaCatControlData().searchInsuranceType();
	}
}
