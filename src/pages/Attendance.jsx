import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';

// Sample weekly attendance summary
const attendanceData = [
  { day: 'Mon', present: 20, absent: 5 },
  { day: 'Tue', present: 22, absent: 3 },
  { day: 'Wed', present: 18, absent: 7 },
  { day: 'Thu', present: 23, absent: 2 },
  { day: 'Fri', present: 25, absent: 1 },
  { day: 'Sat', present: 24, absent: 2 },
];

// Attendance Calendar (Dummy Monthly Attendance)
const monthlyAttendance = [
  { day: 1, status: "P" },
  { day: 2, status: "A" },
  { day: 3, status: "P" },
  { day: 4, status: "P" },
  { day: 5, status: "A" },
  { day: 6, status: "P" },
  { day: 7, status: "P" },
  { day: 8, status: "A" },
  { day: 9, status: "P" },
  { day: 10, status: "P" },
  { day: 11, status: "A" },
  { day: 12, status: "P" },
  { day: 13, status: "P" },
  { day: 14, status: "A" },
  { day: 15, status: "P" },
  { day: 16, status: "P" },
  { day: 17, status: "A" },
  { day: 18, status: "P" },
  { day: 19, status: "P" },
  { day: 20, status: "P" },
  { day: 21, status: "A" },
  { day: 22, status: "P" },
  { day: 23, status: "P" },
  { day: 24, status: "A" },
  { day: 25, status: "P" },
  { day: 26, status: "P" },
  { day: 27, status: "P" },
  { day: 28, status: "A" },
  { day: 29, status: "P" },
  { day: 30, status: "P" },
];

const appointmentData = [
  { name: 'Haircut', value: 10 },
  { name: 'Facial', value: 7 },
  { name: 'Manicure', value: 5 },
  { name: 'Pedicure', value: 3 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function Attendance() {

  const totalPresent = monthlyAttendance.filter(d => d.status === "P").length;
  const totalAbsent = monthlyAttendance.filter(d => d.status === "A").length;
  const workingDays = monthlyAttendance.length;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">Attendance</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h2 className="text-gray-500 dark:text-gray-300">Working Days</h2>
          <p className="text-2xl font-semibold text-gray-800 dark:text-gray-100">{workingDays}</p>
        </div>

        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h2 className="text-gray-500 dark:text-gray-300">Present Days</h2>
          <p className="text-2xl font-semibold text-green-600">{totalPresent}</p>
        </div>

        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h2 className="text-gray-500 dark:text-gray-300">Absent Days</h2>
          <p className="text-2xl font-semibold text-red-600">{totalAbsent}</p>
        </div>

        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h2 className="text-gray-500 dark:text-gray-300">Attendance %</h2>
          <p className="text-2xl font-semibold text-blue-600">
            {((totalPresent / workingDays) * 100).toFixed(1)}%
          </p>
        </div>
      </div>

      {/* Calendar Attendance Report */}
      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow mb-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">Monthly Attendance Report</h2>

        <div className="grid grid-cols-7 gap-2">
          {monthlyAttendance.map((day) => (
            <div
              key={day.day}
              className={`p-3 text-center rounded-lg text-white font-bold ${
                day.status === "P" ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {day.day}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-6 mt-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="h-4 w-4 bg-green-500 rounded"></span> Present
          </div>
          <div className="flex items-center gap-2">
            <span className="h-4 w-4 bg-red-500 rounded"></span> Absent
          </div>
        </div>
      </div>

      {/* Weekly Attendance Chart */}
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

        {/* Appointment Chart */}
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">Appointments by Service</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={appointmentData}
                dataKey="value"
                nameKey="name"
                outerRadius={80}
                label
              >
                {appointmentData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
}
