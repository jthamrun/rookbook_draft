import { router, useRouter } from "next/router"
import NavItem from "./NavItem"

function Dropdown({ isOpen, toggle }) {
    const router = useRouter();

    return (
        <div className={isOpen ? "flex flex-col py-4 space-y-4 text-center items-center bg-white text-black" : "hidden"} >
            <NavItem title="Homestand" isDropdown="true" directTo={"/"} onClick={toggle}/>
            <NavItem title="About Us" isDropdown="true" directTo={"/about-us"} onClick={toggle}/>
            
            <NavItem title="The Team" isDropdown="true" directTo={"/the-team"} onClick={toggle}/>
            <NavItem title="Partners" isDropdown="true" directTo={"/partners"} onClick={toggle}/>
        </div>
    )
}

export default Dropdown
