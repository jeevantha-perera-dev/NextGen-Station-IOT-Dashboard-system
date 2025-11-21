import React from "react";
import Sidebar from "./components/layouts/Sidebar";
import Header from "./components/layouts/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import StatusGrid from "./components/Dashboard/StatusGrid";

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState("Dashboard");

  return (
    <div className="min-h-screen bg-white transition-all duration-500">
      <div className="flex h-screen">
        
        {/* Sidebar */}
        <Sidebar
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />

        {/* Main content */}
        <div className="flex-1 flex flex-col bg-white">
          
          {/* Header */}
          <Header
            sidebarCollapsed={sidebarCollapsed}
            onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
          />

          {/* Page Content */}
          <main className="flex-1 overflow-y-auto bg-white p-6">
            {currentPage === "Dashboard" && <Dashboard />}
            {/* Add other pages here */}
          </main>

        </div>
      </div>
     
    </div>
  );
}

export default App;
