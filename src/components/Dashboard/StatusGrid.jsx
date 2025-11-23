import { ArrowDownRight, ArrowRight } from "lucide-react";
import React from "react";
import { ArrowDownCircle, ArrowUpCircle, Clock, Users } from "lucide-react";

const stationStats = [
    {
        title: "Trains Arrived Today",
        value: 24,
        change: "+3",
        trend: "up",
        icon: <ArrowDownCircle className="w-8 h-8 text-blue-600" />,
        progressColor: "from-blue-400 to-blue-600"
    },
    {
        title: "Trains Departed Today",
        value: 22,
        change: "+1",
        trend: "up",
        icon: <ArrowUpCircle className="w-8 h-8 text-green-600" />,
        progressColor: "from-green-400 to-green-600"
    },
    {
        title: "Delayed Trains",
        value: 5,
        change: "-2",
        trend: "down",
        icon: <Clock className="w-8 h-8 text-red-600" />,
        progressColor: "from-red-400 to-red-600"
    },
    {
        title: "Passengers Today",
        value: 18450,
        change: "+7%",
        trend: "up",
        icon: <Users className="w-8 h-8 text-indigo-600" />,
        progressColor: "from-indigo-400 to-indigo-600"
    }
];

function StatusGrid() {
    const getChangeColor = (change) => {
        if (change.startsWith('+')) {
            return 'text-emerald-600 dark:text-emerald-400';
        } else if (change.startsWith('-')) {
            return 'text-red-600 dark:text-red-400';
        } else {
            return 'text-slate-600 dark:text-slate-400';
        }
    };

    const getProgressBarWidth = (change) => {
        // Convert change to a percentage for progress bar width
        if (change.includes('%')) {
            const percentage = parseInt(change);
            return `${Math.min(Math.abs(percentage), 100)}%`;
        } else {
            // For absolute numbers, use a default width based on trend
            return change.startsWith('+') ? '75%' : '25%';
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {stationStats.map((stat, index) => (
                <div 
                    key={index}
                    className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl hover:shadow-slate-200/20 dark:hover:shadow-slate-900/20 transition-all duration-300 group"
                >
                    <div className="flex items-start justify-between">
                        <div className="flex-1">
                            <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                                {stat.title}
                            </p>
                            <p className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
                                {stat.value.toLocaleString()}
                            </p>
                            <div className="flex items-center space-x-2">
                                {stat.trend === "up" ? (
                                    <ArrowRight className="w-4 h-4 text-emerald-500" />
                                ) : ( 
                                    <ArrowDownRight className="w-4 h-4 text-red-500" /> 
                                )}
                                <span className={`font-semibold ${getChangeColor(stat.change)}`}>
                                    {stat.change}
                                </span>
                                <span className="text-sm text-slate-500 dark:text-slate-400">
                                    VS Last
                                </span>
                            </div>
                        </div>
                        <div className="p-3 rounded-xl group-hover:scale-110 transition-all duration-200">
                            {stat.icon}
                        </div>
                    </div>
                    {/* Progress bar */}
                    <div className="mt-4 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div 
                            className={`h-2 bg-gradient-to-r ${stat.progressColor} rounded-full transition-all duration-500`}
                            style={{ width: getProgressBarWidth(stat.change) }}
                        ></div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default StatusGrid;