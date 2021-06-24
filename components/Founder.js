function Founder({ name, title, description1, description2 }) {
    return (
        <div className="flex flex-col max-w-sm mx-10">
            <div className="bg-black text-white self-center px-7 py-2 rounded-xl">
                <h1 className="text-xl lg:text-2xl font-semibold text-center">{name}</h1>
                <h3 className="text-md lg:text-lg font-medium text-center">{title}</h3>
                <div className="border-white border-b-2"></div>
            </div>
            
            <div className="flex flex-col text-center">
                <p className="text-sm lg:text-md mt-5">{description1}</p>
                <p className="text-sm lg:text-md mt-3 mb-2 md:mb-10">{description2}</p>
            </div>
            
        </div>
    )
}

export default Founder
