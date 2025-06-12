import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { CustomEvent } from "./customEvent";

const localizer = momentLocalizer(moment);

const events = [
  {
    title: "Standup Meeting",
    start: new Date(2025, 4, 7, 9, 0),
    end: new Date(2025, 4, 7, 10, 0),
    description :"meeting at zoom "
  },
  {
    title: "Design Review",
    start: new Date(2025, 4, 8, 14, 0),
    end: new Date(2025, 4, 8, 15, 30),
  },
];

export function BigCalendar() {
  return (
    <div className="h-[600px] bg-white rounded-xl shadow p-4">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, color:'green' }}
        components={{
            event: CustomEvent,
          }}
      />
    
    </div>
  );
}


