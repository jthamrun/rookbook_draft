import Founder from "./Founder";

function Founders() {
    return (
        <div className="min-h-[75vh] bg-white text-black py-16 flex flex-col items-center justify-center px-10">
            <h1 className="text-2xl lg:text-4xl xl:text-5xl text-center font-bold">Meet Our Founders</h1>
            
            <div className="mt-7 md:mt-12 grid grid-flow-row-dense md:grid-cols-2 xl:grid-cols-4 space-y-5 md:space-y-0 justify-self-start">
                <Founder name="Jeff Lee" title="Partner" description1="Having once aspired to become a football player himself, Jeff became keenly aware of the shortcomings of current sports agenices, and guides Rookbook to bridge this gap." description2="He supports Rookbook Sports to help players find unorthodox opportunies to advance their sporting careers." />
                <Founder name="Kim Ng" title="Marketing" description1="A self-proclaimed sports aficionado, Kim worked as a digital marketer before shifting focus onto his passion." description2="He brings expertise and insights from various disciplines of sports, and melds it with his marketing experience to constantly redefine and disrupt the field of sports marketing." />
                <Founder name="Vikram Jayakumar" title="Management" description1="An avid football fanatic, Vikram co-launched soccerkakis.org as a platform to tell footballing stories around the world." description2="He has been carefully following Asian football for the past decade, and uses that knowledge to analyse and manage players, the Rookbook way." />
                <Founder name="Oh Ji Heon" title="Legal Advisor" description1="A passionate sports fan, Oh melds his sporting passion with an oustanding legal service. He comes with a wealth of experience in the sports industry as well, having provided his services to athletes in the K-League, KBL, and KBO, as well as organizations such as the KFA, Seoul Sports Council and Pyeongchang Olympics." description2="He now serves as the legal advisor to Rookbook Sports, helping bring first-class legal advice to those ready to change the game." />
            </div>
        </div>
    )
}

export default Founders
