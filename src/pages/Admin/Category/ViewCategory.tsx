import Breadcrumb from "../../../components/Breadcrumbs/Breadcrumb"
import CategoryItemTable from "../../../components/Tables/CategoryItemTable"
import { Category } from "../../../types/category"

const ViewCategory = () => {
    const categoryList: Category[] = [
        { _id: '1', name: 'Sports' },
        { _id: '2', name: 'Audio' },
    ]


    return (
        <>

            <Breadcrumb pageName="All Categories" />
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">

                <CategoryItemTable columnList={['_id', 'Name']} itemData={categoryList} />
            </div >
        </>
    )
}

export default ViewCategory