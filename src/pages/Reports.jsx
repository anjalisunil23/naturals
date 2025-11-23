import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const sales = [
  { week: 'W1', value: 1200 },
  { week: 'W2', value: 1500 },
  { week: 'W3', value: 1300 },
  { week: 'W4', value: 1700 },
];

export default function Reports() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Reports</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">
          <h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">Weekly Sales</h2>
          <div style={{ width: '100%', height: 200 }}>
            <ResponsiveContainer>
              <BarChart data={sales}>
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">
          <h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">Performance Trend</h2>
          <div style={{ width: '100%', height: 200 }}>
            <ResponsiveContainer>
              <LineChart data={sales}>
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#00C49F" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
