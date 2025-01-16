import { Brand } from "../../types/brand"

type ItemTableProps = {
    columnList: string[],
    itemData: Brand[]
}

const ItemTable = ({ columnList, itemData }: ItemTableProps) => {
    return (
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
                All Brands
            </h4>

            <div className="flex flex-col">
                <div className="grid grid-cols-2 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-4">
                    {columnList.map((columnName) => (
                        <div key={columnName} className="p-2.5 xl:p-5">
                            <h5 className="text-sm  font-medium uppercase xsm:text-base">
                                {columnName}
                            </h5>
                        </div>
                    ))}
                </div>

                {itemData.map((brand, key) => (
                    <div
                        className={`grid grid-cols-2 items sm:grid-cols-4  ${key === itemData.length - 1
                            ? ''
                            : 'border-b border-stroke dark:border-strokedark'
                            }`}
                        key={key}
                    >
                        <div className="flex items-center gap-3 p-2.5 xl:p-5">
                            <div className="flex-shrink-0">
                                {/* <img src={brand._id} alt="Brand" /> */}
                                <p>{brand._id}</p>
                            </div>
                        </div>
                        <div className="flex items-center p-2.5 xl:p-5">
                            <p className="hidden text-black dark:text-white sm:block">
                                {brand.name}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ItemTable