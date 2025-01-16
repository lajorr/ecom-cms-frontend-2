import Breadcrumb from "../../../components/Breadcrumbs/Breadcrumb"
import ProductItemTable from "../../../components/Tables/ProductItemTable"
import { Product } from "../../../types/product"

const ViewProducts = () => {
    const prodList: Product[] = Array.from({ length: 10 }).map((_, i) => ({
        _id: `${i + 1}`,
        name: `Product ${i + 1}`,
        category: 'Sports',
        brand: 'Nike',
        price: i + 10,
        offerPrice: i % 2 === 0 ? null : i + 5,
        description: i % 3 === 0 ? null : `This is product ${i + 1}`,
        isFeatured: i % 3 === 0,
        stock: i + 10,
        image: `https://picsum.photos/id/${i + 1}/200/300`,
    }))

    const columns = ['Name', 'Category', 'Brand', 'Price', 'Offer Price', 'Description', 'Is Featured', 'Stock', 'Image']
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