import React from "react";
import Header from "./assets/Header";
import  { BigCalendar } from "./assets/Calendar";
import AddEvent from "./assets/AddEvent";
import TaskList from "./assets/TaskList";
import PieChartcom from "./assets/Analysis/PieChart";
import BarChart from "./assets/Analysis/barchart";
import LineChartComponent from "./assets/Analysis/LineChart";
import AreaChartComponent from "./assets/Analysis/AreaChartComponent";

// import { TaskTimeline } from "./components/TaskTimeline";
// import { Header } from "./components/Header";
// import { AddTaskButton } from "./components/AddTaskButton";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 font-sans">
      <div className="">
        <Header />

      </div>
      
      <div className="flex flex-row">
      
        <div className="basis-1/2 mt-5 mx-5 p-3 md:basis-none">
          <BigCalendar/>
        </div>
        <div className="basis-1/2 mt-5 mx-5 p-3 md:basis-none">
         <div className="flex flex-row">

           <div className="basis-1/2 mt-2 mx-2 p-3 md:basis-none">
            <AddEvent/>
            </div>
            <div className="basis-1/2 mt-5 mx-5 p-3 md:col-1">
            <TaskList/>
            </div>
          
         </div>

          <div className="flex flex-row">
            
            <div className="flex-grow mt-5 mx-2 p-3">
             <BarChart/>
            </div>
          </div>
          
        </div>
        </div>

          <div className="flex flex-row">

          <div className="basis-1/3 mt-5 mx-2 p-3">
            <PieChartcom/>
            </div>
          
          
         
          
          <LineChartComponent/>
          <div>
          <AreaChartComponent/>
     

          {/* Future: Mini calendar, stats, et   c. */}
        </div>
      </div>
      {/* <AddTaskButton /> */}
    </div>
  );
}
