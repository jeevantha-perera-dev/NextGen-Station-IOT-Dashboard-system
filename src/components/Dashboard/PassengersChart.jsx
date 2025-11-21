import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

function PassengersChart(){
    const passengerData = [
        { name: "Business Class", value: 25, color: "#8b5cf6" },
        { name: "First Class", value: 15, color: "#10b981" },
        { name: "Standard Class", value: 45, color: "#3b82f6" },
        { name: "Group Tickets", value: 12, color: "#f59e0b" },
        { name: "Season Tickets", value: 8, color: "#ef4444" },
    ];

    const totalPassengers = passengerData.reduce((sum, item) => sum + item.value, 0);
    const mostPopular = passengerData.reduce((prev, current) => 
        prev.value > current.value ? prev : current
    );

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const data = payload[0].payload;
            const percentage = ((data.value / totalPassengers) * 100).toFixed(1);
            return (
                <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-lg p-3 shadow-lg">
                    <p className="font-semibold text-slate-800 dark:text-white text-sm">{data.name}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                        {data.value} passengers ({percentage}%)
                    </p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="bg-white dark:bg-slate-900 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50">
            <div className="mb-6">
                <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                    Passengers Overview
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                    Summary of passenger statistics and trends
                </p>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Pie Chart */}
                <div className="w-full lg:w-1/2 h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={passengerData}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={2}
                                dataKey="value"
                            >
                                {passengerData.map((entry, index) => (
                                    <Cell 
                                        key={`cell-${index}`} 
                                        fill={entry.color}
                                        stroke="rgba(255, 255, 255, 0.8)"
                                        strokeWidth={2}
                                    />
                                ))}
                            </Pie>
                            <Tooltip content={<CustomTooltip />} />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                {/* Right Side - Content */}
                <div className="w-full lg:w-1/2 space-y-6">
                    {/* Legend */}
                    <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                            Passenger Distribution
                        </h4>
                        {passengerData.map((entry, index) => {
                            const percentage = ((entry.value / totalPassengers) * 100).toFixed(0);
                            return (
                                <div key={index} className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <div 
                                            className="w-3 h-3 rounded-full flex-shrink-0"
                                            style={{ backgroundColor: entry.color }}
                                        />
                                        <span className="text-sm text-slate-600 dark:text-slate-300">
                                            {entry.name}
                                        </span>
                                    </div>
                                    <span className="text-sm font-semibold text-slate-800 dark:text-white">
                                        {percentage}%
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                    {/* Statistics */}
                    <div className="grid grid-cols-2 gap-4 pt-4">
                        <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4 text-center">
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                                Total Passengers
                            </p>
                            <p className="text-2xl font-bold text-slate-800 dark:text-white">
                                {totalPassengers}
                            </p>
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4 text-center">
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                                Most Popular
                            </p>
                            <p className="text-sm font-semibold text-slate-800 dark:text-white">
                                {mostPopular.name}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PassengersChart;