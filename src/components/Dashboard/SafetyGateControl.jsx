import React, { useState } from 'react';
import { db } from '../../firebase'; 
import { ref, set } from 'firebase/database';
import { useStationData } from '../../hooks/useStationData';
import { Settings, Lock, Unlock, AlertTriangle, RefreshCw } from 'lucide-react';

const SafetyGateControl = () => {
  const { status } = useStationData();
  const [loading, setLoading] = useState(false);

  // Read status from your hook (safely handling undefined)
  // These keys match your useStationData default state
  const gateState = status?.servoGate || "CLOSED";
  const barrierState = status?.barrier_status || "CLOSED";

  // Function to send commands to Firebase
  const sendGate = async (cmd) => {
    setLoading(true);
    try {
        // Writing to station_control as per your request
        await set(ref(db, "station_control/gate"), cmd);
    } catch (err) {
        console.error("Firebase Error", err);
    }
    setLoading(false);
  };

  const sendBarrier = async (cmd) => {
    setLoading(true);
    try {
        // Writing to station_control as per your request
        await set(ref(db, "station_control/safety_gate"), cmd);
    } catch (err) {
        console.error("Firebase Error", err);
    }
    setLoading(false);
  };

  return (
    <div className="bg-slate-800 text-white rounded-2xl p-6 border border-slate-700 shadow-lg h-full relative overflow-hidden group">
      {/* Background Gradient Effect */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-blue-500/20"></div>

      <div className="flex justify-between items-start mb-4 relative z-10">
        <div>
          <h3 className="text-sm font-medium text-slate-300">Safety Controls</h3>
          <div className="flex items-center gap-2 mt-1">
             <h2 className="text-xl font-bold">Manual Override</h2>
             {loading && <RefreshCw className="w-4 h-4 animate-spin text-blue-400" />}
          </div>
        </div>
        <div className="p-2 bg-slate-700/50 rounded-lg">
          <Settings className="w-5 h-5 text-blue-400" />
        </div>
      </div>

      <div className="space-y-4 relative z-10">
        {/* Ticket Gate Control */}
        <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-700/50">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Pedestrian Gate</span>
            <span className={`text-[10px] px-2 py-0.5 rounded border ${gateState === 'OPEN' ? 'border-green-500 text-green-400' : 'border-slate-500 text-slate-400'}`}>
                {gateState}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button 
              onClick={() => sendGate("OPEN")}
              disabled={loading}
              className="bg-emerald-600 hover:bg-emerald-500 active:scale-95 transition-all py-2 rounded-lg text-xs font-bold shadow-lg shadow-emerald-900/20 flex items-center justify-center gap-1"
            >
              <Unlock className="w-3 h-3" /> OPEN
            </button>
            <button 
              onClick={() => sendGate("CLOSE")}
              disabled={loading}
              className="bg-slate-700 hover:bg-slate-600 active:scale-95 transition-all py-2 rounded-lg text-xs font-bold text-slate-300"
            >
              CLOSE
            </button>
          </div>
        </div>

        {/* Railway Barrier Control */}
        <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-700/50">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Railway Barrier</span>
            <span className={`text-[10px] px-2 py-0.5 rounded border ${barrierState === 'OPEN' ? 'border-green-500 text-green-400' : 'border-slate-500 text-slate-400'}`}>
                {barrierState}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button 
              onClick={() => sendBarrier("OPEN")}
              disabled={loading}
              className="bg-slate-700 hover:bg-slate-600 active:scale-95 transition-all py-2 rounded-lg text-xs font-bold text-slate-300"
            >
              OPEN
            </button>
            <button 
              onClick={() => sendBarrier("CLOSE")}
              disabled={loading}
              className="bg-red-600 hover:bg-red-500 active:scale-95 transition-all py-2 rounded-lg text-xs font-bold shadow-lg shadow-red-900/20"
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyGateControl;