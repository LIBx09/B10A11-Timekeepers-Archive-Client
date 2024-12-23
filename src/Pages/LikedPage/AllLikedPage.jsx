import { useEffect, useState } from "react";
// import useAxios from "../../Hooks/useAxios";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";

const AllLikedPage = () => {
  const axiosSecure = useAxios();
  const [AllLiked, setAllLiked] = useState(null);
  console.log(AllLiked);
  const { user } = useAuth();
  useEffect(() => {
    const fetchLikedArtifacts = async () => {
      try {
        const response = await axiosSecure.get(
          `/artifacts/liked/${user?.email}`
        );
        console.log("frontend email :", user?.email);
        setAllLiked(response.data);
      } catch (error) {
        console.error("Error fetching liked artifacts:", error.message);
      }
    };

    fetchLikedArtifacts();
  }, [axiosSecure, user?.email]);

  return <div>HEllo.Like </div>;
};

export default AllLikedPage;
