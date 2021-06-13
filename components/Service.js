import Image from "next/image";

function Service({ image, title, description, footer }) {
    return (
        <div className="flex flex-col m-5 bg-black z-30 p-10 text-white items-center rounded-xl min-w-xs max-w-sm">
            <Image src={image} width={150} height={150} />
            <h1 className="my-3 text-3xl font-medium">{title}</h1>
            <p className="text-center text-xl font-light">{description}</p>
            <p className="my-3 font-light">{footer}</p>
        </div>
    );
}

export default Service;
