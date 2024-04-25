import Icons from './icons';

export default function SideBar() {
    return (
      <div className = "flex flex-col rounded-lg bg-white px-6 gap-6 py-4">
      <div className="flex flex-row items-center justify-start">
        <div className=""><Icons.circleChart/></div>
        <div className="">Analysis</div>
      </div>
      <div className="w-full h-px bg-black"></div>
      <div className="flex flex-row items-center justify-start">
        <div className=""><Icons.chatbot/></div>
        <div className="">ChatBot</div>
      </div>
      <div className="w-full h-px bg-black"></div>
      <div className="flex flex-row items-center justify-start">
        <div className=""><Icons.schedule/></div>
        <div className="">Schedule</div>
      </div>
      <div className="w-full h-px bg-black"></div>
      <div className="flex flex-row items-center justify-start">
        <div className=""><Icons.idea/></div>
        <div className="">Tips</div>
      </div>
  </div>
    );
}
