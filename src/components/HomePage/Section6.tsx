import Image from "next/image";
import styles from './home_style.module.css';

const contents = [{
    title: "Access to Diverse Talent",
    description: "By tapping into a global talent pool, startups can benefit from a wide range of perspectives, experiences, and skills. This diversity fosters innovation and creativity within the team, leading to fresh ideas and unique solutions to challenges.",
    image: "section6A.png",
    placement: "left",
},{
    title: "Cost Savings",
    description: "Startups often operate on tight budgets, and accessing cost-effective student resources can be a game-changer. By leveraging student talent, startups can reduce their overhead costs associated with hiring while still accessing high-quality skills and services.",
    image: "section6B.png",
    placement: "right",
},{
    title: "Tailored Solutions",
    description: "Student resources can be tailored to meet the specific needs of startups, whether it's in the form of project-based work, part-time assistance, or specialized skills. This flexibility allows startups to scale their workforce according to demand without committing to long-term contracts or excessive expenses.",
    image: "section6C.png",
    placement: "left",
},{
    title: "Flexible Hiring Models",
    description: "The ability to choose from a variety of hiring options, including full-time employees, interns, or freelancers, gives startups the freedom to structure their teams in a way that best suits their current stage of growth and objectives.",
    image: "section6D.png",
    placement: "right",
},{
    title: "Global Expansion Opportunities",
    description: "Building relationships with individuals from different backgrounds and cultures not only enriches the startup's internal culture but also provides valuable insights and connections that can facilitate international growth and market penetration.",
    image: "section6E.png",
    placement: "left",
},{
    title: "Breaking Down Geographic Barriers",
    description: "Network, startups can overcome these barriers and connect with talent from around the world. This opens up new possibilities for collaboration and expansion, allowing startups to build diverse and dynamic teams regardless of location.",
    image: "section6F.png",
    placement: "right",
}];

type ContentProps = {
    title: string;
    description: string;
    image: string;
    placement: string;
}

function Section6() {
    return (
        <div className={`flex w-full ${styles.half_bdr}`}> 
            <div className="w-1/2   flex flex-col ">
                {
                    contents.map((content: ContentProps, index: number) => {
                        return content.placement === "left" ?  (
                            <div 
                                key={index}
                                className= {`border-e-2 border-b-2 px-24 pt-16 ${styles._border_color_custom_orange}`}>
                                <Image 
                                    src={`/statics/${content.image}`}
                                    alt={content.title}
                                    width={350}
                                    height={350}
                                    className="mx-auto"
                                />
                                <div className="text-2xl font-bold">
                                    {content.title}
                                </div>
                                <div className="pb-4">
                                    {content.description}
                                </div>
                            </div>
                        )
                        : <></>
                    })
                }
                <div className= {` h-96 border-e-2  ${styles._border_color_custom_orange} `}></div>
            </div>
            <div className="w-1/2 flex flex-col">
            <div className={`h-56`}></div>
                {
                    contents.map((content: ContentProps, index: number) => {
                        return content.placement === "right" ?  (
                            <div key={index} className= {` border-b-2 px-24 pt-16 ${styles._border_color_custom_orange} ${index === 5 ? "border-b-0" : ""}`}>
                                <Image 
                                    src={`/statics/${content.image}`}
                                    alt={content.title}
                                    width={350}
                                    height={350}
                                    className="mx-auto"
                                />
                                <div className="text-2xl font-bold">
                                    {content.title}
                                </div>
                                <div className="pb-4">
                                    {content.description}
                                </div>
                            </div>
                        )
                        : <></>
                    })
                }
            </div>
        </div>
    )
}

export default Section6;