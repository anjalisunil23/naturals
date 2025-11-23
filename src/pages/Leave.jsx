import React, { useState } from "react";
import { CalendarDays, Send } from "lucide-react";

export default function LeaveManagement() {
  const [leaveForm, setLeaveForm] = useState({
    type: "",
    from: "",
    to: "",
    reason: "",
  });

  const [myLeaves, setMyLeaves] = useState([
    {
      id: 1,
      type: "Sick Leave",
      from: "2025-01-05",
      to: "2025-01-06",
      reason: "Fever and cold",
      status: "Approved",
    },
    {
      id: 2,
      type: "Casual Leave",
      from: "2025-01-10",
      to: "2025-01-11",
      reason: "Personal work",
      status: "Pending",
    },
  ]);

  const submitLeave = () => {
    if (!leaveForm.type || !leaveForm.from || !leaveForm.to || !leaveForm.reason) {
      alert("Please fill all fields");
      return;
    }

    const newLeave = {
      id: Date.now(),
      ...leaveForm,
      status: "Pending", // employee can't approve
    };

    setMyLeaves([...myLeaves, newLeave]);
    setLeaveForm({ type: "", from: "", to: "", reason: "" });
    alert("Leave request submitted!");
  };

  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
        Leave Management
      </h1>

      {/* Apply Leave */}
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
          <CalendarDays size={20} /> Apply for Leave
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">Leave Type</label>
            <select
              className="w-full p-2 mt-1 rounded-md border bg-gray-50 dark:bg-gray-900 dark:border-gray-600"
              value={leaveForm.type}
              onChange={(e) =>
                setLeaveForm({ ...leaveForm, type: e.target.value })
              }
            >
              <option value="">Select Type</option>
              <option value="Sick Leave">Sick Leave</option>
              <option value="Casual Leave">Casual Leave</option>
              <option value="Paid Leave">Paid Leave</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">From</label>
            <input
              type="date"
              className="w-full p-2 mt-1 rounded-md border bg-gray-50 dark:bg-gray-900 dark:border-gray-600"
              value={leaveForm.from}
              onChange={(e) =>
                setLeaveForm({ ...leaveForm, from: e.target.value })
              }
            />
          </div>

          <div>
            <label className="text-sm font-medium">To</label>
            <input
              type="date"
              className="w-full p-2 mt-1 rounded-md border bg-gray-50 dark:bg-gray-900 dark:border-gray-600"
              value={leaveForm.to}
              onChange={(e) =>
                setLeaveForm({ ...leaveForm, to: e.target.value })
              }
            />
          </div>

          <div className="md:col-span-2">
            <label className="text-sm font-medium">Reason</label>
            <textarea
              className="w-full p-2 mt-1 rounded-md border bg-gray-50 dark:bg-gray-900 dark:border-gray-600"
              rows={3}
              value={leaveForm.reason}
              onChange={(e) =>
                setLeaveForm({ ...leaveForm, reason: e.target.value })
              }
            ></textarea>
          </div>
        </div>

        <button
          onClick={submitLeave}
          className="mt-4 px-5 py-2 bg-blue-600 text-white flex items-center gap-2 rounded-md hover:bg-blue-700"
        >
          <Send size={18} /> Submit Leave
        </button>
      </div>

      {/* My Leave Status */}
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold mb-4">My Leave Requests</h2>

        <div className="space-y-4">
          {myLeaves.map((leave) => (
            <div
              key={leave.id}
              className="p-4 rounded-lg border bg-gray-50 dark:bg-gray-900"
            >
              <p className="font-semibold">{leave.type}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {leave.from} → {leave.to}
              </p>
              <p className="text-sm">Reason: {leave.reason}</p>

              <p className="text-sm mt-1">
                Status:{" "}
                <span
                  className={`font-semibold ${
                    leave.status === "Approved"
                      ? "text-green-600"
                      : leave.status === "Rejected"
                      ? "text-red-600"
                      : "text-yellow-600"
                  }`}
                >
                  {leave.status}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
