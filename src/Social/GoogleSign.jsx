import { toast } from "react-toastify";
import useAuth from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

const GoogleSign = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        console.log(res);
        navigate(location?.state ? location.state : "/");
        toast.success("Successfully logged in with Google!");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Google Sign-In failed. Please try again.");
      });
  };

  return (
    <div>
      <button onClick={handleGoogleSignIn}>Google</button>
    </div>
  );
};

export default GoogleSign;
