import Image from "next/image";
import styles from './home_style.module.css';

const Cards = [{
        title: "Post Freelancing Projects",
        description: " We provide flexible hiring options to suit your business requirements.",
        btn_text: "Post Projects",
        image: "section5A.png"
    },{
        title: "Post Jobs & Internship",
        description: "With Bigstartups Network, there are no regional barriers. Expand your horizons and connect with talent beyond borders.",
        btn_text: "Post Jobs & Internships",
        image: "section5B.png"
    }
];

interface CardProps {
    title: string;
    description: string;
    image: string;
    btn_text: string;
}

function Section5() {
    return (
        <section className="flex justify-between px-3 w-3/4 mx-auto">
            {
                Cards.map(( card: CardProps, index) => {
                    return (
                        <div key={index} className="flex flex-col py-3 w-[35%] items-center">
                            <Image src={`/statics/${card.image}`} alt="" width="337" height="337" />
                            <button className={`button rounded-full ${styles.startup_btn}`}>{card.btn_text}</button>
                            <div className="text-center font-bold text-2xl ">{card.title}</div>
                            <div className="text-center pb-4">{card.description}</div>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default Section5;  