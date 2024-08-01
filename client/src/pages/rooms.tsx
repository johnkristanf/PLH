import { SideBar } from "../components/sidebar"
import { AirconRoomsTable, OrdinaryRoomsTable } from "../components/tables"

function RoomsPage(){
    return(
        <div className="h-[110vh] flex justify-end">
            <SideBar />

            <div className="w-full h-[90%] flex justify-end pt-5">

                <div className="w-[75%] flex flex-col mr-5 gap-5">
                    <h1 className="text-4xl font-semibold">Rooms Status</h1>
                    
                    <AirconRoomsTable />
                    <OrdinaryRoomsTable />
                    
                </div>

            </div>
        </div>
    )
}

export default RoomsPage