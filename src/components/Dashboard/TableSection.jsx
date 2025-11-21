import { MoreHorizontal } from "lucide-react";
import React from "react";

function TableSection(){
    const getTrainStatusColor = (status) => {
        switch (status) {
            case "Boarding":
                return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400";
            case "Delayed":
                return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
            case "Cancelled":
                return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
            case "On Time":
                return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
            case "Departed":
                return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400";
            default:
                return "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400";
        }
    };

    const getPassengerStatusColor = (status) => {
        switch (status) {
            case "Checked In":
                return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
            case "Boarding":
                return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
            case "Waiting":
                return "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400";
            case "No Show":
                return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
            case "Completed":
                return "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400";
            default:
                return "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400";
        }
    };

    const delayedTrains = [
        { 
            id: "TR789", 
            passengers: 245, 
            delay: "45 min", 
            reason: "Technical Issue", 
            status: "Delayed" 
        },
        { 
            id: "TR456", 
            passengers: 189, 
            delay: "25 min", 
            reason: "Weather Conditions", 
            status: "Delayed" 
        },
        { 
            id: "TR123", 
            passengers: 312, 
            delay: "15 min", 
            reason: "Signal Problem", 
            status: "Delayed" 
        },
        { 
            id: "TR890", 
            passengers: 167, 
            delay: "35 min", 
            reason: "Maintenance", 
            status: "Delayed" 
        },
        { 
            id: "TR567", 
            passengers: 278, 
            delay: "10 min", 
            reason: "Late Arrival", 
            status: "Delayed" 
        }
    ];

    const passengerData = [
        {
            id: "P001",
            name: "John Smith",
            class: "Business",
            train: "TR789",
            destination: "New York",
            status: "Checked In"
        },
        {
            id: "P002",
            name: "Sarah Johnson",
            class: "First",
            train: "TR456",
            destination: "Chicago",
            status: "Boarding"
        },
        {
            id: "P003",
            name: "Mike Davis",
            class: "Standard",
            train: "TR123",
            destination: "Boston",
            status: "Waiting"
        },
        {
            id: "P004",
            name: "Emily Wilson",
            class: "Business",
            train: "TR890",
            destination: "Washington",
            status: "No Show"
        },
        {
            id: "P005",
            name: "David Brown",
            class: "Standard",
            train: "TR567",
            destination: "Philadelphia",
            status: "Completed"
        },
        {
            id: "P006",
            name: "Lisa Anderson",
            class: "First",
            train: "TR789",
            destination: "New York",
            status: "Checked In"
        }
    ];

    return (
        <div className="space-y-6">
            {/* Delayed Trains Table */}
            <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
                <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                                Delayed Trains
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                List of trains currently delayed
                            </p>
                        </div>
                        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                            View All
                        </button>
                    </div>
                </div>

                {/* Trains Table */}
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-slate-200/50 dark:border-slate-700/50">
                                <th className="text-left p-4 text-sm font-semibold text-slate-800 dark:text-white">
                                    Train ID
                                </th>
                                <th className="text-left p-4 text-sm font-semibold text-slate-800 dark:text-white">
                                    Passengers
                                </th>
                                <th className="text-left p-4 text-sm font-semibold text-slate-800 dark:text-white">
                                    Delay Duration
                                </th>
                                <th className="text-left p-4 text-sm font-semibold text-slate-800 dark:text-white">
                                    Reason
                                </th>
                                <th className="text-left p-4 text-sm font-semibold text-slate-800 dark:text-white">
                                    Status
                                </th>
                                <th className="text-left p-4 text-sm font-semibold text-slate-800 dark:text-white">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {delayedTrains.map((train, index) => (
                                <tr key={index} className="border-b border-slate-200/50 dark:border-slate-700/50 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="p-4">
                                        <span className="text-sm font-medium text-slate-800 dark:text-white">
                                            {train.id}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <span className="text-sm font-medium text-slate-800 dark:text-white">
                                            {train.passengers.toLocaleString()}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <span className="text-sm font-medium text-slate-800 dark:text-white">
                                            {train.delay}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <span className="text-sm font-medium text-slate-800 dark:text-white">
                                            {train.reason}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTrainStatusColor(train.status)}`}>
                                            {train.status}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
                                            <MoreHorizontal className="w-4 h-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Passengers Table */}
            <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
                <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                                Passenger Details
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                Passenger information and travel status
                            </p>
                        </div>
                        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                            View All
                        </button>
                    </div>
                </div>

                {/* Passengers Table */}
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-slate-200/50 dark:border-slate-700/50">
                                <th className="text-left p-4 text-sm font-semibold text-slate-800 dark:text-white">
                                    Passenger ID
                                </th>
                                <th className="text-left p-4 text-sm font-semibold text-slate-800 dark:text-white">
                                    Name
                                </th>
                                <th className="text-left p-4 text-sm font-semibold text-slate-800 dark:text-white">
                                    Class
                                </th>
                                <th className="text-left p-4 text-sm font-semibold text-slate-800 dark:text-white">
                                    Train
                                </th>
                                <th className="text-left p-4 text-sm font-semibold text-slate-800 dark:text-white">
                                    Destination
                                </th>
                                <th className="text-left p-4 text-sm font-semibold text-slate-800 dark:text-white">
                                    Status
                                </th>
                                <th className="text-left p-4 text-sm font-semibold text-slate-800 dark:text-white">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {passengerData.map((passenger, index) => (
                                <tr key={index} className="border-b border-slate-200/50 dark:border-slate-700/50 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="p-4">
                                        <span className="text-sm font-medium text-slate-800 dark:text-white">
                                            {passenger.id}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <span className="text-sm font-medium text-slate-800 dark:text-white">
                                            {passenger.name}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <span className="text-sm font-medium text-slate-800 dark:text-white">
                                            {passenger.class}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <span className="text-sm font-medium text-slate-800 dark:text-white">
                                            {passenger.train}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <span className="text-sm font-medium text-slate-800 dark:text-white">
                                            {passenger.destination}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPassengerStatusColor(passenger.status)}`}>
                                            {passenger.status}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
                                            <MoreHorizontal className="w-4 h-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default TableSection;