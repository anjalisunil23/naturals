import React, { useState } from 'react';

export default function Profile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [avatar, setAvatar] = useState(''); // data URL or empty
  const [saved, setSaved] = useState(false);

  const handleFile = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setAvatar(reader.result);
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const profile = { id: Date.now(), name, email, role, avatar };
    const profiles = JSON.parse(localStorage.getItem('profiles') || '[]');
    profiles.push(profile);
    localStorage.setItem('profiles', JSON.stringify(profiles));
    // set currentProfile so sidebar picks it up
    localStorage.setItem('currentProfile', JSON.stringify(profile));
    setSaved(true);
    // keep form populated for quick edits
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Create Employee Profile</h1>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
        <div>
          <label className="block text-sm text-gray-700 dark:text-gray-300">Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full px-3 py-2 rounded border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100" />
        </div>

        <div>
          <label className="block text-sm text-gray-700 dark:text-gray-300">Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 w-full px-3 py-2 rounded border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100" />
        </div>

        <div>
          <label className="block text-sm text-gray-700 dark:text-gray-300">Role</label>
          <input value={role} onChange={(e) => setRole(e.target.value)} className="mt-1 w-full px-3 py-2 rounded border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100" />
        </div>

        <div>
          <label className="block text-sm text-gray-700 dark:text-gray-300">Avatar (upload image)</label>
          <input type="file" accept="image/*" onChange={handleFile} className="mt-1 w-full text-sm text-gray-700" />
          {avatar && (
            <div className="mt-3">
              <img src={avatar} alt="avatar preview" className="w-24 h-24 rounded-full object-cover border" />
            </div>
          )}
        </div>

        <div className="flex items-center gap-3">
          <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white">Save Profile</button>
          {saved && <span className="text-sm text-green-600 dark:text-green-400">Saved to localStorage</span>}
        </div>
      </form>
    </div>
  );
}
