import Image from "next/image";
import styles from './home_style.module.css'

const Cards = [{
    title: "Browse Jobs ",
    description: " Discover a wide range of projects offered by startups, companies, and organizations across various industries and domains.",
    image: "section2A.png"
},{
    title: "Browse Internship ",
    description: "Discover Freelancing opportunities offered by startups, SMEs, corporations, and other organizations seeking to recruit talented and ambitious individuals.",
    image: "section2B.png"
},{
    title: "Freelancing Projects",
    description: "Discover internship opportunities offered by startups, SMEs, corporations, and other organizations seeking to recruit talented and ambitious individuals.",
    image: "section2C.png"

}]

interface CardProps {
    title: string;
    description: string;
    image: string;
}

function Section2() {
    return ( 
    <section>
        <h1 className="text-center text-4xl font-bold pb-3 ">For Students</h1>
        <div className="flex justify-between px-3">
            {
                Cards.map(( card: CardProps, index) => {
                    return (
                        <div key={index} className="flex flex-col py-3 w-1/4 items-center">
                            <Image src={`/statics/${card.image}`} alt="" width="300" height="300" />
                            <div className="text-center font-bold text-2xl ">{card.title}</div>
                            <div className="text-center pb-4">{card.description}</div>
                            <button className={`button rounded-full ${styles._btn}`}>Explore</button>
                        </div>
                    )
                })
            }
        </div>
    </section>
    )}

export default Section2;
