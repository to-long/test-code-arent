import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer";
// import { Toaster } from "sonner";
import Header from "@/components/Header";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      {/* <Toaster position="top-center" richColors /> */}
    </>
  );
}
