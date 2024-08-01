import { FormattedDateNow } from "../helpers/date";

export function SalesTodayTable() {

    const THEAD = ["Room Type", "Amount"]
    
    return (
        <div className="flex flex-col bg-white p-3 rounded-md border border-gray-400">

        <div className="flex justify-between items-center">
            <h1 className="text-3xl font-semibold pl-2 py-3">
               Sales Today
            </h1>

            <h1 className="font-semibold">{FormattedDateNow()}</h1>
            
        </div>


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
        <div className="flex flex-col bg-white p-3 rounded-md border border-gray-400">

        <div className="flex justify-between items-center">
            <h1 className="text-3xl font-semibold pl-2 py-3">
                Employee List
            </h1>

            <button className="bg-green-700 w-[25%] text-white font-semibold p-1 rounded-md hover:opacity-75">
                ADD
            </button>
        </div>

        

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


export function AirconRoomsTable() {

    const THEAD = ["Room No.", "Status", "Actions"]
    
    return (
        <div className="w-full h-1/2  flex flex-col bg-white p-6 rounded-md border border-gray-400">

        <div className="flex w-full justify-between items-center">
            <h1 className="font-semibold text-2xl">Aircon Rooms</h1>
            <button className="bg-green-700 w-[25%] text-white font-semibold p-1 rounded-md hover:opacity-75">
                ADD Room
            </button>
        </div>

        

        <div className="sm:-mx-6 lg:-mx-12">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light ">
                <thead className="border-b font-semibold border-gray-400">
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
                    <tr className="border-b border-gray-400">
                        <td  className="whitespace-nowrap px-6 py-4">9</td>
                        <td  className="px-6 py-4">Occupied</td>
                        <td  className="px-6 py-4 flex gap-2">
                            <button className="bg-green-700 text-white p-2 rounded-md font-semibold hover:opacity-75">
                                Set Available
                            </button>

                            <button className="bg-red-800 text-white p-2 rounded-md font-semibold hover:opacity-75">
                                Delete
                            </button>
                        </td>

                    </tr>

                    <tr className="border-b border-gray-400 ">
                        <td className="whitespace-nowrap px-6 py-4">10</td>
                        <td className="px-6 py-4">Available</td>
                        <td className="px-6 py-4 flex gap-2">
                            <button className="bg-gray-600 text-white p-2 rounded-md font-semibold hover:opacity-75">
                                Set Occupied
                            </button>

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



export function OrdinaryRoomsTable() {

    const THEAD = ["Room No.", "Status", "Actions"]
    
    return (
        <div className="w-full h-1/2  flex flex-col bg-white p-6 rounded-md border border-gray-400">

        <div className="flex w-full justify-between items-center">
            <h1 className="font-semibold text-2xl">Ordinary Rooms</h1>
            <button className="bg-green-700 w-[25%] text-white font-semibold p-1 rounded-md hover:opacity-75">
                ADD Room
            </button>
        </div>

        

        <div className="sm:-mx-6 lg:-mx-12">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light ">
                <thead className="border-b font-semibold border-gray-400">
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
                    <tr className="border-b border-gray-400">
                        <td  className="whitespace-nowrap px-6 py-4">9</td>
                        <td  className="px-6 py-4">Occupied</td>
                        <td  className="px-6 py-4 flex gap-2">
                            <button className="bg-green-700 text-white p-2 rounded-md font-semibold hover:opacity-75">
                                Set Available
                            </button>

                            <button className="bg-red-800 text-white p-2 rounded-md font-semibold hover:opacity-75">
                                Delete
                            </button>
                        </td>

                    </tr>

                    <tr className="border-b border-gray-400 ">
                        <td className="whitespace-nowrap px-6 py-4">10</td>
                        <td className="px-6 py-4">Available</td>
                        <td className="px-6 py-4 flex gap-2">
                            <button className="bg-gray-600 text-white p-2 rounded-md font-semibold hover:opacity-75">
                                Set Occupied
                            </button>

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

export function CheckedInTable() {

    const THEAD = ["Room No.", "Room Type", "Inn Type", "Amount", "Time", "Action"]
    
    return (
        <div className="w-full h-1/2  flex flex-col bg-white p-6 rounded-md border border-gray-400">

        <div className="flex w-full justify-end items-center">
            <button className="bg-green-700  w-[25%] text-white font-semibold p-1 rounded-md hover:opacity-75">
                ADD INN
            </button>
        </div>

        

        <div className="sm:-mx-6 lg:-mx-12">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light ">
                <thead className="border-b font-semibold border-gray-400">
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
                    <tr className="border-b border-gray-400">
                        <td  className="whitespace-nowrap px-6 py-4">9</td>
                        <td  className="px-6 py-4">Aircon</td>
                        <td  className="px-6 py-4">Short Time</td>
                        <td  className="px-6 py-4">10:30 AM</td>
                        <td  className="px-6 py-4">₱200</td>
                        <td  className="px-6 py-4">
                            <button className="bg-red-800 text-white p-2 rounded-md font-semibold hover:opacity-75">
                                Cancel
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
