import Team from "./Team";

function TheTeam() {
    return (
        <div className="min-h-[75vh] text-center pt-16 flex flex-col items-center">
            <h1 className="text-3xl lg:text-4xl font-bold">The Team.</h1>
            <h2 className="text-xl lg:text-2xl font-medium -mb-8">Welcome to Team Rookbook.</h2>

            <div className="grid gap-x-24 grid-flow-row-dense md:grid-cols-2 pb-20 mx-auto">
                <Team title="Rook." image="https://static.wixstatic.com/media/4aa103_79a3f5d1a0a6478e923ab6b0e7248672~mv2.png/v1/fill/w_301,h_399,al_c,q_85,usm_0.66_1.00_0.01/1.webp" name="Tajeli Salamat" description={["A unique player in Singapore's footballing landscape", "While he's been primarily deployed as a centre-back for the past 2 seasons, Tajeli is an accomplished utility player and is just as competent in the attack as he is in defence.", "Making his debut at 17, Tajeli has grown from strength to strength since then and, after featuring in the 2020 SPL Team Of The Year, the future is looking bright for arguably the best Singaporean player not to feature for the National Team."]} />

                <Team title="Ambassador." image="https://static.wixstatic.com/media/4aa103_0722d6c37dfa4787a1eab2f6d93a8580~mv2.png/v1/fill/w_604,h_802,al_c,q_90,usm_0.66_1.00_0.01/Del%20Ambassador%20Shot%20(1).webp" name="Delwinder Singh" description={["The Youngest Captain in Tanjong Pagar United's history.", "Delwinder is a natural-born leader on and off the field. In recent years, he has become a mentor to younger players and his influence cannot be overstated.", "Besides his leadership traits, he is a real rock in the back that truly bolsters any backline. A journeyman in Singapore, Del is a 10-season veteran and a Singapore National Player in the prime years of his career."]} />

                <h1 className="md:col-span-2 font-bold text-lg pt-16 -mb-20 pb-1">Managers.</h1>

                <Team image="https://static.wixstatic.com/media/4aa103_0722d6c37dfa4787a1eab2f6d93a8580~mv2.png/v1/fill/w_604,h_802,al_c,q_90,usm_0.66_1.00_0.01/Del%20Ambassador%20Shot%20(1).webp" name="Lee Lim Saeng" description={["A true icon of Asian Football.", "A hallowed player in Korea who played in the 1998 World Cup and an even more legandary manager, Lee is well respected as a true stalwart of the football scene.", "After 5 years at Home United, stints in the Chinese Super League and winning the FA Cup with Suwon Samsung Bluewings, Lee is currently serving in an advisory role for the Korea Football Association."]} />

                <Team image="https://static.wixstatic.com/media/4aa103_0722d6c37dfa4787a1eab2f6d93a8580~mv2.png/v1/fill/w_604,h_802,al_c,q_90,usm_0.66_1.00_0.01/Del%20Ambassador%20Shot%20(1).webp" name="Kim Do Hoon" description={["A South korean Legend.", "During his playing career, Kim was renowned as a lethal forward who raked in the goals and famously scored the winner against the Brazil National Team in 1999.", "After spending 2 seasons with Incheon United, he would spend the next 4 years with Ulsan Hyundai where he would famously clinch the 2020 Asian Champions League title, the pinnacle of Asian club football.", "He is now the Head Coach of Singapore's Lion City Sailors."]} />
            </div>
        </div>
    )
}

export default TheTeam