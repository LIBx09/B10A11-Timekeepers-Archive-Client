/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import auth from "../../Firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import useAxios from "../../Hooks/useAxios";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const google = new GoogleAuthProvider();
  const axiosSecure = useAxios();
  console.log(user);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, google);
  };

  const manageUserProfile = (name, photo) => {
    setLoading(true);
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const lostPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  const getOut = () => {
    setLoading(true);
    signOut(auth);
  };

  const authInfo = {
    user,
    loading,
    createUser,
    setUser,
    signIn,
    googleSignIn,
    manageUserProfile,
    lostPassword,
    getOut,
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
      // console.log("stateCaptured", currentUser?.email);
      if (currentUser?.email) {
        const user = { email: currentUser.email };

        axiosSecure.post("/jwt", user).then((res) => {
          console.log("login token", res.data);
          setLoading(false);
        });
      } else {
        axiosSecure.post("/logout", {}).then((res) => {
          console.log("logout", res.data);
          setLoading(false);
        });

        setUser(null);
      }

      return () => {
        unSubscribe;
      };
    });
  }, [axiosSecure]);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
