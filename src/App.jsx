import React from "react";
import Sidebar from "./components/layouts/Sidebar";
import Header from "./components/layouts/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Users from "./pages/Users"; // Import the new page

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState("Dashboard");

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-all duration-500">
      <div className="flex h-screen">
        
        {/* Sidebar */}
        <Sidebar
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />

        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          
          {/* Header */}
          <Header
            sidebarCollapsed={sidebarCollapsed}
            onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
          />

          {/* Page Content */}
          <main className="flex-1 overflow-y-auto p-4 md:p-6">
            {currentPage === "Dashboard" && <Dashboard />}
            {currentPage === "Users" && <Users />}
            
            {/* Placeholder for other empty pages */}
            {currentPage !== "Dashboard" && currentPage !== "Users" && (
                <div className="flex flex-col items-center justify-center h-full text-slate-400">
                    <h2 className="text-2xl font-bold mb-2">Coming Soon</h2>
                    <p>The {currentPage} module is currently under development.</p>
                </div>
            )}
          </main>

        </div>
      </div>
      
    </div>
  );
}

export default App;