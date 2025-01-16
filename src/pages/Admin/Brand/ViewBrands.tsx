import Breadcrumb from "../../../components/Breadcrumbs/Breadcrumb"
import ItemTable from "../../../components/Tables/ItemTable"
import { Brand } from "../../../types/brand"

const ViewBrands = () => {

    const brandList: Brand[] = [
        { _id: '1', name: 'Google' },
        { _id: '2', name: 'Apple' },
    ]


    return (
        <>
            <Breadcrumb pageName="All Brands" />
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">

                <ItemTable columnList={['_id', 'Name']} itemData={brandList} />
            </div >

        </>
    )
}

export default ViewBrands