import Breadcrumb from "../../../components/Breadcrumbs/Breadcrumb"
import ProductItemTable from "../../../components/Tables/admin/ProductItemTable"
import { useProductContext } from "../../../provider/ProductProvider"
import { Product } from "../../../types/product"

const ViewProducts = () => {

    const prodCtx = useProductContext()


    const handleDelete = async (id: string) => {
        const result = await prodCtx.deleteProduct(id);
        alert(result)
    }

    const prodList: Product[] = prodCtx.products
    // console.log("asdasdasda" + prodList[0].name)

    const columns = ['Name', 'Category', 'Brand', 'Price', 'Is Featured', 'Action']
    return (
        <>
            <Breadcrumb pageName="All Products" />
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <ProductItemTable columnList={columns} itemData={prodList} onDelete={handleDelete} />
            </div >
        </>
    )
}

export default ViewProducts