import { useContext } from "react";
import AuthContext from "../Context/AuthContext/AuthContext";

const useAuth = () => {
  const all = useContext(AuthContext);
  return all;
};

export default useAuth;
