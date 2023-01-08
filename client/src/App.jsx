import React from "react";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Jobs from './pages/Jobs/index.jsx'
import Footer from "./components/footer";

const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [{ path: "/", element: <Login /> }],

  },
  //  {
  //   path: "/jobs",
  //   element: <Layout></Layout>,
  //   children: [{ path: "/jobs", element: <Jobs/> }],
  // }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
