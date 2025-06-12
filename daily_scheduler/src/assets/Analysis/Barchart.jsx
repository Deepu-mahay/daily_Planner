import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";


export default function BarChartco() {
    const data = [
      { day: "Mon", tasks: 5 },
      { day: "Tue", tasks: 3 },
      { day: "Wed", tasks: 6 },
      { day: "Thu", tasks: 4 },
      { day: "Fri", tasks: 7 },
    ];
  return (
    <div className="bg-white rounded-xl p-4 shadow mt-4">
      <h2 className="text-lg font-bold mb-2">Weekly Task Growth</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="tasks" fill="#60a5fa" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
