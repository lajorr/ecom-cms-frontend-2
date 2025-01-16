import { Product } from "../../../types/product"


type ProductItemTableProps = {
    columnList: string[],
    itemData: Product[]
}

const ProductItemTable = ({ columnList, itemData }: ProductItemTableProps) => {
    return (
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
                All Products
            </h4>

            <div className="flex flex-col">
                <div className="grid grid-cols-3  rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-9">
                    {columnList.map((columnName, idx) => (
                        <div key={columnName} className={`p-2.5 xl:p-5 sm:block  ${idx > 2 ? "hidden" : ""}`}>
                            <h5 className="text-sm  font-medium uppercase xsm:text-base">
                                {columnName}
                            </h5>
                        </div>
                    ))}
                </div>

                {itemData.map((product, key) => (
                    <div
                        className={`grid grid-cols-7 items sm:grid-cols-9  ${key === itemData.length - 1
                            ? ''
                            : 'border-b border-stroke dark:border-strokedark'
                            }`}
                        key={key}
                    >
                        <div className="flex items-center gap-3 p-2.5 xl:p-5">
                            <div className="flex-shrink-0">
                                {/* <img src={product._id} alt="product" /> */}
                                <p className="text-black dark:text-white" >{product.name}</p>
                            </div>

                        </div>
                        <div className="flex items-center p-2.5 xl:p-5">
                            <p className="hidden text-black dark:text-white sm:block">
                                {product.category}
                            </p>
                        </div>
                        <div className="flex items-center p-2.5 xl:p-5">
                            <p className="hidden text-black dark:text-white sm:block">
                                {product.brand}
                            </p>
                        </div>
                        <div className="flex items-center p-2.5 xl:p-5">
                            <p className="hidden text-black dark:text-white sm:block">
                                {product.price}
                            </p>
                        </div>
                        <div className="flex items-center p-2.5 xl:p-5">
                            <p className="hidden text-black dark:text-white sm:block">
                                {product.offerPrice ?? "-"}
                            </p>
                        </div>
                        <div className="flex items-center p-2.5 xl:p-5">
                            <p className="hidden text-black dark:text-white sm:block">
                                {product.description ?? "-"}
                            </p>
                        </div>
                        <div className="flex items-center p-2.5 xl:p-5">
                            <p className="hidden text-black dark:text-white sm:block uppercase">
                                {String(product.isFeatured)}
                            </p>
                        </div>
                        <div className="flex items-center p-2.5 xl:p-5">
                            <p className="hidden text-black dark:text-white sm:block">
                                {product.stock}
                            </p>
                        </div>
                        <div className="flex items-center p-2.5 xl:p-5 ">
                            <a
                                href={product.image} className="hidden  sm:block w-full break-words text-meta-5">
                                Image {key}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductItemTable