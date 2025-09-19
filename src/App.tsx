import { Outlet } from "react-router-dom";
// import { Toaster } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function App() {
  return (
    <div className="min-h-screen b  g-gray-50 flex flex-col w-full">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      {/* <Toaster position="top-center" richColors /> */}
    </div>
  );
}

export default App;
