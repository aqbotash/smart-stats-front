import Navbar from "@/components/Navbar"
import UserProfile from "@/components/UserProfile";
import Calendar from "@/components/Calendar";
import ExamCountdown from "@/components/ExamCount";
import AttendanceTracker from "@/components/AttendanceTracker";
import TestRes from "@/components/TestRes";

export default function Home() {
    return (
        <>
        <Navbar />
        
        <div className="flex w-1/3">
        <AttendanceTracker/>
        <TestRes/>

        </div>
        
        </>
    );

}
