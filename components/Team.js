import Image from "next/image";

function Team({ title, image, name, description}) {
    const desc = description

    const listDesc = desc.map((desc, i) => (
        <p key={i} className="mt-5">
            {desc}
        </p>
    ));

    return (
        <div className="px-10 max-w-sm mt-20">
            <h2 className="text-lg font-bold pb-1">{title}</h2>
            <Image src={image} width={300} height={400} className="transform hover:scale-105 filter grayscale hover:grayscale-0 transition ease-out duration-1000" />
            <h2 className="text-xl font-bold mt-5">{name}</h2>
            {listDesc}
        </div>

        // <div>
        //     <button class="transform hover:scale-125 hover:bg-white hover:text-black transition ease-out duration-500">Hover me</button>
        // </div>
    )
}

export default Team
