import React, { useState } from "react";
import { Package, Send } from "lucide-react";

export default function InventoryRequests() {
  const [form, setForm] = useState({
    item: "",
    quantity: "",
    reason: "",
  });

  const [requests, setRequests] = useState([
    {
      id: 1,
      item: "Shampoo Bottles",
      quantity: 10,
      reason: "Low stock",
      status: "Approved",
    },
    {
      id: 2,
      item: "Disposable Gloves",
      quantity: 50,
      reason: "Daily usage",
      status: "Pending",
    },
  ]);

  const submitRequest = () => {
    if (!form.item || !form.quantity || !form.reason) {
      alert("Please fill all fields");
      return;
    }

    const newReq = {
      id: Date.now(),
      ...form,
      status: "Pending",
    };

    setRequests([...requests, newReq]);
    setForm({ item: "", quantity: "", reason: "" });

    alert("Inventory request submitted!");
  };

  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
        Inventory Requests
      </h1>

      {/* Request Inventory Form */}
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
          <Package size={20} /> Request Inventory Item
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">Item Name</label>
            <input
              type="text"
              placeholder="Ex: Hair Color, Razor Blades"
              className="w-full p-2 mt-1 rounded-md border bg-gray-50 dark:bg-gray-900 dark:border-gray-600"
              value={form.item}
              onChange={(e) => setForm({ ...form, item: e.target.value })}
            />
          </div>

          <div>
            <label className="text-sm font-medium">Quantity</label>
            <input
              type="number"
              placeholder="Ex: 5"
              className="w-full p-2 mt-1 rounded-md border bg-gray-50 dark:bg-gray-900 dark:border-gray-600"
              value={form.quantity}
              onChange={(e) => setForm({ ...form, quantity: e.target.value })}
            />
          </div>

          <div className="md:col-span-2">
            <label className="text-sm font-medium">Reason</label>
            <textarea
              className="w-full p-2 mt-1 rounded-md border bg-gray-50 dark:bg-gray-900 dark:border-gray-600"
              rows={3}
              placeholder="Write why you need this item..."
              value={form.reason}
              onChange={(e) => setForm({ ...form, reason: e.target.value })}
            ></textarea>
          </div>
        </div>

        <button
          onClick={submitRequest}
          className="mt-4 px-5 py-2 bg-blue-600 text-white flex items-center gap-2 rounded-md hover:bg-blue-700"
        >
          <Send size={18} /> Submit Request
        </button>
      </div>

      {/* Request Status */}
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold mb-4">My Inventory Requests</h2>

        <div className="space-y-4">
          {requests.map((req) => (
            <div
              key={req.id}
              className="p-4 rounded-lg border bg-gray-50 dark:bg-gray-900"
            >
              <div className="flex justify-between items-center">
                <p className="text-lg font-semibold">{req.item}</p>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold 
                    ${
                      req.status === "Approved"
                        ? "bg-green-100 text-green-700 dark:bg-green-800"
                        : req.status === "Rejected"
                        ? "bg-red-100 text-red-700 dark:bg-red-800"
                        : "bg-yellow-100 text-yellow-700 dark:bg-yellow-800"
                    }
                  `}
                >
                  {req.status}
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Quantity: {req.quantity}
              </p>
              <p className="text-sm">Reason: {req.reason}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
