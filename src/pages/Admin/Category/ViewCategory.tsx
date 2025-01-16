import { useEffect } from "react"
import Breadcrumb from "../../../components/Breadcrumbs/Breadcrumb"
import CategoryItemTable from "../../../components/Tables/admin/CategoryItemTable"
import { useCategoryContext } from "../../../provider/CategoryProvider"
import { Category } from "../../../types/category"

const ViewCategory = () => {

    const catCtx = useCategoryContext();

    useEffect(() => {
        catCtx.fetchCategories();
    }, [])

    const categoryList: Category[] = catCtx.categories;
    console.log(categoryList)


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