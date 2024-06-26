import Navbar from "@/components/Navbar/Navbar";
import BookingBlock from "@/components/Session-Booking-Page/BookingBlock";
import UserProfileBlock, { userProfileInfoProps } from "@/components/Session-Booking-Page/UserProfileBlock";
import exp from "constants";


const Dummy_User : userProfileInfoProps = {
    name: "Ridhima Sen",
    avatar : "Avatar.png",
    skills: ["Marketing Consulting" , "Accounts Consulting" , "Buisness Consulting" , "Buisness Consulting" , "Buisness Consulting"],
    position : "Consulting Leader", 
    qualification : "Qualified in startup Consulting",
    experience : "20 Years of experience in consulting",
    half_session: 1000,
    full_session: 1500,
    availibility: "Mon-Sat",
}

function Main({params} : {params : {client : string}}) {
    /*
        const client = params.client;
        
        function to get user data from the server using the client name/id and pass detail to user profile block
        for now uses a dummy data
    
    */
    return (
        <div className="w-full">
            <Navbar/>
            <UserProfileBlock user = {Dummy_User}/>
            <BookingBlock/>
        </div>
    );
}

export default Main;