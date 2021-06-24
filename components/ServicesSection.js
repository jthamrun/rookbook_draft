import Service from "./Service";

function ServicesSection() {
    return (
        <div className="min-h-[75vh] flex items-center justify-center flex-col bg-white text-black py-24">
            <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl">
                Our Philosophy
            </h2>
            <p className="mt-3 mb-10 text-md md:text-lg font-medium">
                The Rookbook Way.
            </p>

            {/* Service */}
            <div className="grid grid-flow-row-dense md:grid-cols-2 xl:grid-cols-4 md:-mt-5 mx-auto">
                <Service
                    image="https://static.wixstatic.com/media/4aa103_3aa5720b4f754cd4ac2487d46dd11dcd~mv2.png/v1/fill/w_200,h_200,al_c,q_85,usm_0.66_1.00_0.01/3.webp"
                    title="Scout."
                    description="We use advanced metrics to scout for Rooks."
                    footer="All around the region."
                />

                <Service
                    image="https://static.wixstatic.com/media/4aa103_2ed67b8001ed47fe93769b80cc815b1c~mv2.png/v1/fill/w_200,h_200,al_c,q_85,usm_0.66_1.00_0.01/4.webp"
                    title="Market."
                    description="We tailor-make marketing packages for scouting teams."
                    footer="Fit for a king."
                />

                <Service
                    image="https://static.wixstatic.com/media/4aa103_7523676b913e458097b002b060b4b3f1~mv2.png/v1/fill/w_275,h_245,al_c,q_85,usm_0.66_1.00_0.01/Rookbook%20LOGO%20(2).webp"
                    title="Sign."
                    description="We connect our Rooks with quality teams."
                    footer="Bridging the gap."
                />

                <Service
                    image="https://static.wixstatic.com/media/4aa103_92def3f50b314225baa0c706e42b283e~mv2.png/v1/fill/w_200,h_200,al_c,q_85,usm_0.66_1.00_0.01/ROOKBOOK%20(1).webp"
                    title="Win."
                    description="Our Rooks help your team win more."
                    footer="End of story."
                />
            </div>
        </div>
    );
}

export default ServicesSection;
