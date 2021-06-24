import Image from "next/image";
import Link from "next/link";

function Partner() {
    return (
        <div className="grid gap-x-12 gap-y-16 grid-flow-row-dense md:grid-cols-3 mx-auto py-16">
            <Link href="https://www.facebook.com/tffc2019/">
                <Image src="https://i.imgur.com/qYhh3fB.png" width={150} height={150} className="cursor-pointer" />   
            </Link>

            <Link href="https://www.myprotein.com.sg/?affil=awin&utm_content=https%3A%2F%2Fwww.facebook.com%2Fgeylanginternationalfc%2F&utm_term=Social+Content&utm_source=AWin-844625&utm_medium=affiliate&utm_campaign=AffiliateWin&awc=10751_1624515886_eb6fc95d170590c851c694b0a210b5a2">
                <Image src="https://static.wixstatic.com/media/4aa103_dda8cbcfe33346418058ada1942a1e12~mv2.png/v1/fill/w_246,h_174,al_c,q_85,usm_0.66_1.00_0.01/Myprotein%20-%20Wordmark%20%2B%20Mark%20Lockup.webp" width={150} height={150} className="cursor-pointer" />
            </Link>

            <Link href="https://www.facebook.com/Gentleman-Barber-Shop-629780164081451/">
                <Image src="https://static.wixstatic.com/media/4aa103_8623d39761b74bfa8db622ea7387121b~mv2.png/v1/fill/w_183,h_183,al_c,q_85,usm_0.66_1.00_0.01/image.webp" width={150} height={150} className="cursor-pointer" />
            </Link>
                     
            <Link href="https://soccerkakis.org/">
                <Image src="https://i.imgur.com/xvtWpMf.png" width={150} height={150} className="cursor-pointer" />
            </Link>    

            <Link href="https://www.edgeofthebox.co.uk/">
                <Image src="https://i.imgur.com/OgQiPJB.png" width={150} height={150} className="cursor-pointer" />
            </Link>        
                        
            <Link href="https://www.instagram.com/lionsofasia_sg/">
                <Image src="https://static.wixstatic.com/media/4aa103_3741a46e9a384f2596388d58003b8cf4~mv2.png/v1/fill/w_203,h_120,al_c,q_85,usm_0.66_1.00_0.01/2021%20logo%20transparent%20new%20(1).webp" width={150} height={150} className="cursor-pointer" /> 
            </Link>      
                       

        </div>
    )
}

export default Partner
