import InstaIcon from "../images/instagram.svg";
import LinkedInIcon from "../images/LinkedInIcon.svg";
import Link from "next/link";

function Footer() {
    return (
        <div className="h-[15vh] bg-[#141313] flex flex-col items-center justify-center">
            <div className="flex flex-row space-x-2">
                <Link href="https://www.instagram.com/rookbooksports/">
                    <InstaIcon className="h-6 cursor-pointer"/>
                </Link>
                <Link href="https://www.linkedin.com/in/rookbook-sports-0398401ba/">
                    <LinkedInIcon className="h-6 cursor-pointer"/>
                </Link>
            </div>
            
            <h2 className="mt-2 text-sm">©2020 by Rookbook. For the love of the game</h2>
        </div>
    )
}

export default Footer
