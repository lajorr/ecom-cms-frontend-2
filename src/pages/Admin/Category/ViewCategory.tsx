import Breadcrumb from "../../../components/Breadcrumbs/Breadcrumb"
import CategoryItemTable from "../../../components/Tables/admin/CategoryItemTable"
import { useCategoryContext } from "../../../provider/CategoryProvider"
import { Category } from "../../../types/category"

const ViewCategory = () => {

    const catCtx = useCategoryContext();

    const categoryList: Category[] = catCtx.categories;
    console.log(categoryList)

    const handleDelete = (id: string) => {
        const result = catCtx.deleteCategory(id);
        alert(result)
    }

    return (
        <>

            <Breadcrumb pageName="All Categories" />
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">

                <CategoryItemTable columnList={['_id', 'Name', 'Action']} itemData={categoryList} onDelete={handleDelete} />
            </div >
        </>
    )
}

export default ViewCategory