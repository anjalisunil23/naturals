import React, { useState } from "react";
import { Search, Filter, User, Calendar, Clock, CheckCircle, XCircle, Loader2 } from "lucide-react";

export default function Appointments() {
  const [search, setSearch] = useState("");

  // Dummy appointment list (can connect backend later)
  const appointments = [
    {
      id: 1,
      name: "Aarohi Sharma",
      service: "Haircut + Blow Dry",
      date: "25 Nov 2025",
      time: "11:30 AM",
      status: "Confirmed",
    },
    {
      id: 2,
      name: "Priya Singh",
      service: "Facial Treatment",
      date: "25 Nov 2025",
      time: "01:00 PM",
      status: "Pending",
    },
    {
      id: 3,
      name: "Rahul Verma",
      service: "Hair Spa",
      date: "26 Nov 2025",
      time: "10:00 AM",
      status: "Completed",
    },
    {
      id: 4,
      name: "Neha Jain",
      service: "Bridal Makeup Trial",
      date: "26 Nov 2025",
      time: "3:00 PM",
      status: "Cancelled",
    }
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case "Confirmed":
        return <span className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full flex items-center gap-1"><CheckCircle size={14} /> Confirmed</span>;
      case "Pending":
        return <span className="px-3 py-1 text-sm bg-yellow-100 text-yellow-700 rounded-full flex items-center gap-1"><Loader2 size={14} /> Pending</span>;
      case "Completed":
        return <span className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full flex items-center gap-1"><CheckCircle size={14} /> Completed</span>;
      case "Cancelled":
        return <span className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded-full flex items-center gap-1"><XCircle size={14} /> Cancelled</span>;
      default:
        return null;
    }
  };

  return (
    <div className="p-6 space-y-6">

      {/* Title */}
      <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
        Appointments
      </h1>
      <p className="text-gray-600 dark:text-gray-300">List of upcoming customer appointments.</p>

      {/* Search + Filter Row */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-4">
        <div className="relative w-full md:w-1/3">
          <Search size={18} className="absolute left-3 top-3 text-gray-500" />
          <input
            type="text"
            placeholder="Search appointments..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg bg-white dark:bg-gray-900 dark:border-gray-700 focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg border dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700">
          <Filter size={18} /> Filters
        </button>
      </div>

      {/* Appointments Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow">
          <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
            <tr>
              <th className="text-left p-4">Customer</th>
              <th className="text-left p-4">Service</th>
              <th className="text-left p-4">Date</th>
              <th className="text-left p-4">Time</th>
              <th className="text-left p-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {appointments.map((a) => (
              <tr key={a.id} className="border-t dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 flex items-center justify-center">
                    <User size={18} />
                  </div>
                  <span className="text-gray-800 dark:text-gray-100">{a.name}</span>
                </td>
                <td className="p-4 text-gray-700 dark:text-gray-300">{a.service}</td>
                <td className="p-4 flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <Calendar size={16} /> {a.date}
                </td>
                <td className="p-4 flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <Clock size={16} /> {a.time}
                </td>
                <td className="p-4">{getStatusBadge(a.status)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
