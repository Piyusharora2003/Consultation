import Image from "next/image";
import styles from "./styles.module.css";

export interface userProfileInfoProps {
    name : string;
    avatar : string;
    skills : string[];
    position : string;
    qualification : string;
    experience : string;
    half_session: number;
    full_session: number;
    availibility: string;
}

function UserProfileBlock ( {user} : { user : userProfileInfoProps}) {
    return (
        <div className="flex flex-col items-center shadow  mx-auto mt-12 mb-8 py-12 shadow-rose-300 w95 rounded-lg">
            <div className="flex flex-row w-11/12 ">
                <div className="w-1/2 border-e-2 border-zinc-200 flex flex-row">
                    <Image src={`/statics/${user.avatar}`} alt="User profile image" className="me-5 mt-3" width={150} height={150}/>
                    <div className="ms-5 text-slate-500">
                        <h1 className="text-2xl font-bold text-black">{user.name}</h1>
                        <h2 className="text-base pb-2">{user.position}</h2>
                        <div className="flex flex-row h-4 gap-3 mb-3">
                            <Image src="/statics/icons/Qualification.png" alt="Star" width={15} height={15}/>
                            <span className="text-sm">{user.qualification}</span>
                        </div>
                        <div className="flex flex-row h-4 gap-3 mb-3">
                            <Image src="/statics/icons/Experience.png" alt="Star" width={15} height={15}/>
                            <span className="text-sm">{user.experience}</span>
                        </div>
                        <div className="flex flex-row h-4 gap-3">
                            <Image src="/statics/icons/Fees.png" alt="Star" width={15} height={15}/>
                            <span className="text-sm"> Consultation fee ₹{user.half_session}</span>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 px-12">
                    <div className="text-2xl font-bold text-black pb-3"> Consultation Prices </div>
                    <div className="flex flex-row gap-4">
                        <div className="flex ">
                            <div className="pt-1"><Image src={"/statics/icons/Currency.png"} alt="" width={15} height={15}/></div>
                            <div className="flex flex-col ms-1">
                                <div>30 min session</div>
                                <div className="font-bold">₹{user.half_session}</div>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="pt-1"><Image src={"/statics/icons/Currency.png"} alt="" width={15} height={15}/></div>
                            <div className="flex flex-col ms-1">
                                <div>01 hr session </div>
                                <div className="font-bold">₹{user.full_session}</div>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="pt-1"><Image src={"/statics/icons/Clock.png"} alt="" width={15} height={15}/></div>
                            <div className="flex flex-col ms-1">
                                <div>Availability</div>
                                <div className="font-bold">{user.availibility}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-11/12">
                <div className="mt-5 mb-2 font-bold text-xl">
                    Skills
                </div>
                <div className="flex flex-row gap-3">
                    {
                        user.skills.map((skill) => {
                            return (
                                <div className= {`px-6 py-2 rounded-full ${styles.skills}`}>
                                    <span className="text-sm">{skill}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default UserProfileBlock;