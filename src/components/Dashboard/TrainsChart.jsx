import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function TrainsChart(){
    const trainData = [
        { hour: "06:00", arrived: 8, departed: 6 },
        { hour: "08:00", arrived: 12, departed: 10 },
        { hour: "10:00", arrived: 15, departed: 13 },
        { hour: "12:00", arrived: 18, departed: 16 },
        { hour: "14:00", arrived: 14, departed: 12 },
        { hour: "16:00", arrived: 20, departed: 18 },
        { hour: "18:00", arrived: 16, departed: 14 },
        { hour: "20:00", arrived: 10, departed: 8 },
    ];

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-xl p-4 shadow-xl">
                    <p className="font-semibold text-slate-800 dark:text-white mb-2">{label}</p>
                    <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                            <span className="text-sm text-slate-600 dark:text-slate-300">
                                Arrived: <span className="font-semibold text-slate-800 dark:text-white">{payload[0].value}</span>
                            </span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-gradient-to-r from-slate-400 to-slate-500 rounded-full"></div>
                            <span className="text-sm text-slate-600 dark:text-slate-300">
                                Departed: <span className="font-semibold text-slate-800 dark:text-white">{payload[1].value}</span>
                            </span>
                        </div>
                    </div>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="bg-white/80 dark:bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                        Trains Activity
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        Overview of train movements and statuses
                    </p>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                        </div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">
                            <span>Arrived</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-gradient-to-r from-slate-400 to-slate-500 rounded-full">
                        </div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">
                            <span>Departed</span>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Chart Container */}
            <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={trainData}
                        margin={{ top: 20, right: 20, left: 10, bottom: 20 }}
                    >
                        <defs>
                            <linearGradient id="arrivedGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#3b82f6" />
                                <stop offset="100%" stopColor="#9333ea" />
                            </linearGradient>
                            <linearGradient id="departedGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#94a3b8" />
                                <stop offset="100%" stopColor="#64748b" />
                            </linearGradient>
                        </defs>
                        <CartesianGrid 
                            strokeDasharray="3 3" 
                            stroke="#e2e8f0" 
                            strokeOpacity={0.3}
                            vertical={false}
                        />
                        <XAxis 
                            dataKey="hour" 
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#64748b', fontSize: 11 }}
                            tickMargin={8}
                            interval={0}
                        />
                        <YAxis 
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#64748b', fontSize: 11 }}
                            tickMargin={8}
                            domain={[0, 'dataMax + 2']}
                            width={30}
                        />
                        <Tooltip 
                            content={<CustomTooltip />}
                            cursor={{ fill: 'rgba(148, 163, 184, 0.1)' }}
                        />
                        <Bar 
                            dataKey="arrived" 
                            fill="url(#arrivedGradient)"
                            radius={[4, 4, 0, 0]}
                            maxBarSize={35}
                        />
                        <Bar 
                            dataKey="departed" 
                            fill="url(#departedGradient)"
                            radius={[4, 4, 0, 0]}
                            maxBarSize={35}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default TrainsChart;