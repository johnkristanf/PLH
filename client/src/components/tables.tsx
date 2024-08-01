
export function SalesTodayTable() {

    const THEAD = ["Room Type", "Amount"]
    
    return (
        <div className="flex flex-col bg-white p-3 rounded-md">

        <h1 className="text-3xl font-semibold pl-2 py-3">
            Sales Today
        </h1>

        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-semibold dark:border-neutral-500">
                    <tr>
                    {
                        THEAD.map((name) => (
                            <td 
                                key={name}
                                className="whitespace-nowrap px-6 py-4 font-medium ">
                                {name}
                            </td>
                        ))
                    }
                    </tr>
                </thead>
                <tbody className="font-semibold">
                    <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">Ordinary</td>
                        <td className="whitespace-nowrap px-6 py-4">₱5,000</td>
                    </tr>

                    <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">Aircon</td>
                        <td className="whitespace-nowrap px-6 py-4">₱8,000</td>
                    </tr>

                </tbody>
                </table>
            </div>
            </div>

            <div className="w-[70%] flex gap-3 font-semibold justify-end">
                <h1>Total Amount: </h1>
                <h1>₱12,000</h1>
            </div>
        </div>
        </div>
    );
}


export function EmployeeList() {

    const THEAD = ["Name", "Role", "Action"]
    
    return (
        <div className="flex flex-col bg-white p-3 rounded-md">

        <h1 className="text-3xl font-semibold pl-2 py-3">
           Employee List
        </h1>

        <div className="sm:-mx-6 lg:-mx-12">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light">
                <thead>
                    <tr>
                    {
                        THEAD.map((name) => (
                            <td 
                                key={name}
                                className="whitespace-nowrap px-6 py-4 font-medium ">
                                {name}
                            </td>
                        ))
                    }
                    </tr>
                </thead>
                <tbody className="font-semibold">
                    <tr>
                        <td  className="whitespace-nowrap px-6 py-4">John Kristan</td>
                        <td  className="px-6 py-4">Cashier</td>
                        <td  className="px-6 py-4">
                            <button className="bg-red-800 text-white p-2 rounded-md font-semibold hover:opacity-75">
                                Delete
                            </button>
                        </td>

                    </tr>

                    <tr>
                        <td  className="px-6 py-4">Lilibeth</td>
                        <td  className="px-6 py-4">Cashier</td>
                        <td  className="px-6 py-4">
                            <button className="bg-red-800 text-white p-2 rounded-md font-semibold hover:opacity-75">
                                Delete
                            </button>
                        </td>

                    </tr>

                </tbody>
                </table>
            </div>
            </div>
        </div>
        </div>
    );
}