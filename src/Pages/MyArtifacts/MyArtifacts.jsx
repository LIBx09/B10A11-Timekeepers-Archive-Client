/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";

const MyArtifacts = () => {
  const { user } = useAuth();
  console.log(user?.email);
  const axiosSecure = useAxios();
  const [myArtifacts, setMyArtifacts] = useState([]);
  console.log(myArtifacts);

  useEffect(() => {
    const fetchMyArtifacts = async () => {
      try {
        console.log("Fetching artifacts for email:", user?.email);
        const res = await axiosSecure.get(`/artifacts/added/${user?.email}`);
        console.log("API Response:", res.data);
        setMyArtifacts(res.data);
      } catch (error) {
        console.error("Failed to fetch added artifacts.", error);
      }
    };

    if (user?.email) {
      fetchMyArtifacts();
    }
  }, [axiosSecure, user?.email]);

  return (
    <div>
      <h2>Hello My Artifacts : {myArtifacts?.length}</h2>
    </div>
  );
};

export default MyArtifacts;
