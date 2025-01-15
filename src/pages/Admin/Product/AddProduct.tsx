import Breadcrumb from "../../../components/Breadcrumbs/Breadcrumb"
import SelectGroupOne from "../../../components/Forms/SelectGroup/SelectGroupOne"
import SwitcherTwo from "../../../components/Switchers/SwitcherTwo"

const AddProductPage = () => {
    return (
        <>
            <Breadcrumb pageName="Add Product" />
            <div className=" max-w-[720px] mx-auto" >
                <div className="flex flex-col gap-9">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Product Form
                            </h3>
                        </div>
                        <form action="">
                            <div className="p-6.5">
                                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                    <div className="w-full xl:w-1/2">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Name <span className="text-meta-1">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter product name"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>

                                    <div className="w-full xl:w-1/2">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Price <span className="text-meta-1">*</span>
                                        </label>
                                        <input
                                            type="number"
                                            placeholder="$123"
                                            className="appearance-none w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>
                                </div>
                                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                    <div className="w-full xl:w-1/2">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Sale Price
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="$123"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>

                                    <div className="w-full xl:w-1/2">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Stock <span className="text-meta-1">*</span>
                                        </label>
                                        <input
                                            type="number"
                                            placeholder="123"
                                            className="appearance-none w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>
                                </div>
                                <div className=" flex flex-col gap-6 xl:flex-row">
                                    <SelectGroupOne labelText="Brand" hintText="Select Brand" />
                                    <SelectGroupOne labelText="Category" hintText="Select Category" />
                                </div>
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Featured
                                </label>
                                <SwitcherTwo />
                                <div className="mb-6 mt-4.5">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Description
                                    </label>
                                    <textarea
                                        rows={6}
                                        placeholder="Type your message"
                                        className="resize-none w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    ></textarea>
                                </div>

                                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                                    Add Product
                                </button>
                            </div>
                        </form>
                    </div>
                </div >
            </div >
        </>
    )
}

export default AddProductPage