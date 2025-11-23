import React, { useState } from "react";
import {
  Zap,
  Home,
  Users,
  Settings,
  Bell,
  Calendar,
  Mail,
  MessageCircle,
  Activity,
  PieChart,
  BarChart2,
  ChevronDown,
} from "lucide-react";

const menuItems = [
  { id: 1, label: "Dashboard", icon: Home },
  { id: 2, label: "Users", icon: Users, count: 12 },
  { id: 3, label: "Notifications", icon: Bell, badge: 3 },
  { id: 4, label: "Reports", icon: BarChart2 },
  { id: 5, label: "Calendar", icon: Calendar },
  { id: 6, label: "Messages", icon: Mail, badge: 5 },
  { id: 7, label: "Chat", icon: MessageCircle, count: 8 },
  { id: 8, label: "Activity", icon: Activity },
  { id: 9, label: "Analytics", icon: PieChart },
  {
    id: 10,
    label: "Settings",
    icon: Settings,
    submenu: true,
    items: ["Profile", "Security", "System"],
  },
];

function Sidebar({ collapsed, onToggle, currentPage, onPageChange }) {
  const [openSub, setOpenSub] = useState(null);

  return (
    <div
      className={`${
        collapsed ? "w-20" : "w-72"
      } shrink-0 transition-all duration-300 
      ease-in-out bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r 
      border-slate-200/50 dark:border-slate-700/50 flex flex-col relative z-10`}
    >
      {/* Logo Section */}
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <Zap className="w-6 h-6 text-white" />
          </div>

          {!collapsed && (
            <div>
              <h1 className="text-xl font-bold text-slate-800 dark:text-white">
                NextGen Station
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Admin Panel
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive = currentPage === item.label;

          return (
            <div key={item.id}>
              <button
                onClick={() => {
                  if (item.submenu) {
                    setOpenSub(openSub === item.id ? null : item.id);
                  } else {
                    onPageChange(item.label);
                  }
                }}
                className={`w-full flex items-center justify-between p-3 rounded-xl 
                transition-all duration-200
                ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50"
                }`}
              >
                {/* Left: icon + label */}
                <div className="flex items-center space-x-3">
                  <item.icon
                    className={`w-5 h-5 ${
                      isActive
                        ? "text-white"
                        : "text-slate-600 dark:text-slate-300"
                    }`}
                  />

                  {!collapsed && (
                    <span
                      className={`font-medium ${
                        isActive
                          ? "text-white"
                          : "text-slate-700 dark:text-slate-200"
                      }`}
                    >
                      {item.label}
                    </span>
                  )}
                </div>

                {/* Right side */}
                {!collapsed && (
                  <div className="flex items-center space-x-2">
                    {item.badge && (
                      <span className="px-2 py-1 text-xs font-semibold bg-red-500 text-white rounded-full">
                        {item.badge}
                      </span>
                    )}

                    {item.count && (
                      <span className="px-2 py-1 text-xs bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-full">
                        {item.count}
                      </span>
                    )}

                    {item.submenu && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          openSub === item.id ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </div>
                )}
              </button>

              {/* Submenu */}
              {item.submenu && openSub === item.id && !collapsed && (
                <div className="ml-10 mt-1 space-y-1">
                  {item.items.map((sub, index) => (
                    <p
                      key={index}
                      className="text-sm py-1 px-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-slate-700 cursor-pointer"
                    >
                      {sub}
                    </p>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
          <img
            src="https://i.pravatar.cc/300"
            alt="User"
            className="w-10 h-10 rounded-full ring-2 ring-blue-500"
          />

          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-800 dark:text-white truncate">
                Danushan
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                Administrator
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
