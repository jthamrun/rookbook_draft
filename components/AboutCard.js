import Image from "next/image";

function AboutCard({ title, description, Image }) {
    return (
        <div className="flex mx-5 bg-white z-30 p-10 text-black rounded-xl lg:flex-col">
            {/* Image */}
            <Image width={80} height={80} className="self-center -mt-2 lg:hidden" />

            <div className="ml-7">
                {/* Title */}
                <h1 className="font-medium text-xl">{title}</h1>

                {/* Description */}
                <p className="text-sm max-w-prose">{description}</p>
            </div>

            <Image width={250} height={250} className="self-center hidden lg:flex lg:mt-5" />
        </div>
    )
}

export default AboutCard
