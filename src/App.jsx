import React, { useState } from "react";
import Sidebar from "./components/layouts/Sidebar";
import Header from "./components/layouts/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Users from "./pages/Users"; 

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState("Dashboard");

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-all duration-500 font-sans text-slate-900 dark:text-slate-100">
      <div className="flex h-screen overflow-hidden">
        
        {/* Sidebar Navigation */}
        <Sidebar
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
          currentPage={currentPage}
          onPageChange={setCurrentPage} 
        />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0">
          
          {/* Header */}
          <Header
            sidebarCollapsed={sidebarCollapsed}
            onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
          />

          {/* Dynamic Page Content */}
          <main className="flex-1 overflow-y-auto p-4 md:p-6 scroll-smooth">
            {currentPage === "Dashboard" && <Dashboard />}
            {currentPage === "Users" && <Users />}
            
            {/* Fallback for pages not yet built */}
            {currentPage !== "Dashboard" && currentPage !== "Users" && (
                <div className="flex flex-col items-center justify-center h-full text-slate-400">
                    <h2 className="text-2xl font-bold mb-2">Coming Soon</h2>
                    <p>The {currentPage} module is under development.</p>
                </div>
            )}
          </main>

        </div>
      </div>
    </div>
  );
}

export default App;