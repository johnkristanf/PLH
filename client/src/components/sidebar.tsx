import { NavLink } from 'react-router-dom';
import PLH_LOGO from '../assets/img/PLH_LOGO.png'

export function SideBar(){
    return(
        <aside className="fixed top-8 left-5 z-[9999] bg-orange-500 w-[20%] h-1/2 flex flex-col gap-8 items-center justify-center rounded-md">
            <div className="flex items-center gap-2">
                <img src={PLH_LOGO} alt="PLH_LOGO" width={80} className='rounded-full' />
                <h1 className='text-white font-semibold text-4xl'>PLH</h1>
            </div>

            <SideBarLinks />
        </aside>
    )
}


export function SideBarLinks(){
    const links = [
        {name:"Dashboard", to: "/dashboard"},
        {name:"Rooms", to: "/rooms"}
    ]

    return(
        <div className="flex flex-col gap-5 text-xl text-white text-center font-semibold">
            {
                links.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.to}
                        className={({ isActive }) => 
                            isActive ? "bg-black text-white rounded-md p-2" : "hover:opacity-75"
                        }
                        >
                        {item.name}

                    </NavLink>
                ))
            }
        </div>
    )
}