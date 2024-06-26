import Image from "next/image";

const content = [{
        title: "Career Advancement",
        description: " Position yourself for career advancement by gaining practical experience, expanding your professional network, and building a solid reputation within the startup community",
        image: "section4A.png",
    },{
        title: "Portfolio Building",
        description: "Build a strong portfolio of projects and experiences that showcase your skills and accomplishments to potential employers or clients.",
        image: "section4B.png",
    },{
        title: "xposure to Cutting-Edge Technologies",
        description: "Work on projects that leverage the latest technologies and trends, giving you hands-on experience with tools and platforms shaping the future of business.",
        image: "section4C.png",
    },{
        title: "Networking Opportunities",
        description: " Connect with like-minded students and professionals passionate about innovation and entrepreneurship. Build lasting relationships that can open doors to future collaborations and opportunities.",
        image: "section4D.png",
    }
];

interface elementProps {
    title: string;
    description: string;
    image: string;
}

function Section4() {
    return (
        <div className="flex flex-row flex-wrap w-5/6 mx-auto min-h-24">
            {
                content.map((elem: elementProps, index: number) => {
                    return (
                        <div 
                            key={index}
                            className="flex flex-col w-[35%] mx-auto mb-32 "
                        >
                            <Image 
                                src={`/statics/${elem.image}`} 
                                alt={elem.title} 
                                width={375} 
                                height={280}
                                className="mb-3 mx-auto"
                                style={{"height": "280px"}}
                            />
                            <div className="text-center font-bold text-xl">{elem.title}</div>
                            <div className="text-center font-medium">{elem.description}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Section4;