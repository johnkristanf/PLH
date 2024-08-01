import { MonthlySalesChart, YealySalesChart } from "../components/charts"
import { SideBar } from "../components/sidebar"
import { EmployeeList, SalesTodayTable } from "../components/tables"

function DashBoardPage(){
    return(
        <div className="h-[105vh] flex justify-end">
            <SideBar />

            <div className="w-[89%] h-full flex justify-end pt-5">
                <div className="flex flex-col gap-5 w-[60%] h-full">
                    <MonthlySalesChart />
                    <YealySalesChart />
                </div>

                <div className="rounded-md w-[30%] h-full flex flex-col gap-5 bg-black p-5  mr-5">
                    <SalesTodayTable />
                    <EmployeeList />
                </div>

            </div>

           
        </div>
    )
}

export default DashBoardPage