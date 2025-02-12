import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import useAuth from "../../Hooks/useAuth";
import {
  FaHeart,
  FaRegHeart,
  FaMapMarkerAlt,
  FaUser,
  FaClock,
} from "react-icons/fa";
import { MdHistoryEdu } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const Details = () => {
  const artifactDetails = useLoaderData();
  const [artifact, setArtifact] = useState(artifactDetails);
  const { user } = useAuth();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const {
    _id,
    artifactName,
    artifactImage,

    historicalContext,
    createdAt,
    discoveredAt,
    discoveredBy,
    presentLocation,
    adderName,
    adderEmail,
    likeCount,
    likedBy = [],
  } = artifact;

  const currentUserEmail = user?.email;
  const hasLiked = likedBy.includes(currentUserEmail);

  const handleLikeUnlike = async (id, email) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_URL}/artifacts/like-unlike/${id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to toggle like/unlike");
      }

      const data = await response.json();

      setArtifact((prev) => ({
        ...prev,
        likeCount: data.likeCount,
        likedBy: data.likedBy,
      }));
    } catch (error) {
      console.error("Error toggling like/unlike:", error);
    }
  };

  return (
    <div className="min-h-screen w-10/12 mx-auto  py-12">
      <div
        className="max-w-7xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden"
        data-aos="fade-up"
      >
        {/* Image Section */}
        <div className="relative w-full h-[400px]">
          <img
            className="w-full  h-[400px] "
            src={artifactImage}
            alt={artifactName}
          />
          {/* <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              {artifactName}
            </h1>
          </div> */}
        </div>

        {/* Details Section */}
        <div className="p-10">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Left Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
                <MdHistoryEdu className="text-blue-500" /> {artifactName}
              </h2>
              <p className="text-lg text-gray-600 mt-2">{historicalContext}</p>

              <div className="mt-5 space-y-3">
                <p className="flex items-center gap-2 text-lg">
                  <FaClock className="text-gray-500" />
                  <span className="font-bold">Created At:</span> {createdAt}
                </p>
                <p className="flex items-center gap-2 text-lg">
                  <FaClock className="text-gray-500" />
                  <span className="font-bold">Discovered At:</span>{" "}
                  {discoveredAt}
                </p>
                <p className="flex items-center gap-2 text-lg">
                  <FaUser className="text-green-500" />
                  <span className="font-bold">Discovered By:</span>{" "}
                  {discoveredBy}
                </p>
                <p className="flex items-center gap-2 text-lg">
                  <FaMapMarkerAlt className="text-red-500" />
                  <span className="font-bold">Location:</span> {presentLocation}
                </p>
              </div>
            </div>

            {/* Right Section */}
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-700">Added By</h3>
              <p className="text-lg flex items-center gap-2 mt-2">
                <FaUser className="text-blue-500" />
                {adderName}
              </p>
              <p className="text-lg text-gray-600">{adderEmail}</p>

              <div className="flex justify-between items-center mt-6">
                <p className="text-lg text-gray-700">
                  <span className="font-bold">Likes:</span>{" "}
                  {likeCount || "No likes yet"}
                </p>
                <button
                  onClick={() => handleLikeUnlike(_id, currentUserEmail)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-md transition duration-300 text-white font-semibold shadow-lg ${
                    hasLiked
                      ? "bg-red-500 hover:bg-red-600"
                      : "bg-blue-500 hover:bg-blue-600"
                  }`}
                >
                  {hasLiked ? <FaHeart /> : <FaRegHeart />}
                  {hasLiked ? "Unlike" : "Like"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
