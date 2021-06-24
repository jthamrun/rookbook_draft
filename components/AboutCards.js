import AboutCard from "./AboutCard";
import Asia from "../images/Asia.svg";
import Search from "../images/Search.svg";
import Consult from "../images/Consult.svg";

function AboutCards() {
    return (
        <div className="min-h-auto max-width-sm flex items-center justify-center">
            <div className="my-16 grid grid-flow-row-dense lg:grid-cols-3 space-y-5 lg:space-y-0">
                <AboutCard title={"Southeast Asia"} description={"Rookbook focuses on Southeast Asia, with reach spanning the globe"} Image={Asia} />
                <AboutCard title={"New Opportunities"} description={"Rookbook explores new opportunities for our players and managers"} Image={Search} />
                <AboutCard title={"Create a Personal Brand"} description={"Rookbook creates a personal brand and assists our players and managers with all aspects of their careers"} Image={Consult} />
            </div>
        </div>
    )
}

export default AboutCards
