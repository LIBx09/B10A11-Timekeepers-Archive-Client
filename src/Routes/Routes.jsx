import { createBrowserRouter } from "react-router-dom";
import Error from "../Layout/Error";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import SignIn from "../Social/SignIn";
import SignUp from "../Social/SignUp";
import LostPassword from "../Social/LostPassword";
import AllArtifacts from "../Pages/AllArtifacts/AllArtifacts";
import Details from "../Pages/Details/Details";
import AllLikedPage from "../Pages/LikedPage/AllLikedPage";
import AddArtifacts from "../Pages/AddArtifacts/AddArtifacts";
import MyArtifacts from "../Pages/MyArtifacts/MyArtifacts";
import PrivateRoute from "./PrivateRoute";

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
        path: "/allArtifacts",
        element: <AllArtifacts />,
        loader: () => fetch(`${import.meta.env.VITE_URL}/artifacts`),
      },
      {
        path: "/details/:id",
        element: <Details />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_URL}/artifacts/${params.id}`),
      },
      {
        path: "/likedArtifacts",
        element: <AllLikedPage />,
      },
      {
        path: "/addArtifacts",
        element: (
          <PrivateRoute>
            <AddArtifacts />
          </PrivateRoute>
        ),
      },
      {
        path: "/myArtifacts",
        element: <MyArtifacts />,
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
