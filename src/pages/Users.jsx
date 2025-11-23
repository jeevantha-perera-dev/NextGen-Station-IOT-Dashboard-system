import React from 'react';
import { useStationData } from '../hooks/useStationData';
import { Trash2, User, CreditCard } from 'lucide-react';
import { ref, remove } from 'firebase/database';
import { db } from '../firebase';

const Users = () => {
  const { users } = useStationData();

  const deleteUser = (uid) => {
    if (window.confirm('Delete this user? This cannot be undone.')) {
      remove(ref(db, `users/${uid}`));
    }
  };

  return (
    <div className="p-6 space-y-6">
      <header className="flex justify-between items-center">
        <div>
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Commuter Management</h1>
            <p className="text-slate-500">View and manage RFID card holders</p>
        </div>
      </header>

      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                <th className="p-4 text-sm font-semibold text-slate-600 dark:text-slate-300">RFID UID</th>
                <th className="p-4 text-sm font-semibold text-slate-600 dark:text-slate-300">Name</th>
                <th className="p-4 text-sm font-semibold text-slate-600 dark:text-slate-300">Balance</th>
                <th className="p-4 text-sm font-semibold text-slate-600 dark:text-slate-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(users).length === 0 ? (
                <tr>
                  <td colSpan="4" className="p-8 text-center text-slate-500">
                    No users found. Scan an RFID card to register automatically.
                  </td>
                </tr>
              ) : (
                Object.entries(users).map(([uid, data]) => (
                  <tr key={uid} className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-mono text-xs text-slate-500">{uid}</td>
                    <td className="p-4 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                            <User size={16} />
                        </div>
                        <span className="font-medium text-slate-700 dark:text-slate-200">{data.name || "Unknown User"}</span>
                    </td>
                    <td className="p-4">
                        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                            <CreditCard size={14} className="text-slate-400" />
                            ${data.balance || 0}
                        </div>
                    </td>
                    <td className="p-4">
                      <button 
                        onClick={() => deleteUser(uid)}
                        className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                        title="Delete User"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;