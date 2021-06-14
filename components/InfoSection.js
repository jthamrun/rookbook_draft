import React, { useEffect, useState } from "react";
import Image from "next/image";
import HomeImage1 from "../images/HomeInfo1.svg";

function InfoSection({
    title,
    subtitle,
    subtitle2,
    description,
    animate,
    Image,
    buttonText,
}) {
    let listDescs = null;

    if (Array.isArray(description)) {
        const desc = description;

        const listDesc = desc.map((desc) => (
            <li key={desc.key}>
                {desc.key + 1}. {desc.description}
            </li>
        ));

        listDescs = <ol>{listDesc}</ol>;
    } else {
        listDescs = description;
    }

    return (
        <div className="min-h-screen flex items-center flex-col bg-black py-24 px-10 lg:px-24 lg:flex-row lg:justify-center">
            <div className="text-white max-w-2xl">
                {/* Section Title */}
                <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl">
                    {title}
                </h2>

                {/* Section Subtitle */}
                <p className="mt-3 text-md md:text-lg uppercase font-medium">
                    {subtitle}
                </p>

                {/* Section Subtitle 2 */}
                <p className="text-sm font-medium">{subtitle2}</p>

                {/* Section Description */}
                <p className="mt-5 font-light">{listDescs}</p>

                {/* Section Button */}
                <button className="inline-block bg-white px-7 py-2 rounded-full shadow-lg text-black tracking-wide mt-5">
                    {buttonText}
                </button>
            </div>

            <Image
                className={`${
                    animate ? "" : "translate-x-full translate-y-full"
                } mt-24 md:mt-28 lg:mt-0 md:max-w-xl transform transition duration-1000 ease-in-out`}
            />
        </div>
    );
}

export default InfoSection;
