import React from 'react';
import { LogOut, Search, Bell, Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Navbar({ onLogout, onOpenMenu }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (onLogout) onLogout();
    else {
      localStorage.removeItem('auth');
      localStorage.removeItem('currentProfile');
      navigate('/login');
    }
  };

  return (
    <header className="flex items-center justify-between px-4 sm:px-6 py-3 bg-white dark:bg-gray-800 border-b dark:border-gray-700">
      <div className="flex items-center gap-3">
        <button onClick={onOpenMenu} className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 sm:hidden">
          <Menu size={18} />
        </button>
        <button className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
          <Search size={18} />
        </button>
        <div className="text-lg font-semibold text-gray-800 dark:text-gray-100">Dashboard</div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
          <Bell size={18} />
        </button>
        <button onClick={handleLogout} className="flex items-center gap-2 px-3 py-1 rounded bg-red-500 text-white text-sm">
          <LogOut size={16} />
          <span>Logout</span>
        </button>
      </div>
    </header>
  );
}
