import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple demo auth: accept any credentials and set a token
    const token = 'demo-token-' + Date.now();
    localStorage.setItem('auth', token);
    if (onLogin) onLogin(token);
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <form onSubmit={handleSubmit} className="w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded shadow">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Sign in to Naturals</h2>
        <div className="mb-3">
          <label className="block text-sm text-gray-700 dark:text-gray-300">Email</label>
          <input value={email} onChange={e => setEmail(e.target.value)} className="mt-1 w-full px-3 py-2 rounded border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100" />
        </div>
        <div className="mb-4">
          <label className="block text-sm text-gray-700 dark:text-gray-300">Password</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="mt-1 w-full px-3 py-2 rounded border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100" />
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Sign In</button>
          <button type="button" onClick={() => { setEmail('demo@example.com'); setPassword('demo'); }} className="text-sm text-gray-600 dark:text-gray-300">Fill demo</button>
        </div>
      </form>
    </div>
  );
}
