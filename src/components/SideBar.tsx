import Icons from './icons';

export default function SideBar() {
    return (
      <div className = "flex flex-col rounded-lg bg-custom-lightblue p-6 gap-6">
      <div className="flex flex-row items-center justify-start gap-4">
        <div className=""><Icons.circleChart/></div>
        <div className="text-xl font-bold">Analysis</div>
      </div>
      <div className="w-full h-px bg-black"></div>
      <div className="flex flex-row items-center justify-start gap-4">
        <div className=""><Icons.chatbot/></div>
        <div className="text-xl font-bold">ChatBot</div>
      </div>
      <div className="w-full h-px bg-black"></div>
      <div className="flex flex-row items-center justify-start gap-4">
        <div className=""><Icons.schedule/></div>
        <div className="text-xl font-bold">Schedule</div>
      </div>
      <div className="w-full h-px bg-black"></div>
      <div className="flex flex-row items-center justify-start gap-4">
        <div className=""><Icons.idea/></div>
        <div className="text-xl font-bold">Tips</div>
      </div>
  </div>
    );
}
