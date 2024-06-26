import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";

function Home () {
    return (
        <div className="px-24">
            <Section1/>    
            <p className="font-bold text-center text-3xl pb-6">
                Access to wide pool of student talent across the globe
            </p>
            <Section2/>
            <p className="font-bold text-center text-3xl py-12">
                Key benefits for students?
            </p>
            <Section3/>
            <p className="font-bold text-center text-3xl py-12">
                Additional benefits
            </p>
            <Section4/>
            <p className="font-bold text-center text-3xl py-12">
                For Startups
            </p>
            <Section5/>
            <p className="font-bold text-center text-3xl py-12">
                Key benefits for startups?
            </p>
            <Section6/>
            <Section7/>
        </div>  
    )
}

export default Home;