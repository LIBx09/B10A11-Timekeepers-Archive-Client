/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Loading from "../components/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return <Loading />;
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/signIn" />;
};

export default PrivateRoute;
