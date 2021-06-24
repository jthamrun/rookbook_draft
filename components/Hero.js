import Image from "next/image";

function Hero() {
    return (
        <div className="flex justify-center items-center md:relative h-[75vh] xl:h-[60vh] bg-no-repeat bg-hero-pattern bg-cover bg-top">
            <div className="flex flex-col -mt-40 md:absolute md:top-50 md:left-20 p-10 font-bold bg-gray-200 bg-opacity-80">
                <h1 className="lg:text-8xl sm:text-6xl text-4xl text-black">
                    Rookbook.
                </h1>
                <h3 className="text-black text-xs md:text-xl">The Tailored Sports Management Experience</h3>
            </div>
        </div>
)
}
export default Hero
