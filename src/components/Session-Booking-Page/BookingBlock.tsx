"use client";

import { act, useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";


enum availibility {
    available = "Available",
    unAvailable = "un-available"
}

enum sessionLength {
    half = "Half",
    full = "Full" 
}

interface optionProps {
    name: string;
    timings: Array<{
        timing: string;
        status: availibility;
        sessionLength: sessionLength;
    }>

}

const options: optionProps[] = [{
    name : "Startup Consulting",
    timings : [ 
        {timing: "7:00-7:30 AM",  status : availibility.available ,   sessionLength: sessionLength.half},
        {timing: "7:30-8:00 AM",  status : availibility.unAvailable , sessionLength: sessionLength.half},
        {timing: "9:00-10:00 AM", status : availibility.available ,   sessionLength: sessionLength.full},
        {timing: "10:00-11:00 AM",status : availibility.available ,   sessionLength: sessionLength.full},
        {timing: "11:00-12:00 PM",status : availibility.available ,   sessionLength: sessionLength.full},
        {timing: "12:00-12:30 PM",status : availibility.unAvailable , sessionLength: sessionLength.half},
        {timing: "12:30-1:00 PM", status : availibility.available ,   sessionLength: sessionLength.half},
        {timing: "2:00-2:30 PM",  status : availibility.available ,   sessionLength: sessionLength.half},
        {timing: "3:00-3:30 PM",  status : availibility.available ,   sessionLength: sessionLength.half},
        {timing: "4:00-4:30 PM",  status : availibility.unAvailable , sessionLength: sessionLength.half},
        {timing: "5:00-5:30 PM",  status : availibility.available ,   sessionLength: sessionLength.half},
        {timing: "6:00-6:30 PM",  status : availibility.available ,   sessionLength: sessionLength.half},
        {timing: "7:00-7:30 PM",  status : availibility.available ,   sessionLength: sessionLength.half}
    ],
},{
    name: "carrer Consulting",
    timings : [ 
        {timing: "7:30-8:00 AM",  status : availibility.unAvailable , sessionLength: sessionLength.half},
        {timing: "8:00-8:30 AM",  status : availibility.available ,   sessionLength: sessionLength.half},
        {timing: "9:00-10:00 AM", status : availibility.available ,   sessionLength: sessionLength.full},
        {timing: "11:00-11:00 AM",status : availibility.available ,   sessionLength: sessionLength.full},
        {timing: "11:00-12:00 PM",status : availibility.available ,   sessionLength: sessionLength.full},
        {timing: "12:00-12:30 PM",status : availibility.unAvailable , sessionLength: sessionLength.half},
        {timing: "12:30-1:00 PM", status : availibility.available ,   sessionLength: sessionLength.half},
        {timing: "2:00-2:30 PM",  status : availibility.available ,   sessionLength: sessionLength.half},
        {timing: "3:00-3:30 PM",  status : availibility.available ,   sessionLength: sessionLength.half},
        {timing: "4:00-4:30 PM",  status : availibility.unAvailable , sessionLength: sessionLength.half},
        {timing: "5:00-5:30 PM",  status : availibility.available ,   sessionLength: sessionLength.half},
        {timing: "6:00-6:30 PM",  status : availibility.available ,   sessionLength: sessionLength.half},
        {timing: "7:00-7:30 PM",  status : availibility.available ,   sessionLength: sessionLength.half}
    ],
}]

enum pages {
    booking = "Booking",
    payment = "Payment"
}

function BookingBlock() {
    const [PageInfo , setPageData] = useState<pages>(pages.booking); // change to pages.booking to see booking page
    const [activeOption , setActiveOption] = useState<optionProps | undefined>(options[0]);
    const [chosenTiming , setChosenTiming] = useState<string | undefined>(undefined);
    const [chosen_session_Length , set_chosenSessionLength ] = useState<string | undefined>(undefined);

    const availableSlotsCount = (activeOption: optionProps | undefined): number =>{ 
        if (!activeOption) return 0;
        return activeOption.timings.filter((timing) => timing.status === "Available").length;
    } 

    const n_dateAfterToday = (n: number): string =>{
        const date = new Date();
        date.setDate(date.getDate() + n);
        return date.toDateString();
      }

    function handleSessionSelection(timing: {timing: string , status: availibility , sessionLength: sessionLength}){
        if (timing.status === "Available"){
            setChosenTiming(timing.timing);
            set_chosenSessionLength(timing.sessionLength);
        }
        else{
            console.log("Slot not available");
        }
    }
    
    function preceed_payment_handler(){
        setPageData(pages.payment);
    }

    return (
        <div className="w95 mx-auto">
            {
                PageInfo === pages.booking ? ( <>
                <div className="font-bold text-xl"> Available Slots</div>
                <div className="w-full flex flex-col items-center"> 
                    <div className="my-4">
                    {
                        options.map((option , index) => {
                            return (
                                <button 
                                    key={index} 
                                    className={` px-12 py-3 rounded ${option.name === activeOption?.name ? "bg-rose-200" : styles.nactivebtn}`}
                                    onClick={() => {
                                        set_chosenSessionLength(undefined);
                                        setChosenTiming(undefined);
                                        setActiveOption(option)
                                    }}
                                >
                                    {option.name}
                                </button>
                        )})
                    }
                    </div>
                    <div className="flex flex-row ">
                        <button>
                            <Image src={"/statics/icons/Previous_btn.png"} alt="" width={60} height={60}/>
                        </button>
                        <div className="flex flex-row">
                            <div className="px-6 py-2 text-center">
                                <h1 className="font-bold ">Today</h1>
                                <span className="text-blue-900">{availableSlotsCount(activeOption)} available</span>
                            </div>
                            <div className="px-6 py-2 text-center">
                                <h1 className="font-bold ">Tommarow</h1>
                                <span className="text-blue-900">{availableSlotsCount(activeOption)} available</span>
                            </div>
                            <div className="px-6 py-2 text-center">
                                <h1 className="font-bold ">{n_dateAfterToday(2)}</h1>
                                <span className="text-blue-900">{availableSlotsCount(activeOption)} available</span>
                            </div>
                        </div>
                        <button><Image src={"/statics/icons/Next_btn.png"} alt="" width={60} height={60}/></button>
                    </div>
                    <div className="flex flex-row w95 mx-auto mt-6">
                        <div className="flex flex-row justify-center"> 
                            <Image src={"/statics/icons/Session_clock.png"} alt="" width={60} height={60} className="w-20 h-20"/>
                            <div className="w-max h-full flex pt-3">30 min</div>
                        </div>
                        <div className="w-5/6 ms-2 flex flex-row flex-wrap items-center">    
                            {
                                activeOption?.timings.filter(timing  => timing.sessionLength === sessionLength.half ).map((timing , index) => {
                                    return (
                                        <div 
                                            key={index} 
                                            className = {`flex flex-row justify-between w-48 p-3 text-center rounded m-2 border ${styles.box} ${timing.status === "Available" ? `${styles.avail_box}` : `${styles.inactive_box}` } 
                                            ${((timing.timing === chosenTiming) && (timing.sessionLength === sessionLength.half)) ? `${styles.active_box}` : ``} `}
                                            onClick={()=>handleSessionSelection(timing)}
                                        >
                                            {timing.timing}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="flex flex-row w95 mx-auto mt-6">
                <div className="flex flex-row justify-center"> 
                    <Image src={"/statics/icons/Session_clock.png"} alt="" width={60} height={60} className="w-20 h-20"/>
                    <div className="w-max h-full flex pt-3">01 hour</div>
                </div>
                <div className="w-5/6 ms-2 flex flex-row flex-wrap items-center">    
                    {
                        activeOption?.timings.filter(timing  => timing.sessionLength === sessionLength.full ).map((timing , index) => {
                            return (
                                <div 
                                    key={index} 
                                    className = {`flex flex-row justify-between w-48 p-3 text-center rounded m-2 border ${styles.box} ${timing.status === "Available" ? `${styles.avail_box}` : `${styles.inactive_box}` } 
                                    ${((timing.timing === chosenTiming) && (timing.sessionLength === sessionLength.full)) ? `${styles.active_box}` : ``} `}
                                    onClick={()=>handleSessionSelection(timing)}
                                >
                                    {timing.timing}
                                </div>
                            )
                        })
                    }
                </div>
                    </div>
                    <div className="">
                        <button 
                            className={`px-12 my-6 py-3 rounded-full  ${styles.payment_btn} `}
                            onClick={() => {preceed_payment_handler()}}    
                        >
                            Preceed Payment
                        </button>
                    </div>
                    <hr className="mt-12 mb-24  w-2/3 border-1 border-slate-700"/>
                </div> 
                </> 
                ) : <>
                <div className="font-bold text-xl"> Booking  Details </div>
                <div className="w-full flex flex-row justify-evenly border border-2 my-12">
                    <div className="flex flex-col w-1/6">
                        <Image src={"/statics/icons/Booking_ID.png"} className="text-gray-100" alt="Booking" width={50} height={50}/>
                        <div className="font-bold">Booking ID</div>
                        <div className="text-slate-700">123456</div>
                    </div>
                    <div className="flex flex-col w-1/6">
                        <Image src={"/statics/icons/Booking_category.png"} className="text-gray-100" alt="Booking" width={50} height={50}/>
                        <div className="font-bold">Consultation Category</div>
                        <div className="text-slate-700">{activeOption?.name}</div>
                    </div>
                    <div className="flex flex-col w-1/6">
                        <Image src={"/statics/icons/Booking_Timing.png"} className="text-gray-100" alt="Booking" width={50} height={50}/>
                        <div className="font-bold">Session Time & date</div>
                        <div className="text-slate-700">{n_dateAfterToday(0)}</div>
                        <div className="text-slate-700">{chosenTiming ? chosenTiming :'No-Selection'}</div>
                        <div className="text-slate-700">{chosen_session_Length === sessionLength.half ? "30 mins" :'01 hrs'}</div>
                    </div>
                    <div className="flex flex-col w-1/6">
                        <Image src={"/statics/icons/Booking_status.png"} className="text-gray-100" alt="Booking" width={50} height={50}/>
                        <div className="font-bold">Booking Status</div>
                        <div className="text-slate-700 rounded-full text-blue-700 bg-sky-100 w-max px-3 py-2">Confirmed</div>
                    </div>
                    <div className="flex flex-col w-1/6 justify-center">
                        <div className= {`font-bold px-12 py-2 ${styles.avail_box} rounded-full w-max `}>Join Session</div>
                    </div>
                </div>
                </>
         }
    </div>
    )
}

export default BookingBlock;    