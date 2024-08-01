import { SideBar } from "../components/sidebar";
import { CheckedInTable } from "../components/tables";
import { FormattedDateNow } from "../helpers/date";

function CheckInPage(){
    return(
        <div className="h-screen flex justify-end">
            <SideBar />

            <div className="w-full h-[90%] flex justify-end pt-5">

                <div className="w-[75%] flex flex-col mr-5 gap-5">
                    <div className="flex items-center gap-4">
                        <h1 className="text-4xl font-semibold">Checked In</h1>
                        <h1 className="font-semibold">{FormattedDateNow()}</h1>
                    </div>

                    <CheckedInTable />
                    
                </div>

                </div>
           
        </div>
    )
}

export default CheckInPage