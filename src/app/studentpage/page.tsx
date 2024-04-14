import Navbar from "@/components/Navbar"
import UserProfile from "@/components/UserProfile";
import Calendar from "@/components/Calendar";
import ExamCountdown from "@/components/ExamCount";

export default function Home() {
    return (
        <>
        <Navbar />
        <ExamCountdown />
        </>
    );

}
