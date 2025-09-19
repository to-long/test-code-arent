import React from "react";
import { Outlet } from "react-router-dom";
// import { Toaster } from "sonner";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Toaster position="top-center" richColors /> */}
      <Outlet />
    </div>
  );
}

export default App;
