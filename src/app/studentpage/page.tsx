import Navbar from "@/components/Navbar"
import HomeworkList from "@/components/HomeworkList"
import { LineChartUsageExample } from "@/components/LineChartUsageExample";
import Calendar from "@/components/Calendar";
import UserProfile from "@/components/UserProfile";
import AttendanceTracker from "@/components/AttendanceTracker";
import TestRes from "@/components/TestRes";
import TestsColumn from "@/components/TestsColumn";
import ExamCount from "@/components/ExamCount";
import SideBar from "@/components/SideBar";

const homeworkItems: string[] = [
    "Complete Algebra Exercise 3.1",
    "Read Chapter 4 of Biology textbook",
    "Essay on Shakespeare's influence on modern literature"
  ];

const data = {
    firstName: "John",
    lastName: "Doe",
    ranking: 5
  };
export default function Home() {
    return (
        <div className = "flex flex-col gap-6">
                <Navbar />
                <div className="flex flex-row gap-4 p-6">
                    <div className="flex flex-col w-1/5 gap-4">
                        <div className=""><UserProfile firstName={data.firstName} lastName={data.lastName} ranking={data.ranking}/></div>
                        <div className=""><ExamCount/></div>
                        <div className=""><SideBar/></div>
                    </div>
                    <div className="flex flex-col w-3/5 gap-4">
                        <div className=""><HomeworkList homeworkItems={homeworkItems}/></div>
                        <div><LineChartUsageExample/></div>
                        <div className=""><AttendanceTracker/></div>
                        <div className=""><TestRes/></div>
                    </div>
                    <div className="flex flex-col w-1/5 gap-4">
                        <div className=""><Calendar/></div>
                        <div className=""><TestsColumn/></div>
                    </div>
                </div>
        </div>
    );
}
