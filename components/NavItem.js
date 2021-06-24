import router, { useRouter } from "next/router";

function NavItem({ title, isDropdown, directTo }) {
    const router = useRouter();

    return (
        <div className={isDropdown ? "hover:font-bold" : "hover:text-gray-300"} onClick={() => router.push(directTo)}>
            <p className="tracking-widest cursor-pointer">{title}</p>
        </div>
    )
}

export default NavItem
