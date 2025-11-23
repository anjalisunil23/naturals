import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from 'recharts';

const attendanceData = [
  { day: 'Mon', present: 20, absent: 5 },
  { day: 'Tue', present: 22, absent: 3 },
  { day: 'Wed', present: 18, absent: 7 },
  { day: 'Thu', present: 23, absent: 2 },
  { day: 'Fri', present: 25, absent: 1 },
  { day: 'Sat', present: 24, absent: 2 },
];

const appointmentData = [
  { name: 'Haircut', value: 10 },
  { name: 'Facial', value: 7 },
  { name: 'Manicure', value: 5 },
  { name: 'Pedicure', value: 3 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const upcomingAppointments = [
  { time: '10:00 AM', client: 'Sarah Johnson', service: 'Haircut' },
  { time: '11:30 AM', client: 'Michael Brown', service: 'Facial' },
  { time: '01:00 PM', client: 'Emily Davis', service: 'Manicure' },
  { time: '03:00 PM', client: 'David Wilson', service: 'Pedicure' },
];

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h2 className="text-gray-500 dark:text-gray-300">Total Employees</h2>
          <p className="text-2xl font-semibold text-gray-800 dark:text-gray-100">25</p>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h2 className="text-gray-500 dark:text-gray-300">Today's Appointments</h2>
          <p className="text-2xl font-semibold text-gray-800 dark:text-gray-100">12</p>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h2 className="text-gray-500 dark:text-gray-300">Pending Tasks</h2>
          <p className="text-2xl font-semibold text-gray-800 dark:text-gray-100">7</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">Weekly Attendance</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
              <XAxis dataKey="day" stroke="#8884d8" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="present" stroke="#0088FE" strokeWidth={2} />
              <Line type="monotone" dataKey="absent" stroke="#FF8042" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">Appointments by Service</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={appointmentData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
              >
                {appointmentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">Upcoming Appointments</h2>
        <ul>
          {upcomingAppointments.map((appt, index) => (
            <li key={index} className="flex justify-between p-2 border-b border-gray-200 dark:border-gray-700">
              <span className="font-medium text-gray-800 dark:text-gray-100">{appt.time}</span>
              <span className="text-gray-600 dark:text-gray-300">{appt.client}</span>
              <span className="text-gray-500 dark:text-gray-400">{appt.service}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}