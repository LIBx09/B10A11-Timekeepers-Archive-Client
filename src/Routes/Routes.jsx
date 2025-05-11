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
import ArtifactUpdate from "../Pages/MyArtifacts/ArtifactUpdate";
import AboutArtifacts from "../Pages/AboutArtifacts.";

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
        path: "/about",
        element: <AboutArtifacts />,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_URL}/artifacts/${params.id}`),
      },
      {
        path: "/likedArtifacts",
        element: (
          <PrivateRoute>
            <AllLikedPage />
          </PrivateRoute>
        ),
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
        element: (
          <PrivateRoute>
            <MyArtifacts />
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <ArtifactUpdate />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_URL}/artifacts/${params.id}`).then(
            (res) => res.json()
          ),
      },
      // /artifacts/added/:email
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
