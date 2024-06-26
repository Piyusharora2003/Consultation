import Image from "next/image";
import styles from './home_style.module.css';

const contents = [{
    title: "Diverse Opportunities",
    description: "Bigstartups Network opens doors to a wide array of opportunities, allowing individuals to explore roles in startups spanning various industries and locations. This diversity provides exposure to different business models, cultures, and challenges, enriching one's professional experience and skill set.",
    image: "section3A.png",
    placement: "left",
},{
    title: "Flexibility",
    description: "The platform offers flexibility in terms of employment arrangements, catering to different preferences and lifestyles. Whether someone seeks the stability of full-time employment, the flexibility of part-time roles, or the autonomy of freelancing, Bigstartups Network empowers individuals to tailor their work arrangements to suit their needs and aspirations.",
    image: "section3B.png",
    placement: "left",
},{
    title: "Skill Development",
    description: "Engaging with startups from diverse backgrounds provides ample opportunities for skill development and growth. Whether it's through challenging projects, exposure to new technologies, or mentorship from seasoned entrepreneurs, Bigstartups Network offers a dynamic learning environment where individuals can continuously enhance their capabilities and adapt to evolving industry trends.",
    image: "section3C.png",
    placement: "left",
},{
    title: "Global Reach",
    description: "By transcending regional boundaries, Bigstartups Network enables individuals to access opportunities worldwide. This global reach not only expands the pool of available positions but also fosters cross-cultural collaboration and networking, opening doors to international career advancement and personal growth.",
    image: "section3D.png",
    placement: "right",
},{
    title: "Career Control",
    description: "Bigstartups Network puts individuals in the driver's seat of their careers, allowing them to make informed choices aligned with their goals and values. This autonomy fosters a sense of empowerment and ownership over one's professional trajectory, enabling individuals to pursue paths that resonate with their interests, skills, and aspirations.",
    image: "section3E.png",
    placement: "right",
},{
    title: "Networking Opportunities",
    description: "By connecting with startups and professionals from around the world, individuals can expand their professional network and access valuable connections and resources. These networking opportunities not only facilitate career advancement but also foster a sense of community and collaboration within the global startup ecosystem.",
    image: "section3F.png",
    placement: "right",
}];

type ContentProps = {
    title: string;
    description: string;
    image: string;
    placement: string;
}

function Section3() {
    return (
        <div className="flex w-full">
            <div className="w-1/2   flex flex-col">
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
                <div className= {` h-64 border-e-2  ${styles._border_color_custom_orange} `}></div>
            </div>
            <div className="w-1/2 flex flex-col">
            <div className={`h-56`}></div>
                {
                    contents.map((content: ContentProps, index: number) => {
                        return content.placement === "right" ?  (
                            <div className= {` border-b-2 px-24 pt-16 ${styles._border_color_custom_orange}`}>
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

export default Section3;