import React from "react";
import { CloudRain, Sun, ShieldAlert, ShieldCheck, Flame, CheckCircle2, Users } from "lucide-react";
import { useStationData } from "../../hooks/useStationData";

function StatusGrid() {
    const { status, users } = useStationData();
    
    // Calculate total RFID users
    const totalUsers = Object.keys(users).length;
    
    // --- 1. Weather Logic (Rain Sensor) ---
    const isRaining = status.rain_detected;
    const weatherCard = {
        title: "Station Weather",
        value: isRaining ? "Raining" : "Sunny",
        change: isRaining ? "Awning Closed" : "Awning Open",
        trend: isRaining ? "down" : "up",
        icon: isRaining ? <CloudRain className="w-8 h-8 text-blue-600" /> : <Sun className="w-8 h-8 text-orange-500" />,
        progressColor: isRaining ? "from-blue-400 to-blue-600" : "from-orange-400 to-orange-600",
        progressWidth: isRaining ? '90%' : '10%'
    };

    // --- 2. Security Logic (PIR Sensors) ---
    const motionDetected = status.motion_platform_1 || status.motion_platform_2;
    const securityCard = {
        title: "Security Status",
        value: motionDetected ? "Motion Detected" : "Secure",
        change: motionDetected ? "Alert Active" : "Monitoring",
        trend: motionDetected ? "down" : "up",
        icon: motionDetected ? <ShieldAlert className="w-8 h-8 text-red-600 animate-pulse" /> : <ShieldCheck className="w-8 h-8 text-emerald-600" />,
        progressColor: motionDetected ? "from-red-400 to-red-600" : "from-emerald-400 to-emerald-600",
        progressWidth: motionDetected ? '100%' : '100%'
    };

    // --- 3. Fire Safety Logic (Flame Sensor) ---
    const isFire = status.fire_alert;
    const fireCard = {
        title: "Fire Safety System",
        value: isFire ? "CRITICAL ALERT" : "Normal",
        change: isFire ? "Evacuate" : "Sensors Active",
        trend: isFire ? "down" : "up",
        icon: isFire ? <Flame className="w-8 h-8 text-red-600 animate-bounce" /> : <CheckCircle2 className="w-8 h-8 text-green-600" />,
        progressColor: isFire ? "from-red-500 to-orange-500" : "from-green-400 to-green-600",
        progressWidth: isFire ? '100%' : '100%'
    };

    // --- 4. Commuter Logic (RFID) ---
    const userCard = {
        title: "Registered Commuters",
        value: totalUsers,
        change: "Live Database",
        trend: "up",
        icon: <Users className="w-8 h-8 text-indigo-600" />,
        progressColor: "from-indigo-400 to-indigo-600",
        progressWidth: '75%'
    };

    const stationStats = [weatherCard, securityCard, fireCard, userCard];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {stationStats.map((stat, index) => (
                <div 
                    key={index}
                    className={`bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border hover:shadow-xl transition-all duration-300 group ${stat.title === "Fire Safety System" && status.fire_alert ? 'border-red-500 shadow-red-500/50' : 'border-slate-200/50 dark:border-slate-700/50'}`}
                >
                    <div className="flex items-start justify-between">
                        <div className="flex-1">
                            <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                                {stat.title}
                            </p>
                            <p className={`text-2xl font-bold mb-4 ${stat.title === "Fire Safety System" && status.fire_alert ? "text-red-600" : "text-slate-800 dark:text-white"}`}>
                                {stat.value}
                            </p>
                            <div className="flex items-center space-x-2">
                                <span className="text-sm font-semibold text-slate-500">
                                    {stat.change}
                                </span>
                            </div>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 group-hover:scale-110 transition-all duration-200">
                            {stat.icon}
                        </div>
                    </div>
                    {/* Progress bar */}
                    <div className="mt-4 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div 
                            className={`h-2 bg-gradient-to-r ${stat.progressColor} rounded-full transition-all duration-500`}
                            style={{ width: stat.progressWidth }}
                        ></div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default StatusGrid;