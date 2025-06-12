// App.jsx
import React from "react";
import Calendar from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { DateTime } from "luxon";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

import { localizer } from "react-big-calendar";
import moment from "moment";
const momentLocalizer = localizer(moment);

const data = [
  { day: "Mon", tasks: 5 },
  { day: "Tue", tasks: 3 },
  { day: "Wed", tasks: 6 },
  { day: "Thu", tasks: 4 },
  { day: "Fri", tasks: 7 },
];

export default function Testing() {
  const today = DateTime.now().toLocaleString(DateTime.DATE_MED);

  return (
    <div className="min-h-screen p-4 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-4">
        <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-white px-3 py-1 rounded text-sm font-semibold">
          Daily Planner
        </span>
        <span className="ml-2 text-gray-700 font-semibold">{today}</span>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Calendar */}
        <div className="bg-white rounded-lg shadow p-4">
          <Calendar
            localizer={momentLocalizer}
            views={["month", "week", "day", "agenda"]}
            style={{ height: 500 }}
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4">
          {/* Event Form */}
          <div className="bg-white rounded-lg shadow p-4">
            <form className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Enter Title"
                className="border px-3 py-2 rounded"
              />
              <input
                type="date"
                className="border px-3 py-2 rounded"
              />
              <input
                type="time"
                className="border px-3 py-2 rounded"
              />
              <textarea
                placeholder="Write a description for the event"
                className="border px-3 py-2 rounded"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Weekly Task Chart */}
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold mb-2">Weekly Task Growth</h2>
            <BarChart width={300} height={200} data={data}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="tasks" fill="#60A5FA" />
            </BarChart>
          </div>
        </div>
      </div>
    </div>
  );
}
