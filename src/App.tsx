import React from "react";
import { Outlet } from "react-router-dom";
// import { Toaster } from "sonner";
import Header from "@/components/Header";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col w-full">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      {/* <Toaster position="top-center" richColors /> */}
    </div>
  );
}

export default App;
