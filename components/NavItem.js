function NavItem({ title, isDropdown }) {
    return (
        <div className={isDropdown ? "hover:font-bold" : "hover:text-gray-300"}>
            <p className="tracking-widest">{title}</p>
        </div>
    )
}

export default NavItem
