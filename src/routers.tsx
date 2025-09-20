import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Column from "./pages/Column";
import Home from "./pages/Home";
import MyRecord from "./pages/MyRecord";
import NotFound from "./pages/NotFound";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/my-record",
        element: <MyRecord />,
      },
      {
        path: "/column",
        element: <Column />,
      },
    ],
  },
]);
