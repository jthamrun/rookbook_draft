import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";
import Nav from "../components/Nav";
import ServicesSection from "../components/ServicesSection";
import Contact from "../components/Contact";
import HomeImage1 from "../images/HomeInfo1.svg";
import InstaLayout from "../components/InstaLayout";
import Footer from "../components/Footer"; 

export default function Home() {
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        setIsAnimated(true);
    }, []);

    return (
        <div>
            <Head>
                <title>Homestand | Rookbook</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />

            <Hero />
            <InfoSection
                title="About Us."
                subtitle="Rookbook."
                subtitle2="noun."
                description={[
                    {
                        description:
                            "a curated team of athletes with an undying thirst for victory.",
                        key: 0,
                    },
                    {
                        description:
                            "a collection of Rooks, an important piece in a team of many.",
                        key: 1,
                    },
                    {
                        description: "(slang) a congregation of 'young rooks'",
                        key: 2,
                    },
                ]}
                animate={isAnimated}
                Image={HomeImage1}
                buttonText="Learn More"
            />
            <ServicesSection />
            <Contact />
            {/* <img src="https://scontent-lax3-2.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c255.0.929.929a/s640x640/200212808_170536898285682_299809471052085111_n.jpg?tp=1&_nc_ht=scontent-lax3-2.cdninstagram.com&_nc_cat=106&_nc_ohc=jfgTboGBUh8AX9Ee6L-&edm=APU89FABAAAA&ccb=7-4&oh=df022f0c5b1d131dcd2bd404179c0765&oe=60D17E09&_nc_sid=86f79a" /> */}
            {/* <InstaLayout instaPosts={instaPosts} /> */}
            <Footer />
        </div>
    );
}

// export async function getStaticProps(context) {
//     const client = new Instagram({
//         username: process.env.IG_USERNAME,
//         password: process.env.IG_PASSWORD,
//     })
    
//     let images = []

//     try {
//         await client.login()
//         // request photos for a specific instagram user
//         const instagram = await client.getPhotosByUsername({
//             username: process.env.IG_USERNAME,
//         })

//         if (instagram["user"]["edge_owner_to_timeline_media"]["count"] > 0) {
//         // if we receive timeline data back
//         //  update the posts to be equal
//         // to the edges that were returned from the instagram API response
//             images = instagram["user"]["edge_owner_to_timeline_media"]["edges"]
//         }

//     } catch (err) {
//         console.log("Something went wrong while logging into Instagram", err)
//     }

//     return {
//         props: {
//             instaPosts: images,
//         }
//     }
// }