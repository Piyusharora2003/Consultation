import Image from "next/image";
import styles from "./home_style.module.css";
import Link from "next/link";

function Section1() {
    return (
        <section className="flex flex-row py-3">
        <div className="w-1/2 px-auto bg-gray-10 flex flex-col self-center mx-auto items-center">
            <div className=" w-5/6 bg-gray-30 ">
                <h1 className="text-4xl font-black pb-3">WORK WITH STARTUPS</h1>
                <p className="text-lg">we're dedicated to bridging the gap between aspiring students and innovative startups, creating opportunities that know no boundaries</p>
                <div className="mt-4">
                    <Link href={"/book-slot/dummy"} className={`button rounded-full ${styles._btn} `}>
                        Book a session
                    </Link>
                </div>
            </div>
        </div>
        <div className="w-1/2 px-auto">
            <Image src={"/statics/section1.png"} alt="" width="577" height="577" />
        </div>
    </section>
    );
}

export default Section1;    