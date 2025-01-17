import { useEffect } from "react"
import Breadcrumb from "../../../components/Breadcrumbs/Breadcrumb"
import BrandItemTable from "../../../components/Tables/admin/BrandItemTable"
import { useBrandContext } from "../../../provider/BrandProvider"
import { Brand } from "../../../types/brand"

const ViewBrands = () => {

    const brandCtx = useBrandContext();
    useEffect(() => {
        brandCtx.fetchBrands();
    }, [])


    const brandList: Brand[] = brandCtx.allBrands;



    return (
        <>
            <Breadcrumb pageName="All Brands" />
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">

                <BrandItemTable columnList={['_id', 'Name']} itemData={brandList} />
            </div >

        </>
    )
}

export default ViewBrands