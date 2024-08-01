import { NavLink } from 'react-router-dom';
import PLH_LOGO from '../assets/img/PLH_LOGO.png'

export function SideBar(){
    return(
        <aside className="fixed top-0 left-0 z-[9999] bg-orange-500 w-[20%] h-full flex flex-col gap-12 items-center pt-16">
            <CompanyLogo />

            <SideBarLinks />

            <AccountSignout />

        </aside>
    )
}


function CompanyLogo(){
    return(
        <div className="flex items-center gap-2">
            <img src={PLH_LOGO} alt="PLH_LOGO" width={85} className='rounded-full' />
            <h1 className='text-white font-semibold text-5xl'>PLH</h1>
        </div>
    )
}


function SideBarLinks(){
    const links = [
        {name:"Dashboard", to: "/dashboard"},
        {name:"Check In", to: "/check-inn"},
        {name:"Rooms", to: "/rooms"},
    ]

    return(
        <div className="flex flex-col gap-8 text-xl text-white text-center font-semibold">
            {
                links.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.to}
                        className={({ isActive }) => 
                            isActive ? "bg-black text-white rounded-md p-2" : "hover:bg-gray-400 hover:rounded-md p-2"
                        }
                        >
                        {item.name}

                    </NavLink>
                ))
            }
        </div>
    )
}

function AccountSignout(){
    return(
        <div className="absolute bottom-3 w-full flex flex-col justify-center gap-2 items-center">
            <h1 className='text-white text-2xl font-semibold'>Administrator</h1>
            <button className='bg-gray-600 rounded-md p-2 w-[80%] text-white font-semibold hover:opacity-75'>
                SIGNOUT
            </button>
        </div>
    )
}