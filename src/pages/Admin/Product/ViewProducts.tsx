import { useEffect } from "react"
import Breadcrumb from "../../../components/Breadcrumbs/Breadcrumb"
import ProductItemTable from "../../../components/Tables/admin/ProductItemTable"
import { useProductContext } from "../../../provider/ProductProvider"

const ViewProducts = () => {

    const prodCtx = useProductContext()


    useEffect(() => {
        prodCtx.fetchProducts();
    }, [])

    const prodList = prodCtx.products

    const columns = ['Name', 'Category', 'Brand', 'Price', 'Is Featured', 'Image']
    return (
        <>
            <Breadcrumb pageName="All Products" />
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <ProductItemTable columnList={columns} itemData={prodList} />
            </div >
        </>
    )
}

export default ViewProducts