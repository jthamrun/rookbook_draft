import NavItem from "./NavItem"

function Dropdown({ isOpen, toggle }) {
    return (
        <div className={isOpen ? "flex flex-col py-4 space-y-4 text-center items-center bg-white text-black" : "hidden"} onClick={toggle}>
            <NavItem title="Homestand" isDropdown="true" />
            <NavItem title="About Us" isDropdown="true" />
            <NavItem title="The Team" isDropdown="true" />
            <NavItem title="Partners" isDropdown="true" />
        </div>
    )
}

export default Dropdown
