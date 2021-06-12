import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";
import Nav from "../components/Nav";
import HomeImage1 from "../images/HomeInfo1.svg";

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

            {/* Header */}
            <Nav />

            {/* Body */}
            <Hero />

            {/* Info Section */}
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
            />

            <h1>Test</h1>
        </div>
    );
}
