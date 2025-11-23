import React from 'react';

export default function Employees() {
  const profiles = JSON.parse(localStorage.getItem('profiles') || '[]');

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Employees</h1>

      {profiles.length === 0 ? (
        <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">No employee profiles yet.</div>
      ) : (
        <div className="grid gap-4">
          {profiles.map((p) => (
            <div key={p.id} className="p-4 bg-white dark:bg-gray-800 rounded shadow flex items-center gap-4">
              {p.avatar ? (
                <img src={p.avatar} alt={p.name} className="w-12 h-12 rounded-full object-cover" />
              ) : (
                <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-sm font-semibold">{(p.name||'').split(' ').map(n=>n[0]).slice(0,2).join('')}</div>
              )}
              <div>
                <div className="font-medium text-gray-800 dark:text-gray-100">{p.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{p.role}</div>
                <div className="text-xs text-gray-400 dark:text-gray-500">{p.email}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
