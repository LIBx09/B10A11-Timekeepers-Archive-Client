import { createBrowserRouter } from "react-router-dom";
import Error from "../Layout/Error";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import SignIn from "../Social/SignIn";
import SignUp from "../Social/SignUp";
import LostPassword from "../Social/LostPassword";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch(`${import.meta.env.VITE_URL}/artifacts/limit`),
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/lost",
        element: <LostPassword />,
      },
    ],
  },
]);

export default routes;
