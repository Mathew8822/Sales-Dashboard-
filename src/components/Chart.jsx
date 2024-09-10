import React from "react";
import Title from "./Title";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { txId: "01e4dsa", user: "johnny", cost: 43.95 },
  { txId: "0315dsaa", user: "jackdower", cost: 133.45 },
  { txId: "01e4dsa", user: "aberdohnny", cost: 43.95 },
  { txId: "51034szv", user: "goodmanave", cost: 200.95 },
  { txId: "0a123sb", user: "stevebower", cost: 13.55 },
  { txId: "01e4dsa", user: "aberdohnny", cost: 43.95 },
  { txId: "120s51a", user: "wootzifer", cost: 24.2 },
  { txId: "0315dsaa", user: "jackdower", cost: 133.45 },
];

export default function Chart() {
  return (
    <React.Fragment>
      <Title>Recent Transactions</Title>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="txId" tick={{ visibility: "hidden" }} />
            <YAxis />
            <Tooltip
              cursor={{ fill: "rgba(0, 0, 0, 0.2)" }}
              formatter={(value, name) => [`${name}`, value]}
            />
            <Legend />
            <Bar dataKey="cost" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </React.Fragment>
  );
}
