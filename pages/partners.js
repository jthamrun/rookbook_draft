import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Partner from "../components/Partner";

function partners() {
    return (
        <div>
            <Nav />
            <div className="min-h-[75vh] text-center pt-16 flex flex-col px-10">
                <h1 className="text-3xl lg:text-4xl font-bold">Our Partners.</h1>
                <div className="mt-5 border-b-4 border-white w-12 self-center"></div>
                <h2 className="mt-5 text-lg">Just like in Chess, it is important to work together to deliver the perfect checkmate.</h2>
                <h2 className="text-lg">Together with our like-minded partners, we strive to change the way people think about sport management.</h2>

                <Partner />
            </div>
            <Footer />
        </div>
    )
}

export default partners
